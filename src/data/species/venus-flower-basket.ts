import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const VENUS_FLOWER_BASKET_SOURCE_DATE = '2026-08-31' as const;

const VENUS_FLOWER_BASKET_CONTENT_DATE = '2026-08-31' as const;

const VENUS_FLOWER_BASKET_SOURCES = [
  {
    title: 'WoRMS — Euplectella aspergillum Owen, 1841 (AphiaID 171897)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=171897',
    kind: 'taxonomy',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — Classification for AphiaID 171897',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/171897',
    kind: 'taxonomy',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title:
      'World Porifera Database — Euplectella aspergillum taxon list and accepted subspecies',
    url: 'https://www.marinespecies.org/aphia.php?p=taxlist&tName=Euplectella+aspergillum',
    kind: 'taxonomy',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'OBIS — Euplectella aspergillum taxon and occurrence map',
    url: 'https://obis.org/taxon/171897',
    kind: 'distribution',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'GBIF — Euplectella aspergillum accepted taxon (taxon key 5180237)',
    url: 'https://www.gbif.org/species/5180237',
    kind: 'taxonomy',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'GBIF — Occurrence search for Euplectella aspergillum',
    url: 'https://www.gbif.org/occurrence/search?taxon_key=5180237',
    kind: 'distribution',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title:
      'IUCN Red List species search — Euplectella aspergillum, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Euplectella%20aspergillum&searchType=species',
    kind: 'conservation',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title:
      'National Museum of Marine Biology and Aquarium — 阿氏偕老同穴 specimen record',
    url: 'https://helloocean.nmmba.gov.tw/nmmba_front/SpecimenDetail.aspx?id=64686',
    kind: 'taxonomy',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title:
      'Tabachnick, Janussen & Menschenina 2008 — Revision of Euplectella aspergillum',
    url: 'https://doi.org/10.11646/zootaxa.1866.1.3',
    kind: 'taxonomy',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title:
      'Weaver et al. 2007 — Hierarchical assembly of the siliceous skeletal lattice',
    url: 'https://doi.org/10.1016/j.jsb.2006.10.027',
    kind: 'general',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Aizenberg et al. 2004 — Biological glass fibers and basalia dimensions',
    url: 'https://doi.org/10.1073/pnas.0307843101',
    kind: 'general',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Monn et al. 2015 — Internal architecture of laminated anchor spicules',
    url: 'https://doi.org/10.1073/pnas.1415502112',
    kind: 'general',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Fernandes et al. 2021 — Lattice architecture and material efficiency',
    url: 'https://doi.org/10.1038/s41563-020-0798-1',
    kind: 'general',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Falcucci et al. 2021 — Extreme flow simulations reveal skeletal adaptations',
    url: 'https://doi.org/10.1038/s41586-021-03658-1',
    kind: 'ecology',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Falcucci et al. 2024 — Passive ventilation in Euplectella aspergillum',
    url: 'https://doi.org/10.1103/PhysRevLett.132.208402',
    kind: 'ecology',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'NOAA Ocean Exploration — What are glass sponges?',
    url: 'https://oceanexplorer.noaa.gov/ocean-fact/glass-sponges/',
    kind: 'general',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title:
      'Schulze 1880 — Structure and arrangement of the soft parts in Euplectella aspergillum',
    url: 'https://doi.org/10.1017/S0080456800026181',
    kind: 'general',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Leys & Ereskovsky 2006 — Embryogenesis and larval differentiation in sponges',
    url: 'https://doi.org/10.1139/z05-170',
    kind: 'ecology',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Saito & Komai 2008 — Review of Spongicola and Paraspongicola',
    url: 'https://research.nhm.org/pdfs/31805/31805.pdf',
    kind: 'ecology',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title:
      'University of St Andrews Museums — Euplectella aspergillum with commensal prawns',
    url: 'https://collections.st-andrews.ac.uk/item/euplectella-aspergillum-owen/1016966',
    kind: 'ecology',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-euplectella-aspergillum',
    slug: 'venus-flower-basket',
    names: {
      zh: '阿氏偕老同穴',
      en: "Venus' Flower Basket",
      aliases: ['维纳斯花篮'],
    },
    scientificName: 'Euplectella aspergillum',
    taxonomy: animalTaxonomy(
      taxon('Porifera', '多孔动物门'),
      taxon('Hexactinellida', '六放海绵纲'),
      taxon('Lyssacinosida', '松骨海绵目'),
      taxon('Euplectellidae', '偕老同穴科'),
      taxon('Euplectella', '偕老同穴属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['亚洲', '大洋洲'],
      regions: [
        '菲律宾宿务与吕宋外海',
        '安达曼群岛与孟加拉湾东缘',
        '砂拉越西岸外海与巽他陆架',
        '西澳大利亚西北部陆架与陆坡',
      ],
      countries: ['菲律宾', '印度', '马来西亚', '澳大利亚'],
      range:
        '按 2008 年四亚种修订，本种分布于印度-西太平洋的菲律宾、安达曼群岛、马来西亚砂拉越西岸外海和巽他陆架，以及西澳大利亚西北部。论文把 indonesica 模式站记作 Indonesian Archipelago，但给出的 4°31′N、112°55′E 坐标按现代国界落在砂拉越外海。该修订所列凭证样本形成约 85 至 741 米的深度包络；聚合门户中的更宽范围混有旧鉴定、近似种和待复核记录，不能直接并入确认分布，也不能把这组端点视为生理极限。',
      center: { lat: 3, lng: 121 },
    },
    habitats: [
      {
        name: '印度-西太平洋陆架外缘与陆坡软底',
        realm: 'marine',
        description:
          '修订凭证来自菲律宾、安达曼群岛、砂拉越西岸外海与西澳大利亚西北部的软沉积海底；海绵以细长锚骨针束固定在粉砂或软泥中，而不是胶结在岩石上。',
        isPrimary: true,
      },
      {
        name: '近底层水流环境',
        realm: 'marine',
        description:
          '直立筒体处在海床上方的底层水流中，体壁水沟系统过滤悬浮微粒。骨架如何组织横向来流主要由数值模拟解释，现有研究没有给出可通用于野外的固定流速或清除率。',
      },
    ],
    measurements: {},
    diet: {
      types: ['filter-feeder'],
      foods: ['细菌与其他微生物', '微型浮游生物', '悬浮有机颗粒'],
      description:
        '海水经体壁的入水系统进入内部，微小颗粒被滤取，滤过水再从顶部筛板区域排出。玻璃海绵类群资料支持这套滤食方式，但本种的野外食物比例、原位清除率与不同流况下的摄食效率仍缺少可归一化数据。',
    },
    activity: [
      '让海水穿过带活组织的体壁水沟系统，截留细菌、微型浮游生物与有机颗粒',
      '数值模拟显示纵横格架、双向斜撑和外部螺旋棱可承受并重新组织近底层水流',
      '由柔性 basalia 锚骨针束插入软沉积物，维持直立而不依赖硬底胶结',
      '部分标本的内腔可容纳 Spongicola venustus 共栖虾，但入住数量与关系效应并不固定',
      '本种已有历史生殖阶段记录，性系统、完整胚胎与幼体过程、季节和寿命仍未知',
    ],
    tags: [
      '玻璃海绵',
      '六放海绵纲',
      '水合硅质骨架',
      '方格与双斜撑',
      '终端筛板',
      '锚骨针',
      '软底锚定',
      '深水底栖',
      '滤食',
      '共栖虾记录',
      '四个亚种',
      'IUCN 未评估',
    ],
    summary:
      '一种以水合硅质格架支起活组织的印度-西太平洋玻璃海绵：顶部筛板封住筒口，基部细长锚骨针插入软泥，体壁持续过滤海水。',
    description:
      '阿氏偕老同穴是多孔动物门六放海绵纲的玻璃海绵。活体有筒状身体，骨架外覆盖薄层组织，依靠过滤海水取得食物；纵横格架、双向斜撑、螺旋棱和顶部筛板共同构成多级水合硅质骨架，基部柔性锚骨针束埋入软泥。2008 年修订接受 4 个地理亚种，并以凭证把范围锚定在菲律宾、安达曼群岛、砂拉越西岸外海和西澳大利亚西北部。共栖虾确有入住与一雌一雄同居的标本实例，但这不能证明每个海绵都有一对虾、终身单配或互利。IUCN 当前尚未评估本种；NE 只表示缺少全球评估，不代表安全或种群稳定。',
    storySections: [
      {
        key: 'living-glass-lattice',
        label: '活的玻璃格架',
        title: '活组织覆盖硅质格架',
        body: '常见馆藏和装饰标本去除了软组织，只留下洁白硅质骨架。活体的薄层组织覆盖并连接格架，整体更接近半透明象牙灰至浅米褐。纵横骨针束搭出方格，双向斜撑与外部螺旋棱继续加固筒体，顶部则由多孔筛板跨过开口。',
      },
      {
        key: 'barbed-soft-sediment-anchor',
        label: '埋进软泥',
        title: '细长锚骨针固定在软泥中',
        body: '基部锚骨针（basalia）细长而有层片，末端的小刺向后弯曲，许多根共同插入粉砂或软泥。Aizenberg 等研究样本中的锚骨针一般长 5 至 15 厘米，这不是海绵体长，也不是每一根的固定尺寸。锚骨针以细刺和成束排列固定在软底。',
      },
      {
        key: 'passive-flow-active-filtering',
        label: '格架里的水流',
        title: '数值模拟解释骨架中的水流',
        body: '数值模拟显示，横向低速来流经过方格、斜撑和螺旋结构后，可减轻局部水动力应力，并在筒内形成相干回流和朝顶部筛板组织的路径。这解释了一种潜在的通风优势，却不是野外泵水、摄食量或清除率的直接测量，也不能证明任何流况下都只靠被动水流。',
      },
      {
        key: 'reproductive-evidence-gap',
        label: '生活史空白',
        title: '完整繁殖过程仍缺资料',
        body: '1880 年的软组织研究曾记录本种的生殖阶段，但玻璃海绵较完整的配子、胚胎和幼体序列来自其他物种。现有证据不足以确定阿氏偕老同穴的性系统、受精和育幼方式、幼体细节、繁殖季、性成熟年龄或寿命。',
      },
      {
        key: 'shrimp-association-with-boundaries',
        label: '虾的入住记录',
        title: '有一雄一雌共栖虾的馆藏记录',
        body: 'Spongicola venustus 确曾从本种内腔采得，Challenger 宿务外海记录和一件馆藏也保留了一雄一雌同处一个海绵的实例。不过，这种虾还使用其他玻璃海绵宿主，入住数量并不恒定。现有资料没有证明每个海绵都有两只虾、它们终身排他配对，或虾与宿主之间存在已量化的互利效应。',
      },
      {
        key: 'four-subspecies-messy-map',
        label: '四亚种地图',
        title: '修订收紧了范围，也暴露了旧鉴定的混乱',
        body: '2008 年修订接受指名亚种、regalis、indonesica 与 australica 共 4 个亚种，把凭证分布锚定在印度-西太平洋，并给出约 85 至 741 米的样本深度包络。修订同时把日本和西印度洋的部分旧记录转给近似种，因此门户地图上更浅、更深或远离确认区域的点位必须回到标本、骨针和采集信息复核。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1841 年命名，后由骨针重新修订',
        body: 'Owen 于 1841 年命名阿氏偕老同穴，现用学名为 Euplectella aspergillum。2008 年研究重新检查骨针与凭证材料，接受四个地理亚种，并纠正了部分日本与西印度洋旧记录。俗名“偕老同穴”常让人联想到一对共栖虾，馆藏确有一雌一雄同居实例，尚不能证明它们普遍终身配对。',
      },
    ],
    keyFacts: [
      '当前接受名为 Euplectella aspergillum Owen, 1841，WoRMS AphiaID 是 171897。',
      '本种属于多孔动物门、六放海绵纲、松骨海绵目、偕老同穴科和偕老同穴属。',
      '2008 年修订接受指名亚种、regalis、indonesica 与 australica 共 4 个地理亚种。',
      '修订凭证的深度包络约为 85 至 741 米，不是全种生理极限。',
      '修订材料中的 indonesica 完整模式体长为 190 毫米，australica 完整个体为 110 和 150 毫米，另有一件 260 毫米上部残片；不同亚种与残片不能合并成全种典型或绝对最大体长。',
      'OBIS 与 GBIF 的自动极值混有旧鉴定、亚种和近似种，不能代替标本修订。',
      '活体带有薄层软组织，博物馆常见的洁白花篮是去除组织后的骨架。',
      '纵横方格、双向斜撑、外部螺旋棱和终端筛板共同形成筒状骨架。',
      '从纳米颗粒与有机夹层到厘米级筒体，骨架可分析为至少 6 个嵌套层级。',
      '研究样本中的 basalia 锚骨针一般长 5 至 15 厘米、直径 40 至 70 微米。',
      '锚骨针的离体导光实验没有证明本种在野外用它照明、通信、捕食或吸引虾。',
      '海绵从水中滤取细菌、微型浮游生物与悬浮有机颗粒。',
      '骨架组织水流与减小局部应力的结论来自数值模拟，不是原位摄食率实测。',
      'Spongicola venustus 有入住本种的记录，也有一雄一雌同居的标本实例。',
      '一对虾的实例不能证明普遍占居、终身单配、永久困住或互利共生。',
      '本种有历史生殖阶段记录，但完整性系统、胚胎、幼体、繁殖季和寿命仍未知。',
      'IUCN 尚未完成本种全球评估；NE 不代表无危、数量稳定或没有威胁。',
    ],
    threats: [
      'IUCN 尚未评估，全球种群大小、趋势、世代时间、成熟年龄和关键繁殖区均未知',
      '底拖网、取样器和其他底接触活动可能折断固定在软泥中的脆弱筒体，但物种级影响尚未量化',
      '沉积物扰动与颗粒输入可能改变锚定界面和滤食水流，现有资料不能换算成全球风险等级',
      '旧鉴定、残缺标本和缺少骨针显微复核会制造虚假的范围扩张或收缩信号',
      '单次 ROV 影像难以确认亚种、检出率、个体数与长期趋势',
      '破坏性采集会同时移走海绵、活组织、锚定结构和宿主相关动物，削弱后续复核能力',
    ],
    conservationActions: [
      '用保持距离的 ROV 影像重复记录个体、深度、底质、水流方向与沉积环境',
      '建立固定样带和可校准的影像协议，区分检出变化、鉴定变化与真实种群趋势',
      '必要采样应最小化，并同时保存凭证骨架、骨针显微切片、组织和 DNA',
      '让亚种和近似种鉴定回连馆藏凭证、采集坐标、深度与鉴定历史',
      '将共栖虾单独编号，记录数量、性别与宿主身份，不用“一对虾”替代标准化计数',
      '在确认栖息地评估底接触活动与沉积物扰动，避免把潜在威胁直接写成已证实种群下降',
      '补齐分布、丰度、繁殖与趋势资料，为未来 IUCN 全球评估提供可复核证据',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'revision-supported-depth',
        label: '修订样本深度包络',
        value: '85—741',
        unit: 'm',
        note: '2008 年四亚种修订所列浅、深端点；不是生理极限，也未采用聚合门户中的未复核极值。',
      },
      {
        key: 'anchor-spicule-length',
        label: '研究样本锚骨针长度',
        value: '5—15',
        unit: 'cm',
        note: 'Aizenberg 等 2004 年研究样本的一般范围；不是每根固定长度，也不是海绵体长。',
      },
      {
        key: 'skeletal-hierarchy',
        label: '骨架结构层级',
        value: '≥6',
        unit: '级',
        note: 'Weaver 等 2007 年从纳米到厘米尺度划分的分析层级，不是分类阶元。',
      },
      {
        key: 'recognized-subspecies',
        label: '当前接受亚种',
        value: '4',
        unit: '个',
        note: '指名亚种、regalis、indonesica 与 australica；采用 WoRMS 当前词尾拼法。',
      },
    ],
    media: {
      image:
        './images/species/venus-flower-basket/01-soft-sediment-living-cover.webp',
      alt: '印度-西太平洋深水软泥上，一只完整的浅象牙色阿氏偕老同穴直立，薄组织覆盖方格和斜撑骨架，顶部筛板清晰可见',
      focalPoint: { x: 0.69, y: 0.51 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/venus-flower-basket/02-terminal-sieve-lattice-diagnostic.webp',
          alt: '阿氏偕老同穴上部斜视近景展示封住筒口的多孔筛板、纵横方格、双向斜撑和外部隆起棱',
          title: '筛板与加固格架',
          caption:
            'AI生成科学形态情景重建；宏观筛板、方格、斜撑和外棱可解释形态，却不能代替骨针显微诊断、分类检索或凭证标本。',
          focalPoint: { x: 0.47, y: 0.43 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/venus-flower-basket/03-basalia-soft-sediment-anchoring.webp',
          alt: '阿氏偕老同穴狭窄基部伸出少量可见的发丝状锚骨针，大部分纤维在不同角度埋入灰褐色软泥',
          title: '埋进软泥的锚骨针束',
          caption:
            'AI生成科学锚定情景重建；画面没有呈现微米级刺形、实际埋深、拉脱强度或测得的锚骨针长度。',
          focalPoint: { x: 0.62, y: 0.61 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/venus-flower-basket/04-side-inflow-sieve-outflow-visualization.webp',
          alt: '稀疏微粒从阿氏偕老同穴体壁侧面进入，在筒内形成微弱上升路径并从顶部筛板区域排出',
          title: '侧壁进水与筛板出水',
          caption:
            'AI生成科学水流情景重建；微粒路径用于解释数值模拟中的水流组织，不是原位泵水、流速、滤食效率或食物捕获测量。',
          focalPoint: { x: 0.64, y: 0.46 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/venus-flower-basket/05-resident-shrimp-pair-context.webp',
          alt: '一只带顶部筛板的阿氏偕老同穴内腔中，恰有两只分开的浅色红纹共栖虾位于格架后方',
          title: '一雄一雌同居记录的重建',
          caption:
            'AI生成科学共现情景重建；历史实例不能证明每个海绵都住两只虾、终身单配、永久受困，或存在已验证的互利机制。',
          focalPoint: { x: 0.58, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/venus-flower-basket/06-rov-noncontact-monitoring.webp',
          alt: '一台紧凑无机械臂水下相机与一只带筛板的完整阿氏偕老同穴保持清楚距离，在软泥海床上进行非接触观察',
          title: '保持距离的影像监测',
          caption:
            'AI生成科学监测情景重建；单次通用影像不能确认亚种、个体数、体尺、地点或种群趋势，鉴定仍需地点、深度和骨针凭证。',
          focalPoint: { x: 0.68, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: VENUS_FLOWER_BASKET_SOURCES,
    featured: true,
    publishedAt: VENUS_FLOWER_BASKET_CONTENT_DATE,
    updatedAt: VENUS_FLOWER_BASKET_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
