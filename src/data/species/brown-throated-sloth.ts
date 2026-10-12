import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const BROWN_THROATED_SLOTH_SOURCE_DATE = '2026-08-23' as const;

const BROWN_THROATED_SLOTH_CONTENT_DATE = '2026-08-23' as const;

const BROWN_THROATED_SLOTH_SOURCES = [
  {
    title: 'ASM Mammal Diversity Database v2.5: Bradypus variegatus',
    url: 'https://www.mammaldiversity.org/taxon/1000432/',
    kind: 'taxonomy',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Bradypus variegatus (2022 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en',
    kind: 'conservation',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title:
      'IUCN SSC Anteater, Sloth and Armadillo Specialist Group: Brown-throated three-toed sloth',
    url: 'https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/',
    kind: 'general',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices I, II and III, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Hayssen 2010: Bradypus variegatus (Pilosa: Bradypodidae)',
    url: 'https://doi.org/10.1644/850.1',
    kind: 'general',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Butcher et al. 2022: Myology of the pelvic limb of Bradypus variegatus',
    url: 'https://doi.org/10.1111/joa.13626',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Urbani and Bosque 2007: Feeding ecology and postural behaviour in northern Venezuela',
    url: 'https://doi.org/10.1016/j.mambio.2006.10.013',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Mesquita et al. 2021: Sloths as a polygastric mammal',
    url: 'https://doi.org/10.1002/jemt.23568',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Cliffe et al. 2023: Behaviour and activity budgets of two sympatric sloths',
    url: 'https://doi.org/10.7717/peerj.15430',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Rattenborg et al. 2008: EEG measures of sleep in wild brown-throated sloths',
    url: 'https://doi.org/10.1098/rsbl.2008.0203',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Garcés-Restrepo et al. 2019: Cecropia trees and the fitness of three-toed sloths',
    url: 'https://doi.org/10.1098/rspb.2018.2206',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Garcés-Restrepo et al. 2019: Correction to the Cecropia demography study',
    url: 'https://doi.org/10.1098/rspb.2019.1006',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Garcés-Restrepo, Pauli and Peery 2018: Natal dispersal in a human-dominated landscape',
    url: 'https://doi.org/10.1111/1365-2664.13138',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Taube et al. 2001: Reproductive biology and postnatal development in sloths',
    url: 'https://doi.org/10.1111/j.1365-2907.2001.00085.x',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Garcés-Restrepo et al. 2017: Individual reproductive strategies and tree-sloth mating systems',
    url: 'https://doi.org/10.1093/jmammal/gyx094',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Suutari et al. 2010: Green algal communities growing in sloth hair',
    url: 'https://doi.org/10.1186/1471-2148-10-86',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Pauli et al. 2014: A syndrome of mutualism reinforces the lifestyle of a sloth',
    url: 'https://doi.org/10.1098/rspb.2013.3006',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Kaup et al. 2021: Sloths and their epibionts as model mobile ecosystems',
    url: 'https://doi.org/10.1111/brv.12773',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Cliffe et al. 2015: Ambient temperature modulates food intake in Bradypus variegatus',
    url: 'https://doi.org/10.7717/peerj.875',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Sloth Conservation Foundation: Connected Gardens',
    url: 'https://www.slothconservation.org/connected-gardens',
    kind: 'conservation',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-bradypus-variegatus',
    slug: 'brown-throated-sloth',
    names: {
      zh: '褐喉树懒',
      en: 'Brown-throated Three-toed Sloth',
      aliases: ['Brown-throated Sloth', 'Brown-throated Three-fingered Sloth'],
    },
    scientificName: 'Bradypus variegatus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Pilosa', '披毛目'),
      taxon('Bradypodidae', '树懒科'),
      taxon('Bradypus', '树懒属'),
    ),
    conservation: conservation('LC', 'decreasing', 2022),
    distribution: {
      realms: ['terrestrial'],
      continents: ['北美洲', '南美洲'],
      regions: ['中美洲南部', '亚马孙盆地', '安第斯山麓与邻近森林', '巴西大西洋森林'],
      countries: [
        '玻利维亚',
        '巴西',
        '哥伦比亚',
        '哥斯达黎加',
        '厄瓜多尔',
        '洪都拉斯',
        '尼加拉瓜',
        '巴拿马',
        '秘鲁',
        '委内瑞拉',
      ],
      range:
        '现存原生居民范围从洪都拉斯延伸至中美洲南部，再进入哥伦比亚、委内瑞拉西部和南部、厄瓜多尔、秘鲁东部、玻利维亚与巴西，海拔从海平面至至少 2,500 米。阿根廷胡胡伊省最后记录采于 1916 年，IUCN 标为原生、可能已灭绝；MDD 的概略清单另列巴拉圭和阿根廷，暂不并入现存国家数组。',
      center: { lat: -5, lng: -65 },
    },
    habitats: [
      {
        name: '热带、亚热带湿润低地森林',
        realm: 'terrestrial',
        description: '全球主要生境；连续树冠提供叶食资源、休息枝和移动通道。',
        isPrimary: true,
      },
      {
        name: '季节性中湿林、半落叶林与云雾林',
        realm: 'terrestrial',
        description: '覆盖内陆大西洋森林和山地记录，本种分布可达至少海拔 2,500 米。',
      },
      {
        name: '红树林与沼泽森林',
        realm: 'terrestrial',
        description: 'IUCN 将这些生境列为适宜环境，但其代表性低于湿润低地森林。',
      },
      {
        name: '再生林、荫蔽可可园与树木碎片',
        realm: 'terrestrial',
        description:
          '部分种群可利用受扰和再生景观；局地存续仍依赖关键食物树、河岸林带和树冠连接。',
      },
    ],
    measurements: {
      length: {
        min: 52,
        max: 54,
        unit: 'cm',
        note: '头体长，IUCN SSC 专家组参考值；不含约 5 cm 的退化短尾',
      },
      weight: {
        min: 3.7,
        max: 6,
        unit: 'kg',
        note: 'IUCN SSC 专家组参考值，不代表全分布区极值',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: ['嫩叶', '选择性取食的成熟叶', '当地关键树种的叶片'],
      description:
        '树冠叶食者，可利用超过 50 种植物并偏好嫩叶；不同个体常集中使用少数资源树。哥斯达黎加一个长期研究种群的存活和繁殖输出与 Cecropia obtusifolia 密度正相关。',
    },
    activity: [
      '昼夜均可活动；个体之间和同一个体不同日期之间的活动节律差异显著',
      '活动常以短促片段穿插在长时间休息或睡眠之间，没有固定的日行或夜行时刻表',
      '主要依靠长肢、屈肌和三枚弯爪在树冠悬垂、攀爬和取食',
      '通常独居；稳定而紧密的组合以母兽和依附幼仔为主',
      '约每周下树排便一次；频率来自专家组概括，单次画面无法说明排便周期',
    ],
    tags: [
      '新热带界',
      '中美洲',
      '南美洲',
      '披毛目',
      '树冠叶食者',
      '悬垂运动',
      '昼夜兼行',
      'IUCN 无危',
      '种群下降',
    ],
    summary:
      '褐喉树懒生活在中南美洲森林树冠，用三枚弯爪抓住枝干，主要吃叶。它也能利用部分再生林和荫蔽农林地，但仍需要食物树与连续树冠。',
    description:
      '褐喉树懒以褐色喉部、深色眼纹、长前肢和四足各三枚弯爪区别于二趾树懒。它在树冠选择嫩叶和多种树叶，昼夜都可能出现短促活动，个体节律差异很大。粗毛可承载绿藻与多样附生生物，绿色调有直接证据，伪装和营养收益仍待检验。母兽通常每次育有一只贴在腹部的幼仔。IUCN 2022 将本种评为无危、趋势下降；森林破碎、火灾、道路死亡、猎捕、宠物贸易和抓抱自拍已造成局地压力。',
    storySections: [
      {
        key: 'three-clawed-suspension',
        label: '形态与运动',
        title: '三枚长爪怎样锁住树冠',
        body: '褐喉树懒的前肢比后肢长，四足各有三枚长而弯曲的爪。髋、膝和趾部发达的屈肌帮助它抓握枝干，保持悬垂姿势。爪包住树枝的外观可以观察到，抓力与能量消耗则需专门测量。',
      },
      {
        key: 'selective-folivore',
        label: '食性',
        title: '吃叶，也要挑树',
        body: '它可取食超过 50 种植物并偏好嫩叶，但个体会把大量时间留给少数资源树。哥斯达黎加一个长期研究种群的成体存活和繁殖输出与 Cecropia obtusifolia 密度正相关；这个地点结论不能推导出全物种只吃一种树。',
      },
      {
        key: 'flexible-diel-rhythm',
        label: '活动',
        title: '白天和夜间都可能活动',
        body: '八只野生成体的连续记录显示，日行、夜行和昼夜兼行个体都存在，活动多为短促片段。野外脑电小样本测得平均每天 9.63 小时睡眠，和圈养报告有明显差异；这个数字也不代表全物种固定睡眠值。',
      },
      {
        key: 'fur-mobile-ecosystem',
        label: '毛被生态',
        title: '一身毛也是一处生境',
        body: '粗毛承载绿藻、真菌、微生物和节肢动物组成的附生群落。分子研究确认 Trichophilus 等藻类存在并参与绿色调形成；藻类是否给树懒提供可测量的伪装或营养收益，仍缺少直接证据。',
      },
      {
        key: 'single-infant-care',
        label: '繁殖',
        title: '幼仔贴着母兽认识树冠',
        body: '褐喉树懒通常每胎一仔，妊娠约六个月，幼仔至少百日依附母兽。较早综合资料与较新的 IUCN 评估给出不同产仔间隔，现有证据还不能确定一个适用于全种的数值。',
      },
      {
        key: 'connected-forest-conservation',
        label: '保护',
        title: '无危物种也需要连通森林',
        body: '宽广分布和大片亚马孙范围支撑了全球无危等级，下降趋势和局地衰退仍然成立。保护工作需要管理保护地、保留河岸林带和关键树、恢复自然树冠连接、降低道路死亡，并阻断宠物与抓抱自拍供应链。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1825 年写下的 Bradypus variegatus',
        body: '申茨在 1825 年使用 Bradypus variegatus 描述褐喉树懒，这个学名沿用至今。原文的命名产地只写“南美洲”，1925 年的后续研究将其限定到巴西、可能为巴伊亚。早期产地记录很粗略，今天它从中美洲到南美洲的实际分布仍需依靠标本与野外调查确认。',
      },
    ],
    keyFacts: [
      'IUCN 在 2022 年将本种评为无危，当前全球种群趋势为下降。',
      'IUCN 确认十个现存居民国家；阿根廷胡胡伊最后记录为 1916 年并被标作可能已灭绝。',
      '头体长参考 52 至 54 厘米、体重约 3.7 至 6 千克，退化短尾约 5 厘米。',
      '前肢长于后肢，四足外观上各有三枚长弯爪；二趾树懒的前足只有两枚长爪。',
      '可取食超过 50 种植物并偏好嫩叶；一个地点的关键树不能代表全分布区固定食谱。',
      '活动可发生在白昼和夜晚，个体之间与同一个体不同日期之间差异显著。',
      '通常每胎一仔、妊娠约六个月；产仔间隔的现有资料不一致。',
      '毛被中确有绿藻和多样附生生物，藻类伪装与营养收益仍未获得直接定量验证。',
      '野外寿命和全球成熟个体数未知，不能用圈养高龄或局地密度补齐。',
    ],
    threats: [
      '森林砍伐、退化与破碎化造成树冠和食物资源丧失，并推动局地种群下降',
      '农业和牧场扩张移除关键树、河岸林带与森林连接',
      '农业前沿及破碎森林中的高强度火灾造成直接死亡和生境退化',
      '铺装道路增加后，树冠缺口迫使个体下地并产生道路死亡',
      '为食物、药物和宠物用途进行的猎捕与非法交易',
      '捕捉幼体出售给游客，以及让游客抓抱野生个体进行自拍',
      '大西洋森林等隔离种群的低遗传多样性和连接丧失',
    ],
    conservationActions: [
      '维持并管理保护地内外的湿润森林、连续树冠和多样本地食物树',
      '在农林复合景观恢复关键树、河岸林带与再生林连接，保留多树种资源',
      '在已识别的微破碎缺口设置和监测合适的树冠桥，并以恢复自然树冠为长期目标',
      '在道路死亡热点实施限速、警示、植被连接和经监测的跨越设施',
      '执行 CITES 附录 II 与范围国法律，追查宠物供应链并制止抓抱自拍',
      '把防火、早期预警与火后野生动物响应纳入农业前沿和破碎森林管理',
      '开展可重复的种群趋势监测，并补足分类、分布、生活史与生态研究',
    ],
    metrics: {
      adultLengthCm: [52, 54],
      adultMassKg: [3.7, 6],
      elevationM: [0, 2500],
    },
    featuredStats: [
      {
        key: 'global-iucn-status',
        label: 'IUCN 全球等级',
        value: 'LC',
        unit: '无危',
        note: '2022 年评估；当前种群趋势为下降',
      },
      {
        key: 'head-body-length',
        label: '头体长参考',
        value: '52—54',
        unit: '厘米',
        note: 'IUCN SSC 专家组参考值，不含约 5 厘米退化短尾',
      },
      {
        key: 'elevation-range',
        label: '记录海拔',
        value: '0—2,500',
        unit: '米',
        note: '从海平面至至少 2,500 米',
      },
      {
        key: 'gestation-and-litter',
        label: '妊娠与胎仔',
        value: '约 6',
        unit: '个月',
        note: '通常每胎一仔；产仔间隔资料不一致',
      },
    ],
    media: {
      image: './images/species/brown-throated-sloth/01-canopy-portrait.webp',
      alt: '雨后低地热带雨林中，一只完整的雌性褐喉树懒悬垂在粗枝下，深色眼纹、褐色喉部和长前肢清晰可见',
      focalPoint: { x: 0.58, y: 0.5 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/brown-throated-sloth/02-three-clawed-anatomy.webp',
          alt: '一只雌性褐喉树懒沿湿润粗枝移动，前肢长于后肢，最近前足的三枚长弯爪清晰可辨，其他抓握点部分被枝干遮挡',
          title: '三枚长爪锁住枝干',
          caption: '前肢长于后肢，发达屈肌与弯爪支撑长期悬垂；单张照片不能测出抓力或能量消耗。',
          focalPoint: { x: 0.53, y: 0.52 },
        },
        {
          image: './images/species/brown-throated-sloth/03-lowland-forest-habitat.webp',
          alt: '层次密集的湿润低地热带森林占据画面，一只小型褐喉树懒位于右上方连续树冠中的树干旁',
          title: '连续树冠是移动的基础',
          caption: '湿润低地森林是全球主要生境；本种也会利用山地林、再生林和部分荫蔽农林地。',
          focalPoint: { x: 0.7, y: 0.42 },
        },
        {
          image: './images/species/brown-throated-sloth/04-selective-leaf-feeding.webp',
          alt: '一只完整的褐喉树懒稳固抓住树枝，并将一根仍连着植物的嫩叶枝条拉近嘴边取食',
          title: '取食树叶，也会选择资源',
          caption: '褐喉树懒偏好嫩叶并利用多种植物；哥斯达黎加关键树研究不能推导出全物种只吃一种树。',
          focalPoint: { x: 0.47, y: 0.54 },
        },
        {
          image: './images/species/brown-throated-sloth/05-mother-and-infant.webp',
          alt: '一只雌性褐喉树懒悬在雨林枝间，一只小幼仔紧贴母兽胸腹部',
          title: '一次通常一只幼仔',
          caption: '妊娠约六个月，幼仔至少百日依附母兽；不同资料给出的产仔间隔并不一致。',
          focalPoint: { x: 0.51, y: 0.52 },
        },
        {
          image: './images/species/brown-throated-sloth/06-canopy-survey-monitoring.webp',
          alt: '两名研究人员在湿润森林左下方用一副双筒望远镜和记录板观察右上方树冠中的一只褐喉树懒，人与动物保持明显距离',
          title: '一次目击只是监测的一条记录',
          caption: '评估分布和趋势需要标准化重复调查；看见一只树懒不能换算成种群数量。',
          focalPoint: { x: 0.56, y: 0.46 },
        },
      ],
    },
    sources: BROWN_THROATED_SLOTH_SOURCES,
    featured: true,
    publishedAt: BROWN_THROATED_SLOTH_CONTENT_DATE,
    updatedAt: BROWN_THROATED_SLOTH_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
