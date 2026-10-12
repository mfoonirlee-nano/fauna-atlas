import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const ARAPAIMA_SOURCE_DATE = '2026-08-27' as const;

const ARAPAIMA_CONTENT_DATE = '2026-08-27' as const;

const ARAPAIMA_SOURCES = [
  {
    title: 'IUCN Red List — Arapaima gigas (assessment dated 1996)',
    url: 'https://doi.org/10.2305/IUCN.UK.1996.RLTS.T1991A9110195.en',
    kind: 'conservation',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title:
      'CMS COP15 2026 — Freshwater fishes proposed for concerted action, including the current DD record for Arapaima gigas',
    url: 'https://www.cms.int/sites/default/files/document/2026-01/cms_cop15_doc.25.6.1_rev.1_fresh-water-fish_e.pdf',
    kind: 'conservation',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Eschmeyer’s Catalog of Fishes — Arapaima gigas current species record',
    url: 'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=10160',
    kind: 'taxonomy',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Eschmeyer’s Catalog of Fishes — accepted species in Arapaima',
    url: 'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?genus=Arapaima&tbl=species',
    kind: 'taxonomy',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'CITES Species+ — Arapaima gigas Appendix II legal record',
    url: 'https://www.speciesplus.net/#/taxon_concepts/7323/legal',
    kind: 'conservation',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'CITES AC33 2024 — Catalog of Fishes checklist relevant to Arapaima taxonomy',
    url: 'https://cites.org/sites/default/files/documents/E-AC33-48_0.pdf',
    kind: 'taxonomy',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title:
      'Magalhães et al. 2026 — Integrative taxonomy reconciled around Arapaima gigas for sampled Brazilian Amazon populations',
    url: 'https://doi.org/10.1590/1982-0224-2025-0191',
    kind: 'taxonomy',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Stewart 2013 — Re-description of Arapaima agassizii',
    url: 'https://doi.org/10.1643/CI-12-013',
    kind: 'taxonomy',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Stewart 2013 — A new species of Arapaima from the Solimões River',
    url: 'https://doi.org/10.1643/CI-12-017',
    kind: 'taxonomy',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'FishBase — Arapaima gigas summary and historical maximum records',
    url: 'https://www.fishbase.se/summary/Arapaima_gigas',
    kind: 'general',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Smithsonian National Zoo — Arapaima morphology, size and floodplain habitat',
    url: 'https://nationalzoo.si.edu/animals/arapaima',
    kind: 'general',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Castello 2004 — A method to count pirarucu using trained fishers and surface breaths',
    url: 'https://doi.org/10.1577/M02-024.1',
    kind: 'conservation',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Castello 2008 — Lateral migration of Arapaima gigas in Amazon floodplains',
    url: 'https://doi.org/10.1111/j.1600-0633.2007.00255.x',
    kind: 'distribution',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Richard et al. 2018 — Size-structured habitat selection by Arapaima spp. in lower Amazon floodplain lakes',
    url: 'https://www.usgs.gov/publications/size-structured-habitat-selection-arapaima-floodplain-lakes-lower-amazon',
    kind: 'ecology',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Stokes et al. 2021 — Air-breathing ecology of Arapaima sp. and counting limits',
    url: 'https://doi.org/10.1002/aqc.3580',
    kind: 'ecology',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Brauner et al. 2004 — Transition in organ function in an obligate air-breathing Arapaima',
    url: 'https://doi.org/10.1242/jeb.00887',
    kind: 'ecology',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Fernandes et al. 2012 — Respiratory surface area of juvenile Arapaima gills and swim bladder',
    url: 'https://doi.org/10.1016/j.micron.2012.03.018',
    kind: 'ecology',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Pelster et al. 2020 — Gill and air-breathing organ roles in small and large pirarucu',
    url: 'https://pubmed.ncbi.nlm.nih.gov/32529591/',
    kind: 'ecology',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Godinho et al. 2005 — Gonadal morphology and reproductive traits of Arapaima gigas',
    url: 'https://doi.org/10.1111/j.1463-6395.2005.00213.x',
    kind: 'ecology',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Farias et al. 2015 — Parentage evidence and the mating system of Arapaima gigas',
    url: 'https://doi.org/10.1590/1982-0224-20140010',
    kind: 'ecology',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Torati et al. 2017 — Cephalic fluid associated with parental care in Arapaima gigas',
    url: 'https://doi.org/10.1371/journal.pone.0186692',
    kind: 'ecology',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Gurdak et al. 2019 — Diversity in reproductive traits of Arapaima spp. across Amazon floodplains',
    url: 'https://doi.org/10.1002/aqc.3030',
    kind: 'ecology',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Jacobi et al. 2020 — Feeding of Arapaima sp. from stomach contents and local ecological knowledge',
    url: 'https://doi.org/10.1111/jfb.14372',
    kind: 'ecology',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Castello et al. 2015 — Understanding fishing-induced extinctions in Amazon floodplains',
    url: 'https://doi.org/10.1002/aqc.2491',
    kind: 'conservation',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Campos-Silva & Peres 2016 — Community management and local recovery of an Arapaima fishery',
    url: 'https://doi.org/10.1038/srep34745',
    kind: 'conservation',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'Carvajal-Vallejos et al. 2012 — Introduction and spread of Arapaima in Bolivia',
    url: 'https://doi.org/10.3391/bir.2012.1.2.09',
    kind: 'distribution',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'IBAMA Portaria 22/2025 — Sustainable pirarucu management and várzea conservation program',
    url: 'https://www.ibama.gov.br/component/legislacao/?legislacao=139473&view=legislacao',
    kind: 'conservation',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
  {
    title: 'IBAMA Instrução Normativa 7/2026 — Natural-range boundary and invasive pirarucu management',
    url: 'https://www.ibama.gov.br/component/legislacao/?legislacao=139572&view=legislacao',
    kind: 'distribution',
    accessedAt: ARAPAIMA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-arapaima-gigas',
    slug: 'arapaima',
    names: {
      zh: '巨骨舌鱼',
      en: 'Arapaima',
      aliases: ['巨巴西骨舌鱼', 'Pirarucu', 'Paiche'],
    },
    scientificName: 'Arapaima gigas',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Actinopterygii', '辐鳍鱼纲'),
      taxon('Osteoglossiformes', '骨舌鱼目'),
      taxon('Arapaimidae', '巨骨舌鱼科'),
      taxon('Arapaima', '巨骨舌鱼属'),
    ),
    conservation: conservation('DD', 'unknown', 1996),
    distribution: {
      realms: ['freshwater'],
      continents: ['南美洲'],
      regions: [
        '亚马孙河—索利蒙伊斯河低地干流与洪泛平原',
        '茹鲁阿河、普鲁斯河及桑塔伦附近下亚马孙的现代核验区域',
        '秘鲁、哥伦比亚与厄瓜多尔的亚马孙低地水系',
        '亚马孙流域内边界仍需凭证标本与现代分类继续厘清的区域',
      ],
      countries: ['巴西', '秘鲁', '哥伦比亚', '厄瓜多尔'],
      range:
        '保守原生范围位于南美洲亚马孙低地河流、湖泊和季节性洪泛水域。2026 年综合研究只核验索利蒙伊斯、茹鲁阿、普鲁斯和桑塔伦样本，不能替整个流域解决种界；圭亚那材料在拆分口径下更可能属于 Arapaima arapaima，玻利维亚上马德拉及巴西部分自然范围外水域的种群来自引入或养殖逸出。',
      center: { lat: -3.5, lng: -62 },
    },
    habitats: [
      {
        name: '亚马孙洪泛湖与缓流水道',
        realm: 'freshwater',
        description:
          '个体在与河流相连的洪泛湖、牛轭湖、河汊和缓流水道活动；属级调查显示，低水期不同体型更常出现在较深、浑浊的位置，小个体也更常靠近密集浮水植物。',
        isPrimary: true,
      },
      {
        name: '涨水期淹水森林与草本滩地',
        realm: 'freshwater',
        description:
          '河水上涨后，个体横向进入淹水森林和水生草本带利用扩展的食物与隐蔽空间；水位回落时再返回湖泊和水道。',
      },
      {
        name: '岸边浅水繁殖区',
        realm: 'freshwater',
        description:
          '亲鱼随洪水节律在浅水底床筑巢、护卵并带领成群幼鱼；巢位、巢形和繁殖体长在不同洪泛区变化，不能套用一个固定月份或尺寸。',
      },
      {
        name: '低氧静水与腐殖质水体',
        realm: 'freshwater',
        description:
          '高度血管化的鳔让成鱼必须到水面吸气，可利用许多溶氧较低的静水环境；鳃仍承担二氧化碳排出、离子和酸碱调节。',
      },
    ],
    measurements: {
      length: {
        max: 300,
        unit: 'cm',
        note: 'Smithsonian 等现代权威资料采用的保守近似上限；FishBase 的 450 cm 沿用未经现代凭证核验的历史记录，且早于属内拆分，不作为比较指标',
      },
      weight: {
        max: 200,
        unit: 'kg',
        note: '现代权威资料采用的近似上限，不代表普通成体或经统一方法核验的世界纪录',
      },
    },
    diet: {
      types: ['carnivore', 'piscivore'],
      foods: ['鱼类', '水生昆虫', '微型甲壳类', '其他水生无脊椎动物'],
      description:
        '以动物性食物为主，成鱼胃含物通常由鱼类主导；幼鱼也大量摄食昆虫和微型甲壳类。不同地点的 Arapaima sp. 研究检出其他无脊椎动物与植物材料，植物是否属于主动摄食仍未厘清。',
    },
    activity: [
      '定期到水面吸入空气，但间隔随体型、温度与活动变化',
      '随洪水涨落在湖泊、水道和淹水森林之间横向移动',
      '在洪泛水体中追踪鱼类与无脊椎动物',
      '繁殖期在浅水筑巢并完成体外受精',
      '亲鱼守护卵和成群幼鱼，雄鱼通常承担更多孵化后照护',
      '浮头产生的视觉与声学线索支持训练渔民开展水面计数',
    ],
    tags: [
      'IUCN 数据缺乏',
      '1996 年全球评估',
      'CITES 附录 II',
      '辐鳍鱼纲',
      '骨舌鱼目',
      '亚马孙洪泛平原',
      '强制空气呼吸',
      '大型纯淡水鱼',
      '亲代照护',
      '社区共同管理',
      '属内分类修订',
    ],
    summary:
      '亚马孙洪泛平原的大型纯淡水鱼，用高度血管化的鳔从空气吸氧；浮头习性让训练渔民能够计数，也让它容易遭受定向捕捞。',
    description:
      '巨骨舌鱼有宽阔骨质头、略向上的大口、巨大的重叠鳞片，以及靠近圆尾的背鳍和臀鳍，成鱼后半身常见红橙色鳞缘。它随洪水进入淹水森林，退水后回到湖泊和水道；成鱼多食鱼，亲鱼筑巢并守护幼体。高度血管化的鳔承担主要吸氧，鳃继续排出大部分二氧化碳并调节离子。IUCN 的全球数据缺乏评估始于 1996 年，早于属内现代修订；CITES 附录 II 管制国际贸易，不等同于受胁等级。部分社区依靠受训渔民的浮头计数、禁捕湖、巡护和配额恢复局地种群，这些结果不能代替全流域新评估。',
    storySections: [
      {
        key: 'giant-with-boundaries',
        label: '体型与分类',
        title: '大型淡水鱼的纪录与物种边界',
        body: '现代资料给出巨骨舌鱼可接近三米、约二百千克，是世界最大型淡水鱼之一。历史四点五米说法缺少现代凭证。巨骨舌鱼属另有多个接受种，早期跨流域研究的物种身份需要重新核对。',
      },
      {
        key: 'swim-bladder-lung',
        label: '空气呼吸',
        title: '鳔吸收氧，鳃处理水中的交换',
        body: '幼鱼发育时逐步把高度血管化的鳔变成主要吸氧器官。实验中的小型与较大型幼鱼分别从空气取得约 63% 和 75% 的氧；鳃仍排出大部分二氧化碳并承担离子、酸碱和含氮废物调节。',
      },
      {
        key: 'flood-pulse-movement',
        label: '洪水节律',
        title: '随洪水进入森林，退水后返回湖泊',
        body: '洪水上涨时，个体沿水道进入淹水森林和草本滩地寻找食物与庇护。水位回落后，鱼返回较深湖泊和河汊；堤坝、道路与水坝切断横向连通时，完整生活史会失去空间。',
      },
      {
        key: 'animal-dominated-diet',
        label: '食性',
        title: '成鱼胃里多是鱼，幼鱼也捕食无脊椎动物',
        body: '胃含物和渔民知识共同指向以动物性食物为主的食谱。成鱼样本多由鱼类主导，幼鱼增加昆虫和微型甲壳类；少量植物材料可能来自主动摄食或连同猎物吞入，现有证据没有统一结论。',
      },
      {
        key: 'variable-parental-care',
        label: '繁殖与护幼',
        title: '亲鱼守住巢，也带着幼鱼移动',
        body: '亲鱼配合洪水节律在浅水筑巢并体外受精，随后守护卵和成群幼鱼。雄鱼通常承担更多孵化后照护，雌鱼也会协防；亲权研究发现同巢可能有多亲贡献，因此不能把它写成严格单配或典型口孵鱼。',
      },
      {
        key: 'surface-count-management',
        label: '计数与共管',
        title: '受训渔民利用浮头习性计数',
        body: '强制空气呼吸产生可见、可听的浮头事件。训练渔民在安静天气按固定水面单元和时段计数，原始标记重捕校验相关系数为 0.98；温度、体型与活动会改变间隔，方法需要本地校准。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1822 年的命名与后来属内修订',
        body: '巨骨舌鱼的科学命名记录署名为 Schinz，年份为 1822 年，现用学名为 Arapaima gigas。后来分类研究在巨骨舌鱼属内承认了多个物种，因此早年跨流域资料需要重新确认身份。它必须到水面吸气的习性，也使当地受训渔民能够用浮头计数参与种群管理。',
      },
    ],
    keyFacts: [
      'Catalog of Fishes 接受 Arapaima gigas (Schinz, 1822)，分类上属于巨骨舌鱼科 Arapaimidae。',
      '巨骨舌鱼属还包括 A. agassizii、A. arapaima、A. leptosoma 和 A. mapae，不能写成单型属。',
      '2026 年综合研究把索利蒙伊斯、茹鲁阿、普鲁斯和桑塔伦所检材料归入 A. gigas，未覆盖整个属的地理与模式材料问题。',
      'IUCN 全球等级为 DD、趋势未知，评估日期为 1996 年 8 月 1 日。',
      'CITES 自 1975 年 7 月 1 日将操作名 A. gigas 列入附录 II；贸易管制不等于 IUCN 受胁等级。',
      '现代权威资料采用接近 3 米、约 200 千克的保守上限；4.5 米历史值不作为现代纪录。',
      '宽阔骨质头、大鳞、后置背鳍和臀鳍、圆尾及成鱼后段红橙色鳞缘构成醒目外形。',
      '成鱼依赖高度血管化的鳔从空气吸氧，鳃仍承担大部分二氧化碳排出和离子调节。',
      '幼鱼逐步从较强水呼吸转向强制空气呼吸，浮头间隔随体型、温度与活动改变。',
      '食谱以动物性食物为主；成鱼多食鱼，幼鱼也摄食昆虫和微型甲壳类，植物材料的意义仍未厘清。',
      '亲鱼筑巢并护卵护幼，雄鱼通常承担更多孵化后照护；现有证据不支持严格单配或确定口孵。',
      '受训渔民的水面计数曾与标记重捕结果达到 r=0.98，天气、单元、时长和本地浮头间隔仍会改变准确度。',
    ],
    threats: [
      '目标性和非法捕捞利用成鱼必须浮头的习性，集中移除大型繁殖个体',
      '繁殖期捕杀护巢或带幼鱼的亲鱼，同时影响当期亲体和后代存活',
      '水坝、堤路和围垦切断湖泊、水道、淹水森林与浅水繁殖区的季节连通',
      '洪泛森林、湖岸和浅水育幼生境退化，减少觅食、隐蔽和繁殖空间',
      '养殖逃逸和跨流域放流在自然范围外形成入侵种群，增加扩散与管理压力',
      '属内分类、分布凭证和近期全球种群资料不足，妨碍风险评估与贸易追踪',
    ],
    conservationActions: [
      '支持社区划定禁捕湖、巡护水域并以共同规则限制外来捕捞压力',
      '培训并校准水面计数，在安静天气记录单元面积、时长、体型组和漏检条件',
      '按当地年度计数设置保守配额、最小捕捞体长和繁殖季封闭，保留足够大型亲鱼',
      '通过 CITES 许可、产地证明和产品追溯核验跨境贸易合法性与非致危性',
      '保护洪泛湖、水道、淹水森林和浅水繁殖区之间的季节水文连通',
      '用凭证形态、遗传与准确地点重新核验 A. gigas 分布，避免把其他 Arapaima 种并入',
      '防止养殖逃逸和跨流域放流，并在自然范围外按当地风险监测、控制或移除',
      '公开计数努力、捕捞量、体型结构和巡护记录，用局地证据评价管理成效',
      '开展新的 IUCN 全球评估，分别报告不同物种、流域和原生或引入身份',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'conservative-maximum-length',
        label: '保守近似上限',
        value: '接近 3',
        unit: '米',
        note: '现代权威公众资料口径；未采用缺少现代凭证的 4.5 米历史值',
      },
      {
        key: 'conservative-maximum-mass',
        label: '保守近似体重上限',
        value: '约 200',
        unit: '千克',
        note: '不是普通成体、统一测量样本范围或经核验的世界纪录',
      },
      {
        key: 'juvenile-aerial-oxygen-share',
        label: '实验幼鱼空气供氧',
        value: '63–75',
        unit: '%',
        note: '4 至 6 克与 600 至 700 克实验组；不能外推成所有体型和环境的固定比例',
      },
      {
        key: 'surface-count-validation',
        label: '水面计数校验相关',
        value: 'r = 0.98',
        note: '原始研究中的受训渔民与标记重捕比较；准确度依赖天气、训练和本地校准',
      },
    ],
    media: {
      image: './images/species/arapaima/01-floodplain-portrait.webp',
      alt: '茶绿色洪泛湖水下，一尾完整的成年巨骨舌鱼朝左游动，宽阔骨质头、大鳞、后置背臀鳍和圆尾可见，鱼身位于画面右侧',
      focalPoint: { x: 0.68, y: 0.51 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/arapaima/02-bony-head-and-posterior-fins.webp',
          alt: '一尾完整成年巨骨舌鱼的水下侧视图，宽阔骨质头、巨大的重叠鳞片、后置背鳍和臀鳍、圆尾及后段红橙色鳞缘清楚可见',
          title: '大鳞覆盖一副后段发力的身体',
          caption: '宽头、大鳞、后置背臀鳍和圆尾构成属级外形线索；生成图不能替代凭证标本，也不能区分属内全部接受种。',
          focalPoint: { x: 0.5, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image: './images/species/arapaima/03-surface-air-breath.webp',
          alt: '一尾完整成年巨骨舌鱼从深色洪泛湖水下斜向水面，张口完成一次吸气并在水面形成圆形波纹',
          title: '到水面换一口空气',
          caption: '高度血管化的鳔承担主要吸氧；画面只重建一次浮头，不能给出固定间隔、溶氧值或个体生理上限。',
          focalPoint: { x: 0.58, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image: './images/species/arapaima/04-flooded-forest-fish-foraging.webp',
          alt: '淹水森林根枝间，一尾完整成年巨骨舌鱼从右侧接近左侧一群分散的小型银色鱼，鱼口保持闭合',
          title: '在淹水森林里接近鱼群',
          caption: '接近不等于追逐或捕获；同框的小型鱼不能确定猎物种类，也不能代表不同体型和地点的完整食谱。',
          focalPoint: { x: 0.62, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image: './images/species/arapaima/05-juvenile-school-guarding.webp',
          alt: '浅水草本洪泛区中，一尾完整成年巨骨舌鱼在一群聚集的小型幼鱼下方缓慢游动',
          title: '成鱼与成群幼鱼保持接近',
          caption: '同框关系只重建护幼场景，不能判定成鱼性别、遗传亲缘、窝量、严格单配、口孵或头部分泌液功能。',
          focalPoint: { x: 0.53, y: 0.49 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image: './images/species/arapaima/06-community-surface-count.webp',
          alt: '清晨洪泛湖上，两名社区监测人员坐在无动力木舟中，一人记录，远处一尾大型鱼在水面形成一次浮头波纹',
          title: '训练渔民记录一次浮头',
          caption:
            '画面展示计数方法，不提供真实地点、物种鉴定、数量、配额或趋势；可靠结果需要受训观察者、固定单元、天气记录和重复计数。',
          focalPoint: { x: 0.52, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...ARAPAIMA_SOURCES,
      {
        title: 'GBIF: Arapaima gigas (Schinz, 1822) nomenclatural record',
        url: 'https://www.gbif.org/species/5212877',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: ARAPAIMA_CONTENT_DATE,
    updatedAt: ARAPAIMA_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
