'use strict';

/* ============================================================
   textbookData — 教材知识点框架
   字段：id, chapter, title, content (HTML + LaTeX), tags
   ============================================================ */
const textbookData = [
  {
    id: 'tb01',
    chapter: '§2.1',
    title: '函数极限的 ε-δ 定义（Cauchy 定义）',
    content: `
<strong>定义：</strong>设 \\(f\\) 在 \\(x_0\\) 的某去心邻域 \\(\\mathring{U}(x_0)\\) 内有定义。若
\\(\\forall\\,\\varepsilon>0\\)，\\(\\exists\\,\\delta>0\\)，使得当 \\(0<|x-x_0|<\\delta\\) 时恒有
\\[|f(x)-L|<\\varepsilon,\\]
则称 \\(L\\) 为 \\(f(x)\\) 当 \\(x\\to x_0\\) 时的<strong>极限</strong>，记作 \\(\\displaystyle\\lim_{x\\to x_0}f(x)=L\\)。
<br><br>
<strong>Heine 归结原则（等价刻画）：</strong>\\(\\displaystyle\\lim_{x\\to x_0}f(x)=L\\) 当且仅当对任意满足
\\(x_n\\to x_0\\)（\\(x_n\\neq x_0\\)）的数列 \\(\\{x_n\\}\\)，都有 \\(f(x_n)\\to L\\)。
<br><br>
<strong>常用极限：</strong>
\\[\\lim_{x\\to 0}\\frac{\\sin x}{x}=1,\\quad\\lim_{x\\to\\infty}\\left(1+\\frac{1}{x}\\right)^x=e.\\]`,
    tags: ['#极限', '#连续', '#数学分析']
  },
  {
    id: 'tb02',
    chapter: '§5.2',
    title: '黎曼可积的充要条件',
    content: `
<strong>定理（Riemann 可积充要条件）：</strong>有界函数 \\(f\\) 在 \\([a,b]\\) 上黎曼可积，当且仅当 \\(f\\) 的不连续点集的<strong>测度为零</strong>（即 \\(f\\) 几乎处处连续）。
<br><br>
<strong>振幅刻画：</strong>设 \\(\\omega_i=\\sup_{[x_{i-1},x_i]}f-\\inf_{[x_{i-1},x_i]}f\\)，则
\\[f\\in\\mathcal{R}[a,b]\\iff\\lim_{\\|P\\|\\to 0}\\sum_{i=1}^n\\omega_i\\,\\Delta x_i=0.\\]
<br>
<strong>重要推论：</strong>
<ul class="list-disc pl-4 mt-1 space-y-1">
  <li>单调有界函数、连续函数 \\(\\Rightarrow\\) 可积；</li>
  <li>Dirichlet 函数处处不连续 \\(\\Rightarrow\\) 不可积；</li>
  <li>黎曼函数在 \\([0,1]\\) 可积，积分值为 \\(0\\)（可数集零测）。</li>
</ul>`,
    tags: ['#积分理论', '#可积性', '#数学分析']
  },
  {
    id: 'tb03',
    chapter: '§6.1',
    title: '特征值、特征向量与特征多项式',
    content: `
<strong>定义：</strong>设 \\(A\\in M_n(\\mathbb{F})\\)，若 \\(\\exists\\,\\lambda\\in\\mathbb{F}\\) 及非零向量 \\(\\boldsymbol{\\xi}\\) 使
\\[A\\boldsymbol{\\xi}=\\lambda\\boldsymbol{\\xi},\\]
则称 \\(\\lambda\\) 为<strong>特征值</strong>，\\(\\boldsymbol{\\xi}\\) 为对应的<strong>特征向量</strong>。
<br><br>
<strong>特征多项式：</strong>\\(f(\\lambda)=\\det(\\lambda I-A)\\) 是 \\(n\\) 次多项式，其根为全部特征值。
<br><br>
<strong>重要定理：</strong>
<ul class="list-disc pl-4 mt-1 space-y-1">
  <li><strong>Hamilton–Cayley：</strong>\\(f(A)=O\\)；</li>
  <li><strong>迹与行列式：</strong>\\(\\operatorname{tr}A=\\sum\\lambda_i\\)，\\(\\det A=\\prod\\lambda_i\\)；</li>
  <li>实对称矩阵的特征值全为实数，且不同特征值对应特征向量<strong>正交</strong>。</li>
</ul>`,
    tags: ['#特征值', '#特征多项式', '#高等代数']
  }
];

/* ============================================================
   examData — 历年真题库
   字段：id, year, question (LaTeX), answer (LaTeX), tags
   ============================================================ */
const examData = [
  {
    id: 'ex01',
    year: 2022,
    question: `判断级数 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{\\sqrt{n}+(-1)^n}\\) 的敛散性，并说明理由。`,
    answer: `<strong>结论：发散。</strong><br>
将通项展开：
\\[a_n=\\frac{(-1)^n}{\\sqrt{n}+(-1)^n}
  =\\frac{(-1)^n}{\\sqrt{n}}\\cdot\\frac{1}{1+(-1)^n/\\sqrt{n}}
  =\\frac{(-1)^n}{\\sqrt{n}}-\\frac{1}{n}+O\\!\\left(n^{-3/2}\\right).\\]
\\(\\displaystyle\\sum\\frac{(-1)^n}{\\sqrt{n}}\\) 由 Leibniz 判别法<strong>收敛</strong>；
\\(\\displaystyle\\sum\\frac{1}{n}\\) 为调和级数<strong>发散</strong>；
故原级数发散。\\(\\blacksquare\\)`,
    tags: ['#级数收敛', '#数学分析']
  },
  {
    id: 'ex02',
    year: 2020,
    question: `设 \\(A=\\begin{pmatrix}1&1&0\\\\0&1&1\\\\0&0&2\\end{pmatrix}\\)，
判断 \\(A\\) 是否可对角化，若不能，写出其若尔当标准形。`,
    answer: `<strong>特征值：</strong>\\(\\lambda_1=1\\)（二重），\\(\\lambda_2=2\\)（单重）。<br>
对 \\(\\lambda_1=1\\)：
\\[A-I=\\begin{pmatrix}0&1&0\\\\0&0&1\\\\0&0&1\\end{pmatrix},
\\quad\\operatorname{rank}(A-I)=2,\\]
基础解系仅含 \\(1\\) 个向量，二重特征值几何重数为 \\(1\\)，故 <strong>\\(A\\) 不可对角化</strong>。<br>
若尔当标准形：
\\[J=\\begin{pmatrix}1&1&0\\\\0&1&0\\\\0&0&2\\end{pmatrix}.\\quad\\blacksquare\\]`,
    tags: ['#特征值', '#若尔当标准形', '#高等代数']
  },
  {
    id: 'ex03',
    year: 2021,
    question: `设 \\(f\\) 在 \\(\\mathbb{R}\\) 上连续，令
\\[F(x)=\\int_0^x(x-t)\\,f(t)\\,dt.\\]
证明 \\(F''(x)=f(x)\\)。`,
    answer: `将积分拆开：
\\[F(x)=x\\int_0^xf(t)\\,dt-\\int_0^xtf(t)\\,dt.\\]
由 Leibniz 法则对 \\(x\\) 求导：
\\[F'(x)=\\int_0^xf(t)\\,dt+x\\,f(x)-x\\,f(x)=\\int_0^xf(t)\\,dt.\\]
再求一次导得 \\(F''(x)=f(x)\\)。\\(\\blacksquare\\)`,
    tags: ['#积分理论', '#含参积分', '#数学分析']
  }
];
