import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const AUSTRALIAN_LUNGFISH_SOURCE_DATE = '2026-08-31' as const;

const AUSTRALIAN_LUNGFISH_CONTENT_DATE = '2026-08-31' as const;

const AUSTRALIAN_LUNGFISH_SOURCES = [
  {
    title: 'Australian Faunal Directory: Neoceratodus forsteri',
    url: 'https://biodiversity.org.au/afd/taxa/Neoceratodus_forsteri',
    kind: 'taxonomy',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List 2019: Neoceratodus forsteri, EN B2ab(ii,iii)',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T122899816A123382021.en',
    kind: 'conservation',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'DCCEEW 2026: National Recovery Plan for the Australian Lungfish',
    url: 'https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf',
    kind: 'conservation',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'DCCEEW: National Recovery Plan landing page and commencement date',
    url: 'https://www.dcceew.gov.au/environment/biodiversity/threatened/publications/national-recovery-plan-australian-lungfish',
    kind: 'conservation',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'DCCEEW: EPBC listing advice for Neoceratodus forsteri',
    url: 'https://www.dcceew.gov.au/environment/biodiversity/threatened/conservation-advices/neoceratodus-forsteri',
    kind: 'conservation',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Biello et al. 2024: Endemic versus translocated Australian lungfish populations',
    url: 'https://doi.org/10.1111/mec.17266',
    kind: 'distribution',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Hughes et al. 2015: Low diversity and distinct population structure',
    url: 'https://doi.org/10.1371/journal.pone.0121858',
    kind: 'distribution',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Grigg 1965: Aerial respiration in relation to habits',
    url: 'https://doi.org/10.1071/ZO9650413',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Kind, Grigg and Booth 2002: Responses to prolonged aquatic hypoxia',
    url: 'https://doi.org/10.1016/S1569-9048(02)00113-1',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Kemp 1986: The biology of the Australian lungfish',
    url: 'https://doi.org/10.1002/jmor.1051900413',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Kemp 1984: Spawning of the Australian lungfish in the Brisbane River',
    url: 'https://www.museum.qld.gov.au/assets/media/project/qm/qm-website/collections-and-research/memoirs/nature-memoirs/nature-volume-21/mqm-n21-2-7-kemp.pdf',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Espinoza, Marshall and McDougall 2013: A pulse for life',
    url: 'https://doi.org/10.1002/rra.2607',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Fallon et al. 2019: Age structure of the Australian lungfish',
    url: 'https://doi.org/10.1371/journal.pone.0210168',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Watt, Evans and Joss 1999: Electroreception during foraging',
    url: 'https://doi.org/10.1006/anbe.1999.1216',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Tao et al. 2020: Food sources, fatty acids and stable isotopes',
    url: 'https://doi.org/10.1007/s00027-019-0680-x',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Todd et al. 2025: Australian lungfish metapopulation model',
    url: 'https://doi.org/10.3390/fishes10010022',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Meyer et al. 2021: Giant lungfish genome and tetrapod evolution',
    url: 'https://doi.org/10.1038/s41586-021-03198-8',
    kind: 'taxonomy',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Fishes of Australia: Neoceratodus forsteri',
    url: 'https://fishesofaustralia.net.au/home/species/1988',
    kind: 'general',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Australian Museum: Australian Lungfish',
    url: 'https://australian.museum/learn/animals/fishes/australian-lungfish-neoceratodus-forsteri-krefft-1870/',
    kind: 'general',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-neoceratodus-forsteri',
    slug: 'australian-lungfish',
    names: {
      zh: '澳洲肺鱼',
      en: 'Australian Lungfish',
      aliases: [
        'Queensland Lungfish',
        'Burnett River Salmon',
        'Fresh Water Salmon',
        'Ceratodus',
        '昆士兰肺鱼',
      ],
    },
    scientificName: 'Neoceratodus forsteri',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Sarcopterygii', '肉鳍鱼纲'),
      taxon('Ceratodontiformes', '角齿鱼目'),
      taxon('Ceratodontidae', '角齿鱼科'),
      taxon('Neoceratodus', '澳洲肺鱼属'),
    ),
    conservation: conservation('EN', 'stable', 2019, 'B2ab(ii,iii)'),
    distribution: {
      realms: ['freshwater'],
      continents: ['大洋洲'],
      regions: [
        '昆士兰东南部 Burnett、Mary 与 Tinana 水系',
        'Brisbane 与 North Pine 水系',
        'Coomera 水系',
      ],
      countries: ['澳大利亚'],
      endemicTo: ['澳大利亚昆士兰州东南部'],
      range:
        '现存管理单元限于昆士兰东南部六套沿海水系：伯内特（Burnett）、玛丽（Mary）、Tinana、布里斯班（Brisbane）、北派恩（North Pine）和库默拉（Coomera）。Burnett、Mary 与 Tinana 是确认原生种群；Brisbane 和 North Pine 保留原生与历史移殖的混合遗传信号，Coomera 也曾人工引入。它不能借咸水在这些水系间迁移。',
      center: { lat: -26.5, lng: 152.4 },
    },
    habitats: [
      {
        name: '有遮蔽物的永久深潭',
        realm: 'freshwater',
        description:
          '成鱼白天常在超过 1.5 米的永久淡水深潭休息，利用沉木、巨石、下切河岸、岸荫和水草隐蔽；干旱时仍有水的深潭也是避难所。',
        isPrimary: true,
      },
      {
        name: '浅水缓流与短密水草床',
        realm: 'freshwater',
        description:
          '觅食、产卵和幼鱼庇护都依赖浅水河缘。典型产卵带约深 20 至 60 厘米，短水草为单枚黏性卵提供附着面，稳定水温和低流脉冲共同决定繁殖机会。',
        isPrimary: true,
      },
      {
        name: '相连河道、支流与堰池',
        realm: 'freshwater',
        description:
          '成鱼能在水库和堰池生活，却需要相连河道在深潭间移动。深陡岸、水位骤变和水草稀少会压缩补充生境，因此看见成鱼不代表当地能持续繁殖。',
      },
    ],
    measurements: {
      length: {
        max: 1.7,
        unit: 'm',
        note: '2026 年国家恢复计划给出的约数上限；达到这一极端体长的个体已罕见，不是典型成体长度',
      },
      weight: {
        max: 48,
        unit: 'kg',
        note: '2026 年国家恢复计划给出的约数上限；如此体重的个体已少见，不是普通成体体重',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '淡水虾、螯虾等甲壳类',
        '腹足类与双壳类软体动物',
        '水生昆虫幼虫与蠕虫',
        '蝌蚪和小鱼',
      ],
      description:
        '成鱼主要取食甲壳类、螺和双壳类，也吃水生昆虫幼虫、蠕虫、蝌蚪和小鱼。厚重齿板能压碎硬壳，头部感觉系统还能接收活猎物的微弱电场。肠道虽会出现水草、藻类、果实和种荚，消化研究未证明这些植物材料得到利用，因此这里按肉食性记录。',
    },
    activity: [
      '以夜间活动为主，傍晚离开沉木、巨石或水草庇护点觅食',
      '用头部感觉孔接收活猎物的微弱电场，并用齿板压碎带壳猎物',
      '在含氧良好水中主要用鳃呼吸，低氧、活动增强或繁殖时浮到水面吞气',
      '在自然河段对约 1 至 1.5 千米长的家域潭保持较强忠诚，也会随流量事件移动',
      '用肉质偶鳍支撑和调整水下姿态，不能靠它们在陆地行走',
    ],
    tags: [
      '澳大利亚特有种',
      '肉鳍鱼纲',
      '现生唯一属种',
      '永久淡水',
      '单肺',
      '兼性空气呼吸',
      '电感受',
      'IUCN 濒危',
      'EPBC 易危',
      '昆士兰禁止捕取',
      'CITES 附录 II',
    ],
    summary:
      '澳洲肺鱼是昆士兰东南部永久河流中的大型肉鳍鱼，以四对鳃维持常态呼吸，并在低氧或活动增强时启用一个背侧肺。',
    description:
      '澳洲肺鱼具有粗长的橄榄褐色身体、大而重叠的圆鳞、宽扁头部、肉质叶状偶鳍，以及绕过尖尾并接入臀鳍的连续中鳍。它只完成淡水生活史，不会跨过咸水，也不靠夏眠度过彻底干涸。IUCN 在 2019 年把它评为 EN 濒危，种群趋势记录为稳定；澳大利亚 EPBC 与昆士兰州则列为 VU 易危，制度口径不能互相覆盖。野外寿命估计 50 至 80 年，雄鱼约 15 岁、雌鱼约 20 岁才成熟，长寿成鱼会让繁殖补充失败迟到多年才显现。',
    storySections: [
      {
        key: 'one-lung-mostly-gills',
        label: '鳃与单肺',
        title: '一个肺，承担备用氧路',
        body: '澳洲肺鱼只有一个背侧肺，平时在含氧良好水中主要用四对鳃呼吸；低氧、活动增强或繁殖等压力出现时，它会浮到水面吞气，以兼性空气呼吸补充氧气。肺内虽然分成长叶，仍是单个而非左右成对的器官。',
      },
      {
        key: 'fleshy-fins-continuous-tail',
        label: '外形辨识',
        title: '叶状偶鳍之外，还有一条连续中鳍',
        body: '粗厚的胸鳍和腹鳍像叶片或短桨，以较窄的基部接在身体两侧。低矮背鳍从背部中段延伸，绕过尖尾后连续接入臀鳍。它没有脚趾，也不会靠肉质偶鳍在陆地行走。',
      },
      {
        key: 'permanent-water-no-aestivation',
        label: '旱期边界',
        title: '依赖永久淡水，不能在干土中夏眠',
        body: '澳洲肺鱼不夏眠，干泥中不会结茧，也无法承受彻底干燥。历史运输和断流记录显示，湿水草、湿叶或湿泥能暂时维持潮湿微环境；这些特殊情形没有改变它对永久淡水、深潭避难所和河道连通的依赖。',
      },
      {
        key: 'macrophyte-eggs-without-nest',
        label: '卵与水草',
        title: '卵逐枚附着河缘水草',
        body: '雌鱼每次多产 50 至 100 枚、直径约 3 毫米的卵，卵粒多数逐枚黏附在短密的水生植物上，成对偶见而成团少见。本种不筑巢，也无亲代照护；水位骤变、热浪或水草床消失会直接压缩胚胎和幼体的机会。',
      },
      {
        key: 'long-life-masked-recruitment',
        label: '成熟与寿命',
        title: '老成鱼仍在，幼鱼补充可能已减少',
        body: '雄鱼约 15 岁、雌鱼约 20 岁才成熟，野外寿命估计 50 至 80 年。即使连续多年缺少幼鱼，老成鱼仍可能留在深潭里被观察到；判断种群能否延续，需要把幼鱼、年龄结构、产卵水草和水文条件一起监测。',
      },
      {
        key: 'recovery-plan-connectivity',
        label: '恢复与监测',
        title: '六个管理单元，需要能流动的河流',
        body: '2026 年生效的首份国家恢复计划把保护重点放在六个水系的产卵床、幼体区、深潭避难所、环境流量和鱼道连通。它并非 IUCN 红色名录的新版全球评估，也没有把 2019 年状态改写；一次 eDNA 检出或一次成鱼计数同样不能确定数量、繁殖或长期趋势。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1870 年的 Ceratodus forsteri',
        body: '1870 年，Krefft 以 Ceratodus forsteri 命名澳洲肺鱼，后来它被归入新角齿鱼属 Neoceratodus，成为 Neoceratodus forsteri。今天它是澳大利亚唯一现生肺鱼。虽然有肺，平时仍主要用鳃呼吸，并依赖昆士兰东南部的永久淡水。',
      },
    ],
    keyFacts: [
      '当前接受名为 Neoceratodus forsteri (Krefft, 1870)，原组合是 Ceratodus forsteri。',
      'IUCN 使用新角齿鱼科 Neoceratodontidae，澳大利亚动物名录和 2026 年恢复计划采用角齿鱼科 Ceratodontidae。',
      '本种是现生唯一的 Neoceratodus，也是澳大利亚唯一现生肺鱼。',
      'IUCN 当前为 EN、B2ab(ii,iii)、2019 年评估、趋势 stable；EPBC 与昆士兰州等级均为 VU。',
      '昆士兰渔业法规把它列为禁止捕取物种，CITES 将其列入附录 II。',
      '现存六个管理单元是 Burnett、Mary、Tinana、Brisbane、North Pine 与 Coomera 水系。',
      'Burnett、Mary 与 Tinana 是确认原生种群；另外三套水系有不同程度的历史移殖背景。',
      '记录约数上限为 1.7 米和 48 千克，如此大的个体已经少见。',
      '一个背侧肺辅助四对功能性鳃，在含氧良好水中仍以鳃呼吸为主。',
      '本种不夏眠、不筑泥茧，生态上依赖永久淡水；保持潮湿不能等同于耐受完整干燥。',
      '成鱼以甲壳类、螺和双壳类为主食，口内齿板能压碎硬壳。',
      '实验支持它借活猎物微弱电场定位埋藏螯虾，却不支持它自身发电或电击猎物。',
      '卵约 3 毫米，多数逐枚黏附在水草上；本种不筑巢，也不护卵。',
      '胚胎期约 23 至 30 天，从产卵到自由游动可超过 50 天。',
      '雄鱼约 15 岁、雌鱼约 20 岁成熟，野外寿命估计 50 至 80 年。',
      '长寿成鱼可掩盖多年补充失败，目前没有可靠的全物种成熟个体总数。',
    ],
    threats: [
      '水坝、堰和闸坝阻断成鱼移动与基因交流，并减少浅水产卵带',
      '水位骤升骤降或不合季节的放水淹没、暴露或冲刷水草、卵和幼体',
      '干旱、洪水与超过胚胎耐受范围的高温破坏深潭和水草床',
      '清岸、牲畜踩踏、采砂、移除沉木、侵蚀和营养盐输入降低水质与生境结构',
      '外来水草和外来鱼改变光照、溶氧、植被、猎物与幼体生存条件',
      '休闲垂钓误捕、非法捕取、船击和商业采收水草增加直接死亡或繁殖床损失',
      '极低遗传多样性、漫长世代和低幼体存活率让种群难以快速恢复',
    ],
    conservationActions: [
      '识别并保护产卵床、幼体补充区、深潭避难所和原生短水草床',
      '用环境流量维持冬春低流脉冲、适宜水温、水草和河道连接',
      '移除冗余障碍，改造大型成鱼可用的鱼道，并建立溢流和搁浅救援规程',
      '控制外来鱼和外来水草，量化它们对卵、幼体、食物与水草床的影响',
      '通过河岸复植、稳岸、保留沉木和恢复支流水草床增强抗旱、抗洪与降温能力',
      '在六个流域以统一方法结合 eDNA、年龄结构、丰度、健康、遗传和生境指标',
      '维持禁止捕取地位，并让第一民族组织、土地所有者和社区参与长期管理',
    ],
    metrics: {
      lifespanYears: [50, 80],
    },
    featuredStats: [
      {
        key: 'maximum-length',
        label: '记录体长上限',
        value: '约 1.7',
        unit: '米',
        note: '2026 年国家恢复计划约数；如此大的个体已少见，不是普通成体长度',
      },
      {
        key: 'wild-lifespan',
        label: '估计野外寿命',
        value: '50—80',
        unit: '年',
        note: '政府综合口径；放射性碳定年样本为 2.5 至 77 岁，不能当成物种绝对上下限',
      },
      {
        key: 'sex-specific-maturity',
        label: '估计性成熟',
        value: '雄约 15／雌约 20',
        unit: '岁',
        note: '来自成熟体长与生长估算，个体和河流条件会改变年龄关系',
      },
      {
        key: 'embryonic-period',
        label: '胚胎期',
        value: '23—30',
        unit: '天',
        note: '从受精到孵化的观察范围，不等于达到自由游动或独立存活的时间',
      },
    ],
    media: {
      image:
        './images/species/australian-lungfish/01-permanent-river-pool-adult-cover.webp',
      alt: '昆士兰东南部永久淡水河潭中，一尾完整的橄榄褐色成年澳洲肺鱼从右侧朝左游过沉木、水草与巨石',
      focalPoint: { x: 0.58, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/australian-lungfish/02-leaf-shaped-fins-diagnostic-profile.webp',
          alt: '浅色砂砾底上，一尾完整澳洲肺鱼呈左侧视角，肉质叶状胸鳍与腹鳍、大片圆鳞和绕过尖尾的连续中鳍清晰可见',
          title: '叶状偶鳍与连续中鳍',
          caption:
            'AI生成科学形态情景重建；画面用于呈现粗长体形、叶状肉质偶鳍和连续中鳍，不能核定标本身份、性别、年龄、体尺或鳍条数量。',
          focalPoint: { x: 0.5, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/australian-lungfish/03-facultative-surface-air-breath.webp',
          alt: '黄昏的永久淡水潭中，一尾完整澳洲肺鱼向上浮游，吻端轻微浮出水面并形成一圈涟漪，身体与尾部仍在水下',
          title: '浮到水面的兼性空气呼吸',
          caption:
            'AI生成科学行为情景重建；吻端短暂突破水面只表达一次浮头情景，静帧不能确认嘴部开合、是否完成吞气、溶氧、活动强度、浮头频率或行为原因。',
          focalPoint: { x: 0.55, y: 0.46 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/australian-lungfish/04-nocturnal-snail-foraging-encounter.webp',
          alt: '夜间淡水河床上，一尾完整澳洲肺鱼与一只小型完整淡水螺隔着清楚水隙相对，二者尚未接触',
          title: '夜色中的带壳猎物',
          caption:
            'AI生成科学觅食情景重建；一尾肺鱼与一只螺的接近不能证明锁定、攻击、摄食成功、食谱比例或电感受正在参与。',
          focalPoint: { x: 0.55, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/australian-lungfish/05-single-adhesive-egg-macrophyte.webp',
          alt: '短密沉水植物间，一枚带透明黏性外膜和琥珀色卵黄的澳洲肺鱼卵单独附着在一片短叶上，画面没有动物',
          title: '单枚黏在水草上的卵',
          caption:
            'AI生成科学微距情景重建；一枚卵只说明常见的分散附着方式，不能提供真实比例、尺寸、胚龄、受精状态、存活率或整次产卵量。',
          focalPoint: { x: 0.5, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/australian-lungfish/06-river-water-edna-monitoring.webp',
          alt: '昆士兰东南部河岸边，一名生态研究者用短杆上的无菌瓶采集水面样本，设备箱关闭，画面没有鱼或其他动物',
          title: '用河水寻找遗传线索',
          caption:
            'AI生成科学监测情景重建；采集一瓶水只表达通用 eDNA 取样，画面不能证明检出、个体数、年龄结构、繁殖、来源、趋势或保护成效。',
          focalPoint: { x: 0.55, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...AUSTRALIAN_LUNGFISH_SOURCES,
      {
        title: 'GBIF: Neoceratodus forsteri (Krefft, 1870) nomenclatural record',
        url: 'https://www.gbif.org/species/2441266',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: AUSTRALIAN_LUNGFISH_CONTENT_DATE,
    updatedAt: AUSTRALIAN_LUNGFISH_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
