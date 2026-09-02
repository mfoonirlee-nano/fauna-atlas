# 南方三带犰狳完整物种档案研究

- 分类单元：`Tolypeutes matacus` (A. G. Desmarest, 1804)
- 建议主中文名：南方三带犰狳
- 英文名：Southern Three-banded Armadillo
- 研究日期：2026-09-02
- 用途：为 `src/data/species.ts` 的完整物种档案、六个故事章节和六张原创图像提供可追溯底稿
- 证据口径：接受名和当前分类优先采用 Mammal Diversity Database；全球保护等级、分布、海拔、威胁和行动优先采用 IUCN 2025 年评估；国际贸易状态采用 CITES 当前附录；行为、食性和繁殖优先采用同行评审原始研究。圈养研究、单一地点、小样本和模型结果均单独标明

## 编辑结论

南方三带犰狳分布于玻利维亚东部、巴西西南部、巴拉圭查科和阿根廷北部至中部。它的圆顶形甲壳、三角形头盾和尾盾可以扣合，使身体闭成近乎完整的甲球。物种名中的“三带”不能当作每只个体恰有三条活动带的诊断条件；IUCN SSC 食蚁兽、树懒和犰狳专家组记录的范围为 2 至 4 条活动带。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1000419/) [IUCN SSC Anteater, Sloth and Armadillo Specialist Group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/)

IUCN 当前全球等级为近危 `NT`，种群趋势下降，准则为 `A2cd`。评估日期是 2024 年 8 月 9 日，条目在 2025 年发布，所以 `assessedYear` 应填 `2024`。评估者认为该物种在 12 年，即三个世代内的推定缩减低于 30%，但栖息地广泛丧失和食用性猎捕让它接近易危门槛。这个幅度属于风险评估，不是一次覆盖全分布区的个体普查。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)

“遇险缩成球”既是防御，也会提高人类捕获效率。IUCN 同时记录农业扩张、针对性猎捕、宠物与展示用途、手工艺用途和少量道路死亡。2026 年威胁模型也把当前的栖息地退化和过度利用置于气候情景之前；模型预测的潜在适生区变化不能抵消现实中的猎捕和土地转化。[Ferreiro et al. 2026](https://doi.org/10.1111/acv.70047) [IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)

两个常见说法需要纠正。南方三带犰狳会挖自己的小洞，研究者直接拍到挖洞过程，并测量了 111 个该物种使用的洞穴；“完全不会挖洞”已经过时。它也不是蚂蚁和白蚁的严格专食者。阿根廷 Copo 保护区 66 份胃内容物中，无脊椎动物约占 70%，植物材料约占 20%，食物随季节变化，因此研究者将其归为机会主义昆虫食者。[Attias et al. 2016](https://doi.org/10.1590/S1984-4689zool-20160035) [Bolkovic et al. 1995](https://doi.org/10.2307/1382612)

## 名称、分类与物种边界

### 建议名称字段

| 字段             | 建议值                          | 依据与边界                                                                                                     |
| ---------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `scientificName` | `Tolypeutes matacus`            | MDD 当前接受名                                                                                                 |
| `names.zh`       | 南方三带犰狳                    | 沿用仓库 TODO 的规范化名称，是英文主名 Southern Three-banded Armadillo 的直译                                  |
| `names.en`       | Southern Three-banded Armadillo | MDD 和 IUCN 英文主名                                                                                           |
| `aliases`        | `[]`                            | 没有检索到中国履约机构或权威中文名录为“拉河三带犰狳”“拉普拉塔三带犰狳”等名称提供稳定依据，暂不收入产品检索别名 |

本轮没有找到可核实的中国官方中文名。产品可以继续使用 TODO 已确定的“南方三带犰狳”，但来源说明应写成编辑采用名，不得称为中国法定、CITES 官方或国家物种名录名称。MDD 记录的英文别名 Azara's Domed Armadillo 和 La Plata Three-banded Armadillo 可在正文说明，不宜未经权威中文来源自行扩展为中文别名。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1000419/)

MDD 记录原始组合为 `loricatus matacus`，现接受 `Tolypeutes matacus`。属内另一现生种为巴西三带犰狳 `Tolypeutes tricinctus`。两种都能闭合成甲球，图片不能只凭“成球”把一只没有可靠来源的动物鉴定到种；分布、前足趾爪和甲壳细节仍需结合判断。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1000419/) [IUCN SSC Anteater, Sloth and Armadillo Specialist Group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/)

### 分类图谱

| 分类阶元 | 学名               | 中文名       |
| -------- | ------------------ | ------------ |
| 界       | Animalia           | 动物界       |
| 门       | Chordata           | 脊索动物门   |
| 纲       | Mammalia           | 哺乳纲       |
| 目       | Cingulata          | 有甲目       |
| 科       | Tolypeutidae       | 三带犰狳科   |
| 属       | Tolypeutes         | 三带犰狳属   |
| 种       | Tolypeutes matacus | 南方三带犰狳 |

MDD v2.5 在 2026 年 7 月 28 日发布时把 Tolypeutidae 从 Chlamyphoridae 拆出，并把 `Tolypeutes` 置于新科，依据包含形态、分子和地层资料的系统发育研究。IUCN 2025 评估、IUCN SSC 专家组网页和多数早期论文仍使用 Chlamyphoridae 或更旧的 Dasypodidae。当前分类图谱应采用 MDD 的 Tolypeutidae；正文和来源标题保留旧科名时，需要把它解释为版本差异，而不是同一物种同时属于多个现生科。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1000419/) [MDD v2.5 taxonomy changes](https://www.mammaldiversity.org/releases/diff-changes/2.5/) [Casali et al. 2026](https://doi.org/10.1111/cla.70048)

## 全球保护状态与国际贸易边界

| 字段         | 建议值        | 说明                             |
| ------------ | ------------- | -------------------------------- |
| system       | IUCN Red List | 仓库固定值                       |
| code         | `NT`          | 当前全球等级为近危               |
| trend        | `decreasing`  | 当前野外趋势下降                 |
| assessedYear | `2024`        | 评估日期 2024-08-09；发布年 2025 |
| criteria     | `A2cd`        | 接近基于过去种群缩减的易危门槛   |
| assessor     | IUCN          | 由仓库 helper 统一生成           |

IUCN 把世代长度估为 4 年，并用 12 年作为三个世代窗口。评估者判断缩减率低于 30%，却已接近易危 `A2cd` 的门槛。`c` 指栖息地质量或范围下降，`d` 指实际或潜在利用造成的影响。档案不得把“低于 30%”改写成“已经精确减少 29%”，也不得写成“仍属近危，所以没有灭绝风险”。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)

IUCN 没有给出当前全球成熟个体数。旧的局地密度估计来自 20 多年前的玻利维亚查科和巴西潘塔纳尔，调查方法、年份与地点不同，不能拼接为全球总量。`estimatedMatureIndividuals` 应留空。IUCN 也明确指出野外寿命没有数据；圈养寿命不得写入野外寿命字段。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)

2026 年 3 月 5 日生效的 CITES 当前附录没有列出 `Tolypeutes matacus`。IUCN 2025 评估的附录也标记“未纳入国际立法”和“没有国际管理或贸易管制”。这不等于国际和国内贸易不受任何法律约束；各出口国、进口国、航空运输和动物卫生规则仍可能适用。产品应写“当前未列入 CITES 附录”，不能写“可自由买卖”或沿用来源不明的“CITES 附录 II/III”。[CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)

## 分布、海拔与地图口径

IUCN 的自然在场国家为阿根廷、玻利维亚、巴西和巴拉圭。阿根廷当前记录从北部向南到 San Luis 省；IUCN 认为该物种曾出现在 Buenos Aires 省南部，但近年调查提示当地已经消失，原因可能与气候有关。历史记录与当前自然在场区需要使用不同图例。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)

建议地图区域为：

1. 玻利维亚东部查科
2. 巴西 Mato Grosso 和 Mato Grosso do Sul 的西南部记录区
3. 巴拉圭大查科
4. 阿根廷北部和中部至 San Luis 的查科与相邻干旱带
5. Buenos Aires 省南部历史分布，单独标为历史记录或局部消失

国家字段只填阿根廷、玻利维亚、巴西和巴拉圭。`center: { lat: -23, lng: -61 }` 只用于地图初始焦点，不表示种群密度中心。IUCN 给出的全球海拔范围为海平面至 800 米；`metrics.elevationM` 可填 `[0, 800]`。早期来源常写 770 米，当前实现应使用 2025 年评估的 800 米上限。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)

2015 年分布研究汇编了标本、文献和新记录，显示两种 `Tolypeutes` 的范围并不重叠，并修正了若干旧记录。2022 年的历史与现生证据重建进一步把南方三带犰狳与查科生物群的过去变化联系起来。模型和汇编能改进范围边界，不能证明地图色带内每个地点当前都有种群。[Feijó et al. 2015](https://doi.org/10.2108/zs140186) [Ferreiro et al. 2022](https://doi.org/10.1007/s10914-022-09627-3)

## 栖息地

IUCN 2025 将热带或亚热带干旱林、干旱稀树草原和温带灌丛列为主要且适宜的陆地生境；湿润稀树草原为边缘生境。IUCN SSC 专家组把典型环境描述为干查科的刺林和灌丛，也记录湿查科的棕榈稀树草原与廊道林。档案应保存这些生境之间的差异，不能把物种概括成只住“沙漠”或只住“草原”。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en) [IUCN SSC Anteater, Sloth and Armadillo Specialist Group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/)

建议 `habitats`：

1. **热带或亚热带干旱林**：查科刺林和季节性干林，标为主要陆地生境。
2. **干旱稀树草原**：开阔草地、木本斑块和裸地交错，标为主要陆地生境。
3. **温带灌丛**：分布南部较冷、干旱的灌丛环境，标为主要陆地生境。
4. **湿润稀树草原、棕榈草原与廊道林**：IUCN 将湿润稀树草原列为边缘生境；巴西潘塔纳尔研究记录了棕榈草原和林地的利用。
5. **低强度农业镶嵌**：IUCN 认为物种可容忍低水平农业扰动，但大尺度作物转化仍是主要威胁。该类别不能标成完整原生生境的替代品。

潘塔纳尔 GPS 研究发现，低温或高温超出热中性范围时，南方三带犰狳会选择林地作为热庇护。这个结果支持保留草地、灌丛和林斑构成的异质景观，不支持把所有分布区都画成连续森林。[Attias et al. 2018](https://doi.org/10.1016/j.anbehav.2018.04.011)

## 体型、外形与稳定测量值

IUCN SSC 专家组统一列出头体长 20 至 25 厘米、体重约 1 至 2 千克。2014 至 2015 年在巴西潘塔纳尔两个地点测量的成年个体为 0.96 至 1.62 千克，中位数 1.27 千克。这组野外样本支持产品采用 1 至 2 千克的宽范围，同时说明体重随个体和性别变化；不能把 1.27 千克当成全物种平均值。[IUCN SSC Anteater, Sloth and Armadillo Specialist Group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/) [Attias et al. 2020](https://doi.org/10.1093/jmammal/gyaa117)

| 字段           | 建议值      | 是否进入 `metrics`            | 边界                               |
| -------------- | ----------- | ----------------------------- | ---------------------------------- |
| 头体长         | 20 至 25 cm | 是，`adultLengthCm: [20, 25]` | 专家组物种概述范围                 |
| 成年体重       | 1 至 2 kg   | 是，`adultMassKg: [1, 2]`     | 权威概述；巴西野外样本落在该范围内 |
| 海拔           | 0 至 800 m  | 是，`elevationM: [0, 800]`    | IUCN 当前全球记录范围              |
| 尾长           | 不录入      | 否                            | 当前精选权威来源未提供同口径范围   |
| 野外寿命       | 不录入      | 否                            | IUCN 明确表示无野外数据            |
| 全球成熟个体数 | 不录入      | 否                            | IUCN 没有总体估计                  |

图像必须保留的外形组合为：矮小紧凑的身体、硬而高拱的沙黄至棕色甲壳、宽阔肩盾和臀盾、其间 2 至 4 条活动带、三角形头盾与短厚的三角尾盾、甲壳下缘可见的粗毛、细长口鼻和适于挖掘的爪。前足有 3 至 4 个带爪趾，第三爪最大。图片不得把前足画成五根等长的人手，也不能把甲壳活动带强制成恰好三条。[IUCN SSC Anteater, Sloth and Armadillo Specialist Group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/)

“甲壳”不能画成龟壳。犰狳的头、肩、躯干和尾部甲片之间仍存在可动连接，腹面和腿内侧有毛，四肢从甲壳下方伸出。成球时，头盾和尾盾扣合覆盖软腹；展开行走时，头尾仍与躯干分开可辨。静态图不能证明甲球能承受何种咬合力，也不能把它称作不可攻破。

## 成球防御与挖洞能力

`Tolypeutes matacus` 与同属的 `T. tricinctus` 是能把身体闭成紧密甲球的两种现生犰狳。受到威胁时，头盾与尾盾贴合周围甲壳，把腹面、四肢和感官器官包在内部。防御行为不意味着它会像球一样主动长距离滚动；图像和故事应写“蜷缩、闭合”，避免写“高速滚走”。[IUCN SSC Anteater, Sloth and Armadillo Specialist Group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/) [Ferreiro et al. 2026](https://doi.org/10.1111/acv.70047)

Attias 等人在巴西两个地点直接观察并拍摄南方三带犰狳从头挖洞。休息点中约 76% 为小洞，13% 为草巢，7% 为落叶覆盖的浅凹，4% 为浅凹上的草巢。111 个洞穴的平均深度为 `35 ± 9.4 cm`；带幼体雌性的洞平均更深。比例和深度只适用于该研究地点及其样本，不应写成每只动物固定使用模式。[Attias et al. 2016](https://doi.org/10.1590/S1984-4689zool-20160035)

研究还记录个体搬运干草修补巢穴。带幼体雌性会与幼体共享庇护所，并比成年雄性更频繁重复使用洞穴。草巢场景可作为图像题材，但不能凭一张图判断筑巢者性别、繁殖状态或巢穴是否长期使用。[Attias et al. 2016](https://doi.org/10.1590/S1984-4689zool-20160035)

## 食性与季节菜单

阿根廷 Copo 保护区研究分析了 1986 年 7 月至 1987 年 4 月收集的 66 只个体胃内容物。无脊椎动物约占内容物 70%，植物材料约占 20%，其余约 10% 未能鉴定。甲虫幼虫全年出现，白蚁和蚂蚁在旱季更常见，果实在雨季更常见。研究者据此把本种归为机会主义昆虫食者，而不是单一猎物专食者。[Bolkovic et al. 1995](https://doi.org/10.2307/1382612)

`diet.types` 建议使用 `insectivore` 和 `omnivore`，食物数组可写蚂蚁、白蚁、甲虫幼虫和其他无脊椎动物，以及果实、种子和其他植物材料。70% 与 20% 只来自一个保护区、一段十个月样期和胃内容物样本；它们适合讲季节菜单，不适合进入全物种 featured stat。

图像可表现鼻吻接近打开的腐木或浅层蚁巢，并露出少量蚂蚁或白蚁。静态像素不能证明猎物种类、实际摄入量或全年食物占比；不要同时堆放蚂蚁、白蚁、甲虫幼虫和果实来拼一张“完整菜单”。

## 活动、空间与社会行为

Attias 等人用 VHF 和 GPS 监测巴西潘塔纳尔两个地点的 26 只个体，其中 21 只提供 GPS 数据。研究期覆盖 2014 年 11 月至 2015 年 8 月中的约七个月。个体平均每天活动 `5.5 ± 2.8` 小时，多数活动集中在前半夜；低温时活动开始得更早、持续时间更短。本种应写“主要夜行，活动时间受温度影响”，不能写成任何季节都严格夜行。[Attias et al. 2020](https://doi.org/10.1093/jmammal/gyaa117) [Attias et al. 2018](https://doi.org/10.1016/j.anbehav.2018.04.011)

同一研究估得成年个体 95% 核密度活动范围中位数 58.4 公顷，范围为 14.5 至 194.9 公顷。成年雄性平均活动范围大于雌性，雄性范围与雄性和雌性均有重叠；雌性核心区彼此重叠低于 1%。样本来自两个潘塔纳尔地点、监测期较短，不能把 58.4 公顷设成全分布区的固定领域面积。[Attias et al. 2020](https://doi.org/10.1093/jmammal/gyaa117)

2025 年野外繁殖行为研究标记 58 只雄性和 39 只雌性，并每天无线电跟踪其中 27 只雌性。研究者观察到 4 只发情雌性发起追逐，最多有 14 只雄性围绕一只雌性；体重更大的雄性赢得追逐的概率较高，还记录一只雌性与多只雄性交配。这支持混交制，也记录了强烈雄性竞争，但直接发情样本只有 4 只，不能把“14 只”写成每次交配固定规模。[de Melo et al. 2025](https://doi.org/10.1080/01650521.2025.2557854)

产品可以写“通常单独活动，繁殖期会出现追逐聚集和竞争”。不要把活动范围重叠推成稳定社会群，也不要把一张多只动物同框图认定为家庭、终生配偶或固定群体。

## 繁殖与生活史

IUCN 2025 评估记录雌性每胎一仔、每年一胎，世代长度估为 4 年。评估者明确说明世代长度来自其他犰狳物种的外推。产品可保留“一胎一仔、繁殖率低”，但 `4 年` 必须带“估算且由近缘类群外推”的限定。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)

IUCN SSC 专家组概述给出约 12 月龄性成熟、妊娠约 114 天、幼体约 2.5 月龄断奶，并记录两个妊娠高峰。这些生活史数字汇集了圈养与历史资料，不代表每个野外种群。正文若使用，应标为专家组参考值；不建议把妊娠天数或断奶年龄设成 featured stat。[IUCN SSC Anteater, Sloth and Armadillo Specialist Group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/)

Howell-Stephens 等人用北美动物园圈养个体的粪便激素研究繁殖周期。该来源可以说明圈养繁殖管理，不能覆盖野外季节性、野外性成熟年龄或全球繁殖成功率。[Howell-Stephens et al. 2013](https://doi.org/10.1016/j.anireprosci.2013.02.004)

## 威胁

1. **作物扩张与生境转化**：IUCN 把一年生和多年生非木本作物扩张列为影响 50% 至 90% 分布范围、造成缓慢但显著下降的持续威胁。低强度农业容忍度不能外推成大规模转化无害。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
2. **针对性猎捕和食用**：IUCN 把捕猎列为同样影响多数范围的持续威胁。甲球防御让动物容易被人拾取，低繁殖率又限制恢复速度。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
3. **宠物、展示和手工艺用途**：IUCN 记录本种在地方、国内和国际层面用于宠物或展示，并在地方和国内用于手工艺。评估指出野外来源个体在出口过程中的死亡率高，却没有提供可核实的当前全球数量。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
4. **道路死亡**：IUCN 把道路和铁路列为影响少数范围、造成轻微下降的持续威胁。它是真实威胁，但当前评估没有支持把它列为全球首要压力。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
5. **气候与热环境变化**：行为研究显示气温改变活动时间与林地选择，2026 年模型也评估了未来气候适生性。模型预测部分未来情景可能增加潜在适生区，却不能抵消栖息地退化和过度利用。产品不要把未来适生性扩张写成种群会自动恢复。[Attias et al. 2018](https://doi.org/10.1016/j.anbehav.2018.04.011) [Ferreiro et al. 2026](https://doi.org/10.1111/acv.70047)

## 保护行动

1. 管理干查科、干旱稀树草原和温带灌丛的现有生境，限制把原生植被转为大面积作物地。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
2. 在草地、灌丛、棕榈草原和廊道林之间保留异质镶嵌，为取食、挖洞和极端温度下的热庇护保留选择。[Attias et al. 2018](https://doi.org/10.1016/j.anbehav.2018.04.011)
3. 建立捕猎与收获管理，分别记录食用、宠物、展示和手工艺用途的来源、数量、死亡和贸易路径。IUCN 当前明确要求制定 harvest management。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
4. 扩大保护地外的地点管理。IUCN 估计受保护的适生区不超过 12%，保护地出现记录不能代表覆盖充分或种群稳定。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
5. 建立覆盖阿根廷、玻利维亚、巴西和巴拉圭的统一种群、栖息地、捕猎和贸易趋势监测。当前没有系统性全球监测方案，也没有成熟个体总数。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
6. 把野外繁殖率、寿命、幼体存活和不同生境活动范围列为研究缺口；圈养计划可支持管理知识，但不能替代野外土地与猎捕管理。[Howell-Stephens et al. 2013](https://doi.org/10.1016/j.anireprosci.2013.02.004) [IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)

## 可稳定展示的四项指标

| 展示项   | 建议值      | 来源与限定                                                                                                                                                     |
| -------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IUCN     | NT          | 2024 年评估、2025 年发布，趋势下降，准则 `A2cd`。[IUCN](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)                                       |
| 活动带   | 2–4         | 圆顶甲壳中段的可活动带范围；“三带”不是每只固定三条。[IUCN SSC specialist group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/) |
| 头体长   | 20–25 cm    | IUCN SSC 专家组物种概述范围。[IUCN SSC specialist group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/)                        |
| 每日活动 | 5.5 ± 2.8 h | 巴西潘塔纳尔两个地点、26 只监测个体中的 GPS 研究结果，主要集中于前半夜；不是全分布区常数。[Attias et al. 2020](https://doi.org/10.1093/jmammal/gyaa117)        |

## 六个故事章节草稿

### 1

- `key`: `armor-with-moving-seams`
- `label`: `形态`
- `title`: `高拱甲壳仍保留活动接缝`
- `body`: 南方三带犰狳的肩盾和臀盾之间有 2 至 4 条活动带，头盾和短尾盾都呈三角形。活动带让高拱甲壳能够弯曲闭合；名称中的“三带”不保证每只个体恰有三条。腹面和腿内侧仍是带毛的软组织，甲壳也不是龟壳。[IUCN SSC specialist group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/)

### 2

- `key`: `closing-the-armor-ball`
- `label`: `防御`
- `title`: `头盾和尾盾扣成一只甲球`
- `body`: 受到威胁时，它把头、四肢和软腹收进甲壳，三角形头盾与尾盾贴合周围甲片。`Tolypeutes` 属两种犰狳都能完成这种紧密闭合。甲球能降低许多捕食风险，也让人更容易拾取，防御行为因此与猎捕脆弱性连在一起。[IUCN SSC specialist group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/) [IUCN](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)

### 3

- `key`: `yes-they-dig`
- `label`: `庇护`
- `title`: `它会挖洞，也会搭草巢`
- `body`: 野外相机直接记录南方三带犰狳从头挖出小洞。巴西两个地点的休息点还包括草巢和落叶覆盖的浅凹；研究者也拍到个体搬草修补巢。不同年龄和繁殖状态会改变庇护所的选择与重复使用，不能再把这个物种写成“不会挖洞”。[Attias et al. 2016](https://doi.org/10.1590/S1984-4689zool-20160035)

### 4

- `key`: `seasonal-opportunistic-menu`
- `label`: `食性`
- `title`: `旱季虫群与雨季果实改变菜单`
- `body`: Copo 保护区 66 份胃内容物显示，无脊椎动物占主体，植物材料主要是果实。甲虫幼虫全年出现，蚂蚁和白蚁在旱季更常见，果实在雨季增加。样本支持“机会主义昆虫食者”，不支持“只吃白蚁”或把局地比例设为全种常数。[Bolkovic et al. 1995](https://doi.org/10.2307/1382612)

### 5

- `key`: `night-movement-and-rallies`
- `label`: `活动`
- `title`: `多数夜晚独行，发情时形成追逐`
- `body`: 巴西潘塔纳尔 GPS 研究记录活动集中在前半夜，雄性活动范围大于雌性。2025 年野外研究又观察到发情雌性引发雄性追逐，最多 14 只雄性聚到一只雌性周围。后一个数字只来自 4 只发情雌性，说明繁殖期会短暂聚集，不代表稳定群居。[Attias et al. 2020](https://doi.org/10.1093/jmammal/gyaa117) [de Melo et al. 2025](https://doi.org/10.1080/01650521.2025.2557854)

### 6

- `key`: `defense-cannot-stop-land-conversion`
- `label`: `保护`
- `title`: `甲球挡不住猎捕和土地转化`
- `body`: IUCN 认为农业扩张和针对性猎捕影响分布区的大部分范围，当前全球趋势下降。保护区覆盖的适生区不超过 12%，本种又没有系统性全球监测。保护需要把原生植被管理、收获与贸易追踪放在同一张地图上，不能把圈养繁殖或未来气候适生性当作野外恢复。[IUCN](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en) [Ferreiro et al. 2026](https://doi.org/10.1111/acv.70047)

## 推荐关键事实

1. MDD 接受名为 `Tolypeutes matacus`，英文主名为 Southern Three-banded Armadillo。[MDD](https://www.mammaldiversity.org/taxon/1000419/)
2. 当前 MDD 把它置于有甲目、三带犰狳科、三带犰狳属；IUCN 2025 仍沿用 Chlamyphoridae。[MDD](https://www.mammaldiversity.org/taxon/1000419/)
3. 中国权威名录来源不足，主中文名“南方三带犰狳”沿用仓库 TODO 的编辑规范名。
4. 它自然分布于阿根廷、玻利维亚、巴西和巴拉圭，海拔从海平面到约 800 米。[IUCN](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
5. Buenos Aires 省南部的历史分布可能已经局部消失，地图不能与当前在场区使用同一填色。[IUCN](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
6. 当前 IUCN 全球等级为近危，趋势下降，评估日期为 2024 年，准则 `A2cd`。[IUCN](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
7. IUCN 推定 12 年内的缩减低于 30%但接近易危门槛，这不是全球个体普查。[IUCN](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
8. 当前没有可靠全球成熟个体数，也没有野外寿命数据。[IUCN](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
9. 头体长约 20 至 25 厘米，体重约 1 至 2 千克。[IUCN SSC specialist group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/)
10. 圆顶甲壳通常有 2 至 4 条活动带，三角形头盾和尾盾可在成球时扣合。[IUCN SSC specialist group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/)
11. 它会挖自己的小洞，也会使用草巢和落叶覆盖的浅凹。[Attias et al. 2016](https://doi.org/10.1590/S1984-4689zool-20160035)
12. Copo 保护区胃内容物研究支持机会主义昆虫食，果实和无脊椎动物随季节变化。[Bolkovic et al. 1995](https://doi.org/10.2307/1382612)
13. 潘塔纳尔两个地点的 26 只监测个体平均每天活动 5.5 ± 2.8 小时，多数活动集中于前半夜。[Attias et al. 2020](https://doi.org/10.1093/jmammal/gyaa117)
14. 主要单独活动不等于繁殖期不聚集；4 只发情雌性的观察记录到多雄追逐和一雌多雄交配。[de Melo et al. 2025](https://doi.org/10.1080/01650521.2025.2557854)
15. 主要威胁是农业转化和针对性猎捕，宠物与展示贸易、手工艺利用和道路死亡也有记录。[IUCN](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
16. 2026 年当前 CITES 附录未列入本种，不能把“未列入”解释成任何地点均可自由贸易。[CITES](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)

## 应删除或避免的说法

- “每只背上都恰有三条带”：权威概述记录 2 至 4 条活动带。
- “它是巴西特有种”：它分布于四个国家；巴西特有的是同属的 `T. tricinctus`。
- “它不会挖洞，只抢其他动物的洞”：野外相机和洞穴测量已经直接否定。
- “它会卷成球滚走”：证据支持闭合防御，不支持主动长距离滚动逃跑。
- “甲球无法被任何捕食者打开”：现有来源没有支持绝对防御。
- “只吃蚂蚁和白蚁”：胃内容物也包括甲虫幼虫、果实和其他材料。
- “严格夜行”：活动以夜间为主，但温度会改变活动开始时间和持续时长。
- “每天固定活动 5.5 小时”：该均值来自两个潘塔纳尔地点和特定监测期。
- “活动范围就是 58.4 公顷”：研究方法、性别、体重、地点和季节都会改变估计。
- “每次交配都有 14 只雄性追逐”：14 是小样本观察到的最大值。
- “全球只剩某个确定数量”：IUCN 没有当前成熟个体总数。
- “近危代表种群稳定”：IUCN 明确标注下降趋势。
- “列入 CITES 附录 II 或 III”：当前 CITES 附录不列本种。
- “未列 CITES 所以可自由买卖”：国家法规和其他跨境规则仍可能限制贸易。

## 六幅 1536 × 1024 写实图像场景

统一输出：每幅 `1536 × 1024` 像素，横向 3:2，photorealistic wildlife documentary photography，自然暮光、夜间低照度或柔和日光，不含文字、水印、logo、边框、拼贴和可识别机构标志。源文件建议使用 `*-source.png`，运行时文件使用同名 `.webp`。

### 生成像素的证据边界

六幅图都是有研究依据的视觉重建，不是野外观察记录、标本测量或实验结果。生成像素不能验证动物来自哪个国家、活动带精确数量在种群中的频率、个体年龄或性别、洞穴由谁挖出、食物物种、繁殖状态、甲壳承压能力和所在地点的保护状况。alt、title 和 caption 只能描述可见内容，并把行为解释限制在来源支持的范围内。

### 01 `01-dry-chaco-foraging-cover`

**场景与构图**

封面环境肖像。恰好一只成年南方三带犰狳在干查科刺林边缘行走并贴地嗅探，完整显示头盾、圆顶甲壳、四肢和短厚尾盾。验收图可见 4 条活动带，处于资料记录的 2 至 4 条范围内。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic wildlife documentary photograph of exactly one adult southern three-banded armadillo, Tolypeutes matacus, walking naturally along the edge of thorn scrub in the South American Dry Chaco at late dusk. Place the animal in the right third of the frame and preserve generous softly layered grass and thorn-forest negative space on the left for a page title. Show a three-quarter side view with the complete head, compact body, all four short limbs, and short stout tail visible. The animal has a rigid high-domed sandy-yellow to medium-brown carapace, broad shoulder and pelvic shields, three clearly readable movable mid-body bands within the documented two-to-four range, a small triangular armored head shield, a matching triangular tail shield, a narrow tapered snout, small dark eyes, large digging claws, and coarse pale brown hair visible beneath the lower shell. Accurate armadillo anatomy, low camera height, dry leaf litter, thorn branches, restrained warm dusk light, detailed keratin scales and dust, natural field-photography realism, no human presence.
```

**Avoid list**

```text
Avoid Brazilian three-banded armadillo identification claims, giant armadillo, nine-banded armadillo, pangolin, turtle shell, tortoise, hedgehog, anteater, more than one animal, cropped feet, cropped tail, long flexible tail, long ears, five human fingers, human hands, smooth plastic armor, metallic armor, exactly nine bands, impossible overlapping plates, fully closed ball, running, rolling downhill, aggressive teeth, fantasy creature, desert dunes, lush rainforest, people, road, vehicle, fence, zoo enclosure, text, watermark, logo, frame or collage.
```

**可见性与验收**

- 精确计数 1 只成年个体，头、四肢和短尾完整可见。
- 高拱沙黄至棕色甲壳、头盾、肩盾、臀盾和 4 条可见活动带可辨；图说继续注明全种记录范围为 2 至 4 条。
- 腹侧粗毛与挖掘爪可见，不能像龟或穿山甲。
- 主体焦点建议 `{ x: 0.70, y: 0.56 }`，左侧保留标题空间。

**证据边界**

该图只呈现典型干查科环境和外形组合。它不能确认国家、地点、个体性别、活动带在全种中的比例或野外在场记录。[IUCN SSC specialist group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/) [IUCN](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)

### 02 `02-full-body-diagnostic-profile`

**场景与构图**

形态鉴别侧面图。恰好一只成年个体在中性干燥地表站立，严格左向右侧视，鼻端到尾尖无裁切。柔和侧光强调圆顶甲壳、活动带、三角形头尾盾、足趾和腹侧毛。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic scientific wildlife profile of exactly one adult southern three-banded armadillo, Tolypeutes matacus, standing naturally from left to right on dry compact soil with sparse Chaco grass. Use a true side view and show the entire animal from the tip of the narrow snout to the end of the short thick triangular armored tail, with every foot visible and no cropping. The animal is small and low to the ground, with a rigid dome-shaped sandy brown carapace, broad fixed shoulder and pelvic shields, three distinct movable mid-body bands within the documented two-to-four range, a triangular head shield, a triangular tail shield, coarse hair under the shell margin and on the soft underside, and short powerful limbs. The visible forefoot has anatomically coherent clawed toes with the central third claw largest; do not make a humanlike five-fingered hand. Neutral lateral light, sharp diagnostic detail, realistic keratin scale pattern, subdued background, natural museum-grade field photography without labels.
```

**Avoid list**

```text
Avoid front view, curled ball, cropped snout, cropped tail, missing feet, more than one animal, Brazilian species label, nine movable bands, turtle shell, pangolin scales, armadillo with long rabbit ears, rat tail, fluffy tail, human fingers, five equal fingernails, duplicate claws, extra legs, shell floating above the body, exposed skeleton, ruler, arrows, measurement text, studio pedestal, taxidermy glass eyes, watermark, logo or collage.
```

**可见性与验收**

- 精确计数 1 只，严格侧视，鼻端至尾尖无裁切。
- 肩盾、活动带、臀盾和三角形头尾盾之间关系清楚。
- 腹侧带毛，前足第三爪比相邻爪更大，不出现人手。
- 不靠文字或箭头补充鉴别特征。

**证据边界**

该图代表权威概述的典型外形，不能用于测量头体长、体重、活动带频率、性别差异或种群来源。[IUCN SSC specialist group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/)

### 03 `03-complete-defensive-ball`

**场景与构图**

防御闭合近景。恰好一只南方三带犰狳在干叶地表闭成甲球，三条可数活动带连接固定盾片，低角度近景让三角形头盾与尾盾的扣合处位于焦点。附近不出现捕食者、人手或外力。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic wildlife documentary close-up of exactly one southern three-banded armadillo, Tolypeutes matacus, defensively curled into a tight nearly complete ball on natural Dry Chaco leaf litter. Show the closed animal from a low three-quarter angle. Its sandy-brown rigid domed armor wraps around the body with exactly three clearly separated movable shell bands between the broad fixed shoulder and pelvic shields, and the small triangular cephalic shield and short triangular caudal shield fit flush together at the visible closure seam, hiding the eyes, snout, limbs and soft belly. Preserve irregular keratin scale texture; the object must remain clearly an armadillo curled by its own joints, not a separate spherical shell. Soft overcast daylight, a few dry leaves and thin grass stems for scale, shallow depth of field, restrained color, precise natural texture, no predator and no human contact.
```

**Avoid list**

```text
Avoid animal rolling through the air, motion streaks, downhill rolling, open face, exposed legs, exposed belly, visible eyes, visible snout, long tail outside the ball, perfect toy sphere, soccer ball, pinecone, turtle shell, pangolin, hedgehog spines, metal armor, cracked shell, predator bite, jaguar, dog, human hands, cage, road, text, arrows, watermark, logo, frame or before-and-after collage.
```

**可见性与验收**

- 精确计数 1 个闭合个体，不出现第二只动物或捕食者。
- 头盾与尾盾在一处接缝贴合，四肢、眼、鼻和腹面收在内部。
- 表面保留犰狳甲片与三条可数活动带，不能像规则玩具球。
- 画面定格在闭合状态，不暗示主动滚动速度或方向。

**证据边界**

画面重建有直接记录支持的闭合防御，不能测量闭合力、持续时间、承压能力或捕食成功率。[IUCN SSC specialist group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/) [Ferreiro et al. 2026](https://doi.org/10.1111/acv.70047)

### 04 `04-head-tail-closure`

**场景与构图**

闭合机制。恰好一只成年个体处于卷成甲球的中间阶段，圆顶甲壳弯成紧密 C 形，三条活动带在肩盾和臀盾之间弯曲。头部回收至头盾下，短而钝的三角尾盾朝头盾靠近，折叠四肢只在甲壳内侧可见。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic action reconstruction of exactly one adult southern three-banded armadillo, Tolypeutes matacus, midway through curling into a ball on a simple Dry Chaco forest floor. Show one coherent animal bending its high-domed sandy-brown armor into a tight C-shaped curve. The broad fixed shoulder and pelvic shields draw toward each other while three narrow central movable bands visibly flex. The head withdraws beneath its triangular head shield, the short triangular armored tail lifts toward it, and the legs fold inward while remaining partly visible only inside the protected curve. Keep the entire connected body in frame from a three-quarter ground-level view, with the flexible bands and narrowing head-tail opening at the visual center. Soft open shade at dusk, realistic worn keratin, sparse belly hair and fine soil texture, restrained museum-grade natural-history realism.
```

**Avoid list**

```text
Avoid two animals, detached head, duplicated tail, nine movable bands, long ringed tail, exposed organs, impossible spine, pangolin scales, turtle shell, pill bug, predator, human hand, aggression, blood, fantasy, CGI, illustration, painting, text, arrows, labels, logo, signature, border or watermark.
```

**可见性与验收**

- 精确计数 1 只，头、身体和短尾属于同一个连贯个体。
- 肩盾、三条活动带和臀盾形成可弯曲的甲壳曲线，短而钝的三角尾盾朝头盾靠近。
- 折叠四肢只在甲壳内侧可见，不出现器官、断裂甲片或第二只动物。
- 画面保持中间闭合状态，不拼接动作序列。

**证据边界**

资料支持头盾和尾盾共同封住甲球开口。单幅生成图不能证明全体个体采用完全相同的动作顺序，也不能测量闭合速度、力度、刺激来源或抵御捕食者的结果。[IUCN SSC specialist group](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/) [Ferreiro et al. 2026](https://doi.org/10.1111/acv.70047)

### 05 `05-own-burrow-excavation`

**场景与构图**

挖洞行为。恰好一只成年个体在夜间灌丛边缘以短而有力的前足挖掘浅洞口，松土、前足和完整甲壳处于同一低机位画面。验收版本经过定向编辑，把初稿的多带长尾形态改为三条活动带和短三角尾盾。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic nocturnal action image of exactly one adult southern three-banded armadillo, Tolypeutes matacus, actively excavating a shallow dome-shaped resting-burrow entrance in compact dry soil at a generalized Chaco scrub edge. Show the complete animal from a low three-quarter side view, braced on its hind feet and digging with short strong forelimbs. Its high-domed sandy-brown carapace has one broad fixed shoulder shield, three central movable bands and one broad fixed pelvic shield; keep a triangular head shield, tapered snout, narrow ears, sparse underside hair and one short thick triangular armored tail. Forefeet show three or four clawed digits where visible, with the third claw largest. Preserve a modest scatter of fresh soil, one small connected entrance, dim night ambient light and restrained museum-publication realism.
```

**Avoid list**

```text
Avoid giant tunnel, deep mine, nine-banded armadillo, five or more movable bands, long ringed tail, pangolin, tortoise, giant aardvark claws, explosive soil cloud, prey, human, shovel, fence, collar, camera trap, extra limbs, extra tail, fantasy, CGI, illustration, painting, text, ruler, arrows, labels, logo, signature, border or watermark.
```

**可见性与验收**

- 精确计数 1 只，完整身体、短尾和四足留在画面内。
- 三条活动带位于宽阔肩盾和臀盾之间，尾部为短三角尾盾。
- 前足接触松土和浅洞口，挖掘动作可读；土屑不遮挡肢体。
- 不出现地下剖面、工具、猎物或其他挖洞者。

**证据边界**

研究者拍到本种挖洞并测量其使用的洞穴。静态生成图不能证明眼前洞穴由图中个体从头挖成，也不能给出深度、完成时间、所有权、复用情况或使用频率。[Attias et al. 2016](https://doi.org/10.1590/S1984-4689zool-20160035)

### 06 `06-straw-nest-gathering`

**场景与构图**

草巢修补。恰好一只成年个体口中衔着一小束干草走向灌丛下由松散草茎与落叶覆盖的浅凹，完整动物和低矮、不规则的庇护所都留在画面内。环境为概括化的查科灌丛与牧草地镶嵌，不指定地点。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic natural-history reconstruction of exactly one adult southern three-banded armadillo, Tolypeutes matacus, carrying one modest bundle of dry grass in its mouth toward a shallow straw resting shelter at night. Use a generalized open Chaco scrub and pasture mosaic with dry bunchgrass, low thorny shrubs and leaf litter, without naming a locality. Keep the complete animal, short triangular armored tail and low inconspicuous shelter visible from a ground-level three-quarter view. The shelter is an irregular ground-level depression under a shrub, asymmetrically covered with loose dry stems and leaf litter rather than woven into a ring. Show a compact high-domed sandy-brown carapace with broad shoulder and pelvic shields and three movable bands between them, plus a triangular head shield, tapered snout, long narrow ears, sparse underside hair and short clawed legs. The grass bundle remains clear of the face. Soft nocturnal ambient fill, realistic scutes, dry fibers and soil texture, restrained documentary color.
```

**Avoid list**

```text
Avoid birds nest in a tree, woven basket, giant hay bale, grass completely hiding the head, more than one animal, juvenile following, assumed mother, visible offspring, human-built kennel, cage, zoo bedding, plastic straw, tools, human hands, rolled ball, long tail, human fingers, extra limbs, lush rainforest, text, watermark, logo, arrows or split-screen sequence.
```

**可见性与验收**

- 精确计数 1 只，口中只有一小束干草，浅草巢位于前方。
- 动物全身和四足可见，草束不遮住头盾与口鼻。
- 庇护所是地表灌丛下松散草茎覆盖的浅凹，不能像规则编织环、树上鸟巢或人工窝箱。
- 不出现幼体，也不从画面推定成年个体性别。

**证据边界**

相机记录支持个体搬运干草修补正在使用的巢。静态图不能确认性别、育幼状态、材料搬运次数、巢龄或庇护时长。[Attias et al. 2016](https://doi.org/10.1590/S1984-4689zool-20160035)

### 六图统一静态验收

1. 六张源 PNG 和六张运行时 WebP 均为 1536 × 1024，横向 3:2。
2. 文件顺序固定为 dry Chaco foraging cover、full-body diagnostic profile、complete defensive ball、head-tail closure、own-burrow excavation、straw-nest gathering。
3. 每张图只出现一只个体；展开个体保持全身完整，草巢图不出现幼体。
4. 逐图核对圆顶沙黄至棕色甲壳、三角形头盾和短尾盾、活动带、腹侧粗毛与挖掘爪。
5. 活动带保持 2 至 4 条；图像可以选择 3 条，但图说不得把 3 条写成每只固定值。
6. 展开个体不能像龟、穿山甲或九带犰狳；足部不能生成成人手。
7. 成球图不出现主动滚动轨迹，闭合过程图不拼接动作序列，挖洞图不使用地下剖面。
8. 所有图的 alt、title、caption 必须与实际动作、动物数量和画面可见细节一致。

## 精选来源与 `SpeciesSource` 草稿

最终实现建议固定以下 15 个唯一 URL。它们覆盖当前分类、全球保护、贸易状态、形态、分布、食性、挖洞、温度响应、活动空间、繁殖和综合威胁。

1. [Mammal Diversity Database: Tolypeutes matacus](https://www.mammaldiversity.org/taxon/1000419/)
2. [MDD v2.5 taxonomy changes](https://www.mammaldiversity.org/releases/diff-changes/2.5/)
3. [Casali et al. 2026: Unravelling the phylogeny of armadillos](https://doi.org/10.1111/cla.70048)
4. [IUCN Red List: Tolypeutes matacus](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en)
5. [CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)
6. [IUCN SSC specialist group: Southern three-banded armadillo](https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/)
7. [Feijó et al. 2015: Distribution of Tolypeutes](https://doi.org/10.2108/zs140186)
8. [Ferreiro et al. 2022: Reconstructing Chacoan distribution](https://doi.org/10.1007/s10914-022-09627-3)
9. [Bolkovic et al. 1995: Food habits in the Dry Chaco](https://doi.org/10.2307/1382612)
10. [Attias et al. 2016: Three-banded armadillos dig their own burrows](https://doi.org/10.1590/S1984-4689zool-20160035)
11. [Attias et al. 2018: Temperature, habitat selection and activity](https://doi.org/10.1016/j.anbehav.2018.04.011)
12. [Attias et al. 2020: Ecology and social biology](https://doi.org/10.1093/jmammal/gyaa117)
13. [Howell-Stephens et al. 2013: Zoo-housed reproductive hormones](https://doi.org/10.1016/j.anireprosci.2013.02.004)
14. [de Melo et al. 2025: Mating behavior in Brazil](https://doi.org/10.1080/01650521.2025.2557854)
15. [Ferreiro et al. 2026: Habitat loss and overexploitation](https://doi.org/10.1111/acv.70047)

```ts
const SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE = "2026-09-02" as const;
const SOUTHERN_THREE_BANDED_ARMADILLO_CONTENT_DATE = "2026-09-02" as const;

const SOUTHERN_THREE_BANDED_ARMADILLO_SOURCES = [
  {
    title: "Mammal Diversity Database: Tolypeutes matacus",
    url: "https://www.mammaldiversity.org/taxon/1000419/",
    kind: "taxonomy",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: "MDD v2.5 taxonomy changes",
    url: "https://www.mammaldiversity.org/releases/diff-changes/2.5/",
    kind: "taxonomy",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: "Casali et al. 2026: Unravelling the phylogeny of armadillos",
    url: "https://doi.org/10.1111/cla.70048",
    kind: "taxonomy",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: "IUCN Red List: Tolypeutes matacus",
    url: "https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en",
    kind: "conservation",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: "CITES Appendices, effective 5 March 2026",
    url: "https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf",
    kind: "conservation",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: "IUCN SSC specialist group: Southern three-banded armadillo",
    url: "https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/",
    kind: "general",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: "Feijó et al. 2015: Distribution of Tolypeutes",
    url: "https://doi.org/10.2108/zs140186",
    kind: "ecology",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: "Ferreiro et al. 2022: Reconstructing Chacoan distribution",
    url: "https://doi.org/10.1007/s10914-022-09627-3",
    kind: "ecology",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: "Bolkovic et al. 1995: Food habits in the Dry Chaco",
    url: "https://doi.org/10.2307/1382612",
    kind: "ecology",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: "Attias et al. 2016: Three-banded armadillos dig their own burrows",
    url: "https://doi.org/10.1590/S1984-4689zool-20160035",
    kind: "ecology",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: "Attias et al. 2018: Temperature, habitat selection and activity",
    url: "https://doi.org/10.1016/j.anbehav.2018.04.011",
    kind: "ecology",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: "Attias et al. 2020: Ecology and social biology",
    url: "https://doi.org/10.1093/jmammal/gyaa117",
    kind: "ecology",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: "Howell-Stephens et al. 2013: Zoo-housed reproductive hormones",
    url: "https://doi.org/10.1016/j.anireprosci.2013.02.004",
    kind: "general",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: "de Melo et al. 2025: Mating behavior in Brazil",
    url: "https://doi.org/10.1080/01650521.2025.2557854",
    kind: "ecology",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: "Ferreiro et al. 2026: Habitat loss and overexploitation",
    url: "https://doi.org/10.1111/acv.70047",
    kind: "conservation",
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 研究阶段 `Species` 对象草稿

该对象按当前 `Species` schema 映射研究结论。它是实现底稿，不代表资源文件、测试或 TODO 已经完成。

```ts
const southernThreeBandedArmadillo = {
  id: "species-tolypeutes-matacus",
  slug: "southern-three-banded-armadillo",
  names: {
    zh: "南方三带犰狳",
    en: "Southern Three-banded Armadillo",
    aliases: [],
  },
  scientificName: "Tolypeutes matacus",
  taxonomy: animalTaxonomy(
    taxon("Chordata", "脊索动物门"),
    taxon("Mammalia", "哺乳纲"),
    taxon("Cingulata", "有甲目"),
    taxon("Tolypeutidae", "三带犰狳科"),
    taxon("Tolypeutes", "三带犰狳属"),
  ),
  conservation: conservation("NT", "decreasing", 2024, "A2cd"),
  distribution: {
    realms: ["terrestrial"],
    continents: ["南美洲"],
    regions: [
      "玻利维亚东部查科",
      "巴西Mato Grosso与Mato Grosso do Sul西南部",
      "巴拉圭大查科",
      "阿根廷北部与中部至San Luis省",
      "Buenos Aires省南部历史分布区，当前可能已局部消失",
    ],
    countries: ["阿根廷", "玻利维亚", "巴西", "巴拉圭"],
    range:
      "自然分布从玻利维亚东部和巴西西南部向南穿过巴拉圭大查科，进入阿根廷北部与中部，当前南界约至San Luis省，海拔从海平面到约800米。Buenos Aires省南部只有历史分布且近年调查提示局部消失，地图必须与当前在场区分开。",
    center: { lat: -23, lng: -61 },
  },
  habitats: [
    {
      name: "热带或亚热带干旱林",
      realm: "terrestrial",
      description:
        "干查科刺林和季节性干林提供无脊椎动物、隐蔽灌丛、草巢材料与可挖洞地表。",
      isPrimary: true,
    },
    {
      name: "干旱稀树草原",
      realm: "terrestrial",
      description:
        "开阔草地与木本斑块交错；景观异质性为取食、移动和热庇护提供选择。",
      isPrimary: true,
    },
    {
      name: "温带灌丛",
      realm: "terrestrial",
      description:
        "阿根廷分布南部较冷而干旱的灌丛，属于IUCN列出的主要适宜生境。",
      isPrimary: true,
    },
    {
      name: "湿润稀树草原、棕榈草原与廊道林",
      realm: "terrestrial",
      description:
        "IUCN将湿润稀树草原列为边缘生境；潘塔纳尔研究显示林斑能在极端温度下提供热庇护。",
    },
    {
      name: "低强度农业镶嵌",
      realm: "terrestrial",
      description:
        "本种可容忍低水平农业扰动，但大面积作物转化仍移除主要生境，不能把农地视为原生植被替代品。",
    },
  ],
  measurements: {
    length: {
      min: 20,
      max: 25,
      unit: "cm",
      note: "成体头体长；当前精选来源未提供同口径尾长范围。",
    },
    weight: {
      min: 1,
      max: 2,
      unit: "kg",
      note: "IUCN SSC专家组参考范围；巴西两个野外地点的成年样本为0.96至1.62千克。",
    },
  },
  diet: {
    types: ["insectivore", "omnivore"],
    foods: [
      "蚂蚁",
      "白蚁",
      "甲虫幼虫与其他无脊椎动物",
      "果实",
      "种子与其他植物材料",
    ],
    description:
      "机会主义昆虫食者，以无脊椎动物为主，也利用果实、种子和其他植物材料。Copo保护区66份胃内容物中的比例随季节改变，不能设成全物种固定菜单。",
  },
  activity: [
    "主要在夜间活动，多数活动集中在前半夜；气温下降时会提前开始并缩短活动时段",
    "受威胁时把头、四肢和腹面收进甲壳，让三角形头盾与尾盾扣成紧密甲球",
    "会挖自己的小型休息洞，也使用草巢和落叶覆盖的浅凹，并能搬草修补巢穴",
    "通常单独活动；繁殖期发情雌性可引发多只雄性追逐和竞争",
    "用前足挖开土壤或腐木寻找昆虫，也随季节取食果实等植物材料",
  ],
  tags: [
    "脊索动物门",
    "哺乳纲",
    "有甲目",
    "三带犰狳科",
    "南美洲",
    "查科",
    "主要夜行",
    "机会主义昆虫食",
    "成球防御",
    "挖洞",
    "IUCN近危",
    "CITES未列入",
  ],
  summary:
    "南方三带犰狳以圆顶甲壳、三角形头尾盾和可闭合成球的身体生活在南美查科及相邻生境；它会挖小洞、随季节改变食谱，却因农业转化和易被拾取而持续下降。",
  description:
    "南方三带犰狳Tolypeutes matacus是一种分布于阿根廷、玻利维亚、巴西和巴拉圭的有甲目小型哺乳动物。它的头体长约20至25厘米，体重约1至2千克，沙黄至棕色的高拱甲壳由肩盾、2至4条活动带和臀盾组成；三角形头盾与短尾盾可在遇险时扣合，把四肢和软腹收进近乎完整的甲球。它会用强壮前爪挖自己的小型休息洞，也会搭草巢或躲在落叶覆盖的浅凹中。胃内容物研究显示它是机会主义昆虫食者，无脊椎动物占主体，果实等植物材料随季节加入菜单。IUCN在2024年完成的评估把本种列为近危、趋势下降，依据A2cd判断农业转化和猎捕造成的12年缩减已接近易危门槛。当前没有可靠的全球成熟个体数或野外寿命数据，本种也未列入2026年现行CITES附录。",
  storySections: [
    {
      key: "armor-with-moving-seams",
      label: "形态",
      title: "高拱甲壳仍保留活动接缝",
      body: "肩盾和臀盾之间有2至4条活动带，头盾和短尾盾都呈三角形。活动接缝让高拱甲壳能够弯曲闭合；名称中的“三带”不保证每只个体恰有三条。腹面和腿内侧仍是带毛的软组织，甲壳也不是龟壳。",
    },
    {
      key: "closing-the-armor-ball",
      label: "防御",
      title: "头盾和尾盾扣成一只甲球",
      body: "受到威胁时，它把头、四肢和软腹收进甲壳，三角形头盾与尾盾贴合周围甲片。甲球能降低许多捕食风险，也让人更容易拾取，防御行为因此与猎捕脆弱性连在一起。",
    },
    {
      key: "yes-they-dig",
      label: "庇护",
      title: "它会挖洞，也会搭草巢",
      body: "野外相机直接记录南方三带犰狳从头挖出小洞。巴西两个地点的休息点还包括草巢和落叶覆盖的浅凹；研究者也拍到个体搬草修补巢。不同年龄和繁殖状态会改变庇护所的选择与重复使用。",
    },
    {
      key: "seasonal-opportunistic-menu",
      label: "食性",
      title: "旱季虫群与雨季果实改变菜单",
      body: "Copo保护区66份胃内容物显示，无脊椎动物占主体，植物材料主要是果实。甲虫幼虫全年出现，蚂蚁和白蚁在旱季更常见，果实在雨季增加。局地样本支持机会主义昆虫食，不能设成全种固定比例。",
    },
    {
      key: "night-movement-and-rallies",
      label: "活动",
      title: "多数夜晚独行，发情时形成追逐",
      body: "潘塔纳尔GPS研究记录活动集中在前半夜，雄性活动范围大于雌性。另一项野外研究观察到发情雌性引发雄性追逐，最大聚集来自4只发情雌性中的一次记录，说明繁殖期会短暂聚集，不代表稳定群居。",
    },
    {
      key: "defense-cannot-stop-land-conversion",
      label: "保护",
      title: "甲球挡不住猎捕和土地转化",
      body: "IUCN认为农业扩张和针对性猎捕影响分布区的大部分范围，当前全球趋势下降。保护区覆盖的适生区不超过12%，本种又没有系统性全球监测。保护需要同时管理原生植被、收获和贸易路径。",
    },
  ],
  keyFacts: [
    "MDD接受名为Tolypeutes matacus，当前置于有甲目、三带犰狳科、三带犰狳属。",
    "自然分布于阿根廷、玻利维亚、巴西和巴拉圭，海拔从海平面到约800米。",
    "Buenos Aires省南部只有历史记录，近年调查提示当地已经消失。",
    "当前IUCN全球等级为近危，趋势下降，评估日期为2024年，准则A2cd。",
    "IUCN推定12年内缩减低于30%但已接近易危门槛，这不是全球个体普查。",
    "没有可靠的当前全球成熟个体数，也没有野外寿命数据。",
    "头体长约20至25厘米，体重约1至2千克。",
    "圆顶甲壳有2至4条活动带，名称中的三带不是固定个体数。",
    "三角形头盾和尾盾能在成球时扣合，腹面与四肢收进甲壳内部。",
    "它会挖自己的小洞，也会使用草巢和落叶覆盖的浅凹。",
    "机会主义昆虫食包括蚂蚁、白蚁和甲虫幼虫，也随季节取食果实等植物材料。",
    "主要在前半夜活动，但温度会改变活动开始时间和持续时长。",
    "通常单独活动，繁殖期可出现多雄追逐发情雌性的短暂聚集。",
    "主要威胁为农业转化和针对性猎捕，宠物展示用途、手工艺利用与道路死亡也有记录。",
    "当前CITES附录未列入本种，国际与国内交易仍需遵守适用法规。",
  ],
  threats: [
    "一年生和多年生作物扩张造成的干林、稀树草原和灌丛转化与退化",
    "食用性针对猎捕；闭合成球后容易被人拾取，提高捕获风险",
    "宠物、展示和手工艺用途带来的野外捕捉与运输死亡",
    "道路和铁路造成的局地死亡",
    "缺少系统性种群、收获和贸易监测，使局地下降难以及时量化",
  ],
  conservationActions: [
    "管理干查科、干旱稀树草原和温带灌丛，限制把原生植被转为大面积作物地",
    "保留草地、灌丛、棕榈草原和廊道林构成的异质景观与热庇护林斑",
    "建立食用、宠物、展示和手工艺用途的收获管理与来源追踪",
    "扩大保护地外的地点管理；当前受保护适生区不超过12%",
    "在四个分布国统一监测种群、栖息地、捕猎、道路死亡与贸易趋势",
    "补足野外繁殖率、寿命、幼体存活和不同生境空间利用研究",
  ],
  metrics: {
    adultLengthCm: [20, 25],
    adultMassKg: [1, 2],
    elevationM: [0, 800],
  },
  featuredStats: [
    {
      key: "iucn-status",
      label: "IUCN",
      value: "NT",
      note: "近危，全球趋势下降；2024年评估，准则A2cd。",
    },
    {
      key: "movable-bands",
      label: "甲壳活动带",
      value: "2–4",
      unit: "条",
      note: "个体可见范围；名称中的“三带”不是固定数量。",
    },
    {
      key: "head-body-length",
      label: "头体长",
      value: "20–25",
      unit: "厘米",
      note: "IUCN SSC专家组物种概述范围。",
    },
    {
      key: "pantanal-daily-activity",
      label: "每日活动",
      value: "5.5 ± 2.8",
      unit: "小时",
      note: "巴西潘塔纳尔两个地点的监测结果，多数活动集中在前半夜。",
    },
  ],
  media: {
    image:
      "./images/species/southern-three-banded-armadillo/01-dry-chaco-foraging-cover.webp",
    alt: "干查科黄昏地表，一只南方三带犰狳低头觅食，高拱棕色甲壳、四条活动带、三角形头盾和短尾盾清晰可见",
    focalPoint: { x: 0.7, y: 0.56 },
    credit: "Fauna Atlas · AI 生成科学情景重建",
    gallery: [
      {
        image:
          "./images/species/southern-three-banded-armadillo/02-full-body-diagnostic-profile.webp",
        alt: "一只完整南方三带犰狳侧身站立，圆顶甲壳、活动带、三角形头尾盾、腹侧粗毛和四足留在画面内",
        title: "圆顶甲壳与三角形头尾盾",
        caption:
          "形态重建显示一只展开个体的典型外形；画面不能测量体长、体重，也不能确认性别、来源地或活动带频率。",
        focalPoint: { x: 0.52, y: 0.55 },
        credit: "Fauna Atlas · AI 生成科学情景重建",
      },
      {
        image:
          "./images/species/southern-three-banded-armadillo/03-complete-defensive-ball.webp",
        alt: "一只南方三带犰狳在干叶地面闭成紧密甲球，三角形头盾与尾盾在可见接缝处贴合",
        title: "闭合的甲球防御",
        caption:
          "防御重建显示头盾与尾盾扣合；静态画面不能给出闭合力、持续时间、承压能力或主动滚动速度。",
        focalPoint: { x: 0.5, y: 0.54 },
        credit: "Fauna Atlas · AI 生成科学情景重建",
      },
      {
        image:
          "./images/species/southern-three-banded-armadillo/04-head-tail-closure.webp",
        alt: "一只南方三带犰狳正弯身闭合甲壳，头盾与短尾盾彼此靠近，折叠四肢仍在甲壳内侧可见",
        title: "头尾盾封住甲球开口",
        caption:
          "闭合过程重建显示头盾、尾盾和活动带的相对位置；画面不能给出统一动作顺序、闭合速度、力量、刺激来源或抵御捕食者的结果。",
        focalPoint: { x: 0.55, y: 0.57 },
        credit: "Fauna Atlas · AI 生成科学情景重建",
      },
      {
        image:
          "./images/species/southern-three-banded-armadillo/05-own-burrow-excavation.webp",
        alt: "夜间一只南方三带犰狳在浅洞口旁以带爪前足挖动松土，三条活动带和短三角尾盾清晰可见",
        title: "会自己挖出的休息洞",
        caption:
          "挖洞重建显示前足、松土和浅洞口；画面不能证明该个体从头挖成此洞，也不能给出洞穴尺寸、完成时间、所有权、复用情况或使用频率。",
        focalPoint: { x: 0.56, y: 0.53 },
        credit: "Fauna Atlas · AI 生成科学情景重建",
      },
      {
        image:
          "./images/species/southern-three-banded-armadillo/06-straw-nest-gathering.webp",
        alt: "黄昏一只南方三带犰狳口衔小束干草，走向低矮灌丛下的浅草巢，完整身体和四足可见",
        title: "搬草修补地表庇护所",
        caption:
          "庇护行为重建显示搬运干草；画面不能确认个体性别、育幼状态、巢龄、搬运次数或使用时长。",
        focalPoint: { x: 0.58, y: 0.55 },
        credit: "Fauna Atlas · AI 生成科学情景重建",
      },
    ],
  },
  sources: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCES,
  featured: true,
  publishedAt: SOUTHERN_THREE_BANDED_ARMADILLO_CONTENT_DATE,
  updatedAt: SOUTHERN_THREE_BANDED_ARMADILLO_CONTENT_DATE,
} as const satisfies Species;
```

## 实现交接检查表

### 研究底稿

- [x] 接受名、英文主名、编辑采用的中文名和空别名数组分别说明来源边界。
- [x] MDD 2026 的 Tolypeutidae 与 IUCN 2025 的 Chlamyphoridae 版本差异已经记录。
- [x] IUCN 等级、趋势、评估年、准则、12 年窗口与数量缺口已经分开。
- [x] 四国当前范围、Buenos Aires 历史局部消失区和 0 至 800 米海拔已经分开。
- [x] 四类 IUCN 自然生境与低强度农业镶嵌的边界已经覆盖。
- [x] 头体长和体重采用同一专家组范围，野外样本只用于交叉核对。
- [x] 成球、挖洞、草巢、机会主义食性、夜间活动和繁殖追逐均保留样本边界。
- [x] CITES 当前未列入结论与“可自由贸易”错误推论已经分开。
- [x] 六个故事提供 `key`、`label`、`title`、`body`；四项指标有邻近来源。
- [x] 精选来源为 15 个唯一 URL，访问日期统一为 `2026-09-02`。

### 图像规格

- [x] 六幅图均提供独立场景、1536 × 1024 photorealistic prompt、avoid list、可见性验收与证据边界。
- [x] 六图顺序固定为 dry Chaco foraging cover、full-body diagnostic profile、complete defensive ball、head-tail closure、own-burrow excavation、straw-nest gathering。
- [x] 展开个体保持圆顶甲壳、2 至 4 条活动带、三角形头尾盾、腹侧粗毛和挖掘爪。
- [x] 成球图只呈现闭合，不画滚动轨迹；挖洞图不使用地下剖面；取食图不拼接多季节菜单。

### 实现与验证

- [x] 生成并静态检查六张源 PNG 与六张运行时 WebP。
- [x] 把来源、分类单元和完整物种对象写入 `src/data/species.ts`。
- [x] 更新分类测试、媒体断言、素材索引和 `docs/todo.md`。
- [x] 运行测试、类型检查、生产构建、资产尺寸检查和 `git diff --check`。

研究、资源、代码、测试与 TODO 已在 2026-09-02 对齐，南方三带犰狳档案完成。
