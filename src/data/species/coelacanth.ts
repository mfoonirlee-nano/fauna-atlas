import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const COELACANTH_SOURCE_DATE = '2026-08-25' as const;

const COELACANTH_CONTENT_DATE = '2026-08-25' as const;

const COELACANTH_SOURCES = [
  {
    title: 'IUCN Red List: Latimeria chalumnae (assessment published 2000)',
    url: 'https://doi.org/10.2305/IUCN.UK.2000.RLTS.T11375A3274618.en',
    kind: 'conservation',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'FishBase: Latimeria chalumnae current IUCN field and assessment date',
    url: 'https://www.fishbase.se/summary/Latimeria-chalumnae.html',
    kind: 'conservation',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'Eschmeyer’s Catalog of Fishes: Latimeria chalumnae',
    url: 'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=23925',
    kind: 'taxonomy',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'WoRMS: accepted taxa in Latimeria',
    url: 'https://www.marinespecies.org/aphia.php?p=taxlist&tName=Latimeria',
    kind: 'taxonomy',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'ITIS: Latimeria chalumnae, West Indian Ocean coelacanth',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=649768',
    kind: 'taxonomy',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'CITES: Appendices I, II and III, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries: African Coelacanth species profile',
    url: 'https://www.fisheries.noaa.gov/species/african-coelacanth',
    kind: 'general',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries 2025: Tanzanian DPS of African Coelacanth five-year review',
    url: 'https://www.fisheries.noaa.gov/resource/document/tanzanian-distinct-population-segment-dps-african-coelacanth-5-year-review-2025',
    kind: 'conservation',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'ACEP: Coelacanth Biology',
    url: 'https://www.acep.co.za/content/view/204/161/',
    kind: 'ecology',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'ACEP: Coelacanth FAQs, morphology and evolutionary interpretation',
    url: 'https://www.acep.co.za/content/view/16/194/',
    kind: 'general',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: '中国科学院古脊椎动物与古人类研究所：非洲与印尼拉蒂迈鱼的种界',
    url: 'https://ivpp.cas.cn/xwdt/kyjz/201811/t20181103_5155252.html',
    kind: 'taxonomy',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: '中国政府：矛尾鱼科与矛尾鱼属中文名称口径',
    url: 'https://www.gov.cn/gbgl/b470a262dca84ffe82c8801a395b3f47/files/af474214d05542f3bf33edbdd5a7703c.pdf',
    kind: 'taxonomy',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'Pouyaud et al. 1999: A new coelacanth species supported by genetic and morphological evidence',
    url: 'https://doi.org/10.1016/S0764-4469(99)80061-4',
    kind: 'taxonomy',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'Amemiya et al. 2013: The African coelacanth genome and tetrapod evolution',
    url: 'https://doi.org/10.1038/nature12027',
    kind: 'taxonomy',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'Clement et al. 2024: Coelacanth phylogeny, disparity and evolutionary dynamics',
    url: 'https://doi.org/10.1038/s41467-024-51238-4',
    kind: 'taxonomy',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'Fricke et al. 1987: Locomotion of Latimeria chalumnae in its natural environment',
    url: 'https://doi.org/10.1038/329331a0',
    kind: 'ecology',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'Fricke et al. 1991: Habitat and population size at Grande Comore',
    url: 'https://doi.org/10.1007/BF00007462',
    kind: 'ecology',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'Froese & Palomares 2000: Growth, length-weight relationship and maximum length',
    url: 'https://doi.org/10.1023/A:1007602613607',
    kind: 'ecology',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'Mahé et al. 2021: New scale analyses reveal centenarian African coelacanths',
    url: 'https://doi.org/10.1016/j.cub.2021.05.054',
    kind: 'ecology',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'Lampert et al. 2012: Population divergence in East African coelacanths',
    url: 'https://doi.org/10.1016/j.cub.2012.04.053',
    kind: 'distribution',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'Lampert et al. 2013: Single-male paternity in two coelacanth broods',
    url: 'https://doi.org/10.1038/ncomms3488',
    kind: 'ecology',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'Cooke et al. 2021: Coelacanth discoveries, threats and conservation in Madagascar',
    url: 'https://doi.org/10.17159/sajs.2021/8541',
    kind: 'distribution',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
  {
    title: 'Oliver et al. 2024: Enhancing African coelacanth monitoring using environmental DNA',
    url: 'https://doi.org/10.1098/rsbl.2024.0415',
    kind: 'conservation',
    accessedAt: COELACANTH_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-latimeria-chalumnae',
    slug: 'coelacanth',
    names: {
      zh: '西印度洋矛尾鱼',
      en: 'West Indian Ocean Coelacanth',
      aliases: [
        '腔棘鱼',
        '矛尾鱼',
        '非洲拉蒂迈鱼',
        'African Coelacanth',
        'Coelacanth',
        'Gombessa',
      ],
    },
    scientificName: 'Latimeria chalumnae',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Sarcopterygii', '肉鳍鱼纲'),
      taxon('Coelacanthiformes', '腔棘鱼目'),
      taxon('Latimeriidae', '矛尾鱼科'),
      taxon('Latimeria', '矛尾鱼属'),
    ),
    conservation: conservation('CR', 'unknown', 2000, 'A2bcd'),
    distribution: {
      realms: ['marine'],
      continents: ['非洲'],
      regions: [
        '科摩罗群岛的陡峭火山坡与洞穴',
        '坦桑尼亚、肯尼亚和莫桑比克外海深水阶地与陆坡',
        '南非夸祖鲁-纳塔尔及东开普外海峡谷和深礁',
        '马达加斯加西部和南部陆坡与海底峡谷',
      ],
      countries: ['科摩罗', '肯尼亚', '马达加斯加', '莫桑比克', '南非', '坦桑尼亚'],
      range:
        '现存记录环绕西印度洋西缘，覆盖科摩罗、东非大陆沿岸、南非东岸和马达加斯加。科摩罗、南非、坦桑尼亚及马达加斯加有较强的驻留或繁殖证据；肯尼亚和莫桑比克主要是少量捕获记录，不能据此假定六国种群等量或连续。',
      center: { lat: -13, lng: 43 },
    },
    habitats: [
      {
        name: '深水岩坡、峡谷与阶地',
        realm: 'marine',
        description:
          '常见直接观察集中在约 100 至 250 米的陡坡、海底峡谷、深礁和石灰岩阶地；区域捕获与遥测约扩展至 40 至 700 米。',
        isPrimary: true,
      },
      {
        name: '洞穴、岩棚与裂隙',
        realm: 'marine',
        description:
          '白天用于避流和悬停的庇护空间，可有少数个体共享；同洞不表示稳定家庭、配偶关系或社会等级。',
        isPrimary: true,
      },
      {
        name: '夜间近底觅食坡面',
        realm: 'marine',
        description:
          '黄昏后个体离开庇护处，沿岩坡和邻近近底水层缓慢漂移，寻找深水鱼、鳗形鱼和头足类。',
      },
      {
        name: '邻近软底的陆坡边缘',
        realm: 'marine',
        description:
          '部分拖网和刺网记录来自泥沙底或软底附近，但捕获点不一定等于长期栖息微生境，通常邻近峡谷、礁体或陡坡。',
      },
    ],
    measurements: {
      length: {
        max: 200,
        unit: 'cm',
        note: 'NOAA 与 ACEP 的约数上限；n=87 的资料实测 42.5–183 cm，雌鱼极值模型约 199 cm，不是普通成体范围',
      },
      weight: {
        max: 105,
        unit: 'kg',
        note: 'Cooke 等汇总的坦桑尼亚捕获记录上限；NOAA 概括约 89.8 kg，地区、渔具、性别和怀孕状态会筛选体重',
      },
    },
    diet: {
      types: ['carnivore', 'piscivore'],
      foods: [
        '灯笼鱼、天竺鲷、须鲷等深水和近底鱼类',
        '鳗形鱼及其他细长近底鱼类',
        '乌贼、章鱼和墨鱼等头足类',
      ],
      description:
        '缓慢的夜行漂猎者，借水流接近猎物并用各鳍微调姿态，靠近后快速张口吞咽。胃内容物和现场资料支持鱼类与头足类食谱，但没有全范围固定比例。',
    },
    activity: [
      '白天多在洞穴、岩棚或裂隙内悬停，通常避免身体和肉质鳍接触海床',
      '黄昏后离开庇护处，夜间沿陡坡和近底水层缓慢漂移觅食',
      '可在多个洞穴之间移动并重复返回已用庇护地点',
      '胸鳍与对侧腹鳍交替协调以稳定和转向，受惊时主要靠尾部快速启动',
      '偶尔采用头下尾上的近底搜索姿态，但不以肉质鳍在海床行走',
    ],
    tags: [
      'IUCN 极危',
      '种群趋势未知',
      'CITES 附录 I',
      '肉鳍鱼纲',
      '腔棘鱼目',
      '西印度洋',
      '深水海洋鱼类',
      '夜间漂猎',
      '洞穴庇护',
      '鱼食性',
      '卵黄营养型胎生',
      '极晚成熟',
      '长寿',
      '渔业兼捕',
      '古老演化支系',
    ],
    summary:
      '西印度洋矛尾鱼生活在深水岩坡，白天多在洞穴或岩棚内悬停，夜间缓慢游动觅食。它可能活到近百岁，成熟很晚，深水刺网兼捕对种群威胁很大。',
    description:
      '西印度洋矛尾鱼身体粗壮，成对的鳍有肉质基部，体表散布浅色斑点，尾鳍分成三叶，中央还有一个小叶。它在科摩罗、东非沿岸、南非东岸和马达加斯加有记录，各地是否长期驻留和繁殖，证据程度有所不同。潜水器观察到它白天躲在洞穴或岩棚内，夜间缓慢接近深水鱼、鳗形鱼和头足类。鳞片研究推算其寿命接近一百年，数十年才成熟，妊娠可能接近五年。腔棘鱼支系历史古老，现生物种仍在演化；坦桑尼亚和马达加斯加深置鲨鱼刺网造成的兼捕是明确的人为威胁。',
    storySections: [
      {
        key: 'lineage-still-changing',
        label: '演化',
        title: '古老支系仍在继续演化',
        body: '腔棘鱼类的化石历史可追溯到泥盆纪，化石成员的体型和生活方式很多样。这个支系的身体性状一直在变化，现生西印度洋矛尾鱼内部也有区域种群分化。',
      },
      {
        key: 'two-living-species',
        label: '种界',
        title: '西印度洋与印度尼西亚各有一种',
        body: '矛尾鱼属现存两个有效种：Latimeria chalumnae 分布在西印度洋西缘，L. menadoensis 分布在印度尼西亚。水下灯光会让体色在蓝灰与褐色之间改变，地点、标本和遗传证据比颜色更可靠。',
      },
      {
        key: 'fins-not-feet',
        label: '运动',
        title: '肉质鳍帮助悬停和转向',
        body: '胸鳍和腹鳍以对角方式交替，帮助鱼在水中悬停、转向和保持姿态；受惊时尾部提供短时加速。自然观察没有显示它用鳍端承重行走，反而常避免接触海床。',
      },
      {
        key: 'cave-clock',
        label: '昼夜',
        title: '白天进洞，夜间沿坡觅食',
        body: 'Grande Comore 的个体白天在洞穴内悬停，黄昏后单独离开，沿陡坡和近底水层缓慢觅食。少数鱼共享洞穴只说明庇护空间重叠，不能据此建立家庭、配偶或等级关系。',
      },
      {
        key: 'five-year-gestation',
        label: '繁殖',
        title: '五年妊娠来自鳞片和生长曲线',
        body: '27 份鳞片的细环纹把寿命重估到接近百年，并把成熟年龄推迟到数十年。研究再用出生体长和生长曲线推算妊娠接近五年；这是模型重估，不是从交配到分娩的直接计时。',
      },
      {
        key: 'bycatch-and-monitoring',
        label: '保护',
        title: '减少深水刺网兼捕',
        body: '坦桑尼亚和马达加斯加的深置鲨鱼刺网与矛尾鱼活动深度重叠，还会捕到怀孕雌鱼。保护措施包括限制底层渔具、鼓励渔民报告误捕，以及组合照片识别、水下机器人和环境 DNA 等调查方法，持续评估种群变化。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1938 年，一条渔船带回博物馆的新发现',
        body: '1938 年 12 月 22 日，南非东伦敦的渔船带回一条 不寻常的鱼，博物馆工作人员 Marjorie Courtenay-Latimer 保存并联系鱼类学家 J. L. B. Smith。Smith 于 1939 年正式描述它：属名 Latimeria 纪念 Courtenay-Latimer，种名 chalumnae 来自捕获地附近的 Chalumna 河。科摩罗渔民此前已经认识这种鱼，当地称它为 gombessa；1938 年标本使现生腔棘鱼进入科学描述。',
      },
    ],
    keyFacts: [
      'Catalog of Fishes 当前接受 Latimeria chalumnae Smith, 1939，作者名不加括号。',
      '分类路径为动物界、脊索动物门、肉鳍鱼纲、腔棘鱼目、矛尾鱼科和矛尾鱼属。',
      '矛尾鱼属现存两个有效种；印度尼西亚的 L. menadoensis 不是本种的区域种群。',
      'IUCN 当前为 CR、趋势 unknown、评估年 2000、网页结构化准则 A2bcd。',
      'CITES 以 Latimeria spp. 把整个属列入附录 I；美国 ESA 只把坦桑尼亚 DPS 列为 Threatened。',
      '记录覆盖科摩罗、肯尼亚、马达加斯加、莫桑比克、南非和坦桑尼亚，各地驻留证据不同。',
      '直接观察常集中在约 100 至 250 米，区域捕获和遥测约扩展至 40 至 700 米。',
      '最大体长约 2 米；105 千克是坦桑尼亚区域捕获极值，不是典型成体体重。',
      '配对肉质鳍用于水中稳定和转向，没有被观察为在海床承重行走。',
      '食物包括深水鱼、鳗形鱼和头足类，通常在夜间缓慢漂移接近猎物。',
      'n=27 的鳞片重读支持寿命接近 100 年，雄性约 40 至 69 年、雌性约 58 至 66 年成熟。',
      '约五年妊娠来自生长模型；两窝父权样本各为单父系，不能推出终生配偶制。',
      '当前没有可靠全球成熟个体总数，局部照片识别数和已知标本数不能外推全球。',
      '深置鲨鱼刺网兼捕是坦桑尼亚和马达加斯加有直接记录的主要人为压力。',
    ],
    threats: [
      '坦桑尼亚和马达加斯加约 100 至 300 米深置鲨鱼刺网与矛尾鱼活动深度重叠，造成持续兼捕',
      '科摩罗深水手线、其他底层渔具、偶发拖网和遗失刺网带来额外捕获与未报告死亡',
      '大网目刺网可选择性捕获大型及怀孕雌鱼，极晚成熟和长期妊娠使损失难以补充',
      '坦桑尼亚局部深水港、爆破、疏浚、沉积物和污染输入可能破坏石灰岩阶地与洞穴',
      '区域种群分化、低遗传多样性和低补充率放大随机死亡与局地事件',
      '坦桑尼亚部分保护区内大型刺网禁令执行不足，纸面保护未消除核心渔具威胁',
      '科研和收藏价值可能诱发保留尸体、隐瞒来源或非法跨境移动，尽管没有成熟的定向商业渔业',
    ],
    conservationActions: [
      '在确认占用的深水坡面、峡谷、阶地和洞穴周边执行底层大网目刺网禁用与改具',
      '与渔民共同记录粗略海区、深度、网目、鱼体状态和处置结果，补偿报告与安全改具而非购买尸体',
      '为活体兼捕建立少搬运、少暴露、快速评估和放归流程，并追踪放归后存活而非只计释放次数',
      '组合 ROV、固定摄像、白斑照片识别和标准化 eDNA，分别报告占用、个体重见与 DNA 检出',
      '在深水港、爆破、疏浚和弃土前后开展同方法生境调查、避让与累积影响监测',
      '建立六国共享的捕获清单、照片目录、组织库和遗传标准，跨境材料先完成 CITES 许可',
      '优先采用水样、影像和自然脱落材料等非致死研究方法，不为水族馆或标本展示定向捕捉',
      '公开宽域或模糊网格地图，不发布可让渔具定位洞穴、聚集点或怀孕雌鱼的精确坐标',
      '推动 IUCN 全物种重新评估，纳入现代生活史、区域种群、兼捕趋势和监测不确定性',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'global-iucn-status',
        label: 'IUCN 全球等级',
        value: 'CR',
        unit: '极危',
        note: '2000 年评估，趋势未知，当前网页准则 A2bcd；不是 2026 年新调查',
      },
      {
        key: 'common-observation-depth',
        label: '常见直接观察深度',
        value: '约 100–250',
        unit: '米',
        note: '区域捕获和遥测约为 40 至 700 米，不能当作每尾鱼的固定日程',
      },
      {
        key: 'estimated-lifespan',
        label: '估计寿命',
        value: '约 100',
        unit: '年',
        note: 'n=27 鳞片细环纹与生长模型；样本最高估龄 84 年',
      },
      {
        key: 'estimated-gestation',
        label: '估计妊娠期',
        value: '约 5',
        unit: '年',
        note: '出生体长与生长曲线重估，不是直接连续观察',
      },
    ],
    media: {
      image: './images/species/coelacanth/01-deep-slope-portrait.webp',
      alt: '一尾完整的蓝灰色西印度洋矛尾鱼在深水岩坡前缓慢游动，粗壮身体、不规则浅色斑点、肉质偶鳍和三分叶尾可见',
      focalPoint: { x: 0.62, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/coelacanth/02-lobed-fins-and-three-lobed-tail.webp',
          alt: '一尾完整的西印度洋矛尾鱼侧身游过深蓝海水，成对肉质鳍、两枚背鳍和中央带小叶的三分叶尾清楚可见',
          title: '肉质鳍在水中稳定身体',
          caption:
            '配对鳍用于悬停、转向和姿态调整，不接触海床，也不构成四足动物式步行。',
          focalPoint: { x: 0.5, y: 0.5 },
        },
        {
          image: './images/species/coelacanth/03-steep-cave-slope-habitat.webp',
          alt: '一尾远景西印度洋矛尾鱼悬停在带岩棚和洞口的陡峭深水坡面前，与岩壁保持距离',
          title: '陡坡上的洞穴提供昼间庇护',
          caption:
            '洞穴和岩棚是多地已知的重要庇护结构，但一个场景不能代表六国全部底质或证明洞穴被长期占用。',
          focalPoint: { x: 0.7, y: 0.47 },
        },
        {
          image: './images/species/coelacanth/04-night-drift-foraging.webp',
          alt: '一尾西印度洋矛尾鱼在昏暗夜间沿岩坡缓慢漂游，前方一只小型鱿鱼与它保持距离',
          title: '夜色里沿坡缓慢漂猎',
          caption:
            '接近猎物不等于已经捕获；一只同框鱿鱼也不能量化完整食谱或证明成群围猎。',
          focalPoint: { x: 0.56, y: 0.5 },
        },
        {
          image: './images/species/coelacanth/05-daytime-cave-shelter-group.webp',
          alt: '恰好三尾西印度洋矛尾鱼在宽阔深水洞穴内彼此分离悬停，没有身体或鳍接触海床',
          title: '白天共享一处安静庇护空间',
          caption:
            '同洞只表示昼间空间重叠，不能确定家庭、性别、配偶关系、社会等级或种群大小。',
          focalPoint: { x: 0.55, y: 0.5 },
        },
        {
          image: './images/species/coelacanth/06-rov-video-monitoring.webp',
          alt: '一台无品牌的小型水下 ROV 在深水岩坡旁拍摄一尾保持距离的西印度洋矛尾鱼，画面没有捕捉或接触',
          title: '用无接触影像减少对鱼的打扰',
          caption:
            '一次 ROV 影像只能确认当时视野内的个体；需要照片重见、标准化调查和 eDNA 等证据共同判断占用与变化。',
          focalPoint: { x: 0.6, y: 0.5 },
        },
      ],
    },
    sources: [
      ...COELACANTH_SOURCES,
      {
        title: 'East London Museum: Coelacanth saved for science in 1938',
        url: 'https://elmuseumscience.wordpress.com/2023/12/22/the-coelacanth-saved-for-science-85-years-ago-to-this-day/',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
      {
        title: 'Natural History Museum: Coelacanth discovery and local gombessa name',
        url: 'https://www.nhm.ac.uk/discover/coelacanths-the-fish-that-outdid-the-loch-ness-monster.html',
        kind: 'general',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: COELACANTH_CONTENT_DATE,
    updatedAt: COELACANTH_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
