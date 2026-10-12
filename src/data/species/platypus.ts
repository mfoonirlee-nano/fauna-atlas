import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const PLATYPUS_SOURCE_DATE = '2026-08-20' as const;

const PLATYPUS_CONTENT_DATE = '2026-08-20' as const;

const PLATYPUS_SOURCES = [
  {
    title: 'IUCN Red List — Ornithorhynchus anatinus (assessed 2014; published 2016-1)',
    url: 'https://doi.org/10.2305/IUCN.UK.2016-1.RLTS.T40488A21964009.en',
    kind: 'conservation',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database v2.5 — Ornithorhynchus anatinus',
    url: 'https://www.mammaldiversity.org/taxon/1000001/',
    kind: 'taxonomy',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Australian Faunal Directory — Ornithorhynchus anatinus taxon concept',
    url: 'https://biodiversity.org.au/afd/taxa/ac61fd14-4950-4566-b384-304bd99ca75f',
    kind: 'taxonomy',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'DCCEEW — Platypus nominations considered in 2021, 2022 and 2026 but not prioritised',
    url: 'https://www.dcceew.gov.au/environment/biodiversity/threatened/nominations/species-not-prioritised-assessment',
    kind: 'conservation',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Victoria DEECA — FFG Threatened List July 2026',
    url: 'https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf',
    kind: 'conservation',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'NRE Tasmania — Platypus in Tasmania',
    url: 'https://nre.tas.gov.au/wildlife-management/fauna-of-tasmania/mammals/echidnas-and-platypus/platypus/platypus-in-tasmania',
    kind: 'general',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'NSW Government — Platypus native animal profile',
    url: 'https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/platypus',
    kind: 'general',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'South Australia — Kangaroo Island platypus background',
    url: 'https://www.environment.sa.gov.au/goodliving/posts/2020/04/platypus-recovery-on-ki',
    kind: 'distribution',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Australian Museum — Platypus identification and measurements',
    url: 'https://australian.museum/learn/animals/mammals/platypus/',
    kind: 'general',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Bino et al. 2019 — The platypus: evolutionary history, biology, and an uncertain future',
    url: 'https://doi.org/10.1093/jmammal/gyz058',
    kind: 'general',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Scheich et al. 1986 — Electroreception and electrolocation in platypus',
    url: 'https://doi.org/10.1038/319401a0',
    kind: 'ecology',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Gregory et al. 1987 — Electroreceptors in the bill skin of the platypus',
    url: 'https://doi.org/10.1038/326386a0',
    kind: 'ecology',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Bino, Grant & Kingsford 2015 — Four decades of mark-recapture surveys',
    url: 'https://doi.org/10.1038/srep16073',
    kind: 'ecology',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Furlan et al. 2012 — Geographic variation in platypus body size',
    url: 'https://doi.org/10.1071/ZO11056',
    kind: 'ecology',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Hawke, Bino & Kingsford 2019 — Historical population and distribution changes',
    url: 'https://doi.org/10.1016/j.gecco.2019.e00720',
    kind: 'distribution',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Bino et al. 2020 — A stitch in time: synergistic impacts to platypus metapopulation extinction risk',
    url: 'https://doi.org/10.1016/j.biocon.2019.108399',
    kind: 'conservation',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Mijangos et al. 2022 — Fragmentation by major dams',
    url: 'https://doi.org/10.1038/s42003-022-04038-9',
    kind: 'conservation',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Ahrens et al. 2025 — Genetic diversity and structure in a Melbourne platypus meta-population',
    url: 'https://doi.org/10.1038/s41437-025-00774-w',
    kind: 'conservation',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Serena et al. 2024 — New wild and captive longevity records',
    url: 'https://doi.org/10.1071/AM23048',
    kind: 'ecology',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Victoria DEECA 2021 — Platypus Risk Assessment Report',
    url: 'https://www.environment.vic.gov.au/__data/assets/pdf_file/0023/595040/Platypus-Risk-Assessment-Report.pdf',
    kind: 'conservation',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-ornithorhynchus-anatinus',
    slug: 'platypus',
    names: {
      zh: '鸭嘴兽',
      en: 'Platypus',
      aliases: ['Duck-billed Platypus'],
    },
    scientificName: 'Ornithorhynchus anatinus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Monotremata', '单孔目'),
      taxon('Ornithorhynchidae', '鸭嘴兽科'),
      taxon('Ornithorhynchus', '鸭嘴兽属'),
    ),
    conservation: conservation('NT', 'decreasing', 2014),
    distribution: {
      realms: ['freshwater', 'terrestrial'],
      continents: ['大洋洲'],
      regions: [
        '澳大利亚东部',
        '昆士兰东北部',
        '新南威尔士与澳大利亚首都领地',
        '维多利亚',
        '塔斯马尼亚与金岛',
        '袋鼠岛引入种群',
      ],
      countries: ['澳大利亚'],
      endemicTo: ['澳大利亚'],
      range:
        '原生于澳大利亚东部相连淡水系统，从昆士兰东北部向南经过新南威尔士、澳大利亚首都领地和维多利亚，延伸到塔斯马尼亚与金岛；南澳大利亚大陆历史种群已消失，袋鼠岛现存种群由 1920 年代引入。实际分布沿永久河流、溪流、湖泊与岸带呈线性和破碎格局。',
      center: { lat: -31, lng: 147 },
    },
    habitats: [
      {
        name: '河流、溪流的潭—濑序列',
        realm: 'freshwater',
        description: '在缓流潭和较快浅濑的砾石、卵石、沉木与根系间寻找底栖无脊椎动物；持续水量、水质和猎物生产力共同决定适宜度。',
        isPrimary: true,
      },
      {
        name: '湖泊、池塘与湿地淡水体',
        realm: 'freshwater',
        description: '从热带水道到塔斯马尼亚高地湖泊，也可利用农场坝塘；必须同时有稳定淡水、食物和可到达的洞岸。',
      },
      {
        name: '根系加固的自然土岸',
        realm: 'terrestrial',
        description: '在水位以上的土岸掘休息洞和繁殖洞，河岸根系、遮阴植被、稳定岸体及巢材支持日间休息、产卵和数月育幼。',
      },
      {
        name: '相连水系与河岸走廊',
        realm: 'terrestrial',
        description: '幼兽扩散、干旱换潭和局部灭绝后的重殖依赖连续河段与安全陆行路径；坝、堰、干涸段和硬化岸线会切断连接。',
      },
    ],
    measurements: {
      length: {
        min: 37,
        max: 63,
        unit: 'cm',
        note: '成体喙尖至尾尖总长；雄性典型约 40—63 厘米，雌性约 37—55 厘米',
      },
      weight: {
        min: 0.7,
        max: 2.4,
        unit: 'kg',
        note: '官方资料常用的两性成体展示范围；综述所见地理/个体极值可至约 3.0 千克',
      },
    },
    diet: {
      types: ['insectivore', 'carnivore'],
      foods: [
        '石蛾、蜉蝣、蜻蜓与摇蚊等水生昆虫幼体或若虫',
        '淡水螯虾、虾和其他甲壳类',
        '水生蠕虫与其他底栖无脊椎动物',
      ],
      description: '几乎完全在水中捕食，以可获得的底栖大型无脊椎动物为主；食谱随水域与季节变化，偶见小型脊椎动物记录，但并非以鱼为核心食物。',
    },
    activity: [
      '主要在夜间和晨昏觅食，冬季、阴天或哺乳期也会白天活动',
      '通常独居，个体活动范围可重叠；母兽独自筑繁殖洞和育幼',
      '完全在水中取食，猎物存入颊囊后回到水面磨碎吞咽',
      '常每天觅食 8 至 16 小时，并反复进行短潜水',
      '以发达前足蹼推进，后足和宽扁尾帮助稳定与转向',
    ],
    tags: ['澳大利亚特有种', '单孔类', '卵生哺乳动物', '淡水半水栖', '电感受', '雄性有毒距', '全球近危'],
    summary: '鸭嘴兽生活在澳大利亚东部河网，能用柔软的喙感受电信号，在河床寻找食物。它在洞穴中产卵，靠乳汁哺育幼兽，却没有乳头。',
    description:
      '鸭嘴兽是鸭嘴兽科唯一现生种，也是少数现生单孔类之一。它在水下闭合眼、耳和鼻孔，用柔软喙上的电感受器与机械感受器寻找底栖无脊椎动物，再把猎物带回水面处理。雌兽在河岸繁殖洞内产 1 至 3 枚卵，幼兽舔食从腹部皮肤渗出的乳汁；成年雄兽后踝则有繁殖季活跃的毒距。它仍横跨东澳许多水系，却受到河流调节、干旱、岸线退化、城市径流、渔具误捕和种群隔离的叠加压力。',
    storySections: [
      {
        key: 'monotreme-identity',
        label: '单孔类身份',
        title: '产卵、哺乳的单孔类',
        body: '鸭嘴兽产革质卵，也分泌乳汁。宽喙、蹼足和有毛扁尾帮助它在淡水中生活。它与针鼹共同构成现生单孔类，鸭嘴兽科今天仅有这一个现生物种。',
      },
      {
        key: 'electric-bill',
        label: '电感受觅食',
        title: '用喙感受猎物的电场',
        body: '潜水时，鸭嘴兽关闭眼、耳和鼻孔。喙上的电感受器接收猎物肌肉产生的微弱电场，机械感受器提供触觉和水流信息。它左右扫动柔软的喙，利用这两类线索寻找猎物。鸭嘴兽自身不放电，也不靠声呐觅食。',
      },
      {
        key: 'swimming-and-fur',
        label: '潜游与保温',
        title: '被毛中的空气帮助保温',
        body: '宽大的前足蹼交替划水，后足和有毛扁尾负责稳定；细密绒毛锁住空气，护毛挡水，使约 32°C 的身体能反复进入冷水。上岸时蹼缘折回，短肢外展，让它以低矮步态走向岸洞。',
      },
      {
        key: 'eggs-and-milk',
        label: '繁殖与育幼',
        title: '在河岸洞穴中产卵和哺乳',
        body: '雌兽把湿草、叶和树皮带入复杂的河岸洞，产下 1 至 3 枚小卵，并蜷身孵化。它没有乳头，乳汁从腹部皮肤开口渗到毛上。幼兽在巢室中哺乳数月，接近成体长度时才首次出洞。',
      },
      {
        key: 'male-venom',
        label: '雄性毒距',
        title: '后踝上的季节性武器',
        body: '成年雄兽两条后踝各有一枚中空角质距，连接繁殖季增大的毒腺。它能造成极强疼痛，现有行为与季节证据却更指向雄性竞争，而不是捕猎；雌兽成年后没有这套武器。',
      },
      {
        key: 'fragmented-rivers',
        label: '河流与保护',
        title: '恢复河流的上下游连接',
        body: '水坝、陡堰、抽水、干旱、城市暴雨径流和河岸清除，会影响水底猎物、岸边洞穴与移动路线。保护行动包括恢复生态流量、自然岸线和上下游连接，再用水中环境 DNA、标放与遗传监测调查种群变化。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: 'Platypus 这个属名曾经重名',
        body: '肖在 1799 年把鸭嘴兽命名为 Platypus anatinus。然而 Platypus 早已用于一种甲虫，动物属名不能重复。1800 年提出的 Ornithorhynchus 后来成为鸭嘴兽的属名，今天的学名是 Ornithorhynchus anatinus，英文俗名仍沿用 Platypus。',
      },
    ],
    keyFacts: [
      '鸭嘴兽是鸭嘴兽科唯一现生种，也是五种现生单孔类之一。',
      '潜水时眼、耳和鼻孔关闭，喙部结合电感受与机械感受寻找水底猎物。',
      '成体没有功能性牙齿，会把猎物放进颊囊并回到水面用角质磨板处理。',
      '雌兽产 1 至 3 枚革质卵，没有育儿袋或乳头，乳汁从腹部皮肤开口渗出。',
      '成年雄兽两条后踝各有毒距，主要用于繁殖季的雄性竞争。',
      '全球 IUCN 为近危；联邦 EPBC 未列作受威胁，但维州列易危、南澳列濒危。',
    ],
    threats: [
      '筑坝、堰、抽水和河流调节改变生态流量、潭濑结构、猎物与繁殖条件',
      '气候变化加剧干旱、热浪、火灾、极端洪水和持久淡水避难地丧失',
      '河岸清除、农业放牧、踩踏与侵蚀破坏洞岸并使泥沙覆盖底栖觅食面',
      '城市不透水面、暴雨径流、污水、营养盐、重金属和细颗粒污染',
      '坝体、干涸河段与退化水道切断扩散和基因交流，形成小型孤立种群',
      '封闭式捕捞笼、鳗网、非法网具、鱼线与环状垃圾造成溺亡和缠绕伤',
      '陆行时遭狗、狐、猫捕食或车辆撞击',
      '塔斯马尼亚毛霉病造成溃疡、继发感染及保温和移动障碍',
    ],
    conservationActions: [
      '维持生态流量、持久避难潭和自然潭濑，避免在繁殖与干旱期剧烈改变水位',
      '恢复连续本土河岸植被、根系加固土岸、遮阴和粗木质结构，并限制牲畜踩踏',
      '改造坝、陡堰、涵洞与城市排水，按遗传结构和水文风险恢复有效连通',
      '禁用会淹死鸭嘴兽的封闭网具，清除非法网、鱼线与环状垃圾',
      '结合 eDNA、标准化标放、声学追踪和遗传样本开展全国长期监测',
      '为孤立种群制定干旱救援和遗传管理预案，转移前完成疾病与来源风险评估',
      '在塔斯马尼亚持续监测毛霉病并执行跨流域设备清洁消毒',
      '把未来干旱、火灾和极端洪水纳入水资源、城市与保护地管理',
    ],
    metrics: {
      adultLengthCm: [37, 63],
      adultMassKg: [0.7, 2.4],
      estimatedMatureIndividuals: [30000, 300000],
    },
    featuredStats: [
      {
        key: 'mature-population',
        label: '成熟个体粗估',
        value: '30,000—300,000',
        unit: '只',
        note: '2014 IUCN 给出的十倍宽区间，5 万是其中的点估计',
      },
      {
        key: 'eggs-per-clutch',
        label: '每窝卵数',
        value: '1—3',
        unit: '枚',
      },
      {
        key: 'foraging-dive',
        label: '野外觅食潜水',
        value: '30—140',
        unit: '秒',
        note: '常规觅食观测范围；受惊或屏息时的下潜另有极限',
      },
      {
        key: 'body-temperature',
        label: '典型体温',
        value: '约 32',
        unit: '°C',
        note: '说的是体温；它们生活的溪水往往比这更凉',
      },
    ],
    media: {
      image: './images/species/platypus/01-creek-bank-portrait.webp',
      alt: '晨雾笼罩的东澳溪岸，一只完整的深褐色成年鸭嘴兽停在湿石上，主体位于画面右侧',
      focalPoint: { x: 0.72, y: 0.62 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/platypus/02-underwater-electroreceptive-foraging.webp',
          alt: '水下砾石河床上，一只鸭嘴兽闭合可见眼与鼻孔，用柔软宽喙扫探小型淡水无脊椎动物，宽蹼足和有毛扁尾清晰可见',
          title: '闭上眼，用喙读取河床',
          caption: '鸭嘴兽的喙能接收猎物产生的微弱电场，并感受触觉和水流信息；它自身不放电，也不靠声呐。',
          focalPoint: { x: 0.53, y: 0.53 },
        },
        {
          image: './images/species/platypus/03-eastern-australian-stream-habitat.webp',
          alt: '有相连深潭与浅濑、砾石沉木和根系加固土岸的东澳森林溪流，一只鸭嘴兽在水面显得很小',
          title: '潭濑、河岸与连通水流',
          caption: '持续淡水、底栖猎物、根系加固的土岸和上下游连通，共同组成一条完整的河。',
          focalPoint: { x: 0.56, y: 0.72 },
        },
        {
          image: './images/species/platypus/04-male-hind-ankle-spur.webp',
          alt: '湿润溪岸石面上的成年雄性鸭嘴兽侧身行走，一侧后踝可见尺度克制的角质毒距',
          title: '雄兽后踝的毒距',
          caption: '成年雄兽两条后踝各有一枚毒距，毒腺在繁殖季活跃，主要与雄性竞争相关。',
          focalPoint: { x: 0.58, y: 0.58 },
        },
        {
          image: './images/species/platypus/05-female-nesting-burrow.webp',
          alt: '河岸外一只无毒距雌性鸭嘴兽用尾巴把湿草叶压在腹侧，正走向根系遮蔽的洞口',
          title: '把湿巢材带回河岸洞',
          caption: '雌兽用尾巴把湿草、叶和树皮压在腹侧带回繁殖洞。保护人员避免公开真实繁殖洞口的位置，以减少打扰。',
          focalPoint: { x: 0.42, y: 0.58 },
        },
        {
          image: './images/species/platypus/06-stream-monitoring-and-restoration.webp',
          alt: '东澳森林溪流旁，两名工作人员在本土植被修复区采集 eDNA 水样并记录，水中一只鸭嘴兽与他们保持距离',
          title: '不打扰，也能读懂一条河',
          caption: '研究者从水中提取环境 DNA，配合标准化长期监测调查鸭嘴兽，减少与个体直接接触。',
          focalPoint: { x: 0.53, y: 0.72 },
        },
      ],
    },
    sources: [
      ...PLATYPUS_SOURCES,
      {
        title: '澳大利亚博物馆：鸭嘴兽原名与属名重名记录',
        url: 'https://media.australian.museum/media/Uploads/Journals/17234/516_complete.pdf',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: PLATYPUS_CONTENT_DATE,
    updatedAt: PLATYPUS_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
