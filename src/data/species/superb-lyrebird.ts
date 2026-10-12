import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const SUPERB_LYREBIRD_SOURCE_DATE = '2026-09-03' as const;

const SUPERB_LYREBIRD_CONTENT_DATE = '2026-09-03' as const;

const SUPERB_LYREBIRD_SOURCES = [
  {
    title:
      'Australian Faunal Directory via Atlas of Living Australia — Menura (Menura) novaehollandiae',
    url: 'https://bie.ala.org.au/species/https%3A/biodiversity.org.au/afd/taxa/944960f7-4a3f-4de8-a1fd-0f037af45a23',
    kind: 'taxonomy',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'IOC World Bird List v15.2 — Lyrebirds (Menuridae)',
    url: 'https://www.worldbirdnames.org/new/bow/lyrebirds/',
    kind: 'taxonomy',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'IOC World Bird List v15.2 — Multilingual Names',
    url: 'https://worldbirdnames.org/Multiling%20IOC%2015.2.xlsx',
    kind: 'taxonomy',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Menura novaehollandiae (assessed 2018)',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22703605A132071218.en',
    kind: 'conservation',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone — Superb Lyrebird species factsheet',
    url: 'https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae',
    kind: 'conservation',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'HANZAB — Superb Lyrebird official species record',
    url: 'https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640',
    kind: 'general',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'HANZAB — Superb Lyrebird species page',
    url: 'https://hanzab.birdlife.org.au/species/superb-lyrebird/',
    kind: 'general',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'HANZAB — Expanded taxonomy, Part 3: Menuridae',
    url: 'https://hanzab.birdlife.org.au/expanded-hanzab-taxonomy-part-3/',
    kind: 'taxonomy',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'Australian Museum — Superb Lyrebird',
    url: 'https://australian.museum/learn/animals/birds/superb-lyrebird/',
    kind: 'general',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Smith 2004 — Structural changes in the lyrate feathers in the development of the tail plumage',
    url: 'https://doi.org/10.1071/MU01020',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Zann & Dunstan 2008 — Mimetic song in Superb Lyrebirds: populations and age classes',
    url: 'https://doi.org/10.1016/j.anbehav.2008.05.021',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Dalziell & Magrath 2012 — Fooling the experts: accurate vocal mimicry in the Superb Lyrebird',
    url: 'https://doi.org/10.1016/j.anbehav.2012.03.009',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Dalziell et al. 2013 — Dance choreography is coordinated with song repertoire',
    url: 'https://doi.org/10.1016/j.cub.2013.05.018',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Dalziell & Welbergen 2016 — Elaborate mimetic vocal displays by female Superb Lyrebirds',
    url: 'https://doi.org/10.3389/fevo.2016.00034',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Dalziell et al. 2021 — Male lyrebirds create a complex acoustic illusion of a mobbing flock',
    url: 'https://doi.org/10.1016/j.cub.2021.02.003',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'Robinson & Curtis 1996 — The vocal displays of the lyrebirds',
    url: 'https://doi.org/10.1071/MU9960258',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Lill 1986 — Time-energy budgets during reproduction and the evolution of single parenting',
    url: 'https://doi.org/10.1071/ZO9860351',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'Maisey et al. 2019 — Habitat selection by the Superb Lyrebird',
    url: 'https://doi.org/10.1111/aec.12684',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Maisey et al. 2021 — Foraging by an avian ecosystem engineer modifies litter and soil',
    url: 'https://doi.org/10.1002/eap.2219',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      "Maisey et al. 2025 — Superb Lyrebird foraging activity 'farms' invertebrate prey",
    url: 'https://doi.org/10.1111/1365-2656.70009',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'Nugent et al. 2014 — Interactions between the Superb Lyrebird and fire',
    url: 'https://doi.org/10.1071/WR14052',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Hughes et al. 2023 — Preferred nesting habitat and the Black Summer megafires',
    url: 'https://doi.org/10.1093/ornithapp/duad027',
    kind: 'conservation',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      "Maisey et al. 2023 — Effects of Australia's Black Summer megafires on the Superb Lyrebird",
    url: 'https://doi.org/10.1016/j.biocon.2023.110356',
    kind: 'conservation',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-menura-novaehollandiae',
    slug: 'superb-lyrebird',
    names: {
      zh: '华丽琴鸟',
      en: 'Superb Lyrebird',
      aliases: [],
    },
    scientificName: 'Menura novaehollandiae',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Passeriformes', '雀形目'),
      taxon('Menuridae', '琴鸟科'),
      taxon('Menura', '琴鸟属'),
    ),
    conservation: conservation('LC', 'decreasing', 2018),
    distribution: {
      realms: ['terrestrial'],
      continents: ['大洋洲'],
      regions: [
        '昆士兰州东南部',
        '新南威尔士州东部与澳大利亚首都领地',
        '维多利亚州东部和东南部',
        '塔斯马尼亚州南部（引入）',
      ],
      countries: ['澳大利亚'],
      endemicTo: ['澳大利亚'],
      range:
        '原生于澳大利亚东部和东南部大陆，从昆士兰州东南部经新南威尔士州、澳大利亚首都领地至维多利亚州东部和东南部；塔斯马尼亚州南部种群由20世纪引入后建立，不属于原生范围。',
      center: { lat: -35.7, lng: 149.1 },
    },
    habitats: [
      {
        name: '温带雨林与湿润硬叶林',
        realm: 'terrestrial',
        description:
          '主要生境；湿润沟谷、溪流附近、树蕨和藤本较多的森林提供巢址、无脊椎动物食物和夜栖树。',
        isPrimary: true,
      },
      {
        name: '亚热带湿润低地森林',
        realm: 'terrestrial',
        description:
          '北段种群使用亚热带雨林和湿润林；低地是IUCN栖息地分类，不表示全种只在低海拔出现。',
        isPrimary: true,
      },
      {
        name: '干燥硬叶林与林地',
        realm: 'terrestrial',
        description:
          '在花岗岩带、湿润沟谷及枯落物保持合适水分和开阔地表的地点使用，质量随微环境变化。',
      },
      {
        name: '互补的巢址与觅食微生境',
        realm: 'terrestrial',
        description:
          '巢址偏向近溪流、深枯落物和复杂中高层植被；觅食地偏向低层植被稀疏、可翻耙的开放地表。',
      },
    ],
    measurements: {
      length: {
        min: 76,
        max: 103,
        unit: 'cm',
        note: '两性成体展示包络：雌鸟76—80厘米，雄鸟约103厘米，均含尾；不是同一性别的统计范围。',
      },
      weight: {
        min: 880,
        max: 1065,
        unit: 'g',
        note: 'HANZAB代表值：雌鸟880克、雄鸟1065克；两端不是物种成体极值。',
      },
      wingspan: {
        min: 68,
        max: 76,
        typical: 73,
        unit: 'cm',
        note: 'HANZAB种级汇总；原记录没有在该字段公开样本量或两性拆分。',
      },
    },
    diet: {
      types: ['insectivore', 'omnivore'],
      foods: [
        '蚯蚓',
        '端足类与等足类',
        '蜘蛛',
        '蜈蚣与多足类',
        '甲虫及其他昆虫与幼虫',
        '偶尔取食的种子',
      ],
      description:
        '以森林地表、枯落层和浅土中的无脊椎动物为主，偶食种子；用强健双足翻耙叶层、腐木和表土寻找猎物。',
    },
    activity: [
      '昼行、以地面活动和觅食为主',
      '通常独居，繁殖后可形成小型松散觅食群',
      '夜间上树栖息，记录可达地面上方约45米',
      '基本留居，只作局地移动和幼鸟扩散',
      '飞行较少，受扰时多奔跑、跳跃或短距离滑翔',
      '繁殖期雄鸟维护土丘展示场并在领地内歌舞',
    ],
    tags: [
      '澳大利亚特有',
      '雀形目',
      '琴鸟科',
      '森林地栖鸟',
      '仿声',
      '多模态求偶',
      '雄性饰羽',
      '雌性单独育幼',
      '生态系统工程师',
      '塔斯马尼亚引入种群',
      'IUCN无危',
      '种群下降',
      '山火敏感',
    ],
    summary:
      '华丽琴鸟生活在澳大利亚东南部森林，白天用强足翻开落叶寻找小动物，夜间上树休息。雄鸟能模仿其他鸟声，并配合长尾和舞步求偶；雌鸟独自筑巢和育幼。',
    description:
      '华丽琴鸟是大型地栖鸣禽，主要在湿润森林的枯落层和浅土中取食无脊椎动物。成年雄鸟有 16 枚特殊尾羽，展示时向前翻过背部和头部，并把不同歌声与腿、翼和尾部动作配合。雄雌都能仿声，雌鸟护巢时还会增加警戒类声音。它原生于澳大利亚东部和东南部大陆，塔斯马尼亚南部种群来自人为引入。森林退化、外来捕食者和严重火灾仍需要关注。',
    storySections: [
      {
        key: 'mainland-and-tasmania',
        label: '分布边界',
        title: '塔斯马尼亚种群来自二十世纪引入',
        body: '华丽琴鸟原生于澳大利亚东部和东南部大陆。1934 至 1949 年，人们从维多利亚向塔斯马尼亚输入 22 只、释放 20 只，建立了今天的南部岛屿种群。塔斯马尼亚的种群与大陆原生范围因此具有不同的形成历史。',
      },
      {
        key: 'forest-floor-engineer',
        label: '生态工程',
        title: '翻耙落叶也改变森林地表',
        body: '华丽琴鸟用双足把枯叶、表土和腐木向后耙开，寻找蚯蚓、甲壳类、蛛形类、多足类和昆虫。维多利亚中央高地实验估计，研究地一年平均每公顷被翻动155.7吨枯落物和土壤；排除琴鸟两年后，表土更紧实、枯落层更深。这个数字描述种群在特定森林里的年扰动，不是一只鸟独自搬运的重量。',
      },
      {
        key: 'tail-through-moults',
        label: '雄性饰羽',
        title: '十六枚尾羽逐年形成',
        body: '成年雄鸟的尾由一对宽阔琴形羽、一对中央线状羽和六对丝状羽组成。展示时，尾羽向前翻过背部和头部，露出银灰色腹面。完整成尾通常要6 至 8年；连续换羽研究把成熟过程概括为约八年，所以初见特殊尾羽的年轻雄鸟仍不等于成年展示者。',
      },
      {
        key: 'learned-song-and-dance',
        label: '多模态求偶',
        title: '歌声与舞步相互配合',
        body: '雄鸟对其他鸟声的复制足以让灰鸫作出接近真实同类歌声的反应，但它常删短重复段。录像研究又发现，四类舞蹈歌声各自配合特定的腿步、尾位和翼动。在雌鸟试图离场或交配期间，雄鸟还会拼出多种警戒叫声和翼拍声，形成一群小鸟围攻捕食者的听觉假象；“感官陷阱”是有实验支持的功能解释，不是对雄鸟意图的读心。',
      },
      {
        key: 'single-egg-solo-mother',
        label: '繁殖投入',
        title: '雌鸟独自养育雏鸟',
        body: '雌鸟独自选择巢址，用枝、根、树皮、蕨叶和苔藓筑成有侧入口的穹顶巢，几乎总是产一枚卵。维多利亚研究的7枚卵平均孵化约50天；雏鸟离巢后仍可依赖母鸟8 至 9个月。雄鸟不参与筑巢、孵卵或喂幼，雌鸟的仿声还会在护巢情境中变得更频繁、更偏向警戒内容。',
      },
      {
        key: 'fire-refugia',
        label: '火灾避难所',
        title: '湿润雨林可成为火灾后的避难所',
        body: 'IUCN仍把华丽琴鸟列为无危，但2019 至 2020年大火估计烧过全种约43%的分布区。大蓝山约80%的高适宜度巢区被烧；南部亚种调查中，高强度火烧地几乎没有觅食痕迹，雨林却保留例外。保护不能只统计烧过多少面积，还要保住溪谷、陡坡和雨林这些巢址与重返源地。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: 'Latham 的命名与琴形尾羽',
        body: '澳大利亚动物名录采用 Latham，1801 的正式命名记录，现用名称为 Menura novaehollandiae。英文俗名 lyrebird 指成年雄鸟弯曲的特殊尾羽，展开时呈琴形。雄鸟求偶时会把尾羽向前翻过身体；研究这种展示姿态和仿声，也帮助人们区分静态外观与实际行为。',
      },
    ],
    keyFacts: [
      '澳大利亚动物名录采用 Menura (Menura) novaehollandiae Latham, 1801；通常使用二名法 Menura novaehollandiae。',
      'IOC v15.2的英文主名是Superb Lyrebird，官方简体中文名是华丽琴鸟。',
      '本种只分布于澳大利亚；东部和东南部大陆是原生范围，塔斯马尼亚南部是人为引入范围。',
      '主要生境是温带森林和亚热带湿润低地森林，也使用部分有合适水分和地表结构的干燥森林。',
      '雄鸟全长约103厘米、尾长54 至 71厘米；雌鸟全长约78厘米，记录范围76 至 80厘米。',
      '翼展典型值约73厘米、汇总范围68 至 76厘米；HANZAB没有公开翼展样本量或两性拆分。',
      'HANZAB代表性体重为雄鸟1065克、雌鸟880克，这两个数不是全种成体极值。',
      '成年雄鸟尾部有16枚尾羽：一对外侧琴形羽、一对中央线状羽和六对丝状羽。',
      '完整雄性成尾通常在6 至 8年形成；个体间换羽进度不同，不能仅凭照片精确估龄。',
      '它以地表无脊椎动物为主，偶食种子，用强足翻耙枯落层、腐木和表土觅食。',
      '维多利亚中央高地实验估计研究地一年平均每公顷被翻动155.7吨枯落物和土壤。',
      '本种昼间主要在地面活动、夜间上树栖息，基本留居且飞行较少。',
      '回放和声学分析显示雄鸟的鸟声复制高度准确，但它常删减模型歌声的重复单元。',
      '录像研究识别出四类舞蹈歌声，每类配合特定的腿、尾和翼动作。',
      '雄鸟可在特定求偶阶段模拟多物种围攻群；感官欺骗是功能推断，不是主观意图测量。',
      '雌鸟也会复杂仿声，觅食和护巢时使用的声音结构不同。',
      '雌鸟独自筑造穹顶侧开口巢、孵卵和育幼，几乎总产一枚卵；7枚卵的孵化期均值为50±2天。',
      'IUCN 当前正式等级为无危，评估于 2018 年，趋势下降，成熟个体总数未量化。',
      '2019 至 2020年大火估计烧过全种约43%的分布区；不同地区和林型的影响并不均匀。',
    ],
    threats: [
      '原生森林丧失、退化与破碎化，减少湿润巢址和可翻耙的觅食地表；全种年度损失率尚未量化。',
      '更严重、范围更大的野火及气候变化驱动的生境转移，尤其威胁稀少的雨林巢址和烧后避难所。',
      '猫、赤狐和犬等引入哺乳动物捕食成鸟或巢内幼鸟；不同捕食者的全范围贡献尚未排序。',
      '稠密外来杂草和封闭地表阻碍翻耙觅食，部分道路还造成车辆撞击；这些压力主要有地点性记录。',
    ],
    conservationActions: [
      '保护并恢复温带和亚热带雨林、湿润硬叶林、溪流沟谷与陡坡巢址，优先维持火灾避难所。',
      '在相连森林镶嵌中同时保留复杂中高层巢址植被和低层稀疏、枯落层可翻耙的觅食地表。',
      '按火灾严重度和林型确定恢复优先级，防止剩余雨林遭受高强度重复火烧，并跟踪烧后再占用。',
      '在有证据的地点控制猫、赤狐、犬和入侵杂草，用控制前后监测检验成鸟、巢与觅食响应。',
      '建立跨亚种、跨林型的标准化监测，分别记录占用、繁殖、幼鸟补充、火灾严重度和觅食痕迹。',
    ],
    metrics: {
      adultLengthCm: [76, 103],
      wingspanCm: [68, 76],
    },
    featuredStats: [
      {
        key: 'male-total-length',
        label: '雄鸟全长',
        value: '约103',
        unit: '厘米',
        note: '含54 至 71厘米尾；HANZAB代表值，不是雄鸟范围上限',
      },
      {
        key: 'full-adult-tail',
        label: '完整雄性成尾',
        value: '6—8',
        unit: '年',
        note: '外观形成范围；连续年换羽研究概括为约八年，不能据此从照片精确估龄',
      },
      {
        key: 'annual-soil-turnover',
        label: '年翻动枯落物与土壤',
        value: '155.7',
        unit: '吨/公顷',
        note: '维多利亚中央高地研究地的12个月平均，不是每只鸟或全分布区常数',
      },
      {
        key: 'incubation-period',
        label: '孵化期均值',
        value: '50 ± 2',
        unit: '天',
        note: '维多利亚研究的7枚卵估计；HANZAB汇总范围42 至 57天',
      },
    ],
    media: {
      image:
        './images/species/superb-lyrebird/01-female-rainforest-cover.webp',
      alt: '湿润蕨类森林中，一只完整的朴尾型华丽琴鸟成鸟站在画面右侧的覆苔倒木上，喙、头冠、折翼、双腿、双足和长尾均在画内；画面按成鸟重建，朴尾外观不能单独判定性别',
      focalPoint: { x: 0.724, y: 0.562 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/superb-lyrebird/02-adult-male-field-marks.webp',
          alt: '湿润森林的落叶地上，一只完整成年雄性华丽琴鸟呈侧面站立，灰褐身体、暗红褐折翼、强健双足和向后垂下的完整饰尾均在画内',
          title: '灰褐身体与垂下的成年雄性饰尾',
          caption:
            'AI生成科学情景重建；侧面姿态表现成鸟体羽、强足与放低的饰尾。羽片彼此重叠，画面不能逐枚核验16枚尾羽，也不能测量体长、尾长、体重或年龄。',
          focalPoint: { x: 0.52, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/superb-lyrebird/03-inverted-tail-courtship-display.webp',
          alt: '湿润森林的一处低矮土丘上，一只完整成年雄性华丽琴鸟把饰尾向前翻过背部和头部，头、身体、双腿、双足与全部尾尖均在画内',
          title: '前翻过背部与头部的求偶饰尾',
          caption:
            'AI生成科学情景重建；前翻尾羽只表现一个可能的求偶展示瞬间。静帧没有声音，不能指定歌声类别、舞步与动作顺序、雌鸟是否在场或求偶结果。',
          focalPoint: { x: 0.52, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/superb-lyrebird/04-leaf-litter-foraging.webp',
          alt: '湿润蕨类森林的地表，一只完整朴尾型华丽琴鸟以一足向后耙开枯叶，另一足支撑身体，喙、双足和普通长尾均在画内',
          title: '强足向后翻开枯落层',
          caption:
            'AI生成科学情景重建；画面表现一次向后翻耙与局部落叶扰动。朴尾外观不能排除未成年雄鸟，静帧不能识别猎物，也不能测出155.7吨／公顷的年扰动量。',
          focalPoint: { x: 0.55, y: 0.6 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/superb-lyrebird/05-mound-song-display.webp',
          alt: '昏暗湿润森林的低矮土丘上，一只完整成年雄性华丽琴鸟张开喙站立，灰褐身体、双足和放低的完整饰尾均在画内',
          title: '土丘上张喙的成年雄鸟',
          caption:
            'AI生成科学情景重建；张喙姿态和放低的饰尾表现一个可能的鸣唱展示瞬间。静帧没有声音，不能证明个体正在歌唱、仿声或表演四类舞蹈歌声中的任一类。',
          focalPoint: { x: 0.51, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/superb-lyrebird/06-female-domed-nest.webp',
          alt: '湿润森林土坡上，一只朴尾型成鸟站在完整穹顶巢的侧入口旁，巢内恰好可见一枚灰褐斑驳卵，没有雏鸟或第二只成鸟',
          title: '侧开口穹顶巢里的一枚卵',
          caption:
            'AI生成科学情景重建；朴尾外观不能单独判定成鸟性别，一枚可见卵不能确认亲缘、受精、孵化状态、实际窝卵数或巢史。',
          focalPoint: { x: 0.54, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: SUPERB_LYREBIRD_SOURCES,
    featured: true,
    publishedAt: SUPERB_LYREBIRD_CONTENT_DATE,
    updatedAt: SUPERB_LYREBIRD_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
