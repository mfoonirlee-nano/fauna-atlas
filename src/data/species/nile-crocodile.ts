import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const NILE_CROCODILE_SOURCE_DATE = '2026-08-27' as const;

const NILE_CROCODILE_CONTENT_DATE = '2026-08-27' as const;

const NILE_CROCODILE_SOURCES = [
  {
    title: 'The Reptile Database — Crocodylus niloticus',
    url: 'https://reptile-database.reptarium.cz/Crocodylus/niloticus',
    kind: 'taxonomy',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Crocodile Specialist Group 2019 — Nile Crocodile species account',
    url: 'https://www.iucncsg.org/365_docs/attachments/protarea/7386996acf2d72b2379d0f905b2c3200.pdf',
    kind: 'general',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Hekkala et al. 2011 — Mummy DNA resurrects a cryptic African crocodile species',
    url: 'https://doi.org/10.1111/j.1365-294X.2011.05245.x',
    kind: 'taxonomy',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Velo-Antón et al. 2019 — Phylogeography and population structure in southern Africa',
    url: 'https://doi.org/10.1371/journal.pone.0226505',
    kind: 'distribution',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Cott 1961 — Ecology and economic status in Uganda and Northern Rhodesia',
    url: 'https://doi.org/10.1111/j.1096-3642.1961.tb00220.x',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Wallace & Leslie 2008 — Diet in the Okavango Delta',
    url: 'https://doi.org/10.1670/07-1071.1',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Leitch & Catania 2012 — Integumentary sensory organs in crocodilians',
    url: 'https://doi.org/10.1242/jeb.076836',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Grap et al. 2015 — Sensitivity to water-surface waves',
    url: 'https://doi.org/10.1016/j.zool.2015.03.004',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Erickson et al. 2012 — Crocodilian bite-force experiment',
    url: 'https://doi.org/10.1371/journal.pone.0031781',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Price et al. 2022 — Wild gaping behaviour at Ndumo Game Reserve',
    url: 'https://doi.org/10.1016/j.beproc.2022.104772',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Calverley & Downs 2015 — Seasonal movements at Ndumo Game Reserve',
    url: 'https://doi.org/10.4102/koedoe.v57i1.1234',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Combrink, Warner & Downs 2016 — Nest predation and maternal care at Lake St Lucia',
    url: 'https://doi.org/10.1016/j.beproc.2016.10.014',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Combrink, Warner & Downs 2017 — Nest-site selection and female spatial ecology',
    url: 'https://doi.org/10.1016/j.beproc.2016.12.006',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Vergne & Mathevon 2008 — Crocodile egg sounds and hatching synchrony',
    url: 'https://doi.org/10.1016/j.cub.2008.04.011',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Hutton 1987 — Incubation temperature, sex ratios and development',
    url: 'https://doi.org/10.1111/j.1469-7998.1987.tb07458.x',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Leslie & Spotila 2001 — Alien plants and breeding habitat at Lake St Lucia',
    url: 'https://doi.org/10.1016/S0006-3207(00)00177-4',
    kind: 'conservation',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Ezat et al. 2025 — Crocodile occurrence near fishing camps at Lake Nasser',
    url: 'https://doi.org/10.1002/ece3.71970',
    kind: 'conservation',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'SANBI 2017 — Regional assessment for South Africa and Eswatini',
    url: 'https://speciesstatus.sanbi.org/assessment/last-assessment/2680/',
    kind: 'conservation',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Pooley 1977 — Nest opening and buccal transport of young',
    url: 'https://doi.org/10.1111/j.1469-7998.1977.tb04137.x',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-crocodylus-niloticus',
    slug: 'nile-crocodile',
    names: { zh: '尼罗鳄', en: 'Nile Crocodile', aliases: [] },
    scientificName: 'Crocodylus niloticus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Reptilia', '爬行纲'),
      taxon('Crocodylia', '鳄目'),
      taxon('Crocodylidae', '鳄科'),
      taxon('Crocodylus', '鳄属'),
    ),
    conservation: conservation('LC', 'stable', 2017),
    distribution: {
      realms: ['freshwater', 'terrestrial'],
      continents: ['非洲'],
      regions: [
        '尼罗河上游与纳赛尔湖',
        '东非大裂谷湖群',
        '刚果盆地部分水系',
        '赞比西—奥卡万戈—林波波水系',
        '南部非洲河流、湿地与河口',
        '马达加斯加淡水湿地',
      ],
      countries: [
        '安哥拉',
        '博茨瓦纳',
        '布隆迪',
        '喀麦隆',
        '刚果民主共和国',
        '埃及',
        '厄立特里亚',
        '埃塞俄比亚',
        '加蓬',
        '肯尼亚',
        '马达加斯加',
        '马拉维',
        '莫桑比克',
        '纳米比亚',
        '刚果共和国',
        '卢旺达',
        '索马里',
        '南非',
        '南苏丹',
        '苏丹',
        '埃斯瓦蒂尼',
        '坦桑尼亚',
        '乌干达',
        '赞比亚',
        '津巴布韦',
      ],
      range:
        '现存分布以东部和南部撒哈拉以南非洲、尼罗河上游与纳赛尔湖及马达加斯加为主；中非和东北非部分记录仍需遗传核验，以排除已经恢复为独立种的西非圣鳄 Crocodylus suchus。',
      center: { lat: -10, lng: 28 },
    },
    habitats: [
      {
        name: '河流、湖泊与水库',
        realm: 'freshwater',
        description:
          '常年水体提供取食、避难与繁殖季移动通道；岸线形态、水深和开阔晒背处共同影响利用。',
        isPrimary: true,
      },
      {
        name: '季节性漫滩与淡水湿地',
        realm: 'freshwater',
        description:
          '涨水期连通主河道、水潭和沼泽，个体会随水文周期在这些水体之间转换活动空间。',
      },
      {
        name: '河口与高盐潟湖',
        realm: 'freshwater',
        description:
          '部分种群会利用河口和高盐度水体；耐盐记录不等于以海洋为主要生活领域。',
      },
      {
        name: '开放沙岸与巢址',
        realm: 'terrestrial',
        description:
          '成体上岸晒背，雌鳄在干季于临水开阔沙地挖穴筑巢并守护卵和刚孵化幼体。',
      },
    ],
    measurements: {
      length: {
        min: 2.18,
        max: 5.5,
        unit: 'm',
        note: '2.18米是历史记录中的最小筑巢雌性，5.5米是今天罕见的大型雄性上限；两端口径不同，不代表典型成体范围。',
      },
    },
    diet: {
      types: ['carnivore', 'piscivore'],
      foods: ['水生昆虫', '蛛形动物', '甲壳类', '两栖动物', '鱼类', '其他脊椎动物', '腐肉'],
      description:
        '食谱随体型扩展：初生幼体主要摄食水生昆虫和蛛形动物，生长后增加甲壳类、两栖动物和鱼类。奥卡万戈最大样本组仍属亚成体且以鱼为主，不能据此宣称所有大型成体都以大型哺乳动物为日常主食。',
    },
    activity: ['水陆两栖活动', '潜伏取食', '日间晒背', '季节性水域转换', '守巢与幼体照护'],
    tags: ['鳄类', '淡水捕食者', '皮肤感受器', '温度依赖型性别决定', '亲代照护', '人鳄共存'],
    summary: '尼罗鳄主要生活在非洲东部和南部水域，吻宽而结实，强壮尾部推动游泳。雌鳄守护巢穴，幼鳄孵化后还会用嘴把它们送到水边。',
    description:
      '尼罗鳄躯干厚重，尾部侧扁而强壮，吻呈宽而结实的 V 形。颌缘和身体鳞片上约有 9,000 个细小皮肤感受器，帮助感知水面扰动和接触。雌鳄守护穴巢，听到幼体孵化叫声后开巢，并能用颊囊把幼体送到水边。IUCN 鳄类专家组采用 2017 年全球无危、趋势稳定的记录；南非区域评估为易危，多地仍有湿地改变、地方种群下降和调查不足。',
    storySections: [
      {
        key: 'species-boundary',
        label: '分类',
        title: '旧尼罗鳄范围中包含另一个物种',
        body: '遗传研究把西部谱系恢复为独立种西非圣鳄 Crocodylus suchus，东部谱系继续使用 Crocodylus niloticus。中非与东北非仍有鉴定空白，因此旧地图上的每一条“大尼罗鳄”记录都不能直接搬进当前分布。',
      },
      {
        key: 'sensory-skin',
        label: '感知',
        title: '皮肤感受器感知细小水波',
        body: '解剖研究估算尼罗鳄颌部与全身约有 9,000 个皮肤感受器。两只圈养幼体的实验还显示，它们能学习回应细小水面波。样本有限，尚不足以给出全种统一的感知阈值。',
      },
      {
        key: 'diet-growth',
        label: '食性',
        title: '猎物随着身体一起变大',
        body: '初生幼体从水生昆虫和蛛形动物开始，较大幼体逐步增加甲壳类、两栖类和鱼。奥卡万戈研究的最大体型组主要吃鱼，但它们仍是亚成体；这项地方样本不能代表大型成体在全分布区的食谱。',
      },
      {
        key: 'gaping',
        label: '行为',
        title: '张口行为与温度和邻近个体有关',
        body: '南非野外300小时观察记录1,120次张口，持续时间随气温升高而缩短、随邻近个体增加而延长。结果支持温度调节和社会信号共同参与，不能把每次张口都解释成单一散热动作或单一威吓。',
      },
      {
        key: 'nesting-care',
        label: '繁殖',
        title: '母鳄回应叫声，打开巢穴',
        body: '已发表单窝极值为14 至 95枚，多个地点的平均窝卵数约33 至 60.4枚。孵化约需75 至 115天，温度会影响发育速度和性别，却不存在全种固定温度开关。母鳄可开巢，并用颊囊含运幼鳄和未孵化卵。',
      },
      {
        key: 'coexistence',
        label: '保护',
        title: '减少岸边人与鳄的接触风险',
        body: '刺网、湿地破碎、筑坝、污染与报复性捕杀共同造成地方压力。固定取水点、防鳄屏障、桥或码头、替代水井和风险教育能降低岸边暴露；人鳄共存需要改变接触条件，不能只靠迁走一只动物。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1768 年的尼罗鳄命名记录',
        body: 'Laurenti 于 1768 年命名尼罗鳄，现用学名为 Crocodylus niloticus。后来遗传研究发现，旧名称所包含的非洲西部谱系属于西非圣鳄 Crocodylus suchus。阅读旧分布图时需核对物种身份；当前尼罗鳄范围主要在非洲东部、南部和马达加斯加。',
      },
    ],
    keyFacts: [
      '当前接受名为Crocodylus niloticus，归入鳄目、鳄科和鳄属；西非圣鳄Crocodylus suchus已恢复为独立物种。',
      '现存范围以非洲东部和南部、尼罗河上游与纳赛尔湖及马达加斯加为主，中非和东北非部分记录需要遗传核验。',
      'IUCN鳄类专家组沿用2017年全球LC且stable记录；地方下降、南非区域VU和调查不足仍需分别呈现。',
      '2.18米是历史最小筑巢雌性记录，5.5米是今天罕见的大型雄性上限，不代表典型成体范围。',
      '颌缘和全身鳞片约有9,000个皮肤感受器，外观是细小暗点而不是发光器官。',
      '初生幼体以水生昆虫和蛛形动物为主，随体型增长逐步增加甲壳类、两栖动物和鱼类。',
      '张口持续时间同时受气温和邻近个体影响，不能只解释为散热或威吓。',
      '地方平均窝卵数约33 至 60枚，单窝记录为14 至 95枚；孵化约75 至 115天，不存在一个全种固定温度阈值。',
      '母鳄会开巢并用颊囊含运幼体；现有恒河鳄资料显示后者守护幼体但不会用嘴搬运。',
      '皮张猎捕后部分种群曾恢复，当前主要压力转为河流湿地改变、污染、渔具死亡和人鳄冲突。',
    ],
    threats: [
      '河流、湖泊、湿地与河口开发造成的生境丧失和连通性下降',
      '筑坝、抽水和异常放水改变漫滩、岸线与巢址水文',
      '农业、城市、工业与矿业污染进入水体和食物网',
      '刺网缠绕、诱饵钩、套索、毒杀及其他非选择性捕杀',
      '对人身与牲畜风险的报复性捕杀及岸边鱼废料造成的吸引',
      '巢、卵和筑巢雌性受踩踏、采集、洪水和外来植物遮阴影响',
      '分布国调查与遗传鉴定不足掩盖地方下降和物种边界',
    ],
    conservationActions: [
      '保持主河道、季节漫滩、水潭和湿地连通，保护开阔沙质巢岸与自然水文过程',
      '统一夜间聚光调查、体型分级、巢址和死亡记录，并在鉴定空白区加入遗传取样',
      '减少刺网和诱饵钩死亡，治理农业、城市和矿业污染，避免在岸边弃置鱼废料',
      '建设有防鳄屏障的固定取水点、桥或码头及替代水井，配合本地风险教育',
      '保护守巢雌性、穴巢和孵化期微环境，控制遮阴巢址的外来木本植物',
      '按地方风险评估处理冲突个体，监测迁移后的归巢和新地点风险，避免把迁移当作唯一方案',
    ],
    metrics: {
      adultLengthCm: [218, 550],
    },
    featuredStats: [
      {
        key: 'rare-male-length',
        label: '罕见大型雄性上限',
        value: '5.5',
        unit: '米',
        note: '今天已罕见，不代表典型成体',
      },
      {
        key: 'mean-clutch-range',
        label: '地方平均窝卵数',
        value: '33—60',
        unit: '枚',
        note: '多个地方研究的均值跨度；已发表单窝极值为14 至 95枚',
      },
      {
        key: 'incubation-days',
        label: '孵化期',
        value: '75—115',
        unit: '天',
        note: '随温度变化，低温发育较慢，不存在全种固定温度阈值',
      },
      {
        key: 'sensory-organs',
        label: '皮肤感受器',
        value: '约9,000',
        unit: '个',
        note: '解剖研究对颌部与全身鳞片的估算',
      },
    ],
    media: {
      image: './images/species/nile-crocodile/01-river-sandbank-adult.webp',
      alt: '宽阔非洲河流的开放沙岸上，一只完整成年雄性尼罗鳄低伏晒背，宽而结实的V形吻、厚躯干和完整尾尖清楚可见',
      focalPoint: { x: 0.69, y: 0.64 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/nile-crocodile/02-ripple-sensory-hunt.webp',
          alt: '浅水中一只完整幼鳄贴近水面，吻端前方出现一圈由水下未知扰动形成的细小涟漪，颌缘皮肤感受器只呈自然暗点',
          title: '暗点读取水面的细小扰动',
          caption: '实验支持幼鳄感知水波；少量圈养样本不足以给出全种统一的感知阈值。',
          focalPoint: { x: 0.61, y: 0.61 },
        },
        {
          image: './images/species/nile-crocodile/03-social-gaping.webp',
          alt: '南非浅水岸边分散着多只完整尼罗鳄，其中一只自然张口，个体之间留有清楚距离',
          title: '张口不只有一种解释',
          caption: '野外数据同时关联气温和邻近个体，因此不能仅凭一张图判定它是在散热或威吓。',
          focalPoint: { x: 0.58, y: 0.62 },
        },
        {
          image: './images/species/nile-crocodile/04-seasonal-floodplain-movement.webp',
          alt: '季节性漫滩、水潭和主河道相连，一只完整成年尼罗鳄背负小型无线电发射器从浅水移向河道',
          title: '水文周期改变活动空间',
          caption: '恩杜莫地方研究记录无线电标记个体在季节水体之间转换，不能外推为全物种固定迁徙距离。',
          focalPoint: { x: 0.64, y: 0.63 },
        },
        {
          image: './images/species/nile-crocodile/05-hatchling-mouth-transport.webp',
          alt: '穴巢与浅水之间，一只完整母鳄用颊囊轻含两只完整幼体，幼体姿势自然无伤，母鳄没有咬合或咀嚼动作',
          title: '母鳄把幼体送到水边',
          caption: '圈养研究证实颊囊含运，野外相机记录巢水往返和幼体转移；画面不声称记录了指定地点或个体。',
          focalPoint: { x: 0.57, y: 0.61 },
        },
        {
          image: './images/species/nile-crocodile/06-protected-water-access.webp',
          alt: '湖岸固定取水平台和防鳄屏障把人留在设施一侧，远处水面只有一只尼罗鳄并与取水者保持距离',
          title: '先改变人与鳄相遇的岸线',
          caption: '固定取水设施是专家组建议的预防措施，不代表经过纳赛尔湖实验验证的万能方案。',
          focalPoint: { x: 0.63, y: 0.58 },
        },
      ],
    },
    sources: [
      ...NILE_CROCODILE_SOURCES,
      {
        title: 'GBIF: Crocodylus niloticus Laurenti, 1768 nomenclatural record',
        url: 'https://www.gbif.org/species/2441341',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: NILE_CROCODILE_CONTENT_DATE,
    updatedAt: NILE_CROCODILE_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
