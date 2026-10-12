import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE = '2026-09-02' as const;

const SOUTHERN_THREE_BANDED_ARMADILLO_CONTENT_DATE = '2026-09-02' as const;

const SOUTHERN_THREE_BANDED_ARMADILLO_SOURCES = [
  {
    title: 'Mammal Diversity Database: Tolypeutes matacus',
    url: 'https://www.mammaldiversity.org/taxon/1000419/',
    kind: 'taxonomy',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: 'MDD v2.5 taxonomy changes',
    url: 'https://www.mammaldiversity.org/releases/diff-changes/2.5/',
    kind: 'taxonomy',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: 'Casali et al. 2026: Unravelling the phylogeny of armadillos',
    url: 'https://doi.org/10.1111/cla.70048',
    kind: 'taxonomy',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Tolypeutes matacus',
    url: 'https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T21974A244101608.en',
    kind: 'conservation',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC specialist group: Southern three-banded armadillo',
    url: 'https://xenarthrans.org/species/armadillos-2/southern-three-banded-armadillo/',
    kind: 'general',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: 'Feijó et al. 2015: Distribution of Tolypeutes',
    url: 'https://doi.org/10.2108/zs140186',
    kind: 'ecology',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: 'Ferreiro et al. 2022: Reconstructing Chacoan distribution',
    url: 'https://doi.org/10.1007/s10914-022-09627-3',
    kind: 'ecology',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: 'Bolkovic et al. 1995: Food habits in the Dry Chaco',
    url: 'https://doi.org/10.2307/1382612',
    kind: 'ecology',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: 'Attias et al. 2016: Three-banded armadillos dig their own burrows',
    url: 'https://doi.org/10.1590/S1984-4689zool-20160035',
    kind: 'ecology',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: 'Attias et al. 2018: Temperature, habitat selection and activity',
    url: 'https://doi.org/10.1016/j.anbehav.2018.04.011',
    kind: 'ecology',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: 'Attias et al. 2020: Ecology and social biology',
    url: 'https://doi.org/10.1093/jmammal/gyaa117',
    kind: 'ecology',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: 'Howell-Stephens et al. 2013: Zoo-housed reproductive hormones',
    url: 'https://doi.org/10.1016/j.anireprosci.2013.02.004',
    kind: 'general',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: 'de Melo et al. 2025: Mating behavior in Brazil',
    url: 'https://doi.org/10.1080/01650521.2025.2557854',
    kind: 'ecology',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
  {
    title: 'Ferreiro et al. 2026: Habitat loss and overexploitation',
    url: 'https://doi.org/10.1111/acv.70047',
    kind: 'conservation',
    accessedAt: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-tolypeutes-matacus',
    slug: 'southern-three-banded-armadillo',
    names: {
      zh: '南方三带犰狳',
      en: 'Southern Three-banded Armadillo',
      aliases: [],
    },
    scientificName: 'Tolypeutes matacus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Cingulata', '有甲目'),
      taxon('Tolypeutidae', '三带犰狳科'),
      taxon('Tolypeutes', '三带犰狳属'),
    ),
    conservation: conservation('NT', 'decreasing', 2024, 'A2cd'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['南美洲'],
      regions: [
        '玻利维亚东部查科',
        '巴西Mato Grosso与Mato Grosso do Sul西南部',
        '巴拉圭大查科',
        '阿根廷北部与中部至San Luis省',
        'Buenos Aires省南部历史分布区，当前可能已局部消失',
      ],
      countries: ['阿根廷', '玻利维亚', '巴西', '巴拉圭'],
      range:
        '自然分布从玻利维亚东部和巴西西南部，经巴拉圭大查科，延伸到阿根廷北部和中部，当前南界约至 San Luis 省，海拔从海平面到约 800 米。Buenos Aires 省南部主要为历史记录，近年调查提示当地已经消失。',
      center: { lat: -23, lng: -61 },
    },
    habitats: [
      {
        name: '热带或亚热带干旱林',
        realm: 'terrestrial',
        description:
          '干查科刺林和季节性干林提供无脊椎动物、隐蔽灌丛、草巢材料与可挖洞地表。',
        isPrimary: true,
      },
      {
        name: '干旱稀树草原',
        realm: 'terrestrial',
        description:
          '开阔草地与木本斑块交错；景观异质性为取食、移动和热庇护提供选择。',
        isPrimary: true,
      },
      {
        name: '温带灌丛',
        realm: 'terrestrial',
        description: '阿根廷分布南部较冷而干旱的灌丛，属于IUCN列出的主要适宜生境。',
        isPrimary: true,
      },
      {
        name: '湿润稀树草原、棕榈草原与廊道林',
        realm: 'terrestrial',
        description:
          'IUCN将湿润稀树草原列为边缘生境；潘塔纳尔研究显示林斑能在极端温度下提供热庇护。',
      },
      {
        name: '低强度农业镶嵌',
        realm: 'terrestrial',
        description:
          '本种可容忍低水平农业扰动，但大面积作物转化仍移除主要生境，不能把农地视为原生植被替代品。',
      },
    ],
    measurements: {
      length: {
        min: 20,
        max: 25,
        unit: 'cm',
        note: '成体头体长；当前精选来源未提供同口径尾长范围。',
      },
      weight: {
        min: 1,
        max: 2,
        unit: 'kg',
        note: 'IUCN SSC专家组参考范围；巴西两个野外地点的成年样本为0.96至1.62千克。',
      },
    },
    diet: {
      types: ['insectivore', 'omnivore'],
      foods: [
        '蚂蚁',
        '白蚁',
        '甲虫幼虫与其他无脊椎动物',
        '果实',
        '种子与其他植物材料',
      ],
      description:
        '机会主义昆虫食者，以无脊椎动物为主，也利用果实、种子和其他植物材料。Copo保护区66份胃内容物中的比例随季节改变，不能设成全物种固定菜单。',
    },
    activity: [
      '主要在夜间活动，多数活动集中在前半夜；气温下降时会提前开始并缩短活动时段',
      '受威胁时把头、四肢和腹面收进甲壳，让三角形头盾与尾盾扣成紧密甲球',
      '会挖自己的小型休息洞，也使用草巢和落叶覆盖的浅凹，并能搬草修补巢穴',
      '通常单独活动；繁殖期发情雌性可引发多只雄性追逐和竞争',
      '用前足挖开土壤或腐木寻找昆虫，也随季节取食果实等植物材料',
    ],
    tags: [
      '脊索动物门',
      '哺乳纲',
      '有甲目',
      '三带犰狳科',
      '南美洲',
      '查科',
      '主要夜行',
      '机会主义昆虫食',
      '成球防御',
      '挖洞',
      'IUCN近危',
      'CITES未列入',
    ],
    summary:
      '南方三带犰狳生活在南美查科及周边地区，以昆虫为主要食物。遇险时，它把头、四肢和腹部收进甲壳，头盾与尾盾扣合成球。',
    description:
      '南方三带犰狳头体长约 20 至 25 厘米，体重约 1 至 2 千克。沙黄至棕色的高拱甲壳分为肩盾、活动带和臀盾，能弯曲闭合。它通常单独活动，会挖小型休息洞，也使用草巢和落叶下的浅凹；无脊椎动物是食物主体，果实等植物材料随季节增加。农业扩张和针对性猎捕使种群下降，缩成甲球虽能防御，却也让人容易把它拾走。',
    storySections: [
      {
        key: 'armor-with-moving-seams',
        label: '形态',
        title: '高拱甲壳仍保留活动接缝',
        body: '肩盾和臀盾之间有2至4条活动带，头盾和短尾盾都呈三角形。活动接缝让高拱甲壳能够弯曲闭合；名称中的“三带”不保证每只个体恰有三条。腹面和腿内侧仍是带毛的软组织，甲壳也不是龟壳。',
      },
      {
        key: 'closing-the-armor-ball',
        label: '防御',
        title: '头盾和尾盾扣成一只甲球',
        body: '受到威胁时，它把头、四肢和软腹收进甲壳，三角形头盾与尾盾贴合周围甲片。甲球能降低许多捕食风险，也让人更容易拾取，防御行为因此与猎捕脆弱性连在一起；闭合不等于它会主动长距离滚走。',
      },
      {
        key: 'yes-they-dig',
        label: '庇护',
        title: '野外相机记录它自己挖洞',
        body: '野外相机直接记录南方三带犰狳自己从头挖出小洞。巴西两个地点的休息点还包括草巢和落叶覆盖的浅凹；研究者也拍到个体搬草修补巢。不同年龄和繁殖状态会改变庇护所的选择与重复使用。',
      },
      {
        key: 'seasonal-opportunistic-menu',
        label: '食性',
        title: '旱季虫群与雨季果实改变菜单',
        body: 'Copo保护区66份胃内容物显示，无脊椎动物占主体，植物材料主要是果实。甲虫幼虫全年出现，蚂蚁和白蚁在旱季更常见，果实在雨季增加。局地样本支持机会主义昆虫食，不能设成全种固定比例。',
      },
      {
        key: 'night-movement-and-rallies',
        label: '活动',
        title: '多数夜晚独行，发情时形成追逐',
        body: '潘塔纳尔GPS研究记录活动集中在前半夜，雄性活动范围大于雌性。另一项野外研究在4只发情雌性的小样本中观察到多雄追逐，单次最多14只雄性；这说明繁殖期会短暂聚集，不代表稳定群居或每次都有同样规模。',
      },
      {
        key: 'defense-cannot-stop-land-conversion',
        label: '保护',
        title: '农业扩张与猎捕使种群下降',
        body: 'IUCN认为农业扩张和针对性猎捕影响分布区的大部分范围，当前全球趋势下降。保护区覆盖的适生区不超过12%，本种又没有系统性全球监测。保护需要同时管理原生植被、收获和贸易路径。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1804 年的命名与“三带”外形',
        body: 'Desmarest 在 1804 年以 loricatus matacus 正式命名本种，现用名称为 Tolypeutes matacus。原始描述没有给出模式产地，Sanborn 在 1930 年将其限定到阿根廷图库曼。俗名中的“三带”指甲壳上的活动带，但实际可有 2 至 4 条；更特别的特征是头盾与尾盾能够扣合，封住缩成球的身体。',
      },
    ],
    keyFacts: [
      'MDD v2.5 接受 Tolypeutes matacus，并将其置于有甲目、三带犰狳科和三带犰狳属；IUCN 2025 条目仍沿用此前的 Chlamyphoridae 科名。',
      '自然分布于阿根廷、玻利维亚、巴西和巴拉圭，海拔从海平面到约800米。',
      'Buenos Aires省南部只有历史记录，近年调查提示当地已经消失。',
      '当前IUCN全球等级为近危，趋势下降，评估日期为2024年，准则A2cd；条目在2025年发布。',
      'IUCN推定12年内缩减低于30%但已接近易危门槛，这不是全球个体普查。',
      '没有可靠的当前全球成熟个体数，也没有野外寿命数据；圈养寿命不能替代野外寿命。',
      '头体长约20至25厘米，体重约1至2千克。',
      '圆顶甲壳有2至4条活动带，名称中的三带不是固定个体数。',
      '三角形头盾和尾盾能在成球时扣合，腹面与四肢收进甲壳内部；现有证据不支持主动长距离滚走。',
      '它会挖自己的小洞，也会使用草巢和落叶覆盖的浅凹。',
      '机会主义昆虫食包括蚂蚁、白蚁和甲虫幼虫，也随季节取食果实等植物材料。',
      '潘塔纳尔两个地点的26只监测个体平均每天活动5.5±2.8小时，多数活动集中在前半夜；这不是全分布区常数。',
      '通常单独活动；4只发情雌性的小样本记录到多雄追逐，单次最多14只雄性，不能外推为每次固定规模。',
      '主要威胁为农业转化和针对性猎捕，宠物展示用途、手工艺利用与道路死亡也有记录。',
      '当前CITES附录未列入本种，不等于任何地点都可自由贸易，国际与国内交易仍需遵守适用法规。',
    ],
    threats: [
      '一年生和多年生作物扩张造成的干林、稀树草原和灌丛转化与退化',
      '食用性针对猎捕；闭合成球后容易被人拾取，提高捕获风险',
      '宠物、展示和手工艺用途带来的野外捕捉与运输死亡',
      '道路和铁路造成的局地死亡',
      '缺少系统性种群、收获和贸易监测，使局地下降难以及时量化',
    ],
    conservationActions: [
      '管理干查科、干旱稀树草原和温带灌丛，限制把原生植被转为大面积作物地',
      '保留草地、灌丛、棕榈草原和廊道林构成的异质景观与热庇护林斑',
      '建立食用、宠物、展示和手工艺用途的收获管理与来源追踪',
      '扩大保护地外的地点管理；当前受保护适生区不超过12%',
      '在四个分布国统一监测种群、栖息地、捕猎、道路死亡与贸易趋势',
      '补足野外繁殖率、寿命、幼体存活和不同生境空间利用研究',
    ],
    metrics: {
      adultLengthCm: [20, 25],
      adultMassKg: [1, 2],
      elevationM: [0, 800],
    },
    featuredStats: [
      {
        key: 'iucn-status',
        label: 'IUCN',
        value: 'NT',
        note: '近危，全球趋势下降；2024年评估，2025年发布，准则A2cd。',
      },
      {
        key: 'movable-bands',
        label: '甲壳活动带',
        value: '2–4',
        unit: '条',
        note: '个体可见范围；名称中的“三带”不是固定数量。',
      },
      {
        key: 'head-body-length',
        label: '头体长',
        value: '20–25',
        unit: '厘米',
        note: 'IUCN SSC专家组物种概述范围。',
      },
      {
        key: 'pantanal-daily-activity',
        label: '每日活动',
        value: '5.5 ± 2.8',
        unit: '小时',
        note: '巴西潘塔纳尔两个地点的监测结果，多数活动集中在前半夜。',
      },
    ],
    media: {
      image:
        './images/species/southern-three-banded-armadillo/01-dry-chaco-foraging-cover.webp',
      alt: '干查科黄昏地表，一只南方三带犰狳低头觅食，高拱棕色甲壳、四条活动带、三角形头盾和短尾盾清晰可见',
      focalPoint: { x: 0.7, y: 0.56 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/southern-three-banded-armadillo/02-full-body-diagnostic-profile.webp',
          alt: '一只完整南方三带犰狳从左向右侧身站立，圆顶甲壳、三条活动带、三角形头尾盾、腹侧粗毛和四足无裁切',
          title: '圆顶甲壳与三角形头尾盾',
          caption:
            '形态重建显示一只展开个体的完整侧影和主要外部特征；画面不能测量体长或体重，也不能确认年龄、性别、来源地、野外身份或活动带频率。',
          focalPoint: { x: 0.52, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/southern-three-banded-armadillo/03-complete-defensive-ball.webp',
          alt: '一只南方三带犰狳在干叶地面闭成紧密甲球，三角形头盾与尾盾在可见接缝处贴合，眼、鼻、四肢和腹面收在内部',
          title: '闭合的甲球防御',
          caption:
            '防御重建显示头盾与尾盾扣合并遮住软组织；静态画面不能给出闭合力、持续时间、承压能力、咬合抵抗、捕食成功率或主动滚动速度。',
          focalPoint: { x: 0.5, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/southern-three-banded-armadillo/04-head-tail-closure.webp',
          alt: '一只南方三带犰狳在干叶地面处于闭合中段，头盾与短尾盾相向收拢，折叠四肢仍部分可见',
          title: '头盾与尾盾相向闭合',
          caption:
            '动作重建定格头盾、尾盾和折叠四肢相向收拢的一个阶段；静帧不能证明通用动作顺序、速度、力量、刺激来源、持续时间或防御结果。',
          focalPoint: { x: 0.52, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/southern-three-banded-armadillo/05-own-burrow-excavation.webp',
          alt: '一只三条活动带的南方三带犰狳在灌丛下以强壮前足刨开松土，完整身体和短三角尾仍位于小洞口外',
          title: '会自己挖出的休息洞',
          caption:
            '行为重建显示前足在新鲜洞口旁刨土；画面不能证明洞穴由该个体从头挖成，也不能给出深度、尺寸、完成时间、所有权或使用频率。',
          focalPoint: { x: 0.55, y: 0.57 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/southern-three-banded-armadillo/06-straw-nest-gathering.webp',
          alt: '黄昏一只三条活动带的南方三带犰狳口衔小束干草，走向低矮灌丛下的浅草巢，完整身体和短尾可见',
          title: '搬草修补地表庇护所',
          caption:
            '庇护行为重建显示一只个体搬运干草走向浅草巢；画面不能确认性别、繁殖或育幼状态、巢穴所有权、建造时长、搬运次数、复用情况或使用时长。',
          focalPoint: { x: 0.58, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: SOUTHERN_THREE_BANDED_ARMADILLO_SOURCES,
    featured: true,
    publishedAt: SOUTHERN_THREE_BANDED_ARMADILLO_CONTENT_DATE,
    updatedAt: SOUTHERN_THREE_BANDED_ARMADILLO_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
