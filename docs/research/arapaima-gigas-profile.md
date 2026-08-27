# 巨骨舌鱼（_Arapaima gigas_）完整档案研究

- 检索与核验日期：2026-08-27
- 展示中文名：**巨骨舌鱼**；英文主名：**Arapaima**；接受学名：**_Arapaima gigas_ (Schinz, 1822)**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并约束 1 张封面、5 张图库图、故事章节、展示数字和来源数组
- 分类口径：Eschmeyer’s Catalog of Fishes 接受 _A. gigas_，科级采用 Arapaimidae；仓库六阶元以 `Actinopterygii` 表示辐鳍鱼纲
- 物种边界：历史资料常把整个 _Arapaima_ 属都写作 _A. gigas_。2013 年拆分和 2026 年整合研究仍没有解决全部流域，跨流域生态资料按 _Arapaima_ sp. 或 _Arapaima_ spp. 使用
- 保护口径：IUCN 全球评估仍为 DD，评估日期 1996-08-01，趋势 unknown；CITES 附录 II 属于国际贸易制度，不是 IUCN 受胁等级
- 管理口径：原生亚马孙洪泛平原适用社区保护和受控利用；自然分布区外的巴西水域可按外来入侵鱼控制，两种目标不能合并
- 数字原则：约 3 米和 200 千克是当前权威公共资料采用的操作上限。4.5 米来自旧二手汇编，缺少现代凭证，也早于属内分类拆分，不进入产品字段

## 结论摘要

1. Eschmeyer’s Catalog of Fishes 接受 **_Arapaima gigas_ (Schinz, 1822)**，原始组合为 _Sudis gigas_ Schinz, 1822，正模 MNHN A-8837，科为 Arapaimidae。作者名加括号，因为物种后来转入 _Arapaima_ 属。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=10160)
2. 推荐分类链为动物界、脊索动物门、辐鳍鱼纲、骨舌鱼目、巨骨舌鱼科、巨骨舌鱼属、巨骨舌鱼。台湾鱼类资料库和部分旧数据库仍把该属放在 Osteoglossidae；这属于科级骨架差异，不是另一个物种。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=10160) [Taiwan Fish Database](https://fishdb.sinica.edu.tw/chi/chinesequer2.php?R1=&T1=&cn=&dere=asc&fm=&gc=&me=&orderby=author&page=56&pz=200&vn=)
3. 产品沿用 TODO 的“巨骨舌鱼”。中国官方名录还使用“巨巴西骨舌鱼”；英文和区域通名包括 Arapaima、Pirarucu 与 Paiche。“海象鱼”“军舰龙”等水族贸易名不适合作为主名。[中国 CITES 物种名录](https://lyj.gxzf.gov.cn/bsfw/cycx/zwmdcx/P020201218325688476065.pdf) [FishBase](https://www.fishbase.se/summary/Arapaima_gigas)
4. _Arapaima_ 不是已经确认的单型属。Catalog 与 CITES 分类材料还处理 _A. agassizii_、_A. arapaima_、_A. leptosoma_ 和 _A. mapae_。旧文献把这些鱼全部归作 _A. gigas_，所以不能把属级范围、生态或体型自动归给严格种级。[CITES AC33 taxonomic review](https://cites.org/sites/default/files/documents/S-AC33-48_1.pdf) [Stewart 2013, _A. agassizii_](https://doi.org/10.1643/CI-12-013) [Stewart 2013, _A. leptosoma_](https://doi.org/10.1643/CI-12-017)
5. 2026 年整合研究检查 90 尾来自 alto Solimões、Juruá、Purus 和 Santarém 的鱼，其中 70 尾取得 COI 数据。样点间遗传分化低而形态变异大；作者为分类稳定把所检材料归为 _A. gigas_，同时明确没有解决 Amapá、圭亚那水系、Tocantins-Araguaia 和稀缺模式材料。[Magalhães et al. 2026](https://doi.org/10.1590/1982-0224-2025-0191)
6. 当前 IUCN 全球条目为数据缺乏，评估日期 1996-08-01。仓库应使用 `conservation('DD', 'unknown', 1996)`，不填准则。DD 表示证据不足，既不是“濒危”，也不是“安全”。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.1996.RLTS.T1991A9110195.en) [FishBase](https://www.fishbase.se/summary/Arapaima_gigas)
7. CITES 当前把操作名 _A. gigas_ 列入附录 II，列入自 1975-07-01 生效。附录 II 要求国际贸易许可和无害判定，不等同于禁止一切贸易，也不能替代 IUCN 风险评估。[CITES Appendices 2024](https://www.cites.org/sites/default/files/eng/app/2024/E-Appendices-2024-05-25.pdf) [CITES fisheries legal guide](https://cites.org/sites/default/files/eng/prog/laf/Implementing-CITES-through-national-fisheries-legal-frameworks-a-study-and-a-guide.pdf)
8. 保守原生范围是亚马孙低地洪泛水域，产品国家数组采用巴西、秘鲁、哥伦比亚和厄瓜多尔。Catalog 对 Guyana 加问号；现代分类通常把圭亚那材料联系到 _A. arapaima_，不把它无条件并入严格 _A. gigas_。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=10160) [CITES AC33 taxonomic review](https://cites.org/sites/default/files/documents/S-AC33-48_1.pdf)
9. 这种鱼随洪水脉冲在洪泛湖、支汊和季节性淹水森林之间侧向移动。退水和低水期回到湖泊与水道；低水期各体型更常出现在较深、较浑浊、电导率较高的位置，小个体更贴近密集浮水植物。[Castello 2008](https://doi.org/10.1111/j.1600-0633.2007.00255.x) [Richard et al. 2018](https://www.usgs.gov/publications/size-structured-habitat-selection-arapaima-floodplain-lakes-lower-amazon)
10. 当前权威公共资料支持“可接近 3 米、约 200 千克”，并把 2.2 至 2.4 米、约 90.7 千克称为较常见的大型个体。产品可说它是世界最大型淡水鱼之一或最大型有鳞淡水鱼之一，不能宣布唯一第一名。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/arapaima)
11. 成鱼是强制空气呼吸鱼，高度血管化的呼吸鳔承担主要氧摄取。鳃面积在发育中相对缩小，但鳃仍承担大部分二氧化碳排出及重要的离子、酸碱调节。幼鱼经历从较强水呼吸到依赖空气呼吸的发育转换。[Brauner et al. 2004](https://pubmed.ncbi.nlm.nih.gov/15037637/) [Fernandes et al. 2012](https://pubmed.ncbi.nlm.nih.gov/22512942/) [Pelster et al. 2020](https://pubmed.ncbi.nlm.nih.gov/32529591/)
12. 直接实验中，不同体型个体约 63% 至 75% 的氧来自空气；其他生理研究常把操作范围概括为约 60% 至 80%。该比例和浮头间隔随体型、温度、活动与环境改变，不能写成固定“每 5 至 15 分钟呼吸一次”。[Pelster et al. 2020](https://doi.org/10.1007/s00360-020-01286-1) [Wood et al. 2020](https://doi.org/10.1242/jeb.232694)
13. 胃含物研究支持以动物性食物为主，成鱼多吃鱼，幼鱼也大量摄食昆虫和微型甲壳类。不同地点可见其他无脊椎动物和植物材料，研究尚未完全厘清植物是否被主动摄取。跨流域资料应标作 _Arapaima_ sp.，不能把物种写成固定营养级的严格鱼食性顶级捕食者。[Jacobi et al. 2020](https://pubmed.ncbi.nlm.nih.gov/32383478/)
14. 繁殖与洪水节律相连，亲鱼在浅水底部筑巢并护卵、护幼。孵化后雄鱼通常承担更多护幼，但双亲都可参与。双亲能从头部感觉管释放液体，蛋白组检出激素和免疫相关蛋白；“喂奶”“信息素”或“向幼鱼传递免疫”仍是假说。[Godinho et al. 2005](https://doi.org/10.1111/j.1463-6395.2005.00213.x) [Farias et al. 2015](https://doi.org/10.1590/1982-0224-20140010) [Torati et al. 2017](https://doi.org/10.1371/journal.pone.0186692)
15. 主要直接威胁是目标性和非法过捕。大型个体价值高，强制浮头使它们容易被定位，晚熟和长期护幼又放大捕走亲鱼的影响。社区巡护、保护湖、标准化浮头计数和受控捕捞在若干亚马孙地区推动恢复，但这些局地结果不能改写成全球趋势。[Castello et al. 2015](https://doi.org/10.1002/aqc.2491) [Campos-Silva and Peres 2016](https://doi.org/10.1038/srep34745)
16. 训练有素的渔民可依靠浮头时的视觉和声音线索计数。原始方法与标记重捕估算高度相关，`r = 0.98`；标准操作把不大于 2 公顷的单元计数 20 分钟，只纳入大于 1 米的鱼。该方法要求训练、合适天气和当地校准。[Castello 2004](https://doi.org/10.1577/M02-024.1) [Stokes et al. 2021](https://doi.org/10.1002/aqc.3580)
17. 原生地和引入地需要相反策略。巴西 IBAMA 2026 年第 7 号规范把多个自然分布区外水文区及 Santo Antônio 坝以上 Madeira 上游的 pirarucu 视为外来入侵鱼，允许捕捞、捕获和宰杀用于控制。产品不能把当地控制措施写成亚马孙原生种群的保护建议。[IBAMA IN 7/2026](https://www.ibama.gov.br/component/legislacao/?legislacao=139572&view=legislacao)

## 名称、分类与物种边界

### 接受名和仓库分类链

Catalog of Fishes 在线版在 2026-07-07 更新后仍把 _Arapaima gigas_ (Schinz, 1822) 标为 valid。Schinz 最初把它写作 _Sudis gigas_，所以当前组合的命名人和年份放在括号内。Catalog 记录正模 MNHN A-8837，原产地只写 Brazil。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=10160)

| 阶元 | 学名              | 中文名     | 落库口径                       |
| ---- | ----------------- | ---------- | ------------------------------ |
| 界   | Animalia          | 动物界     | Catalog 与通行动物分类         |
| 门   | Chordata          | 脊索动物门 | 脊索动物                       |
| 纲   | Actinopterygii    | 辐鳍鱼纲   | 仓库六阶元采用的通行名称       |
| 目   | Osteoglossiformes | 骨舌鱼目   | Catalog 分类骨架               |
| 科   | Arapaimidae       | 巨骨舌鱼科 | Catalog 当前科级口径           |
| 属   | _Arapaima_        | 巨骨舌鱼属 | Catalog 当前接受属             |
| 种   | _Arapaima gigas_  | 巨骨舌鱼   | 当前接受名，但地理边界仍需研究 |

ITIS、NCBI 与台湾鱼类资料库仍可见 Osteoglossidae，部分系统把 Arapaimidae 处理为骨舌鱼科内亚科或使用较旧骨架。仓库只有一个 `family` 字段，使用 Catalog 当前显示的 Arapaimidae；不要同时填两个科名。[ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=650008) [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=113544&lin=f&lvl=3&mode=Info)

### 属内拆分与 2026 年整合研究

Stewart 在 2013 年重新描述 _A. agassizii_，并基于一尾来自 Solimões 与 Purus 汇流区附近的标本描述 _A. leptosoma_。Catalog 与 CITES 分类审查还处理 _A. arapaima_ 和 _A. mapae_。这套拆分依赖稀少历史标本，后续分子和形态研究没有为整个分布区给出最终答案。[Stewart 2013, _A. agassizii_](https://doi.org/10.1643/CI-12-013) [Stewart 2013, _A. leptosoma_](https://doi.org/10.1643/CI-12-017) [CITES AC33 taxonomic review](https://cites.org/sites/default/files/documents/S-AC33-48_1.pdf)

Magalhães 等在 2026 年整合 82 尾形态资料、70 尾 COI 序列和 15 具骨骼。90 尾总样本来自 alto Solimões、Juruá、Purus 与 Santarém。研究发现样点间 COI 分化低，传统诊断形态却有大幅个体变异，因此为名称稳定把所检材料归入 _A. gigas_。作者没有检查足够的 _A. agassizii_ 与 _A. leptosoma_ 比较材料，也没有解决 Amapá、Guyana 和 Tocantins-Araguaia 鱼群。[Magalhães et al. 2026](https://doi.org/10.1590/1982-0224-2025-0191)

产品采用以下证据层级：

1. 分类名、IUCN 与 CITES 状态使用当前操作名 _A. gigas_。
2. 2026 年研究覆盖的中西部亚马孙样本可写作 _A. gigas_，并保留采样范围。
3. 跨流域生态、管理和历史体型研究按原文写作 _Arapaima_ sp. 或 _Arapaima_ spp.。
4. 圭亚那材料不自动归入 _A. gigas_；现代名称 _A. arapaima_ 需要单独处理。
5. 不宣称 2013 年拆分已经被完全否定，也不宣称五个名称都具有已解决的现代分布。

### 中文名、英文名和别名

- 中文主名：巨骨舌鱼，沿用仓库 TODO 和大陆常见用法
- 中文官方异名：巨巴西骨舌鱼，见中国 CITES 名录
- 繁体资料名：巨巴西骨舌魚，见台湾鱼类资料库
- 英文主名：Arapaima
- 区域通名：Pirarucu，常见于巴西；Paiche，常见于秘鲁和玻利维亚
- 条件英文名：Giant Arapaima，可用于检索，不作为唯一正式名
- 不推荐主名：海象鱼、象鱼、大头巨骨舌鱼、军舰龙。这些名称多见于水族或放生风险材料，易混入贸易语境

`gigas` 意为“巨大的”。“pirarucu”常被解释为带有“红色鱼”含义的当地名称，与成年鱼后半身的红色有关；产品若使用词源故事，应说明它是通名解释，不把颜色当作种级诊断。[FishBase](https://www.fishbase.se/summary/Arapaima_gigas)

### 资料中的阶段与名称

文献常用 fry、juvenile、subadult 和 adult，却没有统一体长边界。产品使用以下阶段词：

1. `卵与孵化仔鱼`：留在浅水巢区，依赖亲鱼防守。
2. `护幼期鱼苗`：在照护亲鱼头部附近聚群，仍处于高风险阶段。
3. `幼鱼`：已主动摄食小型鱼和无脊椎动物，呼吸系统仍在发育。
4. `亚成体`：强制空气呼吸，体长可能已超过管理计数法的 1 米门槛。
5. `繁殖成体`：达到性成熟并参与筑巢、护卵或护幼。

Mamirauá 计数法把 1 至 1.5 米归为 juvenile、超过 1.5 米归为 adult，这是管理分类，不是普适发育定义。Godinho 的性成熟体长还显示雄鱼可在 1.15 至 1.24 米成熟，进一步证明两套边界不能混用。[Castello 2004](https://doi.org/10.1577/M02-024.1) [Godinho et al. 2005](https://doi.org/10.1111/j.1463-6395.2005.00213.x)

## IUCN、区域证据和法律状态

### 全球结构化字段

IUCN 条目为 World Conservation Monitoring Centre 1996, _Arapaima gigas_, `e.T1991A9110195`。评估日期是 1996-08-01，等级 Data Deficient。条目早于 2013 年属内拆分，也早于当前大多数社区管理数据；产品应如实展示它的年代，不用局地衰退或恢复结果推定新的全球等级。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.1996.RLTS.T1991A9110195.en)

| 字段         | 落库值    | 说明                         |
| ------------ | --------- | ---------------------------- |
| code         | `DD`      | 全球证据不足，不等于受胁类别 |
| trend        | `unknown` | IUCN 条目没有可用全球趋势    |
| assessedYear | `1996`    | 评估年，不是网页访问年       |
| criteria     | 留空      | DD 不填受胁准则              |

部分论文用“threatened”“overexploited”或“locally extinct”描述特定水域，含义分别是研究者概括、渔业状态和局地消失。它们都不能覆盖 IUCN 全球结构化字段。

### CITES 和巴西现行规则

| 制度                     | 当前条目                                       | 产品含义                                                           |
| ------------------------ | ---------------------------------------------- | ------------------------------------------------------------------ |
| CITES                    | _Arapaima gigas_，附录 II                      | 国际贸易需要符合许可、合法来源与无害判定要求；不是全球受胁等级     |
| CITES 动物委员会分类审查 | 继续处理 _Arapaima_ 属拆分问题                 | 当前法律操作名与学术物种边界可能不同，不自行推定新增物种的列名效果 |
| IBAMA IN 7/2026          | 自然分布区外出现的 pirarucu 可认定为外来入侵种 | 指定水文区允许全年捕获、宰杀用于控制，不适用于原生亚马孙保护湖     |

CITES 附录 II 列入日期为 1975-07-01。附录 II 不要求把所有个体移出贸易，也不证明野生种群稳定。Castello 与 Stewart 对无害判定的分析指出，广阔范围、非法捕捞、种群边界和监测能力都会影响出口判断。[CITES NDF case study](https://cites.org/sites/default/files/ndf_material/ArapaimaCITES2009.pdf)

IBAMA 第 7 号规范列出的自然分布区外范围包括巴西多个水文区，以及 Santo Antônio 坝上游的 Madeira 河上部。规范允许捕捞、捕获和宰杀，不设配额或体长下限，禁止把捕获鱼放回，并限制产品跨州销售。它是一项地点限定的入侵控制规则，不是整个巴西的 pirarucu 捕捞规则。[IBAMA IN 7/2026](https://www.ibama.gov.br/component/legislacao/?legislacao=139572&view=legislacao)

### 原生恢复与外来控制的地理边界

| 地理情境                        | 身份                              | 产品应写的目标                                                             |
| ------------------------------- | --------------------------------- | -------------------------------------------------------------------------- |
| 亚马孙低地原生洪泛湖与淹水森林  | 原生资源鱼和生态成员              | 降低非法过捕，保护亲鱼、巢区、幼鱼生境和洪泛连通性，支持社区计数与受控利用 |
| 巴西法律列明的自然分布区外水域  | 外来入侵鱼                        | 阻止释放和扩散，依当地规则捕获、宰杀和处置                                 |
| 玻利维亚上 Madeira 及相连扩散区 | 20 世纪养殖逃逸后建立的非原生种群 | 评估食物网与渔业影响，实施地点限定的控制或利用，不包装成原生种保护         |
| 东南亚、墨西哥等引入记录        | 引入或逸生                        | 使用当地监管与风险评估，不从亚马孙管理方案直接推导结论                     |

## 分布与生境

### 原生范围和不确定边界

Catalog 把操作范围列作 Amazon River basin，国家为 Brazil、Colombia、Ecuador、`?Guyana` 和 Peru，并记录 Mexico、Java 与 Philippines 的引入。产品去掉带问号的 Guyana，以免把现代 _A. arapaima_ 的圭亚那范围塞入严格 _A. gigas_；国家数组不是一个经 2026 年整合分类全面重绘的分布图。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=10160)

建议结构化范围：

```ts
distribution: {
  realms: ['freshwater'],
  continents: ['南美洲'],
  regions: [
    '亚马孙河干流与低地洪泛平原',
    'Solimões、Juruá、Purus 等连通洪泛水系',
    '季节性淹水森林、河漫滩湖泊与缓流支汊',
  ],
  countries: ['巴西', '秘鲁', '哥伦比亚', '厄瓜多尔'],
  range:
    '原生于亚马孙低地洪泛水域；严格 A. gigas 的流域边界仍受属内分类问题限制。圭亚那材料不无条件归入本种，玻利维亚上 Madeira、墨西哥和部分东南亚记录属于引入范围。',
  center: { lat: -3.2, lng: -62.5 },
}
```

`center` 只负责打开亚马孙中部地图视图，不是观测点、模式产地或种群质心。分布字段只使用 freshwater；这种鱼没有海洋或半咸水生活史。

### 洪水脉冲连接的四套生境

| 生境                           | 季节作用                               | 证据边界                                                    |
| ------------------------------ | -------------------------------------- | ----------------------------------------------------------- |
| 河漫滩湖泊、牛轭湖和潟湖       | 低水期重要停留、呼吸计数和部分觅食水域 | 湖深、面积、连通性和管理状态共同改变出现率与密度            |
| 季节性淹水森林                 | 涨水和高水期扩展觅食、隐蔽与移动空间   | Castello 的侧向移动研究来自特定洪泛区，不是所有流域固定路线 |
| 连通支汊与森林水道             | 退水时连接淹水森林和湖泊               | 水坝、堤岸和洪泛连通性改变可能阻断移动                      |
| 浅水岸带、浮水植物与有遮蔽底部 | 小个体躲避和亲鱼筑巢、护幼的重要微生境 | 巢址底质与植被因水域而异，不写唯一巢型                      |

Castello 的周度观测显示，鱼随涨水进入越来越高的淹水森林，高水期留在森林，退水时经较低森林和水道回到洪泛湖。[Castello 2008](https://doi.org/10.1111/j.1600-0633.2007.00255.x)

Richard 等在下亚马孙低水期以浮头位置比较可用生境。各体型更可能出现在深、浑浊、电导率较高的位置，小鱼还偏向密集浮水植物。研究对象写作 _Arapaima_ spp.，结果适合约束属级场景，不能变成严格 _A. gigas_ 的全球偏好百分比。[USGS publication record](https://www.usgs.gov/publications/size-structured-habitat-selection-arapaima-floodplain-lakes-lower-amazon)

建议 `habitats`：

```ts
habitats: [
  {
    name: "亚马孙河漫滩湖泊",
    realm: "freshwater",
    description:
      "低水期的重要停留水域，较深、浑浊和连通位置常保留不同体型个体。",
    isPrimary: true,
  },
  {
    name: "季节性淹水森林",
    realm: "freshwater",
    description: "涨水后扩展的觅食和隐蔽空间，鱼随退水返回湖泊与水道。",
  },
  {
    name: "连通支汊与缓流水道",
    realm: "freshwater",
    description: "连接洪泛湖和淹水森林的移动通道，也提供缺氧缓流水体。",
  },
  {
    name: "浅水植被岸带",
    realm: "freshwater",
    description: "小个体常靠近浮水植物，部分亲鱼在有遮蔽的浅水底部筑巢和护幼。",
  },
];
```

## 外形、鉴别和测量

### 可用于图像验收的外形组合

- 身体粗长、流线形，横截面近圆，绝不是鳗形细带或高背慈鲷体形。
- 头部宽大、坚硬，吻短，口裂大而略上翘；没有龙鱼式下颌须。
- 大型重叠圆鳞呈深灰、橄榄或黑褐色，腹侧较浅。后半身、尾柄和不成对鳍可带红、橙红或铜红色。
- 背鳍和臀鳍都长而后置，彼此大致相对；尾鳍短圆。胸鳍和腹鳍都存在。
- 没有脂鳍、鳃外露、甲鱼式甲板或鲶鱼触须。鳞片是可弯曲的层状结构，不是互相锁死的金属板。
- 雌雄外部形态难以可靠区分。红色强弱受年龄、季节和个体影响，不能凭单张图断定性别。[Núñez et al. 2009](https://pubmed.ncbi.nlm.nih.gov/19189239/)

Smithsonian 的现生个体页面适合核对大口、流线体形、后置鳍和后躯红色。它采用传统广义 _A. gigas_ 展示，不能充当 2013 年后属内物种诊断钥匙。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/arapaima)

### 鳞片不是刚性盔甲

鳞片外层高度矿化而坚硬，内层由胶原纤维薄层组成。胶原层以 Bouligand 型扭转排列，在负荷下重新取向、开裂偏转并耗散能量，使鳞片同时保持抗穿刺和弯曲能力。研究以食人鱼咬合为生物力学背景，但产品只说“降低咬穿风险”，不写“食人鱼绝对咬不穿”。[Zimmermann et al. 2013](https://pubmed.ncbi.nlm.nih.gov/24129554/) [Lin et al. 2011](https://pubmed.ncbi.nlm.nih.gov/21783123/)

### 体尺来源和落库选择

| 来源                | 原始口径                                               | 产品处理                                                                            |
| ------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| Smithsonian         | 上限约 3 m、200 kg；2.2 至 2.4 m、90.7 kg 较常见       | 用于公众展示的典型值和操作上限，明确不是严格凭证极值                                |
| FishBase            | common length 200 cm；max 450 cm TL；max weight 200 kg | 保留 2 m 和 200 kg 作为交叉核对；删除 4.5 m，因为其参考是旧水族汇编且未解决属内物种 |
| Stewart 2013        | _A. gigas_ 正模约 203 cm 标准长                        | 只说明严格种级模式材料，不把标准长换算成总长                                        |
| Godinho et al. 2005 | 雌性成熟体长级 145 至 154 cm TL，雄性 115 至 124 cm TL | 用于繁殖事实；不把成熟门槛当作普通成体尺寸                                          |

建议展示字段：

```ts
measurements: {
  length: {
    typical: 2.3,
    max: 3,
    unit: 'm',
    note: 'Smithsonian 将 2.2 至 2.4 米称为较常见大型个体，3 米为当前操作上限；不采用旧资料的 4.5 米。',
  },
  weight: {
    typical: 90.7,
    max: 200,
    unit: 'kg',
    note: '90.7 千克是 Smithsonian 的较常见大型个体值，200 千克为操作上限；不是严格物种凭证范围。',
  },
}
```

`metrics.adultLengthCm` 和 `metrics.adultMassKg` 建议留空。现有来源给出公众常见值、成熟体长级和广义 arapaima 上限，没有同一测量设计下的成体最小至最大区间。寿命也只见公共页面的约 20 年上限，缺少适合结构化比较的野外寿命范围，因此不填 `lifespanYears`。

## 食性、生活史和繁殖

### 以动物性食物为主，不写固定营养级

Jacobi 等检查西部亚马孙 11 个洪泛湖的胃含物，并刻意把研究对象写作 _Arapaima_ sp.。幼鱼摄食鱼和无脊椎动物，尤其昆虫和小型甲壳类；大鱼的胃含物以多种鱼为主，猎物多处于低到中等营养位置。胃中也出现植物材料，可能包含主动摄取和随猎物、吸水进入两种来源，现有证据没有统一答案。[Jacobi et al. 2020](https://doi.org/10.1111/jfb.14372)

大口突然张开会扩大口腔体积，把附近水体和猎物一起吸入。故事可称“吸入式捕食”，但不把所有摄食都画成从水面跃起。鸟、猴和小型哺乳动物属于公共叙述中的零散记录，不进入 `foods` 或关键事实。

建议字段：

```ts
diet: {
  types: ['carnivore', 'piscivore'],
  foods: ['中小型鱼类', '水生昆虫', '微型甲壳类', '其他水生无脊椎动物'],
  description:
    '以动物性食物为主。成鱼胃含物多由鱼构成，幼鱼也大量摄食昆虫和微型甲壳类；不同地点可见其他无脊椎动物与植物材料，植物是否被主动摄取仍未完全厘清。',
}
```

`piscivore` 描述主要食物，`carnivore` 容纳昆虫和甲壳类。暂不填 `omnivore`，避免把存在植物材料直接解释成稳定主动杂食；正文保留这项不确定性。

### 洪水节律、浅水巢和单侧功能性生殖腺

繁殖活动与低水末期、涨水和洪水季相衔接，具体月份随流域水文而变。亲鱼在浅水底部清理或挖出浅盘状巢，完成体外受精，守卫巢区和鱼苗。固定“直径 50 厘米、深 15 厘米”来自旧汇编，不适合覆盖不同底质和水位，图像只保留浅盘形底部凹地。

Godinho 等的解剖研究发现，雌鱼只有左侧卵巢具功能，雄鱼也只有左侧睾丸具功能。雌性性成熟体长级为 145 至 154 厘米总长，雄性为 115 至 124 厘米总长。样本和历史种界限制这些数值，产品可作为带来源的展示事实，不把它们设为所有流域的法律捕捞门槛。[Godinho et al. 2005](https://doi.org/10.1111/j.1463-6395.2005.00213.x)

### 亲鱼关系和头部液体

遗传亲子分析没有支持严格终身单配，研究观察到多配偶证据。故事可说“繁殖对共同筑巢和护幼”，不能说“巨骨舌鱼一生一夫一妻”。[Farias et al. 2015](https://doi.org/10.1590/1982-0224-20140010)

孵化后通常由雄鱼承担更密集、更长的鱼苗照护，鱼苗聚在照护成鱼头部附近；雌鱼也可参与外围防守。Torati 等记录双亲头部感觉管系统释放液体，并从液体中鉴定 422 种蛋白，其中 28 种属于预测分泌的细胞外蛋白，还包括激素和 12 种免疫相关蛋白。该研究提出化学通信、幼鱼吸引、营养或免疫作用假说，没有验证“亲鱼用乳汁喂幼鱼”。[Torati et al. 2017](https://doi.org/10.1371/journal.pone.0186692)

现有系统证据也不支持把本种称为口孵鱼。图片不能画成成鱼把卵或整群幼鱼含在口内；大口靠近鱼苗的瞬间不足以证明口孵。

## 行为、感官与生理

### 呼吸鳔摄取氧，鳃保留别的任务

成鱼必须到水面吞咽空气。空气经口和气门进入细长、分隔且高度血管化的鳔，薄的气血屏障支持氧扩散。Scadeng 等用 CT 和 MRI 重建一尾 190 厘米、70.5 千克的雌鱼，显示呼吸鳔沿体腔延伸并形成复杂血管化内表面；这是一个体解剖，不是全种体尺样本。[Scadeng et al. 2020](https://doi.org/10.3389/fphys.2020.00260)

Fernandes 等比较约 100 克幼鱼的气体交换面：按体重折算，呼吸鳔表面积约 2,173 cm²/kg，鳃约 780 cm²/kg；估算扩散能力相差约 88 倍。数值来自该发育阶段和形态测量，适合解释机制，不作为所有年龄固定比率。[Fernandes et al. 2012](https://doi.org/10.1016/j.micron.2012.03.018)

Pelster 等比较 4 至 6 克和 600 至 700 克个体。小鱼约 63% 的氧来自空气，较大鱼约 75%；空气途径排出的二氧化碳仅约 3% 和 12%，大部分二氧化碳仍经水中途径排出。鳃还参与离子调节与含氮废物排泄。[Pelster et al. 2020](https://doi.org/10.1007/s00360-020-01286-1)

### 发育会重塑鳃和离子调节器官

Brauner 等研究 100 至 1,000 克生长阶段，发现鳃丝间细胞团逐渐填充鳃小片间隙，功能性鳃面积随发育相对减少。肾脏相对增大，支持鳃缩减后对离子和酸碱调节的补偿。幼鱼不是孵化即拥有成鱼式完整空气呼吸系统，图文应保留发育转换。[Brauner et al. 2004](https://doi.org/10.1242/jeb.00887)

“肺”可以作为功能类比，不是解剖名称。结构化文本使用“呼吸鳔”或“高度血管化鳔”。鱼若无法接触水面会窒息，但这不支持“能在陆地生活”或“离水 24 小时没有风险”。

### 浮头既暴露个体，也提供监测窗口

空气呼吸让经验丰富的渔民通过浪花、声音、体型和浮头位置辨认个体。Castello 将方法标准化为不大于 2 公顷的单元、20 分钟计数，只记录超过 1 米的鱼，并把 1 至 1.5 米和超过 1.5 米分开。与同一实验区域的标记重捕估算相比，计数高度相关，`r = 0.98`。[Castello 2004](https://doi.org/10.1577/M02-024.1)

方法依赖受训渔民、安静无风雨的条件、足够视野和相互不重叠的计数单元。密集水草会降低可见性，体型、温度与活动改变浮头间隔。Stokes 等在较冷研究水域发现 15% 的标记个体浮头间隔超过 20 分钟，说明任何新水域都需要本地校准，不能把 20 分钟机械当作绝对探测窗口。[Stokes et al. 2021](https://doi.org/10.1002/aqc.3580)

## 威胁、保护和控制

### 原生范围的主要压力

1. **目标性和非法过捕**：肉产量高、市场价值高，成鱼浮头可被定位。鱼叉、刺网和商业运输能迅速移走大型繁殖个体。
2. **捕走护幼亲鱼**：护巢、护幼持续时间长，移走亲鱼会同时增加当季幼鱼死亡风险。
3. **洪泛生境退化**：砍伐淹水森林、湖岸改造、污染和泥沙变化会削弱觅食、隐蔽和巢区质量。
4. **水文和连通性改变**：水坝、堤防、航道工程与极端旱涝可改变湖泊和淹水森林之间的季节通道。
5. **分类和监测缺口**：旧捕捞统计把多个 _Arapaima_ 名称合并，1996 年全球 DD 又缺少新评估，增加跨国管理和 CITES 无害判定难度。

Castello 等调查 81 个社区、约 1,040 km² 的洪泛区，按当地访谈和计数把 76% 社区水域列为 depleted、17% 为 overexploited、5% 为 well-managed、2% 为 unfished，并在 19% 社区记录零密度或局地消失。数字只描述研究区快照，不能写成“全球 76% 已枯竭”。[Castello et al. 2015](https://doi.org/10.1002/aqc.2491)

### 原生范围的保护与受控利用

- 由社区轮值巡护湖口和保护湖，减少商业偷捕与开放进入。
- 在低水期使用标准化浮头计数，并将计数、不确定性和捕捞记录逐年归档。
- 保护繁殖成鱼、巢区、护幼群和小鱼密集的浮水植物带。
- 设置地点限定的季节封闭、最小体长与成鱼配额；配额必须依据当地法规和年度监测，不把单项研究的 30% 上限推广到整个范围。
- 保持洪泛湖、森林水道和季节性淹水森林的连通，评估水坝和岸线工程。
- 把 CITES 出口许可、合法来源和无害判定与国内渔业管理衔接。
- 让受训渔民参与计数、规则制定、巡护与收益分配，避免只抽取地方知识而排除社区决策。

Campos-Silva 与 Peres 分析 Juruá 河约 500 公里范围内 83 个牛轭湖和 2005 至 2015 年计数。保护湖平均个体数远高于开放湖，社区管理解释大部分湖间数量差异。结果支持当地社区制度有效，不证明所有项目都会以相同速度恢复，也不提供全球趋势。[Campos-Silva and Peres 2016](https://doi.org/10.1038/srep34745)

### 自然分布区外的控制

非原生水域的措施包括禁止放生和转运、报告新出现点、阻止跨流域扩散、评估食物网影响，以及按当地授权捕获和宰杀。IBAMA 2026 规则还要求自然分布区外捕获鱼不得放回水体。图片和故事若展示控制捕捞，caption 必须写明非原生地点，不能让读者以为原生保护湖也实行无限捕杀。[IBAMA IN 7/2026](https://www.ibama.gov.br/component/legislacao/?legislacao=139572&view=legislacao)

## 六段故事建议

### 1. 一个熟悉名字下的五个分类名称

博物馆标本曾让“巨骨舌鱼”看起来像单一广布种。2013 年研究重新打开属内拆分，2026 年整合研究又把部分亚马孙样本收回 _A. gigas_。故事先说明范围，后续跨流域事实使用 _Arapaima_ 属级口径。

### 2. 巨大身体覆盖可弯曲的层状鳞片

成年鱼可接近 3 米、约 200 千克。矿化外层承受穿刺，胶原薄层在内部偏转裂纹和耗散能量；它的鳞片像韧性复合材料，不像一块僵硬盔甲。

### 3. 鳔取得氧，鳃处理二氧化碳和盐

鱼浮到水面吞下一口空气，高度血管化鳔完成主要氧摄取。鳃没有消失，它继续排出大部分二氧化碳并参与离子、酸碱和含氮废物调节。

### 4. 洪水把湖泊和森林接成一张季节地图

涨水时，鱼进入季节性淹水森林；退水时，经森林水道回到洪泛湖。小鱼靠近浮水植物，大鱼和小鱼都在低水期寻找较深、浑浊的位置。

### 5. 浅水巢边的长期护幼

亲鱼在浅水筑巢，共同保护卵和鱼苗。孵化后雄鱼通常承担更多照护，鱼苗围在头部附近；双亲释放的头部液体含激素和免疫相关蛋白，但它的具体功能仍待实验。

### 6. 每次浮头都可能成为鱼叉目标或计数信号

强制空气呼吸让大型成鱼容易被猎捕，也让受训渔民能用声音和水面痕迹识别个体。社区把计数连接到巡护和年度配额；在自然分布区外，同一条鱼却可能进入入侵控制方案。

## 四项 featured stats 建议

| key                            | 标签         | 值       | 单位 | 必须显示的边界                                                                        |
| ------------------------------ | ------------ | -------- | ---- | ------------------------------------------------------------------------------------- |
| `operational-maximum-length`   | 可接近体长   | 3        | 米   | Smithsonian 当前公共口径；广义 arapaima 操作上限，不是 4.5 米旧记录或严格模式标本上限 |
| `operational-maximum-mass`     | 可达体重     | 200      | 千克 | 当前权威公共资料交叉支持；不是典型个体体重                                            |
| `aerial-oxygen-share`          | 空气供氧占比 | 63 至 75 | %    | Pelster 等对 4 至 6 克和 600 至 700 克两组实验鱼；不是所有体型固定比例                |
| `count-validation-correlation` | 浮头计数验证 | 0.98     | r    | Mamirauá 受训渔民计数与同区标记重捕的相关系数，不是所有湖泊固定准确率                 |

备选展示数字：雌性成熟体长级 145 至 154 厘米总长、雄性 115 至 124 厘米总长；约 100 克幼鱼的呼吸鳔和鳃估算扩散能力相差 88 倍；鳞片矿化外层硬度约 550 MPa、内层约 200 MPa。三项都必须保留样本、发育阶段或材料实验边界。

不建议展示固定浮头间隔、4.5 米、250 千克、20 年寿命、固定产卵数或“全球减少 76%”。这些数字分别受环境、旧记录、公共汇编、寿命定义、繁殖批次和研究地理范围限制。

## 关键事实候选

1. 当前接受名作者写作 `(Schinz, 1822)`，括号反映原始组合 _Sudis gigas_。
2. _Arapaima_ 属不能写成单型属；历史 _A. gigas_ 资料常混入其他名义种。
3. 2026 年整合研究只稳定了所检 Solimões、Juruá、Purus 和 Santarém 材料，没有解决全属。
4. 全球 IUCN 仍为 1996 年 DD、unknown，不表示受胁或安全。
5. CITES 附录 II 管国际贸易，不是 IUCN 等级，也不是全面禁贸。
6. 当前安全体型口径是可接近 3 米、约 200 千克；4.5 米不用于产品。
7. 呼吸鳔承担主要氧摄取，鳃仍排出大部分二氧化碳并调节离子。
8. 幼鱼随发育逐渐增强空气呼吸，鳃的有效交换面积相对缩小。
9. 不同体型实验鱼约 63% 至 75% 的氧来自空气，比例不是全种常数。
10. 鱼随洪水进入淹水森林，退水时返回连通水道和洪泛湖。
11. 小型 arapaima 在低水期更常靠近密集浮水植物。
12. 鳞片用硬矿化外层和扭转胶原内层兼顾抗穿刺与韧性。
13. 成鱼食物以鱼为主，幼鱼也大量吃昆虫和微型甲壳类；植物材料含义未定。
14. 雌雄各只有左侧生殖腺具功能。
15. 遗传研究不支持严格终身单配；不要把繁殖对写成固定夫妻。
16. 孵化后雄鱼通常承担更多护幼，但双亲都可参与。
17. 头部液体含激素和免疫相关蛋白，具体通信、营养或免疫功能尚未证实。
18. 训练有素的渔民浮头计数与标记重捕高度相关，`r = 0.98`。
19. 20 分钟计数窗需要本地校准；较冷水域可有个体超过这个间隔才浮头。
20. 同一属在原生保护湖需要恢复，在巴西列明的自然分布区外水域可接受控制。

## 图像准确性和提示词

### 六图共通规格

- 每张源图 1536×1024、3:2、sRGB、不透明；运行时输出 WebP。
- 采用亚马孙洪泛水域自然史写实摄影风格。画面不放文字、箭头、比例尺、徽标、坐标或发光呼吸轨迹。
- 外形锚点：粗长流线体、大而坚硬的短头、略上翘的大口、大型重叠圆鳞、浅色腹面、后半身红橙色、长背鳍和臀鳍都位于身体后段、短圆尾鳍。
- 鳍锚点：一对胸鳍和一对腹鳍存在；没有脂鳍、触须、鳃外露或龙鱼式下颌须。
- 鳞片锚点：边缘清楚但彼此重叠，表面湿润有柔和反光；不是鳄鱼骨板、金属铆钉或宝石马赛克。
- 性别锚点：除非 caption 依据行为写“通常由雄鱼承担更多护幼”，不要凭红色或头形判断雌雄。
- 所有画面属于科学约束下的编辑重建，不是物种鉴定凭证、真实行为记录或分布点证据。

共同排除词：`no barbels, no arowana chin barbels, no eel body, no crocodile scutes, no metallic plate armor, no adipose fin, no exposed gill slits, no shark teeth, no dolphin blowhole, no water spout, no mouthbrooding, no prey bird or monkey, no gore, no text, no watermark`。

### 分帧方案

最终逐字提示词、生成模式和转换记录见 [`src/assets/source/species/arapaima/README.md`](../../src/assets/source/species/arapaima/README.md)。

| 文件                                   | 最终场景                                                 | 科学边界                                                     | 产品焦点               |
| -------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ | ---------------------- |
| `01-floodplain-portrait.webp`          | 单只完整成鱼在浑绿洪泛湖中横向缓游，左侧保留文字负空间   | 属级可靠外形；不宣称流域、性别、精确体长或严格种级诊断       | `{ x: 0.68, y: 0.51 }` |
| `02-bony-head-and-posterior-fins.webp` | 单只完整成鱼侧视，突出宽阔骨质头、大鳞、后置背臀鳍和圆尾 | 生成图不能替代凭证标本，也不能区分属内全部接受种             | `{ x: 0.50, y: 0.52 }` |
| `03-surface-air-breath.webp`           | 单只完整成鱼斜向水面完成一次吸气，水面只有自然波纹       | 没有喷气孔、水柱或鲸式呼吸；单帧不表达固定呼吸间隔           | `{ x: 0.58, y: 0.51 }` |
| `04-flooded-forest-fish-foraging.webp` | 单只成鱼在淹水森林中接近一群分散小鱼，嘴保持闭合         | 接近不等于追逐或捕获；小鱼不能代表完整食谱或确定的猎物种     | `{ x: 0.62, y: 0.53 }` |
| `05-juvenile-school-guarding.webp`     | 一只性别未定成鱼与一群游动小鱼同框，幼鱼保持在口外       | 不从画面判定性别、亲缘、窝量、配偶制、口孵或头部液体功能     | `{ x: 0.53, y: 0.49 }` |
| `06-community-surface-count.webp`      | 两名社区监测人员在无动力木舟中记录一次远处浮头事件       | 只表示计数方法；不暗示一次观察证明数量、配额、趋势或管理成功 | `{ x: 0.52, y: 0.58 }` |

### 分帧提示词补充

**01 封面**：`photorealistic Amazon floodplain natural-history editorial, one entire giant arapaima swimming calmly from right toward center in turbid olive-green freshwater, massive streamlined cylindrical body, broad bony head, huge slightly upturned mouth, very large overlapping dark gray olive scales, pale belly, muted copper-red posterior scales, long dorsal and anal fins set far back opposite each other, rounded short caudal fin, paired pectoral and pelvic fins present, entire left 35 percent soft open-water negative space`。

**02 外形**：完整侧视成鱼，突出骨质头、大型重叠圆鳞、后置背鳍和臀鳍及圆尾；不放比例尺，也不把生成图当作种级鉴别图。

**03 浮头**：成鱼以浅角度接近水面，只重建一次张口吸气和自然涟漪；不画跳跃、喷水、固定间隔或环境溶氧值。

**04 觅食**：成鱼在淹水森林中接近分散小鱼，鱼口保持闭合，猎物留有逃逸空间；不画捕获、伤口、血液或鸟兽猎物。

**05 成鱼与小鱼群**：一只性别未定成鱼与一群独立游动的小鱼同框；小鱼不进入口腔，画面不证明亲缘、口孵或分泌液喂养。

**06 计数**：两名社区监测人员坐在无动力木舟中观察一次远处浮头，一人使用无可读文字的记录板；没有网、鱼叉、渔获或管理成效暗示。

### 静态验收

1. 01、02、04 和 05 的鱼体粗长而非鳗形，背鳍与臀鳍均在后段，胸鳍和腹鳍存在。
2. 所有鱼都没有下颌须、鲶鱼触须、脂鳍、鳃裂外露或鳄鱼式骨板。
3. 02 清楚显示宽阔骨质头、大鳞、后置背臀鳍和圆尾，不提供尺寸或种级鉴定结论。
4. 03 只出现普通口部吸气和水面涟漪，不出现喷水、喷气孔、气泡光效或跃出水面。
5. 04 没有捕获、伤口或血液；caption 不把同框小鱼写成确定猎物或完整食谱。
6. 05 的小鱼在成鱼口外聚群；caption 不判定成鱼性别、亲缘、口孵或头部液体功能。
7. 06 只有监测，没有捕具和渔获；一次水面涟漪不被解释成绝对数量。

## 应删除或避免的说法

- 不写 _Arapaima_ 是单型属，也不写 2013 年拆分或 2026 年整合已经解决全部流域。
- 不把圭亚那 _A. arapaima_、Amapá 或 Tocantins-Araguaia 材料无条件归入 _A. gigas_。
- 不把历史上所有 pirarucu、paiche、arapaima 数据当作严格种级资料。
- 不把 `Actinopteri`、`Actinopterygii`、Arapaimidae 和旧 Osteoglossidae 骨架差异解释成多个物种。
- 不把“巨巴西骨舌鱼”与“巨骨舌鱼”写成两个接受种。
- 不把 1996 年 DD 改写成濒危、易危、无危或种群稳定。
- 不把论文的局地 depleted、overexploited 或 locally extinct 用词当成 IUCN 全球等级。
- 不把 CITES 附录 II 写成“濒危二级”“全面禁贸”或国内保护等级。
- 不说所有巴西水域都保护或都清除；地点决定原生管理或外来控制。
- 不把玻利维亚上 Madeira 和巴西 Santo Antônio 坝以上种群写成无争议原生范围。
- 不宣布它是毫无限定的“世界最大淡水鱼”。使用“最大型之一”或“最大型有鳞淡水鱼之一”。
- 不使用 4.5 米作为已验证最大体长，也不把 250 千克当作稳健产品上限。
- 不把 2.2 至 2.4 米、90.7 千克写成所有成鱼的范围或平均值。
- 不把成熟体长级当作全范围最小捕捞体长。
- 不写鳔是真正肺。可说“功能类似肺的呼吸鳔”。
- 不说鳃没有功能；它仍处理大部分二氧化碳并参与离子、酸碱和废物调节。
- 不写所有个体固定每 5、10 或 15 分钟浮头一次。
- 不说巨骨舌鱼能在陆地正常生活，或离水 24 小时一定存活。
- 不说鳞片绝对“食人鱼咬不穿”；写复合层结构降低穿刺和裂纹扩展风险。
- 不写固定顶级捕食者、严格鱼食性，也不把鸟、猴或哺乳动物列作常规食物。
- 不把植物胃含物直接证明为主动稳定杂食。
- 不写一生一夫一妻、严格单配或口孵。
- 不把双亲头部液体称为鱼乳，也不说已经证实喂养、传递免疫或充当信息素。
- 不使用固定巢径、巢深、产卵数、护幼月数或全年统一繁殖月份。
- 不把 `r = 0.98` 写成 98% 准确率，也不把 Mamirauá 方法无校准复制到所有气候和湖泊。
- 不把研究区 76% depleted 写成全球下降 76%。
- 不把 Juruá 社区项目的恢复速度或 30% 成年鱼配额写成全范围保证值。

## 实现字段草案

```ts
const ARAPAIMA_GIGAS_SOURCE_DATE = '2026-08-27' as const;
const ARAPAIMA_GIGAS_CONTENT_DATE = '2026-08-27' as const;

{
  id: 'species-arapaima-gigas',
  slug: 'arapaima',
  names: {
    zh: '巨骨舌鱼',
    en: 'Arapaima',
    aliases: ['巨巴西骨舌鱼', 'Pirarucu', 'Paiche', 'Giant Arapaima'],
  },
  scientificName: 'Arapaima gigas',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Actinopterygii', '辐鳍鱼纲'),
    taxon('Osteoglossiformes', '骨舌鱼目'),
    taxon('Arapaimidae', '巨骨舌鱼科'),
    taxon('Arapaima', '巨骨舌鱼属'),
  ),
  conservation: conservation('DD', 'unknown', 1996),
  distribution: {
    realms: ['freshwater'],
    continents: ['南美洲'],
    regions: [
      '亚马孙河干流与低地洪泛平原',
      'Solimões、Juruá、Purus 等连通洪泛水系',
      '季节性淹水森林、河漫滩湖泊与缓流支汊',
    ],
    countries: ['巴西', '秘鲁', '哥伦比亚', '厄瓜多尔'],
    range:
      '原生于亚马孙低地洪泛水域；严格 A. gigas 的流域边界仍受属内分类问题限制。圭亚那材料不无条件归入本种，玻利维亚上 Madeira、墨西哥和部分东南亚记录属于引入范围。',
    center: { lat: -3.2, lng: -62.5 },
  },
  habitats: [
    {
      name: '亚马孙河漫滩湖泊',
      realm: 'freshwater',
      description: '低水期的重要停留水域，较深、浑浊和连通位置常保留不同体型个体。',
      isPrimary: true,
    },
    {
      name: '季节性淹水森林',
      realm: 'freshwater',
      description: '涨水后扩展的觅食和隐蔽空间，鱼随退水返回湖泊与水道。',
    },
    {
      name: '连通支汊与缓流水道',
      realm: 'freshwater',
      description: '连接洪泛湖和淹水森林的移动通道，也提供缺氧缓流水体。',
    },
    {
      name: '浅水植被岸带',
      realm: 'freshwater',
      description: '小个体常靠近浮水植物，部分亲鱼在有遮蔽的浅水底部筑巢和护幼。',
    },
  ],
  measurements: {
    length: {
      typical: 2.3,
      max: 3,
      unit: 'm',
      note: '2.2 至 2.4 米是 Smithsonian 的较常见大型个体范围，3 米为当前操作上限；不采用旧资料的 4.5 米。',
    },
    weight: {
      typical: 90.7,
      max: 200,
      unit: 'kg',
      note: '90.7 千克是 Smithsonian 的较常见大型个体值，200 千克为操作上限；不是严格物种凭证范围。',
    },
  },
  diet: {
    types: ['carnivore', 'piscivore'],
    foods: ['中小型鱼类', '水生昆虫', '微型甲壳类', '其他水生无脊椎动物'],
    description:
      '以动物性食物为主。成鱼胃含物多由鱼构成，幼鱼也大量摄食昆虫和微型甲壳类；不同地点可见其他无脊椎动物与植物材料，植物是否被主动摄取仍未完全厘清。',
  },
  activity: ['强制空气呼吸', '随洪水侧向移动', '吸入式捕食', '浅水筑巢', '双亲护幼'],
  tags: ['亚马孙洪泛平原', '大型淡水鱼', '空气呼吸鱼', '呼吸鳔', 'CITES 附录 II', '社区渔业管理'],
  summary:
    '一种生活在亚马孙洪泛平原的大型强制空气呼吸鱼，靠血管化鳔吸氧，也因定期浮头而能被受训渔民计数和管理。',
  description:
    '巨骨舌鱼拥有宽大的骨质头、略上翘的大口和带红色的后躯，可接近 3 米、约 200 千克。它随洪水进入淹水森林，退水后返回连通湖泊；成鱼必须浮到水面换气，鳃仍排出大部分二氧化碳并调节离子。它以鱼和无脊椎动物为主，在浅水筑巢并长期护幼。IUCN 1996 年全球评估为数据缺乏，局地过捕却已造成严重衰退；社区巡护、标准化浮头计数和受控捕捞能恢复部分种群。',
  storySections: [
    {
      key: 'taxonomy-boundary',
      label: '物种边界',
      title: '一个熟悉名字下的五个分类名称',
      body: '历史资料把广布的 pirarucu 都归入 A. gigas。2013 年研究重新拆分属内名称，2026 年整合研究只稳定了部分亚马孙样本，其他流域仍需模式标本、形态和分子资料共同检验。',
    },
    {
      key: 'body-and-scales',
      label: '巨体与鳞片',
      title: '硬外层和扭转胶原组成柔韧防护',
      body: '大型个体可接近 3 米、约 200 千克。鳞片以矿化外层抵抗穿刺，内部胶原薄层偏转裂纹并耗散能量，在身体弯曲时仍保持韧性。',
    },
    {
      key: 'air-breathing',
      label: '空气呼吸',
      title: '鳔取得氧，鳃处理二氧化碳和盐',
      body: '成鱼必须浮到水面吞气，高度血管化鳔完成主要氧摄取。鳃面积虽随发育相对缩小，仍排出大部分二氧化碳并参与离子、酸碱和废物调节。',
    },
    {
      key: 'flood-pulse',
      label: '洪水脉冲',
      title: '水位把湖泊和森林接成季节地图',
      body: '涨水时，鱼进入季节性淹水森林；退水时，它们经森林水道回到洪泛湖。低水期的小鱼更常靠近浮水植物，各体型都偏向较深、浑浊的位置。',
    },
    {
      key: 'parental-care',
      label: '繁殖与护幼',
      title: '浅水巢旁，双亲守护一群鱼苗',
      body: '亲鱼在浅水筑巢并守卫后代，孵化后通常由雄鱼承担更多照护。双亲头部液体含激素和免疫相关蛋白，但研究尚未证明它会喂养幼鱼或传递免疫。',
    },
    {
      key: 'count-and-manage',
      label: '监测与管理',
      title: '浮头既暴露个体，也留下计数窗口',
      body: '强制浮头让大型成鱼容易被捕，也让受训渔民能用声音和水面痕迹辨认个体。社区把年度计数连接到巡护和配额；自然分布区外则可能依法控制。',
    },
  ],
  keyFacts: [
    'Arapaima 属不能写成单型属，历史 A. gigas 资料常混入其他名义种。',
    '成鱼的呼吸鳔承担主要氧摄取，鳃仍排出大部分二氧化碳并调节离子。',
    '大型个体可接近 3 米、约 200 千克；4.5 米旧记录不作为已验证上限。',
    '鱼随涨水进入淹水森林，退水时返回连通水道和洪泛湖。',
    '雌雄各只有左侧生殖腺具功能，孵化后通常由雄鱼承担更多护幼。',
    '受训渔民的浮头计数与同区标记重捕高度相关，但新水域仍需校准。',
  ],
  threats: [
    '目标性和非法过捕，尤其捕走大型繁殖鱼',
    '捕走护巢或护幼亲鱼造成的当季繁殖损失',
    '洪泛森林、湖岸与浅水育幼生境退化',
    '水坝、堤防和极端水文对季节连通性的改变',
    '陈旧全球评估、分类混用和跨流域监测缺口',
  ],
  conservationActions: [
    '支持社区巡护、保护湖和公平的地方共同治理',
    '由受训渔民开展低水期标准化浮头计数并保留误差边界',
    '依据当地法规和年度计数设置季节、体长与成鱼捕捞配额',
    '保护巢区、护幼群、浮水植物带和洪泛森林连通性',
    '落实 CITES 合法来源、许可和无害判定要求',
    '在自然分布区外阻止放生和转运，并按当地授权控制种群',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'operational-maximum-length',
      label: '可接近体长',
      value: '3',
      unit: '米',
      note: '当前权威公共资料采用的操作上限，不是 4.5 米旧记录。',
    },
    {
      key: 'operational-maximum-mass',
      label: '可达体重',
      value: '200',
      unit: '千克',
      note: '大型个体上限口径，不是典型体重。',
    },
    {
      key: 'aerial-oxygen-share',
      label: '空气供氧占比',
      value: '63 至 75',
      unit: '%',
      note: '两组不同体型实验鱼的结果，不是全种固定比例。',
    },
    {
      key: 'count-validation-correlation',
      label: '浮头计数验证',
      value: '0.98',
      unit: 'r',
      note: '受训渔民计数与同区标记重捕估算的相关系数。',
    },
  ],
  media: {
    alt: '一条大型巨骨舌鱼在亚马孙洪泛湖的浑绿水体中横向游过',
    focalPoint: { x: 0.68, y: 0.49 },
  },
  sources: ARAPAIMA_GIGAS_SOURCES,
  publishedAt: ARAPAIMA_GIGAS_CONTENT_DATE,
  updatedAt: ARAPAIMA_GIGAS_CONTENT_DATE,
}
```

`measurements` 保留带注释的公共展示值，`metrics` 刻意留空。若未来取得严格种级、同一测量设计下的成年体尺样本，再增加 `adultLengthCm` 和 `adultMassKg`。`featured` 属于首页编排决定，不是物种事实，研究不预设。

## 推荐来源数组

```ts
const ARAPAIMA_GIGAS_SOURCES = [
  {
    title: "IUCN Red List: Arapaima gigas (assessed 1996)",
    url: "https://doi.org/10.2305/IUCN.UK.1996.RLTS.T1991A9110195.en",
    kind: "conservation",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title: "Eschmeyer's Catalog of Fishes: Arapaima gigas",
    url: "https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=10160",
    kind: "taxonomy",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title: "Taiwan Fish Database: Arapaima gigas and Chinese name",
    url: "https://fishdb.sinica.edu.tw/chi/chinesequer2.php?R1=&T1=&cn=&dere=asc&fm=&gc=&me=&orderby=author&page=56&pz=200&vn=",
    kind: "taxonomy",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Magalhães et al. 2026: Integrative taxonomy data are reconciled around Arapaima gigas for the Brazilian Amazon",
    url: "https://doi.org/10.1590/1982-0224-2025-0191",
    kind: "taxonomy",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title: "Stewart 2013: Re-description of Arapaima agassizii",
    url: "https://doi.org/10.1643/CI-12-013",
    kind: "taxonomy",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Stewart 2013: Arapaima leptosoma, a new species from the Solimões basin",
    url: "https://doi.org/10.1643/CI-12-017",
    kind: "taxonomy",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "CITES AC33: Review and update of the standard nomenclature for Arapaima",
    url: "https://cites.org/sites/default/files/documents/S-AC33-48_1.pdf",
    kind: "taxonomy",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title: "CITES Appendices, valid from 25 May 2024",
    url: "https://www.cites.org/sites/default/files/eng/app/2024/E-Appendices-2024-05-25.pdf",
    kind: "conservation",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Castello and Stewart 2010: Assessing CITES non-detriment findings for Arapaima gigas",
    url: "https://cites.org/sites/default/files/ndf_material/ArapaimaCITES2009.pdf",
    kind: "conservation",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "IBAMA Instrução Normativa 7/2026: pirarucu outside its natural range",
    url: "https://www.ibama.gov.br/component/legislacao/?legislacao=139572&view=legislacao",
    kind: "conservation",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title: "FishBase: Arapaima gigas species summary",
    url: "https://www.fishbase.se/summary/Arapaima_gigas",
    kind: "general",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title: "Smithsonian's National Zoo: Arapaima species profile",
    url: "https://nationalzoo.si.edu/animals/arapaima",
    kind: "general",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Castello 2008: Lateral migration of Arapaima gigas in floodplains of the Amazon",
    url: "https://doi.org/10.1111/j.1600-0633.2007.00255.x",
    kind: "distribution",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title: "Richard et al. 2018: Size-structured habitat selection by arapaima",
    url: "https://www.usgs.gov/publications/size-structured-habitat-selection-arapaima-floodplain-lakes-lower-amazon",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Brauner et al. 2004: Ontogeny of air breathing and ion regulation in Arapaima gigas",
    url: "https://doi.org/10.1242/jeb.00887",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Fernandes et al. 2012: Morphology of gills and respiratory swimbladder in Arapaima gigas",
    url: "https://doi.org/10.1016/j.micron.2012.03.018",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Pelster et al. 2020: Gas exchange, waste excretion and ionoregulation in pirarucu",
    url: "https://doi.org/10.1007/s00360-020-01286-1",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Wood et al. 2020: Gills versus kidney for ionoregulation in Arapaima gigas",
    url: "https://doi.org/10.1242/jeb.232694",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Scadeng et al. 2020: 3D morphology of the Amazonian teleost genus Arapaima",
    url: "https://doi.org/10.3389/fphys.2020.00260",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Zimmermann et al. 2013: Mechanical adaptability of Bouligand-type arapaima scales",
    url: "https://doi.org/10.1038/ncomms3634",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title: "Lin et al. 2011: Protective role of Arapaima gigas scales",
    url: "https://doi.org/10.1016/j.jmbbm.2011.03.024",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Jacobi et al. 2020: Feeding of Arapaima sp. in western Amazon floodplain lakes",
    url: "https://doi.org/10.1111/jfb.14372",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Godinho et al. 2005: Gonadal morphology and reproductive traits of Arapaima gigas",
    url: "https://doi.org/10.1111/j.1463-6395.2005.00213.x",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title: "Núñez et al. 2009: Hormonal sex determination in Arapaima gigas",
    url: "https://pubmed.ncbi.nlm.nih.gov/19189239/",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title: "Farias et al. 2015: Evidence of polygamy in Arapaima gigas",
    url: "https://doi.org/10.1590/1982-0224-20140010",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Torati et al. 2017: Head secretions and parental care in Arapaima gigas",
    url: "https://doi.org/10.1371/journal.pone.0186692",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title: "Castello 2004: A method to count pirarucu using fisher knowledge",
    url: "https://doi.org/10.1577/M02-024.1",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Stokes et al. 2021: Calibrating arapaima surfacing intervals for abundance surveys",
    url: "https://doi.org/10.1002/aqc.3580",
    kind: "ecology",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Castello et al. 2015: Understanding fishing-induced extinctions in Amazonian floodplains",
    url: "https://doi.org/10.1002/aqc.2491",
    kind: "conservation",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
  {
    title:
      "Campos-Silva and Peres 2016: Community-based management induces rapid recovery",
    url: "https://doi.org/10.1038/srep34745",
    kind: "conservation",
    accessedAt: ARAPAIMA_GIGAS_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

来源数组以全球状态、分类边界、原始生态实验和现行管理规则为核心。Smithsonian 和 FishBase 仅支撑公共体型、名称与交叉核对；它们不覆盖 2026 年分类边界，也不替代呼吸、食性、繁殖或管理原始研究。
