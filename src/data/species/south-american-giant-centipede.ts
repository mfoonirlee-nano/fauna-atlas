import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE = '2026-09-01' as const;

const SOUTH_AMERICAN_GIANT_CENTIPEDE_CONTENT_DATE = '2026-09-01' as const;

const SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCES = [
  {
    title: 'ChiloBase 2.0 — Scolopendra gigantea Linnaeus, 1758',
    url: 'https://chilobase.biologia.unipd.it/searches/result_species/789',
    kind: 'taxonomy',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'ChiloBase 2.0 — Scolopendra gigantea weyrauchi accepted as Scolopendra galapagoensis',
    url: 'https://chilobase.biologia.unipd.it/searches/result_subspecies/696',
    kind: 'taxonomy',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'Myriatrix — Scolopendra gigantea diagnostic description',
    url: 'https://myriatrix.myspecies.info/taxonomy/term/9017/descriptions',
    kind: 'taxonomy',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'Shelley & Kiser 2000 — Neotype and diagnostic account of Scolopendra gigantea',
    url: 'https://doi.org/10.1080/03946975.2000.10531129',
    kind: 'distribution',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'Shelley 2006 — Scolopendra gigantea taxonomic treatment and expanded range',
    url: 'https://zenodo.org/records/15604109',
    kind: 'distribution',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'ITIS — Scolopendra gigantea, TSN 1091056',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=1091056',
    kind: 'taxonomy',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'Quintero Arias & Cupul-Magaña 2013 — First non-accidental record from Panama',
    url: 'https://hdl.handle.net/10893/8399',
    kind: 'distribution',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'Díaz Sandoval & Reinoso-Flórez 2023 — Scolopendromorph centipedes from Colombia',
    url: 'https://doi.org/10.17533/udea.acbi/v45n119a02',
    kind: 'distribution',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'Cazorla et al. 2012 — Checklist of centipede species known from Venezuela',
    url: 'https://ve.scielo.org/scielo.php?pid=S1690-46482012000200011&script=sci_arttext',
    kind: 'distribution',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'Molinari et al. 2005 — Predation on three bat species in one Venezuelan cave',
    url: 'https://www.researchgate.net/publication/228372837_Predation_by_giant_centipedes_Scolopendra_gigantea_on_three_species_of_bats_in_a_Venezuelan_cave',
    kind: 'ecology',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'Rutherford 2012 — Feeding behaviour of a captive Scolopendra gigantea',
    url: 'https://ttfnc.org/livingworld/index.php/lwj/article/view/rutherford2012',
    kind: 'ecology',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: "van Buurt & Dilrosun 2017 — Predation on Baker's Cat-eyed Snake in Aruba",
    url: 'https://doi.org/10.17161/randa.v24i2.14166',
    kind: 'ecology',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'Fuentes et al. 2022 — Protein and carbohydrate profile of Scolopendra gigantea venom',
    url: 'https://servicio.bc.uc.edu.ve/fcs/vol26n2/art02.pdf',
    kind: 'ecology',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'Fuentes et al. 2020 — Blood effects of Scolopendra gigantea venom in vitro',
    url: 'https://servicio.bc.uc.edu.ve/fcs/vol24n3/vol24n3.pdf',
    kind: 'ecology',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'González et al. 2000 — Bioecology and mouse-tissue histopathology of Scolopendra gigantea venom',
    url: 'https://produccioncientificaluz.org/index.php/cientifica/article/view/14714/0',
    kind: 'ecology',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'Rodríguez-Acosta et al. 2000 — Scolopendra gigantea envenomation in a newborn',
    url: 'https://doi.org/10.1590/S0036-46652000000600007',
    kind: 'ecology',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'CSIRO — Centipede biology introduction',
    url: 'https://www.ento.csiro.au/biology/centipedes/key1Text/introduction.htm',
    kind: 'general',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'ChiloBase 2.0 — Scolopendra galapagoensis Bollman, 1889',
    url: 'https://chilobase.biologia.unipd.it/searches/result_species/94',
    kind: 'taxonomy',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search — Scolopendra gigantea, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Scolopendra%20gigantea&searchType=species',
    kind: 'conservation',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List FAQ — species absent from the Red List are Not Evaluated',
    url: 'https://nrl.iucnredlist.org/about/faqs',
    kind: 'conservation',
    accessedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-scolopendra-gigantea',
    slug: 'south-american-giant-centipede',
    names: {
      zh: '南美巨人蜈蚣',
      en: 'South American Giant Centipede',
      aliases: [
        '巨人蜈蚣',
        'Giant Centipede',
        'Amazonian Giant Centipede',
      ],
    },
    scientificName: 'Scolopendra gigantea',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Chilopoda', '唇足纲'),
      taxon('Scolopendromorpha', '蜈蚣目'),
      taxon('Scolopendridae', '蜈蚣科'),
      taxon('Scolopendra', '蜈蚣属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['北美洲', '南美洲'],
      regions: [
        '巴拿马查格雷斯国家公园的非偶然记录',
        '哥伦比亚至苏里南的南美洲北部加勒比沿岸',
        '阿鲁巴、库拉索和特立尼达',
        '委内瑞拉北部与玛格丽塔岛',
      ],
      countries: [
        '巴拿马',
        '哥伦比亚',
        '委内瑞拉',
        '圭亚那',
        '苏里南',
        '特立尼达和多巴哥',
        '阿鲁巴',
        '库拉索',
      ],
      range:
        '现行汇编范围包括巴拿马，以及从哥伦比亚到苏里南的南美洲北部加勒比沿岸，并延伸到特立尼达、玛格丽塔岛、库拉索和阿鲁巴；巴拿马标本被发表为非人为带入的西北端记录。Shelley 与 Kiser 把秘鲁旧记录归入 S. galapagoensis，故从 S. gigantea 的现行分布排除。巴西记录仍待确认；美属维尔京群岛、海地、墨西哥和洪都拉斯的零星标本被解释为人为带入或标签错误，不能证明当地已建立种群。',
      center: { lat: 10.5, lng: -67.5 },
    },
    habitats: [
      {
        name: '加勒比沿岸林地落叶层与隐蔽物',
        realm: 'terrestrial',
        description:
          '利用落叶、倒木、石下、灌丛和林缘碎屑形成的隐蔽微生境；特立尼达记录来自热带干燥林落叶层。',
        isPrimary: true,
      },
      {
        name: '低山原生雨林',
        realm: 'terrestrial',
        description:
          '巴拿马自然分布凭证来自海拔 850 米的原生雨林；这一单点不代表完整海拔范围。',
      },
      {
        name: '半干旱刺灌丛石灰岩洞穴',
        realm: 'terrestrial',
        description:
          '委内瑞拉瓜诺洞位于半干旱刺灌丛，本种会在洞前厅地面、墙壁与顶板活动；它利用洞穴，但不是洞穴专性种。',
      },
    ],
    measurements: {
      length: {
        unit: 'mm',
        note: 'Molinari 等人的文献报道转述已知最大长度超过 300 毫米；Shelley 与 Kiser 修订表中的最大实测标本为 274.6 毫米。两项数值都不是成体常态或精确硬上限，也没有给出可填入 min、max 或 typical 的全种体长范围。',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '洞穴直接观察中的 Blaberus discoidalis（盘腹蟑螂）',
        '圈养观察中的 Eublaberus distanti（盘腹蟑螂）',
        '委内瑞拉同一洞穴三次记录中的 Mormoops megalophylla、Pteronotus davyi 与 Leptonycteris curasoae',
        '阿鲁巴一次记录中的 Leptodeira bakeri（贝氏猫眼蛇）',
      ],
      description:
        '物种级食物记录来自三组边界清楚的来源。Molinari 等人在委内瑞拉洞穴直接见到本种捕食 Blaberus discoidalis，并在同一洞穴记录 3 次捕食、涉及 3 种蝙蝠；Rutherford 记录一只特立尼达个体在圈养环境中捕食 Eublaberus distanti；van Buurt 与 Dilrosun 在阿鲁巴记录一只个体攻击并取食 Leptodeira bakeri。这些资料都不能泛化为整个物种的常见猎物、食谱比例或猎物偏好。',
    },
    activity: [
      '在落叶、石块与朽木形成的缝隙间隐蔽和移动',
      '两根触角接触环境后，个体可迅速转向并用多对步足夹持猎物',
      '颚肢由第一躯干附肢特化而来，用于抓持并向猎物注入毒液',
      '特立尼达圈养观察记录个体先后处理两只盘腹蟑螂，并用不同步足组合抓持',
      '委内瑞拉瓜诺洞的偶遇包括日间与夜间记录，不能把本种写成绝对夜行',
      '洞穴个体能以后部步足固定身体，同时从洞顶抓持蝙蝠猎物',
    ],
    tags: [
      '唇足纲首次收录',
      '蜈蚣目',
      '蜈蚣科',
      '南美洲北部',
      '南加勒比海岛屿',
      '陆生捕食者',
      '17 个触角节',
      '21 对步足',
      '颚肢',
      '毒液',
      '石灰岩洞穴',
      '蝙蝠捕食记录',
      'IUCN 未评估',
    ],
    summary:
      '南美巨人蜈蚣用 21 对步足在岩隙与落叶间移动，第一躯干附肢特化成带毒颚肢；委内瑞拉一处洞穴留下三次捕食三种蝙蝠的记录，但这些偶遇不能代表全种食谱。',
    description:
      '南美巨人蜈蚣是蜈蚣科蜈蚣属的大型陆生捕食者。ChiloBase 接受 Scolopendra gigantea Linnaeus, 1758，Myriatrix 汇编的分类资料记录 17 个触角节与 21 对步足。Shelley 与 Kiser 指定的模式地点在委内瑞拉瓦伦西亚；结合 Shelley 2006 年目录和后来的巴拿马记录，现行范围为巴拿马、南美洲北部加勒比沿岸和南加勒比海若干岛屿。秘鲁旧记录现归 S. galapagoensis，旧称“秘鲁巨人蜈蚣”容易与现行分布混淆。文献报道体长超过 300 毫米，但没有提供全种硬上限。颚肢负责抓持和注毒，多对步足能协同压住猎物。现有物种级食物资料包括圈养盘腹蟑螂、阿鲁巴一例贝氏猫眼蛇，以及委内瑞拉同一洞穴 3 次捕食 3 种蝙蝠的记录；这些资料不足以给食谱设定比例。IUCN Red List 没有返回本种评估，全球趋势未知。',
    storySections: [
      {
        key: 'name-and-range-correction',
        label: '名字与地图',
        title: '秘鲁旧名，指向了另一种蜈蚣',
        body: 'Pucará 的 S. gigantea weyrauchi 现归 S. galapagoensis。真正的 S. gigantea 沿巴拿马、南美北岸与南加勒比岛屿展开；中文名“南美巨人蜈蚣”与修订后的主要范围相符。',
      },
      {
        key: 'twenty-one-pairs',
        label: '身体机制',
        title: '二十一对步足之外，还有一对毒颚',
        body: '分类资料记录它有 21 对步足，每根触角 17 节。头下颚肢由第一躯干附肢特化而来，负责夹持并注入毒液，不属于 21 对步足；背板缝线和末足棘列比腿色更能支撑鉴定。',
      },
      {
        key: 'forest-to-cave',
        label: '生境',
        title: '从湿雨林到刺灌丛洞穴',
        body: '巴拿马凭证出自海拔 850 米的原生雨林，委内瑞拉材料见于林缘碎屑与石灰岩洞穴。它利用地表，也会攀上洞穴墙壁和顶板；现有记录不支持把它写成雨林专性或洞穴专性动物。',
      },
      {
        key: 'cockroach-handling',
        label: '取食动作',
        title: '先接触，再用许多条腿稳住猎物',
        body: '一只圈养个体先以触角接触蟑螂，再用中部多对步足抓持并反复以颚肢刺入。约 50 分钟后，它返回先前制伏的第一只蟑螂。这个细节来自一只动物的一次试验，不能证明全种拥有固定的记忆策略。',
      },
      {
        key: 'three-bat-observations',
        label: '洞顶捕食',
        title: '三只蝙蝠，三个偶遇现场',
        body: '同一座委内瑞拉洞穴的三次独立观察涉及三种蝙蝠，一次发生在夜间，两次发生在白天。研究者没有看到最初捕捉，因此主动搜索、静候落脚和空中抓取仍是假说；这些偶遇也不能代表全种食谱。',
      },
      {
        key: 'venom-evidence',
        label: '毒液与证据',
        title: '毒液研究与伤害证据仍有限',
        body: '物种级实验在毒液中检出丝氨酸蛋白酶、金属蛋白酶和酮糖，病例也记录过局部剧痛与水肿；现有研究没有给出完整毒液组、人类致死剂量或通用处方。公众应避免徒手接触；发生毒蜇后应寻求专业医疗评估。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年名称与委内瑞拉新模标本',
        body: '林奈于 1758 年命名南美巨人蜈蚣，现用学名为 Scolopendra gigantea。后来的 Shelley 与 Kiser 用委内瑞拉瓦伦西亚标本指定新模，重新固定名称对应的物种，并把秘鲁旧记录归入 S. galapagoensis。三个蝙蝠取食事件则来自同一座委内瑞拉洞穴，研究者未看到最初捕捉过程。',
      },
    ],
    keyFacts: [
      'ChiloBase 2.0 接受名为 Scolopendra gigantea Linnaeus, 1758。',
      '它属于节肢动物门、唇足纲、蜈蚣目、蜈蚣科和蜈蚣属。',
      'Shelley 与 Kiser 以委内瑞拉卡拉沃沃州瓦伦西亚标本指定新模式。',
      '“南美巨人蜈蚣”比“秘鲁巨人蜈蚣”更符合修订后的地理范围。',
      '现行汇编分布包括巴拿马、哥伦比亚、委内瑞拉、圭亚那、苏里南，以及特立尼达、玛格丽塔岛、库拉索和阿鲁巴。',
      'Shelley 与 Kiser 把秘鲁旧记录归入 S. galapagoensis，本种国家列表不含秘鲁。',
      '美属维尔京群岛、海地、墨西哥和洪都拉斯的零星标本可能源于人为带入或标签错误。',
      '巴西 Goiás、Alagoas 的旧记录仍待确认，智利不纳入现行范围。',
      'Myriatrix 分类资料把 17 个触角节列为诊断特征。',
      '分类文献记录本种有 21 对步足，末端一对延长并具有与其他步足不同的功能。',
      '扁平躯干让个体贴近石面、落叶和洞顶移动。',
      '第一躯干附肢特化成一对颚肢；颚肢用于固定猎物和输入毒液，不属于 21 对步足。',
      '步足除行走外还能协同夹持猎物；单张生成图不能核验精确对数。',
      '修订表最大实测标本为 274.6 毫米；文献另报道已知最大长度超过 300 毫米，但没有给出精确最大值或全种体长范围。',
      '本种缺少物种级窝卵数、孵化时长、繁殖季、成熟年龄、护幼时长和寿命资料。',
      '特立尼达资料记录个体来自热带干燥林落叶层。',
      '委内瑞拉洞穴记录含日间和夜间观察，不能把本种定义为绝对夜行。',
      'Rutherford 的圈养观察使用 Eublaberus distanti，并记录一只蜈蚣先后处理两只盘腹蟑螂。',
      '该圈养个体约 50 分钟后返回先前制伏的第一只蟑螂；单次试验不能证明全种拥有固定的记忆策略。',
      '圈养盘腹蟑螂记录能证明摄食能力，不能给野外食谱设定比例。',
      'Molinari 等人在委内瑞拉同一洞穴作出 3 次独立偶遇观察，涉及 3 种蝙蝠。',
      '三种蝙蝠分别是 Mormoops megalophylla、Pteronotus davyi 与 Leptonycteris curasoae。',
      '研究者没有看到蝙蝠最初捕捉；主动搜索、静候落脚和空中抓取仍是假说。',
      '三次洞穴偶遇不能泛化为整个物种普遍捕食蝙蝠，也不能把蝙蝠列为主要猎物。',
      'van Buurt 与 Dilrosun 在阿鲁巴记录一只 S. gigantea 攻击并取食 Leptodeira bakeri。',
      '洞穴论文直接记录本种捕食约 45 毫米的 Blaberus discoidalis，但没有给出频率或食谱比例。',
      '洞穴论文直接记录本种捕食盘腹蟑螂，图中的相似节肢动物仅为情景重建。',
      'IUCN Red List 当前没有返回本种评估；NE 不表示无危、稳定或数量充足。',
      '物种级毒液研究检出丝氨酸蛋白酶、金属蛋白酶与酮糖，但没有交付完整毒液组或人类致死剂量。',
      '一例新生儿毒蜇病例记录局部剧痛与水肿，单例不能代表所有年龄或咬伤结局。',
      '公众应避免徒手接触；发生毒蜇后应寻求专业医疗评估。',
    ],
    threats: [
      'IUCN 尚未评估，全球数量、种群趋势和威胁排序没有物种级结论',
      '热带干燥林、湿润林地和石灰岩微生境受土地利用变化影响，但现有资料不能量化本种的全球损失率',
      '洞穴照明、踩踏和捕捉可能改变局地个体活动；单一瓜诺洞记录不能代表全范围洞穴依赖',
      '宠物贸易中的旧俗名与近缘种标签会混淆 S. gigantea 和 S. galapagoensis 的来源与分布',
      '因体型与毒液风险而进行的无差别捕杀可能移除局地个体，现有资料没有量化影响规模',
      '缺少标准化调查会让未检出、真实稀少和鉴定错误混在一起，阻碍趋势判断',
    ],
    conservationActions: [
      '按 Shelley 与 Kiser 修订后的物种边界开展 IUCN 全球评估，不把秘鲁 S. galapagoensis 记录并入',
      '为新分布记录保存地点、日期、背腹面影像、诊断特征和可复核凭证，并用形态诊断与 DNA 互证',
      '在落叶层、石下、朽木和岩隙采用固定面积与时段重复调查，并记录未检出样点',
      '保护热带干燥林、湿润林地和石灰岩洞穴的连续微生境，避免公开敏感洞穴精确位置',
      '在蝙蝠洞穴采用低干扰访洞、季节性缓冲和非接触监测，避免把捕食偶遇当作控制蜈蚣的理由',
      '复核 Valle del Cauca、巴西及其他离群或待确认记录，公开馆藏凭证和鉴定字符',
      '宠物贸易记录采用有效学名、来源地和合法来源凭证，分开标注 S. gigantea 与 S. galapagoensis',
      '记录捕食事件时同时鉴定捕食者和猎物，保存完整情境，避免从生成图或俗名补写食谱',
      '补充野外体尺、繁殖、寿命、数量与趋势资料，让保护判断脱离零散个案',
      '用避免徒手接触、发生毒蜇后寻求专业医疗评估的公众信息降低冲突，不提供药物或急救处方',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'reported-upper-length',
        label: '文献报道长度',
        value: '>300',
        unit: '毫米',
        note: 'Molinari 等人引用 Shelley 与 Kiser 的表述；不等于 300 毫米硬上限。',
      },
      {
        key: 'antennal-articles',
        label: '每根触角',
        value: '17',
        unit: '节',
        note: 'Myriatrix 汇编的物种诊断；生成图不能替代标本计数。',
      },
      {
        key: 'walking-leg-pairs',
        label: '步足',
        value: '21',
        unit: '对',
        note: '分类资料记录；不把颚肢当作第一对步足。',
      },
      {
        key: 'direct-bat-prey',
        label: '直接记录蝙蝠猎物',
        value: '3',
        unit: '种',
        note: '同一洞穴三次独立偶遇观察，不是食谱比例。',
      },
    ],
    media: {
      image:
        './images/species/south-american-giant-centipede/01-caribbean-limestone-adult-cover.webp',
      alt: '一只完整的深栗色南美巨人蜈蚣在潮湿落叶旁的浅色石灰岩上移动，两根触角和延长的末端步足均在画面内',
      focalPoint: { x: 0.66, y: 0.57 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/south-american-giant-centipede/02-dorsal-segment-and-leg-profile.webp',
          alt: '深灰石面上，一只完整蜈蚣以背面朝上伸直身体，可见扁平分节躯干、成对步足、两根触角和延长末端步足',
          title: '分节躯干与成对步足的背面概览',
          caption:
            'AI 生成原创形态重建；画面不能核验精确的 17 个触角节或 21 对步足，也不能凭颜色、体形和生成的附肢细节完成物种鉴定。',
          focalPoint: { x: 0.51, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/south-american-giant-centipede/03-head-forcipules-macro.webp',
          alt: '一只南美巨人蜈蚣头部与前段躯干的近景，两根触角、侧面单眼簇和头下闭合的弯曲颚肢可见',
          title: '触角、单眼簇与颚肢的位置',
          caption:
            'AI 生成原创形态重建；近景只说明代表性结构的位置，不能诊断物种、测量器官、证明感觉能力或显示毒液注入。',
          focalPoint: { x: 0.49, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/south-american-giant-centipede/04-nocturnal-discoid-cockroach-encounter.webp',
          alt: '夜间湿润落叶层中，一只南美巨人蜈蚣与一只分开的褐色盘腹蟑螂状节肢动物隔着空地相对，双方没有接触',
          title: '一次没有接触的蟑螂状节肢动物相遇',
          caption:
            'AI 生成原创情景；盘腹蟑螂是物种级直接观察猎物的代表，但画面没有重演某次记录，不能靠像素核验身份，也不能证明捕食、偏好、狩猎成功或自然食物比例。',
          focalPoint: { x: 0.5, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/south-american-giant-centipede/05-limestone-thorn-scrub-habitat.webp',
          alt: '石灰岩岩棚阴影下，一只小比例完整蜈蚣靠近潮湿岩隙，棚外可见稀疏灌木与浅色碎石',
          title: '石灰岩遮蔽与灌丛相邻的微环境',
          caption:
            'AI 生成原创生境重建；画面没有指向真实岛屿、国家或调查点，不能证明占域、密度、微气候或完整分布范围。',
          focalPoint: { x: 0.72, y: 0.73 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/south-american-giant-centipede/06-cave-ceiling-bat-context.webp',
          alt: '浅色洞顶上，一只完整蜈蚣与一只收拢双翼倒挂的蝙蝠分处左右，两者之间隔着宽阔裸露岩面',
          title: '洞穴记录的背景情景',
          caption:
            'AI 生成原创情景；蜈蚣和蝙蝠没有接触，画面不能证明捕食、跟踪、抓获、注毒或取食，只为已发表洞穴记录提供空间背景。',
          focalPoint: { x: 0.55, y: 0.4 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...SOUTH_AMERICAN_GIANT_CENTIPEDE_SOURCES,
      {
        title: 'GBIF: Scolopendra gigantea Linnaeus, 1758 nomenclatural record',
        url: 'https://www.gbif.org/species/5179388',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_CONTENT_DATE,
    updatedAt: SOUTH_AMERICAN_GIANT_CENTIPEDE_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
