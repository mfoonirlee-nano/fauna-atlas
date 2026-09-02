# 指猴完整物种档案研究

- 分类单元：`Daubentonia madagascariensis` (J. F. Gmelin, 1788)
- 主中文名：指猴
- 英文名：Aye-aye
- 研究日期：2026-09-02
- 用途：为 `src/data/species.ts` 的完整物种档案、六个故事章节和六张原创图像提供可追溯底稿
- 证据口径：接受名和高阶分类优先采用 Mammal Diversity Database，全球保护等级、分布、海拔、威胁和行动优先采用 IUCN 当前评估，国际贸易状态采用 CITES 当前附录，形态与行为优先采用同行评审原始研究。圈养数据、单个地点和小样本研究均单独标明

## 编辑结论

指猴是马达加斯加特有的灵长目动物，也是指猴科唯一现生物种。Mammal Diversity Database 接受名为 `Daubentonia madagascariensis`，英文主名为 Aye-aye，分类置于灵长目、湿鼻亚目、指猴下目、指猴科。中国履约机构发布的 2026 年 CITES 附录中文版在第 13 页列出“指猴”，产品主中文名应采用这一官方名称。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1000929/) [中国 CITES 附录中文版，2026](https://www.cites.org.cn/citesgy/fl/202604/P020260401624252070602.pdf)

IUCN 当前全球等级为濒危 `EN`，种群趋势下降，准则为 `A2cd+3cd+4cd`。评估日期是 2018 年 5 月 7 日，条目在 2020 年发布，所以 `assessedYear` 应填 `2018`。IUCN 怀疑该物种在 36 年，即三个世代内减少至少 50%，并预测未来三个世代也会减少至少 50%。这组数值来自栖息地持续衰退和不可持续猎捕等证据，不是一次覆盖全岛的个体普查。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)

指猴最有辨识度的取食动作由多套结构配合完成。它以细长的第三指敲击木面，借声学和可能的触觉线索检测木材内部的结构界面，再用持续生长的门齿开孔，并按基质选择第三指或更强壮的第四指探取食物。实验没有证明它必须先锁定空气腔、虫道或幼虫，也不支持把这套过程直接称作蝙蝠式回声定位。[Erickson 1991](<https://doi.org/10.1016/S0003-3472(05)80346-X>) [Erickson et al. 1998](https://doi.org/10.1023/A:1020363128240) [Lhota et al. 2008](https://doi.org/10.1002/ajp.20548)

产品需要主动拆掉三个常见误读。第一，分布广不等于数量多；IUCN 明确指出野外数量和动态仍难掌握。第二，取食痕迹不能直接换算个体数，因为一只动物可留下多处痕迹。第三，关于“恶兆”的态度并不代表所有马达加斯加社区。东北部 Makira 周边的访谈发现态度在村落之间变化，也记录到中性、正面和禁止猎杀的看法；2025 年研究还记录了农户认为指猴会取食丁香树害虫的地方生态知识，但研究没有直接测量全区域害虫控制量。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en) [Randimbiharinirina et al. 2021](https://doi.org/10.1002/pan3.10192) [Rabemananjara et al. 2025](https://doi.org/10.3389/fcosc.2025.1553217)

## 名称、分类与物种边界

### 建议名称字段

| 字段             | 建议值                         | 依据与边界                                                                 |
| ---------------- | ------------------------------ | -------------------------------------------------------------------------- |
| `scientificName` | `Daubentonia madagascariensis` | MDD 当前接受名                                                             |
| `names.zh`       | 指猴                           | 中国履约机构发布的 2026 年 CITES 附录中文版第 13 页使用该中文名            |
| `names.en`       | Aye-aye                        | MDD 英文主名                                                               |
| `aliases`        | `[]`                           | 没有找到足够权威且适合作为产品检索词的别名，不收录来源不明的中文或英文变体 |

MDD 记录原始组合为 `Sciurus madagascariensis`，说明早期命名曾把它放入松鼠属。该历史不改变其现代分类。公众文案可用它说明外形为何容易让人误判，不能据此称指猴为啮齿动物。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1000929/)

### 分类图谱

| 分类阶元 | 学名                         | 中文名     |
| -------- | ---------------------------- | ---------- |
| 界       | Animalia                     | 动物界     |
| 门       | Chordata                     | 脊索动物门 |
| 纲       | Mammalia                     | 哺乳纲     |
| 目       | Primates                     | 灵长目     |
| 亚目     | Strepsirrhini                | 湿鼻亚目   |
| 下目     | Chiromyiformes               | 指猴下目   |
| 科       | Daubentoniidae               | 指猴科     |
| 属       | Daubentonia                  | 指猴属     |
| 种       | Daubentonia madagascariensis | 指猴       |

现有 `Species` schema 不存亚目和下目，数据对象只需要新增或复用灵长目、指猴科和指猴属。正文仍可说明湿鼻亚目与指猴下目的位置。MDD 将该物种列为现生、野外存在的接受种；Quinn 和 Wilson 的物种专论也将它列为指猴科唯一现生成员，同时区分已经灭绝的 `Daubentonia robusta`。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1000929/) [Quinn and Wilson 2004](https://doi.org/10.1644/740)

## 全球保护状态与法律边界

| 字段         | 建议值         | 说明                                 |
| ------------ | -------------- | ------------------------------------ |
| system       | IUCN Red List  | 仓库固定值                           |
| code         | `EN`           | 当前全球等级为濒危                   |
| trend        | `decreasing`   | 当前趋势下降                         |
| assessedYear | `2018`         | 评估日期为 2018-05-07，发布年为 2020 |
| criteria     | `A2cd+3cd+4cd` | 基于过去、未来及跨时段的种群缩减判断 |
| assessor     | IUCN           | 由仓库 helper 统一生成               |

IUCN 将 12 年作为一个世代长度，并用 36 年作为三个世代窗口。条目的“至少 50%”是怀疑已经发生和预测将发生的缩减幅度，不是精确观测到 50% 的全球普查结果。IUCN 还记录估算分布范围 `EOO` 为 523,499 平方千米、范围继续下降、亚种群继续下降且种群严重破碎。EOO 是范围几何指标，不能换算占用面积或个体数。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)

IUCN 没有给出可作为当前全球成熟个体数的稳定估计。档案不得沿用旧网页常见的“1,000 至 10,000 只”，也不得把野外取食痕迹、保护地记录数或圈养谱系数量拼成全球数量。`estimatedMatureIndividuals` 应留空。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)

CITES 当前附录将 `Daubentonia madagascariensis` 列入附录 I。附录 I 对国际商业贸易施加最严格限制，特定非商业情形仍可能依许可证进行，所以产品应写“列入 CITES 附录 I，国际贸易受到严格管制”，不要写“任何交易在任何司法辖区都绝对违法”。[CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CITES explanation of the Appendices](https://cites.org/eng/app/index.php)

## 分布、海拔与地图口径

### 权威来源的摘要差异

MDD 的当前简短分布摘要写作“马达加斯加东北部和西北部，分布不连续”。IUCN 2020 评估整合了更多直接观察与取食痕迹记录，描述东部、北部和中西部森林，并认为低密度、破碎斑块可沿马达加斯加大部分沿海地带出现。两个来源的粒度不同，不能静默拼成一条连续的全岛色带。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1000929/) [IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)

产品范围文字应采用 IUCN 的详细记录，地图则强调“森林斑块和记录带”，不要涂满马达加斯加。建议区域为：

1. 东部湿润森林带，从东北部向东南部延伸的分散记录
2. 北部和西北部森林
3. 西部与中西部干燥落叶林斑块
4. 与原生林相连的次生林、农林和种植园镶嵌

国家字段只填马达加斯加，`endemicTo` 也填马达加斯加。`center: { lat: -18.5, lng: 47 }` 只用于地图初始焦点，不代表密度中心。IUCN 给出的海拔范围为 10 至 1,875 米；该范围可进入 `metrics.elevationM`。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)

东北海岸外还有两次人为迁移需要与自然分布分开。20 世纪 60 年代中期，九只个体被移入 Nosy Mangabe，此后存活得到确认；该岛此前是否曾有自然种群仍不确定。Île Roger 也曾建立引入种群，但已有报告认为它可能已经局部灭绝。产品地图若标出两岛，必须使用“引入”图例，并给 Île Roger 加上现状不确定提示，不能把它们并入自然分布色带。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)

## 栖息地

IUCN 列出的陆地主要生境明确覆盖热带或亚热带干旱林、湿润低地林、高于高潮线的红树林植被、湿润山地林和干灌丛。评估也记录种植园与乡村花园利用，但把它们列为边缘生境。种植园和花园通常需要邻接本土森林，不能单独替代完整森林。南部刺林明显缺少记录，但这不是对每一片刺林的全面缺席调查。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)

建议 `habitats`：

1. **热带或亚热带湿润低地林**：东部低地湿润森林，标为主要陆地生境。
2. **热带或亚热带湿润山地林**：较高海拔湿润森林，标为主要陆地生境。
3. **热带或亚热带干旱林**：西部及西北部干燥落叶林，标为主要陆地生境。
4. **高于高潮线的热带或亚热带红树林植被**：只表示陆地一侧的红树林使用，不把物种归为水生或海岸潮间带动物。
5. **热带或亚热带干灌丛**：标为主要陆地生境，不能与南部刺林的记录缺口混为一谈。
6. **次生林与森林边缘**：指猴可以利用受扰森林，但长期维持仍取决于残存大树、树冠连通和邻近本土林。
7. **种植园与乡村花园**：标为边缘陆地生境；可提供作物或昆虫资源，也可能引发冲突，不是完整森林的等价替代。

Ancrenaz 等人在马达加斯加东北部受扰次生林进行短期无线电追踪，记录到指猴利用多种林层和食物。该研究支持“能使用次生林”，不支持“森林退化对它没有影响”。一项跨 Kianjavato 受扰林与 Torotorofotsy 连续林的研究还发现，四只个体都在活树和枯木上寻找无脊椎动物，使用比例随地点和个体改变。[Ancrenaz et al. 1994](https://doi.org/10.1159/000156760) [Sefczek et al. 2017](https://doi.org/10.1007/s10329-017-0617-8)

## 体型、外形与稳定测量值

### 测量证据与取值

IUCN SSC 灵长类专家组、国际灵长类学会、Global Wildlife Conservation 与 Bristol Zoological Society 联合出版的《Primates in Peril 2018–2020》在指猴条目中统一列出：头体长 30 至 37 厘米，尾长 44 至 53 厘米，体重 2.5 至 2.6 千克。结构化字段应采用这一套同源数值，不把不同机构、年代和样本的近似值拼成范围。[Primates in Peril 2018–2020](https://cdn.rewild.org/2019/10/Primates-in-Peril-2018-2020-2.pdf)

| 字段           | 建议值        | 是否进入 `metrics`            | 边界                                                               |
| -------------- | ------------- | ----------------------------- | ------------------------------------------------------------------ |
| 头体长         | 30 至 37 cm   | 是，`adultLengthCm: [30, 37]` | 同一权威汇编的物种条目范围                                         |
| 成年体重       | 2.5 至 2.6 kg | 是，`adultMassKg: [2.5, 2.6]` | 同一权威汇编的物种条目范围                                         |
| 尾长           | 44 至 53 cm   | 否                            | 用于正文和图像比例，不与头体长相加后另造结构化字段                 |
| 总长           | 74 至 90 cm   | 否                            | 同一物种条目明确报告的总长；当前 schema 仍采用头体长，尾长只进说明 |
| 海拔           | 10 至 1,875 m | 是，`elevationM: [10, 1875]`  | IUCN 全球记录范围                                                  |
| 野外寿命       | 不录入        | 否                            | 可见数字多来自圈养记录，不代表野外寿命                             |
| 全球成熟个体数 | 不录入        | 否                            | IUCN 缺少稳定总体估计                                              |

`measurements.length` 写“头体长 30–37 厘米”，`measurements.weight` 写“2.5–2.6 千克”。`adultLengthCm` 和 `adultMassKg` 使用相同范围，避免展示文字与筛选字段互相矛盾。

### 图像必须保留的外形组合

Quinn 和 Wilson 描述长而粗乱的深褐至黑色毛，被毛间夹有白色尖端的长针毛；脸和喉部较浅，鼻端偏粉；眼睛呈黄橙或沙色；耳朵很大、三角形、裸露且可转动；尾巴长而浓密。手指细长、带弯曲爪，第三指尤其纤细。该组合比“像恐怖片角色”更适合作为写实图像基线。[Quinn and Wilson 2004](https://doi.org/10.1644/740)

图像还要区分第三指和第四指。四只自由活动个体的 686 次观察显示，极细第三指偏向高机动、精确的敲击和狭窄探取；第四指更长、更粗壮，偏向用力、舀取和深入软基质。具体使用会随死木、活木、竹、果肉和坚果改变，不能让第三指承担所有动作。[Lhota et al. 2008](https://doi.org/10.1002/ajp.20548)

解剖研究在 7 个标本中记录到由膨大的桡侧籽骨、软骨延伸和独立掌垫组成的“伪拇指”。它可能帮助抓握，但不是从手掌伸出的完整第六根长指。生成图应保持五根正常可见手指，可在掌根内侧表现小型掌垫，不能画成六根同等长度的手指。[Hartstone-Rose et al. 2020](https://doi.org/10.1002/ajpa.23936)

## 敲击扫描、牙齿与双指分工

Erickson 的早期控制实验显示，指猴能在缺少必要视觉和嗅觉线索时区分木块内的空腔，对含活跃幼虫的空腔开孔更多。后续五项实验收紧了机制解释：即使空腔以明胶或吸声泡棉回填，动物仍会挖掘；材料密度变化没有造成挖掘频率差异；单一的木材表面下结构界面已经足以触发反应。因此最稳妥的描述是“用敲击线索检测木材内部的结构界面或声学不连续，之后可能再结合猎物活动等信息”，不能断言它必须找到空气腔、虫道或幼虫，也不能等同蝙蝠式回声定位。[Erickson 1991](<https://doi.org/10.1016/S0003-3472(05)80346-X>) [Erickson et al. 1998](https://doi.org/10.1023/A:1020363128240)

完整动作顺序可写成：

1. 用纤细第三指快速、轻柔地敲击木面。
2. 将大耳向木面转动，比较敲击产生的线索，检测木材表面下结构界面或声学不连续。
3. 用持续生长的门齿咬开木质外层。
4. 根据孔径和基质强度，用第三指精确勾取，或用更强壮的第四指扩大、舀取和深入。

2012 年声学论文只记录了 Duke Lemur Center 的一只成年雄性圈养个体 Merlin，在藏有食物奖励的 2×4 英寸东部白松木板上敲击。实验得到敲击间隔 `97.7 ± 19.9 ms`，每次敲击主能量位于 `6–15 kHz`，总能量跨越约 `2–27 kHz`。这些数字只描述 Merlin、该人工丰容木板和这套录音条件；论文作者明确提醒，温带软木的声学属性不能代表马达加斯加野外腐木或活树。`97.7 ± 19.9 ms` 可作为一项带有完整限定的实验故事指标，`6–15 kHz` 只留在正文；两者都不能写成全物种常数。[Ramsier and Dominy 2012](https://doi.org/10.4161/cib.21509)

持续生长的门齿与灵长类手并存，使指猴在外观上容易被错画成啮齿动物。图像可露出咬木时的上下门齿，但不能画成河狸式宽大橙色齿板，也不能让门齿在闭口静止肖像中夸张外露。[Duke Lemur Center](https://lemur.duke.edu/discover/meet-the-lemurs/aye-aye/) [Quinn and Wilson 2004](https://doi.org/10.1644/740)

## 食性与资源利用

指猴属于杂食、以无脊椎动物取食见长的灵长类。公开机构与野外研究记录昆虫幼虫和成虫、硬壳种子与坚果、果实、花蜜以及种植园资源。产品可将 diet types 设为 `omnivore` 和 `insectivore`，食物数组使用功能类群，不把一处样地的植物名单当成全岛固定菜单。[Duke Lemur Center](https://lemur.duke.edu/discover/meet-the-lemurs/aye-aye/) [Randimbiharinirina et al. 2018](https://doi.org/10.1159/000486673)

Kianjavato 的研究跟踪两只雄性一年，发现多数取食时间集中在不同基质中的幼虫和成虫，Canarium 种子占较小部分。Torotorofotsy 的后续研究跟踪一只成年雌性和一只幼年雄性，无脊椎动物在两只个体的记录食谱中均超过 88%。这些研究支持“某些天然或受扰林地的食谱可高度偏向昆虫”，不能把 88% 写成全物种固定比例。[Randimbiharinirina et al. 2018](https://doi.org/10.1159/000486673) [Sefczek et al. 2020](https://doi.org/10.1002/ajpa.23963)

“只在枯木里找虫”也不准确。跨两个地点、四只个体的研究记录 373 小时与 383 小时焦点跟踪，发现活树上的无脊椎动物取食比过去认识更重要，活树与枯木使用随个体和地点变化。图像场景可选择活枝或腐木，但图说不能把任一种基质写成唯一来源。[Sefczek et al. 2017](https://doi.org/10.1007/s10329-017-0617-8)

## 活动、空间与社会行为

指猴夜行，通常单独取食，白天在树上以枝叶构筑的巢内休息。Duke 的机构概述写它可把一夜多达 80% 的时间用于取食和移动，也会下到地面行进。该比例适合作为机构行为概述，不应转成全球固定时间预算。[Duke Lemur Center](https://lemur.duke.edu/discover/meet-the-lemurs/aye-aye/)

“单独取食”不等于严格独居或没有社会接触。早期野外观察记录大多数活动单元为单只，也见到取食聚集；雄性范围可与雄性及雌性重叠。IUCN 还汇总了结伴取食、求偶和母幼互动。产品可写“以单独夜间取食为主，空间范围重叠并有情境性互动”，不要写“除交配外永不见面”。[Ancrenaz et al. 1994](https://doi.org/10.1159/000156760) [IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)

活动范围随森林、资源、性别、个体和计算方法变化。Torotorofotsy 连续林的一雄一雌长期研究得到雄性最小凸多边形 2,586 公顷、雌性 765 公顷，雌性季节性 Brownian bridge 估计为 443.6 至 1,010.0 公顷。样本只有两只，雌性又经历育幼，这组数字只能说明指猴可能需要很大的连通森林，不能设成物种固定领域范围或 featured stat。[Sefczek et al. 2020, home range](https://doi.org/10.1159/000508620)

一只指猴会建造和轮换多个日间巢，不同个体也可在不同日期使用同一巢。巢通常位于树冠分叉处，由枝条和叶片围成封闭球状结构。巢内同框最稳妥的关系是母亲与一只依赖幼体，不能凭图认定两只成体为终生配偶。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en) [Duke Lemur Center](https://lemur.duke.edu/discover/meet-the-lemurs/aye-aye/)

## 繁殖与生活史

IUCN 将繁殖描述为不受固定季节限制，每胎一仔，幼体依赖与断奶阶段持续约 18 至 24 个月，约 3 至 4 岁才进入繁殖，产仔间隔约 2 至 3 年。这组当前全球评估的生活史摘要可用于正文，但仍是物种层面的归纳，不保证每一地点和每一个体相同。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)

Duke 的旧公众材料与圈养饲养指南给出的发育端点并不一致，公众页写约 2 岁，饲养指南则写雌性 4.2 岁、雄性 3.7 岁，并给出 158 至 172 天的圈养妊娠期。差异可能来自圈养样本、端点定义和资料年代；档案不得用旧圈养数字覆盖 IUCN 当前摘要，也不得把圈养年龄当作野外寿命。`lifespanYears` 留空。[Duke Lemur Center](https://lemur.duke.edu/discover/meet-the-lemurs/aye-aye/) [Duke Aye-Aye Husbandry Guidelines](https://lemur.duke.edu/accordions/aye-aye-husbandry-guidelines/)

## 威胁

1. **森林清除与破碎化**：轮歇农业、农地扩张和森林转化持续减少原生林面积与连通性。大型活动范围让道路、无林地和孤立小斑块产生更高成本。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en) [Sefczek et al. 2020, home range](https://doi.org/10.1159/000508620)
2. **伐木、薪材采集和火**：木材采集与火会移除大树、枯木、巢位和树冠通道。IUCN 将伐木和火列为持续威胁，具体范围和严重度仍缺少统一量化。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)
3. **猎捕与食用**：IUCN 记录部分地区存在食用性猎捕，并把不可持续猎捕纳入濒危等级依据。发生率不能从个别村落推到全岛。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)
4. **作物冲突与针对性杀害**：指猴会利用椰子、荔枝、芒果等种植资源，在部分地区被视为作物害兽。冲突强度取决于作物、生境连通和地方态度。[Duke Lemur Center](https://lemur.duke.edu/discover/meet-the-lemurs/aye-aye/) [IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)
5. **与地方信念相关的杀害**：一些社区把相遇解释为恶兆并杀死个体，另一些地方存在禁止杀害的 fady，态度也可为中性或正面。威胁字段要写“部分社区和情境”，不能写“马达加斯加人见到就杀”。[Randimbiharinirina et al. 2021](https://doi.org/10.1002/pan3.10192)
6. **证据和管理缺口（非直接威胁）**：夜行、低密度、大活动范围和取食痕迹重复产生，使数量趋势难以直接测量。它不能替代已经记录的直接威胁。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)

## 保护行动

1. 保护东部湿润林、北部和西部干林的大型连通斑块，并把日间巢树、活树取食基质和枯木资源纳入地点管理。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en) [Sefczek et al. 2017](https://doi.org/10.1007/s10329-017-0617-8)
2. 在现有保护地内执行分区管理，降低轮歇农业、无计划伐木和火对边缘及连通廊道的压力。保护地记录本身不能证明管理有效，需要持续追踪栖息地和占域。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)
3. 建立统一的占域与趋势协议，将直接观察、相机、巢、咬痕、取食孔和遗传样本分开记录。重复痕迹先去重和校准，再讨论相对变化，不能直接换算个体数。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)
   取食痕迹中的环境 DNA 已在两个地点恢复出 6 份近完整线粒体基因组，说明这类痕迹可支持低干扰遗传取样；它仍不能直接给出个体数或种群密度。[Aylward et al. 2018](https://doi.org/10.1002/ece3.4341)
4. 记录猎捕、作物损失、偶发杀害和地方 fady 的地点差异，由当地组织和社区共同设计干预。教育材料要先确认当地叙事、语言和知识传递渠道。[Randimbiharinirina et al. 2021](https://doi.org/10.1002/pan3.10192) [Rabemananjara et al. 2025](https://doi.org/10.3389/fcosc.2025.1553217)
5. 将“取食丁香叶矿蛾幼虫可能带来农户认可”作为需验证的地方生态知识，不把它宣传成已量化的全岛生态系统服务。2025 年研究调查 Makira 周边 21 个社区的 392 名成年居民，44.1% 报告知晓指猴对丁香种植有影响；研究采用便利抽样且男性受访者偏多，作者明确反对广泛外推。[Rabemananjara et al. 2025](https://doi.org/10.3389/fcosc.2025.1553217)
6. 落实 CITES 附录 I 的许可、执法和来源核验，监测任何国际流通。不要把国际贸易管制写成解决国内栖息地和猎捕问题的充分措施。[CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)
7. 维持专业圈养种群、谱系和行为研究可提供保育保险与知识，但不能替代马达加斯加野外森林保护。圈养数量、寿命和繁殖率也不能直接用于野外人口模型。[Duke Aye-Aye Husbandry Guidelines](https://lemur.duke.edu/accordions/aye-aye-husbandry-guidelines/)

## 可稳定展示的四项指标

| 展示项       | 建议值         | 来源与限定                                                                                                                                                                    |
| ------------ | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IUCN         | EN             | 2018 年评估，2020 年发布，种群下降，准则 `A2cd+3cd+4cd`。[IUCN](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)                                               |
| 三世代缩减   | ≥50%           | IUCN 怀疑过去三个世代已经发生，并预测未来三个世代继续发生；来自威胁和栖息地趋势推断，不是全球普查计数。[IUCN](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en) |
| 头体长       | 30–37 cm       | IUCN SSC 等机构联合出版的物种条目范围。[Primates in Peril 2018–2020](https://cdn.rewild.org/2019/10/Primates-in-Peril-2018-2020-2.pdf)                                        |
| 实验敲击间隔 | 97.7 ± 19.9 ms | 只来自圈养成年雄性 Merlin 在藏有食物奖励的东部白松木板上的记录，不是全物种常数。[Ramsier and Dominy 2012](https://doi.org/10.4161/cib.21509)                                  |

`featuredStats` 只保留这四项。第四项的限定语必须随数字展示。不要加入 `6–15 kHz`、全球数量、固定昆虫占比、固定活动范围或野外寿命。

## 六个故事章节草稿

### 1

- `key`: `lineage-of-one`
- `label`: `分类`
- `title`: `一条独存的灵长类支系`
- `body`: 指猴属于灵长目，却拥有持续生长的门齿、浓密长尾和松鼠般的早期命名史。它是指猴科唯一现生物种，MDD 将它单列在指猴下目。深色粗毛、大耳、沙色眼和细长手指共同组成一种夜行灵长类的身体，不能因为门齿或尾巴就把它写成啮齿动物。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1000929/) [Quinn and Wilson 2004](https://doi.org/10.1644/740)

### 2

- `key`: `percussive-foraging`
- `label`: `取食`
- `title`: `轻敲寻找木材内部的变化`
- `body`: 夜里，指猴用极细第三指连续轻敲木面，并把大耳朝向接触点。控制实验表明，木材表面下结构界面本身就能触发挖掘，即使空腔用明胶或吸声泡棉填满也仍会发生。因此它不必先听见幼虫或锁定空气腔；最稳妥的解释是检测木材内部的结构或声学不连续。[Erickson 1991](<https://doi.org/10.1016/S0003-3472(05)80346-X>) [Erickson et al. 1998](https://doi.org/10.1023/A:1020363128240)

### 3

- `key`: `digit-division`
- `label`: `解剖`
- `title`: `第三指找路，第四指补上力量`
- `body`: 第三指偏向快速敲击、精确转动和窄孔探取，最长且更强壮的第四指适合用力、舀取和深入软基质。掌根另有由籽骨、软骨和掌垫组成的伪拇指，可能帮助抓握。它不是第六根外伸长指，双指分工也会随基质改变。[Lhota et al. 2008](https://doi.org/10.1002/ajp.20548) [Hartstone-Rose et al. 2020](https://doi.org/10.1002/ajpa.23936)

### 4

- `key`: `flexible-diet`
- `label`: `食性`
- `title`: `食谱不止一截枯木`
- `body`: 幼虫和成虫可以构成局地食谱的主体，硬壳 Canarium 种子、其他果实和花蜜也提供能量。跟踪研究还记录了活树与枯木上的无脊椎动物取食。两项昆虫占比很高的研究分别只涉及两个个体，说明局地可能高度偏食昆虫，不代表全物种固定比例。[Sefczek et al. 2017](https://doi.org/10.1007/s10329-017-0617-8) [Randimbiharinirina et al. 2018](https://doi.org/10.1159/000486673) [Sefczek et al. 2020, diet](https://doi.org/10.1002/ajpa.23963)

### 5

- `key`: `forest-scale`
- `label`: `空间`
- `title`: `一个夜晚需要大片连通森林`
- `body`: 指猴多在夜间单独觅食，白天回到枝叶巢，并轮换巢位。Torotorofotsy 的一雄一雌研究测得数百至数千公顷的活动范围，但样本只有两只，雌性还经历育幼。结果说明活动尺度可能很大，不能把某个公顷数写成每只指猴的固定领地。[Sefczek et al. 2020, home range](https://doi.org/10.1159/000508620) [IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)

### 6

- `key`: `community-conservation`
- `label`: `保护`
- `title`: `保护先从听清各村怎么说开始`
- `body`: 栖息地流失与猎捕推动全球趋势下降，部分地方信念也会触发杀害。Makira 周边 11 个村的 83 次半结构访谈记录了负面、中性、正面和禁止猎杀等不同态度；另一项便利抽样调查记录到农户感知指猴可能取食丁香害虫，却没有直接测量害虫控制或产量收益。行动要按村落和作物情境设计，不能用“全民迷信”概括马达加斯加。[Randimbiharinirina et al. 2021](https://doi.org/10.1002/pan3.10192) [Rabemananjara et al. 2025](https://doi.org/10.3389/fcosc.2025.1553217)

## 推荐关键事实

1. 官方中文名采用“指猴”；它属于灵长目指猴科，是该科唯一现生物种，不是啮齿动物。[中国 CITES 附录中文版，2026](https://www.cites.org.cn/citesgy/fl/202604/P020260401624252070602.pdf) [Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1000929/)
2. 它自然分布于马达加斯加的破碎森林记录带；Nosy Mangabe 与 Île Roger 的人为引入记录不得混入自然分布。[IUCN](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)
3. 当前 IUCN 全球等级为濒危 `EN`，趋势下降，评估日期为 2018 年，准则 `A2cd+3cd+4cd`。[IUCN](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)
4. IUCN 怀疑过去三个世代至少减少 50%，并预测未来三个世代也至少减少 50%；这是证据推断，不是全岛个体普查。[IUCN](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)
5. 没有可靠的当前全球成熟个体数，单只动物又能留下多处取食痕迹，所以痕迹不能直接换算个体数。[IUCN](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)
6. 权威汇编给出的头体长为 30–37 厘米、尾长 44–53 厘米、体重 2.5–2.6 千克。[Primates in Peril 2018–2020](https://cdn.rewild.org/2019/10/Primates-in-Peril-2018-2020-2.pdf)
7. 大而裸露的可动耳、沙色眼、深色粗毛和白尖针毛构成稳定外形组合。[Quinn and Wilson 2004](https://doi.org/10.1644/740)
8. 极细第三指偏向敲击与精确探取，最长且更强壮的第四指承担不同的用力任务，选择会随基质变化。[Lhota et al. 2008](https://doi.org/10.1002/ajp.20548)
9. 伪拇指由桡侧籽骨、软骨和掌垫构成，不是第六根完整长手指。[Hartstone-Rose et al. 2020](https://doi.org/10.1002/ajpa.23936)
10. 敲击实验支持检测木材表面下结构界面或声学不连续，不证明每次都先找到空气腔、虫道或幼虫。[Erickson et al. 1998](https://doi.org/10.1023/A:1020363128240)
11. 食物包括无脊椎动物、种子坚果、果实和花蜜，活树与枯木都可成为取食基质。[Sefczek et al. 2017](https://doi.org/10.1007/s10329-017-0617-8) [Sefczek et al. 2020, diet](https://doi.org/10.1002/ajpa.23963)
12. 它夜间多单独觅食，白天睡在枝叶巢；情境性互动和范围重叠使“严格独居”不准确。[IUCN](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)
13. 主要威胁包括森林转化、破碎化、伐木、火、猎捕、作物冲突和部分地方的针对性杀害。[IUCN](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)
14. 地方态度并不统一，保护沟通必须依据村落、语言、作物和知识传递渠道设计。[Randimbiharinirina et al. 2021](https://doi.org/10.1002/pan3.10192) [Rabemananjara et al. 2025](https://doi.org/10.3389/fcosc.2025.1553217)

## 应删除或避免的说法

- “全球只剩 1,000 至 10,000 只”：过时且没有当前 IUCN 总体估计支撑。
- “分布在整个马达加斯加”：记录广但破碎、低密度，南部刺林缺少可靠记录。
- “每只都会以固定频率敲击”：`97.7 ± 19.9 ms` 来自单只圈养雄性 Merlin 的白松木板实验。
- “敲击频率就是 6 至 15 kHz”：该值是单次敲击的主能量频带，不是每秒敲击次数。
- “像蝙蝠一样回声定位”：实验支持声学定位木内空腔，不足以等同蝙蝠导航和捕猎机制。
- “中指是最长的手指”：第三指最细且高度灵活，第四指更长、更强壮。
- “只有中指取虫”：第三指和第四指按基质与任务分工。
- “长着六根手指”：伪拇指是掌根籽骨、软骨与掌垫构成的附件结构。
- “只吃枯木幼虫”：活树、枯木、昆虫、种子、果实和花蜜均有记录。
- “所有马达加斯加人都害怕或杀死指猴”：访谈显示态度和 fady 在村落之间变化。
- “指猴已被证明能保护丁香产量”：现有研究记录的是地方生态知识和感知收益，仍需量化生态与经济效应。
- “保护地里有记录，所以种群安全”：出现记录不等于数量稳定、栖息地连通或威胁消失。

## 六幅 1536 × 1024 写实图像场景

统一输出：每幅 `1536 × 1024` 像素，横向 3:2，photorealistic wildlife documentary photography，自然低照度或月光，不含文字、水印、logo、边框、拼贴和可识别机构标志。源文件建议使用 `*-source.png`，运行时文件使用同名 `.webp`。

### 生成像素的证据边界

六幅图都是有研究依据的视觉重建，不是分布记录、标本测量或实验结果。生成像素不能验证皮下伪拇指的骨与软骨、手指的功能分工、敲击间隔或声学频带、木材内部空腔或幼虫、植物物种、个体性别、年龄与拍摄地点。alt、title 和 caption 只能描述画面可见内容及有明确来源的解释，不得用文字补全画面中不可见或未经核验的细节。

### 01 `01-night-canopy-portrait`

**场景与构图**

封面肖像。恰好一只成年指猴停在马达加斯加东部湿润林的斜枝上，身体位于右侧三分之一，左侧和左上方保留深色但有叶片层次的标题负空间。三分之四侧前视角，完整显示头、躯干、四肢和蓬松长尾。月光与柔和补光勾出耳缘、白尖针毛和第三指。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic wildlife documentary photograph of exactly one adult aye-aye, Daubentonia madagascariensis, perched naturally on a diagonal canopy branch in an eastern Madagascar humid evergreen forest at night. Place the animal in the right third of the frame and preserve generous dark layered rainforest negative space on the left and upper left for a page title. Show a three-quarter front view with the full body, all four limbs, and a long dense bushy tail. The animal has coarse dark brown to black fur, scattered long white-tipped guard hairs, a paler gray face and throat, a small pinkish nose, large naked triangular mobile ears, sandy yellow-orange eyes with realistic nocturnal catchlight, elongated clawed fingers, an extremely thin mobile third finger, and a longer more robust fourth finger. Five normal visible fingers only; any pseudothumb is merely a subtle pad near the inner wrist, not a projecting sixth finger. Natural alert quadrupedal posture, quiet moonlight, soft reflected fill, moist leaves, shallow depth of field, accurate mammal anatomy, restrained color, National Geographic field-photography realism, no human presence.
```

**Avoid list**

```text
Avoid more than one animal, juvenile proportions, squirrel, rat, raccoon, cat, bat wings, rodent paws, human hands, six projecting fingers, extra digits, fused fingers, duplicate limbs, missing limbs, middle finger longer and thicker than the fourth finger, hairless rat tail, prehensile curled tail, oversized orange beaver teeth, glowing red eyes, fully black face, white mask, aggressive snarl, fantasy monster styling, horror lighting, studio backdrop, daytime sun, people, buildings, text, watermark, logo, frame or collage.
```

**可见性与验收**

- 精确计数 1 只成年个体，四肢和浓密长尾完整可见。
- 大而裸露的三角耳、沙色眼、浅脸、粉鼻、深色毛和白尖针毛同时可辨。
- 至少一只前手显示五指轮廓，第三指比第四指细，第四指更长、更强壮。
- 主体焦点建议 `{ x: 0.72, y: 0.50 }`，左侧保留足够文字空间。

**证据边界**

该图只呈现夜行、树栖和形态组合。它不证明具体地点、种群密度、固定树种或森林健康状态。[Quinn and Wilson 2004](https://doi.org/10.1644/740) [Duke Lemur Center](https://lemur.duke.edu/discover/meet-the-lemurs/aye-aye/)

### 02 `02-diagnostic-side-profile`

**场景与构图**

形态鉴别侧面图。恰好一只成年指猴沿粗枝缓慢行走，左向右的严格侧视，身体占画面约 60%，尾巴向后自然延伸。背景为北部或西部干燥落叶林夜景，浅景深，不加入行为道具。光线强调耳朵、眼、口鼻、针毛、后肢和手足比例。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic scientific wildlife profile of exactly one adult aye-aye, Daubentonia madagascariensis, walking quadrupedally from left to right along a broad natural branch in a Madagascar dry deciduous forest at night. Use a clean true side view and show the entire animal from nose to the tip of its long dense bushy tail, with no body part cropped. The aye-aye has a compact lemur body about cat-sized, hind limbs slightly longer than forelimbs, coarse dark brown-black pelage, long white-tipped guard hairs, a pale gray face and throat, a short blunt muzzle, a small pinkish nose, one clearly visible large naked triangular ear, a sandy yellow-orange eye, and elongated curved-claw digits. The visible forehand has five anatomically coherent fingers: digit three is thread-thin and highly gracile, digit four is the longest and visibly more robust. The opposable great toe remains part of a primate foot. Use soft lateral moonlight and restrained fill to separate the silhouette from dry leaves and tree trunks, natural field-camera detail, neutral color, sharp diagnostic anatomy, no action exaggeration.
```

**Avoid list**

```text
Avoid front view, cropped tail, cropped feet, multiple animals, baby, squirrel body, rat muzzle, cat paws, bat anatomy, long naked tail, ringed tail, curled prehensile tail, six equal fingers, a visible full sixth finger, webbed fingers, human fingernails, digit three as the thickest or longest finger, missing fourth finger, exaggerated exposed incisors, orange beaver teeth, huge canine teeth, pointed fox ears covered in fur, black eye mask, albino markings, anthropomorphic walking, text, measurement labels, arrows, watermark, logo or museum diorama.
```

**可见性与验收**

- 精确计数 1 只，鼻端到尾尖无裁切，严格侧视。
- 后肢略长、浓密长尾、大裸耳、浅脸和深色针毛能用于与鼠、松鼠或猫区分。
- 可见前手保持五指，第三指纤细，第四指最长且较粗。
- 不强求在侧面照片中显露门齿或伪拇指。

**证据边界**

图中体色和比例代表权威描述的典型组合，不建立亚种、性别或地区色型。干燥落叶林是记录生境之一，画面不表示全部指猴都生活在干林。[Quinn and Wilson 2004](https://doi.org/10.1644/740) [IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)

### 03 `03-tap-scanning-deadwood`

**场景与构图**

敲击扫描动作。恰好一只成年指猴伏在斜立腐木旁，耳朵前转，右手第三指接触尚未开孔的木面。中近景让头、两耳、敲击手和腐木成为清晰三角构图，另一只手与双足自然支撑，尾巴在后景保持可辨。动作定格在“扫描”阶段，不同时表现咬孔或取虫。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic high-speed wildlife documentary photograph of exactly one adult aye-aye, Daubentonia madagascariensis, tap-scanning a slanted section of naturally decaying wood in a Madagascar rainforest canopy at night. Frame a medium close view that keeps the head, both ears, the complete tapping forehand, the supporting limbs, and part of the long bushy tail visible. Freeze the precise instant when the extremely thin third finger lightly touches intact bark; the wood has no excavated hole yet. Both very large naked triangular ears rotate and cup forward toward the contact point. The fourth finger on the same hand is longer and more robust, slightly lifted and clearly distinct from the thread-thin third finger. Show five coherent fingers only and a natural wrist. The animal has coarse dark brown-black fur with white-tipped guard hairs, a pale gray face and throat, pinkish nose, and sandy yellow-orange eyes focused on the wood. Use low-intensity moonlight plus soft infrared-style neutral fill, crisp finger and ear detail, subtle motion tension without blur, realistic bark texture, natural quadrupedal balance, field research photography.
```

**Avoid list**

```text
Avoid two animals, human hand pose, drumming with the whole palm, striking with the fourth finger, thick middle finger, middle finger longer than the fourth, six fingers, extra hand, fused digits, broken wrist, missing support limbs, earphones, visible sound waves, sonar rings, musical notation, cartoon vibration lines, open excavation hole, visible larva, active chewing, oversized exposed incisors, bat wings, rodent anatomy, tool use, people, captive enclosure, enrichment board, flash-lit horror face, text, watermark, logo or split-screen sequence.
```

**可见性与验收**

- 精确计数 1 只，第三指指尖与完整树皮接触，第四指悬起且更粗更长。
- 双耳朝接触点前转，眼和鼻的位置保持正常。
- 五根手指可追踪到掌部，不得增加可见第六长指。
- 画面只表现扫描，不出现洞口、虫体或咬木碎屑。

**证据边界**

场景支持“第三指敲击并以耳朵获取声学线索”。静态图不能证明具体敲击频率、主能量频带或感觉机制，也不能表现可见声波。Merlin 的 `97.7 ± 19.9 ms` 和 `6–15 kHz` 不进入图说，因为它们来自单只圈养个体在白松木板上的实验。[Erickson 1991](<https://doi.org/10.1016/S0003-3472(05)80346-X>) [Ramsier and Dominy 2012](https://doi.org/10.4161/cib.21509)

### 04 `04-larva-extraction`

**场景与构图**

取虫动作。恰好一只成年指猴停在活枝上一个已被门齿咬开的狭窄孔旁，极细第三指伸入孔中并勾出一条小型木蛀幼虫，第四指和另一只手提供支撑。三分之四近景，口鼻、手、孔和幼虫清晰，身体与尾巴仍保留环境尺度。只出现一条幼虫。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic wildlife documentary close action photograph of exactly one adult aye-aye, Daubentonia madagascariensis, extracting exactly one small wood-boring larva from a narrow freshly gnawed opening in a living tree branch at night in Madagascar. Use a three-quarter close view with the face, mouth, both forehands, opening, larva, supporting hind feet, and part of the long bushy tail visible. The ultra-thin third finger enters the narrow irregular cavity and its curved claw hooks the single larva outward; the longer, stronger fourth finger remains outside and helps brace near the opening. Show five anatomically coherent fingers only. Small pale wood chips and tooth marks surround the hole, while the incisors are only subtly visible behind natural lips, not enlarged. The aye-aye has dark coarse fur with white-tipped guard hairs, a pale gray face and throat, pinkish nose, huge naked triangular ears directed toward the branch, and sandy yellow-orange eyes. Natural canopy balance, realistic larva scale, moist living bark, focused low-light field flash, shallow depth of field, sharp manual anatomy, no staged enclosure.
```

**Avoid list**

```text
Avoid more than one aye-aye, more than one larva, giant grub, worm wrapped around the hand, prey floating outside the hole, fourth finger inserted while the third is absent, six fingers, full projecting pseudothumb, fused digits, human palm, human nails, missing claws, broken joints, holding a tool, dead log as the only possible substrate, massive destroyed tree cavity, chainsaw marks, gore, blood, teeth like a beaver, wide orange incisors, predator attack, people, cage, feeder box, text, watermark, logo or instructional arrows.
```

**可见性与验收**

- 精确计数 1 只指猴和 1 条小型幼虫。
- 第三指进入窄孔并勾取，第四指留在孔外支撑，五指关系可辨。
- 开孔尺度与门齿咬痕自然，木屑少量，不形成夸张破坏。
- 活枝、耳朵、浅脸、深色白尖毛和蓬松尾保持物种一致性。

**证据边界**

第三指用于狭窄孔和活木精确探取有直接观察支持，但双指选择随基质改变。画面呈现一种有依据的动作，不代表每次取虫都使用同一根手指，也不表示活树比枯木在所有地点更常用。[Lhota et al. 2008](https://doi.org/10.1002/ajp.20548) [Sefczek et al. 2017](https://doi.org/10.1007/s10329-017-0617-8)

### 05 `05-third-and-fourth-digit-closeup`

**场景与构图**

双指分工解剖式写实近景。恰好一只成年指猴的前半身与一只完整前手入画，手自然搭在粗糙枝面，第三指轻触细裂隙，第四指弯曲抓住枝缘。微距横构图保留脸和耳作为物种上下文，不画成离体标本。伪拇指只通过内侧掌根小垫暗示。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic macro wildlife photograph showing exactly one living adult aye-aye, Daubentonia madagascariensis, with one complete forehand resting naturally on a rough rainforest branch at night. Keep the animal's face, one sandy yellow-orange eye, pinkish nose, one large naked triangular ear, shoulder, and dark fur with white-tipped guard hairs in the background so the hand is not an isolated specimen. Make the hand the sharp focal plane. Show exactly five normal fingers with curved claws and correct joints. Digit three is extraordinarily thread-thin, fully skin-covered, highly mobile, and lightly explores a narrow bark fissure. Digit four is visibly the longest, thicker, more muscular, and curls around the branch edge for strength and deep reach. The remaining digits retain normal primate proportions. At the inner wrist, show only a subtle independent palmar pad suggesting the pseudothumb; do not create a sixth projecting finger. Natural grasp, realistic skin texture, soft lateral moonlight, scientific field-photography detail, shallow depth of field, no labels.
```

**Avoid list**

```text
Avoid isolated severed hand, anatomy chart, x-ray, transparent skin, six long fingers, a sixth claw, panda paw, human hand, human fingernails, monkey hand with equal fingers, third finger longest or thickest, fourth finger shorter than the third, finger touching impossible side of the palm, fused joints, duplicate hand, extra arm, missing face context, oversized palm pad, visible bone through skin, injury, blood, surgical setup, ruler, arrows, labels, text, watermark, logo, collage or specimen jar.
```

**可见性与验收**

- 精确计数 1 只活体和 1 只完整前手，五根手指均可追踪。
- 第三指最细并探触裂隙，第四指最长、明显更粗并抓住枝缘。
- 掌根小垫不能被误读为带爪的第六指。
- 脸、沙色眼、大裸耳和白尖针毛提供明确物种上下文。

**证据边界**

四只自由活动个体的 686 次观察支持第三指偏精确、第四指偏力量的分工，但行为仍随基质变化。伪拇指的抓握作用来自 7 个解剖标本的结构推断，静态外观不能证明每次抓握都使用它。[Lhota et al. 2008](https://doi.org/10.1002/ajp.20548) [Hartstone-Rose et al. 2020](https://doi.org/10.1002/ajpa.23936)

### 06 `06-ramy-nut-gnawing`

**场景与构图**

硬壳种子取食。恰好一只成年指猴蹲伏在树枝分叉处，用双手固定一枚 Canarium，亦称 ramy 的椭圆硬核，以门齿在壳上咬出小孔。三分之四侧面中近景，清楚显示持握、门齿、硬核和蓬松尾。场景停在开孔阶段，不同时画幼虫或果肉。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic wildlife documentary photograph of exactly one adult aye-aye, Daubentonia madagascariensis, processing exactly one hard ramy nut, Canarium species, on a forked forest branch at night in Madagascar. Use a three-quarter side medium close composition. The animal braces the single oval hard endocarp with both anatomically correct hands and uses its continuously growing front incisors to gnaw one small controlled opening in the shell. Show the incisors only as realistic narrow cutting teeth at the contact point, never as oversized orange beaver plates. Each visible hand has five coherent clawed fingers; the extremely thin third digit and longer robust fourth digit remain distinguishable while gripping the nut, with no projecting sixth finger. The aye-aye has coarse dark brown-black fur, long white-tipped guard hairs, a pale gray face and throat, pinkish nose, huge naked triangular ears, sandy yellow-orange eyes, and a long dense bushy tail curled loosely along the branch without being prehensile. Natural nocturnal canopy, restrained field flash, crisp nut and mouth detail, shallow forest background, authentic animal posture, no human staging.
```

**Avoid list**

```text
Avoid coconut, walnut, acorn, peanut, jackfruit, banana, cut fruit bowl, more than one nut, visible larva, visible fruit pulp, third hand, six fingers, projecting pseudothumb, human fingers, fused digits, nut floating away from the hands, giant orange incisors, tusks, canine fangs, shattered shell explosion, excessive sawdust, rodent body, squirrel tail, hairless tail, prehensile tail wrapped tightly around a branch, people, feeder tray, cage, studio set, text, watermark, logo, label or botanical diagram.
```

**可见性与验收**

- 精确计数 1 只指猴和 1 枚椭圆 ramy 硬核。
- 双手稳定硬核，门齿只在接触处自然露出，小孔与壳体尺度合理。
- 第三指仍比第四指纤细，第四指更长更粗，手部不多指。
- 不出现椰子、果盘、幼虫或第二种食物。

**证据边界**

野外研究记录指猴以 Canarium 硬核和种仁为食，并用门齿开壳、手指取仁。该图不规定 ramy 在所有地点的食谱占比，也不把坚果取食与昆虫取食混为同一次动作；生成图中的植物外形还须经植物学核对，不能仅凭像素认证物种。[Lhota et al. 2008](https://doi.org/10.1002/ajp.20548) [Randimbiharinirina et al. 2018](https://doi.org/10.1159/000486673)

### 六图统一静态验收

1. 六张源 PNG 和六张运行时 WebP 均为 1536 × 1024，横向 3:2。
2. 文件顺序和语义固定为 canopy portrait、diagnostic profile、tap-scanning、larva extraction、third-and-fourth-digit closeup、ramy-nut gnawing。
3. 逐图核对动物、幼虫和种子数量，不接受生成器添加的重复主体。
4. 逐图核对大裸耳、沙色眼、浅脸、粉鼻、深色粗毛、白尖针毛和浓密长尾。
5. 所有清晰可见的前手必须保持五根手指，第三指极细，第四指最长且较粗；伪拇指只能是掌根小垫。
6. 封面左侧保留标题负空间，所有图的 alt、title、caption 与实际动作和计数一致。
7. 敲击图不得出现声波；Merlin 的圈养声学数值不得进入通用图说。
8. 运行时图不得含文字、水印、logo、真实项目标牌、抓握动物的人或圈养设施。

## 精选来源与 `SpeciesSource` 草稿

最终实现建议固定以下 16 个唯一 URL。它们覆盖分类与中文名、全球保护和贸易状态、统一体尺、形态、敲击机制、手部解剖、野外食性与空间、地方保护知识及低干扰遗传监测。

1. [Mammal Diversity Database: Daubentonia madagascariensis](https://www.mammaldiversity.org/taxon/1000929/)
2. [中国 CITES 附录中文版，2026 年](https://www.cites.org.cn/citesgy/fl/202604/P020260401624252070602.pdf)
3. [IUCN Red List: Daubentonia madagascariensis](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en)
4. [CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)
5. [Primates in Peril 2018–2020](https://cdn.rewild.org/2019/10/Primates-in-Peril-2018-2020-2.pdf)
6. [Quinn and Wilson 2004: Daubentonia madagascariensis](https://doi.org/10.1644/740)
7. [Erickson 1991: Percussive foraging in the aye-aye](<https://doi.org/10.1016/S0003-3472(05)80346-X>)
8. [Erickson et al. 1998: Subsurface structural cues in percussive foraging](https://doi.org/10.1023/A:1020363128240)
9. [Ramsier and Dominy 2012: Aye-aye tap acoustics](https://doi.org/10.4161/cib.21509)
10. [Lhota et al. 2008: Third- and fourth-finger use](https://doi.org/10.1002/ajp.20548)
11. [Hartstone-Rose et al. 2020: The aye-aye pseudothumb](https://doi.org/10.1002/ajpa.23936)
12. [Sefczek et al. 2017: Live- and deadwood foraging](https://doi.org/10.1007/s10329-017-0617-8)
13. [Sefczek et al. 2020: Diet in Torotorofotsy](https://doi.org/10.1002/ajpa.23963)
14. [Sefczek et al. 2020: Home-range size](https://doi.org/10.1159/000508620)
15. [Randimbiharinirina et al. 2021: Local knowledge and attitudes](https://doi.org/10.1002/pan3.10192)
16. [Aylward et al. 2018: Environmental DNA from aye-aye feeding traces](https://doi.org/10.1002/ece3.4341)

```ts
const AYE_AYE_SOURCE_DATE = "2026-09-02" as const;

const AYE_AYE_SOURCES = [
  {
    title: "Mammal Diversity Database: Daubentonia madagascariensis",
    url: "https://www.mammaldiversity.org/taxon/1000929/",
    kind: "taxonomy",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: "China CITES Appendices, Chinese edition, 2026",
    url: "https://www.cites.org.cn/citesgy/fl/202604/P020260401624252070602.pdf",
    kind: "conservation",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: "IUCN Red List: Daubentonia madagascariensis",
    url: "https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en",
    kind: "conservation",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: "CITES Appendices, effective 5 March 2026",
    url: "https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf",
    kind: "conservation",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: "IUCN SSC PSG et al.: Primates in Peril 2018–2020",
    url: "https://cdn.rewild.org/2019/10/Primates-in-Peril-2018-2020-2.pdf",
    kind: "general",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: "Quinn and Wilson 2004: Daubentonia madagascariensis",
    url: "https://doi.org/10.1644/740",
    kind: "general",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: "Erickson 1991: Percussive foraging in the aye-aye",
    url: "https://doi.org/10.1016/S0003-3472(05)80346-X",
    kind: "ecology",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title:
      "Erickson et al. 1998: Subsurface structural cues in percussive foraging",
    url: "https://doi.org/10.1023/A:1020363128240",
    kind: "ecology",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: "Ramsier and Dominy 2012: Aye-aye tap acoustics",
    url: "https://doi.org/10.4161/cib.21509",
    kind: "ecology",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: "Lhota et al. 2008: Aye-aye third- and fourth-finger use",
    url: "https://doi.org/10.1002/ajp.20548",
    kind: "ecology",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: "Hartstone-Rose et al. 2020: The aye-aye pseudothumb",
    url: "https://doi.org/10.1002/ajpa.23936",
    kind: "general",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: "Sefczek et al. 2017: Live- and deadwood foraging by aye-ayes",
    url: "https://doi.org/10.1007/s10329-017-0617-8",
    kind: "ecology",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: "Sefczek et al. 2020: Diet of two aye-ayes in Torotorofotsy",
    url: "https://doi.org/10.1002/ajpa.23963",
    kind: "ecology",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: "Sefczek et al. 2020: Home-range size of two aye-ayes",
    url: "https://doi.org/10.1159/000508620",
    kind: "ecology",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title:
      "Randimbiharinirina et al. 2021: Local knowledge and attitudes toward aye-ayes",
    url: "https://doi.org/10.1002/pan3.10192",
    kind: "conservation",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: "Aylward et al. 2018: Environmental DNA from aye-aye feeding traces",
    url: "https://doi.org/10.1002/ece3.4341",
    kind: "conservation",
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 研究阶段 `Species` 对象草稿

该对象按当前 `Species` schema 映射研究结论。它是实现底稿，不代表资源文件、测试或 TODO 已经完成。

```ts
const ayeAye = {
  id: "species-daubentonia-madagascariensis",
  slug: "aye-aye",
  names: {
    zh: "指猴",
    en: "Aye-aye",
    aliases: [],
  },
  scientificName: "Daubentonia madagascariensis",
  taxonomy: animalTaxonomy(
    taxon("Chordata", "脊索动物门"),
    taxon("Mammalia", "哺乳纲"),
    taxon("Primates", "灵长目"),
    taxon("Daubentoniidae", "指猴科"),
    taxon("Daubentonia", "指猴属"),
  ),
  conservation: conservation("EN", "decreasing", 2018, "A2cd+3cd+4cd"),
  distribution: {
    realms: ["terrestrial"],
    continents: ["非洲"],
    regions: [
      "马达加斯加东部湿润森林的破碎记录带",
      "马达加斯加北部和西北部森林",
      "马达加斯加西部与中西部干燥森林斑块",
      "Nosy Mangabe 的引入种群",
      "Île Roger 的历史引入种群，现状可能为局部灭绝",
    ],
    countries: ["马达加斯加"],
    endemicTo: ["马达加斯加"],
    range:
      "自然记录散布于马达加斯加东部、北部、西北部及中西部的森林带与斑块，海拔 10 至 1,875 米；低密度与破碎分布不能画成覆盖全岛的连续范围。Nosy Mangabe 的九只个体于 20 世纪 60 年代中期被引入，此前是否自然存在仍不确定；Île Roger 的引入种群可能已经局部灭绝。",
    center: { lat: -18.5, lng: 47 },
  },
  habitats: [
    {
      name: "热带或亚热带湿润低地林",
      realm: "terrestrial",
      description:
        "东部低地湿润森林提供树冠通道、巢位，以及活树和枯木上的分散食物资源。",
      isPrimary: true,
    },
    {
      name: "热带或亚热带湿润山地林",
      realm: "terrestrial",
      description: "较高海拔湿润森林；物种总体记录上限约 1,875 米。",
      isPrimary: true,
    },
    {
      name: "热带或亚热带干旱林",
      realm: "terrestrial",
      description: "西部与西北部干燥落叶林，季节性资源与东部湿润林不同。",
      isPrimary: true,
    },
    {
      name: "高于高潮线的热带或亚热带红树林植被",
      realm: "terrestrial",
      description: "只指红树林的陆地植被利用，不把指猴归为水生或潮间带动物。",
      isPrimary: true,
    },
    {
      name: "热带或亚热带干灌丛",
      realm: "terrestrial",
      description: "IUCN 列出的主要陆地生境；不能与南部刺林记录缺口互相替代。",
      isPrimary: true,
    },
    {
      name: "次生林与森林边缘",
      realm: "terrestrial",
      description:
        "可利用受扰林，但长期维持仍依赖残存大树、树冠连通和邻近本土森林。",
    },
    {
      name: "种植园与乡村花园",
      realm: "terrestrial",
      description:
        "IUCN 列出的边缘生境，可提供作物或昆虫资源，也会形成冲突，不能替代完整森林。",
    },
  ],
  measurements: {
    length: {
      min: 30,
      max: 37,
      unit: "cm",
      note: "头体长；同一权威汇编另列尾长 44 至 53 厘米",
    },
    weight: {
      min: 2.5,
      max: 2.6,
      unit: "kg",
      note: "IUCN SSC 等机构联合出版的物种条目范围",
    },
  },
  diet: {
    types: ["omnivore", "insectivore"],
    foods: [
      "木材和树皮基质中的昆虫幼虫与成虫",
      "Canarium 等硬壳种子和种仁",
      "果实与果肉",
      "花蜜",
      "种植园和乡村花园中的季节性资源",
    ],
    description:
      "擅长通过敲击和探指获取无脊椎动物的杂食性灵长类，也利用硬壳种子、果实与花蜜。活树和枯木都可成为取食基质；两只个体研究中的高昆虫占比不能视为全物种常数。",
  },
  activity: [
    "夜行，白天在树冠枝叶巢中休息，并轮换多个巢位",
    "以单独觅食为主，但活动范围重叠，也有结伴取食、求偶和母幼互动",
    "用第三指敲击检测木材内部结构变化，以门齿开孔，再按基质选择第三或第四指探取",
    "在活树、枯木、森林边缘和部分农林镶嵌中寻找分散食物",
    "全年均可能繁殖，通常单胎，幼体依赖时间长且产仔间隔较长",
  ],
  tags: [
    "灵长目",
    "马达加斯加特有种",
    "夜行性",
    "树栖",
    "杂食动物",
    "昆虫食",
    "敲击取食",
    "持续生长门齿",
    "特化第三指",
    "伪拇指",
    "IUCN 濒危",
    "CITES 附录 I",
  ],
  summary:
    "以大耳、持续生长的门齿和分工明确的细长手指，在马达加斯加破碎森林中敲击、开孔并探取食物的濒危夜行灵长类。",
  description:
    "指猴是马达加斯加特有、指猴科唯一现生的夜行灵长类。它的头体长 30 至 37 厘米，体重 2.5 至 2.6 千克，浓密尾巴长于头体；大而裸露的耳、沙色眼、深色粗毛与白尖针毛构成稳定外形。极细第三指擅长快速敲击和精确探取，最长且更强壮的第四指承担不同的用力任务，掌根伪拇指可能帮助抓握。敲击实验支持它检测木材内部的结构界面或声学不连续，不证明每次都先找到空气腔或幼虫。它利用活树和枯木中的无脊椎动物，也吃硬壳种子、果实和花蜜。IUCN 将其评为濒危、趋势下降；森林转化、破碎化、伐木、火、猎捕、作物冲突及部分地方的针对性杀害持续施压。",
  storySections: [
    {
      key: "lineage-of-one",
      label: "分类",
      title: "一条独存的灵长类支系",
      body: "指猴属于灵长目，却拥有持续生长的门齿、浓密长尾和松鼠般的早期命名史。它是指猴科唯一现生物种。深色粗毛、大耳、沙色眼和细长手指共同组成一种夜行灵长类的身体，不能因为门齿或尾巴就把它写成啮齿动物。",
    },
    {
      key: "percussive-foraging",
      label: "取食",
      title: "轻敲寻找木材内部的变化",
      body: "指猴用极细第三指连续轻敲木面，并把大耳朝向接触点。实验表明，木材表面下结构界面本身就能触发挖掘，即使空腔被填满也仍会发生。它不必先听见幼虫或锁定空气腔；最稳妥的解释是检测结构或声学不连续。",
    },
    {
      key: "digit-division",
      label: "解剖",
      title: "第三指找路，第四指补上力量",
      body: "第三指偏向快速敲击、精确转动和窄孔探取，最长且更强壮的第四指适合用力、舀取和深入软基质。掌根的伪拇指可能帮助抓握，但不是第六根外伸长指。双指分工也会随基质改变。",
    },
    {
      key: "flexible-diet",
      label: "食性",
      title: "食谱不止一截枯木",
      body: "幼虫和成虫可以构成局地食谱的主体，硬壳 Canarium 种子、其他果实和花蜜也提供能量。跟踪研究记录了活树与枯木上的无脊椎动物取食。少数个体的高昆虫占比不能扩展成全物种固定比例。",
    },
    {
      key: "forest-scale",
      label: "空间",
      title: "一个夜晚需要大片连通森林",
      body: "指猴多在夜间单独觅食，白天回到枝叶巢，并轮换巢位。一雄一雌研究测得数百至数千公顷的活动范围，但样本太小，雌性还经历育幼。结果说明活动尺度可能很大，不是每只个体的固定领地数值。",
    },
    {
      key: "community-conservation",
      label: "保护",
      title: "保护先从听清各村怎么说开始",
      body: "栖息地流失与猎捕推动全球趋势下降，部分地方信念也会触发杀害。Makira 周边访谈记录了负面、中性、正面和禁止猎杀等不同态度；农户感知的丁香害虫取食尚未成为量化生态服务。行动要按村落和作物情境设计。",
    },
  ],
  keyFacts: [
    "官方中文名为指猴；它属于灵长目指猴科，是该科唯一现生物种。",
    "它自然分布于马达加斯加的破碎森林记录带；两处海岛引入种群不属于自然分布。",
    "当前 IUCN 全球等级为濒危，趋势下降，准则为 A2cd+3cd+4cd。",
    "IUCN 怀疑过去三个世代至少减少 50%，并预测未来三个世代也至少减少 50%，该判断不是全岛普查。",
    "没有可靠的当前全球成熟个体数，取食痕迹不能直接换算个体数。",
    "头体长 30 至 37 厘米、尾长 44 至 53 厘米、体重 2.5 至 2.6 千克。",
    "极细第三指偏向敲击与精确探取，最长且更强壮的第四指承担不同的用力任务。",
    "掌根伪拇指由籽骨、软骨和掌垫组成，不是第六根完整长手指。",
    "敲击实验支持检测木材表面下结构界面或声学不连续，不证明每次都先找到空气腔或幼虫。",
    "食物包括无脊椎动物、硬壳种子、果实和花蜜，活树与枯木都可成为取食基质。",
    "夜间多单独觅食，白天睡在枝叶巢；活动范围重叠并存在情境性互动。",
    "地方态度并不统一，保护沟通必须依据村落、作物和知识传递渠道设计。",
  ],
  threats: [
    "轮歇农业、农地扩张和森林转化造成的栖息地清除与破碎化",
    "伐木、薪材采集和火移除巢树、取食基质与树冠通道",
    "部分地区的食用性猎捕和不可持续捕杀",
    "利用种植资源引发的作物冲突与针对性杀害",
    "部分社区和情境中与地方信念相关的杀害",
  ],
  conservationActions: [
    "保护并连接湿润林、干旱林、红树林陆地植被和干灌丛中的大型斑块",
    "在保护地和廊道降低轮歇农业、无计划伐木与火的压力",
    "统一直接观察、相机、巢、取食痕迹和遗传样本的记录与去重协议",
    "用取食痕迹环境 DNA 支持低干扰遗传监测，但不把痕迹数量直接换算成个体数",
    "按地点记录猎捕、作物损失、偶发杀害和地方 fady，由社区共同设计干预",
    "验证指猴取食丁香害虫的生态与经济效应，不把感知收益当作已量化服务",
    "落实 CITES 附录 I 的许可、执法和来源核验，同时继续处理国内威胁",
    "维持专业圈养谱系和研究，但不以圈养种群替代马达加斯加野外森林保护",
  ],
  metrics: {
    adultLengthCm: [30, 37],
    adultMassKg: [2.5, 2.6],
    elevationM: [10, 1875],
  },
  featuredStats: [
    {
      key: "iucn-status",
      label: "IUCN",
      value: "EN",
      note: "濒危，全球趋势下降；2018 年评估",
    },
    {
      key: "three-generation-decline",
      label: "三世代缩减",
      value: "≥50",
      unit: "%",
      note: "过去与未来三个世代的怀疑或预测幅度，来自证据推断，不是全球普查",
    },
    {
      key: "head-body-length",
      label: "头体长",
      value: "30–37",
      unit: "厘米",
      note: "IUCN SSC 等机构联合出版的物种条目范围",
    },
    {
      key: "merlin-intertap-interval",
      label: "实验敲击间隔",
      value: "97.7 ± 19.9",
      unit: "毫秒",
      note: "仅一只圈养雄性 Merlin，在藏有食物奖励的东部白松木板上",
    },
  ],
  media: {
    image: "./images/species/aye-aye/01-night-canopy-portrait.webp",
    alt: "一只成年指猴停在马达加斯加湿润林的斜枝上，大裸耳、浅脸、细长手指和浓密长尾清晰可见",
    focalPoint: { x: 0.72, y: 0.5 },
    credit: "Fauna Atlas · AI 生成原创图像",
    gallery: [
      {
        image: "./images/species/aye-aye/02-diagnostic-side-profile.webp",
        alt: "一只成年指猴沿干燥落叶林的粗枝行走，侧面完整显示头、四肢和浓密长尾",
        title: "大耳、浅脸和长尾组成的侧面轮廓",
        caption: "形态组合用于鉴别物种，不表示性别、亚种或地区色型。",
        focalPoint: { x: 0.52, y: 0.5 },
        credit: "Fauna Atlas · AI 生成原创图像",
      },
      {
        image: "./images/species/aye-aye/03-tap-scanning-deadwood.webp",
        alt: "一只成年指猴用极细第三指轻触完整腐木表面，两只大耳朝接触点转动",
        title: "用轻敲检测木材内部变化",
        caption:
          "静态图只呈现敲击扫描，不证明具体频率、可见声波或必然存在的幼虫。",
        focalPoint: { x: 0.57, y: 0.48 },
        credit: "Fauna Atlas · AI 生成原创图像",
      },
      {
        image: "./images/species/aye-aye/04-larva-extraction.webp",
        alt: "一只成年指猴把极细第三指伸入活枝的小孔，勾出一条小型木蛀幼虫",
        title: "门齿开孔后的精确探取",
        caption: "第三指探取是一种有直接观察支持的动作；双指选择仍随基质改变。",
        focalPoint: { x: 0.56, y: 0.48 },
        credit: "Fauna Atlas · AI 生成原创图像",
      },
      {
        image:
          "./images/species/aye-aye/05-third-and-fourth-digit-closeup.webp",
        alt: "指猴完整前手的写实近景，极细第三指探触树皮裂隙，最长且较粗的第四指抓住枝缘",
        title: "第三指与第四指的任务分工",
        caption: "掌根伪拇指只表现为小型掌垫，不能画成带爪的第六根长指。",
        focalPoint: { x: 0.54, y: 0.52 },
        credit: "Fauna Atlas · AI 生成原创图像",
      },
      {
        image: "./images/species/aye-aye/06-ramy-nut-gnawing.webp",
        alt: "一只成年指猴用双手固定一枚 ramy 硬核，并以门齿在壳上咬出小孔",
        title: "硬壳种子也是森林菜单的一部分",
        caption:
          "Canarium 硬核取食有野外记录，画面不规定它在所有地点的食谱占比。",
        focalPoint: { x: 0.54, y: 0.49 },
        credit: "Fauna Atlas · AI 生成原创图像",
      },
    ],
  },
  sources: AYE_AYE_SOURCES,
  featured: true,
  publishedAt: "2026-09-02",
  updatedAt: "2026-09-02",
} as const satisfies Species;
```

## 实现交接检查表

### 研究底稿

- [x] 接受名、官方中文名、英文主名和空别名数组都有明确来源。
- [x] IUCN 等级、趋势、评估年、准则、三世代推断和数量缺口已分开记录。
- [x] 自然分布与 Nosy Mangabe、Île Roger 的引入记录已分开，岛屿现状不确定性未被抹平。
- [x] 五类 IUCN 主要陆地生境与边缘性的种植园、乡村花园已显式覆盖。
- [x] 头体长、尾长和成年体重采用同一权威汇编；海拔采用 IUCN。
- [x] Erickson 1998 的填充与结构界面实验已限制“锁定空气腔或幼虫”的机制表述。
- [x] Merlin 的敲击间隔与频带严格限定为单只圈养雄性、东部白松木板和对应录音条件。
- [x] 野外食谱、双指分工、活动范围和地方访谈都保留样本与外推边界。
- [x] 六个故事均提供 `key`、`label`、`title`、`body`，四项指标与关键事实都有邻近来源。
- [x] 精选来源恰好 16 个唯一 URL，所有 `accessedAt` 统一为 `2026-09-02`。

### 图像规格

- [x] 六幅图均提供独立场景与构图、可直接投喂的 1536 × 1024 photorealistic prompt、avoid list、可见性验收与证据边界。
- [x] 六图顺序固定为 canopy portrait、diagnostic profile、tap-scanning、larva extraction、third-and-fourth-digit closeup、ramy-nut gnawing。
- [x] 手部规格统一为五根正常手指、第三指极细、第四指最长且更强壮，伪拇指不外伸为第六指。
- [x] 敲击场景不画可见声波、洞口或幼虫；取虫场景只画一只指猴和一条幼虫。

### 待父任务实现

- [ ] 生成并静态检查六张源 PNG 与六张运行时 WebP。
- [ ] 把来源、分类单元和完整物种对象写入 `src/data/species.ts`。
- [ ] 更新分类测试、媒体断言、素材索引和 `docs/todo.md`。
- [ ] 运行测试、类型检查、生产构建、资产尺寸检查和 `git diff --check`。

研究检查完成只代表证据与实现草稿齐备。资源、代码、测试和 TODO 全部通过后，才能把“下一个动物”视为完成。
