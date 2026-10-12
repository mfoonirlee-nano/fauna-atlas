import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const STAR_NOSED_MOLE_SOURCE_DATE = '2026-08-30' as const;

const STAR_NOSED_MOLE_CONTENT_DATE = '2026-08-30' as const;

const STAR_NOSED_MOLE_SOURCES = [
  {
    title: 'ASM Mammal Diversity Database: Condylura cristata',
    url: 'https://www.mammaldiversity.org/taxon/1004300/',
    kind: 'taxonomy',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'USFWS Taxonomic Tree: Star-nosed Mole',
    url: 'https://www.fws.gov/taxonomic-tree/31607',
    kind: 'taxonomy',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'Smithsonian Q?rius specimen 68009-DSP: Star-nosed Mole',
    url: 'https://qrius.si.edu/browse/object/10841938',
    kind: 'taxonomy',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Condylura cristata (2016 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en',
    kind: 'conservation',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List Assessment Process: ten-year update cycle',
    url: 'https://nrl.iucnredlist.org/assessment/process',
    kind: 'conservation',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'Handbook of the Mammals of the World treatment: Condylura cristata',
    url: 'https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7',
    kind: 'general',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'Grand, Gould and Montali 1998: Structure of the Proboscis and Rays of the Star-nosed Mole',
    url: 'https://doi.org/10.2307/1382980',
    kind: 'general',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'Catania 1995: Structure and Innervation of the Sensory Organs on the Snout',
    url: 'https://doi.org/10.1002/cne.903510405',
    kind: 'general',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'Catania and Kaas 1997: Somatosensory Fovea in the Star-nosed Mole',
    url: 'https://pubmed.ncbi.nlm.nih.gov/9336224/',
    kind: 'ecology',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'Sawyer and Catania 2016: Somatosensory Organ Topography Across the Star',
    url: 'https://doi.org/10.1002/cne.23943',
    kind: 'general',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'Gerhold et al. 2013: The Molecular Basis of Mammalian Touch and Star Organ Innervation',
    url: 'https://doi.org/10.1371/journal.pone.0055001',
    kind: 'general',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'Catania and Remple 2005: Asymptotic Prey Profitability and Foraging Speed',
    url: 'https://doi.org/10.1038/nature03250',
    kind: 'ecology',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'Catania 2006: Underwater Sniffing by Semi-aquatic Mammals',
    url: 'https://doi.org/10.1038/4441024a',
    kind: 'ecology',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'McIntyre, Campbell and MacArthur 2002: Diving Behaviour of the Star-nosed Mole',
    url: 'https://doi.org/10.1242/jeb.205.1.45',
    kind: 'ecology',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'Eadie and Hamilton 1956: Notes on Reproduction in the Star-nosed Mole',
    url: 'https://doi.org/10.2307/1376681',
    kind: 'ecology',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
  {
    title: 'Georgia Biodiversity Portal: Condylura cristata',
    url: 'https://georgiabiodiversity.org/portal/profile?es_id=17250&group=all',
    kind: 'conservation',
    accessedAt: STAR_NOSED_MOLE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-condylura-cristata',
    slug: 'star-nosed-mole',
    names: {
      zh: '星鼻鼹',
      en: 'Star-nosed Mole',
      aliases: [],
    },
    scientificName: 'Condylura cristata',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Eulipotyphla', '真盲缺目'),
      taxon('Talpidae', '鼹科'),
      taxon('Condylura', '星鼻鼹属'),
    ),
    conservation: conservation('LC', 'stable', 2016),
    distribution: {
      realms: ['terrestrial', 'freshwater'],
      continents: ['北美洲'],
      regions: [
        '加拿大东南部与大湖地区',
        '美国东北部',
        '阿巴拉契亚山地',
        '美国大西洋沿岸南缘',
      ],
      countries: ['加拿大', '美国'],
      range:
        '分布于北美洲东部湿润地区，从加拿大东南部、拉布拉多与大湖区向南经过美国东北部，并沿阿巴拉契亚山地和大西洋沿岸延伸至乔治亚及南卡罗来纳西北部。MDD 的两个范围国只划出地理外框，实际占域集中在湿土、沼泽、泥炭地和溪湖岸带。',
      center: { lat: 44, lng: -78 },
    },
    habitats: [
      {
        name: '沼泽、泥炭地与湿草甸',
        realm: 'freshwater',
        description:
          '排水不良、泥炭或腐殖质丰富的潮湿土壤支持浅层隧道和无脊椎猎物；这些湿地不一定是永久深水。',
        isPrimary: true,
      },
      {
        name: '溪流、湖泊与池塘岸带',
        realm: 'freshwater',
        description:
          '洞道可直接开口到浅水下，个体在水底觅食和潜游，再返回岸上或水位以上的巢室。',
        isPrimary: true,
      },
      {
        name: '潮湿针叶林、落叶林与林间空地',
        realm: 'terrestrial',
        description:
          '地表植被类型可变，持续湿土、可挖基质和邻近淡水构成更稳定的共同条件。',
      },
      {
        name: '水位以上的岸洞巢室',
        realm: 'terrestrial',
        description:
          '巢室通常位于水位以上，靠近树桩或倒木，并使用草和枯叶等材料；具体洞深和布局随地点改变。',
      },
    ],
    measurements: {
      length: {
        min: 9.6,
        max: 12.8,
        unit: 'cm',
        note: 'HMW 2018 成体头体长，不含 6.5—8.35 厘米的尾',
      },
      weight: {
        min: 27,
        max: 52,
        unit: 'g',
        note: 'HMW 2018 物种处理采用的成体范围',
      },
    },
    diet: {
      types: ['carnivore', 'insectivore'],
      foods: [
        '蚯蚓、蛭类及其他环节动物',
        '石蛾、石蝇、摇蚊、蜻蜓与甲虫等水生昆虫幼体',
        '陆生昆虫',
        '水生甲壳类与软体动物',
        '偶见小鱼',
      ],
      description:
        '在土壤、落叶层和浅水底寻找小型动物性猎物。水生与陆生食物比例随水体和样地改变，柔软环节动物与昆虫幼体构成主要记录；局部样地的百分比不能代表全分布区。',
    },
    activity: [
      '昼夜皆可活动',
      '全年活动',
      '土中掘洞',
      '潜水与水下觅食',
      '活动段与休息段交替',
    ],
    tags: [
      '北美洲',
      '真盲缺目',
      '鼹科',
      '半水栖',
      '湿地',
      '22 条鼻触条',
      '艾默氏器官',
      '触觉中央凹',
      '水下嗅闻',
      'IUCN 无危',
      '评估需更新',
    ],
    summary:
      '星鼻鼹生活在北美东部湿地，用 22 条星形鼻触条探查泥土和浅水底。它还能呼出并吸回气泡，追踪水下气味。',
    description:
      '星鼻鼹是星鼻鼹属唯一现生种，生活在加拿大东南部和美国东部的沼泽、泥炭地、湿草甸与溪湖岸带。典型星鼻由 22 条肉质触条组成，表面覆盖超过 2.5 万个艾默氏触觉器官；外围触条搜索，第 11 对触条承担触觉复核。它在土中掘洞，也会潜水捕食环节动物和水生昆虫，还能把鼻孔呼出的气泡吸回以追踪水下气味。IUCN 最近一次全球评估仍为无危、趋势稳定，但该评估完成于 2016 年，现已超过十年更新期限。',
    storySections: [
      {
        key: 'sole-living-condylura',
        label: '分类与分布',
        title: '星鼻鼹属唯一现生物种',
        body: '星鼻鼹是星鼻鼹属和 Condylurini 族唯一现生成员，分布于加拿大东南部和美国东部。它沿潮湿森林、沼泽、泥炭地与溪湖岸带生活；实际栖地集中在湿土和淡水岸带。',
      },
      {
        key: 'star-of-touch',
        label: '感官形态',
        title: '两万五千个触点铺在一厘米鼻端',
        body: '典型星鼻把 22 条肉质触条排在两个鼻孔周围，每侧 11 条，整体直径约一厘米。触条表面覆盖超过 2.5 万个艾默氏器官，并由超过 10 万条有髓神经纤维连接；这些结构读取接触、压力和纹理，星鼻本身不负责电感受。',
      },
      {
        key: 'tactile-fovea-speed',
        label: '触觉觅食',
        title: '第十一对触条接过最后一次确认',
        body: '外围触条每秒扫过约 10 至 13 个位置，碰到可疑目标后，星鼻转动，让腹内侧第 11 对触条再次接触。3 只圈养个体处理小蚯蚓段的加权平均时间为 227 毫秒，最短 120 毫秒；这是实验猎物处理速度，不能代表每次野外捕食。',
      },
      {
        key: 'underwater-sniffing',
        label: '水下感官',
        title: '呼出一枚气泡，再把气味带回来',
        body: '星鼻鼹在水下从两个鼻孔呼出气泡，让气泡接触物体或气味轨迹，再把它吸回鼻腔。隔网实验阻止星鼻直接碰触路线时，个体仍能追踪蚯蚓和鱼的气味；屏障挡住气泡后表现降至机会水平。22 条触条提供触觉，气味通过鼻孔和回吸空气进入嗅觉系统。',
      },
      {
        key: 'winter-tail-and-young',
        label: '季节与繁殖',
        title: '冬尾、岸洞和一窝幼仔',
        body: '冬季尾部会储存脂肪，直径可增至平时的 3 至 4 倍；星鼻鼹仍在雪下和冰下活动。综合资料记录春季交配、约 45 天妊娠和每窝 2 至 7 仔，通常一年一窝；主要繁殖材料来自旧的纽约州样本，南北范围的具体日期仍需现代研究。',
      },
      {
        key: 'outdated-least-concern',
        label: '保护',
        title: '全球评估较旧，南缘仍需调查',
        body: 'IUCN 最近记录仍把星鼻鼹列为无危，全球趋势稳定，且没有识别重大威胁；评估完成于 2016 年 8 月，现已超过十年更新期限。乔治亚州 2025 年计划把本种列为资料不足的保护优先物种，并要求开展占域调查，全球 LC 不能替代分布南缘的监测。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年曾用 Sorex cristatus',
        body: '1758 年，林奈以 Sorex cristatus 描述星鼻鼹，模式产地记录为美国宾夕法尼亚。后来它被归入星鼻鼹属 Condylura。中文名对应鼻端典型的 22 条星形触条；这些触条感知接触、压力和纹理，水下嗅闻则靠鼻孔呼出并吸回气泡。',
      },
    ],
    keyFacts: [
      'MDD 当前只列加拿大和美国两个范围国；国家着色不等于两国全境连续占域。',
      '星鼻鼹是星鼻鼹属及 Condylurini 族唯一现生成员。',
      '典型鼻星有 22 条肉质触条，每个鼻孔周围 11 条；约 5% 个体的数量会偏离典型值。',
      '单条鼻触条约长 1 至 4 毫米，星鼻整体直径约 1 厘米。',
      '星鼻覆盖超过 2.5 万个艾默氏触觉器官；这个数量是解剖研究的估计，不是从照片逐个清点所得。',
      '约 1 厘米宽的星鼻由超过 10 万条有髓神经纤维支配。',
      '艾默氏器官从触条基部到尖端变密，研究报告的相对密度约为 1:2.3:3.1。',
      '第 11 对腹内侧触条构成触觉中央凹；外围触条发现目标后，它承担复核。',
      '高速录像记录搜索时每秒约 10 至 13 次星鼻接触，这个实验数字不是固定野外频率。',
      '3 只圈养个体处理小蚯蚓段的最短时间为 120 毫秒，加权平均为 227 毫秒。',
      '艾默氏器官属于机械感受系统；后续神经和分子研究不支持把星鼻写成电感受器。',
      '水下嗅闻依靠两个鼻孔呼出并吸回接触过目标的气泡，22 条触条负责触觉。',
      '水下气味实验只测试 5 只蚯蚓路线个体和 2 只鱼路线个体，不能给全种设定固定准确率。',
      '美洲水鼩也使用气泡取得水下气味，星鼻鼹不是唯一具有这一机制的哺乳动物。',
      '18 只圈养个体在水槽完成 722 次自愿潜水，平均 9.2 秒；这不是野外潜水常数。',
      '同一水槽研究的最长正常探索潜水为 47 秒，不能把它当作生理极限或自然纪录。',
      '星鼻鼹全年活动，会在雪中掘进，也会在结冰池塘下寻找猎物。',
      '冬季尾部直径可膨大到平时的 3 至 4 倍并储存脂肪，两性都会出现。',
      '综合资料记录妊娠约 45 天、通常一年一窝、每窝 2 至 7 仔；主要早期材料来自纽约州。',
      'HMW 的 9.6 至 12.8 厘米是头体长，尾长另为 6.5 至 8.35 厘米，两组端点不能拼成总长。',
      '已汇总生境从海平面延伸至约 1,676 米，潮湿土壤和湿地岸带仍是核心条件。',
      'IUCN 最近记录为 LC、趋势稳定、评估年份 2016；到 2026 年 8 月已超过十年更新期限。',
      '乔治亚州 2025 年只登记 7 个 element occurrences 并列为州级资料不足，这不改写全球 LC。',
    ],
    threats: [
      'IUCN 2016 年评估没有识别覆盖全分布区的重大威胁，但旧评估无法回答 2016 年后的全球变化。',
      '湿地排水、水文改变和岸带硬化会减少湿土与浅水觅食环境；现有来源没有量化其造成的全范围下降。',
      '乔治亚州等南部分布边缘记录稀少，州级资料不足增加了局部下降未被发现的风险。',
    ],
    conservationActions: [
      '推动 IUCN 全球重评，补充 2016 年后的分布、趋势、湿地变化和南缘记录。',
      '在南部分布边缘开展小型哺乳动物调查与占域建模，并覆盖美国国家森林系统土地。',
      '保留沼泽、泥炭地、湿草甸和自然岸带的水文连接与可挖湿土。',
      '按乔治亚州计划开展土地所有者教育和公民科学记录；州级措施的成效需要单独评估。',
    ],
    metrics: {
      adultLengthCm: [9.6, 12.8],
      adultMassKg: [0.027, 0.052],
      elevationM: [0, 1676],
    },
    featuredStats: [
      {
        key: 'global-iucn-status',
        label: 'IUCN 全球等级',
        value: 'LC',
        unit: '无危',
        note: '2016 年评估，趋势稳定；现已超过十年更新期限',
      },
      {
        key: 'nasal-rays',
        label: '典型鼻触条',
        value: '22',
        unit: '条',
        note: '每个鼻孔周围 11 条；少数个体存在自然数量变异',
      },
      {
        key: 'eimers-organs',
        label: '艾默氏器官',
        value: '25,000+',
        unit: '个',
        note: '解剖研究估计值；普通照片无法逐个清点',
      },
      {
        key: 'fastest-prey-handling',
        label: '最短猎物处理',
        value: '120',
        unit: '毫秒',
        note: '3 只圈养个体的小蚯蚓段实验；加权平均 227 毫秒',
      },
    ],
    media: {
      image:
        './images/species/star-nosed-mole/01-wetland-edge-emergence.webp',
      alt: '北美湿地岸边，一只深色星鼻鼹从浅水爬上泥岸，宽前足撑地，长尾拖在水中，粉红鼻星朝向镜头',
      focalPoint: { x: 0.58, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/star-nosed-mole/02-full-body-diagnostic-profile.webp',
          alt: '潮湿落叶地上，一只深色星鼻鼹以侧前方全身姿态站立，细长尾向右伸展，宽大前足和粉红鼻星清晰可见',
          title: '湿地鼹类的完整轮廓',
          caption:
            'AI生成科学情景重建；画面支持识别深色毛皮、无外露耳廓、宽前足、长尾和鼻星。像素不能确定个体性别、年龄、体长或尾长比例。',
          focalPoint: { x: 0.51, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/star-nosed-mole/03-nasal-star-sensory-closeup.webp',
          alt: '星鼻鼹头部正面微距，两个鼻孔周围的粉红肉质鼻触条左右各十一条，末端完整分离',
          title: '二十二条触条围住两个鼻孔',
          caption:
            'AI生成科学微距重建；画面可逐侧数到 11 条触条。普通图像不能显示或清点数万枚微小艾默氏器官，也不能提供真实尺寸。',
          focalPoint: { x: 0.5, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/star-nosed-mole/04-underwater-bubble-sniffing.webp',
          alt: '浅溪水底，一只星鼻鼹让鼻端靠近石块，少量气泡连接鼻孔附近与石面，宽前足撑在砾石上',
          title: '气泡把水下气味带回鼻孔',
          caption:
            'AI生成科学情景重建；气泡连接鼻端和基质，表达水下嗅闻机制。静帧不能判定呼出或回吸方向，也不能证明连续气泡频率、猎物位置或实验准确率。',
          focalPoint: { x: 0.61, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/star-nosed-mole/05-rapid-tactile-prey-detection.webp',
          alt: '潮湿落叶和泥土上，一只星鼻鼹低头让中央鼻触条接近一段蚯蚓状猎物，两只宽前足分列身体两侧',
          title: '中央触条接近一段小猎物',
          caption:
            'AI生成科学情景重建；画面只有一段蚯蚓状猎物，可表达触觉接触阶段。它不能确认猎物种类、完整个体、捕食结果、第 11 对触条功能或 120 毫秒处理时间。',
          focalPoint: { x: 0.55, y: 0.59 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/star-nosed-mole/06-wetland-bank-burrow-cutaway.webp',
          alt: '湿地岸坡剖面中，一只星鼻鼹蜷卧在倒木下方、水线以上的干燥巢室，通道向左下连接近水面的水下入口',
          title: '岸洞巢室留在水线上方',
          caption:
            'AI生成科学剖面重建；巢室通过上升通道连接浅没水面的入口。剖面不能代表固定洞深、坡度、入口数量或所有个体的洞道布局。',
          focalPoint: { x: 0.69, y: 0.41 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: STAR_NOSED_MOLE_SOURCES,
    featured: true,
    publishedAt: STAR_NOSED_MOLE_CONTENT_DATE,
    updatedAt: STAR_NOSED_MOLE_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
