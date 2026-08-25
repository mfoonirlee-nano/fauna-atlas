# 亚洲象（_Elephas maximus_）完整物种档案研究

- 检索与核验日期：2026-08-25
- 使用范围：`src/data/species.ts` 的亚洲象条目、详情页长文、数字卡、云南北移故事和 6 张生成图像的内容验收
- 证据标准：分类与范围国优先采用 Mammal Diversity Database（MDD）和 IUCN；全球与中国受威胁状态分别采用 IUCN Red List 与《中国生物多样性红色名录》；法律地位采用 CITES、CMS 和中国政府原文；行为、形态与生态数字采用同行评审原始研究。媒体报道、旅游材料、动物园科普摘要和无样本口径的“常识数字”不进入结构化字段。
- 物种边界：全文的“亚洲象”指 _**Elephas maximus**_。婆罗洲象现按 _E. m. borneensis_ 单独接受 IUCN 亚种评估，但产品仍是种级页面；不能把亚种的评估结果覆盖整个物种。[MDD taxon 1000521](https://www.mammaldiversity.org/taxon/1000521/) [IUCN 2024 Bornean Elephant announcement](https://iucn.org/press-release/202406/bornean-elephant-endangered-iucn-red-list)

## 编辑结论

1. 主名用“亚洲象 / Asian Elephant”，学名用 **_Elephas maximus_ Linnaeus, 1758**。它与非洲草原象同属象科，但分属亚洲象属 _Elephas_ 与非洲象属 _Loxodonta_；不能复制非洲草原象的耳形、背线、鼻端或体型数据。[MDD](https://www.mammaldiversity.org/taxon/1000521/) [Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)
2. 全球 IUCN 字段应为 **EN / decreasing / A2c / assessed 2019**。评估完成于 2019-09-18，正式发表于 2020；`assessedYear` 应记录 2019，而不是 DOI 卷期中的 2020。[IUCN 2020 assessment](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)
3. 中国区域红色名录为 **CR D1**，中国国家重点保护野生动物等级为**一级**。这两项与全球 IUCN EN、CITES 附录 I、CMS 大陆亚种附录 I 分属不同制度，不得合并成一个“保护等级”。[中国生物多样性红色名录：脊椎动物卷 2020](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf) [国家重点保护野生动物名录 2021](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf) [CITES Appendices effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CMS species page](https://www.cms.int/species/elephas-maximus-indicus)
4. 亚洲象分布于 13 个现生范围国，范围严重破碎，从海平面延伸到约 3,000 米。它利用森林、灌丛、草地及次生和农业镶嵌景观，但种植园和重度退化林只属边缘生境。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [MDD](https://www.mammaldiversity.org/taxon/1000521/)
5. 2020 至 2021 年云南事件应写成“一次异常的远距离北移及南返”，不写成每年迁徙。约 500 千米是北移尺度，1,300 多千米是 2021-04-16 后 110 多天的累计曲折行程；数量差异来自事件阶段和队伍分合，原因仍是待检验的多因素假说。[云南省林草局 2021-08-10](https://lcj.yn.gov.cn/html/2021/zuixindongtai_0810/63527.html) [Wang et al. 2021](https://doi.org/10.1016/j.xinn.2021.100142) [Jiang et al. 2023](https://doi.org/10.3390/land12020460)
6. 结构化指标只填有明确口径的 `elevationM: [0, 3000]` 和实验测得的 `topSpeedKph: 25`。体重、肩高保留雌雄分列；头体长、寿命和成熟个体数不为填满 schema 而猜测。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [Larramendi 2016](https://doi.org/10.4202/app.00136.2014) [Hutchinson et al. 2003](https://doi.org/10.1038/422493a)

## 名称与分类

### 推荐名称字段

| 字段             | 推荐值                 | 依据与边界                                                                                                                                                                                                                                                                         |
| ---------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `names.zh`       | `亚洲象`               | 中国红色名录和国家重点保护名录均采用“亚洲象”。[中国红色名录 2020](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf) [国家重点保护名录 2021](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf) |
| `names.en`       | `Asian Elephant`       | MDD 的标准英文名。[MDD](https://www.mammaldiversity.org/taxon/1000521/)                                                                                                                                                                                                            |
| `aliases`        | `['Asiatic Elephant']` | 可保留历史英文别名；不要把 `Indian Elephant` 当全物种同义主名，因为 CMS 用它指大陆亚种 _E. m. indicus_。[MDD](https://www.mammaldiversity.org/taxon/1000521/) [CMS](https://www.cms.int/species/elephas-maximus-indicus)                                                           |
| `scientificName` | `Elephas maximus`      | MDD 接受名，命名者与年份为 Linnaeus, 1758。[MDD](https://www.mammaldiversity.org/taxon/1000521/)                                                                                                                                                                                   |

### 分类图谱

| 层级 | 拉丁名            | 中文名     |
| ---- | ----------------- | ---------- |
| 门   | Chordata          | 脊索动物门 |
| 纲   | Mammalia          | 哺乳纲     |
| 目   | Proboscidea       | 长鼻目     |
| 科   | Elephantidae      | 象科       |
| 属   | _Elephas_         | 亚洲象属   |
| 种   | _Elephas maximus_ | 亚洲象     |

MDD 把 _Elephas_ 处理为只有一个现生种的属，并将模式产地记录为斯里兰卡；这些是分类信息，不表示斯里兰卡是全物种唯一原生地。[MDD](https://www.mammaldiversity.org/taxon/1000521/)

### 亚种边界

2020 年 IUCN 物种评估沿用三个传统亚种：大陆的 _E. m. indicus_、斯里兰卡的指名亚种 _E. m. maximus_、苏门答腊的 _E. m. sumatranus_；评估同时指出婆罗洲种群在遗传和形态上有区别，但当时仍需更完整的全范围形态与遗传研究。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

IUCN 于 2024 年首次把婆罗洲象作为 _E. m. borneensis_ 单独评为 EN。该结论适用于婆罗洲亚种，不能把整个 _E. maximus_ 的 2019 物种评估年或 A2c 标准改掉；产品若将来增加亚种页，再单独建记录。[IUCN 2024](https://iucn.org/press-release/202406/bornean-elephant-endangered-iucn-red-list)

## 全球与中国保护状态

### IUCN 字段

推荐字段是：

```ts
conservation: conservation('EN', 'decreasing', 2019, 'A2c');
```

IUCN 于 2019-09-18 完成评估、2020 年发布。结论为濒危 `EN`、种群趋势下降、标准 `A2c`：按约 25 年代长回看三个世代，即约 75 年，自 1945 年以来依据占有面积缩小和生境质量下降推断种群减少至少 50%。这里的 50% 是标准 A2c 下的推断降幅，不是逐只普查所得的全球精确变化率。[IUCN 2020 assessment PDF](https://www.asesg.org/PDFfiles/Asian%20Elephant%20Red%20List%20Assessment%202020.pdf)

IUCN/SSC 亚洲象专家组截至本次核验仍把 2020 年发布的物种评估列为现行全球评估资源，没有发现更晚的全物种替代评估；2024 年的婆罗洲象评估是亚种层级。[Asian Elephant Specialist Group resources](https://asesg.org/resources.php) [IUCN 2024](https://iucn.org/press-release/202406/bornean-elephant-endangered-iucn-red-list)

### 全球数量与趋势口径

IUCN 汇总的 2018 年野外总数为 **48,323 至 51,680 只**，其中 **4,189 至 6,999 只**来自可靠性存疑、访谈或专家意见型估计；超过 60% 的野生亚洲象位于印度。它既不是 2026 年同步普查，也不是成熟个体数，因此只能作为带年份和方法限制的历史总量卡，不能写入 `estimatedMatureIndividuals`。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

全球趋势为下降，但区域并不同步。IUCN 记录斯里兰卡一些时期的增长、印度部分区域稳定和东南亚多地下降；任何单国增长都不能覆盖全物种趋势，全球 EN 也不能替代地方调查。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

### 中国区域评估与数量

《中国生物多样性红色名录：脊椎动物卷（2020）》将亚洲象列为 **极危 CR，标准 D1**。这是中国境内区域评估，不等于全球 IUCN 将物种改成 CR。[生态环境部 2023 发布的名录 PDF](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)

国家林草局 2024 年称中国野生亚洲象约 **300 至 310 只**；2015 年基于 654 份粪样、6,300 多张照片及样线/访谈资料的研究估计当时为 **221 至 245 只**。两组数字的年份、空间调查和方法不一致，不能直接相减后声称获得精确增长率。[国家林草局 2024](https://www.forestry.gov.cn/c/www/lcdt/547630.jhtml) [Zhang et al. 2015](https://doi.org/10.1371/journal.pone.0124834)

同一国家林草局材料把横跨云南 3 个州、市和 11 个县、市、区的范围称为“亚洲象国家公园创建区”。截至该材料口径，这是创建规划，不是已经正式设立的国家公园；产品应写“拟建/创建区”，不得提前改成“亚洲象国家公园已成立”。[国家林草局 2024](https://www.forestry.gov.cn/c/www/lcdt/547630.jhtml)

### 法律与国际公约

| 工具                         | 当前状态                                                            | 产品写法                                                                                                                                                                                                                                                                                               |
| ---------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 中国国家重点保护野生动物名录 | 一级                                                                | 写“中国国家一级重点保护野生动物”；依据 2021 名录，不称 IUCN 等级。[国家林草局 2021](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf)                                                                                                          |
| 中国《野生动物保护法》       | 2022 年修订文本规定国家重点保护、栖息地保护、猎捕和贸易管理等制度   | 法律页可链接原文；不要把“一级”解释为任何情况下均不得救护、调运或科学管理。[全国人大 2022](https://www.npc.gov.cn/c2/c30834/202212/t20221230_321016.html)                                                                                                                                               |
| CITES                        | 全种附录 I；自 1975 年 7 月起列入附录 I，现行 2026-03-05 附录仍如此 | 写“国际商业贸易受附录 I 严格管制”；附录 I 不是 IUCN 状态，也不等于所有跨境移动绝对禁止。[CITES current appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CITES SC58 historical summary](https://cites.org/sites/default/files/eng/com/sc/58/E58-36-1A2.pdf) |
| CMS                          | _E. m. indicus_ 附录 I，自 2020-05-22 生效                          | 明确只覆盖大陆/印度亚种的 CMS 列名，不把斯里兰卡、苏门答腊和婆罗洲亚种一并写成 CMS 附录 I。[CMS species page](https://www.cms.int/species/elephas-maximus-indicus) [CMS COP13 amendments](https://www.cms.int/news/2020003-amendments-appendices-convention)                                           |

## 分布、海拔和地图边界

### 现生范围国

MDD 与 IUCN 支持 13 个现生原生范围国：**孟加拉国、不丹、柬埔寨、中国、印度、印度尼西亚、老挝、马来西亚、缅甸、尼泊尔、斯里兰卡、泰国、越南**；IUCN 将巴基斯坦列为区域灭绝。国家清单应完整列出 13 国，不把“中国云南”当成独立范围国。[MDD](https://www.mammaldiversity.org/taxon/1000521/) [IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

现存范围约 **486,800 平方千米**，而且高度破碎。该数字是 IUCN 汇总的分布范围口径，不等同基于最外点凸包计算的 EOO，也不能表示每平方千米都由象占据。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

### 产品区域和地图

推荐 `regions` 用生态地理带而非重复国家：南亚东北部、喜马拉雅南麓与东北印度、印度中部西北部与南部、中南半岛、中国云南南部、斯里兰卡、苏门答腊、婆罗洲东北部。`center: { lat: 18, lng: 96 }` 只作地图初始视窗；亚洲象不是围绕该点连续分布。[MDD](https://www.mammaldiversity.org/taxon/1000521/) [IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

海拔范围可记录为 **0 至 3,000 米**。这是全物种范围上限，不表示高海拔是所有种群的主要生境，也不能把中国云南页面收窄成单一海拔带。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

### 移动不是全物种固定迁徙

亚洲象在家域内长距离移动，可表现季节性位移、边境穿越和对食物、水及风险的响应；不同地点、性别和干扰水平下家域差异很大。IUCN 汇总的局地研究从斯里兰卡约 34 至 400 平方千米到印度雌性氏族约 550 至 700 平方千米，足以说明没有一个可硬编码的“亚洲象家域大小”。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

产品活动标签宜写“家域内高移动、部分种群有季节位移”，不写“所有象群沿固定路线迁徙”。云南 2020 至 2021 年事件另作个案故事，不用它定义整个物种的正常迁徙周期。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [Jiang et al. 2023](https://doi.org/10.3390/land12020460)

## 生境

IUCN 将天然主要生境列为热带、亚热带干旱林，湿润低地林，湿润山地林，干燥或湿润灌丛，干燥草地，以及季节湿润或洪泛草地。产品应把亚洲象写成利用**森林与开阔生境镶嵌**的陆生巨型植食者，而不是只住雨林或只住草原。[IUCN 2020 assessment PDF](https://www.asesg.org/PDFfiles/Asian%20Elephant%20Red%20List%20Assessment%202020.pdf)

可落地为三组 habitat：

1. **热带与亚热带森林镶嵌，primary**：常绿、半常绿、湿润和干燥落叶林、山地林及林缘；这些类型提供浏览植物、果实、遮阴与移动通道。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)
2. **草地、灌丛与河谷泛洪地，primary**：草地和灌丛可提供季节性高质量食物，河谷及湿地边缘用于饮水和移动；亚洲象仍属 `terrestrial`，不增加 `freshwater` realm。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)
3. **次生林与农业、种植园镶嵌，非 primary**：象会进入茶园、橡胶园、农田和聚落边缘，但使用不等于这些景观能替代连通的天然生境。IUCN 将种植园和重度退化林列为边缘生境；印度茶园研究也显示象白天更偏自然植被、夜间更常进入人类使用区。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [Kumar et al. 2010](https://doi.org/10.1177/194008291000300203)

## 形态、测量与寿命

### 与非洲象的组合式区别

亚洲象典型外形是：头部为全身最高点，额顶有前后压缩的双隆起，额面中央略凹；背线多较平或隆起；耳较小，成年耳上缘向外折；鼻端只有一个指状突；前足通常 5 个、后足通常 4 个甲状趾甲。象牙主要见于雄性，雌性通常无大象牙。任何单一特征都可能受年龄、性别、姿态和画面遮挡影响，图像验收应看组合。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)

非洲草原象常见的大扇耳、较凹背线和鼻端两个指状突不能移植给亚洲象。亚洲象皮肤多为灰色，鼻、耳和面部可有粉色至浅色的失色斑；幼象体毛较明显。这些识别线索也不能据单张低清照片判定亚种或产地。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)

### 可辩护的成体测量

Larramendi 依据标本和体积模型给出良好发育、完全长成亚洲象的 90% 常见范围：雄性肩高 **2.61 至 2.89 米**、体重 **3.5 至 4.6 吨**，平均约 **2.75 米、4.0 吨**；雌性肩高 **2.28 至 2.52 米**、体重 **2.3 至 3.1 吨**，平均约 **2.40 米、2.7 吨**。这组数据适合展示性二型，不代表任意成年年龄段都已达到该体型。[Larramendi 2016, Table 8](https://doi.org/10.4202/app.00136.2014)

同一研究汇总的历史最大雄性约肩高 3.30 至 3.44 米、6.4 至 7.1 吨，最大雌性约 2.88 至 3.00 米、4.3 至 4.8 吨；它们是记录级极端，不能写成普通成体上限。[Larramendi 2016](https://doi.org/10.4202/app.00136.2014)

推荐 `measurements.height` 合并为 2.28 至 2.89 米、`measurements.weight` 合并为 2.3 至 4.6 吨，并在 note 中分列雌雄；`metrics.adultMassKg` 不填，因为单一连续区间会掩盖性别和“完全长成”的样本口径。[Larramendi 2016](https://doi.org/10.4202/app.00136.2014)

早期物种专论给出包含鼻的体长 5.5 至 6.5 米、尾长 1.2 至 1.5 米，但定义与现代产品的 `adultLengthCm` 不完全相同；若 schema 未规定是否含鼻和尾，宁可留空，不能拿来与其他物种的头体长排序。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)

### 速度与寿命边界

实验视频分析中的亚洲象最快达到 **6.8 米/秒，约 25 千米/小时**；样本包含受训个体，研究讨论的是高速步态是否构成“跑”，不是野生象日常巡航速度。`topSpeedKph: 25` 可以保留，但注释必须写“实验最高测得值”。[Hutchinson et al. 2003](https://doi.org/10.1038/422493a)

IUCN 概括亚洲象寿命可达约 60 至 70 年，但该表述不足以区分野外期望寿命、圈养寿命和潜在最大寿命。`metrics.lifespanYears` 应留空；正文可写“潜在寿命可达约 60 至 70 年”，不把它画成年龄分布区间。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

## 食性与觅食

亚洲象是后肠发酵的广食性植食者，在草食与浏览之间随地点和季节切换。食物可包括禾草、莎草、竹类、叶和嫩枝、树皮、根、果实，以及进入人类景观后取食的稻、玉米、甘蔗等作物；作物不是应主动提供的“自然主食”。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

印度南部野外研究记录 112 种取食植物，其中约 85% 食物来自 25 种；干季较多浏览，雨季初草类增加。它证明食谱宽、主食集中且季节切换明显，只能代表该研究地，不能把“112 种”写成每只亚洲象的固定菜单。[Sukumar 1990](https://doi.org/10.1017/S0266467400004004)

斯里兰卡局地研究记录每日约 17 至 19 小时用于采食，并估算约 150 千克鲜植物。鲜重受体型、含水量、季节和方法影响，产品不应设置“每只每天固定吃 150 千克”的跨范围数字卡；可在故事中带地点限定解释高采食投入。[Vancuylenberg 1977](<https://doi.org/10.1016/0006-3207(77)90056-8>)

推荐食性字段：

```ts
diet: {
  types: ['herbivore'],
  foods: ['禾草和莎草', '竹类', '叶与嫩枝', '树皮与根', '野生果实', '进入农地后取食的作物'],
  description:
    '后肠发酵的混合型植食者，随生境和季节在草食与浏览之间调整；在破碎景观中可能进入农田取食作物。',
}
```

## 活动、社会结构与交流

亚洲象昼夜均可活动，节律会随温度、食物、水和人类风险改变。印度茶园景观中，象白天更常使用自然植被，夜间进入茶园和开阔人类景观的概率较高；这支持行为可塑性，不支持给全物种贴固定“夜行性”标签。[Kumar et al. 2010](https://doi.org/10.1177/194008291000300203)

成年雌性和幼象构成以亲缘为基础的裂变—融合社会。斯里兰卡 20 个月内对 286 只成年雌性的网络研究发现，短时看到的小群并不等于社会关系短暂；个体可分开、重聚，并保留稳定的长期同伴。产品不应画成一支全年不分离、由单一“女王”固定领队的队伍。[de Silva et al. 2011](https://doi.org/10.1186/1472-6785-11-17)

雄性在青春期后离开出生群，成年阶段可独行，也可形成松散、可变的雄性关系；繁殖期的 musth 是带有内分泌、颞腺分泌和尿液滴流等特征的生殖状态，不是“疯狂暴怒”的同义词。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [Srinivasaiah et al. 2013](https://doi.org/10.1016/j.anbehav.2013.09.022)

推荐 `activity`：

```ts
activity: [
  '全天可活动，节律随食物、水、气温和人类风险改变',
  '雌性亲族形成裂变—融合社会单元',
  '雄性青春期离开出生群，成年后可独行或形成松散雄性关系',
  '在家域内高移动，部分种群有季节位移',
];
```

## 繁殖与育幼

对 15 头亚洲象和 2 头非洲象的内分泌与超声追踪显示，象类妊娠约 **620 至 680 天**，即约 22 个月；通常单胎，双胎少于 1%。这是圈养条件下的生理研究，适合支持妊娠长度和双胎稀少，不代表每胎恰好同一天数。[Lueders et al. 2012](https://doi.org/10.1098/rspb.2012.1038)

斯里兰卡 Uda Walawe 长期个体识别研究得到当地雌性平均初次繁殖年龄 **13.4 岁**、产仔间隔中位数约 **6 年**，记录的繁殖年龄约 11 至 60 岁；出生在当地 5 月附近较集中。这些是一个种群的生命史参数，不能硬编码成全范围普遍年龄和季节。[de Silva et al. 2013](https://doi.org/10.1371/journal.pone.0082788)

IUCN 综合资料给出雌性通常 13 至 16 岁首次产仔，最早约 11 岁；最短产仔间隔约 4 至 5 年，资源和环境压力可延长到 6 年以上。页面可用区间解释缓慢繁殖和恢复滞后，但数字卡应优先用有明确实验口径的 620 至 680 天妊娠。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

幼象由母亲照料，母系社会中的其他雌性也可参与护幼和社会学习；不应在图中放置成年雄象长期充当核心家庭守护者，或默认每次出现双胞胎。[de Silva et al. 2011](https://doi.org/10.1186/1472-6785-11-17) [Lueders et al. 2012](https://doi.org/10.1098/rspb.2012.1038)

## 云南 2020 至 2021 年北移事件

### 可核验的时间线

- 2020 年 3 月，象群离开西双版纳国家级自然保护区原栖息地；2020 年 7 月进入普洱市。2021-04-16 从墨江进入玉溪元江后，事件进入连续高强度监测阶段。[云南省林草局 2021-08-10](https://lcj.yn.gov.cn/html/2021/zuixindongtai_0810/63527.html)
- 从 2021-04-16 起的 110 多天里，象群途经 3 个州、市的 8 个县、市、区，累计曲折行进 **1,300 多千米**。这个数字是路线累计，不是起点到终点的直线位移。[云南省林草局 2021-08-10](https://lcj.yn.gov.cn/html/2021/zuixindongtai_0810/63527.html)
- 科学论文把从原栖息地到北端的移动尺度概括为 **500 多千米**，最北到昆明晋宁一带，随后转向南返。它与 1,300 多千米可以同时成立，因为测量对象不同。[Wang et al. 2021](https://doi.org/10.1016/j.xinn.2021.100142) [Jiang et al. 2023](https://doi.org/10.3390/land12020460)
- 2021-08-08 20:08，14 头象安全渡过元江南下；另有 1 头离群亚成年雄象已于 2021-07-07 回到西双版纳保护区活动，官方据此称北移的 15 头全部安全南返，全程无人象伤亡。[云南省林草局 2021-08-10](https://lcj.yn.gov.cn/html/2021/zuixindongtai_0810/63527.html)

### 为什么有 15 头与 17 头两种说法

官方安全管理通报以持续监测的 15 头北移个体为行动口径。路线重建研究则把墨江阶段描述为 17 头出发、2 头较早折返、15 头继续北上。两者对应不同时间截面和队伍分合，不应选一个数字后指控另一个“错误”；静态图也不需要强行画出精确数量。[云南省林草局 2021](https://lcj.yn.gov.cn/html/2021/zuixindongtai_0810/63527.html) [Jiang et al. 2023](https://doi.org/10.3390/land12020460)

### 原因仍未定论

同行评审评论提出食物短缺、种群增长、生境退化，以及 2019 至 2020 年偏热偏旱的共同作用；遥感路线研究发现 2005 至 2019 年研究区橡胶园增加 91.1%、茶园增加 120.1%，并讨论土地利用与食物格局的可能关联。这些是机制假说和空间相关，不是对单一动因的直接实验检验。[Wang et al. 2021](https://doi.org/10.1016/j.xinn.2021.100142) [Jiang et al. 2023](https://doi.org/10.3390/land12020460)

页面不得写“象群迷路”“寻找新家园”“因为保护成功而人口过多被迫迁徙”或“已经证明由干旱造成”。推荐措辞是：“这次异常远距离北移很可能涉及食物、生境、天气、种群动态和路径决策的共同作用，现有研究尚不能锁定单一原因。”[Wang et al. 2021](https://doi.org/10.1016/j.xinn.2021.100142) [Jiang et al. 2023](https://doi.org/10.3390/land12020460)

### 应急管理可复用的部分

云南行动采用 24 小时地面与无人机监测、交通管控、人员疏散、道路预警与阻隔、定向辅助引导、保险理赔等组合措施，行动原则概括为“盯象、管人、助迁、理赔”。生态环境部回顾记录约 2.5 万人次参与、无人机监测 973 架次、疏散 15 万多人次、投放约 180 吨食物并受理 1,501 起损失申报；这些是该事件的应急投入，不是每次冲突的标准剂量。[云南省林草局 2021](https://lcj.yn.gov.cn/html/2021/zuixindongtai_0810/63527.html) [生态环境部 2022 回顾](https://www.mee.gov.cn/ywgz/zrstbh/swdyxbh/202212/t20221206_1007073.shtml)

可迁移到产品保护行动的是：建立连续预警和现场指挥，先隔离人员与交通，保持象群可退出空间，及时补偿损失，并根据监测调整措施。紧急投食属于特定风险条件下的引导工具，不能常态化为吸引象群靠近居民点的“喂养保护”。[云南省林草局 2021](https://lcj.yn.gov.cn/html/2021/zuixindongtai_0810/63527.html) [国家林草局 2024 云南地方标准](https://www.forestry.gov.cn/c/www/lcdt/547630.jhtml)

## 生态作用

亚洲象吞食果实后能远距离携带种子。斯里兰卡和缅甸数据建立的模型估计平均种子滞留时间 39.5 小时、最大 114 小时，约一半种子可被带离 1.2 千米以上，模型最大距离为 5.772 千米；季节和地点差异主要由象的移动改变，而不是简单由食物名单决定。这是两地数据与模型结果，不是每粒种子的固定距离。[Campos-Arceiz et al. 2008](https://doi.org/10.1890/07-1573.1)

一项对 1,200 粒五桠果 _Dillenia indica_ 种子的实验发现，经亚洲象消化道排出的种子更可能且更早萌发，但该植物并非只能依赖象传播。产品可称亚洲象是重要长距离种子传播者，不称所有森林都“离开象便无法更新”。[Harich et al. 2016](https://doi.org/10.1016/j.actao.2016.10.005)

亚洲象还通过折枝、剥皮、踩踏、开辟通道和选择性取食改变植被结构。研究综述把亚洲象和非洲象称为“巨型园丁”，但这些工程作用会随象密度、植物群落、土壤和人类干扰而变，对不同物种可产生不同结果；图文应使用“重塑生态过程”，不要写成所有扰动都在单向造福生物多样性。[Campos-Arceiz and Blake 2011](https://doi.org/10.1016/j.actao.2011.01.014)

## 威胁

### 生境丧失、破碎与连通性下降

农业扩张、橡胶和茶等种植园、聚落、采矿以及道路、铁路、运河和电力设施共同压缩并切割生境。中国遗传与相机资料显示云南种群分为多个群组，橡胶、茶、农作物和村庄扩张加重破碎化，也支持建设廊道和中老跨境合作。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [Zhang et al. 2015](https://doi.org/10.1371/journal.pone.0124834)

基础设施不只占地，还会形成死亡和行为屏障。产品不宜只写“砍伐森林”，应把路线规划、交通速度、电网、围栏和跨境连通纳入同一景观问题。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [Siem Reap Declaration 2025](https://www.asesg.org/images/2025%20Seam%20Reap%20Declaration.pdf)

### 人象冲突及死亡

IUCN 将人象冲突视为当前亚洲象人为死亡的首要来源；作物损失、财产破坏和人员伤亡可引发报复性杀死，碎片化又让象更常经过农地和居民区。不能把冲突写成“象入侵人类领地”或只归咎于当地居民。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

### 盗猎和非法贸易

象牙盗猎对有牙雄性形成选择压力，亚洲象还受到皮、肉、尾毛、其他身体部位和活体幼象非法贸易威胁。只画“反象牙盗猎”会漏掉东南亚皮张和活体贸易；CITES 附录 I 管制需要与国内执法、市场调查和跨境信息共享配合。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [Siem Reap Declaration 2025](https://www.asesg.org/images/2025%20Seam%20Reap%20Declaration.pdf)

### 退化、干扰和气候压力

入侵植物、牲畜放牧和反复干扰可降低食物质量；降雨与温度变化会改变水、食物和移动条件，并可能放大冲突。现有证据不足以把气候变化写成已量化的唯一全球下降主因，应放在与土地利用相互作用的风险框架内。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [Wang et al. 2021](https://doi.org/10.1016/j.xinn.2021.100142)

## 保护行动与操作指标

2025 年 13 个范围国通过《暹粒亚洲象保护宣言》，承诺加强跨境协作、国家行动计划、大尺度景观连通、对野生动物更友好的线性基础设施、非法贸易执法、标准化数据共享及社区共存。它提供行动方向，不代表每项承诺已在每个国家完成。[IUCN 2025 announcement](https://iucn.org/press-release/202502/fourth-asian-elephant-range-states-meeting-concludes-launch-declaration-asian) [Siem Reap Declaration](https://www.asesg.org/images/2025%20Seam%20Reap%20Declaration.pdf)

推荐把保护行动写成可审计任务：

1. **保护核心生境并恢复廊道**：把保护区、季节资源地和跨境连接纳入土地利用规划；中国侧优先检验云南种群间及中老边境连通性。指标包括有效生境面积、廊道使用、关键瓶颈和土地用途变化，而不只统计植树株数。[Zhang et al. 2015](https://doi.org/10.1371/journal.pone.0124834) [Siem Reap Declaration 2025](https://www.asesg.org/images/2025%20Seam%20Reap%20Declaration.pdf)
2. **让线性基础设施可穿越、可预警**：在道路、铁路、运河、电网和围栏项目中开展前置路线评估，设置适地通道、限速与预警，持续核验象是否真正使用。单座通道不等于整条景观已经连通。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [Siem Reap Declaration 2025](https://www.asesg.org/images/2025%20Seam%20Reap%20Declaration.pdf)
3. **标准化数量与移动监测**：组合粪便遗传、相机、样线、无人机和个体识别，并公布年份、覆盖范围、检测概率和不确定性；国家数据库应允许跨境共享。指标是可重复估计和趋势精度，不是无人机架次数量。[Zhang et al. 2015](https://doi.org/10.1371/journal.pone.0124834) [Siem Reap Declaration 2025](https://www.asesg.org/images/2025%20Seam%20Reap%20Declaration.pdf)
4. **按本地成因管理冲突**：建立风险图、社区预警、现场隔离、快速理赔和效果评估；高风险移动时可升级为 24 小时监测与交通管制。蜂箱、辣椒、围栏、投食或迁地转移都不能脱离地点评估后宣传为万能方案。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [云南省林草局 2021](https://lcj.yn.gov.cn/html/2021/zuixindongtai_0810/63527.html)
5. **打击象牙、皮张和活体非法贸易**：加强产地、运输、网络市场和边境执法，记录没收物来源并支持跨国案件协作；同时避免把合法救护调运与非法活体贸易混为一谈。[CITES current appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [Siem Reap Declaration 2025](https://www.asesg.org/images/2025%20Seam%20Reap%20Declaration.pdf)
6. **把云南地方标准转为现场流程**：云南 5 项地方标准自 2024-02-23 实施，涉及栖息地修复、救护康复饲养、野化训练、食源地建设和动态预警。产品可链接标准体系，但不能宣称这些标准已经解决所有中国人象冲突。[国家林草局 2024](https://www.forestry.gov.cn/c/www/lcdt/547630.jhtml)

## 六个故事角度

### 1. 同属象科，不是“缩小版非洲象”

从 _Elephas_ 与 _Loxodonta_ 的属级分化切入，用双隆额顶、小耳、较平或隆起背线、鼻端一个指状突和雌性通常无大牙组成识别组合。故事应解释共同祖先下的不同形态，不把耳朵大小写成唯一鉴定钥匙。[MDD](https://www.mammaldiversity.org/taxon/1000521/) [Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)

### 2. 一张破碎的亚洲地图

13 个范围国不构成连续色块，现存范围约 486,800 平方千米，核心问题是森林、草地和农业镶嵌中的断裂。故事可让地图从国家边界切换为核心生境、瓶颈、跨境廊道和线性基础设施。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [Siem Reap Declaration 2025](https://www.asesg.org/images/2025%20Seam%20Reap%20Declaration.pdf)

### 3. 一头后肠发酵的“巨型园丁”

亚洲象在草食与浏览之间切换，吞下果实后可把部分种子带过千米尺度，并通过折枝和踩踏改变植被。叙事必须保留地点、模型和情境边界，不把每次破坏作物或树木都浪漫化为生态服务。[Sukumar 1990](https://doi.org/10.1017/S0266467400004004) [Campos-Arceiz et al. 2008](https://doi.org/10.1890/07-1573.1) [Campos-Arceiz and Blake 2011](https://doi.org/10.1016/j.actao.2011.01.014)

### 4. 看似小群，背后是长期社会网络

从短时照片里的两三只象转到 20 个月内追踪的 286 只成年雌性：群体会分开、重聚，稳定关系不一定在每次观察中同时出现；雄性离群后也并非一律孤独。妊娠近 22 个月和多年产仔间隔解释了种群为何难以快速补回损失。[de Silva et al. 2011](https://doi.org/10.1186/1472-6785-11-17) [de Silva et al. 2013](https://doi.org/10.1371/journal.pone.0082788) [Lueders et al. 2012](https://doi.org/10.1098/rspb.2012.1038)

### 5. 云南北移：知道路线，不等于知道动机

以 2020 至 2021 年时间线、500 多千米北移尺度、1,300 多千米曲折路径和 15/17 头阶段口径说明证据如何被建立。结尾转向“不知道什么”：土地利用、食物、天气和种群动态都可能参与，但目前不能把任一假说当确定答案。[云南省林草局 2021](https://lcj.yn.gov.cn/html/2021/zuixindongtai_0810/63527.html) [Wang et al. 2021](https://doi.org/10.1016/j.xinn.2021.100142) [Jiang et al. 2023](https://doi.org/10.3390/land12020460)

### 6. 共存不是一圈围栏

用云南应急行动连接到范围国宣言：监测、管人、保留退出空间、补偿、廊道、基础设施改造和跨境执法必须共同运行。故事不推销单一驱赶技术，改为展示每项措施怎样用事故率、响应时间、廊道使用和社区损失来复核。[云南省林草局 2021](https://lcj.yn.gov.cn/html/2021/zuixindongtai_0810/63527.html) [Siem Reap Declaration 2025](https://www.asesg.org/images/2025%20Seam%20Reap%20Declaration.pdf)

## 可稳定展示的指标

| 指标             | 推荐显示                             | 口径                                                                                                                                                            |
| ---------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 全球状态         | EN，下降，A2c                        | 2019-09-18 完成评估，2020 发布。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)                                                      |
| 三世代降幅       | 至少 50%                             | 约 75 年，自 1945 年起，依据占有面积和生境质量推断。[IUCN assessment PDF](https://www.asesg.org/PDFfiles/Asian%20Elephant%20Red%20List%20Assessment%202020.pdf) |
| 2018 野外总数    | 48,323 至 51,680                     | 含 4,189 至 6,999 只可靠性存疑估计；不是成熟个体数。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)                                  |
| 完全长成平均体型 | 雌 2.40 m / 2.7 t；雄 2.75 m / 4.0 t | 标本与体积模型的性别平均，不是极值。[Larramendi 2016](https://doi.org/10.4202/app.00136.2014)                                                                   |
| 妊娠             | 620 至 680 天                        | 约 22 个月，圈养象内分泌和超声追踪。[Lueders et al. 2012](https://doi.org/10.1098/rspb.2012.1038)                                                               |
| 海拔             | 0 至 3,000 m                         | 全物种分布上限。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)                                                                      |
| 最高测得速度     | 25 km/h                              | 受训亚洲象实验最高 6.8 m/s，非日常速度。[Hutchinson et al. 2003](https://doi.org/10.1038/422493a)                                                               |

## 不应写入产品的说法

- 不把亚洲象写成“印度象”；`Indian Elephant` 在 CMS 语境指大陆亚种，不覆盖整个物种。[CMS](https://www.cms.int/species/elephas-maximus-indicus)
- 不把婆罗洲象亚种 EN 当成全物种的新评估，也不自行断言亚种数量永远固定为三个或四个。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [IUCN 2024](https://iucn.org/press-release/202406/bornean-elephant-endangered-iucn-red-list)
- 不把中国 CR D1、全球 EN A2c、国家一级、CITES 附录 I 和 CMS 附录 I 合并成一套等级。[中国红色名录](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf) [CITES](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CMS](https://www.cms.int/species/elephas-maximus-indicus)
- 不写全球仍有“约五万头成熟个体”；48,323 至 51,680 是 2018 野外总个体估计，且含低可靠性部分。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)
- 不根据中国 221 至 245 与 300 至 310 两个异质估计计算精确增长百分比。[Zhang et al. 2015](https://doi.org/10.1371/journal.pone.0124834) [国家林草局 2024](https://www.forestry.gov.cn/c/www/lcdt/547630.jhtml)
- 不写亚洲象只住热带雨林，也不把茶园、橡胶园和农田使用解释为替代生境成功。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [Kumar et al. 2010](https://doi.org/10.1177/194008291000300203)
- 不写所有亚洲象固定季节迁徙；用“高移动、部分种群有季节位移”。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)
- 不把成年雄性画成母幼群的常驻首领，也不写雄象全都独居。[de Silva et al. 2011](https://doi.org/10.1186/1472-6785-11-17) [IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)
- 不把 musth 翻成“疯狂期”，也不以颞腺分泌自动证明攻击行为。[Srinivasaiah et al. 2013](https://doi.org/10.1016/j.anbehav.2013.09.022)
- 不写每头每天固定吃 150 千克或固定采食 18 小时；这些是有地点和方法限制的局地观测。[Vancuylenberg 1977](<https://doi.org/10.1016/0006-3207(77)90056-8>)
- 不把潜在 60 至 70 年寿命写成野外平均寿命区间。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)
- 不把 500 千米和 1,300 千米当互相矛盾：前者描述北移尺度，后者描述累计曲折路线。[云南省林草局 2021](https://lcj.yn.gov.cn/html/2021/zuixindongtai_0810/63527.html) [Jiang et al. 2023](https://doi.org/10.3390/land12020460)
- 不把云南事件称为已证实的迷路、找家、保护成功后外溢或固定年度迁徙。[Wang et al. 2021](https://doi.org/10.1016/j.xinn.2021.100142) [Jiang et al. 2023](https://doi.org/10.3390/land12020460)
- 不把每头亚洲象都画成有两根巨大象牙；雌性通常无大牙，雄性也可无牙或牙较短。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)
- 不画非洲象式大扇耳、凹背或鼻端两个指状突。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)

## 核心数据字段草案

下列结构按现有 schema 编写。状态来自 IUCN，范围和生境来自 MDD/IUCN，测量来自 Larramendi，速度来自 Hutchinson；云南事件不塞入稳定分类字段，而放入 `storySections`。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en) [MDD](https://www.mammaldiversity.org/taxon/1000521/) [Larramendi 2016](https://doi.org/10.4202/app.00136.2014) [Hutchinson et al. 2003](https://doi.org/10.1038/422493a)

```ts
{
  id: 'species-elephas-maximus',
  slug: 'asian-elephant',
  names: {
    zh: '亚洲象',
    en: 'Asian Elephant',
    aliases: ['Asiatic Elephant'],
  },
  scientificName: 'Elephas maximus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Proboscidea', '长鼻目'),
    taxon('Elephantidae', '象科'),
    taxon('Elephas', '亚洲象属'),
  ),
  conservation: conservation('EN', 'decreasing', 2019, 'A2c'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲'],
    regions: [
      '南亚东北部',
      '喜马拉雅南麓与东北印度',
      '印度中部、西北部与南部',
      '中南半岛',
      '中国云南南部',
      '斯里兰卡',
      '苏门答腊',
      '婆罗洲东北部',
    ],
    countries: [
      '孟加拉国', '不丹', '柬埔寨', '中国', '印度', '印度尼西亚', '老挝',
      '马来西亚', '缅甸', '尼泊尔', '斯里兰卡', '泰国', '越南',
    ],
    range:
      '现存于南亚、东南亚和中国云南南部的 13 个范围国，分布高度破碎，约从海平面至 3,000 米；利用森林、灌丛、草地及其与农业景观的镶嵌。',
    center: { lat: 18, lng: 96 },
  },
  habitats: [
    {
      name: '热带与亚热带森林镶嵌',
      realm: 'terrestrial',
      description:
        '包括常绿、半常绿、湿润和干燥落叶林、低地林与山地林，以及相连的林缘。',
      isPrimary: true,
    },
    {
      name: '草地、灌丛与河谷泛洪地',
      realm: 'terrestrial',
      description:
        '季节性草地、干湿灌丛、洪泛草地和河谷边缘提供草本、浏览植物、水和移动空间。',
      isPrimary: true,
    },
    {
      name: '次生林与农业、种植园镶嵌',
      realm: 'terrestrial',
      description:
        '亚洲象会利用次生植被并进入茶园、橡胶园和农田，但这些边缘生境不能替代连通的天然生境。',
    },
  ],
  measurements: {
    height: {
      min: 2.28,
      max: 2.89,
      unit: 'm',
      note: '良好发育、完全长成个体的约 90% 范围；雌 2.28 至 2.52 m，雄 2.61 至 2.89 m',
    },
    weight: {
      min: 2.3,
      max: 4.6,
      unit: 't',
      note: '良好发育、完全长成个体的约 90% 范围；雌 2.3 至 3.1 t，雄 3.5 至 4.6 t',
    },
  },
  diet: {
    types: ['herbivore'],
    foods: ['禾草和莎草', '竹类', '叶与嫩枝', '树皮与根', '野生果实', '进入农地后取食的作物'],
    description:
      '后肠发酵的混合型植食者，随生境和季节在草食与浏览之间调整；在破碎景观中可能进入农田取食作物。',
  },
  activity: [
    '全天可活动，节律随食物、水、气温和人类风险改变',
    '雌性亲族形成裂变—融合社会单元',
    '雄性青春期离开出生群，成年后可独行或形成松散雄性关系',
    '在家域内高移动，部分种群有季节位移',
  ],
  tags: ['亚洲', '象科', '森林镶嵌', '裂变融合社会', '长距离种子传播', '人象共存', 'CITES 附录 I'],
  summary:
    '分布在亚洲 13 个国家的濒危巨型植食者，以双隆额顶、小耳和鼻端单一指状突区别于非洲象。雌性亲族形成裂变—融合社会，现存范围因生境破碎、人象冲突和非法贸易持续承压。',
  description:
    '亚洲象生活在从低地森林、落叶林到灌丛和草地的镶嵌景观中。它们随季节在草食和浏览间切换，并通过远距离种子传播、折枝和踩踏重塑植被。雌性和幼象维持长期但会分合的社会关系，成年雄性可独行或形成松散关系。全球 IUCN 状态为濒危且趋势下降；保护重点是核心生境、廊道、人象共存、线性基础设施改造及跨境非法贸易执法。',
  metrics: {
    topSpeedKph: 25,
    elevationM: [0, 3000],
  },
  featuredStats: [
    {
      key: 'adult-size-sex-means',
      label: '完全长成平均体型',
      value: '雌 2.40 m / 2.7 t；雄 2.75 m / 4.0 t',
      note: '标本与体积模型的性别平均值，不是最大纪录',
    },
    {
      key: 'three-generation-decline',
      label: '三世代推断降幅',
      value: '至少 50',
      unit: '%',
      note: '约 75 年；依据占有面积和生境质量下降推断',
    },
    {
      key: 'wild-population-2018',
      label: '2018 野外总数估计',
      value: '48,323 至 51,680',
      unit: '只',
      note: '不是成熟个体数；其中部分估计可靠性存疑',
    },
    {
      key: 'gestation',
      label: '妊娠',
      value: '620 至 680',
      unit: '天',
      note: '圈养象内分泌和超声追踪，约 22 个月',
    },
  ],
}
```

`metrics.adultLengthCm`、`metrics.adultMassKg`、`metrics.lifespanYears` 和 `metrics.estimatedMatureIndividuals` 刻意留空。前两项会丢失测量定义或性别口径，寿命来源不足以表达野外期望寿命，2018 数量又是总个体而非成熟个体。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414) [Larramendi 2016](https://doi.org/10.4202/app.00136.2014) [IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

## 六张生成图像的场景与验收边界

### 通用形态约束

- 头部是身体最高点，额顶具有两个圆钝隆起，双隆起之间和额面略凹；背线较平或向上隆起。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)
- 耳朵较小，不应延伸成非洲草原象式大扇耳；成年耳上缘可见向外折叠。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)
- 鼻子只有一条，鼻端只有上侧一个指状突；鼻尖不能分叉成两根“手指”。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)
- 每只象必须有四条自然承重的腿、一条尾；前足通常 5 个、后足通常 4 个甲状趾甲，不复制或融合肢体。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)
- 皮肤为灰色，可在耳、鼻和面部出现不规则粉色或浅色失色斑；幼象体毛比成年明显。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)
- 成年雌性设定为无大象牙；成年雄性可有牙也可无牙，不让整群个体长出完全相同的巨大象牙。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)
- 环境必须对应亚洲森林、草地、河谷或农业镶嵌，不出现非洲金合欢稀树草原。

### 共同拒绝项

`African elephant, giant fan-shaped ears, saddle-shaped concave back, two finger-like projections at trunk tip, forked trunk, two trunks, identical huge tusks on every elephant, large tusks on adult females, mammoth fur, African acacia savanna, circus pose, riding saddle, chains, tourists touching wildlife, human-like smile, cartoon eyes, charging at camera, exact GPS route overlay, readable road sign, text, logo, watermark, extra legs, fused feet, duplicated tail, malformed trunk`

### 图 1：`01-rainforest-female-portrait-source.png`，雨林中的无牙成年雌性

- **现有场景**：一只无大象牙的成年雌性站在湿润热带森林中，侧前方全身肖像，周围为阔叶植物和林下光线。
- **提示词约束**：单一主体，四足和鼻尖完整；额顶双隆起、耳小、背线平或微凸、鼻端一个指状突；灰色皮肤可有自然失色斑，不能补画象牙。
- **推荐 alt**：`一只无大象牙的成年雌性亚洲象站在湿润热带森林中`
- **叙事边界**：本图支持成年雌性常无大象牙和亚洲象森林生境的通用重建；不能据一只个体判定亚种、地点、年龄或当地雌象无牙比例。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414) [IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

### 图 2：`02-tusked-bull-morphology-source.png`，干旱林中的有牙成年雄性

- **现有场景**：一只体格粗壮、有一对自然象牙的成年雄性站在亚洲干燥落叶林空地，侧前方全身视角。
- **提示词约束**：单一主体；双隆额顶、小耳、平或微凸背线、鼻端一个指状突清楚；四足各有独立落地点，尾部应自然渐细并带真实稀疏尾毛，不得形成封闭叶片。
- **推荐 alt**：`一只有中等象牙的成年雄性亚洲象站在干燥落叶林空地`
- **叙事边界**：本图可解释雄性形态和性二型，不能凭有牙状态判定 musth、年龄、体重或地区。[Larramendi 2016](https://doi.org/10.4202/app.00136.2014) [Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)
- **修正结果**：2026-08-25 的局部修正版分离了远侧前肢和独立落足点，并把封闭叶片状尾簇改成开放的稀疏粗毛；原分辨率复核通过。

### 图 3：`03-forest-river-mosaic-source.png`，森林与河流镶嵌中的单只雌性

- **现有场景**：一只无大象牙的成年雌性位于森林、浅河与开阔岸边构成的生境镶嵌，画面以环境为主。
- **提示词约束**：单一主体，四足、一鼻、一尾可辨；小耳、双隆额顶和单一鼻端指状突；不增加人、车辆、路牌或定位信息，不把涉水画成水生生活方式。
- **推荐 alt**：`一只成年雌性亚洲象穿过森林与浅河相接的开阔岸边`
- **叙事边界**：只称“森林与河谷生境的通用重建”。静态生成图不能证明真实地点、移动路线、季节、水源依赖强度或云南北移事件。[IUCN 2020](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en)

### 图 4：`04-wild-grass-foraging-source.png`，无牙雌性抓取野草

- **现有场景**：一只无大象牙的成年雌性以象鼻抓取一束野草，周围为森林与草地边缘。
- **提示词约束**：鼻子与草束的抓握关系清楚，鼻端只有一个指状突；草仍来自自然地表，不出现人工投喂容器、堆叠果蔬或发光种子轨迹。
- **推荐 alt**：`一只无大象牙的成年雌性亚洲象用鼻子抓取野草`
- **叙事边界**：本图只能支持一次可见的抓草行为。它不能单独证明季节食谱、全天采食时长、每日食量、草食比例或种子传播距离；这些结论需要行为和食性研究。[Sukumar 1990](https://doi.org/10.1017/S0266467400004004) [Vancuylenberg 1977](<https://doi.org/10.1016/0006-3207(77)90056-8>)

### 图 5：`05-matrilineal-calf-care-source.png`，两只雌性与一只幼象鼻触

- **现有场景**：两只无大象牙的成年雌性和一只幼象位于林地空地，幼象与一只成年雌性发生轻柔鼻触。
- **提示词约束**：恰好 3 只象，身体互不融合；每只各有四足、一鼻、一尾，尾根到尾尖都可追踪；接触为自然鼻触，不做人类式拥抱、微笑或整齐合影。
- **推荐 alt**：`两只成年雌性亚洲象陪伴一只幼象，其中一只与幼象轻触象鼻`
- **叙事边界**：可称“母系社会中的成年雌性、幼象与社会接触”，但不能凭图确认哪只是亲生母亲、鼻触的功能或群体长期关系。[de Silva et al. 2011](https://doi.org/10.1186/1472-6785-11-17)
- **修正结果**：2026-08-25 的局部修正版为左侧成年象和幼象补全了彼此分离、从尾根到尾尖可追踪的尾部；原分辨率复核通过。

### 图 6：`06-aerial-corridor-monitoring-source.png`，森林与休耕地廊道航拍

- **现有场景**：航拍视角下，4 只亚洲象组成松散母系小群，通过森林和休耕地相接的带状景观。
- **提示词约束**：恰好 4 只，个体轮廓和四肢不融合；无成年雄性式大牙；自然、不整齐的间距；不叠加路线、定位点、监测框、无人机界面、道路名称或统计标签。
- **推荐 alt**：`四只亚洲象组成的母系小群通过森林与休耕地相接的带状景观`
- **叙事边界**：只称“森林、休耕地和象群的通用航拍重建”。单张生成图不能证明真实地点、精确数量、既定路线、廊道法律边界、连通性成效或任何监测结果；这些判断需要追踪、遗传或重复调查。[Zhang et al. 2015](https://doi.org/10.1371/journal.pone.0124834) [Siem Reap Declaration 2025](https://www.asesg.org/images/2025%20Seam%20Reap%20Declaration.pdf)

### 图像静态验收

1. 六个源文件均应为 1536 × 1024、8-bit sRGB、单帧不透明 PNG；尺寸、色彩空间、帧数和 alpha 用静态资产工具验证，不用浏览器代替。
2. 每图逐只计数鼻、腿、尾、耳和象牙，并沿轮廓追踪到端点；任何融合、重复、断肢或叶片状尾簇都退回修正。
3. 当前六图均可接受；02 已分离远侧前肢并修正尾簇，05 已补全左侧成年象与幼象的可追踪尾部。
4. 01、03、04、05、06 的成年雌性不得出现非洲象式巨大象牙；02 的成年雄性可保留自然中等象牙。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)
5. 六图都检查双隆额顶、小耳、较平或隆起背线和单一鼻端指状突，排除非洲象轮廓。[Shoshani and Eisenberg 1982](https://repository.si.edu/handle/10088/4414)
6. 03 和 06 的场景只作通用重建，04 只证明一次画面可见的抓草；它们都不能替代地点、路线、连通性、数量或行为频率数据。
7. 所有图 alt 必须写个体数、年龄或性别线索、动作和生境，避免只有“亚洲象群”四字。

## 推荐来源常量

以下均为官方物种页、政府原文、评估 PDF 或同行评审论文直链，不使用搜索结果页。实现时可按页面实际篇幅保留核心来源，云南专题来源不应被泛化成全物种分布依据。

```ts
const ASIAN_ELEPHANT_SOURCE_DATE = '2026-08-25' as const;
const ASIAN_ELEPHANT_CONTENT_DATE = '2026-08-25' as const;

const ASIAN_ELEPHANT_SOURCES = [
  {
    title: 'IUCN Red List 2020: Elephas maximus',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC Asian Elephant Specialist Group: 2020 Red List assessment PDF',
    url: 'https://www.asesg.org/PDFfiles/Asian%20Elephant%20Red%20List%20Assessment%202020.pdf',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC Asian Elephant Specialist Group: resources',
    url: 'https://asesg.org/resources.php',
    kind: 'general',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Mammal Diversity Database: Elephas maximus, MDD 1000521',
    url: 'https://www.mammaldiversity.org/taxon/1000521/',
    kind: 'taxonomy',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'IUCN 2024: First Bornean Elephant subspecies assessment',
    url: 'https://iucn.org/press-release/202406/bornean-elephant-endangered-iucn-red-list',
    kind: 'taxonomy',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'China Biodiversity Red List: Vertebrates, 2020 assessment',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'China National Key Protected Wild Animals List, 2021',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Wildlife Protection Law of the People’s Republic of China, 2022 revision',
    url: 'https://www.npc.gov.cn/c2/c30834/202212/t20221230_321016.html',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'China National Forestry and Grassland Administration 2024: Yunnan Asian Elephant standards',
    url: 'https://www.forestry.gov.cn/c/www/lcdt/547630.jhtml',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'CITES SC58 Doc. 36.1 Annex 2: Asian Elephant trade and listing history',
    url: 'https://cites.org/sites/default/files/eng/com/sc/58/E58-36-1A2.pdf',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'CMS: Elephas maximus indicus, Appendix I',
    url: 'https://www.cms.int/species/elephas-maximus-indicus',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'CMS COP13 amendments effective 22 May 2020',
    url: 'https://www.cms.int/news/2020003-amendments-appendices-convention',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'IUCN 2025: Fourth Asian Elephant Range States Meeting announcement',
    url: 'https://iucn.org/press-release/202502/fourth-asian-elephant-range-states-meeting-concludes-launch-declaration-asian',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'IUCN 2025: Siem Reap Declaration for Asian Elephant Conservation',
    url: 'https://www.asesg.org/images/2025%20Seam%20Reap%20Declaration.pdf',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Shoshani and Eisenberg 1982: Elephas maximus species account',
    url: 'https://repository.si.edu/handle/10088/4414',
    kind: 'general',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Larramendi 2016: Shoulder height, body mass and shape of proboscideans',
    url: 'https://doi.org/10.4202/app.00136.2014',
    kind: 'general',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Hutchinson et al. 2003: Fast-moving elephants',
    url: 'https://doi.org/10.1038/422493a',
    kind: 'general',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Sukumar 1990: Ecology of the Asian Elephant in southern India: feeding habits',
    url: 'https://doi.org/10.1017/S0266467400004004',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Vancuylenberg 1977: Feeding behaviour of the Asiatic Elephant in Sri Lanka',
    url: 'https://doi.org/10.1016/0006-3207(77)90056-8',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Kumar et al. 2010: Asian Elephant habitat use in a plantation landscape',
    url: 'https://doi.org/10.1177/194008291000300203',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'de Silva et al. 2011: Social networks of female Asian Elephants',
    url: 'https://doi.org/10.1186/1472-6785-11-17',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'de Silva et al. 2013: Demography of Asian Elephants at Uda Walawe',
    url: 'https://doi.org/10.1371/journal.pone.0082788',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Srinivasaiah et al. 2013: Musth and male Asian Elephant associations',
    url: 'https://doi.org/10.1016/j.anbehav.2013.09.022',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Lueders et al. 2012: Elephant pregnancy and placental development',
    url: 'https://doi.org/10.1098/rspb.2012.1038',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Campos-Arceiz et al. 2008: Asian Elephant seed dispersal',
    url: 'https://doi.org/10.1890/07-1573.1',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Harich et al. 2016: Asian Elephant ingestion and Dillenia seed germination',
    url: 'https://doi.org/10.1016/j.actao.2016.10.005',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Campos-Arceiz and Blake 2011: Megagardeners of the forest',
    url: 'https://doi.org/10.1016/j.actao.2011.01.014',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2015: Genetic diversity and population structure of Asian Elephants in China',
    url: 'https://doi.org/10.1371/journal.pone.0124834',
    kind: 'distribution',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Yunnan Forestry and Grassland Administration 2021: Northward-moving elephant update',
    url: 'https://lcj.yn.gov.cn/html/2021/zuixindongtai_0810/63527.html',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'China Ministry of Ecology and Environment 2022: Yunnan northward-movement response review',
    url: 'https://www.mee.gov.cn/ywgz/zrstbh/swdyxbh/202212/t20221206_1007073.shtml',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Wang et al. 2021: Asian Elephants wandering north in Yunnan',
    url: 'https://doi.org/10.1016/j.xinn.2021.100142',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Jiang et al. 2023: Route and land-cover analysis of the Yunnan northward movement',
    url: 'https://doi.org/10.3390/land12020460',
    kind: 'distribution',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 证据覆盖和实施清单

- [x] 分类、主名、属种边界和亚种更新：MDD、IUCN 物种评估、IUCN 婆罗洲亚种公告。
- [x] 全球状态、评估标准、评估年、趋势和三世代口径：IUCN 2020 评估原文。
- [x] 全球总数、低可靠性部分和成熟个体边界：IUCN 2020。
- [x] 13 个范围国、区域灭绝国、范围面积与海拔：MDD、IUCN 2020。
- [x] 天然与边缘生境：IUCN 2020；人类景观活动时段用印度原始研究限定。
- [x] 形态、雌雄常见体型、极值、速度和寿命限制：Smithsonian 物种专论、Larramendi、Hutchinson、IUCN。
- [x] 食性、采食时长的局地边界：Sukumar、Vancuylenberg。
- [x] 裂变—融合社会、繁殖参数和妊娠：de Silva 两项长期研究、Lueders。
- [x] 云南时间线、数量、距离、应急措施与原因不确定性：云南省林草局、生态环境部、Wang、Jiang。
- [x] 种子传播、萌发与生态工程边界：Campos-Arceiz、Harich。
- [x] 中国区域红色名录、国家一级、CITES 和 CMS 法律边界：官方文档。
- [x] 范围国合作、廊道、基础设施、冲突和执法行动：2025 暹粒宣言及中国地方标准。
- [x] 六个故事角度、结构化字段、6 张图像场景和共同拒绝项已经给出。
- [x] 2026-08-25 实装时再次核验 IUCN 全物种评估、CITES/CMS 附录，并用同日更新 `accessedAt`。
- [ ] 若产品以后设立婆罗洲象亚种页，单独研究其分布、数量和 2024 IUCN 标准，不从本物种页复制全球数字。
