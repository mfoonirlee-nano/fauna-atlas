# 七星瓢虫物种档案研究

- 研究对象：七星瓢虫 `Coccinella septempunctata`
- 目标档案：`species-coccinella-septempunctata`
- 最终 slug：`seven-spotted-ladybird`
- 检索与复核日期：2026-08-28
- 研究范围：名称与分类、原生和引入分布、生境、形态、食性、防御、繁殖发育、越冬、保护状态、威胁、管理、六张图和完整 `Species` 草案

本文把全球事实、区域观察、实验结果和应用决策分开。数值只有在来源明确给出样本或地域时才进入档案；区域性物候、实验室捕食率和引入区影响不外推为全物种常数。

## 结论摘要

1. 当前接受学名是 `Coccinella septempunctata` Linnaeus, 1758，分类路径为动物界、节肢动物门、昆虫纲、鞘翅目、瓢虫科、瓢虫属。[GBIF](https://www.gbif.org/species/4990191)、[ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?print_version=PRT&search_topic=TSN&search_value=114347&source=to_print) 和 [EPPO](https://gd.eppo.int/taxon/COCISE) 对这一主干一致。
2. 中文主名用“七星瓢虫”，繁体别名用“七星瓢蟲”；英文主名用 “Seven-spot Ladybird”。“Seven-spotted Ladybird”“Sevenspotted Lady Beetle”“7-spot Ladybird”和“C7”可作为检索别名。
3. 原生区属于古北界，横跨欧洲、北非和亚洲；台湾生物多样性网络把台湾种群标为原生。北美种群为非原生且已建立。反复释放确有记录，但建立来源仍有意外输入与人为释放两种解释，不能写成确定因果。
4. 成虫体长采用 ICAR-NBAIR 给出的 5.2–8.6 mm，体宽 4.0–6.6 mm。`measurements.length` 和 `metrics.adultLengthCm` 只落体长；英国识别资料常用 6.5–8 mm，巴基斯坦凭证样本为 6.63–7.20 mm，这些都是不同口径，不是互相冲突的全球极值。
5. 典型成虫有七个黑斑：鞘翅基部靠近小盾片处一个左右共享的黑斑，每片鞘翅另有三个。七斑是常见型，不是每个个体都严格不变；斑点数也不能判断年龄。
6. 鞘翅是硬化前翅，闭合时沿背部中线相接，覆盖可用于飞行的膜质后翅和腹部。图像不能把它画成两对同样质地的外露翅。
7. 成虫和幼虫都捕食蚜虫。田间肠道解剖还检出蓟马等非蚜节肢动物、花粉和真菌孢子。档案应写“以蚜虫等小型节肢动物为主要猎物的广食性捕食者”，不能写“只吃害虫”。
8. 捕食量随龄期、性别、猎物种类、猎物密度、温度和植物结构变化。实验中的 II 型功能反应说明摄食会受处理时间限制；固定的“每天吃多少只”或“终生吃几千只”不适合做物种级事实。
9. 受扰时，成虫可从足关节释放富含瓢虫素 coccinelline 的反射血。红黑警戒色和化学防御相关，但防御物质与颜色表达都存在个体和营养条件差异。
10. 生命周期为卵、四个幼虫龄期、蛹、成虫的完全变态。产卵量、卵簇大小、各期时长和年世代数有明显地区、温度和食物依赖，不能用单一数字覆盖全球种群。
11. 温带种群主要以成虫越冬，可藏在落叶层、草丛基部和其他遮蔽处。欧洲和北美种群对滞育诱导并不完全一致，不能给全球物候固定月份。
12. 截至 2026-08-28，IUCN Red List 检索没有返回本种评估，档案用 `NE` 和 `unknown`；CITES 2026 年 3 月 5 日生效的附录未列入本种。德国区域红色名录的 LC 不能替代全球 IUCN 评估。
13. 管理必须区分原生区和北美引入区。原生区优先保护田缘、花源和越冬微生境；北美不应购买、释放或跨地点转移本种。两地都应采用基于标签和地方规则的综合虫害管理，避免把所有杀虫剂笼统归为“安全”或“不安全”。

## 名称、别名与分类

### 可落库名称

| 字段           | 建议值                                                                                           | 证据与边界                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `names.zh`     | 七星瓢虫                                                                                         | 中国大陆常用简体名；北京园林绿化部门使用该名，[TBN](https://www.tbn.org.tw/taxa/2324e44f-020c-4818-a3df-41f1c4f6d059) 使用繁体“七星瓢蟲” |
| `names.en`     | Seven-spot Ladybird                                                                              | [EPPO](https://gd.eppo.int/taxon/COCISE) 收录的英语普通名，适合与项目的英式 “ladybird” 口径一致                                          |
| 中文别名       | 七星瓢蟲                                                                                         | 繁体字形，不是另一物种                                                                                                                   |
| 英文别名       | Seven-spotted Ladybird；Sevenspotted Lady Beetle；Seven-spotted Lady Beetle；7-spot Ladybird；C7 | EPPO、ITIS、USDA/NAL 与北美论文的不同拼法                                                                                                |
| 历史学名检索词 | `Coccinella 7-punctata`                                                                          | EPPO 收录的旧式写法；当前 `scientificName` 不使用                                                                                        |

不把 `Coccinella septempunctata brucki` 直接塞入普通别名。GBIF/Catalogue of Life、ITIS 和部分区域文献对日本种群的种下处理并不完全一致；它适合作为分类注释和文献检索词，不应让应用暗示所有种群都属于该亚种。[Marin et al. 2010](https://doi.org/10.1111/j.1463-6409.2010.00450.x) 的分子和杂交研究支持其检查种群属于同一物种，但不消除当前目录间的种下命名差异。

### 接受分类路径

```text
Animalia 动物界
└── Arthropoda 节肢动物门
    └── Insecta 昆虫纲
        └── Coleoptera 鞘翅目
            └── Coccinellidae 瓢虫科
                └── Coccinella 瓢虫属
                    └── Coccinella septempunctata 七星瓢虫
```

## 可直接落库的来源数组

```ts
const SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE = "2026-08-28" as const;
const SEVEN_SPOTTED_LADYBIRD_CONTENT_DATE = "2026-08-28" as const;

const SEVEN_SPOTTED_LADYBIRD_SOURCES = [
  {
    title: "GBIF / Catalogue of Life: Coccinella septempunctata",
    url: "https://www.gbif.org/species/4990191",
    kind: "taxonomy",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "ITIS Standard Report: Coccinella septempunctata, TSN 114347",
    url: "https://www.itis.gov/servlet/SingleRpt/SingleRpt?print_version=PRT&search_topic=TSN&search_value=114347&source=to_print",
    kind: "taxonomy",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "EPPO Global Database: Coccinella septempunctata (COCISE)",
    url: "https://gd.eppo.int/taxon/COCISE",
    kind: "taxonomy",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "Taiwan Biodiversity Network: 七星瓢蟲 Coccinella septempunctata",
    url: "https://www.tbn.org.tw/taxa/2324e44f-020c-4818-a3df-41f1c4f6d059",
    kind: "taxonomy",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title:
      "USDA National Agricultural Library Thesaurus: Coccinella septempunctata",
    url: "https://lod.nal.usda.gov/nalt/en/page/27442",
    kind: "taxonomy",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "ICAR-NBAIR Featured Insects: Seven-spotted ladybird",
    url: "https://databases.nbair.res.in/Featured_insects/Coccinella-septempunctata.php",
    kind: "general",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "Iqbal et al. 2024: Review of the genus Coccinella from Pakistan",
    url: "https://doi.org/10.3897/BDJ.12.e137417",
    kind: "taxonomy",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "Marin et al. 2010: Coccinella septempunctata, a species complex?",
    url: "https://doi.org/10.1111/j.1463-6409.2010.00450.x",
    kind: "taxonomy",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "Lecompte et al. 2016: Genetic structure across the native range",
    url: "https://doi.org/10.1002/ece3.2288",
    kind: "distribution",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title:
      "Schaefer et al. 1987: North American distribution and establishment hypotheses",
    url: "https://doi.org/10.1093/ee/16.2.368",
    kind: "distribution",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title:
      "Angalet et al. 1979: Coccinella septempunctata in the United States",
    url: "https://doi.org/10.1093/ee/8.5.896",
    kind: "distribution",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title:
      "Day & Tatman 2006: Native and adventive ladybirds in northeastern US alfalfa",
    url: "https://www.ars.usda.gov/ARSUserFiles/80100000/WHDay/DayandTatman06.pdf",
    kind: "distribution",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "UK Species Inventory: Coccinella septempunctata",
    url: "https://uksi-sandbox.nhm.ac.uk/taxon.php?linkKey=NBNSYS0000008324",
    kind: "general",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "Cornell Biological Control: Coccinella septempunctata",
    url: "https://biocontrol.entomology.cornell.edu/predators/Coccinella.php",
    kind: "ecology",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title:
      "USDA ARS and Washington State University: Field Guide for Integrated Pest Management in Hops",
    url: "https://www.ars.usda.gov/ARSUserFiles/37109/hophandbook2010.pdf",
    kind: "ecology",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "Triltsch 1999: Food remains in field-collected adults and larvae",
    url: "https://www.eje.cz/artkey/eje-199904-0006_Food_remains_in_the_guts_of_Coccinella_septempunctata_Coleoptera_Coccinellidae_adults_and_larvae.php",
    kind: "ecology",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title:
      "Weber & Lundgren 2009: Assessing the trophic ecology of Coccinellidae",
    url: "https://www.ars.usda.gov/ARSUserFiles/30842/PUBS-PDF/Weber-Lundgren2009-Coccinellid.pdf",
    kind: "ecology",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "Khan & Yoldaş 2018: Functional response to pea aphid density",
    url: "https://doi.org/10.1016/j.aspen.2018.08.012",
    kind: "ecology",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "Farooq et al. 2020: Demography on four host aphid species",
    url: "https://doi.org/10.7717/peerj.8313",
    kind: "ecology",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title:
      "Hesler et al. 2010: Elytral macular variation in Palearctic and North American specimens",
    url: "https://www.ars.usda.gov/research/publications/publication/?seqNo115=252796",
    kind: "general",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title:
      "Holloway et al. 1991: Coccinelline distribution and individual variation in defence",
    url: "https://doi.org/10.1007/BF01240660",
    kind: "ecology",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "Blount et al. 2012: Resource limitation and aposematic signals",
    url: "https://doi.org/10.1111/j.1365-2435.2012.01961.x",
    kind: "ecology",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "Hodek & Čerkasov 1960: Prevention and induction of adult diapause",
    url: "https://doi.org/10.1038/187345a0",
    kind: "ecology",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "Hodek 2012: Adult diapause in Coleoptera",
    url: "https://doi.org/10.1155/2012/249081",
    kind: "ecology",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "UKCEH: Why ladybirds enter homes and where seven-spots overwinter",
    url: "https://www.ceh.ac.uk/news-and-media/blogs/why-are-some-ladybirds-so-varied-colour",
    kind: "ecology",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "UKCEH European Ladybirds: Ladybird morphology",
    url: "https://european-ladybirds.brc.ac.uk/ladybird",
    kind: "general",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title:
      "IUCN Red List search: Coccinella septempunctata, no assessment returned",
    url: "https://www.iucnredlist.org/search?query=Coccinella%20septempunctata&searchType=species",
    kind: "conservation",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "CITES Appendices effective 5 March 2026",
    url: "https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf",
    kind: "conservation",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "CITES Checklist",
    url: "https://checklist.cites.org/",
    kind: "conservation",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title:
      "German Red List Centre: Coccinella septempunctata regional assessment",
    url: "https://www.rote-liste-zentrum.de/en/detailseite/?species_uuid=e7b10812-7db4-40c7-bc20-2e95e4b8276e",
    kind: "conservation",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "Evans 2004: Habitat displacement of North American ladybirds",
    url: "https://doi.org/10.1890/03-0230",
    kind: "ecology",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title:
      "Soares et al. 2023: A roadmap for ladybird conservation and recovery",
    url: "https://doi.org/10.1111/cobi.13965",
    kind: "conservation",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: "UMN Extension: Lady beetle conservation and release guidance",
    url: "https://extension.umn.edu/garden-and-home/yard-and-garden/yard-and-garden-insects/lady-beetles",
    kind: "general",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title:
      "Sublethal and transgenerational effects of synthetic insecticides on Coccinella septempunctata",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9885102/",
    kind: "ecology",
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 完整 Species 草案

以下对象按 `src/types/species.ts` 的当前接口编写。媒体路径与已生成的 01–06 文件名一致；最终替代文字和焦点仍应对照实际图像复核。

```ts
{
  id: 'species-coccinella-septempunctata',
  slug: 'seven-spotted-ladybird',
  names: {
    zh: '七星瓢虫',
    en: 'Seven-spot Ladybird',
    aliases: [
      '七星瓢蟲',
      'Seven-spotted Ladybird',
      'Sevenspotted Lady Beetle',
      'Seven-spotted Lady Beetle',
      '7-spot Ladybird',
      'C7',
      'Coccinella 7-punctata',
    ],
  },
  scientificName: 'Coccinella septempunctata',
  taxonomy: animalTaxonomy(
    taxon('Arthropoda', '节肢动物门'),
    taxon('Insecta', '昆虫纲'),
    taxon('Coleoptera', '鞘翅目'),
    taxon('Coccinellidae', '瓢虫科'),
    taxon('Coccinella', '瓢虫属'),
  ),
  conservation: conservation('NE', 'unknown'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲', '欧洲', '非洲', '北美洲'],
    countries: [
      '中国',
      '日本',
      '韩国',
      '俄罗斯',
      '哈萨克斯坦',
      '印度',
      '巴基斯坦',
      '英国',
      '法国',
      '德国',
      '摩洛哥',
      '美国',
      '加拿大',
    ],
    regions: [
      '古北界欧洲原生区',
      '北非古北界边缘原生区',
      '西亚、中亚、南亚北部和东亚原生区',
      '美国和加拿大引入并建立的分布区',
    ],
    range:
      '原生于横跨欧洲、北非和亚洲的古北界，台湾名录将当地种群标为原生；已在美国和加拿大建立非原生种群。国家列表仅列代表性国家，不是完整名录。',
    center: { lat: 42, lng: 65 },
  },
  habitats: [
    {
      name: '开阔草本植被与田缘',
      realm: 'terrestrial',
      description:
        '草地、草甸、田埂、篱边和多年生草本带提供蚜虫猎物、花粉与季节性遮蔽；猎物丰度会改变成虫在局地的停留。',
      isPrimary: true,
    },
    {
      name: '蚜虫丰富的农作物',
      realm: 'terrestrial',
      description:
        '可利用马铃薯、豆科、谷物、苜蓿和啤酒花等作物上的蚜虫斑块；这些是区域作物记录，不是必需宿主清单。',
    },
    {
      name: '花园、公园与郊区绿地',
      realm: 'terrestrial',
      description:
        '有小型节肢动物、花源和植被结构的花园、篱带与公园都可被利用。',
    },
    {
      name: '落叶层与草丛基部越冬处',
      realm: 'terrestrial',
      description:
        '温带成虫可在落叶层、草丛基部和其他遮蔽微生境越冬；具体地点与聚集时间随地区变化。',
    },
  ],
  measurements: {
    length: {
      min: 5.2,
      max: 8.6,
      unit: 'mm',
      note:
        'ICAR-NBAIR 给出的成虫体长范围；同页体宽 4.0–6.6 mm。英国识别资料常用 6.5–8 mm，巴基斯坦凭证样本为 6.63–7.20 mm；均不宣称全球极值。',
    },
  },
  diet: {
    types: ['carnivore', 'insectivore', 'omnivore'],
    foods: [
      '蚜虫',
      '蓟马等其他小型节肢动物',
      '其他瓢虫的卵或幼虫等条件性同域猎物',
      '花粉、花蜜或糖源',
      '真菌孢子',
    ],
    description:
      '成虫和四个幼虫龄期都捕食蚜虫，也会摄取其他小型节肢动物、花粉、糖源和真菌孢子。德国田间肠道研究证明食谱混合，但残骸检出率不等于食物生物量或营养充足性；不能称为只吃害虫的专食者。',
  },
  activity: [
    '成虫与幼虫在植被上觅食',
    '成虫可飞行扩散',
    '温带种群以成虫越冬',
    '受扰成虫可反射出血',
  ],
  tags: [
    '鞘翅目',
    '瓢虫科',
    '蚜虫捕食者',
    '警戒色',
    '反射出血',
    '完全变态',
    '古北界原生',
    '北美引入种',
  ],
  summary:
    '原生于古北界、在北美建立的蚜虫捕食性甲虫，典型成虫有七个黑斑，并以反射血中的瓢虫素参与防御。',
  description:
    '七星瓢虫是瓢虫科瓢虫属的强烈隆起型甲虫，成虫通常长 5.2 至 8.6 毫米。典型斑纹由一个跨越鞘翅基部的共享黑斑和每片鞘翅三个黑斑组成，但少数个体会缺斑、增斑或不对称。成虫和四个幼虫龄期都捕食蚜虫，也摄取其他小型节肢动物、花粉、糖源与真菌孢子。受扰成虫可从足关节释放富含瓢虫素的反射血。温带种群主要以成虫在落叶层或草丛基部越冬。它原生于欧洲、北非和亚洲，在美国、加拿大属于非原生建立种；IUCN 尚无物种级评估，CITES 当前未列入。',
  storySections: [
    {
      key: 'seven-spots-not-seven-certainties',
      label: '斑纹与身份',
      title: '七个黑斑，是典型型，不是年龄计数器',
      body:
        '典型成虫在两片鞘翅基部有一个共享黑斑，每片鞘翅再有三个，合计七个。标本和公众影像研究记录少数缺斑、附加斑与左右不对称个体。斑点不会随着年龄一年加一个，鉴定还要结合隆起体形、头部和前胸浅色斑等特征。',
    },
    {
      key: 'elytra-and-flight',
      label: '甲虫结构',
      title: '硬鞘翅下面，折着真正推动飞行的后翅',
      body:
        '背上红橙色的两片壳是硬化前翅，闭合时沿中线相接，保护腹部和膜质后翅。起飞时鞘翅抬起，后翅展开。七个黑斑主要落在这对保护性前翅上，不是画在透明飞行翅上的装饰。',
    },
    {
      key: 'aphid-predator-not-pest-specialist',
      label: '食性证据',
      title: '蚜虫是重要猎物，却不是菜单的全部',
      body:
        '成虫和四个幼虫龄期都捕食蚜虫。德国多年田间肠道解剖还检出蓟马等节肢动物、花粉和真菌孢子，而且多数非空成虫肠道不止一种食物。残骸检出率不等于生物量，固定每日捕食数也会掩盖猎物、温度和龄期差异。',
    },
    {
      key: 'coccinelline-warning',
      label: '警戒与化防',
      title: '足关节的一滴黄液，是带生物碱的反射血',
      body:
        '受扰时，七星瓢虫可从足关节释放富含瓢虫素的反射血。红黑颜色向潜在捕食者发出警戒，但颜色、液量和生物碱浓度都会随个体与营养条件变化。它没有毒刺，也不会把毒液注入猎物。',
    },
    {
      key: 'four-stages-and-winter',
      label: '发育与年周期',
      title: '四个幼虫龄期之后，成虫带着储备过冬',
      body:
        '卵孵出深色带橙斑的幼虫，经过四个龄期后形成固定在叶面的裸蛹，再羽化为成虫。温带种群多以成虫藏进落叶层或草丛基部并抑制生殖，春季再恢复活动。每一期持续多久、每年有几代，都随地区和食物变化。',
    },
    {
      key: 'beneficial-here-nonnative-there',
      label: '分布与管理',
      title: '在原生区保育居民天敌，在北美停止继续释放',
      body:
        '七星瓢虫原生于欧洲、北非和亚洲，在美国和加拿大则是已建立的非原生种。北美田间研究显示它可能通过压低蚜虫密度改变本地瓢虫的生境利用，但没有证据把所有下降都归咎于单一机制。管理目标应随地区变化。',
    },
  ],
  keyFacts: [
    '当前接受学名是 Coccinella septempunctata Linnaeus, 1758。',
    'ICAR-NBAIR 给出的成虫体长为 5.2–8.6 mm、体宽为 4.0–6.6 mm。',
    '典型七斑由一个共享小盾片斑和每片鞘翅三个黑斑组成，少数个体会变异。',
    '红橙色鞘翅是硬化前翅，飞行后翅折叠在其下。',
    '成虫和四个幼虫龄期都捕食蚜虫，但也摄取其他节肢动物、花粉、糖源和真菌孢子。',
    '捕食量受龄期、性别、猎物、密度、温度和植物结构影响，没有可靠的全球固定每日值。',
    '受扰成虫可从足关节释放富含瓢虫素 coccinelline 的反射血。',
    '生命周期为卵、四个幼虫龄期、蛹、成虫，属于完全变态。',
    '温带种群主要以成虫在落叶层、草丛基部等遮蔽处越冬，具体物候有地域差异。',
    '本种原生于古北界，在美国和加拿大为非原生建立种。',
    '北美建立来源仍有争议，不能只归因于历史人为释放。',
    'IUCN 尚无物种级评估，CITES 当前未列入，全球趋势未知。',
  ],
  threats: [
    '缺少覆盖原生广域的标准化长期丰度数据，现有常见记录不能判定全球种群趋势。',
    '景观简化、田缘清理和越冬枯落物移除可能同时减少猎物、花源与遮蔽，但物种级全球效应尚未量化。',
    '杀虫剂的致死和亚致死影响取决于有效成分、剂量、暴露途径与发育期，不能按整个农药类别概括。',
    '气候与物候变化可能改变蚜虫出现、世代数和滞育时机；目前没有足够证据给出全球净影响方向。',
    '在北美继续释放或转移会扩大非原生捕食者压力；其对本地瓢虫的影响包含竞争、同域捕食和猎物介导的生境位移等情境性机制。',
  ],
  conservationActions: [
    '在原生区和引入区分别开展有照片或凭证标本支持的标准化成虫、幼虫与蛹调查。',
    '记录日期、地点、搜索时间、龄期、作物或植物、蚜虫密度、田缘结构和用药史，建立可比较的长期趋势。',
    '原生区保留花源、田缘、篱带、草丛基部和部分枯落物，兼顾觅食与越冬微生境。',
    '采用基于监测和经济阈值的综合虫害管理；需要用药时按当前标签、地方规则和天敌相容性资料选择。',
    '北美不购买、户外释放或跨地区转移七星瓢虫，优先保育和监测本地瓢虫群落。',
    '不鼓励从野外越冬聚集大量采集后异地投放，也不因其在北美非原生就鼓励公众见一只杀一只。',
    '宣传中说明它会摄取非害虫猎物和非动物食物，不把广食性捕食者包装成只吃害虫的定向工具。',
    '定期复核 IUCN、CITES、区域红色名录和引入区政策；NE 与 CITES 未列入都不能替代风险评估。',
  ],
  metrics: {
    adultLengthCm: [0.52, 0.86],
  },
  featuredStats: [
    {
      key: 'adult-length',
      label: '成虫体长',
      value: '5.2–8.6',
      unit: 'mm',
      note: 'ICAR-NBAIR 物种页范围；同页体宽 4.0–6.6 mm，不宣称全球极值。',
    },
    {
      key: 'typical-spot-layout',
      label: '典型黑斑布局',
      value: '1+3+3',
      unit: '个',
      note: '一个跨两片鞘翅的共享小盾片斑，加每片鞘翅三个；少数个体会变异。',
    },
    {
      key: 'larval-instars',
      label: '幼虫龄期',
      value: '4',
      unit: '龄',
      note: '完全变态中的四个幼虫龄期；持续天数随温度和食物变化。',
    },
    {
      key: 'mixed-adult-guts',
      label: '混合食物肠道',
      value: '68',
      unit: '%',
      note: 'Weber 与 Lundgren 依据 Triltsch 德国田间数据计算的非空成虫肠道比例；不等于食物生物量。',
    },
  ],
  media: {
    image:
      './images/species/seven-spotted-ladybird/01-adult-aphid-colony-portrait.webp',
    alt: '一只典型七斑的七星瓢虫成虫停在有少量蚜虫的草本叶茎上',
    focalPoint: { x: 0.7, y: 0.5 },
    credit: 'AI-generated scientific reconstruction, evidence-reviewed',
    gallery: [
      {
        image:
          './images/species/seven-spotted-ladybird/02-standard-seven-spot-dorsal.webp',
        alt: '七星瓢虫成虫背面近景，闭合鞘翅上一个共享黑斑和每侧三个黑斑清楚可见',
        title: '典型七斑布局',
        caption:
          '一个共享小盾片斑加每片鞘翅三个黑斑是典型型，少数个体会缺斑、增斑或不对称。',
        focalPoint: { x: 0.5, y: 0.5 },
      },
      {
        image:
          './images/species/seven-spotted-ladybird/03-larva-aphid-hunt.webp',
        alt: '一只深灰黑带橙斑的七星瓢虫四龄幼虫在叶面接近一小簇蚜虫',
        title: '幼虫也捕食蚜虫',
        caption:
          '七星瓢虫有四个幼虫龄期；捕食量会随龄期、猎物、密度和温度变化。',
        focalPoint: { x: 0.5, y: 0.52 },
      },
      {
        image:
          './images/species/seven-spotted-ladybird/04-pupa-on-leaf.webp',
        alt: '一只分节清楚的七星瓢虫蛹以后端固定在绿色叶片表面',
        title: '不结茧的蛹期',
        caption:
          '四龄幼虫之后形成固定在基质上的裸蛹，再羽化为成虫；各期时长受环境影响。',
        focalPoint: { x: 0.52, y: 0.5 },
      },
      {
        image:
          './images/species/seven-spotted-ladybird/05-reflex-bleeding-defense.webp',
        alt: '七星瓢虫成虫停在叶片上，一小滴黄橙色反射血从腿部关节渗出',
        title: '富含瓢虫素的反射血',
        caption:
          '受扰时液体从足关节释放；反射血量和生物碱浓度存在个体差异。',
        focalPoint: { x: 0.5, y: 0.52 },
      },
      {
        image:
          './images/species/seven-spotted-ladybird/06-leaf-litter-overwintering.webp',
        alt: '一群七星瓢虫成虫藏在温带田缘的干落叶和草丛基部越冬',
        title: '落叶层下的成虫越冬',
        caption:
          '温带种群通常以成虫越冬，具体聚集时间和滞育强度随地区与环境而变。',
        focalPoint: { x: 0.5, y: 0.55 },
      },
    ],
  },
  sources: SEVEN_SPOTTED_LADYBIRD_SOURCES,
  featured: true,
  publishedAt: SEVEN_SPOTTED_LADYBIRD_CONTENT_DATE,
  updatedAt: SEVEN_SPOTTED_LADYBIRD_CONTENT_DATE,
},
```

采用依据：

- [GBIF/Catalogue of Life](https://www.gbif.org/species/4990191) 将 `Coccinella septempunctata` Linnaeus, 1758 标为 accepted。
- [EPPO](https://gd.eppo.int/taxon/COCISE) 给出相同的界、门、纲、目、科、属路径，并列出主要英语普通名。
- [ITIS TSN 114347](https://www.itis.gov/servlet/SingleRpt/SingleRpt?print_version=PRT&search_topic=TSN&search_value=114347&source=to_print) 将该名标为 valid，并把北美管辖区状态列为 introduced。
- [台湾生物多样性网络](https://www.tbn.org.tw/taxa/2324e44f-020c-4818-a3df-41f1c4f6d059) 提供中文分类名“鞘翅目、瓢蟲科、瓢蟲屬”和台湾原生属性。

## 原生区、引入区与地图中心

### 分布结论

[Lecompte et al. 2016](https://doi.org/10.1002/ece3.2288) 在原生分布区的群体遗传取样把范围概括为横跨古北界，从伊比利亚半岛延伸到日本，南北可达撒哈拉边缘和苔原带，但西伯利亚等地并非连续覆盖。[Schaefer et al. 1987](https://doi.org/10.1093/ee/16.2.368) 明确称其为古北界物种，并记录其在北美建立后的扩张。

应用结构建议：

```ts
distribution: {
  realms: ['terrestrial'],
  continents: ['亚洲', '欧洲', '非洲', '北美洲'],
  countries: [
    '中国',
    '日本',
    '韩国',
    '俄罗斯',
    '哈萨克斯坦',
    '印度',
    '巴基斯坦',
    '英国',
    '法国',
    '德国',
    '摩洛哥',
    '美国',
    '加拿大',
  ],
  regions: [
    '古北界欧洲原生区',
    '北非古北界边缘原生区',
    '西亚、中亚、南亚北部和东亚原生区',
    '美国和加拿大引入并建立的分布区',
  ],
  range:
    '原生于横跨欧洲、北非和亚洲的古北界，台湾名录将当地种群标为原生；已在美国和加拿大建立非原生种群。国家列表仅列代表性国家，不是完整名录。',
  center: { lat: 42, lng: 65 },
}
```

`center` 只是原生广域的展示焦点，不是分布质心、模式产地或丰度中心。地图和文案需要显式区分：

- 原生：欧洲、北非和亚洲的古北界范围；台湾官方网络标为原生。
- 引入并建立：美国、加拿大。
- 建立机制：美国曾多次尝试释放；[Angalet et al. 1979](https://doi.org/10.1093/ee/8.5.896) 报告 1973 年在新泽西发现首个已建立大种群。[Schaefer et al. 1987](https://doi.org/10.1093/ee/16.2.368) 认为早期释放可能参与建立，但不能排除跨洋船运意外输入。[Day & Tatman 2006](https://www.ars.usda.gov/ARSUserFiles/80100000/WHDay/DayandTatman06.pdf) 依据释放地点与首次发现地点不重合，更支持港口附近的意外建立。档案保留这项不确定性。
- 出现记录不自动等于原生、稳定繁殖或人为释放成功。GBIF 点位可用于发现线索，不用于单独判定这些属性。

## 生境

### 四类结构化生境

1. **开阔草本植被与田缘**

   草地、草甸、田埂、篱边和多年生草本带为蚜虫群落、花粉和越冬遮蔽物提供空间。景观结构和猎物丰度会改变本种在某块田里的停留时间，不能把“农田常见”写成只生活在作物上。

2. **蚜虫丰富的农作物**

   [Cornell 生物防治资料](https://biocontrol.entomology.cornell.edu/predators/Coccinella.php) 列出马铃薯、豆科、玉米、苜蓿、小麦、高粱和山核桃等北美作物；[USDA/WSU Hop Handbook](https://www.ars.usda.gov/ARSUserFiles/37109/hophandbook2010.pdf) 记录其在太平洋西北啤酒花园的活动。这些是区域作物记录，不是全球必需宿主。

3. **花园、公园和郊区绿地**

   [UK Species Inventory](https://uksi-sandbox.nhm.ac.uk/taxon.php?linkKey=NBNSYS0000008324) 将花园和篱边列入常见环境。只要有猎物、花源和遮蔽，本种也会利用城市与郊区植被。

4. **成虫越冬微生境**

   [UKCEH](https://www.ceh.ac.uk/news-and-media/blogs/why-are-some-ladybirds-so-varied-colour) 指出七星瓢虫常移到落叶层下；[Hodek 2012](https://doi.org/10.1155/2012/249081) 综述中欧种群可在草丛基部等越冬处集结。石块下、土块缝和田缘枯落物是合理的区域例子，但不应写成全球唯一越冬地点。

建议 `habitats` 以“开阔草本植被与田缘”为主生境，另外三类保留地域和季节说明。

## 成虫测量与形态

### 测量口径

| 来源                                                                                               | 口径             | 数值                               | 落库方式                                              |
| -------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------- | ----------------------------------------------------- |
| [ICAR-NBAIR 物种页](https://databases.nbair.res.in/Featured_insects/Coccinella-septempunctata.php) | 成虫体长、体宽   | 长 5.2–8.6 mm；宽 4.0–6.6 mm       | 主 `measurements.length` 用 5.2–8.6 mm；宽度写进 note |
| [UK Species Inventory](https://uksi-sandbox.nhm.ac.uk/taxon.php?linkKey=NBNSYS0000008324)          | 英国野外识别范围 | 6.5–8 mm                           | 支持常见识别口径，不替代主范围                        |
| [Iqbal et al. 2024](https://doi.org/10.3897/BDJ.12.e137417)                                        | 巴基斯坦凭证样本 | 总长 6.63–7.20 mm；宽 5.35–5.60 mm | 只标为该研究样本，不外推全球                          |

最终结构：

```ts
measurements: {
  length: {
    min: 5.2,
    max: 8.6,
    unit: 'mm',
    note:
      'ICAR-NBAIR 给出的成虫体长范围；同页体宽 4.0–6.6 mm。英国识别资料常用 6.5–8 mm，巴基斯坦凭证样本为 6.63–7.20 mm；均不宣称全球极值。',
  },
},
metrics: {
  adultLengthCm: [0.52, 0.86],
},
```

### 典型七斑，不是七斑定律

[ICAR-NBAIR](https://databases.nbair.res.in/Featured_insects/Coccinella-septempunctata.php) 对典型斑纹的描述最适合图像守卫：

- 底色可为红、橙或黄调，成虫整体卵圆、强烈隆起。
- 一个黑斑跨越两片鞘翅基部、位于小盾片周围；每片鞘翅另有三个黑斑，合计七个。
- 小盾片两侧靠前方常见浅色小斑。
- 头部黑色，眼内缘附近有一对浅色额斑。
- 前胸背板黑色，前外侧有浅黄或白色区域。
- 腹面大体黑色。

[Hesler et al. 2010](https://www.ars.usda.gov/research/publications/publication/?seqNo115=252796) 检查 673 件标本和 382 份北美数字影像，记录缺少末端斑、肩部附加斑和左右不对称等少数型。可落库句式是“典型成虫有七个黑斑，少数个体的斑纹会缺失、附加、融合或不对称”。禁止写“每一只都有完全相同的七个圆点”。

### 鞘翅与飞行

鞘翅是硬化的第一对翅，闭合时沿背部中缝相接，覆盖腹部和折叠的膜质后翅。起飞时两片鞘翅抬起，后翅展开并承担主要飞行功能。这个结构是甲虫的通用形态，可用 [UKCEH 的瓢虫形态说明](https://european-ladybirds.brc.ac.uk/ladybird) 支持，但不能据此给七星瓢虫添加未测量的飞行速度或距离。

图像鉴别还应避免与异色瓢虫 `Harmonia axyridis` 混淆。七星瓢虫不应被画成浅色前胸背板中央带黑色 “M/W” 型的典型异色瓢虫外观。

## 食性与蚜虫捕食

### 田间直接证据

[Triltsch 1999](https://www.eje.cz/artkey/eje-199904-0006_Food_remains_in_the_guts_of_Coccinella_septempunctata_Coleoptera_Coccinellidae_adults_and_larvae.php) 在 1994–1997 年解剖德国田间采集的成虫和幼虫肠道。研究记录：

- 蚜虫残骸在 4 月至 10 月可检出，5 月和 6 月最常见。
- 真菌孢子在 7 月最常见。
- 非蚜节肢动物在 7 月较常见，蓟马是其中突出成分。
- 花粉在 5 月和 9 月较重要。
- 新羽化成虫、越冬后成虫和幼虫的检出组合并不相同。

[Weber & Lundgren 2009](https://www.ars.usda.gov/ARSUserFiles/30842/PUBS-PDF/Weber-Lundgren2009-Coccinellid.pdf) 复核该数据时计算，68% 的非空成虫肠道含一种以上食物。肠道残骸的可检出性不同，这个比例不能直接换算为摄入生物量、营养价值或主动选择率。

### 结构化食性

```ts
diet: {
  types: ['carnivore', 'insectivore', 'omnivore'],
  foods: [
    '蚜虫',
    '蓟马等其他小型节肢动物',
    '其他瓢虫的卵或幼虫等条件性同域猎物',
    '花粉、花蜜或糖源',
    '真菌孢子',
  ],
  description:
    '成虫和四个幼虫龄期都捕食蚜虫，也会摄取其他小型节肢动物、花粉、糖源和真菌孢子。德国田间肠道研究证明食谱混合，但残骸检出率不等于食物生物量或营养充足性；不能称为只吃害虫的专食者。',
},
```

`omnivore` 反映其摄取动物与非动物食物，不表示花粉或真菌能够在所有条件下单独支持完整发育和繁殖。实验中检出或短期存活也不等于“适宜主食”。

### 捕食量的证据边界

[Khan & Yoldaş 2018](https://doi.org/10.1016/j.aspen.2018.08.012) 在豌豆蚜密度实验中发现四龄幼虫、成年雄虫和成年雌虫呈 II 型功能反应，成年雌虫在该实验条件下攻击率最高、处理时间最短。[Farooq et al. 2020](https://doi.org/10.7717/peerj.8313) 用四种蚜虫饲养七星瓢虫，发育期和种群参数随猎物种类变化。

因此：

- 可以写“成虫和幼虫均捕食蚜虫”。
- 可以写“晚龄幼虫和成虫在实验中能显著消耗蚜虫”。
- 可以写“捕食会受猎物密度和处理时间限制”。
- 不写固定每日值、终生值或单一“最高纪录”。
- 不把实验室 II 型功能反应直接等同于田间必然压低害虫种群。
- 不把“有生物防治潜力”改写成“购买并释放一定有效”。

## 化学防御与警戒色

[Holloway et al. 1991](https://doi.org/10.1007/BF01240660) 直接测量七星瓢虫的反射血，确认受扰时液体从足关节释放，瓢虫素 coccinelline 分布于体内并在反射血中富集。反射血量和瓢虫素浓度在个体间差异显著。

[Blount et al. 2012](https://doi.org/10.1111/j.1365-2435.2012.01961.x) 通过高、低蚜虫食物处理比较鞘翅类胡萝卜素颜色、显眼度、斑点面积和防御性生物碱，说明警戒信号与化学防御都受资源条件影响。

可用描述：

- “红橙底色与黑斑构成警戒色，受扰成虫还能从足关节释放富含瓢虫素的反射血。”
- “个体的颜色、反射血量和生物碱含量会变化；醒目不等于无敌。”

禁止描述：

- 从口器或腹端喷射毒液。
- 主动咬伤并注入毒素。
- 把黄色液滴称为尿液、脓液或外伤流血。
- 断言斑点更多意味着毒性更强。

防御图只画一小滴黄橙色液体从腿部关节渗出，不画喷雾、毒刺、伤口或人手挤压。

## 繁殖、完全变态与越冬

### 发育顺序

七星瓢虫经历：

1. 卵；
2. 一龄、二龄、三龄、四龄幼虫；
3. 裸露且固定在基质上的蛹；
4. 成虫。

幼虫细长、深灰至黑褐，带橙黄或红橙色斑区，不是缩小版圆形成虫。蛹不结丝质茧，通常以后端固定在叶或其他基质上。刚羽化成虫的鞘翅颜色和斑纹尚未完全硬化、显色，但斑点数不能用来判断成虫年龄。

### 数值只作区域例证

[Cornell](https://biocontrol.entomology.cornell.edu/predators/Coccinella.php) 和 [USDA/WSU Hop Handbook](https://www.ars.usda.gov/ARSUserFiles/37109/hophandbook2010.pdf) 对北美农业环境给出相近概括：雌虫可在一个至三个月内产 200 至 1000 枚以上卵，小簇产在蚜虫附近；幼虫期和蛹期会随蚜虫供应与温度变化；美国东北部或太平洋西北常见一至两代。它们适合解释变异来源，不应成为全球 `featuredStats`。

[Farooq et al. 2020](https://doi.org/10.7717/peerj.8313) 进一步证明不同蚜虫种类会改变发育、产卵前期和繁殖参数。档案不落以下全局常数：

- 固定卵簇大小；
- 固定总产卵量；
- 固定卵、幼虫或蛹期天数；
- 固定年世代数；
- 固定成虫寿命。

### 成虫越冬与滞育

[Hodek & Čerkasov 1960](https://doi.org/10.1038/187345a0) 的经典实验和 [Hodek 2012](https://doi.org/10.1155/2012/249081) 的综述支持温带种群以成虫进入生殖滞育：个体积累储备，生殖活动受抑，转移到越冬处；春季条件合适并获得蚜虫食物后恢复繁殖。

Hodek 的综述同时指出，欧洲和美国种群在滞育诱导上有异质性。日本 `C. s. brucki` 的夏季滞育研究属于特定种下单元和地区，不能作为全球默认。可落库句式：

> 温带种群通常以成虫在落叶层、草丛基部等遮蔽处越冬，并进入程度不一的生殖滞育；具体起止时间和年生活史随地区、光周期、温度与食物而变。

## 保护状态、威胁与管理

### IUCN 与 CITES

| 系统                                                                                                                                           | 2026-08-28 结论                                 | 落库                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------- |
| [IUCN Red List 检索](https://www.iucnredlist.org/search?query=Coccinella%20septempunctata&searchType=species)                                  | 未返回 `Coccinella septempunctata` 的物种级评估 | `conservation('NE', 'unknown')`，不填 `assessedYear`、`criteria` 或全球数量 |
| [CITES 2026 附录](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) 与 [Checklist](https://checklist.cites.org/) | 未列入附录 I、II 或 III                         | 在描述中写“CITES 当前未列入”，不创建伪 IUCN 状态                            |
| [德国红色名录中心](https://www.rote-liste-zentrum.de/en/detailseite/?species_uuid=e7b10812-7db4-40c7-bc20-2e95e4b8276e)                        | 德国区域 LC、常见、趋势稳定                     | 只能作区域背景，不能把全球状态改为 LC                                       |

`NE` 是应用对“未检出 IUCN 评估”的结构化表达，不是 IUCN 发布的一份 NE 评估。CITES 未列入只说明公约附录没有管制该物种，不证明没有地方规则、生态风险或种群数据缺口。

### 威胁与数据缺口

- 全球没有标准化种群规模和趋势，常见或广布不能替代监测。
- [瓢虫保护路线图](https://doi.org/10.1111/cobi.13965) 在科级尺度识别气候因素、景观组成、生物入侵和知识缺口；这些是合理的调查方向，不是七星瓢虫已经量化的全球下降原因。
- 田缘和枯落物清理会减少猎物、花源和越冬遮蔽物，但物种级全球效应未量化。
- 杀虫剂影响取决于有效成分、剂量、暴露方式和发育期；实验可证明亚致死或跨代效应，不能把整个农药类别写成同一风险等级。
- 北美的核心问题不是“拯救”七星瓢虫，而是它作为非原生广食捕食者对当地群落的影响。[Evans 2004](https://doi.org/10.1890/03-0230) 在犹他苜蓿田发现其增加伴随本地瓢虫减少，并支持通过压低蚜虫密度改变本地种利用生境的机制；这不等于已经证明其单独造成任何本地物种灭绝。

### 负责任的管理

原生区：

- 保留田缘、篱带、花源、草丛基部和部分枯落物，兼顾活跃季与越冬期。
- 以监测和经济阈值决定是否防治蚜虫；需要用药时按当前产品标签、当地法规和天敌相容性资料选择时机与有效成分。
- 记录样地、日期、龄期、作物、蚜虫密度、搜索时间和用药史，建立可比较的长期趋势。
- 不为宣传生物防治而大规模采集野外越冬聚集或跨地点搬运。

北美引入区：

- 不购买、户外释放或跨地区转移七星瓢虫。
- 优先保护和监测本地瓢虫群落，而不是把单一非原生捕食者数量最大化。
- 将出现记录连同照片、地点、日期和生境提交给地方监测项目；不因其非原生就鼓励公众“见一只杀一只”。
- 任何控制措施都要评估对本地瓢虫和其他非靶标节肢动物的影响。

通用：

- [UMN Extension](https://extension.umn.edu/garden-and-home/yard-and-garden/yard-and-garden-insects/lady-beetles) 的科级建议支持用花源、枯落物和减少非选择性杀虫剂来保育居民瓢虫，同时指出购买释放常常不能在目标地点建立。引用时必须标为瓢虫科通用管理，不伪装成本种全球试验。
- 定期复核 IUCN、CITES、区域红色名录和引入区政策。

## 六段故事建议

### 1. `seven-spots-not-seven-certainties`

- label：斑纹与身份
- title：七个黑斑，是典型型，不是年龄计数器
- body：典型成虫在两片鞘翅基部有一个共享黑斑，每片鞘翅再有三个，合计七个。标本和公众影像研究记录少数缺斑、附加斑与左右不对称个体。斑点不会随着年龄一年加一个，鉴定还要结合隆起体形、头部和前胸浅色斑等特征。

### 2. `elytra-and-flight`

- label：甲虫结构
- title：硬鞘翅下面，折着真正推动飞行的后翅
- body：背上红橙色的两片“壳”是硬化前翅，闭合时沿中线相接，保护腹部和膜质后翅。起飞时鞘翅抬起，后翅展开。七个黑斑主要落在这对保护性前翅上，不是画在透明飞行翅上的装饰。

### 3. `aphid-predator-not-pest-specialist`

- label：食性证据
- title：蚜虫是重要猎物，却不是菜单的全部
- body：成虫和四个幼虫龄期都捕食蚜虫。德国多年田间肠道解剖还检出蓟马等节肢动物、花粉和真菌孢子，而且多数非空成虫肠道不止一种食物。残骸检出率不等于生物量，固定每日捕食数也会掩盖猎物、温度和龄期差异。

### 4. `coccinelline-warning`

- label：警戒与化防
- title：足关节的一滴黄液，是带生物碱的反射血
- body：受扰时，七星瓢虫可从足关节释放富含瓢虫素的反射血。红黑颜色向潜在捕食者发出警戒，但颜色、液量和生物碱浓度都会随个体与营养条件变化。它没有毒刺，也不会把毒液注入猎物。

### 5. `four-stages-and-winter`

- label：发育与年周期
- title：四个幼虫龄期之后，成虫带着储备过冬
- body：卵孵出深色带橙斑的幼虫，经过四个龄期后形成固定在叶面的裸蛹，再羽化为成虫。温带种群多以成虫藏进落叶层或草丛基部并抑制生殖，春季再恢复活动。每一期持续多久、每年有几代，都随地区和食物变化。

### 6. `beneficial-here-nonnative-there`

- label：分布与管理
- title：在原生区保育居民天敌，在北美停止继续释放
- body：七星瓢虫原生于欧洲、北非和亚洲，在美国和加拿大则是已建立的非原生种。北美田间研究显示它可能通过压低蚜虫密度改变本地瓢虫的生境利用，但没有证据把所有下降都归咎于单一机制。管理目标应随地区变化。

## 摘要、描述与关键事实草案

`summary`：

> 原生于古北界、在北美建立的蚜虫捕食性甲虫，典型成虫有七个黑斑，并以反射血中的瓢虫素参与防御。

`description`：

> 七星瓢虫是瓢虫科瓢虫属的强烈隆起型甲虫，成虫通常长 5.2 至 8.6 毫米。典型斑纹由一个跨越鞘翅基部的共享黑斑和每片鞘翅三个黑斑组成，但少数个体会缺斑、增斑或不对称。成虫和四个幼虫龄期都捕食蚜虫，也摄取其他小型节肢动物、花粉、糖源与真菌孢子。受扰成虫可从足关节释放富含瓢虫素的反射血。温带种群主要以成虫在落叶层或草丛基部越冬。它原生于欧洲、北非和亚洲，在美国、加拿大属于非原生建立种；IUCN 尚无物种级评估，CITES 当前未列入。

`keyFacts` 建议：

1. 当前接受学名是 `Coccinella septempunctata` Linnaeus, 1758。
2. ICAR-NBAIR 给出的成虫体长为 5.2–8.6 mm、体宽为 4.0–6.6 mm。
3. 典型七斑由一个共享小盾片斑和每片鞘翅三个黑斑组成，少数个体会变异。
4. 红橙色鞘翅是硬化前翅，飞行后翅折叠在其下。
5. 成虫和四个幼虫龄期都捕食蚜虫，但也摄取其他节肢动物、花粉、糖源和真菌孢子。
6. 捕食量受龄期、性别、猎物、密度、温度和植物结构影响，没有可靠的全球固定每日值。
7. 受扰成虫可从足关节释放富含瓢虫素 coccinelline 的反射血。
8. 生命周期为卵、四个幼虫龄期、蛹、成虫，属于完全变态。
9. 温带种群主要以成虫在落叶层、草丛基部等遮蔽处越冬，具体物候有地域差异。
10. 本种原生于古北界，在美国和加拿大为非原生建立种。
11. 北美建立来源仍有争议，不能只归因于历史人为释放。
12. IUCN 尚无物种级评估，CITES 当前未列入，全球趋势未知。

## 四项展示数字

```ts
featuredStats: [
  {
    key: "adult-length",
    label: "成虫体长",
    value: "5.2–8.6",
    unit: "mm",
    note: "ICAR-NBAIR 物种页范围；同页体宽 4.0–6.6 mm，不宣称全球极值。",
  },
  {
    key: "typical-spot-layout",
    label: "典型黑斑布局",
    value: "1+3+3",
    unit: "个",
    note: "一个跨两片鞘翅的共享小盾片斑，加每片鞘翅三个；少数个体会变异。",
  },
  {
    key: "larval-instars",
    label: "幼虫龄期",
    value: "4",
    unit: "龄",
    note: "完全变态中的四个幼虫龄期；持续天数随温度和食物变化。",
  },
  {
    key: "mixed-adult-guts",
    label: "混合食物肠道",
    value: "68",
    unit: "%",
    note: "Weber 与 Lundgren 依据 Triltsch 德国田间数据计算的非空成虫肠道比例；不等于食物生物量。",
  },
];
```

## 六张图的科学场景

### 统一技术要求

- 3:2 横图，1536×1024，sRGB，最终 WebP 为不透明 RGB。
- 无文字、箭头、地图、标尺、水印、边框或拼贴。
- 个体解剖完整，不多腿、不少腿、不融合触角。
- 成虫有六足、短棒状触角、黑色头和前胸背板、前胸前外侧浅色斑、红橙色强隆起鞘翅。
- 典型成虫采用一个共享基部斑加每片三个斑；只有故事明确讲变异时才偏离七斑。
- 不画成异色瓢虫常见的白色前胸中央黑色 M/W 型。

### 01 `adult-aphid-colony-portrait`

- 一只完整成虫位于画面右侧三分之一，停在蚕豆或其他温带草本茎叶上。
- 旁边有一小簇蚜虫，成虫朝向猎物但尚未咬住；不画血腥捕食。
- 成虫略呈三分之四视角，能看出隆起体形、黑头、浅色额斑和典型七斑。
- 左侧保留干净负空间给页面标题；背景是柔焦田缘或草本群落。
- 不加入其他瓢虫、幼虫、蛹或人手。

### 02 `standard-seven-spot-dorsal`

- 一只成虫从正上方观察，两片鞘翅闭合并沿直线中缝相接。
- 清楚显示一个共享小盾片黑斑和每片鞘翅三个黑斑。
- 小盾片两侧浅色斑、黑色前胸与前外侧浅色区可见。
- 画面用于“典型型”诊断，不暗示所有个体完全相同。
- 不加数字、标注线、标尺或第二个个体。

### 03 `larva-aphid-hunt`

- 一只四龄幼虫在蚕豆叶或茎上接近一小簇蚜虫，双方保持可见距离。
- 幼虫细长、深灰黑、分节清楚，背部有突起并带橙黄色斑区；不能画成圆形小成虫。
- 六足和头部朝向猎物，不画咬碎、体液或夸张巨颚。
- 蚜虫数量控制在能辨认的小簇，不让画面变成密集虫害海报。

### 04 `pupa-on-leaf`

- 一只裸露的七星瓢虫蛹以后端固定在叶面，身体短而隆起、分节可见。
- 蛹可呈橙褐至深色斑驳，但不直接套用成虫七斑。
- 不画丝茧、蛹室、蝴蝶悬蛹丝带或同时出现的成虫。
- 叶片与田缘背景保持自然比例，画面只表现一个发育阶段。

### 05 `reflex-bleeding-defense`

- 一只成虫停在叶片上，某一足关节处出现一小滴黄橙色反射血。
- 液滴紧贴腿部关节，量小，呈渗出而不是喷射。
- 成虫外表完整，无伤口、针刺、挤压的人手或捕食者。
- 不从口器、腹端或鞘翅表面产生液体。

### 06 `leaf-litter-overwintering`

- 8–15 只成虫藏在温带田缘的干落叶层和草丛基部，部分被叶片遮住。
- 个体姿态安静，表现成虫越冬聚集，不表现交配、产卵或主动捕食。
- 环境可有枯草、土粒和一块小石，不能画成室内窗框、积雪中暴露或巨大洞穴。
- 个体仍应保持七星瓢虫形态，避免混入异色瓢虫的多色型。

### 建议媒体字段

```ts
media: {
  image:
    './images/species/seven-spotted-ladybird/01-adult-aphid-colony-portrait.webp',
  alt: '一只典型七斑的七星瓢虫成虫停在有少量蚜虫的草本叶茎上',
  focalPoint: { x: 0.7, y: 0.5 },
  credit: 'AI-generated scientific reconstruction, evidence-reviewed',
  gallery: [
    {
      image:
        './images/species/seven-spotted-ladybird/02-standard-seven-spot-dorsal.webp',
      alt: '七星瓢虫成虫背面近景，闭合鞘翅上一个共享黑斑和每侧三个黑斑清楚可见',
      title: '典型七斑布局',
      caption:
        '一个共享小盾片斑加每片鞘翅三个黑斑是典型型，少数个体会缺斑、增斑或不对称。',
      focalPoint: { x: 0.5, y: 0.5 },
    },
    {
      image:
        './images/species/seven-spotted-ladybird/03-larva-aphid-hunt.webp',
      alt: '一只深灰黑带橙斑的七星瓢虫四龄幼虫在叶面接近一小簇蚜虫',
      title: '幼虫也捕食蚜虫',
      caption:
        '七星瓢虫有四个幼虫龄期；捕食量会随龄期、猎物、密度和温度变化。',
      focalPoint: { x: 0.5, y: 0.52 },
    },
    {
      image:
        './images/species/seven-spotted-ladybird/04-pupa-on-leaf.webp',
      alt: '一只分节清楚的七星瓢虫蛹以后端固定在绿色叶片表面',
      title: '不结茧的蛹期',
      caption:
        '四龄幼虫之后形成固定在基质上的裸蛹，再羽化为成虫；各期时长受环境影响。',
      focalPoint: { x: 0.52, y: 0.5 },
    },
    {
      image:
        './images/species/seven-spotted-ladybird/05-reflex-bleeding-defense.webp',
      alt: '七星瓢虫成虫停在叶片上，一小滴黄橙色反射血从腿部关节渗出',
      title: '富含瓢虫素的反射血',
      caption:
        '受扰时液体从足关节释放；反射血量和生物碱浓度存在个体差异。',
      focalPoint: { x: 0.5, y: 0.52 },
    },
    {
      image:
        './images/species/seven-spotted-ladybird/06-leaf-litter-overwintering.webp',
      alt: '一群七星瓢虫成虫藏在温带田缘的干落叶和草丛基部越冬',
      title: '落叶层下的成虫越冬',
      caption:
        '温带种群通常以成虫越冬，具体聚集时间和滞育强度随地区与环境而变。',
      focalPoint: { x: 0.5, y: 0.55 },
    },
  ],
}
```

## 测试守卫建议

### 身份、分类与保护状态

- `getSpeciesBySlug('seven-spotted-ladybird')` 返回 `id === 'species-coccinella-septempunctata'`。
- 主名分别为“七星瓢虫”和 “Seven-spot Ladybird”，学名严格等于 `Coccinella septempunctata`。
- 分类路径严格为 `Animalia / Arthropoda / Insecta / Coleoptera / Coccinellidae / Coccinella`，对应中文名“动物界 / 节肢动物门 / 昆虫纲 / 鞘翅目 / 瓢虫科 / 瓢虫属”。
- 保护状态为 `NE`、趋势为 `unknown`，对象不应含 `assessedYear` 或 `criteria`。
- 文案同时保留“IUCN 尚无物种级评估”和“CITES 当前未列入”，测试不能把二者合并成同一状态。

### 分布、生境与测量

- `continents` 包含亚洲、欧洲、非洲、北美洲；`realms` 只有 `terrestrial`。
- `range` 同时出现古北界原生范围和美国、加拿大引入建立范围，不能把北美写进原生区。
- 国家数组标明为代表性列表；测试不应把缺少某个有记录国家解释为分布否定。
- `measurements.length` 严格为 5.2–8.6 mm，`metrics.adultLengthCm` 严格为 `[0.52, 0.86]`。
- 测量注释包含体宽 4.0–6.6 mm，并说明英国和巴基斯坦口径不是全球极值。
- 四个生境均为陆生，且只有“开阔草本植被与田缘”设置 `isPrimary: true`。

### 生命史、食性与故事

- `diet.types` 同时保留 `carnivore`、`insectivore`、`omnivore`，食物数组至少含蚜虫、其他小型节肢动物、花粉或糖源、真菌孢子。
- 关键事实明确写“四个幼虫龄期”和“卵、幼虫、蛹、成虫”，不出现固定全球发育天数或年世代数。
- 关键事实明确写“捕食量受条件影响”，不出现未经情境限定的每日或终生蚜虫数字。
- `storySections` 长度严格为 6，key 集合严格为：

  ```ts
  [
    "seven-spots-not-seven-certainties",
    "elytra-and-flight",
    "aphid-predator-not-pest-specialist",
    "coccinelline-warning",
    "four-stages-and-winter",
    "beneficial-here-nonnative-there",
  ];
  ```

- story key 不重复；每段 `label`、`title`、`body` 都非空。

### 来源与日期

- `SEVEN_SPOTTED_LADYBIRD_SOURCES` 每条 URL 唯一，`accessedAt` 全部为 `2026-08-28`。
- 来源数组至少覆盖 `taxonomy`、`distribution`、`ecology`、`conservation`、`general` 五类。
- 至少保留 GBIF、ITIS、EPPO、TBN、ICAR-NBAIR、Triltsch、Holloway、Hodek、IUCN、CITES、Evans 和瓢虫保护路线图来源。
- `publishedAt` 与 `updatedAt` 均为 `2026-08-28`。

### 媒体与静态资产

- 封面加 gallery 共 6 张，路径依次对应 `01-adult-aphid-colony-portrait.webp` 至 `06-leaf-litter-overwintering.webp`。
- 六张运行时 WebP 均存在，尺寸为 1536×1024，色彩空间为 sRGB，且无 alpha 通道。
- 封面焦点在右侧成虫，`focalPoint.x` 建议保持约 0.7；其余焦点必须在 0..1。
- 每张图有非空替代文字；五张 gallery 图有非空 title 和 caption。
- 源 PNG、运行时 WebP、来源 README 的编号和主题一一对应。

### 分类计数与 TODO

- 新增后物种档案总数从 65 变为 66，昆虫纲后代物种数从 3 变为 4。
- 新分类单元 `Coleoptera`、`Coccinellidae`、`Coccinella` 各有一个后代物种档案。
- `docs/todo.md` 中七星瓢虫勾选完成，总物种数改为 66，昆虫纲改为 4，剩余改为 12。
- TODO 的下一个未完成动物应为帝王伟蜓 `Anax imperator`。

## 事实护栏与常见误解

1. **七个黑斑是典型型，不是绝对型。** 少数个体会缺斑、增斑、融合或不对称。
2. **共享斑只数一次。** 标准布局是一个跨两片鞘翅的基部斑，加每片三个，不是每片四个。
3. **斑点数不表示年龄或性别。** 不能用“每年长一个斑”解释名称。
4. **鞘翅不是主要飞行翅。** 它们是硬化前翅；膜质后翅折叠在下面。
5. **不要画成异色瓢虫。** 避免典型白色前胸中央黑色 M/W 斑和高度多变的鞘翅色型。
6. **不是只吃害虫。** 田间肠道记录包含非蚜节肢动物、花粉和真菌孢子，也可能发生同域捕食。
7. **肠道检出率不是摄入生物量。** 不用 68% 推导热量、营养贡献或主动偏好。
8. **没有全球固定蚜虫捕食数。** 龄期、性别、猎物、密度、温度和植株结构都会改变结果。
9. **生物防治潜力不等于释放保证。** 田间建立、停留和害虫压制取决于环境，购买释放常常失败。
10. **反射血不是尿液或注射毒液。** 它从足关节渗出，含防御性生物碱；瓢虫没有毒刺。
11. **完全变态不等于结茧。** 蛹通常裸露并以后端固定在基质上。
12. **繁殖数值不能全球化。** 卵簇、总产卵、发育天数和世代数都需要地域与条件限定。
13. **温带成虫越冬不是全球固定日历。** 滞育诱导和起止时间在欧洲、北美和日本种群间有差异。
14. **日本 `C. s. brucki` 的夏季滞育不能代表所有种群。**
15. **北美建立机制未定。** 历史释放和船运意外输入都有证据，不能只写其中一个。
16. **北美非原生影响不是单因果灭绝证明。** 猎物变化、竞争、同域捕食与生境利用共同作用。
17. **区域 LC 不是全球 LC。** 德国或佛兰德区域名录不能替代 IUCN 物种级评估。
18. **NE 不是一份正式评估结果。** 它表示截至检索日期没有找到 IUCN 物种级评估。
19. **CITES 未列入不等于无保护或无风险。** 地方规则和生态管理仍可能适用。
20. **管理分地区。** 原生区保育居民种群和生境；北美不再购买、释放或跨地点转移。
