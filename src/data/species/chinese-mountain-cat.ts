import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const CHINESE_MOUNTAIN_CAT_SOURCE_DATE = '2026-08-15' as const;

const CHINESE_MOUNTAIN_CAT_CONTENT_DATE = '2026-08-15' as const;

const CHINESE_MOUNTAIN_CAT_SOURCES = [
  {
    title: 'IUCN Red List — Felis bieti (2021 assessment, published 2022)',
    url: 'https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T8539A213200674.en',
    kind: 'conservation',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Cat Specialist Group — Chinese Mountain Cat',
    url: 'https://www.catsg.org/living-species-chinesemountaincat',
    kind: 'general',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Cat Specialist Group — Small Cat Report (2024)',
    url: 'https://www.catsg.org/_files/ugd/7a07e2_5a7dae1f6ec241f08ebe844aed073e7a.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database — Felis bieti',
    url: 'https://www.mammaldiversity.org/taxon/1005984/',
    kind: 'taxonomy',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局、农业农村部 — 国家重点保护野生动物名录（2021年第3号）',
    url: 'https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml',
    kind: 'conservation',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'CITES AC30 Doc. 29.1 — Felis bieti (Appendix II)',
    url: 'https://cites.org/sites/default/files/eng/com/ac/30/E-AC30-29-01.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database — Ailuropoda melanoleuca',
    url: 'https://www.mammaldiversity.org/taxon/1005930/',
    kind: 'taxonomy',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database — Ailurus fulgens',
    url: 'https://www.mammaldiversity.org/taxon/1005802/',
    kind: 'taxonomy',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'Liu et al. 2022 — Evolutionary genetics, taxonomy and conservation of the Chinese mountain cat',
    url: 'https://doi.org/10.17520/biods.2022396',
    kind: 'general',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'Yu et al. 2021 — Genomic evidence and introgression to domestic cats',
    url: 'https://doi.org/10.1126/sciadv.abg0221',
    kind: 'taxonomy',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'Kong et al. 2022 — Daily activity from camera traps and satellite collars',
    url: 'https://doi.org/10.17520/biods.2022081',
    kind: 'ecology',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'Han et al. 2020 — First active breeding den of the Chinese mountain cat',
    url: 'https://doi.org/10.24272/j.issn.2095-8137.2020.039',
    kind: 'ecology',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
  {
    title: 'He et al. 2004 — Distribution and conservation status of Felis bieti',
    url: 'https://doi.org/10.1017/S0030605304000092',
    kind: 'distribution',
    accessedAt: CHINESE_MOUNTAIN_CAT_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-felis-bieti',
    slug: 'chinese-mountain-cat',
    names: {
      zh: '荒漠猫',
      en: 'Chinese Mountain Cat',
      aliases: ['中国山猫', '草猫', '草猞猁'],
    },
    scientificName: 'Felis bieti',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Carnivora', '食肉目'),
      taxon('Felidae', '猫科'),
      taxon('Felis', '猫属'),
    ),
    conservation: conservation('VU', 'decreasing', 2021, 'C1'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: ['青藏高原东部', '青海东部', '四川西北部', '甘肃西南部', '西藏东南部局部'],
      countries: ['中国'],
      endemicTo: ['中国'],
      range: '可靠分布限于青藏高原东部的大尺度高地，主要涉及青海东部、四川西北部、甘肃西南部和西藏东南部局部；典型海拔约 2,500 至 5,000 米，评估记录约跨 2,000 至 5,000 米。',
      center: { lat: 35, lng: 101 },
    },
    habitats: [
      {
        name: '高山草原与高寒草甸',
        realm: 'terrestrial',
        description: '最主要的开放高原生境；丰富的鼠兔、鼢鼠和田鼠提供食物，洞穴与低矮植被提供休息和育幼场所。',
        isPrimary: true,
      },
      {
        name: '高寒灌丛与黄土丘陵草原',
        realm: 'terrestrial',
        description: '利用寒冷、干燥且有灌丛或岩石遮蔽的坡地；部分局地景观与牧场、农田和恢复植被镶嵌。',
      },
      {
        name: '针叶林缘与局部混交林',
        realm: 'terrestrial',
        description: '在高原边缘也有林缘和混交林记录；它对森林的依赖有多深，现有资料还说不清。',
      },
    ],
    measurements: {
      length: { min: 60, max: 85, unit: 'cm', note: '头体长；另有 29—35 厘米的粗长环纹尾' },
      weight: { min: 5.5, max: 9, unit: 'kg', note: 'IUCN/SSC 猫科专家组概览范围' },
    },
    diet: {
      types: ['carnivore'],
      foods: ['鼢鼠', '白尾松田鼠', '鼠兔', '野兔', '雉类与山鹑', '偶尔捕食旱獭'],
      description: '以高原小型哺乳动物为核心猎物，也捕食鸟类；会贴近地面监听浅层地下鼢鼠的活动，再用前爪把猎物刨出。',
    },
    activity: ['全天均可活动，傍晚高峰', '独居', '利用洞穴休息与育幼', '母兽可使用多个育幼洞'],
    tags: ['中国特有种', '国家一级保护野生动物', 'CITES 附录 II', '高原小型猫科', '啮齿动物捕食者'],
    summary: '荒漠猫是中国特有的猫科动物，主要生活在青藏高原东部的寒冷草地。淡蓝色虹膜、耳尖毛簇和粗大的环纹尾，是它醒目的外形特征。',
    description: '荒漠猫是现存唯一自然分布完全限于中国的野生猫科类群。它与大熊猫、小熊猫同属食肉目，但荒漠猫属于猫型亚目，两种熊猫属于犬型亚目，亲缘关系较远。它体格敦实，淡蓝虹膜醒目，耳尖带深色毛簇，粗尾末端有清晰环纹。厚毛和长有密毛的脚掌帮助它抵御高原寒风。',
    storySections: [
      {
        key: 'name-and-habitat',
        label: '名字与家园',
        title: '名叫“荒漠”，却住在高原草地',
        body: '荒漠猫的可靠分布集中在青藏高原东部，主要生活在高山草原、高寒草甸和灌丛，也会进入林缘。专家资料没有确认它在真正沙漠中的分布记录，沿用已久的中文名不能准确反映它的主要生境。',
      },
      {
        key: 'adaptation',
        label: '形态与适应',
        title: '淡蓝虹膜与一条粗大的环纹尾',
        body: '它比普通家猫更敦实，短腿、厚毛和脚掌上的密毛适合寒冷多风的高地。淡蓝色虹膜、耳尖毛簇，以及末端带 3 至 6 道深色环和黑尖的粗尾，构成最醒目的识别线索。',
      },
      {
        key: 'hunting',
        label: '食性与捕猎',
        title: '先听见地下的猎物，再把它刨出来',
        body: '鼠兔、鼢鼠和田鼠是食谱核心。捕猎浅层地下鼠类时，荒漠猫会贴近地面监听通道里的动静，确认位置后迅速挖掘；它也捕食野兔和鸟类，偶尔能杀死旱獭。',
      },
      {
        key: 'activity',
        label: '活动节律',
        title: '白天和夜间都能活动',
        body: '旧资料常把荒漠猫写成夜行或晨昏活动。新的卫星项圈与相机研究记录到它全天活动，并在研究地点的傍晚达到高峰。项圈记录移动，相机记录经过镜头的行为，两种设备观察的片段不同，仍需要更多野外调查。',
      },
      {
        key: 'reproduction',
        label: '繁殖与育幼',
        title: '母兽会带幼崽更换育幼洞',
        body: '有限资料显示交配多在 1 至 3 月、幼崽多在 5 月出生，每胎约 2 至 4 只。野外首个持续监测家庭中，母兽带着两只幼崽在多个旧洞穴之间转移，并负责哺乳、警戒、带回食物和陪伴玩耍。',
      },
      {
        key: 'conservation',
        label: '保护与研究',
        title: '保护一种我们仍不够了解的猫',
        body: '鼠药既会削弱猎物基础，也可能造成二次中毒；道路、放牧和建设切割草地，毛皮猎杀与家猫接触又带来额外风险。保护需要减少非选择性灭鼠、维护连续高原生境并限制非法猎杀，也需要长期相机、遗传与项圈研究来回答最基础的种群问题。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1892 年记录的高原猫',
        body: '米尔恩·爱德华兹在 1892 年发表荒漠猫的描述，学名 Felis bieti 沿用至今。现行数据库把命名材料的模式产地列为四川。科学名称虽然已有一百多年，野外繁殖观察仍很少，研究人员直到 2020 年才发表首个持续监测活跃繁殖洞的案例。',
      },
    ],
    keyFacts: [
      '荒漠猫是现存唯一自然分布完全限于中国的野生猫科类群。',
      '它与大熊猫、小熊猫同属食肉目，却位于猫型亚目；两种熊猫均位于犬型亚目。',
      '名字带“荒漠”，核心生境却是青藏高原东部的草原、草甸和灌丛，而非典型沙漠。',
      '淡蓝色虹膜、耳尖毛簇和带 3 至 6 道深色环的粗尾，是醒目的外形特征。',
      '它会贴地监听浅层地下鼢鼠的活动，再用前爪把猎物刨出。',
      '项圈与相机研究显示它全天均可活动，并在 17:00 至 19:00 达到研究地活动高峰。',
      '直到 2020 年，研究人员才首次发表持续监测的野生活跃繁殖洞案例。',
    ],
    threats: [
      '化学灭鼠造成猎物减少及潜在二次中毒',
      '过度放牧和基础设施建设导致栖息地丧失、退化与破碎化',
      '道路致死与捕兽工具造成的意外伤亡',
      '机会性猎杀、毛皮利用与非法交易',
      '与自由活动家猫接触带来的潜在反向基因渐渗和疫病风险',
    ],
    conservationActions: [
      '开展不公开敏感点位的全分布调查、密度估计和长期趋势监测',
      '评估并提升现有保护地对关键高原草地和连通生境的保护成效',
      '减少非选择性化学灭鼠并监测二次中毒，维护自然猎物群落',
      '在道路和基础设施规划中避让生境并缓解高风险路段致死',
      '加强反盗猎、非法毛皮贸易执法与社区共管',
      '监测与家猫的接触、疫病和双向基因交流，开展适合当地的家猫管理',
    ],
    metrics: {
      adultLengthCm: [60, 85],
      adultMassKg: [5.5, 9],
      elevationM: [2000, 5000],
    },
    featuredStats: [
      {
        key: 'mature-population',
        label: '成熟个体估计',
        value: '<10,000',
        unit: '只',
        note: 'IUCN 2021 评估经保守模型推得的数字',
      },
      {
        key: 'typical-elevation',
        label: '典型活动海拔',
        value: '2,500—5,000',
        unit: '米',
        note: '评估记录范围约 2,000 至 5,000 米',
      },
      { key: 'tail-length', label: '尾长', value: '29—35', unit: '厘米' },
      {
        key: 'activity-peak',
        label: '研究地活动高峰',
        value: '17:00—19:00',
        note: '来自 2020 至 2021 年 10 只项圈个体与相机资料；其他地区的高峰时段仍待观察',
      },
    ],
    media: {
      image: './images/species/chinese-mountain-cat/01-alpine-meadow-portrait.webp',
      alt: '青藏高原东部的高寒草甸上，一只成年荒漠猫站在枯草与岩石之间，粗尾末端带有深色环纹',
      focalPoint: { x: 0.68, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/chinese-mountain-cat/02-zokor-listening.webp',
          alt: '高寒草甸上，一只荒漠猫俯身倾听新鲜土丘下的动静，并把一只前爪放在松土上',
          title: '听见地下的猎物',
          caption: '荒漠猫凭听觉定位浅层地下的鼢鼠，再用前爪迅速挖开土层。',
          focalPoint: { x: 0.57, y: 0.58 },
        },
        {
          image: './images/species/chinese-mountain-cat/03-eastern-plateau-habitat.webp',
          alt: '辽阔连绵的高原草甸、低矮灌丛和远处疏林之间，一只小小的荒漠猫穿过坡面',
          title: '高原尺度',
          caption: '荒漠猫主要生活在青藏高原东部的草原、草甸与灌丛，连续的草地有利于它寻找猎物和育幼洞。',
          focalPoint: { x: 0.68, y: 0.7 },
        },
        {
          image: './images/species/chinese-mountain-cat/04-twilight-prowl.webp',
          alt: '蓝紫暮色中的高原灌丛草甸上，一只荒漠猫独自行走',
          title: '傍晚高峰',
          caption: '项圈与相机研究记录到全天活动，并在研究地的 17:00 至 19:00 出现活动高峰。',
          focalPoint: { x: 0.56, y: 0.62 },
        },
        {
          image: './images/species/chinese-mountain-cat/05-burrow-rest.webp',
          alt: '高原向阳坡的旧兽穴洞口，一只荒漠猫蜷卧在土壁下休息，环纹粗尾绕在身前',
          title: '借来的白日藏身处',
          caption: '它会利用旱獭、獾等动物留下的旧洞穴，作为白日藏身处和育幼场所。',
          focalPoint: { x: 0.5, y: 0.56 },
        },
        {
          image: './images/species/chinese-mountain-cat/06-mother-and-kittens.webp',
          alt: '晚春高寒草甸的自然洞穴旁，一只荒漠猫母兽带着两只半大幼猫活动',
          title: '多个育幼洞',
          caption: '首个持续监测的野外家庭显示，母兽会带两只幼崽在多个旧洞穴之间转移。',
          focalPoint: { x: 0.5, y: 0.57 },
        },
      ],
    },
    sources: CHINESE_MOUNTAIN_CAT_SOURCES,
    featured: true,
    publishedAt: CHINESE_MOUNTAIN_CAT_CONTENT_DATE,
    updatedAt: CHINESE_MOUNTAIN_CAT_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
