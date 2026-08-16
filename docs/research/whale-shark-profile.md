# 鲸鲨（*Rhincodon typus*）完整档案研究

- 检索与核验日期：2026-08-16
- 使用范围：`src/data/species.ts` 的 `whale-shark` 条目及详情页文案
- 评估日期口径：最新 IUCN 状态采用 **2025-03-31 评估**（Red List 2025-2）；本稿的 **2026-08-16** 是资料访问日期，不代表 IUCN 在 2026 年重新评估
- 证据标准：优先采用 IUCN Red List/SSC、CITES、CMS、政府海洋机构、WoRMS/ITIS，以及原始同行评审论文。极端纪录、模型外推和单个个体追踪均明确注明边界；不使用二手百科拼接数值。

## 结论摘要

### 接受名、分类与中英文名称

当前接受名为 ***Rhincodon typus*** Smith, 1828，分类口径为动物界—脊索动物门—软骨鱼纲—须鲨目—鲸鲨科—鲸鲨属；鲸鲨科和鲸鲨属均只含这一现生种。WoRMS 将该名称标为 accepted，ITIS 将其标为 valid；仓库现有门、纲、目、科、属均可保留。[WoRMS AphiaID 105847](https://www.marinespecies.org/aphia.php?p=taxdetails&id=105847) [ITIS TSN 159857](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=159857)

规范英文通名为 **Whale Shark**，中文名“鲸鲨”可保留。“豆腐鲨”“大憨鲨”是台湾海洋主管机关记录的地方俗名，可作为中文别名保留，但展示时宜理解为地域性俗称，而不是整个中文语境中同等通行的规范名。[台湾海洋保育署—鲸鲨](https://www.oca.gov.tw/ch/home.jsp?dataserno=202103170014&id=289&mcustomize=ocamaritime_view.jsp&parentpath=0%2C5)

### 形态识别与个体辨识

鲸鲨最醒目的组合特征是宽而扁平的头、位于吻端而不是腹面的宽口、五对大型鳃裂、体侧三条明显纵向隆起，以及深色背部上棋盘状排列的浅色斑点和横纹。它是鲨鱼，尾鳍在垂直平面摆动，不具鲸类的喷气孔、鲸须或水平尾叶。[NOAA Fisheries—Shark Identification: Whale Shark](https://www.fisheries.noaa.gov/new-england-mid-atlantic/atlantic-highly-migratory-species/shark-identification-cooperative-shark-0) [台湾海洋保育署—鲸鲨](https://www.oca.gov.tw/ch/home.jsp?dataserno=202103170014&id=289&mcustomize=ocamaritime_view.jsp&parentpath=0%2C5)

鳃裂后、胸鳍上方区域的斑点组合可用于照片识别。2021 年研究把 154 组照片身份与 12 个微卫星位点的遗传身份相互核对，结果完全一致，并在 2016—2018 年重访个体中观察到斑纹多年稳定。这支持“斑点身份证”的产品叙事，但较严谨的说法是“研究样本支持个体特异且多年稳定”，而不是无法证伪的“全世界任何两条都绝不会相同”。[Meenakshisundaram et al. 2021](https://doi.org/10.3354/meps13729)

### 体型、生长与寿命

鲸鲨是现生最大的鱼类。历史记录中体长数字误差很大；跨类群最大体型综述把一条印度渔业记录的 **18.8 米**个体视为鲸鲨最可靠的已知最大体长之一，同时明确提醒许多更大的传闻缺少可复核测量。因此 18.8 米适合做“可靠已知极值”，不适合作为常见成体上限。[McClain et al. 2015](https://doi.org/10.7717/peerj.715)

宁格鲁礁的十年照片测量研究显示明显的性别差异：研究中的雄性渐近平均体长模型约为 8.45 米；雌性模型约为 14.55 米，但雌性样本只有 6 条且置信区间很宽。沿岸聚集地常由未成熟雄性占多数，所以“现场常见 5.5—10 米”不能直接命名为“常见成体范围”，也不能代表成年雌性。[Meekan et al. 2020](https://doi.org/10.3389/fmars.2020.575683) [AIMS—Biggest fish in the sea are girls](https://www.aims.gov.au/information-centre/news-and-stories/biggest-fish-sea-are-girls)

AIMS 的物种概览给出“可达约 18 米、34 吨，可能活到 100 年”的机构级概述；其中体重和寿命应作为数量级估计，而不是直接测得的普通成体区间。[AIMS—Whale sharks](https://www.aims.gov.au/research-topics/marine-life/whale-sharks) 利用核试验放射性碳峰校准椎体生长带的研究验证了生长带按年形成，样本中最老个体为 **50 岁**；论文同时明确指出真实最大寿命仍未知。现有 `lifespanYears: [70, 100]` 会把推测值伪装成观测范围，建议删除，用“已验证至少 50 岁；可能更长但未知”的展示统计取代。[Ong et al. 2020](https://doi.org/10.3389/fmars.2020.00188)

### 全球分布、迁游与深潜

鲸鲨环热带及暖温带海域分布，常用概括是通常位于约 **30°N—35°S**，同时利用近岸、陆架和远洋水域。这个纬度只是主要分布带，不是绝对边界；仓库现有“南北纬 30 度之间”既抹平南北不对称，也容易被理解为硬边界。[澳大利亚 DCCEEW—CITES identification manual: Whale Shark](https://www.dcceew.gov.au/environment/marine/publications/cites-identification-manual-whale-shark-rhincodon-typus-smith-1829-taxonomy)

分布可概括为印度—太平洋和热带/暖温带大西洋两大区域。IUCN 2025 评估推断全球个体约 75% 位于印度—太平洋、约 25% 位于大西洋，但这不是同步普查的精确比例。澳大利亚、菲律宾、墨西哥和马尔代夫都是重要范围国，却远非完整国家清单；产品若继续使用 `countries`，应明确它只是“代表性聚集地/范围国”，或扩充后仍在 `range` 中注明并非穷举。[IUCN 2025 assessment](https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T19488A126673248.en)

鲸鲨既有跨洋移动能力，也会在某些觅食地重复出现。巴拿马标记的一条成年雌性在 841 天内沿轨迹移动约 **20,142 千米**，穿越太平洋到达马里亚纳海沟附近；这是说明潜在连通性的单个极端案例，不能写成每条鲸鲨固定迁徙 20,000 千米。[Guzmán et al. 2018](https://doi.org/10.1186/s41200-018-0143-4) 墨西哥湾和加勒比海的追踪也记录了跨越赤道、至少 7,213 千米的个体移动，说明国家级保护需要与跨境协作配套。[Hueter et al. 2013](https://pubmed.ncbi.nlm.nih.gov/23991000/)

2015 年研究曾直接记录一条雄性到达 **1,928 米**。[Tyminski et al. 2015](https://doi.org/10.1371/journal.pone.0142156) 2026 年的新纪录来自珊瑚海一条约 7 米的幼年雄性及一枚定制校准、额定 2,500 米的鳍载标签：作者根据标签量程、压力/温度与海底地形约束，把最深事件推断为 **1,978—2,527 米**，即保守下界也比旧纪录深约 50 米。这个区间不是一个由常规深度通道直接输出的精确点值，上界也略超标签额定量程；适合写“最新单个个体推断深度至少 1,978 米，可能达约 2,527 米”，不适合把 `2,527` 当无误差的 `maxDiveDepthM`。[Miller et al. 2026](https://doi.org/10.3390/hydrobiology5020010)

### 生境

鲸鲨不是单纯“珊瑚礁鱼”，也不是只生活在表层的远洋鱼。适合产品的生境拆分是：

1. **沿岸和大陆架高生产力水域**：上升流、礁缘、海湾、鱼类或珊瑚产卵带等季节性食物脉冲可形成可预测聚集；这是人最常观察和监测它们的生境。[澳大利亚 DCCEEW identification manual](https://www.dcceew.gov.au/environment/marine/publications/cites-identification-manual-whale-shark-rhincodon-typus-smith-1829-taxonomy) [Robinson et al. 2013](https://doi.org/10.1371/journal.pone.0058255)
2. **远洋表层与迁移通道**：离开聚集地后可跨越洋盆，表层活动与温暖水团、洋流和食物分布有关。[Guzmán et al. 2018](https://doi.org/10.1186/s41200-018-0143-4)
3. **中深层至深海的垂直活动空间**：它们会短时进入中层和深层水域，但最新 1,978—2,527 米推断区间来自单个个体的一次标记事件，不能被描述为主要常驻生境。[Miller et al. 2026](https://doi.org/10.3390/hydrobiology5020010)

### 滤食机制与食物

鲸鲨的滤食不只是“主动吸水”。它既可张口向前游动进行冲压滤食，也可通过口咽泵吸在低速或近乎静止时吸入猎物。解剖研究测得滤器网孔平均约 1.2 毫米，并支持交叉流过滤：水流大体平行掠过滤垫，颗粒向食道集中，而不是像筛子一样简单堵在滤面上。[Motta et al. 2010](https://doi.org/10.1016/j.zool.2009.12.001)

猎物随地点和季节变化，包括桡足类等浮游动物、磷虾和其他小型甲壳类、鱼卵、鱼类幼体及小型群游鱼。卡塔尔聚集研究把金枪鱼类产卵与鲸鲨出现联系起来，说明鱼卵食物脉冲可驱动季节聚集。[Robinson et al. 2013](https://doi.org/10.1371/journal.pone.0058255) 宁格鲁礁的脂肪酸和稳定同位素研究还显示鲸鲨同化了马尾藻等植物来源物质；AIMS 因而把它称为世界最大杂食动物。适合把 `types` 写成 `['filter-feeder', 'omnivore']`，但正文应说明“杂食”来自对实际同化物的研究，不表示所有海域都有相同食谱。[Marcus et al. 2022](https://doi.org/10.1002/ecy.3818) [AIMS—World's largest omnivore is a fish](https://www.aims.gov.au/information-centre/news-and-stories/worlds-largest-omnivore-fish)

论文对特定体长个体的每小时过滤水量是依模型和行为状态得出的现场估算，不宜成为无背景的全物种 `metric`。[Motta et al. 2010](https://doi.org/10.1016/j.zool.2009.12.001)

### 行为、聚集与照片监测

鲸鲨通常单独活动，但会在季节性高密度食物出现时形成短期聚集。许多著名沿岸聚集地由 4—8 米幼年雄性占多数，这既不代表物种全年结群，也不代表全球性别与年龄结构。聚集地可见个体的照片重访适合监测到访、停留和连通性，却不能直接换算成全球总数。[IUCN 2025 assessment](https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T19488A126673248.en) [Meenakshisundaram et al. 2021](https://doi.org/10.3354/meps13729)

产品的 `activity` 建议同时表达“跨区域迁游”“昼夜垂直移动与深潜”“季节性摄食聚集”“局地重访”，避免只用三个词让读者误以为所有个体遵循同一固定路线。

### 繁殖与早期发育

鲸鲨是卵黄依赖的无胎盘胎生鲨鱼：胚胎在母体内的卵壳中发育并孵出，幼体随后出生。1995 年在台湾取得的一条 10.6 米怀孕雌性体内有 **304 个**处于不同发育阶段的胚胎，这是鲸鲨繁殖研究最重要、但也极度有限的单一标本证据。1996 年原始描述在标题中取整为“300”，2010 年胚胎亲子鉴定论文明确报告 304；产品若用精确数字，应引用后者。[Joung et al. 1996](https://doi.org/10.1007/BF00004997) [Schmidt et al. 2010](https://doi.org/10.3354/esr00300)

台湾海洋主管机关综述的出生体长约 **46—64 厘米**，可用于有来源限定的事实卡。[台湾海洋保育署—鲸鲨](https://www.oca.gov.tw/ch/home.jsp?dataserno=202103170014&id=289&mcustomize=ocamaritime_view.jsp&parentpath=0%2C5) 最新 IUCN 评估汇总的雄性 50% 成熟体长因地区而异，约为 6.8—9.2 米，雄性成熟年龄估计约 25 年；雌性约 9—10 米成熟并可能更晚。由于雌性资料稀少，人口模型分别采用约 30 岁和较保守的 40 岁作为首次繁殖情景，并据此估算 40 年世代长度。这些是模型输入和性别/地区性估计，不适合压成一个“物种成熟年龄”。妊娠期、交配频率、产仔周期和关键产仔场仍缺少稳健数据。[IUCN 2025 assessment](https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T19488A126673248.en) [Meekan et al. 2020](https://doi.org/10.3389/fmars.2020.575683)

### 生态作用

有直接证据支持的角色是：鲸鲨是一种高度移动的大型滤食者，会追随局地季节性食物脉冲，并在沿岸、陆架与远洋之间移动。由此可以谨慎推断它把多个海洋生境和食物网过程连接起来；但尚没有足够的物种尺度量化证据，证明它“控制全球浮游生物数量”、必然是“关键种”或具有固定强度的营养盐工程作用。产品叙事应把后半部分标成生态推论，而非已测定事实。[Motta et al. 2010](https://doi.org/10.1016/j.zool.2009.12.001) [Guzmán et al. 2018](https://doi.org/10.1186/s41200-018-0143-4) [Marcus et al. 2022](https://doi.org/10.1002/ecy.3818)

### IUCN 状态与种群趋势

IUCN 对鲸鲨的最新全球评估为 **濒危 Endangered（EN）**、标准 **A2bd**、趋势 **decreasing**，评估日期为 **2025-03-31**，发表于 Red List 2025-2。标准中的 `A2` 对应过去三个世代的减少，`b`、`d` 分别指适合该物种的丰度指数和实际或潜在开发水平。2016 版的 `A2bd+4bd` 已过期：新评估保留 EN，却移除了未来重叠时间窗 `A4`，并把世代长度重新估为约 40 年。`assessedYear` 应更新为 2025，而资料访问日仍单独记录为 2026-08-16。[IUCN 2025 assessment](https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T19488A126673248.en) [IUCN Categories and Criteria v3.1](https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf)

新评估推断过去三个世代、即约 **120 年**中，印度—太平洋种群下降超过 65%，大西洋下降超过 30%，合并后的全球下降至少约 60%；CITES CoP20 的 IUCN/TRAFFIC 分析把全球减少落在 50—79% 类别区间，并说明高端估计依据较弱。这些数值综合聚集地计数、渔业捕获率、模型和栖息地资料，并不是一次全球同步点数；沿岸监测又显著偏向幼年雄性。因此可以保留“下降”，但不应给出貌似精确的全球现存总数或 `estimatedMatureIndividuals`。[IUCN 2025 assessment](https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T19488A126673248.en) [IUCN/TRAFFIC CoP20 analysis](https://www.traffic.org/site/assets/files/28130/iucn_traffic_cop20_summary_analyses_complete.pdf)

### 威胁与证据强度

1. **定向捕捞与兼捕**：历史和仍存在的捕捞会直接移除个体；围网、刺网及其他大型渔具也可能兼捕鲸鲨。鲸鲨生长慢、成熟晚，恢复能力有限。这仍是 IUCN 2025 评估的核心威胁。[IUCN 2025 assessment](https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T19488A126673248.en)
2. **大型船舶碰撞**：卫星追踪显示鲸鲨的水平活动空间有 92%、垂直活动空间近一半与持续性大型船舶交通重叠；近三分之一热点与最高碰撞风险区重叠。论文据失联与重叠模式推断存在未被记录的致死碰撞，不能把这些百分比误写成“92% 个体已被撞”。[Womersley et al. 2022](https://doi.org/10.1073/pnas.2117440119)
3. **无序旅游和小型船只接近**：过近、过快或密集的船只与游泳者可能引发回避、干扰取食并增加螺旋桨风险；问题是缺乏管理的互动，不是所有观鲨旅游本身。西澳以许可、速度、船距和游泳距离规则控制风险，说明这是可管理压力。[Western Australia DBCA—Whale shark management](https://www.dbca.wa.gov.au/wildlife-and-ecosystems/marine/whale-shark-management-western-australia)
4. **塑料污染**：菲律宾奥斯洛布的粪便样本直接检出微塑料，证明至少在该地点会摄入；研究没有证明对全球种群或个体健康造成何种幅度的后果。建议保留但写成“微塑料摄入与健康效应不明”，排序低于捕捞和船撞。[Yong et al. 2021](https://doi.org/10.1186/s43591-021-00017-9)
5. **气候变化与食物脉冲重组**：升温可能改变适生水域、猎物和船舶风险的空间重叠；这是重要的前瞻风险，但还不能替代捕捞和船撞作为已记录历史下降驱动。[Womersley et al. 2024](https://doi.org/10.1038/s41558-024-02129-5) [AIMS—Whale sharks](https://www.aims.gov.au/research-topics/marine-life/whale-sharks)

### 保护状态与行动

截至本稿访问日，鲸鲨已由 CITES 附录 II 转入 **附录 I**，修订于 **2026-03-05** 生效；附录 I 原则上禁止商业性国际贸易，其他例外用途仍受严格许可约束。任何写作若仍称其“现列附录 II”都已过时。[澳大利亚 DCCEEW—CITES CoP20 outcomes](https://consult.dcceew.gov.au/cop20-cites-2025) 这项国际贸易地位与 IUCN 的 EN 风险等级是两个不同体系，不可互相替代。

鲸鲨自 1999 年列入 CMS 附录 II，自 2017 年同时列入附录 I，并纳入《迁徙鲨鱼谅解备忘录》。CMS 页面本身仍带有旧的 CITES 附录 II 叙述，因此该页只应用来支持 CMS 年份，不应用来否定 2026 年后的 CITES 新状态。[CMS—Rhincodon typus](https://www.cms.int/species/rhincodon-typus)

保护行动应按可操作性排列：

- 执行范围国禁捕、CITES 附录 I 贸易管制，以及金枪鱼区域渔业管理组织的禁止故意围捕、留置和安全释放规则，并改善兼捕记录。[CITES CoP19 Doc. 87.2](https://cites.org/sites/default/files/documents/E-CoP19-87-02.pdf)
- 在聚集地和迁移通道识别船撞热点，实施季节性降速、改道、瞭望与撞击报告；追踪研究支持风险优先区，但具体阈值需由当地监管确定。[Womersley et al. 2022](https://doi.org/10.1073/pnas.2117440119)
- 对观鲨实行许可、船只数量/速度、船距和游泳距离规则，让旅游收益反哺长期监测。[Western Australia DBCA—Whale shark management](https://www.dbca.wa.gov.au/wildlife-and-ecosystems/marine/whale-shark-management-western-australia)
- 保护季节性摄食聚集地及其食物脉冲，并通过照片识别、卫星标记、遗传和渔业观察员资料共同监测；照片库不能替代成体雌性、繁殖区和远洋兼捕数据。[Meenakshisundaram et al. 2021](https://doi.org/10.3354/meps13729)
- 中国现行《国家重点保护野生动物名录》将鲸鲨列为国家二级保护野生动物；这一国内法律等级也不应与 IUCN 的 EN 或 CITES 附录 I 混写。[上海市绿化和市容管理局—国家重点保护野生动物名录](https://lhsr.sh.gov.cn/gjzdbhysdwml/)

## 应删除或改写的现有说法

- 保留 `scientificName` 和分类树；把过期的 `conservation('EN', 'decreasing', 2016, 'A2bd+4bd')` 更新为 `conservation('EN', 'decreasing', 2025, 'A2bd')`，来源换成 2025 IUCN 评估直链。
- 保留“豆腐鲨”“大憨鲨”，但把它们视为台湾地区有官方记录的俗名，不要暗示为全中文地区统一规范异名。
- 把“南北纬 30 度之间”改为“通常约 30°N—35°S 的热带和暖温带海域”，并说明不是绝对边界。
- 不把澳大利亚、菲律宾、墨西哥、马尔代夫四国当成完整分布国清单；若用于筛选，注明为代表性重要范围国或扩充列表。
- 把一个笼统生境拆成沿岸/陆架高生产力水域、远洋表层和垂直深水活动空间；不把深海说成日常主要生境。
- 删除 `length: 5.5—10 m, note: 常见成体`。5.5 米常是未成熟个体，沿岸样本又偏雄；可保留 18.8 米为有证据限定的可靠最大记录。
- 删除 `weight: 10—20 t` 的“常见大型个体范围”；没有同一高质量来源支持这一产品化区间。若一定展示，只写 AIMS 的“最大可达约 34 吨”并标为机构估计。
- 把“通过主动吸水和滤食”改成“兼用前游冲压滤食与口咽泵吸，滤垫形成交叉流过滤”；删除食性字段中的“对人类通常温和”。
- `diet.types` 可扩为 `['filter-feeder', 'omnivore']`，但必须说明杂食证据来自实际同化植物物质，不是说它会啃食海草。
- 把“每条鲸鲨的斑点图案都不同”改为“照片与遗传身份核验支持个体特异，且研究期内多年稳定”。
- 删除把“约 1,900 米”称为最新最深纪录的说法。2026 年单个幼年雄性的最新推断区间为 1,978—2,527 米；宜写“至少 1,978 米，可能达约 2,527 米”，并说明推断方法与单一样本。
- 删除 `lifespanYears: [70, 100]`；当前直接校准的最老样本为 50 岁，真实最大寿命未知，70—100 年仍属估计。
- 不填全球成熟个体数量；IUCN 的区域下降推断不等于现存数量普查。
- 威胁列表把捕捞/兼捕和船撞放在前面；把塑料写成“已证实摄入、健康和种群后果未知”，把旅游写成“无序互动和船只接近风险”。
- 保护行动要更新为 CITES 附录 I（2026-03-05 生效），并加入 CMS、区域渔业组织、安全释放、船舶减速/改道及规范旅游。

## 建议写入产品的字段

下列内容遵循现有 `Species` 类型。它是研究建议，不在本任务中直接改源码；图片路径、焦点与 credit 应由最终素材验收决定。

首先更新保护评估本体；这是本轮最重要的时效性修订：

```ts
conservation: conservation('EN', 'decreasing', 2025, 'A2bd'),
```

这里的 `2025` 是 2025-03-31 的 IUCN 评估年份；来源访问日和内容更新日另为 2026-08-16。

### `metrics` 与 `featuredStats`

`metrics` 是用于排序比较的标准化数值，不适合承载“推测寿命”“单一机构的最大体重估计”或一个带测量区间的单次深潜。2026 年最新深度只能安全表达为 1,978—2,527 米推断区间，而 `maxDiveDepthM` 只能存一个无误差单值；因此建议本轮 `metrics` 暂留空，而把安全数字放进有 `note` 的展示卡：

```ts
metrics: {
},

featuredStats: [
  {
    key: 'record-length',
    label: '可靠已知最大体长',
    value: '约 18.8',
    unit: '米',
    note: '历史测量中较可靠的最大纪录之一，不是常见成体体长。',
  },
  {
    key: 'validated-age',
    label: '已验证年龄',
    value: '至少 50',
    unit: '年',
    note: '放射性碳校准样本的最老年龄；真实最大寿命仍未知。',
  },
  {
    key: 'dive',
    label: '最新推断最深范围',
    value: '1,978—2,527',
    unit: '米',
    note: '来自一条约 7 米幼年雄性的定制标签与环境约束推断；下界较可靠，上界不是无误差直读，且不代表日常活动深度。',
  },
  {
    key: 'tracked-migration',
    label: '单次追踪轨迹',
    value: '约 20,142',
    unit: '千米',
    note: '一条成年雌性 841 天的跨太平洋轨迹，不是物种固定迁徙距离。',
  },
],
```

若产品必须提供体长比较，需先扩展 schema 以表达“可靠最大值”或建立明确的性别/生命阶段口径；不应继续把 `[550, 1000]` 存入 `adultLengthCm`。同理，`adultMassKg`、`lifespanYears` 和 `maxDiveDepthM` 暂不填比伪造确定值更诚实。

### `measurements`、`diet`、`activity` 与 `tags`

```ts
measurements: {
  length: {
    max: 18.8,
    unit: 'm',
    note: '历史资料中较可靠的已知最大纪录之一；常见聚集地个体多为未成熟雄性，不能据此定义统一成体范围。',
  },
  weight: {
    max: 34,
    unit: 't',
    note: 'AIMS 给出的最大数量级估计，并非常见成体体重或直接称量范围。',
  },
},
diet: {
  types: ['filter-feeder', 'omnivore'],
  foods: ['桡足类等浮游动物', '磷虾和小型甲壳类', '鱼卵与鱼类幼体', '小型群游鱼', '被同化的藻类物质'],
  description:
    '兼用张口前游的冲压滤食与口咽泵吸；水流沿滤垫形成交叉流，把小型猎物集中后吞咽。宁格鲁礁研究还检出对马尾藻等植物来源物质的同化。',
},
activity: ['跨区域与跨洋迁游', '昼夜垂直移动和偶发深潜', '季节性摄食聚集', '对部分聚集地重复到访'],
tags: ['热带与暖温带海洋', '现生最大鱼类', '滤食性杂食者', '高度迁移物种', '照片识别'],
```

### `distribution` 与 `habitats`

```ts
distribution: {
  realms: ['marine'],
  continents: ['亚洲', '非洲', '北美洲', '南美洲', '大洋洲'],
  regions: ['印度—太平洋热带与暖温带海域', '大西洋热带与暖温带海域'],
  countries: [
    '澳大利亚', '菲律宾', '印度尼西亚', '印度', '马尔代夫', '莫桑比克',
    '南非', '卡塔尔', '墨西哥', '伯利兹', '洪都拉斯', '巴拿马', '厄瓜多尔',
  ],
  range:
    '环热带及暖温带海域广布，通常约在 30°N—35°S；近岸和陆架聚集地、远洋迁移通道及深水活动层共同构成其活动空间。国家列表仅列代表性范围国与聚集地，并非穷举。',
  center: { lat: 5, lng: 110 },
},
habitats: [
  {
    name: '沿岸与陆架高生产力水域',
    realm: 'marine',
    description: '在上升流、礁缘、海湾以及鱼类或珊瑚产卵形成的季节性食物脉冲附近觅食聚集。',
    isPrimary: true,
  },
  {
    name: '远洋表层与迁移通道',
    realm: 'marine',
    description: '离开聚集地后可进入外海并跨越洋盆，活动随暖水、洋流和食物分布变化。',
  },
  {
    name: '中层与深层水域',
    realm: 'marine',
    description: '垂直移动时会短时进入中深层乃至更深水层；极端深潜不代表长期常驻。',
  },
],
```

`center: { lat: 5, lng: 110 }` 只作为世界地图的代表焦点，不是科学意义上的分布中心；保留它属于界面选择，不是生物学结论。

### `summary`、`description` 与 `storySections`

```ts
summary: '现生最大的鱼类，以斑点身份、交叉流滤食和跨洋深潜把季节性食物热点连成一张海洋地图。',
description:
  '鲸鲨是唯一现生的鲸鲨科成员。它以冲压滤食和口咽泵吸捕获浮游动物、鱼卵等食物，也会同化藻类物质；个体可跨越洋盆并潜入千米以下。沿岸常见聚集多偏向未成熟雄性，而成年雌性、交配和产仔地点仍是生活史中的巨大空白。缓慢生长、晚熟，加上捕捞、兼捕和船舶碰撞，使其全球种群仍呈下降趋势。',
storySections: [
  {
    key: 'identity',
    label: '形态与身份',
    title: '星图一样的斑点身份证',
    body: '宽扁头部、吻端大口、五对鳃裂和三条体侧隆起构成鲸鲨的轮廓。鳃后到胸鳍上方的斑点组合经照片与遗传身份核验，可用于多年重访监测。',
  },
  {
    key: 'filter-feeding',
    label: '滤食机制',
    title: '不是一张被动的筛网',
    body: '鲸鲨既能张口前游，也能用口咽泵吸入水。水流沿滤垫掠过，把浮游动物、鱼卵和小型鱼类集中后吞下；部分海域的研究还发现它会同化藻类物质。',
  },
  {
    key: 'migration',
    label: '聚集与迁游',
    title: '从季节餐桌游向大洋',
    body: '它们常独行，却会在产卵或浮游生物暴发形成的食物热点短期聚集。个体既可能重返同一聚集地，也能跨越洋盆；20,142 千米是单个雌性的追踪案例，不是固定路线。',
  },
  {
    key: 'vertical-ocean',
    label: '垂直海洋',
    title: '表层巨影也会潜入两千米以下',
    body: '标记记录显示鲸鲨会进行大幅垂直移动。2026 年一条幼年雄性的最深事件被推断在 1,978—2,527 米之间；它揭示鲸鲨利用立体海洋的能力，却不是日常深度或精确无误差点值。',
  },
  {
    key: 'life-history',
    label: '生长与繁殖',
    title: '最大的鱼，留下最大的知识空白',
    body: '雄性与雌性的生长轨迹不同；直接校准样本已达 50 岁，但真实寿命未知。科学界对繁殖的核心认识仍主要来自一条含 304 个胚胎的怀孕雌性，产仔场和周期尚未确定。',
  },
  {
    key: 'conservation',
    label: '保护',
    title: '迁徙没有国界，风险也不止一种',
    body: '捕捞和兼捕曾推动下降，水面附近活动又让鲸鲨暴露于船撞和无序观鲨。保护需要把贸易与渔业规则、聚集地管理、航运减速改道及跨境照片和标记监测连接起来。',
  },
],
```

### `keyFacts`

```ts
keyFacts: [
  '照片与遗传身份核验支持鲸鲨斑点组合具有个体特异性，并可在多年间保持稳定。',
  '鲸鲨不是鲸，而是软骨鱼；它是现生最大的鱼类，也是鲸鲨科唯一现生种。',
  '它兼用前游冲压滤食和口咽泵吸，滤垫以交叉流方式集中小型食物。',
  '2026 年一条幼年雄性的最深事件被推断在 1,978—2,527 米之间；它不是日常潜深，也不是无误差直读值。',
  '一条成年雌性的跨太平洋追踪轨迹约 20,142 千米；不同个体并不遵循统一路线。',
  '放射性碳校准确认样本中最老个体为 50 岁，真实最大寿命仍未知。',
  '1995 年取得的一条怀孕雌性体内有 304 个不同发育阶段胚胎，但关键产仔场仍未确定。',
],
```

### `threats` 与 `conservationActions`

```ts
threats: [
  '定向捕捞以及围网、刺网等渔业兼捕',
  '活动空间与航线重叠造成的大型船舶碰撞风险',
  '缺乏限速、距离和承载量管理的观鲨船只与游泳互动',
  '栖息地和食物脉冲随海洋变暖而重组',
  '已证实摄入微塑料，但健康和种群后果仍不明确',
],
conservationActions: [
  '执行范围国禁捕、CITES 附录 I 贸易管制和区域渔业组织的禁留置、安全释放规则',
  '在聚集地和迁移通道实施船舶季节性降速、改道、瞭望和撞击报告',
  '以许可、船数、速度、船距和游泳距离规范观鲨活动',
  '保护季节性摄食聚集地及其陆架—远洋连通通道',
  '结合照片识别、卫星标记、遗传与渔业观察员资料开展跨境长期监测',
  '补足成年雌性、繁殖场、远洋兼捕与塑料健康效应的数据空白',
],
```

界面若只展示前三项行动，应保持上述排序：渔业/贸易、船撞缓解、旅游管理是读者最容易理解且可直接执行的现场措施；长期研究仍应保留在完整列表中。

### `source` / `sources`

当前 `sourcesFor('Rhincodon typus')` 只生成 IUCN 和 GBIF 搜索页，无法让读者追溯具体结论。建议新增独立来源常量；所有 `accessedAt` 都是访问日，不是论文或评估年份。

```ts
const WHALE_SHARK_SOURCE_DATE = '2026-08-16' as const;

const WHALE_SHARK_SOURCES = [
  {
    title: 'IUCN Red List — Rhincodon typus, 2025 assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T19488A126673248.en',
    kind: 'conservation',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Rhincodon typus, AphiaID 105847',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=105847',
    kind: 'taxonomy',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'ITIS — Rhincodon typus, TSN 159857',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=159857',
    kind: 'taxonomy',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'AIMS — Whale sharks',
    url: 'https://www.aims.gov.au/research-topics/marine-life/whale-sharks',
    kind: 'general',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Shark identification: Whale Shark',
    url: 'https://www.fisheries.noaa.gov/new-england-mid-atlantic/atlantic-highly-migratory-species/shark-identification-cooperative-shark-0',
    kind: 'general',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'McClain et al. 2015 — Sizing ocean giants',
    url: 'https://doi.org/10.7717/peerj.715',
    kind: 'general',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'Meekan et al. 2020 — Sex-specific growth dynamics',
    url: 'https://doi.org/10.3389/fmars.2020.575683',
    kind: 'ecology',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'Ong et al. 2020 — Annual vertebral bands validated with bomb radiocarbon',
    url: 'https://doi.org/10.3389/fmars.2020.00188',
    kind: 'ecology',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'Motta et al. 2010 — Feeding anatomy and filtration mechanics',
    url: 'https://doi.org/10.1016/j.zool.2009.12.001',
    kind: 'ecology',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'Marcus et al. 2022 — Diet and plant-material assimilation',
    url: 'https://doi.org/10.1002/ecy.3818',
    kind: 'ecology',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'Tyminski et al. 2015 — Vertical movements and deep-diving behavior',
    url: 'https://doi.org/10.1371/journal.pone.0142156',
    kind: 'ecology',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'Miller et al. 2026 — Extension of known depth range',
    url: 'https://doi.org/10.3390/hydrobiology5020010',
    kind: 'ecology',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'Guzmán et al. 2018 — Trans-Pacific migration',
    url: 'https://doi.org/10.1186/s41200-018-0143-4',
    kind: 'distribution',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'Joung et al. 1996 — Reproduction in a pregnant whale shark',
    url: 'https://doi.org/10.1007/BF00004997',
    kind: 'ecology',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'Schmidt et al. 2010 — Paternity analysis in a litter of 304 embryos',
    url: 'https://doi.org/10.3354/esr00300',
    kind: 'ecology',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'Meenakshisundaram et al. 2021 — Genetic validation of photo-identification',
    url: 'https://doi.org/10.3354/meps13729',
    kind: 'ecology',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'Womersley et al. 2022 — Global collision risk with large vessels',
    url: 'https://doi.org/10.1073/pnas.2117440119',
    kind: 'conservation',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'Western Australia DBCA — Whale shark management',
    url: 'https://www.dbca.wa.gov.au/wildlife-and-ecosystems/marine/whale-shark-management-western-australia',
    kind: 'conservation',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'DCCEEW — CITES CoP20 outcomes',
    url: 'https://consult.dcceew.gov.au/cop20-cites-2025',
    kind: 'conservation',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'CITES CoP20 Proposal 31 — Transfer of Rhincodon typus to Appendix I',
    url: 'https://cites.org/sites/default/files/documents/COP/20/prop/E-CoP20-Prop-31.pdf',
    kind: 'conservation',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
  {
    title: 'CMS — Rhincodon typus',
    url: 'https://www.cms.int/species/rhincodon-typus',
    kind: 'conservation',
    accessedAt: WHALE_SHARK_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 现有 `whale-shark` 条目逐项核对表

“保留”表示事实字段可原样保留；“改写”表示核心方向正确但口径不足；“删除/替换”表示现值不适合继续作为结构化事实。

| 现有字段/项目 | 结论 | 建议修订与依据 |
|---|---|---|
| `id: species-rhincodon-typus` | 保留 | 稳定内部标识，与接受学名对应。 |
| `slug: whale-shark` | 保留 | 英文通名 slug 正确。 |
| `names.zh: 鲸鲨` | 保留 | 官方中文物种页面使用该名。 |
| `names.en: Whale Shark` | 保留 | WoRMS、ITIS、NOAA 均使用。 |
| `aliases: 豆腐鲨` | 保留并注明地域 | 台湾海洋保育署有记录。 |
| `aliases: 大憨鲨` | 保留并注明地域 | 台湾海洋保育署有记录。 |
| `scientificName` | 保留 | 接受名为 *Rhincodon typus* Smith, 1828。 |
| `taxonomy.phylum: Chordata` | 保留 | WoRMS/ITIS 一致。 |
| `taxonomy.class: Chondrichthyes` | 保留 | WoRMS/ITIS 一致。 |
| `taxonomy.order: Orectolobiformes` | 保留 | WoRMS/ITIS 一致。 |
| `taxonomy.family: Rhincodontidae` | 保留 | WoRMS/ITIS 一致。 |
| `taxonomy.genus: Rhincodon` | 保留 | WoRMS/ITIS 一致。 |
| `conservation.system/code` | 保留 | 最新 IUCN Red List 仍为 EN。 |
| `conservation.trend` | 保留 | 2025 IUCN 仍标示 decreasing。 |
| `conservation.assessedYear: 2016` | 更新 | 改为 2025；实际评估日期为 2025-03-31，不能写访问日。 |
| `conservation.criteria: A2bd+4bd` | 更新 | 最新 2025 评估为 `A2bd`，旧 `A4` 已移除。 |
| `conservation.assessor` | 保留 helper 输出 | `conservation()` 固定为 IUCN Red List，来源换成 2025 评估直链。 |
| `distribution.realms: marine` | 保留 | 海洋物种。 |
| `distribution.continents` | 基本保留 | 五洲沿岸海域口径合理；它描述邻近大陆，不是陆生分布。 |
| `regions` 两项 | 改写 | 补“热带与暖温带”，避免只把大西洋限定为热带却让印度—太平洋无温度口径。 |
| `countries` 四国 | 扩充或标为代表 | 四国属实但严重不完整；schema 没有“代表性”标记，必须在 `range` 说明非穷举。 |
| `range: 南北纬 30 度` | 改写 | 改为通常约 30°N—35°S，且不是硬边界。 |
| `center: 5, 110` | 可保留 | 仅是地图焦点，不是科学分布中心；文档和 UI 类型已经这样定义。 |
| 唯一 `habitat` 名称 | 拆分 | “热带远洋与陆架”把不同使用方式混在一起；建议三类生境。 |
| 唯一 `habitat.description` | 改写 | 上升流、珊瑚/鱼类产卵食物脉冲正确，但还缺外海迁移和垂直活动空间。 |
| `habitat.isPrimary: true` | 保留给沿岸/陆架项 | 这是最易观察的主要觅食聚集生境；不应给极端深水项标 primary。 |
| `length.min: 5.5` | 删除 | 不能把沿岸常见未成熟个体下限当成成体下限。 |
| `length.max: 10` | 替换 | 若 measurement 表达记录极值，改 18.8；若表达成体范围，则当前 schema 不足以呈现性别差异。 |
| `length.note` | 改写 | 删除“常见成体”，给 18.8 米加“可靠历史极值之一”限制。 |
| `weight: 10—20 t` | 删除/替换 | 缺少稳健的普通大型个体区间；可仅保留 AIMS 的 34 吨最大估计并注明性质。 |
| `diet.types: filter-feeder` | 保留并扩充 | 加 `omnivore`，正文说明植物物质同化证据。 |
| `foods: 浮游动物` | 保留并具体化 | 可列桡足类等。 |
| `foods: 鱼卵` | 保留 | 多个聚集地有直接证据。 |
| `foods: 磷虾` | 保留并泛化 | 可写磷虾和其他小型甲壳类。 |
| `foods: 小型鱼类` | 保留并细化 | 加鱼类幼体/小型群游鱼。 |
| `diet.description` | 重写 | 同时写冲压滤食、口咽泵吸与交叉流；“对人类温和”移出食性。 |
| `activity: 远距离迁徙` | 保留并限定 | 加“个体路线差异大”；跨洋案例不能当统一迁徙制度。 |
| `activity: 垂直潜水` | 保留并具体化 | 改为昼夜垂直移动与偶发深潜。 |
| `activity: 季节性聚集` | 保留并具体化 | 加食物脉冲与常见样本偏幼年雄性。 |
| `tags` 四项 | 保留并扩充 | “最大鱼类、滤食者、迁徙物种”正确；“热带海洋”扩成热带与暖温带，加照片识别/杂食。 |
| `summary` | 改写 | “现生最大鱼类”正确；“斑点如指纹”改为经样本验证的个体识别表述，并纳入滤食/迁游主线。 |
| `description` | 改写 | 宽口、浮游食物、跨洋、千米深潜、慢生晚熟均方向正确；补性别/繁殖空白和证据限定。 |
| `storySections` 缺失 | 新增 | 建议 6 节：身份、滤食、聚集迁游、垂直海洋、生活史、保护。 |
| `keyFact` 斑点不同 | 改写 | 用照片—遗传 154 组身份一致和多年稳定来表述，不作无限总体断言。 |
| `keyFact` 不是鲸而是鲨鱼 | 保留 | 科学正确；可补“软骨鱼、鲸鲨科唯一现生种”。 |
| `keyFact` 约 1,900 m | 改写 | 旧 1,928 米已被更新；写单条幼年雄性 1,978—2,527 米推断区间及测量限制。 |
| `threat` 定向和兼捕渔业 | 保留并细化 | 仍是核心威胁，列明围网/刺网等场景和安全释放。 |
| `threat` 船舶撞击 | 保留并提升证据 | 加活动空间—航线重叠和“隐蔽死亡”性质，不把重叠率写成死亡率。 |
| `threat` 塑料污染 | 改写并降级 | 已证实局地摄入；健康与种群效应未知。 |
| `threat` 无序旅游干扰 | 改写 | 改成缺乏距离、速度和承载量管理的互动；规范旅游不是威胁本身。 |
| `conservationAction` 国际贸易管制 | 更新 | 明确 CITES 附录 I 自 2026-03-05 生效。 |
| `conservationAction` 聚集地保护与观鲨规范 | 保留并细化 | 写许可、船数/速度、船距、游泳距离及食物热点保护。 |
| `conservationAction` 卫星标记和照片识别 | 保留并扩充 | 加遗传、观察员资料与跨境共享，明确照片库的样本偏差。 |
| `metrics.adultLengthCm: [550,1000]` | 删除 | 生命阶段和性别口径错误；不能用于成体比较。 |
| `metrics.adultMassKg: [10000,20000]` | 删除 | 无稳健的普通成体范围来源。 |
| `metrics.lifespanYears: [70,100]` | 删除 | 直接验证到 50 岁；真实最大寿命未知。 |
| `metrics.maxDiveDepthM: 1900` | 删除 | 最新证据是 1,978—2,527 米推断区间，单值 schema 无法安全表达其不确定性。 |
| `featuredStat` 常见成体 5.5—10 m | 删除 | 近岸样本偏幼年雄性，标签不成立。 |
| `featuredStat` 最大约 18.8 m | 保留并加注释 | 是较可靠历史最大纪录之一，不是普通体长。 |
| `featuredStat` 潜深约 1,900 m | 更新并加注释 | 改为 1,978—2,527 米推断区间；单个约 7 米幼年雄性，非日常潜深或精确直读。 |
| `media.alt` | 素材验收后改写 | 当前无本地 `image` 时属生成图替代文案；新增素材后 alt 应描述实际画面，不塞入未见元素。 |
| `media.focalPoint` | 素材验收后决定 | 这是构图元数据，不是研究事实；不能沿用到构图不同的新图。 |
| `sourcesFor(...)` | 替换 | 改为具名直链 `WHALE_SHARK_SOURCES`，访问日统一 2026-08-16。 |
| `featured: true` | 保留 | 编辑选择，与科学证据无冲突。 |
| `publishedAt: CONTENT_DATE` | 保留 | 保留首次发布日。 |
| `updatedAt: CONTENT_DATE` | 更新 | 改为本次内容更新日 2026-08-16。 |

## 来源说明与证据边界

### 分类与名称

- [WoRMS AphiaID 105847](https://www.marinespecies.org/aphia.php?p=taxdetails&id=105847)：接受名、作者年份、海洋属性与分类层级；访问于 2026-08-16。
- [ITIS TSN 159857](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=159857)：有效学名、英文名与分类层级；访问于 2026-08-16。
- [台湾海洋保育署—鲸鲨](https://www.oca.gov.tw/ch/home.jsp?dataserno=202103170014&id=289&mcustomize=ocamaritime_view.jsp&parentpath=0%2C5)：中文名、地方俗名、形态及出生体长综述；访问于 2026-08-16。

### 风险评估与法律状态

- [Pierce et al., IUCN 2025 assessment](https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T19488A126673248.en)：EN、A2bd、decreasing、40 年世代长度及区域/全球下降推断；**评估日期 2025-03-31**，Red List 2025-2 发布，访问于 2026-08-16。
- [IUCN/TRAFFIC CoP20 analysis](https://www.traffic.org/site/assets/files/28130/iucn_traffic_cop20_summary_analyses_complete.pdf)：2025 重评预发布摘要、全球 50—79% 类别区间和 120 年时间窗；高端估计依据被报告为较弱，访问于 2026-08-16。
- [DCCEEW—CITES CoP20 outcomes](https://consult.dcceew.gov.au/cop20-cites-2025)：鲸鲨由附录 II 转入附录 I、修订生效日 2026-03-05；访问于 2026-08-16。
- [CITES CoP20 Proposal 31](https://cites.org/sites/default/files/documents/COP/20/prop/E-CoP20-Prop-31.pdf)：转附录 I 提案的证据和范围国共同提案信息；最终是否通过及生效日以上述 CoP20 结果页为准，访问于 2026-08-16。
- [CMS—Rhincodon typus](https://www.cms.int/species/rhincodon-typus)：CMS 附录 II（1999）及附录 I（2017）；访问于 2026-08-16。页面的 CITES 文字未同步 2026 变化，不用于当前 CITES 状态。
- [CITES CoP19 Doc. 87.2](https://cites.org/sites/default/files/documents/E-CoP19-87-02.pdf)：主要金枪鱼区域渔业组织的禁止留置/故意围捕措施汇总；文件早于 CoP20，只用于渔业组织措施背景，访问于 2026-08-16。

### 形态、体型与生活史

- [NOAA Fisheries—Shark Identification](https://www.fisheries.noaa.gov/new-england-mid-atlantic/atlantic-highly-migratory-species/shark-identification-cooperative-shark-0)：可见形态识别；访问于 2026-08-16。
- [McClain et al. 2015](https://doi.org/10.7717/peerj.715)：18.8 米可靠最大纪录及历史测量不确定性；访问于 2026-08-16。
- [Meekan et al. 2020](https://doi.org/10.3389/fmars.2020.575683)：宁格鲁个体的性别差异生长模型；雌性样本少，不能当全球普通成体范围；访问于 2026-08-16。
- [Ong et al. 2020](https://doi.org/10.3389/fmars.2020.00188)：核试验放射性碳校准年生长带、最老样本 50 岁；不支持把 70—100 年写成实测范围；访问于 2026-08-16。
- [Joung et al. 1996](https://doi.org/10.1007/BF00004997)：单条怀孕雌性、标题取整的“300”个胚胎及胎生方式；单一样本不能建立完整繁殖周期；访问于 2026-08-16。
- [Schmidt et al. 2010](https://doi.org/10.3354/esr00300)：对同一胎胚胎的亲子分析，明确给出 10.6 米雌性和 304 个胚胎；访问于 2026-08-16。

### 分布、迁移、潜水与食性

- [DCCEEW identification manual](https://www.dcceew.gov.au/environment/marine/publications/cites-identification-manual-whale-shark-rhincodon-typus-smith-1829-taxonomy)：主要纬度带、沿岸—远洋生境和季节聚集；访问于 2026-08-16。
- [Guzmán et al. 2018](https://doi.org/10.1186/s41200-018-0143-4)：20,142 千米、841 天的单条雌性跨太平洋追踪；访问于 2026-08-16。
- [Tyminski et al. 2015](https://doi.org/10.1371/journal.pone.0142156)：此前 1,928 米单个极端深潜及垂直活动；它已不是最新最深纪录，访问于 2026-08-16。
- [Miller et al. 2026](https://doi.org/10.3390/hydrobiology5020010)：单条约 7 米幼年雄性、定制校准标签推断的 1,978—2,527 米新范围；区间受标签量程和环境约束，访问于 2026-08-16。
- [Motta et al. 2010](https://doi.org/10.1016/j.zool.2009.12.001)：滤垫解剖、平均网孔、冲压/吸入式摄食和交叉流过滤；访问于 2026-08-16。
- [Robinson et al. 2013](https://doi.org/10.1371/journal.pone.0058255)：卡塔尔鱼类产卵食物脉冲与聚集；访问于 2026-08-16。
- [Marcus et al. 2022](https://doi.org/10.1002/ecy.3818)：宁格鲁鲸鲨同化植物来源物质的生化证据；地点特异，不应外推成固定食谱；访问于 2026-08-16。
- [Meenakshisundaram et al. 2021](https://doi.org/10.3354/meps13729)：照片身份与遗传身份核验、斑纹多年稳定；访问于 2026-08-16。

### 威胁与管理

- [Womersley et al. 2022](https://doi.org/10.1073/pnas.2117440119)：全球追踪活动空间与大型船舶交通重叠及隐蔽船撞风险；重叠率不是死亡率；访问于 2026-08-16。
- [Yong et al. 2021](https://doi.org/10.1186/s43591-021-00017-9)：奥斯洛布局地粪便中的微塑料摄入证据；不能据此量化全球健康效应；访问于 2026-08-16。
- [Western Australia DBCA—Whale shark management](https://www.dbca.wa.gov.au/wildlife-and-ecosystems/marine/whale-shark-management-western-australia)：许可、速度和互动距离等管理实例；访问于 2026-08-16。
- [Womersley et al. 2024](https://doi.org/10.1038/s41558-024-02129-5)：气候驱动分布重组及与航运风险叠加的模型预测；不是已经观察到的统一全球死亡率；访问于 2026-08-16。

## 仍需保留的不确定性

- 最新全球 IUCN 评估日期为 2025-03-31、发布于 Red List 2025-2；`updatedAt: 2026-08-16` 仍只是产品内容更新时间，不应写成评估年份。
- 没有可靠的全球现存总数或成熟个体区间；聚集地照片目录严重偏向可接近海域、幼体和雄性。
- 18.8 米是较可靠历史最大纪录，不是普通成体上限；雌性生长模型样本很少。
- 50 岁是放射性碳方法直接校准到的样本年龄，不是物种最大寿命；约 100 年仍是模型或机构估计。
- 1,978—2,527 米是单条幼年雄性的推断深度区间，20,142 千米是单条成年雌性的追踪轨迹；两者都不能描述成常规潜深或固定迁徙距离。
- 鲸鲨繁殖知识主要依赖一条怀孕雌性；妊娠期、产仔频率、交配地和产仔场仍不清楚。
- 宁格鲁的植物物质同化证据支持杂食性，但不同海域食谱及主动摄食植物的程度尚未统一量化。
- 微塑料已在一个旅游聚集地的粪便中检出，但剂量—健康—种群影响链尚未建立。
- 气候变化可能重组适生水域与船撞暴露；现阶段应标为预测性风险，不应取代捕捞和船撞的直接证据。
- CITES 地位在 2026 年发生变化，部分官方旧页面尚未同步；产品必须同时记录来源访问日和生效日，避免回退为附录 II。
