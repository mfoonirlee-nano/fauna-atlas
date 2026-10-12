import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const COMMON_BRITTLESTAR_SOURCE_DATE = '2026-09-01' as const;

const COMMON_BRITTLESTAR_CONTENT_DATE = '2026-09-01' as const;

const COMMON_BRITTLESTAR_SOURCES = [
  {
    title: 'World Ophiuroidea Database / WoRMS: Ophiothrix fragilis (AphiaID 125131)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=125131',
    kind: 'taxonomy',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS: complete Aphia classification for Ophiothrix fragilis',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/125131',
    kind: 'taxonomy',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS: synonyms for Ophiothrix fragilis',
    url: 'https://www.marinespecies.org/rest/AphiaSynonymsByAphiaID/125131',
    kind: 'taxonomy',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS: vernacular names for Ophiothrix fragilis',
    url: 'https://www.marinespecies.org/rest/AphiaVernacularsByAphiaID/125131',
    kind: 'general',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'EUNIS: Ophiothrix fragilis conservation status',
    url: 'https://eunis.eea.europa.eu/species/45131',
    kind: 'conservation',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List search: Ophiothrix fragilis',
    url: 'https://www.iucnredlist.org/search?query=Ophiothrix%20fragilis&searchType=species',
    kind: 'conservation',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'MarLIN: Common brittlestar species review',
    url: 'https://www.marlin.ac.uk/species/detail/1198',
    kind: 'general',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Naturalis: Macrobenthos of the North Sea identification profile',
    url: 'https://ns-echinodermata.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?id=122174',
    kind: 'general',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS: recorded distributions for Ophiothrix fragilis',
    url: 'https://www.marinespecies.org/rest/AphiaDistributionsByAphiaID/125131',
    kind: 'distribution',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Muths et al. 2009: Genetic patchiness in northeast Atlantic populations',
    url: 'https://doi.org/10.3354/ab00138',
    kind: 'taxonomy',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Pérez-Portela et al. 2013: Cryptic speciation in European Ophiothrix',
    url: 'https://doi.org/10.1111/j.1463-6409.2012.00573.x',
    kind: 'taxonomy',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Taboada & Pérez-Portela 2016: Atlantic-Mediterranean phylogeography',
    url: 'https://doi.org/10.1038/srep32425',
    kind: 'distribution',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Olbers et al. 2022: South African echinoderm DNA barcodes',
    url: 'https://doi.org/10.1371/journal.pone.0270321',
    kind: 'taxonomy',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Micael et al. 2019: Echinoderm fauna of the Azores',
    url: 'https://doi.org/10.11646/zootaxa.4639.1.1',
    kind: 'distribution',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Davoult & Gounin 1995: Suspension feeding in the Dover Strait',
    url: 'https://doi.org/10.1016/0272-7714(95)90027-6',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Warner & Woodley 1975: Suspension-feeding behaviour',
    url: 'https://doi.org/10.1017/S0025315400015848',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Allen 1998: Particle-retention efficiency during suspension feeding',
    url: 'https://doi.org/10.1007/s002270050405',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Nagabhushanam & Colman 1959: Carrion-eating by ophiuroids',
    url: 'https://doi.org/10.1038/184285a0',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Broom 1975: Aggregation behaviour of Ophiothrix fragilis',
    url: 'https://doi.org/10.1017/S0025315400015836',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Lozach et al. 2011: Sampling dense Bay of Seine epifauna',
    url: 'https://doi.org/10.1016/j.marpolbul.2011.09.012',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Dauvin et al. 2013: Spatiotemporal patterns in the Bay of Seine',
    url: 'https://doi.org/10.1016/j.ecss.2013.07.005',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Murat et al. 2016: Silting and anoxia in a dense brittlestar bed',
    url: 'https://doi.org/10.1016/j.csr.2016.01.003',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Morgan & Jangoux 2002: Reproductive cycle and spawning induction',
    url: 'https://doi.org/10.1080/07924259.2002.9652771',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Morgan & Jangoux 2005: Larval development and adult settlement cues',
    url: 'https://doi.org/10.2307/3593117',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Morgan & Jangoux 2004: Juvenile-adult relationship',
    url: 'https://doi.org/10.1007/s00227-004-1327-5',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Morgan & Jangoux 2004: Arm regeneration and reproductive cost',
    url: 'https://www.vliz.be/imisdocs/publications/289314.pdf',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Goharimanesh et al. 2023: Ophiuroidea arm kinematics',
    url: 'https://doi.org/10.1186/s12983-023-00495-y',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Clark et al. 2018: Skeletal mobility and brittle-star arm function',
    url: 'https://doi.org/10.1111/joa.12887',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Deridoux et al. 2026: Tube-foot dynamics in sea-star locomotion',
    url: 'https://doi.org/10.1073/pnas.2509681123',
    kind: 'ecology',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'MarESA: Brittlestar-bed physical pressures and fishing evidence',
    url: 'https://www.marlin.ac.uk/habitats/detail/1068',
    kind: 'conservation',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Dupont et al. 2008: Acidification effects on larvae',
    url: 'https://doi.org/10.3354/meps07800',
    kind: 'conservation',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
  {
    title: 'Bradshaw et al. 2002: Scallop-dredge disturbance in the Irish Sea',
    url: 'https://doi.org/10.1016/S1385-1101(02)00096-5',
    kind: 'conservation',
    accessedAt: COMMON_BRITTLESTAR_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-ophiothrix-fragilis',
    slug: 'common-brittle-star',
    names: {
      zh: '脆刺蛇尾',
      en: 'Common Brittlestar',
      aliases: ['Common Brittle Star'],
    },
    scientificName: 'Ophiothrix fragilis',
    taxonomy: animalTaxonomy(
      taxon('Echinodermata', '棘皮动物门'),
      taxon('Ophiuroidea', '蛇尾纲'),
      taxon('Amphilepidida', 'Amphilepidida目'),
      taxon('Ophiotrichidae', '刺蛇尾科'),
      taxon('Ophiothrix', '刺蛇尾属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['欧洲'],
      regions: [
        '东北大西洋欧洲陆架与亚速尔群岛',
        '北海与英吉利海峡',
        '伊比利亚大西洋岸与地中海',
      ],
      countries: [
        '挪威',
        '瑞典',
        '英国',
        '爱尔兰',
        '法国',
        '比利时',
        '荷兰',
        '德国',
        '西班牙',
        '葡萄牙',
        '希腊',
      ],
      range:
        '核心可复核范围位于东北大西洋欧洲岸、北海、英吉利海峡、亚速尔及地中海。传统资料把同名动物向南记录到南非，但欧洲南部、深水和南非材料含未命名或深分化谱系，范围边缘仍需凭证标本与分子资料复核。',
      center: { lat: 50.8, lng: 1.3 },
    },
    habitats: [
      {
        name: '潮流冲刷的浅海岩礁与粗底质',
        realm: 'marine',
        isPrimary: true,
        description:
          '栖居于基岩、巨砾、卵石、砾石和粗混合沉积表面；潮下带可形成高密度蛇尾床，个体把腕伸入底层水流进行悬浮摄食。',
      },
      {
        name: '低潮带石下与裂隙',
        realm: 'marine',
        description:
          '潮间带个体多藏在石块、空壳和岩缝中，常让部分腕伸向开阔水流。',
      },
      {
        name: '陆架砾石与泥质粗砂蛇尾床',
        realm: 'marine',
        description:
          '英吉利海峡和塞纳湾的表栖斑块可占据砾石及泥质粗砂；斑块密度和位置会随潮流、风暴、洪水与细颗粒供给改变。',
      },
    ],
    measurements: {},
    diet: {
      types: ['filter-feeder', 'omnivore'],
      foods: [
        '浮游植物与硅藻',
        '悬浮和再悬浮有机碎屑',
        '小型浮游颗粒',
        '偶然遇到的腐肉',
      ],
      description:
        '脆刺蛇尾把两三条带棘腕抬进底层水流，腕部管足和棘截留颗粒；管足将颗粒聚成食团，再沿腕送到腹面口部。它以悬浮摄食为主，也会机会性摄取底栖碎屑和腐肉。',
    },
    activity: [
      '用柔韧腕在底面划拨爬行，成体不以管足作为主要推进器官',
      '在适宜流速下抬起两三条腕悬浮摄食，强流时把腕收回底面',
      '离开蛇尾床后搜索并重新接触同种个体',
      '雌雄把配子释放到海水中完成体外受精，胚胎形成摄食型 ophiopluteus 幼体',
      '腕断裂或受损后可从残端再生',
    ],
    tags: [
      '海洋',
      '东北大西洋',
      '棘皮动物',
      '蛇尾纲',
      '粗混合底',
      '潮流冲刷海床',
      '悬浮摄食',
      '蛇尾床',
      '腕部划拨运动',
      '腕再生',
      '广播产卵',
      '浮游幼体',
      '隐存谱系',
    ],
    summary:
      '脆刺蛇尾生活在东北大西洋的岩石和粗颗粒海床上。它用分节长腕划拨前进，把部分腕抬入水流过滤食物，局地还会聚成密集的蛇尾床。',
    description:
      '脆刺蛇尾的五角中央盘与五条细长腕界线分明，腕内有骨片、肌肉和韧带，两侧排列细棘。腕主要负责划拨前进，管足则参与摄食、感觉与附着。潮流适中时，它抬起两三条腕，截取浮游植物和有机碎屑；损伤的腕也能从残端再生。传统广分布记录混有多个深分化谱系，欧洲东北大西洋、北海、亚速尔与地中海的核心记录较清楚，外围材料仍需复核。',
    storySections: [
      {
        key: 'brittle-star-not-sea-star',
        label: '身份',
        title: '中央盘与长腕各承担什么功能',
        body: '脆刺蛇尾属于蛇尾纲。五条细腕从五角中央盘处突然收窄，盘内集中胃和生殖器官，腕内则排列关节状骨片、肌肉和神经。完整腕约为盘径五倍，每个腕节两侧常见成列锯齿状棘；深紫、红、橙、黄和近白个体都可能出现，颜色不能单独完成鉴定。',
      },
      {
        key: 'rowing-with-jointed-arms',
        label: '运动',
        title: '分节腕推动身体转向',
        body: '蛇尾常让一条腕朝向行进方向，两侧腕向后推撑，其余腕随姿态调整角色；转向时无需先旋转出固定头部。腕内骨片关节和肌肉产生弯曲，管足承担摄食、感觉与附着，却不是成体的主要推进器官。海星步行时会让腹面大量管足循环伸出、附着和回收。现有运动学来自其他蛇尾与海星，不能据此给脆刺蛇尾设定固定步态、腕序或速度。',
      },
      {
        key: 'arms-raised-into-current',
        label: '滤食',
        title: '两三条腕抬进水流，管足把颗粒送向口部',
        body: '个体用部分腕支撑身体，把其余带棘腕伸入近底水流。浮游植物和有机碎屑接触腕棘与管足后，管足把颗粒聚成食团并沿腕传到腹面口部。流速和粒径会改变捕获效果；多佛海峡的局地研究不能充当全范围固定流速阈值。',
      },
      {
        key: 'patchy-brittlestar-beds',
        label: '聚集',
        title: '相邻个体互相支撑，铺成斑块状蛇尾床',
        body: '脆刺蛇尾会搜索并重新接触同类，密集群体也让个体在水流中抬起摄食腕。英吉利海峡和塞纳湾曾记录每平方米数千只的斑块，床的位置会随风暴、洪水、潮流和沉积供给移动。抓斗、照片和视频的探测率不同，局地高值不能改写成通常密度或全球数量。',
      },
      {
        key: 'fragile-arms-regrow',
        label: '再生',
        title: '折腕能从残端再长，修复会占用身体储备',
        body: '腕断裂或受损后，保留中央盘的个体可从腕残端继续再生。荷兰 Oosterschelde 一项现场研究发现，再生会轻微影响能量储存和生殖腺生长，同时再生四五条腕的个体很少。断下的单腕不会自行变成完整脆刺蛇尾。',
      },
      {
        key: 'count-the-bed-and-lineage',
        label: '监测',
        title: '调查蛇尾床还需分清不同谱系',
        body: '普通抓斗会漏掉底表密集分布的蛇尾，潜水摄影、视频样带或 ROV 更适合绘制床边界，并能重复比较盘径、稚体和再生腕。欧洲深浅水与南非同名材料还包含深分化谱系；调查者需要保存整只凭证、背腹面照片和组织样本，避免把不同谱系的变化合并成一条趋势。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1789 年的命名仍需结合现代谱系研究',
        body: '脆刺蛇尾的正式科学命名记录署名为 Abildgaard，发表在 O. F. Müller 的著作中，年份为 1789；现用名称为 Ophiothrix fragilis。后来的分子研究发现，传统上被归为同一物种的不同地区材料包含深分化谱系。因此，历史名称和早期分布记录还需要标本与遗传证据来重新核对。',
      },
    ],
    keyFacts: [
      'WoRMS 接受名为 Ophiothrix fragilis (Abildgaard in O.F. Müller, 1789)，AphiaID 125131。',
      '脆刺蛇尾属于蛇尾纲、刺蛇尾科和刺蛇尾属，WoRMS 将其置于 Amphilepidida 目；旧资料也使用 Ophiurida。',
      '脆刺蛇尾的英文俗名为 common brittlestar；鉴定时应结合学名、产地和形态。',
      '东北大西洋识别资料给出中央盘最大直径约 20 毫米，单腕约为盘径五倍。',
      '每个腕节单侧常见约七枚直立侧棘；地域和个体形态会变化，AI 图不能用于逐棘鉴定。',
      '体色可呈深紫、红、橙、黄、近白或横带状，颜色不是充分的种级鉴定特征。',
      '蛇尾主要用腕划拨推进，海星主要用管足步行；这一对照属于纲级机制，不提供本种速度或固定腕序。',
      '悬浮颗粒由腕棘和管足截留，再由管足聚成食团并沿腕送往口部。',
      '蛇尾床的局地密度可达每平方米数千只，取样方法和斑块位置会大幅改变估计值。',
      '雌雄异体并广播产卵，受精卵发育成摄食型 ophiopluteus 浮游幼体。',
      '腕能从残端再生，但再生会消耗能量；断离身体的单腕不能再生出完整个体。',
      '欧洲与南非传统同名材料包含深分化谱系，历史范围端点不能视为已经解决的单一生物种边界。',
      'IUCN Red List 截至 2026-09-01 未检出本种全球评估，NE 不表示无危，全球趋势仍未知。',
    ],
    threats: [
      '底拖、扇贝拖捞和其他底接触渔具会压碎或移走表栖个体，也会打散群体并改变粗底质',
      '骨料开采、疏浚、厚层覆盖和底质丧失会连同海床表面的蛇尾床一起移除或掩埋',
      '港工和海床工程若改变近底水流、悬浮食物与细颗粒沉降，可能缩短适宜摄食窗口',
      '受控实验显示较低 pH 会损害浮游幼体存活和骨骼发育，但尚不能换算成野外种群下降率',
      '未命名谱系和错误鉴定会把不同区域的相反变化合并，掩盖真实保护需求',
    ],
    conservationActions: [
      '在已知蛇尾床建立带尺度的固定摄影、视频或 ROV 样带，重复记录床边界、盘径结构、稚体和再生腕比例',
      '同步记录近底流速、底质粒径、细颗粒比例、温盐、溶氧和 pH，区分斑块移动与长期数量变化',
      '在底接触渔业、骨料开采和疏浚项目中绘制蛇尾床，设置扰动前后对照区，并按监测到的恢复情况调整措施',
      '为深水、南部和南非范围记录保存完整凭证、高清背腹面照片及组织样本，联合形态与多基因资料复核',
      '开展自然波动和多世代条件下的酸化研究，避免把单代幼体实验直接外推为野外灭绝风险',
      '完成谱系分界、全范围数量和长期趋势调查后，再开展正式全球灭绝风险评估',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'standard-arm-count',
        label: '标准腕数',
        value: '5',
        unit: '条',
        note: '完整成体的基本体制；断腕和再生会改变眼前可见的完整长度。',
      },
      {
        key: 'maximum-disc-diameter',
        label: '中央盘最大直径',
        value: '约 20',
        unit: '毫米',
        note: '区域识别资料给出的最大盘径；不含腕，也不是普通个体平均值。',
      },
      {
        key: 'arm-to-disc-ratio',
        label: '单腕长度约为盘径',
        value: '约 5',
        unit: '倍',
        note: '识别比例；腕常折断和再生，不能据此硬算固定总跨度。',
      },
      {
        key: 'lateral-spines-per-side',
        label: '每腕节单侧棘',
        value: '约 7',
        unit: '枚',
        note: '英国与北海鉴定资料的常见形态；地域和个体变异存在。',
      },
    ],
    media: {
      image:
        './images/species/common-brittle-star/01-tide-swept-adult-cover.webp',
      alt: '东北大西洋潮流冲刷的粗颗粒海床右侧，一只中央盘清楚、五条细长分节腕带有双侧细棘的脆刺蛇尾完整展开',
      focalPoint: { x: 0.72, y: 0.56 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/common-brittle-star/02-articulated-arm-rowing-locomotion.webp',
          alt: '俯视粗砾海床上的一只五腕脆刺蛇尾，一条分节腕朝前，左右两条腕弯曲抵住卵石，后方两腕拖曳',
          title: '分节腕形成划拨姿态',
          caption:
            '运动重建显示五条分节腕在领腕、两侧推撑腕和后腕之间分工；单张静态图不能确定移动速度、前进方向、完整步态或脆刺蛇尾的固定协调机制。',
          focalPoint: { x: 0.5, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/common-brittle-star/03-raised-arm-suspension-feeding.webp',
          alt: '一只脆刺蛇尾让两条腕伏在贝壳砾石上，三条带棘腕抬入水流，腕间可见细小管足和悬浮颗粒',
          title: '抬腕迎流进行悬浮摄食',
          caption:
            '摄食重建让三条腕抬入水流，并显示腕棘、管足与少量悬浮颗粒；画面不能测量流速、粒径、颗粒组成、捕获率或实际食物比例。',
          focalPoint: { x: 0.52, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/common-brittle-star/04-patchy-dense-brittlestar-bed.webp',
          alt: '东北大西洋粗颗粒海床上分布着斑块状密集脆刺蛇尾，许多独立中央盘伸出互相交叠的细长带棘腕',
          title: '粗海床上的斑块状蛇尾床',
          caption:
            '生态重建显示粗颗粒海床上的密集蛇尾床及其斑块边界；一张图不能估计实际每平方米密度、覆盖面积、总数量、物种组成或种群趋势。',
          focalPoint: { x: 0.54, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/common-brittle-star/05-tapered-regenerating-arm.webp',
          alt: '黑色卵石间一只五腕脆刺蛇尾伸出四条长腕，其中左侧一条延伸出画面，右上方第五条短腕逐渐收细成浅色再生端',
          title: '一条平滑收细的再生腕',
          caption:
            '形态重建显示四条长腕与一条平滑收细的短再生腕；画面不能判断断腕原因、是否自割、捕食者、损伤时间、再生速率或个体年龄。',
          focalPoint: { x: 0.52, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/common-brittle-star/06-benthic-video-transect-monitoring.webp',
          alt: '一台小型观察级 ROV 悬停在粗颗粒海床上方，沿无字样带拍摄斑块状脆刺蛇尾床，没有接触动物',
          title: '非接触式视频样带调查',
          caption:
            '调查重建显示 ROV 沿底栖视频样带记录蛇尾床；单次影像不能给出全分布区总数量、总体丰度、长期变化、种群趋势或遗传谱系身份。',
          focalPoint: { x: 0.56, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...COMMON_BRITTLESTAR_SOURCES,
      {
        title: 'GBIF: Ophiothrix fragilis (Abildgaard, 1789) nomenclatural record',
        url: 'https://www.gbif.org/species/5187835',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: COMMON_BRITTLESTAR_CONTENT_DATE,
    updatedAt: COMMON_BRITTLESTAR_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
