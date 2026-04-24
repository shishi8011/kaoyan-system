# =============================================================================
# worker.py — 异步任务消费者骨架
#
# 架构说明：
#   - 支持多 Worker 协程并发（asyncio.gather），无需多进程
#   - 每个 Worker 独立循环：acquire → process → ack/nack
#   - 优雅关闭：捕获 SIGINT/SIGTERM，等待当前任务处理完毕再退出
#   - 崩溃恢复：启动时自动扫描 processing 队列，将遗留任务重新入队
#
# 运行方式：
#   python -m sentiment_scheduler.worker
#   WORKER_CONCURRENCY=4 python -m sentiment_scheduler.worker
# =============================================================================

import asyncio
import logging
import os
import signal
import sys
from typing import Any

from .redis_client import ReliableQueueClient, create_redis_pool
from .schema import Platform, ScrapeTask, TaskStatus

# ─────────────────────────────────────────────────────────────────────────────
# 日志配置
# ─────────────────────────────────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)-8s] %(name)s [worker-%(worker_id)s] — %(message)s",
    stream=sys.stdout,
)
logger = logging.getLogger(__name__)

# ─────────────────────────────────────────────────────────────────────────────
# Worker 并发数（通过环境变量注入，默认 2）
# ─────────────────────────────────────────────────────────────────────────────
WORKER_CONCURRENCY: int = int(os.getenv("WORKER_CONCURRENCY", 2))


# =============================================================================
# 平台处理器注册表
# 实际业务逻辑在此处扩展：为每个 Platform 注册对应的抓取函数
# =============================================================================

async def _handle_weibo(task: ScrapeTask) -> Any:
    """微博抓取处理器（骨架）。"""
    logger.info("正在抓取微博 target=%.80s", task.target)
    # TODO: 调用 playwright / httpx 等实现真实抓取逻辑
    # 示例：模拟耗时 I/O 操作
    await asyncio.sleep(0.3)
    # 返回结构化结果（根据业务定义）
    return {"status": "ok", "items": []}


async def _handle_xiaohongshu(task: ScrapeTask) -> Any:
    """小红书抓取处理器（骨架）。"""
    logger.info("正在抓取小红书 target=%.80s", task.target)
    await asyncio.sleep(0.3)
    return {"status": "ok", "items": []}


async def _handle_douyin(task: ScrapeTask) -> Any:
    """抖音抓取处理器（骨架）。"""
    logger.info("正在抓取抖音 target=%.80s", task.target)
    await asyncio.sleep(0.3)
    return {"status": "ok", "items": []}


async def _handle_bilibili(task: ScrapeTask) -> Any:
    """B站抓取处理器（骨架）。"""
    logger.info("正在抓取B站 target=%.80s", task.target)
    await asyncio.sleep(0.3)
    return {"status": "ok", "items": []}


async def _handle_wechat(task: ScrapeTask) -> Any:
    """微信公众号抓取处理器（骨架）。"""
    logger.info("正在抓取微信公众号 target=%.80s", task.target)
    await asyncio.sleep(0.3)
    return {"status": "ok", "items": []}


# 平台 → 处理器映射表
PLATFORM_HANDLERS: dict[Platform, Any] = {
    Platform.WEIBO:       _handle_weibo,
    Platform.XIAOHONGSHU: _handle_xiaohongshu,
    Platform.DOUYIN:      _handle_douyin,
    Platform.BILIBILI:    _handle_bilibili,
    Platform.WECHAT:      _handle_wechat,
}


# =============================================================================
# 任务分发器：根据平台路由到对应处理器
# =============================================================================

async def dispatch_task(task: ScrapeTask) -> Any:
    """
    根据任务的目标平台，路由到对应的抓取处理器。

    Args:
        task: 待处理的 ScrapeTask 对象

    Returns:
        处理器的返回值（业务结果）

    Raises:
        NotImplementedError: 遇到未注册处理器的平台时抛出
        Exception:           处理器内部抛出的任何异常会向上传播，由 Worker 捕获
    """
    handler = PLATFORM_HANDLERS.get(task.platform)
    if handler is None:
        raise NotImplementedError(f"平台 {task.platform.value!r} 暂无处理器")
    return await handler(task)


# =============================================================================
# 单个 Worker 协程
# =============================================================================

async def run_worker(worker_id: int, client: ReliableQueueClient, stop_event: asyncio.Event) -> None:
    """
    单个 Worker 的主循环。

    流程（每次迭代）：
      1. acquire_task()  — 阻塞等待任务（BLMOVE）
      2. dispatch_task() — 路由到对应平台处理器
      3a. ack_task()     — 成功：从 processing 删除，清理指纹
      3b. nack_task()    — 失败：重试或打入 DLQ

    Args:
        worker_id:  Worker 编号（1-based），用于日志区分
        client:     ReliableQueueClient 实例
        stop_event: 收到关闭信号时置位，Worker 在完成当前任务后退出
    """
    # 将 worker_id 注入日志上下文（LoggerAdapter 方式）
    extra = {"worker_id": worker_id}
    wlogger = logging.LoggerAdapter(logger, extra)

    wlogger.info("Worker 启动")

    while not stop_event.is_set():
        task: ScrapeTask | None = None

        try:
            # ── 1. 获取任务（阻塞，内置超时 → 超时返回 None 继续循环）──
            task = await client.acquire_task()
            if task is None:
                # 正常超时，没有任务，继续下一轮
                continue

            wlogger.info(
                "开始处理任务 [id=%s platform=%s priority=%s retry=%d]",
                task.task_id[:8], task.platform.value, task.priority.value, task.retry_count,
            )

            # ── 2. 路由到业务处理器 ────────────────────────────────────
            result = await dispatch_task(task)

            wlogger.info(
                "任务处理成功 [id=%s result=%s]",
                task.task_id[:8], str(result)[:100],
            )

            # ── 3a. ACK：从 processing 队列删除，清理指纹 ─────────────
            await client.ack_task(task)

        except NotImplementedError as nie:
            # 平台未注册处理器，直接打入 DLQ，无需重试
            if task:
                wlogger.error("平台处理器缺失，直接入 DLQ [id=%s]: %s", task.task_id[:8], nie)
                # 强制将 retry_count 设为超限值，使 nack 直接走 DLQ 路径
                task.retry_count = 999
                await client.nack_task(task, error=str(nie))

        except asyncio.CancelledError:
            # 收到取消信号（如 Ctrl+C），优雅退出
            wlogger.info("Worker 收到取消信号，正在退出...")
            if task and task.status == TaskStatus.PROCESSING:
                # 将正在处理的任务重新入队（避免丢失）
                await client.nack_task(task, error="Worker 被强制取消")
            break

        except Exception as exc:
            # 业务逻辑异常（网络波动、风控拦截、解析失败等）
            if task:
                wlogger.warning(
                    "任务处理失败，进入 NACK 流程 [id=%s retry=%d/%d]: %s",
                    task.task_id[:8], task.retry_count, client._cfg.MAX_RETRY, exc,
                )
                # ── 3b. NACK：重试或打入 DLQ ──────────────────────────
                try:
                    await client.nack_task(task, error=str(exc))
                except Exception as nack_exc:
                    # NACK 本身也失败（极端情况：Redis 挂了）
                    # 此时任务仍留在 processing，等待崩溃恢复
                    wlogger.error(
                        "NACK 失败，任务将留在 processing 队列等待恢复 [id=%s]: %s",
                        task.task_id[:8], nack_exc,
                    )
            else:
                wlogger.error("acquire_task 异常（无任务对象）: %s", exc, exc_info=True)
                # 避免异常风暴，短暂休眠后继续
                await asyncio.sleep(1.0)

    wlogger.info("Worker 已停止")


# =============================================================================
# 主入口：启动多个 Worker 协程
# =============================================================================

async def main() -> None:
    """
    应用入口：
    1. 建立 Redis 连接
    2. 崩溃恢复（扫描 processing 队列）
    3. 并发启动 WORKER_CONCURRENCY 个 Worker
    4. 监听 SIGINT/SIGTERM，优雅关闭
    """
    redis_conn = create_redis_pool()
    client = ReliableQueueClient(redis_conn)

    # ── 1. 崩溃恢复 ──────────────────────────────────────────────────────────
    try:
        recovered = await client.recover_processing_tasks()
        if recovered > 0:
            logger.info("崩溃恢复完成，已将 %d 个遗留任务重新入队", recovered)
    except Exception as exc:
        logger.error("崩溃恢复失败，继续启动（遗留任务仍在 processing）: %s", exc)

    # ── 2. 优雅关闭事件 ──────────────────────────────────────────────────────
    stop_event = asyncio.Event()

    def _shutdown_handler(sig_name: str) -> None:
        logger.info("收到信号 %s，正在优雅关闭所有 Worker...", sig_name)
        stop_event.set()

    loop = asyncio.get_running_loop()
    for sig in (signal.SIGINT, signal.SIGTERM):
        try:
            loop.add_signal_handler(sig, _shutdown_handler, sig.name)
        except NotImplementedError:
            # Windows 不支持 add_signal_handler，使用 KeyboardInterrupt 替代
            pass

    # ── 3. 启动 Worker 协程池 ─────────────────────────────────────────────────
    logger.info("启动 %d 个 Worker 协程...", WORKER_CONCURRENCY)
    workers = [
        asyncio.create_task(run_worker(i + 1, client, stop_event))
        for i in range(WORKER_CONCURRENCY)
    ]

    logger.info("所有 Worker 已就绪，等待任务...")

    # 等待所有 Worker 完成（正常情况下永久阻塞，直到收到关闭信号）
    await asyncio.gather(*workers, return_exceptions=True)

    # ── 4. 清理资源 ───────────────────────────────────────────────────────────
    await redis_conn.aclose()
    logger.info("Redis 连接已关闭，进程退出")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        # Windows 下 Ctrl+C 会直接抛出 KeyboardInterrupt，此处静默处理
        logger.info("进程被用户中断")
