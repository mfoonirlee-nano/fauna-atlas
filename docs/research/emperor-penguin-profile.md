# 帝企鹅（*Aptenodytes forsteri*）完整档案研究

- 检索与核验日期：2026-08-15
- 使用范围：`src/data/species.ts` 的帝企鹅条目及详情页文案
- 证据标准：IUCN、BirdLife 红色名录主管机构、南极条约体系、CCAMLR、政府极地机构、权威分类数据库及原始同行评审论文。二手百科、新闻转述和没有稳定一手依据的精确数字不进入推荐字段。

## 结论摘要

### 分类与名称

当前接受名为 ***Aptenodytes forsteri*** G. R. Gray, 1844，分类为动物界—脊索动物门—鸟纲—企鹅目—企鹅科—王企鹅属。ITIS 将其列为有效种，英文名为 Emperor Penguin；其分类记录引自 IOC World Bird List 15.1。WoRMS 也接受同一学名，并将该物种同时标记为海洋和陆地环境物种。[ITIS TSN 174449](https://www.itis.gov/servlet/SingleRpt/SingleRpt?print_version=PRT&search_topic=TSN&search_value=174449) [WoRMS AphiaID 225773](https://www.marinespecies.org/aphia.php?p=taxdetails&id=225773)

仓库现用中文名“帝企鹅”可保留。本轮限定的一手、官方来源没有找到足以把“皇帝企鹅”确认为规范中文异名的命名目录；它是常见直译，但不宜仅因网络使用频率写入结构化 `aliases`。建议暂改为 `aliases: []`，若项目希望保留，应另补正式中文动物名录或国家级物种数据库来源。

### IUCN 状态、标准与种群数字

截至 2026-08-15，帝企鹅最新全球 IUCN 状态是 **濒危 Endangered（EN），标准 A3bc**，由原来的近危（NT）上调。IUCN 于 2026-04-09 正式宣布该变化，并说明评估由 IUCN SSC 企鹅专家组与鸟类红色名录主管机构 BirdLife International 协作完成；BirdLife 的最终咨询决定于 2026-02-16确认推荐 `EN A3bc`。因此现有 `conservation('EN', 'decreasing', 2026, 'A3bc')` 是正确的，不应回退到仍显示 NT 的旧网页或旧数据库快照。[IUCN 2026 announcement](https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn) [BirdLife 2026 Red List forum](https://forums.birdlife.org/2026-1-emperor-penguin-aptenodytes-forsteri/)

`A3` 指依据未来预测、推断或预期的种群减少：对 EN 而言，在十年或三个世代中取较长者、最长不超过 100 年，减少幅度至少 50%。后缀 `b` 表示证据来自适合该物种的丰度指数，`c` 表示分布范围、占据面积或生境面积/范围/质量的下降。这里的核心是**未来风险模型与海冰生境下降**，不是声称已经通过全球同步普查观察到 50% 的历史损失。[IUCN Red List Categories and Criteria v3.1, 2nd ed.](https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf) [BirdLife 2026 Red List forum](https://forums.birdlife.org/2026-1-emperor-penguin-aptenodytes-forsteri/)

IUCN 公告将判定概括为：模型预计到 2080 年代种群约减半，首要驱动是人为气候变化导致沿岸陆缘固定冰过早破裂和减少，从而影响繁殖、觅食与换羽生境。多模型大集合研究显示，不同气候、海冰与生态模型给出的风险幅度不一，但均指向下降；模型不确定性不能被解释为“没有风险”。[IUCN 2026 announcement](https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn) [Jenouvrier et al. 2025](https://doi.org/10.1016/j.biocon.2025.111037)

2026 评估采用的种群量指标为 **2018 年南半球春季约 228,000 只成鸟在繁殖地的卫星影像丰度指数，95% 可信区间 190,000—280,000**。BirdLife 在专家质疑后明确修正了早期草案中的 450,000—520,000，并强调新数字来自卫星影像指数，不是逐只直接计数，也不能可靠等同于繁殖对数或包含所有未到场成鸟的全球总数。`metrics.estimatedMatureIndividuals` 可以记录 `[190000, 280000]`，但展示必须同时写明“2018 春季到场成鸟指数”和方法限制。[BirdLife 2026 Red List forum](https://forums.birdlife.org/2026-1-emperor-penguin-aptenodytes-forsteri/) [LaRue et al. 2024](https://doi.org/10.1098/rspb.2023.2067)

LaRue 等对 50 个繁殖地的 2009—2018 年影像分析给出：2018 年指数低于 2009 年的概率约 81%，中位变化约 −9.6%，但 95% 可信区间跨过零；这支持“很可能减少”，不能单独证明全物种已经按同一速率下降。2025 年对 0°—90°W、约占全球种群三分之一扇区的更新给出 2009—2023 年最佳拟合下降约 22%，作者同样明确说不能判断该扇区是否代表整个南极洲。推荐文案应保留区域与统计边界。[LaRue et al. 2024](https://doi.org/10.1098/rspb.2023.2067) [Fretwell et al. 2025](https://doi.org/10.1038/s43247-025-02345-7)

### 分布与繁殖地目录

帝企鹅是南极特有的环南极海鸟，繁殖地散布于南极大陆几乎整圈海岸，约在南纬 66°—78°，西北南极半岛因陆缘固定冰较不稳定而缺少典型繁殖地。它们不是某个主权国家的“分布国”物种，因此 `countries: []` 合理；应补 `endemicTo: ['南极洲']`，同时保留 `realms: ['marine', 'terrestrial']`，表达其海上取食和冰面/少量陆地活动的双重生活史。[U.S. Fish and Wildlife Service 2021 proposed rule](https://www.fws.gov/sites/default/files/federal_register_document/2021-15949.pdf) [ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?print_version=PRT&search_topic=TSN&search_value=174449) [WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=225773)

截至本次核验，权威资料使用 **66 个已知繁殖地点**。2024 年 BAS 新确认四处地点并记录 Halley Bay 群体迁址；2026 年 Copernicus 数据空间仍使用 66 处这一当前目录数。该数字是会随发现、迁址、暂时缺席和功能性消失而变化的“已知地点目录”，不是 66 个每年同时被占据且成功繁殖的固定群落，更不是种群数量。许多地点从未接受地面访问或航空普查。[British Antarctic Survey 2024](https://www.bas.ac.uk/news/four-new-emperor-penguin-colonies/) [Copernicus Data Space 2026](https://dataspace.copernicus.eu/news/2026-4-27-monitoring-penguins-sentinel-data) [Fretwell et al. 2025](https://doi.org/10.1038/s43247-025-02345-7)

群落位置并非永久不动。卫星影像记录到部分群体在海冰失效后移动数十千米，Halley Bay 成鸟曾大量转移至约 85 千米外的 Dawson-Lambton；新发现地点中也有约 30—40 千米的年际位移。因此 `range` 应写“环南极分布、繁殖地点会随海冰条件迁移”，不能把一张殖民地地图当成永久边界。[British Antarctic Survey 2024](https://www.bas.ac.uk/news/four-new-emperor-penguin-colonies/) [Fretwell et al. 2025](https://doi.org/10.1038/s43247-025-02345-7)

### 生境与年度海冰需求

多数繁殖群落位于岛屿、海岸、冰架或搁浅冰山所固定的**沿岸陆缘固定冰（landfast/fast ice）**。理想繁殖平台要在秋季形成，能承受成鸟和幼鸟，并持续到幼鸟在 11 月至次年 1 月长出防水羽毛、离群入海。少数群落在冰架或沿岸陆地繁殖，说明“全部只在海冰上”并不绝对，但这些替代地点不能消除全物种对海冰年度周期的依赖。[Australian Antarctic Program — Emperor penguin](https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/) [Winterl et al. 2024](https://doi.org/10.1038/s41467-024-48239-8)

海上觅食并非笼统的“开放海洋”：繁殖成鸟会利用可从繁殖地到达的裂隙、冰缘和冰间湖，非繁殖期则进入南大洋大陆架、陆坡及外海。环南极分析显示，陆缘固定冰持续时间、海底地形坡度和年度海冰周期共同影响适生性，不同区域形成不同的生境组合；因此不宜用一套单一海冰阈值解释所有群落。[Labrousse et al. 2023](https://doi.org/10.1126/sciadv.adg8340) [Goetz et al. 2018](https://doi.org/10.3354/meps12486)

换羽也是独立的关键生境阶段。超过一岁的个体每年进行一次“灾难性换羽”，通常在 1—3 月集中更换全部羽毛，约 30—40 天不能下海取食，需要稳定陆缘固定冰、密集浮冰，少数使用岛屿或冰架。2026 年卫星研究首次系统定位多处大型换羽群，并发现 2022—2024 年西南极早期破冰已威胁部分换羽地点；对成鸟生存的种群尺度影响仍需量化。[Fretwell et al. 2026](https://doi.org/10.1038/s43247-026-03231-6)

### 体型、寿命与耐寒适应

帝企鹅是现生体型最大的企鹅。美国鱼类及野生动物管理局综合资料给出身高 **1.0—1.3 米**、体重 **20—41 千克**；澳大利亚南极计划的现行页面给出繁殖季初成鸟可达约 40 千克。体重会在繁殖、长期禁食、育雏前补充脂肪及换羽之间大幅波动，因此推荐使用一套协调的 `[20, 41] kg`，而不是把不同来源的季节极值拼成 `[22, 45] kg`。[U.S. Fish and Wildlife Service 2008 status review](https://www.fws.gov/sites/default/files/federal_register_document/E8-29673.pdf) [Australian Antarctic Program — Emperor penguin](https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/)

野外平均寿命约 **20 年**，已有自由生活个体接近或超过 40 年；澳大利亚南极计划也说明有个体活过 40 年，但多数达不到。`lifespanYears: [20, 40]` 只能理解为“平均值至已知长寿个体量级”，不是典型个体的统计最小—最大区间。现有 `[15, 20]` 既低估长寿记录，也没有清晰来源。[Trathan et al. 2011](https://doi.org/10.1371/journal.pone.0014738) [Australian Antarctic Program — Emperor penguin](https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/)

耐寒适应包括多层鳞片状羽毛和皮下脂肪、相对较小的喙与鳍状翼、鼻腔回收呼气热量，以及四肢动静脉的逆流热交换。冬季降低活动、消耗脂肪并形成拥挤群也属于行为性节能。可以写这些有直接机构说明的机制，不必附会“血液不会结冰”等夸张说法。[Australian Antarctic Program — Emperor penguin](https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/)

### 食性与觅食

帝企鹅是肉食、以鱼为主的海鸟，食谱随群落和季节显著变化。南极银鱼（*Pleuragramma antarcticum*）经常是重要猎物，也取食其他鱼类、南极磷虾和鱿鱼；旧的政府综述显示不同地点鱼、磷虾和头足类的比例变化很大，因此不应把三项按固定比例排序成全物种不变菜单。[Australian Antarctic Program — Emperor penguin](https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/) [U.S. Fish and Wildlife Service 2008 status review](https://www.fws.gov/sites/default/files/federal_register_document/E8-29673.pdf)

澳大利亚南极计划概述成鸟通常每天摄食约 2—3 千克，繁殖或换羽前增脂时可达约 6 千克；这些是科普尺度的日需求量，不适合变成无季节说明的固定 `metrics`。海上追踪还显示非繁殖个体会采用大陆架和大洋环流等不同移动策略，白天与曙暮时潜水通常更深、更久，符合视觉捕食者的特征。[Australian Antarctic Program — Emperor penguin](https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/) [Goetz et al. 2018](https://doi.org/10.3354/meps12486)

### 群聚、交流与移动

帝企鹅高度社会化，却不维护典型繁殖领地。严寒时每平方米可挤入约十只，密集群聚可把热损失降低约一半，内部温度可明显高于外界。这个行为主要降低长期禁食雄鸟的能量消耗；它不是静态圆阵，也不是由某只“领队”组织。[Australian Antarctic Program — Emperor penguin](https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/)

原始影像研究显示，拥挤群约每 30—60 秒出现一次 5—10 厘米的协调小步，移动波贯穿群体，长期累积后重组整体结构；个体也会从迎风侧离开、在背风侧加入。较准确的表述是“协调波动与加入/离开让群体逐步重排并分摊冷热位置”，而不是“外围个体不断主动挤进中心”。[Zitterbart et al. 2011](https://doi.org/10.1371/journal.pone.0020260) [Australian Antarctic Program — Emperor penguin](https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/)

繁殖地没有巢材，个体和亲子需要在数千只外观相似的鸟中依靠独特叫声辨认配偶或幼鸟。群落间还存在移动和繁殖地重选；遗传与追踪研究支持环南极尺度的连通性，所以不能把每个繁殖地点描写成完全封闭的永久亚种群。[Australian Antarctic Program — breeding cycle](https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/breeding-cycle/) [Cristofari et al. 2016](https://doi.org/10.1038/ncomms11842)

### 繁殖与育幼

帝企鹅是唯一把完整繁殖周期推进到南极冬季的企鹅。成鸟通常在 3 月末至 5 月初抵达繁殖地，经历约 6—10 周求偶、配对和产卵；每对只产一枚卵。雌鸟把卵转移到雄鸟脚背，由腹部育儿褶覆盖，随后赴海补充能量；没有用冰雪筑成的巢。[Winterl et al. 2024](https://doi.org/10.1038/s41467-024-48239-8) [Australian Antarctic Program — breeding cycle](https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/breeding-cycle/)

雄鸟单独承担持卵孵化，约 **65—75 天**，研究地平均值约 64 天；但它从抵达群落到幼鸟孵化、雌鸟返回，整体可禁食约四个月。现有“雄鸟独自孵卵约 65 天，其间不食”容易把孵化时长与总禁食期混在一起，也可能把“独自育卵”误读成“不群聚”；推荐拆成两句。[Australian Antarctic Program — breeding cycle](https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/breeding-cycle/) [Winterl et al. 2024](https://doi.org/10.1038/s41467-024-48239-8)

幼鸟多在 7—8 月孵化，初生约 150—200 克，约 6—7 周后才具备较稳定的体温调节能力。此后幼鸟组成“托儿群”，双亲交替赴海、返群喂食；约 11 月至次年 1 月完成幼羽更换并离群入海。若固定冰在防水羽毛长成前破裂，幼鸟可能落水、溺亡或冻死；若冰缘退得太远，双亲觅食往返成本也会上升。[Australian Antarctic Program — breeding cycle](https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/breeding-cycle/) [Winterl et al. 2024](https://doi.org/10.1038/s41467-024-48239-8)

### 潜水能力与寿命数字的展示边界

常规觅食潜水多在约 100—250 米范围、持续数分钟，但个体、季节和研究群差异很大。东南极 93 只自由活动帝企鹅的 137,364 次潜水中，最深记录为 **564 米**，最长记录为 **21.8 分钟**；论文明确指出这两个极值来自不同个体的不同潜水，不能合成一次“564 米并闭气 21.8 分钟”的壮举。[Wienecke et al. 2007](https://doi.org/10.1007/s00300-006-0168-8)

2013 年东罗斯海 20 只非繁殖个体的 96,071 次潜水又记录到 **32.2 分钟**的最长时长，17 次超过此前的 27.6 分钟记录；该样本平均最大潜深约 90.2 米、平均时长约 4.6 分钟。推荐把 564 米和 32.2 分钟作为两个独立统计，并分别注明研究背景；现有“超过 20 分钟”虽不假，却已不是当前可核实的最长记录。[Goetz et al. 2018](https://doi.org/10.3354/meps12486)

### 威胁与证据强度

首要、决定性威胁是人为气候变化造成的海冰季节缩短、陆缘固定冰减少或过早破裂。帝企鹅需要同一年度海冰在繁殖、育幼和换羽的不同月份按时形成并维持；过少会让平台提前消失，过多或冰山阻塞又可能拉长成鸟到开水面的距离。风险因区域和年份而异，但未来模型一致指向整体下降。[IUCN 2026 announcement](https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn) [Jenouvrier et al. 2025](https://doi.org/10.1016/j.biocon.2025.111037)

2022 年别林斯高晋海创纪录低海冰事件中，五个被研究群落有四个发生推定的完全繁殖失败；这是区域极端事件的强证据，不应直接换算为全物种当年幼鸟死亡比例。2022—2024 年早破冰对西南极换羽群的影响又表明，风险不仅针对尚未防水的幼鸟，也可能波及换羽中的成鸟。[Fretwell et al. 2023](https://doi.org/10.1038/s43247-023-00927-x) [Fretwell et al. 2026](https://doi.org/10.1038/s43247-026-03231-6)

气候和海冰还会改变南极银鱼、磷虾等猎物的分布与可达性，但“食物网变化”宜写作与海冰变化相连的风险路径，而不是已经量化的全球独立下降原因。美国 2022 年 ESA 最终规则把旅游和科研干扰、污染物、商业南极磷虾渔业列为额外压力，但当时判断它们尚不是决定物种存续力的驱动因子；因此威胁列表要按证据排序，不能让“渔业”与气候海冰损失看起来同等级。[U.S. Fish and Wildlife Service 2022 final rule](https://www.fws.gov/sites/default/files/federal_register_document/2022-23164.pdf)

船舶穿越繁殖地附近陆缘固定冰会破坏冰面或增加干扰，航空器、游客和科研活动也需控制距离与频率。2026 年南极环境保护委员会报告特别记录了这一船舶风险及新的避让建议。风暴、冰架崩解和大型冰山可造成局地失败，但不能在没有事件归因研究时把每一次局地灾害都直接归于气候变化。[CEP 28 / ATCM 48 report, paras. 89—102](https://documents.ats.aq/ATCM48/cr/ATCM48_cr001_e.pdf)

### 保护措施与法律地位

最关键的保护行动发生在南极以外：迅速、持续减少温室气体排放，降低本世纪后期陆缘固定冰和季节性海冰损失。人口模型显示，接近《巴黎协定》温控目标的情景可显著保留群落和潜在气候避难所；这是概率性模型结论，不是单靠现场管理即可保证的结果。[Jenouvrier et al. 2020](https://doi.org/10.1111/gcb.14864) [Jenouvrier et al. 2025](https://doi.org/10.1016/j.biocon.2025.111037)

南极现场管理仍能减少额外压力：识别并保护较持久的繁殖和换羽避难所，以及与之相连的觅食水域；扩大有代表性的南极特别保护区和海洋保护区网络；在环境影响评价中约束船舶破冰、航空器、游客和科研接近；执行生物安全、污染防控和疾病监测；持续以卫星、航空/地面核验、自动相机、标记和人口统计联合监测。现有 ASPA 只覆盖有限比例的帝企鹅群落，单纯保护繁殖点而不管觅食和换羽连通性不足。[CEP 28 / ATCM 48 report](https://documents.ats.aq/ATCM48/cr/ATCM48_cr001_e.pdf) [Labrousse et al. 2023](https://doi.org/10.1126/sciadv.adg8340)

CCAMLR 对南极磷虾渔业实行以生态系统为基础的预防性管理和空间捕捞限制，保护行动应继续避免捕捞压力集中于捕食者觅食区。需要准确表述的是：当前 CCAMLR 生态系统监测计划（CEMP）的核心指示物种名单并不包括帝企鹅，所以可写“结合 CEMP 猎物/生态系统资料与帝企鹅专门监测”，不能写“CEMP 正在直接监测帝企鹅种群”。[CCAMLR — ecosystem-based management of the krill fishery](https://40years.ccamlr.org/ecosystem-based-management-of-krill-fishery/) [CCAMLR CEMP](https://www.ccamlr.org/en/science/ccamlr-ecosystem-monitoring-programme-cemp)

现行法律和条约状态要区分三个体系：

- **IUCN 全球评估：EN A3bc（2026）**，是灭绝风险评估，不等同于任何国家法律名录。[IUCN 2026 announcement](https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn)
- **美国《濒危物种法》：Threatened**，最终规则自 2022-11-25 生效，并附 4(d) 保护规则；美国法律中的 Threatened 不应翻成 IUCN 的 VU 或 EN。[U.S. Fish and Wildlife Service 2022 final rule](https://www.fws.gov/sites/default/files/federal_register_document/2022-23164.pdf)
- **《南极条约环境保护议定书》附件 II** 已原则性禁止未经许可的捕捉及有害干扰，并要求控制外来物种等风险。[Antarctic Treaty Secretariat — flora and fauna](https://www.ats.aq/e/faflo.html)

截至 2026-08-15，帝企鹅**尚未成为“南极特别保护物种”（Antarctic Specially Protected Species）**。2026 年 CEP 28 多数成员强烈支持指定，也讨论了特别保护物种行动计划，但未能达成共识；委员会仅重申保护优先级、继续监测研究、利用现有管理工具并在休会期继续讨论。任何详情页都不应把“提案”或“多数支持”写成已经通过的法律地位。[CEP 28 / ATCM 48 report, paras. 89—102](https://documents.ats.aq/ATCM48/cr/ATCM48_cr001_e.pdf)

## 应删除或改写的现有说法

- 保持 `conservation('EN', 'decreasing', 2026, 'A3bc')`；这是现有条目少数已经准确反映 2026 新评估的字段。不要被 WoRMS 等尚未同步的 NT 链接覆盖。
- 删除或暂缓 `aliases: ['皇帝企鹅']`，除非补到正式中文命名目录；本轮权威来源只足以确认“帝企鹅”。
- 把 `height: 1.1—1.3 m` 改为同一政府综述的 **1.0—1.3 m**；把拼接的 `22—45 kg` 改为 **20—41 kg**，并注明季节、繁殖和禁食造成显著波动。
- 把 `lifespanYears: [15, 20]` 改为 `[20, 40]`，展示文案必须说明约 20 年是平均量级、约 40 年是自由生活长寿记录量级，而非普通最小—最大范围。
- 增加 2018 年约 228,000 的春季到场成鸟指数及 190,000—280,000 的 95% 可信区间；不得写成“现存精确总数”“繁殖对数”或 2026 年现场普查。
- 增加“66 个已知繁殖地点”，但注明这是动态地点目录，不代表每年 66 处同时占据或成功繁殖。
- 把“雄鸟独自孵卵约 65 天，其间通常不进食”改成“雄鸟承担约 65—75 天持卵孵化；从抵达群落至交接幼鸟，整体禁食可达约四个月”。
- 把“群体会不断轮换位置，让外围个体也有机会进入温暖中心”改成有观测依据的“每 30—60 秒的协调小步形成移动波，配合个体从迎风侧离开、背风侧加入，逐步重组群体”。
- 把“闭气时间可超过 20 分钟”更新为最长可核实 **32.2 分钟**；564 米最深潜水与 32.2 分钟最长潜水来自不同研究，不能合并成同一次潜水。
- 威胁列表应把气候驱动的陆缘固定冰失效放在首位；食物网变化、极端事件、船舶/旅游/科研干扰、磷虾渔业和污染应写出证据等级，不要暗示都已是相同强度的全球种群驱动。
- 不写“已列为南极特别保护物种”或“特别保护物种行动计划已通过”；2026 年会议没有达成共识。
- 不写“CCAMLR CEMP 直接把帝企鹅作为指示物种监测”；需要帝企鹅专项卫星与地面核验，并可结合 CEMP 的食物网背景资料。

## 可直接用于 `species.ts` 的字段建议

以下代码使用仓库现有 helper 和类型；作为整条记录落地时，应保留现有 `media`、`featured` 与 `publishedAt`，或由素材任务另行替换。`center` 只是地图代表焦点，不是科学意义上的分布或种群中心。

```ts
const EMPEROR_PENGUIN_SOURCE_DATE = '2026-08-15' as const;

const EMPEROR_PENGUIN_SOURCES = [
  {
    title: 'IUCN 2026 — Emperor penguin now Endangered due to climate change',
    url: 'https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn',
    kind: 'conservation',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'BirdLife International — 2026 Red List forum: Aptenodytes forsteri',
    url: 'https://forums.birdlife.org/2026-1-emperor-penguin-aptenodytes-forsteri/',
    kind: 'conservation',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'ITIS — Aptenodytes forsteri, TSN 174449',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?print_version=PRT&search_topic=TSN&search_value=174449',
    kind: 'taxonomy',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Australian Antarctic Program — Emperor penguin',
    url: 'https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/',
    kind: 'general',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Australian Antarctic Program — Emperor penguin breeding cycle',
    url: 'https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/breeding-cycle/',
    kind: 'ecology',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'LaRue et al. 2024 — Continental-scale population assessment from satellite imagery',
    url: 'https://doi.org/10.1098/rspb.2023.2067',
    kind: 'distribution',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Fretwell et al. 2025 — Regional emperor penguin population declines',
    url: 'https://doi.org/10.1038/s43247-025-02345-7',
    kind: 'conservation',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Fretwell et al. 2026 — Discovery of Antarctic moulting sites',
    url: 'https://doi.org/10.1038/s43247-026-03231-6',
    kind: 'ecology',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Winterl et al. 2024 — Remote sensing of abundance and breeding success',
    url: 'https://doi.org/10.1038/s41467-024-48239-8',
    kind: 'ecology',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Wienecke et al. 2007 — Extreme dives by free-ranging emperor penguins',
    url: 'https://doi.org/10.1007/s00300-006-0168-8',
    kind: 'ecology',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Goetz et al. 2018 — Habitat preference and dive behavior',
    url: 'https://doi.org/10.3354/meps12486',
    kind: 'ecology',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Zitterbart et al. 2011 — Coordinated movements in an emperor penguin huddle',
    url: 'https://doi.org/10.1371/journal.pone.0020260',
    kind: 'ecology',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'U.S. Fish and Wildlife Service — 2022 ESA final rule',
    url: 'https://www.fws.gov/sites/default/files/federal_register_document/2022-23164.pdf',
    kind: 'conservation',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'CEP 28 / ATCM 48 — 2026 meeting report',
    url: 'https://documents.ats.aq/ATCM48/cr/ATCM48_cr001_e.pdf',
    kind: 'conservation',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

// Replace the existing emperor-penguin record's researched fields with:
{
  id: 'species-aptenodytes-forsteri',
  slug: 'emperor-penguin',
  names: { zh: '帝企鹅', en: 'Emperor Penguin', aliases: [] },
  scientificName: 'Aptenodytes forsteri',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Aves', '鸟纲'),
    taxon('Sphenisciformes', '企鹅目'),
    taxon('Spheniscidae', '企鹅科'),
    taxon('Aptenodytes', '王企鹅属'),
  ),
  conservation: conservation('EN', 'decreasing', 2026, 'A3bc'),
  distribution: {
    realms: ['marine', 'terrestrial'],
    continents: ['南极洲'],
    regions: ['南极大陆沿岸', '威德尔海', '罗斯海', '东南极沿岸', '阿蒙森海—别林斯高晋海', '南大洋'],
    countries: [],
    endemicTo: ['南极洲'],
    range: '繁殖地环绕南极大陆几乎整圈海岸，约分布于南纬 66°—78°；截至 2026 年有 66 个动态的已知繁殖地点，多数位于沿岸陆缘固定冰，非繁殖期在更广阔的南大洋活动。',
    center: { lat: -74, lng: 20 },
  },
  habitats: [
    {
      name: '沿岸陆缘固定冰',
      realm: 'marine',
      description: '首要繁殖平台；需在秋季形成并维持到幼鸟长出防水羽毛，常由岛屿、海岸、冰架或搁浅冰山固定。',
      isPrimary: true,
    },
    {
      name: '南大洋陆架、陆坡与冰缘水域',
      realm: 'marine',
      description: '在裂隙、冰间湖、冰缘、大陆架和陆坡水域潜水捕食鱼、磷虾与头足类；利用区域随季节和群落而变。',
    },
    {
      name: '稳定海冰换羽地',
      realm: 'marine',
      description: '成鸟通常在 1—3 月于稳定陆缘冰或密集浮冰进行约 30—40 天的年度换羽，期间羽毛不防水且不能下海取食。',
    },
    {
      name: '冰架与沿岸裸地',
      realm: 'terrestrial',
      description: '少数群落在海冰条件不佳时使用冰架或陆地，是重要但并不普遍的替代繁殖、停栖或换羽地点。',
    },
  ],
  measurements: {
    height: { min: 1, max: 1.3, unit: 'm', note: '成鸟身高；美国鱼类及野生动物管理局协调范围' },
    weight: { min: 20, max: 41, unit: 'kg', note: '随繁殖、长期禁食、增脂和换羽阶段显著波动' },
  },
  diet: {
    types: ['carnivore', 'piscivore'],
    foods: ['南极银鱼', '其他鱼类', '南极磷虾', '鱿鱼'],
    description: '以鱼类为主，也取食磷虾和头足类；猎物构成随群落、海区和季节显著变化，南极银鱼在许多地点尤其重要。',
  },
  activity: ['南极冬季群居繁殖', '不守繁殖领地', '深潜觅食', '季节性海上移动', '年度灾难性换羽'],
  tags: ['南极特有种', 'IUCN 濒危', '海冰依赖', '深潜海鸟', '极冬繁殖'],
  summary: '在南极冬季陆缘固定冰上繁殖、以群聚保温并潜入南大洋觅食的现生最大企鹅。',
  description: '帝企鹅的一年被海冰时钟精确切分：秋季固定冰形成后成鸟回到群落，雄鸟在极夜中持卵并长期禁食，双亲随后轮流为幼鸟觅食；夏季成鸟又必须在稳定冰面完成不能下海的全身换羽。海冰过早破裂会同时切断繁殖、觅食和换羽环节，使气候变化成为其最主要的全球威胁。',
  storySections: [
    {
      key: 'annual-cycle',
      label: '海冰年历',
      title: '一年的每个关键阶段都要等冰准时出现',
      body: '帝企鹅需要秋季形成的沿岸陆缘固定冰承载繁殖群，并让平台持续到幼鸟换成防水羽毛；到夏季，成鸟还要在稳定海冰或密集浮冰上完成约 30—40 天、不能下海取食的全身换羽。海冰不只是一块繁殖地，而是贯穿整年生活史的基础设施。',
    },
    {
      key: 'adaptation',
      label: '耐寒适应',
      title: '把热量留在躯干，把消耗压到最低',
      body: '多层鳞片状羽毛、皮下脂肪、相对短小的喙和鳍状翼减少散热；鼻腔和四肢的逆流热交换回收热量。冬季雄鸟还降低活动并组成密集群，以保存支撑数月禁食的脂肪。',
    },
    {
      key: 'huddling',
      label: '群聚行为',
      title: '厘米级移动波让拥挤群保持流动',
      body: '拥挤群并非静止圆阵。观测显示，企鹅约每 30—60 秒迈出一次 5—10 厘米的协调小步，移动波穿过整个群体；配合迎风侧离开和背风侧加入，群体逐步重排，让个体分摊冷热位置而不打散保温结构。',
    },
    {
      key: 'breeding',
      label: '繁殖与育幼',
      title: '一枚卵在雄鸟脚背上度过极夜',
      body: '雌鸟产下一枚卵后把它交给雄鸟，雄鸟以育儿褶覆盖并持卵约 65—75 天；从抵达群落到雌鸟归来，整体禁食可达约四个月。幼鸟要到 6—7 周后才能较稳定地调节体温，随后进入托儿群并由双亲轮流喂食。',
    },
    {
      key: 'diving',
      label: '潜水与觅食',
      title: '深潜纪录和长潜纪录并非同一次下潜',
      body: '最深的可靠记录为 564 米；另一项非繁殖个体研究记录到 32.2 分钟的最长潜水。两项极值来自不同研究和不同潜水，常规觅食通常浅得多、短得多，并随光照、海区和猎物改变。',
    },
    {
      key: 'conservation',
      label: '保护与监测',
      title: '现场避让能减压，减排决定长期海冰',
      body: '减少温室气体排放是降低全物种长期风险的核心；南极现场还需保护繁殖与换羽避难所及相连觅食水域，避免船舶切开群落附近固定冰，约束航空器、游客和科研干扰，并用卫星与地面人口统计联合追踪动态的 66 个已知繁殖地点。',
    },
  ],
  keyFacts: [
    '2026 年 IUCN 将帝企鹅上调为濒危 EN A3bc，依据是未来三世代的模型下降与海冰生境损失。',
    '2018 年约 228,000 只是春季在繁殖地出现的成鸟卫星指数，并非逐只全球普查或繁殖对数。',
    '截至 2026 年已知 66 个繁殖地点，但群落会迁址、暂时缺席或失败，地点数不是固定种群数。',
    '雄鸟持卵孵化约 65—75 天，从抵达群落到交接幼鸟的整体禁食可达约四个月。',
    '拥挤群约每 30—60 秒通过 5—10 厘米的协调小步形成移动波，逐步重组而不失去密度。',
    '可靠最深潜水为 564 米；最长 32.2 分钟来自另一项研究，不能合并成同一次潜水。',
  ],
  threats: [
    '人为气候变化导致沿岸陆缘固定冰缩短、减少或在幼鸟离群前过早破裂',
    '海冰和海洋变化改变南极银鱼、磷虾等猎物的分布与可达性',
    '极端低海冰、风暴、冰架崩解或大型冰山造成局地繁殖失败及迁址',
    '夏季换羽地点提前破冰，使羽毛不防水、无法下海取食的成鸟面临风险',
    '船舶穿越固定冰以及航空器、游客和科研活动造成额外干扰',
    '局地集中的磷虾捕捞、污染物、疾病与生物安全风险等次级压力',
  ],
  conservationActions: [
    '迅速、持续减少温室气体排放，限制长期海冰生境损失',
    '保护气候避难型繁殖地、换羽地及与其相连的南大洋觅食水域',
    '扩大有代表性的 ASPA 与 CCAMLR 海洋保护区网络并维护空间连通性',
    '避免船舶穿越群落附近固定冰，规范航空器、游客和科研接近及环境影响评价',
    '以生态系统为基础审慎管理南极磷虾渔业，避免捕捞压力局地集中',
    '结合卫星影像、航空/地面核验、自动相机、标记和人口统计开展环南极长期监测',
  ],
  metrics: {
    adultLengthCm: [100, 130],
    adultMassKg: [20, 41],
    lifespanYears: [20, 40],
    maxDiveDepthM: 564,
    estimatedMatureIndividuals: [190000, 280000],
  },
  featuredStats: [
    { key: 'population-index', label: '2018 春季成鸟指数', value: '约 228,000', unit: '只', note: '95% 可信区间 190,000—280,000；卫星指数，不是直接全球普查' },
    { key: 'breeding-sites', label: '已知繁殖地点', value: '66', unit: '处', note: '截至 2026 年的动态地点目录' },
    { key: 'dive-depth', label: '最深潜水记录', value: '564', unit: '米', note: '与最长时长记录不是同一次潜水' },
    { key: 'dive-duration', label: '最长潜水记录', value: '32.2', unit: '分钟', note: '2013 年东罗斯海非繁殖个体研究' },
    { key: 'incubation', label: '雄鸟持卵孵化', value: '65—75', unit: '天', note: '整体繁殖禁食可达约四个月' },
  ],
  sources: EMPEROR_PENGUIN_SOURCES,
  updatedAt: EMPEROR_PENGUIN_SOURCE_DATE,
}
```

`adultLengthCm` 在当前类型中是唯一可用于体型排序的线性字段；这里暂用政府资料的 100—130 厘米“身高”映射。若 UI 会明确显示“体长”，更严谨的实现是只保留 `measurements.height`，不要把该指标当作解剖学体长。

## 来源清单

以下来源均于 **2026-08-15** 访问；链接优先指向发布机构、正式会议文件、期刊原文或 DOI。

| 主题 | 来源与稳定 URL | 用途 |
| --- | --- | --- |
| 分类 | [ITIS — Aptenodytes forsteri, TSN 174449](https://www.itis.gov/servlet/SingleRpt/SingleRpt?print_version=PRT&search_topic=TSN&search_value=174449) | 接受名、作者年份、分类层级、英文名、IOC 15.1 来源 |
| 分类与环境 | [WoRMS — AphiaID 225773](https://www.marinespecies.org/aphia.php?p=taxdetails&id=225773) | 接受名及海洋/陆地环境；其 IUCN 状态链接可能滞后，不用于保护等级 |
| IUCN 最新状态 | [IUCN — Emperor penguin now Endangered, 9 Apr 2026](https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn) | EN、上调时间、约 2080 年代减半、主因、评估组织 |
| IUCN 决策与人口指数 | [BirdLife — 2026 Red List forum](https://forums.birdlife.org/2026-1-emperor-penguin-aptenodytes-forsteri/) | 最终 A3bc、228,000、190,000—280,000、卫星指数限制及专家修订过程 |
| 红色名录标准 | [IUCN Red List Categories and Criteria v3.1, 2nd ed.](https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf) | A3、EN 50% 阈值及 b/c 后缀定义 |
| 政府综合档案 | [Australian Antarctic Program — Emperor penguin](https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/) | 体型、寿命、耐寒、分布、食性、常规潜水与群聚概览 |
| 繁殖周期 | [Australian Antarctic Program — breeding cycle](https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/breeding-cycle/) | 一枚卵、65—75 天、四个月禁食、孵化、育雏、离群和换羽 |
| 体型与食性综述 | [U.S. Fish and Wildlife Service 2008 status review](https://www.fws.gov/sites/default/files/federal_register_document/E8-29673.pdf) | 1.0—1.3 米、20—41 千克、猎物随群落和季节变化 |
| 分布与美国拟议规则 | [U.S. Fish and Wildlife Service 2021 proposed rule](https://www.fws.gov/sites/default/files/federal_register_document/2021-15949.pdf) | 环南极、约 66°—78°S、陆缘固定冰依赖与五大区域 |
| 美国法律状态及压力排序 | [U.S. Fish and Wildlife Service 2022 final rule](https://www.fws.gov/sites/default/files/federal_register_document/2022-23164.pdf) | ESA Threatened、生效日、气候主威胁及旅游/污染/磷虾渔业次级压力 |
| 当前繁殖地点 | [British Antarctic Survey — four new colonies, 2024](https://www.bas.ac.uk/news/four-new-emperor-penguin-colonies/)；[Copernicus Data Space, 2026](https://dataspace.copernicus.eu/news/2026-4-27-monitoring-penguins-sentinel-data) | 66 个已知地点、新发现、迁址与目录的动态性质 |
| 早期全球卫星基线 | [Fretwell et al. 2012](https://doi.org/10.1371/journal.pone.0033751) | 2009 年卫星基线；仅作历史方法背景，不当作 2026 当前数量 |
| 2009—2018 全球指数 | [LaRue et al. 2024](https://doi.org/10.1098/rspb.2023.2067) | 50 个繁殖地、228,000 指数、−9.6% 中位变化及可信区间 |
| 2009—2023 区域下降 | [Fretwell et al. 2025](https://doi.org/10.1038/s43247-025-02345-7) | 0°—90°W 约三分之一种群、最佳拟合 −22% 及不可全球外推 |
| 环南极生境 | [Labrousse et al. 2023](https://doi.org/10.1126/sciadv.adg8340) | 固定冰、地形、年度周期、区域差异与空间保护 |
| 换羽地 | [Fretwell et al. 2026](https://doi.org/10.1038/s43247-026-03231-6) | 换羽地点发现、30—40 天不能下海、2022—2024 早破冰风险 |
| 繁殖物候与遥感 | [Winterl et al. 2024](https://doi.org/10.1038/s41467-024-48239-8) | 抵达、6—10 周求偶产卵、平均 64 天孵化、6—7 周体温调节及遥感限制 |
| 群聚运动 | [Zitterbart et al. 2011](https://doi.org/10.1371/journal.pone.0020260) | 每 30—60 秒、5—10 厘米协调移动波与群体重组 |
| 极端潜水 | [Wienecke et al. 2007](https://doi.org/10.1007/s00300-006-0168-8) | 137,364 次潜水、564 米、21.8 分钟及两个极值分属不同潜水 |
| 非繁殖期潜水 | [Goetz et al. 2018](https://doi.org/10.3354/meps12486) | 20 只、96,071 次潜水、32.2 分钟、移动策略与光照差异 |
| 群落连通 | [Cristofari et al. 2016](https://doi.org/10.1038/ncomms11842) | 环南极迁移与遗传连通，不把地点当作完全封闭单位 |
| 寿命与未来风险 | [Trathan et al. 2011](https://doi.org/10.1371/journal.pone.0014738) | 平均约 20 年、自由生活长寿记录约 40 年及气候风险背景 |
| 2022 繁殖失败 | [Fretwell et al. 2023](https://doi.org/10.1038/s43247-023-00927-x) | 别林斯高晋海五处中四处推定完全繁殖失败及区域边界 |
| 减排情景 | [Jenouvrier et al. 2020](https://doi.org/10.1111/gcb.14864) | 巴黎温控目标、海冰与未来群落保留的模型关系 |
| 多模型风险 | [Jenouvrier et al. 2025](https://doi.org/10.1016/j.biocon.2025.111037) | 多气候/海冰/生态模型不确定性与一致下降方向 |
| 南极条约一般保护 | [Antarctic Treaty Secretariat — Conservation of Antarctic flora and fauna](https://www.ats.aq/e/faflo.html) | 附件 II 的捕捉、有害干扰、许可和外来物种规则 |
| 2026 特别保护提案状态 | [CEP 28 / ATCM 48 meeting report, paras. 89—102](https://documents.ats.aq/ATCM48/cr/ATCM48_cr001_e.pdf) | 多数支持但未达共识、现有工具、监测与后续讨论 |
| 磷虾渔业管理 | [CCAMLR — ecosystem-based management of the krill fishery](https://40years.ccamlr.org/ecosystem-based-management-of-krill-fishery/) | 生态系统方法、预防性管理和空间捕捞限制 |
| 生态系统监测 | [CCAMLR — CEMP](https://www.ccamlr.org/en/science/ccamlr-ecosystem-monitoring-programme-cemp) | 当前指示物种范围；避免误称直接监测帝企鹅 |
