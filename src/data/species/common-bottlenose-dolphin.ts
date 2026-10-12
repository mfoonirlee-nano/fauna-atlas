import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const BOTTLENOSE_DOLPHIN_SOURCE_DATE = '2026-08-20' as const;

const BOTTLENOSE_DOLPHIN_CONTENT_DATE = '2026-08-20' as const;

const BOTTLENOSE_DOLPHIN_SOURCES = [
  {
    title: 'IUCN Red List — Tursiops truncatus (assessed 2018; published with 2019 errata)',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T22563A156932432.en',
    kind: 'conservation',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'IUCN Cetacean Specialist Group — Red List status of cetaceans (version 2025-2)',
    url: 'https://iucn-csg.org/red-list-status-of-cetaceans/',
    kind: 'conservation',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'Society for Marine Mammalogy — List of Marine Mammal Species and Subspecies (April 2026)',
    url: 'https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/',
    kind: 'taxonomy',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database v2.5 — Tursiops truncatus',
    url: 'https://www.mammaldiversity.org/taxon/1006443/',
    kind: 'taxonomy',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Tursiops truncatus, AphiaID 137111',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=137111',
    kind: 'taxonomy',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'Costa et al. 2022 — Integrative taxonomy supports Tursiops erebennus',
    url: 'https://doi.org/10.1093/zoolinnean/zlac025',
    kind: 'taxonomy',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'Costa et al. 2023 — Tursiops truncatus nuuanu from the Eastern Tropical Pacific',
    url: 'https://doi.org/10.1007/s10914-022-09641-5',
    kind: 'taxonomy',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Common Bottlenose Dolphin',
    url: 'https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin',
    kind: 'general',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'FAO — Marine mammal identification guide: Tursiops truncatus',
    url: 'https://www.fao.org/4/t0725e/t0725e23.pdf',
    kind: 'general',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'Kriesell et al. 2014 — Signature whistles in wild common bottlenose dolphins off Namibia',
    url: 'https://doi.org/10.1371/journal.pone.0106317',
    kind: 'ecology',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'Cantor et al. 2023 — Foraging synchrony drives resilience in human-dolphin mutualism',
    url: 'https://doi.org/10.1073/pnas.2207739120',
    kind: 'ecology',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'Jepson et al. 2016 — PCB pollution continues to impact European cetaceans',
    url: 'https://doi.org/10.1038/srep18573',
    kind: 'conservation',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Marine Mammal Stock Assessment Reports by species/stock',
    url: 'https://www.fisheries.noaa.gov/national/marine-mammal-protection/marine-mammal-stock-assessment-reports-species-stock',
    kind: 'conservation',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — What marine mammal photo-identification can tell us',
    url: 'https://www.fisheries.noaa.gov/southeast/science-data/what-can-marine-mammal-photo-identification-tell-us',
    kind: 'ecology',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'CITES — Tursiops truncatus species listing',
    url: 'https://cites.org/eng/taxonomy/term/704',
    kind: 'conservation',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'Convention on Migratory Species — revised Appendices I and II (effective June 2026)',
    url: 'https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf',
    kind: 'conservation',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-tursiops-truncatus',
    slug: 'common-bottlenose-dolphin',
    names: {
      zh: '宽吻海豚',
      en: 'Common Bottlenose Dolphin',
      aliases: ['瓶鼻海豚', '普通宽吻海豚', 'Bottlenose Dolphin', 'Bottle-nosed Dolphin'],
    },
    scientificName: 'Tursiops truncatus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Cetacea', '鲸目'),
      taxon('Delphinidae', '海豚科'),
      taxon('Tursiops', '宽吻海豚属'),
    ),
    conservation: conservation('LC', 'unknown', 2018),
    distribution: {
      realms: ['marine'],
      continents: ['亚洲', '欧洲', '非洲', '北美洲', '南美洲', '大洋洲'],
      regions: ['热带与温带大西洋', '热带与温带太平洋', '热带与温带印度洋', '地中海与黑海'],
      countries: [],
      range:
        '广布世界热带与温带海洋，利用海湾、河口、近岸陆架、陆架边缘与远海；近岸和离岸生态型及移动范围因地区而异。美国东岸纽约至佛罗里达中部的近岸型，现已归入 Tursiops erebennus。',
    },
    habitats: [
      {
        name: '大陆架边缘与开阔海',
        realm: 'marine',
        description: '在陆架坡折和远洋表层带追逐鱼类与头足类；离岸种群可拥有比近岸居民更大的活动范围。',
        isPrimary: true,
      },
      {
        name: '近岸海域与大陆架',
        realm: 'marine',
        description: '利用沙质沿岸、水道、礁坡和大陆架水体；当地物种身份、体型与食谱必须按区域种群核对。',
      },
      {
        name: '海湾、河口与半封闭海',
        realm: 'marine',
        description: '部分种群频繁使用港湾、潟湖、河口、地中海和黑海；另一些个体则一生难得靠近岸边。',
      },
    ],
    measurements: {
      length: {
        min: 190,
        max: 380,
        unit: 'cm',
        note: '成体总长的宽泛全球包络；地区、性别与近岸/离岸生态型差异明显。',
      },
      weight: {
        min: 150,
        max: 650,
        unit: 'kg',
        note: '成体宽泛包络与记录上限；典型个体多落在中间地带。',
      },
    },
    diet: {
      types: ['carnivore', 'piscivore'],
      foods: ['浅海与远洋鱼类', '鱿鱼等头足类', '虾、蟹等甲壳类'],
      description:
        '机会性捕食随海区和季节出现的鱼类、鱿鱼与甲壳类；既可独自追逐，也会合作把鱼群赶向屏障或同伴，结合被动聆听和高频回声定位寻找猎物，牙齿主要用于抓握而不是咀嚼。',
    },
    activity: [
      '昼夜活动随潮汐、猎物与地点变化',
      '独猎或合作赶拢鱼群',
      '结合被动聆听与回声定位搜索猎物',
      '形成成员会分会合的流动社会群体',
      '居民型、局地移动与大范围离岸移动因种群而异',
      '休息时缓慢协调游动并有规律换气',
    ],
    tags: ['全球温带与热带海洋', 'IUCN 无危', 'CITES 附录 II', '齿鲸', '回声定位', '分裂—融合社会', '签名哨声'],
    summary: '宽吻海豚的吻部短粗，会合作赶鱼，群体成员也会分开和重聚。它从近岸到远海都有分布，全球评估为无危，各亚种与管理种群的风险却不同。',
    description:
      '宽吻海豚的不同种群在形态、食谱和风险上有差别。当前分类接受三个宽吻海豚属物种，在 Tursiops truncatus 下承认四个亚种；2018 年 IUCN 全球评估早于其中若干拆分。它们结合聆听和回声定位寻找鱼、鱿鱼与甲壳类，独猎或合作赶鱼。群体成员经常加入和离开，母幼与部分同伴关系仍能持续多年。全球物种评为无危，黑海亚种为濒危、拉氏亚种为易危，若干亚种群则为极危，保护工作需要按具体种群开展。',
    storySections: [
      {
        key: 'taxonomy-in-motion',
        label: '分类边界',
        title: '旧记录需要核对物种边界',
        body: '2026 年分类清单接受 Tursiops truncatus、T. aduncus 与 T. erebennus 三个物种，并在 T. truncatus 下接受 truncatus、ponticus、gephyreus 与 nuuanu 四个亚种。美国东岸纽约至佛罗里达中部原先称 T. truncatus 的近岸型现归 T. erebennus；因此旧照片、声学和种群序列都要按地点和样本重新核对。',
      },
      {
        key: 'coast-to-offshore',
        label: '多样生境',
        title: '从河口边缘到大陆架以外',
        body: '有些种群长期利用海湾、河口和浅海，有些在陆架边缘和远海大范围移动。近岸与离岸类型常有体型、体色、食谱和遗传差异，但这些差异因海区而变，不能凭一套外观标准判断全球所有个体。',
      },
      {
        key: 'sound-guided-foraging',
        label: '觅食',
        title: '先听海里发生什么，再用回声追踪猎物',
        body: '宽吻海豚会被动聆听鱼类和环境声，也会发出高频点击并分析回声；个体可单独追猎，群体也可把鱼赶向沙洲、岸壁或同伴。牙齿用于抓住滑溜猎物，鱼通常整条吞下。',
      },
      {
        key: 'fission-fusion-identity',
        label: '社会与声音',
        title: '个体化哨声与长期同伴关系',
        body: '海豚不断加入和离开临时小群，母幼关系与部分成年同伴关系可延续多年。纳米比亚的野外研究记录到多个符合“签名哨声”判据的个体化声音轮廓，研究者据此辨认个体。它们的声音交流与人类语言有何异同，仍在研究。',
      },
      {
        key: 'long-maternal-investment',
        label: '繁殖与育幼',
        title: '约一年妊娠之后，还有数年的同行',
        body: '跨种群资料概括出约 12 个月妊娠、约 20 个月哺乳，以及一般 3 至 6 年母幼相伴。幼仔常游在母体侧后方，借母体尾流省力，并跟随母亲换气。母幼关系比临时小群的成员组合更稳定。',
      },
      {
        key: 'stock-scale-conservation',
        label: '保护尺度',
        title: '具体海区的保护风险',
        body: '2018 年全球评估为 LC、趋势未知，也明确承认大部分分布区未完成调查。兼捕、污染、溢油、疾病、猎物下降、船只和投喂的影响集中在具体海区；黑海亚种、拉氏亚种及多个封闭亚种群的等级高于全球物种。照片识别、遗传、声学与标准化调查必须按当前分类重新对齐。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1821 年的 Delphinus truncatus',
        body: '蒙塔古在 1821 年发表宽吻海豚的描述，原始名称为 Delphinus truncatus，现行学名改用 Tursiops truncatus。随着研究增多，部分历史上包含在这个名称中的近岸种群被另列物种；因此追踪一只海豚或比较旧调查时，还要核对记录地点与现行分类范围。',
      },
    ],
    keyFacts: [
      '全球 IUCN 正式记录为 LC、趋势 unknown，2018 年评估、2019 年发布。',
      '2026 分类清单接受三个 Tursiops 物种和 T. truncatus 的四个亚种；美国东岸一部分历史近岸记录现归 T. erebennus。',
      '完整科学分类把鲸类置于偶蹄目 Artiodactyla 内，Cetacea 表示其中的鲸类支系。',
      '成体总长约 1.9 至 3.8 米、宽泛质量包络约 150 至 650 千克，地区、性别和生态型差异明显。',
      '短粗吻突由折痕与圆额隆分开；背部只有一枚镰形背鳍，水平尾叶上下摆动推进。',
      '宽吻海豚会独猎或合作赶鱼，并结合被动聆听和高频回声定位；牙齿抓握猎物，鱼常整条吞下。',
      '海豚群体的成员经常加入和离开，个体化的签名哨声可用于辨认彼此，其交流方式仍在研究。',
      '妊娠约 12 个月，平均产仔间隔约 3 至 6 年，幼仔一般与母亲相伴 3 至 6 年。',
      '全球 LC 与黑海亚种 EN、拉氏亚种 VU 及若干 CR 亚种群并不矛盾，保护必须落到具体单元。',
      '不要投喂或追逐野生海豚；习惯靠近人和船会增加钩挂、碰撞与伤害风险。',
    ],
    threats: [
      '刺网、围网、拖网、延绳、笼具和休闲渔具造成兼捕、缠绕、钩伤与溺亡',
      '过度捕捞导致猎物下降，部分地区仍存在直接捕杀或活体捕获',
      'PCB 等持久污染物、溢油和沿岸污染损害免疫、内分泌与繁殖健康',
      '海洋哺乳动物麻疹病毒、有害藻毒素和其他疾病造成区域性异常死亡',
      '船舶碰撞、观鲸干扰、航运及工业噪声和岸线工程形成累积压力',
      '人为投喂和骚扰使海豚接近船只与渔具，增加伤害和报复性冲突',
      '小型或隔离亚种群更容易受到兼捕、污染、猎物变化和遗传隔离叠加影响',
    ],
    conservationActions: [
      '按亚种群和管理种群开展标准化航线调查、照片识别、被动声学、遗传与健康监测',
      '改良高风险渔具和作业时空，记录兼捕并维持解缠、救援与搁浅响应能力',
      '保护觅食、育幼和休息水域，维持猎物并控制 PCB、溢油和岸线污染',
      '在航运、能源开发和观鲸活动中限制船速、距离和累积水下噪声',
      '执行不追逐、不触摸、不投喂的负责任观赏规范，降低习惯化风险',
      '按现行物种边界校准历史数据，避免把 T. erebennus 或 T. aduncus 趋势静默并入本种',
      '对黑海、拉氏和封闭小种群实施跨境、单元化的优先保护与长期评估',
    ],
    metrics: {
      adultLengthCm: [190, 380],
      adultMassKg: [150, 650],
    },
    featuredStats: [
      {
        key: 'adult-length',
        label: '成体总长宽泛范围',
        value: '1.9—3.8',
        unit: '米',
        note: '跨地区与生态型的总包络；具体种群各有自己的常见范围',
      },
      {
        key: 'longevity',
        label: '寿命记录',
        value: '至少 40',
        unit: '年',
        note: '有记录的雌性可超过 60 年',
      },
      {
        key: 'gestation',
        label: '妊娠期',
        value: '约 12',
        unit: '个月',
        note: '跨种群概括，个体有变化',
      },
      {
        key: 'mother-calf-association',
        label: '一般母幼相伴',
        value: '3—6',
        unit: '年',
        note: '哺乳本身约 20 个月',
      },
    ],
    media: {
      image: './images/species/common-bottlenose-dolphin/01-open-water-portrait.webp',
      alt: '清澈温带外海水面下，一只完整宽吻海豚从右向左游过，短粗吻、圆额隆、镰形背鳍、两枚胸鳍和水平尾叶全部可见',
      focalPoint: { x: 0.72, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/common-bottlenose-dolphin/02-cooperative-fish-herding.webp',
          alt: '开阔沙质陆架水体中，恰好三只完整宽吻海豚以松弧形把一群小鱼逐渐收拢',
          title: '把鱼群赶到一起',
          caption: '宽吻海豚可以独自捕猎，也会合作赶鱼，并通过聆听和回声定位寻找猎物。',
          focalPoint: { x: 0.5, y: 0.54 },
        },
        {
          image: './images/species/common-bottlenose-dolphin/03-coastal-shelf-habitat.webp',
          alt: '暖温带大陆架水下大景中，沙纹底质与稀疏海草渐入蓝色水柱，恰好一只完整宽吻海豚在中右远景游动',
          title: '沿岸与陆架水体',
          caption: '不同种群利用河口、近岸、陆架边缘和远海，各有一片自己熟悉的水域。',
          focalPoint: { x: 0.64, y: 0.52 },
        },
        {
          image: './images/species/common-bottlenose-dolphin/04-surface-breath.webp',
          alt: '海面长焦侧视下，恰好一只宽吻海豚自然滚动换气，单个头顶呼吸孔上方可见稀薄的呼气雾与少量飞沫',
          title: '一次快速的水面换气',
          caption: '齿鲸以头顶单个呼吸孔换气；那一小团雾气，只在合适的湿度和光线下才看得见。',
          focalPoint: { x: 0.56, y: 0.43 },
        },
        {
          image: './images/species/common-bottlenose-dolphin/05-adult-calf-travel.webp',
          alt: '近海面水下，一头较大宽吻海豚与一只体长约其四成的幼体同向游动，幼体位于成体后下方且两者保持水隙',
          title: '成体与幼体同向旅行',
          caption: '幼仔常游在母体侧后方，借母亲的尾流省力同行。',
          focalPoint: { x: 0.53, y: 0.5 },
        },
        {
          image: './images/species/common-bottlenose-dolphin/06-dorsal-fin-photo-id.webp',
          alt: '一只宽吻海豚自然浮出灰蓝海面，镰形背鳍后缘的数处细小缺刻清晰可见',
          title: '用背鳍重识别个体',
          caption: '研究者比较背鳍后缘长期保留的缺刻和疤痕，用照片再次辨认同一个体。',
          focalPoint: { x: 0.5, y: 0.5 },
        },
      ],
    },
    sources: BOTTLENOSE_DOLPHIN_SOURCES,
    featured: true,
    publishedAt: BOTTLENOSE_DOLPHIN_CONTENT_DATE,
    updatedAt: BOTTLENOSE_DOLPHIN_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
