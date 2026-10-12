import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const GOLIATH_FROG_SOURCE_DATE = '2026-08-27' as const;

const GOLIATH_FROG_CONTENT_DATE = '2026-08-27' as const;

const GOLIATH_FROG_SOURCES = [
  {
    title: 'IUCN Red List — Conraua goliath (assessed 2018, published 2019)',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T5263A96062132.en',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Amphibian Species of the World — Conraua goliath',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Conrauidae/Conraua/Conraua-goliath',
    kind: 'taxonomy',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Amphibian Species of the World — Conrauidae',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Conrauidae',
    kind: 'taxonomy',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Boulenger 1906 — Original description of Rana goliath',
    url: 'https://doi.org/10.1080/00222930608562529',
    kind: 'taxonomy',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Blackburn et al. 2020 — Evolution of African slippery frogs Conraua',
    url: 'https://doi.org/10.1111/zsc.12447',
    kind: 'taxonomy',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Sabater-Pi 1972 — Original field account for the 1960 Nkombia specimen',
    url: 'https://bcnroc.ajuntament.barcelona.cat/jspui/bitstream/11703/93720/1/19776.pdf',
    kind: 'ecology',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Sabater-Pi 1985 — Contribution to the biology of the Giant Frog',
    url: 'https://doi.org/10.1163/156853885X00047',
    kind: 'ecology',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Herrmann 2008 — Zoo-based In-situ Herpetology: Setting Baselines in Western Cameroon',
    url: 'https://www.dropbox.com/s/mq8xooehydzzabg/HR%20v39%20n1%20Mar08%20ebook.pdf?dl=1',
    kind: 'ecology',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'AmphibiaWeb — Conraua goliath species account',
    url: 'https://amphibiaweb.org/species/4691',
    kind: 'general',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Schäfer et al. 2019 — Goliath frogs build nests for spawning',
    url: 'https://doi.org/10.1080/00222933.2019.1642528',
    kind: 'ecology',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Gonwouo et al. 2022 — Status and ecological preferences of Goliath Frogs in Cameroon',
    url: 'https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf',
    kind: 'ecology',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Monthe et al. 2023 — Size structure and weight-length relationship in three Cameroon sites',
    url: 'https://doi.org/10.14302/issn.2691-6622.ijar-23-4578',
    kind: 'ecology',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Taboue et al. 2023 — Local perceptions, hunting and export in Cameroon',
    url: 'https://doi.org/10.1017/S0030605323000224',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Cameroon MINFOF 2020 — Order No. 0053 classifying protected wildlife',
    url: 'https://faolex.fao.org/docs/pdf/cmr240488.pdf',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'CITES CoP8 Proposal 56 — Historical Conraua goliath proposal',
    url: 'https://cites.org/sites/default/files/eng/cop/08/prop/E08-Prop-56_Conraua.PDF',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'CITES CoP17 nomenclature annex — Conraua goliath regulatory note',
    url: 'https://cites.org/sites/default/files/eng/cop/17/WorkingDocs/E-CoP17-81-01-A5.pdf',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'U.S. Fish and Wildlife Service — Goliath Frog ESA profile',
    url: 'https://www.fws.gov/species/goliath-frog-conraua-goliath',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Amphibian Conservation Needs Assessment — Conraua goliath, Cameroon 2026',
    url: 'https://www.conservationneeds.org/Assessment/AssessmentResults?AspxAutoDetectCookieSupport=1&assessmentId=6969&countryId=22&speciesId=5041',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-conraua-goliath',
    slug: 'goliath-frog',
    names: {
      zh: '非洲巨蛙',
      en: 'Goliath Frog',
      aliases: ['巨谐蛙', '歌利亚蛙', '巨型滑蛙', 'Giant Slippery Frog'],
    },
    scientificName: 'Conraua goliath',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Amphibia', '两栖纲'),
      taxon('Anura', '无尾目'),
      taxon('Conrauidae', '巨谐蛙科'),
      taxon('Conraua', '巨谐蛙属'),
    ),
    conservation: conservation('EN', 'decreasing', 2018, 'A2d'),
    distribution: {
      realms: ['freshwater', 'terrestrial'],
      continents: ['非洲'],
      regions: ['下几内亚森林带', '喀麦隆西南部', '赤道几内亚大陆部'],
      countries: ['喀麦隆', '赤道几内亚'],
      range:
        '已确认分布从喀麦隆西南部 Nkongsamba 一带向南延伸到赤道几内亚大陆部 Monte Alén，主要位于海拔 1,000 米以下、具有清洁岩石急流与相连河岸林的河段；加蓬记录仍未确认，不列作确定范围国。',
      center: { lat: 3.2, lng: 10.15 },
    },
    habitats: [
      {
        name: '雨林岩石急流、瀑布与深潭',
        realm: 'freshwater',
        description:
          '大型成蛙常停栖在清洁、富氧、常年流动的急流和瀑布边岩石；水温、流量、岩石结构和水质共同决定适生性。',
        isPrimary: true,
      },
      {
        name: '岸边缓流池、岩池与砂砾浅池',
        realm: 'freshwater',
        description:
          '与主河道相连的低流速浅池供卵、蝌蚪和幼体使用，部分天然水洼留下被清理或改造成产卵池的痕迹。',
      },
      {
        name: '潮湿低地河岸雨林',
        realm: 'terrestrial',
        description:
          '成蛙夜间沿河岸和邻近林地觅食；次生林或农林景观只有在岩石河道及河岸连续性仍在时才可能维持种群。',
      },
    ],
    measurements: {
      length: {
        max: 33.5,
        unit: 'cm',
        note: '2021—2022 年喀麦隆三地 139 只样本中的最大实测吻肛长；同只重 2.529 千克，不是普通成体范围或绝对上限',
      },
      weight: {
        max: 3.3,
        unit: 'kg',
        note: '1960 年 Nkombia 一只 32 厘米个体捕获时体重；是历史记录，不是普通成体范围或绝对上限',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: ['陆生节肢动物', '淡水虾等甲壳类', '淡水蜗牛', '其他蛙类及蝌蚪'],
      description:
        '成蛙为肉食者，已记录昆虫、马陆、蛛形类、淡水甲壳类、蜗牛和其他蛙类。蝌蚪会刮食急流岩面水生植物，可能涉及河川草科，但确切种类和是否专食未定；旧名 Dicraea warmingii 不作为已确认食物。',
    },
    activity: [
      '主要夜行',
      '白天岩石晒背',
      '河岸林地觅食',
      '跃水逃逸',
      '成蛙巢边停留',
      '非迁徙',
    ],
    tags: [
      '现生最大蛙类',
      'IUCN 濒危',
      '急流专栖',
      '雨林河流',
      '筑巢池',
      '喀麦隆 A 类保护动物',
    ],
    summary:
      '生活在喀麦隆与赤道几内亚雨林急流中的现生最大蛙类，会留下清理或改造过的浅水巢池，却正因猎捕与河流退化持续下降。',
    description:
      '非洲巨蛙只在下几内亚森林带一条狭长的跨境河流范围内得到确认。低平宽头、颗粒状绿褐背部、强壮后肢和延伸到趾端的厚蹼适应了岩石急流；大成蛙多守在瀑布与急流边，幼体则利用缓池和石缝。成蛙主要夜行并捕食节肢动物、淡水甲壳类、蜗牛和其他蛙，蝌蚪的植物食物仍只可靠到疑似河川草科。2019 年研究记录了被利用、清理或改造的三类浅水巢池，但搬石动作和雌雄分工尚未直接观察。IUCN 在 2018 年评为濒危 A2d、趋势下降，推断过去三代约 15 年成熟个体因过度捕捉减少超过 70%。',
    storySections: [
      {
        key: 'record-with-boundaries',
        label: '体尺与纪录',
        title: '极大个体的长度与体重分别记录',
        body: '2023 年论文的 139 只样本中，最长一只吻肛长 33.5 厘米、重 2.529 千克。1960 年另一只个体长 32 厘米、重 3.3 千克。更大的吉尼斯声明来自不同来源，评估纪录时需要核对日期和凭证。',
      },
      {
        key: 'torrent-built-body',
        label: '形态与生境',
        title: '适应岩石急流的身体',
        body: '低平宽头贴近湿岩，长而有力的后肢随时把身体送回水中，后足厚蹼一直延伸到趾端。大成蛙常停在瀑布和急流边，幼体却更多躲在河缘缓池与石缝；同一条河里，不同年龄各有位置。',
      },
      {
        key: 'night-riverbank',
        label: '活动与食性',
        title: '白天晒背，夜里沿河觅食',
        body: '夜幕落下，成蛙会走进潮湿河岸林地寻找节肢动物、淡水虾、蜗牛和其他蛙。白天它仍可能回到急流岩石上晒背，受惊时连续短跳入水；主要夜行不等于白天从不活动。',
      },
      {
        key: 'tadpole-food-question',
        label: '幼体食物',
        title: '蝌蚪的植物食物尚未确定到种',
        body: '蝌蚪用角质口器刮食急流岩面的水生植物。流传已久的 Dicraea warmingii 与现代植物分类和地理分布冲突；可靠结论只能停在“疑似河川草科、确切种未定”，更不能据此宣称蝌蚪只吃一个物种。',
      },
      {
        key: 'shallow-nest-pools',
        label: '繁殖与筑巢',
        title: '浅水巢池的改造者尚待直接观察',
        body: 'Mpoula 河研究归纳出三类巢池：清理过的天然岩池、扩大的岸边浅洼，以及砂砾中的围石浅池。石块翻动痕迹暗示最大约两千克，一只性别未知的成蛙也曾整夜停在巢边；研究者却没有直接拍到搬石，也没有确定雌雄分工。',
      },
      {
        key: 'largest-taken-first',
        label: '威胁与保护',
        title: '捕捉往往先带走最大的成蛙',
        body: '猎人主动寻找最大的成蛙，靠近居民点的河段也更少见大个体。喀麦隆已把本种列为 A 类全面保护动物，执法仍要与社区替代收入、贸易追踪、河流水质保护和连续多年的夜间调查一起推进。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1906 年的非洲巨蛙命名记录',
        body: '非洲巨蛙的科学命名记录署名为 Boulenger，年份为 1906 年，现用学名为 Conraua goliath。中文名“巨蛙”对应成体的大体型，但不同个体的纪录应分别看待。后来的河流研究还发现三类经过利用、清理或改造的浅水巢池，搬石动作和雌雄分工仍未直接观察到。',
      },
    ],
    keyFacts: [
      '论文样本最长记录为一只 33.5 厘米、2.529 千克个体；较高历史体重记录是另一只 32 厘米、3.3 千克个体。',
      '大成蛙、亚成体和幼体分别偏好急流大岩、河心露石和河缘缓池等不同微生境。',
      '成蛙肉食，蝌蚪刮食水生植物；旧称 Dicraea warmingii 的确切植物身份仍未解决。',
      '2019 年研究登记 22 个筑巢地点，其中 19 个完整可用，并归纳出三类巢池改造方式。',
      '筑巢者和守巢者性别仍未确定，研究者也没有直接目击蛙移动最重约两千克的石块。',
      'IUCN 推断截至 2018 年的过去三代约 15 年内，成熟个体因过度捕捉减少超过 70%。',
    ],
    threats: [
      '为家庭食用和野味市场猎捕，且猎人偏好最大的繁殖成体',
      '面向宠物、展示和区域市场的非法活体捕捉与交易',
      '可可、香蕉、油棕等农业扩张造成的河岸林转化',
      '伐木、道路和居民点扩张破坏生境并增加猎人进入机会',
      '侵蚀泥沙、农药、化学品和废物进入繁殖河流',
      '筑坝、取水和河道改造引起的流量与急流、缓池结构变化',
      '狭窄分布、全球数量未知及长期标准化监测不足',
    ],
    conservationActions: [
      '执行喀麦隆 A 类保护规定，追查收购、餐饮、道路运输和活体贸易链',
      '与河流社区共建替代收入、减少需求和长期保护协议',
      '保护急流、瀑布、岩池、砂砾缓池与河岸林的连续组合',
      '控制伐木道路、泥沙、农药、废物排放、取水与拦河工程',
      '繁殖季保护巢区并避免公开精确坐标、翻动巢池或触摸卵团',
      '连续至少五年开展标准化夜间河段调查，记录年龄级、体尺、巢池、猎捕与水质',
      '研究蝌蚪食物、成长与成熟、守巢性别、流量阈值、农药和 Bd 易感性',
      '仅在遗传来源、病原筛查和放归风险可管理时把圈养繁育作为野外保护补充',
    ],
    metrics: {
      elevationM: [0, 1000],
    },
    featuredStats: [
      {
        key: 'published-sample-max-svl',
        label: '论文样本最长吻肛长',
        value: '33.5',
        unit: '厘米',
        note: '2021 至 2022 年喀麦隆三地 139 只样本中的最大值；同只重 2.529 千克，不是绝对上限',
      },
      {
        key: 'historical-max-mass',
        label: '标本捕获时体重',
        value: '3.3',
        unit: '千克',
        note: '1960 年 Nkombia 一只 32 厘米个体；不是平均、常见上限或绝对上限',
      },
      {
        key: 'iucn-three-generation-decline',
        label: 'IUCN 三代减少判断',
        value: '>70',
        unit: '%',
        note: '三代约 15 年、截至 2018 评估的推断；不是同步普查或当前年下降率',
      },
      {
        key: 'nest-construction-types',
        label: '巢池改造方式',
        value: '3',
        unit: '类',
        note: '2018 年 Mpoula 河 400 米研究河段归纳；不是全分布区固定比例',
      },
    ],
    media: {
      image: './images/species/goliath-frog/01-rapid-river-adult-cover.webp',
      alt: '一只非洲巨蛙伏在低地雨林清洁急流旁的湿岩石上',
      focalPoint: { x: 0.67, y: 0.56 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/goliath-frog/02-adult-field-marks.webp',
          alt: '溪流边一只非洲巨蛙的侧面全身，宽头、颗粒状背部和长后肢清楚可见',
          title: '急流蛙的外形',
          caption:
            '低平宽头、眼后皮褶、颗粒状绿褐背面、长后肢和全蹼后足共同适应岩石急流；画面不代表测量过的纪录个体。',
          focalPoint: { x: 0.54, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image: './images/species/goliath-frog/03-rainforest-rapids-habitat.webp',
          alt: '低地雨林中相连的急流、短瀑和河缘缓水，一只非洲巨蛙伏在岩石上',
          title: '一条河里的多种微生境',
          caption:
            '急流大岩、瀑布、缓流边池和河岸林相互连接；这是概括性生境重建，不是已确认地点。',
          focalPoint: { x: 0.63, y: 0.62 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image: './images/species/goliath-frog/04-nocturnal-forest-foraging.webp',
          alt: '夜间一只非洲巨蛙走过邻近河流的潮湿雨林落叶层',
          title: '夜里的河岸林',
          caption:
            '成蛙主要夜间沿河岸和邻近林地活动；画面没有展示猎物、移动距离或一次真实觅食结果。',
          focalPoint: { x: 0.63, y: 0.61 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image: './images/species/goliath-frog/05-cleared-gravel-nest-pool.webp',
          alt: '夜间一只性别未知的非洲巨蛙停在与主河相邻的清理砂砾浅池边',
          title: '清理后的浅水巢池',
          caption:
            '画面只重建一处已完成的砂砾浅池；不证明这只蛙移动过石块、建造巢池、守护特定卵团或具有已知性别。',
          focalPoint: { x: 0.72, y: 0.67 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image: './images/species/goliath-frog/06-distance-night-river-survey.webp',
          alt: '夜间一名研究者隔着河流远距离观察岩石上的一只非洲巨蛙',
          title: '不接触的夜间河段调查',
          caption:
            '标准化重复调查可比较地点与年份；这张重建图不代表真实人员、地点、规程或数量结果。',
          focalPoint: { x: 0.72, y: 0.63 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...GOLIATH_FROG_SOURCES,
      {
        title: 'GBIF: Conraua goliath (Boulenger, 1906) nomenclatural record',
        url: 'https://www.gbif.org/species/2428946',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: GOLIATH_FROG_CONTENT_DATE,
    updatedAt: GOLIATH_FROG_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
