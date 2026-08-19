# 水獭（*Lutra lutra*）完整档案研究

- 检索与核验日期：2026-08-19
- 展示中文名：**水獭**；推荐中文别名：**欧亚水獭**；英文名：**Eurasian Otter**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 6 幅原创图像提供内容边界
- 证据标准：优先使用 IUCN 2022 发布的全球评估、IUCN/SSC 水獭专家组、ASM Mammal Diversity Database 当前条目、中国政府名录、CITES/CMS/欧盟/伯尔尼公约官方文本，以及直接支持中国分布、形态、毛被与潜水行为的原始论文
- 时间口径：本文所称“当前”截至 **2026-08-19**。IUCN 的“评估日期”、数据库或名录的“发布/生效日期”分别记录，不互相替代
- 敏感信息处理：中国分布只保留流域、区域和生境类型，不进入近期个体、巢穴、粪标点或小种群的精确坐标；地图 `center` 只是欧亚尺度视图焦点

## 结论摘要

### 名称、分类与日本水獭边界

仓库主名应采用 ***Lutra lutra* (Linnaeus, 1758)**，分类为动物界—脊索动物门—哺乳纲—食肉目—鼬科—水獭属；水獭亚科可在研究说明中保留，但当前 `SpeciesTaxonomy` 没有亚科字段。美国哺乳动物学会 Mammal Diversity Database（**MDD v2.5，2026-07-28 发布**）把它列为现生、野外存在的独立种，生物地理界为古北界和东洋界。[MDD v2.5 首页与版本信息](https://www.mammaldiversity.org/index.html) [MDD — *Lutra lutra*](https://www.mammaldiversity.org/taxon/1005848/)

中国 2021 年《国家重点保护野生动物名录》和《中国生物多样性红色名录—脊椎动物卷（2020）》均使用标准中文名 **“水獭”** 与学名 ***Lutra lutra***。为避免中文用户把泛称“水獭”理解成整个水獭亚科，详情页可把“欧亚水獭”放入 `aliases` 并在首段解释；不建议把“欧洲水獭”作为中文主名，因为其分布远超欧洲。[国家林草局、农业农村部 2021 年第 3 号公告](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml) [中国生物多样性红色名录—脊椎动物卷（2020），2023 年发布](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)

日本水獭是必须显式处理的分类边界。IUCN 这次全球评估沿用较旧的广义处理，把 *Lutra nippon* 置于 *L. lutra* 的异名/亚种讨论中；当前 MDD v2.5 则依据分子研究把已灭绝的日本水獭 ***Lutra nippon*** 单列为种，并在 *L. lutra* 条目中明确指出二者应区分。产品主记录应跟随当前 MDD：不要把日本历史水獭画成或叙述成现生 *L. lutra* 的确定亚种，也不要用旧的 12 亚种清单制造已经解决的确定性。[MDD — *Lutra lutra*](https://www.mammaldiversity.org/taxon/1005848/) [MDD — *Lutra nippon*](https://www.mammaldiversity.org/taxon/1005849/) [Park et al. 2019](https://doi.org/10.1080/19768354.2019.1601133) [Russo et al. 2025](https://doi.org/10.1093/zoolinnean/zlaf164)

### 全球 IUCN：2020 年评估、2022 年发布

当前公开的全球状态为 **近危 Near Threatened（NT），标准 A2c，种群趋势下降**。该记录的正式引用是 Loy 等 **2022** 年发布的“2021 assessment 修订版”，但评估文件明确列出 **Date Assessed: 31 January 2020**。仓库 `assessedYear` 的类型注释要求填评估年份，因此必须实现为：

```ts
conservation: conservation('NT', 'decreasing', 2020, 'A2c')
```

来源标题再写清“published 2022”，不能把 2022 填进 `assessedYear`。评估者为 Anna Loy、Andreas Kranz、Aleksey Yu. Oleynikov、Anna Roos、Melissa Savage 和 Nicole Duplaix，评估权威机构为 **IUCN SSC Otter Specialist Group**。[IUCN Red List — *Lutra lutra*](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)

IUCN 的判断不是“全世界都在同速减少”。欧洲许多种群在严格保护和污染控制后恢复；部分地区也开展过再引入，但其对整体恢复的贡献可能有限。北非、中东、中亚、南亚和东南亚的大范围地区却仍缺少可靠数量与趋势资料，若干区域继续下降。评估认为部分分布区存在持续减少，但过去三个世代约 **23 年**内的降幅不再被判断为超过 30%；持续的占据面积、分布范围和生境质量下降仍支持 A2c，并使其以预防性、保护依赖的方式维持近危。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en) [IUCN/SSC Otter Specialist Group](https://www.otterspecialistgroup.org/otter-species/lutra-lutra/)

IUCN 数据字段给出的全球成熟个体估计为 **57,880—361,140**，跨度超过六倍；评估正文同时说明，北非及亚洲许多国家的丰度、占据面积和种群规模仍未知。这个数值可以进入 `metrics.estimatedMatureIndividuals` 以支持范围筛选，但展示必须写“全球粗略估计、并非同步普查”，不可改写成“现存约 58,000 只”或取区间中点充当真实数量。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)

### 中国状态：国家红色名录与法定保护等级分开

中国尺度有两套不同含义的状态：

- 《中国生物多样性红色名录—脊椎动物卷（2020）》将水獭评为 **濒危 EN**，标准为 **B1ab(i,ii,iii)+2ab(i,ii,iii);C2a(i)**。这是 **2020 版国家/区域尺度红色名录**，由生态环境部与中国科学院在 **2023-05-22 发布**；它不覆盖全球 `conservation.code: 'NT'`。[生态环境部发布公告](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/t20230522_1030745.html) [官方名录 PDF，第 6 页水獭条目](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)
- 2021 年《国家重点保护野生动物名录》将 ***Lutra lutra*** 列为 **国家二级重点保护野生动物**。这是中国法定保护等级，既不等于 IUCN 的第二级，也不应被写成“国家二级濒危”。[国家林草局、农业农村部 2021 年第 3 号公告](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml) [政府名录检索页](https://lhsr.sh.gov.cn/gjzdbhysdwml/)

推荐在 `tags` 或正文同时保留“全球 IUCN NT”“中国红色名录 EN”“国家二级重点保护野生动物”三层信息，但结构化 `conservation` 只能按仓库契约记录全球 IUCN。

## 分布与中国记录

### 全球范围

水獭横跨欧洲、亚洲和北非，原生分布大体从爱尔兰及西欧，经俄罗斯、中亚和西亚延伸到东亚、南亚及东南亚部分地区，北非则见于马格里布；它不是连续铺满这些国家，而是沿可用河流、湖泊、湿地、河口和部分海岸形成线性或斑块化分布。荷兰等地包含再引入种群，许多国家内部只占一部分水系。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en) [MDD — *Lutra lutra*](https://www.mammaldiversity.org/taxon/1005848/)

当前 MDD v2.5 的结构化 `Country distribution` 与 2020 IUCN 评估的国家/地区清单并不完全相同：IUCN 仍列日本，且把香港、台湾、直布罗陀等作为独立地域条目；MDD 已把 *L. nippon* 单列并用不同的国家编码规则。为了让分类与分布使用同一当前基线，推荐代码中的 `countries` 采用 **MDD v2.5 当前字段**，在 `range` 中说明 IUCN 评估存在地域口径差异；不要把国家清单解释成每个国家境内均连续或常见。[MDD v2.5](https://www.mammaldiversity.org/taxon/1005848/) [IUCN 2022 publication](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)

IUCN 记录的海拔范围为 **海平面至 4,120 米**。欧洲沿海、河口与咸淡水都可利用，在喜马拉雅和青藏高原可进入高海拔河流；这个上下限是全分布区记录包络，不代表普通个体每天进行 4,120 米垂直迁移。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)

### 中国：历史广布，现状破碎且资料不足

中国综合研究显示，水獭历史上是三种本土水獭中分布最广的一种，记录覆盖各主要流域、海南和台湾，长江与珠江流域记录尤多。1957 年全国官方交易的水獭皮张超过 40,000 张；1960 年代以前，长江和珠江流域各自每年被杀超过 10,000 只。这里的“40,000”是历史皮张贸易量，南方部分统计还可能混入江獭和小爪水獭，绝不能作为当时或现在的种群数量。[Li & Chan 2017/2018](https://doi.org/10.1017/S0030605317000400)

同一研究汇总文献、访谈与实地调查，在 **2006—2016 年 8 月**确认全国 10 个流域的 19 个近期水獭地点，其中 17 个为水獭、2 个为小爪水獭，超过三分之一位于正式保护地外。残存格局可概括为：保护较好的自然保护区、人口稀疏的青藏高原源头和偏远边境，以及仍保有大面积淡水/海岸湿地的三角洲与洪泛平原。它是当时方法下的确认记录集合，不是 2026 年完整现状图，也不能据此宣称全国只剩 17 个地点。[Li & Chan 2017/2018](https://doi.org/10.1017/S0030605317000400)

东北中国原始研究比较地方历史资料后发现，2014 年水獭**记录数量**比 1950 年代减少 92%。这个数字只描述东北研究区的记录变化，不能写成“全国水獭数量下降 92%”，也不是严格的个体丰度估计。[Zhang et al. 2016](https://doi.org/10.1002/aqc.2624) 中国长期分布综述同样认为，全国种群在过去数百年、尤其近代发生显著收缩，但强调系统调查不足。[Zhang et al. 2018](https://doi.org/10.1016/j.biocon.2018.10.028)

推荐 `range` 文案：

> 从欧洲和北非横跨欧亚大陆至东亚、南亚与东南亚部分地区，沿河流、湖泊、湿地、河口和部分海岸呈不连续分布；中国历史记录覆盖各大流域，当前种群显著收缩并破碎化，残存于保护较好、人口稀疏的源头与边境，以及部分三角洲和洪泛平原。

## 生境与水陆边界

IUCN 把水獭同时列入 **Terrestrial、Freshwater 和 Marine** 三个系统。它是半水栖动物，而非只属于陆地或海洋；对产品而言应以 `freshwater` 为第一、主要 realm，再保留 `terrestrial` 与 `marine`。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)

可稳定写入的生境包括：

- **河流、溪流及其河岸带**：从低地河网到寒冷山地溪流均可出现。河岸植被、根系、石隙和隐蔽岸段提供休息、繁殖洞穴与移动遮蔽，是主要生境。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)
- **湖泊、水库、沼泽、洪泛平原与沼泽森林**：利用天然与部分人工水体，但“能在改造景观出现”不等于对硬化、污染和猎物贫乏没有代价。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)
- **河口、盐沼、海岸潟湖与岩石海岸**：部分种群在海水中觅食；海岸个体仍需附近淡水用于饮用、洗去盐分和维持毛被功能，不能画成完全脱离陆地淡水的海洋兽。[IUCN/SSC Otter Specialist Group](https://www.otterspecialistgroup.org/otter-species/lutra-lutra/)
- **紧邻水体的陆岸走廊**：觅食、气味标记、育幼与迁移高度集中在狭窄的水陆交界；河岸硬化、植被清除和道路切割会同时破坏水中食物与岸上庇护。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)

## 体型、外形与辨识

2016 年 *Mammalian Species* 物种专论给出的成体性别数据彼此协调：雄性头体长 **60—90 厘米**、尾长 **36—47 厘米**、体重 **5.45—11.4 千克**；雌性头体长 **59—70 厘米**、尾长 **35—42 厘米**、体重 **3.36—7.6 千克**。雄性平均明显较大。为了让 `measurements` 和 `metrics` 表示同一解剖口径，推荐取两性联合包络：头体长 **59—90 厘米**、体重 **3.36—11.4 千克**，尾长只放在 note 和展示文案中。[Hung & Law 2016](https://doi.org/10.1093/mspecies/sew011)

IUCN/SSC 水獭专家组当前物种页另给出总长 102—138 厘米、体长 57—70 厘米、尾长 35—40 厘米、体重 4—11 千克；其中体长加尾长无法得到其总长上限，字段内部存在明显不协调。因此不建议把 102—138 厘米直接填入 `adultLengthCm`，也不要把“总长”和“头体长”混为一项。[IUCN/SSC Otter Specialist Group](https://www.otterspecialistgroup.org/otter-species/lutra-lutra/)

识别特征可写成：身体细长而流线，头部宽圆、耳朵小、触须发达；四足趾间有明显蹼并保留爪，长而肌肉发达的尾巴从粗基部逐渐收尖。被毛整体深褐，喉部和腹面较浅；亚洲个体往往毛较短、颜色偏浅，喉部可见浅色斑，但不能统一画成明亮白色面罩。[Hung & Law 2016](https://doi.org/10.1093/mspecies/sew011)

2026 年的形态与行为研究记录了水獭在纹理辨别任务中主动移动胡须，并显示其胡须适合近距离触觉定位；研究对象和任务仍不足以证明野外个体会用胡须追踪猎物尾流。因此产品文案可写“胡须补充视线”或“提供近距离触觉信息”，不应写成已证实的尾流探测能力。[Nakhwa et al. 2026](https://doi.org/10.1093/jmammal/gyag021)

与中国和东南亚可能同域的其他水獭相比：

- 江獭/滑獭（*Lutrogale perspicillata*）头部更厚重、毛更短滑，浅色腹面分界较清楚，尾巴明显背腹扁平；水獭的尾巴应画成圆锥状渐尖。[Hung & Law 2016](https://doi.org/10.1093/mspecies/sew011)
- 小爪水獭（*Aonyx cinereus*）体型明显更小，爪和蹼退化；水獭不应拥有灵长类般灵巧、几乎无爪的“小手”。[Hung & Law 2016](https://doi.org/10.1093/mspecies/sew011)
- 毛鼻水獭（*Lutra sumatrana*）的鼻镜覆毛，嘴唇、下巴和上喉更白；不要把毛鼻水獭的覆毛鼻镜套在本种上。[Hung & Law 2016](https://doi.org/10.1093/mspecies/sew011)
- 海獭（*Enhydra lutris*）是另一属的海洋型水獭；水獭不以仰漂、腹部当餐桌、成群“牵手”或用石头敲贝类作为代表行为。

### 毛被数字

对 6 只成年水獭冻存皮样的原始研究测得，躯干等部位（不含附肢）平均约 **70,000 根毛/平方厘米**，个体均值约 60,000—80,000；初级护毛仅占约 1.26%，绝大多数是细密次级绒毛。样本量很小，适合写成带限定的视觉化事实，不宜暗示每一处皮肤、所有年龄或所有地理种群都恰好是 70,000。[Kuhn et al. 2010](https://doi.org/10.4098/j.at.0001-7051.014.2009)

## 食性、潜水与活动

鱼类在多数地区是最重要猎物，有些研究地点占食物组成 80% 以上，但水獭是机会性捕食者而非只能吃鱼。它也取食螯虾、蟹和其他水生无脊椎动物、两栖类、爬行类、鸟和卵、小型哺乳动物；地中海及南方种群通常更广食，季节、河流类型和可获得猎物都会改变比例。斯里兰卡等局部研究甚至记录蟹的出现频率高于鱼，因此 `diet.types` 应同时使用 `piscivore` 与 `carnivore`，正文强调区域变化。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en) [Hung & Law 2016](https://doi.org/10.1093/mspecies/sew011)

海岸潜水原始研究发现，水獭强烈偏好 **0—3 米**浅水，以单次捕获一件猎物后回到水面处理的方式觅食。物种专论据此概括，它们通常在离岸 50 米内、深度 8 米以内觅食，观测潜水最长 96 秒。以上来自特定海岸研究，不应把 8 米或 96 秒写成全物种生理极限，也不建议填 `maxDiveDepthM`。[Nolet, Wansink & Kruuk 1993](https://doi.org/10.2307/5479) [Hung & Law 2016](https://doi.org/10.1093/mspecies/sew011)

水獭通常独居，最稳定的家庭单元是母兽与尚未独立的幼兽；个体会沿水道活动，通过粪标和气味在显眼岸边位置传递信息。葡萄牙遗传和遥测研究也发现个体的空间、时间和休息点可重叠，因此不应把“独居”翻译成绝不共享空间或不发生社会接触。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en) [Quaglietta et al. 2013](https://doi.org/10.1644/12-MAMM-A-171.1)

大多数内陆种群以夜间和晨昏活动为主，但节律会随季节、气温、月相、风、生境和繁殖状态变化。葡萄牙地中海种群显著夜行且炎热旱季更避开白昼；苏格兰设得兰群岛海岸种群则可在白天随低潮觅食。因此 `activity` 应写“多地偏夜行，具明显可塑性”，不能写“严格夜行”。[Quaglietta, Mira & Boitani 2018](https://doi.org/10.4404/hystrix-00022-2017) [IUCN/SSC Otter Specialist Group](https://www.otterspecialistgroup.org/otter-species/lutra-lutra/)

## 繁殖、成长与寿命口径

IUCN 评估汇总的妊娠期为 **63—65 天**、每胎 **1—5 只**，繁殖不严格受季节限制；物种专论指出幼兽约 2—3 月龄首次随母捕鱼，通常在 9—12 月龄独立。性成熟年龄来源存在差异：IUCN 概览写雄性约 18 月、雌性约 24 月，物种专论则概括为 2—3 岁；正文可用“大约两岁前后、资料因来源与圈养/野外口径而异”，不宜做高精度展示数字。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en) [Hung & Law 2016](https://doi.org/10.1093/mspecies/sew011)

IUCN 把野外“life expectancy”概括为 **5—7 年**，圈养可达 17 年；物种专论又引用不同资料给出一般寿命与最大年龄的其他值。期望寿命、典型存活年限与最大寿命不是同一指标，而当前 `metrics.lifespanYears` 无法标注口径，因此推荐暂不填该字段；可以在正文写“野外期望寿命约 5—7 年，少数个体和圈养记录更长”。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en) [Hung & Law 2016](https://doi.org/10.1093/mspecies/sew011)

## 威胁、保护行动与法律状态

### 主要威胁

IUCN 与专家组支持写入以下威胁：[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en) [IUCN/SSC Otter Specialist Group](https://www.otterspecialistgroup.org/otter-species/lutra-lutra/)

- **河流与湿地改造**：河道渠化、硬化与截弯取直，河岸植被清除，筑坝、湿地排水、采砂及不当水产养殖会损失洞穴、遮蔽、连通性和猎物环境。
- **污染**：有机氯农药、PCB、汞等重金属、PFAS 等持久性污染物、石油泄漏，以及污水、硝酸盐和畜牧浆液都可能影响个体健康或猎物；欧洲历史恢复与污染控制密切相关，但亚洲许多地区仍缺少系统监测。
- **猎物减少**：过度捕捞、河流食物网退化和水体工程会降低鱼、甲壳类和两栖类可获得性。
- **道路死亡与基础设施切割**：沿河道路、桥涵和堤坝迫使个体上路或穿越高风险位置；死亡个体可能对低密度、破碎小种群产生不成比例的影响。
- **渔具与陷阱误捕**：定置网、鳗笼、蟹笼、单丝网和针对其他动物的陷阱可造成溺亡、缠绕或创伤。
- **猎杀和非法贸易**：历史毛皮猎杀造成巨大损失；南亚、东南亚等地仍存在盗猎，以及宠物和传统药用等非法贸易。

中国背景下，历史大规模商业猎捕在 1989 年前后得到遏制时，许多种群已降至低位；当前更需要同时处理栖息地丧失、污染、城市化、流域工程、渔业冲突和破碎化，而不是把所有下降都归因于今天仍在发生同规模毛皮猎杀。[Li & Chan 2017/2018](https://doi.org/10.1017/S0030605317000400) [Zhang et al. 2018](https://doi.org/10.1016/j.biocon.2018.10.028)

### 推荐保护行动

- 恢复自然河岸植被、湿地、水文过程与上下游连通性，保护繁殖和休息所需的安静岸段；工程设计保留连续水陆通道。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)
- 控制工业、农业和生活污水，监测 PCB、农药、汞、PFAS 与油污等污染物，并把水獭体内污染负荷与繁殖、死亡数据联结起来。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)
- 维持天然鱼类和其他猎物群落；在渔业水域推广防水獭进入装置、逃生结构和低风险渔具，记录并减少误捕。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)
- 识别路杀热点，以连续涵洞、岸架、引导围栏、限速和桥下通道降低道路死亡，同时长期检验措施效果。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)
- 执行中国野生动物保护法律和 CITES 贸易管制，打击盗猎、非法宠物和药用贸易，并与渔民、养殖户建立冲突预防和报告机制。[国家重点保护野生动物名录](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml) [CITES 现行附录](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)
- 在中国开展统一设计的全国调查和长期监测，综合标准化粪标样线、遗传个体识别、eDNA、相机和死亡记录；公开结果时模糊化繁殖洞与小种群位置。[Li & Chan 2017/2018](https://doi.org/10.1017/S0030605317000400)
- 优先保护可作为扩散源的残存种群及保护地外关键湿地，修复它们之间的流域连接；再引入只应在原威胁已消除、栖息地适宜和遗传来源明确时采用并持续评估。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)

### 国际与区域法律状态（截至 2026-08-19）

- **CITES 附录 I**：2026-03-05 生效的现行 CITES 附录仍将 *Lutra lutra* 列入附录 I。其含义是相关标本国际商业贸易受到最严格管制、通常只可在例外情形下授权，不是“任何跨境移动绝对禁止”。[CITES 2026 现行英文附录](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [中国履约科学机构发布的 2026 中文附录](https://www.cites.org.cn/citesgy/fl/202604/P020260401624252070602.pdf) [CITES 官方附录释义](https://cites.org/eng/node/12644)
- **CMS 未列入附录 I 或 II**：2026-06-27 生效的 CMS COP15 修订附录在鼬科列出南美水獭类群，但未列 *Lutra lutra*。这是对现行完整附录的核对结果，不应反向包装成一种“CMS 保护等级”。[CMS 现行附录，effective 27 June 2026](https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf) [CMS 生效通知](https://www.cms.int/news/2026012-revised-cms-appendices)
- **欧盟《栖息地指令》附录 II 与 IV(a)**：附录 II 要求为其栖息地指定特别保护区，附录 IV(a)要求严格物种保护；这是欧盟法律地域内的义务，不适用于中国或整个全球范围。[EUR-Lex consolidated 14 July 2025](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A01992L0043-20250714)
- **《伯尔尼公约》附录 II**：水獭属于严格保护动物；同样只适用于缔约框架，不是全球 IUCN 等级。[Council of Europe — Bern Convention appendices](https://www.coe.int/web/bern-convention/appendices) [Bern Convention 2025 record confirming *Lutra lutra* in Appendix II](https://rm.coe.int/48800f3b01)

## 推荐的故事章节

1. **水与岸之间**：它既不是纯陆兽，也不是海洋兽；一条完整河岸同时提供水中猎物、陆上洞穴、气味标记点与移动走廊。
2. **用空气穿上一件潜水服**：约 70,000 根毛/平方厘米的稠密毛被锁住空气，解释它为何频繁梳理和为何海岸种群仍需淡水；数字必须带 `n=6` 限定。
3. **浅水里的机会主义猎手**：鱼常是主食，却会随地区和季节改吃蟹、蛙、爬行动物、鸟与小型哺乳动物；海岸研究显示最偏好 0—3 米浅水。
4. **夜色、潮汐与气味留言**：多数内陆种群偏夜行，海岸个体可能随低潮白天活动；独居个体仍通过粪标、气味和重叠路径保持联系。
5. **从欧洲回归，到亚洲空白**：污染治理和保护促成欧洲许多种群恢复，不能掩盖北非与亚洲的持续下降和监测空白。
6. **中国河网中留下的碎片**：从历史各大流域广布、巨量毛皮贸易，到 2006—2016 调查只确认零散残存地点；保护目标是守住源种群并重新连接河流与湿地。

## 推荐的关键事实

1. 水獭的分布横跨欧洲、亚洲和北非，但实际占据沿河流、湖泊、湿地和海岸呈线性、斑块化，而不是连续覆盖整个欧亚大陆。[IUCN](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)
2. 当前全球 IUCN 状态是 NT A2c：评估日期为 2020-01-31，修订版在 2022 年发布，种群趋势下降。[IUCN](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en)
3. 6 只成年个体皮样研究测得躯干平均约 70,000 根毛/平方厘米，绝大多数是细密次级绒毛。[Kuhn et al. 2010](https://doi.org/10.4098/j.at.0001-7051.014.2009)
4. 四足有蹼和爪，尾巴粗壮但逐渐收尖；扁平桨状尾、退化小爪或覆毛鼻镜都属于其他亚洲水獭的识别线索。[Hung & Law 2016](https://doi.org/10.1093/mspecies/sew011)
5. 多数种群偏夜行，但海岸个体可随低潮白天觅食；“严格夜行”会抹掉真实的行为可塑性。[IUCN/SSC OSG](https://www.otterspecialistgroup.org/otter-species/lutra-lutra/) [Quaglietta et al. 2018](https://doi.org/10.4404/hystrix-00022-2017)
6. 全球 IUCN 为近危，中国 2020 版红色名录为濒危，且是国家二级重点保护野生动物；三者评估范围和法律含义不同。[IUCN](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en) [中国红色名录](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf) [国家重点保护名录](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml)

## 应删除或避免的说法

- 不把全球状态写成 EN；全球是 NT A2c，中国区域红色名录才是 EN。
- 不把 IUCN 2022 发布年份填成 `assessedYear: 2022`；字段应为 2020。
- 不把全球成熟个体 57,880—361,140 写成直接普查或取中点；许多区域没有可靠丰度资料。
- 不写“欧洲恢复，所以全球种群正在恢复”；当前全球趋势仍是 decreasing。
- 不写“CMS 附录 I/II”；截至 2026-08-19，*Lutra lutra* 不在 CMS 两附录中。
- 不把 CITES 附录 I 解释为所有跨境活动无例外绝对禁止；应写“最严格管制、通常只在例外情形授权”。
- 不把 EU 附录 II/IV 或伯尔尼附录 II说成适用于中国的全球法律等级。
- 不把 1957 年 40,000 张皮张当作中国历史种群数；部分南方统计还可能混有其他水獭。
- 不把东北中国记录减少 92% 写成全国个体数下降 92%。
- 不把 2006—2016 年确认的 17 个 *L. lutra* 地点写成 2026 年全国仅存地点数。
- 不把 MDD 已单列的日本水獭历史谱系继续当作现生 *L. lutra* 的确定亚种。
- 不把头体长 59—90 厘米和带尾总长混用；IUCN/SSC 当前网页的分项与总长数字不协调。
- 不写“严格夜行”“只吃鱼”或“群居”；这些都抹掉地域、季节与母幼家庭差异。
- 不填全物种 `maxDiveDepthM: 8` 或“最长潜水 96 秒”；它们是特定海岸观察范围，不是生理极限。
- 不画成海獭：不以仰漂、腹部处理贝类、石砸贝类、成群牵手或永久远海生活作为代表。
- 不公开中国小种群、近期洞穴、固定粪标或相机点的精确坐标。

## 量化字段取舍

| 字段 | 推荐值 | 口径与理由 |
| --- | --- | --- |
| `measurements.length` | 59—90 cm | 头体长，两性联合包络；尾长 35—47 cm 只写 note。[Hung & Law 2016](https://doi.org/10.1093/mspecies/sew011) |
| `metrics.adultLengthCm` | `[59, 90]` | 与 `measurements.length` 同口径，不用专家组网页不协调的总长 102—138 cm。 |
| `measurements.weight` | 3.36—11.4 kg | 两性联合包络；雌性 3.36—7.6 kg、雄性 5.45—11.4 kg。[Hung & Law 2016](https://doi.org/10.1093/mspecies/sew011) |
| `metrics.adultMassKg` | `[3.36, 11.4]` | 保留来源精度；展示正文说明性别差异。 |
| `metrics.elevationM` | `[0, 4120]` | IUCN 全分布记录包络，不是典型日常垂直移动范围。[IUCN](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en) |
| `metrics.estimatedMatureIndividuals` | `[57880, 361140]` | IUCN 全球粗估；跨度极宽、许多地区无数据，展示必须带限制。[IUCN](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en) |
| `metrics.lifespanYears` | 不填 | 5—7 年是野外期望寿命，17 年是圈养长寿记录；当前 schema 无法区分口径。 |
| `metrics.maxDiveDepthM` | 不填 | 0—3 m 偏好和通常 <8 m 来自局部海岸研究，不是全物种最大深度。 |
| `metrics.topSpeedKph` | 不填 | 核心来源没有可稳定映射的野外全物种最高速度。 |
| `featuredStats.fur-density` | 约 70,000 根/平方厘米 | 原始研究 `n=6`，躯干/非附肢平均值，必须保留样本限定。[Kuhn et al. 2010](https://doi.org/10.4098/j.at.0001-7051.014.2009) |
| `featuredStats.gestation` | 63—65 天 | IUCN 物种生活史汇总；比争议较大的性成熟年龄更适合展示。[IUCN](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en) |

## 6 幅图像内容建议

| 序号与文件 | 建议场景 | 必须表现的物种线索 | 避免误画 |
| --- | --- | --- | --- |
| 01 `riparian-twilight-portrait` | 封面：暮色河岸，一只成年水獭从浅水登上有苔藓的石岸，背景有芦苇或灌丛 | 深褐致密湿毛、浅色喉部、小圆耳、发达触须、细长身体、长而渐尖的尾 | 不要橙色卡通毛、白色面罩、扁平桨尾；不要画成成群玩耍 |
| 02 `shallow-water-hunt` | 清澈但不过分热带化的浅河中追逐一条小鱼，水面和河床同时可见 | 趾间蹼与爪、尾巴驱动转向、贴近岸边和浅水的觅食尺度 | 不要深蓝远洋、珊瑚礁或鲸类式深潜；鱼不要夸张到接近体长 |
| 03 `headwater-river-corridor` | 中国尺度：青藏高原或山地源头河流的大景，水獭沿自然河岸移动 | 连续河岸植被、石隙与水陆走廊；个体占画面较小 | 不标具体保护区、洞穴或坐标；不要暗示全国只剩这个地点 |
| 04 `coastal-freshwater-grooming` | 岩石海岸低潮时觅食后的个体在邻近淡水池梳理、冲洗毛被 | 海岸与淡水来源同时入镜，展现沿岸生活仍依赖淡水 | 不画成海獭仰漂敲贝、长期离岸漂浮或厚重海兽体型 |
| 05 `scent-marking-rock` | 夜色或晨昏河岸，一只独行成体调查突出岩石上的气味标记 | 低头嗅闻、线性岸边路径、独居而非孤立无交流 | 粪标只作不抢眼环境线索，不做猎奇特写；不要多人化表情或社交仪式 |
| 06 `mother-and-cubs-holt` | 安静河岸洞穴附近，母兽带 1—2 只幼兽首次接近水边 | 母幼家庭而非成年群体；洞穴隐藏在根系/石岸/植被中 | 不暴露真实点位，不画 6—10 只成年“水獭大家族”，不把洞穴放在远离水体的干燥山洞 |

所有画面的共同负面提示：**no sea-otter raft, no holding hands, no rock-anvil feeding on belly, no flattened paddle tail, no reduced clawless hands, no hairy rhinarium, no bright orange cartoon fur, no white facial mask, no adult social pack, no permanent open-ocean setting**。

## 可直接用于 `species.ts` 的字段建议

下面的记录覆盖当前 `Species` 全部必填字段。`center` 是用于打开欧亚大陆视图的粗粒度焦点，不是分布中心、密度中心或可前往寻找个体的坐标。`countries` 采用 MDD v2.5 当前结构化清单；媒体文件名是资产任务的建议目标，生成和压缩素材后再落盘。

```ts
const EURASIAN_OTTER_SOURCE_DATE = '2026-08-19' as const;
const EURASIAN_OTTER_CONTENT_DATE = '2026-08-19' as const;

const EURASIAN_OTTER_SOURCES = [
  {
    title: 'IUCN Red List — Lutra lutra (assessed 2020; amended publication 2022)',
    url: 'https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en',
    kind: 'conservation',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Otter Specialist Group — Lutra lutra',
    url: 'https://www.otterspecialistgroup.org/otter-species/lutra-lutra/',
    kind: 'general',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database v2.5 — Lutra lutra',
    url: 'https://www.mammaldiversity.org/taxon/1005848/',
    kind: 'taxonomy',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database v2.5 — Lutra nippon',
    url: 'https://www.mammaldiversity.org/taxon/1005849/',
    kind: 'taxonomy',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局、农业农村部 — 国家重点保护野生动物名录（2021年第3号）',
    url: 'https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml',
    kind: 'conservation',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: '生态环境部、中国科学院 — 中国生物多样性红色名录·脊椎动物卷（2020；2023发布）',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (effective 5 March 2026)',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'CMS — Appendices I and II (effective 27 June 2026; Lutra lutra not listed)',
    url: 'https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf',
    kind: 'conservation',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'EU Habitats Directive — consolidated text (14 July 2025)',
    url: 'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A01992L0043-20250714',
    kind: 'conservation',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'Council of Europe — Bern Convention appendices',
    url: 'https://www.coe.int/web/bern-convention/appendices',
    kind: 'conservation',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'Hung & Law 2016 — Lutra lutra (Carnivora: Mustelidae)',
    url: 'https://doi.org/10.1093/mspecies/sew011',
    kind: 'general',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'Li & Chan 2017/2018 — Past and present status and distribution of otters in China',
    url: 'https://doi.org/10.1017/S0030605317000400',
    kind: 'distribution',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2016 — Historical distribution in north-east China (1950–2014)',
    url: 'https://doi.org/10.1002/aqc.2624',
    kind: 'distribution',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2018 — The neglected otters in China',
    url: 'https://doi.org/10.1016/j.biocon.2018.10.028',
    kind: 'distribution',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'Kuhn et al. 2010 — Hair density in Eurasian and sea otters',
    url: 'https://doi.org/10.4098/j.at.0001-7051.014.2009',
    kind: 'ecology',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'Nolet, Wansink & Kruuk 1993 — Diving in a marine habitat',
    url: 'https://doi.org/10.2307/5479',
    kind: 'ecology',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'Quaglietta, Mira & Boitani 2018 — Daily rhythms in a Mediterranean environment',
    url: 'https://doi.org/10.4404/hystrix-00022-2017',
    kind: 'ecology',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'Nakhwa et al. 2026 — Describing the whiskers of a semi-aquatic caniform',
    url: 'https://doi.org/10.1093/jmammal/gyag021',
    kind: 'ecology',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
  {
    title: 'Park et al. 2019 — Molecular evidence for the taxonomic status of the Japanese otter',
    url: 'https://doi.org/10.1080/19768354.2019.1601133',
    kind: 'taxonomy',
    accessedAt: EURASIAN_OTTER_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

{
  id: 'species-lutra-lutra',
  slug: 'eurasian-otter',
  names: {
    zh: '水獭',
    en: 'Eurasian Otter',
    aliases: ['欧亚水獭'],
  },
  scientificName: 'Lutra lutra',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Carnivora', '食肉目'),
    taxon('Mustelidae', '鼬科'),
    taxon('Lutra', '水獭属'),
  ),
  conservation: conservation('NT', 'decreasing', 2020, 'A2c'),
  distribution: {
    realms: ['freshwater', 'terrestrial', 'marine'],
    continents: ['亚洲', '欧洲', '非洲'],
    regions: ['欧洲与俄罗斯', '中亚与西亚', '喜马拉雅及南亚', '东亚与东南亚', '北非马格里布'],
    countries: [
      '阿富汗',
      '阿尔巴尼亚',
      '阿尔及利亚',
      '亚美尼亚',
      '奥地利',
      '阿塞拜疆',
      '白俄罗斯',
      '比利时',
      '不丹',
      '波斯尼亚和黑塞哥维那',
      '保加利亚',
      '柬埔寨',
      '中国',
      '克罗地亚',
      '捷克',
      '丹麦',
      '爱沙尼亚',
      '芬兰',
      '法国',
      '格鲁吉亚',
      '德国',
      '希腊',
      '匈牙利',
      '印度',
      '印度尼西亚',
      '伊朗',
      '伊拉克',
      '爱尔兰',
      '以色列',
      '意大利',
      '约旦',
      '哈萨克斯坦',
      '科索沃',
      '吉尔吉斯斯坦',
      '老挝',
      '拉脱维亚',
      '黎巴嫩',
      '列支敦士登',
      '立陶宛',
      '卢森堡',
      '摩尔多瓦',
      '蒙古',
      '黑山',
      '摩洛哥',
      '缅甸',
      '尼泊尔',
      '荷兰',
      '朝鲜',
      '北马其顿',
      '挪威',
      '巴基斯坦',
      '巴勒斯坦',
      '波兰',
      '葡萄牙',
      '罗马尼亚',
      '俄罗斯',
      '塞尔维亚',
      '斯洛伐克',
      '斯洛文尼亚',
      '韩国',
      '西班牙',
      '斯里兰卡',
      '瑞典',
      '瑞士',
      '叙利亚',
      '塔吉克斯坦',
      '泰国',
      '突尼斯',
      '土耳其',
      '土库曼斯坦',
      '乌克兰',
      '英国',
      '乌兹别克斯坦',
      '越南',
    ],
    range:
      '从欧洲和北非横跨欧亚大陆至东亚、南亚与东南亚部分地区，沿河流、湖泊、湿地、河口和部分海岸呈不连续分布；中国历史记录覆盖各大流域，当前种群显著收缩并破碎化，残存于保护较好、人口稀疏的源头与边境，以及部分三角洲和洪泛平原。',
    center: { lat: 45, lng: 65 },
  },
  habitats: [
    {
      name: '河流、溪流与自然河岸带',
      realm: 'freshwater',
      description: '从低地河网到山地溪流均可利用；鱼类和其他水生猎物提供食物，植被、根系、石隙和隐蔽岸段提供移动、休息与繁殖场所。',
      isPrimary: true,
    },
    {
      name: '湖泊、沼泽与洪泛湿地',
      realm: 'freshwater',
      description: '利用天然湖泊、水库、池塘、沼泽、洪泛平原和沼泽森林，适宜度取决于猎物、水质、岸线结构和与其他水体的连通性。',
    },
    {
      name: '河口、盐沼与岩石海岸',
      realm: 'marine',
      description: '部分种群在咸淡水和近岸浅海觅食；海岸个体仍需要邻近淡水饮用、清洗盐分并维护隔水毛被。',
    },
    {
      name: '紧邻水体的陆岸走廊',
      realm: 'terrestrial',
      description: '水陆交界承担洞穴、气味标记、育幼和水系间移动功能；道路、硬化岸线和植被清除会切断这条狭窄走廊。',
    },
  ],
  measurements: {
    length: { min: 59, max: 90, unit: 'cm', note: '成体头体长；尾长约 35—47 厘米，雄性通常更大' },
    weight: { min: 3.36, max: 11.4, unit: 'kg', note: '两性成体联合包络；雌性约 3.36—7.6 千克，雄性约 5.45—11.4 千克' },
  },
  diet: {
    types: ['piscivore', 'carnivore'],
    foods: ['鱼类', '螯虾、蟹和其他水生无脊椎动物', '两栖类', '爬行类', '水鸟与卵', '小型哺乳动物'],
    description: '鱼类通常是最重要猎物，但食谱随地区、季节、水体和猎物供应显著变化；南方和地中海种群往往更广食，也会大量利用甲壳类、两栖类和其他机会性猎物。',
  },
  activity: [
    '多地以夜间和晨昏活动为主，随季节、气温、月相、风和生境改变',
    '通常独居，母兽与未独立幼兽组成最稳定家庭单元',
    '沿河岸和水道进行线性移动与觅食',
    '以粪标和气味在显眼岸边位置交流',
    '部分海岸种群随低潮在白天觅食',
  ],
  tags: ['半水栖鼬科', '淡水生态系统', '国家二级重点保护野生动物', 'CITES 附录 I', '全球近危'],
  summary: '横跨欧亚与北非的半水栖捕食者，把鱼、河岸洞穴和气味路径串在同一条水陆边界上。',
  description:
    '水獭是水獭属中分布极广的半水栖鼬科动物。细长身体、带蹼有爪的足和逐渐收尖的肌肉尾让它能在浅水追逐猎物，致密毛被则锁住空气、隔开冷水。它通常独自沿水道活动，鱼类是多数地区的核心食物，却会随季节改吃蟹、蛙、爬行动物、鸟和小型哺乳动物。欧洲多地在污染控制和保护后恢复，中国及亚洲许多区域仍呈破碎、下降或资料不足。',
  storySections: [
    {
      key: 'water-land-boundary',
      label: '半水栖生活',
      title: '真正的家，不只是水面之下',
      body: '水獭在水中追逐猎物，却要在岸上休息、育幼、梳理毛被和留下气味。鱼类、水质、自然河岸、隐蔽洞穴与上下游通道缺一不可；一条看似仍有水、却被硬化和道路切碎的河流，未必还是完整家园。',
    },
    {
      key: 'fur-and-form',
      label: '形态与适应',
      title: '用空气穿上一件潜水服',
      body: '成年皮样研究测得躯干平均约每平方厘米 70,000 根毛，细密绒毛把空气锁在皮肤外。它没有海洋鲸兽那样的厚脂肪层，毛被清洁和梳理格外重要；这也解释了海岸水獭为什么仍会寻找淡水洗去盐分。',
    },
    {
      key: 'diet-and-diving',
      label: '食性与潜水',
      title: '在浅水中，一次追一件猎物',
      body: '鱼类常是主食，但蟹、螯虾、蛙、爬行动物、鸟和小型哺乳动物都可能进入食谱。海岸研究中的水獭强烈偏好 0—3 米浅水，抓住一件猎物便带回水面处理；它是贴着岸线工作的机会主义猎手，不是远洋深潜者。',
    },
    {
      key: 'rhythm-and-signs',
      label: '活动与交流',
      title: '独行，却不断读写气味留言',
      body: '多数内陆种群偏夜间和晨昏活动，海岸个体却可能随低潮在白天觅食。成体通常独行，但会在突出岩石和常用岸段留下粪标与气味；路径和休息点也可能与其他个体重叠，独居并不等于彼此完全失联。',
    },
    {
      key: 'reproduction',
      label: '繁殖与成长',
      title: '母兽带幼崽认识第一条河',
      body: '妊娠约 63—65 天，每胎通常在 1—5 只范围内。幼兽早期留在隐蔽岸洞，约 2—3 月龄开始随母接触捕鱼，往往到 9—12 月龄才独立；母幼家庭是最稳定、也最容易被误画成群居的社会单元。',
    },
    {
      key: 'china-and-conservation',
      label: '中国与保护',
      title: '从遍布河网，到守住残存源种群',
      body: '中国历史记录曾覆盖各大流域，长期商业猎捕、污染、河流改造和城市化使种群大幅收缩。今天的重点是确认仍在繁殖的源种群，保护保护地外湿地和河岸，减少污染、误捕与路杀，并让被切断的水系重新连通。',
    },
  ],
  keyFacts: [
    '水獭横跨欧洲、亚洲与北非，但实际分布沿水系和海岸呈线性、斑块化。',
    '6 只成年个体皮样研究测得躯干平均约每平方厘米 70,000 根毛，绝大多数是细密绒毛。',
    '四足有明显蹼和爪，尾巴从粗壮基部逐渐收尖，不是江獭那样的扁平桨状尾。',
    '鱼类通常是核心食物，却会随地区和季节改吃蟹、蛙、爬行动物、鸟与小型哺乳动物。',
    '多数种群偏夜行，但部分海岸个体会随低潮在白天觅食。',
    '全球 IUCN 为近危；中国红色名录为濒危，并列入国家二级重点保护野生动物。',
  ],
  threats: [
    '河道渠化、岸线硬化、筑坝、采砂和湿地排水造成生境丧失与破碎化',
    '工业、农业和生活污染物影响健康、水质与猎物群落',
    '过度捕捞及水生食物网退化造成猎物减少',
    '沿河道路、桥涵和其他基础设施造成路杀与迁移阻隔',
    '定置网、鳗笼、蟹笼、单丝网和陷阱导致溺亡、缠绕或误捕',
    '盗猎以及非法宠物、毛皮和传统药用贸易',
  ],
  conservationActions: [
    '恢复自然河岸植被、湿地水文过程和上下游生态连通性',
    '控制污水和持久性污染物，联结水质、体内负荷与繁殖死亡监测',
    '维护天然猎物群落并推广防水獭进入和可逃生的低风险渔具',
    '识别路杀热点，以涵洞岸架、引导围栏、限速和桥下通道降低死亡',
    '执行中国野生动物保护法律与 CITES 贸易管制，开展社区冲突预防',
    '以粪标遗传、eDNA、相机和标准化样线开展不公开敏感点位的长期监测',
    '优先保护中国残存源种群、保护地外关键湿地及其流域连接',
  ],
  metrics: {
    adultLengthCm: [59, 90],
    adultMassKg: [3.36, 11.4],
    elevationM: [0, 4120],
    estimatedMatureIndividuals: [57880, 361140],
  },
  featuredStats: [
    {
      key: 'mature-population',
      label: '全球成熟个体估计',
      value: '57,880—361,140',
      unit: '只',
      note: 'IUCN 全球粗略区间；跨度极宽，许多地区缺少数据，不是同步普查',
    },
    {
      key: 'fur-density',
      label: '躯干平均毛密度',
      value: '约 70,000',
      unit: '根/平方厘米',
      note: '6 只成年个体皮样，不含附肢；个体均值约 60,000—80,000',
    },
    {
      key: 'elevation-range',
      label: '已记录海拔',
      value: '0—4,120',
      unit: '米',
      note: '全分布区记录包络，不是典型日常垂直移动范围',
    },
    {
      key: 'gestation',
      label: '妊娠期',
      value: '63—65',
      unit: '天',
    },
  ],
  media: {
    image: './images/species/eurasian-otter/01-riparian-twilight-portrait.webp',
    alt: '暮色自然河岸上一只深褐色成年水獭从浅水登上苔藓石岸',
    focalPoint: { x: 0.66, y: 0.53 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/eurasian-otter/02-shallow-water-hunt.webp',
        alt: '成年水獭在近岸浅河中转身追逐一条小鱼，带蹼足与渐尖长尾清晰可见',
        title: '浅水猎手',
        caption: '海岸研究中的水獭强烈偏好 0—3 米浅水；鱼常是核心猎物，却不是唯一食物。',
        focalPoint: { x: 0.53, y: 0.5 },
      },
      {
        image: './images/species/eurasian-otter/03-headwater-river-corridor.webp',
        alt: '山地源头河流与连续自然河岸的大景中一只水獭沿水边移动',
        title: '一条完整的河岸走廊',
        caption: '水中猎物、岸上洞穴、植被遮蔽和上下游连通，共同组成半水栖动物的家园。',
        focalPoint: { x: 0.39, y: 0.64 },
      },
      {
        image: './images/species/eurasian-otter/04-coastal-freshwater-grooming.webp',
        alt: '低潮岩石海岸旁一只水獭在邻近淡水池边梳理深褐色毛被',
        title: '海岸生活仍离不开淡水',
        caption: '部分水獭到近岸浅海觅食，却仍需要淡水饮用、洗去盐分并维护隔水毛被。',
        focalPoint: { x: 0.62, y: 0.57 },
      },
      {
        image: './images/species/eurasian-otter/05-scent-marking-rock.webp',
        alt: '晨昏河岸一只独行水獭低头调查突出岩石上的气味标记',
        title: '岸边的气味留言',
        caption: '通常独行的成体会在显眼岸段留下粪标与气味，交换身份和空间使用信息。',
        focalPoint: { x: 0.56, y: 0.58 },
      },
      {
        image: './images/species/eurasian-otter/06-mother-and-cubs-holt.webp',
        alt: '自然河岸根系洞穴旁一只水獭母兽带两只幼兽接近浅水',
        title: '跟随母兽认识第一条河',
        caption: '幼兽约 2—3 月龄开始随母接触捕鱼，通常到 9—12 月龄才逐步独立。',
        focalPoint: { x: 0.55, y: 0.6 },
      },
    ],
  },
  sources: EURASIAN_OTTER_SOURCES,
  publishedAt: EURASIAN_OTTER_CONTENT_DATE,
  updatedAt: EURASIAN_OTTER_CONTENT_DATE,
}
```

是否设置 `featured: true` 属于首页编排选择，不是物种研究结论，因此不在数据建议中预设。

## 来源清单

以下来源均于 **2026-08-19** 核验；优先提供 DOI、机构物种页和官方现行文本。

| 主题 | 来源与稳定 URL | 主要用途 |
| --- | --- | --- |
| 全球红色名录 | [Loy et al. 2022 — *Lutra lutra*（2020-01-31 评估）](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T12419A218069689.en) | NT A2c、下降趋势、评估/发布年份、全球分布、海拔、生境、食性、生活史、威胁、保护需求与成熟个体估计 |
| 水獭专家组概览 | [IUCN/SSC Otter Specialist Group — *Lutra lutra*](https://www.otterspecialistgroup.org/otter-species/lutra-lutra/) | 当前状态、活动差异、海岸淡水需求、食性、社会结构、威胁；体型数字因内部不协调未直接采用 |
| 当前哺乳动物分类 | [ASM Mammal Diversity Database v2.5 — *Lutra lutra*](https://www.mammaldiversity.org/taxon/1005848/) | 接受种名、上级分类、英文名、生物地理界、当前国家字段及日本水獭分类注释 |
| 日本水獭独立条目 | [MDD v2.5 — *Lutra nippon*](https://www.mammaldiversity.org/taxon/1005849/) | 避免把日本历史谱系当作现生 *L. lutra* 亚种 |
| 日本水獭分子分类 | [Park et al. 2019](https://doi.org/10.1080/19768354.2019.1601133) | 支持 *L. nippon* 与 *L. lutra* 的区分 |
| 近期颅骨地理变异 | [Russo et al. 2025](https://doi.org/10.1093/zoolinnean/zlaf164) | 提醒欧亚范围内亚种/管理单元仍需继续检验 |
| 中国法定保护名录 | [国家林草局、农业农村部公告 2021 年第 3 号](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml) | 标准中文名、学名与国家二级重点保护等级 |
| 中国区域红色名录 | [中国生物多样性红色名录—脊椎动物卷（2020）](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf) | 中国 EN 与标准；2020 版、2023 发布 |
| 中国历史与现状 | [Li & Chan 2017/2018](https://doi.org/10.1017/S0030605317000400) | 历史各大流域分布、皮张贸易、2006—2016 确认地点、残存格局与优先行动 |
| 东北中国记录变化 | [Zhang et al. 2016](https://doi.org/10.1002/aqc.2624) | 1950—2014 东北记录减少 92% 的正确地域与指标口径 |
| 中国长期分布综述 | [Zhang et al. 2018](https://doi.org/10.1016/j.biocon.2018.10.028) | 400 年分布变化、全国知识缺口与调查建议 |
| 形态与综合生态 | [Hung & Law 2016](https://doi.org/10.1093/mspecies/sew011) | 性别体长/体重、尾长、外形辨识、食性、潜水、成长与寿命资料差异 |
| 毛密度原始研究 | [Kuhn et al. 2010](https://doi.org/10.4098/j.at.0001-7051.014.2009) | 约 70,000 根/平方厘米、`n=6`、个体范围和毛型构成 |
| 胡须形态与主动触觉 | [Nakhwa et al. 2026](https://doi.org/10.1093/jmammal/gyag021) | 纹理辨别任务中的胡须运动与形态；不外推为已证实的野外猎物尾流追踪 |
| 海岸潜水原始研究 | [Nolet, Wansink & Kruuk 1993](https://doi.org/10.2307/5479) | 强烈偏好 0—3 米浅水及单猎物装载行为 |
| 活动节律原始研究 | [Quaglietta, Mira & Boitani 2018](https://doi.org/10.4404/hystrix-00022-2017) | 地中海种群夜行、季节/气温/月相/生境/风等影响 |
| CITES | [CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) | 当前附录 I；以 2026 文本替代此前 2025 版本 |
| CMS | [CMS Appendices, effective 27 June 2026](https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf) | 完整核对后确认 *L. lutra* 未列附录 I/II |
| 欧盟法律 | [Habitats Directive consolidated 14 July 2025](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A01992L0043-20250714) | 欧盟附录 II 与 IV(a)及其地域性 |
| 伯尔尼公约 | [Council of Europe — Appendices](https://www.coe.int/web/bern-convention/appendices) | 附录 II 严格保护及其缔约范围 |

## 仍然不确定或需后续更新的事项

- **全球评估时效**：当前可公开引用的 IUCN 记录仍是 2020 评估、2022 修订发布；亚洲资料空白很大。若 IUCN 后续发布新评估，状态、趋势、成熟个体范围与国家清单都需整体复核，不能只改年份。
- **成熟个体数**：57,880—361,140 的跨度极宽，评估正文又明确许多国家缺少丰度资料；它适合表达数量级不确定性，不适合新闻式“仅剩”表述。
- **中国现状**：最系统的全国综合论文主要覆盖到 2016 年；后续区域研究不能自动拼成全国同步普查。公开条目应避免列举敏感的当前小种群地点。
- **日本水獭分类**：MDD v2.5 已把 *L. nippon* 单列，但 IUCN 2020 评估仍沿用较广义分类。产品主分类应跟随当前 MDD，同时保留 IUCN 评估分类单元边界较旧的注释。
- **亚种边界**：IUCN 使用的 12 亚种框架与近期分子、颅骨研究并不完全一致，不建议在面向用户的档案中给出确定亚种总数。
- **国家/地区清单**：MDD v2.5 与 IUCN 2020 的编码和分类处理不同，尤其涉及日本、香港、台湾及部分边缘国家；代码建议跟随当前 MDD，地图不应据此画到国家全境。
- **体型**：专家组网页的总长与头体长、尾长分项互相不协调；本文选择同行评审物种专论的两性包络。若后续产品统一采用总长，应新增明确的测量口径，而不是直接替换数字。
- **寿命**：野外期望寿命、一般寿命和最大寿命来源混杂；当前 schema 无法区分，因此暂不填 `lifespanYears`。
- **潜水能力**：0—3 米偏好、通常在 8 米以内和最长 96 秒均来自局部海岸研究，不是全物种生理上限。
- **行为节律**：夜行程度随纬度、季节、温度、潮汐、人类活动和繁殖状态变化；故事和图像都不应把某一研究地的时段推广到所有种群。
- **国际名录会更新**：CITES、CMS、欧盟和伯尔尼公约均可能修订。本文已用 2026-08-19 当日可查的现行版本；未来维护应再次核对生效文本，而不是沿用标签。
