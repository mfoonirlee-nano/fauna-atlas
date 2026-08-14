# 雪豹（*Panthera uncia*）完整档案研究

- 检索与核验日期：2026-08-14
- 使用范围：`src/data/species.ts` 的雪豹条目及详情页文案
- 证据标准：IUCN/CITES/CMS 官方页面、政府名录、权威生物数据库及原始同行评审论文。没有稳定一手或权威依据的说法不进入推荐字段。

## 结论摘要

### 分类与名称

当前应使用学名 **`Panthera uncia`**，分类为动物界—脊索动物门—哺乳纲—食肉目—猫科—豹属。美国哺乳动物学会 Mammal Diversity Database（MDD v2.5）接受 `Panthera uncia`，把 `Uncia` 作为亚属并把 `Uncia uncia` 列为异名；IUCN/SSC 猫科专家组也使用 `Panthera uncia`，并说明目前按可用资料视为单型种（不承认现生亚种）。[MDD](https://www.mammaldiversity.org/taxon/1006024/) [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-snowleopard)

遗传研究曾提出西部、北部和中部三个亚种，但随后针对样本覆盖、分析方法和形态证据的同行评论认为证据不足；因此通用档案不应直接写成“三个已确认亚种”，以专家组当前采用的单型种处理最稳妥。[Janecka et al. 2017](https://doi.org/10.1093/jhered/esx044) [Senn et al. 2018](https://doi.org/10.1038/s41437-017-0015-4)

命名作者与年份在权威数据库间仍不完全一致：最新版 MDD 写作 `(Boddaert, 1772)`，ITIS 写作 `(Schreber, 1775)`；仓库模型不存作者与年份，因此只保留无争议的二名法 `Panthera uncia`。CMS 当前条约页仍沿用 `Uncia uncia`，但这是条约名录的历史命名，不代表另一个物种。[MDD](https://www.mammaldiversity.org/taxon/1006024/) [ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=933420) [CMS](https://www.cms.int/species/uncia-uncia)

现有 `aliases: ['草豹', '艾叶豹']` 没有在本轮限定的一手/官方来源中得到稳定核实，建议不要写入新档案；保留中文标准名“雪豹”和英文名“Snow Leopard”即可。

### IUCN 状态与种群

最新公开的全球 IUCN 评估为 **易危 VU，标准 C1，种群趋势下降**；评估于 2016 年完成、2017 年发布。评估给出的成熟个体估计为 **2,710—3,386 只**，并按未来三个世代（约 22.62 年）持续下降约 10% 判定 C1。该数值是评估估计，不是一次同步全球普查；IUCN/SSC 猫科专家组明确提醒全球可靠数量仍然不足，不能把它写成精确“现存总数”。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2017-2.RLTS.T22732A50664030.en) [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-snowleopard) [CITES SC75 Doc. 13 Rev.1](https://cites.org/sites/default/files/documents/E-SC75-13-R1.pdf)

因此 `conservation` 建议保持 `conservation('VU', 'decreasing', 2016, 'C1')`；`metrics.estimatedMatureIndividuals` 可写 `[2710, 3386]`，但展示注释必须带“2016 年 IUCN 评估的成熟个体估计”。

### 分布、海拔与生境

雪豹自然分布于亚洲 12 个国家：**阿富汗、不丹、中国、印度、哈萨克斯坦、吉尔吉斯斯坦、蒙古、尼泊尔、巴基斯坦、俄罗斯、塔吉克斯坦、乌兹别克斯坦**。MDD 与 CMS 当前物种页给出的国家集合一致。[MDD](https://www.mammaldiversity.org/taxon/1006024/) [CMS](https://www.cms.int/species/uncia-uncia)

主要山系和高原包括阿尔泰、天山、昆仑、帕米尔、兴都库什、喀喇昆仑、喜马拉雅及青藏高原。典型海拔为 **3,000—5,000 米**，喜马拉雅偶见于 5,500 米以上；北部边缘通常可低至 600—2,500 米，阿尔泰有约 500 米记录。IUCN 全球评估汇总的全分布海拔范围为约 **500—5,800 米**，所以 3,000—5,000 米只能标成“典型”，不能写成物种绝对范围。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-snowleopard) [IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2017-2.RLTS.T22732A50664030.en)

核心生境是高山与亚高山的陡坡、崖壁、山脊、沟谷、碎石坡和岩石露头，常与干旱或半干旱灌丛、草地和山地草原镶嵌。俄罗斯和天山部分地区也使用疏林，但通常避开稠密森林；这说明“终年雪地动物”是错误概括。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-snowleopard)

### 体型与寿命

IUCN/SSC 猫科专家组用于物种概览的成体数据是：头体长 **90—120 厘米**、尾长 **80—100 厘米**、体重 **30—50 千克**；尾巴几乎与头体等长。该来源同时给出总体寿命 **10—20 年**。AnAge 的高质量圈养记录显示最大寿命 **21.2 年**，但野外平均寿命没有同等可靠的全球数据，因此不要把“10—13 年”硬写成野外寿命。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-snowleopard) [AnAge](https://genomics.senescence.info/species/entry.php?species=Uncia_uncia)

`measurements` 建议采用同一来源的一组协调值（90—120 厘米、30—50 千克），不要把不同资料中的极端个体值混成貌似精确的统一范围；尾长应放入 `featuredStats` 或正文，因为现有类型没有独立 `tailLength` 字段。

### 形态与高山适应

冬毛浓密，腹部毛可长至约 12 厘米；浅灰至灰褐底色和深色斑点、玫瑰斑有助于融入岩坡。扩大的鼻腔、发达胸肌、长腿和宽大的前掌适合寒冷、低氧、深雪和陡坡环境；粗长尾巴在险峻地形中辅助平衡，休息时也可围住身体保温。这些形态功能均见 IUCN/SSC 猫科专家组物种说明。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-snowleopard)

2025 年的形态—化石—有限元综合研究进一步支持：现代雪豹骨骼首先表现为对陡坡运动的适应，对寒冷/高海拔的骨骼适应相对次要；因此不宜把每个形态特征都简单归因于“低氧”。[Jiangzuo et al. 2025](https://doi.org/10.1126/sciadv.adp5243)

基因组研究发现雪豹 `EGLN1`、`EPAS1` 中存在雪豹特异变化，作者只把它们称为可能参与高海拔适应的候选变异；另一项血红蛋白实验发现雪豹与非高原的狮子同样具有较低氧亲和力，说明不能写“雪豹的血红蛋白特别擅长携氧”。较稳妥的表述是：低氧耐受可能涉及氧运输链的其他补偿机制，具体机制仍在研究。[Cho et al. 2013](https://doi.org/10.1038/ncomms3433) [Janecka et al. 2015](https://doi.org/10.1242/jeb.125369)

### 行为与交流

雪豹主要独居，以晨昏活动为主，常沿山脊、沟谷和破碎崖壁移动、休息与标记。蒙古 23 只野生个体的 GPS 与加速度计研究将其概括为“可选择性偏夜行并有晨昏高峰”：雄性移动活动的夜/昼比例约为 66%/34%，雌性约为 60%/40%，而总体夜间比例由夏季约 68% 降至冬季约 58%。这些结果支持“不应把全物种绝对写成夜行性”，具体比例仍是蒙古研究地数据。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-snowleopard) [Johansson et al. 2022](https://doi.org/10.1038/s41598-022-26358-w)

南戈壁 16 只 GPS 戴项圈个体的研究显示，同性家域重叠低，支持领域性；LoCoH 方法估计当地雄性平均家域 207±63 平方千米、雌性 124±41 平方千米。家域随猎物和地形差异很大，这些数字只能作为南戈壁案例，不宜写成全球固定值。[Johansson et al. 2016](https://doi.org/10.1016/j.biocon.2016.08.034)

个体主要以气味和可见标记间接交流。2025 年蒙古阿尔泰原始研究同时使用相机、雪地追踪与刮痕样线，确认嗅闻、喷尿、后足刨刮、擦蹭、粪便和抓痕等行为；刮痕与喷尿是最常见的主动标记之一。[Krofel et al. 2025](https://doi.org/10.1007/s00265-025-03574-8)

雪豹会发出长叫等声音，但不能像狮、虎、豹和美洲豹那样发出典型深吼。解剖研究发现其声带较短且缺少产生强吼声所需的大型纤维弹性组织垫；“不能吼叫”有依据，但现有条目中的笼统“会发出叫声、嘶声和呼呼声”最好简化为“可发长叫等声音”。[Hast 1989](https://pmc.ncbi.nlm.nih.gov/articles/PMC1256521/)

### 食性与捕猎

雪豹是专性肉食捕食者，主要猎物是山地野生羊、山羊类。跨分布区食性分析识别的核心猎物包括西伯利亚北山羊、岩羊、喜马拉雅塔尔羊、盘羊和旱獭；显著偏好的猎物体重约为 36—76 千克，并显著偏好西伯利亚北山羊和岩羊。不同地区的猎物组成差异很大。[Lyngdoh et al. 2014](https://doi.org/10.1371/journal.pone.0088349)

也会捕食捻角山羊、麝类、鼠兔、野兔、雪鸡和石鸡等，并在牧区捕食家畜。较新的遗传核验提醒，旧式仅凭外观判断粪便会高估小型猎物，因此推荐文案应把野生有蹄类放在食谱首位，小型哺乳类和鸟类写作补充。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-snowleopard)

捕猎通常利用上方岩石和掩体接近，再沿陡坡追击；不受干扰时可在大型猎物旁停留数日。蒙古 Tost 地区对 19 只戴项圈个体的猎杀点核查发现，当地平均约 8 天猎杀一只有蹄类，73% 为野生猎物、27% 为家畜，即使家畜数量远高于野生猎物仍偏向野生有蹄类；这些比例必须明确是单一研究地结果。[Johansson et al. 2015](https://doi.org/10.1016/j.biocon.2015.02.003)

### 繁殖与育幼

IUCN/SSC 猫科专家组汇总为：约 2—3 岁性成熟，交配集中在 1 月初至 3 月中旬，妊娠约 98—104 天，多在 5—6 月产仔，每胎 1—5 只。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-snowleopard)

蒙古 Tost 的野外原始研究（7 窝产仔日期、3 组母幼 GPS）记录到 1—3 月交配、4—6 月产仔；幼崽在第二个冬季约 20—22 月龄才开始长时间离开母兽。两只雌性幼崽在初次分离后仍于母域停留数月，一只雄性很快扩散，实际扩散约为 23 至至少 33 月龄。样本很小，适合写“约 20—22 月龄开始独立”，不适合断言所有幼崽都在某一天离母。[Johansson et al. 2021](https://doi.org/10.1007/s42991-020-00073-3)

### 威胁

分布国政府共同形成的 GSLEP 威胁评估与 IUCN/SSC 猫科专家组一致，核心威胁为：[GSLEP Threats](https://globalsnowleopard.org/the-snow-leopard/threats/) [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-snowleopard)

- 野生有蹄类因盗猎、过度捕猎及与家畜竞争而减少；
- 家畜扩张和过度放牧导致草场及猎物生境退化；
- 捕食家畜引发报复性或预防性捕杀；
- 为毛皮、骨骼及其他身体部位进行的盗猎和非法贸易；
- 矿业、道路、水坝、聚落等造成栖息地退化、破碎化和廊道阻断；
- 气候变暖改变高山带，尤其使喜马拉雅和横断山部分栖息地更脆弱；
- 执法能力、科学信息和跨境协作不足。

气候模型不是“整个分布区都会同幅度消失”的证据。原始研究预计阿尔泰、祁连、天山—帕米尔—兴都库什—喀喇昆仑可能保留较稳定的气候避难所，同时喜马拉雅和横断山更易受变暖与人类活动叠加影响。[Li et al. 2016](https://doi.org/10.1016/j.biocon.2016.09.026)

### 保护措施与法律地位

保护应以大尺度连通山地而非孤立小保护区为单位。南戈壁 GPS 研究指出，全球当时统计的 170 个雪豹保护地中约 40% 小于一只成年雄兽的当地家域尺度，说明仅依靠保护区不足；需要维护跨境廊道，并在有人、牲畜共同使用的景观中实施保护。[Johansson et al. 2016](https://doi.org/10.1016/j.biocon.2016.08.034)

可操作的措施包括：保护并恢复野生猎物；改善放牧和牲畜圈舍、疫苗、保险/补偿及替代生计以减少报复性捕杀；反盗猎、打击非法贸易和需求；在矿业与交通规划中保留关键生境和廊道；开展跨境协作；用相机、遗传样品、占域与空间捕获—再捕获的统一方案进行长期监测。上述方向与 12 个分布国通过的《比什凯克宣言》、GSLEP 优先事项及 PAWS 监测框架一致。[Bishkek Declaration](https://globalsnowleopard.org/wp-content/uploads/2019/05/Bishkek-Declaration-Adopted-23Oct2013-eng.pdf) [GSLEP Priorities](https://globalsnowleopard.org/what-is-gslep/gslep-tasks/) [PAWS](https://globalsnowleopard.org/gslep-projects/paws/)

法律与国际公约状态：

- **CITES 附录 I**：自 1975-07-01 起列入；国际商业贸易受到附录 I 的严格限制。CITES 2019 年采用 `Panthera uncia`，早期文件使用 `Uncia uncia`。[CITES Appendices](https://cites.org/eng/app/appendices.php) [CITES SC75 Doc. 13 Rev.1](https://cites.org/sites/default/files/documents/E-SC75-13-R1.pdf)
- **CMS 附录 I**：CMS 当前物种页记载自 1986 年列入，要求缔约方保护并原则上禁止捕捉（有限例外）；该条约页仍使用 `Uncia uncia`。[CMS](https://www.cms.int/species/uncia-uncia)
- **中国国家一级重点保护野生动物**：现行依据为国家林业和草原局、农业农村部公告 2021 年第 3 号公布的《国家重点保护野生动物名录》。[官方公告](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml) [名录 PDF](https://www.forestry.gov.cn/html/main/main_5461/20210205122239482485322/file/20210205122347636743107.pdf)

## 应删除或改写的现有说法

- 删除“**一次跳跃可跨越约 15 米**”。本轮没有找到能稳定支撑 15 米的官方/原始证据；不要用网络科普的重复转述凑数。
- 不把 `elevationM: [3000, 5000]` 解释成全分布范围；它只适合作为“典型海拔”。数值比较字段若表达完整记录范围应改为 `[500, 5800]`。
- 不把 `lifespanYears: [10, 13]` 写成确定的野外寿命。推荐使用专家组概览的 `[10, 20]`，并在正文说明圈养最高可靠记录 21.2 年、野外平均值不确定。
- 不把成熟个体 2,710—3,386 写成“全球总数”或实时普查结果。
- 不写“终年生活在雪线以上”“严格夜行”“所有个体家域固定为某面积”。海拔、活动时段和家域均有显著地区差异。
- 不在缺乏权威来源时保留“草豹、艾叶豹”两个别名。

## 可直接用于 `species.ts` 的字段建议

以下代码使用仓库现有 helper 和类型；作为整条记录落地时，应另行补入素材任务提供的 `media`，并保留或明确设置现有 `featured` 与 `publishedAt`。

```ts
const SNOW_LEOPARD_SOURCE_DATE = '2026-08-14' as const;

const SNOW_LEOPARD_SOURCES = [
  {
    title: 'IUCN Red List — Panthera uncia (2016 assessment, published 2017)',
    url: 'https://doi.org/10.2305/IUCN.UK.2017-2.RLTS.T22732A50664030.en',
    kind: 'conservation',
    accessedAt: SNOW_LEOPARD_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Cat Specialist Group — Snow Leopard',
    url: 'https://www.catsg.org/living-species-snowleopard',
    kind: 'general',
    accessedAt: SNOW_LEOPARD_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database — Panthera uncia',
    url: 'https://www.mammaldiversity.org/taxon/1006024/',
    kind: 'taxonomy',
    accessedAt: SNOW_LEOPARD_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III',
    url: 'https://cites.org/eng/app/appendices.php',
    kind: 'conservation',
    accessedAt: SNOW_LEOPARD_SOURCE_DATE,
  },
  {
    title: 'CMS — Snow Leopard (Uncia uncia)',
    url: 'https://www.cms.int/species/uncia-uncia',
    kind: 'conservation',
    accessedAt: SNOW_LEOPARD_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局、农业农村部 — 国家重点保护野生动物名录（2021年第3号）',
    url: 'https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml',
    kind: 'conservation',
    accessedAt: SNOW_LEOPARD_SOURCE_DATE,
  },
  {
    title: 'Lyngdoh et al. 2014 — Prey preferences of the snow leopard',
    url: 'https://doi.org/10.1371/journal.pone.0088349',
    kind: 'ecology',
    accessedAt: SNOW_LEOPARD_SOURCE_DATE,
  },
  {
    title: 'Johansson et al. 2015 — Snow leopard predation in Mongolia',
    url: 'https://doi.org/10.1016/j.biocon.2015.02.003',
    kind: 'ecology',
    accessedAt: SNOW_LEOPARD_SOURCE_DATE,
  },
  {
    title: 'Johansson et al. 2016 — Land sharing is essential for snow leopard conservation',
    url: 'https://doi.org/10.1016/j.biocon.2016.08.034',
    kind: 'ecology',
    accessedAt: SNOW_LEOPARD_SOURCE_DATE,
  },
  {
    title: 'Johansson et al. 2021 — Timing of breeding and independence',
    url: 'https://doi.org/10.1007/s42991-020-00073-3',
    kind: 'ecology',
    accessedAt: SNOW_LEOPARD_SOURCE_DATE,
  },
  {
    title: 'Krofel et al. 2025 — Snow leopard communication behaviour',
    url: 'https://doi.org/10.1007/s00265-025-03574-8',
    kind: 'ecology',
    accessedAt: SNOW_LEOPARD_SOURCE_DATE,
  },
  {
    title: 'GSLEP — Snow Leopard Threats',
    url: 'https://globalsnowleopard.org/the-snow-leopard/threats/',
    kind: 'conservation',
    accessedAt: SNOW_LEOPARD_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

// Replace the existing snow-leopard record's researched fields with:
{
  id: 'species-panthera-uncia',
  slug: 'snow-leopard',
  names: { zh: '雪豹', en: 'Snow Leopard', aliases: [] },
  scientificName: 'Panthera uncia',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Carnivora', '食肉目'),
    taxon('Felidae', '猫科'),
    taxon('Panthera', '豹属'),
  ),
  conservation: conservation('VU', 'decreasing', 2016, 'C1'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲'],
    regions: ['青藏高原', '喜马拉雅山脉', '喀喇昆仑山脉', '兴都库什山脉', '帕米尔高原', '天山山脉', '昆仑山脉', '阿尔泰山脉'],
    countries: ['阿富汗', '不丹', '中国', '印度', '哈萨克斯坦', '吉尔吉斯斯坦', '蒙古', '尼泊尔', '巴基斯坦', '俄罗斯', '塔吉克斯坦', '乌兹别克斯坦'],
    range: '自然分布跨越中亚与南亚十二国的山地系统，从喜马拉雅、青藏高原延伸至帕米尔、天山和阿尔泰；典型海拔约 3,000—5,000 米，但完整记录约为 500—5,800 米。',
    center: { lat: 35, lng: 82 },
  },
  habitats: [
    {
      name: '高山与亚高山岩地',
      realm: 'terrestrial',
      description: '主要利用陡坡、崖壁、山脊、沟谷、碎石坡和岩石露头；破碎地形同时提供移动路线、伏击掩体和标记地点。',
      isPrimary: true,
    },
    {
      name: '高寒草甸、灌丛与山地草原',
      realm: 'terrestrial',
      description: '常见于干旱或半干旱草地、灌丛和草原与岩地交错的景观；北部部分地区也使用疏林，但通常避开稠密森林。',
    },
  ],
  measurements: {
    length: { min: 90, max: 120, unit: 'cm', note: '头体长；另有 80—100 厘米的粗长尾巴' },
    weight: { min: 30, max: 50, unit: 'kg', note: 'IUCN/SSC 猫科专家组概览范围；雄性通常较大' },
  },
  diet: {
    types: ['carnivore'],
    foods: ['岩羊', '西伯利亚北山羊', '盘羊', '喜马拉雅塔尔羊', '旱獭与鼠兔', '鸟类与家畜'],
    description: '主要伏击山地野生羊、山羊类，也利用旱獭、鼠兔、野兔和鸟类；在牧区会捕食家畜，但猎物组成随地区和季节显著变化。',
  },
  activity: ['晨昏活动为主', '独居', '领域性', '沿山脊、沟谷和断崖移动并标记'],
  tags: ['高山生态系统', '顶级捕食者', '旗舰物种', '国家一级保护野生动物', 'CITES 附录 I', 'CMS 附录 I'],
  summary: '穿行于亚洲十二国高山岩脊之间、以野生有蹄类为核心猎物的旗舰捕食者。',
  description: '雪豹并非只生活在终年积雪之上：它利用从阿尔泰低海拔山地到喜马拉雅高寒带的岩壁、碎石坡、草原与灌丛。浓密冬毛、宽大足掌和粗长尾巴帮助它应对寒冷、深雪与陡坡；保护雪豹则需要同时维护野生猎物、跨境廊道和牧民生计。',
  storySections: [
    {
      key: 'adaptation',
      label: '形态与适应',
      title: '为陡坡、寒冷与薄空气塑造的身体',
      body: '浅灰被毛和玫瑰斑融入岩坡，冬季腹毛可长至约 12 厘米。扩大的鼻腔、发达胸肌、长腿和宽大前掌帮助它穿越高海拔深雪；几乎与头体等长的粗尾则在峭壁上辅助平衡，休息时也可围住身体保温。',
    },
    {
      key: 'communication',
      label: '行为与交流',
      title: '独居者留下的气味路标',
      body: '雪豹大多独自活动，却会在山脊、沟谷和崖壁通道反复嗅闻、喷尿、刨刮与擦蹭，让后来者获得身份、领域和繁殖信息。它不能发出狮虎式深吼，但会以长叫等声音在繁殖期联系。',
    },
    {
      key: 'hunting',
      label: '食性与捕猎',
      title: '从岩脊上方接近山地有蹄类',
      body: '雪豹借岩石遮蔽从上方潜近，再沿陡坡追击。岩羊和西伯利亚北山羊是跨区域最重要的猎物，盘羊、塔尔羊、旱獭、鼠兔和鸟类也进入食谱；在牧区，减少走失牲畜和恢复野生猎物能同时降低冲突。',
    },
    {
      key: 'reproduction',
      label: '繁殖与成长',
      title: '幼崽要跟随母亲度过两个冬季',
      body: '交配主要集中在 1—3 月，妊娠约 98—104 天，多在 5—6 月产下 1—5 只幼崽。蒙古的母幼 GPS 研究显示，幼崽约到 20—22 月龄、第二个冬季才开始长时间离开母兽，独立过程并非一夜完成。',
    },
    {
      key: 'conservation',
      label: '保护与共存',
      title: '一只雪豹需要的不只是一个小保护区',
      body: '雪豹家域广、密度低，并频繁跨越牧场、行政边界和国境。保护需要连通的大尺度山地、健康的野生有蹄类、反盗猎与贸易执法，也需要牢固圈舍、合理放牧、保险补偿和社区参与来降低报复性捕杀。',
    },
  ],
  keyFacts: [
    '典型活动海拔约 3,000—5,000 米，但全分布记录约跨 500—5,800 米。',
    '80—100 厘米的粗尾几乎与头体等长，在陡坡上辅助平衡，也可围住身体保温。',
    '雪豹以喷尿、刨刮、擦蹭和粪便等标记进行间接交流。',
    '其声带缺少产生狮虎式深吼所需的大型纤维弹性组织垫，因此不能发出典型吼声。',
    '跨区域分析显示，它显著偏好西伯利亚北山羊和岩羊等中大型野生有蹄类。',
    '幼崽约到 20—22 月龄才开始长时间离开母兽，独立晚于体型相近的多种独居猫科动物。',
  ],
  threats: [
    '野生有蹄类过度捕猎、盗猎及与家畜竞争造成猎物减少',
    '过度放牧和牧业扩张导致草场与猎物生境退化',
    '捕食家畜引发的报复性或预防性捕杀',
    '针对毛皮、骨骼和其他身体部位的盗猎与非法贸易',
    '矿业、道路、水坝和聚落造成栖息地破碎及廊道阻断',
    '气候变化改变高山带并与人类开发叠加',
  ],
  conservationActions: [
    '保护并恢复野生有蹄类种群及其草场',
    '以牢固圈舍、合理放牧、疫苗、保险补偿和替代生计降低人兽冲突',
    '加强反盗猎、非法贸易执法和需求削减',
    '维护大尺度跨境景观、关键生境和迁移廊道',
    '以相机、遗传样品和空间捕获—再捕获开展标准化长期监测',
  ],
  metrics: {
    adultLengthCm: [90, 120],
    adultMassKg: [30, 50],
    lifespanYears: [10, 20],
    elevationM: [500, 5800],
    estimatedMatureIndividuals: [2710, 3386],
  },
  featuredStats: [
    { key: 'mature-population', label: '成熟个体估计', value: '2,710—3,386', unit: '只', note: '2016 年 IUCN 全球评估；不是同步普查总数' },
    { key: 'elevation', label: '典型活动海拔', value: '3,000—5,000', unit: '米', note: '完整记录约 500—5,800 米' },
    { key: 'tail', label: '尾长', value: '80—100', unit: '厘米' },
    { key: 'range-countries', label: '分布国家', value: '12', unit: '个' },
  ],
  sources: SNOW_LEOPARD_SOURCES,
  updatedAt: SNOW_LEOPARD_SOURCE_DATE,
}
```

`center: { lat: 35, lng: 82 }` 是地图视图的代表焦点，不是分布中心的科学估计；可保留，但不应在正文解释成种群中心。

## 来源清单

以下来源均于 **2026-08-14** 访问；链接为可直接引用的机构页、正式文档或 DOI。

| 主题 | 来源与稳定 URL | 用途 |
| --- | --- | --- |
| 分类、国家分布 | [ASM Mammal Diversity Database — Panthera uncia](https://www.mammaldiversity.org/taxon/1006024/) | 接受名、上级分类、异名、12 国分布 |
| 分类交叉核对 | [ITIS TSN 933420](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=933420) | 接受名与命名作者差异 |
| 亚种争议 | [Janecka et al. 2017](https://doi.org/10.1093/jhered/esx044)；[Senn et al. 2018](https://doi.org/10.1038/s41437-017-0015-4) | 三亚种假说及其证据限制 |
| IUCN 评估 | [McCarthy et al. 2017, IUCN Red List e.T22732A50664030](https://doi.org/10.2305/IUCN.UK.2017-2.RLTS.T22732A50664030.en) | VU C1、2016 评估、下降趋势、成熟个体和海拔 |
| 综合物种档案 | [IUCN/SSC Cat Specialist Group — Snow Leopard](https://www.catsg.org/living-species-snowleopard) | 体型、形态、生境、海拔、行为、繁殖、威胁 |
| CITES 状态 | [CITES — Appendices I, II and III](https://cites.org/eng/app/appendices.php) | 当前附录 I |
| CITES 物种审查 | [CITES SC75 Doc. 13 Rev.1](https://cites.org/sites/default/files/documents/E-SC75-13-R1.pdf) | 列入日期、12 国、IUCN 成熟个体、贸易审查 |
| CMS 状态 | [CMS — Uncia uncia](https://www.cms.int/species/uncia-uncia) | CMS 附录 I、列入年份、分布国、威胁与 CAMI |
| 中国保护等级 | [国家林草局、农业农村部公告 2021 年第 3 号](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml)；[名录 PDF](https://www.forestry.gov.cn/html/main/main_5461/20210205122239482485322/file/20210205122347636743107.pdf) | 国家一级重点保护野生动物 |
| 寿命 | [AnAge — Uncia uncia](https://genomics.senescence.info/species/entry.php?species=Uncia_uncia) | 圈养最大寿命 21.2 年及证据质量 |
| 骨骼适应 | [Jiangzuo et al. 2025](https://doi.org/10.1126/sciadv.adp5243) | 陡坡、寒冷与高海拔形态适应的相对证据 |
| 低氧候选基因 | [Cho et al. 2013](https://doi.org/10.1038/ncomms3433) | `EGLN1`/`EPAS1` 候选变化，避免过度断言 |
| 血红蛋白 | [Janecka et al. 2015](https://doi.org/10.1242/jeb.125369) | 实验显示无雪豹特异的高氧亲和血红蛋白 |
| 活动节律 | [Johansson et al. 2022](https://doi.org/10.1038/s41598-022-26358-w) | 23 只蒙古个体的夜/昼、晨昏和季节性活动证据 |
| 家域与土地共享 | [Johansson et al. 2016](https://doi.org/10.1016/j.biocon.2016.08.034) | 领域性、家域、保护区尺度限制 |
| 交流 | [Krofel et al. 2025](https://doi.org/10.1007/s00265-025-03574-8) | 嗅闻、喷尿、刨刮等标记行为 |
| 发声解剖 | [Hast 1989](https://pmc.ncbi.nlm.nih.gov/articles/PMC1256521/) | 不能发出典型深吼的声带结构依据 |
| 食性 | [Lyngdoh et al. 2014](https://doi.org/10.1371/journal.pone.0088349) | 跨区域核心猎物与偏好体重 |
| 猎杀与家畜 | [Johansson et al. 2015](https://doi.org/10.1016/j.biocon.2015.02.003) | 蒙古局地猎杀率、野生猎物/家畜选择 |
| 繁殖与独立 | [Johansson et al. 2021](https://doi.org/10.1007/s42991-020-00073-3) | 野外交配、产仔及母幼分离的 GPS 证据 |
| 气候变化 | [Li et al. 2016](https://doi.org/10.1016/j.biocon.2016.09.026) | 气候避难所和区域差异 |
| 景观连通 | [Li et al. 2020](https://doi.org/10.1016/j.biocon.2019.108387) | 全球保护景观、道路/铁路/边境障碍 |
| 政府间威胁共识 | [GSLEP — Threats](https://globalsnowleopard.org/the-snow-leopard/threats/) | 12 个分布国共同威胁排序 |
| 政府间保护承诺 | [2013 Bishkek Declaration](https://globalsnowleopard.org/wp-content/uploads/2019/05/Bishkek-Declaration-Adopted-23Oct2013-eng.pdf) | 景观、社区、反盗猎、产业参与 |
| 标准化监测 | [GSLEP — PAWS](https://globalsnowleopard.org/gslep-projects/paws/) | 占域、相机、遗传与空间捕获—再捕获框架 |
