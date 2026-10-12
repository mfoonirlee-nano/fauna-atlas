import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const CHINESE_STURGEON_SOURCE_DATE = '2026-08-24' as const;

const CHINESE_STURGEON_CONTENT_DATE = '2026-08-24' as const;

const CHINESE_STURGEON_SOURCES = [
  {
    title: 'IUCN Red List: Acipenser sinensis (assessed 2019; amended publication 2022)',
    url: 'https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T236A219152605.en',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Eschmeyer’s Catalog of Fishes: Acipenser sinensis',
    url: 'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=9762',
    kind: 'taxonomy',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Brownstein & Near 2025: Toward a Phylogenetic Taxonomy of Sturgeons',
    url: 'https://www.nearlab.org/uploads/1/3/3/7/133700440/190_brownstein_near2025sturgons.pdf',
    kind: 'taxonomy',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Eschmeyer’s Catalog of Fishes: Acipenser kikuchii synonym record',
    url: 'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=27532',
    kind: 'taxonomy',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'CITES: Appendices I, II and III, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'CMS: Acipenser sinensis, Appendix II since 1999',
    url: 'https://www.cms.int/species/acipenser-sinensis',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: '国家林草局、农业农村部：国家重点保护野生动物名录（2021 年第 3 号）',
    url: 'https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: '农业部：中华鲟拯救行动计划（2015—2030 年）',
    url: 'https://cjyzbgs.moa.gov.cn/tzgg/201904/t20190428_6220349.htm',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: '农业农村部：关于坚定不移推进长江十年禁渔工作的意见（2024）',
    url: 'https://cjyzbgs.moa.gov.cn/tzgg/202403/t20240322_6452080.htm',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: '农业农村部：长江流域水生生物资源及生境状况公报（2024 年）答记者问',
    url: 'https://cjyzbgs.moa.gov.cn/zcjd/202509/t20250918_6477464.htm',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: '农业农村部：长江流域水生生物资源及生境状况公报（2025 年）发布信息',
    url: 'https://nyncw.cq.gov.cn/zwxx_161/ywxx/202604/t20260408_15596444_wap.html',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries: Chinese Sturgeon species profile',
    url: 'https://www.fisheries.noaa.gov/species/chinese-sturgeon',
    kind: 'general',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries 2021: Five-year review of five foreign sturgeon species',
    url: 'https://repository.library.noaa.gov/view/noaa/30918/noaa_30918_DS1.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Wei 2020: Conservation of Chinese sturgeon based on its life history',
    url: 'https://jlakes.alljournals.cn/html/2020/5/20200506.html',
    kind: 'general',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Huang & Wang 2018: Yangtze Dams Increasingly Threaten the Survival of the Chinese Sturgeon',
    url: 'https://doi.org/10.1016/j.cub.2018.09.032',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Wang et al. 2012: Migrations and movements of adult Chinese sturgeon in the Yangtze River',
    url: 'https://doi.org/10.1111/j.1095-8649.2012.03365.x',
    kind: 'distribution',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Sun et al. 2019: Growth and feeding ecology of juvenile Chinese sturgeon in the Yangtze Estuary',
    url: 'https://doi.org/10.1111/jai.13835',
    kind: 'ecology',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Wei et al. 2009: Using drift nets to monitor Chinese sturgeon spawning',
    url: 'https://doi.org/10.1111/j.1439-0426.2009.01269.x',
    kind: 'ecology',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Liu et al. 2007: Reproductive biology and artificial propagation below Gezhouba Dam',
    url: 'https://pubmed.ncbi.nlm.nih.gov/17763749/',
    kind: 'ecology',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2009: A bedform morphology hypothesis for Chinese sturgeon spawning areas',
    url: 'https://doi.org/10.1007/s10641-008-9410-2',
    kind: 'ecology',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Artyukhin et al. 2007: Morphology and ecology of Pacific sturgeons',
    url: 'https://doi.org/10.1007/s10641-006-9157-6',
    kind: 'taxonomy',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'CITES: Sturgeons and Paddlefishes Identification Guide',
    url: 'https://cites.org/sites/default/files/vc-files/files/CAN-CITES_Sturgeons_Guide.pdf',
    kind: 'taxonomy',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Huang & Li 2024: Dams trigger exponential population declines of migratory fish',
    url: 'https://doi.org/10.1126/sciadv.adi6580',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-acipenser-sinensis',
    slug: 'chinese-sturgeon',
    names: {
      zh: '中华鲟',
      en: 'Chinese Sturgeon',
      aliases: [
        'Sagami Sturgeon（历史英文名）',
        'Acipenser kikuchii（同物异名）',
        'Sinosturio sinensis（2025 年提出的新组合）',
      ],
    },
    scientificName: 'Acipenser sinensis',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Actinopterygii', '辐鳍鱼纲'),
      taxon('Acipenseriformes', '鲟形目'),
      taxon('Acipenseridae', '鲟科'),
      taxon('Acipenser', '鲟属'),
    ),
    conservation: conservation('CR', 'decreasing', 2019, 'A2bc'),
    distribution: {
      realms: ['freshwater', 'marine'],
      continents: ['亚洲'],
      regions: [
        '葛洲坝以下长江干流与长江口',
        '黄海和东海近岸及大陆架海域',
        '历史东亚沿海河流与朝鲜半岛、日本近海记录',
      ],
      countries: ['中国'],
      range:
        '当前自然生活史核心连接葛洲坝以下长江、长江口和黄海至东海近岸。珠江、西江、闽江、钱塘江、黄河及朝鲜半岛、日本近海属于历史或状态未明记录，不能画成当前稳定繁殖范围。',
      center: { lat: 30.5, lng: 116.5 },
    },
    habitats: [
      {
        name: '长江深水主槽与深潭',
        realm: 'freshwater',
        description:
          '成鱼利用葛洲坝以下长江主槽溯游、越冬、等待性腺成熟并在产后降河；水温、流量与连续通道决定可用性。',
        isPrimary: true,
      },
      {
        name: '卵石与砾石产卵河床',
        realm: 'freshwater',
        description:
          '秋季在流速较强、河床起伏且粗底质洁净的河段完成体外受精，黏性卵沉积于石隙；现存条件受坝群调度和泥沙过程控制。',
        isPrimary: true,
      },
      {
        name: '中下游边滩与河滨浅水区',
        realm: 'freshwater',
        description:
          '仔稚鱼顺流扩散后在底质空隙和浅水边滩藏匿、开口摄食并逐步降河，河道整治和水位过程会改变可用面积。',
      },
      {
        name: '长江口与黄海、东海近岸',
        realm: 'marine',
        description:
          '幼鱼在河口完成盐度适应并利用底栖食物，亚成体和成体在近岸大陆架海域生长；海洋阶段的精细路线仍缺长期野生追踪。',
        isPrimary: true,
      },
    ],
    measurements: {
      length: {
        min: 189,
        max: 383,
        unit: 'cm',
        note: '1981—1996 年长江湖北段繁殖群体 n=415 的全长范围；平均 275.9 cm，不是物种极值',
      },
      weight: {
        min: 42.5,
        max: 420,
        unit: 'kg',
        note: '同一繁殖群体 n=415 的体重范围；平均 144.0 kg，不代表所有年龄阶段',
      },
    },
    diet: {
      types: ['carnivore', 'piscivore'],
      foods: [
        '端足类、多毛类与其他底栖无脊椎动物',
        '虾、蟹与双壳类软体动物',
        '底栖及近底小型鱼类',
        '幼鱼阶段的水生昆虫与小型底栖动物',
      ],
      description:
        '底栖肉食者，食谱随体型和水域转换。长江口小型幼鱼更多利用端足类、蟹和双壳类，较大幼鱼增加鱼类；成熟鱼在海洋积累能量，溯江繁殖期长期少食或停食。',
    },
    activity: [
      '在海洋摄食生长，接近性成熟后于夏季进入长江口并溯江',
      '亲鱼可在长江停留约 17 至 19 个月，等待下一年秋季的产卵窗口',
      '沿深水主槽贴近底层长距离迁移，不以跃瀑或穿坝方式上溯',
      '多在秋季夜间于急流粗底质河床撒播黏性沉底卵，不筑巢或护卵',
      '仔鱼主动上浮后随水流向下游扩散，随后利用石隙和浅水边滩',
      '幼鱼经长江口完成盐度适应，转入黄海和东海近岸底层生境',
    ],
    tags: [
      'IUCN 极危',
      '种群趋势下降',
      '中国国家一级保护',
      'CITES 附录 II',
      'CMS 附录 II',
      '鲟形目',
      '大型洄游鱼类',
      '溯河产卵',
      '淡水与海洋',
      '底栖肉食',
      '晚熟',
      '长江旗舰物种',
      '连续九年未检出自然繁殖',
      '人工保种与标记放流',
      '近期属名修订争议',
    ],
    summary:
      '中华鲟在长江出生，到黄海和东海近岸生长，成熟后返回长江产卵。它晚熟、繁殖间隔长，2017 至 2025 年连续九年未监测到自然繁殖，目前处于极危状态。',
    description:
      '中华鲟的吻宽而扁，嘴朝下，嘴前有四根短须，身体排列着五列大型骨板，尾鳍上叶比下叶长。它用须寻找底层食物，再用无齿、可伸缩的嘴摄取。幼鱼从长江游向近海，成鱼十多年后返江，在秋季急流中的卵石、砾石河床产卵。葛洲坝及上游梯级工程缩短了历史洄游路线，也改变了产卵所需的水温、流量和泥沙条件。人工保种和放流正在延续，但恢复野生种群还需要成鱼成功返河，并留下能够继续繁殖的后代。',
    storySections: [
      {
        key: 'river-sea-river',
        label: '洄游',
        title: '在长江与近海之间洄游',
        body: '中华鲟在长江淡水中出生，沿中下游和河口逐步降海，在黄海和东海近岸摄食生长。接近性成熟后，成鱼再进入长江，可能停留一年多，等待下一年秋季的繁殖窗口。',
      },
      {
        key: 'armoured-body',
        label: '形态',
        title: '五列骨板和一张朝下的嘴',
        body: '中华鲟用吻下的四根短须感知底层食物，再由无齿、可伸缩的嘴摄取。身体有五列大型骨板，尾鳍上叶比下叶长，幼鱼的吻比成鱼更尖。',
      },
      {
        key: 'dammed-spawning-route',
        label: '阻隔',
        title: '大坝改变洄游路线和产卵条件',
        body: '葛洲坝截断通往长江上游和金沙江的历史路线，中华鲟只能利用坝下替代产卵场。上游梯级工程又改变水温到达、流量和泥沙过程，使有限的秋季产卵条件更难同时出现。',
      },
      {
        key: 'nine-silent-autumns',
        label: '监测',
        title: '九个秋天，没有检出新的卵和仔鱼',
        body: '2016 年是最近一次确认的自然繁殖。2017 至 2025 年连续九年未监测到自然繁殖，显示危机仍在持续。调查无法覆盖每一处河床，未检出也可能受到调查方法和检出概率的影响。',
      },
      {
        key: 'after-release',
        label: '放流',
        title: '放流鱼还要经历生长和返河',
        body: '2025 年 361 尾超声标记放流个体中有超过六成到达长江口。它们还需要在海中存活、达到性成熟、返回长江并成功产卵。评价放流成效时，应继续追踪这些阶段以及野生后代的补充。',
      },
      {
        key: 'changing-genus',
        label: '分类',
        title: '一个属名正在变化',
        body: '2025 年系统发育研究提出恢复 Sinosturio，把中华鲟写成 Sinosturio sinensis。Catalog 已记录该处理，却仍把 Acipenser sinensis 标为当前有效名；保护公约和法律也继续沿用旧组合。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1835 年的名称记录与后来属名修订',
        body: '1835 年，J. E. Gray 以 Acipenser sinensis 正式描述中华鲟，原始记录的产地写作中国，模式标本记录保存在英国自然历史博物馆。论文刊载于标为 1834 年的会议刊物，实际发表年份采用 1835 年，因此资料中有时会出现两个年份。2025 年研究提出把它改归 Sinosturio；当前鱼类名录仍保留 Acipenser sinensis 为有效名。',
      },
    ],
    keyFacts: [
      'Catalog of Fishes 当前状态为 Acipenser sinensis；Sinosturio sinensis 是 2025 年提出、尚未统一采用的新组合。',
      'IUCN 当前等级为 CR，趋势下降，准则 A2bc，评估日期为 2019 年 9 月 15 日。',
      '中华鲟列入 CITES 附录 II、CMS 附录 II，并是中国国家一级重点保护野生动物。',
      '当前自然生活史核心连接葛洲坝以下长江、长江口和黄海至东海近岸。',
      '415 尾繁殖群体样本全长 189 至 383 厘米、体重 42.5 至 420 千克。',
      '成鱼的四根短须靠近无齿腹位口，身体有五列大型骨板和上叶更长的歪尾。',
      '幼鱼吻部更尖，体型增大后食谱从小型底栖无脊椎动物增加到更多鱼类。',
      '雌鱼平均初次繁殖约 16.8 至 18 岁，野生雌鱼通常约 4 年再次繁殖。',
      '2016 年是最近一次确认的自然繁殖；2017 至 2025 年连续 9 年未监测到。',
      '2024 年到达葛洲坝下的成熟成鱼估计为 10 尾，这不是全球个体总数。',
      '2025 年 361 尾超声标记放流个体中超过 60% 到达长江口，不能据此推算返河繁殖率。',
      '普通图像不能可靠区分中华鲟和长江鲟，鉴定需要组合形态、计数、体尺、地点与遗传证据。',
    ],
    threats: [
      '葛洲坝阻断历史洄游路线，上游梯级工程改变产卵场水温、流量、泥沙和河床过程',
      '成熟繁殖群体极小、晚熟且繁殖间隔长，连续多年缺乏确认的自然补充',
      '航道疏浚、采砂、岸线硬化与河道工程损害产卵河床、仔稚鱼浅滩和河口索饵场',
      '非法捕捞、兼捕、遗留网具和不规范救护对极少野外个体造成额外死亡风险',
      '河流和河口污染物可能影响幼鱼生长、健康与繁殖，但单一污染物不能解释全部衰退',
      '非本地养殖鲟类逃逸带来食物与繁殖空间竞争、疾病和潜在遗传风险',
      '高强度航运、噪声和碰撞扰动长江干流与河口迁移通道',
      '气候变暖、低枯水位和极端水文与坝群运行叠加，改变产卵窗口和河口条件',
      '只追求放流尾数而缺少家系、健康、海洋存活、返河和繁殖贡献评价',
    ],
    conservationActions: [
      '以自然繁殖恢复为核心修复葛洲坝下产卵河床，并按成鱼到达、水温、流速与泥沙实施生态调度',
      '保护长江中下游仔稚鱼浅滩、长江口盐度过渡区和黄海、东海近岸索饵场的完整连通',
      '延续十年禁渔和专项执法，清理遗留网具并建立误捕、救护、取样和快速放归流程',
      '组合卵仔鱼底网、声学、eDNA、遥测和标记回报，区分野生出生、人工放流与来源不明个体',
      '建立保种亲本家谱、遗传和组织库、疾病筛查与个体标记，用有效亲本数和遗传贡献评价放流',
      '控制非本地鲟类养殖逃逸，对长江内外来鲟类和疑似杂交个体开展遗传鉴定',
      '限制关键河段和时段的疏浚、采砂、岸线硬化、强噪声和高速航运',
      '持续监测污染物、病原、个体健康和繁殖指标，以野外证据检验因果风险',
      '通过 CMS 协调东亚近海误捕与标记回报，通过 CITES 核验跨境活体、标本和产品来源',
      '分别公开成熟鱼到达、自然繁殖检出、放流家系、河口到达和返河繁殖贡献',
    ],
    metrics: {
      adultLengthCm: [189, 383],
      adultMassKg: [42.5, 420],
    },
    featuredStats: [
      {
        key: 'global-iucn-status',
        label: 'IUCN 全球等级',
        value: 'CR',
        unit: '极危',
        note: '2019 年评估，趋势下降，准则 A2bc；2022 年为修订发布年',
      },
      {
        key: 'spawning-stock-size',
        label: '繁殖群体实测全长',
        value: '189–383',
        unit: '厘米',
        note: '1981 至 1996 年长江湖北段 n=415，平均 275.9 厘米，不是物种极值',
      },
      {
        key: 'dam-truncated-route',
        label: '大坝截短历史路线',
        value: '约 1,175',
        unit: '千米',
        note: 'Huang 与 Wang 2018 的模型估计，不是现存河段长度',
      },
      {
        key: 'natural-spawning-gap',
        label: '未检出自然繁殖',
        value: '9',
        unit: '年',
        note: '2017 至 2025 年；2016 年为最近一次确认，未检出不等于绝对未发生',
      },
    ],
    media: {
      image: './images/species/chinese-sturgeon/01-yangtze-migration-portrait.webp',
      alt: '一尾完整的成年中华鲟在浑浊蓝绿色长江深水河道的右侧朝左游动，画面左侧留有开阔水体，长吻、四根短须、多列大型骨板和歪尾可见',
      focalPoint: { x: 0.69, y: 0.57 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/chinese-sturgeon/02-scuted-body-and-barbels.webp',
          alt: '一尾完整的成年中华鲟占据水下近景，长吻下的四根短须、多列大型骨板和上叶较长的歪尾清楚可见',
          title: '五列骨板和吻下短须',
          caption:
            '须的位置、吻部、骨板和歪尾需要组合判断；普通图像看不清鳃耙和鳍条，也不能单独排除长江鲟。',
          focalPoint: { x: 0.5, y: 0.52 },
        },
        {
          image: './images/species/chinese-sturgeon/03-deep-river-spawning-habitat.webp',
          alt: '一尾小型远景鲟鱼在宽深河道右侧贴近由卵石、砾石和大块石组成的粗底质上方游动',
          title: '粗底质深河道提供繁殖条件',
          caption:
            '画面只重建深水与粗底质的组合；一尾远景鱼不能证明物种身份、河段位置、产卵场占用或自然繁殖发生。',
          focalPoint: { x: 0.65, y: 0.53 },
        },
        {
          image: './images/species/chinese-sturgeon/04-estuary-juvenile-foraging.webp',
          alt: '一尾完整的中华鲟幼鱼在浑浊河口的泥沙底层接近一只小蟹和数个微小底栖动物，尚未接触猎物',
          title: '幼鱼沿着河口底层寻找食物',
          caption:
            '接近猎物不等于已经捕获；同框的少数底栖动物也不能代表幼鱼在不同体型和季节的完整食谱。',
          focalPoint: { x: 0.52, y: 0.56 },
        },
        {
          image: './images/species/chinese-sturgeon/05-gravel-bed-spawning-run.webp',
          alt: '恰好两尾彼此分离的成年鲟鱼在清澈河水中沿卵石、砾石和大块石组成的粗底质河床朝左游动',
          title: '两尾成鱼经过粗底质河床',
          caption:
            '同框游动不能确定性别、来源、配对或产卵行为；画面没有卵，也不证明自然繁殖已经发生。',
          focalPoint: { x: 0.51, y: 0.53 },
        },
        {
          image: './images/species/chinese-sturgeon/06-edna-water-monitoring.webp',
          alt: '恰好两名研究人员在浑浊长江水面的铝船上采集水样，一人用长杆取水，另一人处理样品瓶，画面没有鱼',
          title: '采集水样检测环境 DNA',
          caption:
            'eDNA 可补充物种检出，但单次水样不能单独确认现生个体在场，阴性结果也不能排除物种，更不能确定数量、来源、繁殖状态或长期趋势。',
          focalPoint: { x: 0.67, y: 0.58 },
        },
      ],
    },
    sources: CHINESE_STURGEON_SOURCES,
    featured: true,
    publishedAt: CHINESE_STURGEON_CONTENT_DATE,
    updatedAt: CHINESE_STURGEON_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
