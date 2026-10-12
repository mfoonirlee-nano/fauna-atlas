import type { Species } from '../../types/species.ts';

import { CONTENT_DATE, animalTaxonomy, conservation, taxon } from './shared.js';

const SNOW_LEOPARD_SOURCE_DATE = '2026-08-14' as const;

const SNOW_LEOPARD_CONTENT_DATE = '2026-08-14' as const;

const profile = {
    id: 'species-panthera-uncia',
    slug: 'snow-leopard',
    names: { zh: '雪豹', en: 'Snow Leopard', aliases: [] },
    scientificName: 'Panthera uncia',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Carnivora', '食肉目'),
      taxon('Felidae', '猫科'),
      taxon('Panthera', '豹属'),
    ),
    conservation: conservation('VU', 'decreasing', 2016, 'C1'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: ['青藏高原', '喜马拉雅山脉', '喀喇昆仑山脉', '兴都库什山脉', '帕米尔高原', '天山山脉', '昆仑山脉', '阿尔泰山脉'],
      countries: ['阿富汗', '不丹', '中国', '印度', '哈萨克斯坦', '吉尔吉斯斯坦', '蒙古', '尼泊尔', '巴基斯坦', '俄罗斯', '塔吉克斯坦', '乌兹别克斯坦'],
      range: '自然分布跨越中亚与南亚十二国的山地系统，从喜马拉雅、青藏高原延伸至帕米尔、天山和阿尔泰；典型海拔约 3,000 至 5,000 米，但完整记录约为 500 至 5,800 米。',
      center: { lat: 35, lng: 82 },
    },
    habitats: [
      {
        name: '高山与亚高山岩地',
        realm: 'terrestrial',
        description: '主要利用陡坡、崖壁、山脊、沟谷、碎石坡和岩石露头；破碎地形同时提供移动路线、伏击掩体和标记地点。',
        isPrimary: true,
      },
      {
        name: '高寒草甸、灌丛与山地草原',
        realm: 'terrestrial',
        description: '常见于干旱或半干旱草地、灌丛和草原与岩地交错的景观；北部部分地区也使用疏林，但通常避开稠密森林。',
      },
    ],
    measurements: {
      length: { min: 90, max: 120, unit: 'cm', note: '头体长；另有 80—100 厘米的粗长尾巴' },
      weight: { min: 30, max: 50, unit: 'kg', note: 'IUCN/SSC 猫科专家组概览范围；雄性通常较大' },
    },
    diet: {
      types: ['carnivore'],
      foods: ['岩羊', '西伯利亚北山羊', '盘羊', '喜马拉雅塔尔羊', '旱獭与鼠兔', '鸟类与家畜'],
      description: '主要伏击山地野生羊、山羊类，也利用旱獭、鼠兔、野兔和鸟类；在牧区会捕食家畜，但猎物组成随地区和季节显著变化。',
    },
    activity: ['晨昏活动为主', '独居', '领域性', '沿山脊、沟谷和断崖移动并标记'],
    tags: ['高山生态系统', '顶级捕食者', '旗舰物种', '国家一级保护野生动物', 'CITES 附录 I', 'CMS 附录 I'],
    summary: '雪豹在亚洲十二国的高山岩脊间活动，主要捕食野生有蹄类动物，也是高山生态保护的旗舰物种。',
    description: '雪豹利用亚洲高山的岩壁、碎石坡、草原与灌丛，分布从阿尔泰较低的山地延伸到喜马拉雅高寒带。浓密冬毛、宽大足掌和粗长尾巴帮助它应对寒冷、深雪与陡坡。保护雪豹需要维护野生猎物和跨境通道，也需要与当地牧民共同减少牲畜损失。',
    storySections: [
      {
        key: 'adaptation',
        label: '形态与适应',
        title: '在岩坡和雪地上保持平衡',
        body: '浅灰被毛和玫瑰斑融入岩坡，冬季腹毛可长至约 12 厘米。扩大的鼻腔、发达胸肌、长腿和宽大前掌帮助它穿越高海拔深雪；几乎与头体等长的粗尾则在峭壁上辅助平衡，休息时也可围住身体保温。',
      },
      {
        key: 'communication',
        label: '行为与交流',
        title: '独居者留下的气味路标',
        body: '雪豹大多独自活动，会在山脊、沟谷和崖壁通道嗅闻、喷尿、刨刮与擦蹭。这些标记能让其他雪豹获得身份、领域和繁殖信息。它也会发出悠长的呼叫。',
      },
      {
        key: 'hunting',
        label: '食性与捕猎',
        title: '从岩脊上方接近山地有蹄类',
        body: '雪豹借岩石遮蔽从上方潜近，再沿陡坡追击。岩羊和西伯利亚北山羊是跨区域最重要的猎物，盘羊、塔尔羊、旱獭、鼠兔和鸟类也进入食谱；在牧区，减少走失牲畜和恢复野生猎物能同时降低冲突。',
      },
      {
        key: 'reproduction',
        label: '繁殖与成长',
        title: '独立过程可延续到第二个冬季',
        body: '交配主要集中在 1 至 3 月，妊娠约 98 至 104 天，多在 5 至 6 月产下 1 至 5 只幼崽。蒙古的母幼 GPS 研究显示，幼崽约到 20 至 22 月龄、第二个冬季才开始长时间离开母兽。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '旧书里的 Felis uncia',
        body: '现行哺乳动物多样性数据库把雪豹的原始命名追溯到博达尔特 1772 年使用的 Felis uncia。雪豹此后也曾单独列入 Uncia 属；形态与分子研究支持将它归入豹属，今天使用 Panthera uncia。旧文献中的不同属名，记录了研究者对这只高山猫分类归属的调整。',
      },
    ],
    keyFacts: [
      '典型活动海拔约 3,000 至 5,000 米，但全分布记录约跨 500 至 5,800 米。',
      '80 至 100 厘米的粗尾几乎与头体等长，在陡坡上辅助平衡，也可围住身体保温。',
      '雪豹以喷尿、刨刮、擦蹭和粪便等标记进行间接交流。',
      '雪豹的喉部缺少狮虎那种大型纤维弹性组织垫，所以叫不出深吼，却有属于自己的悠长叫声。',
      '跨区域分析显示，它显著偏好西伯利亚北山羊和岩羊等中大型野生有蹄类。',
      '幼崽约到 20 至 22 月龄才开始长时间离开母兽，独立过程会延续到第二个冬季。',
    ],
    threats: [
      '野生有蹄类过度捕猎、盗猎及与家畜竞争造成猎物减少',
      '过度放牧和牧业扩张导致草场与猎物生境退化',
      '捕食家畜引发的报复性或预防性捕杀',
      '针对毛皮、骨骼和其他身体部位的盗猎与非法贸易',
      '矿业、道路、水坝和聚落造成栖息地破碎及廊道阻断',
      '气候变化改变高山带并与人类开发叠加',
    ],
    conservationActions: [
      '保护并恢复野生有蹄类种群、关键生境与跨境廊道',
      '以牢固圈舍、合理放牧、保险补偿和社区生计降低人兽冲突',
      '加强反盗猎、非法贸易执法及相机与遗传长期监测',
    ],
    metrics: {
      adultLengthCm: [90, 120],
      adultMassKg: [30, 50],
      lifespanYears: [10, 20],
      elevationM: [500, 5800],
      estimatedMatureIndividuals: [2710, 3386],
    },
    featuredStats: [
      { key: 'mature-population', label: '成熟个体估计', value: '2,710—3,386', unit: '只', note: '2016 年 IUCN 全球评估给出的估计区间' },
      { key: 'elevation', label: '典型活动海拔', value: '3,000—5,000', unit: '米', note: '完整记录约 500 至 5,800 米' },
      { key: 'tail', label: '尾长', value: '80—100', unit: '厘米' },
      { key: 'range-countries', label: '分布国家', value: '12', unit: '个' },
    ],
    media: {
      image: './images/species/snow-leopard/01-alpine-ridge-portrait.webp',
      alt: '冷雾笼罩的喜马拉雅山脊上，一只成年雪豹站在岩石边缘',
      focalPoint: { x: 0.66, y: 0.5 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/snow-leopard/02-rocky-ridge-traverse.webp',
          alt: '一只成年雪豹在陡峭高山岩壁上行走，粗长尾巴伸向身后保持平衡',
          title: '岩壁上的平衡',
          caption: '宽大的足掌帮助穿越积雪，粗长尾巴在陡坡移动时辅助平衡。',
          focalPoint: { x: 0.52, y: 0.56 },
        },
        {
          image: './images/species/snow-leopard/03-high-mountain-habitat.webp',
          alt: '辽阔的中亚高山岩壁、碎石坡与远山之间，一只雪豹从坡面穿过',
          title: '山地尺度',
          caption: '雪豹依赖连通的岩壁、碎石坡与高寒草原；连续生境让个体迁移、繁殖并追随猎物。',
          focalPoint: { x: 0.38, y: 0.58 },
        },
        {
          image: './images/species/snow-leopard/04-prey-stalking.webp',
          alt: '碎石山坡上，一只雪豹从岩石间走向远处的一只西伯利亚北山羊',
          title: '借岩石接近',
          caption: '岩羊、北山羊等野生有蹄类是重要猎物；雪豹常利用起伏地形缩短伏击距离。',
          focalPoint: { x: 0.47, y: 0.54 },
        },
        {
          image: './images/species/snow-leopard/05-winter-rest.webp',
          alt: '薄雪覆盖的高山岩棚下，一只成年雪豹蜷卧并用长尾围住身体',
          title: '长尾御寒',
          caption: '休息时，粗长尾巴可以包住身体和口鼻，帮助减少热量散失。',
          focalPoint: { x: 0.48, y: 0.5 },
        },
        {
          image: './images/species/snow-leopard/06-mother-and-cub.webp',
          alt: '高山天然岩棚前，一只成年母雪豹带着一只半大幼崽沿岩台行走',
          title: '随母成长',
          caption: '幼崽会随母生活到第二个冬季，约 20 至 22 月龄才开始长时间离开。',
          focalPoint: { x: 0.48, y: 0.58 },
        },
      ],
    },
    sources: [
      {
        title: 'IUCN Red List — Panthera uncia (2016 assessment, published 2017)',
        url: 'https://doi.org/10.2305/IUCN.UK.2017-2.RLTS.T22732A50664030.en',
        kind: 'conservation',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
      {
        title: 'IUCN/SSC Cat Specialist Group — Snow Leopard',
        url: 'https://www.catsg.org/living-species-snowleopard',
        kind: 'general',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
      {
        title: 'ASM Mammal Diversity Database — Panthera uncia',
        url: 'https://www.mammaldiversity.org/taxon/1006024/',
        kind: 'taxonomy',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
      {
        title: 'CITES — Appendices I, II and III',
        url: 'https://cites.org/eng/app/appendices.php',
        kind: 'conservation',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
      {
        title: 'CMS — Snow Leopard (Uncia uncia)',
        url: 'https://www.cms.int/species/uncia-uncia',
        kind: 'conservation',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
      {
        title: '国家林业和草原局、农业农村部 — 国家重点保护野生动物名录（2021年第3号）',
        url: 'https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml',
        kind: 'conservation',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
      {
        title: 'Lyngdoh et al. 2014 — Prey preferences of the snow leopard',
        url: 'https://doi.org/10.1371/journal.pone.0088349',
        kind: 'ecology',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
      {
        title: 'Johansson et al. 2015 — Snow leopard predation in Mongolia',
        url: 'https://doi.org/10.1016/j.biocon.2015.02.003',
        kind: 'ecology',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
      {
        title: 'Johansson et al. 2016 — Land sharing is essential for snow leopard conservation',
        url: 'https://doi.org/10.1016/j.biocon.2016.08.034',
        kind: 'ecology',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
      {
        title: 'Johansson et al. 2021 — Timing of breeding and independence',
        url: 'https://doi.org/10.1007/s42991-020-00073-3',
        kind: 'ecology',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
      {
        title: 'Krofel et al. 2025 — Snow leopard communication behaviour',
        url: 'https://doi.org/10.1007/s00265-025-03574-8',
        kind: 'ecology',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
      {
        title: 'Hast 1989 — The larynx of roaring and non-roaring cats',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1256521/',
        kind: 'general',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
      {
        title: 'GSLEP — Snow Leopard Threats',
        url: 'https://globalsnowleopard.org/the-snow-leopard/threats/',
        kind: 'conservation',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
      {
        title: 'GSLEP — 2013 Bishkek Declaration',
        url: 'https://globalsnowleopard.org/wp-content/uploads/2019/05/Bishkek-Declaration-Adopted-23Oct2013-eng.pdf',
        kind: 'conservation',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
      {
        title: 'GSLEP — Population Assessment of the World\'s Snow Leopards',
        url: 'https://globalsnowleopard.org/gslep-projects/paws/',
        kind: 'conservation',
        accessedAt: SNOW_LEOPARD_SOURCE_DATE,
      },
    ],
    featured: true,
    publishedAt: CONTENT_DATE,
    updatedAt: SNOW_LEOPARD_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
