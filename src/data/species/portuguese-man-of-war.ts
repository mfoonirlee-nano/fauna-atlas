import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const PORTUGUESE_MAN_OF_WAR_SOURCE_DATE = '2026-08-29' as const;

const PORTUGUESE_MAN_OF_WAR_CONTENT_DATE = '2026-08-29' as const;

const PORTUGUESE_MAN_OF_WAR_SOURCES = [
  {
    title: 'WoRMS: Physalia physalis (Linnaeus, 1758), AphiaID 135479',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=135479',
    kind: 'taxonomy',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST: AphiaClassificationByAphiaID 135479',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/135479',
    kind: 'taxonomy',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'Population genomics of a sailing siphonophore reveals genetic structure in the open ocean',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12224019/',
    kind: 'taxonomy',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'A history of the sub-order Cystonectae (Hydrozoa: Siphonophorae)',
    url: 'https://doi.org/10.11646/zootaxa.4669.1.1',
    kind: 'taxonomy',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'Physalia mikazuki sp. nov. (phylum Cnidaria; class Hydrozoa) from Tohoku Japan, and its Improvised Stomachs',
    url: 'https://hdl.handle.net/10097/0002008267',
    kind: 'taxonomy',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      "Physalia mikazuki sp. nov. blown into Japan's northeast (Tohoku) at the whim of marine ecosystem change",
    url: 'https://doi.org/10.3389/fmars.2025.1653958',
    kind: 'taxonomy',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title: '海洋保育署：臺灣百種海洋動物圖鑑II－僧帽水母',
    url: 'https://www.oca.gov.tw/ch/home.jsp?dataserno=202202250017&id=522&mcustomize=ocamaritime_view.jsp&parentpath=0%2C298%2C386',
    kind: 'general',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title: 'OBIS: Physalia physalis, taxon 135479',
    url: 'https://obis.org/taxon/135479',
    kind: 'distribution',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'Portuguese Man-of-War (Physalia physalis) in the Mediterranean: A permanent invasion or a casual appearance?',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4480229/',
    kind: 'distribution',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'Insights on the origin and drift trajectories of Portuguese man of war (Physalia physalis) over the Celtic Sea shelf area',
    url: 'https://doi.org/10.1016/j.ecss.2020.107033',
    kind: 'distribution',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'Relationship between dimorphism and drift in the Portuguese man-of-war',
    url: 'https://doi.org/10.1016/j.csr.2020.104269',
    kind: 'distribution',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'Spatiotemporal patterns and environmental drivers of Physalia physalis strandings along mainland Portugal (northeastern Atlantic)',
    url: 'https://doi.org/10.1016/j.ecss.2025.109674',
    kind: 'distribution',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      "Unravelling environmental drivers and patterns of Portuguese man o' war blooms in two ocean regions: North Atlantic and the Southeast Pacific",
    url: 'https://doi.org/10.1016/j.marpolbul.2024.117278',
    kind: 'distribution',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'Morphology and development of the Portuguese man of war, Physalia physalis',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6820529/',
    kind: 'ecology',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title: "NOAA Ocean Service: What is a Portuguese Man o' War?",
    url: 'https://oceanservice.noaa.gov/facts/portuguese-man-o-war.html',
    kind: 'general',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'Taxonomic redescription of the Portuguese man-of-war, Physalia physalis, from Brazil',
    url: 'https://www.scielo.br/j/isz/a/3yH38SCcFtJPJGJvw94DNtJ/?format=pdf&lang=en',
    kind: 'taxonomy',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'Predation on fish larvae by Physalia physalis, the Portuguese man of war',
    url: 'https://doi.org/10.3354/meps019189',
    kind: 'ecology',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'The chemical control of feeding in the Portuguese Man-of-War, Physalia physalis L.',
    url: 'https://doi.org/10.2307/1538954',
    kind: 'ecology',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title: 'Dimorphism in the Portuguese Man-of-War',
    url: 'https://doi.org/10.1038/177290b0',
    kind: 'ecology',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'Hydrodynamics of sailing of the Portuguese man-of-war Physalia physalis',
    url: 'https://doi.org/10.1098/rsif.2008.0457',
    kind: 'ecology',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'The source of carbon monoxide in the float of the Portuguese man-of-war, Physalia physalis L.',
    url: 'https://doi.org/10.1242/jeb.37.4.698',
    kind: 'ecology',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title: 'Composition of Float Gases of Physalia physalis',
    url: 'https://doi.org/10.3181/00379727-107-26724',
    kind: 'ecology',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title: 'Biliprotein coloration of Physalia physalis',
    url: 'https://doi.org/10.1016/0305-0491(71)90099-X',
    kind: 'ecology',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title: 'Physalia nematocysts: utilized by mollusks for defense',
    url: 'https://pubmed.ncbi.nlm.nih.gov/17742854/',
    kind: 'ecology',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title: 'Tremoctopus violaceus Uses Physalia Tentacles as Weapons',
    url: 'https://pubmed.ncbi.nlm.nih.gov/17829125/',
    kind: 'ecology',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title: 'Physalia gonodendra are not yet sexually mature when released',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11450099/',
    kind: 'ecology',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'The toxicity of Physalia physalis: systematic review and experimental study',
    url: 'https://pubmed.ncbi.nlm.nih.gov/40248951/',
    kind: 'ecology',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'Assessing the Efficacy of First-Aid Measures in Physalia sp. Envenomation, Using Solution- and Blood Agarose-Based Models',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5450697/',
    kind: 'ecology',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title:
      'ANZCOR Guideline 9.4.5: First Aid Management of Marine Envenomation',
    url: 'https://www.anzcor.org/home/first-aid-for-bites-stings-and-poisoning/guideline-9-4-5-first-aid-management-of-marine-envenomation',
    kind: 'general',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search: Physalia physalis',
    url: 'https://www.iucnredlist.org/search?query=Physalia%20physalis&searchType=species',
    kind: 'conservation',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title: 'CITES: Appendices I, II and III',
    url: 'https://cites.org/eng/app/appendices.php',
    kind: 'conservation',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist of CITES Species',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: PORTUGUESE_MAN_OF_WAR_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-physalia-physalis',
    slug: 'portuguese-man-of-war',
    names: {
      zh: '僧帽水母',
      en: 'Portuguese Man-of-War',
      aliases: [
        '葡萄牙战舰',
        'Atlantic Portuguese Man-of-War',
        "Portuguese Man o' War",
      ],
    },
    scientificName: 'Physalia physalis',
    taxonomy: animalTaxonomy(
      taxon('Cnidaria', '刺胞动物门'),
      taxon('Hydrozoa', '水螅纲'),
      taxon('Siphonophorae', '管水母目'),
      taxon('Physaliidae', '僧帽水母科'),
      taxon('Physalia', '僧帽水母属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['北美洲', '南美洲', '欧洲', '非洲'],
      regions: [
        '北大西洋亚热带环流与马尾藻海',
        '墨西哥湾流至新英格兰和百慕大一带',
        '北大西洋中部至亚速尔、加那利和伊比利亚外海',
        '西南大西洋与其他僧帽水母属物种的重叠区',
        '异常风流年份经直布罗陀暂时进入地中海的输送路径',
      ],
      countries: [
        '美国',
        '英国海外领地百慕大',
        '爱尔兰',
        '西班牙',
        '葡萄牙',
        '巴西',
      ],
      range:
        '现行物种边界下，本种主要分布于北大西洋和西南大西洋的海气界面；亚热带环流、墨西哥湾流和北大西洋流可将群体输送到欧洲温带海岸，特殊风流组合也会使其暂时进入地中海。2025年前所谓全球分布的记录混入了其他Physalia物种，西南大西洋又有多种重叠；国家列表只列代表性海岸，不表示每条历史记录都已按当前种界重鉴。',
    },
    habitats: [
      {
        name: '大西洋海气界面漂浮带',
        realm: 'marine',
        description:
          '浮囊跨在水面，其他个体单位垂在水下，属于海面漂浮生物（pleuston）。开放海面是主要生境，海滩只是搁浅地点。',
        isPrimary: true,
      },
      {
        name: '热带和亚热带外海环流',
        realm: 'marine',
        description:
          '北大西洋和西南大西洋暖水及其流系承载群体，风、表层流、镜像帆型和触手水阻共同决定漂移轨迹。',
      },
      {
        name: '温带大西洋输送走廊',
        realm: 'marine',
        description:
          '墨西哥湾流、北大西洋流和区域风场可把群体送到欧洲及北美温带海岸；到岸不证明当地繁殖或永久定居。',
      },
    ],
    measurements: {},
    diet: {
      types: ['carnivore', 'piscivore'],
      foods: [
        '鱼苗和小型鱼类',
        '头足类',
        '毛颚动物',
        '鳗形叶状幼体',
      ],
      description:
        '无口的触手体用带刺丝囊的触手截获并麻痹猎物，有口的摄食体包覆和消化猎物，营养再通过共享胃循环腔分给整群。历史食谱样本采用较宽的旧物种边界，尚未全部按新分类复核。',
    },
    activity: [
      '以肌肉和囊内压力抬起帆脊，整群主要随风与表层流漂移',
      '左型和右型互为镜像，通常被同一阵风送向下风线的不同侧面',
      '用多根长短不等的捕食触手在水下截获软体猎物',
      '收缩触手，把猎物送到多个gastrozooid共同包覆和消化',
      '所有zooid通过共享胃循环腔交换营养并作为一个整体活动',
    ],
    tags: [
      '刺胞动物门',
      '水螅纲',
      '管水母目',
      '克隆zooid群体',
      '海气界面漂浮生物',
      '风流漂移',
      '左右镜像型',
      '有毒刺丝囊',
      '大西洋',
      'IUCN未评估',
    ],
    summary:
      '僧帽水母由许多出芽形成、永久相连的个体单位组成，浮囊受风和表层流推动，长触手捕获猎物。现行本种主要见于大西洋；搁浅群体和断裂触手仍可能蜇伤。',
    description:
      '僧帽水母 Physalia physalis 是许多个体单位（zooid）永久相连的克隆群体。浮囊内含空气和比例可变的一氧化碳；肌肉与囊内压力抬起帆脊，风、表层流、左右帆型与触手阻力共同影响漂移。无口的触手体（tentacular palpon）带有捕食触手，有口的摄食体（gastrozooid）负责消化，生殖枝（gonodendron）承载繁殖个体。2025 年的 151 份基因组研究识别出五个强分化谱系和至少四种，2026 年第五个名称发表后，WoRMS 接受五种；本种可靠范围主要在北大西洋和西南大西洋。群体雌雄异体，卵、浮浪幼体及部分繁殖过程仍未连续直接观察。触手通常约 10 米，极端可达 30 米，搁浅、断裂或看似干燥的组织也可能蜇伤。应离水，不触摸、不揉搓或用淡水冲洗伤处，并遵循当地卫生、救生或毒物中心协议；醋的使用须遵循当地规则。IUCN 尚未评估，全球趋势未知。',
    storySections: [
      {
        key: 'surface-colony',
        label: '群体结构',
        title: '浮囊在水面，个体单位垂在水下',
        body: '半透明的蓝紫或粉色浮囊跨在水面，红色摄食体和蓝绿色触手垂入水中。整群从一个胚胎出芽形成，许多遗传同源的个体单位（zooid）永久相连，共同漂流和进食。',
      },
      {
        key: 'zooid-specialization',
        label: '分工个员',
        title: '捕食、消化与繁殖各有分工',
        body: '长触手属于无口的触手体，负责截获猎物；有口的摄食体包覆并消化食物。它们与基部生殖枝反复组成三联组，共享胃循环系统。',
      },
      {
        key: 'mirror-sails',
        label: '左右型与漂流',
        title: '镜像帆型漂向下风线不同侧面',
        body: '左型和右型互为镜像。肌肉抬起帆脊，风推动露出水面的部分，表层流和触手从水下拖曳，两型因而偏向下风线不同侧面。左右型并不由半球或性别决定，漂移也没有主动选择目的地的证据。',
      },
      {
        key: 'contractile-fishing-net',
        label: '触手与捕食',
        title: '捕食触手极端伸展可达三十米',
        body: '捕食触手通常伸展约十米，极端可达三十米。鱼苗接触密集刺丝囊后被截住和麻痹，触手收缩，把猎物送到摄食体消化，营养再进入共享胃腔。伸展长度随状态改变，三十米不是身体长度或栖息深度。',
      },
      {
        key: 'missing-life-history',
        label: '繁殖与未知',
        title: '每个群体只有一种性别',
        body: '每个群体为雄性或雌性，繁殖个体排列在树枝状生殖枝上。本种成熟生殖枝的脱落、配子成熟和受精过程尚未连续观察；最早幼体的认识来自固定标本，卵与浮浪幼体（planula）仍缺资料，也没有支持底栖水螅阶段的证据。',
      },
      {
        key: 'atlantic-name-beach-warning',
        label: '新种界与安全',
        title: '分类改变后重新核对分布',
        body: '2025 年前，全球 Physalia 常被合在一个学名下。基因组与形态研究重新划界后，Physalia physalis 主要指大西洋的红色多触手、高帆型。风流把群体送到岸边时，完整群体、断触手和干燥残片都可能蜇伤，应保持距离并遵循当地救生指导。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的名字，在新分类中缩小范围',
        body: '僧帽水母的命名记录可追溯到林奈 1758 年的描述，现用学名为 Physalia physalis。早期资料常把全球 Physalia 合为这一物种。2025 年基因组与形态研究重新分开谱系，2026 年第五个名称发表后，WoRMS 接受五种，本种可靠范围主要收在大西洋。',
      },
    ],
    keyFacts: [
      '当前接受学名为Physalia physalis (Linnaeus, 1758)，WoRMS AphiaID为135479。',
      '六级分类采用Animalia、Cnidaria、Hydrozoa、Siphonophorae、Physaliidae和Physalia。',
      '它由一个胚胎出芽形成许多遗传同源zooid，是高度整合的克隆群体，不是单体水母或多物种共生。',
      '无口的tentacular palpon带捕食触手，有口而无捕食触手的gastrozooid负责摄食和消化。',
      '浮囊气体由空气和比例可变的一氧化碳组成；一氧化碳不是毒液来源。',
      '现行本种的高置信形态组合包括红色摄食体、多个主要触手，以及接近浮囊等高并几乎延至前端的帆脊。',
      '浮囊可呈半透明蓝、紫或粉色，单凭颜色不足以鉴定物种。',
      '外层肌肉和囊内压力可以抬起帆脊，但成年群体主动放气下潜尚无充分证据。',
      '左型和右型互为镜像，风会把两型送向下风线的不同侧面；左右型不由半球或性别决定。',
      '2025年研究测序151份样本、评分4,047张可用观察照片，识别五个强分化谱系和至少四个物种。',
      '第五谱系在2026年取得有效学名Physalia mikazuki；截至访问日，WoRMS接受Physalia属五种。',
      '本种可靠范围主要是北大西洋和西南大西洋；旧全球记录混入其他Physalia物种，不能直接沿用。',
      '西南大西洋存在多种重叠，历史巴西记录仍需凭证照片或基因材料复核。',
      '成熟和较大幼体属于海气界面的pleuston，海滩是搁浅地点而不是正常繁殖生境。',
      '约15厘米描述帆脊露水高度；30米描述触手极端伸展，二者都不是浮囊长度。',
      '历史胃含物支持鱼苗、小型鱼类、头足类、毛颚动物和鳗形叶状幼体，但旧样本未按新种界复核。',
      '刺丝囊毒液用于捕食和防御，可造成剧痛、条索状风团及少见但可能严重的全身反应。',
      '搁浅、断裂或看似干燥的残体仍可能蜇伤；实验中的120天结果不能外推成每块海滩残片的固定毒力期限。',
      '蜇伤急救没有全球统一醋规则；应离水、不揉搓、不用淡水冲洗，并遵循当地急救协议。',
      '群体雌雄异体，整群的gonophore只有一种性别。',
      '成熟gonodendron何时脱落、配子如何成熟和受精，以及卵与planula阶段，仍缺本种连续直接观察。',
      '最小描述幼体为2毫米固定拖网标本；没有证据支持底栖水螅阶段。',
      '海龟、海神海蛞蝓、紫螺、毯蛸和僧帽水母鱼的多数记录采用旧单种口径，应保守写作Physalia属关系。',
      'IUCN 尚未正式评估本种，全球种群趋势未知。',
      'CITES当前附录和官方物种清单未列Physalia；区域搁浅记录不能直接换算成全球种群趋势。',
    ],
    threats: [
      '全球丰度和种群趋势尚未评估，无法判断是否存在持续下降',
      '历史单种分类把多个Physalia物种混在一起，遮蔽物种级分布和趋势',
      '风场、环流与海洋气候变化可能重排区域出现和搁浅风险，但方向不一致',
      '岸上清除、污染和其他人类影响缺少可量化的本种种群效应证据',
    ],
    conservationActions: [
      '用当前五种口径复核博物馆、OBIS和公民科学历史记录',
      '采样时保留照片、凭证标本、基因材料、浮囊比例、触手数、左右型、日期和坐标',
      '建立大西洋专属的离岸观测与搁浅时间序列，并校正观察努力',
      '把观测与风、表层流、海温、生产力和海滩地形联合建模',
      '发布清晰的海滩预警和不接触指引，培训救生员按当地协议处置蜇伤',
      '在证据不足时优先监测，不实施无依据的繁育、放流或广泛清除',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'sail-height',
        label: '帆脊最高露水高度',
        value: '约15',
        unit: 'cm',
        note: 'NOAA所述6英寸换算；不是浮囊长度。',
      },
      {
        key: 'tentacle-maximum',
        label: '触手极端伸展长度',
        value: '30',
        unit: 'm',
        note: '柔软触手的报道极值，不是固定安全半径或栖息深度。',
      },
      {
        key: 'genomes',
        label: '全球研究测序样本',
        value: '151',
        note: '2025年研究据此识别五个谱系和至少四个物种。',
      },
      {
        key: 'smallest-larva',
        label: '最小描述固定幼体',
        value: '2',
        unit: 'mm',
        note: '由拖网固定标本重建，不是活体连续发育观察。',
      },
    ],
    media: {
      image:
        './images/species/portuguese-man-of-war/01-atlantic-surface-colony-portrait.webp',
      alt: '北大西洋海面的一个僧帽水母群体，半透明蓝紫粉色高帆横跨水线，红色摄食体和多根蓝绿色触手垂在水下',
      focalPoint: { x: 0.68, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/portuguese-man-of-war/02-specialized-zooids-under-float.webp',
          alt: '僧帽水母浮囊下方的红色摄食体、带蓝色触手的捕食个员和附着生殖枝近景',
          title: '浮囊下的分工群体',
          caption:
            'AI生成科学情景重建；画面不能鉴定个体、计数zooid、测量结构，也不能单独证明捕食与摄食分工行为。',
          focalPoint: { x: 0.55, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/portuguese-man-of-war/03-raised-crest-wind-drift.webp',
          alt: '一个僧帽水母群体在风纹海面抬起不对称高帆，多根长短不等的触手垂入水下',
          title: '抬起的帆脊与风流',
          caption:
            'AI生成科学情景重建；不对称帆形只表现单个群体的可能姿态，不能判定左右型、鉴定物种、测量偏角或速度，也不证明图示轨迹曾被直接观察。',
          focalPoint: { x: 0.5, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/portuguese-man-of-war/04-unequal-tentacles-prey-contact.webp',
          alt: '僧帽水母的一根蓝色捕食触手与一条完整小鱼苗单点接触，其余长短不等的触手分散在蓝色水中',
          title: '会收缩的捕食网',
          caption:
            'AI生成科学情景重建；画面不能鉴定群体、测量触手或毒液，也不证明这一捕获瞬间、猎物种类或收缩路径已被直接记录。',
          focalPoint: { x: 0.59, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/portuguese-man-of-war/05-attached-developing-gonodendron.webp',
          alt: '仍附着在僧帽水母群体腹侧的发育中分枝gonodendron科学情景重建',
          title: '仍附着的发育中生殖枝',
          caption:
            '仅为仍附着、尚在发育的gonodendron之AI科学情景重建；不能鉴定或测量标本，也不证明成熟脱落、配子释放、受精或后续行为。',
          focalPoint: { x: 0.54, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/portuguese-man-of-war/06-stranded-colony-no-contact.webp',
          alt: '湿润大西洋浪线上搁浅的一个僧帽水母群体，多根长短不等的细触手拖过湿沙，画面中无人或动物接触',
          title: '搁浅后仍须远离',
          caption:
            'AI生成科学情景重建；画面不能鉴定或测量搁浅物，也不证明群体已经死亡、残体的实际毒力或毒力维持时长。任何部分都不要触摸。',
          focalPoint: { x: 0.55, y: 0.59 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...PORTUGUESE_MAN_OF_WAR_SOURCES,
      {
        title: 'GBIF: Physalia physalis (Linnaeus, 1758) nomenclatural record',
        url: 'https://www.gbif.org/species/2264734',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: PORTUGUESE_MAN_OF_WAR_CONTENT_DATE,
    updatedAt: PORTUGUESE_MAN_OF_WAR_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
