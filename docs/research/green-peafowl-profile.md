# 绿孔雀（*Pavo muticus*）完整档案研究

- 检索与核验日期：2026-08-26
- 推荐展示中文名：**绿孔雀**
- 推荐展示英文名：**Green Peafowl**
- 接受学名：***Pavo muticus* Linnaeus, 1766**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并约束 1 张封面与 5 张详情图的科学内容
- 分类口径：IOC World Bird List v15.2；全球保护评估采用 BirdLife/IUCN 口径
- 中国口径：国家重点保护等级、中国生物多样性红色名录和云南省野外监测分别表述，三者不能互相替代

## 结论摘要

1. IOC v15.2 接受 ***Pavo muticus***，列于鸡形目、雉科、孔雀属，并承认 3 个亚种：***P. m. spicifer***、***P. m. imperator*** 和指名亚种 ***P. m. muticus***。中国现存野生种群按该地理分类归入 ***P. m. imperator***，本项目仍建立物种级档案。[IOC pheasants list](https://www.worldbirdnames.org/new/bow/pheasants/) [IOC master list](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/)
2. 结构化全球保护字段应写成 `conservation('EN', 'decreasing', 2018, 'A2cd+3cd+4cd')`。BirdLife/IUCN 给出的全球数量是 **10,000 至 19,999 只成熟个体**，数据质量为 poor，推导方式为 suspected；换算的总个体数约 15,000 至 30,000 只，不能把两个区间混用。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22679440A131749282.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus)
3. 《中国生物多样性红色名录·脊椎动物卷（2020）》把绿孔雀列为 **CR，A2cd+3cd+4cd**。这是中国区域灭绝风险，不是全球 IUCN 等级。国家重点保护野生动物名录把绿孔雀列为**一级**，这是法律保护等级，也不能写进 IUCN 字段。[中国生物多样性红色名录·鸟类](https://sdr.cas.cn/zcgz/gjfg/202306/P020230523325260524862.pdf) [国家重点保护野生动物名录](https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html)
4. BirdLife 当前列出的原生现存国家为中国、缅甸、泰国、老挝、柬埔寨、越南和印度尼西亚；孟加拉国、印度和马来西亚列为区域灭绝。中国现存野生绿孔雀仅见于云南，主要位于云南中部、西部和南部，元江中上游是当前核心区域。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus) [Kong et al. 2018](https://doi.org/10.1186/s40657-018-0110-0) [云南省林草局 2023](https://lcj.yn.gov.cn/html/2023/jianyitianbanli_0526/69006.html)
5. 国家林草局 2026 年 8 月 18 日转载云南日报的最新监测报道：云南全省绿孔雀野外种群**已超过 1,000 只**，双柏县达到 625 只，其中 2025 年新增 195 只。2023 年官方节点为全省超过 650 只。两者反映不同监测时点，且公开页面未给出年龄结构、检测概率和完整方法，不能据此计算严格增长率；它们也不能与全球“成熟个体”区间直接相减或求比例。[国家林草局 2026](https://www.forestry.gov.cn/lyj/1/dzbhdt/20260818/684856.html) [云南省林草局 2023](https://lcj.yn.gov.cn/html/2023/jianyitianbanli_0526/69006.html)
6. BirdLife 给出的性别分列体长为雄鸟 **244 厘米**、雌鸟 **100 至 110 厘米**。雄鸟数值包含长尾屏，尾屏由延长的尾上覆羽构成，不是解剖学意义上的尾羽。项目不应补填缺少同等级来源支持的体重和翼展。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus)
7. 泰国野外研究记录其昼行、地面觅食、树上夜栖，取食至少 66 种植物，也吃昆虫和小型脊椎动物；同一研究点的每窝卵数为 **2 至 5 枚**，孵化期 **26 至 27 天**。这些繁殖季节和每日时刻是单一研究地结果，不能包装成整个分布区不变的日历。[Ponsena 1988](https://li01.tci-thaijo.org/index.php/tjf/article/view/256671)
8. 绿孔雀列入 **CITES 附录 II**，国际贸易受到许可管理，并非全面贸易禁令。2026 年 6 月 27 日生效的 CMS 附录及官方物种表没有 ***Pavo muticus***；BirdLife 同时将其标为非迁徙种。不要虚构 CMS 附录等级。[CITES Checklist](https://checklist.cites.org/) [CMS Appendices](https://www.cms.int/species/appendix-i-ii-cms) [CMS species list](https://www.cms.int/species)

## 名称、分类与分类单元

### 接受分类

推荐分类节点：

| 分类阶元 | 学名 | 中文名 | 分类口径 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | 项目通用节点 |
| 门 | Chordata | 脊索动物门 | 项目通用节点 |
| 纲 | Aves | 鸟纲 | IOC v15.2 |
| 目 | Galliformes | 鸡形目 | IOC v15.2 |
| 科 | Phasianidae | 雉科 | IOC v15.2 |
| 属 | Pavo | 孔雀属 | IOC v15.2 |
| 种 | Pavo muticus | 绿孔雀 | IOC v15.2 |

IOC v15.2 的 3 个种下分类单元为：

| 亚种 | 作者与年份 | IOC 分布概括 | 项目处理 |
| --- | --- | --- | --- |
| *Pavo muticus spicifer* | Shaw, 1804 | 印度东北部和孟加拉国至缅甸西部 | 当前原生范围西部亚种；历史分布国家中的部分种群已经区域灭绝 |
| *Pavo muticus imperator* | Delacour, 1949 | 缅甸东部至泰国、中南半岛及中国南部 | 中国现存野生种群按地理分类归入本亚种 |
| *Pavo muticus muticus* | Linnaeus, 1766 | 马来半岛和爪哇；马来半岛已区域灭绝 | 指名亚种，现存野生分布重点在爪哇 |

[IOC pheasants list](https://www.worldbirdnames.org/new/bow/pheasants/) [IOC master list](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/)

亚种分布是分类研究采用的地理口径，不等于每只中国个体都经过遗传鉴定。产品正文可写“中国野生种群通常归入中南亚种 *P. m. imperator*”，不要写成“基因检测证明云南所有个体都是纯种中南亚种”。2025 年基因组研究在动物园样本中发现绿孔雀与蓝孔雀近期杂交信号，但 3 只杂交个体都来自动物园，而不是野外样本；这项结果不足以证明云南野生种群已普遍杂交。[Gao et al. 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11835448/)

### 中文名与旧名

当前国家名录和中国红色名录都使用“绿孔雀”，项目应以此为唯一展示中文名。[国家重点保护野生动物名录](https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html) [中国生物多样性红色名录·鸟类](https://sdr.cas.cn/zcgz/gjfg/202306/P020230523325260524862.pdf)

早期中文动物学资料曾把整个 ***Pavo muticus*** 称作“爪哇孔雀”。现代分类中“爪哇”更准确地指向指名亚种 ***P. m. muticus***，把它无注释地用于全种会与中国的 ***P. m. imperator*** 混淆。因此只将“爪哇孔雀”保留为历史检索别名，不用于标题、图注或分布说明。[《动物学精义·下》旧名索引](https://upload.wikimedia.org/wikipedia/commons/5/51/SSID-13209155_%E5%8B%95%E7%89%A9%E5%AD%B8%E7%B2%BE%E7%BE%A9_%E4%B8%8B.pdf) [IOC pheasants list](https://www.worldbirdnames.org/new/bow/pheasants/)

“缅甸孔雀”“龙鸟”“越鸟”“南客”在现代中文资料中缺少稳定、唯一的分类指向，且可能泛指孔雀类或文化意象，不建议放入结构化别名。

```ts
names: {
  zh: '绿孔雀',
  en: 'Green Peafowl',
  aliases: ['綠孔雀', '爪哇孔雀'],
}
```

## 全球保护状态、数量与趋势

### 正式 IUCN 字段

BirdLife 是鸟类 IUCN 红色名录评估机构。当前物种页沿用 2018 年评估：

- 全球等级：**Endangered（EN，濒危）**；
- 趋势：**Decreasing**；
- 标准：**A2cd+3cd+4cd**；
- 评估年份：**2018**；
- 成熟个体估计：**10,000 至 19,999**；
- 估算质量：poor；推导方式：suspected；
- 总个体数换算：15,000 至 29,999，展示时四舍五入为约 15,000 至 30,000；
- 世代长度：6.1 年；
- 种群严重破碎：是。

[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22679440A131749282.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus)

推荐结构化字段：

```ts
conservation: conservation('EN', 'decreasing', 2018, 'A2cd+3cd+4cd')
```

`assessedYear` 不能写 2009、2023 或 2026。2009 是 BirdLife 数量估算所用的种群年份字段，2023 是云南官方监测发布年，2026 是本稿检索年。

### A 标准怎样解释

评估记录认为，高强度生境转换和捕猎导致种群快速下降并形成严重破碎化，未来下降和破碎化预计仍会持续。A2 覆盖评估日前的三世代，A3 覆盖评估日后的三世代，A4 则跨越过去与未来；小写 `c` 指生境范围或质量下降，`d` 指实际或潜在利用，包括捕猎。BirdLife 在 2018 年记录中把过去、未来及跨过去与未来三世代的疑似下降均放在 50% 至 79% 档位；记录中的 2007 至 2025 年对应 A4 的跨期窗口，不能同时当作 A2 和 A3 的起止年。这个档位来自低质量、疑似推导，不应写成“已精确下降 50%”或“到 2025 年恰好下降 79%”。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus)

### 成熟个体与总个体不能混用

`metrics.estimatedMatureIndividuals` 应填 `[10000, 19999]`。15,000 至 30,000 是把成熟个体换算为全部年龄个体后的粗略区间，只适合带注释的正文，不能填入成熟个体字段。两组数字都不是一次同步全球普查；BirdLife 明确指出估算粗糙、需要改进。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22679440A131749282.en)

## 中国保护口径与监测数字

中国相关信息至少有五套独立含义：

1. **国家重点保护野生动物：一级。** 2021 年经国务院批准的国家名录列出“绿孔雀 *Pavo muticus*，一级”。这是法律保护级别。[国家林业和草原局、农业农村部公告 2021 年第 3 号](https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html)
2. **中国生物多样性红色名录：CR，A2cd+3cd+4cd。** 这是 2020 年中国区域评估，反映中国境内灭绝风险。[中国生物多样性红色名录·鸟类](https://sdr.cas.cn/zcgz/gjfg/202306/P020230523325260524862.pdf)
3. **云南 2018 年调查：约 485 至 547 只。** 调查覆盖云南中部、西部和南部的 6 个州（市）、19 个县（市）。[云南省林草局 2020](https://lcj.yn.gov.cn/html/2020/jianyitianbanli_0928/58739.html)
4. **云南 2023 年监测：超过 650 只。** 官方同时报告三分之二的种群在现有自然保护地外，元江中上游的双柏、新平、峨山和元江四县占全省 80% 以上。[云南省林草局 2023](https://lcj.yn.gov.cn/html/2023/jianyitianbanli_0526/69006.html)
5. **云南 2026 年最新公开监测：全省超过 1,000 只。** 国家林草局政府网转载的云南日报报道还称，双柏县 2025 年新增 195 只，目前达到 625 只。报道把这些数值明确称为监测数据，但没有在页面中列出全省和双柏的调查设计、分龄结果或置信区间。[国家林草局 2026](https://www.forestry.gov.cn/lyj/1/dzbhdt/20260818/684856.html)

当前中国展示统计应采用 2026 年“全省超过 1,000 只”，并把 2018 年和 2023 年数字留在趋势背景中。三个节点的公开页面没有提供可确认完全一致的抽样设计、检测概率、年龄结构和置信区间；2026 年报道中的“双柏 2025 年新增 195 只”也可能包含当年新识别或新出生的不同年龄个体。产品可转述官方监测所见的恢复，不应自行用 485、650 和 1,000 计算严格年增长率。更不能用 `1000 / 10000` 计算中国占全球成熟个体比例，因为全球分母只计成熟个体，云南分子是未分龄的野外个体，统计年份和空间调查方法也不同。

## 分布

### 全球现存与历史范围

BirdLife 当前国家表的原生、现存、留居国家为：

- 中国；
- 缅甸；
- 泰国；
- 老挝；
- 柬埔寨；
- 越南；
- 印度尼西亚。

孟加拉国、印度和马来西亚仍属于历史原生范围，但当前国家表标为区域灭绝。不要在 `distribution.countries` 的现存国家列表中混入这三国；可在 `range` 正文中说明历史范围曾向西延伸到印度东北部、孟加拉国和马来半岛。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus)

大陆东南亚的现存种群高度破碎。模型研究估计绿孔雀在大陆东南亚可能只占据历史范围的不到 16%，并识别出缅甸中部、泰国西部和北部、柬埔寨东部至越南中南部、柬埔寨北部至老挝南部等关键区域。该模型排除了中国与爪哇，不能把“不到 16%”称为全物种全球范围结论。[Sukumal et al. 2020](https://doi.org/10.1017/S003060531900005X)

### 中国野生种群范围

当前稳健口径是“在中国仅分布于云南”。2014 至 2017 年调查在西藏墨脱和察隅没有发现绿孔雀证据，确认当时现存记录集中在云南中部、西部和南部 8 个州（市）的 22 个县，涉及楚雄、玉溪、普洱、临沧、保山、德宏、红河和西双版纳；2023 年云南官方仍使用“中国仅分布于云南”的表述。[Kong et al. 2018](https://doi.org/10.1186/s40657-018-0110-0) [云南省林草局 2023](https://lcj.yn.gov.cn/html/2023/jianyitianbanli_0526/69006.html)

BirdLife 的范围综述把云南种群概括为主要分布在澜沧江、怒江和红河中下游岸边的热带森林区，近年的云南监测则进一步识别出元江中上游的集中核心。前者是跨区域范围概括，后者是较新、较细的省级重点区，不应被写成互相排斥的两套分布。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus) [云南省林草局 2023](https://lcj.yn.gov.cn/html/2023/jianyitianbanli_0526/69006.html)

历史资料曾记录浙江、湖北、四川、广西、广东等地，绿孔雀已在这些区域消失。它不是“云南特有种”：物种全球还分布于东南亚；准确说法是“中国现存野生种群仅在云南”。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus) [Dong et al. 2021](https://doi.org/10.1098/rspb.2021.0073)

推荐分布字段：

```ts
distribution: {
  realms: ['terrestrial'],
  continents: ['亚洲'],
  regions: ['中国西南部', '大陆东南亚', '爪哇岛'],
  countries: ['中国', '缅甸', '泰国', '老挝', '柬埔寨', '越南', '印度尼西亚'],
  range:
    '现存野生种群破碎分布于中国云南、缅甸、泰国、老挝、柬埔寨、越南和印度尼西亚爪哇岛；中国现存野生种群仅见于云南中部、西部和南部，以元江中上游为核心。',
}
```

不建议填写 `endemicTo`。也不建议用一个 `center` 代表全球分布：大陆东南亚、中国云南和爪哇之间存在大范围断裂。

## 生境与海拔

历史记录覆盖热带和亚热带的常绿林、落叶林、混交林、沼泽林、疏林、林缘、竹林、草地、稀树草原、灌丛及农田边缘，海拔从海平面到至少 2,100 米。当前记录更多集中在干燥落叶林，未受干扰的河流和湿地附近密度最高；距水源和人类聚落的距离会显著影响出现概率和丰度。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus) [Brickle 2002](https://doi.org/10.1016/S0006-3207(01)00182-3)

“绿孔雀生活在热带雨林”过于狭窄。云南和中南半岛的核心画面应优先表现季节性河谷、干燥落叶林、疏林与开阔地镶嵌，并保留河流、沙洲或稳定水源。它也会利用次生林和低强度农田边缘，但不能据此把高强度茶园、橡胶园或城市公园写成优质生境。[Kong et al. 2018](https://doi.org/10.1186/s40657-018-0110-0) [Aung et al. 2020](https://www.cambridge.org/core/journals/oryx/article/importance-of-isolated-forest-fragments-and-low-intensity-agriculture-for-the-longterm-conservation-of-the-green-peafowl-pavo-muticus/49711DBBDBAF62F5F77A3D8986AEC5A1)

推荐 `habitats`：

1. `季节性河谷与干燥落叶林`，`isPrimary: true`；
2. `河流、沙洲与湿地边缘疏林`，强调水源和高大夜栖树；
3. `稀树草原、灌丛与草地镶嵌`；
4. `次生林、林缘和低强度传统农田边缘`，注明只有低干扰、邻接自然植被时才可利用。

`metrics.elevationM` 可填 `[0, 2100]`，并在正文注明这是历史和现存记录合并的已知海拔边界，不是最适海拔。

## 外形、体尺与鉴别边界

### 体尺

BirdLife 的鉴别条目给出雄鸟总长 244 厘米、雌鸟总长 100 至 110 厘米。雄鸟总长受繁殖羽尾屏显著影响，不能把 244 厘米理解成头至真正尾端的身体长度。上海自然博物馆馆藏说明也给出雄鸟 240 厘米、雌鸟 110 厘米，可作中文机构交叉核对。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus) [上海自然博物馆](https://www.snhm.org.cn/cpjc/info.htm?eid=589)

| 字段 | 推荐值 | 边界 |
| --- | --- | --- |
| `measurements.length` | 100 至 244 cm | 注明“雌鸟 100 至 110 cm；雄鸟约 244 cm，包含长尾屏”。合并范围只为通过现有 schema 表达两性，不代表连续的典型体长。 |
| `metrics.adultLengthCm` | 不填为佳 | 单一二维范围会把两性和尾屏效应压平，容易被错误排序。若产品必须填写，可用 `[100, 244]`，展示层必须带性别注释。 |
| `measurements.weight` | 不填 | 当前采用的官方评估和一手野外来源没有给出可统一使用的两性范围。 |
| `measurements.wingspan` | 不填 | 同上。 |

### 必须保留的形态

- 成年雄鸟头顶为高而窄、直立的簇状冠羽，不是蓝孔雀宽扇形冠羽。
- 颈、胸和体羽以辉亮绿、蓝绿和铜绿色为主，羽缘形成鳞状视觉；不能画成蓝孔雀式纯钴蓝颈胸。
- 雄鸟翼部多黑褐并带绿色光泽，初级飞羽呈焦糖或栗褐色。
- 雄鸟繁殖期长尾屏布满眼状斑。尾屏是延长的尾上覆羽，真正尾羽负责支撑展示。
- 雌鸟仍有绿色鳞状颈羽和直立冠羽，但整体更暗，没有成年雄鸟的长尾屏；背部和尾部黑褐，带淡黄褐横斑和虫蠹状细纹。
- 幼鸟近似雌鸟。没有证据时不要凭中间羽色强行判断精确年龄。

[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus)

最常见的图像错误是把蓝孔雀 ***Pavo cristatus*** 当成绿孔雀。蓝孔雀雄鸟有醒目的蓝色颈胸和宽扇形冠羽；绿孔雀应保留鳞状绿颈、高窄冠羽和更修长的体态。

## 食性、活动与行为

### 食性

泰国怀卡肯野生动物保护区的野外研究记录绿孔雀取食至少 66 种植物，也吃昆虫和小型脊椎动物。BirdLife 的生境综述还提出，季节性落果可能是开放落叶林的重要食物脉冲。稳健分类是杂食性，不能写成纯植食或专门食虫。[Ponsena 1988](https://li01.tci-thaijo.org/index.php/tjf/article/view/256671) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus)

```ts
diet: {
  types: ['omnivore'],
  foods: ['果实与种子', '嫩芽、草叶和花', '昆虫', '小型脊椎动物'],
  description:
    '主要在地面取食多种植物材料，也捕食昆虫和小型脊椎动物；食谱会随地点和季节变化。',
}
```

### 日活动和夜栖

Ponsena 在 1986 至 1987 年的研究点记录绿孔雀昼行、地面觅食、树上夜栖：约 07:00 开始觅食，10:00 至 10:30 在隐蔽处休息，16:30 再度觅食，18:00 至 19:30 进入河边高树夜栖。产品可概括为“晨间和傍晚觅食较活跃，中午隐蔽休息，夜间树栖”，不要把这些时刻写成跨越所有纬度和季节的固定作息。[Ponsena 1988](https://li01.tci-thaijo.org/index.php/tjf/article/view/256671)

雄鸟在清晨和黄昏常从夜栖树发出远传的 `ki-wao` 领地鸣声，雌鸟可发出 `aow-aa`。叫声有助于低密度种群监测，但一次听到叫声不等于精确计得一只独立个体。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus)

推荐 `activity`：

```ts
activity: [
  '昼行性',
  '晨间与傍晚觅食较活跃',
  '地面觅食',
  '高树夜栖',
  '留居、非迁徙',
  '繁殖期雄鸟鸣叫并在开阔地展示',
]
```

### 社会与警戒行为

绿孔雀可单独或组成小群活动，繁殖系统为一雄多雌型。爪哇野外行为研究观察到雌鸟选择雄鸟，雄鸟在开阔的草地、稀树草原、林间空地或农林镶嵌处展示；不支持把一个雄鸟永久领导一群雌鸟的“固定后宫”画面当作全种行为定律。[Hernowo 2011](https://www.sciencedirect.com/science/article/pii/S1978301916302054)

体型大、主要在地面活动并不代表不能飞。绿孔雀会飞上高树夜栖，也能在受惊时短距离有力飞行。图像不应把它画成长期停在细枝顶端的小型树栖鸟，也不应画成完全丧失飞行能力。

## 繁殖

### 求偶

繁殖期雄鸟在开阔展示场竖起并展开尾屏，眼状斑面朝雌鸟，同时振动尾屏和调整身体朝向。爪哇研究记录展示多发生在清晨和下午，开放场地既给雄鸟提供展开空间，也方便雌鸟观察。画面可以只表现一只展示中的雄鸟；若加入雌鸟，也不应堆叠成固定“后宫”，更不能把蓝孔雀的蓝颈外形套入。[Hernowo 2011](https://www.sciencedirect.com/science/article/pii/S1978301916302054)

### 筑巢、窝卵与孵化

怀卡肯研究点的繁殖季为 11 月至次年 3 月，雌鸟在林下或河边高草丛中的地面筑巢，每窝 2 至 5 枚卵，孵化期 26 至 27 天。[Ponsena 1988](https://li01.tci-thaijo.org/index.php/tjf/article/view/256671)

这些数字的使用边界：

- `clutchSize: 2–5` 可作为有直接野外依据的物种档案范围；
- `incubationDays: 26–27` 可作为展示统计；
- 繁殖月份随纬度、季风和地点改变。缅甸研究记录 1 至 3 月求偶、5 月巢卵和 5 至 8 月幼鸟，说明 11 月至 3 月不是整个分布区唯一繁殖季；
- 地面浅巢应由雌鸟照看。没有同等级证据支持雄鸟参与孵卵，图片不要画雄鸟伏巢；
- 画 4 枚卵落在已记录的 2 至 5 枚范围内，比使用极端端点更稳健。

[Ponsena 1988](https://li01.tci-thaijo.org/index.php/tjf/article/view/256671) [Aung et al. 2020](https://www.cambridge.org/core/journals/oryx/article/importance-of-isolated-forest-fragments-and-low-intensity-agriculture-for-the-longterm-conservation-of-the-green-peafowl-pavo-muticus/49711DBBDBAF62F5F77A3D8986AEC5A1)

## 威胁

### 全球主要威胁

1. **捕猎、套索和采集。** 为肉、活体和尾屏羽捕捉成鸟，采集卵和幼鸟；东南亚低地森林的套索压力尤其严重。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus)
2. **生境丧失、转换和破碎化。** 农业扩张、经济作物种植、定居点扩张、道路和其他基础设施把连续河谷和疏林切成孤立斑块，增加局地灭绝风险。[Kong et al. 2018](https://doi.org/10.1186/s40657-018-0110-0) [Sukumal et al. 2020](https://doi.org/10.1017/S003060531900005X)
3. **农业强化、过度放牧和不当用火。** 低强度传统农地边缘可以被利用，不等于高强度单一经济作物种植无害。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus)
4. **投毒和农药暴露。** 中国部分地区曾因绿孔雀取食作物而投毒，包衣或浸药种子也造成死亡。[Kong et al. 2018](https://doi.org/10.1186/s40657-018-0110-0)
5. **河谷工程和关键生境淹没。** 水电站、采矿和道路可在区域尺度切断或淹没核心河谷栖息地。工程影响需按具体项目环评，不应笼统断言所有水利设施影响相同。[Kong et al. 2018](https://doi.org/10.1186/s40657-018-0110-0)
6. **低遗传多样性和近交。** 历史与现代基因组比较显示近 50 年遗传多样性下降，现存种群近交水平较高；生境廊道和种群连通性具有长期意义。[Dong et al. 2021](https://doi.org/10.1098/rspb.2021.0073)

2025 年研究只在动物园样本中确认绿孔雀与蓝孔雀杂交，尚未在该研究的野外样本中发现杂交个体。可把圈养种群谱系管理列为预防行动，不要把“野外杂交已是云南主要致危因素”列成既定事实。[Gao et al. 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11835448/)

## 保护行动

推荐写入的行动：

- 保护元江中上游等核心河谷、干燥落叶林、水源、展示场和高大夜栖树，并划定跨保护地的廊道；
- 把保护扩大到现有自然保护地之外。2023 年云南官方称三分之二的野生种群在保护地外；
- 以红外相机、固定样线、鸣声调查和长期重复设计监测种群，报告检测概率、年龄结构与不确定性；
- 严格执法，减少偷猎、套索、卵和幼鸟采集、活体及尾屏羽非法交易；
- 在分布区降低毒饵和高风险农药使用，协调社区处理作物取食冲突；
- 评估水电、道路、采矿和农业转换的累积影响，避免淹没或切断核心河谷；
- 修复河谷生境和生态廊道。云南省林草局报告“十四五”期间整合新建绿孔雀栖息地 13.81 万亩；
- 对迁地种群建立遗传谱系、疾病和亚种来源管理。野化放归必须经过遗传、健康、生境承载力和长期监测评估，不能把人工繁育等同于野外种群恢复。

[云南省林草局 2023](https://lcj.yn.gov.cn/html/2023/jianyitianbanli_0526/69006.html) [云南林草“十四五”总结](https://lcj.yn.gov.cn/html/2026/mainnews_0120/76010.html) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus)

## CITES 与 CMS

### CITES

***Pavo muticus*** 列入 CITES 附录 II。附录 II 的核心是让标本、活体及相关制品的国际贸易通过许可和可持续性判断受到控制，不等于全球禁止一切持有、运输或贸易。国内法律可能比 CITES 更严格，产品不要把 CITES 附录和中国国家一级保护混成一个字段。[CITES Checklist](https://checklist.cites.org/) [CITES-listed species database](https://cites.org/eng/node/10288)

### CMS

截至 2026-08-26，2026 年 6 月 27 日生效的 CMS 附录和官方物种表均无 ***Pavo muticus*** 条目。BirdLife 将其列为 `Not a Migrant`。因此可写“CMS：未列入”，不能写“CMS 附录 I/II”。“未列入 CMS”也不代表不需要跨境保护；其分布横跨多个国家，国际协作仍有价值。[CMS Appendices](https://www.cms.int/species/appendix-i-ii-cms) [CMS species list](https://www.cms.int/species) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus)

## 推荐关键事实

1. 绿孔雀不是常见公园蓝孔雀的绿色变型，而是独立物种 ***Pavo muticus***。
2. 中国现存野生绿孔雀仅分布于云南，但该物种并非云南或中国特有。
3. 全球 IUCN 等级是 EN；中国区域红色名录等级是 CR；国家法律保护等级是一级。
4. 全球 10,000 至 19,999 只是低质量的成熟个体估算，不是同步全球普查。
5. 2026 年国家林草局转载的最新监测报道称云南野外种群已超过 1,000 只；2023 年节点为超过 650 只，其中三分之二位于当时的现有自然保护地外。
6. 绿孔雀常在地面觅食，却会飞上河边高树夜栖。
7. 尾屏由延长的尾上覆羽构成，雄鸟约 244 厘米的总长包含尾屏。
8. 泰国野外研究记录每窝 2 至 5 枚卵，孵化 26 至 27 天。
9. 水源、人类干扰和河谷生境完整性共同塑造其局地分布。
10. CITES 附录 II 管理国际贸易；当前 CMS 附录未列入绿孔雀。

## 应删除或避免的说法

- “绿孔雀就是蓝孔雀的绿色品种”或把蓝颈、扇形冠羽的蓝孔雀图当成绿孔雀。
- “孔雀尾巴开屏”；更准确的对象是延长的尾上覆羽形成尾屏。
- “中国野生绿孔雀分布在云南和西藏”；当前可靠调查和官方口径只确认云南。
- “绿孔雀是云南特有种”；它还分布于多个东南亚国家。
- “全球只剩 10,000 只”或“全球恰有 19,999 只”；这是成熟个体粗略区间。
- 把全球成熟个体 10,000 至 19,999 与全球总个体 15,000 至 30,000 混成同一统计。
- 把云南“超过 1,000 只”写成“超过 1,000 只成熟个体”或用它计算中国占全球比例。
- “云南种群从 2018 到 2026 精确增长 X%”；公开资料不足以保证各次数字严格可比。
- “绿孔雀只生活在茂密热带雨林”；当前高密度记录常在近水的干燥落叶林和开放生境。
- “每年固定在 11 月至 3 月繁殖”；这是泰国一处研究地的季节记录。
- “每窝固定 5 枚”或“孵化固定 28 天”；直接野外证据支持 2 至 5 枚、26 至 27 天。
- “雄鸟负责孵卵”或把巢画在树上。
- “CITES 附录 II 等于禁止一切贸易”。
- “绿孔雀列入 CMS 附录 I/II”；当前官方表无该物种。
- “野外蓝绿孔雀杂交已是云南主要威胁”；现有基因组证据中的杂交个体来自动物园。

## 6 幅原创图的科学边界

全组共同锚点：**绿孔雀应有高而窄的直立冠羽、修长颈腿和鳞状辉绿色颈胸；成年雄鸟有眼状斑尾屏，雌鸟无长尾屏。不得出现蓝孔雀式钴蓝颈胸、宽扇形冠羽、额外肢体或畸形尾屏。** 图像是原创示意，不是特定地点的现场记录或种群证据。

| 资产 | 事实目标 | 必须保留 | 拒绝项 |
| --- | --- | --- | --- |
| 01 `01-yunnan-river-valley-male-portrait.webp` | 封面：一只成年雄鸟站在云南季节性河谷或干燥落叶林开阔地，长尾屏自然拖于身后 | 一只完整个体；高窄冠羽、鳞状绿颈、焦糖色初级飞羽、长尾屏眼状斑；背景可见河谷、水源或沙洲线索 | 蓝孔雀蓝颈和扇形冠羽、永久开屏姿势、密闭雨林、游客投喂、额外鸟或多余腿 |
| 02 `02-adult-female-field-marks.webp` | 成年雌鸟鉴别图：无长尾屏，仍保留绿色鳞状颈羽和直立冠羽 | 黑褐上体和尾部的淡黄褐横斑；体型明显短于雄鸟；单鸟全身可见 | 把雌鸟画成纯灰褐家鸡、完全没有绿色颈羽、加雄鸟尾屏、蓝孔雀雌鸟式宽冠羽 |
| 03 `03-seasonal-river-valley-habitat.webp` | 生境宽景：季节性河流、沙洲、干燥落叶林、疏林和草地镶嵌，一只较小的绿孔雀处于远景 | 生境占主体；有可达水源和高大夜栖树；鸟与人类聚落保持距离 | 单一浓密雨林、城市公园、经济作物单一林、无水沙漠、把画面地点当作真实巢址 |
| 04 `04-male-courtship-train-display.webp` | 一只成年雄鸟在开阔展示场竖起并展开尾屏 | 恰好一只完整雄鸟；鳞状绿颈、高窄冠羽、半圆尾屏和可数但不必精确的眼状斑；全身与尾屏都不裁切 | 雌鸟或第二只鸟、蓝孔雀外形、尾屏长在真正尾羽末端、交配接触、畸形或重复眼斑 |
| 05 `05-ground-scrape-and-four-eggs.webp` | 一只雌鸟守在林下或河边高草中的浅地面巢旁，巢中正好 4 枚浅黄褐卵 | 地面浅巢、4 枚卵清晰可数、雌鸟无长尾屏、植被提供隐蔽但不封死视野 | 雄鸟孵卵、树巢或洞巢、蛋数不在 2 至 5 范围、同时出现刚出壳幼鸟和四枚完整卵、研究者靠近巢 |
| 06 `06-distance-riverbank-monitoring.webp` | 远距离监测：一只绿孔雀在河岸开阔地活动，远处一至两名巡护员使用望远镜、相机或固定红外设备记录 | 人鸟之间保留大段空间；不投喂、不追逐、不触碰；河谷和自然植被连续 | 无人机贴近追拍、围观、手持野鸟、投食台特写、展示精确巢址或宣称画中人数代表监测结果 |

图注必须使用“示意画面”“基于物种生态事实创作”等语言，不能声称画面摄于云南某保护区、显示真实野生个体或证明种群增长。巢图不附坐标；监测图不把人工繁育和野化放归混成已经完成的野外恢复。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus) [Ponsena 1988](https://li01.tci-thaijo.org/index.php/tjf/article/view/256671) [云南省林草局 2023](https://lcj.yn.gov.cn/html/2023/jianyitianbanli_0526/69006.html)

## 可直接落库的字段建议

```ts
const createGreenPeafowl = (sources: readonly SpeciesSource[]): Species => ({
  id: 'species-pavo-muticus',
  slug: 'green-peafowl',
  names: {
    zh: '绿孔雀',
    en: 'Green Peafowl',
    aliases: ['綠孔雀', '爪哇孔雀'],
  },
  scientificName: 'Pavo muticus',
  taxonomy: {
    kingdom: { scientificName: 'Animalia', zhName: '动物界' },
    phylum: { scientificName: 'Chordata', zhName: '脊索动物门' },
    class: { scientificName: 'Aves', zhName: '鸟纲' },
    order: { scientificName: 'Galliformes', zhName: '鸡形目' },
    family: { scientificName: 'Phasianidae', zhName: '雉科' },
    genus: { scientificName: 'Pavo', zhName: '孔雀属' },
  },
  conservation: conservation('EN', 'decreasing', 2018, 'A2cd+3cd+4cd'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲'],
    regions: ['中国西南部', '大陆东南亚', '爪哇岛'],
    countries: ['中国', '缅甸', '泰国', '老挝', '柬埔寨', '越南', '印度尼西亚'],
    range:
      '现存野生种群破碎分布于中国云南、缅甸、泰国、老挝、柬埔寨、越南和印度尼西亚爪哇岛；中国现存野生种群仅见于云南中部、西部和南部，以元江中上游为核心。',
  },
  habitats: [
    {
      name: '季节性河谷与干燥落叶林',
      realm: 'terrestrial',
      description: '当前记录最集中的生境，河流、湿地和低人类干扰与较高丰度相关。',
      isPrimary: true,
    },
    {
      name: '河流、沙洲与湿地边缘疏林',
      realm: 'terrestrial',
      description: '提供饮水、地面觅食空间、展示场和附近的高大夜栖树。',
    },
    {
      name: '稀树草原、灌丛与草地镶嵌',
      realm: 'terrestrial',
      description: '开放斑块供觅食和求偶展示，需与自然林及水源保持连通。',
    },
    {
      name: '次生林、林缘和低强度传统农田边缘',
      realm: 'terrestrial',
      description: '部分种群可利用低干扰的人地镶嵌，但高强度经济作物转换会造成生境丧失。',
    },
  ],
  measurements: {
    length: {
      min: 100,
      max: 244,
      unit: 'cm',
      note: '雌鸟 100–110 cm；雄鸟约 244 cm，包含由延长尾上覆羽形成的尾屏。',
    },
  },
  diet: {
    types: ['omnivore'],
    foods: ['果实与种子', '嫩芽、草叶和花', '昆虫', '小型脊椎动物'],
    description:
      '主要在地面取食多种植物材料，也捕食昆虫和小型脊椎动物；食谱随地点和季节变化。',
  },
  activity: [
    '昼行性',
    '晨间与傍晚觅食较活跃',
    '地面觅食',
    '高树夜栖',
    '留居、非迁徙',
    '繁殖期雄鸟鸣叫并在开阔地展示',
  ],
  tags: ['濒危', '国家一级保护', '云南', '河谷', '地栖鸟类', '尾屏', '非迁徙'],
  summary:
    '高窄冠羽和鳞状绿颈让绿孔雀有别于常见蓝孔雀。它在近水的季节性河谷与干燥落叶林中地面觅食、高树夜栖，中国现存野生种群仅见于云南。',
  description:
    '绿孔雀是亚洲大型雉类，现存种群破碎分布于中国云南、东南亚大陆和爪哇。捕猎、投毒、农业转换与河谷生境破碎化推动其长期下降；全球 IUCN 等级为濒危，中国区域红色名录等级为极危。',
  keyFacts: [
    '绿孔雀是独立物种，不是蓝孔雀的绿色变型。',
    '中国现存野生种群仅分布于云南，但该物种不是中国特有种。',
    '雄鸟约 244 厘米的总长包含由尾上覆羽形成的长尾屏。',
    '在地面取食多种植物、昆虫和小型脊椎动物，夜间飞上高树休息。',
    '泰国野外研究记录每窝 2 至 5 枚卵，孵化 26 至 27 天。',
    '2026 年最新官方监测报道称云南野外种群已超过 1,000 只，未注明全部为成熟个体。',
  ],
  threats: [
    '为肉、活体、尾屏羽而捕猎，以及套索、卵和幼鸟采集',
    '农业和经济作物扩张造成的生境丧失与破碎化',
    '投毒、农药包衣种子和人兽冲突',
    '道路、水电、采矿等工程切断或淹没关键河谷',
    '过度放牧、不当用火和高强度人类干扰',
    '小而孤立的种群面临遗传多样性下降和近交风险',
  ],
  conservationActions: [
    '保护元江中上游等核心河谷、水源、展示场和高大夜栖树',
    '在保护地外建设连续栖息地和生态廊道',
    '用红外相机、声纹和重复样线开展可比较的长期监测',
    '打击偷猎、套索及活体和尾屏羽非法交易',
    '减少毒饵和高风险农药，协调社区缓解作物取食冲突',
    '在基础设施审批中评估对核心河谷的直接和累积影响',
    '对迁地和候选放归个体实施遗传、健康与亚种来源管理',
  ],
  metrics: {
    elevationM: [0, 2100],
    estimatedMatureIndividuals: [10000, 19999],
  },
  featuredStats: [
    {
      key: 'global-mature-population',
      label: '全球成熟个体估算',
      value: '10,000–19,999',
      note: 'BirdLife/IUCN 2018；质量 poor，不是同步全球普查。',
    },
    {
      key: 'yunnan-wild-monitoring',
      label: '云南野外监测',
      value: '超过 1,000',
      unit: '只',
      note: '国家林草局 2026 年转载的监测报道；未注明全部为成熟个体，不与全球成熟个体区间直接比较。',
    },
    {
      key: 'adult-length',
      label: '性别分列总长',
      value: '雄约 244；雌 100–110',
      unit: 'cm',
      note: '雄鸟数值包含长尾屏。',
    },
    {
      key: 'clutch-and-incubation',
      label: '窝卵与孵化',
      value: '2–5 枚；26–27 天',
      note: '来自泰国怀卡肯野外研究。',
    },
  ],
  media: {
    image: './images/species/green-peafowl/01-yunnan-river-valley-male-portrait.webp',
    alt: '一只成年雄性绿孔雀站在云南季节性河谷疏林中，鳞状绿色颈羽和长尾屏清晰可见',
    credit: 'AI-generated scientific illustration',
    gallery: [
      {
        image: './images/species/green-peafowl/02-adult-female-field-marks.webp',
        alt: '成年雌性绿孔雀的高窄冠羽、绿色鳞状颈羽和无长尾屏的全身侧视图',
        title: '雌鸟的绿色仍然醒目',
      },
      {
        image: './images/species/green-peafowl/03-seasonal-river-valley-habitat.webp',
        alt: '季节性河流、沙洲、干燥落叶林和草地共同组成的绿孔雀河谷生境',
        title: '河流连接生境要素',
      },
      {
        image: './images/species/green-peafowl/04-male-courtship-train-display.webp',
        alt: '成年雄性绿孔雀在开阔林地向一只雌鸟展开眼状斑尾屏',
        title: '开阔地上的求偶展示',
      },
      {
        image: './images/species/green-peafowl/05-ground-scrape-and-four-eggs.webp',
        alt: '一只雌性绿孔雀守在河边高草中的浅地面巢旁，巢内有四枚卵',
        title: '隐蔽的地面浅巢',
      },
      {
        image: './images/species/green-peafowl/06-distance-riverbank-monitoring.webp',
        alt: '巡护员在远处使用望远镜和监测设备观察河岸上的一只绿孔雀',
        title: '在不干扰的距离监测',
      },
    ],
  },
  sources,
  publishedAt: '2026-08-26',
  updatedAt: '2026-08-26',
});
```

不要填 `metrics.adultMassKg`、`metrics.wingspanCm`、`metrics.lifespanYears` 或 `topSpeedKph`。当前采用的高可信来源不足以支持适合跨物种比较的统一范围。

## 推荐长文结构

1. `identity`：绿孔雀不是蓝孔雀，解释鳞状绿颈、高窄冠羽与尾屏。
2. `river-valley`：水源、干燥落叶林和开阔地如何共同构成核心生境。
3. `daily-rhythm`：地面觅食、高树夜栖、晨昏鸣叫。
4. `courtship-and-nest`：开阔展示场、地面巢、2 至 5 枚卵和 26 至 27 天孵化。
5. `last-wild-populations-in-china`：历史范围收缩到云南，元江中上游是中国核心区。
6. `protection-beyond-reserves`：2023 年节点显示三分之二种群位于当时的保护地外，保护需连接河谷、社区和廊道。

## 推荐来源数组

```ts
const GREEN_PEAFOWL_CONTENT_DATE = '2026-08-26' as const;

const GREEN_PEAFOWL_SOURCES = [
  {
    title: 'IOC World Bird List v15.2: Pheasants',
    url: 'https://www.worldbirdnames.org/new/bow/pheasants/',
    kind: 'taxonomy',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
  {
    title: '《动物学精义·下》：Pavo muticus 历史中文名索引',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/SSID-13209155_%E5%8B%95%E7%89%A9%E5%AD%B8%E7%B2%BE%E7%BE%A9_%E4%B8%8B.pdf',
    kind: 'taxonomy',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
  {
    title: 'BirdLife DataZone: Green Peafowl',
    url: 'https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
  {
    title: 'IUCN Red List assessment: Pavo muticus',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22679440A131749282.en',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
  {
    title: 'Status and distribution changes in China, 1990s–2017',
    url: 'https://doi.org/10.1186/s40657-018-0110-0',
    kind: 'distribution',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
  {
    title: 'Biological characteristics and breeding behaviours in Huai Kha Khaeng',
    url: 'https://li01.tci-thaijo.org/index.php/tjf/article/view/256671',
    kind: 'ecology',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
  {
    title: 'Courtship behaviour in Baluran National Park',
    url: 'https://www.sciencedirect.com/science/article/pii/S1978301916302054',
    kind: 'ecology',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
  {
    title: 'Habitat use in Dak Lak Province, Vietnam',
    url: 'https://doi.org/10.1016/S0006-3207(01)00182-3',
    kind: 'ecology',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
  {
    title: 'Population genomic evidence for anthropogenic decline',
    url: 'https://doi.org/10.1098/rspb.2021.0073',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
  {
    title: '国家重点保护野生动物名录（2021）',
    url: 'https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
  {
    title: '中国生物多样性红色名录·鸟类（2020）',
    url: 'https://sdr.cas.cn/zcgz/gjfg/202306/P020230523325260524862.pdf',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
  {
    title: '云南省林草局：2023 年绿孔雀保护建议答复',
    url: 'https://lcj.yn.gov.cn/html/2023/jianyitianbanli_0526/69006.html',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
  {
    title: '国家林草局：云南系统性保护珍稀濒危物种（2026）',
    url: 'https://www.forestry.gov.cn/lyj/1/dzbhdt/20260818/684856.html',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
  {
    title: 'CITES Checklist of Species',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
  {
    title: 'CMS Appendices I and II, effective 27 June 2026',
    url: 'https://www.cms.int/species/appendix-i-ii-cms',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_CONTENT_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const greenPeafowl = createGreenPeafowl(GREEN_PEAFOWL_SOURCES);
```

## 来源优先级与未采用材料

1. 全球保护状态、趋势、成熟个体、生境和现存国家以 BirdLife/IUCN 为主。
2. 当前分类和亚种以 IOC v15.2 为主，并明确分类口径。
3. 中国法律保护和区域红色名录只采用国家主管部门与生态环境部、中国科学院发布资料。
4. 中国现存数量采用国家林草局 2026 年 8 月转载的最新监测报道，并用云南省林草局 2018、2023 年节点解释时点变化；所有节点保留统计不可比边界。
5. 繁殖、活动和食性优先使用野外研究；地点性季节和时刻不外推成全分布区固定规律。
6. 未采用百科、动物园饲养资料中的体重、翼展、寿命、4 至 8 枚卵或 27 至 30 天孵化等数字，因为来源层级、野生与圈养口径或物种鉴别不足以支撑统一落库。
