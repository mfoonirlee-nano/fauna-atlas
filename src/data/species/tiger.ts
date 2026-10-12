import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const TIGER_SOURCE_DATE = '2026-08-25' as const;

const TIGER_CONTENT_DATE = '2026-08-25' as const;

const TIGER_SOURCES = [
  {
    title: 'IUCN Red List: Panthera tigris (assessed 2021; published 2022)',
    url: 'https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T15955A214862019.en',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Cat Specialist Group: Tiger',
    url: 'https://www.catsg.org/living-species-tiger',
    kind: 'general',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database: Panthera tigris',
    url: 'https://www.mammaldiversity.org/taxon/1006023/',
    kind: 'taxonomy',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'IUCN Green Status of Species: Panthera tigris supplementary information',
    url: 'https://nc.iucnredlist.org/redlist/content/attachment_files/Panthera_tigris_15955_Green_Status_Supplementary_Information.pdf',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'CITES: Appendices I, II and III, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'CITES Resolution Conf. 12.5 (Rev. CoP19): Conservation of and trade in tigers',
    url: 'https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-12-05-R19.pdf',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: '国家林草局、农业农村部：国家重点保护野生动物名录（2021 年第 3 号）',
    url: 'https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Global Tiger Forum 2023: Global Tiger Recovery Program 2.0 (2023–2034)',
    url: 'https://globaltigerforum.org/wp-content/uploads/2023/08/GTRP_2.0_2023-34_Rev.1.pdf',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Wilting et al. 2015: Planning tiger recovery and intraspecific variation',
    url: 'https://doi.org/10.1126/sciadv.1400175',
    kind: 'taxonomy',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Liu et al. 2018: Genome-wide evolutionary analysis of the world’s tigers',
    url: 'https://doi.org/10.1016/j.cub.2018.09.019',
    kind: 'taxonomy',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Karanth & Nichols 1998: Estimation of tiger densities using photographic captures',
    url: 'https://doi.org/10.1890/0012-9658(1998)079%5B2852:EOTDII%5D2.0.CO;2',
    kind: 'ecology',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Hiby et al. 2009: Matching tiger images from stripe patterns',
    url: 'https://doi.org/10.1098/rsbl.2009.0028',
    kind: 'ecology',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Smith et al. 1989: Scent marking in free-ranging tigers',
    url: 'https://doi.org/10.1016/0003-3472(89)90001-8',
    kind: 'ecology',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Hayward et al. 2012: Prey preferences of the tiger',
    url: 'https://doi.org/10.1111/j.1469-7998.2011.00871.x',
    kind: 'ecology',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Smith & McDougal 1991: Lifetime reproduction and effective population size in tigers',
    url: 'https://doi.org/10.1111/j.1523-1739.1991.tb00355.x',
    kind: 'ecology',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Sharma et al. 2013: Forest corridors maintain gene flow in a tiger metapopulation',
    url: 'https://doi.org/10.1098/rspb.2013.1506',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Khan et al. 2021: Genomic evidence for inbreeding depression in Indian tigers',
    url: 'https://doi.org/10.1073/pnas.2023018118',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Carter et al. 2020: Road development in Asia and range-wide risks to tigers',
    url: 'https://doi.org/10.1126/sciadv.aaz9619',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Duangchantrasiri et al. 2016: Tiger dynamics under improved law enforcement',
    url: 'https://doi.org/10.1111/cobi.12655',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Sanderson et al. 2023: Range-wide trends in tiger conservation landscapes, 2001–2020',
    url: 'https://doi.org/10.3389/fcosc.2023.1191280',
    kind: 'distribution',
    accessedAt: TIGER_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-panthera-tigris',
    slug: 'tiger',
    names: {
      zh: '虎',
      en: 'Tiger',
      aliases: ['老虎'],
    },
    scientificName: 'Panthera tigris',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Carnivora', '食肉目'),
      taxon('Felidae', '猫科'),
      taxon('Panthera', '豹属'),
    ),
    conservation: conservation('EN', 'decreasing', 2021, 'A2abcd'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: [
        '南亚次大陆与喜马拉雅山麓',
        '东南亚大陆森林',
        '苏门答腊岛',
        '孙德尔本斯红树林',
        '中国东北与俄罗斯远东温带森林',
      ],
      countries: [
        '孟加拉国',
        '不丹',
        '中国',
        '印度',
        '印度尼西亚',
        '马来西亚',
        '缅甸',
        '尼泊尔',
        '俄罗斯',
        '泰国',
      ],
      range:
        '历史分布从西亚和里海地区横跨南亚、东南亚与东北亚，并延伸至巽他群岛；当前确认的繁殖或常驻种群分布于 10 个国家，占用范围不足历史范围的 7%，且在国家内部高度破碎。',
      center: { lat: 25, lng: 90 },
    },
    habitats: [
      {
        name: '热带与亚热带森林和草地镶嵌',
        realm: 'terrestrial',
        description:
          '利用常绿林、落叶林、高草地和林缘形成的连续隐蔽带；猎物密度、淡水和低干扰通道共同决定繁殖种群能否维持。',
        isPrimary: true,
      },
      {
        name: '红树林与湿地林缘',
        realm: 'terrestrial',
        description:
          '在孙德尔本斯等潮汐红树林和湿地边缘活动，水道切割、海岸变化与人虎接触塑造当地空间利用。',
      },
      {
        name: '半干旱林地与灌丛',
        realm: 'terrestrial',
        description:
          '印度西部等地的疏林、灌丛和草地仍可支持虎，前提是保留遮蔽、水源和中大型有蹄类。',
      },
      {
        name: '温带针阔混交林',
        realm: 'terrestrial',
        description:
          '中国东北和俄罗斯远东的寒温带森林猎物分散、季节性强，虎的活动范围通常比高猎物密度地区更大。',
        isPrimary: true,
      },
    ],
    measurements: {
      length: {
        min: 150,
        max: 230,
        unit: 'cm',
        note: '头体长；另有 90–110 厘米尾长，为跨性别和地理种群的物种级概览',
      },
      weight: {
        min: 75,
        max: 325,
        unit: 'kg',
        note: 'IUCN/SSC 猫科专家组物种级宽范围，不代表典型个体或任何单一亚种',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: ['野猪', '水鹿', '斑鹿', '印度野牛', '麂类', '赤鹿与狍'],
      description:
        '以伏击方式捕食中大型有蹄类，跨研究分析显示明显偏好约 60 至 250 千克的猎物；具体食谱随地区、季节和猎物群落改变，也可能利用较小猎物或家畜。',
    },
    activity: [
      '多数时间独居，成年个体维护并以气味标记领域',
      '利用植被和地形隐蔽接近猎物并发动短距离伏击',
      '以喷尿、后足刨抓、擦蹭和抓痕进行间接交流',
      '活动时段随猎物、温度与人类干扰改变',
    ],
    tags: [
      '亚洲森林',
      '顶级捕食者',
      '旗舰物种',
      'IUCN 濒危',
      '国家一级重点保护野生动物',
      'CITES 附录 I',
    ],
    summary:
      '研究者可凭独特条纹识别个体；虎跨越亚洲多种森林与草地景观，却只保有不足 7% 的历史分布。',
    description:
      '虎生活在苏门答腊雨林、孙德尔本斯红树林、印度半干旱林地和东北亚温带森林等亚洲生境。橙赭底色与各不相同的黑色条纹帮助它隐入植被，也让研究者从重复相机记录中识别个体。成年虎多独自活动，依靠潜近和短距离伏击捕获野猪、水鹿等猎物。保护虎需要守住繁殖地、恢复猎物、维持跨保护地的森林廊道，并减少非法贸易与人虎冲突。',
    storySections: [
      {
        key: 'stripes',
        label: '外形与识别',
        title: '用条纹识别每一只虎',
        body: '红橙至黄赭底毛、黑色纵纹和白色腹面构成虎的醒目标志，条纹排列却因个体而异。研究者在设计严谨的相机阵列中反复拍到左右体侧，再把个体匹配结果放进捕获再捕获模型，才能估算数量和密度。单张照片只证明一次记录。',
      },
      {
        key: 'habitat-breadth',
        label: '生境',
        title: '横跨雨林、红树林与温带森林',
        body: '虎能生活在潮湿赤道雨林、季风落叶林、高草林缘、红树林、半干旱林地和东北亚温带森林。跨度很大，共同条件却清楚：接近猎物所需的隐蔽、稳定水源，以及足够的中大型有蹄类。',
      },
      {
        key: 'scent-network',
        label: '行为与交流',
        title: '独居者沿路径留下信息',
        body: '成年虎大多单独活动，在领域边界和通行路线喷尿、用后足刨抓、擦蹭并留下抓痕。其他虎可以从气味和可见标记中获得领域与繁殖信息。',
      },
      {
        key: 'prey',
        label: '食性与捕猎',
        title: '猎物群落决定一片森林能养多少虎',
        body: '虎借高草和林下遮蔽潜近猎物，再发动短距离伏击。跨地区资料显示，它偏好约 60 至 250 千克的猎物，野猪与水鹿尤其重要。即使森林仍在，若有蹄类被持续捕猎，虎的繁殖与密度也会下降。',
      },
      {
        key: 'maternal-care',
        label: '繁殖与成长',
        title: '幼虎跟随母亲生活一年半以上',
        body: '母虎独自育幼，妊娠约 103 天，每胎通常有 1 至 5 只幼崽。幼虎跟随母亲学习移动、捕猎和避开风险，通常到 18 至 28 月龄才独立。',
      },
      {
        key: 'recovery',
        label: '监测与保护',
        title: '保护繁殖地、猎物和森林廊道',
        body: '反盗猎保护核心繁殖地，猎物恢复提供能量，森林廊道让扩散和基因交流继续发生。相机、条纹识别、空间模型和遗传监测负责判断成效；道路避让、社区共治和贸易执法则处理保护区边界之外的风险。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '林奈描述的 Felis Tigris',
        body: '1758 年，林奈以 Felis Tigris 正式描述虎，原始模式产地记录为印度孟加拉。后来虎被归入豹属 Panthera，形成今天的 Panthera tigris。各只虎的条纹排列不同，这项外形特征如今也用于相机监测中的个体识别。',
      },
    ],
    keyFacts: [
      'IUCN 当前正式值为 EN、A2abcd、下降，评估年为 2021。',
      'IUCN 估计成熟个体 2,608 至 3,905 只，最佳估计 3,140 只；这不是同步全球普查。',
      '当前确认繁殖或常驻种群位于亚洲 10 个国家。',
      '当前占用范围不足历史分布的 7%。',
      '每只虎的条纹排列不同，重复相机记录可据此识别个体。',
      '跨研究分析显示，虎显著偏好约 60 至 250 千克的猎物。',
      '自由活动虎常以喷尿和后足刨抓标记领域边界及通行路线。',
      '幼虎通常在 18 至 28 月龄独立。',
    ],
    threats: [
      '针对皮张、骨骼和其他身体部位的盗猎与非法贸易',
      '有蹄类被捕猎、栖息地退化或疾病冲击造成的猎物衰退',
      '农业、种植园、采伐、聚落和资源开采导致栖息地丧失',
      '道路等线性基础设施切割活动区、增加人员可达性和死亡风险',
      '捕食家畜或伤人事件引发的报复性捕杀',
      '小种群隔离带来的近交风险，以及虎和猎物疾病的叠加压力',
    ],
    conservationActions: [
      '以巡护、情报和司法协作保护繁殖源种群并打击盗猎及非法贸易',
      '控制猎物盗猎，恢复中大型有蹄类及其生境',
      '维护保护地之间的森林廊道，并对道路与采矿实施避让和生态缓解',
      '通过牲畜防护、快速响应、公平补偿和社区共同治理减少报复性捕杀',
      '以双侧相机、条纹识别、空间捕获再捕获和遗传方法开展长期监测',
    ],
    metrics: {
      adultLengthCm: [150, 230],
      adultMassKg: [75, 325],
      lifespanYears: [12, 15],
      estimatedMatureIndividuals: [2608, 3905],
    },
    featuredStats: [
      {
        key: 'mature-population',
        label: '成熟个体估计',
        value: '2,608–3,905',
        unit: '只',
        note: '2021 年 IUCN 全球评估；最佳估计 3,140 只，不是同步普查',
      },
      {
        key: 'current-range-countries',
        label: '繁殖或常驻国家',
        value: '10',
        unit: '个',
        note: '不含已在近期失去野生虎的柬埔寨、老挝和越南',
      },
      {
        key: 'historical-range',
        label: '历史范围保有',
        value: '<7',
        unit: '%',
        note: '当前占用范围相对历史分布',
      },
      {
        key: 'cub-independence',
        label: '幼虎独立',
        value: '18–28',
        unit: '月龄',
        note: 'IUCN/SSC 猫科专家组物种概览',
      },
    ],
    media: {
      image: './images/species/tiger/01-forest-edge-portrait.webp',
      alt: '一只完整的橙黑条纹成年虎从湿润林缘走过，左侧留有开阔植被，四肢和长尾均在画面内',
      focalPoint: { x: 0.65, y: 0.56 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/tiger/02-stripe-pattern-profile.webp',
          alt: '一只完整成年虎侧身穿过高草地，橙色底毛、白色腹面和不规则黑色纵纹清楚可见',
          title: '不重复的条纹',
          caption:
            '每只虎的条纹排列不同；重复拍摄与个体匹配可用于种群研究，单张生成图不代表真实登记个体。',
          focalPoint: { x: 0.55, y: 0.55 },
        },
        {
          image: './images/species/tiger/03-forest-grassland-water-mosaic.webp',
          alt: '一只小比例远景虎沿森林和高草交界处行走，前景有连续的浅水河道和湿润草地',
          title: '隐蔽、水与猎物',
          caption:
            '虎利用多种气候带的生境；这幅镶嵌景观只表现遮蔽、水源和连通空间，不代表完整分布范围。',
          focalPoint: { x: 0.73, y: 0.68 },
        },
        {
          image: './images/species/tiger/04-wild-boar-ambush.webp',
          alt: '一只虎低头穿过林下高草，右前方一只野猪与它保持数个身长的距离',
          title: '借掩体接近',
          caption:
            '跨研究资料支持野猪是重要猎物；画面只示意接近姿态，没有记录追逐、接触或伏击成功。',
          focalPoint: { x: 0.46, y: 0.57 },
        },
        {
          image: './images/species/tiger/05-tigress-with-cubs.webp',
          alt: '一只完整母虎带着恰好两只分开行走的幼虎穿过落叶林小径，三条尾巴均清楚可见',
          title: '漫长的母幼期',
          caption:
            '幼虎通常在 18 至 28 月龄独立，日常育幼主要由母虎承担；画面不代表真实家庭或精确月龄。',
          focalPoint: { x: 0.59, y: 0.56 },
        },
        {
          image: './images/species/tiger/06-camera-trap-monitoring.webp',
          alt: '一只完整成年虎沿林间小径走过，右侧树干固定着一台无品牌相机，动物与设备没有接触',
          title: '从条纹到种群估算',
          caption:
            '重复相机记录可借独特条纹识别个体；单张记录不能确定丰度、密度或趋势。',
          focalPoint: { x: 0.55, y: 0.53 },
        },
      ],
    },
    sources: TIGER_SOURCES,
    featured: true,
    publishedAt: TIGER_CONTENT_DATE,
    updatedAt: TIGER_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
