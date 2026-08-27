# 大西洋蓝鳍金枪鱼（_Thunnus thynnus_）完整档案研究

- 检索与核验日期：2026-08-27
- 展示中文名：**大西洋蓝鳍金枪鱼**；英文主名：**Atlantic Bluefin Tuna**；接受学名：**_Thunnus thynnus_ (Linnaeus, 1758)**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并约束 1 张封面、5 张图库图、故事章节、展示数字和来源数组
- 分类口径：Eschmeyer’s Catalog 接受 _T. thynnus_；目采用 WoRMS 与当前鱼类骨架的 Scombriformes，纲沿用仓库已有鱼类的 Actinopterygii
- 保护口径：IUCN 2021 全球评估为 LC，正式全球趋势为 unknown；ICCAT 的东部和西部渔业种群状态另表说明，不能覆盖 IUCN 字段
- 时间边界：ICCAT 2025 SCRS 汇总以 2020 为状态参考年；最近完整评估仍是东部/地中海 2022、西部 2021；2026 年状态检查正在进行，截至检索日尚无第二次会间会议正式报告
- 数字原则：物种展示数字使用相对稳定的生物学量。2026—2028 年 TAC 只在管理正文中注明年份，不放入长期展示数字
- 空间边界：45°W 是 ICCAT 管理分界线，不是种群不能穿越的生态屏障；地中海和墨西哥湾是两个主要产卵群体的核心区，西侧产卵证据已经扩展到加勒比海、巴哈马、美国东南陆架边缘和 Slope Sea

## 结论摘要

1. Eschmeyer’s Catalog 接受 **_Thunnus thynnus_ (Linnaeus, 1758)**，原始组合是 _Scomber thynnus_ Linnaeus, 1758，现属 Scombridae: Scombrinae。作者名加括号，因为物种后来从 _Scomber_ 转入 _Thunnus_。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=19735)
2. WoRMS 将 AphiaID 127029 标为 accepted，分类到 Scombriformes、Scombridae、_Thunnus_，并标记为海水种、可进入半咸水。仓库应保持 `realms: ['marine']`，不因偶见半咸水记录新增淡水生境。[WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=127029)
3. 太平洋蓝鳍金枪鱼 _T. orientalis_ 和南方蓝鳍金枪鱼 _T. maccoyii_ 是独立接受种。旧名 _T. thynnus orientalis_ 与 _T. thynnus maccoyii_ 不能当成本种亚种，也不能把太平洋或南半球资料并入本档案。[WoRMS, _T. orientalis_](https://www.marinespecies.org/aphia.php?p=taxdetails&id=274294) [WoRMS, _T. maccoyii_](https://www.marinespecies.org/aphia.php?p=taxdetails&id=127030)
4. IUCN 2021 全球评估为 **Least Concern**，评估日期 2021-01-15，`Current Population Trend` 为 **Unknown**。应落库为 `conservation('LC', 'unknown', 2021)`，不填受胁准则。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T21860A46913402.en)
5. IUCN 从 EN 调整到 LC，依据是评估窗口内的全球聚合证据，而不是每个区域都恢复。IUCN 同时强调东西大西洋区域状况不同；正式趋势仍为 unknown，所以产品不能写“全球持续增长”。[IUCN 2021 tuna reassessment announcement](https://iucn.org/news/species/202109/tuna-species-recovering-despite-growing-pressures-marine-life-iucn-red-list)
6. ICCAT 以东部大西洋/地中海和西部大西洋两个管理种群与管理区运行评估和管理程序。电子标记和基因组研究支持两个主要产卵群体，但也显示大量跨区混合；“两管理种群”不等于两个群体终生分居。[ICCAT MSE](https://www.iccat.int/mse/en/specMSE_BFT.asp) [Block et al. 2026](https://doi.org/10.1073/pnas.2535185123) [Mikles et al. 2026](https://doi.org/10.1016/j.cub.2026.04.006)
7. 东部/地中海最近完整评估仍是 2022。三个模型都重建出 1970 年代以后下降、2007 年恢复计划后尤其是 2000 年代末起上升，但对上升幅度、近期补充量和当前捕捞强度的判断不一致。[ICCAT 2022 eastern assessment](https://www.iccat.int/Documents/CVSP/CV079_2022/n_3/CV079030426.pdf)
8. ICCAT 2025 汇总沿用 **2020** 参考年，将东部三个模型的不确定性合并为 `Fcurrent/F0.1 = 0.81`（约 95% 区间 0.48—1.62），正式结论为未发生过度捕捞。2022 完整评估中的 VPA 点估计高于 1，Stock Synthesis 和 ASAP 低于 1；正式结论没有消除模型分歧，也不能证明生物量已经恢复。ICCAT 没有为东部估计可用于判定生物量状态的参考点。[ICCAT 2025 SCRS report](https://www.iccat.int/Documents/Meetings/Docs/2025/Reports/2025_SCRS_ENG.pdf) [ICCAT 2022 eastern assessment](https://www.iccat.int/Documents/CVSP/CV079_2022/n_3/CV079030426.pdf)
9. 西部最近完整评估仍是 2021。ICCAT 2025 汇总沿用 **2020** 参考年，给出 `F2018–2020/F0.1 = 0.53`（约 80% 区间 0.49—0.58），正式结论为未发生过度捕捞，发生过度捕捞的概率不超过 1%。ICCAT 未估计可用于判定西部生物量状态的参考点，因此不能判定生物量状态。[ICCAT 2025 SCRS report](https://www.iccat.int/Documents/Meetings/Docs/2025/Reports/2025_SCRS_ENG.pdf) [ICCAT 2021 western assessment](https://www.iccat.int/Documents/CVSP/CV078_2021/n_3/CV078030640.pdf) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/western-atlantic-bluefin-tuna)
10. ICCAT 2026 年 3 月第一次会间会议仍在准备状态检查，模型、指数、地中海围网数据和混合参数尚待处理。ICCAT 当前评估页把下一次完整评估列为 2027；截至 2026-08-27，7 月第二次会间会议没有公开正式报告，不能自拟“2026 新评估结论”。[ICCAT 2026 first intersessional report](https://www.iccat.int/Documents/Meetings/Docs/2026/reports/2026_BFT_MAR_ENG.pdf) [ICCAT assessment schedule](https://www.iccat.int/en/assess.html) [ICCAT 2026 meetings](https://www.iccat.int/en/Meetings.html)
11. 2026—2028 年法定 TAC 为东部/地中海每年 48,403 吨、西部每年 3,081.6 吨，均包含死亡丢弃。西部数值不是管理程序直接输出的 2,568 吨，而是委员会按最高 120% 规则确定的法律上限。[ICCAT Rec. 25-04](https://www.iccat.int/Documents/Recs/compendiopdf-e/2025-04-e.pdf) [ICCAT Rec. 25-05](https://www.iccat.int/Documents/Recs/compendiopdf-e/2025-05-e.pdf) [ICCAT 2025 press release](https://www.iccat.int/Documents/Meetings/Docs/2025/Press_Release_2025_ENG.pdf)
12. ICCAT 2019 SCRS 报告记载可达 **330 cm 直叉长、725 kg、寿命约 40 年**；电子标记记录显示可潜至 **1,000 m 以上**。这些是上限或能力记录，不是普通成鱼的典型体尺和日常深度。[ICCAT 2019 SCRS report](https://www.iccat.int/Documents/Meetings/Docs/2019/REPORTS/2019_SCRS_ENG.pdf) [Block et al. 2001](https://doi.org/10.1126/science.1061197)
13. 识别组合是粗壮纺锤体、蓝黑背和银白腹、短胸鳍、红褐色第二背鳍、尾前一列小型暗黄鳍带黑缘、窄尾柄上的一大两小隆起和新月形尾鳍。不要画成黄鳍金枪鱼的超长黄色镰刀鳍。[FAO Scombrids species account](https://www.fao.org/4/y4162e/y4162e53.pdf)
14. 蓝鳍金枪鱼依靠奇网状血管的逆流交换保存代谢热，肌肉在实测条件下可高于周围水温 15°C 以上。它属于**区域性内温**，不是像鸟兽那样全身维持单一恒定体温；“热血鱼”只能作解释性简称。[Carey & Gibson 1983](<https://doi.org/10.1016/0300-9629(83)90612-6>) [Block et al. 2001](https://doi.org/10.1126/science.1061197)
15. 野外运动标签只覆盖 4 尾大型个体，却直接记录了持续巡航、间歇尾击和下潜滑翔等多种步态，常规速度约 1.5 m/s 量级。它不支持 70 km/h、100 km/h 等网络“最高时速”，产品不填 `topSpeedKph`。[Gleiss et al. 2019](https://doi.org/10.1098/rsos.190203)
16. 2025 年跨范围胃含物元分析汇总 1985—2020 年 4,997 个胃样本，显示食物随海区、年份和体长显著改变。西北大西洋陆架常见鲱科鱼；较小个体在其他海区更多吃鳀类，较大个体更多吃开眼鱿与梭腹鱼类。不能把“鲱鱼和鲭鱼”写成全年全球固定主食。[Logan et al. 2025](https://doi.org/10.3354/meps14875)
17. 地中海雌鱼通常在约 3—5 龄、105—140 cm 曲叉长范围开始成熟；ICCAT 当前评估假定东部在 5 龄完全参与产卵。西部使用的早熟与晚熟两套产卵比例向量都可能有偏，不能写“西部固定 8 岁/12 岁才成熟”。[Corriero et al. 2005](https://doi.org/10.1111/j.1439-0426.2005.00700.x) [ICCAT 2019 SCRS report](https://www.iccat.int/Documents/Meetings/Docs/2019/REPORTS/2019_SCRS_ENG.pdf)
18. 本种在暖水外海分批排卵，受精卵和仔鱼留在水柱中，没有筑巢或护幼。西地中海组织学样本估计相对批次繁殖力约 48 粒/克、平均产卵间隔约 1.2 天，但这是特定产卵场样本，不应换算成每条雌鱼的固定年产卵数。[Aranda et al. 2013](https://doi.org/10.1016/j.seares.2012.08.005) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/western-atlantic-bluefin-tuna)
19. 2026 年 1,720 尾电子标记数据证实跨大西洋移动和偏东向西的混合。许多东部来源鱼在西侧索饵多年后回地中海产卵；45°W 只是管理线，不能在故事图中画成鱼群止步的墙。[Block et al. 2026](https://doi.org/10.1073/pnas.2535185123) [NOAA Fisheries summary](https://www.fisheries.noaa.gov/feature-story/western-atlantic-provides-refuge-bluefin-tuna)
20. 2026 年对 35,124 次浮游生物拖网和近 5,000 尾仔鱼等历史资料的整合，把西侧直接产卵证据扩展到墨西哥湾、西北加勒比、巴哈马以北、佛罗里达流近岸侧和西部 Slope Sea。它提示近连续产卵带，但西北马尾藻海仍缺关键采样，不能宣布“第三个独立种群已经确认”。[Richardson et al. 2026](https://doi.org/10.1016/j.pocean.2026.103687)

## 名称、分类与物种边界

### 接受名和仓库分类链

Linnaeus 在 1758 年以 _Scomber thynnus_ 描述本种。Catalog 当前接受 _Thunnus thynnus_ (Linnaeus, 1758)，科为 Scombridae，亚科为 Scombrinae。WoRMS 使用 Teleostei 作为直接显示的纲，仓库已有鱼类则统一以 Actinopterygii 表示辐鳍鱼纲；这只是分类层级展示差异。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=19735) [WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=127029)

| 阶元 | 学名              | 中文名           | 落库口径                                       |
| ---- | ----------------- | ---------------- | ---------------------------------------------- |
| 界   | Animalia          | 动物界           | 仓库固定动物界                                 |
| 门   | Chordata          | 脊索动物门       | Catalog、WoRMS 一致                            |
| 纲   | Actinopterygii    | 辐鳍鱼纲         | 仓库鱼类统一口径；WoRMS 页面直接显示 Teleostei |
| 目   | Scombriformes     | 鲭形目           | WoRMS 与当前鱼类分类骨架                       |
| 科   | Scombridae        | 鲭科             | Catalog、WoRMS 一致                            |
| 属   | _Thunnus_         | 金枪鱼属         | 接受属                                         |
| 种   | _Thunnus thynnus_ | 大西洋蓝鳍金枪鱼 | 接受种                                         |

### 主名、别名与易混种

- 中文主名：大西洋蓝鳍金枪鱼，直接说明洋盆，避免与另外两种蓝鳍金枪鱼混淆
- 英文主名：Atlantic Bluefin Tuna
- 可用别名：北方蓝鳍金枪鱼、Northern Bluefin Tuna；后者是旧式通名，不能暗示包含太平洋种
- 不建议单独使用：蓝鳍金枪鱼、黑鲔。这些称呼在中文市场和地区资料中可能指 _T. orientalis_ 或蓝鳍类群
- 独立种：太平洋蓝鳍金枪鱼 _T. orientalis_、南方蓝鳍金枪鱼 _T. maccoyii_。不得借用它们的体尺、分布、IUCN 等级、养殖或迁徙资料

### 建议名称字段

```ts
names: {
  zh: '大西洋蓝鳍金枪鱼',
  en: 'Atlantic Bluefin Tuna',
  aliases: ['北方蓝鳍金枪鱼', 'Northern Bluefin Tuna'],
},
scientificName: 'Thunnus thynnus',
taxonomy: animalTaxonomy(
  taxon('Chordata', '脊索动物门'),
  taxon('Actinopterygii', '辐鳍鱼纲'),
  taxon('Scombriformes', '鲭形目'),
  taxon('Scombridae', '鲭科'),
  taxon('Thunnus', '金枪鱼属'),
),
```

## 全球 IUCN、区域种群与现行管理

### 全球结构化字段

IUCN 条目为 Collette 等 2021, _Thunnus thynnus_, `e.T21860A46913402`。评估日期为 2021-01-15，发布在 2021-2 版红色名录，等级 Least Concern，当前趋势 Unknown。LC 是全球灭绝风险分类，不是某片海域当前渔业是否可持续的认证。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T21860A46913402.en)

| 字段         | 落库值    | 说明                                 |
| ------------ | --------- | ------------------------------------ |
| code         | `LC`      | 全球 IUCN 灭绝风险等级               |
| trend        | `unknown` | IUCN 正式当前趋势，不推断 increasing |
| assessedYear | `2021`    | 评估年，不是访问年                   |
| criteria     | 留空      | LC 不填受胁准则                      |

IUCN 的全球聚合分析受东部大种群强烈影响，并明确保留西部衰退和区域差异。旧版 EN 到新版 LC 的变化可以写作“全球灭绝风险评估下调”，不能简化为“所有种群已经恢复”。[IUCN 2021 tuna reassessment announcement](https://iucn.org/news/species/202109/tuna-species-recovering-despite-growing-pressures-marine-life-iucn-red-list)

### 四个不能混用的判断层级

| 层级                | 最近证据                                   | 可以说                                                                     | 不可以说                                 |
| ------------------- | ------------------------------------------ | -------------------------------------------------------------------------- | ---------------------------------------- |
| 全球物种 IUCN       | 2021                                       | LC；当前趋势 unknown                                                       | 全球持续增长、全球完全恢复               |
| 东部/地中海管理种群 | 2025 SCRS 汇总，参考年 2020；2022 完整评估 | 正式结论为未发生过度捕捞；SSB 上升；三个模型仍有分歧；缺少生物量状态参考点 | 已经完全恢复、三个模型一致、生物量已健康 |
| 西部管理种群        | 2025 SCRS 汇总，参考年 2020；2021 完整评估 | 正式结论为未发生过度捕捞，概率界限为 ≤1%；缺少生物量状态参考点             | 捕捞死亡率结论可证明生物量已健康         |
| 2026 状态检查       | 3 月工作报告；7 月正式报告未公开           | 正在更新指数、模型、年龄和混合资料                                         | 2026 已完成新评估并推翻 2021/2022 结论   |

ICCAT 当前评估日程仍列东部/地中海 `2022 / 2027`、西部 `2021 / 2027`。[ICCAT assessment schedule](https://www.iccat.int/en/assess.html)

### 东部/地中海：正式结论无过度捕捞，模型分歧仍需保留

2022 年完整评估使用 VPA、Stock Synthesis 和 ASAP。三套模型都重建出 1970 年代至恢复计划前的下降，并在 2000 年代末后出现强劲上升；三者对绝对规模和近期上升速度的估计差异很大，近期补充量也不确定。[ICCAT 2022 eastern assessment](https://www.iccat.int/Documents/CVSP/CV079_2022/n_3/CV079030426.pdf)

相对 `F0.1` 的当前捕捞死亡率结果为：

| 模型            | `Fcurrent/F0.1` |  95% 区间 | 解释边界                 |
| --------------- | --------------: | --------: | ------------------------ |
| VPA             |            1.16 | 0.73—1.62 | 点估计高于 1，但区间跨 1 |
| Stock Synthesis |            0.72 | 0.62—0.80 | 低于 1                   |
| ASAP            |            0.54 | 0.48—0.60 | 低于 1                   |

ICCAT 2025 汇总以 2020 为状态参考年，将三个模型及其不确定性合并为 `Fcurrent/F0.1 = 0.81`，约 95% 区间为 0.48—1.62，并把正式捕捞死亡率状态列为 `Overfishing: NO`。委员会没有估计可用于判定东部生物量状态的参考点。正文应同时保留“正式结论为未发生过度捕捞”“2022 三模型有分歧”“生物量状态无法判定”三层信息，不能把捕捞死亡率结论改写成已经达到某个生物量目标。[ICCAT 2025 SCRS report](https://www.iccat.int/Documents/Meetings/Docs/2025/Reports/2025_SCRS_ENG.pdf)

### 西部：捕捞死亡率判断与生物量判断必须成对出现

2021 年西部评估因 VPA 诊断问题，没有把 VPA 用于定量建议。ICCAT 2025 汇总以 2020 为状态参考年，沿用 Stock Synthesis 结果：`F2018–2020/F0.1 = 0.53`，约 80% 区间为 0.49—0.58；正式结论为 `Overfishing: NO`，发生过度捕捞的概率不超过 1%。委员会因补充潜力等不确定性没有估计生物量参考点，因此无法判定西部生物量状态。[ICCAT 2025 SCRS report](https://www.iccat.int/Documents/Meetings/Docs/2025/Reports/2025_SCRS_ENG.pdf) [ICCAT 2021 western assessment](https://www.iccat.int/Documents/CVSP/CV078_2021/n_3/CV078030640.pdf)

NOAA 的现行物种页采用同一口径：西部未发生过度捕捞，生物量状态尚不能确定。这是美国对西部管理种群的摘要，不是全球 IUCN 趋势。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/western-atlantic-bluefin-tuna)

### 管理程序、TAC 与追溯

ICCAT 在 2022 年采用蓝鳍金枪鱼管理程序，2023 年采用异常情况协议。管理程序在多种混合、补充和观测误差情境下寻求未来 30 年约 60% 的概率让两个种群处于管理目标“绿色象限”；这是前瞻目标性能，不是当前两个种群都有 60% 概率健康。[ICCAT MSE](https://www.iccat.int/mse/en/specMSE_BFT.asp) [ICCAT 2025 SCRS report](https://www.iccat.int/Documents/Meetings/Docs/2025/Reports/2025_SCRS_ENG.pdf)

2025 年委员会最终采用以下 2026—2028 年法律限额：[ICCAT Rec. 25-04](https://www.iccat.int/Documents/Recs/compendiopdf-e/2025-04-e.pdf) [ICCAT Rec. 25-05](https://www.iccat.int/Documents/Recs/compendiopdf-e/2025-05-e.pdf)

| 管理区             | 管理程序原始输出 | 最终法定 TAC | 说明                                        |
| ------------------ | ---------------: | -----------: | ------------------------------------------- |
| 东部大西洋与地中海 |      48,403 t/年 |  48,403 t/年 | 2026—2028；含死亡丢弃                       |
| 西部大西洋         |       2,568 t/年 | 3,081.6 t/年 | 2026—2028；按允许最高 120% 规则；含死亡丢弃 |

东部建议还规定配额、作业季节、捕捞能力、围网转笼和养殖监测、立体视频、观察员与蓝鳍金枪鱼捕捞文件。西部建议规定一般最小 30 kg 或 115 cm 叉长、幼鱼容许限额、禁止在墨西哥湾对西部产卵种群开展定向渔业、禁止海上转运和持续科研监测。细节是时效性法规，产品正文应写原则，来源数组保留具体建议。[ICCAT Rec. 25-04](https://www.iccat.int/Documents/Recs/compendiopdf-e/2025-04-e.pdf) [ICCAT Rec. 25-05](https://www.iccat.int/Documents/Recs/compendiopdf-e/2025-05-e.pdf)

## 分布、生境与结构化范围

### 地理范围

Catalog 的历史和现代汇总范围包括温带北大西洋、墨西哥湾、加勒比、地中海、马尔马拉海、黑海、北海与西波罗的海，并向西南记到巴西东北、向东南记到南非。后两端和黑海、波罗的海记录不等于当前全年核心分布，地图不应涂成整个热带大西洋常驻区。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=19735)

成鱼和亚成鱼在外洋、陆架边缘、锋面、上升流和高纬生产力海域索饵。西部产卵和仔鱼研究常把 23—28°C 作为适宜表层水范围；西地中海研究记录到约 19—20°C 时开始产卵，因此不能给东西海域共用一个固定产卵温度范围。标记个体使用从约 1°C 到 29°C 的环境并潜至 1,000 m 以上，但温度耐受随体型、深度和行为改变，不能把 1—29°C 当作卵、仔鱼和成鱼共同的“偏好范围”。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T21860A46913402.en) [Block et al. 2001](https://doi.org/10.1126/science.1061197) [Richardson et al. 2026](https://doi.org/10.1016/j.pocean.2026.103687) [Gordoa & Carreras 2014](https://doi.org/10.1371/journal.pone.0090691)

建议结构化范围：

```ts
distribution: {
  realms: ['marine'],
  continents: ['欧洲', '北美洲', '非洲', '亚洲', '南美洲'],
  regions: [
    '北大西洋温带外海、陆架边缘与高纬索饵海域',
    '地中海、马尔马拉海及相邻东北大西洋',
    '墨西哥湾、佛罗里达海峡、西北大西洋陆架与 Slope Sea',
    '北海、挪威海与冰岛周边季节性活动区',
  ],
  countries: [
    '加拿大', '美国', '墨西哥', '巴哈马', '古巴',
    '冰岛', '挪威', '英国', '爱尔兰', '法国', '西班牙', '葡萄牙',
    '意大利', '马耳他', '克罗地亚', '希腊', '土耳其',
    '摩洛哥', '阿尔及利亚', '突尼斯', '利比亚',
  ],
  range:
    '广布北大西洋及相邻海域，在外海、陆架和沿岸索饵区之间季节移动，并在地中海及西大西洋暖水产卵区繁殖。历史或边缘记录延伸到黑海、西波罗的海、巴西东北和南非；代表国家列表不等于完整出现记录。',
  center: { lat: 38, lng: -30 },
}
```

`center` 只是打开北大西洋地图的视图中心，不是模式产地、观测点或种群质心。

### 建议生境字段

```ts
habitats: [
  {
    name: "北大西洋外海与陆架边缘",
    realm: "marine",
    description:
      "主要巡游与索饵空间，个体跨越深水盆地并沿锋面、海流和陆架坡折寻找群游猎物。",
    isPrimary: true,
  },
  {
    name: "高纬高生产力索饵海域",
    realm: "marine",
    description:
      "加拿大大西洋、冰岛、挪威海和北海等季节性食物热点，常见大型个体追随鲱、鲭等群游鱼。",
  },
  {
    name: "暖水外海产卵区",
    realm: "marine",
    description:
      "地中海及西大西洋的季节性暖水产卵水域；两区温度窗口不同，卵和仔鱼随水柱与海流分布。",
  },
  {
    name: "中层与深层水域",
    realm: "marine",
    description:
      "日常垂直移动和深潜可进入中层乃至一千米以下，深度使用随猎物、温度、氧和时段改变。",
  },
];
```

不要加入“珊瑚礁”“海草床”“河流”作为本种主要生境。WoRMS 的 brackish 标记只能说明可出现于半咸水，不能改写其远洋生活史。[WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=127029)

## 外形、体尺与图像鉴别

### 外形组合

FAO 的鲭科目录给出可直接用于验图的组合：[FAO Scombrids species account](https://www.fao.org/4/y4162e/y4162e53.pdf)

- 身体粗壮、纺锤形，前部横截面近圆；不是鲨鱼体形，也不是细长梭形的小型鲭鱼
- 吻尖、眼相对小，口端位；没有须、长吻或鲸鲨式宽扁头
- 两个背鳍间距窄；第一背鳍较高，第二背鳍低而红褐，不是长而鲜黄的镰刀
- 胸鳍短，不达到两个背鳍之间的间隙；这是与黄鳍金枪鱼视觉混淆时的重要边界
- 第二背鳍和臀鳍后各有一列小鳍，色调暗黄，边缘发黑；不能画成整齐发光的霓虹黄旗
- 尾柄很窄，中央有强大横向隆起，上下各一小隆起；尾鳍深叉、新月形
- 背部金属蓝至蓝黑，腹部银白；体侧可见淡色横纹和点列，但不是鲸鲨式密集白斑
- 鳞片细小，胸区形成较明显的 corselet；不能写“无鳞”或画成裸皮海豚

外部雌雄差异不足以让单张照片可靠判性。繁殖图可以画多尾成鱼同步游动，不给雌雄夸张的颜色或体型二态。

### 体尺、年龄与落库数字

ICCAT 2019 SCRS 报告把最大体尺写作 330 cm straight fork length、725 kg，寿命约 40 年。幼鱼出生于 6 月时，至 10 月约 30—40 cm、1 kg；1 龄约 60 cm、4 kg；10 龄约 200 cm、170 kg；20 龄约 270 cm、400 kg。这些是评估使用的代表性成长轨迹，不是每尾鱼按日历达到的固定值。[ICCAT 2019 SCRS report](https://www.iccat.int/Documents/Meetings/Docs/2019/REPORTS/2019_SCRS_ENG.pdf)

FAO 旧目录记载普通大型个体约 200 cm，并列出 1979 年加拿大爱德华王子岛 679 kg 的 IGFA 钓获记录。产品使用 ICCAT 2019 SCRS 报告的 330 cm 与 725 kg 作为生物学上限，不采用 FishBase 或通俗网页的 458 cm、2,000 lb 等混合极值。[FAO Scombrids species account](https://www.fao.org/4/y4162e/y4162e53.pdf)

建议字段：

```ts
measurements: {
  length: {
    max: 3.3,
    unit: 'm',
    note: 'ICCAT 2019 SCRS 报告的最大直叉长；上限值，不是普通成鱼体长。',
  },
  weight: {
    max: 725,
    unit: 'kg',
    note: 'ICCAT 2019 SCRS 报告采用的最大体重；上限值，不代表常见个体。',
  },
},
metrics: {
  maxDiveDepthM: 1015,
},
```

`maxDiveDepthM: 1015` 表示 IUCN 汇总的已记录深度下限“至少 1,015 m”，不是生理极限。若实现者担心字段名称把下限误读为绝对最大值，可以留空 `metrics`，只在展示数字写“超过 1,000 米”。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T21860A46913402.en)

`metrics.adultLengthCm`、`adultMassKg` 与 `lifespanYears` 建议留空。现有权威摘要给出的是极值和年龄对应代表值，不是同一采样设计下的普通成体范围；把最大值填成成体区间会破坏排序含义。

### 推荐展示数字

```ts
featuredStats: [
  {
    key: "maximum-length",
    label: "最大直叉长",
    value: "可达 330",
    unit: "厘米",
    note: "ICCAT 2019 SCRS 报告的生物学上限，不是普通成鱼体长",
  },
  {
    key: "maximum-mass",
    label: "最大体重",
    value: "可达 725",
    unit: "千克",
    note: "ICCAT 2019 SCRS 报告的生物学上限",
  },
  {
    key: "deep-dive",
    label: "记录深潜",
    value: ">1,000",
    unit: "米",
    note: "个别电子标记记录；日常活动多在更浅水层",
  },
  {
    key: "longevity",
    label: "寿命",
    value: "约 40",
    unit: "年",
    note: "ICCAT 根据放射性碳定年等证据采用的近似值",
  },
];
```

不要把 48,403 吨、3,081.6 吨或 1,720 尾放入物种永久统计卡。前两项是随建议期变化的管理配额，后一项是单项研究样本量。

## 迁徙、种群结构与 45°W 分界

### 两个主要产卵群体，不是两群永不相遇的鱼

ICCAT 的操作框架把东部大西洋/地中海和西部大西洋分开评估。2026 年全基因组研究结合 82 个成鱼与仔鱼基因组和 12,974 个成鱼定位日，发现中性与适应性标记都与两类产卵地移动行为相符，支持地中海与墨西哥湾相关的两个主要产卵群体及出生地回归。[Mikles et al. 2026](https://doi.org/10.1016/j.cub.2026.04.006)

这套遗传结构没有让索饵海域分开。Block 等汇总 1996—2025 年五国部署的 1,720 尾电子标记，发现许多地中海来源鱼越过 45°W，在美国和加拿大一侧索饵数年后回到地中海；跨洋混合以东向西更常见。西部来源鱼更倾向留在 45°W 以西，但“倾向”不能写成绝对不跨线。[Block et al. 2026](https://doi.org/10.1073/pnas.2535185123) [NOAA Fisheries summary](https://www.fisheries.noaa.gov/feature-story/western-atlantic-provides-refuge-bluefin-tuna)

因此故事和地图应使用三层语言：

1. **population / 产卵群体**：以出生地回归和基因组差异维持的地中海与西侧主要群体。
2. **stock / 管理种群**：ICCAT 为评估与配额使用的东部和西部单位。
3. **management area / 管理区**：由 45°W 切分捕捞归属的空间；鱼会穿越。

“东部鱼”“西部鱼”如果只由捕获位置判断，可能把混合鱼错分。产品不从一张捕获照片推断出生种群。[Block et al. 2026](https://doi.org/10.1073/pnas.2535185123)

### 西侧产卵范围正在被重新描绘

Richardson 等整合 1955—2021 年产卵证据，包括 35,124 次浮游生物拖网、941 次捕到蓝鳍仔鱼的样次和 4,966 尾仔鱼。直接证据支持以下西侧区域：[Richardson et al. 2026](https://doi.org/10.1016/j.pocean.2026.103687)

- 墨西哥湾，尤其北部晚春核心区
- 西北加勒比海
- 巴哈马以北和 Blake Plateau
- 美国卡罗来纳外海佛罗里达流近岸侧
- 西部 Slope Sea，初夏至盛夏核心区

产卵季可能从南部 4 月延续到 Slope Sea 8 月初，形成近连续的时空序列。西北马尾藻海缺少关键 6 月采样，研究者没有确认真正无缝的连续带；档案宜写“证据与近连续分布一致”，不写“整个西北大西洋都是产卵场”。

Slope Sea 的仔鱼、成鱼移动和遗传结果呈混合或中间信号。ICCAT 2026 年 3 月报告仍以两个主要产卵群体和两管理种群建模，没有确认第三个独立种群。图注可写“混合产卵区”，不能写“第三种群诞生”。[ICCAT 2026 first intersessional report](https://www.iccat.int/Documents/Meetings/Docs/2026/reports/2026_BFT_MAR_ENG.pdf)

### 迁徙不是每尾鱼按同一日历完成的闭环

个体的路线受来源、体型、成熟状态、猎物、温度和年度条件影响。部分鱼重复返回高纬索饵地和特定产卵地，也有跳过某个繁殖季、在一侧停留多年或使用 Slope Sea 的策略。故事正文应说“许多个体”“可”“常见”，不写“每年必定从 A 游到 B 再返回”。[Block et al. 2026](https://doi.org/10.1073/pnas.2535185123)

## 游泳、深潜与区域性内温

### 逆流换热保存代谢热

蓝鳍金枪鱼把好氧红肌放在身体较深处。通向红肌的动脉和回流静脉在奇网中反向并列，温暖静脉血把热量传给较冷动脉血，减少热量随鳃部循环散失。Carey 与 Gibson 的模型和生理测量指出，红肌可高于环境 15°C 以上，换热在特定条件下可接近 99% 效率。[Carey & Gibson 1983](<https://doi.org/10.1016/0300-9629(83)90612-6>)

这种能力还延伸到部分内脏、眼和脑的热保存，但心脏和鳃仍直接受水温影响。严谨名称是 regional endothermy / regional heterothermy，中文用“区域性内温”或“局部保温”。不要说：

- 全身恒定 37°C
- 与哺乳动物完全相同的恒温机制
- 体内自己“燃烧脂肪发热”而与肌肉代谢、血管换热无关
- 身体越热就一定游得越快

电子标记直接显示它们在广阔水温和深度间维持活跃行为，并潜至 1,000 m 以上；区域性内温是扩大热生态位的重要机制，但不是单一原因。[Block et al. 2001](https://doi.org/10.1126/science.1061197)

### 野外游泳的实测边界

Gleiss 等给 4 尾大型野生个体装上加速度、深度和摄像标签，记录到约 1 Hz 尾拍、1.5 m/s 以上持续速度、主动上升与部分被动滑翔下降，也记录到持续和间歇两类运动。小样本说明运动策略比“永不停歇地高速冲刺”复杂，不足以建立全物种最高时速。[Gleiss et al. 2019](https://doi.org/10.1098/rsos.190203)

外形有利于高效巡航：粗壮流线体、窄尾柄、新月尾、尾柄隆起和小鳍共同控制后体水流。图文可以说“适合持续巡航和快速加速”，不要给没有直接可靠测量的 70 km/h、80 km/h 或 100 km/h。[FAO Scombrids species account](https://www.fao.org/4/y4162e/y4162e53.pdf) [Gleiss et al. 2019](https://doi.org/10.1098/rsos.190203)

本种主要依靠前进使水流过鳃的冲压通气，持续游动对换气重要。避免写“只要停一秒就会死亡”：短时运动变化、操作状态和个体条件不能被这句口号概括。

## 食性、繁殖与早期生活史

### 食物随海域、年份和体型改变

Logan 等 2025 年元分析汇总 9 个 Longhurst 生物地理省、1985—2020 年 4,997 个胃样本，其中 4,046 个非空。主要解释变量是年份、海区和鱼体直叉长，而不是一张全球固定菜单。西北大西洋陆架因鲱科鱼占比而突出；其他海区小于 79 cm 的样本较多鳀类，大于等于 79 cm 的样本较多开眼鱿和梭腹鱼类。猎物体长和胃内容物重量随鱼体增大而趋于上升。[Logan et al. 2025](https://doi.org/10.3354/meps14875)

加拿大 2010 年 68 个胃样本中，54 个有内容物，鲱和鲭在 Gulf of St. Lawrence 与 eastern Scotian Shelf 两处都占主导，也出现少量底栖鱼。这项局地研究支持机会主义摄食，不能推成全球固定主食。[Pleizier et al. 2012](https://doi.org/10.2960/J.v44.m685)

建议字段：

```ts
diet: {
  types: ['carnivore', 'piscivore'],
  foods: [
    '鲱、鲭、鳀、玉筋鱼等群游鱼',
    '鱿鱼及其他头足类',
    '梭腹鱼等中层鱼类',
    '甲壳类，幼鱼摄食比例较高',
  ],
  description:
    '机会主义远洋捕食者，食物随海区、年份和体型显著改变。西北大西洋陆架常见鲱科鱼和鲭，其他海区与体型可更多利用鳀类、鱿鱼和中层鱼。',
}
```

不要在 `foods` 加海豚、海豹、海龟、成年鲨鱼或巨型鱿鱼。大型成鱼是高营养级捕食者，但“海洋唯一顶级捕食者”“成年后没有任何天敌”都过度。

### 成熟年龄存在区域和模型不确定性

Corriero 等在地中海多地采集雌鱼，以组织学和年龄估计发现 3—5 龄、约 105—140 cm 曲叉长开始成熟，50% 成熟约 4 龄、115 cm，至 5 龄、约 135 cm 大多成熟。样本支持东部早熟口径，但体长单位是 CFL，不能与直叉长 SFL 无转换混写。[Corriero et al. 2005](https://doi.org/10.1111/j.1439-0426.2005.00700.x)

ICCAT 当前评估假定东部鱼在 5 龄完全参与产卵。西部长期使用一套与东部相同的早熟向量和一套在 13 龄达峰的晚熟向量；最新生殖综述提示两者都可能偏，偏差大小未知。NOAA 页面“通常 8 龄产卵”只适合解释美国管理背景，不应当作本种西部固定生理门槛。[ICCAT 2019 SCRS report](https://www.iccat.int/Documents/Meetings/Docs/2019/REPORTS/2019_SCRS_ENG.pdf) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/western-atlantic-bluefin-tuna)

### 分批产卵、浮性卵、没有亲代照护

本种在开放暖水中成群释放精卵，体外受精；卵和仔鱼留在水柱中。NOAA 汇总称卵约两天孵化，但温度和环境会改变发育时间，产品只需写“浮性卵和仔鱼、无筑巢无护幼”。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/western-atlantic-bluefin-tuna)

Aranda 等检查西地中海 49 尾产卵雌鱼的卵巢组织，估计 84% 的雌鱼处于逐日产卵状态，平均间隔约 1.2 天，相对实现批次繁殖力约 48 粒/克体重。绝对批次产卵量随体型增加；研究没有证明每尾雌鱼全年固定产卵次数。[Aranda et al. 2013](https://doi.org/10.1016/j.seares.2012.08.005)

Richardson 等把西侧直接产卵证据串成 4 月至 8 月初的南北时序，并以 23—28°C 表层水温筛选西部潜在产卵环境。西地中海研究则记录到约 19—20°C 时开始产卵，产品不能把西部筛选范围写成东西海域共同阈值。1982—2023 年西部各区域达到适宜温度的时间提前，但数据没有解析出明确的产卵地点位移。产品可以写“西部适宜温度的季节时钟提前”，不能写“产卵场已整体北移”。[Richardson et al. 2026](https://doi.org/10.1016/j.pocean.2026.103687) [Gordoa & Carreras 2014](https://doi.org/10.1371/journal.pone.0090691)

## 威胁、恢复机制与行动建议

### 主要压力

1. **定向捕捞和历史过度捕捞**：高市场价值、群游与产卵聚集让渔业可集中捕获；东西区域在 20 世纪经历不同强度和时间的衰退。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T21860A46913402.en) [ICCAT 2022 eastern assessment](https://www.iccat.int/Documents/CVSP/CV079_2022/n_3/CV079030426.pdf)
2. **IUU、漏报和数据质量**：未经报告的捕获会低估死亡率；ICCAT 2025 摘要仍指出东部 IUU 数量未能量化，2026 工作报告也记录围网和转笼数据缺口。[ICCAT 2025 SCRS report](https://www.iccat.int/Documents/Meetings/Docs/2025/Reports/2025_SCRS_ENG.pdf) [ICCAT 2026 first intersessional report](https://www.iccat.int/Documents/Meetings/Docs/2026/reports/2026_BFT_MAR_ENG.pdf)
3. **幼鱼、混合鱼群和死亡丢弃**：按捕获位置管理的混合渔业可能同时影响两个出生群体；幼鱼选择性和死亡丢弃会改变未来补充。[Block et al. 2026](https://doi.org/10.1073/pnas.2535185123) [ICCAT Rec. 25-05](https://www.iccat.int/Documents/Recs/compendiopdf-e/2025-05-e.pdf)
4. **产卵聚集受捕捞压力**：季节性集中让成鱼更易被捕。西部建议禁止墨西哥湾定向捕捞西部产卵种群，东部通过季节、能力和围网操作规则限制风险。[ICCAT Rec. 25-04](https://www.iccat.int/Documents/Recs/compendiopdf-e/2025-04-e.pdf) [ICCAT Rec. 25-05](https://www.iccat.int/Documents/Recs/compendiopdf-e/2025-05-e.pdf)
5. **管理模型中的混合和生物学不确定性**：出生地混合、成熟向量、自然死亡、近期补充和绝对规模不确定，会让状态和配额建议偏移。[ICCAT 2021 western assessment](https://www.iccat.int/Documents/CVSP/CV078_2021/n_3/CV078030640.pdf) [ICCAT 2026 first intersessional report](https://www.iccat.int/Documents/Meetings/Docs/2026/reports/2026_BFT_MAR_ENG.pdf)
6. **海洋变暖与猎物重组**：适宜产卵温度出现时间已经提前，暖化也可改变高纬索饵区和猎物分布；现有证据不足以给出全球种群损失百分比。[Richardson et al. 2026](https://doi.org/10.1016/j.pocean.2026.103687) [Muhling et al. 2011](https://doi.org/10.1093/icesjms/fsr008)

不要把围栏内育肥或养殖自动写成“野生种保护”。地中海大量生产依赖捕获野生鱼后转笼育肥，立体视频、转笼记录和捕捞文件正是为核对捕获体尺与数量而设。[ICCAT Rec. 25-04](https://www.iccat.int/Documents/Recs/compendiopdf-e/2025-04-e.pdf)

### 恢复为何发生，为什么仍需谨慎

东部区域恢复与 2007 年后削减捕捞、配额、最小体尺、能力控制、季节和监测加强相吻合。2026 年标记研究进一步提出，部分东部幼鱼和亚成鱼进入捕捞死亡率较低的西大西洋索饵，也可能形成额外“逃逸”效应。这是研究者基于标记和捕获史提出的机制解释，不是单一原因的随机实验结论。[ICCAT 2022 eastern assessment](https://www.iccat.int/Documents/CVSP/CV079_2022/n_3/CV079030426.pdf) [Block et al. 2026](https://doi.org/10.1073/pnas.2535185123)

恢复不应被写成“管理已经完成”。ICCAT 2025 汇总虽把两区正式列为未发生过度捕捞，东部评估仍有模型分歧和 IUU 空白，两区也都缺少可用于判定生物量状态的参考点；2026 状态检查仍在处理混合、成熟和数据问题。[ICCAT 2025 SCRS report](https://www.iccat.int/Documents/Meetings/Docs/2025/Reports/2025_SCRS_ENG.pdf) [ICCAT 2026 first intersessional report](https://www.iccat.int/Documents/Meetings/Docs/2026/reports/2026_BFT_MAR_ENG.pdf)

### 建议 `threats` 与 `conservationActions`

```ts
threats: [
  '高价值定向渔业及历史过度捕捞',
  '非法、未报告和不受管制捕捞及捕获数据缺口',
  '幼鱼捕获、死亡丢弃与混合鱼群的累积死亡',
  '产卵聚集和关键繁殖季受到的捕捞压力',
  '种群混合、成熟和近期补充不确定造成的管理误差',
  '海洋变暖改变产卵时序、索饵范围与猎物分布',
],
conservationActions: [
  '以管理程序和最新评估设定审慎 TAC，并按异常情况协议及时复核',
  '保护产卵季和产卵区，执行最小体尺、幼鱼容许限额和死亡丢弃核算',
  '以电子捕捞文件、转笼视频、观察员和港口检查打击 IUU 与漏报',
  '在评估中显式纳入跨 45°W 混合、出生地来源与多产卵区证据',
  '持续开展电子标记、遗传来源判定、耳石定年和亲缘标记重捕',
  '统一围网、延绳钓、游钓和养殖转笼的体尺、年龄与捕获数据',
  '监测变暖对产卵温度时序、高纬索饵区与猎物群落的影响',
  '消费和采购只选择合法、可追溯来源，不把单一商品标签当作全球可持续证明',
],
```

## 可直接落库的编辑字段

```ts
activity: [
  '跨大西洋与区域性季节迁徙',
  '沿锋面和陆架边缘追逐群游猎物',
  '昼夜垂直移动与超过一千米的深潜',
  '持续巡航、间歇尾击和下潜滑翔',
  '在暖水外海成群分批产卵',
],
tags: [
  '北大西洋远洋鱼类',
  '区域性内温',
  '跨洋迁徙',
  '两个主要产卵群体',
  'ICCAT 两管理种群',
  'IUCN 无危',
  '高价值渔业',
  '电子标记研究',
],
summary:
  '以区域性内温和高效巡航跨越北大西洋、在共享索饵场混合却回到不同产卵区繁殖的大型远洋鱼。',
description:
  '大西洋蓝鳍金枪鱼有粗壮流线体、短胸鳍和新月尾，可保存肌肉代谢热并潜入一千米以下。ICCAT 按东部/地中海和西部两个管理种群运行评估，鱼本身会跨越 45°W 管理线。IUCN 2021 全球等级为 LC、趋势 unknown；ICCAT 2025 汇总正式判定两区均未发生过度捕捞，但东部三个模型仍有分歧，两区都因缺少参考点而无法判定生物量状态。',
keyFacts: [
  '接受名为 Thunnus thynnus (Linnaeus, 1758)；太平洋和南方蓝鳍金枪鱼是独立种。',
  'IUCN 全球字段为 LC、unknown、2021，不能由区域渔业状态改写。',
  'ICCAT 最新完整评估仍是东部/地中海 2022、西部 2021；2026 状态检查尚未形成公开最终结论。',
  '东部三个模型都见 2000 年代末后 SSB 上升；ICCAT 2025 汇总正式判定未发生过度捕捞，但模型区间仍跨 1。',
  '西部发生过度捕捞的概率不超过 1%；东西两区都因缺少参考点而无法判定生物量状态。',
  '45°W 是管理线；1996—2025 年 1,720 尾电子标记显示跨区混合以东向西更常见。',
  '可达 330 cm 直叉长、725 kg，寿命约 40 年，并有超过 1,000 m 的深潜记录。',
  '区域性内温靠血管逆流交换保存代谢热，不是全身维持固定体温。',
  '食物随海区、年份和体型改变，常见群游鱼、鱿鱼和中层鱼。',
  '暖水外海分批产卵，卵和仔鱼随水柱漂移，不筑巢也不护幼。',
],
```

## 六段故事与六图边界

### 建议 `storySections`

```ts
storySections: [
  {
    key: "open-ocean-body",
    label: "外形",
    title: "把阻力留在身后",
    body: "粗壮纺锤体、短胸鳍、窄尾柄和新月尾把一条数百千克的鱼变成远洋巡航者。第二背鳍红褐，小鳍只带暗黄，不是黄鳍金枪鱼那组夸张长鳍。",
  },
  {
    key: "regional-endothermy",
    label: "生理",
    title: "把肌肉产生的热留在体内",
    body: "深层红肌旁的动静脉逆向并列，把回流血中的热传回入肌血液。区域性内温让它在冷暖水层间保持活跃，却没有把整条鱼变成恒温动物。",
  },
  {
    key: "management-line",
    label: "迁徙",
    title: "鱼会游过人画的经线",
    body: "ICCAT 以 45°W 分开两个管理区，电子标记却记录到大量跨线索饵。地中海来源鱼常向西移动再回产卵地；经线管理捕获，不约束鱼的身体。",
  },
  {
    key: "variable-menu",
    label: "觅食",
    title: "菜单跟着海区和年份变化",
    body: "在加拿大陆架，它们常追逐鲱和鲭；换到别的海区和体型，鳀、鱿鱼与中层鱼会占上风。跨三十多年的胃样本没有找到一份全球固定菜单。",
  },
  {
    key: "spawning-seascape",
    label: "繁殖",
    title: "产卵场不是地图上的一个点",
    body: "地中海和墨西哥湾是两个主要产卵群体的核心区，西侧仔鱼证据又延伸到加勒比、巴哈马、美国东南外海和 Slope Sea。成鱼在暖水中分批产卵，下一代随水柱开始生活。",
  },
  {
    key: "managed-recovery",
    label: "管理",
    title: "回升来自约束，也需要继续核验",
    body: "削减捕捞、配额、体尺规则、观察员、转笼视频和捕捞文件支撑东部回升。ICCAT 正式判定两区均未发生过度捕捞，但两区都缺少生物量状态参考点；混合、漏报和变暖仍在考验管理程序。",
  },
];
```

### 1 张封面和 5 张图库图

| 文件建议                         | 画面                                                   | 必须保留                                                         | 必须排除                                                   |
| -------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------- |
| `01-open-atlantic-cruise.webp`   | 单尾大型成鱼在深蓝北大西洋侧面巡游，少量同类远景       | 粗壮纺锤体、短胸鳍、红褐第二背鳍、暗黄黑缘小鳍、新月尾和尾柄隆起 | 长黄镰刀鳍、鲸鲨斑点、鲨鱼鳃裂、珊瑚礁                     |
| `02-thermocline-deep-dive.webp`  | 成鱼穿过冷蓝温跃层追随小型鱼群，光线从表层减弱         | 自然体色、深水尺度、连续游动姿态                                 | 发光红色身体、蒸汽、人体式血管解剖、固定温度数字           |
| `03-cross-atlantic-tag.webp`     | 一尾带小型外置电子标记的成鱼在外海，远景有不同方向鱼群 | 标记尺寸克制、开放洋盆、路线多样的感觉                           | 水中实体经线、箭头刻在海里、所有鱼整齐单向迁徙             |
| `04-shelf-edge-foraging.webp`    | 高纬陆架边缘，成鱼追逐密集鲱或鲭鱼群                   | 群游小鱼、开阔冷水、捕食瞬间                                     | 巨型鱿鱼、海豹或海豚作猎物、热带珊瑚背景                   |
| `05-warm-water-spawning.webp`    | 数尾成鱼在暖水外海同步游动，水柱中只有细微卵粒感       | 无巢、无亲子同游、卵尺度细小、外海场景                           | 巨大可见鱼卵、育儿、黏附卵、海床巢穴                       |
| `06-science-and-management.webp` | 船边研究团队给活鱼安装标记并准备放流，人与鱼尺度合理   | 湿润活鱼、短时操作、科学测量和安全放流                           | 把商业育肥围栏写成野放、拥抱鱼、鱼在甲板久置、胜利奖杯姿势 |

图库图注必须说明重建边界：温跃层图不把热量可视化当作实测成像；标记图不对应某一真实轨迹；产卵图不声称拍到特定产卵群体；管理图不把一次放流当作种群恢复证据。

## 验收与测试边界

1. `conservation('LC', 'unknown', 2021)`；测试禁止出现 `increasing`、`stable` 或 ICCAT stock status 覆盖 IUCN。
2. 科学名必须为 `Thunnus thynnus`，分类目为 `Scombriformes`；别名不得把 _T. orientalis_ 或 _T. maccoyii_ 当亚种。
3. `featuredStats` 只含 330 cm、725 kg、>1,000 m、约 40 年；不含 TAC、渔获量、市场价格和网传最高时速。
4. 若填 `metrics.maxDiveDepthM`，只允许 1015 并在展示文案说明“至少/记录”；不填 `topSpeedKph`。
5. 状态文案必须说明 ICCAT 2025 汇总采用 2020 参考年，并把两区正式列为未发生过度捕捞；东部同时保留 `Fcurrent/F0.1 = 0.81`（0.48—1.62）和 2022 三模型分歧，西部保留 `0.53`（0.49—0.58）及过度捕捞概率 ≤1%。两区都要写明缺少生物量参考点、无法判定生物量状态。
6. TAC 只能连同 `2026—2028`、管理区和“含死亡丢弃”出现；西部要区分 MP 输出 2,568 t 与法定 3,081.6 t。
7. 45°W 一律称管理分界线；不得写地理隔离、迁徙终点或出生种群判别线。
8. Slope Sea 可写混合产卵区或新增产卵证据，不得写 ICCAT 已承认第三独立种群。
9. `diet.types` 为 `carnivore`、`piscivore`；食物描述必须保留地区、年份或体型变化。
10. 繁殖图和文字必须为体外受精、浮性卵、无亲代照护；不得画巢、护卵或亲鱼带幼鱼。
11. 媒体共 6 张，封面不在 gallery 重复；每图都需准确 alt、title、caption 和合理 focal point。
12. 静态资源验收要核对 6 张 WebP 路径、尺寸、透明度和边界，不以浏览器截图作验证。

## 推荐 `sources` 数组

以下数组只保留官方分类、官方评估/管理和原始同行评议研究。`accessedAt` 使用本次统一核验日期。

```ts
const ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE = "2026-08-27" as const;

const ATLANTIC_BLUEFIN_TUNA_SOURCES = [
  {
    title: "Eschmeyer's Catalog of Fishes: Thunnus thynnus, species ID 19735",
    url: "https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=19735",
    kind: "taxonomy",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: "WoRMS: Thunnus thynnus, AphiaID 127029",
    url: "https://www.marinespecies.org/aphia.php?p=taxdetails&id=127029",
    kind: "taxonomy",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: "IUCN Red List: Thunnus thynnus, 2021 assessment",
    url: "https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T21860A46913402.en",
    kind: "conservation",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "IUCN 2021: Tuna species recovering despite growing pressures on marine life",
    url: "https://iucn.org/news/species/202109/tuna-species-recovering-despite-growing-pressures-marine-life-iucn-red-list",
    kind: "conservation",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "ICCAT: Current stock assessment schedule and reports for Atlantic bluefin tuna",
    url: "https://www.iccat.int/en/assess.html",
    kind: "conservation",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "ICCAT 2025 SCRS Report: Atlantic bluefin tuna executive summary and stock-status tables",
    url: "https://www.iccat.int/Documents/Meetings/Docs/2025/Reports/2025_SCRS_ENG.pdf",
    kind: "conservation",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "ICCAT 2019 SCRS Report: Atlantic bluefin tuna biology, growth, and longevity",
    url: "https://www.iccat.int/Documents/Meetings/Docs/2019/REPORTS/2019_SCRS_ENG.pdf",
    kind: "general",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "ICCAT 2022: Eastern Atlantic and Mediterranean bluefin tuna stock assessment",
    url: "https://www.iccat.int/Documents/CVSP/CV079_2022/n_3/CV079030426.pdf",
    kind: "conservation",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: "ICCAT 2021: Western Atlantic bluefin tuna stock assessment",
    url: "https://www.iccat.int/Documents/CVSP/CV078_2021/n_3/CV078030640.pdf",
    kind: "conservation",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "ICCAT 2026: First Intersessional Meeting of the Bluefin Tuna Species Group",
    url: "https://www.iccat.int/Documents/Meetings/Docs/2026/reports/2026_BFT_MAR_ENG.pdf",
    kind: "conservation",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "ICCAT Recommendation 25-04: Multi-annual management plan for eastern Atlantic and Mediterranean bluefin tuna",
    url: "https://www.iccat.int/Documents/Recs/compendiopdf-e/2025-04-e.pdf",
    kind: "conservation",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "ICCAT Recommendation 25-05: Conservation and management plan for western Atlantic bluefin tuna",
    url: "https://www.iccat.int/Documents/Recs/compendiopdf-e/2025-05-e.pdf",
    kind: "conservation",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "ICCAT 2025 annual meeting press release: 2026–2028 bluefin tuna TACs",
    url: "https://www.iccat.int/Documents/Meetings/Docs/2025/Press_Release_2025_ENG.pdf",
    kind: "conservation",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: "ICCAT: Atlantic bluefin tuna Management Strategy Evaluation",
    url: "https://www.iccat.int/mse/en/specMSE_BFT.asp",
    kind: "conservation",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "FAO Species Catalogue: Thunnus thynnus identification and morphology",
    url: "https://www.fao.org/4/y4162e/y4162e53.pdf",
    kind: "general",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: "NOAA Fisheries: Western Atlantic Bluefin Tuna",
    url: "https://www.fisheries.noaa.gov/species/western-atlantic-bluefin-tuna",
    kind: "conservation",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: "Block et al. 2026: Ensuring the future of Atlantic bluefin tuna",
    url: "https://doi.org/10.1073/pnas.2535185123",
    kind: "distribution",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "Mikles et al. 2026: Adaptive genomic divergence parallels migratory behavior",
    url: "https://doi.org/10.1016/j.cub.2026.04.006",
    kind: "distribution",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "Richardson et al. 2026: Re-evaluation of western Atlantic spawning distribution",
    url: "https://doi.org/10.1016/j.pocean.2026.103687",
    kind: "distribution",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "Block et al. 2001: Migratory movements, depth preferences, and thermal biology",
    url: "https://doi.org/10.1126/science.1061197",
    kind: "ecology",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "Carey and Gibson 1983: Heat and oxygen exchange in the rete mirabile",
    url: "https://doi.org/10.1016/0300-9629(83)90612-6",
    kind: "ecology",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "Gleiss et al. 2019: Direct measurement of swimming and diving kinematics",
    url: "https://doi.org/10.1098/rsos.190203",
    kind: "ecology",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "Logan et al. 2025: Diet across the species range from 1985–2020 samples",
    url: "https://doi.org/10.3354/meps14875",
    kind: "ecology",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "Pleizier et al. 2012: Diet in the Gulf of St. Lawrence and eastern Scotian Shelf",
    url: "https://doi.org/10.2960/J.v44.m685",
    kind: "ecology",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "Corriero et al. 2005: Female size and age at maturity in the Mediterranean",
    url: "https://doi.org/10.1111/j.1439-0426.2005.00700.x",
    kind: "ecology",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "Aranda et al. 2013: Reproductive potential in the western Mediterranean",
    url: "https://doi.org/10.1016/j.seares.2012.08.005",
    kind: "ecology",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "Gordoa and Carreras 2014: Western Mediterranean spawning timing and temperature",
    url: "https://doi.org/10.1371/journal.pone.0090691",
    kind: "ecology",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      "Muhling et al. 2011: Climate change and Gulf of Mexico spawning habitat",
    url: "https://doi.org/10.1093/icesjms/fsr008",
    kind: "ecology",
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 必须避开的过度陈述

- “IUCN LC，所以蓝鳍金枪鱼渔业已经全球可持续。”LC 是灭绝风险等级，不评价每个渔区、渔具或商品链。
- “全球种群正在增加。”IUCN 正式趋势是 unknown；能确认的是东部区域的强劲回升信号。
- “东部已经完全恢复。”ICCAT 2025 汇总正式判定未发生过度捕捞，但 2022 三模型仍有分歧，且缺少生物量状态参考点。
- “两区未发生过度捕捞，所以生物量都已恢复。”捕捞死亡率与生物量是不同判断；ICCAT 没有为两区估计可用的生物量状态参考点。
- “2026 新评估证明两个种群都健康。”截至核验日，状态检查没有公开最终报告。
- “45°W 分隔东西两群鱼。”它分隔管理区，标记鱼频繁跨越。
- “Slope Sea 是 ICCAT 已确认的第三种群。”现有资料支持产卵与混合，尚未建立第三管理种群。
- “每尾鱼每年往返同一条跨洋路线。”个体策略、年份、来源与成熟状态不同。
- “蓝鳍金枪鱼是恒温动物。”只能说区域性内温，部分组织保温，体温仍变化。
- “最高时速 70/80/100 km。”缺可靠本种野外极值，不落库。
- “胸鳍和小鳍鲜黄且很长。”这是黄鳍金枪鱼式误画；本种胸鳍短，第二背鳍红褐，小鳍暗黄黑缘。
- “所有成鱼都在 8 岁或 12 岁成熟。”东部和西部成熟资料、模型假设与不确定性不同。
- “每条雌鱼每年产一千万粒卵。”繁殖力随体型、批次和产卵频率变化，局地研究不能给固定年总量。
- “主食就是鲱鱼和鲭鱼。”食谱随海区、年份和体型变化。
- “养殖蓝鳍不消耗野生资源。”许多地中海育肥作业从野生围网捕获后转笼。
- “产卵场已经整体北移。”2026 研究检出适温时间提前，没有解析出明确地点位移。
