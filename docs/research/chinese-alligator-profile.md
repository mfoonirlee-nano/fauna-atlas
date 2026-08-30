# 扬子鳄（Chinese Alligator）物种档案研究与实现简报

- 研究对象：`Alligator sinensis`
- 建议 `slug`：`chinese-alligator`
- 研究截止日：2026-08-30
- 用途：完成 `src/data/species.ts` 中扬子鳄 TODO，并约束六张静态图片的生物学内容

证据口径：现行分类、IUCN 状态和贸易附录采用官方数据库；形态、冬眠、繁殖、发声、重引入和保护基因组优先采用原始研究。本文分别标记自然野生、放归、放归后繁殖和圈养数据。局地样本不代表整个物种。

## 核心编辑结论

1. 现行接受名为 _Alligator sinensis_ Fauvel, 1879。Reptile Database 未列出有效亚种，并把它置于鳄目 `Crocodylia`、短吻鳄科 `Alligatoridae`、短吻鳄属 `Alligator`。[Reptile Database](https://reptile-database.reptarium.cz/Alligator/sinensis)（访问日期：2026-08-30）
2. 仓库分类链建议使用 `Animalia > Chordata > Reptilia > Crocodylia > Alligatoridae > Alligator`。GBIF 接受同一物种名，但页面聚合的高阶分类显示方式不适合直接替换仓库的六阶路径。[GBIF](https://www.gbif.org/species/2441368)（访问日期：2026-08-30）
3. 英文主名采用 `Chinese Alligator`，`Yangtze Alligator` 放入别名。中文主名为“扬子鳄”，可检索别名保留“鼍”“中华鼍”“土龙”“猪婆龙”。Reptile Database 还列出 `T'o` 和 `Yow Lung`；这两种旧式转写搜索价值低，不建议加入产品别名。[Reptile Database](https://reptile-database.reptarium.cz/Alligator/sinensis)（访问日期：2026-08-30）
4. IUCN 当前条目仍为极危 `CR`，种群趋势 `decreasing`，评估年份为 2017，条目于 2018 年发布。实现中的年份必须填评估年 2017。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-1.RLTS.T867A3146005.en)；[IUCN/SSC Crocodile Specialist Group](https://www.iucncsg.org/pages/Conservation-Status.html)（访问日期均为：2026-08-30）
5. IUCN 的 2017 原始评估记录（2018 年发布）给出的完整判据是 `A1b; B1ab(ii,v)+2ab(ii,v); C1+2a(i)`，CSG 2024 年 Red List Authority 表再次逐字列出同一判据。与此相反，CSG 2019 行动计划的物种摘要印作 `CR A1c, D`，并用“占有面积三代下降超过 80%”“野外成体可能少于 50”概括风险。两组字符串不是同一评估的可互换写法：产品采用 IUCN 2017 原始记录的完整判据，把 2019 CSG 的 `A1c, D` 仅作为旧版摘要保留。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-1.RLTS.T867A3146005.en)；[CSG 2024 Red List Authority table](https://www.iucncsg.org/content_images/Darwin/SC27%20Documents.pdf)；[CSG 2019 action plan](https://www.iucncsg.org/365_docs/attachments/protarea/1726a747dff36b92c73693a8e542b872.pdf)（访问日期均为：2026-08-30）
6. CITES 当前把扬子鳄列入附录 I。附录 I 对国际贸易实行严格许可，并不等同于“任何情形都绝对禁止移动圈养个体”。[CITES species record](https://cites.org/eng/taxonomy/term/3526)（访问日期：2026-08-30）
7. 2021 年《国家重点保护野生动物名录》把扬子鳄列为国家一级保护野生动物。这个国家法律等级与 IUCN 全球灭绝风险、CITES 国际贸易附录属于三套不同体系。[国家林业和草原局、农业农村部](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml)（访问日期：2026-08-30）
8. 扬子鳄是中国特有种。历史原生范围覆盖长江中下游湿地；20 世纪末的自然野生残存种群已收缩到皖东南农业谷地中的零散池塘与湿地斑块。上海记录来自再引入；浙江长兴现有繁育与半自然恢复种群，不能写成未受干预的原生残存种群。[CSG action plan](https://www.iucncsg.org/365_docs/attachments/protarea/1726a747dff36b92c73693a8e542b872.pdf)；[Lau et al. 2025](https://doi.org/10.1017/S0030605324000978)（访问日期均为：2026-08-30）
9. Lau 等引用国家林草局 2019 年资料，把皖东南五县最后的自然野生残存种群概括为约 200 只，分布于隔离斑块。该数包括不同年龄，不是成熟个体数，也不包括随后大规模放归造成的全部新增个体。[Lau et al. 2025](https://doi.org/10.1017/S0030605324000978)（访问日期：2026-08-30）
10. 2019 年后安徽扩大放归。政府公开资料曾报告 2023 年 5 月前约 1,200 只、当年放归后约 1,400 只“野外”扬子鳄；这个口径包含人工繁育后放归个体，资料没有把自然残存个体、放归个体和野外出生后代全部拆开。[中国政府英文门户转载资料](https://govt.chinadaily.com.cn/s/202310/20/WS65337d08498ed2d7b7e9e1b8/population-in-the-wild-continues-to-rise.html)（访问日期：2026-08-30）
11. 2025 年保护基因组论文汇总的长期监测序列最高记录 773 只“observed wild population”，同时显示巢、卵和幼体数上升。论文没有完整拆分残存、放归及放归后代；244 个测序个体中只有 3 个归为野外样本。页面不能用 773 替换 IUCN 成熟个体数或全球趋势。[Pan et al. 2025](https://doi.org/10.1126/sciadv.adm7980)（访问日期：2026-08-30）
12. 圈养数量也不能当作野外种群。CSG 在 2016 年访问期间估计中国政府机构和私人养殖场合计约 28,000 只；国家林草局 2023 年的另一种设施口径称人工种群维持在约 10,000 只。时间、机构和统计范围不同，档案不应填入一个“当前全球圈养总量”。[CSG action plan](https://www.iucncsg.org/365_docs/attachments/protarea/1726a747dff36b92c73693a8e542b872.pdf)；[国家林草局](https://www.forestry.gov.cn/c/www/lcdt/513075.jhtml)（访问日期均为：2026-08-30）
13. 现有资料没有提供可复核的物种级海拔最小值和最大值。自然残存和恢复生境集中于海拔低于 100 米的丘间谷地与低地池塘，但 `<100 m` 是现存生境概括，不是 0 至 100 米的生理或绝对分布界限。`metrics.elevationM` 应留空。[CSG action plan](https://www.iucncsg.org/365_docs/attachments/protarea/1726a747dff36b92c73693a8e542b872.pdf)（访问日期：2026-08-30）
14. Smithsonian 把常见总长概括为约 1.5 米，并记录近代测得的最大个体为 2.16 米；CSG 行动计划把最大体长概括为约 2 米。1.5 米适合作为 `typical`，2.16 米只能作为有来源的极端记录，不能伪装成封闭成年范围。[Smithsonian](https://nationalzoo.si.edu/animals/chinese-alligator)；[CSG action plan](https://www.iucncsg.org/365_docs/attachments/protarea/1726a747dff36b92c73693a8e542b872.pdf)（访问日期均为：2026-08-30）
15. Smithsonian 写“多数低于 23 千克，部分可达 38.5 千克”。2001 年论文另记录一个 1.98 米、38 千克的皖地野生雄体，以及一个 2.03 米、42 千克的圈养雄体。性别、地点和饲养状态不同，档案没有可靠的野外成年雌雄合并体重范围。[Smithsonian](https://nationalzoo.si.edu/animals/chinese-alligator)；[Thorbjarnarson et al. 2001](https://doi.org/10.2307/1565892)（访问日期均为：2026-08-30）
16. 成体头宽而短、吻端微上翘，眼睑含骨板；背部与腹部都有明显骨质皮板。体色多为深灰、黑褐或暗橄榄。幼体底色深，并有浅黄横带。图片不能把它画成巨大的美洲短吻鳄、眼间隆脊明显的凯门鳄、窄吻恒河鳄或闭口时下颌第四齿外露的鳄科动物。[Smithsonian](https://nationalzoo.si.edu/animals/chinese-alligator)（访问日期：2026-08-30）
17. 食性宜写成机会性肉食：螺类、甲壳类、昆虫和鱼构成常见食物，也会取食可得的幼水鸟与啮齿类。后部钝齿适合压碎带壳猎物。Smithsonian 圈养个体吃鼠和鱼，这份饲料表不能充当野外食物比例。[Smithsonian](https://nationalzoo.si.edu/animals/chinese-alligator)（访问日期：2026-08-30）
18. 早期资料把两类螺合计为胃内容物的 63%，但公开摘要未恢复样本量、地点和季节。页面只保留定性食谱，不使用“63% 吃螺”统计卡，也不把局地胃内容物比例推广到整个物种。[IUCN 1982 species account](https://portals.iucn.org/library/efiles/documents/rd-1982-002.pdf)（访问日期：2026-08-30）
19. 1999 至 2002 年，研究者在安徽保护区记录 40 个洞穴，其中 24 个仍在使用，16 个已废弃。87.5% 的洞口位于水面上下 0.5 米附近，85% 距水体不超过 5 米。研究只测量洞口位置，不能据此画出所有洞穴内部房间、通气孔和水池。[Ding et al. 2003](https://zoores.ac.cn/article/id/1011)（访问日期：2026-08-30）
20. iScience 的多组织组学比较发现，冬眠期甲状腺激素合成、营养吸收与代谢、肌肉收缩、排泄和免疫相关通路整体下调。论文分析冬季和夏季组织与血清；它没有测量野生个体在洞穴中的能量预算，也不能证明每个种群使用同一冬眠时表。[Lin et al. 2020](https://doi.org/10.1016/j.isci.2020.101202)（访问日期：2026-08-30）
21. 论文通常把扬子鳄的越冬休眠概括为 10 月末至次年 3 月末；场地、气温和年份会改变出入洞日期。爬行动物体温随环境下降，不能把这种休眠写成哺乳动物式主动降温机制。[Lin et al. 2020](https://doi.org/10.1016/j.isci.2020.101202)（访问日期：2026-08-30）
22. 专家行动计划概括雌鳄以腐败植物材料筑丘状巢，每窝常见 10 至 40 枚卵。2001 年论文混合了两枚 1999 年野巢、历史野巢和多个圈养中心记录；圈养平均约 26 枚不能替代野巢数据。[CSG action plan](https://www.iucncsg.org/365_docs/attachments/protarea/1726a747dff36b92c73693a8e542b872.pdf)；[Thorbjarnarson et al. 2001](https://doi.org/10.2307/1565892)（访问日期均为：2026-08-30）
23. 2001 年论文综合记录雌鳄听到巢内幼体发声后开巢、协助破壳并把幼体衔到水边。证据以自然史观察为主，没有扬子鳄物种特异的因果播放实验。正文可写“叫声与开巢、搬运相伴”，不能写成已解码的固定“母幼语言”。[Thorbjarnarson et al. 2001](https://doi.org/10.2307/1565892)（访问日期：2026-08-30）
24. 2007 年半自然围栏研究记录远距离吼叫，以及 toot、吐泡、嘶声、moo、拍头和 whine 等近距离信号。研究地点是安徽繁育研究中心，信号名称来自研究者的声学分类；它们不能直接变成野外固定语义词典。[Wang et al. 2007](https://doi.org/10.1121/1.2714910)（访问日期：2026-08-30）
25. 2018 年控制孵化实验在 29°C 产生全雌、34°C 产生全雄，并比较温度敏感期前、中、后的性腺转录组。29°C 与 34°C 是实验端点，不是野外巢温的单一分界，也不能单独推出气候变化后的性比。[Lin et al. 2018](https://doi.org/10.1016/j.scib.2018.01.004)（访问日期：2026-08-30）
26. 2003 年首次试验在安徽红星放归 3 个圈养成体，研究者只对其中 2 个完成整个活动季跟踪。雄体活动范围 7.61 公顷，雌体 4.00 公顷；3 只均度过 2003 年冬季，2008 年仍在同一池塘。这个三只个体的结果不能转换成重引入存活率或物种级活动范围。[Wang et al. 2011](https://doi.org/10.1007/s11434-011-4615-8)（访问日期：2026-08-30）
27. 2023 年研究识别宣城、长兴和美国保护地三支遗传不同的繁育种群；美国种群保存了两个中国繁育群未见的变异。研究对象是繁育种群，不是三支自然野生种群。跨群混配要先评估有害变异与局地适应，不能把“遗传救援”简化成任意混养。[Yang et al. 2023](https://doi.org/10.1111/1755-0998.13702)（访问日期：2026-08-30）
28. 2025 年研究用全基因组亲缘关系帮助规划圈养配对，并发现圈养样本的杂合度高于少量野外样本、近交系数较低。野外样本只有 3 个，这一不平衡限制了圈养与野外的直接比较；论文估计的近期有效种群大小“数十”也不是个体普查数。[Pan et al. 2025](https://doi.org/10.1126/sciadv.adm7980)（访问日期：2026-08-30）

## 名称与分类实现

```ts
id: 'species-alligator-sinensis',
slug: 'chinese-alligator',
names: {
  zh: '扬子鳄',
  en: 'Chinese Alligator',
  aliases: [
    'Yangtze Alligator',
    '鼍',
    '中华鼍',
    '土龙',
    '猪婆龙',
  ],
},
scientificName: 'Alligator sinensis',
taxonomy: {
  kingdom: { scientificName: 'Animalia', zhName: '动物界' },
  phylum: { scientificName: 'Chordata', zhName: '脊索动物门' },
  class: { scientificName: 'Reptilia', zhName: '爬行纲' },
  order: { scientificName: 'Crocodylia', zhName: '鳄目' },
  family: { scientificName: 'Alligatoridae', zhName: '短吻鳄科' },
  genus: { scientificName: 'Alligator', zhName: '短吻鳄属' },
},
```

`Alligator sinensis` 已由独立的 `scientificName` 搜索字段收录，aliases 无需重复。中文资料也使用“鼍科”；本实现沿用 TODO 的“短吻鳄科”，避免同一仓库出现两个中文科名。不要加入“活化石”“恐龙同代者”或“龙的祖先”等检索别名，这些文化叙事不属于现行分类。

## IUCN、法律状态与数量口径

推荐实现：

```ts
conservation: conservation(
  'CR',
  'decreasing',
  2017,
  'A1b; B1ab(ii,v)+2ab(ii,v); C1+2a(i)',
),
```

2017 是评估年，2018 是发布日期。CSG 当前状态页在 2026 年仍把该条目列为现行评估。判据来源冲突按下表处理：

| 记录 | 原文判据 | 实现用途 |
| --- | --- | --- |
| IUCN 2017 原始评估记录，2018 年发布 | `A1b; B1ab(ii,v)+2ab(ii,v); C1+2a(i)` | 当前产品字段的直接来源。 |
| CSG 2019 行动计划物种摘要 | `A1c, D` | 保留为旧版摘要和历史风险背景，不进入产品字段。 |
| CSG 2024 Red List Authority 表 | `A1b; B1ab(ii,v)+2ab(ii,v); C1+2a(i)` | 独立复核现行完整字符串。 |

因此，`A1c, D` 不是完整判据的缩写，也不是当前评估的替代写法。测试应锁住 IUCN 2017 字符串，防止旧值回流。

数量必须分成以下口径：

| 口径 | 可用数字 | 页面边界 |
| --- | --- | --- |
| 评估期野外成熟个体 | 旧行动计划摘要提到“可能少于 50” | 只作评估背景；当前没有可复核的成熟个体上下限。 |
| 2019 自然野生残存种群 | 约 200 只，皖东南五县 | 包含不同年龄；不是成熟数，也不代表放归扩张后的总量。 |
| 2023 放归扩张后的“野外”口径 | 放归前约 1,200，当年放归后约 1,400 | 包含人工繁育后放归个体，来源未完整拆分个体起源。 |
| 2025 论文长期监测序列 | 最高 773 只 observed wild population | 不能替换 IUCN 趋势；残存、放归和后代未完整拆分。 |
| 迁地与人工种群 | 2016 CSG 约 28,000；2023 国家林草局约 10,000 | 年份和设施口径不同；两数都不是当前全球统一普查。 |

因此：

```ts
metrics: {},
```

`metrics.estimatedMatureIndividuals` 留空。IUCN 趋势也必须保持 `decreasing`，直到 IUCN 发布新评估；地方放归数量上升不自动改写全球红色名录字段。

## 分布、生境、海拔与地图

推荐字段：

```ts
distribution: {
  realms: ['freshwater', 'terrestrial'],
  continents: ['亚洲'],
  regions: [
    '长江中下游历史分布区',
    '皖东南自然野生残存斑块',
    '安徽、浙江与上海的恢复和再引入地点',
  ],
  countries: ['中国'],
  endemicTo: ['中国'],
  range:
    '中国特有。历史上分布于长江中下游湿地；现存自然野生残存种群集中在皖东南五县的隔离湿地与池塘，安徽、浙江和上海另有人工繁育、放归及其繁殖形成的恢复种群。',
  center: { lat: 30.85, lng: 118.75 },
},
```

`center` 只把地图视口放在皖东南，不代表种群中心、精确巢位或 GBIF 记录质心。GBIF  occurrence 可能混入动物园、引入点和低精度记录，不能用点云外包围盒重建原生范围。

推荐生境：

| `name` | `realm` | `isPrimary` | 推荐描述 | 边界 |
| --- | --- | ---: | --- | --- |
| 低地池塘与残存淡水湿地 | `freshwater` | `true` | 水流缓慢或静止的池塘、小型湿地、沼泽和回水水体，提供取食、避难与繁殖水域。 | 当前高质量生境已经很少；不能把所有稻田和水库列为同等适生。 |
| 植被覆盖的土岸、岛屿与丘坡 | `terrestrial` | 省略 | 靠近水体的土质岸坡、低丘植被和小岛为洞穴、晒背和丘状巢提供陆地空间。 | 洞口距离比例来自 40 个洞穴的安徽局地样本。 |
| 农业水网与人工水体镶嵌 | `freshwater` | 省略 | 水库、灌渠、稻作池塘和林地湿地组成的人类改造景观，部分残存或放归个体在其中生活。 | 人工水体能提供水源，也会遭遇抽水、污染、干扰和陡硬岸线。 |

海拔只在正文写“现存生境多位于低于 100 米的丘间谷地和低地”。`metrics.elevationM` 不填 `[0, 100]`，因为资料没有测得零米下限，也没有证明 100 米是物种上限。

## 体尺、外形、食性与活动

推荐体尺：

```ts
measurements: {
  length: {
    typical: 1.5,
    max: 2.16,
    unit: 'm',
    note:
      'Smithsonian 的常见代表值与近代测得极端个体；CSG 把最大体长概括为约 2 m，不构成成年封闭范围',
  },
},
metrics: {},
```

结构化体重应省略：Smithsonian 的 38.5 千克是报道值，论文另有 42 千克圈养雄体，不能把前者写成物种绝对上限。体重数字只保留在 key fact。不要填 `adultLengthCm`、`adultMassKg`，因为现有数字没有形成可靠的野外成年雌雄合并范围。

推荐食性和活动：

```ts
diet: {
  types: ['carnivore'],
  foods: [
    '螺类与其他水生软体动物',
    '甲壳类',
    '水生和陆生昆虫',
    '鱼类',
    '偶尔捕食的幼水鸟与小型啮齿类',
  ],
  description:
    '机会性捕食水边可得的小型动物，以螺类、甲壳类、昆虫和鱼较常见；钝圆后齿适合压碎硬壳，偶尔也取食小型鸟兽。圈养饲料和早期局地胃内容物比例不代表全物种野外食谱。',
},
activity: [
  '半水栖',
  '以夜间和晨昏活动为主',
  '掘穴',
  '季节性冬眠',
  '晒背',
  '发声交流',
],
tags: [
  '中国特有种',
  '长江中下游',
  '短吻鳄科',
  '淡水湿地',
  '温度依赖性别决定',
  '保护繁育与再引入',
],
```

“夜行性”会掩盖人为干扰和夏季高温对活动时段的影响，推荐用“以夜间和晨昏活动为主”。冬眠期也不是全年固定六个月；页面可给 10 月末至 3 月末的常用概括，并注明场地与年份差异。

## 推荐摘要与描述

```ts
summary:
  '中国特有的扬子鳄体形短小、全身骨甲发达，在皖东南低地湿地越冬掘穴、夏季发声与筑丘巢；自然野生残存种群仍极度破碎。',
description:
  '扬子鳄是短吻鳄属仅存的亚洲成员，历史上生活在长江中下游湿地，现存自然野生残存种群集中于皖东南五县的孤立池塘和湿地。成体通常约 1.5 米，吻部宽短微翘，眼睑、背部和腹部都有骨质皮板。它机会性捕食螺、甲壳类、昆虫和鱼，在土岸洞穴中度过寒冷季节；繁殖期雌鳄筑植物丘巢，胚胎性别受孵化温度影响。人工繁育和放归扩大了部分恢复地点的数量，但自然野生、放归、放归后代和圈养数字必须分别统计。IUCN 当前仍列极危，2017 年评估趋势为下降。',
```

摘要不写“野外已有一千多只所以正在恢复”，也不写“圈养两万多只所以不再危险”。两种说法都混淆了起源、年龄和栖息地承载力。

## 六个 story candidates

以下精确提供 6 个 `SpeciesStorySection` 候选：

```ts
storySections: [
  {
    key: 'armored-asian-alligator',
    label: '亚洲短吻鳄',
    title: '宽短吻部下的一整套骨甲',
    body:
      '扬子鳄是短吻鳄属现存的亚洲成员。它通常约 1.5 米，头部粗壮、吻端微翘，眼睑带骨板，腹面也有美洲短吻鳄缺少的发达骨质皮板。体形小不等于没有防御能力；成年个体仍是有力的野生鳄类。',
  },
  {
    key: 'winter-under-the-bank',
    label: '越冬洞穴',
    title: '冷季藏进水边土岸',
    body:
      '扬子鳄常在 10 月末至次年 3 月末进入越冬休眠。安徽 40 个洞穴的局地调查发现，多数洞口贴近水面并离水不远；多组织研究也记录到冬季代谢、消化、肌肉活动、排泄和免疫相关通路下调。洞口调查与组织实验没有给出每座洞穴的内部结构或每只野生鳄的能量账本。',
  },
  {
    key: 'shell-crushing-feeder',
    label: '机会性捕食',
    title: '钝齿压碎水边硬壳',
    body:
      '螺类、甲壳类、昆虫和鱼是常见食物，钝圆后齿能处理带壳猎物；可得时也会捕食幼水鸟和小型啮齿类。早期胃内容物比例缺少可复核的样本背景，圈养中心的鼠和鱼则是人工饲料，所以页面只给定性食谱。',
  },
  {
    key: 'voices-across-the-pond',
    label: '水面声信号',
    title: '远处吼叫，近处还有多种声音',
    body:
      '半自然围栏研究把扬子鳄信号分成远距离吼叫和多种近距离声音，包括 toot、吐泡、嘶声、moo、拍头与 whine。记录证明它们拥有复杂声学交流，却没有为每种声音建立固定野外词义；合唱吸引配偶或聚集群体仍需按实验条件表述。',
  },
  {
    key: 'mound-nest-and-temperature',
    label: '丘巢与孵化',
    title: '巢温参与决定胚胎性别',
    body:
      '雌鳄用腐败植物材料堆成丘巢，专家资料概括每窝常见 10 至 40 枚卵。控制实验中，29°C 孵化组全雌、34°C 孵化组全雄；这两个端点不能当作野外唯一阈值。自然史观察还记录雌鳄开巢、助孵和衔运幼体，但没有证明每只母鳄都执行相同步骤。',
  },
  {
    key: 'recovery-with-provenance',
    label: '放归与基因',
    title: '数量增加后，还要问每一只来自哪里',
    body:
      '繁育中心和持续放归让部分恢复地点重新繁殖。管理者仍要把自然残存个体、放归个体、放归后代和圈养库存分开，并追踪亲缘、栖息地承载力与放归后存活。三个繁育群保存不同遗传成分，基因组可辅助配对与遗传救援，却不能替代湿地恢复和长期野外监测。',
  },
],
```

## Key facts

以下提供 27 条，实施至少保留 15 条：

```ts
keyFacts: [
  '现行学名为 Alligator sinensis Fauvel, 1879，没有公认有效亚种。',
  '它属于爬行纲、鳄目、短吻鳄科、短吻鳄属。',
  'Chinese Alligator 是英文主名，Yangtze Alligator 是常用英文别名。',
  '它是中国特有种，历史原生范围位于长江中下游湿地。',
  '自然野生残存种群集中在皖东南五县，上海和部分浙江记录属于恢复或再引入体系。',
  'IUCN 当前列为极危，2017 年评估的全球趋势为下降。',
  '当前 IUCN 判据为 A1b; B1ab(ii,v)+2ab(ii,v); C1+2a(i)。',
  'CITES 把扬子鳄列入附录 I，中国把它列为国家一级保护野生动物。',
  '2019 年约 200 只指皖东南自然野生残存种群的全年龄估计，不是成熟个体数。',
  '放归后报告的“野外数量”包含人工繁育个体，不能与自然残存基线直接相减或相加。',
  '成体总长通常约 1.5 米，近代测得的极端个体达 2.16 米。',
  'Smithsonian 资料称多数个体低于 23 千克，部分可达 38.5 千克。',
  '宽短而微上翘的吻部、眼睑骨板和腹部骨质皮板是重要识别特征。',
  '幼体底色深并带浅黄横带，不能把幼体花纹直接画到成年个体上。',
  '食物常见螺类、甲壳类、昆虫和鱼，也会机会性捕食小型鸟兽。',
  '后部钝齿适合压碎带壳猎物，但现有证据不支持固定的全物种食物比例。',
  '安徽 40 个洞穴的调查中，24 个在用、16 个废弃。',
  '同一局地样本中，85% 洞口距水体不超过 5 米；该比例不能代表全部栖息地。',
  '越冬休眠常概括为 10 月末至次年 3 月末，具体日期受场地和天气影响。',
  '冬眠组学研究发现多类代谢和生理通路下调，但没有测量每只野生鳄的能量消耗。',
  '雌鳄用植物材料筑丘巢，专家资料概括每窝常见 10 至 40 枚卵。',
  '雌鳄开巢、助孵和搬运幼体属于自然史观察，不是每只个体都必然执行的程序。',
  '29°C 全雌、34°C 全雄来自控制孵化实验，不是野外巢温的固定分界。',
  '2007 年半自然研究记录远距离吼叫和多种近距离声信号。',
  '2003 年三只成体放归试验的存活结果不能换算成物种级重引入成功率。',
  '三个繁育种群保存不同遗传成分，它们不是三支自然野生种群。',
  '2025 年保护基因组研究的野外测序样本只有 3 个，圈养与野外比较需要保留这个限制。',
],
```

## 威胁与保护行动

推荐 `threats`：

```ts
threats: [
  '长江中下游天然湿地被农业、养殖和建设用地转换，剩余池塘与湿地斑块彼此隔离',
  '灌溉抽水和季节性水位下降压缩活动水域、食物与避暑深水区；首次放归试验已记录这一地点级风险',
  '硬化、清除植被或反复扰动的岸坡减少洞穴、晒背、丘巢和幼体入水所需的陆水交界空间',
  '农药、化肥和受污染猎物可能直接或间接影响个体；现有访谈关联不能给出统一的全范围效应值',
  '极小且破碎的自然野生残存种群面临随机事件、低繁殖补充、近交和遗传漂变',
  '干旱、异常洪水和冬季洞穴进水可能造成局地死亡，气候模型结果仍需用长期现场数据校验',
  '少数地点仍有杀害、误捕和食用报告；低识别率也削弱社区监测和冲突报告',
],
```

推荐 `conservationActions`：

```ts
conservationActions: [
  '保护并恢复连通的浅水湿地、池塘、植被土岸、小岛和可掘穴丘坡，避免只增加开放水面',
  '与农户协商灌溉时序和最低水位，在春至秋活动期保留深水避难区与岸边植被',
  '分别监测自然残存、放归、放归后野外出生和圈养个体，统一使用芯片、遗传标记与来源档案',
  '放归前评估水文、岸坡、食物、污染、人为干扰、疾病和承载力；放归后持续追踪存活、扩散与繁殖',
  '用全基因组亲缘关系和繁育谱系减少近亲配对，并在跨繁育群混配前评估有害变异与局地适应',
  '建立保护区内外的社区识别、报告、补偿和联合巡护机制，执行国家一级保护与 CITES 附录 I 管理',
  '把巢数、卵数、幼体补充、成年存活、水位、污染和遗传多样性纳入同一长期监测框架',
],
```

Lau 等使用 2018 年访谈识别农业活动关联。访谈适合定位风险和社区知识缺口，不能替代种群普查，也不能证明某一种农药已经造成多少死亡。2025 年国家林草局组织的调查把放归个体的存活、分布和扩散列为重点，后续页面更新应等待公开结果。[Lau et al. 2025](https://doi.org/10.1017/S0030605324000978)；[国家林草局 2025 调查](https://www.forestry.gov.cn/c/www/dfdt/625606.jhtml)（访问日期均为：2026-08-30）

## 四项 featured stats

`featuredStats` 精确使用 4 项：

```ts
featuredStats: [
  {
    key: 'usual-total-length',
    label: '常见总长',
    value: '约1.5',
    unit: '米',
    note: 'Smithsonian 的常见代表值，不是成年封闭范围；近代极端记录为 2.16 米',
  },
  {
    key: 'winter-dormancy',
    label: '常见越冬期',
    value: '10月末—3月末',
    note: '研究资料的季节概括；出入洞日期随场地、气温和年份改变',
  },
  {
    key: 'typical-clutch-summary',
    label: '常见窝卵数',
    value: '10—40',
    unit: '枚',
    note: 'CSG 的物种级概括；单巢、野巢和圈养中心数据都有差异',
  },
  {
    key: 'laboratory-sex-endpoints',
    label: '实验孵化端点',
    value: '29♀ / 34♂',
    unit: '°C',
    note: '控制实验分别得到全雌和全雄；不是天然巢的固定性别分界',
  },
],
```

不要用“圈养约 28,000”“野外约 1,400”“有效种群数十”做统计卡。三者的时间、起源和统计量不同，短卡片无法容纳必要边界。

## 六张 1536 × 1024 静态图片场景与科学边界

六张图统一采用 3:2 横图、1536 × 1024、sRGB、单帧不透明图像。画面不含文字、数字、箭头、标尺、图标、商标、签名或水印。统一 credit 可用 `Fauna Atlas · AI 生成科学情景重建`。

通用形态约束：成体体形短而结实，吻部宽短、U 形且吻端微上翘；眼睑有低矮骨板，背部和腹部骨质皮板发达；成年体色深灰、黑褐或暗橄榄。闭口时不要露出鳄科式下颌第四齿。禁止美洲短吻鳄的巨大体型、凯门鳄的眼间“眼镜”脊、鳄鱼的尖长 V 形吻、恒河鳄的极细长吻，以及恐龙棘刺或甲龙尾锤。

| 序号与用途 | 稳定文件名建议 | 场景与最终提示词要点 | 科学边界与验收点 | 建议 caption |
| --- | --- | --- | --- | --- |
| 01 封面 | `01-lowland-wetland-adult-portrait-source.png` / `01-lowland-wetland-adult-portrait.webp` | 皖东南低地池塘边，恰好一只完整成年扬子鳄半浮在静水与植被土岸之间，三分之二侧面，宽短微翘吻、眼睑骨板和背甲清楚；远景为农业谷地中的残存湿地，不出现建筑标志。 | 场景重建通用生境，不指认具体保护区、个体来源、性别或野生状态；体形保持约 1.5 米级视觉比例，不画成大型美洲短吻鳄。 | `一只成年扬子鳄停在低地池塘的植被土岸旁；画面重建通用生境，不记录具体地点或个体来源。` |
| 02 形态识别 | `02-full-body-diagnostic-profile-source.png` / `02-full-body-diagnostic-profile.webp` | 恰好一只成年个体在潮湿土岸上严格侧身，头至尾完整，低机位自然光；闭口，宽 U 形吻微上翘，眼睑低矮骨板、背部和腹侧骨质皮板可辨，四肢短壮，深灰暗橄榄色。 | 不加解剖标线；腹甲可见但不夸成龟壳。闭口时下颌第四齿不外露。画面不能确定性别、体重、年龄或绝对体长。 | `侧面姿态显示扬子鳄的宽短吻部与发达骨甲；静态图不能测定个体性别、年龄或体尺。` |
| 03 越冬洞口 | `03-bank-burrow-entrance-source.png` / `03-bank-burrow-entrance.webp` | 冬末阴冷的植被土岸，恰好一只扬子鳄停在靠近静水的自然洞口处，身体大半可见；洞口贴近水面，周围有根系、落叶与湿土，不做剖面，不显示内部房间。 | 40 洞调查只支持洞口位置统计。画面不能声称洞内必有多室、水池、通气孔，也不能证明这只鳄正在冬眠；不画冰封北方景观。 | `水边土岸洞口符合安徽局地调查的常见位置；画面不推断洞穴内部结构或个体休眠状态。` |
| 04 夏季吼叫姿态 | `04-summer-bellowing-posture-source.png` / `04-summer-bellowing-posture.webp` | 夏季清晨池塘，恰好一只成年扬子鳄身体浸水，头部斜向上抬、尾部自然弓起，水面有低幅振纹；不出现第二只鳄，不加声波图标。 | 姿态参考半自然围栏声学观察。单帧无法证明正在发声、声音频率、合唱、求偶功能或远处个体回应；不要画夸张张口咆哮。 | `抬头弓尾姿态见于扬子鳄吼叫观察；静帧不能证明声音、合唱或求偶功能。` |
| 05 植被丘巢 | `05-vegetation-mound-nest-source.png` / `05-vegetation-mound-nest.webp` | 夏末植被水边，恰好一只头尾完整的成年扬子鳄低伏在一座由腐叶、草茎和细枝组成的完整丘巢旁；不显示巢口、卵、蛋壳或幼体。 | 外形不能确定成体性别，也不能证明它是巢主或正在守巢；画面不提供窝卵数、巢温、孵化率或普遍母护行为证据。 | `一只成年扬子鳄伏在完整的植被丘巢旁；画面不能确定个体性别、巢主身份、守巢行为或繁殖结果。` |
| 06 放归监测 | `06-reintroduction-radio-monitoring-source.png` / `06-reintroduction-radio-monitoring.webp` | 恢复湿地中恰好一只扬子鳄沿植被岸边游动；远处岸上恰好两名保护人员用手持天线和记录板进行非接触监测，人物不包围、不触摸个体，无游客或庆典。 | 画面表示放归后监测流程，不证明个体为圈养繁育、已经适应、成功繁殖或长期存活。不要用项圈；植入芯片不可见，遥测设备只作概念性项目器材。 | `保护人员在恢复湿地开展非接触监测；画面不证明个体来源、放归成功或长期存活。` |

图片 02、03 和 05 风险最高。02 要放大核对吻形、闭口牙齿与腹侧骨甲；03 不能生成无证据的洞穴剖面；05 要保留完整尾端，不能用场景推断成体性别、巢主或守巢行为，也不能生成卵和幼体。

## 建议 SpeciesSource 登记

以下精确选择 18 个唯一 HTTPS URL，覆盖 `taxonomy`、`conservation`、`distribution`、`ecology`、`general` 五种 schema 类型：

```ts
const CHINESE_ALLIGATOR_SOURCES = [
  {
    title: 'The Reptile Database: Alligator sinensis',
    url: 'https://reptile-database.reptarium.cz/Alligator/sinensis',
    kind: 'taxonomy',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'GBIF Backbone Taxonomy: Alligator sinensis',
    url: 'https://www.gbif.org/species/2441368',
    kind: 'distribution',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Alligator sinensis (2017 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-1.RLTS.T867A3146005.en',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Crocodile Specialist Group: Conservation Status',
    url: 'https://www.iucncsg.org/pages/Conservation-Status.html',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Crocodile Specialist Group 2019: Chinese Alligator Action Plan',
    url: 'https://www.iucncsg.org/365_docs/attachments/protarea/1726a747dff36b92c73693a8e542b872.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'CITES: Alligator sinensis',
    url: 'https://cites.org/eng/taxonomy/term/3526',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Crocodile Specialist Group 2024: Red List Authority table',
    url: 'https://www.iucncsg.org/content_images/Darwin/SC27%20Documents.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Smithsonian National Zoo: Chinese alligator',
    url: 'https://nationalzoo.si.edu/animals/chinese-alligator',
    kind: 'general',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Lau et al. 2025: Land-use threats to the last wild Chinese alligator population',
    url: 'https://doi.org/10.1017/S0030605324000978',
    kind: 'distribution',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局 2025：安徽开展扬子鳄野外种群资源调查',
    url: 'https://www.forestry.gov.cn/c/www/dfdt/625606.jhtml',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Thorbjarnarson et al. 2001: Reproductive Ecology of the Chinese Alligator',
    url: 'https://doi.org/10.2307/1565892',
    kind: 'ecology',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Ding et al. 2003: Position of Burrow Entrances in Wild Chinese Alligators',
    url: 'https://zoores.ac.cn/article/id/1011',
    kind: 'ecology',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Wang et al. 2011: Testing reintroduction as a conservation strategy',
    url: 'https://doi.org/10.1007/s11434-011-4615-8',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Wang et al. 2007: Acoustic signals of Chinese alligators',
    url: 'https://doi.org/10.1121/1.2714910',
    kind: 'ecology',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Lin et al. 2018: Temperature-dependent sex determination in Chinese alligator',
    url: 'https://doi.org/10.1016/j.scib.2018.01.004',
    kind: 'ecology',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Lin et al. 2020: Energy-saving strategy during hibernation',
    url: 'https://doi.org/10.1016/j.isci.2020.101202',
    kind: 'ecology',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Yang et al. 2023: Genomic investigation of three Chinese alligator breeding populations',
    url: 'https://doi.org/10.1111/1755-0998.13702',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Pan et al. 2025: Genomic insights and the conservation potential of captive breeding',
    url: 'https://doi.org/10.1126/sciadv.adm7980',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
] satisfies readonly SpeciesSource[];
```

18 个 URL 互不重复。额外人口新闻和旧版判据只用于研究中的口径核对，不进入产品来源数组。

## 关键不确定性与禁用表述

1. **判据版本必须锁定**：当前实现使用 IUCN 2017 原始评估和 CSG 2024 RLA 表共同列出的 `A1b; B1ab(ii,v)+2ab(ii,v); C1+2a(i)`。CSG 2019 行动计划中的 `A1c, D` 是相冲突的旧版摘要，不是简写。
2. **成熟个体数留空**：约 200、773、1,200、1,400 和圈养数量都不是现行全球成熟个体范围。
3. **自然野生与放归分开**：任何“野外增加”数字都要注明是否包含放归个体及其后代。
4. **海拔不是 0 至 100 米实测范围**：只能写现存低地生境多低于 100 米。
5. **体尺不是封闭范围**：1.5 米是常见代表值；2.16 米、38.5 千克、42 千克来自不同来源、个体和饲养状态。
6. **胃内容物比例不全球化**：禁用“63% 食物是蜗牛”。
7. **洞口数据不等于洞穴剖面**：40 洞研究没有测出所有内部房间与水池。
8. **爬行动物冬眠不照搬哺乳动物机制**：组学通路变化不等于野外能量预算。
9. **叫声没有固定词典**：近距离信号分类和雌鳄开巢观察不能写成翻译完成的“语言”。
10. **29°C 与 34°C 是实验端点**：不写天然巢唯一阈值，也不直接预测未来性比。
11. **圈养窝卵数不替代野巢**：10 至 40 是专家概括，单巢和设施均值另有差异。
12. **三只放归试验不提供成功率**：7.61 与 4.00 公顷也是两个个体、一个池塘的结果。
13. **三个繁育群不是三个野外种群**：美国群保存的遗传成分需要方案评估后才能用于遗传救援。
14. **有效种群大小不是头数**：基因组估计的“数十”不能写成只剩数十只。
15. **极危与地方增长可以同时成立**：IUCN 没有发布新评估前，不改 `decreasing`。

## 实现验收建议

测试至少锁定：

```js
assert.equal(profile.id, 'species-alligator-sinensis');
assert.equal(profile.slug, 'chinese-alligator');
assert.equal(profile.names.zh, '扬子鳄');
assert.equal(profile.names.en, 'Chinese Alligator');
assert.equal(profile.scientificName, 'Alligator sinensis');
assert.deepEqual(profile.names.aliases, [
  'Yangtze Alligator',
  '鼍',
  '中华鼍',
  '土龙',
  '猪婆龙',
]);
assert.deepEqual(
  getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
    rank,
    taxon.scientificName,
  ]),
  [
    ['kingdom', 'Animalia'],
    ['phylum', 'Chordata'],
    ['class', 'Reptilia'],
    ['order', 'Crocodylia'],
    ['family', 'Alligatoridae'],
    ['genus', 'Alligator'],
  ],
);
assert.deepEqual(
  {
    code: profile.conservation.code,
    trend: profile.conservation.trend,
    assessedYear: profile.conservation.assessedYear,
    criteria: profile.conservation.criteria,
  },
  {
    code: 'CR',
    trend: 'decreasing',
    assessedYear: 2017,
    criteria: 'A1b; B1ab(ii,v)+2ab(ii,v); C1+2a(i)',
  },
);
assert.deepEqual(profile.distribution.realms, ['freshwater', 'terrestrial']);
assert.deepEqual(profile.distribution.countries, ['中国']);
assert.deepEqual(profile.distribution.endemicTo, ['中国']);
assert.deepEqual(profile.metrics, {});
assert.equal(profile.storySections.length, 6);
assert.equal(new Set(profile.storySections.map(({ key }) => key)).size, 6);
assert.ok(profile.keyFacts.length >= 15);
assert.ok(profile.conservationActions.length >= 5);
assert.equal(profile.featuredStats.length, 4);
assert.equal(new Set(profile.featuredStats.map(({ key }) => key)).size, 4);
assert.equal(profile.sources.length, 18);
assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 18);
assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
assert.deepEqual(
  new Set(profile.sources.map(({ kind }) => kind)),
  new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
);
```

内容测试还应拒绝把约 200 写成成熟数、把 773 或 1,400 写成自然野生总量、把 28,000 写成现行野外数量、把 40 洞样本推广到所有洞穴、把 29°C/34°C 写成野外固定阈值，以及把三只放归试验写成百分比成功率。图片测试需确认六组源 PNG 与运行 WebP 一一对应，尺寸均为 1536 × 1024，且哈希互不重复。
