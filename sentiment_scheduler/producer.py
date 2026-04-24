# =============================================================================
# producer.py — 任务生产者
#
# 职责：
#   - 构造 ScrapeTask 对象
#   - 调用 ReliableQueueClient.push_task() 推入 Redis 队列
#   - 演示去重机制（同一目标在 TTL 内不会重复入队）
#
# 运行方式：
#   python -m sentiment_scheduler.producer
# =============================================================================

import asyncio
import logging
import sys

from .redis_client import ReliableQueueClient, create_redis_pool
from .schema import Platform, ScrapeTask, TaskPriority

# ─────────────────────────────────────────────────────────────────────────────
# 日志配置
# ─────────────────────────────────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)-8s] %(name)s — %(message)s",
    stream=sys.stdout,
)
logger = logging.getLogger(__name__)


# ─────────────────────────────────────────────────────────────────────────────
# 测试任务数据集
# ─────────────────────────────────────────────────────────────────────────────
SAMPLE_TASKS: list[dict] = [
    # 紧急：疑似黑公关帖，需立即处理
    {
        "platform": Platform.WEIBO,
        "target":   "https://weibo.com/detail/4999999999",
        "priority": TaskPriority.CRITICAL,
    },
    # 高优先级：重要舆情关键词监控
    {
        "platform": Platform.XIAOHONGSHU,
        "target":   "某明星 黑公关",
        "priority": TaskPriority.HIGH,
    },
    {
        "platform": Platform.DOUYIN,
        "target":   "https://www.douyin.com/video/12345678901",
        "priority": TaskPriority.HIGH,
    },
    # 普通：定期监控
    {
        "platform": Platform.BILIBILI,
        "target":   "娱乐圈负面新闻",
        "priority": TaskPriority.NORMAL,
    },
    {
        "platform": Platform.WECHAT,
        "target":   "公众号爆料",
        "priority": TaskPriority.NORMAL,
    },
    # 低优先级：背景词云更新
    {
        "platform": Platform.WEIBO,
        "target":   "娱乐 热搜",
        "priority": TaskPriority.LOW,
    },
    # ── 重复任务（演示去重）──────────────────────────────────────────────────
    # 与第一个任务完全相同，应被去重过滤
    {
        "platform": Platform.WEIBO,
        "target":   "https://weibo.com/detail/4999999999",
        "priority": TaskPriority.CRITICAL,
    },
    # 与第二个任务完全相同
    {
        "platform": Platform.XIAOHONGSHU,
        "target":   "某明星 黑公关",
        "priority": TaskPriority.HIGH,
    },
]


# ─────────────────────────────────────────────────────────────────────────────
# 生产者核心逻辑
# ─────────────────────────────────────────────────────────────────────────────
async def produce_tasks() -> None:
    """
    批量推送测试任务到 Redis 队列，并打印统计信息。

    演示内容：
    - 正常任务入队（按优先级进入不同队列）
    - 重复任务被去重过滤
    - 推送失败时的异常捕获
    """
    redis_conn = create_redis_pool()
    client = ReliableQueueClient(redis_conn)

    success_count = 0
    skipped_count = 0
    failed_count  = 0

    logger.info("=" * 60)
    logger.info("开始推送 %d 个测试任务...", len(SAMPLE_TASKS))
    logger.info("=" * 60)

    for raw in SAMPLE_TASKS:
        try:
            task = ScrapeTask(**raw)
            pushed = await client.push_task(task)

            if pushed:
                success_count += 1
            else:
                skipped_count += 1

        except ValueError as ve:
            # Pydantic 校验失败（字段不合法）
            logger.error("任务数据非法，跳过: %s | data=%s", ve, raw)
            failed_count += 1
        except Exception as exc:
            # Redis 连接错误等不可预期异常
            logger.error("推送任务异常: %s", exc, exc_info=True)
            failed_count += 1

        # 短暂间隔，便于观察日志
        await asyncio.sleep(0.05)

    # ── 打印队列状态快照 ───────────────────────────────────────────────────
    logger.info("=" * 60)
    logger.info("推送完成 ✓ 成功=%d 去重跳过=%d 失败=%d", success_count, skipped_count, failed_count)
    stats = await client.queue_stats()
    logger.info("当前队列状态:")
    for queue_name, length in stats.items():
        logger.info("  %-45s : %d", queue_name, length)
    logger.info("=" * 60)

    await redis_conn.aclose()


# ─────────────────────────────────────────────────────────────────────────────
# 入口
# ─────────────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    asyncio.run(produce_tasks())
