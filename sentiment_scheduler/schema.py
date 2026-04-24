# =============================================================================
# schema.py — Pydantic 数据模型定义
# 所有在 Redis 中流转的数据均以此模型为唯一契约，保证类型安全。
# =============================================================================

import hashlib
import time
import uuid
from enum import Enum

from pydantic import BaseModel, Field, model_validator


# ─────────────────────────────────────────────────────────────────────────────
# 枚举：目标平台
# ─────────────────────────────────────────────────────────────────────────────
class Platform(str, Enum):
    """当前系统支持监控的内容平台。"""
    WEIBO        = "weibo"         # 微博
    XIAOHONGSHU  = "xiaohongshu"   # 小红书
    DOUYIN       = "douyin"        # 抖音
    BILIBILI     = "bilibili"      # B站
    WECHAT       = "wechat"        # 微信公众号


# ─────────────────────────────────────────────────────────────────────────────
# 枚举：任务优先级
# 数值越大优先级越高，与队列轮询顺序对应
# ─────────────────────────────────────────────────────────────────────────────
class TaskPriority(str, Enum):
    """
    任务优先级枚举。
    - CRITICAL: 紧急黑公关帖，需立即处理
    - HIGH:     重要舆情，如明星负面新闻
    - NORMAL:   常规定期抓取
    - LOW:      低频背景监控
    """
    CRITICAL = "CRITICAL"
    HIGH     = "HIGH"
    NORMAL   = "NORMAL"
    LOW      = "LOW"


# ─────────────────────────────────────────────────────────────────────────────
# 枚举：任务状态（仅用于日志/监控，队列位置才是真实状态）
# ─────────────────────────────────────────────────────────────────────────────
class TaskStatus(str, Enum):
    PENDING    = "PENDING"     # 等待被消费
    PROCESSING = "PROCESSING"  # 已被 Worker 取走，正在处理
    DONE       = "DONE"        # 成功完成
    FAILED     = "FAILED"      # 失败，等待重试
    DEAD       = "DEAD"        # 已进入死信队列


# ─────────────────────────────────────────────────────────────────────────────
# 核心数据模型：抓取任务
# ─────────────────────────────────────────────────────────────────────────────
class ScrapeTask(BaseModel):
    """
    舆情抓取任务模型。
    序列化为 JSON 字符串后存入 Redis List；反序列化时还原为此对象。

    字段说明：
    - task_id:     全局唯一任务 ID（UUID4），由系统自动生成
    - platform:    目标平台（见 Platform 枚举）
    - target:      抓取目标，可以是 URL（直链）或关键词（搜索型任务）
    - priority:    任务优先级，决定进入哪条队列
    - retry_count: 当前已重试次数；>=0，超过 MAX_RETRY 进入 DLQ
    - status:      任务当前状态，便于日志追踪
    - fingerprint: 去重指纹（MD5），由 platform + target 计算得出
    - created_at:  任务创建时间戳（Unix 秒）
    - last_error:  最近一次失败的错误信息，便于排查
    """

    # ── 必填字段 ─────────────────────────────────────────────────────────────
    platform: Platform
    target:   str = Field(
        min_length=1,
        max_length=2048,
        description="抓取目标：URL 或关键词，最长 2048 字符",
    )

    # ── 带默认值的字段 ────────────────────────────────────────────────────────
    task_id:     str          = Field(default_factory=lambda: str(uuid.uuid4()))
    priority:    TaskPriority = Field(default=TaskPriority.NORMAL)
    retry_count: int          = Field(default=0, ge=0, description="已重试次数，不可为负")
    status:      TaskStatus   = Field(default=TaskStatus.PENDING)
    fingerprint: str          = Field(default="", description="去重指纹，由模型初始化时自动计算")
    created_at:  float        = Field(default_factory=time.time)
    last_error:  str | None   = Field(default=None, description="最近一次失败的异常信息")

    # ── 自动计算指纹 ──────────────────────────────────────────────────────────
    @model_validator(mode="after")
    def _compute_fingerprint(self) -> "ScrapeTask":
        """
        在模型初始化完成后自动计算指纹。
        指纹 = MD5(platform:target)，相同平台+目标的任务指纹相同。
        外部传入的 fingerprint 会被覆盖，确保一致性。
        """
        raw = f"{self.platform.value}:{self.target}"
        self.fingerprint = hashlib.md5(raw.encode("utf-8")).hexdigest()
        return self

    # ── 序列化辅助 ─────────────────────────────────────────────────────────────
    def to_redis_str(self) -> str:
        """将任务序列化为 JSON 字符串，用于存入 Redis。"""
        return self.model_dump_json()

    @classmethod
    def from_redis_str(cls, raw: str | bytes) -> "ScrapeTask":
        """从 Redis 取出的原始字节/字符串反序列化为 ScrapeTask 对象。"""
        if isinstance(raw, bytes):
            raw = raw.decode("utf-8")
        return cls.model_validate_json(raw)

    def __repr__(self) -> str:
        return (
            f"<ScrapeTask id={self.task_id[:8]}… "
            f"platform={self.platform.value} "
            f"priority={self.priority.value} "
            f"retry={self.retry_count} "
            f"status={self.status.value}>"
        )
