import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE = '2026-09-01' as const;

const AFRICAN_GIANT_MILLIPEDE_CONTENT_DATE = '2026-09-01' as const;

const AFRICAN_GIANT_MILLIPEDE_SOURCES = [
  {
    title: 'MilliBase — Archispirostreptus gigas (Peters, 1855), AphiaID 947329',
    url: 'https://www.millibase.org/aphia.php?p=taxdetails&id=947329',
    kind: 'taxonomy',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'MilliBase REST — original combination and accepted synonyms of Archispirostreptus gigas',
    url: 'https://www.millibase.org/rest/AphiaSynonymsByAphiaID/947329',
    kind: 'taxonomy',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'Mwabvu et al. 2010 — Revision of the taxonomy and distribution of Archispirostreptus',
    url: 'https://doi.org/10.11646/zootaxa.2567.1.1',
    kind: 'distribution',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'Enghoff 2024 — Archispirostreptus microgigas, a new giant congener from Tanzania',
    url: 'https://doi.org/10.11646/zootaxa.5437.3.7',
    kind: 'taxonomy',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'Rudolf, Hamer & Hochkirch 2021 — IUCN Red List assessment of Archispirostreptus gigas',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T103866629A103877116.en',
    kind: 'conservation',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'Šustr et al. 2013 — The giant African millipede as an ecophysiological model species',
    url: 'https://www.aszb.cz/77-145/77-145.pdf',
    kind: 'general',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'Hembree 2009 — Neoichnology of burrowing millipedes',
    url: 'https://doi.org/10.2110/palo.2008.p08-098r',
    kind: 'ecology',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'Moresco, Minelli & Moretto 2004 — Direct observations of Giant African Millipede mating behaviour',
    url: 'https://www.esapolis.eu/wp-content/uploads/2024/08/2004-Moretto-poster-African-Giant-Millipede-Butterfly-Arc.pdf',
    kind: 'ecology',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'Šustr et al. 2019 — Comparative study of digestive enzymes in two millipede species',
    url: 'https://doi.org/10.1016/j.cbpb.2019.110388',
    kind: 'ecology',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'Horváthová et al. 2021 — Methanogenesis in tropical millipede digestive tracts',
    url: 'https://doi.org/10.1128/AEM.00614-21',
    kind: 'ecology',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'Wood 1974 — Toluquinone and 2-methoxy-3-methylbenzoquinone in African millipede defensive secretions',
    url: 'https://doi.org/10.1093/aesa/67.6.988',
    kind: 'ecology',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'MedlinePlus Medical Encyclopedia — Millipede toxin',
    url: 'https://medlineplus.gov/ency/article/002846.htm',
    kind: 'general',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'Oregon Zoo — Giant African millipede',
    url: 'https://www.oregonzoo.org/animals/giant-african-millipede',
    kind: 'general',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'San Diego Zoo Animals & Plants — Giant African Millipede',
    url: 'https://animals.sandiegozoo.org/animals/giant-african-millipede',
    kind: 'general',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'Delaney et al. 2023 — Retrospective pathology review of 69 zoo-housed Archispirostreptus gigas',
    url: 'https://doi.org/10.1177/03009858231182605',
    kind: 'general',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: '张国庆等 2018 — 陆地生态系统中马陆的生态功能',
    url: 'https://doi.org/10.17520/biods.2018086',
    kind: 'general',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: '《生命科学》2011 — 倍足纲异蛩科 Spirostreptidae 的中文用名实例',
    url: 'https://lifescience.sinh.ac.cn/webadmin/upload/20111106.pdf',
    kind: 'taxonomy',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
  {
    title: 'CITES Secretariat — Checklist of CITES Species',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: AFRICAN_GIANT_MILLIPEDE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-archispirostreptus-gigas',
    slug: 'african-giant-millipede',
    names: {
      zh: '非洲巨人马陆',
      en: 'Giant African Millipede',
      aliases: [
        '非洲巨马陆',
        '非洲巨型马陆',
        'African Giant Millipede',
        'Giant Black Millipede',
      ],
    },
    scientificName: 'Archispirostreptus gigas',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Diplopoda', '倍足纲'),
      taxon('Spirostreptida', '异蛩目'),
      taxon('Spirostreptidae', '异蛩科'),
      taxon('Archispirostreptus', '非洲巨马陆属'),
    ),
    conservation: conservation('LC', 'unknown', 2021),
    distribution: {
      realms: ['terrestrial'],
      continents: ['非洲'],
      regions: [
        '非洲东部沿岸低地',
        '肯尼亚 Tsavo 与 Ngaia Forest',
        '莫桑比克 Tete',
        '坦桑尼亚与 Zanzibar',
        '南非 Limpopo 省 Kruger 国家公园北部',
      ],
      countries: ['肯尼亚', '莫桑比克', '索马里', '南非', '坦桑尼亚'],
      range:
        '沿非洲东部和东南部展开，从索马里经肯尼亚、坦桑尼亚与 Zanzibar 到莫桑比克，并延至南非 Limpopo 省。许多国家只有少量或低精度地点，地图不代表连续占域；综述称本种多见于低地且很少高于 1,000 米，但这不是完整海拔包络。',
      center: { lat: -4.5, lng: 39.0 },
    },
    habitats: [
      {
        name: '东非沿岸低地森林落叶层',
        realm: 'terrestrial',
        description:
          '已知沿岸地点主要与森林相连；个体利用落叶、腐木、石下和疏松有机表土。',
        isPrimary: true,
      },
      {
        name: '热带或亚热带干林与有树海岸生境',
        realm: 'terrestrial',
        description:
          'IUCN 将热带或亚热带干林列为适生生境，综述也记录有树的沿海环境；本种不是潮湿雨林专性动物。',
      },
      {
        name: 'mopane 玄武岩灌丛与干旱稀树生境',
        realm: 'terrestrial',
        description:
          '南非记录来自 玄武岩土上的豆科乔木灌丛（mopane basalt shrubland）；其他稀树草原利用仍缺少物种级量化。',
      },
    ],
    measurements: {
      length: {
        min: 178,
        max: 260,
        unit: 'mm',
        note: '178—260 毫米是 2010 年分类修订所检查材料的体长跨度，不是所有成体的典型范围或物种硬上限；综述另汇集过 130—320 毫米的饲养及二手记录。',
      },
    },
    diet: {
      types: ['detritivore'],
      foods: ['腐烂落叶与其他植物碎屑', '腐木和软化木质', '落果'],
      description:
        '野外食物以腐烂植物质、落叶、腐木和落果为主。圈养个体会取食新鲜蔬果，但这不是野外主食证据；肠道检出多类消化酶也不能据此推导食谱比例或主动捕食。',
    },
    activity: [
      '主要在夜间于落叶和腐木间活动，但现有证据不支持写成严格夜行',
      '在石下、林下碎屑和浅土中隐蔽',
      '受控实验中以圆柱形身体压实周围沉积物，形成弯曲隧道',
      '高黏土比例、土体压实和水饱和会抑制实验条件下的掘洞',
      '受扰时把身体卷成紧密螺旋，并可能从体侧臭孔释放防御液',
      '幼体随蜕皮增加躯干环、步足和单眼列',
    ],
    tags: [
      '倍足纲首次收录',
      '异蛩目',
      '异蛩科',
      '非洲东部沿岸',
      '陆生腐食者',
      '主要夜行',
      '掘土',
      '双体节',
      '盘卷防御',
      '苯醌防御液',
      '肠道产甲烷',
      'IUCN 无危',
      '种群趋势未知',
    ],
    summary:
      '非洲巨人马陆是非洲东部沿岸的大型腐食性倍足动物，多数躯干双体节各有两对步足；它在夜间处理落叶和腐木，受扰时卷成螺旋并可能释放苯醌防御液。',
    description:
      '非洲巨人马陆是异蛩科非洲巨马陆属的大型陆生腐食者。2010 年修订检查的材料长 178 至 260 毫米、有 62 至 70 个躯干环；颜色和体型不足以定种，可靠鉴别依赖成年雄性第七躯干环的生殖肢。它摄食腐烂落叶、腐木和落果，肠道酶与缺氧微生物参与有机质转化；受控实验还显示它会以身体压实疏松土壤来形成隧道。IUCN 在 2021 年发布的评估中把本种列为无危，但全球种群大小和趋势未知，国际宠物贸易的野采规模与影响也未知。',
    storySections: [
      {
        key: 'name-in-parentheses',
        label: '名字的括号',
        title: '1855 年，它还不在今天这个属',
        body: 'Peters 在 1855 年以 Spirostreptus gigas 命名本种，后来分类学家把它转入 Archispirostreptus。现名 Archispirostreptus gigas (Peters, 1855) 中的括号记录了这次属级变动。',
      },
      {
        key: 'rings-and-leg-pairs',
        label: '多环身体',
        title: '两对步足，重复在多数躯干环上',
        body: '修订材料有 62 至 70 个躯干环，多数双体节各有两对步足。前端和末端存在例外，足数还会随蜕皮变化；“千足虫”不是足数承诺，可靠种级鉴定更依赖成年雄性生殖肢。',
      },
      {
        key: 'night-and-loose-soil',
        label: '夜与土',
        title: '用身体压实疏松土壤形成隧道',
        body: '它主要在夜间活动。掘土实验显示，圆柱形身体通过压实周围沉积物形成弯曲隧道；高黏土、压实和水饱和都会抑制这一行为。受控实验揭示了机制，却没有规定每条野外隧道的形状或用途。',
      },
      {
        key: 'detritivore-and-gut',
        label: '腐食者',
        title: '消化酶与肠道微生物处理腐烂植物',
        body: '它摄食腐烂落叶、腐木和落果，肠道酶与缺氧微生物继续处理复杂底物。圈养实验测到后肠产甲烷过程，但没有测出野外每只个体的年处理量或对区域甲烷预算的贡献。',
      },
      {
        key: 'coil-and-benzoquinones',
        label: '防御螺旋',
        title: '盘卷后还可释放苯醌防御液',
        body: '受扰时，它先把头和步足收进紧密螺旋；压力持续时，体侧臭孔可释放防御液。物种级化学分析鉴定出甲基对苯醌和 2-甲氧基-3-甲基-1,4-苯醌，不支持把本种写成氰化物防御。',
      },
      {
        key: 'mating-molting-life-cycle',
        label: '从三对足开始',
        title: '生命周期里，可靠数字并不多',
        body: '圈养资料中的初生阶段近白色，只有三对步足，后来随蜕皮增加躯干环。一次录像交配的一轮四阶段过程约 35 分钟；孵化、成熟和寿命数字主要来自饲养资料，不能写成野外常数。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1855 年的 Spirostreptus gigas',
        body: '1855 年，Peters 以 Spirostreptus gigas 命名非洲巨人马陆，后来它被转入 Archispirostreptus 属。现名作者年份外的括号记录了这次属级变动。俗称“千足虫”描述密集步足，足数实际会随蜕皮改变，也不能代替成年雄性生殖肢的种级鉴定。',
      },
    ],
    keyFacts: [
      '现行接受名是 Archispirostreptus gigas (Peters, 1855)。',
      'Peters 最初用 Spirostreptus gigas 命名本种，作者年份的括号表示它后来转入另一属。',
      '它属于节肢动物门、倍足纲、异蛩目、异蛩科和 Archispirostreptus 属。',
      '中文属名有“非洲巨马陆属”的译法，尚不是统一标准名。',
      'IUCN 接受肯尼亚、莫桑比克、索马里、南非和坦桑尼亚五个原生、现存、定居国家。',
      '桑给巴尔（Zanzibar）是坦桑尼亚的地区记录。',
      '许多国家只有少量或低精度地点记录，现有资料不足以确定各地密度和连续分布边界。',
      '2010 年分类修订检查的材料体长 178 至 260 毫米、最大体宽 15 至 19 毫米。',
      '同一批修订材料记录 62 至 70 个躯干环；综述汇集的 54 至 71 环采用了更宽的资料口径。',
      '综述提到最高 320 毫米的记录，但该值不作为物种硬上限或可排序指标。',
      '活体通常为黑色至深褐色，颜色和大型体态都不足以完成种级鉴定。',
      '可靠鉴别依赖成年雄性第七躯干环的生殖肢形态。',
      '多数躯干双体节各具两对步足，前端和末端存在例外。',
      '足和躯干环会随幼体蜕皮增加，不能给本种规定一个固定总足数。',
      '本种主要夜行，但资料不支持写成白天绝不活动。',
      '受控实验中的个体通过压实周围沉积物形成弯曲隧道。',
      '高黏土比例、压实和水饱和会抑制实验条件下的掘洞。',
      '野外主食是腐烂植物质、落叶、腐木和落果，属于腐食者。',
      '圈养时取食新鲜蔬果，不能证明健康活植物是野外主食。',
      '肠道实验检测到纤维素酶等多种酶活性，但不能由此推导野外食谱比例。',
      '圈养个体的后肠存在缺氧发酵和产甲烷古菌，野外甲烷通量仍未测定。',
      '受扰时会把身体卷成紧密螺旋，让头部和腹侧步足藏在内圈。',
      '物种级分析在防御液中鉴定出甲基对苯醌和 2-甲氧基-3-甲基-1,4-苯醌。',
      '本种不靠毒咬或毒刺伤人，但防御液可能刺激皮肤和眼睛。',
      '一次圈养录像交配的一轮四阶段过程约 35 分钟，不能当作野外全种平均值。',
      '孵化期、成熟年龄和寿命主要来自饲养或二手资料，不进入可比较指标。',
      '野外繁殖季、窝卵数、幼体存活率、成年寿命和世代长度仍缺可靠物种级数据。',
      'IUCN 2021 评估为 LC，种群大小和趋势都是未知。',
      '国际宠物贸易已经存在，但野采规模、来源比例和种群影响未知。',
      'CITES 附录未列入本种不代表贸易没有影响，也不替代各国生物安全和活体运输规定。',
    ],
    threats: [
      '农业和人工林扩张造成部分干林、灌丛与落叶层生境转换，物种级影响未知',
      '住宅和城市开发造成局部自然植被转换，范围与严重度未知',
      '国际宠物贸易采集存在，但野采数量、来源比例和种群影响未知',
      '商品名误用和仅凭黑色大型外观鉴定会污染贸易与分布记录',
      '全球种群大小、趋势、AOO、EOO 和多国精确范围仍缺数据',
    ],
    conservationActions: [
      '在五个原生国家开展带凭证、坐标和微生境记录的标准化调查，优先复核历史与低精度地点',
      '用成年雄性生殖肢形态和 DNA 条形码互证馆藏、贸易与公众记录',
      '保护沿岸干林、森林落叶层、腐木、疏松有机土和 mopane 灌丛微生境',
      '记录贸易个体的国家、来源、野生或圈养状态与数量，建立可追溯数据',
      '监测种群大小和趋势，并补足生命周期、繁殖与生境需求研究',
      '公众接触时避免防御液进入眼睛或停留在皮肤，接触后及时清洗并按需寻求医疗评估',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'revision-length',
        label: '修订材料体长',
        value: '178–260',
        unit: '毫米',
        note: '2010 年修订检查材料的跨度，不是物种硬上限或成体典型区间',
      },
      {
        key: 'body-rings',
        label: '修订材料躯干环',
        value: '62–70',
        unit: '环',
        note: '同一分类修订的标本范围',
      },
      {
        key: 'leg-pairs-per-diplosegment',
        label: '多数双体节',
        value: '2',
        unit: '对步足',
        note: '前端和末端存在例外，不能据此机械计算总足数',
      },
      {
        key: 'observed-mating-pass',
        label: '一次观察交配过程',
        value: '≈35',
        unit: '分钟',
        note: '圈养录像的一轮四阶段过程，可重复，不是野外全种平均值',
      },
    ],
    media: {
      image:
        './images/species/african-giant-millipede/01-coastal-forest-adult-cover.webp',
      alt: '东非沿岸林地的落叶和腐木旁，一只完整的黑褐色非洲巨人马陆舒展身体向前爬行',
      focalPoint: { x: 0.66, y: 0.56 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/african-giant-millipede/02-cylindrical-rings-and-leg-pairs.webp',
          alt: '深色林地土面上，一只完整黑褐色马陆呈舒展姿势，连续圆柱形躯干环和腹侧密集步足清楚可见',
          title: '圆柱形躯干与密集步足',
          caption:
            'AI 生成形态重建；画面展示重复的环与步足排列，不能核验 62 至 70 环、固定总足数、双体节的每处例外或物种身份。',
          focalPoint: { x: 0.5, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/african-giant-millipede/03-decaying-leaf-and-wood-feeding.webp',
          alt: '森林地表的一只黑褐色马陆以口器接触软化褐叶边缘，旁边是一小段腐木',
          title: '接触腐叶与软化木质',
          caption:
            'AI 生成腐食情景；画面不能确认植物种类、真实摄食事件、食物比例、摄食速度、分解效率或野外处理量。',
          focalPoint: { x: 0.6, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/african-giant-millipede/04-tight-defensive-coil.webp',
          alt: '林地落叶上一只黑褐色马陆卷成连续紧密的平面螺旋，头和腹侧步足藏在内圈',
          title: '把脆弱部分收进螺旋',
          caption:
            'AI 生成防御姿态重建；画面只展示盘卷，不能证明受扰原因、分泌物释放、两种苯醌的身份或防御效果。',
          focalPoint: { x: 0.55, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/african-giant-millipede/05-juvenile-after-molt.webp',
          alt: '浅土室内一只淡色幼年马陆站在一层分离、塌陷且半透明的空蜕皮旁',
          title: '蜕皮后的淡色幼体情景',
          caption:
            'AI 生成发育重建；画面不能确认龄期、蜕皮时间、增加的环或足数、外骨骼摄食，也不证明野外固定蜕皮地点。',
          focalPoint: { x: 0.56, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/african-giant-millipede/06-night-leaf-litter-survey.webp',
          alt: '夜间林地落叶层中，一名调查者在远处拍摄前景的一只完整马陆，样方放在动物之外',
          title: '非接触夜间记录情景',
          caption:
            'AI 生成调查情景；画面不代表真实地点、标准协议、调查结果、丰度、占域或种群趋势，也没有发生捕捉或标记。',
          focalPoint: { x: 0.62, y: 0.66 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...AFRICAN_GIANT_MILLIPEDE_SOURCES,
      {
        title: 'GBIF: Archispirostreptus gigas (Peters, 1855) nomenclatural record',
        url: 'https://www.gbif.org/species/1025719',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: AFRICAN_GIANT_MILLIPEDE_CONTENT_DATE,
    updatedAt: AFRICAN_GIANT_MILLIPEDE_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
