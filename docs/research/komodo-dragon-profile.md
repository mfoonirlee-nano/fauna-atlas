# 科莫多巨蜥（*Varanus komodoensis*）完整档案研究

- 检索与核验日期：2026-08-17
- 使用范围：`src/data/species.ts` 中 `komodo-dragon` 条目的分类、保护状态、分布、生境、体型、行为、故事章节、展示数字与 6 张图像叙事
- 时间边界：IUCN 记录代表 **2019 年完成、2021-2 版发布**的全球评估；当前岛屿分布和数量基线优先采用印度尼西亚林业部 2025—2035 年保护行动计划及其 2024 年监测结果。旧论文中的“四个国家公园岛屿”是当时调查边界，不能覆盖帕达尔岛重新出现后的现状。
- 证据标准：优先使用 IUCN、CITES、印度尼西亚林业部、UNESCO、Reptile Database、原始描述和同行评审原始论文。动物园物种页只用于补充感官结构的通俗解释；新闻稿、保护组织网页和二手资料不单独承担关键数值。
- 数字原则：成熟个体、总个体、调查区估算和岛屿分项不能相加或互换；模型推断寿命、历史短跑观察和气候情景区间不写成确定的物种极限。

## 结论摘要

### 接受名、分类与名称

当前接受名为 ***Varanus komodoensis* Ouwens, 1912**，隶属动物界—脊索动物门—爬行纲—有鳞目—巨蜥科—巨蜥属。Reptile Database 将其列为有效种，未列出现生亚种；Ouwens 在 1912 年以科莫多岛材料正式描述该种。仓库现有分类链正确，中文主名宜保留“科莫多巨蜥”，别名保留“科莫多龙”。[Reptile Database](https://reptile-database.reptarium.cz/Varanus/komodoensis) [Ouwens 1912 原始描述](https://www.biodiversitylibrary.org/part/76070) [ITIS](https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=202168)

CITES/BfN 巨蜥鉴定指南同样使用 `Varanus komodoensis Ouwens, 1912`，并注明无亚种。它是现生体长最大的蜥蜴；“龙”是约定俗成的名称，不表示它属于恐龙或鳄类。[CITES/BfN identification guide](https://cites.org/sites/default/files/vc-files/files/ID_Guide_Lizards_BFN.pdf)

### IUCN、CITES 与印度尼西亚法律地位

最新全球 IUCN 状态为 **濒危 Endangered（EN），标准 C1，种群趋势下降**。Red List 条目的评估日期是 **2019 年 8 月 5 日**，随后收录于 2021-2 版；仓库类型明确要求 `assessedYear` 记录所代表的评估年，因此应填 `2019`，而不是把发布版本年份 `2021` 当作评估年。现有 `B1ab(iii)+2ab(iii)` 不是这次评估采用的标准，应改成 `C1`。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T22884A123633058.en)

EN C1 的一般门槛是成熟个体少于 2,500，并预计在五年或两个世代中的较长者内至少下降 20%；IUCN 对该种给出的成熟个体估算为 **1,383 只**。这个数字不是全部年龄总数，也不是 2024 年国家公园监测数的同义词。[IUCN Categories and Criteria, version 3.1, 2nd ed.](https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf) [IUCN assessment](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T22884A123633058.en)

三套状态必须分开表达：

- **IUCN EN C1** 是全球灭绝风险评估；
- **CITES 附录 I** 是国际贸易管制地位；
- 印度尼西亚国内依据经 2024 年修订的《生物自然资源及其生态系统保护法》、政府条例和物种保护名录给予法定保护。

CITES 附录 I 通常禁止以商业目的进行野生来源标本的国际贸易，但并不等于 IUCN 等级。印度尼西亚法律依据和 2025—2035 年管理目标可由最新官方行动计划支撑。[CITES Appendices, 25 May 2024](https://www.cites.org/sites/default/files/eng/app/2024/E-Appendices-2024-05-25.pdf) [Indonesia Ministry of Forestry, Komodo Dragon SRAK 2025–2035](https://ksdae.kehutanan.go.id/in-flores/storage/7b49f5e3-eedd-484c-8014-aa19a4e79892/preview/)

### 分布：五个国家公园岛屿，加上弗洛勒斯沿岸破碎种群

科莫多巨蜥只自然分布于**印度尼西亚小巽他群岛**。印度尼西亚林业部最新基线在科莫多国家公园持续监测五座岛：**科莫多岛、林卡岛、吉利莫堂岛（Gili Motang/Motang）、努沙科德岛（Nusa Kode/Kode，旧资料亦称 Gili Dasami）和帕达尔岛**。国家公园之外，弗洛勒斯岛西部、南部及北部沿海仍有彼此破碎的种群，官方行动计划还列出 Longos、Ontoloe 等近岸小岛或北部调查景观。[SRAK 2025–2035](https://ksdae.kehutanan.go.id/in-flores/storage/7b49f5e3-eedd-484c-8014-aa19a4e79892/preview/)

旧研究常写“科莫多、林卡、吉利莫堂、努沙科德四岛，加弗洛勒斯岛”。这并非简单的拼写错误：帕达尔岛种群在 20 世纪后期消失，后来又被记录并纳入当前监测。因此产品若表达**当前**分布，应以五个国家公园岛屿为准；若讲历史变化，应明确年份。也不宜把“5”写成整个物种占据的岛屿总数，因为弗洛勒斯近岸小岛记录使总数取决于统计口径。[SRAK 2025–2035](https://ksdae.kehutanan.go.id/in-flores/storage/7b49f5e3-eedd-484c-8014-aa19a4e79892/preview/) [Ariefiandy et al. 2021](https://doi.org/10.1007/s10531-020-02100-8)

2024 年国家公园估计为 **3,270 ± 371 只总个体**：科莫多岛 1,619、林卡岛 1,472、吉利莫堂岛 74、努沙科德岛 77、帕达尔岛 28。它包含不同年龄阶段，只代表国家公园监测范围。官方行动计划对部分弗洛勒斯调查景观另估 **701 ± 131 只**；调查设计、空间范围和年龄口径不同，不能把两者机械相加，更不能用它们替换 IUCN 的 1,383 只成熟个体。[Indonesia Ministry of Forestry — Priority Species Conservation](https://ksdae.kehutanan.go.id/in-flores/program/priority-species-conservation/) [SRAK 2025–2035](https://ksdae.kehutanan.go.id/in-flores/storage/7b49f5e3-eedd-484c-8014-aa19a4e79892/preview/)

全基因组研究识别出明显的种群结构，并建议把科莫多岛和弗洛勒斯北部等遗传单元分别纳入保护；全物种基因组多样性偏低，岛屿间隔离让局地损失难以由自然扩散迅速补充。项圈研究也显示高度地点忠诚，在研究样本中没有记录到常规跨岛迁移。[Iannucci et al. 2022](https://doi.org/10.1111/mec.16121) [Jessop et al. 2018](https://doi.org/10.1098/rspb.2018.1829)

### 生境：沿海季风林—稀树草原镶嵌，而不是裸露荒漠

核心生境是靠近海岸、地形较缓的谷地和山麓，其中开放的**落叶季风林**与稀树草原、草地和灌丛构成镶嵌。国家公园植被概览约为 57.26% 稀树草原/草原、41.03% 沿海谷地落叶林、1.71% 较湿润的山地植被；但占地最多不等于对所有年龄段最重要。野外选择研究显示，巨蜥会利用季风林、稀树草原林地、草地、红树林和河岸带，整体偏好落叶季风林；幼体和亚成体对干燥季风林尤其依赖。[Harlow et al. 2010](https://doi.org/10.1155/2010/921371) [Imansyah et al. 2008](https://doi.org/10.1111/j.1469-7998.2007.00368.x) [SRAK 2025–2035](https://ksdae.kehutanan.go.id/in-flores/storage/7b49f5e3-eedd-484c-8014-aa19a4e79892/preview/)

官方概览记录从海岸到约 **800 米**的总体海拔范围；在弗洛勒斯岛，高于约 300 米的记录较少。这个上限不应被解释为“典型高山物种”。产品图像应出现炎热季节性气候下仍有树冠、灌木、河谷和沿海地形的景观，不要把它画在撒哈拉式沙丘或完全无树的焦土上。[SRAK 2025–2035](https://ksdae.kehutanan.go.id/in-flores/storage/7b49f5e3-eedd-484c-8014-aa19a4e79892/preview/)

### 体型、性别和岛屿差异

CITES/BfN 鉴定指南记录雄性全长可达 **304 厘米**、雌性可达 **267 厘米**；“最大体长约 3 米”可以保留，但应注明这是极大雄性全长，不是普通成体都在 2—3 米之间。[CITES/BfN identification guide](https://cites.org/sites/default/files/vc-files/files/ID_Guide_Lizards_BFN.pdf)

长期标记—重捕和生长模型显示强烈性二型：研究种群中成年雄性约 **70 千克**、成年雌性约 **25 千克**的量级差异最适合作为解释性对照，而不是给全物种填写“70—90 千克成体范围”。岛屿资源也显著影响体型：科莫多、林卡的大个体明显重于吉利莫堂、努沙科德个体，并与大型鹿类猎物可用性相关。[Laver et al. 2012](https://doi.org/10.1371/journal.pone.0045398) [Jessop et al. 2006](https://doi.org/10.1111/j.0030-1299.2006.14371.x)

因此：

- `measurements.length.max` 可写 3.04 米，并在注释中列雌性纪录 2.67 米；
- 不建议把 `adultMassKg: [70, 90]` 作为跨性别、跨岛可比较区间；
- 若展示体重，用一条带限定的说明“研究种群成年雄性约 70 千克、成年雌性约 25 千克；岛间差异显著”，而不是冒充全种统一范围。

### 寿命：模型推断不是直接纪录

生长研究估计雌性约 **8—11 岁**性成熟；研究中雌性在模型对应约 31 岁后不再被捕获，而雄性的生长渐近点可延伸到约 62 岁。后两个数字分别是捕获/生长模型的生活史推断，不是已验证的野外最大寿命，也不能合成为“寿命 31—62 年”。仓库现有 `lifespanYears: [20, 30]` 没有可靠物种级依据，建议删除并在故事中诚实说明直接寿命资料不足。[Laver et al. 2012](https://doi.org/10.1371/journal.pone.0045398)

### 分叉舌、犁鼻器与化学追踪

科莫多巨蜥伸出长而**黄色、分叉**的舌头采集空气和地表的化学颗粒，再把颗粒送到口腔顶部成对的犁鼻器（Jacobson's/vomeronasal organ）；左右舌尖接收到的差异有助于判断方向。准确说法是“舌头采样，犁鼻器分析”，而不是“舌头本身会闻气味”。[Smithsonian's National Zoo](https://nationalzoo.si.edu/animals/komodo-dragon)

全基因组研究发现其犁鼻受体相关基因显著扩张，包括 **129 个 V2R 基因**，其中 77 个组成 21 个基因簇，为发达的舌—犁鼻化学感知提供了分子证据。论文引言沿用自然史观察，称它能循化学线索寻找数千米外受伤或死亡的动物；这不是标准条件下测出的固定探测半径。现有“数千公里”显然错误，应改为“自然史记录称可追踪数千米范围的气味线索”，并避免写成精确能力上限。[Lind et al. 2019](https://doi.org/10.1038/s41559-019-0945-8)

### 食性、伏击与真正的致伤机制

幼体捕食昆虫、小型蜥蜴、蛇和鸟类；随体型增长，食谱向更大脊椎动物转移。原始研究发现体重超过约 **20 千克**后，猎物选择从不超过 10 千克的小型猎物明显转向 50 千克以上猎物，并伴随从主动搜寻向伏击、守候的行为转变。大型个体可捕食帝汶鹿、野猪和水牛，也食腐，并会捕食较小同类。[Purwandana et al. 2016](https://doi.org/10.1007/s00114-016-1351-6)

捕猎不能简化为“毒液一口毙命”，也不能沿用“肮脏口腔细菌让猎物感染死亡”的旧故事。较完整的机制是：

1. 后弯、刀片状的锯齿牙切开组织；2024 年研究发现齿尖和锯齿边缘覆有富铁保护层，有助于保持切割边缘；
2. 相对体型而言咬合力并不极端，巨蜥会用颈部、四肢和身体进行“咬住—后拉”，扩大撕裂；
3. 下颌毒腺分泌物含抗凝和影响血压的成分，可能放大失血、低血压和休克效应。

这些机制共同作用，不能把任何一项写成所有猎杀成功的唯一原因。[Fry et al. 2009](https://doi.org/10.1073/pnas.0810883106) [D'Amore et al. 2011](https://doi.org/10.1371/journal.pone.0026226) [LeBlanc et al. 2024](https://doi.org/10.1038/s41559-024-02477-7)

对 16 只圈养个体口腔菌群的研究没有找到支持“专门蓄养致命病原菌”的证据，并认为菌群主要反映近期食物和环境。该结果只直接覆盖圈养样本，却足以否定把武器化细菌当作已证实主机制的强断言。[Goldstein et al. 2013](https://static1.squarespace.com/static/55a239e2e4b0b3a7ae106f25/t/5981457dbebafbf5a683f2de/1501644160798/2013_Fry_Komodo_bacteria.pdf)

### 活动、移动、独居与速度

科莫多巨蜥以日间活动和体温调节为主，清晨升温后觅食或守候，炎热时段利用树荫或洞穴。大型个体趋于伏击和坐等，幼体更主动搜寻；成年巨蜥通常独行，但会在大型尸体或繁殖期相遇、竞争。把“独居”写成绝不聚集，或把尸体边的多只个体写成协作狩猎队伍，都会失真。[Harlow et al. 2010](https://doi.org/10.1155/2010/921371) [Purwandana et al. 2016](https://doi.org/10.1007/s00114-016-1351-6)

官方行动计划汇总的平均核心家域约 **1.09 ± 0.43 平方千米**、平均日移动约 **573 米**；交配季个体单日移动可明显增大。项圈原始研究还记录部分 16—22 千克个体约 2.5 千米/日、极端单日约 11 千米，但样本、季节和分析方法不同，不能写成固定的每日里程。[SRAK 2025–2035](https://ksdae.kehutanan.go.id/in-flores/storage/7b49f5e3-eedd-484c-8014-aa19a4e79892/preview/) [Jessop et al. 2018](https://doi.org/10.1098/rspb.2018.1829)

一项比较巨蜥运动能力的论文引用早期记录，给出科莫多巨蜥短跑 **4.69 米/秒，约 16.9 千米/时**。这是历史单项观察，不是以现代标准测出的全物种最大速度；仓库现有 `20 km/h` 是常见四舍五入式说法，建议删除 `topSpeedKph`。若保留科普句，只能写“早期资料记录短距离约 16.9 千米/时，不能视作标准最大值”。[Clemente et al. 2009](https://doi.org/10.1111/j.1469-7998.2009.00559.x) [Clemente et al. 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8086983/)

### 繁殖、巢与幼体树栖

野外季节研究显示，雌性通常在 7 月末至 8 月进入巢区，8 月末至 9 月初产卵，并可在其后数月守巢；幼体多在次年雨季末前后出巢。日期来自科莫多岛长期研究，年际与岛屿差异应保留，不建议填一个看似精确的全物种孵化天数。[Purwandana et al. 2022](https://doi.org/10.1093/biolinnean/blac045)

巢址调查发现它们使用冢巢、山坡巢和地面巢，已调查巢中冢巢占比最高。另一项长期研究记录成功巢平均约 **21.0 ± 3.6 只幼体出巢**；这是出巢幼体数，不等于每窝产卵数。多数被跟踪雌性逐年繁殖，少数隔年繁殖。[Jessop et al. 2004](https://doi.org/10.1016/j.biocon.2003.08.005) [Purwandana et al. 2020](https://doi.org/10.1643/CH-19-337)

刚出巢幼体身材纤细、黄黑或橙黑斑带明显，主要在树上活动以寻找小型猎物并降低遭成年同类捕食的风险。原始生境选择研究显示树栖行为随体型增长而下降；官方计划汇总的早期研究称幼体至少第一年约 98% 的时间在树上。稳妥文案是“幼体高度树栖，树栖程度随成长下降”，不要硬写所有个体固定在树上生活两到三年。[Imansyah et al. 2008](https://doi.org/10.1111/j.1469-7998.2007.00368.x) [SRAK 2025–2035](https://ksdae.kehutanan.go.id/in-flores/storage/7b49f5e3-eedd-484c-8014-aa19a4e79892/preview/)

两只与雄性隔离的圈养雌性曾通过遗传检验证实孤雌生殖，其中一只后来又能有性繁殖。这是重要的生殖能力案例，但证据来自圈养个体，不能写成野外种群通常依靠孤雌生殖，也不能把它当作小种群的可靠“自救机制”。[Watts et al. 2006](https://doi.org/10.1038/4441021a)

### 生态角色的边界

科莫多巨蜥是其岛屿食物网中的大型顶级捕食者和食腐者，也被印度尼西亚行动计划作为旗舰/伞护物种管理。可是长期生态研究没有发现它像某些大型哺乳类捕食者那样强烈压低鹿和猪的种群增长，因此不应把“顶级捕食者”自动扩写为“已经证明控制所有大型草食动物数量”或“维持生态平衡的唯一关键物种”。[Jessop et al. 2020](https://doi.org/10.1002/ecy.2970) [SRAK 2025–2035](https://ksdae.kehutanan.go.id/in-flores/storage/7b49f5e3-eedd-484c-8014-aa19a4e79892/preview/)

### 威胁、趋势与保护重点

“国家公园内近年稳定”与“IUCN 全球下降”并不矛盾。2024 年官方监测显示国家公园总数总体稳定或局部增加，UNESCO 也记录持续监测和巡护；IUCN 全球评估同时纳入弗洛勒斯岛保护地外的栖息地丧失、分布破碎和未来气候风险。两者的空间范围、时间段和年龄口径不同。[Indonesia Ministry of Forestry — Priority Species Conservation](https://ksdae.kehutanan.go.id/in-flores/program/priority-species-conservation/) [UNESCO/IUCN 2022 reactive monitoring mission](https://whc.unesco.org/document/199286) [UNESCO 2025 state of conservation](https://whc.unesco.org/document/221044) [IUCN 2021 announcement](https://iucn.org/news/species/202109/tuna-species-recovering-despite-growing-pressures-marine-life-iucn-red-list)

证据最稳固的威胁包括：

- **沿海季风林和谷地丧失、退化与破碎化**，尤其是弗洛勒斯岛保护地外的农业、聚落、道路和开发压力；
- **猎物减少**，包括对鹿和野猪的盗猎；
- **自由活动犬**造成捕食、竞争或干扰，弗洛勒斯调查中犬类出现与巨蜥探测率呈负相关；
- **道路致死与人兽冲突**；北弗洛勒斯一段约 2 千米道路在五年内记录 8 起事件，其中 6 只死亡、2 只受伤；
- **非法捕捉和贸易**，小而隔离的种群尤其难以承受个体移除；
- **未经充分评估的旅游和基础设施开发**，风险来自占地、交通、行为干扰及累积影响，不应笼统写成“所有旅游都是威胁”；
- **海平面上升、增温和降水变化**。气候模型对 2050 年适生地减少给出 8%—87% 的宽情景区间，对占域和丰度也有更宽结果；这说明风险高度依赖排放、扩散和模型假设，不能只引用最坏的 87% 当作确定预言；
- **低遗传多样性和岛屿隔离**，使局地冲击的恢复能力有限。

[Ariefiandy et al. 2021](https://doi.org/10.1007/s10531-020-02100-8) [Azmi et al. 2021](https://www.herpconbio.org/Volume_16/Issue_1/Azmi_etal_2021.pdf) [Jones et al. 2020](https://doi.org/10.1002/ece3.6705) [Iannucci et al. 2022](https://doi.org/10.1111/mec.16121) [SRAK 2025–2035](https://ksdae.kehutanan.go.id/in-flores/storage/7b49f5e3-eedd-484c-8014-aa19a4e79892/preview/)

与上述威胁对应的优先行动应写成具体措施：保护并恢复沿海季风林谷地和弗洛勒斯破碎生境；保护鹿、猪等猎物并加强协同巡护和贸易执法；控制自由活动犬；在高风险路段限速、警示并评估生态通道；持续进行相机、巢址、猎物和遗传监测；分别维护重要遗传单元；识别气候避难所；所有旅游和基础设施项目进行充分环评、承载量和累积影响评估，并让社区参与收益与冲突缓解。[SRAK 2025–2035](https://ksdae.kehutanan.go.id/in-flores/storage/7b49f5e3-eedd-484c-8014-aa19a4e79892/preview/) [UNESCO/IUCN 2022 mission](https://whc.unesco.org/document/199286)

## 推荐的关键事实

1. 科莫多巨蜥是现生体长最大的蜥蜴，雄性纪录全长 3.04 米、雌性纪录 2.67 米；这不是普通成体范围。[CITES/BfN guide](https://cites.org/sites/default/files/vc-files/files/ID_Guide_Lizards_BFN.pdf)
2. 它只自然分布于印度尼西亚小巽他群岛；2024 年官方监测覆盖科莫多国家公园五座岛，弗洛勒斯沿岸另有破碎种群。[SRAK 2025–2035](https://ksdae.kehutanan.go.id/in-flores/storage/7b49f5e3-eedd-484c-8014-aa19a4e79892/preview/)
3. 黄色分叉舌负责采集颗粒，成对犁鼻器负责分析化学线索；舌头不是独立的“鼻子”。[Smithsonian](https://nationalzoo.si.edu/animals/komodo-dragon)
4. 其基因组含 129 个 V2R 犁鼻受体基因，支持高度发达的化学感知系统。[Lind et al. 2019](https://doi.org/10.1038/s41559-019-0945-8)
5. 体重超过约 20 千克后，猎物选择与捕猎方式会明显改变：由主动寻找小猎物转向伏击大型猎物。[Purwandana et al. 2016](https://doi.org/10.1007/s00114-016-1351-6)
6. 锯齿牙撕裂、身体后拉和下颌毒腺分泌物共同造成创伤；“武器化口腔细菌”不是当前证据支持的主机制。[Fry et al. 2009](https://doi.org/10.1073/pnas.0810883106) [D'Amore et al. 2011](https://doi.org/10.1371/journal.pone.0026226)
7. 幼体高度树栖、颜色更鲜明，树栖程度会随体型增长而下降；成年同类捕食是幼体需要回避的风险之一。[Imansyah et al. 2008](https://doi.org/10.1111/j.1469-7998.2007.00368.x)
8. 成年雄性与雌性的体重差异可接近 70 千克对 25 千克，岛屿猎物条件还会进一步改变体型。[Laver et al. 2012](https://doi.org/10.1371/journal.pone.0045398) [Jessop et al. 2006](https://doi.org/10.1111/j.0030-1299.2006.14371.x)
9. 国家公园 2024 年的 3,270 ± 371 只是总个体估算，不能与 IUCN 的 1,383 只成熟个体混用。[Indonesia Ministry of Forestry](https://ksdae.kehutanan.go.id/in-flores/program/priority-species-conservation/)
10. 圈养雌性曾被遗传学证实孤雌生殖，但这不是野外常规繁殖策略，也不是小种群自然恢复的保证。[Watts et al. 2006](https://doi.org/10.1038/4441021a)

## 应删除或避免的说法

- 不再使用 `conservation('EN', 'decreasing', 2021, 'B1ab(iii)+2ab(iii)')`；应改为代表 2019 年评估的 `EN C1`，来源标题注明 2021-2 发布。
- 不写“现存 4 岛”或把帕达尔岛漏掉；当前国家公园监测为 5 岛。也不把“5 岛”误写成全物种绝对岛屿总数。
- 不把 3,270 ± 371 写成全球成熟个体，也不把国家公园和弗洛勒斯调查估算相加成一个全球总数。
- 不把全部成体概括为 2—3 米、70—90 千克；体型随性别和岛屿显著变化。
- 不填 `lifespanYears: [20, 30]`。约 31 年和 62 年来自不同性别的捕获/生长模型，仍不是直接最大寿命。
- 不填 `topSpeedKph: 20`。可提历史观察约 16.9 千米/时，但必须说明不是标准化最大值。
- 不写“分叉舌能闻到数千公里外的腐肉”；应写“舌头采样、犁鼻器分析，自然史资料称可循迹数千米”。
- 不写“毒液一口毙命”或“肮脏口腔养着致命细菌”；采用锯齿牙撕裂、咬住后拉和毒腺分泌物共同作用的表述。
- 不写“成年巨蜥合作成群捕猎”；尸体边聚集通常伴随竞争，不等于协作狩猎。
- 不把幼体画成缩小的灰褐成年体，也不写所有幼体固定树栖两到三年；幼体更纤细、斑带鲜明，树栖程度随成长降低。
- 不把圈养孤雌生殖案例写成野外普遍策略。
- 不把科莫多国家公园近年稳定扩写为“全物种已经恢复”；弗洛勒斯破碎种群与未来气候风险仍支撑全球 EN、下降趋势。
- 不把单个气候模型最坏情景的 87% 适生地损失写成确定事实；应保留 8%—87% 的情景范围和 2050 时间点。
- 不把“顶级捕食者”扩写为已证明强力控制鹿、猪种群；原始研究未支持这种简单类比。
- 图像不要出现恐龙式背棘、鳄鱼甲片、红色蛇舌、毒牙、喷毒、协作狼群式围猎或裸露沙漠背景。

## 更新前 `komodo-dragon` 条目逐项核对表

下表保留本轮更新前的审计快照；`species.ts` 已按建议修正，并补入六张最终媒体资源。

| 字段 | 现状 | 建议 |
| --- | --- | --- |
| `scientificName` / taxonomy | 正确 | 保留 `Varanus komodoensis`、Varanidae、Varanus；可由 Reptile Database 与原始描述替换通用来源 |
| `conservation` | 年份和标准不匹配当前评估 | 改为 `conservation('EN', 'decreasing', 2019, 'C1')` |
| `distribution.endemicTo` | 漏掉努沙科德与当前帕达尔记录，弗洛勒斯也过于笼统 | 写 5 个国家公园岛屿，并在 `range` 中说明弗洛勒斯及 Longos、Ontoloe 等破碎沿海种群 |
| `habitats` | 把草原与季风林压成一条 | 拆成沿海落叶季风林谷地、稀树草原/林地镶嵌、河岸/红树林等避难微生境 |
| `measurements.length` | 2—3 米看似普通成体范围 | 改为最大 3.04 米，注释雄性纪录与雌性 2.67 米纪录 |
| `measurements.weight` | 70—90 千克被写成大型野生雄性范围 | 删除结构化范围；故事或展示数字用雄约 70、雌约 25 千克的研究量级并注明岛间差异 |
| `diet` | 大类基本合理，机制过于简略 | 增加成长阶段转变、锯齿牙、咬住后拉、毒腺共同作用；不使用细菌故事 |
| `activity` | “日行、伏击、独居”过度固定 | 改成日间为主、幼体主动觅食—大型个体伏击、高地点忠诚、尸体边竞争性聚集 |
| `summary` / `description` | 基本方向正确 | 加入五岛+弗洛勒斯、舌—犁鼻器、生命史转变和保护边界 |
| `keyFacts[0]` | 误写“舌闻数千米”，摘要中曾出现“数千公里”风险 | 明确舌采样、犁鼻器分析；距离只写自然史资料的“数千米” |
| `keyFacts[1]` | 方向正确 | 加上幼体斑带、树栖程度随成长下降，不设固定年限 |
| `keyFacts[2]` / `topSpeedKph` | 20 km/h 证据过强 | 删除结构化速度；必要时以限定句保留历史记录约 16.9 km/h |
| `lifespanYears` | 20—30 年缺少直接依据 | 删除；模型推断留在故事/研究注释 |
| `featuredStats.islands` | 4 已过时 | 改成“国家公园监测岛屿 5（2024）”，不要叫全物种岛屿总数 |
| `threats` | 太笼统 | 增加弗洛勒斯开发、猎物盗猎、犬、道路、非法捕捉、气候与低遗传多样性 |
| `conservationActions` | 方向正确但空泛 | 对应写栖息地/猎物、巡护执法、犬与道路、遗传监测、气候避难所、环评和社区参与 |
| `sources` | `sourcesFor` 通用来源不足 | 换成下方物种专用来源数组 |

## 推荐的物种专用 `SpeciesSource[]`

以下来源可直接放入 `species.ts`；都是权威数据库、政府/国际组织原始文件、论文 DOI 或开放全文直链。来源标题主动标出 IUCN 评估年与发布版，防止未来再次把年份混用。

```ts
const KOMODO_DRAGON_SOURCE_DATE = '2026-08-17' as const;
const KOMODO_DRAGON_CONTENT_DATE = '2026-08-17' as const;

const KOMODO_DRAGON_SOURCES = [
  {
    title: 'IUCN Red List — Varanus komodoensis (2019 assessment, published in 2021-2)',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T22884A123633058.en',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Indonesia Ministry of Forestry — Komodo Dragon Conservation Strategy and Action Plan 2025–2035',
    url: 'https://ksdae.kehutanan.go.id/in-flores/storage/7b49f5e3-eedd-484c-8014-aa19a4e79892/preview/',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Indonesia Ministry of Forestry — Priority Species Conservation: 2024 Komodo monitoring',
    url: 'https://ksdae.kehutanan.go.id/in-flores/program/priority-species-conservation/',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (25 May 2024)',
    url: 'https://www.cites.org/sites/default/files/eng/app/2024/E-Appendices-2024-05-25.pdf',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Reptile Database — Varanus komodoensis',
    url: 'https://reptile-database.reptarium.cz/Varanus/komodoensis',
    kind: 'taxonomy',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Ouwens 1912 — Original description of Varanus komodoensis',
    url: 'https://www.biodiversitylibrary.org/part/76070',
    kind: 'taxonomy',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'CITES/BfN — Identification Guide for Monitor Lizards',
    url: 'https://cites.org/sites/default/files/vc-files/files/ID_Guide_Lizards_BFN.pdf',
    kind: 'general',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: "Smithsonian's National Zoo — Komodo Dragon",
    url: 'https://nationalzoo.si.edu/animals/komodo-dragon',
    kind: 'general',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Iannucci et al. 2022 — Population genomics and conservation units',
    url: 'https://doi.org/10.1111/mec.16121',
    kind: 'distribution',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Harlow et al. 2010 — Thermoregulatory habits of free-ranging Komodo dragons',
    url: 'https://doi.org/10.1155/2010/921371',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Imansyah et al. 2008 — Ontogenetic habitat use and arboreality',
    url: 'https://doi.org/10.1111/j.1469-7998.2007.00368.x',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Laver et al. 2012 — Sex-biased life-history divergence and growth',
    url: 'https://doi.org/10.1371/journal.pone.0045398',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Jessop et al. 2006 — Island differences in body size and prey biomass',
    url: 'https://doi.org/10.1111/j.0030-1299.2006.14371.x',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Purwandana et al. 2016 — Ontogenetic shift in diet and foraging',
    url: 'https://doi.org/10.1007/s00114-016-1351-6',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Fry et al. 2009 — Venom system and predatory mechanics',
    url: 'https://doi.org/10.1073/pnas.0810883106',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: "D'Amore et al. 2011 — Bite force and bite-and-pull feeding mechanics",
    url: 'https://doi.org/10.1371/journal.pone.0026226',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Goldstein et al. 2013 — Saliva and gingiva bacteriology of captive Komodo dragons',
    url: 'https://doi.org/10.1638/2012-0022R.1',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'LeBlanc et al. 2024 — Iron-coated serrated teeth',
    url: 'https://doi.org/10.1038/s41559-024-02477-7',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Lind et al. 2019 — Komodo dragon genome and vomeronasal receptors',
    url: 'https://doi.org/10.1038/s41559-019-0945-8',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Jessop et al. 2004 — Nesting ecology and conservation',
    url: 'https://doi.org/10.1016/j.biocon.2003.08.005',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Purwandana et al. 2020 — Reproductive periodicity and hatchling emergence',
    url: 'https://doi.org/10.1643/CH-19-337',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Purwandana et al. 2022 — Seasonal activity and reproduction',
    url: 'https://doi.org/10.1093/biolinnean/blac045',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Jessop et al. 2018 — Dispersal, site fidelity and movement',
    url: 'https://doi.org/10.1098/rspb.2018.1829',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Clemente et al. 2009 — Locomotor capacity in monitor lizards',
    url: 'https://doi.org/10.1111/j.1469-7998.2009.00559.x',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Watts et al. 2006 — Parthenogenesis in captive Komodo dragons',
    url: 'https://doi.org/10.1038/4441021a',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Jones et al. 2020 — Climate-change vulnerability to 2050',
    url: 'https://doi.org/10.1002/ece3.6705',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Ariefiandy et al. 2021 — Human pressures and range loss on Flores',
    url: 'https://doi.org/10.1007/s10531-020-02100-8',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Azmi et al. 2021 — Road mortality in northern Flores',
    url: 'https://www.herpconbio.org/Volume_16/Issue_1/Azmi_etal_2021.pdf',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'UNESCO/IUCN 2022 — Reactive Monitoring Mission to Komodo National Park',
    url: 'https://whc.unesco.org/document/199286',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 可直接用于 `species.ts` 的字段建议

下列字段有意把 `metrics` 留空：现有类型无法在一个简单区间中表达强烈的性别/岛屿体型差异；寿命和速度又只有模型或历史观察。3.04 米、1,383 只成熟个体、3,270 ± 371 只国家公园总个体都是带口径的展示数字，适合 `featuredStats`，不适合伪装成无条件标准值。

```ts
{
  id: 'species-varanus-komodoensis',
  slug: 'komodo-dragon',
  names: {
    zh: '科莫多巨蜥',
    en: 'Komodo Dragon',
    aliases: ['科莫多龙'],
  },
  scientificName: 'Varanus komodoensis',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Reptilia', '爬行纲'),
    taxon('Squamata', '有鳞目'),
    taxon('Varanidae', '巨蜥科'),
    taxon('Varanus', '巨蜥属'),
  ),
  conservation: conservation('EN', 'decreasing', 2019, 'C1'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲'],
    regions: ['小巽他群岛', '科莫多国家公园', '弗洛勒斯沿海'],
    countries: ['印度尼西亚'],
    endemicTo: [
      '科莫多岛',
      '林卡岛',
      '吉利莫堂岛',
      '努沙科德岛',
      '帕达尔岛',
      '弗洛勒斯岛及邻近小岛',
    ],
    range:
      '仅自然分布于印度尼西亚小巽他群岛。2024 年国家公园监测覆盖科莫多、林卡、吉利莫堂、努沙科德和帕达尔五岛；国家公园外仍见于弗洛勒斯岛西、南、北部破碎沿海生境及 Longos、Ontoloe 等近岸小岛。',
    center: { lat: -8.56, lng: 119.48 },
  },
  habitats: [
    {
      name: '沿海落叶季风林与谷地',
      realm: 'terrestrial',
      description:
        '靠近海岸的开放落叶季风林、谷地与山麓提供阴蔽、巢址、猎物和幼体所需的树木；多年龄阶段会主动选择这类生境。',
      isPrimary: true,
    },
    {
      name: '稀树草原、草地与灌丛镶嵌',
      realm: 'terrestrial',
      description:
        '成年个体会穿行和伏击于季节性干燥的稀树草原、林地、草地与灌丛，但并非只生活在完全开阔地。',
    },
    {
      name: '河岸带、红树林与沿海避难生境',
      realm: 'terrestrial',
      description:
        '河岸植被、红树林边缘和较湿润的沿海微生境在干季提供遮蔽与食物资源，也是整体生境镶嵌的一部分。',
    },
  ],
  measurements: {
    length: {
      max: 3.04,
      unit: 'm',
      note: '雄性全长纪录；雌性纪录可达 2.67 米，不代表普通成体都接近上限',
    },
  },
  diet: {
    types: ['carnivore'],
    foods: ['昆虫与其他节肢动物', '小型爬行动物和鸟类', '帝汶鹿', '野猪', '水牛', '腐肉', '较小同类'],
    description:
      '幼体主动搜索小型猎物；体型超过约 20 千克后，更常伏击大型脊椎动物。后弯锯齿牙切开组织，颈部和身体后拉扩大伤口，下颌毒腺分泌物可加重失血和低血压；武器化口腔细菌不是当前证据支持的主机制。',
  },
  activity: ['日间活动为主', '幼体主动觅食—大型个体伏击', '高度地点忠诚', '多独行、可在尸体边竞争性聚集'],
  tags: ['印度尼西亚特有种', 'IUCN 濒危', '现生最大蜥蜴', '岛屿顶级捕食者', 'CITES 附录 I', '幼体树栖'],
  summary: '仅存于印度尼西亚小巽他群岛、会随成长从树栖小猎手转为大型伏击者的现生最大蜥蜴。',
  description:
    '科莫多巨蜥生活在沿海落叶季风林与稀树草原交错的岛屿景观。黄色分叉舌采集化学颗粒，成对犁鼻器帮助它循迹；后弯锯齿牙、咬住后拉和毒腺分泌物共同造成猎物创伤。幼体纤细而斑纹鲜明，主要在树上活动；成年雄性则可能长到约 3 米。国家公园内种群近年总体稳定，但弗洛勒斯破碎生境、猎物减少、犬、道路、非法捕捉与未来海平面上升仍使全球状态维持濒危。',
  storySections: [
    {
      key: 'island-giant',
      label: '外形与岛屿',
      title: '三米纪录，只属于最大的雄性',
      body:
        '它是现生体长最大的蜥蜴，雄性全长纪录 3.04 米、雌性纪录 2.67 米。成年雄性与雌性的体重差异可接近 70 千克对 25 千克，岛上大型猎物多少还会让不同种群长成不同量级；它没有恐龙式背棘，也不是鳄鱼。',
    },
    {
      key: 'chemical-trail',
      label: '感官',
      title: '舌头采样，犁鼻器判断方向',
      body:
        '黄色分叉舌不断伸缩，分别从左右两侧带回化学颗粒，再送入口腔顶部成对的犁鼻器。全基因组研究发现的犁鼻受体扩张与发达化学感知相符；自然史资料另称它能循线索寻找数千米外的受伤动物或腐肉，但这不是固定探测半径。',
    },
    {
      key: 'bite-and-pull',
      label: '捕猎',
      title: '真正危险的是一整套咬住—后拉',
      body:
        '后弯锯齿牙先切开组织，巨蜥再用颈部、四肢和身体向后拉扯；下颌毒腺分泌物可放大出血和低血压。它不是靠一口“毒杀”，也没有证据证明会专门培养致命口腔细菌。',
    },
    {
      key: 'tree-childhood',
      label: '成长',
      title: '先在树上长大，再到地面伏击',
      body:
        '刚出巢的幼体更纤细，身上有醒目的黄黑或橙黑斑带，主要在树上寻找昆虫、小蜥蜴和鸟类，也躲避会捕食它们的成年同类。随着身体变重，树栖活动下降，食谱和捕猎方式一起转向大型地面猎物。',
    },
    {
      key: 'five-park-islands',
      label: '分布',
      title: '五座国家公园岛屿之外，还有破碎的弗洛勒斯海岸',
      body:
        '2024 年官方监测覆盖科莫多、林卡、吉利莫堂、努沙科德和帕达尔五岛；国家公园外的弗洛勒斯沿岸和近岸小岛仍保有分散种群。小岛之间高度隔离，使每一处栖息地和遗传单元都不能轻易替代。',
    },
    {
      key: 'conservation-boundary',
      label: '保护',
      title: '公园内稳定，不等于全球风险解除',
      body:
        '国家公园 2024 年估计有 3,270 ± 371 只各年龄个体，近年总体稳定；IUCN 的全球评估却仍为濒危、下降。弗洛勒斯生境破碎、猎物盗猎、犬、道路和非法捕捉已在发生，海平面上升和气候变化还会把沿海窄域风险推向未来。',
    },
  ],
  keyFacts: [
    '黄色分叉舌采集化学颗粒，成对犁鼻器负责分析；自然史资料称可循线索数千米，但不是固定探测半径。',
    '幼体高度树栖、斑纹鲜明，随着体型增长逐渐转到地面并由主动觅食转向伏击。',
    '锯齿牙撕裂、身体后拉和毒腺分泌物共同致伤，不是靠武器化口腔细菌。',
    '圈养雌性曾被证实可孤雌生殖，但野外常规繁殖仍是有性生殖。',
  ],
  threats: [
    '弗洛勒斯沿海生境丧失、退化与破碎化',
    '鹿和野猪等猎物被盗猎',
    '自由活动犬与人兽冲突',
    '道路致死和未经充分评估的基础设施开发',
    '非法捕捉与贸易',
    '海平面上升和气候变化',
    '低遗传多样性与种群隔离',
  ],
  conservationActions: [
    '保护并恢复沿海季风林谷地和弗洛勒斯破碎生境',
    '保护猎物并加强协同巡护、反盗猎和贸易执法',
    '控制自由活动犬并缓解道路和人兽冲突',
    '持续开展种群、巢址、猎物和遗传监测',
    '分别维护重要遗传单元并规划气候避难所',
    '对旅游和基础设施开展环评、承载量评估及社区共管',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'maximum-length',
      label: '雄性全长纪录',
      value: '3.04',
      unit: '米',
      note: '雌性纪录 2.67 米；不是普通成体范围',
    },
    {
      key: 'mature-individuals',
      label: 'IUCN 成熟个体估算',
      value: '1,383',
      unit: '只',
      note: '2019 全球评估；不等于全部年龄总数',
    },
    {
      key: 'park-population',
      label: '国家公园总个体估算',
      value: '3,270 ± 371',
      unit: '只',
      note: '印度尼西亚官方 2024 监测，包含不同年龄阶段',
    },
    {
      key: 'monitored-islands',
      label: '国家公园监测岛屿',
      value: '5',
      unit: '座',
      note: '科莫多、林卡、吉利莫堂、努沙科德、帕达尔',
    },
  ],
  // media: 已补入 1 张封面和 5 张画廊图；最终路径与图文见 species.ts 和素材 README。
  sources: KOMODO_DRAGON_SOURCES,
  featured: true,
  publishedAt: CONTENT_DATE,
  updatedAt: KOMODO_DRAGON_CONTENT_DATE,
}
```

## 6 张图像的叙事与验收建议

| 序号 | 叙事目的与建议画面 | 必须准确的线索 | 应避免 |
| --- | --- | --- | --- |
| 01 封面：岛屿巨蜥 | 一只成年巨蜥以低重心从沿海落叶季风林和稀树草原交界处穿过；完整身体、尾和景观同时可见 | 灰褐至土褐、粗壮四肢、五趾长爪、长而肌肉发达的尾约占很大比例；背景有干季草地也有真实树木、谷地和远海 | 恐龙背棘、鳄鱼式厚甲、角、裸露沙丘、把四肢画成直立哺乳动物姿态 |
| 02：化学线索 | 头部近景，黄色分叉舌伸出并轻触空气/地面气味线索；用标题解释颗粒随后进入犁鼻器 | 舌为黄色、细长、分叉；舌尖朝前采样，不是卷住猎物；鼻孔不是主要叙事中心 | 红色蛇舌、舌头直接发光“闻味”、几千公里文字、把 Jacobson 器官画在舌尖 |
| 03：生境镶嵌 | 巨蜥在开放落叶季风林、稀树草原、季节性溪谷与沿海坡地之间移动；让动物在大景观中较小 | 干燥但不荒芜，林冠开放、草木季节性黄绿相间，海拔低、可见谷地/海岸 | 热带密闭雨林、雪山、高山云雾林、撒哈拉沙漠、火山熔岩主景 |
| 04：伏击与咬住—后拉 | 大型个体从遮蔽物伏击鹿，或在鹿尸体边展示锯齿牙切割与后拉姿态；可只表现一只攻击者 | 低伏姿势、颈部和身体向后拉，牙齿细小后弯且大多不外露；若多只在尸体边，应表现竞争而非配合 | 狼群式围猎、眼镜蛇毒牙、喷毒、细菌云、把猎物瞬间麻痹、夸张血腥 |
| 05：树上的幼体 | 一只纤细幼体攀在季风林较低树枝或树干上，成年个体可远处虚化以建立尺度与风险 | 黄黑/橙黑斑带和斑点明显，身体比成年体纤细，爪抓树皮，树枝尺度合理 | 把灰褐成年巨蜥放在高树冠、把幼体画成壁虎、无斑纹的成年缩小版、固定“树栖三年”图注 |
| 06：守巢行为 | 一只成年个体守在冢雉土丘改造的巢旁，多处回填洞口可见，真正卵室与卵全部埋在地下；标题与说明交代守巢者为雌性 | 巨蜥全身与连续尾完整、土丘由土壤/枯叶/细枝组成、无裸露卵；性别信息来自行为情境和文字，不伪造外观性征 | 鸟式杯巢、地表鸡蛋、透明地下剖面、亲子照护、凭外形宣称可判定雌雄 |

### 六图统一形态检查

- 成年体应低矮、粗壮、颈和尾强健；头部较宽，吻端不应像鳄鱼般极长。
- 皮肤可以有颗粒状鳞片和自然褶皱，但不要添加大型板甲、尖棘或角。
- 四肢从身体两侧伸出，五趾带弯爪；不得画成四肢完全垂直、脚掌像大型哺乳动物。
- 幼体明显更纤细、更鲜艳、更适合攀爬；成年体多为石灰、灰褐、土褐和暗橄榄色。
- 分叉舌为黄色；牙齿是后弯、锯齿状的切割齿，闭口时不应像剑齿一样外露。
- 画面可出现帝汶鹿、野猪或较小猎物，但不要通过夸张猎物尺寸暗示所有个体都捕杀成年水牛。
- 科莫多巨蜥会游泳，但当前六章的核心是岛屿生境、成长和保护；除非另有证据目的，不要用长距离跨海画面暗示频繁自然迁岛。

## 来源说明与证据边界

### 时间边界与相互冲突的数字

- IUCN DOI 是全球状态、标准、趋势与成熟个体口径的主来源；`2019` 是评估日期，`2021-2` 是发布版。
- 印度尼西亚 2025—2035 行动计划是当前分布、法律、威胁、行动和弗洛勒斯/国家公园本底的主来源；2024 年国家公园分项以官方项目页为主。
- 1,383 是 IUCN 成熟个体估算；3,270 ± 371 是国家公园全部年龄总个体；701 ± 131 是部分弗洛勒斯调查景观估算。三者不做加法、不互换。
- 旧论文只列四个国家公园岛屿时，应作为研究当年的历史边界保留；当前产品采用帕达尔已重新纳入监测后的五岛基线。

### 体型、寿命与速度

- 3.04 米和 2.67 米是性别分开的全长上限记录，不能被解读为普通成年雄、雌平均值。
- 约 70 千克雄性和 25 千克雌性来自长期研究的性二型量级；岛屿差异显著，因此不进入统一 `adultMassKg`。
- 约 31 年雌性捕获边界和约 62 年雄性生长渐近点来自模型，不进入 `lifespanYears`。
- 4.69 米/秒来自比较运动论文引用的历史观察，不进入 `topSpeedKph`；若正文需要速度钩子，保留“约 16.9 千米/时、历史短距离记录”的全部限定。

### 行为与机制

- 数千米气味追踪是自然史概括，不是受控实验得到的精确检测半径；基因组研究直接支持的是受体基因扩张。
- Fry 2009 支持毒腺和潜在生理作用，D'Amore 2011 支持低相对咬合力及咬住—后拉，LeBlanc 2024 支持富铁齿缘；三者合起来仍不意味着每次猎杀都以完全相同的顺序发生。
- 圈养口腔菌群研究不能描述全部野生菌群，却没有支持“专门培养致命细菌”的传统叙事。
- 98% 树栖时间是官方行动计划对早期研究的汇总；原始栖息地研究更稳妥地直接支持“幼体高度树栖且随成长下降”。
- 圈养孤雌生殖是确证案例，不外推为野外频率。

### 威胁与保护

- 气候研究给出多情景、多模型范围，最坏情景不是确定预言。IUCN 将其综合为未来适生地显著缩减的风险判断。
- UNESCO 文件支撑国家公园监测、开发环评和旅游管理边界；它不支持“旅游必然有害”这种无条件句子。
- 弗洛勒斯道路研究的 8 起事件只代表一个约 2 千米高风险路段和五年观察期，适合证明道路致死真实存在，不用于推算全分布区死亡总数。
- 国家公园局部稳定不能替换全球 IUCN 趋势；产品同时写出二者才准确。

## 仍需保留的不确定性

- 弗洛勒斯各破碎种群、Longos 与 Ontoloe 等近岸地点的最新占域边界、可比密度和趋势仍不完整；公开地图宜保留粗粒度，不伪造连续分布。
- 帕达尔重新出现后的来源、增长机制和长期可持续性不应仅凭保护组织简报下结论；当前条目只写官方监测已纳入该岛。
- 全物种野外最大寿命没有直接、可跨性别验证的数值；除非新长期研究出现，不填寿命指标。
- 最大短跑速度没有现代标准化测试；不因网络广泛重复而恢复 20 km/h 指标。
- 气味追踪距离受风、地形、气味源和个体状态影响，没有固定“探测半径”。
- 不同岛屿的体型、猎物、家域和繁殖表现差异很大；单岛研究结果进入故事时须保留地点和方法限定。
- 国家公园总个体、成熟个体和弗洛勒斯调查估算应随下一轮官方监测分别更新，不能只改一个展示数字后推定其他口径同步变化。
- 自由活动犬、非法贸易、道路和旅游开发对不同种群的相对贡献仍需量化；行动计划可作为管理优先级，不代表已经完成因果排序。
