# 北极熊（*Ursus maritimus*）完整物种档案研究

- 检索与核验日期：2026-08-20
- 使用范围：src/data/species.ts 的北极熊新条目、详情页长文、数字卡，以及 6 幅物种图像的设计与验收
- 证据标准：分类与范围优先采用美国哺乳动物学会 Mammal Diversity Database（MDD）和五个北极熊范围国的共同资料；全球风险采用 IUCN Red List；亚种群状态采用 IUCN/SSC 北极熊专家组（PBSG）2024 状态报告；国际法律地位采用 CITES 与 CMS 截至核验日生效的附录；生态、行为和数量仅补充政府科研机构与同行评审原始研究。没有年份、对象口径或不确定区间的科普数字不进入结构化字段。
- 物种边界：全文只指 ***Ursus maritimus* Phipps, 1774**。PBSG 的 20 个 subpopulations 是用于人口统计、监测和管理的亚种群/管理单元，不是 20 个亚种；相邻单元间常有基因流动。北极熊也不能与北美棕熊或灰熊 *Ursus arctos* 混写。
- 敏感信息处理：分布只到范围国、海域和广义生态区；不记录产仔穴、卫星定位点、社区冲突热点、相机位置或巡护路线。地图 center 只是环北极界面焦点，不代表密度中心。
- 当前性说明：截至本次核验，IUCN 可追溯的全球评估仍是 2015 年 VU、A3c、趋势 Unknown；PBSG 已讨论和准备新评估，但未发现已经发布并取代 2015 版的完整全球重评。全球 26,000 只及 95% CI 22,000—31,000 仍是 PBSG 2024 报告所称“最近一次全球估算”，不是 2026 年同步普查。[IUCN/PBSG Red List 页面](https://www.iucn-pbsg.org/iucn-redlist/) [PBSG 2024 状态报告](https://www.iucn-pbsg.org/wp-content/uploads/2024/11/PBSG-Status-Criteria-and-Report_Final_2024Oct7.pdf) [PBSG 第 20 次工作会议纪要](https://www.iucn-pbsg.org/wp-content/uploads/2025/09/PBSG-20th-Proceedings_FINAL_20250815.pdf)

## 结论摘要

### 分类、名称与管理单元边界

MDD 接受名为 ***Ursus maritimus* Phipps, 1774**，MDD ID 为 **1005936**，英文主名为 **Polar Bear**；分类为动物界—脊索动物门—哺乳纲—食肉目—熊科—熊属。产品中文主名用“**北极熊**”，不必加入容易脱离学名被泛指的“白熊”别名。[MDD — *Ursus maritimus*](https://www.mammaldiversity.org/taxon/1005936/)

PBSG 2024 年承认 **20 个**相对离散的亚种群。边界依据季节忠实性、标记重捕、卫星遥测、地方知识、自然阻隔和管理需要综合划定；相邻亚种群常有基因流动，因此它们“在生物学上类似管理单元”，不能把数量 20 写成亚种数、独立进化谱系数或彼此完全隔绝的种群数。东南格陵兰亚种群由格陵兰政府于 2023 年、PBSG 于 2024 年承认，才使当前总数从旧资料常见的 19 变为 20。[PBSG 2024 状态报告](https://www.iucn-pbsg.org/wp-content/uploads/2024/11/PBSG-Status-Criteria-and-Report_Final_2024Oct7.pdf)

### IUCN：VU、趋势 Unknown、评估年 2015、标准 A3c

当前全球结论为 **易危 Vulnerable（VU）**、种群趋势 **未知 Unknown**、评估年份 **2015**、标准 **A3c**。仓库推荐精确写作：

~~~ts
conservation('VU', 'unknown', 2015, 'A3c')
~~~

不能因为海冰长期下降就把 IUCN 的结构化趋势擅自改成 decreasing。CMS 为 2026 年全球迁徙物种状态报告准备的物种表仍明确列出 Polar Bear：IUCN VU、全球评估 2015、趋势 Unknown，说明截至 2026 年该字段尚未被新的正式评估替代。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T22823A14871490.en) [CMS COP15 全球状态文件](https://www.cms.int/sites/default/files/document/2026-01/cms_cop15_doc.20.1_rev.1_conservation-status-migratory-species_e.pdf)

A3c 不是“现在所有地方都在下降”的同义词。A3 是对未来三代种群减少的推断或预测，c 指占据范围、出现范围或生境质量下降；对北极熊而言，核心机制是温室气体驱动的海冰生境减少。Regehr 等为评估构建的模型把海冰变化与种群响应的不确定性一并传播：未来三代减少超过 30%、50% 和 80% 的中位概率分别约为 **0.71、0.07 和低于 0.01**，支持 VU，而不支持把 EN 或 CR 当成既成事实。[Regehr et al. 2016](https://doi.org/10.1098/rsbl.2016.0556) [USGS publication record](https://pubs.usgs.gov/publication/70187719)

该模型估计平均世代长度约 **11.5 年**；由于世代长度本身也有不确定性，三代预测窗口约为 **35—41 年**。PBSG 2024 状态表则把 11.5 年用作“一代”的短期趋势参照、34.5 年用作约三代的操作性参照。不要把这些窗口写成已连续实测的全球普查时长。

### 数量：26,000 是旧模型的总个体估算，不是成熟个体字段

PBSG 2024 状态报告仍把 **26,000 只（95% CI：22,000—31,000）**称为最近一次全球丰度估算。它来自 2015/2016 年评估工作所能汇集的亚种群资料，不是 2026 年实时计数；而且部分亚种群估值缺失、过旧或区间很宽，东格陵兰和北极海盆长期没有 PBSG 接受的丰度估值。报告明确提醒，全球数字同时反映北极熊状态和资料的数量、质量，不能制造虚假的精度。[PBSG 2024 状态报告](https://www.iucn-pbsg.org/wp-content/uploads/2024/11/PBSG-Status-Criteria-and-Report_Final_2024Oct7.pdf)

PBSG 定义的 subpopulation size 包含依赖幼体，是**总个体数**，不是成熟个体数。全球区间又由年代、方法和质量不一致的亚种群资料组合而成。因此：

- 可以在 featuredStats 中显示“最近全球估算 26,000，只（95% CI 22,000—31,000）”，并在同屏注明估算年代和口径；
- 不应把 [22,000, 31,000] 写进 metrics.estimatedMatureIndividuals；
- 不应写“目前精确剩余 26,000 只”“每年固定减少多少只”或把置信区间当作上下限实数；
- 不应把 20 个亚种群的最新局部点估值机械相加，冒充同一年全球总数。

### 2024 亚种群状态：一张异步、缺口很大的拼图

按 PBSG 2024 表的“短期趋势”逐项归类，20 个亚种群中 **2 个 likely increased、5 个 likely stable、3 个 likely/very likely decreased、10 个 data deficient**。这些趋势的起止年不同，有的资料已很旧；“likely”也不必然达到传统显著性检验门槛。因此 2/5/3/10 是当前知识结构的摘要，不是可相加成一个全球方向的投票结果。[PBSG 2024 状态报告](https://www.iucn-pbsg.org/wp-content/uploads/2024/11/PBSG-Status-Criteria-and-Report_Final_2024Oct7.pdf)

局地稳定或增加与全球长期风险不矛盾。海洋生产力、冰型、历史捕猎压力、管理措施和个体在边界间移动都会改变短期响应。例如部分高纬地区从厚多年冰转向更具生产力的季节性冰，现阶段可能暂时改善猎物条件；但 PBSG 同时指出，若气候变暖不被遏制，四类海冰生态区都会继续失冰，影响程度和时间只是不一致。

### 分布：五个范围国、三洲、只在北半球

北极熊环北极分布于五个范围国：**加拿大、格陵兰（丹麦王国）、挪威、俄罗斯和美国（阿拉斯加）**。主要海区包括楚科奇海与波弗特海、加拿大北极群岛及哈德逊湾/詹姆斯湾、巴芬湾和格陵兰海、斯瓦尔巴—巴伦支海，以及俄罗斯的喀拉海、拉普捷夫海和东西伯利亚海。北极海盆深水区也有个体经过，但密度低、居民性和丰度都不清楚。[1973 年协定范围国网站](https://polarbearagreement.org/polar-bear-biology) [PBSG 2024 状态报告](https://www.iucn-pbsg.org/wp-content/uploads/2024/11/PBSG-Status-Criteria-and-Report_Final_2024Oct7.pdf)

MDD 国家清单中的 “Iceland?” 反映偶发或存疑记录；冰岛不是五个常住范围国之一。产品 countries 不列冰岛，可在研究注释保留“偶有随浮冰到达的迷行记录”。北极熊只生活在北半球，任何南极大陆、企鹅、南极式陡峭冰山群都属于硬错误。[MDD](https://www.mammaldiversity.org/taxon/1005936/)

distribution.realms 建议为 **['marine', 'terrestrial']**。海冰是海洋食物网中的捕食平台，海岸、冻土和雪堆又承担季节性避难与产仔穴功能；不加入 freshwater。东南格陵兰个体利用淡水冰川崩解形成的 mélange，并不形成淡水生活史阶段。center 建议 **{ lat: 80, lng: 0 }**，只用于让地图聚焦环北极。

### 生境：海冰是猎场，不是漂亮背景

最关键生境是覆盖生产力较高大陆架水域的季节性或多年海冰，以及裂隙、压力脊、呼吸孔和海豹产仔穴形成的微地形。北极熊借海冰接近环斑海豹等猎物；大多数地区的分布随海冰季节边界移动。海冰退向深而贫营养的中央海盆时，即使熊仍站在冰上，也可能与留在近岸高生产力水域的海豹分离。[Polar Bear Range States — Habitat Needs and Characteristics](https://polarbearagreement.org/polar-bear-biology/habitat-needs-and-characteristics) [PBSG 2024 状态报告](https://www.iucn-pbsg.org/wp-content/uploads/2024/11/PBSG-Status-Criteria-and-Report_Final_2024Oct7.pdf)

在哈德逊湾等季节冰区，海冰每年夏季完全消失，北极熊被迫上岸约 **2—5 个月**，主要依靠此前积累的脂肪。海岸、苔原和岛屿因此是重要夏季避难地，但不是与海冰猎场等价的高能食物生境。图像应表现休息、缓慢移动或偶发机会取食，不能用一地的浆果、鸟蛋或垃圾堆暗示陆地食物足以普遍替代海豹。[Polar Bear Range States — Habitat](https://polarbearagreement.org/polar-bear-biology/habitat-needs-and-characteristics)

产仔穴可位于陆地雪堆、冻土或泥炭，少数地区也用多年冰或固定冰。晚秋孕雌入穴，其他熊冬季通常仍活跃在海冰上。公开产品不应标出真实穴址；工业、旅游和科研活动都应避让已知或潜在产仔区。

### 东南格陵兰：特殊冰川避难策略，不是“脱离海冰”

Laidre 等 2022 年识别的东南格陵兰个体在约北纬 60—64 度的陡峭峡湾中相对隔离，遗传差异显著；当地海冰季很短，熊会在夏秋使用冰川入海崩解形成的淡水冰块混合带继续接近猎物。PBSG 2024 承认其为第 20 个亚种群，丰度和趋势仍列 Data Deficient，评估计划在 2025—2027 年间开展。[Laidre et al. 2022](https://doi.org/10.1126/science.abk2793) [PBSG 2024 状态报告](https://www.iucn-pbsg.org/wp-content/uploads/2024/11/PBSG-Status-Criteria-and-Report_Final_2024Oct7.pdf)

这个案例不能被推广成“北极熊不需要海冰”或“冰川可拯救全球种群”。glacial mélange 仍是一种冰上捕食平台，且只存在于少数有海洋终止冰川的特殊峡湾；区域隔离、低繁殖率和未来冰川变化仍带来风险。

### 体型与外形：性别和季节差异必须保留

五范围国共同资料给出的上限参考是：成年雄性可达 **800 千克、体长 2.8 米**；雌性通常不超过 **400 千克、2.5 米**。PBSG FAQ 的一般成年范围为雄性约 400—600 千克、240—260 厘米，雌性多为 150—250 千克；加拿大 Wapusk 国家公园公众资料也给出当地成年雄性平均 300—450 千克、雌性 150—250 千克。不同数字混合了性别、季节、妊娠状态、地点和“通常/平均/最大”口径。[Polar Bear Range States — Biology](https://polarbearagreement.org/polar-bear-biology) [PBSG FAQ](https://www.iucn-pbsg.org/frequently-asked-questions/) [Parks Canada — Wapusk polar bears](https://parks.canada.ca/pn-np/mb/wapusk/nature/faune-animals/mammiferes-mammals/ours-bears/polaire-polar)

为避免把上限伪装成成体范围，measurements 只建议填 length.max 2.8 m 与 weight.max 800 kg，并在 note 明确“成年雄性上限参考、不是典型值”；metrics.adultLengthCm 和 metrics.adultMassKg 均不填。

可靠视觉线索包括：长颈、相对狭长而小的头、长口鼻、小而圆的耳、黑鼻与深色眼、粗壮延长的躯干、很短且不显眼的尾、大而宽的有毛足掌。毛本身透明至半透明，浓密底绒与护毛让外观呈白、乳白或略黄；皮肤是黑色。不要画灰熊式高肩峰、棕色粗长被毛、巨大尾巴、熊猫眼斑或鸭脚式完全蹼足，也不要重复“每根毛像光纤导热”这一被 PBSG FAQ 否定的流行说法。

### 食性与猎法：高度肉食，环斑海豹最关键

diet.types 只建议 **['carnivore']**。环斑海豹是全范围最重要猎物，髯海豹也很重要；格陵兰海豹、冠海豹和港海豹在部分地区贡献明显。北极熊还会机会性捕食幼年海象、白鲸或独角鲸，并取食鲸类等海洋哺乳动物尸体。鸟、蛋、鱼、植被、浆果和海带都有记录，但通常热量贡献很小。[Polar Bear Range States — Diet](https://polarbearagreement.org/polar-bear-biology/diet)

加拿大 1,738 只北极熊、约 30 年脂肪酸资料显示，食谱随地区、性别和年龄变化，但被研究的每个加拿大亚种群都以环斑海豹为主，东部一些地区格陵兰海豹的重要性较高。这个大样本支持“高度专化又有区域弹性”，不支持把所有个体固定成单一猎物百分比。[Thiemann et al. 2008](https://doi.org/10.1890/07-1050.1)

典型猎法是在海豹呼吸孔旁静候、破开海豹的雪下育幼穴，或在冰缘短距离伏击；开放水域长距离追逐并不是默认画面。第二幅图只表现“静候行为”，孔内不出现海豹，更不能由一张图断言捕猎成功。

### 上岸觅食不能普遍抵消海冰猎场损失

Pagano 等在西哈德逊湾无冰季追踪 20 只熊 19—23 天：尽管个体采用休息、陆地觅食或长距离游泳等不同策略，19 只仍以每天约 **0.4—1.7 千克**速度失重；只有一只可能因获得大型动物食物而增重。三只游了约 54—175 千米。该研究说明在这一地区和季节，多样陆地行为没有把能量收支普遍转正；不能把它扩展成每个亚种群、每个年份都以同一速率失重，也不能把观察到的游泳距离写成物种最大能力。[Pagano et al. 2024](https://doi.org/10.1038/s41467-023-44682-1)

北极熊在食物短缺时会降低活动，但“walking hibernation / 行走冬眠”会误导。陆地上的能量节省有限，且孕雌真正的产仔穴禁食与普通个体夏季上岸不是同一种生理情境。

### 移动、游泳与日常活动

北极熊多数时间独居，母子共同生活、交配期结伴和大型尸体周围的临时聚集除外。遥测显示它们并非漫无目的游荡：移动追随冻结、融化和漂移的海冰，为留在大陆架等高生产力水域，个体甚至常逆着冰漂方向行走。[Polar Bear Range States — Movement and Migration](https://polarbearagreement.org/polar-bear-biology/movement-and-migration)

它们是强壮游泳者，宽大前足提供主要推进；长距离游泳却有能量代价，幼体风险更高。不要填 topSpeedKph，也不要用单个长泳纪录定义全种能力。第四幅图应是普通冰间水道中的稳定游行，头、颈和上背露出水面，不能画成人类蛙泳、海豹式全水下追逐或“被困在最后一块冰”的灾难海报。

极昼、极夜和天气使“昼行/夜行”标签缺乏全种意义；活动可分布在全天。家域又随海冰、生态区、性别和年份剧烈变化，不宜编码一个全球面积。

### 繁殖：延迟着床、产仔穴与慢恢复

交配可从晚冬延续到 6 月，峰值多在 3—4 月；胚胎到秋季才着床，可能受雌兽营养状况影响。孕雌秋季进入产仔穴，幼体在 11 月至次年 1 月初出生，出生体重不足 1 千克；母子在穴内哺乳，到 2 月末至 4 月出穴时幼体约 10 千克。[Polar Bear Range States — Reproduction](https://polarbearagreement.org/polar-bear-biology/reproduction)

每胎通常一至两仔，双仔最常见，三仔少见。雌性约 4—6 岁达到繁殖成熟；幼体在多数地区约两岁春季断奶，常与母亲相处约 2—2.5 年。若幼体存活，母兽通常至少每三年繁殖一次；雄兽虽可较早性成熟，通常到 8—10 岁才实际参与繁殖。低繁殖潜力意味着亚种群在成年死亡增加后恢复缓慢。母子出穴图必须只有成年雌兽与幼体，不能出现“父熊守穴”。

### 生态作用与污染物

北极熊是海冰食物网的顶级捕食者，依赖由海洋初级生产—鱼类—海豹传递而来的高脂能量。它们可作为海冰生态变化和脂溶性污染物生物放大的监测对象；但“顶级捕食者”不等于已证明它们单独控制整个北极生态系统，文案不使用“没有北极熊海豹就会泛滥”等因果口号。

持久性有机污染物、汞等可经长距离传输进入北极，并沿食物链在北极熊体内累积。实验、组织分析和生物标志物能发现暴露及潜在健康效应，但很多亚种群仍缺少把污染暴露直接转换为人口下降率的证据；威胁文案保留“可能影响免疫、内分泌和繁殖，需持续监测”，不宣称已量化全球死亡数。[Polar Bear Range States — Contaminants](https://www.polarbearagreement.org/polar-bear-biology/contaminants)

### 威胁与保护：气候是全球主轴，管理必须落到地方

全球首要威胁是人类驱动气候变化造成的海冰消失、破碎、提前融化和推迟冻结。后果包括更短的海豹捕猎季、更长禁食、猎场漂向低生产力深水区，以及体况、幼体存活和繁殖下降；响应会因海区生产力和管理历史而异。[Polar Bear Range States — Circumpolar Action Plan 2015–2025](https://polarbearagreement.org/circumpolar-action-plan) [USFWS 2023 five-year review FAQ](https://www.fws.gov/page/polar-bear-5-year-status-review-FAQ)

其他压力包括人类造成的死亡、非法猎杀、不可持续捕获、人与熊冲突、油气和矿业开发、航运与旅游干扰、油污、持久性污染物、病原体及猎物变化。合法的原住民生计捕猎具有重要文化与食物意义，且在多个地区由共同管理体系监测；不能把它直接写成“盗猎”。正确边界是：基于亚种群状态、性别年龄结构和不确定性的适应性捕获管理，同时打击非法贸易并随海冰恶化及时调整。[Regehr et al. 2025 — sustainable harvest principles](https://doi.org/10.1111/cobi.70010) [ECCC proposed management plan 2025](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/management-plans/polar-bear-proposed-2025.html)

人与熊冲突风险会随上岸时间、聚落吸引物和海岸活动变化。优先措施是密闭垃圾与食物、社区巡护、预警、专业非致死驱离、事件记录和安全教育，而不是让公众近距离接触或投喂。工业与航运需避让产仔穴和关键迁移区、设定时空缓冲、限制干扰并具备低温海域溢油响应能力。

### 国际法律与当前计划周期

- **CITES 附录 II**：北极熊自 1975 年随熊科高阶元列入附录 II。附录 II 是对国际贸易实施许可与非危害性判断，不是全球绝对贸易禁令，也不是 IUCN 等级。[CITES 现行附录](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)
- **CMS 附录 II**：2014 年列入，现行 2026 附录仍在 Appendix II，不在 Appendix I。它强调跨境合作，不替代 CITES 贸易规则。[CMS 2026 附录](https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf)
- **1973 年《保护北极熊协定》**：加拿大、丹麦/格陵兰、挪威、苏联/俄罗斯和美国构成五范围国合作框架，要求保护生态系统，尤其是产仔、觅食和迁移生境，并协调科研与管理。[联合国条约资料](https://treaties.un.org/pages/showDetails.aspx?objid=0800000280363c19)
- **环北极行动计划（CAP）**：标题周期为 2015—2025，最终审查在 2026 年发布。本文用其威胁类别和行动体系作为最近完成的共同战略基线，但不把它称作“仍处实施期的新十年计划”。[CAP 页面](https://polarbearagreement.org/circumpolar-action-plan) [CAP Final Review](https://polarbearagreement.org/objective-6a/objective-6-key-progress-reports/circumpolar-action-plan/cap-final-review)

圈养繁殖和放归不能替代海冰气候行动；跨国减排、关键生境保护、亚种群监测、共同管理和人与熊共存必须同时推进。

## 推荐上架的关键事实

1. 北极熊是依赖海冰接近海豹的环北极海洋顶级捕食者，陆地只是部分亚种群的季节性避难和产仔空间。
2. IUCN 当前为 VU、趋势 Unknown、2015 年评估、标准 A3c；A3c 指未来三代因生境下降而预测的减少，不是所有亚种群已经同步下降。
3. PBSG 当前承认 20 个管理亚种群；东南格陵兰在 2024 年成为第 20 个，它们不是 20 个亚种。
4. 最近全球估算仍为约 26,000 只总个体（95% CI 22,000—31,000），但资料来自不同年份与方法，不能当作 2026 实时成熟个体普查。
5. PBSG 2024 的短期趋势拼图为 2 增、5 稳、3 降、10 资料不足；不同时间窗和大量缺口解释了全球趋势为何仍标 Unknown。
6. 环斑海豹是最关键猎物；鸟、浆果和植被虽会被利用，通常不足以替代高脂海洋哺乳动物带来的能量。
7. 只有孕雌通常在冬季长期留在产仔穴，其他北极熊仍在海冰活动；每胎通常一至两仔，慢繁殖限制恢复速度。
8. 全球首要保护任务是减缓温室气体排放，同时在地方层面保护关键生境、监测并共同管理捕获、减少冲突和污染。

## 不应写入或应删除的说法

- “北极熊生活在南极，和企鹅相遇。”
- “现存精确 26,000 只”或“成熟个体 22,000—31,000 只”。
- “全球种群正在下降”作为 IUCN trend 字段；当前正式字段是 Unknown。
- “20 个亚种”“20 个完全隔离的种群”或继续使用已经过时的“全球 19 个种群”。
- “冰岛是常住范围国”；MDD 的问号记录应按迷行/存疑处理。
- “毛是白色实心光纤，会把光和热导向黑色皮肤。”
- “北极熊冬天都冬眠”；通常只有孕雌长期进入产仔穴。
- “夏季靠浆果和鸟蛋就能适应无冰北极”或“东南格陵兰证明它们不需要冰”。
- “能游某个固定最大距离”“固定家域”“固定时速”作为跨全种能力值。
- “所有合法原住民捕猎都是盗猎”或“CITES II 等于全面禁止贸易”。
- “北极熊独自控制整个北极生态系统”或“圈养繁殖可补偿海冰消失”。

## 结构化字段取值与保守处理

| 字段 | 推荐值 | 边界与理由 |
| --- | --- | --- |
| id | species-ursus-maritimus | 稳定学名键。 |
| slug | polar-bear | 与英文通名和现有媒体目录一致。 |
| names.zh / names.en | 北极熊 / Polar Bear | 不强制 aliases。 |
| scientificName | Ursus maritimus | 接受种名；命名信息 Phipps, 1774 留在正文和来源。 |
| taxonomy | Chordata / Mammalia / Carnivora / Ursidae / Ursus | MDD。 |
| conservation | VU / unknown / 2015 / A3c | 不用局部趋势覆盖全球 IUCN 字段。 |
| distribution.realms | marine, terrestrial | 海冰捕食平台 + 陆地产仔/夏季避难；不含 freshwater。 |
| distribution.continents | 北美洲、欧洲、亚洲 | 环北极三洲。 |
| distribution.countries | 加拿大、格陵兰（丹麦王国）、挪威、俄罗斯、美国 | 五范围国；不列迷行的冰岛。 |
| distribution.center | 80, 0 | UI 环北极焦点，不是种群中心。 |
| measurements.length | max 2.8 m | 范围国资料的成年雄性上限；雌性通常不超过 2.5 m。 |
| measurements.weight | max 800 kg | 范围国资料的成年雄性上限；雌性通常不超过 400 kg。 |
| diet.types | carnivore | 不因机会性植物食物增加 omnivore。 |
| metrics.adultMassKg | 不填 | 上限、性别、季节和地点不能组成一个可排序成体范围。 |
| metrics.adultLengthCm | 不填 | 2.8 m 是雄性上限，不是跨性别范围。 |
| metrics.lifespanYears | 不填 | 野外通常寿命、性别差异、最大记录与圈养寿命不能混成区间。 |
| metrics.topSpeedKph | 不填 | 地面短时速度不代表持续能力，且不是本物种核心比较指标。 |
| metrics.estimatedMatureIndividuals | 不填 | 26,000 及 CI 是含依赖幼体的全球总个体估算。 |
| featuredStats.subpopulations | 20 个 | 管理亚种群，不是亚种。 |
| featuredStats.global-estimate | 26,000 只 | 95% CI 22,000—31,000；最近全球估算，不是 2026 普查。 |
| featuredStats.status-mosaic | 2 / 5 / 3 / 10 | 2024 短期增/稳/降/资料不足，时间窗不同。 |
| featuredStats.generation | 11.5 年 | Regehr 2016 平均世代；用于趋势窗口，不是寿命。 |

## 6 幅图像内容与科学边界

六图共同形态总检：**one coherent polar bear body unless a maternal scene explicitly requests three; long neck; small elongated head; small rounded ears; black nose and dark eyes; cream-white coat; broad furred paws; short inconspicuous tail; no grizzly shoulder hump; no penguins or Antarctic scenery**。所有图均为编辑性科学重建，不代表具名个体、地点、调查或事件。

| 序号与文件 | 建议场景 | 必须表现的线索 | 应拒绝的错误与推断 |
| --- | --- | --- | --- |
| 01 01-sea-ice-edge-portrait.webp | 封面：一只健壮成年北极熊沿季节性海冰与狭窄开阔水道边缘安静行走，三分之四侧面，主体偏右、左侧留标题区 | 全身四足和宽掌完整；长颈、小耳、狭长头、黑鼻、乳白毛；自然步态，海冰有低压力脊与裂隙 | 灰熊肩峰、棕毛、巨大尾、咆哮扑镜、夸张消瘦、最后一块小浮冰、企鹅、南极山脉、极光奇观、额外肢体 |
| 02 02-seal-breathing-hole-still-hunt.webp | 一只成年熊在自然、不规则的环斑海豹呼吸孔旁低身静候；不出现海豹，也不表现捕获结果 | 单一小孔、合并海冰、熊头和耳朝孔警觉；完整身体和足掌；安静耐心 | 人工钻出的完美圆孔、钓具或诱饵；可见海豹、血、扑杀、熊跌入水；由画面断言捕猎成功 |
| 03 03-arctic-sea-ice-habitat.webp | 宽幅海冰生态场景：雪覆浮冰、窄水道、压力脊和薄新冰，一只小比例成年熊作为尺度线索 | 生境至少占画面绝大多数；完整连续浮冰和合理空间关系；熊很小但轮廓完整 | 孤立冰块灾难海报、巨浪崩塌、卫星地图、趋势曲线、具体地点；一张静态图被解释为长期海冰变化证据 |
| 04 04-open-water-swimming.webp | 一只成年熊稳定游过浮冰间普通开阔水道，头、颈、肩背露水，形成克制 V 形尾流 | 湿毛成束、真实浮力和水纹、前肢在近表层推进，前方有开阔水 | 人类蛙泳、整身飞出水面、头部孤立、海豹式水下追逐、精疲力竭或救援剧情；由图推断游距、时长、原因 |
| 05 05-mother-and-cubs-den-emergence.webp | 春季通用雪堆穴口外，一只成年雌兽与恰好两只约出穴阶段幼体谨慎移动 | 一雌两仔、无成年雄兽；幼体明显小而四肢完整；母子和穴口均在安全裁切区 | 第三只幼体、父熊守穴、刚出生粉小体型、石洞/冰屋、项圈耳标、游客；任何可定位真实穴址线索 |
| 06 06-passive-coastal-camera-monitoring.webp | 泛化北极海岸，一只远处成年熊与一台被动自动相机保持明显距离，表现非侵入监测 | 一熊一相机；无饵、无捕捉装置、无人；冻原、砾石和初生海冰组成广义环境 | 熊触碰相机、红外光束、诱饵、陷阱、人员近距操作、品牌/坐标；用单张影像识别个体、估算数量或判定趋势 |

六图共享禁止项：血腥捕食、人与熊接触或投喂、动物园布景、文本、水印、品牌、可识别坐标、多余或融合肢体、鸭蹼式脚、熊猫眼斑、幻想蓝眼、社群式“熊群”、企鹅和任何南极叙事。

## 可直接用于 species.ts 的字段与来源数组建议

下面对象覆盖当前 Species 全部必填字段，并对齐已经准备的六个运行时媒体文件。metrics 刻意留空；媒体裁切上线前仍应依据最终 WebP 实图复核 focalPoint。

~~~ts
const POLAR_BEAR_SOURCE_DATE = '2026-08-20' as const;
const POLAR_BEAR_CONTENT_DATE = '2026-08-20' as const;

const POLAR_BEAR_SOURCES = [
  {
    title: 'ASM Mammal Diversity Database v2.5 — Ursus maritimus',
    url: 'https://www.mammaldiversity.org/taxon/1005936/',
    kind: 'taxonomy',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Ursus maritimus (2015 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T22823A14871490.en',
    kind: 'conservation',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Polar Bear Specialist Group — 2024 Status Report',
    url: 'https://www.iucn-pbsg.org/wp-content/uploads/2024/11/PBSG-Status-Criteria-and-Report_Final_2024Oct7.pdf',
    kind: 'conservation',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Polar Bear Specialist Group — Proceedings of the 20th Working Meeting',
    url: 'https://www.iucn-pbsg.org/wp-content/uploads/2025/09/PBSG-20th-Proceedings_FINAL_20250815.pdf',
    kind: 'conservation',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'Regehr et al. 2016 — Conservation status of polar bears in relation to projected sea-ice declines',
    url: 'https://doi.org/10.1098/rsbl.2016.0556',
    kind: 'conservation',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'Polar Bear Range States — Polar Bear Biology',
    url: 'https://polarbearagreement.org/polar-bear-biology',
    kind: 'general',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'Polar Bear Range States — Habitat Needs and Characteristics',
    url: 'https://polarbearagreement.org/polar-bear-biology/habitat-needs-and-characteristics',
    kind: 'ecology',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'Polar Bear Range States — Diet',
    url: 'https://polarbearagreement.org/polar-bear-biology/diet',
    kind: 'ecology',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'Polar Bear Range States — Movement and Migration',
    url: 'https://polarbearagreement.org/polar-bear-biology/movement-and-migration',
    kind: 'ecology',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'Polar Bear Range States — Reproduction',
    url: 'https://polarbearagreement.org/polar-bear-biology/reproduction',
    kind: 'ecology',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'Polar Bear Range States — Circumpolar Action Plan 2015–2025',
    url: 'https://polarbearagreement.org/circumpolar-action-plan',
    kind: 'conservation',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (effective 5 March 2026)',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'CMS — Appendices I and II (effective 27 June 2026)',
    url: 'https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf',
    kind: 'conservation',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'Environment and Climate Change Canada — Polar Bear Management Plan [Proposed] 2025',
    url: 'https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/management-plans/polar-bear-proposed-2025.html',
    kind: 'conservation',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'U.S. Fish and Wildlife Service — Polar Bear 5-Year Status Review FAQ',
    url: 'https://www.fws.gov/page/polar-bear-5-year-status-review-FAQ',
    kind: 'conservation',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'Parks Canada — Polar Bears in Wapusk National Park',
    url: 'https://parks.canada.ca/pn-np/mb/wapusk/nature/faune-animals/mammiferes-mammals/ours-bears/polaire-polar',
    kind: 'general',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'Thiemann et al. 2008 — Polar bear diets and arctic marine food webs',
    url: 'https://doi.org/10.1890/07-1050.1',
    kind: 'ecology',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'Laidre et al. 2022 — Glacial ice supports a distinct and undocumented polar bear subpopulation',
    url: 'https://doi.org/10.1126/science.abk2793',
    kind: 'distribution',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'Pagano et al. 2024 — Polar bear energetic and behavioral strategies on land',
    url: 'https://doi.org/10.1038/s41467-023-44682-1',
    kind: 'ecology',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
  {
    title: 'Regehr et al. 2025 — International principles for sustainable polar bear harvest',
    url: 'https://doi.org/10.1111/cobi.70010',
    kind: 'conservation',
    accessedAt: POLAR_BEAR_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const polarBear = {
  id: 'species-ursus-maritimus',
  slug: 'polar-bear',
  names: {
    zh: '北极熊',
    en: 'Polar Bear',
  },
  scientificName: 'Ursus maritimus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Carnivora', '食肉目'),
    taxon('Ursidae', '熊科'),
    taxon('Ursus', '熊属'),
  ),
  conservation: conservation('VU', 'unknown', 2015, 'A3c'),
  distribution: {
    realms: ['marine', 'terrestrial'],
    continents: ['北美洲', '欧洲', '亚洲'],
    regions: [
      '阿拉斯加—楚科奇海与波弗特海',
      '加拿大北极群岛、哈德逊湾与詹姆斯湾',
      '巴芬湾、格陵兰海与东南格陵兰峡湾',
      '斯瓦尔巴群岛与巴伦支海',
      '俄罗斯喀拉海、拉普捷夫海和东西伯利亚海',
      '北极海盆及其大陆架边缘',
    ],
    countries: ['加拿大', '格陵兰（丹麦王国）', '挪威', '俄罗斯', '美国'],
    range:
      '环北极分布，南缘主要受季节性海冰范围限制；多数个体使用生产力较高大陆架及群岛水道上方海冰，并随冻结、融化和漂移移动。五个常住范围国为加拿大、格陵兰、挪威、俄罗斯和美国；冰岛只有迷行或存疑记录，不列为常住范围国。',
    center: { lat: 80, lng: 0 },
  },
  habitats: [
    {
      name: '大陆架上方的季节性海冰',
      realm: 'marine',
      description:
        '最关键捕食和交配平台；裂隙、压力脊、海豹的呼吸孔和雪下育幼穴使北极熊能接近环斑海豹与髯海豹。',
      isPrimary: true,
    },
    {
      name: '多年冰边缘、汇聚冰区与北极群岛水道',
      realm: 'marine',
      description:
        '海流和岸线使冰在生产力较高水域聚集，部分高纬亚种群可更久留在冰上；中央深水海盆生产力较低。',
    },
    {
      name: '季节性海岸、岛屿与冻原避难地',
      realm: 'terrestrial',
      description:
        '海冰完全融化的地区，个体夏季可上岸约二至五个月，主要依靠脂肪储备等待秋季冻结。',
    },
    {
      name: '陆地雪堆、冻土和海岸产仔区',
      realm: 'terrestrial',
      description:
        '孕雌在秋季进入雪堆、冻土或泥炭中的产仔穴；位置分散且对干扰敏感，邻近春季海冰猎场很重要。',
    },
  ],
  measurements: {
    length: {
      max: 2.8,
      unit: 'm',
      note: '五范围国共同资料的成年雄性上限参考；雌性通常不超过 2.5 米，不是全体成体的典型值或连续范围',
    },
    weight: {
      max: 800,
      unit: 'kg',
      note: '五范围国共同资料的成年雄性上限参考；雌性通常不超过 400 千克，体重随性别、季节和体况显著变化',
    },
  },
  diet: {
    types: ['carnivore'],
    foods: [
      '环斑海豹',
      '髯海豹',
      '区域性的格陵兰海豹、冠海豹与港海豹',
      '机会性幼年海象、白鲸与独角鲸',
      '鲸类及其他海洋哺乳动物尸体',
      '少量鸟、蛋、鱼、浆果、植被与海带',
    ],
    description:
      '高度肉食，主要借海冰捕食富含脂肪的环斑海豹和髯海豹；会随地区和机会利用其他海洋哺乳动物及陆地食物，但后者通常无法替代海豹带来的能量。',
  },
  activity: [
    '多为独居；母子、交配期配对和大型食物周围的临时聚集除外',
    '随海冰冻结、融化和漂移移动，并常逆冰漂保持在高生产力大陆架水域',
    '在海豹呼吸孔和雪下育幼穴旁静候或短距离伏击',
    '能稳定游过冰间水道，长距离游泳会增加能量消耗和幼体风险',
    '季节冰区夏季上岸后多休息并依靠脂肪，等待秋季重新结冰',
    '通常只有孕雌冬季长期处于产仔穴，其他性别年龄仍在海冰活动',
  ],
  tags: [
    '环北极海洋哺乳动物',
    '海冰依赖',
    '顶级捕食者',
    '20 个管理亚种群',
    'IUCN 易危',
    'CITES 附录 II',
    'CMS 附录 II',
  ],
  summary: '借环北极海冰接近海豹、在二十个管理亚种群中呈现不同局地趋势，却共同受长期海冰损失威胁的易危顶级捕食者。',
  description:
    '北极熊是一种海冰依赖的海洋熊类：长颈、小耳、宽掌和厚脂肪层让它能在漂移冰面与冰间水道移动，并在环斑海豹的呼吸孔或雪下育幼穴旁静候。五个范围国把它划为二十个管理亚种群，局地短期趋势从增加到下降不一，且一半仍资料不足；这也是 IUCN 全球趋势继续标为未知的原因。长期风险却清晰指向温室气体驱动的海冰缩短和猎场错位。陆地食物只能提供有限补充，保护必须把减排、关键冰上与产仔生境、原住民共同管理、冲突预防、污染和工业风险控制放在同一框架中。',
  storySections: [
    {
      key: 'sea-ice-platform',
      label: '核心生境',
      title: '脚下的冰，就是通往高脂猎物的路',
      body:
        '北极熊不是把海冰当作白色背景，而是借它接近环斑海豹的呼吸孔、雪下育幼穴和冰缘。冰退到深而贫营养的中央海盆时，熊即使仍留在冰上，也可能与大陆架附近的猎物分离。',
    },
    {
      key: 'twenty-subpopulations',
      label: '种群状态',
      title: '二十块管理拼图，没有一个同步时钟',
      body:
        'PBSG 识别二十个管理亚种群，相邻单元仍会交流。2024 年短期趋势为二增、五稳、三降、十个资料不足，而且时间窗各异；局地改善不能抵消长期失冰风险，局地下降也不能代替全球正式趋势。',
    },
    {
      key: 'seal-energy',
      label: '食性',
      title: '一层海豹脂肪，胜过一地低热量食物',
      body:
        '环斑海豹和髯海豹提供维持大型体型、禁食和繁殖所需的高脂能量。鸟、蛋、浆果和植被虽会被吃，西哈德逊湾追踪研究中的绝大多数熊仍在上岸期失重，说明陆地菜单通常不是等价替代。',
    },
    {
      key: 'moving-ice',
      label: '移动',
      title: '不是漫游，而是在移动的地图上守住猎场',
      body:
        '遥测显示北极熊会跟随冻结和融化，有时逆着冰漂行走，以停留在高生产力大陆架。它们也能游过水道，但长泳耗能；一次记录的距离不能成为所有北极熊的固定能力。',
    },
    {
      key: 'den-and-cubs',
      label: '繁殖',
      title: '雪穴里的新生，建立在母兽脂肪储备上',
      body:
        '孕雌秋季入穴，幼体冬季出生、春季约十千克时随母亲出穴。通常一至两仔、至少约三年的成功繁殖间隔和漫长母育，使成年个体损失后无法快速补回。',
    },
    {
      key: 'climate-and-coexistence',
      label: '保护',
      title: '减排决定长期边界，共同管理守住眼前个体',
      body:
        '减缓温室气体排放是保住长期海冰的根本；地方行动则包括保护觅食、迁移和产仔生境，基于监测与原住民知识管理捕获，密闭吸引物、社区巡护和非致死驱离，并降低航运、油污与污染风险。',
    },
  ],
  keyFacts: [
    '当前 IUCN 为易危、全球趋势未知、2015 年评估、标准 A3c；A3c 指未来三代的生境驱动预测。',
    'PBSG 当前承认 20 个管理亚种群；东南格陵兰于 2024 年成为第 20 个，它们不是亚种。',
    '最近全球估算约 26,000 只总个体，95% CI 为 22,000—31,000；不是 2026 年成熟个体普查。',
    '2024 短期趋势拼图为 2 个增加、5 个稳定、3 个下降、10 个资料不足，评估时间窗并不一致。',
    '环斑海豹是最重要猎物；上岸期的浆果、鸟蛋和植被通常无法替代高脂海洋猎物。',
    '只有孕雌通常长期留在冬季产仔穴；每胎多为一至两仔，慢繁殖限制种群恢复。',
  ],
  threats: [
    '温室气体驱动的海冰减少、破碎、提前融化和推迟冻结',
    '捕猎季缩短、猎场移向低生产力深水区及更长禁食造成的营养压力',
    '不可持续的人类造成死亡、非法捕杀与未充分监测的捕获',
    '上岸时间增加、聚落吸引物和沿岸活动加剧人与熊冲突',
    '油气矿业、航运与旅游对关键觅食、迁移和产仔生境的干扰',
    '海上溢油、持久性有机污染物、汞、塑料及其他污染',
    '病原体、猎物变化与多重压力在营养不良亚种群中的叠加',
    '低繁殖率使成年个体额外死亡难以迅速补回',
  ],
  conservationActions: [
    '通过快速、持续减少温室气体排放限制长期海冰生境损失',
    '保护大陆架海冰猎场、迁移通道、夏季避难地和陆地产仔区，并设置干扰缓冲',
    '以一致方法监测 20 个亚种群的丰度、体况、繁殖、移动、海冰与人类造成死亡',
    '把原住民知识和社区伙伴纳入共同研究、决策与长期治理',
    '采用状态依赖和适应性捕获管理，确保合法生计捕猎可持续并遏制非法贸易',
    '密闭垃圾和食物吸引物，支持社区巡护、预警、非致死驱离和冲突事件复盘',
    '在油气、矿业、航运和旅游规划中避让关键时空，强化低温海域溢油预防与响应',
    '监测污染物、塑料、病原体和猎物变化，并评估与营养压力的累积效应',
    '落实 1973 年协定、CITES 与 CMS 的跨境科研、管理和贸易合作',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'management-subpopulations',
      label: '管理亚种群',
      value: '20',
      unit: '个',
      note: 'PBSG 2024；边界类似管理单元，不是 20 个亚种',
    },
    {
      key: 'global-estimate',
      label: '最近全球估算',
      value: '26,000',
      unit: '只总个体',
      note: '95% CI 22,000—31,000；不同年份资料汇总，不是 2026 同步普查或成熟个体数',
    },
    {
      key: 'short-term-status',
      label: '短期增 / 稳 / 降 / 资料不足',
      value: '2 / 5 / 3 / 10',
      unit: '个亚种群',
      note: 'PBSG 2024；各单元趋势时间窗不同',
    },
    {
      key: 'generation-length',
      label: '平均世代长度',
      value: '11.5',
      unit: '年',
      note: '用于 IUCN 与 PBSG 趋势窗口，不是寿命',
    },
  ],
  media: {
    image: './images/species/polar-bear/01-sea-ice-edge-portrait.webp',
    alt: '环北极季节性海冰边缘，一只长颈、小圆耳、乳白毛的成年北极熊在狭窄开阔水道旁安静行走，完整全身位于画面右侧',
    focalPoint: { x: 0.7, y: 0.56 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/polar-bear/02-seal-breathing-hole-still-hunt.webp',
        alt: '合并的北极海冰上，一只成年北极熊低身守候在单个自然不规则的海豹呼吸孔旁，画面没有海豹或捕获结果',
        title: '呼吸孔旁的静候',
        caption: '海冰让北极熊接近环斑海豹；画面只示意静候行为，不证明孔中有海豹或捕猎成功。',
        focalPoint: { x: 0.5, y: 0.58 },
      },
      {
        image: './images/species/polar-bear/03-arctic-sea-ice-habitat.webp',
        alt: '宽阔环北极海冰由雪覆浮冰、窄水道、压力脊和薄新冰组成，一只完整但很小的北极熊在中右侧行走',
        title: '一张不断移动的猎场地图',
        caption: '海冰类型、漂移和下方海洋生产力共同决定生境质量；这是一幅广义生态场景，不是具体地点或趋势图。',
        focalPoint: { x: 0.64, y: 0.54 },
      },
      {
        image: './images/species/polar-bear/04-open-water-swimming.webp',
        alt: '一只成年北极熊稳定游过海冰浮块之间的深蓝灰色水道，湿润头颈和上背露出水面并形成克制尾流',
        title: '游过冰间水道',
        caption: '游泳是海冰景观中的正常移动方式；单幅图不能给出距离、时长、目的地或能量代价。',
        focalPoint: { x: 0.5, y: 0.55 },
      },
      {
        image: './images/species/polar-bear/05-mother-and-cubs-den-emergence.webp',
        alt: '早春通用海岸雪堆产仔穴外，一只成年雌性北极熊带着恰好两只小幼体谨慎走过积雪，没有成年雄兽',
        title: '从雪穴走向春季海冰',
        caption: '幼体在冬季穴内出生，春季约十千克时随母亲出穴；场景不代表真实家族、日期或可定位穴址。',
        focalPoint: { x: 0.53, y: 0.58 },
      },
      {
        image: './images/species/polar-bear/06-passive-coastal-camera-monitoring.webp',
        alt: '泛化北极海岸冻原上，一只远处成年北极熊与左前景的一台无饵被动自动相机保持明显距离，现场没有人员',
        title: '不接触个体的海岸监测',
        caption: '自动相机可补充出现和行为记录；单张照片不能识别个体、估算丰度或判定亚种群趋势。',
        focalPoint: { x: 0.61, y: 0.6 },
      },
    ],
  },
  sources: POLAR_BEAR_SOURCES,
  featured: true,
  publishedAt: POLAR_BEAR_CONTENT_DATE,
  updatedAt: POLAR_BEAR_CONTENT_DATE,
} satisfies Species;
~~~

## 来源清单与用途边界

- [Mammal Diversity Database — *Ursus maritimus*](https://www.mammaldiversity.org/taxon/1005936/)：接受名、命名作者、目/科/属、英文名和当前国家记录；Iceland? 只能解释为迷行或存疑，不能覆盖五范围国框架。
- [IUCN Red List 2015 assessment](https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T22823A14871490.en)：VU、Unknown、A3c、评估年与全球风险逻辑；不能用其评估时点数据冒充当前同步普查。
- [PBSG 2024 Status Report](https://www.iucn-pbsg.org/wp-content/uploads/2024/11/PBSG-Status-Criteria-and-Report_Final_2024Oct7.pdf)：20 个亚种群、边界性质、短长期趋势、海冰指标、亚种群数量与最近全球估算；亚种群年份和方法差异很大。
- [PBSG 20th Working Meeting Proceedings](https://www.iucn-pbsg.org/wp-content/uploads/2025/09/PBSG-20th-Proceedings_FINAL_20250815.pdf)：2015 评估仍是重评基线、新评估准备和专家工作状态；会议讨论不等于已经发布的新 Red List 结论。
- [Regehr et al. 2016](https://doi.org/10.1098/rsbl.2016.0556)：世代长度、三代窗口、海冰下降与不同减少阈值的概率；是概率模型，不是确定预言。
- [Polar Bear Range States biology pages](https://polarbearagreement.org/polar-bear-biology)：五范围国共同的体型、总体生境、食性、移动和繁殖概述；最大值不能当典型值，子页面仍可能保留旧的 19 亚种群表述，当前数量以 PBSG 2024 为准。
- [Parks Canada — Wapusk](https://parks.canada.ca/pn-np/mb/wapusk/nature/faune-animals/mammiferes-mammals/ours-bears/polaire-polar)：毛、足掌、当地成年雌雄质量和季节生活；Wapusk/西哈德逊湾数据不能推广为全范围固定值。
- [Thiemann et al. 2008](https://doi.org/10.1890/07-1050.1)：加拿大多亚种群、长期脂肪酸食谱；支持区域与性别差异，不给全球固定猎物比例。
- [Pagano et al. 2024](https://doi.org/10.1038/s41467-023-44682-1)：西哈德逊湾 20 只个体在一次 19—23 天上岸研究中的能量收支、游泳和食物行为；不代表所有地区与年份。
- [Laidre et al. 2022](https://doi.org/10.1126/science.abk2793)：东南格陵兰遗传、移动和冰川 mélange 使用；是特殊区域适应，不能证明全球脱离冰上捕食平台。
- [USFWS 2023 five-year review](https://www.fws.gov/page/polar-bear-5-year-status-review-FAQ)：美国 ESA 维持 Threatened、海冰主威胁、其他压力与共管行动；美国法律等级不等于 IUCN VU。
- [ECCC Polar Bear Management Plan [Proposed] 2025](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/management-plans/polar-bear-proposed-2025.html)：加拿大科研、原住民知识、捕获、冲突与污染行动；来源标题必须保留 Proposed，不能表述为最终生效计划。
- [CITES 2026 Appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) 与 [CMS 2026 Appendices](https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf)：分别支持 CITES II 与 CMS II；二者法律含义不同，也都不替代 IUCN 风险判断。
- [1973 Agreement/CAP](https://polarbearagreement.org/circumpolar-action-plan)：五范围国合作、关键威胁和行动类别；CAP 标题期已经在 2025 年结束，2026 final review 是回顾而非自动续期。
- [Regehr et al. 2025](https://doi.org/10.1111/cobi.70010)：状态依赖、透明且能处理不确定性的可持续捕获原则；不用于给任一亚种群直接设定配额。

## 仍应保留的不确定性与更新触发点

1. PBSG 正在推进新的全球 IUCN 评估。正式新评估一经发布，应同时复核 code、trend、criteria、assessedYear、世代长度、全球范围与威胁，而不是只替换年份。
2. 26,000（95% CI 22,000—31,000）仍是最近全球估算，但不是当前同步普查。任何新估值进入产品前必须区分总个体/成熟个体、估值年份、纳入单元、缺失单元和统计区间。
3. 2024 亚种群表有一半短期趋势为 Data Deficient，另一些估值已超过十年。新区域研究应只更新对应亚种群，不能自动改写全球 IUCN trend。
4. 东南格陵兰亚种群的计划评估和边界研究可能很快更新其丰度、趋势与生态区归属；在此之前继续写 Unknown/Data Deficient。
5. 亚种群边界会随新遥测、遗传和气候资料调整，也可能随海冰变暖而动态位移。20 是当前管理框架，不是永恒自然常数。
6. 体质量和长度具有强烈性别、季节、妊娠和区域差异。获得标准化全范围数据前，metrics 保持空对象比制造宽泛区间更可靠。
7. CITES、CMS、美国 ESA、加拿大 SARA/COSEWIC 和各范围国捕获制度是不同尺度的法律体系；任何一项更新都不应被误写为 IUCN 全球等级改变。
8. 2015—2025 CAP 已完成最终审查。若范围国正式通过后续共同计划，应替换 CAP 时效说明，并核对威胁类别、指标和行动优先级。
9. 影像只能表达经证据约束的通用场景。它们不能证明具名地点、个体身份、捕猎成功、游泳距离、产仔穴位置、丰度或趋势；上线验收需继续保持这些说明。
