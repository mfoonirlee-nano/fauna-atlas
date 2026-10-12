import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const ARCTIC_TERN_SOURCE_DATE = '2026-08-26' as const;

const ARCTIC_TERN_CONTENT_DATE = '2026-08-26' as const;

const ARCTIC_TERN_SOURCES = [
  {
    title: 'IOC World Bird List v15.2: Gulls, terns, skimmers',
    url: 'https://www.worldbirdnames.org/new/bow/gulls/',
    kind: 'taxonomy',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'IOC World Bird List v15.2: Master and multilingual lists',
    url: 'https://www.worldbirdnames.org/new/ioc-lists/master-list-2/',
    kind: 'taxonomy',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Sterna paradisaea, 2018 global assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22694629A132065195.en',
    kind: 'conservation',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Arctic Tern Sterna paradisaea',
    url: 'https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea',
    kind: 'distribution',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'Egevang et al. 2010: Tracking of Arctic terns reveals longest animal migration',
    url: 'https://doi.org/10.1073/pnas.0909493107',
    kind: 'ecology',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'BTO BirdFacts: Arctic Tern',
    url: 'https://www.bto.org/learn/about-birds/birdfacts/arctic-tern',
    kind: 'general',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'Cornell All About Birds: Arctic Tern identification',
    url: 'https://www.allaboutbirds.org/guide/Arctic_Tern/id',
    kind: 'general',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'Norwegian Polar Institute: Arctic Tern life history',
    url: 'https://npolar.no/en/species/arctic-tern/',
    kind: 'ecology',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'Fijn et al. 2013: Dutch Arctic Terns travel 90,000 km',
    url: 'https://doi.org/10.5253/078.101.0102',
    kind: 'ecology',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'Alerstam et al. 2019: Migration routes of Baltic Arctic Terns',
    url: 'https://doi.org/10.1002/ece3.5459',
    kind: 'ecology',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'Wong et al. 2021: Global migration patterns of Arctic Terns',
    url: 'https://doi.org/10.3354/meps13779',
    kind: 'distribution',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'CMS Appendices I and II, effective 27 June 2026',
    url: 'https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf',
    kind: 'conservation',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'AEWA MOP9: Table 1 population listing for Arctic Tern',
    url: 'https://www.unep-aewa.org/sites/default/files/document/aewa_mop9_16_proposed_amendments.pdf',
    kind: 'conservation',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-sterna-paradisaea',
    slug: 'arctic-tern',
    names: {
      zh: '北极燕鸥',
      en: 'Arctic Tern',
      aliases: ['北極燕鷗'],
    },
    scientificName: 'Sterna paradisaea',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Charadriiformes', '鸻形目'),
      taxon('Laridae', '鸥科'),
      taxon('Sterna', '燕鸥属'),
    ),
    conservation: conservation('LC', 'decreasing', 2018),
    distribution: {
      realms: ['marine', 'terrestrial', 'freshwater'],
      continents: ['亚洲', '欧洲', '北美洲', '南美洲', '非洲', '大洋洲', '南极洲'],
      regions: [
        '环北极与亚北极海岸及岛屿繁殖区',
        '北欧、俄罗斯北部与北大西洋繁殖区',
        '阿拉斯加、加拿大与美国东北部繁殖区',
        '大西洋、太平洋及印度洋迁徙通道',
        '南大洋与南极浮冰缘非繁殖区',
      ],
      countries: [
        '加拿大',
        '美国',
        '格陵兰',
        '冰岛',
        '英国',
        '爱尔兰',
        '挪威',
        '瑞典',
        '芬兰',
        '丹麦',
        '俄罗斯',
        '南非',
        '阿根廷',
        '智利',
        '澳大利亚',
        '新西兰',
      ],
      range:
        '在环北极与亚北极海岸、岛屿、苔原及部分内陆淡水地繁殖；非繁殖季跨越大洋，在南大洋活动至南极浮冰缘。它的年度活动经过七大洲邻近海域，常规分布主要在海岸和海上。国家列表只列代表性繁殖范围和迁徙通道，不是完整名录。',
    },
    habitats: [
      {
        name: '近岸、陆架与开阔海洋表层水域',
        realm: 'marine',
        description:
          '主要觅食生境；繁殖期多利用近岸浅海和潮流区，迁徙及非繁殖期也在锋面、上升流和南极海冰边缘寻找聚集到表层的猎物。',
        isPrimary: true,
      },
      {
        name: '海岸砾滩、沙洲、岩岛与低矮苔原',
        realm: 'terrestrial',
        description:
          '开阔、低植被或裸露地面提供群落巢址；巢通常只是砾石、沙地、苔藓或短草间的浅刮巢，不是树巢。',
      },
      {
        name: '北方湖泊、河流岛、潟湖与泥炭湿地',
        realm: 'freshwater',
        description:
          '部分种群在内陆湖岛、河岸和湿苔原繁殖并在淡水觅食，因此海鸟标签不能概括其全部繁殖生境。',
      },
    ],
    measurements: {
      length: {
        min: 28,
        max: 39,
        unit: 'cm',
        note: 'Cornell 两性共同参考范围',
      },
      weight: {
        min: 90,
        max: 120,
        unit: 'g',
        note: 'Cornell 两性共同参考范围',
      },
      wingspan: {
        min: 65,
        max: 75,
        unit: 'cm',
        note: 'Cornell 两性共同参考范围',
      },
    },
    diet: {
      types: ['piscivore', 'carnivore'],
      foods: [
        '玉筋鱼等小型鱼类',
        '鲱鱼、幼鳕和胡瓜鱼',
        '磷虾与其他甲壳类',
        '浮游动物',
        '软体动物',
        '水生和陆生昆虫',
      ],
      description:
        '以小型鱼类为主，也取食甲壳类、浮游动物、软体动物和昆虫；多从表层拾取或以短促浅水俯冲捕食。食谱随海域、季节和猎物供应改变。',
    },
    activity: [
      '完整迁徙型物种，繁殖地、迁徙通道和南大洋非繁殖区随季节转换',
      '日间多在近水面飞行、悬停、表层拾食或作短促浅水俯冲',
      '全年常群居，繁殖群落会集体驱赶靠近巢区的潜在捕食者',
      '迁徙路线、停歇区和航程随繁殖群落、个体与年份改变',
    ],
    tags: [
      '环北极繁殖',
      '南大洋非繁殖',
      '鸻形目',
      '海鸟',
      '完整迁徙型',
      '浅水俯冲',
      '地面浅刮巢',
      'IUCN 无危',
      '全球趋势下降',
      'CMS 附录 II（大西洋种群）',
      'AEWA（西欧亚繁殖／大西洋非繁殖种群）',
    ],
    summary:
      '北极燕鸥是在环北极和亚北极繁殖、远迁至南大洋和南极浮冰缘的完整迁徙型海鸟。11 只格陵兰和冰岛追踪样本的年度路线平均 70,900 千米，但个体、群落和研究方法之间差异很大。',
    description:
      '北极燕鸥的学名是 Sterna paradisaea，现行分类不划分亚种。繁殖成鸟有完整黑帽、红色喙、红色短腿、长尖翼和长而深分叉的尾；近似种鉴定仍要结合羽色、翼纹、比例、年龄和光线。它在北半球高纬繁殖，随后越洋进入南大洋，是完整迁徙型物种。Egevang 等取得 11 只格陵兰和冰岛繁殖鸟的迁徙追踪资料，平均 70,900 千米，个体范围 59,500 至 81,600 千米；北返约 40 天，南下约 93 天，这组数据不能代表全种、所有个体或固定航程。每窝通常一至两枚卵，偶尔三枚，孵化期约21至22天。IUCN/BirdLife 2018 全球评估为 LC（无危）、趋势下降；LC 不代表种群稳定或各地安全，部分繁殖地已有群落下降、繁殖失败或弃巢记录。',
    storySections: [
      {
        key: 'two-polar-summers',
        label: '年度循环',
        title: '在南北两极海域利用夏季资源',
        body: '北极燕鸥在环北极与亚北极繁殖，离巢季后跨越大洋，在南大洋活动到南极浮冰缘。它利用两端高纬海域的季节性生产力，并不在南极大陆筑巢。',
      },
      {
        key: 'flight-field-marks',
        label: '飞行鉴别',
        title: '短腿、长尾与透明翼尖',
        body: '繁殖成鸟有红色喙、红色短腿、完整黑帽和长而深分叉的尾。长尖翼适合持续海上飞行，但年龄、磨损、光线和姿势都会改变观感，单一特征不能可靠排除近似种。',
      },
      {
        key: 'route-diversity',
        label: '追踪证据',
        title: '不同群落和个体的路线各异',
        body: '11 只格陵兰和冰岛繁殖鸟的年度路线平均 70,900 千米，范围 59,500 至 81,600 千米；荷兰、波罗的海与北美样本又呈现不同距离和走廊。这些结果揭示路线多样性，不能外推为每只鸟的固定里程。',
      },
      {
        key: 'surface-foraging',
        label: '海面觅食',
        title: '在鱼群抵达表层时俯冲',
        body: '它低飞、悬停并作浅水俯冲，取食小鱼、磷虾和其他表层猎物。海温、海流、捕捞与大型掠食鱼都会改变猎物何时出现在喙可及的位置。',
      },
      {
        key: 'ground-nesting',
        label: '地面繁殖',
        title: '卵藏在开阔地浅刮巢里',
        body: '窝卵数通常为 1 至 2 枚，偶尔 3 枚，孵化约 21 至 22 天。开阔巢区便于集体防御，也容易受到入侵捕食者和近距离干扰。',
      },
      {
        key: 'colony-stewardship',
        label: '保护现场',
        title: '把距离留给繁殖群落',
        body: '远距离监测、季节性访问管理、入侵捕食者控制和猎物生态系统管理分别处理不同风险。全球 LC 不等于局地安全，行动成效要由每个群落的连续数据检验。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1763 年的北极燕鸥命名记录',
        body: '北极燕鸥的科学命名记录署名为 Pontoppidan，年份为 1763 年，现用学名为 Sterna paradisaea。它在环北极和亚北极繁殖，非繁殖季进入南大洋；追踪研究显示，不同群落和个体的路线、距离都不同。中文名描述它的主要繁殖区域，并不意味着全年留在北极。',
      },
    ],
    keyFacts: [
      'IOC World Bird List v15.2 接受 Sterna paradisaea，并把它作为没有获承认现生亚种的单型种。',
      'BirdLife/IUCN 2018 全球评估为 LC、趋势下降，记录没有受胁标准代码。',
      '它在环北极和亚北极海岸、岛屿、苔原与部分内陆淡水地繁殖，非繁殖季进入南大洋和南极浮冰缘。',
      '繁殖成鸟有红色喙、红色短腿、完整黑帽和长而深分叉的尾。',
      '每窝通常 1 至 2 枚卵，偶尔 3 枚；孵化期约 21 至 22 天。',
      '11 只格陵兰和冰岛追踪鸟的年均路线为 70,900 千米，范围 59,500 至 81,600 千米，不能外推为全种固定值。',
      '北返约 40 天，快于南下约 93 天；这组时间同样来自特定追踪样本。',
      '荷兰、波罗的海和北美样本记录了不同距离、停歇区与海洋走廊。',
      '全球 LC 不等于局地安全；猎物不足、入侵捕食者和干扰可造成局地繁殖失败或群落下降。',
    ],
    threats: [
      '海温、海洋生产力、商业捕捞和食物网变化减少关键小型鱼类与浮游猎物，造成局地繁殖失败',
      '入侵美洲水貂、鼠类和其他外来捕食者在繁殖岛屿捕食卵、雏鸟或成鸟',
      '近距离游憩、车辆、犬只、无人机、施工和反复取卵造成警戒、弃巢或群落迁移',
      '海岸开发、植被演替、洪水与风暴潮改变低矮地面巢址，影响强度随地点而异',
      '渔业兼捕、污染和其他海洋活动可能增加死亡或降低食物质量，全球量级仍缺少统一估计',
      '气候变化同时改变高纬繁殖地、猎物、风场和南极海冰边缘，累积种群效应仍不确定',
    ],
    conservationActions: [
      '对繁殖群落开展标准化巢占用、窝卵数、孵化、离巢和成鸟存活监测，并分别报告地点、年份和方法',
      '保护海岸砾滩、低矮苔原、湖岛和河岛巢址，依据当地研究设置季节性步道、犬只、车辆和无人机缓冲',
      '在入侵捕食者已证实造成损失的岛屿实施根除、持续监测和船只物资生物安全，防止再次入侵',
      '把玉筋鱼等关键猎物、海鸟繁殖产出和渔业压力纳入生态系统管理，并改进兼捕观察和报告',
      '保护锋面、上升流、迁徙停歇区和南极海冰边缘等动态海域，以国际追踪与共享数据识别跨国热点',
      '用减排和适应性管理处理气候风险，同时避免把单一模型情景写成确定的种群结局',
      '执行大西洋种群的 CMS 附录 II 和西欧亚繁殖／大西洋非繁殖种群的 AEWA 协作要求，保留各自的种群范围限定',
    ],
    metrics: {
      adultLengthCm: [28, 39],
      adultMassKg: [0.09, 0.12],
      wingspanCm: [65, 75],
    },
    featuredStats: [
      {
        key: 'tracked-annual-route',
        label: '11 只追踪鸟的年均路线',
        value: '70,900',
        unit: '千米',
        note: '格陵兰 10 只、冰岛 1 只；个体范围 59,500 至 81,600 千米，不能代表全种、所有个体或固定航程。',
      },
      {
        key: 'migration-timing',
        label: '同一追踪样本的迁徙用时',
        value: '北返约40；南下约93',
        unit: '天',
        note: '路线和顺风条件不同，不能把这组均值当作个体时刻表。',
      },
      {
        key: 'adult-wingspan',
        label: '成鸟翼展',
        value: '65至75',
        unit: '厘米',
        note: 'Cornell 两性共同参考范围。',
      },
      {
        key: 'typical-clutch',
        label: '典型窝卵数',
        value: '1至2',
        unit: '枚',
        note: '偶尔 3 枚；不同地区和资料汇总略有差异。',
      },
    ],
    media: {
      image: './images/species/arctic-tern/01-arctic-coast-breeding-adult.webp',
      alt: '一只红色喙、红色短腿、长而深分叉尾的繁殖期北极燕鸥停在亚北极海岸砾滩上',
      focalPoint: { x: 0.68, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/arctic-tern/02-flight-field-marks.webp',
          alt: '繁殖期北极燕鸥展开长尖翼飞行，可见红色喙、收拢的短腿和长而深分叉的尾',
          title: '红喙、短腿和长叉尾同时入画',
          caption:
            '图像呈现繁殖成鸟的红色喙、收拢短腿和长而深分叉的尾；鉴定还需结合翼纹、羽色、年龄和光线。',
          focalPoint: { x: 0.56, y: 0.47 },
        },
        {
          image: './images/species/arctic-tern/03-antarctic-pack-ice-migration.webp',
          alt: '一只远景北极燕鸥飞越开阔水面和疏散低矮海冰构成的南大洋浮冰缘',
          title: '南大洋浮冰缘只是年度终点之一',
          caption:
            '画面重建开阔水道与浮冰镶嵌环境，不是路线图，也不能凭远景羽色判断季节、年龄或具体地点。',
          focalPoint: { x: 0.64, y: 0.46 },
        },
        {
          image: './images/species/arctic-tern/04-shallow-plunge-foraging.webp',
          alt: '一只北极燕鸥在近水面浅水区俯冲，喙下方水中只有一尾小鱼',
          title: '短促俯冲瞄准表层猎物',
          caption:
            '画面停在接触前，只说明一种取食动作，不表示猎物种类、捕获结果、成功率或全年主食比例。',
          focalPoint: { x: 0.5, y: 0.5 },
        },
        {
          image: './images/species/arctic-tern/05-ground-scrape-and-two-eggs.webp',
          alt: '一只繁殖期北极燕鸥守着砾石间的地面浅刮巢，窝中恰好两枚有斑卵',
          title: '浅刮巢里的两枚有斑卵',
          caption:
            '两枚卵落在通常 1 至 2 枚的范围内，不表示每窝固定数量，也不提供孵化或繁殖成功率。',
          focalPoint: { x: 0.5, y: 0.58 },
        },
        {
          image: './images/species/arctic-tern/06-distance-colony-monitoring.webp',
          alt: '两名调查人员在安全距离外用三脚架望远镜远距离监测低岛上的一只北极燕鸥',
          title: '隔着水面记录繁殖群落',
          caption:
            '两名观察者与远处鸟之间保留宽阔水面缓冲；单次画面不能给出地点、个体身份、群落数量或趋势。',
          focalPoint: { x: 0.6, y: 0.54 },
        },
      ],
    },
    sources: [
      ...ARCTIC_TERN_SOURCES,
      {
        title: 'GBIF: Sterna paradisaea Pontoppidan, 1763 nomenclatural record',
        url: 'https://www.gbif.org/species/5229230',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: ARCTIC_TERN_CONTENT_DATE,
    updatedAt: ARCTIC_TERN_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
