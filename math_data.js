// math_data.js — 中南大学考研数学知识树数据引擎
// 字段说明：
//   type: 'chapter' | 'section' | 'concept' | 'theorem'
//   title: 节点标题
//   children: 子节点数组（可省略）
//   content: 叶节点正文，支持 LaTeX（$行内$，$$块级$$）

const mathKnowledgeTree = [
  // ══════════════════════════════════════════
  //  第一部分：数学分析 (基于权威教材目录架构)
  // ══════════════════════════════════════════
  {
    id: 'ma',
    type: 'chapter',
    title: '数学分析',
    isExpanded: true,
    children: [
      // ── 第一章 集合与映射 ─────────────────
      {
        id: 'ma-c1',
        type: 'chapter',
        title: '第一章 集合与映射',
        isExpanded: true,
        children: [
          {
            id: 'ma-c1-s1',
            type: 'section',
            title: '§1 集合',
            children: [
              {
                id: 'ma-c1-s1-n1',
                type: 'concept',
                title: '集合的定义与表示',
                content: `集合是指具有某种特定性质的具体的或抽象的对象汇集成的总体，这些对象称为该集合的**元素**。
若 $x$ 是集合 $S$ 的元素，记为 $x \\in S$；若 $y$ 不是集合 $S$ 的元素，记为 $y \\notin S$。

**常用的数集**：
全体正整数的集合 $\\mathbf{N^+}$，整数集 $\\mathbf{Z}$，有理数集 $\\mathbf{Q}$，实数集 $\\mathbf{R}$。

**集合的表示方式**：
1. **枚举法**：例如 $A = \\{a, b, c, d\\}$，或 $\\mathbf{N^+} = \\{1, 2, 3, \\cdots, n, \\cdots\\}$。
2. **描述法**：$S = \\{x \\mid x \\text{ 具有性质 } P\\}$。
例如有理数集可表示为：
$$ \\mathbf{Q} = \\left\\{ x \\mathrel{\\Big|} x = \\frac{q}{p}, \\text{其中 } p \\in \\mathbf{N^+} \\text{ 并且 } q \\in \\mathbf{Z} \\right\\} $$`
              },
              {
                id: 'ma-c1-s1-n2',
                type: 'concept',
                title: '包含关系与子集',
                content: `**空集**：不包含任何元素的集合，记为 $\\varnothing$。对任何集合 $S$，都有 $\\varnothing \\subset S$。

**子集 (蕴含)**：设 $S, T$ 是两个集合，如果 $S$ 的所有元素都属于 $T$，即 $x \\in S \\Rightarrow x \\in T$，则称 $S$ 是 $T$ 的子集，记为 $S \\subset T$。

**真子集**：如果 $S \\subset T$，且 $T \\not\\subset S$，则称 $S$ 是 $T$ 的一个真子集。由 $n$ 个元素组成的集合共有 $2^n$ 个子集，$2^n - 1$ 个真子集。

**集合相等**：
$$ S = T \\Leftrightarrow S \\subset T \\text{ 并且 } T \\subset S $$`
              },
              {
                id: 'ma-c1-s1-n3',
                type: 'concept',
                title: '实数集的子集：区间',
                content: `设 $a, b (a < b)$ 是两个实数：
* **开区间**：$(a, b) = \\{x \\mid a < x < b\\}$
* **闭区间**：$[a, b] = \\{x \\mid a \\le x \\le b\\}$
* **半开半闭区间**：$(a, b] = \\{x \\mid a < x \\le b\\}$ 或 $[a, b) = \\{x \\mid a \\le x < b\\}$

**无限区间**：
* $(a, +\\infty) = \\{x \\mid x > a\\}$
* $(-\\infty, b] = \\{x \\mid x \\le b\\}$
* $(-\\infty, +\\infty) = \\mathbf{R}$`
              },
              {
                id: 'ma-c1-s1-n4',
                type: 'concept',
                title: '集合的四则运算',
                content: `1. **并集**：$S \\cup T = \\{x \\mid x \\in S \\text{ 或者 } x \\in T\\}$
2. **交集**：$S \\cap T = \\{x \\mid x \\in S \\text{ 并且 } x \\in T\\}$
3. **差集**：$S \\setminus T = \\{x \\mid x \\in S \\text{ 并且 } x \\notin T\\}$
4. **补集**：集合 $S$ 关于 $X$ 的补集定义为 $S_X^C = X \\setminus S$，简记为 $S^C$。`
              },
              {
                id: 'ma-c1-s1-n5',
                type: 'theorem',
                title: '集合运算的性质',
                content: `满足交换律、结合律、分配律。
**对偶律 (De Morgan 公式)**：
$$ (A \\cup B)^C = A^C \\cap B^C $$
$$ (A \\cap B)^C = A^C \\cup B^C $$`
              },
              {
                id: 'ma-c1-s1-n6',
                type: 'concept',
                title: '有限集、无限集与可列集',
                content: `**可列集**：如果一个无限集中的元素可以按某种规律排成一个序列 $\\{a_1, a_2, \\cdots, a_n, \\cdots\\}$，既无重复也无遗漏，则称其为可列集。
* **定理 1.1.1**：可列个可列集之并也是可列集。
* **定理 1.1.2**：有理数集 $\\mathbf{Q}$ 是可列集。`
              },
              {
                id: 'ma-c1-s1-n7',
                type: 'concept',
                title: 'Descartes 乘积集合',
                content: `$$ A \\times B = \\{(x,y) \\mid x \\in A \\text{ 并且 } y \\in B\\} $$
当 $A = B = \\mathbf{R}$ 时，$\\mathbf{R} \\times \\mathbf{R} = \\mathbf{R}^2$，表示平面 Descartes 直角坐标系下的点集。`
              }
            ]
          },
          {
            id: 'ma-c1-s2',
            type: 'section',
            title: '§2 映射与函数',
            children: [
              {
                id: 'ma-c1-s2-n1',
                type: 'concept',
                title: '映射的定义',
                content: `**定义 1.2.1**：设 $X, Y$ 是两个给定的集合。若按照某种规则 $f$，使得对集合 $X$ 中的每一个元素 $x$，都可以找到集合 $Y$ 中惟一确定的元素 $y$ 与之对应，则称这个对应规则 $f$ 是集合 $X$ 到集合 $Y$ 的一个映射，记为：
$$ f: X \\to Y $$
$$ x \\mapsto y = f(x) $$
* **像与逆像**：$y$ 称为 $x$ 的像；$x$ 称为 $y$ 的逆像 (原像)。
* **定义域**：$D_f = X$。
* **值域**：$R_f = \\{y \\mid y \\in Y \\text{ 并且 } y=f(x), x \\in X\\}$。`
              },
              {
                id: 'ma-c1-s2-n2',
                type: 'concept',
                title: '单射、满射与双射',
                content: `设 $f: X \\to Y$：
* **单射**：逆像惟一（$x_1 \\neq x_2 \\Rightarrow y_1 \\neq y_2$）。
* **满射**：值域等于目标集（$R_f = Y$）。
* **双射 (一一对应)**：既是单射又是满射。`
              },
              {
                id: 'ma-c1-s2-n3',
                type: 'concept',
                title: '逆映射与复合映射',
                content: `**逆映射**：设 $f: X \\to Y$ 是单射，则定义对应关系 $g: R_f \\to X, y \\mapsto x$ 为 $f$ 的逆映射，记为 $f^{-1}$。

**复合映射**：设有 $g: X \\to U_1$ 和 $f: U_2 \\to Y$。若 $R_g \\subset U_2 = D_f$，则可构造新映射：
$$ f \\circ g: X \\to Y, \\quad x \\mapsto y = f(g(x)) $$`
              },
              {
                id: 'ma-c1-s2-n4',
                type: 'concept',
                title: '一元实函数与初等函数',
                content: `**一元实函数**：映射定义域 $X \\subset \\mathbf{R}$，值域 $Y = \\mathbf{R}$ 时，该映射称为一元实函数，简称函数，记为 $y = f(x)$。

**基本初等函数**：
1. 常数函数：$y = c$
2. 幂函数：$y = x^\\alpha$
3. 指数函数：$y = a^x$
4. 对数函数：$y = \\log_a x$
5. 三角函数：如 $y = \\sin x$
6. 反三角函数：如 $y = \\arcsin x$

由基本初等函数经过有限次四则运算与复合运算所产生的函数称为**初等函数**。`
              },
              {
                id: 'ma-c1-s2-n5',
                type: 'concept',
                title: '函数的特殊表示与特性',
                content: `**特殊表示法**：隐式表示（$F(x, y) = 0$）、参数表示（$x = x(t), y = y(t)$）。

**简单特性**：
1. **有界性**：存在正数 $M$，使得 $|f(x)| \\le M$。
2. **单调性**：$x_1 < x_2 \\Rightarrow f(x_1) \\le f(x_2)$ (单调增)。
3. **奇偶性**：偶函数 $f(-x) = f(x)$；奇函数 $f(-x) = -f(x)$。
4. **周期性**：存在常数 $T > 0$，使得 $f(x+T) = f(x)$。`
              },
              {
                id: 'ma-c1-s2-n6',
                type: 'theorem',
                title: '三角不等式',
                content: `对于任意实数 $a$ 和 $b$，都有：
$$ ||a| - |b|| \\le |a+b| \\le |a| + |b| $$`
              }
            ]
          }
        ]
      },
      // ── 第二章以后仅保留骨架（等待后续录入） ─────────────────
      { id: 'ma-c2', type: 'chapter', title: '第二章 数列极限', children: [
          {
            id: 'ma-c2-s1',
            type: 'section',
            title: '§1 实数系的连续性',
            children: [
              {
                id: 'ma-c2-s1-n1',
                type: 'concept',
                title: '数系的扩充与实数系的连续性',
                content: `数学分析的变量取值范围限制在实数集合 $\\mathbf{R}$ 内，实数系最重要的基本性质是**连续性**。

**数系的逐步扩充**：
- 自然数集 $\\mathbf{N}$：对加法、乘法封闭，对减法不封闭。
- 整数集 $\\mathbf{Z}$：对加、减、乘封闭，对除法不封闭。
- 有理数集 $\\mathbf{Q} = \\left\\{x \\,\\middle|\\, x = \\dfrac{q}{p},\\ p \\in \\mathbf{N^+},\\ q \\in \\mathbf{Z}\\right\\}$：对四则运算全部封闭，但对开方不封闭（如 $\\sqrt{2} \\notin \\mathbf{Q}$）。
- 实数集 $\\mathbf{R} = \\{x \\mid x \\text{ 是有理数或无理数}\\}$。

**各数系的几何特征**：
- 整数系 $\\mathbf{Z}$：**离散性**（相邻整数点间隔为 1）。
- 有理数系 $\\mathbf{Q}$：**稠密性**（任意长度大于 0 的线段上存在无穷多个有理点），但有理点在数轴上仍有"空隙"。
- 实数系 $\\mathbf{R}$：**连续性**（实数铺满整个数轴，无任何空隙）。$\\mathbf{R}$ 又称为**实数连续统**。

**$\\sqrt{2}$ 不是有理数的证明**（反证法）：设 $c = \\sqrt{2} = q/p$（$p, q \\in \\mathbf{N^+}$，互素），则 $q^2 = 2p^2$，$q$ 为偶数，设 $q = 2r$，则 $p^2 = 2r^2$，$p$ 也为偶数，与 $p, q$ 互素矛盾。`
              },
              {
                id: 'ma-c2-s1-n2',
                type: 'concept',
                title: '有界集、最大数与最小数',
                content: `设 $S$ 是一个非空数集。

**最大数与最小数**：
- 若 $\\exists\\, \\xi \\in S$，使得 $\\forall x \\in S$ 有 $x \\leq \\xi$，则称 $\\xi$ 是数集 $S$ 的**最大数**，记为 $\\xi = \\max S$。
- 若 $\\exists\\, \\eta \\in S$，使得 $\\forall x \\in S$ 有 $x \\geq \\eta$，则称 $\\eta$ 是数集 $S$ 的**最小数**，记为 $\\eta = \\min S$。

有限集的最大数与最小数必然存在；无限集则未必。

**例**：集合 $B = \\{x \\mid 0 \\leq x < 1\\}$ 没有最大数。
**证**（反证法）：设 $\\beta = \\max B$，令 $\\beta' = \\dfrac{1+\\beta}{2}$，则 $\\beta' \\in [0,1)$ 且 $\\beta' > \\beta$，矛盾。

**有界集**：数集 $S$ 既有上界又有下界，即：
$$S \\text{ 为有界集} \\Leftrightarrow \\exists\\, X > 0,\\ \\forall x \\in S,\\ |x| \\leq X$$`
              },
              {
                id: 'ma-c2-s1-n3',
                type: 'concept',
                title: '上确界与下确界',
                content: `设 $S$ 是一个非空数集。

**上界**：若 $\\exists\\, M \\in \\mathbf{R}$，使 $\\forall x \\in S$ 有 $x \\leq M$，则称 $M$ 是 $S$ 的一个**上界**。

**上确界（最小上界）**：$S$ 的上界全体之集合的最小数 $\\beta$，称为 $S$ 的**上确界**，记为 $\\beta = \\sup S$。

上确界 $\\beta = \\sup S$ 等价于同时满足：
1. $\\beta$ 是 $S$ 的上界：$\\forall x \\in S,\\ x \\leq \\beta$；
2. $\\beta$ 是最小上界：$\\forall\\, \\varepsilon > 0,\\ \\exists\\, x \\in S$，使得 $x > \\beta - \\varepsilon$。

**下界**：若 $\\exists\\, m \\in \\mathbf{R}$，使 $\\forall x \\in S$ 有 $x \\geq m$，则称 $m$ 是 $S$ 的一个**下界**。

**下确界（最大下界）**：$S$ 的下界全体之集合的最大数 $\\alpha$，称为 $S$ 的**下确界**，记为 $\\alpha = \\inf S$。

下确界 $\\alpha = \\inf S$ 等价于同时满足：
1. $\\alpha$ 是 $S$ 的下界：$\\forall x \\in S,\\ x \\geq \\alpha$；
2. $\\alpha$ 是最大下界：$\\forall\\, \\varepsilon > 0,\\ \\exists\\, x \\in S$，使得 $x < \\alpha + \\varepsilon$。`
              },
              {
                id: 'ma-c2-s1-n4',
                type: 'theorem',
                title: '定理 2.1.1 确界存在定理（实数系连续性定理）',
                content: `**定理**：非空有上界的数集必有上确界；非空有下界的数集必有下确界。

**证明思路**（无限小数构造法）：设数集 $S$ 有上界。
- 取 $S$ 中元素整数部分的最大者 $\\alpha_0$，令 $S_0 = \\{x \\in S \\mid [x] = \\alpha_0\\}$。
- 依次取 $S_{k-1}$ 中第 $k$ 位小数的最大者 $\\alpha_k$，令 $S_k = \\{x \\in S_{k-1} \\mid x \\text{ 的第 } k \\text{ 位小数为 } \\alpha_k\\}$。
- 令 $\\beta = \\alpha_0 + 0.\\alpha_1\\alpha_2\\cdots\\alpha_n\\cdots$，可证 $\\beta = \\sup S$：
  1. **$\\beta$ 是上界**：对任意 $x \\in S$，若 $x \\notin S_{n_0}$，则 $x < \\alpha_0 + 0.\\alpha_1\\cdots\\alpha_{n_0} \\leq \\beta$；若 $x \\in S_n$（对所有 $n$），则 $x = \\beta$。
  2. **$\\beta$ 是最小上界**：对任意 $\\varepsilon > 0$，取充分大的 $n_0$ 使 $\\dfrac{1}{10^{n_0}} < \\varepsilon$，取 $x_0 \\in S_{n_0}$，则 $\\beta - x_0 \\leq \\dfrac{1}{10^{n_0}} < \\varepsilon$，即 $x_0 > \\beta - \\varepsilon$。

**几何直观**：确界存在定理正是实数系"连续性"的分析表达——若实数轴有"空隙"，则空隙左侧数集就没有上确界。而有理数系 $\\mathbf{Q}$ 不满足此定理（例如 $T = \\{x \\in \\mathbf{Q} \\mid x > 0,\\ x^2 < 2\\}$ 在 $\\mathbf{Q}$ 内无上确界）。`
              },
              {
                id: 'ma-c2-s1-n5',
                type: 'theorem',
                title: '定理 2.1.2 确界的唯一性',
                content: `**定理**：非空有界数集的上（下）确界是唯一的。

**证明**（反证法）：设 $\\beta_1, \\beta_2$ 均为数集 $S$ 的上确界，且 $\\beta_1 < \\beta_2$。
由 $\\beta_1$ 是上确界的性质2，取 $\\varepsilon = \\beta_2 - \\beta_1 > 0$，则 $\\exists\\, x \\in S$ 使得 $x > \\beta_1 - \\varepsilon + \\varepsilon = \\beta_1$，
但同时 $x > \\beta_2 - (\\beta_2 - \\beta_1) = \\beta_1$，
又 $\\beta_2$ 是上界，故 $x \\leq \\beta_2$，取 $\\varepsilon' = \\beta_2 - \\beta_1$，由 $\\beta_1$ 是最小上界知 $\\exists x > \\beta_1 = \\beta_2 - \\varepsilon'$，但 $\\beta_2$ 是上界要求 $x \\leq \\beta_2$，两者矛盾，故 $\\beta_1 = \\beta_2$。`
              },
              {
                id: 'ma-c2-s1-n6',
                type: 'theorem',
                title: '附录：Dedekind 切割定理',
                content: `**Dedekind 切割**：设两个非空有理数集合 $A$ 和 $B$ 满足 $\\mathbf{Q} = A \\cup B$，且对任意 $a \\in A$、$b \\in B$ 成立 $a < b$，则称 $A, B$ 构成 $\\mathbf{Q}$ 的一个**切割**，记为 $A/B$。

对有理数集合 $\\mathbf{Q}$ 的切割，只有三种情形（情形④ $A$ 有最大数且 $B$ 有最小数不可能，因为 $\\dfrac{a_0+b_0}{2}$ 既不属于 $A$ 也不属于 $B$）：
1. $A$ 有最大数 $a_0$，$B$ 无最小数 → 切割确定有理数 $a_0$；
2. $A$ 无最大数，$B$ 有最小数 $b_0$ → 切割确定有理数 $b_0$；
3. $A$ 无最大数，$B$ 无最小数 → 切割确定一个**无理数** $c$（$c$ 大于 $A$ 中任意有理数，小于 $B$ 中任意有理数）。

**例**：$A$ 由全部负有理数与满足 $x^2 < 2$ 的非负有理数组成，$B$ 由满足 $x^2 > 2$ 的正有理数构成，则切割 $A/B$ 确定的无理数为 $\\sqrt{2}$。

**Dedekind 切割定理**：设 $\\bar{A}/\\bar{B}$ 是实数集 $\\mathbf{R}$ 的一个切割（$\\mathbf{R} = \\bar{A} \\cup \\bar{B}$，$\\bar{A}$ 中元素均小于 $\\bar{B}$ 中元素），则**或者 $\\bar{A}$ 有最大数，或者 $\\bar{B}$ 有最小数**。

此定理是实数系连续性的另一等价表述：实数集的任意切割均由某个实数"界定"，不存在有理数切割中的"情况③"——这正是实数系有别于有理数系的根本所在。`
              }
            ]
          },
          {
            id: 'ma-c2-s2',
            type: 'section',
            title: '§2 数列极限',
            children: [
              {
                id: 'ma-c2-s2-n1',
                type: 'concept',
                title: '数列的定义',
                content: `**数列**是指按正整数编了号的一串数：$x_1, x_2, \\ldots, x_n, \\ldots$，通常表示成 $\\{x_n\\}$，其中 $x_n$ 称为该数列的**通项**。

**数列与数集的区别**：数集中元素无次序，重复元素视为同一个；数列中每项有确定编号，次序不能颠倒，重复项不能舍去。

**常见例子**：
- $\\left\\{\\dfrac{1}{n}\\right\\}$：$1,\\ \\dfrac{1}{2},\\ \\dfrac{1}{3},\\ \\ldots$（无穷小量）
- $\\left\\{\\dfrac{n}{n+3}\\right\\}$：$\\dfrac{1}{4},\\ \\dfrac{2}{5},\\ \\dfrac{3}{6},\\ \\ldots$（收敛于 1）
- $\\{n^2\\}$：$1, 4, 9, \\ldots$（发散）
- $\\{(-1)^n\\}$：$-1, 1, -1, 1, \\ldots$（发散）

数列可看作定义在正整数集 $\\mathbf{N^+}$ 上的函数 $x = f(t),\\ t \\in \\mathbf{N^+}$。`
              },
              {
                id: 'ma-c2-s2-n2',
                type: 'concept',
                title: '数列极限的 ε-N 定义（定义 2.2.1）',
                content: `**定义 2.2.1**：设 $\\{x_n\\}$ 是一给定数列，$a$ 是一个实常数。如果对于任意给定的 $\\varepsilon > 0$，可以找到正整数 $N$，使得当 $n > N$ 时，成立
$$|x_n - a| < \\varepsilon$$
则称数列 $\\{x_n\\}$ **收敛于** $a$，记为
$$\\lim_{n \\to \\infty} x_n = a \\quad \\text{或} \\quad x_n \\to a \\ (n \\to \\infty)$$
如果不存在实数 $a$ 使 $\\{x_n\\}$ 收敛于 $a$，则称数列 $\\{x_n\\}$ **发散**。

**符号化表达**：
$$\\lim_{n \\to \\infty} x_n = a \\Leftrightarrow \\forall\\, \\varepsilon > 0,\\ \\exists N,\\ \\forall n > N:\\ |x_n - a| < \\varepsilon$$

**几何意义**：$a$ 的 $\\varepsilon$ 邻域 $O(a,\\varepsilon) = \\{x \\mid a - \\varepsilon < x < a + \\varepsilon\\}$，收敛意味着对任意小的 $\\varepsilon$，数列从第 $N+1$ 项起所有项均落入 $O(a,\\varepsilon)$ 中。

**注**：数列收敛与否与前面有限项无关，改变有限项不影响收敛性。`
              },
              {
                id: 'ma-c2-s2-n3',
                type: 'concept',
                title: '无穷小量与 ε-N 定义的应用技巧',
                content: `**无穷小量**：极限为 $0$ 的数列称为无穷小量。无穷小量是变量，不是"很小的数"。
$$\\lim_{n \\to \\infty} x_n = a \\Leftrightarrow \\{x_n - a\\} \\text{ 是无穷小量}$$

**寻找 $N$ 的核心技巧——适度放大**：证明中无需求出最优 $N$，可对 $|x_n - a|$ 适度放大以简化计算。

**例 1**（直接解不等式）：证明 $\\lim_{n\\to\\infty} \\dfrac{n}{n+3} = 1$。

$$\\left|\\frac{n}{n+3} - 1\\right| = \\frac{3}{n+3} < \\frac{3}{n} < \\varepsilon \\Rightarrow n > \\frac{3}{\\varepsilon}$$

取 $N = \\left[\\dfrac{3}{\\varepsilon}\\right] + 1$ 即可。

**例 2**（放大技巧）：证明 $\\displaystyle\\lim_{n\\to\\infty} \\frac{n^2+1}{2n^2-7n} = \\frac{1}{2}$。

当 $n > 6$ 时：
$$\\left|\\frac{n^2+1}{2n^2-7n} - \\frac{1}{2}\\right| = \\left|\\frac{7n+2}{2n(2n-7)}\\right| < \\frac{8n}{2n^2} = \\frac{4}{n} < \\varepsilon$$

取 $N = \\max\\left\\{6,\\ \\left[\\dfrac{4}{\\varepsilon}\\right]\\right\\}$。

**例 3**（二项式定理放大）：$a > 1$ 时，$\\lim_{n\\to\\infty} \\sqrt[n]{a} = 1$。

令 $\\sqrt[n]{a} = 1 + y_n\\ (y_n > 0)$，由二项式定理 $a = (1+y_n)^n > 1 + ny_n$，故
$$\\left|\\sqrt[n]{a} - 1\\right| = y_n < \\frac{a-1}{n} < \\varepsilon$$
取 $N = \\left[\\dfrac{a-1}{\\varepsilon}\\right]$。

**例 4**：$\\lim_{n\\to\\infty}\\sqrt[n]{n} = 1$。

令 $\\sqrt[n]{n} = 1 + y_n\\ (y_n > 0)$，由 $n > 1 + \\dfrac{n(n-1)}{2}y_n^2$，得
$$\\left|\\sqrt[n]{n} - 1\\right| = y_n < \\sqrt{\\frac{2}{n}} < \\varepsilon$$
取 $N = \\left[\\dfrac{2}{\\varepsilon^2}\\right]$。`
              },
              {
                id: 'ma-c2-s2-n4',
                type: 'theorem',
                title: '定理 2.2.1 极限的唯一性',
                content: `**定理**：收敛数列的极限必唯一。

**证明**（反证法 + 插项技巧）：设 $\\{x_n\\}$ 同时收敛于 $a$ 与 $b$。对任意 $\\varepsilon > 0$：
$$\\exists N_1,\\ \\forall n > N_1:\\ |x_n - a| < \\frac{\\varepsilon}{2}$$
$$\\exists N_2,\\ \\forall n > N_2:\\ |x_n - b| < \\frac{\\varepsilon}{2}$$

取 $N = \\max\\{N_1, N_2\\}$，当 $n > N$ 时，由三角不等式：
$$|a - b| = |a - x_n + x_n - b| \\leq |x_n - a| + |x_n - b| < \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon$$

由 $\\varepsilon$ 的任意性，$a = b$。$\\blacksquare$

**核心技巧**：**插项法**（加一项减一项）配合三角不等式，是极限证明中最常用的技巧。`
              },
              {
                id: 'ma-c2-s2-n5',
                type: 'theorem',
                title: '定理 2.2.2 收敛数列必有界',
                content: `**定理**：收敛数列必有界。

**证明**：设 $\\lim_{n\\to\\infty} x_n = a$，取 $\\varepsilon = 1$，则 $\\exists N$，当 $n > N$ 时 $|x_n - a| < 1$，即
$$a - 1 < x_n < a + 1$$

令
$$M = \\max\\{x_1, x_2, \\ldots, x_N,\\ a+1\\}, \\quad m = \\min\\{x_1, x_2, \\ldots, x_N,\\ a-1\\}$$

则对所有 $n$ 成立 $m \\leq x_n \\leq M$。$\\blacksquare$

**注**：逆命题不成立——有界数列未必收敛（如 $\\{(-1)^n\\}$ 有界但发散）。`
              },
              {
                id: 'ma-c2-s2-n6',
                type: 'theorem',
                title: '定理 2.2.3 数列的保序性',
                content: `**定理**：设 $\\lim_{n\\to\\infty} x_n = a$，$\\lim_{n\\to\\infty} y_n = b$，且 $a < b$，则 $\\exists N$，当 $n > N$ 时成立 $x_n < y_n$。

**证明**：取 $\\varepsilon = \\dfrac{b-a}{2} > 0$。由两数列的极限定义，$\\exists N_1, N_2$，当 $n > N = \\max\\{N_1, N_2\\}$ 时：
$$x_n < a + \\frac{b-a}{2} = \\frac{a+b}{2} < b - \\frac{b-a}{2} < y_n$$

**推论**（保号性）：
- 若 $\\lim_{n\\to\\infty} y_n = b > 0$，则 $\\exists N$，当 $n > N$ 时 $y_n > \\dfrac{b}{2} > 0$；
- 若 $\\lim_{n\\to\\infty} y_n = b < 0$，则 $\\exists N$，当 $n > N$ 时 $y_n < \\dfrac{b}{2} < 0$。

**注**：逆命题不成立，但有弱化结论：若 $x_n \\leq y_n$（$n > N$），$\\lim x_n = a$，$\\lim y_n = b$，则 $a \\leq b$（极限保持不等号方向，但严格不等号可能退化为等号）。`
              },
              {
                id: 'ma-c2-s2-n7',
                type: 'theorem',
                title: '定理 2.2.4 极限的夹逼性（夹逼定理）',
                content: `**定理**：若三数列 $\\{x_n\\}$，$\\{y_n\\}$，$\\{z_n\\}$ 从某项起满足
$$x_n \\leq y_n \\leq z_n, \\quad n > N_0$$
且 $\\lim_{n\\to\\infty} x_n = \\lim_{n\\to\\infty} z_n = a$，则 $\\lim_{n\\to\\infty} y_n = a$。

**证明**：$\\forall\\,\\varepsilon > 0$，$\\exists N_1, N_2$，取 $N = \\max\\{N_0, N_1, N_2\\}$，当 $n > N$ 时：
$$a - \\varepsilon < x_n \\leq y_n \\leq z_n < a + \\varepsilon \\Rightarrow |y_n - a| < \\varepsilon \\ \\ \\blacksquare$$

**应用技巧**：将目标数列 $\\{y_n\\}$ 用易于计算极限的 $\\{x_n\\}$ 和 $\\{z_n\\}$ 上下夹住，要求夹住后两侧极限相同。

**经典例题**：
$$\\lim_{n\\to\\infty}(\\sqrt{n+1}-\\sqrt{n}) = \\lim_{n\\to\\infty}\\frac{1}{\\sqrt{n+1}+\\sqrt{n}} = 0$$

$$\\lim_{n\\to\\infty}\\left(\\frac{1}{\\sqrt{n^2+1}}+\\frac{1}{\\sqrt{n^2+2}}+\\cdots+\\frac{1}{\\sqrt{n^2+n}}\\right) = 1$$

（由 $\\dfrac{n}{\\sqrt{n^2+n}} < \\text{原式} < \\dfrac{n}{\\sqrt{n^2+1}}$ 夹逼得到。）`
              },
              {
                id: 'ma-c2-s2-n8',
                type: 'theorem',
                title: '定理 2.2.5 极限的四则运算',
                content: `**定理**：设 $\\lim_{n\\to\\infty} x_n = a$，$\\lim_{n\\to\\infty} y_n = b$，则：

1. $\\lim_{n\\to\\infty}(\\alpha x_n + \\beta y_n) = \\alpha a + \\beta b$（$\\alpha, \\beta$ 为常数）
2. $\\lim_{n\\to\\infty}(x_n y_n) = ab$
3. $\\lim_{n\\to\\infty}\\dfrac{x_n}{y_n} = \\dfrac{a}{b}$（$b \\neq 0$）

**证明要点**（以乘法为例）：由收敛数列有界知 $\\exists X > 0$ 使 $|x_n| \\leq X$，则：
$$|x_n y_n - ab| = |x_n(y_n - b) + b(x_n - a)| \\leq X|y_n - b| + |b||x_n - a| < (X + |b|)\\varepsilon$$

**注意**：四则运算只适用于**有限个**数列，不能随意推广至无穷多项的情况。

**经典例题**：
$$\\lim_{n\\to\\infty}\\frac{5^{n+1}-(-2)^n}{3 \\cdot 5^n + 2 \\cdot 3^n} = \\lim_{n\\to\\infty}\\frac{5 - (-2/5)^n}{3 + 2 \\cdot (3/5)^n} = \\frac{5}{3}$$

$$\\lim_{n\\to\\infty} n(\\sqrt{n^2+1}-\\sqrt{n^2-1}) = \\lim_{n\\to\\infty}\\frac{2n}{\\sqrt{n^2+1}+\\sqrt{n^2-1}} = \\lim_{n\\to\\infty}\\frac{2}{\\sqrt{1+1/n^2}+\\sqrt{1-1/n^2}} = 1$$`
              },
              {
                id: 'ma-c2-s2-n9',
                type: 'theorem',
                title: '定理 2.2.6 Cesàro 均值定理与几何均值定理',
                content: `**Cesàro 均值定理**：若 $\\lim_{n\\to\\infty} a_n = a$，则
$$\\lim_{n\\to\\infty} \\frac{a_1 + a_2 + \\cdots + a_n}{n} = a$$

**证明思路**（先设 $a = 0$）：对 $\\varepsilon > 0$，$\\exists N_1$ 使 $n > N_1$ 时 $|a_n| < \\varepsilon/2$。对固定的前 $N_1$ 项之和，取充分大的 $N > N_1$ 使前缀和被 $n$ 除后也小于 $\\varepsilon/2$，再用三角不等式合并。

**几何均值定理**：若 $a_n > 0$ 且 $\\lim_{n\\to\\infty} a_n = a$，则
$$\\lim_{n\\to\\infty} \\sqrt[n]{a_1 a_2 \\cdots a_n} = a$$

**证明**（$a > 0$ 时）：由均值不等式
$$\\frac{a_1 + a_2 + \\cdots + a_n}{n} \\geq \\sqrt[n]{a_1 a_2 \\cdots a_n} \\geq \\frac{n}{\\dfrac{1}{a_1}+\\dfrac{1}{a_2}+\\cdots+\\dfrac{1}{a_n}}$$

两端由 Cesàro 定理均趋于 $a$，由夹逼定理得结论。$\\blacksquare$`
              }
            ]
          },
          {
            id: 'ma-c2-s3',
            type: 'section',
            title: '§3 无穷大量',
            children: [
              {
                id: 'ma-c2-s3-n1',
                type: 'concept',
                title: '无穷大量的定义（定义 2.3.1）',
                content: `**定义 2.3.1**：若对于任意给定的 $G > 0$，可以找到正整数 $N$，使得当 $n > N$ 时，成立
$$|x_n| > G$$
则称数列 $\\{x_n\\}$ 是**无穷大量**，记为 $\\lim_{n\\to\\infty} x_n = \\infty$。

**符号化表达**：$\\forall G > 0,\\ \\exists N,\\ \\forall n > N:\\ |x_n| > G$

**与极限定义的对比**：极限定义中 $\\varepsilon$ 代表任意小的正数，无穷大量定义中 $G$ 代表任意大的正数。

**定号无穷大量**：
- 若从某项起 $x_n > 0$，称为**正无穷大量**，记为 $\\lim_{n\\to\\infty} x_n = +\\infty$；
- 若从某项起 $x_n < 0$，称为**负无穷大量**，记为 $\\lim_{n\\to\\infty} x_n = -\\infty$。

**例**：$\\{n^2\\}$ 是正无穷大量；$\\{-10 \\cdot n!\\}$ 是负无穷大量；$\\{(-2)^n\\}$ 是（不定号）无穷大量。

**例 2.3.1**：$|q| > 1$ 时，$\\{q^n\\}$ 是无穷大量。

**证明**：$\\forall G > 1$，取 $N = \\left[\\dfrac{\\lg G}{\\lg|q|}\\right]$，则 $\\forall n > N$：
$$|q|^n > |q|^{\\lg G / \\lg|q|} = G \\ \\ \\blacksquare$$`
              },
              {
                id: 'ma-c2-s3-n2',
                type: 'theorem',
                title: '定理 2.3.1 无穷大量与无穷小量的互倒关系',
                content: `**定理**：设 $x_n \\neq 0$，则 $\\{x_n\\}$ 是无穷大量的充分必要条件是 $\\{1/x_n\\}$ 是无穷小量。

**证明**：
- （$\\Rightarrow$）设 $\\{x_n\\}$ 是无穷大量，$\\forall\\,\\varepsilon > 0$，取 $G = 1/\\varepsilon > 0$，则 $\\exists N$，$\\forall n > N$：$|x_n| > 1/\\varepsilon$，从而 $|1/x_n| < \\varepsilon$，即 $\\{1/x_n\\}$ 是无穷小量。
- （$\\Leftarrow$）设 $\\{1/x_n\\}$ 是无穷小量，$\\forall G > 0$，取 $\\varepsilon = 1/G > 0$，则 $\\exists N$，$\\forall n > N$：$|1/x_n| < 1/G$，从而 $|x_n| > G$，即 $\\{x_n\\}$ 是无穷大量。$\\blacksquare$`
              },
              {
                id: 'ma-c2-s3-n3',
                type: 'theorem',
                title: '定理 2.3.2 无穷大量的运算性质',
                content: `**基本运算规则**（设 $\\{x_n\\}$ 为无穷大量）：
- 同号无穷大量之和仍为该符号的无穷大量；
- 无穷大量与有界量之和或差仍为无穷大量；
- 同号无穷大量之积为正无穷大量，异号之积为负无穷大量。

**定理 2.3.2**：设 $\\{x_n\\}$ 是无穷大量，若当 $n > N_0$ 时 $|y_n| \\geq \\delta > 0$，则 $\\{x_n y_n\\}$ 是无穷大量。

**推论**：设 $\\{x_n\\}$ 是无穷大量，$\\lim_{n\\to\\infty} y_n = b \\neq 0$，则 $\\{x_n y_n\\}$ 与 $\\{x_n / y_n\\}$ 都是无穷大量。

**经典例题**：
$$\\lim_{n\\to\\infty}(10^n + \\sqrt{n}) = +\\infty, \\quad \\lim_{n\\to\\infty}(n - \\lg(1/n)) = +\\infty$$
$$\\lim_{n\\to\\infty}(\\sqrt{n} \\cdot \\arctan n) = +\\infty, \\quad \\lim_{n\\to\\infty}\\frac{n}{\\sin n} = \\infty$$`
              },
              {
                id: 'ma-c2-s3-n4',
                type: 'concept',
                title: '多项式比值的极限（例 2.3.3）',
                content: `**结论**：设 $a_0 \\neq 0$，$b_0 \\neq 0$，$k, l$ 为正整数，则

$$\\lim_{n\\to\\infty} \\frac{a_0 n^k + a_1 n^{k-1} + \\cdots + a_k}{b_0 n^l + b_1 n^{l-1} + \\cdots + b_l} = \\begin{cases} 0 & k < l \\\\ \\dfrac{a_0}{b_0} & k = l \\\\ \\infty & k > l \\end{cases}$$

**证明思路**：分子分母同除以 $n^l$，化为
$$n^{k-l} \\cdot \\frac{a_0 + a_1/n + \\cdots + a_k/n^k}{b_0 + b_1/n + \\cdots + b_l/n^l}$$
括号内极限为 $a_0/b_0 \\neq 0$，再对 $n^{k-l}$ 分三种情况讨论。

**记忆口诀**：**抓最高次项**——分子分母最高次之比决定极限，低次项均为无穷小量可忽略。`
              },
              {
                id: 'ma-c2-s3-n5',
                type: 'concept',
                title: '待定型极限',
                content: `**待定型**：无穷大量或无穷小量之间运算时，极限结果不确定的类型，包括：

$$\\infty \\pm \\infty, \\quad (+\\infty) - (+\\infty), \\quad 0 \\cdot \\infty, \\quad \\frac{0}{0}, \\quad \\frac{\\infty}{\\infty}$$

对于同一种待定型，极限结果可能为无穷小量、非零有限数、无穷大量，或根本不存在极限——须针对具体情况逐一分析。

**已见例子**：
- $\\lim_{n\\to\\infty} n(\\sqrt{n+1} - \\sqrt{n})$：$0 \\cdot \\infty$ 型，极限为 $\\dfrac{1}{2}$；
- $\\lim_{n\\to\\infty} \\dfrac{a_1 + a_2 + \\cdots + a_n}{n}$（$\\lim a_n = a \\neq 0$）：$\\infty/\\infty$ 型，极限为 $a$。`
              },
              {
                id: 'ma-c2-s3-n6',
                type: 'concept',
                title: '单调数列的定义（定义 2.3.2）',
                content: `**定义 2.3.2**：
- 若 $x_n \\leq x_{n+1}$（$n = 1, 2, 3, \\ldots$），称 $\\{x_n\\}$ 为**单调增加数列**；
- 若 $x_n < x_{n+1}$（$n = 1, 2, 3, \\ldots$），称 $\\{x_n\\}$ 为**严格单调增加数列**；
- 类似定义**单调减少数列**与**严格单调减少数列**。

**注**：数列前面有限项不影响收敛性，故"从某一项开始单调"的数列均纳入讨论范围。`
              },
              {
                id: 'ma-c2-s3-n7',
                type: 'theorem',
                title: '定理 2.3.3 Stolz 定理（∞/∞ 型离散 L\'Hôpital）',
                content: `**定理（Stolz）**：设 $\\{y_n\\}$ 是严格单调增加的正无穷大量，且
$$\\lim_{n\\to\\infty} \\frac{x_n - x_{n-1}}{y_n - y_{n-1}} = a \\ \\ (a \\text{ 可为有限数、} +\\infty \\text{ 或 } -\\infty)$$
则
$$\\lim_{n\\to\\infty} \\frac{x_n}{y_n} = a$$

**类比**：Stolz 定理是离散版的 L'Hôpital 法则，用差商代替导数之比。

**证明要点**（$a = 0$ 情形）：由 $|x_n - x_{n-1}| < \\varepsilon(y_n - y_{n-1})$，叠加得
$$|x_n - x_{N_1}| < \\varepsilon(y_n - y_{N_1})$$
两边除以 $y_n$，再控制 $|x_{N_1}|/y_n < \\varepsilon$（$n$ 充分大），得 $|x_n/y_n| < 2\\varepsilon$。

**经典应用**：

1. **Cesàro 定理**（$x_n = a_1 + \\cdots + a_n$，$y_n = n$）：
$$\\lim_{n\\to\\infty} a_n = a \\Rightarrow \\lim_{n\\to\\infty} \\frac{a_1 + a_2 + \\cdots + a_n}{n} = a$$

2. **幂次求和**（$x_n = 1^k + 2^k + \\cdots + n^k$，$y_n = n^{k+1}$）：
$$\\lim_{n\\to\\infty} \\frac{1^k + 2^k + \\cdots + n^k}{n^{k+1}} = \\frac{1}{k+1}$$

3. **加权求和**（$\\lim_{n\\to\\infty} a_n = a$，$x_n = a_1 + 2a_2 + \\cdots + na_n$，$y_n = n^2$）：
$$\\lim_{n\\to\\infty} \\frac{a_1 + 2a_2 + \\cdots + na_n}{n^2} = \\frac{a}{2}$$

**注意**：Stolz 定理的逆命题不成立——$x_n/y_n$ 的极限存在不能推出 $(x_n-x_{n-1})/(y_n-y_{n-1})$ 的极限存在。`
              }
            ]
          },
          { id: 'ma-c2-s4', type: 'section', title: '§4 收敛准则', children: [
              {
                id: 'ma-c2-s4-n1',
                type: 'theorem',
                title: '定理 2.4.1 单调有界数列收敛定理',
                content: `**定理 2.4.1**：单调有界数列必定收敛。

**证明**：不妨设 $\\{x_n\\}$ 单调增加且有上界，由确界存在定理，$\\{x_n\\}$ 构成的数集有上确界 $\\beta$，满足：
1. $\\forall n \\in \\mathbf{N^+}$：$x_n \\leq \\beta$；
2. $\\forall\\,\\varepsilon > 0$，$\\exists\\, x_{n_0}$：$x_{n_0} > \\beta - \\varepsilon$。

取 $N = n_0$，则 $\\forall n > N$：
$$\\beta - \\varepsilon < x_{n_0} \\leq x_n \\leq \\beta$$
因而 $|x_n - \\beta| < \\varepsilon$，即 $\\lim_{n\\to\\infty} x_n = \\beta$。$\\blacksquare$

**意义**：无需预知极限值，只需验证单调性与有界性即可判断收敛。极限值等于数集的上确界（单调增加）或下确界（单调减少）。收敛判断后，设极限为 $a$，在递推式两边同时取极限，解方程求出 $a$。`
              },
              {
                id: 'ma-c2-s4-n2',
                type: 'concept',
                title: '递推数列收敛性的典型例题（例 2.4.1–2.4.3）',
                content: `**标准方法**：①数学归纳法证有界性；②由递推式计算 $x_{n+1} - x_n$ 的符号验证单调性；③设极限为 $a$，在递推式两边取极限解方程求 $a$。

**例 2.4.1**（黄金比例递推）：$x_1 > 0$，$x_{n+1} = 1 + \\dfrac{x_n}{1+x_n}$。

归纳可得 $n \\geq 2$ 时 $1 < x_n < 2$，又
$$x_{n+1} - x_n = \\frac{x_n - x_{n-1}}{(1+x_n)(1+x_{n-1})}$$
故差的符号一致，$\\{x_n\\}$ 单调。设极限为 $a$，则 $a = 1 + \\dfrac{a}{1+a}$，解得
$$\\lim_{n\\to\\infty} x_n = \\frac{1+\\sqrt{5}}{2}$$

**例 2.4.2**（无穷小等价）：$0 < x_1 < 1$，$x_{n+1} = x_n(1-x_n)$。

$x_{n+1} - x_n = -x_n^2 < 0$，单调减少，下界为 $0$，极限方程 $a = a(1-a)$ 解得 $a = 0$。

此外，由 Stolz 定理：
$$\\lim_{n\\to\\infty}(n x_n) = \\lim_{n\\to\\infty}\\frac{n}{1/x_n} = \\lim_{n\\to\\infty}\\frac{1}{1/x_{n+1}-1/x_n} = \\lim_{n\\to\\infty}\\frac{x_{n+1}x_n}{x_n-x_{n+1}} = 1$$
即 $\\{x_n\\}$ 与 $\\{1/n\\}$ 是**等价无穷小量**。

**例 2.4.3**（根式递推）：$x_1 = \\sqrt{2}$，$x_{n+1} = \\sqrt{3+2x_n}$。

归纳得 $0 < x_n < 3$，又
$$x_{n+1} - x_n = \\frac{(3-x_n)(1+x_n)}{\\sqrt{3+2x_n}+x_n} > 0$$
单调增加有上界，极限方程 $a = \\sqrt{3+2a}$ 解得 $\\lim_{n\\to\\infty} x_n = 3$。`
              },
              {
                id: 'ma-c2-s4-n3',
                type: 'concept',
                title: 'Fibonacci 数列与黄金比例（例 2.4.4）',
                content: `**Fibonacci 数列**：$a_1 = a_2 = 1$，$a_{n+1} = a_n + a_{n-1}$（$n \\geq 2$）。各季兔群对数按此规律增长。

**增长率数列**：令 $b_n = \\dfrac{a_{n+1}}{a_n}$，则由递推关系得
$$b_n = 1 + \\frac{1}{b_{n-1}}$$

$\\{b_n\\}$ 不单调，但奇偶子列均单调有界：
- $\\{b_{2k}\\}$ 单调**减少**有下界 $\\dfrac{\\sqrt{5}+1}{2}$；
- $\\{b_{2k-1}\\}$ 单调**增加**有上界 $\\dfrac{\\sqrt{5}+1}{2}$。

两者均收敛，设极限分别为 $a, b$，由 $\\lim b_{2k+2} = \\lim\\dfrac{1+2b_{2k}}{1+b_{2k}}$ 得
$$a = \\frac{1+2a}{1+a} \\Rightarrow a^2 - a - 1 = 0 \\Rightarrow a = \\frac{1+\\sqrt{5}}{2}$$
同理 $b = \\dfrac{1+\\sqrt{5}}{2}$，故
$$\\lim_{n\\to\\infty} b_n = \\frac{1+\\sqrt{5}}{2}$$

**结论**：不论初始值如何，经充分长时间后，兔群逐季增长率趋于
$$\\frac{1+\\sqrt{5}}{2} - 1 = \\frac{\\sqrt{5}-1}{2} \\approx 0.618$$
这正是著名的**黄金比例**。`
              },
              {
                id: 'ma-c2-s4-n4',
                type: 'theorem',
                title: 'π 与 e 的极限定义（例 2.4.5–2.4.6）',
                content: `**π 的定义**（例 2.4.5）：设单位圆内接正 $n$ 边形半周长为 $L_n = n\\sin\\dfrac{180^\\circ}{n}$。

可证当 $n \\geq 3$ 时 $L_n$ 单调增加且有上界 $8$（由正 $n$ 边形面积 $S_n = L_n \\cos\\dfrac{180^\\circ}{n} < 4$），故 $\\{L_n\\}$ 收敛，其极限定义为圆周率：
$$\\pi \\triangleq \\lim_{n\\to\\infty} n\\sin\\frac{180^\\circ}{n}$$
在弧度制下，等价为 $\\displaystyle\\lim_{n\\to\\infty}\\frac{\\sin(\\pi/n)}{\\pi/n} = 1$，单位圆面积为 $\\pi$。

**e 的定义**（例 2.4.6）：令
$$x_n = \\left(1+\\frac{1}{n}\\right)^n, \\quad y_n = \\left(1+\\frac{1}{n}\\right)^{n+1}$$
由平均值不等式可证 $\\{x_n\\}$ 单调增加，$\\{y_n\\}$ 单调减少，且
$$2 = x_1 \\leq x_n < y_n \\leq y_1 = 4$$
故两者均有界，从而收敛；由 $y_n = x_n\\left(1+\\dfrac{1}{n}\\right)$ 可知极限相同：
$$e \\triangleq \\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^n = \\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^{n+1} = 2.71828\\ldots$$
$e$ 是无理数，以 $e$ 为底的对数称为**自然对数**，记为 $\\ln x = \\log_e x$。`
              },
              {
                id: 'ma-c2-s4-n5',
                type: 'theorem',
                title: 'p-级数收敛性与 Euler 常数（例 2.4.7–2.4.10）',
                content: `设 $a_n = 1 + \\dfrac{1}{2^p} + \\dfrac{1}{3^p} + \\cdots + \\dfrac{1}{n^p}$（$p > 0$），显然 $\\{a_n\\}$ 单调增加。

**定理**（例 2.4.7）：
$$\\{a_n\\}\\text{ 收敛} \\Leftrightarrow p > 1$$

**证明（$p > 1$，以 $2^k$ 分组放缩）**：令 $r = 2^{1-p} < 1$，则
$$\\frac{1}{2^p}+\\frac{1}{3^p} < \\frac{2}{2^p} = r,\\quad \\frac{1}{4^p}+\\cdots+\\frac{1}{7^p} < \\frac{4}{4^p} = r^2, \\quad \\ldots$$
故 $a_n < 1 + r + r^2 + \\cdots < \\dfrac{1}{1-r}$，有上界，收敛。

**Euler 常数**（例 2.4.8）：令 $b_n = 1 + \\dfrac{1}{2} + \\cdots + \\dfrac{1}{n} - \\ln n$。

由 $e$ 的定义得 $\\dfrac{1}{n+1} < \\ln\\dfrac{n+1}{n} < \\dfrac{1}{n}$，从而 $b_{n+1} - b_n < 0$ 且 $b_n > 0$，$\\{b_n\\}$ 单调减少有下界，收敛于
$$\\gamma = \\lim_{n\\to\\infty}\\left(1+\\frac{1}{2}+\\cdots+\\frac{1}{n}-\\ln n\\right) = 0.5772156649\\ldots \\quad \\text{（Euler 常数）}$$

**重要极限**（例 2.4.9–2.4.10）：
$$\\lim_{n\\to\\infty}\\left(\\frac{1}{n+1}+\\frac{1}{n+2}+\\cdots+\\frac{1}{2n}\\right) = \\ln 2$$

$$\\lim_{n\\to\\infty}\\left(1-\\frac{1}{2}+\\frac{1}{3}-\\cdots+\\frac{(-1)^{n+1}}{n}\\right) = \\ln 2$$`
              },
              {
                id: 'ma-c2-s4-n6',
                type: 'theorem',
                title: '定义 2.4.1 + 定理 2.4.2 闭区间套定理',
                content: `**定义 2.4.1**：若一列闭区间 $\\{[a_n, b_n]\\}$ 满足：
1. $[a_{n+1}, b_{n+1}] \\subset [a_n, b_n]$，$n = 1, 2, 3, \\ldots$（逐渐缩小）；
2. $\\lim_{n\\to\\infty}(b_n - a_n) = 0$（长度趋于零），

则称 $\\{[a_n, b_n]\\}$ 形成一个**闭区间套**。

**定理 2.4.2（闭区间套定理）**：若 $\\{[a_n, b_n]\\}$ 是一个闭区间套，则存在**唯一**实数 $\\xi$ 属于所有闭区间 $[a_n, b_n]$，且
$$\\xi = \\lim_{n\\to\\infty} a_n = \\lim_{n\\to\\infty} b_n$$

**证明**：由条件 (1)，$\\{a_n\\}$ 单调增加有上界 $b_1$，$\\{b_n\\}$ 单调减少有下界 $a_1$，由定理 2.4.1 均收敛；由条件 (2)，两极限相同记为 $\\xi$，由单调性 $a_n \\leq \\xi \\leq b_n$，夹逼性保证 $\\xi$ 唯一。$\\blacksquare$

**注**：将"闭区间套"改为"开区间套"，极限 $\\xi$ 依然存在，但 $\\xi$ 可能不属于任何开区间 $(a_n, b_n)$（如 $a_n = 0, b_n = 1/n$，则 $\\xi = 0 \\notin (0, 1/n)$）。`
              },
              {
                id: 'ma-c2-s4-n7',
                type: 'theorem',
                title: '定理 2.4.3 实数集是不可列集',
                content: `**定理 2.4.3**：实数集 $\\mathbf{R}$ 是不可列集。

**证明**（闭区间套 + 反证法）：假设 $\\mathbf{R}$ 可列，排列为 $\\{x_1, x_2, \\ldots, x_n, \\ldots\\}$。

任取闭区间 $[a_1, b_1]$。将 $[a_1, b_1]$ 三等分，三个子区间中至少有一个不含 $x_2$，记为 $[a_2, b_2]$。再将 $[a_2, b_2]$ 三等分，至少有一个不含 $x_3$，记为 $[a_3, b_3]$。以此类推，得到闭区间套 $\\{[a_n, b_n]\\}$，满足
$$x_n \\notin [a_n, b_n], \\quad n = 1, 2, 3, \\ldots$$
由闭区间套定理，$\\exists$ 唯一 $\\xi \\in \\bigcap_{n=1}^{\\infty}[a_n, b_n]$，故 $\\xi \\neq x_n$ 对所有 $n$ 成立，与 $\\mathbf{R} = \\{x_1, x_2, \\ldots\\}$ 矛盾。$\\blacksquare$

**对比**：有理数集 $\\mathbf{Q}$ 是可列集（定理 1.1.2），而 $\\mathbf{R}$ 不可列，说明无理数"远多于"有理数。`
              },
              {
                id: 'ma-c2-s4-n8',
                type: 'theorem',
                title: '定义 2.4.2 + 定理 2.4.4 子列',
                content: `**定义 2.4.2**：设 $n_1 < n_2 < \\cdots < n_k < n_{k+1} < \\cdots$ 是严格单调增加的正整数列，则
$$x_{n_1},\\ x_{n_2},\\ \\ldots,\\ x_{n_k},\\ \\ldots$$
称为 $\\{x_n\\}$ 的**子列**，记为 $\\{x_{n_k}\\}$。由严格单调性可知 $n_k \\geq k$。

**定理 2.4.4**：若 $\\lim_{n\\to\\infty} x_n = a$，则任意子列 $\\{x_{n_k}\\}$ 也收敛于 $a$：
$$\\lim_{n\\to\\infty} x_n = a \\Rightarrow \\lim_{k\\to\\infty} x_{n_k} = a$$

**证明**：对 $\\varepsilon > 0$，$\\exists N$，$\\forall n > N$ 有 $|x_n - a| < \\varepsilon$。取 $K = N$，$k > K$ 时 $n_k \\geq k > N$，故 $|x_{n_k} - a| < \\varepsilon$。$\\blacksquare$

**推论（发散判别）**：若 $\\{x_n\\}$ 有两个子列分别收敛于不同的极限，则 $\\{x_n\\}$ 发散。

**例 2.4.11**：$\\left\\{\\sin\\dfrac{n\\pi}{4}\\right\\}$ 发散。取 $n_k^{(1)} = 4k$，子列全为 $0 \\to 0$；取 $n_k^{(2)} = 8k+2$，子列全为 $1 \\to 1$；两极限不同，故发散。`
              },
              {
                id: 'ma-c2-s4-n9',
                type: 'theorem',
                title: '定理 2.4.5–2.4.6 Bolzano-Weierstrass 定理',
                content: `**定理 2.4.5（Bolzano-Weierstrass 定理）**：有界数列必有收敛子列。

**证明思路**（二分法构造闭区间套）：设 $\\{x_n\\} \\subset [a_1, b_1]$。

将 $[a_1, b_1]$ 二等分，至少有一半含 $\\{x_n\\}$ 的无穷多项，记为 $[a_2, b_2]$；继续二等分，得闭区间套 $\\{[a_k, b_k]\\}$，每个区间含无穷多项，$b_k - a_k = (b_1-a_1)/2^{k-1} \\to 0$。

由闭区间套定理，$\\xi = \\lim a_k = \\lim b_k$。从 $[a_k, b_k]$ 中依次选取下标严格递增的项 $x_{n_k}$，由夹逼性
$$a_k \\leq x_{n_k} \\leq b_k \\Rightarrow \\lim_{k\\to\\infty} x_{n_k} = \\xi \\quad \\blacksquare$$

**定理 2.4.6**：若 $\\{x_n\\}$ 无界，则存在子列 $\\{x_{n_k}\\}$ 使 $\\lim_{k\\to\\infty} x_{n_k} = \\infty$。

**证明**：$\\{x_n\\}$ 无界，则对任意 $M > 0$ 有无穷多项满足 $|x_n| > M$。依次取 $|x_{n_k}| > k$（$n_k$ 严格递增），则 $|x_{n_k}| > k \\to \\infty$。$\\blacksquare$`
              },
              {
                id: 'ma-c2-s4-n10',
                type: 'theorem',
                title: '定义 2.4.3 + 定理 2.4.7 Cauchy 收敛原理与实数系基本定理',
                content: `**定义 2.4.3（基本数列/Cauchy 数列）**：若 $\\{x_n\\}$ 满足
$$\\forall\\,\\varepsilon > 0,\\ \\exists N,\\ \\forall n, m > N:\\ |x_n - x_m| < \\varepsilon$$
则称 $\\{x_n\\}$ 为**基本数列**。

**定理 2.4.7（Cauchy 收敛原理）**：
$$\\{x_n\\}\\text{ 收敛} \\Leftrightarrow \\{x_n\\}\\text{ 是基本数列}$$

**必要性**：$\\lim x_n = a$，对 $\\varepsilon/2$ 取 $N$，则 $|x_n - x_m| \\leq |x_n - a| + |x_m - a| < \\varepsilon$。

**充分性**：基本数列有界（取 $\\varepsilon_0=1$），由 B-W 定理取收敛子列 $x_{n_k} \\to \\xi$，再由基本数列条件得 $|x_n - \\xi| \\leq \\varepsilon/2 < \\varepsilon$。$\\blacksquare$

**实数系完备性**：由实数组成的基本数列必存在实数极限。有理数系不完备（$\\{(1+1/n)^n\\}$ 是有理数基本数列，极限 $e$ 却是无理数）。

**压缩映射收敛**（例 2.4.14）：若 $|x_{n+1}-x_n| \\leq k|x_n-x_{n-1}|$，$0 < k < 1$，则
$$|x_m - x_n| \\leq \\frac{k^{n-1}}{1-k}|x_2-x_1| \\to 0$$
故 $\\{x_n\\}$ 是基本数列，从而收敛。

**五大基本定理等价性**（定理 2.4.8）：实数系连续性与完备性等价，以下五定理两两等价：
$$\\text{确界存在定理} \\Leftrightarrow \\text{单调有界收敛} \\Leftrightarrow \\text{闭区间套定理} \\Leftrightarrow \\text{B-W 定理} \\Leftrightarrow \\text{Cauchy 收敛原理}$$`
              }
            ]}
        ] },
      { id: 'ma-c3', type: 'chapter', title: '第三章 函数极限与连续函数', children: [ { id: 'ma-c3-s1', type: 'section', title: '§1 函数极限', children: [
              {
                id: 'ma-c3-s1-n1',
                type: 'concept',
                title: '函数极限的引入与直观理解',
                content: `在第二章讨论了数列极限之后，现考虑**函数极限**：当自变量趋于某点 $x_0$ 时，因变量是否趋于某定值 $A$。

**引例**：弦长与弧长之比 $y = \\dfrac{\\sin x}{x}$，当 $x \\to 0$ 时：

| $x$ | 0.5 | 0.1 | 0.05 | 0.01 |
|---|---|---|---|---|
| $y$ | 0.96 | 0.998 | 0.9996 | 0.9998 |

数值规律表明 $\\dfrac{\\sin x}{x} \\to 1$（$x \\to 0$），记为
$$\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$$

**关键注意**：$x \\to 0$ 的过程中**不取** $x = 0$（$x=0$ 时函数无意义）。函数极限研究的是趋近过程中的变化趋势，与函数在该点的值无关。`
              },
              {
                id: 'ma-c3-s1-n2',
                type: 'concept',
                title: '定义 3.1.1 函数极限的 ε-δ 定义',
                content: `**定义 3.1.1**：设 $f(x)$ 在点 $x_0$ 的某去心邻域 $O(x_0,\\rho)\\setminus\\{x_0\\}$ 有定义。若存在实数 $A$，对任意给定的 $\\varepsilon > 0$，可以找到 $\\delta > 0$，使得当 $0 < |x - x_0| < \\delta$ 时，成立
$$|f(x) - A| < \\varepsilon$$
则称 $A$ 为 $f(x)$ 在点 $x_0$ 的**极限**，记为
$$\\lim_{x \\to x_0} f(x) = A \\quad \\text{或} \\quad f(x) \\to A\\ (x \\to x_0)$$

**符号化**：
$$\\lim_{x \\to x_0} f(x) = A \\Longleftrightarrow \\forall\\,\\varepsilon > 0,\\ \\exists\\,\\delta > 0,\\ \\forall\\,x\\bigl(0 < |x-x_0| < \\delta\\bigr):\\; |f(x)-A| < \\varepsilon$$

**几何意义**：无论 $\\varepsilon$ 邻域 $(A-\\varepsilon, A+\\varepsilon)$ 收缩得多小，总能找到 $\\delta > 0$，使 $x_0$ 的 $\\delta$ 去心邻域内所有点的函数值均落入该 $\\varepsilon$ 邻域。

**与数列极限的对比**：$\\delta$（由 $\\varepsilon$ 决定，不要求最大最佳）类比数列中的 $N$；去心邻域条件 $0 < |x-x_0| < \\delta$（排除 $x_0$ 本身）类比 $n > N$。`
              },
              {
                id: 'ma-c3-s1-n3',
                type: 'concept',
                title: 'ε-δ 定义的应用——适度放大技巧（例 3.1.1–3.1.3）',
                content: `**核心方法**：适度放大 $|f(x)-A|$，先约束 $|x-x_0| < r_0$（通常取 1），再对多余因子放大，从而取 $\\delta = \\min\\{r_0, \\varepsilon/M\\}$。

**例 3.1.1**：$\\lim_{x \\to 0} e^x = 1$。

取 $\\delta = \\min\\{\\ln(1+\\varepsilon),\\ -\\ln(1-\\varepsilon)\\}$（设 $0<\\varepsilon<1$），则 $0 < |x| < \\delta$ 时 $|e^x - 1| < \\varepsilon$。

**例 3.1.2**：$\\lim_{x \\to 2} x^2 = 4$。

因 $|x^2-4| = |x-2|\\cdot|x+2|$，先限制 $|x-2| < 1$，则 $|x+2| < 5$，故
$$|x^2 - 4| < 5|x-2|$$
取 $\\delta = \\min\\left\\{1,\\ \\dfrac{\\varepsilon}{5}\\right\\}$，则 $|x^2 - 4| < 5 \\cdot \\dfrac{\\varepsilon}{5} = \\varepsilon$。

**例 3.1.3**：$\\lim_{x \\to 1} \\dfrac{x(x-1)}{x^2-1} = \\dfrac{1}{2}$。

$$\\left|\\frac{x(x-1)}{x^2-1}-\\frac{1}{2}\\right| = \\frac{|x-1|}{2|x+1|}$$
限制 $|x-1|<1$（即 $0<x<2$），则 $\\dfrac{1}{2|x+1|} < \\dfrac{1}{2}$，取 $\\delta = \\min\\{1, 2\\varepsilon\\}$，得结论。`
              },
              {
                id: 'ma-c3-s1-n4',
                type: 'theorem',
                title: '定理 3.1.1 函数极限的唯一性',
                content: `**定理 3.1.1**：若 $A$ 与 $B$ 都是 $f(x)$ 在 $x_0$ 的极限，则 $A = B$。

**证明**：$\\forall\\,\\varepsilon > 0$，由定义分别取 $\\delta_1, \\delta_2$，令 $\\delta = \\min\\{\\delta_1, \\delta_2\\}$，当 $0 < |x-x_0| < \\delta$ 时，
$$|A-B| \\leq |f(x)-A| + |f(x)-B| < \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon$$
由 $\\varepsilon$ 的任意性得 $A = B$。$\\blacksquare$

**核心技巧**：插项法（加减 $f(x)$）+ 三角不等式，与数列极限唯一性证明完全类比。`
              },
              {
                id: 'ma-c3-s1-n5',
                type: 'theorem',
                title: '定理 3.1.2 局部保序性及推论',
                content: `**定理 3.1.2（局部保序性）**：若 $\\lim_{x\\to x_0}f(x)=A$，$\\lim_{x\\to x_0}g(x)=B$，且 $A>B$，则 $\\exists\\,\\delta>0$，当 $0<|x-x_0|<\\delta$ 时，$f(x)>g(x)$。

**证明**：取 $\\varepsilon_0 = \\dfrac{A-B}{2}$，分别对 $f,g$ 用极限定义，取 $\\delta=\\min\\{\\delta_1,\\delta_2\\}$，即得
$$g(x) < \\frac{A+B}{2} < f(x) \\quad \\blacksquare$$

**推论 1（保号性）**：若 $\\lim_{x\\to x_0}f(x)=A\\ne 0$，则 $\\exists\\,\\delta>0$，当 $0<|x-x_0|<\\delta$ 时，$|f(x)| > \\dfrac{|A|}{2}$。

**推论 2（极限保序）**：若 $g(x)\\leq f(x)$（$0<|x-x_0|<r$），则 $B\\leq A$（注：即使 $g<f$，结论仍只能得到 $B\\leq A$，不能得到 $B<A$）。

**推论 3（局部有界性）**：若 $\\lim_{x\\to x_0}f(x)=A$，则 $\\exists\\,\\delta>0$，使 $f(x)$ 在 $O(x_0,\\delta)\\setminus\\{x_0\\}$ 中有界。（注：$\\delta$ 不能随意扩大。）`
              },
              {
                id: 'ma-c3-s1-n6',
                type: 'theorem',
                title: '定理 3.1.3 夹逼性 + 重要极限 lim(sin x/x)=1（例 3.1.4）',
                content: `**定理 3.1.3（夹逼性）**：若 $\\exists\\,r>0$，当 $0<|x-x_0|<r$ 时，$g(x)\\leq f(x)\\leq h(x)$，且
$$\\lim_{x\\to x_0}g(x)=\\lim_{x\\to x_0}h(x)=A$$
则 $\\lim_{x\\to x_0}f(x)=A$。$\\blacksquare$

**例 3.1.4（第一个重要极限）**：$\\displaystyle\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$。

**证明**：对 $0<x<\\dfrac{\\pi}{2}$，由面积不等式
$$\\triangle OAB \\text{ 面积} < \\text{扇形}OAB\\text{ 面积} < \\triangle OBC \\text{ 面积}$$
得
$$\\sin x < x < \\tan x \\Rightarrow \\cos x < \\frac{\\sin x}{x} < 1$$
此不等式对 $-\\dfrac{\\pi}{2}<x<0$ 同样成立。又由
$$|\\cos x - 1| = 2\\sin^2\\frac{x}{2} < \\frac{x^2}{2} \\to 0$$
得 $\\lim_{x\\to 0}\\cos x = 1$，由夹逼性得
$$\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1 \\quad \\blacksquare$$

**推广（例 3.1.5）**：$\\forall\\,\\alpha\\ne 0$，
$$\\lim_{x\\to 0}\\frac{\\sin\\alpha x}{x}=\\alpha, \\qquad \\lim_{x\\to 0}\\frac{\\sin\\alpha x}{\\sin\\beta x}=\\frac{\\alpha}{\\beta}\\ (\\beta\\ne 0)$$`
              },
              {
                id: 'ma-c3-s1-n7',
                type: 'theorem',
                title: '定理 3.1.4 函数极限的四则运算',
                content: `**定理 3.1.4**：设 $\\lim_{x\\to x_0}f(x)=A$，$\\lim_{x\\to x_0}g(x)=B$，则：

1. $\\lim_{x\\to x_0}(\\alpha f(x)+\\beta g(x))=\\alpha A+\\beta B$（$\\alpha,\\beta$ 为常数）；
2. $\\lim_{x\\to x_0}(f(x)g(x))=AB$；
3. $\\lim_{x\\to x_0}\\dfrac{f(x)}{g(x)}=\\dfrac{A}{B}$（$B\\ne 0$）。

**证明要点**：

(1)(2)：由局部有界性知 $|f(x)|\\leq X$，利用
$$|f(x)g(x)-AB| = |f(x)(g(x)-B)+B(f(x)-A)| < (X+|B|)\\varepsilon$$

(3)：由推论 1 知 $\\exists\\,\\delta^*$，$|g(x)|>\\dfrac{|B|}{2}$，故
$$\\left|\\frac{f(x)}{g(x)}-\\frac{A}{B}\\right| = \\left|\\frac{B(f(x)-A)-A(g(x)-B)}{Bg(x)}\\right| < \\frac{2(|A|+|B|)}{|B|^2}\\varepsilon \\quad \\blacksquare$$

**注意**：待定型（$\\infty-\\infty,\\ 0\\cdot\\infty,\\ 0/0,\\ \\infty/\\infty$ 等）不可直接套用，需具体分析。`
              },
              {
                id: 'ma-c3-s1-n8',
                type: 'theorem',
                title: '定理 3.1.5 Heine 定理（函数极限与数列极限的关系）',
                content: `**定理 3.1.5（Heine 定理）**：
$$\\lim_{x\\to x_0}f(x)=A \\Longleftrightarrow \\text{对任意满足 }\\lim_{n\\to\\infty}x_n=x_0\\text{ 且 }x_n\\ne x_0\\text{ 的数列 }\\{x_n\\}，\\lim_{n\\to\\infty}f(x_n)=A$$

**必要性**：由 $\\varepsilon$-$\\delta$ 定义，$\\exists N$，$n>N$ 时 $0<|x_n-x_0|<\\delta$，故 $|f(x_n)-A|<\\varepsilon$。

**充分性**（反证法）：若 $f$ 在 $x_0$ 不以 $A$ 为极限，则
$$\\exists\\,\\varepsilon_0>0,\\ \\forall\\,\\delta>0,\\ \\exists\\,x(0<|x-x_0|<\\delta):\\; |f(x)-A|\\geq\\varepsilon_0$$
取 $\\delta_k=\\dfrac{1}{k}$，选出 $x_k$ 满足 $|x_k-x_0|<\\dfrac{1}{k}$ 但 $|f(x_k)-A|\\geq\\varepsilon_0$，则 $x_k\\ne x_0$，$\\lim x_k=x_0$，但 $\\{f(x_k)\\}$ 不收敛于 $A$，矛盾。$\\blacksquare$

**例 3.1.6**：$\\sin\\dfrac{1}{x}$ 在 $x=0$ 无极限。

取 $x_n^{(1)}=\\dfrac{1}{n\\pi}\\to 0$，$\\lim\\sin\\dfrac{1}{x_n^{(1)}}=0$；取 $x_n^{(2)}=\\dfrac{1}{2n\\pi+\\pi/2}\\to 0$，$\\lim\\sin\\dfrac{1}{x_n^{(2)}}=1$；两极限不同，故无极限。$\\blacksquare$`
              },
              {
                id: 'ma-c3-s1-n9',
                type: 'concept',
                title: '定义 3.1.2 单侧极限（左极限与右极限）',
                content: `当 $f(x)$ 只在 $x_0$ 一侧有定义，或需分侧研究时，引入**单侧极限**。

**定义 3.1.2**：
- **左极限**：$f(x)$ 在 $(x_0-\\rho, x_0)$ 有定义，若 $\\forall\\,\\varepsilon>0$，$\\exists\\,\\delta>0$，$-\\delta<x-x_0<0$ 时 $|f(x)-B|<\\varepsilon$，记为
$$\\lim_{x\\to x_0^-}f(x)=f(x_0^-)=B$$
- **右极限**：条件 $0<x-x_0<\\delta$，记为
$$\\lim_{x\\to x_0^+}f(x)=f(x_0^+)=C$$

**充要条件**：
$$\\lim_{x\\to x_0}f(x)=A \\Longleftrightarrow \\lim_{x\\to x_0^-}f(x)=\\lim_{x\\to x_0^+}f(x)=A$$

**例 3.1.7**：$\\operatorname{sgn}x$ 在 $x=0$：$f(0^-)=-1$，$f(0^+)=1$，左右极限不等，极限不存在。

**例 3.1.8**：$f(x)=\\begin{cases}\\dfrac{\\sin 2x}{x}, & x<0\\\\[4pt]2\\cos x^2, & x\\geq 0\\end{cases}$

$\\lim_{x\\to 0^-}f(x)=2$，$\\lim_{x\\to 0^+}f(x)=2$，故 $\\lim_{x\\to 0}f(x)=2$。`
              },
              {
                id: 'ma-c3-s1-n10',
                type: 'concept',
                title: '函数极限定义的扩充（六种趋近过程 × 四种极限值）',
                content: `**自变量的六种趋近过程**及对应的描述语言：

| 趋近过程 | 条件语言 |
|---|---|
| $x\\to x_0$ | $\\exists\\,\\delta>0,\\; 0<|x-x_0|<\\delta$ |
| $x\\to x_0^+$ | $\\exists\\,\\delta>0,\\; 0<x-x_0<\\delta$ |
| $x\\to x_0^-$ | $\\exists\\,\\delta>0,\\; -\\delta<x-x_0<0$ |
| $x\\to \\infty$ | $\\exists\\,X>0,\\; |x|>X$ |
| $x\\to +\\infty$ | $\\exists\\,X>0,\\; x>X$ |
| $x\\to -\\infty$ | $\\exists\\,X>0,\\; x<-X$ |

**函数值的四种极限情况**：
- $f(x)\\to A$（有穷）：$|f(x)-A|<\\varepsilon$
- $f(x)\\to \\infty$：$|f(x)|>G$
- $f(x)\\to +\\infty$：$f(x)>G$
- $f(x)\\to -\\infty$：$f(x)<-G$

**例**：$\\lim_{x\\to x_0^+}f(x)=\\infty$：$\\forall\\,G>0,\\;\\exists\\,\\delta>0,\\;0<x-x_0<\\delta$ 时 $|f(x)|>G$。

**有理函数极限规律**（例 3.1.12）：多项式比值 $\\dfrac{a_n x^n+\\cdots+a_k x^k}{b_m x^m+\\cdots+b_j x^j}$（$a_n,a_k,b_m,b_j\\ne 0$）：

$$x\\to\\infty:\\; L=\\begin{cases}a_n/b_n & n=m\\\\0 & n<m\\\\\\infty & n>m\\end{cases} \\qquad x\\to 0:\\; l=\\begin{cases}a_k/b_k & k=j\\\\0 & k>j\\\\\\infty & k<j\\end{cases}$$

**口诀**：$x\\to\\infty$ 看**最高次**；$x\\to 0$ 看**最低次**。`
              },
              {
                id: 'ma-c3-s1-n11',
                type: 'theorem',
                title: '第二个重要极限：lim(1+1/x)^x = e（例 3.1.13）',
                content: `**定理**：$\\displaystyle\\lim_{x\\to\\infty}\\left(1+\\frac{1}{x}\\right)^x = e$

**证明**：

**$x\\to+\\infty$ 情形**：对任意 $x\\geq 1$，令 $n=[x]$（整数部分），由
$$\\left(1+\\frac{1}{n+1}\\right)^n < \\left(1+\\frac{1}{x}\\right)^x < \\left(1+\\frac{1}{n}\\right)^{n+1}$$
当 $x\\to+\\infty$ 时 $n\\to\\infty$，两侧数列极限均为 $e$，由夹逼性得结论。

**$x\\to-\\infty$ 情形**：令 $y=-x$，$x\\to-\\infty$ 时 $y\\to+\\infty$，
$$\\lim_{x\\to-\\infty}\\left(1+\\frac{1}{x}\\right)^x = \\lim_{y\\to+\\infty}\\left(1-\\frac{1}{y}\\right)^{-y} = \\lim_{y\\to+\\infty}\\left(1+\\frac{1}{y-1}\\right)^{y-1}\\cdot\\left(1+\\frac{1}{y-1}\\right) = e$$

综合得 $\\lim_{x\\to\\infty}\\left(1+\\dfrac{1}{x}\\right)^x = e$。$\\blacksquare$

**推论**：$\\lim_{x\\to\\infty}\\left(1-\\dfrac{1}{x}\\right)^x = \\dfrac{1}{e}$。`
              },
              {
                id: 'ma-c3-s1-n12',
                type: 'theorem',
                title: '定理 3.1.6 函数极限的 Cauchy 收敛原理',
                content: `**定理 3.1.6**：$\\lim_{x\\to+\\infty}f(x)$ 存在且有限的充要条件是：$\\forall\\,\\varepsilon>0$，$\\exists\\,X>0$，使对一切 $x',x''>X$，成立
$$|f(x')-f(x'')|<\\varepsilon$$

**必要性**：设极限为 $A$，取 $\\varepsilon/2$，由定义知 $|f(x')-f(x'')| \\leq |f(x')-A|+|f(x'')-A|<\\varepsilon$。

**充分性**：任取 $x_n\\to+\\infty$，则 $\\{f(x_n)\\}$ 是基本数列（Cauchy 数列），由数列 Cauchy 原理知其收敛；由 Heine 定理（对应版本）知函数极限存在。$\\blacksquare$

**类比**：本定理是数列 Cauchy 收敛原理（定理 2.4.7）在函数极限中的对应，核心思想完全一致——"项与项之间任意接近"等价于收敛。

**应用**：在反常积分收敛性判别法则等方面发挥重要作用。类似定理对 $x\\to\\infty,\\ x\\to x_0^+,\\ x\\to x_0^-$ 等情形均成立。`
              }
            ]}, { id: 'ma-c3-s2', type: 'section', title: '§2 连续函数', children: [
              {
                id: 'ma-c3-s2-n1',
                type: 'concept',
                title: '定义 3.2.1 函数在一点的连续性',
                content: `**核心思想**：当自变量 $x$ 在 $x_0$ 附近作微小变化时，$f(x)$ 是否也在 $f(x_0)$ 附近作微小变化——即 $x\\to x_0$ 时是否有 $f(x)\\to f(x_0)$。

**定义 3.2.1**：设函数 $f(x)$ 在点 $x_0$ 的某个邻域中有定义，且

$$\\lim_{x\\to x_0}f(x)=f(x_0),$$

则称 $f(x)$ 在点 $x_0$ **连续**，$x_0$ 是 $f(x)$ 的**连续点**。

**注**："$f(x)$ 在点 $x_0$ 连续"是极限 $\\lim_{x\\to x_0}f(x)=A$ 当 $A=f(x_0)$ 的特殊情形，此时可以去掉 $|x-x_0|>0$ 的要求（$x=x_0$ 时 $|f(x)-f(x_0)|=0<\\varepsilon$ 显然成立）。连续性是**局部概念**，可逐点考察以了解函数在区间上的连续情况。`
              },
              {
                id: 'ma-c3-s2-n2',
                type: 'concept',
                title: '连续的 ε-δ 等价刻画',
                content: `"$f(x)$ 在点 $x_0$ 连续"的 $\\varepsilon$-$\\delta$ 语言表述：

$$\\forall\\,\\varepsilon>0,\\ \\exists\\,\\delta>0,\\ \\forall\\,x\\,(|x-x_0|<\\delta):\\quad|f(x)-f(x_0)|<\\varepsilon.$$

与极限定义的区别：连续定义中 $|x-x_0|<\\delta$ **包含** $x=x_0$（极限定义要求 $0<|x-x_0|<\\delta$，排除 $x=x_0$）。`
              },
              {
                id: 'ma-c3-s2-n3',
                type: 'concept',
                title: '定义 3.2.2–3.2.4 开区间、单侧连续与闭区间连续',
                content: `**定义 3.2.2（开区间连续）**：若 $f(x)$ 在区间 $(a,b)$ 的每一点都连续，则称 $f(x)$ 在开区间 $(a,b)$ 上连续。

**定义 3.2.3（单侧连续）**：
- **左连续**：$\\lim_{x\\to x_0^-}f(x)=f(x_0)$，等价于 $\\forall\\,\\varepsilon>0,\\ \\exists\\,\\delta>0,\\ \\forall\\,x\\,(-\\delta<x-x_0\\le 0):|f(x)-f(x_0)|<\\varepsilon$；
- **右连续**：$\\lim_{x\\to x_0^+}f(x)=f(x_0)$，等价于 $\\forall\\,\\varepsilon>0,\\ \\exists\\,\\delta>0,\\ \\forall\\,x\\,(0\\le x-x_0<\\delta):|f(x)-f(x_0)|<\\varepsilon$。

**定义 3.2.4（闭区间连续）**：若 $f(x)$ 在 $(a,b)$ 连续，且在左端点 $a$ 右连续，在右端点 $b$ 左连续，则称 $f(x)$ 在闭区间 $[a,b]$ 上连续。

**统一表述**：设 $f(x)$ 定义在区间 $X$（开、闭或半开半闭）上，若 $\\forall\\,x_0\\in X$，$\\forall\\,\\varepsilon>0$，$\\exists\\,\\delta>0$，$\\forall\\,x\\in X\\,(|x-x_0|<\\delta):|f(x)-f(x_0)|<\\varepsilon$，则称 $f(x)$ 在 $X$ 上连续。`
              },
              {
                id: 'ma-c3-s2-n4',
                type: 'theorem',
                title: '连续函数的四则运算法则',
                content: `**法则**：设 $\\lim_{x\\to x_0}f(x)=f(x_0)$，$\\lim_{x\\to x_0}g(x)=g(x_0)$，则

$$\\lim_{x\\to x_0}(\\alpha f(x)+\\beta g(x))=\\alpha f(x_0)+\\beta g(x_0)\\qquad(\\alpha,\\beta\\text{ 为常数});$$

$$\\lim_{x\\to x_0}(f(x)g(x))=f(x_0)g(x_0);$$

$$\\lim_{x\\to x_0}\\frac{f(x)}{g(x)}=\\frac{f(x_0)}{g(x_0)}\\qquad(g(x_0)\\ne 0).$$

**推论**：若有限个函数在某区间连续，则它们经过有限次加、减、乘、除（分母不为零处）所得函数在该区间上仍连续。`
              },
              {
                id: 'ma-c3-s2-n5',
                type: 'concept',
                title: '多项式、有理函数与三角函数的连续性',
                content: `由连续函数的四则运算法则，可得：

**多项式**：$P_n(x)=a_nx^n+a_{n-1}x^{n-1}+\\cdots+a_1x+a_0$ 在 $(-\\infty,+\\infty)$ 上连续。

**有理函数**：$Q(x)=\\dfrac{a_nx^n+\\cdots+a_0}{b_mx^m+\\cdots+b_0}$ 在其定义域（去掉分母为零的至多 $m$ 个点）上连续。

**三角函数**（由 $\\sin x$、$\\cos x$ 的连续性出发）：
- $\\tan x=\\dfrac{\\sin x}{\\cos x}$，$\\sec x=\\dfrac{1}{\\cos x}$ 在 $\\{x\\mid x\\ne k\\pi+\\tfrac{\\pi}{2},\\ k\\in\\mathbb{Z}\\}$ 上连续；
- $\\cot x=\\dfrac{\\cos x}{\\sin x}$，$\\csc x=\\dfrac{1}{\\sin x}$ 在 $\\{x\\mid x\\ne k\\pi,\\ k\\in\\mathbb{Z}\\}$ 上连续。`
              },
              {
                id: 'ma-c3-s2-n6',
                type: 'concept',
                title: '不连续点的三种分类',
                content: `$f(x)$ 在点 $x_0$ 连续须同时满足：① $f(x_0)$ 有定义（有限值）；② $f(x_0^-)=f(x_0)$；③ $f(x_0^+)=f(x_0)$。缺一则称 $x_0$ 为**间断点（不连续点）**。

**第一类不连续点（跳跃点）**：左、右极限都存在但不相等，$f(x_0^+)\\ne f(x_0^-)$。右极限与左极限之差

$$f(x_0^+)-f(x_0^-)$$

称为函数在 $x_0$ 的**跃度**。例：$\\operatorname{sgn}x$ 在 $x=0$ 的跃度为 $2$（$f(0^-)=-1,\\ f(0^+)=1$）。

**第二类不连续点**：左、右极限中至少有一个不存在。例：$e^{1/x}$ 在 $x=0$ 的右极限为 $+\\infty$；$\\sin\\dfrac{1}{x}$ 在 $x=0$ 的左右极限均不存在。

**第三类不连续点（可去间断点）**：左、右极限都存在且相等，但不等于 $f(x_0)$，或 $f$ 在 $x_0$ 无定义。例：$f(x)=x\\sin\\dfrac{1}{x}$ 在 $x=0$ 无定义，但左右极限均为 $0$；补充定义 $f(0)=0$ 后即成为连续函数。`
              },
              {
                id: 'ma-c3-s2-n7',
                type: 'concept',
                title: 'Riemann 函数的连续性分析（例 3.2.7）',
                content: `**Riemann 函数**定义为

$$R(x)=\\begin{cases}\\dfrac{1}{p}, & x=\\dfrac{q}{p}\\,(p\\in\\mathbb{N}^+,q\\in\\mathbb{Z}\\setminus\\{0\\},p,q\\text{ 互素}),\\\\[6pt]1, & x=0,\\\\[4pt]0, & x\\text{ 是无理数}.\\end{cases}$$

**结论**：$\\lim_{x\\to x_0}R(x)=0$ 对一切 $x_0$ 成立。从而：
- 所有**无理点**是 $R(x)$ 的连续点；
- 所有**有理点**是 $R(x)$ 的第三类不连续点（可去间断点）。

**证明要点**：对任意 $\\varepsilon>0$，取 $k=\\left[\\dfrac{1}{\\varepsilon}\\right]$，在 $[0,1]$ 上分母不超过 $k$ 的有理点个数有限，设为 $r_1,\\ldots,r_m$，取 $\\delta=\\min_{r_i\\ne x_0}|r_i-x_0|>0$。当 $0<|x-x_0|<\\delta$ 时，若 $x$ 为有理数则其分母 $>k$，故 $R(x)\\le\\dfrac{1}{k+1}<\\varepsilon$；若 $x$ 为无理数则 $R(x)=0$，因此 $|R(x)-0|<\\varepsilon$。`
              },
              {
                id: 'ma-c3-s2-n8',
                type: 'theorem',
                title: '单调函数的不连续点必为第一类不连续点（例 3.2.8）',
                content: `**结论**：区间 $(a,b)$ 上的单调函数，其每个不连续点必为**跳跃点**（第一类不连续点）。

**证明思路**（以单调增加为例）：对 $x_0\\in(a,b)$，集合 $\\{f(x)\\mid x\\in(a,x_0)\\}$ 有上界，由确界存在定理令

$$\\alpha=\\sup\\{f(x)\\mid x<x_0\\},\\quad \\beta=\\inf\\{f(x)\\mid x>x_0\\}.$$

用 $\\varepsilon$-$\\delta$ 论证可得 $\\lim_{x\\to x_0^-}f(x)=\\alpha$，$\\lim_{x\\to x_0^+}f(x)=\\beta$，两者都存在，故不连续点只能是跳跃点。`
              },
              {
                id: 'ma-c3-s2-n9',
                type: 'theorem',
                title: '定理 3.2.1 反函数存在性定理',
                content: `**定理 3.2.1**：若函数 $y=f(x),\\ x\\in D_f$ 是严格单调增加（减少）的，则存在反函数 $x=f^{-1}(y),\\ y\\in R_f$，且 $f^{-1}(y)$ 也是严格单调增加（减少）的。

**证明要点**：严格单调性保证 $x'<x''\\Leftrightarrow f(x')<f(x'')$，从而每个 $y\\in R_f$ 的逆像唯一，反函数存在。单调性对称地传给 $f^{-1}$：若 $y_1<y_2$ 而 $f^{-1}(y_1)\\ge f^{-1}(y_2)$，与严格单调性矛盾，故 $f^{-1}(y_1)<f^{-1}(y_2)$。`
              },
              {
                id: 'ma-c3-s2-n10',
                type: 'theorem',
                title: '定理 3.2.2 反函数连续性定理',
                content: `**定理 3.2.2**：设函数 $y=f(x)$ 在 $[a,b]$ 上连续且严格单调增加，$f(a)=\\alpha$，$f(b)=\\beta$，则其反函数 $x=f^{-1}(y)$ 在 $[\\alpha,\\beta]$ 上连续且严格单调增加。

**证明要点**：
1. **值域**：用确界存在定理证明 $f([a,b])=[\\alpha,\\beta]$（中间值性质，由连续性保证）。
2. **连续性**：对 $y_0\\in(\\alpha,\\beta)$，设 $x_0=f^{-1}(y_0)$。对任意 $\\varepsilon>0$，令 $y_1=f(x_0-\\varepsilon)$，$y_2=f(x_0+\\varepsilon)$，取 $\\delta=\\min\\{y_0-y_1,y_2-y_0\\}>0$，则 $|y-y_0|<\\delta\\Rightarrow|f^{-1}(y)-x_0|<\\varepsilon$。

**应用**：
- 反三角函数 $\\arcsin x$（$x\\in[-1,1]$），$\\arccos x$（$x\\in[-1,1]$），$\\arctan x$（$x\\in(-\\infty,+\\infty)$），$\\operatorname{arccot}x$（$x\\in(-\\infty,+\\infty)$）在各自定义域上连续；
- 对数函数 $y=\\log_a x$（$a>0,a\\ne 1$）在 $(0,+\\infty)$ 上连续。`
              },
              {
                id: 'ma-c3-s2-n11',
                type: 'theorem',
                title: '定理 3.2.3 复合函数的连续性',
                content: `**定理 3.2.3**：若 $u=g(x)$ 在点 $x_0$ 连续（$g(x_0)=u_0$），$y=f(u)$ 在点 $u_0$ 连续，则复合函数 $y=f\\circ g(x)$ 在点 $x_0$ 连续。

**证明**：对任意 $\\varepsilon>0$，由 $f$ 在 $u_0$ 连续，$\\exists\\,\\eta>0$ 使 $|u-u_0|<\\eta\\Rightarrow|f(u)-f(u_0)|<\\varepsilon$；由 $g$ 在 $x_0$ 连续，$\\exists\\,\\delta>0$ 使 $|x-x_0|<\\delta\\Rightarrow|g(x)-u_0|<\\eta$；从而 $|x-x_0|<\\delta\\Rightarrow|f\\circ g(x)-f\\circ g(x_0)|<\\varepsilon$。$\\blacksquare$

**注意**：仅有 $\\lim_{x\\to x_0}g(x)=u_0$ 与 $\\lim_{u\\to u_0}f(u)=A$，不足以推出 $\\lim_{x\\to x_0}f\\circ g(x)=A$（反例：$f(u)=\\begin{cases}0,&u=0\\\\1,&u\\ne0\\end{cases}$，$g(x)=x\\sin\\dfrac{1}{x}$）。

**应用**：双曲函数 $\\operatorname{sh}x=\\dfrac{e^x-e^{-x}}{2}$，$\\operatorname{ch}x=\\dfrac{e^x+e^{-x}}{2}$ 在 $(-\\infty,+\\infty)$ 连续；幂函数 $x^\\alpha=e^{\\alpha\\ln x}$ 在 $(0,+\\infty)$ 连续。`
              },
              {
                id: 'ma-c3-s2-n12',
                type: 'theorem',
                title: '定理 3.2.4 初等函数连续性定理',
                content: `**定理 3.2.4**：一切初等函数都在其定义区间上连续。

**依据**：6 类基本初等函数（常数、幂函数、指数函数、对数函数、三角函数、反三角函数）均在各自定义域上连续，且由定理 3.2.3（复合函数连续性）和四则运算法则，由基本初等函数经有限次四则运算及复合运算得到的初等函数在其定义区间上也连续。

**实用推论（连续性代入法）**：若 $f$ 是初等函数，$x_0$ 在其定义区间内，则

$$\\lim_{x\\to x_0}f(x)=f(x_0).$$

即对初等函数，求极限可直接代入，无需繁琐的 $\\varepsilon$-$\\delta$ 论证。例如

$$\\lim_{x\\to 0}(\\cos x)^{x^{-2}}=e^{\\lim_{x\\to 0}\\frac{\\ln\\cos x}{x^2}}=e^{-1/2}=\\frac{1}{\\sqrt{e}}.$$`
              }
            ] }, { id: 'ma-c3-s3', type: 'section', title: '§3 无穷小量与无穷大量的阶', children: [
              {
                id: 'ma-c3-s3-n1',
                type: 'concept',
                title: '定义 3.3.1 无穷小量',
                content: `**定义 3.3.1**：若 $\\lim_{x\\to x_0}f(x)=0$，则称当 $x\\to x_0$ 时，$f(x)$ 是**无穷小量**。

即无穷小量是**以 $0$ 为极限的变量**。这里的极限过程可以扩充到 $x\\to x_0^+$、$x\\to x_0^-$、$x\\to\\infty$ 等情况。

**比较思路**：设 $u(x),v(x)$ 当 $x\\to x_0$ 时都是无穷小量。为比较两者趋于零的速度，考察

$$\\lim_{x\\to x_0}\\frac{u(x)}{v(x)}$$

的不同情形（$0$、非零有界、$1$），分别给出**高阶**、**同阶**、**等价**三类关系。`
              },
              {
                id: 'ma-c3-s3-n2',
                type: 'concept',
                title: '高阶无穷小量 o(·)',
                content: `**定义**：若 $\\lim_{x\\to x_0}\\dfrac{u(x)}{v(x)}=0$，则称当 $x\\to x_0$ 时 $u(x)$ 关于 $v(x)$ 是**高阶无穷小量**（或 $v(x)$ 关于 $u(x)$ 是**低阶无穷小量**），记为

$$u(x)=o(v(x))\\qquad(x\\to x_0).$$

**典型例子**：

- 由 $\\lim_{x\\to 0}\\dfrac{1-\\cos x}{x}=\\lim_{x\\to 0}\\dfrac{2\\sin^2\\frac{x}{2}}{x}=0$，得 $1-\\cos x=o(x)\\ (x\\to 0)$；
- 由 $\\lim_{x\\to 0}\\dfrac{\\tan x-\\sin x}{x^2}=\\lim_{x\\to 0}\\left(\\dfrac{\\sin x}{x\\cos x}\\cdot\\dfrac{1-\\cos x}{x}\\right)=0$，得 $\\tan x-\\sin x=o(x^2)\\ (x\\to 0)$。

**记号提醒**：$o$ 始终相对于一定的极限过程，使用时一般应附上 "$(x\\to x_0)$"，除非意义明确。`
              },
              {
                id: 'ma-c3-s3-n3',
                type: 'concept',
                title: '有界量 O(·) 与同阶无穷小量',
                content: `**有界量**：若存在 $A>0$，使得在 $x_0$ 的某个去心邻域中成立

$$\\left|\\frac{u(x)}{v(x)}\\right|\\le A,$$

则称当 $x\\to x_0$ 时 $\\dfrac{u(x)}{v(x)}$ 是**有界量**，记为

$$u(x)=O(v(x))\\qquad(x\\to x_0).$$

**例**：$x\\to 0$ 时 $\\left|\\dfrac{x\\sin\\frac{1}{x}}{x}\\right|\\le 1$，故 $x\\sin\\dfrac{1}{x}=O(x)\\ (x\\to 0)$。

**同阶无穷小量**：若进一步存在 $a>0$ 使

$$a\\le\\left|\\frac{u(x)}{v(x)}\\right|\\le A,$$

则称当 $x\\to x_0$ 时 $u(x)$ 与 $v(x)$ 是**同阶无穷小量**。

**常用推论**：若 $\\lim_{x\\to x_0}\\dfrac{u(x)}{v(x)}=c\\ne 0$，则 $u(x)$ 与 $v(x)$ 必为同阶无穷小量。`
              },
              {
                id: 'ma-c3-s3-n4',
                type: 'concept',
                title: '等价无穷小量 ~',
                content: `**定义**：若 $\\lim_{x\\to x_0}\\dfrac{u(x)}{v(x)}=1$，则称当 $x\\to x_0$ 时 $u(x)$ 与 $v(x)$ 是**等价无穷小量**，记为

$$u(x)\\sim v(x)\\qquad(x\\to x_0).$$

**等价关系的 $o$-展开形式**：

$$u(x)=v(x)+o(v(x))\\qquad(x\\to x_0),$$

表示 $u(x)$ 与 $v(x)$ 相差一个关于 $v(x)$ 的高阶无穷小量。

**核心三例**（$x\\to 0$）：

- $\\sin x\\sim x$，即 $\\sin x=x+o(x)$；
- $1-\\cos x\\sim\\dfrac{1}{2}x^2$，即 $1-\\cos x=\\dfrac{1}{2}x^2+o(x^2)$；
- $\\tan x-\\sin x\\sim\\dfrac{1}{2}x^3$。

**阶的确定**：通常选取 $v(x)=(x-x_0)^k$（若 $x\\to\\infty$ 则取 $v(x)=\\dfrac{1}{x^k}$）与 $u(x)$ 比较。由 $1-\\cos x\\sim\\dfrac{1}{2}x^2$ 可知 $1-\\cos x$ 是**二阶**无穷小量；由 $\\tan x-\\sin x\\sim\\dfrac{1}{2}x^3$ 可知它是**三阶**无穷小量。`
              },
              {
                id: 'ma-c3-s3-n5',
                type: 'concept',
                title: '记号 o(1) 与 O(1)',
                content: `**约定**：

- $u(x)=o(1)\\ (x\\to x_0)$ 表示 $u(x)$ 是**无穷小量**；
- $u(x)=O(1)\\ (x\\to x_0)$ 表示 $u(x)$ 是**有界量**。

**例 1**：$x\\to 0+$ 时，$-\\dfrac{1}{\\ln x}$ 是无穷小量，但它关于任意 $x^\\alpha$（$\\alpha$ 为任意小的正数）总是**低阶**无穷小量（见例 3.3.1），故只能表示为

$$-\\frac{1}{\\ln x}=o(1)\\qquad(x\\to 0+).$$

**例 2**：$x\\to 0$ 时 $e^x\\sin\\dfrac{1}{x}$ 是有界量，故

$$e^x\\sin\\frac{1}{x}=O(1)\\qquad(x\\to 0).$$`
              },
              {
                id: 'ma-c3-s3-n6',
                type: 'concept',
                title: '定义 3.3.2 无穷大量',
                content: `**定义 3.3.2**：若 $\\lim_{x\\to x_0}f(x)=\\infty$（或 $\\pm\\infty$），则称当 $x\\to x_0$ 时 $f(x)$ 是**无穷大量**（或正、负无穷大量）。

极限过程同样可扩充到 $x\\to x_0^+$、$x\\to x_0^-$、$x\\to-\\infty$、$x\\to+\\infty$ 等情况。

**注意**：无穷大量不是"很大的数"，而是"绝对值无限增大的变量"，其符号化定义与无穷小量对偶。`
              },
              {
                id: 'ma-c3-s3-n7',
                type: 'concept',
                title: '无穷大量阶的比较',
                content: `设 $u(x),v(x)$ 当 $x\\to x_0$ 时都是无穷大量，比较 $\\dfrac{u(x)}{v(x)}$ 的极限：

**(1) 高阶无穷大量**：若 $\\lim_{x\\to x_0}\\dfrac{u(x)}{v(x)}=\\infty$，则 $u(x)$ 关于 $v(x)$ 是**高阶无穷大量**。由

$$\\lim_{x\\to+\\infty}\\frac{a^x}{x^k}=\\infty\\ (a>1),\\qquad \\lim_{x\\to+\\infty}\\frac{\\ln^k x}{x}=0,$$

知当 $x\\to+\\infty$ 时 $a^x\\ (a>1)$ 关于 $x^k$ 是**高阶**、$\\ln x$ 关于 $x$ 是**低阶**。

**(2) 有界 / 同阶**：若 $\\left|\\dfrac{u(x)}{v(x)}\\right|\\le A$，记 $u(x)=O(v(x))$；若又有 $a\\le\\left|\\dfrac{u(x)}{v(x)}\\right|\\le A$，则二者为**同阶无穷大量**。

**(3) 等价无穷大量**：若 $\\lim_{x\\to x_0}\\dfrac{u(x)}{v(x)}=1$，记为 $u(x)\\sim v(x)\\ (x\\to x_0)$。

**例**：

- $\\lim_{x\\to\\infty}\\dfrac{x^3\\sin\\frac{1}{x}}{x^2}=\\lim_{x\\to\\infty}\\dfrac{\\sin(1/x)}{1/x}=1$，故 $x^3\\sin\\dfrac{1}{x}\\sim x^2\\ (x\\to\\infty)$；
- 令 $y=\\dfrac{\\pi}{2}-x$：$\\lim_{x\\to\\pi/2}\\left(\\dfrac{\\pi}{2}-x\\right)\\tan x=\\lim_{y\\to 0+}\\dfrac{y\\cos y}{\\sin y}=1$，故 $\\tan x\\sim\\dfrac{1}{\\frac{\\pi}{2}-x}\\ \\left(x\\to\\dfrac{\\pi}{2}\\right)$。

**约定**：无穷大量阶的比较习惯上**不使用 $o$** 记号，但仍使用 $O$ 和 $\\sim$。`
              },
              {
                id: 'ma-c3-s3-n8',
                type: 'concept',
                title: '例 3.3.1–3.3.2 对数与指数的阶',
                content: `**例 3.3.1**：证明当 $x\\to 0+$ 时，对任意正整数 $k$，$\\left(-\\dfrac{1}{\\ln x}\\right)^k$ 关于 $x$ 是**低阶无穷小量**。

**证**：令 $y=-\\ln x$，则 $x\\to 0+\\Rightarrow y\\to+\\infty$，$x=e^{-y}$，于是

$$\\lim_{x\\to 0+}\\frac{x}{\\left(-\\frac{1}{\\ln x}\\right)^k}=\\lim_{y\\to+\\infty}\\frac{e^{-y}}{y^{-k}}=\\lim_{y\\to+\\infty}\\frac{y^k}{e^y}=0.\\quad\\blacksquare$$

**例 3.3.2**：证明当 $x\\to 0+$ 时，对任意正整数 $k$，$e^{-1/x}$ 关于 $x^k$ 是**高阶无穷小量**。

**证**：令 $y=\\dfrac{1}{x}$，则 $x\\to 0+\\Rightarrow y\\to+\\infty$，于是

$$\\lim_{x\\to 0+}\\frac{e^{-1/x}}{x^k}=\\lim_{y\\to+\\infty}\\frac{y^k}{e^y}=0.\\quad\\blacksquare$$

**口诀提炼**：**指数跑得最快，对数跑得最慢**——$e^x\\gg x^k\\gg \\ln x$（当 $x\\to+\\infty$）。`
              },
              {
                id: 'ma-c3-s3-n9',
                type: 'theorem',
                title: '常用等价无穷小量（例 3.3.3–3.3.5）',
                content: `**四个最常用等价关系**（$x\\to 0$）：

$$\\boxed{\\ \\sin x\\sim x,\\qquad \\ln(1+x)\\sim x,\\qquad e^x-1\\sim x,\\qquad (1+x)^\\alpha-1\\sim\\alpha x\\ }$$

**例 3.3.3 证明 $\\ln(1+x)\\sim x\\ (x\\to 0)$**

由 $\\lim_{x\\to\\infty}\\left(1+\\dfrac{1}{x}\\right)^x=e$ 等价于 $\\lim_{x\\to 0}(1+x)^{1/x}=e$，利用对数函数连续性：

$$\\lim_{x\\to 0}\\frac{\\ln(1+x)}{x}=\\lim_{x\\to 0}\\ln(1+x)^{1/x}=\\ln e=1.\\quad\\blacksquare$$

**例 3.3.4 证明 $e^x-1\\sim x\\ (x\\to 0)$**

令 $y=e^x-1$，则 $x\\to 0\\Rightarrow y\\to 0$ 且 $x=\\ln(1+y)$，故

$$\\lim_{x\\to 0}\\frac{e^x-1}{x}=\\lim_{y\\to 0}\\frac{y}{\\ln(1+y)}=1.\\quad\\blacksquare$$

**例 3.3.5 证明 $(1+x)^\\alpha-1\\sim\\alpha x\\ (x\\to 0)$**

$$\\lim_{x\\to 0}\\frac{(1+x)^\\alpha-1}{x}=\\lim_{x\\to 0}\\frac{(1+x)^\\alpha-1}{\\ln(1+x)^\\alpha}\\cdot\\frac{\\alpha\\ln(1+x)}{x}=1\\cdot\\alpha=\\alpha.\\quad\\blacksquare$$

**衍生常用等价**（由上述 + 三角恒等式）：$\\tan x\\sim x$、$\\arcsin x\\sim x$、$\\arctan x\\sim x$、$1-\\cos x\\sim\\dfrac{x^2}{2}$。`
              },
              {
                id: 'ma-c3-s3-n10',
                type: 'concept',
                title: '多项相加时的等价量规律（例 3.3.6–3.3.7）',
                content: `**核心结论**：若一变量由若干**不同阶**的成分相加而成，则

- 当它是**无穷大量**时，与**阶数最高**的那个成分等价；
- 当它是**无穷小量**时，与**阶数最低**的那个成分等价。

**例 3.3.6**：$u(x)=\\sqrt{x+\\sqrt{x}}$。

- $x\\to+\\infty$：主项为 $x$，$\\lim_{x\\to+\\infty}\\dfrac{\\sqrt{x+\\sqrt{x}}}{\\sqrt{x}}=\\lim\\sqrt{1+\\dfrac{1}{\\sqrt{x}}}=1$，故

$$u(x)\\sim x^{1/2}\\qquad(x\\to+\\infty);$$

- $x\\to 0+$：主项为 $\\sqrt{x}$，$\\lim_{x\\to 0+}\\dfrac{\\sqrt{x+\\sqrt{x}}}{\\sqrt[4]{x}}=\\lim\\sqrt{1+\\sqrt{x}}=1$，故

$$u(x)\\sim x^{1/4}\\qquad(x\\to 0+).$$

**例 3.3.7**：$v(x)=2x^3+3x^5$。

- $x\\to\\infty$：$\\lim\\dfrac{2x^3+3x^5}{3x^5}=1$，故 $v(x)\\sim 3x^5$；
- $x\\to 0$：$\\lim\\dfrac{2x^3+3x^5}{2x^3}=1$，故 $v(x)\\sim 2x^3$。

**记忆口诀**：**"无穷大抓最大，无穷小抓最小"**。`
              },
              {
                id: 'ma-c3-s3-n11',
                type: 'theorem',
                title: '定理 3.3.1 等价量代换定理',
                content: `**定理 3.3.1**：设 $u(x),v(x),w(x)$ 在 $x_0$ 的某去心邻域上有定义，且

$$\\lim_{x\\to x_0}\\frac{v(x)}{w(x)}=1\\qquad(\\text{即 }v(x)\\sim w(x),\\ x\\to x_0).$$

则：

**(1)** 当 $\\lim_{x\\to x_0}u(x)w(x)=A$ 时，

$$\\lim_{x\\to x_0}u(x)v(x)=A;$$

**(2)** 当 $\\lim_{x\\to x_0}\\dfrac{u(x)}{w(x)}=A$ 时，

$$\\lim_{x\\to x_0}\\frac{u(x)}{v(x)}=A.$$

**证明**：由极限四则运算法则直接得。极限过程 $x\\to x_0$ 可相应改为 $x\\to x_0^+$、$x\\to\\infty$ 等。

**核心意义**：在**乘除结构**中可用等价量自由代换——这是化简极限计算的主要工具。`
              },
              {
                id: 'ma-c3-s3-n12',
                type: 'concept',
                title: '等价代换的应用（例 3.3.8–3.3.12）',
                content: `**例 3.3.8（有理函数极限）**：

$$\\lim_{x\\to\\infty}\\frac{a_n x^n+a_{n+1}x^{n+1}+\\cdots+a_m x^m}{b_n x^n+\\cdots+b_m x^m}=\\lim_{x\\to\\infty}\\frac{a_m x^m}{b_m x^m}=\\frac{a_m}{b_m}\\quad(a_m,b_m\\ne 0);$$

$$\\lim_{x\\to 0}\\frac{a_n x^n+\\cdots+a_m x^m}{b_n x^n+\\cdots+b_m x^m}=\\frac{a_n}{b_n}\\quad(a_n,b_n\\ne 0).$$

**例 3.3.9**：由 $\\tan x\\sim x,\\ e^{2x}-1\\sim 2x,\\ \\ln(1+x^2)\\sim x^2\\ (x\\to 0)$，

$$\\lim_{x\\to 0}\\frac{\\ln(1+x^2)}{(e^{2x}-1)\\tan x}=\\lim_{x\\to 0}\\frac{x^2}{2x\\cdot x}=\\frac{1}{2}.$$

**例 3.3.10（加减时保留 $o$ 项）**：

$$\\lim_{x\\to 0}\\frac{\\sqrt{1+x}-e^{x/3}}{\\ln(1+2x)}=\\lim_{x\\to 0}\\frac{\\left[\\frac{x}{2}+o(x)\\right]-\\left[\\frac{x}{3}+o(x)\\right]}{2x}=\\lim_{x\\to 0}\\frac{\\frac{x}{6}+o(x)}{2x}=\\frac{1}{12}.$$

**例 3.3.11**：

$$\\lim_{x\\to\\infty}x\\left(\\sqrt[3]{x^3+x}-\\sqrt[3]{x^3-x}\\right)=\\lim_{x\\to\\infty}x^2\\left[\\frac{2}{3x^2}+o\\!\\left(\\frac{1}{x^2}\\right)\\right]=\\frac{2}{3}.$$

**例 3.3.12**：利用 $1-\\cos x\\sim\\dfrac{x^2}{2}\\ (x\\to 0)$，

$$\\lim_{x\\to 0}(\\cos x)^{1/x^2}=\\lim_{x\\to 0}\\left[1-(1-\\cos x)\\right]^{1/x^2}=\\lim_{x\\to 0}\\left(1-\\frac{x^2}{2}\\right)^{\\frac{2}{x^2}\\cdot(-\\frac{1}{2})}=\\frac{1}{\\sqrt{e}}.$$`
              },
              {
                id: 'ma-c3-s3-n13',
                type: 'concept',
                title: '警示：加减运算中不能盲目等价代换',
                content: `**重要警告**：当极限表达式中出现无穷小量（或无穷大量）**相加或相减**时，不能不加考虑地直接使用等价量代换。

**反例 1**：欲求 $\\lim_{x\\to 0}\\dfrac{\\tan x-\\sin x}{x^3}=\\dfrac{1}{2}$。

若贸然用 $\\tan x\\sim x,\\ \\sin x\\sim x$ 代换，会得到**错误**结论：

$$\\lim_{x\\to 0}\\frac{\\tan x-\\sin x}{x^3}=\\lim_{x\\to 0}\\frac{x-x}{x^3}=0.\\quad(\\text{错！})$$

**根源**：$\\tan x\\sim x,\\ \\sin x\\sim x$ 是**略去高阶无穷小后**的等价关系，$\\tan x-\\sin x$ 并非等价于 $0$，而是等价于 $\\dfrac{x^3}{2}$。

**补救做法**：改用

$$\\tan x=x+o(x),\\qquad \\sin x=x+o(x),$$

得 $\\lim_{x\\to 0}\\dfrac{\\tan x-\\sin x}{x^3}=\\lim_{x\\to 0}\\dfrac{o(x)}{x^3}$——此式虽不能直接判断极限，但至少**避免了错误**。这也是例 3.3.10–3.3.11 中保留 $o$ 项的原因。

**反例 2**：

$$\\lim_{x\\to 0}\\frac{\\sqrt{1+x}-1-\\frac{1}{2}x}{x^2}=-\\frac{1}{8}\\ne 0,$$

不能用 $\\sqrt{1+x}-1\\sim\\dfrac{1}{2}x$ 直接代入（否则得 $0$）。需用更精细的 $\\sqrt{1+x}-1\\sim\\dfrac{1}{2}x-\\dfrac{1}{8}x^2\\ (x\\to 0)$（微分学中的泰勒展开）。

**考研口诀**：**乘除可代换，加减要小心**；若出现减法且主阶相消，必须保留到足够高阶的 $o(\\cdot)$ 项，或改用泰勒展开。`
              }
            ] }, { id: 'ma-c3-s4', type: 'section', title: '§4 闭区间上的连续函数', children: [
              {
                id: 'ma-c3-s4-n1',
                type: 'theorem',
                title: '定理 3.4.1 有界性定理',
                content: `**定理 3.4.1**：若函数 $f(x)$ 在**闭区间** $[a,b]$ 上连续，则 $f(x)$ 在 $[a,b]$ 上**有界**。

**证明（反证法 + 闭区间套定理）**：

假设 $f(x)$ 在 $[a,b]$ 上无界。将 $[a,b]$ 二等分，$f(x)$ 至少在其中之一上无界，记为 $[a_1,b_1]$；再将其二等分，得到 $[a_2,b_2]$……如此得到闭区间套 $\\{[a_n,b_n]\\}$，$f(x)$ 在每个 $[a_n,b_n]$ 上无界。

由闭区间套定理，存在唯一 $\\xi\\in\\bigcap[a_n,b_n]$，且 $\\xi=\\lim_{n\\to\\infty}a_n=\\lim_{n\\to\\infty}b_n\\in[a,b]$。

由 $f(x)$ 在点 $\\xi$ 连续（定理 3.1.2 推论 3），$\\exists\\,\\delta>0,M>0$，使

$$\\forall\\,x\\in O(\\xi,\\delta)\\cap[a,b]:\\ |f(x)|\\le M.$$

充分大的 $n$ 时 $[a_n,b_n]\\subset O(\\xi,\\delta)$，则 $f(x)$ 在 $[a_n,b_n]$ 上有界——与构造矛盾。$\\blacksquare$

**反例说明必要性**：$f(x)=\\dfrac{1}{x}$ 在**开区间** $(0,1)$ 上连续，但**无界**。$\\Rightarrow$ "闭区间"条件不可去。`
              },
              {
                id: 'ma-c3-s4-n2',
                type: 'theorem',
                title: '定理 3.4.2 最值定理',
                content: `**定理 3.4.2**：若 $f(x)$ 在**闭区间** $[a,b]$ 上连续，则 $f(x)$ 在 $[a,b]$ 上必能取到**最大值**与**最小值**，即存在 $\\xi,\\eta\\in[a,b]$，使

$$f(\\xi)\\le f(x)\\le f(\\eta),\\quad \\forall\\,x\\in[a,b].$$

**证明（确界 + Bolzano-Weierstrass 定理）**：

由定理 3.4.1，$R_f=\\{f(x)\\mid x\\in[a,b]\\}$ 有界，设

$$\\alpha=\\inf R_f,\\quad \\beta=\\sup R_f.$$

**证 $\\exists\\,\\xi$ 使 $f(\\xi)=\\alpha$**：由下确界刻画，取 $\\varepsilon_n=\\dfrac{1}{n}$，$\\exists\\,x_n\\in[a,b]$ 满足

$$\\alpha\\le f(x_n)<\\alpha+\\frac{1}{n}.$$

$\\{x_n\\}$ 有界 $\\Rightarrow$ 由 B-W 定理有收敛子列 $x_{n_k}\\to\\xi\\in[a,b]$。对不等式 $\\alpha\\le f(x_{n_k})<\\alpha+\\dfrac{1}{n_k}$ 令 $k\\to\\infty$，用连续性与夹逼得 $f(\\xi)=\\alpha$。

同法证 $\\exists\\,\\eta$ 使 $f(\\eta)=\\beta$。$\\blacksquare$

**反例说明必要性**：$f(x)=x$ 在 $(0,1)$ 上连续且有界，$\\inf=0,\\sup=1$，但**取不到**端点值。`
              },
              {
                id: 'ma-c3-s4-n3',
                type: 'theorem',
                title: '定理 3.4.3 零点存在定理（介值引理）',
                content: `**定理 3.4.3**：若 $f(x)$ 在闭区间 $[a,b]$ 连续，且

$$f(a)\\cdot f(b)<0,$$

则必存在 $\\xi\\in(a,b)$，使 $f(\\xi)=0$。

**证明（确界法）**：

不妨设 $f(a)<0,f(b)>0$，令

$$V=\\{x\\mid f(x)<0,\\ x\\in[a,b]\\}.$$

$V$ 非空有界，故存在 $\\xi=\\sup V$。

**① $\\xi\\in(a,b)$**：由连续性及 $f(a)<0$，$\\exists\\,\\delta_1>0$，$[a,a+\\delta_1]\\subset V$；由 $f(b)>0$，$\\exists\\,\\delta_2>0$，$(b-\\delta_2,b]$ 上 $f>0$。故 $a+\\delta_1\\le\\xi\\le b-\\delta_2$。

**② $f(\\xi)=0$**：取 $x_n\\in V$，$x_n\\to\\xi$，由 $f(x_n)<0$ 与连续性得 $f(\\xi)=\\lim f(x_n)\\le 0$。若 $f(\\xi)<0$，由连续性 $\\exists\\,\\delta>0$ 使 $O(\\xi,\\delta)$ 上 $f<0$，则 $\\xi+\\dfrac{\\delta}{2}\\in V$，与 $\\xi=\\sup V$ 矛盾。故 $f(\\xi)=0$。$\\blacksquare$

**几何直观**：连续曲线从 $x$ 轴下方过渡到上方，必**穿过** $x$ 轴。`
              },
              {
                id: 'ma-c3-s4-n4',
                type: 'concept',
                title: '例 3.4.1–3.4.2 零点定理的两个典型应用',
                content: `**例 3.4.1（多项式零点定位）**：讨论 $p(x)=2x^3-3x^2-3x+2$ 的零点位置。

**解**：计算端点值表：

| $x$ | $-2$ | $0$ | $1$ | $3$ |
|---|---|---|---|---|
| $p(x)$ | $-20$ | $2$ | $-2$ | $20$ |

由定理 3.4.3，三个零点分别落在 $(-2,0),\\ (0,1),\\ (1,3)$。事实上

$$p(x)=2(x+1)\\left(x-\\tfrac{1}{2}\\right)(x-2),$$

零点为 $x_1=-1,\\ x_2=\\dfrac{1}{2},\\ x_3=2$。

---

**例 3.4.2（不动点定理）**：设 $f(x)$ 在 $[a,b]$ 上连续，且 $f([a,b])\\subset[a,b]$，则存在 $\\xi\\in[a,b]$ 使 $f(\\xi)=\\xi$。

**证**：令 $g(x)=f(x)-x$，在 $[a,b]$ 上连续。由 $f([a,b])\\subset[a,b]$：

$$g(a)=f(a)-a\\ge 0,\\quad g(b)=f(b)-b\\le 0.$$

- 若 $g(a)=0\\Rightarrow\\xi=a$；若 $g(b)=0\\Rightarrow\\xi=b$；
- 若 $g(a)>0,g(b)<0$，由定理 3.4.3 存在 $\\xi\\in(a,b)$ 使 $g(\\xi)=0$，即 $f(\\xi)=\\xi$。$\\blacksquare$

**开区间反例**：$f(x)=\\dfrac{x}{2}$ 在 $(0,1)$ 连续且 $f((0,1))\\subset(0,1)$，但**无不动点**——闭区间条件不可去。`
              },
              {
                id: 'ma-c3-s4-n5',
                type: 'theorem',
                title: '定理 3.4.4 中间值定理与值域推论',
                content: `**定理 3.4.4（中间值定理 / Intermediate Value Theorem）**：若 $f(x)$ 在 $[a,b]$ 上连续，则 $f(x)$ 能取到最大值 $M$ 与最小值 $m$ 之间的**任何一个值**。

**证明**：由最值定理，$\\exists\\,\\xi,\\eta\\in[a,b]$ 使 $f(\\xi)=m,\\ f(\\eta)=M$。不妨设 $\\xi<\\eta$。对任意中间值 $C\\in(m,M)$，令辅助函数

$$\\varphi(x)=f(x)-C,$$

则 $\\varphi$ 在 $[\\xi,\\eta]$ 上连续，$\\varphi(\\xi)<0,\\ \\varphi(\\eta)>0$。由零点存在定理，$\\exists\\,\\zeta\\in(\\xi,\\eta)$ 使 $\\varphi(\\zeta)=0$，即 $f(\\zeta)=C$。$\\blacksquare$

---

**推论（值域闭区间）**：若 $f(x)$ 在 $[a,b]$ 上连续，则值域

$$R_f=[m,M]$$

是一个**闭区间**。

**历史关联**：定理 3.2.2 中利用确界存在定理证明的"严格单调连续函数的值域 $=[f(a),f(b)]$"，是本推论的特例。

**重要意义**：连续函数的**连续性 + 闭区间**$\\Rightarrow$ 像集仍是**闭区间**，此即"连续性保持紧致性"的初步体现。`
              },
              {
                id: 'ma-c3-s4-n6',
                type: 'concept',
                title: '定义 3.4.1 一致连续性',
                content: `**定义 3.4.1**：设 $f(x)$ 在区间 $X$ 上有定义，若

$$\\forall\\,\\varepsilon>0,\\ \\exists\\,\\delta>0,\\ \\forall\\,x',x''\\in X\\,(|x'-x''|<\\delta):\\ |f(x')-f(x'')|<\\varepsilon,$$

则称 $f(x)$ 在 $X$ 上**一致连续**。

**一致连续 vs 点连续（关键辨析）**：

| | 点连续 | 一致连续 |
|---|---|---|
| $\\delta$ 的依赖 | $\\delta=\\delta(x_0,\\varepsilon)$ | $\\delta=\\delta(\\varepsilon)$ 只依赖 $\\varepsilon$ |
| 适用范围 | 逐点 | **整个区间一致** |
| 量词结构 | $\\forall\\,x_0,\\ \\forall\\,\\varepsilon,\\ \\exists\\,\\delta$ | $\\forall\\,\\varepsilon,\\ \\exists\\,\\delta,\\ \\forall\\,x',x''$ |

**蕴含关系**：

$$f\\text{ 在 }X\\text{ 一致连续}\\ \\Rightarrow\\ f\\text{ 在 }X\\text{ 连续},$$

反之**不一定**成立（见例 3.4.4）。

**几何直观**：一致连续 = 函数图像"不会陡到无法控制"；宽为 $\\delta$ 的矩形框在**整个**图像上平移时，框内函数值的振幅始终 $<\\varepsilon$。`
              },
              {
                id: 'ma-c3-s4-n7',
                type: 'concept',
                title: '例 3.4.3–3.4.4 一致连续性的判定与反例',
                content: `**例 3.4.3（直接验证法）**：$f(x)=\\sin x$ 在 $(-\\infty,+\\infty)$ 上**一致连续**。

**证**：由三角恒等式

$$|\\sin x'-\\sin x''|=2\\left|\\cos\\frac{x'+x''}{2}\\sin\\frac{x'-x''}{2}\\right|\\le|x'-x''|.$$

对 $\\forall\\,\\varepsilon>0$，取 $\\delta=\\varepsilon$ 即可。$\\blacksquare$

---

**例 3.4.4（精确解 $\\delta^*$ 法）**：$f(x)=\\dfrac{1}{x}$ 在 $(0,1)$ 上连续，但**非一致连续**。

**证**：对固定 $x_0\\in(0,1)$，求 $\\left|\\dfrac{1}{x}-\\dfrac{1}{x_0}\\right|<\\varepsilon$ 等价于

$$\\frac{x_0}{1+x_0\\varepsilon}<x<\\frac{x_0}{1-x_0\\varepsilon},$$

从而得最大允许步长

$$\\delta^*(x_0,\\varepsilon)=\\frac{x_0^2\\varepsilon}{1+x_0\\varepsilon}.$$

当 $x_0\\to 0+$ 时 $\\delta^*\\to 0$，即 $\\inf_{x_0}\\delta^*(x_0,\\varepsilon)=0$，不存在对 $(0,1)$ **统一适用**的 $\\delta(\\varepsilon)$。$\\blacksquare$

**根本原因**：$\\dfrac{1}{x}$ 在 $x\\to 0+$ 时"变陡峭无上限"——斜率无界。

**对比**：若区间改为 $[\\eta,1)\\ (\\eta>0)$，则 $\\dfrac{1}{x}$ 一致连续，因为 $\\left|\\dfrac{1}{x'}-\\dfrac{1}{x''}\\right|\\le\\dfrac{|x'-x''|}{\\eta^2}$，取 $\\delta=\\eta^2\\varepsilon$ 即可。`
              },
              {
                id: 'ma-c3-s4-n8',
                type: 'theorem',
                title: '定理 3.4.5 一致连续的点列判别法（Heine 型）',
                content: `**定理 3.4.5**：设 $f(x)$ 在区间 $X$ 上有定义。则 $f(x)$ 在 $X$ 上**一致连续**的充要条件是：对任意两个点列 $\\{x_n'\\},\\{x_n''\\}\\subset X$，只要

$$\\lim_{n\\to\\infty}(x_n'-x_n'')=0,$$

就成立

$$\\lim_{n\\to\\infty}(f(x_n')-f(x_n''))=0.$$

**证明**：

**必要性**：由一致连续性，$\\forall\\,\\varepsilon>0,\\ \\exists\\,\\delta>0$；由 $x_n'-x_n''\\to 0$，$\\exists\\,N,\\ \\forall\\,n>N:|x_n'-x_n''|<\\delta$，故 $|f(x_n')-f(x_n'')|<\\varepsilon$。

**充分性（反证）**：若非一致连续，则

$$\\exists\\,\\varepsilon_0>0,\\ \\forall\\,\\delta>0,\\ \\exists\\,x',x''\\in X:|x'-x''|<\\delta\\text{ 但 }|f(x')-f(x'')|\\ge\\varepsilon_0.$$

取 $\\delta_n=\\dfrac{1}{n}$ 构造点列 $\\{x_n'\\},\\{x_n''\\}$，满足 $x_n'-x_n''\\to 0$ 但 $|f(x_n')-f(x_n'')|\\ge\\varepsilon_0\\not\\to 0$——矛盾。$\\blacksquare$

---

**判非一致连续的实用套路**：找到两个点列 $\\{x_n'\\},\\{x_n''\\}$ 满足 $x_n'-x_n''\\to 0$ 但 $f(x_n')-f(x_n'')\\not\\to 0$。

**应用例 3.4.4**：取 $x_n'=\\dfrac{1}{2n},\\ x_n''=\\dfrac{1}{n}$，$x_n'-x_n''\\to 0$，但 $f(x_n')-f(x_n'')=2n-n=n\\to\\infty$，故 $\\dfrac{1}{x}$ 在 $(0,1)$ 非一致连续。`
              },
              {
                id: 'ma-c3-s4-n9',
                type: 'concept',
                title: '例 3.4.5 $f(x)=x^2$ 的一致连续性对比',
                content: `**结论**：$f(x)=x^2$

- 在 $[0,+\\infty)$ 上**非一致连续**；
- 在 $[0,A]$（$A<+\\infty$）上**一致连续**。

---

**非一致连续证明（点列法）**：取

$$x_n'=\\sqrt{n+1},\\quad x_n''=\\sqrt{n}.$$

$$x_n'-x_n''=\\sqrt{n+1}-\\sqrt{n}=\\frac{1}{\\sqrt{n+1}+\\sqrt{n}}\\to 0,$$

但

$$f(x_n')-f(x_n'')=(n+1)-n=1\\not\\to 0.$$

由定理 3.4.5，$x^2$ 在 $[0,+\\infty)$ 非一致连续。$\\blacksquare$

---

**有界闭区间一致连续证明**：在 $[0,A]$ 上，

$$|x'^2-x''^2|=|x'+x''||x'-x''|\\le 2A|x'-x''|.$$

$\\forall\\,\\varepsilon>0$，取 $\\delta=\\dfrac{\\varepsilon}{2A}$ 即可。$\\blacksquare$

---

**规律总结**：

| 区间类型 | 连续函数是否必一致连续？ |
|---|---|
| 长度无限区间（如 $[a,+\\infty)$） | **否**（$x^2$ 为例） |
| 长度有限开区间（如 $(0,1)$） | **否**（$1/x$ 为例） |
| 长度有限闭区间（如 $[a,b]$） | **是**（Cantor 定理） |

**本质**：一致连续失败 = 函数在区间端点或无穷远处"斜率爆炸"。`
              },
              {
                id: 'ma-c3-s4-n10',
                type: 'theorem',
                title: '定理 3.4.6 Cantor 定理',
                content: `**Cantor 定理（一致连续性定理）**：若函数 $f(x)$ 在**闭区间** $[a,b]$ 上连续，则 $f(x)$ 在 $[a,b]$ 上**一致连续**。

**证明（反证 + Bolzano-Weierstrass）**：

假设 $f(x)$ 在 $[a,b]$ 非一致连续，由定理 3.4.5 的构造，$\\exists\\,\\varepsilon_0>0$ 及两点列 $\\{x_n'\\},\\{x_n''\\}\\subset[a,b]$：

$$|x_n'-x_n''|<\\frac{1}{n},\\qquad |f(x_n')-f(x_n'')|\\ge\\varepsilon_0.$$

$\\{x_n'\\}$ 有界 $\\Rightarrow$ 有收敛子列 $x_{n_k}'\\to\\xi\\in[a,b]$。由 $|x_{n_k}'-x_{n_k}''|<\\dfrac{1}{n_k}$，

$$x_{n_k}''=x_{n_k}'+(x_{n_k}''-x_{n_k}')\\to\\xi.$$

由 $f$ 在 $\\xi$ 连续，$\\lim f(x_{n_k}')=\\lim f(x_{n_k}'')=f(\\xi)$，故

$$\\lim_{k\\to\\infty}(f(x_{n_k}')-f(x_{n_k}''))=0,$$

与 $|f(x_n')-f(x_n'')|\\ge\\varepsilon_0>0$ 矛盾。$\\blacksquare$

---

**定理深意**：

- **"闭区间"不可去**：$\\dfrac{1}{x}$ 在 $(0,1)$ 连续但非一致连续；
- **"有限"不可去**：$x^2$ 在 $[0,+\\infty)$ 连续但非一致连续；
- 闭区间 $[a,b]$ 具有**紧致性**，紧致性 + 连续性 $\\Rightarrow$ 一致连续——这是现代分析学"紧致性"思想的经典体现。`
              },
              {
                id: 'ma-c3-s4-n11',
                type: 'theorem',
                title: '定理 3.4.7 有限开区间一致连续的充要条件',
                content: `**定理 3.4.7**：设 $f(x)$ 在**有限开区间** $(a,b)$ 上连续，则 $f(x)$ 在 $(a,b)$ 上一致连续的**充要条件**是：单侧极限 $f(a+)$ 与 $f(b-)$ 都存在（即有限）。

**证明**：

**充分性**：设 $f(a+)=A,\\ f(b-)=B$，定义延拓

$$\\tilde f(x)=\\begin{cases}A, & x=a,\\\\ f(x), & a<x<b,\\\\ B, & x=b.\\end{cases}$$

则 $\\tilde f$ 在 $[a,b]$ 上连续。由 Cantor 定理，$\\tilde f$ 在 $[a,b]$ 上一致连续；限制到 $(a,b)$ 一致连续性保持。$\\Rightarrow$ $f$ 在 $(a,b)$ 一致连续。

**必要性**：设 $f$ 在 $(a,b)$ 一致连续。取 $\\{x_n\\}\\subset(a,b)$，$x_n\\to a$。由 Cauchy 列性质：$\\forall\\,\\varepsilon>0,\\ \\exists\\,N,\\ \\forall\\,n,m>N:|x_n-x_m|<\\delta$，由一致连续性 $|f(x_n)-f(x_m)|<\\varepsilon$。故 $\\{f(x_n)\\}$ 是 Cauchy 列，必收敛。由 Heine 归结（定理 3.1.5'），$f(a+)$ 存在。同理 $f(b-)$ 存在。$\\blacksquare$

---

**应用判别套路**：

1. 判 $f(x)=\\dfrac{\\sin x}{x}$ 在 $(0,1)$ 是否一致连续？$f(0+)=1,\\ f(1-)=\\sin 1$ 都存在 $\\Rightarrow$ **是**；
2. 判 $f(x)=\\sin\\dfrac{1}{x}$ 在 $(0,1)$ 是否一致连续？$f(0+)$ **不存在**（振荡）$\\Rightarrow$ **否**。

**注**：定理不适用于**无限**开区间。如 $\\sin x$ 在 $(-\\infty,+\\infty)$ 一致连续，但 $f(\\pm\\infty)$ 都不存在——充分性证明中 Cantor 定理不能用于无限区间。`
              },
              {
                id: 'ma-c3-s4-n12',
                type: 'concept',
                title: '§4 闭区间上连续函数五大定理总结与方法论',
                content: `**闭区间 $[a,b]$ 上连续函数的五大核心定理**：

| # | 定理 | 核心内容 | 常用证法 |
|---|---|---|---|
| 1 | **有界性定理**（3.4.1） | $f$ 在 $[a,b]$ 有界 | 闭区间套定理 + 反证 |
| 2 | **最值定理**（3.4.2） | $f$ 能取最大/最小值 | 确界存在 + B-W 定理 |
| 3 | **零点存在定理**（3.4.3） | $f(a)f(b)<0\\Rightarrow\\exists\\,\\xi:f(\\xi)=0$ | 确界法 |
| 4 | **中间值定理**（3.4.4） | $f$ 取 $[m,M]$ 中任意值 | 最值定理 + 零点定理 |
| 5 | **Cantor 定理**（3.4.6） | $f$ 在 $[a,b]$ 一致连续 | B-W 定理 + 反证 |

---

**方法论核心**：

1. **"闭区间"是关键**——这 5 个定理都要求 $[a,b]$ 是**有限闭区间**，开区间或无限区间一般都失败（见 $\\dfrac{1}{x}$ 于 $(0,1)$、$x^2$ 于 $[0,+\\infty)$）。

2. **证明工具总库**——实数系 5 个基本定理（确界存在、单调有界、闭区间套、B-W、Cauchy 收敛）**相互等价**，故这 5 个连续函数性质可用任一工具证明，只是难度不同。考研中常出此类"换工具证明"题。

3. **从点到整体的飞跃**——本节展示了如何将"逐点连续"的局部性质，通过闭区间的**紧致性**提升为"有界、最值、介值、一致连续"等整体性质，这是分析学最核心的思想之一。

**考研高频考点**：

- 零点 / 不动点 / 介值定理的构造题（辅助函数法）；
- 利用点列法（定理 3.4.5）判断一致连续/非一致连续；
- 利用定理 3.4.7 判断开区间函数的一致连续性；
- Cantor 定理的证明与"闭区间"必要性反例。`
              }
            ] } ] },
      { id: 'ma-c4', type: 'chapter', title: '第四章 微分', children: [
        { id: 'ma-c4-s1', type: 'section', title: '§1 微分和导数', children: [
              {
                id: 'ma-c4-s1-n1',
                type: 'concept',
                title: '微分概念的导出背景（第一宇宙速度）',
                content: `**核心思想**：当因变量的改变量也是很微小的时候，能否简便而又比较精确地估计出这个改变量？——这正是**微分**的原始动机。

**经典案例：第一宇宙速度推导**

设卫星在地球表面附近的 $A$ 点沿水平方向飞行，一秒后本应到 $B$ 点，但因地球引力实际到达 $C$ 点。自由落体一秒下落 $BC=\\dfrac{1}{2}g\\cdot 1^2\\approx 4.9\\text{ m}$。

若卫星沿同心圆轨道运行，$OA=OC$（约为 $R=6\\,371\\,000\\text{ m}$），由直角三角形 $\\triangle AOB$ 与勾股定理：

$$AB^2=(R+4.9)^2-R^2.$$

**直接计算的困境**：两个 $O(10^{13})$ 量级的数相减，误差大、效率低。

**平方差技巧**：

$$AB^2=(R+4.9+R)(R+4.9-R)=2R\\cdot 4.9+4.9^2.$$

**关键观察**：$4.9^2\\approx 24$ 相较 $2R\\cdot 4.9\\approx 6.2\\times 10^7$ **可忽略**，故

$$AB^2\\approx 2R\\cdot 4.9\\Rightarrow AB\\approx 7.9\\text{ km}.$$

**本质升华**：这实际是函数 $y=x^2$ 在 $x=R$ 处、自变量微变 $\\Delta x=4.9$ 时，函数值改变量 $\\Delta y$ 的近似计算——丢掉的 $4.9^2$ 项就是 $o(\\Delta x)$ 高阶项。此即**微分**思想的雏形。`
              },
              {
                id: 'ma-c4-s1-n2',
                type: 'concept',
                title: '定义 4.1.1 微分（线性主要部分）',
                content: `**差分记号**：函数 $y=f(x)$ 在 $x$ 处自变量产生增量 $\\Delta x\\ (\\ne 0)$，相应因变量增量

$$\\Delta y(x)=f(x+\\Delta x)-f(x)$$

分别称为**自变量的差分**与**因变量的差分**。

---

**定义 4.1.1（微分）**：对 $y=f(x)$ 定义域中一点 $x_0$，若存在**只与 $x_0$ 有关、与 $\\Delta x$ 无关**的数 $g(x_0)$，使得 $\\Delta x\\to 0$ 时

$$\\Delta y=g(x_0)\\Delta x+o(\\Delta x),$$

则称 $f(x)$ 在 $x_0$ 处**微分存在**（或称 $f(x)$ 在 $x_0$ 处**可微**）。

若 $f(x)$ 在某区间**每一点**都可微，则称 $f$ 在该区间上可微。

---

**线性主要部分**：$g(x)\\Delta x$ 称为 $\\Delta y$ 的**线性主要部分**。

**等价关系**：当 $g(x)\\ne 0$ 时，$\\Delta x\\to 0\\Rightarrow$

$$\\Delta y\\sim g(x)\\Delta x.$$

**实用含义**：$|\\Delta x|$ 充分小时，可用 $g(x)\\Delta x$ **近似替代** $\\Delta y$，偏差为 $o(\\Delta x)$——此即前述第一宇宙速度中舍弃 $4.9^2$ 的理论依据。`
              },
              {
                id: 'ma-c4-s1-n3',
                type: 'concept',
                title: '自变量微分 dx 与因变量微分 dy',
                content: `**记号约定**：当 $f(x)$ 在 $x$ 处可微（且 $\\Delta x$ 可任取）时：

- 自变量的**微分** = 自变量的增量：记为 $dx=\\Delta x$；
- 因变量的**微分** = $\\Delta y$ 的线性主要部分 $g(x)\\Delta x$：记为 $dy$ 或 $df(x)$。

于是得**微分关系式**：

$$\\boxed{\\ dy=g(x)\\,dx.\\ }$$

---

**记号的双重解读**：

- 作为**整体符号**：$dy,\\ df(x)$ 表示"线性主要部分"这个量；
- 作为**无穷小量**：$\\Delta x\\to 0$ 极限状态下的"小增量"。

**几何直观**：在 $(x,f(x))$ 的**切线**上，横坐标变化 $dx$ 时切线纵坐标变化恰为 $dy$——微分即"切线的线性增量"，函数增量 $\\Delta y$ 与 $dy$ 之差为 $o(\\Delta x)$。

**近似计算公式**（工程应用核心）：

$$f(x_0+\\Delta x)\\approx f(x_0)+g(x_0)\\Delta x=f(x_0)+dy.$$`
              },
              {
                id: 'ma-c4-s1-n4',
                type: 'concept',
                title: '例 4.1.1 $y=x^2$ 的微分',
                content: `**例 4.1.1**：设 $y=f(x)=x^2$，求其在任意 $x\\in(-\\infty,+\\infty)$ 处的微分。

**解**：对任意增量 $\\Delta x$，

$$\\Delta y=(x+\\Delta x)^2-x^2=2x\\Delta x+(\\Delta x)^2.$$

- **线性项**：$2x\\Delta x$——$g(x)=2x$；
- **高阶项**：$(\\Delta x)^2=o(\\Delta x)\\ (\\Delta x\\to 0)$。

由定义 4.1.1，$y=x^2$ 在 $x$ 处可微，其微分为

$$\\boxed{\\ dy=d(x^2)=2x\\,dx.\\ }$$

---

**呼应第一宇宙速度**：正是此微分公式的近似应用——

$$\\Delta(x^2)\\approx 2x\\cdot\\Delta x,$$

在 $x=R=6\\,371\\,000,\\ \\Delta x=4.9$ 时给出

$$AB^2\\approx 2R\\cdot 4.9,$$

与前述结论完全一致。微分不仅是抽象定义，更是**工程近似计算**的理论基础。`
              },
              {
                id: 'ma-c4-s1-n5',
                type: 'concept',
                title: '例 4.1.2 $\\sqrt[3]{x^2}$ 不可微 + 可微必连续',
                content: `**例 4.1.2**：判断 $y=f(x)=\\sqrt[3]{x^2}$ 在 $x=0$ 处是否可微。

**解**：

$$\\Delta y=f(\\Delta x)-f(0)=\\sqrt[3]{(\\Delta x)^2}=|\\Delta x|^{2/3}.$$

当 $\\Delta x\\to 0$ 时，$|\\Delta x|^{2/3}$ 趋于 $0$ 的阶为 $\\dfrac{2}{3}$ 阶——**低于** $\\Delta x$ 的一阶。

故 $\\Delta y$ **无法**写成 "$g(0)\\Delta x+o(\\Delta x)$" 的线性 + 高阶分解（因为 $g(0)\\Delta x$ 本身是一阶无穷小，而 $\\Delta y$ 是 $\\tfrac{2}{3}$ 阶，不可能相差高阶项）。

由定义，$y=\\sqrt[3]{x^2}$ 在 $x=0$ 处**不可微**。$\\blacksquare$

**附注**：$y=\\sqrt[3]{x^2}$ 在 $(-\\infty,0)$ 与 $(0,+\\infty)$ 上都可微，仅**尖点** $x=0$ 处不可微。

---

**定理（可微必连续）**：若 $f(x)$ 在 $x$ 处可微，则

$$\\Delta x\\to 0\\Rightarrow\\Delta y=g(x)\\Delta x+o(\\Delta x)\\to 0,$$

即 $f(x)$ 在 $x$ 处**连续**。

**逆命题不成立**：如 $y=\\sqrt[3]{x^2}$ 在 $x=0$ 连续（$\\lim_{x\\to 0}\\sqrt[3]{x^2}=0=f(0)$），但在此处**不可微**。

**蕴含图**：

$$\\text{可微}\\ \\Longrightarrow\\ \\text{连续},\\qquad \\text{连续}\\not\\Longrightarrow\\ \\text{可微}.$$`
              },
              {
                id: 'ma-c4-s1-n6',
                type: 'concept',
                title: '定义 4.1.2 导数（差商的极限）',
                content: `**差商**：$\\dfrac{\\Delta y}{\\Delta x}=\\dfrac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$——因变量差分与自变量差分之比。

---

**定义 4.1.2（导数）**：若极限

$$\\lim_{\\Delta x\\to 0}\\frac{\\Delta y}{\\Delta x}=\\lim_{\\Delta x\\to 0}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$$

**存在**，则称 $f(x)$ 在 $x_0$ 处**可导**，此极限值称为 $f(x)$ 在 $x_0$ 处的**导数**，记为

$$f'(x_0)\\quad\\text{或}\\quad y'(x_0),\\quad \\left.\\frac{df}{dx}\\right|_{x=x_0},\\quad \\left.\\frac{dy}{dx}\\right|_{x=x_0}.$$

---

**等价定义**（用 $x$ 替换 $x_0+\\Delta x$）：

$$f'(x_0)=\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}.$$

---

**几何意义**：$f'(x_0)$ 是函数图像在点 $(x_0,f(x_0))$ 处的**切线斜率**。

**物理意义**：若 $f(t)$ 是位移 - 时间函数，则 $f'(t)$ 是**瞬时速度**；若 $f(x)$ 是物质分布函数，$f'(x)$ 是**瞬时变化率**。

**记号提醒**：$\\dfrac{dy}{dx}$ 既是一个**整体记号**（导数），也可看作**微分之商**（微商）——两种视角互通。`
              },
              {
                id: 'ma-c4-s1-n7',
                type: 'concept',
                title: '导函数与微商视角',
                content: `**导函数**：函数 $f(x)$ 的所有**可导点**组成其定义域的子集 $D'\\subset D$。$f'(x)$ 可视为 $D'$ 上的新函数，称为 $f(x)$ 的**导函数**，记为

$$f'(x),\\quad y'(x),\\quad \\frac{df}{dx},\\quad \\frac{dy}{dx}.$$

导函数简称**导数**。

---

**可微与可导的桥梁**：若 $f(x)$ 在 $x$ 处可微，则定义 4.1.1 中的 $g(x)$ **恰是** $f'(x)$。于是：

- **差分的无穷小关系式**：

$$\\Delta y=f'(x)\\Delta x+o(\\Delta x);$$

- **微分关系式**：

$$\\boxed{\\ dy=f'(x)\\,dx.\\ }$$

---

**微商视角**：导数 = 因变量微分 / 自变量微分。

$$f'(x)=\\frac{dy}{dx}.$$

**双重解读**：

- $\\dfrac{dy}{dx}$ 作为**整体符号**就是导数；
- $\\dfrac{dy}{dx}$ 作为**微分之商**就是微分间的除法运算。

这种观点有助于理解**换元法、链式法则**——把微分当作"小量"来操作，形式上等同于普通乘除（严格理论在微分形式理论中建立）。`
              },
              {
                id: 'ma-c4-s1-n8',
                type: 'theorem',
                title: '定理 4.1.1 可微 ⇔ 可导',
                content: `**定理 4.1.1**：函数 $y=f(x)$ 在 $x$ 处**可微**的**充要条件**是它在 $x$ 处**可导**。

---

**证明**：

**(⇒) 可微 $\\Rightarrow$ 可导**：由定义 4.1.1，$\\exists\\,g(x)$ 使 $\\Delta y=g(x)\\Delta x+o(\\Delta x)$。两边除以 $\\Delta x$：

$$\\frac{\\Delta y}{\\Delta x}=g(x)+\\frac{o(\\Delta x)}{\\Delta x}.$$

令 $\\Delta x\\to 0$，右端第二项 $\\to 0$，故

$$\\lim_{\\Delta x\\to 0}\\frac{\\Delta y}{\\Delta x}=g(x),$$

即 $f(x)$ 可导，且 $f'(x)=g(x)$。

**(⇐) 可导 $\\Rightarrow$ 可微**：由定义 4.1.2，$\\lim_{\\Delta x\\to 0}\\dfrac{\\Delta y}{\\Delta x}=f'(x)$，即

$$\\frac{\\Delta y}{\\Delta x}-f'(x)=o(1)\\quad(\\Delta x\\to 0).$$

两边乘以 $\\Delta x$：

$$\\Delta y-f'(x)\\Delta x=o(1)\\cdot\\Delta x=o(\\Delta x),$$

即 $\\Delta y=f'(x)\\Delta x+o(\\Delta x)$，由定义 4.1.1，$f$ 可微。$\\blacksquare$

---

**深刻含义**：对**一元函数**来说，可微与可导**完全等价**，是"孪生兄弟"——提及其一即意味着另一个。

**注意**：这一等价性仅对**一元函数**成立。对**多元函数**，可微是比各偏导数存在更强的条件（偏导存在 $\\not\\Rightarrow$ 可微）。

**实用价值**：既然两者等价，考研中常将"可微"与"可导"混用——但要记住微分 $dy=f'(x)dx$ 的**线性近似**本质与导数 $f'(x)$ 的**变化率**本质是两个互补的视角。`
              }
            ] },
        { id: 'ma-c4-s2', type: 'section', title: '§2 导数的意义和性质', children: [
              {
                id: 'ma-c4-s2-n1',
                type: 'concept',
                title: '抛物线切线方程与光学性质（例 4.2.1 延伸）',
                content: `**导数的几何意义**：$f'(x_0)$ = 曲线 $y=f(x)$ 在点 $(x_0,f(x_0))$ 处**切线斜率**。由此可直接求任一点切线方程

$$y-f(x_0)=f'(x_0)(x-x_0).$$

---

**抛物线的光学性质推导**：

设抛物线 $y^2=2px\ (p>0)$，焦点 $\\left(\\dfrac{p}{2},0\\right)$。点 $(x_0,y_0)$ 处（$y_0=\\sqrt{2px_0}$）切线斜率：

$$\\tan\\theta_1=\\frac{\\sqrt{p}}{\\sqrt{2x_0}}=\\frac{p}{y_0}.$$

该点与焦点连线的斜率：

$$\\tan\\theta_2=\\frac{y_0}{x_0-\\frac{p}{2}}.$$

连线与切线夹角 $\\theta$ 由两角差公式：

$$\\tan\\theta=\\frac{\\tan\\theta_2-\\tan\\theta_1}{1+\\tan\\theta_2\\tan\\theta_1}=\\frac{p}{y_0}=\\tan\\theta_1.$$

即 **$\\theta=\\theta_1$**——焦点连线与切线的夹角恰等于切线与 $x$ 轴的夹角。

---

**光学含义**（由反射定律）：从**焦点**发出的任意光线，经抛物线反射后，**反射光线平行于对称轴**；反过来，平行于对称轴的入射光经抛物面反射后**汇聚到焦点**。

**实际应用**：探照灯（焦点光源 → 平行光束）、伞形太阳灶（平行太阳光 → 聚焦）、抛物面天线（平行电磁波 → 聚焦于焦点接收）。`
              },
              {
                id: 'ma-c4-s2-n2',
                type: 'concept',
                title: '例 4.2.2 椭圆切线方程与光学性质',
                content: `**例 4.2.2**：求椭圆 $\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\ (a>b>0)$ 在任一点 $(x_0,y_0)$ 处的切线方程。

**解**：设 $(x_0,y_0)$ 在上半平面，局部改写为 $y=f(x)=\\dfrac{b}{a}\\sqrt{a^2-x^2}\\ (-a<x<a)$。用**差商有理化**求切线斜率：

$$f'(x_0)=\\frac{b}{a}\\lim_{\\Delta x\\to 0}\\frac{\\sqrt{a^2-(x_0+\\Delta x)^2}-\\sqrt{a^2-x_0^2}}{\\Delta x}$$

$$=\\frac{b}{a}\\lim_{\\Delta x\\to 0}\\frac{-2x_0\\Delta x-(\\Delta x)^2}{\\Delta x\\left[\\sqrt{a^2-(x_0+\\Delta x)^2}+\\sqrt{a^2-x_0^2}\\right]}=\\frac{b}{a}\\cdot\\frac{-x_0}{\\sqrt{a^2-x_0^2}}.$$

于是切线方程为

$$y-y_0=\\frac{b}{a}\\cdot\\frac{-x_0}{\\sqrt{a^2-x_0^2}}(x-x_0).$$

利用 $y_0=\\dfrac{b}{a}\\sqrt{a^2-x_0^2}$ 化简，得解析几何中熟知的**标准形式**：

$$\\boxed{\\ \\frac{x_0 x}{a^2}+\\frac{y_0 y}{b^2}=1.\\ }$$

---

**椭圆的光学性质**：从椭圆**一个焦点**发出的光线，经椭圆反射后**必经过另一个焦点**（证明方法类似例 4.2.1，留作习题）。

**实际应用**：医学碎石机（患者结石置于一焦点，冲击波源置于另一焦点，利用反射原理聚焦碎石）。

**类比总结**：

| 曲线 | 反射性质 |
|---|---|
| 抛物线 | 焦点 $\\leftrightarrow$ 平行光 |
| 椭圆 | 焦点 $\\leftrightarrow$ 焦点 |
| 双曲线 | 焦点 $\\leftrightarrow$ 另一焦点（发散） |`
              },
              {
                id: 'ma-c4-s2-n3',
                type: 'concept',
                title: '微分的几何意义',
                content: `**微分的几何意义**：由导数的几何意义 $f'(x)=\\tan\\alpha$（$\\alpha$ 为切线与 $x$ 轴夹角），微分关系式 $dy=f'(x)\\,dx$ 可理解为：

以 $dx$ 为底边、以 $\\arctan f'(x)$ 为底角的**直角三角形**的**高**，即

$$dy=f'(x)\\,dx,$$

它**近似代替**真实的函数增量

$$\\Delta y=f(x+\\Delta x)-f(x).$$

---

**核心图景**：

- **曲线的真实增量** $\\Delta y$：从 $(x,f(x))$ 沿**曲线**走到 $(x+\\Delta x,f(x+\\Delta x))$ 的纵坐标差；
- **切线的线性增量** $dy$：从 $(x,f(x))$ 沿**切线**走到 $x+dx$ 处的纵坐标差；
- **误差** $\\Delta y-dy=o(dx)$：曲线偏离切线的高阶无穷小。

**近似精度**：当 $|dx|$ 充分小时，$dy$ 与 $\\Delta y$ 几乎一致——这正是"**以直代曲**"的微分思想。

**应用：线性近似公式**：

$$f(x_0+\\Delta x)\\approx f(x_0)+f'(x_0)\\Delta x,$$

常用于数值计算（如 $\\sqrt{1.01}\\approx 1+\\dfrac{0.01}{2}=1.005$，误差为 $o(0.01)$）。

**与第一宇宙速度案例的呼应**：舍弃的 $4.9^2=(\\Delta x)^2$ 正是 $o(\\Delta x)$，保留的 $2R\\cdot 4.9=f'(R)\\cdot\\Delta x=dy$。`
              },
              {
                id: 'ma-c4-s2-n4',
                type: 'concept',
                title: '单侧导数（左导数、右导数）与可导充要条件',
                content: `**定义**：由 $f'(x_0)=\\lim_{\\Delta x\\to 0}\\dfrac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$，根据极限存在的单侧刻画：

**左导数**：

$$f'_-(x_0)=\\lim_{\\Delta x\\to 0^-}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}.$$

**右导数**：

$$f'_+(x_0)=\\lim_{\\Delta x\\to 0^+}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}.$$

---

**可导充要条件**：

$$\\boxed{\\ f(x)\\text{ 在 }x_0\\text{ 可导}\\ \\Longleftrightarrow\\ f'_-(x_0),\\,f'_+(x_0)\\text{ 都存在且相等}.\\ }$$

且此时 $f'(x_0)=f'_-(x_0)=f'_+(x_0)$。

**不可导的两种情形**：

1. 左右导数**至少一个不存在**（如例 4.2.4：$x\\sin\\tfrac{1}{x}$ 型振荡）；
2. 左右导数**都存在但不相等**（如例 4.2.3：$|x|$ 型尖点）。

---

**几何直观**：

- **左导数** $=$ 从左侧逼近的**左切线**斜率；
- **右导数** $=$ 从右侧逼近的**右切线**斜率；
- **可导** $\\Leftrightarrow$ 左、右切线**重合**为一条切线。

**考研典型考法**：分段函数在分段点处的可导性判定——基本套路是"先用连续性定一个未知数，再用左右导数相等定另一个"（参见例 4.2.5）。`
              },
              {
                id: 'ma-c4-s2-n5',
                type: 'concept',
                title: '例 4.2.3 $|x|$ 在 $x=0$ 不可导（尖点型）',
                content: `**例 4.2.3**：考察 $f(x)=|x|$ 在 $x=0$ 处的可导性。

**解**：分 $x<0$ 与 $x>0$ 两种情形：

**左导数**：当 $\\Delta x<0$ 时 $f(\\Delta x)=-\\Delta x$，

$$f'_-(0)=\\lim_{\\Delta x\\to 0^-}\\frac{-\\Delta x-0}{\\Delta x}=-1.$$

**右导数**：当 $\\Delta x>0$ 时 $f(\\Delta x)=\\Delta x$，

$$f'_+(0)=\\lim_{\\Delta x\\to 0^+}\\frac{\\Delta x-0}{\\Delta x}=1.$$

**结论**：$f'_-(0)=-1\\ne 1=f'_+(0)$，左右导数**都存在但不相等**，故 $f(x)=|x|$ 在 $x=0$ **不可导**。$\\blacksquare$

---

**几何诠释**：$y=|x|$ 在 $x=0$ 形成**尖点**（V 字形），左侧切线斜率 $-1$，右侧斜率 $+1$，两条切线不重合。

**推广类比（考研常见函数）**：

- $f(x)=|x-a|$ 在 $x=a$ 不可导（尖点平移）；
- $f(x)=\\max\\{x,0\\}$（ReLU 激活函数）在 $x=0$ 不可导（AI/深度学习背景）；
- $f(x)=|\\sin x|$ 在 $x=k\\pi$ 不可导。

**通用识别口诀**：**绝对值符号处必然可疑**——当绝对值内部量过零时，须单独检验左右导数。`
              },
              {
                id: 'ma-c4-s2-n6',
                type: 'concept',
                title: '例 4.2.4 振荡型不可导（右导数不存在）',
                content: `**例 4.2.4**：考察

$$f(x)=\\begin{cases}x\\sin\\dfrac{1}{x}, & x>0,\\\\ 0, & x\\le 0\\end{cases}$$

在 $x=0$ 处的可导情况。

**解**：

**左导数**（$\\Delta x<0$ 时 $f(\\Delta x)=0$）：

$$f'_-(0)=\\lim_{\\Delta x\\to 0^-}\\frac{0-0}{\\Delta x}=0.$$

**右导数**（$\\Delta x>0$ 时）：

$$\\frac{f(\\Delta x)-f(0)}{\\Delta x}=\\frac{\\Delta x\\sin\\tfrac{1}{\\Delta x}}{\\Delta x}=\\sin\\frac{1}{\\Delta x}.$$

当 $\\Delta x\\to 0^+$ 时 $\\sin\\dfrac{1}{\\Delta x}$ **在 $[-1,1]$ 之间振荡**，极限**不存在**。

**结论**：$f'_+(0)$ **不存在**，故 $f(x)$ 在 $x=0$ **不可导**。$\\blacksquare$

---

**关键辨析：该函数在 $x=0$ 连续**：

$$\\lim_{x\\to 0^+}x\\sin\\frac{1}{x}=0=f(0)$$

（有界乘无穷小 $\\to 0$），但**不可导**——**连续不蕴含可导**的又一经典反例。

**几何直观**：图像在 $x=0$ 右侧剧烈振荡（振幅趋于 $0$ 但每次穿越都"摆动"），**右侧根本没有切线**。

**与例 4.2.3 的关键区别**：

| | 例 4.2.3 $\\|x\\|$ | 例 4.2.4 $x\\sin\\tfrac{1}{x}$ |
|---|---|---|
| 切线 | 左右切线都存在（但不重合） | 右侧根本无切线 |
| 不可导原因 | 左右导数**不相等** | 右导数**不存在** |`
              },
              {
                id: 'ma-c4-s2-n7',
                type: 'concept',
                title: '例 4.2.5 分段函数可导参数确定（考研模板题）',
                content: `**例 4.2.5**：设

$$f(x)=\\begin{cases}x^2+b, & x>2,\\\\ ax+1, & x\\le 2\\end{cases}$$

确定 $a,b$，使 $f(x)$ 在 $x=2$ 处可导。

**标准解法（两步走）**：

---

**第一步：由连续性建立第一个方程**

可导 $\\Rightarrow$ 连续，故

$$\\lim_{x\\to 2^+}(x^2+b)=\\lim_{x\\to 2^-}(ax+1)=f(2),$$

即

$$4+b=2a+1.\\qquad(*)$$

---

**第二步：由左右导数相等建立第二个方程**

**左导数**（$x\\le 2$，用 $ax+1$）：

$$f'_-(2)=\\lim_{x\\to 2^-}\\frac{(ax+1)-(2a+1)}{x-2}=\\lim_{x\\to 2^-}\\frac{a(x-2)}{x-2}=a.$$

**右导数**（$x>2$，用 $x^2+b$，且 $f(2)=2a+1=4+b$）：

$$f'_+(2)=\\lim_{x\\to 2^+}\\frac{(x^2+b)-(4+b)}{x-2}=\\lim_{x\\to 2^+}\\frac{x^2-4}{x-2}=4.$$

令 $f'_-(2)=f'_+(2)$：$a=4$。

代入 $(*)$：$4+b=9\\Rightarrow b=5$。此时 $f'(2)=4$。$\\blacksquare$

---

**解题口诀**：**"先连续，再求导——两方程定两参数"**。

**陷阱提醒**：若只用"左右两段分别求导后在 $x=2$ 处取值相等"（即 $a=2x\\bigm|_{x=2}=4$），虽然本题答案碰巧正确，但这是**非严格**的——必须通过**定义**计算单侧导数，尤其是涉及复合、分段嵌套时。

**高阶变形**：

- 若问 $f''(2)$ 是否存在 $\\Rightarrow$ 需进一步比较 $f'(x)$ 在 $x=2$ 左右两侧的导数；
- 若改为 $x=2$ 处有二阶导数 $\\Rightarrow$ 需要三个方程（连续、一阶导、二阶导）。`
              },
              {
                id: 'ma-c4-s2-n8',
                type: 'concept',
                title: '闭区间上的可导性与切线存在性辨析',
                content: `**闭区间可导的定义**：若 $y=f(x)$ 在 $[a,b]$ 上定义，在开区间 $(a,b)$ 可导，且在左端点 $a$ 的**右导数** $f'_+(a)$ 与在右端点 $b$ 的**左导数** $f'_-(b)$ 都存在，则称 $f(x)$ 在**闭区间** $[a,b]$ 可导。

---

**典例**：例 4.2.2 中 $f(x)=\\dfrac{b}{a}\\sqrt{a^2-x^2}$：

$$f'_-(a)=-\\infty,\\qquad f'_+(-a)=+\\infty,$$

单侧导数为 $\\pm\\infty$ 即**不存在**（极限非有限数），故 $f$ 的**可导区间是 $(-a,a)$**，**不**包括 $x=\\pm a$。

但若改 $g(x)=\\sqrt{(a^2-x^2)^3}=(a^2-x^2)^{3/2}$，则 $g$ 在**闭区间** $[-a,a]$ 可导（端点单侧导数 $=0$，有限）。

---

**核心辨析：切线存在 $\\ne$ 可导**

同样是"单侧导数不存在"，两种情形差异巨大：

| 情形 | 典例 | 切线是否存在？ |
|---|---|---|
| 单侧导数 $=\\pm\\infty$ | 上半椭圆在 $x=\\pm a$ | **存在**（倾角为 $\\dfrac{\\pi}{2}$ 的**竖直切线**） |
| 单侧导数极限不存在（振荡） | 例 4.2.4 $x\\sin\\tfrac{1}{x}$ 在 $x=0$ 右侧 | **根本不存在切线** |

**几何本质**：

- **$\\pm\\infty$ 型**：曲线有切线，只是切线**竖直**（斜率"无穷大"），不属于 $y=kx+b$ 型可导范围；
- **振荡型**：曲线没有趋近的切线方向。

**考研提醒**：讨论问题时必须严格区分"可导"（单侧导数 = 有限数且相等）与"有切线"（允许竖直切线）——两者是**不同概念**。`
              }
            ] },
        { id: 'ma-c4-s3', type: 'section', title: '§3 导数四则运算和反函数求导法则', children: [
              {
                id: 'ma-c4-s3-n1',
                type: 'concept',
                title: '从定义出发求导的思路（含常数函数）',
                content: `**求导**：计算函数的导函数称为对该函数"求导"。

**两条等价路径**：

1. **差商极限**（定义 4.1.2）：$f'(x)=\\lim_{\\Delta x\\to 0}\\dfrac{f(x+\\Delta x)-f(x)}{\\Delta x}$；
2. **微分等价关系**（定义 4.1.1）：$\\Delta y=f'(x)\\Delta x+o(\\Delta x)$——通过把 $\\Delta y$ 展开成"线性主部 + 高阶无穷小"读出 $f'(x)$。

两条路径等价（定理 4.1.1），可根据便利性选用。

---

**最简单的例子——常数函数**：

若 $y=C$（常数），则 $\\Delta y=C-C=0$，故

$$\\boxed{\\ (C)'=0,\\qquad d(C)=0.\\ }$$

---

**核心套路（等价无穷小代换法）**：利用 §3.3 建立的四大等价

$$\\sin u\\sim u,\\quad \\ln(1+u)\\sim u,\\quad e^u-1\\sim u,\\quad (1+u)^\\alpha-1\\sim\\alpha u\\quad (u\\to 0),$$

配合三角 / 对数 / 指数的恒等变形，能以**极低代价**导出所有基本初等函数的导数。

**方法论意义**：虽然定义法能求导，但除最简单的函数外效率太低，必须建立**求导法则**（四则、反函数、复合）作为机械化工具——这正是本节主线。`
              },
              {
                id: 'ma-c4-s3-n2',
                type: 'concept',
                title: '例 4.3.1 三角函数 $\\sin x,\\cos x$ 求导',
                content: `**例 4.3.1**：求 $y=\\sin x$ 的导函数。

**解**：和差化积

$$\\sin(x+\\Delta x)-\\sin x=2\\cos\\left(x+\\frac{\\Delta x}{2}\\right)\\sin\\frac{\\Delta x}{2}.$$

由 $\\cos$ 的连续性与 $\\sin\\dfrac{\\Delta x}{2}\\sim\\dfrac{\\Delta x}{2}\\ (\\Delta x\\to 0)$：

$$\\lim_{\\Delta x\\to 0}\\frac{\\sin(x+\\Delta x)-\\sin x}{\\Delta x}=\\lim_{\\Delta x\\to 0}\\cos\\!\\left(x+\\frac{\\Delta x}{2}\\right)\\cdot\\lim_{\\Delta x\\to 0}\\frac{\\sin\\tfrac{\\Delta x}{2}}{\\tfrac{\\Delta x}{2}}=\\cos x.$$

$$\\boxed{\\ (\\sin x)'=\\cos x.\\ }$$

---

**同法可得**：

$$\\boxed{\\ (\\cos x)'=-\\sin x.\\ }$$

**记忆诀**："**正化余，余化负正**"——$(\\sin)'\\to\\cos$，$(\\cos)'\\to-\\sin$，导数**循环周期为 4**：

$$\\sin\\to\\cos\\to-\\sin\\to-\\cos\\to\\sin\\to\\cdots$$

**核心技巧**：

- **和差化积**把 $\\Delta$-差转化为**乘积**（含 $\\sin\\dfrac{\\Delta x}{2}$ 因子）；
- **等价代换** $\\sin u\\sim u$ 消去无穷小；
- **连续性**保证外层函数在极限过程中"自由代入"。`
              },
              {
                id: 'ma-c4-s3-n3',
                type: 'concept',
                title: '例 4.3.2–4.3.4 对数、指数、幂函数求导',
                content: `**例 4.3.2 $(\\ln x)'$**：

$$\\ln(x+\\Delta x)-\\ln x=\\ln\\!\\left(1+\\frac{\\Delta x}{x}\\right)\\sim\\frac{\\Delta x}{x}\\ (\\Delta x\\to 0).$$

$$\\lim_{\\Delta x\\to 0}\\frac{\\ln(x+\\Delta x)-\\ln x}{\\Delta x}=\\frac{1}{x}.$$

$$\\boxed{\\ (\\ln x)'=\\frac{1}{x}.\\ }$$

---

**例 4.3.3 $(e^x)'$ 与 $(a^x)'$**：由 $e^{\\Delta x}-1\\sim\\Delta x$：

$$\\lim_{\\Delta x\\to 0}\\frac{e^{x+\\Delta x}-e^x}{\\Delta x}=e^x\\lim_{\\Delta x\\to 0}\\frac{e^{\\Delta x}-1}{\\Delta x}=e^x.$$

$$\\boxed{\\ (e^x)'=e^x,\\qquad (a^x)'=(\\ln a)a^x.\\ }$$

**$y=e^x$ 的唯一性**：它是**导数等于自身**的函数——这是高等数学中首选底数 $e$ 的根本原因。事实上满足 $y'=y$ 的函数全体为 $y=Ce^x$。

---

**例 4.3.4 幂函数 $(x^a)'\\ (x>0)$**：由 $(1+u)^a-1\\sim au$：

$$\\lim_{\\Delta x\\to 0}\\frac{(x+\\Delta x)^a-x^a}{\\Delta x}=\\lim_{\\Delta x\\to 0}\\frac{x^a[(1+\\tfrac{\\Delta x}{x})^a-1]}{\\Delta x}=x^{a-1}\\cdot a=ax^{a-1}.$$

$$\\boxed{\\ (x^a)'=ax^{a-1}.\\ }$$

**具体情形下的定义域**：

| 形式 | 定义域 | 可导范围 |
|---|---|---|
| $x^n$（$n\\in\\mathbf{N^+}$） | $(-\\infty,+\\infty)$ | $(-\\infty,+\\infty)$ |
| $1/x^n$ | $(-\\infty,0)\\cup(0,+\\infty)$ | 同 |
| $x^{2/3}$ | $(-\\infty,+\\infty)$ | $(-\\infty,0)\\cup(0,+\\infty)$，$x=0$ 不可导 |
| $\\sqrt{x}=x^{1/2}$ | $[0,+\\infty)$ | $(0,+\\infty)$，$x=0$ 处单侧导数 $+\\infty$ |`
              },
              {
                id: 'ma-c4-s3-n4',
                type: 'theorem',
                title: '定理 4.3.1 求导的线性运算法则',
                content: `**定理 4.3.1**：$f,g$ 在区间上可导，$c_1,c_2$ 为常数，则 $c_1f+c_2g$ 可导且

$$\\boxed{\\ [c_1f(x)+c_2g(x)]'=c_1f'(x)+c_2g'(x).\\ }$$

**微分形式**：$d[c_1f+c_2g]=c_1\\,df+c_2\\,dg$。

---

**证明**：由极限的线性性直接得

$$\\lim_{\\Delta x\\to 0}\\frac{[c_1f(x+\\Delta x)+c_2g(x+\\Delta x)]-[c_1f(x)+c_2g(x)]}{\\Delta x}$$

$$=c_1\\lim\\frac{f(x+\\Delta x)-f(x)}{\\Delta x}+c_2\\lim\\frac{g(x+\\Delta x)-g(x)}{\\Delta x}=c_1f'(x)+c_2g'(x).\\quad\\blacksquare$$

---

**重要应用：$\\log_a x$ 的导数**

由恒等式 $\\log_a x=\\dfrac{\\ln x}{\\ln a}$（$\\ln a$ 是常数因子）：

$$\\boxed{\\ (\\log_a x)'=\\frac{1}{\\ln a}\\cdot\\frac{1}{x}=\\frac{1}{x\\ln a}.\\ }$$

---

**例 4.3.5**：$y=5\\log_a x+3\\sqrt{x}$ 的导函数。

$$y'=5(\\log_a x)'+3(x^{1/2})'=\\frac{5}{x\\ln a}+\\frac{3}{2\\sqrt{x}}.$$

**核心价值**：把复杂函数**线性拆分**为已知求导公式的**组件和**，配合各基本公式就能机械求解。`
              },
              {
                id: 'ma-c4-s3-n5',
                type: 'theorem',
                title: '定理 4.3.2 乘积求导法则（Leibniz 公式雏形）',
                content: `**定理 4.3.2（乘积法则）**：$f,g$ 可导，则 $fg$ 可导且

$$\\boxed{\\ [f(x)g(x)]'=f'(x)g(x)+f(x)g'(x).\\ }$$

**微分形式**：$d(fg)=g\\,df+f\\,dg$。

**口诀**：**"前导后不导 + 前不导后导"**——对称地把导数"分配"给每个因子。

---

**证明（插项 + 可导蕴含连续）**：用 $f(x+\\Delta x)g(x)$ 作为"桥梁"插项：

$$\\frac{f(x+\\Delta x)g(x+\\Delta x)-f(x)g(x)}{\\Delta x}=f(x+\\Delta x)\\cdot\\frac{g(x+\\Delta x)-g(x)}{\\Delta x}+g(x)\\cdot\\frac{f(x+\\Delta x)-f(x)}{\\Delta x}.$$

令 $\\Delta x\\to 0$，由 $f$ 可导 $\\Rightarrow$ $f$ 连续，$f(x+\\Delta x)\\to f(x)$：

$$[fg]'=f(x)g'(x)+g(x)f'(x).\\quad\\blacksquare$$

---

**例 4.3.6**：$y=3^x\\cos x$

$$y'=(\\ln 3)\\cdot 3^x\\cos x+3^x(-\\sin x)=3^x(\\ln 3\\cdot\\cos x-\\sin x).$$

**例 4.3.7**：$y=\\dfrac{\\sin x}{x}=\\sin x\\cdot x^{-1}$

$$y'=\\cos x\\cdot\\frac{1}{x}+\\sin x\\cdot\\left(-\\frac{1}{x^2}\\right)=\\frac{x\\cos x-\\sin x}{x^2}.$$

---

**常见易错**：$(fg)'\\ne f'\\cdot g'$——这是**绝对错误**！必须严格按"前导后不导 + 前不导后导"相加。`
              },
              {
                id: 'ma-c4-s3-n6',
                type: 'theorem',
                title: '定理 4.3.3 倒数法则与商法则推论',
                content: `**定理 4.3.3（倒数法则）**：$g(x)\\ne 0$ 且 $g$ 可导，则 $\\dfrac{1}{g}$ 可导且

$$\\boxed{\\ \\left[\\frac{1}{g(x)}\\right]'=-\\frac{g'(x)}{[g(x)]^2}.\\ }$$

---

**证明要点**：差商插项

$$\\frac{\\tfrac{1}{g(x+\\Delta x)}-\\tfrac{1}{g(x)}}{\\Delta x}=\\frac{g(x)-g(x+\\Delta x)}{g(x+\\Delta x)g(x)\\Delta x}=-\\frac{1}{g(x+\\Delta x)g(x)}\\cdot\\frac{g(x+\\Delta x)-g(x)}{\\Delta x}.$$

令 $\\Delta x\\to 0$，由 $g$ 连续且 $g(x)\\ne 0$，得结论。

---

**应用：$(\\sec x)',(\\csc x)'$**

$$(\\sec x)'=\\left(\\frac{1}{\\cos x}\\right)'=-\\frac{-\\sin x}{\\cos^2 x}=\\frac{\\sin x}{\\cos^2 x}=\\boxed{\\tan x\\sec x.}$$

$$(\\csc x)'=\\boxed{-\\cot x\\csc x.}$$

---

**推论（商法则）**：$f,g$ 可导且 $g\\ne 0$：

$$\\boxed{\\ \\left[\\frac{f(x)}{g(x)}\\right]'=\\frac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}.\\ }$$

**推导**：$\\dfrac{f}{g}=f\\cdot\\dfrac{1}{g}$ + 乘积法则 + 倒数法则。

**口诀**：**"分子导分母 − 分子分母导，全部除以分母方"**。

---

**例 4.3.9**：$(\\tan x)'=\\left(\\dfrac{\\sin x}{\\cos x}\\right)'=\\dfrac{\\cos^2 x+\\sin^2 x}{\\cos^2 x}=\\boxed{\\sec^2 x.}$

**同理**：$(\\cot x)'=-\\csc^2 x$。`
              },
              {
                id: 'ma-c4-s3-n7',
                type: 'theorem',
                title: '定理 4.3.4 反函数求导定理',
                content: `**定理 4.3.4（反函数求导）**：若 $y=f(x)$ 在 $(a,b)$ 上**连续、严格单调、可导**且 $f'(x)\\ne 0$，记

$$\\alpha=\\min(f(a+),f(b-)),\\quad \\beta=\\max(f(a+),f(b-)),$$

则反函数 $x=f^{-1}(y)$ 在 $(\\alpha,\\beta)$ 上可导，且

$$\\boxed{\\ [f^{-1}(y)]'=\\frac{1}{f'(x)}.\\ }$$

---

**四要条件**：① 连续 ② 严格单调 ③ 可导 ④ $f'\\ne 0$——缺一不可。

**微分形式**：$\\dfrac{dx}{dy}=\\dfrac{1}{\\tfrac{dy}{dx}}$——这也是"微商"视角下导数"上下颠倒"直观的严格依据。

---

**证明思路**：

- 由①② + 反函数连续定理 $\\Rightarrow$ $f^{-1}$ 在 $(\\alpha,\\beta)$ 存在、连续、严格单调；
- 严格单调 + 连续 $\\Rightarrow$ $\\Delta y\\ne 0\\Leftrightarrow\\Delta x\\ne 0$，且 $\\Delta y\\to 0\\Leftrightarrow\\Delta x\\to 0$；
- 差商互为倒数：

$$[f^{-1}(y)]'=\\lim_{\\Delta y\\to 0}\\frac{\\Delta x}{\\Delta y}=\\lim_{\\Delta x\\to 0}\\frac{1}{\\Delta y/\\Delta x}=\\frac{1}{f'(x)}.\\quad\\blacksquare$$

---

**应用策略**：

1. 把原函数与反函数身份互换，先求**原函数**的导数；
2. 取倒数得反函数导数；
3. **关键**：把结果中的 $x$（原函数自变量）用 $y$ **回代**（经 $x=f^{-1}(y)$ 翻译），统一自变量。

**典型应用**：反三角、反双曲、反幂函数——下一节逐一展开。`
              },
              {
                id: 'ma-c4-s3-n8',
                type: 'concept',
                title: '例 4.3.10 反三角函数求导',
                content: `**例 4.3.10**：求 $(\\arctan x)',\\ (\\arcsin x)'$。

---

**$(\\arctan x)'$**：设 $y=\\arctan x\\Leftrightarrow x=\\tan y,\\ y\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$。

$$(\\tan y)'=\\sec^2 y=1+\\tan^2 y=1+x^2,$$

由反函数求导定理：

$$(\\arctan x)'=\\frac{1}{(\\tan y)'}=\\boxed{\\frac{1}{1+x^2}.}$$

---

**$(\\arcsin x)'$**：设 $y=\\arcsin x\\Leftrightarrow x=\\sin y,\\ y\\in\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$，$\\cos y\\ge 0$：

$$(\\sin y)'=\\cos y=\\sqrt{1-\\sin^2 y}=\\sqrt{1-x^2},$$

$$(\\arcsin x)'=\\boxed{\\frac{1}{\\sqrt{1-x^2}}.}$$

---

**同理**（或由 $\\arccos x+\\arcsin x=\\dfrac{\\pi}{2}$）：

$$(\\arccos x)'=-\\frac{1}{\\sqrt{1-x^2}},\\qquad (\\operatorname{arccot}x)'=-\\frac{1}{1+x^2}.$$

---

**记忆提醒**：

| 正系 | 反系（取负号） |
|---|---|
| $(\\arcsin x)'=\\dfrac{1}{\\sqrt{1-x^2}}$ | $(\\arccos x)'=-\\dfrac{1}{\\sqrt{1-x^2}}$ |
| $(\\arctan x)'=\\dfrac{1}{1+x^2}$ | $(\\operatorname{arccot}x)'=-\\dfrac{1}{1+x^2}$ |

**口诀**："**co 系带负号**"——正三角的反函数导数为正，余三角的反函数导数为负。

**易错**：$\\arcsin x$ 的定义域为 $[-1,1]$，但可导区间为**开区间** $(-1,1)$——端点 $x=\\pm 1$ 处导数为 $\\pm\\infty$（垂直切线）。`
              },
              {
                id: 'ma-c4-s3-n9',
                type: 'concept',
                title: '例 4.3.11 双曲函数与反双曲函数求导',
                content: `**双曲函数定义**：

$$\\operatorname{sh}x=\\frac{e^x-e^{-x}}{2},\\quad \\operatorname{ch}x=\\frac{e^x+e^{-x}}{2},\\quad \\operatorname{th}x=\\frac{\\operatorname{sh}x}{\\operatorname{ch}x}.$$

**核心恒等式**：$\\operatorname{ch}^2 x-\\operatorname{sh}^2 x=1$（与 $\\cos^2+\\sin^2=1$ 差个符号）。

---

**预备**：$(e^{-x})'=-e^{-x}$（由倒数法则）。

---

**双曲函数求导**（与三角函数高度类似，但**符号略有差异**）：

$$\\boxed{\\ (\\operatorname{sh}x)'=\\operatorname{ch}x,\\qquad (\\operatorname{ch}x)'=\\operatorname{sh}x\\ (\\text{无负号!})}$$

$$(\\operatorname{th}x)'=\\frac{1}{\\operatorname{ch}^2 x}=\\operatorname{sech}^2 x,\\qquad (\\operatorname{cth}x)'=-\\operatorname{csch}^2 x.$$

**与三角函数对比**：

| 三角 | 双曲 |
|---|---|
| $(\\sin)'=\\cos$ | $(\\operatorname{sh})'=\\operatorname{ch}$ |
| $(\\cos)'=-\\sin$ | $(\\operatorname{ch})'=+\\operatorname{sh}$（**无负号**！） |
| $(\\tan)'=\\sec^2$ | $(\\operatorname{th})'=\\operatorname{sech}^2$ |

---

**反双曲函数求导**（由反函数求导定理）：

设 $y=\\operatorname{sh}^{-1}x\\Leftrightarrow x=\\operatorname{sh}y$：

$$(\\operatorname{sh}y)'=\\operatorname{ch}y=\\sqrt{1+\\operatorname{sh}^2 y}=\\sqrt{1+x^2},$$

$$\\boxed{\\ (\\operatorname{sh}^{-1}x)'=\\frac{1}{\\sqrt{1+x^2}}.\\ }$$

**同理**：

$$(\\operatorname{ch}^{-1}x)'=\\frac{1}{\\sqrt{x^2-1}},\\qquad (\\operatorname{th}^{-1}x)'=(\\operatorname{cth}^{-1}x)'=\\frac{1}{1-x^2}.$$

---

**本质对称**：双曲函数 vs 三角函数——这是**实-复对应**（$\\cos(ix)=\\operatorname{ch}x$，$\\sin(ix)=i\\operatorname{sh}x$）在求导层面的体现。`
              },
              {
                id: 'ma-c4-s3-n10',
                type: 'concept',
                title: '基本初等函数导数与微分公式表',
                content: `**基本初等函数导数公式表**（必背）：

| 函数 | 导数 | 微分 |
|---|---|---|
| $C$ | $0$ | $0$ |
| $x^\\alpha$ | $\\alpha x^{\\alpha-1}$ | $\\alpha x^{\\alpha-1}dx$ |
| $\\sin x$ | $\\cos x$ | $\\cos x\\,dx$ |
| $\\cos x$ | $-\\sin x$ | $-\\sin x\\,dx$ |
| $\\tan x$ | $\\sec^2 x$ | $\\sec^2 x\\,dx$ |
| $\\cot x$ | $-\\csc^2 x$ | $-\\csc^2 x\\,dx$ |
| $\\sec x$ | $\\tan x\\sec x$ | $\\tan x\\sec x\\,dx$ |
| $\\csc x$ | $-\\cot x\\csc x$ | $-\\cot x\\csc x\\,dx$ |
| $\\arcsin x$ | $\\dfrac{1}{\\sqrt{1-x^2}}$ | $\\dfrac{dx}{\\sqrt{1-x^2}}$ |
| $\\arccos x$ | $-\\dfrac{1}{\\sqrt{1-x^2}}$ | $-\\dfrac{dx}{\\sqrt{1-x^2}}$ |
| $\\arctan x$ | $\\dfrac{1}{1+x^2}$ | $\\dfrac{dx}{1+x^2}$ |
| $\\operatorname{arccot}x$ | $-\\dfrac{1}{1+x^2}$ | $-\\dfrac{dx}{1+x^2}$ |
| $a^x$ | $\\ln a\\cdot a^x$ | $\\ln a\\cdot a^x\\,dx$ |
| $e^x$ | $e^x$ | $e^x\\,dx$ |
| $\\log_a x$ | $\\dfrac{1}{x\\ln a}$ | $\\dfrac{dx}{x\\ln a}$ |
| $\\ln x$ | $\\dfrac{1}{x}$ | $\\dfrac{dx}{x}$ |
| $\\operatorname{sh}x$ | $\\operatorname{ch}x$ | $\\operatorname{ch}x\\,dx$ |
| $\\operatorname{ch}x$ | $\\operatorname{sh}x$ | $\\operatorname{sh}x\\,dx$ |
| $\\operatorname{th}x$ | $\\operatorname{sech}^2 x$ | $\\operatorname{sech}^2 x\\,dx$ |
| $\\operatorname{sh}^{-1}x$ | $\\dfrac{1}{\\sqrt{1+x^2}}$ | $\\dfrac{dx}{\\sqrt{1+x^2}}$ |
| $\\operatorname{ch}^{-1}x$ | $\\dfrac{1}{\\sqrt{x^2-1}}$ | $\\dfrac{dx}{\\sqrt{x^2-1}}$ |
| $\\operatorname{th}^{-1}x$ | $\\dfrac{1}{1-x^2}$ | $\\dfrac{dx}{1-x^2}$ |

---

**重要性质**：所有基本初等函数的**导函数**都仍是**基本初等函数的有限次四则运算和复合**——故**在定义域内（除有限点外）不仅可导而且导函数连续**。

**例外点提醒**：$y=\\sqrt[3]{x^2}$ 在 $(-\\infty,+\\infty)$ 连续但导函数 $y'=\\dfrac{2}{3\\sqrt[3]{x}}$ 在 $x=0$ 无定义——可导范围 $\\subsetneq$ 定义域。

**工程口诀**：**熟记 + 用法则 + 四则复合组装**——考研中一般不需要从定义求导。`
              },
              {
                id: 'ma-c4-s3-n11',
                type: 'theorem',
                title: '多函数线性组合与乘积法则推广',
                content: `**(1) 多函数线性组合**：$f_1,\\ldots,f_n$ 可导，$c_i$ 常数，则

$$\\boxed{\\ \\left[\\sum_{i=1}^n c_i f_i(x)\\right]'=\\sum_{i=1}^n c_i f_i'(x).\\ }$$

由定理 4.3.1 经**数学归纳法**即得。

---

**(2) 多函数乘积（Leibniz 乘积展开雏形）**：$f_1,\\ldots,f_n$ 可导，则

$$\\boxed{\\ \\left[\\prod_{i=1}^n f_i(x)\\right]'=\\sum_{j=1}^n f_j'(x)\\prod_{i\\ne j}f_i(x).\\ }$$

即：**对每个因子依次"求导"而保持其余因子不变，再求和**。

**展开示例（$n=3$）**：

$$(fgh)'=f'gh+fg'h+fgh'.$$

---

**证明思路**：对 $n$ 归纳。$n=2$ 即定理 4.3.2；假设 $n=k$ 成立，考察

$$\\left[\\prod_{i=1}^{k+1}f_i\\right]'=\\left[\\left(\\prod_{i=1}^k f_i\\right)\\cdot f_{k+1}\\right]'\\overset{\\text{乘积法则}}{=}\\left(\\prod_{i=1}^k f_i\\right)'f_{k+1}+\\left(\\prod_{i=1}^k f_i\\right)f_{k+1}',$$

再用归纳假设展开即得。$\\blacksquare$

---

**应用范围**：处理**多因子乘积**的导数——避免一对一凑商，**一次性**展开。

**常见场景**：

- 多项式展开（参考例 4.3.12）；
- 指数/对数/反三角 + 多个因子的复合（参考例 4.3.13）；
- 参数方程求导时的分段求导。`
              },
              {
                id: 'ma-c4-s3-n12',
                type: 'concept',
                title: '例 4.3.12–4.3.13 求导法则综合应用',
                content: `**例 4.3.12 $n$ 次多项式求导**：

$$y=a_n x^n+a_{n-1}x^{n-1}+\\cdots+a_1 x+a_0.$$

由线性组合法则与幂函数公式：

$$y'=a_n\\cdot n x^{n-1}+a_{n-1}(n-1)x^{n-2}+\\cdots+a_1.$$

**结论**：**$n$ 次多项式的导函数是 $(n-1)$ 次多项式**。

**高阶推论**：$n$ 次多项式求导 $n$ 次后为常数 $n!\\,a_n$，第 $n+1$ 次起全为零。

---

**例 4.3.13 三因子乘积求导**：

$$y=e^x(x^2+3x-1)\\arcsin x.$$

由三因子乘积法则：

$$y'=(e^x)'(x^2+3x-1)\\arcsin x+e^x(x^2+3x-1)'\\arcsin x+e^x(x^2+3x-1)(\\arcsin x)'$$

$$=e^x(x^2+3x-1)\\arcsin x+e^x(2x+3)\\arcsin x+e^x(x^2+3x-1)\\cdot\\frac{1}{\\sqrt{1-x^2}}$$

合并同类项：

$$\\boxed{\\ y'=e^x\\left[(x^2+5x+2)\\arcsin x+\\frac{x^2+3x-1}{\\sqrt{1-x^2}}\\right].\\ }$$

---

**解题通用流程**（考研四则运算综合题）：

1. **结构分析**：先看最外层是"加减"、"乘除"、"复合"中哪一种；
2. **拆解**：按**线性法则**或**乘积/商法则**分解为单项；
3. **代入**：每个单项用基本初等函数公式表查得导数；
4. **化简**：提公因子、合并同类项、通分——这是得分关键。

**常见陷阱**：

- **遗漏因子**：三因子乘积容易遗漏一项；
- **符号错**：$\\cos',\\operatorname{arccot}',\\arccos'$ 等"co 系"带负号；
- **定义域**：结果中 $\\sqrt{1-x^2},\\ \\ln x$ 等要求 $x\\in(-1,1),\\ x>0$ 等；
- **化简不彻底**：答案停在"三项相加"往往被扣整理分。`
              }
            ] },
        { id: 'ma-c4-s4', type: 'section', title: '§4 复合函数求导法则及其应用', children: [
              {
                id: 'ma-c4-s4-n1',
                type: 'theorem',
                title: '定理 4.4.1 复合函数求导法则（链式法则）',
                content: `**定理 4.4.1（复合函数求导法则 / 链式法则）**：

设 $u=g(x)$ 在 $x=x_0$ 处可导，$y=f(u)$ 在 $u=u_0=g(x_0)$ 处可导，则复合函数 $y=f(g(x))$ 在 $x=x_0$ 处可导，且

$$\\boxed{\\ [f(g(x))]'\\big|_{x=x_0}=f'(u_0)\\,g'(x_0)=f'(g(x_0))\\,g'(x_0).\\ }$$

---

**链式法则的 Leibniz 形式**：

$$\\boxed{\\ \\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}.\\ }$$

**微分形式**：$d[f(g(x))]=f'(u)\\,g'(x)\\,dx$。

---

**证明要点（可微定义 + $\\alpha$ 处理 $\\Delta u=0$ 的特殊情形）**：

由 $f$ 在 $u_0$ 可微，$\\forall\\,\\Delta u\\ne 0$：

$$f(u_0+\\Delta u)-f(u_0)=f'(u_0)\\Delta u+\\alpha\\Delta u,\\quad\\lim_{\\Delta u\\to 0}\\alpha=0.$$

**关键处理**：当 $\\Delta u=0$ 时约定 $\\alpha=0$，使上式对 $\\Delta u=0$ 也成立（避免 $\\Delta u=0$ 时分式 $\\Delta y/\\Delta x$ 无定义的尴尬）。

取 $\\Delta u=g(x_0+\\Delta x)-g(x_0)$，两边除以 $\\Delta x$：

$$\\frac{f(g(x_0+\\Delta x))-f(g(x_0))}{\\Delta x}=f'(u_0)\\frac{\\Delta u}{\\Delta x}+\\alpha\\frac{\\Delta u}{\\Delta x}.$$

令 $\\Delta x\\to 0$：$\\dfrac{\\Delta u}{\\Delta x}\\to g'(x_0)$，$\\alpha\\to 0$，故 $[f(g(x))]'=f'(u_0)g'(x_0)$。$\\blacksquare$

**核心意义**：链式法则是**最常用**的求导工具——几乎所有"不是基本初等函数"的函数都是复合函数，连 $\\sin(\\omega t+\\varphi)$ 都是。`
              },
              {
                id: 'ma-c4-s4-n2',
                type: 'concept',
                title: '例 4.4.1 链式法则重推幂函数求导',
                content: `**例 4.4.1**：用链式法则求 $y=x^a\\ (x>0)$ 的导函数。

**解**：由对数恒等式 $x^a=e^{a\\ln x}$，视为复合

$$\\begin{cases}y=e^u,\\\\ u=a\\ln x.\\end{cases}$$

由链式法则：

$$(x^a)'=(e^u)'\\big|_{u=a\\ln x}\\cdot(a\\ln x)'=e^{a\\ln x}\\cdot\\frac{a}{x}=x^a\\cdot\\frac{a}{x}=\\boxed{ax^{a-1}.}$$

---

**与 §3 定义法推导的对比**：

| 方法 | 所需工具 | 适用范围 |
|---|---|---|
| 定义法（例 4.3.4） | 二项式 $(1+u)^a-1\\sim au$ 等价 | 直接但套路死板 |
| 链式法则 | $e^x,\\ \\ln x$ 求导公式 + 对数恒等式 | 更灵活、可推广 |

**深层启示**：**对数恒等式 $A=e^{\\ln A}$** 是处理幂、幂指、根式等复杂函数的**万能钥匙**——把幂结构"指数化"后配合链式法则可以直接求导。

**记忆要点**：链式法则的关键在于"**外函数**求导后**保留中间变量 $u$**，再乘以中间变量对自变量的导数"——即**"先外后内，逐层相乘"**。`
              },
              {
                id: 'ma-c4-s4-n3',
                type: 'concept',
                title: '例 4.4.2 链式法则典型应用与熟练化技巧',
                content: `**例 4.4.2**：$y=e^{\\cos x}$ 的导函数。

**解**：视为 $y=e^u,\\ u=\\cos x$：

$$y'=(e^u)'\\big|_{u=\\cos x}\\cdot(\\cos x)'=e^{\\cos x}\\cdot(-\\sin x)=\\boxed{-e^{\\cos x}\\sin x.}$$

---

**副产物 $y=e^{-x}$**：取 $u=-x$，$\\dfrac{du}{dx}=-1$：

$$(e^{-x})'=e^{-x}\\cdot(-1)=-e^{-x}.$$

这就是例 4.3.11 中求双曲函数导数时用到的结果——由链式法则可**统一推导**。

---

**熟练化简写**：运算熟练后可**省略显式变量 $u$**，直接默认"外函数求导后自动保留中间结构"：

$$(\\sqrt{1+x^2})'=\\frac{1}{2\\sqrt{1+x^2}}\\cdot(1+x^2)'=\\frac{x}{\\sqrt{1+x^2}}.$$

---

**链式法则的实用口诀**：

**"由外向内，依次求导，层层相乘"**。

每到一层：**① 把内层视为整体求外层导 ② 再乘以内层对自变量的导数**。

**考研强化**：正弦波 $y=A\\sin(\\omega t+\\varphi)$ 的导数：

$$y'=A\\cos(\\omega t+\\varphi)\\cdot\\omega=A\\omega\\cos(\\omega t+\\varphi).$$

此即交流电路、振动力学中的核心公式。`
              },
              {
                id: 'ma-c4-s4-n4',
                type: 'theorem',
                title: '链式法则推广至多重复合 + 例 4.4.3',
                content: `**多重复合链式法则**：$n$ 层复合 $f_1\\circ f_2\\circ\\cdots\\circ f_n$ 的导数为"**各层导数之积**"：

$$\\boxed{\\ \\frac{d}{dx}\\bigl(f_1(f_2(f_3(\\cdots f_n(x)\\cdots)))\\bigr)=\\frac{df_1}{df_2}\\cdot\\frac{df_2}{df_3}\\cdots\\frac{df_{n-1}}{df_n}\\cdot\\frac{df_n}{dx}.\\ }$$

**证明**：对 $n$ 用数学归纳法。$n=2$ 即定理 4.4.1；假设 $n=k$ 成立，则 $n=k+1$ 的复合视为"外层 $f_1$ + 内层 $k$ 重复合"，再用一次链式法则即得。$\\blacksquare$

---

**例 4.4.3（三重复合）**：$y=e^{\\sqrt{1+\\cos x}}$ 的导数。

**解**：设三层结构

$$\\begin{cases}y=f(u)=e^u,\\\\ u=g(v)=\\sqrt{v},\\\\ v=h(x)=1+\\cos x.\\end{cases}$$

$$\\frac{dy}{dx}=\\frac{df}{du}\\cdot\\frac{dg}{dv}\\cdot\\frac{dh}{dx}=e^u\\cdot\\frac{1}{2\\sqrt{v}}\\cdot(-\\sin x).$$

回代 $u,v$：

$$\\boxed{\\ \\frac{dy}{dx}=-\\frac{e^{\\sqrt{1+\\cos x}}\\sin x}{2\\sqrt{1+\\cos x}}.\\ }$$

---

**解题通用流程**：

1. **结构剥离**：从最外层 "$f(\\cdots)$" 向里逐层标记为 $f,g,h,\\ldots$；
2. **逐层求导**：每层记为 $\\dfrac{d(\\text{外})}{d(\\text{里})}$；
3. **相乘 + 回代**：把所有层的导数相乘，最后把中间变量 $u,v,\\ldots$ 回代为 $x$ 的表达式。

**考研常见的多重结构**：$\\arctan(\\ln(1+x^2))$、$\\sin(e^{x^2})$、$\\sqrt{\\ln\\tan x}$ 等——都是三层以上的复合。`
              },
              {
                id: 'ma-c4-s4-n5',
                type: 'concept',
                title: '对数求导法与幂指函数（例 4.4.4）',
                content: `**幂指函数**：形如 $y=u(x)^{v(x)}$ 的函数——**底与指数都含 $x$**。

**对数求导法（标准套路）**：

**Step 1**：两边取对数

$$\\ln y=v(x)\\ln u(x).$$

**Step 2**：两边对 $x$ 求导（左边视 $y=y(x)$ 为复合，$(\\ln y)'=\\dfrac{y'}{y}$）：

$$\\frac{y'}{y}=v'(x)\\ln u(x)+v(x)\\cdot\\frac{u'(x)}{u(x)}.$$

**Step 3**：解出 $y'$

$$\\boxed{\\ y'=u(x)^{v(x)}\\!\\left[v'(x)\\ln u(x)+v(x)\\frac{u'(x)}{u(x)}\\right].\\ }$$

**提醒**：**勿死记公式**，掌握"取对数 → 求导 → 回代"的思想即可。

---

**例 4.4.4**：$y=(\\sin x)^{\\cos x}$ 的导数。

**取对数**：$\\ln y=\\cos x\\ln\\sin x$。

**求导**：

$$\\frac{y'}{y}=(\\cos x)'\\ln\\sin x+\\cos x\\cdot\\frac{(\\sin x)'}{\\sin x}=-\\sin x\\ln\\sin x+\\frac{\\cos^2 x}{\\sin x}.$$

**回代**：

$$\\boxed{\\ y'=(\\sin x)^{\\cos x}\\!\\left(\\frac{\\cos^2 x}{\\sin x}-\\sin x\\ln\\sin x\\right).\\ }$$

---

**对数求导法的其他适用场景**：

1. **连乘积**：$y=f_1(x)f_2(x)\\cdots f_n(x)$ —— 取对数化乘为加；
2. **复杂分式根式**：$y=\\sqrt{\\dfrac{(x+1)^3(x-2)^5}{(x+3)^7}}$ —— 取对数化幂为系数；
3. **幂指函数**：如本例。

**核心价值**：通过"取对数"将**乘/除/幂**结构转化为**加/减/乘**结构，大幅降低求导复杂度。`
              },
              {
                id: 'ma-c4-s4-n6',
                type: 'concept',
                title: '求导与微分运算法则汇总表',
                content: `**导数运算法则**（综合 §3–§4）：

| 名称 | 导数公式 |
|---|---|
| 线性组合 | $(c_1 f+c_2 g)'=c_1 f'+c_2 g'$ |
| 乘法 | $(f\\cdot g)'=f'g+fg'$ |
| 除法 | $\\left(\\dfrac{f}{g}\\right)'=\\dfrac{f'g-fg'}{g^2}$ |
| 反函数 | $[f^{-1}(y)]'=\\dfrac{1}{f'(x)}$ |
| 复合函数 | $[f(g(x))]'=f'(u)g'(x)$ |

---

**微分运算法则**（与导数一一对应）：

| 名称 | 微分公式 |
|---|---|
| 线性组合 | $d(c_1 f+c_2 g)=c_1\\,df+c_2\\,dg$ |
| 乘法 | $d(f\\cdot g)=g\\,df+f\\,dg$ |
| 除法 | $d\\left(\\dfrac{f}{g}\\right)=\\dfrac{g\\,df-f\\,dg}{g^2}$ |
| 反函数 | $dx=\\dfrac{dy}{f'(x)}=[f^{-1}(y)]'\\,dy$ |
| 复合函数 | $d[f(g(x))]=f'(u)g'(x)\\,dx$ |

---

**初等函数求导完备性**：

> 初等函数 $=$ 基本初等函数（§3 表）经**有限次**四则运算与复合。
> $\\Rightarrow$ 任何初等函数均可由**基本初等函数导数表 + 本节五大法则**机械求出。

**配合工作流**：

1. **结构解析**：识别待求函数是"线性组合 / 乘积 / 商 / 反函数 / 复合"中的哪种；
2. **法则选择**：对应使用相应公式；
3. **基元查表**：每个组件查基本初等函数导数表；
4. **合并化简**：最终整理答案。

**考研黄金守则**：**熟记公式 + 识别结构 + 分层递推 = 机械化的求导生产线**。`
              },
              {
                id: 'ma-c4-s4-n7',
                type: 'theorem',
                title: '一阶微分的形式不变性',
                content: `**一阶微分的形式不变性**：对函数 $y=f(u)$，无论 $u$ 是**自变量**还是**中间变量**（即 $u=g(x)$），其一阶微分的形式**都是**

$$\\boxed{\\ d[f(u)]=f'(u)\\,du.\\ }$$

---

**推导**：若 $u=g(x)$ 是中间变量，由复合函数微分公式

$$d[f(g(x))]=f'(u)g'(x)\\,dx=f'(u)\\,du\\quad(\\text{因 }du=g'(x)\\,dx).$$

即与 $u$ 为自变量时的 $d[f(u)]=f'(u)\\,du$ **形式相同**。$\\blacksquare$

---

**深刻含义**：

- **统一视角**：在微分层面，**不必区分**自变量与中间变量——给定 $y=f(u)$ 就可以直接写 $dy=f'(u)du$；
- **换元法的基石**：不定积分中的"凑微分"技巧（如 $\\int f(g(x))g'(x)dx=\\int f(u)du$）正是形式不变性的直接应用；
- **多元微分的雏形**：对比可导性（链式法则要显式相乘），微分的"形式不变"让运算更**符号化**。

---

**实用价值**：

1. **简化复合函数微分**：直接写 $d[\\sin u]=\\cos u\\,du$，即使 $u$ 是 $x$ 的复杂函数；
2. **处理隐函数**：对 $F(x,y)=0$ 两边求微分不必"指定自变量"，统一得 $F_x\\,dx+F_y\\,dy=0$（留待多元微分）；
3. **参数方程**：$\\dfrac{dy}{dx}=\\dfrac{dy/dt}{dx/dt}$——微分之商自然成立。

**核心口诀**：**"微分不认自变量，形式永远 $f'(u)du$"**——这是"微商"直观能用于链式法则、换元法的严格依据。`
              },
              {
                id: 'ma-c4-s4-n8',
                type: 'concept',
                title: '隐函数求导（例 4.4.5 方程两边求导法）',
                content: `**隐函数**：由方程 $F(x,y)=0$ 决定的 $y=y(x)$。

**两种情形**：

- **可显化**：如 $\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\Rightarrow y=\\pm\\dfrac{b}{a}\\sqrt{a^2-x^2}$；
- **不可显化**：如 $y^5+ax^2 y^4+bxy^2+cxy+d=0$（由 Galois 理论，一般无显式解，但代数基本定理保证 $y$ 存在）。

---

**求导通用方法：对方程两边求导**

**核心思想**：把 $y$ **视作 $x$ 的函数**，涉及 $y$ 的项用**链式法则**求导。

---

**例 4.4.5**：求方程 $e^{xy}+x^2 y-1=0$ 确定的 $y(x)$ 的 $y'$。

**解**：两边对 $x$ 求导（$y=y(x)$ 视为复合，$(xy)'=y+xy'$，$(x^2 y)'=2xy+x^2 y'$）：

$$e^{xy}(y+xy')+(2xy+x^2 y')=0.$$

整理：$(e^{xy}x+x^2)y'=-(e^{xy}y+2xy)$，

$$\\boxed{\\ y'=-\\frac{(e^{xy}+2x)y}{(e^{xy}+x)x}.\\ }$$

---

**解题三步法**：

1. **两边对 $x$ 求导**——遇到 $y$ 项时，**外层保留、内层乘 $y'$**（链式法则）；
2. **整理成 $A(x,y)y'+B(x,y)=0$**；
3. **解出 $y'=-\\dfrac{B}{A}$**。

**特点**：结果中**保留 $y$** 是正常的——这反而便于后续代入特殊点计算（如例 4.4.7）。

**考研常见变体**：

- 求 $y'(x_0)$ 值：先隐式求 $y'$，再代入已知点 $(x_0,y_0)$；
- 二阶导 $y''$：对 $y'$ 再求一次导（需再次应用链式法则处理 $y'$ 的复合项）。`
              },
              {
                id: 'ma-c4-s4-n9',
                type: 'concept',
                title: '例 4.4.6–4.4.7 隐函数微分法与切线应用',
                content: `**例 4.4.6（一阶微分形式不变性法）**：方程 $\\sin y^2=\\cos\\sqrt{x}$，求 $y'$。

**解**：两边求微分（用形式不变性）：

$$d(\\sin y^2)=\\cos y^2\\cdot d(y^2)=\\cos y^2\\cdot 2y\\,dy,$$

$$d(\\cos\\sqrt{x})=-\\sin\\sqrt{x}\\cdot d(\\sqrt{x})=-\\frac{\\sin\\sqrt{x}}{2\\sqrt{x}}\\,dx.$$

由 $d(\\sin y^2)=d(\\cos\\sqrt{x})$：

$$2y\\cos y^2\\,dy=-\\frac{\\sin\\sqrt{x}}{2\\sqrt{x}}\\,dx,$$

$$\\boxed{\\ \\frac{dy}{dx}=-\\frac{\\sin\\sqrt{x}}{4\\sqrt{x}\\cdot y\\cos y^2}.\\ }$$

**两种方法对比**：

| 方法 | 优势 |
|---|---|
| 两边求导法（例 4.4.5 套路） | 步骤固定，适用范围广 |
| 一阶微分形式不变性（例 4.4.6） | 左右对称，形式优雅，避免"$y'$ 到处跳" |

---

**例 4.4.7（隐函数切线）**：方程 $e^{x+y}-xy-e=0$，求曲线在 $(0,1)$ 处切线方程。

**解**：两边对 $x$ 求导：

$$e^{x+y}(1+y')-(y+xy')=0.$$

整理：$(e^{x+y}-x)y'=y-e^{x+y}$，

$$y'=\\frac{y-e^{x+y}}{e^{x+y}-x}.$$

代入 $(x,y)=(0,1)$，$e^{x+y}=e$：

$$y'(0)=\\frac{1-e}{e-0}=\\frac{1-e}{e}.$$

切线方程：

$$\\boxed{\\ y=\\frac{1-e}{e}x+1.\\ }$$

---

**核心要点**：

1. **方程两边同求导/微分法**对显函数、可显化隐函数、不可显化隐函数**统统有效**；
2. 求导法需要"把 $y$ 看作 $x$ 的函数 + 链式法则"；求微分法在**单变量阶段**对部分隐函数有效（完全一般情形需多元微分）；
3. 结果含 $y$ **不是缺陷**——反而便于代入具体点求值。`
              },
              {
                id: 'ma-c4-s4-n10',
                type: 'concept',
                title: '链式法则的统一视角（推出倒数法则与反函数法则）',
                content: `链式法则极其**一般**，许多已知求导公式都是它的**特例**。

---

**推出倒数法则（定理 4.3.3）**：将 $y=\\dfrac{1}{g(x)}$ 视为复合

$$\\begin{cases}y=\\dfrac{1}{u},\\\\ u=g(x).\\end{cases}$$

由链式法则：

$$\\left(\\frac{1}{g(x)}\\right)'=\\left(\\frac{1}{u}\\right)'\\cdot g'(x)=-\\frac{1}{u^2}\\cdot g'(x)=\\boxed{-\\frac{g'(x)}{[g(x)]^2}.}$$

这就是 §3 倒数法则的结论——无需单独证明。

---

**推出反函数求导法则（定理 4.3.4）**：

设 $y=f(x)$ 满足反函数求导条件，$x=f^{-1}(y)$ 为反函数。则恒等式

$$x=f^{-1}(f(x))$$

两边对 $x$ 求导（右边用链式法则）：

$$1=(x)'=[f^{-1}(f(x))]'=[f^{-1}(y)]'\\cdot f'(x),$$

即

$$\\boxed{\\ [f^{-1}(y)]'=\\frac{1}{f'(x)}.\\ }$$

这也是反函数求导定理的结论——由链式法则**两行**推出。

---

**深刻总结**：

> **链式法则 = 微分学的"万能法则"**。
>
> 所有求导法则（线性组合、乘积、商、倒数、反函数、幂指函数）在某种意义上都可归约到链式法则的特殊情形。

**结构层次**：

$$\\text{链式法则}\\supset\\begin{cases}\\text{反函数求导（取 }y=f^{-1}(f(x))=x\\text{）}\\\\ \\text{倒数法则（取 }y=1/u\\text{）}\\\\ \\text{对数求导法（取 }\\ln y\\text{ 为外层）}\\\\ \\text{隐函数求导（把 }y\\text{ 作为 }x\\text{ 的复合变量）}\\\\ \\text{参数方程求导（下一节）}\\end{cases}$$

**考研精髓**：**熟练驾驭链式法则，求导已能解决大半问题**。`
              },
              {
                id: 'ma-c4-s4-n11',
                type: 'concept',
                title: '参数方程求导公式（例 4.4.8 摆线 + 例 4.4.9 抛射体）',
                content: `**参数方程**：

$$\\begin{cases}x=\\varphi(t),\\\\ y=\\psi(t),\\end{cases}\\quad\\alpha\\le t\\le\\beta.$$

条件：$\\varphi,\\psi$ 可微，$\\varphi$ **严格单调**且 $\\varphi'(t)\\ne 0$。

---

**参数方程求导公式**：

$$\\boxed{\\ \\frac{dy}{dx}=\\frac{\\psi'(t)}{\\varphi'(t)}=\\frac{dy/dt}{dx/dt}.\\ }$$

**推导**：由反函数求导 $t=\\varphi^{-1}(x)$ 存在且 $(\\varphi^{-1})'(x)=\\dfrac{1}{\\varphi'(t)}$，链式法则：

$$\\frac{dy}{dx}=\\frac{dy}{dt}\\cdot\\frac{dt}{dx}=\\psi'(t)\\cdot\\frac{1}{\\varphi'(t)}=\\frac{\\psi'(t)}{\\varphi'(t)}.$$

**微分视角**：由 $dy=\\psi'(t)dt$, $dx=\\varphi'(t)dt$，两式相除即得——**"微分之商"**的自然表现。

---

**例 4.4.8（摆线）**：$\\begin{cases}x=t-\\sin t,\\\\ y=1-\\cos t,\\end{cases}\\ 0\\le t\\le\\pi$。

（几何：单位圆沿 $x$ 轴无滑滚动时，圆周一点的轨迹。）

$$\\frac{dy}{dx}=\\frac{(1-\\cos t)'}{(t-\\sin t)'}=\\frac{\\sin t}{1-\\cos t}=\\frac{2\\sin\\frac{t}{2}\\cos\\frac{t}{2}}{2\\sin^2\\frac{t}{2}}=\\boxed{\\cot\\frac{t}{2}.}$$

---

**例 4.4.9（抛射体何时水平飞行）**：$\\begin{cases}x=v_1 t,\\\\ y=v_2 t-\\dfrac{1}{2}gt^2,\\end{cases}$ 问 $\\theta=0$ 时刻。

**解**：飞行倾角 $\\theta=\\arctan\\dfrac{dy}{dx}$：

$$\\frac{dy}{dx}=\\frac{(v_2 t-\\tfrac{1}{2}gt^2)'}{(v_1 t)'}=\\frac{v_2-gt}{v_1}.$$

令 $\\dfrac{dy}{dx}=0\\Rightarrow v_2-gt=0\\Rightarrow$

$$\\boxed{\\ t=\\frac{v_2}{g}.\\ }$$

即**上升到最高点**（垂直速度归零）的时刻——与中学力学公式完全吻合。

---

**考研高频题型**：

- **求切线方程**：算出 $\\dfrac{dy}{dx}$ 在指定 $t_0$ 的值，结合 $(x(t_0),y(t_0))$ 写切线；
- **极值点 / 水平切线**：解 $\\psi'(t)=0$；
- **垂直切线**：解 $\\varphi'(t)=0$（此时 $\\dfrac{dy}{dx}$ 发散）。`
              },
              {
                id: 'ma-c4-s4-n12',
                type: 'concept',
                title: '显式 / 隐式 / 参数三形式辨析（椭圆三解法对比）',
                content: `**函数的三种表达形式**：

| 形式 | 表达式 | 典例 |
|---|---|---|
| **显式** | $y=f(x)$ | $y=\\sqrt{a^2-x^2}$ |
| **隐式** | $F(x,y)=0$ | $\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1$ |
| **参数** | $\\begin{cases}x=\\varphi(t)\\\\ y=\\psi(t)\\end{cases}$ | $\\begin{cases}x=a\\cos t\\\\ y=b\\sin t\\end{cases}$ |

**适用场景**：

- **显式**：直接描绘 $y$ 关于 $x$ 的关系，便于绘图；
- **隐式**：紧凑对称，适合二次/高次曲线（代数方程）；
- **参数**：突出"运动轨迹"物理意义，适合摆线、螺旋线、抛射体等。

---

**椭圆求 $y'$ 三种解法对比**（结果都是 $y'=-\\dfrac{b^2 x}{a^2 y}$，但难度天差地别）：

**方法 1（显式）**：$y=\\pm\\dfrac{b}{a}\\sqrt{a^2-x^2}$

$$y'=\\pm\\frac{b}{a}\\cdot\\frac{-x}{\\sqrt{a^2-x^2}}=-\\frac{b^2 x}{a^2 y}.$$

（需要讨论 $\\pm$，根式复杂。）

**方法 2（参数）**：$\\begin{cases}x=a\\cos t\\\\ y=b\\sin t\\end{cases}$

$$\\frac{dy}{dx}=\\frac{b\\cos t}{-a\\sin t}=-\\frac{b^2(a\\cos t)}{a^2(b\\sin t)}=-\\frac{b^2 x}{a^2 y}.$$

（形式对称，但需引入参数 $t$。）

**方法 3（隐式，最简洁！）**：

$$d\\!\\left(\\frac{x^2}{a^2}\\right)+d\\!\\left(\\frac{y^2}{b^2}\\right)=\\frac{2x}{a^2}dx+\\frac{2y}{b^2}dy=0,$$

$$\\Rightarrow\\boxed{\\ y'=\\frac{dy}{dx}=-\\frac{b^2 x}{a^2 y}.\\ }$$

仅用**两行**！——这是隐式方法的威力。

---

**考研选型指南**：

| 情形 | 推荐方法 |
|---|---|
| 简单多项式/根式 | 显式直接求导 |
| 二次曲线、代数方程 | **隐式**（两边求导/微分） |
| 运动轨迹、摆线 | **参数**（分子分母各求 $t$ 导） |
| 幂指函数 | **对数求导法**（§4 n5） |
| 乘积/连乘积/复杂分式 | **对数求导法** |

**核心哲学**：**根据题目结构选择最经济的表达形式**——这是高分考生的必备素养。`
              }
            ] },
        { id: 'ma-c4-s5', type: 'section', title: '§5 高阶导数和高阶微分', children: [
              {
                id: 'ma-c4-s5-n1',
                type: 'concept',
                title: '高阶导数的实际背景（Newton 第二定律与加速度）',
                content: `**物理背景**：一个函数的导数仍是一个函数——有必要时可继续求导。**二阶导数**最早正是 Newton 在研究物体运动规律时引入的。

---

**冲量定律**（Newton）：受力物体速度的改变量

$$\\Delta v=v(t+\\Delta t)-v(t)$$

与受力 $F$ 及受力时间 $\\Delta t$ 成正比，与质量 $m$ 成反比。取适当单位后：

$$F\\,\\Delta t=m\\,\\Delta v.$$

改写为 $F=m\\cdot\\dfrac{\\Delta v}{\\Delta t}$。

**匀变速**：$\\dfrac{\\Delta v}{\\Delta t}$ 为常数 $a$，$\\Rightarrow F=ma$（中学形式）。

**变速运动**：加速度 $a(t)$ 随 $t$ 变化，瞬时加速度

$$a(t)=\\lim_{\\Delta t\\to 0}\\frac{\\Delta v}{\\Delta t}=\\lim_{\\Delta t\\to 0}\\frac{v(t+\\Delta t)-v(t)}{\\Delta t}=v'(t).$$

---

**位移-速度-加速度链**：

$$s(t)\\xrightarrow{\\text{求导}}v(t)=s'(t)\\xrightarrow{\\text{求导}}a(t)=v'(t)=s''(t).$$

**$a(t)$ 是位移 $s(t)$ 的二阶导数**，由此 Newton 第二定律写作

$$\\boxed{\\ F=m\\,\\frac{d^2 s}{dt^2}.\\ }$$

---

**另一历史动因**：同时期 Leibniz 引入二阶导数研究**曲线的曲率**问题（后续章节深入讨论）。

**核心结论**：**高阶导数与一阶导数一样，也完全来自研究实际问题的需要**——它是刻画"变化率的变化率"的自然工具（力学、控制论、信号处理等）。`
              },
              {
                id: 'ma-c4-s5-n2',
                type: 'concept',
                title: '定义 4.5.1 n 阶导数',
                content: `**递推构造**：

- $y=f(x)$ 可导 $\\Rightarrow$ 得 $f'(x)$（一阶导数）；
- $f'(x)$ 可导 $\\Rightarrow$ 得 **$f''(x)=[f'(x)]'$（二阶导数）**；
- $f''(x)$ 可导 $\\Rightarrow$ 得 **$f'''(x)$（三阶导数）**；
- 以此类推……

---

**定义 4.5.1（$n$ 阶导数）**：设 $y=f(x)$ 的 $(n-1)$ 阶导数 $f^{(n-1)}(x)$ 仍可导（$n=2,3,\\ldots$），则其导数

$$\\boxed{\\ f^{(n)}(x)=[f^{(n-1)}(x)]'=\\frac{d^n f}{dx^n}=\\frac{d^n y}{dx^n}\\ }$$

称为 $f(x)$ 的 **$n$ 阶导数**。称 $f$ 为 **$n$ 阶可导函数**，或称 $f$ 的 $n$ 阶导数**存在**。

**常用记号**：$f^{(n)}(x),\\ y^{(n)}(x),\\ \\dfrac{d^n f}{dx^n},\\ \\dfrac{d^n y}{dx^n}$（$n\\ge 2$ 时称为**高阶导数**）。

---

**蕴含关系**：

$$\\boxed{\\ f\\text{ 的 }n\\text{ 阶导数存在}\\Rightarrow f\\text{ 的所有 }k<n\\text{ 阶导数都存在}.\\ }$$

反之不成立——$f'$ 存在不等于 $f''$ 存在。

---

**经典物理应用**：

| 物理量 | 一阶 | 二阶 | 三阶 |
|---|---|---|---|
| 位移 $s(t)$ | 速度 $v$ | 加速度 $a$ | 跃度（急动度）$j$ |
| 电量 $q(t)$ | 电流 $i$ | 电流变化率 | — |

**记号优势**：$\\dfrac{d^n y}{dx^n}$ 这种分数记号不仅是符号，更体现了高阶导数与高阶微分之间的"**微商**"联系——这在后续"高阶微分"一节会得到严格解释。`
              },
              {
                id: 'ma-c4-s5-n3',
                type: 'concept',
                title: '例 4.5.1–4.5.2 指数函数与三角函数的 $n$ 阶导数',
                content: `**例 4.5.1 指数函数**：

由 $(e^x)'=e^x$，反复求导仍为 $e^x$：

$$\\boxed{\\ (e^x)^{(n)}=e^x.\\ }$$

**一般指数**：

$$\\boxed{\\ (a^x)^{(n)}=(\\ln a)^n\\,a^x.\\ }$$

（推导：$(a^x)'=\\ln a\\cdot a^x$，每求一阶多乘一个 $\\ln a$。）

---

**例 4.5.2 三角函数**：

**关键恒等变形**：

$$(\\sin x)'=\\cos x=\\sin\\!\\left(x+\\frac{\\pi}{2}\\right).$$

**本质**：求导一次 $\\Leftrightarrow$ 相位**前移 $\\dfrac{\\pi}{2}$**。

重复此过程：

$$(\\sin x)''=\\sin\\!\\left(x+\\frac{2\\pi}{2}\\right),\\quad (\\sin x)'''=\\sin\\!\\left(x+\\frac{3\\pi}{2}\\right),\\ldots$$

**数学归纳法**即得：

$$\\boxed{\\ (\\sin x)^{(n)}=\\sin\\!\\left(x+\\frac{n\\pi}{2}\\right).\\ }$$

---

**同理**（由 $(\\cos x)'=\\cos(x+\\pi/2)$）：

$$\\boxed{\\ (\\cos x)^{(n)}=\\cos\\!\\left(x+\\frac{n\\pi}{2}\\right).\\ }$$

---

**周期性观察**：求导**周期为 4**，符合三角函数循环：

| $n\\bmod 4$ | $(\\sin x)^{(n)}$ | $(\\cos x)^{(n)}$ |
|---|---|---|
| $0$ | $\\sin x$ | $\\cos x$ |
| $1$ | $\\cos x$ | $-\\sin x$ |
| $2$ | $-\\sin x$ | $-\\cos x$ |
| $3$ | $-\\cos x$ | $\\sin x$ |

**物理含义**：简谐振动 $y=A\\sin(\\omega t)$ 的加速度为 $y''=-A\\omega^2\\sin(\\omega t)=-\\omega^2 y$——恒力回复到初相反方向，这是谐振方程 $y''+\\omega^2 y=0$ 的雏形。`
              },
              {
                id: 'ma-c4-s5-n4',
                type: 'concept',
                title: '例 4.5.3–4.5.4 幂函数与对数函数的 $n$ 阶导数',
                content: `**例 4.5.3 $y=x^m$（$m\\in\\mathbf{N^+}$）的 $n$ 阶导数**：

逐次求导："指数降 $1$，系数乘当前指数"：

$$(x^m)'=mx^{m-1},\\ (x^m)''=m(m-1)x^{m-2},\\ldots$$

**一般规律**：

$$\\boxed{\\ (x^m)^{(n)}=\\begin{cases}m(m-1)\\cdots(m-n+1)x^{m-n}, & n\\le m,\\\\ 0, & n>m.\\end{cases}\\ }$$

**特殊值**：$(x^m)^{(m)}=m!$（常数！）。$(x^m)^{(m+1)}=0$。

**推论**：**$m$ 次多项式的 $(m+1)$ 阶导数恒为零**——代数上它至多是 $m$ 次多项式。

---

**例 4.5.4 $y=\\ln x$ 的 $n$ 阶导数**：

逐次求导（注意符号交替）：

$$(\\ln x)'=\\frac{1}{x}=x^{-1},\\quad (\\ln x)''=-x^{-2},$$

$$(\\ln x)'''=2x^{-3},\\quad (\\ln x)^{(4)}=-3!x^{-4},\\ldots$$

**一般规律**（数学归纳法）：

$$\\boxed{\\ (\\ln x)^{(n)}=(-1)^{n-1}\\frac{(n-1)!}{x^n}.\\ }$$

---

**副产物 $(1/x)^{(n)}$**：

由 $\\dfrac{1}{x}=(\\ln x)'$，$\\left(\\dfrac{1}{x}\\right)^{(n)}=(\\ln x)^{(n+1)}$，故

$$\\boxed{\\ \\left(\\frac{1}{x}\\right)^{(n)}=(-1)^n\\frac{n!}{x^{n+1}}.\\ }$$

**推广**：

$$\\left(\\frac{1}{x-a}\\right)^{(n)}=(-1)^n\\frac{n!}{(x-a)^{n+1}}.$$

**实用意义**：Taylor 级数、部分分式分解、Leibniz 公式中频繁出现这些高阶导数模式。

**考研常见**：$\\dfrac{1}{x^2-1}=\\dfrac{1}{2}\\left(\\dfrac{1}{x-1}-\\dfrac{1}{x+1}\\right)$，再利用上述公式求高阶导数。`
              },
              {
                id: 'ma-c4-s5-n5',
                type: 'theorem',
                title: '定理 4.5.1 高阶导数的线性组合法则',
                content: `**定理 4.5.1**：$f,g$ 均 $n$ 阶可导，$c_1,c_2$ 常数，则 $c_1 f+c_2 g$ 也 $n$ 阶可导，且

$$\\boxed{\\ [c_1 f(x)+c_2 g(x)]^{(n)}=c_1 f^{(n)}(x)+c_2 g^{(n)}(x).\\ }$$

---

**多函数推广**（数学归纳法）：

$$\\boxed{\\ \\left[\\sum_{i=1}^n c_i f_i(x)\\right]^{(k)}=\\sum_{i=1}^n c_i f_i^{(k)}(x).\\ }$$

---

**证明要点**：对 $n$ 归纳。$n=1$ 即定理 4.3.1（一阶线性）；若 $n=k$ 成立，对其两边再求一次导即得 $n=k+1$。

---

**实用技巧**：

- **多项式求高阶导数**：对每项分别用 $(x^m)^{(n)}$ 公式，再求和；
- **三角多项式**：如 $y=3\\sin x+5\\cos 2x+x^4$，分别套用基本函数的高阶导数公式后线性组合。

---

**例**：$y=x^4+2e^x-\\sin x$ 的 $100$ 阶导数：

$$y^{(100)}=(x^4)^{(100)}+2(e^x)^{(100)}-(\\sin x)^{(100)}=0+2e^x-\\sin\\!\\left(x+\\frac{100\\pi}{2}\\right)=2e^x-\\sin x.$$

（注：$\\sin(x+50\\pi)=\\sin x$，周期 $2\\pi$，$50\\pi=25\\cdot 2\\pi$。）

**对比一阶法则**：高阶线性法则在形式上与一阶**完全一致**——只是把 "$'$" 换成 "$^{(n)}$"。这种**线性性**是所有求导运算最友好的特性。`
              },
              {
                id: 'ma-c4-s5-n6',
                type: 'theorem',
                title: '定理 4.5.2 Leibniz 公式（乘积的高阶导数）',
                content: `**定理 4.5.2（Leibniz 公式）**：$f,g$ 均 $n$ 阶可导，则

$$\\boxed{\\ [f(x)\\cdot g(x)]^{(n)}=\\sum_{k=0}^n C_n^k\\,f^{(n-k)}(x)\\,g^{(k)}(x),\\ }$$

其中 $C_n^k=\\dfrac{n!}{k!(n-k)!}$ 为组合数。

---

**与二项式公式的对称**：

$$(a+b)^n=\\sum_{k=0}^n C_n^k\\,a^{n-k}b^k.$$

**类比**：把 "$a$" 换成 "$f$"（求导次数减少），"$b$" 换成 "$g$"（求导次数增加），指数换成求导次数——**形式完全一致**！

**记忆口诀**：**"Leibniz $=$ 求导版二项式"**。

---

**证明梗概（数学归纳法）**：

- **$n=1$**：$[fg]'=f'g+fg'=C_1^0 f'g^{(0)}+C_1^1 f^{(0)}g'$，成立；
- **$n=m$ 成立**（归纳假设），对两边再求一次导：

$$[fg]^{(m+1)}=\\{[fg]^{(m)}\\}'=\\sum_{k=0}^m C_m^k[f^{(m-k)}g^{(k)}]'$$

$$=\\sum_{k=0}^m C_m^k f^{(m+1-k)}g^{(k)}+\\sum_{k=0}^m C_m^k f^{(m-k)}g^{(k+1)}.$$

用**帕斯卡恒等式** $C_m^{k-1}+C_m^k=C_{m+1}^k$ 合并两项，即得 $n=m+1$ 情形。$\\blacksquare$

---

**展开示例（$n=3$）**：

$$(fg)'''=f'''g+3f''g'+3f'g''+fg'''.$$

**展开示例（$n=4$）**：

$$(fg)^{(4)}=f^{(4)}g+4f'''g'+6f''g''+4f'g'''+fg^{(4)}.$$

**使用技巧**：若 $f$ 或 $g$ 某方某阶后**为零**（如多项式），Leibniz 和中只剩**有限项**——这是高效计算的关键（见下一卡 n7）。`
              },
              {
                id: 'ma-c4-s5-n7',
                type: 'concept',
                title: '例 4.5.5 Leibniz 公式典型应用',
                content: `**例 4.5.5**：求 $y=(3x^2-2)\\sin 2x$ 的 **100 阶导数**。

**解**：用 Leibniz 公式。

**Step 1 — 观察关键性质**：

- $f(x)=3x^2-2$ 是**二次多项式**，$f^{(n)}=0\\ (n\\ge 3)$；
- $g(x)=\\sin 2x$，$g^{(n)}=2^n\\sin\\!\\left(2x+\\dfrac{n\\pi}{2}\\right)$（由例 4.5.2 + 链式法则系数 $\\omega=2$）。

Leibniz 和 $\\sum_{k=0}^{100}C_{100}^k g^{(100-k)}f^{(k)}$ 中，$f^{(k)}$ 在 $k\\ge 3$ 时**全为零**——**和式只剩三项**（$k=0,1,2$）！

---

**Step 2 — 列出非零项**：

- $k=0$：$C_{100}^0\\,g^{(100)}\\,f=\\sin(2x+50\\pi)\\cdot 2^{100}\\cdot(3x^2-2)=2^{100}(3x^2-2)\\sin 2x$；
  （因 $50\\pi=25\\cdot 2\\pi$ 为周期整数倍。）
- $k=1$：$C_{100}^1\\,g^{(99)}\\,f'=100\\cdot 2^{99}\\sin\\!\\left(2x+\\dfrac{99\\pi}{2}\\right)\\cdot 6x$；

  注意 $\\sin(2x+99\\pi/2)=-\\cos 2x$，故此项 $=-100\\cdot 2^{99}\\cdot 6x\\cos 2x=-600x\\cdot 2^{99}\\cos 2x$；

- $k=2$：$C_{100}^2\\,g^{(98)}\\,f''=4950\\cdot 2^{98}\\sin(2x+49\\pi)\\cdot 6=4950\\cdot 2^{98}\\cdot(-\\sin 2x)\\cdot 6$；

  （因 $49\\pi=24\\cdot 2\\pi+\\pi$，故 $\\sin(2x+49\\pi)=-\\sin 2x$。）

---

**Step 3 — 合并整理**（提取公因子 $2^{98}$）：

$$y^{(100)}=2^{98}\\!\\left[(12x^2-29708)\\sin 2x-1200x\\cos 2x\\right].$$

---

**Leibniz 的威力**：

> **若乘积的一个因子有"有限阶截断"（如多项式、$\\sin,\\cos$ 零高阶为零），Leibniz 公式将无限和化为有限和——$n$ 阶导数瞬间可解**！

**考研套路**：

- $y=P_k(x)\\cdot e^x,\\ y=P_k(x)\\cdot\\sin x$ 等"多项式 × 超越函数"类型——Leibniz 首选。

**商的处理**：$\\left[\\dfrac{f}{g}\\right]^{(n)}=[f\\cdot\\dfrac{1}{g}]^{(n)}$ + Leibniz 公式 + $(1/g)$ 的高阶导（用例 4.5.4 技巧）。`
              },
              {
                id: 'ma-c4-s5-n8',
                type: 'concept',
                title: '复合函数二阶导数（链式不能简单平方）',
                content: `**问题**：$y=f(g(x))$ 的二阶导数 $y''$ 是什么？

一阶导数由链式法则：

$$y'=f'(u)g'(x)\\quad(u=g(x)).$$

---

**求二阶导数**：对 $y'=f'(u)g'(x)$ 关于 $x$ 求导（**乘积法则** + 链式法则）：

$$y''=\\frac{d}{dx}[f'(u)]\\cdot g'(x)+f'(u)\\cdot g''(x).$$

**关键**：$f'(u)$ 仍是 $u=g(x)$ 的函数，故 $\\dfrac{d}{dx}[f'(u)]$ 仍要**继续链式**：

$$\\frac{d}{dx}[f'(u)]=f''(u)\\cdot g'(x).$$

代入：

$$\\boxed{\\ y''=f''(u)[g'(x)]^2+f'(u)g''(x).\\ }$$

---

**错误警示（初学者易犯）**：

❌ **错误结论**：$y''=f''(u)g''(x)$（错！错！错！）

**原因**：

- 一阶 $(fg)'=f'g'$？**错**（正确是 $f'g+fg'$）；
- 链式法则作用在**一阶**上是"一层 $f'\\cdot g'$"，但求二阶时要**对这个乘积本身**求导，而**每个因子**都还是 $x$ 的函数。

**记忆诀**：**"二阶是一阶的导，不是一阶公式的平方"**。

---

**Leibniz 式理解**：

$$\\underbrace{y''}_{\\text{"外导+内导平方"}}=\\underbrace{f''(u)[g'(x)]^2}_{\\text{外二阶 × 内一阶²}}+\\underbrace{f'(u)g''(x)}_{\\text{外一阶 × 内二阶}}.$$

两项分别对应"**外函数二次作用于 $u$**"和"**内函数二次作用于 $x$**"——都是合理的"二阶"贡献。

---

**三阶及以上**：公式越来越复杂——**实战建议不要死记公式**，直接**对一阶结果再求一次导**（参考例 4.5.6 的"替代方法"）。`
              },
              {
                id: 'ma-c4-s5-n9',
                type: 'concept',
                title: '例 4.5.6 复合函数二阶导数的两种做法',
                content: `**例 4.5.6**：求 $y=e^{\\sin x}$ 的二阶导数。

---

**方法 1：套公式**（复合二阶导数公式，较易出错）

设 $u=\\sin x,\\ y=e^u$：

- $\\dfrac{dy}{du}=e^u,\\ \\dfrac{d^2 y}{du^2}=e^u$；
- $\\dfrac{du}{dx}=\\cos x,\\ \\dfrac{d^2 u}{dx^2}=-\\sin x$。

代入公式 $y''=f''(u)[g'(x)]^2+f'(u)g''(x)$：

$$y''=e^u\\cdot\\cos^2 x+e^u\\cdot(-\\sin x)=e^{\\sin x}(\\cos^2 x-\\sin x).$$

---

**方法 2：对一阶结果再求一次导**（推荐！）

先求一阶：

$$y'=(e^{\\sin x})'=e^{\\sin x}\\cos x.$$

再对 $y'$ 求导（乘积法则）：

$$y''=(e^{\\sin x}\\cos x)'=(e^{\\sin x})'\\cos x+e^{\\sin x}(\\cos x)'$$

$$=e^{\\sin x}\\cos x\\cdot\\cos x+e^{\\sin x}(-\\sin x)=\\boxed{e^{\\sin x}(\\cos^2 x-\\sin x).}$$

---

**两种方法对比**：

| 方法 | 优势 | 劣势 |
|---|---|---|
| **套公式** | 直接，不必展开一阶 | 公式容易记错；三阶以上公式复杂 |
| **再求一次导** | 思路清晰，无需死记公式 | 中间步骤略多 |

**考研强烈推荐方法 2**——"再求一次导"是**无论多阶都通用的万能做法**，避免死记易错的公式。

---

**核心哲学**：

> **求 $n$ 阶导数 = 求 $(n-1)$ 阶导数后再求一阶**。
>
> 耐心 + 仔细 = 高阶求导成功的唯一保证。

**实战建议**：

- 一阶务必化到**最简形式**（提取公因子），否则二阶会非常繁琐；
- 避免多层嵌套，**适度展开**再求导；
- 检查"**是否每个因子都参与了求导**"——乘积法则最易漏项。`
              },
              {
                id: 'ma-c4-s5-n10',
                type: 'concept',
                title: '例 4.5.7 隐函数二阶导数',
                content: `**例 4.5.7**：求 $e^{xy}+x^2 y-1=0$ 确定的 $y(x)$ 的 $y''$。

**思路**：对例 4.4.5 求一阶的**导出式**再**两边求导一次**。

---

**Step 1 — 由例 4.4.5**：一阶导出式

$$e^{xy}(y+xy')+(2xy+x^2 y')=0.\\qquad(*)$$

解得

$$y'=-\\frac{(e^{xy}+2x)y}{(e^{xy}+x)x}.$$

---

**Step 2 — 对 $(*)$ 两边再关于 $x$ 求导**（$y,y'$ 都是 $x$ 的函数）：

$$[e^{xy}(y+xy')]'+(2xy+x^2 y')'=0.$$

**左第一项**（乘积 + 复合）：

$$e^{xy}\\cdot(xy)'\\cdot(y+xy')+e^{xy}(y+xy')'$$

$$=e^{xy}(y+xy')^2+e^{xy}(y'+y'+xy'')=e^{xy}(y+xy')^2+e^{xy}(2y'+xy'').$$

**左第二项**：

$$(2xy+x^2 y')'=2y+2xy'+2xy'+x^2 y''=2y+4xy'+x^2 y''.$$

**合并并整理**（记 $E=e^{xy}$）：

$$E[(y+xy')^2+2y']+(2y+4xy')+(Ex+x^2)y''=0,$$

$$y''=-\\frac{E[(y+xy')^2+2y']+(2y+4xy')}{x(E+x)}.$$

---

**Step 3 — 代入一阶 $y'$ 并化简**：

将 $y'=-\\dfrac{(E+2x)y}{(E+x)x}$ 代入，经耐心代数整理：

$$\\boxed{\\ y''=\\frac{2y\\,e^{3xy}+8xy\\,e^{2xy}+(12x^2 y-x^3 y^2)e^{xy}+6x^3 y}{x^2(e^{xy}+x)^3}.\\ }$$

---

**考研提醒**：

- 隐函数二阶导数的结果**几乎总是复杂**——**耐心和分步整理**比公式更重要；
- 若题目只问 $y''(x_0)$ 的**数值**，可**在**两次求导完成后**直接代入** $(x_0,y_0)$ 与 $y'(x_0)$——比先化简一般表达式更节省计算；
- **避免错误**：$(y')^2\\ne (y^2)'$；$(xy')'=y'+xy''$（乘积法则，别漏 $xy''$ 项）。`
              },
              {
                id: 'ma-c4-s5-n11',
                type: 'concept',
                title: '参数方程二阶导数公式 + 例 4.5.8 摆线',
                content: `**参数方程** $\\begin{cases}x=\\varphi(t)\\\\ y=\\psi(t)\\end{cases}$ 的**一阶导数**（§4）：

$$\\frac{dy}{dx}=\\frac{\\psi'(t)}{\\varphi'(t)}.$$

---

**二阶导数**：把 $\\dfrac{dy}{dx}=\\dfrac{\\psi'(t)}{\\varphi'(t)}=\\xi(t)$ 视为**新的参数方程**

$$\\begin{cases}x=\\varphi(t)\\\\ \\dfrac{dy}{dx}=\\xi(t)\\end{cases}$$

对它再用参数方程求导公式：

$$\\frac{d^2 y}{dx^2}=\\frac{\\xi'(t)}{\\varphi'(t)}.$$

代入 $\\xi=\\psi'/\\varphi'$，用商法则展开：

$$\\boxed{\\ \\frac{d^2 y}{dx^2}=\\frac{\\psi''(t)\\varphi'(t)-\\psi'(t)\\varphi''(t)}{[\\varphi'(t)]^3}.\\ }$$

---

**核心警示**（初学者常犯错）：

❌ **绝对错误**：$\\dfrac{d^2 y}{dx^2}=\\dfrac{\\psi''(t)}{\\varphi''(t)}$（错！错！错！）

**原因**：二阶求导涉及**再一次对 $x$ 求导**，因此需要**再一次除以 $\\varphi'(t)$**（而非用 $\\varphi''(t)$）。

**实战建议**：**不必死记公式**——直接对 $\\xi(t)$ 应用一阶参数方程求导法即可。

---

**例 4.5.8（摆线二阶导数）**：$\\begin{cases}x=t-\\sin t\\\\ y=1-\\cos t\\end{cases}$

**一阶**（由例 4.4.8）：$\\dfrac{dy}{dx}=\\cot\\dfrac{t}{2}$。

**二阶**（对 $\\dfrac{dy}{dx}=\\cot\\dfrac{t}{2}$ 再用参数方程求导法）：

$$\\frac{d^2 y}{dx^2}=\\frac{\\left[\\cot\\tfrac{t}{2}\\right]'}{(t-\\sin t)'}=\\frac{-\\tfrac{1}{2}\\csc^2\\tfrac{t}{2}}{1-\\cos t}.$$

由 $1-\\cos t=2\\sin^2\\dfrac{t}{2}$：

$$\\frac{d^2 y}{dx^2}=\\frac{-\\tfrac{1}{2}\\csc^2\\tfrac{t}{2}}{2\\sin^2\\tfrac{t}{2}}=-\\frac{1}{4}\\csc^4\\frac{t}{2}.$$

**$t=\\pi$ 处的值**：$\\csc\\dfrac{\\pi}{2}=1$，故

$$\\boxed{\\ \\left.\\frac{d^2 y}{dx^2}\\right|_{t=\\pi}=-\\frac{1}{4}.\\ }$$`
              },
              {
                id: 'ma-c4-s5-n12',
                type: 'concept',
                title: '高阶微分定义与 $d^n y=f^{(n)}(x)dx^n$ 公式',
                content: `**高阶微分定义**（仿高阶导数，递推构造）：

- 一阶微分：$dy=f'(x)dx$；
- 二阶微分：$d^2 y=d(dy)$；
- 三阶微分：$d^3 y=d(d^2 y)$；
- 一般地：$d^n y=d(d^{n-1}y),\\ n=2,3,\\ldots$

---

**推导 $d^n y$ 公式**：对 $dy=f'(x)dx$ 两边求微分：

$$d^2 y=d[f'(x)dx]=d[f'(x)]\\cdot dx+f'(x)\\cdot d(dx).$$

**关键观察**：

- **第一项**：$d[f'(x)]=f''(x)dx$；
- **第二项**：$dx=\\Delta x$ 与 $x$ **无关**（取为常量），故 $d(dx)=0$。

故

$$\\boxed{\\ d^2 y=f''(x)\\,dx^2\\ }\\quad(\\text{其中 }dx^2=(dx)^2).$$

---

**递推归纳**：一般 $n$ 阶微分为

$$\\boxed{\\ d^n y=f^{(n)}(x)\\,dx^n.\\ }$$

---

**与高阶导数的关联**：

$$f^{(n)}(x)=\\frac{d^n y}{dx^n}.$$

这**首次严格**解释了记号 $\\dfrac{d^n y}{dx^n}$ 的内涵——**它确实是 $n$ 阶微分与自变量微分的 $n$ 次方之比**（微商的 $n$ 阶版本）。

---

**重要前提**：$d^n y=f^{(n)}(x)dx^n$ **只对自变量 $x$ 成立**——即 $x$ 必须是**真正的自变量**（不是中间变量）。

当 $x$ 被换成中间变量 $u$ 时，这个公式**不再成立**（详见下一卡 n13）——这就是"**一阶微分形式不变性**"在高阶的**失效**。`
              },
              {
                id: 'ma-c4-s5-n13',
                type: 'concept',
                title: '高阶微分形式不变性失效 + 记号辨析（例 4.5.9）',
                content: `**一阶**：微分形式不变性成立——$dy=f'(u)du$ 不论 $u$ 是自变量还是中间变量。

**高阶**：**形式不变性失效**——$d^2 y=f''(u)du^2$ **只在 $u$ 是自变量**时成立。

---

**例 4.5.9**：求 $y=e^{\\sin x}$ 的二阶微分。

**正确做法 1（用自变量 $x$）**：由例 4.5.6，$y''=e^{\\sin x}(\\cos^2 x-\\sin x)$，故

$$d^2 y=y''\\,dx^2=e^{\\sin x}(\\cos^2 x-\\sin x)\\,dx^2.$$

**错误做法（直接套用中间变量 $u=\\sin x$）**：

$$d^2 y\\overset{?}{=}f''(u)\\,du^2=e^u\\cdot\\cos^2 x\\,dx^2=e^{\\sin x}\\cos^2 x\\,dx^2,$$

与正确答案**相差** $-e^{\\sin x}\\sin x\\,dx^2$ 这一项！

---

**正确推导（对 $dy=f'(u)du$ 两边求微分）**：

$$d^2 y=d[f'(u)]\\cdot du+f'(u)\\cdot d(du)=f''(u)\\,du^2+f'(u)\\,d^2 u.$$

关键：**$u$ 是中间变量，$d^2 u\\ne 0$**，不能舍去！

在例中：$u=\\sin x$，$d^2 u=(\\sin x)''dx^2=-\\sin x\\,dx^2$，补上此项即正确。

---

**三个易混记号的辨析**：

| 记号 | 含义 | 求值 |
|---|---|---|
| $d(x^2)$ | 对函数 $y=x^2$ 求微分 | $=2x\\,dx$ |
| $dx^2$ | 自变量微分的平方 $(dx)^2$ | 非零 |
| $d^2 x$ | 自变量的**两次微分** $d(dx)$ | $=0$（$x$ 是自变量时） |

**核心原则**：

- $x$ 是**自变量**时 $\\Rightarrow d^2 x=0$；
- $x$ 是**中间变量**时 $\\Rightarrow d^2 x$ 一般**非零**（需显式计算）。

---

**总结（考研必记）**：

> **微分形式不变性仅对一阶成立，对高阶一般失效**。

**实战建议**：求高阶微分时——

1. **首选方法**：先用 $y^{(n)}=f^{(n)}(x)$（对真正自变量 $x$），再写 $d^n y=y^{(n)}dx^n$；
2. **如需用中间变量**：务必保留 $d^k u$ 项（$k\\ge 2$），不能简单类比一阶公式。

**作业练习**：请读者自行推导 $d^3 y$ 的中间变量表达式——此时会出现 $d^3 u,\\ du\\cdot d^2 u$ 等更多"杂项"。`
              }
            ] }
      ] },
      { id: 'ma-c5', type: 'chapter', title: '第五章 微分中值定理及其应用', children: [
        { id: 'ma-c5-s1', type: 'section', title: '§1 微分中值定理', children: [
              {
                id: 'ma-c5-s1-n1',
                type: 'concept',
                title: '定义 5.1.1 函数的极值点与极值',
                content: `**历史背景**：微分思想可追溯到 Fermat 对函数**极值**的研究——早于 Newton 的运动学与 Leibniz 的曲线几何。

---

**定义 5.1.1**：设 $f(x)$ 在 $(a,b)$ 上有定义，$x_0\\in(a,b)$。若存在某邻域 $O(x_0,\\delta)\\subset(a,b)$，使

$$f(x)\\le f(x_0),\\quad x\\in O(x_0,\\delta),$$

则称 $x_0$ 为 $f(x)$ 的**极大值点**，$f(x_0)$ 为相应的**极大值**。

**极小值点 / 极小值**：将不等号反向即得。不区分时统称**极值点**与**极值**。

---

**四点本质理解**：

1. **局部性**：极值仅刻画 $x_0$ 附近的大小关系，与**全局最值**不同。
2. **大小关系可反常**：同一区间内的某个**极小值完全可能大于某些极大值**。
3. **极值点可无穷多**：如 $f(x)=\\sin\\dfrac{1}{x}$ 在 $(0,1)$ 上，点列
   $$x=\\frac{2}{(2n+1)\\pi}\\quad (n=0,1,2,\\cdots)$$
   皆为极值点（$n$ 偶数为极大、$n$ 奇数为极小）。
4. **不要求连续或可微**：Riemann 函数在 $(0,1)$ 上**每个有理点是极大值点、每个无理点是极小值点**，但它在每个有理点不连续、在每个无理点连续。`
              },
              {
                id: 'ma-c5-s1-n2',
                type: 'theorem',
                title: '定理 5.1.1 Fermat 引理',
                content: `**Fermat 引理**：若 $x_0$ 是 $f(x)$ 的极值点，且 $f(x)$ 在 $x_0$ 处**导数存在**，则

$$\\boxed{\\ f'(x_0)=0.\\ }$$

---

**证明**（不妨设 $x_0$ 为极大值点）：

在某邻域 $O(x_0,\\delta)$ 上 $f(x)\\le f(x_0)$，故
- 当 $x<x_0$：$\\dfrac{f(x)-f(x_0)}{x-x_0}\\ge 0$；
- 当 $x>x_0$：$\\dfrac{f(x)-f(x_0)}{x-x_0}\\le 0$。

由 $f$ 在 $x_0$ 可导，左右导数相等：$f'_{-}(x_0)=f'_{+}(x_0)=f'(x_0)$，而

$$f'_{-}(x_0)=\\lim_{x\\to x_0^{-}}\\frac{f(x)-f(x_0)}{x-x_0}\\ge 0,\\qquad f'_{+}(x_0)=\\lim_{x\\to x_0^{+}}\\frac{f(x)-f(x_0)}{x-x_0}\\le 0,$$

夹逼得 $f'(x_0)=0$。极小值情形同理。$\\square$

---

**几何意义**：若曲线 $y=f(x)$ 在极值点处可导，则该点切线**平行于 $x$ 轴**（水平切线）。

---

**重要警示**：$f'(x_0)=0$ 仅为**可导函数取极值的必要条件**，非充分条件。

**反例**：$f(x)=x^3$ 在 $x_0=0$ 处 $f'(0)=0$，但 $0$ 并非极值点。`
              },
              {
                id: 'ma-c5-s1-n3',
                type: 'theorem',
                title: '定理 5.1.2 Rolle 定理',
                content: `**Rolle 定理**：设 $f(x)$ 满足

1. 在**闭区间** $[a,b]$ 上连续；
2. 在**开区间** $(a,b)$ 内可导；
3. **端值相等**：$f(a)=f(b)$。

则至少存在一点 $\\xi\\in(a,b)$，使

$$\\boxed{\\ f'(\\xi)=0.\\ }$$

---

**证明**（基于 Fermat 引理 + 最值定理）：

由闭区间连续函数性质，$f$ 在 $[a,b]$ 取到最大值 $M=f(\\xi_1)$ 和最小值 $m=f(\\xi_2)$。

- **若 $M=m$**：$f\\equiv$ 常数，结论显然。
- **若 $M>m$**：$M,m$ 中至少一个异于 $f(a)=f(b)$，不妨设 $M=f(\\xi_1)>f(a)$，故 $\\xi_1\\in(a,b)$ 为极大值点。由 Fermat 引理 $f'(\\xi_1)=0$。$\\square$

---

**几何意义**：满足条件的曲线必存在**与端点连线平行（即与 $x$ 轴平行）**的水平切线。

---

**三条件缺一不可**——任一不满足都可能使结论失败：

- **不连续**：$f_1(x)=x$（$0\\le x<1$），$f_1(1)=0$——两端点值相等但 $(0,1)$ 上严格单调递增，无水平切线。
- **不可导**：$f_2(x)=\\lvert 1-2x\\rvert$（$x\\in[0,1]$）——尖点 $x=1/2$ 处不可导，虽满足其余条件但无水平切线。
- **端值不等**：$f_3(x)=x$（$x\\in[0,1]$）——$f_3(0)\\ne f_3(1)$，导数恒为 $1$，无零点。

---

**核心应用**：讨论函数及其**导函数的零点分布**（如下一条例 5.1.1 关于 Legendre 多项式）。`
              },
              {
                id: 'ma-c5-s1-n4',
                type: 'concept',
                title: '例 5.1.1 Legendre 多项式在 (−1, 1) 恰有 n 个不同根',
                content: `**问题**：定义 **$n$ 次 Legendre 多项式**

$$p_n(x)=\\frac{1}{2^n\\, n!}\\cdot\\frac{d^n}{dx^n}\\bigl(x^2-1\\bigr)^n,\\quad n=0,1,2,\\cdots$$

证明：$p_n(x)$ 在 $(-1,1)$ 内**恰有 $n$ 个不同实根**。

---

**证明思路**（反复应用 Rolle 定理 + 数学归纳）：

记 $q_{2n-m}(x)=\\dfrac{d^m}{dx^m}(x^2-1)^n$（$m=0,1,\\cdots,n-1$）。由 Leibniz 高阶求导公式，$q_{2n-m}$ 皆含 $(x^2-1)$ 因子，即 $\\pm 1$ 均为其根。

**归纳断言**：$q_{2n-m}(x)$ 在 $[-1,1]$ 上至少有 $m+2$ 个相异根

$$-1,\\ x_{m1},\\ x_{m2},\\ \\cdots,\\ x_{mm},\\ 1.$$

- **基础**（$m=0$）：$q_{2n}=(x^2-1)^n$ 恰有 $\\pm 1$ 两个相异根。
- **递推**（$m\\to m+1$）：对 $q_{2n-m}$ 的相邻两根间应用 Rolle 定理，$q_{2n-m-1}=q'_{2n-m}$ 在每个开区间至少多出一根，加上 $\\pm 1$，共至少 $m+3$ 个根。

---

**收尾**：取 $m=n-1$，则 $q_{n+1}$ 在 $[-1,1]$ 至少有 $n+1$ 个相异根；再用一次 Rolle 定理，$q_n=q'_{n+1}$ 在 $(-1,1)$ 内**至少有 $n$ 个**相异根。

$q_n$ 是 $n$ 次多项式，**至多 $n$ 个**根，故**恰好 $n$ 个**。$p_n$ 与 $q_n$ 仅差常数因子，结论成立。$\\square$

---

**意义**：Legendre 多项式是数学物理中的重要**特殊函数**（正交多项式家族的代表），在量子力学、球谐函数展开中广泛出现。`
              },
              {
                id: 'ma-c5-s1-n5',
                type: 'theorem',
                title: '定理 5.1.3 Lagrange 中值定理',
                content: `**几何动机**：若放松 Rolle 定理中 $f(a)=f(b)$ 的限制——端点不等高时，**旋转坐标系**使端点连线平行新 $x'$ 轴，则新坐标系下满足 Rolle 条件，存在点的切线平行此连线。

---

**Lagrange 中值定理**：设 $f(x)$ 在 $[a,b]$ 上连续、$(a,b)$ 内可导，则存在 $\\xi\\in(a,b)$，使

$$\\boxed{\\ f'(\\xi)=\\frac{f(b)-f(a)}{b-a}.\\ }$$

几何解读：曲线上存在一点，其切线**平行于端点连线**（即割线）。

---

**证明**（构造辅助函数化归 Rolle）：

作辅助函数

$$\\varphi(x)=f(x)-f(a)-\\frac{f(b)-f(a)}{b-a}(x-a),\\quad x\\in[a,b].$$

- $\\varphi$ 在 $[a,b]$ 连续、$(a,b)$ 内可导（与 $f$ 性质相同）；
- $\\varphi(a)=\\varphi(b)=0$（端值相等）。

由 Rolle 定理，存在 $\\xi\\in(a,b)$，$\\varphi'(\\xi)=0$，展开即得

$$f'(\\xi)=\\frac{f(b)-f(a)}{b-a}.\\quad\\square$$

---

**辅助函数的几何本质**：$\\varphi(x)$ 度量曲线 $y=f(x)$ 与端点连线在 $x$ 处的**纵向差**——相当于"曲线平移/倾斜变形使端点等高"，与"旋转坐标系"思想**异曲同工**。

---

**构造辅助函数的其他途径**（参考）：取 $\\psi(x)=$ 三角形 $(a,f(a)),(b,f(b)),(x,f(x))$ 的面积，也有 $\\psi(a)=\\psi(b)=0$，同样可推出 Lagrange 定理。

---

**意义**：Lagrange 中值定理是微分学中**最重要的定理之一**，它架起了**局部性质（导数）**与**整体性质（函数增量）**之间的桥梁，是后续单调性、凸性、Taylor 展开、不等式证明等理论的**基石**。`
              },
              {
                id: 'ma-c5-s1-n6',
                type: 'concept',
                title: 'Lagrange 公式的三种常用形式与其与微分的区别',
                content: `**Lagrange 公式**：$f'(\\xi)=\\dfrac{f(b)-f(a)}{b-a}$，其中 $\\xi\\in(a,b)$。

---

**三种常用等价变形**：

**形式 1**（**$\\xi$ 展开**）：令 $\\xi=a+\\theta(b-a)$，$\\theta\\in(0,1)$，则

$$f(b)-f(a)=f'\\bigl(a+\\theta(b-a)\\bigr)(b-a).$$

**形式 2**（**增量形式**，记 $a=x$，$b-a=\\Delta x$，$\\theta\\in(0,1)$）：

$$\\boxed{\\ f(x+\\Delta x)-f(x)=f'(x+\\theta\\Delta x)\\,\\Delta x.\\ }$$

即 $\\Delta y=f'(x+\\theta\\Delta x)\\Delta x$。

---

**与微分公式的对比**（至关重要！）：

- **Lagrange 公式**：$\\Delta y=f'(x+\\theta\\Delta x)\\Delta x$——**精确的等式**，$\\theta\\in(0,1)$ 存在但位置不定。
- **微分公式**：$\\Delta y=f'(x)\\Delta x+o(\\Delta x)$——仅在 $\\Delta x\\to 0$ 时**近似成立**。

**本质差异**：

| 对比项 | Lagrange 公式 | 微分 |
|---|---|---|
| 精确性 | **精确等式** | 近似（高阶小误差） |
| $\\Delta x$ 范围 | **任意大小** | 只在 $\\Delta x\\to 0$ 有效 |
| 导数取值点 | 某个 $\\xi=x+\\theta\\Delta x$ | 固定点 $x$ |
| 主要用途 | 推理、证明不等式 | 估算、线性近似 |

---

**本质理解**：Lagrange 公式给出了**"自变量改变 ↔ 函数改变 ↔ 导数值"三者之间的精确关系**，为后续推论（单调性、凸性、不等式）提供刚性工具。`
              },
              {
                id: 'ma-c5-s1-n7',
                type: 'theorem',
                title: '定理 5.1.4 导数恒为零 ⇔ 函数为常数',
                content: `**定理 5.1.4**：若 $f(x)$ 在 $(a,b)$ 内可导且 $f'(x)\\equiv 0$，则 $f(x)$ 在 $(a,b)$ 上**恒为常数**。

---

**证明**（Lagrange 中值定理的直接应用）：

任取 $x_1<x_2\\in(a,b)$。在 $[x_1,x_2]$ 上应用 Lagrange 中值定理：

$$f(x_2)-f(x_1)=f'(\\xi)(x_2-x_1)=0\\cdot(x_2-x_1)=0,$$

即 $f(x_1)=f(x_2)$。由 $x_1,x_2$ 任意性，$f\\equiv C$。$\\square$

**推广**：结论可推广至闭区间或半开半闭区间。

---

**重要推论**：若 $f(x),g(x)$ 在 $(a,b)$ 内可导且 $f'(x)\\equiv g'(x)$，则

$$\\boxed{\\ f(x)=g(x)+C.\\ }$$

即**导数相同的函数至多相差一个常数**——这是不定积分"原函数不唯一"的根源。

---

**典型应用**：证明恒等式。

**例**：$\\arctan\\dfrac{1+x}{1-x}-\\arctan x=\\dfrac{\\pi}{4}$（$x<1$）。

**方法**：验证左侧导数恒为零 $\\Rightarrow$ 左侧分段恒为常数；再在各段取一特殊点（如 $x=0$）确定常数值。`
              },
              {
                id: 'ma-c5-s1-n8',
                type: 'theorem',
                title: '定理 5.1.5 一阶导数与单调性',
                content: `**单调性判别定理**：设 $f(x)$ 在区间 $I$ 上可导，则

- **充要条件**：$f$ 在 $I$ 上**单调增** $\\iff$ 对任意 $x\\in I$，$f'(x)\\ge 0$。
- **充分条件**（严格版）：若对任意 $x\\in I$ 有 $f'(x)>0$，则 $f$ 在 $I$ 上**严格单调增**。

单调减情形对称成立（$f'\\le 0$ 或 $f'<0$）。

---

**证明**：

**充分性**（Lagrange）：任取 $x_1<x_2\\in I$，存在 $\\xi\\in(x_1,x_2)$，

$$f(x_2)-f(x_1)=f'(\\xi)(x_2-x_1).$$

由 $f'(\\xi)\\ge 0$（或 $>0$）且 $x_2-x_1>0$ 即得 $f(x_2)\\ge f(x_1)$（或 $>$）。

**必要性**：$f$ 单调增 $\\Rightarrow \\dfrac{f(x')-f(x)}{x'-x}\\ge 0$，令 $x'\\to x$ 得 $f'(x)\\ge 0$。$\\square$

---

**重要注意**（常见易错点）：

> $f'(x)>0$ 是严格单调增的**充分而非必要**条件！

**经典反例**：$f(x)=x^3$ 在 $\\mathbb{R}$ 上严格单调增，但 $f'(0)=0$。

---

**加强形式**（考研常考）：若将条件放宽为"**除有限个点外** $f'(x)>0$"，结论"$f$ 严格单调增"**仍然成立**。

**应用意义**：证明单调性时，**个别零点不构成障碍**——只要导数不变号且零点有限即可。`
              },
              {
                id: 'ma-c5-s1-n9',
                type: 'concept',
                title: '定义 5.1.2 下凸函数与上凸函数',
                content: `**几何直观**：回忆 $y=e^x$ 与 $y=\\ln x$ 的图像——都在 $(0,+\\infty)$ 严格递增，但

- $y=e^x$ 图像**向下凸出** $\\Rightarrow$ **下凸**（亦称"凹向上"）；
- $y=\\ln x$ 图像**向上凸出** $\\Rightarrow$ **上凸**（亦称"凹向下"）。

**更多例**：
- $y=\\sin x$：$[0,\\pi]$ 上凸、$[\\pi,2\\pi]$ 下凸；
- $y=x^3$：$[0,+\\infty)$ 下凸、$(-\\infty,0]$ 上凸；
- $y=x^{1/3}$：$[0,+\\infty)$ 上凸、$(-\\infty,0]$ 下凸。

---

**定义 5.1.2**（**下凸函数**）：设 $f(x)$ 在区间 $I$ 上定义。若对任意 $x_1,x_2\\in I$ 和任意 $\\lambda\\in(0,1)$，

$$\\boxed{\\ f\\bigl(\\lambda x_1+(1-\\lambda)x_2\\bigr)\\le \\lambda f(x_1)+(1-\\lambda)f(x_2),\\ }$$

则称 $f(x)$ 为 $I$ 上的**下凸函数**（凸函数 / convex function）。

**严格下凸**：上述不等号**严格成立**。

**上凸 / 严格上凸**：不等号**反向**即得。

---

**几何解读**（下凸）：任取曲线上两点 $(x_1,f(x_1)),(x_2,f(x_2))$，连接它们的**弦段上任一点**的纵坐标

$$\\lambda f(x_1)+(1-\\lambda)f(x_2)$$

**始终不低于**曲线上对应点 $f(\\lambda x_1+(1-\\lambda)x_2)$——即**弦在曲线上方**。上凸反之：**弦在曲线下方**。

**参数 $\\lambda$ 的含义**：$\\lambda x_1+(1-\\lambda)x_2$ 是 $x_1,x_2$ 之间的任意内点，$\\lambda\\in(0,1)$ 控制其位置。`
              },
              {
                id: 'ma-c5-s1-n10',
                type: 'theorem',
                title: '定理 5.1.6 二阶导数与凸性',
                content: `**凸性判别定理**：设 $f(x)$ 在区间 $I$ 上**二阶可导**，则

- **充要条件**：$f$ 在 $I$ 上**下凸** $\\iff$ 对任意 $x\\in I$，$f''(x)\\ge 0$。
- **充分条件**（严格版）：若对任意 $x\\in I$ 有 $f''(x)>0$，则 $f$ 在 $I$ 上**严格下凸**。

上凸情形对称成立（$f''\\le 0$ 或 $f''<0$）。

---

**充分性证明要点**（Lagrange 中值定理 + $f'$ 的单调性）：

设 $x_1<x_2\\in I$，$\\lambda\\in(0,1)$，$x_0=\\lambda x_1+(1-\\lambda)x_2$。由 $f''\\ge 0\\Rightarrow f'$ 单调增。

对 $[x_1,x_0]$ 与 $[x_0,x_2]$ 分别用 Lagrange，得 $\\eta_1\\in(x_1,x_0)$，$\\eta_2\\in(x_0,x_2)$，使

$$f(x_1)=f(x_0)+f'(\\eta_1)(x_1-x_0),\\qquad f(x_2)=f(x_0)+f'(\\eta_2)(x_2-x_0).$$

由 $f'(\\eta_1)\\le f'(x_0)\\le f'(\\eta_2)$ 及 $x_1-x_0<0,\\ x_2-x_0>0$，分别乘以 $\\lambda$ 与 $1-\\lambda$ 相加整理：

$$\\lambda f(x_1)+(1-\\lambda)f(x_2)\\ge f(x_0)=f(\\lambda x_1+(1-\\lambda)x_2).\\quad\\square$$

---

**必要性思路**：下凸 $\\Rightarrow$ 取 $\\lambda=1/2$ 得 $\\dfrac{f(x+\\Delta x)+f(x-\\Delta x)}{2}\\ge f(x)$，反复利用导出差商的单调性 $\\Rightarrow f'$ 单调增 $\\Rightarrow f''\\ge 0$。

---

**重要注意**：$f''>0$ 是**严格下凸的充分非必要**条件。加强形式：$f''>0$ 仅在**除有限点外**成立，结论仍对。

---

**速率直观应用**（$x\\to+\\infty$）：
- $y=e^x$ **严格下凸** $\\Rightarrow f'$ 也严格递增 $\\Rightarrow$ 增长**越来越快**（指数爆发）；
- $y=\\ln x$ **严格上凸** $\\Rightarrow f'$ 严格递减 $\\Rightarrow$ 增长**越来越慢**（对数缓慢）。

这就是 $e^x\\gg\\ln x$（当 $x\\to+\\infty$）的本质原因。`
              },
              {
                id: 'ma-c5-s1-n11',
                type: 'theorem',
                title: '拐点定义与定理 5.1.7',
                content: `**拐点（inflection point）定义**：若曲线 $y=f(x)$ 在点 $(x_0,f(x_0))$ **两侧凸性相反**（一侧下凸、另一侧上凸），则称该点为曲线的**拐点**。

**典型例**：
- $y=\\sin x$ 在 $(\\pi,0)$ 处（$[0,\\pi]$ 上凸，$[\\pi,2\\pi]$ 下凸）；
- $y=x^3$ 在 $(0,0)$ 处；
- $y=x^{1/3}$ 在 $(0,0)$ 处。

---

**定理 5.1.7**（**拐点判别**）：设 $f(x)$ 在 $I$ 上连续，$(x_0-\\delta,x_0+\\delta)\\subset I$。

**(1) 充分条件**：若 $f$ 在 $(x_0-\\delta,x_0)$ 与 $(x_0,x_0+\\delta)$ 内二阶可导，则
- 两侧 $f''$ **符号相反** $\\Rightarrow (x_0,f(x_0))$ **是**拐点；
- 两侧 $f''$ **符号相同** $\\Rightarrow (x_0,f(x_0))$ **不是**拐点。

**(2) 必要条件**：若 $f$ 在 $(x_0-\\delta,x_0+\\delta)$ 上**二阶可导**且 $(x_0,f(x_0))$ 为拐点，则

$$\\boxed{\\ f''(x_0)=0.\\ }$$

---

**必要条件证明**：拐点两侧凸性相反 $\\Rightarrow f'(x)$ 在 $x_0$ 处由单调增转单调减（或反之）$\\Rightarrow x_0$ 是 $f'(x)$ 的极值点；由 $f''(x_0)$ 存在及 Fermat 引理，$f''(x_0)=0$。$\\square$

---

**重要警示**（常见易错）：

> $f''(x_0)=0$ 仅为拐点的**必要非充分**条件。

**经典反例**：$y=x^4$，$f''(0)=0$，但 $(0,0)$ **不是**拐点（两侧都下凸）。

---

**实务要点**——寻找拐点时**必须同时考虑**：

1. **$f''(x)=0$ 的点**；
2. **$f''(x)$ 不存在的点**（如 $y=x^{1/3}$ 在 $x=0$ 处）。

---

**例 5.1.2**：求曲线 $y=\\sqrt[3]{x^2}(x^2-4x)$ 的拐点。

**解**：定义域 $(-\\infty,+\\infty)$。计算得

$$y''=\\frac{40}{9\\sqrt[3]{x}}\\cdot(x-1).$$

候选点：$x=1$（$y''=0$）与 $x=0$（$y''$ 不存在）。两侧 $y''$ 均变号，故 $(0,0)$ 与 $(1,-3)$ **均为**拐点。`
              },
              {
                id: 'ma-c5-s1-n12',
                type: 'theorem',
                title: '定理 5.1.8 Jensen 不等式',
                content: `**Jensen 不等式**：设 $f(x)$ 为区间 $I$ 上的**下凸函数**。对任意 $x_i\\in I$ 和满足

$$\\sum_{i=1}^{n}\\lambda_i=1,\\qquad \\lambda_i>0\\ (i=1,2,\\cdots,n)$$

的权重组，成立

$$\\boxed{\\ f\\!\\left(\\sum_{i=1}^{n}\\lambda_i x_i\\right)\\le \\sum_{i=1}^{n}\\lambda_i f(x_i).\\ }$$

**上凸函数时不等号反向**。

---

**等权重特例**（取 $\\lambda_i=1/n$）：

$$f\\!\\left(\\frac{1}{n}\\sum_{i=1}^{n}x_i\\right)\\le \\frac{1}{n}\\sum_{i=1}^{n}f(x_i).$$

即**"函数值在均值处 $\\le$ 函数值的均值"**（下凸函数）。

---

**证明要点**：由下凸函数定义（$n=2$ 情形）+ **数学归纳法**。

归纳步：设结论对 $n-1$ 成立，记 $s=\\sum_{i=1}^{n-1}\\lambda_i=1-\\lambda_n$，令 $\\tilde{x}=\\dfrac{1}{s}\\sum_{i=1}^{n-1}\\lambda_i x_i$，则

$$\\sum_{i=1}^{n}\\lambda_i x_i=s\\tilde{x}+\\lambda_n x_n,$$

再用 $n=2$ 情形与归纳假设即得。$\\square$

---

**实际意义**：Jensen 不等式是一个**强大工具**，可用于统一证明：
- **AM-GM** 均值不等式（$f(x)=-\\ln x$ 上凸）；
- **Cauchy-Schwarz** 不等式；
- **Hölder** 不等式、**Young** 不等式；
- 概率论中的 $\\mathbb{E}[f(X)]\\ge f(\\mathbb{E}[X])$（下凸）。`
              },
              {
                id: 'ma-c5-s1-n13',
                type: 'concept',
                title: '中值定理的典型应用（例 5.1.3–5.1.6）',
                content: `**应用 1：有界估计 / Lipschitz 型不等式**

**例 5.1.3**：证明 $\\lvert \\arctan a-\\arctan b\\rvert\\le \\lvert a-b\\rvert$。

**证**：由 Lagrange 中值定理，存在 $\\xi$ 介于 $a,b$ 之间，使

$$\\lvert \\arctan a-\\arctan b\\rvert=\\left\\lvert\\frac{1}{1+\\xi^2}\\right\\rvert\\cdot\\lvert a-b\\rvert\\le \\lvert a-b\\rvert.\\quad\\square$$

**套路**：$\\lvert f(b)-f(a)\\rvert\\le M\\lvert b-a\\rvert$，只需 $\\sup\\lvert f'\\rvert\\le M$。

---

**应用 2：证明恒等式**（定理 5.1.4 推论）

**例 5.1.4**：证明

$$\\arctan\\frac{1+x}{1-x}-\\arctan x=\\begin{cases}\\pi/4, & x<1,\\\\ -3\\pi/4, & x>1.\\end{cases}$$

**证**：令 $f(x)=\\arctan\\dfrac{1+x}{1-x}-\\arctan x$。计算 $f'(x)\\equiv 0$（$x\\ne 1$），故在不含 $x=1$ 的每段区间上 $f\\equiv$ 常数。

- $x<1$ 段：取 $x=0$，$f(0)=\\arctan 1-0=\\pi/4$；
- $x>1$ 段：取 $x\\to+\\infty$，$f\\to\\arctan(-1)-\\pi/2=-\\pi/4-\\pi/2=-3\\pi/4$。$\\square$

**套路**：左右差导数恒零 $+$ 分段特殊值定常数。

---

**应用 3：比较大小**（定理 5.1.5 单调性）

**例 5.1.5**：判别 $e^{\\pi}$ 与 $\\pi^e$ 的大小。

**关键变形**：$a^b>b^a\\iff \\dfrac{\\ln a}{a}>\\dfrac{\\ln b}{b}$，研究 $f(x)=\\dfrac{\\ln x}{x}$ 的单调性。

$$f'(x)=\\frac{1-\\ln x}{x^2}\\ \\begin{cases}>0, & 0<x<e,\\\\ <0, & x>e.\\end{cases}$$

$f$ 在 $[e,+\\infty)$ 严格递减，$e<\\pi \\Rightarrow \\dfrac{\\ln e}{e}>\\dfrac{\\ln \\pi}{\\pi}\\Rightarrow \\boxed{e^{\\pi}>\\pi^{e}}$。

**套路**：比较 $a^b$ 与 $b^a\\Rightarrow$ 研究 $\\ln x/x$ 的单调性。

---

**应用 4：证明不等式**（反复求导技巧）

**例 5.1.6**：证明 $\\sin x>x-\\dfrac{x^3}{6}$（$x>0$）。

**证**：令 $g(x)=\\sin x-x+\\dfrac{x^3}{6}$，逐层求导至符号可判：

- $g(0)=0$；
- $g'(x)=\\cos x-1+\\dfrac{x^2}{2}$，$g'(0)=0$；
- $g''(x)=-\\sin x+x$，$g''(0)=0$；
- $g'''(x)=-\\cos x+1\\ge 0$（$x\\in\\mathbb{R}$）$\\Rightarrow g''$ 单调增 $\\Rightarrow g''(x)>0$（$x>0$）；
- $\\Rightarrow g'$ 单调增 $\\Rightarrow g'(x)>0$（$x>0$）；
- $\\Rightarrow g$ 单调增 $\\Rightarrow g(x)>g(0)=0$（$x>0$）。$\\square$

**套路**：逐层求导直到高阶导数符号可判 + 每阶在端点处值为零 $\\Rightarrow$ 原不等式成立。

---

**方法论总结**——微分中值定理的四大应用套路：

1. **有界估计**：$\\lvert f(b)-f(a)\\rvert\\le M\\lvert b-a\\rvert$（控制 $\\sup\\lvert f'\\rvert$）。
2. **证恒等式**：左右差求导恒零 $+$ 特殊值定常数。
3. **比较大小 / 证不等式**：构造辅助函数 + 单调性 / 凸性分析 + 反复求导。
4. **零点分布**：反复用 Rolle 定理（如 Legendre 多项式根的存在性）。`
              }
        ] },
        { id: 'ma-c5-s2', type: 'section', title: '§2 L\'Hospital 法则', children: [
              {
                id: 'ma-c5-s2-n1',
                type: 'concept',
                title: '待定型极限的七种分类',
                content: `**核心困难**：分式函数的分子、分母同时趋于 $0$ 或同时趋于 $\\infty$ 时，"商的极限等于极限的商"法则**失效**——极限可能存在也可能不存在，存在时值也各异。

---

**经典引例**（多项式比值）：

$$\\lim_{x\\to\\infty}\\frac{a_n x^n+a_{n-1}x^{n-1}+\\cdots+a_0}{b_m x^m+b_{m-1}x^{m-1}+\\cdots+b_0}=\\begin{cases}a_n/b_m, & n=m,\\\\ 0, & n<m,\\\\ \\infty, & n>m.\\end{cases}$$

这就是典型的 $\\infty/\\infty$ **待定型**（indeterminate form）。

---

**待定型的七种类型**：

| 记号 | 名称 | 典型例 |
|---|---|---|
| $0/0$ | 基本型 | $\\lim_{x\\to 0}\\dfrac{\\sin x}{x}$ |
| $\\infty/\\infty$ | 基本型 | $\\lim_{x\\to\\infty}\\dfrac{\\ln x}{x}$ |
| $0\\cdot\\infty$ | 积型 | $\\lim_{x\\to 0^+}x\\ln x$ |
| $\\infty\\pm\\infty$ | 差型 | $\\lim_{x\\to 0^+}(\\cot x-1/x)$ |
| $0^0$ | 幂指型 | $\\lim_{x\\to 0^+}x^x$ |
| $1^{\\infty}$ | 幂指型 | $\\lim_{n\\to\\infty}(1+1/n)^n$ |
| $\\infty^0$ | 幂指型 | $\\lim_{x\\to+\\infty}x^{1/x}$ |

---

**战略思想**：后五种类型**均可化归**为 $0/0$ 或 $\\infty/\\infty$ 型。故**只需精通两种基本型**即可攻克所有待定型极限——这正是 L'Hospital 法则的用武之地。`
              },
              {
                id: 'ma-c5-s2-n2',
                type: 'theorem',
                title: "定理 5.2.1 L'Hospital 法则",
                content: `**L'Hospital 法则**：设 $f(x),g(x)$ 在 $(a,a+d]$ 上可导（$d$ 为某正常数），且 $g'(x)\\ne 0$。若满足下列**两组条件之一**：

**条件组 (i)** —— **$0/0$ 型**：

$$\\lim_{x\\to a^+}f(x)=\\lim_{x\\to a^+}g(x)=0;$$

**条件组 (ii)** —— **$*/\\infty$ 型**：

$$\\lim_{x\\to a^+}g(x)=\\infty\\ (\\text{对 }f(x)\\text{ 无要求});$$

**并且**

$$\\lim_{x\\to a^+}\\frac{f'(x)}{g'(x)}\\ \\text{存在（有限或 }\\infty\\text{）,}$$

则

$$\\boxed{\\ \\lim_{x\\to a^+}\\frac{f(x)}{g(x)}=\\lim_{x\\to a^+}\\frac{f'(x)}{g'(x)}.\\ }$$

---

**证明思路**（$0/0$ 型）：

补充定义 $f(a)=g(a)=0$，使 $f,g$ 在 $[a,a+d]$ 连续。对任意 $x\\in(a,a+d)$，由 **Cauchy 中值定理**，存在 $\\xi\\in(a,x)$ 使

$$\\frac{f(x)}{g(x)}=\\frac{f(x)-f(a)}{g(x)-g(a)}=\\frac{f'(\\xi)}{g'(\\xi)}.$$

$x\\to a^+\\Rightarrow\\xi\\to a^+$，两边取极限即得。$\\square$

---

**证明思路**（$*/\\infty$ 型）：关键改写

$$\\frac{f(x)}{g(x)}=\\left(1-\\frac{g(x_0)}{g(x)}\\right)\\cdot\\frac{f(x)-f(x_0)}{g(x)-g(x_0)}+\\frac{f(x_0)}{g(x)}.$$

当 $g(x)\\to\\infty$ 时，第一项的 $g(x_0)/g(x)\\to 0$、第三项 $\\to 0$、中间的差商由 Cauchy 中值定理控制到 $f'/g'$ 的极限 $A$。通过合理选取 $x_0$（利用 $\\lim f'/g'=A$ 的 $\\varepsilon$-$\\delta$ 定义）可将误差压至 $3\\varepsilon$。$\\square$

---

**本质**：L'Hospital 法则是 **Cauchy 中值定理的极限应用**——把"函数值之比"转化为"导数值之比"，从而把不定型转为可求型。`
              },
              {
                id: 'ma-c5-s2-n3',
                type: 'concept',
                title: "L'Hospital 法则的扩展：*/∞ 型与六种极限过程",
                content: `**关键扩展 1**：证明后半段**并未用到** $f(x)\\to\\infty$，只用到 $g(x)\\to\\infty$。

> **只要分母 $g(x)\\to\\infty$，不论分子 $f(x)$ 是否有界、是否有极限，L'Hospital 法则仍然有效。**

因此"$\\infty/\\infty$"的名号**实际应为 $*/\\infty$**（"$*$"代表任意变化类型）。

---

**关键扩展 2**：六种极限过程**全部适用**：

$$x\\to a^+,\\ x\\to a^-,\\ x\\to a,\\ x\\to+\\infty,\\ x\\to-\\infty,\\ x\\to\\infty.$$

证明方法完全类似（读者自证）。

---

**使用前提清单**（缺一不可）：

1. **类型匹配**：$0/0$ 型 **或** $*/\\infty$ 型；
2. **可导性**：$f,g$ 在考察点的单侧邻域内可导；
3. **$g'(x)\\ne 0$**：分母导数不为零；
4. **新极限存在**：$\\lim f'/g'$ 存在（有限或 $\\infty$）。

---

**理论意义**：L'Hospital 法则给我们提供了求**基本待定型**的一条**系统化途径**。它是考研极限运算的**核心工具**之一——与等价无穷小、Taylor 展开齐名。

**使用心态**：不要"无脑 L'Hospital"——先看类型，配合等价无穷小、三角恒等式等预处理，再决定是否求导。`
              },
              {
                id: 'ma-c5-s2-n4',
                type: 'concept',
                title: '0/0 型基本应用（例 5.2.1, 5.2.2）',
                content: `**标准格式**（L'Hospital 求解步骤）：

$$\\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}=\\cdots$$

每步验证类型、简化、直到极限可求。

---

**例 5.2.1**（自变量趋有限值）：求 $\\lim_{x\\to 0}\\dfrac{1-\\cos 2x}{x^2}$。

**解**（$0/0$ 型）：由 L'Hospital 法则

$$\\lim_{x\\to 0}\\frac{1-\\cos 2x}{x^2}=\\lim_{x\\to 0}\\frac{2\\sin 2x}{2x}=\\lim_{x\\to 0}\\frac{2\\sin x\\cos x}{x}$$

$$=2\\cdot\\lim_{x\\to 0}\\frac{\\sin x}{x}\\cdot\\lim_{x\\to 0}\\cos x=2\\cdot 1\\cdot 1=2.$$

**技巧点**：第二步后用"**等价无穷小 $\\sin x\\sim x$**"比继续 L'Hospital 更快。

---

**例 5.2.2**（自变量趋无穷大）：求 $\\lim_{x\\to+\\infty}\\dfrac{\\pi/2-\\arctan x}{\\sin(1/x)}$。

**解**（$0/0$ 型）：由 L'Hospital 法则

$$\\lim_{x\\to+\\infty}\\frac{\\pi/2-\\arctan x}{\\sin(1/x)}=\\lim_{x\\to+\\infty}\\frac{-1/(1+x^2)}{\\cos(1/x)\\cdot(-1/x^2)}$$

$$=\\lim_{x\\to+\\infty}\\frac{x^2}{(1+x^2)\\cos(1/x)}=\\frac{1}{1}\\cdot\\frac{1}{1}=1.$$

---

**要点总结**：

- **操作步骤与自变量趋向无关**：趋有限值、趋无穷大的形式**完全统一**。
- **先求导再化简**：$f'/g'$ 通常形式复杂，需用代数/三角/等价无穷小简化。
- **适时分离极限**：能用"极限的四则运算"拆分的，不必继续求导。`
              },
              {
                id: 'ma-c5-s2-n5',
                type: 'concept',
                title: "反复使用 L'Hospital 法则（例 5.2.3）",
                content: `**核心操作**：若首次 L'Hospital 后得 $f'/g'$ 仍为 $0/0$ 或 $*/\\infty$ 型，**继续对该比值使用 L'Hospital**，得 $f''/g''$，以此类推直至可求。

**关键纪律**：**每次使用前都必须重新验证类型**——若中途变成非待定型，必须停止求导。

---

**例 5.2.3**：求 $\\lim_{x\\to 0}\\dfrac{x-\\tan x}{x^3}$。

**解**（$0/0$ 型）：

**第一次 L'Hospital**：

$$\\lim_{x\\to 0}\\frac{x-\\tan x}{x^3}=\\lim_{x\\to 0}\\frac{1-\\sec^2 x}{3x^2}\\quad(\\text{仍是 }0/0\\text{ 型})$$

**第二次 L'Hospital**：

$$=\\lim_{x\\to 0}\\frac{-2\\sec^2 x\\cdot\\tan x}{6x}=\\lim_{x\\to 0}\\left[-\\frac{1}{3}\\cdot\\frac{\\sin x}{x}\\cdot\\frac{1}{\\cos^3 x}\\right]$$

$$=-\\frac{1}{3}\\cdot 1\\cdot 1=-\\frac{1}{3}.$$

---

**实务建议**：

- **能简化就简化**：第二步完成后，用 $\\sec^2 x\\tan x=\\dfrac{\\sin x}{\\cos^3 x}$ 改写，再用 $\\sin x/x\\to 1$ 避免了第三次 L'Hospital。
- **避免无谓求导**：反复 L'Hospital 会让表达式**指数级膨胀**——优先识别等价无穷小、提取常因子、用已知极限。

---

**Taylor 展开法作对照**（熟练后更高效）：

$$\\tan x=x+\\frac{x^3}{3}+o(x^3)\\Rightarrow x-\\tan x=-\\frac{x^3}{3}+o(x^3)\\Rightarrow\\text{极限}=-\\frac{1}{3}.$$

一步到位。考研推荐**两法并用**：L'Hospital 求证基础，Taylor 快算验算。`
              },
              {
                id: 'ma-c5-s2-n6',
                type: 'concept',
                title: '幂、指、对函数无穷大阶的比较（例 5.2.4）',
                content: `**例 5.2.4**（核心结论）：求 $\\lim_{x\\to+\\infty}\\dfrac{x^a}{e^{bx}}$（$a>0,\\ b>0$）。

**解**（$\\infty/\\infty$ 型）：设 $n=[a]^+$（不小于 $a$ 的最小整数），反复用 L'Hospital 法则 $n$ 次：

$$\\lim_{x\\to+\\infty}\\frac{x^a}{e^{bx}}=\\lim_{x\\to+\\infty}\\frac{a\\, x^{a-1}}{b\\, e^{bx}}=\\lim_{x\\to+\\infty}\\frac{a(a-1)x^{a-2}}{b^2 e^{bx}}=\\cdots$$

$$=\\lim_{x\\to+\\infty}\\frac{a(a-1)\\cdots(a-n+1)}{x^{n-a}\\cdot b^n\\cdot e^{bx}}=0.$$

每次求导 $x$ 的指数降 $1$，经 $n$ 次后指数变为 $a-n\\le 0$，而分母 $e^{bx}\\to\\infty$ 压制一切。$\\square$

---

**无穷大阶层级**（$x\\to+\\infty$，**极重要的结论**）：

$$\\boxed{\\ \\ln^n x\\ \\ll\\ x^{\\alpha}\\ \\ll\\ a^x\\ \\ll\\ x!\\ \\ll\\ x^x\\quad (a>1,\\ \\alpha>0,\\ n\\ge 1)\\ }$$

- **指数函数 $a^x$（$a>1$）** 比**任何次的幂函数 $x^{\\alpha}$** 都是**更高阶**的无穷大；
- **对数函数 $\\log_a x$（$a>1$）** 比**任何次的幂函数 $x^{\\alpha}$（$\\alpha>0$）** 都是**更低阶**的无穷大。

---

**口诀**：**对数 $<$ 幂 $<$ 指数 $<$ 阶乘 $<$ 函数幂**

---

**实际应用**：
- **判断极限为 $0$ 或 $\\infty$**：比较分子分母阶；
- **判断级数收敛/发散**：比较 $a_n$ 与基准阶；
- **Taylor 余项估计**：控制高阶小量。

**考研高频**：见到 $\\dfrac{x^{\\alpha}}{e^{bx}}$、$\\dfrac{\\ln x}{x}$、$\\dfrac{x^x}{e^x}$ 类极限，立即套用此阶层。`
              },
              {
                id: 'ma-c5-s2-n7',
                type: 'concept',
                title: '0·∞ 型的转化（例 5.2.5）',
                content: `**转化策略**：$0\\cdot\\infty$ 型有两种倒装方式：

$$\\underbrace{\\frac{0}{1/\\infty}}_{0/0\\text{ 型}}\\quad\\text{或}\\quad\\underbrace{\\frac{\\infty}{1/0}}_{\\infty/\\infty\\text{ 型}}$$

**实务选择**：哪种倒装后**求导更简单**，就选哪种。

---

**例 5.2.5**：求 $\\lim_{x\\to 0^+}x\\ln x$。

**解**（$0\\cdot\\infty$ 型）：将 $x$ 写作 $\\dfrac{1}{1/x}$，转为 $\\infty/\\infty$ 型：

$$\\lim_{x\\to 0^+}x\\ln x=\\lim_{x\\to 0^+}\\frac{\\ln x}{1/x}$$

由 L'Hospital 法则：

$$=\\lim_{x\\to 0^+}\\frac{1/x}{-1/x^2}=\\lim_{x\\to 0^+}(-x)=0.$$

---

**为何选"把 $\\ln x$ 放分子"**：$\\ln x$ 求导后变为 $1/x$，形式**简化**；若反过来写成 $\\dfrac{x}{1/\\ln x}$，分母求导后是 $-\\dfrac{1}{x\\ln^2 x}$，更复杂。

**经验法则**：

> **把"求导后变简单"的函数（对数、反三角）放分子；把"求导后更复杂"的函数（指数、幂）放分母。**

---

**关键结论**（常作已知）：

$$\\boxed{\\ \\lim_{x\\to 0^+}x^{\\alpha}\\ln^{\\beta} x=0\\quad (\\alpha>0,\\ \\beta\\text{ 任意})\\ }$$

这是"对数 $\\ll$ 幂"阶层在 $x\\to 0^+$ 方向的直接推论。`
              },
              {
                id: 'ma-c5-s2-n8',
                type: 'concept',
                title: '∞−∞ 型的转化（例 5.2.6）',
                content: `**转化策略**：$\\infty-\\infty$ 型先**通分**（或有理化、提取公因子）化为 $0/0$ 型，再用 L'Hospital。

---

**例 5.2.6**：求 $\\lim_{x\\to 0^+}\\left(\\cot x-\\dfrac{1}{x}\\right)$。

**解**（$\\infty-\\infty$ 型）：

**步 1 通分**：

$$\\lim_{x\\to 0^+}\\left(\\cot x-\\frac{1}{x}\\right)=\\lim_{x\\to 0^+}\\left(\\frac{\\cos x}{\\sin x}-\\frac{1}{x}\\right)=\\lim_{x\\to 0^+}\\frac{x\\cos x-\\sin x}{x\\sin x}.$$

已转为 $0/0$ 型。

**步 2 L'Hospital**：

$$=\\lim_{x\\to 0^+}\\frac{(x\\cos x-\\sin x)'}{(x\\sin x)'}=\\lim_{x\\to 0^+}\\frac{\\cos x-x\\sin x-\\cos x}{\\sin x+x\\cos x}$$

$$=\\lim_{x\\to 0^+}\\frac{-x\\sin x}{\\sin x+x\\cos x}=\\lim_{x\\to 0^+}\\frac{-x}{1+x\\cot x}=0.$$

---

**$\\infty-\\infty$ 型三大常用变形技巧**：

1. **通分**：涉及分式的差 $\\Rightarrow$ 合成单一分式；
2. **有理化**：含根式时用**分子/分母有理化**（乘共轭式）；
   - 典型：$\\lim_{x\\to+\\infty}(\\sqrt{x+1}-\\sqrt{x})=\\lim\\dfrac{1}{\\sqrt{x+1}+\\sqrt{x}}=0$。
3. **提取公因子**：若 $A-B=A(1-B/A)$ 中 $B/A\\to 1$，转为 $\\infty\\cdot 0$ 再处理。

---

**Taylor 展开对照**（高效解法）：

$$\\cot x-\\frac{1}{x}=\\frac{\\cos x}{\\sin x}-\\frac{1}{x}=\\frac{1-x^2/2+o(x^2)}{x-x^3/6+o(x^3)}-\\frac{1}{x}\\to -\\frac{x}{3}+o(x)\\to 0.$$`
              },
              {
                id: 'ma-c5-s2-n9',
                type: 'concept',
                title: '幂指型 $0^0$、$1^\\infty$、$\\infty^0$ 的统一处理（例 5.2.7–5.2.9）',
                content: `**统一技巧**（**对数恒等式**）：所有 $\\lim f(x)^{g(x)}$ 型（含 $0^0,\\ 1^{\\infty},\\ \\infty^0$）都用

$$\\boxed{\\ \\lim f(x)^{g(x)}=\\lim e^{g(x)\\ln f(x)}=e^{\\lim g(x)\\ln f(x)}.\\ }$$

内部 $g(x)\\ln f(x)$ 变为 $0\\cdot\\infty$ 型，再用例 5.2.5 方法化归。

---

**例 5.2.7**（$0^0$ 型）：求 $\\lim_{x\\to 0^+}x^x$。

**解**：

$$\\lim_{x\\to 0^+}x^x=e^{\\lim_{x\\to 0^+}x\\ln x}=e^0=1.$$

（用到例 5.2.5：$\\lim_{x\\to 0^+}x\\ln x=0$）

---

**例 5.2.8**（$0^0$ 型）：求 $\\lim_{x\\to 0^+}(\\ln(1/x))^x$。

**解**：计算内部指数

$$\\lim_{x\\to 0^+}x\\ln\\ln(1/x)=\\lim_{x\\to 0^+}\\frac{\\ln\\ln(1/x)}{1/x}$$

由 L'Hospital 法则：

$$=\\lim_{x\\to 0^+}\\frac{\\dfrac{(\\ln(1/x))'}{\\ln(1/x)}}{-1/x^2}=\\lim_{x\\to 0^+}\\frac{x}{\\ln(1/x)}=0.$$

故 $\\lim_{x\\to 0^+}(\\ln(1/x))^x=e^0=1$。

---

**例 5.2.9**（$1^{\\infty}$ 型，$x\\to(\\pi/2)^-$）：求 $\\lim_{x\\to(\\pi/2)^-}(\\sin x)^{\\tan x}$。

**解**：

$$\\lim_{x\\to(\\pi/2)^-}\\tan x\\cdot\\ln\\sin x=\\lim\\frac{\\ln\\sin x}{\\cot x}$$

$$=\\lim\\frac{\\cos x/\\sin x}{-\\csc^2 x}=\\lim(-\\sin x\\cos x)=0.$$

故原极限 $=e^0=1$。

---

**关键四步法**：

1. **取对数换底**：$f^g\\to e^{g\\ln f}$；
2. **识别 $0\\cdot\\infty$**：内部 $g\\ln f$ 为 $0\\cdot\\infty$ 型；
3. **倒装化为 $0/0$ 或 $\\infty/\\infty$**，用 L'Hospital；
4. **回带指数**：设内部极限 $=L$，则原极限 $=e^L$。

---

**$1^{\\infty}$ 型的专用公式**（更快）：

$$\\boxed{\\ \\lim f(x)^{g(x)}=e^{\\lim g(x)(f(x)-1)}\\quad (\\text{当 }f\\to 1,\\ g\\to\\infty)\\ }$$

源于 $\\ln f\\sim f-1$（$f\\to 1$）的等价无穷小替换。例如 $\\lim(1+1/x)^x=e^{\\lim x\\cdot 1/x}=e$。`
              },
              {
                id: 'ma-c5-s2-n10',
                type: 'concept',
                title: "L'Hospital 法则使用的两大注意事项（例 5.2.10, 5.2.11）",
                content: `**注意事项 1**：**必须先验证类型**——非 $0/0$ 或 $*/\\infty$ 型**严禁使用**。

---

**例 5.2.10**：求 $\\lim_{x\\to\\pi/2}\\dfrac{1+\\sin x}{1-\\cos x}$。

**正确解**：此**不是**待定型，直接代入：

$$\\lim_{x\\to\\pi/2}\\frac{1+\\sin x}{1-\\cos x}=\\frac{1+\\sin(\\pi/2)}{1-\\cos(\\pi/2)}=\\frac{2}{1}=2.$$

**错误解**（盲用 L'Hospital）：

$$\\lim_{x\\to\\pi/2}\\frac{\\cos x}{\\sin x}=\\frac{0}{1}=0.\\quad\\text{（错！）}$$

---

**教训**：

> **每次使用 L'Hospital 前必须验证类型。否则将得出荒谬结果。**

**常见陷阱**：反复 L'Hospital 过程中，某步可能从待定型"意外变"成非待定型——此时必须停止求导，直接代入或另寻他法。

---

**注意事项 2**：$\\lim\\dfrac{f'}{g'}$ **不存在时**，**不能**推出 $\\lim\\dfrac{f}{g}$ 也不存在。

---

**例 5.2.11**：求 $\\lim_{x\\to\\infty}\\dfrac{x+\\cos x}{x}$。

**正确解**（直接分离）：

$$\\lim_{x\\to\\infty}\\frac{x+\\cos x}{x}=\\lim_{x\\to\\infty}\\left(1+\\frac{\\cos x}{x}\\right)=1+0=1.$$

（用 $\\cos x$ 有界 $+$ $1/x\\to 0$）

**错误推理**：

$$\\frac{(x+\\cos x)'}{x'}=1-\\sin x\\quad(\\text{极限不存在}),$$

但这**并不意味着**原极限不存在！

---

**深层理解**——L'Hospital 法则是**单向**定理：

$$\\lim\\frac{f'}{g'}\\text{ 存在}=A\\ \\Longrightarrow\\ \\lim\\frac{f}{g}=A,$$

**反向不成立**。

$\\lim\\dfrac{f'}{g'}$ 不存在时，仅意味着"**此路不通**"，应**改用其他方法**：

- **代数分离**（如例 5.2.11）；
- **等价无穷小**替换；
- **Taylor 展开**；
- **夹逼定理**；
- **定义法**（$\\varepsilon$-$\\delta$ / $\\varepsilon$-$N$）。

---

**使用 L'Hospital 的"金科玉律"**：

1. **验类型**：每一步都确认 $0/0$ 或 $*/\\infty$；
2. **看 $g'\\ne 0$**：分母导数处处不为零；
3. **新极限存在才能回推**：若 $\\lim f'/g'$ 不存在，**停用此法**；
4. **能简化则简化**：先用已知极限、等价无穷小、三角恒等式降简，避免表达式爆炸。

**考研实战策略**：L'Hospital 与 **Taylor 展开、等价无穷小、定义法** 互为补充——熟练者往往优先 Taylor，L'Hospital 作备用 / 验证工具。`
              }
        ] },
        { id: 'ma-c5-s3', type: 'section', title: '§3 Taylor 公式和插值多项式', children: [
              {
                id: 'ma-c5-s3-n1',
                type: 'concept',
                title: 'Taylor 公式的引入动机：从一阶逼近到高阶逼近',
                content: `**研究动机**——用**多项式**近似代替复杂函数。

**多项式的三大优势**：

- **理论分析简便**：仅涉及加、减、乘三种运算；
- **数值计算高效**：已有诸多针对多项式的高效快速算法；
- **逼近精度可控**：可通过提高次数不断改善精度。

---

**一阶逼近的局限**（微分）：

若 $f(x)$ 在 $x_0$ 处**可微**，则

$$f(x)=f(x_0)+f'(x_0)(x-x_0)+o(x-x_0).$$

**精度**：用一次多项式 $f(x_0)+f'(x_0)(x-x_0)$ 近似 $f(x)$，误差阶**仅为一阶**（$o(x-x_0)$）。

---

**提升精度的思路**：用更高次数的多项式 + 更多阶导数信息 $\\Rightarrow$ **Taylor 公式**。

**核心结果预告**：若 $f(x)$ 在 $x_0$ 处 $n$ 阶可导，存在唯一 $n$ 次多项式

$$p_n(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k,$$

使 $f(x)-p_n(x)=o\\bigl((x-x_0)^n\\bigr)$——**逼近精度提升至 $n$ 阶**。

此即 **Taylor 多项式**——$x_0$ 附近**精度最高的 $n$ 次多项式逼近**。

---

**几何直观**：
- 一阶 Taylor = **切线**（刻画斜率）；
- 二阶 Taylor = **密切抛物线**（刻画曲率）；
- $n$ 阶 Taylor = 刻画**前 $n$ 阶导数的完整局部信息**。`
              },
              {
                id: 'ma-c5-s3-n2',
                type: 'theorem',
                title: '定理 5.3.1 带 Peano 余项的 Taylor 公式',
                content: `**定理 5.3.1**（**带 Peano 余项的 Taylor 公式**）：设 $f(x)$ 在 $x_0$ 处有 $n$ 阶导数，则存在 $x_0$ 的某邻域，对其中任意 $x$：

$$\\boxed{\\ f(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+r_n(x),\\ }$$

其中 **Peano 余项**

$$r_n(x)=o\\bigl((x-x_0)^n\\bigr).$$

---

**关键概念**：

- **Taylor 多项式**：$p_n(x)=\\sum_{k=0}^{n}\\dfrac{f^{(k)}(x_0)}{k!}(x-x_0)^k$——前 $n+1$ 项构成的 $n$ 次多项式；
- **Peano 余项**：$r_n(x)=o\\bigl((x-x_0)^n\\bigr)$——**定性**描述误差阶。

---

**证明思路**（反复 L'Hospital 法则）：

令 $r_n(x)=f(x)-\\sum_{k=0}^{n}\\dfrac{f^{(k)}(x_0)}{k!}(x-x_0)^k$。验证端点条件：

$$r_n(x_0)=r_n'(x_0)=r_n''(x_0)=\\cdots=r_n^{(n-1)}(x_0)=0.$$

反复应用 L'Hospital 法则 $n-1$ 次：

$$\\lim_{x\\to x_0}\\frac{r_n(x)}{(x-x_0)^n}=\\lim_{x\\to x_0}\\frac{r_n^{(n-1)}(x)}{n!(x-x_0)}=\\frac{1}{n!}\\lim_{x\\to x_0}\\left[\\frac{f^{(n-1)}(x)-f^{(n-1)}(x_0)}{x-x_0}-f^{(n)}(x_0)\\right]=0.$$

即 $r_n(x)=o\\bigl((x-x_0)^n\\bigr)$。$\\square$

---

**适用前提（弱）**：仅需 $f$ 在 $x_0$ **一点处** $n$ 阶可导——典型的**局部条件**。

**适用范围**：求极限、判断阶、等价无穷小替换（考研高频考点）。`
              },
              {
                id: 'ma-c5-s3-n3',
                type: 'theorem',
                title: '定理 5.3.2 带 Lagrange 余项的 Taylor 公式',
                content: `**定理 5.3.2**（**带 Lagrange 余项的 Taylor 公式**）：设 $f(x)$ 在 $[a,b]$ 上具有 $n$ 阶连续导数，且在 $(a,b)$ 上有 $n+1$ 阶导数。设 $x_0\\in[a,b]$ 为定点，则对任意 $x\\in[a,b]$：

$$\\boxed{\\ f(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1},\\ }$$

其中 $\\xi$ **介于 $x$ 与 $x_0$ 之间**。式中 **Lagrange 余项**

$$r_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$$

是余项的**定量**形式。

---

**证明思路**（辅助函数法 + Cauchy 中值定理）：

不妨设 $x_0<x$。构造辅助函数

$$G(t)=f(x)-\\sum_{k=0}^{n}\\frac{1}{k!}f^{(k)}(t)(x-t)^k,\\qquad H(t)=(x-t)^{n+1}.$$

求导（注意 $G$ 中每项求导后后项与前项抵消，仅剩最后一项）：

$$G'(t)=\\frac{f^{(n+1)}(t)}{n!}(x-t)^n,\\qquad H'(t)=-(n+1)(x-t)^n.$$

显然 $H'(t)\\ne 0$ 在 $(x_0,x)$ 上。由 $G(x)=H(x)=0$ 及 Cauchy 中值定理：

$$\\frac{G(x_0)}{H(x_0)}=\\frac{G(x)-G(x_0)}{H(x)-H(x_0)}=\\frac{G'(\\xi)}{H'(\\xi)}=\\frac{f^{(n+1)}(\\xi)}{(n+1)!},\\quad\\xi\\in(x_0,x).$$

整理即得 $f(x)-p_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$。$\\square$

---

**Lagrange 中值定理的推广**：当 $n=0$ 时退化为

$$f(x)=f(x_0)+f'(\\xi)(x-x_0),$$

**即 Lagrange 中值定理**。故 Taylor 公式可视为 Lagrange 中值定理的 **$n$ 阶推广**。

---

**适用前提（强）**：$f$ 在 $[a,b]$ **整个区间**上 $n$ 阶连续可导 + $(a,b)$ 上 $n+1$ 阶可导——**整体条件**。

**适用范围**：误差估计、数值逼近、证明不等式。`
              },
              {
                id: 'ma-c5-s3-n4',
                type: 'concept',
                title: 'Peano 余项 vs Lagrange 余项：强弱与选用',
                content: `**两种余项的对比**：

| 维度 | Peano 余项 | Lagrange 余项 |
|---|---|---|
| 形式 | $r_n(x)=o\\bigl((x-x_0)^n\\bigr)$ | $r_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$ |
| 性质 | **定性** | **定量** |
| 对 $f$ 要求 | 在 $x_0$ $n$ 阶可导（**弱**） | 在 $[a,b]$ $n+1$ 阶可导（**强**） |
| 有效范围 | $x_0$ **局部邻域** | **整个** $[a,b]$ |
| 典型用途 | 求极限、等价无穷小 | 误差估计、证明不等式 |

---

**强弱关系**：当 $x\\to x_0$ 时，

$$\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}=o\\bigl((x-x_0)^n\\bigr),$$

即 **Lagrange 余项蕴涵 Peano 余项**——前者**结论更强**，同时**条件也更强**。

---

**考研使用口诀**：

> **求极限用 Peano，证不等式、估误差用 Lagrange。**

- **求 $\\lim\\dfrac{f(x)-g(x)}{(x-x_0)^k}$**：Peano 足够，展开到 $k$ 阶即可。
- **证 $\\lvert f(x)-p_n(x)\\rvert\\le M$**：需 Lagrange 定量控制 $f^{(n+1)}$ 的界。
- **不等式 $f(x)\\ge p_n(x)$**：需 Lagrange 中 $f^{(n+1)}$ 符号信息。

---

**实战决策树**：

1. 题目是"**求极限**"？$\\to$ Peano。
2. 题目是"**证明某不等式 / 估计误差**"？$\\to$ Lagrange。
3. 题目要求"**展开到 $n$ 阶**"无其他要求？$\\to$ Peano（更省力）。`
              },
              {
                id: 'ma-c5-s3-n5',
                type: 'concept',
                title: 'Taylor 公式的增量形式（实用写法）',
                content: `**记号变换**：$x_0\\to x$，$x-x_0\\to\\Delta x$，$\\xi=x+\\theta\\Delta x$（$\\theta\\in(0,1)$）。

---

**Lagrange 余项形式**（最常用）：

$$\\boxed{\\ f(x+\\Delta x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x)}{k!}\\Delta x^k+\\frac{f^{(n+1)}(x+\\theta\\Delta x)}{(n+1)!}\\Delta x^{n+1},\\quad\\theta\\in(0,1).\\ }$$

---

**Peano 余项形式**：

$$\\boxed{\\ f(x+\\Delta x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x)}{k!}\\Delta x^k+o(\\Delta x^n).\\ }$$

---

**与微分公式的关系**：

- **一阶微分**：$f(x+\\Delta x)=f(x)+f'(x)\\Delta x+o(\\Delta x)$——即 $n=1$ 的 Peano 特例；
- **Taylor 公式**：将精度从一阶推广到**任意阶 $n$**，给出**完整的局部信息**。

---

**记忆要点**——Taylor 展开的每一项都刻画一个**几何量**：

$$f(x_0+\\Delta x)=f(x_0)+\\underbrace{f'(x_0)\\Delta x}_{\\text{斜率}}+\\underbrace{\\frac{f''(x_0)}{2!}\\Delta x^2}_{\\text{曲率}}+\\underbrace{\\frac{f'''(x_0)}{3!}\\Delta x^3}_{\\text{扭率}}+\\cdots$$

阶数越高，越能刻画**越高阶的几何形变**。

---

**系数规律**：第 $k$ 项系数 $=\\dfrac{f^{(k)}(x_0)}{k!}$——**"$k$ 阶导数 $\\div k$ 阶阶乘"**。

这是 Taylor 公式**最核心的记忆口诀**，所有变体（Maclaurin、Chebyshev 展开等）都由此变化而来。`
              },
              {
                id: 'ma-c5-s3-n6',
                type: 'concept',
                title: '定义 5.3.1 插值多项式',
                content: `**动机**——**Weierstrass 逼近定理**：闭区间上的连续函数可用多项式一致逼近。但实际应用中，最常见的要求是多项式与原函数在**指定点处函数值乃至若干阶导数值相同**——这就是插值问题。

---

**定义 5.3.1**（**插值多项式**）：设 $f(x)$ 在 $[a,b]$ 上的 $m+1$ 个**互异节点** $x_0,x_1,\\cdots,x_m$ 处的若干阶导数值

$$f^{(j)}(x_i),\\quad i=0,1,\\cdots,m;\\ j=0,1,\\cdots,n_i-1$$

是已知的，满足 $\\sum_{i=0}^{m}n_i=n+1$。若存在 $n$ 次多项式 $p_n(x)$ 满足**插值条件**

$$p_n^{(j)}(x_i)=f^{(j)}(x_i)\\quad(\\forall i,j),$$

则称 $p_n(x)$ 为 $f(x)$ 关于节点 $x_0,\\cdots,x_m$ 的 $n$ 次**插值多项式**；而

$$r_n(x)=f(x)-p_n(x)$$

称为**插值余项**。

---

**关键参数**：

- $m+1$：**节点个数**；
- $n_i$：在第 $i$ 个节点处已知的导数阶数（含 $f(x_i)$ 自身，对应 $j=0,\\cdots,n_i-1$）；
- $n+1=\\sum n_i$：**总约束数**（$=$ 多项式系数个数，$n$ 次多项式有 $n+1$ 个系数）；
- **基本多项式** $\\omega_{n+1}(t)=\\prod_{i=0}^{m}(t-x_i)^{n_i}$：$n+1$ 次**首一多项式**（最高项系数为 $1$）。

---

**两种极端特例**（后续重点）：

1. **$n_i\\equiv 1$（每个节点只知函数值，$m=n$）** $\\Rightarrow$ **Lagrange 插值多项式**。
2. **$n_0=n+1,\\ m=0$（只有一个节点，但知全部 $n+1$ 个导数值）** $\\Rightarrow$ **Taylor 多项式**。

---

**实用意义**：

- **实测数据**（天文观测、实验统计）往往只能获得**离散点上的函数值**——插值多项式是"重建整个函数"的**核心工具**；
- 定义 5.3.1 **不要求知道 $f(x)$ 的解析表达式**——这点在实际问题中**至关重要**。`
              },
              {
                id: 'ma-c5-s3-n7',
                type: 'theorem',
                title: '插值余项定理的预备引理（Rolle 推广）',
                content: `**引理**（**Rolle 定理的推广**）：设 $g(x)$ 在 $[a,b]$ 上连续、$(a,b)$ 上可导。若

- $g(x)=0$ 在 $[a,b]$ 内有 $l_0$ 个**不同的零点**；
- 在其中的 $l_1$ 个点上还有 $g'(x)=0$，

则 $g'(x)$ 在 $[a,b]$ 内**至少有 $l_0+l_1-1$ 个不同的零点**。

---

**证明思路**：

将 $g$ 的 $l_0$ 个零点排序：$a\\le\\alpha_1<\\alpha_2<\\cdots<\\alpha_{l_0}\\le b$。

**步 1**：在每对相邻零点 $(\\alpha_k,\\alpha_{k+1})$ 上用 **Rolle 定理**（两端 $g=0\\Rightarrow$ 中间有 $g'=0$），得到至少 $l_0-1$ 个 $g'$ 零点。

**步 2**：加上题设中已知的 $l_1$ 个 $g'$ 零点（它们是**独立信息**），总共至少

$$(l_0-1)+l_1=l_0+l_1-1\\ \\text{个不同的 }g'\\text{ 零点}.$$

$\\square$

---

**直观理解**：

- **相邻零点贡献**：$l_0$ 个零点贡献 $l_0-1$ 个"间隔 Rolle 点"；
- **导数零点贡献**：题设 $l_1$ 个 $g'=0$ 的点**直接叠加**；
- 两者**可相加**，但要注意"$-1$"是因为相邻零点间隔数比节点少 $1$。

---

**在插值理论中的作用**：此引理是**定理 5.3.3（插值余项公式）证明的核心工具**。通过对 $\\varphi(t),\\varphi'(t),\\varphi''(t),\\cdots,\\varphi^{(n+1)}(t)$ 层层应用，最终证明 $\\varphi^{(n+1)}$ 在 $[x_{\\min},x_{\\max}]$ 内**至少有 $1$ 个零点**——这就是插值余项中 $\\xi$ 的来源。`
              },
              {
                id: 'ma-c5-s3-n8',
                type: 'theorem',
                title: '定理 5.3.3 插值多项式的余项估计（统一公式）',
                content: `**定理 5.3.3**（**插值余项定理**）：设 $f(x)$ 在 $[a,b]$ 上 $n$ 阶连续可导，$(a,b)$ 上有 $n+1$ 阶导数。则对任意 $x\\in[a,b]$：

$$\\boxed{\\ r_n(x)=f(x)-p_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^{m}(x-x_i)^{n_i},\\ }$$

其中 $\\xi$ 位于 $x_{\\min}=\\min(x_0,\\cdots,x_m,x)$ 和 $x_{\\max}=\\max(x_0,\\cdots,x_m,x)$ 之间（一般**依赖于 $x$**）。

---

**证明要点**（辅助函数法 + 引理反复应用）：

**设 $x\\ne x_i$**（否则两端均为 $0$，结论平凡）。令

$$\\omega_{n+1}(t)=\\prod_{i=0}^{m}(t-x_i)^{n_i},\\qquad \\varphi(t)=f(t)-p_n(t)-\\frac{\\omega_{n+1}(t)}{\\omega_{n+1}(x)}\\bigl(f(x)-p_n(x)\\bigr).$$

**端点分析**：

- 对每个 $x_i$：$\\varphi^{(j)}(x_i)=0\\ (j=0,\\cdots,n_i-1)$；
- 此外 $\\varphi(x)=0$。

**反复用引理**：对 $j=0,1,\\cdots,n+1$，在 $[x_{\\min},x_{\\max}]$ 内 $\\varphi^{(j)}(t)$ 至少有 $\\sum_{i=0}^{j}m_i-j+1$ 个不同零点。

**取 $j=n+1$**：

$$\\sum_{i=0}^{n+1}m_i-(n+1)+1=(n+1)-n=1,$$

即 $\\exists\\ \\xi\\in(x_{\\min},x_{\\max})$，$\\varphi^{(n+1)}(\\xi)=0$。

**代入整理**：$p_n^{(n+1)}\\equiv 0$、$\\omega_{n+1}^{(n+1)}=(n+1)!$，得

$$0=f^{(n+1)}(\\xi)-\\frac{(n+1)!}{\\omega_{n+1}(x)}\\bigl(f(x)-p_n(x)\\bigr),$$

整理即目标余项式。$\\square$

---

**统一视角**（**本定理的深刻意义**）：

- **Lagrange 插值情形**（$n_i\\equiv 1$）：$\\omega_{n+1}(x)=\\prod_{i=0}^{n}(x-x_i)$；
- **Taylor 情形**（$m=0,n_0=n+1$）：$\\omega_{n+1}(x)=(x-x_0)^{n+1}$。

**定理 5.3.3 统一了 Taylor 余项与 Lagrange 插值余项**——二者皆为其**特例**。

这是插值理论中最重要的定理之一。`
              },
              {
                id: 'ma-c5-s3-n9',
                type: 'theorem',
                title: '定理 5.3.4 插值多项式的存在唯一性',
                content: `**定理 5.3.4**：满足插值条件的 $n$ 次插值多项式**存在且唯一**。

---

**唯一性证明**（代数学基本定理）：

设 $p_n(x),q_n(x)$ 皆为满足同一组插值条件的 $n$ 次多项式。考虑差函数

$$D(x)=p_n(x)-q_n(x),$$

由插值条件，每个 $x_i$ 是 $D(x)$ 的 **$n_i$ 重根**。将重根按重数计，$D(x)$ 至少有

$$\\sum_{i=0}^{m}n_i=n+1\\ \\text{个根}.$$

但 $D(x)$ 至多 $n$ 次。**由代数学基本定理**，$n$ 次多项式至多 $n$ 个根——矛盾，除非 $D\\equiv 0$。

故 $p_n\\equiv q_n$，唯一性得证。$\\square$

**存在性证明**：通过**构造法**得出（见 n10、n12 Lagrange 型和 Taylor 型的显式构造）。

---

**关键含义**：

- 所有"满足相同插值条件"的 $n$ 次多项式**都是同一个多项式**，只是**表达形式**不同；
- **Lagrange 型**、**Newton 型**、**Hermite 型** 等不同记法本质上是**同一多项式的不同表示**；
- 为数值计算提供了**形式多样性**——不同场景可选用最合适的形式（易计算、稳定性好、便于求值等）。

---

**应用意义**：这一唯一性保证了插值理论的**自洽性**——我们构造的任何插值多项式"都是那一个"，可以安心讨论其性质而不必担心歧义。`
              },
              {
                id: 'ma-c5-s3-n10',
                type: 'concept',
                title: 'Lagrange 插值多项式（n_i ≡ 1 情形）',
                content: `**情形设定**：$n_0=n_1=\\cdots=n_n=1$（$m=n$）——每个节点**只知函数值**，不知导数值。

**插值条件**：

$$p_n(x_i)=f(x_i),\\quad i=0,1,\\cdots,n.$$

共 $n+1$ 个约束，恰好对应 $n$ 次多项式的 $n+1$ 个系数。

---

**基函数法**：构造 $n$ 次多项式 $\\{q_k(x)\\}_{k=0}^{n}$ 满足

$$q_k(x_i)=\\delta_{ik}=\\begin{cases}1, & i=k,\\\\ 0, & i\\ne k.\\end{cases}$$

（$\\delta_{ik}$ 称 **Kronecker 记号**）则

$$p_n(x)=\\sum_{k=0}^{n}f(x_k)q_k(x)$$

自动满足插值条件（由定理 5.3.4，此即唯一的插值多项式）。

---

**基函数的显式构造**：

$$q_k(x)=\\frac{\\omega_{n+1}(x)}{(x-x_k)\\omega'_{n+1}(x_k)}=\\prod_{\\substack{i=0\\\\ i\\ne k}}^{n}\\frac{x-x_i}{x_k-x_i}.$$

**构造逻辑**：分子消掉 $(x-x_k)$ 因子保证 $q_k(x_k)$ 非零，分母归一化使 $q_k(x_k)=1$。

---

**Lagrange 插值多项式的完整公式**：

$$\\boxed{\\ p_n(x)=\\sum_{k=0}^{n}\\left[f(x_k)\\prod_{\\substack{i=0\\\\ i\\ne k}}^{n}\\frac{x-x_i}{x_k-x_i}\\right].\\ }$$

**插值余项**（由定理 5.3.3）：

$$r_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^{n}(x-x_i).$$

---

**几何意义**：通过 $n+1$ 个点的"唯一"$n$ 次多项式曲线：

- $n=1$：**两点一线**（线性插值）；
- $n=2$：**三点抛物线**；
- $n=3$：**四点三次曲线**；
- $\\cdots$

---

**近似计算的核心工具**：Lagrange 插值广泛用于数值积分、数值微分、样条函数等高级数值方法的**基础构件**。`
              },
              {
                id: 'ma-c5-s3-n11',
                type: 'concept',
                title: '例 5.3.1 Lagrange 插值计算 √1.15',
                content: `**例 5.3.1**：用 $f(x)=\\sqrt{x}$ 的**二次 Lagrange 插值多项式**计算 $\\sqrt{1.15}$ 的近似值。

---

**解**：取三个节点 $x_0=1,\\ x_1=1.21,\\ x_2=1.44$（易取平方根），对应函数值：

$$f(x_0)=1,\\qquad f(x_1)=1.1,\\qquad f(x_2)=1.2.$$

---

**Lagrange 插值公式展开**：

$$p_2(x)=1\\cdot\\frac{(x-1.21)(x-1.44)}{(1-1.21)(1-1.44)}+1.1\\cdot\\frac{(x-1)(x-1.44)}{(1.21-1)(1.21-1.44)}+1.2\\cdot\\frac{(x-1)(x-1.21)}{(1.44-1)(1.44-1.21)}$$

$$\\approx -0.094108789\\,x^2+0.684170901\\,x+0.409937888.$$

**代入 $x=1.15$**：

$$\\sqrt{1.15}\\approx p_2(1.15)=1.07227551.$$

---

**误差分析**：

- **精确值**：$\\sqrt{1.15}=1.07238053\\cdots$
- **绝对误差**：$\\lvert\\Delta\\rvert\\approx 1.0\\times 10^{-4}$
- **理论估计**（由余项公式）：

$$\\lvert r_2(1.15)\\rvert=\\left\\lvert\\frac{1}{16}\\cdot\\frac{(x-1)(x-1.21)(x-1.44)}{\\xi^2\\sqrt{\\xi}}\\right\\rvert\\le 2.77\\times 10^{-4},$$

与实际误差**数量级完全一致**——插值理论预言准确。

---

**求解套路**（考研常见）：

1. **选节点**：围绕目标点 $x$ 取若干节点，偏好函数值易算者（整数、简单分数等）；
2. **代公式**：Lagrange 基函数分子消 $(x-x_k)$、分母归一；
3. **展开代入**：$p_n(x)$ 展开成多项式后代入目标 $x$；
4. **误差上界**：用余项公式 $\\lvert r_n(x)\\rvert\\le\\dfrac{\\max\\lvert f^{(n+1)}\\rvert}{(n+1)!}\\prod\\lvert x-x_i\\rvert$。`
              },
              {
                id: 'ma-c5-s3-n12',
                type: 'concept',
                title: 'Taylor 公式作为插值特例 + 例 5.3.2',
                content: `**情形**：$n_0=n+1,\\ m=0$——**只有一个节点** $x_0$，但已知 $n+1$ 个导数值（$j=0,1,\\cdots,n$）。

**插值条件**：$p_n^{(j)}(x_0)=f^{(j)}(x_0)\\ (j=0,1,\\cdots,n)$。

---

**基函数构造**：取

$$q_k(x)=\\frac{(x-x_0)^k}{k!},\\quad k=0,1,\\cdots,n,$$

验证：$q_k^{(j)}(x_0)=\\delta_{jk}$（$j=k$ 时为 $1$，否则为 $0$）。由基函数法：

$$p_n(x)=\\sum_{k=0}^{n}f^{(k)}(x_0)\\cdot\\frac{(x-x_0)^k}{k!}=\\sum_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k.$$

**此即 Taylor 多项式！**

代入定理 5.3.3 的余项公式（此时 $\\omega_{n+1}(x)=(x-x_0)^{n+1}$），即恢复 **Lagrange 余项 Taylor 公式**：

$$r_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}.$$

---

**例 5.3.2**：用 $f(x)=\\sqrt{x}$ 在 $x=1$ 处的**二次 Taylor 多项式**计算 $\\sqrt{1.15}$。

**解**：计算导数

$$f'(x)=\\frac{1}{2\\sqrt{x}},\\quad f''(x)=-\\frac{1}{4x\\sqrt{x}}\\ \\Rightarrow\\ f(1)=1,\\ f'(1)=\\frac{1}{2},\\ f''(1)=-\\frac{1}{4}.$$

**二次 Taylor 多项式**：

$$\\sqrt{x}\\approx p_2(x)=1+\\frac{1}{2}(x-1)-\\frac{1}{8}(x-1)^2=-\\frac{1}{8}x^2+\\frac{3}{4}x+\\frac{3}{8}.$$

**代入 $x=1.15$**：

$$\\sqrt{1.15}\\approx p_2(1.15)=1.0721875.$$

---

**误差分析**：

- **绝对误差**：$\\approx 1.9\\times 10^{-4}$；
- **理论估计**：$\\lvert r_2(1.15)\\rvert\\le\\left\\lvert\\dfrac{1}{16}\\cdot\\dfrac{0.15^3}{\\xi^2\\sqrt{\\xi}}\\right\\rvert\\le 2.1\\times 10^{-4}$，与实际相符。

---

**深层观察**：Taylor 多项式 = 插值多项式在"**所有信息集中于单节点** $x_0$"的极限情形——**"无限次近亲繁殖"式逼近**。这揭示了 Taylor 公式与插值理论的内在统一。`
              },
              {
                id: 'ma-c5-s3-n13',
                type: 'concept',
                title: 'Lagrange 插值 vs Taylor 多项式：两种极端情形的比较',
                content: `**两种极端情形的特征对比**：

| 维度 | Lagrange 插值 | Taylor 多项式 |
|---|---|---|
| 节点分布 | $n+1$ 个**不同节点** | **单个节点** $x_0$ |
| 信息类型 | 各节点**函数值** | 单点**函数值 + 各阶导数** |
| 适用领域 | 数值计算、离散数据 | 理论分析、局部展开 |
| 精度特点 | 节点附近**均衡** | $x_0$ 附近**最精**，远离**急剧恶化** |
| 计算代价 | 一般**易实现** | 需求**高阶导数**（极难） |

---

**理论分析**——**Taylor 公式占优**：

- **局部性态刻画**：极值、凸性、拐点判别全靠导数信息；
- **求极限利器**：Taylor 展开 + Peano 余项（优于 L'Hospital）；
- **数学各分支基础**：偏微分方程、数论、最优化、机器学习损失函数分析……

---

**数值计算**——**Lagrange 插值占优**：

**Taylor 的短板**：

- 精度**局部化**：远离 $x_0$ 后精度急剧下降；
- 高阶导数"**令人望而生畏**"——统一表达式大多不可得；
- 无表达式函数（离散数据）**完全失效**。

**Lagrange 的优势**：

- 对 $x$ 位置**宽容**（节点覆盖区间即可）；
- 紧凑公式**易于计算机实现**，效率高；
- **实测数据**场景下唯一可行的工具（数值积分、数值微分全基于此）。

---

**对比实证**（用例 5.3.1/5.3.2 中的多项式算 $\\sqrt{1.5}$）：

- Lagrange 插值：$\\approx 1.224450$；
- Taylor 多项式：$\\approx 1.2421875$；
- **精确值**：$1.224744\\cdots$

**结论**：目标点 $1.5$ **远离 Taylor 中心** $x_0=1$，**Lagrange 插值远胜**。

---

**互补关系**：

> **Taylor 管理论（导数信息，局部精细），Lagrange 管实战（节点信息，整体宽容）——两者相辅相成，缺一不可。**

**后续应用**：数值积分公式（如梯形法、Simpson 公式）、数值微分、样条函数、有限元——皆以 **Lagrange 插值** 为基础；而**Taylor 公式** 则是理论分析、极值研究、变分法的灵魂。`
              }
        ] }
      ] },
      { id: 'ma-c6', type: 'chapter', title: '第六章 不定积分', children: [] },
      { id: 'ma-c7', type: 'chapter', title: '第七章 定积分', children: [] },
      { id: 'ma-c8', type: 'chapter', title: '第八章 反常积分', children: [] }
    ]
  }
];

if (typeof module !== 'undefined') module.exports = mathKnowledgeTree;
