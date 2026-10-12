import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const ATLANTIC_PYROSOME_SOURCE_DATE = '2026-08-31' as const;

const ATLANTIC_PYROSOME_CONTENT_DATE = '2026-08-31' as const;

const ATLANTIC_PYROSOME_SOURCES = [
  {
    title: 'WoRMS — Pyrosoma atlanticum Péron, 1804 (AphiaID 137250)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=137250',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — Classification for AphiaID 137250',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/137250',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'OBIS — Pyrosoma atlanticum taxon and occurrence map',
    url: 'https://obis.org/taxon/137250',
    kind: 'distribution',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title:
      'IUCN Red List species search — Pyrosoma atlanticum, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Pyrosoma%20atlanticum&searchType=species',
    kind: 'conservation',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Lilly et al. 2023 — A global review of pyrosomes',
    url: 'https://doi.org/10.1002/lol2.10350',
    kind: 'general',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Naturalis — Pyrosoma atlanticum morphology and size',
    url: 'https://ns-zooplankton.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?epi=210&id=132505',
    kind: 'general',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title:
      'National Museum of Natural Science — Pyrosoma atlanticum specimen 004023-00017',
    url: 'https://www.nmns.edu.tw/collect/catalog/detail/?id=18286',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title:
      'Schram et al. 2020 — Abundance, distribution and feeding ecology in the Northern California Current',
    url: 'https://doi.org/10.3354/meps13465',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title:
      'Lyle et al. 2022 — Fine-scale vertical distribution and diel migrations',
    url: 'https://doi.org/10.1093/plankt/fbac006',
    kind: 'distribution',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title:
      'Andersen & Sardou 1994 — Diel migration as a function of colony size',
    url: 'https://doi.org/10.1093/plankt/16.4.337',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title:
      'Henschke et al. 2019 — Pyrosome grazing and carbon transport in the Tasman Sea',
    url: 'https://doi.org/10.1029/2018JG004918',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title:
      'Stenvers et al. 2021 — Distribution, associations and carbon pump role off Cabo Verde',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8084940/',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title:
      'Bowlby et al. 1990 — Patterns of stimulated bioluminescence in two pyrosomes',
    url: 'https://doi.org/10.2307/1542326',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Tessler et al. 2020 — A putative chordate luciferase',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7576829/',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title:
      'Berger et al. 2021 — Bacterial symbionts with bioluminescent potential',
    url: 'https://doi.org/10.3389/fmars.2021.606818',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title:
      'Thompson et al. 2021 — Host-specific symbioses and microbial prey',
    url: 'https://doi.org/10.1038/s43705-021-00007-1',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title:
      'Xiang et al. 2024 — Full-length transcriptome annotation of Pyrosoma atlanticum',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11668868/',
    kind: 'general',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-pyrosoma-atlanticum',
    slug: 'atlantic-pyrosome',
    names: {
      zh: '大西洋火体虫',
      en: 'Atlantic Pyrosome',
      aliases: ['大西洋火體蟲'],
    },
    scientificName: 'Pyrosoma atlanticum',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Thaliacea', '海樽纲'),
      taxon('Pyrosomatida', '火体虫目'),
      taxon('Pyrosomatidae', '火体虫科'),
      taxon('Pyrosoma', '火体虫属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['亚洲', '欧洲', '非洲', '北美洲', '南美洲', '大洋洲'],
      regions: [
        '北大西洋与佛得角群岛周边水域',
        '南大西洋与非洲西岸外海',
        '地中海',
        '印度洋与阿古拉斯锋区',
        '塔斯曼海与南太平洋',
        '加利福尼亚洋流至东北太平洋',
      ],
      countries: [],
      range:
        '广布于约北纬 50° 至南纬 50° 之间的热带、亚热带和温带海洋，横跨大西洋、印度洋与太平洋，也进入地中海。它既见于远洋，也可被海流带到陆架、陆坡和近岸；各海区的出现、深度与暴发规模受水团、锋面、生产力、季节和采样方法影响。“大西洋”这个种名不表示它只生活在大西洋。',
      center: { lat: 15, lng: -30 },
    },
    habitats: [
      {
        name: '外海上层水柱',
        realm: 'marine',
        description:
          '夜间记录常集中在上层约 75 米以内，群体借浮游植物和微生物丰富的水层滤食；不同海区并不总出现同一垂直格局。',
        isPrimary: true,
      },
      {
        name: '陆架外缘、陆坡与中层水柱',
        realm: 'marine',
        description:
          '许多群体白天下移到约 100 至 500 米水层，部分研究记录更深位置；深度随群体大小、水柱结构和地点变化，不能把深水记录当作固定栖息层。',
        isPrimary: true,
      },
      {
        name: '锋面、涡旋与上升流影响区',
        realm: 'marine',
        description:
          '岛屿尾流、冷涡、锋面和其他提高局地生产力的结构可汇集食物与群体，但不同海盆对温度和生产力的响应并不一致。',
      },
    ],
    measurements: {
      length: {
        max: 0.78,
        unit: 'm',
        note: 'Schram 等 2020 年论文中，北加州洋流 2017 年 5 月样本范围为 6 至 78 厘米；78 厘米是该次研究的样本最大值，不是绝对物种极值或典型长度。',
      },
    },
    diet: {
      types: ['filter-feeder'],
      foods: [
        '球石藻等定鞭藻与其他微型真核生物',
        '甲藻和中心硅藻',
        '细菌与其他微生物',
        '悬浮有机碎屑',
      ],
      description:
        '每个个虫以纤毛把海水拉过鳃篮上的细密黏液网，截留从微生物到较大浮游颗粒的食物。不同研究对小于或大于 10 微米颗粒的偏好并不一致，因此不能把本种限定为只吃某一粒径或单一浮游植物类群。',
    },
    activity: [
      '许多个虫协同维持滤食水流，并让汇流从群体开口端排出产生较弱推进力',
      '常在夜间趋向浅层、白天下移，但昼夜垂直迁移的方向和幅度并非处处相同',
      '个虫受光、电或机械刺激后可发出蓝绿色光，邻近响应能沿群体继续传播',
      '受精卵先建立四个初级个虫，后续无性出芽不断扩展共同被囊和群体',
      '局地高密度暴发会快速滤过水体；部分迁移群体、粪粒与尸体下沉可形成不同的碳输送路径',
    ],
    tags: [
      '远洋被囊动物',
      '海樽纲',
      '群体动物',
      '共同被囊',
      '中空筒状群体',
      '滤食',
      '弱喷射推进',
      '蓝绿色生物发光',
      '昼夜垂直迁移',
      '生物碳泵',
      'IUCN 未评估',
    ],
    summary:
      '由许多毫米级个虫共同搭成中空筒体的远洋脊索动物：外壁进水、中央汇流、开口排水，同时完成滤食和缓慢推进。',
    description:
      '大西洋火体虫是一种广布多海盆的群体性被囊动物，而不是水母、海参或一条巨大的单体。许多毫米级个虫嵌在共同被囊中，外侧入水口把海水送过黏液滤网，出水口朝向中央空腔；共同汇流再从群体唯一开口排出。群体通常呈粉红至黄粉色，一端闭合、一端开口，表面带密集短突起。它会发出蓝绿色光，也常参加昼夜垂直迁移和碳向深水的输送，但发光机制、迁移幅度与碳通量都不能从单一海区外推到全球。IUCN 当前尚未评估本种，NE 不代表安全或没有风险，全球种群数量和趋势仍未知。',
    storySections: [
      {
        key: 'one-colony-many-zooids',
        label: '群体身份',
        title: '许多个虫组成中空筒状群体',
        body: '粉红筒体由许多个虫紧密嵌在共同被囊中组成。每个个虫保留摄食、呼吸、排水和繁殖结构，出水口朝向共同中央空腔。',
      },
      {
        key: 'filtering-and-jet-propulsion',
        label: '水流协作',
        title: '共同水流支持滤食与缓慢推进',
        body: '每个个虫从群体外侧引水，让海水穿过鳃篮上的黏液网，食物被截留后，滤过的水进入共同空腔。许多个虫的出水在中央汇合，再从群体共同开口排出；这套连续水流既支撑滤食，也产生较弱喷射推进，却不是高速游泳发动机。',
      },
      {
        key: 'blue-green-light-open-mechanism',
        label: '发光谜题',
        title: '蓝绿色光已经看见，谁点亮它仍未定论',
        body: '光、电和机械刺激都能诱发个虫发光，相邻个虫还可借光刺激把蓝绿色响应沿群体传开。发光机制仍有争议：一组研究提出使用 coelenterazine 的候选宿主荧光素酶，另一组在发光器附近找到发光细菌与细菌共生体假说。现有证据没有把其中一条确定为唯一答案。',
      },
      {
        key: 'variable-diel-migration',
        label: '上下往返',
        title: '昼夜迁移幅度随海区和体型变化',
        body: '昼夜垂直迁移（DVM）的幅度在不同海区有明显差异。利古里亚海一项研究发现，3 毫米群体平均迁移约 90 米，51 毫米群体约 760 米，全部尺寸合并均值为 410 米；这项局地体型关系不能外推为全种固定或普遍的一日行程。',
      },
      {
        key: 'sexual-and-asexual-life-cycle',
        label: '四个起点',
        title: '受精卵开始，出芽扩展群体',
        body: '雌雄同体个虫产生配子，受精卵发育成短暂的初始个虫（cyathozooid），再出芽形成四个初级个虫（ascidiozooid）。四个个虫组成初始群体，随后继续无性出芽，增加个虫数量。它的生活史没有樽海鞘式的两代交替。',
      },
      {
        key: 'blooms-and-carbon-transport',
        label: '暴发与碳',
        title: '滤掉上层颗粒，也把有机物送向深水',
        body: '暴发时，大量群体能在局地快速改变浮游植物和微生物食物网。部分迁移群体可把上层摄入物带到深处后排出粪粒；未被群体带走的粪粒与垂死或死亡群体也会分别下沉。佛得角与塔斯曼海得到的碳通量只代表特定时空和方法，不能写成全球固定贡献或单一暴发的必然结果。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1804 年的“大西洋”火体虫命名',
        body: 'Péron 于 1804 年命名大西洋火体虫，现用学名为 Pyrosoma atlanticum。种名包含“大西洋”，它却也广布印度洋、太平洋和地中海。一条可见的筒体由许多毫米级个虫组成，蓝绿色发光现象已被观察，具体机制仍有宿主酶与发光细菌等不同解释。',
      },
    ],
    keyFacts: [
      '当前接受名为 Pyrosoma atlanticum Péron, 1804，WoRMS AphiaID 是 137250。',
      'WoRMS 使用目名 Pyrosomatida，ITIS 使用另一拼法 Pyrosomida。',
      'Tunicata 是被囊动物亚门，属于脊索动物门；大西洋火体虫属于樽海鞘纲 Thaliacea。',
      '一条可见筒体是许多个虫嵌在共同被囊中的群体，不是单个大型个体。',
      '群体通常一端闭合、一端开口，粉红至黄粉色外壁带密集短突起。',
      '经典形态资料给群体约 60 厘米上限；北加州洋流样本曾达 78 厘米。',
      '经典资料给单个个虫约 8.5 毫米上限，不是所有个虫的固定长度。',
      '个虫从群体外侧引水，滤过水进入共同空腔，再由唯一开口排出。',
      '食物粒径与类群横跨微生物、浮游植物和碎屑，各海区研究没有给出一个固定偏好。',
      '蓝绿色发光可受光、电和机械刺激，响应能通过相邻个虫的光刺激继续传播。',
      '候选宿主荧光素酶和发光细菌都获得了证据，发光机制尚未形成唯一结论。',
      '昼夜垂直迁移常见却高度可变；利古里亚海一项研究中，较大群体覆盖了更大的垂直距离。',
      'cyathozooid 先产生四个初级 ascidiozooid，后续群体靠无性出芽扩展。',
      '部分群体的主动迁移、粪粒下沉和死亡群体下沉都能向混合层以下输送有机碳。',
      'IUCN 尚未完成本种全球评估；NE 不代表无危、数量稳定或没有风险。',
      '全球寿命、世代时间、成熟群体数量和长期趋势均没有可靠统一值。',
    ],
    threats: [
      'IUCN 尚未评估，全球种群大小、长期趋势、世代时间和关键繁殖区均未知',
      '海温、生产力、海流、锋面和海洋热浪改变分布与暴发机会，但各海区响应方向不同',
      '脆弱群体容易在网采中破损，使数量、尺寸和深度分布与采样偏差混在一起',
      '水下影像的采样体积、检出率和物种识别率不足，会掩盖真实时空变化',
      '局地暴发会与渔业和取水设施发生冲突，但现有资料不能换算成本种全球风险',
    ],
    conservationActions: [
      '以标准化分层网采和校准水下影像联合监测群体数量、尺寸与垂直分布',
      '保存凭证标本和 DNA，把照片中的 Pyrosoma 属记录落实到可复核的物种鉴定',
      '同步测量温度、盐度、溶氧、叶绿素和水团结构，解释区域暴发条件',
      '区分主动迁移的活体、垂死下沉群体和海底尸体，避免混写最大活动深度',
      '在暴发期同时测量摄食、粪粒、主动输送和底栖输入，限定碳通量的时空边界',
      '公开暴发、搁浅、兼捕和取水口堵塞记录，为未来红色名录与生态风险评估补资料',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'classic-colony-length',
        label: '经典群体长度上限',
        value: '约 60',
        unit: 'cm',
        note: 'Naturalis 汇总口径；北加州洋流样本曾达 78 厘米，因此不是绝对物种极值。',
      },
      {
        key: 'zooid-length',
        label: '单个个虫长度上限',
        value: '约 8.5',
        unit: 'mm',
        note: '经典形态资料的约数上限，不是群体内每个个虫的固定尺寸。',
      },
      {
        key: 'primary-zooids',
        label: '初始个虫数',
        value: '4',
        unit: '个',
        note: 'cyathozooid 出芽形成的初级 ascidiozooid 数量；后续个虫再靠无性出芽增加。',
      },
      {
        key: 'ligurian-size-linked-dvm',
        label: '利古里亚海迁移幅度',
        value: '90–760',
        unit: 'm',
        note: 'Andersen 与 Sardou 1994 年研究中，3 至 51 毫米群体对应的平均幅度；全部尺寸合并均值为 410 米，只代表该次局地研究。',
      },
    ],
    media: {
      image:
        './images/species/atlantic-pyrosome/01-open-ocean-colony-cover.webp',
      alt: '一条淡粉紫色、表面粗糙的中空筒状大西洋火体虫群体悬浮在蓝色外海中，右端开口，左端收窄闭合',
      focalPoint: { x: 0.66, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/atlantic-pyrosome/02-zooid-texture-open-end-diagnostic.webp',
          alt: '斜视近景显示大西洋火体虫群体的开口、中央空腔，以及布满细小孔和短突起的粉色外壁',
          title: '共同被囊上的个虫纹理',
          caption:
            'AI生成科学形态情景重建；群体由嵌在共同被囊中的许多个虫组成，图中纹理不能替代显微诊断或标本鉴定。',
          focalPoint: { x: 0.52, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/atlantic-pyrosome/03-blue-green-bioluminescence.webp',
          alt: '暗海水中，一条粉紫色筒状大西洋火体虫群体的表面散发不均匀的蓝绿色光点和光斑',
          title: '沿个虫纹理亮起的蓝绿色光',
          caption:
            'AI生成科学发光情景重建；画面只呈现可见光现象，不能判定刺激来源、传播路径、交流功能，或在宿主荧光素酶与发光细菌之间选择机制。',
          focalPoint: { x: 0.56, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/atlantic-pyrosome/04-night-upper-water-migration-context.webp',
          alt: '夜间上层海水中，一条粉紫色筒状大西洋火体虫群体悬浮在由上浅下深的蓝色水体里',
          title: '夜间水柱中的浅层语境',
          caption:
            'AI生成科学行为情景重建；单帧不能表示迁移速度、方向、深度或幅度，区域研究也不能外推成全物种固定规律。',
          focalPoint: { x: 0.61, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/atlantic-pyrosome/05-filter-feeding-current-visualization.webp',
          alt: '一条开口朝右的大西洋火体虫群体悬浮在稀疏微粒中，外壁附近和开口后方可见细弱粒子轨迹',
          title: '从外壁进水，从共同开口排水',
          caption:
            'AI生成科学水流情景重建；粒子轨迹只解释外侧进水和开口端排水，不能量化滤食效率、流速、推进力、食物身份或颗粒大小。',
          focalPoint: { x: 0.57, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/atlantic-pyrosome/06-towed-camera-noncontact-monitoring.webp',
          alt: '缆绳悬挂的水下摄像平台从左侧拍摄一条保持间距的粉紫色大西洋火体虫群体',
          title: '用影像记录脆弱的远洋群体',
          caption:
            'AI生成科学监测情景重建；画面不能证明物种身份、检出、丰度、尺寸、迁移或趋势，调查仍需校准采样体积并保存可复核证据。',
          focalPoint: { x: 0.67, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...ATLANTIC_PYROSOME_SOURCES,
      {
        title: 'GBIF: Pyrosoma atlanticum Péron, 1804 nomenclatural record',
        url: 'https://www.gbif.org/species/5232532',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: ATLANTIC_PYROSOME_CONTENT_DATE,
    updatedAt: ATLANTIC_PYROSOME_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
