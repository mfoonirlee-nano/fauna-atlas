# 大猩猩（西部大猩猩，*Gorilla gorilla*）完整物种档案研究

- 检索与核验日期：2026-08-20
- 使用范围：`src/data/species.ts` 的大猩猩新条目、详情页长文、数字卡，以及 6 幅物种图像的设计与验收
- 证据标准：分类与名称优先采用美国哺乳动物学会 Mammal Diversity Database（MDD）；全球保护状态采用 IUCN Red List；国际法律地位采用 CITES 与 CMS；数量、体型、食性、行为、繁殖、生态作用和威胁只补充 IUCN/SSC 专家文件、权威科研机构资料与同行评审原始研究。百科、商业动物页、没有样本口径的“力量倍数”和拼接不同大猩猩类群的数字不进入推荐字段。
- 物种边界：本文主名“**大猩猩**”按中国 CITES 官方名录指 ***Gorilla gorilla***，同时用“**西部大猩猩**”作消歧别名；二者在本文均只指这个物种，包括西部低地大猩猩 ***G. g. gorilla*** 与克罗斯河大猩猩 ***G. g. diehli***，不混入东部大猩猩 ***G. beringei***、山地大猩猩 ***G. b. beringei*** 或格劳尔大猩猩 ***G. b. graueri*** 的分布、数量、长毛外形、竹林/火山生境和恢复趋势。[中华人民共和国 CITES 公约履约工作办公室 — 名录](https://www.cites.org.cn/zxgg/zxzn/202404/t20240419_770803.html) [MDD — *Gorilla gorilla*](https://www.mammaldiversity.org/taxon/1000717/) [IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en)
- 敏感信息处理：分布只到国家、跨境景观和广义森林类型；不记录克罗斯河亚种的小群位置、近期巢址、相机点、样品点或巡护路线。地图 `center` 只是大尺度界面焦点，不是种群中心或可寻找个体的位置。
- 当前性说明：截至本次核验，IUCN SSC 灵长类专家组仍公开列出西部低地亚种的 2015—2025 区域行动计划和克罗斯河亚种的 2014—2019 修订行动计划，未在其行动计划目录或 IUCN Library 找到已经取代二者的新周期正式计划；本文用旧计划提炼仍有效的行动类别，但不把其目标年限写成“当前仍未到期”。疾病防控则采用 2025 年更新指南。[IUCN SSC Section on Great Apes — Action Planning](https://www.iucngreatapes.org/action-planning) [IUCN 2025 great-ape health update](https://doi.org/10.2305/JEPK4717)

## 结论摘要

### 分类、名称与两个亚种的边界

当前接受名为 ***Gorilla gorilla* (T. S. Savage in T. S. Savage & Wyman, 1847)**，MDD ID 为 **1000717**，标准英文名是 **Western Gorilla**；分类为动物界—脊索动物门—哺乳纲—灵长目—人科—大猩猩属。产品中文主名采用中国 CITES 官方名录的“**大猩猩**”，别名保留“**西部大猩猩**”以与 *Gorilla beringei* 消歧；任何出现主名的标题或卡片都应同时显示学名或英文名，避免把它误读为整个 *Gorilla* 属。[中华人民共和国 CITES 公约履约工作办公室 — 名录](https://www.cites.org.cn/zxgg/zxzn/202404/t20240419_770803.html) [MDD](https://www.mammaldiversity.org/taxon/1000717/)

物种下现行保护和生态资料区分两个亚种：

- **西部低地大猩猩 *G. g. gorilla***：占物种绝大多数，分布在西部赤道非洲的低地、沼泽与部分次生森林；
- **克罗斯河大猩猩 *G. g. diehli***：局限在尼日利亚—喀麦隆边境破碎的丘陵和山地森林，数量远少、群体更孤立。

“Western Gorilla / 西部大猩猩”是物种，“Western Lowland Gorilla / 西部低地大猩猩”只是其中一个亚种。封面可以选较有影像资料的西部低地亚种作代表，但标题、学名和保护状态仍必须写物种级；若图注明确写克罗斯河亚种，则不能套用西部低地亚种的种群估计、平均群体大小或典型沼泽生态。[IUCN species assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en) [IUCN Cross River Gorilla action plan](https://portals.iucn.org/library/sites/library/files/documents/IUCN-2014-013.pdf)

东部大猩猩是另一个物种 ***Gorilla beringei***。大众视觉中最常见的卢旺达/乌干达火山、竹林、长而浓密黑毛的“山地大猩猩”属于东部物种；不能把这些影像线索用作西部大猩猩封面。MDD 将两者列为相邻但独立的接受种。[MDD — Western Gorilla](https://www.mammaldiversity.org/taxon/1000717/) [MDD — Eastern Gorilla](https://www.mammaldiversity.org/taxon/1000716/)

### IUCN：2016 是评估年，2018 是修订版出版年

当前可追溯的物种级结论为 **极危 Critically Endangered（CR）**、种群趋势 **下降**、标准 **A4bcde**。正式评估日期为 **2016-04-01**；现行 DOI 指向 2018-2 发布的“2016 assessment amended version”，修订内容纳入了西部低地亚种的新数量估计。因此仓库应写 `conservation('CR', 'decreasing', 2016, 'A4bcde')`，不能因为 DOI 和引文标题含 2018 就把 `assessedYear` 改成 2018。[IUCN Red List — amended 2016 assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en)

`A4bcde` 是一个横跨过去与未来的三代下降判断，并不表示研究者已连续普查 66 年。评估采用约 **22 年**的世代长度，以 **2005—2071 年、共 66 年**为三代窗口；即使把西部低地亚种的年下降率保守取作约 2.56%，推演的三代减少仍超过 80%。字母依据组合涵盖丰度指数、范围或生境质量下降、实际或潜在利用，以及病原体等因素。推荐文案写“在威胁持续的模型情景下，三代减少预计超过 80%”，不要写成“过去 66 年已经实测减少 80%”。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en)

### 数量：把物种、亚种、成熟个体与断奶个体分开

2018 年 *Science Advances* 的范围级模型整合 2003—2013 年、59 个地点和约 61,000 人日的调查，估计 **2013 年西部低地大猩猩有 361,919 只断奶个体**（95% CI：302,973—460,093）。同一分析估计该亚种 2005—2013 年减少 **19.4%**、平均每年约 **2.7%**。这个高于旧估计的总量与持续快速下降可以同时成立：发现“比过去以为的多”不等于风险消失。[Strindberg et al. 2018](https://doi.org/10.1126/sciadv.aar2964)

这项数字有三条不可省略的限定：它是 **2013 年模型估计**，不是 2026 年实时数量；单位是**断奶个体**，不是成熟个体；研究对象是六国范围内的**西部低地亚种**，不包含尼日利亚—喀麦隆边境的克罗斯河亚种。因此不能把 `361,919` 或其置信区间填入 `metrics.estimatedMatureIndividuals`，也不能写成“西部大猩猩目前精确剩余 36 万只”。[Strindberg et al. 2018](https://doi.org/10.1126/sciadv.aar2964)

克罗斯河亚种的 IUCN 行动计划与物种评估引用 1990—2005 年密集调查，给出约 **250—300 只个体**的历史工作估计，并指出它们散布在约 12,000 平方千米的人类活动景观内。这个数字不是近年的同步普查，12,000 平方千米也不是连续占据面积或单群家域；公开产品若使用，只能写“行动计划依据旧调查估计约 250—300 只”，不能标成当前精确总数。[IUCN Cross River Gorilla action plan](https://portals.iucn.org/library/sites/library/files/documents/IUCN-2014-013.pdf)

### 分布与地图边界

MDD 当前列出七个原生范围国：**安哥拉、喀麦隆、中非共和国、赤道几内亚、加蓬、尼日利亚、刚果共和国**。其中西部低地亚种主要位于安哥拉卡宾达、喀麦隆萨纳加河以南、中非共和国西南部、赤道几内亚大陆部分、加蓬和刚果共和国；克罗斯河亚种仅在尼日利亚—喀麦隆边境出现。两亚种范围相隔，不能把地图涂成从尼日利亚到刚果盆地连续无缺口的一整片。[MDD](https://www.mammaldiversity.org/taxon/1000717/) [Strindberg et al. 2018](https://doi.org/10.1126/sciadv.aar2964)

较早 CMS 与区域行动资料会把刚果民主共和国西南端列入西部低地大猩猩的历史、可能或残存范围；Smithsonian 的当前说明则称该国历史上有记录、现很可能已经局部灭绝。为与当前 MDD 物种清单一致，`distribution.countries` 建议不列刚果民主共和国，并在研究注释保留这一版本差异。CMS 的《大猩猩协定》还继承过 *Gorilla gorilla sensu lato* 的旧分类历史，不能拿协定覆盖的十国名单反推当前 *G. gorilla* 的七个范围国。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/western-lowland-gorilla) [CMS Gorilla Agreement](https://www.cms.int/legalinstrument/gorilla-agreement) [MDD](https://www.mammaldiversity.org/taxon/1000717/)

地图 `center: { lat: 2, lng: 13 }` 只适合把视图聚焦在西部赤道非洲。它不是密度中心，不代表克罗斯河亚种位置，也不应加公开的小种群点标记。`distribution.realms` 只用 `['terrestrial']`；大猩猩会涉水、进入沼泽和森林空地，但没有 freshwater 生命史阶段。

### 生境：不只是“热带雨林”，也不是山地大猩猩的火山竹林

IUCN 将物种适生生境列为热带湿润低地林、热带沼泽林与热带湿润山地林。西部低地亚种使用 terra firma 低地林、沼泽林、河岸林、次生林、林缘和富含姜科/竹芋科地表草本的森林，也会进入被当地称为 **baï** 的天然森林空地和浅水湿地取食水生草本；它不是只住“未受任何扰动的原始雨林”。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en) [IUCN STAR assessment for Central African Republic](https://portals.iucn.org/library/sites/library/files/documents/2024-034-En.pdf)

克罗斯河亚种目前多见于崎岖、偏远的丘陵与山地森林，但原始调查表明，这种“退到高处”的格局主要由低地人类活动和猎杀压力造成，并非低地缺少合适食物。相当一部分生态上适宜、却因人类干扰而空缺的森林仍存在。图像可以表现尼日利亚—喀麦隆边境的湿润山地森林和破碎走廊，却不能画成东非火山、云雾竹林、雪山或高寒草甸。[Imong et al. 2014](https://doi.org/10.1111/acv.12100) [IUCN Cross River action plan](https://portals.iucn.org/library/sites/library/files/documents/IUCN-2014-013.pdf)

“采伐林”也需要有条件地表述。西部低地大猩猩能在管理良好、禁猎有效的林业特许地保持种群，但道路开放、工人营地、猎枪和野生肉运输会把原本难以到达的森林变成高风险区。因而不能把“能住进采伐林”翻译成“商业采伐对它们无害”；真正的保护单元是保护地、缓冲地与受严格管理特许地组成的大尺度连续森林。[IUCN reduced-impact logging guidelines](https://portals.iucn.org/library/sites/library/files/documents/SSC-OP-034.pdf) [Strindberg et al. 2018](https://doi.org/10.1126/sciadv.aar2964)

### 体型与外形：性别差异大，公开数字口径并不统一

西部大猩猩无尾，躯干宽厚，手臂长于腿，通常以弯曲手指的第三、第四指节承重行走；面部皮肤裸露，口鼻短宽，眉嵴明显，耳朵相对头部很小。成年雄性的颅顶与颈后骨嵴更发达，使头部轮廓近锥形；成熟雄兽腰背出现灰白至银色“鞍”，西部低地亚种的银灰可延伸到臀部和大腿。雌兽、幼兽和未成熟“黑背”雄兽不能画成银背。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/western-lowland-gorilla)

西部低地亚种毛色可从灰黑、褐黑到带明显棕褐调，头冠有时偏栗色；这不是红毛猩猩式的橙色长毛。与山地大猩猩相比，它的体毛通常更短、棕色调更常见。幼兽约四岁前臀部可见一个小白毛簇，是年龄信号而不是尾巴。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/western-lowland-gorilla)

2026 年同行评审综合研究按既有野外记录计算的西部大猩猩性别加权均值约为：雄性 **165.9 千克**、雌性 **70.7 千克**，显示强烈性二型。研究汇总的野外西部低地样本为雄性 **112—170 千克**（至少 17 只）、雌性 **68—85 千克**（至少 5 只），但野外称量稀少、部分资料来自博物馆标本且可能重复，不能把这些样本边界包装成两个亚种的生理极值。[Meireles et al. 2026](https://doi.org/10.1002/ajp.70185)

Smithsonian 的公众资料采用另一口径：西部低地成年雄性平均约 136.1 千克、极大个体可到约 226.8 千克，直立时可达约 1.8 米；成年雌性直立可达约 1.4 米。不同来源对野外/圈养、均值/上限和“直立高度”的混用正是宽区间经常失真的原因。推荐正文优先呈现同行评审的雌雄均值；若 `measurements.height` 使用 1.8 米，note 必须写“成年西部低地雄兽短暂直立的上限参考，不是惯常姿态或肩高”。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/western-lowland-gorilla)

当前 schema 无法在 `metrics.adultMassKg` 中表达两个性别均值、亚种差异和样本口径，建议不填标准化体重区间；绝不要使用“能举起自身体重十倍”“比人强 20 倍”等没有可重复实验定义的网络数字。

### 食性：会随果实季节切换的植物食者

西部大猩猩以植物为主，食物包括成熟果实、叶、嫩茎、髓、草本、藤本、树皮以及部分水生草本。西部低地亚种比山地大猩猩更依赖果实；在一个长期直接观察研究点的果实高峰期，果实可占取食时间的 **70%**，果实短缺时则显著增加叶和草本等后备食物。这个 70% 是地点和季节上限，不是全物种全年固定比例。[Doran-Sheehy et al. 2009](https://doi.org/10.1002/ajpa.21118)

两个亚种的食谱不能完全互换。克罗斯河亚种生活在季节性更强的景观，全年以陆生草本和树皮等维持食物，果实丰富时才提高果食；西部低地亚种在不同地点记录到 70—115 种果实植物，并在 baï 与沼泽中长时间取食草本。IUCN 专家资料把社会性蚂蚁和白蚁列为它们有意摄取的主要动物性食物。字段可用 `types: ['herbivore', 'insectivore']`，但描述必须明确“绝大多数为植物，昆虫只占很小部分”；不要写成典型杂食兽或肉食捕猎者。[IUCN STAR assessment](https://portals.iucn.org/library/sites/library/files/documents/2024-034-En.pdf)

“成年雄兽每天吃约 32 千克”来自公众资料，野外鲜重会受食物含水量、季节、性别和体型显著影响，不适合作为全物种固定数字卡。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/western-lowland-gorilla)

### 活动、移动、攀爬与筑巢

西部大猩猩是**昼行、半地栖**的大型灵长类。地面移动以指节行走为主，也能短暂双足站立或涉水；幼体较常攀爬，成年雌兽和雄兽在果实可得时也会进入树上。新的野外运动学研究进一步表明，即使体型很大，西部低地成年个体仍会利用复杂树冠；不能把它们画成完全不会上树，也不能用长时间直立行走替代正常指节步态。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en) [Neufuss et al. — locomotor ecology of wild western lowland gorillas](https://pmc.ncbi.nlm.nih.gov/articles/PMC12779408/)

每天夜间休息前，断奶后的个体通常各自用附近枝叶和草本搭一个新巢，幼兽与母亲同巢；日间休息也可临时筑巢。成年雄兽更常在地面，雌兽和幼体既可在地面也可在树上。巢是压折、交织的临时植被平台，不是反复使用的永久木屋、洞穴、鸟巢或整群共睡的大草堆。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en) [Smithsonian National Zoo](https://nationalzoo.si.edu/animals/western-lowland-gorilla)

西部低地亚种一般年家域约 10—25 平方千米，克罗斯河群体可到约 30 平方千米；家域随食物、季节、群体和研究方法而异，且群体并非以严格边界守卫领地，范围可以重叠。不要把一个家域数字写成每只个体的“领地面积”。[IUCN STAR assessment](https://portals.iucn.org/library/sites/library/files/documents/2024-034-En.pdf)

2005 年论文记录了野生西部低地大猩猩最早的两例工具使用：一只成年雌兽用树枝探水深并辅助涉水，另一只用小树干稳定身体、随后作桥。它证明能力存在，却只有两个事件；若产品以后画工具使用，必须标“罕见野外观察”，不能写成每群都有固定棍棒技术或像黑猩猩那样普遍用工具取食。[Breuer et al. 2005](https://doi.org/10.1371/journal.pbio.0030380)

### 社会结构、交流与繁殖

西部低地大猩猩的繁殖群通常由一只银背成年雄兽、数只成年雌兽及其未成熟后代组成；综合野外资料的平均群体大小约 **8.4 ± 4.3**，约 **5%** 的群体为多成年雄性群。也有独居成年雄兽和非繁殖雄群。图像默认“一只银背 + 雌兽与幼体”最具代表性，但不能把罕见多雄群说成不存在，更不能画成多只银背永久共同统领一个“军团”。[Robbins & Robbins 2018](https://doi.org/10.1002/evan.21721)

群体稳定不等于成员终生不变。长期研究记录到雌性从出生群迁出、成年后再次换群都很常见；雄性成熟后也通常离开。雌兽会在群际接触中选择转移，群体规模、雄兽保护能力、食物竞争与杀婴风险共同影响去留。推荐用“围绕成年雄兽形成、成员可迁入迁出的稳定繁殖群”，不使用“终身一夫多妻家庭”“银背拥有雌性”或“父系首领命令全群作息”等拟人化措辞。[Stokes et al. 2003](https://doi.org/10.1007/s00265-003-0630-3) [Robbins & Robbins 2018](https://doi.org/10.1002/evan.21721)

交流包括叫声、姿势、凝视、触碰、气味和拍胸展示。拍胸、站立、吼叫与冲锋可以出现在高唤醒或威慑情境，却不是它们日常唯一形象；安静觅食、休息、幼体游戏和保持接近同样是群体生活的重要部分。不要把封面默认做成露犬齿扑向镜头的攻击姿势。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/western-lowland-gorilla) [Salmi et al. 2013 — western gorilla vocal repertoire](https://doi.org/10.1111/eth.12122)

妊娠约 **8.5 个月**，通常一胎一仔；幼体最初贴在母亲胸腹，之后骑背并在数年内逐渐独立。刚果共和国 Mbeli Bai 的 25 年研究记录成功产仔间隔平均 **65.3 ± 10.2 个月**（48 个间隔），明显比“每年一胎”慢；这也是成体被猎杀或疾病造成大批死亡后恢复极慢的原因。繁殖可全年发生，不能把出生季节画成固定年度事件。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/western-lowland-gorilla) [Robbins et al. 2022](https://doi.org/10.1371/journal.pone.0275635)

同一 Mbeli Bai 研究中，7 只雌兽的初产年龄平均为 **12.2 ± 0.6 岁**；样本很小且只来自一处西部低地种群，不能硬编码成跨亚种生理阈值。成年雄性约 13 岁后具有典型银背外形，也不应靠“是否银背”判断任意个体的精确年龄。[Robbins et al. 2022](https://doi.org/10.1371/journal.pone.0275635) [Breuer et al. 2009](https://doi.org/10.1002/ajp.20628)

### 生态作用：重要的大型种子传播者，但不是唯一“森林园丁”

西部低地大猩猩会吞下大量果实种子并随移动排出。喀麦隆一项三年研究分析 1,030 份粪便样本，识别出 **58 种**被传播植物，估计每只个体每天排出平均约 **289 粒大于 5 毫米的完整种子**；11 种受试植物中，多数经肠道后萌发不受损或有所提高。夜巢周围较开阔的微生境还可能使部分喜光树种获得较好的建立位置。[Petre et al. 2015](https://doi.org/10.1017/S0266467415000073)

这些结果支持“重要的大型种子传播者”和“参与林隙更新”，但数字来自东南喀麦隆的一处种群与特定年份。不能外推成每只西部大猩猩每天固定播下 289 粒种子，也不能声称没有大猩猩整座刚果盆地森林就必然停止更新；其他灵长类、象、鸟、蝙蝠和其他食果动物也参与传播网络。[Petre et al. 2015](https://doi.org/10.1017/S0266467415000073)

### 威胁：猎杀、疾病与失去连通性的森林相互放大

物种级 IUCN 与两个亚种行动计划支持的核心威胁是：

- **针对野生肉的非法猎杀与机会性捕杀**：成体死亡直接降低繁殖群，幼兽交易还常伴随母兽及其他群员死亡；
- **埃博拉病毒病与其他传染病**：高密度社会群体在暴发区可经历灾难性死亡，人类呼吸道病原也可由研究、旅游或社区接触传给类人猿；
- **农业、工业种植、采矿、聚落和基础设施造成的森林清除与退化**；
- **采伐道路和运输网络提高可达性**，使猎人、枪支和野生肉更容易深入和离开森林；
- **克罗斯河亚种的破碎化与功能连通下降**，即使地图上仍有树冠相连，人类活动也会阻断真实扩散；
- **气候变化与极端天气引起的生境和食物变化**，其全物种数量效应目前不如猎杀、疾病和土地用途变化量化充分；
- **执法不足、腐败、武装冲突和贫困压力**会削弱保护地与社区治理，使上述直接威胁持续。

[IUCN species assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en) [IUCN Western Lowland Gorilla action plan](https://portals.iucn.org/library/sites/library/files/documents/2014-075.pdf) [IUCN Cross River Gorilla action plan](https://portals.iucn.org/library/sites/library/files/documents/IUCN-2014-013.pdf)

埃博拉数字尤其需要限定。2002—2003 年刚果共和国 Lossi 受监测种群中，221/238 只已知个体死亡，遗传检测确认埃博拉；更大范围的样线模型推断暴发区死亡率约 90%—95%，并据此估计数千只死亡。这是特定暴发与区域的灾难性事件，不等于全物种每次暴发都恰好死亡 95%，也不能把模型外推数字冒充尸体逐只计数。[Bermejo et al. 2006](https://doi.org/10.1126/science.1133105)

克罗斯河景观研究进一步表明，1987—2010 年结构连通性约下降 5%，加入人类压力后的功能连通性下降约 11%；遗传证据显示亚群间实际扩散有限。保护不能只看卫星图上“还有一条绿色带”，还要降低猎杀、道路和持续人类干扰，让动物真正敢于并能够穿过走廊。[Imong et al. 2014](https://doi.org/10.1002/ajp.22287)

### 保护行动与国际法律地位

截至 2026-08-20，***Gorilla gorilla*** 列入 **CITES 附录 I**；这对国际商业贸易施加最严格管制，但不是一句“任何情况下全球买卖都绝对非法”可以完整表达的法律规则。它也自 2005 年列入 **CMS 附录 I**，并由 2008 年生效的《大猩猩及其栖息地保护协定》支持范围国协作。CITES/CMS 附录与 IUCN CR 是不同体系，不能互相替代。[CITES Appendices effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CMS species page](https://www.cms.int/species/gorilla-gorilla-0) [CMS Gorilla Agreement](https://www.cms.int/legalinstrument/gorilla-agreement)

推荐保护行动按 IUCN 专家计划和最新健康指南组织：

1. 保护大面积、连通的低地、沼泽和山地森林，把保护地、社区森林、缓冲区与受严格管理的林业特许地作为同一景观规划。
2. 加强巡护、情报、司法追责与野生肉供应链执法；同步记录巡护投入、陷阱、枪声、尸体和案件结果，以判断执法是否真正降低猎杀。
3. 在林业、道路、采矿和农业项目中避让关键种群与走廊，控制新道路进入和废弃道路使用，执行低影响采伐、工人禁猎和独立核验。
4. 以社区共同治理、合法生计和可持续替代蛋白降低对野生肉的依赖；行动必须依据当地使用原因设计，不能把贫困社区整体标签化为“盗猎者”。
5. 对克罗斯河亚种优先维持尼日利亚—喀麦隆跨境核心区与功能走廊，结合社区协议和人类压力监测，而不只是“多种树”。
6. 建立 One Health 疾病监测、死亡报告和暴发响应；研究、巡护与旅游遵守健康筛查、口罩、距离、人员数量和废物管理规则，避免近距离人与大猩猩同框宣传。
7. 用标准化样线巢计数、遗传样本、相机与长期个体/群体研究跟踪数量、年龄性别结构、扩散、繁殖和健康；报告检测概率与模型置信区间。
8. 加强七个范围国间的数据、执法与疫情信息协作，落实 CITES、CMS 和国内保护法；将计划目标按新监测结果定期更新。

[IUCN Western Lowland Gorilla action plan](https://portals.iucn.org/library/sites/library/files/documents/2014-075.pdf) [IUCN Cross River Gorilla action plan](https://portals.iucn.org/library/sites/library/files/documents/IUCN-2014-013.pdf) [IUCN reduced-impact logging guidelines](https://portals.iucn.org/library/sites/library/files/documents/SSC-OP-034.pdf) [IUCN 2025 health update](https://doi.org/10.2305/JEPK4717)

迁地饲养和动物园繁育对教育、科研与保险种群管理有价值，但不能替代野外猎杀控制、疾病防控和森林保护；不建议把“扩大圈养繁殖并放归”列为当前全物种主要恢复措施。

## 推荐的关键事实

1. 西部大猩猩是两个现生大猩猩物种之一，下分西部低地大猩猩和克罗斯河大猩猩两个亚种。[MDD](https://www.mammaldiversity.org/taxon/1000717/) [IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en)
2. 现行 IUCN 结论是 `CR / decreasing / A4bcde`；评估日期是 2016-04-01，2018 是纳入新数量研究的修订版出版年。[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en)
3. 2013 年范围模型估计西部低地亚种约有 361,919 只断奶个体，却同时发现 2005—2013 年下降 19.4%；数量大与下降快并不矛盾。[Strindberg et al. 2018](https://doi.org/10.1126/sciadv.aar2964)
4. 西部低地亚种会随季节在成熟果实与叶、髓、草本等后备食物之间切换；单一研究点的果实高峰可占取食时间 70%。[Doran-Sheehy et al. 2009](https://doi.org/10.1002/ajpa.21118)
5. 西部大猩猩通常以一只银背雄兽、数只雌兽和幼体组成稳定却可迁入迁出的群体；约 5% 的已研究西部群体有多只成年雄兽。[Robbins & Robbins 2018](https://doi.org/10.1002/evan.21721)
6. 它们每晚用附近植被搭新巢，幼兽与母亲同巢；临时巢不是永久住所。[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en)
7. 喀麦隆三年研究在粪便中识别 58 种被传播植物，说明西部低地大猩猩是重要的大型种子传播者。[Petre et al. 2015](https://doi.org/10.1017/S0266467415000073)
8. 猎杀、埃博拉等疾病和道路驱动的森林可达性相互放大；保护必须同时覆盖动物、健康、社区和整片相连森林。[IUCN action plan](https://portals.iucn.org/library/sites/library/files/documents/2014-075.pdf)

## 应删除或避免的说法

- 不把“西部大猩猩”写成“西部低地大猩猩”；后者只是两个亚种之一。
- 不把东非山地大猩猩的数量上升、火山竹林、长而浓密黑毛、卢旺达/乌干达分布或旅游照片套入本条目。
- 不把 2018 当作评估年；schema 的 `assessedYear` 应填 2016，来源标题再注明 2018 修订发布。
- 不写“过去 66 年实测减少 80%”；IUCN 是以 2005—2071 三代窗做过去—未来联合推演。
- 不写“目前精确剩 361,919 只”或把 `[302973, 460093]` 放入成熟个体指标；这是 2013 年西部低地亚种的断奶个体模型估计和置信区间。
- 不把克罗斯河旧估计 250—300 只与西部低地断奶个体数直接相加后伪装成当前物种总数。
- 不把较旧 CMS 十国协定范围当作当前西部大猩猩国家清单；当前 MDD 物种范围采用七国，不列刚果民主共和国。
- 不写“只住原始低地雨林”；西部低地亚种也利用沼泽、baï、次生林和管理得当的林业特许地，克罗斯河亚种则多在受人类压力挤压的丘陵山地森林。
- 不写“严格素食”；植物占绝大多数，但会有意取食蚂蚁与白蚁。也不要反向写成普遍捕猎脊椎动物的杂食兽。
- 不用“每天固定吃 32 千克”“全年 70% 都吃水果”或“每只每天固定传播 289 粒种子”；三者分别受鲜重口径、季节/地点和局地研究限制。
- 不填“强壮程度是人类 X 倍”“可举起 X 吨”或类似无实验定义的力量数字。
- 不把直立高度当作常态肩高，不让大猩猩长距离像人一样双足行走；典型陆地步态是指节行走。
- 不写“银背是一个亚种”或把雌兽、幼兽画成银背；silverback 是成熟雄兽的年龄—性别阶段。
- 不把群体写成终身封闭的“父权后宫”；雌雄都会扩散，雌兽可多次转群，也有独居雄兽和少量多雄繁殖群。
- 不把拍胸、吼叫、冲锋当作日常唯一行为，不默认使用露齿攻击镜头的封面。
- 不把两例野外工具使用扩写成全种固定文化，不画每只个体拿棍捕猎。
- 不写“大猩猩是埃博拉天然宿主”；现有证据支持它们是高死亡率受害者，而不是已确认的维持宿主。
- 不把 CITES 附录 I、CMS 附录 I 和 IUCN CR 当作同一套等级。
- 不公开克罗斯河小群、夜巢、遗传样本、相机或巡护的精确坐标，也不画工作人员与野生个体近距离接触、触摸或投食。

## 量化字段取舍

| 字段 | 推荐值 | 口径与理由 |
| --- | --- | --- |
| `conservation` | `conservation('CR', 'decreasing', 2016, 'A4bcde')` | 2016-04-01 评估，2018-2 修订发布。[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en) |
| `measurements.height` | `{ max: 1.8, unit: 'm' }` | 仅作西部低地成年雄兽短暂直立上限参考；不是肩高、惯常姿态或两个亚种的统一范围。[Smithsonian](https://nationalzoo.si.edu/animals/western-lowland-gorilla) |
| `measurements.weight` | `{ typical: 165.9, unit: 'kg' }` | 2026 同行评审汇总的野外成年雄性加权均值；note 同时写雌性均值约 70.7 千克。不是个体范围。[Meireles et al. 2026](https://doi.org/10.1002/ajp.70185) |
| `metrics.adultMassKg` | 不填 | schema 只能表达连续区间，不能表达两个性别均值、亚种与稀少样本差异；`[70.7, 165.9]` 会被误读为个体范围。 |
| `metrics.adultLengthCm` | 不填 | 没有核得可同时覆盖两亚种、定义一致的成体头体长范围；直立高度不能换算成体长。 |
| `metrics.lifespanYears` | 不填 | Smithsonian 的野外 30—40 年和人类照护可达 50 多年是典型/纪录式概述，当前 schema 无法区分野外期望、已知最大与圈养记录。 |
| `metrics.estimatedMatureIndividuals` | 不填 | 361,919 是 2013 年西部低地亚种断奶个体模型，不是物种成熟个体；克罗斯河估计也来自更早调查。 |
| `featuredStats.subspecies` | `2` 个 | 西部低地大猩猩与克罗斯河大猩猩。 |
| `featuredStats.sexual-mass` | `70.7 / 165.9 kg` | 野外成年雌/雄加权均值；不是最小/最大值。 |
| `featuredStats.generation-window` | `66 年` | IUCN 三代窗口，每代约 22 年；不是连续普查长度。 |
| `featuredStats.wlg-2013` | `361,919 只` | 2013 年西部低地亚种断奶个体模型；95% CI 302,973—460,093，不能显示为当前物种精确总数。 |

## 6 幅图像内容与科学边界

六图共同形态总检：**no tail; very long muscular arms; shorter legs; broad chest and abdomen; dark bare face; short broad muzzle; pronounced brow ridge; small ears; five digits; terrestrial movement on the knuckles; no orange orangutan coat**。选西部低地亚种作代表时再加：**short grey-black to brown-black coat; adult male with a silver saddle extending across lower back, rump and possibly thighs; not the long shaggy jet-black coat of a mountain gorilla**。

| 序号与文件 | 建议场景 | 必须表现的线索 | 应拒绝的错误 |
| --- | --- | --- | --- |
| 01 `01-lowland-rainforest-silverback-portrait.webp` | 封面：西部赤道非洲低地林边缘，一只成熟西部低地银背雄兽以三分之四侧面安静指节行走，主体偏右、左侧留标题区 | 短灰黑至棕黑毛；银灰鞍覆盖腰背并可延至臀腿；锥形头冠、宽胸、长臂短腿、裸露深色脸、小耳、无尾；四肢完整 | 卢旺达火山或竹林；山地大猩猩式长蓬黑毛；橙色红毛猩猩；像人类健美运动员；直立长跑、露齿扑镜、夸张血腥冲锋 |
| 02 `02-seasonal-fruit-tree-foraging.webp` | 果实高峰：一只成年雌兽与一只较大幼体在低矮野生果树上稳定取食，林下仍有叶和草本 | 雌兽无银背；长臂抓持、足部拇趾外展、身体由多点支撑；果实是季节资源，环境为湿润森林；幼体可有小白臀毛簇 | 香蕉园或堆满人类水果；全年“纯果食”暗示；橙毛、长臂摆荡成猩猩；一只巨型银背单臂吊在细枝上；尾巴 |
| 03 `03-swamp-bai-aquatic-herb-feeding.webp` | 西部低地生境：林中 baï 或沼泽浅水，一只银背、成年雌兽和幼体组成的小群分散拉取水生草本 | 水只到小腿或膝部、仍为陆生涉水；一只成熟银背最典型；周围是低地雨林、草本与自然林隙；安静取食 | 把大猩猩画成游泳或潜水动物；热带海滩、红树林或开阔草原；多只银背围成军团；把水草写成全种唯一主食 |
| 04 `04-night-nest-building.webp` | 黄昏林下，一只成年雌兽坐着压折并交织宽叶和柔韧茎，身旁幼兽准备共享新巢 | 临时新鲜植被平台、尺度仅容个体；幼兽与母亲同巢；雌兽无银背；巢在地面或很低处、周围没有人 | 永久木屋、洞穴、鸟式枝巢、人工床铺；整群挤睡同一巢；储存食物；公开真实巢址标记或坐标 |
| 05 `05-mother-infant-social-group.webp` | 低地森林安静休息时段：母兽怀抱或背负幼体，另一雌兽/幼体在近旁，一只银背在稍远处保持警觉 | 幼体贴附母亲、可见克制的小白臀毛簇；一只银背；成员年龄与体型有层级；亲近但不是拟人拥抱摆拍 | 多只成年银背长期共同统领；雄兽抱着所有幼崽、雌兽被排成“后宫”；人类衣物和表情；每只都拍胸吼叫 |
| 06 `06-cross-river-corridor-monitoring.webp` | 克罗斯河保护：尼日利亚—喀麦隆边境的广义湿润丘陵森林走廊，社区巡护员在无动物近距离出现时维护相机或记录林况，远景只留极小的大猩猩轮廓或不出现动物 | 丘陵雨林而非东非火山；连续林带与受压边缘并存；人员有专业装备，在处理样本时戴口罩、手套；不标地点 | 暴露小群、巢或相机的可定位坐标；工作人员触摸、投喂、围堵或与活体自拍；无口罩近距离旅游；把“造林一排树苗”当作功能走廊的全部 |

六图物种边界补充：克罗斯河与西部低地亚种的外部差异不足以靠一幅 AI 图可靠定种。前五图应在素材说明中明确“representative Western Lowland Gorilla, *G. g. gorilla*”；第六图用景观与保护叙事代表克罗斯河亚种，不通过夸张毛色、体型或脸型制造虚假亚种差异。

## 可直接用于 `species.ts` 的字段与来源数组建议

下面对象覆盖当前 `Species` 全部必填字段。数值字段刻意保守；媒体文件名与上面的六图方案一致，生成后仍需按实际裁切复核 `focalPoint`。

```ts
const WESTERN_GORILLA_SOURCE_DATE = '2026-08-20' as const;
const WESTERN_GORILLA_CONTENT_DATE = '2026-08-20' as const;

const WESTERN_GORILLA_SOURCES = [
  {
    title: '中华人民共和国 CITES 公约履约工作办公室 — 物种名录（Gorilla gorilla：大猩猩）',
    url: 'https://www.cites.org.cn/zxgg/zxzn/202404/t20240419_770803.html',
    kind: 'taxonomy',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Gorilla gorilla (assessed 2016; amended 2018)',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database v2.5 — Gorilla gorilla',
    url: 'https://www.mammaldiversity.org/taxon/1000717/',
    kind: 'taxonomy',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (effective 5 March 2026)',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'CMS — Gorilla gorilla (Appendix I since 2005)',
    url: 'https://www.cms.int/species/gorilla-gorilla-0',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC — Western Lowland Gorillas and Central Chimpanzees Action Plan 2015–2025',
    url: 'https://portals.iucn.org/library/sites/library/files/documents/2014-075.pdf',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC — Revised Cross River Gorilla Action Plan 2014–2019',
    url: 'https://portals.iucn.org/library/sites/library/files/documents/IUCN-2014-013.pdf',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC 2025 — Great ape population health, disease control and outbreak response',
    url: 'https://doi.org/10.2305/JEPK4717',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Strindberg et al. 2018 — Guns, germs, and trees determine gorilla density and distribution',
    url: 'https://doi.org/10.1126/sciadv.aar2964',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Imong et al. 2014 — Human activity and Cross River Gorilla range fragmentation',
    url: 'https://doi.org/10.1111/acv.12100',
    kind: 'distribution',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Meireles et al. 2026 — Global Data From Great Ape Zoo Populations Confirm a High Prevalence of Overweight Individuals',
    url: 'https://doi.org/10.1002/ajp.70185',
    kind: 'general',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Smithsonian National Zoo — Western Lowland Gorilla',
    url: 'https://nationalzoo.si.edu/animals/western-lowland-gorilla',
    kind: 'general',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Doran-Sheehy et al. 2009 — Male and female western gorilla diet and fallback foods',
    url: 'https://doi.org/10.1002/ajpa.21118',
    kind: 'ecology',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Robbins & Robbins 2018 — Variation in the social organization of gorillas',
    url: 'https://doi.org/10.1002/evan.21721',
    kind: 'ecology',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Robbins et al. 2022 — Population dynamics of western gorillas at Mbeli Bai',
    url: 'https://doi.org/10.1371/journal.pone.0275635',
    kind: 'ecology',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Stokes et al. 2003 — Female dispersal and reproductive success in western lowland gorillas',
    url: 'https://doi.org/10.1007/s00265-003-0630-3',
    kind: 'ecology',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Breuer et al. 2009 — Physical maturation and life-history classes of free-ranging western gorillas',
    url: 'https://doi.org/10.1002/ajp.20628',
    kind: 'general',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Petre et al. 2015 — Seed quantity and spatial distribution by western lowland gorillas',
    url: 'https://doi.org/10.1017/S0266467415000073',
    kind: 'ecology',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Breuer et al. 2005 — First observation of tool use in wild gorillas',
    url: 'https://doi.org/10.1371/journal.pbio.0030380',
    kind: 'ecology',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Bermejo et al. 2006 — Ebola outbreak mortality in western gorillas',
    url: 'https://doi.org/10.1126/science.1133105',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const westernGorilla = {
  id: 'species-gorilla-gorilla',
  slug: 'western-gorilla',
  names: {
    zh: '大猩猩',
    en: 'Western Gorilla',
    aliases: ['西部大猩猩'],
  },
  scientificName: 'Gorilla gorilla',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Primates', '灵长目'),
    taxon('Hominidae', '人科'),
    taxon('Gorilla', '大猩猩属'),
  ),
  conservation: conservation('CR', 'decreasing', 2016, 'A4bcde'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['非洲'],
    regions: [
      '尼日利亚—喀麦隆边境的克罗斯河森林',
      '喀麦隆萨纳加河以南',
      '西部赤道非洲低地森林',
      '刚果盆地西缘',
      '安哥拉卡宾达与加蓬—刚果共和国森林',
    ],
    countries: ['安哥拉', '喀麦隆', '中非共和国', '赤道几内亚', '加蓬', '尼日利亚', '刚果共和国'],
    range:
      '范围由两个分离的亚种区域构成：克罗斯河大猩猩仅见于尼日利亚—喀麦隆边境的破碎丘陵山地森林；西部低地大猩猩分布于萨纳加河以南至刚果河以北、西部赤道非洲的低地、沼泽和部分次生森林。国家列表按当前 MDD，不把刚果民主共和国的历史或未确认记录列作现存范围。',
    center: { lat: 2, lng: 13 },
  },
  habitats: [
    {
      name: '热带湿润低地林与次生林',
      realm: 'terrestrial',
      description:
        '西部低地亚种的主要生境；terra firma 森林、林缘和草本丰富的恢复林提供成熟果实、叶、髓和地表草本。',
      isPrimary: true,
    },
    {
      name: '沼泽林、河岸林与 baï 森林空地',
      realm: 'terrestrial',
      description:
        '西部低地种群会在浅水沼泽和天然森林空地取食水生草本与矿物质丰富植物；涉水不使其成为淡水物种。',
    },
    {
      name: '克罗斯河丘陵与湿润山地林',
      realm: 'terrestrial',
      description:
        '克罗斯河亚种目前多退守尼日利亚—喀麦隆边境的崎岖森林；低地空缺很大程度反映猎杀和人类干扰，而非食物不适宜。',
    },
    {
      name: '保护地—社区森林—管理特许地连续景观',
      realm: 'terrestrial',
      description:
        '部分大种群位于保护地之外；禁猎、道路管控与低影响采伐决定受管理森林能否成为缓冲区和真实扩散通道。',
    },
  ],
  measurements: {
    height: {
      max: 1.8,
      unit: 'm',
      note: '西部低地成年雄兽短暂直立的上限参考；不是惯常姿态、肩高或两个亚种的完整范围',
    },
    weight: {
      typical: 165.9,
      unit: 'kg',
      note: '2026 同行评审综合研究的野外成年雄性加权均值；成年雌性对应均值约 70.7 千克，二者都不是个体上下限',
    },
  },
  diet: {
    types: ['herbivore', 'insectivore'],
    foods: [
      '季节性成熟果实',
      '叶、嫩茎、髓与藤本',
      '姜科和竹芋科等地表草本',
      '树皮与后备植物',
      '沼泽和 baï 的水生草本',
      '少量蚂蚁与白蚁',
    ],
    description:
      '以植物为绝对主体，并随地点和果实季节在果实、叶、髓、草本和树皮之间切换；只摄取少量社会性昆虫，不能概括成严格素食或典型杂食。',
  },
  activity: [
    '昼行，上午和下午以取食、移动为主，中午常休息',
    '半地栖，陆地以指节行走，也会攀树、短暂直立和浅水涉行',
    '断奶个体每晚用附近植被搭新巢，幼兽与母亲同巢',
    '繁殖群稳定但成员可迁入迁出，也有独居雄兽和非繁殖雄群',
    '群体不严格守卫排他领地，家域可重叠并随食物季节变化',
  ],
  tags: [
    '非洲大型类人猿',
    '两个亚种',
    '刚果盆地森林',
    '季节性果食',
    '种子传播者',
    'IUCN 极危',
    'CITES 附录 I',
    'CMS 附录 I',
  ],
  summary: '由西部低地与克罗斯河两个亚种组成、在西部赤道非洲森林中随果实季节迁食并传播大粒种子的极危类人猿。',
  description:
    '西部大猩猩不是山地大猩猩的另一种叫法，而是独立物种：数量较多的西部低地亚种生活在西部赤道非洲的低地与沼泽森林，克罗斯河亚种则被压缩在尼日利亚—喀麦隆边境的破碎山地森林。它们以植物为主，果实丰富时深入树冠，短缺时转向叶、髓、草本和树皮；吞下并带走的大量种子又参与森林更新。群体通常围绕一只银背雄兽形成，成员却会扩散和换群。非法猎杀、埃博拉等疾病，以及道路把森林变得可进入、可运输的过程共同推动下降。',
  storySections: [
    {
      key: 'two-subspecies',
      label: '物种边界',
      title: '一个西部物种，两种很不一样的处境',
      body:
        '西部低地大猩猩横跨西部赤道非洲大片低地和沼泽森林；克罗斯河大猩猩只剩尼日利亚—喀麦隆边境的破碎丘陵山地种群。二者同属西部大猩猩，却不能共享同一套数量和生境数字；东非的山地大猩猩则属于另一个物种。',
    },
    {
      key: 'seasonal-menu',
      label: '食性',
      title: '果实来时追果，果实少时回到叶与髓',
      body:
        '成熟果实能显著改变西部低地大猩猩的取食时间和移动路线；果实短缺时，叶、嫩茎、髓、地表草本和树皮成为稳定后备。沼泽与 baï 还提供水生草本，蚂蚁和白蚁只是植物菜单之外很小的一部分。',
    },
    {
      key: 'movement-and-nests',
      label: '日常生活',
      title: '长臂撑过林地，也把一晚睡处编进叶丛',
      body:
        '它们大多在地面指节行走，却仍会为果实攀树、浅水涉行，并能短暂双足站立。黄昏时，每只断奶个体把附近枝叶压折成一个新巢，幼兽与母亲同睡；第二天，群体继续随食物移动。',
    },
    {
      key: 'flexible-society',
      label: '社会与繁殖',
      title: '稳定群体，不是封闭不变的家庭',
      body:
        '典型繁殖群有一只银背雄兽、数只雌兽和不同年龄的后代，少数群体有多只成年雄兽。雌雄成熟后都会扩散，雌兽还可能再次换群。妊娠约八个半月、成功产仔间隔约五至六年，使成年个体损失后很难迅速补回。',
    },
    {
      key: 'forest-seed-disperser',
      label: '生态作用',
      title: '把大粒种子带到下一片林隙',
      body:
        '果实种子往往完整通过消化道，随日常移动落在取食路径和夜巢附近。局地三年研究识别出 58 种被传播植物，并发现部分种子在较开阔的巢址微生境有建立机会；大猩猩是森林传播网络的重要成员，而不是唯一园丁。',
    },
    {
      key: 'connected-protection',
      label: '威胁与保护',
      title: '一条路既能切开森林，也能把猎枪带进去',
      body:
        '猎杀和埃博拉能直接夺走个体；道路、采伐营地与土地转换又让原本偏远的森林更易进入，使野生肉更易运出。保护因此必须把巡护执法、社区生计、疾病防控、低影响林业和真实可通行的跨境走廊放在同一张景观图上。',
    },
  ],
  keyFacts: [
    '西部大猩猩包含西部低地大猩猩和克罗斯河大猩猩两个亚种；山地大猩猩属于东部大猩猩。',
    'IUCN 当前为极危、趋势下降、标准 A4bcde；评估年是 2016，2018 为修订版出版年。',
    '2013 年模型估计西部低地亚种约有 361,919 只断奶个体，同时发现 2005—2013 年下降 19.4%。',
    '果实高峰期，单一长期研究点的果实可占取食时间 70%；果实少时会转向叶、髓和草本。',
    '繁殖群通常只有一只成年银背，雌雄都会扩散；约 5% 的已研究西部群体为多成年雄性群。',
    '喀麦隆三年研究在粪便中识别 58 种被传播植物，显示其重要的大粒种子传播作用。',
  ],
  threats: [
    '针对野生肉的非法猎杀、机会性捕杀和陷阱误伤',
    '埃博拉病毒病及其他可造成高死亡或由人类传入的传染病',
    '农业、工业种植、采矿、聚落和基础设施造成的森林丧失与退化',
    '采伐和道路网络提高森林可达性并便利猎杀与野生肉运输',
    '克罗斯河亚种的小种群、破碎分布和功能连通持续下降',
    '气候变化与极端天气改变森林、生境质量和季节性食物',
    '执法不足、腐败、武装冲突和贫困压力削弱长期保护',
  ],
  conservationActions: [
    '保护大面积连续森林，把保护地、社区森林、缓冲区和严格管理特许地连成景观',
    '加强反盗猎巡护、情报、司法追责与野生肉供应链执法，并监测实际成效',
    '在道路、林业、采矿和农业规划中避让关键种群与走廊，控制道路进入并执行低影响采伐',
    '以社区共同治理、合法生计和可持续替代蛋白降低对野生肉的依赖',
    '维持克罗斯河亚种跨尼日利亚—喀麦隆的功能走廊与核心森林',
    '执行 One Health 健康监测、人员口罩和距离规范、死亡报告及疫情响应',
    '结合标准化巢样线、遗传样本、相机和长期研究监测数量、扩散、繁殖与健康',
    '落实 CITES、CMS 与范围国法律，并加强跨境数据、执法和疫情协作',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'subspecies',
      label: '现生亚种',
      value: '2',
      unit: '个',
      note: '西部低地大猩猩与克罗斯河大猩猩',
    },
    {
      key: 'sex-specific-mass',
      label: '野外成年雌 / 雄均重',
      value: '70.7 / 165.9',
      unit: '千克',
      note: '2026 同行评审综合研究的野外加权均值，不是个体最小值与最大值',
    },
    {
      key: 'generation-window',
      label: 'IUCN 三代窗口',
      value: '66',
      unit: '年',
      note: '每代约 22 年；用于过去—未来联合下降模型，不是连续普查时长',
    },
    {
      key: 'western-lowland-2013',
      label: '西部低地亚种 2013 估计',
      value: '361,919',
      unit: '只断奶个体',
      note: '模型估计；95% CI 302,973—460,093，不是当前物种成熟个体总数',
    },
  ],
  media: {
    image: './images/species/western-gorilla/01-lowland-rainforest-silverback-portrait.webp',
    alt: '西部赤道非洲低地森林边缘，一只短棕黑毛、腰臀有银灰鞍的成年西部低地大猩猩安静指节行走，主体位于画面右侧',
    focalPoint: { x: 0.7, y: 0.56 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/western-gorilla/02-seasonal-fruit-tree-foraging.webp',
        alt: '湿润低地森林的野生果树上，一只无银背的成年雌性西部低地大猩猩与一只较大幼体用长臂和足部稳固取食成熟果实',
        title: '果实高峰改变森林路线',
        caption: '果实丰富时可显著增加果食和移动；70% 是单一研究点的季节取食时间上限，不是全年固定食谱。',
        focalPoint: { x: 0.56, y: 0.5 },
      },
      {
        image: './images/species/western-gorilla/03-swamp-bai-aquatic-herb-feeding.webp',
        alt: '低地雨林环抱的 baï 浅水林隙中，一只银背、成年雌兽和幼体组成的小群分散涉水拉取水生草本',
        title: '森林空地里的浅水菜单',
        caption: '部分西部低地种群会在 baï 和沼泽长时间取食草本；这是陆生大猩猩的涉水行为，不是淡水生活史。',
        focalPoint: { x: 0.54, y: 0.6 },
      },
      {
        image: './images/species/western-gorilla/04-night-nest-building.webp',
        alt: '黄昏低地林下，一只成年雌性西部低地大猩猩坐着压折宽叶与柔韧茎搭建仅供一夜使用的地面巢，幼兽在身旁',
        title: '把今晚的睡处编进叶丛',
        caption: '断奶个体通常每晚各自搭新巢，幼兽与母亲同巢；它不是永久木屋或反复使用的鸟式巢。',
        focalPoint: { x: 0.53, y: 0.58 },
      },
      {
        image: './images/species/western-gorilla/05-mother-infant-social-group.webp',
        alt: '低地森林安静休息时，一只母兽背负有小白臀毛簇的幼体，另一只雌兽和幼体在旁，一只银背在稍远处警觉守望',
        title: '稳定，却会变化的繁殖群',
        caption: '一只银背、数只雌兽和幼体最具代表性；成员会迁入迁出，少量西部群体也可有多只成年雄兽。',
        focalPoint: { x: 0.48, y: 0.54 },
      },
      {
        image: './images/species/western-gorilla/06-cross-river-corridor-monitoring.webp',
        alt: '尼日利亚—喀麦隆边境广义湿润丘陵森林走廊中，社区巡护员在没有大猩猩近距离出现时维护相机并记录林况',
        title: '让地图上的绿带成为真正的通道',
        caption: '克罗斯河亚种需要的不只是仍有树冠，还要降低猎杀和持续人类干扰；画面不暴露小群、巢址、相机或巡护坐标。',
        focalPoint: { x: 0.52, y: 0.62 },
      },
    ],
  },
  sources: WESTERN_GORILLA_SOURCES,
  featured: true,
  publishedAt: WESTERN_GORILLA_CONTENT_DATE,
  updatedAt: WESTERN_GORILLA_CONTENT_DATE,
} satisfies Species;
```

## 来源清单与用途边界

- [中华人民共和国 CITES 公约履约工作办公室 — 物种名录](https://www.cites.org.cn/zxgg/zxzn/202404/t20240419_770803.html)：中文主名“大猩猩”；产品另保留“西部大猩猩”作消歧别名，并始终绑定学名 *Gorilla gorilla*。
- [Mammal Diversity Database — *Gorilla gorilla*](https://www.mammaldiversity.org/taxon/1000717/)：接受名、命名作者、目/科/属、英文主名和当前七国分布；不提供两个亚种的完整生活史字段。
- [IUCN Red List — *Gorilla gorilla*](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en)：物种级 CR、下降趋势、A4bcde、评估/发布年份、三代窗口、生境、主要威胁与总体行动；修订版仍以 2016 assessment 为底稿。
- [Strindberg et al. 2018](https://doi.org/10.1126/sciadv.aar2964)：西部低地亚种 2013 年断奶个体估计、置信区间、2005—2013 下降率和保护地/护卫效应；不能当成克罗斯河或成熟个体数字。
- [IUCN Western Lowland Gorilla and Central Chimpanzee Action Plan](https://portals.iucn.org/library/sites/library/files/documents/2014-075.pdf)：直接威胁、优先景观和干预体系；计划期为 2015—2025，当前只能作为最近一轮正式区域策略基线。
- [IUCN Cross River Gorilla Action Plan](https://portals.iucn.org/library/sites/library/files/documents/IUCN-2014-013.pdf)：克罗斯河亚种范围、旧数量估计、社区和跨境走廊行动；计划期为 2014—2019，数字不能伪装成 2026 新普查。
- [IUCN 2025 Great Ape Health Update](https://doi.org/10.2305/JEPK4717)：疾病监测、诊断、预防与暴发响应的最新专家指南；不用于给西部大猩猩重估数量。
- [CITES 2026 Appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) 与 [CMS species page](https://www.cms.int/species/gorilla-gorilla-0)：国际法律工具；不等同 IUCN 风险等级，也不替代 MDD 的当前物种国家清单。
- [Meireles et al. 2026](https://doi.org/10.1002/ajp.70185)：野外性别体重加权均值及西部低地样本范围，并与全球动物园记录比较；野外样本稀少、部分源于博物馆资料，不能当作两个亚种的完整极值。
- [Smithsonian National Zoo](https://nationalzoo.si.edu/animals/western-lowland-gorilla)：西部低地亚种外形、直立高度上限、巢、日常与繁殖概览；圈养和公众资料不得覆盖 IUCN 的野外风险口径。
- [Doran-Sheehy et al. 2009](https://doi.org/10.1002/ajpa.21118)：直接观察的西部低地季节性食谱与后备食物；70% 果食是研究点季节峰值。
- [Robbins & Robbins 2018](https://doi.org/10.1002/evan.21721)、[Stokes et al. 2003](https://doi.org/10.1007/s00265-003-0630-3)、[Robbins et al. 2022](https://doi.org/10.1371/journal.pone.0275635) 与 [Breuer et al. 2009](https://doi.org/10.1002/ajp.20628)：群体组成、扩散、Mbeli Bai 的初产年龄与产仔间隔、成熟阶段；地点均值和年龄估计不应当成所有地点的硬阈值。
- [Petre et al. 2015](https://doi.org/10.1017/S0266467415000073)：种子传播数量、种类和巢址微生境；是单一地区三年研究。
- [Breuer et al. 2005](https://doi.org/10.1371/journal.pbio.0030380)：两例野外工具使用；只证明能力，不证明普遍频率。
- [Bermejo et al. 2006](https://doi.org/10.1126/science.1133105)：Lossi 埃博拉事件的已知个体死亡和区域模型；不能推广成所有疫情固定死亡率。
- [Imong et al. 2014](https://doi.org/10.1111/acv.12100) 与 [Imong et al. 2014 connectivity study](https://doi.org/10.1002/ajp.22287)：克罗斯河亚种受人类活动挤压和功能连通下降；支持“降低干扰与猎杀优先于笼统生态恢复”。

## 仍应保留的不确定性与更新触发点

1. IUCN 物种级底稿的评估日期仍是 2016，尽管 2018 修订纳入新数量；若 Red List 发布新的完整重评，应同步更新等级、标准、趋势、世代长度、范围与 `assessedYear`。
2. 361,919 是 2013 年西部低地断奶个体模型，不可长期充当“当前数量”。新范围级调查若发布，应比较调查范围、巢衰减率、断奶/成熟口径和模型，而不是直接替换一个数字。
3. 克罗斯河亚种的公开总量仍主要依赖较早调查与模型。任何新数量在进入产品前，要确认是总个体、断奶个体、成熟个体、最小已知数还是模型中位数，并避免公开小群位置。
4. MDD 当前不列刚果民主共和国；CMS 和旧行动资料含历史/可能残存记录。只有新的可核实野外证据或权威清单更新才应改变 `countries`。
5. 两个旧区域行动计划都已越过标题周期。新一轮 IUCN SSC 或 CMS 正式计划一经发布，应替换来源数组并复核保护行动优先级。
6. 体重来源在野外/圈养、样本地和统计方式上差异明显；当前字段宁可保留性别均值说明，也不制造一个看似精确的全物种范围。
7. 克罗斯河大猩猩研究明显少于西部低地亚种；条目中多数行为和生活史叙述来自后者或属级综合，不能暗示两个亚种所有参数相同。
8. 气候变化已进入 IUCN 威胁框架，但其相对猎杀、埃博拉和土地用途变化的种群效应仍缺少同等强度的全范围量化；文案应写“正在增加的压力”，不写成已证明的单一首要下降原因。
