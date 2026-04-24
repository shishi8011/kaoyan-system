# =============================================================================
# redis_client.py — 可靠队列核心客户端
#
# 核心防丢失机制（Reliable Queue Pattern）：
#   1. Producer LPUSH 任务到 pending_queue（队列头部入队）
#   2. Worker 用 BLMOVE pending → processing（原子操作，阻塞等待）
#      ┌──────────┐   BLMOVE   ┌─────────────┐
#      │ pending  │ ─────────▶ │ processing  │  Worker 正在处理
#      └──────────┘            └─────────────┘
#   3. Worker 处理成功 → ACK：从 processing 删除任务 + 从指纹 Set 删除
#   4. Worker 处理失败 → NACK：
#      - retry < MAX_RETRY：重新 LPUSH 回 pending，retry_count + 1
#      - retry >= MAX_RETRY：LPUSH 进 dead_letter_queue，人工排查
#   5. Worker 崩溃后重启：扫描 processing 队列，将遗留任务重新入队（恢复逻辑）
# =============================================================================

import logging
from typing import Optional

import redis.asyncio as aioredis
from redis.asyncio import Redis
from redis.exceptions import RedisError

from .config import QueueConfig, RedisConfig
from .schema import ScrapeTask, TaskPriority, TaskStatus

logger = logging.getLogger(__name__)


# ─────────────────────────────────────────────────────────────────────────────
# 连接池工厂
# ─────────────────────────────────────────────────────────────────────────────
def create_redis_pool() -> Redis:
    """
    创建异步 Redis 连接池单例。
    调用方应在应用启动时调用一次，并将返回的 client 传给各组件。

    Returns:
        redis.asyncio.Redis: 已配置连接池的异步客户端实例
    """
    pool = aioredis.ConnectionPool(
        host=RedisConfig.HOST,
        port=RedisConfig.PORT,
        db=RedisConfig.DB,
        password=RedisConfig.PASSWORD,
        max_connections=RedisConfig.MAX_CONNECTIONS,
        socket_timeout=RedisConfig.SOCKET_TIMEOUT,
        socket_connect_timeout=RedisConfig.SOCKET_CONNECT_TIMEOUT,
        decode_responses=False,  # 保持 bytes，反序列化时统一处理
    )
    client = aioredis.Redis(connection_pool=pool)
    logger.info(
        "Redis 连接池已创建 host=%s port=%d db=%d max_conn=%d",
        RedisConfig.HOST, RedisConfig.PORT, RedisConfig.DB, RedisConfig.MAX_CONNECTIONS,
    )
    return client


# ─────────────────────────────────────────────────────────────────────────────
# 可靠队列客户端
# ─────────────────────────────────────────────────────────────────────────────
class ReliableQueueClient:
    """
    封装所有与 Redis 队列交互的逻辑，对上层 producer/worker 隐藏底层细节。

    使用方式（异步上下文）：
        client = ReliableQueueClient(redis_conn)
        pushed = await client.push_task(task)
        task   = await client.acquire_task()
        await client.ack_task(task)    # 成功
        await client.nack_task(task)   # 失败
    """

    def __init__(self, redis: Redis) -> None:
        self._r = redis
        self._cfg = QueueConfig()

    # =========================================================================
    # Producer 侧：推送任务
    # =========================================================================

    async def push_task(self, task: ScrapeTask) -> bool:
        """
        将任务推入对应优先级的 pending 队列。

        流程：
          1. 计算指纹，检查去重 Set（SADD 返回 0 表示已存在）
          2. 去重通过后，LPUSH 任务 JSON 到对应优先级队列
          3. 同时用 EXPIRE 刷新指纹 Set 的 TTL（滑动窗口）

        Args:
            task: 待推送的 ScrapeTask 对象

        Returns:
            True  = 推送成功
            False = 指纹重复，已跳过
        """
        queue_name = QueueConfig.PRIORITY_QUEUE_MAP.get(task.priority.value)
        if not queue_name:
            # 理论上不会出现，Pydantic 已校验枚举值
            raise ValueError(f"未知优先级: {task.priority}")

        try:
            # ── 步骤 1：指纹去重（原子操作）──────────────────────────────
            # SADD 返回实际新增的元素数量：1 = 新任务，0 = 已存在
            added = await self._r.sadd(QueueConfig.FINGERPRINT_SET, task.fingerprint)
            if added == 0:
                logger.warning(
                    "任务去重过滤 [platform=%s target=%.60s fingerprint=%s]",
                    task.platform.value, task.target, task.fingerprint,
                )
                return False

            # 刷新指纹 Set 整体 TTL（注意：Set 只有一个 TTL，每次入队都刷新）
            # 生产环境如需精确控制单指纹 TTL，可改用独立 Key + EXPIRE
            await self._r.expire(QueueConfig.FINGERPRINT_SET, QueueConfig.FINGERPRINT_TTL)

            # ── 步骤 2：序列化并入队 ─────────────────────────────────────
            payload = task.to_redis_str()
            # LPUSH 从左侧入队；Worker 用 BLMOVE RIGHT→LEFT 从右侧取
            # 效果：FIFO（先进先出）队列
            await self._r.lpush(queue_name, payload)

            logger.info(
                "任务入队成功 [id=%s platform=%s priority=%s queue=%s]",
                task.task_id[:8], task.platform.value, task.priority.value, queue_name,
            )
            return True

        except RedisError as exc:
            # Redis 连接异常或命令执行失败时，记录错误并向上抛出
            # 让调用方决定是重试还是告警
            logger.error("推送任务到 Redis 失败: %s", exc, exc_info=True)
            raise

    # =========================================================================
    # Worker 侧：获取任务（阻塞式，防丢失）
    # =========================================================================

    async def acquire_task(self, timeout: float = QueueConfig.BLMOVE_TIMEOUT) -> Optional[ScrapeTask]:
        """
        从 pending 队列（按优先级顺序）原子地取出一个任务，
        并同时将其放入 processing 队列。

        使用 BLMOVE（Redis 6.2+）实现原子性：
          - 若 Redis < 6.2，可将下方 blmove 替换为 brpoplpush（已废弃但仍有效）
          - 阻塞等待 timeout 秒；若无任务则返回 None（正常情况，Worker 继续轮询）

        优先级顺序：CRITICAL > HIGH > NORMAL > LOW
        采用非阻塞轮询（lmove）先检查高优先级，最后对最低优先级使用阻塞命令，
        避免高优先级任务被低优先级阻塞等待。

        Returns:
            ScrapeTask 对象，或 None（超时无任务）
        """
        priority_queues = list(QueueConfig.PRIORITY_QUEUE_MAP.values())

        try:
            # ── 步骤 1：非阻塞地从高优先级队列尝试取任务 ───────────────
            # CRITICAL / HIGH / NORMAL 用 lmove（非阻塞）
            for queue in priority_queues[:-1]:
                raw = await self._r.lmove(
                    queue,
                    QueueConfig.PROCESSING,
                    src="RIGHT",   # 从队列尾部取（对应 LPUSH 的 FIFO 语义）
                    dest="LEFT",   # 放入 processing 头部
                )
                if raw:
                    return self._deserialize(raw, queue)

            # ── 步骤 2：对最低优先级队列使用阻塞命令，避免 CPU 空转 ────
            # 若所有高优先级队列均为空，阻塞等待 LOW 队列
            raw = await self._r.blmove(
                priority_queues[-1],    # source: LOW 队列
                QueueConfig.PROCESSING, # destination: processing 队列
                timeout,                # 阻塞超时（秒）
                src="RIGHT",
                dest="LEFT",
            )
            if raw:
                return self._deserialize(raw, priority_queues[-1])

            # 超时，本轮无任务
            return None

        except RedisError as exc:
            logger.error("从 Redis 获取任务失败: %s", exc, exc_info=True)
            raise

    def _deserialize(self, raw: bytes, source_queue: str) -> ScrapeTask:
        """将 Redis 原始字节反序列化为 ScrapeTask，并更新状态为 PROCESSING。"""
        task = ScrapeTask.from_redis_str(raw)
        task.status = TaskStatus.PROCESSING
        logger.info(
            "任务已取出 [id=%s from=%s retry=%d]",
            task.task_id[:8], source_queue, task.retry_count,
        )
        return task

    # =========================================================================
    # Worker 侧：确认任务（ACK）
    # =========================================================================

    async def ack_task(self, task: ScrapeTask) -> None:
        """
        任务处理成功后调用，从 processing 队列删除任务，并清理指纹。

        注意：此处用 LREM 删除 processing 中的对应元素。
        由于 processing 队列中同一任务只出现一次，count=1 足够。

        Args:
            task: 已成功处理的 ScrapeTask 对象
        """
        try:
            task.status = TaskStatus.DONE
            payload = task.to_redis_str()

            # 从 processing 队列删除（精确匹配 JSON 字符串）
            removed = await self._r.lrem(QueueConfig.PROCESSING, 1, payload)
            if removed == 0:
                # 可能已被其他进程处理（幂等保护）
                logger.warning("ACK 时未找到任务 [id=%s]，可能已被处理", task.task_id[:8])

            # 清理指纹，允许同一目标在 TTL 过期后重新入队
            await self._r.srem(QueueConfig.FINGERPRINT_SET, task.fingerprint)

            logger.info("任务 ACK 成功 [id=%s]", task.task_id[:8])

        except RedisError as exc:
            logger.error("ACK 任务失败 [id=%s]: %s", task.task_id[:8], exc, exc_info=True)
            raise

    # =========================================================================
    # Worker 侧：拒绝任务（NACK）—— 重试或打入 DLQ
    # =========================================================================

    async def nack_task(self, task: ScrapeTask, error: str = "") -> None:
        """
        任务处理失败后调用，根据重试次数决定重新入队或打入死信队列。

        流程：
          1. 从 processing 队列删除当前任务（无论如何都要清出 processing）
          2. 若 retry_count < MAX_RETRY：
               - retry_count += 1，重新 LPUSH 回对应优先级队列
               - 保留指纹（防止同时间段重复推入）
          3. 若 retry_count >= MAX_RETRY：
               - 打入 dead_letter_queue，等待人工排查
               - 清理指纹，允许未来重新调度

        Args:
            task:  处理失败的 ScrapeTask 对象
            error: 失败原因描述（记录到 task.last_error）
        """
        task.last_error = error

        try:
            # ── 步骤 1：先从 processing 中取出，无论走哪条路都需要 ────────
            # 更新 last_error 后重新序列化，确保 lrem 能匹配原始内容：
            # 此处需要先获取 processing 中的原始内容（status 仍为 PROCESSING）
            task.status = TaskStatus.PROCESSING  # 维持原状以便 lrem 匹配
            original_payload = task.to_redis_str()

            # 更新重试次数和状态（用于后续入队）
            task.retry_count += 1

            removed = await self._r.lrem(QueueConfig.PROCESSING, 1, original_payload)
            if removed == 0:
                logger.warning("NACK 时未在 processing 找到任务 [id=%s]", task.task_id[:8])

            # ── 步骤 2：判断走重试路径还是 DLQ 路径 ──────────────────────
            if task.retry_count <= QueueConfig.MAX_RETRY:
                await self._retry_task(task)
            else:
                await self._send_to_dlq(task)

        except RedisError as exc:
            logger.error("NACK 任务失败 [id=%s]: %s", task.task_id[:8], exc, exc_info=True)
            raise

    async def _retry_task(self, task: ScrapeTask) -> None:
        """将任务重新推入对应优先级的 pending 队列（带重试次数更新）。"""
        task.status = TaskStatus.FAILED
        queue_name = QueueConfig.PRIORITY_QUEUE_MAP.get(task.priority.value)
        payload = task.to_redis_str()
        await self._r.lpush(queue_name, payload)
        logger.warning(
            "任务将重试 [id=%s retry=%d/%d queue=%s error=%.100s]",
            task.task_id[:8], task.retry_count, QueueConfig.MAX_RETRY,
            queue_name, task.last_error or "",
        )

    async def _send_to_dlq(self, task: ScrapeTask) -> None:
        """将超过最大重试次数的任务打入死信队列，并清理指纹。"""
        task.status = TaskStatus.DEAD
        payload = task.to_redis_str()
        await self._r.lpush(QueueConfig.DEAD_LETTER, payload)
        # 清理指纹，允许人工干预后重新提交
        await self._r.srem(QueueConfig.FINGERPRINT_SET, task.fingerprint)
        logger.error(
            "任务进入死信队列 [id=%s platform=%s target=%.60s retry=%d error=%.200s]",
            task.task_id[:8], task.platform.value, task.target,
            task.retry_count, task.last_error or "",
        )

    # =========================================================================
    # 崩溃恢复：将 processing 队列中的遗留任务重新入队
    # =========================================================================

    async def recover_processing_tasks(self) -> int:
        """
        Worker 重启时调用，扫描 processing 队列中的遗留任务并重新入队。
        这些任务是上次 Worker 崩溃时已被取走但未 ACK/NACK 的任务。

        Returns:
            恢复的任务数量
        """
        recovered = 0
        logger.info("开始扫描 processing 队列，恢复遗留任务...")

        try:
            while True:
                # 非阻塞地从 processing 队列取出元素
                raw = await self._r.rpop(QueueConfig.PROCESSING)
                if raw is None:
                    break  # 队列已空

                try:
                    task = ScrapeTask.from_redis_str(raw)
                    task.status = TaskStatus.PENDING
                    queue_name = QueueConfig.PRIORITY_QUEUE_MAP.get(task.priority.value)
                    await self._r.lpush(queue_name, task.to_redis_str())
                    recovered += 1
                    logger.info("恢复遗留任务 [id=%s → %s]", task.task_id[:8], queue_name)
                except Exception as parse_err:
                    # 数据损坏时跳过，避免阻断整体恢复流程
                    logger.error("无法解析遗留任务，已丢弃: %s | raw=%.100s", parse_err, raw)

        except RedisError as exc:
            logger.error("扫描 processing 队列失败: %s", exc, exc_info=True)
            raise

        logger.info("遗留任务恢复完成，共恢复 %d 个任务", recovered)
        return recovered

    # =========================================================================
    # 监控辅助：队列长度快照
    # =========================================================================

    async def queue_stats(self) -> dict[str, int]:
        """
        返回各队列当前长度，供监控告警使用。

        Returns:
            dict: {队列名称: 长度}
        """
        all_queues = list(QueueConfig.PRIORITY_QUEUE_MAP.values()) + [
            QueueConfig.PROCESSING,
            QueueConfig.DEAD_LETTER,
        ]
        stats: dict[str, int] = {}
        for q in all_queues:
            stats[q] = await self._r.llen(q)
        stats["fingerprint_count"] = await self._r.scard(QueueConfig.FINGERPRINT_SET)
        return stats
