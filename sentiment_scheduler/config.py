# =============================================================================
# config.py — Redis 连接配置与全局常量
# =============================================================================
import os


class RedisConfig:
    """从环境变量读取 Redis 连接参数，方便容器化部署时通过 env 注入。"""

    HOST: str = os.getenv("REDIS_HOST", "127.0.0.1")
    PORT: int = int(os.getenv("REDIS_PORT", 6379))
    DB: int = int(os.getenv("REDIS_DB", 0))
    PASSWORD: str | None = os.getenv("REDIS_PASSWORD", None)
    # 连接池最大连接数
    MAX_CONNECTIONS: int = int(os.getenv("REDIS_MAX_CONNECTIONS", 20))
    # Socket 超时（秒）
    SOCKET_TIMEOUT: float = 5.0
    SOCKET_CONNECT_TIMEOUT: float = 3.0


class QueueConfig:
    """队列相关常量——所有 Key 统一前缀，便于监控和 namespace 隔离。"""

    KEY_PREFIX: str = "sentiment"

    # ── 各优先级待处理队列 ──────────────────────────────────────────────────
    # Worker 会按 CRITICAL → HIGH → NORMAL → LOW 的顺序依次检查
    PENDING_CRITICAL: str = f"{KEY_PREFIX}:pending:critical"
    PENDING_HIGH: str = f"{KEY_PREFIX}:pending:high"
    PENDING_NORMAL: str = f"{KEY_PREFIX}:pending:normal"
    PENDING_LOW: str = f"{KEY_PREFIX}:pending:low"

    # 优先级 → 队列名称的有序映射（Worker 按此顺序轮询）
    PRIORITY_QUEUE_MAP: dict[str, str] = {
        "CRITICAL": PENDING_CRITICAL,
        "HIGH":     PENDING_HIGH,
        "NORMAL":   PENDING_NORMAL,
        "LOW":      PENDING_LOW,
    }

    # ── 处理中队列（Reliable Queue 核心）──────────────────────────────────
    # 任务被 Worker 取走后先原子移入此队列；
    # 成功 ACK 后删除，崩溃恢复时可重新入队。
    PROCESSING: str = f"{KEY_PREFIX}:processing"

    # ── 死信队列 ────────────────────────────────────────────────────────────
    DEAD_LETTER: str = f"{KEY_PREFIX}:dead_letter"

    # ── 指纹去重 Set ────────────────────────────────────────────────────────
    FINGERPRINT_SET: str = f"{KEY_PREFIX}:fingerprints"
    # 指纹 TTL（秒）：同一指纹在此窗口内不会重复入队
    FINGERPRINT_TTL: int = int(os.getenv("FINGERPRINT_TTL", 60))

    # ── Worker 参数 ─────────────────────────────────────────────────────────
    # BLMOVE 阻塞超时（秒），0 表示永久阻塞（生产建议 5~30）
    BLMOVE_TIMEOUT: float = 5.0
    # 最大重试次数，超过后进入 DLQ
    MAX_RETRY: int = 3
