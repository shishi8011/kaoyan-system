# =============================================================================
# agents/weibo_agent.py — 微博异步数据抓取 Agent
#
# 设计原则：
#   1. API 优先：全程调用 m.weibo.cn 的 Ajax JSON 接口，绕开 PC 端 HTML 解析
#   2. 反风控：随机 UA + Cookie 池轮转 + 随机抖动延迟
#   3. 精准异常：将平台风控信号转化为自定义异常，供 Redis Worker 上层路由
#   4. 数据契约：输出统一的 WeiboPost 模型，屏蔽下游对原始 JSON 结构的依赖
#
# 接口依据（截至 2025 年仍有效的移动端 Ajax 端点）：
#   - 热搜榜  : GET https://m.weibo.cn/api/container/getIndex
#               ?containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot
#   - 关键词流: GET https://m.weibo.cn/api/container/getIndex
#               ?containerid=100103type%3D1%26q%3D{encoded_kw}&page_type=searchall&page={n}
#   - 单帖详情: GET https://m.weibo.cn/statuses/show?id={mid}
# =============================================================================

from __future__ import annotations

import asyncio
import html
import logging
import random
import re
import time
import urllib.parse
from datetime import datetime, timezone
from typing import Any, AsyncIterator

import httpx
from pydantic import BaseModel, Field

# 复用同包内的任务模型（不引入循环依赖）
from ..schema import ScrapeTask

logger = logging.getLogger(__name__)


# =============================================================================
# § 1  自定义异常体系
#      所有需要上层 Worker 感知并决策（重试 / DLQ）的信号，
#      都通过子类化 AntiSpiderBlockError 来传递，而非依赖魔法字符串。
# =============================================================================

class WeiboAgentError(Exception):
    """weibo_agent 异常基类，便于调用方做宽泛捕获。"""


class AntiSpiderBlockError(WeiboAgentError):
    """
    平台反爬拦截异常。

    上层 Worker 捕获此异常后，应调用 ReliableQueueClient.nack_task()
    将任务打回重试队列（或在重试耗尽后进入 DLQ）。

    Attributes:
        status_code: 触发拦截的 HTTP 状态码（418/403/302/5xx）
        block_type:  拦截类型描述，便于告警分级
        url:         发生拦截的请求 URL
    """

    def __init__(self, status_code: int, block_type: str, url: str, msg: str = "") -> None:
        self.status_code = status_code
        self.block_type  = block_type
        self.url         = url
        super().__init__(
            f"[AntiSpider] {block_type} | HTTP {status_code} | url={url}"
            + (f" | {msg}" if msg else "")
        )


class RateLimitError(AntiSpiderBlockError):
    """频率限制（HTTP 429 / 418）—— 建议上层加大重试间隔后重试。"""


class ForbiddenError(AntiSpiderBlockError):
    """无权访问（HTTP 403）—— Cookie 失效或账号被封，需换 Cookie 重试。"""


class LoginRequiredError(AntiSpiderBlockError):
    """强制登录跳转（HTTP 302 到登录页）—— 需要带有效 Cookie 重试。"""


class ServerError(AntiSpiderBlockError):
    """平台服务端异常（HTTP 5xx）—— 非客户端问题，可直接重试。"""


class EmptyResultError(WeiboAgentError):
    """接口返回数据为空（ok≠1 或 cards 为空列表）—— 任务可标记为完成但无数据。"""


# =============================================================================
# § 2  输出数据模型 —— 清洗后的微博帖子
#      只保留下游舆情分析真正需要的字段，拒绝传递原始大 JSON。
# =============================================================================

class WeiboPost(BaseModel):
    """
    经过初步净化的单条微博数据契约。

    字段语义：
    - post_id:        微博唯一 ID（mid 字符串，避免 JS 整数溢出问题）
    - user_id:        发帖用户 UID
    - user_name:      发帖用户昵称
    - content:        博文纯文本（已剥离 HTML 标签与表情占位符）
    - created_at:     发帖时间（ISO 8601，含时区，便于时序分析）
    - reposts_count:  转发数
    - comments_count: 评论数
    - likes_count:    点赞数（attitudes_count）
    - source_url:     该帖子的 m.weibo.cn 直链，便于人工复核
    - is_repost:      是否为转发帖（True 时 content 为转发评语，非原文）
    - task_id:        来源任务 ID，保留链路追踪上下文
    """

    post_id:        str
    user_id:        str
    user_name:      str
    content:        str
    created_at:     str   # ISO 8601
    reposts_count:  int   = Field(ge=0)
    comments_count: int   = Field(ge=0)
    likes_count:    int   = Field(ge=0)
    source_url:     str
    is_repost:      bool  = False
    task_id:        str   = ""

    def __repr__(self) -> str:
        return (
            f"<WeiboPost id={self.post_id} "
            f"user={self.user_name!r} "
            f"likes={self.likes_count} "
            f"at={self.created_at}>"
        )


# =============================================================================
# § 3  常量区 —— UA 池、基础 Headers、接口 URL
# =============================================================================

# 移动端 UA 池：混合 iOS Safari / Android Chrome / iPad，模拟真实设备分布
_UA_POOL: list[str] = [
    # iOS Safari
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) "
    "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1",

    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) "
    "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",

    # Android Chrome
    "Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.6367.82 Mobile Safari/537.36",

    "Mozilla/5.0 (Linux; Android 13; SM-S918B) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.119 Mobile Safari/537.36",

    "Mozilla/5.0 (Linux; Android 13; Redmi Note 12) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.178 Mobile Safari/537.36",

    # iPad Safari（部分接口在 iPad UA 下返回更丰富的字段）
    "Mozilla/5.0 (iPad; CPU OS 17_4 like Mac OS X) "
    "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1",

    # 微博 App 内置 WebView（最高信任等级，但特征明显，低频使用）
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) "
    "AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/21A329 Weibo (iPhone13,3__weibo__15.2.0"
    "__iphone__os__17.0) AlipayDefined(nt:WIFI,ws:414|896|3.0)",
]

# 请求基础 Headers（不含 User-Agent 和 Cookie，这两项在运行时动态注入）
_BASE_HEADERS: dict[str, str] = {
    "Accept":           "application/json, text/plain, */*",
    "Accept-Language":  "zh-CN,zh;q=0.9,en;q=0.8",
    "Accept-Encoding":  "gzip, deflate, br",
    "Referer":          "https://m.weibo.cn/",
    "Origin":           "https://m.weibo.cn",
    "X-Requested-With": "XMLHttpRequest",
    "MWeibo-Pwa":       "1",
    # 模拟微博 PWA 客户端标识，减少服务端行为差异
}

# ── 接口 URL 模板 ──────────────────────────────────────────────────────────────
_BASE_URL   = "https://m.weibo.cn"
_API_BASE   = f"{_BASE_URL}/api/container/getIndex"

# 热搜榜：containerid 固定，是官方实时热搜接口
_HOT_SEARCH_CONTAINER = (
    "106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot"
)

# 关键词搜索：q 参数需 URL 编码，page 从 1 开始
_SEARCH_CONTAINER_TPL = "100103type%3D1%26q%3D{kw}"

# 单帖详情（非 HTML，直接返回 JSON）
_STATUS_SHOW_URL = f"{_BASE_URL}/statuses/show"


# =============================================================================
# § 4  工具函数 —— 文本清洗、时间解析
# =============================================================================

# 匹配微博富文本中的 <a>、<span>、表情 img 等标签
_HTML_TAG_RE   = re.compile(r"<[^>]+>", re.DOTALL)
# 匹配连续空白字符（包括 \u200b 等零宽字符）
_WHITESPACE_RE = re.compile(r"[\s\u200b\u200c\u200d\ufeff]+")
# 匹配 @ 提及后的冗余空格（微博富文本特有）
_AT_FIX_RE     = re.compile(r"@(\S+)\s*")


def _clean_weibo_text(raw_html: str) -> str:
    """
    将微博 API 返回的富文本 HTML 清洗为可读纯文本。

    处理步骤：
      1. html.unescape：还原 &amp; &lt; 等 HTML 实体
      2. 剥离全部 HTML 标签（保留标签内的文字内容）
      3. 规范化空白字符
      4. 修复 @ 提及后的多余空格
    """
    if not raw_html:
        return ""
    text = html.unescape(raw_html)
    text = _HTML_TAG_RE.sub("", text)
    text = _WHITESPACE_RE.sub(" ", text).strip()
    text = _AT_FIX_RE.sub(r"@\1 ", text)
    return text


# 微博 API 返回的时间格式示例："Mon Apr 01 12:34:56 +0800 2024"
_WEIBO_DATE_FMT = "%a %b %d %H:%M:%S %z %Y"


def _parse_weibo_time(raw: str) -> str:
    """
    将微博 API 的自定义日期字符串转换为 ISO 8601 格式（含时区）。

    Args:
        raw: 如 "Mon Apr 01 12:34:56 +0800 2024"

    Returns:
        ISO 8601 字符串，如 "2024-04-01T12:34:56+08:00"
        解析失败时返回原始字符串（降级处理，不抛出异常）
    """
    try:
        dt = datetime.strptime(raw.strip(), _WEIBO_DATE_FMT)
        return dt.isoformat()
    except ValueError:
        logger.debug("无法解析微博时间格式: %r，原样返回", raw)
        return raw


def _extract_post(raw: dict[str, Any], task_id: str = "") -> WeiboPost | None:
    """
    从微博 API 返回的单条 mblog 字典中提取核心字段，构造 WeiboPost。

    Args:
        raw:     mblog 原始字典（来自 cards[].mblog）
        task_id: 关联的 ScrapeTask.task_id，用于链路追踪

    Returns:
        WeiboPost 对象；若关键字段缺失（非正常数据结构）则返回 None
    """
    try:
        user = raw.get("user") or {}

        # ── 检测转发帖 ──────────────────────────────────────────────────────
        # 转发帖中 retweeted_status 非空；text 是转发评语，非原帖内容
        is_repost        = "retweeted_status" in raw and raw["retweeted_status"]
        raw_text: str    = raw.get("text", "")
        content          = _clean_weibo_text(raw_text)

        # post_id 优先取 mid（字符串），其次取 id（可能超出 JS 整数范围）
        post_id: str     = str(raw.get("mid") or raw.get("id", ""))
        if not post_id:
            logger.debug("跳过无 ID 的帖子: %s", raw_text[:40])
            return None

        user_id: str     = str(user.get("id", ""))
        user_name: str   = user.get("screen_name", "")
        created_at: str  = _parse_weibo_time(raw.get("created_at", ""))
        source_url: str  = f"{_BASE_URL}/detail/{post_id}"

        return WeiboPost(
            post_id        = post_id,
            user_id        = user_id,
            user_name      = user_name,
            content        = content,
            created_at     = created_at,
            reposts_count  = int(raw.get("reposts_count",  0) or 0),
            comments_count = int(raw.get("comments_count", 0) or 0),
            likes_count    = int(raw.get("attitudes_count", 0) or 0),
            source_url     = source_url,
            is_repost      = bool(is_repost),
            task_id        = task_id,
        )
    except Exception as exc:
        # 单条解析失败不应阻断整批数据，记录后跳过
        logger.warning("解析单条 mblog 失败: %s | raw_keys=%s", exc, list(raw.keys()))
        return None


# =============================================================================
# § 5  核心 Agent 类
# =============================================================================

class WeiboAgent:
    """
    微博异步数据抓取 Agent。

    线程安全：本类基于 asyncio，所有方法均为协程，请在同一事件循环内使用。
    生命周期：推荐通过 async with WeiboAgent(...) as agent: 使用，
              确保 httpx.AsyncClient 被正确关闭。

    Args:
        cookies:       Cookie 字符串池（每条为完整的 Cookie 请求头字符串）。
                       高频请求或敏感词条必须提供；留空则以游客态访问。
        proxy:         HTTP/SOCKS5 代理 URL，如 "http://127.0.0.1:7890"。
        request_timeout: 单次请求超时（秒），默认 12 秒。
        min_delay:     两次请求之间的最小随机延迟（秒）。
        max_delay:     两次请求之间的最大随机延迟（秒）。
        max_pages:     关键词翻页抓取时的最大页数上限（防止无限翻页）。

    Example::

        cookies_pool = [
            "SUB=xxx; SUBP=yyy; ...",   # 账号 A 的 Cookie
            "SUB=aaa; SUBP=bbb; ...",   # 账号 B 的 Cookie（轮转使用）
        ]
        async with WeiboAgent(cookies=cookies_pool) as agent:
            task = ScrapeTask(platform=Platform.WEIBO, target="某明星 黑公关")
            posts = await agent.run(task)
    """

    def __init__(
        self,
        cookies:         list[str] | None = None,
        proxy:           str | None       = None,
        request_timeout: float            = 12.0,
        min_delay:       float            = 1.2,
        max_delay:       float            = 3.5,
        max_pages:       int              = 5,
    ) -> None:
        self._cookie_pool: list[str] = cookies or []
        self._proxy                  = proxy
        self._timeout                = request_timeout
        self._min_delay              = min_delay
        self._max_delay              = max_delay
        self._max_pages              = max_pages

        # Cookie 轮转游标（简单轮询，可替换为权重或健康度算法）
        self._cookie_cursor: int = 0

        # httpx 异步客户端（延迟初始化，在 __aenter__ 中创建）
        self._client: httpx.AsyncClient | None = None

        # 请求计数器，用于日志和频率自监控
        self._request_count: int = 0

    # ── 异步上下文管理器 ──────────────────────────────────────────────────────

    async def __aenter__(self) -> "WeiboAgent":
        """初始化 httpx.AsyncClient，配置连接池和代理。"""
        self._client = httpx.AsyncClient(
            proxy   = self._proxy,
            timeout = httpx.Timeout(self._timeout, connect=5.0),
            # 连接池：最多 20 个连接，单 host 最多 10 个
            limits  = httpx.Limits(max_connections=20, max_keepalive_connections=10),
            # 自动处理 gzip/br 解压
            http2   = False,  # m.weibo.cn 对 HTTP/2 支持不稳定，显式禁用
            # 不自动跟随 302 跳转：我们需要自己处理强制登录重定向
            follow_redirects = False,
        )
        logger.info(
            "WeiboAgent 已初始化 | cookie_pool=%d proxy=%s",
            len(self._cookie_pool), self._proxy or "无",
        )
        return self

    async def __aexit__(self, *_: Any) -> None:
        """关闭 httpx 客户端，释放连接池资源。"""
        if self._client:
            await self._client.aclose()
            logger.debug("WeiboAgent httpx 客户端已关闭")

    # ── 内部工具方法 ──────────────────────────────────────────────────────────

    def _build_headers(self) -> dict[str, str]:
        """
        构造本次请求的完整 Headers。

        策略：
        - User-Agent：从池中随机抽取，每次请求独立随机（非固定轮转）
        - Cookie：轮询 cookie_pool，每次取一个，cursor 递增
          若池为空，则省略 Cookie 字段（游客态）
        """
        headers = dict(_BASE_HEADERS)
        headers["User-Agent"] = random.choice(_UA_POOL)

        if self._cookie_pool:
            # 轮询取 Cookie，用取模保证游标不越界
            cookie_str = self._cookie_pool[self._cookie_cursor % len(self._cookie_pool)]
            self._cookie_cursor += 1
            headers["Cookie"] = cookie_str

        return headers

    async def _jitter_sleep(self) -> None:
        """
        在两次请求之间插入随机抖动延迟。

        min_delay ~ max_delay 之间均匀分布，避免固定间隔被识别为机器行为。
        每满 10 次请求额外增加一次 2~5 秒的"思考停顿"，模拟人类浏览行为。
        """
        delay = random.uniform(self._min_delay, self._max_delay)
        if self._request_count > 0 and self._request_count % 10 == 0:
            # 每 10 次请求后的"人类思考停顿"
            extra = random.uniform(2.0, 5.0)
            logger.debug("第 %d 次请求后触发额外停顿 %.1fs", self._request_count, extra)
            delay += extra
        await asyncio.sleep(delay)

    async def _request(self, url: str, params: dict[str, str] | None = None) -> dict[str, Any]:
        """
        核心 HTTP 请求方法，封装了：
          - 随机 Headers 注入
          - 抖动延迟（在请求前执行，不影响首次请求）
          - 精准的反爬状态码检测与自定义异常抛出
          - JSON 解析失败的降级处理

        Args:
            url:    请求 URL
            params: 查询参数字典（会拼接到 URL 后）

        Returns:
            解析后的 JSON 字典（接口 data 层，即 response.json()）

        Raises:
            RateLimitError:    HTTP 418 / 429
            ForbiddenError:    HTTP 403
            LoginRequiredError: HTTP 302 且目标为登录页
            ServerError:       HTTP 5xx
            AntiSpiderBlockError: 其他未预期的拦截状态码
            httpx.TimeoutException: 请求超时（让上层 Worker 决定是否重试）
            httpx.RequestError:    网络层错误
        """
        assert self._client is not None, "请在 async with 上下文中使用 WeiboAgent"

        # 首次请求前不 sleep，后续请求才 sleep
        if self._request_count > 0:
            await self._jitter_sleep()

        headers = self._build_headers()
        self._request_count += 1

        logger.debug(
            "[REQ #%d] GET %s params=%s UA=%.30s...",
            self._request_count, url, params, headers["User-Agent"],
        )

        try:
            resp = await self._client.get(url, params=params, headers=headers)
        except httpx.TimeoutException as exc:
            # 超时不属于风控，直接向上抛出，由 Worker 决策重试
            logger.warning("请求超时 url=%s: %s", url, exc)
            raise
        except httpx.RequestError as exc:
            # DNS 解析失败、连接被重置等网络层错误
            logger.warning("网络请求失败 url=%s: %s", url, exc)
            raise

        status = resp.status_code
        logger.debug("[RSP #%d] HTTP %d url=%s", self._request_count, status, url)

        # ── 精准状态码路由 ─────────────────────────────────────────────────
        if status == 418:
            # I'm a teapot —— 微博专用的反刷标志，命中频率限制
            raise RateLimitError(418, "频率限制(Teapot)", url,
                                  "触发高频检测，建议降低请求速率或更换 Cookie")

        if status == 429:
            raise RateLimitError(429, "Too Many Requests", url,
                                  "请求过于频繁，建议退避后重试")

        if status == 403:
            raise ForbiddenError(403, "无权限访问", url,
                                  "Cookie 可能已失效或账号被封禁，建议换 Cookie")

        if status in (301, 302, 307, 308):
            location = resp.headers.get("location", "")
            if "login" in location or "passport" in location:
                raise LoginRequiredError(status, "强制登录跳转", url,
                                          f"重定向至登录页: {location}")
            # 非登录类跳转（如 CDN 跳转），记录后按正常流程继续
            logger.warning("非登录跳转 %d → %s，尝试跟随", status, location)

        if status >= 500:
            raise ServerError(status, "平台服务端异常", url,
                               f"HTTP {status}，可直接重试")

        if status not in (200, 206):
            # 其他未预期状态码，统一归为风控拦截
            raise AntiSpiderBlockError(status, f"未知拦截 HTTP {status}", url)

        # ── JSON 解析 ──────────────────────────────────────────────────────
        try:
            return resp.json()
        except Exception as exc:
            # 返回了非 JSON 内容（HTML 报错页、验证码页等）
            preview = resp.text[:200].replace("\n", " ")
            logger.error("JSON 解析失败 url=%s | preview: %s", url, preview)
            raise AntiSpiderBlockError(
                200, "非JSON响应（疑似验证码页）", url,
                f"parse_error={exc} preview={preview[:80]!r}",
            ) from exc

    def _assert_api_ok(self, data: dict[str, Any], url: str) -> None:
        """
        检查微博 API 通用响应体中的 ok 字段。

        微博 API 返回 ok=0 通常意味着：
          - 词条被屏蔽（敏感词）
          - 账号权限不足
          - 接口参数错误

        Raises:
            AntiSpiderBlockError: ok != 1
        """
        if data.get("ok") != 1:
            msg = data.get("msg", "")
            raise AntiSpiderBlockError(
                200, f"API ok=0（{msg}）", url,
                "接口返回业务错误，可能词条被屏蔽或需要更高权限 Cookie",
            )

    # =========================================================================
    # § 6  核心抓取方法
    # =========================================================================

    async def fetch_hot_search(self, task_id: str = "") -> list[WeiboPost]:
        """
        抓取当前微博实时热搜榜。

        接口特点：
          - 无需登录即可访问（游客态）
          - 返回结构：data.cards[0].card_group[] 中含 desc（词条名）和 scheme（链接）
          - 热搜榜条目本身无 mblog，需二次请求各词条的搜索流获取帖子

        本方法的策略：
          1. 获取热搜词条列表（仅提取名称）
          2. 对 TOP 10 词条异步并发拉取首页搜索结果
          3. 汇总去重后返回

        Returns:
            WeiboPost 列表（所有热搜词条首页帖子的合集）

        Raises:
            AntiSpiderBlockError 及其子类
        """
        url = _API_BASE
        params = {"containerid": _HOT_SEARCH_CONTAINER}

        logger.info("开始抓取微博热搜榜...")
        raw = await self._request(url, params)
        self._assert_api_ok(raw, url)

        # ── 解析热搜词条 ──────────────────────────────────────────────────────
        hot_words: list[str] = []
        cards = raw.get("data", {}).get("cards", [])
        for card in cards:
            for item in card.get("card_group", []):
                word = item.get("desc", "").strip()
                if word and word not in hot_words:
                    hot_words.append(word)

        logger.info("热搜榜共解析到 %d 个词条，并发抓取 TOP 10...", len(hot_words))

        # ── 并发拉取 TOP 10 词条的搜索首页 ──────────────────────────────────
        top_words = hot_words[:10]
        tasks = [
            self.fetch_keyword_timeline(word, page_limit=1, task_id=task_id)
            for word in top_words
        ]
        results = await asyncio.gather(*tasks, return_exceptions=True)

        posts: list[WeiboPost] = []
        for word, result in zip(top_words, results):
            if isinstance(result, Exception):
                # 单个词条失败不影响整体（记录后跳过）
                logger.warning("热搜词条 %r 抓取失败: %s", word, result)
            else:
                posts.extend(result)

        logger.info("热搜榜抓取完成，共获得 %d 条帖子", len(posts))
        return posts

    async def fetch_keyword_timeline(
        self,
        keyword:    str,
        page_limit: int  | None = None,
        task_id:    str         = "",
    ) -> list[WeiboPost]:
        """
        按关键词搜索微博时间线（支持翻页）。

        接口行为：
          - 搜索结果按时间倒序排列
          - page 参数从 1 开始；当 cards 为空列表时说明已到末页
          - 部分敏感词条需登录态 Cookie 才能返回结果

        Args:
            keyword:    搜索关键词（支持中文，内部自动 URL 编码）
            page_limit: 最大翻页数（None 时使用 self._max_pages）
            task_id:    关联的 ScrapeTask.task_id

        Returns:
            所有页面的 WeiboPost 合集（已去重）

        Raises:
            AntiSpiderBlockError 及其子类
            EmptyResultError:    首页即为空（词条可能被屏蔽）
        """
        limit       = page_limit if page_limit is not None else self._max_pages
        encoded_kw  = urllib.parse.quote(keyword)
        container   = _SEARCH_CONTAINER_TPL.format(kw=encoded_kw)
        seen_ids: set[str]    = set()
        all_posts: list[WeiboPost] = []

        logger.info("开始抓取关键词 %r 时间线，最大页数=%d", keyword, limit)

        for page in range(1, limit + 1):
            url    = _API_BASE
            params = {
                "containerid": container,
                "page_type":   "searchall",
                "page":        str(page),
            }

            try:
                raw = await self._request(url, params)
                self._assert_api_ok(raw, url)
            except AntiSpiderBlockError:
                # 风控异常直接向上传递，由 Worker 处理
                raise
            except Exception as exc:
                logger.warning("关键词 %r 第 %d 页请求失败: %s，停止翻页", keyword, page, exc)
                break

            cards = raw.get("data", {}).get("cards", [])
            if not cards:
                if page == 1:
                    raise EmptyResultError(
                        f"关键词 {keyword!r} 首页返回空结果，"
                        "可能词条被屏蔽或需要登录态 Cookie"
                    )
                logger.info("关键词 %r 第 %d 页为空，已到末页，停止翻页", keyword, page)
                break

            # ── 提取每张卡片中的 mblog ────────────────────────────────────
            page_new = 0
            for card in cards:
                mblog = card.get("mblog")
                if not mblog:
                    continue
                post = _extract_post(mblog, task_id)
                if post and post.post_id not in seen_ids:
                    seen_ids.add(post.post_id)
                    all_posts.append(post)
                    page_new += 1

            logger.info(
                "关键词 %r 第 %d/%d 页: 新增 %d 条（累计 %d 条）",
                keyword, page, limit, page_new, len(all_posts),
            )

            # 若本页新增为 0（全部重复），提前终止翻页
            if page_new == 0:
                logger.debug("第 %d 页无新帖子，提前终止翻页", page)
                break

        logger.info("关键词 %r 抓取完成，共 %d 条帖子", keyword, len(all_posts))
        return all_posts

    async def fetch_post_detail(self, mid: str, task_id: str = "") -> WeiboPost | None:
        """
        抓取单条微博帖子的详情。

        接口：GET https://m.weibo.cn/statuses/show?id={mid}
        此接口比搜索接口返回更完整的字段（如全文、图片列表等）。

        Args:
            mid:     微博帖子 ID（mid 字符串）
            task_id: 关联的 ScrapeTask.task_id

        Returns:
            WeiboPost 对象；若帖子不存在或已被删除则返回 None

        Raises:
            AntiSpiderBlockError 及其子类
        """
        url    = _STATUS_SHOW_URL
        params = {"id": mid}

        logger.info("抓取单帖详情 mid=%s", mid)
        raw = await self._request(url, params)

        # statuses/show 接口直接返回 mblog 对象，无 ok 字段包装
        if not raw or not raw.get("id"):
            logger.warning("帖子 mid=%s 不存在或已被删除", mid)
            return None

        return _extract_post(raw, task_id)

    async def _fetch_all_from_url(self, url: str, task_id: str) -> list[WeiboPost]:
        """
        从直链 URL 中提取 mid，然后调用 fetch_post_detail。

        支持的 URL 格式：
          - https://m.weibo.cn/detail/1234567890
          - https://weibo.com/1234567/AbcDef（需进一步解析，此处简化处理）

        Returns:
            包含单个帖子的列表；无法解析则返回空列表
        """
        # 尝试从 URL 路径中提取数字 ID
        match = re.search(r"/detail/(\d+)", url)
        if not match:
            # 尝试匹配 weibo.com/uid/mid_b62 格式（简化：取路径最后一段）
            match = re.search(r"weibo\.com/\d+/(\w+)", url)

        if not match:
            logger.warning("无法从 URL 提取帖子 ID: %s", url)
            return []

        mid = match.group(1)
        post = await self.fetch_post_detail(mid, task_id)
        return [post] if post else []

    # =========================================================================
    # § 7  统一入口 —— 与 ScrapeTask 对接
    # =========================================================================

    async def run(self, task: ScrapeTask) -> list[WeiboPost]:
        """
        Agent 统一调度入口，根据 ScrapeTask.target 自动路由到对应抓取逻辑。

        路由策略：
          1. target 以 "http" 开头          → 直链单帖抓取（fetch_post_detail）
          2. target == "__hot_search__"      → 热搜榜抓取（fetch_hot_search）
          3. 其他任意字符串                  → 关键词时间线（fetch_keyword_timeline）

        Args:
            task: 来自 Redis 队列的 ScrapeTask 对象

        Returns:
            WeiboPost 列表（空列表表示抓取成功但无数据）

        Raises:
            AntiSpiderBlockError 及其子类：上层 Worker 据此决定重试 or DLQ
            EmptyResultError:              词条被屏蔽，可视情况重试
            httpx.TimeoutException:        网络超时，建议重试
        """
        target  = task.target.strip()
        task_id = task.task_id

        logger.info(
            "WeiboAgent.run 开始 [task_id=%s target=%.80s]",
            task_id[:8], target,
        )

        t0 = time.perf_counter()

        if target.startswith("http"):
            # ── 直链模式：抓取单条帖子 ────────────────────────────────────
            posts = await self._fetch_all_from_url(target, task_id)

        elif target == "__hot_search__":
            # ── 热搜榜模式：保留魔法关键词便于 Producer 快速调度 ────────
            posts = await self.fetch_hot_search(task_id)

        else:
            # ── 关键词搜索模式（最常用） ──────────────────────────────────
            posts = await self.fetch_keyword_timeline(target, task_id=task_id)

        elapsed = time.perf_counter() - t0
        logger.info(
            "WeiboAgent.run 完成 [task_id=%s] 耗时=%.2fs 帖子数=%d",
            task_id[:8], elapsed, len(posts),
        )
        return posts


# =============================================================================
# § 8  异步生成器接口（流式处理大批量数据时使用）
#      当结果集较大（> 1000 条）时，避免一次性加载全部到内存
# =============================================================================

async def stream_keyword_posts(
    agent:      WeiboAgent,
    keyword:    str,
    task_id:    str = "",
) -> AsyncIterator[WeiboPost]:
    """
    流式产出关键词搜索结果，逐页 yield，适合实时写入数据库或消息队列。

    Usage::

        async with WeiboAgent(cookies=pool) as agent:
            async for post in stream_keyword_posts(agent, "某明星 黑公关"):
                await db.insert(post.model_dump())

    Yields:
        WeiboPost 对象（按页顺序，页内按 API 返回顺序）
    """
    encoded_kw = urllib.parse.quote(keyword)
    container  = _SEARCH_CONTAINER_TPL.format(kw=encoded_kw)
    seen_ids: set[str] = set()

    for page in range(1, agent._max_pages + 1):
        params = {
            "containerid": container,
            "page_type":   "searchall",
            "page":        str(page),
        }
        raw   = await agent._request(_API_BASE, params)
        agent._assert_api_ok(raw, _API_BASE)
        cards = raw.get("data", {}).get("cards", [])

        if not cards:
            break

        for card in cards:
            mblog = card.get("mblog")
            if not mblog:
                continue
            post = _extract_post(mblog, task_id)
            if post and post.post_id not in seen_ids:
                seen_ids.add(post.post_id)
                yield post


# =============================================================================
# § 9  与 worker.py 的对接示例（注释形式，供 _handle_weibo 参考）
# =============================================================================
#
# 在 sentiment_scheduler/worker.py 中将 _handle_weibo 替换为：
#
#   from .agents import WeiboAgent, AntiSpiderBlockError
#
#   # Cookie 池从环境变量或配置中心加载
#   WEIBO_COOKIES: list[str] = os.getenv("WEIBO_COOKIES", "").split("||")
#
#   async def _handle_weibo(task: ScrapeTask) -> list[WeiboPost]:
#       async with WeiboAgent(cookies=WEIBO_COOKIES or None) as agent:
#           try:
#               posts = await agent.run(task)
#               # 在此将 posts 写入 Elasticsearch / PostgreSQL / 消息队列
#               for post in posts:
#                   logger.info("入库: %s", post)
#               return posts
#
#           except AntiSpiderBlockError as exc:
#               # 风控异常：向上抛出，Worker 会执行 nack_task() 打回重试队列
#               logger.warning("微博风控拦截: %s", exc)
#               raise
#
#           except EmptyResultError as exc:
#               # 词条被屏蔽：不重试（避免无效重试耗尽次数），视为"完成但无数据"
#               logger.warning("词条可能被屏蔽: %s", exc)
#               return []
