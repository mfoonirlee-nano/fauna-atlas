# 海鬣蜥（*Amblyrhynchus cristatus*）完整档案研究

- 检索与核验日期：2026-08-27
- 使用范围：为 `src/data/species.ts` 新增完整 `Species` 记录，并约束 1 张封面、5 张图库图、六段故事和四项展示数字
- 分类口径：The Reptile Database 当前接受名与 Miralles et al. 2017 的整合分类；全种仍是单型属中的一个种，下分 11 个亚种
- 保护口径：结构化字段只记录 IUCN 2019-12-01 完成、2020-2 版发布的全种全球评估；各亚种评估与 2026 年 CITES 附录 I 另行表述
- 证据标准：分类、保护状态和分布优先采用 The Reptile Database、IUCN Red List、IUCN SSC Iguana Specialist Group、CITES 与厄瓜多尔加拉帕戈斯国家公园管理局；生态和数字采用同行评议原始研究
- 数字原则：跨岛雄性最大体重、局地调查计数、全种粗略估算和 IUCN 种群减少判断不能互换。极端潜深、体长缩减和油污死亡率必须保留研究地点与事件边界。

## 结论摘要

1. 接受名为 ***Amblyrhynchus cristatus* Bell, 1825**，分类链为动物界—脊索动物门—爬行纲—有鳞目—美洲鬣蜥科—海鬣蜥属。海鬣蜥属只有这一个现生种；2017 年整合分类和 The Reptile Database 接受 **11 个亚种**。[The Reptile Database](https://reptile-database.reptarium.cz/Amblyrhynchus/cristatus) [Miralles et al. 2017](https://doi.org/10.1093/zoolinnean/zlx007)
2. 全种全球 IUCN 字段固定为 **`VU / decreasing / 2019 / A2abce+4abce`**。2019 是评估年，2020 是发布批次。评估认为过去三代以及“过去两代加未来一代”的约 18—24 年窗口内，种群减少至少 30%；它不是一项同步全群岛普查。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T1086A177552193.en)
3. 全种 VU 不代表 11 个亚种风险相同。2020 年亚种评估从 VU、EN 到 CR 不等；产品主对象保留全种状态，亚种等级只进入说明文字。[IUCN SSC Iguana Specialist Group](https://www.iucn-isg.org/publications/recent-red-list-assessments/)
4. 海鬣蜥仅自然分布于厄瓜多尔加拉帕戈斯群岛。它在陆上休息、调温、交配和产卵，在岩石潮间带与浅海岩礁取食，`distribution.realms` 应同时包含 `terrestrial` 与 `marine`。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T1086A177552193.en)
5. 食物几乎全是附着在岩石上的大型海藻。多数个体在低潮时取食潮间带红藻；各群落体型最大的个体，通常是大型雄性，才会下潜到亚潮带藻床。不能把深潜画成所有雌性和幼体的日常方式。[Shepherd and Hawkes 2005](https://media.migramar.org/uploads/archive/595.pdf) [Wikelski and Trillmich 1994](https://doi.org/10.1163/156853994X00280)
6. 大型雄性在不同岛屿的最大体重可从约 **0.9 千克到 12 千克**，相差超过十倍；雄性通常也比雌性重。一个无条件的“成年体重 1—12 千克”会掩盖岛屿、性别和食物条件，建议只把 12 千克作为带注释的最大值。[Wikelski 2005](https://doi.org/10.1098/rspb.2005.3205) [Wikelski and Trillmich 1997](https://doi.org/10.1111/j.1558-5646.1997.tb03673.x)
7. 海鬣蜥用侧扁长尾左右摆动推进，四肢在游泳时贴近身体；上岸后晒太阳恢复体温。鼻盐腺排出随食物和海水摄入的电解质，喷出的白色盐雾不是毒液、攻击性唾液或呼吸烟气。[Bartholomew 1966](https://library.iucn-isg.org/documents/1966/Bartholomew_1966_Copeia.pdf) [Shoemaker and Nagy 1984](https://doi.org/10.1086/physzool.57.3.30163717)
8. 厄尔尼诺暖水会压低营养盐上涌并改变可食藻类。1997—1998 年事件中，研究者记录部分成年个体吻肛长可逆缩短最多约 **20%**；缩得较多的个体存活更久。该数值来自个体纵向测量，不等于每只海鬣蜥都会缩短 20%。[Wikelski and Thom 2000](https://doi.org/10.1038/47396)
9. 污染风险有直接实证：2001 年 `Jessica` 号泄漏后，圣菲岛长期研究群体在一年内死亡 **62%**，而未受油污影响的赫诺韦萨对照群体没有同步下降。该比例只描述一次事件和一个群体，不能写成所有油污事件的固定死亡率。[Wikelski et al. 2002](https://doi.org/10.1038/417607a)
10. CITES CoP20 已通过将海鬣蜥从附录 II 转入**附录 I**，并于 **2026-03-05** 生效。旧网页和 2025 年资料仍会显示附录 II；实施稿必须使用 2026 现行附录。CITES 是国际贸易制度，不改变 IUCN 的 VU 等级。[CITES 2026 Appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CITES CoP20 Proposal 22](https://cites.org/sites/default/files/documents/E-CoP20-Prop-22.pdf)

## 名称、分类与亚种口径

### 接受名和分类链

The Reptile Database 当前记录：

- 接受名：*Amblyrhynchus cristatus* Bell, 1825
- 科：Iguanidae（美洲鬣蜥科）
- 属：*Amblyrhynchus* Bell, 1825
- 分布：Galápagos, Ecuador
- 属内现生种数：1

仓库分类链应写为 `Animalia / Chordata / Reptilia / Squamata / Iguanidae / Amblyrhynchus`。`Iguania` 是有鳞目内部支系，不替代仓库的 order 字段。[The Reptile Database](https://reptile-database.reptarium.cz/Amblyrhynchus/cristatus)

### 一个种、11 个亚种

Miralles et al. 结合近 1,500 个个体的遗传资料与 150 多个形态样本，提出 11 亚种方案；The Reptile Database 和 2020 IUCN 亚种评估沿用该方案：[Miralles et al. 2017](https://doi.org/10.1093/zoolinnean/zlx007) [IUCN SSC ISG](https://www.iucn-isg.org/publications/recent-red-list-assessments/)

| 亚种 | 主要岛屿口径 | 2020 IUCN 亚种等级 |
| --- | --- | --- |
| *A. c. cristatus* | 费尔南迪纳、伊莎贝拉相关群体；旧名 `albemarlensis` 已并入 | VU |
| *A. c. godzilla* | 圣克里斯托瓦尔北部、东北部及近岸小岛 | CR |
| *A. c. hassi* | 圣克鲁斯 | EN |
| *A. c. hayampi* | 马切纳及近岸小岛 | EN |
| *A. c. jeffreysi* | 沃尔夫、达尔文、罗卡雷东达 | EN |
| *A. c. mertensi* | 圣克里斯托瓦尔部分群体 | EN |
| *A. c. nanus* | 赫诺韦萨 | CR |
| *A. c. sielmanni* | 平塔 | CR |
| *A. c. trillmichi* | 圣菲 | CR |
| *A. c. venustissimus* | Española、Floreana 及相关小岛 | EN |
| *A. c. wikelskii* | 圣地亚哥、拉维达及近岸小岛 | EN |

表中等级用于说明空间风险差异。主 `Species` 对象代表全种，因此不能挑一个 CR 亚种把 `conservation.code` 改成 CR，也不能把 11 个亚种写成 11 个物种。Reptile Database 已把 *A. c. albemarlensis* 作为 *A. c. cristatus* 的异名处理，旧“7 亚种”资料不再作为当前字段口径。[The Reptile Database](https://reptile-database.reptarium.cz/Amblyrhynchus/cristatus)

## IUCN、种群与法律状态

### 全种正式 IUCN 字段

2020-2 版 IUCN 记录的正式字段为：

| 字段 | 落库值 | 边界 |
| --- | --- | --- |
| code | `VU` | 全球全种，不是某一亚种 |
| trend | `decreasing` | IUCN 当前趋势字段 |
| assessedYear | `2019` | 评估日 2019-12-01；2020 是发布批次 |
| criteria | `A2abce+4abce` | 过去三代及跨过去—未来三代窗口的减少证据 |

`A2abce+4abce` 中的证据类型涉及直接观察、适合该类群的丰度指数、占据面积/出现范围或生境质量变化、利用压力，以及外来类群、污染物、病原体等影响。档案只需保存原代码，不宜在正文逐字扩写成每项威胁都已量化到同一强度。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T1086A177552193.en)

IUCN 采用至少 30% 的种群减少判断，时间窗约 18—24 年。它建立在多个威胁和群体波动证据上，不是一次覆盖所有岛屿的计数。全球成熟个体没有可安全放入 `metrics.estimatedMatureIndividuals` 的当前区间，因此该字段应留空。

### 监测数不是全种总数

加拉帕戈斯国家公园管理局一次覆盖 13 岛、33 个点位的航次目视记录了 **27,758** 只海鬣蜥，并明确说明该数只代表抽样，不是全群岛总种群。[DPNG monitoring](https://galapagos.gob.ec/monitoreo-de-especies-emblematicas-de-galapagos-verifica-buen-estado-de-conservacion/)

旧资料常见“20 万—30 万只”的全种粗估，近年的 CITES 资料和无人机研究又指出 11 个亚种中有 9 个缺少完整种群数据。这个区间不应进入可排序的成熟个体字段，也不适合作为“2026 当前数量”。[Varela-Jaramillo et al. 2025](https://doi.org/10.1038/s41598-025-08381-9)

### CITES 2026 状态

CoP20 在 2025 年采纳厄瓜多尔的转附录提案；现行 CITES 附录自 2026-03-05 起把 *Amblyrhynchus cristatus* 列入**附录 I**。附录 I 对国际商业贸易施加最高级别限制，非商业科研等例外仍需相应许可。不要写成“任何跨境移动在任何情况下都绝对禁止”。[CITES 2026 Appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CITES CoP20 Proposal 22](https://cites.org/sites/default/files/documents/E-CoP20-Prop-22.pdf)

## 分布与生境

### 只在加拉帕戈斯自然分布

IUCN 列出的主要分布包括 Española、Fernandina、Floreana、Genovesa、Isabela、Marchena、Pinta、San Cristóbal、Santa Cruz、Santa Fé、Santiago、Baltra、Bartolomé、Pinzón、Plaza Norte、Plaza Sur、Rábida、Seymour Norte，以及 Darwin、Roca Redonda、Wolf 和众多卫星小岛。结构化字段宜概括为“厄瓜多尔加拉帕戈斯群岛特有”，正文再列代表岛屿；不能把某次 13 岛调查写成全分布只有 13 岛。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T1086A177552193.en)

海鬣蜥可被海流偶然带到邻近岛屿，但冷水中的游泳能力和耐力不足以支持把各岛日常往返写成常规迁徙。11 亚种的岛屿结构也说明基因交流有限。[Miralles et al. 2017](https://doi.org/10.1093/zoolinnean/zlx007)

### 三类相连生境

1. **岩石潮间带**：多数个体在低潮暴露的岩面啃食短草皮状红、绿藻，是主要取食生境。
2. **浅海亚潮带岩礁**：各群落中体型最大的个体可游离岸边并下潜，IUCN 汇总的取食范围为约 2—30 米深。
3. **岸上熔岩、干旱灌丛与沙地**：个体在熔岩和岸边岩石晒太阳、夜间栖息及繁殖；雌性会离岸寻找可挖掘沙土，IUCN 记录最远可到内陆约 2 千米。

三类生境组成一个日常循环。把海鬣蜥画成终日在水下的水生蜥蜴，或画成远离海岸的沙漠鬣蜥，都不符合生态。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T1086A177552193.en) [Buttemer and Dawson 1993](https://doi.org/10.1007/BF00318031)

## 外形、体尺与图像鉴别

### 必须保留的外部特征

- 短而钝的吻部，适合贴近岩面啃食；不是海龟喙，也不是长吻鳄头。
- 头顶至尾部有低矮、不规则的背棘，成年雄性更显著；不能画成恐龙式高帆或笔直锯齿板。
- 躯干低伏，四肢粗壮，长趾和弯曲爪用于抓住浪打岩面；没有鳍状肢。
- 尾长且明显侧扁，以左右波动推进；不能画成圆柱形陆栖鬣蜥尾或鱼类尾鳍。
- 常态体色多为炭灰、黑褐或灰绿，盐结晶可落在头部；南部一些亚种的繁殖雄性会呈红、粉红、绿或蓝绿色调，不能推广成全种全年“彩虹色”。[Miralles et al. 2017](https://doi.org/10.1093/zoolinnean/zlx007)

### 体型字段

Wikelski 的群岛比较记录各岛最大雄性体重从约 **0.9 千克到 12 千克**，显示食物生产力与热约束推动强烈岛间差异。1997 年两岛比较中，赫诺韦萨最大雄性约 0.9 千克，圣菲约 3.5 千克；雄性约为雌性体重两倍，但比例也随地点和年份变化。[Wikelski 2005](https://doi.org/10.1098/rspb.2005.3205) [Wikelski and Trillmich 1997](https://doi.org/10.1111/j.1558-5646.1997.tb03673.x)

2017 分类论文测量样本的吻肛长最高接近 49 厘米、尾长最高超过 84 厘米；这些最大值未必来自同一个体。产品可把大型雄性“总长约可达 1.3 米”作为带约数的形态说明，不应把两个分项最大值相加后宣称精确世界纪录。[Miralles et al. 2017](https://doi.org/10.1093/zoolinnean/zlx007)

推荐结构化处理：

- `measurements.length.max: 1.3 m`，注明“大型雄性约值，岛间差异显著”；
- `measurements.weight.max: 12 kg`，注明“群岛研究中的岛屿最大雄性体重，不是普通成体统一上限”；
- `metrics.adultLengthCm` 与 `metrics.adultMassKg` 留空，避免把极值伪装成标准成体范围；
- `metrics.maxDiveDepthM: 30` 可保留，因为 IUCN 明确把它作为最大取食深度，而不是典型潜深。

## 食性、潜水、体温与盐平衡

### 海藻专食者，仍需保留局地例外

圣克鲁斯研究显示，海鬣蜥会随季节和可达性在 4—5 种红藻之间选择；低潮水位偏高、优选红藻仍被淹没时，会更多取食绿藻 *Ulva lobata*。IUCN 汇总的常见食物包括红藻 *Centroceras*、*Gelidium*、*Pterocladia* 和绿藻 *Ulva*。[Shepherd and Hawkes 2005](https://media.migramar.org/uploads/archive/595.pdf) [IUCN assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T1086A177552193.en)

产品可设 `types: ['herbivore']`。正文使用“几乎全以海藻为食”，不要写“任何情况下只吃海藻”：北西摩岛有一个局地群体补食海滨肉质植物 *Batis maritima*，但营养更低，且无法在强厄尔尼诺中普遍替代海藻。[Wikelski and Wrege 2000](https://doi.org/10.1007/s004420050030)

### 多数在潮间带，少数大型个体潜水

体型决定两种主要策略：小型个体利用白昼低潮，在浪洗岩面和潮池啃食；较大的个体能承受更长冷却时间，会游到亚潮带下潜。早期连续观察中，11 个个体的 23 次潜水持续 60—815 秒，中位数 175 秒。这个样本适合说明“常见潜水远短于极端纪录”，不适合填全种固定潜水时长。[Wikelski and Trillmich 1994](https://doi.org/10.1163/156853994X00280) [Trillmich and Trillmich 1986](https://library.iucn-isg.org/documents/1986/Trillmich_1986_Behavioral_Ecology_and_Sociobiology.pdf)

水下画面应让尾部左右摆动，四肢贴近身体或松弛后掠；动物下到岩底后用爪抓牢并用钝吻啃藻。它不会像海龟用四肢划水，也不会像鳄鱼捕食鱼类。

### 上岸加热，不是恒温动物

野外研究记录岸上偏好体温约 35—37°C，比海中取食时高 10°C 或更多。个体出水后伏在日照熔岩上增温，炎热时又抬高身体、改变朝向或利用风减少过热。图像可表现晒背与姿势调温，不能用蒸汽、发光皮肤或恒温体温计暗示主动产热。[Bartholomew 1966](https://library.iucn-isg.org/documents/1966/Bartholomew_1966_Copeia.pdf)

### 盐腺承担主要电解质排出

自由生活个体会随藻类和误吞海水摄入大量盐。Shoemaker 和 Nagy 的预算估计，鼻腺分泌承担约 95% 的 Na⁺、Cl⁻ 排出和约 80% 的 K⁺ 排出，只使用约四分之一水输入。海鬣蜥会从鼻孔猛烈排出盐水小滴，干后留下白色盐晶。[Shoemaker and Nagy 1984](https://doi.org/10.1086/physzool.57.3.30163717)

## 活动、繁殖与厄尔尼诺

### 日常活动

海鬣蜥昼行，活动时间受日照、潮汐、浪况、体型和繁殖状态共同约束。它们常密集群聚晒太阳或夜间保温，但通常各自取食；密集聚集不等于协作捕食或稳定家庭群。[Buttemer and Dawson 1993](https://doi.org/10.1007/BF00318031)

繁殖期雄性会在海岸聚集的展示场中维护很小的领域，点头、侧身展示并争夺交配机会。大型领域雄性获得较高成功，小型雄性还会采用不同交配策略。`lek` 场景不能画成一雄多雌的长期家庭或雄性提供食物资源。[Wikelski et al. 1996](https://doi.org/10.1006/anbe.1996.0199)

雌性在沙土中挖穴产卵。国家公园针对圣克里斯托瓦尔、伊莎贝拉等居民点附近巢区采取季节性围栏、步道关闭和宠物管理；当地说明记录巢可深至约 80 厘米、约 4 枚卵、约 100 天孵化。这组数值用于当地管理说明，不宜写成 11 亚种统一不变的繁殖常数。[DPNG nesting guidance](https://galapagos.gob.ec/iguanas-marinas-de-galapagos-iniciaron-su-proceso-de-anidacion/)

### 可逆缩短的正确表述

1997—1998 强厄尔尼诺期间，可食红绿藻减少，部分成年海鬣蜥的吻肛长缩短最多约 20%，之后食物恢复时又可增长。作者认为骨组织重塑参与这一变化，且缩短较多的个体生存更久。画面不能表现瞬间变形、尾部自行断落或一年年单向变小；文案必须写“部分个体、一次强事件中的最大记录”。[Wikelski and Thom 2000](https://doi.org/10.1038/47396)

## 威胁与保护行动

### 可直接落库的威胁

- 厄尔尼诺及气候变化导致海水增温、营养盐上涌减弱、可食藻类更替和周期性饥荒；
- 猫、犬、猪和鼠等外来哺乳动物捕食卵、幼体或成体，并干扰巢区；
- 柴油、燃油和其他海洋污染损伤沿岸食物网与海鬣蜥消化系统；
- 居民点扩张、道路、游客踩踏和近距离干扰破坏休息地及产卵沙地；
- 船运和岛际交通提高新外来种、病原体及污染物输入风险；
- 塑料、渔具和其他海洋垃圾造成摄入或缠绕；
- 非法捕捉及国际宠物贸易；
- 岛屿亚种范围狭小、有效种群低且监测不完整，使局地灾害难由其他岛屿补充。

全种 IUCN 评估承担前六项的大尺度证据；油污的局地因果证据来自圣菲研究；非法贸易的当前重要性由厄瓜多尔提交的 CITES CoP20 提案和 2026 附录 I 决定支撑。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T1086A177552193.en) [Wikelski et al. 2002](https://doi.org/10.1038/417607a) [CITES CoP20 Proposal 22](https://cites.org/sites/default/files/documents/E-CoP20-Prop-22.pdf)

### 可直接落库的行动

- 以 11 个亚种和独立岛屿群体为管理单元，持续开展标准化数量、年龄结构、体况、疾病和污染监测；
- 清除或控制外来捕食者，管理居民宠物，并强化港口、机场和岛际运输生物安全；
- 保护岩石潮间带、亚潮带藻床、晒背岸线与沙质产卵地之间的连续通道；
- 在繁殖季围护巢区、临时关闭高风险步道，限制踩踏、车辆和宠物进入；
- 完善燃油运输、泄漏预防和快速响应，持续清理塑料及遗失渔具；
- 监测海温、上涌与藻类群落，识别厄尔尼诺避难群体，并避免在灾后低谷期增加人为压力；
- 执行 CITES 附录 I 与厄瓜多尔国内禁捕规定，追查来源可疑的活体和繁殖声明；
- 使用无人机影像、专家复核、标记重捕等方法补齐 9 个资料不足亚种的种群基线。

DPNG 已实施跨岛健康监测、个体标记和巢区围护；这些现行措施可直接支撑监测、宠物管理和繁殖地保护行动。[DPNG monitoring](https://galapagos.gob.ec/monitoreo-de-especies-emblematicas-de-galapagos-verifica-buen-estado-de-conservacion/) [DPNG nesting guidance](https://galapagos.gob.ec/iguanas-marinas-de-galapagos-iniciaron-su-proceso-de-anidacion/)

## 六段故事文案

### 1. 火山岸线上的海洋蜥蜴

短钝吻贴近岩面，长爪扣住黑色熔岩，侧扁尾从低矮背棘后延伸。海鬣蜥在陆上休息、交配和产卵，却把食物来源放在潮间带与浅海；它是现生蜥蜴中唯一以海中取食为常规生活方式的物种。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T1086A177552193.en)

### 2. 低潮打开一张藻类餐桌

多数海鬣蜥不必深潜。白昼低潮露出被浪打湿的岩面后，小型个体迅速啃食红藻；潮位偏高、红藻仍在水下时，它们会更多利用可触及的绿藻 *Ulva*。潮汐、日照和海藻可达性共同安排每次取食。[Shepherd and Hawkes 2005](https://media.migramar.org/uploads/archive/595.pdf)

### 3. 只有大身体能把午间热量带进冷海

各群落最大的个体更常游向亚潮带，用侧扁尾推进，再以长爪抓牢岩礁啃藻。IUCN 汇总的最大取食深度约 30 米，但多数个体留在潮间带，观察到的常规潜水也远短于网络流传的“一小时”。[Wikelski and Trillmich 1994](https://doi.org/10.1163/156853994X00280) [IUCN assessment](https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T1086A177552193.en)

### 4. 鼻孔喷出的不是水汽

海藻和误吞海水带来高盐负担。鼻盐腺把浓缩电解质送到鼻腔，海鬣蜥以短促喷气排出液滴；水分蒸发后，头顶和吻部留下白色盐晶。它不是吐毒，也不是向同伴发动攻击。[Shoemaker and Nagy 1984](https://doi.org/10.1086/physzool.57.3.30163717)

### 5. 厄尔尼诺让“大”从优势变成负担

营养盐上涌支撑岸边藻场；强厄尔尼诺使暖水占据近岸后，大型个体先承受能量缺口。1997—1998 年研究中，部分成体吻肛长可逆缩短最多约 20%，缩得较多者活得更久。这个罕见能力缓冲了一次饥荒，却不能消除连续暖水事件的种群风险。[Wikelski and Thom 2000](https://doi.org/10.1038/47396)

### 6. 每座岛都需要自己的保护基线

一个物种包含 11 个岛屿亚种，风险从 VU 到 CR。守住巢区、控制猫犬和其他外来捕食者、阻止燃油与塑料进入海岸、执行 2026 年生效的 CITES 附录 I，还要为资料不足的群体建立可重复计数；一次航次看到 27,758 只，只能证明抽样点当时的记录，不能替代全群岛趋势。[IUCN SSC ISG](https://www.iucn-isg.org/publications/recent-red-list-assessments/) [DPNG monitoring](https://galapagos.gob.ec/monitoreo-de-especies-emblematicas-de-galapagos-verifica-buen-estado-de-conservacion/)

## 四项 featured stats

| key | label | value | unit | note |
| --- | --- | --- | --- | --- |
| `recognized-subspecies` | 当前接受亚种 | `11` | 个 | Miralles 2017 与 The Reptile Database；不是 11 个物种 |
| `island-male-mass` | 各岛最大雄性体重 | `0.9—12` | 千克 | 群岛研究的岛屿最大值跨度，不是普通成体范围 |
| `foraging-depth` | 最大取食深度 | `30` | 米 | IUCN 汇总极值；多数个体在潮间带取食 |
| `enso-shrinkage` | 强厄尔尼诺最大缩短 | `约 20%` | 吻肛长 | 1997—1998 年部分成体的最大记录，可逆且不代表每只个体 |

## 六帧原创图像与科学边界

### 全组共同约束

- 每帧海鬣蜥都保留短钝吻、低矮背棘、长弯爪和侧扁长尾；主体可见侧的四肢、趾和尾部连续自然。
- 不加鳃、鱼鳍、海龟鳍肢、鳄鱼厚甲、恐龙高帆、角或喷火效果。
- 水下游泳靠尾部左右摆动，四肢贴体；取食时爪抓岩石、吻部贴藻，不追捕鱼虾。
- 全组采用炭灰、黑褐或灰绿色常态体色，不把南部亚种繁殖雄性的红绿色写成全种特征。
- 六张图均为原创科学示意，不冒充某次调查照片、精确巢位、个体身份或丰度证据；画面不放文字、徽标、边框或水印。
- 所有帧采用 3:2 横幅；源图建议 1536×1024。封面预留左侧标题负空间，其余图保证详情页中央裁切后仍能看见头、四肢和尾部关键线索。

| 帧与建议文件 | 画面 | 必须准确 | 禁区 |
| --- | --- | --- | --- |
| 01 `01-black-lava-adult-cover` | 一只灰黑成年雄性低伏在黑色熔岩岸，面向开阔海面 | 完整尾尖、短吻、低背棘和长爪；主体靠右，左侧留负空间 | 高帆恐龙、鳄鱼甲、热带棕榈主景、多个动物、尾尖裁切 |
| 02 `02-flattened-tail-swimming` | 一只成体从右向左游过清澈浅海玄武岩礁 | 四肢贴体、尾部上下较深且侧扁、身体与尾尖完整 | 海龟式划肢、鱼鳃或鱼鳍、圆柱尾、深渊、追逐噱头 |
| 03 `03-volcanic-intertidal-habitat` | 低潮岸线连接干燥岩台、浪溅带、潮池和近岸海水，一只个体伏在岩台 | 湿岩短红绿藻、完整单一动物、三类生境连续 | 指定岛屿标志、精确藻类覆盖率、多个主体、热带沙滩景观 |
| 04 `04-underwater-algae-grazing` | 一只成体在浅海玄武岩礁以长爪固定并刮食短藻 | 吻贴低矮藻膜、爪抓岩面、侧扁长尾完整 | 鱼虾猎物、整株叶菜、珊瑚礁、摄食量或深度读数 |
| 05 `05-sandy-nest-burrow-female` | 一只雌性在岸后火山沙地的窄巢洞旁扬起松沙 | 单一雌性、一个巢洞、卵完全不可见 | 地表裸蛋、透明剖面、幼体、人员、第二只动物 |
| 06 `06-distance-shoreline-census` | 一只海鬣蜥伏在前景熔岩岸，一名观察员在远处目视计数 | 双筒望远镜和无字记录板；一人一蜥、保持距离、没有接触 | 抓捕、标记、附着设备、游客合影、可读徽标或调查数字 |

### 静态验收

1. 用 `file`、`identify` 或同类静态工具确认六张 PNG 与六张 WebP 均为 1536×1024、3:2、可解码，且没有意外 alpha 或嵌入文字。
2. 逐张检查只有一条完整主尾；02 的尾部侧扁且负责推进，04 的吻接触短藻，05 看不到卵，06 只有一名远距观察员。
3. 六帧均保持常态体色，不把南部繁殖雄性的局地季节色当作全种外观。
4. 01 作为封面，图库依次使用 02—06；`focalPoint` 按最终构图设置并在测试中固定。

## 推荐来源数组

```ts
const MARINE_IGUANA_SOURCE_DATE = '2026-08-27' as const;
const MARINE_IGUANA_CONTENT_DATE = '2026-08-27' as const;

const MARINE_IGUANA_SOURCES = [
  {
    title: 'IUCN Red List — Amblyrhynchus cristatus (2019 assessment, published 2020)',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T1086A177552193.en',
    kind: 'conservation',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC Iguana Specialist Group — 2020 species and subspecies assessments',
    url: 'https://www.iucn-isg.org/publications/recent-red-list-assessments/',
    kind: 'conservation',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'The Reptile Database — Amblyrhynchus cristatus',
    url: 'https://reptile-database.reptarium.cz/Amblyrhynchus/cristatus',
    kind: 'taxonomy',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Miralles et al. 2017 — Integrative taxonomic revision of Galápagos marine iguanas',
    url: 'https://doi.org/10.1093/zoolinnean/zlx007',
    kind: 'taxonomy',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'CITES CoP20 Proposal 22 — Transfer Amblyrhynchus cristatus to Appendix I',
    url: 'https://cites.org/sites/default/files/documents/E-CoP20-Prop-22.pdf',
    kind: 'conservation',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Galápagos National Park — Emblematic species monitoring across 13 islands',
    url: 'https://galapagos.gob.ec/monitoreo-de-especies-emblematicas-de-galapagos-verifica-buen-estado-de-conservacion/',
    kind: 'distribution',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Galápagos National Park — Marine iguana nesting protection guidance',
    url: 'https://galapagos.gob.ec/iguanas-marinas-de-galapagos-iniciaron-su-proceso-de-anidacion/',
    kind: 'conservation',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Wikelski 2005 — Evolution of body size in Galápagos marine iguanas',
    url: 'https://doi.org/10.1098/rspb.2005.3205',
    kind: 'general',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Wikelski and Trillmich 1997 — Body size and sexual size dimorphism',
    url: 'https://doi.org/10.1111/j.1558-5646.1997.tb03673.x',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Wikelski and Trillmich 1994 — Ontogenetic foraging strategies',
    url: 'https://doi.org/10.1163/156853994X00280',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Buttemer and Dawson 1993 — Foraging and microhabitat use',
    url: 'https://doi.org/10.1007/BF00318031',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Shepherd and Hawkes 2005 — Algal preferences and seasonal foraging',
    url: 'https://media.migramar.org/uploads/archive/595.pdf',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Bartholomew 1966 — Field study of temperature relations',
    url: 'https://library.iucn-isg.org/documents/1966/Bartholomew_1966_Copeia.pdf',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Shoemaker and Nagy 1984 — Osmoregulation in the Galápagos marine iguana',
    url: 'https://doi.org/10.1086/physzool.57.3.30163717',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Wikelski and Wrege 2000 — Niche expansion, body size and survival',
    url: 'https://doi.org/10.1007/s004420050030',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Wikelski and Thom 2000 — Marine iguanas shrink to survive El Niño',
    url: 'https://doi.org/10.1038/47396',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Wikelski et al. 2002 — Marine iguanas die from trace oil pollution',
    url: 'https://doi.org/10.1038/417607a',
    kind: 'conservation',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Varela-Jaramillo et al. 2025 — Citizen-science counts from drone imagery',
    url: 'https://doi.org/10.1038/s41598-025-08381-9',
    kind: 'conservation',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 可直接用于 `species.ts` 的完整字段建议

```ts
{
  id: 'species-amblyrhynchus-cristatus',
  slug: 'marine-iguana',
  names: {
    zh: '海鬣蜥',
    en: 'Marine Iguana',
    aliases: ['加拉帕戈斯海鬣蜥', '海洋鬣蜥', '钝鼻蜥'],
  },
  scientificName: 'Amblyrhynchus cristatus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Reptilia', '爬行纲'),
    taxon('Squamata', '有鳞目'),
    taxon('Iguanidae', '美洲鬣蜥科'),
    taxon('Amblyrhynchus', '海鬣蜥属'),
  ),
  conservation: conservation('VU', 'decreasing', 2019, 'A2abce+4abce'),
  distribution: {
    realms: ['terrestrial', 'marine'],
    continents: ['南美洲'],
    regions: ['加拉帕戈斯群岛', '东太平洋'],
    countries: ['厄瓜多尔'],
    endemicTo: ['加拉帕戈斯群岛'],
    range:
      '仅自然分布于厄瓜多尔加拉帕戈斯群岛，从 Española、Fernandina、Isabela、Santa Cruz 等大岛到 Darwin、Wolf、Roca Redonda 及众多近岸小岛的适宜海岸。各岛群体高度结构化，不能把一次调查覆盖岛数当作完整分布岛数。',
    center: { lat: -0.65, lng: -90.55 },
  },
  habitats: [
    {
      name: '岩石潮间带与浪洗熔岩岸',
      realm: 'marine',
      description:
        '多数个体在白昼低潮暴露或浅水覆盖的岩面啃食短草皮状红绿藻，并用长爪抵抗海浪。',
      isPrimary: true,
    },
    {
      name: '浅海亚潮带岩礁与藻床',
      realm: 'marine',
      description:
        '各群落中体型最大的个体可游离岸边，在约 2—30 米深的岩礁藻床取食；这不是所有年龄和性别的常规策略。',
    },
    {
      name: '海岸熔岩、干旱灌丛与沙质巢地',
      realm: 'terrestrial',
      description:
        '个体在海岸岩面晒太阳、群聚休息和繁殖；雌性会进入岸后沙地或疏松土壤挖巢。',
    },
  ],
  measurements: {
    length: {
      max: 1.3,
      unit: 'm',
      note: '大型雄性约值；体型随岛屿、性别和食物条件显著变化',
    },
    weight: {
      max: 12,
      unit: 'kg',
      note: '群岛研究中的最大岛屿雄性体重；赫诺韦萨等岛的最大雄性约 0.9 千克',
    },
  },
  diet: {
    types: ['herbivore'],
    foods: ['Centroceras 等红藻', 'Gelidium 等红藻', 'Pterocladia 等红藻', 'Ulva 等绿藻'],
    description:
      '几乎全以岩石潮间带和亚潮带的大型海藻为食，常优先选择营养较高的红藻；低潮条件不利时会增加可触及绿藻。北西摩有局地群体补食 Batis 海滨植物，但不能代表全种能靠陆生植物度过厄尔尼诺。',
  },
  activity: ['昼行', '低潮取食', '晒太阳调温', '多数潮间带取食、最大个体可潜水', '群聚休息', '繁殖期展示场交配'],
  tags: ['加拉帕戈斯特有种', 'IUCN 易危', '唯一海中取食的现生蜥蜴', '海藻食者', '11 个亚种', 'CITES 附录 I'],
  summary: '只生活在加拉帕戈斯、用侧扁长尾潜入冷海啃藻，再回到火山岩上晒热身体的海洋蜥蜴。',
  description:
    '海鬣蜥把陆地与海洋连成一个生活周期：它在黑色熔岩岸休息、调温和繁殖，在低潮岩面或浅海藻床取食。短钝吻、长爪和侧扁尾分别帮助啃藻、抓岩与游泳，鼻盐腺则排出随食物和海水摄入的电解质。不同岛屿的最大雄性体重相差超过十倍，11 个亚种也承受不同程度的局地风险。IUCN 全种评估为易危且下降；厄尔尼诺导致的藻类更替、外来捕食者、油污、巢地干扰和非法贸易要求按岛监测与保护。',
  storySections: [
    {
      key: 'volcanic-shore',
      label: '外形与生境',
      title: '生活在陆地，食物来自海里',
      body:
        '短钝吻贴近岩面，长爪扣住黑色熔岩，侧扁尾从低矮背棘后延伸。海鬣蜥在陆上休息、交配和产卵，却把食物来源放在潮间带与浅海；它是现生蜥蜴中唯一以海中取食为常规生活方式的物种。',
    },
    {
      key: 'low-tide-table',
      label: '潮汐与食性',
      title: '低潮打开一张藻类餐桌',
      body:
        '多数海鬣蜥不必深潜。白昼低潮露出浪洗岩面后，小型个体迅速啃食红藻；潮位偏高、优选红藻仍在水下时，它们会更多利用可触及的绿藻 Ulva。潮汐、日照和海藻可达性共同安排每次取食。',
    },
    {
      key: 'cold-water-dive',
      label: '潜水与体温',
      title: '把午间热量带进冷海',
      body:
        '各群落最大的个体更常游向亚潮带，用侧扁尾推进，再以长爪抓牢岩礁啃藻。最大取食深度记录约 30 米；出水后，它们伏在日照熔岩上，把被冷海带走的热量补回来。',
    },
    {
      key: 'nasal-salt',
      label: '生理适应',
      title: '鼻孔喷出的不是水汽',
      body:
        '海藻和误吞海水带来高盐负担。鼻盐腺把浓缩电解质送到鼻腔，海鬣蜥以短促喷气排出液滴；水分蒸发后，头顶和吻部留下白色盐晶。它不是吐毒，也不是向同伴发动攻击。',
    },
    {
      key: 'enso-shrinkage',
      label: '气候与生存',
      title: '厄尔尼诺让“大”从优势变成负担',
      body:
        '强厄尔尼诺让暖水压低营养盐上涌，可食红绿藻随之衰退。1997—1998 年研究中，部分成体吻肛长可逆缩短最多约 20%，缩得较多者活得更久；这种缓冲能力仍无法消除连续暖水事件的种群风险。',
    },
    {
      key: 'island-by-island',
      label: '繁殖与保护',
      title: '每座岛都需要自己的保护基线',
      body:
        '雌性离开岩岸到沙土中挖巢，部分巢区紧邻居民点和步道。一个物种包含 11 个岛屿亚种，风险从易危到极危；围护巢地、管理宠物和外来捕食者、防止油污与塑料、执行 CITES 附录 I，还要用重复调查补齐每个群体的数量基线。',
    },
  ],
  keyFacts: [
    '现生蜥蜴中只有海鬣蜥把海中取食作为常规生活方式，但它仍在陆地休息、调温和繁殖。',
    '鼻盐腺承担大部分摄入电解质的排出，鼻孔喷出的液滴干后形成白色盐晶。',
    '各岛最大雄性体重约 0.9—12 千克；体型差异不能简化成一个普通成体范围。',
    '强厄尔尼诺期间部分成体曾可逆缩短最多约 20% 吻肛长，这是一项事件限定的最大记录。',
  ],
  threats: [
    '厄尔尼诺和气候变化引起的海温升高、上涌减弱与海藻更替',
    '猫、犬、猪和鼠等外来捕食者及居民宠物干扰',
    '燃油泄漏、塑料和其他海洋污染',
    '巢地、晒背岸线和潮间带受到建设、车辆、踩踏与游客近距干扰',
    '岛际交通带来的新外来种和病原体风险',
    '非法捕捉和国际宠物贸易',
    '狭域亚种的小种群、隔离和监测缺口',
  ],
  conservationActions: [
    '按 11 个亚种和岛屿群体开展数量、年龄结构、体况、疾病与污染监测',
    '清除或控制外来捕食者，管理宠物并强化港口、机场和岛际生物安全',
    '保护潮间带藻场、亚潮带岩礁、晒背岸线和沙质巢地之间的连续生境',
    '繁殖季围护巢区、临时关闭高风险步道并限制车辆和踩踏',
    '加强燃油泄漏预防与快速响应，清理塑料和遗失渔具',
    '监测海温、上涌与藻类群落，识别厄尔尼诺避难群体',
    '执行 CITES 附录 I 和厄瓜多尔禁捕规定，调查来源可疑活体',
  ],
  metrics: {
    maxDiveDepthM: 30,
  },
  featuredStats: [
    {
      key: 'recognized-subspecies',
      label: '当前接受亚种',
      value: '11',
      unit: '个',
      note: 'Miralles 2017 与 The Reptile Database；不是 11 个物种',
    },
    {
      key: 'island-male-mass',
      label: '各岛最大雄性体重',
      value: '0.9—12',
      unit: '千克',
      note: '群岛研究的岛屿最大值跨度，不是普通成体范围',
    },
    {
      key: 'foraging-depth',
      label: '最大取食深度',
      value: '30',
      unit: '米',
      note: 'IUCN 汇总极值；多数个体在潮间带取食',
    },
    {
      key: 'enso-shrinkage',
      label: '强厄尔尼诺最大缩短',
      value: '约 20%',
      note: '1997—1998 年部分成体吻肛长，可逆且不代表每只个体',
    },
  ],
  media: {
    image: './images/species/marine-iguana/01-black-lava-adult-cover.webp',
    alt: '加拉帕戈斯黑色玄武岩海岸上只有一只完整灰黑成年雄性海鬣蜥，短钝吻、颗粒鳞、连续背棘、长爪和完整尾尖清楚，主体位于右侧并面向开阔海面',
    focalPoint: { x: 0.7, y: 0.58 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/marine-iguana/02-flattened-tail-swimming.webp',
        alt: '清澈浅海中只有一只完整成年海鬣蜥从右向左游过玄武岩礁，四肢贴近躯干，长尾呈上下较深的侧扁桨状轮廓',
        title: '侧扁长尾承担水下推进',
        caption: '游姿重建展示尾部推进与贴体四肢；画面不能提供潜水深度、持续时间或这只个体的体型等级。',
        focalPoint: { x: 0.5, y: 0.56 },
      },
      {
        image: './images/species/marine-iguana/03-volcanic-intertidal-habitat.webp',
        alt: '低潮时的黑色熔岩岸连接干燥晒背岩台、浪溅带、潮池和近岸海水，一只完整灰黑海鬣蜥伏在岩台上，湿岩覆盖薄层红绿藻',
        title: '一条岸线连接三类生境',
        caption: '环境重建同时呈现晒背处、潮间带短藻与浅海；它不代表指定岛屿、藻类覆盖率或调查点位。',
        focalPoint: { x: 0.31, y: 0.48 },
      },
      {
        image: './images/species/marine-iguana/04-underwater-algae-grazing.webp',
        alt: '浅海玄武岩礁上只有一只完整成年海鬣蜥，强壮长爪抓紧岩面，短钝吻贴近自然低矮红绿藻膜刮食，侧扁长尾完整',
        title: '长爪固定身体，钝吻刮取短藻',
        caption: '画面重建一次水下刮食动作；它不能确认藻类物种、摄入量、潜深或取食结果。',
        focalPoint: { x: 0.51, y: 0.58 },
      },
      {
        image: './images/species/marine-iguana/05-sandy-nest-burrow-female.webp',
        alt: '远离潮线的浅色火山沙地上只有一只完整成年雌性海鬣蜥，她在一个窄巢洞旁扬起松沙，画面没有可见卵、幼体或其他动物',
        title: '离开熔岩岸进入沙地挖巢',
        caption: '画面只保留一个挖洞瞬间；它不提供窝卵数、巢深、孵化期或繁殖结果。',
        focalPoint: { x: 0.49, y: 0.56 },
      },
      {
        image: './images/species/marine-iguana/06-distance-shoreline-census.webp',
        alt: '黑色熔岩岸前景只有一只完整海鬣蜥伏卧，远处只有一名观察员用双筒望远镜和记录板进行目视计数，人与动物没有接触',
        title: '保持距离的岸线目视计数',
        caption: '这是非接触监测的代表性重建，不对应真实调查、设备、地点、个体、数量或监测结果。',
        focalPoint: { x: 0.42, y: 0.68 },
      },
    ],
  },
  sources: MARINE_IGUANA_SOURCES,
  featured: true,
  publishedAt: MARINE_IGUANA_CONTENT_DATE,
  updatedAt: MARINE_IGUANA_CONTENT_DATE,
}
```

## 字段—证据追溯矩阵

| 落库部分 | 主证据 | 审慎处理 |
| --- | --- | --- |
| 接受名、科属与亚种 | The Reptile Database；Miralles 2017 | 一个种、11 亚种；`albemarlensis` 不另列当前亚种 |
| IUCN code/trend/year/criteria | IUCN 2020 assessment | `VU / decreasing / 2019 / A2abce+4abce`；不把发布年 2020 写成评估年 |
| 亚种风险 | IUCN SSC ISG 2020 | 只进入说明；不用 CR 亚种覆盖全种 VU |
| 分布和生境 | IUCN；Reptile Database | 仅加拉帕戈斯；`marine + terrestrial`；不把调查岛数当完整岛数 |
| 体型 | Wikelski 2005；Wikelski & Trillmich 1997；Miralles 2017 | 0.9—12 千克是各岛最大雄性跨度，不是普通成体范围 |
| 食性与活动 | Shepherd & Hawkes；Wikelski & Trillmich；Buttemer & Dawson | 多数潮间带取食；潜水偏向最大个体；陆生植物只是局地补食 |
| 体温与盐腺 | Bartholomew；Shoemaker & Nagy | 晒太阳行为调温；鼻孔排盐，不是恒温或吐毒 |
| 厄尔尼诺缩短 | Wikelski & Thom | 最多约 20% 只限研究中的部分成体，不是全种常数 |
| 威胁 | IUCN；Wikelski et al. 2002；CITES CoP20 | 62% 死亡只限 Jessica 事件后的圣菲群体 |
| 法律 | CITES 2026 | 当前附录 I，自 2026-03-05 生效；不沿用旧附录 II |
| 巢区行动 | DPNG | 地方管理数字不外推成 11 亚种统一繁殖参数 |

## 实施、测试与 TODO 收尾条件

### 数据与分类

- 在 `src/data/species.ts` 各新增一次 `MARINE_IGUANA_SOURCE_DATE`、`MARINE_IGUANA_CONTENT_DATE`、`MARINE_IGUANA_SOURCES` 和完整对象。
- 固定 `id: 'species-amblyrhynchus-cristatus'`、`slug: 'marine-iguana'`、`scientificName: 'Amblyrhynchus cristatus'`。
- 分类链固定为 `Chordata / Reptilia / Squamata / Iguanidae / Amblyrhynchus`。
- 保护字段固定为 `conservation('VU', 'decreasing', 2019, 'A2abce+4abce')`；搜索并清除误写的 `EN`、`CR`、`assessedYear: 2020` 或 CITES Appendix II。
- `storySections` 保持恰好 6 段，`featuredStats` 保持恰好 4 项；`metrics` 只保留 `maxDiveDepthM: 30`。

### 图像与资产

- `src/assets/source/species/marine-iguana/` 包含 README 和 6 张 `*-source.png`；`public/images/species/marine-iguana/` 包含同基名的 6 张 `.webp`。
- 更新 `src/assets/source/README.md` 的物种源图索引，并让源图 README 记录最终提示词、科学边界、生成日期、WebP 转换参数和逐图验收结果。
- 用静态工具确认 12 个文件均为 1536×1024、8-bit sRGB、可解码；按仓库约束不启动 GUI 或无头浏览器。
- 封面只使用 01，gallery 依次使用 02—06；最终实图完成后再设焦点，避免研究稿坐标覆盖真实构图。

### 分类测试与计数

- 在 `tests/taxonomy.test.mjs` 加入 `Amblyrhynchus cristatus`，验证其叶节点归属 `Amblyrhynchus / Iguanidae / Squamata / Reptilia`。
- 若本轮只新增海鬣蜥且没有同步物种变更，物种总数应从 **55 增至 56**，爬行纲物种从 **7 增至 8**，有鳞目物种应为 **3**；共享工作区若已有别的提交，应按实际数据重算，不能机械覆盖。
- 保留并通过 id、slug、学名、分类叶、source URL、媒体路径、六段故事和四项数字的唯一性及必填检查。

### 命令验证

- 运行 `npm run typecheck`。
- 运行 `npm test`。
- 运行 `npm run build`，确认六张 WebP 进入构建产物，跟踪的 `dist/` 与当前源码一致。
- 运行 `git diff --check`，再审阅 `git diff --stat` 和目标文件清单；不提交下载论文、临时图、缓存或未采用的生成结果。

### TODO 收尾顺序

只有同时满足以下条件，才能从 `docs/todo.md` 删除“海鬣蜥（*Amblyrhynchus cristatus*）”：

1. 完整 Species 对象与来源数组已落库，IUCN 和 CITES 口径通过人工复核；
2. 六张源 PNG、六张运行时 WebP、物种源图 README 和总索引齐全；
3. 六帧完成静态形态与内容检查，封面和图库没有重复；
4. 分类测试已更新，物种、爬行纲和有鳞目计数按实际树通过；
5. typecheck、完整测试、生产构建和 `git diff --check` 全部通过；
6. `docs/todo.md` 的剩余数量由 23 改为 22、物种档案由 55 改为 56、爬行纲由 7 改为 8，并确认下一项未被误删。

研究文件完成但数据、图像或验证尚有任何一项缺失时，不提前勾掉 TODO。

## 暂不落库与未来复核

1. 不填全球成熟个体区间。现有全群岛估算粗糙，9 个亚种仍缺完整数量基线。
2. 不填寿命。常见“60 年”数字缺少适合全种结构化字段的直接长期证据。
3. 不填典型潜水时长。早期 23 次潜水中位数 175 秒与网络极端“一小时”口径不同；`maxDiveDepthM` 足以表达水下能力。
4. 不把 27,758 只写成总种群。DPNG 明确称其为 13 岛、33 点位的一次目视样本。
5. 不把 62% 写成油污通用死亡率。它只属于 2001 年泄漏后圣菲长期研究群体的一年结果。
6. 不把 20% 写成每次厄尔尼诺都会发生的统一缩短。它是 1997—1998 年部分成年个体的最大吻肛长变化。
7. IUCN 全种评估仍是 2019/VU；任何新全球评估发布后，应同时复核 code、trend、criteria、assessedYear、三代时间窗和种群论证。
8. CITES 已于 2026-03-05 转为附录 I。后续若附录再修订，应以正式生效文本为准，且不连带改写 IUCN 字段。
