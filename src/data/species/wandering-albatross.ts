import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const WANDERING_ALBATROSS_SOURCE_DATE = '2026-08-20' as const;

const WANDERING_ALBATROSS_CONTENT_DATE = '2026-08-20' as const;

const WANDERING_ALBATROSS_SOURCES = [
  {
    title: 'ACAP 2026 — Albatross taxonomy following AviList 2025',
    url: 'https://acap.aq/advisory-committee/ac15/ac15-meeting-documents/5231-ac15-doc-09/file',
    kind: 'taxonomy',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Diomedea exulans (assessed 7 August 2018)',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22698305A132640680.en',
    kind: 'conservation',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'eBird/Clements — 2023 taxonomy update: Wandering Albatross complex split',
    url: 'https://science.ebird.org/en/use-ebird-data/the-ebird-taxonomy/2023-ebird-taxonomy-update',
    kind: 'taxonomy',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'WoRMS 2026 — Diomedea exulans, AphiaID 212583',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=212583',
    kind: 'taxonomy',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'ACAP — Wandering Albatross species assessment',
    url: 'https://www.acap.aq/acap-species/304-wandering-albatross/file',
    kind: 'general',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'ACAP 2026 — Best Practice Advice for Pelagic Longline Fisheries',
    url: 'https://acap.aq/resources/bycatch-mitigation/mitigation-advice/5296-acap-pelagic-ll-summary-bpa/file',
    kind: 'conservation',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'Australian Antarctic Program — Wandering albatross',
    url: 'https://www.antarctica.gov.au/about-antarctica/animals/flying-birds/wandering-albatross/',
    kind: 'ecology',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'Australian Museum — Wandering Albatross',
    url: 'https://australian.museum/learn/animals/birds/wandering-albatross/',
    kind: 'general',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'Sachs et al. 2013 — Experimental verification of dynamic soaring in albatrosses',
    url: 'https://doi.org/10.1242/jeb.085209',
    kind: 'ecology',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
  {
    title: 'Weimerskirch et al. 2014 — Lifetime foraging patterns of the wandering albatross',
    url: 'https://doi.org/10.1016/j.jembe.2013.10.021',
    kind: 'ecology',
    accessedAt: WANDERING_ALBATROSS_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-diomedea-exulans',
    slug: 'wandering-albatross',
    names: {
      zh: '漂泊信天翁',
      en: 'Snowy Albatross',
      aliases: ['Wandering Albatross', '雪信天翁'],
    },
    scientificName: 'Diomedea exulans',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Procellariiformes', '鹱形目'),
      taxon('Diomedeidae', '信天翁科'),
      taxon('Diomedea', '信天翁属'),
    ),
    conservation: conservation('VU', 'decreasing', 2018, 'A4bd'),
    distribution: {
      realms: ['marine', 'terrestrial'],
      continents: ['南极洲', '非洲', '南美洲', '大洋洲'],
      regions: [
        '南大洋',
        '南乔治亚岛',
        '爱德华王子群岛',
        '克罗泽群岛',
        '凯尔盖朗群岛',
        '麦夸里岛',
        '南大西洋与南印度洋',
        '南太平洋与南美洲西岸外海',
      ],
      countries: ['澳大利亚', '南非', '法国', '巴西', '智利', '新西兰', '乌拉圭', '纳米比亚'],
      range:
        '在南乔治亚岛、爱德华王子群岛、克罗泽群岛、凯尔盖朗群岛和麦夸里岛繁殖；繁殖鸟、休繁殖年成鸟及幼鸟在南极、亚南极至亚热带南大洋广泛活动，所用海区随岛群、性别、年龄和繁殖阶段而改变。',
    },
    habitats: [
      {
        name: '南大洋远洋表层带',
        realm: 'marine',
        description: '主要移动与觅食环境；借助浪面附近风切变作长距离动态翱翔，并从水面获取猎物。',
        isPrimary: true,
      },
      {
        name: '大陆架、陆坡与近岛远洋水域',
        realm: 'marine',
        description: '部分繁殖阶段的重要觅食区，也可能与金枪鱼及犬牙鱼延绳钓作业发生时空重叠。',
      },
      {
        name: '亚南极岛屿开阔草坡与脊地',
        realm: 'terrestrial',
        description: '在有开阔或斑块植被、靠近暴露山脊或丘地的地面筑矮台状巢，只在繁殖周期中长期使用陆地。',
      },
    ],
    measurements: {
      length: {
        min: 80,
        max: 135,
        unit: 'cm',
        note: '澳大利亚博物馆的物种体长范围；来源未把该范围限定为严格成体。',
      },
      weight: {
        min: 8,
        max: 12,
        unit: 'kg',
        note: '宽泛体重包络；雄鸟平均更大，年龄与繁殖状态也会影响体重。',
      },
      wingspan: {
        min: 2.5,
        max: 3.35,
        unit: 'm',
        note: 'IUCN 物种资料范围；其他可靠资料记载极大个体接近 3.5 米。',
      },
    },
    diet: {
      types: ['carnivore', 'piscivore'],
      foods: ['鱿鱼等头足类', '鱼类', '甲壳类', '水母', '海洋动物腐肉'],
      description:
        '主要从海面夹取或拾取头足类与鱼，也摄食甲壳类、水母和腐肉；猎物比例随岛群、季节和繁殖阶段改变，并可能跟随渔船取食弃置物。',
    },
    activity: [
      '动态翱翔与长距离少拍翼飞行',
      '环南大洋广域移动',
      '以日间水面取食为主',
      '繁殖期远距离往返觅食',
      '成功繁殖后通常隔年繁殖',
      '幼鸟离巢后连续多年海上生活',
    ],
    tags: ['南大洋海鸟', '现生鸟类最大翼展', '动态翱翔', '亚南极岛屿繁殖', '慢生活史', '延绳钓兼捕', 'IUCN 易危'],
    summary: '漂泊信天翁是南大洋的大型海鸟，用极长而窄的翅膀利用不同高度的风速差飞行。它只在少数亚南极岛屿繁殖，繁殖速度缓慢。',
    description:
      '漂泊信天翁现行英文名为 Snowy Albatross，以接近三米以上的翼展和动态翱翔穿行南大洋；狭义 Diomedea exulans 只在南乔治亚、爱德华王子、克罗泽、凯尔盖朗和麦夸里等岛群繁殖。它每次通常只产一枚卵，完整育幼超过一年，往往约十岁才首次繁殖。正因为成鸟长寿而繁殖缓慢，延绳钓造成的额外死亡足以推动长期下降。',
    storySections: [
      {
        key: 'identity',
        label: '名称与种界',
        title: 'Snowy 与 Wandering 指向同一个狭义物种',
        body: 'ACAP 2026 采用的 AviList 英文名 Snowy Albatross 用来避免和复合群混淆，Wandering Albatross 仍是广泛使用的旧名；这里两个名称都指 Diomedea exulans。旧广义记录还可能包含 Tristan、Antipodean 或 Amsterdam Albatross，必须按繁殖地、形态和资料口径重审。',
      },
      {
        key: 'flight',
        label: '动态翱翔',
        title: '在浪面与高处之间反复交换风的能量',
        body: '高精度追踪记录到迎风上升、顶部转向、顺风下降和低位转向的飞行循环。漂泊信天翁利用极长的狭翼，从近海面的风速梯度中获得机械能，因此能长时间少拍翼飞行。',
      },
      {
        key: 'movement',
        label: '一生在移动',
        title: '不同年龄和性别利用不同海区',
        body: '幼鸟离巢后连续数年留在海上，逐步提高利用风场的能力。繁殖成鸟需从巢址出发远距离觅食再返回，休繁殖年则能广泛散布。群体研究发现，雌雄和不同年龄阶段常使用不同纬度的海区。',
      },
      {
        key: 'feeding',
        label: '水面取食',
        title: '从浪间拾取头足类、鱼和机会性食物',
        body: '漂泊信天翁主要从水面获取头足类和鱼，也吃甲壳类、水母与腐肉。跟随渔船能带来弃置食物，却也把鸟引向尚未下沉的带饵鱼钩，使机会性觅食与兼捕风险紧密相连。',
      },
      {
        key: 'breeding',
        label: '缓慢繁殖',
        title: '一枚卵占据超过一年的繁殖周期',
        body: '双亲轮流孵化唯一一枚卵约 78 至 79 天，幼鸟随后在巢约九个月。成功繁殖者通常隔年才再次繁殖，初次繁殖多在十岁左右；这种慢生活史无法迅速补回渔业造成的成鸟和幼鸟损失。',
      },
      {
        key: 'conservation',
        label: '保护行动',
        title: '让鱼钩先沉到鸟够不到的水层',
        body: 'ACAP 2026 推荐远洋延绳钓同时采用加重支线、夜间下线和驱鸟线，或使用经评估的护钩及水下投饵装置；同时需要观察员或电子监控验证执行。繁殖岛生物安全、长期人口统计和海上追踪则负责守住巢区并定位新的风险重叠。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的学名与后来缩小的种界',
        body: '林奈在 1758 年使用 Diomedea exulans 命名漂泊信天翁。后来研究者把旧广义复合群中的部分岛屿种群另列为特里斯坦、安提波德和阿姆斯特丹信天翁。今天 Snowy Albatross 与常用的 Wandering Albatross 在这里指同一个狭义物种，比较早期记录时需要先看繁殖岛屿。',
      },
    ],
    keyFacts: [
      '现行英文名 Snowy Albatross 与广泛使用的 Wandering Albatross 都指狭义 Diomedea exulans。',
      '旧漂泊信天翁复合体已拆出 Tristan、Antipodean 和 Amsterdam Albatross；核对历史记录，先看它来自哪座岛。',
      'IUCN 全球评估为易危、趋势下降，2018 年评估标准为 A4bd；个别岛屿的短期数量变化需要另外调查。',
      '翼展约 2.5 至 3.35 米，极大个体接近 3.5 米，是现生鸟类中翼展最大的物种。',
      '动态翱翔使漂泊信天翁能从近海面不同高度的风速差获取机械能，长时间少拍翼飞行。',
      '主要从水面获取头足类和鱼，也吃甲壳类、水母与腐肉，而不是像企鹅一样深水追猎。',
      '每次繁殖通常只有一枚卵，孵化约 78 至 79 天，幼鸟在巢约 278 天，完整繁殖季略超过一年。',
      '成功繁殖者通常隔年才再次繁殖，首次繁殖多在十岁左右，少量额外成鸟死亡也难以快速补回。',
    ],
    threats: [
      '远洋与底延绳钓中抢食饵料导致钩挂、下沉和溺亡',
      '气候与风场、海温变化改变觅食区、飞行成本和繁殖表现',
      '部分繁殖岛的外来猫、鼠类和大型食草动物造成捕食或生境改变',
      '塑料、弃置鱼钩与其他渔具经亲鸟带入幼鸟食物',
      '油污和船舶垃圾等其他海洋污染',
      '繁殖地踩踏、过近接近、疾病与岛屿生物安全失误',
    ],
    conservationActions: [
      '远洋延绳钓同时使用加重支线、夜间下线和合规驱鸟线，或使用经评估的护钩或水下投饵装置',
      '通过区域渔业管理组织、观察员和电子监控统一兼捕规范并核查实际执行',
      '持续监测所有繁殖岛群的繁殖对、成功率、成幼鸟生存和招募',
      '追踪不同岛群、性别、年龄和繁殖阶段与渔业的时空重叠',
      '保护巢区草地、执行严格岛屿生物安全，并在可行时控制或根除外来哺乳动物',
      '减少塑料、弃置渔具和船舶垃圾，规范会吸引海鸟靠近钩饵的渔获残余排放',
    ],
    metrics: {
      adultMassKg: [8, 12],
      wingspanCm: [250, 335],
    },
    featuredStats: [
      {
        key: 'wingspan',
        label: '翼展',
        value: '2.5—3.35',
        unit: '米',
        note: 'IUCN 物种资料范围；极大个体接近 3.5 米',
      },
      {
        key: 'mature-estimate',
        label: 'IUCN 成熟个体点估计',
        value: '约 20,100',
        unit: '只',
        note: '2018 评估采用，计数基础更早；今天的确切数字仍未知',
      },
      {
        key: 'incubation',
        label: '平均孵化期',
        value: '78—79',
        unit: '天',
        note: '双亲轮流孵化通常唯一一枚卵',
      },
      {
        key: 'nestling-period',
        label: '南乔治亚幼鸟在巢',
        value: '约 278',
        unit: '天',
        note: '克罗泽平均约短一周；完整繁殖季略超过一年',
      },
    ],
    media: {
      image: './images/species/wandering-albatross/01-southern-ocean-glide.webp',
      alt: '灰蓝南大洋上，一只白色躯干、翼缘带黑褐斑纹的漂泊信天翁在画面右侧展开完整极长狭翼向左滑翔',
      focalPoint: { x: 0.69, y: 0.47 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/wandering-albatross/02-natural-surface-seizing.webp',
          alt: '一只漂泊信天翁浮在开阔灰蓝海面，以巨大淡粉色钩喙夹住刚露出水面的一只小型鱿鱼',
          title: '从浪间拾取猎物',
          caption: '它们主要从水面获取头足类和鱼，也吃甲壳类、水母与腐肉；猎物组合随地点和季节变化。',
          focalPoint: { x: 0.54, y: 0.54 },
        },
        {
          image: './images/species/wandering-albatross/03-subantarctic-breeding-habitat.webp',
          alt: '风云下的亚南极岛屿草坡、低矮脊地和远海占据宽景，一只小比例漂泊信天翁伏在中右侧的土草巢台上',
          title: '少数岛屿上的繁殖地',
          caption: '狭义本种只在南乔治亚、爱德华王子、克罗泽、凯尔盖朗和麦夸里等岛群繁殖；巢位于开阔或斑块植被的地面。',
          focalPoint: { x: 0.6, y: 0.61 },
        },
        {
          image: './images/species/wandering-albatross/04-low-wave-dynamic-soaring.webp',
          alt: '一只漂泊信天翁在灰蓝涌浪上方侧倾转弯，两枚极长狭翼从翼根到翼尖完整展开',
          title: '从风切变取能',
          caption: '信天翁循环进行迎风上升、顶部转向、顺风下降和低位转向，利用风速差减少拍翼。',
          focalPoint: { x: 0.52, y: 0.48 },
        },
        {
          image: './images/species/wandering-albatross/05-post-guard-chick.webp',
          alt: '亚南极草坡与远海前，一只较大的灰白绒羽漂泊信天翁幼鸟独自安静伏在低矮土草巢台上',
          title: '亲鸟出海后的正常独处',
          caption: '早期护雏结束后，幼鸟独自在巢中等待双亲从远海带回食物，整个巢期约九个月。',
          focalPoint: { x: 0.52, y: 0.56 },
        },
        {
          image: './images/species/wandering-albatross/06-breeding-count-monitoring.webp',
          alt: '亚南极开阔草地上，一只漂泊信天翁伏在右侧巢台，两名野外生态学者在左侧远处使用观测镜和记录板计数',
          title: '从巢外远距离计数',
          caption: '繁殖对、繁殖成功与生存率的长期监测，需要保持距离、减少干扰。',
          focalPoint: { x: 0.55, y: 0.5 },
        },
      ],
    },
    sources: [
      ...WANDERING_ALBATROSS_SOURCES,
      {
        title: '漂泊信天翁：科学描述与命名资料',
        url: 'https://www.gbif.org/species/5229302',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: WANDERING_ALBATROSS_CONTENT_DATE,
    updatedAt: WANDERING_ALBATROSS_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
