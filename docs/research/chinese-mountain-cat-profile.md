# 荒漠猫（*Felis bieti*）完整档案研究

- 检索与核验日期：2026-08-15
- 使用范围：`src/data/species.ts` 的荒漠猫新条目及详情页文案
- 证据标准：IUCN 红色名录及其猫科专家组、美国哺乳动物学会 Mammal Diversity Database、中国政府名录、CITES 官方文件与原始同行评审论文。二手百科、无法区分旧记录误认的分布说法，以及没有直接调查依据的精确种群数字不进入推荐字段。
- 敏感信息处理：本文只保留青藏高原东部、省级行政区和大尺度生境信息，不记录繁殖洞、近期个体、救护放归或相机点位的精确坐标；地图 `center` 仅作粗粒度视图焦点。

## 结论摘要

### 分类、名称与“熊猫近亲”边界

仓库当前应采用接受名 ***Felis bieti***，分类为动物界—脊索动物门—哺乳纲—食肉目—猫科—猫属。美国哺乳动物学会 Mammal Diversity Database（MDD v2.5）与 IUCN/SSC 猫科专家组目前都把它作为独立种；猫科专家组按现有分类将其视为不分现生亚种的单型种。[MDD](https://www.mammaldiversity.org/taxon/1005984/) [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat) [IUCN/SSC Small Cat Report](https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf)

分类并非毫无争议。2017 年 IUCN 猫科分类工作组基于形态、分子和生物地理证据保留独立种；2021 年全基因组研究则发现荒漠猫位于野猫类群内部，支持将其写作野猫亚种 ***Felis silvestris bieti***。2022 年的综合评述指出，也可通过把各条长期分化的野猫谱系都提升为种来保留 `Felis bieti`，但真正解决争议仍需覆盖所有野猫类群的全基因组比较。当前 MDD、IUCN 评估和中国法定名录都使用 `Felis bieti`，因此产品主字段不宜改成亚种名；可在故事中用一句话说明争议。[Kitchener et al. 2017](https://repository.si.edu/items/3d130d51-a9e7-47b0-b24a-422fbebce472) [Yu et al. 2021](https://doi.org/10.1126/sciadv.abg0221) [Liu et al. 2022](https://doi.org/10.17520/biods.2022396)

中国官方《国家重点保护野生动物名录》使用标准中文名 **“荒漠猫”**，英文首选名为 **Chinese Mountain Cat**。同行评审中文综述列出“中国山猫、草猫、草猞猁”三个中文别名；MDD 列出 Chinese Desert Cat、Pale Desert Cat 两个英文旧称，2017 年猫科分类报告还使用 Chinese Steppe Cat。结构化 `aliases` 面向中文界面时可采用 `['中国山猫', '草猫', '草猞猁']`；“荒漠猫”虽是法定名称，却容易误导生境理解，正文应直接解释它并不是典型沙漠猫。[国家林草局、农业农村部 2021 年第 3 号公告](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml) [Liu et al. 2022](https://doi.org/10.17520/biods.2022396) [MDD](https://www.mammaldiversity.org/taxon/1005984/) [Kitchener et al. 2017](https://repository.si.edu/items/3d130d51-a9e7-47b0-b24a-422fbebce472)

荒漠猫与大熊猫、小熊猫**不是生物分类意义上的近亲**。三者都属于食肉目，但荒漠猫属于猫型亚目；大熊猫和小熊猫都属于犬型亚目，分别在熊科和小熊猫科。推荐叙事只能写“同属食肉目的远亲”或“隔着猫型、犬型两条古老分支”，不能写“猫科的熊猫近亲”。[荒漠猫 MDD](https://www.mammaldiversity.org/taxon/1005984/) [大熊猫 MDD](https://www.mammaldiversity.org/taxon/1005930/) [小熊猫 MDD](https://www.mammaldiversity.org/taxon/1005802/)

### IUCN 状态、评估年份与种群数字

最新公开的全球 IUCN 状态为 **易危 Vulnerable（VU），标准 C1，种群趋势下降**。该次重新评估在 **2021 年完成**，收录并发布于 *The IUCN Red List of Threatened Species 2022-1*；IUCN/SSC 的红色名录历史表因而把版本列作 2022，而其评述正文明确写明评估工作于 2021 年完成。仓库 `assessedYear` 的注释要求记录评估年份而非发布/导入年份，因此建议使用 `conservation('VU', 'decreasing', 2021, 'C1')`，同时在来源标题中保留“2022 publication”，避免把两个年份混为一谈。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T8539A213200674.en) [IUCN/SSC Small Cat Report, pp. 126–129](https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf)

评估对 C1 的具体论证是：成熟个体保守判断为 **少于 10,000 只**，预计未来 10 年减少至少约 10%。预期下降依据包括持续栖息地损失与基础设施扩张、意外死亡、机会性猎杀，以及调查中总体罕见；分布很可能已破碎化。[IUCN/SSC Small Cat Report](https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf) [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat)

“少于 10,000”不是直接全球普查结果。评估先借用近缘野猫每 100 平方千米 1—10 只的密度，分别套用于估计分布范围的 25% 和 50%，得到总个体 **2,354—47,081**、再假设一半为成体得到成熟个体 **1,177—23,540**；随后结合记录稀疏和持续威胁，保守判定成熟个体少于 10,000。IUCN/SSC 的独立评述特别指出，这些密度、占用比例、成体比例和下降幅度都需要更多实测依据。因此：

- `featuredStats` 可以写“成熟个体：少于 10,000；IUCN 2021 评估的保守模型判断”；
- 不建议把 `[1177, 23540]` 放进 `metrics.estimatedMatureIndividuals`，它只是宽泛情景范围，且并不等于评估采用的最终阈值；
- 不得写成“全球仅剩约 10,000 只”或“现存精确数量”。[IUCN/SSC Small Cat Report](https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf)

中国层面的两个状态必须与全球 IUCN 分开：2021 年起荒漠猫是**国家一级重点保护野生动物**；《中国脊椎动物红色名录》将其评为极危（CR），这是国家尺度红色名录评估，不应覆盖全球 `conservation.code: 'VU'`。[国家林草局、农业农村部公告](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml) [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat) [Kong et al. 2022](https://doi.org/10.17520/biods.2022081)

### 分布、海拔与生境

荒漠猫是中国特有类群，现有可靠分布限于**青藏高原东部**：大尺度上包括青海东部、四川西北部、甘肃西南部，以及与青海相邻的西藏东南部一小片区域。过去来自新疆、宁夏和内蒙古的记录现被认为属于亚洲野猫、家猫，或无法核实。2004 年系统核查只确认青海东部和四川北部，2022 年 IUCN 汇总借助后续相机、社区和标本证据扩展至上述四个省级区域；应以新评估为准，同时保留“许多地点仍缺乏近期确认”的数据限制。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T8539A213200674.en) [IUCN/SSC Small Cat Report](https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf) [He et al. 2004](https://doi.org/10.1017/S0030605304000092) [Liu et al. 2022](https://doi.org/10.17520/biods.2022396)

IUCN 评估的分布范围（EOO）约 **941,620 平方千米**，但荒漠猫并不占据其中全部面积。这个面积是包络已知、推断或预计记录的范围指标，不是实际连续栖息地面积；产品可在研究注释中保留，不建议做成“领地面积”或“家园大小”的展示数字。[IUCN/SSC Small Cat Report](https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf)

当前专家物种页给出的**主要海拔为 2,500—5,000 米**；IUCN 评估综述在总体说明中使用约 **2,000—5,000 米**。最稳妥的做法是 `metrics.elevationM: [2000, 5000]` 表示评估记录范围，而详情页醒目数字写“典型 2,500—5,000 米”。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat) [IUCN/SSC Small Cat Report](https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf)

主要生境是高海拔草原、高寒草甸和高寒灌丛，也见于黄土丘陵草原、针叶林缘和局部混交林。一项小范围项圈研究还记录它使用灌丛、牧场、农田和人工恢复植被，但这属于局地结果，不能把全物种概括为“适应城市或农田”。更稳定的描述是：它需要有鼠类猎物、低矮植被与可供躲藏或育幼的洞穴/岩石结构的高原开放景观。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat) [IUCN/SSC Small Cat Report](https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf) [He et al. 2004](https://doi.org/10.1017/S0030605304000092)

“荒漠猫”是一个容易误导的名称。IUCN 评估的旧生境分类曾列入 desert or semi-desert，但猫科专家组当前物种页明确说没有真正沙漠记录，并把核心生境定位为高原草原、草甸和灌丛。文案建议写成“名字带荒漠，却不是沙海里的猫；它主要生活在寒冷、干燥的高原草地”，不要绝对写成“从不接近任何荒漠或半荒漠景观”。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat) [IUCN/SSC Small Cat Report](https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf)

### 体型、外形与寿命

IUCN/SSC 猫科专家组当前概览给出的成体协调数据为：头体长 **60—85 厘米**、尾长 **29—35 厘米**、体重 **5.5—9 千克**。这是小型猫科中较粗壮的一种；寿命仍标为**未知**，因此不要借用家猫、丛林猫或圈养传闻填入 `lifespanYears`。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat)

它体格敦实、腿相对短，冬毛偏灰，夏毛较深、呈灰褐至黄褐；额头、面颊和四肢有较明显的暗色横纹，成年个体躯干斑纹较淡。耳尖有深色毛簇，尾巴粗而蓬松，后段有 3—6 个深色环并以黑色尾尖收束。脚掌和全身的厚毛适应寒冷多风的高原环境。尾长约相当于头体长的四成，但不要把“总身长”和“头体长”混用。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat) [Liu et al. 2022](https://doi.org/10.17520/biods.2022396)

原始繁殖洞研究与 2022 年综述将淡蓝色虹膜描述为荒漠猫极有辨识度、在野生猫科中独特的表型。中文必须写“淡蓝色虹膜”，不要照搬部分英文文献误写的 light blue pupils 为“蓝色瞳孔”。幼崽早期身体横纹和尾环更清晰，成长后躯干斑纹变淡；尾部前三道深色环从约四月龄起较稳定，可辅助相机资料中的个体识别。[Han et al. 2020](https://doi.org/10.24272/j.issn.2095-8137.2020.039) [Liu et al. 2022](https://doi.org/10.17520/biods.2022396)

### 活动、独居与洞穴利用

荒漠猫通常独居，繁殖期和母幼家庭例外。早期资料把它概括为夜行或晨昏活动；2020 年 6 月至 2021 年 12 月对 10 只项圈个体、25 个相机点位的原始研究发现，它们**全天均有活动，17:00—19:00 达到峰值**。相机与项圈所得曲线重叠系数为 0.89，但相机在 16:00—21:00 记录到的活动更高，部分原因是繁殖洞相机捕捉了母幼社交，而项圈主要区分移动和静止。推荐活动标签写“全天均可活动、傍晚高峰”，不要写成严格夜行；这一时段仍只是单一山地研究地结果。[Kong et al. 2022](https://doi.org/10.17520/biods.2022081) [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat)

白天休息和育幼常利用旱獭、獾等动物留下的洞穴，已有洞穴多位于向阳坡面。2020 年首次发表的活跃繁殖洞研究通过五个月监测得到 7,555 张照片和 2,996 段视频，记录到一只母兽带两只幼崽在多个洞穴之间转移；它支持“雌兽可在同一家域使用多个育幼洞”，但不能据此断言所有洞穴都朝南或所有个体都反复搬家。[Han et al. 2020](https://doi.org/10.24272/j.issn.2095-8137.2020.039) [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat)

IUCN/SSC 综述引用一项局地项圈项目，给出平均家域约 **3.04 平方千米（95% MCP）**、**5.36 平方千米（100% MCP）**。MCP 方法、样本与景观都会显著影响结果，且后续救护个体的活动范围也显示更大差异；这些数字只适合作为研究案例，不宜写成全物种固定家域或放进跨物种比较指标。[IUCN/SSC Small Cat Report](https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf) [国家林草局 2024 年救护放归报道](https://www.forestry.gov.cn/c/www/dzwzbh/548251.jhtml)

### 食性与捕猎

荒漠猫是肉食性捕食者，食谱以小型哺乳动物为核心，主要包括鼢鼠、白尾松田鼠和鼠兔，也捕食野兔及雉、山鹑等鸟类。野外繁殖洞研究还记录到母兽捕杀喜马拉雅旱獭并利用其洞穴，说明它偶尔能处理明显大于常见鼠类的猎物；不能把这一例写成日常主食。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat) [IUCN/SSC Small Cat Report](https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf) [Han et al. 2020](https://doi.org/10.24272/j.issn.2095-8137.2020.039)

它会贴近地面监听浅层地下通道中的鼢鼠活动，再把猎物刨出；猫科专家组概述引用的观察中，猎物通道距地表约 3—5 厘米。这是很适合详情页的行为钩子，但应写“会用听觉定位并挖掘地下鼠类”，不要扩张成“能隔着数米土层听见猎物”。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat)

### 繁殖与育幼

猫科专家组对有限资料的汇总为：交配期推测集中在 **1—3 月**，多数幼崽约在 **5 月**出生，每胎 **2—4 只**，约 **7—8 月龄**独立。这些数字大多来自历史观察与圈养资料，应保留“推测、约、多数”等限定，不要补写没有稳定荒漠猫一手资料支持的精确妊娠天数、性成熟年龄或终生繁殖次数。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat)

2020 年野外原始研究记录到一只母兽带一雌一雄两只幼崽，幼崽约四月龄时仍在接受照料，母兽会警戒、哺乳、带回食物并与幼崽玩耍；家庭随后在多个育幼洞之间移动。研究只有一个被持续观察的家庭，适合用于描绘育幼行为，不足以重估全物种的窝仔数、独立年龄或繁殖成功率。[Han et al. 2020](https://doi.org/10.24272/j.issn.2095-8137.2020.039)

### 威胁与证据强度

当前可稳定写入的威胁依证据强度如下：[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T8539A213200674.en) [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat) [Liu et al. 2022](https://doi.org/10.17520/biods.2022396)

- **鼠害控制造成猎物减少和二次中毒**：大规模灭杀鼠兔、田鼠和鼢鼠既削弱食物基础，也可能让捕食者摄入毒饵或带毒猎物；部分区域仍在使用化学药剂。
- **栖息地丧失、退化与破碎化**：过度放牧以及道路、聚落和其他基础设施扩张改变高原草地并切割生境。
- **道路致死**：评估已将路撞列作威胁，但种群尺度影响仍缺乏量化；适合写“已有报告”，不写成最大死亡原因。
- **意外、机会性和非法猎杀**：历史上毛皮用于本地帽饰和衣物，现今大规模贸易已受禁，但非法、无监管交易仍有记录；当前资料认为针对毛皮的猎杀未必是首要威胁。
- **与家猫接触及基因交流风险**：2021 年基因组研究确认了古代亚洲野猫向荒漠猫的基因渐渗，也确认当代荒漠猫基因进入同域家猫；该论文并未确认相反方向的家猫基因已广泛进入荒漠猫。可以写“频繁接触带来反向基因渐渗与遗传完整性风险”，不能写“家猫基因污染已被证实遍及荒漠猫全种群”。[Yu et al. 2021](https://doi.org/10.1126/sciadv.abg0221)

自由活动犬可能造成局地捕杀与干扰，近期已有现场报告提出该风险，但 2022 IUCN 评估和 2024 Small Cat Report 尚未给出全分布区影响量。因此可以放入研究展望或正文中的“新兴局地风险”，暂不建议与已纳入全球评估的五项威胁并列为确定的全域主因。

### 保护措施与法律地位

现行保护地位：

- **中国国家一级重点保护野生动物**：2021 年第 3 号公告明确使用 `Felis bieti`；这是中国最高一级国家重点保护等级。[国家林草局、农业农村部公告](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml)
- **CITES 附录 II**：CITES 官方定期审查文件逐项列出 `Felis bieti (App. II)`；附录 II 并不等于全面禁止国际贸易，而是要求贸易合法且不危害物种野外存续。[CITES AC30 Doc. 29.1](https://cites.org/sites/default/files/eng/com/ac/30/E-AC30-29-01.pdf)
- **IUCN 全球 VU C1** 与 **中国脊椎动物红色名录 CR**：二者评估范围和用途不同，均不等同于法定保护级别。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat)

当前最重要的保护缺口并非再增加一个笼统口号，而是建立可靠本底。IUCN/SSC 认为分布、丰度、密度、种群趋势、繁殖生态、栖息地利用和各种威胁的影响都缺少量化，且尚无成熟的全物种保护计划与协作网络。优先行动应包括：[IUCN/SSC Small Cat Report](https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf) [Liu et al. 2022](https://doi.org/10.17520/biods.2022396)

- 以相机、遗传样品和规范化占域/密度方法确认大尺度分布、丰度与趋势，不公开敏感点位；
- 评估现有自然保护地是否覆盖关键高原草地，并建立跨保护地的长期监测和协作网络；
- 减少非选择性化学灭鼠，维护鼠兔、鼢鼠和田鼠等猎物群落，监测二次中毒；
- 在道路与基础设施规划中避让和连通生境，识别高风险路段并设置限速、警示或适合当地的通行缓解设施；
- 加强反盗猎、毛皮交易执法及社区共管，同时规范捕兽夹等可能造成误伤的工具；
- 调查荒漠猫与亚洲野猫、家猫的分布重叠和双向基因交流；在证据支持的社区尺度管理自由活动家猫并开展疫病、遗传监测；
- 用监测结果检验保护地和现有措施是否有效，而不是仅以“列入名录”代表保护成功。

## 推荐的关键事实

1. 荒漠猫是现存唯一自然分布完全限于中国的野生猫科类群，可靠范围集中在青藏高原东部。[Liu et al. 2022](https://doi.org/10.17520/biods.2022396)
2. 名字中虽有“荒漠”，现有核心记录来自高原草原、草甸和灌丛，而非典型沙漠。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat)
3. 耳尖深色毛簇、粗大的环纹尾和淡蓝色虹膜，是它区别于同域家猫和其他小型猫科的重要外形线索。[Han et al. 2020](https://doi.org/10.24272/j.issn.2095-8137.2020.039)
4. 它能伏在地面监听浅层地下鼢鼠的活动，再用前爪把猎物刨出。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-chinesemountaincat)
5. 新的相机与项圈研究记录到全天活动、17:00—19:00 高峰，修正了“严格夜行”的旧概括。[Kong et al. 2022](https://doi.org/10.17520/biods.2022081)
6. 直到 2020 年，研究人员才发表第一个持续监测的野生活跃繁殖洞案例，反映这个物种的生态资料仍多么稀少。[Han et al. 2020](https://doi.org/10.24272/j.issn.2095-8137.2020.039)

## 应删除或避免的说法

- 不写“荒漠猫是大熊猫、小熊猫的近亲”；应写“同属食肉目的远亲，分别位于猫型亚目和犬型亚目”。
- 不把 `Felis silvestris bieti` 当作已经取代 `Felis bieti` 的唯一正确名；当前权威清单仍保留独立种，但正文可说明基因组证据带来的争议。
- 不写“全球现存 10,000 只”或把 1,177—23,540 当成直接计数；评估采用的是成熟个体少于 10,000 的保守模型判断。
- 不把 2022 这个发布版本误作唯一评估年份。仓库字段按类型注释应写 2021，来源标题注明 2022 发布。
- 不把中国红色名录 CR 填入全球 IUCN `conservation.code`，也不把国家一级保护与 IUCN 等级混为一套体系。
- 不写“严格夜行”；最新原始研究支持全天可活动、傍晚高峰。
- 不写“生活在沙漠深处”或配成沙丘物种；主视觉应是寒冷、干燥的高原草甸/草原与低矮灌丛。
- 不填确定寿命、妊娠期、性成熟年龄或全物种固定家域；现有资料不足。
- 不把一次捕杀旱獭写成主要食谱，也不把局地 3.04/5.36 平方千米家域推广到全物种。
- 不写“家猫基因已经广泛污染荒漠猫”；2021 年论文直接确认的是荒漠猫向同域家猫的当代基因流，反方向在该研究中仍是保护风险假说。
- 不在公开条目、图注、素材提示词或地图中包含繁殖洞、近期个体和救护放归点的坐标。

## 可直接用于 `species.ts` 的字段建议

以下代码使用仓库现有 helper 和类型；作为完整条目落地时，应由素材任务补入 `media`，并设置 `featured`、`publishedAt`。`center` 只是青藏高原东部的大尺度地图焦点，不是种群中心或记录点。

```ts
const CHINESE_MOUNTAIN_CAT_SOURCE_DATE = '2026-08-15' as const;
const CHINESE_MOUNTAIN_CAT_CONTENT_DATE = '2026-08-15' as const;

const CHINESE_MOUNTAIN_CAT_SOURCES = [
  {
    title: 'IUCN Red List — Felis bieti (2021 assessment, published 2022)',
    url: 'https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T8539A213200674.en',
    kind: 'conservation',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Cat Specialist Group — Chinese Mountain Cat',
    url: 'https://www.catsg.org/living-species-chinesemountaincat',
    kind: 'general',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Cat Specialist Group — Small Cat Report (2024)',
    url: 'https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database — Felis bieti',
    url: 'https://www.mammaldiversity.org/taxon/1005984/',
    kind: 'taxonomy',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局、农业农村部 — 国家重点保护野生动物名录（2021年第3号）',
    url: 'https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml',
    kind: 'conservation',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'CITES AC30 Doc. 29.1 — Felis bieti (Appendix II)',
    url: 'https://cites.org/sites/default/files/eng/com/ac/30/E-AC30-29-01.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database — Ailuropoda melanoleuca',
    url: 'https://www.mammaldiversity.org/taxon/1005930/',
    kind: 'taxonomy',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database — Ailurus fulgens',
    url: 'https://www.mammaldiversity.org/taxon/1005802/',
    kind: 'taxonomy',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'Liu et al. 2022 — Evolutionary genetics, taxonomy and conservation of the Chinese mountain cat',
    url: 'https://doi.org/10.17520/biods.2022396',
    kind: 'general',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'Yu et al. 2021 — Genomic evidence and introgression to domestic cats',
    url: 'https://doi.org/10.1126/sciadv.abg0221',
    kind: 'taxonomy',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'Kong et al. 2022 — Daily activity from camera traps and satellite collars',
    url: 'https://doi.org/10.17520/biods.2022081',
    kind: 'ecology',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'Han et al. 2020 — First active breeding den of the Chinese mountain cat',
    url: 'https://doi.org/10.24272/j.issn.2095-8137.2020.039',
    kind: 'ecology',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'He et al. 2004 — Distribution and conservation status of Felis bieti',
    url: 'https://doi.org/10.1017/S0030605304000092',
    kind: 'distribution',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

// Add a new researched record using these fields; media remains a separate asset task.
{
  id: 'species-felis-bieti',
  slug: 'chinese-mountain-cat',
  names: {
    zh: '荒漠猫',
    en: 'Chinese Mountain Cat',
    aliases: ['中国山猫', '草猫', '草猞猁'],
  },
  scientificName: 'Felis bieti',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Carnivora', '食肉目'),
    taxon('Felidae', '猫科'),
    taxon('Felis', '猫属'),
  ),
  conservation: conservation('VU', 'decreasing', 2021, 'C1'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲'],
    regions: ['青藏高原东部', '青海东部', '四川西北部', '甘肃西南部', '西藏东南部局部'],
    countries: ['中国'],
    endemicTo: ['中国'],
    range: '可靠分布限于青藏高原东部的大尺度高地，主要涉及青海东部、四川西北部、甘肃西南部和西藏东南部局部；典型海拔约 2,500—5,000 米，评估记录约跨 2,000—5,000 米。',
    center: { lat: 35, lng: 101 },
  },
  habitats: [
    {
      name: '高山草原与高寒草甸',
      realm: 'terrestrial',
      description: '最主要的开放高原生境；丰富的鼠兔、鼢鼠和田鼠提供食物，洞穴与低矮植被提供休息和育幼场所。',
      isPrimary: true,
    },
    {
      name: '高寒灌丛与黄土丘陵草原',
      realm: 'terrestrial',
      description: '利用寒冷、干燥且有灌丛或岩石遮蔽的坡地；部分局地景观与牧场、农田和恢复植被镶嵌。',
    },
    {
      name: '针叶林缘与局部混交林',
      realm: 'terrestrial',
      description: '并非严格草原专属，在高原边缘也有林缘和混交林记录，但现有资料不足以量化其依赖程度。',
    },
  ],
  measurements: {
    length: { min: 60, max: 85, unit: 'cm', note: '头体长；另有 29—35 厘米的粗长环纹尾' },
    weight: { min: 5.5, max: 9, unit: 'kg', note: 'IUCN/SSC 猫科专家组概览范围' },
  },
  diet: {
    types: ['carnivore'],
    foods: ['鼢鼠', '白尾松田鼠', '鼠兔', '野兔', '雉类与山鹑', '偶尔捕食旱獭'],
    description: '以高原小型哺乳动物为核心猎物，也捕食鸟类；会贴近地面监听浅层地下鼢鼠的活动，再用前爪把猎物刨出。',
  },
  activity: ['全天均可活动，傍晚高峰', '独居', '利用洞穴休息与育幼', '母兽可使用多个育幼洞'],
  tags: ['中国特有种', '国家一级保护野生动物', 'CITES 附录 II', '高原小型猫科', '啮齿动物捕食者'],
  summary: '名字来自“荒漠”，真正的家却是青藏高原东部寒冷草地的中国特有猫科动物。',
  description: '荒漠猫是中国唯一的特有野生猫科类群。它体格敦实，耳尖带深色毛簇，粗尾末端环纹醒目；厚毛和长有毛的脚掌帮助它应对高原寒风。它很少现身，却会伏在草地上用听觉锁定地下鼠类。新的项圈与相机研究显示，这只曾被简单归为夜行性的猫全天都可能活动，傍晚最活跃。',
  storySections: [
    {
      key: 'name-and-habitat',
      label: '名字与家园',
      title: '名叫“荒漠”，却住在高原草地',
      body: '荒漠猫的可靠家园集中在青藏高原东部，主要是高山草原、高寒草甸和灌丛，也会进入林缘。当前专家资料没有真正沙漠中的可靠记录；“荒漠猫”是沿用已久的名称，不能据此推断它生活在典型沙漠。',
    },
    {
      key: 'adaptation',
      label: '形态与适应',
      title: '淡蓝虹膜与一条粗大的环纹尾',
      body: '它比普通家猫更敦实，短腿、厚毛和脚掌上的密毛适合寒冷多风的高地。淡蓝色虹膜、耳尖毛簇，以及末端带 3—6 道深色环和黑尖的粗尾，构成最醒目的识别线索。',
    },
    {
      key: 'hunting',
      label: '食性与捕猎',
      title: '先听见地下的猎物，再把它刨出来',
      body: '鼠兔、鼢鼠和田鼠是食谱核心。捕猎浅层地下鼠类时，荒漠猫会贴近地面监听通道里的动静，确认位置后迅速挖掘；它也捕食野兔和鸟类，偶尔能杀死旱獭。',
    },
    {
      key: 'activity',
      label: '活动节律',
      title: '隐秘，不等于只在深夜出现',
      body: '旧资料常把荒漠猫写成夜行或晨昏活动。新的卫星项圈与相机研究却记录到全天活动，并在傍晚达到高峰。不同设备看到的是移动、觅食或洞边社交等不同片段，也提醒我们：这个物种仍有大量生活细节未知。',
    },
    {
      key: 'reproduction',
      label: '繁殖与育幼',
      title: '母兽会带幼崽更换育幼洞',
      body: '有限资料显示交配多在 1—3 月、幼崽多在 5 月出生，每胎约 2—4 只。野外首个持续监测家庭中，母兽带着两只幼崽在多个旧洞穴之间转移，并负责哺乳、警戒、带回食物和陪伴玩耍。',
    },
    {
      key: 'conservation',
      label: '保护与研究',
      title: '保护一种我们仍不够了解的猫',
      body: '鼠药既会削弱猎物基础，也可能造成二次中毒；道路、放牧和建设切割草地，毛皮猎杀与家猫接触又带来额外风险。保护需要减少非选择性灭鼠、维护连续高原生境并限制非法猎杀，也需要长期相机、遗传与项圈研究来回答最基础的种群问题。',
    },
  ],
  keyFacts: [
    '荒漠猫是现存唯一自然分布完全限于中国的野生猫科类群。',
    '名字带“荒漠”，核心生境却是青藏高原东部的草原、草甸和灌丛，而非典型沙漠。',
    '淡蓝色虹膜、耳尖毛簇和带 3—6 道深色环的粗尾，是醒目的外形特征。',
    '它会贴地监听浅层地下鼢鼠的活动，再用前爪把猎物刨出。',
    '项圈与相机研究显示它全天均可活动，并在 17:00—19:00 达到研究地活动高峰。',
    '直到 2020 年，研究人员才首次发表持续监测的野生活跃繁殖洞案例。',
  ],
  threats: [
    '化学灭鼠造成猎物减少及潜在二次中毒',
    '过度放牧和基础设施建设导致栖息地丧失、退化与破碎化',
    '道路致死与捕兽工具造成的意外伤亡',
    '机会性猎杀、毛皮利用与非法交易',
    '与自由活动家猫接触带来的基因渐渗和疫病风险',
  ],
  conservationActions: [
    '开展不公开敏感点位的全分布调查、密度估计和长期趋势监测',
    '评估并提升现有保护地对关键高原草地和连通生境的保护成效',
    '减少非选择性化学灭鼠并监测二次中毒，维护自然猎物群落',
    '在道路和基础设施规划中避让生境并缓解高风险路段致死',
    '加强反盗猎、非法毛皮贸易执法与社区共管',
    '监测与家猫的接触、疫病和双向基因交流，开展适合当地的家猫管理',
  ],
  metrics: {
    adultLengthCm: [60, 85],
    adultMassKg: [5.5, 9],
    elevationM: [2000, 5000],
  },
  featuredStats: [
    {
      key: 'mature-population',
      label: '成熟个体估计',
      value: '<10,000',
      unit: '只',
      note: 'IUCN 2021 评估的保守模型判断，不是直接全球普查',
    },
    {
      key: 'typical-elevation',
      label: '典型活动海拔',
      value: '2,500—5,000',
      unit: '米',
      note: '评估记录范围约 2,000—5,000 米',
    },
    { key: 'tail-length', label: '尾长', value: '29—35', unit: '厘米' },
    {
      key: 'activity-peak',
      label: '研究地活动高峰',
      value: '17:00—19:00',
      note: '2020—2021 年 10 只项圈个体与相机资料；不代表所有地区固定时段',
    },
  ],
  sources: CHINESE_MOUNTAIN_CAT_SOURCES,
  updatedAt: CHINESE_MOUNTAIN_CAT_CONTENT_DATE,
}
```

`center: { lat: 35, lng: 101 }` 是用于打开东部青藏高原视图的粗粒度焦点，不是荒漠猫的分布中心、密度中心或可前往寻找个体的坐标。

## 来源清单

以下来源均于 **2026-08-15** 访问；链接优先使用机构页、正式文档或 DOI。

| 主题 | 来源与稳定 URL | 用途 |
| --- | --- | --- |
| 当前分类与英文名 | [ASM Mammal Diversity Database — *Felis bieti*](https://www.mammaldiversity.org/taxon/1005984/) | 接受种名、上级分类、英文名与异名、中国特有分布 |
| 猫科分类共识 | [Kitchener et al. 2017 — A revised taxonomy of the Felidae](https://repository.si.edu/items/3d130d51-a9e7-47b0-b24a-422fbebce472) | 独立种、单型种与英文别名 |
| IUCN 全球评估 | [Luo et al. — *Felis bieti*, Red List 2022-1](https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T8539A213200674.en) | VU C1、下降趋势、范围、种群、威胁与保护需求 |
| IUCN 评估复核 | [IUCN/SSC Cat Specialist Group 2024 — Small Cat Report](https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf) | 评估年份、模型假设、EOO、知识缺口、家域案例与行动优先级 |
| 权威物种概览 | [IUCN/SSC Cat Specialist Group — Chinese Mountain Cat](https://www.catsg.org/living-species-chinesemountaincat) | 体型、外形、典型海拔、生境、食性、行为、繁殖与威胁 |
| 中国法定保护名录 | [国家林草局、农业农村部公告 2021 年第 3 号](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml) | 中文标准名、学名和国家一级重点保护地位 |
| CITES | [CITES AC30 Doc. 29.1](https://cites.org/sites/default/files/eng/com/ac/30/E-AC30-29-01.pdf) | 明确列示 *Felis bieti* 为附录 II |
| 分类、遗传与基因流 | [Yu et al. 2021](https://doi.org/10.1126/sciadv.abg0221) | 野猫亚种观点、古代与当代基因渐渗及证据方向 |
| 中文名、形态、分布与威胁综述 | [Liu et al. 2022](https://doi.org/10.17520/biods.2022396) | 中文别名、淡蓝虹膜、分布更新、威胁与保护建议 |
| 日活动节律 | [Kong et al. 2022](https://doi.org/10.17520/biods.2022081) | 10 只项圈个体、相机对照、全天活动及傍晚高峰 |
| 繁殖洞与母幼行为 | [Han et al. 2020](https://doi.org/10.24272/j.issn.2095-8137.2020.039) | 首个活跃繁殖洞、多个育幼洞、幼崽外形和母幼行为 |
| 历史分布核查 | [He et al. 2004](https://doi.org/10.1017/S0030605304000092) | 标本与记录核验、生境及早期威胁；分布结论需由 2022 评估更新 |

## 仍然不确定或需后续更新的事项

- **分类**：现行权威清单保留 `Felis bieti`，但 2021 全基因组研究支持 `Felis silvestris bieti`；未来 IUCN 猫科分类复核可能改变主名。
- **种群量与下降幅度**：少于 10,000 成熟个体与未来 10 年约 10% 下降都是模型化判断，缺少全分布密度和趋势调查。
- **分布边界**：许多县级记录没有近期实证，边缘省区的旧记录又常与亚洲野猫或家猫混淆；公开条目应始终使用大尺度范围。
- **生境术语**：旧资料中的“荒漠/半荒漠”和当前专家页的“没有真正沙漠记录”存在用语差异，正文宜强调高原干草地而避免绝对化。
- **活动与家域**：全天活动、17:00—19:00 高峰和 3.04/5.36 平方千米家域来自有限研究地，不能直接推广到不同季节和全分布区。
- **生活史**：寿命、妊娠期、性成熟年龄、野外繁殖成功率和幼兽死亡率均缺少可靠的物种级数据。
- **家猫基因渐渗**：已发表基因组研究确认的当代方向主要是荒漠猫进入家猫；反方向对荒漠猫遗传完整性的程度仍需要更多同行评审数据。
- **威胁强度**：鼠药、路撞、毛皮猎杀、基础设施、自由活动犬与家猫各自造成的种群级死亡或繁殖影响尚未量化。
