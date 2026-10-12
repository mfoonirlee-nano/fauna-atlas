import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const SNOWY_OWL_SOURCE_DATE = '2026-08-26' as const;

const SNOWY_OWL_CONTENT_DATE = '2026-08-26' as const;

const SNOWY_OWL_SOURCES = [
  {
    title: 'IOC World Bird List v15.2: Owls',
    url: 'https://www.worldbirdnames.org/new/bow/owls/',
    kind: 'taxonomy',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'IOC World Bird List v15.2: Master and multilingual lists',
    url: 'https://www.worldbirdnames.org/new/ioc-lists/master-list-2/',
    kind: 'taxonomy',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Bubo scandiacus, 2021 global assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22689055A205475036.en',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Snowy Owl Bubo scandiacus',
    url: 'https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'Cornell Lab: Snowy Owl Identification',
    url: 'https://www.allaboutbirds.org/guide/Snowy_Owl/id',
    kind: 'general',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'Cornell Lab: Snowy Owl Life History',
    url: 'https://www.allaboutbirds.org/guide/Snowy_Owl/lifehistory',
    kind: 'ecology',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'McCabe et al. 2024: Circumpolar status assessment and conservation priorities',
    url: 'https://doi.org/10.1017/S0959270924000248',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'Therrien et al. 2014: Irruptive movements and breeding dispersal',
    url: 'https://doi.org/10.1111/jav.00426',
    kind: 'distribution',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'Robillard et al. 2016: Pulsed tundra resources and winter irruptions',
    url: 'https://doi.org/10.1007/s00442-016-3588-3',
    kind: 'ecology',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'Therrien et al. 2011: Winter reliance on the marine ecosystem',
    url: 'https://doi.org/10.1111/j.1600-048X.2011.05330.x',
    kind: 'ecology',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'McCabe et al. 2022: Density-dependent winter survival of immatures',
    url: 'https://doi.org/10.1007/s00442-021-05057-9',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'Canada COSEWIC 2025: Snowy Owl assessment and status report',
    url: 'https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/snowy-owl-2025.html',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'US National Park Service: Enjoy Snowy Owls from a distance',
    url: 'https://www.nps.gov/articles/enjoy-snowy-owls-from-distance.htm',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'China Biodiversity Red List: Vertebrates 2020',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'China National Key Protected Wild Animals List 2021',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'CITES taxonomy crosswalk: Nyctea scandiaca to Bubo scandiacus',
    url: 'https://cites.org/sites/default/files/eng/com/ac/28/E-AC28-21-01-Annex4.pdf',
    kind: 'taxonomy',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
  {
    title: 'CMS COP15: Snowy Owl added to Appendix II',
    url: 'https://www.cms.int/news/40-migratory-animal-species-receive-new-or-upgraded-protection-close-un-meeting-brazil',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-bubo-scandiacus',
    slug: 'snowy-owl',
    names: {
      zh: '雪鸮',
      en: 'Snowy Owl',
      aliases: ['雪鴞', 'Nyctea scandiaca'],
    },
    scientificName: 'Bubo scandiacus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Strigiformes', '鸮形目'),
      taxon('Strigidae', '鸱鸮科'),
      taxon('Bubo', '雕鸮属'),
    ),
    conservation: conservation('VU', 'decreasing', 2021, 'A2bd+3bd+4bd'),
    distribution: {
      realms: ['terrestrial', 'freshwater'],
      continents: ['亚洲', '欧洲', '北美洲'],
      regions: [
        '阿拉斯加、加拿大北极群岛与北美大陆北缘苔原',
        '格陵兰繁殖区，以及冰岛等北大西洋高纬地区的偶发繁殖地',
        '斯堪的纳维亚北部与俄罗斯环北极苔原',
        '北极海岸、海冰边缘与冰间水道',
        '加拿大南部、美国北部及中部开阔越冬地',
        '欧亚北部草原、农田、海岸及东亚偶发越冬地',
      ],
      countries: [
        '加拿大',
        '美国',
        '俄罗斯',
        '丹麦（格陵兰）',
        '挪威',
        '瑞典',
        '芬兰',
        '中国',
      ],
      range:
        '繁殖区环绕北极，核心位于加拿大、美国阿拉斯加、格陵兰、斯堪的纳维亚北部和俄罗斯的无树苔原。非繁殖期部分个体仍留在高纬陆地或海冰，另一些进入北美和欧亚大陆较南方的海岸、草原、农田与其他开阔地；移动方向、距离和落脚地随个体、年份与猎物条件改变。中国大陆属于稀少的原生非繁殖季范围，不是稳定繁殖区。国家列表只列代表性范围，不把迷鸟记录当作稳定分布。',
    },
    habitats: [
      {
        name: '中湿至干燥无树苔原',
        realm: 'terrestrial',
        description:
          '主要繁殖生境；低矮植被和起伏地形便于发现旅鼠，微高、迎风且排水良好的地面可容纳浅刮巢。',
        isPrimary: true,
      },
      {
        name: '苔原湿地、浅湖、河谷与冰碛地',
        realm: 'freshwater',
        description:
          '湿地边缘、碎石丘和植被斑块共同提供猎物与守望点；巢址不等于裸露雪地，也不固定在同一种微地形。',
      },
      {
        name: '海岸盐沼、沙丘与近岸开阔地',
        realm: 'terrestrial',
        description:
          '低矮、无树且视野开阔的海岸是常见越冬地；部分高纬个体还会留在海冰边缘利用水禽。',
      },
      {
        name: '草原、农田与其他开阔内陆越冬地',
        realm: 'terrestrial',
        description:
          '低植被和宽阔视野适合停栖守望、贴地飞行和捕捉啮齿动物；电线、道路和灭鼠药也集中在这类景观。',
      },
    ],
    measurements: {
      length: {
        min: 52,
        max: 71,
        unit: 'cm',
        note: 'Cornell 北美两性共同范围；雌鸟通常更大',
      },
      weight: {
        min: 1.6,
        max: 2.95,
        unit: 'kg',
        note: 'Cornell 北美两性共同范围；体重随性别、年龄和季节改变',
      },
      wingspan: {
        min: 126,
        max: 145,
        unit: 'cm',
        note: 'Cornell 北美两性共同范围',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '旅鼠',
        '田鼠、小鼠等小型啮齿动物',
        '兔与野兔',
        '雷鸟、滨鸟及其他陆鸟',
        '鸭、雁、䴙䴘等水鸟',
        '海鸟及其他机会性猎物',
      ],
      description:
        '雪鸮繁殖期高度依赖旅鼠等小型哺乳动物，充足猎物会提高定居繁殖和育雏产出。非繁殖期食谱更宽，可捕食其他啮齿动物、兔类、陆鸟、水禽和海鸟，食物组合随地点和季节改变。',
    },
    activity: [
      '晨昏常活跃，北极夏季可在连续日照下全天觅食',
      '其他季节会随光照和猎物在白天、晨昏或夜间活动',
      '常在地面微高处或低矮人工结构上长时间守望',
      '用低空飞行、短距突袭或地面奔跑扑向猎物',
      '每年可远距离游猎并更换繁殖地点',
      '高繁殖产出之后可出现大量幼鸟向南扩散的侵入年',
    ],
    tags: [
      '环北极',
      '鸮形目',
      '苔原地面筑巢',
      '旅鼠脉冲资源',
      '游猎与侵入迁移',
      '昼夜活动灵活',
      '海冰越冬策略',
      'IUCN 易危',
      '中国红色名录易危',
      '国家二级重点保护野生动物',
      'CITES 附录 II',
      'CMS 附录 II',
    ],
    summary:
      '雪鸮生活在环北极无树苔原，会随旅鼠数量变化选择繁殖地，也在白天捕猎。它四处寻找食物，有些年份会不规则地迁入其他地区，活动范围包括北极、海冰和温带开阔地。',
    description:
      '雪鸮具有圆滑无耳羽簇的头、黄色眼睛、白色底羽和不同程度的褐黑斑纹，浓密羽毛一直覆盖到腿和趾。成年雄鸟随年龄常变得更白，雌鸟通常保留较密横斑，但羽色重叠使单靠一眼难以给所有个体定性别或年龄。它在北极夏季连续日照下照样捕猎，不能简单归为夜行猛禽。旅鼠丰度决定许多年份是否定居繁殖以及窝卵和幼鸟产出；高产之后南方常见的幼鸟增加属于资源脉冲驱动的扩散，不等于一群饥饿个体沿固定路线南逃。IUCN/BirdLife 2021 全球评估为 VU、趋势下降，成熟个体估算约 14,000 至 28,000；2024 年环北极综合研究支持三代内下降超过 30% 的判断，同时强调西伯利亚等地监测仍稀疏。中国 2020 红色名录也列为 VU，国家重点保护等级为二级；CITES 和 2026 年生效的 CMS 名录均列附录 II。',
    storySections: [
      {
        key: 'plumage-sex-and-age',
        label: '形态',
        title: '白色深浅不能单独决定性别',
        body: '幼年雄鸟和雌鸟都可带有密集深色斑纹。雄鸟通常随年龄变白，雌鸟往往终生保留更多横斑；最白的个体多为成年雄鸟，最密斑的多为雌鸟，中间色型仍会重叠。圆头、黄色眼睛、宽翼和覆羽的腿趾比“纯白”更可靠。',
      },
      {
        key: 'daylight-and-darkness',
        label: '活动',
        title: '极昼里的猫头鹰照样捕猎',
        body: '北极繁殖季没有完整黑夜，雪鸮会在连续日照下守望和扑击。到了冬季，它也能在晨昏或黑暗中活动。光照、天气和猎物共同调整作息，所以“严格夜行”会漏掉它一年中的大段生活。',
      },
      {
        key: 'lemming-pulse-breeding',
        label: '食物与繁殖',
        title: '旅鼠丰年增加繁殖产出',
        body: '雪鸮每年在广阔北极搜索猎物充足的繁殖地。旅鼠密度高时，更多个体定居，窝卵数和成功育成的幼鸟也可增加；食物低谷时，大片地点可能没有巢。局地旅鼠周期会衰减或改变，但研究还不能断言整个北极的周期已经同步崩溃。',
      },
      {
        key: 'ground-scrape-and-hatching',
        label: '繁殖',
        title: '幼鸟先后孵出，体型差异明显',
        body: '雌鸟在微高、迎风且排水较好的地面压出浅凹，通常每窝 3 至 11 枚白卵。它从第一枚卵开始孵化，后续卵约隔日产下，因此雏鸟会异步出壳并形成明显体型差。32 天孵化期和窝卵范围是通用参考，不保证每一巢的结果。',
      },
      {
        key: 'irruption-is-not-starvation',
        label: '移动',
        title: '大量南下有时发生在繁殖丰年之后',
        body: '北美研究显示，南方某些大侵入年会紧跟北极旅鼠丰年和高繁殖产出，大量当年幼鸟把冬季分布推向南方。密度升高会压低幼鸟冬季存活，却不能把每只南下雪鸮都称作饥饿或迷路；一些成鸟留在北极陆地或海冰，个体路线也不固定。',
      },
      {
        key: 'circumpolar-conservation',
        label: '保护',
        title: '游猎者需要跨境监测',
        body: '合并五处长期繁殖监测点后的模型中心估计支持下降，但不确定区间很宽，大片西伯利亚与高纬地区仍缺少连续数据。研究者需要把巢区监测、个体追踪、旅鼠调查和死亡剖检接起来；越冬地则要减少车辆、飞机、电力设施、灭鼠药和围观带来的损失。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的描述与属名变化',
        body: '雪鸮的命名记录可追溯到林奈 1758 年的描述。旧资料常使用 Nyctea scandiaca，现行分类把它放入雕鸮属，写作 Bubo scandiacus。它的羽色随年龄与性别改变，北极夏季在连续日照下照样捕猎，冬季部分个体还会留在海冰附近。',
      },
    ],
    keyFacts: [
      '雪鸮是环北极单型种；旧资料常把它单列为 Nyctea scandiaca，现行 IOC v15.2 放在雕鸮属 Bubo。',
      'Cornell 北美两性共同体尺为体长 52 至 71 厘米、体重 1.6 至 2.95 千克、翼展 126 至 145 厘米。',
      '雄鸟通常随年龄变白，雌鸟往往保留更多深色横斑；中间色型不能只凭羽色可靠定性别。',
      '雪鸮会在北极连续日照下捕猎，也可在晨昏和夜间活动，不是严格夜行种。',
      'Cornell 记录每窝通常 3 至 11 枚卵、孵化约 32 天；从第一枚卵开始孵化会造成异步出壳。',
      '高旅鼠密度可推动定居、较大窝卵和高幼鸟产出，并在随后冬季增加向南扩散的幼鸟。',
      '部分成年雌鸟会在北极海冰和冰间水道附近越冬，另一些个体选择陆地、海岸或温带开阔地。',
      '全球成熟个体估算约 14,000 至 28,000；遥远繁殖区、游猎行为和稀疏监测使区间仍有明显不确定性。',
      '中国红色名录列为易危，国家重点保护等级为二级；CITES 与 CMS 均列附录 II。',
    ],
    threats: [
      '北极升温改变苔原、积雪、海冰与水文，并可能在部分地区削弱旅鼠脉冲或增加黑蝇侵扰；各区域反应并不同步',
      '道路车辆、飞机、建筑与其他结构碰撞，输配电设施触电',
      '越冬地使用抗凝血灭鼠药造成二次中毒，铅、持久性有机污染物和其他污染物还需持续评估',
      '禽流感、寄生虫和其他疾病造成死亡，种群尺度影响仍有资料缺口',
      '矿业、油气、道路和城镇开发可能移除或干扰繁殖地与越冬开阔地；风能设施的种群影响仍不清楚',
      '近距离摄影、追逐、诱饵和公开敏感停栖点造成反复惊飞与额外能量消耗',
      '历史迫害、局地捕杀、陷阱误捕和渔具缠绕仍可能造成局地损失',
    ],
    conservationActions: [
      '扩展环北极标准化繁殖监测，优先补足俄罗斯高纬地区和其他长期空白',
      '把巢址、旅鼠丰度、天气、海冰与遥测资料放进同一年度分析框架',
      '保护无树苔原、湿地镶嵌、海岸与关键越冬开阔地，开发项目避让活跃巢区',
      '在道路、电力设施和建筑周边记录死亡并实施防撞、防触电改造',
      '机场采用生境管理、活捕转移和风险预警，减少致死性控制',
      '限制高风险抗凝血灭鼠药，持续检测铅、持久性污染物及复合暴露',
      '对发现的死鸟开展规范剖检和禽流感检测，并跨国共享死亡原因数据',
      '在越冬地保持观察距离，不投喂、不诱拍、不追逐，并谨慎公开敏感位置',
      '执行中国国家二级保护要求、CITES 附录 II 贸易管理和 CMS 附录 II 跨境合作',
      '让北极原住民和地方社区参与监测设计、知识解释与保护决策',
    ],
    metrics: {
      adultLengthCm: [52, 71],
      adultMassKg: [1.6, 2.95],
      wingspanCm: [126, 145],
      estimatedMatureIndividuals: [14000, 28000],
    },
    featuredStats: [
      {
        key: 'mature-population',
        label: '全球成熟个体估算',
        value: '1.4万至2.8万',
        note: 'BirdLife 低质量估算；2024 年环北极综合研究认为区间尚属合理，但不是同期全球普查',
      },
      {
        key: 'clutch-size',
        label: '每窝通常',
        value: '3至11',
        unit: '枚卵',
        note: 'Cornell 通用参考；随旅鼠条件和个体改变',
      },
      {
        key: 'incubation',
        label: '孵化期约',
        value: '32',
        unit: '天',
        note: '雌鸟从第一枚卵开始孵化，雏鸟异步出壳',
      },
      {
        key: 'breeding-dispersal',
        label: '雌鸟连续繁殖地平均间距',
        value: '725',
        unit: '千米',
        note: 'Therrien 等 2014 的卫星追踪样本；范围 18 至 2,224 千米，不代表全种固定距离',
      },
    ],
    media: {
      image: './images/species/snowy-owl/01-arctic-tundra-portrait.webp',
      alt: '夏季环北极苔原右侧，一只完整雪鸮站在低丘上，圆头、黄色眼睛、白底密集褐色横斑和羽毛覆盖的腿脚清晰可见',
      focalPoint: { x: 0.7, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/snowy-owl/02-adult-flight-field-marks.webp',
          alt: '雪原上空，一只体羽较白的完整雪鸮低空滑翔，圆头、黄色眼睛、两侧宽圆翼和完整尾羽均在画面内',
          title: '白色会随年龄和性别改变',
          caption:
            '成年雄鸟往往比雌鸟更白，个体之间仍有重叠；宽翼、圆头、黄色眼睛和覆羽腿脚共同支持辨识。',
          focalPoint: { x: 0.58, y: 0.5 },
        },
        {
          image: './images/species/snowy-owl/03-treeless-tundra-habitat.webp',
          alt: '低矮苔原植被、碎石丘和浅水池铺满画面，一只完整斑纹雪鸮停在右侧微高丘顶，远处没有树木或建筑',
          title: '无树地景提供开阔视野',
          caption:
            '繁殖地可由干湿苔原、池塘、河谷和冰碛斑块组成；单个画面不能表示全物种的巢密度或范围边界。',
          focalPoint: { x: 0.69, y: 0.51 },
        },
        {
          image: './images/species/snowy-owl/04-daylight-lemming-hunt.webp',
          alt: '明亮夏季苔原上，一只完整雪鸮低飞接近一只健康小旅鼠，双方相隔一个以上鸮体长，没有接触或伤口',
          title: '极昼不会让捕猎停下来',
          caption:
            '旅鼠是繁殖期关键猎物；画面只重建一次接近，不能证明捕获结果、全年食谱或猎物数量。',
          focalPoint: { x: 0.5, y: 0.55 },
        },
        {
          image: './images/species/snowy-owl/05-ground-scrape-and-eggs.webp',
          alt: '一只完整成年雌性雪鸮站在砾质苔原浅刮巢旁，巢内恰好有五枚分开的白卵，没有枝条、雏鸟或第二只鸮',
          title: '地面浅巢中的五枚卵',
          caption:
            '五枚卵落在 3 至 11 枚的通用范围内，只代表一种可能；窝卵数、孵化和育幼结果受猎物与天气影响。',
          focalPoint: { x: 0.52, y: 0.58 },
        },
        {
          image: './images/species/snowy-owl/06-distance-winter-monitoring.webp',
          alt: '开阔冬季海岸沙丘左侧，两名小型观察者使用一台三脚架望远镜和记录册，远处右侧只有一只完整雪鸮',
          title: '把开阔距离留给越冬个体',
          caption:
            '远距观察能减少反复惊飞；单次记录不能确定个体来源、停留时间、数量变化或全球趋势。',
          focalPoint: { x: 0.58, y: 0.53 },
        },
      ],
    },
    sources: [
      ...SNOWY_OWL_SOURCES,
      {
        title: 'GBIF: Bubo scandiacus (Linnaeus, 1758) nomenclatural record',
        url: 'https://www.gbif.org/species/5959143',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: SNOWY_OWL_CONTENT_DATE,
    updatedAt: SNOWY_OWL_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
