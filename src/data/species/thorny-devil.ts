import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const THORNY_DEVIL_SOURCE_DATE = '2026-09-04' as const;

const THORNY_DEVIL_CONTENT_DATE = '2026-09-04' as const;

const THORNY_DEVIL_SOURCES = [
  {
    title: 'Atlas of Living Australia / Australian Faunal Directory: Moloch horridus',
    url: 'https://bie.ala.org.au/species/https%3A/biodiversity.org.au/afd/taxa/ae86a559-500b-4cfd-8aa2-f2d8ae9c517e',
    kind: 'taxonomy',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: '生态环境部、中国科学院：中国生物多样性红色名录—脊椎动物卷（2020）',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'taxonomy',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List 2017: Moloch horridus',
    url: 'https://doi.org/10.2305/IUCN.UK.2017-3.RLTS.T83492011A83492039.en',
    kind: 'conservation',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: 'NESP Threatened Species Recovery Hub: Arid Zone Monitoring species profile for the Thorny Devil',
    url: 'https://www.nespthreatenedspecies.edu.au/media/rleffeyx/azm_species-profile_thorny-devil_v1.pdf',
    kind: 'conservation',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: 'CALM 1996: Animals of Shark Bay — Thorny Devil (p. 48)',
    url: 'https://library.dbca.wa.gov.au/FullTextFiles/056437.pdf',
    kind: 'distribution',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: 'Northern Territory Government: Nature Notes — Dragons',
    url: 'https://nt.gov.au/_media/docs/parks/parks-resources-for-schools/nature-notes/reptiles/dragons.pdf',
    kind: 'general',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: 'Parks Australia: Uluṟu-Kata Tjuṯa National Park — Thorny devil',
    url: 'https://uluru.gov.au/discover/nature/animals/reptiles/thorny-devil/',
    kind: 'general',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: 'Bell, Mead & Swift 2009: Cranial osteology of Moloch horridus',
    url: 'https://doi.org/10.18195/issn.0312-3162.25(2).2009.201-237',
    kind: 'general',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: 'Comanns et al. 2016: Cutaneous water collection by a moisture-harvesting lizard, the thorny devil',
    url: 'https://doi.org/10.1242/jeb.148791',
    kind: 'ecology',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: 'Comanns et al. 2017: Adsorption and movement of water by skin of the Australian thorny devil',
    url: 'https://doi.org/10.1098/rsos.170591',
    kind: 'ecology',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: 'Withers 1993: Cutaneous water acquisition by the thorny devil',
    url: 'https://doi.org/10.2307/1565146',
    kind: 'ecology',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: 'Withers & Dickman 1995: Diet, water, energy and salt intake in the thorny devil',
    url: 'https://www.rswa.org.au/wp-content/uploads/2023/10/VOL2078.13-11.pdf',
    kind: 'ecology',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: 'Pianka, Pianka & Thompson 1998: Natural history of thorny devils in the Great Victoria Desert',
    url: 'https://www.biodiversitylibrary.org/part/299230',
    kind: 'ecology',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: 'Pianka, Pianka & Thompson 1996: Egg laying by thorny devils under natural conditions in the Great Victoria Desert',
    url: 'https://www.biodiversitylibrary.org/part/299168',
    kind: 'ecology',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: 'Ian Wallis 2005: Road Kills (Nature Australia)',
    url: 'https://museum-publications.australian.museum/media/dd/documents/AMS389_28_06_2005_LowRes.1326f7e.pdf',
    kind: 'conservation',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
  {
    title: 'Charles Darwin University: Ecology of Ngiyari (Thorny Devils) and roads project',
    url: 'https://researchers.cdu.edu.au/en/projects/the-devil-is-in-the-detail-the-ecology-of-ngiyari-thorny-devils-m/',
    kind: 'conservation',
    accessedAt: THORNY_DEVIL_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-moloch-horridus',
    slug: 'thorny-devil',
    names: {
      zh: '澳洲棘蜥',
      en: 'Thorny Devil',
      aliases: ['Mountain Devil', '澳洲魔蜥', '澳洲刺蜥'],
    },
    scientificName: 'Moloch horridus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Reptilia', '爬行纲'),
      taxon('Squamata', '有鳞目'),
      taxon('Agamidae', '鬣蜥科'),
      taxon('Moloch', '魔蜥属'),
    ),
    conservation: {
      ...conservation('LC', 'stable', 2017),
      assessor:
        'Doughty、Melville、Craig 与 Sanderson（IUCN Red List，2017年评估）',
    },
    distribution: {
      realms: ['terrestrial'],
      continents: ['大洋洲'],
      regions: [
        '西澳大利亚州沿海与内陆沙地',
        '北领地南部干旱区',
        '南澳大利亚州干旱内陆',
        '昆士兰州最西部',
      ],
      countries: ['澳大利亚'],
      endemicTo: ['澳大利亚'],
      range:
        '澳洲棘蜥是澳大利亚特有种，分布横跨大陆西部和中部的干旱、半干旱地带，从西澳大利亚州部分沿海沙地延伸到北领地南部、南澳大利亚州内陆和昆士兰州最西端。资料对西澳沿海与内陆记录是否完全连续的表达并不一致；国家尺度的范围轮廓也不表示每片沙漠都被占据。',
      center: { lat: -27, lng: 130 },
    },
    habitats: [
      {
        name: '沙丘、沙脊与三齿稃草沙漠',
        realm: 'terrestrial',
        description:
          '主要生境；松散沙面、三齿稃草丛和低矮灌木形成可觅食、移动、掘穴和接触雨后湿沙的镶嵌。',
        isPrimary: true,
      },
      {
        name: '桉类灌丛与金合欢疏林',
        realm: 'terrestrial',
        description:
          '干旱至半干旱的mallee、金合欢灌丛和疏林也能提供落叶层、遮蔽物及地表蚂蚁通道。',
        isPrimary: true,
      },
      {
        name: '沙土与砂壤土平原',
        realm: 'terrestrial',
        description:
          '通常与可挖掘的沙质或砂壤质基底相联系；NESP概述硬质石地和山坡通常不适合挖掘避难穴，这不排除所有石质地点记录。',
        isPrimary: true,
      },
    ],
    measurements: {
      length: {
        max: 11,
        unit: 'cm',
        note: '成年吻肛长上限，不含尾；形态研究概述雌性约80至110毫米，雄性通常不足约96毫米。',
      },
    },
    diet: {
      types: ['insectivore'],
      foods: [
        '虹琉璃蚁属（Iridomyrmex）等小型地表蚂蚁',
        '举腹蚁属（Crematogaster）等其他蚂蚁',
      ],
      description:
        '野外观察显示澳洲棘蜥几乎专门取食小型蚂蚁，常在蚁道旁停留，让短而黏的舌逐只拾取经过的工蚁。不同地点和季节可利用的蚁种会改变；约750只蚂蚁一天是1995年论文针对约35克个体所作的能量平衡推算，不是逐只直接计数，也不是每只个体的固定食量。',
    },
    activity: [
      '白天在沙地与低矮植被间缓慢移动；一项春季研究发现体色明暗与沙温及活动水平相关，不能简化为即时精准的背景拟态',
      '在地表蚁道旁停留，以短舌连续拾取经过的小型蚂蚁',
      '1995年春季样本的取食集中在上午11时前和15至18时，中午没有观察到取食；这不是全年固定时刻表',
      '受扰时可低头，把颈后带棘隆起朝向威胁，也会鼓胀身体增加轮廓',
      '雨水或身体接触到的水可在鳞片间毛细沟槽中铺展并抵达口角，再由颌部动作吞咽',
      '春季研究记录到较多移动，雌性会挖出带通道与末端巢室的产卵穴；这不是全年活动规律',
    ],
    tags: [
      '爬行纲',
      '有鳞目',
      '鬣蜥科',
      '澳大利亚特有种',
      '干旱沙地',
      '三齿稃草',
      '毛细集水',
      '鳞间沟槽',
      '专食蚂蚁',
      '颈后假头',
      '掘穴产卵',
      'IUCN无危',
    ],
    summary:
      '澳洲棘蜥生活在澳大利亚干旱沙地，几乎专食小型蚂蚁。全身棘刺由鳞片形成，鳞片间的细沟槽还能把接触到的水导向嘴角，再由它吞下。',
    description:
      '澳洲棘蜥体形宽扁、四肢短，眼上方有成对弯曲棘，颈后带棘隆起常被称为“假头”。它主要活动在西部和中部的沙丘、草地、灌丛与疏林，常停在蚁道旁用短舌逐只取食。水滴接触身体后，会沿鳞片间连通的微沟槽向四周扩散，达到嘴角后才能被喝下；皮肤本身大体防水。成年吻肛长可达约 11 厘米，雌性通常较大。',
    storySections: [
      {
        key: 'sand-country-range',
        label: '分布',
        title: '西部与中部沙地的特有蜥蜴',
        body: '澳洲棘蜥只自然分布于澳大利亚，范围横跨西部与中部干旱区。它常见于沙丘、沙脊、三齿稃草地、mallee和金合欢灌丛等可挖掘基底；NESP明确排除的是通常不适合掘穴的硬质石地和山坡，不能据此排除所有裸沙或石质地点记录。西澳沿海与内陆记录的连续性在资料间仍有差异。',
      },
      {
        key: 'spines-and-false-head',
        label: '形态',
        title: '颈后带棘隆起俗称“假头”',
        body: '头顶、眼上方、背部、四肢和尾部的圆锥形鳞棘让轮廓难以一眼读清；这些棘刺没有独立骨性支撑。受扰时，个体可把头压低，使颈后的带棘隆起更加突出，这个结构因此常被称为“假头”。',
      },
      {
        key: 'water-runs-to-the-mouth',
        label: '集水',
        title: '水沿鳞片之间走，终点是嘴角',
        body: '相邻、部分重叠的鳞片之间形成互相连通的毛细沟槽。小水滴接触皮肤后会从接触点向四周铺展，2017年实验中7微升水滴约10秒可移动超过9.2毫米。沟槽没有只朝头部开放的单向结构；水先在网络中扩散，抵达口角后，动物再以颌部动作吞咽。皮肤大体防水，资料不支持“水穿过皮肤直接进入身体”的说法。',
      },
      {
        key: 'wet-sand-is-not-enough',
        label: '边界',
        title: '接触湿沙获得的水量有限',
        body: '2016年六只个体的实验估算，皮肤沟槽最多可容纳约相当于体重3.19%的水。把活体腹面放在接近饱和的湿沙上，只填充约59%的沟槽容量，个体没有饮水；把湿沙铲到背部可能增加供水的结论主要来自皮肤复制品与重力条件，仍属机制推断。实验凝结水仅约体重0.22%，也不足以触发饮水。',
      },
      {
        key: 'waiting-beside-ant-trails',
        label: '觅食',
        title: '在蚁道旁等候经过的工蚁',
        body: '澳洲棘蜥几乎专食小型蚂蚁。Bungalbin样地的取食与粪便研究确认了地面蚁道上的虹琉璃蚁属和灌木茎上的举腹蚁属；另一项1995年大维多利亚沙漠研究追踪3只雄性和5只雌性，该春季样本在11至15时没有记录到取食。雄性平均日移动距离较长，最大单日记录310米，但八只、一个季节、一个地区的样本不能定义全物种的日常移动。',
      },
      {
        key: 'nest-burrow-and-local-risks',
        label: '繁殖与保护',
        title: '产卵穴与地表风险',
        body: '野外研究详细记录了三只筑巢雌性；其中两窝各有6枚和7枚卵，巢室约在沙面下20至22厘米，孵化历时123至127天。如此小的样本不能改写成固定窝卵数或唯一孵化期。2017年全球评估为无危、趋势稳定且未列重大威胁；道路死亡已经有局地记录，猫和狐被列为可能捕食者，但这些因素对全分布区种群的影响仍未量化。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1841 年命名的魔蜥属成员',
        body: 'Gray 在 1841 年正式命名澳洲棘蜥，现用名称为 Moloch horridus，它是魔蜥属唯一现生种。棘刺和颈后隆起形成了特别的外形，后来的实验又揭示鳞片间微沟槽能够收集水。研究同时发现，凝结水和湿沙接触带来的水量未必足以触发饮水，需要区分集水与真正吞咽。',
      },
    ],
    keyFacts: [
      '澳大利亚动物名录接受Moloch horridus Gray, 1841，分类为鬣蜥科魔蜥属。',
      '澳洲棘蜥是魔蜥属唯一现生种，也是澳大利亚特有种。',
      'IUCN 2017年评估为LC、趋势稳定，没有判据代码或全球成熟个体估算。',
      '分布横跨西澳大利亚州、北领地南部、南澳大利亚州内陆与昆士兰州最西部的干旱区。',
      '西澳沿海与内陆记录是否完全连续，在不同资料中的表达并不一致。',
      '沙丘、沙脊、三齿稃草地、mallee和金合欢灌丛是常见生境。',
      '成年吻肛长可达约11厘米；这个量法不含尾，不能当成全长。',
      '形态资料概述雌性吻肛长约80至110毫米，雄性通常不足约96毫米。',
      '全身棘刺属于特化鳞片，没有独立骨性支撑。',
      '颈后带棘隆起常称“假头”，低头时会变得更加显眼。',
      '鳞片间相连的毛细沟槽把接触到的水铺展至口角，再由颌部动作吞咽。',
      '皮肤本身大体防水，研究没有发现水经皮进入身体。',
      '2016年六只个体的实验估算沟槽总容量相当于体重的3.19%。',
      '接近饱和的湿沙只填充约59%的沟槽容量，实验中的活体没有饮水。',
      '实验凝结水约相当于体重的0.22%，不足以触发饮水。',
      '2017年实验中7微升水滴约10秒可沿皮肤移动超过9.2毫米，并从接触点向四周扩散。',
      '澳洲棘蜥几乎专食小型蚂蚁，常在蚁道附近以短舌逐只拾取。',
      '约750只蚂蚁一天是针对约35克个体的能量平衡推算，不是逐只观察所得的固定食量。',
      '1995年春季遥测研究只有3只雄性和5只雌性，不能代表全年或整个分布区。',
      '该研究最大单日移动记录为310米，不等于典型日行距离或速度。',
      '三只野外筑巢雌性中，两窝各有6枚与7枚卵，巢室约深20至22厘米，孵化123至127天。',
      '局地已有道路死亡记录，猫和狐可能捕食本种，但全域种群效应没有量化。',
    ],
    threats: [],
    conservationActions: [
      '保留沙丘、沙脊、三齿稃草地、mallee与金合欢灌丛组成的连续干旱生境',
      '以重复、可比较的样线或占域调查更新各州与北领地的分布、相对丰度和长期趋势',
      '记录道路发现、季节、路面温度和交通条件，识别碰撞热点后检验限速、标识或通行设施的效果',
      '同步监测蚂蚁群落、植被、火历史和天气，区分短期活动变化与种群下降',
      '调查猫和狐的捕食频率与年龄偏向，不把“可能捕食”直接写成已量化的主要威胁',
      '与Traditional Owners和当地社区共同设计调查、道路报告与干旱地管理，并尊重地点和文化知识边界',
      '避免不必要地捕捉、搬移或摆拍野生个体；用带地点与日期的记录支持监测',
      '更新全球IUCN评估，明确种群估计、趋势置信度以及不同地区风险的证据强度',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'iucn-status',
        label: 'IUCN全球等级',
        value: 'LC',
        unit: '无危',
        note: '2017年评估，趋势稳定；没有全球成熟个体估算。',
      },
      {
        key: 'adult-snout-vent-length',
        label: '成年吻肛长上限',
        value: '11',
        unit: '厘米',
        note: '不含尾；形态资料概述雌性可达约110毫米。',
      },
      {
        key: 'skin-channel-capacity',
        label: '皮肤沟槽容量',
        value: '3.19',
        unit: '%体重',
        note: '2016年六只个体的实验估算；这是充满沟槽的容量，不是每日饮水量。',
      },
      {
        key: 'wet-sand-channel-fill',
        label: '湿沙接触填充',
        value: '59',
        unit: '%沟槽容量',
        note: '接近饱和湿沙实验；活体没有饮水，不能据此声称湿沙必然供足饮水。',
      },
    ],
    media: {
      image:
        './images/species/thorny-devil/01-red-sand-after-rain-cover.webp',
      alt: '红沙荒漠中，恰好一只完整成年外观澳洲棘蜥位于画面右侧，钝头、眼上棘、颈后带棘隆起、四肢、足部和完整尾尖均在画内，左侧保留安静的沙地与稀疏三齿稃草背景',
      focalPoint: { x: 0.872, y: 0.301 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/thorny-devil/02-full-body-diagnostic-profile.webp',
          alt: '红沙地上恰好一只完整成年外观澳洲棘蜥呈三分之四侧面，宽扁躯干、钝头、眼上弯曲棘、颈后隆起、短肢和尾尖全部可见',
          title: '宽扁身体与带棘轮廓',
          caption:
            'AI生成科学情景重建；侧面轮廓用于展示种级识别组合。足趾与细小棘刺互有遮挡，不能据此计数，也不能反测吻肛长、体重、性别、年龄或地点。',
          focalPoint: { x: 0.52, y: 0.57 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/thorny-devil/03-rain-water-collection.webp',
          alt: '雨后湿润红沙上恰好一只完整澳洲棘蜥，背部与体侧棘鳞上散布自然小水滴，四足和尾尖均未裁切，画面没有示意线或水流箭头',
          title: '接触皮肤的雨水',
          caption:
            'AI生成科学情景重建；水滴只表示皮肤接触到水。静帧看不到鳞间微沟槽内部，也不能证明水已抵达口角、已经吞咽或穿过皮肤。',
          focalPoint: { x: 0.51, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/thorny-devil/04-ant-trail-feeding.webp',
          alt: '沙地蚁道旁恰好一只完整澳洲棘蜥低头伸出短舌，舌尖接近一只小蚂蚁，少量蚂蚁沿自然路径分散经过，蜥蜴四足与尾尖均在画内',
          title: '在蚁道边逐只拾取',
          caption:
            'AI生成科学情景重建；画面表现一次可能的拾蚁瞬间，不能鉴定蚂蚁属种，也不能确认捕食成功、当日摄食量、食谱比例或野外地点。',
          focalPoint: { x: 0.5, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/thorny-devil/05-false-head-defense.webp',
          alt: '开阔红沙上恰好一只完整澳洲棘蜥把真头压低，颈后圆钝的带棘隆起在身体上方突出，四肢和完整尾尖可见，周围没有捕食者',
          title: '低头后突出的颈后隆起',
          caption:
            'AI生成科学情景重建；姿态用于展示俗称“假头”的颈后结构。画面不能证明个体正受威胁、隆起被捕食者误认成头或这次姿态产生了防御效果。',
          focalPoint: { x: 0.51, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/thorny-devil/06-nesting-burrow.webp',
          alt: '红沙与稀疏草丛间恰好一只完整而体形较粗壮的澳洲棘蜥在小型沙穴入口旁刨沙，头、四肢、足部和尾尖均完整，画面没有卵',
          title: '可挖掘沙地中的穴口',
          caption:
            'AI生成科学情景重建；粗壮体形和刨沙动作不能确认性别、怀卵或筑巢，也不能从画面量出巢道、巢室深度、窝卵数或孵化期。',
          focalPoint: { x: 0.51, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...THORNY_DEVIL_SOURCES,
      {
        title: 'GBIF: Moloch horridus Gray, 1841 nomenclatural record',
        url: 'https://www.gbif.org/species/2466435',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: THORNY_DEVIL_CONTENT_DATE,
    updatedAt: THORNY_DEVIL_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
