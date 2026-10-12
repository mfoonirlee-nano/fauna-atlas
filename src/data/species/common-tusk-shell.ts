import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const COMMON_TUSK_SHELL_SOURCE_DATE = '2026-09-01' as const;

const COMMON_TUSK_SHELL_CONTENT_DATE = '2026-09-01' as const;

const COMMON_TUSK_SHELL_SOURCES = [
  {
    title: 'MolluscaBase / WoRMS: Antalis vulgaris (AphiaID 196380)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=196380',
    kind: 'taxonomy',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Steiner & Kabat 2004: Catalogue of species-group names of Scaphopoda',
    url: 'https://sciencepress.mnhn.fr/sites/default/files/articles/pdf/z2004n4a1.pdf',
    kind: 'distribution',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Steiner 1997: Scaphopoda from the Spanish coasts',
    url: 'https://zenodo.org/records/4645623/files/15_1_7_Steiner.pdf',
    kind: 'distribution',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Martínez-Ortí & Cádiz 2012: Living scaphopods from the Valencian coast',
    url: 'https://doi.org/10.32800/abc.2012.35.0071',
    kind: 'ecology',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Naturalis: Macrobenthos of the North Sea, Antalis vulgaris',
    url: 'https://ns-mollusca.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?epi=183&id=121491',
    kind: 'general',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'DORIS: Antalis vulgaris, Dentale commun',
    url: 'https://doris.ffessm.fr/Especes/Antalis-vulgaris-Dentale-commun-375',
    kind: 'ecology',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Reynolds 2002: The Scaphopoda',
    url: 'https://doi.org/10.1016/S0065-2881(02)42014-7',
    kind: 'ecology',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Lamprell & Healy 1998: Revision of the Scaphopoda from Australian waters',
    url: 'https://journals.australian.museum/media/Uploads/Journals/17853/1267_complete.pdf',
    kind: 'ecology',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Dufresne-Dubé et al. 1983: Ultrastructural analysis of Dentalium vulgare gametes',
    url: 'https://doi.org/10.1016/S0022-5320(83)90132-6',
    kind: 'ecology',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Moreau et al. 1989: Polyspermy block in Dentalium vulgare',
    url: 'https://doi.org/10.1002/jez.1402490114',
    kind: 'ecology',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'WoRMS: Antalis vulgaris biological and ecological attributes',
    url: 'https://www.marinespecies.org/rest/AphiaAttributesByAphiaID/196380?include_inherited=true',
    kind: 'ecology',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List search: Antalis vulgaris',
    url: 'https://www.iucnredlist.org/search?query=Antalis%20vulgaris&searchType=species',
    kind: 'conservation',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'SeaLifeBase: Antalis vulgaris',
    url: 'https://www.sealifebase.ca/summary/Antalis-vulgaris.html',
    kind: 'conservation',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-antalis-vulgaris',
    slug: 'common-tusk-shell',
    names: {
      zh: '普通角贝',
      en: 'Common Tusk Shell',
      aliases: ['Common Tusk', 'Common Tuskshell', "Common Elephant's Tusk"],
    },
    scientificName: 'Antalis vulgaris',
    taxonomy: animalTaxonomy(
      taxon('Mollusca', '软体动物门'),
      taxon('Scaphopoda', '掘足纲'),
      taxon('Dentaliida', '角贝目'),
      taxon('Dentaliidae', '角贝科'),
      taxon('Antalis', '安塔角贝属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['欧洲', '非洲', '亚洲'],
      regions: [
        '北海南部、英吉利海峡与爱尔兰西部海域',
        '英国南岸经比斯开湾至伊比利亚半岛的东北大西洋沿岸',
        '地中海东西部、爱琴海、达达尼尔海峡与马尔马拉海',
        '突尼斯与阿尔及利亚等北非地中海沿岸',
      ],
      countries: [
        '英国',
        '爱尔兰',
        '法国',
        '比利时',
        '荷兰',
        '西班牙',
        '土耳其',
        '突尼斯',
        '阿尔及利亚',
      ],
      range:
        '分布于东大西洋和地中海的欧洲、北非海域，见于北海、英吉利海峡、爱尔兰西部、伊比利亚沿岸及地中海东西部，并延伸至爱琴海、达达尼尔海峡和马尔马拉海。',
      center: { lat: 40, lng: 3 },
    },
    habitats: [
      {
        name: '东大西洋与地中海砂泥软底',
        realm: 'marine',
        isPrimary: true,
        description:
          '穴居于砂质、泥砂质海床，宽阔前端和足向下埋入沉积物，狭窄后端靠近表面维持水流交换；文献主范围约 5 至 1000 米。',
      },
      {
        name: '碎壳与石灰藻砾底',
        realm: 'marine',
        description:
          '也见于混有碎贝壳、石灰藻砾或其他粗颗粒的软底；Roscoff 资料来自局地低潮砂地及疏浚样品，不代表全范围均可潮间带发现。',
      },
      {
        name: '外陆架至上部大陆坡软底',
        realm: 'marine',
        description:
          '目录记录可达约 1000 米，另有资料汇总至 1100 米；这是已报道深度边界，不是普通个体的典型深度或主动下潜能力。',
      },
    ],
    measurements: {
      length: {
        max: 6,
        unit: 'cm',
        note: '最大报道壳长；瓦伦西亚资料中的标本/描述范围为 20–50 mm，不代表全球成体下限。',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '底栖有孔虫',
        '沉积物颗粒间的其他微生物与微型动物',
        '偶见极小双壳类；仅有历史胃含物观察',
      ],
      description:
        '细长的摄食触丝 captacula 在沉积物中挑选有孔虫等微小食物，再送入口部，由每横列五枚齿的齿舌处理。有孔虫是最稳定的食性证据；历史胃含物观察还见过极小双壳类，食物比例尚缺少现代定量研究。',
    },
    activity: [
      '以长而尖、末端双叶的肌足锚定沉积物并向下掘穴',
      '足收回后伸展大量纤细 captacula，在壳周围选择有孔虫等微小食物',
      '让较窄后端靠近沉积物表面，维持呼吸、排泄与配子释放所需水流',
      '可在沉积物内有限重新定位；没有可靠的昼夜节律或移动距离资料',
    ],
    tags: [
      '海洋',
      '底栖',
      '穴居',
      '微型肉食者',
      '软体动物',
      '掘足纲',
      '东大西洋',
      '地中海',
      'captacula',
    ],
    summary:
      '普通角贝生活在东大西洋和地中海的砂泥海床中。它有一枚两端开放的弯管壳，用足掘穴，再伸出细长触丝搜集有孔虫等微小食物。',
    description:
      '普通角贝把最长约 6 厘米的白色弯管壳斜埋进砂泥，宽阔前端朝下，狭窄后端靠近海床表面。足伸出并锚定后，把身体拉进沉积物；足收回时，细长、末端膨大的摄食触丝 captacula 开始搜索食物。管状外套腔与海水保持交换，外套表面承担呼吸。资料汇总的主要水深范围约 5 至 1000 米，寿命和全球种群趋势仍缺少可靠数据。',
    storySections: [
      {
        key: 'one-tube-two-openings',
        label: '管壳',
        title: '一枚壳，两端都开口',
        body: '普通角贝的外壳是一枚轻微弯曲的白色管。宽阔前口容纳头、足和 captacula，狭窄后口维持外套腔与海水相通。靠近后端的细密纵纹和偶见的中央短管有助于鉴定，但只凭图片不能排除近似种。',
      },
      {
        key: 'head-down-burrow',
        label: '掘穴',
        title: '足把宽阔壳口拉进砂泥',
        body: '长而尖、末端分成两叶的足从宽阔前口伸出，扩大后锚定，再把壳体拉入沉积物。活体因此以前端朝下的姿态穴居，狭窄后端保持在靠近海床表面的位置，以便与海水交换。',
      },
      {
        key: 'captacula-microprey',
        label: '触丝',
        title: '足收回后，摄食触丝伸出',
        body: '掘穴结束后，足收回壳内，大量纤细、末端略膨大的 captacula 伸入壳周沉积物，选择有孔虫等微小食物并送向口部。历史胃含物还记录过极小双壳类，但没有现代定量食谱。足与 captacula 的交替主要来自掘足纲机制研究。',
      },
      {
        key: 'mantle-surface-respiration',
        label: '换水',
        title: '外套表面完成气体交换',
        body: '掘足类没有专门的鳃，管状外套腔的外套表面承担气体交换。水从较窄后端进入和排出，同时参与排泄与配子释放。普通角贝没有眼和成对虹吸管；目前尚无本种水流速度或耗氧率的可靠测量。',
      },
      {
        key: 'free-eggs-planktonic-young',
        label: '幼体',
        title: '本种的繁殖时序仍需研究',
        body: '普通角贝雌雄异体，旧组合 Dentalium vulgare 的精卵与受精过程已有实验研究，Roscoff 还记录当地 7 至 8 月释放游离卵。担轮幼体、后续有壳幼体和沉降序列主要来自掘足纲通用研究，不能据此给本种指定固定天数、颜色或繁殖季。',
      },
      {
        key: 'unevaluated-soft-bottom',
        label: '监测',
        title: '软底调查需要区分活体与空壳',
        body: 'IUCN 尚未检出本种全球评估，丰度和趋势也没有跨范围时间序列。AMBI 名录把它放在对扰动敏感的第一组，但这一敏感性条目未经审核，不能单独证明某种压力已使种群下降。调查需要区分活体与空壳，并把丰度、底质、有机负荷和海床扰动一同记录。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '从 Dentale vulgare 到 Antalis vulgaris',
        body: 'da Costa 在 1778 年以 Dentale vulgare 正式命名普通角贝，现用名称为 Antalis vulgaris。象牙状的管壳是角贝类容易识别的外形，但近似种之间仍需比较壳端和纵纹等细节。旧研究还使用 Dentalium vulgare 等组合，检索精卵和受精研究时需要留意这些历史名称。',
      },
    ],
    keyFacts: [
      '“普通角贝”用于 Antalis vulgaris；属名中文译法可能不同，检索分类与研究资料时宜同时查看学名。',
      '接受名为 Antalis vulgaris (da Costa, 1778)，原始组合是 Dentale vulgare da Costa, 1778。',
      '壳是单枚轻弯管，宽窄两端均开放，不是双壳类的两片壳。',
      '活体宽阔前端朝下埋入砂泥，狭窄后端靠近沉积物表面。',
      '最大报道壳长约 60 毫米，最大前端宽度约 6 毫米。',
      '文献主深度范围约 5 至 1000 米，另有资料汇总至 1100 米。',
      '用肌足掘穴；足收回后，captacula 才伸入沉积物选择有孔虫等微小食物。',
      '宽椭圆齿舌每一横列五枚齿。',
      '没有专门鳃，主要由管状外套腔的外套表面完成气体交换。',
      '雌雄异体；完整幼体时序、成熟年龄、寿命与繁殖力均缺少物种级数据。',
      'IUCN 尚未给出本种全球评估，全球种群趋势未知。',
    ],
    threats: [
      '底拖、疏浚等海床扰动可能改变穴居所需的砂泥底质；尚无本种范围级效应量',
      '有机富集、缺氧与细颗粒沉积改变是软底监测中的潜在压力；AMBI Group I 不是物种威胁评估',
      '沿岸工程和底质转换可能使局地适生软底减少；尚未证明造成全球种群下降',
      '全球丰度与趋势未知，聚合记录又混有空壳、旧名和坐标误差，限制风险判断',
    ],
    conservationActions: [
      '在固定软底站位重复开展抓斗或柱状采样，分别记录活体、带软体壳与空壳',
      '同步记录深度、粒径、贝壳碎屑、有机负荷、溶氧及海床扰动强度',
      '保存壳端结构照片、测量数据和馆藏凭证，复核与 Antalis entalis 等近似种的鉴定',
      '把丰度与体尺变化和底拖、疏浚、养殖或污染暴露配对分析，再判断局地压力',
      '建立跨东大西洋与地中海的可比时间序列后，再评估种群趋势和保护优先级',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'shell-openings',
        label: '壳口数量',
        value: '2',
        unit: '端',
        note: '单枚管壳的宽窄两端均开放，不是两片贝壳。',
      },
      {
        key: 'maximum-shell-length',
        label: '最大报道壳长',
        value: '60',
        unit: '毫米',
        note: '最大值，不代表普通成体长度。',
      },
      {
        key: 'reported-depth',
        label: '文献主深度',
        value: '5–1000',
        unit: '米',
        note: '另有资料汇总至 1100 米；不是主动下潜深度或等频分布。',
      },
      {
        key: 'radular-teeth-per-row',
        label: '每横列齿数',
        value: '5',
        unit: '枚',
        note: 'Naturalis 物种说明中的齿舌结构。',
      },
    ],
    media: {
      image:
        './images/species/common-tusk-shell/01-in-situ-buried-adult-portrait.webp',
      alt: '碎壳细砂海床中一只深埋的普通角贝，只有棕橙色狭窄后端和少量相连白色管壳露出沉积物',
      focalPoint: { x: 0.7, y: 0.56 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/common-tusk-shell/02-double-open-shell-macro.webp',
          alt: '砂粒上的普通角贝壳体近摄，一枚不透明白色轻弯管壳具有宽阔前口、狭窄后口和后端细纵纹',
          title: '两端开放的管状壳',
          caption:
            '形态重建突出单枚轻弯管壳、后端纵纹和两个壳口；AI 图不能确认纵纹数、壳长、顶端隔板或与近似种的鉴定。',
          focalPoint: { x: 0.52, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/common-tusk-shell/03-burrowing-foot-and-captacula.webp',
          alt: '砂层边缘的普通角贝前端重建中，宽阔壳口朝下，一枚尖细双叶肌足与周围多条末端膨大的纤细 captacula 分开可见',
          title: '前端足与 captacula 解剖重建',
          caption:
            '画面为了辨认结构而并置足与 captacula，不代表自然行为中两者同时充分伸展；也不能证明其数量、排列、掘穴速度或本种特有软体解剖。',
          focalPoint: { x: 0.52, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/common-tusk-shell/04-captacula-foraminifer-feeding-macro.webp',
          alt: '砂粒间数条透明毛发状 captacula 的棒状末端接触小型分室有孔虫壳体',
          title: 'captacula 搜索微型猎物',
          caption:
            '画面只显示伸展的 captacula，没有显示足；有孔虫是有依据的食物，但画面不能量化触丝数量、猎物选择率或摄食量。',
          focalPoint: { x: 0.56, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/common-tusk-shell/05-gillless-mantle-cavity-cutaway.webp',
          alt: '普通角贝轻弯双开口管壳的非血腥纵向开窗重建，内部为连续外套、简化身体和收回的前端足区，没有画出鳃或心脏',
          title: '外套表面的气体交换',
          caption:
            '剖视重建说明无专门鳃的掘足类换水机制；静态 AI 图不能证明水流方向、流速、氧耗或本种独有结构。',
          focalPoint: { x: 0.5, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/common-tusk-shell/06-benthic-grab-survey.webp',
          alt: '调查船工作台上两只戴蓝手套的手在不锈钢托盘和筛网旁分拣湿润底栖抓斗样品，其中有一枚两端开放的轻弯角贝壳',
          title: '底栖抓斗样品分拣',
          caption:
            '单枚壳不能证明活体状态、物种身份、丰度或趋势；有效监测还需站位、深度、网目、重复样本和馆藏凭证。',
          focalPoint: { x: 0.54, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...COMMON_TUSK_SHELL_SOURCES,
      {
        title: 'GBIF: Antalis vulgaris (da Costa, 1778) nomenclatural record',
        url: 'https://www.gbif.org/species/2284973',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: COMMON_TUSK_SHELL_CONTENT_DATE,
    updatedAt: COMMON_TUSK_SHELL_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
