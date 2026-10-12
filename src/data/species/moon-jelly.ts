import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const MOON_JELLY_SOURCE_DATE = '2026-08-21' as const;

const MOON_JELLY_CONTENT_DATE = '2026-08-21' as const;

const MOON_JELLY_SOURCES = [
  {
    title: 'IUCN Red List — species search for Aurelia aurita (no assessment found)',
    url: 'https://www.iucnredlist.org/search?query=Aurelia%20aurita&searchType=species',
    kind: 'conservation',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Aurelia aurita (AphiaID 135306)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=135306',
    kind: 'taxonomy',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'Lawley et al. 2021 — Systematics of the moon jellyfish genus Aurelia',
    url: 'https://doi.org/10.7717/peerj.11954',
    kind: 'taxonomy',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'Peters et al. 2025 — Taxonomic uncertainty in zooplankton monitoring',
    url: 'https://doi.org/10.1093/icesjms/fsaf077',
    kind: 'taxonomy',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'Naturalis — Aurelia aurita in the North Sea species catalogue',
    url: 'https://ns-crustacea.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?cat=TAB_DESCRIPTION&epi=210&id=131594',
    kind: 'general',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'NOAA Stellwagen Bank National Marine Sanctuary — Moon Jelly',
    url: 'https://sanctuaries.noaa.gov/pgallery/pgstellwagen/living/living_25.html',
    kind: 'general',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'van Walraven et al. 2016 — Molecular identification of North Sea polyps',
    url: 'https://doi.org/10.1007/s00227-016-2945-4',
    kind: 'distribution',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'Holst & Jarms 2010 — Effects of low salinity on North Sea polyps',
    url: 'https://doi.org/10.1007/s10750-010-0214-y',
    kind: 'ecology',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'Kraus et al. 2022 — Development of Aurelia aurita from the White Sea',
    url: 'https://doi.org/10.7717/peerj.13361',
    kind: 'ecology',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'Schmitz et al. 2023 — Microbiome and the Aurelia aurita life cycle',
    url: 'https://doi.org/10.1128/spectrum.00262-23',
    kind: 'ecology',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'Titelman & Hansson 2006 — Feeding rates of Aurelia aurita on fish larvae',
    url: 'https://doi.org/10.1007/s00227-005-0200-5',
    kind: 'ecology',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'Barz & Hirche 2005 — Diet and prey impact in the central Baltic Sea',
    url: 'https://doi.org/10.1007/s00227-005-1572-2',
    kind: 'ecology',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'Feitl et al. 2009 — Functional morphology of Aurelia feeding currents',
    url: 'https://doi.org/10.1086/BBLv217n3p283',
    kind: 'ecology',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'Pallasdies et al. 2019 — From neurons to behavior in Aurelia aurita',
    url: 'https://doi.org/10.7554/eLife.50084',
    kind: 'ecology',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'Gemmell et al. 2013 — Passive energy recapture in jellyfish swimming',
    url: 'https://doi.org/10.1073/pnas.1306983110',
    kind: 'ecology',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'Pinnow et al. 2023 — Temperature and salinity stress in Roscoff polyps',
    url: 'https://doi.org/10.1186/s42523-023-00266-4',
    kind: 'conservation',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'Loveridge et al. 2021 — Winter warming and population-specific strobilation',
    url: 'https://doi.org/10.1007/s10750-020-04483-9',
    kind: 'conservation',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'Virginia Institute of Marine Science — Moon Jellyfish safety guide',
    url: 'https://www.vims.edu/bayinfo/jellyfish/guide/moon_jelly.php',
    kind: 'general',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
  {
    title: 'US National Park Service — Jellyfish safety',
    url: 'https://www.nps.gov/foma/learn/nature/jellyfish.htm',
    kind: 'general',
    accessedAt: MOON_JELLY_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-aurelia-aurita',
    slug: 'moon-jelly',
    names: {
      zh: '海月水母',
      en: 'Moon Jellyfish',
      aliases: ['Common Jellyfish', 'Saucer Jelly', 'Medusa aurita'],
    },
    scientificName: 'Aurelia aurita',
    taxonomy: animalTaxonomy(
      taxon('Cnidaria', '刺胞动物门'),
      taxon('Scyphozoa', '钵水母纲'),
      taxon('Semaeostomeae', '旗口水母目'),
      taxon('Ulmaridae', '洋须水母科'),
      taxon('Aurelia', '海月水母属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['欧洲', '北美洲', '南美洲', '亚洲'],
      regions: [
        '东北大西洋与北海',
        '波罗的海',
        '黑海与里海',
        '格陵兰与北美东北部',
        '南美南端的分子记录',
        '西北太平洋待复核记录',
      ],
      countries: [
        '英国',
        '法国',
        '荷兰',
        '德国',
        '丹麦',
        '挪威',
        '瑞典',
        '芬兰',
        '俄罗斯',
        '加拿大',
        '阿根廷',
      ],
      range:
        '分子系统学支持狭义海月水母出现于北海、波罗的海、黑海、里海、东北大西洋、格陵兰与北美东北部，并有南美和西北太平洋记录；当前证据更支持其原生于东北大西洋，部分域外种群可能来自引入。过去写作“全球广布”的许多记录，如今多划给广义海月属或近似种，仅凭照片通常难以区别。',
      center: { lat: 56, lng: 4 },
    },
    habitats: [
      {
        name: '沿岸浅层水柱',
        realm: 'marine',
        description: '水母体在近岸上层水体脉动游泳，也会被潮汐、风和环流重新聚集或输送。',
        isPrimary: true,
      },
      {
        name: '半封闭海湾、峡湾与河口',
        realm: 'marine',
        description: '可利用正常海水至较低盐度的沿岸环境，耐受范围与季节节律因种群而异，单个实验阈值不能推广到全部海域。',
      },
      {
        name: '水下硬质附着面',
        realm: 'marine',
        description: '毫米级水螅体可附着在天然硬底、贝壳、码头浮体、沉船和沉降板等表面，再通过出芽与横裂产生新个体。',
      },
    ],
    measurements: {
      length: {
        min: 15,
        max: 30,
        unit: 'cm',
        note: '成体伞径的典型范围；较大个体可接近 40 厘米，个体、地点和季节差异明显，不是口腕全长',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '桡足类与桡足幼体',
        '枝角类等小型甲壳类',
        '软体动物幼体与其他浮游动物',
        '早期鱼苗（机会性、地点依赖）',
      ],
      description:
        '伞体脉动产生的水流把小型猎物带向伞下、伞缘触手和口腕；刺细胞、黏液与纤毛共同完成捕获和输送。食谱随体型、地点和季节显著变化，鱼苗只是偶得的加餐。',
    },
    activity: [
      '水母体有节律地收缩伞体游泳并制造摄食水流',
      '通常八个缘感器充当游泳起搏与感觉中心',
      '水螅体固着生活，可出芽克隆并在适宜条件下横裂',
      '局地聚集受繁殖、温盐、食物、水动力和附着面共同影响',
    ],
    tags: ['北大西洋', '沿岸浮游捕食者', '水螅体—水母体世代', '四辐对称', '隐存种辨识', 'IUCN 未评估'],
    summary: '海月水母在北大西洋沿岸收缩伞体游动，生活史中还有附着在海底的水螅体阶段。过去人们把全球多种外形相似的水母都归入这个名字，如今需要重新分清物种范围。',
    description:
      '海月水母的透明伞下常见四枚马蹄形性腺、四条口腕与细密的伞缘触手。分散的神经网和通常八个缘感器协调脉动，伞体收缩推动身体，也把猎物带到捕获面。成体有性繁殖产生浮浪幼体，幼体附着成水螅体，再横裂释放碟状幼体。2021 年修订提出多种外形重叠的海月属物种，四枚马蹄形性腺只能提供辨识线索，确定物种常需结合地点、标本和 DNA。',
    storySections: [
      {
        key: 'cryptic-identity',
        label: '身份边界',
        title: '熟悉的四枚马蹄环，也可能属于另一种海月',
        body: '海月水母这个名字曾被用于近乎全球的透明圆伞水母。2021 年系统修订以分子性状为主提出海月属 28 个物种假说，后续综述指出部分名称和边界仍有争议，但一致的警告没有改变：多个物种的成体、水螅体和碟状幼体形态高度重叠，可靠鉴定通常需要地点、凭证标本和 DNA。',
      },
      {
        key: 'fourfold-body',
        label: '透明身体',
        title: '透过伞体，看见四辐结构与一张分散的感觉网',
        body: '典型成体伞径约 15 至 30 厘米，透明伞下常见四枚蓝粉色马蹄形性腺和四条褶皱口腕，边缘有数百条细小触手。八个缘感器具有平衡与感光功能，与神经网共同协调脉动；它没有中央大脑。',
      },
      {
        key: 'pulse-and-current',
        label: '游泳与水流',
        title: '每一次脉动，同时服务移动与进食',
        body: '伞缘收缩把水向后推，弹性回弹为下次脉动蓄势。实验流场显示，回弹形成的涡环可被下次收缩利用，提高单个周期的推进效率。同一套水流还将猎物送到伞下与触手边。',
      },
      {
        key: 'variable-diet',
        label: '浮游捕食',
        title: '随地点与季节变化的浮游食谱',
        body: '缘触手、伞下表面和口腕截留小型甲壳类及其他浮游动物，再由黏液与纤毛运向口部。孵育实验记录过捕食早期鱼苗，波罗的海野外研究的主要猎物则是枝角类、软体动物幼体和桡足类，未发现鱼卵或鱼苗。食谱需要按地区与季节分别调查。',
      },
      {
        key: 'two-part-life-cycle',
        label: '生命周期',
        title: '自由漂游之前，先在硬底上度过固着阶段',
        body: '成熟水母有性繁殖后，浮浪幼体附着在表面并变成毫米级水螅体。水螅体可出芽扩增，也会横向分节形成横裂体，再逐枚释放八辐的碟状幼体；幼体继续生长，形成圆伞与性腺。不同海域触发横裂的温度、盐度和微生物信号可能不同。',
      },
      {
        key: 'monitor-before-judging',
        label: '监测与保护',
        title: '调查不同生命阶段的变化',
        body: '狭义海月水母尚无已核实的 IUCN 全球评估与全球趋势。冬季缩短、升温、盐度变化、人工硬底和污染会影响不同生命阶段，实验与种群反应有差别。监测需要结合影像、水样、环境条件、底栖水螅体调查和分子凭证，单次海湾聚集不能说明全球趋势。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '从 Medusa aurita 到海月属',
        body: '林奈在 1758 年以 Medusa aurita 命名海月水母，现行学名为 Aurelia aurita。外形相似的海月水母曾长期共用这个名称，后来的分子研究把其中多种区分开来。WoRMS 记录了一件来自德国黑尔戈兰的新模式标本，用来固定这个老名字所指的物种。',
      },
    ],
    keyFacts: [
      'WoRMS 接受 Aurelia aurita 为有效种；2021 年修订为海月属提出 28 个物种假说，但部分名称和边界仍有争议。',
      '成体典型伞径约 15 至 30 厘米，较大个体可接近 40 厘米；四枚马蹄形性腺醒目，种级鉴定却还需地点、标本与分子数据帮忙。',
      '神经系统是一张分散的网；八个缘感器与它协作，管起游泳起搏、平衡和感光。',
      '实验估算，回收涡流的能量能让每个游泳周期多前进约 30%、运输成本省下约 48%，数字来自水槽，野外的个体各有出入。',
      '水螅体附着生活并可克隆扩增；横裂体释放碟状幼体，碟状幼体才继续发育成自由游泳的成体。',
      '蜇刺通常轻微到难以察觉，敏感体质仍可能皮肤发红；海边遇到认不清水母，欣赏就好。',
    ],
    threats: [],
    conservationActions: [
      '用凭证标本、地点记录和 DNA 条形码复核海月属记录，避免把近似种合并成一条全球趋势',
      '以标准化时间序列同时监测水母体、水螅体、碟状幼体及温度、盐度、溶氧和食物条件',
      '保护近岸水质并减少塑料与化学污染，在证据不足时不把局地聚集直接定义为生态灾害',
      '处理取水口等局地冲突时采用可评估、非扩散性的工程缓解，避免无差别伤害其他浮游生物',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'bell-diameter',
        label: '典型成体伞径',
        value: '15—30',
        unit: '厘米',
        note: '较大个体可接近 40 厘米；地点、季节与个体差异明显',
      },
      {
        key: 'life-forms',
        label: '两种主要生活形态',
        value: '水螅体 + 水母体',
        note: '中间还经历浮浪幼体、横裂体和碟状幼体',
      },
      {
        key: 'rhopalia',
        label: '通常缘感器数量',
        value: '8',
        unit: '个',
        note: '参与游泳起搏、平衡与感光；八个哨所，共用一张神经网络',
      },
      {
        key: 'red-list',
        label: 'IUCN 全球状态',
        value: 'NE',
        note: '尚未评估；无危、稳定、增加这些词都还轮不到它',
      },
    ],
    media: {
      image: './images/species/moon-jelly/01-coastal-water-portrait.webp',
      alt: '按狭义海月水母北大西洋形态创作的 AI 图像：冷蓝海水中一只透明圆伞水母位于画面右侧，四枚粉白马蹄形性腺、四条口腕和细短伞缘触手清楚可见',
      focalPoint: { x: 0.7, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/moon-jelly/02-four-horseshoe-gonads.webp',
          alt: '按狭义海月水母形态创作的 AI 图像：一只透明水母从伞下近乎正面展开，四枚向内开口的马蹄形性腺、四条褶皱口腕和放射状水管清晰可见',
          title: '四枚马蹄环',
          caption: '性腺环和四条口腕提供外形线索，可靠的种级鉴定还需结合地点、凭证标本与分子数据。',
          focalPoint: { x: 0.52, y: 0.49 },
        },
        {
          image: './images/species/moon-jelly/03-sheltered-bay-habitat.webp',
          alt: '泛化的北大西洋冷温带浅湾水下，三只透明海月水母在水面与稀疏海草上方不同深度分散游动',
          title: '沿岸水层的旅居者',
          caption: '狭义本种有北大西洋和部分域外水域的分子记录，旧文献中的许多“海月水母”实际可能属于近似种。',
          focalPoint: { x: 0.63, y: 0.48 },
        },
        {
          image: './images/species/moon-jelly/04-plankton-capture-feeding.webp',
          alt: '按狭义海月水母形态创作的 AI 图像：一只正收缩透明伞体的水母周围散布微小桡足类，部分猎物贴近伞缘和褶皱口腕',
          title: '一边脉动，一边把猎物带近',
          caption: '伞体一收，水流便把小型浮游猎物送向伞下的捕获面。画面是机制示意，真实的食谱随季节与海域变化。',
          focalPoint: { x: 0.64, y: 0.48 },
        },
        {
          image: './images/species/moon-jelly/05-strobila-ephyra-release.webp',
          alt: '海水中硬底下方的毫米级生命周期示意：一个带细触手的水螅体、一个盘片堆叠的横裂体和一只刚释放的八辐碟状幼体',
          title: '水母之前，先附着在硬底上',
          caption: '水螅体先安家出芽，再横裂出一叠盘片，逐枚放飞碟状幼体；圆伞水母的一生，从这毫米级的起点开始。',
          focalPoint: { x: 0.54, y: 0.49 },
        },
        {
          image: './images/species/moon-jelly/06-coastal-bloom-monitoring.webp',
          alt: '泛化北大西洋海湾的水线上下，两名研究者在小艇采集表层水样并记录，水下相机与传感器远离三只分散的海月水母',
          title: '把碎片拼成一条趋势线',
          caption: '长期监测需要结合影像、水样、环境条件与分子凭证，单次观察只能记录当时的局部情况。',
          focalPoint: { x: 0.58, y: 0.52 },
        },
      ],
    },
    sources: [
      ...MOON_JELLY_SOURCES,
      {
        title: '海月水母：描述与命名记录',
        url: 'https://www.marinespecies.org/aphia.php?id=135306&p=taxdetails',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: MOON_JELLY_CONTENT_DATE,
    updatedAt: MOON_JELLY_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
