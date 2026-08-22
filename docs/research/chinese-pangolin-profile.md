# 中华穿山甲（*Manis pentadactyla*）完整档案研究

- 检索与核验日期：2026-08-22
- 展示中文名：**中华穿山甲**；英文名：**Chinese Pangolin**；Mammal Diversity Database（MDD）首选英文名：**Short-tailed Pangolin**；常用别名：**穿山甲、中国穿山甲、鲮鲤**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图提供可复核的科学边界
- 证据标准：接受名与高阶分类采用 MDD；2026 年种界采用同行评议的整合分类修订；全球灭绝风险采用 IUCN Red List 当前评估与 CITES 官方汇总；国际贸易采用 CITES 现行附录和决议；中国国内保护采用国家林草局与农业农村部正式公告；自然史优先采用台湾官方行动计划和来自台湾、香港、华南/华东的同行评议原始研究
- 时间口径：本文所称“当前”截至 **2026-08-22**。分类数据库检索日、论文发表日、IUCN 评估年、CITES 附录生效日和国内公告日分别记录，不互相替代
- 种界边界：除非明确标为“拆分前广义种”，本文的中华穿山甲指 ***Manis pentadactyla* sensu stricto**，包括台湾指名种群和海南 `pusilla` 谱系，不再包括 2026 年恢复有效种地位的南喜马拉雅穿山甲 ***M. aurita***
- 地理与安全边界：`distribution.center` 只是地图视图焦点，不是现存个体、洞穴、救护站或丰度中心；文案、图片和素材 README 不公开可供盗猎者定位的精确坐标、路牌或地标

## 结论摘要

### 当前接受名仍是 *Manis pentadactyla*，但 2026 年种界已经收窄

仓库主记录应采用 ***Manis pentadactyla* Linnaeus, 1758**，分类为动物界—脊索动物门—哺乳纲—鳞甲目—鲮鲤科—穿山甲属。MDD 当前接受该名，模式产地为台湾，首选英文名为 Short-tailed Pangolin，并把 Chinese Pangolin 列为其他英文名。[MDD — *Manis pentadactyla*](https://www.mammaldiversity.org/taxon/1005797/)

2026 年 Koju 等把过去作为 `M. p. aurita` 的南喜马拉雅谱系恢复为独立种 ***Manis aurita* Hodgson, 1836**。研究整合含 `aurita` 选定模式标本在内的基因组、线粒体、头骨与外部形态资料；`M. aurita` 与狭义 *M. pentadactyla* 约在 180 万年前分化，前者总体更大、尾更长、耳廓更小。鳞片行数及空间分布在两者间没有显著差异，因此不能把“数鳞片行”当作可靠的照片鉴种法。[Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9)

同一研究把 `M. aurita` 的证据范围限制在尼泊尔、藏南和阿萨姆一带，并将 2025 年命名的 *M. indoburmanica* 作为其后出同物异名；狭义 *M. pentadactyla* 则主要在中国南部、东部和东南亚。两者在缅甸北部的接触区和精确边界仍缺乏采样。MDD 已注明 *M. pentadactyla* 过去包含 *M. aurita*，但页面的国家列表和图库仍混有旧口径信息，不能直接复制成狭义种地图或图像参考。[Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9) [MDD](https://www.mammaldiversity.org/taxon/1005797/)

### IUCN 当前正式值是 2019 / CR / A3d+4d / decreasing，但评估早于拆分

IUCN 当前可引用的更正评估为 Challender 等 2019 年条目（errata assessment ID `T12764A168392151`）：**极危 Critically Endangered（CR）**、趋势 **下降 Decreasing**、准则 **A3d+4d**。评估怀疑该物种在三个世代约 21 年内因捕猎和非法贸易下降超过 80%，前瞻窗口为 2019—2040 年，跨一代过去与两代未来的窗口为 2012—2033 年；世代长度采用 7 年。[IUCN Red List — *Manis pentadactyla*](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T12764A168392151.en) [CITES SC74 Doc. 73 Annex 2](https://www.cites.org/sites/default/files/eng/com/sc/74/E-SC74-73-A2.pdf)

因此仓库应实现：

```ts
conservation: conservation('CR', 'decreasing', 2019, 'A3d+4d')
```

不能沿用 2014 年旧条目的 `A2d+3d+4d`，也不能把 errata 的 2020 发布/修订时间写进 `assessedYear`。更重要的是，2019 年评估把尼泊尔、不丹、印度东北部等今天多属 *M. aurita* 的证据纳入广义 *M. pentadactyla*；CR 是当前应展示的正式全球等级，却不是 2026 年狭义种独立重算的风险模型。IUCN 若按新种界发布重评，等级、趋势、准则、范围、威胁和世代参数应成套更新。[IUCN](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T12764A168392151.en) [Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9)

### CITES 附录 I 与中国国家一级保护是两套制度

2026 年 3 月 5 日生效的 CITES 现行附录继续把穿山甲列入附录 I；中华穿山甲在 CoP17 获准由附录 II 转入附录 I，并于 2017 年生效。附录 I 禁止以商业为主要目的的国际贸易；科研、保育转移等例外仍必须满足公约条件并取得相应许可，不能简化成“任何跨境移动在任何情况下都绝对违法”。[CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CITES Resolution Conf. 17.10 (Rev. CoP19)](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-17-10-R19.pdf)

中国国家林草局 2020 年第 12 号公告把“穿山甲属所有种”由国家二级调升为**国家一级保护野生动物**；2021 年《国家重点保护野生动物名录》在鳞甲目—鲮鲤科下明确列出“穿山甲 *Manis pentadactyla*，一级”。这是国内法律保护，不是 IUCN CR 或 CITES 附录 I 的中文翻译。[国家林草局 2020 年第 12 号公告](https://www.forestry.gov.cn/main/3457/20200619/092010699781014.html) [2021 国家重点保护野生动物名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf)

## 狭义种分布与地图实现

### 旧国家列表不能直接照抄

MDD 的文字注释已接受 *M. aurita* 独立，却仍列 Bangladesh、China、India、Laos、Myanmar、Taiwan、Thailand、Vietnam；图库第一张甚至仍标成 `M. pentadactyla aurita`。这反映数据库字段更新不同步，而不是 *M. aurita* 又被合回中华穿山甲。2026 年整合修订只稳健地把狭义种概括为中国南部、东部和东南亚，并明确要求在缅甸北部补采样以厘清接触区。[MDD](https://www.mammaldiversity.org/taxon/1005797/) [Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9)

实现应采用保守范围：

- `countries` 可写中国、老挝、缅甸、泰国、越南，但 `range` 必须说明东南亚的国家边界主要继承旧分布资料，尚待按新种界逐点复核；不把尼泊尔、不丹、印度或孟加拉国直接归给狭义种。
- `regions` 以“台湾、海南与中国南部/东部”“中南半岛北部（边界待复核）”表达，不画到南喜马拉雅。
- 中国 2010—2020 年研究整理到 11 个省级行政区的 142 条确认记录，67.6% 的记录点来自台湾、浙江和广东；这些是记录量，不是个体总数或种群密度，而且论文发表于 2026 年拆分前，西南边缘记录仍需重新鉴定。[Kong et al. 2021](https://doi.org/10.17520/biods.2020446)
- 另一项大陆资料汇编获得 2010—2020 年 157 次观察、涉及 170 个体和 8 省，并记录至少 9 只带幼仔雌性；来源混合文献、访谈、新闻、相机和个人通讯，作者明确表示不能据此完整代表分布或数量。[Wu et al. 2021](https://doi.org/10.1016/j.gecco.2021.e01460)
- 推荐 `center: { lat: 24.5, lng: 111.5 }`，只用于把初始视图置于华南—台湾附近；它不是模式产地坐标、现存洞穴或范围几何中心。

## 外形、体尺与图像诊断边界

台湾指名种群的头吻部呈圆锥形；脸颊、吻部、腹部、四肢内侧和掌垫外，体表大部覆盖角蛋白鳞片。官方行动计划记录从头至臀背侧 32—33 行重叠鳞片、尾部 16—19 行，前肢发达且有五爪，头体长 44—56 cm、尾长 30—40 cm，成体平均体重 4.5—4.8 kg。[台湾穿山甲保育行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300)

图像可稳定表现的狭义种锚点为：圆锥形小头、无齿窄口、明显而相对较大的圆/瓣状耳廓、深灰褐至暗褐的宽菱形重叠鳞片、腹面和四肢内侧稀疏毛发、粗壮前肢与五爪、相对不长的尾。与 *M. aurita* 的差别主要是后者整体更大、尾更长、耳廓更小；单张生成图仍不能替代头骨测量、来源记录和遗传鉴定。无齿、长舌和鳞片的一般解剖描述来自拆分前综述，只用于各支系共享形态，不用于旧分布或种级体尺。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) [Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9) [Heath 1992](https://doi.org/10.2307/3504143)

不应画成犰狳：穿山甲没有横向铰接的骨质甲带；鳞片是角蛋白，彼此像瓦片般前后重叠。也不应画成大食蚁兽：身体没有长蓬松毛被和巨大的旗状尾。受威胁时蜷成球是防御姿态，但封面应展示自然行走轮廓，避免所有图片都只剩无法辨识的“鳞球”。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300)

结构化体尺可保留台湾材料，但必须把地域和测量法写进 note：

| 字段 | 推荐值 | 证据边界 |
| --- | --- | --- |
| `measurements.length` | `44–56 cm` | 台湾指名种群头体长；尾长另为 30–40 cm，不是总长 |
| `measurements.weight` | `typical: 4.65 kg` | 4.65 只是官方成体平均 4.5–4.8 kg 的展示中点，不是全球狭义种典型值 |
| `metrics.adultLengthCm` | 不填 | schema 无法表达“台湾指名种群、头体长、不含尾”的限定 |
| `metrics.adultMassKg` | 不填 | 只有区域平均值，缺少狭义种统一成体范围 |
| `metrics.lifespanYears` | 不填 | 没有可归入狭义种野外寿命的稳健范围 |
| `metrics.elevationM` | 不填 | 台湾多在 1,000 m 以下，但 2026 修订提到整个复合群局部可到约 3,000 m；不能合成种级区间 |
| `metrics.estimatedMatureIndividuals` | 不填 | 洞穴数、相机样点、发现记录和台湾区域估计都不能替代狭义种全球成熟个体数 |

[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) [Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9)

## 生境、洞穴与活动

台湾指名种群主要分布于海拔 1,000 m 以下浅山，但可利用原始林、次生林、竹林、混合林、阔叶林、草地和农垦地，并能容忍一定程度的人为干扰。休息和觅食洞穴多见于可挖掘的黏土或壤土；区域研究记录洞口内径通常约 15—20 cm，多为单一出入口。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) [台湾林业保育署物种页](https://www.forest.gov.tw/0008047)

休息洞穴与觅食洞穴回答不同问题。2025 年台湾无线电追踪研究跟踪 7 只个体，发现雌性在 52—327 天内使用 12—32 个休息洞穴，唯一雄性使用 48 个，洞穴可被不同个体共享并跨季节重复利用。多数休息洞口土壤已压实，外观可能被误判为“废弃”；因此洞穴数量能提示出现和活动，却不是种群密度的合适量化指标。[Sun, Lin & Pei 2025](https://doi.org/10.1016/j.gecco.2025.e03406)

台湾无线电追踪与相机资料显示个体多在傍晚至夜间出洞，通常独居，冬季不冬眠；母幼、交配和雄性造访育幼洞是例外。活动时用强壮前爪掘开土壤、朽木和社会性昆虫巢，白天多在洞穴休息。这里的时段和“不冬眠”来自台湾，不应升级为跨整个东南亚范围的固定日历。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) [Sun et al. 2019](https://doi.org/10.1016/j.gecco.2019.e00700)

## 食性与觅食证据

中华穿山甲是专食社会性昆虫的食虫动物，核心食物为蚂蚁和白蚁，包括工蚁、繁殖蚁、蛹和幼体。没有牙齿；它以嗅觉寻找巢穴，用前爪打开巢体，再以细长舌摄食。结构化食物只保留“蚂蚁、白蚁、蚁蛹与幼体”，不加入缺乏严格证据的普通昆虫清单。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) [Lee et al. 2017](https://doi.org/10.1177/1940082917709648) [Heath 1992](https://doi.org/10.2307/3504143)

香港研究分析一只 546 g 野生幼体的胃内容物，数到 25,803 只蚂蚁和 812 只白蚁，共 9 种；蚂蚁占数量 97%、估算生物量 98%，蛹与有翅型支持其直接掠食树上或地表蚁巢而非随机舔食游走工蚁。但样本只有**一只幼体**，不能把 26,615 写成每日摄食量、每餐定额或全物种食谱。[Lee et al. 2017](https://doi.org/10.1177/1940082917709648)

台湾东部 2025 年排遗研究在区域样本中鉴定出 60 多种蚂蚁和 4 种白蚁，并发现摄食组成具有季节性；4—6 月高脂的台湾土白蚁有翅生殖型在当地食物生物量中占较高比例。数字只说明一个区域种群的食物广度和季节变化，不是狭义种全球必吃的 64 种菜单。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300)

## 繁殖、单仔与证据尺度

台湾官方行动计划综合野外与圈养记录，给出野外交配多在 2—7 月、生产多在 9 月至翌年 3 月且高峰为 12 月至翌年 1 月，一年通常繁殖一次、每胎一仔；母兽在洞穴内生产，并持续约 5—6 个月育幼。季节来自台湾气候与样本，不应直接套到整个大陆和中南半岛。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300)

最完整的野外个案是台湾东部一只雌兽在 2012—2016 年间的无线电与相机连续监测：它在 3 岁和 4 岁时各于 12 月初产下一只幼仔；第一胎育幼 157 天，第二胎从估计受孕到生产约 150 天；母兽将幼仔在多个育幼洞穴间转移。研究只跟踪一只雌兽，“产后发情”有一次直接交配记录支持，而延迟着床是作者提出的解释，尚不是已证实的全物种机制。[Sun, Pei & Wu 2021](https://doi.org/10.1038/s41598-021-97618-4)

圈养激素监测曾对 3 只怀孕台湾穿山甲推算 318—372 天的较长妊娠期，与野外约 150 天差异很大。可能原因包括受孕起点判定、延迟着床、圈养环境或个体差异；对象和故事不填固定妊娠天数，只保留“每胎通常一仔、母兽使用多个育幼洞”的稳健框架。[Chin et al. 2012](https://doi.org/10.1002/zoo.20413) [Sun, Pei & Wu 2021](https://doi.org/10.1038/s41598-021-97618-4)

## 监测数字不等于种群数字

台湾 2015—2023 年全岛相机网络设置 194 个样点，其中 114 个曾拍到穿山甲；这表示在约 58.8% 的布点出现过记录，不等于“114 只”或 58.8% 的个体被监测到。中国 142 条确认记录、157 次大陆观察和任一地区洞穴密度也都不能相加成全球数量。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) [Kong et al. 2021](https://doi.org/10.17520/biods.2020446) [Wu et al. 2021](https://doi.org/10.1016/j.gecco.2021.e01460) [Sun, Lin & Pei 2025](https://doi.org/10.1016/j.gecco.2025.e03406)

实现中的 `metrics.estimatedMatureIndividuals` 应留空。台湾行动计划引用的 10,000 或 15,000 只全岛估算使用较早的区域方法，不能外推给狭义种全球，更不能与拆分前 IUCN 的下降比例倒推出当前数量。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300)

## 主要威胁

1. **过度利用与非法贸易**：IUCN 的拆分前全球评估把肉和鳞片需求驱动的盗猎视为超过 80% 疑似下降的核心原因；CITES 决议指出附录 I 后仍存在显著非法国际贸易。[IUCN](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T12764A168392151.en) [CITES Resolution Conf. 17.10](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-17-10-R19.pdf)
2. **森林与浅山生境丧失、退化和破碎化**：道路、建设、农业扩张及持续干扰可移除可挖掘土层、休息洞、觅食巢和连接斑块；即使能使用次生林或农林镶嵌，也不表示对高强度开发免疫。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) [Wu et al. 2021](https://doi.org/10.1016/j.gecco.2021.e01460)
3. **自由活动犬只**：台湾救伤资料显示犬只攻击已成为近年重要创伤原因；广东两个非保护区的相机与家犬 GPS 研究也记录强烈空间干扰。它是有区域直接证据的威胁，不应写成每个国家唯一主因。[台湾林业保育署物种页](https://www.forest.gov.tw/0008047) [Zhang et al. 2024](https://doi.org/10.3390/d16070386)
4. **兽夹、路杀和其他非目标死亡**：台湾官方资料把兽夹致伤、道路死亡和邻近聚落的人为猎捕列为当前或次要威胁；大陆研究建议在关键路段限速、警示并修建动物逃生结构。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) [Wu et al. 2021](https://doi.org/10.1016/j.gecco.2021.e01460)
5. **农药、污染物与疾病风险**：台湾资料已在鳞片检出农药成分，也记录犬源病原和创伤个案，但剂量—危害关系仍不清楚；应写“潜在或需监测”，不能声称农药已被证明造成全球下降。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300)
6. **低繁殖率与低密度**：通常每胎一仔、个体隐蔽且自然密度低，使盗猎和碎片化后的恢复缓慢，也使错误的“洞穴 = 一只”推算特别危险。[Sun, Pei & Wu 2021](https://doi.org/10.1038/s41598-021-97618-4) [Sun, Lin & Pei 2025](https://doi.org/10.1016/j.gecco.2025.e03406)
7. **分类和执法错位**：扣押物、旧记录和法规名录可能仍把 *M. aurita* 当作 *M. pentadactyla*；错误鉴定会扭曲分布、贸易路线、放归原产地和独立风险评估。[Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9) [CITES Decisions 19.201–19.203](https://cites.org/sites/default/files/eng/dec/valid19/E19-Dec.pdf)

## 推荐保护行动

1. 在范围国、过境国和消费市场联合打击盗猎与非法供应链，对扣押鳞片和活体尽量鉴定到种，建立可追溯案件、法证和库存控制。[CITES Resolution Conf. 17.10](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-17-10-R19.pdf) [CITES Decisions 19.201–19.203](https://cites.org/sites/default/files/eng/dec/valid19/E19-Dec.pdf)
2. 保护并连接有可挖掘土层、低干扰休息洞和稳定蚁/白蚁资源的原生林、次生林、竹林及低强度农林镶嵌；在道路、沟渠和开发边缘设置减速、通道与逃生结构。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) [Wu et al. 2021](https://doi.org/10.1016/j.gecco.2021.e01460)
3. 用标准化相机、占域模型、遗传/环境 DNA、个体标记和重复调查估计趋势；把检测概率、努力量和方法写清楚，禁止用洞穴数直接换算个体数。[Sun, Lin & Pei 2025](https://doi.org/10.1016/j.gecco.2025.e03406) [台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300)
4. 在缅甸北部及相邻地区补充有凭证的基因和形态采样，更新 *M. pentadactyla* / *M. aurita* 分界；执法、救护和放归数据库同步保留鉴定置信度与原产地。[Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9)
5. 建立救伤、检疫、采样、康复、放归地评估和放归后追踪 SOP；不得把来源不明扣押个体无筛查地跨区域释放。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) [CITES Resolution Conf. 17.10](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-17-10-R19.pdf)
6. 在犬只冲突热点实施饲主管理、游荡犬控制和社区通报，持续整合犬伤、兽夹、路杀与救伤资料。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) [Zhang et al. 2024](https://doi.org/10.3390/d16070386)
7. 与社区推进友善农作、减少除草剂、杀虫剂和灭鼠药，保留森林边缘及昆虫资源，并通过有评估的需求降低项目减少非法消费。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) [CITES Resolution Conf. 17.10](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-17-10-R19.pdf)
8. IUCN、CITES 标准名称、国家名录与数据库应根据 2026 年修订协调更新，同时保留历史广义种数据的原始口径，避免无痕重写。[Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9)

## 推荐的故事章节

1. **一个名字，分开两条古老支系**：从台湾模式产地进入 2026 年 *M. aurita* 恢复，解释为什么旧南喜马拉雅记录不能继续画进中华穿山甲。
2. **鳞片不是盔甲板，耳朵也是线索**：角蛋白重叠鳞片、圆锥头、明显耳廓、五爪和掘洞身体；提醒鳞片行数不能独立鉴种。
3. **一个个洞口，不是一只只个体**：休息洞被多只个体共享并跨季节复用，压实洞口也可能仍在使用，监测必须从“数洞”走向检测概率。
4. **不是见蚂蚁就吃**：香港单一幼体与台湾排遗显示选择性和季节性，穿山甲会直接打开有蛹和有翅型的社会性昆虫巢。
5. **一只幼仔，十几个育幼洞**：一只台湾雌兽的四年追踪呈现单仔、迁洞和约五个月育幼，也展示小样本与妊娠期不确定性。
6. **卷成球挡不住贸易链**：附录 I、国家一级保护、法证鉴定、库存与供应链执法、社区和犬只管理必须同时作用。

## 推荐的关键事实

1. 当前接受名为 *Manis pentadactyla*，模式产地是台湾；MDD 首选英文名是 Short-tailed Pangolin，Chinese Pangolin 为常用名。
2. 2026 年 *M. aurita* 恢复为独立种，与狭义中华穿山甲约在 180 万年前分化；南喜马拉雅记录不再归主记录。
3. 狭义种主要在中国南部、东部及东南亚；缅甸北部的接触区和精确国界仍待采样。
4. IUCN 当前正式值是 2019 / CR / decreasing / A3d+4d，但评估早于 2026 年拆分。
5. 中华穿山甲列入 CITES 附录 I；中国大陆现行名录将其列为国家一级重点保护野生动物。
6. 台湾指名种群头体长 44—56 cm、尾长 30—40 cm，成体平均 4.5—4.8 kg；这些不是跨全范围种级常数。
7. 角蛋白鳞片覆盖体背，腹面无鳞；发达前爪用于挖洞和打开蚂蚁、白蚁巢。
8. 休息洞可被多个个体共享、长期复用；洞穴数不能直接换算种群密度。
9. 台湾野外完整个案记录两次单仔、第一胎育幼 157 天和第二胎约 150 天妊娠；只有一只雌兽，不能过度外推。
10. 盗猎与非法贸易仍是全球核心威胁，生境破碎、犬伤、兽夹、路杀和潜在污染/疾病风险在不同地区叠加。

## 应删除或避免的说法

- 不把 *M. aurita*、*M. indoburmanica* 或尼泊尔—藏南—阿萨姆记录继续当作狭义中华穿山甲。
- 不把 MDD 旧国家列表、旧图库或 IUCN 2019 范围图当作已经完成 2026 种界校正的地图。
- 不写 `criteria: 'A2d+3d+4d'` 或 `assessedYear: 2020`；当前对象值是 `2019 / A3d+4d / decreasing`。
- 不把 IUCN CR、CITES 附录 I、中国国家一级保护或台湾国家易危写成同一等级。
- 不说 CITES 附录 I 等于一切跨境移动绝对禁止；以商业为主要目的的国际贸易被禁止，例外仍需许可。
- 不把台湾 44—56 cm 头体长写成总长，不把 4.65 kg 中点伪装成全球平均或个体范围。
- 不填固定寿命、全球成熟个体数或全范围海拔；现有数据不足以在新种界下支持这些结构化值。
- 不把 142 条记录、170 个体观察、114 个相机样点或洞穴密度相加成全球种群数量。
- 不把香港一只幼体胃里的 26,615 只猎物写成每日摄食量或所有个体固定食谱。
- 不把台湾一只雌兽的约 150 天妊娠、157 天育幼或延迟着床假说写成全物种无例外参数。
- 不把能利用次生林、农地或聚落边缘解释成“生境破坏不是威胁”。
- 不声称鳞片行数能可靠区分 *M. pentadactyla* 与 *M. aurita*；2026 年研究未发现显著差异。
- 不画犰狳式横向骨甲带、食蚁兽式长毛大尾、六趾、牙齿、尖长耳或巨大的 *M. aurita* 身材。
- 不在图像或文字中展示精确洞穴坐标、路牌、村名、保护站名或可定位的盗猎线索。

## 1 张封面与 5 张 gallery 的最终科学图像方案

六张图均为 Codex 内置图像生成工具制作的自然史编辑示意，不代表真实个体、事件、洞穴或监测点。源图目标为 1536×1024、3:2、8-bit sRGB、无 alpha 的 PNG，运行时图为同尺寸 WebP；画面不得含文字、标签、Logo、水印、项圈、笼具或可定位地标，统一信用为 `Fauna Atlas · AI 生成原创图像`。

### 共同形态与风格锚点

> Photorealistic natural-history documentary photography of one *Manis pentadactyla sensu stricto* from Taiwan or southern/eastern China. Anatomically accurate small Asian pangolin: compact body, conical narrow head, clearly visible relatively large rounded flap-like external pinnae, small dark eyes, broad rhomboid overlapping dark gray-brown keratin scales, sparse pale-brown hair only on unscaled face, belly and inner limbs, powerful short forelimbs with five claws and especially enlarged central digging claws, shorter tail than *Manis aurita*. No armadillo bands, no bony plates, no anteater fur or plume tail, no teeth, no horn, no giant body, no tiny ears, no extra digits, no malformed limbs, no extra animals unless explicitly requested. Subtropical East Asian forest, restrained colors, physically plausible light, realistic scale texture, documentary rather than fantasy.

该锚点依据台湾指名种群外形与 2026 年 *M. aurita* 对比建立；“较大耳廓、较短尾”只用于避免画成 *M. aurita*，不能宣称仅凭图像完成鉴定。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) [Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9)

### 01 · 林地封面肖像

- 源图：`src/assets/source/species/chinese-pangolin/01-forest-floor-portrait-source.png`
- 运行时：`public/images/species/chinese-pangolin/01-forest-floor-portrait.webp`
- 提示词：

> Use the common morphology anchor. Wide 3:2 nocturnal environmental portrait on a damp subtropical forest floor in Taiwan or southern/eastern China after light rain. One complete adult Chinese pangolin walks naturally from the right half toward the open darker left side, head lowered and sniffing; all four limbs and the full tail are readable, with the animal occupying roughly the right-middle third and ample clean negative space on the left for interface copy. Wet leaf litter, mossy buttress roots and restrained ferns; low soft directional moonlight plus subtle natural catchlight, realistic depth and scale. No prey, burrow, people, dogs, traps, road, text, blood or defensive curl.

- alt：`潮湿的东亚亚热带森林地面，一只完整的深灰褐中华穿山甲在右侧低头行走，圆形耳廓、重叠鳞片、粗壮前爪和完整尾巴清晰可见，左侧为较暗的林地留白`
- 建议焦点：`{ x: 0.68, y: 0.61 }`
- 证据边界：封面表现自然行走和狭义种形态，不对应野外点位，也不把蜷缩防御作为常态姿态。

### 02 · 鳞片、耳廓与前爪

- 源图：`src/assets/source/species/chinese-pangolin/02-scale-and-claw-anatomy-source.png`
- 运行时：`public/images/species/chinese-pangolin/02-scale-and-claw-anatomy.webp`
- 提示词：

> Use the common morphology anchor. Close, full side-three-quarter view of one adult Chinese pangolin standing calmly on wet leaf litter, photographed at animal eye level in soft forest light. Keep the entire conical head, large rounded pinna, shoulder, overlapping rhomboid scale rows, both powerful forefeet, part of the hindfeet and the complete tapering tail in frame. The forefeet must each have five anatomically coherent claws with enlarged central digging claws; the mouth is closed and toothless. Fine keratin growth texture and small areas of sparse facial and belly hair are visible. Shallow depth of field but no clipped anatomy. No ruler, labels, cutaway diagram, extra toes, giant ears, exposed tongue, prey, blood or handling.

- alt：`一只中华穿山甲的近距离侧前方全身视图，圆锥形头部、明显圆耳、宽菱形重叠鳞片、三枚发达中爪和较短的完整尾巴清晰可见`
- title：`鳞片是角蛋白，前爪才是挖掘工具`
- caption：`台湾指名种群具有明显耳廓、重叠角蛋白鳞片和五爪前肢；鳞片行数在中华穿山甲与南喜马拉雅穿山甲间没有显著诊断力。`
- 建议焦点：`{ x: 0.48, y: 0.54 }`

### 03 · 低干扰核心生境

- 源图：`src/assets/source/species/chinese-pangolin/03-core-natural-habitat-source.png`
- 运行时：`public/images/species/chinese-pangolin/03-core-natural-habitat.webp`
- 提示词：

> Use the common morphology anchor. Wide daytime-after-rain landscape of a low-disturbance subtropical East Asian forest mosaic: secondary broadleaf forest transitioning to bamboo and a small grass opening, deep leaf litter, fallen wood, moist clay-loam soil, continuous understory cover and no recognizable location. One Chinese pangolin is small but anatomically legible in the lower-right quadrant beside a natural patch of bare or lightly disturbed diggable soil, emphasizing habitat more than portraiture. The soil patch has no clearly open burrow entrance and must not resemble an oversized cave or a field of holes. Natural overcast light, documentary landscape photography. No people, buildings, roads, signs, dogs, traps, other wildlife, coordinates or text.

- alt：`雨后的亚热带次生阔叶林、竹林和草地开口形成连续镶嵌，一只小型中华穿山甲位于右下方一块自然裸露、轻微扰动的可挖掘土壤旁`
- title：`可挖掘土壤，只是核心生境的一部分`
- caption：`次生林、竹林、草地与可挖掘黏壤土可共同提供觅食和休息条件；画面中的裸露扰动土面没有清晰洞口，不能据此确认洞穴或个体数量。`
- 建议焦点：`{ x: 0.68, y: 0.72 }`

### 04 · 夜间打开蚁巢

- 源图：`src/assets/source/species/chinese-pangolin/04-ant-foraging-source.png`
- 运行时：`public/images/species/chinese-pangolin/04-ant-foraging.webp`
- 提示词：

> Use the common morphology anchor. Night macro-environment scene on a damp subtropical forest floor. One adult Chinese pangolin braces beside a decaying fallen log, uses its enlarged foreclaws to open a small natural ant nest in rotten wood, and extends a thin plausible sticky tongue briefly into the opening. Only a subtle small number of ants and a few pupae near the broken nest are visible; the image must not depict a giant termite mound, a carpet or swarm of insects, gore, chewing, teeth or prey other than social insects. Full animal and tail remain readable, realistic low-light documentary flash softened by forest ambient light, crisp claws and tongue, dark uncluttered background.

- alt：`夜间湿润林地中，一只中华穿山甲把粗壮前爪抵在倒木旁，并将细长舌头伸入腐木中的疑似蚁巢缝隙`
- title：`探入一道缝隙，而不是随机舔食`
- caption：`香港一只幼体的胃内容物和台湾排遗都支持选择性、随季节变化的蚁白蚁食谱；画面是机制示意，不代表每日摄食量。`
- 建议焦点：`{ x: 0.51, y: 0.58 }`

### 05 · 母兽与恰好一只幼仔

- 源图：`src/assets/source/species/chinese-pangolin/05-mother-and-single-pup-source.png`
- 运行时：`public/images/species/chinese-pangolin/05-mother-and-single-pup.webp`
- 提示词：

> Use the common morphology anchor for the adult. Quiet night scene at the entrance of one discreet nursing burrow in a Taiwan secondary-forest slope. Exactly one adult female Chinese pangolin with a clearly short, natural-looking tail emerges slowly while carrying exactly one young pup securely on the base of her tail and rump, a behavior documented during moves between nursing burrows. The pup is much smaller, with soft-looking gray developing scales rather than a miniature adult shell; both heads and all limbs are anatomically coherent. The pair is calm and unhandled, leaf litter and clay-loam entrance are natural, no exposed nest chamber. No male, no second pup, no eggs, no nursing anatomy, no people, no predator, no text and no exact-location clues.

- alt：`夜间林坡一处洞口附近，一只短尾的中华穿山甲母兽缓慢行走，尾基和臀部稳稳背着恰好一只鳞片较细小的灰色幼仔`
- title：`一只幼仔，在多个育幼洞之间长大`
- caption：`台湾野外个案记录母兽背负单仔并在育幼期更换洞穴；“一胎一仔”是稳健框架，约 150 天妊娠和 157 天育幼仍来自单一雌兽。`
- 建议焦点：`{ x: 0.54, y: 0.58 }`

### 06 · 候选洞穴旁的非接触相机监测

- 源图：`src/assets/source/species/chinese-pangolin/06-burrow-camera-monitoring-source.png`
- 运行时：`public/images/species/chinese-pangolin/06-burrow-camera-monitoring.webp`
- 提示词：

> Wide 3:2 conservation-documentary scene in natural daylight in a generic subtropical East Asian secondary forest. Exactly two field researchers in muted practical clothing quietly install and test exactly one small infrared camera trap on a tree; its lens faces a candidate resting-burrow entrance several metres away. They do not touch, open, probe or stand directly over the candidate burrow; no pangolin is visible. Show exactly one plain clipboard as the only recording tool, with no readable screen, map, coordinates, label, station name or road sign. Low-impact posture, intact leaf litter and soil, no notebook, measuring tape, extra camera, bait, cage, dog, trap, weapon, floodlight or geotag overlay. Restrained daylight, credible field research rather than staged publicity.

- alt：`日间的亚热带次生林中，恰好两名研究人员带着一块记录夹在树旁设置一台红外相机，镜头朝向数米外的候选洞穴并保持非接触`
- title：`一次拍到，只是一次检测`
- caption：`相机、重复调查与个体或遗传证据可共同估计趋势；拍到一只、记录一个候选洞穴或一次未检出，都不能单独给出种群数量。`
- 建议焦点：`{ x: 0.52, y: 0.58 }`

第 05 图严格限定“恰好一仔”，依据台湾野外单仔记录；第 06 图不出现可识别地点或处理动物，依据官方行动计划的标准化监测与社区/救伤资料整合方向。[Sun, Pei & Wu 2021](https://doi.org/10.1038/s41598-021-97618-4) [台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300)

## 研究阶段的来源常量与完整字段草案

以下代码块保存研究阶段的来源注册表和完整 `Species` 草案，便于后续实现直接采用并保留证据限定。最终媒体 focal point 必须在六张实图转换后复核；若实际图片构图变化，以素材 README 和静态检查结果为准。

```ts
const CHINESE_PANGOLIN_SOURCE_DATE = '2026-08-22' as const;
const CHINESE_PANGOLIN_CONTENT_DATE = '2026-08-22' as const;

const CHINESE_PANGOLIN_SOURCES = [
  {
    title: 'Mammal Diversity Database — Manis pentadactyla',
    url: 'https://www.mammaldiversity.org/taxon/1005797/',
    kind: 'taxonomy',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Koju et al. 2026 — Revalidation of Manis aurita based on integrative genomic and morphological evidence',
    url: 'https://doi.org/10.1038/s42003-026-10314-9',
    kind: 'taxonomy',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Manis pentadactyla (2019 errata assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T12764A168392151.en',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices — effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'CITES Resolution Conf. 17.10 (Rev. CoP19) — Conservation of and trade in pangolins',
    url: 'https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-17-10-R19.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'CITES SC74 Doc. 73 Annex 2 — Implementation of Decision 18.240',
    url: 'https://www.cites.org/sites/default/files/eng/com/sc/74/E-SC74-73-A2.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'CITES Decisions 19.201–19.203 — pangolin species identification and stock controls',
    url: 'https://cites.org/sites/default/files/eng/dec/valid19/E19-Dec.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局公告 2020 年第 12 号 — 穿山甲调整保护级别',
    url: 'https://www.forestry.gov.cn/main/3457/20200619/092010699781014.html',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: '国家重点保护野生动物名录 2021 — 穿山甲 Manis pentadactyla',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局 2020 — 关于加大中华穿山甲保护的建议复文',
    url: 'https://www.forestry.gov.cn/c/www/gkjyfw/132202.jhtml',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: '台湾林业及自然保育署、台湾生物多样性研究所 2025 — 台湾穿山甲保育行动计划（第二版）',
    url: 'https://conservation.forest.gov.tw/File.aspx?fno=91300',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: '台湾林业及自然保育署 — 台湾穿山甲物种页',
    url: 'https://www.forest.gov.tw/0008047',
    kind: 'general',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Kong et al. 2021 — Distribution records and conservation status in China during 2010–2020',
    url: 'https://doi.org/10.17520/biods.2020446',
    kind: 'distribution',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Wu et al. 2021 — Observations of Chinese pangolins in mainland China',
    url: 'https://doi.org/10.1016/j.gecco.2021.e01460',
    kind: 'distribution',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Lee et al. 2017 — Diet of one juvenile Chinese pangolin in Hong Kong',
    url: 'https://doi.org/10.1177/1940082917709648',
    kind: 'ecology',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Sun, Pei & Wu 2021 — Long-term monitoring of wild reproductive behaviour',
    url: 'https://doi.org/10.1038/s41598-021-97618-4',
    kind: 'ecology',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Chin et al. 2012 — Gestation monitoring in rescued Formosan pangolins',
    url: 'https://doi.org/10.1002/zoo.20413',
    kind: 'ecology',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Sun, Lin & Pei 2025 — Characteristics and usage patterns of resting burrows',
    url: 'https://doi.org/10.1016/j.gecco.2025.e03406',
    kind: 'ecology',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Sun, Pei & Lin 2019 — Attaching tracking devices to Chinese pangolins in Taiwan',
    url: 'https://doi.org/10.1016/j.gecco.2019.e00700',
    kind: 'ecology',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2024 — Disturbance by free-ranging domestic dogs in Guangdong',
    url: 'https://doi.org/10.3390/d16070386',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Heath 1992 — Manis pentadactyla species account',
    url: 'https://doi.org/10.2307/3504143',
    kind: 'general',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

```ts
{
  id: 'species-manis-pentadactyla',
  slug: 'chinese-pangolin',
  names: {
    zh: '中华穿山甲',
    en: 'Chinese Pangolin',
    aliases: ['穿山甲', '中国穿山甲', '鲮鲤', 'Short-tailed Pangolin'],
  },
  scientificName: 'Manis pentadactyla',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Pholidota', '鳞甲目'),
    taxon('Manidae', '鲮鲤科'),
    taxon('Manis', '穿山甲属'),
  ),
  conservation: conservation('CR', 'decreasing', 2019, 'A3d+4d'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲'],
    regions: ['台湾、海南与中国南部及东部', '中南半岛北部（按 2026 种界仍待逐点复核）'],
    countries: ['中国', '老挝', '缅甸', '泰国', '越南'],
    range:
      '2026 年种界下，狭义 Manis pentadactyla 包括以台湾为模式产地的指名种群和海南 pusilla 谱系，主要分布于中国南部、东部及东南亚。过去归入本种的尼泊尔、藏南和印度东北部种群现属 Manis aurita；缅甸北部可能接触区及东南亚国家级边界仍需有凭证的遗传与形态采样复核。旧 MDD 国家列表和 IUCN 2019 范围仍含拆分前口径，不能视为完成更新的狭义种地图。',
    center: { lat: 24.5, lng: 111.5 },
  },
  habitats: [
    {
      name: '亚热带与热带森林',
      realm: 'terrestrial',
      description:
        '原生和成熟阔叶林提供低干扰休息地、可挖掘土层、倒木以及稳定的蚂蚁和白蚁资源；连续林地有助于个体在多个休息洞之间移动。',
      isPrimary: true,
    },
    {
      name: '次生林、竹林与灌草镶嵌',
      realm: 'terrestrial',
      description:
        '台湾指名种群可利用次生林、竹林、混合林、灌草地和林缘；低干扰且具有黏土或壤土的地点可保留长期复用的休息洞。',
      isPrimary: true,
    },
    {
      name: '低强度农林与浅山里山环境',
      realm: 'terrestrial',
      description:
        '可进入果园、农垦地和聚落边缘觅食，但道路、犬只、兽夹、农药和开发风险随之上升；能出现不等于生境质量没有下降。',
    },
  ],
  measurements: {
    length: {
      min: 44,
      max: 56,
      unit: 'cm',
      note: '台湾指名种群头体长；尾长另为 30—40 厘米，不是全范围总长',
    },
    weight: {
      typical: 4.65,
      unit: 'kg',
      note: '台湾指名种群成体平均 4.5—4.8 千克的展示中点；不是狭义种全球典型值或个体范围',
    },
  },
  diet: {
    types: ['insectivore'],
    foods: ['蚂蚁', '白蚁', '蚁蛹与幼体', '有翅繁殖型社会性昆虫'],
    description:
      '专食社会性昆虫，以嗅觉定位蚁巢或白蚁巢，用发达前爪打开土壤、朽木或巢体，再以细长黏性舌取食；猎物组成会随地区、季节和可利用巢穴改变，不能把单一个体胃内容物当作固定菜单。',
  },
  activity: [
    '以陆栖和掘洞生活为主，前爪用于建立休息洞与打开社会性昆虫巢',
    '台湾材料多记录傍晚至夜间出洞，白天在休息洞隐蔽；该时段不外推为全范围固定日历',
    '通常独居，繁殖、雄性造访育幼洞及母兽携带单仔时例外',
    '在活动范围内轮换多个休息洞，洞穴可被不同个体共享并跨季节重复利用',
    '受威胁可蜷缩保护柔软腹面，但鳞球姿态不能防御人类捕捉和犬只持续攻击',
  ],
  tags: ['IUCN极危', 'CITES附录I', '国家一级保护', '鳞甲目', '食虫动物', '掘洞', '夜间活动', '单仔育幼', '分类新修订'],
  summary: '披覆角蛋白鳞片、专食蚂蚁和白蚁的亚洲掘洞哺乳动物；2026 年种界收窄后，南喜马拉雅种群已另属 Manis aurita。',
  description:
    '中华穿山甲是以台湾为模式产地的鳞甲目哺乳动物，具有圆锥形头部、明显耳廓、宽菱形重叠角蛋白鳞片、发达五爪前肢和相对较短的尾。它在中国南部、东部及东南亚的森林、次生林、竹林与低强度农林镶嵌中建立并轮换休息洞，专食蚂蚁和白蚁。2026 年整合分类研究把南喜马拉雅的 Manis aurita 从旧广义种中恢复，令分布和保护资料必须重新校正；IUCN 当前仍沿用拆分前的 2019 年评估，将其列为极危、趋势下降。过度利用和非法贸易是全球核心威胁，生境破碎、犬伤、兽夹、路杀及潜在污染和疾病风险在不同地区叠加。',
  storySections: [
    {
      key: 'aurita-split',
      label: '分类更新',
      title: '一个旧名字，终于分开两条古老支系',
      body: '2026 年基因组、模式标本和形态证据把南喜马拉雅的 Manis aurita 恢复为独立种；它与狭义中华穿山甲约在 180 万年前分化。旧资料中的尼泊尔、藏南和印度东北部记录不能继续画进本档案，缅甸北部边界仍需补采样。',
    },
    {
      key: 'scales-and-claws',
      label: '独特身体',
      title: '鳞片不是骨甲，前爪才是开路工具',
      body: '角蛋白鳞片像瓦片般覆盖头背、躯干和尾部，腹面仍柔软；圆锥形头、明显耳廓和五爪前肢构成狭义种的安全图像锚点。它用粗壮前爪挖洞和打开蚁巢，而不是以牙齿啃食。',
    },
    {
      key: 'burrow-is-not-individual',
      label: '监测边界',
      title: '一个个洞口，并不是一只只动物',
      body: '无线电追踪显示一只个体可轮换数十个休息洞，同一洞也会被不同个体共享并跨季节重用；压实洞口甚至可能仍在使用。洞穴能提示出现，却不能直接换算种群密度，调查必须记录检测概率和重复努力。',
    },
    {
      key: 'selective-myrmecophagy',
      label: '选择性觅食',
      title: '不是见到蚂蚁就吃',
      body: '香港一只幼体胃中超过 2.6 万件猎物支持直接打开树上或地表蚁巢，台湾排遗又显示猎物组成随季节改变。这个惊人的数字来自单一个体，不能被包装成每日食量；真正稳健的结论是专食、选择性和地域差异。',
    },
    {
      key: 'single-pup-maternal-care',
      label: '低速生活史',
      title: '一只幼仔，在多个育幼洞之间长大',
      body: '台湾一只雌兽四年间两次在 12 月初各产一仔，并把幼仔在核心活动区的多个洞穴间转移；第一胎育幼 157 天。它让母幼行为第一次可见，也提醒我们约 150 天妊娠和延迟着床仍是小样本证据。',
    },
    {
      key: 'trade-and-recovery',
      label: '保护链条',
      title: '卷成球，挡不住一条贸易链',
      body: 'IUCN 怀疑拆分前广义种在三个世代下降超过 80%，CITES 附录 I 后非法贸易仍未消失。恢复需要供应链执法与种级法证，也需要连续生境、标准化监测、犬只和道路管理、规范救伤放归及社区需求降低同时推进。',
    },
  ],
  keyFacts: [
    '当前接受名为 Manis pentadactyla，模式产地为台湾；MDD 首选英文名是 Short-tailed Pangolin。',
    '2026 年 Manis aurita 恢复为独立种，南喜马拉雅记录不再属于狭义中华穿山甲。',
    'IUCN 当前正式值为 CR、趋势下降、2019 年评估、准则 A3d+4d，但评估证据早于物种拆分。',
    '现行 CITES 附录将中华穿山甲列入附录 I，中国大陆名录将其列为国家一级重点保护野生动物。',
    '台湾指名种群头体长 44—56 厘米、尾长 30—40 厘米，成体平均 4.5—4.8 千克。',
    '身体大部覆以角蛋白鳞片，腹面和四肢内侧无鳞；发达五爪前肢用于掘洞和打开昆虫巢。',
    '核心食物是蚂蚁和白蚁，猎物选择随地区与季节变化；一只香港幼体的胃内容物不能代表每日食量。',
    '个体会轮换多个休息洞且洞穴可共享、复用，洞穴数不能直接换算种群密度。',
    '野外资料通常为每胎一仔；台湾完整个案的约 150 天妊娠和 157 天育幼只来自一只雌兽。',
  ],
  threats: [
    '肉和鳞片需求驱动的盗猎、国内非法交易与跨境走私',
    '道路、建设、农业扩张和持续干扰造成的森林及浅山生境丧失、退化与破碎化',
    '自由活动犬只造成的攻击、创伤、死亡与活动空间干扰，严重程度具有区域差异',
    '兽夹等非目标猎具、道路死亡、沟渠与其他人工结构造成的伤亡和阻隔',
    '农药与污染物累积以及犬源病原等潜在健康风险，剂量和种群效应仍需研究',
    '每胎通常一仔、低自然密度与破碎种群导致的缓慢恢复',
    '新旧种界错位造成的分布误判、扣押物误鉴、风险评估滞后和错误放归',
  ],
  conservationActions: [
    '联合范围国、过境国和消费市场打击盗猎与非法供应链，对扣押物尽量完成种级法证鉴定',
    '保护并连接有可挖掘土层、低干扰休息洞和稳定蚁白蚁资源的森林、竹林及农林镶嵌',
    '组合标准化相机、占域模型、遗传或环境 DNA、个体标记和重复调查，不以洞穴数替代个体数',
    '补充缅甸北部等缺资料区的有凭证样本，更新 Manis pentadactyla 与 M. aurita 的边界',
    '建立救伤、检疫、原产地鉴定、放归地评估和放归后追踪 SOP，避免来源不明个体跨区释放',
    '在犬只冲突热点实施饲主管理、游荡犬控制，并减缓兽夹、路杀、沟渠和道路阻隔',
    '与社区推进友善农作、减少除草剂和杀虫剂，保护林缘昆虫资源并建立威胁通报网络',
    '开展有评估的需求降低、库存控制和公众教育，并推动 IUCN、CITES 与国家数据库同步新种界',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'aurita-divergence',
      label: '与南喜马拉雅种分化',
      value: '约 1.8',
      unit: '百万年',
      note: '2026 年基因组时钟均值，95% 置信区间约 1.3—2.5 百万年；不是现存种群年龄',
    },
    {
      key: 'iucn-decline',
      label: 'IUCN 怀疑三个世代下降',
      value: '>80',
      unit: '%',
      note: '2019 年拆分前评估，三个世代约 21 年、主要归因于捕猎和非法贸易；并非狭义种 2026 年后独立重算',
    },
    {
      key: 'china-records',
      label: '中国确认发现记录',
      value: '142 / 11',
      unit: '条 / 省级行政区',
      note: '2010—2020 年资料汇编；记录量不是个体总数，西南边缘记录还需按新种界复核',
    },
    {
      key: 'usual-litter-size',
      label: '野外通常每胎',
      value: '1',
      unit: '仔',
      note: '台湾官方行动计划和一只雌兽连续两年单仔记录；不是对所有个体与地区的无例外保证',
    },
  ],
  media: {
    image: './images/species/chinese-pangolin/01-forest-floor-portrait.webp',
    alt: '潮湿的东亚亚热带森林地面，一只完整的深灰褐中华穿山甲在右侧低头行走，圆形耳廓、重叠鳞片、粗壮前爪和完整尾巴清晰可见，左侧为较暗的林地留白',
    focalPoint: { x: 0.68, y: 0.61 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/chinese-pangolin/02-scale-and-claw-anatomy.webp',
        alt: '一只中华穿山甲的近距离侧前方全身视图，圆锥形头部、明显圆耳、宽菱形重叠鳞片、三枚发达中爪和较短的完整尾巴清晰可见',
        title: '鳞片是角蛋白，前爪才是挖掘工具',
        caption: '台湾指名种群具有明显耳廓、重叠角蛋白鳞片和五爪前肢；鳞片行数在中华穿山甲与南喜马拉雅穿山甲间没有显著诊断力。',
        focalPoint: { x: 0.48, y: 0.54 },
      },
      {
        image: './images/species/chinese-pangolin/03-core-natural-habitat.webp',
        alt: '雨后的亚热带次生阔叶林、竹林和草地开口形成连续镶嵌，一只小型中华穿山甲位于右下方一块自然裸露、轻微扰动的可挖掘土壤旁',
        title: '可挖掘土壤，只是核心生境的一部分',
        caption: '次生林、竹林、草地与可挖掘黏壤土可共同提供觅食和休息条件；画面中的裸露扰动土面没有清晰洞口，不能据此确认洞穴或个体数量。',
        focalPoint: { x: 0.68, y: 0.72 },
      },
      {
        image: './images/species/chinese-pangolin/04-ant-foraging.webp',
        alt: '夜间湿润林地中，一只中华穿山甲把粗壮前爪抵在倒木旁，并将细长舌头伸入腐木中的疑似蚁巢缝隙',
        title: '探入一道缝隙，而不是随机舔食',
        caption: '香港一只幼体的胃内容物和台湾排遗都支持选择性、随季节变化的蚁白蚁食谱；画面是机制示意，不代表每日摄食量。',
        focalPoint: { x: 0.51, y: 0.58 },
      },
      {
        image: './images/species/chinese-pangolin/05-mother-and-single-pup.webp',
        alt: '夜间林坡一处洞口附近，一只短尾的中华穿山甲母兽缓慢行走，尾基和臀部稳稳背着恰好一只鳞片较细小的灰色幼仔',
        title: '一只幼仔，在多个育幼洞之间长大',
        caption: '台湾野外个案记录母兽背负单仔并在育幼期更换洞穴；“一胎一仔”是稳健框架，约 150 天妊娠和 157 天育幼仍来自单一雌兽。',
        focalPoint: { x: 0.54, y: 0.58 },
      },
      {
        image: './images/species/chinese-pangolin/06-burrow-camera-monitoring.webp',
        alt: '日间的亚热带次生林中，恰好两名研究人员带着一块记录夹在树旁设置一台红外相机，镜头朝向数米外的候选洞穴并保持非接触',
        title: '一次拍到，只是一次检测',
        caption: '相机、重复调查与个体或遗传证据可共同估计趋势；拍到一只、记录一个候选洞穴或一次未检出，都不能单独给出种群数量。',
        focalPoint: { x: 0.52, y: 0.58 },
      },
    ],
  },
  sources: CHINESE_PANGOLIN_SOURCES,
  featured: true,
  publishedAt: CHINESE_PANGOLIN_CONTENT_DATE,
  updatedAt: CHINESE_PANGOLIN_CONTENT_DATE,
}
```

`featured: true` 只是沿用近期完整档案的首页编排习惯，不是科学事实；若首页席位需要固定，可删除该可选字段而不影响档案内容。

## 来源覆盖清单

| 主题 | 直接来源 | 本文用途与限制 |
| --- | --- | --- |
| 当前接受名、高阶分类、模式产地与英文名 | [MDD — *M. pentadactyla*](https://www.mammaldiversity.org/taxon/1005797/) | 接受名、Linnaeus 1758、Pholidota/Manidae/Manis、台湾模式产地、Short-tailed Pangolin 与 Chinese Pangolin；页面国家列表和首张图库仍混有拆分前 `aurita` |
| 2026 种界 | [Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9) | 含选定模式标本的基因组、线粒体、头骨与外部形态证据；恢复 *M. aurita*、约 1.8 Ma 分化、两种形态差别、南喜马拉雅范围和缅甸北部缺口 |
| IUCN 正式状态 | [IUCN 2019 errata](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T12764A168392151.en) [CITES SC74 Annex 2](https://www.cites.org/sites/default/files/eng/com/sc/74/E-SC74-73-A2.pdf) | CR、decreasing、A3d+4d、>80%、三个世代 21 年与 7 年世代长度；评估早于 *M. aurita* 拆分，不能视为狭义种重算 |
| 现行国际贸易制度 | [CITES 2026 current appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [Resolution Conf. 17.10](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-17-10-R19.pdf) | 附录 I 和商业国际贸易边界；不等于 IUCN 等级，也不等于任何跨境移动绝对禁止 |
| CITES 行动 | [Resolution Conf. 17.10](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-17-10-R19.pdf) [Decisions 19.201–19.203](https://cites.org/sites/default/files/eng/dec/valid19/E19-Dec.pdf) | 执法协作、法证、库存、报告、活体处置、监测、社区和需求降低；新种界出现后尤其要种级鉴定 |
| 中国大陆保护级别 | [2020 第 12 号公告](https://www.forestry.gov.cn/main/3457/20200619/092010699781014.html) [2021 国家名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf) | 穿山甲属所有种调为国家一级，以及名录中的“穿山甲 *M. pentadactyla* / 一级”；不与 CR 或附录 I 混写 |
| 中国大陆官方行动 | [国家林草局建议复文](https://www.forestry.gov.cn/c/www/gkjyfw/132202.jhtml) | 打击违法犯罪、保护研究中心、野外巡护、监测和值守；官方政策叙述不替代效果评估 |
| 台湾综合自然史与行动计划 | [台湾穿山甲保育行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) | 台湾指名种群形态、体尺、生境、活动、食性、繁殖、威胁、监测和行动；计划早于 2026 修订，其把 `aurita` 当亚种的旧分布段不沿用 |
| 台湾当前物种页 | [台湾林业保育署物种页](https://www.forest.gov.tw/0008047) | 当前台湾分布、生境、休息/觅食洞、犬伤、兽夹、路杀、猎捕和潜在风险；页面显示的 IUCN 年份不取代正式评估引用 |
| 中国范围发现记录 | [Kong et al. 2021](https://doi.org/10.17520/biods.2020446) | 142 条、11 省级行政区、67.6% 集中于台湾/浙江/广东；资料汇编不是种群数量，边缘记录仍需新种界复核 |
| 大陆观察与繁殖线索 | [Wu et al. 2021](https://doi.org/10.1016/j.gecco.2021.e01460) | 157 次观察、170 个体、8 省和带仔记录，以及道路/犬只行动建议；混合来源不能完整代表分布与丰度 |
| 香港食性 | [Lee et al. 2017](https://doi.org/10.1177/1940082917709648) | 一只 546 g 幼体、25,803 蚂蚁、812 白蚁、选择性掠巢；样本量 1，不能外推每日摄食量 |
| 台湾野外繁殖 | [Sun, Pei & Wu 2021](https://doi.org/10.1038/s41598-021-97618-4) | 一只雌兽、两次单仔、约 150 天妊娠、157 天育幼、迁换育幼洞和一次产后交配；延迟着床是解释假说 |
| 圈养妊娠 | [Chin et al. 2012](https://doi.org/10.1002/zoo.20413) | 三只怀孕雌兽的激素监测与 318—372 天估算；小样本且圈养，不与野外 150 天强行合成固定值 |
| 休息洞与监测边界 | [Sun, Lin & Pei 2025](https://doi.org/10.1016/j.gecco.2025.e03406) | 7 只无线电追踪、洞穴共享/复用、压实洞口和“洞穴数不适合作密度指标”；单一台湾景观仍需跨区域验证 |
| 追踪方法与鳞片材质 | [Sun, Pei & Lin 2019](https://doi.org/10.1016/j.gecco.2019.e00700) | 44 次标记事件、设备附着于角蛋白鳞片和长期追踪方法；用于说明监测而非提供种群数量 |
| 广东犬只干扰 | [Zhang et al. 2024](https://doi.org/10.3390/d16070386) | 两个非保护区的相机与 8 只家犬 GPS 资料支持空间干扰；是区域案例，不能替代全范围威胁排序 |
| 一般解剖与历史物种账户 | [Heath 1992](https://doi.org/10.2307/3504143) | 无齿口、细长舌、重叠鳞片、腹面无鳞和强壮前爪；发表于拆分前，只用于共享形态，不沿用其广义范围或体尺 |

## 仍然不确定或需后续更新的事项

1. **缅甸北部边界未知**：2026 年修订明确要求对数据缺口区采样；结构化国家列表只是保守实现，不表示每个国家所有旧记录都已重鉴。[Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9)
2. **MDD 字段仍部分不同步**：文字注释接受 *M. aurita*，国家列表、分布摘要和图库却仍有旧广义种内容；更新前应再次核对 MDD 版本和页面变化。[MDD](https://www.mammaldiversity.org/taxon/1005797/)
3. **IUCN 需要按新种界重评**：当前 `2019 / CR / A3d+4d / decreasing` 必须展示，但其范围、下降和世代证据含现属 *M. aurita* 的区域。[IUCN](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T12764A168392151.en) [Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9)
4. **新种的 CITES 名称协调仍在进行**：中华穿山甲本身继续受附录 I 管制；*M. aurita* 的标准名称和明确列名应由 CITES 后续决定确认，产品不代替公约作法律推断。[Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9) [CITES current appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)
5. **台湾体尺不能无条件代表大陆和中南半岛**：44—56 cm 与 4.5—4.8 kg 是指名种群资料；对象 note 必须保留地域，metrics 留空。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300)
6. **狭义种没有可靠全球数量**：相机样点、发现记录、洞穴和台湾历史估计回答不同问题，任何组合都不能填 `estimatedMatureIndividuals`。[台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300) [Kong et al. 2021](https://doi.org/10.17520/biods.2020446) [Sun, Lin & Pei 2025](https://doi.org/10.1016/j.gecco.2025.e03406)
7. **食性证据的尺度不同**：香港胃内容物是单一个体，台湾排遗是区域与季节样本；可支持专食和选择性，不能支持统一每日食量或固定猎物比例。[Lee et al. 2017](https://doi.org/10.1177/1940082917709648) [台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300)
8. **繁殖参数仍有冲突**：一只野外雌兽约 150 天与三只圈养雌兽 318—372 天不能平均；延迟着床仍需更多直接证据。[Sun, Pei & Wu 2021](https://doi.org/10.1038/s41598-021-97618-4) [Chin et al. 2012](https://doi.org/10.1002/zoo.20413)
9. **区域威胁不能机械全球化**：犬伤、兽夹与路杀在台湾和广东有直接证据，其他范围国的相对重要性可能不同；全球核心仍是过度利用、非法贸易和生境退化。[CITES Resolution Conf. 17.10](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-17-10-R19.pdf) [台湾行动计划 2025](https://conservation.forest.gov.tw/File.aspx?fno=91300)
10. **图片不能完成鉴种**：较大耳廓、较短尾和总体较小只是在新种界下更安全的编辑锚点；标本、来源与遗传资料才可可靠区分接触区个体。[Koju et al. 2026](https://doi.org/10.1038/s42003-026-10314-9)
11. **图片焦点必须按实图复核**：草案值来自构图和当前源图静态观察；任何重生成、裁切或转换都可能改变主体位置。

## 最终实施与测试清单

### 数据集成

- 在 `src/data/species.ts` 顶部只新增一次 `CHINESE_PANGOLIN_SOURCE_DATE`、`CHINESE_PANGOLIN_CONTENT_DATE` 和 `CHINESE_PANGOLIN_SOURCES`，不要在对象尾部复制来源数组。
- 采用 `id: 'species-manis-pentadactyla'`、`slug: 'chinese-pangolin'`、`scientificName: 'Manis pentadactyla'`；检查三者及媒体路径都没有重复。
- 分类链固定为 `Animalia > Chordata > Mammalia > Pholidota > Manidae > Manis > Manis pentadactyla`；中文科名采用中国现行名录的“鲮鲤科”，台湾“穿山甲科”只作地区用名理解。
- 保护字段固定为 `conservation('CR', 'decreasing', 2019, 'A3d+4d')`；搜索确认没有残留 `2014 / A2d+3d+4d` 或误写的 `assessedYear: 2020/2024`。
- `distribution.realms` 只含 terrestrial；`range` 必须保留 *M. aurita* 拆分、缅甸北部缺口及旧 MDD/IUCN 口径边界。
- `measurements.length` 只能作为台湾头体长 44—56 cm，`weight.typical` 只能作为台湾 4.5—4.8 kg 平均区间的中点；保持 `metrics: {}`。
- `storySections` 保持恰好 6 段、`featuredStats` 保持 4 项、gallery 恰好 5 张、sources 恰好 21 条；每个关键数字的 note 不能删除。
- 用户可见文案中的 *M. aurita*、IUCN 拆分前口径、单一样本、区域体尺、记录非数量和洞穴非个体限制必须保留。

### 图像与静态资源

- 源文件目录 `src/assets/source/species/chinese-pangolin/` 应包含 `01` 至 `06` 的 `*-source.png` 与 README；运行时目录 `public/images/species/chinese-pangolin/` 应包含六张同名 `.webp`。
- 最终文件名固定为 `01-forest-floor-portrait`、`02-scale-and-claw-anatomy`、`03-core-natural-habitat`、`04-ant-foraging`、`05-mother-and-single-pup`、`06-burrow-camera-monitoring`；封面不在 gallery 重复。
- 在物种素材 README 保存共同形态锚点、六张实际最终提示词、种界边界、生成日期、源图—运行时映射、转换参数和逐图验收结果；更新 `src/assets/source/README.md` 总索引。
- 用静态工具确认每张源 PNG 和运行时 WebP 都是 1536×1024、3:2、8-bit sRGB、无 alpha，WebP 可解码且不是误命名 PNG；复核文件大小和像素不是空白或损坏。
- 静态视觉检查：01 单只完整成体、左侧留白；02 明显圆耳、三枚发达中爪、完整尾、无犰狳骨甲（两侧小趾受角度遮挡，不宣称五趾全部可数）；03 个体小且生境主导，只有自然裸露、轻微扰动的土面而无清晰洞口；04 单只、前爪和细舌、无昆虫洪流；05 夜间场景、短尾母兽加**恰好一仔**、无第二幼仔；06 日间场景、**恰好两名**研究者、一台朝向候选洞穴的相机、一块记录夹、非接触且无地点线索。
- 封面和 gallery 的 alt、caption、focalPoint 逐张与最终 WebP 对照；信用统一为 `Fauna Atlas · AI 生成原创图像`。

### 分类测试与计数

- 在 `tests/taxonomy.test.mjs` 新增中华穿山甲完整档案测试：CR/decreasing/2019/A3d+4d、terrestrial 单一 realm、地域限定 measurements、空 metrics、6 段故事、4 项统计、5 张 gallery、21 个来源和六条准确媒体路径。
- 增加接受名路径断言：`Animalia > Chordata > Mammalia > Pholidota > Manidae > Manis > Manis pentadactyla`。
- 本研究日仓库测试基线为 **28 个物种档案、87 个分类单元节点**；若仅新增中华穿山甲，应变为 **29 个物种档案、90 个分类单元节点、合计 119 个节点**。`Animalia` 为 29、`Chordata` 为 24、`Mammalia` 为 13，新 `Pholidota`、`Manidae`、`Manis` 各为 1。若共享工作区还有并行物种改动，按实际树重算，不机械覆盖这些数值。
- 保留现有唯一性与必填检查：`id`、slug、学名、分类叶、source URL、图片路径和日期不能重复或缺失。

### 命令验证

- 运行 `npm run typecheck`，确认 source kind、diet type、realm、日期、measurement 和图片模板字面量通过 TypeScript。
- 运行 `npm test`，确认新分类路径、计数、完整档案与既有回归测试全部通过。
- 运行 `npm run build`，确认六张 WebP 被 Vite 正确解析并进入构建产物。
- 按仓库约束只使用测试、类型检查、构建和静态资源检查；不启动 GUI 或无头浏览器。
- 运行 `git diff --check`，审阅 `git diff --stat` 和目标文件清单，确保下载文献、OCR 中间文件、失败生成图和缓存没有进入提交。

### TODO 收尾顺序

- 只有完整数据对象、分类测试、六张源 PNG、六张运行时 WebP、物种素材 README、源图总索引、typecheck、test、build 和静态视觉检查全部完成后，才从 `docs/todo.md` 删除 `中华穿山甲 *Manis pentadactyla*`。
- 研究文档完成、只有部分图片或只有代码未验证时，都不提前删除 TODO。
- 删除后确认 `docs/todo.md` 的首个剩余条目成为 `儒艮 *Dugong dugon*`；同时重新计算文件头的“现有物种档案”数字，当前 `30` 与测试基线 `28` 不一致，不能只删条目而保留失真的总数。

## 最终实施建议

- 采用狭义 *Manis pentadactyla*，以台湾、海南和中国南部/东部证据锚定对象与图像，把南喜马拉雅 *M. aurita* 和缅甸北部边界写进所有分布限制。
- 固定 IUCN 为 `CR / decreasing / 2019 / A3d+4d`，同时醒目标明这是 2026 拆分前评估；未来重评必须成套更新。
- 只结构化台湾可溯源的头体长和平均体重，并在 note 中保留地域与测量法；不填全球体尺 metrics、寿命、海拔或成熟个体数。
- 六图与六段故事分别覆盖种界、鳞片/前爪、洞穴监测、选择性食性、单仔育幼和贸易—恢复链条；母幼图固定一仔，监测图保持非接触和点位保密。
- 把“洞穴不是个体”和“记录不是数量”作为档案的监测主线；保护行动同时覆盖供应链执法、连续生境、分类法证、规范救伤放归、犬只/道路管理、友善农作和需求降低。
