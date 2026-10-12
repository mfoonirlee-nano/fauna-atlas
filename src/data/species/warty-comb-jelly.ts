import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const WARTY_COMB_JELLY_SOURCE_DATE = '2026-08-31' as const;

const WARTY_COMB_JELLY_CONTENT_DATE = '2026-08-31' as const;

const WARTY_COMB_JELLY_SOURCES = [
  {
    title: 'WoRMS — Mnemiopsis leidyi A. Agassiz, 1865 (AphiaID 106401)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=106401',
    kind: 'taxonomy',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — Classification for AphiaID 106401',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/106401',
    kind: 'taxonomy',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — Vernacular names for AphiaID 106401',
    url: 'https://www.marinespecies.org/rest/AphiaVernacularsByAphiaID/106401',
    kind: 'taxonomy',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — Distribution records for AphiaID 106401',
    url: 'https://www.marinespecies.org/rest/AphiaDistributionsByAphiaID/106401',
    kind: 'distribution',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'ITIS — Mnemiopsis leidyi, TSN 53917',
    url: 'https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=53917',
    kind: 'taxonomy',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title:
      'IUCN Red List species search — Mnemiopsis leidyi, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Mnemiopsis%20leidyi&searchType=species',
    kind: 'conservation',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title:
      'IUCN MedMIS — Warty comb jelly identification and invasive-species profile',
    url: 'https://iucn-medmis.org/en/species/mnemiopsis-leidyi',
    kind: 'general',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Smithsonian Ocean — The Sea Walnut, Mnemiopsis leidyi',
    url: 'https://ocean.si.edu/ocean-life/invertebrates/sea-walnut-mnemiopsis-leidyi',
    kind: 'distribution',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Ryan et al. 2013 — The genome of the ctenophore Mnemiopsis leidyi',
    url: 'https://doi.org/10.1126/science.1242592',
    kind: 'general',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title:
      'Dong et al. 2026 — Organization of the ctenophore tentacular apparatus',
    url: 'https://doi.org/10.1016/j.isci.2026.115508',
    kind: 'general',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title:
      'Schnitzler et al. 2012 — Photoprotein genes and Mnemiopsis photocytes',
    url: 'https://doi.org/10.1186/1741-7007-10-107',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title:
      'Colin et al. 2010 — Stealth predation and feeding-current hydrodynamics',
    url: 'https://doi.org/10.1073/pnas.1003170107',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Rapoza et al. 2005 — Life-stage dependent prey capture',
    url: 'https://doi.org/10.1093/plankt/fbi065',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Sullivan & Gifford 2007 — Larval feeding on microplankton',
    url: 'https://doi.org/10.1093/plankt/fbm071',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title:
      'Burrell & Van Engel 1976 — Predation by and distribution of Mnemiopsis in the York River estuary',
    url: 'https://doi.org/10.1016/0302-3524(76)90057-8',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Decker et al. 2004 — Low dissolved oxygen and predation on copepods',
    url: 'https://doi.org/10.3354/meps280163',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Javidpour et al. 2020 — Cannibalism under unfavorable conditions',
    url: 'https://doi.org/10.1038/s42003-020-0940-2',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Jaspers et al. 2011 — Salinity effects on reproduction',
    url: 'https://doi.org/10.1371/journal.pone.0024065',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title:
      'Sasson & Ryan 2016 — Effects of body size and self-fertilization on spawning',
    url: 'https://doi.org/10.7717/peerj.1846',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Fuentes et al. 2017 — Mnemiopsis leidyi in the northern Adriatic',
    url: 'https://doi.org/10.1016/j.seares.2017.04.010',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Jaspers et al. 2015 — Carbon content and egg production capacity',
    url: 'https://doi.org/10.1093/plankt/fbu102',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Ghabooli et al. 2013 — Mediterranean invasion pathways',
    url: 'https://doi.org/10.1371/journal.pone.0081067',
    kind: 'distribution',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title:
      'Reusch et al. 2010 — Microsatellite evidence for two transatlantic invasions',
    url: 'https://doi.org/10.1111/j.1365-294X.2010.04701.x',
    kind: 'distribution',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Jaspers et al. 2021 — Whole-genome invasion genomics',
    url: 'https://doi.org/10.1073/pnas.2116211118',
    kind: 'distribution',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Shiganova 1998 — Black Sea invasion and pelagic community change',
    url: 'https://doi.org/10.1046/j.1365-2419.1998.00080.x',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Gücü 2002 — Overfishing and establishment in the Black Sea',
    url: 'https://doi.org/10.1006/ecss.2000.0657',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Daskalov et al. 2007 — Black Sea trophic cascades and regime shifts',
    url: 'https://doi.org/10.1073/pnas.0701100104',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'Finenko et al. 2003 — Beroe ovata impact on Mnemiopsis and zooplankton',
    url: 'https://doi.org/10.1093/plankt/25.5.539',
    kind: 'ecology',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
  {
    title: 'IMO — Ballast Water Management Convention and Guidelines',
    url: 'https://www.imo.org/en/ourwork/environment/pages/bwmconventionandguidelines.aspx',
    kind: 'general',
    accessedAt: WARTY_COMB_JELLY_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-mnemiopsis-leidyi',
    slug: 'warty-comb-jelly',
    names: {
      zh: '淡海栉水母',
      en: 'Warty Comb Jelly',
      aliases: ['海胡桃', 'Sea Walnut', 'American Comb Jelly'],
    },
    scientificName: 'Mnemiopsis leidyi',
    taxonomy: animalTaxonomy(
      taxon('Ctenophora', '栉水母动物门'),
      taxon('Tentaculata', '触手纲'),
      taxon('Lobata', '兜水母目'),
      taxon('Bolinopsidae', '蛸水母科'),
      taxon('Mnemiopsis', '长瓣水母属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['北美洲', '南美洲', '欧洲', '亚洲'],
      regions: [
        '西大西洋美洲沿岸原生范围',
        '黑海、亚速海、马尔马拉海与里海入侵水域',
        '地中海入侵水域',
        '北海、波罗的海及邻近欧洲水域',
      ],
      countries: [
        '美国',
        '墨西哥',
        '阿根廷',
        '保加利亚',
        '罗马尼亚',
        '土耳其',
        '乌克兰',
        '俄罗斯',
        '意大利',
        '法国',
        '西班牙',
        '以色列',
        '丹麦',
        '德国',
        '瑞典',
        '挪威',
      ],
      range:
        '原生于西大西洋美洲沿岸；传统接受种口径从美国马萨诸塞州延伸至阿根廷。1980 年代初在黑海出现后扩散至亚速海、里海、地中海、北海、波罗的海及邻近欧洲水域。遗传资料支持南、北欧洲至少两条跨大西洋入侵路径和部分二次扩散，不能把全部域外种群画成从黑海出发的一条路线。国家只列有来源支持的代表，不是完整清单。',
      center: { lat: 37.3, lng: -76.5 },
    },
    habitats: [
      {
        name: '近岸与河口水柱',
        realm: 'marine',
        description:
          '本种在海湾、河口和近岸浅水中浮游生活，可进入明显半咸水；中文名里的“淡海”不表示它属于淡水动物。',
        isPrimary: true,
      },
      {
        name: '海湾、潟湖与港池',
        realm: 'marine',
        description:
          '温度、食物、盐度和水动力共同控制季节聚集；一次高密度记录不能证明全年保持暴发状态。',
      },
      {
        name: '半封闭咸淡水海域',
        realm: 'marine',
        description:
          '黑海、里海和波罗的海等入侵水域可支持种群，但低盐会显著限制产卵，分布记录不能改写成无条件盐度耐受。',
      },
    ],
    measurements: {
      length: {
        min: 7,
        max: 12,
        unit: 'cm',
        note:
          'IUCN MedMIS 的近似辨识长度，按含口叶的完整体长理解；不是全球成体上下限。北亚得里亚海 2016 年样本包含多个阶段，实测总长 2.0 至 13.5 厘米。',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '桡足类与其他中型浮游动物',
        '纤毛虫、轮虫等微型浮游生物',
        '软体动物、环节动物和藤壶幼体',
        '鱼卵与鱼苗',
        '同种幼体',
      ],
      description:
        '耳状突起的纤毛产生低扰动进食水流，把猎物送入两片口叶之间并接触带黏着细胞的细触枝；幼体和成体使用的捕食结构及食物尺度会随发育改变。它是主动巡游的广食性捕食者，不是被动滤食器。',
    },
    activity: [
      '用八列纤毛栉板推进身体，环境光可在栉板上形成移动的衍射虹彩',
      '耳状突起上的纤毛建立低扰动进食水流，细触枝和食物沟捕获并输送猎物',
      '光细胞受刺激后可沿经向管附近产生蓝色至蓝绿色生物发光',
      '同时产生卵和精子并把配子释放入水，能够自体受精，也可异体受精',
      '在适宜温盐和食物条件下快速繁殖，低盐会明显限制产卵',
    ],
    tags: [
      '栉水母动物门',
      '海胡桃',
      '八列栉板',
      '口叶捕食',
      '低扰动进食水流',
      '虹彩衍射',
      '蓝绿色生物发光',
      '雌雄同体',
      '自体受精',
      '西大西洋原生种',
      '欧亚入侵种',
      '压载水路径',
      'IUCN 未评估',
    ],
    summary:
      '原生于西大西洋河口的胶质浮游捕食者：八列栉板负责游泳并在日光下产生虹彩，口叶间的低扰动水流则把浮游猎物送向细触枝。',
    description:
      '淡海栉水母属于栉水母动物门，并非刺胞动物门的真水母。透明侧扁身体由两片宽口叶、四个耳状突起和八列栉板构成；2026 年解剖研究显示，成体没有两条自由拖曳的典型主触手，过去所谓“主触手”其实是产生细触枝的折叠扇状结构。白天栉板上的彩虹来自环境光衍射，黑暗中受刺激出现的蓝色至蓝绿色光才是光细胞发出的生物光。本种原生西大西洋美洲沿岸，后经至少两条跨大西洋路径进入黑海、里海、地中海和北欧水域。它的高密度暴发会强化浮游捕食压力，但黑海渔业与食物网变化还涉及过度捕捞、富营养化和既有生态退化。IUCN Red List 当前没有全球评估；NE 只表示未评估，不代表无危、数量稳定或没有管理风险。',
    storySections: [
      {
        key: 'comb-jelly-not-jellyfish',
        label: '身份纠误',
        title: '八列栉板与口叶组成的透明身体',
        body: '淡海栉水母属于栉水母动物门，不是刺胞动物门的真水母。它没有钟形伞和刺丝囊，透明身体由两片宽口叶、四个耳状突起和八列栉板构成。2026 年显微解剖研究还发现，成体缺少两条自由拖曳的典型主触手，所谓“主触手”是一把折叠的细触枝扇；幼体才带自由伸展的长触手。中文名里的“淡海”也不表示淡水生活，WoRMS 将它标记为海水与半咸水物种。',
      },
      {
        key: 'cilia-rainbow-and-blue-light',
        label: '栉板与光',
        title: '日光虹彩与生物发光来源不同',
        body: '八列栉板由成排纤毛组成，拍动时推进身体；环境光被栉板衍射，会形成沿身体移动的虹彩，即使动物没有发光也能看见。真正的生物发光由经向管附近的光细胞产生，机械刺激可触发蓝色至蓝绿色光波。虹彩不证明光细胞正在工作。',
      },
      {
        key: 'stealth-feeding-current',
        label: '隐蔽捕食',
        title: '一股低扰动水流把猎物送进口叶之间',
        body: '耳状突起上的纤毛形成平缓的进食水流，让微型浮游生物、桡足类和鱼类早期阶段在尚未强烈逃逸前进入两片口叶之间，再由细触枝与食物沟捕获和输送。不同发育阶段使用的结构与猎物尺度会改变。它是广食性捕食者，不是鲸类式滤食者；机制实验中的猎物尺寸也不是刚性筛孔。',
      },
      {
        key: 'hermaphrodite-direct-life-cycle',
        label: '繁殖与发育',
        title: '同一身体产生卵和精子，没有水螅世代',
        body: '淡海栉水母是同时性雌雄同体，能自体受精，也可在有同伴时异体受精。配子释放入水，胚胎发育为带两根幼体触手的 cydippid 幼体，再重塑为具有口叶的成体；没有水螅体、横裂体或碟状幼体。自交只是能力，配对实验提示自交后代的发育比例可能较低；单日 13,512 枚卵也只是北亚得里亚海特定培养条件下的一只最高值。',
      },
      {
        key: 'two-invasion-routes-black-sea',
        label: '跨洋入侵',
        title: '欧洲的种群至少沿两条路径抵达',
        body: '本种原生于西大西洋美洲沿岸，1980 年代初在黑海出现。遗传资料把南部欧亚种群与墨西哥湾来源及黑海二次扩散联系起来，也把北海、波罗的海种群连向美国东北部；地中海还可能接受过多次输入。压载水是最可信的跨洋载体，但研究无法为每个海域还原一艘具体船或一个精确抵达日。',
      },
      {
        key: 'manage-pathways-not-release-predators',
        label: '管理边界',
        title: '减少转运并长期监测食物网',
        body: '黑海的淡海栉水母暴发与过度捕捞、富营养化和食物网变化交织。管理重点是压载水合规、港口与沿岸早期检测、减少营养盐输入及维持可持续渔业；广泛建立后的大范围根除很困难。Beroe ovata 出现后曾压低当地淡海栉水母，但这场历史入侵不是未经生态风险评估即可复制的生物防治方案，也不能用单一物种解释整场渔业变化。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1865 年的命名与 1982 年黑海记录',
        body: 'A. Agassiz 于 1865 年命名淡海栉水母，现用学名为 Mnemiopsis leidyi。它原生于西大西洋；1982 年是黑海首次发现或记录的年份，尚不能锁定跨洋抵达的日期。中文名“淡海”也不表示淡水生活，它主要利用海水与半咸水。',
      },
    ],
    keyFacts: [
      '当前接受名是 Mnemiopsis leidyi A. Agassiz, 1865，WoRMS AphiaID 106401，ITIS TSN 53917。',
      '分类链为动物界、栉水母动物门、触手纲、兜水母目、蛸水母科、长瓣水母属。',
      '常用英文名有 Warty Comb Jelly、Sea Walnut 和 American Comb Jelly。',
      '“淡海”不是淡水指示；WoRMS 标记本种生活于海水与半咸水，不标淡水。',
      '身体有两片大口叶、四个耳状突起、四条食物沟和八列纵向栉板。',
      '2026 年研究显示成体没有两条自由拖曳的典型主触手，细触枝由折叠扇状结构产生并沿食物沟运输。',
      '7 至 12 厘米是 IUCN MedMIS 的近似辨识体长，不是全球成体上下限。',
      '栉板的彩虹色来自环境光衍射，不是生物发光。',
      '真正的蓝色至蓝绿色发光由经向管附近光细胞产生，可受机械刺激触发。',
      '基因组研究鉴定到至少十个完整光蛋白基因，但这不表示十条栉列各自只有一个发光基因。',
      '耳状突起纤毛建立低扰动进食水流，将猎物送入两片口叶之间。',
      '食物包括微型浮游生物、桡足类及其他中型浮游动物、无脊椎幼体、鱼卵和鱼苗。',
      '食物短缺时较大个体可摄食同种幼体，但证据不支持成体同体型搏斗叙事。',
      '本种为同时性雌雄同体，可以自体受精；自交不是已证明的首选方式。',
      '配子释放到水中，没有亲代育幼，也没有水螅体、横裂体和碟状幼体。',
      '北亚得里亚海实验的单只单日最高产卵数为 13,512，地点、20 至 22°C 和盐度 37 至 38 的条件不能省略。',
      '原生于西大西洋美洲沿岸，传统接受种口径从马萨诸塞州至阿根廷。',
      '1982 是黑海首次发现或记录年份，不是已经锁定的精确抵达年份。',
      '遗传资料支持南部与北部欧洲至少两条跨大西洋入侵路径。',
      '黑海暴发强化了浮游食物网冲击，但渔业衰退同时涉及过度捕捞、富营养化和既有状态变化。',
      'IUCN Red List 当前没有正式评估；NE 不代表无危、数量稳定或没有威胁。',
    ],
    threats: [
      '船舶压载水与区域航运造成跨海域转运和重复输入；这是扩散驱动，不是灭绝威胁',
      '过度捕捞和富营养化可削弱食物网韧性，为半封闭水域的胶质捕食者暴发创造条件',
      '一旦在连通的沿岸水体广泛建立，大范围根除通常缺少可行、物种特异且低副作用的手段',
      '物种边界、低密度季节阶段和胶质体网采损伤使早期检测与趋势估算困难',
    ],
    conservationActions: [
      '执行船舶压载水和沉积物管理，减少活体跨海域转运及重复输入',
      '在港口、潟湖、河口和邻近外海开展标准化网采、影像、环境 DNA 与温盐氧联合监测',
      '建立快速报告与凭证保存流程，以照片、标本和分子数据复核新地点记录',
      '减少富营养化并维持可持续渔业，增强食物网对外来胶质捕食者的韧性',
      '不把 Beroe ovata 的历史入侵结果解释为未经风险评估即可投放天敌',
    ],
    metrics: {
      adultLengthCm: [7, 12],
    },
    featuredStats: [
      {
        key: 'comb-rows',
        label: '纵向栉板',
        value: '8',
        unit: '列',
        note: '成体的基本形态结构；彩虹来自衍射，不等于八条发光器官。',
      },
      {
        key: 'identification-length',
        label: '近似辨识体长',
        value: '7—12',
        unit: '厘米',
        note: 'IUCN MedMIS 的近似范围，不是全球成体上下限；按含口叶的完整体长理解。',
      },
      {
        key: 'adriatic-daily-eggs',
        label: '单日最高产卵',
        value: '13,512',
        unit: '枚',
        note: '北亚得里亚海 2016 年采集个体在 20 至 22°C、盐度 37 至 38 的实验最高值，不是典型日产量。',
      },
      {
        key: 'black-sea-first-record',
        label: '黑海首次记录',
        value: '1982',
        unit: '年',
        note: 'Smithsonian 的发现年份，不代表已经锁定精确引入日期。',
      },
    ],
    media: {
      image:
        './images/species/warty-comb-jelly/01-western-atlantic-estuary-cover.webp',
      alt: '西大西洋半咸水河口中，一只完整透明的淡海栉水母位于右侧，宽口叶朝下方展开，左侧保留深绿色开阔水体',
      focalPoint: { x: 0.71, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/warty-comb-jelly/02-lobes-and-comb-rows-diagnostic.webp',
          alt: '一只完整淡海栉水母的侧面近景展示两片宽口叶、四个较小耳状突起、纵向栉列和透明体内的浅淡经向管',
          title: '口叶、耳状突起与栉列',
          caption:
            'AI生成原创形态情景；画面可解释口叶、耳状突起和相机可见的栉列，却不能替代凭证标本、经向管检查、分类检索或分子鉴定。',
          focalPoint: { x: 0.52, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/warty-comb-jelly/03-ciliary-rainbow-daylight.webp',
          alt: '日光水层中，一只完整透明淡海栉水母的部分纵向栉板出现狭窄而断续的彩虹反光，身体本身没有发光',
          title: '日光照上纤毛形成的虹彩',
          caption:
            'AI生成原创光学情景；彩色细线表示环境光在栉板纤毛上的衍射，不是生物发光，静帧也不能测出纤毛拍频或游速。',
          focalPoint: { x: 0.51, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/warty-comb-jelly/04-blue-green-bioluminescence.webp',
          alt: '深蓝暗水中，一只完整淡海栉水母的栉列下方出现稀疏不连续的蓝绿色光点和短光带，画面没有彩虹色',
          title: '光细胞发出的蓝绿色光',
          caption:
            'AI生成原创发光情景；局部蓝绿色光重建光细胞受刺激后的可见现象，不表示日光衍射，也不能测量亮度、持续时间、刺激阈值、野外频率或功能。',
          focalPoint: { x: 0.57, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/warty-comb-jelly/05-stealth-copepod-feeding.webp',
          alt: '蓝绿色河口水中，一只完整淡海栉水母张开口叶朝向六只彼此分离的微小桡足类，细弱粒子轨迹指向口叶间的水隙，猎物均未接触身体',
          title: '桡足类尚未察觉的低扰动水流',
          caption:
            'AI生成原创摄食情景；六只桡足类和稀疏粒子只解释猎物接近口叶的机制，不能测量流速、相遇率、捕获效率、自然猎物密度或固定食谱。',
          focalPoint: { x: 0.67, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/warty-comb-jelly/06-optical-plankton-monitoring.webp',
          alt: '一台无标识水下光学成像装置从左侧投出柔和薄光片，与右侧一只完整透明淡海栉水母隔着清楚水隙进行非接触观察',
          title: '保持距离的光学浮游生物监测',
          caption:
            'AI生成原创监测情景；通用装置与单只动物不能确认黑海或任何地点、物种鉴定、一次检出、丰度、分布或种群趋势，调查还需校准取样体积并保存凭证。',
          focalPoint: { x: 0.64, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...WARTY_COMB_JELLY_SOURCES,
      {
        title: 'GBIF: Mnemiopsis leidyi A.Agassiz, 1865 nomenclatural record',
        url: 'https://www.gbif.org/species/2501248',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: WARTY_COMB_JELLY_CONTENT_DATE,
    updatedAt: WARTY_COMB_JELLY_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
