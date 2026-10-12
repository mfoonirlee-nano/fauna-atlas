import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const RETICULATED_PYTHON_SOURCE_DATE = '2026-08-21' as const;

const RETICULATED_PYTHON_CONTENT_DATE = '2026-08-21' as const;

const RETICULATED_PYTHON_SOURCES = [
  {
    title: 'IUCN Red List — Python reticulatus (assessed 2011; published 2018-2)',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T183151A1730027.en',
    kind: 'conservation',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'The Reptile Database — Malayopython reticulatus',
    url: 'https://reptile-database.reptarium.cz/Malayopython/reticulatus',
    kind: 'taxonomy',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'NCBI Taxonomy — Malayopython reticulatus',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=1496311&mode=Info',
    kind: 'taxonomy',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Reynolds et al. 2014 — Toward a Tree-of-Life for the boas and pythons',
    url: 'https://doi.org/10.1016/j.ympev.2013.11.011',
    kind: 'taxonomy',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Auliya et al. 2002 — Review of the reticulated python and description of new subspecies',
    url: 'https://doi.org/10.1007/s00114-002-0320-4',
    kind: 'taxonomy',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'CITES Trade Database version 2026.1 — Malayopython reticulatus',
    url: 'https://trade.cites.org/en/cites_trade/',
    kind: 'conservation',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Malaysia/PERHILITAN 2021 — Management of the Reticulated Python in Peninsular Malaysia',
    url: 'https://cites.org/sites/default/files/eng/com/ac/31/Docs/E-AC31-14-03-A.pdf',
    kind: 'conservation',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC 2016 — Sustainable management of trade in reticulated python skins in Indonesia and Malaysia',
    url: 'https://doi.org/10.2305/IUCN.CH.2016.SSC-OP.61.en',
    kind: 'conservation',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Murray-Dickson et al. 2017 — Phylogeography and conservation implications',
    url: 'https://doi.org/10.1371/journal.pone.0182049',
    kind: 'distribution',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Shine et al. 1998 — Sex, body size and food habits in free-ranging reticulated pythons',
    url: 'https://doi.org/10.1046/j.1365-2435.1998.00179.x',
    kind: 'ecology',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Shine et al. 1999 — Reticulated pythons in Sumatra: biology, harvesting and sustainability',
    url: 'https://doi.org/10.1016/S0006-3207(98)00068-8',
    kind: 'ecology',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Natusch et al. 2016 — Jungle Giants: assessing sustainable harvesting',
    url: 'https://doi.org/10.1371/journal.pone.0158397',
    kind: 'conservation',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Burger et al. 2026 — Efficacy of field-based surveys for giant snakes in Malaysia',
    url: 'https://doi.org/10.1038/s41598-026-57269-9',
    kind: 'conservation',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Penning, Dartez & Moon 2015 — Scaling of constriction pressure',
    url: 'https://doi.org/10.1242/jeb.127449',
    kind: 'ecology',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'de Cock Buning et al. 1978 — Feeding behaviour and thermoreceptors',
    url: 'https://doi.org/10.1163/002829678X00198',
    kind: 'ecology',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'de Cock Buning et al. 1981 — Python pit organs analyzed as warm receptors',
    url: 'https://doi.org/10.1007/BF00710682',
    kind: 'ecology',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Singapore NParks — Reticulated Python',
    url: 'https://biodiversitysg.nparks.gov.sg/our-biodiversity/reptiles/snakes/reticulated-python/',
    kind: 'general',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Philippines DENR WildALERT — Reticulated Python',
    url: 'https://www.wildalert.ph/s/302',
    kind: 'general',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'CITES/TRAFFIC — Identification guide to wildlife commonly found in trade',
    url: 'https://www.traffic.org/site/assets/files/13443/cn_identification_final.pdf',
    kind: 'general',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-malayopython-reticulatus',
    slug: 'reticulated-python',
    names: {
      zh: '网纹蟒',
      en: 'Reticulated Python',
      aliases: ['Python reticulatus', 'Broghammerus reticulatus'],
    },
    scientificName: 'Malayopython reticulatus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Reptilia', '爬行纲'),
      taxon('Squamata', '有鳞目'),
      taxon('Pythonidae', '蟒科'),
      taxon('Malayopython', '马来蟒属'),
    ),
    conservation: conservation('LC', 'unknown', 2011),
    distribution: {
      realms: ['terrestrial', 'freshwater'],
      continents: ['亚洲'],
      regions: ['南亚东缘与中南半岛', '马来半岛与新加坡', '巽他群岛与华莱西亚', '菲律宾群岛', '尼科巴群岛'],
      countries: [
        '孟加拉国',
        '文莱',
        '柬埔寨',
        '印度（尼科巴群岛）',
        '印度尼西亚',
        '老挝',
        '马来西亚',
        '缅甸',
        '菲律宾',
        '新加坡',
        '泰国',
        '越南',
      ],
      range:
        '分布于孟加拉国东南部、尼科巴群岛、缅甸和中南半岛，向南经马来半岛、新加坡延伸到菲律宾与印度尼西亚众多岛屿；印度大陆记录可能为游移个体，尚无可靠的连续繁殖种群证据；东帝汶有历史记录，但 2011 IUCN 评估标为可能已绝迹，需新调查确认。',
      center: { lat: 3, lng: 112 },
    },
    habitats: [
      {
        name: '热带雨林与湿润林地',
        realm: 'terrestrial',
        description: '利用低地雨林、林下隐蔽层和林缘；复杂植被为伏击、隐蔽和大型猎物提供条件，较大个体尤其依赖结构完整度。',
        isPrimary: true,
      },
      {
        name: '河流、溪流、湖泊与河岸湿地',
        realm: 'freshwater',
        description: '善游泳并常沿淡水和河岸移动、隐蔽或捕食；跨水道能力也帮助其到达东南亚岛屿。',
        isPrimary: true,
      },
      {
        name: '次生林、灌丛与相邻草地',
        realm: 'terrestrial',
        description: '也能利用受扰林地和林缘镶嵌；适宜度随植被结构、猎物、体型和地区浮动，与完整原生林仍有差距。',
      },
      {
        name: '种植园、乡村花园与城市水道',
        realm: 'terrestrial',
        description: '小型个体能利用农业与城市环境中的鼠类，大型个体仍需要足够的遮蔽与较大猎物；不同体型利用这类环境的条件不同。',
      },
    ],
    measurements: {},
    diet: {
      types: ['carnivore'],
      foods: [
        '鼠类与其他小型哺乳动物',
        '穿山甲、豪猪与灵长类等中型哺乳动物',
        '鼷鹿、野猪和鹿类等较大型猎物',
        '鸟类及其他机会性脊椎动物猎物',
      ],
      description: '网纹蟒机会性捕食动物。苏门答腊样本显示，小个体主要吃鼠类，约 3 至 4 米后逐渐转向更大的哺乳动物；这一食谱变化来自地区样本，其他地区需要分别调查。',
    },
    activity: [
      '多在夜间隐蔽活动，以伏击接近的猎物为主',
      '咬住猎物后用身体盘绕施压，可能同时影响呼吸与循环',
      '善游泳并常利用河流、溪流、湖泊、城市水道及相邻河岸',
      '幼体和小型个体较常攀上低枝；大型个体更多利用地面与水边',
      '雌蛇盘绕并孵护卵团；繁殖时间和频率随地区与个体而变',
    ],
    tags: ['东南亚', '蟒科', '世界最长蛇种', '热感窝', '缠绕捕食', '卵生', 'CITES附录II', '全球无危'],
    summary: '网纹蟒是世界最长的蛇种，生活在东南亚雨林、河岸和城市水道附近。它身上有网状斑纹，唇鳞有热感窝，猎物种类随体型变化。',
    description:
      '网纹蟒是马来蟒属的大型蟒蛇，野生型黑褐线条在黄褐底色上连接成精细网纹。它用唇鳞热感窝与其他感官发现温暖猎物，咬住后以盘绕压力压制；小个体多食鼠类，长大后能转向更大的哺乳动物。它善游泳、能攀爬，也能进入种植园和城市水道，但大型个体仍需要复杂植被与足够猎物。全球 IUCN 为无危、趋势未知，而皮革、食用、药用和活体贸易使 CITES 附录 II 管理、地区遗传追踪与长期监测持续重要。',
    storySections: [
      {
        key: 'living-reticulation',
        label: '野生型辨识',
        title: '相连菱形斑纹的野生型',
        body: '网纹蟒头顶有窄暗线，眼后有斜纹，身体黑褐菱形线条彼此相连。浅色中心、体侧白斑和随光线变化的虹彩，与缅甸蟒分离的鞍形斑纹不同。白化与虎纹是人工选育的色型。',
      },
      {
        key: 'labial-heat-pits',
        label: '热感窝',
        title: '唇缘的小凹穴，读取温暖猎物',
        body: '上下唇鳞的一排小窝能接收红外热辐射，与视觉、气味和触觉共同引导蟒蛇转头、攻击和咬后搜索。热感窝是接收器官，不主动发出热信号。',
      },
      {
        key: 'diet-shift',
        label: '体型与食谱',
        title: '体型增长后捕食更大猎物',
        body: '苏门答腊胃内容样本中，小蛇主要捕食鼠类；约到 3 至 4 米体型段后，豪猪、灵长类、鼷鹿和野猪等较大猎物所占比重增加。菜单换了，不同体型的蛇能安身的环境也跟着变。',
      },
      {
        key: 'climbing-and-water',
        label: '树枝与水道',
        title: '会爬低枝，也能跨过海峡',
        body: '幼体轻巧，能沿低枝和灌丛移动；体型增大后更多留在地面和水边。强游泳能力让网纹蟒利用河流、湖泊和城市水道，也帮助它在东南亚岛屿之间铺开广阔却遗传分化的分布。',
      },
      {
        key: 'eggs-and-interval',
        label: '繁殖投入',
        title: '雌蛇盘绕卵团孵护',
        body: '雌蛇盘绕卵团孵护。北苏门答腊样本平均每窝 24.2 枚，繁殖间隔约 2 至 4 年；地点、季节、体型和营养都会影响这些数字，不能直接推广到全种。',
      },
      {
        key: 'monitoring-and-trade',
        label: '监测与贸易',
        title: '给隐身的蛇计数',
        body: '沙巴五年的密集河岸调查，平均探测概率仍只有约 20%，单靠野外目击很难估算种群。重复调查、收获样本人口学、来源追踪和遗传单元要一起进入 CITES 无害性判定，才能分清真实的变化与观测的偏差。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: 'reticulatus 指身上的网纹',
        body: '施奈德在 1801 年以 Boa reticulata 描述网纹蟒，后来曾归入 Python 属，现行学名为 Malayopython reticulatus。种加词 reticulatus 的意思是“像网一样”，指背部相连的网状斑纹。旧资料里的不同属名，都需要结合这些命名记录来核对。',
      },
    ],
    keyFacts: [
      '当前接受学名是 Malayopython reticulatus；Python reticulatus 是 IUCN 文件沿用的旧组合。',
      '它是世界最长的现生蛇种；性别、地区和亚种间体型差异很大，普通成体比传闻中的极值小得多。',
      '唇鳞热感窝被动感受猎物热辐射，并与视觉、化学和机械线索共同工作。',
      '苏门答腊样本中小个体主要食鼠，约 3 至 4 米后逐步转向更大的哺乳动物。',
      '北苏门答腊样本平均每窝 24.2 枚卵，雌蛇约每 2 至 4 年繁殖一次。',
      '全球 IUCN 为无危、趋势未知；CITES 附录 II 另行监管国际贸易。',
    ],
    threats: [
      '为皮革、肉、传统药用和宠物市场进行的野外采集及不可持续的地方性过度利用',
      '来源洗白、跨境转运、申报单位不一致和缺乏地区追踪削弱贸易管理',
      '雨林、河岸林和林下结构被农业扩张、种植园与城市化简化，尤其影响大型个体',
      '恐惧、家禽或宠物损失引发的冲突性捕杀与不安全搬运',
      '全球 LC 掩盖中南半岛地方性下降及菲律宾、婆罗洲、苏拉威西等遗传单元的独立风险',
    ],
    conservationActions: [
      '按 CITES 附录 II 开展可审计的无害性判定、许可和配额复核',
      '记录收获来源、努力量、性别、吻肛长与成熟度，重复比较人口学指标',
      '用可追溯标识和遗传工具核验野生、圈养与再出口来源，减少洗白和跨区替代',
      '按菲律宾、婆罗洲、苏拉威西及大陆/巽他等遗传结构设计监测与管理单元',
      '保护河岸林、林下隐蔽层、湿地连接和大型猎物，避免用人工生境替代完整生态结构',
      '由受训人员处理人蛇冲突并开展公众安全教育，减少徒手抓持和恐惧性捕杀',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'length-rank',
        label: '长度地位',
        value: '世界最长',
        note: '指现生蛇种间的相对地位；精确的最大体长仍有争议',
      },
      {
        key: 'clutch-mean',
        label: '平均窝卵数',
        value: '24.2',
        unit: '枚',
        note: '北苏门答腊收获样本均值，随雌蛇体型与地区变化',
      },
      {
        key: 'reproductive-interval',
        label: '雌蛇繁殖间隔',
        value: '2—4',
        unit: '年',
        note: '北苏门答腊研究推断；其他地区的周期各有出入',
      },
      {
        key: 'survey-detectability',
        label: '河岸调查探测率',
        value: '约 20',
        unit: '%',
        note: '沙巴单一保护地五年研究的平均值，受月相影响',
      },
    ],
    media: {
      image: './images/species/reticulated-python/01-rainforest-riverbank-portrait.webp',
      alt: '晨雾中的东南亚雨林河岸，一条完整的野生型成年网纹蟒沿湿润树根呈松散 S 形停卧，主体位于画面右侧',
      focalPoint: { x: 0.7, y: 0.62 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/reticulated-python/02-net-pattern-and-labial-pits.webp',
          alt: '野生型网纹蟒头部与前段身体特写，可见头顶窄暗线、眼后纹、橙褐色竖瞳和上下唇鳞的小型热感窝',
          title: '一张网，从头顶延伸到全身',
          caption: '相连网纹是野生型的辨识核心；唇鳞缘那排小凹穴正对着镜头，是它读取温血猎物的窗口。',
          focalPoint: { x: 0.52, y: 0.5 },
        },
        {
          image: './images/species/reticulated-python/03-arboreal-juvenile.webp',
          alt: '一条纤细的幼年野生型网纹蟒沿东南亚河岸林的粗壮低枝移动，远处叶隙可见水面',
          title: '小体型更容易走上枝头',
          caption: '幼体和小型个体能沿低枝与灌丛移动；体型增大后，更多在地面和水边活动。',
          focalPoint: { x: 0.56, y: 0.48 },
        },
        {
          image: './images/species/reticulated-python/04-plantation-edge-rat-ambush.webp',
          alt: '黄昏的油棕园与次生植被交界，一条中小型野生型网纹蟒隐蔽在落叶下，远处鼠类沿固定路径经过且尚未接触',
          title: '鼠类把小蛇带到人类环境边缘',
          caption: '苏门答腊样本里，小蛇的主粮是鼠类。跟着粮仓住进种植园边缘的是它们，大型个体仍要更复杂的林地。',
          focalPoint: { x: 0.62, y: 0.62 },
        },
        {
          image: './images/species/reticulated-python/05-female-coiled-around-eggs.webp',
          alt: '隐蔽的林缘根洞内，一条大型雌性野生型网纹蟒盘绕卵团，只有数枚白色革质卵从身体间局部露出',
          title: '盘绕卵团的雌蛇',
          caption: '北苏门答腊样本平均约 24.2 枚卵，繁殖间隔约 2 至 4 年；具体到每一窝，数字各有起伏。',
          focalPoint: { x: 0.5, y: 0.57 },
        },
        {
          image: './images/species/reticulated-python/06-nocturnal-riverside-survey.webp',
          alt: '沙巴森林河流的夜间，两名穿救生衣的研究人员乘小船进行非接触河岸视觉调查，数米外一条网纹蟒局部隐蔽在树根植被中',
          title: '重复寻找一条难以看见的蛇',
          caption: '沙巴五年研究的平均探测概率约 20%；研究人员只观察记录，不捕捉、不搬运，也不公开具体点位。',
          focalPoint: { x: 0.52, y: 0.62 },
        },
      ],
    },
    sources: RETICULATED_PYTHON_SOURCES,
    featured: true,
    publishedAt: RETICULATED_PYTHON_CONTENT_DATE,
    updatedAt: RETICULATED_PYTHON_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
