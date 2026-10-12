import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const MONARCH_BUTTERFLY_SOURCE_DATE = '2026-08-21' as const;

const MONARCH_BUTTERFLY_CONTENT_DATE = '2026-08-21' as const;

const MONARCH_BUTTERFLY_SOURCES = [
  {
    title: 'IUCN Red List — Danaus plexippus (assessed 2021; errata published 2022-1)',
    url: 'https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T159971A219149911.en',
    kind: 'conservation',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Danaus plexippus ssp. plexippus (current VU A2b assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T194052138A246096271.en',
    kind: 'conservation',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'IUCN Standards and Petitions Committee 2023 — Monarch Butterfly ruling',
    url: 'https://nc.iucnredlist.org/redlist/content/attachment_files/SPC-Ruling-Monarch_Butterfly-27Sept2023.pdf',
    kind: 'conservation',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'ITIS — Danaus plexippus (TSN 117273)',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=117273',
    kind: 'taxonomy',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'NCBI Taxonomy — Danaus plexippus (Taxonomy ID 13037)',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=13037&mode=Info',
    kind: 'taxonomy',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'USFWS — Monarch current species profile',
    url: 'https://www.fws.gov/species/monarch-danaus-plexippus',
    kind: 'general',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'USFWS 2024 — Monarch Butterfly Species Status Assessment, version 2.3',
    url: 'https://www.fws.gov/sites/default/files/documents/2025-01/ssa_monarch-butterfly_2024.pdf',
    kind: 'conservation',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'USFWS — Save the Monarch and current ESA proposal status',
    url: 'https://www.fws.gov/our-work/pollinators/save-monarch',
    kind: 'conservation',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'COSEWIC 2016 — Monarch assessment and status report',
    url: 'https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/monarch-2016.html',
    kind: 'general',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'Canada 2023 — SARA Schedule 1 amendment summary for Monarch',
    url: 'https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/related-information/order-summary-order-amending-schedule-1-sara-monarch-western-bumble-bees.html',
    kind: 'conservation',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'Mexico — NOM-059-SEMARNAT-2010',
    url: 'https://www.biodiversidad.gob.mx/media/1/biodiversidad/files/NOM_059_SEMARNAT_2010.pdf',
    kind: 'conservation',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'Monarch Joint Venture — Vital Statistics and Measuring',
    url: 'https://monarchjointventure.org/monarch-biology/vital-statistics-and-measuring',
    kind: 'general',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'Monarch Joint Venture — Monarch Life Cycle',
    url: 'https://monarchjointventure.org/monarch-biology/life-cycle',
    kind: 'ecology',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'Merlin et al. 2009 — Antennal circadian clocks coordinate sun-compass orientation',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2754321/',
    kind: 'ecology',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'Guerra et al. 2014 — Light-dependent magnetic compass in monarch butterflies',
    url: 'https://doi.org/10.1038/ncomms5164',
    kind: 'ecology',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'CONANP 2026 — 2025–2026 eastern overwintering colony area',
    url: 'https://www.gob.mx/conanp/prensa/la-presencia-de-la-mariposa-monarca-aumenta-64-en-los-bosques-de-hibernacion-mexicanos-421583',
    kind: 'conservation',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'Xerces Society 2026 — 2025 Western Monarch Count',
    url: 'https://xerces.org/press/western-monarch-numbers-remain-at-historic-low',
    kind: 'conservation',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'Chinese Academy of Sciences CEMPS — 帝王蝶 name usage',
    url: 'https://cemps.cas.cn/kyjz/kyjz2014/201410/t20141008_5172604.html',
    kind: 'general',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'Chinese Academy of Sciences IMECH — 君主斑蝶 and 黑脉金斑蝶 name usage',
    url: 'https://imech.cas.cn/science/lxyd/jctp/202302/t20230228_6686378.html',
    kind: 'general',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
  {
    title: 'Hong Kong AFCD — 君主斑蝶 regional name usage',
    url: 'https://www.afcd.gov.hk/tc_chi/conservation/hkbiodiversity/newsletters/files/hkbonewsletter6.pdf',
    kind: 'general',
    accessedAt: MONARCH_BUTTERFLY_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-danaus-plexippus',
    slug: 'monarch-butterfly',
    names: {
      zh: '帝王蝶',
      en: 'Monarch Butterfly',
      aliases: ['君主斑蝶', '黑脉金斑蝶', 'Monarch', 'Papilio plexippus'],
    },
    scientificName: 'Danaus plexippus',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Insecta', '昆虫纲'),
      taxon('Lepidoptera', '鳞翅目'),
      taxon('Nymphalidae', '蛱蝶科'),
      taxon('Danaus', '斑蝶属'),
    ),
    conservation: conservation('LC', 'unknown', 2021),
    distribution: {
      realms: ['terrestrial'],
      continents: ['北美洲', '南美洲', '大洋洲', '亚洲', '非洲', '欧洲'],
      regions: [
        '北美祖先来源区及东部与西部迁徙系统',
        '中美洲—加勒比—南美洲定居种群',
        '大洋洲、亚洲与太平洋岛屿扩散种群',
        '非洲岛屿、北非与伊比利亚半岛扩散种群',
      ],
      countries: [],
      range:
        '帝王蝶在北美东部和西部有长距离迁徙种群，温暖地区也有定居或局部移动种群；亚洲、非洲、欧洲、大洋洲与多座岛屿均有现生记录。遗传研究与 USFWS 2024 状态评估把北美迁徙种群视为现存全球种群的祖先来源，其他地区多为后期扩散或归化；IUCN 2021 及部分 USFWS 分布文字则沿用较宽的“原生美洲”口径，两者边界不同。地图聚焦北美迁徙系统，不表示全球全部分布或丰度。',
      center: { lat: 31, lng: -103 },
    },
    habitats: [
      {
        name: '含本地乳草的开阔繁殖生境',
        realm: 'terrestrial',
        description:
          '草原、田野、湿地边缘、道路边、林间空地和城市花园中的适宜乳草为产卵与幼虫发育提供寄主；不同地区需要匹配当地原生乳草。',
        isPrimary: true,
      },
      {
        name: '连续花源与迁徙停歇地',
        realm: 'terrestrial',
        description:
          '成虫在繁殖和迁徙途中利用多种季节性花蜜植物，并在湖岸、半自然草地、林缘和其他受庇护地点补能、集结与夜栖。',
        isPrimary: true,
      },
      {
        name: '受庇护的越冬森林',
        realm: 'terrestrial',
        description:
          '北美东部迁徙种群集中在墨西哥中部高海拔 oyamel 冷杉林越冬；西部种群则利用加州与下加州沿海受庇护林分。完整冠层和局地水分共同缓冲低温、干燥与风暴。',
      },
    ],
    measurements: {
      weight: {
        typical: 0.5,
        unit: 'g',
        note: 'USFWS 概括的成虫平均体重；随进食、脱水、迁飞和生命阶段起伏',
      },
      wingspan: {
        min: 93,
        max: 105,
        unit: 'mm',
        note: 'COSEWIC 成虫翼展；USFWS 公众资料以更粗粒度概括为约 7—10 厘米',
      },
    },
    diet: {
      types: ['herbivore', 'nectarivore'],
      foods: ['乳草属等适宜乳草的叶片与幼嫩组织（幼虫）', '多种季节性开花植物的花蜜（成虫）'],
      description:
        '幼虫依赖乳草类寄主，从中摄取并保留强心苷用于化学防御，乳草也是产卵基质。成虫吸食多种花蜜植物，食物种类比幼虫丰富。',
    },
    activity: [
      '日行性，依赖环境热量完成飞行与觅食',
      '卵、五龄幼虫、裸蛹和成虫组成完全变态生命周期',
      '北美部分种群进行长距离季节迁徙，全球也有定居种群',
      '秋季迁徙世代进入生殖滞育并积累脂肪',
      '以时间补偿太阳罗盘定向，特定阴天条件下可使用磁罗盘线索',
      '冷凉时在枝叶上聚集夜栖或越冬',
    ],
    tags: ['乳草专食幼虫', '多代迁徙', '完全变态', '警戒色', 'IUCN 无危', '迁徙亚种易危', '太阳罗盘', '越冬群聚'],
    summary: '帝王蝶的翅膀橙黑相间，分布广泛，全球评估为无危。北美迁徙群体则处于易危状态，迁徙途中需要乳草、蜜源植物和越冬森林。',
    description:
      '帝王蝶幼虫在适宜乳草上生长，并积累用于化学防御的强心苷，成虫则从多种花蜜植物补充能量。北美东部秋季世代能迁飞数千米，抵达墨西哥高山冷杉林，次年由它们启动北返，再由后续世代接力。IUCN 2021 年整个物种的全球评估为无危、趋势未知，北美迁徙亚种 Danaus plexippus plexippus 则另评为易危 A2b，引用时需要区分范围。',
    storySections: [
      {
        key: 'orange-black-wings',
        label: '翅纹与雌雄',
        title: '同一副橙黑翅面，藏着两处性别线索',
        body: '四片橙色翅被黑色翅脉分隔，宽黑边缘排列白斑。雌蝶翅脉通常更宽、更深；雄蝶两片后翅各有一个黑色香鳞斑，翅脉相对较细。副王蛱蝶后翅常有贯穿翅脉的横黑线，这一条在帝王蝶翅面上寻不见；自然磨损、角度和光线仍会让单张照片难以可靠鉴定。',
      },
      {
        key: 'milkweed-contract',
        label: '乳草与防御',
        title: '幼虫吃乳草，成虫吸花蜜',
        body: '雌蝶把卵单独产在适宜乳草上，幼虫经过五个龄期吃叶片，并储存强心苷用于化学防御。橙黑警戒色能阻止部分捕食者，但有些天敌仍能捕食。羽化后的成蝶吸食多种花蜜，繁殖区和迁徙路线需要同时保留乳草与春秋连续花源。',
      },
      {
        key: 'two-adult-clocks',
        label: '变态与寿命',
        title: '大多数成蝶活几周，最后一代却要跨过整个冬天',
        body: '卵通常约 2 至 5 天孵化，幼虫的五个龄期约 9 至 18 天，翠绿色裸蛹再经历约 6 至 14 天。春夏繁殖世代成蝶通常活 2 至 5 周，秋季世代则进入生殖滞育、积累脂肪，可活 6 至 9 个月，完成南迁、越冬与翌春第一段北返。寿命因世代生活方式不同而变。',
      },
      {
        key: 'relay-migration',
        label: '迁徙与导航',
        title: '南下是一代远行，北返是一场接力',
        body: '北美东部秋迁个体可飞越 3,000 千米并持续两个多月；它们此前从未去过墨西哥，却能用触角内的昼夜时钟校正太阳方位，在特定阴天条件下还可利用磁罗盘线索。越冬后同一批长寿个体启动北返，随后通常由 2 至 3 个新世代继续向北，因此没有一只蝶独自完成全年往返。',
      },
      {
        key: 'winter-microclimate',
        label: '越冬林',
        title: '一片冷杉冠层，把严寒与干燥挡在群落之外',
        body: '墨西哥中部 oyamel 冷杉林的海拔、坡向、冠层和水分共同形成凉而不冻、湿而不过度凝结的微气候，数以万计的帝王蝶在枝叶上闭翅聚集。疏伐、砍伐、风暴、干旱和升温会改变这层保护；加州沿海越冬点也依赖受庇护林分，但树种组成和管理问题不同。',
      },
      {
        key: 'one-species-two-statuses',
        label: '状态与保护',
        title: '全球物种与迁徙亚种的状态',
        body: 'IUCN 对整个 Danaus plexippus 的 2021 年全球评估是无危、趋势未知；北美迁徙亚种 D. p. plexippus 的独立记录则为易危 A2b，2022 年最初发布的濒危结论已在 2023 年申诉裁定中更改。保护必须沿整条路线连接当地乳草、连续花源、停歇地和越冬微气候，并同时减少农药与极端天气风险。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的命名与迁徙亚种',
        body: '帝王蝶的科学命名记录追溯到林奈 1758 年的描述，现行学名为 Danaus plexippus。北美迁徙群体常用三段名称 Danaus plexippus plexippus，第三个词标明亚种。这个区别有实际意义，整个物种与迁徙亚种的分布和保护评估范围不同。',
      },
    ],
    keyFacts: [
      '整个物种 Danaus plexippus 的 IUCN 全球状态为无危，北美迁徙亚种 D. p. plexippus 另评为易危 A2b，引用时需要注明对象。',
      '成虫翼展约 93 至 105 毫米，平均体重约 0.5 克；成虫头尾体长暂无可靠范围。',
      '雄蝶每片后翅各有一个黑色香鳞斑，雌蝶翅面素净、翅脉通常更宽；副王蛱蝶那种后翅横黑线，在帝王蝶身上寻不见。',
      '幼虫依赖乳草，成蝶却吸食多种花蜜；两类资源需要沿繁殖区和迁徙路线持续衔接。',
      '一般繁殖季成蝶只活 2 至 5 周，进入生殖滞育的秋季迁徙世代可活 6 至 9 个月。',
      '北美东部秋迁可超过 3,000 千米；春季北返通常由 2 至 3 个连续世代接力完成。',
      '触角内的昼夜节律时钟参与时间补偿太阳罗盘，阴天时还可使用光依赖的磁罗盘线索。',
    ],
    threats: [
      '乳草与连续花蜜资源因草原转作、开发、道路和景观破碎化而减少',
      '除草剂移除寄主与花源，杀虫剂造成直接死亡或亚致死暴露',
      '墨西哥 oyamel 越冬林砍伐、疏伐、退化和加州越冬林不相容管理',
      '干旱、极端温度、风暴、野火和物候错配等气候压力',
      '迁徙停歇地、夜栖点与繁殖斑块之间的连通性下降',
      '小型或高度聚集的区域种群对疾病、寄生和随机灾害格外脆弱',
    ],
    conservationActions: [
      '在当地原生范围内恢复多种适宜乳草，并从春到秋配置连续、无农药污染的本地花源',
      '保护和连接草原、湿地边缘、道路边、城市半自然斑块及迁徙停歇地',
      '采用综合虫害管理，减少敏感季节和迁徙通道中的除草剂、杀虫剂及漂移暴露',
      '保护墨西哥 oyamel 冷杉林和加州沿海越冬林的冠层、水分与防风微气候',
      '以东部越冬占据面积、西部越冬点计数和繁殖季监测分别追踪不同种群，避免跨单位换算',
      '依据当地官方指导选择乳草物种和管理方式，避免把一个地区的种植清单全球照搬',
    ],
    metrics: {
      wingspanCm: [9.3, 10.5],
    },
    featuredStats: [
      {
        key: 'adult-wingspan',
        label: '成虫翼展',
        value: '93—105',
        unit: '毫米',
        note: 'COSEWIC 范围；USFWS 公众资料以约 7 至 10 厘米作更粗粒度概括',
      },
      {
        key: 'average-adult-mass',
        label: '成虫平均体重',
        value: '约 0.5',
        unit: '克',
        note: '平均量级；个体间各有出入',
      },
      {
        key: 'adult-lifespan',
        label: '成蝶寿命',
        value: '2—5 周 / 6—9 月',
        note: '前者为一般繁殖世代；后者仅为迁徙与越冬滞育世代',
      },
      {
        key: 'eastern-migration',
        label: '东部秋迁距离',
        value: '>3,000',
        unit: '千米',
        note: '路线和起点因个体而异；春季北返通常由 2 至 3 代接力',
      },
    ],
    media: {
      image: './images/species/monarch-butterfly/01-female-milkweed-portrait.webp',
      alt: '北美夏季草甸中，一只完整雌性帝王蝶在右侧粉色普通乳草花序上展翅吸蜜，左侧保留绿色留白',
      focalPoint: { x: 0.66, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/monarch-butterfly/02-diagnostic-male-wing-pattern.webp',
          alt: '一只雄性帝王蝶在一枝黄花上自然展翅，每片后翅各有一个黑色香鳞斑，翅面没有贯穿后翅的横黑线',
          title: '后翅上的两枚雄性标记',
          caption: '雄蝶两片后翅各有一枚香鳞斑，雌蝶翅面素净；照片鉴别还需把角度与磨损一并考虑。',
          focalPoint: { x: 0.52, y: 0.49 },
        },
        {
          image: './images/species/monarch-butterfly/03-milkweed-caterpillar-feeding.webp',
          alt: '一只黑白黄横纹的晚龄帝王蝶幼虫伏在普通乳草叶缘取食，身体前后端可见黑色肉质触须',
          title: '乳草叶缘的专食幼虫',
          caption: '乳草是幼虫寄主和强心苷来源；前后那两对肉质触须是感觉器官，与毒刺无关。',
          focalPoint: { x: 0.58, y: 0.53 },
        },
        {
          image: './images/species/monarch-butterfly/04-jade-chrysalis.webp',
          alt: '一枚翠绿色帝王蝶裸蛹以黑色尾突倒挂在细枝下方，表面带窄金黑点带和少量金色斑点',
          title: '翠绿裸蛹',
          caption: '帝王蝶的蛹通过尾端钩刺固定在丝垫上并倒挂，呈翠绿色，蛹期通常约 6 至 14 天。',
          focalPoint: { x: 0.56, y: 0.5 },
        },
        {
          image: './images/species/monarch-butterfly/05-great-lakes-autumn-migration.webp',
          alt: '秋季五大湖一段泛化湖岸上空，多只帝王蝶沿同一大方向飞过一枝黄花、紫菀和变色林地',
          title: '湖岸把远行者暂时聚到一起',
          caption: '湖岸和半岛常成为迁徙途中的集结与补能地；画面是场景重构，真实的路线每只蝶各不相同。',
          focalPoint: { x: 0.59, y: 0.49 },
        },
        {
          image: './images/species/monarch-butterfly/06-oyamel-fir-overwintering.webp',
          alt: '墨西哥中部一片泛化高海拔冷杉雾林中，大量帝王蝶闭翅聚集在右侧下垂枝条上，左侧可见完整森林纵深',
          title: '冷杉冠层下的越冬微气候',
          caption: '多数个体在冷凉的晨间闭翅停栖；真正的越冬种群规模，要靠地面与航拍的专门计数。',
          focalPoint: { x: 0.62, y: 0.5 },
        },
      ],
    },
    sources: [
      ...MONARCH_BUTTERFLY_SOURCES,
      {
        title: '帝王蝶：描述与命名记录',
        url: 'https://www.gbif.org/species/5133088',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: MONARCH_BUTTERFLY_CONTENT_DATE,
    updatedAt: MONARCH_BUTTERFLY_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
