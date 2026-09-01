# 狮（*Panthera leo*）完整档案研究

- 核验日期：2026-09-01
- 用途：新增狮物种档案、1 张封面与 5 张 gallery、分类测试及 TODO 收尾
- 证据标准：IUCN 正式评估、MDD、IUCN/SSC 猫科专家组、African Lion Database（ALD）、CITES 和原始同行评审论文
- 本文只编辑研究方案。六张已生成素材的提示词与静态验收见 [`src/assets/source/species/lion/README.md`](../../src/assets/source/species/lion/README.md)。

## 可直接采用的结论

### 分类与命名

Mammal Diversity Database 接受 **`Panthera leo (Linnaeus, 1758)`**，分类为 `Carnivora / Felidae / Panthera`。主记录写 `Panthera leo`；中文主名“狮”，英文主名 “Lion”，“狮子”可作中文俗名。“African Lion”和“Asiatic Lion”描述地理种群，不作为整个物种的普通别名。[MDD](https://www.mammaldiversity.org/taxon/1006020/) [IUCN 2026-1 checklist](https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/15951)

IUCN/SSC 猫科专家组接受两个亚种：`P. l. leo` 分布于西非、中非和印度，`P. l. melanochaita` 分布于东非和南部非洲；东北非洲存在遗传混合缝合带。全基因组与 SNP 研究支持北、南两大支和西非与中非、印度、东非、南部非洲四个细尺度聚类，同时指出采样缺口和不完全谱系排序。因此生产记录与六张图保持物种级，不凭鬃毛、腹褶、被毛或背景鉴定亚种。[Kitchener et al. 2017](https://repository.si.edu/handle/10088/32616) [Bertola et al. 2022](https://doi.org/10.1186/s12864-022-08510-y)

### IUCN、种群与贸易状态

截至核验日，最新全球评估是 Nicholson 等 2025 年评估：**VU、A2c、趋势下降**。字段成套写 `conservation('VU', 'decreasing', 2025, 'A2c')`；2023 年 A2abcd 和 2024 修订页已被替代。[IUCN 2025 assessment](https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T15951A280792135.en) [IUCN 2026-1 checklist](https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/15951)

评估依据是 2004 至 2025 年约三个世代、约 21 年间，现存范围估计缩减 **34%**，据此怀疑种群发生同量级缩减；2025 年现存范围约为历史范围的 **6%**。这些是范围变化与受怀疑的种群缩减，不是同步逐只普查。[ALD Species Status](https://www.africanliondatabase.org/species-status/) [ALD Distribution](https://www.africanliondatabase.org/distribution/)

北方狮亚种 EN、南方狮亚种 VU 和 Green Status 的 `Largely Depleted` 都不能覆盖全球物种 VU。CITES 当前把印度种群列入附录 I，其他种群列入附录 II；CITES 管国际贸易，不是灭绝风险等级。[ALD Species Status](https://www.africanliondatabase.org/species-status/) [IUCN Green Status](https://nc.iucnredlist.org/redlist/content/attachment_files/Green_Status_Supplementary_Information_15951_Panthera_leo.pdf) [CITES 2026 Appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)

猫科专家组概览给出非洲约 22,000 至 25,000 只成年与亚成年狮，但调查方法、年份和年龄口径不统一。系统综述认为直接观察和相机捕获再捕获相对可靠，诱叫和足迹计数可能高估。生产记录不填 `estimatedMatureIndividuals`，也不把成年与亚成年数字改写成 IUCN 成熟个体。[CatSG](https://www.catsg.org/living-species-lions) [Nicholson et al. 2024](https://doi.org/10.1016/j.gecco.2024.e02908)

### 分布与生境

ALD 当前给出 **18 个确认现存和 4 个可能现存的非洲范围国家**，亚洲只剩印度大吉尔景观。实时分布与种群图层合并后的国家集合为：安哥拉、贝宁、博茨瓦纳、布基纳法索、喀麦隆、中非共和国、乍得、刚果民主共和国、埃塞俄比亚、肯尼亚、马拉维、莫桑比克、纳米比亚、尼日尔、卢旺达、塞内加尔、南非、南苏丹、坦桑尼亚、乌干达、赞比亚、津巴布韦，以及印度。[ALD Distribution](https://www.africanliondatabase.org/distribution/) [2025 distribution layer](https://services8.arcgis.com/jpPhoh9heohhP413/arcgis/rest/services/NewDistrbutionMap/FeatureServer/0) [2025 population layer](https://services8.arcgis.com/jpPhoh9heohhP413/arcgis/rest/services/NewDistrbutionMap/FeatureServer/1)

ALD 没有以稳定文本表格公开 18 与 4 的逐国拆分，底层图层还有空国家值、拼写错误和同国多状态。`distribution.countries` 无状态字段，因此保存上述 23 国，并在 `range` 明说非洲集合混有确认和可能现存。不要加入当前列为可能灭绝或存在不明的尼日利亚、索马里和苏丹，也不要整国着色。[ALD Distribution](https://www.africanliondatabase.org/distribution/) [CatSG](https://www.catsg.org/living-species-lions)

狮利用稀树草原、草地、灌丛、开放或封闭林地、干燥森林和部分荒漠边缘。印度狮主要利用混交林、稀树草原及柚木、金合欢林地。共同条件是伏击和育幼遮蔽、足够猎物与较低人类干扰；`realms` 只写 `terrestrial`。[CatSG](https://www.catsg.org/living-species-lions)

### 体尺、食性与繁殖

猫科专家组给出体重 **110–272 千克**、头体长 **137–250 厘米**、尾长 **60–100 厘米**、寿命 **12–18 年**。这些是跨性别和地理种群的物种级宽范围，不是典型个体或亚种诊断；寿命来源也未进一步拆分野外与圈养口径。[CatSG](https://www.catsg.org/living-species-lions)

稳定形态包括黄褐至灰褐被毛、圆耳、浅色腹面、强健前躯和深色尾簇。成年雄性通常有鬃毛，成年雌性通常无鬃毛；鬃毛密度、范围和颜色随个体与环境改变，不能据此推断年龄、胜负或亚种。[CatSG](https://www.catsg.org/living-species-lions)

狮是机会主义肉食动物，会捕食、食腐或夺食。非洲常见猎物包括角马、斑马、水牛、水羚和其他羚羊，印度常见水鹿、斑鹿、野猪与蓝牛。跨研究分析发现狮选择约 190–550 千克猎物，最高偏好点约 350 千克；该区间不是绝对菜单，地区食谱随猎物可得性改变。[Hayward & Kerley 2005](https://doi.org/10.1017/S0952836905007508) [CatSG](https://www.catsg.org/living-species-lions)

狮全年都可能繁殖，妊娠 **100–119 天**，每胎 **1–4 只**。雌狮可在约 24 月龄交配，成功繁殖通常在 3 岁以后；雄狮约 30 月龄开始产生精子，却常要到约 5 岁、能够占据领地后才成功繁殖。幼崽存活时，典型产仔间隔约 2–3 年。[CatSG](https://www.catsg.org/living-species-lions)

### 狮群、合作围猎与共同育幼

雌狮构成分合式狮群的稳定核心，并合作维护领地、觅食和照看幼崽。Packer 等发现，食物不足以解释结群：小群体会以觅食效率为代价保持聚集，较大群体在领地冲突中更有优势。故事应写“狮群兼具领地、育幼和觅食功能”，不写“狮群只为围猎”。[Packer et al. 1990](https://doi.org/10.1086/285079)

Stander 在纳米比亚埃托沙分析 486 次协调群猎，记录部分雌狮从两翼绕行、部分居中等待；个体常重复偏好的位置，也会随同伴缺席调整。这支持角色分化，但只来自一处开放半干旱平原，不能外推为全物种固定阵型。[Stander 1992](https://doi.org/10.1007/BF00170175)

同群雌狮可能同步产仔，把幼崽集中成 crèche；稳定育幼群能更有效抵御杀幼雄狮。证据支持“共同照看和防御”，不足以支持“每只雌狮都会给所有幼崽哺乳”。[Packer et al. 1990](https://doi.org/10.1086/285079) [CatSG](https://www.catsg.org/living-species-lions)

### 威胁与行动

主要威胁为栖息地丧失与转化、人狮冲突引发的报复性或无差别杀害、猎物盗猎与丛林肉贸易、套索误捕、身体部位贸易、管理不良或不可持续的战利品狩猎、武装冲突和保护资金不足。印度单一孤立种群还承受疾病、灾害和低遗传多样性的集中风险。[ALD Species Status](https://www.africanliondatabase.org/species-status/) [ALD Threats](https://www.africanliondatabase.org/threats/) [CatSG](https://www.catsg.org/living-species-lions)

保护行动应组合保护地与连通景观管理、猎物恢复、套索和贸易执法、加固畜栏与放牧管理、快速响应与公平补偿、社区收益和参与、透明且科学的狩猎管理，以及可比较的直接观察、相机或遗传捕获再捕获监测。印度还需要维持大吉尔连通性并建立第二个可持续野生种群。[CatSG](https://www.catsg.org/living-species-lions) [Nicholson et al. 2024](https://doi.org/10.1016/j.gecco.2024.e02908)

不同地点的生态和社会政治限制差异明显，不能用单一处方覆盖全范围。肯尼亚 8 年资料显示，补偿与 Lion Guardians 干预在三个研究区和狮被杀数量下降相关；这是有地点和非实验设计边界的干预证据。[Nicholson et al. 2023](https://doi.org/10.1038/s43247-023-00959-3) [Hazzah et al. 2014](https://doi.org/10.1111/cobi.12244)

## 六段故事与四项统计

1. **印度狮的近亲在西非与中非**：两亚种、四聚类和东北非洲混合带。[Bertola et al. 2022](https://doi.org/10.1186/s12864-022-08510-y)
2. **狮群不只为一顿猎物**：结群同时服务于领地、育幼和觅食。[Packer et al. 1990](https://doi.org/10.1086/285079)
3. **围猎中的位置与调整**：埃托沙记录角色分化，但不存在全球固定阵型。[Stander 1992](https://doi.org/10.1007/BF00170175)
4. **一张随地区改变的菜单**：偏好中大型有蹄类，非洲与印度食谱不同。[Hayward & Kerley 2005](https://doi.org/10.1017/S0952836905007508)
5. **共享的育幼群**：母狮共同警戒和防御，不强称无条件共同哺乳。[Packer et al. 1990](https://doi.org/10.1086/285079)
6. **从破碎范围到可恢复种群**：21 年间 34% 范围缩减，保护需要可靠监测与长期共存。[ALD Species Status](https://www.africanliondatabase.org/species-status/)

| key | label | value | unit | note |
| --- | --- | ---: | --- | --- |
| `adult-length` | 头体长 | `137–250` | 厘米 | 尾长另计 60–100 厘米；物种级概览。[CatSG](https://www.catsg.org/living-species-lions) |
| `adult-mass` | 体重 | `110–272` | 千克 | 不代表典型个体或任一亚种。[CatSG](https://www.catsg.org/living-species-lions) |
| `gestation` | 妊娠期 | `100–119` | 天 | 全年均可能繁殖。[CatSG](https://www.catsg.org/living-species-lions) |
| `range-decline` | 三世代范围缩减 | `34` | `%` | 2004–2025 年，约 21 年；不是逐只普查。[ALD](https://www.africanliondatabase.org/species-status/) |

## 六图科学约束

六图均为 AI 科学情景重建，不是现场记录、亚种鉴定、狮群谱系、捕猎结果或监测证据。共同形态以 CatSG 为准，统一排除圈养设施、项圈、血液、尸体、文字、水印和混种形态。[CatSG](https://www.catsg.org/living-species-lions)

| 帧 | 运行时路径 | 场景与证据边界 |
| --- | --- | --- |
| 01 | `./images/species/lion/01-savanna-dawn-male-portrait.webp` | 一只完整成年雄狮在晨光草原行走，左侧留空间；不指定亚种、年龄、体重或地位 |
| 02 | `./images/species/lion/02-adult-lioness-profile.webp` | 一只完整无鬃雌狮侧身行走；不把个体形态外推为全部雌狮 |
| 03 | `./images/species/lion/03-pride-resting-in-acacia-shade.webp` | 一雄三雌共四只成狮休息；不证明亲缘、等级、领地或固定成员资格 |
| 04 | `./images/species/lion/04-cooperative-wildebeest-approach.webp` | 三只分开的雌狮朝向远处一只角马；无追逐、接触或伤口，静帧不证明协调或成功 |
| 05 | `./images/species/lion/05-communal-cub-care.webp` | 两只雌狮与三只幼崽在同一育幼场景；不鉴定母子关系，不证明哺乳或共同哺乳 |
| 06 | `./images/species/lion/06-camera-trap-monitoring.webp` | 一只雌狮经过无品牌相机；无坐标，单次生成记录不能证明身份、占域、丰度或趋势 |

第 04 图受埃托沙协调群猎研究启发，不复刻或推广固定阵型。[Stander 1992](https://doi.org/10.1007/BF00170175) 第 05 图只表现共同育幼场景，不证明亲缘或哺乳。[Packer et al. 1990](https://doi.org/10.1086/285079) 第 06 图的 caption 必须说明，可靠种群估算需要重复采样、个体识别与合适模型。[Nicholson et al. 2024](https://doi.org/10.1016/j.gecco.2024.e02908)

## `SpeciesSource` 来源清单

```ts
const LION_SOURCE_DATE = '2026-09-01' as const;
const LION_CONTENT_DATE = '2026-09-01' as const;
const LION_SOURCES = [
  {
    title: 'IUCN Red List: Panthera leo (2025 global assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T15951A280792135.en',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'IUCN 2026-1 checklist record: Panthera leo',
    url: 'https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/15951',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database: Panthera leo',
    url: 'https://www.mammaldiversity.org/taxon/1006020/',
    kind: 'taxonomy',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Mammal Diversity Database v2.5',
    url: 'https://doi.org/10.5281/zenodo.17033774',
    kind: 'taxonomy',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Cat Specialist Group: Lion',
    url: 'https://www.catsg.org/living-species-lions',
    kind: 'general',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'African Lion Database: Species Status',
    url: 'https://www.africanliondatabase.org/species-status/',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'African Lion Database: Distribution',
    url: 'https://www.africanliondatabase.org/distribution/',
    kind: 'distribution',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'African Lion Database: 2025 distribution layer',
    url: 'https://services8.arcgis.com/jpPhoh9heohhP413/arcgis/rest/services/NewDistrbutionMap/FeatureServer/0',
    kind: 'distribution',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'African Lion Database: 2025 population layer',
    url: 'https://services8.arcgis.com/jpPhoh9heohhP413/arcgis/rest/services/NewDistrbutionMap/FeatureServer/1',
    kind: 'distribution',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'African Lion Database: Threats',
    url: 'https://www.africanliondatabase.org/threats/',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'IUCN Green Status: Panthera leo',
    url: 'https://nc.iucnredlist.org/redlist/content/attachment_files/Green_Status_Supplementary_Information_15951_Panthera_leo.pdf',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Kitchener et al. 2017: A revised taxonomy of the Felidae',
    url: 'https://repository.si.edu/handle/10088/32616',
    kind: 'taxonomy',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Bertola et al. 2022: Lion evolutionary lineages',
    url: 'https://doi.org/10.1186/s12864-022-08510-y',
    kind: 'taxonomy',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Packer et al. 1990: Why Lions Form Groups',
    url: 'https://doi.org/10.1086/285079',
    kind: 'ecology',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Stander 1992: Cooperative hunting in lions',
    url: 'https://doi.org/10.1007/BF00170175',
    kind: 'ecology',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Hayward & Kerley 2005: Prey preferences of the lion',
    url: 'https://doi.org/10.1017/S0952836905007508',
    kind: 'ecology',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Nicholson et al. 2023: Fragility of African lion populations',
    url: 'https://doi.org/10.1038/s43247-023-00959-3',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Nicholson et al. 2024: Lion survey methodologies',
    url: 'https://doi.org/10.1016/j.gecco.2024.e02908',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Nicholson et al. 2025: Regional threats and mitigation capacity',
    url: 'https://doi.org/10.1016/j.gecco.2025.e03760',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Hazzah et al. 2014: Two lion conservation programs',
    url: 'https://doi.org/10.1111/cobi.12244',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 可落库字段草案

以下草案重复上文已引用事实，供主任务转成 `Species`；不填全球成熟个体数。

```ts
const lionDraft = {
  id: 'species-panthera-leo',
  slug: 'lion',
  names: { zh: '狮', en: 'Lion', aliases: ['狮子'] },
  scientificName: 'Panthera leo',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Carnivora', '食肉目'),
    taxon('Felidae', '猫科'),
    taxon('Panthera', '豹属'),
  ),
  conservation: conservation('VU', 'decreasing', 2025, 'A2c'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['非洲', '亚洲'],
    regions: ['西非与中非残存保护地', '东非稀树草原与林地', '南部非洲保护地和连通景观', '印度古吉拉特邦大吉尔景观'],
    countries: [
      '安哥拉', '贝宁', '博茨瓦纳', '布基纳法索', '喀麦隆', '中非共和国', '乍得',
      '刚果民主共和国', '埃塞俄比亚', '肯尼亚', '马拉维', '莫桑比克', '纳米比亚',
      '尼日尔', '卢旺达', '塞内加尔', '南非', '南苏丹', '坦桑尼亚', '乌干达',
      '赞比亚', '津巴布韦', '印度',
    ],
    range: '当前范围高度破碎，位于 18 个确认现存和 4 个可能现存的非洲范围国家，以及印度大吉尔景观；国家集合不表示全国连续分布。',
    center: { lat: 2, lng: 32 },
  },
  habitats: [
    { name: '稀树草原与草地灌丛镶嵌', realm: 'terrestrial', description: '草地、灌丛和疏林提供伏击与育幼遮蔽及中大型有蹄类猎物。', isPrimary: true },
    { name: '开放林地与干燥森林', realm: 'terrestrial', description: '利用开放或封闭林地、干燥森林和部分荒漠边缘。' },
    { name: '大吉尔干燥落叶林与农林交错景观', realm: 'terrestrial', description: '印度种群利用混交林、稀树草原及柚木和金合欢林地。' },
  ],
  measurements: {
    length: { min: 137, max: 250, unit: 'cm', note: '头体长；尾长另计 60–100 厘米，物种级概览' },
    weight: { min: 110, max: 272, unit: 'kg', note: '跨性别和地理种群的物种级宽范围' },
  },
  diet: {
    types: ['carnivore'],
    foods: ['角马', '斑马', '水牛', '羚羊类', '水鹿', '斑鹿', '野猪', '蓝牛'],
    description: '机会主义捕食者，偏好中大型有蹄类，也会食腐或夺食；食谱随地区、季节和猎物可得性改变。',
  },
  activity: [
    '雌狮组成分合式狮群，合作维护领地和照看幼崽',
    '可单独或结群捕猎，群猎角色随个体、猎物和环境改变',
    '多在黄昏、夜间和清晨活动，时段随温度、猎物和人类干扰变化',
  ],
  tags: ['非洲与印度', '群居猫科', '合作捕猎', '共同育幼', '顶级捕食者', 'CITES 附录 I/II'],
  summary: '狮群把领地防御、觅食与育幼连成一套社会系统；它们如今只保有约 6% 的历史范围。',
  description: '狮利用草原、灌丛、林地和印度大吉尔的落叶林景观。雌狮构成狮群核心，可协调捕猎并把幼崽集中照看。全球评估为易危，保护必须同时守住猎物、连通景观与社区共存条件。',
  storySections: [
    { key: 'lineages', label: '分类与亲缘', title: '印度狮的近亲在西非与中非', body: '当前分类接受北方狮和南方狮；东北非洲仍存在两支混合的缝合带。' },
    { key: 'pride', label: '狮群社会', title: '狮群不只为一顿猎物', body: '结群同时影响觅食、领地竞争和共同育幼，单用合作围猎无法解释这种社会结构。' },
    { key: 'cooperative-hunt', label: '合作捕猎', title: '个体会占据不同位置，也会临场调整', body: '埃托沙记录翼位与中位角色及个体偏好；这是局地实证，不是全球固定阵型。' },
    { key: 'prey', label: '食性', title: '中大型有蹄类支撑狮群', body: '狮偏好中大型有蹄类，非洲和印度的主要猎物不同，也会食腐和夺食。' },
    { key: 'creche', label: '繁殖与育幼', title: '幼崽在共同育幼群中长大', body: '母狮可集中照看和防御幼崽；这不代表每只雌狮必然哺乳所有幼崽。' },
    { key: 'fragmented-range', label: '监测与保护', title: '剩余范围需要可靠监测和长期共存', body: '三世代范围缩减约 34%；保护要同时处理栖息地、猎物、非法杀害、人狮冲突和监测。' },
  ],
  keyFacts: [
    'IUCN 当前全球正式值为 VU、A2c、下降，评估年 2025。',
    '2004 至 2025 年现存范围估计缩减 34%，约剩历史范围的 6%。',
    '当前范围国家集合为 22 个非洲国家加印度；非洲集合含确认和可能现存状态。',
    '当前分类接受北方狮与南方狮，印度种群属于北方狮。',
    '狮群兼具领地竞争、觅食和共同育幼功能。',
    '埃托沙 486 次协调群猎显示雌狮可反复承担不同位置角色。',
    '妊娠约 100–119 天，每胎 1–4 只；寿命概览为 12–18 年。',
  ],
  threats: [
    '栖息地丧失、退化与破碎化', '人狮冲突引发的报复性和无差别杀害',
    '猎物盗猎与丛林肉贸易', '套索误捕和身体部位贸易',
    '管理不良或不可持续的狩猎及保护资金不足', '武装冲突，以及印度孤立种群的疾病、灾害和遗传风险',
  ],
  conservationActions: [
    '保护关键保护地、猎物群落和跨境连通景观，控制套索与猎物盗猎',
    '以畜栏、放牧管理、快速响应和公平补偿减少报复性杀害',
    '让社区获得可核验收益并参与土地利用和冲突治理',
    '加强身体部位贸易执法和狩猎管理透明度',
    '以直接观察、相机或遗传捕获再捕获开展长期监测',
    '维持大吉尔连通性，并在印度建立第二个可持续野生种群',
  ],
  metrics: { adultLengthCm: [137, 250], adultMassKg: [110, 272], lifespanYears: [12, 18] },
  featuredStats: [
    { key: 'adult-length', label: '头体长', value: '137–250', unit: '厘米', note: '尾长另计 60–100 厘米；物种级概览' },
    { key: 'adult-mass', label: '体重', value: '110–272', unit: '千克', note: '跨性别和地理种群的宽范围' },
    { key: 'gestation', label: '妊娠期', value: '100–119', unit: '天', note: '全年均可能繁殖' },
    { key: 'range-decline', label: '三世代范围缩减', value: '34', unit: '%', note: '2004–2025 年；不是逐只普查' },
  ],
  media: {
    image: './images/species/lion/01-savanna-dawn-male-portrait.webp',
    alt: '一只鬃毛自然的成年雄狮在晨光中的稀树草原行走',
    focalPoint: { x: 0.67, y: 0.55 },
    credit: 'Fauna Atlas · AI 生成科学情景重建',
    gallery: [
      { image: './images/species/lion/02-adult-lioness-profile.webp', alt: '一只无鬃成年雌狮侧身走过短草地', title: '雌狮的物种级形态', caption: '单个个体不能代表全部种群。', focalPoint: { x: 0.52, y: 0.55 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      { image: './images/species/lion/03-pride-resting-in-acacia-shade.webp', alt: '一只雄狮和三只雌狮在树荫下休息', title: '分合式狮群', caption: '画面不证明亲缘、等级或固定成员资格。', focalPoint: { x: 0.52, y: 0.57 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      { image: './images/species/lion/04-cooperative-wildebeest-approach.webp', alt: '三只雌狮朝向远处一只角马', title: '接近，不是捕获', caption: '静帧不能证明协调、追逐或捕猎成功。', focalPoint: { x: 0.48, y: 0.58 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      { image: './images/species/lion/05-communal-cub-care.webp', alt: '两只雌狮与三只幼狮共同休息和警戒', title: '共同育幼群', caption: '画面不鉴定亲缘，也不证明哺乳或共同哺乳。', focalPoint: { x: 0.54, y: 0.57 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      { image: './images/species/lion/06-camera-trap-monitoring.webp', alt: '一只雌狮经过树干上的无品牌相机', title: '从记录到种群估算', caption: '单次记录不能确定身份、占域、丰度、密度或趋势，可靠估算还需要重复采样、个体识别和合适模型。', focalPoint: { x: 0.54, y: 0.54 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
    ],
  },
  sources: LION_SOURCES,
  featured: true,
  publishedAt: LION_CONTENT_DATE,
  updatedAt: LION_CONTENT_DATE,
} satisfies Species;
```

## 实现边界与验收

- 不使用旧 A2abcd；当前评估是 2025 年 A2c。
- 不填全球成熟个体数，也不把成年与亚成年数量改写成成熟个体。
- 不把亚种等级或 Green Status 覆盖全球物种 VU。
- 国家数组保存 23 国集合，`range` 保留 18 个确认、4 个可能现存的非洲国家加印度以及占域破碎性。
- 不写“狮群只为围猎”或“全球固定围猎阵型”。
- 不写“所有雌狮都会哺乳所有幼崽”。
- 不写“草原是唯一生境”。
- 不写“正好还剩某个全球数量”。
- 六图路径、数量、alt、caption 与 [`狮素材 README`](../../src/assets/source/species/lion/README.md) 对齐；静态检查 PNG/WebP 均为 1536×1024、可解码。
- 新增 `Panthera leo` 分类路径测试并同步物种、动物界和哺乳纲总数；运行相关测试、类型检查与构建。
- 只有数据、测试、素材索引、六图和验证全部完成后，才删除 `docs/todo.md` 中的狮条目并更新统计。

## 后续更新点

1. 集成前复核 IUCN 物种页 `15951/280792135`；新评估出现时，等级、趋势、准则、年份、范围与来源成套更新。
2. ALD 若发布稳定逐国状态表，用它替换当前“23 国集合加状态说明”方案。
3. ALD 分布页给现存范围 1,566,675 平方千米，CatSG 页面正文显示 566,675 平方千米，但两者都写约占历史范围 6%。本文采用 ALD 项目页数值且不把面积放进 featured stats。[ALD](https://www.africanliondatabase.org/distribution/) [CatSG](https://www.catsg.org/living-species-lions)
4. 区域恢复不能覆盖全球 `decreasing`；只有新全球评估能修改结构化趋势。[CatSG](https://www.catsg.org/living-species-lions)
