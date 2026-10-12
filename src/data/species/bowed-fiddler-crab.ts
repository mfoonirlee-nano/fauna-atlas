import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const BOWED_FIDDLER_CRAB_SOURCE_DATE = '2026-08-21' as const;

const BOWED_FIDDLER_CRAB_CONTENT_DATE = '2026-08-21' as const;

const BOWED_FIDDLER_CRAB_SOURCES = [
  {
    title: 'WoRMS/DecaNet — Tubuca arcuata (accepted; AphiaID 955307)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=955307',
    kind: 'taxonomy',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'Shih et al. 2016 — Systematics of Ocypodidae and reorganization of Uca sensu lato',
    url: 'https://fiddlerkrab.url.tw/acad/pdf/Shih%262016_Ocypodidae_revision_s.pdf',
    kind: 'taxonomy',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: '台湾海洋保育署 — 弧边管招潮 / Tubuca arcuata',
    url: 'https://www.oca.gov.tw/ch/home.jsp?dataserno=202202220026&id=522&mcustomize=ocamaritime_view.jsp&parentpath=0%2C298%2C386',
    kind: 'general',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'Shih et al. 2016 — Species diversity of fiddler crabs from Taiwan and adjacent islands',
    url: 'https://doi.org/10.11646/zootaxa.4083.1.3',
    kind: 'distribution',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'Shih et al. 2022 — Diversity and distribution of fiddler crabs in Vietnam',
    url: 'https://doi.org/10.6620/ZS.2022.61-66',
    kind: 'distribution',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'Shih et al. 2022 — Phylogeography of Tubuca arcuata in East Asia and northern Vietnam',
    url: 'https://doi.org/10.6620/ZS.2022.61-68',
    kind: 'distribution',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'Zhang & Shih 2022 — First zoeal stage of 15 Taiwanese fiddler-crab species',
    url: 'https://doi.org/10.6620/ZS.2022.61-71',
    kind: 'ecology',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'Otani, Yamaguchi & Takahashi 1997 — Population structure, growth and reproduction of Uca arcuata',
    url: 'https://doi.org/10.18353/crustacea.26.0_109',
    kind: 'ecology',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'Yamaguchi & Henmi 2001 — Differentiation of handedness in Uca arcuata',
    url: 'https://doi.org/10.1163/156854001317015562',
    kind: 'ecology',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'Wada & Murata 2000 — Chimney building in Uca arcuata',
    url: 'https://doi.org/10.1163/20021975-99990066',
    kind: 'ecology',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'Aoki et al. 2010 — Interpopulation variations in life-history traits in Uca arcuata',
    url: 'https://doi.org/10.1651/09-3222.1',
    kind: 'ecology',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'Wada, Watanabe & Kamada 2011 — Function of vertical claw-waving in Uca arcuata',
    url: 'https://doi.org/10.1651/10-3441.1',
    kind: 'ecology',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'Xiang et al. 2020 — Pollution, sex and tide effects on Uca arcuata behaviour',
    url: 'https://doi.org/10.1016/j.scitotenv.2020.140609',
    kind: 'ecology',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'Xie et al. 2024 — Mariculture wastewater effects on Tubuca arcuata food sources',
    url: 'https://doi.org/10.1016/j.marpolbul.2023.115992',
    kind: 'conservation',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'Chen et al. 2017 — Soil composition and fiddler-crab burrow depth',
    url: 'https://doi.org/10.1016/j.ecoleng.2016.12.011',
    kind: 'ecology',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'Chen et al. 2019 — Habitat-suitability models for subtropical tidal-flat fiddler crabs',
    url: 'https://doi.org/10.1016/j.ocecoaman.2019.104931',
    kind: 'conservation',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search — Tubuca arcuata (no formal assessment found)',
    url: 'https://www.iucnredlist.org/search?query=Tubuca%20arcuata&searchType=species',
    kind: 'conservation',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: '日本环境省 — Red List 2020（シオマネキ：VU）',
    url: 'https://www.env.go.jp/press/files/jp/113628.pdf',
    kind: 'conservation',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
  {
    title: '高知县 — 指定稀少野生动植物：シオマネキ / Tubuca arcuata',
    url: 'https://www.pref.kochi.lg.jp/doc/siteisyu/file_contents/file_201972292055_1.pdf',
    kind: 'conservation',
    accessedAt: BOWED_FIDDLER_CRAB_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-tubuca-arcuata',
    slug: 'bowed-fiddler-crab',
    names: {
      zh: '弧边招潮蟹',
      en: 'Bowed Fiddler Crab',
      aliases: ['弧边管招潮', '网纹招潮', '大栱仙', 'Uca arcuata'],
    },
    scientificName: 'Tubuca arcuata',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Malacostraca', '软甲纲'),
      taxon('Decapoda', '十足目'),
      taxon('Ocypodidae', '沙蟹科'),
      taxon('Tubuca', '管招潮属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine', 'terrestrial'],
      continents: ['亚洲'],
      regions: ['东亚沿海', '黄海与东海沿岸', '台湾海峡', '北部南海', '日本本土与琉球群岛', '越南北部'],
      countries: ['中国', '日本', '韩国', '越南'],
      range:
        '分布于东亚大陆与岛屿的河口、红树林边缘和潮间带泥滩：从越南北部经中国沿海（含海南、香港、台湾、澎湖与金门），向北到韩国、日本本土及琉球群岛。旧名记录若超出这一现代核验范围，须重新鉴定后再采用。',
      center: { lat: 24.3, lng: 121 },
    },
    habitats: [
      {
        name: '河口软泥潮滩',
        realm: 'marine',
        description: '退潮时在细泥或黏土较多的潮间带表面取食、挥螯、争夺洞穴并修筑泥烟囱；涨潮前后退入洞内。',
        isPrimary: true,
      },
      {
        name: '红树林边缘与潮沟',
        realm: 'marine',
        description: '常见于红树林旁和林间潮沟的软泥面，也可利用有植被遮阴、混有较粗颗粒的泥质底；林缘的开阔泥面同样是它们的地盘。',
      },
      {
        name: '上部潮间带洞穴',
        realm: 'terrestrial',
        description: '洞穴在高潮淹水、干燥和极端温度时提供庇护，也参与求偶、交配和抱卵；适宜度取决于潮汐、盐度和土壤结构。',
      },
    ],
    measurements: {
      length: {
        typical: 30,
        max: 40.2,
        unit: 'mm',
        note: '量的是背甲宽；公众典型值约 30 毫米，已核实的分类凭证最宽 40.2 毫米',
      },
    },
    diet: {
      types: ['detritivore'],
      foods: ['泥表层细小有机碎屑', '微型底栖藻类等微型生产者', '沉积物中的微生物及可利用有机颗粒'],
      description:
        '退潮后用小螯把表层沉积物送入口器，筛取可利用的微型生物和有机颗粒并留下处理后的泥粒；实际碳源随地点、水质和沉积物输入变化。',
    },
    activity: [
      '主要在退潮暴露期出洞，于泥面取食、修洞、争斗和求偶',
      '涨潮和不利温度条件下退入洞穴，并可在淹水前封闭洞口',
      '成年雄蟹以唯一主螯作垂直定向或非定向挥舞，参与求偶信号',
      '雌雄及不同年龄个体都可在洞口修筑低矮圆筒形泥烟囱',
      '繁殖与表面活动季节随纬度和地点变化，南北各有各的日历',
    ],
    tags: ['东亚河口', '潮间带', '红树林边缘', '沉积取食', '垂直挥螯', '一大一小螯', '洞穴工程师', 'IUCN 未评估'],
    summary: '弧边招潮蟹生活在东亚河口泥滩。雄蟹上下挥动一只巨螯传递信号，雌雄都能在洞口筑起低矮的泥烟囱。',
    description:
      '弧边招潮蟹是分布于中国沿海及东亚河口泥滩的半陆栖潮间带蟹。退潮后，它用小螯筛选泥表层的微型生物和有机颗粒；成年雄蟹的另一只螯会长成可占身体重量近四成的信号与争斗结构，并作上下垂直挥舞。雌雄和幼蟹都能在洞口堆出低矮泥烟囱，实验支持它降低洞穴被闯入的风险。大量旧研究使用 Uca arcuata，而当前接受名是 Tubuca arcuata；全球尚无 IUCN 评估，日本部分种群则已进入区域受胁名录。',
    storySections: [
      {
        key: 'name-revision',
        label: '分类与名称',
        title: '旧属名与现行属名',
        body: '旧文献用 Uca 泛称多种招潮蟹。2016 年系统修订将 Tubuca 提升为属，Uca arcuata 与 Uca (Tubuca) arcuata 都对应今天的 Tubuca arcuata，早期原始名称则写作 Ocypode (Gelasimus) arcuata。',
      },
      {
        key: 'claw-development',
        label: '螯足分化',
        title: '雄蟹的大螯在成长中形成',
        body: '很小的幼蟹先有两只大小相等的小螯，进入过渡尺寸后，一侧脱落再生为取食小螯，另一侧继续长成雄蟹主螯。左右主螯约各占一半，雌蟹保留两只小螯，能交替筛泥取食。',
      },
      {
        key: 'vertical-wave',
        label: '垂直挥螯',
        title: '上下挥螯向雌蟹传递信号',
        body: '雄蟹既会朝附近雌蟹抬起主螯，也会在身边没有雌蟹时挥舞。日本样地所有成功洞内交配之前都有定向挥螯，泥面交配偶尔省略这一步。潮汐决定它们何时出洞，挥螯是动物间的信号。',
      },
      {
        key: 'mud-chimney',
        label: '洞口建筑',
        title: '洞口那圈泥墙',
        body: '雌雄、幼蟹和成蟹都能把洞口周围的湿泥堆成数厘米高圆筒，小个体与雌蟹在一处日本样地更常建造。选择实验中，无洞游走的蟹较少进入带烟囱的洞，说明这圈低墙能帮助守住珍贵的潮间带避难所。',
      },
      {
        key: 'deposit-feeding',
        label: '退潮饭桌',
        title: '用小螯筛取泥中的食物',
        body: '退潮后，小螯不断把泥送到口器，微型底栖生产者、微生物与细碎有机物被筛出。深圳样地中，有两只取食螯的雌蟹比雄蟹吃得更快；营养盐升高又会改变取食、行走和掘洞，把个体行为与整片泥滩的沉积处理联系起来。',
      },
      {
        key: 'larval-currents-conservation',
        label: '幼生与保护',
        title: '幼生乘流，保护要跨过河口',
        body: '雌蟹把卵抱在腹部下方，孵化幼生进入水体。线粒体记录显示，台湾海峡冰期陆桥曾促成南北分化，今天的黑潮等暖流可能推动繁殖季扩散。保护需要维护不同河口的泥滩水文与水质，并开展跨地区标准化调查。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '德哈恩的描述与后来调整的属名',
        body: '弧边招潮蟹的命名记录署为德哈恩、1835 年，原始名称为 Ocypode (Gelasimus) arcuata。它后来长期列入 Uca 属，2016 年的系统修订将 Tubuca 提升为属，形成今天的 Tubuca arcuata。查阅挥螯或泥烟囱的早期研究时，Uca arcuata 仍是重要的检索名称。',
      },
    ],
    keyFacts: [
      '当前接受名是 Tubuca arcuata；Uca arcuata 是同一物种的旧组合名。',
      '成年雄蟹只有一只巨型主螯，左、右主螯约各占一半；雌蟹有两只小螯。',
      '大野川大型雄蟹的主螯可接近全身体重的 40%，但这是局地种群结果。',
      '日本样地所有成功洞内交配此前都出现面向雌蟹的定向垂直挥螯。',
      '雌雄与幼蟹都能建低矮泥烟囱，实验支持它降低洞穴被闯入的概率。',
      '北方 N 与广布 W 线粒体支系记录着历史隔离和海流扩散；它们仍属同一个物种。',
    ],
    threats: [
      '河口泥滩填筑、岸线硬化与沿海开发直接移除取食面、潮沟和可掘洞沉积层',
      '潮汐交换、间隙水盐度、粒径和有机质改变，使看似仍是泥地的区域失去适宜性',
      '生活污水、营养盐和养殖清淤废水改变取食、掘洞、沉积处理量与食物来源',
      '局地捕捉、洞区踩踏和繁殖期反复干扰对小型或分布边缘种群造成额外压力',
      '非标准化目击和洞口计数掩盖真实趋势，延迟对局地下降和生境退化的响应',
    ],
    conservationActions: [
      '保护自然潮汐作用下的河口软泥滩、红树林边缘与潮沟，避免填筑、硬化和阻断水交换',
      '按淹水时长、盐度、粒径、有机质和土壤热性质设计并验证潮滩恢复',
      '控制生活污水、营养盐和养殖清淤废水，并同步监测水质、沉积物和蟹类行为',
      '对区域受胁小种群限制捕捉，设置步道和观赏距离，避免踩踏洞口与抱卵活动区',
      '在固定潮位、季节和天气窗口开展样方调查，同时记录出洞率、性别、背甲宽与底质',
      '保存分布边缘记录的照片、凭证与 DNA，复核近似种并监测遗传连接',
      '推动东亚沿海跨地区共享标准化数据，维护繁殖季幼生可能连接的河口网络',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'carapace-width',
        label: '典型背甲宽',
        value: '约 3',
        unit: 'cm',
        note: '量的是背甲宽；已核实的分类凭证最宽 40.2 毫米',
      },
      {
        key: 'major-claw-share',
        label: '大型雄蟹主螯',
        value: '最高近 40%',
        note: '占全身体重的比例；数字出自日本大野川种群，各地各有出入',
      },
      {
        key: 'chimney-height',
        label: '常见泥烟囱',
        value: '约 3',
        unit: 'cm',
        note: '低矮洞口圆筒，地点和个体之间会变化',
      },
      {
        key: 'local-longevity',
        label: '局地推断寿命',
        value: '>5',
        unit: '年',
        note: '大野川种群由体型结构与 3.5 年饲养结果推断；全种寿命仍待更多数据',
      },
    ],
    media: {
      image: './images/species/bowed-fiddler-crab/01-mudflat-burrow-portrait.webp',
      alt: '退潮的东亚河口泥滩上，一只深色网纹背甲的雄性弧边招潮蟹站在洞口旁，只有一只橘红与乳白相间的巨螯，左侧留有开阔泥面',
      focalPoint: { x: 0.66, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/bowed-fiddler-crab/02-male-female-claw-dimorphism.webp',
          alt: '湿润泥滩上并列着一雄一雌两只弧边招潮蟹，左侧雄蟹有一只橘红巨螯和一只小螯，右侧雌蟹有两只相近的小螯',
          title: '一只主螯，两只取食螯',
          caption: '成年雄蟹只有一只小螯用于取食，雌蟹则保留两只小螯；主螯长在左侧或右侧的概率约各占一半。',
          focalPoint: { x: 0.53, y: 0.52 },
        },
        {
          image: './images/species/bowed-fiddler-crab/03-estuarine-mudflat-habitat.webp',
          alt: '退潮后的东亚河口软泥滩被浅潮沟和盐生植被分隔，四只小型弧边招潮蟹分散在各自洞口附近',
          title: '潮水退去，泥滩成为活动地面',
          caption: '软泥、潮沟、植被边缘与可掘洞的沉积层，共同组成它们的家；画面里的几只蟹，各守各的洞口。',
          focalPoint: { x: 0.63, y: 0.64 },
        },
        {
          image: './images/species/bowed-fiddler-crab/04-female-sediment-feeding.webp',
          alt: '一只雌性弧边招潮蟹在洞口附近用小螯把一小撮表层泥送向口器，身前散落少量处理后的泥粒',
          title: '两只小螯轮流筛过泥面',
          caption: '雌蟹交替用两只小螯把表层泥送入口器，筛取食物后留下小泥粒。',
          focalPoint: { x: 0.54, y: 0.52 },
        },
        {
          image: './images/species/bowed-fiddler-crab/05-vertical-claw-wave.webp',
          alt: '雄性弧边招潮蟹在泥滩洞口旁朝数个身位外的一只雌蟹垂直抬起唯一的橘红巨螯',
          title: '举起来的是信号',
          caption: '雄蟹可朝附近雌蟹定向上下挥螯，也会在没有雌蟹时挥舞，是求偶与展示行为的一部分。',
          focalPoint: { x: 0.48, y: 0.5 },
        },
        {
          image: './images/species/bowed-fiddler-crab/06-burrow-habitat-monitoring.webp',
          alt: '河口泥滩上，两名研究者拍摄并记录样方内的洞口，环境探头置于潮沟水中，三只弧边招潮蟹在远处活动',
          title: '在同一个潮位窗口读懂变化',
          caption: '可靠的趋势要靠固定潮位、季节与样方，同步记录水质、底质和出洞率；洞口数与个体数之间，还隔着一层换算。',
          focalPoint: { x: 0.52, y: 0.58 },
        },
      ],
    },
    sources: [
      ...BOWED_FIDDLER_CRAB_SOURCES,
      {
        title: '弧边招潮蟹：描述与命名记录',
        url: 'https://www.st.nmfs.noaa.gov/nauplius/media/copepedia/taxa/T4015488/',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: BOWED_FIDDLER_CRAB_CONTENT_DATE,
    updatedAt: BOWED_FIDDLER_CRAB_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
