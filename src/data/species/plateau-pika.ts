import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const PLATEAU_PIKA_SOURCE_DATE = '2026-08-23' as const;

const PLATEAU_PIKA_CONTENT_DATE = '2026-08-23' as const;

const PLATEAU_PIKA_SOURCES = [
  {
    title: 'ASM Mammal Diversity Database v2.5: Ochotona curzoniae',
    url: 'https://www.mammaldiversity.org/taxon/1001154/',
    kind: 'taxonomy',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Ochotona curzoniae (2016 assessment, published 2019)',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41258A160699229.en',
    kind: 'conservation',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Wei et al. 2025: Catalogue of mammals in China (2024)',
    url: 'https://doi.org/10.16829/j.slxb.151039',
    kind: 'taxonomy',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Handbook of the Mammals of the World: Ochotona curzoniae treatment',
    url: 'https://doi.org/10.5281/zenodo.6617943',
    kind: 'general',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Smith and Foggin 1999: Plateau pika as a keystone species for biodiversity',
    url: 'https://doi.org/10.1111/j.1469-1795.1999.tb00069.x',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Lai and Smith 2003: Pika control and the biodiversity of native birds',
    url: 'https://doi.org/10.1023/A:1024161409110',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Arthur et al. 2008: Short-term responses of birds to plateau pika control',
    url: 'https://doi.org/10.1016/j.biocon.2008.05.010',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Harris et al. 2014: Tibetan fox dependence on plateau pikas',
    url: 'https://doi.org/10.1644/14-MAMM-A-021',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Wilson and Smith 2015: Pika poisoning and plateau ecohydrology',
    url: 'https://doi.org/10.1007/s13280-014-0568-x',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Pech et al. 2007: Population dynamics and responses to pika management',
    url: 'https://doi.org/10.1111/j.1365-2664.2007.01287.x',
    kind: 'conservation',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Harris et al. 2015: Grassland responses to grazing exclusion and pika control',
    url: 'https://doi.org/10.1371/journal.pone.0132897',
    kind: 'conservation',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Wang et al. 2026: Long-term grassland responses to plateau pika control',
    url: 'https://doi.org/10.1016/j.isci.2026.115159',
    kind: 'conservation',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Smith et al. 2019: Functional-trait ecology of the plateau pika',
    url: 'https://doi.org/10.1111/1749-4877.12300',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Nie, Liu and Chen 2022: Life-history traits and fitness of plateau pika',
    url: 'https://doi.org/10.1002/ece3.8548',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Zhou et al. 2023: Daily and seasonal activity patterns of plateau pikas',
    url: 'https://doi.org/10.3390/ani13101689',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Smith and Wang 1991: Social relationships of adult plateau pikas',
    url: 'https://doi.org/10.2307/1382094',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Smith and Dobson 2022: Social complexity in plateau pikas',
    url: 'https://doi.org/10.1016/j.anbehav.2021.11.014',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Qu et al. 2012: Reproduction of plateau pika across the Qinghai-Tibetan Plateau',
    url: 'https://doi.org/10.1007/s10344-011-0574-2',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Speakman et al. 2021: Winter energy use and exploitation of yak feces',
    url: 'https://doi.org/10.1073/pnas.2100707118',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Paruchuri et al. 2019: Microhabitat use by plateau pikas',
    url: 'https://doi.org/10.1093/jmammal/gyz085',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Wu et al. 2023: Protein availability, density and life-history characteristics',
    url: 'https://doi.org/10.1093/jmammal/gyad063',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Zhao et al. 2020: Multiple benefits of plateau pikas for alpine grasslands',
    url: 'https://doi.org/10.1080/20964129.2020.1750973',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: '生态环境部、中国科学院：中国生物多样性红色名录·脊椎动物卷（2020；2023发布）',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-ochotona-curzoniae',
    slug: 'plateau-pika',
    names: {
      zh: '高原鼠兔',
      en: 'Plateau Pika',
      aliases: ['黑唇鼠兔', 'Black-lipped Pika'],
    },
    scientificName: 'Ochotona curzoniae',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Lagomorpha', '兔形目'),
      taxon('Ochotonidae', '鼠兔科'),
      taxon('Ochotona', '鼠兔属'),
    ),
    conservation: conservation('LC', 'decreasing', 2016),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: [
        '青藏高原中部与西部高寒草地',
        '青海、甘肃南部和四川西部高寒草地',
        '西藏与新疆南部高原地带',
        '印度锡金',
        '尼泊尔北部毗邻高地记录（待核实）',
      ],
      countries: ['中国', '印度', '尼泊尔'],
      range:
        '核心分布覆盖中国青藏高原及邻近的甘肃南部、青海、四川西部、西藏和新疆南部高地，印度锡金也有记录。MDD 将尼泊尔标为带问号的国家记录，HMW 只写“可能到达尼泊尔最北部”，因此这里保留尼泊尔并明确其不确定性，不把它当作已充分确认的连续分布。',
      center: { lat: 32.5, lng: 92.5 },
    },
    habitats: [
      {
        name: '高寒草甸',
        realm: 'terrestrial',
        description: '莎草、禾草和阔叶草本提供主要食物，松软土壤支持多入口洞系，是青藏高原的核心生境。',
        isPrimary: true,
      },
      {
        name: '寒冷高原草原',
        realm: 'terrestrial',
        description: '低矮植被便于地表取食和警戒，食物质量、放牧强度与地表结构共同影响局地密度。',
      },
      {
        name: '高山荒漠',
        realm: 'terrestrial',
        description: '植被稀疏的寒旱地带也有种群，食物和遮蔽条件使活动范围随地点改变。',
      },
      {
        name: '草甸与裸土边缘',
        realm: 'terrestrial',
        description: '草甸提供食物，洞口和裸土提供逃避捕食者的通道；局地研究发现个体偏好两类微生境的交界。',
      },
    ],
    measurements: {
      length: {
        min: 14,
        max: 19.2,
        unit: 'cm',
        note: '体长参考范围；不含耳长和后足长，也不表示物种极值',
      },
      weight: {
        typical: 150,
        unit: 'g',
        note: '成年典型体重；性别、季节、地点和研究样本会改变实测值，不拼接成统一范围',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: [
        '禾本科草本',
        '莎草科植物',
        '阔叶草本',
        '植物叶、茎与花',
        '资源紧缺时记录的牦牛粪',
      ],
      description:
        '食谱主体是草、莎草和阔叶草本。研究在牦牛与鼠兔共存区记录到严冬取食牦牛粪；这项地点和季节受限的证据不能扩展成全年或全分布区的常规食物。',
    },
    activity: [
      '强昼行性，绝大多数地表活动发生在白天；相机研究只记录到极少夜间活动',
      '不冬眠，寒季把活动高峰集中到较暖的中午，暖季常在上午和下午形成双峰',
      '在地表取食、警戒、奔跑和发出警报声，遇险后迅速进入多入口洞系',
      '家庭群占据洞系和家域，成体数量及社会配偶制度可在年份和家庭之间改变',
      '春夏繁殖，妊娠约 18 至 20 天；繁殖季长度、年窝数和窝仔数随海拔、地点及年份变化',
    ],
    tags: [
      '古北界',
      '青藏高原',
      '兔形目',
      '穴居动物',
      '强昼行性',
      '不冬眠',
      '生态系统工程师',
      'IUCN 无危',
      '种群下降',
    ],
    summary:
      '高原鼠兔生活在青藏高原高寒草地，挖掘洞系，也是多种捕食者的食物。它对土壤和局部生境的影响随密度与草地状况变化；大范围投毒还可能影响其他物种和当地土壤的渗水能力。',
    description:
      '高原鼠兔体形圆短，耳小而圆，鼻端和唇部常呈黑色，体长约 14.0 至 19.2 厘米，典型体重约 150 克。它在海拔约 3,000 至 5,000 米的高寒草甸、草原和荒漠活动，以草本植物为主要食物，白天在洞口之间取食和警戒，冬季也不冬眠。家庭群通常共享一套洞系，但群体大小和社会配偶制度并不固定。多项研究把它视为高原生态系统的关键成员：洞穴供小型鸟类和蜥蜴利用，它也是藏狐、鼬类和猛禽的重要猎物，掘穴还会改变局地植物微生境与点位土壤入渗。种群密度、草地类型和放牧压力会改变这些作用，管理需要依据当地种群密度、植被和土壤调查。',
    storySections: [
      {
        key: 'black-lipped-field-marks',
        label: '形态辨认',
        title: '黑唇、圆耳和贴地的短身形',
        body: '高原鼠兔体长约 14.0 至 19.2 厘米，典型体重约 150 克。圆耳带浅色边缘，鼻端和唇部常呈黑色，背毛会随季节呈沙褐到赭褐色。黑唇只是常见线索，远距离照片还需要地点、体型和其他形态共同支持鉴定。',
      },
      {
        key: 'alpine-burrow-mosaic',
        label: '高原生境',
        title: '草甸、洞口与裸土拼成家域',
        body: '本种主要生活在海拔约 3,000 至 5,000 米的高寒草甸、寒冷草原和高山荒漠。草甸供给莎草、禾草与阔叶草本，多入口洞系承担休息、育幼和避敌功能。局地研究发现个体常利用草甸与裸土交界，但这项微生境偏好不能替代全分布区的生境调查。',
      },
      {
        key: 'diurnal-nonhibernating',
        label: '活动节律',
        title: '白天出洞，严冬也不休眠',
        body: '高原鼠兔属于强昼行性、不冬眠的兔形目动物。寒季常把地表活动集中到较暖的中午，暖季可在上午和下午形成两个高峰，气温与季节共同改变节律。相机研究出现过极少夜间记录，这些记录提示行为有弹性，不能把本种改写成夜行性动物。',
      },
      {
        key: 'plants-and-winter-exception',
        label: '食性',
        title: '草本是主体，严冬会出现例外',
        body: '日常食物以禾草、莎草和阔叶草本为主，食物组成随季节和地点变化。青藏高原一项研究用行为观察和胃内容物证据记录到鼠兔在严冬取食牦牛粪，可能借此获得较易消化的残余资源。这种行为出现在牦牛与鼠兔共存且食物紧缺的条件下，不能概括为全年固定食谱。',
      },
      {
        key: 'variable-family-life',
        label: '家庭与繁殖',
        title: '家庭群共享洞系',
        body: '一个家庭群通常占据一套洞系与相对独立的活动区，可有一至数只成体。同一连续种群中记录过单配、一雄多雌和一雌多雄等社会组合。繁殖集中在春夏，妊娠约 18 至 20 天，海拔、植物生长期和年份会影响繁殖季长度、年窝数及窝仔数。',
      },
      {
        key: 'contextual-ecosystem-management',
        label: '生态与管理',
        title: '先量密度和草地，再决定怎么管',
        body: '洞穴为部分高原鸟类和蜥蜴提供空间，高原鼠兔也是藏狐、鼬类与猛禽的重要猎物；掘穴形成的微地形还可能改变局地植物丰富度和点位土壤入渗。高密度种群可能减少局地牧草或扩大裸地，放牧压力和草地状态也会改变结果。管理应结合标准化密度、植被、土壤和捕食者监测，避免把大范围无差别投毒当作默认方案。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1857 年描述的高原小动物',
        body: '霍奇森在 1857 年使用 Lagomys curzoniae 描述高原鼠兔，命名产地为春丕地区，即今天西藏日喀则亚东一带。后来研究者将它移入鼠兔属，学名成为 Ochotona curzoniae。英文常名 Plateau Pika 指高原分布，Black-lipped Pika 则提示常见的黑色唇部，仍需结合其他特征鉴定。',
      },
    ],
    keyFacts: [
      'MDD 接受名为 Ochotona curzoniae，Plateau Pika 与 Black-lipped Pika 都是常用英文名。',
      '高原鼠兔属于兔形目鼠兔科，不是啮齿目动物。',
      'IUCN 2016 年评估为无危，全球趋势记为下降；全球等级不代表每个局地种群都充足。',
      '体长约 14.0 至 19.2 厘米，典型体重约 150 克；体重会随样本、季节和地点变化。',
      '常见海拔范围约 3,000 至 5,000 米，主要生境包括高寒草甸、寒冷草原和高山荒漠。',
      'MDD 对尼泊尔记录加问号，HMW 也只写“可能”分布到尼泊尔最北部。',
      '它强昼行且不冬眠，寒暖季的地表活动高峰会随温度改变。',
      '食谱以草本植物为主；严冬取食牦牛粪属于有研究支持的条件性例外。',
      '家庭群共享洞系，但群体大小和社会配偶制度在家庭与年份之间变化。',
      '洞系、捕食关系、植物微生境和土壤入渗构成多重生态作用，作用强度取决于密度和草地背景。',
    ],
    threats: [
      '以减少牧草竞争或治理退化为目标的大范围毒饵控制，造成直接死亡和种群下降',
      '毒饵及鼠兔骤减可能影响利用洞穴的鸟类、以鼠兔为食的捕食者和高原食物网；效应随地点、调查时点和洞道保留状况改变',
      '长期高强度放牧改变植被高度、食物蛋白、土壤和裸地比例，并与鼠兔密度形成复杂反馈',
      '把草地退化单独归因于鼠兔，可能掩盖牲畜压力、气候和土壤条件并推动无差别清除',
      '尼泊尔等分布边缘缺少充分确认记录，限制跨区域趋势判断',
    ],
    conservationActions: [
      '用重复样线、洞口核查和相机监测估算活体密度，避免把洞口总数直接换算成个体数',
      '把鼠兔密度与放牧强度、植被组成、裸地、土壤入渗和捕食者指标放在同一监测框架',
      '避免把大范围无差别投毒作为默认的草地治理手段，优先调整牲畜压力和恢复植被',
      '确需局地控制时设定可核查阈值与小范围目标，并监测非目标物种、种群恢复和草地响应',
      '保留高寒草甸、草原、荒漠及其边缘微生境的连通性，保护仍被鸟类和蜥蜴利用的洞系',
      '在关键捕食者繁殖地和鸟类用洞区评估任何控制行动对食物与巢址的连锁影响',
      '用标本、影像和遗传材料核实尼泊尔等边缘记录，分别报告确定分布与待核实记录',
      '向牧区管理者公开密度和植被监测结果，以地点证据选择放牧、修复或有限控制方案',
    ],
    metrics: {
      adultLengthCm: [14, 19.2],
      elevationM: [3000, 5000],
    },
    featuredStats: [
      {
        key: 'global-iucn-status',
        label: 'IUCN 全球等级',
        value: 'LC',
        unit: '无危',
        note: '2016 年评估；全球趋势为下降',
      },
      {
        key: 'body-length',
        label: '体长',
        value: '14.0—19.2',
        unit: '厘米',
        note: '不含耳长和后足长，也不表示物种极值',
      },
      {
        key: 'typical-adult-mass',
        label: '成年典型体重',
        value: '约 150',
        unit: '克',
        note: '保留典型值；不把不同性别、地点和季节的样本拼成统一范围',
      },
      {
        key: 'elevation-range',
        label: '常见海拔',
        value: '3,000—5,000',
        unit: '米',
        note: '物种级概括；局地研究点和偶见记录不等于完整上下限',
      },
    ],
    media: {
      image: './images/species/plateau-pika/01-alpine-meadow-portrait.webp',
      alt: '一只完整的高原鼠兔立在高寒草甸洞口旁，圆耳、沙褐色被毛和黑色唇部清楚可见',
      focalPoint: { x: 0.61, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/plateau-pika/02-black-lip-and-ear-markings.webp',
          alt: '一只高原鼠兔的近景侧面展示黑色鼻端与唇部、圆耳浅色边缘和沙褐色面部被毛',
          title: '黑唇是线索，不是单项结论',
          caption: '地点、体型和其他形态仍需共同支持鉴定；单张图也不能判断性别或年龄。',
          focalPoint: { x: 0.5, y: 0.49 },
        },
        {
          image: './images/species/plateau-pika/03-burrow-meadow-mosaic.webp',
          alt: '高寒草甸、低矮草本、裸土斑块和多个鼠兔洞口组成生境镶嵌，一只小型鼠兔停在洞口边缘',
          title: '草甸与洞口组成一套生境',
          caption: '洞口数量不能直接换算成活体数量；废弃洞、共用洞和多入口洞系都会造成偏差。',
          focalPoint: { x: 0.59, y: 0.56 },
        },
        {
          image: './images/species/plateau-pika/04-forb-and-grass-feeding.webp',
          alt: '一只完整的高原鼠兔在草甸中取食仍连着植株的禾草和阔叶草本，周围可见莎草',
          title: '高原草本构成主要食谱',
          caption: '食物选择随植物可用性和季节变化；牦牛粪属于严冬特定条件下记录到的补充资源。',
          focalPoint: { x: 0.49, y: 0.56 },
        },
        {
          image: './images/species/plateau-pika/05-family-at-shared-burrow.webp',
          alt: '一只较大成体与三只较小幼体分散停在同一片高寒草甸的共享洞系周围，各只高原鼠兔均完整可见',
          title: '家庭群共享洞系',
          caption: '同框个体不能证明亲缘、性别或配偶制度；这些关系需要标记、行为和遗传资料。',
          focalPoint: { x: 0.51, y: 0.54 },
        },
        {
          image: './images/species/plateau-pika/06-nonlethal-density-monitoring.webp',
          alt: '两名研究人员在高寒草甸使用样方、记录板和手持计数器调查鼠兔，一只鼠兔停在远处洞口旁',
          title: '以重复调查替代洞口猜数',
          caption: '活体密度、植被、土壤和捕食者指标要在同一地点重复测量，才能评估管理效果。',
          focalPoint: { x: 0.52, y: 0.54 },
        },
      ],
    },
    sources: PLATEAU_PIKA_SOURCES,
    featured: true,
    publishedAt: PLATEAU_PIKA_CONTENT_DATE,
    updatedAt: PLATEAU_PIKA_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
