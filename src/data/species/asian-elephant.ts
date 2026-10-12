import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const ASIAN_ELEPHANT_SOURCE_DATE = '2026-08-25' as const;

const ASIAN_ELEPHANT_CONTENT_DATE = '2026-08-25' as const;

const ASIAN_ELEPHANT_SOURCES = [
  {
    title: 'IUCN Red List 2020: Elephas maximus',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T7140A45818198.en',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC Asian Elephant Specialist Group: 2020 Red List assessment PDF',
    url: 'https://www.asesg.org/PDFfiles/Asian%20Elephant%20Red%20List%20Assessment%202020.pdf',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Mammal Diversity Database: Elephas maximus, MDD 1000521',
    url: 'https://www.mammaldiversity.org/taxon/1000521/',
    kind: 'taxonomy',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'IUCN 2024: First Bornean Elephant subspecies assessment',
    url: 'https://iucn.org/press-release/202406/bornean-elephant-endangered-iucn-red-list',
    kind: 'taxonomy',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'China Biodiversity Red List: Vertebrates, 2020 assessment',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'China National Key Protected Wild Animals List, 2021',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'China National Forestry and Grassland Administration 2024: Yunnan Asian Elephant standards',
    url: 'https://www.forestry.gov.cn/c/www/lcdt/547630.jhtml',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'CMS: Elephas maximus indicus, Appendix I',
    url: 'https://www.cms.int/species/elephas-maximus-indicus',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Asian Elephant Range States 2025: Siem Reap Declaration',
    url: 'https://www.asesg.org/images/2025%20Seam%20Reap%20Declaration.pdf',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Shoshani and Eisenberg 1982: Elephas maximus species account',
    url: 'https://repository.si.edu/handle/10088/4414',
    kind: 'general',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Larramendi 2016: Shoulder height, body mass and shape of proboscideans',
    url: 'https://doi.org/10.4202/app.00136.2014',
    kind: 'general',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Hutchinson et al. 2003: Fast-moving elephants',
    url: 'https://doi.org/10.1038/422493a',
    kind: 'general',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Sukumar 1990: Ecology of the Asian Elephant in southern India: feeding habits',
    url: 'https://doi.org/10.1017/S0266467400004004',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Vancuylenberg 1977: Feeding behaviour of the Asiatic Elephant in Sri Lanka',
    url: 'https://doi.org/10.1016/0006-3207(77)90056-8',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Kumar et al. 2010: Asian Elephant habitat use in a plantation landscape',
    url: 'https://doi.org/10.1177/194008291000300203',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'de Silva et al. 2011: Social networks of female Asian Elephants',
    url: 'https://doi.org/10.1186/1472-6785-11-17',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'de Silva et al. 2013: Demography of Asian Elephants at Uda Walawe',
    url: 'https://doi.org/10.1371/journal.pone.0082788',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Lueders et al. 2012: Elephant pregnancy and placental development',
    url: 'https://doi.org/10.1098/rspb.2012.1038',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Campos-Arceiz et al. 2008: Asian Elephant seed dispersal',
    url: 'https://doi.org/10.1890/07-1573.1',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Harich et al. 2016: Asian Elephant ingestion and Dillenia seed germination',
    url: 'https://doi.org/10.1016/j.actao.2016.10.005',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Campos-Arceiz and Blake 2011: Megagardeners of the forest',
    url: 'https://doi.org/10.1016/j.actao.2011.01.014',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2015: Genetic diversity and population structure of Asian Elephants in China',
    url: 'https://doi.org/10.1371/journal.pone.0124834',
    kind: 'distribution',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Yunnan Forestry and Grassland Administration 2021: Northward-moving elephant update',
    url: 'https://lcj.yn.gov.cn/html/2021/zuixindongtai_0810/63527.html',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'China Ministry of Ecology and Environment 2022: Yunnan northward-movement response review',
    url: 'https://www.mee.gov.cn/ywgz/zrstbh/swdyxbh/202212/t20221206_1007073.shtml',
    kind: 'conservation',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Wang et al. 2021: Asian Elephants wandering north in Yunnan',
    url: 'https://doi.org/10.1016/j.xinn.2021.100142',
    kind: 'ecology',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Jiang et al. 2023: Route and land-cover analysis of the Yunnan northward movement',
    url: 'https://doi.org/10.3390/land12020460',
    kind: 'distribution',
    accessedAt: ASIAN_ELEPHANT_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-elephas-maximus',
    slug: 'asian-elephant',
    names: {
      zh: '亚洲象',
      en: 'Asian Elephant',
      aliases: ['Asiatic Elephant'],
    },
    scientificName: 'Elephas maximus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Proboscidea', '长鼻目'),
      taxon('Elephantidae', '象科'),
      taxon('Elephas', '亚洲象属'),
    ),
    conservation: conservation('EN', 'decreasing', 2019, 'A2c'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: [
        '南亚东北部',
        '喜马拉雅南麓与东北印度',
        '印度中部、西北部与南部',
        '中南半岛',
        '中国云南南部',
        '斯里兰卡',
        '苏门答腊',
        '婆罗洲东北部',
      ],
      countries: [
        '孟加拉国',
        '不丹',
        '柬埔寨',
        '中国',
        '印度',
        '印度尼西亚',
        '老挝',
        '马来西亚',
        '缅甸',
        '尼泊尔',
        '斯里兰卡',
        '泰国',
        '越南',
      ],
      range:
        '现存于南亚、东南亚和中国云南南部的 13 个范围国，分布高度破碎，约从海平面至 3,000 米；利用森林、灌丛、草地及其与农业景观的镶嵌。',
      center: { lat: 18, lng: 96 },
    },
    habitats: [
      {
        name: '热带与亚热带森林镶嵌',
        realm: 'terrestrial',
        description:
          '包括常绿、半常绿、湿润和干燥落叶林、低地林与山地林，以及相连的林缘。',
        isPrimary: true,
      },
      {
        name: '草地、灌丛与河谷泛洪地',
        realm: 'terrestrial',
        description:
          '季节性草地、干湿灌丛、洪泛草地和河谷边缘提供草本、浏览植物、水和移动空间。',
        isPrimary: true,
      },
      {
        name: '次生林与农业、种植园镶嵌',
        realm: 'terrestrial',
        description:
          '亚洲象会利用次生植被并进入茶园、橡胶园和农田，但这些边缘生境不能替代连通的天然生境。',
      },
    ],
    measurements: {
      height: {
        min: 2.28,
        max: 2.89,
        unit: 'm',
        note: '良好发育、完全长成个体的约 90% 范围；雌性 2.28–2.52 米，雄性 2.61–2.89 米',
      },
      weight: {
        min: 2.3,
        max: 4.6,
        unit: 't',
        note: '良好发育、完全长成个体的约 90% 范围；雌性 2.3–3.1 吨，雄性 3.5–4.6 吨',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: [
        '禾草和莎草',
        '竹类',
        '叶与嫩枝',
        '树皮与根',
        '野生果实',
        '进入农地后取食的作物',
      ],
      description:
        '亚洲象吃草，也取食叶、枝、树皮、根与果实，比例随生境和季节改变。植物在后段肠道中经微生物发酵，帮助利用纤维。在破碎景观中，它也可能进入农田取食作物。',
    },
    activity: [
      '全天可活动，节律随食物、水、气温和人类风险改变',
      '雌性亲族形成会分开、重聚的社会单元',
      '雄性青春期离开出生群，成年后可独行或形成松散雄性关系',
      '在家域内高移动，部分种群有季节位移',
    ],
    tags: [
      '南亚与东南亚',
      'IUCN 濒危',
      '中国红色名录极危',
      '国家一级重点保护野生动物',
      'CITES 附录 I',
      '裂变—融合社会',
      '长距离种子传播',
      '人象共存',
    ],
    summary:
      '亚洲象分布在亚洲 13 个国家，前额有两个隆起，耳较小，鼻端有一个指状突。雌性亲族会分开、重聚，生境破碎则让象群更常与人相遇。',
    description:
      '亚洲象利用低地森林、落叶林、灌丛和草地。它既吃草，也取食叶、枝、树皮、根与果实，食物比例随季节改变。长距离移动可以传播种子，折枝和踩踏也会改变植被。雌性与幼象维持长期社会关系，群体会分开和重聚；成年雄性可独行，也可与其他雄性保持松散关系。全球 IUCN 状态为濒危且趋势下降，保护重点包括连接生境、减少人象冲突、改造道路和电力设施，以及打击非法贸易。',
    storySections: [
      {
        key: 'not-a-small-african-elephant',
        label: '身份与形态',
        title: '前额、耳朵和鼻端的识别特征',
        body: '亚洲象属于亚洲象属 Elephas，非洲草原象属于非洲象属 Loxodonta。双隆额顶、较小的耳、平直或隆起的背线，以及鼻端上侧一个指状突共同构成识别组合；成年雌性通常没有显眼象牙，雄性也可能无牙或牙较短，不能只凭一项特征下结论。',
      },
      {
        key: 'fragmented-range',
        label: '分布与生境',
        title: '分布于十三国，生境高度破碎',
        body: '从印度次大陆到婆罗洲，亚洲象利用常绿林、落叶林、草地、灌丛和河谷。农业、种植园、聚落与线性基础设施把现存范围切成许多片段；象会进入次生林、茶园、橡胶园或农田，并不表示这些边缘景观足以替代连通的天然生境。',
      },
      {
        key: 'megagardener',
        label: '食性与生态',
        title: '吃植物也传播种子',
        body: '亚洲象会随季节在吃草和取食叶、枝、树皮、根与果实之间切换。斯里兰卡和缅甸数据建立的模型估计，约一半种子可被带离 1.2 千米以上，模型尾端达到 5.772 千米；折枝、踩踏和选择性取食也会改变植被。这些作用随地点、象密度和植物群落而变，不能把所有扰动都写成生态收益。',
      },
      {
        key: 'long-social-memory',
        label: '社会与繁殖',
        title: '雌象维持长期社会关系',
        body: '对 286 只成年雌象开展的 20 个月纵向观察显示，亲缘个体可以分开、重聚，短时看见的两三只象不等于关系短暂。雄象离开出生群后也不一定终身独居。妊娠约 620 至 680 天，加上多年的产仔间隔，使种群很难快速补回成年个体损失。',
      },
      {
        key: 'yunnan-northward-movement',
        label: '云南北移',
        title: '云南象群的北移与南返',
        body: '2020 至 2021 年云南象群经历了一次异常远距离北移及南返。约 500 千米描述从原栖息地到北端的移动尺度，1,300 多千米则是 2021 年 4 月 16 日后 110 多天的累计曲折行程；15 头与 17 头对应不同阶段和队伍分合。这次事件可能涉及食物、生境、天气、种群动态与路径决策，现有研究尚不能锁定单一原因。',
      },
      {
        key: 'coexistence-landscape',
        label: '保护与共存',
        title: '连接生境并减少人象冲突',
        body: '云南应急行动把持续监测、人员疏散、交通管控、辅助引导和损失理赔放在同一套现场流程中。长期保护还要恢复廊道、改造道路和电网、打击象牙与皮张等非法贸易，并让社区参与预警和补偿；每项措施都应以事故率、响应时间、廊道使用和社区损失复核成效。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '林奈的亚洲象命名记录',
        body: '1758 年，林奈以 Elephas maximus 描述亚洲象，模式产地记录为斯里兰卡，今天仍沿用这一学名。亚洲象与非洲象同属象科，但分属不同的属。亚洲象的鼻端上侧有一个指状突，可与前额和耳形等特征一起用于辨识。',
      },
    ],
    keyFacts: [
      '亚洲象与非洲草原象同属象科，但分属亚洲象属 Elephas 和非洲象属 Loxodonta。',
      'IUCN 于 2019 年完成全球评估、2020 年发布，结论为濒危 A2c，种群趋势下降。',
      '现生原生范围覆盖孟加拉国、不丹、柬埔寨、中国、印度、印度尼西亚、老挝、马来西亚、缅甸、尼泊尔、斯里兰卡、泰国和越南 13 国。',
      '完全长成平均体型约为雌性肩高 2.40 米、2.7 吨，雄性肩高 2.75 米、4.0 吨；它们不是最大纪录。',
      '受训亚洲象实验测得最高约 25 千米每小时，这不是野外日常移动速度。',
      'IUCN 汇总的 2018 年野外总数为 48,323 至 51,680 只，其中包含可靠性存疑的估计，也不是成熟个体数。',
      '妊娠约 620 至 680 天，通常单胎；缓慢繁殖让成年个体死亡的影响持续很久。',
      '种子传播模型估计约一半种子可被带离 1.2 千米以上，距离随地点、季节和象的移动而变。',
      '中国区域红色名录列为极危 D1，中国国家重点保护野生动物名录列为一级；两者都不能覆盖全球 IUCN 状态。',
      'CITES 将亚洲象全种列入附录 I；CMS 附录 I 页面针对大陆亚种 Elephas maximus indicus，而不是全种。它们分别服务国际贸易管制与迁徙物种合作，不是 IUCN 受威胁等级。',
    ],
    threats: [
      '农业、种植园、采矿、聚落扩张造成天然生境丧失、退化和破碎化',
      '道路、铁路、运河、电网和围栏占用生境，并形成碰撞、电击或移动屏障',
      '作物损失、财产破坏和人员伤亡加剧人象冲突，并可能引发报复性杀死',
      '象牙、皮张、肉、尾毛、其他身体部位及活体幼象的盗猎和非法贸易',
      '入侵植物、牲畜放牧和反复干扰降低食物质量与安全活动空间',
      '降雨和温度变化可能改变水、食物与移动条件，并与土地利用压力共同放大冲突',
    ],
    conservationActions: [
      '保护核心生境并恢复保护地、季节资源地和跨境景观之间的廊道，以实际使用数据核验连通性',
      '在道路、铁路、运河、电网和围栏规划中前置评估象的通行需求，设置适地通道、限速和预警',
      '组合粪便遗传、相机、样线、无人机与个体识别，按统一口径发布数量、移动和不确定性',
      '依据本地风险建立社区预警、现场隔离、快速理赔和效果评估，不把单一驱赶手段当成万能方案',
      '加强象牙、皮张和活体非法贸易的产地、运输、网络市场与跨境联合执法',
      '把云南栖息地修复、救护、野化训练、食源地建设和动态预警标准转化为可复核的现场流程',
      '落实 13 个范围国的数据共享、国家行动计划和跨境协作，并持续检查承诺的执行结果',
    ],
    metrics: {
      topSpeedKph: 25,
      elevationM: [0, 3000],
    },
    featuredStats: [
      {
        key: 'adult-size-sex-means',
        label: '完全长成平均体型',
        value: '雌 2.40 m / 2.7 t；雄 2.75 m / 4.0 t',
        note: '标本与体积模型的性别平均值，不是最大纪录',
      },
      {
        key: 'three-generation-decline',
        label: '三世代推断降幅',
        value: '至少 50',
        unit: '%',
        note: '约 75 年；依据占有面积和生境质量下降推断',
      },
      {
        key: 'wild-population-2018',
        label: '2018 野外总数估计',
        value: '48,323–51,680',
        unit: '只',
        note: '不是成熟个体数；其中 4,189 至 6,999 只来自可靠性存疑的估计',
      },
      {
        key: 'gestation',
        label: '妊娠',
        value: '620–680',
        unit: '天',
        note: '圈养象内分泌和超声追踪，约 22 个月',
      },
    ],
    media: {
      image: './images/species/asian-elephant/01-rainforest-female-portrait.webp',
      alt: '一只完整无外露象牙的成年雌性亚洲象站在湿润森林林隙右侧，小耳、双隆额、凸背、四足和长鼻清楚可见',
      focalPoint: { x: 0.68, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/asian-elephant/02-tusked-bull-morphology.webp',
          alt: '一只有两根中等象牙的完整成年雄性亚洲象侧身走过干燥落叶林，四条腿各有独立落足点，尾端毛簇开放',
          title: '雄象象牙的个体差异',
          caption:
            '雄性可以有自然象牙，也可能无牙或牙较短；可见外形不能单独证明年龄、体重、地区或繁殖状态。',
          focalPoint: { x: 0.5, y: 0.54 },
        },
        {
          image: './images/species/asian-elephant/03-forest-river-mosaic.webp',
          alt: '一只完整无外露象牙的成年雌性亚洲象穿过森林与浅河相接的开阔岸边，环境占据画面大部',
          title: '森林与河谷拼成活动空间',
          caption:
            '这是森林、浅河和开阔岸边的通用重建，不代表真实地点、固定路线或云南北移事件。',
          focalPoint: { x: 0.68, y: 0.61 },
        },
        {
          image: './images/species/asian-elephant/04-wild-grass-foraging.webp',
          alt: '一只完整无外露象牙的成年雌性亚洲象站在森林草地边缘，鼻端卷持一束来自地面的野草',
          title: '用长鼻抓取草束',
          caption:
            '亚洲象吃草，也取食枝叶和其他植物材料；一次抓草不能说明全年食谱、每日食量或采食时长。',
          focalPoint: { x: 0.53, y: 0.57 },
        },
        {
          image: './images/species/asian-elephant/05-matrilineal-calf-care.webp',
          alt: '两只无外露象牙的成年雌性亚洲象陪伴一只幼象站在林地空地，三条尾均完整分离，其中一只成年象与幼象轻触鼻端',
          title: '分开、重聚的母系网络',
          caption:
            '成年雌性、幼象和鼻触支持母系社会的通用重建，不能由画面确认亲生关系、接触功能或长期群体组成。',
          focalPoint: { x: 0.51, y: 0.58 },
        },
        {
          image: './images/species/asian-elephant/06-aerial-corridor-monitoring.webp',
          alt: '高空俯瞰四只无大象牙的亚洲象组成松散小群，穿过森林与休耕地相接的带状景观',
          title: '廊道是否有效，要看象怎样使用',
          caption:
            '这幅通用航拍重建不代表真实地点、精确路线、法定廊道或监测结果；连通性需要追踪、遗传和重复调查验证。',
          focalPoint: { x: 0.54, y: 0.55 },
        },
      ],
    },
    sources: ASIAN_ELEPHANT_SOURCES,
    featured: true,
    publishedAt: ASIAN_ELEPHANT_CONTENT_DATE,
    updatedAt: ASIAN_ELEPHANT_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
