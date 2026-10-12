import type { SpeciesSource, Species } from '../../types/species.ts';

import { CONTENT_DATE, animalTaxonomy, conservation, taxon } from './shared.js';

const EMPEROR_PENGUIN_SOURCE_DATE = '2026-08-15' as const;

const EMPEROR_PENGUIN_CONTENT_DATE = '2026-08-15' as const;

const EMPEROR_PENGUIN_SOURCES = [
  {
    title: 'IUCN 2026 — Emperor penguin now Endangered due to climate change',
    url: 'https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn',
    kind: 'conservation',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'BirdLife International — 2026 Red List forum: Aptenodytes forsteri',
    url: 'https://forums.birdlife.org/2026-1-emperor-penguin-aptenodytes-forsteri/',
    kind: 'conservation',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'ITIS — Aptenodytes forsteri, TSN 174449',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?print_version=PRT&search_topic=TSN&search_value=174449',
    kind: 'taxonomy',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Australian Antarctic Program — Emperor penguin',
    url: 'https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/',
    kind: 'general',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Australian Antarctic Program — Emperor penguin breeding cycle',
    url: 'https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/breeding-cycle/',
    kind: 'ecology',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'LaRue et al. 2024 — Continental-scale population assessment from satellite imagery',
    url: 'https://doi.org/10.1098/rspb.2023.2067',
    kind: 'distribution',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Fretwell et al. 2025 — Regional emperor penguin population declines',
    url: 'https://doi.org/10.1038/s43247-025-02345-7',
    kind: 'conservation',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Fretwell et al. 2026 — Discovery of Antarctic moulting sites',
    url: 'https://doi.org/10.1038/s43247-026-03231-6',
    kind: 'ecology',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Winterl et al. 2024 — Remote sensing of abundance and breeding success',
    url: 'https://doi.org/10.1038/s41467-024-48239-8',
    kind: 'ecology',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Wienecke et al. 2007 — Extreme dives by free-ranging emperor penguins',
    url: 'https://doi.org/10.1007/s00300-006-0168-8',
    kind: 'ecology',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Goetz et al. 2018 — Habitat preference and dive behavior',
    url: 'https://doi.org/10.3354/meps12486',
    kind: 'ecology',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'Zitterbart et al. 2011 — Coordinated movements in an emperor penguin huddle',
    url: 'https://doi.org/10.1371/journal.pone.0020260',
    kind: 'ecology',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'U.S. Fish and Wildlife Service — 2022 ESA final rule',
    url: 'https://www.fws.gov/sites/default/files/federal_register_document/2022-23164.pdf',
    kind: 'conservation',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
  {
    title: 'CEP 28 / ATCM 48 — 2026 meeting report',
    url: 'https://documents.ats.aq/ATCM48/cr/ATCM48_cr001_e.pdf',
    kind: 'conservation',
    accessedAt: EMPEROR_PENGUIN_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-aptenodytes-forsteri',
    slug: 'emperor-penguin',
    names: { zh: '帝企鹅', en: 'Emperor Penguin', aliases: [] },
    scientificName: 'Aptenodytes forsteri',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Sphenisciformes', '企鹅目'),
      taxon('Spheniscidae', '企鹅科'),
      taxon('Aptenodytes', '王企鹅属'),
    ),
    conservation: conservation('EN', 'decreasing', 2026, 'A3bc'),
    distribution: {
      realms: ['marine', 'terrestrial'],
      continents: ['南极洲'],
      regions: ['南极大陆沿岸', '威德尔海', '罗斯海', '东南极沿岸', '阿蒙森海—别林斯高晋海', '南大洋'],
      countries: [],
      endemicTo: ['南极洲'],
      range: '繁殖地环绕南极大陆几乎整圈海岸，约分布于南纬 66°、78°；截至 2026 年有 66 个动态的已知繁殖地点，多数位于沿岸陆缘固定冰，非繁殖期在更广阔的南大洋活动。',
      center: { lat: -74, lng: 20 },
    },
    habitats: [
      {
        name: '沿岸陆缘固定冰',
        realm: 'marine',
        description: '首要繁殖平台；需在秋季形成并维持到幼鸟长出防水羽毛，常由岛屿、海岸、冰架或搁浅冰山固定。',
        isPrimary: true,
      },
      {
        name: '南大洋陆架、陆坡与冰缘水域',
        realm: 'marine',
        description: '在裂隙、冰间湖、冰缘、大陆架和陆坡水域潜水捕食鱼、磷虾与头足类；利用区域随季节和群落而变。',
      },
      {
        name: '稳定海冰换羽地',
        realm: 'marine',
        description: '成鸟通常在 1 至 3 月于稳定陆缘冰或密集浮冰进行约 30 至 40 天的年度换羽，期间羽毛不防水且不能下海取食。',
      },
      {
        name: '冰架与沿岸裸地',
        realm: 'terrestrial',
        description: '少数群落在海冰条件不佳时使用冰架或陆地，是重要但并不普遍的替代繁殖、停栖或换羽地点。',
      },
    ],
    measurements: {
      height: { min: 1, max: 1.3, unit: 'm', note: '成鸟身高；美国鱼类及野生动物管理局协调范围' },
      weight: { min: 20, max: 41, unit: 'kg', note: '随繁殖、长期禁食、增脂和换羽阶段显著波动' },
    },
    diet: {
      types: ['carnivore', 'piscivore'],
      foods: ['南极银鱼', '其他鱼类', '南极磷虾', '鱿鱼'],
      description: '以鱼类为主，也取食磷虾和头足类；猎物构成随群落、海区和季节显著变化，南极银鱼在许多地点尤其重要。',
    },
    activity: ['南极冬季群居繁殖', '不守繁殖领地', '深潜觅食', '季节性海上移动', '年度灾难性换羽'],
    tags: ['南极特有种', 'IUCN 濒危', '海冰依赖', '深潜海鸟', '极冬繁殖'],
    summary: '帝企鹅是现生最大的企鹅，在南极冬季的陆缘固定冰上繁殖。它们聚在一起保温，并潜入南大洋觅食。',
    description: '秋季沿岸固定冰形成后，帝企鹅回到繁殖群。雌鸟产卵后出海，雄鸟在极夜中持卵孵化并长期禁食，随后双亲轮流为幼鸟觅食。夏季成鸟还需要在稳定冰面完成全身换羽，换羽期间不能下海取食。海冰过早破裂会影响繁殖、觅食和换羽，气候变化因此是主要的全球威胁。',
    storySections: [
      {
        key: 'annual-cycle',
        label: '海冰年历',
        title: '繁殖和换羽都依赖稳定海冰',
        body: '帝企鹅需要秋季形成的沿岸陆缘固定冰承载繁殖群，冰面还需保持到幼鸟换上防水羽毛。夏季，成鸟要在稳定海冰或密集浮冰上完成约 30 至 40 天的全身换羽，期间不能下海取食。不同季节的稳定冰面都关系到它们的生存。',
      },
      {
        key: 'adaptation',
        label: '耐寒适应',
        title: '把热量留在躯干，把消耗压到最低',
        body: '多层鳞片状羽毛、皮下脂肪、相对短小的喙和鳍状翼减少散热；鼻腔和四肢的逆流热交换回收热量。冬季雄鸟还降低活动并组成密集群，以保存支撑数月禁食的脂肪。',
      },
      {
        key: 'huddling',
        label: '群聚行为',
        title: '厘米级移动波让拥挤群保持流动',
        body: '帝企鹅的拥挤群会移动。观测显示，它们约每 30 至 60 秒协调迈出一次 5 至 10 厘米的小步，移动波穿过群体。个体从迎风侧离开、在背风侧加入，逐步交换冷热位置，同时维持群体的保温密度。',
      },
      {
        key: 'breeding',
        label: '繁殖与育幼',
        title: '一枚卵在雄鸟脚背上度过极夜',
        body: '雌鸟产下一枚卵后把它交给雄鸟，雄鸟以育儿褶覆盖并持卵约 65 至 75 天；从抵达群落到雌鸟归来，整体禁食可达约四个月。幼鸟要到 6 至 7 周后才能较稳定地调节体温，随后进入托儿群并由双亲轮流喂食。',
      },
      {
        key: 'diving',
        label: '潜水与觅食',
        title: '最深与最久，来自两次不同的下潜',
        body: '最深的可靠记录为 564 米；另一项非繁殖个体研究记录到 32.2 分钟的最长潜水。两项极值出自不同的研究与下潜；寻常的觅食潜水要浅得多、短得多，随光照、海区和猎物而变。',
      },
      {
        key: 'conservation',
        label: '保护与监测',
        title: '现场避让能减压，减排决定长期海冰',
        body: '减少温室气体排放是降低全物种长期风险的核心；南极现场还需保护繁殖与换羽避难所及相连觅食水域，避免船舶切开群落附近固定冰，约束航空器、游客和科研干扰，并用卫星与地面人口统计联合追踪动态的 66 个已知繁殖地点。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1844 年记入科学文献的帝企鹅',
        body: '格雷在 1844 年使用 Aptenodytes forsteri 描述帝企鹅，今天仍沿用这个学名。它与同属的王企鹅是不同物种，帝企鹅体型更大，并在南极冬季固定冰上繁殖。科学名称帮助研究者区分它们，也方便把不同年份的南极观察记录联系起来。',
      },
    ],
    keyFacts: [
      '2026 年 IUCN 将帝企鹅上调为濒危 EN A3bc，依据是未来三世代的模型下降与海冰生境损失。',
      '2018 年约 228,000 只是春季出现在繁殖地的成鸟卫星指数，来自影像估计，不能当作逐只清点。',
      '截至 2026 年已知 66 个繁殖地点，但群落会迁址、暂时缺席或失败，地点数不是固定种群数。',
      '雄鸟持卵孵化约 65 至 75 天，从抵达群落到交接幼鸟的整体禁食可达约四个月。',
      '拥挤群约每 30 至 60 秒通过 5 至 10 厘米的协调小步形成移动波，逐步重组而不失去密度。',
      '可靠最深潜水记录为 564 米，最长潜水 32.2 分钟来自另一项研究，两项纪录并非同一次下潜。',
    ],
    threats: [
      '人为气候变化导致沿岸陆缘固定冰缩短、减少或在幼鸟离群前过早破裂',
      '海冰和海洋变化改变南极银鱼、磷虾等猎物的分布与可达性',
      '极端低海冰、风暴、冰架崩解或大型冰山造成局地繁殖失败及迁址',
      '夏季换羽地点提前破冰，使羽毛不防水、无法下海取食的成鸟面临风险',
      '船舶穿越固定冰以及航空器、游客和科研活动造成额外干扰',
      '局地集中的磷虾捕捞、污染物、疾病与生物安全风险等次级压力',
    ],
    conservationActions: [
      '迅速、持续减少温室气体排放，限制长期海冰生境损失',
      '保护气候避难型繁殖地、换羽地及与其相连的南大洋觅食水域',
      '扩大有代表性的 ASPA 与 CCAMLR 海洋保护区网络并维护空间连通性',
      '避免船舶穿越群落附近固定冰，规范航空器、游客和科研接近及环境影响评价',
      '以生态系统为基础审慎管理南极磷虾渔业，避免捕捞压力局地集中',
      '结合卫星影像、航空/地面核验、自动相机、标记和人口统计开展环南极长期监测',
    ],
    metrics: {
      adultMassKg: [20, 41],
      maxDiveDepthM: 564,
      estimatedMatureIndividuals: [190000, 280000],
    },
    featuredStats: [
      { key: 'population-index', label: '2018 春季成鸟指数', value: '约 228,000', unit: '只', note: '95% 可信区间 190,000 至 280,000；卫星影像计数' },
      { key: 'breeding-sites', label: '已知繁殖地点', value: '66', unit: '处', note: '截至 2026 年的动态地点目录' },
      { key: 'dive-depth', label: '最深潜水记录', value: '564', unit: '米', note: '与最长时长记录不是同一次潜水' },
      { key: 'incubation', label: '雄鸟持卵孵化', value: '65—75', unit: '天', note: '整体繁殖禁食可达约四个月' },
    ],
    media: {
      image: './images/species/emperor-penguin/01-fast-ice-portrait.webp',
      alt: '蓝灰色南极沿岸海冰上，一只成年帝企鹅站在画面右侧',
      focalPoint: { x: 0.68, y: 0.49 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/emperor-penguin/02-egg-incubation.webp',
          alt: '南极极夜的海冰上，一只雄性帝企鹅把唯一一枚卵托在双脚上并覆在育儿褶下',
          title: '脚背上的孵化',
          caption: '每次繁殖通常只有一枚卵。雄鸟把卵托在脚背、藏在育儿褶下，持卵孵化约 65 至 75 天。',
          focalPoint: { x: 0.52, y: 0.54 },
        },
        {
          image: './images/species/emperor-penguin/03-fast-ice-habitat.webp',
          alt: '南极沿岸连绵的固定海冰与冰架之间，一处帝企鹅繁殖群在远景中显得很小',
          title: '海冰尺度',
          caption: '帝企鹅依赖连接海岸的稳定固定冰完成繁殖；若海冰在幼鸟换上防水羽毛前破裂，整群繁殖可能失败。',
          focalPoint: { x: 0.45, y: 0.64 },
        },
        {
          image: './images/species/emperor-penguin/04-winter-huddle.webp',
          alt: '风雪中的南极固定冰上，孵卵雄性帝企鹅紧密聚成一团',
          title: '轮换取暖',
          caption: '孵卵雄鸟在风暴中密集抱团，并通过协调小步与迎风、背风侧的加入离开逐步重排，降低热量散失。',
          focalPoint: { x: 0.5, y: 0.53 },
        },
        {
          image: './images/species/emperor-penguin/05-under-ice-foraging.webp',
          alt: '海冰下，一只成年帝企鹅用鳍状翼追逐一小群南极银鱼',
          title: '海冰下捕食',
          caption: '帝企鹅用鳍状翼在海冰下和外海追逐鱼、磷虾与鱿鱼；可靠最深潜水记录为 564 米。',
          focalPoint: { x: 0.55, y: 0.5 },
        },
        {
          image: './images/species/emperor-penguin/06-parent-and-chick.webp',
          alt: '晚春固定冰上，一只成年帝企鹅低头鸣叫，一只灰色绒羽幼鸟在它面前回应',
          title: '循声重逢',
          caption: '幼鸟孵出后，双亲轮流出海觅食；回到拥挤群体时，成鸟与幼鸟靠各自独特的叫声找到彼此。',
          focalPoint: { x: 0.51, y: 0.55 },
        },
      ],
    },
    sources: [
      ...EMPEROR_PENGUIN_SOURCES,
      {
        title: '帝企鹅：科学描述与命名资料',
        url: 'https://data.aad.gov.au/aadc/biodiversity/taxon_documents.cfm?taxon_id=100000',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: CONTENT_DATE,
    updatedAt: EMPEROR_PENGUIN_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
