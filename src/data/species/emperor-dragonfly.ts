import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const EMPEROR_DRAGONFLY_SOURCE_DATE = '2026-08-28' as const;

const EMPEROR_DRAGONFLY_CONTENT_DATE = '2026-08-28' as const;

const EMPEROR_DRAGONFLY_SOURCES = [
  {
    title: 'GBIF / Catalogue of Life: Anax imperator',
    url: 'https://www.gbif.org/species/5051775',
    kind: 'taxonomy',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'NCBI Taxonomy Browser: Anax imperator',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?name=Anax+imperator',
    kind: 'taxonomy',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Odonata Central: World Odonata List',
    url: 'https://www.odonatacentral.org/app/#/wol/',
    kind: 'taxonomy',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Natural History Museum UK Species Inventory: Anax imperator',
    url: 'https://www.nhm.ac.uk/our-science/data/uk-species/taxon?tvk=NBNSYS0000005630',
    kind: 'taxonomy',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: '嵇保中《昆虫生殖系统》目录: 帝王蜻蜓 Anax imperator',
    url: 'https://www.ecsponline.com/book/2016/yz/9787030407573-001001-curved-sam-v001.pdf',
    kind: 'general',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'British Dragonfly Society: Emperor Dragonfly',
    url: 'https://british-dragonflies.org.uk/species/emperor-dragonfly/',
    kind: 'general',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Natural History Museum: Dragonflies, the ultimate hunters',
    url: 'https://www.nhm.ac.uk/discover/dragonflies-the-ultimate-hunters.html',
    kind: 'general',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Mitra 2016: IUCN global assessment of Anax imperator',
    url: 'https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T59812A72311295.en',
    kind: 'conservation',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'SANBI Species Status mirror: Anax imperator global assessment',
    url: 'https://speciesstatus.sanbi.org/assessment/last-assessment/1607/',
    kind: 'conservation',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Vinko et al. 2024: IUCN European assessment of Anax imperator',
    url: 'https://doi.org/10.2305/IUCN.UK.2024-1.RLTS.T59812A208815239.en',
    kind: 'conservation',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Clement et al. 2022: Phylogeny, migration and geographic range size evolution of Anax dragonflies',
    url: 'https://academic.oup.com/zoolinnean/article/194/3/858/6343162',
    kind: 'taxonomy',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Minot et al. 2019: Biometry of Anax imperator from larval development to adults',
    url: 'https://doi.org/10.14411/eje.2019.031',
    kind: 'general',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Corbet 1955: Synchronization of emergence in Anax imperator',
    url: 'https://doi.org/10.1038/175338b0',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Corbet 1956: Environmental factors influencing diapause in Anax imperator',
    url: 'https://doi.org/10.1242/jeb.33.1.1a',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Cayrou and Céréghino 2005: Life-cycle phenology of Anax imperator in artificial ponds',
    url: 'https://doi.org/10.1002/aqc.739',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Preuss et al. 2024: Cuticular tanning supports dragonfly emergence',
    url: 'https://doi.org/10.1098/rsfs.2023.0076',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Consiglio 1976: Territorial behaviour of Anax imperator',
    url: 'https://natuurtijdschriften.nl/pub/591350',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Minot et al. 2021: Habitat use and movements of Anax imperator in a pond network',
    url: 'https://doi.org/10.1111/fwb.13632',
    kind: 'distribution',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Minot and Husté 2022: Population genetics of Anax imperator across European sites',
    url: 'https://doi.org/10.3390/d14020068',
    kind: 'distribution',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Cloarec 1977: Feeding of Anax imperator larvae in the wild',
    url: 'https://natuurtijdschriften.nl/pub/591417',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Quenta Herrera et al. 2018: Temperature effects on ballistic prey capture by Anax imperator larvae',
    url: 'https://doi.org/10.1002/ece3.3975',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Stav et al. 2007: Direct and indirect effects of Anax imperator nymphs on tadpoles',
    url: 'https://doi.org/10.1007/s10750-006-0388-5',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Josten et al. 2022: Functional morphology of adult feeding in Anax imperator',
    url: 'https://doi.org/10.1002/jmor.21497',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-anax-imperator',
    slug: 'emperor-dragonfly',
    names: {
      zh: '皇帝蜻蜓',
      en: 'Emperor Dragonfly',
      aliases: ['帝王蜻蜓', '帝王伟蜓', 'Blue Emperor'],
    },
    scientificName: 'Anax imperator',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Insecta', '昆虫纲'),
      taxon('Odonata', '蜻蜓目'),
      taxon('Aeshnidae', '蜓科'),
      taxon('Anax', '伟蜓属'),
    ),
    conservation: conservation('LC', 'stable', 2015),
    distribution: {
      realms: ['freshwater', 'terrestrial'],
      continents: ['欧洲', '非洲', '亚洲'],
      countries: [
        '英国',
        '法国',
        '西班牙',
        '德国',
        '瑞典',
        '土耳其',
        '摩洛哥',
        '阿尔及利亚',
        '肯尼亚',
        '南非',
        '沙特阿拉伯',
        '也门',
        '哈萨克斯坦',
        '印度',
      ],
      regions: [
        '欧洲大部及近几十年的北扩区域',
        '北非和撒哈拉以南非洲',
        '阿拉伯半岛',
        '西南亚和中亚',
        '印度的零散记录区域',
      ],
      range:
        '分布从整个非洲延伸到欧洲大部、阿拉伯半岛、西南亚、中亚和印度部分地区；欧洲北缘近几十年向北扩展。所列国家只是范围中的代表。',
      center: { lat: 32, lng: 20 },
    },
    habitats: [
      {
        name: '阳光充足且植被丰富的池塘和湖泊',
        realm: 'freshwater',
        description:
          '开阔水面与沉水、浮叶、挺水植物并存，为幼虫提供隐蔽和猎物，为雌虫提供产卵组织，也为末龄幼虫提供羽化支点。',
        isPrimary: true,
      },
      {
        name: '缓流河段、运河和河流回水',
        realm: 'freshwater',
        description:
          '可利用水流较缓且岸线植被发育的运河、河段和回水区；不把急流主河道列为典型生境。',
      },
      {
        name: '水库、采石坑和人工池塘',
        realm: 'freshwater',
        description:
          '蓄水池、恢复后的采石坑和花园池塘等人工水体也可支持繁殖，前提是保有合适水期、水质和植被结构。',
      },
      {
        name: '池岸草地、篱带和树丛',
        realm: 'terrestrial',
        description:
          '成虫在水体周边的陆地景观成熟、休息、空中觅食并在池塘之间移动；观察到成虫不等于水体内已经繁殖。',
      },
    ],
    measurements: {
      length: {
        typical: 78,
        unit: 'mm',
        note:
          'British Dragonfly Society 的识别用典型值。诺曼底研究中成熟雄虫和雌虫均值分别为 77.2 ± 2.3 mm 与 72.9 ± 2.3 mm；这些地区样本均值不是全球范围。',
      },
      wingspan: {
        typical: 10.5,
        unit: 'cm',
        note:
          'Natural History Museum 给出的英国物种识别值，不宣称全球平均或极值。',
      },
    },
    diet: {
      types: ['carnivore', 'insectivore'],
      foods: [
        '蜉蝣、豆娘、石蛾和摇蚊等水生昆虫幼体',
        '小型甲壳动物等水生无脊椎动物',
        '蝌蚪等条件性脊椎动物猎物',
        '摇蚊、蝇类和其他飞行昆虫',
        '其他蜻蜓等机会性大型飞虫',
      ],
      description:
        '幼虫在水中用可伸出的捕捉面罩伏击多种水生猎物，成虫在空中用六足截获飞虫后以咀嚼式口器处理。野外食谱随地点、季节、猎物大小和可获得性变化；蝌蚪捕食和实验室家蝇摄食不能解释为全球主要食物比例。',
    },
    activity: [
      '雄虫在繁殖水体上巡逻和驱赶同类',
      '雌虫单独把卵插入水生植物组织',
      '成虫在空中追踪和截获飞虫',
      '成虫在池塘网络和周边陆地间移动',
      '水生幼虫伏击水生猎物',
      '末龄幼虫爬出水面羽化',
    ],
    tags: [
      '蜻蜓目',
      '蜓科',
      '淡水幼虫',
      '空中捕食',
      '不完全变态',
      '内生式产卵',
      '池塘网络',
      '广布种',
      'IUCN无危',
    ],
    summary:
      '横跨非洲、欧洲和亚洲的大型蜓科捕食者，幼虫生活在植被丰富的淡水中，雄虫常以蓝腹绿胸在池面巡逻。',
    description:
      '皇帝蜻蜓是蜓科伟蜓属的大型蜻蜓，典型成虫体长约 78 毫米，英国识别资料记录翅展约 10.5 厘米。成熟雄虫常见苹果绿色胸部、蓝色腹部和连续深色背线，雌虫多为绿色或蓝绿色，但颜色存在重叠。雌虫把卵插入水生植物组织，水生幼虫用可伸出的捕捉面罩猎取多种无脊椎动物，末龄幼虫爬上挺水植物后直接羽化，没有蛹期。成虫在空中捕食飞虫，雄虫可巡逻池面，雌虫会进入周边陆地和池塘网络。本种分布于非洲、欧洲、阿拉伯半岛、西南亚、中亚和印度部分地区；全球 IUCN 评估为无危且趋势稳定，欧洲区域种群正在增加。局地水体破坏、污染和一次性清除全部水草仍会损害繁殖地。',
    storySections: [
      {
        key: 'name-and-four-wings',
        label: '名字与谱系',
        title: '四片膜质翅的现生蜻蜓',
        body: '皇帝蜻蜓属于蜻蜓目、蜓科、伟蜓属。成虫有四片能分别控制的膜质翅。蜻蜓目是现生有翅昆虫中较早分化的一支，现生物种仍在演化。',
      },
      {
        key: 'blue-male-green-female',
        label: '颜色与识别',
        title: '常见的蓝腹雄虫与绿腹雌虫',
        body: '成熟雄虫常见蓝色腹部和连续深色背线，雌虫常见绿色或蓝绿色腹部与较宽褐黑背线，但雌虫也可能发蓝。苹果绿色胸部、黄色翅前缘、相接复眼、四翅和六足需要一起进入识别。',
      },
      {
        key: 'two-worlds-no-pupa',
        label: '水陆生活史',
        title: '水下多次蜕皮，爬上芦苇直接成为成虫',
        body: '雌虫把卵插入水生植物组织，幼虫在水中捕食和生长。末龄幼虫爬出水面，成虫从背部裂口羽化，留下空蜕。过程中没有蛹或茧；发育需一年、两年或更短取决于地区和条件。',
      },
      {
        key: 'underwater-ballistic-mask',
        label: '幼虫捕食',
        title: '幼虫伸出捕捉面罩猎食',
        body: '幼虫把折叠在头下的捕捉面罩迅速伸向猎物。法国 12 只幼虫实验测得 0.03 至 0.25 m/s，温度改变速度，捕获成功更受准确性影响。这个实验区间不能写成全球最高攻击速度。',
      },
      {
        key: 'territory-and-oviposition',
        label: '池面行为',
        title: '雄虫巡池，雌虫独自把卵藏进植物',
        body: '雄虫可在池面巡逻并驱赶闯入者，领地使用却会随个体和时段变化。雌虫通常独自在浮叶植物上产卵，把卵插入组织而非排成水面卵串。成虫还能离开水边，在池塘网络间觅食和移动。',
      },
      {
        key: 'range-expansion-and-pond-network',
        label: '分布与保护',
        title: '保护繁殖池塘及周边陆地',
        body: '本种横跨非洲、欧洲和亚洲，欧洲北缘仍在扩展；全球和欧洲评估均为无危。局地排水、污染和彻底清除水草仍会让一处繁殖地失效。保护池塘网络、水质、植被与周边陆地，比只统计飞过的成虫更有意义。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1815 年的皇帝蜻蜓命名记录',
        body: 'Leach 于 1815 年命名皇帝蜻蜓，现用学名为 Anax imperator。这是现生蜻蜓的物种名称。它的幼虫在水中多次蜕皮，最后爬出水面直接羽化，留下空蜕，生活史没有蛹或茧。欧洲近几十年的记录还显示，它的分布北缘正在向北扩展。',
      },
    ],
    keyFacts: [
      '当前接受学名是 Anax imperator Leach, 1815。',
      '英国识别资料给出的典型成虫体长为 78 mm、翅展为 10.5 cm；二者都不是全球极值。',
      '成虫有四片独立膜质翅、六足、短触角和在头顶大范围相接的复眼。',
      '雄虫常见蓝腹，雌虫常见绿或蓝绿色腹部，但颜色有重叠。',
      '雌虫通常单独把卵插入浮叶或其他水生植物组织。',
      '生命周期为卵、水生幼虫和成虫，属于不完全变态，没有蛹期。',
      'British Dragonfly Society 给出的末龄幼虫长度为 45 至 56 mm。',
      '英国种群的末龄幼虫可发生兼性滞育；发育周期随地区和条件变化。',
      '水生幼虫捕食多种水生无脊椎动物，受控实验还证明可捕食蝌蚪。',
      '成虫在空中截获飞虫，再用咀嚼式口器处理。',
      '诺曼底池塘网络研究中，一只雌虫在距释放池 1,902 m 处被探测到；这不是最大扩散距离。',
      '分布横跨欧洲、非洲和亚洲，欧洲北缘近几十年向北扩展。',
      '全球 IUCN 为 LC、趋势稳定；欧洲区域同为 LC、趋势增长。',
      'CITES 当前未列入本种，不能据此推断地方无保护要求。',
    ],
    threats: [
      '局地湿地排水、填埋和水体重塑会移除繁殖水体',
      '水污染会改变幼虫和猎物群落，全球效应尚未量化',
      '一次性清除全部水生植物会损失产卵、隐蔽和羽化结构',
      '孤立水体和周边陆地结构简化可能削弱池塘网络功能',
      '干旱和水体提前干涸可能缩短局地幼虫可用水期',
    ],
    conservationActions: [
      '保护开阔水面与沉水、浮叶、挺水植物组成的多层结构',
      '控制过度遮阴并保留一部分稳固的挺水羽化基质',
      '分区分年清淤和修剪，避免同时清空整个池塘网络',
      '按当地法规控制污水、营养盐和农药径流',
      '保留池塘之间可供成虫觅食、休息和移动的陆地结构',
      '用蜕壳、幼虫和产卵行为监测繁殖，不只统计飞行成虫',
      '定期复核 IUCN、CITES、区域红色名录和地方湿地规定',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'typical-adult-length',
        label: '典型成虫体长',
        value: '78',
        unit: 'mm',
        note:
          'British Dragonfly Society 的识别值，不宣称全球平均、最小值或最大值。',
      },
      {
        key: 'uk-wingspan',
        label: '英国识别翅展',
        value: '10.5',
        unit: 'cm',
        note: 'Natural History Museum 的英国物种值，不宣称全球极值。',
      },
      {
        key: 'final-instar-length',
        label: '末龄幼虫',
        value: '45–56',
        unit: 'mm',
        note: 'British Dragonfly Society 物种页范围，只指末龄幼虫。',
      },
      {
        key: 'tracked-female-distance',
        label: '单只雌虫追踪距离',
        value: '1,902',
        unit: 'm',
        note:
          'Minot et al. 2021 诺曼底研究中的一只雌虫观测，不是最大扩散或迁徙距离。',
      },
    ],
    media: {
      image:
        './images/species/emperor-dragonfly/01-adult-male-pond-portrait.webp',
      alt: '一只绿胸蓝腹的皇帝蜻蜓成熟雄虫完整停在阳光池塘边的芦苇上',
      focalPoint: { x: 0.7, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/emperor-dragonfly/02-female-pondweed-oviposition.webp',
          alt: '一只绿腹皇帝蜻蜓雌虫独自在浮叶植物组织中产卵',
          title: '藏进植物组织的卵',
          caption:
            '雌虫通常单独进行内生式产卵；卵位于植物组织内，不形成水面裸露卵串。',
          focalPoint: { x: 0.52, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/emperor-dragonfly/03-vegetated-pond-patrol.webp',
          alt: '一只皇帝蜻蜓雄虫在开阔且水生植被丰富的池塘上低空巡逻',
          title: '植被池塘上的巡逻',
          caption:
            '雄虫可在繁殖水体上巡逻；一张飞行图不能证明领地持续时间或当地繁殖成功。',
          focalPoint: { x: 0.7, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/emperor-dragonfly/04-aerial-prey-interception.webp',
          alt: '一只皇帝蜻蜓雄虫在空中接近一只尚未接触的摇蚊',
          title: '接触之前的空中拦截',
          caption:
            '成虫用六足形成捕虫篮截获飞虫；画面停在接触前，不暗示摇蚊占野外食谱的固定比例。',
          focalPoint: { x: 0.67, y: 0.47 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/emperor-dragonfly/05-underwater-final-instar-larva.webp',
          alt: '一只褐绿色皇帝蜻蜓末龄幼虫伏在浅水池塘的沉水植物间',
          title: '水下的末龄捕食者',
          caption:
            '末龄幼虫有六足和短翅芽，没有成虫翅或豆娘式外露尾鳃；捕捉面罩折叠在头下。',
          focalPoint: { x: 0.55, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/emperor-dragonfly/06-emergence-exuvia-on-reed.webp',
          alt: '一个空的皇帝蜻蜓末龄幼虫蜕壳抓附在水面上方的芦苇上',
          title: '羽化留下的空蜕',
          caption:
            '裂开的胸背和空壳记录一次完成的羽化；画面中没有活体成虫、蛹或茧。',
          focalPoint: { x: 0.53, y: 0.48 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: EMPEROR_DRAGONFLY_SOURCES,
    featured: true,
    publishedAt: EMPEROR_DRAGONFLY_CONTENT_DATE,
    updatedAt: EMPEROR_DRAGONFLY_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
