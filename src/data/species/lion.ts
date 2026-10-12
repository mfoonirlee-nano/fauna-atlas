import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

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
    title: 'Mammal Diversity Database v2.5 data release',
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
    title: 'African Lion Database: 2025 Lion Distribution feature layer',
    url: 'https://services8.arcgis.com/jpPhoh9heohhP413/arcgis/rest/services/NewDistrbutionMap/FeatureServer/0',
    kind: 'distribution',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'African Lion Database: 2025 Lion Population feature layer',
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
    title: 'IUCN Green Status: Panthera leo supplementary information',
    url: 'https://nc.iucnredlist.org/redlist/content/attachment_files/Green_Status_Supplementary_Information_15951_Panthera_leo.pdf',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices I, II and III, effective 5 March 2026',
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
    title: 'Bertola et al. 2022: Lion evolutionary lineages and genomic variation',
    url: 'https://doi.org/10.1186/s12864-022-08510-y',
    kind: 'taxonomy',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Packer et al. 1990: Why Lions Form Groups: Food is Not Enough',
    url: 'https://doi.org/10.1086/285079',
    kind: 'ecology',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Stander 1992: Cooperative hunting in lions: the role of the individual',
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
    title: 'Nicholson et al. 2023: Socio-political and ecological fragility of African lion populations',
    url: 'https://doi.org/10.1038/s43247-023-00959-3',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Nicholson et al. 2024: Review of lion survey methodologies',
    url: 'https://doi.org/10.1016/j.gecco.2024.e02908',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Nicholson et al. 2025: Regional anthropogenic threats and mitigation capacity',
    url: 'https://doi.org/10.1016/j.gecco.2025.e03760',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
  {
    title: 'Hazzah et al. 2014: Efficacy of two lion conservation programs in Maasailand',
    url: 'https://doi.org/10.1111/cobi.12244',
    kind: 'conservation',
    accessedAt: LION_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-panthera-leo',
    slug: 'lion',
    names: {
      zh: '狮',
      en: 'Lion',
      aliases: ['狮子'],
    },
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
      regions: [
        '西非与中非残存保护地',
        '东非稀树草原与林地',
        '南部非洲保护地和连通景观',
        '印度古吉拉特邦大吉尔景观',
      ],
      countries: [
        '安哥拉',
        '贝宁',
        '博茨瓦纳',
        '布基纳法索',
        '喀麦隆',
        '中非共和国',
        '乍得',
        '刚果民主共和国',
        '埃塞俄比亚',
        '肯尼亚',
        '马拉维',
        '莫桑比克',
        '纳米比亚',
        '尼日尔',
        '卢旺达',
        '塞内加尔',
        '南非',
        '南苏丹',
        '坦桑尼亚',
        '乌干达',
        '赞比亚',
        '津巴布韦',
        '印度',
      ],
      range:
        '当前范围高度破碎，位于 18 个确认现存和 4 个可能现存的非洲范围国家，以及印度古吉拉特邦大吉尔景观；国家集合只表示境内存在或可能存在占域斑块，不表示全国连续分布。',
      center: { lat: 2, lng: 32 },
    },
    habitats: [
      {
        name: '稀树草原与草地灌丛镶嵌',
        realm: 'terrestrial',
        description:
          '开放草地、灌丛和疏林共同提供视野、伏击遮蔽、育幼隐蔽处和中大型有蹄类猎物。',
        isPrimary: true,
      },
      {
        name: '开放林地与干燥森林',
        realm: 'terrestrial',
        description:
          '利用开放或封闭林地、干燥森林和部分荒漠边缘，前提是仍有足够遮蔽、猎物和低干扰空间。',
      },
      {
        name: '大吉尔干燥落叶林与农林交错景观',
        realm: 'terrestrial',
        description:
          '印度种群利用混交林、稀树草原、柚木和金合欢林地，并在保护地外围与农业和聚落景观相邻。',
      },
    ],
    measurements: {
      length: {
        min: 137,
        max: 250,
        unit: 'cm',
        note: '头体长；尾长另计 60–100 厘米，为跨性别和地理种群的物种级概览',
      },
      weight: {
        min: 110,
        max: 272,
        unit: 'kg',
        note: 'IUCN/SSC 猫科专家组物种级宽范围，不代表典型个体或任一亚种',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: ['角马', '斑马', '水牛', '羚羊类', '水鹿', '斑鹿', '野猪', '蓝牛'],
      description:
        '机会主义捕食者，偏好中大型有蹄类，也会食腐或夺食；猎物组成随非洲和印度各地的群落、季节与可得性改变。',
    },
    activity: [
      '雌狮组成分合式狮群，并合作维护领地和照看幼崽',
      '可单独或结群捕猎，群猎中的角色与队形随个体、猎物和环境改变',
      '多在黄昏、夜间和清晨活动，活动时段随温度、猎物和人类干扰变化',
      '以吼声、气味标记和身体接触维持远近距离交流',
    ],
    tags: ['非洲与印度', '群居猫科', '合作捕猎', '共同育幼', '顶级捕食者', 'CITES 附录 I/II'],
    summary:
      '狮生活在非洲部分地区和印度古吉拉特邦，以大型有蹄动物为主要食物。雌狮构成狮群的核心，群体成员共同守护领地、捕猎和照顾幼崽。',
    description:
      '狮可生活在草原、灌丛、疏林和部分干旱或森林边缘地区，分布取决于猎物、隐蔽条件和人类干扰。相互有亲缘关系的雌狮常长期留在群中，雄狮则会组成联盟并争夺繁殖机会。合作捕猎和共同育幼能帮助狮群维持领地，但各群的规模与合作程度随环境改变。现存分布约为历史范围的 6%，栖息地减少与人兽冲突仍是主要保护问题。',
    storySections: [
      {
        key: 'lineages',
        label: '分类与亲缘',
        title: '印度狮的近亲在西非与中非',
        body: '当前分类把狮分为北方狮和南方狮。基因组资料显示，印度种群与西非、中非种群同属北方支系，东非和南部非洲种群属于南方支系；东北非洲仍存在两支混合的缝合带。',
      },
      {
        key: 'pride',
        label: '狮群社会',
        title: '狮群共同守护领地和幼崽',
        body: '雌狮以分合方式组成狮群。结群既影响觅食，也帮助成员在领地冲突中对抗邻群，并让母狮把幼崽集中照看；单用“合作围猎队”无法解释这种社会结构。',
      },
      {
        key: 'cooperative-hunt',
        label: '合作捕猎',
        title: '个体会占据不同位置，也会临场调整',
        body: '埃托沙的群猎记录中，一些雌狮从侧翼绕行，另一些在中间等待被驱赶的猎物。个体常有位置偏好，也会在同伴缺席时调整；这是一处生态系统的实证，不是全球固定阵型。',
      },
      {
        key: 'prey',
        label: '食性',
        title: '中大型有蹄类支撑狮群',
        body: '狮偏好中大型有蹄类，非洲常见角马、斑马和水牛，印度则常见水鹿、斑鹿、野猪和蓝牛。食谱由当地猎物决定，食腐和夺食也属于能量来源。',
      },
      {
        key: 'creche',
        label: '繁殖与育幼',
        title: '幼崽在共同育幼群中长大',
        body: '雌狮可能同步产仔，并把幼崽集中在共同育幼群中。稳定的母狮组合能共同警戒和抵御杀幼雄狮；这项证据支持共同照看，不代表每只雌狮必然哺乳所有幼崽。',
      },
      {
        key: 'fragmented-range',
        label: '监测与保护',
        title: '剩余范围需要可靠监测和长期共存',
        body: '过去三个世代的范围缩减约 34%，剩余种群高度破碎。保护既要减少栖息地转化、套索、猎物盗猎和身体部位贸易，也要以牲畜防护、社区收益和可比较调查降低人狮冲突。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '林奈最初使用 Felis Leo',
        body: '林奈在 1758 年以 Felis Leo 正式命名狮，后来分类研究将其归入 Panthera 属，现用学名为 Panthera leo。哺乳动物多样性数据库把模式产地记在摩洛哥一带。命名记录是现代分类史中的节点，狮在人类历史中早已广为人知；今天，非洲与印度狮的谱系差异和保护情况仍在持续研究。',
      },
    ],
    keyFacts: [
      'IUCN 当前全球正式值为 VU、A2c、下降，评估年 2025。',
      '2004 至 2025 年现存范围估计缩减 34%，2025 年约剩历史范围的 6%。',
      '当前范围国家集合为 22 个非洲国家加印度，非洲集合包含确认现存和可能现存状态。',
      '当前分类接受北方狮与南方狮，印度种群属于北方狮。',
      '狮群兼具领地竞争、觅食和共同育幼功能，并非只为围猎形成。',
      '埃托沙 486 次协调群猎显示雌狮可反复承担不同位置角色。',
      '妊娠约 100 至 119 天，每胎 1 至 4 只。',
      '物种级寿命概览为 12 至 18 年。',
    ],
    threats: [
      '农业、聚落和其他土地转化造成的栖息地丧失、退化与破碎化',
      '捕食家畜或人身风险引发的报复性和无差别杀害，包括投毒',
      '盗猎与丛林肉贸易造成的中大型有蹄类猎物衰退',
      '套索误捕、针对骨骼等身体部位的盗猎与非法贸易',
      '管理不良或不可持续的战利品狩猎，以及保护资金不足',
      '武装冲突阻断保护管理，印度单一孤立种群还承受疾病、灾害和遗传风险',
    ],
    conservationActions: [
      '保护关键保护地、猎物群落和跨境连通景观，控制套索与猎物盗猎',
      '以加固畜栏、夜间圈养、放牧管理、快速响应和公平补偿减少报复性杀害',
      '让周边社区获得可核验的保护收益并参与土地利用与冲突治理',
      '加强身体部位贸易执法，并提高战利品狩猎配额、年龄规则和收益流向的透明度',
      '用直接观察、相机捕获再捕获或遗传空间捕获再捕获开展可比较的长期监测',
      '在印度维持大吉尔景观连通性，并建立第二个可持续野生种群以分散单点风险',
    ],
    metrics: {
      adultLengthCm: [137, 250],
      adultMassKg: [110, 272],
      lifespanYears: [12, 18],
    },
    featuredStats: [
      {
        key: 'adult-length',
        label: '头体长',
        value: '137–250',
        unit: '厘米',
        note: '尾长另计 60 至 100 厘米；物种级概览',
      },
      {
        key: 'adult-mass',
        label: '体重',
        value: '110–272',
        unit: '千克',
        note: '跨性别和地理种群的物种级宽范围',
      },
      {
        key: 'gestation',
        label: '妊娠期',
        value: '100–119',
        unit: '天',
        note: '全年均可能繁殖',
      },
      {
        key: 'range-decline',
        label: '三世代范围缩减',
        value: '34',
        unit: '%',
        note: '2004 至 2025 年，约 21 年；不是逐只普查',
      },
    ],
    media: {
      image: './images/species/lion/01-savanna-dawn-male-portrait.webp',
      alt: '一只完整的鬃毛自然成年雄狮在晨光中的稀树草原行走，四爪和尾簇均在画面内',
      focalPoint: { x: 0.67, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image: './images/species/lion/02-adult-lioness-profile.webp',
          alt: '一只无鬃成年雌狮侧身走过短草地，完整尾部末端带深色毛簇',
          title: '雌狮的物种级形态',
          caption:
            '无鬃、黄褐被毛、浅色腹面和尾簇构成可见形态；单个个体不能代表全部种群。',
          focalPoint: { x: 0.52, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/lion/03-pride-resting-in-acacia-shade.webp',
          alt: '一只成年雄狮和三只成年雌狮作为四个分开的身体在金合欢树荫下休息',
          title: '分合式狮群',
          caption:
            '狮群兼具领地、觅食和育幼功能；画面不证明四只狮的亲缘、等级或固定成员资格。',
          focalPoint: { x: 0.52, y: 0.57 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/lion/04-cooperative-wildebeest-approach.webp',
          alt: '三只分开的雌狮共同朝向远处一只角马，动物之间没有接触',
          title: '接近，不是捕获',
          caption:
            '群猎可出现协调位置；这一静帧不能证明已经协调、追逐或捕猎成功。',
          focalPoint: { x: 0.48, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/lion/05-communal-cub-care.webp',
          alt: '两只成年雌狮与三只幼狮在一个有遮蔽的草窝共同休息和警戒',
          title: '共同育幼群',
          caption:
            '母狮可把幼崽集中照看；画面不鉴定亲缘，也不证明哺乳或共同哺乳。',
          focalPoint: { x: 0.54, y: 0.57 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/lion/06-camera-trap-monitoring.webp',
          alt: '一只雌狮沿灌丛兽径经过固定在树干上的无品牌相机',
          title: '从记录到种群估算',
          caption:
            '相机是非接触调查工具；单次记录不能确定身份、占域、丰度、密度或趋势，可靠估算还需要重复采样、个体识别和合适模型。',
          focalPoint: { x: 0.54, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: LION_SOURCES,
    featured: true,
    publishedAt: LION_CONTENT_DATE,
    updatedAt: LION_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
