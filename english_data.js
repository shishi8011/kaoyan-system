// ═══════════════════════════════════════════════════════════════════
//  【单词天天背】导入规范  ——  #今日任务 标签打标 & 清洗说明
// ═══════════════════════════════════════════════════════════════════
//
//  每次从 words.txt / sentences.txt 导入新语料时，严格执行以下两步：
//
//  第一步 — 清洗旧标签（Ctrl+H 批量替换）：
//    搜索：, "#今日任务"   →  替换为：（空）
//    搜索：→ 替换为：（空）
//    确保全库在导入新词前不存在任何 "#今日任务" 标签。
//
//  第二步 — 为本次新词打标：
//    单词条目：tags 数组加入 "#今日任务"（+ 其他语义标签）
//    句子条目：tags 数组加入 "#今日任务" + "#名篇背诵" 或 "#真题长难句"
//    示例格式：
//      {
//        "id": "v400",
//        "word": "inspire",
//        "phonetic": "/ɪnˈspaɪər/",
//        "meaning": "vt. 鼓舞，激发；给……以灵感",
//        "example": "The officer's courage inspired confidence of his soldiers.",
//        "tags": ["#核心词汇"]
//      }
//
//  ⚠️  注意事项：
//    · 单词数量可动态浮动（20~21 词均可），游戏自动适配进度条。
//    · 句子条目带 #名篇背诵 / #真题长难句，不会进入单词闯关题库，
//      但在『语料积累 → 长难句』Tab 中可浏览复习。
//    · 全库始终只有最新一批词拥有 "#今日任务" 标签。
//    · 该标签不在话题筛选栏中展示，仅供游戏系统内部使用。
//
// ═══════════════════════════════════════════════════════════════════

const vocabData = [
  {
    "id": "v01",
    "word": "ameliorate",
    "phonetic": "/əˈmiːliəreɪt/",
    "meaning": "v. 改善，改良；使（不利局面）好转",
    "example": "Governments have introduced a series of measures to ameliorate the plight of migrant workers in urban areas.",
    "tags": []
  },
  {
    "id": "v02",
    "word": "hegemony",
    "phonetic": "/hɪˈɡeməni/",
    "meaning": "n. 霸权，领导权；（尤指一国对他国的）支配影响力",
    "example": "The decline of American hegemony has prompted scholars to reconsider the architecture of the international order.",
    "tags": []
  },
  {
    "id": "v03",
    "word": "attract",
    "phonetic": "/əˈtrækt/",
    "meaning": "v. 吸引，引起（注意/兴趣）；派生词：attractive adj. 有吸引力的；近义：appeal to, draw, captivate",
    "example": "The number of men in women-dominated fields is still small and they haven't attracted the attention that has often followed women advancing into male-dominated fields, but men are moving into more and more jobs that have traditionally been held by women.",
    "tags": [
      "#词根tract",
      "#核心词汇"
    ]
  },
  {
    "id": "v04",
    "word": "contract",
    "phonetic": "/ˈkɒntrækt/",
    "meaning": "n. 合同，契约；v. 签订合同；收缩，压缩（con- 共同 + tract 拉扯）",
    "example": "",
    "tags": [
      "#词根tract",
      "#核心词汇"
    ]
  },
  {
    "id": "v05",
    "word": "distract",
    "phonetic": "/dɪˈstrækt/",
    "meaning": "v. 分散（注意力），使分心（di- 分开 + tract 拉扯）",
    "example": "Mobile phone can distract you from your study.",
    "tags": [
      "#词根tract",
      "#核心词汇"
    ]
  },
  {
    "id": "v06",
    "word": "extract",
    "phonetic": "/ˈekstrækt/",
    "meaning": "n. 节选；提取物；v. 提取；拔除（ex- 向外 + tract 拉扯）",
    "example": "",
    "tags": [
      "#词根tract",
      "#核心词汇"
    ]
  },
  {
    "id": "v07",
    "word": "retract",
    "phonetic": "/rɪˈtrækt/",
    "meaning": "v. 撤回，收回（声明/承诺）；缩回（re- 回 + tract）",
    "example": "",
    "tags": [
      "#词根tract",
      "#核心词汇"
    ]
  },
  {
    "id": "v08",
    "word": "subtract",
    "phonetic": "/səbˈtrækt/",
    "meaning": "v. 减，减去（sub- 在下 + tract 拉扯）",
    "example": "",
    "tags": [
      "#词根tract",
      "#核心词汇"
    ]
  },
  {
    "id": "v09",
    "word": "suspect",
    "phonetic": "/səˈspekt/",
    "meaning": "v. 怀疑；认为（表观点，接 that 宾语从句）；n. 嫌疑人；派生词：suspicion n. 怀疑，少量（a suspicion of）；suspicious adj. 怀疑的，可疑的；近义：doubt",
    "example": "We have to suspect that continuing economic growth promotes the development of education even when governments don't force it.",
    "tags": [
      "#词根spect",
      "#核心词汇"
    ]
  },
  {
    "id": "v10",
    "word": "aspect",
    "phonetic": "/ˈæspekt/",
    "meaning": "n. 方面，层面；（问题的）角度（词根 spect 看 → 被观察到的一面）；近义：respect, facet, dimension；常见搭配：from this aspect/respect 从这个角度看",
    "example": "The committee will examine every aspect of the proposal before reaching a final decision.",
    "tags": [
      "#词根spect",
      "#核心词汇",
      "#同义词respect"
    ]
  },
  {
    "id": "v11",
    "word": "expect",
    "phonetic": "/ɪkˈspekt/",
    "meaning": "v. 期待，期盼，预料（ex- 向外 + spect 看 → 向外望）；派生：expectation / expectancy n. 期望；life expectancy 预期寿命；unexpected adj. 意料之外的",
    "example": "The government expects the new policy to reduce the unemployment rate within two years, though critics remain unconvinced.",
    "tags": [
      "#词根spect",
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v12",
    "word": "inspect",
    "phonetic": "/ɪnˈspekt/",
    "meaning": "v. 检查，审视，监督（in- 内部 + spect 看 → 向内仔细查看）；近义：check, examine, peer into；派生：inspection n. 检查",
    "example": "Several massive leakages of customer data this year have left managers hurriedly peering into their intricate IT systems in search of potential vulnerabilities.",
    "tags": [
      "#词根spect",
      "#核心词汇"
    ]
  },
  {
    "id": "v13",
    "word": "perspective",
    "phonetic": "/pəˈspektɪv/",
    "meaning": "n. 观点，看法，视角（per- 完全 + spect 看 + -ive → 全面地看）；近义：view, viewpoint, point of view, standpoint, voice；考点：观点词汇",
    "example": "From an economic perspective, the trade deficit represents a serious long-term challenge for emerging nations.",
    "tags": [
      "#词根spect",
      "#核心词汇"
    ]
  },
  {
    "id": "v14",
    "word": "prospect",
    "phonetic": "/ˈprɒspekt/",
    "meaning": "n. 前景，前途，展望（pro- 向前 + spect 看 → 向前看）；近义：future, outlook；搭配：a promising / bright / rosy prospect 光明的前景",
    "example": "As automation advances, the prospect of large-scale technological unemployment has become an increasingly urgent concern for policymakers.",
    "tags": [
      "#词根spect",
      "#核心词汇"
    ]
  },
  {
    "id": "v15",
    "word": "respect",
    "phonetic": "/rɪˈspekt/",
    "meaning": "n. ①尊敬，敬意 ②方面（= aspect）③问候（pl. respects）；v. 尊重；派生：respectable adj. 体面的，respectful adj. 恭敬的，respective adj. 各自的，respectively adv. 分别地；短语：with respect to = concerning = about 关于；irrespective of = regardless of 不管不顾",
    "example": "With respect to the question of data privacy, different countries have adopted widely varying regulatory frameworks.",
    "tags": [
      "#词根spect",
      "#核心词汇",
      "#熟词僻义",
      "#派生词"
    ]
  },
  {
    "id": "v16",
    "word": "retrospect",
    "phonetic": "/ˈretrəspekt/",
    "meaning": "n./v. 回顾，回忆（retro- 往回 + spect 看 → 回头看）；核心搭配：in retrospect 回过头来看，事后看来",
    "example": "In retrospect, the government's decision to deregulate the financial sector appears to have contributed significantly to the subsequent crisis.",
    "tags": [
      "#词根spect",
      "#核心词汇"
    ]
  },
  {
    "id": "v17",
    "word": "spectacle",
    "phonetic": "/ˈspektək(ə)l/",
    "meaning": "n. ①壮观的景象，精彩的表演（spect 看 + -acle 名词后缀）②（pl. spectacles）眼镜（= glasses）；派生：spectacular adj. 壮观的，令人印象深刻的（近义：splendid, magnificent）",
    "example": "It is a spectacle that you should not miss; the sheer scale of the performance left the entire audience speechless.",
    "tags": [
      "#词根spect",
      "#核心词汇",
      "#一词多义"
    ]
  },
  {
    "id": "v18",
    "word": "spectator",
    "phonetic": "/spekˈteɪtə(r)/",
    "meaning": "n. 观众，旁观者（spect 看 + -ator 人 → 看的人）；动词：spectate v. 观看；近义：audience（听/观众，侧重整体）；词根关联：audi 声音 → auditorium n. 大礼堂，观众席",
    "example": "Thousands of spectators gathered in the stadium to witness what would prove to be a historic final match.",
    "tags": [
      "#词根spect",
      "#核心词汇",
      "#词根audi"
    ]
  },
  {
    "id": "v19",
    "word": "speculate",
    "phonetic": "/ˈspekjuleɪt/",
    "meaning": "v. 推测，猜测；深思；（在股市等）投机（spec 看 → 审视后加以猜测）；近义：assume, presume, conjecture；用法：sb. speculate that 宾语从句（观点词汇）",
    "example": "But the researcher speculated that an inability to consider the big picture was leading decision-makers to be biased by the daily flow of information.",
    "tags": [
      "#词根spect",
      "#核心词汇",
      "#观点词汇"
    ]
  },
  {
    "id": "v20",
    "word": "despise",
    "phonetic": "/dɪˈspaɪz/",
    "meaning": "v. 鄙视，轻视（de- 向下 + spise/spect 看 → 向下看）；态度题负面词族：despised, contemptuous, ironic, satirical, ridiculous（这类词在考研作者态度题中通常是错误选项）",
    "example": "Critics despise the notion that technological innovation alone can resolve deep-rooted social inequalities without structural policy reform.",
    "tags": [
      "#词根spect",
      "#核心词汇",
      "#作者态度",
      "#否定态度"
    ]
  },
  {
    "id": "v21",
    "word": "advise",
    "phonetic": "/ədˈvaɪz/",
    "meaning": "v. 建议，劝告（词根 vis 看 → 提供看法）；n. advice（不可数，注意拼写）；派生：advisable adj. 明智的，恰当的；用法：advise sb. to do sth.；近义：recommend, propose, suggest",
    "example": "It is advisable for students to develop a consistent reading habit well before the examination season begins.",
    "tags": [
      "#词根vid/vis",
      "#核心词汇"
    ]
  },
  {
    "id": "v22",
    "word": "evidence",
    "phonetic": "/ˈevɪdəns/",
    "meaning": "n. 证据，证明（e- 出 + vid 看 + -ence → 显现出来的东西）；v. 证明；派生：evident adj. 明显的，evidently adv. 显然地；搭配：conclusive / hard evidence 确凿证据；in evidence 明显可见",
    "example": "The prosecution presented conclusive evidence that the company had knowingly concealed safety defects from consumers for over a decade.",
    "tags": [
      "#词根vid/vis",
      "#核心词汇"
    ]
  },
  {
    "id": "v23",
    "word": "provide",
    "phonetic": "/prəˈvaɪd/",
    "meaning": "v. ①提供（pro- 前 + vid 看 → 预先看到并备好）②规定（法律文件常用）；派生：provision n. 提供；（法律）规定，条款（= regulations, rules, clauses）；providing / provided that = if（条件状语从句）；用法：provide sb. with sth. = provide sth. for sb.",
    "example": "The new legislation provides that all employers must offer paid parental leave of at least twelve weeks to both mothers and fathers.",
    "tags": [
      "#词根vid/vis",
      "#核心词汇",
      "#一词多义"
    ]
  },
  {
    "id": "v24",
    "word": "vision",
    "phonetic": "/ˈvɪʒn/",
    "meaning": "n. ①视力，视觉 ②远见，想象力（vis 看）；词根 vis 派生词族：review v./n. 复习；回顾，interview v./n. 采访；面试，devise v. 设计创造（= create, design, generate），revise v. 修改，supervise v. 监督，envisage / envision v. 预见，设想（= imagine, picture）",
    "example": "Up until a few decades ago, our visions of the future were largely positive, shaped by a widespread faith in the power of science and technology.",
    "tags": [
      "#词根vid/vis",
      "#核心词汇",
      "#真题例句",
      "#派生词"
    ]
  },
  {
    "id": "v25",
    "word": "devise",
    "phonetic": "/dɪˈvaɪz/",
    "meaning": "v. 创造，设计，构想（词根 vis 看 → 构思后设计）；近义：create, design, generate；派生：device n. 装置，设备（注意区别：equipment n. 装备，不可数名词）",
    "example": "Scientists have devised a new water-saving device that could dramatically reduce household consumption in arid regions.",
    "tags": [
      "#词根vid/vis",
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v26",
    "word": "revise",
    "phonetic": "/rɪˈvaɪz/",
    "meaning": "v. 修改，修订；（英式英语）复习（re- 再 + vis 看 → 再次审视）；派生：revision n. 修改，修订版；近义：amend, update, edit",
    "example": "The author was compelled to revise her thesis after peer reviewers identified several methodological flaws in the original draft.",
    "tags": [
      "#词根vid/vis",
      "#核心词汇"
    ]
  },
  {
    "id": "v27",
    "word": "supervise",
    "phonetic": "/ˈsuːpəvaɪz/",
    "meaning": "v. 监督，监管（super- 在上 + vis 看 → 从上面俯视）；派生：supervision n. 监督；supervisor n. 监督者，（研究生）导师；近义：oversee, manage, administer",
    "example": "Researchers argue that algorithms used in recruitment must be closely supervised to prevent systematic bias against minority applicants.",
    "tags": [
      "#词根vid/vis",
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v28",
    "word": "envisage",
    "phonetic": "/ɪnˈvɪzɪdʒ/",
    "meaning": "v. 预见，设想，展望（en- + vis 看 + -age）；近义：envision /ɪnˈvɪʒn/（美式，可互换），imagine, picture, foresee；常用于对未来的主观展望",
    "example": "Few economists envisaged that the 2008 financial crisis would trigger a decade-long period of sluggish growth across developed economies.",
    "tags": [
      "#词根vid/vis",
      "#核心词汇"
    ]
  },
  {
    "id": "v29",
    "word": "envy",
    "phonetic": "/ˈenvi/",
    "meaning": "n. 嫉妒，羡慕（in- + vid 看 → 嫉妒地盯着别人）；v. 羡慕，嫉妒；派生：enviable adj. 令人羡慕的；近义：jealousy n. 嫉妒；jealous adj. 嫉妒的",
    "example": "The rapid economic rise of East Asian nations was regarded with a mixture of envy and admiration by their Western counterparts.",
    "tags": [
      "#词根vid/vis",
      "#核心词汇"
    ]
  },
  {
    "id": "v30",
    "word": "grade",
    "phonetic": "/ɡreɪd/",
    "meaning": "n. 年级；分数，成绩；等级（词根 grad 走 → 一级一级往上走）；v. 分类；批改，给分；派生：upgrade v. 升级，提升；downgrade v. 降级，贬低；degrade v. 使恶化（degradation n. 恶化，退化）",
    "example": "The government proposed upgrading the nation's rail infrastructure to stimulate economic growth and degrade carbon emissions from the transport sector.",
    "tags": [
      "#词根grad/gress",
      "#核心词汇",
      "#派生词",
      "#一词多义"
    ]
  },
  {
    "id": "v31",
    "word": "graduate",
    "phonetic": "/ˈɡrædʒuət/",
    "meaning": "v. 毕业；n. 毕业生（grad 走 → 走完学业阶段）；派生：undergraduate n. 本科生；postgraduate n. 研究生；学历词汇：freshmen 大一，sophomore 大二，junior 大三，senior 大四",
    "example": "Many postgraduates find that the research skills they developed during their degree are highly valued by employers outside academia.",
    "tags": [
      "#词根grad/gress",
      "#核心词汇"
    ]
  },
  {
    "id": "v32",
    "word": "progress",
    "phonetic": "/ˈprəʊɡres/",
    "meaning": "n. 进步，进展（pro- 向前 + gress 走）；v. 进步，前进；搭配：make great/steady progress 取得显著/稳步进展；in progress 正在进行中",
    "example": "The committee acknowledged that while significant progress had been made in reducing carbon emissions, the pace of change remained insufficient.",
    "tags": [
      "#词根grad/gress",
      "#核心词汇"
    ]
  },
  {
    "id": "v33",
    "word": "regret",
    "phonetic": "/rɪˈɡret/",
    "meaning": "v./n. 遗憾，后悔（re- 再 + gret 哭 → 哭着追忆）；用法辨析：regret doing sth. 后悔做了；regret to do sth. 遗憾地（告知）；固定句式：I regret to inform you that...（正式信函常用）",
    "example": "I regret to inform you that your application has been unsuccessful on this occasion; however, we encourage you to reapply next year.",
    "tags": [
      "#词根grad/gress",
      "#核心词汇"
    ]
  },
  {
    "id": "v34",
    "word": "aggressive",
    "phonetic": "/əˈɡresɪv/",
    "meaning": "adj. 侵略的，好斗的；激进的，强势的（ag- + gress 走 + -ive → 主动走上前去攻击）；派生：aggression n. 侵略，攻击性；近义：assertive 自信强势的，militant 好战的",
    "example": "Physicians too often offer aggressive treatment far beyond what is scientifically justified, frustrated by their inability to cure the disease.",
    "tags": [
      "#词根grad/gress",
      "#核心词汇",
      "#真题例句",
      "#作者态度"
    ]
  },
  {
    "id": "v35",
    "word": "aggregate",
    "phonetic": "/ˈæɡrɪɡət/",
    "meaning": "v. 汇总，总计（ag- + greg 群体 + -ate → 聚合在一起）；adj. 总计的；n. 总数，合计；派生：aggregation n. 聚集，汇总；注意区别：exaggerate v. 夸大，夸张",
    "example": "The aggregate impact of small individual lifestyle changes can produce a measurable reduction in a nation's total carbon footprint.",
    "tags": [
      "#词根grad/gress",
      "#核心词汇",
      "#辨析exaggerate"
    ]
  },
  {
    "id": "v36",
    "word": "proceed",
    "phonetic": "/prəˈsiːd/",
    "meaning": "v. 前进，行进；继续（pro- 向前 + ceed 走）；用法：proceed to do sth. 接着做某事；派生：procedure n. 程序，步骤；proceedings n. 诉讼程序，会议记录",
    "example": "After a brief recess, the judge instructed both parties to proceed with the presentation of their evidence.",
    "tags": [
      "#词根ceed/cess",
      "#核心词汇"
    ]
  },
  {
    "id": "v37",
    "word": "process",
    "phonetic": "/ˈprəʊses/",
    "meaning": "n. 过程，进程；程序（pro- 向前 + cess 走）；v. 加工，处理；（官方）审核；搭配：in the process of 在…过程中",
    "example": "Passengers must pay $85 every five years to process their background checks, a fee that critics argue disproportionately burdens low-income travelers.",
    "tags": [
      "#词根ceed/cess",
      "#核心词汇",
      "#真题例句"
    ]
  },
  {
    "id": "v38",
    "word": "precede",
    "phonetic": "/prɪˈsiːd/",
    "meaning": "v. 在…之前，先于（pre- 前 + cede 走 → 走在前面）；派生：preceding adj. 前面的，前述的；precedent n. 先例；搭配：set a precedent for 为…开创先例；no precedent in history 史无前例",
    "example": "The sweeping economic reforms that preceded the country's accession to the trade bloc helped raise living standards significantly.",
    "tags": [
      "#词根ceed/cess",
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v39",
    "word": "recession",
    "phonetic": "/rɪˈseʃ(ə)n/",
    "meaning": "n. 衰退；经济衰退（re- 向后 + cess 走 → 往后退）；近义：economic decline / slowdown / depression；考研高频词",
    "example": "Not long ago, with the country entering a recession and Japan at its pre-bubble peak, the U.S. workforce was derided as poorly educated.",
    "tags": [
      "#词根ceed/cess",
      "#核心词汇",
      "#真题例句"
    ]
  },
  {
    "id": "v40",
    "word": "succeed",
    "phonetic": "/səkˈsiːd/",
    "meaning": "v. ①成功（suc- 向上 + ceed 走 → 向上走）②继承，接替（某人的职位）；派生：success n. 成功；successive adj. 相继的，连续的；succession n. 继承；successor n. 继承人；近义（继承）：inherit, take over",
    "example": "She succeeded in publishing her research in one of the world's most prestigious scientific journals after years of painstaking revision.",
    "tags": [
      "#词根ceed/cess",
      "#核心词汇",
      "#一词多义",
      "#派生词"
    ]
  },
  {
    "id": "v41",
    "word": "exceed",
    "phonetic": "/ɪkˈsiːd/",
    "meaning": "v. 超出，超过；超越（ex- 向外 + ceed 走 → 走出去）；派生：exceedingly adv. = very 非常；excessive adj. 过分的，过多的；近义：surpass, transcend, go beyond",
    "example": "The actual cost of the project exceeded the original budget by a considerable margin, prompting an official investigation into financial mismanagement.",
    "tags": [
      "#词根ceed/cess",
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v42",
    "word": "access",
    "phonetic": "/ˈækses/",
    "meaning": "n. 路，通道；使用权，进入权（ac- + cess 走 → 走进去的路）；v. 获取，访问；派生：accessible adj. 可接近的，可获得的（≈ available）；搭配：have access to sth. 有权接触/使用某物",
    "example": "The report argued that universal access to high-speed internet is now as essential a public good as electricity or clean water.",
    "tags": [
      "#词根ceed/cess",
      "#核心词汇"
    ]
  },
  {
    "id": "v43",
    "word": "addict",
    "phonetic": "/ˈædɪkt/",
    "meaning": "v. 使上瘾（ad- + dict 说 → 反复宣告 → 沉溺其中）；n. 有瘾的人；派生：addiction n. 成瘾；addicted adj.；短语：be addicted to = be obsessed with / be fascinated with；注意区别：in addition = besides 此外",
    "example": "Studies indicate that adolescents who are addicted to social media platforms display measurably higher levels of anxiety and social isolation.",
    "tags": [
      "#词根dict",
      "#核心词汇",
      "#辨析in_addition"
    ]
  },
  {
    "id": "v44",
    "word": "indict",
    "phonetic": "/ɪnˈdaɪt/",
    "meaning": "v. 指控，起诉；谴责（in- + dict 说 → 公开宣告指控）；派生：indictment n. 指控，起诉书（= accusation）；近义：charge, accuse, prosecute",
    "example": "The former executive was indicted on charges of fraud and insider trading following a two-year federal investigation.",
    "tags": [
      "#词根dict",
      "#核心词汇"
    ]
  },
  {
    "id": "v45",
    "word": "indicate",
    "phonetic": "/ˈɪndɪkeɪt/",
    "meaning": "v. 暗示，表明；指出（in- 内 + dic + -ate → 向内指）；考点：结论/观点词汇——研究/数据表明：A indicates/suggests that...；派生：indication n. 迹象，征兆；indicator n. 指标",
    "example": "If experiments are planned and carried out as faithfully as the reports in science journals indicate, it is perfectly logical for management to expect measurable results.",
    "tags": [
      "#词根dict",
      "#核心词汇",
      "#真题例句",
      "#观点词汇"
    ]
  },
  {
    "id": "v46",
    "word": "predict",
    "phonetic": "/prɪˈdɪkt/",
    "meaning": "v. 预测，预言（pre- 前 + dict 说 → 提前说出来）；派生：prediction n. 预测；predictable adj. 可预测的；unpredictable adj. 不可预测的；近义：forecast, foresee, anticipate",
    "example": "Economists failed to predict the severity of the financial crisis, highlighting the inherent limitations of quantitative forecasting models.",
    "tags": [
      "#词根dict",
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v47",
    "word": "verdict",
    "phonetic": "/ˈvɜːdɪkt/",
    "meaning": "n. 裁决，判决（ver- 真实 + dict 说 → 说出真相）；近义：ruling, judgement, decision；词根 ver-：verify v. 核查，证实（verification n. 确认）；构词后缀：-ify（classify, purify），-ize（realize, organize），-en（deepen, broaden）",
    "example": "The jury's verdict was greeted with relief by the victim's family, who had waited nearly three years for justice to be served.",
    "tags": [
      "#词根dict",
      "#核心词汇"
    ]
  },
  {
    "id": "v48",
    "word": "dedicate",
    "phonetic": "/ˈdedɪkeɪt/",
    "meaning": "v. 奉献，致力于；题词（de- + dic + -ate → 公开宣告贡献）；用法：dedicate oneself to sth. = devote oneself to sth. 献身于；派生：dedicated adj. 专注的，献身的；dedication n. 奉献，题词",
    "example": "She has dedicated her career to investigating the long-term neurological effects of chronic sleep deprivation in adolescents.",
    "tags": [
      "#词根dict",
      "#核心词汇"
    ]
  },
  {
    "id": "v49",
    "word": "contradict",
    "phonetic": "/ˌkɒntrəˈdɪkt/",
    "meaning": "v. 反驳，与…矛盾（contra- 相反 + dict 说 → 说相反的话）；派生：contradiction n. 矛盾；contradictory adj. 相反的，矛盾的；近义：refute, negate, deny",
    "example": "The new experimental data directly contradicted the widely accepted theory, prompting a fundamental re-evaluation of the entire field.",
    "tags": [
      "#词根dict",
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v50",
    "word": "simulate",
    "phonetic": "/ˈsɪmjuleɪt/",
    "meaning": "v. 模仿，模拟（simul 相似 + -ate → 做出相似的样子）；派生：simulation n. 模拟；simulator n. 模拟器；近义：mimic, imitate, replicate",
    "example": "Scientists used computer models to simulate the long-term effects of rising sea levels on coastal populations under different emission scenarios.",
    "tags": [
      "#词根simil/semble",
      "#核心词汇"
    ]
  },
  {
    "id": "v51",
    "word": "assimilate",
    "phonetic": "/əˈsɪməleɪt/",
    "meaning": "v. 同化，融入（as- + simil 相似 + -ate → 使变得与周围相似）；v. 吸收，消化（知识/文化）；考研真题词汇",
    "example": "We are obliged to them because some of these languages have since vanished, as the peoples who spoke them died out or became assimilated and lost their native languages.",
    "tags": [
      "#词根simil/semble",
      "#核心词汇",
      "#真题例句"
    ]
  },
  {
    "id": "v52",
    "word": "assemble",
    "phonetic": "/əˈsemb(ə)l/",
    "meaning": "v. 集合，聚集；组装，拼装（as- + semble 相似 → 将同类的东西聚在一起）；派生：assembly n. 集会；（立法）议会，大会；近义：gather, convene, congregate",
    "example": "The world's leading climate scientists assembled in Geneva to review the latest data and issue a joint statement on the urgency of action.",
    "tags": [
      "#词根simil/semble",
      "#核心词汇"
    ]
  },
  {
    "id": "v53",
    "word": "resemble",
    "phonetic": "/rɪˈzemb(ə)l/",
    "meaning": "v. 像，与…相似（re- 再 + semble 相似 → 再次呈现相似）；派生：resemblance n. 相似，相像；近义：be similar to, be analogous to, bear a resemblance to",
    "example": "The proposal closely resembles a scheme introduced in Scandinavia in the 1990s that was subsequently abandoned due to its unintended economic consequences.",
    "tags": [
      "#词根simil/semble",
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v54",
    "word": "dialogue",
    "phonetic": "/ˈdaɪəlɒɡ/",
    "meaning": "n. 对话，交谈（dia- 二/穿越 + log 说 → 两人之间说话）；近义：conversation, discussion；派生：monologue n. 独白（mono- 一）；数量前缀：semi-/hemi- 半，uni-/mono- 一，bi-/di- 二",
    "example": "Constructive dialogue between government and civil society is essential for developing policies that genuinely reflect the needs of the population.",
    "tags": [
      "#词根log/loqu",
      "#核心词汇",
      "#前缀数量"
    ]
  },
  {
    "id": "v55",
    "word": "analogy",
    "phonetic": "/əˈnælədʒi/",
    "meaning": "n. 相似，类比（ana- 按照 + log 说 → 按照相似的逻辑说）；派生：analogous adj. 相似的；analog n. 相似物；搭配：draw an analogy between A and B 在A与B之间作类比",
    "example": "The author draws a compelling analogy between the spread of misinformation online and the historical dynamics of rumour in pre-modern societies.",
    "tags": [
      "#词根log/loqu",
      "#核心词汇"
    ]
  },
  {
    "id": "v56",
    "word": "logic",
    "phonetic": "/ˈlɒdʒɪk/",
    "meaning": "n. 逻辑，逻辑学（log 说 + -ic）；派生：logical adj. 合乎逻辑的；学科词缀 -ology：biology, ecology, psychology, geology；-ics：economics, politics, mathematics, mechanics",
    "example": "There is a compelling logic to the argument that investing in early childhood education yields better long-term returns than later-stage interventions.",
    "tags": [
      "#词根log/loqu",
      "#核心词汇"
    ]
  },
  {
    "id": "v57",
    "word": "eloquent",
    "phonetic": "/ˈeləkwənt/",
    "meaning": "adj. 雄辩的，有说服力的；（文字/眼神等）意味深长的（e- 出 + loqu 说 + -ent → 能说出来）；派生：eloquence n. 口才，雄辩；近义：articulate adj. 能清晰表达的，persuasive adj. 有说服力的",
    "example": "The senator delivered an eloquent speech that moved many of her colleagues to reconsider their opposition to the proposed social reform.",
    "tags": [
      "#词根log/loqu",
      "#核心词汇"
    ]
  },
  {
    "id": "v58",
    "word": "apology",
    "phonetic": "/əˈpɒlədʒi/",
    "meaning": "n. 道歉，致歉（apo- 远离 + log 说 → 为自己辩解）；v. apologize；用法：make an apology to sb. for sth. / apologize to sb. for sth.；近义：regret n. 遗憾（更正式）",
    "example": "The corporation issued a formal apology to consumers after an internal investigation confirmed that safety warnings had been deliberately suppressed.",
    "tags": [
      "#词根log/loqu",
      "#核心词汇"
    ]
  },
  {
    "id": "v59",
    "word": "assume",
    "phonetic": "/əˈsjuːm/",
    "meaning": "v. ①假设，认为（观点词汇，接 that 宾语从句）②承担（as- + sume 拿 → 拿过来）；派生：assumption n. 假设；搭配：assume responsibility 承担责任；近义（认为）：suppose, presume；近义（承担）：take on, shoulder, undertake",
    "example": "The advertisers assume that people are happy to be tracked and sent behavioural ads, yet research consistently shows the opposite.",
    "tags": [
      "#词根sume",
      "#核心词汇",
      "#真题例句",
      "#观点词汇"
    ]
  },
  {
    "id": "v60",
    "word": "presume",
    "phonetic": "/prɪˈzjuːm/",
    "meaning": "v. 假设，推定（pre- 提前 + sume 拿 → 提前拿定主意）；派生：presumption n. 假设，推定；presumptively adv. 推测地（≈ probably, possibly）；辨析：presume 比 assume 更有依据，更有把握",
    "example": "The report presumes that current demographic trends will continue unchanged, an assumption that critics argue is far too optimistic.",
    "tags": [
      "#词根sume",
      "#核心词汇"
    ]
  },
  {
    "id": "v61",
    "word": "consume",
    "phonetic": "/kənˈsjuːm/",
    "meaning": "v. 消耗，花费；消费，吃喝（con- 全部 + sume 拿 → 全部拿走）；派生：consumer n. 消费者（= customer, buyer, client, subscriber）；consumption n. 消耗量，消费",
    "example": "Households in developed economies consume far more energy per capita than their counterparts in the developing world, yet bear less of the environmental cost.",
    "tags": [
      "#词根sume",
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v62",
    "word": "resume",
    "phonetic": "/rɪˈzjuːm/",
    "meaning": "v. 重新开始，继续（re- 再 + sume 拿 → 再次拿起）；n. /ˈrezjumeɪ/ 简历（= CV / curriculum vitae）；近义（v.）：restart, continue, proceed with",
    "example": "Following a brief adjournment, the hearing resumed at two o'clock, with the defence counsel presenting new forensic evidence.",
    "tags": [
      "#词根sume",
      "#核心词汇",
      "#一词多义"
    ]
  },
  {
    "id": "v63",
    "word": "comprehend",
    "phonetic": "/ˌkɒmprɪˈhend/",
    "meaning": "v. 理解，领会；全面把握（com- 全部 + prehend 抓 → 全部抓住）；派生：comprehensive adj. 综合的，全面的；comprehension n. 理解（力）；近义：understand, grasp, fathom",
    "example": "It is difficult to fully comprehend the magnitude of the humanitarian crisis without first-hand experience of conditions on the ground.",
    "tags": [
      "#词根prehend/pris",
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v64",
    "word": "comprise",
    "phonetic": "/kəmˈpraɪz/",
    "meaning": "v. 组成，构成；包含（com- + prise 抓 → 抓在一起）；重要辨析：总体 comprise / contain / include 部分；总体 be comprised of 部分；总体 consist of 部分；部分 constitute 总体",
    "example": "The research team comprises specialists from twelve countries, whose diverse methodological backgrounds have proved essential to the project's success.",
    "tags": [
      "#词根prehend/pris",
      "#核心词汇",
      "#辨析consist_of"
    ]
  },
  {
    "id": "v65",
    "word": "enterprise",
    "phonetic": "/ˈentəpraɪz/",
    "meaning": "n. ①企业，公司（= company, corporation, firm）②事业；重大项目③事业心，进取心（entre- 进入 + prise 抓 → 进入并抓住机会）；派生：entrepreneur n. 企业家；近义：initiative, drive, ambition",
    "example": "Since the days of Aristotle, a search for universal principles has characterized the scientific enterprise.",
    "tags": [
      "#词根prehend/pris",
      "#核心词汇",
      "#真题例句",
      "#一词多义"
    ]
  },
  {
    "id": "v66",
    "word": "apprehend",
    "phonetic": "/ˌæprɪˈhend/",
    "meaning": "v. ①逮捕，拘押（= arrest, detain）②理解，领会（= comprehend, grasp）（ap- + prehend 抓 → 抓住）；派生：apprehensive adj. 担忧的，忧虑的（= worried, anxious）；apprehension n. 逮捕；担忧",
    "example": "The suspect was apprehended by officers near the airport just hours before he was due to board a flight overseas.",
    "tags": [
      "#词根prehend/pris",
      "#核心词汇",
      "#一词多义"
    ]
  },
  {
    "id": "v67",
    "word": "fame",
    "phonetic": "/feɪm/",
    "meaning": "n. 名声，声望（fam- 说 → 被人们广泛谈论）；派生：famous adj. 著名的；搭配：be famous/noted/renowned/celebrated for 以…著名；近义：reputation, renown, prestige, celebrity, distinction",
    "example": "The runaway success of The Pickwick Papers secured Dickens's fame and established him as the foremost novelist of his generation.",
    "tags": [
      "#词根fam/fab/fess",
      "#核心词汇",
      "#真题例句"
    ]
  },
  {
    "id": "v68",
    "word": "fable",
    "phonetic": "/ˈfeɪb(ə)l/",
    "meaning": "n. 寓言；神话，虚构的故事（fab- 说 → 口耳相传的故事）；Aesop's Fables 伊索寓言；派生：fabulous adj. 极好的；传说中的（= splendid, magnificent）；近义：parable, allegory",
    "example": "The manager used a fable about an ant and a grasshopper to illustrate why investing in skills training matters more than short-term savings.",
    "tags": [
      "#词根fam/fab/fess",
      "#核心词汇"
    ]
  },
  {
    "id": "v69",
    "word": "fabulous",
    "phonetic": "/ˈfæbjələs/",
    "meaning": "adj. ①极好的，极棒的（= splendid, magnificent, outstanding）②传说中的，神话中的（fab- 说 → 被传说的）；派生：fabulously adv.；辨析：fabulous 兼有\"极好\"与\"传说\"两义，考研重点在引申义①",
    "example": "The city's fabulous wealth during the Renaissance attracted artists and scholars from across Europe, turning Florence into a centre of cultural innovation.",
    "tags": [
      "#词根fam/fab/fess",
      "#核心词汇",
      "#一词多义"
    ]
  },
  {
    "id": "v70",
    "word": "profess",
    "phonetic": "/prəˈfes/",
    "meaning": "v. 公开宣称，声称（pro- 向前 + fess 说 → 公开说出）；派生：profession n. 职业（= job, career, vocation, calling）；professional adj. 职业的；n. 专业人士；amateur n./adj. 业余的",
    "example": "Many politicians profess a deep commitment to environmental protection while simultaneously supporting policies that undermine it.",
    "tags": [
      "#词根fam/fab/fess",
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v71",
    "word": "confess",
    "phonetic": "/kənˈfes/",
    "meaning": "v. 坦白，承认；告解（con- 全部 + fess 说 → 全部说出来）；派生：confession n. 坦白，供认；搭配：confess to sth./doing sth. 承认某事；近义：admit, acknowledge, own up",
    "example": "The executive confessed to having known about the safety defects for months before the product recalls were announced, a revelation that shocked the board.",
    "tags": [
      "#词根fam/fab/fess",
      "#核心词汇"
    ]
  },
  {
    "id": "v72",
    "word": "chronic",
    "phonetic": "/ˈkrɒnɪk/",
    "meaning": "adj. ①长期的，慢性的（= long-term, persistent, prolonged）②（问题）根深蒂固的（chron 时间 + -ic → 时间很长的）；辨析：chronic（慢性/长期）vs. acute（急性的）；反义：acute, temporary",
    "example": "Chronic underfunding of public healthcare has left the system ill-equipped to handle the sudden surge in demand triggered by the pandemic.",
    "tags": [
      "#核心词汇",
      "#同义置换"
    ]
  },
  {
    "id": "v73",
    "word": "chronicle",
    "phonetic": "/ˈkrɒnɪk(ə)l/",
    "meaning": "n. 编年史，年代记（chron 时间 + -icle → 按时间记录的文献）；v. 记录，chronicled；派生：chronological adj. 按时间顺序的；chronology n. 年代学，时间顺序",
    "example": "The documentary chronicles the rise and fall of a media empire over four decades, drawing on previously unpublished interviews with former employees.",
    "tags": [
      "#核心词汇",
      "#派生词",
      "#一词多性"
    ]
  },
  {
    "id": "v74",
    "word": "synchronous",
    "phonetic": "/ˈsɪŋkrənəs/",
    "meaning": "adj. 同时发生的，同步的（syn- 共同 + chron 时间 + -ous → 时间相同的）；派生：synchronize v. 使同步；synchronization n. 同步；asynchronous adj. 异步的，不同步的",
    "example": "The synchronous release of the film across forty countries was intended to prevent piracy and maximise opening-weekend box-office revenue.",
    "tags": [
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v75",
    "word": "hero",
    "phonetic": "/ˈhɪərəʊ/",
    "meaning": "n. 英雄；主角，主人公（源自希腊神话）；派生：heroine n. 女英雄；女主角；heroism n. 英勇事迹，英雄气概；近义：champion, warrior；用法：unsung hero 默默无闻的英雄",
    "example": "Throughout history, the definition of a national hero has shifted dramatically, often reflecting the prevailing political ideology of the era.",
    "tags": [
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v76",
    "word": "heroic",
    "phonetic": "/hɪˈrəʊɪk/",
    "meaning": "adj. 英雄的，英勇的；n. (pl. heroics) 夸张的英雄举止；史诗体（her- + -oic）；熟词僻义：heroics 可含讽刺意味，指\"装英雄的夸大行为\"；近义：brave, courageous, valiant",
    "example": "The firefighters' heroic efforts to contain the blaze prevented it from spreading to the adjacent residential areas.",
    "tags": [
      "#核心词汇",
      "#熟词僻义",
      "#一词多性"
    ]
  },
  {
    "id": "v77",
    "word": "zeal",
    "phonetic": "/ziːl/",
    "meaning": "n. 热情，热忱，积极性（源自古希腊竞争之神 Zelos）；派生：zealous adj. 热情的，热心的；zealously adv.；近义：enthusiasm, passion, ardour, fervour, dedication",
    "example": "The new director approached the restructuring with a zeal that both inspired and alarmed her more cautious colleagues.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v78",
    "word": "zealous",
    "phonetic": "/ˈzeləs/",
    "meaning": "adj. 热情的，热心的，狂热的（zeal + -ous）；派生：zealously adv. 热情地；overzealous adj. 过于热心的；近义：enthusiastic, passionate, fervent, ardent, devoted",
    "example": "Zealous advocates of the reform package succeeded in persuading the cabinet to put the legislation to a parliamentary vote earlier than planned.",
    "tags": [
      "#核心词汇",
      "#同义置换"
    ]
  },
  {
    "id": "v79",
    "word": "zealot",
    "phonetic": "/ˈzelət/",
    "meaning": "n. 狂热者，狂热分子（zeal + -ot 人 → 充满热情之人，含贬义）；辨析：zealot 强调过度狂热（贬义倾向）vs. devotee 含褒义；作者态度题中属负面色彩词汇",
    "example": "Religious zealots on both sides of the debate made it almost impossible for moderate voices to be heard in the public forum.",
    "tags": [
      "#核心词汇",
      "#否定态度"
    ]
  },
  {
    "id": "v80",
    "word": "jealous",
    "phonetic": "/ˈdʒeləs/",
    "meaning": "adj. ①嫉妒的，眼红的（Zelos 的变体 → 怕失去所拥有的）②警惕维护的，珍视的；派生：jealousy n. 嫉妒；辨析：jealous（怕失去已有的）vs. envious（渴望拥有别人的）",
    "example": "Some critics were jealous of his rapid promotion, attributing his success to personal connections rather than professional merit.",
    "tags": [
      "#核心词汇",
      "#一词多义"
    ]
  },
  {
    "id": "v81",
    "word": "democracy",
    "phonetic": "/dɪˈmɒkrəsi/",
    "meaning": "n. 民主，民主政治；民主国家（demo- 人民 + cracy 统治）；派生：democratic adj. 民主的；democrat n. 民主主义者；反义：autocracy, dictatorship, tyranny",
    "example": "The consolidation of democracy in Eastern Europe after 1989 was widely celebrated, though the pace of institutional reform varied significantly between countries.",
    "tags": [
      "#词根crat/cracy",
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v82",
    "word": "bureaucracy",
    "phonetic": "/bjʊˈrɒkrəsi/",
    "meaning": "n. 官僚机构；官僚主义（bureau- 部门/局 + cracy 统治）；派生：bureaucrat n. 官僚；bureaucratic adj. 官僚的，繁文缛节的；近义：red tape 繁文缛节，administration，officialdom",
    "example": "Critics argue that excessive bureaucracy stifles innovation in the public sector by making it prohibitively costly to experiment with new approaches.",
    "tags": [
      "#词根crat/cracy",
      "#核心词汇"
    ]
  },
  {
    "id": "v83",
    "word": "aristocracy",
    "phonetic": "/ˌærɪˈstɒkrəsi/",
    "meaning": "n. 贵族；贵族统治，贵族政治（aristo- 最好的/贵族的 + cracy 统治）；派生：aristocrat n. 贵族；aristocratic adj. 贵族的；近义：nobility, gentry, upper class",
    "example": "By the twentieth century, the hereditary aristocracy had largely lost its political power, though its social and cultural influence persisted in many subtle ways.",
    "tags": [
      "#词根crat/cracy",
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v84",
    "word": "monocracy",
    "phonetic": "/mɒˈnɒkrəsi/",
    "meaning": "n. 独裁政治，专制政治（mono- 单一 + cracy 统治）；派生：monocrat n. 独裁者；monocratic adj. 独裁的；近义：autocracy, dictatorship, tyranny；前缀 mono- 亦见于 monologue, monopoly, monarchy",
    "example": "The gradual erosion of judicial independence was seen by many observers as the first step towards monocracy, undermining the checks and balances of democratic governance.",
    "tags": [
      "#词根crat/cracy",
      "#核心词汇",
      "#前缀数量"
    ]
  },
  {
    "id": "v85",
    "word": "advocate",
    "phonetic": "/ˈædvəkeɪt/",
    "meaning": "v. 提倡，支持（ad- 向 + voc 说 + -ate → 为某事大声发声）；n. 提倡者，支持者，拥护者（= proponent, supporter, champion）；作者态度题属积极肯定词汇；派生：advocacy n. 倡导",
    "example": "I have been transformed from a passionate advocate of the philosophy of \"having it all\" into a woman who is happy to settle for a bit of everything.",
    "tags": [
      "#词根voc/voke/vow",
      "#核心词汇",
      "#真题例句",
      "#一词多性"
    ]
  },
  {
    "id": "v86",
    "word": "devote",
    "phonetic": "/dɪˈvəʊt/",
    "meaning": "v. 奉献，致力于（de- + vow 誓言 → 发誓奉献）；搭配：devote oneself to sth. = dedicate oneself to sth. 献身于；be devoted to sth./doing sth.；派生：devotion n. 奉献，热爱；devoted adj. 忠诚的，深爱的",
    "example": "After retiring from politics, she devoted the remainder of her life to campaigning for the rights of refugees and displaced persons.",
    "tags": [
      "#词根voc/voke/vow",
      "#核心词汇",
      "#同义置换"
    ]
  },
  {
    "id": "v87",
    "word": "evoke",
    "phonetic": "/ɪˈvəʊk/",
    "meaning": "v. 唤起，引起（e- 出 + voke 呼叫 → 从内部唤出）；近义：arouse, elicit, trigger, provoke, stir up；搭配：evoke a response/memory/emotion 唤起回应/记忆/情感",
    "example": "The documentary's opening sequence evokes a powerful sense of nostalgia, drawing viewers into a world that has long since disappeared.",
    "tags": [
      "#词根voc/voke/vow",
      "#核心词汇",
      "#同义置换"
    ]
  },
  {
    "id": "v88",
    "word": "provoke",
    "phonetic": "/prəˈvəʊk/",
    "meaning": "v. ①激怒，挑衅（pro- 向前 + voke 呼叫 → 向前叫嚣）②唤起，激发；引发（= evoke, elicit, trigger, arouse）；考研常用义②；派生：provocative adj. 挑衅的；激发思考的",
    "example": "The government's decision to cut welfare benefits provoked widespread protests in major cities across the country.",
    "tags": [
      "#词根voc/voke/vow",
      "#核心词汇",
      "#一词多义"
    ]
  },
  {
    "id": "v89",
    "word": "vocation",
    "phonetic": "/vəʊˈkeɪʃ(ə)n/",
    "meaning": "n. 职业，天职；使命感（voc 呼唤 + -ation → 被\"呼唤\"去做的事）；辨析：vocation（天职/使命感）vs. profession（专业职业）vs. occupation（泛指工作）vs. career（职业生涯）；派生：vocational adj. 职业的",
    "example": "Teaching is more than a job for her; it is a vocation that she has pursued with remarkable dedication for over three decades.",
    "tags": [
      "#词根voc/voke/vow",
      "#核心词汇",
      "#同义置换"
    ]
  },
  {
    "id": "v90",
    "word": "appeal",
    "phonetic": "/əˈpiːl/",
    "meaning": "v./n. ①呼吁，恳求（= call on, urge）②吸引（= attract, draw）③上诉，申诉（peal/pel 推动 → 推动对方）；三义均为考研考点；派生：appealing adj. 吸引人的，有吸引力的",
    "example": "Campaigners appealed to the government to reconsider its plans to cut funding for public libraries, arguing that the social costs would far outweigh the savings.",
    "tags": [
      "#词根peal/pel/pul",
      "#核心词汇",
      "#一词多义",
      "#一词多性"
    ]
  },
  {
    "id": "v91",
    "word": "compel",
    "phonetic": "/kəmˈpel/",
    "meaning": "v. 强迫，迫使（com- 强调 + pel 推动 → 推着走）；搭配：compel sb. to do sth. = force sb. to do sth.；派生：compelling adj. 引人注目的；令人信服的（= convincing, forceful）",
    "example": "Rising production costs compelled many small manufacturers to relocate their operations to countries with cheaper labour.",
    "tags": [
      "#词根peal/pel/pul",
      "#核心词汇",
      "#同义置换"
    ]
  },
  {
    "id": "v92",
    "word": "impel",
    "phonetic": "/ɪmˈpel/",
    "meaning": "v. 驱动，促使；推动（im- 进入 + pel 推动 → 从内部推动）；搭配：impel sb. to do sth.（= drive, prompt, urge）；辨析：impel 多指内在动力驱使，compel 多指外力强迫",
    "example": "A sense of moral obligation impelled her to speak out against the injustice, even at considerable risk to her own career.",
    "tags": [
      "#词根peal/pel/pul",
      "#核心词汇"
    ]
  },
  {
    "id": "v93",
    "word": "expel",
    "phonetic": "/ɪkˈspel/",
    "meaning": "v. 驱逐，驱赶；开除（ex- 出 + pel 推动 → 推出去）；搭配：be expelled from school/the party 被开除；近义：dismiss, banish, deport, oust；派生：expulsion n. 驱逐，开除",
    "example": "Two members were expelled from the party following an investigation into allegations of financial misconduct.",
    "tags": [
      "#词根peal/pel/pul",
      "#核心词汇"
    ]
  },
  {
    "id": "v94",
    "word": "propel",
    "phonetic": "/prəˈpel/",
    "meaning": "v. 推动，驱动；促使（pro- 向前 + pel 推动 → 向前推）；派生：propulsion n. 推进力；propeller n. 螺旋桨；引申：propel sb. to fame 使某人一举成名（近义：drive, thrust, catapult）",
    "example": "The rapid expansion of the internet propelled a generation of entrepreneurs to global prominence within a remarkably short time.",
    "tags": [
      "#词根peal/pel/pul",
      "#核心词汇"
    ]
  },
  {
    "id": "v95",
    "word": "repel",
    "phonetic": "/rɪˈpel/",
    "meaning": "v. ①击退，抵御（= repulse, resist, fend off）②使反感，令人厌恶（re- 回 + pel 推动 → 推回去）；派生：repellent adj. 令人厌恶的；n. 驱虫剂；repulsive adj. 令人厌恶的",
    "example": "The army successfully repelled three consecutive attempts to breach the defensive line under cover of darkness.",
    "tags": [
      "#词根peal/pel/pul",
      "#核心词汇",
      "#一词多义"
    ]
  },
  {
    "id": "v96",
    "word": "pulse",
    "phonetic": "/pʌls/",
    "meaning": "n. ①脉搏，脉冲（pul 推动 → 心跳推动血液流动）②节拍，律动，活力；v. 跳动，脉动；熟词僻义：pulse 可引申为城市/社会的\"脉搏/节奏\"；近义（n.②）：rhythm, beat, throb",
    "example": "The pulse of the city could be felt in the constant movement of people, the hum of traffic, and the chatter spilling from cafés.",
    "tags": [
      "#词根peal/pel/pul",
      "#核心词汇",
      "#熟词僻义"
    ]
  },
  {
    "id": "v97",
    "word": "attain",
    "phonetic": "/əˈteɪn/",
    "meaning": "v. 达到，获得；实现（at- + tain 抓住 → 抓住目标）；近义：achieve, obtain, realize, fulfill, accomplish；搭配：attain a goal/standard/level；派生：attainment n. 成就；达到，实现",
    "example": "Students who attain the highest grades in this programme are often offered positions at leading research institutions worldwide.",
    "tags": [
      "#词根tain/ten",
      "#核心词汇",
      "#同义置换"
    ]
  },
  {
    "id": "v98",
    "word": "contain",
    "phonetic": "/kənˈteɪn/",
    "meaning": "v. ①包含，容纳（= include, hold, comprise）②控制，克制（con- + tain 抓住 → 全部抓住/控制）；辨析：总体 contain = include 部分；派生：container n. 容器；containment n. 遏制，控制",
    "example": "Efforts to contain the spread of the virus were hampered by inadequate testing capacity and a lack of coordinated policy response.",
    "tags": [
      "#词根tain/ten",
      "#核心词汇",
      "#一词多义"
    ]
  },
  {
    "id": "v99",
    "word": "content",
    "phonetic": "/ˈkɒntent/ (n./adj.)  /kənˈtent/ (v.)",
    "meaning": "n. ①目录（pl. contents）②内容；含量；adj. 满意的，满足的（= satisfied）；v. 使满足；搭配：be content with 对…满意；content oneself with 以…为满足；派生：contentment n. 满足感（= satisfaction）",
    "example": "Rather than seeking ever greater wealth, he had learned to be content with a modest income and the simple pleasures it afforded.",
    "tags": [
      "#词根tain/ten",
      "#核心词汇",
      "#一词多性",
      "#一词多义"
    ]
  },
  {
    "id": "v100",
    "word": "entertain",
    "phonetic": "/ˌentəˈteɪn/",
    "meaning": "v. ①招待，款待（= host, receive）②娱乐，使开心③考虑，持有（想法）（enter- 进入 + tain 持有 → 将客人留在家中）；派生：entertaining adj. 有趣的，令人愉悦的；entertainment n. 娱乐",
    "example": "While the conference was primarily academic, the organisers had arranged several social events to entertain the visiting delegates.",
    "tags": [
      "#词根tain/ten",
      "#核心词汇",
      "#一词多义"
    ]
  },
  {
    "id": "v101",
    "word": "detain",
    "phonetic": "/dɪˈteɪn/",
    "meaning": "v. 拘留，扣押（de- 分离/向下 + tain 持有 → 把人扣住不放）；近义：hold, apprehend, arrest, confine；派生：detention n. 拘留，扣押；detainee n. 被拘留者",
    "example": "Three journalists were detained by local authorities for over a week before being released without charge.",
    "tags": [
      "#词根tain/ten",
      "#核心词汇"
    ]
  },
  {
    "id": "v102",
    "word": "retain",
    "phonetic": "/rɪˈteɪn/",
    "meaning": "v. 保留，保持（re- 再 + tain 抓住 → 继续抓住不放）；近义：keep, maintain, preserve, hold on to；派生：retention n. 保留；记忆力；retentive adj. 记忆力强的；辨析：retain 强调\"主动维持以免失去\"",
    "example": "The company has struggled to retain experienced staff in the face of more attractive salary packages offered by competitors.",
    "tags": [
      "#词根tain/ten",
      "#核心词汇",
      "#同义置换"
    ]
  },
  {
    "id": "v103",
    "word": "sustain",
    "phonetic": "/səˈsteɪn/",
    "meaning": "v. ①维持，维续（= maintain, support, keep up）②供养，养活③承受，经受（sus- 在下 + tain 持有 → 从下方支撑）；派生：sustainable adj. 可持续的；sustainability n. 可持续性",
    "example": "Some scholars conclude that a government with finite resources should simply stop paying for medical care that sustains life beyond a certain age.",
    "tags": [
      "#词根tain/ten",
      "#核心词汇",
      "#真题例句",
      "#同义置换"
    ]
  },
  {
    "id": "v104",
    "word": "maintain",
    "phonetic": "/meɪnˈteɪn/",
    "meaning": "v. ①维持，保持；维修（= repair）②坚持认为，声称（观点词汇：sb. maintain that + 宾语从句）（main- + tain 持有 → 持续持有）；派生：maintenance n. 维护，维修；近义（观点）：argue, contend, claim, assert",
    "example": "The authorities maintained that the new regulations were necessary to ensure public safety, despite fierce criticism from the business community.",
    "tags": [
      "#词根tain/ten",
      "#核心词汇",
      "#一词多义",
      "#观点词汇"
    ]
  },
  {
    "id": "v105",
    "word": "price",
    "phonetic": "/praɪs/",
    "meaning": "n. 价格，代价（词根 preci 倒序变形）；引申搭配：at the price of 以…为代价；at any price 不惜一切代价；近义：cost, charge, fee；v. price sth. at 将…定价为",
    "example": "The new treatment is highly effective but comes at the price of severe side effects that make it unsuitable for long-term use.",
    "tags": [
      "#词根preci",
      "#核心词汇"
    ]
  },
  {
    "id": "v106",
    "word": "precious",
    "phonetic": "/ˈpreʃəs/",
    "meaning": "adj. 珍贵的，珍惜的（preci 价值 + -ous → 有价值的）；作者态度题正面肯定词；近义：valuable, treasured, invaluable；反义：worthless, trivial",
    "example": "Clean water is perhaps the most precious natural resource, yet it continues to be wasted on an enormous scale in many parts of the world.",
    "tags": [
      "#词根preci",
      "#核心词汇",
      "#作者态度"
    ]
  },
  {
    "id": "v107",
    "word": "praise",
    "phonetic": "/preɪz/",
    "meaning": "v./n. 赞扬，称赞（preci 倒序变形）；作者态度题正面词；近义：acclaim v./n. 喝彩赞扬；commend v. 表扬；applaud v. 鼓掌称赞；extol v. 颂扬；考研考点：faint praise 含贬意的有限赞扬",
    "example": "Even Tommasini, who had advocated Gilbert's appointment, offered what struck many Times readers as faint praise for the incoming music director.",
    "tags": [
      "#词根preci",
      "#核心词汇",
      "#作者态度",
      "#真题例句"
    ]
  },
  {
    "id": "v108",
    "word": "appreciate",
    "phonetic": "/əˈpriːʃieɪt/",
    "meaning": "v. ①欣赏，赏识 ②感激，感谢 ③意识到，充分理解（ap- + preci 价值 + -ate → 认识到其价值）；作者态度题正面词；派生：appreciative adj. 欣赏的；appreciation n. 欣赏；（资产）增值；用法：I would appreciate it if...（书信常用句式）",
    "example": "It is difficult to fully appreciate the scale of disruption caused by the industrial revolution without examining its effects on ordinary working families.",
    "tags": [
      "#词根preci",
      "#核心词汇",
      "#一词多义",
      "#作者态度"
    ]
  },
  {
    "id": "v109",
    "word": "appraise",
    "phonetic": "/əˈpreɪz/",
    "meaning": "v. 评价，评估（ap- + praise → 给予评价）；近义：assess, evaluate, value, rate, estimate；派生：appraisal n. 评估，鉴定；考研辨析：overvalue/overrate/overestimate 高估；undervalue/underrate/underestimate 低估",
    "example": "The committee was asked to appraise each candidate's performance against a standardised set of criteria before making its final recommendation.",
    "tags": [
      "#词根preci",
      "#核心词汇",
      "#同义置换"
    ]
  },
  {
    "id": "v110",
    "word": "astrology",
    "phonetic": "/əˈstrɒlədʒi/",
    "meaning": "n. 占星术，星象学（astr 星 + logy 学科）；派生：astrological adj. 占星的；astrologer n. 占星家；辨析：astrology（占星术，非科学）vs. astronomy（天文学，科学）",
    "example": "Despite being dismissed by scientists as pseudoscience, astrology continues to attract a large following and generates considerable revenue through print and digital media.",
    "tags": [
      "#词根astr",
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v111",
    "word": "astronomy",
    "phonetic": "/əˈstrɒnəmi/",
    "meaning": "n. 天文学（astr 星 + nomy 规律/学科）；派生：astronomer n. 天文学家；astronomical adj. ①天文的 ②极大的，天文数字般的（熟词僻义：astronomical cost 天文数字的花费）；近义（adj.②）：enormous, colossal, staggering",
    "example": "Astronomers announced that they had detected radio signals from a region of space previously thought to be devoid of any significant stellar activity.",
    "tags": [
      "#词根astr",
      "#核心词汇",
      "#派生词",
      "#熟词僻义"
    ]
  },
  {
    "id": "v112",
    "word": "astronaut",
    "phonetic": "/ˈæstrənɔːt/",
    "meaning": "n. 宇航员，航天员（astr 星 + naut 航行者 → 在星际间航行的人）；近义：cosmonaut（苏联/俄罗斯宇航员）；词根关联：nautical adj. 航海的",
    "example": "The astronaut's account of viewing the Earth from orbit prompted widespread reflection on the fragility of the planet's ecosystem.",
    "tags": [
      "#词根astr",
      "#核心词汇"
    ]
  },
  {
    "id": "v113",
    "word": "sound",
    "phonetic": "/saʊnd/",
    "meaning": "n. 声音；adj. ①健全的，合理可靠的（= valid, sensible）②酣的（sound sleep 酣睡）；v. 听起来（= seem）；熟词僻义：a sound policy 合理的政策；safe and sound 安然无恙；environmentally sound 环境友好的",
    "example": "The central bank argued that its decision rested on sound economic reasoning, pointing to data suggesting inflation was firmly under control.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v114",
    "word": "buy",
    "phonetic": "/baɪ/",
    "meaning": "v. ①购买 ②相信，接受，认同（= believe, accept）；熟词僻义：buy an argument/story 接受某说法；考研真题：Lots of Americans bought that nonsense. = 很多美国人相信了那些无稽之谈",
    "example": "Not everyone buys the argument that economic growth alone can lift communities out of poverty without direct redistributive intervention.",
    "tags": [
      "#熟词僻义",
      "#核心词汇",
      "#真题例句"
    ]
  },
  {
    "id": "v115",
    "word": "flag",
    "phonetic": "/flæɡ/",
    "meaning": "n. 旗帜；v. 标记，标注（= mark）；熟词僻义：flag sth. up 将某事标记以引起注意；考研2015 Text 3 原文：manuscripts will be flagged up for additional scrutiny（答案：marked）",
    "example": "Manuscripts will be flagged up for additional scrutiny by the journal's internal editors, or by outside peer reviewers.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v116",
    "word": "hit",
    "phonetic": "/hɪt/",
    "meaning": "v. ①击打，打击 ②达到（= reach）；熟词僻义：hit middle age 步入中年；hit a peak/record/target 达到峰值/纪录/目标；考研2014 真题：as many people hit middle age（= reach middle age）",
    "example": "As many people hit middle age, they often start to notice that their memory and mental clarity are not what they used to be.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多义",
      "#核心词汇"
    ]
  },
  {
    "id": "v117",
    "word": "practice",
    "phonetic": "/ˈpræktɪs/",
    "meaning": "n. ①实践，练习 ②惯例，习惯做法（= convention, custom, habit）；熟词僻义：the practice of doing sth. 从事…的惯例；考研2008 Text 3 原文：\"the increasingly common practice of recruiting players from all over the world\"",
    "example": "The increasingly common practice of recruiting players from all over the world has contributed to the dramatic rise in the average height of NBA players.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多义",
      "#核心词汇"
    ]
  },
  {
    "id": "v118",
    "word": "fashion",
    "phonetic": "/ˈfæʃ(ə)n/",
    "meaning": "n. 时尚，流行；方式（in the fashion of 以…方式）；v. 制定，塑造，打造（= shape, create, design）；熟词僻义：fashion a policy/plan 制定政策；考研真题：\"fashioning conservation measures\"（= designing/formulating）",
    "example": "Congress should help to begin fashioning conservation measures that will effectively protect the nation's remaining wilderness areas.",
    "tags": [
      "#熟词僻义",
      "#一词多性",
      "#核心词汇",
      "#真题例句"
    ]
  },
  {
    "id": "v119",
    "word": "address",
    "phonetic": "/əˈdres/ (v.)  /ˈædres/ (n.)",
    "meaning": "n. ①地址 ②演讲，致辞；v. ①解决，处理（= tackle, deal with, handle）②向…发表演讲 ③称呼；熟词僻义：address a problem/issue/challenge 解决问题（考研高频搭配）",
    "example": "The report argues that current policies have failed to adequately address the root causes of growing inequality within modern societies.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v120",
    "word": "game",
    "phonetic": "/ɡeɪm/",
    "meaning": "n. ①游戏，比赛 ②猎物（= prey, quarry）；adj. 愿意的，勇敢的；熟词僻义：easy game 容易到手的猎物/目标；考研2006 Text 3：\"large, slow-growing animals were easy game\"（= prey）",
    "example": "Large, slow-growing animals were easy game, and were quickly hunted to extinction by early human populations in every region they settled.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多义",
      "#核心词汇"
    ]
  },
  {
    "id": "v121",
    "word": "shell",
    "phonetic": "/ʃel/",
    "meaning": "n. 壳，外壳，贝壳；v. shell out 付出（大笔金钱）（= pay out, fork out, spend）；熟词僻义：shell out = spend/pay；考研2009 Text 2：\"all he needs to do is to shell out $30 for a PTK\"",
    "example": "All he needs to do is to shell out $30 for a PTK, which arrives in the mail with everything included.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v122",
    "word": "late",
    "phonetic": "/leɪt/",
    "meaning": "adj. ①迟的，晚的 ②（置于名词前）已故的（= deceased, former）；熟词僻义：the late sb. 已故的某人；考研1997 Text 4：\"who took over for the late Steve Ross\"（= the deceased Steve Ross）；副词：lately 最近（= recently）",
    "example": "The foundation established in memory of the late professor continues to fund research into the causes and treatment of rare childhood diseases.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多义",
      "#核心词汇"
    ]
  },
  {
    "id": "v123",
    "word": "blanket",
    "phonetic": "/ˈblæŋkɪt/",
    "meaning": "n. 毯子；adj. 全面的，综合的，一刀切的（= comprehensive, sweeping, across-the-board）；熟词僻义：a blanket ban/policy/rule 全面禁令/政策；考研真题：a blanket ban on foreign unskilled labor",
    "example": "There is already a blanket ban on foreign unskilled labour in Japan, a policy that critics argue makes the country's ageing workforce crisis considerably worse.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v124",
    "word": "dawn",
    "phonetic": "/dɔːn/",
    "meaning": "n. 黎明，拂晓；开端，开始；v. （真相/想法）开始变得清晰，开始被理解（on sb.）（= become clear, emerge, occur to）；熟词僻义：it dawned on him that... 他开始意识到…；考研真题：\"Slowly the awful truth dawned.\"",
    "example": "Slowly the awful truth dawned: the data they had spent three years collecting contained a systematic error that invalidated all their conclusions.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v125",
    "word": "cook",
    "phonetic": "/kʊk/",
    "meaning": "n. 厨师；v. ①烹饪 ②**伪造，编造，捏造**（= falsify, fabricate, doctor）；熟词僻义：cook the books 做假账；cook experiments 伪造实验数据；考研真题：\"He is not supposed to cook his experiments.\"",
    "example": "A scientist is not supposed to cook his experiments; the integrity of the research process depends on the honest reporting of results.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v126",
    "word": "fit",
    "phonetic": "/fɪt/",
    "meaning": "adj. ①合适的，适合的（= suitable, appropriate）②健康的，体格好的（= healthy, in shape）；v. 适合；fit in 融入（= blend in, integrate）；n. 一阵（a fit of anger 一阵愤怒）；熟词僻义：fit 作\"健康的\"讲，与 healthy 同义置换",
    "example": "Teenagers desire nothing more than fitting in with their peer group, a social pressure that can sometimes override individual judgment and values.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v127",
    "word": "fork",
    "phonetic": "/fɔːk/",
    "meaning": "n. ①叉子 ②（道路/河流）分叉处；v. ①分叉 ②**fork over/out 支付**（= pay out, shell out, spend）；熟词僻义：fork out = pay；考研真题：\"they just want Ottawa to fork over additional billions\"",
    "example": "Critics argued that taxpayers should not be expected to fork out billions to bail out financial institutions whose reckless behaviour caused the crisis.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v128",
    "word": "flesh",
    "phonetic": "/fleʃ/",
    "meaning": "n. 肉，肌肤；v. **flesh out 充实，填充，丰富**（= elaborate on, expand, develop）；熟词僻义：flesh out an outline/argument 充实大纲/论点；近义：elaborate, expand, supplement；in the flesh 亲自，本人",
    "example": "You can flesh out whatever outline you have made by gathering concrete data and specific examples to support your central argument.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v129",
    "word": "axe",
    "phonetic": "/æks/",
    "meaning": "n. 斧头；v. **削减，裁员，砍掉**（= cut, reduce, eliminate, slash）；熟词僻义：axe funding/jobs/a programme 削减资金/裁员/取消项目；近义：cut, slash, scrap；考研真题：\"Community projects are being axed by hard-pressed social services departments.\"",
    "example": "Community projects are being axed by hard-pressed social services departments struggling to balance their budgets under continued government austerity.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v130",
    "word": "corner",
    "phonetic": "/ˈkɔːnə(r)/",
    "meaning": "n. ①角落，拐角 ②**困境，窘境**（= dilemma, predicament, tight spot）；v. 将…逼入困境；corner the market 垄断市场；熟词僻义：drive/push sb. into a corner 使某人陷入困境；考研真题：\"The interviewer had driven her into a corner.\"",
    "example": "The interviewer had driven her into a corner from which there was no escape: any answer she gave would either implicate her colleagues or damage her own reputation.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多义",
      "#核心词汇"
    ]
  },
  {
    "id": "v131",
    "word": "balloon",
    "phonetic": "/bəˈluːn/",
    "meaning": "n. 气球，热气球；v. **迅速膨胀，激增**（= surge, soar, skyrocket, escalate）；熟词僻义：costs/debt/numbers have ballooned 成本/债务/数量激增；近义：surge, soar, skyrocket, mushroom；考研真题：\"the use of Tube has ballooned\"（= increased dramatically）",
    "example": "In London, the use of the Tube has ballooned over the past two decades, straining ageing infrastructure and prompting urgent calls for investment.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v132",
    "word": "voice",
    "phonetic": "/vɔɪs/",
    "meaning": "n. ①声音，嗓音 ②**观点，声音**（= opinion, view, perspective）；v. **表达，说出**（= express, articulate）；熟词僻义：voice concerns/objections 表达顾虑/反对；考研真题：\"voices now come from many quarters insisting that the science about global warming is incomplete\"",
    "example": "Voices now come from many quarters insisting that the science about global warming is incomplete and that further research is needed before decisive action is taken.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v133",
    "word": "quarter",
    "phonetic": "/ˈkwɔːtə(r)/",
    "meaning": "n. ①四分之一 ②一刻钟 ③**方面，地方；（某类）人，来源**（= area, group, circle, direction）；熟词僻义：from many quarters 来自多方；from official quarters 来自官方；考研真题：\"voices now come from many quarters\"",
    "example": "Criticism of the new austerity measures has come from many quarters, including environmental groups, academics, and business associations across the political spectrum.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多义",
      "#核心词汇"
    ]
  },
  {
    "id": "v134",
    "word": "pool",
    "phonetic": "/puːl/",
    "meaning": "n. ①水池，游泳池 ②**一批（人才/资源）**；v. **汇集，共享，集中**（= combine, share, consolidate）；熟词僻义：pool resources/skills 汇集资源/技能；a pool of talent/candidates 人才库；考研真题：\"all would pool resources…and create a national institution\"",
    "example": "Instead of each province maintaining its own bureaucracy, all would pool resources, work together, and create a single national institution with far greater bargaining power.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v135",
    "word": "shield",
    "phonetic": "/ʃiːld/",
    "meaning": "n. 盾牌，防护物；v. **保护，遮挡**（= protect, defend, guard, safeguard）；熟词僻义：shield sb./sth. from harm/scrutiny 保护某人/物免受伤害/审查；近义：shelter, insulate, screen, protect",
    "example": "Privacy laws are designed to shield individuals from the potential misuse of their personal data by corporations and government agencies alike.",
    "tags": [
      "#熟词僻义",
      "#一词多性",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v136",
    "word": "mirror",
    "phonetic": "/ˈmɪrə(r)/",
    "meaning": "n. 镜子；v. **反映，映射，体现**（= reflect, represent, echo）；熟词僻义：mirror reality/society 反映现实/社会；be mirrored in 在…中得到反映；近义：reflect, represent, echo, embody",
    "example": "The growing inequality in housing costs mirrors a broader trend of wealth concentration that has accelerated significantly since the 1980s.",
    "tags": [
      "#熟词僻义",
      "#一词多性",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v137",
    "word": "cloud",
    "phonetic": "/klaʊd/",
    "meaning": "n. 云；v. **遮掩，使模糊；蒙上阴影**（= obscure, tarnish, overshadow）；熟词僻义：cloud one's judgement/reputation 影响判断/抹黑名誉；cloud the issue 使问题复杂化；近义：obscure, tarnish, undermine",
    "example": "The scandal has clouded his reputation as a reformer, making it difficult for him to build the political coalitions necessary for meaningful change.",
    "tags": [
      "#熟词僻义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v138",
    "word": "train",
    "phonetic": "/treɪn/",
    "meaning": "n. ①火车 ②**一系列，一连串**（a train of...）；v. 训练，培训；熟词僻义：a train of thoughts/consequences/events 一连串想法/后果/事件；近义（n.②）：series, sequence, chain, succession",
    "example": "Each decision set in motion a train of consequences that the committee had entirely failed to anticipate, ultimately undermining the entire reform programme.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#核心词汇"
    ]
  },
  {
    "id": "v139",
    "word": "crane",
    "phonetic": "/kreɪn/",
    "meaning": "n. ①仙鹤，鹤 ②起重机，吊车；v. **伸长（脖子），探头查看**；熟词僻义：crane one's neck 伸长脖子查看；近义：stretch, extend, lean forward to see",
    "example": "Passengers craned their necks to catch a glimpse of the celebrity who had just arrived at the airport terminal, surrounded by a team of security personnel.",
    "tags": [
      "#熟词僻义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v140",
    "word": "epidemic",
    "phonetic": "/ˌepɪˈdemɪk/",
    "meaning": "n. ①流行病，传染病（epi- 在上 + demo 人民）②**（社会问题）流行，盛行**（= prevalence, surge, explosion）；adj. 流行性的；熟词僻义：an epidemic of violence/obesity/anxiety 暴力/肥胖/焦虑现象的蔓延",
    "example": "Commentators have described the rapid rise in youth anxiety as nothing less than a mental health epidemic, demanding urgent and coordinated policy responses.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#核心词汇"
    ]
  },
  {
    "id": "v141",
    "word": "cascade",
    "phonetic": "/kæˈskeɪd/",
    "meaning": "n. ①瀑布 ②**大量，一连串**（= torrent, flood, avalanche）；v. **大量涌现，倾泻**（= pour, flow, spill）；熟词僻义：a cascade of problems/failures 接连不断的问题/失败；近义（n.②）：torrent, wave, flood, avalanche",
    "example": "The financial crisis triggered a cascade of corporate failures, each one amplifying the next as credit dried up across the entire economy.",
    "tags": [
      "#熟词僻义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v142",
    "word": "transfer",
    "phonetic": "/ˈtrænsfə(r)/ (n.)  /trænsˈfɜː(r)/ (v.)",
    "meaning": "v. ①转移，迁移 ②换乘 ③**传染，传播**（= transmit, spread）④转学，调职，跳槽；n. 转移，转让；熟词僻义：考研四义均常见；transfer of technology/power/disease 技术/权力/疾病的转移",
    "example": "The transfer of knowledge from university research labs to commercial applications remains one of the most significant challenges in modern innovation policy.",
    "tags": [
      "#一词多义",
      "#熟词僻义",
      "#核心词汇"
    ]
  },
  {
    "id": "v143",
    "word": "decision",
    "phonetic": "/dɪˈsɪʒ(ə)n/",
    "meaning": "n. ①决定，决策 ②**判决，裁决**（= ruling, verdict, judgement, finding）；熟词僻义：a court decision 法庭裁决；reach/hand down a decision 作出裁决；近义（②）：ruling, verdict, judgement",
    "example": "The court's decision to overturn the conviction was greeted with relief by civil liberties groups who had campaigned for years on behalf of the defendant.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v144",
    "word": "article",
    "phonetic": "/ˈɑːtɪk(ə)l/",
    "meaning": "n. ①文章，报道 ②**（法律）条款，法条**（= clause, provision, term, statute）③冠词（语法）；熟词僻义：Article 1 of the Constitution 宪法第一条；近义（②）：clause, provision, regulation, statute",
    "example": "Article 19 of the Universal Declaration of Human Rights enshrines the right to freedom of expression, opinion, and access to information.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#核心词汇"
    ]
  },
  {
    "id": "v145",
    "word": "mother",
    "phonetic": "/ˈmʌðə(r)/",
    "meaning": "n. 母亲；v. **细心呵护，悉心照料**（= nurture, nurse, care for tenderly）；熟词僻义：mother sb. 像母亲一样照料某人；near义：nurture, nurse；注意区别：look after, take care of（一般照顾）vs. mother（更含温情、过度保护）",
    "example": "The charity works to ensure that elderly residents are properly mothered by trained staff who treat each person with genuine warmth and individual dignity.",
    "tags": [
      "#熟词僻义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v146",
    "word": "father",
    "phonetic": "/ˈfɑːðə(r)/",
    "meaning": "n. 父亲；创始人；v. **发明，创造；创立**（= invent, create, originate, pioneer）；熟词僻义：father a movement/theory/invention 创立某运动/理论/发明；近义：found, originate, pioneer, initiate",
    "example": "Darwin is often credited with fathering the modern theory of evolution, though his ideas built on decades of earlier scientific observation and speculation.",
    "tags": [
      "#熟词僻义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v147",
    "word": "peer",
    "phonetic": "/pɪə(r)/",
    "meaning": "n. ①同龄人，同辈 ②同行，同等地位的人（peer review 同行评审）；v. **仔细看，凝视**（= look carefully, scrutinize, squint）；熟词僻义：peer into = check, examine carefully；考研真题：\"hurriedly peering into their intricate IT systems\"",
    "example": "Several massive leakages of data this year have left managers hurriedly peering into their intricate IT systems in search of potential vulnerabilities.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v148",
    "word": "potential",
    "phonetic": "/pəˈtenʃ(ə)l/",
    "meaning": "adj. 潜在的，可能的（= possible, prospective, latent）；n. 潜能，潜力（= capacity, capability）；派生：potentially adv. 潜在地；搭配：realize/fulfill one's potential 发挥潜能；have great potential 潜力巨大",
    "example": "The programme is designed to identify students with outstanding potential and provide them with the mentoring and resources needed to develop their talents.",
    "tags": [
      "#一词多性",
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v149",
    "word": "vulnerability",
    "phonetic": "/ˌvʌlnərəˈbɪlɪti/",
    "meaning": "n. 弱点，脆弱性（= weakness, weak point, flaw, shortcoming, drawback, downside）；派生：vulnerable adj. 脆弱的；搭配：be vulnerable to = be subject to / be susceptible to / be sensitive to / be inclined to 易受…影响；词根：vulner- = wound（伤）",
    "example": "The report identified several key vulnerabilities in the nation's critical infrastructure that could be exploited by malicious actors in the event of a conflict.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v150",
    "word": "incline",
    "phonetic": "/ɪnˈklaɪn/ (v.)  /ˈɪnklaɪn/ (n.)",
    "meaning": "v. 倾向于（= tend, lean toward, be disposed to）；n. 斜坡；派生：inclination n. 倾向（= tendency, disposition, proclivity）；搭配：be inclined to do sth. = tend to do sth.；辨析：inclined（主动倾向）vs. susceptible（被动易受影响）",
    "example": "Judges are naturally inclined to favour precedent over innovation, but changing social circumstances sometimes demand fresh interpretations of existing law.",
    "tags": [
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v151",
    "word": "air",
    "phonetic": "/eə(r)/",
    "meaning": "n. ①空气 ②**气场，氛围，神态**（= atmosphere, aura, manner, demeanour）；熟词僻义：an air of confidence/mystery 一股自信/神秘气息；with an air of 带着…的气质；考研2011 Text 1：\"no air of the formidable conductor about him\"",
    "example": "Even Tommasini called Gilbert \"an unpretentious musician with no air of the formidable conductor about him\", a description that struck some readers as faint praise.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多义",
      "#核心词汇"
    ]
  },
  {
    "id": "v152",
    "word": "pretend",
    "phonetic": "/prɪˈtend/",
    "meaning": "v. 假装，伪装（pre- 前 + tend 伸展 → 向前伸展遮盖真实）；近义：feign, simulate, fake；派生：pretense/pretence n. 假装，借口；unpretentious adj. 朴实的，不矫饰的（= modest, unassuming）",
    "example": "Many companies pretend to embrace environmental responsibility while continuing practices that are fundamentally at odds with sustainability.",
    "tags": [
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v153",
    "word": "disproportionate",
    "phonetic": "/ˌdɪsprəˈpɔːʃ(ə)nət/",
    "meaning": "adj. 不相称的，不成比例的（dis- 否定 + proportion 比例 + -ate）；近义：unequal, excessive, inordinate；派生：disproportionately adv.；搭配：disproportionate impact/burden/representation 不相称的影响/负担/代表性；考研2008真题选项",
    "example": "This group generally does well in IQ tests and has contributed disproportionately to the intellectual and cultural life of the West.",
    "tags": [
      "#真题例句",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v154",
    "word": "account",
    "phonetic": "/əˈkaʊnt/",
    "meaning": "n. ①账户，账目 ②**描述，报告，叙述**（= description, report, narrative）；v. account for ①**占（比例）**（= constitute, make up, represent）②**解释，说明**（= explain）；派生：accountable adj. 负责任的（= responsible）；accountability n. 问责制（= responsibility）",
    "example": "The eyewitness account of the events differed significantly from the official version, prompting calls for an independent investigation into what had actually occurred.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v155",
    "word": "bias",
    "phonetic": "/ˈbaɪəs/",
    "meaning": "n. 偏见，偏向，偏差（= prejudice, partiality, predisposition）；v. 使有偏见，使产生偏差；搭配：be biased toward/against 偏向/偏反；考研作者态度题：bias 和 prejudice 通常是错误选项（过于负面极端）",
    "example": "The researcher speculated that an inability to consider the big picture was leading decision-makers to be biased by the daily flow of information.",
    "tags": [
      "#真题例句",
      "#作者态度",
      "#否定态度",
      "#核心词汇"
    ]
  },
  {
    "id": "v156",
    "word": "prejudice",
    "phonetic": "/ˈpredʒʊdɪs/",
    "meaning": "n. 偏见，成见（pre- 提前 + judge 判断 → 未经思考就作出判断）；v. 损害；使产生偏见；辨析：prejudice（更强烈的成见）vs. bias（相对较轻的偏向）；搭配：racial/gender prejudice 种族/性别偏见；without prejudice 不带偏见",
    "example": "The study found that employer prejudice against older workers remained a significant barrier to their re-employment, despite existing anti-discrimination legislation.",
    "tags": [
      "#作者态度",
      "#否定态度",
      "#核心词汇"
    ]
  },
  {
    "id": "v157",
    "word": "recruit",
    "phonetic": "/rɪˈkruːt/",
    "meaning": "v. 招募，招聘，纳新（= hire, enlist, sign up, headhunt）；n. 新成员，新兵；派生：recruitment n. 招募，招聘；考研2008 Text 3 原文：\"the increasingly common practice of recruiting players from all over the world\"",
    "example": "The increasingly common practice of recruiting players from all over the world has fundamentally changed the demographic composition of professional sports leagues.",
    "tags": [
      "#真题例句",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v158",
    "word": "scrutiny",
    "phonetic": "/ˈskruːtɪni/",
    "meaning": "n. 仔细审查，严格检查（= careful examination, close inspection）；v. scrutinize；搭配：come under scrutiny 受到审查；public scrutiny 公众监督；考研2015 Text 3 原文：\"flagged up for additional scrutiny\"；近义：examination, inspection, review",
    "example": "Manuscripts will be flagged up for additional scrutiny by the journal's internal editors, or by outside peer reviewers, before a final editorial decision is made.",
    "tags": [
      "#真题例句",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v159",
    "word": "manuscript",
    "phonetic": "/ˈmænjuskrɪpt/",
    "meaning": "n. 手稿，原稿；（出版前的）稿件（manu- 手 + script 写 → 手写的东西）；词根关联：script/scribe 写 → describe, prescribe, subscribe, transcribe；近义：draft, script, typescript",
    "example": "The manuscript was rejected by three different publishers before finally being accepted, having been substantially revised in response to detailed reader feedback.",
    "tags": [
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v160",
    "word": "clarity",
    "phonetic": "/ˈklærɪti/",
    "meaning": "n. 清晰，清楚，明了（= clearness, lucidity, precision）；派生：clear adj.；clarify v. 澄清，阐明；搭配：mental clarity 思维清晰；with clarity 清楚地；考研2014真题：\"their memory and mental clarity are not what they used to be\"",
    "example": "As many people hit middle age, they often start to notice that their memory and mental clarity are not what they used to be.",
    "tags": [
      "#真题例句",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v161",
    "word": "principal",
    "phonetic": "/ˈprɪnsɪp(ə)l/",
    "meaning": "n. ①校长；②（诉讼中的）当事人；③本金；adj. 主要的，首要的（= main, primary, chief, leading）；**辨析：principal（adj.主要的 / n.校长/本金）vs. principle（n.原则，不做形容词）**，考研高频混淆词对",
    "example": "The principal reason for the decline in reading among young people is not the rise of digital media per se, but the disappearance of sustained time for quiet reflection.",
    "tags": [
      "#熟词僻义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v162",
    "word": "principle",
    "phonetic": "/ˈprɪnsɪp(ə)l/",
    "meaning": "n. 原则，原理，准则（= rule, tenet, doctrine）；**辨析：principle（n. 原则，不做adj.）vs. principal（adj. 主要的 / n. 校长）**；搭配：on principle 出于原则；in principle 原则上；a matter of principle 原则问题",
    "example": "Since the days of Aristotle, a search for universal principles has characterized the scientific enterprise in every culture and civilization.",
    "tags": [
      "#真题例句",
      "#核心词汇"
    ]
  },
  {
    "id": "v163",
    "word": "characterize",
    "phonetic": "/ˈkærɪktəraɪz/",
    "meaning": "v. ①是…的特征，以…为特征（= define, typify, distinguish）②描述，描绘（= describe, portray）；用法：A characterize B = B is characterized by A；考研真题：\"a search for universal principles has characterized the scientific enterprise\"；派生：characteristic adj./n. 典型的/特征",
    "example": "The period was characterized by rapid technological change and a corresponding uncertainty about the social and economic consequences of innovation.",
    "tags": [
      "#真题例句",
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v164",
    "word": "entrepreneur",
    "phonetic": "/ˌɒntrəprəˈnɜː(r)/",
    "meaning": "n. 企业家，创业者（entre- 进入 + prendre 拿取 → 进入市场抓住机会）；派生：entrepreneurship n. 创业精神，企业家精神；近义：businessman, founder, innovator；辨析：entrepreneur（强调创新/冒险精神）vs. businessman（泛指商人）",
    "example": "The rapid expansion of the internet propelled a generation of entrepreneurs to global prominence, transforming entire industries at a pace that no regulator could match.",
    "tags": [
      "#核心词汇",
      "#派生词"
    ]
  },
  {
    "id": "v165",
    "word": "picture",
    "phonetic": "/ˈpɪktʃə(r)/",
    "meaning": "n. ①图画，照片 ②**状况，形势**（= situation, condition）③想象中的画面；v. **想象，设想**（= imagine, envision）；熟词僻义：get the picture 明白情况；the big picture 大局，全局；paint a picture of 描绘…的状况",
    "example": "The overall picture of the economy remains uncertain, with consumer confidence fragile and business investment continuing to stagnate.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v166",
    "word": "sense",
    "phonetic": "/sens/",
    "meaning": "n. ①感觉，感官 ②**判断力，理智**（= judgment, reason）③含义，意义；v. 感觉到，察觉（= feel, perceive）；熟词僻义：make sense 讲得通；in a sense 从某种意义上说；common sense 常识；a sense of 一种…的感觉",
    "example": "The proposal made sound economic sense, but faced strong political opposition from groups unwilling to accept short-term costs for long-term gain.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v167",
    "word": "sharp",
    "phonetic": "/ʃɑːp/",
    "meaning": "adj. ①尖锐的，锋利的 ②**思维敏锐的，机敏的**（= intelligent, perceptive）③急剧的（a sharp rise/fall）④刺耳的；派生：sharpen v. 使锋利；sharpness n. 敏锐，清晰度；考研2014真题：mental sharpness = mental clarity",
    "example": "A sharp mind and the ability to communicate complex ideas in plain language are among the most valuable qualities a journalist can possess.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v168",
    "word": "stability",
    "phonetic": "/stəˈbɪlɪti/",
    "meaning": "n. 稳定，稳定性（= steadiness, equilibrium）；反义：instability n. 不稳定；派生：stable adj. 稳定的；stabilize v. 使稳定；搭配：political/economic/social stability 政治/经济/社会稳定；考研2014真题选项",
    "example": "The government's top priority is to restore economic stability after years of volatility caused by successive external shocks and policy missteps.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v169",
    "word": "framework",
    "phonetic": "/ˈfreɪmwɜːk/",
    "meaning": "n. ①框架，结构（= structure, skeleton）②体制，体系（= system, scheme）；搭配：a legal/regulatory/conceptual framework 法律/监管/概念框架；within the framework of 在…框架内；考研2014真题选项",
    "example": "The new trade agreement operates within a multilateral framework designed to ensure fair competition and protect intellectual property rights.",
    "tags": [
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v170",
    "word": "flexibility",
    "phonetic": "/ˌfleksɪˈbɪlɪti/",
    "meaning": "n. 灵活性，弹性（= adaptability, versatility）；反义：rigidity, inflexibility；派生：flexible adj. 灵活的（= adaptable, pliable）；inflexible adj. 不灵活的；考研2014真题选项；搭配：flexibility in approach 方法上的灵活性",
    "example": "The ability to work with flexibility across different roles and disciplines is increasingly valued by employers in a rapidly changing labour market.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v171",
    "word": "susceptible",
    "phonetic": "/səˈseptɪbl/",
    "meaning": "adj. 易受影响的，易感的（= vulnerable, prone to, inclined to, subject to, sensitive to）；搭配：be susceptible to sth. 易受某事影响；考研2008 Text 1 原文：\"Women are particularly susceptible to developing depression and anxiety disorders in response to stress compared to men.\"",
    "example": "Women are particularly susceptible to developing depression and anxiety disorders in response to stress, compared to men.",
    "tags": [
      "#真题例句",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v172",
    "word": "formidable",
    "phonetic": "/ˈfɔːmɪdəbl/",
    "meaning": "adj. 令人生畏的，强大的，难以应对的（= powerful, impressive, daunting, intimidating）；作者态度题含敬畏/肯定色彩；近义：impressive, daunting, powerful, redoubtable；考研2011 Text 1：\"no air of the formidable conductor about him\"",
    "example": "The negotiating team faced a formidable array of challenges, including entrenched opposition from powerful industry lobbies and competing national interests.",
    "tags": [
      "#真题例句",
      "#作者态度",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v173",
    "word": "unpretentious",
    "phonetic": "/ˌʌnprɪˈtenʃəs/",
    "meaning": "adj. 朴实的，不矫饰的，谦逊的（= modest, unassuming, down-to-earth）；派生：pretentious adj. 自命不凡的，炫耀的；pretend v. 假装；考研2011 Text 1 原文：\"an unpretentious musician\"；作者态度题含温和褒义",
    "example": "The author's unpretentious prose style made complex philosophical ideas accessible to a general readership without sacrificing intellectual depth.",
    "tags": [
      "#真题例句",
      "#作者态度",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v174",
    "word": "suspicious",
    "phonetic": "/səˈspɪʃəs/",
    "meaning": "adj. ①怀疑的（= doubtful, skeptical, dubious）②可疑的（= questionable）；**作者态度题负面词族**：suspicious, doubtful, skeptical, dubious, critical，在考研态度题中通常是错误选项（过于极端负面）；派生：suspicion n. 怀疑",
    "example": "Evidence that the two companies colluded on pricing has made regulators deeply suspicious of their recent merger proposals.",
    "tags": [
      "#作者态度",
      "#否定态度",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v175",
    "word": "suggest",
    "phonetic": "/səˈdʒest/",
    "meaning": "v. ①建议（suggest doing sth. / suggest that sb. (should) do sth.，虚拟语气）②**表明，暗示**（= indicate, imply, point to）；**观点词汇**：A study/paper suggests that... 研究表明…；Sb. suggest that... 某人认为…；近义（②）：indicate, imply, show, reveal",
    "example": "A growing body of research suggests that early childhood interventions produce significantly better long-term outcomes than comparable investments made at a later stage.",
    "tags": [
      "#观点词汇",
      "#一词多义",
      "#核心词汇"
    ]
  },
  {
    "id": "v176",
    "word": "conclude",
    "phonetic": "/kənˈkluːd/",
    "meaning": "v. ①**得出结论，推断**（= infer, deduce, determine）②结束，终结（= end, finish, close）；**观点词汇**：sb. conclude that... 某人得出结论…；派生：conclusion n. 结论；conclusive adj. 决定性的，确定的；考研真题：\"Some scholars conclude that...\"",
    "example": "Some scholars conclude that a government with finite resources should simply stop paying for medical care that sustains life beyond a certain age.",
    "tags": [
      "#真题例句",
      "#观点词汇",
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v177",
    "word": "encounter",
    "phonetic": "/ɪnˈkaʊntə(r)/",
    "meaning": "n./v. 偶遇，邂逅（= chance meeting）；v. 遭遇，面对（= face, come across, run into）；熟词僻义：an unexpected/chance encounter 意外相遇；encounter difficulties/obstacles 遭遇困难；近义：meet, come across, confront",
    "example": "Few economists envisaged that policy-makers would encounter such deep-seated resistance to even modest interest rate adjustments.",
    "tags": [
      "#一词多义",
      "#一词多性",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v178",
    "word": "rosy",
    "phonetic": "/ˈrəʊzi/",
    "meaning": "adj. ①玫瑰色的，粉红的 ②**乐观的，前景美好的**（= optimistic, promising, bright, positive）；熟词僻义：a rosy/bright/promising prospect 光明的前景；paint a rosy picture 描绘美好前景；反义：bleak, gloomy, pessimistic",
    "example": "Despite the government's rosy projections, independent economists warned that unemployment was likely to remain elevated for several years to come.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v179",
    "word": "feasible",
    "phonetic": "/ˈfiːzɪbl/",
    "meaning": "adj. 可行的，可实现的（= practicable, viable, workable, achievable）；近义：practicable, viable, workable；反义：unfeasible, impractical；派生：feasibility n. 可行性（feasibility study 可行性研究）",
    "example": "The committee concluded that the proposed carbon capture scheme was technically feasible but economically unviable without significant government subsidies.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v180",
    "word": "decent",
    "phonetic": "/ˈdiːsnt/",
    "meaning": "adj. ①**体面的，像样的**（= respectable, reasonable, acceptable）②正派的，有道德的；熟词僻义：a decent salary/job/life 体面的薪水/工作/生活；考研对应搭配：a decent/respectable/stable/well-paid job；近义：respectable, reasonable, adequate",
    "example": "Every citizen deserves access to a decent standard of healthcare, regardless of their income or where they happen to live.",
    "tags": [
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v181",
    "word": "legislation",
    "phonetic": "/ˌledʒɪˈsleɪʃ(ə)n/",
    "meaning": "n. 立法；法律（= laws, regulations, statutes, acts）；派生：legislative adj. 立法的；legislate v. 立法；legislature n. 立法机构；搭配：pass/enact/introduce legislation 通过/颁布/引入法律；考研法律词汇高频",
    "example": "The government introduced new legislation to limit the amount of data that technology companies could collect and retain about individual users.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v182",
    "word": "enforce",
    "phonetic": "/ɪnˈfɔːs/",
    "meaning": "v. 执行，实施，强制（= implement, carry out, apply, impose）；派生：enforcement n. 执行，实施；law enforcement 执法；搭配：enforce the law/rules/regulations 执行法律/规则；近义：implement, apply, administer, impose",
    "example": "Without strong enforcement mechanisms, even the most carefully drafted legislation will have little impact on actual corporate behaviour.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v183",
    "word": "implement",
    "phonetic": "/ˈɪmplɪment/",
    "meaning": "v. 执行，实施，落实（= enforce, carry out, execute）；n. 工具，器具（= tool, instrument）；派生：implementation n. 执行，实施；搭配：implement a policy/plan/strategy 实施政策/计划/战略；一词多性：implement n./v.",
    "example": "The challenge for policymakers is not designing effective regulations, but ensuring they are properly implemented across all sectors of the economy.",
    "tags": [
      "#一词多性",
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v184",
    "word": "provision",
    "phonetic": "/prəˈvɪʒ(ə)n/",
    "meaning": "n. ①提供，供给（= supply）②**（法律）规定，条款**（= regulation, clause, article, term, statute）；pl. provisions 食物储备；派生自 provide v.；搭配：the provisions of the law 法律条款；providing/provided (that) = if（条件从句）",
    "example": "A key provision of the agreement requires both parties to submit any disputes to binding international arbitration rather than domestic courts.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v185",
    "word": "exaggerate",
    "phonetic": "/ɪɡˈzædʒəreɪt/",
    "meaning": "v. 夸大，夸张（ex- 超出 + aggerate 堆积 → 堆积超出实际）；派生：exaggeration n. 夸张；近义：overstate, overemphasise, magnify；反义：understate；**形近词辨析**：exaggerate（夸大）vs. aggregate（汇总，v35）",
    "example": "It would be difficult to exaggerate the significance of this discovery; it fundamentally challenges assumptions that have guided the field for decades.",
    "tags": [
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v186",
    "word": "frustrate",
    "phonetic": "/frʌˈstreɪt/",
    "meaning": "v. ①使沮丧，使失望（= disappoint, discourage）②阻碍，挫败（= thwart, hinder, impede）；派生：frustrated adj. 沮丧的；frustration n. 沮丧，挫败；frustrating adj. 令人沮丧的；考研真题：\"frustrated by their inability to cure the disease\"",
    "example": "Physicians too often offer aggressive treatment far beyond what is scientifically justified, frustrated by their inability to cure the disease and fearing loss of hope in the patient.",
    "tags": [
      "#真题例句",
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v187",
    "word": "verify",
    "phonetic": "/ˈverɪfaɪ/",
    "meaning": "v. 核查，证实，验证（ver- 真实 + -ify → 使成真）；派生：verification n. 核查，证实；verifiable adj. 可核实的；近义：confirm, substantiate, validate, authenticate；搭配：verify a claim/finding/identity 核查主张/发现/身份",
    "example": "Researchers are obliged to make their data publicly available so that other scientists can independently verify their findings.",
    "tags": [
      "#词根dict",
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v188",
    "word": "transform",
    "phonetic": "/trænsˈfɔːm/",
    "meaning": "v. 改变，转变，改造（trans- 跨越 + form 形状 → 改变形状）；派生：transformation n. 转变，变革；transformative adj. 变革性的；近义：change, convert, alter, reshape；考研真题：\"I have been transformed from a passionate advocate...\"",
    "example": "The digital revolution has transformed virtually every aspect of modern life, from how we communicate to how we work and socialise.",
    "tags": [
      "#真题例句",
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v189",
    "word": "trigger",
    "phonetic": "/ˈtrɪɡə(r)/",
    "meaning": "n. **诱因，触发因素**（= catalyst, cause, stimulus）；v. **引发，触发**（= cause, provoke, set off, spark）；熟词僻义：trigger 本义为\"扳机\"；trigger a crisis/response/reaction 触发危机/反应；考研2008 Text 1：\"trigger chemicals\"",
    "example": "The announcement of the factory closure triggered a wave of protests from workers who had not been given any prior warning of the decision.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多性",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v190",
    "word": "decline",
    "phonetic": "/dɪˈklaɪn/",
    "meaning": "v. ①下降，减少（= fall, decrease, drop）②**拒绝**（= refuse, reject, turn down）；n. 下降，衰退（= decrease, fall, drop）；熟词僻义：decline 作\"拒绝\"讲，含礼貌意味；经济词汇：economic decline/recession/slowdown/depression",
    "example": "The number of students choosing to study humanities subjects has been in steady decline for over a decade, raising serious concerns about cultural literacy.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v191",
    "word": "comprehensive",
    "phonetic": "/ˌkɒmprɪˈhensɪv/",
    "meaning": "adj. 综合的，全面的（com- 全部 + prehend 抓 + -ive → 全部抓住）；近义：thorough, exhaustive, all-inclusive, complete；派生：comprehensively adv.；考研真题：\"comprehensive records of recent correspondence\"",
    "example": "The report offers a comprehensive analysis of the factors contributing to rising inequality, drawing on data from forty countries over three decades.",
    "tags": [
      "#词根prehend/pris",
      "#真题例句",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v192",
    "word": "secure",
    "phonetic": "/sɪˈkjʊə(r)/",
    "meaning": "adj. 安全的，有保障的（= safe, protected）；**v. 确保，获得，取得**（= ensure, obtain, achieve, win）；熟词僻义：secure a deal/position/victory 确保/获得交易/职位/胜利；派生：security n. 安全；考研真题：\"secured Dickens's fame\"",
    "example": "The runaway success of The Pickwick Papers secured Dickens's fame and established him as the foremost novelist of his generation.",
    "tags": [
      "#熟词僻义",
      "#真题例句",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v193",
    "word": "passionate",
    "phonetic": "/ˈpæʃ(ə)nət/",
    "meaning": "adj. 热情的，热烈的，充满激情的（= enthusiastic, fervent, ardent, devoted）；派生：passion n. 激情，热情；dispassionate adj. 冷静的，客观的（= detached, impartial）；考研真题：\"a passionate advocate of the philosophy of having it all\"",
    "example": "I have been transformed from a passionate advocate of the philosophy of \"having it all\" into a woman who is happy to settle for a bit of everything.",
    "tags": [
      "#真题例句",
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v194",
    "word": "acclaim",
    "phonetic": "/əˈkleɪm/",
    "meaning": "v. 赞扬，为…喝彩（= praise, applaud, celebrate）；n. 赞扬，赞誉（= praise, recognition, admiration）；**作者态度题正面词**；辨析：acclaim 含\"公众大力赞扬\"之义，比 praise 更正式有力；近义：applaud, extol, celebrate, laud",
    "example": "The film received widespread critical acclaim for its innovative approach to storytelling and its nuanced portrayal of social complexity.",
    "tags": [
      "#作者态度",
      "#同义置换",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v195",
    "word": "commend",
    "phonetic": "/kəˈmend/",
    "meaning": "v. ①表扬，称赞（= praise, acclaim, compliment）②推荐（= recommend）；派生：commendable adj. 值得称赞的；commendation n. 表扬，推荐；**作者态度题正面词**；辨析：commend（正式语境下的表扬/推荐）vs. praise（更口语化）",
    "example": "The report commended the government's efforts to reduce carbon emissions while noting that the pace of change remained insufficient to meet the agreed targets.",
    "tags": [
      "#作者态度",
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v196",
    "word": "assess",
    "phonetic": "/əˈses/",
    "meaning": "v. 评估，评价，评定（= evaluate, appraise, rate, estimate）；派生：assessment n. 评估，评价；assessor n. 评估员；搭配：assess the impact/risk/situation 评估影响/风险/情况；近义：evaluate, appraise, gauge, measure",
    "example": "Policymakers must carefully assess both the potential benefits and the risks of artificial intelligence before deciding on an appropriate regulatory framework.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v197",
    "word": "estimate",
    "phonetic": "/ˈestɪmɪt/ (n.)  /ˈestɪmeɪt/ (v.)",
    "meaning": "v. 估计，估算（= calculate roughly, gauge, approximate）；n. 估计，估算；评价；派生：estimation n. 判断，评价；overestimate v. 高估；underestimate v. 低估；搭配：a conservative estimate 保守估计",
    "example": "By the most conservative estimates, the project will require at least twice the budget originally allocated before it can be completed.",
    "tags": [
      "#一词多性",
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v198",
    "word": "overestimate",
    "phonetic": "/ˌəʊvərˈestɪmeɪt/",
    "meaning": "v. 高估，过高评价（over- 超过 + estimate 估计）；n. 过高的估计；近义：overvalue, overrate, exaggerate；反义：underestimate；搭配：overestimate one's abilities/the difficulty 高估自己的能力/难度",
    "example": "Politicians frequently overestimate the public's willingness to accept short-term economic pain in exchange for long-term structural gains.",
    "tags": [
      "#前缀数量",
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v199",
    "word": "underestimate",
    "phonetic": "/ˌʌndərˈestɪmeɪt/",
    "meaning": "v. 低估，过低评价（under- 不足 + estimate 估计）；n. 过低的估计；近义：undervalue, underrate, minimize；反义：overestimate；搭配：underestimate the cost/difficulty/impact 低估成本/难度/影响",
    "example": "Businesses consistently underestimate the long-term cost of high staff turnover, particularly the hidden costs of lost institutional knowledge and training time.",
    "tags": [
      "#前缀数量",
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v200",
    "word": "correspondence",
    "phonetic": "/ˌkɒrɪˈspɒndəns/",
    "meaning": "n. ①**通讯，来往信件**（= communication, letters）②对应关系，一致性（= agreement, parallel）；派生：correspond v. 通信；相符；correspondent n. 记者，通讯员；corresponding adj. 相应的；考研真题：\"comprehensive records of recent correspondence\"",
    "example": "The archive contains correspondence between the two scientists spanning three decades, revealing the gradual evolution of their collaborative research.",
    "tags": [
      "#真题例句",
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v201",
    "word": "depression",
    "phonetic": "/dɪˈpreʃ(ə)n/",
    "meaning": "n. ①**抑郁症，抑郁**（心理健康）②**经济萧条**（= recession, downturn, slump）③低气压（天气）；搭配：economic depression/recession/decline/slowdown 经济衰退；the Great Depression 大萧条；考研2008 Text 1 原文",
    "example": "Women are particularly susceptible to developing depression and anxiety disorders in response to stress, compared to men.",
    "tags": [
      "#真题例句",
      "#一词多义",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v202",
    "word": "anxiety",
    "phonetic": "/æŋˈzaɪəti/",
    "meaning": "n. 焦虑，担忧（= worry, concern, apprehension, unease）；派生：anxious adj. 焦虑的（= worried, apprehensive, uneasy）；搭配：anxiety disorder 焦虑症；social anxiety 社交焦虑；考研2008 Text 1 原文",
    "example": "The study found that students who regularly checked social media reported significantly higher levels of anxiety than those who had reduced their usage.",
    "tags": [
      "#真题例句",
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v203",
    "word": "mass",
    "phonetic": "/mæs/",
    "meaning": "n. ①大众，群众（= the public, the people）②大量，大批（= a large amount/number）；adj. 大规模的，大众的（= large-scale）；搭配：mass media 大众传媒；a mass of / masses of 大量的；mass production 大规模生产",
    "example": "The mass media plays a crucial role in shaping public opinion, particularly on complex issues where most people lack direct experience or expertise.",
    "tags": [
      "#一词多义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v204",
    "word": "era",
    "phonetic": "/ˈɪərə/",
    "meaning": "n. 时代，年代，历史时期（= age, period, epoch, time）；搭配：a new era 新时代；the digital/post-war era 数字/战后时代；考研真题：\"Since the days/era of Aristotle, a search for universal principles has characterized the scientific enterprise.\"",
    "example": "We are living through a pivotal era in which the rapid acceleration of artificial intelligence is fundamentally reshaping the nature of work and human cognition.",
    "tags": [
      "#真题例句",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v205",
    "word": "shape",
    "phonetic": "/ʃeɪp/",
    "meaning": "n. 形状，外形；v. **塑造，制定，影响**（= fashion, mold, design, create）；熟词僻义：shape a policy 制定政策；shape sb.'s character 塑造性格；be in good/bad shape 状况良好/糟糕；同义：fashion v.（考研真题），form, mold",
    "example": "Congress should help to begin shaping conservation measures that will effectively protect the nation's remaining wilderness areas from irreversible development.",
    "tags": [
      "#熟词僻义",
      "#一词多性",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v206",
    "word": "spectacular",
    "phonetic": "/spekˈtækjələ(r)/",
    "meaning": "adj. 壮观的，引人注目的，令人叹为观止的（spect 看 + -acular → 值得一看的）；派生：spectacularly adv.；近义：splendid, magnificent, stunning, breathtaking, impressive；辨析：spectacular 侧重视觉震撼；magnificent 侧重宏伟壮丽",
    "example": "The spectacular growth of China's economy over the past four decades has attracted widespread international attention and transformed the global economic landscape.",
    "tags": [
      "#词根spect",
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v207",
    "word": "interview",
    "phonetic": "/ˈɪntəvjuː/",
    "meaning": "n. ①**面试**（job interview 求职面试）②**采访，访谈**（= press interview, conversation）；v. 面试；采访（inter- 互相 + view/vis 看 → 相互审视）；派生：interviewer n. 面试官/采访者；interviewee n. 被面试者/受访者",
    "example": "During the interview, the candidate was asked to describe a situation in which she had successfully led a team through a period of significant organisational change.",
    "tags": [
      "#词根vid/vis",
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v208",
    "word": "similar",
    "phonetic": "/ˈsɪmɪlə(r)/",
    "meaning": "adj. 相似的，类似的（simil- 相同 + -ar）；搭配：be similar to 与…相似；派生：similarity n. 相似性（= resemblance, analogy）；similarly adv. 相似地，同样地；近义：analogous, comparable, alike, akin to；反义：different, distinct, dissimilar",
    "example": "The two proposals are similar in their goals but differ significantly in their proposed methods and the level of government intervention they require.",
    "tags": [
      "#词根simil/semble",
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v209",
    "word": "hemisphere",
    "phonetic": "/ˈhemɪsfɪə(r)/",
    "meaning": "n. 半球（hemi-/semi- 半 + sphere 球）；the Northern/Southern Hemisphere 北/南半球；the left/right hemisphere of the brain 大脑左/右半球；前缀辨析：hemi- = semi-（半），如 semiconductor 半导体，semicircle 半圆",
    "example": "Climate change is affecting ecosystems across both hemispheres, with scientists recording accelerated glacier melt in both the Arctic and Antarctic regions.",
    "tags": [
      "#前缀数量",
      "#核心词汇"
    ]
  },
  {
    "id": "v210",
    "word": "monologue",
    "phonetic": "/ˈmɒnəlɒɡ/",
    "meaning": "n. 独白；一人独讲（mono- 单一 + logue 说话 → 一个人说话）；辨析：monologue（独白，含\"旁若无人\"之意）vs. dialogue（对话）；搭配：interior/inner monologue 内心独白；deliver a monologue 进行独白；前缀 mono- 亦见于 monopoly, monarchy, monocracy",
    "example": "The politician's speech quickly turned into a monologue, leaving little opportunity for the audience to raise questions or challenge his assertions.",
    "tags": [
      "#词根log/loqu",
      "#前缀数量",
      "#核心词汇"
    ]
  },
  {
    "id": "v211",
    "word": "monopoly",
    "phonetic": "/məˈnɒpəli/",
    "meaning": "n. 垄断，专营权（mono- 单一 + poly/pōlein 销售 → 独家销售）；派生：monopolize v. 垄断，独占（= dominate, control exclusively）；搭配：a monopoly on sth. 对某事的垄断；break up a monopoly 打破垄断；state monopoly 国家垄断；近义：domination, exclusive control",
    "example": "Regulators argued that the proposed merger would create an effective monopoly, leaving consumers with no meaningful choice and eliminating the competitive pressure that keeps prices low.",
    "tags": [
      "#前缀数量",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v212",
    "word": "monarchy",
    "phonetic": "/ˈmɒnəki/",
    "meaning": "n. 君主制，君主政体（mono- 单一 + archy 统治 → 一人统治）；派生：monarch n. 君主，国王（= king, sovereign, ruler）；搭配：constitutional monarchy 君主立宪制；absolute monarchy 专制君主制；对比政体词：democracy 民主，aristocracy 贵族统治，monocracy 独裁",
    "example": "The transition from absolute monarchy to constitutional government in the nineteenth century was often achieved through a combination of reform movements and popular pressure.",
    "tags": [
      "#前缀数量",
      "#词根crat/cracy",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v213",
    "word": "bilingual",
    "phonetic": "/baɪˈlɪŋɡwəl/",
    "meaning": "adj. 双语的（bi- 二 + lingual 语言的）；n. 双语者；搭配：bilingual education/school 双语教育/学校；前缀 bi- 表\"二\"，亦见于 bicycle, bilateral（双边的）, biannual（半年一次的）；反义：monolingual（单语的）；派生：bilingualism n. 双语能力",
    "example": "Research consistently shows that bilingual children develop stronger cognitive flexibility than their monolingual peers, performing better in tasks that require attention switching.",
    "tags": [
      "#前缀数量",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v214",
    "word": "decade",
    "phonetic": "/ˈdekeɪd/",
    "meaning": "n. 十年（dec-/de- 十 + -cade → 十年）；搭配：in recent decades 近几十年；over the past decade 过去十年；辨析：decade（十年）vs. century（百年）vs. millennium（千年）；前缀 dec-/de- 表\"十\"，亦见于 December（第十二月，原第十月）",
    "example": "In recent decades, the pace of technological change has accelerated to the point where entire industries can be disrupted and transformed within just a few years.",
    "tags": [
      "#前缀数量",
      "#核心词汇"
    ]
  },
  {
    "id": "v215",
    "word": "catalog",
    "phonetic": "/ˈkætəlɒɡ/",
    "meaning": "n. 目录，索引；清单（= catalogue）；v. 编入目录，分类记录（cata- 完全 + log 记录 → 完整记录）；引申：a catalog of problems/mistakes/changes 一系列问题/错误/变化；词根 cata- 亦见于 catastrophe（灾难，急转直下）",
    "example": "The report catalogued a series of policy failures that had contributed to the decline of public trust in government over the previous decade.",
    "tags": [
      "#词根log/loqu",
      "#前缀数量",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v216",
    "word": "catastrophe",
    "phonetic": "/kəˈtæstrəfi/",
    "meaning": "n. 灾难，大祸，惨剧（cata- 向下 + strophe 转变 → 急转直下）；派生：catastrophic adj. 灾难性的（= disastrous, devastating, calamitous）；近义：disaster, calamity, devastation, tragedy；搭配：environmental/ecological catastrophe 环境/生态灾难；avert a catastrophe 避免灾难",
    "example": "Scientists warn that failure to limit global warming to 1.5 degrees Celsius could trigger a series of cascading effects amounting to an ecological catastrophe.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v217",
    "word": "upgrade",
    "phonetic": "/ˈʌpɡreɪd/",
    "meaning": "v. ①升级，升档（up- + grade → 提高等级）②提升，晋升（= promote, improve, enhance）；n. 升级，提升；近义（v.②）：promote, raise, elevate, advance；反义：downgrade, demote, degrade；搭配：upgrade a system/skill/infrastructure 升级系统/技能/基础设施",
    "example": "The government announced a multi-billion-dollar programme to upgrade the country's ageing transport infrastructure over the next ten years.",
    "tags": [
      "#前缀数量",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v218",
    "word": "downgrade",
    "phonetic": "/ˈdaʊnɡreɪd/",
    "meaning": "v. ①降级，降档（down- + grade → 降低等级）②**低估，贬低**（= underestimate, belittle, depreciate）；n. 降级，降职；反义：upgrade；近义（②）：underestimate, undervalue, belittle；搭配：downgrade a credit rating/risk assessment 下调信用评级/风险评估",
    "example": "Several major credit agencies downgraded the country's sovereign debt rating following the announcement of unexpectedly large fiscal deficits.",
    "tags": [
      "#前缀数量",
      "#同义置换",
      "#熟词僻义",
      "#核心词汇"
    ]
  },
  {
    "id": "v219",
    "word": "degrade",
    "phonetic": "/dɪˈɡreɪd/",
    "meaning": "v. ①**使恶化，降低质量**（de- 降低 + grade → 降级）②降职，降级③**侮辱，贬低**（= debase, demean, humble）；派生：degradation n. 退化，恶化，降级；degrading adj. 有辱人格的；搭配：degrade the environment/soil 破坏环境/土壤",
    "example": "Intensive farming practices have degraded vast areas of agricultural land, leaving the soil unable to support the crops it once sustained.",
    "tags": [
      "#前缀数量",
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v220",
    "word": "parliament",
    "phonetic": "/ˈpɑːləmənt/",
    "meaning": "n. 议会，国会（= Congress, legislature）（parler 说话 → 讨论辩论的地方）；派生：parliamentary adj. 议会的；搭配：pass a bill in Parliament 在议会通过法案；an act of Parliament 议会法案；对比：Parliament（英/澳）= Congress（美）= legislature（立法机构总称）",
    "example": "The bill was passed by parliament after months of debate, but its implementation was delayed by concerns raised by the upper house.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v221",
    "word": "constitution",
    "phonetic": "/ˌkɒnstɪˈtjuːʃ(ə)n/",
    "meaning": "n. ①**宪法，章程**（= charter, fundamental law）②**体质，体格**（= physique, build, constitution）③构成，组成（con- 一起 + stitute 设立）；熟词僻义：a strong/weak constitution 强健/虚弱的体质；派生：constitutional adj. 宪法的；合乎宪法的；搭配：the Constitution 宪法；a constitutional right 宪法权利",
    "example": "The Supreme Court ruled that the legislation was unconstitutional, as it violated citizens' fundamental rights as guaranteed by the constitution.",
    "tags": [
      "#一词多义",
      "#熟词僻义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v222",
    "word": "jury",
    "phonetic": "/ˈdʒʊəri/",
    "meaning": "n. ①**陪审团**（= panel of jurors）②**评审团，评委**（= panel of judges）；熟词僻义：the jury is still out on sth. 某事尚无定论；搭配：trial by jury 陪审团审判；the jury reached/delivered a verdict 陪审团作出裁决；词源：jur- 公正，法律（同 just, justify）",
    "example": "After deliberating for three days, the jury returned a unanimous verdict of not guilty, citing insufficient evidence to support the prosecution's case.",
    "tags": [
      "#一词多义",
      "#熟词僻义",
      "#核心词汇"
    ]
  },
  {
    "id": "v223",
    "word": "justify",
    "phonetic": "/ˈdʒʌstɪfaɪ/",
    "meaning": "v. 证明…合理，为…辩护（just 公正 + -ify 使 → 使之合乎情理）；派生：justification n. 理由，正当性；unjustified adj. 无理由的，不合理的；搭配：justify a decision/cost/action 为决定/成本/行动辩护；考研真题：\"physicians too often offer aggressive treatment far beyond what is scientifically justified\"",
    "example": "Physicians too often offer aggressive treatment far beyond what is scientifically justified, frustrated by their inability to cure the disease.",
    "tags": [
      "#真题例句",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v224",
    "word": "supreme",
    "phonetic": "/suːˈpriːm/",
    "meaning": "adj. 最高的，至上的，最重要的（= highest, paramount, ultimate）；搭配：the Supreme Court 最高法院；supreme authority/power 最高权力；supreme effort 最大努力；make the supreme sacrifice 做出最大牺牲（献出生命）；近义：highest, topmost, paramount, ultimate, sovereign",
    "example": "The Supreme Court's ruling established a legal precedent that would reshape how lower courts interpreted citizens' rights in cases involving digital privacy.",
    "tags": [
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v225",
    "word": "uniform",
    "phonetic": "/ˈjuːnɪfɔːm/",
    "meaning": "adj. 统一的，一致的，均匀的（uni- 一 + form 形态 → 形态一致）；n. 制服，校服；派生：uniformly adv.；uniformity n. 一致性，统一性；近义（adj.）：consistent, standardized, homogeneous；前缀 uni- 亦见于 unique, unit, unify, university",
    "example": "The government's failure to apply uniform standards across different regions led to widespread confusion and inconsistency in the enforcement of environmental regulations.",
    "tags": [
      "#前缀数量",
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v226",
    "word": "unique",
    "phonetic": "/juːˈniːk/",
    "meaning": "adj. ①**独一无二的，唯一的**（uni- 一 → 仅此一个）②**独特的，异乎寻常的**（= distinctive, singular, unparalleled）；搭配：unique to sth. 为…所特有；派生：uniquely adv.；uniqueness n.；近义：singular, unparalleled, one-of-a-kind",
    "example": "Each language offers a unique window into the culture that produced it, encoding distinctions and relationships that may have no equivalent in other tongues.",
    "tags": [
      "#前缀数量",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v227",
    "word": "archive",
    "phonetic": "/ˈɑːkaɪv/",
    "meaning": "n. 档案，档案馆；档案库（archon 统治 → 官方保存的文件）；v. 把…存档，归档；派生：archival adj. 档案的；搭配：the national archives 国家档案馆；archive material/footage 档案资料/历史影像；词根 arch- 亦见于 monarchy（君主制），hierarchy（等级制度）",
    "example": "The documentary was based on previously classified archive material that had only recently been released to the public under freedom-of-information legislation.",
    "tags": [
      "#一词多性",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v228",
    "word": "analogous",
    "phonetic": "/əˈnæləɡəs/",
    "meaning": "adj. 相似的，类似的（simil/analog 相似 + -ous）；搭配：be analogous to 与…类似于（= be similar to, be comparable to, be akin to）；辨析：analogous（强调功能或结构相似，多用于学术语境）vs. similar（泛指相似）；派生：analogy n. 类比，相似（= parallel, comparison）",
    "example": "The relationship between a computer's operating system and its applications is, in many ways, analogous to the relationship between the laws of a country and the behaviour of its citizens.",
    "tags": [
      "#词根simil/semble",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v229",
    "word": "mechanical",
    "phonetic": "/mɪˈkænɪk(ə)l/",
    "meaning": "adj. ①机械的，机器的②**呆板的，机械式的**（= rigid, automatic, unthinking）；派生：mechanic n. 机械师，技工；mechanics n. 力学，机械学；mechanism n. 机制，机构；熟词僻义：考研笔记直接标注 mechanical = rigid，指思维或反应缺乏创意",
    "example": "Critics argued that the country's education system encouraged mechanical memorisation of facts rather than the development of independent critical thinking skills.",
    "tags": [
      "#熟词僻义",
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v230",
    "word": "psychology",
    "phonetic": "/saɪˈkɒlədʒi/",
    "meaning": "n. 心理学；心理状态（psych- 心灵 + -ology 学科）；派生：psychological adj. 心理的（= mental, emotional）；psychologist n. 心理学家；搭配：physical and psychological health = bodily and mental health 身心健康；后缀 -ology 表学科，亦见于 ecology, biology, geology, sociology",
    "example": "Research in positive psychology suggests that gratitude practices can significantly improve wellbeing and resilience, even among people facing serious adversity.",
    "tags": [
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v231",
    "word": "ecology",
    "phonetic": "/ɪˈkɒlədʒi/",
    "meaning": "n. 生态学；（某地区的）生态（eco- 家园/环境 + -ology）；派生：ecological adj. 生态的；ecologist n. 生态学家；ecosystem n. 生态系统；搭配：ecological disaster/balance 生态灾难/平衡；ecological footprint 生态足迹",
    "example": "The construction of the dam fundamentally altered the river's ecology, threatening dozens of fish species that had inhabited the waterway for thousands of years.",
    "tags": [
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v232",
    "word": "biology",
    "phonetic": "/baɪˈɒlədʒi/",
    "meaning": "n. 生物学（bio- 生命 + -ology）；（某地区的）生物状况；派生：biological adj. 生物的；biologist n. 生物学家；biodiversity n. 生物多样性；词根 bio- 亦见于 biography（传记），autobiography（自传），biofuel（生物燃料）",
    "example": "Advances in molecular biology have made it possible to identify the genetic basis of many hereditary diseases that were once considered untreatable.",
    "tags": [
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v233",
    "word": "semiconductor",
    "phonetic": "/ˌsemɪkənˈdʌktə(r)/",
    "meaning": "n. 半导体（semi- 半 + conductor 导体 → 导电能力介于导体与绝缘体之间的物质）；前缀 semi- = hemi-（半），亦见于 semicircle（半圆），semifinal（半决赛），semi-finished（半成品）；搭配：the semiconductor industry/chip 半导体产业/芯片",
    "example": "Competition for dominance in the semiconductor industry has become one of the defining geopolitical tensions of the twenty-first century.",
    "tags": [
      "#前缀数量",
      "#核心词汇"
    ]
  },
  {
    "id": "v234",
    "word": "intricate",
    "phonetic": "/ˈɪntrɪkɪt/",
    "meaning": "adj. 错综复杂的，精细的，精密的（= complex, sophisticated, elaborate）；近义：complex, complicated, elaborate, involved；反义：simple, straightforward；考研真题：peering into \"their intricate IT systems and business processes\"",
    "example": "The restoration of the medieval ceiling required months of painstaking work by specialists who had to unravel an intricate network of structural damage hidden beneath layers of plaster.",
    "tags": [
      "#真题例句",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v235",
    "word": "sphere",
    "phonetic": "/sfɪə(r)/",
    "meaning": "n. ①球体，球形②**领域，范围，圈子**（= field, domain, realm, area）；熟词僻义：考研②义更常见；sphere of influence 势力范围；public/private sphere 公共/私人领域；考研真题2008：\"women appear to be ahead in at least one undesirable category\" 上文 \"spheres of modern life\"",
    "example": "While still catching up to men in some spheres of modern life, women appear to be way ahead in at least one undesirable category — vulnerability to stress-related illness.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#同义置换",
      "#真题例句",
      "#核心词汇"
    ]
  },
  {
    "id": "v236",
    "word": "ban",
    "phonetic": "/bæn/",
    "meaning": "n. 禁令，禁止（= prohibition, restriction, embargo）；v. 禁止，取缔（= prohibit, forbid, outlaw）；搭配：impose/lift a ban on sth. 颁布/解除禁令；ban sb. from doing sth. 禁止某人做某事；考研真题：\"a blanket ban on foreign unskilled labor in Japan\"",
    "example": "There's already a blanket ban on foreign unskilled labour in Japan, a policy that critics argue is increasingly at odds with the country's severe demographic challenges.",
    "tags": [
      "#真题例句",
      "#同义置换",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v237",
    "word": "hormone",
    "phonetic": "/ˈhɔːməʊn/",
    "meaning": "n. 激素，荷尔蒙（内分泌腺产生的化学物质）；搭配：sex hormones 性激素；stress hormones 应激激素；hormone levels 激素水平；hormone therapy 激素疗法；考研真题2008 Text 1：\"sex hormones somehow affect the stress response\"",
    "example": "Studies of both animals and humans have shown that sex hormones somehow affect the stress response, causing females under stress to produce more of the trigger chemicals than males.",
    "tags": [
      "#真题例句",
      "#核心词汇"
    ]
  },
  {
    "id": "v238",
    "word": "biological",
    "phonetic": "/ˌbaɪəˈlɒdʒɪk(ə)l/",
    "meaning": "adj. ①**生物的，生理的**（= physical, physiological, bodily）②**亲生的**（= natural, birth）；熟词僻义：biological father/mother 亲生父/母；biological weapon/warfare 生物武器/战争；派生：biologically adv.；近义（①）：physical, physiological, bodily",
    "example": "Women are biologically more vulnerable to stress-related disorders, a difference researchers attribute to the interaction between sex hormones and the body's stress-response systems.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v239",
    "word": "conductor",
    "phonetic": "/kənˈdʌktə(r)/",
    "meaning": "n. ①**（乐队）指挥**（= director, maestro）②列车员，售票员③导体（电学）；派生：conduct v. 指挥；进行；行为；n. 行为，品行（= behaviour, manner）；派生链：conduct → conductor；考研真题2011 Text 1：\"no air of the formidable conductor about him\"",
    "example": "Gilbert was described as an unpretentious musician with no air of the formidable conductor about him, a quality that endeared him to players and audiences alike.",
    "tags": [
      "#真题例句",
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v240",
    "word": "appointment",
    "phonetic": "/əˈpɔɪntmənt/",
    "meaning": "n. ①**任命，委任**（= nomination, designation, assignment）②**约会，预约**（= engagement, booking, meeting）；熟词僻义：考研两义均重要；派生：appoint v. 任命；disappoint v. 使失望（dis- + appoint）；考研真题2011：\" the appointment came as such a surprise\"",
    "example": "One of the reasons why the appointment came as such a surprise was that Gilbert was comparatively little known outside specialist musical circles.",
    "tags": [
      "#真题例句",
      "#一词多义",
      "#熟词僻义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v241",
    "word": "hitherto",
    "phonetic": "/ˌhɪðəˈtuː/",
    "meaning": "adv. 迄今，到目前为止（= previously, until now, so far, up to now）；用法：正式书面语；多修饰形容词：hitherto unknown/unexplored/undiscovered 迄今未知/未探索/未发现的；考研真题2011 Text 1：\"an orchestra that has hitherto been led by musicians like Mahler and Boulez\"",
    "example": "The discovery shed light on hitherto unexplained anomalies in the data that had puzzled researchers for over a decade.",
    "tags": [
      "#真题例句",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v242",
    "word": "faint",
    "phonetic": "/feɪnt/",
    "meaning": "adj. ①微弱的，不清楚的（= feeble, slight, dim, vague）②**faint praise 勉强的称赞**（含轻视，实为批评）；v. 昏倒，晕倒（= pass out, lose consciousness）；熟词僻义：faint praise 是考研态度题经典词汇，表面称赞实含批评；近义（adj.①）：feeble, slight, weak；反义：strong, vivid",
    "example": "As a description of the next conductor of a great orchestra, calling him \"unpretentious\" struck at least some readers as faint praise.",
    "tags": [
      "#真题例句",
      "#熟词僻义",
      "#一词多性",
      "#作者态度",
      "#核心词汇"
    ]
  },
  {
    "id": "v243",
    "word": "intellectual",
    "phonetic": "/ˌɪntəˈlektʃuəl/",
    "meaning": "adj. 智力的，脑力的，理智的（= mental, cognitive, cerebral）；n. 知识分子，学者（= scholar, thinker, academic）；派生：intellect n. 智力，理解力；intellectually adv.；近义（n.）：scholar, thinker, academic；考研真题2008：\"contributed to the intellectual and cultural life of the West\"",
    "example": "This group generally do well in IQ tests and have contributed disproportionately to the intellectual and cultural life of the West.",
    "tags": [
      "#真题例句",
      "#一词多性",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v244",
    "word": "proportion",
    "phonetic": "/prəˈpɔːʃ(ə)n/",
    "meaning": "n. ①**比例，比率**（= ratio, percentage, share）②均衡，协调③部分，份额；搭配：a proportion of 一部分；in proportion to 与…成比例；out of proportion 失调的；派生：proportionate adj. 成比例的；disproportionate adj. 不成比例的（= unequal）",
    "example": "A disproportionate share of the country's wealth is concentrated in the top one per cent, a proportion that has grown steadily over the past three decades.",
    "tags": [
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v245",
    "word": "glowing",
    "phonetic": "/ˈɡləʊɪŋ/",
    "meaning": "adj. ①**热情洋溢的，赞扬性的**（= enthusiastic, favorable, complimentary）②发光的，炽热的；熟词僻义：考研语境①义更重要；a glowing report/review/tribute 热情洋溢的报告/评价/颂词；**作者态度正面词**；近义（①）：enthusiastic, glowing, effusive, complimentary；考研：\"visions of the future were largely glowingly positive\"",
    "example": "Up until a few decades ago, our visions of the future were largely glowingly positive, shaped by a widespread faith in the power of technology to improve human life.",
    "tags": [
      "#真题例句",
      "#熟词僻义",
      "#作者态度",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v246",
    "word": "deride",
    "phonetic": "/dɪˈraɪd/",
    "meaning": "v. 嘲笑，讥笑，奚落（de- 贬低 + ride/rid 笑 → 贬低地嘲笑）；派生：derision n. 嘲笑（= ridicule, mockery）；derisive adj. 嘲弄的；derisory adj. **极少的**（= negligible, trivial）；近义：mock, ridicule, scoff at, sneer at；**否定态度词**；考研真题：\"the U.S. workforce was derided as poorly educated\"",
    "example": "Not long ago, the U.S. workforce was derided as poorly educated and one of the primary causes of poor economic performance relative to Japan.",
    "tags": [
      "#真题例句",
      "#否定态度",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v247",
    "word": "oblige",
    "phonetic": "/əˈblaɪdʒ/",
    "meaning": "v. ①**迫使，强制**（= force, compel, require）②使感激，帮助；be obliged to do sth. 被迫做某事；be obliged to sb. 对某人感激；派生：obligation n. 义务，责任（= duty, responsibility, commitment）；obligatory adj. 强制的（= compulsory, mandatory）；考研真题：\"We are obliged to them because some of these languages have since vanished\"",
    "example": "We are obliged to those scholars who devoted their lives to recording languages that have since vanished, preserving knowledge that would otherwise have been lost for ever.",
    "tags": [
      "#真题例句",
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v248",
    "word": "court",
    "phonetic": "/kɔːt/",
    "meaning": "n. ①**法庭，法院**（= tribunal）②球场（basketball/tennis court）③宫廷，王室；v. **讨好，追求；招致**（= woo, seek, invite）；熟词僻义：court disaster/controversy 招致灾难/争议；搭配：take sb. to court 起诉；a court ruling/order 法庭裁决/命令；court martial 军事法庭",
    "example": "The company's decision to court controversy by publicly disputing scientific consensus ultimately led to a series of costly legal battles in courts across several countries.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v249",
    "word": "congress",
    "phonetic": "/ˈkɒŋɡrəs/",
    "meaning": "n. ①（美国）国会，议会（= parliament, legislature）②学术大会，代表大会（= conference, convention, assembly）；搭配：Congress passed/approved the bill 国会通过法案；an international congress 国际代表大会；辨析：Congress（美国）= Parliament（英国）= legislature（立法机构总称）",
    "example": "Congress should help to begin fashioning conservation measures that will effectively protect the nation's remaining wilderness areas from commercial development.",
    "tags": [
      "#真题例句",
      "#一词多义",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v250",
    "word": "sovereign",
    "phonetic": "/ˈsɒvrɪn/",
    "meaning": "adj. 拥有最高权力的，独立自主的（= supreme, autonomous, independent）；n. 君主，国王（= monarch, ruler）；搭配：sovereign state/nation 主权国家；sovereign debt 国家债务（= government debt）；sovereign power 最高权力；近义（adj.）：supreme, autonomous, paramount",
    "example": "The treaty recognised the country as a fully sovereign state, with the right to determine its own foreign policy free from outside interference.",
    "tags": [
      "#同义置换",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v251",
    "word": "workforce",
    "phonetic": "/ˈwɜːkfɔːs/",
    "meaning": "n. 劳动力，员工总数，工作人员（= labor force, personnel, staff, employees）；搭配：the national/global workforce 全国/全球劳动力；a skilled/educated workforce 有技能/受过教育的劳动力；考研真题2008附近：\"the U.S. workforce was derided as poorly educated\"",
    "example": "Not long ago, the U.S. workforce was derided as poorly educated compared to its Japanese counterpart, a perception that drove major investment in vocational training.",
    "tags": [
      "#真题例句",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v252",
    "word": "performance",
    "phonetic": "/pəˈfɔːməns/",
    "meaning": "n. ①表演，演出（= show, presentation）②**业绩，表现，成绩**（= achievement, result, record）③**执行，履行**（= execution, implementation）；熟词僻义：考研②③义更常考；economic performance 经济表现；performance review 绩效评估；派生：perform v. 执行；表演；performer n.",
    "example": "The poor economic performance of the decade was attributed by analysts to a combination of structural weaknesses and a series of ill-timed policy decisions.",
    "tags": [
      "#熟词僻义",
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v253",
    "word": "indefinite",
    "phonetic": "/ɪnˈdefɪnɪt/",
    "meaning": "adj. ①**不确定的，模糊的**（= vague, unclear, uncertain）②**无限期的**；indefinitely adv. 无限期地，不知多久（= for an unknown period of time）；派生：definite adj. 确定的，明确的（= certain, clear）；definitely adv. 肯定地；反义：definite, precise, specific",
    "example": "With negotiations stalled indefinitely, the workers had no choice but to continue their strike action in the hope that management would eventually return to the table.",
    "tags": [
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v254",
    "word": "geology",
    "phonetic": "/dʒiˈɒlədʒi/",
    "meaning": "n. 地质学；地质构造（geo- 地球 + -ology 学科）；派生：geological adj. 地质的；geologist n. 地质学家；geography n. 地理学（geo- + -graphy 书写）；词根 geo- 亦见于 geopolitics（地缘政治），geometry（几何学）；后缀 -ology 亦见于 psychology, ecology, biology, sociology",
    "example": "The geology of the region made it particularly prone to seismic activity, a factor that urban planners had seriously underestimated when approving large-scale construction projects.",
    "tags": [
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v255",
    "word": "spy",
    "phonetic": "/spaɪ/",
    "meaning": "n. 间谍，特工（= secret agent, informant）；v. ①从事间谍活动②**发现，看见**（= spot, notice，词根 spect/spise → spy，y→i 元音转换）；搭配：spy on sb. 监视某人；online spying 网络间谍活动；industrial spy 工业间谍",
    "example": "The revelations about online spying by government agencies prompted a global debate about the appropriate boundaries between national security and individual privacy.",
    "tags": [
      "#词根spect",
      "#熟词僻义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v256",
    "word": "obligation",
    "phonetic": "/ˌɒblɪˈɡeɪʃ(ə)n/",
    "meaning": "n. 义务，责任，职责（= duty, responsibility, commitment）（oblige 迫使 → 被迫承担之事）；搭配：a moral/legal obligation 道德/法律义务；be under an obligation to do 有义务做某事；fulfil/meet an obligation 履行义务；无义务：without obligation",
    "example": "The government has a clear obligation to ensure that all citizens have access to clean water, regardless of their income or geographic location.",
    "tags": [
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v257",
    "word": "obligatory",
    "phonetic": "/əˈblɪɡətri/",
    "meaning": "adj. 强制的，义务的，必须遵守的（= compulsory, mandatory, required, binding）；辨析：obligatory（法律或规定上强制）vs. voluntary（自愿的）；派生：obligatorily adv.；近义：compulsory, mandatory, required, incumbent, binding",
    "example": "Attendance at the induction programme is obligatory for all new employees, who are expected to complete it within their first month of joining the organisation.",
    "tags": [
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v258",
    "word": "unskilled",
    "phonetic": "/ˌʌnˈskɪld/",
    "meaning": "adj. 无特殊技能的，非熟练的（un- + skilled）；搭配：unskilled labor/workers 非熟练劳动力/工人；unskilled jobs 非技术性工作；反义：skilled, qualified, trained；考研真题：\"a blanket ban on foreign unskilled labor in Japan\"",
    "example": "There's already a blanket ban on foreign unskilled labour in Japan, a policy that economists argue exacerbates the country's deepening demographic and productivity challenges.",
    "tags": [
      "#真题例句",
      "#核心词汇"
    ]
  },
  {
    "id": "v259",
    "word": "labor",
    "phonetic": "/ˈleɪbə(r)/",
    "meaning": "n. ①**劳动力，劳工**（= workforce, workers, manpower）②**劳动，工作**③**分娩**；v. 劳动；努力；（英式：labour）；熟词僻义：labor 作\"分娩\"讲；搭配：labor force = workforce 劳动力；skilled/unskilled labor 熟练/非熟练工；manual labor 体力劳动；Labor Day 劳动节",
    "example": "The introduction of automation has displaced large numbers of low-skilled workers, forcing policymakers to rethink the traditional relationship between labor and economic growth.",
    "tags": [
      "#真题例句",
      "#熟词僻义",
      "#一词多义",
      "#核心词汇"
    ]
  },
  {
    "id": "v260",
    "word": "leakage",
    "phonetic": "/ˈliːkɪdʒ/",
    "meaning": "n. 泄漏，渗漏；（信息、数据的）外泄（= leak, disclosure, breach）；派生：leak v./n. 泄漏；leaky adj. 漏水的；搭配：data leakage 数据泄露；a leakage of information 信息外泄；考研真题：\"massive leakages of customer and employee data\"",
    "example": "Several massive leakages of customer and employee data this year have left managers hurriedly examining their intricate IT systems in search of potential vulnerabilities.",
    "tags": [
      "#真题例句",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v261",
    "word": "undesirable",
    "phonetic": "/ˌʌndɪˈzaɪərəb(ə)l/",
    "meaning": "adj. 不理想的，不受欢迎的，有害的（un- + desirable）；n. 不受欢迎的人/事；派生：desirable adj. 理想的，合意的（= preferable, advantageous, attractive）；近义：unwanted, unwelcome, objectionable, harmful；考研真题2008：\"way ahead in at least one undesirable category\"",
    "example": "While still catching up to men in some spheres of modern life, women appear to be way ahead in at least one undesirable category — susceptibility to stress-related illness.",
    "tags": [
      "#真题例句",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v262",
    "word": "category",
    "phonetic": "/ˈkætɪɡəri/",
    "meaning": "n. 类别，种类，范畴（= class, type, group, classification）；派生：categorize v. 分类，归类（= classify, group, sort）；categorical adj. 明确的，绝对的；categorical denial/refusal 断然否认/拒绝；搭配：fall into a category 属于某类别",
    "example": "The researchers divided the respondents into three broad categories based on their reported levels of physical activity and dietary habits over the previous twelve months.",
    "tags": [
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v263",
    "word": "inclination",
    "phonetic": "/ˌɪnklɪˈneɪʃ(ə)n/",
    "meaning": "n. ①**倾向，意愿**（= tendency, preference, disposition, propensity）②倾斜，斜度；派生：incline v. 倾向（= tend, lean）；inclined adj. 有…倾向的；be inclined to 倾向于；搭配：have an inclination to do/for sth. 有做某事的倾向；考研真题2008选项D：\"Men and women show different inclinations when faced with stress\"",
    "example": "Men and women show different inclinations when faced with stress, with research suggesting that women are more likely to seek social support while men tend to withdraw.",
    "tags": [
      "#真题例句",
      "#一词多义",
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v264",
    "word": "cultural",
    "phonetic": "/ˈkʌltʃərəl/",
    "meaning": "adj. 文化的，文化上的；派生：culture n. 文化，培养；cultivate v. 培养，耕种（= foster, develop, nurture）；cultural heritage/diversity/exchange 文化遗产/多样性/交流；搭配：intellectual and cultural life 知识与文化生活；考研2008：\"contributed to the intellectual and cultural life of the West\"",
    "example": "This group has generally performed well in IQ tests and has contributed disproportionately to the intellectual and cultural life of the West.",
    "tags": [
      "#真题例句",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v265",
    "word": "vanish",
    "phonetic": "/ˈvænɪʃ/",
    "meaning": "v. 消失，不见，绝迹（= disappear, fade away, die out, cease to exist）；搭配：vanish into thin air 凭空消失；vanish from sight 从视野中消失；派生：vanishing adj. 消失的；vanishing point 消失点；evanescent adj. 短暂消逝的；考研真题：\"some of these languages have since vanished\"",
    "example": "We are obliged to those scholars who recorded languages that have since vanished, as the peoples who spoke them died out or became assimilated into surrounding cultures.",
    "tags": [
      "#真题例句",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v266",
    "word": "finite",
    "phonetic": "/ˈfaɪnaɪt/",
    "meaning": "adj. 有限的（= limited, bounded, restricted）；派生：infinite adj. 无限的（= unlimited, endless, boundless）；infinity n. 无限，无穷；搭配：finite resources/time/capacity 有限的资源/时间/能力；考研真题：\"a government with finite resources should stop paying for medical care beyond a certain age\"",
    "example": "Some scholars conclude that a government with finite resources should simply stop paying for medical care that sustains life beyond a certain age.",
    "tags": [
      "#真题例句",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v267",
    "word": "generate",
    "phonetic": "/ˈdʒenəreɪt/",
    "meaning": "v. ①**产生，生成**（= produce, create, yield）②**引发，激起**（= cause, spark, trigger）；派生：generation n. 产生；一代人（= cohort, age group）；generator n. 发电机；general adj. 一般的；词根 gen- 亦见于 genuine（真正的），gender，genesis（起源）",
    "example": "The new renewable energy facilities are expected to generate enough electricity to power the entire city, eliminating its dependence on coal-fired power stations.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v268",
    "word": "stress",
    "phonetic": "/stres/",
    "meaning": "n. ①**压力，紧张**（= pressure, strain, tension）②**强调，重点**（= emphasis）③重音（语言学）；v. ①**强调**（= emphasise, highlight, underline）②使紧张；熟词僻义：stress 作\"强调\"义是考研重点；搭配：under stress 在压力下；stress the importance of 强调…重要性；考研真题2008 T1 全篇核心词",
    "example": "Studies have shown that sex hormones affect the stress response, causing females to produce more trigger chemicals than males under the same conditions.",
    "tags": [
      "#真题例句",
      "#熟词僻义",
      "#一词多义",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v269",
    "word": "reproductive",
    "phonetic": "/ˌriːprəˈdʌktɪv/",
    "meaning": "adj. 生殖的，繁殖的（re- + produce 产生 + -ive）；搭配：reproductive organs 生殖器官；reproductive rights 生育权；reproductive system 生殖系统；派生：reproduce v. 繁殖；复制；reproduction n. 繁殖；复制品；reproductive health 生殖健康；考研真题2008 T1：\"the female reproductive organs\"",
    "example": "When stressed-out female rats had their ovaries — the female reproductive organs — removed, their chemical responses to stress became equal to those of the males.",
    "tags": [
      "#真题例句",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v270",
    "word": "fundamental",
    "phonetic": "/ˌfʌndəˈment(ə)l/",
    "meaning": "adj. **基本的，根本的，基础的**（= basic, essential, primary, underlying）；n. (pl.) 基本原则，基础；派生：fundamentally adv. 根本上地，本质上；fundamentalism n. 原教旨主义；搭配：fundamental change/right/difference 根本性变化/权利/差异；be fundamental to 对…至关重要",
    "example": "Access to clean water and basic sanitation is a fundamental human right that should not be treated as a commodity subject to the logic of the market.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v271",
    "word": "prevalent",
    "phonetic": "/ˈprevələnt/",
    "meaning": "adj. 普遍的，流行的，广泛存在的（= widespread, common, rampant, pervasive）；派生：prevalence n. 流行，普遍性；prevail v. 占优势，盛行；搭配：prevalent among/in 在…中普遍；近义：widespread, common, pervasive, rampant, ubiquitous",
    "example": "Anxiety disorders are particularly prevalent among young adults, with rates continuing to rise in the years following the widespread adoption of social media.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v272",
    "word": "widespread",
    "phonetic": "/ˈwaɪdspred/",
    "meaning": "adj. 广泛的，普遍的，大面积的（= extensive, prevalent, common, pervasive）；搭配：widespread concern/support/damage/belief 普遍的担忧/支持/破坏/看法；widespread adoption 广泛采用；近义：extensive, prevalent, common, pervasive, ubiquitous",
    "example": "The government's austerity programme provoked widespread protests, with demonstrations taking place in cities across the country over several consecutive weekends.",
    "tags": [
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v273",
    "word": "inevitable",
    "phonetic": "/ɪnˈevɪtəb(ə)l/",
    "meaning": "adj. 不可避免的，必然发生的（in- 否定 + evitable 可避免的）；n. the inevitable 不可避免的事；派生：inevitably adv. 不可避免地（= unavoidably, necessarily）；inevitability n. 必然性；近义：unavoidable, inescapable, certain, necessary, bound to happen",
    "example": "Given the accelerating pace of automation, it seems inevitable that many jobs currently performed by humans will be taken over by machines within the next two decades.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v274",
    "word": "prevail",
    "phonetic": "/prɪˈveɪl/",
    "meaning": "v. ①**盛行，流行，普遍存在**（= be prevalent, be widespread）②**占优势，获胜**（= triumph, win, succeed）③prevail on/upon sb. to do **说服某人做某事**（= persuade, convince）；派生：prevalent adj. 普遍的；prevailing adj. 占主导地位的，当前的（= dominant, current）",
    "example": "The prevailing political ideology of the era held that market forces alone were sufficient to ensure fair outcomes, a view that continued to prevail well into the 1980s.",
    "tags": [
      "#一词多义",
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v275",
    "word": "controversy",
    "phonetic": "/ˈkɒntrəvɜːsi/",
    "meaning": "n. 争议，争论，争辩（= dispute, debate, argument, contention）；派生：controversial adj. 有争议的（= debatable, contentious）；controversially adv.；搭配：cause/spark/generate controversy 引发争议；at the centre of controversy 处于争议中心；a matter/subject of controversy 争议话题",
    "example": "The publication of the study sparked considerable controversy, with some researchers questioning its methodology while others argued its conclusions had been systematically misrepresented.",
    "tags": [
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v276",
    "word": "hypothesis",
    "phonetic": "/haɪˈpɒθɪsɪs/",
    "meaning": "n. 假设，假说（= assumption, premise, theory, proposition）（pl. hypotheses）；派生：hypothetical adj. 假设的，假定的（= theoretical, speculative）；hypothetically adv.；搭配：put forward/test/support/challenge a hypothesis 提出/检验/支持/挑战假设；近义：assumption, premise, theory, postulate, conjecture",
    "example": "Scientists must test their hypotheses through carefully designed experiments, ensuring that variables are properly controlled and results can be independently replicated.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v277",
    "word": "reform",
    "phonetic": "/rɪˈfɔːm/",
    "meaning": "n./v. 改革，改革措施（re- + form 形态 → 重新塑造）；搭配：economic/educational/welfare reform 经济/教育/福利改革；call for reform 呼吁改革；reform the system 改革体制；派生：reformer n. 改革者；reformation n. 改革；近义（v.）：change, transform, overhaul, restructure, revamp",
    "example": "The sweeping welfare reforms introduced in the 1990s fundamentally altered the relationship between the state and citizens dependent on public support.",
    "tags": [
      "#一词多性",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v278",
    "word": "regulate",
    "phonetic": "/ˈreɡjuleɪt/",
    "meaning": "v. 规定，管理，调节（= control, govern, manage, oversee）；派生：regulation n. 规定，法规（= rule, law, directive, statute）；regulatory adj. 监管的；regulator n. 监管机构；deregulate v. 解除管制；搭配：regulate the market/industry/environment 管理市场/行业/环境",
    "example": "There is growing pressure on governments to more effectively regulate the technology sector, particularly with regard to data privacy, algorithmic bias, and market concentration.",
    "tags": [
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v279",
    "word": "eliminate",
    "phonetic": "/ɪˈlɪmɪneɪt/",
    "meaning": "v. 消除，排除，淘汰（e- 出 + limin- 门槛 → 把…推出门去）；派生：elimination n. 消除，淘汰；近义：remove, eradicate, abolish, rule out, get rid of, weed out；搭配：eliminate poverty/inequality/risk 消除贫困/不平等/风险",
    "example": "The aim of the campaign is to eliminate plastic waste from the ocean by combining large-scale clean-up operations with tighter regulations on single-use plastics.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v280",
    "word": "restrict",
    "phonetic": "/rɪˈstrɪkt/",
    "meaning": "v. 限制，约束（re- 回 + strict 绑紧 → 拉回约束）；派生：restriction n. 限制；restricted adj. 受限制的；restrictive adj. 限制性的；搭配：restrict access/freedom/growth 限制使用权/自由/增长；near synonym：limit, confine, constrain, curb, inhibit",
    "example": "Countries have increasingly moved to restrict the operations of foreign technology companies, citing concerns about data sovereignty and national security.",
    "tags": [
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v281",
    "word": "prohibit",
    "phonetic": "/prəˈhɪbɪt/",
    "meaning": "v. 禁止，阻止（pro- 在前 + hibit 持 → 挡在前面不让过）；派生：prohibition n. 禁止，禁令（= ban）；prohibitive adj. **价格过高的**（= exorbitant, excessive）；搭配：prohibit smoking/discrimination 禁止吸烟/歧视；be prohibited from doing sth. 被禁止做某事；熟词僻义：prohibitive cost 高得令人望而却步的费用",
    "example": "The treaty prohibits the use of chemical weapons in armed conflict under any circumstances, yet enforcement mechanisms remain inadequate in the absence of a functioning international court.",
    "tags": [
      "#熟词僻义",
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v282",
    "word": "distinguish",
    "phonetic": "/dɪˈstɪŋɡwɪʃ/",
    "meaning": "v. ①**区分，辨别**（= differentiate, tell apart, discriminate between）②**使有别于，使突出**；派生：distinguished adj. **杰出的，卓越的**（= famous, renowned, eminent）；distinguishable adj. 可区分的；搭配：distinguish A from B 区分A和B；考研：\"be famous/noted/renowned/celebrated/distinguished for\"",
    "example": "It is important to distinguish between correlation and causation: the fact that two variables move together does not necessarily mean that one causes the other.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v283",
    "word": "identify",
    "phonetic": "/aɪˈdentɪfaɪ/",
    "meaning": "v. ①**识别，认出**（= recognise, spot, detect）②**确定，查明**（= determine, establish）③identify with **认同，产生共鸣**；派生：identity n. 身份，特征；identification n. 识别，身份证明；identical adj. 完全相同的（= the same, indistinguishable）",
    "example": "Researchers have identified a clear link between early childhood nutrition and long-term cognitive development, reinforcing the case for investment in pre-school feeding programmes.",
    "tags": [
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v284",
    "word": "clarify",
    "phonetic": "/ˈklærɪfaɪ/",
    "meaning": "v. 阐明，澄清（clar- 清楚 + -ify 使 → 使清楚）；派生：clarification n. 阐明，澄清；clarity n. 清晰，清楚（= clearness, lucidity）；近义：explain, elucidate, shed light on, elaborate on；搭配：clarify a point/position/misunderstanding 阐明观点/立场/误解",
    "example": "The committee asked the minister to clarify the government's position on climate finance, following a series of apparently contradictory statements made by different officials.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v285",
    "word": "interpret",
    "phonetic": "/ɪnˈtɜːprɪt/",
    "meaning": "v. ①**解释，诠释，理解**（= explain, construe, account for）②**口译，翻译**（= translate）；派生：interpretation n. 解释，理解，诠释；interpreter n. 口译员；interpretive adj.；搭配：interpret the data/results/text 解读数据/结果/文本；open to interpretation 有多种理解",
    "example": "The results of this study are open to interpretation, and different researchers have reached markedly different conclusions depending on the analytical framework they apply.",
    "tags": [
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v286",
    "word": "infer",
    "phonetic": "/ɪnˈfɜː(r)/",
    "meaning": "v. 推断，推论（in- 向内 + fer 带 → 把证据带入内心推理）；派生：inference n. 推断，结论；inferable adj. 可推断的；近义：deduce, conclude, gather, reason, draw conclusions；**辨析（考研重点）：infer（读者/听者根据线索推断）vs. imply（作者/说者主动暗示）**",
    "example": "From the author's choice of vocabulary and the examples selected, readers can infer that she is broadly sympathetic to the arguments made by the reform movement.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v287",
    "word": "derive",
    "phonetic": "/dɪˈraɪv/",
    "meaning": "v. ①**来源于，起源于**（= stem from, originate from, come from）②**获得，得到**（= obtain, gain, draw）；搭配：derive from 来源于；derive benefit/satisfaction/pleasure from 从中获益/满足/乐趣；派生：derivative adj./n. 派生的；衍生物；derivation n. 派生，词源",
    "example": "Much of English legal terminology is derived from Latin and Norman French, reflecting the successive waves of linguistic influence that shaped the language over centuries.",
    "tags": [
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v288",
    "word": "imply",
    "phonetic": "/ɪmˈplaɪ/",
    "meaning": "v. ①**暗示，隐含**（= suggest, hint, intimate, insinuate）②**意味着，表明**（= indicate, entail, mean）；派生：implication n. 暗示，含义；implied adj. 含蓄的；implicit adj. 隐含的（= implied, unstated）；**辨析（考研重点）：imply（作者主动暗示）vs. infer（读者主动推断）**",
    "example": "The senator's carefully worded statement implied that he would not seek re-election, though he stopped short of making a formal announcement.",
    "tags": [
      "#一词多义",
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v289",
    "word": "substitute",
    "phonetic": "/ˈsʌbstɪtjuːt/",
    "meaning": "n. 替代品，代替者（= replacement, alternative, proxy, stand-in）；v. 代替，替换（sub- 在下 + stitute 放 → 放在下面取而代之）；搭配：substitute for sth. 作为…替代品；a poor substitute 糟糕的替代；派生：substitution n. 替代；substitutable adj.",
    "example": "Online learning has proven a valuable supplement to traditional classroom instruction, but most educators agree it is no substitute for in-person interaction and mentorship.",
    "tags": [
      "#一词多性",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v290",
    "word": "equivalent",
    "phonetic": "/ɪˈkwɪvələnt/",
    "meaning": "adj. 等同的，相当的，相等的（equi- 相等 + val 价值 + -ent）；n. 等同物，对应物（= counterpart, parallel）；搭配：be equivalent to 相当于；functional/moral equivalent 功能/道德上的等同；词根 equi- 亦见于 equal, equity（公平）, equilibrium（平衡）",
    "example": "The educational standards required by this qualification are broadly equivalent to those of a first-degree programme at a recognised university.",
    "tags": [
      "#同义置换",
      "#一词多性",
      "#核心词汇"
    ]
  },
  {
    "id": "v291",
    "word": "hierarchy",
    "phonetic": "/ˈhaɪərɑːki/",
    "meaning": "n. 等级制度，层级结构（hier- 神圣/首领 + archy 统治 → 由权威构成的等级层级）；派生：hierarchical adj. 等级的；搭配：a corporate/social/academic hierarchy 企业/社会/学术等级体系；hierarchical structure 层级结构；词根 arch- 亦见于 monarchy, archive, anarchy（无政府主义）",
    "example": "Many tech companies have deliberately adopted flat organisational structures to reduce the bureaucracy and slow decision-making that characterise traditional corporate hierarchies.",
    "tags": [
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v292",
    "word": "innovate",
    "phonetic": "/ˈɪnəveɪt/",
    "meaning": "v. 创新，革新（in- + nov 新 + -ate → 引入新事物）；派生：innovation n. 创新（= breakthrough, novelty, invention）；innovative adj. 创新的（= creative, pioneering, groundbreaking）；innovator n. 创新者；搭配：innovate in/within a field 在某领域创新",
    "example": "Companies that fail to innovate risk being displaced by more agile competitors who are willing to cannibalise their existing products in order to develop the next generation of technology.",
    "tags": [
      "#派生词",
      "#同义置换",
      "#核心词汇"
    ]
  },
  {
    "id": "v293",
    "word": "coordinate",
    "phonetic": "/kəʊˈɔːdɪneɪt/",
    "meaning": "v. 协调，统筹（co- 共同 + ordin 有序 + -ate → 共同排列有序）；n./adj. 坐标；派生：coordination n. 协调，配合；coordinator n. 协调员；近义（v.）：organise, manage, harmonise, synchronise, collaborate；搭配：coordinate efforts/activities/response 协调努力/活动/应对",
    "example": "An effective pandemic response requires governments to coordinate their efforts internationally, sharing data, resources, and best practices across borders.",
    "tags": [
      "#同义置换",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v294",
    "word": "integrate",
    "phonetic": "/ˈɪntɪɡreɪt/",
    "meaning": "v. 整合，融合；（使少数群体）融入社会（integer 完整 → 使成为整体）；派生：integration n. 整合，融合，一体化；integrated adj. 综合的，一体化的；integral adj. **不可或缺的**（= essential, fundamental）；搭配：integrate into/with 融入；European integration 欧洲一体化",
    "example": "The challenge for urban planners is to integrate sustainable design principles into large-scale housing developments without significantly increasing construction costs.",
    "tags": [
      "#一词多义",
      "#派生词",
      "#核心词汇"
    ]
  },
  {
    "id": "v295",
    "word": "2000年翻译-71题",
    "phonetic": "",
    "meaning": "在现代条件下，这需要程度不一的集中管控，因而也需要诸如经济学家、运筹学专家等专业科学人员的协助。\n\n【核心语法】简单句；\"such as\" 引导同位语，具体列举 specialized scientists 的范畴；\"hence\" 连接两个并列宾语（varying measures of centralized control 与 the help of specialized scientists），语气上构成因果递进关系；\"varying\" 为现在分词转化而来的形容词，属非谓语动词用法。",
    "example": "Under modern conditions, this requires varying measures of centralized control and hence the help of specialized scientists such as economists and operational research experts.",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "v296",
    "word": "2000年翻译-72题",
    "phonetic": "",
    "meaning": "此外，显而易见的是，一个国家的经济实力与其农业和工业的效率直接相关，而这反过来又有赖于各类科学家和技术人员的共同努力。\n\n【核心语法】形式主语句——it 为形式主语，真实主语为两个并列 that 从句（that the strength... and that this in turn...），是典型的主语从句结构；\"in turn\" 表示\"反过来/依次\"，是考研高频短语；\"bound up with\" 意为\"与……密切相关\"。",
    "example": "Furthermore, it is obvious that the strength of a country's economy is directly bound up with the efficiency of its agriculture and industry, and that this in turn rests upon the efforts of scientists and technologists of all kinds.",
    "tags": [
      "#真题长难句",
      "#主语从句"
    ]
  },
  {
    "id": "v297",
    "word": "2000年翻译-73题",
    "phonetic": "",
    "meaning": "由于大众传播手段的飞速发展，世界各地的人们正在萌生新的需求，并接触到新的风俗习惯与思想观念；与此同时，各国政府也常常因上述原因被迫推行更多的革新举措。\n\n【核心语法】\"Owing to...\" 为介词短语作原因状语；\"while\" 引导对比/同时性状语从句，描述与主句同时发生的另一情形；\"given above\" 为过去分词短语作后置定语（非谓语动词），修饰 the reasons；整句并列谓语（are feeling... and are being exposed to...）体现进行时态的被动与主动对比。",
    "example": "Owing to the remarkable development in mass-communications, people everywhere are feeling new wants and are being exposed to new customs and ideas, while governments are often forced to introduce still further innovations for the reasons given above.",
    "tags": [
      "#真题长难句",
      "#状语从句"
    ]
  },
  {
    "id": "v298",
    "word": "2000年翻译-74题",
    "phonetic": "",
    "meaning": "在欧洲最早实现工业化的国家，工业化进程——连同随之而来的深刻社会模式变迁——历经了将近一个世纪，而如今一个发展中国家可能只需十年左右便能走完同样的历程。\n\n【核心语法】双破折号之间为插入语（with all the far-reaching changes... that followed），扩展主语信息；\"that followed\" 为限制性定语从句，修饰 changes；\"whereas\" 引导表对比的状语从句，是考研翻译中表转折对比的高频连词，须译出对比语气。",
    "example": "In the early industrialized countries of Europe the process of industrialization -- with all the far-reaching changes in social patterns that followed -- was spread over nearly a century, whereas nowadays a developing nation may undergo the same process in a decade or so.",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "v299",
    "word": "2000年翻译-75题",
    "phonetic": "",
    "meaning": "人口爆炸，或由大规模人口迁移运动（凭借现代交通工具，这种迁移如今已变得相对容易）所引发的种种问题，也可能带来额外的社会压力。\n\n【核心语法】\"arising from mass migration movements\" 为现在分词短语作后置定语，修饰 problems（非谓语动词核心考点）；\"themselves made relatively easy nowadays by modern means of transport\" 为独立主格结构（absolute construction），以破折号引出，补充说明 mass migration movements 的特征；整句主干为 Additional social stresses may occur because of... or problems...，注意 or 连接两个 because of 的宾语。",
    "example": "Additional social stresses may also occur because of the population explosion or problems arising from mass migration movements -- themselves made relatively easy nowadays by modern means of transport.",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "v300",
    "word": "2001年翻译-71题",
    "phonetic": "",
    "meaning": "将会出现由机器人主持的电视脱口秀节目，以及配备污染监测仪的汽车——后者会在汽车排放超标时令其自动停驶。\n\n【核心语法】there will be 引导将来时存在句；hosted by robots 为过去分词短语作后置定语，修饰 chat shows；that will disable them 为限制性定语从句，修饰 pollution monitors；when they offend 为时间状语从句，offend 在此语境中意为\"违规排放/超标\"。",
    "example": "There will be television chat shows hosted by robots, and cars with pollution monitors that will disable them when they offend.",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "v301",
    "word": "2001年翻译-72题",
    "phonetic": "",
    "meaning": "孩子们将会玩内置个性芯片的娃娃，具有内置个性的电脑将被视为同事而非工具，人们将在\"嗅觉电视\"前休闲放松，数字时代也将随之到来。\n\n【核心语法】句子由四个并列分句（逗号+and）构成并列结构；equipped with personality chips 为过去分词短语作后置定语，修饰 dolls；will be regarded as 为一般将来时被动语态；will have arrived 为将来完成时，表到未来某时点已然完成；rather than 表对比/排除，意为\"而非\"。",
    "example": "Children will play with dolls equipped with personality chips, computers with in-built personalities will be regarded as workmates rather than tools, relaxation will be in front of smell-television, and digital age will have arrived.",
    "tags": [
      "#真题长难句",
      "#并列结构"
    ]
  },
  {
    "id": "v302",
    "word": "2001年翻译-73题",
    "phonetic": "",
    "meaning": "皮尔逊汇集了全球数百名研究人员的成果，制作出一份独特的千年技术年历，列出了我们预计数百项重大突破和发现将会实现的最新时间节点。\n\n【核心语法】to produce a unique millennium technology calendar 为不定式短语作目的状语；that gives the latest dates 为限制性定语从句，修饰 calendar；when we can expect hundreds of key breakthroughs and discoveries to take place 为关系副词 when 引导的定语从句，修饰 dates；expect...to take place 为\"动词+宾语+不定式\"结构（宾补用法）。",
    "example": "Pearson has pieced together the work of hundreds of researchers around the world to produce a unique millennium technology calendar that gives the latest dates when we can expect hundreds of key breakthroughs and discoveries to take place.",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "v303",
    "word": "2001年翻译-74题",
    "phonetic": "",
    "meaning": "但皮尔逊指出，那不过是人机融合的开端：\"这将是一个漫长整合过程的起点，而这一过程最终将在下个世纪末之前催生出一个完全电子化的人类。\"\n\n【核心语法】Pearson points out 为插入语（parenthetical clause），打断主句 that...is only the start...；冒号后接直接引语；that will ultimately lead to a fully electronic human 为限制性定语从句，修饰 process；before the end of the next century 为时间状语，表截止时间。",
    "example": "But that, Pearson points out, is only the start of man-machine integration: \"It will be the beginning of the long process of integration that will ultimately lead to a fully electronic human before the end of the next century.\"",
    "tags": [
      "#真题长难句",
      "#插入语"
    ]
  },
  {
    "id": "v304",
    "word": "2001年翻译-75题",
    "phonetic": "",
    "meaning": "家用电器也将变得如此智能，以至于控制和操作它们将会引发一种新的心理失调——\"厨房暴怒症\"。\n\n【核心语法】so...that 引导结果状语从句（考研高频句型，\"如此……以至于……\"）；controlling and operating them 为动名词短语并列作主语（动名词主语用法）；result in 意为\"导致，引起\"（≠ result from）；破折号后 kitchen rage 为同位语，补充解释 a new psychological disorder。",
    "example": "And home appliances will also become so smart that controlling and operating them will result in the breakout of a new psychological disorder -- kitchen rage.",
    "tags": [
      "#真题长难句",
      "#结果状语从句"
    ]
  },
  {
    "id": "v305",
    "word": "2002年翻译-61题",
    "phonetic": "",
    "meaning": "一大困难在于，几乎所有被称为\"行为科学\"的学科至今仍将行为归因于精神状态、情感、性格特质、人性等因素。\n\n【核心语法】One difficulty is that... 为表语从句（主系表结构，that 引导表语从句）；what is called behavioral science 为 what 引导的名词性从句，充当介词 of 的宾语，意为\"所谓的行为科学\"；trace...to... 为固定搭配，意为\"将……追溯至/归因于\"；continues to trace 表动作持续进行；and so on 为列举末尾省略语，意为\"等等\"。",
    "example": "One difficulty is that almost all of what is called behavioral science continues to trace behavior to states of mind, feelings, traits of character, human nature, and so on.",
    "tags": [
      "#真题长难句",
      "#表语从句"
    ]
  },
  {
    "id": "v306",
    "word": "2002年翻译-62题",
    "phonetic": "",
    "meaning": "行为科学的变革进程一直较为迟缓，部分原因是那些解释性概念往往看起来是可以被直接观察到的，部分原因则是其他类型的解释难以找到。\n\n【核心语法】have been slow to change 现在完成时，表持续状态；partly because...partly because... 为关联并列原因状语从句（固定搭配，\"部分因为……部分因为……\"，考研高频句型）；seem to be directly observed 为不定式被动形式；hard to find 为\"形容词+不定式\"结构，表该动作对主语而言有难度（tough不定式句型）。",
    "example": "The behavioral sciences have been slow to change partly because the explanatory items often seem to be directly observed and partly because other kinds of explanations have been hard to find.",
    "tags": [
      "#真题长难句",
      "#原因状语从句"
    ]
  },
  {
    "id": "v307",
    "word": "2002年翻译-63题",
    "phonetic": "",
    "meaning": "自然选择在进化中所扮演角色的理论，仅仅在一百多年前才被阐明；而环境在塑造和维持个体行为方面所起的选择性作用，也才刚刚开始受到认识和研究。\n\n【核心语法】was formulated 为一般过去时被动语态；only a little more than a hundred years ago 中 only 强调时间之近；and 并列第二个主句；is only beginning to be recognized and studied 为现在进行时+被动语态双重叠加，only 强调\"刚刚才\"；in shaping and maintaining 为介词+动名词并列作状语，表方式/领域。",
    "example": "The role of natural selection in evolution was formulated only a little more than a hundred years ago, and the selective role of the environment in shaping and maintaining the behavior of the individual is only beginning to be recognized and studied.",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "v308",
    "word": "2002年翻译-64题",
    "phonetic": "",
    "meaning": "它们是传统理论中\"自律人\"（self-governing man）的精神财富，也是那些要求人对自身行为负责、凭借自身成就赢得认可的行为规范所不可或缺的。\n\n【核心语法】in which a person is held responsible for his conduct and given credit for his achievements 为\"介词+关系代词\"引导的定语从句，修饰 practices；be held responsible for 为固定搭配，意为\"被认为对……负责\"；be given credit for 意为\"因……而获得认可\"，与 held responsible for 并列，共享被动语态结构；autonomous = self-governing，括号内为原文注释。",
    "example": "They are the possessions of the autonomous (self-governing) man of traditional theory, and they are essential to practices in which a person is held responsible for his conduct and given credit for his achievements.",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "v309",
    "word": "2002年翻译-65题",
    "phonetic": "",
    "meaning": "除非这些问题得到解决，否则行为技术将继续遭到拒绝，而随之被否定的，或许还有解决我们问题的唯一途径。\n\n【核心语法】until 引导条件/时间状语从句（否定主句+until = \"直到……才/除非……否则……\"）；will continue to be rejected 为一般将来时+被动语态；and with it possibly the only way to solve our problems 为高度压缩的省略+倒装句，完整形式为 and with it will possibly be rejected the only way...，是考研翻译中的典型高难度句式。",
    "example": "Until these issues are resolved, a technology of behavior will continue to be rejected, and with it possibly the only way to solve our problems.",
    "tags": [
      "#真题长难句",
      "#倒装句"
    ]
  },
  {
    "id": "v310",
    "word": "2003年翻译-61题",
    "phonetic": "",
    "meaning": "此外，人类有能力改造自己所生存的环境，从而使所有其他生命形式都不得不顺从人类独特的想法和幻想。\n\n【核心语法】in which they live 为\"介词+关系代词\"引导的定语从句（= the environment where they live），修饰 environment；thus subjecting 为\"thus + 现在分词\"结构，表示由此导致的自然结果（≈ and thus subject...），为非谓语动词的结果用法；subject...to... 此处为动词用法，意为\"使……服从/臣服于\"。",
    "example": "Furthermore, humans have the ability to modify the environment in which they live, thus subjecting all other life forms to their own peculiar ideas and fancies.",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "v311",
    "word": "2003年翻译-62题",
    "phonetic": "",
    "meaning": "社会科学是知识探索的一个分支，它试图以自然科学家研究自然现象时所采用的理性、有序、系统而冷静的方式，来研究人类及其各种活动。\n\n【核心语法】which seeks to study... 为限制性定语从句，修饰 branch；in the same reasoned...manner that natural scientists use... 为\"the same...that\"结构（that 引导定语从句修饰 manner，= in the same manner as），意为\"以同样的方式\"；reasoned, orderly, systematic, and dispassioned 四个形容词并列共同修饰 manner（dispassioned = 冷静的，不带偏见的）。",
    "example": "Social science is that branch of intellectual enquiry which seeks to study humans and their endeavors in the same reasoned, orderly, systematic, and dispassioned manner that natural scientists use for the study of natural phenomena.",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "v312",
    "word": "2003年翻译-63题",
    "phonetic": "",
    "meaning": "对第一手数据的重视，加之对古今文化分析所采用的跨文化视角，使这一学科成为一门独特且极为重要的社会科学。\n\n【核心语法】主句主干为 The emphasis...makes this study a unique...social science（make + 宾语 + 宾语补足语）；gathered first-hand 为过去分词短语作后置定语，修饰 data；combined with a cross-cultural perspective... 为过去分词短语作插入性伴随状语，意为\"加之……\"；brought to the analysis 为过去分词短语作后置定语，修饰 perspective；cultures past and present 为\"名词+形容词后置\"修饰结构，意为\"古今文化\"。",
    "example": "The emphasis on data gathered first-hand, combined with a cross-cultural perspective brought to the analysis of cultures past and present, makes this study a unique and distinctly important social science.",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "v313",
    "word": "2003年翻译-64题",
    "phonetic": "",
    "meaning": "泰勒将文化定义为\"……那个由信仰、艺术、道德、法律、习俗以及人作为社会成员所习得的任何其他能力和习惯所构成的复合整体。\"\n\n【核心语法】define...as... 为固定搭配，\"将……定义为……\"；which includes belief, art, morals, law, custom... 为限制性定语从句，修饰 that complex whole；acquired by man as a member of society 为过去分词短语作后置定语，修饰 capabilities and habits；as a member of society 为身份状语，说明 man 的社会角色。",
    "example": "Tylor defined culture as \"... that complex whole which includes belief, art, morals, law, custom, and any other capabilities and habits acquired by man as a member of society.\"",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "v314",
    "word": "2003年翻译-65题",
    "phonetic": "",
    "meaning": "因此，人类学中\"文化\"这一概念，正如数学中\"集合\"的概念一样，是一个能使大量具体研究和理解成为可能的抽象概念。\n\n【核心语法】like the concept of \"set\" in mathematics 为比较状语，作插入成分，打断主句；which makes possible immense amounts of concrete research and understanding 为限制性定语从句，其中宾语补足语 possible 前置——正常语序应为 makes immense amounts...possible，因宾语较长而前置宾补（考研翻译经典难点：宾语补足语倒装）。",
    "example": "Thus, the anthropological concept of \"culture,\" like the concept of \"set\" in mathematics, is an abstract concept which makes possible immense amounts of concrete research and understanding.",
    "tags": [
      "#真题长难句",
      "#倒装句"
    ]
  },
  {
    "id": "v315",
    "word": "2004年翻译-61题",
    "phonetic": "",
    "meaning": "希腊人认为语言结构与思维过程之间存在某种关联，这一观念在欧洲根深蒂固，远在人们意识到语言可以如此多样之前便已如此。\n\n【核心语法】assumed that... 为动词+宾语从句；which took root in Europe long before... 为非限制性定语从句，which 指代前面整个主句所述的观念；long before 意为\"早在……之前很久\"；how diverse languages could be 为 how 引导的间接疑问句（宾语从句），作 realized 的宾语。",
    "example": "The Greeks assumed that the structure of language had some connection with the process of thought, which took root in Europe long before people realized how diverse languages could be.",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "v316",
    "word": "2004年翻译-62题",
    "phonetic": "",
    "meaning": "我们应当感谢他们，因为这些语言中有一些此后已经消失——随着使用这些语言的民族灭绝，或被同化而失去了本民族语言。\n\n【核心语法】be obliged to sb. 为固定搭配，意为\"感激某人/欠某人人情\"；have since vanished 为现在完成时，since 表\"从那以后至今\"；as 引导原因/伴随状语从句；who spoke them 为限制性定语从句，修饰 peoples；died out 意为\"（族群/物种）灭绝；绝迹\"（区别于 die out 物种灭绝）。",
    "example": "We are obliged to them because some of these languages have since vanished, as the peoples who spoke them died out or became assimilated and lost their native languages.",
    "tags": [
      "#真题长难句",
      "#原因状语从句"
    ]
  },
  {
    "id": "v317",
    "word": "2004年翻译-63题",
    "phonetic": "",
    "meaning": "这些新近记录的语言与欧洲和东南亚那些经过深入研究的语言相比，差异往往如此惊人，以至于有些学者甚至指控博厄斯和萨丕尔伪造了他们的数据。\n\n【核心语法】so...that... 引导结果状语从句（考研高频句型）；strikingly different from 意为\"与……有惊人差异\"；accuse sb. of doing sth. 为固定搭配，\"指控某人做某事\"；fabricating 为动名词，接在 accuse...of 之后（介词后接动名词，非不定式）。",
    "example": "The newly described languages were often so strikingly different from the well studied languages of Europe and Southeast Asia that some scholars even accused Boas and Sapir of fabricating their data.",
    "tags": [
      "#真题长难句",
      "#结果状语从句"
    ]
  },
  {
    "id": "v318",
    "word": "2004年翻译-64题",
    "phonetic": "",
    "meaning": "由于沃尔夫对语言与思维的关系深感兴趣，他由此形成了这样一个观点：语言结构决定着一个社会中习惯性思维的结构。\n\n【核心语法】Being interested in... 为现在分词短语（非谓语动词）作原因状语，逻辑主语为主句主语 Whorf；developed the idea that... 中 that 引导同位语从句，与名词 idea 同位，阐释该观点的具体内容；habitual thought 习惯性思维（考研翻译重点词，区别于 habitual 作形容词修饰 thought 的结构）。",
    "example": "Being interested in the relationship of language and thought, Whorf developed the idea that the structure of language determines the structure of habitual thought in a society.",
    "tags": [
      "#真题长难句",
      "#同位语从句"
    ]
  },
  {
    "id": "v319",
    "word": "2004年翻译-65题",
    "phonetic": "",
    "meaning": "沃尔夫逐渐相信一种\"语言决定论\"，该理论在其最强硬的形式下，主张语言禁锢了思维，并且一门语言中的语法模式能对一个社会的文化产生深远的影响。\n\n【核心语法】came to believe 意为\"逐渐开始相信\"（came to do = gradually began to do）；which, in its strongest form, states that... 为非限制性定语从句，修饰 linguistic determinism；in its strongest form 为插入语；states that...and that... 为并列宾语从句（两个 that 从句并列）；far-reaching consequences for... 意为\"对……产生深远影响\"（far-reaching = profound/extensive，考研高频短语）。",
    "example": "Whorf came to believe in a sort of linguistic determinism which, in its strongest form, states that language imprisons the mind, and that the grammatical patterns in a language can produce far-reaching consequences for the culture of a society.",
    "tags": [
      "#真题长难句",
      "#宾语从句"
    ]
  },
  {
    "id": "rd_t2001_71",
    "year": 2001,
    "source": "考研英语一 · 翻译第71题",
    "questionType": "英译汉PartC",
    "text": "There will be television chat shows hosted by robots, and cars with pollution monitors that will disable them when they offend.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 将会有机器人主持的电视脱口秀节目，还有装有污染监测装置的汽车，一旦汽车排放超标，该装置就会使其停止运行。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> There will be 引出两个并列主语：chat shows 和 cars；hosted by robots 为过去分词短语作后置定语修饰 shows；that will disable them when they offend 为定语从句修饰 monitors，其中 when they offend 为时间状语从句（offend 此处作\"超标/违规\"讲）。</span>",
    "translateLines": [
      "There will be television chat shows hosted by robots, and cars with pollution monitors that will disable them when they offend."
    ],
    "glossary": {
      "hosted": "v. 主持（host 的过去分词，此处作定语）",
      "pollution monitors": "n. 污染监测装置",
      "disable": "v. 使失去功能；使停止运行",
      "offend": "v. 违规；冒犯；（此处指）排放超标"
    },
    "answer": "【结构拆解】\n① There will be [television chat shows hosted by robots] and [cars with pollution monitors that will disable them when they offend]\n② hosted by robots — 过去分词短语后置定语，修饰 chat shows\n③ that will disable them when they offend — that 引导定语从句修饰 monitors；when they offend 时间状语从句，they = cars\n【解题要点】注意 that 从句修饰的是 monitors（而非 cars），them 指代 cars（被禁用的是车，而非监测器）。offend 在环保语境中意为\"违规/超标\"。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2001_72",
    "year": 2001,
    "source": "考研英语一 · 翻译第72题",
    "questionType": "英译汉PartC",
    "text": "Children will play with dolls equipped with personality chips, computers with in-built personalities will be regarded as workmates rather than tools, relaxation will be in front of smell-television, and digital age will have arrived.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 孩子们将玩弄配有个性芯片的玩具娃娃，内置个性的电脑将被视为同事而非工具，休闲将在\"气味电视\"前进行，数字时代将已来临。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> 四个并列分句构成递进排列，展示未来科技图景；will have arrived 为将来完成时，表达届时已成定局；equipped with 与 with in-built 分别作后置定语和介词短语修饰名词。</span>",
    "translateLines": [
      "Children will play with dolls equipped with personality chips, computers with in-built personalities will be regarded as workmates rather than tools, relaxation will be in front of smell-television, and digital age will have arrived."
    ],
    "glossary": {
      "equipped": "adj. 配备有的（equip 的过去分词）",
      "personality chips": "n. 个性芯片（科幻概念）",
      "in-built": "adj. 内置的；内建的",
      "workmates": "n. 同事；工作伙伴",
      "smell-television": "n. 气味电视（未来概念）"
    },
    "answer": "【结构拆解】\n四个并列独立分句，共同描绘未来数字时代的生活场景：\n① Children will play with dolls [equipped with personality chips] — equipped 过去分词短语作后置定语\n② computers with in-built personalities will be regarded as workmates rather than tools — rather than 表对比\n③ relaxation will be in front of smell-television\n④ digital age will have arrived — 将来完成时，表届时已完成\n【解题要点】will have arrived 翻译为\"将已来临/届时已至\"，体现将来完成时语气；rather than 需译出\"而非/而不是\"的对比含义。",
    "tags": [
      "#真题长难句",
      "#并列结构"
    ]
  },
  {
    "id": "rd_t2001_73",
    "year": 2001,
    "source": "考研英语一 · 翻译第73题",
    "questionType": "英译汉PartC",
    "text": "Pearson has pieced together the work of hundreds of researchers around the world to produce a unique millennium technology calendar that gives the latest dates when we can expect hundreds of key breakthroughs and discoveries to take place.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 皮尔森汇集了世界各地数百位研究人员的成果，编制了一份独特的\"千年技术日历\"，该日历给出了我们可以预期数百项重大突破和发现出现的最新日期。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> to produce 不定式表目的；that gives 引导定语从句修饰 calendar；when we can expect... 为关系副词引导的定语从句修饰 dates；expect sb./sth. to do 为固定结构，此处 expect hundreds of ... to take place。</span>",
    "translateLines": [
      "Pearson has pieced together the work of hundreds of researchers around the world to produce a unique millennium technology calendar that gives the latest dates when we can expect hundreds of key breakthroughs and discoveries to take place."
    ],
    "glossary": {
      "pieced together": "汇集；拼凑（piece together 固定搭配）",
      "millennium": "n. 千年；千禧年",
      "breakthroughs": "n. 突破；重大进展（breakthrough 复数）",
      "take place": "发生；举行（不可用被动，固定搭配）"
    },
    "answer": "【结构拆解】\n主干：Pearson has pieced together the work... to produce a calendar\n① to produce 不定式作目的状语\n② that gives the latest dates — that 引导定语从句修饰 calendar\n③ when we can expect hundreds of ... to take place — when 引导定语从句修饰 dates，表\"届时/那时\"\n④ expect ... to take place — expect + 宾语 + 不定式结构\n【解题要点】注意双层定语从句的嵌套关系（that ... when ...），翻译时需理清层次，将\"给出……日期，届时我们可预期……\"表达清晰。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2001_74",
    "year": 2001,
    "source": "考研英语一 · 翻译第74题",
    "questionType": "英译汉PartC",
    "text": "But that, Pearson points out, is only the start of man-machine integration: \"It will be the beginning of the long process of integration that will ultimately lead to a fully electronic human before the end of the next century.\"<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 但皮尔森指出，这不过是人机融合的开端：\"这将是漫长融合进程的起始，而该进程最终将在下个世纪结束之前造就一个完全电子化的人类。\"<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> that Pearson points out 为插入语，主干为 that is only the start of...；引号内 that will ultimately lead to... 为定语从句修饰 process；before the end of the next century 时间状语。</span>",
    "translateLines": [
      "But that, Pearson points out, is only the start of man-machine integration: \"It will be the beginning of the long process of integration that will ultimately lead to a fully electronic human before the end of the next century.\""
    ],
    "glossary": {
      "man-machine integration": "n. 人机融合；人机整合",
      "ultimately": "adv. 最终；终究",
      "fully electronic human": "n. 完全电子化的人（科幻概念）"
    },
    "answer": "【结构拆解】\n主干（主句）：that [, Pearson points out,] is only the start of man-machine integration\n① Pearson points out 为插入语，用逗号隔开，不影响主干\n② 冒号后引号内：It will be the beginning of the long process of integration\n③ that will ultimately lead to a fully electronic human — that 引导定语从句修饰 process\n④ before the end of the next century — 时间状语\n【解题要点】插入语识别：遇到\"主语, 插入语, 谓语\"结构时，先忽略插入语找主干。冒号在此起\"解释说明\"作用，引出皮尔森原话。",
    "tags": [
      "#真题长难句",
      "#插入语"
    ]
  },
  {
    "id": "rd_t2001_75",
    "year": 2001,
    "source": "考研英语一 · 翻译第75题",
    "questionType": "英译汉PartC",
    "text": "And home appliances will also become so smart that controlling and operating them will result in the breakout of a new psychological disorder -- kitchen rage.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 而且家用电器也将变得如此智能，以至于控制和操作它们将会导致一种新的心理疾病的爆发——\"厨房狂躁症\"。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> so ... that 引导结果状语从句；controlling and operating 动名词并列作主语，体现动名词作主语时谓语动词用单数；破折号后 kitchen rage 为同位语，对 a new psychological disorder 进行具名说明。</span>",
    "translateLines": [
      "And home appliances will also become so smart that controlling and operating them will result in the breakout of a new psychological disorder -- kitchen rage."
    ],
    "glossary": {
      "home appliances": "n. 家用电器（appliance 单数）",
      "so ... that": "如此……以至于（结果状语从句标志）",
      "psychological disorder": "n. 心理疾病；心理失调",
      "kitchen rage": "n. 厨房狂躁症（类比 road rage 路怒症）"
    },
    "answer": "【结构拆解】\n主干：home appliances will become so smart that [controlling and operating them] will result in the breakout of a new psychological disorder\n① so...that 结果状语从句\n② controlling and operating them — 动名词并列短语作主语（视作整体，谓语 will result 用单数）\n③ kitchen rage — 破折号后同位语，具体说明 a new psychological disorder\n【解题要点】so...that 为高频结构，that 后是结果从句而非原因。动名词作主语翻译时应转化为\"控制和操作它们（这件事）\"。",
    "tags": [
      "#真题长难句",
      "#结果状语从句"
    ]
  },
  {
    "id": "rd_t2002_61",
    "year": 2002,
    "source": "考研英语一 · 翻译第61题",
    "questionType": "英译汉PartC",
    "text": "One difficulty is that almost all of what is called behavioral science continues to trace behavior to states of mind, feelings, traits of character, human nature, and so on.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 一个困难在于，几乎所有被称为行为科学的学科都继续把行为追溯到心理状态、情感、性格特征、人性等方面。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> 主干为 One difficulty is that...，that 引导表语从句；what is called behavioral science 为名词性从句（what 从句）作介词 of 的宾语；trace ... to ... 固定搭配\"把……追溯到……\"。</span>",
    "translateLines": [
      "One difficulty is that almost all of what is called behavioral science continues to trace behavior to states of mind, feelings, traits of character, human nature, and so on."
    ],
    "glossary": {
      "behavioral science": "n. 行为科学",
      "trace ... to": "把……追溯到；归因于（固定搭配）",
      "traits of character": "n. 性格特征；个性特点",
      "human nature": "n. 人性；人的本性"
    },
    "answer": "【结构拆解】\n主干：One difficulty is that [almost all of what is called behavioral science] continues to trace behavior to states of mind...\n① One difficulty is that... — 表语从句\n② what is called behavioral science — what 从句作介词 of 的宾语（所谓行为科学）\n③ trace behavior to states of mind, feelings, traits of character, human nature — trace...to 固定结构，宾语为四项并列\n【解题要点】what is called = so-called，翻译为\"所谓的……\"或\"被称为……的……\"；注意表语从句与主语从句的判断：句子主干含有系动词 is 时，that 从句多为表语从句。",
    "tags": [
      "#真题长难句",
      "#表语从句"
    ]
  },
  {
    "id": "rd_t2002_62",
    "year": 2002,
    "source": "考研英语一 · 翻译第62题",
    "questionType": "英译汉PartC",
    "text": "The behavioral sciences have been slow to change partly because the explanatory items often seem to be directly observed and partly because other kinds of explanations have been hard to find.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 行为科学的变化一直很缓慢，部分原因在于这些解释性的条目往往似乎是可以直接观察到的，部分原因在于其他类型的解释很难找到。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> partly because ... and partly because ... 为平行的原因状语从句结构，强调两个并列原因；be slow to change = change slowly；seem to be directly observed 不定式被动形式。</span>",
    "translateLines": [
      "The behavioral sciences have been slow to change partly because the explanatory items often seem to be directly observed and partly because other kinds of explanations have been hard to find."
    ],
    "glossary": {
      "explanatory": "adj. 解释性的；说明的",
      "partly because ... and partly because": "部分原因是……另一部分原因是……（并列原因结构）",
      "hard to find": "难以找到（形容词 + 不定式，主动形式表被动含义）"
    },
    "answer": "【结构拆解】\n主干：The behavioral sciences have been slow to change\n① partly because ... and partly because — 两个并列的原因状语从句\n② the explanatory items often seem to be directly observed — seem + 不定式被动，表\"似乎被直接观察到\"\n③ other kinds of explanations have been hard to find — hard to find 形容词短语作表语，不定式 to find 主动形式表被动\n【解题要点】be slow to do 表\"缓慢于做某事/一直未……\"；\"hard to find\"的主动不定式表被动（即 find them 是被动含义）是考研高频考点。",
    "tags": [
      "#真题长难句",
      "#原因状语从句"
    ]
  },
  {
    "id": "rd_t2002_63",
    "year": 2002,
    "source": "考研英语一 · 翻译第63题",
    "questionType": "英译汉PartC",
    "text": "The role of natural selection in evolution was formulated only a little more than a hundred years ago, and the selective role of the environment in shaping and maintaining the behavior of the individual is only beginning to be recognized and studied.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 自然选择在进化中的作用仅在一百多年前才被阐明，而环境在塑造和维持个体行为方面的选择性作用也才刚刚开始被认识和研究。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> 两个并列的被动句由 and 连接；was formulated only a little more than ... ago 注意 only ... ago 强调时间的近；is only beginning to be recognized 现在进行时被动强调\"才刚刚开始\"；in shaping and maintaining 动名词并列作介词宾语。</span>",
    "translateLines": [
      "The role of natural selection in evolution was formulated only a little more than a hundred years ago, and the selective role of the environment in shaping and maintaining the behavior of the individual is only beginning to be recognized and studied."
    ],
    "glossary": {
      "natural selection": "n. 自然选择（达尔文进化论核心概念）",
      "formulated": "v. 阐明；明确表达（formulate 的过去分词）",
      "selective": "adj. 选择性的；有选择力的",
      "recognized": "v. 认识到；承认（recognize 的过去分词）"
    },
    "answer": "【结构拆解】\n两个并列句：\n① The role of natural selection in evolution was formulated only a little more than a hundred years ago\n   — was formulated 被动语态；only a little more than 强调\"仅仅比……多一点点\"\n② the selective role of the environment in shaping and maintaining the behavior of the individual is only beginning to be recognized and studied\n   — is beginning to be recognized 进行时 + 不定式被动（双重被动强调动作尚在开始阶段）\n   — in shaping and maintaining 动名词并列短语作介词宾语\n【解题要点】only 的强调位置（only a little more / only beginning）需在翻译中体现，译为\"仅仅/才刚刚\"。",
    "tags": [
      "#真题长难句",
      "#被动语态"
    ]
  },
  {
    "id": "rd_t2002_64",
    "year": 2002,
    "source": "考研英语一 · 翻译第64题",
    "questionType": "英译汉PartC",
    "text": "They are the possessions of the autonomous (self-governing) man of traditional theory, and they are essential to practices in which a person is held responsible for his conduct and given credit for his achievements.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 它们是传统理论中自主（自治）人的财产，对于那些一个人因行为而被追究责任、因成就而被赋予荣誉的实践活动是不可或缺的。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> in which a person is held responsible... and given credit for... 为介词 + 关系代词引导的定语从句修饰 practices；held responsible 与 given credit 并列的被动结构；be held responsible for 表\"对……负责/被追责\"。</span>",
    "translateLines": [
      "They are the possessions of the autonomous (self-governing) man of traditional theory, and they are essential to practices in which a person is held responsible for his conduct and given credit for his achievements."
    ],
    "glossary": {
      "autonomous": "adj. 自主的；自治的（= self-governing）",
      "possessions": "n. 所有物；财产（possession 的复数）",
      "held responsible": "被追究责任（hold sb. responsible for 固定搭配）",
      "given credit": "被赋予荣誉/认可（give sb. credit for 固定搭配）"
    },
    "answer": "【结构拆解】\n① They are the possessions of [the autonomous man of traditional theory]\n② they are essential to practices [in which a person is held responsible for his conduct and given credit for his achievements]\n   — in which 引导定语从句（介词提前的关系代词结构）\n   — is held responsible ... and given credit ... 并列被动结构\n【解题要点】介词 + 关系代词（in which）引导定语从句是考研高频难点，等同于 in the practices，还原后理解更容易；hold sb. responsible for 与 give credit for 需分别准确对译。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2002_65",
    "year": 2002,
    "source": "考研英语一 · 翻译第65题",
    "questionType": "英译汉PartC",
    "text": "Until these issues are resolved, a technology of behavior will continue to be rejected, and with it possibly the only way to solve our problems.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 在这些问题得到解决之前，行为技术将继续遭到拒绝，与此同时，解决我们问题的唯一途径也可能随之被否定。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Until 引导时间状语从句；and with it possibly the only way to solve our problems 为省略句，完整形式为 and with it possibly the only way will continue to be rejected；with it 中 it 指代 a technology of behavior。</span>",
    "translateLines": [
      "Until these issues are resolved, a technology of behavior will continue to be rejected, and with it possibly the only way to solve our problems."
    ],
    "glossary": {
      "resolved": "v. 解决（resolve 的过去分词）",
      "a technology of behavior": "n. 行为技术（指用科学方法系统性改变人类行为的技术）",
      "with it": "随同它；与此同时（指代前文内容）"
    },
    "answer": "【结构拆解】\n① Until these issues are resolved — until 引导时间状语从句\n② a technology of behavior will continue to be rejected — 主干，被动将来时\n③ and with it possibly [the only way to solve our problems] — 省略句，补全为：and with it, [the only way to solve our problems will continue to be rejected possibly]\n【解题要点】省略结构（ellipsis）是考研翻译难点，需补全被省略的谓语部分；with it 中 it 回指前句的 a technology of behavior，翻译时需补出语义。",
    "tags": [
      "#真题长难句",
      "#省略句"
    ]
  },
  {
    "id": "rd_t2003_61",
    "year": 2003,
    "source": "考研英语一 · 翻译第61题",
    "questionType": "英译汉PartC",
    "text": "Furthermore, humans have the ability to modify the environment in which they live, thus subjecting all other life forms to their own peculiar ideas and fancies.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 此外，人类具有改变其生存环境的能力，从而使所有其他生命形式都受到人类自身奇特思想和幻想的支配。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> in which they live 为定语从句修饰 environment（介词 + 关系代词）；thus subjecting 为结果状语（thus + 分词结构表自然的结果）；subject ... to 表\"使……受……支配/影响\"。</span>",
    "translateLines": [
      "Furthermore, humans have the ability to modify the environment in which they live, thus subjecting all other life forms to their own peculiar ideas and fancies."
    ],
    "glossary": {
      "modify": "v. 改变；修改；改造",
      "thus subjecting": "从而使……（thus + 现在分词，表结果）",
      "subject ... to": "使……受到……（的支配/影响）；固定搭配",
      "fancies": "n. 幻想；奇思妙想（fancy 的复数）"
    },
    "answer": "【结构拆解】\n主干：humans have the ability to modify the environment\n① in which they live — 定语从句修饰 environment（= the environment that they live in）\n② thus subjecting all other life forms to their own peculiar ideas and fancies — thus + 现在分词作结果状语\n③ subject A to B — 使A受到B的支配（B = their own peculiar ideas and fancies）\n【解题要点】thus + 分词结构表\"从而……/因此……\"，是常见的结果状语写法；subject ... to 易混淆为\"主题\"，此处是动词用法，表\"使……屈从于/受制于\"。",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "rd_t2003_62",
    "year": 2003,
    "source": "考研英语一 · 翻译第62题",
    "questionType": "英译汉PartC",
    "text": "Social science is that branch of intellectual enquiry which seeks to study humans and their endeavors in the same reasoned, orderly, systematic, and dispassioned manner that natural scientists use for the study of natural phenomena.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 社会科学是知识探究的一个分支，它试图以自然科学家研究自然现象所采用的同样理性、有序、系统和冷静的方式来研究人类及其活动。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> 主句为 Social science is that branch of intellectual enquiry；which seeks 引导定语从句修饰 branch；that natural scientists use 为定语从句修饰 manner；the same ... manner that = the same manner as（同等比较）。</span>",
    "translateLines": [
      "Social science is that branch of intellectual enquiry which seeks to study humans and their endeavors in the same reasoned, orderly, systematic, and dispassioned manner that natural scientists use for the study of natural phenomena."
    ],
    "glossary": {
      "intellectual enquiry": "n. 知识探索；学术研究",
      "endeavors": "n. 努力；活动（endeavor 的复数，英式 endeavours）",
      "dispassioned": "adj. 不带情感的；冷静客观的",
      "phenomena": "n. 现象（phenomenon 的复数）"
    },
    "answer": "【结构拆解】\n主干：Social science is that branch of intellectual enquiry\n① which seeks to study humans and their endeavors — which 定语从句修饰 branch\n② in the same ... manner [that natural scientists use for the study of natural phenomena]\n   — the same ... manner that = the same manner as（同级比较）\n   — that 引导定语从句修饰 manner，自然科学家\"使用这一方式\"来研究自然现象\n【解题要点】that branch ... which ... 结构中，that 是指示代词（= such a branch），不是关系代词；the same...that 与 the same...as 在此语义相同，但语法结构略有差异。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2003_63",
    "year": 2003,
    "source": "考研英语一 · 翻译第63题",
    "questionType": "英译汉PartC",
    "text": "The emphasis on data gathered first-hand, combined with a cross-cultural perspective brought to the analysis of cultures past and present, makes this study a unique and distinctly important social science.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 对第一手收集数据的重视，加之将跨文化视角引入对过去和当今文化分析之中，使这门学科成为一门独特而格外重要的社会科学。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> 主语为 The emphasis on data gathered first-hand；combined with... 为过去分词短语插入语（非主语核心）；makes ... a unique and distinctly important social science 为 SVOC 结构；注意主语核心是 The emphasis（单数），谓语用 makes。</span>",
    "translateLines": [
      "The emphasis on data gathered first-hand, combined with a cross-cultural perspective brought to the analysis of cultures past and present, makes this study a unique and distinctly important social science."
    ],
    "glossary": {
      "first-hand": "adv./adj. 直接地；第一手的",
      "cross-cultural": "adj. 跨文化的",
      "perspective": "n. 视角；观点；看法",
      "distinctly": "adv. 格外地；明显地"
    },
    "answer": "【结构拆解】\n主干：The emphasis on data gathered first-hand ... makes this study a unique and distinctly important social science\n① gathered first-hand — 过去分词短语修饰 data\n② combined with a cross-cultural perspective brought to the analysis of cultures past and present — 插入语（过去分词短语），修饰整个主语；不是并列主语！\n③ makes this study + 宾语补足语 — SVOC 结构\n【解题要点】combined with 引导的插入语是陷阱：它看起来像并列主语，但谓语 makes（第三人称单数）证明主语仍是 The emphasis（单数）；翻译时用\"加之……\"或\"再加上……\"处理。",
    "tags": [
      "#真题长难句",
      "#插入语"
    ]
  },
  {
    "id": "rd_t2003_64",
    "year": 2003,
    "source": "考研英语一 · 翻译第64题",
    "questionType": "英译汉PartC",
    "text": "Tylor defined culture as \"… that complex whole which includes belief, art, morals, law, custom, and any other capabilities and habits acquired by man as a member of society.\"<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 泰勒将文化定义为\"……那个复杂的整体，它包括信仰、艺术、道德、法律、风俗以及人作为社会成员所习得的任何其他能力和习惯。\"<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> define ... as 固定搭配\"把……定义为……\"；which includes 定语从句修饰 complex whole；acquired by man as a member of society 为过去分词短语修饰 capabilities and habits；as a member of society 表身份状语。</span>",
    "translateLines": [
      "Tylor defined culture as \"… that complex whole which includes belief, art, morals, law, custom, and any other capabilities and habits acquired by man as a member of society.\""
    ],
    "glossary": {
      "morals": "n. 道德（moral 的复数）",
      "custom": "n. 风俗；习惯；惯例",
      "acquired": "v. 习得；获得（acquire 的过去分词）",
      "as a member of society": "作为社会的一员（身份状语）"
    },
    "answer": "【结构拆解】\n主干：Tylor defined culture as \"that complex whole\"\n① which includes belief, art, morals, law, custom, and any other capabilities and habits — which 定语从句修饰 complex whole，列举文化的内容\n② acquired by man as a member of society — 过去分词短语修饰 capabilities and habits\n③ as a member of society — 方式/身份状语，表明人是以社会成员身份习得这些内容的\n【解题要点】define A as B = 把A定义为B，是学术文章标准表达；注意定语从句（which includes...）和过去分词短语（acquired by man...）的修饰对象不同。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2003_65",
    "year": 2003,
    "source": "考研英语一 · 翻译第65题",
    "questionType": "英译汉PartC",
    "text": "Thus, the anthropological concept of \"culture,\" like the concept of \"set\" in mathematics, is an abstract concept which makes possible immense amounts of concrete research and understanding.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 因此，人类学中\"文化\"的概念，如同数学中\"集合\"的概念，是一个抽象概念，它使大量具体的研究和理解成为可能。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> like the concept of \"set\" in mathematics 为插入语，作比较状语；which makes possible immense amounts of... 为定语从句，其中 makes possible 为倒装（宾语补足语前置）——正常语序应为 makes immense amounts of concrete research and understanding possible，因宾语太长而将形容词 possible 提前。</span>",
    "translateLines": [
      "Thus, the anthropological concept of \"culture,\" like the concept of \"set\" in mathematics, is an abstract concept which makes possible immense amounts of concrete research and understanding."
    ],
    "glossary": {
      "anthropological": "adj. 人类学的（anthropology 形容词形式）",
      "abstract": "adj. 抽象的；理论性的",
      "makes possible": "使……成为可能（宾语补足语提前的倒装结构）",
      "immense": "adj. 大量的；极大的"
    },
    "answer": "【结构拆解】\n主干：the anthropological concept of \"culture\" is an abstract concept\n① like the concept of \"set\" in mathematics — 插入语（比较状语）\n② which makes possible immense amounts of concrete research and understanding — 定语从句修饰 abstract concept\n③ makes possible immense amounts — 倒装！正常语序：makes immense amounts ... possible（宾补前置，因宾语长而倒置）\n【解题要点】\"makes possible + 宾语\"是考研经典倒装考点，区别于\"makes + 宾语 + possible\"正常语序；翻译时两种语序意义相同，都译为\"使……成为可能\"。",
    "tags": [
      "#真题长难句",
      "#倒装句"
    ]
  },
  {
    "id": "rd_t2004_61",
    "year": 2004,
    "source": "考研英语一 · 翻译第61题",
    "questionType": "英译汉PartC",
    "text": "The Greeks assumed that the structure of language had some connection with the process of thought, which took root in Europe long before people realized how diverse languages could be.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 希腊人认为语言的结构与思维过程有某种联系，这一观念在人们意识到语言可以如此多样之前很久便已在欧洲生根。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> assumed that 引导宾语从句；which took root in Europe 非限制性定语从句，先行词为前句内容（即这一假定/观念）；long before people realized 时间状语从句，其中 how diverse languages could be 为 realized 的宾语从句（间接疑问句）。</span>",
    "translateLines": [
      "The Greeks assumed that the structure of language had some connection with the process of thought, which took root in Europe long before people realized how diverse languages could be."
    ],
    "glossary": {
      "assumed": "v. 假定；认为（assume 的过去式）",
      "took root": "生根；扎根（take root 的过去式，固定搭配）",
      "diverse": "adj. 多样的；不同的",
      "how diverse ... could be": "语言可以有多么多样（间接疑问句，宾语从句）"
    },
    "answer": "【结构拆解】\n主干：The Greeks assumed that [the structure of language had some connection with the process of thought]\n① assumed that — 宾语从句\n② which took root in Europe long before people realized how diverse languages could be — 非限制性定语从句，先行词为整个前句（这一观念）\n③ long before + 从句 — 时间状语，\"在……之前很久\"\n④ how diverse languages could be — 间接疑问句作 realized 的宾语从句\n【解题要点】which 的先行词是前整句（非某个名词），是考研常见的\"指代整句\"用法；间接疑问句语序为陈述句语序（how diverse languages could be，而非 how diverse could languages be）。",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "rd_t2004_62",
    "year": 2004,
    "source": "考研英语一 · 翻译第62题",
    "questionType": "英译汉PartC",
    "text": "We are obliged to them because some of these languages have since vanished, as the peoples who spoke them died out or became assimilated and lost their native languages.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 我们应当感谢他们，因为这些语言中有一些此后已经消失，那些曾使用这些语言的民族或已灭绝，或已被同化而失去了他们的母语。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> be obliged to 表\"感激……；对……有义务\"；because 引导原因状语从句；as 引导方式/原因从句；who spoke them 定语从句修饰 peoples；died out or became assimilated and lost 三个并列谓语。</span>",
    "translateLines": [
      "We are obliged to them because some of these languages have since vanished, as the peoples who spoke them died out or became assimilated and lost their native languages."
    ],
    "glossary": {
      "obliged to": "感激；有义务（be obliged to 固定搭配）",
      "vanished": "v. 消失（vanish 的过去分词）",
      "died out": "灭绝；消亡（die out 固定搭配）",
      "assimilated": "v. 被同化（assimilate 的过去分词）"
    },
    "answer": "【结构拆解】\n主干：We are obliged to them\n① because some of these languages have since vanished — 原因状语从句\n② as the peoples who spoke them died out or became assimilated and lost their native languages — as 引导方式/原因从句，解释语言消亡的原因\n③ who spoke them — 定语从句修饰 peoples\n④ died out / became assimilated / lost — 三个并列谓语（or ... and ...）\n【解题要点】be obliged to sb. = 感谢某人（≠ be obliged to do sth. = 被迫做某事），需根据语境辨别；as 从句此处作原因/方式状语，译为\"因为/随着\"。",
    "tags": [
      "#真题长难句",
      "#多重从句"
    ]
  },
  {
    "id": "rd_t2004_63",
    "year": 2004,
    "source": "考研英语一 · 翻译第63题",
    "questionType": "英译汉PartC",
    "text": "The newly described languages were often so strikingly different from the well studied languages of Europe and Southeast Asia that some scholars even accused Boas and Sapir of fabricating their data.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 这些新记录的语言往往与欧洲及东南亚那些研究完备的语言差异惊人，以至于一些学者甚至指控博厄斯和萨丕尔捏造数据。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> so ... that 结果状语从句；accuse sb. of doing sth. 固定搭配\"指控某人做了某事\"；newly described 与 well studied 均为过去分词短语作定语；strikingly 作副词修饰 different，强调\"惊人地\"。</span>",
    "translateLines": [
      "The newly described languages were often so strikingly different from the well studied languages of Europe and Southeast Asia that some scholars even accused Boas and Sapir of fabricating their data."
    ],
    "glossary": {
      "newly described": "新近被记录的（newly + 过去分词）",
      "strikingly": "adv. 惊人地；显著地",
      "accused ... of": "指控……做了……（accuse sb. of doing 固定搭配）",
      "fabricating": "v. 捏造；伪造（fabricate 的现在分词）"
    },
    "answer": "【结构拆解】\n主干：The newly described languages were often so strikingly different from ...\n① so strikingly different from ... that ... — so...that 结果状语从句\n② that some scholars even accused Boas and Sapir of fabricating their data — 结果从句，主干为 accused...of fabricating\n③ accuse sb. of doing sth. — 固定搭配，不可改为 accuse sb. to do\n【解题要点】so...that 结构中 so 修饰的是形容词/副词（此处 strikingly different）；accuse of 与 charge with 同义，均表\"指控\"，翻译时需体现\"指控/指责\"含义而非\"批评\"。",
    "tags": [
      "#真题长难句",
      "#结果状语从句"
    ]
  },
  {
    "id": "rd_t2004_64",
    "year": 2004,
    "source": "考研英语一 · 翻译第64题",
    "questionType": "英译汉PartC",
    "text": "Being interested in the relationship of language and thought, Whorf developed the idea that the structure of language determines the structure of habitual thought in a society.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 由于对语言与思维的关系感兴趣，沃尔夫发展出了这样一种观点：语言的结构决定了一个社会中惯常思维的结构。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Being interested in 分词短语作原因状语（因为……，由于……）；developed the idea that 中 that 引导同位语从句，解释说明 idea 的内容；注意同位语从句与定语从句的区别：同位语从句中 that 不作成分，定语从句中关系代词要作主/宾/表语。</span>",
    "translateLines": [
      "Being interested in the relationship of language and thought, Whorf developed the idea that the structure of language determines the structure of habitual thought in a society."
    ],
    "glossary": {
      "Being interested in": "由于对……感兴趣（原因状语）",
      "habitual": "adj. 惯常的；习惯性的",
      "determines": "v. 决定；确定（determine 第三人称单数）"
    },
    "answer": "【结构拆解】\n① Being interested in the relationship of language and thought — 现在分词短语，作原因状语\n② Whorf developed the idea — 主干\n③ that the structure of language determines the structure of habitual thought in a society — 同位语从句，解释 idea 的内容\n【解题要点】辨别同位语从句与定语从句：the idea THAT ... 中 that 不作任何成分，是纯粹的引导词（同位语从句）；若 that 替换成 which 可以成立，则是定语从句。此处无法替换，故为同位语从句。",
    "tags": [
      "#真题长难句",
      "#同位语从句"
    ]
  },
  {
    "id": "rd_t2004_65",
    "year": 2004,
    "source": "考研英语一 · 翻译第65题",
    "questionType": "英译汉PartC",
    "text": "Whorf came to believe in a sort of linguistic determinism which, in its strongest form, states that language imprisons the mind, and that the grammatical patterns in a language can produce far-reaching consequences for the culture of a society.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 沃尔夫开始信奉一种语言决定论，该理论以其最强形式断言：语言囚禁着思想，而且一种语言中的语法模式可以对一个社会的文化产生深远的影响。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> came to believe in 表\"逐渐开始相信\"；which ... states 非限制性定语从句；in its strongest form 为插入语；states that ... and that ... 两个并列宾语从句；far-reaching consequences for... 表\"对……的深远影响\"。</span>",
    "translateLines": [
      "Whorf came to believe in a sort of linguistic determinism which, in its strongest form, states that language imprisons the mind, and that the grammatical patterns in a language can produce far-reaching consequences for the culture of a society."
    ],
    "glossary": {
      "linguistic determinism": "n. 语言决定论",
      "imprisons": "v. 囚禁；限制（imprison 第三人称单数）",
      "grammatical patterns": "n. 语法模式；语法规律",
      "far-reaching consequences": "n. 深远的影响；广泛的后果"
    },
    "answer": "【结构拆解】\n主干：Whorf came to believe in a sort of linguistic determinism\n① which, in its strongest form, states that ... and that ... — 非限制性定语从句，修饰 linguistic determinism\n② in its strongest form — 插入语（插在 which 与 states 之间）\n③ states that language imprisons the mind — 第一个宾语从句\n④ and that the grammatical patterns ... can produce far-reaching consequences for... — 第二个并列宾语从句\n【解题要点】came to believe in = 逐渐开始相信（come to do 表\"逐渐/终于\"做某事）；定语从句中的插入语（in its strongest form）需识别后忽略以找主谓关系（which...states）。",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "rd_t2005_46",
    "year": 2005,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "Television is one of the means by which these feelings are created and conveyed -- and perhaps never before has it served so much to connect different peoples and nations as in the recent events in Europe.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 电视是创造和传递这些情感的媒介之一——也许从未像欧洲近期事件那样，它如此大地发挥了连接不同民族和国家的作用。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> by which 为介词 + 关系代词引导定语从句修饰 means；破折号后 never before has it served 为否定词前置引起的部分倒装；as in the recent events in Europe 为比较状语。</span>",
    "translateLines": [
      "Television is one of the means by which these feelings are created and conveyed -- and perhaps never before has it served so much to connect different peoples and nations as in the recent events in Europe."
    ],
    "glossary": {
      "means": "n. 手段；媒介（单复数同形）",
      "conveyed": "v. 传递；传达（convey 的过去分词）",
      "never before has it served": "否定副词前置引起倒装（never before + 助动词 + 主语）",
      "connect": "v. 连接；联系"
    },
    "answer": "【结构拆解】\n主干：Television is one of the means\n① by which these feelings are created and conveyed — 介词+关系代词定语从句，修饰 means\n② never before has it served so much to connect... as in the recent events — 破折号后独立分句；never before 前置引起部分倒装（has it 倒装）\n③ so...as — 同级比较，\"如……般如此\"\n【解题要点】否定副词（never, seldom, hardly, little 等）置于句首时，引发主谓部分倒装，是考研高频考点；never before has it served = it has never before served（还原语序辅助理解）。",
    "tags": [
      "#真题长难句",
      "#倒装句"
    ]
  },
  {
    "id": "rd_t2005_47",
    "year": 2005,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "In Europe, as elsewhere, multi-media groups have been increasingly successful: groups which bring together television, radio, newspapers, magazines and publishing houses that work in relation to one another.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 在欧洲，与其他地方一样，多媒体集团越来越成功：这些集团将电视、广播、报纸、杂志以及相互关联运作的出版社整合在一起。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> 冒号后的 groups which bring together... 是对主句 multi-media groups 的同位说明（同位语）；as elsewhere 为省略结构（= as is the case elsewhere）；that work in relation to one another 为定语从句修饰 publishing houses。</span>",
    "translateLines": [
      "In Europe, as elsewhere, multi-media groups have been increasingly successful: groups which bring together television, radio, newspapers, magazines and publishing houses that work in relation to one another."
    ],
    "glossary": {
      "as elsewhere": "如同在其他地方一样（省略结构）",
      "bring together": "将……汇集；整合（固定搭配）",
      "in relation to one another": "相互关联；彼此协作（固定搭配）"
    },
    "answer": "【结构拆解】\n主干：multi-media groups have been increasingly successful\n① as elsewhere — 插入语，省略了 as is the case elsewhere\n② 冒号后：groups which bring together television, radio, newspapers, magazines and publishing houses — 同位语，具体说明多媒体集团的构成\n③ that work in relation to one another — 定语从句修饰 publishing houses\n【解题要点】冒号在英语中常引出解释或列举，翻译为\":\"或\"——\"；as elsewhere = as (it is) elsewhere，省略了系动词，是考研常见省略形式。",
    "tags": [
      "#真题长难句",
      "#同位语"
    ]
  },
  {
    "id": "rd_t2005_48",
    "year": 2005,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "This alone demonstrates that the television business is not an easy world to survive in, a fact underlined by statistics that show that out of eighty European television networks no less than 50% took a loss in 1989.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 仅此一点就说明，电视行业并非一个容易生存的世界，这一事实被以下统计数据所印证：在八十家欧洲电视网中，不少于50%的电视台在1989年出现了亏损。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> demonstrates that 引导宾语从句；a fact underlined by statistics 为同位语，补充说明前句；that show that 为双重 that 从句（第一个 that 为定语从句引导词修饰 statistics，第二个 that 引导 show 的宾语从句）；no less than = at least，不少于。</span>",
    "translateLines": [
      "This alone demonstrates that the television business is not an easy world to survive in, a fact underlined by statistics that show that out of eighty European television networks no less than 50% took a loss in 1989."
    ],
    "glossary": {
      "underlined": "v. 强调；印证（underline 的过去分词，此处作定语）",
      "no less than": "不少于；至少（= at least）",
      "took a loss": "亏损；赔本（take a loss 的过去式）",
      "networks": "n. 电视网；广播网络"
    },
    "answer": "【结构拆解】\n主干：This alone demonstrates that the television business is not an easy world to survive in\n① a fact underlined by statistics — 逗号后同位语，修饰前整句\n② that show that out of eighty...no less than 50% took a loss — 双重 that：第一个 that 引导定语从句修饰 statistics；第二个 that 引导 show 的宾语从句\n③ no less than 50% — \"不少于50%\"（强调数量多，有时译作\"多达50%\"）\n【解题要点】双重 that 从句（that show that...）是考研翻译难点，需要识别两个 that 的语法角色分别是关系代词和连词；a fact + 过去分词作插入同位语，翻译时用破折号或独立分句处理。",
    "tags": [
      "#真题长难句",
      "#多重从句"
    ]
  },
  {
    "id": "rd_t2005_49",
    "year": 2005,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "Creating a \"European identity\" that respects the different cultures and traditions which go to make up the connecting fabric of the Old Continent is no easy task and demands a strategic choice.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 塑造一种尊重组成欧洲大陆这一连接性织物的不同文化和传统的\"欧洲认同感\"，绝非易事，需要做出战略性抉择。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Creating...is 动名词短语作主语（较长，需找谓语 is）；that respects 定语从句修饰 identity；which go to make up 非限制性定语从句修饰 cultures and traditions；go to make up = contribute to making up，\"构成；组成\"。</span>",
    "translateLines": [
      "Creating a \"European identity\" that respects the different cultures and traditions which go to make up the connecting fabric of the Old Continent is no easy task and demands a strategic choice."
    ],
    "glossary": {
      "identity": "n. 认同；身份认同",
      "go to make up": "构成；组成（go to do 此处 = contribute to）",
      "fabric": "n. （比喻）结构；织物；肌理",
      "the Old Continent": "n. 欧洲大陆（专有名词）"
    },
    "answer": "【结构拆解】\n主语：Creating a \"European identity\" [that respects the different cultures and traditions [which go to make up the connecting fabric of the Old Continent]]\n谓语：is no easy task and demands a strategic choice\n① that respects ... — 定语从句修饰 identity\n② which go to make up the connecting fabric of the Old Continent — 非限制性定语从句修饰 cultures and traditions\n③ go to make up — 固定短语，表\"构成；组成\"\n【解题要点】当动名词短语作主语且较长时，谓语动词用单数（is）；注意两层嵌套定语从句（that...which...），翻译时由内至外逐层展开。",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "rd_t2005_50",
    "year": 2005,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "In dealing with a challenge on such a scale, it is no exaggeration to say that the guiding principle behind European television must be \"Unity in diversity.\"<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 在应对如此规模的挑战时，毫不夸张地说，欧洲电视背后的指导原则必须是\"多元中的统一\"。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> it is no exaggeration to say that 固定句式，\"毫不夸张地说……\"；其中 it 为形式主语，真正主语为 to say that 从句；In dealing with 介词短语作状语，dealing with 为动名词。</span>",
    "translateLines": [
      "In dealing with a challenge on such a scale, it is no exaggeration to say that the guiding principle behind European television must be \"Unity in diversity.\""
    ],
    "glossary": {
      "exaggeration": "n. 夸张；夸大",
      "no exaggeration": "毫不夸张（固定表达）",
      "guiding principle": "n. 指导原则",
      "Unity in diversity": "\"多元中的统一\"（欧盟核心理念）"
    },
    "answer": "【结构拆解】\n① In dealing with a challenge on such a scale — 介词短语作状语\n② it is no exaggeration to say that... — 形式主语句型：it = 形式主语；to say that... = 真正主语\n③ the guiding principle behind European television must be \"Unity in diversity\" — that 引导的宾语从句内容\n【解题要点】it is no exaggeration to say (that)... 是考研写作和翻译的高频句型，意为\"可以毫不夸张地说……\"，注意 it 是形式主语而非指代词。",
    "tags": [
      "#真题长难句",
      "#形式主语"
    ]
  },
  {
    "id": "rd_t2006_46",
    "year": 2006,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "I shall define him as an individual who has elected as his primary duty and pleasure in life the activity of thinking in Socratic way about moral problems.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 我将把他定义为这样一个人：他选择了以苏格拉底式的方式思考道德问题，并将其作为自己人生中首要的职责和乐趣。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> define ... as 固定搭配；who has elected ... the activity of thinking 为定语从句，其中宾语 the activity of thinking 被提到 as his primary duty... 之后（宾语后置，因宾语过长）；elected...as 表\"选定……作为\"。</span>",
    "translateLines": [
      "I shall define him as an individual who has elected as his primary duty and pleasure in life the activity of thinking in Socratic way about moral problems."
    ],
    "glossary": {
      "elected": "v. 选择；选定（elect 的过去分词，此处作\"选定\"讲）",
      "primary": "adj. 首要的；主要的",
      "Socratic": "adj. 苏格拉底式的（苏格拉底哲学方法）",
      "moral problems": "n. 道德问题"
    },
    "answer": "【结构拆解】\n主干：I shall define him as an individual\n① who has elected [as his primary duty and pleasure in life] [the activity of thinking in Socratic way about moral problems] — 定语从句修饰 individual\n② 正常语序应为：who has elected the activity of thinking...as his primary duty and pleasure in life\n③ 宾语后置（Heavy NP shift）：因宾语 the activity of... 太长，故将宾语补足语 as his primary duty... 提前\n【解题要点】宾语后置是英语中减轻句尾重量的常见手段，恢复正常语序后才能准确翻译；define A as B = 将A定义/界定为B。",
    "tags": [
      "#真题长难句",
      "#宾语后置"
    ]
  },
  {
    "id": "rd_t2006_47",
    "year": 2006,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "His function is analogous to that of a judge, who must accept the obligation of revealing in as obvious a matter as possible the course of reasoning which led him to his decision.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 他的职能类似于法官的职能，法官必须承担尽可能清楚地揭示引导其做出裁决的推理过程的义务。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> be analogous to 固定搭配\"类似于\"；that of a judge 中 that 代指前文 function（避免重复）；who must accept 非限制性定语从句；in as obvious a matter as possible 为方式状语（as...as possible 结构）；which led him 定语从句修饰 course of reasoning。</span>",
    "translateLines": [
      "His function is analogous to that of a judge, who must accept the obligation of revealing in as obvious a matter as possible the course of reasoning which led him to his decision."
    ],
    "glossary": {
      "analogous": "adj. 类似的；相似的（analogous to = similar to）",
      "obligation": "n. 义务；责任",
      "revealing": "v. 揭示；展示（reveal 的动名词，作 obligation of 的宾语）",
      "course of reasoning": "n. 推理过程；思维脉络"
    },
    "answer": "【结构拆解】\n主干：His function is analogous to that of a judge\n① that = His function（代词替代避免重复）\n② who must accept the obligation of revealing... — 非限制性定语从句修饰 a judge\n③ in as obvious a matter as possible — 方式状语，结构为 as + adj + a + n + as possible（注意冠词位置）\n④ the course of reasoning which led him to his decision — 宾语，其中 which 定语从句修饰 course of reasoning\n⑤ 宾语后置：revealing [in as...] the course... → 正常语序 revealing the course...in as obvious a manner as possible\n【解题要点】as...as possible 中若有名词，结构为 as + adj + a/an + n + as possible（如 as obvious a matter as possible），冠词不提前，是考研语法细节。",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "rd_t2006_48",
    "year": 2006,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "I have excluded him because, while his accomplishments may contribute to the solution of moral problems, he has not been charged with the task of approaching any but the factual aspects of those problems.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 我把他排除在外，因为尽管他的成就可能有助于解决道德问题，但他并未承担起探究这些问题除事实层面以外任何方面的任务。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> while 引导让步状语从句（= although）；be charged with 固定搭配\"承担……任务；被指控……\"；any but the factual aspects = any aspects except the factual ones，\"除事实方面以外的任何方面\"；not...any but... = only，结构特殊。</span>",
    "translateLines": [
      "I have excluded him because, while his accomplishments may contribute to the solution of moral problems, he has not been charged with the task of approaching any but the factual aspects of those problems."
    ],
    "glossary": {
      "excluded": "v. 排除；不包括（exclude 的过去分词）",
      "accomplishments": "n. 成就；成绩（accomplishment 的复数）",
      "charged with": "被赋予（任务）；承担（be charged with 固定搭配）",
      "any but": "除……以外的任何（= except）"
    },
    "answer": "【结构拆解】\n主干：I have excluded him because...\n① because 引导原因状语从句\n② while his accomplishments may contribute to the solution of moral problems — while 作让步连词（= although），插入 because 从句中\n③ he has not been charged with the task of approaching any but the factual aspects — 主句；be charged with the task of doing = 被赋予做……的任务\n④ any but the factual aspects = any aspects except the factual ones（除事实层面以外的任何方面）\n【解题要点】while = although（让步义）是考研阅读高频用法；any but 结构意为\"除……以外的任何\"，注意不要误译为\"任何……但是\"。",
    "tags": [
      "#真题长难句",
      "#让步状语从句"
    ]
  },
  {
    "id": "rd_t2006_49",
    "year": 2006,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "But his primary task is not to think about the moral code, which governs his activity, any more than a businessman is expected to dedicate his energies to an exploration of rules of conduct in business.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 但他的首要任务并不是思考支配其行为的道德准则，正如不能指望一个商人把精力投入到对商业行为规则的探讨中一样。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> not ... any more than 固定结构\"不……正如……不……\"（表类比否定）；which governs his activity 非限制性定语从句；be expected to dedicate ... to 固定搭配\"被期望把……献给/投入到\"。</span>",
    "translateLines": [
      "But his primary task is not to think about the moral code, which governs his activity, any more than a businessman is expected to dedicate his energies to an exploration of rules of conduct in business."
    ],
    "glossary": {
      "moral code": "n. 道德准则；行为准则",
      "not...any more than": "不……正如……也不……（类比否定，固定结构）",
      "dedicate...to": "把……献给/投入到（固定搭配）",
      "conduct": "n. 行为；品行；举止"
    },
    "answer": "【结构拆解】\n主干：his primary task is not to think about the moral code\n① which governs his activity — 非限制性定语从句，修饰 the moral code\n② any more than a businessman is expected to dedicate his energies to an exploration of rules of conduct in business — not...any more than 类比否定结构\n③ not A any more than B = B 不（做某事），同样 A 也不（做某事）\n【解题要点】not...any more than 是考研翻译经典难点，翻译模板：\"A不……，正如B不……一样\"；此句意为：他无需思考道德准则，正如商人无需深究商业规则一样。",
    "tags": [
      "#真题长难句",
      "#特殊否定句"
    ]
  },
  {
    "id": "rd_t2006_50",
    "year": 2006,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "They may teach very well and more than earn their salaries, but most of them make little or no independent reflections on human problems which involve moral judgment.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 他们也许教得非常好，薪酬也绰绰有余，但他们中的大多数人几乎或根本不对涉及道德判断的人类问题作独立的思考。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> more than earn their salaries 中 more than 修饰动词，表\"不止……；绰绰有余\"；make little or no reflections on = hardly reflect on，\"几乎不/根本不思考\"；which involve 定语从句修饰 human problems。</span>",
    "translateLines": [
      "They may teach very well and more than earn their salaries, but most of them make little or no independent reflections on human problems which involve moral judgment."
    ],
    "glossary": {
      "more than earn": "绰绰有余地挣到（more than + 动词，表程度超过）",
      "make reflections on": "对……进行思考；反思（make reflections on 固定搭配）",
      "little or no": "几乎没有或根本没有",
      "moral judgment": "n. 道德判断；道德评判"
    },
    "answer": "【结构拆解】\n① They may teach very well and more than earn their salaries — 让步，两个并列谓语\n   — more than earn their salaries = earn their salaries and more（绰绰有余）\n② but most of them make little or no independent reflections on human problems — 转折主句\n③ which involve moral judgment — 定语从句修饰 human problems\n【解题要点】more than + 动词 = 不只是……/远超……（如 more than satisfied = 非常满意）；make reflections on = reflect on，是正式书面用法，翻译为\"对……进行思考/反思\"。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2007_46",
    "year": 2007,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "Traditionally, legal learning has been viewed in such institutions as the special preserve of lawyers, rather than a necessary part of the intellectual equipment of an educated person.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 传统上，在这类机构中，法律知识一直被视为律师的专属领域，而非受过良好教育的人必备的知识素养的一部分。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> be viewed as 固定搭配\"被视为\"；rather than 表对比\"而非\"；such institutions 中 such 作形容词（此类机构，指前文提及的法学院等）；the special preserve of lawyers 名词短语，preserve 此处作名词\"专属领域\"。</span>",
    "translateLines": [
      "Traditionally, legal learning has been viewed in such institutions as the special preserve of lawyers, rather than a necessary part of the intellectual equipment of an educated person."
    ],
    "glossary": {
      "legal learning": "n. 法律学习；法律知识",
      "preserve": "n. 专属领域；禁猎区（此处为比喻义）",
      "intellectual equipment": "n. 知识素养；智识装备",
      "rather than": "而非；而不是（对比结构）"
    },
    "answer": "【结构拆解】\n主干：legal learning has been viewed [in such institutions] as the special preserve of lawyers\n① in such institutions — 地点状语，指法学院等传统机构\n② as the special preserve of lawyers — be viewed as 结构中的表语\n③ rather than a necessary part of the intellectual equipment of an educated person — 对比，与 the special preserve of lawyers 并列构成对比\n【解题要点】preserve 作名词时意为\"（某群体的）专属领域/特权\"（如 a male preserve = 男性的专属领域），不要译成\"保护\"；rather than 连接两个名词短语作对比。",
    "tags": [
      "#真题长难句",
      "#对比结构"
    ]
  },
  {
    "id": "rd_t2007_47",
    "year": 2007,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "On the other hand, it links these concepts to everyday realities in a manner which is parallel to the links journalists forge on a daily basis as they cover and comment on the news.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 另一方面，它以一种与记者每天在报道和评论新闻时所构建的联系相类似的方式，将这些概念与日常现实联系起来。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> in a manner which is parallel to 定语从句修饰 manner；the links journalists forge 中 journalists forge 为定语从句（省略 that/which）修饰 links；as they cover and comment on the news 时间/方式状语从句；parallel to = similar to，\"与……类似/平行\"。</span>",
    "translateLines": [
      "On the other hand, it links these concepts to everyday realities in a manner which is parallel to the links journalists forge on a daily basis as they cover and comment on the news."
    ],
    "glossary": {
      "parallel to": "与……类似；平行于（be parallel to 固定搭配）",
      "forge": "v. 构建；锻造；建立（此处为比喻义）",
      "on a daily basis": "每天；日常地（固定短语）",
      "cover": "v. 报道（新闻）；涵盖"
    },
    "answer": "【结构拆解】\n主干：it links these concepts to everyday realities in a manner\n① which is parallel to the links journalists forge on a daily basis — 定语从句修饰 manner\n② the links [journalists forge on a daily basis] — journalists forge 为省略关系词的定语从句修饰 links\n③ as they cover and comment on the news — 时间/方式状语从句\n【解题要点】关系词省略（contact clause）：the links journalists forge = the links that journalists forge，当关系词作宾语时可省略；forge 在此为比喻用法，表\"建立/构建\"（forge links/relationships = 建立联系）。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2007_48",
    "year": 2007,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "But the idea that the journalist must understand the law more profoundly than an ordinary citizen rests on an understanding of the established conventions and special responsibilities of the news media.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 但是，认为记者必须比普通公民更深刻地理解法律这一观点，建立在对新闻媒体既定惯例和特殊责任的理解之上。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> the idea that 同位语从句（that 不作成分，解释 idea 的内容）；rests on = depends on / is based on，\"建立在……基础上\"；established conventions 意为\"已确立的惯例\"；profoundly 修饰 understand，作方式状语。</span>",
    "translateLines": [
      "But the idea that the journalist must understand the law more profoundly than an ordinary citizen rests on an understanding of the established conventions and special responsibilities of the news media."
    ],
    "glossary": {
      "profoundly": "adv. 深刻地；深入地",
      "rests on": "依赖于；建立在……之上（rest on 固定搭配）",
      "established conventions": "n. 既定惯例；已确立的规范",
      "special responsibilities": "n. 特殊责任；特定义务"
    },
    "answer": "【结构拆解】\n主干：the idea ... rests on an understanding of the established conventions and special responsibilities\n① that the journalist must understand the law more profoundly than an ordinary citizen — 同位语从句，解释 idea 的内容\n② rests on = is based on（固定搭配）\n③ an understanding of the established conventions and special responsibilities of the news media — 介词宾语，两个名词并列（conventions and responsibilities）\n【解题要点】the idea that 是同位语从句的标志（与定语从句区别：that 不作任何成分）；主语较长（the idea + 同位语从句），找谓语时需跳过从句直接定位 rests。",
    "tags": [
      "#真题长难句",
      "#同位语从句"
    ]
  },
  {
    "id": "rd_t2007_49",
    "year": 2007,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "In fact, it is difficult to see how journalists who do not have a clear grasp of the basic features of the Canadian Constitution can do a competent job on political stories.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 事实上，很难想象那些对加拿大宪法基本特征没有清晰把握的记者，如何能在政治新闻报道上胜任工作。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> it is difficult to see 形式主语句型，真正主语为后接不定式；how journalists ... can do a competent job 为间接疑问句（宾语从句）作 see 的宾语；who do not have ... 定语从句修饰 journalists；do a competent job on = 胜任……工作。</span>",
    "translateLines": [
      "In fact, it is difficult to see how journalists who do not have a clear grasp of the basic features of the Canadian Constitution can do a competent job on political stories."
    ],
    "glossary": {
      "grasp": "n. 把握；理解；掌握（have a grasp of = understand）",
      "Canadian Constitution": "n. 加拿大宪法",
      "competent": "adj. 胜任的；有能力的",
      "do a competent job on": "在……上做好工作；胜任……工作"
    },
    "answer": "【结构拆解】\n形式主语句：it is difficult to see [how journalists...can do a competent job on political stories]\n① it = 形式主语；to see how... = 真正主语（不定式短语）\n② how journalists...can do a competent job — 间接疑问句作 see 的宾语（陈述句语序）\n③ who do not have a clear grasp of the basic features of the Canadian Constitution — 定语从句修饰 journalists（插在 journalists 与 can do 之间）\n【解题要点】it is + adj + to do 形式主语结构中，找真正主语需识别后面的不定式；how 引导的间接疑问句语序为\"how + 主语 + 谓语\"（非疑问句语序）。",
    "tags": [
      "#真题长难句",
      "#形式主语"
    ]
  },
  {
    "id": "rd_t2007_50",
    "year": 2007,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "While comment and reaction from lawyers may enhance stories, it is preferable for journalists to rely on their own notions of significance and make their own judgments.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 尽管律师的评论和反应可能会充实报道，但记者最好还是依靠自己对重要性的判断，并自行做出裁量。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> while 引导让步状语从句（= although）；it is preferable for sb. to do 固定句型，\"对某人而言最好做……\"，其中 it 为形式主语，for journalists 引出逻辑主语，to rely on... and make... 为真正主语（两个并列不定式）。</span>",
    "translateLines": [
      "While comment and reaction from lawyers may enhance stories, it is preferable for journalists to rely on their own notions of significance and make their own judgments."
    ],
    "glossary": {
      "enhance": "v. 提升；充实；增强",
      "preferable": "adj. 更好的；更可取的（preferable for sb. to do）",
      "notions of significance": "n. 对重要性的判断/看法",
      "judgments": "n. 判断；裁量（judgment 的复数）"
    },
    "answer": "【结构拆解】\n① While comment and reaction from lawyers may enhance stories — while 让步从句（= although）\n② it is preferable for journalists to rely on their own notions of significance and make their own judgments — 形式主语句型\n   — it = 形式主语\n   — for journalists = 不定式的逻辑主语\n   — to rely on...and make... = 真正主语（两个并列不定式）\n【解题要点】it is + adj + for sb. + to do 是形式主语的完整形式，for sb. 给出动作执行者（逻辑主语）；preferable 意为\"更可取的/更好的\"，注意与 preferable to（比……更好）的搭配用法。",
    "tags": [
      "#真题长难句",
      "#形式主语"
    ]
  },
  {
    "id": "rd_t2008_46",
    "year": 2008,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "He believes that this very difficulty may have had the compensating advantage of forcing him to think long and intently about every sentence, and thus enabling him to detect errors in reasoning and in his own observations.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 他相信，正是这一困难可能具有一种补偿性的优势，迫使他对每个句子进行长时间、专注地思考，从而使他能够发现推理和自身观察中的错误。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> believes that 宾语从句；the compensating advantage of forcing him to think 中 forcing 动名词作 of 的宾语，并带宾语补足语结构（force sb. to do）；thus enabling 为结果状语（thus + 现在分词）；and 并列 forcing 与 enabling 两个动名词。</span>",
    "translateLines": [
      "He believes that this very difficulty may have had the compensating advantage of forcing him to think long and intently about every sentence, and thus enabling him to detect errors in reasoning and in his own observations."
    ],
    "glossary": {
      "compensating": "adj. 补偿性的；弥补的",
      "intently": "adv. 专注地；聚精会神地",
      "detect": "v. 发现；察觉；检测",
      "thus enabling": "从而使……（thus + 现在分词表结果）"
    },
    "answer": "【结构拆解】\n主干：He believes that this very difficulty may have had the compensating advantage\n① that 引导宾语从句\n② the compensating advantage of [forcing him to think...] and [thus enabling him to detect...]\n   — of 后接两个并列动名词短语（forcing...and enabling...）\n   — force sb. to do 强迫某人做某事\n   — thus enabling = thus (it) enables，表结果（thus + 分词）\n【解题要点】this very difficulty 中 very 作形容词（= this particular / this exact difficulty），而非副词，翻译为\"正是这一困难\"；may have had 为过去推测的情态结构（可能曾具有）。",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "rd_t2008_47",
    "year": 2008,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "He asserted, also, that his power to follow a long and purely abstract train of thought was very limited, for which reason he felt certain that he never could have succeeded with mathematics.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 他还断言，自己跟随漫长而纯粹抽象的思维脉络的能力非常有限，正是因为这个原因，他确信自己绝不可能在数学上取得成功。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> for which reason 为介词 + 关系代词引导的非限制性定语从句（= and for this reason），作原因状语；a train of thought 固定短语\"一系列思路/思维脉络\"；feel certain that 表\"确信……\"；never could have succeeded 为情态完成时的否定形式。</span>",
    "translateLines": [
      "He asserted, also, that his power to follow a long and purely abstract train of thought was very limited, for which reason he felt certain that he never could have succeeded with mathematics."
    ],
    "glossary": {
      "asserted": "v. 断言；声称（assert 的过去式）",
      "train of thought": "n. 思维脉络；一系列想法（固定短语）",
      "for which reason": "因此；由于这个原因（介词+关系代词，非限制性）",
      "feel certain that": "确信……；断定……"
    },
    "answer": "【结构拆解】\n主干：He asserted that his power to follow...was very limited\n① asserted, also, that — 插入语 also 不影响主谓\n② his power to follow a long and purely abstract train of thought — 不定式 to follow 修饰 power\n③ , for which reason he felt certain that... — 非限制性定语从句（= and for this reason he felt certain that...）\n④ that he never could have succeeded with mathematics — felt certain 的宾语从句；never could have succeeded = 情态完成时（过去推测否定）\n【解题要点】for which reason = and for this reason（原因状语性质的非限制性定语从句，考研高频结构）；never could have done 表\"（过去）绝不可能做到\"，体现对过去事实的否定推测。",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "rd_t2008_48",
    "year": 2008,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "On the other hand, he did not accept as well founded the charge made by some of his critics that, while he was a good observer, he had no power of reasoning.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 另一方面，他不接受他的一些批评者提出的那种有据可依的指责——尽管他是一个出色的观察者，但他缺乏推理能力。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> accept...as well founded 中宾语 the charge 被后置（宾语后置，因宾语太长）；正常语序应为 accept the charge...as well founded；made by some of his critics 过去分词作后置定语；that 引导同位语从句说明 charge 的内容；while 作让步连词（= although）。</span>",
    "translateLines": [
      "On the other hand, he did not accept as well founded the charge made by some of his critics that, while he was a good observer, he had no power of reasoning."
    ],
    "glossary": {
      "well founded": "adj. 有充分根据的；有据可依的",
      "charge": "n. 指责；控诉；指控（此处为名词）",
      "made by": "由……提出的（made 过去分词作后置定语）",
      "power of reasoning": "n. 推理能力"
    },
    "answer": "【结构拆解】\n正常语序还原：he did not accept [the charge made by some of his critics that...] as well founded\n① accept A as B — 把A视为/接受为B（宾语 the charge 因过长后置）\n② the charge made by some of his critics — made 过去分词后置定语修饰 charge\n③ that, while he was a good observer, he had no power of reasoning — that 引导同位语从句，解释 charge 的内容\n④ while he was a good observer — while 作让步连词（= although）\n【解题要点】宾语后置是2008年真题最大难点：accept as well founded the charge... → 恢复语序才能准确理解；well founded 意为\"（论据）充分的/有根据的\"，是固定形容词短语。",
    "tags": [
      "#真题长难句",
      "#宾语后置"
    ]
  },
  {
    "id": "rd_t2008_49",
    "year": 2008,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "He adds humbly that perhaps he was \"superior to the common run of men in noticing things which easily escape attention, and in observing them carefully.\"<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 他谦虚地补充说，也许他比普通人更善于注意那些容易被忽视的事物，并仔细观察它们。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> adds that 宾语从句；superior to 固定搭配\"优于；强于\"；the common run of men = ordinary people，\"普通人\"（固定表达）；in noticing...and in observing 两个并列介词短语作方式状语；which easily escape attention 定语从句修饰 things。</span>",
    "translateLines": [
      "He adds humbly that perhaps he was \"superior to the common run of men in noticing things which easily escape attention, and in observing them carefully.\""
    ],
    "glossary": {
      "humbly": "adv. 谦虚地；谦逊地",
      "superior to": "优于；胜过（固定搭配，不用 superior than）",
      "the common run of men": "普通人；一般人（固定表达）",
      "escape attention": "逃脱注意；被忽视（固定搭配）"
    },
    "answer": "【结构拆解】\n主干：He adds humbly that...\n① that 引导宾语从句\n② he was superior to the common run of men in noticing...and in observing... — superior to 表比较；in noticing/observing 表方式\n③ which easily escape attention — 定语从句修饰 things\n【解题要点】superior to 是比较结构（不用 than），类似的还有 inferior to（劣于）、prior to（先于）、senior to（年长于）；the common run of men 是固定短语，意为\"普通人\"，翻译时不要逐字直译为\"男人的普通运作\"。",
    "tags": [
      "#真题长难句",
      "#宾语从句"
    ]
  },
  {
    "id": "rd_t2008_50",
    "year": 2008,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "Darwin was convinced that the loss of these tastes was not only a loss of happiness, but might possibly be injurious to the intellect, and more probably to the moral character.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 达尔文确信，丧失这些兴趣爱好不仅是一种幸福的丧失，还可能有损智力，更大可能是有损道德品质。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> be convinced that 固定搭配\"确信……\"；not only...but（also）...关联并列，连接两个表语成分；injurious to 固定搭配\"有害于；有损于\"；and more probably to the moral character 为省略句，补全为 and might more probably be injurious to the moral character。</span>",
    "translateLines": [
      "Darwin was convinced that the loss of these tastes was not only a loss of happiness, but might possibly be injurious to the intellect, and more probably to the moral character."
    ],
    "glossary": {
      "convinced that": "确信……（be convinced that 固定搭配）",
      "tastes": "n. 爱好；兴趣；品味（此处指美学/文学等审美情趣）",
      "injurious to": "有害于；有损于（固定搭配，= harmful to）",
      "intellect": "n. 智力；理智；才智",
      "moral character": "n. 道德品质；道德品格"
    },
    "answer": "【结构拆解】\n主干：Darwin was convinced that the loss of these tastes was...\n① be convinced that — 宾语从句\n② not only a loss of happiness, but might possibly be injurious to the intellect — not only...but 并列结构\n③ and more probably to the moral character — 省略句，补全为：and might more probably be injurious to the moral character\n【解题要点】省略结构：and more probably to the moral character 需在翻译中补出被省略的 might be injurious；not only...but（also）连接句子成分时注意语义上的递进关系（不仅是……更可能是……）。",
    "tags": [
      "#真题长难句",
      "#省略句"
    ]
  },
  {
    "id": "rd_t2009_46",
    "year": 2009,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "It may be said that the measure of the worth of any social institution is its effect in enlarging and improving experience, but this effect is not a part of its original motive.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 可以说，任何社会机构的价值标准在于其扩大和改善经验的效果，但这种效果并非其最初动机的一部分。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> It may be said that 为形式主语句型，it = 形式主语，that 引导真正主语（宾语从句）；the measure of the worth 为名词短语作主语；in enlarging and improving experience 动名词并列作介词宾语；but 转折连接第二个独立分句。</span>",
    "translateLines": [
      "It may be said that the measure of the worth of any social institution is its effect in enlarging and improving experience, but this effect is not a part of its original motive."
    ],
    "glossary": {
      "the measure of the worth": "n. 价值的衡量标准（measure = standard/criterion）",
      "social institution": "n. 社会机构；社会制度",
      "enlarging": "v. 扩大；拓展（enlarge 的动名词）",
      "original motive": "n. 最初动机；原始目的"
    },
    "answer": "【结构拆解】\n主干：It may be said that [the measure of the worth of any social institution is its effect in enlarging and improving experience]\n① It may be said that — 形式主语句，it = 形式主语；that 从句 = 真正主语\n② the measure of the worth of any social institution — 多重 of 短语修饰链，核心名词为 measure\n③ its effect in enlarging and improving experience — 表语；in enlarging and improving = 动名词并列\n④ but this effect is not a part of its original motive — 转折分句\n【解题要点】连续多个 of 短语时，要识别核心名词（measure），逐层展开修饰关系；may be said 情态被动表委婉/客观语气，译为\"可以说……\"。",
    "tags": [
      "#真题长难句",
      "#形式主语"
    ]
  },
  {
    "id": "rd_t2009_47",
    "year": 2009,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "Only gradually was the by-product of the institution noted, and only more gradually still was this effect considered as a directive factor in the conduct of the institution.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 这一机构的副产品只是逐渐地被注意到，而这种效果被视为该机构运作中的指导性因素就更是缓慢了。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Only gradually 置于句首引发部分倒装（was...noted）；两个并列的倒装句由 and 连接；only more gradually still 表\"更慢地\"（still 强调比较级）；be considered as 固定搭配\"被视为；被认为是\"。</span>",
    "translateLines": [
      "Only gradually was the by-product of the institution noted, and only more gradually still was this effect considered as a directive factor in the conduct of the institution."
    ],
    "glossary": {
      "by-product": "n. 副产品；附带效果",
      "only gradually": "仅仅逐渐地（only 修饰副词，引发倒装）",
      "directive factor": "n. 指导性因素；导向因素",
      "conduct": "n. 运作；管理；行为（此处指机构运作）"
    },
    "answer": "【结构拆解】\n两个并列倒装句：\n① Only gradually was [the by-product of the institution] noted\n  — Only + 副词/状语 置首 → 主谓倒装（was...noted）\n  — 正常语序：the by-product was only gradually noted\n② and only more gradually still was this effect considered as a directive factor in the conduct of the institution\n  — only more gradually still 置首 → 倒装\n  — still 强调比较级（更加……），修饰 more gradually\n【解题要点】only + 状语/副词位于句首时必须倒装，是考研语法经典考点；still 修饰比较级时表示\"还要更……/更……\"（如 even more, still more）。",
    "tags": [
      "#真题长难句",
      "#倒装句"
    ]
  },
  {
    "id": "rd_t2009_48",
    "year": 2009,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "While it is easy to ignore in our contact with them the effect of our acts upon their disposition, it is not so easy as in dealing with adults.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 虽然在与儿童的接触中，我们容易忽视自己的行为对他们性情的影响，但这种忽视并不像对待成人那样容易。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> While 引导让步状语从句；从句中 it is easy to ignore...the effect 为形式主语结构，真正主语为不定式（to ignore the effect），宾语 the effect 因被修饰语拉长而后置；it is not so easy as in dealing with adults 为主句，省略了比较内容（= it is not so easy to ignore this effect as it is in dealing with adults）。</span>",
    "translateLines": [
      "While it is easy to ignore in our contact with them the effect of our acts upon their disposition, it is not so easy as in dealing with adults."
    ],
    "glossary": {
      "contact with": "n./v. 与……接触",
      "disposition": "n. 性情；性格；倾向（= temperament）",
      "not so easy as": "不像……那样容易（同级比较的否定形式）",
      "in dealing with": "在对待/处理……方面"
    },
    "answer": "【结构拆解】\n① While it is easy to ignore [in our contact with them] [the effect of our acts upon their disposition]\n  — While = although（让步）\n  — it = 形式主语；真正主语 = to ignore the effect...（宾语后置）\n  — in our contact with them — 插入的方式状语\n② it is not so easy as in dealing with adults — 主句\n  — not so...as — 同级比较否定\n  — 省略补全：not so easy [to ignore this effect] as [it is] in dealing with adults\n【解题要点】宾语后置（the effect 置于 in our contact with them 之后）导致结构看似混乱；还原正常语序：to ignore the effect of our acts upon their disposition in our contact with them，便于理解。",
    "tags": [
      "#真题长难句",
      "#让步状语从句"
    ]
  },
  {
    "id": "rd_t2009_49",
    "year": 2009,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "Since our chief business with them is to enable them to share in a common life, we cannot help considering whether or not we are forming the powers which will secure this ability.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 由于我们与他们打交道的主要任务是使他们能够参与共同的生活，我们不得不考虑我们是否正在培养将保证他们获得这种能力的各种力量。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Since 引导原因状语从句；enable them to share 固定结构（enable sb. to do）；cannot help doing 固定搭配\"不得不做；禁不住做\"；whether or not 引导宾语从句；which will secure 定语从句修饰 powers。</span>",
    "translateLines": [
      "Since our chief business with them is to enable them to share in a common life, we cannot help considering whether or not we are forming the powers which will secure this ability."
    ],
    "glossary": {
      "chief business": "n. 主要任务；主要事务",
      "enable sb. to do": "使某人能够做某事（固定结构）",
      "cannot help doing": "不得不做；忍不住做（固定搭配）",
      "secure": "v. 确保；保障；获得"
    },
    "answer": "【结构拆解】\n① Since our chief business with them is to enable them to share in a common life — since 原因从句\n  — enable them to share in a common life — enable sb. to do 结构\n② we cannot help considering whether or not we are forming the powers — 主句\n  — cannot help doing — 不得不做……\n  — whether or not — 引导宾语从句（whether...or not = whether or not）\n③ which will secure this ability — 定语从句修饰 powers\n【解题要点】cannot help doing（不得不/忍不住）与 cannot help but do 同义，注意都接动名词（doing）；powers 此处为抽象义，指\"各种能力/力量\"（复数强调多方面）。",
    "tags": [
      "#真题长难句",
      "#宾语从句"
    ]
  },
  {
    "id": "rd_t2009_50",
    "year": 2009,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "We are thus led to distinguish, within the broad educational process which we have been so far considering, a more formal kind of education -- that of direct tuition or schooling.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 于是我们被引导着在我们迄今所考察的广泛教育进程中，区分出一种更为正式的教育形式——即直接的讲授或学校教育。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> be led to do 固定结构\"被引导做……；被带领做……\"；distinguish...within...为宾语后置（宾语 a more formal kind 因修饰成分拉长而后置至状语后）；which we have been so far considering 定语从句修饰 process；破折号后 that of direct tuition 中 that = that kind，作同位语。</span>",
    "translateLines": [
      "We are thus led to distinguish, within the broad educational process which we have been so far considering, a more formal kind of education -- that of direct tuition or schooling."
    ],
    "glossary": {
      "be led to do": "被引导做……；被带领去做……",
      "distinguish": "v. 区分；辨别；识别",
      "so far": "迄今；到目前为止",
      "tuition": "n. 讲授；学费；教学（此处指\"讲授/授课\"）"
    },
    "answer": "【结构拆解】\n主干：We are thus led to distinguish [a more formal kind of education]\n① within the broad educational process which we have been so far considering — 插入的地点/范围状语\n  — which we have been so far considering — 定语从句修饰 process（so far = up to now）\n② a more formal kind of education — 宾语（后置在插入状语之后）\n③ that of direct tuition or schooling — 破折号后同位语；that = that kind（代指 a more formal kind of education）\n【解题要点】宾语被插入的状语分隔而后置（distinguish, within..., a more formal kind），是考研翻译中典型的\"割裂结构\"；thus 表\"因此；从而\"，体现上下文逻辑推论关系。",
    "tags": [
      "#真题长难句",
      "#宾语后置"
    ]
  },
  {
    "id": "rd_t2010_46",
    "year": 2010,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "Scientists jumped to the rescue with some distinctly shaky evidence to the effect that insects would eat us up if birds failed to control them; the evidence had to be economic in order to be valid.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 科学家们急忙用一些明显站不住脚的证据来救场，大意是说如果鸟类不加以控制，昆虫就会将我们消灭；这些证据必须具有经济上的意义才能被认为有效。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> jumped to the rescue 固定表达\"急忙救场；仓促援救\"；to the effect that 固定搭配\"大意是……；意思是说……\"（引导同位语从句说明 evidence 的内容）；in order to be valid 目的状语。</span>",
    "translateLines": [
      "Scientists jumped to the rescue with some distinctly shaky evidence to the effect that insects would eat us up if birds failed to control them; the evidence had to be economic in order to be valid."
    ],
    "glossary": {
      "jumped to the rescue": "急忙救场（jump to the rescue 固定表达）",
      "distinctly shaky": "明显站不住脚的；明显不可靠的",
      "to the effect that": "大意是……；意思是说……（固定搭配，引导同位语从句）",
      "eat up": "吃光；消灭（eat up 固定短语）"
    },
    "answer": "【结构拆解】\n主干：Scientists jumped to the rescue with some distinctly shaky evidence\n① to the effect that insects would eat us up if birds failed to control them — 同位语从句，解释 evidence 的内容\n  — if birds failed to control them — 条件状语从句\n② the evidence had to be economic in order to be valid — 分号后独立分句\n  — in order to be valid — 目的状语\n【解题要点】to the effect that 是考研高频短语，意为\"大意是/内容是……\"，引导同位语从句修饰名词（如 evidence, statement, message 等）；distinctly = clearly/obviously，修饰 shaky（\"明显不可靠的\"）。",
    "tags": [
      "#真题长难句",
      "#同位语从句"
    ]
  },
  {
    "id": "rd_t2010_47",
    "year": 2010,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "But we have at least drawn near the point of admitting that birds should continue as a matter of intrinsic right, regardless of the presence or absence of economic advantage to us.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 但我们至少已接近于承认：鸟类应当继续存在，这是一种内在的权利，无论对我们是否有经济上的益处。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> drawn near the point of doing 固定表达\"接近于做……\"；admitting that 动名词后接宾语从句；as a matter of intrinsic right 介词短语作方式状语；regardless of 固定搭配\"不管；无论\"；the presence or absence of 固定结构\"……的有无\"。</span>",
    "translateLines": [
      "But we have at least drawn near the point of admitting that birds should continue as a matter of intrinsic right, regardless of the presence or absence of economic advantage to us."
    ],
    "glossary": {
      "drawn near the point of": "接近于……的程度（draw near the point of 固定搭配）",
      "intrinsic right": "n. 内在权利；固有权利",
      "regardless of": "不管；无论（固定搭配）",
      "the presence or absence of": "……的有无；是否存在……"
    },
    "answer": "【结构拆解】\n主干：we have at least drawn near the point of admitting that birds should continue\n① drawn near the point of admitting — 动名词短语作 of 的宾语\n② that birds should continue as a matter of intrinsic right — that 引导 admitting 的宾语从句\n③ as a matter of intrinsic right — 方式状语，\"作为一种内在权利\"\n④ regardless of the presence or absence of economic advantage to us — 让步状语\n【解题要点】the presence or absence of = whether there is or not（……的存在与否）；as a matter of = 作为……的问题/事项，此处意为\"这是内在权利的问题/以内在权利的方式\"。",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "rd_t2010_48",
    "year": 2010,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "Time was when biologists somewhat overstated the evidence that these creatures preserve the health of game by killing the physically weak, or that they prey only on \"worthless\" species.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 曾经有一段时期，生物学家在某种程度上夸大了这些动物通过猎杀体弱者来维护猎物种群健康、或者它们仅捕食\"无价值\"物种的证据。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Time was when 固定句型\"曾经有一段时期……\"（= There was a time when）；when 引导表语从句；two that 从句（that...or that...）并列作同位语从句，修饰 evidence；prey on 固定搭配\"捕食；掠食\"。</span>",
    "translateLines": [
      "Time was when biologists somewhat overstated the evidence that these creatures preserve the health of game by killing the physically weak, or that they prey only on \"worthless\" species."
    ],
    "glossary": {
      "Time was when": "曾经有一段时期……（固定句型）",
      "overstated": "v. 夸大；言过其实（overstate 的过去式）",
      "game": "n. 猎物；野生动物（此处为生态义）",
      "prey on": "捕食；掠食（固定搭配）"
    },
    "answer": "【结构拆解】\n主干：Time was [when biologists somewhat overstated the evidence that... or that...]\n① Time was when — 固定句型，when 引导表语从句（= There was a time when）\n② overstated the evidence that...or that... — 两个并列 that 同位语从句修饰 evidence\n③ by killing the physically weak — 方式状语\n④ prey only on \"worthless\" species — 仅捕食\"无价值\"物种\n【解题要点】Time was when 是考研翻译经典固定句型，意为\"曾几何时/曾经有一段时期\"；the physically weak = the physically weak animals（\"体弱的动物\"，形容词 + the = 某类人/物）。",
    "tags": [
      "#真题长难句",
      "#表语从句"
    ]
  },
  {
    "id": "rd_t2010_49",
    "year": 2010,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "In Europe, where forestry is ecologically more advanced, the non-commercial tree species are recognized as members of native forest community, to be preserved as such, within reason.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 在欧洲，由于林业在生态方面更为先进，非商业性树木种类被认定为原生森林群落的成员，应当在合理范围内照此加以保护。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> where 引导非限制性定语从句（先行词 Europe，但语义近于原因状语）；be recognized as 固定搭配\"被认定为\"；to be preserved as such 不定式作目的/结果状语，as such = as members（照此；如此）；within reason 固定短语\"在合理范围内\"。</span>",
    "translateLines": [
      "In Europe, where forestry is ecologically more advanced, the non-commercial tree species are recognized as members of native forest community, to be preserved as such, within reason."
    ],
    "glossary": {
      "forestry": "n. 林业；林学",
      "ecologically": "adv. 在生态方面；从生态学角度",
      "non-commercial": "adj. 非商业性的",
      "as such": "照此；以这种身份（指代前文内容）",
      "within reason": "在合理范围内（固定短语）"
    },
    "answer": "【结构拆解】\n主干：the non-commercial tree species are recognized as members of native forest community\n① In Europe, where forestry is ecologically more advanced — where 引导非限制性定语从句（此处兼具原因含义）\n② to be preserved as such, within reason — 不定式短语作目的/结果状语\n  — as such = as members of the community（以这种身份/照此）\n  — within reason — 插入补充，表限制（在合理范围内）\n【解题要点】where 引导的非限制性定语从句修饰地名，可兼具原因状语含义，翻译时可用\"由于/因为……\"；as such 是高频代词性短语，代指前文已提到的身份/类别。",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "rd_t2010_50",
    "year": 2010,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "It tends to ignore, and thus eventually to eliminate, many elements in the land community that lack commercial value, but that are essential to its healthy functioning.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 它往往会忽视、进而最终消除土地群落中那些缺乏商业价值、但对其健康运转至关重要的许多因素。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> tend to do 固定搭配\"倾向于；往往会\"；to ignore and thus eventually to eliminate 两个并列不定式，宾语 many elements 后置（宾语后置）；that lack...but that are essential...两个并列关系从句修饰 elements；essential to 固定搭配\"对……至关重要\"。</span>",
    "translateLines": [
      "It tends to ignore, and thus eventually to eliminate, many elements in the land community that lack commercial value, but that are essential to its healthy functioning."
    ],
    "glossary": {
      "tend to": "倾向于；往往（tend to do 固定搭配）",
      "eliminate": "v. 消除；去除；淘汰",
      "land community": "n. 土地群落（生态学术语）",
      "essential to": "对……至关重要（固定搭配）",
      "functioning": "n. 运转；运作（function 的动名词）"
    },
    "answer": "【结构拆解】\n主干：It tends to ignore [and thus eventually to eliminate] many elements in the land community\n① to ignore...and thus eventually to eliminate — 两个并列不定式（宾语 many elements 被后置）\n② many elements in the land community — 宾语（后置在两个不定式之后）\n③ that lack commercial value — 定语从句，修饰 elements\n④ but that are essential to its healthy functioning — 并列的对比定语从句（but that = but which）\n【解题要点】两个并列 that 定语从句（that lack...but that are essential...）构成对比关系（缺乏商业价值 vs. 对运转至关重要）；thus 在两个不定式之间表\"进而/从而\"的因果递进。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2011_46",
    "year": 2011,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "Allen's contribution was to take an assumption we all share -- that because we are not robots we therefore control our thoughts -- and reveal its erroneous nature.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 艾伦的贡献在于提出了一个我们都持有的假设——因为我们不是机器人，所以我们能够控制自己的思想——并揭示了这一假设的错误本质。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> 主语从句/表语结构：was to take...and reveal 两个并列不定式作表语；an assumption we all share 中 we all share 为省略关系词的定语从句；破折号之间 that because...therefore control our thoughts 为同位语从句解释 assumption 的内容；because 引导原因状语从句在同位语从句内部嵌套。</span>",
    "translateLines": [
      "Allen's contribution was to take an assumption we all share -- that because we are not robots we therefore control our thoughts -- and reveal its erroneous nature."
    ],
    "glossary": {
      "assumption": "n. 假设；假定；设想",
      "erroneous": "adj. 错误的；不正确的（= wrong/incorrect，较正式）",
      "therefore": "adv. 因此；所以（在从句内部连接因果）",
      "reveal": "v. 揭示；揭露；展示"
    },
    "answer": "【结构拆解】\n主干：Allen's contribution was [to take an assumption...] and [reveal its erroneous nature]\n① was to take...and reveal — 两个并列不定式作表语（be to do 表\"在于做……\"）\n② an assumption [we all share] — 省略关系词的定语从句（= an assumption that we all share）\n③ 破折号内：that because we are not robots we therefore control our thoughts — 同位语从句，解释 assumption 内容；内部嵌套 because 原因从句\n【解题要点】破折号在英语中常用于插入同位语或补充说明，翻译时可保留破折号或用括号处理；erroneous = wrong，是学术文章中的正式用词，翻译为\"错误的/谬误的\"。",
    "tags": [
      "#真题长难句",
      "#同位语从句"
    ]
  },
  {
    "id": "rd_t2011_47",
    "year": 2011,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "While we may be able to sustain the illusion of control through the conscious mind alone, in reality we are continually faced with a question: \"Why cannot I make myself do this or achieve that?\"<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 尽管我们可能仅凭意识思维就能维持一种控制的幻觉，但现实中我们不断地面对这样一个问题：\"为什么我无法让自己做这件事或实现那个目标？\"<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> While 引导让步状语从句；sustain the illusion of control 固定搭配\"维持控制的幻觉\"；through the conscious mind alone 方式状语（alone 后置强调\"仅凭\"）；Why cannot I 为间接疑问句引号内的反问语气（否定疑问形式）。</span>",
    "translateLines": [
      "While we may be able to sustain the illusion of control through the conscious mind alone, in reality we are continually faced with a question: \"Why cannot I make myself do this or achieve that?\""
    ],
    "glossary": {
      "sustain": "v. 维持；支撑；保持",
      "illusion": "n. 幻觉；错觉；假象",
      "conscious mind": "n. 意识思维；有意识的心理",
      "continually": "adv. 不断地；持续地",
      "make myself do": "让自己做（make sb. do 使役结构）"
    },
    "answer": "【结构拆解】\n① While we may be able to sustain the illusion of control through the conscious mind alone — While 让步从句\n  — through the conscious mind alone — 方式状语（alone 强调\"仅仅靠\"）\n② in reality we are continually faced with a question — 主句（be faced with 被动，面对）\n③ 冒号后引语：\"Why cannot I make myself do this or achieve that?\" — 引号内疑问句（否定疑问语气，非倒装问句）\n【解题要点】through...alone = solely through...（仅凭……）；make myself do = 使役结构（make sb. do），此处反身代词 myself 表\"让自己去做\"；冒号引出具体内容，翻译时保留冒号。",
    "tags": [
      "#真题长难句",
      "#让步状语从句"
    ]
  },
  {
    "id": "rd_t2011_48",
    "year": 2011,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "This seems a justification for neglect of those in need, and a rationalization of exploitation, of the superiority of those at the top and the inferiority of those at the bottom.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 这似乎是对忽视有需要的人的一种辩解，也是对剥削的一种合理化，是对处于顶层者优越性以及处于底层者劣势的一种合理化。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> This seems a justification（省略了系动词 to be，= This seems to be a justification）；a justification for...and a rationalization of... 并列结构；后续两个 of 短语（of the superiority...and the inferiority...）均修饰 rationalization，形成递进并列。</span>",
    "translateLines": [
      "This seems a justification for neglect of those in need, and a rationalization of exploitation, of the superiority of those at the top and the inferiority of those at the bottom."
    ],
    "glossary": {
      "justification": "n. 辩解；正当理由；合理化依据",
      "rationalization": "n. 合理化解释；自我辩护",
      "exploitation": "n. 剥削；利用",
      "superiority": "n. 优越（性）；上等",
      "inferiority": "n. 劣势；下等；低人一等"
    },
    "answer": "【结构拆解】\n主干：This seems [to be] a justification for neglect of those in need\n① This seems a justification — seems 后省略 to be（系动词省略）\n② a justification for neglect of those in need — 并列第一项\n③ and a rationalization of exploitation, of the superiority of those at the top and the inferiority of those at the bottom — 并列第二项\n  — 后两个 of 短语（of the superiority...and the inferiority...）是对 exploitation 的同位/递进说明\n【解题要点】那些in need = 有需要的人（those + 介词短语作定语）；those at the top/bottom = 处于顶层/底层的人；superiority/inferiority 是反义词对，需在翻译中体现对比。",
    "tags": [
      "#真题长难句",
      "#并列结构"
    ]
  },
  {
    "id": "rd_t2011_49",
    "year": 2011,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "Circumstances seem to be designed to bring out the best in us, and if we feel that we have been \"wronged\" then we are unlikely to begin a conscious effort to escape from our situation.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 环境似乎是被设计来激发我们的最佳潜能的，而如果我们感觉受到了委屈，那么我们就不太可能开始有意识地努力去摆脱当前的处境。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> seem to be designed 不定式被动（seem + 不定式被动）；to bring out the best in us 目的状语；if 引导条件状语从句；be unlikely to do 固定结构\"不太可能做……\"；have been \"wronged\" 现在完成时被动，引号表示该词用法特殊。</span>",
    "translateLines": [
      "Circumstances seem to be designed to bring out the best in us, and if we feel that we have been \"wronged\" then we are unlikely to begin a conscious effort to escape from our situation."
    ],
    "glossary": {
      "seem to be designed to": "似乎被设计来……（seem + 不定式被动）",
      "bring out the best in": "激发……的最佳潜能（固定搭配）",
      "wronged": "v. 被冤枉；受到委屈（引号表特殊/隐喻用法）",
      "be unlikely to": "不太可能做……（固定结构）"
    },
    "answer": "【结构拆解】\n① Circumstances seem to be designed to bring out the best in us — 主句\n  — seem to be designed — 不定式被动（seem + to be + 过去分词）\n  — to bring out the best in us — 目的不定式\n② and if we feel that we have been \"wronged\" then we are unlikely to begin a conscious effort to escape from our situation — 条件复合句\n  — if...then — 条件从句 + 主句（then 强调因果）\n  — feel that — 宾语从句\n  — have been \"wronged\" — 现在完成时被动（遭受委屈）\n  — to escape from our situation — 不定式修饰 effort（做……的努力）\n【解题要点】bring out the best in sb. = 激发某人最好的一面；a conscious effort to do = 有意识地做……的努力（to do 不定式修饰 effort）。",
    "tags": [
      "#真题长难句",
      "#条件状语从句"
    ]
  },
  {
    "id": "rd_t2011_50",
    "year": 2011,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "The upside is the possibilities contained in knowing that everything is up to us; where before we were experts in the array of limitations, now we become authorities of what is possible.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 好处在于，知道一切都取决于我们自身所蕴含的种种可能性；而在我们曾是各种局限性专家的地方，我们如今成为了可能之事的权威。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> The upside is the possibilities 表语结构；contained in knowing 过去分词短语修饰 possibilities；that everything is up to us 同位语从句修饰/解释 knowing 的内容；分号后 where before...now... 为对比结构（where = whereas，表对比）；what is possible 名词性从句作介词宾语。</span>",
    "translateLines": [
      "The upside is the possibilities contained in knowing that everything is up to us; where before we were experts in the array of limitations, now we become authorities of what is possible."
    ],
    "glossary": {
      "upside": "n. 好处；积极的一面；上行面",
      "contained in": "蕴含于……中（past participle as modifier）",
      "be up to": "取决于；由……决定（be up to sb. 固定搭配）",
      "array of": "n. 一系列；大量的（an array of）",
      "authorities of": "n. ……方面的权威/专家"
    },
    "answer": "【结构拆解】\n主干：The upside is the possibilities [contained in knowing that everything is up to us]\n① contained in knowing — 过去分词短语修饰 possibilities\n② that everything is up to us — 名词性从句（同位语从句/宾语从句），解释 knowing 的内容\n③ 分号后：where before we were experts in the array of limitations, now we become authorities of what is possible\n  — where = whereas（表对比）\n  — before...now — 时间对比\n  — what is possible — 名词性从句作 of 的宾语\n【解题要点】where 在此作对比连词（= whereas），而非地点状语，是高级句型；everything is up to us = everything depends on us（一切取决于我们自己）。",
    "tags": [
      "#真题长难句",
      "#对比结构"
    ]
  },
  {
    "id": "rd_t2012_46",
    "year": 2012,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "In physics, one approach takes this impulse for unification to its extreme, and seeks a theory of everything -- a single generative equation for all we see.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 在物理学中，有一种方法将这种追求统一的冲动发挥到极致，力图寻找一个\"万物理论\"——即一个能生成我们所见一切的单一方程式。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> take...to its extreme 固定搭配\"将……发挥到极致\"；seeks a theory of everything 与 takes 并列谓语；破折号后 a single generative equation for all we see 为同位语，解释 a theory of everything；all we see = all that we see（省略关系词）。</span>",
    "translateLines": [
      "In physics, one approach takes this impulse for unification to its extreme, and seeks a theory of everything -- a single generative equation for all we see."
    ],
    "glossary": {
      "impulse": "n. 冲动；驱动力；推动力",
      "unification": "n. 统一；一体化",
      "take...to its extreme": "将……推向极致（固定表达）",
      "generative equation": "n. 生成性方程式；推导性方程"
    },
    "answer": "【结构拆解】\n主干：one approach takes this impulse for unification to its extreme and seeks a theory of everything\n① take...to its extreme — 将……推向极致\n② and seeks — 并列谓语（与 takes 并列）\n③ a theory of everything — 宾语\n④ a single generative equation for all we see — 破折号后同位语，解释 a theory of everything\n  — all we see = all that we see（省略关系词 that）\n【解题要点】a theory of everything = 万物理论（物理学术语，指统一所有物理定律的大一统理论）；all we see 中关系词 that 省略，是常见的简化定语从句写法。",
    "tags": [
      "#真题长难句",
      "#同位语"
    ]
  },
  {
    "id": "rd_t2012_47",
    "year": 2012,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "Here, Darwinism seems to offer justification, for if all humans share common origins, it seems reasonable to suppose that cultural diversity could also be traced to more constrained beginnings.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 在这里，达尔文主义似乎提供了理论依据——因为如果所有人类共享共同的起源，那么似乎有理由认为文化多样性也可以追溯到更有限制性的起点。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> for 作并列连词\"因为\"（= because，较正式）；if 引导条件从句；it seems reasonable to suppose that 形式主语结构，真正主语为不定式 to suppose that 从句；be traced to 固定搭配\"追溯到；归因于\"；constrained 意为\"受限制的；约束的\"。</span>",
    "translateLines": [
      "Here, Darwinism seems to offer justification, for if all humans share common origins, it seems reasonable to suppose that cultural diversity could also be traced to more constrained beginnings."
    ],
    "glossary": {
      "Darwinism": "n. 达尔文主义；进化论",
      "justification": "n. 理由；依据；辩护",
      "for": "conj. 因为（并列连词，较正式 = because）",
      "constrained": "adj. 受限的；约束的；有限制的",
      "be traced to": "追溯到；归因于（固定搭配）"
    },
    "answer": "【结构拆解】\n主干：Darwinism seems to offer justification\n① for if all humans share common origins, it seems reasonable to suppose that... — for 作并列连词\"因为\"，引导原因分句\n② if all humans share common origins — if 条件从句（嵌套在 for 从句内部）\n③ it seems reasonable to suppose that cultural diversity could also be traced to more constrained beginnings — 形式主语结构\n  — it = 形式主语；to suppose that... = 真正主语\n  — be traced to — 固定搭配\n【解题要点】for 作并列连词（= because）是正式书面语，常见于文学、哲学文本；与 because 的区别：for 从句只能置于主句之后，且语气更弱（提供解释而非强调原因）。",
    "tags": [
      "#真题长难句",
      "#形式主语"
    ]
  },
  {
    "id": "rd_t2012_48",
    "year": 2012,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "To filter out what is unique from what is shared might enable us to understand how complex cultural behavior arose and what guides it in evolutionary or cognitive terms.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 从共性中过滤出独特性，也许能使我们理解复杂的文化行为是如何产生的，以及从进化或认知角度来看是什么在引导它。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> To filter out...from... 不定式短语作主语（= Filtering out...）；what is unique 和 what is shared 均为名词性从句（what 从句）；enable us to understand 固定结构；how...arose 和 what guides it 两个并列间接疑问句（宾语从句）；in...terms 固定搭配\"在……方面；从……角度\"。</span>",
    "translateLines": [
      "To filter out what is unique from what is shared might enable us to understand how complex cultural behavior arose and what guides it in evolutionary or cognitive terms."
    ],
    "glossary": {
      "filter out": "过滤出；筛选出（固定短语）",
      "what is unique": "独特的东西（what 名词性从句）",
      "what is shared": "共有的东西；共性（what 名词性从句）",
      "cognitive": "adj. 认知的；认识的",
      "in...terms": "在……方面；从……角度（固定搭配）"
    },
    "answer": "【结构拆解】\n主语：To filter out what is unique from what is shared（不定式短语作主语）\n① what is unique / what is shared — what 名词性从句，分别作 filter out 的宾语和 from 的宾语\n谓语：might enable us to understand\n② how complex cultural behavior arose — 间接疑问句，作 understand 的宾语（之一）\n③ and what guides it in evolutionary or cognitive terms — 并列间接疑问句（what 引导）\n  — in evolutionary or cognitive terms — 方式状语，\"从进化或认知角度\"\n【解题要点】不定式短语作主语时，谓语动词用单数（might enable）；两个并列间接疑问句（how...and what...）作动词宾语，语序均为陈述句语序。",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "rd_t2012_49",
    "year": 2012,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "The second, by Joshua Greenberg, takes a more empirical approach to universality, identifying traits (particularly in word order) shared by many languages, which are considered to represent biases that result from cognitive constraints.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 第二种方法由约书亚·格林伯格提出，对普遍性采取更具实证性的研究方式，识别许多语言所共有的特征（尤其是在词序方面），这些特征被认为代表着由认知限制所产生的偏向性。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> by Joshua Greenberg 插入语；identifying traits...为现在分词状语（方式/结果）；shared by many languages 过去分词短置定语修饰 traits；which are considered 非限制性定语从句，先行词为 traits；that result from 定语从句修饰 biases。</span>",
    "translateLines": [
      "The second, by Joshua Greenberg, takes a more empirical approach to universality, identifying traits (particularly in word order) shared by many languages, which are considered to represent biases that result from cognitive constraints."
    ],
    "glossary": {
      "empirical": "adj. 实证的；经验性的",
      "universality": "n. 普遍性；普适性",
      "identifying": "v. 识别；确认（现在分词，此处作伴随状语）",
      "biases": "n. 偏向；偏倚；偏差（bias 的复数）",
      "cognitive constraints": "n. 认知限制；认知约束"
    },
    "answer": "【结构拆解】\n主干：The second takes a more empirical approach to universality\n① by Joshua Greenberg — 插入语，说明作者\n② identifying traits...shared by many languages — 现在分词状语（伴随/方式）\n  — (particularly in word order) — 插入括号补充说明\n  — shared by many languages — 过去分词修饰 traits\n③ which are considered to represent biases — 非限制性定语从句，修饰 traits\n④ that result from cognitive constraints — 定语从句，修饰 biases\n【解题要点】两层定语从句嵌套：which...→ biases → that...；be considered to represent = be thought to represent（被认为代表……）；result from = arise from / stem from（源于；由……导致）。",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "rd_t2012_50",
    "year": 2012,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "Chomsky's grammar should show patterns of language change that are independent of the family tree or the pathway tracked through it, whereas Greenbergian universality predicts strong co-dependencies between particular types of word-order relations.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 乔姆斯基的语法理论应当呈现语言变化的模式，这些模式独立于语系树或其中所追踪的路径，而格林伯格的普遍性理论则预测特定类型的词序关系之间存在强烈的相互依赖性。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> that are independent of 定语从句修饰 patterns；be independent of 固定搭配\"独立于；不受……影响\"；whereas 引导对比状语从句（= while，表对比）；tracked through it 过去分词修饰 pathway；co-dependencies between 固定结构\"……之间的相互依赖\"。</span>",
    "translateLines": [
      "Chomsky's grammar should show patterns of language change that are independent of the family tree or the pathway tracked through it, whereas Greenbergian universality predicts strong co-dependencies between particular types of word-order relations."
    ],
    "glossary": {
      "independent of": "独立于；不受……影响（固定搭配）",
      "family tree": "n. 语系树；谱系树",
      "tracked through": "经其追踪的；沿其路径的（过去分词定语）",
      "whereas": "conj. 然而；而（对比连词，引导状语从句）",
      "co-dependencies": "n. 相互依赖；共依赖关系"
    },
    "answer": "【结构拆解】\n主干：Chomsky's grammar should show patterns of language change\n① that are independent of the family tree or the pathway tracked through it — 定语从句修饰 patterns\n  — tracked through it — 过去分词修饰 pathway（it = the family tree）\n② whereas Greenbergian universality predicts strong co-dependencies between particular types of word-order relations — whereas 对比从句\n【解题要点】whereas 是考研翻译高频对比连词（= while），引导的从句通常与主句内容形成鲜明对比；independent of（独立于）= not dependent on（不依赖于），翻译时体现\"与……无关/不受……影响\"的含义。",
    "tags": [
      "#真题长难句",
      "#对比结构"
    ]
  },
  {
    "id": "rd_t2013_46",
    "year": 2013,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "Yet when one looks at the photographs of the garden created by the homeless, it strikes one that, for all their diversity of styles, these gardens speak of various other fundamental urges, beyond that of decoration and creative expression.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 然而当人们看到无家可归者所创造的花园的照片时，令人感触颇深的是：尽管风格各异，这些花园诉说着各种其他基本冲动，超越了装饰和创意表达的冲动。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> it strikes one that 固定句型\"令人感到……\"（形式主语 it，真正主语为 that 从句）；for all their diversity of styles 让步介词短语\"尽管风格多样\"（for all = despite）；that of decoration 中 that = that urge（代词指代避免重复）；beyond that of... 介词短语作状语\"超出……范围\"。</span>",
    "translateLines": [
      "Yet when one looks at the photographs of the garden created by the homeless, it strikes one that, for all their diversity of styles, these gardens speak of various other fundamental urges, beyond that of decoration and creative expression."
    ],
    "glossary": {
      "it strikes one that": "令人……；使人感到……（形式主语句型）",
      "for all": "尽管；虽然（= despite，让步介词）",
      "fundamental urges": "n. 基本冲动；根本欲望",
      "beyond that of": "超出……的范围；超越……（that 代指前文名词）"
    },
    "answer": "【结构拆解】\n主干：it strikes one that these gardens speak of various other fundamental urges\n① when one looks at the photographs of the garden created by the homeless — when 时间从句\n   — created by the homeless — 过去分词后置定语修饰 garden\n② it strikes one that — 形式主语句型；it = 形式主语，that 从句 = 真正主语\n③ for all their diversity of styles — 让步状语（for all = despite）\n④ beyond that of decoration and creative expression — 方式/范围状语，that = that urge\n【解题要点】for all = despite/in spite of（\"尽管\"），是高级让步表达；it strikes sb. that = it occurs to sb. that（令某人感到/想到……），形式主语句型；that of... 中 that 作代词，指代前文提过的名词（urge），避免重复。",
    "tags": [
      "#真题长难句",
      "#形式主语"
    ]
  },
  {
    "id": "rd_t2013_47",
    "year": 2013,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "A sacred place of peace, however crude it may be, is a distinctly human need, as opposed to shelter, which is a distinctly animal need.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 一处神圣的宁静之所，无论多么简陋，都是一种独特的人类需求，与庇护所截然不同——庇护所是一种独特的动物需求。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> however crude it may be 让步状语从句（however + adj + 主谓）；as opposed to 固定搭配\"与……相对/相反；而非\"；which is a distinctly animal need 非限制性定语从句修饰 shelter；distinctly 强调\"显著地；明确地\"。</span>",
    "translateLines": [
      "A sacred place of peace, however crude it may be, is a distinctly human need, as opposed to shelter, which is a distinctly animal need."
    ],
    "glossary": {
      "sacred": "adj. 神圣的；庄严的",
      "crude": "adj. 简陋的；粗糙的；未加工的",
      "however crude it may be": "无论多么简陋（however + adj + 主谓，让步从句）",
      "as opposed to": "与……相对；而非（固定搭配）",
      "distinctly": "adv. 明确地；显然地；独特地"
    },
    "answer": "【结构拆解】\n主干：A sacred place of peace is a distinctly human need\n① however crude it may be — 让步状语从句（= no matter how crude it may be），插入主谓之间\n② as opposed to shelter — 介词短语作对比状语（= in contrast to shelter）\n③ which is a distinctly animal need — 非限制性定语从句修饰 shelter\n【解题要点】however + adj/adv + 主 + 谓 = no matter how + adj/adv + 主 + 谓，是让步从句的倒装形式（adj 前置）；as opposed to = in contrast to = unlike，表对比，是考研写作常用表达。",
    "tags": [
      "#真题长难句",
      "#让步状语从句"
    ]
  },
  {
    "id": "rd_t2013_48",
    "year": 2013,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "The gardens of the homeless, which are in effect homeless gardens, introduce form into an urban environment where it either didn't exist or was not discernible as such.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 无家可归者的花园——实际上也是无家可归的花园——将形式引入了一个城市环境，而这种形式在那里要么从未存在过，要么无法被辨认为这种形式。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> which are in effect homeless gardens 非限制性定语从句（in effect = in reality，\"实际上\"）；introduce form into 固定结构\"将……引入\"；where 关系副词引导定语从句修饰 environment；either...or 并列两个谓语；discernible as such 中 as such = as form（作为这种形式）。</span>",
    "translateLines": [
      "The gardens of the homeless, which are in effect homeless gardens, introduce form into an urban environment where it either didn't exist or was not discernible as such."
    ],
    "glossary": {
      "in effect": "实际上；事实上（= in reality/in fact）",
      "introduce...into": "将……引入；把……带入（固定搭配）",
      "discernible": "adj. 可辨认的；可识别的；明显的",
      "as such": "作为这样的；照此（代指前文名词）"
    },
    "answer": "【结构拆解】\n主干：The gardens of the homeless introduce form into an urban environment\n① which are in effect homeless gardens — 非限制性定语从句，修饰 The gardens of the homeless\n   — in effect = in reality（实际上）\n② where it either didn't exist or was not discernible as such — where 引导定语从句修饰 environment\n   — it = form（指引入的\"形式\"）\n   — either...or — 并列两个谓语\n   — as such = as form（作为/以这种\"形式\"）\n【解题要点】which are in effect homeless gardens — 双关语：gardens 是无家可归者的（归属），本身也是\"无家可归\"的（没有固定依托）；as such 代指前文 form，翻译时补出所指代内容会更清晰。",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "rd_t2013_49",
    "year": 2013,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "Most of us give into a demoralization of spirit which we usually blame on some psychological condition, until one day we find ourselves in a garden and feel the expression vanish as if by magic.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 我们中的大多数人都会陷入精神的沮丧之中，通常将其归咎于某种心理状况，直到某天我们发现自己置身于花园中，感到那种沮丧如魔法般消失。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> give into 此处作\"屈服于；陷入\"（= give in to）；which we usually blame on 定语从句（blame...on 固定搭配\"归咎于\"）；until 引导时间状语从句；find ourselves in a garden 感官动词结构（find + 宾语 + 宾补）；feel the expression vanish 感官动词结构（feel + 宾语 + 动词原形）；as if by magic 方式状语\"如同魔法般\"。</span>",
    "translateLines": [
      "Most of us give into a demoralization of spirit which we usually blame on some psychological condition, until one day we find ourselves in a garden and feel the expression vanish as if by magic."
    ],
    "glossary": {
      "give into": "屈服于；陷入（= give in to）",
      "demoralization": "n. 沮丧；士气低落；道德败坏",
      "blame...on": "将……归咎于（固定搭配）",
      "as if by magic": "如魔法般；神奇地（固定短语）"
    },
    "answer": "【结构拆解】\n主干：Most of us give into a demoralization of spirit\n① which we usually blame on some psychological condition — 定语从句修饰 demoralization\n   — blame A on B = 将A归咎于B（固定搭配）\n② until one day we find ourselves in a garden and feel the expression vanish — until 时间状语从句\n   — find ourselves in a garden — find + 宾语 + 宾补（发现自己处于……）\n   — feel the expression vanish — feel + 宾语 + 动词原形（感官动词结构）\n③ as if by magic — 方式状语（as if + 介词短语，省略了主谓）\n【解题要点】感官动词（feel/see/hear/watch）+ 宾语 + 动词原形（主动）/ 现在分词（进行）/ 过去分词（被动）；此处 feel the expression vanish = feel that the expression vanishes，但原形 vanish 更强调动作的完整发生。",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "rd_t2013_50",
    "year": 2013,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "It is this implicit or explicit reference to nature that fully justifies the use of the word garden, though in a \"liberated\" sense, to describe these synthetic constructions.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 正是这种对自然的隐性或显性的指涉，才完全证明了使用\"花园\"一词——尽管是在一种\"解放了的\"意义上——来描述这些人造构筑物的合理性。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> It is...that... 强调句，被强调成分为 this implicit or explicit reference to nature；justify the use of 固定搭配\"证明……的合理性\"；though in a \"liberated\" sense 让步插入语（省略了 though it is in a...）；to describe 不定式作目的状语。</span>",
    "translateLines": [
      "It is this implicit or explicit reference to nature that fully justifies the use of the word garden, though in a \"liberated\" sense, to describe these synthetic constructions."
    ],
    "glossary": {
      "implicit": "adj. 隐含的；含蓄的（↔ explicit 明确的）",
      "reference to": "n. 对……的指涉；提及；参照",
      "justify": "v. 证明……是正当/合理的；为……辩护",
      "synthetic": "adj. 人工合成的；人造的"
    },
    "answer": "【结构拆解】\n强调句：It is [this implicit or explicit reference to nature] that fully justifies the use of the word garden\n① It is...that — 强调句型，被强调成分 = this implicit or explicit reference to nature\n② justifies the use of the word garden — 证明使用\"garden\"一词的合理性\n③ though in a \"liberated\" sense — 让步插入语（= though it is used in a \"liberated\" sense）\n④ to describe these synthetic constructions — 目的不定式\n【解题要点】强调句判断法：去掉 it is...that，句子仍成立（this reference fully justifies...），则为强调句；justify 意为\"证明……正当合理\"（≠ justify oneself = 为自己辩护），翻译时用\"证明……的合理性/正当性\"。",
    "tags": [
      "#真题长难句",
      "#强调句"
    ]
  },
  {
    "id": "rd_t2014_46",
    "year": 2014,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "It is also the reason why, when we try to describe music with words, all we can do is articulate our reactions to it, and not grasp music itself.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 这也是为什么当我们试图用文字描述音乐时，我们所能做的只是表达我们对音乐的反应，而无法把握音乐本身。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> the reason why 引导表语从句（why 为关系副词）；when we try to describe music with words 时间状语从句插入 why 从句中；all we can do is（do）为强调结构（all + 定语从句 + is + 动词原形），表\"所能做的只是……\"；articulate...and not grasp 并列不定式（一肯一否）。</span>",
    "translateLines": [
      "It is also the reason why, when we try to describe music with words, all we can do is articulate our reactions to it, and not grasp music itself."
    ],
    "glossary": {
      "the reason why": "……的原因（关系副词引导定语/表语从句）",
      "articulate": "v. 清晰表达；明确阐述（此处为动词）",
      "grasp": "v. 把握；理解；领悟",
      "all...can do is do": "所能做的只是……（强调结构，is 后接动词原形）"
    },
    "answer": "【结构拆解】\n主干：It is also the reason [why...all we can do is articulate our reactions to it, and not grasp music itself]\n① the reason why — 表语从句，why 为关系副词\n② when we try to describe music with words — 时间状语从句，插入 why 从句内\n③ all we can do is articulate...and not grasp — 强调结构\n   — all we can do — 主语（all + 省略 that 的定语从句）\n   — is + 动词原形（articulate / grasp）— 系表结构，is 后动词原形不加 to\n   — not grasp — 否定并列（\"而不是把握\"）\n【解题要点】all (that) sb. can do is (to) do — \"某人所能做的只是……\"，is 后既可接带 to 的不定式也可接原形（原形更常见）；articulate = express clearly（清晰表达），是学术文体高频词。",
    "tags": [
      "#真题长难句",
      "#强调句"
    ]
  },
  {
    "id": "rd_t2014_47",
    "year": 2014,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "By all accounts he was a freethinking person, and a courageous one, and I find courage an essential quality for the understanding, let alone the performance, of his works.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 据各方说法，他是一个思想自由的人，也是一个勇敢的人，而我认为勇气是理解其作品不可或缺的品质，更不用说演奏了。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> by all accounts 固定短语\"据各方说法；据说\"；find + 宾语 + 宾补（find courage an essential quality）；let alone 固定搭配\"更不用说；何况\"（连接并列成分，表递进否定）；for the understanding...of his works = for understanding his works。</span>",
    "translateLines": [
      "By all accounts he was a freethinking person, and a courageous one, and I find courage an essential quality for the understanding, let alone the performance, of his works."
    ],
    "glossary": {
      "by all accounts": "据各方说法；公认地（固定短语）",
      "freethinking": "adj. 思想自由的；不受传统约束的",
      "let alone": "更不用说；何况（固定搭配，连接递进否定）",
      "find + O + C": "认为……是……（SVOC 结构）"
    },
    "answer": "【结构拆解】\n① By all accounts he was a freethinking person, and a courageous one — 主句1（by all accounts 状语；a courageous one = a courageous person，省略）\n② and I find courage an essential quality for the understanding, let alone the performance, of his works — 主句2（并列）\n   — find + courage（宾语）+ an essential quality（宾补）— SVOC 结构\n   — for the understanding...of his works — 介词短语修饰 essential quality\n   — let alone the performance — 插入，表递进（\"更不用说演奏\"）\n【解题要点】let alone 只能连接相同词类/结构（此处 understanding 和 performance 均为名词）；find O C = consider O to be C（认为/觉得O是C），是高频 SVOC 考点。",
    "tags": [
      "#真题长难句",
      "#SVOC结构"
    ]
  },
  {
    "id": "rd_t2014_48",
    "year": 2014,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "Beethoven's habit of increasing the volume with an extreme intensity and then abruptly following it with a sudden soft passage was only rarely used by composers before him.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 贝多芬先将音量以极端的强度推进，然后突然以一段轻柔乐段紧随其后的这一习惯，在他之前的作曲家中极少被使用。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> 主语为 Beethoven's habit of doing...and then doing（动名词并列作 of 的宾语）；was only rarely used 谓语（被动，only rarely 表\"极少\"）；follow it with 固定搭配\"以……紧接……\"；by composers before him 施动者介词短语。</span>",
    "translateLines": [
      "Beethoven's habit of increasing the volume with an extreme intensity and then abruptly following it with a sudden soft passage was only rarely used by composers before him."
    ],
    "glossary": {
      "extreme intensity": "n. 极端的强度；极强的力度",
      "abruptly": "adv. 突然地；唐突地",
      "follow...with": "以……紧随……；用……接续……（固定搭配）",
      "passage": "n. 乐段；段落；通道（音乐语境中指\"乐段\"）"
    },
    "answer": "【结构拆解】\n主语：Beethoven's habit of [increasing the volume with an extreme intensity] and then [abruptly following it with a sudden soft passage]\n① of + 动名词并列：increasing...and then following — habit of doing 结构\n② it = the extreme volume（指代前文音量）\n③ following it with a sudden soft passage — follow A with B（用B紧接A）\n谓语：was only rarely used by composers before him（被动语态，only rarely = 极少）\n【解题要点】主语较长（habit of doing...and then doing...），找谓语时需跳过整个 of 短语；only rarely = very seldom（极少），是加强否定的副词搭配。",
    "tags": [
      "#真题长难句",
      "#被动语态"
    ]
  },
  {
    "id": "rd_t2014_49",
    "year": 2014,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "Especially significant was his view of freedom, which, for him, was associated with the rights and responsibilities of the individual: he advocated freedom of thought and of personal expression.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 尤其值得一提的是他对自由的看法，对他而言，自由与个人的权利和责任相关联：他倡导思想自由和个性表达的自由。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Especially significant was his view of freedom 为倒装句（表语前置）——正常语序：His view of freedom was especially significant；which...was associated with 非限制性定语从句；for him 插入语；be associated with 固定搭配\"与……相关联\"；冒号后独立分句作进一步阐释。</span>",
    "translateLines": [
      "Especially significant was his view of freedom, which, for him, was associated with the rights and responsibilities of the individual: he advocated freedom of thought and of personal expression."
    ],
    "glossary": {
      "Especially significant was": "表语前置倒装（正常语序：His view was especially significant）",
      "be associated with": "与……相关联（固定搭配）",
      "advocated": "v. 倡导；提倡（advocate 的过去式）",
      "personal expression": "n. 个性表达；自我表达"
    },
    "answer": "【结构拆解】\n主干（倒装还原）：His view of freedom was especially significant\n① Especially significant was his view of freedom — 表语前置倒装（强调 especially significant）\n② which, for him, was associated with the rights and responsibilities of the individual — 非限制性定语从句，修饰 his view of freedom\n   — for him — 插入语\n   — be associated with — 固定搭配\n③ 冒号后：he advocated freedom of thought and of personal expression — 独立分句，具体阐释\n【解题要点】表语前置（Especially significant was...）是强调句的一种，用于突出表语；识别方式：表语 + 系动词 + 主语（倒置）。of thought and of personal expression — 两个 of 并列修饰 freedom（of 的平行结构）。",
    "tags": [
      "#真题长难句",
      "#倒装句"
    ]
  },
  {
    "id": "rd_t2014_50",
    "year": 2014,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "One could interpret much of the work of Beethoven by saying that suffering is inevitable, but the courage to fight it renders life worth living.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 人们可以通过这样的说法来诠释贝多芬大量作品的主旨：苦难是不可避免的，但与之抗争的勇气使生命值得活下去。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> interpret...by saying that 固定结构\"通过说……来诠释……\"；suffering is inevitable 宾语从句（by saying 的内容）；render + 宾语 + 宾补 固定结构（= make）\"使……\"；worth living 中 living 为动名词，worth + doing 表\"值得被……\"（主动形式表被动含义）。</span>",
    "translateLines": [
      "One could interpret much of the work of Beethoven by saying that suffering is inevitable, but the courage to fight it renders life worth living."
    ],
    "glossary": {
      "interpret": "v. 诠释；解读；理解",
      "inevitable": "adj. 不可避免的；必然的",
      "render": "v. 使（= make）；提供（render + O + 宾补，SVOC 结构）",
      "worth living": "值得活（worth + 动名词，主动形式表被动）"
    },
    "answer": "【结构拆解】\n① One could interpret much of the work of Beethoven by saying that suffering is inevitable — 主句\n   — interpret A by saying that B — 通过说B来诠释A\n   — that suffering is inevitable — 宾语从句（by saying 的内容）\n② but the courage to fight it renders life worth living — 转折分句\n   — to fight it — 不定式修饰 courage（\"与之抗争的勇气\"）\n   — renders life worth living — SVOC 结构（render = make；宾语 life，宾补 worth living）\n   — worth living — worth + 动名词，主动形式表被动（= worth being lived）\n【解题要点】render + O + adj（宾补）= make + O + adj，翻译为\"使……\"；worth + doing（动名词主动）= worth + being done（被动），如 worth reading = worth being read。",
    "tags": [
      "#真题长难句",
      "#SVOC结构"
    ]
  },
  {
    "id": "rd_t2015_46",
    "year": 2015,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "This movement, driven by powerful and diverse motivations, built a nation out of a wilderness and, by its nature, shaped the character and destiny of an uncharted continent.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 这场运动，由强大而多样的动机所驱动，在荒野中建立了一个国家，并且就其本质而言，塑造了一片未知大陆的性格与命运。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> driven by powerful and diverse motivations 过去分词短语作插入性状语（原因/被动）；built...and shaped 并列谓语；out of a wilderness \"从荒野中；由荒野建成\"；by its nature 固定短语\"就其本质而言\"；uncharted 意为\"未经勘测的；未知的\"。</span>",
    "translateLines": [
      "This movement, driven by powerful and diverse motivations, built a nation out of a wilderness and, by its nature, shaped the character and destiny of an uncharted continent."
    ],
    "glossary": {
      "driven by": "被……驱动；由……推动（过去分词短语作状语）",
      "out of a wilderness": "从荒野中；在荒野上（out of 表来源）",
      "by its nature": "就其本质而言；本质上（固定短语）",
      "uncharted": "adj. 未经勘测的；未知的；未开发的"
    },
    "answer": "【结构拆解】\n主干：This movement built a nation out of a wilderness and shaped the character and destiny of an uncharted continent\n① driven by powerful and diverse motivations — 插入性过去分词短语，表原因/被动状态\n② built...and...shaped — 并列谓语\n③ out of a wilderness — 方式/来源状语（\"从荒野中建立\"）\n④ by its nature — 插入性介词短语，\"就其本质\"\n⑤ an uncharted continent — 指北美大陆（当时尚未被完全勘测）\n【解题要点】过去分词短语作插入状语时（driven by...），逗号隔开，表被动的原因或状态，翻译为\"由……驱动/受……影响\"；character 在此不仅指\"性格\"，还含\"特质/特性\"，与 destiny（命运）并列。",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "rd_t2015_47",
    "year": 2015,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "The United States is the product of two principal forces -- the immigration of European peoples with their varied ideas, customs, and national characteristics and the impact of a new country which modified these traits.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 美国是两种主要力量的产物——欧洲移民带来的各种不同的思想、风俗和民族特性，以及新大陆的影响，而这种影响改变了这些特质。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> be the product of 固定搭配\"是……的产物\"；破折号后两个并列同位语（the immigration...and the impact...）解释 two principal forces；with their varied ideas 伴随状语；which modified these traits 定语从句修饰 a new country。</span>",
    "translateLines": [
      "The United States is the product of two principal forces -- the immigration of European peoples with their varied ideas, customs, and national characteristics and the impact of a new country which modified these traits."
    ],
    "glossary": {
      "be the product of": "是……的产物（固定搭配）",
      "immigration": "n. 移民（行为）；移入（→ emigration 移出）",
      "national characteristics": "n. 民族特性；国民特征",
      "traits": "n. 特质；特点（trait 的复数）"
    },
    "answer": "【结构拆解】\n主干：The United States is the product of two principal forces\n① 破折号后：[the immigration of European peoples with their varied ideas, customs, and national characteristics] and [the impact of a new country which modified these traits] — 两个并列同位语，解释 two principal forces\n② with their varied ideas, customs, and national characteristics — 伴随状语，修饰 European peoples\n③ which modified these traits — 定语从句修饰 a new country\n【解题要点】两个并列同位语由 and 连接，结构较长，注意识别并列的对称点（the immigration...and the impact...）；traits 与 national characteristics 在文中基本同义，但前者更泛指个人/群体特质。",
    "tags": [
      "#真题长难句",
      "#同位语"
    ]
  },
  {
    "id": "rd_t2015_48",
    "year": 2015,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "But the force of geographic conditions peculiar to America, the interplay of the varied national groups upon one another, and the sheer difficulty of maintaining old-world ways in a raw, new continent caused significant changes.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 但是，美洲特有的地理条件的力量、各种不同民族群体之间的相互影响，以及在一片粗犷的新大陆上维持旧世界传统的极大困难，共同引发了重大变化。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> 主语为三个并列名词短语（the force...，the interplay...，the sheer difficulty...）；谓语为 caused（三个并列主语共用单一谓语，注意复数主语 caused 无需加 s）；peculiar to 固定搭配\"……所特有的\"；the interplay...upon one another 固定表达\"相互影响/作用\"；sheer 强调\"完全的；纯粹的\"。</span>",
    "translateLines": [
      "But the force of geographic conditions peculiar to America, the interplay of the varied national groups upon one another, and the sheer difficulty of maintaining old-world ways in a raw, new continent caused significant changes."
    ],
    "glossary": {
      "peculiar to": "……所特有的；独有的（固定搭配）",
      "interplay": "n. 相互作用；相互影响",
      "upon one another": "相互之间（= on each other）",
      "sheer": "adj. 纯粹的；完全的（表强调）",
      "old-world ways": "n. 旧世界的传统/习俗"
    },
    "answer": "【结构拆解】\n三个并列主语 + 单一谓语：\n① the force of geographic conditions peculiar to America\n   — peculiar to America — 后置定语（peculiar to = unique to/characteristic of）\n② the interplay of the varied national groups upon one another\n③ the sheer difficulty of maintaining old-world ways in a raw, new continent\n   — sheer 强调 difficulty（\"极大困难\"）\n   — of maintaining — 动名词短语作 of 宾语\n谓语：caused significant changes\n【解题要点】三个并列主语共用一个谓语 caused（动词不受主语数量影响，仍用过去式）；peculiar to = characteristic of / unique to（某地所特有的），翻译时译为\"……特有的/独有的\"。",
    "tags": [
      "#真题长难句",
      "#并列结构"
    ]
  },
  {
    "id": "rd_t2015_49",
    "year": 2015,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "The first shiploads of immigrants bound for the territory which is now the United States crossed the Atlantic more than a hundred years after the 15th-and-16th-century explorations of North America.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 第一批驶向如今美国所在领土的移民船队，在北美洲15至16世纪的探险活动结束一百多年之后才横渡了大西洋。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> bound for 固定搭配\"开往；驶向；前往\"（过去分词短语作后置定语）；which is now the United States 定语从句修饰 territory；crossed the Atlantic 谓语；more than a hundred years after 时间状语（after + 名词短语）。</span>",
    "translateLines": [
      "The first shiploads of immigrants bound for the territory which is now the United States crossed the Atlantic more than a hundred years after the 15th-and-16th-century explorations of North America."
    ],
    "glossary": {
      "shiploads": "n. 整船的（人/物）；船队（shipload 复数）",
      "bound for": "开往……；前往……（固定搭配，过去分词作定语）",
      "territory": "n. 领土；领地；版图",
      "explorations": "n. 探险；勘探（exploration 复数）"
    },
    "answer": "【结构拆解】\n主干：The first shiploads of immigrants crossed the Atlantic\n① bound for the territory which is now the United States — 后置定语修饰 immigrants\n   — bound for — 固定搭配（\"前往……\"）\n   — which is now the United States — 定语从句修饰 territory\n② more than a hundred years after the 15th-and-16th-century explorations of North America — 时间状语\n   — more than a hundred years after = 在……之后一百多年\n【解题要点】bound for 是过去分词短语作定语（= which were bound for），表目的地；\"more than + 时间 + after\" 表示\"在……之后超过某一时间\"，翻译时注意语序调整。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2015_50",
    "year": 2015,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "The virgin forest with its richness and variety of trees was a veritable treasure-house which extended from Maine all the way down to Georgia.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 处女林以其丰富多样的树木种类，是一座名副其实的宝库，从缅因州一路向南延伸至佐治亚州。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> virgin forest 固定短语\"原始森林；处女林\"；with its richness and variety of trees 伴随状语；veritable 强调\"名副其实的；真正的\"；which extended from...to 定语从句修饰 treasure-house；all the way down to 固定短语\"一路延伸到\"。</span>",
    "translateLines": [
      "The virgin forest with its richness and variety of trees was a veritable treasure-house which extended from Maine all the way down to Georgia."
    ],
    "glossary": {
      "virgin forest": "n. 原始森林；处女林（未经人类开发的森林）",
      "veritable": "adj. 名副其实的；真正的（强调语气）",
      "treasure-house": "n. 宝库；珍藏之所",
      "all the way down to": "一路向南延伸至……（固定短语）"
    },
    "answer": "【结构拆解】\n主干：The virgin forest was a veritable treasure-house\n① with its richness and variety of trees — 伴随状语，说明森林的特征\n② which extended from Maine all the way down to Georgia — 定语从句修饰 treasure-house\n   — from...to — 空间范围\n   — all the way down to — 固定短语（强调距离之长）\n【解题要点】veritable = truly deserving the name（名副其实的），常用于加强语气，翻译时加\"名副其实的/真正的\"以体现强调；richness and variety of trees — richness（丰富性）和 variety（多样性）是两个不同维度，翻译时需区分。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2016_46",
    "year": 2016,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "We don't have to learn how to be mentally healthy; it is built into us in the same way that our bodies know how to heal a cut or mend a broken bone.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 我们不必学习如何保持心理健康；它与生俱来地内建于我们之中，就像我们的身体知道如何愈合伤口或修复断骨一样。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> how to be mentally healthy 不定式疑问结构作宾语；is built into us 固定搭配\"内建于……中；与……融为一体\"（被动）；in the same way that 固定结构\"以……同样的方式\"（that 引导方式从句）；how to heal...or mend... 并列不定式疑问结构。</span>",
    "translateLines": [
      "We don't have to learn how to be mentally healthy; it is built into us in the same way that our bodies know how to heal a cut or mend a broken bone."
    ],
    "glossary": {
      "mentally healthy": "adj. 心理健康的",
      "built into": "内建于；融入（be built into 固定搭配）",
      "in the same way that": "以……同样的方式（方式状语从句引导词）",
      "mend": "v. 修复；愈合；修补"
    },
    "answer": "【结构拆解】\n① We don't have to learn how to be mentally healthy — 主句1\n   — how to be mentally healthy — 不定式疑问结构作宾语（= how we should be mentally healthy）\n② it is built into us in the same way that our bodies know how to heal a cut or mend a broken bone — 主句2（分号后）\n   — it = mental health（心理健康）\n   — in the same way that — 方式从句（= just as）\n   — how to heal a cut or mend a broken bone — 并列不定式疑问结构作 know 的宾语\n【解题要点】in the same way that = just as（\"就像……一样\"），引导方式状语从句；how to do sth. = how sb. should do sth.，是名词性不定式疑问结构，作动词宾语时很常见。",
    "tags": [
      "#真题长难句",
      "#状语从句"
    ]
  },
  {
    "id": "rd_t2016_47",
    "year": 2016,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "Our mental health doesn't go anywhere; like the sun behind a cloud, it can be temporarily hidden from view, but it is fully capable of being restored in an instant.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 我们的心理健康不会消失；就像被云层遮蔽的太阳，它可能暂时从视野中隐没，但它完全能够在瞬间得到恢复。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> doesn't go anywhere 固定说法\"哪儿也不去；不会消失\"；like the sun behind a cloud 比喻状语；be hidden from view 固定搭配\"从视野中消失；被遮住\"；be capable of doing 固定搭配\"能够做……\"；being restored 被动动名词（restore 的被动式）；in an instant 固定短语\"瞬间；立刻\"。</span>",
    "translateLines": [
      "Our mental health doesn't go anywhere; like the sun behind a cloud, it can be temporarily hidden from view, but it is fully capable of being restored in an instant."
    ],
    "glossary": {
      "doesn't go anywhere": "不会消失；哪儿也不会去（固定说法）",
      "hidden from view": "从视野中消失；被遮蔽（固定搭配）",
      "be capable of": "能够；有能力（be capable of doing）",
      "being restored": "被恢复（restore 的被动动名词形式）",
      "in an instant": "瞬间；立刻（= immediately）"
    },
    "answer": "【结构拆解】\n① Our mental health doesn't go anywhere — 主句1\n② like the sun behind a cloud — 比喻性状语（= just like the sun that is behind a cloud）\n③ it can be temporarily hidden from view — 分句（被动，可能被暂时遮蔽）\n④ but it is fully capable of being restored in an instant — 转折分句\n   — be capable of doing — 固定结构\n   — being restored — 被动动名词（restore 的被动形式，of 后接动名词）\n【解题要点】be capable of + 被动动名词（being done）= can be done（能够被……）；like the sun behind a cloud 是明喻，翻译时可保留比喻或用\"正如……\"引出。",
    "tags": [
      "#真题长难句",
      "#被动语态"
    ]
  },
  {
    "id": "rd_t2016_48",
    "year": 2016,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "Mental health allows us to view others with sympathy if they are having troubles, with kindness if they are in pain, and with unconditional love no matter who they are.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 心理健康使我们能够在他人遭受困扰时以同情心看待他们，在他人承受痛苦时以善意看待他们，无论他们是什么人都以无条件的爱看待他们。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> allow sb. to do 固定结构\"允许/使某人做某事\"；三个 with 介词短语作方式状语，分别配一个条件从句（if...if...no matter who...）；no matter who they are = whoever they are，让步从句。</span>",
    "translateLines": [
      "Mental health allows us to view others with sympathy if they are having troubles, with kindness if they are in pain, and with unconditional love no matter who they are."
    ],
    "glossary": {
      "allow sb. to do": "使某人能够做……（固定结构）",
      "sympathy": "n. 同情；同理心",
      "unconditional love": "n. 无条件的爱",
      "no matter who": "无论是谁（= whoever，让步从句）"
    },
    "answer": "【结构拆解】\n主干：Mental health allows us to view others\n三个并列的方式状语（各带条件/让步从句）：\n① with sympathy [if they are having troubles]\n② with kindness [if they are in pain]\n③ and with unconditional love [no matter who they are]\n   — no matter who = whoever（让步从句）\n【解题要点】三个 with 短语构成排比（anaphora），翻译时保持结构平行；no matter who/what/where/when/how 引导让步从句，与 whoever/whatever 等复合词同义；if 此处作时间/条件从句（\"当……时\"）。",
    "tags": [
      "#真题长难句",
      "#并列结构"
    ]
  },
  {
    "id": "rd_t2016_49",
    "year": 2016,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "Although mental health is the cure-all for living our lives, it is perfectly ordinary, as you will see that it has been there to direct you through all your difficult decisions.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 尽管心理健康是我们生活的万能良药，但它也极其平常，正如你将会发现它一直引导着你度过所有艰难的抉择。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Although 引导让步状语从句；cure-all 名词\"万灵药；万能之策\"；it is perfectly ordinary 主句；as you will see that 方式/原因从句（as = as is shown by the fact that）；direct sb. through 固定搭配\"引导某人度过\"。</span>",
    "translateLines": [
      "Although mental health is the cure-all for living our lives, it is perfectly ordinary, as you will see that it has been there to direct you through all your difficult decisions."
    ],
    "glossary": {
      "cure-all": "n. 万灵药；包治百病之物（固定复合词）",
      "perfectly ordinary": "极其平常；再普通不过",
      "as you will see": "正如你将会看到/发现的那样（as 方式从句）",
      "direct sb. through": "引导某人度过；指引某人经历"
    },
    "answer": "【结构拆解】\n① Although mental health is the cure-all for living our lives — Although 让步从句\n② it is perfectly ordinary — 主句\n③ as you will see that it has been there to direct you through all your difficult decisions — as 引导方式/说明从句\n   — as = as is evidenced by the fact that（正如……所表明的）\n   — it has been there — 它一直在那里（there 强调\"始终存在\"）\n   — to direct you through all your difficult decisions — 不定式作目的/结果状语\n【解题要点】as 引导方式从句时，翻译为\"正如……\"；cure-all 是复合名词，字面义\"治愈一切的东西\"，引申为\"万灵药/万全之策\"；direct sb. through sth. = guide sb. through sth.（引导某人经历/度过某事）。",
    "tags": [
      "#真题长难句",
      "#让步状语从句"
    ]
  },
  {
    "id": "rd_t2016_50",
    "year": 2016,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "As you will come to see, knowing that mental health is always available and knowing to trust it allow us to slow down to the moment and live life happily.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 正如你将会逐渐认识到的，知道心理健康随时可得，以及知道去信任它，会使我们能够放慢脚步、活在当下并快乐地生活。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> As you will come to see 方式从句（as 引导，\"正如……\"）；两个并列动名词短语（knowing that...and knowing to trust it）作主语；allow us to do 固定结构；slow down to the moment 固定表达\"放慢脚步活在当下\"；注意 knowing that...and knowing to trust 并列主语时谓语用复数 allow。</span>",
    "translateLines": [
      "As you will come to see, knowing that mental health is always available and knowing to trust it allow us to slow down to the moment and live life happily."
    ],
    "glossary": {
      "come to see": "逐渐认识到；将会明白（come to do 表渐进）",
      "always available": "随时可得；始终存在",
      "slow down to the moment": "放慢脚步；活在当下（固定表达）",
      "knowing to trust": "知道去信任（knowing + 不定式）"
    },
    "answer": "【结构拆解】\n① As you will come to see — as 方式从句（\"正如你将会发现的\"）\n主语：[knowing that mental health is always available] and [knowing to trust it]（两个并列动名词短语）\n② knowing that mental health is always available — 动名词 + that 宾语从句\n③ knowing to trust it — 动名词 + 不定式\n谓语：allow（注意：两个动名词并列作主语，谓语用复数）\n④ allow us to slow down to the moment and live life happily — 两个并列不定式\n【解题要点】两个动名词短语并列作主语时，谓语用复数（allow，而非 allows）；come to do = gradually begin to（逐渐开始/来……）；slow down to the moment = slow down and live in the present moment（活在当下）。",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "rd_t2017_46",
    "year": 2017,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "But even as the number of English speakers expands further, there are signs that the global predominance of the language may fade within the foreseeable future.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 但即便英语使用者的数量进一步扩大，也有迹象表明这门语言的全球主导地位可能在可预见的未来逐渐消退。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> even as 引导让步/时间并发从句（\"即便……的同时\"）；there are signs that 固定结构，that 引导同位语从句说明 signs 的内容；the global predominance of the language 名词短语\"语言的全球主导地位\"；within the foreseeable future 固定短语\"在可预见的未来\"；may fade 情态动词表推测。</span>",
    "translateLines": [
      "But even as the number of English speakers expands further, there are signs that the global predominance of the language may fade within the foreseeable future."
    ],
    "glossary": {
      "even as": "即便……的同时；就在……之际（让步/时间并发）",
      "predominance": "n. 主导地位；支配性（= dominance）",
      "fade": "v. 消退；减弱；褪色",
      "foreseeable future": "n. 可预见的未来（within the foreseeable future 固定短语）"
    },
    "answer": "【结构拆解】\n① even as the number of English speakers expands further — even as 让步/时间从句（\"即便……/就在……之际\"）\n② there are signs that the global predominance of the language may fade within the foreseeable future — 主句\n   — there are signs that — 固定结构，that 引导同位语从句\n   — the global predominance of the language — 主语（= the fact that English dominates globally）\n   — may fade — 情态动词表推测（\"可能消退\"）\n   — within the foreseeable future — 时间状语\n【解题要点】even as = even while/even though（带有时间并发与让步双重含义）；signs that... 中 that 为同位语从句引导词，解释 signs 的内容，注意不是定语从句（that 后的从句成分完整）。",
    "tags": [
      "#真题长难句",
      "#同位语从句"
    ]
  },
  {
    "id": "rd_t2017_47",
    "year": 2017,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "His analysis should therefore end any self-contentedness among those who may believe that the global position of English is so stable that the young generation of the United Kingdom do not need additional language capabilities.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 因此，他的分析应当终结那些认为英语全球地位如此稳固以至于英国年轻一代不需要掌握额外语言能力的人的自满情绪。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> self-contentedness 名词\"自满；自我满足\"；among those who 定语从句修饰 those；believe that 宾语从句；so...that 结果状语从句嵌套在 believe 的宾语从句内；additional language capabilities 表\"额外的语言能力\"。</span>",
    "translateLines": [
      "His analysis should therefore end any self-contentedness among those who may believe that the global position of English is so stable that the young generation of the United Kingdom do not need additional language capabilities."
    ],
    "glossary": {
      "self-contentedness": "n. 自满；自我满足（= complacency）",
      "global position": "n. 全球地位；国际地位",
      "so stable that": "如此稳固以至于（so...that 结果从句）",
      "language capabilities": "n. 语言能力；语言水平"
    },
    "answer": "【结构拆解】\n主干：His analysis should therefore end any self-contentedness among those who may believe that...\n① among those who may believe that... — 定语从句修饰 those\n② believe that the global position of English is so stable that... — believe 的宾语从句\n③ so stable that the young generation...do not need additional language capabilities — so...that 结果从句（嵌套于宾语从句内）\n【解题要点】多重从句嵌套：[those who believe [that...is so stable [that...do not need...]]]；self-contentedness = complacency（自满/骄傲自满），考研写作可用 complacency 替换；注意\"the young generation...do not need\"中 generation 作集合名词，谓语用复数（英式英语习惯）。",
    "tags": [
      "#真题长难句",
      "#多重从句"
    ]
  },
  {
    "id": "rd_t2017_48",
    "year": 2017,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "Many countries are introducing English into the primary-school curriculum, but British schoolchildren and students do not appear to be gaining greater encouragement to achieve fluency in other languages.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 许多国家正在将英语引入小学课程，但英国学龄儿童和学生们却似乎并没有获得更多的鼓励去在其他语言上达到流利的水平。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> introduce...into 固定搭配\"将……引入\"；do not appear to be doing 固定结构\"似乎并没有在做……\"（appear + 不定式进行时）；gaining greater encouragement to achieve 动名词 + 不定式（encouragement to do = 做……的鼓励）；fluency in other languages \"在其他语言方面的流利程度\"。</span>",
    "translateLines": [
      "Many countries are introducing English into the primary-school curriculum, but British schoolchildren and students do not appear to be gaining greater encouragement to achieve fluency in other languages."
    ],
    "glossary": {
      "primary-school curriculum": "n. 小学课程体系",
      "do not appear to be doing": "似乎并没有在……（appear + 不定式进行时）",
      "encouragement to do": "做……的鼓励；鼓励某人做……",
      "fluency": "n. 流利；流畅（fluency in = 在……方面的流利度）"
    },
    "answer": "【结构拆解】\n① Many countries are introducing English into the primary-school curriculum — 主句1（现在进行时）\n② but British schoolchildren and students do not appear to be gaining greater encouragement to achieve fluency in other languages — 转折主句2\n   — do not appear to be gaining — appear + 不定式进行时的否定（\"似乎并没有正在获得\"）\n   — encouragement to achieve fluency — 名词 + 不定式（to achieve 修饰 encouragement）\n   — fluency in other languages — 在其他语言上的流利度\n【解题要点】appear to be doing（正在似乎做某事）与 appear to do（似乎做了某事）的时态差异：进行时强调动作的持续进行；not appear to = seem not to（似乎没有……）。",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "rd_t2017_49",
    "year": 2017,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "The changes identified by David Graddol all present clear and major challenges to the UK's providers of English language teaching to people of other countries and to broader education business sectors.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 大卫·格拉多尔所识别出的这些变化，均对英国向他国人民提供英语教学的服务机构以及更广泛的教育商业领域提出了清晰而重大的挑战。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> identified by David Graddol 过去分词短语作后置定语修饰 changes；present challenges to 固定搭配\"向……提出挑战\"（present 此处为动词\"呈现/提出\"）；两个并列介词短语 to...and to... 作宾语；providers of...to... 结构\"向……提供……的机构\"。</span>",
    "translateLines": [
      "The changes identified by David Graddol all present clear and major challenges to the UK's providers of English language teaching to people of other countries and to broader education business sectors."
    ],
    "glossary": {
      "identified": "v. 识别；确认（identify 的过去分词，此处作后置定语）",
      "present challenges to": "向……提出挑战（固定搭配，present = pose）",
      "providers of...to": "向……提供……的机构/供应商",
      "broader education business sectors": "n. 更广泛的教育商业领域"
    },
    "answer": "【结构拆解】\n主干：The changes all present clear and major challenges\n① identified by David Graddol — 过去分词短置定语修饰 The changes\n② present challenges to [the UK's providers of English language teaching to people of other countries] and to [broader education business sectors] — 两个并列 to 短语作宾语\n   — providers of English language teaching to people of other countries — 复杂名词短语（提供……给……的机构）\n【解题要点】present 在此是动词（= pose/offer），而非形容词\"现在的\"；identified by = which were identified by（省略关系词的定语从句等价形式）；all 作副词修饰谓语 present（\"全都对……提出挑战\"）。",
    "tags": [
      "#真题长难句",
      "#宾语后置"
    ]
  },
  {
    "id": "rd_t2017_50",
    "year": 2017,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "It gives a basis to all organizations which seek to promote the learning of languages and which, therefore, seek to operate in a very different operating environment from that of the past.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 这为所有致力于推广语言学习的机构提供了依据，而这些机构因此也在一个与过去截然不同的运营环境中寻求运作。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> give a basis to 固定搭配\"为……提供依据/基础\"；两个并列 which 定语从句修饰 organizations（which seek...and which...seek）；therefore 插入连接词；from that of the past 中 that = the operating environment（代词替代避免重复）；so different...from 比较结构。</span>",
    "translateLines": [
      "It gives a basis to all organizations which seek to promote the learning of languages and which, therefore, seek to operate in a very different operating environment from that of the past."
    ],
    "glossary": {
      "give a basis to": "为……提供基础/依据（固定搭配）",
      "seek to do": "寻求做；力图做（固定结构）",
      "operating environment": "n. 运营环境；操作环境",
      "from that of the past": "与过去的（that 代指前文名词）"
    },
    "answer": "【结构拆解】\n主干：It gives a basis to all organizations\n① which seek to promote the learning of languages — 定语从句1，修饰 organizations\n② and which, therefore, seek to operate in a very different operating environment from that of the past — 定语从句2（并列）\n   — therefore — 插入副词，表逻辑推论\n   — a very different operating environment from that of the past — 比较结构（different from）\n   — that = the operating environment（代词替代，避免重复）\n【解题要点】两个并列 which 从句共同修饰 organizations，第二个 which 中插入 therefore（因此），体现逻辑推论关系；that of the past = the operating environment of the past，that 代替名词避免重复，是考研翻译高频代词用法。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2018_46",
    "year": 2018,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "By the date of his birth, Europe was witnessing the passing of the religious drama, and the creation of new forms under the incentive of classical tragedy and comedy.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 在他出生之时，欧洲正在目睹宗教戏剧的消逝，以及在古典悲剧和喜剧的激励下新形式的创造。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> by the date of his birth 时间介词短语\"在他出生之时\"；was witnessing 过去进行时\"正在目睹\"；the passing of...and the creation of... 两个并列动名词名词化短语作 witnessing 的宾语；under the incentive of 固定搭配\"在……的激励/推动下\"。</span>",
    "translateLines": [
      "By the date of his birth, Europe was witnessing the passing of the religious drama, and the creation of new forms under the incentive of classical tragedy and comedy."
    ],
    "glossary": {
      "by the date of": "在……之时；到……的时候",
      "witnessing": "v. 目睹；见证（witness 的现在分词）",
      "the passing of": "n. 消逝；逝去（passing 动名词名词化）",
      "under the incentive of": "在……的激励/推动下（固定搭配）"
    },
    "answer": "【结构拆解】\n主干：Europe was witnessing [the passing of the religious drama] and [the creation of new forms under the incentive of classical tragedy and comedy]\n① By the date of his birth — 时间状语（by = at/around the time of）\n② was witnessing — 过去进行时（强调当时正在发生的历史进程）\n③ the passing of the religious drama — 第一个宾语（动名词名词化：the passing = the disappearance）\n④ the creation of new forms under the incentive of classical tragedy and comedy — 第二个宾语\n   — under the incentive of — 方式/原因状语（= inspired by / driven by）\n【解题要点】by the date of his birth 此处 by = at，表时间节点（\"在他出生之时\"）；动名词名词化（the passing, the creation）在学术文体中极为常见，翻译时对应为\"……的消逝/创造\"。",
    "tags": [
      "#真题长难句",
      "#并列结构"
    ]
  },
  {
    "id": "rd_t2018_47",
    "year": 2018,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "No boy who went to a grammar school could be ignorant that the drama was a form of literature which gave glory to Greece and Rome and might yet bring honor to England.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 凡是进过文法学校的男孩，不可能不知道戏剧是一种文学形式，它曾为希腊和罗马带来荣耀，并且仍有可能为英格兰带来荣誉。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> No boy...could be ignorant that 双重否定结构（No...could be ignorant = must know，\"没有人不知道\"）；who went to a grammar school 定语从句修饰 boy；be ignorant that 固定搭配\"不知道……\"；which gave...and might yet bring 并列定语从句修饰 literature；yet 副词\"仍然；还\"（表仍有可能）。</span>",
    "translateLines": [
      "No boy who went to a grammar school could be ignorant that the drama was a form of literature which gave glory to Greece and Rome and might yet bring honor to England."
    ],
    "glossary": {
      "grammar school": "n. 文法学校（英国传统精英中学）",
      "be ignorant that": "不知道……；对……无知（be ignorant of/that）",
      "gave glory to": "为……带来荣耀（give glory to 固定搭配）",
      "might yet": "仍有可能；尚能（yet 副词，表\"仍然\"）"
    },
    "answer": "【结构拆解】\n主干（双重否定）：No boy could be ignorant that the drama was a form of literature\n① No + 主语 + could be ignorant that = 没有人不知道 = 所有人都知道（双重否定 = 强烈肯定）\n② who went to a grammar school — 定语从句修饰 boy\n③ that the drama was a form of literature — be ignorant 的宾语从句\n④ which gave glory to Greece and Rome and might yet bring honor to England — 并列定语从句修饰 literature\n   — might yet bring — yet = still（仍然），情态动词表推测\n【解题要点】No + N + could be ignorant that = 双重否定，语气强烈；翻译时体现\"不可能不知道\"或\"无一不知道\"；yet 在此作副词表\"仍然\"（≠ 连词\"但是\"），与情态动词连用表\"仍有可能\"。",
    "tags": [
      "#真题长难句",
      "#特殊否定句"
    ]
  },
  {
    "id": "rd_t2018_48",
    "year": 2018,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "But the professional companies prospered in their permanent theaters, and university men with literary ambitions were quick to turn to these theaters as offering a means of livelihood.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 但职业剧团在其固定剧院中蓬勃发展，而有文学抱负的大学人士也迅速将目光转向这些剧院，将其视为谋生的手段。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> be quick to do 固定结构\"迅速做……；急于做……\"；turn to...as doing 固定结构\"转向……，视之为……\"；as offering a means of livelihood 中 as 表\"作为；视为\"，offering 为动名词；a means of livelihood 固定短语\"谋生之道；维持生计的手段\"（means 单复数同形）。</span>",
    "translateLines": [
      "But the professional companies prospered in their permanent theaters, and university men with literary ambitions were quick to turn to these theaters as offering a means of livelihood."
    ],
    "glossary": {
      "prospered": "v. 兴旺；繁荣（prosper 的过去式）",
      "literary ambitions": "n. 文学抱负；文学志向",
      "be quick to do": "迅速做……；急于……（固定结构）",
      "a means of livelihood": "n. 谋生之道；生计手段（means 单复数同形）"
    },
    "answer": "【结构拆解】\n① the professional companies prospered in their permanent theaters — 分句1\n② university men with literary ambitions were quick to turn to these theaters as offering a means of livelihood — 分句2\n   — with literary ambitions — 后置定语修饰 university men\n   — were quick to turn to — be quick to do（迅速……）\n   — as offering a means of livelihood — as + 动名词，表\"将其视为/作为……\"\n【解题要点】as + doing 结构在此表\"视为/作为……来……\"（= as a means of offering livelihood）；turn to = resort to / look to（转向；求助于）；livelihood = 生计（a means of livelihood = a way to earn a living）。",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "rd_t2018_49",
    "year": 2018,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "A native literary drama had been created, its alliance with the public playhouses established, and at least some of its great traditions had been begun.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 本土文学戏剧已经被创造出来，它与公共剧院的联盟已经确立，其众多伟大传统中至少有一些已经开始形成。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> 三个并列分句（had been created / its alliance...established / had been begun）：第二个分句 its alliance with the public playhouses established 为独立主格结构（名词 + 过去分词，无谓语动词），插入两个被动完成时分句之间；had been created / had been begun 均为过去完成时被动语态。</span>",
    "translateLines": [
      "A native literary drama had been created, its alliance with the public playhouses established, and at least some of its great traditions had been begun."
    ],
    "glossary": {
      "native": "adj. 本土的；本地的；土生土长的",
      "alliance": "n. 联盟；同盟；联合",
      "playhouses": "n. 剧院；戏院（playhouse 的复数）",
      "established": "v./adj. 确立；建立（此处为过去分词，独立主格结构中作谓语成分）"
    },
    "answer": "【结构拆解】\n三个并列成分：\n① A native literary drama had been created — 过去完成时被动\n② its alliance with the public playhouses established — 独立主格结构（名词 + 过去分词，无系动词）\n   — its = the native literary drama's\n   — alliance...established = the alliance had been established\n③ and at least some of its great traditions had been begun — 过去完成时被动\n【解题要点】独立主格结构（Nominative Absolute）= 名词 + 非谓语动词（此处为过去分词），无需系动词；整个结构相当于一个从句（its alliance was established），但更简洁；三个并列成分共同描述历史成就，翻译时保持排比语气。",
    "tags": [
      "#真题长难句",
      "#独立主格"
    ]
  },
  {
    "id": "rd_t2018_50",
    "year": 2018,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "To realize how great was the dramatic activity, we must remember further that hosts of plays have been lost, and that probably there is no author of note whose entire work has survived.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 要意识到戏剧活动是多么繁荣，我们还必须记住：大量剧本已经失传，而且很可能没有任何一位知名作者的全部作品得以流传下来。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> To realize...we must remember 不定式作目的状语（\"为了认识到……\"）；how great was the dramatic activity 间接疑问句，注意倒装（how great + 倒装语序）；two that 从句（that hosts of plays...and that probably...）并列作 remember 的宾语；of note 固定短语\"著名的；值得注意的\"；whose entire work has survived 定语从句修饰 author。</span>",
    "translateLines": [
      "To realize how great was the dramatic activity, we must remember further that hosts of plays have been lost, and that probably there is no author of note whose entire work has survived."
    ],
    "glossary": {
      "how great was": "多么繁荣（间接疑问句，倒装语序）",
      "hosts of": "大量的；许多（= a large number of）",
      "of note": "著名的；值得注意的（固定短语 = notable）",
      "survived": "v. 留存；流传下来；幸存（survive 的过去分词）"
    },
    "answer": "【结构拆解】\n① To realize how great was the dramatic activity — 目的不定式短语（\"为了认识到……\"）\n   — how great was the dramatic activity — 间接疑问句（how + adj + 倒装：was the dramatic activity）\n② we must remember further that...and that... — 主句 + 两个并列 that 宾语从句\n③ that hosts of plays have been lost — 第一个 that 从句\n④ that probably there is no author of note whose entire work has survived — 第二个 that 从句\n   — of note — 后置定语（= notable，著名的）\n   — whose entire work has survived — 定语从句修饰 author\n【解题要点】间接疑问句中 how great was... 保留疑问语序（倒装），这是考研翻译中少见但重要的特殊结构；of note = notable（著名的），后置定语，翻译时前移为\"著名的作者\"。",
    "tags": [
      "#真题长难句",
      "#宾语从句"
    ]
  },
  {
    "id": "rd_t2019_46",
    "year": 2019,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "There is a great deal of this kind of nonsense in the medical journals which, when taken up by broadcasters and the lay press, generates both health scares and short-lived dietary enthusiasms.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 医学期刊中存在大量这类荒谬内容，一旦被广播公司和大众媒体采用，便会同时引发健康恐慌和短暂的饮食热潮。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> a great deal of 固定短语\"大量的\"；which...generates 非限制性定语从句，先行词为 nonsense；when taken up by 省略结构（= when it is taken up by，时间状语从句省略主语和 be 动词）；generates both...and... 关联并列（both...and...）；lay press 固定短语\"大众报刊；非专业媒体\"。</span>",
    "translateLines": [
      "There is a great deal of this kind of nonsense in the medical journals which, when taken up by broadcasters and the lay press, generates both health scares and short-lived dietary enthusiasms."
    ],
    "glossary": {
      "a great deal of": "大量的（修饰不可数名词）",
      "taken up by": "被……采用；被……拾起（take up 的被动分词）",
      "lay press": "n. 大众报刊；非专业媒体（lay = non-professional）",
      "health scares": "n. 健康恐慌；疾病恐慌",
      "short-lived dietary enthusiasms": "n. 短暂的饮食热潮"
    },
    "answer": "【结构拆解】\n主干：There is a great deal of this kind of nonsense in the medical journals\n① which, when taken up by broadcasters and the lay press, generates both health scares and short-lived dietary enthusiasms — 非限制性定语从句，修饰 nonsense\n   — when taken up by — 时间状语从句省略（= when it is taken up by）\n   — generates both...and — both...and 关联并列\n【解题要点】非限制性定语从句中插入状语（when taken up by...），需先识别出从句主干（which...generates）；when + 过去分词是时间状语从句的常见省略形式（省略主语 + be 动词）；lay 在此作形容词\"非专业的/世俗的\"（= non-professional）。",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "rd_t2019_47",
    "year": 2019,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "Nowadays anyone applying for a research post has to have published twice the number of papers that would have been required for the same post only 10 years ago.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 如今，任何申请科研职位的人都必须发表数量是仅仅10年前同等职位所要求的两倍的论文。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> applying for a research post 现在分词作后置定语修饰 anyone；has to have published 情态动词 + 完成时不定式\"必须已经发表\"；twice the number of papers 固定倍数结构\"……数量的两倍\"；that would have been required 虚拟语气定语从句修饰 papers（would have been = 虚拟条件，表假设）；only 10 years ago 强调时间近。</span>",
    "translateLines": [
      "Nowadays anyone applying for a research post has to have published twice the number of papers that would have been required for the same post only 10 years ago."
    ],
    "glossary": {
      "applying for": "申请……（apply for 的现在分词，后置定语）",
      "has to have published": "必须已经发表（情态动词 + 完成时不定式）",
      "twice the number of": "……数量的两倍（倍数 + the + 名词）",
      "would have been required": "原本会被要求的（虚拟语气，表与过去事实相反）"
    },
    "answer": "【结构拆解】\n主干：anyone applying for a research post has to have published twice the number of papers\n① applying for a research post — 现在分词后置定语修饰 anyone\n② has to have published — 情态动词 + 完成时不定式（must have published 的等价形式）\n③ twice the number of papers — 倍数表达（twice + the + 名词）\n④ that would have been required for the same post only 10 years ago — 定语从句修饰 papers（虚拟语气：与10年前的事实对比）\n【解题要点】倍数结构：twice/three times + the number/amount/size + of + 名词；has to have done = 情态动词完成时，表\"必须已经完成某事\"；would have been required 是虚拟语气，暗含\"现实要求更高了\"的对比语气。",
    "tags": [
      "#真题长难句",
      "#虚拟语气"
    ]
  },
  {
    "id": "rd_t2019_48",
    "year": 2019,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "Attempts have been made to curb this tendency, for example, by trying to incorporate some measure of quality as well as quantity into the assessment of an applicant's papers.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 已有人尝试遏制这一趋势，例如，通过在对申请者论文的评估中纳入一定程度的质量考量，而不仅仅是数量的考量。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Attempts have been made to do 固定结构\"已有人/已做出尝试去做……\"（被动表泛指主语）；curb this tendency 固定搭配\"遏制这一趋势\"；by trying to incorporate 介词短语表方式；as well as 固定结构\"以及；不仅……而且\"（连接 quality 和 quantity）；into the assessment of 介词短语表引入范围。</span>",
    "translateLines": [
      "Attempts have been made to curb this tendency, for example, by trying to incorporate some measure of quality as well as quantity into the assessment of an applicant's papers."
    ],
    "glossary": {
      "attempts have been made to": "已有人尝试做……（被动泛指，固定结构）",
      "curb": "v. 遏制；控制；抑制（= restrain/limit）",
      "incorporate...into": "将……纳入；整合进……（固定搭配）",
      "as well as": "以及；不仅……而且（= and also）",
      "some measure of": "一定程度的；某种程度的"
    },
    "answer": "【结构拆解】\n主干：Attempts have been made to curb this tendency\n① have been made — 被动语态（主语 Attempts 为泛指，无具体施事者）\n② to curb this tendency — 不定式作目的状语\n③ for example, by trying to incorporate some measure of quality as well as quantity into the assessment of an applicant's papers — 方式状语（by + 动名词）\n   — as well as — 连接 quality 和 quantity（\"质量以及数量\"）\n   — incorporate...into — 固定搭配\n【解题要点】attempts have been made to do = people have tried to do（人们已尝试……），被动语态表泛指（无需说明是谁）；as well as 连接名词时，强调前者（some measure of quality as well as quantity = 质量，以及数量）。",
    "tags": [
      "#真题长难句",
      "#被动语态"
    ]
  },
  {
    "id": "rd_t2019_49",
    "year": 2019,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "This would be reasonable if it were not for the fact that scientists can easily arrange to cite themselves in their future publications, or get associates to do so for them in return for similar favours.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 这本来是合理的，要不是由于科学家可以轻易安排在自己未来的出版物中引用自己，或者让同事为自己这样做以换取类似的回报这一事实。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> if it were not for 固定虚拟语气结构\"要不是……；如果没有……\"（= were it not for，虚拟条件句）；the fact that 同位语从句；arrange to cite themselves 固定搭配\"安排引用自己\"；get associates to do so 使役结构（get sb. to do）；in return for similar favours 固定短语\"以换取类似的回报\"。</span>",
    "translateLines": [
      "This would be reasonable if it were not for the fact that scientists can easily arrange to cite themselves in their future publications, or get associates to do so for them in return for similar favours."
    ],
    "glossary": {
      "if it were not for": "要不是……；假若没有……（虚拟语气固定结构）",
      "the fact that": "……这一事实（同位语从句引导）",
      "cite": "v. 引用；引证；援引",
      "in return for": "作为……的回报；以换取……（固定搭配）"
    },
    "answer": "【结构拆解】\n主干（虚拟语气）：This would be reasonable if it were not for the fact that...\n① would be reasonable — 虚拟语气主句（与现实相反：实际上并不合理）\n② if it were not for the fact that — 虚拟条件句（if it were not for = were it not for）\n③ the fact that scientists can easily arrange to cite themselves...or get associates to do so... — that 引导同位语从句\n   — arrange to cite themselves — arrange to do（安排做……）\n   — get associates to do so — get sb. to do（使役结构）\n   — in return for similar favours — 目的/方式状语\n【解题要点】if it were not for = were it not for（虚拟条件句，与现在事实相反），翻译为\"要不是/如果没有\"；do so = cite themselves（代动词，指代前文动作，避免重复）。",
    "tags": [
      "#真题长难句",
      "#虚拟语气"
    ]
  },
  {
    "id": "rd_t2019_50",
    "year": 2019,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "If we are serious about ensuring that our science is both meaningful and reproducible, we must ensure that our institutions encourage that kind of science.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 如果我们真的认真对待确保我们的科学既有意义又可复现这一问题，我们就必须确保我们的机构鼓励这种科学。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> be serious about doing 固定搭配\"认真对待做……；对做……认真\"；ensuring that 动名词 + 宾语从句；both...and 关联并列\"既……又……\"；reproducible 意为\"可重现的；可复现的\"（科学研究的核心标准之一）；ensure that 宾语从句；that kind of science 指代前文所描述的科学研究方式。</span>",
    "translateLines": [
      "If we are serious about ensuring that our science is both meaningful and reproducible, we must ensure that our institutions encourage that kind of science."
    ],
    "glossary": {
      "be serious about": "认真对待；重视（be serious about doing）",
      "ensuring": "v. 确保；保证（ensure 的动名词）",
      "reproducible": "adj. 可重现的；可复现的（科研术语）",
      "that kind of science": "那种（前文所述的）科学"
    },
    "answer": "【结构拆解】\n① If we are serious about ensuring that our science is both meaningful and reproducible — if 条件从句\n   — be serious about doing — 固定结构（\"认真对待……\"）\n   — ensuring that... — 动名词 + 宾语从句\n   — both meaningful and reproducible — both...and 关联并列\n② we must ensure that our institutions encourage that kind of science — 主句\n   — ensure that — 宾语从句\n   — that kind of science — 指代前文已定义的\"有意义且可重现的科学\"\n【解题要点】be serious about doing = take...seriously（认真对待……）；reproducible 是科研领域核心词，强调实验结果能被他人重复验证；两个 ensure 形成结构上的呼应（首尾照应）。",
    "tags": [
      "#真题长难句",
      "#条件状语从句"
    ]
  },
  {
    "id": "rd_t2020_46",
    "year": 2020,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "With the church's teachings and ways of thinking being eclipsed by the Renaissance, the gap between the medieval and modern periods had been bridged, leading to new and unexplored intellectual territories.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 随着教会的教义和思维方式被文艺复兴所遮蔽，中世纪与现代之间的鸿沟已被填合，通向新的、尚未探索的知识领域。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> With...being eclipsed 独立主格结构（with + 名词 + 现在分词被动：with the church's teachings being eclipsed）；the gap...had been bridged 过去完成时被动；leading to 现在分词作结果状语；unexplored intellectual territories 名词短语\"尚未探索的知识领域\"。</span>",
    "translateLines": [
      "With the church's teachings and ways of thinking being eclipsed by the Renaissance, the gap between the medieval and modern periods had been bridged, leading to new and unexplored intellectual territories."
    ],
    "glossary": {
      "being eclipsed": "v. 被遮蔽；被超越（eclipse 的被动进行分词）",
      "the gap had been bridged": "鸿沟已被填合（bridge the gap 固定搭配）",
      "medieval": "adj. 中世纪的",
      "leading to": "导向；通向（现在分词，表结果）",
      "intellectual territories": "n. 知识领域；思想版图"
    },
    "answer": "【结构拆解】\n① With the church's teachings and ways of thinking being eclipsed by the Renaissance — with 复合结构（独立主格）\n   — with + 名词 + being done — 表被动进行的伴随状态（\"随着……被……\"）\n② the gap between the medieval and modern periods had been bridged — 主句（过去完成时被动）\n   — bridge the gap — 固定搭配（填补鸿沟）\n③ leading to new and unexplored intellectual territories — 现在分词作结果状语\n【解题要点】with + 名词 + 现在分词（主动）/ 过去分词（被动）/ being + 过去分词（被动进行）— 独立主格结构的三种形式；此处 being eclipsed = 被文艺复兴遮蔽（被动进行），强调这一过程的持续性。",
    "tags": [
      "#真题长难句",
      "#独立主格"
    ]
  },
  {
    "id": "rd_t2020_47",
    "year": 2020,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "Before each of their revelations, many thinkers at the time had sustained more ancient ways of thinking, including the geocentric view that the Earth was at the centre of our universe.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 在他们每一次重大发现之前，当时的许多思想家都坚持着更为古老的思维方式，其中包括地心说——即认为地球处于宇宙中心的观点。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> before each of their revelations 时间状语；had sustained 过去完成时\"曾经坚持\"；including the geocentric view 现在分词短语作插入状语（举例说明）；that the Earth was at the centre of our universe 同位语从句修饰 view；geocentric 意为\"地心说的；以地球为中心的\"。</span>",
    "translateLines": [
      "Before each of their revelations, many thinkers at the time had sustained more ancient ways of thinking, including the geocentric view that the Earth was at the centre of our universe."
    ],
    "glossary": {
      "revelations": "n. 重大发现；揭示；启示（revelation 复数）",
      "sustained": "v. 维持；坚持；秉持（sustain 的过去式）",
      "geocentric": "adj. 地心说的；以地球为中心的",
      "the centre of our universe": "n. 宇宙的中心"
    },
    "answer": "【结构拆解】\n主干：many thinkers at the time had sustained more ancient ways of thinking\n① Before each of their revelations — 时间状语\n② at the time — 后置时间状语修饰 thinkers（\"当时的思想家\"）\n③ had sustained — 过去完成时（在某节点之前已持续的状态）\n④ including the geocentric view that the Earth was at the centre of our universe — 现在分词短语，举例说明 ancient ways of thinking\n   — including — 介词/分词，表\"包括\"\n   — that the Earth was at the centre of our universe — 同位语从句修饰 geocentric view\n【解题要点】including + 名词/从句 是举例说明的常见方式（= for example）；had sustained 过去完成时暗示\"在发现之前一直持续\"，翻译时需体现\"曾经/此前一直\"的语气。",
    "tags": [
      "#真题长难句",
      "#同位语从句"
    ]
  },
  {
    "id": "rd_t2020_48",
    "year": 2020,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "Despite attempts by the Church to suppress this new generation of logicians and rationalists, more explanations for how the universe functioned were being made at a rate that people could no longer ignore.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 尽管教会试图压制这一新一代的逻辑学家和理性主义者，但关于宇宙如何运作的更多解释正以一种人们再也无法忽视的速度涌现出来。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Despite...attempts to do 让步介词短语\"尽管……尝试做……\"；were being made 过去进行时被动\"正在被提出\"；for how the universe functioned 介词短语中嵌套间接疑问句（how 从句）；at a rate that 固定结构\"以……的速度\"，that 引导定语从句修饰 rate；could no longer ignore 双重否定\"再也无法忽视\"。</span>",
    "translateLines": [
      "Despite attempts by the Church to suppress this new generation of logicians and rationalists, more explanations for how the universe functioned were being made at a rate that people could no longer ignore."
    ],
    "glossary": {
      "despite": "prep. 尽管；不管（= in spite of，后接名词/动名词）",
      "suppress": "v. 压制；镇压；抑制",
      "logicians": "n. 逻辑学家（logician 复数）",
      "rationalists": "n. 理性主义者（rationalist 复数）",
      "at a rate that": "以……的速度（rate 后接定语从句）"
    },
    "answer": "【结构拆解】\n① Despite attempts by the Church to suppress this new generation of logicians and rationalists — 让步状语\n   — despite + 名词短语（注意 despite 后不接 that 从句，接名词）\n   — to suppress — 不定式修饰 attempts（\"尝试压制\"）\n② more explanations for how the universe functioned were being made at a rate that people could no longer ignore — 主句\n   — for how the universe functioned — for + 间接疑问句（\"关于宇宙如何运转的\"）\n   — were being made — 过去进行时被动（正被提出）\n   — at a rate that people could no longer ignore — 定语从句修饰 rate\n【解题要点】despite + 名词是标准用法（≠ despite of，注意不加 of）；for + how 从句作名词后置定语，表\"关于……如何……的\"解释；could no longer = was no longer able to（再也无法）。",
    "tags": [
      "#真题长难句",
      "#让步状语从句"
    ]
  },
  {
    "id": "rd_t2020_49",
    "year": 2020,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "As many took on the duty of trying to integrate reasoning and scientific philosophies into the world, the Renaissance was over and it was time for a new era.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 随着许多人肩负起将理性思维和科学哲学融入世界的职责，文艺复兴宣告结束，一个新时代到来了。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> As 引导时间状语从句（\"随着……\"）；took on the duty of doing 固定搭配\"承担起做……的职责\"；integrate...into 固定搭配\"将……整合到/融入\"；it was time for 固定结构\"是……的时候了\"；the Renaissance was over \"文艺复兴结束了\"。</span>",
    "translateLines": [
      "As many took on the duty of trying to integrate reasoning and scientific philosophies into the world, the Renaissance was over and it was time for a new era."
    ],
    "glossary": {
      "took on the duty of": "承担……的职责（take on the duty of 固定搭配）",
      "integrate...into": "将……整合融入……（固定搭配）",
      "reasoning": "n. 推理；理性思维（此处为名词）",
      "it was time for": "是……的时候了（固定结构）"
    },
    "answer": "【结构拆解】\n① As many took on the duty of trying to integrate reasoning and scientific philosophies into the world — as 时间从句（\"随着……\"）\n   — took on the duty of doing — 固定搭配（承担做……的职责）\n   — trying to integrate...into — 动名词短语作 of 宾语\n② the Renaissance was over — 主句1（was over = had ended）\n③ and it was time for a new era — 主句2（it was time for = 是……的时候了）\n【解题要点】as 引导时间从句（= while/when，\"随着/当……之时\"）；take on = assume（承担）；it is time for sth. = it is time to do sth.（是做某事的时候了）。",
    "tags": [
      "#真题长难句",
      "#状语从句"
    ]
  },
  {
    "id": "rd_t2020_50",
    "year": 2020,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "Such actions to seek knowledge and to understand what information we already knew were captured by the Latin phrase \"Sapere aude\" or \"dare to know\".<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 这种寻求知识、理解我们已知信息的行动被拉丁短语\"Sapere aude\"（即\"敢于求知\"）所概括。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Such actions to seek...and to understand 中两个并列不定式作后置定语修饰 actions；what information we already knew 间接疑问句（名词性从句）作 understand 的宾语；were captured by 被动语态\"被……所概括/捕捉\"；Sapere aude 为拉丁语引语，后接英译\"dare to know\"作同位说明。</span>",
    "translateLines": [
      "Such actions to seek knowledge and to understand what information we already knew were captured by the Latin phrase \"Sapere aude\" or \"dare to know\"."
    ],
    "glossary": {
      "such actions to": "这种做……的行动（to + 不定式后置定语修饰 actions）",
      "what information we already knew": "我们已经了解的信息（间接疑问句作宾语）",
      "were captured by": "被……所概括；被……所捕捉（capture 的被动语态）",
      "Sapere aude": "拉丁语\"敢于求知\"（启蒙运动核心口号）"
    },
    "answer": "【结构拆解】\n主干：Such actions were captured by the Latin phrase \"Sapere aude\"\n① to seek knowledge and to understand what information we already knew — 两个并列不定式作后置定语修饰 actions\n   — what information we already knew — 间接疑问句（what + 名词 + 主谓）作 understand 的宾语\n② were captured by — 被动语态\n③ \"Sapere aude\" or \"dare to know\" — 引语 + 英译（or 表等义解释）\n【解题要点】what information we already knew = what information (that) we already knew（间接疑问句，陈述句语序）；capture 在此为比喻义\"概括/捕捉（某一概念/精神）\"（≠ 捕获），翻译为\"被……所概括/体现\"；Sapere aude 是康德启蒙运动核心口号，翻译时可保留原文并加注。",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "rd_t2021_46",
    "year": 2021,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "But being legally allowed to do something is not the same as it being ethically obligatory to do it, and choosing not to do something that is harmful though permissible is a perfectly defensible position.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 但是，法律上允许做某事与道德上有义务做某事并不相同，选择不做某件有害的事——尽管这件事是被允许的——是一种完全站得住脚的立场。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> being legally allowed to do sth. 和 it being ethically obligatory to do it 均为动名词短语作主语（is not the same as 连接两者）；though permissible 为省略结构（= though it is permissible）；a perfectly defensible position 为主语补足语（表语）。</span>",
    "translateLines": [
      "But being legally allowed to do something is not the same as it being ethically obligatory to do it, and choosing not to do something that is harmful though permissible is a perfectly defensible position."
    ],
    "glossary": {
      "legally allowed": "法律上允许的（legally 修饰 allowed）",
      "ethically obligatory": "道德上有义务的（obligatory = required by duty）",
      "though permissible": "尽管被允许（省略结构，= though it is permissible）",
      "defensible": "adj. 站得住脚的；可辩护的；合理的"
    },
    "answer": "【结构拆解】\n并列句：主句1 + and + 主句2\n主句1 主干：being legally allowed to do something is not the same as it being ethically obligatory to do it\n① being legally allowed to do something — 动名词短语作主语\n② it being ethically obligatory to do it — 动名词短语作 as 的宾语（it 为形式主语，真正主语为 to do it）\n主句2 主干：choosing not to do something is a perfectly defensible position\n① that is harmful though permissible — 定语从句修饰 something（though permissible 省略了 it is）\n【解题要点】\"being allowed to do\" ≠ \"being obligated to do\"（允许 ≠ 有义务）；though 引导让步状语，省略与主句相同的主谓成分。",
    "tags": [
      "#真题长难句",
      "#动名词"
    ]
  },
  {
    "id": "rd_t2021_47",
    "year": 2021,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "Many people, without being promiscuous or dishonest, have a public self that is quite different from the private self they share with intimate friends and family.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 许多人，虽然既不滥交也不不诚实，却拥有一个与他们和亲密朋友及家人共享的私密自我截然不同的公众自我。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> without being promiscuous or dishonest 为介词短语作方式/让步状语；that is quite different from the private self 为定语从句修饰 a public self；they share with intimate friends and family 为省略关系词的定语从句修饰 the private self。</span>",
    "translateLines": [
      "Many people, without being promiscuous or dishonest, have a public self that is quite different from the private self they share with intimate friends and family."
    ],
    "glossary": {
      "promiscuous": "adj. 滥交的；杂乱的（此处指行为上的放纵）",
      "dishonest": "adj. 不诚实的；欺骗的",
      "public self": "公众自我（他人眼中的形象）",
      "private self": "私密自我（内心真实的自我）",
      "intimate": "adj. 亲密的；私人的"
    },
    "answer": "【结构拆解】\n主干：Many people have a public self\n① without being promiscuous or dishonest — 介词短语作让步状语（= although they are not promiscuous or dishonest）\n② that is quite different from the private self — 定语从句修饰 a public self\n③ they share with intimate friends and family — 省略关系代词 that/which 的定语从句修饰 the private self\n【解题要点】without + 动名词 = \"在没有……的情况下\"，此处作让步状语；两个 self（public self / private self）构成对比，翻译时注意保持结构对称。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2021_48",
    "year": 2021,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "This is not about being a different person in different contexts, but about the fact that the social environment we find ourselves in influences which aspects of our character we reveal.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 这并非说我们在不同场合是不同的人，而是说：我们所处的社会环境会影响我们展露出自身性格的哪些方面。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> not about...but about... 并列结构表对比；the social environment we find ourselves in 中 we find ourselves in 为省略 which 的定语从句修饰 environment；which aspects of our character we reveal 为间接疑问句（名词性从句）作 influences 的宾语。</span>",
    "translateLines": [
      "This is not about being a different person in different contexts, but about the fact that the social environment we find ourselves in influences which aspects of our character we reveal."
    ],
    "glossary": {
      "not about...but about...": "不是关于……而是关于……（并列对比结构）",
      "find ourselves in": "发现自己身处……（固定搭配）",
      "which aspects...we reveal": "我们展现出哪些方面（间接疑问句作宾语）",
      "character": "n. 性格；特征；品质"
    },
    "answer": "【结构拆解】\n主干：This is not about [A], but about [B]\nA = being a different person in different contexts\nB = the fact that...（that 引导同位语从句解释 the fact）\n同位语从句主干：the social environment influences which aspects of our character we reveal\n① we find ourselves in — 省略 which 的定语从句修饰 social environment\n② which aspects of our character we reveal — 间接疑问句（陈述句语序）作 influences 的宾语\n【解题要点】find oneself in... = be in a particular situation（发现自己处于某种处境）；which aspects 引导的名词性从句用陈述句语序。",
    "tags": [
      "#真题长难句",
      "#名词性从句"
    ]
  },
  {
    "id": "rd_t2021_49",
    "year": 2021,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "While it is possible to construct plausible stories about why these character traits evolved in the human species, it is a long stretch to conclude that the existence of these traits provides confirmation of the theory of evolution.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 虽然人们可以构想出一些貌似合理的故事来解释为何这些性格特征在人类物种中得以演化，但若据此断言这些特征的存在印证了进化论，未免言之过远。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> While 引导让步状语从句；it is possible to... 形式主语结构；it is a long stretch to conclude... 形式主语结构（a long stretch = a considerable exaggeration，言之过远）；that the existence...provides confirmation of... 为 conclude 的宾语从句。</span>",
    "translateLines": [
      "While it is possible to construct plausible stories about why these character traits evolved in the human species, it is a long stretch to conclude that the existence of these traits provides confirmation of the theory of evolution."
    ],
    "glossary": {
      "plausible": "adj. 貌似合理的；看似可信的",
      "character traits": "性格特征；个性特征",
      "a long stretch": "言之过远；夸大其词（= a considerable exaggeration）",
      "confirmation": "n. 证实；确认；印证",
      "theory of evolution": "进化论"
    },
    "answer": "【结构拆解】\n让步主从复合句：While 从句 + 主句\nWhile 从句：it is possible to construct plausible stories about why these character traits evolved in the human species\n① it 为形式主语，to construct... 为真正主语\n② why these character traits evolved in the human species — 间接疑问句作 about 的宾语\n主句：it is a long stretch to conclude that...\n① it 为形式主语，to conclude 为真正主语\n② that the existence of these traits provides confirmation... — that 从句作 conclude 的宾语\n【解题要点】a long stretch = going too far / an exaggeration（言之过远，过度推断）；confirmation of sth. = 对……的印证/确认。",
    "tags": [
      "#真题长难句",
      "#状语从句"
    ]
  },
  {
    "id": "rd_t2021_50",
    "year": 2021,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "What gives humans our edge, many scientists believe, is not our physical strength or our sensory abilities, which are unremarkable compared with those of many animals, but our cognitive abilities — most particularly our faculty for language.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 许多科学家认为，使人类具有优势的，不是我们的体能或感知能力（与许多动物相比，这些能力并不出众），而是我们的认知能力——尤其是我们的语言能力。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> What gives humans our edge 为 what 引导的名词性从句作主语；many scientists believe 为插入语；not...but... 并列结构表对比；which are unremarkable compared with those of many animals 为非限制性定语从句（those 指代 physical strength or sensory abilities）。</span>",
    "translateLines": [
      "What gives humans our edge, many scientists believe, is not our physical strength or our sensory abilities, which are unremarkable compared with those of many animals, but our cognitive abilities — most particularly our faculty for language."
    ],
    "glossary": {
      "our edge": "我们的优势；优越之处（edge = competitive advantage）",
      "sensory abilities": "感知能力；感官能力",
      "unremarkable": "adj. 平平无奇的；不突出的；普通的",
      "cognitive abilities": "认知能力；思维能力",
      "faculty for language": "语言能力；语言官能"
    },
    "answer": "【结构拆解】\n主干：What gives humans our edge is not [A] but [B]\n① What gives humans our edge — what 名词性从句作主语（= The thing that gives humans our edge）\n② many scientists believe — 插入语（parenthetical），不影响主干结构\n③ not our physical strength or our sensory abilities — A（被否定部分）\n④ which are unremarkable compared with those of many animals — 非限制性定语从句，修饰 A；those 指代 abilities\n⑤ but our cognitive abilities — B（肯定部分）\n⑥ most particularly our faculty for language — 破折号后对 B 的具体说明（同位语）\n【解题要点】not A but B = \"不是A而是B\"；what 引导主语从句时动词用单数（is）；edge 在此作\"优势\"（= advantage），非\"边缘\"。",
    "tags": [
      "#真题长难句",
      "#主语从句"
    ]
  },
  {
    "id": "rd_t2022_46",
    "year": 2022,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "To suggest that someone's psychological problems can be cured simply by making them think happy thoughts has always been problematic, but a wealth of recent evidence suggests that deliberate interventions to make people feel better about themselves do work in limited circumstances.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 认为某人的心理问题仅凭让其产生快乐的想法就能得到治愈，这种观点历来都颇具争议；但大量近期证据表明，旨在让人对自身感觉更好的刻意干预，在有限的情形下确实有效。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> To suggest that... 不定式短语作主语；has always been problematic 现在完成时；a wealth of recent evidence 作主语（a wealth of = a large amount of）；that deliberate interventions...do work 为 suggests 的宾语从句；do work 中 do 为强调助动词。</span>",
    "translateLines": [
      "To suggest that someone's psychological problems can be cured simply by making them think happy thoughts has always been problematic, but a wealth of recent evidence suggests that deliberate interventions to make people feel better about themselves do work in limited circumstances."
    ],
    "glossary": {
      "problematic": "adj. 有问题的；存疑的；引发争议的",
      "a wealth of": "大量的；丰富的（= a large amount of）",
      "deliberate": "adj. 刻意的；蓄意的；经过深思熟虑的",
      "interventions": "n. 干预；干涉（intervention 复数）",
      "do work": "确实有效（do 为强调助动词，加强语气）"
    },
    "answer": "【结构拆解】\n并列句：主句1（让步）but 主句2\n主句1 主干：To suggest that... has always been problematic\n① To suggest that... — 不定式短语作主语（较长）\n② that someone's psychological problems can be cured simply by making them think happy thoughts — that 引导 suggest 的宾语从句\n主句2 主干：a wealth of recent evidence suggests that...\n① that deliberate interventions...do work in limited circumstances — that 引导 suggests 的宾语从句\n② to make people feel better about themselves — 不定式作后置定语修饰 interventions\n③ do work — do 为强调助动词（= indeed work）\n【解题要点】to suggest 作主语时，谓语动词用单数；do work = work indeed（do 用于强调肯定语气）；feel better about oneself = 对自己感觉更好/更满意。",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "rd_t2022_47",
    "year": 2022,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "To the extent that a language is a living thing that changes over time, prescriptive grammarians who write rules governing what is correct and what is incorrect can be frustrating because the rules they write are often out of date before the ink is dry.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 就语言是一种随时间变化而变化的活的事物而言，那些制定规则、规定何为正确何为错误的规范语法学家令人沮丧，因为他们所制定的规则往往在墨迹未干之时便已过时。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> To the extent that 引导程度/条件状语从句（= insofar as，\"就……而言\"）；that changes over time 为定语从句修饰 a living thing；who write rules governing what is correct and what is incorrect 为定语从句修饰 grammarians；the rules they write 中省略了关系代词 that/which；before the ink is dry 为时间状语从句（喻指\"几乎立刻\"）。</span>",
    "translateLines": [
      "To the extent that a language is a living thing that changes over time, prescriptive grammarians who write rules governing what is correct and what is incorrect can be frustrating because the rules they write are often out of date before the ink is dry."
    ],
    "glossary": {
      "to the extent that": "就……程度而言；在……范围内（= insofar as）",
      "prescriptive grammarians": "规范语法学家（prescriptive = 规定语言使用规则的）",
      "governing": "v./adj. 规定；管辖（此处为现在分词作后置定语修饰 rules）",
      "out of date": "过时的；陈旧的（= outdated）",
      "before the ink is dry": "墨迹未干之时（习语，喻指几乎立刻、瞬间）"
    },
    "answer": "【结构拆解】\n条件从句 + 主句 + because 原因从句\n条件从句：To the extent that a language is a living thing that changes over time\n① that changes over time — 定语从句修饰 a living thing\n主句：prescriptive grammarians...can be frustrating\n② who write rules governing what is correct and what is incorrect — 定语从句修饰 grammarians\n③ governing what is correct and what is incorrect — 现在分词短语作后置定语修饰 rules\nbecause 从句：the rules they write are often out of date before the ink is dry\n④ they write — 省略关系代词的定语从句修饰 the rules\n⑤ before the ink is dry — 时间状语从句（喻义：极短时间内）\n【解题要点】to the extent that = insofar as（就……而言）；prescriptive ↔ descriptive grammar（规范语法 ↔ 描述语法）。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2022_48",
    "year": 2022,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "Quite apart from the agonies of the composers themselves, atonal music tends to alienate most listeners, who react to it as they might to the discordant sound made by a large orchestra warming up before a concert.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 且不说作曲家们自身所经历的痛苦，无调性音乐往往会使大多数听众疏离，听众对它的反应就如同他们对一支大型乐队在音乐会开演前热身时发出的不和谐声响所产生的反应一样。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Quite apart from 介词短语表让步（= not to mention，\"且不说\"）；who react to it as they might to the discordant sound 为非限制性定语从句修饰 listeners；as they might to... 为方式状语从句（省略了 react）；made by a large orchestra warming up before a concert 为过去分词短语作后置定语修饰 sound。</span>",
    "translateLines": [
      "Quite apart from the agonies of the composers themselves, atonal music tends to alienate most listeners, who react to it as they might to the discordant sound made by a large orchestra warming up before a concert."
    ],
    "glossary": {
      "quite apart from": "且不说；除……之外（表让步，= not to mention）",
      "agonies": "n. 极度痛苦；煎熬（agony 复数）",
      "atonal music": "无调性音乐（atonal = 无调性的）",
      "alienate": "v. 使疏离；使疏远；使产生隔阂",
      "discordant": "adj. 不和谐的；刺耳的；嘈杂的"
    },
    "answer": "【结构拆解】\n主干：atonal music tends to alienate most listeners\n① Quite apart from the agonies of the composers themselves — 让步状语（介词短语）\n② who react to it as they might to the discordant sound — 非限制性定语从句修饰 listeners\n   — as they might to the discordant sound — 方式状语从句（= as they might react to...，省略谓语 react）\n   — made by a large orchestra warming up before a concert — 过去分词短语修饰 the discordant sound\n   — warming up before a concert — 现在分词短语修饰 a large orchestra（正在热身的乐队）\n【解题要点】as they might (react) to = in the same way as they might react to（省略了 react，与前文 react 呼应）；discordant = disharmonious（不和谐的）；warming up = 预热/热身（演出前调音的行为）。",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "rd_t2022_49",
    "year": 2022,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "This capacity for abstract thought, this ability to entertain counter-factual situations in our minds, is what sets us apart from the other animals and is at the root of so much human achievement, from art and philosophy to science and technology.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 这种抽象思维的能力，这种在我们脑海中构想反事实情境的能力，正是将我们与其他动物区别开来的东西，也是人类众多成就的根源所在——从艺术与哲学到科学与技术，皆出于此。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> This capacity...this ability... 为并列主语（同位结构，重复 this 以强调）；to entertain counter-factual situations 为不定式作后置定语修饰 ability；is what sets us apart from... 为表语从句（what = the thing that）；at the root of 介词短语 = \"是……的根源\"；from art and philosophy to science and technology 为范围状语（from...to...\"从……到……\"）。</span>",
    "translateLines": [
      "This capacity for abstract thought, this ability to entertain counter-factual situations in our minds, is what sets us apart from the other animals and is at the root of so much human achievement, from art and philosophy to science and technology."
    ],
    "glossary": {
      "capacity for": "拥有……的能力（= ability to）",
      "abstract thought": "抽象思维；抽象思考",
      "entertain": "v. 在心中构想；考虑（此处非\"娱乐\"义）",
      "counter-factual": "adj. 反事实的；与事实相反的（= contrary to fact）",
      "sets us apart from": "将我们与……区别开来（set apart from = distinguish from）",
      "at the root of": "是……的根源；在……的核心（= at the basis of）"
    },
    "answer": "【结构拆解】\n主干（并列谓语）：This capacity/ability is [A] and is [B]\n主语：This capacity for abstract thought, this ability to entertain counter-factual situations in our minds\n① This capacity for abstract thought — 主语1\n② this ability to entertain counter-factual situations in our minds — 主语2（与主语1并列，to entertain 不定式作后置定语）\n谓语A：is what sets us apart from the other animals\n③ what sets us apart from the other animals — what 从句作表语（= the thing that sets us apart from...）\n谓语B：is at the root of so much human achievement\n④ from art and philosophy to science and technology — 范围状语，进一步说明 human achievement\n【解题要点】entertain 在此不是\"娱乐\"，而是\"持有（某种想法）；在脑中构想\"；counter-factual = hypothetical/contrary to fact（反事实的，如\"假设……会怎样\"）。",
    "tags": [
      "#真题长难句",
      "#表语从句"
    ]
  },
  {
    "id": "rd_t2022_50",
    "year": 2022,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "Having a common language is essential to this process, not because language determines thought, which is the strong version of the Sapir-Whorf hypothesis that is now largely discredited, but because language is the primary medium through which thoughts are expressed, shared, and refined in dialogue with others.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 拥有一门共同的语言对这一过程至关重要，这并非因为语言决定思想（这是萨丕尔-沃尔夫假说的强版本，现已基本被推翻），而是因为语言是思想得以表达、分享并在与他人对话中得到完善的首要媒介。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Having a common language 动名词短语作主语；not because...but because... 并列结构表对比原因；which is the strong version of the Sapir-Whorf hypothesis 为非限制性定语从句，对前述内容作插入说明；that is now largely discredited 为定语从句修饰 hypothesis；through which thoughts are expressed, shared, and refined 为介词 + 关系代词引导的定语从句修饰 the primary medium。</span>",
    "translateLines": [
      "Having a common language is essential to this process, not because language determines thought, which is the strong version of the Sapir-Whorf hypothesis that is now largely discredited, but because language is the primary medium through which thoughts are expressed, shared, and refined in dialogue with others."
    ],
    "glossary": {
      "essential to": "对……至关重要（= crucial for / indispensable to）",
      "determines": "v. 决定；支配（此处指语言决定论）",
      "the Sapir-Whorf hypothesis": "萨丕尔-沃尔夫假说（语言相对论，认为语言决定思维）",
      "largely discredited": "基本被推翻；受到广泛质疑（discredit = 使失去可信度）",
      "primary medium": "首要媒介；主要手段",
      "refined": "v./adj. 完善的；精炼的（refine = 改进，使更精确）"
    },
    "answer": "【结构拆解】\n主干：Having a common language is essential to this process\nnot because [A] but because [B]\nA = language determines thought（语言决定思想）\n   — which is the strong version of the Sapir-Whorf hypothesis — 非限制性定语从句（插入说明）\n   — that is now largely discredited — 限制性定语从句修饰 hypothesis\nB = language is the primary medium through which thoughts are expressed, shared, and refined in dialogue with others\n   — through which thoughts are expressed, shared, and refined — \"介词 + 关系代词\"引导定语从句修饰 the primary medium\n   — in dialogue with others — 方式状语（在与他人对话中）\n【解题要点】not because A but because B = \"不是因为A，而是因为B\"；through which = through the medium（通过这一媒介）；the Sapir-Whorf hypothesis = 语言决定论（\"我们说的语言决定我们的思维方式\"）。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2023_46",
    "year": 2023,
    "source": "考研英语一 · 翻译第46题",
    "questionType": "英译汉PartC",
    "text": "Without agreement about what constitutes well-being and a good society, the danger is that growth becomes an end in itself, pursued for its own sake regardless of the wider consequences — social, moral, or environmental.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 若没有关于何为幸福感和良好社会的共识，则存在这样一种危险：增长本身成为目的，为其自身而被追求，而不顾更广泛的后果——无论是社会的、道德的还是环境的。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Without agreement...引导条件状语（= If there is no agreement about...）；what constitutes well-being and a good society 为间接疑问句作 about 的宾语；the danger is that... 表语从句（that 引导）；an end in itself 固定短语（目的本身）；pursued for its own sake 为过去分词短语作后置定语或状语修饰 growth；regardless of 不顾；社会的、道德的、环境的 为破折号后三个后置形容词对前述 consequences 的补充说明。</span>",
    "translateLines": [
      "Without agreement about what constitutes well-being and a good society, the danger is that growth becomes an end in itself, pursued for its own sake regardless of the wider consequences — social, moral, or environmental."
    ],
    "glossary": {
      "constitutes": "v. 构成；组成（= make up，此处指\"何为……\"）",
      "well-being": "n. 幸福感；福祉；健康状态",
      "an end in itself": "目的本身；自我目的（固定短语，指不以任何其他事物为手段）",
      "for its own sake": "为了……本身；不以其他为目的（固定搭配）",
      "regardless of": "prep. 不顾；不管；无论（= irrespective of）"
    },
    "answer": "【结构拆解】\n条件状语 + 主句\nWithout agreement about what constitutes well-being and a good society — 介词短语作条件状语（= If there is no agreement...）\n   ① what constitutes well-being and a good society — 间接疑问句作 about 的宾语\n主句：the danger is that growth becomes an end in itself, pursued for its own sake regardless of the wider consequences\n   ② the danger is that... — 表语从句（= 危险在于……）\n   ③ growth becomes an end in itself — 从句主干\n   ④ pursued for its own sake — 过去分词短语作伴随状语（修饰 growth，= being pursued merely for its own sake）\n   ⑤ regardless of the wider consequences — 介词短语作方式/让步状语\n   ⑥ — social, moral, or environmental — 破折号后三个形容词作 consequences 的后置定语（同位说明）\n【解题要点】an end in itself = a goal that exists for its own sake（目的本身）；regardless of = no matter what（不管……）。",
    "tags": [
      "#真题长难句",
      "#表语从句"
    ]
  },
  {
    "id": "rd_t2023_47",
    "year": 2023,
    "source": "考研英语一 · 翻译第47题",
    "questionType": "英译汉PartC",
    "text": "In the corporate world, one of the most frequently observed phenomena is that a company whose products and business practices were well regarded by consumers can find its reputation damaged almost overnight by decisions that are perceived as ethically questionable.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 在企业界，最常见的现象之一是：一家产品和商业行为一向受到消费者好评的公司，可能因为被认为在道德上存疑的决策，其声誉几乎在一夜之间就遭受损害。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> one of the most frequently observed phenomena 为主语；is that... 为表语从句；whose products and business practices were well regarded 为定语从句修饰 a company（whose 为所有格关系代词）；can find its reputation damaged 中 find sth. done 为\"发现某物处于某种状态\"（feel/find + 宾语 + 过去分词）；that are perceived as ethically questionable 为定语从句修饰 decisions。</span>",
    "translateLines": [
      "In the corporate world, one of the most frequently observed phenomena is that a company whose products and business practices were well regarded by consumers can find its reputation damaged almost overnight by decisions that are perceived as ethically questionable."
    ],
    "glossary": {
      "corporate world": "企业界；商界（corporate = 公司的；企业的）",
      "phenomena": "n. 现象（phenomenon 的复数）",
      "well regarded": "受到好评；备受赞誉（= highly thought of）",
      "find its reputation damaged": "发现其声誉受损（find + 宾语 + 过去分词，复合宾语结构）",
      "perceived as": "被认为是；被视为（perceive = 认为；感知）",
      "ethically questionable": "在道德上存疑的；道德层面有问题的"
    },
    "answer": "【结构拆解】\n主干：one of the most frequently observed phenomena is that [表语从句]\n表语从句主干：a company can find its reputation damaged...by decisions\n① whose products and business practices were well regarded by consumers — 定语从句修饰 a company（whose = 其……）\n② find its reputation damaged — find + 宾语(its reputation) + 过去分词(damaged)，复合宾语\n③ almost overnight — 时间状语（几乎在一夜之间）\n④ by decisions that are perceived as ethically questionable — 介词短语作状语，by = \"因为……；由于……\"\n⑤ that are perceived as ethically questionable — 定语从句修饰 decisions\n【解题要点】find sth. done = discover that sth. is done（发现某物处于某种状态）；be perceived as = be regarded as（被视为……）；almost overnight 喻指\"极为迅速地\"。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2023_48",
    "year": 2023,
    "source": "考研英语一 · 翻译第48题",
    "questionType": "英译汉PartC",
    "text": "From a historical perspective, most of the significant improvements in human well-being — from the elimination of smallpox to the building of global communication networks — have depended on the international diffusion of knowledge and technology rather than on any individual nation's exclusive innovation.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 从历史视角来看，人类福祉方面的大多数重大改进——从天花的消除到全球通信网络的建立——依赖的是知识与技术的国际传播，而非任何单个国家的独家创新。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> From a historical perspective 介词短语作状语；most of the significant improvements in human well-being 作主语；破折号之间为举例插入语（from...to...）；have depended on 现在完成时（强调持续影响）；rather than 连接两个对等成分表对比（knowledge and technology ↔ exclusive innovation）。</span>",
    "translateLines": [
      "From a historical perspective, most of the significant improvements in human well-being — from the elimination of smallpox to the building of global communication networks — have depended on the international diffusion of knowledge and technology rather than on any individual nation's exclusive innovation."
    ],
    "glossary": {
      "perspective": "n. 视角；观点；角度（from a...perspective = 从……角度来看）",
      "elimination": "n. 消除；消灭（eliminate 的名词形式）",
      "smallpox": "n. 天花（一种烈性传染病，已于1980年被消灭）",
      "diffusion": "n. 传播；扩散；蔓延（= spread）",
      "exclusive": "adj. 独家的；专有的；排他的",
      "rather than": "而非；而不是（对比连接词）"
    },
    "answer": "【结构拆解】\n主干：most of the significant improvements in human well-being have depended on [A] rather than on [B]\n① From a historical perspective — 状语（从历史角度而言）\n② most of the significant improvements in human well-being — 主语（较长）\n③ — from the elimination of smallpox to the building of global communication networks — 破折号插入语，举例说明\"重大改进\"的范围\n④ have depended on the international diffusion of knowledge and technology — 谓语 + A（所依赖的主要因素）\n⑤ rather than on any individual nation's exclusive innovation — B（对比的否定部分）\n【解题要点】rather than 连接并列成分：depended on [A] rather than on [B]（依赖A而非B）；from...to... = \"从……到……\"，表范围；diffusion 在此为\"传播/扩散\"（不是\"confusion\"）。",
    "tags": [
      "#真题长难句",
      "#状语从句"
    ]
  },
  {
    "id": "rd_t2023_49",
    "year": 2023,
    "source": "考研英语一 · 翻译第49题",
    "questionType": "英译汉PartC",
    "text": "The distinction between natural and social sciences, which has long dominated academic discourse, may be less significant than we suppose, for all sciences depend on the construction of theoretical models, and the models of the social sciences, like those of natural science, must ultimately be tested against empirical evidence.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 长期主导学术话语的自然科学与社会科学之间的区分，其重要性可能不及我们所设想的那般——因为所有科学都依赖于理论模型的构建，而社会科学的模型与自然科学的模型一样，最终都必须经受经验证据的检验。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> The distinction between...which... 中，which 引导非限制性定语从句修饰 distinction（which has long dominated academic discourse）；may be less significant than we suppose 含有比较结构（less...than...）；for 引导原因状语从句（for = because，较正式）；like those of natural science 为插入语（those = the models）；must ultimately be tested against 被动语态，against 作\"与……相照证/核对\"讲。</span>",
    "translateLines": [
      "The distinction between natural and social sciences, which has long dominated academic discourse, may be less significant than we suppose, for all sciences depend on the construction of theoretical models, and the models of the social sciences, like those of natural science, must ultimately be tested against empirical evidence."
    ],
    "glossary": {
      "distinction": "n. 区分；区别；差异（make a distinction between = 区分……）",
      "dominated": "v. 主导；支配；统治（dominate 的过去分词）",
      "academic discourse": "学术话语；学术论述",
      "theoretical models": "理论模型",
      "tested against": "以……为标准检验；与……相对照",
      "empirical evidence": "经验证据；实证证据（empirical = 基于观察/实验的）"
    },
    "answer": "【结构拆解】\n主干：The distinction...may be less significant than we suppose\n① which has long dominated academic discourse — 非限制性定语从句，修饰 The distinction\n② less significant than we suppose — 比较结构（suppose 后省略了 it is significant）\nfor 原因从句（for = because）：all sciences depend on the construction of theoretical models, and the models of the social sciences must be tested against empirical evidence\n③ like those of natural science — 插入性比较状语（those = the models，自然科学的模型）\n④ must ultimately be tested against empirical evidence — 被动语态（tested against = 以……为标准检验）\n【解题要点】for 作\"因为\"（causal conjunction）时，引导并列分句而非状语从句（语气较 because 正式）；tested against = evaluated by comparison with（与……相对照、核实）；less...than... 比较结构意为\"比……更不（不如）\"。",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "rd_t2023_50",
    "year": 2023,
    "source": "考研英语一 · 翻译第50题",
    "questionType": "英译汉PartC",
    "text": "Rather than asking what makes some people more creative than others, we should ask what kind of social environments and institutional arrangements are likely to nurture creativity in general, since the evidence suggests that creativity is less a gift than a habit of mind that can be cultivated by the right conditions.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 与其追问是什么让某些人比其他人更具创造力，不如追问哪类社会环境和制度安排更有可能普遍培育创造力——因为现有证据表明，创造力与其说是一种天赋，不如说是一种可以在适当条件下得以培养的思维习惯。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Rather than 引导对比（Rather than doing A, we should do B）；what makes some people more creative than others 为间接疑问句作 asking 的宾语；what kind of...are likely to nurture 为间接疑问句作第二个 ask 的宾语；since 引导原因状语从句；less a gift than a habit of mind 为比较结构（less...than... = \"与其说……不如说……\"）；that can be cultivated by the right conditions 为定语从句修饰 a habit of mind。</span>",
    "translateLines": [
      "Rather than asking what makes some people more creative than others, we should ask what kind of social environments and institutional arrangements are likely to nurture creativity in general, since the evidence suggests that creativity is less a gift than a habit of mind that can be cultivated by the right conditions."
    ],
    "glossary": {
      "rather than": "与其……不如；而不是（表对比选择）",
      "institutional arrangements": "制度安排；体制安排（institutional = 制度上的）",
      "nurture": "v. 培育；培养；滋养（= foster）",
      "in general": "总体上；普遍地；一般而言",
      "less...than...": "与其说……不如说……（程度上的对比，非通常的\"少于\"义）",
      "cultivated": "v./adj. 培养的；陶冶的（cultivate = 培养；种植）"
    },
    "answer": "【结构拆解】\n对比结构：Rather than doing [A], we should do [B]\nA = asking what makes some people more creative than others\n   ① what makes some people more creative than others — 间接疑问句作 asking 的宾语\nB = ask what kind of social environments and institutional arrangements are likely to nurture creativity in general\n   ② what kind of...are likely to nurture creativity in general — 间接疑问句作 ask 的宾语\nsince 原因从句：the evidence suggests that creativity is less a gift than a habit of mind\n   ③ that creativity is less a gift than a habit of mind — that 从句作 suggests 的宾语\n   ④ less a gift than a habit of mind — 比较结构（less...than... = 与其说……不如说……）\n   ⑤ that can be cultivated by the right conditions — 定语从句修饰 a habit of mind\n【解题要点】less A than B 意为\"与其说是A，不如说是B\"（比较级降低A，抬高B）；Rather than doing A, we do B = Instead of doing A, we do B（对比行动）；nurture ≈ foster ≈ cultivate（培育，可互换）。",
    "tags": [
      "#真题长难句",
      "#比较结构"
    ]
  },
  {
    "id": "v320",
    "word": "2005年翻译-46题",
    "phonetic": "",
    "meaning": "电视是创造和传递这些情感的媒介之一——也许从未像欧洲近期事件那样，它如此大地发挥了连接不同民族和国家的作用。\n\n【核心语法】by which 为介词 + 关系代词引导定语从句修饰 means；破折号后 never before has it served 为否定词前置引起的部分倒装；as in the recent events in Europe 为比较状语。",
    "example": "Television is one of the means by which these feelings are created and conveyed -- and perhaps never before has it served so much to connect different peoples and nations as in the recent events in Europe.",
    "tags": [
      "#真题长难句",
      "#倒装句"
    ]
  },
  {
    "id": "v321",
    "word": "2005年翻译-47题",
    "phonetic": "",
    "meaning": "在欧洲，与其他地方一样，多媒体集团越来越成功：这些集团将电视、广播、报纸、杂志以及相互关联运作的出版社整合在一起。\n\n【核心语法】冒号后的 groups which bring together... 是对主句 multi-media groups 的同位说明（同位语）；as elsewhere 为省略结构（= as is the case elsewhere）；that work in relation to one another 为定语从句修饰 publishing houses。",
    "example": "In Europe, as elsewhere, multi-media groups have been increasingly successful: groups which bring together television, radio, newspapers, magazines and publishing houses that work in relation to one another.",
    "tags": [
      "#真题长难句",
      "#同位语"
    ]
  },
  {
    "id": "v322",
    "word": "2005年翻译-48题",
    "phonetic": "",
    "meaning": "仅此一点就说明，电视行业并非一个容易生存的世界，这一事实被以下统计数据所印证：在八十家欧洲电视网中，不少于50%的电视台在1989年出现了亏损。\n\n【核心语法】demonstrates that 引导宾语从句；a fact underlined by statistics 为同位语，补充说明前句；that show that 为双重 that 从句（第一个 that 为定语从句引导词修饰 statistics，第二个 that 引导 show 的宾语从句）；no less than = at least，不少于。",
    "example": "This alone demonstrates that the television business is not an easy world to survive in, a fact underlined by statistics that show that out of eighty European television networks no less than 50% took a loss in 1989.",
    "tags": [
      "#真题长难句",
      "#多重从句"
    ]
  },
  {
    "id": "v323",
    "word": "2005年翻译-49题",
    "phonetic": "",
    "meaning": "塑造一种尊重组成欧洲大陆这一连接性织物的不同文化和传统的\"欧洲认同感\"，绝非易事，需要做出战略性抉择。\n\n【核心语法】Creating...is 动名词短语作主语（较长，需找谓语 is）；that respects 定语从句修饰 identity；which go to make up 非限制性定语从句修饰 cultures and traditions；go to make up = contribute to making up，\"构成；组成\"。",
    "example": "Creating a \"European identity\" that respects the different cultures and traditions which go to make up the connecting fabric of the Old Continent is no easy task and demands a strategic choice.",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "v324",
    "word": "2005年翻译-50题",
    "phonetic": "",
    "meaning": "在应对如此规模的挑战时，毫不夸张地说，欧洲电视背后的指导原则必须是\"多元中的统一\"。\n\n【核心语法】it is no exaggeration to say that 固定句式，\"毫不夸张地说……\"；其中 it 为形式主语，真正主语为 to say that 从句；In dealing with 介词短语作状语，dealing with 为动名词。",
    "example": "In dealing with a challenge on such a scale, it is no exaggeration to say that the guiding principle behind European television must be \"Unity in diversity.\"",
    "tags": [
      "#真题长难句",
      "#形式主语"
    ]
  },
  {
    "id": "v325",
    "word": "2006年翻译-46题",
    "phonetic": "",
    "meaning": "我将把他定义为这样一个人：他选择了以苏格拉底式的方式思考道德问题，并将其作为自己人生中首要的职责和乐趣。\n\n【核心语法】define ... as 固定搭配；who has elected ... the activity of thinking 为定语从句，其中宾语 the activity of thinking 被提到 as his primary duty... 之后（宾语后置，因宾语过长）；elected...as 表\"选定……作为\"。",
    "example": "I shall define him as an individual who has elected as his primary duty and pleasure in life the activity of thinking in Socratic way about moral problems.",
    "tags": [
      "#真题长难句",
      "#宾语后置"
    ]
  },
  {
    "id": "v326",
    "word": "2006年翻译-47题",
    "phonetic": "",
    "meaning": "他的职能类似于法官的职能，法官必须承担尽可能清楚地揭示引导其做出裁决的推理过程的义务。\n\n【核心语法】be analogous to 固定搭配\"类似于\"；that of a judge 中 that 代指前文 function（避免重复）；who must accept 非限制性定语从句；in as obvious a matter as possible 为方式状语（as...as possible 结构）；which led him 定语从句修饰 course of reasoning。",
    "example": "His function is analogous to that of a judge, who must accept the obligation of revealing in as obvious a matter as possible the course of reasoning which led him to his decision.",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "v327",
    "word": "2006年翻译-48题",
    "phonetic": "",
    "meaning": "我把他排除在外，因为尽管他的成就可能有助于解决道德问题，但他并未承担起探究这些问题除事实层面以外任何方面的任务。\n\n【核心语法】while 引导让步状语从句（= although）；be charged with 固定搭配\"承担……任务；被指控……\"；any but the factual aspects = any aspects except the factual ones，\"除事实方面以外的任何方面\"；not...any but... = only，结构特殊。",
    "example": "I have excluded him because, while his accomplishments may contribute to the solution of moral problems, he has not been charged with the task of approaching any but the factual aspects of those problems.",
    "tags": [
      "#真题长难句",
      "#让步状语从句"
    ]
  },
  {
    "id": "v328",
    "word": "2006年翻译-49题",
    "phonetic": "",
    "meaning": "但他的首要任务并不是思考支配其行为的道德准则，正如不能指望一个商人把精力投入到对商业行为规则的探讨中一样。\n\n【核心语法】not ... any more than 固定结构\"不……正如……不……\"（表类比否定）；which governs his activity 非限制性定语从句；be expected to dedicate ... to 固定搭配\"被期望把……献给/投入到\"。",
    "example": "But his primary task is not to think about the moral code, which governs his activity, any more than a businessman is expected to dedicate his energies to an exploration of rules of conduct in business.",
    "tags": [
      "#真题长难句",
      "#特殊否定句"
    ]
  },
  {
    "id": "v329",
    "word": "2006年翻译-50题",
    "phonetic": "",
    "meaning": "他们也许教得非常好，薪酬也绰绰有余，但他们中的大多数人几乎或根本不对涉及道德判断的人类问题作独立的思考。\n\n【核心语法】more than earn their salaries 中 more than 修饰动词，表\"不止……；绰绰有余\"；make little or no reflections on = hardly reflect on，\"几乎不/根本不思考\"；which involve 定语从句修饰 human problems。",
    "example": "They may teach very well and more than earn their salaries, but most of them make little or no independent reflections on human problems which involve moral judgment.",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "v330",
    "word": "2007年翻译-46题",
    "phonetic": "",
    "meaning": "传统上，在这类机构中，法律知识一直被视为律师的专属领域，而非受过良好教育的人必备的知识素养的一部分。\n\n【核心语法】be viewed as 固定搭配\"被视为\"；rather than 表对比\"而非\"；such institutions 中 such 作形容词（此类机构，指前文提及的法学院等）；the special preserve of lawyers 名词短语，preserve 此处作名词\"专属领域\"。",
    "example": "Traditionally, legal learning has been viewed in such institutions as the special preserve of lawyers, rather than a necessary part of the intellectual equipment of an educated person.",
    "tags": [
      "#真题长难句",
      "#对比结构"
    ]
  },
  {
    "id": "v331",
    "word": "2007年翻译-47题",
    "phonetic": "",
    "meaning": "另一方面，它以一种与记者每天在报道和评论新闻时所构建的联系相类似的方式，将这些概念与日常现实联系起来。\n\n【核心语法】in a manner which is parallel to 定语从句修饰 manner；the links journalists forge 中 journalists forge 为定语从句（省略 that/which）修饰 links；as they cover and comment on the news 时间/方式状语从句；parallel to = similar to，\"与……类似/平行\"。",
    "example": "On the other hand, it links these concepts to everyday realities in a manner which is parallel to the links journalists forge on a daily basis as they cover and comment on the news.",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "v332",
    "word": "2007年翻译-48题",
    "phonetic": "",
    "meaning": "但是，认为记者必须比普通公民更深刻地理解法律这一观点，建立在对新闻媒体既定惯例和特殊责任的理解之上。\n\n【核心语法】the idea that 同位语从句（that 不作成分，解释 idea 的内容）；rests on = depends on / is based on，\"建立在……基础上\"；established conventions 意为\"已确立的惯例\"；profoundly 修饰 understand，作方式状语。",
    "example": "But the idea that the journalist must understand the law more profoundly than an ordinary citizen rests on an understanding of the established conventions and special responsibilities of the news media.",
    "tags": [
      "#真题长难句",
      "#同位语从句"
    ]
  },
  {
    "id": "v333",
    "word": "2007年翻译-49题",
    "phonetic": "",
    "meaning": "事实上，很难想象那些对加拿大宪法基本特征没有清晰把握的记者，如何能在政治新闻报道上胜任工作。\n\n【核心语法】it is difficult to see 形式主语句型，真正主语为后接不定式；how journalists ... can do a competent job 为间接疑问句（宾语从句）作 see 的宾语；who do not have ... 定语从句修饰 journalists；do a competent job on = 胜任……工作。",
    "example": "In fact, it is difficult to see how journalists who do not have a clear grasp of the basic features of the Canadian Constitution can do a competent job on political stories.",
    "tags": [
      "#真题长难句",
      "#形式主语"
    ]
  },
  {
    "id": "v334",
    "word": "2007年翻译-50题",
    "phonetic": "",
    "meaning": "尽管律师的评论和反应可能会充实报道，但记者最好还是依靠自己对重要性的判断，并自行做出裁量。\n\n【核心语法】while 引导让步状语从句（= although）；it is preferable for sb. to do 固定句型，\"对某人而言最好做……\"，其中 it 为形式主语，for journalists 引出逻辑主语，to rely on... and make... 为真正主语（两个并列不定式）。",
    "example": "While comment and reaction from lawyers may enhance stories, it is preferable for journalists to rely on their own notions of significance and make their own judgments.",
    "tags": [
      "#真题长难句",
      "#形式主语"
    ]
  },
  {
    "id": "v335",
    "word": "2008年翻译-46题",
    "phonetic": "",
    "meaning": "他相信，正是这一困难可能具有一种补偿性的优势，迫使他对每个句子进行长时间、专注地思考，从而使他能够发现推理和自身观察中的错误。\n\n【核心语法】believes that 宾语从句；the compensating advantage of forcing him to think 中 forcing 动名词作 of 的宾语，并带宾语补足语结构（force sb. to do）；thus enabling 为结果状语（thus + 现在分词）；and 并列 forcing 与 enabling 两个动名词。",
    "example": "He believes that this very difficulty may have had the compensating advantage of forcing him to think long and intently about every sentence, and thus enabling him to detect errors in reasoning and in his own observations.",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "v336",
    "word": "2008年翻译-47题",
    "phonetic": "",
    "meaning": "他还断言，自己跟随漫长而纯粹抽象的思维脉络的能力非常有限，正是因为这个原因，他确信自己绝不可能在数学上取得成功。\n\n【核心语法】for which reason 为介词 + 关系代词引导的非限制性定语从句（= and for this reason），作原因状语；a train of thought 固定短语\"一系列思路/思维脉络\"；feel certain that 表\"确信……\"；never could have succeeded 为情态完成时的否定形式。",
    "example": "He asserted, also, that his power to follow a long and purely abstract train of thought was very limited, for which reason he felt certain that he never could have succeeded with mathematics.",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "v337",
    "word": "2008年翻译-48题",
    "phonetic": "",
    "meaning": "另一方面，他不接受他的一些批评者提出的那种有据可依的指责——尽管他是一个出色的观察者，但他缺乏推理能力。\n\n【核心语法】accept...as well founded 中宾语 the charge 被后置（宾语后置，因宾语太长）；正常语序应为 accept the charge...as well founded；made by some of his critics 过去分词作后置定语；that 引导同位语从句说明 charge 的内容；while 作让步连词（= although）。",
    "example": "On the other hand, he did not accept as well founded the charge made by some of his critics that, while he was a good observer, he had no power of reasoning.",
    "tags": [
      "#真题长难句",
      "#宾语后置"
    ]
  },
  {
    "id": "v338",
    "word": "2008年翻译-49题",
    "phonetic": "",
    "meaning": "他谦虚地补充说，也许他比普通人更善于注意那些容易被忽视的事物，并仔细观察它们。\n\n【核心语法】adds that 宾语从句；superior to 固定搭配\"优于；强于\"；the common run of men = ordinary people，\"普通人\"（固定表达）；in noticing...and in observing 两个并列介词短语作方式状语；which easily escape attention 定语从句修饰 things。",
    "example": "He adds humbly that perhaps he was \"superior to the common run of men in noticing things which easily escape attention, and in observing them carefully.\"",
    "tags": [
      "#真题长难句",
      "#宾语从句"
    ]
  },
  {
    "id": "v339",
    "word": "2008年翻译-50题",
    "phonetic": "",
    "meaning": "达尔文确信，丧失这些兴趣爱好不仅是一种幸福的丧失，还可能有损智力，更大可能是有损道德品质。\n\n【核心语法】be convinced that 固定搭配\"确信……\"；not only...but（also）...关联并列，连接两个表语成分；injurious to 固定搭配\"有害于；有损于\"；and more probably to the moral character 为省略句，补全为 and might more probably be injurious to the moral character。",
    "example": "Darwin was convinced that the loss of these tastes was not only a loss of happiness, but might possibly be injurious to the intellect, and more probably to the moral character.",
    "tags": [
      "#真题长难句",
      "#省略句"
    ]
  },
  {
    "id": "v340",
    "word": "2009年翻译-46题",
    "phonetic": "",
    "meaning": "可以说，任何社会机构的价值标准在于其扩大和改善经验的效果，但这种效果并非其最初动机的一部分。\n\n【核心语法】It may be said that 为形式主语句型，it = 形式主语，that 引导真正主语（宾语从句）；the measure of the worth 为名词短语作主语；in enlarging and improving experience 动名词并列作介词宾语；but 转折连接第二个独立分句。",
    "example": "It may be said that the measure of the worth of any social institution is its effect in enlarging and improving experience, but this effect is not a part of its original motive.",
    "tags": [
      "#真题长难句",
      "#形式主语"
    ]
  },
  {
    "id": "v341",
    "word": "2009年翻译-47题",
    "phonetic": "",
    "meaning": "这一机构的副产品只是逐渐地被注意到，而这种效果被视为该机构运作中的指导性因素就更是缓慢了。\n\n【核心语法】Only gradually 置于句首引发部分倒装（was...noted）；两个并列的倒装句由 and 连接；only more gradually still 表\"更慢地\"（still 强调比较级）；be considered as 固定搭配\"被视为；被认为是\"。",
    "example": "Only gradually was the by-product of the institution noted, and only more gradually still was this effect considered as a directive factor in the conduct of the institution.",
    "tags": [
      "#真题长难句",
      "#倒装句"
    ]
  },
  {
    "id": "v342",
    "word": "2009年翻译-48题",
    "phonetic": "",
    "meaning": "虽然在与儿童的接触中，我们容易忽视自己的行为对他们性情的影响，但这种忽视并不像对待成人那样容易。\n\n【核心语法】While 引导让步状语从句；从句中 it is easy to ignore...the effect 为形式主语结构，真正主语为不定式（to ignore the effect），宾语 the effect 因被修饰语拉长而后置；it is not so easy as in dealing with adults 为主句，省略了比较内容（= it is not so easy to ignore this effect as it is in dealing with adults）。",
    "example": "While it is easy to ignore in our contact with them the effect of our acts upon their disposition, it is not so easy as in dealing with adults.",
    "tags": [
      "#真题长难句",
      "#让步状语从句"
    ]
  },
  {
    "id": "v343",
    "word": "2009年翻译-49题",
    "phonetic": "",
    "meaning": "由于我们与他们打交道的主要任务是使他们能够参与共同的生活，我们不得不考虑我们是否正在培养将保证他们获得这种能力的各种力量。\n\n【核心语法】Since 引导原因状语从句；enable them to share 固定结构（enable sb. to do）；cannot help doing 固定搭配\"不得不做；禁不住做\"；whether or not 引导宾语从句；which will secure 定语从句修饰 powers。",
    "example": "Since our chief business with them is to enable them to share in a common life, we cannot help considering whether or not we are forming the powers which will secure this ability.",
    "tags": [
      "#真题长难句",
      "#宾语从句"
    ]
  },
  {
    "id": "v344",
    "word": "2009年翻译-50题",
    "phonetic": "",
    "meaning": "于是我们被引导着在我们迄今所考察的广泛教育进程中，区分出一种更为正式的教育形式——即直接的讲授或学校教育。\n\n【核心语法】be led to do 固定结构\"被引导做……；被带领做……\"；distinguish...within...为宾语后置（宾语 a more formal kind 因修饰成分拉长而后置至状语后）；which we have been so far considering 定语从句修饰 process；破折号后 that of direct tuition 中 that = that kind，作同位语。",
    "example": "We are thus led to distinguish, within the broad educational process which we have been so far considering, a more formal kind of education -- that of direct tuition or schooling.",
    "tags": [
      "#真题长难句",
      "#宾语后置"
    ]
  },
  {
    "id": "v345",
    "word": "2010年翻译-46题",
    "phonetic": "",
    "meaning": "科学家们急忙用一些明显站不住脚的证据来救场，大意是说如果鸟类不加以控制，昆虫就会将我们消灭；这些证据必须具有经济上的意义才能被认为有效。\n\n【核心语法】jumped to the rescue 固定表达\"急忙救场；仓促援救\"；to the effect that 固定搭配\"大意是……；意思是说……\"（引导同位语从句说明 evidence 的内容）；in order to be valid 目的状语。",
    "example": "Scientists jumped to the rescue with some distinctly shaky evidence to the effect that insects would eat us up if birds failed to control them; the evidence had to be economic in order to be valid.",
    "tags": [
      "#真题长难句",
      "#同位语从句"
    ]
  },
  {
    "id": "v346",
    "word": "2010年翻译-47题",
    "phonetic": "",
    "meaning": "但我们至少已接近于承认：鸟类应当继续存在，这是一种内在的权利，无论对我们是否有经济上的益处。\n\n【核心语法】drawn near the point of doing 固定表达\"接近于做……\"；admitting that 动名词后接宾语从句；as a matter of intrinsic right 介词短语作方式状语；regardless of 固定搭配\"不管；无论\"；the presence or absence of 固定结构\"……的有无\"。",
    "example": "But we have at least drawn near the point of admitting that birds should continue as a matter of intrinsic right, regardless of the presence or absence of economic advantage to us.",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "v347",
    "word": "2010年翻译-48题",
    "phonetic": "",
    "meaning": "曾经有一段时期，生物学家在某种程度上夸大了这些动物通过猎杀体弱者来维护猎物种群健康、或者它们仅捕食\"无价值\"物种的证据。\n\n【核心语法】Time was when 固定句型\"曾经有一段时期……\"（= There was a time when）；when 引导表语从句；two that 从句（that...or that...）并列作同位语从句，修饰 evidence；prey on 固定搭配\"捕食；掠食\"。",
    "example": "Time was when biologists somewhat overstated the evidence that these creatures preserve the health of game by killing the physically weak, or that they prey only on \"worthless\" species.",
    "tags": [
      "#真题长难句",
      "#表语从句"
    ]
  },
  {
    "id": "v348",
    "word": "2010年翻译-49题",
    "phonetic": "",
    "meaning": "在欧洲，由于林业在生态方面更为先进，非商业性树木种类被认定为原生森林群落的成员，应当在合理范围内照此加以保护。\n\n【核心语法】where 引导非限制性定语从句（先行词 Europe，但语义近于原因状语）；be recognized as 固定搭配\"被认定为\"；to be preserved as such 不定式作目的/结果状语，as such = as members（照此；如此）；within reason 固定短语\"在合理范围内\"。",
    "example": "In Europe, where forestry is ecologically more advanced, the non-commercial tree species are recognized as members of native forest community, to be preserved as such, within reason.",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "v349",
    "word": "2010年翻译-50题",
    "phonetic": "",
    "meaning": "它往往会忽视、进而最终消除土地群落中那些缺乏商业价值、但对其健康运转至关重要的许多因素。\n\n【核心语法】tend to do 固定搭配\"倾向于；往往会\"；to ignore and thus eventually to eliminate 两个并列不定式，宾语 many elements 后置（宾语后置）；that lack...but that are essential...两个并列关系从句修饰 elements；essential to 固定搭配\"对……至关重要\"。",
    "example": "It tends to ignore, and thus eventually to eliminate, many elements in the land community that lack commercial value, but that are essential to its healthy functioning.",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "v350",
    "word": "2011年翻译-46题",
    "phonetic": "",
    "meaning": "艾伦的贡献在于提出了一个我们都持有的假设——因为我们不是机器人，所以我们能够控制自己的思想——并揭示了这一假设的错误本质。\n\n【核心语法】主语从句/表语结构：was to take...and reveal 两个并列不定式作表语；an assumption we all share 中 we all share 为省略关系词的定语从句；破折号之间 that because...therefore control our thoughts 为同位语从句解释 assumption 的内容；because 引导原因状语从句在同位语从句内部嵌套。",
    "example": "Allen's contribution was to take an assumption we all share -- that because we are not robots we therefore control our thoughts -- and reveal its erroneous nature.",
    "tags": [
      "#真题长难句",
      "#同位语从句"
    ]
  },
  {
    "id": "v351",
    "word": "2011年翻译-47题",
    "phonetic": "",
    "meaning": "尽管我们可能仅凭意识思维就能维持一种控制的幻觉，但现实中我们不断地面对这样一个问题：\"为什么我无法让自己做这件事或实现那个目标？\"\n\n【核心语法】While 引导让步状语从句；sustain the illusion of control 固定搭配\"维持控制的幻觉\"；through the conscious mind alone 方式状语（alone 后置强调\"仅凭\"）；Why cannot I 为间接疑问句引号内的反问语气（否定疑问形式）。",
    "example": "While we may be able to sustain the illusion of control through the conscious mind alone, in reality we are continually faced with a question: \"Why cannot I make myself do this or achieve that?\"",
    "tags": [
      "#真题长难句",
      "#让步状语从句"
    ]
  },
  {
    "id": "v352",
    "word": "2011年翻译-48题",
    "phonetic": "",
    "meaning": "这似乎是对忽视有需要的人的一种辩解，也是对剥削的一种合理化，是对处于顶层者优越性以及处于底层者劣势的一种合理化。\n\n【核心语法】This seems a justification（省略了系动词 to be，= This seems to be a justification）；a justification for...and a rationalization of... 并列结构；后续两个 of 短语（of the superiority...and the inferiority...）均修饰 rationalization，形成递进并列。",
    "example": "This seems a justification for neglect of those in need, and a rationalization of exploitation, of the superiority of those at the top and the inferiority of those at the bottom.",
    "tags": [
      "#真题长难句",
      "#并列结构"
    ]
  },
  {
    "id": "v353",
    "word": "2011年翻译-49题",
    "phonetic": "",
    "meaning": "环境似乎是被设计来激发我们的最佳潜能的，而如果我们感觉受到了委屈，那么我们就不太可能开始有意识地努力去摆脱当前的处境。\n\n【核心语法】seem to be designed 不定式被动（seem + 不定式被动）；to bring out the best in us 目的状语；if 引导条件状语从句；be unlikely to do 固定结构\"不太可能做……\"；have been \"wronged\" 现在完成时被动，引号表示该词用法特殊。",
    "example": "Circumstances seem to be designed to bring out the best in us, and if we feel that we have been \"wronged\" then we are unlikely to begin a conscious effort to escape from our situation.",
    "tags": [
      "#真题长难句",
      "#条件状语从句"
    ]
  },
  {
    "id": "v354",
    "word": "2011年翻译-50题",
    "phonetic": "",
    "meaning": "好处在于，知道一切都取决于我们自身所蕴含的种种可能性；而在我们曾是各种局限性专家的地方，我们如今成为了可能之事的权威。\n\n【核心语法】The upside is the possibilities 表语结构；contained in knowing 过去分词短语修饰 possibilities；that everything is up to us 同位语从句修饰/解释 knowing 的内容；分号后 where before...now... 为对比结构（where = whereas，表对比）；what is possible 名词性从句作介词宾语。",
    "example": "The upside is the possibilities contained in knowing that everything is up to us; where before we were experts in the array of limitations, now we become authorities of what is possible.",
    "tags": [
      "#真题长难句",
      "#对比结构"
    ]
  },
  {
    "id": "v355",
    "word": "2012年翻译-46题",
    "phonetic": "",
    "meaning": "在物理学中，有一种方法将这种追求统一的冲动发挥到极致，力图寻找一个\"万物理论\"——即一个能生成我们所见一切的单一方程式。\n\n【核心语法】take...to its extreme 固定搭配\"将……发挥到极致\"；seeks a theory of everything 与 takes 并列谓语；破折号后 a single generative equation for all we see 为同位语，解释 a theory of everything；all we see = all that we see（省略关系词）。",
    "example": "In physics, one approach takes this impulse for unification to its extreme, and seeks a theory of everything -- a single generative equation for all we see.",
    "tags": [
      "#真题长难句",
      "#同位语"
    ]
  },
  {
    "id": "v356",
    "word": "2012年翻译-47题",
    "phonetic": "",
    "meaning": "在这里，达尔文主义似乎提供了理论依据——因为如果所有人类共享共同的起源，那么似乎有理由认为文化多样性也可以追溯到更有限制性的起点。\n\n【核心语法】for 作并列连词\"因为\"（= because，较正式）；if 引导条件从句；it seems reasonable to suppose that 形式主语结构，真正主语为不定式 to suppose that 从句；be traced to 固定搭配\"追溯到；归因于\"；constrained 意为\"受限制的；约束的\"。",
    "example": "Here, Darwinism seems to offer justification, for if all humans share common origins, it seems reasonable to suppose that cultural diversity could also be traced to more constrained beginnings.",
    "tags": [
      "#真题长难句",
      "#形式主语"
    ]
  },
  {
    "id": "v357",
    "word": "2012年翻译-48题",
    "phonetic": "",
    "meaning": "从共性中过滤出独特性，也许能使我们理解复杂的文化行为是如何产生的，以及从进化或认知角度来看是什么在引导它。\n\n【核心语法】To filter out...from... 不定式短语作主语（= Filtering out...）；what is unique 和 what is shared 均为名词性从句（what 从句）；enable us to understand 固定结构；how...arose 和 what guides it 两个并列间接疑问句（宾语从句）；in...terms 固定搭配\"在……方面；从……角度\"。",
    "example": "To filter out what is unique from what is shared might enable us to understand how complex cultural behavior arose and what guides it in evolutionary or cognitive terms.",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "v358",
    "word": "2012年翻译-49题",
    "phonetic": "",
    "meaning": "第二种方法由约书亚·格林伯格提出，对普遍性采取更具实证性的研究方式，识别许多语言所共有的特征（尤其是在词序方面），这些特征被认为代表着由认知限制所产生的偏向性。\n\n【核心语法】by Joshua Greenberg 插入语；identifying traits...为现在分词状语（方式/结果）；shared by many languages 过去分词短置定语修饰 traits；which are considered 非限制性定语从句，先行词为 traits；that result from 定语从句修饰 biases。",
    "example": "The second, by Joshua Greenberg, takes a more empirical approach to universality, identifying traits (particularly in word order) shared by many languages, which are considered to represent biases that result from cognitive constraints.",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "v359",
    "word": "2012年翻译-50题",
    "phonetic": "",
    "meaning": "乔姆斯基的语法理论应当呈现语言变化的模式，这些模式独立于语系树或其中所追踪的路径，而格林伯格的普遍性理论则预测特定类型的词序关系之间存在强烈的相互依赖性。\n\n【核心语法】that are independent of 定语从句修饰 patterns；be independent of 固定搭配\"独立于；不受……影响\"；whereas 引导对比状语从句（= while，表对比）；tracked through it 过去分词修饰 pathway；co-dependencies between 固定结构\"……之间的相互依赖\"。",
    "example": "Chomsky's grammar should show patterns of language change that are independent of the family tree or the pathway tracked through it, whereas Greenbergian universality predicts strong co-dependencies between particular types of word-order relations.",
    "tags": [
      "#真题长难句",
      "#对比结构"
    ]
  },
  {
    "id": "v360",
    "word": "2013年翻译-46题",
    "phonetic": "",
    "meaning": "然而当人们看到无家可归者所创造的花园的照片时，令人感触颇深的是：尽管风格各异，这些花园诉说着各种其他基本冲动，超越了装饰和创意表达的冲动。\n\n【核心语法】it strikes one that 固定句型\"令人感到……\"（形式主语 it，真正主语为 that 从句）；for all their diversity of styles 让步介词短语\"尽管风格多样\"（for all = despite）；that of decoration 中 that = that urge（代词指代避免重复）；beyond that of... 介词短语作状语\"超出……范围\"。",
    "example": "Yet when one looks at the photographs of the garden created by the homeless, it strikes one that, for all their diversity of styles, these gardens speak of various other fundamental urges, beyond that of decoration and creative expression.",
    "tags": [
      "#真题长难句",
      "#形式主语"
    ]
  },
  {
    "id": "v361",
    "word": "2013年翻译-47题",
    "phonetic": "",
    "meaning": "一处神圣的宁静之所，无论多么简陋，都是一种独特的人类需求，与庇护所截然不同——庇护所是一种独特的动物需求。\n\n【核心语法】however crude it may be 让步状语从句（however + adj + 主谓）；as opposed to 固定搭配\"与……相对/相反；而非\"；which is a distinctly animal need 非限制性定语从句修饰 shelter；distinctly 强调\"显著地；明确地\"。",
    "example": "A sacred place of peace, however crude it may be, is a distinctly human need, as opposed to shelter, which is a distinctly animal need.",
    "tags": [
      "#真题长难句",
      "#让步状语从句"
    ]
  },
  {
    "id": "v362",
    "word": "2013年翻译-48题",
    "phonetic": "",
    "meaning": "无家可归者的花园——实际上也是无家可归的花园——将形式引入了一个城市环境，而这种形式在那里要么从未存在过，要么无法被辨认为这种形式。\n\n【核心语法】which are in effect homeless gardens 非限制性定语从句（in effect = in reality，\"实际上\"）；introduce form into 固定结构\"将……引入\"；where 关系副词引导定语从句修饰 environment；either...or 并列两个谓语；discernible as such 中 as such = as form（作为这种形式）。",
    "example": "The gardens of the homeless, which are in effect homeless gardens, introduce form into an urban environment where it either didn't exist or was not discernible as such.",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "v363",
    "word": "2013年翻译-49题",
    "phonetic": "",
    "meaning": "我们中的大多数人都会陷入精神的沮丧之中，通常将其归咎于某种心理状况，直到某天我们发现自己置身于花园中，感到那种沮丧如魔法般消失。\n\n【核心语法】give into 此处作\"屈服于；陷入\"（= give in to）；which we usually blame on 定语从句（blame...on 固定搭配\"归咎于\"）；until 引导时间状语从句；find ourselves in a garden 感官动词结构（find + 宾语 + 宾补）；feel the expression vanish 感官动词结构（feel + 宾语 + 动词原形）；as if by magic 方式状语\"如同魔法般\"。",
    "example": "Most of us give into a demoralization of spirit which we usually blame on some psychological condition, until one day we find ourselves in a garden and feel the expression vanish as if by magic.",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "v364",
    "word": "2013年翻译-50题",
    "phonetic": "",
    "meaning": "正是这种对自然的隐性或显性的指涉，才完全证明了使用\"花园\"一词——尽管是在一种\"解放了的\"意义上——来描述这些人造构筑物的合理性。\n\n【核心语法】It is...that... 强调句，被强调成分为 this implicit or explicit reference to nature；justify the use of 固定搭配\"证明……的合理性\"；though in a \"liberated\" sense 让步插入语（省略了 though it is in a...）；to describe 不定式作目的状语。",
    "example": "It is this implicit or explicit reference to nature that fully justifies the use of the word garden, though in a \"liberated\" sense, to describe these synthetic constructions.",
    "tags": [
      "#真题长难句",
      "#强调句"
    ]
  },
  {
    "id": "v365",
    "word": "2014年翻译-46题",
    "phonetic": "",
    "meaning": "这也是为什么当我们试图用文字描述音乐时，我们所能做的只是表达我们对音乐的反应，而无法把握音乐本身。\n\n【核心语法】the reason why 引导表语从句（why 为关系副词）；when we try to describe music with words 时间状语从句插入 why 从句中；all we can do is（do）为强调结构（all + 定语从句 + is + 动词原形），表\"所能做的只是……\"；articulate...and not grasp 并列不定式（一肯一否）。",
    "example": "It is also the reason why, when we try to describe music with words, all we can do is articulate our reactions to it, and not grasp music itself.",
    "tags": [
      "#真题长难句",
      "#强调句"
    ]
  },
  {
    "id": "v366",
    "word": "2014年翻译-47题",
    "phonetic": "",
    "meaning": "据各方说法，他是一个思想自由的人，也是一个勇敢的人，而我认为勇气是理解其作品不可或缺的品质，更不用说演奏了。\n\n【核心语法】by all accounts 固定短语\"据各方说法；据说\"；find + 宾语 + 宾补（find courage an essential quality）；let alone 固定搭配\"更不用说；何况\"（连接并列成分，表递进否定）；for the understanding...of his works = for understanding his works。",
    "example": "By all accounts he was a freethinking person, and a courageous one, and I find courage an essential quality for the understanding, let alone the performance, of his works.",
    "tags": [
      "#真题长难句",
      "#SVOC结构"
    ]
  },
  {
    "id": "v367",
    "word": "2014年翻译-48题",
    "phonetic": "",
    "meaning": "贝多芬先将音量以极端的强度推进，然后突然以一段轻柔乐段紧随其后的这一习惯，在他之前的作曲家中极少被使用。\n\n【核心语法】主语为 Beethoven's habit of doing...and then doing（动名词并列作 of 的宾语）；was only rarely used 谓语（被动，only rarely 表\"极少\"）；follow it with 固定搭配\"以……紧接……\"；by composers before him 施动者介词短语。",
    "example": "Beethoven's habit of increasing the volume with an extreme intensity and then abruptly following it with a sudden soft passage was only rarely used by composers before him.",
    "tags": [
      "#真题长难句",
      "#被动语态"
    ]
  },
  {
    "id": "v368",
    "word": "2014年翻译-49题",
    "phonetic": "",
    "meaning": "尤其值得一提的是他对自由的看法，对他而言，自由与个人的权利和责任相关联：他倡导思想自由和个性表达的自由。\n\n【核心语法】Especially significant was his view of freedom 为倒装句（表语前置）——正常语序：His view of freedom was especially significant；which...was associated with 非限制性定语从句；for him 插入语；be associated with 固定搭配\"与……相关联\"；冒号后独立分句作进一步阐释。",
    "example": "Especially significant was his view of freedom, which, for him, was associated with the rights and responsibilities of the individual: he advocated freedom of thought and of personal expression.",
    "tags": [
      "#真题长难句",
      "#倒装句"
    ]
  },
  {
    "id": "v369",
    "word": "2014年翻译-50题",
    "phonetic": "",
    "meaning": "人们可以通过这样的说法来诠释贝多芬大量作品的主旨：苦难是不可避免的，但与之抗争的勇气使生命值得活下去。\n\n【核心语法】interpret...by saying that 固定结构\"通过说……来诠释……\"；suffering is inevitable 宾语从句（by saying 的内容）；render + 宾语 + 宾补 固定结构（= make）\"使……\"；worth living 中 living 为动名词，worth + doing 表\"值得被……\"（主动形式表被动含义）。",
    "example": "One could interpret much of the work of Beethoven by saying that suffering is inevitable, but the courage to fight it renders life worth living.",
    "tags": [
      "#真题长难句",
      "#SVOC结构"
    ]
  },
  {
    "id": "v370",
    "word": "2015年翻译-46题",
    "phonetic": "",
    "meaning": "这场运动，由强大而多样的动机所驱动，在荒野中建立了一个国家，并且就其本质而言，塑造了一片未知大陆的性格与命运。\n\n【核心语法】driven by powerful and diverse motivations 过去分词短语作插入性状语（原因/被动）；built...and shaped 并列谓语；out of a wilderness \"从荒野中；由荒野建成\"；by its nature 固定短语\"就其本质而言\"；uncharted 意为\"未经勘测的；未知的\"。",
    "example": "This movement, driven by powerful and diverse motivations, built a nation out of a wilderness and, by its nature, shaped the character and destiny of an uncharted continent.",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "v371",
    "word": "2015年翻译-47题",
    "phonetic": "",
    "meaning": "美国是两种主要力量的产物——欧洲移民带来的各种不同的思想、风俗和民族特性，以及新大陆的影响，而这种影响改变了这些特质。\n\n【核心语法】be the product of 固定搭配\"是……的产物\"；破折号后两个并列同位语（the immigration...and the impact...）解释 two principal forces；with their varied ideas 伴随状语；which modified these traits 定语从句修饰 a new country。",
    "example": "The United States is the product of two principal forces -- the immigration of European peoples with their varied ideas, customs, and national characteristics and the impact of a new country which modified these traits.",
    "tags": [
      "#真题长难句",
      "#同位语"
    ]
  },
  {
    "id": "v372",
    "word": "2015年翻译-48题",
    "phonetic": "",
    "meaning": "但是，美洲特有的地理条件的力量、各种不同民族群体之间的相互影响，以及在一片粗犷的新大陆上维持旧世界传统的极大困难，共同引发了重大变化。\n\n【核心语法】主语为三个并列名词短语（the force...，the interplay...，the sheer difficulty...）；谓语为 caused（三个并列主语共用单一谓语，注意复数主语 caused 无需加 s）；peculiar to 固定搭配\"……所特有的\"；the interplay...upon one another 固定表达\"相互影响/作用\"；sheer 强调\"完全的；纯粹的\"。",
    "example": "But the force of geographic conditions peculiar to America, the interplay of the varied national groups upon one another, and the sheer difficulty of maintaining old-world ways in a raw, new continent caused significant changes.",
    "tags": [
      "#真题长难句",
      "#并列结构"
    ]
  },
  {
    "id": "v373",
    "word": "2015年翻译-49题",
    "phonetic": "",
    "meaning": "第一批驶向如今美国所在领土的移民船队，在北美洲15至16世纪的探险活动结束一百多年之后才横渡了大西洋。\n\n【核心语法】bound for 固定搭配\"开往；驶向；前往\"（过去分词短语作后置定语）；which is now the United States 定语从句修饰 territory；crossed the Atlantic 谓语；more than a hundred years after 时间状语（after + 名词短语）。",
    "example": "The first shiploads of immigrants bound for the territory which is now the United States crossed the Atlantic more than a hundred years after the 15th-and-16th-century explorations of North America.",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "v374",
    "word": "2015年翻译-50题",
    "phonetic": "",
    "meaning": "处女林以其丰富多样的树木种类，是一座名副其实的宝库，从缅因州一路向南延伸至佐治亚州。\n\n【核心语法】virgin forest 固定短语\"原始森林；处女林\"；with its richness and variety of trees 伴随状语；veritable 强调\"名副其实的；真正的\"；which extended from...to 定语从句修饰 treasure-house；all the way down to 固定短语\"一路延伸到\"。",
    "example": "The virgin forest with its richness and variety of trees was a veritable treasure-house which extended from Maine all the way down to Georgia.",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "v375",
    "word": "2016年翻译-46题",
    "phonetic": "",
    "meaning": "我们不必学习如何保持心理健康；它与生俱来地内建于我们之中，就像我们的身体知道如何愈合伤口或修复断骨一样。\n\n【核心语法】how to be mentally healthy 不定式疑问结构作宾语；is built into us 固定搭配\"内建于……中；与……融为一体\"（被动）；in the same way that 固定结构\"以……同样的方式\"（that 引导方式从句）；how to heal...or mend... 并列不定式疑问结构。",
    "example": "We don't have to learn how to be mentally healthy; it is built into us in the same way that our bodies know how to heal a cut or mend a broken bone.",
    "tags": [
      "#真题长难句",
      "#状语从句"
    ]
  },
  {
    "id": "v376",
    "word": "2016年翻译-47题",
    "phonetic": "",
    "meaning": "我们的心理健康不会消失；就像被云层遮蔽的太阳，它可能暂时从视野中隐没，但它完全能够在瞬间得到恢复。\n\n【核心语法】doesn't go anywhere 固定说法\"哪儿也不去；不会消失\"；like the sun behind a cloud 比喻状语；be hidden from view 固定搭配\"从视野中消失；被遮住\"；be capable of doing 固定搭配\"能够做……\"；being restored 被动动名词（restore 的被动式）；in an instant 固定短语\"瞬间；立刻\"。",
    "example": "Our mental health doesn't go anywhere; like the sun behind a cloud, it can be temporarily hidden from view, but it is fully capable of being restored in an instant.",
    "tags": [
      "#真题长难句",
      "#被动语态"
    ]
  },
  {
    "id": "v377",
    "word": "2016年翻译-48题",
    "phonetic": "",
    "meaning": "心理健康使我们能够在他人遭受困扰时以同情心看待他们，在他人承受痛苦时以善意看待他们，无论他们是什么人都以无条件的爱看待他们。\n\n【核心语法】allow sb. to do 固定结构\"允许/使某人做某事\"；三个 with 介词短语作方式状语，分别配一个条件从句（if...if...no matter who...）；no matter who they are = whoever they are，让步从句。",
    "example": "Mental health allows us to view others with sympathy if they are having troubles, with kindness if they are in pain, and with unconditional love no matter who they are.",
    "tags": [
      "#真题长难句",
      "#并列结构"
    ]
  },
  {
    "id": "v378",
    "word": "2016年翻译-49题",
    "phonetic": "",
    "meaning": "尽管心理健康是我们生活的万能良药，但它也极其平常，正如你将会发现它一直引导着你度过所有艰难的抉择。\n\n【核心语法】Although 引导让步状语从句；cure-all 名词\"万灵药；万能之策\"；it is perfectly ordinary 主句；as you will see that 方式/原因从句（as = as is shown by the fact that）；direct sb. through 固定搭配\"引导某人度过\"。",
    "example": "Although mental health is the cure-all for living our lives, it is perfectly ordinary, as you will see that it has been there to direct you through all your difficult decisions.",
    "tags": [
      "#真题长难句",
      "#让步状语从句"
    ]
  },
  {
    "id": "v379",
    "word": "2016年翻译-50题",
    "phonetic": "",
    "meaning": "正如你将会逐渐认识到的，知道心理健康随时可得，以及知道去信任它，会使我们能够放慢脚步、活在当下并快乐地生活。\n\n【核心语法】As you will come to see 方式从句（as 引导，\"正如……\"）；两个并列动名词短语（knowing that...and knowing to trust it）作主语；allow us to do 固定结构；slow down to the moment 固定表达\"放慢脚步活在当下\"；注意 knowing that...and knowing to trust 并列主语时谓语用复数 allow。",
    "example": "As you will come to see, knowing that mental health is always available and knowing to trust it allow us to slow down to the moment and live life happily.",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "v380",
    "word": "2017年翻译-46题",
    "phonetic": "",
    "meaning": "但即便英语使用者的数量进一步扩大，也有迹象表明这门语言的全球主导地位可能在可预见的未来逐渐消退。\n\n【核心语法】even as 引导让步/时间并发从句（\"即便……的同时\"）；there are signs that 固定结构，that 引导同位语从句说明 signs 的内容；the global predominance of the language 名词短语\"语言的全球主导地位\"；within the foreseeable future 固定短语\"在可预见的未来\"；may fade 情态动词表推测。",
    "example": "But even as the number of English speakers expands further, there are signs that the global predominance of the language may fade within the foreseeable future.",
    "tags": [
      "#真题长难句",
      "#同位语从句"
    ]
  },
  {
    "id": "v381",
    "word": "2017年翻译-47题",
    "phonetic": "",
    "meaning": "因此，他的分析应当终结那些认为英语全球地位如此稳固以至于英国年轻一代不需要掌握额外语言能力的人的自满情绪。\n\n【核心语法】self-contentedness 名词\"自满；自我满足\"；among those who 定语从句修饰 those；believe that 宾语从句；so...that 结果状语从句嵌套在 believe 的宾语从句内；additional language capabilities 表\"额外的语言能力\"。",
    "example": "His analysis should therefore end any self-contentedness among those who may believe that the global position of English is so stable that the young generation of the United Kingdom do not need additional language capabilities.",
    "tags": [
      "#真题长难句",
      "#多重从句"
    ]
  },
  {
    "id": "v382",
    "word": "2017年翻译-48题",
    "phonetic": "",
    "meaning": "许多国家正在将英语引入小学课程，但英国学龄儿童和学生们却似乎并没有获得更多的鼓励去在其他语言上达到流利的水平。\n\n【核心语法】introduce...into 固定搭配\"将……引入\"；do not appear to be doing 固定结构\"似乎并没有在做……\"（appear + 不定式进行时）；gaining greater encouragement to achieve 动名词 + 不定式（encouragement to do = 做……的鼓励）；fluency in other languages \"在其他语言方面的流利程度\"。",
    "example": "Many countries are introducing English into the primary-school curriculum, but British schoolchildren and students do not appear to be gaining greater encouragement to achieve fluency in other languages.",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "v383",
    "word": "2017年翻译-49题",
    "phonetic": "",
    "meaning": "大卫·格拉多尔所识别出的这些变化，均对英国向他国人民提供英语教学的服务机构以及更广泛的教育商业领域提出了清晰而重大的挑战。\n\n【核心语法】identified by David Graddol 过去分词短语作后置定语修饰 changes；present challenges to 固定搭配\"向……提出挑战\"（present 此处为动词\"呈现/提出\"）；两个并列介词短语 to...and to... 作宾语；providers of...to... 结构\"向……提供……的机构\"。",
    "example": "The changes identified by David Graddol all present clear and major challenges to the UK's providers of English language teaching to people of other countries and to broader education business sectors.",
    "tags": [
      "#真题长难句",
      "#宾语后置"
    ]
  },
  {
    "id": "v384",
    "word": "2017年翻译-50题",
    "phonetic": "",
    "meaning": "这为所有致力于推广语言学习的机构提供了依据，而这些机构因此也在一个与过去截然不同的运营环境中寻求运作。\n\n【核心语法】give a basis to 固定搭配\"为……提供依据/基础\"；两个并列 which 定语从句修饰 organizations（which seek...and which...seek）；therefore 插入连接词；from that of the past 中 that = the operating environment（代词替代避免重复）；so different...from 比较结构。",
    "example": "It gives a basis to all organizations which seek to promote the learning of languages and which, therefore, seek to operate in a very different operating environment from that of the past.",
    "tags": [
      "#真题长难句",
      "#定语从句"
    ]
  },
  {
    "id": "v385",
    "word": "2018年翻译-46题",
    "phonetic": "",
    "meaning": "在他出生之时，欧洲正在目睹宗教戏剧的消逝，以及在古典悲剧和喜剧的激励下新形式的创造。\n\n【核心语法】by the date of his birth 时间介词短语\"在他出生之时\"；was witnessing 过去进行时\"正在目睹\"；the passing of...and the creation of... 两个并列动名词名词化短语作 witnessing 的宾语；under the incentive of 固定搭配\"在……的激励/推动下\"。",
    "example": "By the date of his birth, Europe was witnessing the passing of the religious drama, and the creation of new forms under the incentive of classical tragedy and comedy.",
    "tags": [
      "#真题长难句",
      "#并列结构"
    ]
  },
  {
    "id": "v386",
    "word": "2018年翻译-47题",
    "phonetic": "",
    "meaning": "凡是进过文法学校的男孩，不可能不知道戏剧是一种文学形式，它曾为希腊和罗马带来荣耀，并且仍有可能为英格兰带来荣誉。\n\n【核心语法】No boy...could be ignorant that 双重否定结构（No...could be ignorant = must know，\"没有人不知道\"）；who went to a grammar school 定语从句修饰 boy；be ignorant that 固定搭配\"不知道……\"；which gave...and might yet bring 并列定语从句修饰 literature；yet 副词\"仍然；还\"（表仍有可能）。",
    "example": "No boy who went to a grammar school could be ignorant that the drama was a form of literature which gave glory to Greece and Rome and might yet bring honor to England.",
    "tags": [
      "#真题长难句",
      "#特殊否定句"
    ]
  },
  {
    "id": "v387",
    "word": "2018年翻译-48题",
    "phonetic": "",
    "meaning": "但职业剧团在其固定剧院中蓬勃发展，而有文学抱负的大学人士也迅速将目光转向这些剧院，将其视为谋生的手段。\n\n【核心语法】be quick to do 固定结构\"迅速做……；急于做……\"；turn to...as doing 固定结构\"转向……，视之为……\"；as offering a means of livelihood 中 as 表\"作为；视为\"，offering 为动名词；a means of livelihood 固定短语\"谋生之道；维持生计的手段\"（means 单复数同形）。",
    "example": "But the professional companies prospered in their permanent theaters, and university men with literary ambitions were quick to turn to these theaters as offering a means of livelihood.",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "v388",
    "word": "2018年翻译-49题",
    "phonetic": "",
    "meaning": "本土文学戏剧已经被创造出来，它与公共剧院的联盟已经确立，其众多伟大传统中至少有一些已经开始形成。\n\n【核心语法】三个并列分句（had been created / its alliance...established / had been begun）：第二个分句 its alliance with the public playhouses established 为独立主格结构（名词 + 过去分词，无谓语动词），插入两个被动完成时分句之间；had been created / had been begun 均为过去完成时被动语态。",
    "example": "A native literary drama had been created, its alliance with the public playhouses established, and at least some of its great traditions had been begun.",
    "tags": [
      "#真题长难句",
      "#独立主格"
    ]
  },
  {
    "id": "v389",
    "word": "2018年翻译-50题",
    "phonetic": "",
    "meaning": "要意识到戏剧活动是多么繁荣，我们还必须记住：大量剧本已经失传，而且很可能没有任何一位知名作者的全部作品得以流传下来。\n\n【核心语法】To realize...we must remember 不定式作目的状语（\"为了认识到……\"）；how great was the dramatic activity 间接疑问句，注意倒装（how great + 倒装语序）；two that 从句（that hosts of plays...and that probably...）并列作 remember 的宾语；of note 固定短语\"著名的；值得注意的\"；whose entire work has survived 定语从句修饰 author。",
    "example": "To realize how great was the dramatic activity, we must remember further that hosts of plays have been lost, and that probably there is no author of note whose entire work has survived.",
    "tags": [
      "#真题长难句",
      "#宾语从句"
    ]
  },
  {
    "id": "v390",
    "word": "2019年翻译-46题",
    "phonetic": "",
    "meaning": "医学期刊中存在大量这类荒谬内容，一旦被广播公司和大众媒体采用，便会同时引发健康恐慌和短暂的饮食热潮。\n\n【核心语法】a great deal of 固定短语\"大量的\"；which...generates 非限制性定语从句，先行词为 nonsense；when taken up by 省略结构（= when it is taken up by，时间状语从句省略主语和 be 动词）；generates both...and... 关联并列（both...and...）；lay press 固定短语\"大众报刊；非专业媒体\"。",
    "example": "There is a great deal of this kind of nonsense in the medical journals which, when taken up by broadcasters and the lay press, generates both health scares and short-lived dietary enthusiasms.",
    "tags": [
      "#真题长难句",
      "#非限制性定语从句"
    ]
  },
  {
    "id": "v391",
    "word": "2019年翻译-47题",
    "phonetic": "",
    "meaning": "如今，任何申请科研职位的人都必须发表数量是仅仅10年前同等职位所要求的两倍的论文。\n\n【核心语法】applying for a research post 现在分词作后置定语修饰 anyone；has to have published 情态动词 + 完成时不定式\"必须已经发表\"；twice the number of papers 固定倍数结构\"……数量的两倍\"；that would have been required 虚拟语气定语从句修饰 papers（would have been = 虚拟条件，表假设）；only 10 years ago 强调时间近。",
    "example": "Nowadays anyone applying for a research post has to have published twice the number of papers that would have been required for the same post only 10 years ago.",
    "tags": [
      "#真题长难句",
      "#虚拟语气"
    ]
  },
  {
    "id": "v392",
    "word": "2019年翻译-48题",
    "phonetic": "",
    "meaning": "已有人尝试遏制这一趋势，例如，通过在对申请者论文的评估中纳入一定程度的质量考量，而不仅仅是数量的考量。\n\n【核心语法】Attempts have been made to do 固定结构\"已有人/已做出尝试去做……\"（被动表泛指主语）；curb this tendency 固定搭配\"遏制这一趋势\"；by trying to incorporate 介词短语表方式；as well as 固定结构\"以及；不仅……而且\"（连接 quality 和 quantity）；into the assessment of 介词短语表引入范围。",
    "example": "Attempts have been made to curb this tendency, for example, by trying to incorporate some measure of quality as well as quantity into the assessment of an applicant's papers.",
    "tags": [
      "#真题长难句",
      "#被动语态"
    ]
  },
  {
    "id": "v393",
    "word": "2019年翻译-49题",
    "phonetic": "",
    "meaning": "这本来是合理的，要不是由于科学家可以轻易安排在自己未来的出版物中引用自己，或者让同事为自己这样做以换取类似的回报这一事实。\n\n【核心语法】if it were not for 固定虚拟语气结构\"要不是……；如果没有……\"（= were it not for，虚拟条件句）；the fact that 同位语从句；arrange to cite themselves 固定搭配\"安排引用自己\"；get associates to do so 使役结构（get sb. to do）；in return for similar favours 固定短语\"以换取类似的回报\"。",
    "example": "This would be reasonable if it were not for the fact that scientists can easily arrange to cite themselves in their future publications, or get associates to do so for them in return for similar favours.",
    "tags": [
      "#真题长难句",
      "#虚拟语气"
    ]
  },
  {
    "id": "v394",
    "word": "2019年翻译-50题",
    "phonetic": "",
    "meaning": "如果我们真的认真对待确保我们的科学既有意义又可复现这一问题，我们就必须确保我们的机构鼓励这种科学。\n\n【核心语法】be serious about doing 固定搭配\"认真对待做……；对做……认真\"；ensuring that 动名词 + 宾语从句；both...and 关联并列\"既……又……\"；reproducible 意为\"可重现的；可复现的\"（科学研究的核心标准之一）；ensure that 宾语从句；that kind of science 指代前文所描述的科学研究方式。",
    "example": "If we are serious about ensuring that our science is both meaningful and reproducible, we must ensure that our institutions encourage that kind of science.",
    "tags": [
      "#真题长难句",
      "#条件状语从句"
    ]
  },
  {
    "id": "v395",
    "word": "2020年翻译-46题",
    "phonetic": "",
    "meaning": "随着教会的教义和思维方式被文艺复兴所遮蔽，中世纪与现代之间的鸿沟已被填合，通向新的、尚未探索的知识领域。\n\n【核心语法】With...being eclipsed 独立主格结构（with + 名词 + 现在分词被动：with the church's teachings being eclipsed）；the gap...had been bridged 过去完成时被动；leading to 现在分词作结果状语；unexplored intellectual territories 名词短语\"尚未探索的知识领域\"。",
    "example": "With the church's teachings and ways of thinking being eclipsed by the Renaissance, the gap between the medieval and modern periods had been bridged, leading to new and unexplored intellectual territories.",
    "tags": [
      "#真题长难句",
      "#独立主格"
    ]
  },
  {
    "id": "v396",
    "word": "2020年翻译-47题",
    "phonetic": "",
    "meaning": "在他们每一次重大发现之前，当时的许多思想家都坚持着更为古老的思维方式，其中包括地心说——即认为地球处于宇宙中心的观点。\n\n【核心语法】before each of their revelations 时间状语；had sustained 过去完成时\"曾经坚持\"；including the geocentric view 现在分词短语作插入状语（举例说明）；that the Earth was at the centre of our universe 同位语从句修饰 view；geocentric 意为\"地心说的；以地球为中心的\"。",
    "example": "Before each of their revelations, many thinkers at the time had sustained more ancient ways of thinking, including the geocentric view that the Earth was at the centre of our universe.",
    "tags": [
      "#真题长难句",
      "#同位语从句"
    ]
  },
  {
    "id": "v397",
    "word": "2020年翻译-48题",
    "phonetic": "",
    "meaning": "尽管教会试图压制这一新一代的逻辑学家和理性主义者，但关于宇宙如何运作的更多解释正以一种人们再也无法忽视的速度涌现出来。\n\n【核心语法】Despite...attempts to do 让步介词短语\"尽管……尝试做……\"；were being made 过去进行时被动\"正在被提出\"；for how the universe functioned 介词短语中嵌套间接疑问句（how 从句）；at a rate that 固定结构\"以……的速度\"，that 引导定语从句修饰 rate；could no longer ignore 双重否定\"再也无法忽视\"。",
    "example": "Despite attempts by the Church to suppress this new generation of logicians and rationalists, more explanations for how the universe functioned were being made at a rate that people could no longer ignore.",
    "tags": [
      "#真题长难句",
      "#让步状语从句"
    ]
  },
  {
    "id": "v398",
    "word": "2020年翻译-49题",
    "phonetic": "",
    "meaning": "随着许多人肩负起将理性思维和科学哲学融入世界的职责，文艺复兴宣告结束，一个新时代到来了。\n\n【核心语法】As 引导时间状语从句（\"随着……\"）；took on the duty of doing 固定搭配\"承担起做……的职责\"；integrate...into 固定搭配\"将……整合到/融入\"；it was time for 固定结构\"是……的时候了\"；the Renaissance was over \"文艺复兴结束了\"。",
    "example": "As many took on the duty of trying to integrate reasoning and scientific philosophies into the world, the Renaissance was over and it was time for a new era.",
    "tags": [
      "#真题长难句",
      "#状语从句"
    ]
  },
  {
    "id": "v399",
    "word": "2020年翻译-50题",
    "phonetic": "",
    "meaning": "这种寻求知识、理解我们已知信息的行动被拉丁短语\"Sapere aude\"（即\"敢于求知\"）所概括。\n\n【核心语法】Such actions to seek...and to understand 中两个并列不定式作后置定语修饰 actions；what information we already knew 间接疑问句（名词性从句）作 understand 的宾语；were captured by 被动语态\"被……所概括/捕捉\"；Sapere aude 为拉丁语引语，后接英译\"dare to know\"作同位说明。",
    "example": "Such actions to seek knowledge and to understand what information we already knew were captured by the Latin phrase \"Sapere aude\" or \"dare to know\".",
    "tags": [
      "#真题长难句",
      "#非谓语动词"
    ]
  },
  {
    "id": "mlk_w01",
    "word": "momentous",
    "phonetic": "/məˈmentəs/",
    "meaning": "形容词，\"重大的、关键的\"。高级替换词，可代替 important / significant，考研写作提分利器。",
    "example": "This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice.",
    "tags": [
      "#名篇词汇",
      "#形容词",
      "#MLK演讲"
    ]
  },
  {
    "id": "mlk_w02",
    "word": "manacle",
    "phonetic": "/ˈmænəkl/",
    "meaning": "名词，\"镣铐、手铐\"，引申为\"束缚、枷锁\"。可在作文中比喻思想或制度的桎梏。",
    "example": "One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination.",
    "tags": [
      "#名篇词汇",
      "#名词",
      "#MLK演讲"
    ]
  },
  {
    "id": "mlk_w03",
    "word": "promissory",
    "phonetic": "/ˈprɒmɪsəri/",
    "meaning": "形容词，\"允诺的、期票的\"。promissory note = 期票/空头支票，MLK 演讲中借此比喻国家承诺。",
    "example": "When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir.",
    "tags": [
      "#名篇词汇",
      "#形容词",
      "#MLK演讲"
    ]
  },
  {
    "id": "mlk_w04",
    "word": "default",
    "phonetic": "/dɪˈfɔːlt/",
    "meaning": "动词/名词，\"违约、拖欠、不履行义务\"。考研经济类文章极高频（债务违约、违反协议）。",
    "example": "It is obvious today that America has defaulted on this promissory note, insofar as her citizens of color are concerned.",
    "tags": [
      "#名篇词汇",
      "#动词",
      "#名词",
      "#MLK演讲",
      "#经济词汇"
    ]
  },
  {
    "id": "mlk_w05",
    "word": "languish",
    "phonetic": "/ˈlæŋɡwɪʃ/",
    "meaning": "动词，\"受煎熬、在困境中消沉、长期处于不利状态\"。形容人、行业、政策长期低迷的高级用词。",
    "example": "One hundred years later, the Negro is still languished in the corners of American society and finds himself an exile in his own land.",
    "tags": [
      "#名篇词汇",
      "#动词",
      "#MLK演讲"
    ]
  },
  {
    "id": "mlk_w06",
    "word": "inextricably",
    "phonetic": "/ɪnˈekstrɪkəbli/",
    "meaning": "副词，\"密不可分地、无法脱身地\"。经典搭配：A is inextricably bound to B（A 与 B 密不可分），考研大作文大杀器。",
    "example": "And they have come to realize that their freedom is inextricably bound to our freedom.",
    "tags": [
      "#名篇词汇",
      "#副词",
      "#MLK演讲"
    ]
  },
  {
    "id": "mlk_s01",
    "word": "MLK演讲-01",
    "phonetic": "",
    "meaning": "语法亮点：宏伟的排比与隐喻（时间状语从句 + 定语从句）\n\n【核心语法】时间状语从句 When the architects of our republic wrote... 引出主句，主句 they were signing a promissory note 用过去进行时，强调动作的庄重持续感。to which every American was to fall heir 是后置定语从句，修饰 promissory note；fall heir to 固定搭配，意为\"成为……的继承人\"。全句以\"建国者签期票\"为喻，将抽象的国家承诺具象化，气势恢宏，为考研作文极佳仿写范本。",
    "example": "When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir.",
    "tags": [
      "#名篇背诵",
      "#时间状语从句",
      "#定语从句",
      "#排比隐喻"
    ]
  },
  {
    "id": "mlk_s02",
    "word": "MLK演讲-02",
    "phonetic": "",
    "meaning": "语法亮点：极佳的明暗意象对比（时间状语从句）\n\n【核心语法】主句 will not pass 为将来时否定，搭配时间状语从句 until there is an invigorating autumn...，构成\"不会……直到……\"句型。sweltering summer（炎热苦闷的夏天）与 invigorating autumn（令人振奋的秋天）形成鲜明意象对比，以四季象征苦难与解放。仿写句型：The crisis of education will not pass until society commits to genuine reform.",
    "example": "This sweltering summer of the Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality.",
    "tags": [
      "#名篇背诵",
      "#时间状语从句",
      "#对比结构"
    ]
  },
  {
    "id": "mlk_s03",
    "word": "MLK演讲-03",
    "phonetic": "",
    "meaning": "极品写作句型：not by... but by...（不是因为……而是因为……）\n\n【核心语法】这句是全文最著名的金句之一！I have a dream 后接同位语从句 that my four little children will one day live...，从句内嵌定语从句 where they will not be judged...。结尾的 not by the color of their skin but by the content of their character 形成极整齐的对比并列，逻辑清晰，朗朗上口。考研仿写：I hope we live in a world where people are judged not by their background but by the quality of their work.",
    "example": "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    "tags": [
      "#名篇背诵",
      "#同位语从句",
      "#定语从句",
      "#not...but...对比"
    ]
  },
  {
    "id": "mlk_s04",
    "word": "MLK演讲-04",
    "phonetic": "",
    "meaning": "严密的逻辑从句：It is obvious that... insofar as...（显而易见……就……而言）\n\n【核心语法】典型的形式主语句型：It is obvious today that + 主语从句（America has defaulted on this promissory note）。insofar as ... is concerned 是固定搭配，意为\"就……而言\"，考研翻译高频考点，能准确切分出来即可拿满分。整句逻辑严密：先用形式主语点明结论（obvious），主语从句补充具体事实，最后 insofar as 精准限定范围，层次分明。",
    "example": "It is obvious today that America has defaulted on this promissory note, insofar as her citizens of color are concerned.",
    "tags": [
      "#名篇背诵",
      "#形式主语",
      "#主语从句",
      "#insofar_as"
    ]
  },
  {
    "id": "mlk_w07",
    "word": "invigorating",
    "phonetic": "/ɪnˈvɪɡəreɪtɪŋ/",
    "meaning": "形容词，\"令人振奋的、使充满活力的\"。与 sweltering（令人窒息的）形成强烈意象对比，是写作中表达\"充满生机\"的高级词汇。",
    "example": "This sweltering summer of the Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality.",
    "tags": [
      "#名篇词汇",
      "#形容词",
      "#MLK演讲"
    ]
  },
  {
    "id": "mlk_w08",
    "word": "degenerate",
    "phonetic": "/dɪˈdʒenəreɪt/",
    "meaning": "动词，\"恶化、堕落、退化\"。常见搭配：degenerate into（沦落为/恶化为），考研社会类议论文常用，如\"讨论退化为争吵\"。",
    "example": "We must not allow our creative protest to degenerate into physical violence.",
    "tags": [
      "#名篇词汇",
      "#动词",
      "#MLK演讲"
    ]
  },
  {
    "id": "mlk_w09",
    "word": "tranquility",
    "phonetic": "/træŋˈkwɪlɪti/",
    "meaning": "名词，\"宁静、平静、安宁\"。常与 rest 并列使用（neither rest nor tranquility），表达社会动荡与不安，也可用于描写自然或内心的平静。",
    "example": "And there will be neither rest nor tranquility in America until the Negro is granted his citizenship rights.",
    "tags": [
      "#名篇词汇",
      "#名词",
      "#MLK演讲"
    ]
  },
  {
    "id": "v400",
    "word": "inspire",
    "phonetic": "/ɪnˈspaɪər/",
    "meaning": "vt. ①鼓舞，激发 [同 encourage]；②给……以灵感。【助记】in(into)+spire(呼吸)→吸进灵气→给人灵感。派生：inspiring adj. 鼓舞人心的",
    "example": "The officer's courage inspired confidence of his soldiers.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v401",
    "word": "inspiration",
    "phonetic": "/ˌɪnspəˈreɪʃən/",
    "meaning": "n. ①灵感；②鼓舞人心的人或事物",
    "example": "These events provided the inspiration for his first novel.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v402",
    "word": "spark",
    "phonetic": "/spɑːk/",
    "meaning": "n. 火星，火花，闪光；vi. 闪烁，发出火花；vt. (~off) 触发，引起",
    "example": "Fear of nuclear war sparked angry demonstrations across the country.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v403",
    "word": "promote",
    "phonetic": "/prəˈməʊt/",
    "meaning": "vt. ①促进，增进；②提拔，晋升；③促销，推销。【助记】pro(forward)+mote(动)→向前推动→促进。派生：promotion n. 提升；促进；促销",
    "example": "The organization works to promote friendship between nations.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v404",
    "word": "reinforce",
    "phonetic": "/ˌriːɪnˈfɔːs/",
    "meaning": "vt. 加强，增援；加剧。【助记】re(again)+in(使)+force(力量)→反复施力→增强。派生：reinforcement n. 增援，加强；[pl.] 援军",
    "example": "Poverty and lack of education reinforce class divides in society.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v405",
    "word": "heighten",
    "phonetic": "/ˈhaɪtn/",
    "meaning": "v. ①(使)提高；②(使)加强，加剧。【助记】height(高度)+en(使)→使变高→提高/加强",
    "example": "He took advantage of every opportunity to heighten racial tensions.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v406",
    "word": "emphasize",
    "phonetic": "/ˈemfəsaɪz/",
    "meaning": "vt. 强调，着重。【助记】em(in)+pha(表示)+size→明白地表示。用法：后接名词、wh-从句或 that 从句",
    "example": "He emphasized the importance of careful driving.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v407",
    "word": "emphasis",
    "phonetic": "/ˈemfəsɪs/",
    "meaning": "n. 强调，重点。辨析：emphasis 指尽力突出的重要性；stress 常可互换，但侧重迫不及待地强调或坚持",
    "example": "They put emphasis on developing nuclear power.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v408",
    "word": "multiply",
    "phonetic": "/ˈmʌltɪplaɪ/",
    "meaning": "v. ①(使)增加；②繁殖；③乘，(使)相乘。【助记】multi(多)+ply(折叠)→许多东西重叠→增加",
    "example": "Spending on military equipment has multiplied in the last five years.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v409",
    "word": "triple",
    "phonetic": "/ˈtrɪpl/",
    "meaning": "adj. 三部分的，三方的；三倍的；v. (使)增至三倍",
    "example": "Black unemployment is triple the figure for white.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v410",
    "word": "accelerate",
    "phonetic": "/əkˈseləreɪt/",
    "meaning": "v. (使)加快，(使)增速。【助记】ac(to)+celer(迅速)+ate(使)→加快。辨析：日常用 speed up，科技文体用 accelerate",
    "example": "New technologies have accelerated the pace of economic change.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v411",
    "word": "advance",
    "phonetic": "/ədˈvɑːns/",
    "meaning": "n. ①进展，进步；②预付款；③价格增长。v. ①前进；②取得进展；③提出(建议/理论)；④价格上涨。a. 预先的。【短语】in advance 预先，事先",
    "example": "Many diverse views have been advanced on the origin of language.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v412",
    "word": "advanced",
    "phonetic": "/ədˈvɑːnst/",
    "meaning": "a. ①先进的；②高级的；③年老的",
    "example": "This increasingly high level of education is probably a necessary, but not a sufficient condition for the complex political systems required by advanced economic performance.",
    "tags": [
      "#核心词汇",
      "#真题例句"
    ]
  },
  {
    "id": "v413",
    "word": "prevail",
    "phonetic": "/prɪˈveɪl/",
    "meaning": "vi. ①流行，盛行；②(~over) 获胜，占优势；③(~on/upon) 说服。【助记】pre+vail(强大的)→占强势地位。派生：prevailing a. 流行的，普遍的",
    "example": "Justice has prevailed; the guilty man has been punished.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v414",
    "word": "prevalent",
    "phonetic": "/ˈprevələnt/",
    "meaning": "a. 普遍的，流行的。辨析：prevailing 指特定时间地点最盛行的（仅作定语）；prevalent 指普遍存在的（可作定语或表语）",
    "example": "The habit of travelling by aeroplane is becoming more prevalent.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v415",
    "word": "precede",
    "phonetic": "/prɪˈsiːd/",
    "meaning": "v. 在……之前，先于。【助记】pre(before)+cede(走)→走在前面→先于",
    "example": "A typhoon is usually preceded by heavy rain.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v416",
    "word": "preceding",
    "phonetic": "/prɪˈsiːdɪŋ/",
    "meaning": "a. 前面的，前述的。辨析：preceding 特指紧接在前；foregoing 指前面所述的（是 following 的反义）",
    "example": "Each generation surpasses the preceding one.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v417",
    "word": "precedent",
    "phonetic": "/ˈpresɪdənt/",
    "meaning": "n. ①先例，范例；②惯例。【助记】pre(before)+ced(走)+ent→走在前面的榜样→先例。派生：unprecedented a. 空前的，无前例的",
    "example": "They're keenly aware that whatever they decide will set a precedent.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v418",
    "word": "expert",
    "phonetic": "/ˈekspɜːt/",
    "meaning": "n. 专家，行家 [同 specialist]；a. 老练的，内行的",
    "example": "This report would be intelligible only to an expert in computing.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v419",
    "word": "expertise",
    "phonetic": "/ˌekspɜːˈtiːz/",
    "meaning": "n. 专门知识，专长",
    "example": "His business expertise will be of great help to us.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v420",
    "word": "affect",
    "phonetic": "/əˈfekt/",
    "meaning": "vt. ①影响，使改变；②感动，打动；③侵袭，感染。辨析：affect(动词) 影响→effect(名词) 效果/结果",
    "example": "Her opinion will not affect my decision.",
    "tags": [
      "#核心词汇"
    ]
  },
  {
    "id": "v421",
    "word": "MLK演讲·排比与隐喻",
    "phonetic": "",
    "meaning": "当我们共和国的缔造者起草宪法和《独立宣言》那些豪迈的文字时，他们是在签署一张每个美国人都将继承的期票。\n\n【核心语法】① when 引导时间状语从句；② to which 引导定语从句修饰 note（关系代词 which 作介词 to 的宾语，属介词前置结构，考研翻译常考）；③ was to fall heir = be to do，表示命中注定/预定发生。考研写作借鉴：promissory note（期票/承诺）作隐喻，排比对称极具感染力。",
    "example": "When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir.",
    "tags": [
      "#名篇背诵",
      "#定语从句",
      "#写作范句"
    ]
  },
  {
    "id": "v422",
    "word": "MLK演讲·not by...but by写作句型",
    "phonetic": "",
    "meaning": "我梦想有一天，我的四个孩子将生活在一个不以肤色、而以品格优劣作为评判标准的国度里。\n\n【核心语法】① that 引导同位语从句，解释 dream 的具体内容；② where 引导定语从句修饰 nation；③ not by the color of their skin but by the content of their character——not by...but by... 否定前者、肯定后者，形成极整齐的对比，是考研写作和翻译高频句型，背熟即可直接套用。",
    "example": "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    "tags": [
      "#名篇背诵",
      "#定语从句",
      "#写作范句"
    ]
  },
  {
    "id": "v423",
    "word": "MLK演讲·形式主语insofar as结构",
    "phonetic": "",
    "meaning": "今天，显而易见，就其有色人种公民而言，美国已经对这张期票拒绝兑现了。\n\n【核心语法】① It is obvious that... 形式主语句型，真正主语为后接的 that 从句；② insofar as her citizens of color are concerned = 就其有色人种公民而言，考研翻译遇到此结构需准确切分，是拿满分的关键；③ has defaulted on 现在完成时，default on = 拒绝履行（债务/承诺）。",
    "example": "It is obvious today that America has defaulted on this promissory note, insofar as her citizens of color are concerned.",
    "tags": [
      "#名篇背诵",
      "#主语从句",
      "#写作范句"
    ]
  },
  {
    "id": "v424",
    "word": "influence",
    "phonetic": "['influəns]",
    "meaning": "n. 影响，感化；势力，权势\nvt. 影响，感化\n【助记】in (进入) + flu (流) + ence → 流进内心 → 产生影响",
    "example": "She has a great influence over her people.",
    "tags": ["#考研词汇", "#社会话题"]
  },
  {
    "id": "v425",
    "word": "influential",
    "phonetic": "[,influ'enʃəl]",
    "meaning": "a. 有影响的，有权势的\n【助记】influence (影响) + ial (形容词后缀)",
    "example": "He is a very influential man in the government.",
    "tags": ["#考研词汇", "#社会话题"]
  },
  {
    "id": "v426",
    "word": "exert",
    "phonetic": "[ig'zə:t]",
    "meaning": "vt. 尽（力），运用，施加（压力等）\n【助记】ex (出) + ert (能量) → 把能量发挥出来",
    "example": "He never exerts himself to help anyone.",
    "tags": ["#考研词汇", "#动词搭配"]
  },
  {
    "id": "v427",
    "word": "refusal",
    "phonetic": "[ri'fju:zəl]",
    "meaning": "n. 拒绝，回绝\n【助记】refuse (拒绝) + al (名词后缀)",
    "example": "Their refusal to compromise will inevitably invite more criticism from the UN.",
    "tags": ["#考研词汇"]
  },
  {
    "id": "v428",
    "word": "decline",
    "phonetic": "[di'klain]",
    "meaning": "v. 下降，衰落；谢绝\nn. 下降；衰落\n【助记】de (向下) + clin (倾斜) → 向下倾斜",
    "example": "The sun is declining a little day by day.",
    "tags": ["#考研词汇", "#社会话题"]
  },
  {
    "id": "v429",
    "word": "reduction",
    "phonetic": "[ri'dʌkʃən]",
    "meaning": "n. 减少，降低\n【助记】re (回) + duct (引导) + ion → 往回引导 → 减少",
    "example": "The reduction in smoking lowers resistance to disease.",
    "tags": ["#考研词汇", "#经济话题"]
  },
  {
    "id": "v430",
    "word": "increasingly",
    "phonetic": "[in'kri:siŋli]",
    "meaning": "ad. 日益，越来越多地\n【助记】increase (增加) + ing + ly",
    "example": "Our markets are increasingly competitive.",
    "tags": ["#考研词汇", "#副词"]
  },
  {
    "id": "v431",
    "word": "rocket",
    "phonetic": "['rɔkit]",
    "meaning": "n. 火箭\nvi. 飞速上升，暴涨\n【助记】rock (岩石) + et (小) → 像石头一样硬且快",
    "example": "Fresh food is so scarce that prices have rocketed.",
    "tags": ["#考研词汇", "#经济话题"]
  },
  {
    "id": "v432",
    "word": "input",
    "phonetic": "['input]",
    "meaning": "n. 投入，输入\nvt. 把…输入计算机\n【助记】in (进入) + put (放) → 放进去",
    "example": "The output should be proportionate to the input.",
    "tags": ["#考研词汇", "#经济话题"]
  },
  {
    "id": "v433",
    "word": "output",
    "phonetic": "['autput]",
    "meaning": "n. 产量，输出（量）\nvt. 输出\n【助记】out (出) + put (放) → 放出来",
    "example": "Grain output reached a new high.",
    "tags": ["#考研词汇", "#经济话题"]
  },
  {
    "id": "v434",
    "word": "turnover",
    "phonetic": "['tə:n,əuvə]",
    "meaning": "n. 营业额；人员调整率\n【助记】turn (转) + over (翻) → 翻转",
    "example": "The company had a high turnover of staff last year.",
    "tags": ["#考研词汇", "#经济话题"]
  },
  {
    "id": "v435",
    "word": "induce",
    "phonetic": "[in'dju:s]",
    "meaning": "vt. 劝诱，诱导；导致，引起\n【助记】in (进入) + duce (引导) → 引导进去",
    "example": "What induced her to take the risk?",
    "tags": ["#考研词汇", "#逻辑推理"]
  },
  {
    "id": "v436",
    "word": "deduce",
    "phonetic": "[di'dju:s]",
    "meaning": "vt. 推论，演绎\n【助记】de (向下) + duce (引导) → 引导出结论",
    "example": "There is a dearth of evidence from which we can deduce that he was guilty.",
    "tags": ["#考研词汇", "#逻辑推理"]
  },
  {
    "id": "v437",
    "word": "logic",
    "phonetic": "['lɔdʒik]",
    "meaning": "n. 逻辑（学），逻辑性\n【助记】log (说话/推理) + ic",
    "example": "Mathematics requires logical thinking.",
    "tags": ["#考研词汇", "#逻辑推理"]
  },
  {
    "id": "v438",
    "word": "logical",
    "phonetic": "['lɔdʒikəl]",
    "meaning": "a. 逻辑（上）的；合乎逻辑的\n【助记】logic (逻辑) + al (形容词后缀)",
    "example": "When very angry, people seldom act in a logical way.",
    "tags": ["#考研词汇", "#逻辑推理"]
  },
  {
    "id": "v439",
    "word": "coherent",
    "phonetic": "[kəu'hiərənt]",
    "meaning": "a. 条理清楚的，连贯的；一致的\n【助记】co (共同) + her (粘附) + ent → 粘在一起的 → 连贯的",
    "example": "The state is not a unified and internally coherent entity.",
    "tags": ["#考研词汇", "#学术写作"]
  },
  {
    "id": "v440",
    "word": "deduct",
    "phonetic": "[di'dʌkt]",
    "meaning": "vt. 扣除\n【助记】de (向下/去掉) + duct (引导) → 引导走一部分",
    "example": "Up to 5% of marks in the exams will be deducted for spelling mistakes.",
    "tags": ["#考研词汇"]
  },
  {
    "id": "v441",
    "word": "subtract",
    "phonetic": "[səb'trækt]",
    "meaning": "vt. （from）减去，减\n【助记】sub (向下) + tract (拉) → 拉下去",
    "example": "Subtract four from nine and you have five.",
    "tags": ["#考研词汇"]
  },
  {
    "id": "v442",
    "word": "highly",
    "phonetic": "['haili]",
    "meaning": "ad. 高度地，非常；赞许地\n【助记】high (高) + ly",
    "example": "It seems highly unlikely that she ever existed.",
    "tags": ["#考研词汇", "#副词"]
  },
  {
    "id": "v443",
    "word": "facilitate",
    "phonetic": "[fə'siliteit]",
    "meaning": "vt. 使变得（更）容易，促进\n【助记】facile (容易的) + itate (使…) → 使变得容易",
    "example": "The new trade agreement should facilitate more rapid economic growth.",
    "tags": ["#考研词汇", "#政策话题"]
  },
  {
    "id": "v444",
    "word": "allocate",
    "phonetic": "['æləkeit]",
    "meaning": "vt. 分配，分派，把…拨给\n【助记】al (去) + loc (地方) + ate (做) → 去某个地方安置 → 分配",
    "example": "Local authorities allocate resources efficiently.",
    "tags": ["#考研词汇", "#政策话题"]
  },
  {
    "id": "v445",
    "word": "distribute",
    "phonetic": "[dis'tribju(:)t]",
    "meaning": "vt. ①分发，分配 ②散布，分布 ③分类，分区\n【助记】dis (apart 分开) + tribute (给予) → 分开给予 → 分发\n【派生】distribution n. 分发；散布；销售 / redistribute v. 重新分配",
    "example": "The foreman distributes the work every morning.",
    "tags": ["#考研词汇", "#词根tribute", "#动词搭配"]
  },
  {
    "id": "v446",
    "word": "worldwide",
    "phonetic": "['wə:ldwaid]",
    "meaning": "a./ad. 世界范围(的)，遍及全球(的)\n【助记】world (世界) + wide (遍及各地) → 世界范围",
    "example": "There is worldwide concern about the destruction of the rainforests.",
    "tags": ["#考研词汇", "#社会话题"]
  },
  {
    "id": "v447",
    "word": "universal",
    "phonetic": "[ju:ni'və:səl]",
    "meaning": "a. ①普遍的（universal truth 普遍真理） ②通用的（Music is a universal language） ③全世界的\n【派生】universalize/-ise v. 使一般化、普遍化",
    "example": "Music is a universal language.",
    "tags": ["#考研词汇", "#形容词", "#学术写作"]
  },
  {
    "id": "v448",
    "word": "policy",
    "phonetic": "['pɔlisi]",
    "meaning": "n. ①政策，方针（social / monetary / inflexible policy） ②保险单",
    "example": "The insurance policy covers sudden death or disablement.",
    "tags": ["#考研词汇", "#政策话题"]
  },
  {
    "id": "v449",
    "word": "continuous",
    "phonetic": "[kən'tɪnjuəs]",
    "meaning": "a. 连续的，持续的（语意最强，强调时空上无间断）\n【派生】continuity n. 连续性，连贯性\n【辨析】continuous（无间断，最强） > continual（允许间断的持续） / successive（一个接一个） / constant（习惯性重复） / persistent（不懈）",
    "example": "The continuous work made me thoroughly exhausted.",
    "tags": ["#考研词汇", "#形容词", "#辨析词"]
  },
  {
    "id": "v450",
    "word": "continual",
    "phonetic": "[kən'tɪnjuəl]",
    "meaning": "a. ①持续不断的（重复或持续发生，连续之间允许有间断） ②频繁的",
    "example": "She suffered continual police harassment.",
    "tags": ["#考研词汇", "#形容词", "#辨析词"]
  },
  {
    "id": "v451",
    "word": "consistent",
    "phonetic": "[kən'sɪstənt]",
    "meaning": "a. ①坚持的，一贯的 ②一致的（前后吻合）\n【助记】con (一起) + sist (站) + ent → 站在一起的 → 一致的\n【派生】consistency n. 前后一致；浓度 / inconsistent a. 不一致的，矛盾的",
    "example": "His account of what happened was consistent.",
    "tags": ["#考研词汇", "#形容词", "#学术写作"]
  },
  {
    "id": "v452",
    "word": "gradual",
    "phonetic": "['grædʒuəl]",
    "meaning": "a. ①逐渐的，逐步的 ②不陡的，平缓的\n【派生】gradually ad. 逐渐地",
    "example": "There has been a gradual increase in the birth rate.",
    "tags": ["#考研词汇", "#形容词"]
  },
  {
    "id": "v453",
    "word": "cease",
    "phonetic": "[siːs]",
    "meaning": "v. 停止，终了\nn. 停止\n【派生】ceaseless a. 不停的，不断的\n【短语】without cease 持续地 / Cease fire! 停止开枪！/ cease to be 不再是",
    "example": "His influence ceased with his death.",
    "tags": ["#考研词汇", "#动词搭配"]
  },
  {
    "id": "v454",
    "word": "halt",
    "phonetic": "[hɔːlt]",
    "meaning": "n. 停止，暂停（come to a halt 停下来）\nv. (使)停止\n【助记】暂停 (halt) 盐 (salt) 的销售\n【派生】halting a. 踌躇的，欲言又止的",
    "example": "The car came to a halt just in time to prevent an accident.",
    "tags": ["#考研词汇", "#动词搭配"]
  },
  {
    "id": "v455",
    "word": "suspend",
    "phonetic": "[sə'spend]",
    "meaning": "vt. ①暂停，暂缓（suspend judgement 推迟判决） ②悬挂，吊\n【助记】sus (under 在下) + pend (悬挂) → 吊着",
    "example": "The court has suspended judgement till next Monday.",
    "tags": ["#考研词汇", "#词根pend", "#动词搭配"]
  },
  {
    "id": "v456",
    "word": "resume",
    "phonetic": "[rɪ'zjuːm]",
    "meaning": "v. 重新开始，恢复\nn. ①摘要，概略 ②<美>履历，简历\n【助记】re (again 再) + sume (拿) → 再度拿起 → 重新开始",
    "example": "We'll stop now and resume at two o'clock.",
    "tags": ["#考研词汇", "#动词搭配"]
  },
  {
    "id": "v457",
    "word": "contract",
    "phonetic": "['kɒntrækt]",
    "meaning": "n. 合同，契约\nv. ①缩小 [反 expand] ②订约，订合同 ③感染（疾病）\n【助记】con (共同) + tract (拉、拽) → \"合同\"将双方拉到一起\n【派生】contractor n. 订约人，承包商 / contraction n. 缩小；缩略字",
    "example": "The contract was awarded to a previously unknown company.",
    "tags": ["#考研词汇", "#词根tract", "#经济话题"]
  },
  {
    "id": "v458",
    "word": "consequent",
    "phonetic": "['kɒnsɪkwənt]",
    "meaning": "a. 作为结果的，随之发生的（consequent on/upon 由……引起）\n【派生】consequential a. 结果的，相因而生的",
    "example": "This fall of prices is consequent on the rise in production.",
    "tags": ["#考研词汇", "#形容词", "#逻辑推理"]
  },
  {
    "id": "v459",
    "word": "consequently",
    "phonetic": "['kɒnsɪkwəntli]",
    "meaning": "ad. 从而，因此\n【用法】相当于 as a result，可放在句首或与 and 连接两个并列句",
    "example": "She was a bright and eager student and, consequently, did well in school.",
    "tags": ["#考研词汇", "#副词", "#逻辑推理"]
  },
  {
    "id": "v460",
    "word": "consequence",
    "phonetic": "['kɒnsɪkwəns]",
    "meaning": "n. ①后果，结果 ②重要(性)（of great consequence 非常重要）\n【短语】in consequence 因此，结果 / in consequence of 因为……的缘故",
    "example": "Nobody can tell what the consequences may be.",
    "tags": ["#考研词汇", "#逻辑推理"]
  },
  {
    "id": "v461",
    "word": "consequently",
    "phonetic": "['kɒnsɪkwəntli]",
    "meaning": "ad. 从而，因此\n【用法】相当于 as a result，可放在句首或与 and 连接两个并列句",
    "example": "She was a bright and eager student and, consequently, did well in school.",
    "tags": ["#今日任务", "#考研词汇", "#副词", "#逻辑推理"]
  },
  {
    "id": "v462",
    "word": "consequence",
    "phonetic": "['kɒnsɪkwəns]",
    "meaning": "n. ①后果，结果 ②重要(性)（of great consequence 非常重要）\n【短语】in consequence 因此，结果 / in consequence of 因为……的缘故",
    "example": "Nobody can tell what the consequences may be.",
    "tags": ["#今日任务", "#考研词汇", "#逻辑推理"]
  },
  {
    "id": "v463",
    "word": "subsequent",
    "phonetic": "['sʌbsɪkwənt]",
    "meaning": "a. 后来的，随后的\n【助记】sub (under 在下) + sequ (跟随) + ent → 随后的\n【真题】Prior knowledge and interest influence what we experience, what we think our experiences mean, and the subsequent actions we take. (之前的知识和兴趣会影响我们所经历的，会影响我们对于经验意义的思考，以及我们随后会采取的行动。)",
    "example": "The book was banned in the US, as were two subsequent books.",
    "tags": ["#今日任务", "#考研词汇", "#形容词", "#词根sequ"]
  },
  {
    "id": "v464",
    "word": "otherwise",
    "phonetic": "['ʌðəwaɪz]",
    "meaning": "ad. ①用别的方法（think otherwise 有另外的想法）②在其他方面（He is rich, but otherwise an unhappy man.）\nconj. 否则（Be modest, otherwise you will lag behind. 要谦虚，否则就要落后）\n【短语】or otherwise 或相反，或用其他方法 / but otherwise 然而在别的方面却 / otherwise than 除……之外，与……不同",
    "example": "Be modest, otherwise you will lag behind.",
    "tags": ["#今日任务", "#考研词汇", "#副词"]
  },
  {
    "id": "v465",
    "word": "undoubtedly",
    "phonetic": "[ʌn'daʊtɪdli]",
    "meaning": "ad. 毋庸置疑地\n【派生】undoubted a. 无疑的，确实的",
    "example": "Undoubtedly, political and economic factors have played their part.",
    "tags": ["#今日任务", "#考研词汇", "#副词"]
  },
  {
    "id": "v466",
    "word": "hence",
    "phonetic": "[hens]",
    "meaning": "ad. ①因此 [同 therefore]（It's handmade and hence expensive.）②今后（The sports meet will be held three days hence.）",
    "example": "It's handmade and hence expensive.",
    "tags": ["#今日任务", "#考研词汇", "#副词", "#逻辑推理"]
  },
  {
    "id": "v467",
    "word": "bold",
    "phonetic": "[bəʊld]",
    "meaning": "a. ①勇敢的，无畏的（a bold move 大胆行动）②冒失的，鲁莽的（offensively bold 唐突无礼的）③醒目的，明显的（bold colors 鲜明色调）\n【派生】boldness n. 勇敢；冒失",
    "example": "It was a bold move on their part to open a business in France.",
    "tags": ["#今日任务", "#考研词汇", "#形容词"]
  },
  {
    "id": "v468",
    "word": "dense",
    "phonetic": "[dens]",
    "meaning": "a. ①密集的，稠密的（a dense forest 浓密森林）②(雾、烟等)浓的，浓重的（a dense column of smoke 一股浓烟）③(物质)密度大的（a small dense star 密度很大的小恒星）\n【派生】densely ad. 浓密地，密集地",
    "example": "We entered a dense forest.",
    "tags": ["#今日任务", "#考研词汇", "#形容词"]
  },
  {
    "id": "v469",
    "word": "density",
    "phonetic": "['densɪti]",
    "meaning": "n. ①密集，稠密（population density 人口密度）②(物质或物体的)密度（Mercury has a much greater density than water.）",
    "example": "Australia has a very low population density.",
    "tags": ["#今日任务", "#考研词汇"]
  },
  {
    "id": "v470",
    "word": "intensity",
    "phonetic": "[ɪn'tensɪti]",
    "meaning": "n. ①强烈，剧烈（The pain increased in intensity.）②强度（high-intensity work 高强度工作）\n【助记】in + tens (伸展) + ity → 注意力向内伸展的程度 → 强度",
    "example": "The pain increased in intensity.",
    "tags": ["#今日任务", "#考研词汇", "#词根tens"]
  },
  {
    "id": "v471",
    "word": "flourish",
    "phonetic": "['flʌrɪʃ]",
    "meaning": "vi. 繁荣，茂盛，兴旺（When the root is firm, the branches flourish. 本固枝荣）\nvt. 挥动（He flourished his stick at the boy.）\n【助记】flour (开花) + ish (动词后缀) → 茂盛\n【派生】flourishing a. 繁茂的，繁荣的\n【真题】To be sure, the future is not all rosy: while our species may flourish, a great many individuals may not.",
    "example": "When the root is firm, the branches flourish.",
    "tags": ["#今日任务", "#考研词汇", "#动词搭配", "#辨析词"]
  },
  {
    "id": "v472",
    "word": "prosper",
    "phonetic": "['prɒspə]",
    "meaning": "vi. 繁荣，成功（The high street banks continue to prosper.）\nvt. 使繁荣，使成功（May God prosper you! 愿上天助你成功！）\n【助记】pro (forward) + sper (希望) → 前方充满希望 → 繁荣",
    "example": "The high street banks continue to prosper.",
    "tags": ["#今日任务", "#考研词汇", "#动词搭配", "#辨析词"]
  },
  {
    "id": "v473",
    "word": "prosperity",
    "phonetic": "[prɒ'sperɪti]",
    "meaning": "n. 繁荣，兴旺",
    "example": "Prosperity and economic success remain popular and broadly shared goals.",
    "tags": ["#今日任务", "#考研词汇"]
  },
  {
    "id": "v474",
    "word": "prosperous",
    "phonetic": "['prɒspərəs]",
    "meaning": "a. 繁荣的，兴旺的",
    "example": "The peasant household has become prosperous through working hard.",
    "tags": ["#今日任务", "#考研词汇", "#形容词"]
  },
  {
    "id": "v475",
    "word": "thrive",
    "phonetic": "[θraɪv]",
    "meaning": "vi. 兴旺，繁荣，茁壮成长（Children thrive on fresh air and good food.）\n【助记】th + rive (河流) → 繁荣起源于大河流域\n【用法】过去式 thrived/throve，过去分词 thrived\n【辨析】flourish (处于成功、繁荣、进步的鼎盛阶段) / thrive (蓬勃发展，常指显而易见的成功) / succeed (完成某件想做或企图去做的事，与 fail 相对) / prosper (持续不断地成功)\n★提示 表示事业、经济繁荣昌盛，flourish, thrive, prosper 可互换使用",
    "example": "Few plants or animals thrive in the desert.",
    "tags": ["#今日任务", "#考研词汇", "#动词搭配", "#辨析词"]
  },
  {
    "id": "v476",
    "word": "calculate",
    "phonetic": "['kælkjuleɪt]",
    "meaning": "vt. ①计算 ②估计，推测 [同 estimate]（The President is calculating that this will relieve international pressure.）\n【派生】calculator n. 计算机，计算器 / calculation n. 计算，考虑 / miscalculate v. 误算，失算\n【词源】源于拉丁语 calculus (小圆石)——两千多年前古罗马商人用小圆石计算损益，古希腊、罗马人也投圆石进行选举",
    "example": "From this you can calculate the total mass in the Galaxy.",
    "tags": ["#今日任务", "#考研词汇", "#动词搭配", "#词源"]
  },
  {
    "id": "v477",
    "word": "ratio",
    "phonetic": "['reɪʃiəʊ]",
    "meaning": "n. 比率（两个数值之间的比值，该词所涉及的两个比较项必须同时出现）\n【辨析】rate 指部分相对于整体形成的比率（如 divorce rate 离婚率）；ratio 指两数之比\n【短语】at any rate 无论如何，至少 / at this rate 既然这样，照这种情形",
    "example": "The ratio of pupils to teachers was 30 to 1.",
    "tags": ["#今日任务", "#考研词汇", "#辨析词"]
  },
  {
    "id": "v478",
    "word": "proportion",
    "phonetic": "[prə'pɔːʃn]",
    "meaning": "n. ①比例 [同 ratio]（The proportion of men to women has changed.）②面积，部分（A large proportion of my time is spent in studying.）③均衡，相称（bear no proportion to 与……不相称）\n【助记】pro + portion (部分) → 比例\n【短语】in proportion to 与……成比例\n【派生】proportional a. (成)比例的；相称的，均衡的 / proportionality n. 均衡性，恰当性 / proportionately ad. 均衡地，相称地\n【真题】Words degraded to the margin have been justice, fairness, tolerance, proportionality and accountability.",
    "example": "The proportion of men to women in the population has changed in recent years.",
    "tags": ["#今日任务", "#考研词汇", "#辨析词"]
  },
  {
    "id": "v479",
    "word": "percentage",
    "phonetic": "[pə'sentɪdʒ]",
    "meaning": "n. 百分数，百分率，百分比\n【助记】per (每) + cent (百) + age → 每一百 → 百分数",
    "example": "The percentage of girls in engineering has increased substantially.",
    "tags": ["#今日任务", "#考研词汇"]
  },
  {
    "id": "v480",
    "word": "portion",
    "phonetic": "['pɔːʃn]",
    "meaning": "n. 一部分，一份",
    "example": "A large portion of this cost devolves upon the patient.",
    "tags": ["#今日任务", "#考研词汇"]
  },
  {
    "id": "v481",
    "word": "rate",
    "phonetic": "[reɪt]",
    "meaning": "n. ①速度，速率（at a steady rate 以平稳速度）②比率，频率（the rate of inflation 通货膨胀率）③价格，费用（a premium rate 附加费率）\nvt. ①估价，评估（rate the house as worth 20,000 pounds）②评价，鉴定等级（rate the film highly）③值得，应该得到\n【派生】ratepayer n. 纳税人 / first-rate a. 第一流的 / second-rate a. 二流的，劣质的\n【短语】at any rate 无论如何，至少 / at this rate 既然这样，照这种情形",
    "example": "The rate of inflation is running at about 2.7 percent.",
    "tags": ["#今日任务", "#考研词汇", "#动词搭配"]
  },
  {
    "id": "s_bird_01",
    "word": "Scientists jumped to the rescue with some distinctly shaky evidence to the effect that insects would eat us up if birds failed to control them.",
    "phonetic": "",
    "meaning": "科学家们急忙出面辩护，拿出了一些明显站不住脚的证据，大意是说如果鸟类无法控制昆虫，昆虫就会把我们吃光。\n\n【核心语法】① to the effect that... 引导同位语从句，修饰 evidence，意为\"大意是……\"；② 同位语从句内部嵌套 if 引导的条件状语从句（if birds failed to control them）；③ distinctly shaky 为强调修饰，distinctly 加强 shaky 的否定语气。",
    "example": "Scientists jumped to the rescue with some distinctly shaky evidence to the effect that insects would eat us up if birds failed to control them.",
    "answer": "【句子主干】Scientists jumped to the rescue with evidence.\n（主语 Scientists + 谓语 jumped to the rescue + 方式状语 with evidence）\n\n【重点词汇】\n• jump to the rescue：急忙救援／出面辩护\n• shaky：不可靠的，站不住脚的\n• to the effect that...：大意是……（引导同位语从句）\n• eat up：吃光，吞噬\n• fail to do：未能做到……\n\n【中文翻译】科学家们急忙出面辩护，拿出了一些明显站不住脚的证据，大意是说如果鸟类无法控制昆虫，昆虫就会把我们吃光。",
    "tags": [
      "#真题长难句",
      "#同位语从句",
      "#条件状语从句"
    ]
  },
  {
    "id": "s_bird_02",
    "word": "We have no land ethic yet, but we have at least drawn near the point of admitting that birds should continue as a matter of intrinsic right, regardless of the presence or absence of economic advantage to us.",
    "phonetic": "",
    "meaning": "我们还没有建立起土地伦理，但至少我们已经接近承认这一点：鸟类拥有继续生存的内在权利，无论它们对我们是否具有经济价值。\n\n【核心语法】① but 连接两个并列主句，形成转折对比；② the point of admitting that... 中，of admitting 为介词短语后置定语修饰 point，that 引导宾语从句；③ regardless of 引导让步状语，后接 presence or absence 名词短语；④ as a matter of intrinsic right 意为\"作为一种内在权利\"，作状语。",
    "example": "We have no land ethic yet, but we have at least drawn near the point of admitting that birds should continue as a matter of intrinsic right, regardless of the presence or absence of economic advantage to us.",
    "answer": "【句子主干】We have no land ethic yet, but we have drawn near the point.\n（前半：主谓宾；后半：主谓宾，由 but 连接）\n\n【重点词汇】\n• land ethic：土地伦理\n• draw near：接近，靠近\n• intrinsic right：内在权利（固有的权利）\n• regardless of：不管，不顾\n• presence or absence：是否存在\n• economic advantage：经济价值／利益\n\n【中文翻译】我们还没有建立起土地伦理，但至少我们已经接近承认这一点：鸟类拥有继续生存的内在权利，无论它们对我们是否具有经济价值。",
    "tags": [
      "#真题长难句",
      "#并列句",
      "#后置定语"
    ]
  },
  {
    "id": "s_bird_03",
    "word": "Time was when biologists somewhat over worded the evidence that these creatures preserve the health of game by killing the physically weak, or that they prey only on \"worthless\" species.",
    "phonetic": "",
    "meaning": "曾经有一段时间，生物学家在阐述证据时有些夸大其词，声称这些生物通过捕杀体弱者来保持猎物种群的健康，或者说它们只捕食\"没有价值\"的物种。\n\n【核心语法】① Time was when... 为固定倒装句型，意为\"曾经有一段时间……\"，when 引导时间状语从句作表语；② that...or that... 为两个并列同位语从句，共同修饰 evidence；③ by killing 为方式状语短语；④ prey on 为固定搭配，意为\"捕食\"。",
    "example": "Time was when biologists somewhat over worded the evidence that these creatures preserve the health of game by killing the physically weak, or that they prey only on \"worthless\" species.",
    "answer": "【句子主干】Time was when biologists over worded the evidence.\n（Time was when... 固定句型，意为\"曾经有一段时间……\"）\n\n【重点词汇】\n• Time was when...：曾经有一段时间……（固定倒装句型）\n• over worded：措辞过激，夸大其词\n• game：猎物（猎捕对象，非\"游戏\"）\n• physically weak：体弱者\n• prey on：捕食，掠夺\n• worthless species：无价值的物种\n\n【中文翻译】曾经有一段时间，生物学家在阐述证据时有些夸大其词，声称这些生物通过捕杀体弱者来保持猎物种群的健康，或者说它们只捕食\"没有价值\"的物种。",
    "tags": [
      "#真题长难句",
      "#同位语从句",
      "#固定句型"
    ]
  }
];

const readingData = [
  {
    "id": "rd_cloze",
    "year": 2021,
    "source": "考研英语一",
    "questionType": "完形填空",
    "text": "Digital technology is reshaping education in ways both ______(1) and troubling. Online platforms have made learning resources more accessible than at any point in history, allowing students from ______(2) backgrounds to access lectures from elite universities. Yet this apparent democratisation deserves ______(3). Research suggests that self-directed learning requires a degree of motivation and self-discipline that many students ______(4). Furthermore, the replacement of human teachers with algorithms raises profound questions about the social ______(5) of education—mentorship, community, and the cultivation of empathy—that technology cannot easily ______(6).",
    "glossary": {
      "accessible": "adj. 可获得的；易接近的（①答案提示：promising）",
      "democratisation": "n. 民主化；普及化",
      "scrutiny": "n. 仔细审查；详细检查（③答案提示：scrutiny）",
      "self-directed": "adj. 自主的；自我引导的",
      "cultivation": "n. 培养；培育；耕作"
    },
    "tags": []
  },
  {
    "id": "rd_reading",
    "year": 2023,
    "source": "经济学人",
    "questionType": "阅读理解PartA",
    "text": "The rise of artificial intelligence has reignited a perennial debate about technological unemployment. Economists have long been sanguine about such fears, pointing to historical precedents in which mechanisation ultimately created more jobs than it destroyed. Yet the current wave of automation is qualitatively different: machine-learning algorithms can now perform cognitive tasks—reading legal briefs, diagnosing diseases, composing music—that were once considered the exclusive province of human intellect. This has prompted a growing cohort of scholars to argue that the displacement of workers this time will be more precipitous and less reversible than in previous industrial transitions. Policymakers, caught between the imperatives of economic competitiveness and social stability, are only beginning to grapple with the magnitude of the challenge.",
    "glossary": {
      "perennial": "adj. 长期存在的；反复出现的",
      "sanguine": "adj. 乐观的；对前景充满信心的",
      "mechanisation": "n. 机械化；以机器替代人力的过程",
      "province": "n. 领域；专属范畴（引申义）",
      "cohort": "n. 一批人；有共同特征的群体",
      "displacement": "n. 取代；（劳动者的）岗位替换",
      "precipitous": "adj. 急剧的；仓促的",
      "grapple": "v. 努力应对；与……搏斗"
    },
    "tags": [
      "#作者态度"
    ]
  },
  {
    "id": "rd_newtype",
    "year": 2020,
    "source": "考研英语一",
    "questionType": "新题型PartB",
    "task": "下列[A]—[E]段落均选自同一篇文章，请根据上下文逻辑，将各段落与对应标题（选项1—5）进行匹配，并将答案填写在答题卡上。",
    "text": "[A] The concept of the \"smart city\"—deploying digital technology to optimise urban infrastructure and public services—has moved from science fiction to mainstream municipal policy with remarkable speed. Sensors embedded in roads, buildings, and public spaces now generate vast streams of data that planners use to reduce traffic congestion, lower energy consumption, and improve emergency response times.\n\n[B] Critics, however, question whether the benefits of smart city technology are equitably distributed. Surveillance systems deployed in the name of efficiency can become instruments of social control, disproportionately targeting marginalised communities. The aggregation of personal data also raises serious and unresolved questions about privacy, consent, and the commercialisation of civic life.\n\n[C] Proponents of inclusive urban design argue that technology alone is insufficient. They emphasise the importance of genuine community participation in the planning process, contending that residents must have a meaningful and binding voice in decisions about how their neighbourhoods are monitored and how the resulting data are used and shared.\n\n[D] Some cities have sought to reconcile competing concerns by establishing transparent governance frameworks for smart city initiatives. Such frameworks typically mandate public disclosure of the categories of data collected, the purposes for which it may be used, the third parties with whom it may be shared, and the mechanisms available for citizens to seek redress.\n\n[E] The ideal smart city of the future, its most thoughtful advocates suggest, will be one in which digital infrastructure serves human flourishing rather than merely maximising economic efficiency—a city that is not only intelligent and responsive, but also just, inclusive, and resilient in the face of unforeseen challenges.",
    "glossary": {
      "municipal": "adj. 市政的；地方政府的",
      "congestion": "n. 拥堵；堵塞",
      "marginalised": "adj. 被边缘化的；处于社会底层的",
      "aggregation": "n. 聚集；汇总（数据的）",
      "contending": "v. 主张；声称（contend 的现在分词）",
      "mandate": "v. 强制要求；授权",
      "redress": "n. 补救；纠正（错误或伤害）",
      "resilient": "adj. 有韧性的；能迅速恢复的"
    },
    "tags": []
  },
  {
    "id": "rd_translation",
    "year": 2022,
    "source": "大西洋月刊",
    "questionType": "英译汉PartC",
    "text": "The relationship between science and philosophy has long been a subject of intense debate. Some argue that philosophy has become increasingly irrelevant in an age dominated by empirical inquiry, claiming that rapid advances in physics and neuroscience have rendered metaphysical speculation superfluous. Others maintain a more nuanced position. They contend that science, far from making philosophy obsolete, actually depends upon philosophical assumptions about the nature of reality and the reliability of human cognition. The distinction between the two disciplines is further complicated by the history of ideas. Many of the questions that scientists now address with quantitative methods were originally framed by philosophers who lacked the technological tools to test their hypotheses empirically. This historical debt is rarely acknowledged in contemporary discourse. The tendency to dismiss philosophical inquiry as mere wordplay reflects a superficial understanding of the intellectual genealogy of modern science. What is needed is not a hierarchy of knowledge but a genuine dialogue between disciplines. Only by recognising the complementary nature of scientific rigour and philosophical reflection can we hope to address the most profound questions about human existence.",
    "translateLines": [
      "Some argue that philosophy has become increasingly irrelevant in an age dominated by empirical inquiry, claiming that rapid advances in physics and neuroscience have rendered metaphysical speculation superfluous.",
      "They contend that science, far from making philosophy obsolete, actually depends upon philosophical assumptions about the nature of reality and the reliability of human cognition.",
      "Many of the questions that scientists now address with quantitative methods were originally framed by philosophers who lacked the technological tools to test their hypotheses empirically.",
      "The tendency to dismiss philosophical inquiry as mere wordplay reflects a superficial understanding of the intellectual genealogy of modern science.",
      "Only by recognising the complementary nature of scientific rigour and philosophical reflection can we hope to address the most profound questions about human existence."
    ],
    "glossary": {
      "empirical": "adj. 以经验（或实验）为依据的；经验主义的",
      "metaphysical": "adj. 形而上学的；超自然的",
      "superfluous": "adj. 多余的；不必要的；过剩的",
      "obsolete": "adj. 废弃的；过时的；已被淘汰的",
      "cognition": "n. 认知；认识能力",
      "genealogy": "n. 起源；发展历史；思想谱系",
      "rigour": "n. 严格；严谨；严密性（= rigor）"
    },
    "tags": []
  },
  {
    "id": "rd_writing",
    "year": 2023,
    "source": "考研英语一",
    "questionType": "写作",
    "text": "Part A（应用文，满分 10 分）\nSuppose you are Li Ming, a first-year postgraduate student. Write an email to your supervisor, Professor Zhang, in which you should:\n1) express your sincere gratitude for her patient guidance over the past semester;\n2) briefly describe the research direction you intend to pursue;\n3) request a meeting at her convenience to discuss your thesis proposal outline.\nWrite your answer in about 100 words on the ANSWER SHEET. Do not sign your own name; use \"Li Ming\" instead.\n\nPart B（图画作文，满分 20 分）\nThe bar chart below illustrates how urban residents in five countries allocated their leisure time in 2022. Write an essay in which you should:\n1) describe the main features of the chart;\n2) interpret what the data reveal about contemporary lifestyle trends;\n3) give your own assessment of the phenomenon depicted.\nWrite your answer in about 150 words on the ANSWER SHEET.",
    "glossary": {
      "gratitude": "n. 感激之情；谢意（写作高频词）",
      "articulate": "v. 清晰表达；明确阐述（写作高频词）",
      "illustrate": "v. 说明；（用图表）展示",
      "allocate": "v. 分配；拨给",
      "depict": "v. 描绘；描述"
    },
    "tags": []
  },
  {
    "id": "rd_t2000_71",
    "year": 2000,
    "source": "考研英语一 · 翻译第71题",
    "questionType": "英译汉PartC",
    "text": "Under modern conditions, this requires varying measures of centralized control and hence the help of specialized scientists such as economists and operational research experts.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 在现代条件下，这需要不同程度的集中管理，因此也需要经济学家和运筹学专家等专门科学家的帮助。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> such as 引导举例同位语（economists and operational research experts），修饰 specialized scientists；varying measures of... 作动词 requires 的宾语核心。</span>",
    "translateLines": [
      "Under modern conditions, this requires varying measures of centralized control and hence the help of specialized scientists such as economists and operational research experts."
    ],
    "glossary": {
      "centralized": "adj. 集中的；中央集权的",
      "operational": "adj. 运筹的；运作的（operational research 运筹学）",
      "economists": "n. 经济学家（economist 复数）"
    },
    "tags": [
      "#真题长难句",
      "#同位语"
    ]
  },
  {
    "id": "rd_t2000_72",
    "year": 2000,
    "source": "考研英语一 · 翻译第72题",
    "questionType": "英译汉PartC",
    "text": "Furthermore, it is obvious that the strength of a country's economy is directly bound up with the efficiency of its agriculture and industry, and that this in turn rests upon the efforts of scientists and technologists of all kinds.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 此外，显而易见，一个国家经济实力与其农业和工业的效率直接相关，而这又依赖于各类科学家和技术人员的努力。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> it is obvious that ... 形式主语结构，真正主语为后接的两个并列 that 从句；bound up with = closely connected with（与……密切相关）。</span>",
    "translateLines": [
      "Furthermore, it is obvious that the strength of a country's economy is directly bound up with the efficiency of its agriculture and industry, and that this in turn rests upon the efforts of scientists and technologists of all kinds."
    ],
    "glossary": {
      "obvious": "adj. 显而易见的；明显的",
      "bound up with": "与……紧密相连；直接相关（固定搭配）",
      "efficiency": "n. 效率；效能",
      "technologists": "n. 技术专家（technologist 复数）"
    },
    "tags": [
      "#真题长难句",
      "#主语从句"
    ]
  },
  {
    "id": "rd_t2000_73",
    "year": 2000,
    "source": "考研英语一 · 翻译第73题",
    "questionType": "英译汉PartC",
    "text": "Owing to the remarkable development in mass-communications, people everywhere are feeling new wants and are being exposed to new customs and ideas, while governments are often forced to introduce still further innovations for the reasons given above.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 由于大众传播的显著发展，世界各地的人们正产生新的需求并接触到新的风俗和观念，而各国政府也常常因上述原因被迫引进更多的革新举措。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> Owing to 介词短语引导原因状语；while 引导对比/转折状语从句，主语换为 governments；are being exposed to 现在进行时被动语态。</span>",
    "translateLines": [
      "Owing to the remarkable development in mass-communications, people everywhere are feeling new wants and are being exposed to new customs and ideas, while governments are often forced to introduce still further innovations for the reasons given above."
    ],
    "glossary": {
      "owing to": "prep. 由于；因为（= because of，较正式）",
      "mass-communications": "n. 大众传播；大众媒体",
      "innovations": "n. 革新；创新（innovation 复数）"
    },
    "tags": [
      "#真题长难句",
      "#状语从句"
    ]
  },
  {
    "id": "rd_t2000_74",
    "year": 2000,
    "source": "考研英语一 · 翻译第74题",
    "questionType": "英译汉PartC",
    "text": "in the early industrialized countries of Europe the process of industrialization -- with all the far-reaching changes in social patterns that followed -- was spread over nearly a century, whereas nowadays a developing nation may undergo the same process in a decade or so.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 在欧洲早期工业化国家，工业化进程（连同随之而来的对社会结构的深远变化）延续了将近一个世纪，而如今一个发展中国家可能在十年左右就经历同样的过程。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> whereas 引导对比状语从句；破折号之间的 with all ... that followed 为独立插入语，其中 that 引导定语从句修饰 changes；spread over = extended over（延续，历经）。</span>",
    "translateLines": [
      "in the early industrialized countries of Europe the process of industrialization -- with all the far-reaching changes in social patterns that followed -- was spread over nearly a century, whereas nowadays a developing nation may undergo the same process in a decade or so."
    ],
    "glossary": {
      "industrialization": "n. 工业化",
      "far-reaching": "adj. 深远的；影响广泛的",
      "whereas": "conj. 然而；而（表对比，引导状语从句）",
      "undergo": "v. 经历；承受；经受"
    },
    "tags": [
      "#真题长难句",
      "#状语从句"
    ]
  },
  {
    "id": "rd_t2000_75",
    "year": 2000,
    "source": "考研英语一 · 翻译第75题",
    "questionType": "英译汉PartC",
    "text": "Additional social stresses may also occur because of the population explosion or problems arising from mass migration movements -- themselves made relatively easy nowadays by modern means of transport.<br><br><span style=\"color:#b45309;font-weight:700\">【参考译文】</span> 人口爆炸或大规模人口迁移运动所引发的问题（这些问题本身如今因现代交通工具而变得相对容易发生）也可能造成额外的社会压力。<br><br><span style=\"color:#4a6fa5;font-weight:600;font-size:.85em\">【语法点】</span><span style=\"color:#4a6fa5;font-size:.85em\"> 破折号后 themselves made relatively easy... 为独立主格结构，themselves 指代 problems，made 为过去分词作宾语补足语；arising from 现在分词短语作后置定语修饰 problems。</span>",
    "translateLines": [
      "Additional social stresses may also occur because of the population explosion or problems arising from mass migration movements -- themselves made relatively easy nowadays by modern means of transport."
    ],
    "glossary": {
      "stresses": "n. 压力；紧张（stress 的复数）",
      "arising from": "由……引起；源于（arise from 的分词形式）",
      "migration": "n. 迁移；移民",
      "means": "n. 方式；手段（单复数同形）"
    },
    "tags": [
      "#真题长难句",
      "#独立主格"
    ]
  }
];
