import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const CHINESE_MANTIS_SOURCE_DATE = '2026-08-28' as const;

const CHINESE_MANTIS_CONTENT_DATE = '2026-08-28' as const;

const CHINESE_MANTIS_SOURCES = [
  {
    title: 'Mantodea Species File Online, version 5.0/5.0',
    url: 'https://mantodea.speciesfile.org/',
    kind: 'taxonomy',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Shim & Song 2024 — A taxonomic review of Korean Mantodea',
    url: 'https://doi.org/10.3897/zookeys.1206.123355',
    kind: 'taxonomy',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'TBN TaxaTree — Tenodera sinensis, native taxon in Taiwan',
    url: 'https://taxatree.tbn.org.tw/taxa/8eb77f1b-dcf5-4fd1-84f3-7f4326b5e24f',
    kind: 'distribution',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'GBIF / Catalogue of Life — Tenodera sinensis',
    url: 'https://www.gbif.org/species/5887934',
    kind: 'taxonomy',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'EDDMapS — Tenodera sinensis, introduced United States distribution',
    url: 'https://www.eddmaps.org/distribution/usstate.cfm?sub=65465',
    kind: 'distribution',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'University of Maryland Extension — Praying mantids and their ootheca',
    url: 'https://extension.umd.edu/sites/extension.umd.edu/files/2022-10/22Oct21L.pdf',
    kind: 'distribution',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'NC State Extension — Chinese Praying Mantid',
    url: 'https://content.ces.ncsu.edu/chinese-mantid',
    kind: 'general',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List search — Tenodera sinensis, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Tenodera%20sinensis&searchType=species',
    kind: 'conservation',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Hurd 1988 — Consequences of divergent egg phenology',
    url: 'https://doi.org/10.1007/BF00397868',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Hurd & Eisenberg 1984 — Mortality, development and dispersal of juvenile mantids',
    url: 'https://doi.org/10.2307/4356',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Duss & Hurd 1997 — Food limitation reduces body length in mantid nymphs',
    url: 'https://www.biodiversitylibrary.org/part/55696',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Hurd et al. 1995 — Time, temperature, and food as determinants of population persistence',
    url: 'https://doi.org/10.1093/ee/24.2.348',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Gall et al. 2017 — Comparative population ecology of two mantid species',
    url: 'https://doi.org/10.1093/ee/nvx110',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Moran & Hurd 1997 — A trophic cascade caused by Tenodera sinensis',
    url: 'https://doi.org/10.1007/s004420050360',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Wilson Rankin et al. 2023 — Diets of two non-native praying mantids',
    url: 'https://doi.org/10.1016/j.fooweb.2023.e00280',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Sontag 1971 — Spectral sensitivity of the Tenodera sinensis visual system',
    url: 'https://doi.org/10.1085/jgp.57.1.93',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Visual prey discrimination during postembryonic development',
    url: 'https://doi.org/10.1016/0022-1910(93)90080-B',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Prete et al. 1990 — The predatory strike of Tenodera sinensis',
    url: 'https://doi.org/10.1016/0022-1910(90)90024-A',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Bertsch et al. 2019 — Predatory behavior changes with satiety',
    url: 'https://doi.org/10.1242/jeb.197673',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Wosnitza et al. 2022 — Central complex neurons in prey tracking',
    url: 'https://doi.org/10.3389/fncir.2022.893004',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Bosse et al. 2022 — Context-dependent attack and defense behavior',
    url: 'https://doi.org/10.1242/jeb.243710',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Mebs et al. 2016 — Tenodera sinensis predation on a red-spotted newt',
    url: 'https://doi.org/10.1007/s00049-016-0211-3',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Nyffeler et al. 2017 — Bird predation by praying mantises',
    url: 'https://doi.org/10.1676/16-100.1',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Liske & Davis 1987 — Courtship and mating behaviour of the Chinese praying mantis',
    url: 'https://doi.org/10.1016/S0003-3472(87)80024-6',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Lelito & Brown 2006 — Male risk taking under sexual cannibalism risk',
    url: 'https://doi.org/10.1086/505757',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
  {
    title: 'Brown & Barry 2016 — Sexual cannibalism and male material investment',
    url: 'https://doi.org/10.1098/rspb.2016.0656',
    kind: 'ecology',
    accessedAt: CHINESE_MANTIS_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-tenodera-sinensis',
    slug: 'chinese-mantis',
    names: {
      zh: '中华大刀螳',
      en: 'Chinese Mantis',
      aliases: [
        '中华刀螳',
        '中华大刀螂',
        'Chinese Praying Mantis',
        'Chinese Mantid',
        'Tenodera aridifolia sinensis',
        'Paratenodera sinensis',
        'Mantis mandarinea',
      ],
    },
    scientificName: 'Tenodera sinensis',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Insecta', '昆虫纲'),
      taxon('Mantodea', '螳螂目'),
      taxon('Mantidae', '螳科'),
      taxon('Tenodera', '大刀螳属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲', '北美洲'],
      countries: ['中国', '韩国', '日本', '俄罗斯', '尼泊尔', '泰国', '美国', '加拿大'],
      regions: [
        '中国大陆与台湾',
        '朝鲜半岛南部',
        '日本列岛',
        '俄罗斯远东及亚洲温带记录区',
        '尼泊尔和泰国的已列记录区',
        '美国东部及其他引入记录区',
        '加拿大南部引入记录区',
      ],
      range:
        '原生于亚洲温带及相邻地区。2024 年分类修订列中国、尼泊尔、日本、俄罗斯、泰国和韩国，台湾生物多样性网络把台湾种群标为原生；本种已引入美国和加拿大。北美公开出现点包含商业卵鞘搬运形成的记录，不能把每个点都当作已核定繁殖种群。',
      center: { lat: 35, lng: 112 },
    },
    habitats: [
      {
        name: '温带高草与草本边缘',
        realm: 'terrestrial',
        description:
          '在高草、阔叶草本和灌丛形成的垂直植被中等待猎物。老田实验来自北美引入区，说明其可利用这类结构，不定义亚洲原生区的全部生境。',
        isPrimary: true,
      },
      {
        name: '河岸草丛与灌木带',
        realm: 'terrestrial',
        description:
          '韩国研究在河岸及沿河城市环境记录若虫和成虫；茎、枝和树干也承载卵鞘。',
      },
      {
        name: '农田边缘与次生绿地',
        realm: 'terrestrial',
        description:
          '田埂、花园和次生草地提供伏击点与多类节肢动物猎物。它会同时捕食害虫、传粉者和其他捕食者。',
      },
      {
        name: '城市与郊区植被',
        realm: 'terrestrial',
        description:
          '韩国分类修订记录本种适应城市、郊区和公园；卵鞘可固定在树枝、树干或石块上。',
      },
    ],
    measurements: {
      length: {
        min: 5.42,
        max: 10.08,
        unit: 'cm',
        note:
          '韩国分类修订的成虫凭证标本总长合并范围。标本清单列 37 只成体雄性和 17 只成体雌性，但各项测量的实际样本量未报告；不是全球极值或普通成虫区间。',
      },
    },
    diet: {
      types: ['carnivore', 'insectivore'],
      foods: [
        '鳞翅目、直翅目、双翅目和半翅目等昆虫',
        '蜘蛛、其他捕食性节肢动物与同类',
        '传粉昆虫和寄生蜂等非害虫猎物',
        '小型两栖类和鸟类等有物种级记录的机会性脊椎动物',
      ],
      description:
        '在植被上伏击体型和距离合适的活动猎物。北美 DNA 宏条形码研究显示其猎物跨越植食者、捕食者、传粉者和寄生蜂，因此不能把它称为只吃害虫的生物防治者；小型脊椎动物有物种级记录，但没有日常食谱占比。',
    },
    activity: ['伏击为主', '视觉追踪移动猎物', '短距潜近与前足打击', '独居', '成虫期求偶'],
    tags: ['螳螂目', '亚洲原生', '北美引入种', '视觉伏击者', '卵鞘越冬', '不完全变态'],
    summary:
      '原生于亚洲、引入北美的大型螳螂，以复眼追踪移动目标，用带刺前足伏击多类节肢动物。',
    description:
      '中华大刀螳是螳科大刀螳属的独立种，绿色或褐色身体隐藏在高草、灌木和河岸植被中。韩国凭证标本的成虫总长为 54.2 至 100.8 毫米，雌雄区间重叠。温带种群把卵留在硬化泡沫卵鞘内越冬，若虫春季孵化并经反复蜕皮成为成虫。它以视觉引导伏击，猎物包含害虫、传粉者、其他捕食者和同类；小型脊椎动物属于机会性记录。IUCN 尚未评估本种，CITES 当前未列入，全球种群趋势未知。',
    storySections: [
      {
        key: 'species-not-subspecies',
        label: '分类与身份',
        title: '从变种名称到独立物种',
        body: 'Saussure 在 1871 年把 sinensis 写作 Tenodera aridifolia 的变种，后来的论文又长期沿用亚种组合。现代分类修订依据雄性生殖器和多基因证据把中华大刀螳作为独立种。旧名适合检索历史研究，当前有效名是 Tenodera sinensis。',
      },
      {
        key: 'sex-and-season',
        label: '体型与年周期',
        title: '雌雄体长重叠，形态还需组合判断',
        body: '韩国凭证标本中的雄性长 54.2 至 89.1 毫米，雌性长 58.2 至 100.8 毫米。雌性常有更宽的腹部，雄性身体和触角更细长。温带种群以卵鞘越冬，春季孵化，夏季反复蜕皮，成虫在生长季末留下下一代卵鞘。',
      },
      {
        key: 'ootheca-and-molts',
        label: '卵鞘与发育',
        title: '卵在硬化泡沫卵鞘内越冬',
        body: '雌性把卵和泡沫状分泌物固定在枝、树干或石面。韩国样本中的桶状卵鞘长 30.0 至 42.2 毫米，约有 15 至 29 个卵室；卵室数不等于卵数。若虫孵出后常经历 6 至 7 次蜕皮，食物和温度会改变发育速度。',
      },
      {
        key: 'eyes-to-forelegs',
        label: '视觉与伏击',
        title: '视觉引导带刺前足捕猎',
        body: '中华大刀螳在茎叶上等待，转头追踪进入视野的活动猎物，再短距接近并伸出带刺捕捉足。神经记录显示中央复合体细胞会响应猎物运动和自身转向；饱食程度也会改变追击。它的伏击是一套可调节行为，不是一条固定距离的机械反射。',
      },
      {
        key: 'generalist-not-pest-specialist',
        label: '食性与生态作用',
        title: '菜单里有害虫，也有传粉者和其他捕食者',
        body: '北美消化道 DNA 研究记录它取食多种生态角色的节肢动物。红斑蝾螈和鸟类事件还证明大型个体能处理小型脊椎动物，但这些观察没有给出日常占比。广食性让它影响食物网，也削弱了“精准生物防治者”的说法。',
      },
      {
        key: 'cannibalism-range-and-data-gap',
        label: '求偶与管理',
        title: '求偶风险与原生、引入种群管理',
        body: '雄性面对饥饿雌性时会放慢接近、加强求偶并从更远处跃上，以降低被捕食的风险。性食同类会发生，却不是交配的必经步骤。亚洲原生种群没有全球趋势评估；美国和加拿大的引入种群则面临扩散与食物网影响问题，管理时应分别考虑。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1871 年曾被写作另一种的变种',
        body: 'Saussure 在 1871 年把 sinensis 写作 Tenodera aridifolia 的变种，此后亚种组合 Tenodera aridifolia sinensis 长期出现在文献中。现代分类修订依据雄性生殖器和多基因证据，把中华大刀螳列为独立种 Tenodera sinensis。旧名仍有助于检索历史研究。',
      },
    ],
    keyFacts: [
      '当前接受学名是 Tenodera sinensis Saussure, 1871；Tenodera aridifolia sinensis 是历史亚种组合。',
      '韩国分类修订的雄性总长为 54.2 至 89.1 mm，雌性为 58.2 至 100.8 mm，两段范围重叠。',
      '雌性腹部较宽，雄性体形与触角较细长；体长和绿褐体色都不能单独判定性别或物种。',
      '韩国样本中的桶状卵鞘长 30.0 至 42.2 mm，约有 15 至 29 个卵室；卵室数不等于卵数。',
      '温带种群以卵鞘越冬，若虫在春季孵化并常蜕皮 6 至 7 次；温度和食物会改变发育日程。',
      '暗适应复眼对约 510 至 520 nm 最敏感，并在约 370 nm 有次峰；电生理响应不能单独证明颜色辨别。',
      '消化道 DNA 研究检出植食者、传粉者、寄生蜂和捕食者，说明它不是只吃害虫。',
      '小型脊椎动物和性食同类都有直接记录，但两者都属于有条件的机会事件。',
      '本种原生于亚洲，已引入美国和加拿大；两片大陆需要不同的调查和管理目标。',
      'IUCN 尚未评估，CITES 当前未列入，全球种群趋势未知。',
    ],
    threats: [
      'IUCN 尚未开展全球评估，亚洲原生区缺少标准化丰度和长期趋势；现有资料不能判定全球增减。',
      '北美老田实验表明食物、积温和生长季长度会影响成熟与当年产卵，但这些局地结果不能外推为全分布区威胁等级。',
      '频繁割草、清除高草和广谱杀虫剂可能同时移除栖架、卵鞘与猎物；目前缺少物种级暴露量和种群效应估计。',
      '商业搬运和释放卵鞘会扩散北美引入种群；公开记录无法区分短期释放点与稳定繁殖种群。',
      '引入区的广食捕食会波及传粉者、寄生蜂和其他捕食者，影响方向与强度随样地和猎物群落变化。',
      '与 Tenodera aridifolia、T. angustipennis 的历史混用和外观相似会污染分布、贸易和种群记录。',
    ],
    conservationActions: [
      '在中国、韩国、日本、俄罗斯、尼泊尔、泰国和台湾开展凭证标本支持的标准化成虫、若虫与卵鞘调查。',
      '分别记录亚洲原生种群和北美引入种群，不把两套分布、丰度或管理目标合并。',
      '调查时保存日期、龄期、性别、搜索时间、植被高度、割草与用药记录，建立可重复的物候和趋势基线。',
      '用前足基部颜色、翅、前胸和雄性生殖器等组合特征鉴定，并在范围边缘或贸易材料中加入 DNA 凭证。',
      '北美管理机构应限制购买和户外释放非本地卵鞘，并区分临时释放点与繁殖种群。',
      '园艺和农业宣传不应把中华大刀螳包装成只吃害虫的定向天敌，应说明它也捕食传粉者和捕食性节肢动物。',
      '定期复核 IUCN、CITES、原生区趋势和引入区影响；NE 与未列入 CITES 都不能替代风险评估。',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'male-voucher-length',
        label: '雄性标本总长',
        value: '54.2–89.1',
        unit: 'mm',
        note: '韩国分类修订的成虫凭证标本范围，头顶至腹端；不是全球体长范围。',
      },
      {
        key: 'female-voucher-length',
        label: '雌性标本总长',
        value: '58.2–100.8',
        unit: 'mm',
        note: '同一韩国分类修订样本；与雄性区间重叠。',
      },
      {
        key: 'ootheca-length',
        label: '卵鞘长度',
        value: '30.0–42.2',
        unit: 'mm',
        note: '韩国检查卵鞘范围；约有 15 至 29 个卵室，卵室数不是卵数。',
      },
      {
        key: 'nymphal-molts',
        label: '若虫蜕皮',
        value: '6–7',
        unit: '次',
        note: 'NC State Extension 的物种概括；食物和温度会改变发育速度与龄期轨迹。',
      },
    ],
    media: {
      image:
        './images/species/chinese-mantis/01-adult-female-vegetation-portrait.webp',
      alt: '温带草本边缘，一只完整绿色型中华大刀螳成年雌虫停在高茎右侧，六足与折叠翅清楚可见',
      focalPoint: { x: 0.69, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/chinese-mantis/02-adult-male-brown-morph.webp',
          alt: '温带老田枯茎上，一只完整褐色型中华大刀螳成年雄虫呈细长身体与越过腹端的闭合前翅',
          title: '细身雄虫与褐色型',
          caption:
            '雄虫通常腹部较窄、触角较长；褐色是颜色型，不是性别或物种的单独判据。',
          focalPoint: { x: 0.48, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/chinese-mantis/03-prestrike-cricket-tracking.webp',
          alt: '一只绿色中华大刀螳转头注视另一根细枝上的一只小型蟋蟀，双方保持间隙且尚未接触',
          title: '打击前的视觉锁定',
          caption:
            '画面重建视觉追踪与捕捉足预备姿势，不提供固定打击距离、猎物偏好或捕获结果。',
          focalPoint: { x: 0.56, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/chinese-mantis/04-distant-courtship-approach.webp',
          alt: '晚夏草茎上，一只细长雄性中华大刀螳与一只宽腹雌虫相隔约一个体长彼此面对',
          title: '保持距离的求偶接近',
          caption:
            '雄虫会依据雌虫的捕食风险调整接近；性食同类会发生，却不是每次交配的固定结局。',
          focalPoint: { x: 0.52, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/chinese-mantis/05-ootheca-on-shrub-branch.webp',
          alt: '晚秋老田灌木枝上，一枚完整浅褐色桶状中华大刀螳卵鞘牢固附着，周围没有成虫或若虫',
          title: '枝上的跨冬卵鞘',
          caption:
            '韩国样本长 30.0 至 42.2 毫米；画面不展示卵数、存活率、孵化日期或母体护卵。',
          focalPoint: { x: 0.52, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/chinese-mantis/06-successional-old-field-habitat.webp',
          alt: '北美温带演替老田中，一只中华大刀螳停在高草本顶端，周围是开阔高草、秋麒麟草与零散幼树',
          title: '引入区的演替老田',
          caption:
            '场景代表北美引入种群使用的老田结构，不代表亚洲原生区、真实地点、当地数量或全球趋势。',
          focalPoint: { x: 0.64, y: 0.39 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: CHINESE_MANTIS_SOURCES,
    featured: true,
    publishedAt: CHINESE_MANTIS_CONTENT_DATE,
    updatedAt: CHINESE_MANTIS_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
