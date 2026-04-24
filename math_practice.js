// math_practice.js — 数学靶场题库引擎
// source: 题目来源（用于真题/教材过滤）
// kp_id: 关联 math_data.js 中的知识点 ID，实现点击题目跳转到对应知识点
// difficulty: 难度系数 (1-5)

const mathQuestionBank = [
  // ── 第一章 §1 集合 · 教材模式卡片 ──────────────────
  {
    id: 'card-ma-c1-s1-n1',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c1-s1-n1',
    question: `【定义默写】请写出「集合」的定义、元素的归属记号（$\\in,\\notin$），并列出数学分析中最常用的四大数集记号。"枚举法"与"描述法"两种集合表示各有何适用场景？`,
    answer: `**集合**：具有某种特定性质的具体或抽象对象汇集成的**总体**；这些对象称为该集合的**元素**。

**归属记号**：

- $x\\in S$：$x$ 是 $S$ 的元素；
- $y\\notin S$：$y$ 不是 $S$ 的元素。

---

**四大常用数集**：

| 记号 | 含义 |
|---|---|
| $\\mathbf{N^+}$ | 全体**正整数** |
| $\\mathbf{Z}$ | 全体**整数** |
| $\\mathbf{Q}$ | 全体**有理数** |
| $\\mathbf{R}$ | 全体**实数** |

（有些教材用 $\\mathbf{N}$ 表示自然数，包含 $0$；$\\mathbf{N^+}$ 特指正整数）

---

**两种表示方式**：

**① 枚举法**：列举全部（或按规律列出部分）元素。

- $A=\\{a,b,c,d\\}$；
- $\\mathbf{N^+}=\\{1,2,3,\\ldots,n,\\ldots\\}$。

适用：**有限集**或**规律显著的可列无限集**。

**② 描述法**：$S=\\{x\\mid x\\text{ 具有性质 }P\\}$。

- $\\mathbf{Q}=\\left\\{x\\,\\middle|\\,x=\\dfrac{q}{p},\\ p\\in\\mathbf{N^+},q\\in\\mathbf{Z}\\right\\}$。

适用：**无法枚举的无限集**或**以性质定义的集合**（如各种区间、解集）。

**实战选择**：若集合能写 $\\{x\\mid P(x)\\}$ 且 $P(x)$ 简洁，优先用描述法；否则枚举更直观。`
  },
  {
    id: 'card-ma-c1-s1-n2',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c1-s1-n2',
    question: `【定义默写】请依次写出：① 空集 $\\varnothing$ 的定义及与任何集合的关系；② 子集 $S\\subset T$ 的定义；③ 真子集的判定；④ 集合相等的双向条件。$n$ 元集合的子集数与真子集数分别是多少？`,
    answer: `**① 空集**：不包含任何元素的集合，记为 $\\varnothing$。

**关键性质**：对**任何**集合 $S$，都有 $\\varnothing\\subset S$。

**理由**：子集定义要求"$x\\in\\varnothing\\Rightarrow x\\in S$"——前提 $x\\in\\varnothing$ 永远**假**，故蕴含式**空真**（Vacuously true）。

---

**② 子集（蕴含）**：$S$ 的所有元素都属于 $T$：

$$S\\subset T\\ \\Leftrightarrow\\ (x\\in S\\Rightarrow x\\in T).$$

---

**③ 真子集**：

$$S\\subsetneq T\\ \\Leftrightarrow\\ S\\subset T\\text{ 且 }T\\not\\subset S.$$

即 $S\\subset T$ 但 $T\\ne S$（$T$ 中至少有一个元素不在 $S$ 内）。

---

**④ 集合相等**（双向包含）：

$$\\boxed{\\ S=T\\ \\Leftrightarrow\\ S\\subset T\\text{ 且 }T\\subset S.\\ }$$

**考研应用**：证明两集合相等的**通用套路**——分别证"任意 $x\\in S$ 有 $x\\in T$"和"任意 $x\\in T$ 有 $x\\in S$"。

---

**子集计数**：$n$ 元集合 $A$：

| | 个数 |
|---|---|
| 子集总数（含 $\\varnothing$ 和 $A$ 自己） | $2^n$ |
| 真子集数（排除 $A$ 自己） | $2^n-1$ |
| 非空真子集（排除 $\\varnothing$ 和 $A$） | $2^n-2$ |

**推导**：每个元素要么"选入"要么"不选"——共 $2$ 种选择，$n$ 个元素独立 $\\Rightarrow$ $2^n$ 种组合。`
  },
  {
    id: 'card-ma-c1-s1-n3',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c1-s1-n3',
    question: `【定义默写】请写出实数集上**有限区间**（开/闭/半开半闭）和**无限区间**的定义与记号。注意区分 $[a,b),\\ (a,b]$ 的端点开闭。`,
    answer: `设 $a,b\\in\\mathbf{R}$ 且 $a<b$：

**有限区间（4 类）**：

| 类型 | 记号 | 定义 |
|---|---|---|
| **开区间** | $(a,b)$ | $\\{x\\mid a<x<b\\}$ |
| **闭区间** | $[a,b]$ | $\\{x\\mid a\\le x\\le b\\}$ |
| **半开半闭** | $(a,b]$ | $\\{x\\mid a<x\\le b\\}$ |
| **半闭半开** | $[a,b)$ | $\\{x\\mid a\\le x<b\\}$ |

**端点开闭约定**：

- 圆括号 "$($" 或 "$)$" 表示**不包含**端点；
- 方括号 "$[$" 或 "$]$" 表示**包含**端点。

---

**无限区间**：

| 记号 | 定义 |
|---|---|
| $(a,+\\infty)$ | $\\{x\\mid x>a\\}$ |
| $[a,+\\infty)$ | $\\{x\\mid x\\ge a\\}$ |
| $(-\\infty,b)$ | $\\{x\\mid x<b\\}$ |
| $(-\\infty,b]$ | $\\{x\\mid x\\le b\\}$ |
| $(-\\infty,+\\infty)$ | $=\\mathbf{R}$ 整个实数轴 |

**重要约定**：$+\\infty,-\\infty$ 是**理想符号**（非实数），故**永远**用开括号"$(,\\)$"——不能写 $[+\\infty]$！

---

**考研常见坑点**：

- 区分 $(a,b]$ 与 $[a,b)$——端点归属不同；
- $(-\\infty,b]$ **含** $b$，$(-\\infty,b)$ **不含** $b$；
- 空集 $\\varnothing$ 可视为 $(a,a)$（退化开区间）。

**实用技巧**：解不等式得出集合后，用区间法**紧凑表达**最为标准（如 $\\{x\\mid x^2<4\\}=(-2,2)$）。`
  },
  {
    id: 'card-ma-c1-s1-n4',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c1-s1-n4',
    question: `【定义默写】请写出集合的**并集、交集、差集、补集**的精确定义，并用 Venn 图直观描述它们。"补集"是相对什么而言的？`,
    answer: `**① 并集** $S\\cup T$：

$$S\\cup T=\\{x\\mid x\\in S\\text{ 或 }x\\in T\\}.$$

Venn 图：**两圆覆盖的全部区域**。

**② 交集** $S\\cap T$：

$$S\\cap T=\\{x\\mid x\\in S\\text{ 且 }x\\in T\\}.$$

Venn 图：**两圆重叠的区域**。

**③ 差集** $S\\setminus T$：

$$S\\setminus T=\\{x\\mid x\\in S\\text{ 且 }x\\notin T\\}.$$

Venn 图：**属于 $S$ 但不属于 $T$ 的部分**（挖掉重叠）。

**④ 补集** $S^C$（**相对全集 $X$ 而言**）：

$$S_X^C=X\\setminus S=\\{x\\mid x\\in X\\text{ 且 }x\\notin S\\}.$$

Venn 图：**全集矩形中 $S$ 以外的部分**。

---

**"补集相对性"详解**：

- 补集**必须**指定全集 $X$——没有"绝对补集"；
- 在实数分析中常取 $X=\\mathbf{R}$，故 $S^C=\\mathbf{R}\\setminus S$；
- 在 Tab 讨论时应明确全集 —— 如 $\\{2,3\\}^C$ 在 $\\{1,2,3,4\\}$ 中 $=\\{1,4\\}$，在 $\\mathbf{Z}$ 中 $=\\mathbf{Z}\\setminus\\{2,3\\}$，结果大相径庭。

---

**关键关系**（常用于化简）：

$$S\\setminus T=S\\cap T^C,\\qquad S\\cup S^C=X,\\qquad S\\cap S^C=\\varnothing.$$

**考研高频**：将差集转化为交集 + 补集，便于与并/交/补的运算规律（交换律、结合律、De Morgan）结合使用。`
  },
  {
    id: 'card-ma-c1-s1-n5',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c1-s1-n5',
    question: `【定理默写】请写出集合运算的三大基本规律（交换律、结合律、分配律）与**对偶律（De Morgan 公式）**。De Morgan 公式的口诀是什么？`,
    answer: `**三大基本规律**（$\\cap,\\cup$ 类似加乘）：

**① 交换律**：

$$A\\cup B=B\\cup A,\\qquad A\\cap B=B\\cap A.$$

**② 结合律**：

$$(A\\cup B)\\cup C=A\\cup(B\\cup C),$$

$$(A\\cap B)\\cap C=A\\cap(B\\cap C).$$

**③ 分配律**（交、并相互分配）：

$$A\\cap(B\\cup C)=(A\\cap B)\\cup(A\\cap C),$$

$$A\\cup(B\\cap C)=(A\\cup B)\\cap(A\\cup C).$$

---

**④ 对偶律（De Morgan 公式）**：

$$\\boxed{\\ (A\\cup B)^C=A^C\\cap B^C,\\ }$$

$$\\boxed{\\ (A\\cap B)^C=A^C\\cup B^C.\\ }$$

---

**De Morgan 口诀**：**"补集翻进来，并交要互换"**。

即：补运算"分配"到每个集合上时，**并集变交集，交集变并集**——符号互换。

---

**记忆直观**：

- $(A\\cup B)^C$：不在 $A\\cup B$ $\\Leftrightarrow$ 既不在 $A$ 也不在 $B$ $\\Leftrightarrow$ 在 $A^C$ **且**在 $B^C$；
- $(A\\cap B)^C$：不同时在 $A,B$ $\\Leftrightarrow$ 至少有一个不属于 $\\Leftrightarrow$ 在 $A^C$ **或**在 $B^C$。

---

**推广至多个集合**：

$$\\left(\\bigcup_{i=1}^n A_i\\right)^C=\\bigcap_{i=1}^n A_i^C,\\quad \\left(\\bigcap_{i=1}^n A_i\\right)^C=\\bigcup_{i=1}^n A_i^C.$$

**考研应用**：逻辑推理证明（反证法）、集合运算化简、概率论中的事件对偶。`
  },
  {
    id: 'card-ma-c1-s1-n6',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c1-s1-n6',
    question: `【概念辨析 + 定理默写】请说明**有限集 / 无限集 / 可列集**的定义与区别，并写出定理 1.1.1（可列个可列集之并）与定理 1.1.2（$\\mathbf{Q}$ 的可列性）的结论。什么是"不可列的无限集"？`,
    answer: `**定义层次**：

| 类型 | 刻画 |
|---|---|
| **有限集** | 元素个数是某个非负整数 |
| **无限集** | 非有限集（元素"无限多"） |
| **可列集**（可数集） | 无限集且能与 $\\mathbf{N^+}$ 建立**一一对应**——即元素可排成序列 $\\{a_1,a_2,\\ldots,a_n,\\ldots\\}$，无重复无遗漏 |

**本质**：可列集是"最小"的无限集——其"大小"可用 $\\mathbf{N^+}$ 来"数"。

---

**两条核心定理**：

**定理 1.1.1**：**可列个可列集之并**也是可列集。

$$A_1,A_2,\\ldots,A_n,\\ldots\\text{ 都可列}\\ \\Rightarrow\\ \\bigcup_{n=1}^\\infty A_n\\text{ 可列}.$$

（证明思路：按**对角线编号**把 $\\{A_n\\}$ 中的元素排成单列。）

**定理 1.1.2**：**有理数集 $\\mathbf{Q}$ 是可列集**。

（证明思路：把 $\\mathbf{Q^+}$ 排成矩阵 $\\{p/q\\}_{p,q\\in\\mathbf{N^+}}$，再对角线编号。）

---

**不可列的无限集**：存在"比 $\\mathbf{N^+}$ 更大"的无限集——**不可列无限集**。

**经典例子**（Cantor 对角线法）：**实数集 $\\mathbf{R}$** 是**不可列**的。

**证明梗概**：假设 $[0,1]$ 可列，列为 $x_1,x_2,\\ldots$。构造新数 $y$，其第 $n$ 位小数**不同**于 $x_n$ 的第 $n$ 位——则 $y\\in[0,1]$ 但不在列表中，矛盾。

---

**深层意义**：

- 有理数在实数中"可列"但**稠密**；无理数反而**不可列**；
- 这揭示了"**无穷也有不同的等级**"——后续的基数理论（ $|\\mathbf{N}|=\\aleph_0,\\ |\\mathbf{R}|=\\mathfrak{c}>\\aleph_0$）。

**考研关联**：数学分析后续章节（§2.1 实数连续性、第 7 章 Riemann 可积性）反复用到"可列/不可列"的区分。`
  },
  {
    id: 'card-ma-c1-s1-n7',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c1-s1-n7',
    question: `【定义默写】请写出两集合的 **Descartes 乘积**（直积）的定义，并说明当 $A=B=\\mathbf{R}$ 时 $\\mathbf{R}^2$ 的几何意义。推广至 $n$ 重直积 $A_1\\times\\cdots\\times A_n$ 的含义。`,
    answer: `**Descartes 乘积**（笛卡尔积 / 直积）：

$$\\boxed{\\ A\\times B=\\{(x,y)\\mid x\\in A\\text{ 且 }y\\in B\\}.\\ }$$

即所有**有序对** $(x,y)$ 构成的集合。

**关键**：**有序**——$(x,y)\\ne(y,x)$（除非 $x=y$）。

---

**经典实例：$\\mathbf{R}\\times\\mathbf{R}=\\mathbf{R}^2$**

$$\\mathbf{R}^2=\\{(x,y)\\mid x,y\\in\\mathbf{R}\\}.$$

**几何意义**：平面 Descartes 直角坐标系的点集——每个点由一对实数 $(x,y)$ 唯一刻画（横纵坐标）。

---

**$n$ 重直积**：

$$A_1\\times A_2\\times\\cdots\\times A_n=\\{(x_1,x_2,\\ldots,x_n)\\mid x_i\\in A_i,\\ 1\\le i\\le n\\}.$$

即所有 **$n$ 元有序组**构成的集合。

**特例**：$\\mathbf{R}^n=\\underbrace{\\mathbf{R}\\times\\cdots\\times\\mathbf{R}}_{n\\text{ 重}}$——$n$ 维 Euclid 空间的坐标点集。

---

**考研应用**：

| 场景 | 直积的角色 |
|---|---|
| **平面曲线** | $\\{(x,y)\\mid F(x,y)=0\\}\\subset\\mathbf{R}^2$ |
| **多元函数** | 定义域 $D\\subset\\mathbf{R}^n$，像 $Y\\subset\\mathbf{R}$ |
| **概率空间** | 样本空间 $\\Omega=\\Omega_1\\times\\Omega_2$（两次独立试验） |
| **矩阵** | $m\\times n$ 矩阵 $\\subset\\mathbf{R}^{mn}$ |

**延伸**：直积结构是构造**多元函数、多元积分、多维向量空间**的代数基础。`
  },

  // ── 第一章 §2 映射与函数 · 教材模式卡片 ──────────────────
  {
    id: 'card-ma-c1-s2-n1',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c1-s2-n1',
    question: `【定义默写】请写出「映射」的定义（定义 1.2.1），并解释**像 / 逆像 / 定义域 / 值域**四个概念。映射的"唯一性要求"体现在哪里？`,
    answer: `**定义 1.2.1（映射）**：设 $X,Y$ 是两个给定的集合。若按照某种规则 $f$，使对集合 $X$ 中的**每一个**元素 $x$，都可以找到集合 $Y$ 中**惟一确定**的元素 $y$ 与之对应，则称 $f$ 为 $X$ 到 $Y$ 的**映射**，记为

$$f:X\\to Y,\\qquad x\\mapsto y=f(x).$$

---

**四大基本概念**：

| 术语 | 含义 |
|---|---|
| **像**（值） | $y=f(x)$——$x$ 在 $f$ 作用下得到的元素 |
| **逆像**（原像） | $x$——使 $f(x)=y$ 的元素 |
| **定义域** | $D_f=X$——映射的"出发集合"（**必须**所有元素都有像） |
| **值域** | $R_f=\\{y\\in Y\\mid y=f(x),x\\in X\\}$——所有像组成的集合 |

**关键区别**：$R_f\\subset Y$——值域是**目标集 $Y$ 的子集**，可能不等于 $Y$。

---

**"唯一性要求"的两层含义**：

1. **全定义性**：$\\forall x\\in X$，必有像 $f(x)\\in Y$——不允许"空白定义域点"；
2. **单值性**：$\\forall x\\in X$，像 $f(x)$ **唯一**——同一个 $x$ 不能对应两个不同的 $y$。

---

**反例辨析**（都**不是**映射）：

- $f:\\mathbf{R}\\to\\mathbf{R},\\ f(x)=\\pm\\sqrt{x}$——对 $x>0$ 有两个像，违反单值性；
- $f:\\mathbf{R}\\to\\mathbf{R},\\ f(x)=\\dfrac{1}{x}$（在 $x=0$ 处无定义）——不满足全定义性（除非限定定义域为 $\\mathbf{R}\\setminus\\{0\\}$）。

**考研提醒**：审题时先确认定义域是否涵盖所有需要的点，函数的"点定义"缺失是常见扣分项。`
  },
  {
    id: 'card-ma-c1-s2-n2',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c1-s2-n2',
    question: `【定义默写】请写出**单射、满射、双射（一一对应）**的定义，并举出三类典型示例。双射有什么核心价值？`,
    answer: `设 $f:X\\to Y$：

---

**① 单射（Injective / 一对一）**：**逆像惟一**

$$\\boxed{\\ x_1\\ne x_2\\ \\Rightarrow\\ f(x_1)\\ne f(x_2).\\ }$$

**等价条件（逆否命题）**：$f(x_1)=f(x_2)\\Rightarrow x_1=x_2$。

**几何直观**：图像被**任何**水平线至多切一次。

**例**：$f(x)=e^x$ 是 $\\mathbf{R}\\to\\mathbf{R}$ 单射；$f(x)=x^2$ 在 $\\mathbf{R}\\to\\mathbf{R}$ 上**不是**（$f(1)=f(-1)$），但限定到 $[0,+\\infty)\\to\\mathbf{R}$ 就是单射。

---

**② 满射（Surjective / 到上）**：**值域等于目标集**

$$\\boxed{\\ R_f=Y.\\ }$$

即 $\\forall y\\in Y,\\ \\exists x\\in X:f(x)=y$——每个 $y$ 都有原像。

**例**：$f(x)=\\sin x:\\mathbf{R}\\to[-1,1]$ 是满射；但 $f(x)=\\sin x:\\mathbf{R}\\to\\mathbf{R}$ **不是**（$y=2$ 没有原像）。

---

**③ 双射（Bijective / 一一对应）**：**既是单射又是满射**。

$$\\boxed{\\ \\text{双射}\\ =\\ \\text{单射}\\ +\\ \\text{满射}.\\ }$$

**例**：$f(x)=x^3:\\mathbf{R}\\to\\mathbf{R}$ 是双射；恒等映射 $\\operatorname{id}:X\\to X$ 是双射。

---

**双射的核心价值**：

1. **可逆**：有**逆映射** $f^{-1}:Y\\to X$；
2. **等势**：$X,Y$ 有"相同大小"（元素一一对应）——这是"可列集""不可列集"等基数概念的基石；
3. **代数对称性**：保持许多结构（如群同构）。

---

**考研高频**：

- 判断函数单调性 $\\Rightarrow$ 判断是否单射；
- 求反函数 $\\Rightarrow$ 检验双射；
- 证明集合"可列" $\\Rightarrow$ 构造与 $\\mathbf{N^+}$ 的双射。`
  },
  {
    id: 'card-ma-c1-s2-n3',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c1-s2-n3',
    question: `【定义默写】请写出**逆映射** $f^{-1}$ 与**复合映射** $f\\circ g$ 的定义，并说明它们各自成立的前提条件。"先 $g$ 后 $f$" 的记号顺序是怎样的？`,
    answer: `**① 逆映射**：

**前提**：$f:X\\to Y$ 是**单射**。

**定义**：在值域 $R_f\\subset Y$ 上定义对应关系

$$f^{-1}:R_f\\to X,\\quad y\\mapsto x\\quad(\\text{其中 }f(x)=y).$$

称 $f^{-1}$ 为 $f$ 的**逆映射**。

**要点**：

- 只需单射（不一定满射）——因为 $f^{-1}$ 的定义域是 $R_f$ 而非整个 $Y$；
- 若 $f$ 是**双射**，则 $f^{-1}:Y\\to X$ 也是双射；
- $(f^{-1})^{-1}=f$，$f^{-1}\\circ f=\\operatorname{id}_X$，$f\\circ f^{-1}=\\operatorname{id}_{R_f}$。

---

**② 复合映射**：

**前提**：$g:X\\to U_1$，$f:U_2\\to Y$，且 $R_g\\subset U_2=D_f$（**$g$ 的值域包含在 $f$ 的定义域中**）。

**定义**：

$$\\boxed{\\ f\\circ g:X\\to Y,\\quad x\\mapsto y=f(g(x)).\\ }$$

**记号顺序**："$f\\circ g$" 读作 "$f$ compose $g$"——**先作用 $g$，再作用 $f$**。

**直观**：$x\\xrightarrow{g}g(x)\\xrightarrow{f}f(g(x))$。

---

**相容性条件 $R_g\\subset D_f$ 的必要性**：

- 若 $R_g\\not\\subset D_f$，则存在 $x\\in X$ 使 $g(x)\\notin D_f$，$f(g(x))$ 无定义；
- 此时复合映射的定义域需要缩小到 $\\{x\\in X\\mid g(x)\\in D_f\\}\\subsetneq X$。

---

**考研应用**：

| 场景 | 复合 / 逆的应用 |
|---|---|
| **反函数求导** | $y=f^{-1}(x)$ 的导数 $=\\dfrac{1}{f'(y)}$（§4.3） |
| **链式法则** | $[f(g(x))]'=f'(g(x))\\cdot g'(x)$（§4.4） |
| **对称性** | $\\arcsin(\\sin x)$ 的等值区间分析 |

**易错**：$(f\\circ g)\\ne(g\\circ f)$——复合**不满足交换律**！`
  },
  {
    id: 'card-ma-c1-s2-n4',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c1-s2-n4',
    question: `【定义默写】请写出「一元实函数」的定义，列出六大**基本初等函数**及其代表表达式，并说明"初等函数"的构造规则。`,
    answer: `**一元实函数**：当映射 $f:X\\to Y$ 的定义域 $X\\subset\\mathbf{R}$、值域 $Y=\\mathbf{R}$ 时，该映射称为**一元实函数**（简称**函数**），记为

$$y=f(x).$$

---

**六大基本初等函数**：

| # | 名称 | 代表表达式 |
|---|---|---|
| 1 | **常数函数** | $y=c$ |
| 2 | **幂函数** | $y=x^\\alpha$（$\\alpha\\in\\mathbf{R}$） |
| 3 | **指数函数** | $y=a^x$（$a>0,a\\ne 1$） |
| 4 | **对数函数** | $y=\\log_a x$（$a>0,a\\ne 1,x>0$） |
| 5 | **三角函数** | $\\sin x,\\cos x,\\tan x,\\cot x,\\sec x,\\csc x$ |
| 6 | **反三角函数** | $\\arcsin x,\\arccos x,\\arctan x,\\operatorname{arccot}x$ |

---

**初等函数的构造**：

> **初等函数 $=$ 六大基本初等函数经过有限次四则运算（$+,-,\\times,\\div$）与复合运算所产生的函数**。

---

**典型例子**：

- $f(x)=e^{\\sin x}+\\ln(1+x^2)$——指数 $\\circ$ 三角 + 对数 $\\circ$ 多项式；
- $f(x)=\\dfrac{\\sqrt{1+x}-1}{x}$——根式（幂函数）$+$ 有理分式；
- $f(x)=\\arctan\\sqrt{\\ln x}$——三层复合。

---

**非初等函数**（需要极限、级数、积分等"超越"工具构造）：

- **分段函数**，如 $f(x)=\\begin{cases}x^2, x\\ge 0\\\\ -x^2, x<0\\end{cases}$（但 $|x|x$ 本质上仍是初等）；
- **Dirichlet 函数** $D(x)=\\begin{cases}1, x\\in\\mathbf{Q}\\\\ 0, x\\notin\\mathbf{Q}\\end{cases}$；
- **Riemann zeta 函数** $\\zeta(s)=\\sum n^{-s}$。

---

**考研重要意义**：几乎所有题目的函数都是初等函数，因此：

- 它们在定义域内**连续**；
- 它们（除有限例外点）**可导**且导函数**连续**；
- 它们的求导、求积分有完整的公式和方法可循。`
  },
  {
    id: 'card-ma-c1-s2-n5',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c1-s2-n5',
    question: `【定义默写】请列出函数的**两种特殊表示法**（隐式 / 参数）及其举例，然后依次写出函数的**四大简单特性**（有界性 / 单调性 / 奇偶性 / 周期性）的精确定义。`,
    answer: `**两种特殊表示法**：

**① 隐式表示**：$F(x,y)=0$——$y$ 不直接表达为 $x$ 的显式形式。

**例**：$x^2+y^2=1$（单位圆方程），$e^{xy}+xy-1=0$。

**② 参数表示**：$\\begin{cases}x=x(t)\\\\ y=y(t)\\end{cases},\\ t\\in I$。

**例**：$\\begin{cases}x=\\cos t\\\\ y=\\sin t\\end{cases}$（单位圆），摆线 $\\begin{cases}x=t-\\sin t\\\\ y=1-\\cos t\\end{cases}$。

**适用**：隐式紧凑对称；参数突出运动轨迹。

---

**四大简单特性**：

**① 有界性**：$\\exists\\,M>0$ 使

$$\\forall x\\in D_f:\\ |f(x)|\\le M.$$

**② 单调性**：

- **单调增**：$x_1<x_2\\Rightarrow f(x_1)\\le f(x_2)$（$<$ 为**严格增**）；
- **单调减**：$x_1<x_2\\Rightarrow f(x_1)\\ge f(x_2)$。

**③ 奇偶性**（定义域关于原点对称）：

- **偶函数**：$f(-x)=f(x)$（图像关于 $y$ 轴对称）；
- **奇函数**：$f(-x)=-f(x)$（图像关于原点对称）。

**④ 周期性**：$\\exists\\,T>0$ 使 $\\forall x\\in D_f$：

$$f(x+T)=f(x).$$

**最小**的 $T>0$ 称为**基本周期**。

---

**典型函数的特性速查**：

| 函数 | 奇偶性 | 周期 | 单调性 | 有界 |
|---|---|---|---|---|
| $\\sin x$ | 奇 | $2\\pi$ | 在 $[-\\pi/2,\\pi/2]$ 增 | $\\|f\\|\\le 1$ |
| $\\cos x$ | 偶 | $2\\pi$ | 在 $[0,\\pi]$ 减 | $\\|f\\|\\le 1$ |
| $e^x$ | 无 | 无 | 严格增 | 无界 |
| $\\ln x$ | 无 | 无 | 严格增 | 无界 |
| $\\tan x$ | 奇 | $\\pi$ | 每周期内严格增 | 无界 |
| $\\arctan x$ | 奇 | 无 | 严格增 | $\\|f\\|<\\pi/2$ |

**考研常用工具**：

- **奇函数在对称区间上积分为 $0$**；
- **偶函数积分可翻倍**：$\\int_{-a}^a f=2\\int_0^a f$；
- **周期函数**积分：$\\int_0^{nT} f=n\\int_0^T f$。`
  },
  {
    id: 'card-ma-c1-s2-n6',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c1-s2-n6',
    question: `【定理默写】请写出**三角不等式**的完整形式（上下界都有），并给出两侧的严格证明。它在数学分析中有什么典型应用？`,
    answer: `**三角不等式（完整双边形式）**：对任意实数 $a,b$：

$$\\boxed{\\ \\Big||a|-|b|\\Big|\\le|a+b|\\le|a|+|b|.\\ }$$

注意左边的 $\\big|\\ |a|-|b|\\ \\big|$ 是"**绝对值的绝对值**"。

---

**右半（上界）证明**：

$$-|a|\\le a\\le|a|,\\quad -|b|\\le b\\le|b|,$$

两式相加：

$$-(|a|+|b|)\\le a+b\\le|a|+|b|\\ \\Rightarrow\\ |a+b|\\le|a|+|b|.\\quad\\blacksquare$$

**几何意义**：三角形两边之和**大于等于**第三边。

---

**左半（下界）证明**：用 $b$ 替换 $b$ 为 $-b$ 后再化简：

由上界 $|a|=|(a+b)+(-b)|\\le|a+b|+|b|$，即

$$|a|-|b|\\le|a+b|.$$

同理 $|b|-|a|\\le|a+b|$，合并得

$$\\big||a|-|b|\\big|\\le|a+b|.\\quad\\blacksquare$$

**几何意义**：三角形两边之差**小于等于**第三边。

---

**变形与推广**：

**替换 $b\\to-b$** 的等价形式：

$$\\big||a|-|b|\\big|\\le|a-b|\\le|a|+|b|.$$

**$n$ 项推广**：

$$\\left|\\sum_{i=1}^n a_i\\right|\\le\\sum_{i=1}^n|a_i|.$$

---

**数学分析中的典型应用**：

| 场景 | 用法 |
|---|---|
| **极限证明（唯一性）** | $\\|a-b\\|\\le\\|x_n-a\\|+\\|x_n-b\\|<\\varepsilon$——见定理 2.2.1 |
| **插项技巧** | $A-B=(A-C)+(C-B)$，取绝对值后用三角不等式 |
| **Cauchy 列判别** | $\\|x_n-x_m\\|\\le\\|x_n-a\\|+\\|a-x_m\\|$ |
| **连续性证明** | $\\|f(x)-f(x_0)\\|\\le\\|f(x)-f(y)\\|+\\|f(y)-f(x_0)\\|$ |
| **级数收敛** | 绝对收敛 $\\Rightarrow$ 收敛 |

**考研黄金工具**：三角不等式 + 插项法 + $\\varepsilon/2$ 分蛋糕——构成极限证明的"三件套"。`
  },

  {
    id: 'q-ma-c2-s1-01',
    type: 'proof',
    title: '有理数与无理数证明',
    source: '教材习题',
    kp_id: 'ma-c2-s1-n1', // 关联：实数系与连续性
    content: `(1) 证明 $\\sqrt{6}$ 不是有理数；<br>(2) $\\sqrt{3} + \\sqrt{2}$ 是不是有理数？请证明。`,
    solution: `(1) 反证法：设 $\\sqrt{6} = p/q$ 为既约分数... <br>(2) 设 $\\sqrt{3} + \\sqrt{2} = r$，则 $(\\sqrt{3})^2 = (r - \\sqrt{2})^2 \Rightarrow 3 = r^2 - 2\\sqrt{2}r + 2 \Rightarrow \\sqrt{2} = \\frac{r^2 - 1}{2r}$，由于 $r$ 是有理数则右边为有理数，与 $\\sqrt{2}$ 是无理数矛盾。`,
    tags: ['第一章', '实数系', '反证法']
  },
  {
    id: 'q-ma-c2-s1-02',
    type: 'calculation',
    title: '求数集的上/下界',
    source: '教材习题',
    kp_id: 'ma-c2-s1-n3', // 关联：上确界与下确界
    content: `求下列数集的最大数、最小数，或证明它们不存在：<br>
    (1) $A = \\{x \\mid x \\ge 0\\}$；<br>
    (2) $B = \\{\\sin x \\mid 0 < x < \\frac{2\\pi}{3}\\}$；<br>
    (3) $C = \\{\\frac{n}{m} \\mid m, n \\in \\mathbf{N^+} \\text{ 并且 } n < m \\}$。`,
    solution: `(1) $\\min A = 0$，无最大数；<br>(2) $\\min B$ 不存在，$\\max B = 1$；<br>(3) $\\min C$ 不存在，$\\max C$ 不存在（注意区间边界的开闭）。`,
    tags: ['确界', '有界性']
  },
  {
    id: 'ma-c2-s1-03',
    type: 'proof',
    title: '确界惟一性证明',
    source: '教材习题',
    kp_id: 'ma-c2-s1-n3',
    content: `证明有界数集的上、下确界惟一。`,
    solution: `利用反证法。设 $\\beta_1, \\beta_2$ 均为 $S$ 的上确界，根据上确界的定义，$\\beta_1$ 是最小上界，则 $\\beta_1 \\le \\beta_2$；同理 $\\beta_2 \\le \\beta_1$，故 $\\beta_1 = \\beta_2$。`,
    tags: ['确界定义', '惟一性']
  },

  // ── 第二章 §1 实数系的连续性 · 教材模式卡片 ──────────────────
  {
    id: 'card-ma-c2-s1-n1',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s1-n1',
    question: `【概念梳理】请依次说明数系扩充 $\\mathbf{N}\\to\\mathbf{Z}\\to\\mathbf{Q}\\to\\mathbf{R}$ 的运算动机，并指出整数系 / 有理数系 / 实数系在数轴上的几何特征。最后用反证法证明 $\\sqrt{2}\\notin\\mathbf{Q}$。`,
    answer: `**数系扩充链**：

| 数系 | 封闭的运算 | 不封闭（扩充动机） |
|---|---|---|
| $\\mathbf{N}$ 自然数 | 加、乘 | 减法 |
| $\\mathbf{Z}$ 整数 | 加、减、乘 | 除法 |
| $\\mathbf{Q}$ 有理数 $=\\{q/p\\mid p\\in\\mathbf{N^+},q\\in\\mathbf{Z}\\}$ | 四则运算 | 开方（$\\sqrt{2}\\notin\\mathbf{Q}$） |
| $\\mathbf{R}$ 实数 | 四则 + 开方 + 极限 | — |

**几何特征**：

- $\\mathbf{Z}$：**离散性**（相邻整数点间隔 $1$）；
- $\\mathbf{Q}$：**稠密性**（任意长度 $>0$ 的线段上有无穷多有理点），但仍有"空隙"；
- $\\mathbf{R}$：**连续性**（铺满整个数轴，无任何空隙）——故 $\\mathbf{R}$ 又称**实数连续统**。

---

**$\\sqrt{2}\\notin\\mathbf{Q}$ 证明**（反证法）：

假设 $\\sqrt{2}=\\dfrac{q}{p}$，$p,q\\in\\mathbf{N^+}$ 且 $(p,q)=1$（互素）。

两边平方：$2p^2=q^2$ $\\Rightarrow$ $q^2$ 为偶数 $\\Rightarrow$ $q$ 为偶数，设 $q=2r$。

代回：$2p^2=4r^2\\Rightarrow p^2=2r^2$ $\\Rightarrow$ $p$ 也为偶数。

故 $p,q$ 均为偶数，与 $(p,q)=1$ 矛盾。$\\blacksquare$`
  },
  {
    id: 'card-ma-c2-s1-n2',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s1-n2',
    question: `【定义默写】请写出数集 $S$ 的**最大数** $\\max S$ 与**最小数** $\\min S$ 的定义，以及**有界集**的定义。并证明 $B=\\{x\\mid 0\\le x<1\\}$ 没有最大数。`,
    answer: `**最大数**：若 $\\exists\\,\\xi\\in S,\\ \\forall x\\in S:x\\le\\xi$，则 $\\xi=\\max S$。

**最小数**：若 $\\exists\\,\\eta\\in S,\\ \\forall x\\in S:x\\ge\\eta$，则 $\\eta=\\min S$。

**关键要求**：$\\max/\\min$ 必须**属于** $S$ 本身——"集内元素"是核心。有限集的 $\\max/\\min$ 必存在，无限集则未必。

---

**有界集**：$S$ 既有上界又有下界，即

$$\\boxed{\\ S\\text{ 为有界集}\\Leftrightarrow\\exists\\,X>0,\\ \\forall x\\in S:|x|\\le X.\\ }$$

---

**证明 $B=\\{x\\mid 0\\le x<1\\}$ 无最大数**（反证法）：

假设 $\\beta=\\max B$，则 $\\beta\\in B$，即 $0\\le\\beta<1$。

取 $\\beta'=\\dfrac{1+\\beta}{2}$，则

$$\\beta<\\beta'<1\\Rightarrow\\beta'\\in B\\text{ 且 }\\beta'>\\beta,$$

与 $\\beta$ 是最大数矛盾。$\\blacksquare$

**启示**：$B$ 的上界 $\\sup B=1$ 但**不属于** $B$——这正是引入"上确界"概念（最小上界，可不属于集合）的必要性。`
  },
  {
    id: 'card-ma-c2-s1-n3',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s1-n3',
    question: `【定义默写】请写出**上确界** $\\sup S$ 与**下确界** $\\inf S$ 的**两条等价刻画**（上界 / 下界性质 + 最小上界 / 最大下界性质的 $\\varepsilon$-语言）。举一个 $\\sup S$ 存在但 $\\max S$ 不存在的例子。`,
    answer: `**上界**：$\\exists M\\in\\mathbf{R},\\ \\forall x\\in S:x\\le M$。

**上确界 $\\beta=\\sup S$**（最小上界）：同时满足

1. **上界性**：$\\forall x\\in S:x\\le\\beta$；
2. **最小性**（$\\varepsilon$-刻画）：$\\forall\\,\\varepsilon>0,\\ \\exists x\\in S:x>\\beta-\\varepsilon$。

---

**下确界 $\\alpha=\\inf S$**（最大下界）：同时满足

1. **下界性**：$\\forall x\\in S:x\\ge\\alpha$；
2. **最大性**：$\\forall\\,\\varepsilon>0,\\ \\exists x\\in S:x<\\alpha+\\varepsilon$。

---

**$\\sup S$ 存在但 $\\max S$ 不存在的例**：

$$S=\\left\\{1-\\frac{1}{n}\\,\\middle|\\,n\\in\\mathbf{N^+}\\right\\}=\\left\\{0,\\,\\tfrac{1}{2},\\,\\tfrac{2}{3},\\,\\tfrac{3}{4},\\ldots\\right\\}.$$

$\\sup S=1$（验证：上界 $1$；$\\forall\\varepsilon>0$，取 $n>\\dfrac{1}{\\varepsilon}$，$1-\\dfrac{1}{n}>1-\\varepsilon$）；但 $1\\notin S$，故 $\\max S$ **不存在**。

---

**核心区别**：

| | $\\max S$ | $\\sup S$ |
|---|---|---|
| 必须 $\\in S$ ？ | 是 | **否**（可以不在 $S$ 内） |
| 存在性 | 不一定 | 有上界则**必存在**（见下一卡确界存在定理） |

记忆口诀：**$\\sup$ 是 "天花板的最低处"，不一定踮脚够得到**。`
  },
  {
    id: 'card-ma-c2-s1-n4',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s1-n4',
    question: `【定理默写】请写出「确界存在定理」（定理 2.1.1，实数系连续性定理）的完整叙述，简述其**无限小数构造法**证明思路，并说明它为什么是"实数系连续性"的分析表达。`,
    answer: `**定理 2.1.1（确界存在定理）**：

$$\\boxed{\\ \\text{非空有上界的数集必有上确界；非空有下界的数集必有下确界。}\\ }$$

---

**证明思路（无限小数构造法）**：设数集 $S$ 有上界，构造 $\\beta=\\sup S$。

1. **整数部分**：取 $\\alpha_0=\\max\\{[x]\\mid x\\in S\\}$；令 $S_0=\\{x\\in S\\mid[x]=\\alpha_0\\}$。
2. **第 $k$ 位小数**：取 $\\alpha_k=\\max\\{\\text{第 }k\\text{ 位小数}\\mid x\\in S_{k-1}\\}$；令 $S_k=\\{x\\in S_{k-1}\\mid\\text{第 }k\\text{ 位为 }\\alpha_k\\}$。
3. **逐位构造**无穷小数 $\\beta=\\alpha_0.\\alpha_1\\alpha_2\\cdots\\alpha_n\\cdots$。

**验证 $\\beta=\\sup S$**：

- **上界性**：若 $x\\notin S_{n_0}$，则 $x$ 的第 $n_0$ 位小数 $<\\alpha_{n_0}$，故 $x<\\beta$；若 $x\\in S_n$ 对一切 $n$，则 $x=\\beta$；
- **最小性**（$\\varepsilon$-刻画）：对 $\\varepsilon>0$，取 $n_0$ 使 $10^{-n_0}<\\varepsilon$，选 $x_0\\in S_{n_0}$，则 $\\beta-x_0\\le 10^{-n_0}<\\varepsilon$。$\\blacksquare$

---

**为何是"连续性"的分析表达**：

- 若实数轴**有空隙**，则空隙左侧数集就**无上确界**——这恰与定理矛盾；
- 反例佐证：有理数系 $\\mathbf{Q}$ **不**满足此定理，如 $T=\\{x\\in\\mathbf{Q}\\mid x>0,x^2<2\\}$ 在 $\\mathbf{Q}$ 内有上界（$2$）但**无上确界**（其"应为" $\\sqrt{2}\\notin\\mathbf{Q}$）。

**核心地位**：确界存在定理是**实数系 5 个等价的基本定理**之一（与单调有界、闭区间套、B-W、Cauchy 收敛原理等价），是整个数学分析的基石。`
  },
  {
    id: 'card-ma-c2-s1-n5',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s1-n5',
    question: `【定理证明】请写出「确界唯一性定理」（定理 2.1.2）并给出严格证明：非空有界数集的上（下）确界是唯一的。`,
    answer: `**定理 2.1.2**：非空有界数集 $S$ 的上确界 $\\sup S$ 与下确界 $\\inf S$ 是**唯一**的。

---

**证明（上确界情形，反证法）**：

设 $\\beta_1,\\beta_2$ 均为 $S$ 的上确界，要证 $\\beta_1=\\beta_2$。

**双向论证**：

- $\\beta_1$ 是上确界（即**最小**上界），$\\beta_2$ 是 $S$ 的上界 $\\Rightarrow\\beta_1\\le\\beta_2$；
- $\\beta_2$ 是上确界（即最小上界），$\\beta_1$ 是 $S$ 的上界 $\\Rightarrow\\beta_2\\le\\beta_1$。

两者结合：$\\beta_1=\\beta_2$。$\\blacksquare$

下确界情形完全类似。

---

**备注**：

- 此定理的证明本质上只用到了"最小上界"的**唯一最小性**定义（两个"最小"相互夹逼），并未调用 $\\varepsilon$-刻画；
- 确界的唯一性确保了 $\\sup S,\\inf S$ 作为**数值**是明确定义的，不依赖构造方法。

**考研高频技巧**：凡证明"唯一性"问题，几乎都用"**假设有两个，互相夹逼得相等**"的双向论证套路。`
  },
  {
    id: 'card-ma-c2-s1-n6',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s1-n6',
    question: `【附录 · 定理默写】请解释什么是 $\\mathbf{Q}$ 的一个 **Dedekind 切割**，列出有理数切割的三种可能情形（为何第四种不可能？），并写出 **Dedekind 切割定理**。它与确界存在定理有何关系？`,
    answer: `**Dedekind 切割**：两个非空有理数集 $A,B$ 满足

$$\\mathbf{Q}=A\\cup B,\\quad \\forall a\\in A,\\forall b\\in B:a<b,$$

则称 $A,B$ 构成 $\\mathbf{Q}$ 的一个**切割**，记为 $A/B$。

---

**$\\mathbf{Q}$ 切割的三种情形**：

1. $A$ 有最大数 $a_0$，$B$ 无最小数 $\\Rightarrow$ 切割确定有理数 $a_0$；
2. $A$ 无最大数，$B$ 有最小数 $b_0$ $\\Rightarrow$ 切割确定有理数 $b_0$；
3. $A$ 无最大数，$B$ 无最小数 $\\Rightarrow$ 切割确定一个**无理数** $c$（$c$ 大于 $A$ 中任意数、小于 $B$ 中任意数）。

**为何"$A$ 有 $\\max$ 且 $B$ 有 $\\min$"（第④种）不可能**：

设 $a_0=\\max A,\\ b_0=\\min B$，考察 $\\dfrac{a_0+b_0}{2}\\in\\mathbf{Q}$。

则 $a_0<\\dfrac{a_0+b_0}{2}<b_0$，但 $\\dfrac{a_0+b_0}{2}$ 既不属于 $A$（因大于 $a_0=\\max A$）也不属于 $B$（因小于 $b_0=\\min B$），与 $\\mathbf{Q}=A\\cup B$ 矛盾。

---

**例**：$A=\\{x\\in\\mathbf{Q}\\mid x\\le 0\\}\\cup\\{x\\in\\mathbf{Q}\\mid x>0,x^2<2\\}$，$B=\\{x\\in\\mathbf{Q}\\mid x>0,x^2>2\\}$——这是情形 ③，确定的无理数即 $\\sqrt{2}$。

---

**Dedekind 切割定理**：$\\mathbf{R}$ 的任何切割 $\\bar A/\\bar B$（$\\mathbf{R}=\\bar A\\cup\\bar B$，$\\bar A$ 中元素 $<$ $\\bar B$ 中元素）满足：**或者 $\\bar A$ 有最大数，或者 $\\bar B$ 有最小数**。

---

**与确界存在定理的关系**：两者**等价**，都是实数系连续性的刻画——$\\mathbf{R}$ 不存在情形 ③ 那种"无理数缝隙"，切割必由某个实数"界定"。这就是实数系与有理数系的**根本区别**。`
  },

  // ── 第二章 §2 数列极限 · 教材模式卡片 ──────────────────
  {
    id: 'card-ma-c2-s2-n1',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s2-n1',
    question: `【定义默写】请写出**数列**的定义，并辨析数列与数集的本质区别。说明为什么数列可以看作定义在 $\\mathbf{N^+}$ 上的函数？举出收敛 / 发散的典型数列各一例。`,
    answer: `**数列**：按正整数编号的一串数

$$x_1,\\ x_2,\\ \\ldots,\\ x_n,\\ \\ldots$$

记作 $\\{x_n\\}$，$x_n$ 称为**通项**。

---

**数列 vs 数集辨析**：

| | 数列 $\\{x_n\\}$ | 数集 $\\{x\\mid\\cdots\\}$ |
|---|---|---|
| 元素顺序 | **有确定编号**，不可颠倒 | 无序 |
| 重复项 | 允许，不可舍去 | 重复元素视为同一个 |
| 例 | $\\{(-1)^n\\}=-1,1,-1,1,\\ldots$ | $\\{(-1)^n\\mid n\\in\\mathbf{N^+}\\}=\\{-1,1\\}$ |

---

**作为函数的视角**：数列 $\\{x_n\\}$ 可看作定义在 $\\mathbf{N^+}$ 上的函数

$$x:\\mathbf{N^+}\\to\\mathbf{R},\\quad n\\mapsto x_n.$$

此视角是**函数极限**向"连续自变量"扩展的起点。

---

**典型例子**：

| 数列 | 行为 |
|---|---|
| $\\left\\{\\dfrac{1}{n}\\right\\}$ | **无穷小量**，收敛于 $0$ |
| $\\left\\{\\dfrac{n}{n+3}\\right\\}$ | **收敛**于 $1$ |
| $\\{n^2\\}$ | **发散**（无穷大量） |
| $\\{(-1)^n\\}$ | **发散**（振荡） |`
  },
  {
    id: 'card-ma-c2-s2-n2',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s2-n2',
    question: `【定义默写】请写出数列极限的 $\\varepsilon$-$N$ 严格定义（定义 2.2.1）、符号化表达，并说明其几何意义。"改变数列有限项不影响极限"为什么成立？`,
    answer: `**定义 2.2.1（$\\varepsilon$-$N$ 定义）**：若对任意给定的 $\\varepsilon>0$，可以找到正整数 $N$，使得当 $n>N$ 时成立

$$|x_n-a|<\\varepsilon,$$

则称数列 $\\{x_n\\}$ **收敛于** $a$，记为

$$\\lim_{n\\to\\infty}x_n=a\\quad\\text{或}\\quad x_n\\to a\\ (n\\to\\infty).$$

若不存在这样的 $a$，则称 $\\{x_n\\}$ **发散**。

---

**符号化表达**：

$$\\lim_{n\\to\\infty}x_n=a\\ \\Leftrightarrow\\ \\forall\\,\\varepsilon>0,\\ \\exists\\,N,\\ \\forall\\,n>N:|x_n-a|<\\varepsilon.$$

---

**几何意义**：设 $a$ 的 $\\varepsilon$-邻域为

$$O(a,\\varepsilon)=\\{x\\mid a-\\varepsilon<x<a+\\varepsilon\\}.$$

$x_n\\to a$ 意味着：**对任意小**的 $\\varepsilon$，$\\{x_n\\}$ 从第 $N+1$ 项起**所有项**都落入 $O(a,\\varepsilon)$——即"**无限靠拢** $a$"。

---

**改变有限项不影响极限**：

若改变 $\\{x_n\\}$ 的前 $N_0$ 项得新数列 $\\{x_n'\\}$，则 $n>N_0$ 时 $x_n'=x_n$。

对原极限的 $N$，取 $N'=\\max\\{N,N_0\\}$，则 $n>N'$ 时 $|x_n'-a|=|x_n-a|<\\varepsilon$。

**本质**：$\\varepsilon$-$N$ 定义只关心"**足够靠后**"的无穷项，前有限项与极限**无关**。这也是为什么许多教材常用"从某项起成立"这类表述。`
  },
  {
    id: 'card-ma-c2-s2-n3',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s2-n3',
    question: `【解题技巧】请说明**无穷小量**与收敛数列的关系，并演示用 $\\varepsilon$-$N$ 语言证明以下四个极限（注意"适度放大"技巧）：① $\\lim\\dfrac{n}{n+3}=1$；② $\\lim\\dfrac{n^2+1}{2n^2-7n}=\\dfrac{1}{2}$；③ $\\lim\\sqrt[n]{a}=1\\ (a>1)$；④ $\\lim\\sqrt[n]{n}=1$。`,
    answer: `**无穷小量 ↔ 收敛数列的桥梁**：

$$\\lim_{n\\to\\infty}x_n=a\\ \\Leftrightarrow\\ \\{x_n-a\\}\\text{ 是无穷小量}.$$

**核心技巧：适度放大**——无需求最优 $N$，允许对 $|x_n-a|$ 放大以简化计算。

---

**① $\\lim\\dfrac{n}{n+3}=1$**：

$$\\left|\\frac{n}{n+3}-1\\right|=\\frac{3}{n+3}<\\frac{3}{n}<\\varepsilon\\Rightarrow n>\\frac{3}{\\varepsilon}.$$

取 $N=\\left[\\dfrac{3}{\\varepsilon}\\right]+1$。

**② $\\lim\\dfrac{n^2+1}{2n^2-7n}=\\dfrac{1}{2}$**：$n>6$ 时

$$\\left|\\frac{n^2+1}{2n^2-7n}-\\frac{1}{2}\\right|=\\frac{7n+2}{2n(2n-7)}<\\frac{8n}{2n^2}=\\frac{4}{n}<\\varepsilon.$$

取 $N=\\max\\left\\{6,\\,\\left[\\dfrac{4}{\\varepsilon}\\right]\\right\\}$。

**③ $\\lim\\sqrt[n]{a}=1\\ (a>1)$**（二项式定理放大）：

令 $\\sqrt[n]{a}=1+y_n,\\ y_n>0$。由 $a=(1+y_n)^n\\ge 1+ny_n$：

$$y_n\\le\\frac{a-1}{n}<\\varepsilon\\Rightarrow N=\\left[\\frac{a-1}{\\varepsilon}\\right].$$

**④ $\\lim\\sqrt[n]{n}=1$**（二阶二项式放大）：

令 $\\sqrt[n]{n}=1+y_n$。由 $n=(1+y_n)^n\\ge 1+\\dfrac{n(n-1)}{2}y_n^2$：

$$y_n\\le\\sqrt{\\frac{2(n-1)}{n(n-1)}}=\\sqrt{\\frac{2}{n}}<\\varepsilon\\Rightarrow N=\\left[\\frac{2}{\\varepsilon^2}\\right].$$

---

**放大技巧口诀**：

- **分式极限**：分子缩小、分母扩大，得上界；
- **根式极限**：令 $=1+y_n$，用二项式定理从下界反推 $y_n$ 的放大；
- **$N$ 形式**：取整后 $+1$ 或 $\\max$ 并联多个约束。`
  },
  {
    id: 'card-ma-c2-s2-n4',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s2-n4',
    question: `【定理证明】请写出「极限的唯一性」定理（定理 2.2.1）并给出严格证明。证明中用到的**插项法 + 三角不等式**为什么是极限证明的核心技巧？`,
    answer: `**定理 2.2.1**：收敛数列的极限必唯一。

---

**证明**（反证法 + 插项 + 三角不等式）：

设 $\\{x_n\\}$ 同时收敛于 $a$ 与 $b$。对 $\\forall\\varepsilon>0$：

$$\\exists N_1,\\ \\forall n>N_1:|x_n-a|<\\frac{\\varepsilon}{2};$$

$$\\exists N_2,\\ \\forall n>N_2:|x_n-b|<\\frac{\\varepsilon}{2}.$$

取 $N=\\max\\{N_1,N_2\\}$，当 $n>N$ 时，**插入 $x_n$** 并用三角不等式：

$$|a-b|=|(a-x_n)+(x_n-b)|\\le|x_n-a|+|x_n-b|<\\frac{\\varepsilon}{2}+\\frac{\\varepsilon}{2}=\\varepsilon.$$

由 $\\varepsilon$ 的任意性，$|a-b|=0\\Rightarrow a=b$。$\\blacksquare$

---

**插项法核心地位**：

**核心公式**：$|A-B|\\le|A-C|+|C-B|$——加一项减一项（"无中生有"地引入 $x_n$）

**为何重要**：

- 把**间接**可控的量 $|a-b|$ 转化为**直接**可控的量 $|x_n-a|$ 与 $|x_n-b|$；
- 是证明"$=$"型结论的万能手段（证明一致收敛、Cauchy 列、连续性、可积性均反复使用）。

**$\\varepsilon/2$ 技巧**：将目标 $\\varepsilon$ 拆为 $\\varepsilon/2+\\varepsilon/2$，使两段单独可控后合并不超 $\\varepsilon$——这种"**预先分蛋糕**"的思想在分析中无处不在。`
  },
  {
    id: 'card-ma-c2-s2-n5',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s2-n5',
    question: `【定理默写】请写出「收敛数列必有界」定理（定理 2.2.2）并给出严格证明。其**逆命题**是否成立？为什么？请举反例。`,
    answer: `**定理 2.2.2**：收敛数列必有界。

---

**证明**（令 $\\varepsilon=1$，分离前有限项与后无穷项）：

设 $\\lim x_n=a$。取 $\\varepsilon=1$，$\\exists N,\\ \\forall n>N:|x_n-a|<1$，即

$$a-1<x_n<a+1.$$

令

$$M=\\max\\{x_1,\\ldots,x_N,\\ a+1\\},\\qquad m=\\min\\{x_1,\\ldots,x_N,\\ a-1\\}.$$

则对**所有** $n$：$m\\le x_n\\le M$。$\\blacksquare$

---

**证明技巧**：将数列分成**前 $N$ 项（有限集，必有界）**与**后无穷项（集中于 $O(a,1)$）**两部分，取并集的上下界。

---

**逆命题不成立**：**有界 $\\not\\Rightarrow$ 收敛**

**反例**：$\\{(-1)^n\\}=-1,1,-1,1,\\ldots$——显然 $|x_n|\\le 1$ **有界**，但在 $-1$ 与 $1$ 之间振荡，**不收敛**。

**根本原因**：有界只是"不跑到无穷"，但不保证"稳定收敛到某一个值"。

---

**后续关联**：要从"有界"推出"收敛"，需加**单调性**——即**单调有界准则**（实数基本定理之一），或至少要求"收敛子列"——即**Bolzano-Weierstrass 定理**。`
  },
  {
    id: 'card-ma-c2-s2-n6',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s2-n6',
    question: `【定理默写】请写出「数列极限的保序性」（定理 2.2.3）及其**保号性推论**，并说明为什么逆命题弱化为 $x_n\\le y_n\\Rightarrow a\\le b$（严格不等号可能退化为等号）。`,
    answer: `**定理 2.2.3（保序性）**：$\\lim x_n=a,\\ \\lim y_n=b,\\ a<b\\Rightarrow\\exists N$，$n>N$ 时

$$x_n<y_n.$$

**证明**：取 $\\varepsilon=\\dfrac{b-a}{2}>0$。$n>\\max\\{N_1,N_2\\}$ 时

$$x_n<a+\\frac{b-a}{2}=\\frac{a+b}{2}=b-\\frac{b-a}{2}<y_n.\\quad\\blacksquare$$

---

**推论（保号性）**：

- $\\lim y_n=b>0\\Rightarrow\\exists N,\\ n>N:y_n>\\dfrac{b}{2}>0$；
- $\\lim y_n=b<0\\Rightarrow\\exists N,\\ n>N:y_n<\\dfrac{b}{2}<0$。

（取 $x_n\\equiv 0$ 应用定理即得。）

---

**逆命题的弱化**：若 $x_n\\le y_n\\ (n>N_0),\\ \\lim x_n=a,\\ \\lim y_n=b$，则

$$\\boxed{\\ a\\le b\\ }$$

但**严格不等号不保留**：$x_n<y_n$ **不能推出** $a<b$。

**反例**：$x_n=0,\\ y_n=\\dfrac{1}{n}$——$\\forall n:x_n<y_n$，但 $\\lim x_n=0=\\lim y_n$（极限"相撞"于 $0$）。

**几何直观**：两数列可以一直严格分离但**无限逼近**，在极限位置**相遇为同一点**——就像两条不相交但渐近的曲线可以趋于同一条渐近线。

---

**考研应用**：处理"从 $x_n\\le y_n$ 推极限大小"时，结论**只能写 $\\le$**，写 $<$ 会扣分。`
  },
  {
    id: 'card-ma-c2-s2-n7',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s2-n7',
    question: `【定理默写 + 例题】请写出「夹逼定理」（定理 2.2.4）的完整叙述与证明思路，并用之计算：① $\\lim(\\sqrt{n+1}-\\sqrt{n})$；② $\\lim\\left(\\dfrac{1}{\\sqrt{n^2+1}}+\\dfrac{1}{\\sqrt{n^2+2}}+\\cdots+\\dfrac{1}{\\sqrt{n^2+n}}\\right)$。`,
    answer: `**定理 2.2.4（夹逼定理）**：若 $\\{x_n\\},\\{y_n\\},\\{z_n\\}$ 从某项起满足

$$x_n\\le y_n\\le z_n\\quad(n>N_0),$$

且 $\\lim x_n=\\lim z_n=a$，则 $\\lim y_n=a$。

**证明**：$\\forall\\varepsilon>0,\\ \\exists N_1,N_2$。取 $N=\\max\\{N_0,N_1,N_2\\}$，$n>N$ 时

$$a-\\varepsilon<x_n\\le y_n\\le z_n<a+\\varepsilon\\Rightarrow|y_n-a|<\\varepsilon.\\quad\\blacksquare$$

**应用思路**：将目标 $\\{y_n\\}$ 用**易算**的 $\\{x_n\\},\\{z_n\\}$ 夹住，且两端极限相同。

---

**① $\\lim(\\sqrt{n+1}-\\sqrt{n})$**（有理化，无需夹逼亦可）：

$$\\sqrt{n+1}-\\sqrt{n}=\\frac{1}{\\sqrt{n+1}+\\sqrt{n}}\\to 0\\quad(n\\to\\infty).$$

---

**② $\\lim\\sum_{k=1}^n\\dfrac{1}{\\sqrt{n^2+k}}$**（夹逼经典）：

$$\\frac{n}{\\sqrt{n^2+n}}\\le\\underbrace{\\sum_{k=1}^n\\frac{1}{\\sqrt{n^2+k}}}_{\\text{原式}}\\le\\frac{n}{\\sqrt{n^2+1}}.$$

左端：

$$\\frac{n}{\\sqrt{n^2+n}}=\\frac{1}{\\sqrt{1+1/n}}\\to 1;$$

右端：

$$\\frac{n}{\\sqrt{n^2+1}}=\\frac{1}{\\sqrt{1+1/n^2}}\\to 1.$$

由夹逼，原式 $\\to 1$。$\\blacksquare$

---

**夹逼常见套路**："**$n$ 项之和**"类极限——用"每项的最大值 × $n$"和"每项的最小值 × $n$"作夹。`
  },
  {
    id: 'card-ma-c2-s2-n8',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s2-n8',
    question: `【定理默写 + 例题】请写出「极限的四则运算」法则（定理 2.2.5），简述**乘法**情形的证明要点，并说明为什么该法则**只能**用于有限项。用此法则计算：① $\\lim\\dfrac{5^{n+1}-(-2)^n}{3\\cdot 5^n+2\\cdot 3^n}$；② $\\lim n(\\sqrt{n^2+1}-\\sqrt{n^2-1})$。`,
    answer: `**定理 2.2.5**：$\\lim x_n=a,\\ \\lim y_n=b$，$\\alpha,\\beta$ 常数，则

1. $\\lim(\\alpha x_n+\\beta y_n)=\\alpha a+\\beta b$；
2. $\\lim(x_n y_n)=ab$；
3. $\\lim\\dfrac{x_n}{y_n}=\\dfrac{a}{b}$（$b\\ne 0$）。

---

**乘法证明要点**：由收敛必有界，$\\exists X>0:|x_n|\\le X$。插项 + 三角不等式：

$$|x_ny_n-ab|=|x_n(y_n-b)+b(x_n-a)|\\le X|y_n-b|+|b||x_n-a|\\xrightarrow{n\\to\\infty}0.$$

---

**为何不能推广到无穷项**：

**反例**：$\\lim\\dfrac{1}{n}=0$，但

$$\\underbrace{\\frac{1}{n}+\\frac{1}{n}+\\cdots+\\frac{1}{n}}_{n\\text{ 项}}=1\\not\\to 0+0+\\cdots=0.$$

**本质**：四则运算的证明过程需要 $N$（$n>N$ 时控制误差），但若项数也随 $n$ 变，则 $N$ 的控制失效。

---

**① 分子分母同除 $5^n$**：

$$\\lim\\frac{5^{n+1}-(-2)^n}{3\\cdot 5^n+2\\cdot 3^n}=\\lim\\frac{5-(-2/5)^n}{3+2(3/5)^n}=\\frac{5-0}{3+0}=\\frac{5}{3}.$$

---

**② 根式有理化**：

$$n(\\sqrt{n^2+1}-\\sqrt{n^2-1})=\\frac{2n}{\\sqrt{n^2+1}+\\sqrt{n^2-1}}=\\frac{2}{\\sqrt{1+1/n^2}+\\sqrt{1-1/n^2}}\\to\\frac{2}{1+1}=1.$$

---

**套路总结**：

- **分式比**：分子分母同除以"最高阶"项；
- **根式差**：上下有理化；
- **无穷项相加**：四则法则失效，改用**夹逼**或定积分定义。`
  },
  {
    id: 'card-ma-c2-s2-n9',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s2-n9',
    question: `【定理默写 + 证明】请写出「Cesàro 均值定理」与「几何均值定理」（定理 2.2.6）的完整叙述，并说明两者的核心证明思路。为什么几何均值定理的证明最终要借助夹逼定理？`,
    answer: `**Cesàro 均值定理（算术均值收敛定理）**：$\\lim a_n=a$ $\\Rightarrow$

$$\\lim_{n\\to\\infty}\\frac{a_1+a_2+\\cdots+a_n}{n}=a.$$

---

**证明思路（先设 $a=0$，一般情形令 $b_n=a_n-a$ 化归）**：

$\\forall\\varepsilon>0,\\ \\exists N_1$ 使 $n>N_1$ 时 $|a_n|<\\dfrac{\\varepsilon}{2}$。

$$\\left|\\frac{a_1+\\cdots+a_n}{n}\\right|\\le\\underbrace{\\frac{|a_1+\\cdots+a_{N_1}|}{n}}_{\\text{前缀（固定）}}+\\underbrace{\\frac{|a_{N_1+1}|+\\cdots+|a_n|}{n}}_{\\text{后缀（每项 }<\\varepsilon/2\\text{）}}.$$

- 前缀：分子固定、分母 $n\\to\\infty$ $\\Rightarrow$ 充分大 $N_2>N_1$ 使前缀 $<\\dfrac{\\varepsilon}{2}$；
- 后缀：每项 $<\\dfrac{\\varepsilon}{2}$，且项数 $\\le n$ $\\Rightarrow$ 后缀 $<\\dfrac{\\varepsilon}{2}$。

合并得总 $<\\varepsilon$。$\\blacksquare$

---

**几何均值定理**：$a_n>0$ 且 $\\lim a_n=a$ $\\Rightarrow$

$$\\lim_{n\\to\\infty}\\sqrt[n]{a_1a_2\\cdots a_n}=a.$$

---

**证明思路（$a>0$，借助均值不等式 + 夹逼定理）**：

由经典**调和-几何-算术均值不等式**：

$$\\underbrace{\\frac{n}{\\tfrac{1}{a_1}+\\cdots+\\tfrac{1}{a_n}}}_{\\text{调和}H_n}\\le\\underbrace{\\sqrt[n]{a_1\\cdots a_n}}_{\\text{几何}G_n}\\le\\underbrace{\\frac{a_1+\\cdots+a_n}{n}}_{\\text{算术}A_n}.$$

- 右端 $A_n\\to a$（直接 Cesàro 定理）；
- 左端 $H_n\\to a$：对 $\\left\\{\\dfrac{1}{a_n}\\right\\}$ 用 Cesàro 得 $\\dfrac{1}{a_1}+\\cdots+\\dfrac{1}{a_n}\\sim\\dfrac{n}{a}$，故 $H_n\\to a$；

由**夹逼定理** $G_n\\to a$。$\\blacksquare$

---

**经典应用**：

- 由 Cesàro 证 $\\lim\\dfrac{1+\\tfrac{1}{2}+\\cdots+\\tfrac{1}{n}}{\\ln n}=1$（与调和级数相关）；
- 由几何均值证 $\\lim\\sqrt[n]{n!}/n=\\dfrac{1}{e}$（Stirling 公式的雏形）。`
  },

  // ── 第二章 §3 无穷大量 · 概念记忆卡片 ──────────────────
  {
    id: 'card-ma-c2-s3-n1',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s3-n1',
    question: `【概念回忆】请默写「无穷大量」的 ε-N 型严格定义，并用符号化语言写出其等价表达式。`,
    answer: `若对于任意给定的 $G > 0$，可以找到正整数 $N$，使得当 $n > N$ 时，成立
$$|x_n| > G$$
则称数列 $\\{x_n\\}$ 是**无穷大量**，记为 $\\lim_{n\\to\\infty} x_n = \\infty$。

**符号化**：$\\forall G > 0,\\ \\exists N,\\ \\forall n > N:\\ |x_n| > G$

**定号无穷大量**：从某项起恒正记为 $+\\infty$，恒负记为 $-\\infty$。`
  },
  {
    id: 'card-ma-c2-s3-n2',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s3-n2',
    question: `【定理默写】请写出「无穷大量与无穷小量互倒关系」定理（定理 2.3.1）的完整叙述，并给出证明思路。`,
    answer: `**定理 2.3.1**：设 $x_n \\neq 0$，则

$$\\{x_n\\} \\text{ 是无穷大量} \\Leftrightarrow \\{1/x_n\\} \\text{ 是无穷小量}$$

**证明**：
- （$\\Rightarrow$）$\\forall\\,\\varepsilon > 0$，取 $G = 1/\\varepsilon$，由无穷大量定义知 $\\exists N$，$n > N$ 时 $|x_n| > 1/\\varepsilon$，从而 $|1/x_n| < \\varepsilon$。
- （$\\Leftarrow$）$\\forall G > 0$，取 $\\varepsilon = 1/G$，由无穷小量定义知 $\\exists N$，$n > N$ 时 $|1/x_n| < 1/G$，从而 $|x_n| > G$。$\\blacksquare$`
  },
  {
    id: 'card-ma-c2-s3-n3',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s3-n3',
    question: `【定理默写】请写出「无穷大量运算性质」定理（定理 2.3.2）及其推论的完整叙述。`,
    answer: `**定理 2.3.2**：设 $\\{x_n\\}$ 是无穷大量，若当 $n > N_0$ 时 $|y_n| \\geq \\delta > 0$，则 $\\{x_n y_n\\}$ 是无穷大量。

**推论**：设 $\\{x_n\\}$ 是无穷大量，$\\lim_{n\\to\\infty} y_n = b \\neq 0$，则 $\\{x_n y_n\\}$ 与 $\\{x_n / y_n\\}$ 均是无穷大量。

**基本运算规则**：
- 同号无穷大量之和仍为该符号无穷大量；
- 无穷大量与有界量之和/差仍为无穷大量；
- 同号之积为 $+\\infty$，异号之积为 $-\\infty$。`
  },
  {
    id: 'card-ma-c2-s3-n4',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s3-n4',
    question: `【结论默写】请写出多项式比值极限的完整结论：$\\lim_{n\\to\\infty} \\dfrac{a_0 n^k + \\cdots + a_k}{b_0 n^l + \\cdots + b_l}$（$a_0 \\neq 0, b_0 \\neq 0$）的三种情形。`,
    answer: `$$\\lim_{n\\to\\infty} \\frac{a_0 n^k + a_1 n^{k-1} + \\cdots + a_k}{b_0 n^l + b_1 n^{l-1} + \\cdots + b_l} = \\begin{cases} 0 & k < l \\\\ \\dfrac{a_0}{b_0} & k = l \\\\ \\infty & k > l \\end{cases}$$

**证明方法**：分子分母同除以 $n^l$，化为 $n^{k-l}$ 乘以极限为 $a_0/b_0$ 的分式，再对三种情形分别讨论。

**口诀**：**抓最高次项**，低次项为无穷小量可忽略。`
  },
  {
    id: 'card-ma-c2-s3-n5',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s3-n5',
    question: `【概念回忆】什么是「待定型极限」？请列举所有常见的待定型，并说明其特点。`,
    answer: `**待定型**：无穷大量或无穷小量之间运算时，极限结果无法由运算符号直接判定的类型。

**常见待定型**：
$$\\infty \\pm \\infty, \\quad (+\\infty)-(+\\infty), \\quad 0 \\cdot \\infty, \\quad \\frac{0}{0}, \\quad \\frac{\\infty}{\\infty}$$

**特点**：同一种待定型，依具体数列不同，结果可以是零、非零有限数、无穷大量，或根本不存在极限——必须逐案分析，不能直接套用运算规则。`
  },
  {
    id: 'card-ma-c2-s3-n6',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s3-n6',
    question: `【定义默写】请默写「单调数列」的严格定义（定义 2.3.2），包括单调增加与严格单调增加两种情形。`,
    answer: `**定义 2.3.2**：
- 若 $x_n \\leq x_{n+1}$（$n = 1, 2, 3, \\ldots$），称 $\\{x_n\\}$ 为**单调增加数列**；
- 若 $x_n < x_{n+1}$（$n = 1, 2, 3, \\ldots$），称 $\\{x_n\\}$ 为**严格单调增加数列**；
- 类似定义**单调减少**与**严格单调减少**数列。

**注**：数列前有限项不影响收敛性，"从某项起单调"的数列均纳入单调数列讨论范围。`
  },
  {
    id: 'card-ma-c2-s3-n7',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s3-n7',
    question: `【定理默写】请完整默写「Stolz 定理」（定理 2.3.3）的条件与结论，并写出其三个经典应用。`,
    answer: `**定理 2.3.3（Stolz）**：设 $\\{y_n\\}$ 是严格单调增加的正无穷大量，且
$$\\lim_{n\\to\\infty} \\frac{x_n - x_{n-1}}{y_n - y_{n-1}} = a \\ \\ (a \\text{ 可为有限数、} +\\infty \\text{ 或 } -\\infty)$$
则 $\\displaystyle\\lim_{n\\to\\infty} \\frac{x_n}{y_n} = a$。

**类比**：Stolz 定理 = 离散版 L'Hôpital 法则（差商代导数）。

**三个经典应用**：

1. **Cesàro 均值**（$y_n = n$）：$\\lim a_n = a \\Rightarrow \\lim\\dfrac{\\sum_{k=1}^n a_k}{n} = a$

2. **幂次求和**（$y_n = n^{k+1}$）：$\\displaystyle\\lim_{n\\to\\infty}\\frac{1^k + 2^k + \\cdots + n^k}{n^{k+1}} = \\frac{1}{k+1}$

3. **加权求和**（$y_n = n^2$，$\\lim a_n = a$）：$\\displaystyle\\lim_{n\\to\\infty}\\frac{a_1 + 2a_2 + \\cdots + na_n}{n^2} = \\frac{a}{2}$

**注意**：逆命题不成立——$x_n/y_n$ 极限存在不能推出差商极限存在。`
  },

  // ── 第二章 §4 收敛准则 · 概念记忆卡片 ──────────────────
  {
    id: 'card-ma-c2-s4-n1',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s4-n1',
    question: `【定理默写】请完整默写「单调有界数列收敛定理」（定理 2.4.1）的叙述与证明思路，并说明其意义。`,
    answer: `**定理 2.4.1**：单调有界数列必定收敛。

**证明**：不妨设 $\\{x_n\\}$ 单调增加且有上界，由确界存在定理，$\\{x_n\\}$ 的数集有上确界 $\\beta$，满足：
1. $\\forall n$：$x_n \\leq \\beta$；
2. $\\forall\\,\\varepsilon > 0$，$\\exists\\, x_{n_0} > \\beta - \\varepsilon$。

取 $N = n_0$，则 $\\forall n > N$：
$$\\beta - \\varepsilon < x_{n_0} \\leq x_n \\leq \\beta \\Rightarrow |x_n - \\beta| < \\varepsilon$$

故 $\\lim_{n\\to\\infty} x_n = \\beta$。$\\blacksquare$

**意义**：无需预知极限值，只需验证单调性 + 有界性即可判断收敛；极限等于上确界（增）或下确界（减）。`
  },
  {
    id: 'card-ma-c2-s4-n2',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s4-n2',
    question: `【方法默写】用单调有界定理证明递推数列收敛的标准三步法是什么？请结合例 2.4.1（$x_{n+1} = 1 + \\dfrac{x_n}{1+x_n}$）说明。`,
    answer: `**标准三步法**：
1. **有界**：数学归纳法证明 $\\{x_n\\}$ 有上界（或下界）；
2. **单调**：由递推式计算 $x_{n+1} - x_n$ 的符号；
3. **求极限**：设 $\\lim x_n = a$，在递推式两边取极限，解方程求 $a$。

**例 2.4.1**：$x_1 > 0$，$x_{n+1} = 1 + \\dfrac{x_n}{1+x_n}$。

① 归纳得 $n \\geq 2$ 时 $1 < x_n < 2$；
② $x_{n+1} - x_n = \\dfrac{x_n - x_{n-1}}{(1+x_n)(1+x_{n-1})}$，差号一致，单调；
③ $a = 1 + \\dfrac{a}{1+a} \\Rightarrow a^2 - a - 1 = 0 \\Rightarrow \\lim x_n = \\dfrac{1+\\sqrt{5}}{2}$。

**例 2.4.2 补充**：$x_{n+1} = x_n(1-x_n)$ 的极限为 $0$，且 $\\lim(nx_n) = 1$（由 Stolz 定理），即 $\\{x_n\\}$ 与 $\\{1/n\\}$ 等价无穷小。`
  },
  {
    id: 'card-ma-c2-s4-n3',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s4-n3',
    question: `【结论默写】Fibonacci 数列 $a_{n+1} = a_n + a_{n-1}$ 的增长率数列 $b_n = a_{n+1}/a_n$ 的极限是多少？证明思路是什么？`,
    answer: `**Fibonacci 数列**：$a_1 = a_2 = 1$，$a_{n+1} = a_n + a_{n-1}$，则
$$b_n = \\frac{a_{n+1}}{a_n} = 1 + \\frac{1}{b_{n-1}}$$

$\\{b_n\\}$ 不单调，拆分奇偶子列：
- $\\{b_{2k}\\}$ 单调减少有下界；
- $\\{b_{2k-1}\\}$ 单调增加有上界。

两者均收敛，设极限为 $L$，由递推关系两边取极限得 $L = \\dfrac{1+2L}{1+L}$，解得：
$$\\lim_{n\\to\\infty} b_n = \\frac{1+\\sqrt{5}}{2} \\approx 1.618 \\quad \\text{（黄金比例）}$$

**兔群增长率**趋于 $\\dfrac{1+\\sqrt{5}}{2} - 1 = \\dfrac{\\sqrt{5}-1}{2} \\approx 0.618$。`
  },
  {
    id: 'card-ma-c2-s4-n4',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s4-n4',
    question: `【定义默写】请写出 π 和 e 的严格极限定义，以及证明两者存在所用的关键不等式。`,
    answer: `**π 的定义**：单位圆内接正 $n$ 边形半周长 $L_n = n\\sin\\dfrac{180^\\circ}{n}$，可证 $n \\geq 3$ 时 $L_n$ 单调增加且 $L_n < 8$，故
$$\\pi \\triangleq \\lim_{n\\to\\infty} n\\sin\\frac{180^\\circ}{n}$$
弧度制下等价为 $\\displaystyle\\lim_{n\\to\\infty}\\frac{\\sin(\\pi/n)}{\\pi/n} = 1$。

**e 的定义**：令 $x_n = \\left(1+\\dfrac{1}{n}\\right)^n$，$y_n = \\left(1+\\dfrac{1}{n}\\right)^{n+1}$，由平均值不等式证得 $\\{x_n\\}$ 单调增，$\\{y_n\\}$ 单调减，且 $2 \\leq x_n < y_n \\leq 4$，故
$$e \\triangleq \\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^n = \\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^{n+1} = 2.71828\\ldots$$

**关键不等式**：$\\left(1+\\dfrac{1}{n}\\right)^n < e < \\left(1+\\dfrac{1}{n}\\right)^{n+1}$，等价于 $\\dfrac{1}{n+1} < \\ln\\dfrac{n+1}{n} < \\dfrac{1}{n}$。`
  },
  {
    id: 'card-ma-c2-s4-n5',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s4-n5',
    question: `【结论默写】$p$-级数 $\\sum\\dfrac{1}{n^p}$ 的收敛条件是什么？Euler 常数 $\\gamma$ 的定义式是什么？与之相关的两个 $\\ln 2$ 极限是什么？`,
    answer: `**p-级数收敛判断**：$a_n = 1 + \\dfrac{1}{2^p} + \\cdots + \\dfrac{1}{n^p}$：
$$\\{a_n\\}\\text{ 收敛} \\Leftrightarrow p > 1$$

**证明思路（$p>1$）**：令 $r = 2^{1-p} < 1$，以 $2^k$ 为界分组放缩，得 $a_n < \\dfrac{1}{1-r}$。

**Euler 常数**：
$$\\gamma = \\lim_{n\\to\\infty}\\left(1 + \\frac{1}{2} + \\cdots + \\frac{1}{n} - \\ln n\\right) = 0.5772\\ldots$$
$\\{b_n\\}$ 单调减少有下界（由 $\\dfrac{1}{n+1} < \\ln\\dfrac{n+1}{n}$ 得 $b_{n+1} < b_n$；由 $\\ln\\dfrac{n+1}{n} < \\dfrac{1}{n}$ 得 $b_n > 0$）。

**两个 $\\ln 2$ 极限**：
$$\\lim_{n\\to\\infty}\\left(\\frac{1}{n+1}+\\cdots+\\frac{1}{2n}\\right) = \\ln 2$$
$$\\lim_{n\\to\\infty}\\left(1-\\frac{1}{2}+\\frac{1}{3}-\\cdots+\\frac{(-1)^{n+1}}{n}\\right) = \\ln 2$$`
  },
  {
    id: 'card-ma-c2-s4-n6',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s4-n6',
    question: `【定义+定理默写】请默写「闭区间套」的定义（定义 2.4.1）和「闭区间套定理」（定理 2.4.2）的完整叙述与证明思路。`,
    answer: `**定义 2.4.1（闭区间套）**：若 $\\{[a_n, b_n]\\}$ 满足：
1. $[a_{n+1}, b_{n+1}] \\subset [a_n, b_n]$，$n = 1, 2, 3, \\ldots$；
2. $\\lim_{n\\to\\infty}(b_n - a_n) = 0$，

则称 $\\{[a_n, b_n]\\}$ 为**闭区间套**。

**定理 2.4.2**：若 $\\{[a_n, b_n]\\}$ 是闭区间套，则存在唯一实数 $\\xi$ 属于所有 $[a_n, b_n]$，且
$$\\xi = \\lim_{n\\to\\infty} a_n = \\lim_{n\\to\\infty} b_n$$

**证明**：$\\{a_n\\}$ 单调增有上界 $b_1$，$\\{b_n\\}$ 单调减有下界 $a_1$，均收敛；由 $b_n - a_n \\to 0$ 极限相同记为 $\\xi$；由单调性 $a_n \\leq \\xi \\leq b_n$；唯一性由夹逼保证。$\\blacksquare$

**注**：开区间套不保证 $\\xi$ 属于任何开区间（例：$a_n=0, b_n=1/n$，$\\xi=0 \\notin (0,1/n)$）。`
  },
  {
    id: 'card-ma-c2-s4-n7',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s4-n7',
    question: `【定理默写】请写出「实数集不可列」定理（定理 2.4.3）的证明思路。`,
    answer: `**定理 2.4.3**：实数集 $\\mathbf{R}$ 是不可列集。

**证明**（闭区间套 + 反证法）：

设 $\\mathbf{R}$ 可列，排列为 $x_1, x_2, x_3, \\ldots$。任取 $[a_1, b_1]$。

将 $[a_1, b_1]$ 三等分，至少一个子区间不含 $x_2$，记为 $[a_2, b_2]$；再三等分，至少一个不含 $x_3$，记为 $[a_3, b_3]$；以此类推，得闭区间套 $\\{[a_n, b_n]\\}$ 满足
$$x_n \\notin [a_n, b_n], \\quad \\forall\\, n$$

由闭区间套定理，$\\exists\\, \\xi \\in \\bigcap [a_n, b_n]$，故 $\\xi \\neq x_n$（$\\forall\\, n$），与 $\\mathbf{R} = \\{x_n\\}$ 矛盾。$\\blacksquare$

**对比**：$\\mathbf{Q}$ 可列（定理 1.1.2），$\\mathbf{R}$ 不可列，无理数"远多于"有理数。`
  },
  {
    id: 'card-ma-c2-s4-n8',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s4-n8',
    question: `【定义+定理默写】请默写「子列」的定义（定义 2.4.2）、定理 2.4.4 及其推论，并说明如何用子列判断发散（附例 2.4.11）。`,
    answer: `**定义 2.4.2（子列）**：设 $n_1 < n_2 < \\cdots < n_k < \\cdots$ 是严格单调增加正整数列，则 $\\{x_{n_k}\\}$ 称为 $\\{x_n\\}$ 的**子列**。由严格单调性，$n_k \\geq k$。

**定理 2.4.4**：
$$\\lim_{n\\to\\infty} x_n = a \\Rightarrow \\lim_{k\\to\\infty} x_{n_k} = a \\quad (\\text{对任意子列})$$

**证明**：$k > K = N$ 时，$n_k \\geq k > N$，故 $|x_{n_k} - a| < \\varepsilon$。$\\blacksquare$

**推论（发散判别）**：若 $\\{x_n\\}$ 有两个子列收敛于**不同**极限，则 $\\{x_n\\}$ 发散。

**例 2.4.11**：$\\left\\{\\sin\\dfrac{n\\pi}{4}\\right\\}$ 发散。
- $n_k^{(1)} = 4k \\Rightarrow \\sin(k\\pi) = 0 \\to 0$；
- $n_k^{(2)} = 8k+2 \\Rightarrow \\sin\\left(2k\\pi + \\dfrac{\\pi}{2}\\right) = 1 \\to 1$；
- 两极限不同，故发散。`
  },
  {
    id: 'card-ma-c2-s4-n9',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s4-n9',
    question: `【定理默写】请完整默写 Bolzano-Weierstrass 定理（定理 2.4.5）及其证明思路，以及定理 2.4.6（无界数列子列趋无穷）。`,
    answer: `**定理 2.4.5（Bolzano-Weierstrass）**：有界数列必有收敛子列。

**证明思路**（二分法构造闭区间套）：
1. $\\{x_n\\} \\subset [a_1, b_1]$，将 $[a_1, b_1]$ 二等分；
2. 至少有一半含无穷多项，记为 $[a_2, b_2]$；
3. 继续二等分，得闭区间套 $\\{[a_k, b_k]\\}$，每区间含无穷多项，$b_k - a_k \\to 0$；
4. 由闭区间套定理，$\\xi = \\lim a_k = \\lim b_k$；
5. 从 $[a_k, b_k]$ 中依次选下标递增的项 $x_{n_k}$，由夹逼性 $\\lim x_{n_k} = \\xi$。$\\blacksquare$

**定理 2.4.6**：若 $\\{x_n\\}$ 无界，则 $\\exists$ 子列 $\\{x_{n_k}\\}$ 使 $\\lim x_{n_k} = \\infty$。

**证明**：$\\{x_n\\}$ 无界，则对任意 $k$ 存在满足 $|x_n| > k$ 的项，依次取 $n_k$ 严格递增，则 $|x_{n_k}| > k \\to \\infty$。$\\blacksquare$`
  },
  {
    id: 'card-ma-c2-s4-n10',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c2-s4-n10',
    question: `【定义+定理默写】请默写「基本数列」的定义（定义 2.4.3）、Cauchy 收敛原理（定理 2.4.7）的完整叙述与证明框架，以及实数系五大基本定理等价关系。`,
    answer: `**定义 2.4.3（基本数列）**：
$$\\forall\\,\\varepsilon > 0,\\ \\exists N,\\ \\forall n, m > N:\\ |x_n - x_m| < \\varepsilon$$

**定理 2.4.7（Cauchy 收敛原理）**：$\\{x_n\\}$ 收敛 $\\Leftrightarrow$ $\\{x_n\\}$ 是基本数列。

**必要性**：$\\lim x_n = a$，取 $\\varepsilon/2$，则 $|x_n - x_m| \\leq |x_n-a|+|x_m-a| < \\varepsilon$。

**充分性**：① 基本数列有界（取 $\\varepsilon_0=1$）；② 由 B-W 定理取收敛子列 $x_{n_k} \\to \\xi$；③ 基本数列条件 $+$ 子列趋于 $\\xi$ $\\Rightarrow$ $|x_n - \\xi| < \\varepsilon$。$\\blacksquare$

**实数系完备性**：基本数列必有实数极限。有理数系不完备（$\\{(1+1/n)^n\\}$ 极限 $e$ 不是有理数）。

**压缩映射**：$|x_{n+1}-x_n| \\leq k|x_n-x_{n-1}|$（$0<k<1$）$\\Rightarrow$ $\\{x_n\\}$ 是基本数列，从而收敛。

**五大基本定理等价**（定理 2.4.8）：
$$\\text{确界存在} \\Leftrightarrow \\text{单调有界收敛} \\Leftrightarrow \\text{闭区间套} \\Leftrightarrow \\text{B-W} \\Leftrightarrow \\text{Cauchy 收敛原理}$$`
  },

  // ── 第三章 §1 函数极限 · 概念记忆卡片 ──────────────────
  {
    id: 'card-ma-c3-s1-n1',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s1-n1',
    question: `【概念回忆】函数极限是如何从数列极限自然引入的？请结合 $\\dfrac{\\sin x}{x}$ 的数值规律说明"趋近"的核心思想，并指出与数列极限最本质的区别。`,
    answer: `**引入背景**：数列极限研究 $n\\to\\infty$ 时 $x_n$ 的行为；函数极限研究 $x\\to x_0$ 时 $f(x)$ 的趋势。

**引例**：$y = \\dfrac{\\sin x}{x}$，当 $x\\to 0$ 时：

| $x$ | 0.5 | 0.1 | 0.05 | 0.01 |
|---|---|---|---|---|
| $y$ | 0.96 | 0.998 | 0.9996 | 0.9998 |

数值规律表明 $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$。

**关键区别**：$x\\to x_0$ 的过程中**不取** $x=x_0$（该点可以无意义或取任意值）。
函数极限研究的是**趋近过程中的变化趋势**，与 $f(x_0)$ 的值无关。`
  },
  {
    id: 'card-ma-c3-s1-n2',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s1-n2',
    question: `【定义默写】请完整默写函数极限的 ε-δ 定义（定义 3.1.1），写出其符号化表达式，并说明几何意义以及与数列极限 ε-N 定义的类比关系。`,
    answer: `**定义 3.1.1**：设 $f(x)$ 在 $x_0$ 的某去心邻域有定义。若存在实数 $A$，对任意给定的 $\\varepsilon>0$，可以找到 $\\delta>0$，使得当 $0<|x-x_0|<\\delta$ 时，成立
$$|f(x)-A|<\\varepsilon$$
则称 $A$ 为 $f(x)$ 在 $x_0$ 的**极限**，记为 $\\lim_{x\\to x_0}f(x)=A$。

**符号化**：
$$\\forall\\,\\varepsilon>0,\\ \\exists\\,\\delta>0,\\ \\forall\\,x\\bigl(0<|x-x_0|<\\delta\\bigr):\\; |f(x)-A|<\\varepsilon$$

**几何意义**：无论 $\\varepsilon$ 邻域 $(A-\\varepsilon,A+\\varepsilon)$ 多小，总能找到 $\\delta>0$，使 $x_0$ 的 $\\delta$ 去心邻域内所有点的函数值均落入该邻域。

**与数列类比**：$\\delta$（由 $\\varepsilon$ 决定）≈ 数列中的 $N$；条件 $0<|x-x_0|<\\delta$（去心）≈ $n>N$。`
  },
  {
    id: 'card-ma-c3-s1-n3',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s1-n3',
    question: `【方法默写】用 ε-δ 定义证明函数极限的"适度放大技巧"是什么？请结合例 3.1.2（$\\lim_{x\\to 2}x^2=4$）说明完整步骤。`,
    answer: `**核心方法（适度放大）**：
1. 对 $|f(x)-A|$ 进行因式分解；
2. 先限制 $|x-x_0|<r_0$（通常 $r_0=1$）控制额外因子上界 $M$；
3. 取 $\\delta=\\min\\left\\{r_0,\\ \\dfrac{\\varepsilon}{M}\\right\\}$，则 $|f(x)-A|<M\\cdot\\dfrac{\\varepsilon}{M}=\\varepsilon$。

**例 3.1.2**：$\\lim_{x\\to 2}x^2=4$。

$$|x^2-4|=|x-2|\\cdot|x+2|$$

先限制 $|x-2|<1$，则 $|x+2|<5$，故
$$|x^2-4|<5|x-2|$$
取 $\\delta=\\min\\left\\{1,\\ \\dfrac{\\varepsilon}{5}\\right\\}$，则 $|x^2-4|<5\\cdot\\dfrac{\\varepsilon}{5}=\\varepsilon$。$\\blacksquare$

**例 3.1.3 补充**：$\\lim_{x\\to 1}\\dfrac{x(x-1)}{x^2-1}=\\dfrac{1}{2}$，先化简再限制 $|x-1|<1$ 放大，取 $\\delta=\\min\\{1,2\\varepsilon\\}$。`
  },
  {
    id: 'card-ma-c3-s1-n4',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s1-n4',
    question: `【定理默写】请完整默写「函数极限的唯一性」（定理 3.1.1）的叙述与证明，并指出证明中的核心技巧。`,
    answer: `**定理 3.1.1**：若 $A$ 与 $B$ 都是 $f(x)$ 在 $x_0$ 的极限，则 $A=B$。

**证明**：$\\forall\\,\\varepsilon>0$，设极限为 $A,B$，分别取 $\\delta_1,\\delta_2$，令 $\\delta=\\min\\{\\delta_1,\\delta_2\\}$，当 $0<|x-x_0|<\\delta$ 时：
$$|A-B|\\leq|f(x)-A|+|f(x)-B|<\\frac{\\varepsilon}{2}+\\frac{\\varepsilon}{2}=\\varepsilon$$

由 $\\varepsilon$ 的任意性得 $A=B$。$\\blacksquare$

**核心技巧**：**插项法**（加减同一中间量 $f(x)$）+ **三角不等式**，与数列极限唯一性证明完全类比。`
  },
  {
    id: 'card-ma-c3-s1-n5',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s1-n5',
    question: `【定理默写】请完整默写「局部保序性」（定理 3.1.2）的叙述与证明，以及其三个推论（保号性、极限保序、局部有界性）。`,
    answer: `**定理 3.1.2（局部保序性）**：若 $\\lim_{x\\to x_0}f(x)=A$，$\\lim_{x\\to x_0}g(x)=B$，且 $A>B$，则 $\\exists\\,\\delta>0$，当 $0<|x-x_0|<\\delta$ 时，$f(x)>g(x)$。

**证明**：取 $\\varepsilon_0=\\dfrac{A-B}{2}$，分别对 $f,g$ 用极限定义，取 $\\delta=\\min\\{\\delta_1,\\delta_2\\}$，得
$$g(x)<\\frac{A+B}{2}<f(x) \\quad\\blacksquare$$

**推论 1（保号性）**：$\\lim f(x)=A\\ne 0\\Rightarrow\\exists\\,\\delta>0$，$0<|x-x_0|<\\delta$ 时 $|f(x)|>\\dfrac{|A|}{2}$。

**推论 2（极限保序）**：$g(x)\\leq f(x)$（$0<|x-x_0|<r$）$\\Rightarrow B\\leq A$（注：$g<f$ 只能得 $B\\leq A$，不能得 $B<A$）。

**推论 3（局部有界性）**：$\\lim f(x)=A\\Rightarrow\\exists\\,\\delta>0$，$f(x)$ 在 $O(x_0,\\delta)\\setminus\\{x_0\\}$ 中有界（$\\delta$ 不能随意扩大）。`
  },
  {
    id: 'card-ma-c3-s1-n6',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s1-n6',
    question: `【定理+重要极限】请默写「夹逼性定理」（定理 3.1.3），并给出第一个重要极限 $\\lim_{x\\to 0}\\dfrac{\\sin x}{x}=1$ 的完整证明（例 3.1.4）。`,
    answer: `**定理 3.1.3（夹逼性）**：若 $\\exists\\,r>0$，当 $0<|x-x_0|<r$ 时 $g(x)\\leq f(x)\\leq h(x)$，且 $\\lim g=\\lim h=A$，则 $\\lim f(x)=A$。$\\blacksquare$

**第一个重要极限**：$\\displaystyle\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$。

**证明**（$0<x<\\dfrac{\\pi}{2}$）：由面积不等式
$$\\triangle OAB\\text{ 面积}<\\text{扇形}OAB<\\triangle OBC\\text{ 面积}$$
得 $\\sin x < x < \\tan x$，从而 $\\cos x < \\dfrac{\\sin x}{x} < 1$。

此不等式对 $-\\dfrac{\\pi}{2}<x<0$ 同样成立。又
$$|\\cos x-1|=2\\sin^2\\frac{x}{2}<\\frac{x^2}{2}\\to 0\\Rightarrow\\lim_{x\\to 0}\\cos x=1$$

由夹逼性得 $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$。$\\blacksquare$

**推广**：$\\lim_{x\\to 0}\\dfrac{\\sin\\alpha x}{x}=\\alpha$，$\\lim_{x\\to 0}\\dfrac{\\sin\\alpha x}{\\sin\\beta x}=\\dfrac{\\alpha}{\\beta}$（$\\beta\\ne 0$）。`
  },
  {
    id: 'card-ma-c3-s1-n7',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s1-n7',
    question: `【定理默写】请完整默写「函数极限的四则运算」定理（定理 3.1.4），写出加减乘除各条的完整叙述，并说明乘法和除法的证明要点。`,
    answer: `**定理 3.1.4**：设 $\\lim_{x\\to x_0}f(x)=A$，$\\lim_{x\\to x_0}g(x)=B$，则：

1. $\\lim(\\alpha f+\\beta g)=\\alpha A+\\beta B$（$\\alpha,\\beta$ 为常数）；
2. $\\lim(fg)=AB$；
3. $\\lim\\dfrac{f}{g}=\\dfrac{A}{B}$（$B\\ne 0$）。

**乘法证明要点**：由局部有界性取 $|f(x)|\\leq X$，则
$$|f(x)g(x)-AB|=|f(x)(g(x)-B)+B(f(x)-A)|<(X+|B|)\\varepsilon$$

**除法证明要点**：由保号性推论 1 取 $\\delta^*$ 使 $|g(x)|>\\dfrac{|B|}{2}$，故
$$\\left|\\frac{f}{g}-\\frac{A}{B}\\right|=\\left|\\frac{B(f-A)-A(g-B)}{Bg}\\right|<\\frac{2(|A|+|B|)}{|B|^2}\\varepsilon \\quad\\blacksquare$$

**注意**：待定型（$\\infty-\\infty,\\ 0\\cdot\\infty,\\ 0/0,\\ \\infty/\\infty$）不可直接套用，需具体分析。`
  },
  {
    id: 'card-ma-c3-s1-n8',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s1-n8',
    question: `【定理默写】请完整默写「Heine 定理」（定理 3.1.5）的叙述与必要性/充分性证明，并说明如何用 Heine 定理证明 $\\sin\\dfrac{1}{x}$ 在 $x=0$ 无极限（例 3.1.6）。`,
    answer: `**定理 3.1.5（Heine 定理）**：
$$\\lim_{x\\to x_0}f(x)=A \\Longleftrightarrow \\text{对任意}\\lim x_n=x_0\\text{（}x_n\\ne x_0\\text{）的数列}\\{x_n\\}，\\lim f(x_n)=A$$

**必要性**：由 $\\varepsilon$-$\\delta$ 定义，$\\exists N$，$n>N$ 时 $0<|x_n-x_0|<\\delta$，故 $|f(x_n)-A|<\\varepsilon$。

**充分性（反证法）**：若 $f$ 在 $x_0$ 不以 $A$ 为极限，则
$$\\exists\\,\\varepsilon_0>0,\\ \\forall\\,\\delta>0,\\ \\exists\\,x(0<|x-x_0|<\\delta):|f(x)-A|\\geq\\varepsilon_0$$
取 $\\delta_k=1/k$，选出 $x_k$ 满足 $|x_k-x_0|<1/k$ 但 $|f(x_k)-A|\\geq\\varepsilon_0$，则 $x_k\\ne x_0$，$\\lim x_k=x_0$，但 $\\{f(x_k)\\}$ 不收敛于 $A$，矛盾。$\\blacksquare$

**例 3.1.6**（$\\sin 1/x$ 在 0 无极限）：
- 取 $x_n^{(1)}=\\dfrac{1}{n\\pi}\\to 0$，$\\lim\\sin\\dfrac{1}{x_n^{(1)}}=0$；
- 取 $x_n^{(2)}=\\dfrac{1}{2n\\pi+\\pi/2}\\to 0$，$\\lim\\sin\\dfrac{1}{x_n^{(2)}}=1$；
- 两子列极限不同，故极限不存在。$\\blacksquare$`
  },
  {
    id: 'card-ma-c3-s1-n9',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s1-n9',
    question: `【定义默写】请默写「单侧极限」（定义 3.1.2）的左、右极限定义，写出函数极限存在的充要条件，并结合例 3.1.7（符号函数）和例 3.1.8（分段函数）说明应用。`,
    answer: `**定义 3.1.2（单侧极限）**：
- **左极限**：$\\forall\\,\\varepsilon>0$，$\\exists\\,\\delta>0$，$-\\delta<x-x_0<0$ 时 $|f(x)-B|<\\varepsilon$，记为
$$\\lim_{x\\to x_0^-}f(x)=f(x_0^-)=B$$
- **右极限**：条件 $0<x-x_0<\\delta$，记为
$$\\lim_{x\\to x_0^+}f(x)=f(x_0^+)=C$$

**充要条件**：
$$\\lim_{x\\to x_0}f(x)=A \\Longleftrightarrow f(x_0^-)=f(x_0^+)=A$$

**例 3.1.7**：$\\operatorname{sgn}x$ 在 $x=0$：$f(0^-)=-1$，$f(0^+)=1$，左右不等，极限不存在。

**例 3.1.8**：$f(x)=\\begin{cases}\\dfrac{\\sin 2x}{x}, & x<0\\\\[4pt]2\\cos x^2, & x\\geq 0\\end{cases}$

$\\lim_{x\\to 0^-}f(x)=2$，$\\lim_{x\\to 0^+}f(x)=2$，故 $\\lim_{x\\to 0}f(x)=2$。`
  },
  {
    id: 'card-ma-c3-s1-n10',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s1-n10',
    question: `【扩充定义】函数极限定义可以从哪两个维度扩充？请列出六种趋近过程与四种极限值，并给出有理函数 $x\\to\\infty$ 和 $x\\to 0$ 时的极限规律（例 3.1.12）。`,
    answer: `**六种趋近过程**：$x\\to x_0$，$x\\to x_0^+$，$x\\to x_0^-$，$x\\to\\infty$，$x\\to+\\infty$，$x\\to-\\infty$。

**四种极限值**：有穷 $A$（$|f(x)-A|<\\varepsilon$）；$\\infty$（$|f(x)|>G$）；$+\\infty$（$f(x)>G$）；$-\\infty$（$f(x)<-G$）。

**6×4 组合**：每种趋近方式 × 每种极限值均对应一种严格定义，用 $\\varepsilon/G$ 与 $\\delta/X$ 两套语言描述。

**有理函数极限规律（例 3.1.12）**：$\\dfrac{a_n x^n+\\cdots+a_k x^k}{b_m x^m+\\cdots+b_j x^j}$（$a_n,a_k,b_m,b_j\\ne 0$）：

$$x\\to\\infty:\\; L=\\begin{cases}a_n/b_n & n=m\\\\ 0 & n<m\\\\ \\infty & n>m\\end{cases} \\qquad x\\to 0:\\; l=\\begin{cases}a_k/b_k & k=j\\\\ 0 & k>j\\\\ \\infty & k<j\\end{cases}$$

**口诀**：$x\\to\\infty$ 看**最高次**；$x\\to 0$ 看**最低次**。`
  },
  {
    id: 'card-ma-c3-s1-n11',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s1-n11',
    question: `【重要极限默写】请完整写出第二个重要极限 $\\lim_{x\\to\\infty}\\left(1+\\dfrac{1}{x}\\right)^x=e$ 的证明（$x\\to+\\infty$ 和 $x\\to-\\infty$ 两种情形），以及推论。`,
    answer: `**第二个重要极限**：$\\displaystyle\\lim_{x\\to\\infty}\\left(1+\\frac{1}{x}\\right)^x=e$

**$x\\to+\\infty$ 证明**：令 $n=[x]$，则
$$\\left(1+\\frac{1}{n+1}\\right)^n<\\left(1+\\frac{1}{x}\\right)^x<\\left(1+\\frac{1}{n}\\right)^{n+1}$$
当 $x\\to+\\infty$ 时 $n\\to\\infty$，两侧数列极限均为 $e$，由夹逼性得结论。

**$x\\to-\\infty$ 证明**：令 $y=-x$，$x\\to-\\infty$ 时 $y\\to+\\infty$，
$$\\lim_{x\\to-\\infty}\\left(1+\\frac{1}{x}\\right)^x=\\lim_{y\\to+\\infty}\\left(1-\\frac{1}{y}\\right)^{-y}=\\lim_{y\\to+\\infty}\\left(1+\\frac{1}{y-1}\\right)^{y-1}\\cdot\\left(1+\\frac{1}{y-1}\\right)=e$$

综合得 $\\displaystyle\\lim_{x\\to\\infty}\\left(1+\\frac{1}{x}\\right)^x=e$。$\\blacksquare$

**推论**：$\\displaystyle\\lim_{x\\to\\infty}\\left(1-\\frac{1}{x}\\right)^x=\\frac{1}{e}$。`
  },
  {
    id: 'card-ma-c3-s1-n12',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s1-n12',
    question: `【定理默写】请完整默写「函数极限的 Cauchy 收敛原理」（定理 3.1.6）的叙述与证明框架，并说明其与数列 Cauchy 收敛原理的类比关系。`,
    answer: `**定理 3.1.6**：$\\lim_{x\\to+\\infty}f(x)$ 存在且有限的充要条件是：$\\forall\\,\\varepsilon>0$，$\\exists\\,X>0$，使对一切 $x',x''>X$，成立
$$|f(x')-f(x'')|<\\varepsilon$$

**必要性**：设极限为 $A$，取 $\\varepsilon/2$：
$$|f(x')-f(x'')|\\leq|f(x')-A|+|f(x'')-A|<\\varepsilon$$

**充分性**：任取 $x_n\\to+\\infty$，则 $\\{f(x_n)\\}$ 是基本数列（Cauchy 数列），由数列 Cauchy 原理知其收敛；由 Heine 定理知函数极限存在。$\\blacksquare$

**类比**：
- 数列 Cauchy 原理（定理 2.4.7）：$|x_n-x_m|<\\varepsilon$（$n,m>N$）$\\Leftrightarrow$ 收敛；
- 函数 Cauchy 原理：$|f(x')-f(x'')|<\\varepsilon$（$x',x''>X$）$\\Leftrightarrow$ 极限存在。
- 核心思想完全一致——"值与值之间任意接近"等价于收敛。

**注**：类似定理对 $x\\to\\infty,\\ x\\to x_0^+,\\ x\\to x_0^-$ 等情形均成立。`
  },

  // ── 第三章 §2 连续函数 · 教材模式卡片 ──────────────────
  {
    id: 'card-ma-c3-s2-n1',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s2-n1',
    question: `【定义默写】请写出函数 $f(x)$ 在点 $x_0$ 处**连续**的定义（定义 3.2.1），并说明其与函数极限定义的核心区别。`,
    answer: `**定义 3.2.1**：设 $f(x)$ 在点 $x_0$ 的某邻域中有定义，若

$$\\lim_{x\\to x_0}f(x)=f(x_0),$$

则称 $f(x)$ 在点 $x_0$ **连续**，$x_0$ 是 $f(x)$ 的**连续点**。

**与极限定义的区别**：
- 极限定义要求 $0<|x-x_0|<\\delta$（$x\\ne x_0$），不要求 $f(x_0)$ 有定义；
- 连续定义是极限值 $A=f(x_0)$ 的特殊情形，$x=x_0$ 时 $|f(x)-f(x_0)|=0<\\varepsilon$ 自然成立，故 $|x-x_0|<\\delta$ 即可（包含 $x=x_0$）。

**直观**：$x$ 在 $x_0$ 附近微小变化时，$f(x)$ 也在 $f(x_0)$ 附近作微小变化。`
  },
  {
    id: 'card-ma-c3-s2-n2',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s2-n2',
    question: `【符号化】请用 $\\varepsilon$-$\\delta$ 语言写出"$f(x)$ 在点 $x_0$ 连续"的等价表述，与极限的 $\\varepsilon$-$\\delta$ 定义相比，有何不同？`,
    answer: `**$\\varepsilon$-$\\delta$ 表述**：

$$\\forall\\,\\varepsilon>0,\\ \\exists\\,\\delta>0,\\ \\forall\\,x\\,(|x-x_0|<\\delta):\\quad|f(x)-f(x_0)|<\\varepsilon.$$

**与极限定义的差异**：极限要求 $0<|x-x_0|<\\delta$（即 $x\\ne x_0$）；连续只需 $|x-x_0|<\\delta$（包含 $x=x_0$），因为 $x=x_0$ 时 $|f(x_0)-f(x_0)|=0<\\varepsilon$ 自动满足。`
  },
  {
    id: 'card-ma-c3-s2-n3',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s2-n3',
    question: `【定义串联】请依次默写以下四个定义：① 开区间上连续（定义 3.2.2）；② 左连续与右连续（定义 3.2.3）；③ 闭区间上连续（定义 3.2.4）；④ 连续性的统一表述。`,
    answer: `**定义 3.2.2（开区间连续）**：$f(x)$ 在 $(a,b)$ 的每一点都连续，则称 $f(x)$ 在 $(a,b)$ 上连续。

**定义 3.2.3（单侧连续）**：
- **左连续**：$\\lim_{x\\to x_0^-}f(x)=f(x_0)$，即 $\\forall\\,\\varepsilon>0,\\ \\exists\\,\\delta>0,\\ \\forall\\,x\\,(-\\delta<x-x_0\\le 0):|f(x)-f(x_0)|<\\varepsilon$；
- **右连续**：$\\lim_{x\\to x_0^+}f(x)=f(x_0)$，即 $\\forall\\,\\varepsilon>0,\\ \\exists\\,\\delta>0,\\ \\forall\\,x\\,(0\\le x-x_0<\\delta):|f(x)-f(x_0)|<\\varepsilon$。

**定义 3.2.4（闭区间连续）**：$f(x)$ 在 $(a,b)$ 连续 + 在 $a$ 点右连续 + 在 $b$ 点左连续，则称 $f(x)$ 在 $[a,b]$ 上连续。

**统一表述**：设 $f(x)$ 定义在区间 $X$ 上，若 $\\forall\\,x_0\\in X,\\ \\forall\\,\\varepsilon>0,\\ \\exists\\,\\delta>0,\\ \\forall\\,x\\in X\\,(|x-x_0|<\\delta):|f(x)-f(x_0)|<\\varepsilon$，则称 $f(x)$ 在 $X$ 上连续。`
  },
  {
    id: 'card-ma-c3-s2-n4',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s2-n4',
    question: `【定理默写】请写出连续函数的四则运算法则，并说明其推论（有限次运算的连续性保持）。`,
    answer: `**法则**：设 $f$、$g$ 在 $x_0$ 处连续（即 $\\lim_{x\\to x_0}f(x)=f(x_0)$，$\\lim_{x\\to x_0}g(x)=g(x_0)$），则：

$$\\lim_{x\\to x_0}(\\alpha f+\\beta g)=\\alpha f(x_0)+\\beta g(x_0)\\qquad(\\alpha,\\beta\\text{ 为常数})$$

$$\\lim_{x\\to x_0}(fg)=f(x_0)g(x_0)$$

$$\\lim_{x\\to x_0}\\frac{f}{g}=\\frac{f(x_0)}{g(x_0)}\\qquad(g(x_0)\\ne 0)$$

**推论**：有限个在区间 $I$ 上连续的函数，经有限次加、减、乘、除（分母不为零处）所得函数在 $I$ 上仍连续。`
  },
  {
    id: 'card-ma-c3-s2-n5',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s2-n5',
    question: `【结论汇总】根据四则运算法则，请分别说明多项式、有理函数与六种三角函数各自的连续域。`,
    answer: `**多项式** $P_n(x)=a_nx^n+\\cdots+a_0$：在 $(-\\infty,+\\infty)$ 上连续。

**有理函数** $Q(x)=\\dfrac{P_n(x)}{P_m(x)}$：在 $(-\\infty,+\\infty)$ 去掉分母零点（至多 $m$ 个点）后连续。

**三角函数**（以 $\\sin x$、$\\cos x$ 在 $(-\\infty,+\\infty)$ 连续为基础）：
- $\\tan x$、$\\sec x$：连续域为 $\\left\\{x\\mid x\\ne k\\pi+\\dfrac{\\pi}{2},\\ k\\in\\mathbb{Z}\\right\\}$；
- $\\cot x$、$\\csc x$：连续域为 $\\{x\\mid x\\ne k\\pi,\\ k\\in\\mathbb{Z}\\}$。`
  },
  {
    id: 'card-ma-c3-s2-n6',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s2-n6',
    question: `【概念分类】函数在点 $x_0$ 连续须满足哪三个条件？若某个条件不满足，请分别描述三类间断点（不连续点）的特征，并各举一例。`,
    answer: `**连续的三个必要条件**：① $f(x_0)$ 有限；② $f(x_0^-)=f(x_0)$；③ $f(x_0^+)=f(x_0)$。缺一不可，否则 $x_0$ 为**间断点**。

**第一类不连续点（跳跃点）**：$f(x_0^-)$ 与 $f(x_0^+)$ 都存在但不相等。跃度 $=f(x_0^+)-f(x_0^-)$。
- 例：$\\operatorname{sgn}x$ 在 $x=0$，跃度为 $2$。

**第二类不连续点**：$f(x_0^-)$、$f(x_0^+)$ 中至少一个不存在。
- 例：$e^{1/x}$ 在 $x=0$（右极限为 $+\\infty$）；$\\sin\\dfrac{1}{x}$ 在 $x=0$（左右极限均不存在）。

**第三类不连续点（可去间断点）**：$f(x_0^-)=f(x_0^+)\\ne f(x_0)$，或 $f$ 在 $x_0$ 无定义。
- 例：$f(x)=x\\sin\\dfrac{1}{x}$ 在 $x=0$（无定义，但左右极限均为 $0$）。补充 $f(0)=0$ 后即连续。`
  },
  {
    id: 'card-ma-c3-s2-n7',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s2-n7',
    question: `【经典例题】Riemann 函数 $R(x)$ 的定义是什么？请陈述其在有理点和无理点处的连续性结论，并勾勒证明的核心步骤。`,
    answer: `**Riemann 函数**：

$$R(x)=\\begin{cases}\\dfrac{1}{p}, & x=\\dfrac{q}{p}\\,(p\\in\\mathbb{N}^+,q\\in\\mathbb{Z}\\setminus\\{0\\},p,q\\text{ 互素}),\\\\[6pt]1, & x=0,\\\\[4pt]0, & x\\text{ 是无理数}.\\end{cases}$$

**结论**：$\\lim_{x\\to x_0}R(x)=0$ 对一切 $x_0$ 成立，故
- **无理点**：连续点；
- **有理点**：可去间断点（第三类）。

**证明核心**：对任意 $\\varepsilon>0$，取 $k=\\left[\\dfrac{1}{\\varepsilon}\\right]$。在 $[0,1]$ 中，分母 $\\le k$ 的有理点仅有有限个，设为 $r_1,\\ldots,r_m$。令 $\\delta=\\min_{r_i\\ne x_0}|r_i-x_0|>0$，则 $0<|x-x_0|<\\delta$ 时，$x$ 若为有理数其分母必 $>k$，故 $R(x)\\le\\dfrac{1}{k+1}<\\varepsilon$；若为无理数则 $R(x)=0$。$\\blacksquare$`
  },
  {
    id: 'card-ma-c3-s2-n8',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s2-n8',
    question: `【定理默写】请陈述"单调函数的不连续点必为第一类不连续点"（例 3.2.8 的结论），并写出证明的关键步骤（以单调增加为例）。`,
    answer: `**结论**：区间 $(a,b)$ 上的单调函数，其一切不连续点均为**跳跃点**（第一类不连续点）。

**证明（单调增加）**：设 $f$ 在 $(a,b)$ 单调增，$x_0\\in(a,b)$，令

$$\\alpha=\\sup\\{f(x)\\mid x\\in(a,x_0)\\},\\quad\\beta=\\inf\\{f(x)\\mid x\\in(x_0,b)\\}.$$

（由确界存在定理，两者均存在。）

用 $\\varepsilon$-$\\delta$ 论证可得 $\\lim_{x\\to x_0^-}f(x)=\\alpha$，$\\lim_{x\\to x_0^+}f(x)=\\beta$，两个单侧极限都存在，故不连续点只能是跳跃点。$\\blacksquare$

**推论**：单调函数在任意点的左、右极限都存在；其间断点必为跳跃点，且数量至多可数。`
  },
  {
    id: 'card-ma-c3-s2-n9',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s2-n9',
    question: `【定理默写】请写出反函数存在性定理（定理 3.2.1）的完整叙述，并给出证明框架。`,
    answer: `**定理 3.2.1**：若 $y=f(x),\\ x\\in D_f$ 严格单调增加（减少），则存在反函数 $x=f^{-1}(y),\\ y\\in R_f$，且 $f^{-1}(y)$ 也严格单调增加（减少）。

**证明框架**：
1. **存在性**：严格单调性 $\\Rightarrow$ $x'\\ne x''\\Rightarrow f(x')\\ne f(x'')$，即 $f$ 是单射，故每个 $y\\in R_f$ 的原像唯一，反函数存在。
2. **单调性**：设 $y_1<y_2$，对应 $x_1=f^{-1}(y_1)$，$x_2=f^{-1}(y_2)$。若 $x_1\\ge x_2$，则由 $f$ 单调增知 $y_1\\ge y_2$，矛盾；故 $x_1<x_2$，即 $f^{-1}$ 也单调增。$\\blacksquare$`
  },
  {
    id: 'card-ma-c3-s2-n10',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s2-n10',
    question: `【定理默写】请完整叙述反函数连续性定理（定理 3.2.2），并给出证明的关键步骤。最后说明该定理的典型应用（反三角函数与对数函数）。`,
    answer: `**定理 3.2.2**：设 $y=f(x)$ 在 $[a,b]$ 上连续且严格单调增加，$f(a)=\\alpha$，$f(b)=\\beta$，则反函数 $x=f^{-1}(y)$ 在 $[\\alpha,\\beta]$ 上连续且严格单调增加。

**证明要点**：
1. **值域**：用确界存在定理证 $f([a,b])=[\\alpha,\\beta]$（即 $\\forall\\,y\\in(\\alpha,\\beta)$，令 $S=\\{x\\in[a,b]\\mid f(x)<y\\}$，取 $x_0=\\sup S$，由 $f$ 的连续性得 $f(x_0)=y$）。
2. **连续性**：对 $y_0\\in(\\alpha,\\beta)$，$x_0=f^{-1}(y_0)$，给定 $\\varepsilon>0$，令 $y_1=f(x_0-\\varepsilon)$，$y_2=f(x_0+\\varepsilon)$，取 $\\delta=\\min\\{y_0-y_1,y_2-y_0\\}>0$，则 $|y-y_0|<\\delta\\Rightarrow|f^{-1}(y)-x_0|<\\varepsilon$。$\\blacksquare$

**应用**：
- $\\arcsin x$（$[-1,1]$），$\\arccos x$（$[-1,1]$），$\\arctan x$，$\\operatorname{arccot}x$（$(-\\infty,+\\infty)$）在各自定义域连续；
- $\\log_a x$（$a>0,a\\ne 1$）在 $(0,+\\infty)$ 连续。`
  },
  {
    id: 'card-ma-c3-s2-n11',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s2-n11',
    question: `【定理默写】请写出复合函数连续性定理（定理 3.2.3）的叙述与证明，并说明"仅有极限条件不足"的反例及其原因。`,
    answer: `**定理 3.2.3**：若 $u=g(x)$ 在 $x_0$ 连续（$g(x_0)=u_0$），$y=f(u)$ 在 $u_0$ 连续，则 $y=f\\circ g(x)$ 在 $x_0$ 连续。

**证明**：
- 对任意 $\\varepsilon>0$，由 $f$ 在 $u_0$ 连续：$\\exists\\,\\eta>0$，$|u-u_0|<\\eta\\Rightarrow|f(u)-f(u_0)|<\\varepsilon$；
- 对此 $\\eta$，由 $g$ 在 $x_0$ 连续：$\\exists\\,\\delta>0$，$|x-x_0|<\\delta\\Rightarrow|g(x)-u_0|<\\eta$；
- 综合得 $|x-x_0|<\\delta\\Rightarrow|f\\circ g(x)-f(u_0)|<\\varepsilon$。$\\blacksquare$

**反例（仅有极限条件不够）**：取

$$f(u)=\\begin{cases}0,&u=0\\\\1,&u\\ne0\\end{cases},\\quad g(x)=x\\sin\\frac{1}{x}.$$

有 $\\lim_{x\\to 0}g(x)=0$，$\\lim_{u\\to 0}f(u)=1$，但 $f\\circ g(x)$ 在 $x=0$ 没有极限（因 $g(x)$ 在 $x=0$ 附近无穷次取 $0$，使 $f\\circ g(x)$ 在 $0$ 与 $1$ 之间振荡）。关键：$g$ 在 $x_0$ 不连续，$f$ 在 $g(x_0)$ 处也不连续（$f(0)=0\\ne 1=\\lim_{u\\to 0}f(u)$）。`
  },
  {
    id: 'card-ma-c3-s2-n12',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s2-n12',
    question: `【定理默写】请写出初等函数连续性定理（定理 3.2.4），并说明该定理在极限计算中的实用推论（"连续性代入法"），并用例题演示。`,
    answer: `**定理 3.2.4**：一切初等函数都在其**定义区间**上连续。

**依据**：6 类基本初等函数（常数、幂函数、指数函数、对数函数、三角函数、反三角函数）均在定义域上连续，由定理 3.2.3 与四则运算法则，经有限次运算与复合所得初等函数仍连续。

**实用推论（连续性代入法）**：若 $f$ 是初等函数，$x_0$ 在其定义区间内，则

$$\\lim_{x\\to x_0}f(x)=f(x_0).$$

**例**：计算 $\\displaystyle\\lim_{x\\to 0}(\\cos x)^{x^{-2}}$：

利用对数恒等式，令 $u=\\dfrac{\\ln\\cos x}{x^2}=\\dfrac{1}{x^2}\\ln\\!\\left(1-2\\sin^2\\dfrac{x}{2}\\right)$，

由等价无穷小与对数函数连续性得 $\\lim_{x\\to 0}u=-\\dfrac{1}{2}$，

再由指数函数连续性得 $\\displaystyle\\lim_{x\\to 0}(\\cos x)^{x^{-2}}=e^{-1/2}=\\dfrac{1}{\\sqrt{e}}$。`
  },

  // ── 第三章 §3 无穷小量与无穷大量的阶 · 教材模式卡片 ──────────────────
  {
    id: 'card-ma-c3-s3-n1',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s3-n1',
    question: `【定义默写】请写出「无穷小量」的定义（定义 3.3.1），并说明为比较两个无穷小量趋于零的速度，应考察什么量以及会得到哪几类关系。`,
    answer: `**定义 3.3.1**：若 $\\lim_{x\\to x_0}f(x)=0$，则称当 $x\\to x_0$ 时 $f(x)$ 是**无穷小量**（即**以 $0$ 为极限的变量**）。

**极限过程可扩充**：$x\\to x_0^+$、$x\\to x_0^-$、$x\\to\\infty$ 等。

**比较思路**：设 $u(x),v(x)$ 都是无穷小量，考察

$$\\lim_{x\\to x_0}\\frac{u(x)}{v(x)}$$

的取值，得三类关系：

- 极限 $=0$：$u$ 是 $v$ 的**高阶无穷小量**，$u=o(v)$；
- 极限**非零有界**：二者**同阶无穷小量**，$u=O(v)$；
- 极限 $=1$：二者**等价无穷小量**，$u\\sim v$。`
  },
  {
    id: 'card-ma-c3-s3-n2',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s3-n2',
    question: `【定义默写】请写出「高阶无穷小量 $o(\\cdot)$」的定义，并推导 $1-\\cos x=o(x)$ 与 $\\tan x-\\sin x=o(x^2)$（$x\\to 0$）。`,
    answer: `**定义**：若 $\\lim_{x\\to x_0}\\dfrac{u(x)}{v(x)}=0$，则 $u(x)$ 关于 $v(x)$ 是**高阶无穷小量**，记

$$u(x)=o(v(x))\\qquad(x\\to x_0).$$

**推导 1**：

$$\\lim_{x\\to 0}\\frac{1-\\cos x}{x}=\\lim_{x\\to 0}\\frac{2\\sin^2(x/2)}{x}=\\lim_{x\\to 0}\\sin\\frac{x}{2}\\cdot\\frac{\\sin(x/2)}{x/2}=0,$$

故 $1-\\cos x=o(x)\\ (x\\to 0)$。

**推导 2**：

$$\\lim_{x\\to 0}\\frac{\\tan x-\\sin x}{x^2}=\\lim_{x\\to 0}\\frac{\\sin x}{x\\cos x}\\cdot\\frac{1-\\cos x}{x}=1\\cdot 0=0,$$

故 $\\tan x-\\sin x=o(x^2)\\ (x\\to 0)$。

**注意**：$o$ 记号必须指明极限过程，无歧义方可省略。`
  },
  {
    id: 'card-ma-c3-s3-n3',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s3-n3',
    question: `【定义串联】请依次默写：① 有界量 $O(\\cdot)$ 的定义；② 同阶无穷小量的定义；③ 由 $\\lim\\dfrac{u}{v}=c\\ne 0$ 能得到什么结论？`,
    answer: `**① 有界量**：若存在 $A>0$，在 $x_0$ 某去心邻域内

$$\\left|\\frac{u(x)}{v(x)}\\right|\\le A,$$

则记 $u(x)=O(v(x))\\ (x\\to x_0)$。例：$\\left|\\dfrac{x\\sin(1/x)}{x}\\right|\\le 1$，故 $x\\sin\\dfrac{1}{x}=O(x)\\ (x\\to 0)$。

**② 同阶无穷小量**：若同时存在 $a>0$ 使

$$a\\le\\left|\\frac{u(x)}{v(x)}\\right|\\le A,$$

则 $u(x)$ 与 $v(x)$ 是**同阶无穷小量**（趋于 $0$ 的速度旗鼓相当）。

**③ 充分条件推论**：若 $\\lim_{x\\to x_0}\\dfrac{u(x)}{v(x)}=c\\ne 0$，则 $u(x)$ 与 $v(x)$ 必为**同阶**无穷小量（极限存在且非零 $\\Rightarrow$ 自动落在 $[a,A]$ 内）。

**要点**：$O$ 只要求**有界**（甚至允许震荡），同阶则要求**双侧夹逼非零**。`
  },
  {
    id: 'card-ma-c3-s3-n4',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s3-n4',
    question: `【定义默写】请写出「等价无穷小量」的定义及其 $o$-展开形式，并给出 $\\sin x$、$1-\\cos x$、$\\tan x-\\sin x$ 在 $x\\to 0$ 时的等价量及阶数。`,
    answer: `**定义**：若 $\\lim_{x\\to x_0}\\dfrac{u(x)}{v(x)}=1$，则 $u(x)\\sim v(x)\\ (x\\to x_0)$。

**$o$-展开等价形式**：

$$u(x)=v(x)+o(v(x))\\qquad(x\\to x_0).$$

即 $u$ 与 $v$ 相差一个**关于 $v$ 的高阶无穷小**。

**核心三例与阶数**（$x\\to 0$）：

- $\\sin x\\sim x$，即 $\\sin x=x+o(x)$——**一阶**；
- $1-\\cos x\\sim\\dfrac{1}{2}x^2$，即 $1-\\cos x=\\dfrac{1}{2}x^2+o(x^2)$——**二阶**；
- $\\tan x-\\sin x\\sim\\dfrac{1}{2}x^3$——**三阶**。

**阶的确定**：取 $v(x)=(x-x_0)^k$（$x\\to\\infty$ 时取 $\\dfrac{1}{x^k}$）作比较基准，寻找使 $\\lim\\dfrac{u}{v}$ 为非零常数的 $k$ 值。`
  },
  {
    id: 'card-ma-c3-s3-n5',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s3-n5',
    question: `【记号解释】请说明 $o(1)$ 与 $O(1)$ 的含义，并举例说明何时只能写成 $u(x)=o(1)$ 而无法写成 $o(x^\\alpha)$ 的形式。`,
    answer: `**记号含义**：

- $u(x)=o(1)\\ (x\\to x_0)$ $\\Leftrightarrow$ $u(x)$ 是**无穷小量**；
- $u(x)=O(1)\\ (x\\to x_0)$ $\\Leftrightarrow$ $u(x)$ 是**有界量**。

**为何有时只能写 $o(1)$**：

$x\\to 0+$ 时 $-\\dfrac{1}{\\ln x}\\to 0$ 是无穷小量，但由例 3.3.1，它关于**任意** $x^\\alpha$（$\\alpha>0$ 任意小）都是**低阶**无穷小——即"比任何幂趋零都慢"，找不到合适的 $x^\\alpha$ 作比较基准，故只能笼统记

$$-\\frac{1}{\\ln x}=o(1)\\qquad(x\\to 0+).$$

**有界量例**：$x\\to 0$ 时 $\\left|e^x\\sin\\dfrac{1}{x}\\right|\\le e^{|x|}$ 有界，故

$$e^x\\sin\\frac{1}{x}=O(1)\\qquad(x\\to 0).$$`
  },
  {
    id: 'card-ma-c3-s3-n6',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s3-n6',
    question: `【定义默写】请写出「无穷大量」的定义（定义 3.3.2），并列出该定义中极限过程的所有可能扩充形式。`,
    answer: `**定义 3.3.2**：若 $\\lim_{x\\to x_0}f(x)=\\infty$（或 $\\pm\\infty$），则称当 $x\\to x_0$ 时 $f(x)$ 是**无穷大量**（或正、负无穷大量）。

**极限过程的扩充**：$x\\to x_0^+$、$x\\to x_0^-$、$x\\to-\\infty$、$x\\to+\\infty$、$x\\to\\infty$ 均可。

**关键认知**：无穷大量不是"很大的数"，而是"**绝对值无限增大的变量**"——与无穷小量对偶。

**倒数桥梁**（借 §2.3 定理类比）：若 $f(x)\\ne 0$，则 $f(x)$ 是无穷大量 $\\Leftrightarrow\\dfrac{1}{f(x)}$ 是无穷小量。`
  },
  {
    id: 'card-ma-c3-s3-n7',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s3-n7',
    question: `【结论默写】请写出两个无穷大量阶的比较的三类关系（高阶/同阶/等价），并用 $a^x\\ (a>1)$、$x^k$、$\\ln x$ 在 $x\\to+\\infty$ 时的阶关系举例。`,
    answer: `设 $u(x),v(x)$ 均为无穷大量，考察 $\\lim\\dfrac{u(x)}{v(x)}$：

**(1) 高阶无穷大量**：若极限 $=\\infty$，则 $u$ 关于 $v$ 是**高阶无穷大量**（$v$ 关于 $u$ 是低阶）。

**(2) 有界 / 同阶**：若 $\\left|\\dfrac{u}{v}\\right|\\le A$，记 $u=O(v)$；若又有 $a\\le\\left|\\dfrac{u}{v}\\right|\\le A$，则为**同阶无穷大量**。

**(3) 等价无穷大量**：若 $\\lim\\dfrac{u}{v}=1$，则 $u\\sim v$。

**经典阶序**（$x\\to+\\infty$）：

$$\\ln x\\ \\ll\\ x^k\\ \\ll\\ a^x\\quad(a>1,k\\in\\mathbf{N^+}).$$

由 $\\lim\\dfrac{\\ln^k x}{x}=0,\\ \\lim\\dfrac{a^x}{x^k}=\\infty$ 立得。

**约定**：无穷大量阶的比较**不使用 $o$** 记号，$O$ 与 $\\sim$ 仍可用。`
  },
  {
    id: 'card-ma-c3-s3-n8',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s3-n8',
    question: `【例题演练】请分别证明：① 例 3.3.1——$x\\to 0+$ 时 $\\left(-\\dfrac{1}{\\ln x}\\right)^k$ 关于 $x$ 是低阶无穷小量；② 例 3.3.2——$e^{-1/x}$ 关于 $x^k$ 是高阶无穷小量。`,
    answer: `**① 例 3.3.1**：令 $y=-\\ln x$，则 $x\\to 0+\\Rightarrow y\\to+\\infty$，$x=e^{-y}$，故

$$\\lim_{x\\to 0+}\\frac{x}{(-1/\\ln x)^k}=\\lim_{y\\to+\\infty}\\frac{e^{-y}}{y^{-k}}=\\lim_{y\\to+\\infty}\\frac{y^k}{e^y}=0.$$

极限 $=0$ 说明 $x$ 是 $(-1/\\ln x)^k$ 的高阶无穷小，即后者为**低阶**。$\\blacksquare$

**② 例 3.3.2**：令 $y=\\dfrac{1}{x}$，则 $x\\to 0+\\Rightarrow y\\to+\\infty$，故

$$\\lim_{x\\to 0+}\\frac{e^{-1/x}}{x^k}=\\lim_{y\\to+\\infty}\\frac{y^k}{e^y}=0.\\quad\\blacksquare$$

**口诀**：**指数跑得最快，对数跑得最慢**——$e^x\\gg x^k\\gg\\ln x\\ (x\\to+\\infty)$。`
  },
  {
    id: 'card-ma-c3-s3-n9',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s3-n9',
    question: `【定理默写】请写出四个最常用的等价无穷小关系（$x\\to 0$），并给出 $\\ln(1+x)\\sim x$、$e^x-1\\sim x$、$(1+x)^\\alpha-1\\sim\\alpha x$ 的证明思路（例 3.3.3–3.3.5）。`,
    answer: `**四大核心等价**（$x\\to 0$）：

$$\\boxed{\\ \\sin x\\sim x,\\quad \\ln(1+x)\\sim x,\\quad e^x-1\\sim x,\\quad (1+x)^\\alpha-1\\sim\\alpha x\\ }$$

**例 3.3.3**：由 $\\lim_{x\\to 0}(1+x)^{1/x}=e$，结合 $\\ln$ 的连续性：

$$\\lim_{x\\to 0}\\frac{\\ln(1+x)}{x}=\\lim_{x\\to 0}\\ln(1+x)^{1/x}=\\ln e=1.\\quad\\blacksquare$$

**例 3.3.4**：令 $y=e^x-1\\to 0$，则 $x=\\ln(1+y)$，

$$\\lim_{x\\to 0}\\frac{e^x-1}{x}=\\lim_{y\\to 0}\\frac{y}{\\ln(1+y)}=1.\\quad\\blacksquare$$

**例 3.3.5**：拆为两个已知极限的乘积

$$\\lim_{x\\to 0}\\frac{(1+x)^\\alpha-1}{x}=\\lim_{x\\to 0}\\frac{(1+x)^\\alpha-1}{\\alpha\\ln(1+x)}\\cdot\\frac{\\alpha\\ln(1+x)}{x}=1\\cdot\\alpha=\\alpha.\\quad\\blacksquare$$

**衍生等价**：$\\tan x\\sim x$、$\\arcsin x\\sim x$、$\\arctan x\\sim x$、$1-\\cos x\\sim\\dfrac{x^2}{2}$。`
  },
  {
    id: 'card-ma-c3-s3-n10',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s3-n10',
    question: `【结论默写】请写出"多项不同阶成分相加"的等价量规律（例 3.3.6–3.3.7），并以 $u(x)=\\sqrt{x+\\sqrt{x}}$、$v(x)=2x^3+3x^5$ 在不同极限过程下为例加以说明。`,
    answer: `**核心规律**：若变量由若干**不同阶**的成分相加而成：

- 作为**无穷大量**时，等价于**阶数最高**的成分；
- 作为**无穷小量**时，等价于**阶数最低**的成分。

**口诀：无穷大抓最大，无穷小抓最小**。

**例 3.3.6**：$u(x)=\\sqrt{x+\\sqrt{x}}$

- $x\\to+\\infty$：$x$ 阶高于 $\\sqrt{x}$，$\\lim\\dfrac{\\sqrt{x+\\sqrt{x}}}{\\sqrt{x}}=\\lim\\sqrt{1+\\tfrac{1}{\\sqrt{x}}}=1$，故 $u\\sim x^{1/2}$；
- $x\\to 0+$：$\\sqrt{x}$ 阶低于 $x$，$\\lim\\dfrac{\\sqrt{x+\\sqrt{x}}}{\\sqrt[4]{x}}=\\lim\\sqrt{1+\\sqrt{x}}=1$，故 $u\\sim x^{1/4}$。

**例 3.3.7**：$v(x)=2x^3+3x^5$

- $x\\to\\infty$：高阶项 $3x^5$ 主导，$v\\sim 3x^5$；
- $x\\to 0$：低阶项 $2x^3$ 主导，$v\\sim 2x^3$。`
  },
  {
    id: 'card-ma-c3-s3-n11',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s3-n11',
    question: `【定理默写】请写出「等价量代换定理」（定理 3.3.1）的完整叙述（含两条结论），并说明其实用含义——为什么只能在**乘除**结构中代换？`,
    answer: `**定理 3.3.1**：设 $u(x),v(x),w(x)$ 在 $x_0$ 某去心邻域上有定义，且

$$v(x)\\sim w(x)\\qquad(x\\to x_0),$$

则：

**(1)** 当 $\\lim_{x\\to x_0}u(x)w(x)=A$ 时，

$$\\lim_{x\\to x_0}u(x)v(x)=A;$$

**(2)** 当 $\\lim_{x\\to x_0}\\dfrac{u(x)}{w(x)}=A$ 时，

$$\\lim_{x\\to x_0}\\frac{u(x)}{v(x)}=A.$$

**证明**：由极限四则运算法则——$\\dfrac{v}{w}\\to 1$ 可作为因子乘入而不改变极限。

**极限过程可推广**：$x\\to x_0^+$、$x\\to\\infty$ 等均适用。

**实用含义**：乘除结构中引入的等价替换因子 $\\dfrac{v}{w}\\to 1$，不影响整体极限；但**加减结构中禁止直接代换**（详见 n13 警示）——因为减法可能让主阶相消，替换引入的"$o$"误差反而成为主导项。`
  },
  {
    id: 'card-ma-c3-s3-n12',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s3-n12',
    question: `【例题演练】请用等价代换计算：① $\\lim_{x\\to 0}\\dfrac{\\ln(1+x^2)}{(e^{2x}-1)\\tan x}$；② $\\lim_{x\\to\\infty}x\\left(\\sqrt[3]{x^3+x}-\\sqrt[3]{x^3-x}\\right)$；③ $\\lim_{x\\to 0}(\\cos x)^{1/x^2}$。`,
    answer: `**① 例 3.3.9（纯乘除，直接代换）**：

由 $\\ln(1+x^2)\\sim x^2,\\ e^{2x}-1\\sim 2x,\\ \\tan x\\sim x$，

$$\\lim_{x\\to 0}\\frac{\\ln(1+x^2)}{(e^{2x}-1)\\tan x}=\\lim_{x\\to 0}\\frac{x^2}{2x\\cdot x}=\\frac{1}{2}.$$

**② 例 3.3.11（含减法，须保留 $o$ 项）**：

由 $(1+t)^{1/3}=1+\\dfrac{t}{3}+o(t)\\ (t\\to 0)$，令 $t=\\pm\\dfrac{1}{x^2}$：

$$\\lim_{x\\to\\infty}x^2\\left[\\sqrt[3]{1+\\tfrac{1}{x^2}}-\\sqrt[3]{1-\\tfrac{1}{x^2}}\\right]=\\lim_{x\\to\\infty}x^2\\left[\\frac{2}{3x^2}+o\\!\\left(\\frac{1}{x^2}\\right)\\right]=\\frac{2}{3}.$$

**③ 例 3.3.12（幂指结构，化为 $e$ 的指数极限）**：

由 $1-\\cos x\\sim\\dfrac{x^2}{2}$，

$$\\lim_{x\\to 0}(\\cos x)^{1/x^2}=\\lim_{x\\to 0}\\left(1-\\tfrac{x^2}{2}\\right)^{\\tfrac{2}{x^2}\\cdot(-1/2)}=e^{-1/2}=\\frac{1}{\\sqrt{e}}.$$

**套路总结**：乘除→直接代；含加减→上 $o$ 展开；幂指→取对数或凑 $e$ 的形式。`
  },
  {
    id: 'card-ma-c3-s3-n13',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s3-n13',
    question: `【易错警示】等价无穷小量在**加减**运算中为什么不能直接代换？请用反例 $\\lim_{x\\to 0}\\dfrac{\\tan x-\\sin x}{x^3}$ 说明错误方法的后果，并给出 $o$-展开补救做法。`,
    answer: `**错误做法**：用 $\\tan x\\sim x,\\ \\sin x\\sim x$ 直接代入：

$$\\lim_{x\\to 0}\\frac{\\tan x-\\sin x}{x^3}\\overset{\\text{错}}{=}\\lim_{x\\to 0}\\frac{x-x}{x^3}=0.\\quad(\\text{正确答案 }=\\tfrac{1}{2})$$

**错误根源**：$\\tan x\\sim x,\\ \\sin x\\sim x$ 都是**略去高阶项**后的近似，$\\tan x-\\sin x$ 并不等价于 $0$——它等价于 $\\dfrac{x^3}{2}$，这个 $x^3$ 阶信息恰好被粗糙的等价代换**抹掉了**。

**补救做法 1**（保留 $o$）：改写为

$$\\tan x=x+o(x),\\qquad \\sin x=x+o(x),$$

得

$$\\lim_{x\\to 0}\\frac{\\tan x-\\sin x}{x^3}=\\lim_{x\\to 0}\\frac{o(x)}{x^3},$$

虽不能直接判断极限，但**至少避免出现 $0$ 的错误结论**。

**补救做法 2**（泰勒展开到足够阶）：

$$\\tan x=x+\\frac{x^3}{3}+o(x^3),\\quad \\sin x=x-\\frac{x^3}{6}+o(x^3),$$

相减得 $\\tan x-\\sin x=\\dfrac{x^3}{2}+o(x^3)$，故极限 $=\\dfrac{1}{2}$。

**另一反例**：$\\lim_{x\\to 0}\\dfrac{\\sqrt{1+x}-1-\\tfrac{1}{2}x}{x^2}=-\\dfrac{1}{8}$，不能用 $\\sqrt{1+x}-1\\sim\\tfrac{1}{2}x$ 直接代入（否则得 $0$），必须用 $\\sqrt{1+x}-1=\\tfrac{1}{2}x-\\tfrac{1}{8}x^2+o(x^2)$。

**考研口诀**：**乘除可代换，加减要小心**；加减时主阶若相消，必须保留更高阶 $o(\\cdot)$ 或改用泰勒展开。`
  },

  // ── 第三章 §4 闭区间上的连续函数 · 教材模式卡片 ──────────────────
  {
    id: 'card-ma-c3-s4-n1',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s4-n1',
    question: `【定理默写】请写出「有界性定理」（定理 3.4.1）的完整叙述，并给出利用**闭区间套定理**的证明思路。为什么"闭区间"条件不可去？`,
    answer: `**定理 3.4.1**：若 $f(x)$ 在**闭区间** $[a,b]$ 上连续，则 $f(x)$ 在 $[a,b]$ 上**有界**。

**证明思路（反证 + 闭区间套）**：

设 $f$ 在 $[a,b]$ 无界。二等分 $[a,b]$，$f$ 至少在其中一半无界，记为 $[a_1,b_1]$；继续二等分得 $[a_2,b_2]$……构成闭区间套 $\\{[a_n,b_n]\\}$，$f$ 在每段上都无界。

由闭区间套定理，$\\exists!\\,\\xi\\in\\bigcap[a_n,b_n]\\subset[a,b]$，且 $a_n,b_n\\to\\xi$。

由 $f$ 在 $\\xi$ 连续，$\\exists\\,\\delta>0,M>0$ 使 $x\\in O(\\xi,\\delta)\\cap[a,b]$ 时 $|f(x)|\\le M$。

但 $n$ 充分大时 $[a_n,b_n]\\subset O(\\xi,\\delta)$，于是 $f$ 在 $[a_n,b_n]$ 上有界——与构造矛盾。$\\blacksquare$

**反例（闭区间条件不可去）**：$f(x)=\\dfrac{1}{x}$ 在**开区间** $(0,1)$ 连续但**无界**；根本原因是 $x\\to 0+$ 时函数"逃到无穷"，开区间缺端点保护。`
  },
  {
    id: 'card-ma-c3-s4-n2',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s4-n2',
    question: `【定理默写】请写出「最值定理」（定理 3.4.2）的完整叙述，并给出利用**确界存在定理 + Bolzano-Weierstrass 定理**的证明思路。为什么"闭区间"条件不可去？`,
    answer: `**定理 3.4.2**：若 $f(x)$ 在 $[a,b]$ 上连续，则 $\\exists\\,\\xi,\\eta\\in[a,b]$ 使

$$f(\\xi)\\le f(x)\\le f(\\eta),\\quad\\forall\\,x\\in[a,b].$$

**证明（证 $f$ 取到最小值）**：

由定理 3.4.1，$R_f=\\{f(x)\\mid x\\in[a,b]\\}$ 有界，设 $\\alpha=\\inf R_f$。

由下确界刻画，取 $\\varepsilon_n=\\dfrac{1}{n}$，$\\exists\\,x_n\\in[a,b]$ 使 $\\alpha\\le f(x_n)<\\alpha+\\dfrac{1}{n}$。

$\\{x_n\\}$ 有界 $\\Rightarrow$ 由 B-W 定理有收敛子列 $x_{n_k}\\to\\xi\\in[a,b]$。对 $\\alpha\\le f(x_{n_k})<\\alpha+\\dfrac{1}{n_k}$ 令 $k\\to\\infty$，由**夹逼**与**连续性**得

$$f(\\xi)=\\alpha=\\min R_f.$$

同法证 $\\exists\\,\\eta$ 使 $f(\\eta)=\\sup R_f=\\max R_f$。$\\blacksquare$

**反例**：$f(x)=x$ 在 $(0,1)$ 连续有界，$\\inf=0,\\sup=1$，但**都取不到**——端点处极限存在却非"值"。`
  },
  {
    id: 'card-ma-c3-s4-n3',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s4-n3',
    question: `【定理默写】请写出「零点存在定理」（定理 3.4.3）的完整叙述，并给出利用**确界法**的证明思路。`,
    answer: `**定理 3.4.3**：若 $f(x)$ 在 $[a,b]$ 连续，且 $f(a)\\cdot f(b)<0$，则 $\\exists\\,\\xi\\in(a,b)$ 使 $f(\\xi)=0$。

**证明（确界法）**：

不妨设 $f(a)<0,f(b)>0$。令 $V=\\{x\\in[a,b]\\mid f(x)<0\\}$，$V$ 非空有界，令 $\\xi=\\sup V$。

**① $\\xi\\in(a,b)$**：由连续性 + $f(a)<0\\Rightarrow$ $\\exists\\,\\delta_1>0:[a,a+\\delta_1]\\subset V$；由 $f(b)>0\\Rightarrow$ $\\exists\\,\\delta_2>0:(b-\\delta_2,b]$ 上 $f>0$。故 $a+\\delta_1\\le\\xi\\le b-\\delta_2$。

**② $f(\\xi)=0$**：

- 取 $x_n\\in V,\\ x_n\\to\\xi$，由 $f(x_n)<0$ 与连续性：$f(\\xi)=\\lim f(x_n)\\le 0$；
- 若 $f(\\xi)<0$，由连续性 $\\exists\\,\\delta>0$ 使 $O(\\xi,\\delta)\\cap[a,b]$ 上 $f<0$，从而 $\\xi+\\tfrac{\\delta}{2}\\in V$，与 $\\xi=\\sup V$ 矛盾。

故 $f(\\xi)=0$。$\\blacksquare$

**几何直观**：连续曲线从 $x$ 轴下方"过渡"到上方，必穿过 $x$ 轴——即介值性的最简单情形。`
  },
  {
    id: 'card-ma-c3-s4-n4',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s4-n4',
    question: `【例题演练】请分别完成：① 例 3.4.1——定位多项式 $p(x)=2x^3-3x^2-3x+2$ 的三个零点位置；② 例 3.4.2——证明 $f([a,b])\\subset[a,b]$ 的连续函数必有**不动点**。`,
    answer: `**① 例 3.4.1**：

| $x$ | $-2$ | $0$ | $1$ | $3$ |
|---|---|---|---|---|
| $p(x)$ | $-20$ | $2$ | $-2$ | $20$ |

符号三次改变，由零点存在定理知三个零点分别在 $(-2,0),\\ (0,1),\\ (1,3)$ 内。事实上

$$p(x)=2(x+1)\\left(x-\\tfrac{1}{2}\\right)(x-2),$$

零点为 $x_1=-1,\\ x_2=\\dfrac{1}{2},\\ x_3=2$。

---

**② 例 3.4.2 不动点定理证明**：

令 $g(x)=f(x)-x$，在 $[a,b]$ 连续。由 $f([a,b])\\subset[a,b]$，

$$g(a)=f(a)-a\\ge 0,\\qquad g(b)=f(b)-b\\le 0.$$

- 若 $g(a)=0\\Rightarrow\\xi=a$；若 $g(b)=0\\Rightarrow\\xi=b$；
- 若 $g(a)>0,g(b)<0$，由定理 3.4.3 $\\exists\\,\\xi\\in(a,b):g(\\xi)=0$，即 $f(\\xi)=\\xi$。$\\blacksquare$

**开区间反例**：$f(x)=\\dfrac{x}{2}$ 在 $(0,1)$ 连续，$f((0,1))\\subset(0,1)$，但无不动点（唯一候选 $x=0\\notin(0,1)$）。

**套路**：出现 $f(x)=x$、$f(x)=g(x)$、$f(x)=c$ 一类等式时，**构造辅助函数**并归结到零点定理——这是考研最经典的构造题套路。`
  },
  {
    id: 'card-ma-c3-s4-n5',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s4-n5',
    question: `【定理默写】请写出「中间值定理」（定理 3.4.4）的完整叙述与证明思路，并写出其**值域推论**。`,
    answer: `**定理 3.4.4（中间值定理）**：若 $f(x)$ 在 $[a,b]$ 上连续，$m=\\min f,\\ M=\\max f$，则 $f$ 能取到 $[m,M]$ 之间的**任何一个值**。

**证明思路**：

由最值定理，$\\exists\\,\\xi,\\eta\\in[a,b]$ 使 $f(\\xi)=m,\\ f(\\eta)=M$。不妨设 $\\xi<\\eta$。

对任意 $C\\in(m,M)$，令辅助函数

$$\\varphi(x)=f(x)-C,$$

则 $\\varphi$ 在 $[\\xi,\\eta]$ 连续，$\\varphi(\\xi)<0,\\ \\varphi(\\eta)>0$。由零点存在定理，$\\exists\\,\\zeta\\in(\\xi,\\eta):\\varphi(\\zeta)=0$，即 $f(\\zeta)=C$。$\\blacksquare$

---

**推论（值域闭区间性）**：$f(x)$ 在 $[a,b]$ 连续 $\\Rightarrow$ 值域

$$R_f=[m,M]$$

是一个**闭区间**。

**意义**：连续 + 有限闭区间 $\\Rightarrow$ 像集仍为有限闭区间——此即"**连续性保持紧致性**"的初步体现，也是 §3.2 严格单调连续函数值域结论的推广。`
  },
  {
    id: 'card-ma-c3-s4-n6',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s4-n6',
    question: `【定义默写】请写出「一致连续」的 $\\varepsilon$-$\\delta$ 定义（定义 3.4.1），并与"点连续"在 $\\delta$ 依赖性与量词结构上作对比。为什么一致连续更强？`,
    answer: `**定义 3.4.1**：$f(x)$ 在区间 $X$ 上**一致连续**：

$$\\forall\\,\\varepsilon>0,\\ \\exists\\,\\delta>0,\\ \\forall\\,x',x''\\in X\\,(|x'-x''|<\\delta):\\ |f(x')-f(x'')|<\\varepsilon.$$

**对比**：

| | 点连续（于 $x_0$） | 一致连续（于 $X$） |
|---|---|---|
| $\\delta$ 依赖 | $\\delta=\\delta(x_0,\\varepsilon)$ | $\\delta=\\delta(\\varepsilon)$ **仅**依赖 $\\varepsilon$ |
| 量词顺序 | $\\forall x_0,\\ \\forall\\varepsilon,\\ \\exists\\delta$ | $\\forall\\varepsilon,\\ \\exists\\delta,\\ \\forall x',x''$ |
| 适用范围 | 逐点 | **整个区间一致适用** |

**蕴含关系**：一致连续 $\\Rightarrow$ 连续（取 $x''=x_0$ 即得），反之**不一定**。

**几何直观**：一致连续 = 宽为 $\\delta$ 的"滑动矩形框"在整个图像上平移时，框内振幅始终 $<\\varepsilon$——即函数的"陡峭程度"在整个区间有统一控制。

**关键转折**：一致连续允许两端点 $x',x''$ 都**自由移动**，而点连续要求其中一个是**固定**的 $x_0$——这是本质区别。`
  },
  {
    id: 'card-ma-c3-s4-n7',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s4-n7',
    question: `【例题演练】请分别证明：① 例 3.4.3——$\\sin x$ 在 $(-\\infty,+\\infty)$ 上一致连续；② 例 3.4.4——$\\dfrac{1}{x}$ 在 $(0,1)$ 上连续但非一致连续（用 $\\delta^*(x_0,\\varepsilon)$ 精确解法）。`,
    answer: `**① 例 3.4.3（$\\sin x$ 一致连续）**

由三角和差化积：

$$|\\sin x'-\\sin x''|=2\\left|\\cos\\tfrac{x'+x''}{2}\\sin\\tfrac{x'-x''}{2}\\right|\\le|x'-x''|.$$

$\\forall\\,\\varepsilon>0$，取 $\\delta=\\varepsilon$ 即可。$\\blacksquare$

**关键**：$\\sin x$ 有界且导数有界（$|\\cos x|\\le 1$）——Lipschitz 连续蕴含一致连续。

---

**② 例 3.4.4（$\\dfrac{1}{x}$ 在 $(0,1)$ 非一致连续）**

对固定 $x_0\\in(0,1)$，由 $\\left|\\dfrac{1}{x}-\\dfrac{1}{x_0}\\right|<\\varepsilon$ 解出

$$\\frac{x_0}{1+x_0\\varepsilon}<x<\\frac{x_0}{1-x_0\\varepsilon},$$

从而最大允许步长

$$\\delta^*(x_0,\\varepsilon)=\\frac{x_0^2\\varepsilon}{1+x_0\\varepsilon}.$$

当 $x_0\\to 0+$ 时 $\\delta^*\\to 0$，故 $\\inf_{x_0}\\delta^*(x_0,\\varepsilon)=0$——**不存在**对 $(0,1)$ 统一适用的 $\\delta(\\varepsilon)$。$\\blacksquare$

**根本原因**：$\\dfrac{1}{x}$ 在 $x\\to 0+$ "陡峭到无界"（$|f'(x)|=\\dfrac{1}{x^2}\\to\\infty$）。

**改善**：区间改为 $[\\eta,1)\\ (\\eta>0)$，则 $\\left|\\tfrac{1}{x'}-\\tfrac{1}{x''}\\right|\\le\\tfrac{|x'-x''|}{\\eta^2}$，取 $\\delta=\\eta^2\\varepsilon$ 即得一致连续。`
  },
  {
    id: 'card-ma-c3-s4-n8',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s4-n8',
    question: `【定理默写】请写出「一致连续的点列判别法」（定理 3.4.5）的完整叙述与证明思路，并说明其判**非**一致连续的实用套路。`,
    answer: `**定理 3.4.5**：$f(x)$ 在 $X$ 上一致连续 $\\Leftrightarrow$ $\\forall\\,\\{x_n'\\},\\{x_n''\\}\\subset X$，

$$\\lim_{n\\to\\infty}(x_n'-x_n'')=0\\ \\Rightarrow\\ \\lim_{n\\to\\infty}(f(x_n')-f(x_n''))=0.$$

**证明**：

**必要性**：一致连续 $\\Rightarrow$ $\\forall\\,\\varepsilon,\\ \\exists\\,\\delta$。由 $x_n'-x_n''\\to 0\\Rightarrow\\exists\\,N$，$n>N$ 时 $|x_n'-x_n''|<\\delta$，故 $|f(x_n')-f(x_n'')|<\\varepsilon$。

**充分性（反证）**：若非一致连续，$\\exists\\,\\varepsilon_0>0,\\ \\forall\\,\\delta,\\ \\exists\\,x',x''$ 满足 $|x'-x''|<\\delta$ 但 $|f(x')-f(x'')|\\ge\\varepsilon_0$。取 $\\delta_n=\\dfrac{1}{n}$ 构造点列 $\\{x_n'\\},\\{x_n''\\}$，$x_n'-x_n''\\to 0$ 但 $|f(x_n')-f(x_n'')|\\ge\\varepsilon_0\\not\\to 0$——矛盾。$\\blacksquare$

---

**判非一致连续实用套路**：找两组点列 $\\{x_n'\\},\\{x_n''\\}$ 满足

$$x_n'-x_n''\\to 0,\\ \\text{但}\\ f(x_n')-f(x_n'')\\not\\to 0.$$

**套路示例**（用此法重证例 3.4.4）：

取 $x_n'=\\dfrac{1}{2n},\\ x_n''=\\dfrac{1}{n}\\in(0,1)$，

$$x_n'-x_n''=-\\tfrac{1}{2n}\\to 0,\\qquad f(x_n')-f(x_n'')=2n-n=n\\to\\infty,$$

故 $\\dfrac{1}{x}$ 在 $(0,1)$ 非一致连续。`
  },
  {
    id: 'card-ma-c3-s4-n9',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s4-n9',
    question: `【例题演练】请证明 $f(x)=x^2$：① 在 $[0,+\\infty)$ 上**非**一致连续；② 在 $[0,A]$（$A$ 为任意有限正数）上**一致**连续。并由此归纳一致连续性与区间类型的关系。`,
    answer: `**① 非一致连续**（点列法）：

取 $x_n'=\\sqrt{n+1},\\ x_n''=\\sqrt{n}$：

$$x_n'-x_n''=\\sqrt{n+1}-\\sqrt{n}=\\frac{1}{\\sqrt{n+1}+\\sqrt{n}}\\to 0,$$

但

$$f(x_n')-f(x_n'')=(n+1)-n=1\\not\\to 0.$$

由定理 3.4.5，$x^2$ 在 $[0,+\\infty)$ 非一致连续。$\\blacksquare$

---

**② 一致连续**（有界闭区间）：在 $[0,A]$ 上

$$|x'^2-x''^2|=|x'+x''|\\cdot|x'-x''|\\le 2A|x'-x''|.$$

$\\forall\\,\\varepsilon>0$，取 $\\delta=\\dfrac{\\varepsilon}{2A}$ 即可。$\\blacksquare$

---

**一致连续性与区间类型对照表**：

| 区间类型 | 连续 $\\Rightarrow$ 一致连续？ | 反例 |
|---|---|---|
| 无限区间（如 $[a,+\\infty)$） | **否** | $x^2$ 于 $[0,+\\infty)$ |
| 有限开区间（如 $(a,b)$） | **否** | $1/x$ 于 $(0,1)$ |
| **有限闭区间 $[a,b]$** | **是** | Cantor 定理 |

**核心直觉**：一致连续失败 $\\Leftrightarrow$ 函数在区间端点或无穷远处"斜率爆炸"（斜率无界 $\\Rightarrow$ $\\delta$ 无法统一）。`
  },
  {
    id: 'card-ma-c3-s4-n10',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s4-n10',
    question: `【定理默写】请写出「Cantor 定理」（定理 3.4.6）的完整叙述，并给出其**反证法 + Bolzano-Weierstrass 定理**的证明思路。为什么该定理体现了"紧致性"？`,
    answer: `**Cantor 定理（定理 3.4.6）**：若 $f(x)$ 在**闭区间** $[a,b]$ 上连续，则 $f(x)$ 在 $[a,b]$ 上**一致连续**。

**证明（反证 + B-W 定理）**：

假设 $f$ 在 $[a,b]$ 非一致连续。由定理 3.4.5 的构造，$\\exists\\,\\varepsilon_0>0$ 及点列 $\\{x_n'\\},\\{x_n''\\}\\subset[a,b]$：

$$|x_n'-x_n''|<\\frac{1}{n},\\qquad |f(x_n')-f(x_n'')|\\ge\\varepsilon_0.$$

$\\{x_n'\\}$ 有界 $\\Rightarrow$ 由 B-W 定理 $\\exists$ 收敛子列 $x_{n_k}'\\to\\xi\\in[a,b]$。由 $|x_{n_k}'-x_{n_k}''|<\\dfrac{1}{n_k}\\to 0$，

$$x_{n_k}''=x_{n_k}'+(x_{n_k}''-x_{n_k}')\\to\\xi.$$

由 $f$ 在 $\\xi$ 连续：

$$\\lim_{k\\to\\infty}f(x_{n_k}')=\\lim_{k\\to\\infty}f(x_{n_k}'')=f(\\xi)\\Rightarrow\\lim(f(x_{n_k}')-f(x_{n_k}''))=0,$$

与 $|f(x_n')-f(x_n'')|\\ge\\varepsilon_0>0$ 矛盾。$\\blacksquare$

---

**"闭 + 有限"两条件均不可去**：

- 去"闭" $\\Rightarrow$ $1/x$ 于 $(0,1)$ 非一致连续；
- 去"有限" $\\Rightarrow$ $x^2$ 于 $[0,+\\infty)$ 非一致连续。

**紧致性意义**：$[a,b]$ 是实数轴上最简单的**紧致集**（列紧——任何序列有收敛子列）。Cantor 定理的本质是"**紧致 + 连续 $\\Rightarrow$ 一致连续**"，这是现代拓扑学与分析学中最核心的定理之一。`
  },
  {
    id: 'card-ma-c3-s4-n11',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s4-n11',
    question: `【定理默写】请写出「有限开区间一致连续充要条件」（定理 3.4.7）的完整叙述与证明思路，并用该定理判断 $\\dfrac{\\sin x}{x}$ 与 $\\sin\\dfrac{1}{x}$ 在 $(0,1)$ 上是否一致连续。`,
    answer: `**定理 3.4.7**：设 $f(x)$ 在**有限**开区间 $(a,b)$ 连续。则 $f$ 在 $(a,b)$ 上一致连续 $\\Leftrightarrow$ $f(a+),\\ f(b-)$ **都存在**（均为有限）。

**证明**：

**充分性**：定义延拓 $\\tilde f(a)=f(a+),\\ \\tilde f(b)=f(b-),\\ \\tilde f\\bigm|_{(a,b)}=f$，则 $\\tilde f$ 在 $[a,b]$ 连续，由 Cantor 定理一致连续，限制到 $(a,b)$ 仍一致连续。

**必要性**：取 $x_n\\to a$，$x_n\\in(a,b)$。$\\{x_n\\}$ 是 Cauchy 列，由一致连续性 $\\{f(x_n)\\}$ 也是 Cauchy 列 $\\Rightarrow$ 收敛。由 Heine 归结 $f(a+)$ 存在。同理 $f(b-)$ 存在。$\\blacksquare$

---

**应用判别**：

- **$\\dfrac{\\sin x}{x}$ 于 $(0,1)$**：$f(0+)=1,\\ f(1-)=\\sin 1$ 都存在 $\\Rightarrow$ **一致连续**；
- **$\\sin\\dfrac{1}{x}$ 于 $(0,1)$**：$f(0+)$ **不存在**（$x\\to 0+$ 时剧烈振荡）$\\Rightarrow$ **非一致连续**。

---

**注意事项**：

- 定理要求**有限**开区间，无限开区间不适用；
- 反例：$\\sin x$ 在 $(-\\infty,+\\infty)$ 一致连续，但 $f(\\pm\\infty)$ 都不存在——无限区间上的 Cauchy 列可能不收敛到 $X$ 内。`
  },
  {
    id: 'card-ma-c3-s4-n12',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c3-s4-n12',
    question: `【方法论总结】请列出闭区间上连续函数的五大定理名称、核心内容与常用证法；并说明这些定理为何都要求"闭区间"条件、它们之间有怎样的逻辑关系。`,
    answer: `**闭区间上连续函数五大定理**：

| # | 定理 | 核心内容 | 常用证法 |
|---|---|---|---|
| 1 | 有界性定理 (3.4.1) | $f$ 在 $[a,b]$ 有界 | 闭区间套 + 反证 |
| 2 | 最值定理 (3.4.2) | $f$ 取最大/最小值 | 确界存在 + B-W |
| 3 | 零点存在定理 (3.4.3) | $f(a)f(b)<0\\Rightarrow\\exists\\xi:f(\\xi)=0$ | 确界法 |
| 4 | 中间值定理 (3.4.4) | $f$ 取 $[m,M]$ 中任意值 | 最值 + 零点 |
| 5 | Cantor 定理 (3.4.6) | $f$ 在 $[a,b]$ 一致连续 | B-W + 反证 |

---

**"闭区间"条件为何关键**：

- 必须是**有限**区间（否则函数可能"逃到无穷"：如 $x^2$ 于 $[0,+\\infty)$ 非一致连续）；
- 必须是**闭**区间（否则端点处可能"爆炸"：如 $1/x$ 于 $(0,1)$ 无界、非一致连续）；
- **闭 + 有限** $=$ **紧致**——这是保证"逐点"性质能提升为"整体"性质的根本。

**逻辑依赖链**：

$$\\text{有界性}\\longrightarrow\\text{最值}\\longrightarrow\\text{中间值}$$

$$\\text{零点存在}\\longrightarrow\\text{中间值（辅助函数）}$$

$$\\text{B-W + 连续}\\longrightarrow\\text{Cantor（一致连续）}$$

---

**换工具证明的考研技巧**：实数系 5 个基本定理（确界、单调有界、闭区间套、B-W、Cauchy）**两两等价**，故上述 5 个性质可用任一工具证明。高分考生应掌握：

- 用闭区间套证最值定理；
- 用 Cauchy 收敛原理证 Cantor 定理；
- 用确界法证有界性定理；
- 等等——这是 §2 与 §4 综合运用的集大成。`
  },

  // ── 第四章 §1 微分和导数 · 教材模式卡片 ──────────────────
  {
    id: 'card-ma-c4-s1-n1',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s1-n1',
    question: `【思想回溯】请回顾"第一宇宙速度推导"案例的完整思路，并说明它如何体现了**微分**的核心思想（舍弃高阶无穷小、保留线性主要部分）。`,
    answer: `**案例复盘**：卫星在 $A$ 点水平飞行，地球半径 $R\\approx 6\\,371\\,000\\text{ m}$，自由落体 $1\\text{ 秒}$ 下落 $BC=4.9\\text{ m}$。由勾股定理：

$$AB^2=(R+4.9)^2-R^2.$$

**直接计算的困境**：两个 $O(10^{13})$ 量级数相减 $\\Rightarrow$ 精度损失大。

**平方差技巧**：

$$AB^2=(R+4.9+R)(R+4.9-R)=2R\\cdot 4.9+4.9^2.$$

**关键判断**：$4.9^2\\approx 24$ 相较 $2R\\cdot 4.9\\approx 6.2\\times 10^7$，**可忽略**。

$$AB^2\\approx 2R\\cdot 4.9\\Rightarrow AB\\approx 7.9\\text{ km}.$$

---

**微分思想的三要素**：

1. **函数视角**：$AB^2$ 实为 $y=x^2$ 在 $x=R$、增量 $\\Delta x=4.9$ 时的差分 $\\Delta y$；
2. **线性主部**：$2R\\cdot 4.9=2x\\Delta x$ 是**线性主要部分**；
3. **高阶舍弃**：$4.9^2=(\\Delta x)^2=o(\\Delta x)$ 可安全舍去。

**核心哲学**：**"用线性逼近处理非线性"**——这是整个微分学乃至数值分析的底层思想。`
  },
  {
    id: 'card-ma-c4-s1-n2',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s1-n2',
    question: `【定义默写】请写出「微分」的定义（定义 4.1.1），并解释定义中的 $g(x_0)$ 为什么必须是"只与 $x_0$ 有关、与 $\\Delta x$ 无关"的数？什么是"线性主要部分"？`,
    answer: `**定义 4.1.1（微分）**：对 $y=f(x)$ 定义域中一点 $x_0$，若存在**只与 $x_0$ 有关、与 $\\Delta x$ 无关**的数 $g(x_0)$，使 $\\Delta x\\to 0$ 时

$$\\Delta y=g(x_0)\\Delta x+o(\\Delta x),$$

则称 $f(x)$ 在 $x_0$ 处**可微**。

---

**为何 $g(x_0)$ 必须与 $\\Delta x$ 无关**：

- 若 $g$ 依赖 $\\Delta x$，则 $g(\\Delta x)\\cdot\\Delta x$ 可能退化为非线性项；
- 只有当 $g$ 是**固定常数**（对给定 $x_0$ 而言）时，$g(x_0)\\Delta x$ 才能保证是 $\\Delta x$ 的**线性函数**；
- 这使得微分成为**函数在 $x_0$ 处切线**的斜率的描述，具有唯一性。

**线性主要部分**：$g(x_0)\\Delta x$——因为它同时满足：

- 关于 $\\Delta x$ 是**线性**的（首要）；
- 它是 $\\Delta y$ 的**主要**贡献（即 $\\Delta y$ 的一阶无穷小部分，高阶部分 $o(\\Delta x)$ 可忽略）。

**等价关系**：$g(x)\\ne 0$ 时

$$\\Delta y\\sim g(x)\\Delta x\\quad(\\Delta x\\to 0).$$

**近似计算公式**：$|\\Delta x|$ 小时 $\\Delta y\\approx g(x)\\Delta x$，偏差为 $o(\\Delta x)$。`
  },
  {
    id: 'card-ma-c4-s1-n3',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s1-n3',
    question: `【记号辨析】请说明：① 自变量微分 $dx$ 与自变量增量 $\\Delta x$ 的关系；② 因变量微分 $dy$ 与因变量增量 $\\Delta y$ 的关系；③ 微分关系式 $dy=g(x)\\,dx$ 的几何意义。`,
    answer: `**① 自变量微分 $dx$**：当 $f$ 可微且 $\\Delta x$ 可任取时，直接定义

$$dx\\equiv\\Delta x.$$

即**自变量的微分就是它的增量本身**（因为恒等变换 $x\\mapsto x$ 没有"非线性"部分）。

**② 因变量微分 $dy$**：定义为 $\\Delta y$ 的**线性主要部分**

$$dy=g(x)\\Delta x=g(x)\\,dx,$$

也记为 $df(x)$。**注意**：$dy\\ne\\Delta y$，两者相差一个高阶无穷小：

$$\\Delta y=dy+o(\\Delta x).$$

**③ 几何意义**：

- 函数曲线在 $(x,f(x))$ 有**切线**，斜率为 $g(x)$；
- 横坐标从 $x$ 变到 $x+dx$ 时：
  - 曲线纵坐标变化 $=\\Delta y$；
  - **切线**纵坐标变化 $=dy=g(x)\\,dx$。

即 $dy$ 是"**用切线代替曲线**"所得的纵坐标增量，$\\Delta y-dy=o(\\Delta x)$ 是曲线偏离切线的高阶误差。

---

**工程应用（近似计算核心公式）**：

$$f(x_0+\\Delta x)\\approx f(x_0)+g(x_0)\\Delta x=f(x_0)+dy.$$

这就是第一宇宙速度案例中的近似思想。`
  },
  {
    id: 'card-ma-c4-s1-n4',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s1-n4',
    question: `【例题演练】请通过定义 4.1.1 证明 $y=x^2$ 在任意 $x\\in\\mathbf{R}$ 处可微并求出其微分 $dy$（例 4.1.1），并说明此结果如何呼应第一宇宙速度推导。`,
    answer: `**解（按定义 4.1.1）**：

对任意 $x$ 与增量 $\\Delta x$，

$$\\Delta y=(x+\\Delta x)^2-x^2=2x\\Delta x+(\\Delta x)^2.$$

**分解验证**：

- **线性项**：$2x\\Delta x$——系数 $g(x)=2x$ 只与 $x$ 有关、与 $\\Delta x$ 无关；
- **高阶项**：$(\\Delta x)^2$ 满足 $\\lim_{\\Delta x\\to 0}\\dfrac{(\\Delta x)^2}{\\Delta x}=0$，故 $(\\Delta x)^2=o(\\Delta x)$。

由定义 4.1.1，$y=x^2$ 在 $x$ 处可微，其微分

$$\\boxed{\\ dy=d(x^2)=2x\\,dx.\\ }$$

---

**呼应第一宇宙速度**：

在 $x=R=6\\,371\\,000,\\ \\Delta x=4.9$ 时，由

$$\\Delta(x^2)=2x\\Delta x+(\\Delta x)^2\\approx 2x\\Delta x$$

直接给出

$$AB^2=\\Delta(R^2)\\approx 2R\\cdot 4.9=6.24\\times 10^7,$$

从而 $AB\\approx 7.9\\text{ km}$——与推导一致。

**启示**：例 4.1.1 的抽象结论 $d(x^2)=2x\\,dx$ 其实**预先编码**了所有"平方量的微变"估计问题。这也是为什么微分公式表如此重要——一经建立便可重复使用。`
  },
  {
    id: 'card-ma-c4-s1-n5',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s1-n5',
    question: `【反例 + 蕴含关系】① 请证明 $y=\\sqrt[3]{x^2}$ 在 $x=0$ 处**不可微**（例 4.1.2）；② 写出"可微"与"连续"的蕴含关系，并举例说明逆命题不成立。`,
    answer: `**① 例 4.1.2 不可微证明**：

在 $x=0$ 处，

$$\\Delta y=f(\\Delta x)-f(0)=\\sqrt[3]{(\\Delta x)^2}=|\\Delta x|^{2/3}.$$

**阶的分析**：$|\\Delta x|^{2/3}$ 是 $\\Delta x$ 的 $\\dfrac{2}{3}$ 阶无穷小，**低于**线性项 $\\Delta x$ 的一阶。

若 $\\Delta y$ 能写成 $g(0)\\Delta x+o(\\Delta x)$，则 $\\Delta y$ 应为一阶无穷小（当 $g(0)\\ne 0$）或高阶（当 $g(0)=0$）。但 $\\dfrac{2}{3}$ 阶既非一阶也非高阶，**不可能**满足该分解。

故 $y=\\sqrt[3]{x^2}$ 在 $x=0$ 处**不可微**。$\\blacksquare$

**补充**：$\\sqrt[3]{x^2}$ 在 $(-\\infty,0)$ 与 $(0,+\\infty)$ 都可微，仅在**尖点** $x=0$ 处不可微——这是导数 $\\to\\pm\\infty$ 的典型征兆。

---

**② 蕴含关系**：

$$\\boxed{\\ \\text{可微}\\ \\Longrightarrow\\ \\text{连续}.\\ }$$

**证明**：$f$ 在 $x$ 可微 $\\Rightarrow\\Delta y=g(x)\\Delta x+o(\\Delta x)$，令 $\\Delta x\\to 0\\Rightarrow\\Delta y\\to 0$，即连续。

**逆命题不成立**：$y=\\sqrt[3]{x^2}$ 在 $x=0$ **连续**（$\\lim_{x\\to 0}\\sqrt[3]{x^2}=0=f(0)$），但**不可微**。

**另一个经典反例**：$y=|x|$ 在 $x=0$ 连续但不可导（左右导数 $\\pm 1$ 不等），故也不可微。

**考研口诀**：**连续是可微的必要不充分条件**。`
  },
  {
    id: 'card-ma-c4-s1-n6',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s1-n6',
    question: `【定义默写】请写出「导数」的定义（定义 4.1.2）及其等价形式，列出导数的各种记号，并说明导数的几何意义与物理意义。`,
    answer: `**定义 4.1.2（导数）**：若极限

$$\\lim_{\\Delta x\\to 0}\\frac{\\Delta y}{\\Delta x}=\\lim_{\\Delta x\\to 0}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$$

**存在**，则称 $f(x)$ 在 $x_0$ 处**可导**，此极限值为导数，记为

$$f'(x_0),\\quad y'(x_0),\\quad \\left.\\frac{df}{dx}\\right|_{x_0},\\quad \\left.\\frac{dy}{dx}\\right|_{x_0}.$$

---

**等价定义**（令 $x=x_0+\\Delta x$）：

$$f'(x_0)=\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}.$$

---

**几何意义**：$f'(x_0)$ = 曲线 $y=f(x)$ 在点 $(x_0,f(x_0))$ 处**切线的斜率**。切线方程：

$$y-f(x_0)=f'(x_0)(x-x_0).$$

**物理意义**：

- $f(t)$ 位移 $\\Rightarrow$ $f'(t)$ = **瞬时速度**；
- $f(t)$ 速度 $\\Rightarrow$ $f'(t)$ = **瞬时加速度**；
- 一般地，$f'(x)$ = 因变量 $y$ 关于自变量 $x$ 的**瞬时变化率**。

**记号双重观**：$\\dfrac{dy}{dx}$ 既是**整体导数记号**，也可视作**微分之商**（微商）——两种视角互通，是链式法则、换元法的形式基础。`
  },
  {
    id: 'card-ma-c4-s1-n7',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s1-n7',
    question: `【概念辨析】请说明：① 导函数 $f'(x)$ 与某点导数值 $f'(x_0)$ 的区别；② 可微的 $f(x)$ 中 $g(x)$ 与 $f'(x)$ 的关系；③ 微商视角 $f'(x)=\\dfrac{dy}{dx}$ 的双重解读。`,
    answer: `**① 导函数 vs 某点导数值**：

- $f'(x_0)$：**一个数**——函数 $f$ 在**具体点** $x_0$ 处的导数值；
- $f'(x)$（导函数）：**一个函数**——定义在 $f$ 的所有**可导点集** $D'\\subset D$ 上，$x\\mapsto f'(x)$。

**例**：$f(x)=x^2$ 的导函数 $f'(x)=2x$（整个 $\\mathbf{R}$ 上定义），而 $f'(3)=6$（具体一个数）。

**简称约定**：导函数一般简称为"导数"。

---

**② $g(x)$ 与 $f'(x)$ 的关系**：定义 4.1.1 中的 $g(x)$ **就是** $f'(x)$。

**证明**：由可微性 $\\Delta y=g(x)\\Delta x+o(\\Delta x)$，两边除以 $\\Delta x$：

$$\\frac{\\Delta y}{\\Delta x}=g(x)+\\frac{o(\\Delta x)}{\\Delta x}\\to g(x)\\quad(\\Delta x\\to 0),$$

即 $f'(x)=g(x)$。

于是**差分的无穷小关系式**：$\\Delta y=f'(x)\\Delta x+o(\\Delta x)$；**微分关系式**：$dy=f'(x)\\,dx$。

---

**③ 微商视角**：$f'(x)=\\dfrac{dy}{dx}$ 的**双重解读**：

- 作为**整体记号**：导数符号，表示一个极限值；
- 作为**微分之商**：因变量微分 $dy$ 除以自变量微分 $dx$——真正的代数除法。

**为何两视角等价**：由 $dy=f'(x)\\,dx$ 形式上两边除 $dx$ 得 $\\dfrac{dy}{dx}=f'(x)$。这种统一使**换元法、链式法则**能以"消去分子分母相同微分"的直观形式被正确运用。`
  },
  {
    id: 'card-ma-c4-s1-n8',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s1-n8',
    question: `【定理默写】请写出「可微与可导的等价性」（定理 4.1.1），并给出充要两个方向的完整证明。为什么此等价仅在**一元**函数中成立？`,
    answer: `**定理 4.1.1**：一元函数 $y=f(x)$ 在 $x$ 处**可微** $\\Leftrightarrow$ 在 $x$ 处**可导**。

---

**证明**：

**($\\Rightarrow$) 可微 $\\Rightarrow$ 可导**：由定义 4.1.1，$\\exists$ 与 $\\Delta x$ 无关的 $g(x)$ 使

$$\\Delta y=g(x)\\Delta x+o(\\Delta x).$$

两边除以 $\\Delta x$：

$$\\frac{\\Delta y}{\\Delta x}=g(x)+\\frac{o(\\Delta x)}{\\Delta x}.$$

令 $\\Delta x\\to 0$，由 $o(\\Delta x)/\\Delta x\\to 0$：

$$\\lim_{\\Delta x\\to 0}\\frac{\\Delta y}{\\Delta x}=g(x),$$

极限存在，故 $f$ 可导且 $f'(x)=g(x)$。

**($\\Leftarrow$) 可导 $\\Rightarrow$ 可微**：由定义 4.1.2，$\\lim_{\\Delta x\\to 0}\\dfrac{\\Delta y}{\\Delta x}=f'(x)$，即

$$\\frac{\\Delta y}{\\Delta x}-f'(x)=o(1)\\quad(\\Delta x\\to 0).$$

两边乘以 $\\Delta x$：

$$\\Delta y-f'(x)\\Delta x=o(1)\\cdot\\Delta x=o(\\Delta x),$$

即 $\\Delta y=f'(x)\\Delta x+o(\\Delta x)$，由定义 4.1.1，$f$ 可微。$\\blacksquare$

---

**"孪生兄弟"**：对一元函数，可微 $\\equiv$ 可导，考研中两概念可互换。

**为何仅一元成立**：

- **一元**：只有**一个方向** $\\Delta x$ 的无穷小——线性近似就是一个系数 $f'(x)$；
- **多元**：多个方向（如 $\\Delta x,\\Delta y$）的无穷小——线性近似是一个**向量**（梯度），各分量是偏导数。偏导数**都存在**只保证了**坐标方向**的变化率，但不足以保证**任意方向**的线性近似——故多元**偏导存在 $\\not\\Rightarrow$ 可微**。

**反例预告**：$f(x,y)=\\dfrac{xy}{x^2+y^2}\\ (f(0,0)=0)$ 在原点偏导数都存在但不可微——留待多元微分章节。`
  },

  // ── 第四章 §2 导数的意义和性质 · 教材模式卡片 ──────────────────
  {
    id: 'card-ma-c4-s2-n1',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s2-n1',
    question: `【几何 + 物理综合】请写出导数的几何意义，并推导抛物线 $y^2=2px\\ (p>0)$ 在点 $(x_0,y_0)$ 处"焦点连线与切线的夹角 $\\theta$ 等于切线与 $x$ 轴夹角 $\\theta_1$"的结论，由此说明抛物线的光学性质及其工程应用。`,
    answer: `**几何意义**：$f'(x_0)$ = 曲线 $y=f(x)$ 在 $(x_0,f(x_0))$ 处**切线斜率**，切线方程

$$y-f(x_0)=f'(x_0)(x-x_0).$$

---

**抛物线切线推导**：$y_0=\\sqrt{2px_0}$，切线斜率

$$\\tan\\theta_1=\\frac{\\sqrt{p}}{\\sqrt{2x_0}}=\\frac{p}{y_0}.$$

焦点 $\\left(\\dfrac{p}{2},0\\right)$ 与 $(x_0,y_0)$ 的连线斜率

$$\\tan\\theta_2=\\frac{y_0}{x_0-\\frac{p}{2}}.$$

由两角差公式：

$$\\tan\\theta=\\frac{\\tan\\theta_2-\\tan\\theta_1}{1+\\tan\\theta_2\\tan\\theta_1}=\\frac{p}{y_0}=\\tan\\theta_1.$$

即 $\\theta=\\theta_1$。$\\blacksquare$

---

**光学性质**（由反射定律：入射角 = 反射角）：

- 焦点发出的光线 → 经抛物面反射后**平行于对称轴**；
- 平行于对称轴的光线 → 经抛物面反射后**汇聚于焦点**。

**工程应用**：

- **探照灯**（焦点光源 → 远射平行光）；
- **太阳灶/卫星天线**（平行来光 → 聚焦受热/接收）；
- **汽车前照灯**、**抛物面雷达**。`
  },
  {
    id: 'card-ma-c4-s2-n2',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s2-n2',
    question: `【例题演练】请用**导数定义（差商有理化）**推导椭圆 $\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\ (a>b>0)$ 在 $(x_0,y_0)$ 处的切线方程（例 4.2.2），并说出椭圆的光学性质。`,
    answer: `**推导过程**：

设 $(x_0,y_0)$ 在上半平面，局部写 $y=f(x)=\\dfrac{b}{a}\\sqrt{a^2-x^2}$。用差商 + 有理化：

$$f'(x_0)=\\frac{b}{a}\\lim_{\\Delta x\\to 0}\\frac{\\sqrt{a^2-(x_0+\\Delta x)^2}-\\sqrt{a^2-x_0^2}}{\\Delta x}.$$

分子有理化得

$$f'(x_0)=\\frac{b}{a}\\lim_{\\Delta x\\to 0}\\frac{-2x_0-\\Delta x}{\\sqrt{a^2-(x_0+\\Delta x)^2}+\\sqrt{a^2-x_0^2}}=\\frac{b}{a}\\cdot\\frac{-x_0}{\\sqrt{a^2-x_0^2}}.$$

切线方程

$$y-y_0=\\frac{b}{a}\\cdot\\frac{-x_0}{\\sqrt{a^2-x_0^2}}(x-x_0).$$

利用 $y_0=\\dfrac{b}{a}\\sqrt{a^2-x_0^2}$ 化简两边：

$$\\boxed{\\ \\frac{x_0 x}{a^2}+\\frac{y_0 y}{b^2}=1.\\ }$$

这是解析几何中熟知的标准切线形式。

---

**椭圆光学性质**：从椭圆的**一个焦点**发出的任意光线，经椭圆反射后**必经过另一焦点**。

**实际应用**：医学**体外碎石机**——冲击波源置于一焦点，患者结石置于另一焦点，反射汇聚瓦解结石。

---

**对比总览**：

| 曲线 | 光学规律 |
|---|---|
| 抛物线 | 焦点 $\\leftrightarrow$ 平行光 |
| 椭圆 | 焦点 $\\leftrightarrow$ 另一焦点 |
| 双曲线 | 焦点 $\\leftrightarrow$ 另一焦点（发散/虚聚） |`
  },
  {
    id: 'card-ma-c4-s2-n3',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s2-n3',
    question: `【几何意义 + 应用】请说明微分 $dy=f'(x)\\,dx$ 的几何意义（与 $\\Delta y$ 的关系），并写出由此导出的**线性近似公式**。以 $\\sqrt{1.01}$ 为例做一次近似计算。`,
    answer: `**微分的几何意义**：

以 $dx$ 为底边、切线与 $x$ 轴夹角 $\\arctan f'(x)$ 为底角的**直角三角形的高**

$$dy=f'(x)\\,dx$$

近似代替真实函数增量

$$\\Delta y=f(x+\\Delta x)-f(x).$$

---

**三元关系图景**：

- $\\Delta y$：沿**曲线**走到 $(x+\\Delta x,f(x+\\Delta x))$ 的纵坐标变化；
- $dy$：沿**切线**走到 $x+dx$ 处的纵坐标变化；
- $\\Delta y-dy=o(dx)$：**曲线偏离切线**的高阶无穷小误差。

核心思想：**"以直代曲"**——在局部用切线替代曲线。

---

**线性近似公式**：

$$\\boxed{\\ f(x_0+\\Delta x)\\approx f(x_0)+f'(x_0)\\Delta x.\\ }$$

---

**例：计算 $\\sqrt{1.01}$**

取 $f(x)=\\sqrt{x},\\ x_0=1,\\ \\Delta x=0.01$。$f'(x)=\\dfrac{1}{2\\sqrt{x}},\\ f'(1)=\\dfrac{1}{2}$。

$$\\sqrt{1.01}\\approx\\sqrt{1}+\\frac{1}{2}\\cdot 0.01=1.005.$$

**精度**：真实值 $1.00498\\ldots$，误差约 $2\\times 10^{-5}=o(0.01)$——完全符合微分误差阶数。

**呼应第一宇宙速度**：舍弃的 $4.9^2=(\\Delta x)^2$ 即 $o(\\Delta x)$，保留的 $2R\\cdot 4.9=f'(R)\\cdot\\Delta x=dy$。`
  },
  {
    id: 'card-ma-c4-s2-n4',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s2-n4',
    question: `【定义 + 充要条件】请写出**左导数** $f'_-(x_0)$ 与**右导数** $f'_+(x_0)$ 的定义，并给出 $f(x)$ 在 $x_0$ 可导的充要条件。不可导的两种情形分别是什么？`,
    answer: `**左导数**：

$$f'_-(x_0)=\\lim_{\\Delta x\\to 0^-}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}.$$

**右导数**：

$$f'_+(x_0)=\\lim_{\\Delta x\\to 0^+}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}.$$

---

**可导充要条件**：

$$\\boxed{\\ f(x)\\text{ 在 }x_0\\text{ 可导}\\ \\Leftrightarrow\\ f'_-(x_0),\\,f'_+(x_0)\\text{ 都存在且相等}.\\ }$$

此时 $f'(x_0)=f'_-(x_0)=f'_+(x_0)$。

---

**不可导的两种情形**：

| 情形 | 表现 | 典例 | 几何 |
|---|---|---|---|
| 左右导数**至少一个不存在** | 单侧极限振荡 / $\\pm\\infty$ | $x\\sin\\tfrac{1}{x}$ 在 $0$ 右侧 | 单侧无切线 |
| 左右导数**都存在但不相等** | 有限跳跃 | $\\|x\\|$ 在 $0$ | 尖点（两条切线） |

---

**几何直观**：

- $f'_-(x_0)$ = 从**左侧**逼近的切线斜率；
- $f'_+(x_0)$ = 从**右侧**逼近的切线斜率；
- 可导 $\\Leftrightarrow$ 左右切线**重合**为一条。

**考研套路**：分段函数在分段点处可导性——先验连续，再比较左右导数（见例 4.2.5）。`
  },
  {
    id: 'card-ma-c4-s2-n5',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s2-n5',
    question: `【例题演练】请用左右导数定义证明 $f(x)=|x|$ 在 $x=0$ 处不可导（例 4.2.3），并列举三个类似"绝对值型不可导点"的推广函数。`,
    answer: `**证明**（分 $x<0,x>0$ 两段）：

**左导数**（$\\Delta x<0$ 时 $f(\\Delta x)=-\\Delta x$）：

$$f'_-(0)=\\lim_{\\Delta x\\to 0^-}\\frac{-\\Delta x-0}{\\Delta x}=\\lim_{\\Delta x\\to 0^-}(-1)=-1.$$

**右导数**（$\\Delta x>0$ 时 $f(\\Delta x)=\\Delta x$）：

$$f'_+(0)=\\lim_{\\Delta x\\to 0^+}\\frac{\\Delta x-0}{\\Delta x}=1.$$

**结论**：$f'_-(0)=-1\\ne 1=f'_+(0)$，左右导数都存在但**不相等**，故 $f(x)=|x|$ 在 $x=0$ **不可导**。$\\blacksquare$

**几何诠释**：$y=|x|$ 在 $x=0$ 形成 V 形**尖点**——左右切线斜率分别为 $-1,+1$，两条切线不重合。

---

**推广识别（三例）**：

1. **$f(x)=|x-a|$ 在 $x=a$ 不可导**（尖点平移）；
2. **$f(x)=|\\sin x|$ 在 $x=k\\pi$ 不可导**（每个零点都是尖点）；
3. **$f(x)=\\max\\{x,0\\}=\\dfrac{x+|x|}{2}$（ReLU）在 $x=0$ 不可导**（AI 神经网络激活函数背景）。

**通用口诀**：**绝对值符号内部过零 $\\Rightarrow$ 该处必然需要单独检查左右导数**。

**高阶技巧**：$|f(x)|$ 在 $f(x_0)=0$ 且 $f'(x_0)\\ne 0$ 处不可导，此时左右导数为 $\\pm|f'(x_0)|$。`
  },
  {
    id: 'card-ma-c4-s2-n6',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s2-n6',
    question: `【例题演练】请考察 $f(x)=\\begin{cases}x\\sin\\tfrac{1}{x}, & x>0\\\\ 0, & x\\le 0\\end{cases}$ 在 $x=0$ 处的可导性（例 4.2.4），并与例 4.2.3 的 $\\|x\\|$ 做关键区别对比。为什么此函数在 $x=0$ **连续**却**不可导**？`,
    answer: `**左导数**（$\\Delta x<0$ 时 $f(\\Delta x)=0$）：

$$f'_-(0)=\\lim_{\\Delta x\\to 0^-}\\frac{0-0}{\\Delta x}=0.$$

**右导数**（$\\Delta x>0$ 时 $f(\\Delta x)=\\Delta x\\sin\\tfrac{1}{\\Delta x}$）：

$$\\frac{f(\\Delta x)-f(0)}{\\Delta x}=\\frac{\\Delta x\\sin\\tfrac{1}{\\Delta x}}{\\Delta x}=\\sin\\frac{1}{\\Delta x}.$$

当 $\\Delta x\\to 0^+$ 时 $\\sin\\dfrac{1}{\\Delta x}$ 在 $[-1,1]$ 间**剧烈振荡**，极限**不存在**。

**结论**：$f'_+(0)$ 不存在，故 $f$ 在 $x=0$ **不可导**。$\\blacksquare$

---

**连续性验证**（$x=0$ 处）：

$$\\lim_{x\\to 0^+}x\\sin\\frac{1}{x}=0=f(0)$$

（有界 $\\sin\\tfrac{1}{x}$ 乘无穷小 $x$ $\\to 0$），$\\lim_{x\\to 0^-}f(x)=0$，故**连续**。

**但不可导**——是"**连续不蕴含可导**"的经典反例。

---

**与例 4.2.3 的关键区别**：

| | 例 4.2.3 $\\|x\\|$ | 例 4.2.4 $x\\sin\\tfrac{1}{x}$ |
|---|---|---|
| 左导数 | $-1$（存在） | $0$（存在） |
| 右导数 | $1$（存在） | **不存在**（振荡） |
| 切线状况 | 左右两切线均存在但不重合（尖点） | 右侧根本没有切线 |
| 不可导机制 | **跳跃型** | **振荡型** |

**几何直观**：$x\\sin\\tfrac{1}{x}$ 在 $x=0$ 右侧图像振幅趋 $0$ 却无限次穿越 $x$ 轴，曲线没有稳定的趋近方向——"**摆动不定的切线**"。`
  },
  {
    id: 'card-ma-c4-s2-n7',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s2-n7',
    question: `【例题演练】请确定参数 $a,b$，使 $f(x)=\\begin{cases}x^2+b, & x>2\\\\ ax+1, & x\\le 2\\end{cases}$ 在 $x=2$ 处可导（例 4.2.5），并总结此类分段函数参数确定问题的**标准套路**。`,
    answer: `**两步标准套路：① 先连续 ② 再求导**

---

**第一步（连续性）**：可导 $\\Rightarrow$ 连续。

$$\\lim_{x\\to 2^+}(x^2+b)=\\lim_{x\\to 2^-}(ax+1)=f(2),$$

得 $4+b=2a+1$。$\\quad(*)$

---

**第二步（左右导数相等）**：

**左导数**（$x\\le 2$，用 $ax+1,\\ f(2)=2a+1$）：

$$f'_-(2)=\\lim_{x\\to 2^-}\\frac{(ax+1)-(2a+1)}{x-2}=\\lim_{x\\to 2^-}\\frac{a(x-2)}{x-2}=a.$$

**右导数**（$x>2$，用 $x^2+b$，且 $f(2)=4+b$）：

$$f'_+(2)=\\lim_{x\\to 2^+}\\frac{(x^2+b)-(4+b)}{x-2}=\\lim_{x\\to 2^+}\\frac{x^2-4}{x-2}=4.$$

令 $f'_-(2)=f'_+(2)$：$a=4$。代入 $(*)$：$b=5$。

**结论**：$a=4,\\ b=5,\\ f'(2)=4$。$\\blacksquare$

---

**考研模板总结**：

- $n$ 个未知参数 $\\Rightarrow$ 需要 $n$ 个方程；
- 若要求**一阶可导**：连续性 + 一阶导左右相等 = $2$ 个方程；
- 若要求**二阶可导**：再加二阶导左右相等 = $3$ 个方程。

---

**常见陷阱**：

- **错误解法**：直接对两段分别求导后在分段点处代入并取相等（非严格）——本题碰巧对，但对更复杂函数（复合、嵌套）**会出错**，必须回到**定义**计算单侧导数；
- **遗漏连续性**：若直接写 $f'_-=f'_+$ 但 $f$ 在 $x=2$ 不连续，则左右导数定义本身就可能失效。`
  },
  {
    id: 'card-ma-c4-s2-n8',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s2-n8',
    question: `【辨析题】① 请写出 $f(x)$ 在**闭区间** $[a,b]$ 可导的定义；② 以上半椭圆 $f(x)=\\dfrac{b}{a}\\sqrt{a^2-x^2}$ 为例说明"单侧导数为 $\\pm\\infty$"与"单侧导数极限不存在（振荡）"两种情况在**切线存在性**上的本质区别。`,
    answer: `**① 闭区间可导的定义**：

若 $y=f(x)$ 在 $[a,b]$ 上定义，在开区间 $(a,b)$ 可导，且**左端点的右导数** $f'_+(a)$ 与**右端点的左导数** $f'_-(b)$ **都存在（即有限）**，则称 $f(x)$ 在闭区间 $[a,b]$ 上可导。

---

**② 上半椭圆端点分析**：

对 $f(x)=\\dfrac{b}{a}\\sqrt{a^2-x^2}$：

$$f'_-(a)=-\\infty,\\qquad f'_+(-a)=+\\infty.$$

端点**单侧导数为 $\\pm\\infty$**（非有限数）$\\Rightarrow$ 不是可导定义下的"存在"$\\Rightarrow$ $f$ 的可导区间为 $(-a,a)$，**不含** $x=\\pm a$。

但若改 $g(x)=(a^2-x^2)^{3/2}$，端点单侧导数 $=0$（有限），故 $g$ 在**闭区间** $[-a,a]$ 可导。

---

**核心辨析：切线存在 $\\ne$ 可导**

| 情形 | 典例 | 单侧导数 | 切线是否存在 |
|---|---|---|---|
| $\\pm\\infty$ 型 | 上半椭圆于 $x=\\pm a$ | $\\pm\\infty$ | **存在**（竖直切线，倾角 $\\dfrac{\\pi}{2}$） |
| 振荡型 | $x\\sin\\tfrac{1}{x}$ 于 $x=0$ 右侧 | 不存在 | **根本不存在**（曲线无趋近方向） |

**几何本质**：

- **$\\pm\\infty$ 型**：曲线有切线，只是切线**竖直**，超出 $y=kx+b$ 型可导框架；
- **振荡型**：曲线不存在趋近切线方向。

---

**考研警示**：

- **可导** 要求单侧导数是**有限数**且**相等**；
- **有切线**（广义几何）允许切线竖直，是更弱的概念；
- 两者**必须严格区分**——尤其在讨论隐函数、参数曲线切线时。

**补充**：竖直切线的直接判据是 $\\lim_{x\\to x_0}f'(x)=\\pm\\infty$（导函数在端点处发散）。`
  },

  // ── 第四章 §3 导数四则运算和反函数求导法则 · 教材模式卡片 ──────────────────
  {
    id: 'card-ma-c4-s3-n1',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s3-n1',
    question: `【方法论】请说明从定义出发求导的两条等价路径（差商极限 / 微分等价关系），并写出常数函数的导数。核心套路"等价无穷小代换法"能借助哪四大等价关系快速推导基本初等函数导数？`,
    answer: `**两条等价路径**：

1. **差商极限**：$f'(x)=\\lim_{\\Delta x\\to 0}\\dfrac{f(x+\\Delta x)-f(x)}{\\Delta x}$；
2. **微分等价关系**：$\\Delta y=f'(x)\\Delta x+o(\\Delta x)$——从"线性主部 + 高阶无穷小"读出 $f'(x)$。

两路径等价（定理 4.1.1），可按便利选用。

---

**常数函数**：$y=C$ 时 $\\Delta y=0$，故

$$\\boxed{\\ (C)'=0,\\qquad d(C)=0.\\ }$$

---

**四大核心等价（$u\\to 0$）**：

$$\\sin u\\sim u,\\quad \\ln(1+u)\\sim u,\\quad e^u-1\\sim u,\\quad (1+u)^\\alpha-1\\sim\\alpha u.$$

配合三角 / 对数 / 指数的恒等变形，可以**低代价**导出所有基本初等函数导数。

**方法论意义**：虽然定义法能求导，但对非简单函数效率太低，必须建立**求导法则**（四则、反函数、复合）作为**机械化工具**——这正是本节主线。`
  },
  {
    id: 'card-ma-c4-s3-n2',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s3-n2',
    question: `【例题演练】请用定义（差商极限 + 和差化积 + 等价无穷小 $\\sin u\\sim u$）推导 $(\\sin x)'=\\cos x$，并写出 $(\\cos x)'$。归纳三角函数导数循环周期。`,
    answer: `**推导 $(\\sin x)'$**：和差化积

$$\\sin(x+\\Delta x)-\\sin x=2\\cos\\!\\left(x+\\frac{\\Delta x}{2}\\right)\\sin\\frac{\\Delta x}{2}.$$

由 $\\cos$ 连续性与 $\\sin\\dfrac{\\Delta x}{2}\\sim\\dfrac{\\Delta x}{2}$：

$$\\lim_{\\Delta x\\to 0}\\frac{\\sin(x+\\Delta x)-\\sin x}{\\Delta x}=\\lim_{\\Delta x\\to 0}\\cos\\!\\left(x+\\frac{\\Delta x}{2}\\right)\\cdot\\lim_{\\Delta x\\to 0}\\frac{\\sin\\tfrac{\\Delta x}{2}}{\\tfrac{\\Delta x}{2}}=\\cos x.$$

$$\\boxed{\\ (\\sin x)'=\\cos x.\\ }$$

---

**同理**：$\\boxed{(\\cos x)'=-\\sin x.}$

---

**三角函数导数循环周期为 4**：

$$\\sin\\xrightarrow{\\ '\\ }\\cos\\xrightarrow{\\ '\\ }-\\sin\\xrightarrow{\\ '\\ }-\\cos\\xrightarrow{\\ '\\ }\\sin\\xrightarrow{\\ '\\ }\\cdots$$

**记忆诀**："**正化余，余化负正**"——即 $(\\sin)'\\to\\cos$（正），$(\\cos)'\\to-\\sin$（负）。

**核心技巧**：

- **和差化积**把 $\\Delta$-差化为**乘积**（产生 $\\sin\\tfrac{\\Delta x}{2}$ 因子）；
- **等价代换** $\\sin u\\sim u$ 消掉无穷小；
- **连续性**保证外层函数的自由代入。`
  },
  {
    id: 'card-ma-c4-s3-n3',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s3-n3',
    question: `【例题演练】请推导三个基本初等函数的导数：① $(\\ln x)'$（例 4.3.2）；② $(e^x)'$ 与 $(a^x)'$（例 4.3.3，并说明"为何以 $e$ 为底"）；③ $(x^a)'\\ (x>0)$（例 4.3.4，并讨论 $x^{1/2},x^{2/3}$ 等的实际可导范围）。`,
    answer: `**① $(\\ln x)'$**：由 $\\ln\\!\\left(1+\\dfrac{\\Delta x}{x}\\right)\\sim\\dfrac{\\Delta x}{x}$：

$$\\lim_{\\Delta x\\to 0}\\frac{\\ln(x+\\Delta x)-\\ln x}{\\Delta x}=\\frac{1}{x}\\cdot 1=\\boxed{\\frac{1}{x}.}$$

---

**② $(e^x)'$ 与 $(a^x)'$**：由 $e^{\\Delta x}-1\\sim\\Delta x$：

$$\\lim\\frac{e^{x+\\Delta x}-e^x}{\\Delta x}=e^x\\cdot 1=\\boxed{e^x.}$$

$$\\boxed{(a^x)'=(\\ln a)a^x.}$$

**$e$ 为底的本质原因**：$y=e^x$ 的导数**恰等于它自己**——故微分方程 $y'=y$ 的所有解为 $y=Ce^x$。这是高等数学中**优先使用 $e$ 作底**的深层原因（各类变化率方程的最简形式）。

---

**③ $(x^a)'$**：由 $(1+u)^a-1\\sim au$：

$$\\lim\\frac{(x+\\Delta x)^a-x^a}{\\Delta x}=\\lim\\frac{x^a[(1+\\tfrac{\\Delta x}{x})^a-1]}{\\Delta x}=x^{a-1}\\cdot a=\\boxed{ax^{a-1}.}$$

**具体情形下的定义域 vs 可导范围**：

| 形式 | 定义域 | 可导范围 |
|---|---|---|
| $x^n\\ (n\\in\\mathbf{N^+})$ | $(-\\infty,+\\infty)$ | $(-\\infty,+\\infty)$ |
| $\\dfrac{1}{x^n}$ | $(-\\infty,0)\\cup(0,+\\infty)$ | 同 |
| $x^{2/3}$ | $(-\\infty,+\\infty)$ | $(-\\infty,0)\\cup(0,+\\infty)$，$x=0$ 不可导 |
| $\\sqrt{x}=x^{1/2}$ | $[0,+\\infty)$ | $(0,+\\infty)$，$x=0$ 处单侧导 $+\\infty$ |`
  },
  {
    id: 'card-ma-c4-s3-n4',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s3-n4',
    question: `【定理默写】请写出求导的**线性运算法则**（定理 4.3.1）及其微分形式，由极限线性性给出证明思路。利用此法则 + 对数恒等式 $\\log_a x=\\dfrac{\\ln x}{\\ln a}$ 推出 $(\\log_a x)'$。`,
    answer: `**定理 4.3.1**：$f,g$ 可导，$c_1,c_2$ 常数，则

$$\\boxed{\\ [c_1 f(x)+c_2 g(x)]'=c_1 f'(x)+c_2 g'(x).\\ }$$

**微分形式**：$d[c_1 f+c_2 g]=c_1\\,df+c_2\\,dg$。

---

**证明**：差商拆分 + 极限线性性

$$\\lim_{\\Delta x\\to 0}\\frac{[c_1 f(x+\\Delta x)+c_2 g(x+\\Delta x)]-[c_1 f(x)+c_2 g(x)]}{\\Delta x}$$

$$=c_1\\lim\\frac{f(x+\\Delta x)-f(x)}{\\Delta x}+c_2\\lim\\frac{g(x+\\Delta x)-g(x)}{\\Delta x}=c_1 f'+c_2 g'.\\quad\\blacksquare$$

---

**推出 $(\\log_a x)'$**：由 $\\log_a x=\\dfrac{1}{\\ln a}\\cdot\\ln x$（$\\ln a$ 为常数因子），

$$\\boxed{\\ (\\log_a x)'=\\frac{1}{\\ln a}\\cdot\\frac{1}{x}=\\frac{1}{x\\ln a}.\\ }$$

---

**例 4.3.5**：$y=5\\log_a x+3\\sqrt{x}$：

$$y'=5\\cdot\\frac{1}{x\\ln a}+3\\cdot\\frac{1}{2\\sqrt{x}}=\\frac{5}{x\\ln a}+\\frac{3}{2\\sqrt{x}}.$$

**核心价值**：把复杂函数**线性拆分**为已知求导公式的**组件和**——机械式求解。`
  },
  {
    id: 'card-ma-c4-s3-n5',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s3-n5',
    question: `【定理默写】请写出「乘积求导法则」（定理 4.3.2）及其微分形式，简述其**插项证明**的核心技巧。并用之求 $y=3^x\\cos x$（例 4.3.6）与 $y=\\dfrac{\\sin x}{x}$（例 4.3.7）的导数。`,
    answer: `**定理 4.3.2（乘积法则）**：$f,g$ 可导，则

$$\\boxed{\\ [f(x)g(x)]'=f'(x)g(x)+f(x)g'(x).\\ }$$

**口诀**：**"前导后不导 + 前不导后导"**。

**微分形式**：$d(fg)=g\\,df+f\\,dg$。

---

**证明要点（插项 $f(x+\\Delta x)g(x)$ + $f$ 连续）**：

$$\\frac{f(x+\\Delta x)g(x+\\Delta x)-f(x)g(x)}{\\Delta x}=f(x+\\Delta x)\\cdot\\frac{g(x+\\Delta x)-g(x)}{\\Delta x}+g(x)\\cdot\\frac{f(x+\\Delta x)-f(x)}{\\Delta x}.$$

令 $\\Delta x\\to 0$，由 $f$ 可导 $\\Rightarrow$ $f$ 连续 $\\Rightarrow$ $f(x+\\Delta x)\\to f(x)$，得结论。$\\blacksquare$

---

**例 4.3.6**：$y=3^x\\cos x$

$$y'=(\\ln 3)3^x\\cos x+3^x(-\\sin x)=3^x(\\ln 3\\cdot\\cos x-\\sin x).$$

**例 4.3.7**：$y=\\sin x\\cdot x^{-1}$

$$y'=\\cos x\\cdot\\frac{1}{x}+\\sin x\\cdot\\left(-\\frac{1}{x^2}\\right)=\\frac{x\\cos x-\\sin x}{x^2}.$$

---

**绝对错误**：$(fg)'\\ne f'\\cdot g'$ —— 必须严格"前导后不导 + 前不导后导"相加。`
  },
  {
    id: 'card-ma-c4-s3-n6',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s3-n6',
    question: `【定理默写】请写出「倒数法则」（定理 4.3.3）与由此推出的「商法则推论」。利用这些法则推导 $(\\sec x)',\\ (\\tan x)'$。`,
    answer: `**倒数法则（定理 4.3.3）**：$g\\ne 0$ 且可导：

$$\\boxed{\\ \\left[\\frac{1}{g(x)}\\right]'=-\\frac{g'(x)}{[g(x)]^2}.\\ }$$

---

**商法则推论**：$f,g$ 可导，$g\\ne 0$：

$$\\boxed{\\ \\left[\\frac{f(x)}{g(x)}\\right]'=\\frac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}.\\ }$$

**推导**：$\\dfrac{f}{g}=f\\cdot\\dfrac{1}{g}$ + 乘积法则 + 倒数法则。

**口诀**：**"分子导分母 − 分子分母导，全部除以分母方"**。

---

**应用 1：$(\\sec x)'$**

$$\\sec x=\\frac{1}{\\cos x}\\Rightarrow(\\sec x)'=-\\frac{(\\cos x)'}{\\cos^2 x}=\\frac{\\sin x}{\\cos^2 x}=\\boxed{\\tan x\\sec x.}$$

**同理**：$(\\csc x)'=-\\cot x\\csc x$。

---

**应用 2：$(\\tan x)'$**

$$\\tan x=\\frac{\\sin x}{\\cos x}\\Rightarrow(\\tan x)'=\\frac{\\cos^2 x+\\sin^2 x}{\\cos^2 x}=\\boxed{\\sec^2 x.}$$

**同理**：$(\\cot x)'=-\\csc^2 x$。

---

**考研提醒**：$\\sec,\\csc$ 类导数的公式**不对称**，有的教材写 $\\sec x\\tan x$，有的写 $\\tan x\\sec x$，顺序不影响结果；注意**符号**（$\\csc$ 系带负号）。`
  },
  {
    id: 'card-ma-c4-s3-n7',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s3-n7',
    question: `【定理默写】请写出「反函数求导定理」（定理 4.3.4）的完整叙述与四要条件，并说明其证明思路。应用策略是什么？`,
    answer: `**定理 4.3.4（反函数求导）**：若 $y=f(x)$ 在 $(a,b)$ 上

① **连续** ② **严格单调** ③ **可导** ④ $f'(x)\\ne 0$

记 $\\alpha=\\min(f(a+),f(b-)),\\ \\beta=\\max(f(a+),f(b-))$，则反函数 $x=f^{-1}(y)$ 在 $(\\alpha,\\beta)$ 上可导，且

$$\\boxed{\\ [f^{-1}(y)]'=\\frac{1}{f'(x)}.\\ }$$

**微分形式**：$\\dfrac{dx}{dy}=\\dfrac{1}{dy/dx}$——这是"微商"视角下倒置直观的严格依据。

---

**证明思路**：

- 由 ①② + 反函数连续定理 $\\Rightarrow$ $f^{-1}$ 在 $(\\alpha,\\beta)$ 存在、连续、严格单调；
- 严格单调 + 连续 $\\Rightarrow$ $\\Delta y\\ne 0\\Leftrightarrow\\Delta x\\ne 0$，$\\Delta y\\to 0\\Leftrightarrow\\Delta x\\to 0$；
- 差商互为倒数：

$$[f^{-1}(y)]'=\\lim_{\\Delta y\\to 0}\\frac{\\Delta x}{\\Delta y}=\\lim_{\\Delta x\\to 0}\\frac{1}{\\Delta y/\\Delta x}=\\frac{1}{f'(x)}.\\quad\\blacksquare$$

---

**应用策略（三步走）**：

1. **身份互换**：把原函数与反函数身份对调，先求原函数（更易求）的导数；
2. **取倒数**：得到反函数导数；
3. **回代**：用 $x=f^{-1}(y)$ 把结果中的 $x$ 翻译为 $y$ 的表达式，统一自变量。

**典型应用**：反三角函数、反双曲函数、反幂函数。

**四要条件的必要性**：缺 $f'\\ne 0$ 会导致反函数导数无穷大（竖直切线）；缺严格单调会导致反函数不存在。`
  },
  {
    id: 'card-ma-c4-s3-n8',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s3-n8',
    question: `【例题演练】请用反函数求导定理推导 $(\\arctan x)',\\ (\\arcsin x)'$（例 4.3.10）。同理写出 $(\\arccos x)',\\ (\\operatorname{arccot}x)'$，并总结"co 系口诀"。`,
    answer: `**$(\\arctan x)'$**：设 $y=\\arctan x\\Leftrightarrow x=\\tan y$，$y\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$。

$$(\\tan y)'=\\sec^2 y=1+\\tan^2 y=1+x^2,$$

$$\\boxed{\\ (\\arctan x)'=\\frac{1}{(\\tan y)'}=\\frac{1}{1+x^2}.\\ }$$

---

**$(\\arcsin x)'$**：设 $y=\\arcsin x\\Leftrightarrow x=\\sin y,\\ y\\in\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$，$\\cos y\\ge 0$：

$$(\\sin y)'=\\cos y=\\sqrt{1-\\sin^2 y}=\\sqrt{1-x^2},$$

$$\\boxed{\\ (\\arcsin x)'=\\frac{1}{\\sqrt{1-x^2}}.\\ }$$

---

**反三角函数导数大表**：

| 正系（正号） | 反系（负号） |
|---|---|
| $(\\arcsin x)'=\\dfrac{1}{\\sqrt{1-x^2}}$ | $(\\arccos x)'=-\\dfrac{1}{\\sqrt{1-x^2}}$ |
| $(\\arctan x)'=\\dfrac{1}{1+x^2}$ | $(\\operatorname{arccot}x)'=-\\dfrac{1}{1+x^2}$ |

---

**"co 系"口诀**：

- **带 co 前缀**（$\\cos,\\cot$ 的反函数）导数**带负号**；
- **不带 co 前缀**（$\\sin,\\tan$ 的反函数）导数**为正**。

**备注**：$\\arcsin+\\arccos=\\dfrac{\\pi}{2}$，$\\arctan+\\operatorname{arccot}=\\dfrac{\\pi}{2}$——两边求导即可推出"co 系"负号。

**易错**：$\\arcsin x$ 定义域 $[-1,1]$，但**可导区间**为开区间 $(-1,1)$——端点 $x=\\pm 1$ 处单侧导数 $\\to\\pm\\infty$（竖直切线）。`
  },
  {
    id: 'card-ma-c4-s3-n9',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s3-n9',
    question: `【例题演练】请写出双曲函数的定义与核心恒等式 $\\operatorname{ch}^2 x-\\operatorname{sh}^2 x=1$，并推出 $(\\operatorname{sh}x)',\\ (\\operatorname{ch}x)'$（例 4.3.11）。对比三角函数导数，指出符号差异。再用反函数法则推出 $(\\operatorname{sh}^{-1}x)'$。`,
    answer: `**双曲函数定义**：

$$\\operatorname{sh}x=\\frac{e^x-e^{-x}}{2},\\quad \\operatorname{ch}x=\\frac{e^x+e^{-x}}{2},\\quad \\operatorname{th}x=\\frac{\\operatorname{sh}x}{\\operatorname{ch}x}.$$

**核心恒等式**：$\\operatorname{ch}^2 x-\\operatorname{sh}^2 x=1$（与 $\\cos^2+\\sin^2=1$ 差一个符号）。

---

**预备**：$(e^{-x})'=-e^{-x}$（由倒数法则）。

**$(\\operatorname{sh}x)',(\\operatorname{ch}x)'$**：

$$(\\operatorname{sh}x)'=\\left(\\frac{e^x-e^{-x}}{2}\\right)'=\\frac{e^x+e^{-x}}{2}=\\boxed{\\operatorname{ch}x.}$$

$$(\\operatorname{ch}x)'=\\boxed{\\operatorname{sh}x\\ (\\text{无负号!}).}$$

$(\\operatorname{th}x)'=\\dfrac{1}{\\operatorname{ch}^2 x}=\\operatorname{sech}^2 x$。

---

**与三角函数对比**：

| 三角 | 双曲 |
|---|---|
| $(\\sin)'=\\cos$ | $(\\operatorname{sh})'=\\operatorname{ch}$ |
| $(\\cos)'=-\\sin$ | $(\\operatorname{ch})'=+\\operatorname{sh}$ **（无负号！）** |
| $(\\tan)'=\\sec^2$ | $(\\operatorname{th})'=\\operatorname{sech}^2$ |

**本质**：双曲与三角的差异来自 $\\operatorname{ch}^2-\\operatorname{sh}^2=1$ vs $\\cos^2+\\sin^2=1$（符号 $-$ vs $+$）。

---

**$(\\operatorname{sh}^{-1}x)'$**：$y=\\operatorname{sh}^{-1}x\\Leftrightarrow x=\\operatorname{sh}y$。

$$(\\operatorname{sh}y)'=\\operatorname{ch}y=\\sqrt{1+\\operatorname{sh}^2 y}=\\sqrt{1+x^2},$$

$$\\boxed{\\ (\\operatorname{sh}^{-1}x)'=\\frac{1}{\\sqrt{1+x^2}}.\\ }$$

**同理**：$(\\operatorname{ch}^{-1}x)'=\\dfrac{1}{\\sqrt{x^2-1}},\\ (\\operatorname{th}^{-1}x)'=\\dfrac{1}{1-x^2}$。

**深层关联**：$\\cos(ix)=\\operatorname{ch}x,\\ \\sin(ix)=i\\operatorname{sh}x$——双曲函数是三角函数在**虚轴**上的对应，导数关系在此映射下自然对偶。`
  },
  {
    id: 'card-ma-c4-s3-n10',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s3-n10',
    question: `【速查速写】请默写基本初等函数导数公式表的核心条目：① 幂、指、对；② 六个三角；③ 四个反三角；④ 三个双曲 + 三个反双曲。并指出"除有限个点外，初等函数的导函数仍为初等函数"的意义及例外情况。`,
    answer: `**必背公式（分类）**：

**① 幂指对**：

$$(x^\\alpha)'=\\alpha x^{\\alpha-1};\\ (a^x)'=\\ln a\\cdot a^x;\\ (e^x)'=e^x;\\ (\\log_a x)'=\\frac{1}{x\\ln a};\\ (\\ln x)'=\\frac{1}{x}.$$

**② 六个三角**：

$$(\\sin x)'=\\cos x,\\ (\\cos x)'=-\\sin x,$$

$$(\\tan x)'=\\sec^2 x,\\ (\\cot x)'=-\\csc^2 x,$$

$$(\\sec x)'=\\tan x\\sec x,\\ (\\csc x)'=-\\cot x\\csc x.$$

**③ 四个反三角**：

$$(\\arcsin x)'=\\frac{1}{\\sqrt{1-x^2}},\\ (\\arccos x)'=-\\frac{1}{\\sqrt{1-x^2}},$$

$$(\\arctan x)'=\\frac{1}{1+x^2},\\ (\\operatorname{arccot}x)'=-\\frac{1}{1+x^2}.$$

**④ 双曲 + 反双曲**：

$$(\\operatorname{sh}x)'=\\operatorname{ch}x,\\ (\\operatorname{ch}x)'=\\operatorname{sh}x,\\ (\\operatorname{th}x)'=\\operatorname{sech}^2 x,$$

$$(\\operatorname{sh}^{-1}x)'=\\frac{1}{\\sqrt{1+x^2}},\\ (\\operatorname{ch}^{-1}x)'=\\frac{1}{\\sqrt{x^2-1}},\\ (\\operatorname{th}^{-1}x)'=\\frac{1}{1-x^2}.$$

---

**"导函数仍为初等函数"的意义**：所有基本初等函数的**导函数**都是**基本初等函数的有限次四则运算与复合**——故在定义域内（除有限点外）**不仅可导且导函数连续**。

**例外点**：$y=\\sqrt[3]{x^2}$ 在 $(-\\infty,+\\infty)$ 连续，但 $y'=\\dfrac{2}{3\\sqrt[3]{x}}$ 在 $x=0$ 无定义——**可导范围 $\\subsetneq$ 定义域**。

**工程口诀**：**熟记 + 用法则 + 四则复合组装**——考研中一般不需从定义求导。`
  },
  {
    id: 'card-ma-c4-s3-n11',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s3-n11',
    question: `【定理默写】请写出线性组合法则与乘积法则的**多函数推广**，并用数学归纳法简述乘积推广的证明思路。用这两个推广公式求 $n$ 次多项式的导数结构（例 4.3.12）。`,
    answer: `**(1) 多函数线性组合**：

$$\\boxed{\\ \\left[\\sum_{i=1}^n c_i f_i(x)\\right]'=\\sum_{i=1}^n c_i f_i'(x).\\ }$$

---

**(2) 多函数乘积**：

$$\\boxed{\\ \\left[\\prod_{i=1}^n f_i(x)\\right]'=\\sum_{j=1}^n f_j'(x)\\prod_{i\\ne j}f_i(x).\\ }$$

即**对每个因子依次求导，保持其他因子不变，再求和**。

$n=3$ 展开：$(fgh)'=f'gh+fg'h+fgh'$。

---

**数学归纳法证明乘积推广**：

- **$n=2$**：即定理 4.3.2 原始乘积法则；
- **归纳假设 $n=k$ 成立**；
- **$n=k+1$**：

$$\\left[\\prod_{i=1}^{k+1}f_i\\right]'=\\left[\\left(\\prod_{i=1}^k f_i\\right)f_{k+1}\\right]'=\\left(\\prod_{i=1}^k f_i\\right)'f_{k+1}+\\left(\\prod_{i=1}^k f_i\\right)f_{k+1}'$$

（用 $n=2$ 乘积法则），再对前项用归纳假设展开即得。$\\blacksquare$

---

**例 4.3.12（$n$ 次多项式）**：$y=a_n x^n+a_{n-1}x^{n-1}+\\cdots+a_0$

$$y'=a_n\\cdot nx^{n-1}+a_{n-1}(n-1)x^{n-2}+\\cdots+a_1.$$

**结论**：**$n$ 次多项式的导数是 $(n-1)$ 次多项式**。

**高阶推论**：$n$ 次多项式连续求导 $n$ 次后变为常数 $n!\\,a_n$，第 $n+1$ 次起**全为零**。`
  },
  {
    id: 'card-ma-c4-s3-n12',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s3-n12',
    question: `【例题演练】请用三因子乘积法则求 $y=e^x(x^2+3x-1)\\arcsin x$ 的导数（例 4.3.13），并归纳考研四则运算综合题的**解题通用流程**及**常见陷阱**。`,
    answer: `**三因子乘积求导**：

$$y'=(e^x)'(x^2+3x-1)\\arcsin x+e^x(x^2+3x-1)'\\arcsin x+e^x(x^2+3x-1)(\\arcsin x)'$$

$$=e^x(x^2+3x-1)\\arcsin x+e^x(2x+3)\\arcsin x+e^x(x^2+3x-1)\\cdot\\frac{1}{\\sqrt{1-x^2}}.$$

**合并同类项**（提 $e^x$）：

$$\\boxed{\\ y'=e^x\\!\\left[(x^2+5x+2)\\arcsin x+\\frac{x^2+3x-1}{\\sqrt{1-x^2}}\\right].\\ }$$

（注：$(x^2+3x-1)+(2x+3)=x^2+5x+2$。）

---

**解题通用流程（考研四则综合题）**：

1. **结构分析**：先看最外层是"加减 / 乘除 / 复合"哪种；
2. **拆解**：按**线性法则**或**乘积 / 商法则**分解为单项；
3. **代入**：每单项用基本初等函数导数公式表查导数；
4. **化简**：提公因子、合并同类项、通分——**这是得分关键**。

---

**常见陷阱**：

| 陷阱 | 示例 / 避免方法 |
|---|---|
| **遗漏因子** | 三因子乘积容易遗漏一项——按"每个因子轮流求导"模板依次写出 |
| **符号错** | $\\cos',\\operatorname{arccot}',\\arccos'$ 等 "co 系" 带负号——**co 系必有负号** |
| **定义域** | 结果含 $\\sqrt{1-x^2},\\ \\ln x$ 等要求 $x\\in(-1,1),\\ x>0$——必须注明 |
| **化简不彻底** | 答案停在"三项相加"——提公因子、通分后才完整 |

**考研提醒**：化简质量直接影响得分，不可"推到最后一步就交卷"。`
  },

  // ── 第四章 §4 复合函数求导法则及其应用 · 教材模式卡片 ──────────────────
  {
    id: 'card-ma-c4-s4-n1',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s4-n1',
    question: `【定理默写】请写出「复合函数求导法则」（定理 4.4.1）的完整叙述、Leibniz 形式、微分形式，并简述**如何处理 $\\Delta u=0$ 的特殊情形**的证明细节。`,
    answer: `**定理 4.4.1（链式法则）**：$u=g(x)$ 在 $x_0$ 可导，$y=f(u)$ 在 $u_0=g(x_0)$ 可导，则

$$\\boxed{\\ [f(g(x))]'\\big|_{x=x_0}=f'(u_0)g'(x_0)=f'(g(x_0))g'(x_0).\\ }$$

**Leibniz 形式**：$\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}$。

**微分形式**：$d[f(g(x))]=f'(u)g'(x)dx$。

---

**证明要点**：由 $f$ 在 $u_0$ 可微，$\\forall\\,\\Delta u\\ne 0$：

$$f(u_0+\\Delta u)-f(u_0)=f'(u_0)\\Delta u+\\alpha\\Delta u,\\quad\\lim_{\\Delta u\\to 0}\\alpha=0.$$

**关键处理**：当 $\\Delta u=0$ 时**约定** $\\alpha=0$——这样上式在 $\\Delta u=0$ 时也自动成立（左边 $=0$，右边 $=f'(u_0)\\cdot 0+0\\cdot 0=0$），从而**避免了分式 $\\Delta y/\\Delta x$ 在 $\\Delta u=0$ 时出现 "$0/0$" 的尴尬**。

取 $\\Delta u=g(x_0+\\Delta x)-g(x_0)$，两边除以 $\\Delta x$：

$$\\frac{f(g(x_0+\\Delta x))-f(g(x_0))}{\\Delta x}=f'(u_0)\\frac{\\Delta u}{\\Delta x}+\\alpha\\frac{\\Delta u}{\\Delta x}.$$

令 $\\Delta x\\to 0$：$\\dfrac{\\Delta u}{\\Delta x}\\to g'(x_0)$，$\\alpha\\to 0$（$\\Delta u\\to 0$），得

$$[f(g(x))]'=f'(u_0)g'(x_0).\\quad\\blacksquare$$

---

**为什么 $\\Delta u=0$ 要特别处理**：$g$ 可能在 $x_0$ 附近取常值段（如阶梯型），此时 $\\Delta u=0$ 但 $\\Delta x\\ne 0$——若没有 $\\alpha=0$ 的约定，证明中的"$\\alpha=\\dfrac{\\Delta y-f'(u_0)\\Delta u}{\\Delta u}$"会除以零。约定后结果自然平凡成立。`
  },
  {
    id: 'card-ma-c4-s4-n2',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s4-n2',
    question: `【例题演练】请用链式法则重推幂函数 $y=x^a\\ (x>0)$ 的导数（例 4.4.1），并说明相比 §3 定义法推导的优势。"对数恒等式 $A=e^{\\ln A}$" 的万能作用何在？`,
    answer: `**解**（链式法则路径）：

由对数恒等式 $x^a=e^{a\\ln x}$，视为复合

$$\\begin{cases}y=e^u,\\\\ u=a\\ln x.\\end{cases}$$

由链式法则：

$$(x^a)'=(e^u)'\\big|_{u=a\\ln x}\\cdot(a\\ln x)'=e^{a\\ln x}\\cdot\\frac{a}{x}=x^a\\cdot\\frac{a}{x}=\\boxed{ax^{a-1}.}$$

---

**与 §3 定义法的对比**：

| 方法 | 所需工具 | 特点 |
|---|---|---|
| 定义法（例 4.3.4） | 二项式 $(1+u)^a-1\\sim au$ | 直接但套路死板，难以推广 |
| 链式法则 | $e^x,\\ \\ln x$ 求导 + 对数恒等式 | **灵活、可推广**（处理 $x^{\\sin x}$ 等） |

---

**"对数恒等式 $A=e^{\\ln A}$" 的万能作用**：

这是**处理幂、幂指、根式等复杂函数的万能钥匙**——把幂结构"指数化"后可以直接应用已熟知的 $e^x,\\ \\ln$ 求导规则。

**推广示例**：

- $a^x=e^{x\\ln a}\\Rightarrow(a^x)'=e^{x\\ln a}\\cdot\\ln a=(\\ln a)a^x$；
- $x^{\\sin x}=e^{\\sin x\\ln x}\\Rightarrow$ 幂指函数直接链式求导（也可取对数，两者殊途同归）。

**记忆口诀**：**"先外后内，逐层相乘"**——外函数求导 + 保留中间变量 + 乘中间变量对自变量的导数。`
  },
  {
    id: 'card-ma-c4-s4-n3',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s4-n3',
    question: `【例题演练】请用链式法则求 $y=e^{\\cos x},\\ y=e^{-x}$（例 4.4.2 及副产物），并说明"熟练化简写"技巧（省略显式 $u$）。应用于正弦波 $y=A\\sin(\\omega t+\\varphi)$ 求导。`,
    answer: `**例 4.4.2**：$y=e^{\\cos x}$，取 $u=\\cos x$：

$$y'=(e^u)'\\big|_{u=\\cos x}\\cdot(\\cos x)'=e^{\\cos x}\\cdot(-\\sin x)=\\boxed{-e^{\\cos x}\\sin x.}$$

---

**副产物**：$y=e^{-x}$，取 $u=-x$：

$$(e^{-x})'=e^{-x}\\cdot(-1)=-e^{-x}.$$

这就是例 4.3.11 求双曲函数导数时用到的结果——链式法则**统一推导**。

---

**熟练化简写**：运算熟练后可**省略显式变量 $u$**，直接"外函数求导后自动保留中间结构"：

$$(\\sqrt{1+x^2})'=\\frac{1}{2\\sqrt{1+x^2}}\\cdot(1+x^2)'=\\frac{x}{\\sqrt{1+x^2}}.$$

$$[\\ln(\\sin x)]'=\\frac{1}{\\sin x}\\cdot\\cos x=\\cot x.$$

---

**链式法则实用口诀**：**"由外向内，依次求导，层层相乘"**。

每到一层：

① 把内层视为整体，对外层求导；

② 再乘以内层对自变量的导数。

---

**正弦波应用**：$y=A\\sin(\\omega t+\\varphi)$，取 $u=\\omega t+\\varphi$：

$$y'=A\\cos(\\omega t+\\varphi)\\cdot\\omega=\\boxed{A\\omega\\cos(\\omega t+\\varphi).}$$

此即**交流电路、振动力学、波动**中的核心公式——瞬时电压 / 位移的变化率。

**深层**：$\\sin$ 平移 $\\pi/2$ 得 $\\cos$，所以速度与位移相差 $\\pi/2$ 相位——这是谐振动的经典结论。`
  },
  {
    id: 'card-ma-c4-s4-n4',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s4-n4',
    question: `【定理默写 + 例题】请写出链式法则的**多重复合推广公式**，简述数学归纳法证明要点，并用其求 $y=e^{\\sqrt{1+\\cos x}}$（例 4.4.3）的导数。`,
    answer: `**多重复合链式法则**：$n$ 层复合 $f_1\\circ f_2\\circ\\cdots\\circ f_n$ 的导数为"**各层导数之积**"：

$$\\boxed{\\ \\frac{d}{dx}\\bigl(f_1(f_2(\\cdots f_n(x)\\cdots))\\bigr)=\\frac{df_1}{df_2}\\cdot\\frac{df_2}{df_3}\\cdots\\frac{df_{n-1}}{df_n}\\cdot\\frac{df_n}{dx}.\\ }$$

---

**数学归纳法证明**：

- **$n=2$**：即定理 4.4.1；
- **$n=k$ 成立**（归纳假设）；
- **$n=k+1$**：将 $(k+1)$ 重复合视为"外层 $f_1$ + 内层 $k$ 重复合"，应用一次链式法则 + 归纳假设即得。

---

**例 4.4.3（三重复合）**：$y=e^{\\sqrt{1+\\cos x}}$

**结构分层**：

$$\\begin{cases}y=f(u)=e^u,\\\\ u=g(v)=\\sqrt{v},\\\\ v=h(x)=1+\\cos x.\\end{cases}$$

**逐层求导**：

$$\\frac{dy}{dx}=\\frac{df}{du}\\cdot\\frac{dg}{dv}\\cdot\\frac{dh}{dx}=e^u\\cdot\\frac{1}{2\\sqrt{v}}\\cdot(-\\sin x).$$

**回代 $u,v$**：

$$\\boxed{\\ \\frac{dy}{dx}=-\\frac{e^{\\sqrt{1+\\cos x}}\\sin x}{2\\sqrt{1+\\cos x}}.\\ }$$

---

**解题通用流程**：

1. **结构剥离**：从最外层 "$f(\\cdots)$" 向里逐层标记为 $f,g,h,\\ldots$；
2. **逐层求导**：每层记为 $\\dfrac{d(\\text{外})}{d(\\text{里})}$；
3. **相乘 + 回代**：把所有层导数相乘，最后把中间变量 $u,v,\\ldots$ 回代为 $x$ 表达式。

**考研常见多重结构**：$\\arctan(\\ln(1+x^2))$、$\\sin(e^{x^2})$、$\\sqrt{\\ln\\tan x}$、$\\ln\\ln\\ln x$ 等——都是三层以上的复合。`
  },
  {
    id: 'card-ma-c4-s4-n5',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s4-n5',
    question: `【方法论 + 例题】请写出「对数求导法」的**三步套路**及其推出的幂指函数 $y=u(x)^{v(x)}$ 通用导数公式。然后用之求 $y=(\\sin x)^{\\cos x}$（例 4.4.4）。此方法还适合哪些场景？`,
    answer: `**对数求导法三步套路**：

**Step 1**：两边取对数 $\\ln y=v(x)\\ln u(x)$。

**Step 2**：两边对 $x$ 求导（左边用链式法则 $(\\ln y)'=\\dfrac{y'}{y}$）：

$$\\frac{y'}{y}=v'(x)\\ln u(x)+v(x)\\cdot\\frac{u'(x)}{u(x)}.$$

**Step 3**：解出 $y'$：

$$\\boxed{\\ y'=u(x)^{v(x)}\\!\\left[v'(x)\\ln u(x)+v(x)\\frac{u'(x)}{u(x)}\\right].\\ }$$

**提醒**：**勿死记公式**，掌握"取对数 → 求导 → 回代"的思想即可。

---

**例 4.4.4**：$y=(\\sin x)^{\\cos x}$

取对数：$\\ln y=\\cos x\\ln\\sin x$。

求导：

$$\\frac{y'}{y}=-\\sin x\\ln\\sin x+\\cos x\\cdot\\frac{\\cos x}{\\sin x}=-\\sin x\\ln\\sin x+\\frac{\\cos^2 x}{\\sin x}.$$

回代：

$$\\boxed{\\ y'=(\\sin x)^{\\cos x}\\!\\left(\\frac{\\cos^2 x}{\\sin x}-\\sin x\\ln\\sin x\\right).\\ }$$

---

**对数求导法的其他适用场景**：

| 场景 | 示例 |
|---|---|
| **幂指函数** $u(x)^{v(x)}$ | 本例 |
| **连乘积** $f_1 f_2\\cdots f_n$ | 取对数化乘为加 |
| **复杂分式根式** | $y=\\sqrt{\\dfrac{(x+1)^3(x-2)^5}{(x+3)^7}}$——取对数化幂为系数 |
| **带根号的复杂表达式** | 开 $n$ 次方 $\\Rightarrow$ 变为乘 $1/n$ |

**核心价值**：通过"取对数"将**乘 / 除 / 幂**结构转化为**加 / 减 / 乘**——大幅降低求导复杂度。

**替代方法**：$y=e^{v(x)\\ln u(x)}$ + 链式法则（殊途同归）。`
  },
  {
    id: 'card-ma-c4-s4-n6',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s4-n6',
    question: `【速查速写】请列出导数运算的**五大法则**（线性组合/乘法/除法/反函数/复合）及其对应的微分形式。并说明"初等函数求导完备性"的意义——为什么有了这些法则就能对任何初等函数机械求导？`,
    answer: `**导数五大法则**：

| 名称 | 导数公式 |
|---|---|
| 线性组合 | $(c_1 f+c_2 g)'=c_1 f'+c_2 g'$ |
| 乘法 | $(f\\cdot g)'=f'g+fg'$ |
| 除法 | $\\left(\\dfrac{f}{g}\\right)'=\\dfrac{f'g-fg'}{g^2}$ |
| 反函数 | $[f^{-1}(y)]'=\\dfrac{1}{f'(x)}$ |
| 复合函数 | $[f(g(x))]'=f'(u)g'(x)$ |

---

**对应微分法则**（一一对应）：

| 名称 | 微分公式 |
|---|---|
| 线性组合 | $d(c_1 f+c_2 g)=c_1\\,df+c_2\\,dg$ |
| 乘法 | $d(f\\cdot g)=g\\,df+f\\,dg$ |
| 除法 | $d\\left(\\dfrac{f}{g}\\right)=\\dfrac{g\\,df-f\\,dg}{g^2}$ |
| 反函数 | $dx=\\dfrac{dy}{f'(x)}=[f^{-1}(y)]'\\,dy$ |
| 复合函数 | $d[f(g(x))]=f'(u)g'(x)\\,dx$ |

---

**初等函数求导完备性**：

> **初等函数 $=$ 基本初等函数（§3 表）经有限次四则运算与复合**
>
> $\\Rightarrow$ 任何初等函数均可由**基本初等函数导数表 + 本节五大法则**机械求出。

**工作流**（考研解题模板）：

1. **结构解析**：识别函数是"线性组合 / 乘积 / 商 / 反函数 / 复合"的组合；
2. **法则选择**：对应使用相应法则；
3. **基元查表**：每个组件查 §3 基本初等函数导数表；
4. **合并化简**：最终整理答案。

**考研黄金守则**：**熟记公式 + 识别结构 + 分层递推 = 机械化的求导生产线**——所谓"求导不翻车"的底层逻辑。`
  },
  {
    id: 'card-ma-c4-s4-n7',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s4-n7',
    question: `【定理默写】请写出「一阶微分的形式不变性」的完整叙述与推导，并说明其深刻含义——为什么"微分不认自变量"？这一性质在换元法、隐函数求导、多元微分中的作用是什么？`,
    answer: `**一阶微分的形式不变性**：对 $y=f(u)$，**无论 $u$ 是自变量还是中间变量**（即 $u=g(x)$），其一阶微分的形式**都是**

$$\\boxed{\\ d[f(u)]=f'(u)\\,du.\\ }$$

---

**推导**（由复合函数微分公式）：若 $u=g(x)$ 为中间变量，

$$d[f(g(x))]=f'(u)g'(x)\\,dx=f'(u)\\,du\\quad(\\text{因 }du=g'(x)dx).$$

与 $u$ 为自变量时 $d[f(u)]=f'(u)\\,du$ **形式相同**。$\\blacksquare$

---

**深刻含义**：

**统一视角**——在微分层面**不必区分**自变量与中间变量。给定 $y=f(u)$ 就可以直接写 $dy=f'(u)du$，无需顾忌 $u$ 到底是真的自变量还是受制约的中间变量。

---

**核心应用**：

| 场景 | 作用 |
|---|---|
| **换元法**（不定积分） | $\\int f(g(x))g'(x)dx=\\int f(u)du$（凑微分正是形式不变性的直接应用） |
| **隐函数求导** | 对 $F(x,y)=0$ 两边求微分不必指定自变量，统一得 $F_x dx+F_y dy=0$ |
| **参数方程** | $\\dfrac{dy}{dx}=\\dfrac{dy/dt}{dx/dt}$——微分之商自然成立 |
| **多元微分** | 全微分 $dz=f_x dx+f_y dy$ 是形式不变性的高维推广 |

---

**实用价值**：在解题时，遇到复合函数时**直接写 $df(u)=f'(u)du$**，事后再用 $du=g'(x)dx$ 具体化——极大简化推导过程。

**核心口诀**：**"微分不认自变量，形式永远 $f'(u)du$"**——这是微商视角、换元法、链式法则的**严格共同基础**。`
  },
  {
    id: 'card-ma-c4-s4-n8',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s4-n8',
    question: `【方法论 + 例题】请说明什么是「隐函数」（以椭圆与五次方程为例），总结隐函数求导的**"两边求导法"三步套路**，并用之求方程 $e^{xy}+x^2 y-1=0$ 确定的 $y(x)$ 的 $y'$（例 4.4.5）。`,
    answer: `**隐函数**：由方程 $F(x,y)=0$ 决定的 $y=y(x)$。

**两种情形**：

- **可显化**：如 $\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\Rightarrow y=\\pm\\dfrac{b}{a}\\sqrt{a^2-x^2}$；
- **不可显化**：如 $y^5+ax^2 y^4+bxy^2+cxy+d=0$——由代数基本定理 $y$ 存在，但 Galois 理论证明一般**无显式解**。

---

**两边求导法三步套路**：

**Step 1**：对方程两边关于 $x$ 求导——遇到 $y$ 项时，**把 $y$ 视为 $x$ 的函数**，用链式法则；

**Step 2**：整理为 $A(x,y)y'+B(x,y)=0$ 形式；

**Step 3**：解出 $y'=-\\dfrac{B}{A}$。

**核心要点**：$\\dfrac{d}{dx}[y]=y'$；$\\dfrac{d}{dx}[y^n]=ny^{n-1}y'$；$\\dfrac{d}{dx}[f(y)]=f'(y)y'$。

---

**例 4.4.5**：$e^{xy}+x^2 y-1=0$，求 $y'$。

对两边求导：

- $(e^{xy})'=e^{xy}(xy)'=e^{xy}(y+xy')$；
- $(x^2 y)'=2xy+x^2 y'$；
- $(-1)'=0$。

$$e^{xy}(y+xy')+(2xy+x^2 y')=0.$$

整理：$(e^{xy}x+x^2)y'+(e^{xy}y+2xy)=0$，

$$\\boxed{\\ y'=-\\frac{(e^{xy}+2x)y}{(e^{xy}+x)x}.\\ }$$

---

**特点**：结果中**保留 $y$** 是正常的——这反而便于后续代入特殊点求值（如例 4.4.7）。

**高阶变体**：

- 求 $y'(x_0)$ 值：先隐式求 $y'$，再代入已知点 $(x_0,y_0)$；
- 求 $y''$：对 $y'$ 再求一次导（需再次链式法则处理 $y'$ 的复合项）。`
  },
  {
    id: 'card-ma-c4-s4-n9',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s4-n9',
    question: `【例题演练】① 请用**一阶微分形式不变性法**求由 $\\sin y^2=\\cos\\sqrt{x}$ 确定的 $y'$（例 4.4.6）；② 求方程 $e^{x+y}-xy-e=0$ 确定的曲线在 $(0,1)$ 处切线方程（例 4.4.7）。对比两种方法（两边求导 / 两边求微分）的优劣。`,
    answer: `**① 例 4.4.6（微分法）**：$\\sin y^2=\\cos\\sqrt{x}$

两边求微分（用形式不变性）：

$$d(\\sin y^2)=\\cos y^2\\cdot d(y^2)=\\cos y^2\\cdot 2y\\,dy,$$

$$d(\\cos\\sqrt{x})=-\\sin\\sqrt{x}\\cdot d(\\sqrt{x})=-\\frac{\\sin\\sqrt{x}}{2\\sqrt{x}}\\,dx.$$

由 $d(\\sin y^2)=d(\\cos\\sqrt{x})$：

$$2y\\cos y^2\\,dy=-\\frac{\\sin\\sqrt{x}}{2\\sqrt{x}}\\,dx,$$

$$\\boxed{\\ \\frac{dy}{dx}=-\\frac{\\sin\\sqrt{x}}{4\\sqrt{x}\\,y\\cos y^2}.\\ }$$

---

**② 例 4.4.7（隐函数切线）**：$e^{x+y}-xy-e=0$，求 $(0,1)$ 处切线。

两边对 $x$ 求导：

$$e^{x+y}(1+y')-(y+xy')=0.$$

整理：$(e^{x+y}-x)y'=y-e^{x+y}$，

$$y'=\\frac{y-e^{x+y}}{e^{x+y}-x}.$$

代入 $(x,y)=(0,1)$，$e^{x+y}=e$：

$$y'(0)=\\frac{1-e}{e-0}=\\frac{1-e}{e}.$$

切线方程：

$$\\boxed{\\ y=\\frac{1-e}{e}x+1.\\ }$$

---

**两种方法对比**：

| 方法 | 优势 | 劣势 |
|---|---|---|
| **两边求导**（例 4.4.5 套路） | 步骤固定，适用范围广（单变量 + 多元） | 需把 $y$ 明确视为 $x$ 的函数，链式多一步思考 |
| **一阶微分形式不变性**（例 4.4.6） | 左右对称、形式优雅、避免 $y'$ 到处跳 | 单变量阶段仅对部分隐函数有效，一般情形需多元微分 |

---

**考研选型**：

- 一般题 → "两边求导法"（稳妥通用）；
- 对称结构或求微分形式 → "微分法"更简洁；
- 求具体点处切线 / $y'(x_0)$ → 先隐式求 $y'$，再代入点值。`
  },
  {
    id: 'card-ma-c4-s4-n10',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s4-n10',
    question: `【统一视角】请演示如何用复合函数链式法则**推出倒数法则与反函数求导定理**，并总结链式法则在整个微分学中的**"万能"地位**（它能统摄哪些求导规则？）。`,
    answer: `**① 推出倒数法则**：$y=\\dfrac{1}{g(x)}$ 视为复合

$$\\begin{cases}y=\\dfrac{1}{u},\\\\ u=g(x).\\end{cases}$$

由链式法则：

$$\\left(\\frac{1}{g(x)}\\right)'=\\left(\\frac{1}{u}\\right)'\\cdot g'(x)=-\\frac{1}{u^2}\\cdot g'(x)=\\boxed{-\\frac{g'(x)}{[g(x)]^2}.}$$

此即 §3 定理 4.3.3 倒数法则——无需单独证明。

---

**② 推出反函数求导定理**：设 $y=f(x)$ 满足反函数条件，$x=f^{-1}(y)$ 为反函数。恒等式

$$x=f^{-1}(f(x)),$$

两边对 $x$ 求导（右边链式法则）：

$$1=(x)'=[f^{-1}(f(x))]'=[f^{-1}(y)]'\\cdot f'(x),$$

解出：

$$\\boxed{\\ [f^{-1}(y)]'=\\frac{1}{f'(x)}.\\ }$$

这就是 §3 定理 4.3.4 反函数求导结论——**两行推出**。

---

**链式法则的"万能地位"**：

> **链式法则 = 微分学的统领性法则**。所有求导规则在某种意义上都可归约到它的特殊情形。

**结构层次图**：

$$\\text{链式法则}\\supset\\begin{cases}\\text{反函数求导}\\quad(y=f^{-1}(f(x))=x)\\\\ \\text{倒数法则}\\quad(y=1/u)\\\\ \\text{对数求导法}\\quad(\\ln y\\text{ 为外层})\\\\ \\text{隐函数求导}\\quad(y\\text{ 为 }x\\text{ 的复合})\\\\ \\text{参数方程求导}\\quad(\\text{见 n11})\\end{cases}$$

---

**深层启示**：

- 所有"特殊法则"都源自**同一核心结构**——"外函数对中间变量求导 × 中间变量对自变量求导"；
- 学好链式法则 $=$ 求导问题已解决大半。

**考研精髓**：遇到不熟悉的求导场景，先问"这是不是链式法则的一个特例？"——通常答案是肯定的。`
  },
  {
    id: 'card-ma-c4-s4-n11',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s4-n11',
    question: `【定理默写 + 例题】请写出「参数方程求导公式」（含四要条件），简述其链式法则推导。并用之：① 求摆线 $\\begin{cases}x=t-\\sin t\\\\ y=1-\\cos t\\end{cases}$ 的 $\\dfrac{dy}{dx}$（例 4.4.8）；② 求抛射体何时水平飞行（例 4.4.9）。`,
    answer: `**参数方程**：$\\begin{cases}x=\\varphi(t)\\\\ y=\\psi(t)\\end{cases},\\ \\alpha\\le t\\le\\beta$。

**四要条件**：$\\varphi,\\psi$ 可微；$\\varphi$ **严格单调** + $\\varphi'(t)\\ne 0$。

**参数方程求导公式**：

$$\\boxed{\\ \\frac{dy}{dx}=\\frac{\\psi'(t)}{\\varphi'(t)}=\\frac{dy/dt}{dx/dt}.\\ }$$

---

**推导**：由反函数求导 $t=\\varphi^{-1}(x)$ 存在且 $(\\varphi^{-1})'(x)=\\dfrac{1}{\\varphi'(t)}$，链式法则：

$$\\frac{dy}{dx}=\\frac{dy}{dt}\\cdot\\frac{dt}{dx}=\\psi'(t)\\cdot\\frac{1}{\\varphi'(t)}=\\frac{\\psi'(t)}{\\varphi'(t)}.$$

**微分视角**：$dy=\\psi'(t)dt$, $dx=\\varphi'(t)dt$，**两式相除**即得——"微分之商"的自然表现。

---

**① 例 4.4.8（摆线）**：$\\begin{cases}x=t-\\sin t\\\\ y=1-\\cos t\\end{cases}$

（几何意义：单位圆沿 $x$ 轴无滑动滚动时，圆周一点的轨迹。）

$$\\frac{dy}{dx}=\\frac{(1-\\cos t)'}{(t-\\sin t)'}=\\frac{\\sin t}{1-\\cos t}=\\frac{2\\sin\\tfrac{t}{2}\\cos\\tfrac{t}{2}}{2\\sin^2\\tfrac{t}{2}}=\\boxed{\\cot\\frac{t}{2}.}$$

---

**② 例 4.4.9（抛射体何时水平）**：$\\begin{cases}x=v_1 t\\\\ y=v_2 t-\\tfrac{1}{2}gt^2\\end{cases}$，问 $\\theta=0$ 时刻。

**解**：$\\theta=\\arctan\\dfrac{dy}{dx}$：

$$\\frac{dy}{dx}=\\frac{v_2-gt}{v_1}.$$

令 $\\dfrac{dy}{dx}=0\\Rightarrow v_2-gt=0$，

$$\\boxed{\\ t=\\frac{v_2}{g}.\\ }$$

物理意义：**上升到最高点**（垂直速度归零）的时刻。

---

**考研高频题型**：

- **求切线方程**：算 $\\dfrac{dy}{dx}$ 在指定 $t_0$ 的值 + $(x(t_0),y(t_0))$；
- **极值 / 水平切线**：解 $\\psi'(t)=0$；
- **垂直切线**：解 $\\varphi'(t)=0$（此时 $\\dfrac{dy}{dx}\\to\\infty$）。`
  },
  {
    id: 'card-ma-c4-s4-n12',
    type: 'concept_recall',
    source: '教材模式',
    kp_id: 'ma-c4-s4-n12',
    question: `【综合辨析】请列出函数的**三种表达形式**（显式 / 隐式 / 参数）及其适用场景。以**椭圆**为例，分别用三种方法求 $y'$，比较繁简程度，给出考研选型指南。`,
    answer: `**三种表达形式**：

| 形式 | 表达 | 典例 | 适用场景 |
|---|---|---|---|
| **显式** | $y=f(x)$ | $y=\\sqrt{a^2-x^2}$ | 直接描绘 $y$-$x$ 关系；便于绘图 |
| **隐式** | $F(x,y)=0$ | $\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1$ | 紧凑对称；适合二次/高次曲线 |
| **参数** | $\\begin{cases}x=\\varphi(t)\\\\ y=\\psi(t)\\end{cases}$ | $\\begin{cases}x=a\\cos t\\\\ y=b\\sin t\\end{cases}$ | 突出"运动轨迹"；物理意义明确 |

---

**椭圆求 $y'$ 三种解法对比**（结果都是 $y'=-\\dfrac{b^2 x}{a^2 y}$）：

**方法 1（显式）**：$y=\\pm\\dfrac{b}{a}\\sqrt{a^2-x^2}$

$$y'=\\pm\\frac{b}{a}\\cdot\\frac{-x}{\\sqrt{a^2-x^2}}=-\\frac{b^2 x}{a^2 y}.$$

（需讨论 $\\pm$，根式复杂。）

**方法 2（参数）**：$\\begin{cases}x=a\\cos t\\\\ y=b\\sin t\\end{cases}$

$$\\frac{dy}{dx}=\\frac{b\\cos t}{-a\\sin t}=-\\frac{b^2 x}{a^2 y}.$$

（形式对称，但需引入参数 $t$。）

**方法 3（隐式，最简洁！）**：对 $\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1$ 两边求微分，

$$\\frac{2x}{a^2}dx+\\frac{2y}{b^2}dy=0\\ \\Rightarrow\\ \\boxed{\\ y'=-\\frac{b^2 x}{a^2 y}.\\ }$$

仅用**两行**！——隐式方法的威力。

---

**考研选型指南**：

| 情形 | 推荐方法 |
|---|---|
| 简单多项式 / 根式 | 显式直接求导 |
| 二次曲线 / 代数方程 | **隐式**（两边求导 / 微分） |
| 运动轨迹 / 摆线 | **参数**（分子分母各求 $t$ 导） |
| 幂指函数 | **对数求导法** |
| 乘积 / 连乘积 / 复杂分式 | **对数求导法** |

---

**核心哲学**：**"根据题目结构选择最经济的表达形式"**——这是高分考生必备素养。

**经验法则**：

- 出现 "求 $(x_0,y_0)$ 处切线" 时，隐式法通常最快；
- 出现"轨迹"、"运动"、"关于 $t$" 时，参数法最自然；
- 出现 $y$ 有明确显式表达时，先尝试直接显式求导，失败再换隐式。`
  }
];
