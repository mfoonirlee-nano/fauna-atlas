# 大西洋盲鳗（Atlantic Hagfish）物种档案研究与实现简报

- 研究对象：*Myxine glutinosa* Linnaeus, 1758
- 建议 slug：`atlantic-hagfish`
- 研究截止日：2026-08-31
- 用途：完成 `docs/todo.md` 中的大西洋盲鳗物种档案，并约束六张静态图片的科学表述

证据口径：本简报严格采用现行东大西洋 *Myxine glutinosa* 口径。Wisner & McMillan（1995）把西大西洋 *M. limosa* 从本种异名中恢复，Fernholm et al.（2013）的 16S 与 COI 数据确认两者不同，WoRMS 现分别接受两个种。加拿大和美国仍有大量论文、渔业报告及数据库把西大西洋个体写成 *M. glutinosa*；这些资料在下文只用于解释历史混用，不进入东大西洋体尺、繁殖、渔业或行为定量字段。

## 可直接采用的编辑结论

1. 接受名为 *Myxine glutinosa* Linnaeus, 1758。分类链使用 Animalia > Chordata > Myxini > Myxiniformes > Myxinidae > *Myxine*。[WoRMS 101170](https://www.marinespecies.org/rest/AphiaRecordByAphiaID/101170)；[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=6425)（访问日期均为：2026-08-31）
2. WoRMS 也把 *Myxine limosa* 作为接受种。1995 年形态修订和 2013 年分子研究均把西大西洋 *M. limosa* 与东大西洋 *M. glutinosa* 区分开。[WoRMS 271309](https://www.marinespecies.org/rest/AphiaRecordByAphiaID/271309)；[Wisner & McMillan 1995](https://spo.nmfs.noaa.gov/sites/default/files/pdf-content/1995/933/wisner.pdf)；[Fernholm et al. 2013](https://doi.org/10.1111/jzs.12035)（访问日期均为：2026-08-31）
3. 加拿大 DFO 已明确指出 Atlantic Hagfish 的东北大西洋种是 *M. glutinosa*，西北大西洋种是 *M. limosa*，并从 2021 年起在调查资料中改用后者。加拿大和美国记录不进入本档案的 `countries`。[DFO catch revision](https://waves-vagues.dfo-mpo.gc.ca/library-bibliotheque/41045324.pdf)（访问日期：2026-08-31）
4. 中文主名采用 TODO 和国家海洋生物博物馆资料中的“大西洋盲鳗”。英文主名采用 Atlantic Hagfish；`Common Hagfish` 可作搜索别名，`Slime Eel` 容易误导为鳗鲡类，只可作带解释的历史俗名，不建议入库。[NMMBA](https://helloocean.nmmba.gov.tw/nmmba_front/SpecimenDetail.aspx?id=39639)（访问日期：2026-08-31）
5. Catalog of Fishes 仍列 *M. glutinosa* 为有效种，但指出林奈原始材料可能包含多于一个物种，仍需选定 lectotype。该问题不阻止使用现行接受名，却要求页面避免把所有历史“Atlantic hagfish”记录合并。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=6425)（访问日期：2026-08-31）
6. 2025 年染色体级基因组来自瑞典 Kristineberg 的东大西洋个体，可作为现行物种的可靠凭证。论文背景仍沿用了 95 厘米和西大西洋渔业等混合资料；本简报只采用其标本、基因组与分类信息，不采用混合生态概述。[Hay-Schmidt et al. 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12699212/)（访问日期：2026-08-31）
7. IUCN 条目为无危 LC，引文发布于 2011 年，实际评估日期为 2009-11-12。字段应写 `conservation('LC', 'unknown', 2009)`，而不是 2011 或查询年 2026。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2011-1.RLTS.T196057A8988080.en)；[FishBase current summary](https://www.fishbase.se/summary/Myxine-glutinosa.html)（访问日期均为：2026-08-31）
8. 该评估早于 2013 年分子确认的东西大西洋拆分，并沿用跨大西洋广义种概念。LC 可显示，但必须提示需要按现行种界重评；LC 不能推出严格东大西洋种群稳定。
9. 没有可核验的东大西洋全球成熟个体数或长期变化率。`trend` 使用 `unknown`，`criteria` 和 `metrics.estimatedMatureIndividuals` 省略。
10. 严格分布为东北及东部大西洋：从巴伦支海、挪威海与北海，经不列颠群岛和欧洲大西洋岸至伊比利亚半岛、摩洛哥及西地中海边缘。西大西洋、加拿大、美国和墨西哥湾记录排除。[Fernholm et al. 2013](https://doi.org/10.1111/jzs.12035)；[FAO Eastern Central Atlantic](https://www.fao.org/3/i5712e/i5712e.pdf)（访问日期均为：2026-08-31）
11. 保守国家数组可收录俄罗斯、挪威、瑞典、丹麦、德国、荷兰、比利时、英国、爱尔兰、法国、西班牙、葡萄牙、摩洛哥、阿尔及利亚、意大利和克罗地亚。它是用于地图筛选的编辑清单，不是每个边缘海域均有遗传复核的完整名录。
12. 主要生境是冷水大陆架与陆坡的稳定软泥底。北海研究把出现与软泥、高盐度和相对稳定水团联系起来；拖网等常规底栖采样会低估能游动和钻泥的盲鳗。[Shelton 1978](https://doi.org/10.1017/S0025315400024413)（访问日期：2026-08-31）
13. 地中海区域资料记录约 40—1200 米，但这种区域范围不能与混合跨大西洋数据库拼成全物种精确上下限。建议在 habitat 文本使用“大陆架至陆坡、可超过 1000 米”，不填 `metrics.maxDiveDepthM`。[IUCN Mediterranean report](https://portals.iucn.org/library/efiles/documents/RL-262-001.pdf)（访问日期：2026-08-31）
14. 东大西洋已发表体长上限采用 450 毫米。Wisner & McMillan 引用 Tambs-Lyche 的 eastern North Atlantic material 明确写“maximum 450 mm”。`measurements.length.max` 可填 `0.45 m`，note 必须说明是严格东大西洋已发表最大值，不是典型成体长度。[Wisner & McMillan 1995](https://spo.nmfs.noaa.gov/sites/default/files/pdf-content/1995/933/wisner.pdf)（访问日期：2026-08-31）
15. 常见的 79 或 95 厘米记录、45—60 厘米“常见长度”和加拿大长度重量关系来自西大西洋旧广义名，现应归 *M. limosa*，全部排除。体重、寿命、速度和成体典型区间留空。
16. 身体细长、柔软、无鳞且无成对鳍；不是鳗鲡类。头部有单一正中鼻孔、六根感觉触须、皮下退化眼，以及能前伸和回收的角质齿板；没有上下颌。[Andres & von Düring 1993](https://doi.org/10.1007/BF00318754)（访问日期：2026-08-31）
17. 标准呼吸结构为六对内部鳃囊，但每侧鳃囊的输出管汇合后只通过一个外部鳃孔排水。左侧鳃孔还与咽皮管相连。不能把“六对鳃囊”画成六对外部鳃裂。[Johansen & Hol 1960](https://doi.org/10.1242/jeb.37.3.474)；[FAO Mediterranean guide](https://www.fao.org/4/x0170f/x0170f02.pdf)（访问日期均为：2026-08-31）
18. 水从单一鼻孔进入，由帆状结构推动，经咽部进入圆囊状鳃囊，再从左右各一个外部鳃孔排出。少数标本可多一个小鳃囊，这是个体变异，不应在主图画成固定“七对鳃”。
19. 北海胃含物和生态研究支持机会性肉食与食腐，食物包括北方长额虾、其他底栖无脊椎动物和鱼类腐肉。页面不可把“只吃死鱼”写成唯一食性，也不可导入西大西洋食物偏好比例。[Shelton 1978](https://doi.org/10.1017/S0025315400024413)（访问日期：2026-08-31）
20. 挪威 Sognefjord 的诱饵相机直接记录 *M. glutinosa* 取食水母尸体。在两次 250 和 287 米部署中，盲鳗分别在 2 和 14 分钟到达；这证明能利用水母腐食，不能当作典型响应时间或全食谱比例。[Dunlop et al. 2017](https://doi.org/10.1038/s41598-017-17557-x)（访问日期：2026-08-31）
21. 个体会钻入软泥并在底部附近游动。严格东大西洋口径缺少统一昼夜节律量化，`activity` 不写“夜行性”。白天和夜间各一次的诱饵部署也不足以比较昼夜活动。
22. 黏液由两类主要成分形成：卷曲蛋白丝束与黏蛋白囊泡。成熟丝细胞内的一根卷曲蛋白丝可长达 10 厘米。取自挪威 Ålesund 峡湾个体的实验显示，新鲜分泌物接触海水后不到一秒形成纤维水凝胶；离子强度及 Ca²⁺、Mg²⁺影响丝束展开、囊泡破裂与保水。[Fernholm 1981](https://doi.org/10.1111/j.1463-6395.1981.tb00623.x)；[Böni et al. 2018](https://doi.org/10.1038/s41598-018-27975-0)（访问日期均为：2026-08-31）
23. “不到一秒”是新鲜分泌物在受控混合实验中的部署时间，不是野外遭捕食个体的固定反应时，也不证明一只动物产生的总体积。图像只可表现半透明丝状黏液云，不画夸张的固体网或精确升数。
24. 盲鳗黏液可作为防御，但直接拍到堵塞捕食者鳃的经典野外论文研究的是新西兰盲鳗，不是本种。页面可写“盲鳗科层面的鳃部威慑机制”，不可写成东大西洋 *M. glutinosa* 的直接野外观察。
25. Oslofjord 的东大西洋个体观察记录了打结及利用身体结清除黏液。2020 年量化研究中的四只所谓 *M. glutinosa* 来自 Massachusetts，按现行种界应为 *M. limosa*；其 10 次逃脱和 5 次 overhand 数值不能归入本种。[Adam 1960](https://doi.org/10.1038/188595a0)；[Haney et al. 2020](https://doi.org/10.1111/jzo.12752)（访问日期均为：2026-08-31）
26. 图片可画一个简单 overhand body knot，caption 只写“东大西洋圈养观察证实能打结并清除黏液”。不能声称东大西洋个体只打这一种结，也不能从静帧推断正在逃脱、进食或清理身体。
27. 严格东大西洋繁殖资料很薄弱。可保守写“卵生，成熟卵具有端部锚状丝；受精、产卵地点、季节、胚胎发育和早期生活史仍缺少完整观察”。加拿大的窝卵数、成熟体长、季节性激素和渔业恢复力资料现应归 *M. limosa*，不得落库。
28. IUCN 地中海综述称当地不受商业捕捞且未识别重大威胁，但这只是区域结论。不能据此写“全范围无威胁”或“无须保护”。[IUCN Mediterranean report](https://portals.iucn.org/library/efiles/documents/RL-262-001.pdf)（访问日期：2026-08-31）
29. Skagerrak 化学武器沉船附近采集个体出现多项氧化应激生物标志物差异，支持局地污染的生物效应；研究没有证明物种级数量下降。[Ahvo et al. 2020](https://doi.org/10.1016/j.marenvres.2020.105097)（访问日期：2026-08-31）
30. 可列的其他潜在压力是底拖网和海底工程对软泥生境的扰动、兼捕及污染，但现有资料没有给出全范围影响量。正文应把它们标成“需监测的局地风险”，不是 IUCN 已确认的全球重大威胁。
31. 保护行动优先更新 IUCN 评估、保存凭证并用遗传数据区分 *M. glutinosa* 与 *M. limosa*、统一调查和渔获名称、记录陷阱与兼捕的努力量/体长/性别/深度、监测污染沉船，并在受扰动地点保护稳定软泥底。
32. 空陷阱图只表示一次画面中零捕获，不能证明缺失、下降、保护成功或捕捞失败；画面不得使用加拿大渔业标识、配额或西大西洋物种数据。

## 推荐完整 Species 字段

~~~ts
id: 'species-myxine-glutinosa',
slug: 'atlantic-hagfish',
names: {
  zh: '大西洋盲鳗',
  en: 'Atlantic Hagfish',
  aliases: ['Common Hagfish', 'Common Hag'],
},
scientificName: 'Myxine glutinosa',
taxonomy: {
  kingdom: { scientificName: 'Animalia', zhName: '动物界' },
  phylum: { scientificName: 'Chordata', zhName: '脊索动物门' },
  class: { scientificName: 'Myxini', zhName: '盲鳗纲' },
  order: { scientificName: 'Myxiniformes', zhName: '盲鳗目' },
  family: { scientificName: 'Myxinidae', zhName: '盲鳗科' },
  genus: { scientificName: 'Myxine', zhName: '盲鳗属' },
},
conservation: conservation('LC', 'unknown', 2009),
distribution: {
  realms: ['marine'],
  continents: ['欧洲', '非洲'],
  regions: [
    '巴伦支海、挪威海与北海',
    '斯卡格拉克海峡、卡特加特海峡与西波罗的海边缘',
    '不列颠群岛及欧洲大西洋大陆架',
    '伊比利亚半岛、摩洛哥与西地中海边缘',
  ],
  countries: [
    '俄罗斯', '挪威', '瑞典', '丹麦', '德国', '荷兰', '比利时', '英国',
    '爱尔兰', '法国', '西班牙', '葡萄牙', '摩洛哥', '阿尔及利亚', '意大利', '克罗地亚',
  ],
  range:
    '严格按现行种界分布于东北和东部大西洋，从巴伦支海、挪威海与北海向南，经欧洲大西洋岸至伊比利亚半岛、摩洛哥及西地中海边缘。西大西洋旧称 Myxine glutinosa 的记录现归 Myxine limosa，不纳入本范围。',
  center: { lat: 57, lng: 3 },
},
habitats: [
  {
    name: '冷水软泥海底',
    realm: 'marine',
    isPrimary: true,
    description: '大陆架与上部陆坡上稳定、较高盐度的泥质底，个体可钻入沉积物。',
  },
  {
    name: '峡湾深水盆地',
    realm: 'marine',
    description: '挪威峡湾的深水泥底与富有机碎屑区，诱饵相机记录过食腐活动。',
  },
  {
    name: '西地中海陆坡泥底',
    realm: 'marine',
    description: '西地中海和北非近海的少见记录；区域资料约为 40—1200 米，不能外推为全种精确深度范围。',
  },
],
measurements: {
  length: {
    max: 0.45,
    unit: 'm',
    note: '严格东大西洋材料的已发表最大总长；不是典型成体长度。79—95 cm 等值来自西大西洋旧广义名，已排除。',
  },
},
diet: {
  types: ['carnivore'],
  foods: ['北方长额虾及其他底栖无脊椎动物', '鱼类腐肉', '实验证实会取食的水母尸体'],
  description:
    '机会性底栖肉食者和食腐者。北海资料支持取食虾类与其他底栖动物，挪威峡湾诱饵相机直接记录了水母尸体取食；现有证据不足以给出全范围食物比例。',
},
activity: [
  '在大陆架和陆坡软泥底活动',
  '可钻入泥中并在近底层游动',
  '依靠鼻部嗅觉与触须接触寻找食物',
  '受扰时释放纤维与黏蛋白组成的防御黏液',
  '能将身体打结并清除体表黏液',
  '严格东大西洋口径下缺少统一昼夜节律证据',
],
tags: ['盲鳗纲', '无颌类', '东大西洋', '海洋底栖', '软泥底', '食腐', '防御黏液', '身体打结'],
summary:
  '大西洋盲鳗是东大西洋冷水软泥底的无颌动物：它以单一鼻孔和感觉触须寻找食物，用六对内部鳃囊呼吸，并能在受扰时让蛋白丝与黏蛋白迅速形成防御黏液。',
description:
  '大西洋盲鳗属于盲鳗纲盲鳗科，身体细长无鳞，没有成对鳍和上下颌；口内角质齿板可以前伸抓取食物。现行分类把东大西洋 Myxine glutinosa 与西大西洋 Myxine limosa 分开，因此北美体尺、繁殖和渔业资料不能继续混用。严格东大西洋已发表最大总长为 45 厘米。它生活在大陆架至陆坡的稳定软泥底，既捕食底栖无脊椎动物，也利用鱼类与水母腐肉。六对内部鳃囊的排水管在每侧汇入一个外部鳃孔；受扰时，侧面黏液腺释放卷曲蛋白丝束和黏蛋白囊泡，在海水中快速形成纤维水凝胶。IUCN 仍沿用 2009 年无危评估，但该评估早于现行东西大西洋拆分，严格东大西洋种群趋势仍未知。',
metrics: {},
featured: true,
publishedAt: '2026-08-31',
updatedAt: '2026-08-31',
~~~

`center` 只控制地图初始视口，不表示模式产地、分布中心或密度中心。`metrics` 保持空对象：45 厘米是最大记录而非成体典型区间，深度资料又存在区域和历史种名边界。

## 六个 story candidates

~~~ts
storySections: [
  {
    key: 'one-name-two-atlantics',
    label: '种名拆分',
    title: '同一个旧名，曾跨越整个北大西洋',
    body:
      '北美文献长期把西大西洋盲鳗写成 Myxine glutinosa。1995 年形态修订恢复 Myxine limosa，2013 年 16S 与 COI 数据确认它与东大西洋种不同。今天的大西洋盲鳗档案因此只采用欧洲与北非一侧资料；加拿大渔业和 95 厘米体长都属于被拆出的西大西洋种。',
  },
  {
    key: 'six-pouches-two-exits',
    label: '鳃囊呼吸',
    title: '六对鳃囊，外面却只见左右两个出口',
    body:
      '水从头端单一鼻孔进入，帆状结构把水推过咽部和六对圆囊状鳃。每侧六条排水管在皮下汇合，最终只从一个外部鳃孔排出；左侧还接入咽皮管。六对鳃囊不是六对外露鳃裂。',
  },
  {
    key: 'life-under-soft-mud',
    label: '软泥底栖',
    title: '泥面下的活动让普通调查容易漏掉它',
    body:
      '北海研究把大西洋盲鳗与稳定、高盐度软泥底联系起来。它能钻泥，也能离开底面游动；只用底栖抓斗或常规拖网会低估这种动物。诱饵陷阱和相机可以补足检出，但一次空陷阱绝不等于当地没有盲鳗。',
  },
  {
    key: 'slime-built-in-seawater',
    label: '纤维黏液',
    title: '海水完成了防御材料的最后一步',
    body:
      '黏液腺释放的是卷曲蛋白丝束和装有黏蛋白的囊泡。挪威个体的新鲜分泌物实验显示，海水的离子强度和二价阳离子协调丝束展开、囊泡破裂与保水，不到一秒便形成纤维水凝胶。这个时间来自材料混合实验，不是野外捕食反应计时。',
  },
  {
    key: 'knot-without-a-jaw',
    label: '身体打结',
    title: '没有上下颌，整条身体也能成为工具',
    body:
      'Oslofjord 的早期观察记录大西洋盲鳗打结并把结沿身体移动，以清除黏液。后来的精细逃脱实验使用了美国 Massachusetts 个体，现应归 Myxine limosa；因此本种能打结有东大西洋证据，结型偏好和逃脱次数却不能照搬北美数据。',
  },
  {
    key: 'least-concern-needs-a-recheck',
    label: '旧评估',
    title: '无危标签早于现行种界',
    body:
      'IUCN 的 LC 评估日期是 2009 年，当时数据库仍把东西大西洋种群混在一个名称下。严格东大西洋的数量与趋势没有可靠综合；Skagerrak 沉船附近又已记录局地污染效应。更新评估、保存凭证和统一渔获种名，比从 LC 推导“稳定”更重要。',
  },
],
~~~

## 推荐 key facts

~~~ts
keyFacts: [
  '现行 Myxine glutinosa 只采用东大西洋口径，西大西洋种为 Myxine limosa。',
  'WoRMS 分别接受 Myxine glutinosa 和 Myxine limosa。',
  '2013 年 16S 与 COI 数据确认东西大西洋两种不同。',
  '2025 年基因组标本采自瑞典 Kristineberg。',
  '它是无颌类，不是鳗鲡类。',
  '身体无鳞，也没有成对鳍。',
  '头端只有一个正中鼻孔。',
  '口周与鼻孔周围的触须参与接触感知。',
  '皮下退化眼不能支持把它写成完全无光感的绝对盲眼。',
  '它没有上下颌，角质齿板可以前伸和回收。',
  '标准解剖有六对内部鳃囊。',
  '每侧鳃囊排水管只汇入一个外部鳃孔。',
  '左外部鳃孔与咽皮管相连。',
  '严格东大西洋已发表最大总长为 45 厘米。',
  '79—95 厘米等大型记录来自西大西洋旧广义名，已排除。',
  '主要生活在冷水大陆架与陆坡的稳定软泥底。',
  '钻泥和游动会使常规底栖调查低估它。',
  '北海资料支持取食虾类和其他底栖无脊椎动物。',
  '挪威峡湾相机直接记录它取食水母尸体。',
  '两次水母诱饵部署中的 2 和 14 分钟到达时间不是典型响应时间。',
  '黏液由卷曲蛋白丝束与黏蛋白囊泡共同形成。',
  '挪威来源分泌物在海水实验中不到一秒形成纤维水凝胶。',
  '野外捕食者鳃堵塞经典录像来自其他盲鳗，不能冒充本种实证。',
  'Oslofjord 观察证实它能把身体打结并清除黏液。',
  '美国样本的 2020 年打结次数现应归 Myxine limosa。',
  '严格东大西洋繁殖季、窝卵数和成熟体长仍缺少可靠现代综合。',
  'IUCN LC 的实际评估日期为 2009 年，早于现行种界确认。',
  '全球趋势应录为 unknown，不能从 LC 推导 stable。',
  'Skagerrak 沉船附近个体出现局地污染生物标志物效应。',
  '一次空陷阱只能表示该次画面没有捕获，不能证明缺失或下降。',
],
~~~

## 威胁与保护行动

~~~ts
threats: [
  'IUCN 2009 评估早于东西大西洋种界确认，严格东大西洋风险可能被旧广义范围稀释',
  'Skagerrak 化学武器沉船附近已记录局地污染暴露与氧化应激生物标志物效应',
  '底拖网、海底工程和沉积物扰动可能破坏稳定软泥微生境，但缺少全范围影响量',
  '兼捕和零散渔获的物种名称仍可能与 Myxine limosa 混用，妨碍趋势判断',
  '繁殖、年龄、寿命、成熟体长和严格东大西洋数量趋势资料不足',
],
conservationActions: [
  '按现行 Myxine glutinosa 与 Myxine limosa 种界更新 IUCN 全球评估',
  '为边缘分布、调查和渔获记录保存凭证，并使用条形码或基因组数据复核物种',
  '统一欧洲与北美数据库、调查及渔业报告中的两个种名',
  '以标准化诱饵陷阱和相机记录努力量、零捕获、体长、性别、深度与底质',
  '持续监测 Skagerrak 等沉船污染点的组织污染物和生物效应',
  '在海底工程或高强度拖网区域识别并减少对稳定软泥底的局地扰动',
],
~~~

地中海“没有已知重大威胁”是区域评估结论；污染、兼捕和海床扰动则是局地实证或待量化压力。两者不可合并成“全球受威胁”或“全球绝对安全”。

## 四个 bounded featured stats

~~~ts
featuredStats: [
  {
    key: 'eastern-atlantic-maximum-length',
    label: '东大西洋最长记录',
    value: '45',
    unit: '厘米',
    note: '已发表最大总长，不是典型成体；排除西大西洋 79—95 cm 旧广义名记录',
  },
  {
    key: 'internal-gill-pouch-pairs',
    label: '内部鳃囊',
    value: '6',
    unit: '对',
    note: '标准解剖；每侧排水管汇入一个外部鳃孔，不是六对外露鳃裂',
  },
  {
    key: 'laboratory-slime-deployment',
    label: '黏液材料展开',
    value: '<1',
    unit: '秒',
    note: '挪威个体新鲜分泌物的受控海水混合实验，不是野外固定反应时',
  },
  {
    key: 'jelly-carrion-arrival',
    label: '水母诱饵到达',
    value: '2 / 14',
    unit: '分钟',
    note: 'Sognefjord 仅两次 250 与 287 m 部署的观测值，不代表典型响应',
  },
],
~~~

## 六张图片的场景、prompt、caption 与验收边界

六张图均是科学情景重建，不可当作标本、野外证据或测量工具。外形保持灰粉至浅灰色、细长无鳞、无成对鳍、头钝、单一鼻孔和感觉触须；不画鳗鲡类鳞片、成对眼球、上下颌或多排外露鳃裂。

| basename | 场景与生成 prompt | 可用 caption | 必须保留的边界 |
| --- | --- | --- | --- |
| `01-muddy-seafloor-adult-cover` | 一只完整细长成体伏在昏暗冷水软泥海底，灰粉色无鳞皮肤、钝头和低矮尾鳍褶可辨；自然纪录片微距，周围只有少量泥云。 | “东大西洋冷水软泥底上的大西洋盲鳗科学情景重建。” | 外形不能校准体长、体重、性别、年龄、地点、深度或昼夜活动；不得画成鳗鲡。 |
| `02-blunt-head-and-sensory-tentacles` | 头部近景，突出单一正中鼻孔、口周与鼻孔周围触须、无外露眼球和无上下颌口部；背景为暗色泥底。 | “单一鼻孔和感觉触须帮助盲鳗在昏暗海底接触并追踪化学线索。” | 透视不能用来清点全部触须、角质齿或黏液孔，也不能证明完全失明、嗅觉距离或猎物位置。 |
| `03-mud-burrow-benthic-habitat` | 个体半埋在稳定软泥中，只露头与前段，轻微泥粒悬浮；可用概念性浅剖面表现松软沉积物。 | “大西洋盲鳗能钻入软泥；这种活动也会降低常规底栖调查的检出率。” | 不能证明洞由该个体建造、长期占用或具有固定深度；不标定 40—1200 m、盐度、温度或夜间。 |
| `04-slime-thread-defense-cloud` | 受扰个体周围形成半透明、细丝交织的稀薄黏液云；保持水凝胶质感，不画实心绳网或捕食者。 | “卷曲蛋白丝束与黏蛋白囊泡接触海水后形成纤维黏液。” | 图中丝线是尺度放大的材料重建；不能证明总体积、野外反应时、捕食事件或本种直接堵塞捕食者鳃。 |
| `05-single-body-overhand-knot` | 一只个体把柔软身体打成一个清楚、简单的 overhand knot，背景保持无干扰的泥底或实验槽式中性环境。 | “Oslofjord 观察证实大西洋盲鳗能打结并借结清除体表黏液。” | 单帧不能确定结形成方向、用途、频率或野外情境；不得引用 Massachusetts 样本的 10 次逃脱和 5 次 overhand 作为本种数值。 |
| `06-empty-trap-fishery-monitoring` | 匿名小型工作船上恰有两名工作人员，检查一个打开的空圆筒穿孔采样陷阱并记录观察；无品牌、船名和国家标识，零动物、零饵料可见。 | “两名工作人员检查一次空的通用圆筒采样陷阱并记录观察。” | 零可见动物只表示这一静帧没有捕获，不能证明检出、缺失、丰度、趋势、渔具合规或管理成效；器具不能称特定制式盲鳗陷阱，也不使用加拿大配额或渔业叙事。 |

推荐媒体字段：

~~~ts
media: {
  image: './images/species/atlantic-hagfish/01-muddy-seafloor-adult-cover.webp',
  alt: '一只灰粉色细长大西洋盲鳗伏在暗色软泥海底',
  focalPoint: { x: 0.5, y: 0.5 },
  credit: 'Fauna Atlas · AI 生成科学情景重建',
  gallery: [
    {
      image: './images/species/atlantic-hagfish/02-blunt-head-and-sensory-tentacles.webp',
      alt: '大西洋盲鳗钝圆头部、正中鼻孔和周围触须近景',
      title: '单一鼻孔与感觉触须',
      caption: 'AI生成科学情景重建；透视不能用于清点全部触须、角质齿或黏液孔，也不能证明完全失明或嗅觉距离。',
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/atlantic-hagfish/03-mud-burrow-benthic-habitat.webp',
      alt: '一只大西洋盲鳗半埋在松软泥质沉积物中',
      title: '软泥底栖与钻泥',
      caption: 'AI生成科学情景重建；画面不能证明洞穴深度、长期占用、实际水深、盐度、温度或昼夜节律。',
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/atlantic-hagfish/04-slime-thread-defense-cloud.webp',
      alt: '大西洋盲鳗周围展开半透明细丝状黏液云',
      title: '蛋白丝与黏蛋白形成防御黏液',
      caption: 'AI生成科学材料重建；细丝被尺度放大，画面不能量化体积、反应时或证明本种在野外直接堵塞捕食者鳃。',
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/atlantic-hagfish/05-single-body-overhand-knot.webp',
      alt: '一只大西洋盲鳗把身体弯成单个简单反手结',
      title: '柔软身体打结',
      caption: 'AI生成科学情景重建；静帧不能判断结的形成方向、用途或频率，北美量化实验数值不属于现行东大西洋种。',
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/atlantic-hagfish/06-empty-trap-fishery-monitoring.webp',
      alt: '阴天小型工作船上，两名工作人员检查一个打开的空圆筒穿孔采样陷阱，其中一人持记录板，画面没有动物或饵料',
      title: '记录一次空陷阱检查',
      caption: 'AI生成科学监测情景重建；通用圆筒器具不能识别为特定制式盲鳗陷阱，零捕获不能证明检出、缺失、丰度、趋势、合规或保护成效，也不代表任何国家的具体渔业。',
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
  ],
},
~~~

## 恰好 24 个可直接落库的 SpeciesSource

以下 URL 全部唯一、使用 HTTPS，并覆盖 schema 的五种 kind。加拿大和美国来源保留在数组中，是为了记录分类纠错和明确排除旧广义名数据，不表示其生态数值可用于本种。

~~~ts
const atlanticHagfishSources = [
  {
    title: 'WoRMS — Myxine glutinosa (AphiaID 101170)',
    url: 'https://www.marinespecies.org/rest/AphiaRecordByAphiaID/101170',
    kind: 'taxonomy',
    accessedAt: '2026-08-31',
  },
  {
    title: 'WoRMS — Myxine limosa (AphiaID 271309)',
    url: 'https://www.marinespecies.org/rest/AphiaRecordByAphiaID/271309',
    kind: 'taxonomy',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Eschmeyer\'s Catalog of Fishes — Myxine glutinosa',
    url: 'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=6425',
    kind: 'taxonomy',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Hagfish phylogeny and taxonomy, with description of the new genus Rubicundus',
    url: 'https://doi.org/10.1111/jzs.12035',
    kind: 'taxonomy',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Review of New World hagfishes of the genus Myxine',
    url: 'https://spo.nmfs.noaa.gov/sites/default/files/pdf-content/1995/933/wisner.pdf',
    kind: 'taxonomy',
    accessedAt: '2026-08-31',
  },
  {
    title: 'DFO — Revision of fish catches from the CCGS Teleost ecosystem survey',
    url: 'https://waves-vagues.dfo-mpo.gc.ca/library-bibliotheque/41045324.pdf',
    kind: 'taxonomy',
    accessedAt: '2026-08-31',
  },
  {
    title: 'The genome sequence of the Hagfish, Myxine glutinosa',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12699212/',
    kind: 'taxonomy',
    accessedAt: '2026-08-31',
  },
  {
    title: 'National Museum of Marine Biology and Aquarium — Myxine glutinosa specimen',
    url: 'https://helloocean.nmmba.gov.tw/nmmba_front/SpecimenDetail.aspx?id=39639',
    kind: 'general',
    accessedAt: '2026-08-31',
  },
  {
    title: 'IUCN Red List — Myxine glutinosa assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2011-1.RLTS.T196057A8988080.en',
    kind: 'conservation',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Cutaneous and subcutaneous sensory receptors of Myxine glutinosa',
    url: 'https://doi.org/10.1007/BF00318754',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'IUCN — Overview of the Conservation Status of Mediterranean Marine Fishes',
    url: 'https://portals.iucn.org/library/efiles/documents/RL-262-001.pdf',
    kind: 'conservation',
    accessedAt: '2026-08-31',
  },
  {
    title: 'FAO — The Living Marine Resources of the Eastern Central Atlantic, Volume 2',
    url: 'https://www.fao.org/3/i5712e/i5712e.pdf',
    kind: 'distribution',
    accessedAt: '2026-08-31',
  },
  {
    title: 'UK Government SEA8 — Fish and fish assemblages of the British Isles',
    url: 'https://assets.publishing.service.gov.uk/media/5a7c89e1e5274a0bb7cb7b36/SEA8_TechRep_Fish_of_BI.pdf',
    kind: 'distribution',
    accessedAt: '2026-08-31',
  },
  {
    title: 'On the Feeding of the Hagfish Myxine glutinosa in the North Sea',
    url: 'https://doi.org/10.1017/S0025315400024413',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Direct evidence of an efficient energy transfer pathway from jellyfish carcasses',
    url: 'https://doi.org/10.1038/s41598-017-17557-x',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Rapid scavenging of jellyfish carcasses reveals importance to deep-sea food webs',
    url: 'https://doi.org/10.1098/rspb.2014.2210',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'A cineradiographic study of respiration in Myxine glutinosa',
    url: 'https://doi.org/10.1242/jeb.37.3.474',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Effect of ionic strength and seawater cations on hagfish slime formation',
    url: 'https://doi.org/10.1038/s41598-018-27975-0',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Different Types of Body Movement in the Hagfish, Myxine glutinosa',
    url: 'https://doi.org/10.1038/188595a0',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Characterization of body knotting behavior used for escape in hagfishes',
    url: 'https://doi.org/10.1111/jzo.12752',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Emptying and refilling of slime glands in Atlantic and Pacific hagfishes',
    url: 'https://doi.org/10.1242/jeb.172254',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Thread Cells from the Slime Glands of Hagfish',
    url: 'https://doi.org/10.1111/j.1463-6395.1981.tb00623.x',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'The use of Atlantic hagfish as a bioindicator near dumped chemical warfare agents',
    url: 'https://doi.org/10.1016/j.marenvres.2020.105097',
    kind: 'conservation',
    accessedAt: '2026-08-31',
  },
  {
    title: 'FishBase — Myxine glutinosa current summary and IUCN assessment date',
    url: 'https://www.fishbase.se/summary/Myxine-glutinosa.html',
    kind: 'general',
    accessedAt: '2026-08-31',
  },
] as const satisfies readonly SpeciesSource[];
~~~

计数：taxonomy 7、conservation 3、distribution 2、ecology 10、general 2，总计 24。

## 来源逐项主张与边界

| 来源 | 本简报采用的主张 | 不采用或必须限定的内容 |
| --- | --- | --- |
| WoRMS 两条记录 | 两个接受种及现行分类链。 | 不用 WoRMS occurrence 自动生成国家数组。 |
| Catalog of Fishes | *M. glutinosa* 有效；原始材料可能混种，需 lectotype。 | 页面所列西大西洋分布仍混杂，不采用。 |
| Wisner & McMillan 1995 | 恢复 *M. limosa*；东种最大 450 mm；两种颜色与体尺差异。 | 新世界样本的繁殖、体尺和生态不属于东种。 |
| Fernholm et al. 2013 | 16S/COI 确认东西两种不同。 | 分子树不表示页面分类图谱中的演化时间。 |
| DFO catch revision | 加拿大调查应改名 *M. limosa*。 | 不把加拿大渔获量、范围或管理写给本种。 |
| 2025 genome paper | 瑞典凭证、染色体级基因组与分类链。 | 背景中的 95 cm、Greenland 和西大西洋渔业混合段排除。 |
| IUCN 2009/2011 | LC；评估日期 2009-11-12。 | 评估早于拆分；不能推出严格东种稳定。 |
| IUCN Mediterranean | 区域 LC、约 40—1200 m、当地非商业目标且无已知重大威胁。 | 不能替代全球现行种界评估。 |
| FAO 与 UK SEA8 | 东大西洋南缘、欧洲范围及大陆架/陆坡生境。 | 不把区域深度拼成无误差的全球范围。 |
| Shelton 1978 | 北海软泥、高盐稳定水团、食物与采样偏差。 | 单一海域不能定义全范围食谱或盐度阈值。 |
| Sognefjord 相机论文 | 水母腐食及两次到达时间。 | 2/14 分钟不是典型响应；两次部署不能判断昼夜节律。 |
| Johansen & Hol 1960 | 圆囊状鳃、排水管汇合、左右外孔与咽皮管。 | 六对内部鳃囊不能画成六对外部鳃裂。 |
| Andres & von Düring 1993 | 六根头部感觉触须及其感觉神经分布。 | AI 头部图不能替代标本计数。 |
| Fernholm 1981 | 成熟丝细胞的一根卷曲蛋白丝可长达 10 厘米。 | 单细胞丝长不能换算成一团黏液的总体积或丝线总数。 |
| Böni et al. 2018 | 挪威个体黏液材料、不到一秒展开、海水离子作用。 | 受控材料实验不是野外防御时间或总体积。 |
| Adam 1960 | Oslofjord 东种能打结并清除黏液。 | 缺少现代结型频率量化。 |
| Haney 2020 | 说明后续北美“*M. glutinosa*”量化为何必须排除。 | Gloucester, Massachusetts 个体按现行种界应为 *M. limosa*。 |
| Schorno 2018 | 说明 3—4 周补充时间的来源边界。 | Passamaquoddy Bay 个体属西种，不能作为本种 featured stat。 |
| Kavanaugh 2005 | 说明季节性繁殖说法来自 Gulf of Maine。 | 现应归 *M. limosa*，不进入严格东种繁殖字段。 |
| Ahvo et al. 2020 | Skagerrak 污染点附近的局地生物效应。 | 不证明全种数量下降或污染是全球主要威胁。 |

## 冲突与禁止表述

| 不安全写法 | 问题 | 安全写法 |
| --- | --- | --- |
| “分布于加拿大至欧洲的整个北大西洋” | 合并了现行 *M. limosa*。 | “现行 *M. glutinosa* 采用东大西洋范围。” |
| “最长 95 厘米” | 大型记录来自西大西洋旧广义名。 | “东大西洋已发表最大总长 45 厘米。” |
| “通常 45—60 厘米” | 仍主要来自北美样本。 | 不填典型成体区间。 |
| “全球种群稳定” | LC 不能推出 stable，旧评估又早于拆分。 | “IUCN LC；严格东大西洋趋势未知。” |
| “六对外部鳃孔” | 把内部鳃囊误画成外部开口。 | “六对内部鳃囊，每侧一个汇合外孔。” |
| “完全没有视觉” | 退化皮下眼不等于已证实零光感。 | “眼退化并位于皮下，视觉能力有限。” |
| “只吃死鱼” | 北海与峡湾资料支持更宽的机会性肉食。 | “捕食底栖动物并机会性食腐。” |
| “典型在 2 分钟找到腐肉” | 只有两次部署，另一次为 14 分钟。 | “两次水母诱饵观察分别为 2 与 14 分钟。” |
| “一秒内向捕食者喷出黏液” | 小于一秒来自分泌物混合实验。 | “新鲜分泌物在受控海水实验中不到一秒部署。” |
| “黏液已实证堵塞本种捕食者的鳃” | 经典野外录像是其他盲鳗。 | “黏液具有盲鳗科层面的鳃部威慑机制。” |
| “只打反手结，10 次中 5 次成功” | 量化样本来自 Massachusetts，现属 *M. limosa*。 | “Oslofjord 观察证实能打结和清除黏液，频率未知。” |
| “产 20—30 枚卵，全年繁殖” | 数值主要来自北美旧广义名。 | “卵生；东大西洋繁殖数值和物候资料不足。” |
| “加拿大捕捞威胁本种” | 加拿大目标种现为 *M. limosa*。 | 只讨论东大西洋兼捕、软泥扰动与局地污染。 |
| “空陷阱证明当地没有盲鳗” | 未知努力量、诱饵、时长和检出率。 | “本次画面零捕获，不能推断占域或趋势。” |

## 实现验收清单

- `scientificName` 为 `Myxine glutinosa`，分类链精确到 Myxinidae 与 *Myxine*。
- 文本明确接受 *M. limosa*，并排除加拿大、美国和墨西哥湾数据。
- conservation 为 LC、unknown、2009；无 criteria；`metrics` 为 `{}`。
- distribution 只有 marine，范围只写东大西洋；没有 `endemicTo`。
- length 只有 `max: 0.45 m`，note 同时写东大西洋、最大值、非典型值和排除北美记录。
- 不填体重、寿命、速度、成体典型长度、最大潜深或成熟个体数。
- 呼吸文本同时包含六对内部鳃囊、每侧一个外孔和左侧咽皮管。
- 食性文本包含底栖无脊椎动物、鱼类腐肉和有直接观察边界的水母尸体。
- 黏液文本区分东大西洋挪威实验、材料展开时间与其他盲鳗野外捕食录像。
- 打结文本使用 Oslofjord 东种观察，并排除 Massachusetts 量化样本。
- 繁殖不录入北美成熟体长、窝卵数、季节或恢复力。
- threats 区分 IUCN 区域结论、Skagerrak 局地实证和未量化潜在压力。
- 六个 story key 唯一；key facts 至少 18 条；featured stats 恰好四条且每条有边界 note。
- 六张图片 basename 与现有资产完全一致；alt 只描述可见内容，caption 不把 AI 图当证据。
- sources 恰好 24 个、URL 唯一、全为 HTTPS、五种 kind 全覆盖、访问日均为 2026-08-31。
