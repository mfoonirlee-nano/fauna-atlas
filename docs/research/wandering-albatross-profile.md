# 漂泊信天翁（*Diomedea exulans*）完整档案研究

- 检索与核验日期：2026-08-20
- 推荐展示中文名：**漂泊信天翁**
- 推荐展示英文名：**Snowy Albatross**；传统且仍广泛使用的 **Wandering Albatross** 作为可检索别名
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图规定科学边界
- 证据口径：全球状态采用 IUCN/BirdLife 的原始评估；接受名、英文主名与种界采用 AviList v2025b、IOC v15.2、BirdLife、eBird/Clements、ACAP 和 WoRMS；生态、生活史与保护优先采用 ACAP、澳大利亚南极计划、英国南极调查局及同行评审原始研究
- 时间口径：本文所称“当前”截至 **2026-08-20**；IUCN 正式全球评估日期仍是 2018-08-07，不能写成 2026 年重评
- 数字边界：IUCN 的约 20,100 只成熟个体是 2018 评估所采用的点估计，计数基础更早，并非 2026 年同步全球普查；不建议把它放进无注释的排序字段

## 结论摘要

### 接受名是 *Diomedea exulans*，但“漂泊信天翁复合体”已拆分

当前接受学名为 ***Diomedea exulans* Linnaeus, 1758**，分类为动物界—脊索动物门—鸟纲—鹱形目—信天翁科—信天翁属。AviList v2025b、IOC v15.2、BirdLife 和 WoRMS 都在物种级接受该名；WoRMS 的 AphiaID 为 **212583**。[AviList v2025b](https://www.avilist.org/checklist/v2025b/) [IOC World Bird List v15.2](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans) [WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=212583)

当前全球清单的推荐英文名是 **Snowy Albatross**。IOC 在 v14.1 明确把 *D. exulans* 的英文名由 Wandering Albatross 改为 Snowy Albatross，以免与旧 “Wandering Albatross” 复合体的其他三个拆分种混淆；现行 IOC v15.2 继续使用这一名称。AviList v2025b 的核心英文名承接 IOC 口径，BirdLife 当前物种页也使用 Snowy Albatross。ACAP 与澳大利亚南极计划仍使用传统名 **Wandering Albatross**，因此产品应写 `en: 'Snowy Albatross'`，并把 `Wandering Albatross` 放入 aliases；两者不是两个物种。[IOC English-name update](https://www.worldbirdnames.org/new/updates/english-names/) [IOC v15.2](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/) [AviList v2025b](https://www.avilist.org/checklist/v2025b/) [AviList checklist components](https://www.avilist.org/checklist/components-of-the-avilist-checklist/) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans) [ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file)

旧文献中的广义 “Wandering Albatross” 不能自动归入本种。eBird/Clements 的 2023 更新把原广义 *D. exulans* 拆为四个现生种：

1. 雪/漂泊信天翁 ***D. exulans***；
2. 特里斯坦信天翁 ***D. dabbenena***；
3. 反足信天翁 ***D. antipodensis***，其中保留 `antipodensis` 与 `gibsoni` 两亚种；
4. 阿姆斯特丹信天翁 ***D. amsterdamensis***。

ACAP 的遗传学综述同样支持把 *exulans*、*dabbenena*、*amsterdamensis* 与 *antipodensis* 单元分开，只是在 `gibsoni` 是否独立成种上历史处理不同。页面的分布、数量与图像必须限定到狭义 *D. exulans*；不能借用在戈夫岛繁殖的 *D. dabbenena*、新西兰反足群岛/奥克兰群岛繁殖的 *D. antipodensis* 或阿姆斯特丹岛的 *D. amsterdamensis*。[eBird 2023 taxonomy update](https://science.ebird.org/en/use-ebird-data/the-ebird-taxonomy/2023-ebird-taxonomy-update) [ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file) [BAS — Albatrosses from Space](https://www.bas.ac.uk/project/wildlife-from-space/albatrosses-from-space/)

推荐 aliases：`['雪信天翁', 'Wandering Albatross']`；主名称已经覆盖“漂泊信天翁”和“Snowy Albatross”，不必在 aliases 重复。不建议加入不带说明的 `Wandering-type Albatross`，因为它通常指包含上述近缘种的外观型复合体，而非确定到本种的记录。

### IUCN：VU、decreasing、2018、A4bd

截至检索日，正式全球字段仍为 **易危 Vulnerable（VU）**、趋势 **decreasing**、评估日期 **2018-08-07**、标准 **A4bd**。评估判断过去与预测未来合计三世代（约 70 年）的下降超过 30%；南乔治亚种群持续下降，克罗泽与凯尔盖朗种群在早期急降、阶段性稳定后又出现下降，延绳钓兼捕导致的成鸟生存和幼鸟补充下降是核心原因。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22698305A132640680.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans)

结构化字段应精确写成：

```ts
conservation: conservation('VU', 'decreasing', 2018, 'A4bd')
```

IUCN 评估以约 **6,000 对年度繁殖对**推导约 **20,100 只成熟个体**，并把点估计的年份字段记为 2007；其组成计数来自不同岛群和年份。该值适合带年份与方法警告地呈现，不适合写成“当前全球只剩 20,100 只”，也不等于总个体数。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22698305A132640680.en) [BirdLife DataZone assessment history](https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans)

ACAP 的现场数据库已经包含 2024 年的局地新计数和不同方向的趋势，例如 Marion Island 记录为上升、Île de la Possession 为上升、Courbet Peninsula 为稳定；这些是“筑巢对”的岛点资料，覆盖期也不一致，不能直接相加成新的全球成熟个体数，更不能据此把正式全球趋势改成 stable 或 increasing。[ACAP — Marion Island](https://data.acap.aq/breeding_site.cfm?bs_id=1100) [ACAP — Île de la Possession](https://data.acap.aq/breeding_site.cfm?bs_id=442) [ACAP — Courbet Peninsula](https://data.acap.aq/breeding_site.cfm?bs_id=463)

## 分布、生境与活动范围

狭义 *D. exulans* 在南乔治亚岛、南非的爱德华王子群岛、法国的克罗泽群岛和凯尔盖朗群岛，以及澳大利亚麦夸里岛繁殖。海上范围跨越南大洋的南极、亚南极与亚热带水域；繁殖鸟、休繁殖年成鸟、幼鸟、雌雄和不同年龄阶段使用的海区并不相同。[ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file) [Australian Antarctic Program](https://www.antarctica.gov.au/about-antarctica/animals/flying-birds/wandering-albatross/) [Weimerskirch et al. 2014](https://doi.org/10.1016/j.jembe.2013.10.021)

BirdLife 把主要生境分为：繁殖期与非繁殖期的海洋远洋表层带（0—200 米）、陆架海域的远洋水体，以及繁殖期的亚南极草地。它们通常在开阔海面取食，也会在特定繁殖阶段利用陆架和陆坡；陆地只用于繁殖、求偶、育幼与停留，不能把它写成常规陆栖鸟。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans) [ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file)

推荐 `realms: ['marine', 'terrestrial']`。`continents` 可用 `['南极洲', '非洲', '南美洲', '大洋洲']` 表达南大洋及邻接大陆海域；它不是在南极大陆繁殖的特有种，也没有常规淡水生境。`countries` 只列代表性繁殖管辖方与海上范围国，南乔治亚主权争议不在物种档案中作立场判断。[ACAP range states](https://www.acap.aq/acap-species/304-wandering-albatross/file)

推荐三类生境：

- **南大洋远洋表层带**：首要海上觅食与移动环境；利用风切变和浪面附近气流作长距离飞行。[BirdLife](https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans) [Sachs et al. 2013](https://doi.org/10.1242/jeb.085209)
- **大陆架、陆坡与近岛远洋水域**：部分繁殖阶段的重要觅食区，亦与延绳钓作业发生空间重叠；不是每只个体全年固定使用。[ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file)
- **亚南极岛屿开阔草坡与脊地**：在有开阔或斑块植被、靠近暴露山脊或丘地的地面筑巢；仅在繁殖期是主要生境。[ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file)

不建议设置 `distribution.center`：任何单点都会被误读为分布中心或丰度中心，而本种海上范围是环南大洋尺度且受年龄、性别和繁殖状态影响。

## 外形、尺寸与鉴别边界

澳大利亚博物馆给出的体长范围为 **80—135 厘米**，并说明翼展接近 **3.5 米**；IUCN 的物种资料给出翼展约 **2.5—3.35 米**。英国南极调查局与生命周期研究常用的成鸟体重包络为 **8—12 千克**。这些范围受性别、年龄、繁殖状态和测量方法影响；雄鸟平均更大、更重且随年龄更白，不能把一个数写成所有成鸟的“标准体型”。[Australian Museum](https://australian.museum/learn/animals/birds/wandering-albatross/) [IUCN Species of the Day](https://nc.iucnredlist.org/redlist/species-of-the-day/diomedea-exulans/pdfs/original/diomedea-exulans.pdf) [BAS](https://www.bas.ac.uk/news/antarctic-albatross-displays-shift-in-breeding-habits/) [Weimerskirch et al. 2014](https://doi.org/10.1016/j.jembe.2013.10.021)

图像与正文应保留以下共同形态：[Australian Museum](https://australian.museum/learn/animals/birds/wandering-albatross/) [Australian Antarctic Program](https://www.antarctica.gov.au/about-antarctica/animals/flying-birds/wandering-albatross/) [eBird](https://ebird.org/species/wanalb1)

- 体躯相对紧凑，双翼极长、狭窄而近乎直线延展；飞行轮廓不能像短宽翼的鸥或猛禽。
- 成鸟头、颈和身体以白色为主，上翼有年龄变化明显的黑褐色斑块或粗纹；非常老的雄鸟可更白，但不是所有成鸟都全白。
- 幼鸟初离巢时以巧克力褐色为主并有白脸，随后多年逐渐变白；不能把深色幼鸟和浅色老成鸟误画成两个物种。
- 喙巨大、淡粉色、末端钩曲，鼻孔位于喙两侧的管状结构；不是黄色鸥喙、猛禽蜡膜或牙齿。
- 尾呈楔形；陆地画面只出现一对带蹼足，足色偏淡肉粉，不画利爪抓猎物。
- 与南方皇家信天翁及其他“漂泊型”大信天翁在海上可能极难仅凭外形确定，图像只能是遵守产地与形态边界的代表性重建，不能冒充可核验个体鉴定。

量化字段推荐：

| 字段 | 推荐值 | 说明 |
| --- | --- | --- |
| `measurements.length` | 80—135 cm | 澳大利亚博物馆的物种体长范围；不直接映射到 `adultLengthCm`，以免把未分年龄范围当成严格成体范围。 |
| `measurements.weight` | 8—12 kg | BAS 与生命周期研究使用的宽泛体重包络；雄鸟平均较大，繁殖状态会改变体重。 |
| `measurements.wingspan` | 2.5—3.35 m | IUCN 的保守范围；正文可另说可靠资料显示极大个体“接近 3.5 米”，不填 3.7 米网络极值。 |
| `metrics.adultMassKg` | `[8, 12]` | 适合粗粒度比较，仍需保留性别/状态说明。 |
| `metrics.wingspanCm` | `[250, 335]` | 与结构化展示范围一致。 |
| `metrics.adultLengthCm` | 不填 | 80—135 cm 来源未限定成体，避免类型语义错配。 |
| `metrics.lifespanYears` | 不填 | “部分个体 60+”是最低已知长寿记录，不是严格 0—最大范围。 |
| `metrics.topSpeedKph` | 不填 | 地速强烈依赖风场，不能把风助极值当成固有物种速度。 |
| `metrics.maxDiveDepthM` | 不填 | 本种以水面取食为主；少量浅潜记录不适合作为稳定物种极值。 |
| `metrics.estimatedMatureIndividuals` | 不填 | 20,100 是带旧计数基础的 IUCN 点估计，schema 无法携带年份和方法警告。 |

## 飞行、移动、食性与活动节律

高精度 GPS 对 16 只漂泊信天翁的测量验证了动态翱翔循环：迎风上升、顶部转向、顺风下降、低位转向，鸟从近海面的风速梯度获取能量并长时间保持不拍翼滑翔。安全文案是“主要借助动态翱翔降低长距离飞行的机械成本”；不能写成永不拍翼、完全不消耗代谢能量，或把看不见的风画成发光轨道。[Sachs et al. 2013](https://doi.org/10.1242/jeb.085209) [Sachs et al. 2012](https://doi.org/10.1371/journal.pone.0041449)

移动策略随生命阶段和性别改变。幼鸟离巢后通常连续在海上生活数年，学习使用风场；繁殖成鸟受巢址约束而作远距离往返，休繁殖年则可广泛散布甚至环南大洋移动。克罗泽长期资料显示，雄鸟随年龄更偏向寒冷南方水域，雌鸟更多维持在亚热带水域；这些是群体尺度趋势，不应用单幅飞行图推断个体性别或固定路线。[Weimerskirch et al. 2014](https://doi.org/10.1016/j.jembe.2013.10.021) [Weimerskirch et al. 2015](https://doi.org/10.1038/srep08853)

主要食物是头足类和鱼，也取食甲壳类、水母和腐肉；不同岛群、季节与繁殖阶段比例变化很大。它通常从水面夹取或拾取猎物，也会跟随渔船取食弃置物；不能把它画成深水追猎的企鹅、以猛禽足爪抓鱼，或声称南极犬牙鱼是全种在所有地区的固定主食。[ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file) [Australian Antarctic Program](https://www.antarctica.gov.au/about-antarctica/animals/flying-birds/wandering-albatross/)

ACAP 汇总把它描述为**以日间取食为主**、多以 surface-seizing 取食，但“主要”不等于严格昼行。活动标签建议写“以日间水面取食为主”，不要添加绝对 `diurnal only` 文案。[ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file)

## 繁殖、育幼与寿命

繁殖季从成鸟返岛到幼鸟离巢略超过一年。通常每次产 **一枚卵**，双亲轮流孵化，平均孵化约 **78—79 天**；南乔治亚幼鸟在巢约 **278 天**，克罗泽平均约短一周。成功繁殖者通常隔年再繁殖，但有相当比例会推迟更久；失败较早的成鸟有时下一年再次尝试，因此“严格每两年一次”也不准确。[ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file) [BAS long-term monitoring](https://www.bas.ac.uk/project/higher-predators-long-term-science/higher-predators-bird-island-albatrosses-and-giant-petrel-monitoring/)

幼鸟多在 5—7 岁首次返回出生岛，实际首次繁殖通常不早于 7—8 岁，典型约 10—12 岁；地点和队列之间有差异。部分个体寿命超过 60 年，但这不等于所有个体可活 60 年。低繁殖频率、晚熟和高成鸟生存依赖使其对少量额外成年死亡非常敏感。[ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file) [BAS](https://www.bas.ac.uk/news/antarctic-albatross-displays-shift-in-breeding-habits/) [Weimerskirch et al. 2014](https://doi.org/10.1016/j.jembe.2013.10.021)

配偶可形成长期关系，但产品不应把 “usually mate for life” 绝对化为永不更换配偶。图像中一对同框只能表示求偶或共同育幼场景，不能证明个体终身配对。[BAS long-term monitoring](https://www.bas.ac.uk/project/higher-predators-long-term-science/higher-predators-bird-island-albatrosses-and-giant-petrel-monitoring/)

## 威胁与保护行动

### 主要威胁

1. **延绳钓兼捕**：鸟在作业船后抢食饵料时被钩住，随钓线下沉而溺亡；IUCN 和 ACAP 都把它视为全球下降的主要直接驱动，且幼鸟、休繁殖年个体及不同性别与特定渔业的重叠并不相同。[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22698305A132640680.en) [ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file)
2. **气候与海洋变化**：BirdLife 当前威胁表把气候造成的生境转移与改变列为持续压力；风场变化可改变飞行速度、觅食范围和繁殖表现，但方向和收益会随性别、地点与未来情景改变，不能简化成“风更大总是有利”。[BirdLife](https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans) [Weimerskirch et al. 2012](https://doi.org/10.1126/science.1210270)
3. **外来哺乳动物与岛屿生境变化**：猫、鼠类和大型外来食草动物的存在及影响因岛而异；麦夸里岛已完成大规模根除，不能把历史威胁写成所有繁殖岛当前都相同。[BirdLife](https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans) [ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file)
4. **塑料、渔具与油污**：幼鸟可通过亲鸟二次摄入鱼钩和海洋垃圾，个别繁殖区也记录过油污；影响随地点和暴露变化，不应虚构全球统一死亡比例。[ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file) [BirdLife](https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans)
5. **繁殖地干扰与疾病风险**：踩踏、过近接近和生物安全失误可影响低密度地面巢；长期监测、旅游和科研应使用岛屿管理方规定的距离与消毒程序。不能把人手抱幼鸟、游客自拍或投喂画成保护。[ACAP conservation guidelines](https://www.acap.aq/resources/acap-conservation-guidelines)

### 推荐保护行动

- 在远洋延绳钓中同时使用**加重支线、夜间下线和驱鸟线（tori line）**；或使用经评估的护钩装置/水下投饵装置。ACAP 2026 明确指出三项措施互补，单独使用任何一项都有空窗。[ACAP 2026 best-practice advice](https://acap.aq/resources/bycatch-mitigation/mitigation-advice/5296-acap-pelagic-ll-summary-bpa/file)
- 由相关区域渔业管理组织统一规范、观察员覆盖、电子监控与兼捕报告，核查设备是否真正部署，而不是只记录船上“拥有”设备。[ACAP 2026](https://acap.aq/resources/bycatch-mitigation/mitigation-advice/5296-acap-pelagic-ll-summary-bpa/file)
- 维持所有繁殖岛群的年度繁殖对、繁殖成功、成鸟/幼鸟生存与招募监测，并对资料缺口阶段开展追踪，定位与渔业的时空重叠。[BirdLife conservation actions](https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans) [ACAP Data Portal](https://data.acap.aq/taxon_profile.cfm?taxa_code=DIX)
- 保护巢区及邻近草坡，执行岛屿生物安全；在有证据与可行性时根除或控制外来哺乳动物，并长期验证是否复入。[ACAP conservation guidelines](https://www.acap.aq/resources/acap-conservation-guidelines)
- 减少海洋塑料、弃置渔具和船舶垃圾，规范渔获残余排放，避免把鸟吸引到仍有可接近钩饵的船尾。[ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file)
- 把正式 IUCN 全种趋势与各岛点近期趋势分开维护；任何新全球估计都必须先统一年份、计数单位、非繁殖个体比例和种界。

## 推荐关键事实

1. 当前接受种是狭义 *Diomedea exulans*；旧的漂泊信天翁复合体还包括现已独立的 Tristan、Antipodean 和 Amsterdam Albatross。[eBird 2023](https://science.ebird.org/en/use-ebird-data/the-ebird-taxonomy/2023-ebird-taxonomy-update)
2. 当前主展示名应为 Snowy Albatross；传统名 Wandering Albatross 是同一狭义物种的别名，不是另一个物种。[IOC](https://www.worldbirdnames.org/new/updates/english-names/) [AviList v2025b](https://www.avilist.org/checklist/v2025b/) [BirdLife](https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans) [ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file)
3. 正式全球状态为 `VU / decreasing / 2018 / A4bd`；不能用 2024 局地上升站点把全球趋势改成 stable。
4. 翼展约 2.5—3.35 米，极大个体接近 3.5 米；双翼极长狭，而躯干相对小。[IUCN](https://nc.iucnredlist.org/redlist/species-of-the-day/diomedea-exulans/pdfs/original/diomedea-exulans.pdf) [Australian Museum](https://australian.museum/learn/animals/birds/wandering-albatross/)
5. 动态翱翔从近海面风切变获取机械能，使它能长时间少拍翼飞行；不是永不拍翼或零代谢消耗。[Sachs et al. 2013](https://doi.org/10.1242/jeb.085209)
6. 海上活动随年龄、性别和繁殖状态改变，不能给全种画一条固定年度迁徙路线。[Weimerskirch et al. 2014](https://doi.org/10.1016/j.jembe.2013.10.021)
7. 食物以头足类和鱼为主，也记录甲壳类、水母与腐肉；多从水面获取。[ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file)
8. 一次繁殖通常一枚卵，孵化约 78—79 天，幼鸟在巢约九个月；完整繁殖季略超过一年。[ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file)
9. 首次繁殖通常约 10—12 岁，部分个体超过 60 岁；慢生活史使额外成鸟死亡尤其危险。[ACAP](https://www.acap.aq/acap-species/304-wandering-albatross/file) [BAS](https://www.bas.ac.uk/news/antarctic-albatross-displays-shift-in-breeding-habits/)
10. 延绳钓最佳实践不是只挂一条彩带，而是加重支线、夜间下线和驱鸟线同时使用，或采用经评估的护钩/水下投饵装置。[ACAP 2026](https://acap.aq/resources/bycatch-mitigation/mitigation-advice/5296-acap-pelagic-ll-summary-bpa/file)

## 应删除或避免的说法

- 不把现行英文名 `Snowy Albatross` 当成新物种；它仍是 *D. exulans*。
- 不把所有历史 “Wandering Albatross” 数据归入狭义本种；先排除 *D. dabbenena*、*D. antipodensis* 与 *D. amsterdamensis*。
- 不把戈夫岛、新西兰反足群岛/奥克兰群岛或阿姆斯特丹岛写成本种繁殖地。
- 不把 IUCN 评估年写成 2026，也不省略 A4bd 或把 decreasing 改成 stable。
- 不写“当前全球精确 20,100 只”；这是带旧计数基础的成熟个体点估计。
- 不把年度繁殖对、总个体数和成熟个体数混用，也不把各岛 2024 数据直接相加。
- 不把它写成南极大陆特有、固定冰依赖或常规陆栖鸟；繁殖地主要是亚南极岛屿草地。
- 不写每只鸟都会环游世界、每年同一路线迁徙或一生固定使用一个海区。
- 不写永不落地、永不拍翼、零能耗飞行或依靠热气流环飞；动态翱翔依赖海面风切变，仍有代谢成本。
- 不把 3.7 米网络极值、最高地速或单次远行距离当成稳定结构化指标。
- 不把年轻深褐个体和老年近白个体误写成不同物种。
- 不画短宽鸥翼、猛禽黄色钩喙、利爪抓鱼、无蹼脚、额外翅膀或尾羽扇成孔雀状。
- 不画潜至深海追鱼、从高空箭式扎水、在水下用翅膀推进或咀嚼猎物。
- 不写只吃鱿鱼或只吃鱼；也不把渔船弃置物说成正常生态所必需。
- 不写严格每两年繁殖一次；失败繁殖者可能次年重试，成功繁殖者也可能延后超过两年。
- 不写所有个体 10 岁必然繁殖、都活 60 年或绝对终身不换配偶。
- 不把一条驱鸟线的展示图宣传为“零兼捕”；最佳实践需要多措施、正确规格与合规执行。
- 不画鸟被钩住、溺亡或带血尸体；保护图应展示预防措施而非猎奇伤害。

## 6 幅原创图的科学边界

六幅图都应是**代表性科学重建**，不冒充真实地点、真实个体或一次已记录事件。优先使用狭义 *D. exulans* 的成鸟外形与已知繁殖岛景观，不出现戈夫岛、反足群岛、奥克兰群岛或阿姆斯特丹岛地标。

| 序号与文件 | 建议场景 | 必须表现 | 应拒绝 |
| --- | --- | --- | --- |
| 01 `01-southern-ocean-glide.webp` | 封面：一只成鸟在有长涌浪的南大洋低空从右向左滑翔，主体在右侧，左侧留标题空间 | 完整极长狭翼、相对小的白色躯干、上翼黑褐粗斑、巨大淡粉钩喙、楔形尾；两翼从翼尖到翼尖均不裁切 | 短宽鸥翼、猛禽姿态、黄色喙、利爪、额外鸟、冰山旅游船、文字水印；不要把整鸟画成纯白无斑的泛化皇家信天翁 |
| 02 `02-natural-surface-seizing.webp` | 一只成鸟浮在开阔海面，以喙从水面夹取一条小鱿鱼，双翼自然收拢 | 水面取食、蹼足在水下；猎物尺寸合理、只露出部分；鸟头颈和巨大粉喙清晰 | 深潜、水下飞行、高空扎水、猛禽抓鱼、血液、巨大章鱼缠身、渔钩或船员投喂 |
| 03 `03-subantarctic-breeding-habitat.webp` | 亚南极岛屿宽景：低矮草坡、裸露脊地、风云和海湾，一只成鸟伏在低矮土草台状巢上 | 生境占画面至少 85%，巢是地面植被/泥土构成的矮台，不是树巢；成鸟完全遮住巢杯，不露卵或幼鸟 | 南极大陆冰原、热带沙滩、悬崖树巢、密集企鹅式群落、额外鸟或把具体岛屿错误标名 |
| 04 `04-low-wave-dynamic-soaring.webp` | 一只成鸟贴近浪面侧倾转弯，下一段上升轨迹由姿态和浪向暗示 | 翅膀保持展开且无拍翼拖影，身体略倾、翼尖离浪面有安全水隙；只表示动态翱翔的一个瞬间 | 发光风线、箭头、信息图文字、龙卷风、翼尖碰水、重复残影或“零能耗”视觉标签 |
| 05 `05-post-guard-chick.webp` | 一只已过早期护雏阶段、仍不会飞的较大幼鸟独自在低矮巢台上，背景为开阔亚南极草坡 | 恰好一只灰白绒羽幼鸟，翼背可有正在长出的深色幼羽；独处是亲鸟出海觅食期间的正常阶段，不表现虚弱、受伤或求救 | 成鸟、第二只幼鸟、裸露的卵、企鹅幼鸟外形、玩偶质感、奶瓶、手喂、人类、捕食者或“被遗弃”暗示 |
| 06 `06-breeding-count-monitoring.webp` | 一只成鸟伏在巢上，恰好两名野外生态学者在约 30—50 米外以望远镜/观测镜和记录板开展非侵入式计数 | 人员在画面中较小、衣着低饱和，人与巢之间有连续空地缓冲；只观察和记录，不接近、触摸或处理鸟 | 额外人员、额外鸟或巢、游客团、无人机、车辆、抓捕、环志、露卵、投喂、自拍，或把生成画面配成真实数量/趋势证据 |

六图共同形态总检：**one compact body; exactly two extremely long and narrow wings; one wedge-shaped tail; one massive pale-pink hooked bill with lateral tubular nostrils; adult predominantly white head/neck/body with age-variable black-brown upperwing markings; exactly two pale webbed feet only when visible; no yellow gull bill, raptor talons, teeth, extra wings, clipped wing tips, tropical beach, or visible magical wind trails**。

## 推荐来源数组

下列常量是本物种在 `species.ts` 中的**唯一来源数组声明**；完整对象只通过 `sources: WANDERING_ALBATROSS_SOURCES` 引用，不要再内联或重复声明同一数组。

```ts
const WANDERING_ALBATROSS_SOURCE_DATE = '2026-08-20' as const;
const WANDERING_ALBATROSS_CONTENT_DATE = '2026-08-20' as const;

const WANDERING_ALBATROSS_SOURCES = [
  {
    title: 'AviList Core Team 2026 — Global Avian Checklist v2025b',
    url: 'https://www.avilist.org/checklist/v2025b/',
    kind: 'taxonomy',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'IOC World Bird List — English-name update to Snowy Albatross',
    url: 'https://www.worldbirdnames.org/new/updates/english-names/',
    kind: 'taxonomy',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Diomedea exulans (assessed 7 August 2018)',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22698305A132640680.en',
    kind: 'conservation',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone — Snowy Albatross Diomedea exulans',
    url: 'https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans',
    kind: 'general',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'eBird/Clements — 2023 taxonomy update: Wandering Albatross complex split',
    url: 'https://science.ebird.org/en/use-ebird-data/the-ebird-taxonomy/2023-ebird-taxonomy-update',
    kind: 'taxonomy',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'WoRMS 2026 — Diomedea exulans, AphiaID 212583',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=212583',
    kind: 'taxonomy',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'ACAP — Wandering Albatross species assessment',
    url: 'https://www.acap.aq/acap-species/304-wandering-albatross/file',
    kind: 'general',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'ACAP Data Portal — Diomedea exulans profile',
    url: 'https://data.acap.aq/taxon_profile.cfm?taxa_code=DIX',
    kind: 'distribution',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'ACAP 2026 — Best Practice Advice for Pelagic Longline Fisheries',
    url: 'https://acap.aq/resources/bycatch-mitigation/mitigation-advice/5296-acap-pelagic-ll-summary-bpa/file',
    kind: 'conservation',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'Australian Antarctic Program — Wandering albatross',
    url: 'https://www.antarctica.gov.au/about-antarctica/animals/flying-birds/wandering-albatross/',
    kind: 'ecology',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'Australian Museum — Wandering Albatross',
    url: 'https://australian.museum/learn/animals/birds/wandering-albatross/',
    kind: 'general',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'IUCN Species of the Day — Wandering Albatross',
    url: 'https://nc.iucnredlist.org/redlist/species-of-the-day/diomedea-exulans/pdfs/original/diomedea-exulans.pdf',
    kind: 'general',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'Sachs et al. 2013 — Experimental verification of dynamic soaring in albatrosses',
    url: 'https://doi.org/10.1242/jeb.085209',
    kind: 'ecology',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'Weimerskirch et al. 2014 — Lifetime foraging patterns of the wandering albatross',
    url: 'https://doi.org/10.1016/j.jembe.2013.10.021',
    kind: 'ecology',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 可直接用于 `species.ts` 的完整字段建议

以下对象覆盖当前 `Species` 的全部必填字段。`focalPoint` 是按建议构图给出的**生成前暂定值**，图片完成后必须按实际主体位置复核；文件名应与六幅最终资产保持一致。

```ts
{
  id: 'species-diomedea-exulans',
  slug: 'wandering-albatross',
  names: {
    zh: '漂泊信天翁',
    en: 'Snowy Albatross',
    aliases: ['雪信天翁', 'Wandering Albatross'],
  },
  scientificName: 'Diomedea exulans',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Aves', '鸟纲'),
    taxon('Procellariiformes', '鹱形目'),
    taxon('Diomedeidae', '信天翁科'),
    taxon('Diomedea', '信天翁属'),
  ),
  conservation: conservation('VU', 'decreasing', 2018, 'A4bd'),
  distribution: {
    realms: ['marine', 'terrestrial'],
    continents: ['南极洲', '非洲', '南美洲', '大洋洲'],
    regions: [
      '南大洋',
      '南乔治亚岛',
      '爱德华王子群岛',
      '克罗泽群岛',
      '凯尔盖朗群岛',
      '麦夸里岛',
      '南大西洋与南印度洋',
      '南太平洋与南美洲西岸外海',
    ],
    countries: ['澳大利亚', '南非', '法国', '巴西', '智利', '新西兰', '乌拉圭', '纳米比亚'],
    range: '在南乔治亚岛、爱德华王子群岛、克罗泽群岛、凯尔盖朗群岛和麦夸里岛繁殖；繁殖鸟、休繁殖年成鸟及幼鸟在南极、亚南极至亚热带南大洋广泛活动，海区随岛群、性别、年龄和繁殖阶段而改变。',
  },
  habitats: [
    {
      name: '南大洋远洋表层带',
      realm: 'marine',
      description: '主要移动与觅食环境；借助浪面附近风切变作长距离动态翱翔，并从水面获取猎物。',
      isPrimary: true,
    },
    {
      name: '大陆架、陆坡与近岛远洋水域',
      realm: 'marine',
      description: '部分繁殖阶段的重要觅食区，也可能与金枪鱼及犬牙鱼延绳钓作业发生时空重叠。',
    },
    {
      name: '亚南极岛屿开阔草坡与脊地',
      realm: 'terrestrial',
      description: '在有开阔或斑块植被、靠近暴露山脊或丘地的地面筑矮台状巢，只在繁殖周期中长期使用陆地。',
    },
  ],
  measurements: {
    length: {
      min: 80,
      max: 135,
      unit: 'cm',
      note: '澳大利亚博物馆的物种体长范围；来源未把该范围限定为严格成体。',
    },
    weight: {
      min: 8,
      max: 12,
      unit: 'kg',
      note: '宽泛体重包络；雄鸟平均更大，年龄与繁殖状态也会影响体重。',
    },
    wingspan: {
      min: 2.5,
      max: 3.35,
      unit: 'm',
      note: 'IUCN 物种资料范围；其他可靠资料记载极大个体接近 3.5 米。',
    },
  },
  diet: {
    types: ['carnivore', 'piscivore'],
    foods: ['鱿鱼等头足类', '鱼类', '甲壳类', '水母', '海洋动物腐肉'],
    description: '主要从海面夹取或拾取头足类与鱼，也摄食甲壳类、水母和腐肉；猎物比例随岛群、季节和繁殖阶段改变，并可能跟随渔船取食弃置物。',
  },
  activity: [
    '动态翱翔与长距离少拍翼飞行',
    '环南大洋广域移动',
    '以日间水面取食为主',
    '繁殖期远距离往返觅食',
    '成功繁殖后通常隔年繁殖',
    '幼鸟离巢后连续多年海上生活',
  ],
  tags: [
    '南大洋海鸟',
    '现生鸟类最大翼展',
    '动态翱翔',
    '亚南极岛屿繁殖',
    '慢生活史',
    '延绳钓兼捕',
    'IUCN 易危',
  ],
  summary: '以极长狭翼从风切变获取飞行动力、在少数亚南极岛屿缓慢繁殖的南大洋巨型海鸟。',
  description: '漂泊信天翁以接近三米以上的翼展和动态翱翔穿行南大洋；狭义 Diomedea exulans 只在南乔治亚、爱德华王子、克罗泽、凯尔盖朗和麦夸里等岛群繁殖。它每次通常只产一枚卵，完整育幼超过一年，往往约十岁才首次繁殖。正因为成鸟长寿而繁殖缓慢，延绳钓造成的额外死亡足以推动长期下降。',
  storySections: [
    {
      key: 'identity',
      label: '名称与种界',
      title: 'Snowy 是现行主名，Wandering 是传统别名',
      body: 'IOC、AviList 与 BirdLife 当前采用 Snowy Albatross；ACAP 等来源仍沿用 Wandering Albatross。两者在这里都指 Diomedea exulans。旧广义 Wandering 记录还可能包含 Tristan、Antipodean 或 Amsterdam Albatross，必须按繁殖地、形态和资料口径重审。',
    },
    {
      key: 'flight',
      label: '动态翱翔',
      title: '在浪面与高处之间反复交换风的能量',
      body: '高精度追踪记录到迎风上升、顶部转向、顺风下降和低位转向的循环。极长狭翼让它从近海面的风速梯度获取机械能，长时间少拍翼飞行；这不是永不拍翼或没有代谢消耗。',
    },
    {
      key: 'movement',
      label: '一生在移动',
      title: '年龄、性别和繁殖状态共同改写海上地图',
      body: '幼鸟离巢后连续数年留在海上，逐步提高利用风场的能力；繁殖成鸟受巢址约束作远距离往返，休繁殖年则能广泛散布。群体研究还显示雌雄与年龄阶段使用的纬度不同，因此不存在一条适用于所有个体的固定迁徙路线。',
    },
    {
      key: 'feeding',
      label: '水面取食',
      title: '从浪间拾取头足类、鱼和机会性食物',
      body: '漂泊信天翁主要从水面获取头足类和鱼，也吃甲壳类、水母与腐肉。跟随渔船能带来弃置食物，却也把鸟引向尚未下沉的带饵鱼钩，使机会性觅食与兼捕风险紧密相连。',
    },
    {
      key: 'breeding',
      label: '缓慢繁殖',
      title: '一枚卵占据超过一年的繁殖周期',
      body: '双亲轮流孵化唯一一枚卵约 78—79 天，幼鸟随后在巢约九个月。成功繁殖者通常隔年才再次繁殖，初次繁殖多在十岁左右；这种慢生活史无法迅速补回渔业造成的成鸟和幼鸟损失。',
    },
    {
      key: 'conservation',
      label: '保护行动',
      title: '让鱼钩先沉到鸟够不到的水层',
      body: 'ACAP 2026 推荐远洋延绳钓同时采用加重支线、夜间下线和驱鸟线，或使用经评估的护钩及水下投饵装置；同时需要观察员或电子监控验证执行。繁殖岛生物安全、长期人口统计和海上追踪则负责守住巢区并定位新的风险重叠。',
    },
  ],
  keyFacts: [
    'IOC、AviList 与 BirdLife 的 Snowy Albatross 是当前主名；ACAP 的 Wandering Albatross 是同一狭义 Diomedea exulans 的传统别名。',
    '旧漂泊信天翁复合体已拆出 Tristan、Antipodean 和 Amsterdam Albatross，历史记录不能无条件并入本种。',
    '全球 IUCN 字段为易危 VU、decreasing、2018、A4bd；约 20,100 只成熟个体是带旧计数基础的评估点估计。',
    '翼展约 2.5—3.35 米，极大个体接近 3.5 米，是现生鸟类中翼展最大的物种。',
    '动态翱翔让它从近海面风切变获取机械能并长时间少拍翼飞行，但并非永不拍翼或零能耗。',
    '每次繁殖通常只有一枚卵，孵化约 78—79 天，幼鸟在巢约 278 天，完整繁殖季略超过一年。',
  ],
  threats: [
    '远洋与底延绳钓中抢食饵料导致钩挂、下沉和溺亡',
    '气候与风场、海温变化改变觅食区、飞行成本和繁殖表现',
    '部分繁殖岛的外来猫、鼠类和大型食草动物造成捕食或生境改变',
    '塑料、弃置鱼钩与其他渔具经亲鸟带入幼鸟食物',
    '塑料、油污和船舶垃圾等海洋污染',
    '繁殖地踩踏、过近接近、疾病与岛屿生物安全失误',
  ],
  conservationActions: [
    '远洋延绳钓同时使用加重支线、夜间下线和合规驱鸟线，或使用经评估的护钩/水下投饵装置',
    '通过区域渔业管理组织、观察员和电子监控统一兼捕规范并核查实际执行',
    '持续监测所有繁殖岛群的繁殖对、成功率、成幼鸟生存和招募',
    '追踪不同岛群、性别、年龄和繁殖阶段与渔业的时空重叠',
    '保护巢区草地、执行严格岛屿生物安全，并在可行时控制或根除外来哺乳动物',
    '减少塑料、弃置渔具和船舶垃圾，规范会吸引海鸟靠近钩饵的渔获残余排放',
  ],
  metrics: {
    adultMassKg: [8, 12],
    wingspanCm: [250, 335],
  },
  featuredStats: [
    {
      key: 'wingspan',
      label: '翼展',
      value: '2.5—3.35',
      unit: '米',
      note: 'IUCN 物种资料范围；极大个体接近 3.5 米',
    },
    {
      key: 'mature-estimate',
      label: 'IUCN 成熟个体点估计',
      value: '约 20,100',
      unit: '只',
      note: '2018 评估采用，计数基础更早；不是 2026 全球普查',
    },
    {
      key: 'incubation',
      label: '平均孵化期',
      value: '78—79',
      unit: '天',
      note: '双亲轮流孵化通常唯一一枚卵',
    },
    {
      key: 'nestling-period',
      label: '南乔治亚幼鸟在巢',
      value: '约 278',
      unit: '天',
      note: '克罗泽平均约短一周；完整繁殖季略超过一年',
    },
  ],
  media: {
    image: './images/species/wandering-albatross/01-southern-ocean-glide.webp',
    alt: '南大洋长涌浪上，一只白色躯干、黑褐上翼和淡粉色大喙的成年漂泊信天翁展开极长狭翼从右向左滑翔',
    focalPoint: { x: 0.69, y: 0.47 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/wandering-albatross/02-natural-surface-seizing.webp',
        alt: '一只漂泊信天翁浮在开阔海面，以巨大淡粉色喙夹取刚露出水面的小型鱿鱼',
        title: '从浪间拾取猎物',
        caption: '它们主要从水面获取头足类和鱼，也吃甲壳类、水母与腐肉；猎物组合随地点和季节变化。',
        focalPoint: { x: 0.54, y: 0.54 },
      },
      {
        image: './images/species/wandering-albatross/03-subantarctic-breeding-habitat.webp',
        alt: '风云下的亚南极岛屿开阔草坡与远海占据宽景，一只漂泊信天翁伏在低矮土草巢台上',
        title: '少数岛屿上的繁殖地',
        caption: '狭义本种只在南乔治亚、爱德华王子、克罗泽、凯尔盖朗和麦夸里等岛群繁殖；巢位于开阔或斑块植被的地面。',
        focalPoint: { x: 0.6, y: 0.61 },
      },
      {
        image: './images/species/wandering-albatross/04-low-wave-dynamic-soaring.webp',
        alt: '一只漂泊信天翁在灰蓝涌浪上方侧倾转弯，双翼完全展开且没有拍翼拖影',
        title: '从风切变取能',
        caption: '动态翱翔在迎风上升、顶部转向、顺风下降与低位转向之间循环；画面只是其中一个飞行瞬间，它降低拍翼需求却不等于零代谢成本。',
        focalPoint: { x: 0.52, y: 0.48 },
      },
      {
        image: './images/species/wandering-albatross/05-post-guard-chick.webp',
        alt: '亚南极草坡上，一只较大的灰白绒羽漂泊信天翁幼鸟独自安静伏在低矮巢台上',
        title: '亲鸟出海后的正常独处',
        caption: '早期护雏阶段结束后，幼鸟会独自在巢等待双亲从远海带回食物；这不是被遗弃，完整育幼仍持续约九个月。',
        focalPoint: { x: 0.52, y: 0.56 },
      },
      {
        image: './images/species/wandering-albatross/06-breeding-count-monitoring.webp',
        alt: '亚南极开阔草地上，一只漂泊信天翁伏在巢上，两名野外生态学者在远处以观测镜和记录板开展计数',
        title: '从巢外远距离计数',
        caption: '繁殖对、繁殖成功和生存率的长期监测需要保持距离并减少干扰；这幅重建不代表真实个体记录、数量或趋势。',
        focalPoint: { x: 0.55, y: 0.5 },
      },
    ],
  },
  sources: WANDERING_ALBATROSS_SOURCES,
  featured: true,
  publishedAt: WANDERING_ALBATROSS_CONTENT_DATE,
  updatedAt: WANDERING_ALBATROSS_CONTENT_DATE,
}
```

## 实施核对表

- 分类节点：新增 `Diomedeidae / 信天翁科` 与 `Diomedea / 信天翁属`，复用 `Chordata / 脊索动物门`、`Aves / 鸟纲`、`Procellariiformes / 鹱形目`。
- 保护字段：必须是 `VU / decreasing / 2018 / A4bd`。
- 俗名：主展示英文名是 Snowy Albatross，aliases 必须含 Wandering Albatross；搜索任一名称都应命中同一档案。
- 分布：不得加入戈夫岛、反足群岛、奥克兰群岛或阿姆斯特丹岛作为本种繁殖地。
- 数字：不填 `estimatedMatureIndividuals`；20,100 只只放在带评估年份说明的展示统计中。
- 内容：恰好 6 个 `storySections`，封面 + 5 张 gallery，媒体文件共 6 张。
- 资产：生成后按实际画面重新检查 `focalPoint`、翼尖是否完整、成鸟羽色、喙色、蹼足、单幼鸟/单巢、监测人员数量以及人员—巢缓冲距离。
- 更新 todo：实现与验证全部完成后，只删除 `漂泊信天翁（Diomedea exulans）` 一行，使下一项成为红喉北蜂鸟。
