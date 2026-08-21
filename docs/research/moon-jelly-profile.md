# 海月水母（*Aurelia aurita*）完整档案研究

- 检索与核验日期：2026-08-21
- 推荐展示中文名：**海月水母**
- 推荐展示英文名：**Moon Jellyfish**
- 当前接受名：***Aurelia aurita* (Linnaeus, 1758)**
- 使用范围：核验 `src/data/species.ts` 的完整物种档案、1 张封面与 5 张详情图，以及静态资源、分类测试和 TODO 收尾
- 证据标准：优先使用 WoRMS、IUCN 当前检索、政府或科研机构资料，以及直接研究有明确地点/种群来源的同行评审原始论文
- 核心限制：本文默认指 ***A. aurita* sensu stricto（狭义海月水母）**；旧文献中的 *A. aurita*、moon jelly 或“海月水母”常是 *Aurelia* spp. 或 *A. aurita* sensu lato，不能自动外推
- 保护口径：截至核验日没有找到 IUCN 对本种的正式物种评估；产品显示 `NE / unknown`，但 `NE` 是“尚未评估”，不是一个由 IUCN 评估得出的风险等级

## 结论摘要

### 接受名、分类与“28 种”工作框架

WoRMS 接受 ***Aurelia aurita* (Linnaeus, 1758)**，AphiaID 135306，分类链为动物界—刺胞动物门—钵水母纲—旗口水母目—洋须水母科—海月水母属；原始组合是 *Medusa aurita*。[WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=135306)

Lawley et al. 2021 的全球系统修订以分子性状为主，在 *Aurelia* 属提出并承认 **28 个物种假说（species hypotheses）**，其中多个单元的水母体、水螅体和碟状幼体形态高度重叠。可靠种级鉴定通常需要采集地点、凭证材料和 16S、COI、ITS1 或 28S 等分子证据；透明圆伞、四枚马蹄形性腺和四条口腕只能作为属级/外形线索。[Lawley et al. 2021](https://doi.org/10.7717/peerj.11954)

“28 个物种假说”应写成**当前有影响力的系统工作框架**，而不是毫无争议的终局。2025 年针对浮游动物监测的分类综述仍指出，部分仅凭分子性状界定的 *Aurelia* 单元及有效种数存在讨论；但这不削弱产品必须避免“全世界月亮形水母都是 *A. aurita*”的结论。[Peters et al. 2025](https://doi.org/10.1093/icesjms/fsaf077)

因此：

- 当前档案可作为一个具体物种的叶节点保留 `Aurelia aurita`，不能改成 `Aurelia spp.`。
- 日本、中国、台湾、红海、地中海和太平洋的旧“*A. aurita*”研究若没有按当前口径复核，不应用于狭义种的尺寸、食性、繁殖或安全字段。
- “返老还童/生命周期逆转”实验研究的是 `Aurelia sp. 1`，不能写成狭义 *A. aurita* 的普通能力。[He et al. 2015](https://doi.org/10.1371/journal.pone.0145314)

### 形态与可安全结构化的尺寸

成体水母体是宽而浅的透明碟状伞，伞下通常可见四枚蓝粉至淡紫色马蹄形性腺、四条褶皱口腕、分枝的辐管，以及沿伞缘排列的数百条短而细的触手。它不是带长流苏的海刺水母，也不是方形伞的箱水母。[WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=135306) [Naturalis North Sea catalogue](https://ns-crustacea.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?cat=TAB_DESCRIPTION&epi=210&id=131594)

可安全落库的数字是**典型成体伞径约 15—30 厘米**；较大个体可接近约 40 厘米。这里量的是伞直径，不是口腕全长、全身“体长”、平均值或物种最大纪录。地点、季节、营养和个体状态都会改变尺寸。[WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=135306) [Naturalis](https://ns-crustacea.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?cat=TAB_DESCRIPTION&epi=210&id=131594)

推荐字段：

| 字段 | 推荐值 | 口径 |
| --- | --- | --- |
| `measurements.length` | `15—30 cm` | schema 没有 bell diameter；note 必须写“典型成体伞径，较大个体近 40 cm，不是口腕全长”。 |
| `metrics.adultLengthCm` | 不填 | `length` 会被 UI 解释成通用体长，无法保留伞径语义。 |
| `metrics.adultMassKg` | 不填 | 含水量、尺寸与测量方法差异大，无稳健范围。 |
| `metrics.lifespanYears` | 不填 | 不把季节性水母体持续时间、水螅体克隆延续和完整基因个体寿命混成一个范围。 |
| `featuredStats.bell-diameter` | `15—30 cm` | 允许用 note 保留“典型伞径”与近 40 cm 的较大个体。 |

四枚马蹄形性腺是非常适合视觉教育的特征，却不是种级诊断；图片 caption 必须始终保留这一限制。[Lawley et al. 2021](https://doi.org/10.7717/peerj.11954)

### 狭义分布与栖息地

Lawley et al. 的分子/分类记录支持狭义种出现于东北大西洋、北海、波罗的海、黑海、里海、格陵兰及北美东北部，并有南美和一个仍待确认的西北太平洋记录。作者把德国 Helgoland 作为新模式地点，并推测原生范围在东北大西洋；若干域外种群可能源于人类转运，西北太平洋单一样本尤其不能扩写为稳定区域分布。[Lawley et al. 2021](https://doi.org/10.7717/peerj.11954)

档案中的国家只能是代表性列表，不能伪装成完整原生范围；OBIS 等历史点位还叠加旧鉴定和坐标质量问题，不能据一张全球点图恢复“世界广布”的旧结论。

水母体生活在海洋沿岸水柱，常见于近岸和表层附近；局地数量与位置可受潮汐、风、环流、温盐和食物重新组织。[NOAA Stellwagen Bank](https://sanctuaries.noaa.gov/pgallery/pgstellwagen/living/living_25.html)

底栖水螅体是同一生命周期不可省略的生境阶段。北海分子调查在沉降板、码头浮体、沉船和天然硬质基底检出 *A. aurita* 水螅体，并发现 Dogger Bank 与沿岸样点之间连接度低；因此“海月水母栖息地”不能只写开放水面。[van Walraven et al. 2016](https://doi.org/10.1007/s00227-016-2945-4)

北海实验种群的水螅体在盐度 8 仍可存活，并能在盐度 12 横裂释放碟状幼体。这只是特定来源种群与实验条件的耐受结果，不能硬编码为全物种最低盐度或安全阈值。[Holst & Jarms 2010](https://doi.org/10.1007/s10750-010-0214-y)

推荐 habitat 依次为：沿岸浅层水柱；半封闭海湾、峡湾与河口；天然及人工水下硬质附着面。`distribution.center: { lat: 56, lng: 4 }` 只能标为北海代表焦点，不是范围中心、模式地点坐标或丰度热点。

### 生命周期与繁殖

基本序列是：有性繁殖的成体水母 → 浮浪幼体（planula）→ 固着水螅体（scyphistoma）→ 横裂体（strobila）→ 碟状幼体（ephyra）→ 成体水母。水螅体还能出芽克隆；横裂时身体形成一叠盘片并依次释放通常八辐的碟状幼体。[Kraus et al. 2022](https://doi.org/10.7717/peerj.13361) [Schmitz et al. 2023](https://doi.org/10.1128/spectrum.00262-23)

白海材料雌雄异体，卵和胚胎在雌体口腕育幼囊中发育；实验室 10—12°C 下约四天形成早期浮浪幼体。该时间来自一个种群和培养条件，不应写成所有野外个体的固定四日历。[Kraus et al. 2022](https://doi.org/10.7717/peerj.13361)

Roscoff 材料的实验显示，天然微生物群必须在横裂开始前存在，水螅体才能正常分节并产生健康碟状幼体。这是很好的研究事实，但应标为 Roscoff 实验结果，不能概括成已知全球微生物“开关”。[Schmitz et al. 2023](https://doi.org/10.1128/spectrum.00262-23)

不同种群对降温、冬季长度、盐度和微生物条件的反应不同。不能用一个温度阈值生成全球繁殖日历，也不能把季节性大量碟状幼体释放等同于全年持续“爆发”。

### 食性、捕食机制与生态边界

狭义海月水母是肉食性浮游捕食者，主要摄食桡足类、桡足幼体、枝角类、软体动物幼体及其他小型浮游动物；早期鱼苗是部分实验中的机会性猎物，不是固定主食。[Titelman & Hansson 2006](https://doi.org/10.1007/s00227-005-0200-5) [Barz & Hirche 2005](https://doi.org/10.1007/s00227-005-1572-2)

成体伞体脉动既推进身体，也形成把猎物带向伞下、短缘触手和口腕的水流；猎物再由刺细胞、黏液和纤毛截留并输送到口部。图片应表现毫米级猎物的被动相遇与输送，不画成追逐、咀嚼、粗长触手缠杀或“鱼苗专杀者”。[Feitl et al. 2009](https://doi.org/10.1086/BBLv217n3p283)

波罗的海野外样本以枝角类 *Bosmina coregoni maritima* 为主，另有软体动物幼体和桡足类，未检出鱼卵或鱼苗且研究期总体捕食压力低。这与别处实验记录早期鱼苗并不矛盾，而是说明食谱和生态效应取决于地点、季节、个体尺寸、猎物场与实验设计。[Barz & Hirche 2005](https://doi.org/10.1007/s00227-005-1572-2)

### 行为、神经与局地聚集

海月水母没有集中式大脑，但具有分散神经网；通常八个伞缘缘感器（rhopalia）整合起搏、平衡与光感信息，协调节律性脉动。“没有脑”不能改写成“没有感觉”“完全随波漂流”或八个小脑。[Pallasdies et al. 2019](https://doi.org/10.7554/eLife.50084)

流体实验显示，伞体弹性回弹产生的涡环会被后续收缩回收；实验估算每个游泳周期的移动距离增加约 30%，运输成本改善约 48%。这些是特定实验与模型下的机制估计，不是每只野外个体始终保持的性能常数。[Gemmell et al. 2013](https://doi.org/10.1073/pnas.1306983110)

所谓“水母暴发”必须限定海区、年份、生命阶段和采样方法。可见水母被风或水流聚成一团，并不自动证明繁殖增加；一次局地聚集也不能推断全球丰度、趋势或生态灾害。

### IUCN、压力与行动建议

截至 2026-08-21，IUCN Red List 物种检索没有返回 *Aurelia aurita* 的正式评估记录。因此产品字段应为 `conservation('NE', 'unknown')`，不设 `assessedYear`、`criteria` 或种群趋势方向。[IUCN species search](https://www.iucnredlist.org/search?query=Aurelia%20aurita&searchType=species)

这里的 `NE` 是产品对“未评估”的诚实呈现：

- 不等于 `LC`，不能写“数量很多所以无危”。
- 不等于 `DD`；IUCN 没有完成评估，与完成评估后判定资料不足是两件事。
- 检索日期不是评估年份，不能把 `assessedYear` 填成 2026。
- 没有正式评估时，也没有 IUCN criteria、全球成熟个体数或官方全球趋势。

当前 `threats: []` 是审慎选择。没有证据支持为狭义种编排全球主要威胁并排序；物种复合群误鉴定本身还会污染历史趋势。

局地实验仍可说明压力反应，但不能升级成全球保护结论：Roscoff 水螅体在急性升温或升盐实验中存活下降、体型缩小且无性繁殖受抑；英国 Horsea Lake 种群在更短、更暖冬季处理中横裂减少或延迟，研究也强调种群特异性。由此不能推出“变暖必然让所有海月水母更多”或“必然让全物种下降”。[Pinnow et al. 2023](https://doi.org/10.1186/s42523-023-00266-4) [Loveridge et al. 2021](https://doi.org/10.1007/s10750-020-04483-9)

推荐 `conservationActions` 实际是研究与局地管理建议，不冒充 IUCN 恢复计划：

1. 以地点、照片、凭证标本和 DNA 条形码复核 *Aurelia* 记录。
2. 在同一时间序列同时监测水母体、水螅体、横裂体/碟状幼体以及温度、盐度、溶氧、猎物和水动力。
3. 维护沿岸水质并减少塑料和化学污染，但不声称单项污染已造成全球种群下降。
4. 对取水口等局地冲突采用可监测的工程缓解，避免把无差别清除包装成物种保护。

### 人类关系与安全纠误

海月水母常见于科研、公众水族展示和沿岸聚集监测；透明四辐身体适合解释刺胞动物结构和水螅体—水母体生活史。人工饲养或展缸材料仍需要来源与分子凭证，不能因标签写着 moon jelly 就自动用于狭义种事实。

VIMS 将月亮水母蜇刺描述为通常很轻微或难以察觉，NPS 则说明接触仍可能造成皮肤刺激。因此安全文案应是：**通常仅造成轻微或无明显反应，但不保证人人无反应；不要徒手触摸无法可靠鉴定的野生水母。**[VIMS](https://www.vims.edu/bayinfo/jellyfish/guide/moon_jelly.php) [US National Park Service](https://www.nps.gov/foma/learn/nature/jellyfish.htm)

纠误边界：

- 不写“完全无毒”“没有刺细胞”或“可以放心摸”；刺细胞是捕食结构，人体反应只是通常较轻。
- 不把未知水母的急救都套成同一流程；离水、避免再次接触，并遵循当地医疗/救生部门针对当地物种的指引。
- 不用淡水、徒手揉擦、尿液等网络偏方处理未知刺伤；出现呼吸困难、广泛反应、眼部接触或持续剧痛时应立即寻求急救。
- 1988 年显著局部皮损病例早于隐存种拆分，不能无条件当作今天狭义 *A. aurita* 的典型严重度。

## 当前 `src/data/species.ts` 字段审计

| 部分 | 当前结论 | 审计建议 |
| --- | --- | --- |
| `id` / `slug` | `species-aurelia-aurita` / `moon-jelly` | 保留；一个具体物种档案，不用 `Aurelia spp.`。 |
| 中英文名 | 海月水母 / Moon Jellyfish | 保留；中文名来自项目 TODO，正文首次出现必须带学名。 |
| aliases | Common Jellyfish、Saucer Jelly、Medusa aurita | 前两项是检索俗名；`Medusa aurita` 是原始组合，应避免在 UI 中标成现代俗名。 |
| taxonomy | Cnidaria / Scyphozoa / Semaeostomeae / Ulmaridae / Aurelia | 与 WoRMS 一致。 |
| conservation | `NE / unknown`、无年份、无 criteria | 正确；依赖 `assessedYear?: number` 与无第三参数的 helper。 |
| distribution | 北大西洋主轴及受限域外分子记录 | 保留“不完整、可能引入、太平洋待确认”说明；不加地中海/中国旧记录。 |
| `center` | 北海代表点 56°N, 4°E | 可保留，只是地图焦点；UI 不得称范围中心。 |
| habitats | 水柱、半封闭沿岸水体、硬质附着面 | 正确覆盖水母体和水螅体。 |
| measurements | 15—30 cm | note 必须继续写伞径与近 40 cm 较大个体。 |
| metrics | `{}` | 正确；不要为排序牺牲尺寸语义。 |
| diet | `carnivore`；小型甲壳类等 | 正确；早期鱼苗必须保留“机会性、地点依赖”。 |
| activity | 脉动、八缘感器、底栖水螅体、局地聚集 | 正确；避免固定昼夜节律或主动长距离迁徙。 |
| storySections | 6 段 | 身份、身体、游泳、摄食、生命周期、监测边界完整。 |
| threats | `[]` | 正确；不是缺内容，而是不虚构全球威胁排序。 |
| conservationActions | 分类复核、阶段监测、水质、局地工程 | 可保留，但应理解为建议，不是官方恢复计划。 |
| sources | 19 条 | 已覆盖 NE、分类、尺寸、生境、生活史、食性、行为、局地压力与安全。 |
| dates | 2026-08-21 | 是内容/访问日期，不是 IUCN 评估年份。 |

## 六张已落盘图片的叙事、文案与科学限制

六图都是**代表性 AI 重建**，不是凭证标本、真实发生记录、丰度样带或种级诊断。共同要求：3:2、1536×1024；浅透明圆伞；四枚马蹄形性腺；四条短褶皱口腕；短细伞缘触手；不发光；不出现海刺水母式长触手、箱形伞、煎蛋中心、热带珊瑚礁、文字或水印。

### 01 `01-coastal-water-portrait.webp` — 封面辨识

- 场景/提示词核心：冷温带北大西洋蓝绿水层，一只完整成体位于右侧，左侧约 42% 安静负空间；三分之四伞下视角，四性腺、四口腕、短触手和辐管可见。
- alt：`按狭义海月水母北大西洋形态创作的 AI 图像：冷蓝海水中一只透明圆伞水母位于画面右侧，四枚粉白马蹄形性腺、四条口腕和细短伞缘触手清楚可见`
- caption：封面不另设 caption；正文必须说明形态不等于分子鉴定。
- 避免：第二只水母、长拖带触手、霓虹生物发光、热带礁、水族箱、裁掉伞缘或口腕。

### 02 `02-four-horseshoe-gonads.webp` — 四辐身体

- 场景/提示词核心：一只成体近乎正下方透射光微距；完整圆伞内恰好四枚向心开口的马蹄形性腺、四条口腕和分枝辐管。
- alt：`按狭义海月水母形态创作的 AI 图像：一只透明水母从伞下近乎正面展开，四枚向内开口的马蹄形性腺、四条褶皱口腕和放射状水管清晰可见`
- caption：`性腺环和四条口腕是醒目线索，但多个海月属物种外形重叠；可靠种级鉴定通常需要地点、凭证和分子数据。`
- 避免：把四环画成一块实心四叶草、五/六/八辐对称、解剖切片、标注箭头或“凭此即可鉴定”。

### 03 `03-sheltered-bay-habitat.webp` — 沿岸生境

- 场景/提示词核心：泛化的北大西洋冷温带半封闭海湾，全水下广角；恰好三只水母在不同深度广泛分开，水面和远处低矮硬底/稀疏海草只是环境背景。
- alt：`泛化的北大西洋冷温带浅湾水下，三只透明海月水母在水面与稀疏海草上方不同深度分散游动`
- caption：`狭义本种的分子记录跨越北大西洋及若干域外水域，却不支持沿用“全球所有海月都是同一种”的旧说。`
- 避免：密集“暴发墙”、可识别地点、热带生物、把海草写成本种必需生境或把三只同框当丰度证据。

### 04 `04-plankton-capture-feeding.webp` — 脉动摄食

- 场景/提示词核心：一只成体处于轻微伞收缩，少量毫米级桡足类散在伞下和伞缘；少数颗粒贴近黏液/口腕，大多数仍在水中。
- alt：`按狭义海月水母形态创作的 AI 图像：一只正收缩透明伞体的水母周围散布微小桡足类，部分猎物贴近伞缘和褶皱口腕`
- caption：`水流把小型浮游猎物带向伞下捕获面；画面中的桡足类是尺度受控的机制示意，不代表固定食谱或摄食率。`
- 避免：巨型桡足类、鱼群、粗长触手捆绑、牙齿/咀嚼、毒雾、可见声波或密集粒子汤。

### 05 `05-strobila-ephyra-release.webp` — 横裂与碟状幼体

- 场景/提示词核心：冷温带海水硬底下方的毫米级微距；恰好一个普通水螅体、一个由基部附着且盘片朝下的横裂体、一个在下方刚释放的八辐碟状幼体。
- alt：`海水中硬底下方的毫米级生命周期示意：一个带细触手的水螅体、一个盘片堆叠的横裂体和一只刚释放的八辐碟状幼体`
- caption：`水螅体可出芽，也能横裂并逐枚释放碟状幼体；这张生成图表达阶段关系，形态本身仍不足以确认种级身份。`
- 避免：倒置附着、横裂体下方多余柄、成体四性腺、多个游离碟状幼体、五辐海星、海葵/Hydra/虫体或生活史箭头。

### 06 `06-coastal-bloom-monitoring.webp` — 非接触监测

- 场景/提示词核心：泛化北大西洋海湾的分水面场景；一艘小艇、恰好两名研究者、一个远离动物的相机—CTD 组件、恰好三只分散水母；采表层水样并记录，不捕捞、不触碰。
- alt：`泛化北大西洋海湾的水线上下，两名研究者在小艇采集表层水样并记录，水下相机与传感器远离三只分散的海月水母`
- caption：`影像、水样、环境条件与分子凭证需要互相补足；单次 eDNA 或可见数量不能独自给出种级丰度和全球变化。`
- 避免：网、钩、笼、吸管、抓取机械臂、动物标签、密集水母、实验员触摸、可读仪表结果或由单样本宣布全球趋势。

完整生成提示词与重做 05 的定向修正词已保存在 `src/assets/source/species/moon-jelly/README.md`，实现时不应把研究稿中的简写替换成更泛化的“pretty jellyfish”提示词。

## 来源清单与推荐数据用途

| 来源 | kind | 支持字段/边界 |
| --- | --- | --- |
| [IUCN species search](https://www.iucnredlist.org/search?query=Aurelia%20aurita&searchType=species) | conservation | 核验日无正式评估；`NE / unknown`，无年份和 criteria。 |
| [WoRMS AphiaID 135306](https://www.marinespecies.org/aphia.php?p=taxdetails&id=135306) | taxonomy | 接受名、作者、原始组合、完整分类链、形态与典型伞径。 |
| [Lawley et al. 2021](https://doi.org/10.7717/peerj.11954) | taxonomy | 28 个物种假说的工作框架、形态重叠、分子诊断、狭义分布、模式地点与可能引入。 |
| [Peters et al. 2025](https://doi.org/10.1093/icesjms/fsaf077) | taxonomy | 当前分类争议与监测中的鉴定不确定性。 |
| [Naturalis North Sea catalogue](https://ns-crustacea.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?cat=TAB_DESCRIPTION&epi=210&id=131594) | general | 北海形态、约 25—40 cm 较大尺寸包络、短缘触手。 |
| [NOAA Stellwagen Bank](https://sanctuaries.noaa.gov/pgallery/pgstellwagen/living/living_25.html) | general | 近岸、近表层水母体概述。 |
| [van Walraven et al. 2016](https://doi.org/10.1007/s00227-016-2945-4) | distribution | 北海水螅体基底与分子鉴定、局地连接度。 |
| [Holst & Jarms 2010](https://doi.org/10.1007/s10750-010-0214-y) | ecology | 北海水螅体低盐实验；不能全球外推阈值。 |
| [Kraus et al. 2022](https://doi.org/10.7717/peerj.13361) | ecology | 白海材料有性繁殖、口腕育幼、胚胎—浮浪幼体发育。 |
| [Schmitz et al. 2023](https://doi.org/10.1128/spectrum.00262-23) | ecology | Roscoff 生命周期、横裂、微生物群实验。 |
| [Titelman & Hansson 2006](https://doi.org/10.1007/s00227-005-0200-5) | ecology | 鱼类仔稚鱼摄食率实验及其地点/实验边界。 |
| [Barz & Hirche 2005](https://doi.org/10.1007/s00227-005-1572-2) | ecology | 中波罗的海地点性食谱与低捕食压力。 |
| [Feitl et al. 2009](https://doi.org/10.1086/BBLv217n3p283) | ecology | 脉动造成摄食水流及功能形态。 |
| [Pallasdies et al. 2019](https://doi.org/10.7554/eLife.50084) | ecology | 神经网、八缘感器、游泳行为。 |
| [Gemmell et al. 2013](https://doi.org/10.1073/pnas.1306983110) | ecology | 涡流能量回收及受限实验百分比。 |
| [Pinnow et al. 2023](https://doi.org/10.1186/s42523-023-00266-4) | conservation | Roscoff 水螅体温盐压力实验；非全球趋势。 |
| [Loveridge et al. 2021](https://doi.org/10.1007/s10750-020-04483-9) | conservation | 暖冬/短冬与种群特异横裂反应。 |
| [VIMS Moon Jellyfish](https://www.vims.edu/bayinfo/jellyfish/guide/moon_jelly.php) | general | 通常轻微或不易察觉的蜇刺。 |
| [US National Park Service](https://www.nps.gov/foma/learn/nature/jellyfish.htm) | general | 仍可能皮肤刺激与公众接触边界。 |

所有落库来源的 `accessedAt` 统一为 `2026-08-21`。标题应保留论文研究对象/地点提示，防止后续维护者把局地实验自动升级成全球事实。

## 字段—证据追溯矩阵

| 落库内容 | 主来源 | 必须保留的限制 |
| --- | --- | --- |
| 学名与分类 | WoRMS | 原始组合不是另一个现生种。 |
| 28 个物种假说与可靠鉴定 | Lawley 2021；Peters 2025 | 当前工作框架仍有讨论；可见四环不诊断物种。 |
| 狭义分布 | Lawley 2021 | 原生范围推断、可能引入、西北太平洋待确认。 |
| 伞径 | WoRMS；Naturalis | 典型 15—30 cm；近 40 cm 是较大个体，不是统一最大值。 |
| 水母体/水螅体生境 | NOAA；van Walraven 2016 | 水柱与附着面均要记录；人工面不等于必需生境。 |
| 生命周期 | Kraus 2022；Schmitz 2023 | 白海/Roscoff 结果需标地点与培养条件。 |
| 食谱 | Titelman 2006；Barz 2005 | 地点、季节、尺寸差异；不写专吃鱼苗。 |
| 游泳与神经 | Feitl 2009；Pallasdies 2019；Gemmell 2013 | 实验百分比不是野外固定常数。 |
| IUCN | 当前 IUCN 搜索 | NE、unknown、无评估年；不写 LC/DD。 |
| 局地压力 | Pinnow 2023；Loveridge 2021 | 不由水螅体实验推断全球趋势。 |
| 安全 | VIMS；NPS | 通常轻微不等于绝对无害；未知水母不触摸。 |

## 静态资源、验证与 TODO 集成

静态资源应保持一一映射：

- 源图：`src/assets/source/species/moon-jelly/01` 至 `06` 的 `*-source.png`
- 运行时图：`public/images/species/moon-jelly/01` 至 `06` 的同基名 `.webp`
- 提示词与科学边界：`src/assets/source/species/moon-jelly/README.md`
- 总索引：`src/assets/source/README.md` 的 Moon jellyfish image set 链接
- 规格：六张均为 1536×1024、8-bit sRGB、无 alpha；运行时采用 `cwebp -q 82 -m 6 -mt`

实现核对：

1. 分类路径固定为 `Animalia / Cnidaria / Scyphozoa / Semaeostomeae / Ulmaridae / Aurelia`。
2. `ConservationStatus.assessedYear` 对 NE 必须允许省略；helper 调用固定为 `conservation('NE', 'unknown')`。
3. `storySections` 恰好 6 段、gallery 恰好 5 张，封面不在 gallery 重复。
4. `measurements.length` 仅在 note 明确伞径时保留，`metrics` 为空。
5. 六个媒体路径、alt、caption 与实际画面逐一对应。
6. 若目录只有本次新增一个物种档案，期望计数为 **27 个物种、83 个分类单元、110 个总节点**；刺胞动物门下应有 2 个物种，钵水母纲下 1 个。
7. 验证使用 `npm run typecheck`、`npm test`、`npm run build`、静态图像检查和 `git diff --check`；按仓库约束不打开 GUI 或无头浏览器。

TODO 收尾顺序：只有在数据对象、NE schema、分类测试、六张源图、六张运行时图、资源 README/索引、typecheck、test、build 与静态检查全部完成后，才从 `docs/todo.md` 删除 `海月水母（Aurelia aurita）`。研究稿单独完成不等于物种档案已经完成。
