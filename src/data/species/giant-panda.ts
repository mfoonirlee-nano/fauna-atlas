import type { Species } from '../../types/species.ts';

import { CONTENT_DATE, animalTaxonomy, conservation, taxon } from './shared.js';

const PANDA_SOURCE_DATE = '2026-08-12' as const;

const PANDA_CONTENT_DATE = '2026-08-13' as const;

const profile = {
    id: 'species-ailuropoda-melanoleuca',
    slug: 'giant-panda',
    names: { zh: '大熊猫', en: 'Giant Panda', aliases: ['猫熊', '竹熊'] },
    scientificName: 'Ailuropoda melanoleuca',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Carnivora', '食肉目'),
      taxon('Ursidae', '熊科'),
      taxon('Ailuropoda', '大熊猫属'),
    ),
    conservation: conservation('VU', 'increasing', 2016, 'C2a(i)'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: ['秦岭', '岷山', '邛崃山', '大相岭', '小相岭', '凉山'],
      countries: ['中国'],
      endemicTo: ['中国'],
      range: '野生种群仅自然分布于中国四川、陕西和甘肃三省的六大山系；道路、聚落与地形仍将部分局域种群彼此分隔。',
      center: { lat: 31.3, lng: 103.2 },
    },
    habitats: [
      {
        name: '温带山地竹林',
        realm: 'terrestrial',
        description: '主要活动于海拔约 2,000 至 3,700 米；已记录的整体范围更宽，约 1,200 至 4,000 米。常选择竹类连续、水分充足的山地森林。',
        isPrimary: true,
      },
      {
        name: '针阔叶混交林',
        realm: 'terrestrial',
        description: '成熟林木提供遮蔽、产仔洞穴和攀爬空间，林下竹层则供应全年食物。',
      },
    ],
    measurements: {
      length: { min: 1.2, max: 1.8, unit: 'm', note: '头体长' },
      height: { min: 0.65, max: 0.75, unit: 'm', note: '肩高' },
      weight: { min: 90, max: 110, unit: 'kg', note: '野生成体常见范围，雄性通常更大' },
    },
    diet: {
      types: ['herbivore'],
      foods: ['竹笋', '竹叶', '竹秆', '少量其他植物与动物性食物'],
      description: '竹子约占野外食物的 99%。由于消化道仍接近食肉动物、利用竹纤维的效率有限，成体通常每天取食约 12 至 18 千克，并把一天的大半时间用于进食。',
    },
    activity: ['昼夜分段活动', '独居', '季节性垂直迁移', '不冬眠'],
    tags: ['中国特有种', '国家一级保护野生动物', '旗舰物种', '竹食特化'],
    summary: '大熊猫生活在中国西部的山地竹林，主要吃竹子。黑白被毛和能夹握竹秆的前掌，是它醒目的特征。',
    description: '大熊猫是中国特有的熊科动物。虽然属于食肉目，它的食物几乎全是竹子，消化系统仍保留食肉动物的特点。厚实被毛帮助它在湿冷山林中保温，强壮的颌骨用于咀嚼竹子。前掌有一块膨大的腕骨，能与五趾配合夹住竹秆，人们把它叫作“伪拇指”。',
    storySections: [
      {
        key: 'adaptation',
        label: '形态与适应',
        title: '怎样握住并嚼碎竹子',
        body: '大熊猫的耳朵、眼圈、肩部与四肢呈黑色，其余大部分被毛呈白色。粗硬的外层毛和内层绒毛帮助保温防潮。宽大臼齿与发达的咀嚼肌碾碎竹材，前掌膨大的桡侧籽骨形成“伪拇指”，与五趾配合抓握竹子。',
      },
      {
        key: 'communication',
        label: '行为与交流',
        title: '树干上的气味留言',
        body: '成体大多独自活动，通过树干、岩石和常用路径上的气味标记传递身份、领域与繁殖状态，也会用多种叫声沟通。它们善于爬树、能够游泳，并会随竹笋和竹叶的季节变化在山坡上移动。',
      },
      {
        key: 'reproduction',
        label: '繁殖与成长',
        title: '雌性每年适宜受孕的时间很短',
        body: '大熊猫约在 4 至 7 岁性成熟，雌性每年春季仅有约 2 至 3 天适宜受孕。交配后约 90 至 180 天产下 1 至 2 只幼崽，新生幼崽平均仅约 120 克；若产双胎，野外母兽通常只集中照料其中一只，幼崽会随母生活约 1.5 至 3 年。',
      },
      {
        key: 'ecological-role',
        label: '生态意义',
        title: '森林保护也惠及其他物种',
        body: '保护人员常以大熊猫吸引公众关注，并把它的分布区用于规划森林保护。保护连续山地森林、竹林与生态廊道，也能惠及羚牛、川金丝猴、鸟类、两栖动物和植物，不过不同类群的受益程度有所差别。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '从四川标本到科学名称',
        body: '1869 年，阿尔芒·戴维在四川取得一只成年雌兽和一只幼兽的标本，发表大熊猫的科学描述，最初把它命名为 Ursus melanoleucus。后来研究者将它移入大熊猫属，形成今天使用的 Ailuropoda melanoleuca。那两件用于描述的标本仍保存在法国国家自然历史博物馆，是核对这个名称的参照。',
      },
    ],
    keyFacts: [
      '“伪拇指”并非真正的第六指，而是由前掌膨大的桡侧籽骨形成。',
      '竹子约占野外食物的 99%；成体通常每天吃 12 至 18 千克，竹笋丰富时摄入量可更高。',
      '大熊猫不会冬眠，严冬仍须外出觅食，并随竹类物候进行季节性垂直移动。',
      '彼此相隔的成体会通过气味标记和叫声交换身份、领域与繁殖信息。',
      '新生幼崽平均仅约 120 克，大约只有母体体重的千分之一。',
      '陕西秦岭曾多次记录到罕见的棕白色个体，这是自然出现的毛色变异。',
    ],
    threats: ['栖息地丧失与破碎化', '道路和基础设施加剧隔离、阻碍种群交流', '气候变化可能压缩或迁移适生竹林', '孤立小种群面临的近交与随机事件风险'],
    conservationActions: ['大熊猫国家公园与保护地协同管护', '栖息地修复和生态廊道连通', '红外相机、遗传与种群长期监测'],
    metrics: {
      adultLengthCm: [120, 180],
      adultMassKg: [90, 110],
      lifespanYears: [15, 20],
      elevationM: [1200, 4000],
    },
    featuredStats: [
      { key: 'wild-population', label: '野生数量', value: '约 1,900', unit: '只', note: '近年官方约数；第四次全国调查记录 1,864 只' },
      { key: 'daily-bamboo', label: '通常每日食竹', value: '12—18', unit: '千克', note: '竹笋季可更多' },
      { key: 'elevation', label: '主要活动海拔', value: '2,000—3,700', unit: '米' },
      { key: 'newborn-mass', label: '幼崽初生体重', value: '约 120', unit: '克' },
    ],
    media: {
      image: './images/species/giant-panda/01-forest-portrait.webp',
      alt: '晨雾山地竹林中站在苔藓岩石上的成年大熊猫',
      focalPoint: { x: 0.72, y: 0.49 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/giant-panda/02-bamboo-feeding.webp',
          alt: '成年大熊猫坐在林下用前爪抓握竹叶取食',
          title: '竹食日常',
          caption: '竹子约占野外食物的 99%。低效的纤维消化，意味着长时间而持续的取食。',
          focalPoint: { x: 0.5, y: 0.48 },
        },
        {
          image: './images/species/giant-panda/03-mountain-habitat.webp',
          alt: '大熊猫在云雾笼罩的温带山地森林中穿过林下植被',
          title: '山林尺度',
          caption: '连续的山地森林与竹林，影响个体能否迁移、觅食，并在繁殖季找到彼此。',
          focalPoint: { x: 0.36, y: 0.7 },
        },
        {
          image: './images/species/giant-panda/04-tree-climbing.webp',
          alt: '亚成年大熊猫在湿润的山地森林中攀爬苔藓树干',
          title: '攀树本领',
          caption: '大熊猫看似笨重，却善于攀树；幼体尤其会借树木休息和避险。',
          focalPoint: { x: 0.55, y: 0.48 },
        },
        {
          image: './images/species/giant-panda/05-mother-and-cub.webp',
          alt: '竹林中一只大熊猫母兽带着一只幼崽同行',
          title: '随母成长',
          caption: '幼崽通常随母生活约 1.5 至 3 年，逐步学习取食、攀爬与独立生存。',
          focalPoint: { x: 0.52, y: 0.55 },
        },
        {
          image: './images/species/giant-panda/06-winter-movement.webp',
          alt: '薄雪覆盖的竹林廊道中行走的成年大熊猫',
          title: '雪季移动',
          caption: '大熊猫不冬眠，会在冬季继续觅食，并随食物变化沿山坡移动。',
          focalPoint: { x: 0.62, y: 0.62 },
        },
      ],
    },
    sources: [
      {
        title: 'IUCN Red List — Ailuropoda melanoleuca',
        url: 'https://www.iucnredlist.org/species/712/121745669',
        kind: 'conservation',
        accessedAt: PANDA_SOURCE_DATE,
      },
      {
        title: 'Mammal Diversity Database — Ailuropoda melanoleuca',
        url: 'https://www.mammaldiversity.org/taxon/1005930/',
        kind: 'taxonomy',
        accessedAt: PANDA_SOURCE_DATE,
      },
      {
        title: '国家林草局 — 科普：走近大熊猫',
        url: 'https://www.forestry.gov.cn/c/www/kp/580469.jhtml',
        kind: 'general',
        accessedAt: PANDA_SOURCE_DATE,
      },
      {
        title: '国家林草局 — 第四次全国大熊猫调查主要结果',
        url: 'https://www.forestry.gov.cn/main/65/20150302/758158.html',
        kind: 'distribution',
        accessedAt: PANDA_SOURCE_DATE,
      },
      {
        title: '国家林草局、农业农村部 — 国家重点保护野生动物名录',
        url: 'https://www.forestry.gov.cn/sites/main/main/gov/content.jsp?TID=20210205122451967544533',
        kind: 'conservation',
        accessedAt: PANDA_SOURCE_DATE,
      },
      {
        title: 'Smithsonian National Zoo — Giant panda',
        url: 'https://nationalzoo.si.edu/animals/giant-panda',
        kind: 'ecology',
        accessedAt: PANDA_SOURCE_DATE,
      },
      {
        title: 'WWF — Giant pandas and climate change',
        url: 'https://www.worldwildlife.org/our-work/wildlife/wildlife-and-climate-change/giant-pandas-and-climate-change/',
        kind: 'conservation',
        accessedAt: PANDA_SOURCE_DATE,
      },
      {
        title: '国家发展改革委 — 大熊猫国家公园是怎样炼成的？',
        url: 'https://www.ndrc.gov.cn/wsdwhfz/202606/t20260618_1405986.html',
        kind: 'conservation',
        accessedAt: PANDA_SOURCE_DATE,
      },
      {
        title: '国家林草局 — 认识大熊猫',
        url: 'https://www.forestry.gov.cn/c/www/dzw/506528.jhtml',
        kind: 'general',
        accessedAt: PANDA_SOURCE_DATE,
      },
      {
        title: '国家林草局 — 大熊猫的行为特征',
        url: 'https://www.forestry.gov.cn/c/www/lcdt/582627.jhtml',
        kind: 'ecology',
        accessedAt: PANDA_SOURCE_DATE,
      },
      {
        title: '法国国家自然历史博物馆：1869 年大熊猫描述与模式标本',
        url: 'https://www.mnhn.fr/fr/communique-de-presse/deux-pandas-historiques-font-leur-entree-dans-la-grande-galerie-de-l-evolution',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: CONTENT_DATE,
    updatedAt: PANDA_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
