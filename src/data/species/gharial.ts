import type { SpeciesSource, Species } from '../../types/species.ts';

import { CONTENT_DATE, animalTaxonomy, conservation, taxon } from './shared.js';

const GHARIAL_SOURCE_DATE = '2026-08-18' as const;

const GHARIAL_CONTENT_DATE = '2026-08-18' as const;

const GHARIAL_SOURCES = [
  {
    title: 'IUCN Red List — Gavialis gangeticus (2017 assessment; 2019 errata)',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T8966A149227430.en',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'The Reptile Database — Gavialis gangeticus',
    url: 'https://reptile-database.reptarium.cz/species?genus=Gavialis&species=gangeticus',
    kind: 'taxonomy',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III',
    url: 'https://cites.org/eng/app/appendices.php',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Crocodile Specialist Group — Gharial species account',
    url: 'https://www.iucncsg.org/365_docs/attachments/protarea/23_G-6764939a.pdf',
    kind: 'general',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Hone et al. 2020 — Ontogeny of the male ghara and sexual dimorphism',
    url: 'https://doi.org/10.7717/peerj.9134',
    kind: 'ecology',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Ajji & Lang 2025 — Male-specific underwater POP signals',
    url: 'https://doi.org/10.1111/joa.14171',
    kind: 'ecology',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Thorbjarnarson 1990 — Notes on feeding behavior of gharials',
    url: 'https://doi.org/10.2307/1564301',
    kind: 'ecology',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Khadka et al. 2020 — Seventeen years of nesting ecology in Chitwan',
    url: 'https://doi.org/10.1655/Herpetologica-D-19-00038.1',
    kind: 'ecology',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Khadka et al. 2024 — Spatially uneven population change in Chitwan',
    url: 'https://doi.org/10.17161/randa.v31i1.21018',
    kind: 'distribution',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Vashistha et al. 2024 — Status in the upper Ghaghara River',
    url: 'https://doi.org/10.1017/S0030605323001485',
    kind: 'distribution',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Sharma et al. 2025 — Population trend in National Chambal Sanctuary',
    url: 'https://doi.org/10.1002/ece3.72643',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Kashmi et al. 2026 — Occurrence in the Lower Ganges of Bangladesh',
    url: 'https://doi.org/10.17017/j.fish.1261',
    kind: 'distribution',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Khalid et al. 2023 — Rediscovery in Punjab, Pakistan',
    url: 'https://www.iucncsg.org/365_docs/attachments/protarea/e5a83965a9969ec6121b78fed635e3e7.pdf',
    kind: 'distribution',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Khan et al. 2025 — Follow-up survey of gharial rediscovery in Pakistan',
    url: 'https://www.wildlife-journal.org/wp-content/uploads/Rediscovery-of-Gavial-in-Pakistan-1.pdf',
    kind: 'distribution',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Vashistha et al. 2021 — Reduced flow and vegetation limit reservoir nesting',
    url: 'https://doi.org/10.1038/s41598-021-84143-7',
    kind: 'ecology',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Vashistha et al. 2021 — Sand addition promotes nesting',
    url: 'https://doi.org/10.1002/2688-8319.12068',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Nepal DNPWC 2018 — Gharial Conservation Action Plan 2018–2022',
    url: 'https://dnpwc.gov.np/content/97/gharial-conservation-action-plan--2018-2022-/',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Acharya et al. 2017 — Conservation and population recovery in Nepal',
    url: 'https://doi.org/10.1655/Herpetologica-D-16-00048.1',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Bustard 1980 — Maternal care in the gharial',
    url: 'https://www.thebhs.org/publications/british-journal-of-herpetology/4163-volume-6-number-2-june-1980/file',
    kind: 'ecology',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC CSG 2016 — Direct observation of male care and hatchling riding',
    url: 'https://www.iucncsg.org/365_docs/attachments/protarea/daf68c23d4e8447d7b2083a3b59931d5.pdf',
    kind: 'ecology',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Zoological Survey of India 2025 — Checklist of Indian reptiles',
    url: 'https://zsi.gov.in/uploads/documents/checklist/english/119_Reptilia_V2_2025.pdf',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'India MoEFCC 2025–26 Annual Report — Species Recovery Programme',
    url: 'https://moef.gov.in/uploads/pdf-uploads/Nitin_Rev_4.pdf',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-gavialis-gangeticus',
    slug: 'gharial',
    names: { zh: '恒河鳄', en: 'Gharial', aliases: ['食鱼鳄', '长吻鳄'] },
    scientificName: 'Gavialis gangeticus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Reptilia', '爬行纲'),
      taxon('Crocodylia', '鳄目'),
      taxon('Gavialidae', '长吻鳄科'),
      taxon('Gavialis', '恒河鳄属'),
    ),
    conservation: conservation('CR', 'increasing', 2017, 'A2bce'),
    distribution: {
      realms: ['freshwater', 'terrestrial'],
      continents: ['亚洲'],
      regions: [
        '恒河干流与北印度支流',
        '昌巴尔河',
        '吉尔瓦—格哈格拉河',
        '纳拉亚尼—拉普蒂河',
        '帕德玛—布拉马普特拉河近期记录段',
        '苏特莱杰河近期记录段',
      ],
      countries: ['印度', '尼泊尔', '孟加拉国', '巴基斯坦'],
      range:
        '主要自持繁殖种群集中在印度和尼泊尔少数河段；孟加拉国与巴基斯坦近年有重复记录，但这些个体来自本地繁殖还是跨境扩散，仍需系统监测。',
      center: { lat: 26.6, lng: 80.6 },
    },
    habitats: [
      {
        name: '中大型永久性河流',
        realm: 'freshwater',
        description: '依赖连通且保有季节流量变化的河道，并在深水、缓流、浅岸与开阔水面之间移动。',
        isPrimary: true,
      },
      {
        name: '深水区与岸边浅水',
        realm: 'freshwater',
        description: '深水提供水栖活动与避难空间，临近沙岸的浅水供幼体停留、托儿群聚集和成体上下岸。',
      },
      {
        name: '季节性裸露沙洲与沙岸',
        realm: 'terrestrial',
        description: '干季裸露沙地用于晒背、繁殖期聚集和挖穴筑巢；采砂、植被侵入与异常水位会迅速降低适用性。',
      },
    ],
    measurements: {
      length: {
        min: 3.5,
        max: 4.5,
        unit: 'm',
        note: '较常见成体参考范围；雄性通常更大，6 米以上的记录出自历史上的大型雄性',
      },
    },
    diet: {
      types: ['carnivore', 'piscivore'],
      foods: ['淡水鱼类（主食）', '昆虫等小型无脊椎动物（幼体）', '蛙类及其他小型动物（有记录）'],
      description:
        '极长而狭窄的吻部降低侧向摆动的水阻，多数大小相近的尖牙适于迅速夹住鱼；幼体也会取食昆虫、蛙类和其他小型动物。',
    },
    activity: ['高度水栖', '日间晒背', '季节性长距离移动', '干季筑巢', '幼体托儿群'],
    tags: ['南亚大河', 'IUCN 极危', '食鱼特化', '成熟雄性 ghara', 'CITES 附录 I', '淡水旗舰物种'],
    summary: '恒河鳄生活在南亚，用极长的窄吻捕鱼，依赖连通的大河和裸露沙洲。成熟雄性的吻端会长出称为 ghara 的突起，目前该物种处于极危状态。',
    description:
      '恒河鳄把大部分活动交给河流：长而狭窄的吻部适合在水中迅速夹鱼，成体会上岸晒背，雌性还会上岸筑巢。大型成熟雄性吻端会形成壶状 ghara，并能发出短促的水下 POP 信号；该结构与视觉和声学展示相关，但具体发声机制仍在研究。IUCN 评估记录的总体趋势为上升，主要种群却仍高度破碎，坝闸、渔网、采砂和河岸扰动持续威胁繁殖与连通。',
    storySections: [
      {
        key: 'river-specialist',
        label: '形态与食性',
        title: '把吻部变成夹鱼的长镊子',
        body: '恒河鳄每侧上颌有 27 至 29 枚牙、下颌有 25 至 26 枚牙，多数大小接近。细长吻部减少侧摆水阻，闭颌时交错尖牙能迅速夹住鱼；幼体也会取食昆虫、蛙类和其他小动物。',
      },
      {
        key: 'male-ghara',
        label: '雄性信号',
        title: '成熟雄性的吻端突起',
        body: '较大成熟雄性会在外鼻孔周围长出由软组织与软骨构成的 ghara。野外研究记录到它们发出短促的水下 POP 声，也记录到呼吸、下潜和水面气泡。警戒与巡游时都曾发声，因此这种结构在发声与求偶中的具体作用还需研究。',
      },
      {
        key: 'connected-river',
        label: '生境',
        title: '深水、浅岸与沙洲相连的河流',
        body: '深水、浅岸、裸露沙洲与季节洪水共同组成恒河鳄的生境。坝闸阻断移动，也改变泥沙和植被，抽水、采砂与河岸农业进一步压缩筑巢空间。局部补沙能改善个别巢岸，长期保护仍需维持自然流量与河道连通。',
      },
      {
        key: 'sandbank-nursery',
        label: '繁殖',
        title: '一片沙洲，同时是产房与育幼场',
        body: '雌性在干季临水沙岸挖穴，通常产约 30 至 50 枚卵。她会守巢并在孵化时打开巢穴，却不会把幼体含在嘴里搬运，这一点和其他许多鳄类不同。多个巢的幼体可合并成托儿群，由雌性和通常一只大型雄性守护。',
      },
      {
        key: 'counting-boundaries',
        label: '种群',
        title: '成熟个体、地方计数和巢数',
        body: 'IUCN 估计全球有 300 至 900 只成熟个体。2019 年昌巴尔的 1,857 是地方调查中所有体型的个体计数，486 是同年的巢数。这些数字的范围、体型标准和方法不同，不能相互替代。',
      },
      {
        key: 'recovery-with-caveats',
        label: '保护',
        title: '回升的曲线，集中在少数河段',
        body: 'IUCN 记录总体趋势上升，但恢复集中在昌巴尔等少数地点。人工育幼放归曾帮助部分种群，历史标记和追踪不足使总体成效难以量化。放归需要同时减少渔网死亡、维护沙洲并恢复河道连通。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '陶壶形突起与恒河名字',
        body: '格梅林在 1789 年以 Lacerta gangetica 命名恒河鳄，后来的属名调整形成 Gavialis gangeticus。种加词指向命名产地恒河一带。英文名 gharial 来自 Hindustani 语的 ghara，即陶壶，指成熟雄性鼻端的壶状突起。',
      },
    ],
    keyFacts: [
      'IUCN 当前档案为极危 A2bce、趋势上升；两者分别描述历史衰退等级与评估时的近期方向。',
      '极长窄吻两侧排列大量大小较接近的细牙，水下快速夹鱼是它的强项；对付大型陆生猎物则力有不逮。',
      'ghara 只见于大型成熟雄性：围绕外鼻孔长成的软组织与软骨结构，名字正来自印度语里那种圆肚陶壶。',
      '雌性守巢、开巢；幼体自行下水后聚成由多只成体守护的托儿群。',
      '全球成熟个体估计、地方全部体型计数和巢数各有口径，各说各的事。',
      '主要自持繁殖种群仍集中在印度和尼泊尔；孟加拉国、巴基斯坦的近期记录尚未证实稳定本地繁殖。',
      '高度水栖的恒河鳄照样离不开陆地：沙洲既是晒背场，也是穴巢与幼体的第一段岸线。',
      '人工育幼放归要与河流连通、适宜流量、渔业协作和长期标记监测结合，才可能形成可衡量的恢复。',
    ],
    threats: [
      '坝闸、水量调控与抽水造成河流破碎和季节水文改变',
      '刺网等渔具导致溺亡、吻部损伤并加剧鱼类资源竞争',
      '采砂、采石、农业和河岸扰动破坏巢址与晒背地',
      '小型隔离种群缺少繁殖雄性、招募不足并发生单向下游流失',
      '局地采卵、历史皮张捕猎及持续的人为接近',
      '污染以及病因尚未完全解释的大规模死亡事件',
    ],
    conservationActions: [
      '保护整段河流连通性并维持季节流量和泥沙过程',
      '保护裸露沙洲、限制采砂采石，并对退化巢址开展审慎的局部补沙',
      '与渔民协作减少刺网误捕并建立缠网个体快速响应机制',
      '统一调查、体型分级、个体标记与长期追踪方法',
      '只在生境适宜且能持续监测的河段开展育幼放归',
      '加强印度、尼泊尔、孟加拉国和巴基斯坦的跨境河流监测',
    ],
    metrics: {
      adultLengthCm: [350, 450],
      estimatedMatureIndividuals: [300, 900],
    },
    featuredStats: [
      {
        key: 'mature-individuals',
        label: 'IUCN 成熟个体估计',
        value: '300—900',
        unit: '只',
        note: '中位数约 650；2017 评估，资料主要来自 2010 至 2017 年',
      },
      {
        key: 'generation-length',
        label: '世代长度',
        value: '25',
        unit: '年',
        note: 'IUCN 评估参数，指平均繁殖世代的时长',
      },
      {
        key: 'clutch-size',
        label: '每窝卵数',
        value: '约 30—50',
        unit: '枚',
        note: 'IUCN 常用概括约 40；不同地点和年份会变化',
      },
      {
        key: 'aoo-decline',
        label: '占据面积历史降幅',
        value: '约 94',
        unit: '%',
        note: 'IUCN 2017 评估中的历史、当前估算',
      },
    ],
    media: {
      image: './images/species/gharial/01-sandbank-river-portrait.webp',
      alt: '宽阔南亚河流的裸露沙洲上，一只吻端带 ghara 的成年雄性恒河鳄完整地低伏晒背',
      focalPoint: { x: 0.66, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/gharial/02-male-ghara-underwater-pop.webp',
          alt: '自然河流的绿色水下，一只吻端带 ghara 的成年雄性恒河鳄闭合长吻，鼻端周围留有一小团气泡',
          title: '水下的一声 POP',
          caption:
            '野外研究确认成熟雄性会发出短促 POP；清澈水下的初步观察曾记录快速闭颌与随后腾起的泡云，声源机制尚待验证。',
          focalPoint: { x: 0.76, y: 0.49 },
        },
        {
          image: './images/species/gharial/03-free-flowing-river-habitat.webp',
          alt: '深水主槽、临岸浅水与大片裸露沙洲相连的宽阔河段中，一只恒河鳄在沙洲上显得很小',
          title: '一条河，三种必需空间',
          caption:
            '恒河鳄需要深水、浅岸和裸露沙洲相连的河段，保护范围需同时覆盖水下活动区、晒背岸与筑巢沙地。',
          focalPoint: { x: 0.7, y: 0.66 },
        },
        {
          image: './images/species/gharial/04-underwater-lateral-fish-strike.webp',
          alt: '河底上方，一只没有 ghara 的亚成体恒河鳄用极长窄吻夹住一条完整的小鱼',
          title: '侧向一击夹住鱼',
          caption:
            '长吻与密集细牙帮助恒河鳄在水下摆头，快速夹住小鱼。',
          focalPoint: { x: 0.72, y: 0.58 },
        },
        {
          image: './images/species/gharial/05-female-hatchling-nursery.webp',
          alt: '临水沙岸的穴巢已经打开，一只没有 ghara 的成年雌性恒河鳄在浅水中守望自行下水的幼体群',
          title: '守护，不用长吻搬运',
          caption:
            '雌性会守巢、开巢并在浅水旁照看托儿群，但不会像许多其他鳄类那样把幼体含在嘴里搬到水边。',
          focalPoint: { x: 0.56, y: 0.58 },
        },
        {
          image: './images/species/gharial/06-sandbank-restoration-monitoring.webp',
          alt: '三名保护人员在沙岸上清理木本植被、平整沙面并记录岸高，一只恒河鳄在画面右侧的河水中露出头部和背部',
          title: '先让沙洲重新适合筑巢',
          caption:
            '清除侵入沙洲的木本植被、局部补沙和测量巢岸，可改善个别地点；自然流量与河道连通同样需要保护。',
          focalPoint: { x: 0.5, y: 0.57 },
        },
      ],
    },
    sources: [
      ...GHARIAL_SOURCES,
      {
        title: '恒河鳄：科学描述与命名资料',
        url: 'https://reptile-database.reptarium.cz/Gavialis/gangeticus',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: CONTENT_DATE,
    updatedAt: GHARIAL_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
