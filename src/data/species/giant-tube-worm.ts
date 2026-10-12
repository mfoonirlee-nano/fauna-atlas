import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const GIANT_TUBE_WORM_SOURCE_DATE = '2026-09-01' as const;

const GIANT_TUBE_WORM_CONTENT_DATE = '2026-09-01' as const;

const GIANT_TUBE_WORM_SOURCES = [
  {
    title: 'World Polychaeta Database / WoRMS: Riftia pachyptila (AphiaID 266010)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=266010',
    kind: 'taxonomy',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'WoRMS: complete Aphia classification for Riftia pachyptila',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/266010',
    kind: 'taxonomy',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'OBIS: Riftia pachyptila taxon record',
    url: 'https://obis.org/taxon/266010',
    kind: 'taxonomy',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Jones 1981: Original description of Riftia pachyptila',
    url: 'https://www.biodiversitylibrary.org/part/45641',
    kind: 'taxonomy',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Rouse 2001: cladistic analysis of Siboglinidae',
    url: 'https://doi.org/10.1111/j.1096-3642.2001.tb02271.x',
    kind: 'taxonomy',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Smithsonian NMNH: Riftia pachyptila Galápagos Rift paratype',
    url: 'https://www.si.edu/object/riftia-pachyptila%3Anmnhinvertebratezoology_739723',
    kind: 'general',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'MBARI: Giant tubeworm species overview',
    url: 'https://www.mbari.org/animal/giant-tubeworm/',
    kind: 'general',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Karaseva et al. 2016: taxonomy and dimensions of vestimentiferan tubeworms',
    url: 'https://doi.org/10.1134/S1062359016090132',
    kind: 'general',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Li et al. 2022: giant tubeworm genome and body-plan overview',
    url: 'https://doi.org/10.1093/molbev/msab347',
    kind: 'general',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'MBARI 2015 Annual Report: range extension and Pescadero Basin record',
    url: 'https://www.mbari.org/wp-content/uploads/2016/05/MBARI_2015_Annual_Report-1.pdf',
    kind: 'distribution',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Coykendall et al. 2011: genetic diversity and demographic instability',
    url: 'https://doi.org/10.1186/1471-2148-11-96',
    kind: 'distribution',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Goffredi et al. 2011: physiology at sedimented and basalt-hosted vents',
    url: 'https://doi.org/10.1371/journal.pone.0021692',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Cavanaugh et al. 1981: Prokaryotic cells as possible chemoautotrophic symbionts',
    url: 'https://doi.org/10.1126/science.213.4505.340',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Minic & Hervé 2004: Biochemistry of the Riftia symbiosis',
    url: 'https://doi.org/10.1111/j.1432-1033.2004.04248.x',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Goffredi et al. 1997: sulfide acquisition via HS-',
    url: 'https://doi.org/10.1242/jeb.200.20.2609',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Goffredi et al. 1997: inorganic carbon acquisition',
    url: 'https://doi.org/10.1242/jeb.200.5.883',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Zal et al. 1998: sulfide binding by Riftia hemoglobins',
    url: 'https://doi.org/10.1073/pnas.95.15.8997',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Hinzke et al. 2019: host-microbe interactions in Riftia',
    url: 'https://doi.org/10.1128/mBio.02243-19',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Leonard et al. 2021: cooccurring carbon-fixation pathways in Riftia symbionts',
    url: 'https://doi.org/10.1128/AEM.00794-21',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Nussbaumer, Fisher & Bright 2006: Horizontal endosymbiont transmission',
    url: 'https://doi.org/10.1038/nature04793',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Hilário et al. 2005: sperm storage and internal fertilization',
    url: 'https://doi.org/10.2307/3593097',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Marsh et al. 2001: Larval dispersal potential',
    url: 'https://doi.org/10.1038/35075063',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Van Dover 1994: In situ spawning of Riftia pachyptila',
    url: 'https://doi.org/10.2307/1542043',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Lutz et al. 1994: Rapid growth at deep-sea vents',
    url: 'https://doi.org/10.1038/371663a0',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Klose et al. 2015: symbiont escape and tubeworm-clump monitoring',
    url: 'https://doi.org/10.1073/pnas.1501160112',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Govenar et al. 2005: epifauna associated with Riftia aggregations',
    url: 'https://doi.org/10.3354/meps305067',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Bright et al. 2024: animal life below East Pacific Rise vent surfaces',
    url: 'https://doi.org/10.1038/s41467-024-52631-9',
    kind: 'ecology',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List search: Riftia pachyptila',
    url: 'https://www.iucnredlist.org/search?query=Riftia%20pachyptila&searchType=species',
    kind: 'conservation',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
  {
    title: 'Van Dover et al. 2018: protection of active vents from deep-sea mining',
    url: 'https://doi.org/10.1016/j.marpol.2018.01.020',
    kind: 'conservation',
    accessedAt: GIANT_TUBE_WORM_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-riftia-pachyptila',
    slug: 'giant-tube-worm',
    names: {
      zh: '巨型管虫',
      en: 'Giant Tube Worm',
      aliases: ['Giant Tubeworm', '深海巨型管虫', '巨型管蠕虫'],
    },
    scientificName: 'Riftia pachyptila',
    taxonomy: animalTaxonomy(
      taxon('Annelida', '环节动物门'),
      taxon('Polychaeta', '多毛纲'),
      taxon('Sabellida', '缨鳃虫目'),
      taxon('Siboglinidae', '西伯加虫科'),
      taxon('Riftia', '巨型管虫属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: [],
      regions: [
        '加利福尼亚湾的瓜伊马斯海盆与佩斯卡德罗海盆热液区',
        '东太平洋海隆北段约 21°N、13°N 与 9°50′N 喷口带',
        '加拉帕戈斯扩张中心',
        '东太平洋海隆南段约 7°S 至 32°S 的间断活动喷口',
        '复活节微板块邻近喷口与太平洋—南极海隆北段',
      ],
      countries: [],
      range:
        '仅知分布于东太平洋活动热液喷口系统，从约 27°N 的瓜伊马斯海盆，经北部和南部东太平洋海隆及加拉帕戈斯扩张中心，延伸至约 38°S 的太平洋、南极海隆；各喷口种群随热液活动局部消失和重建。',
      center: { lat: 0, lng: -105 },
    },
    habitats: [
      {
        name: '东太平洋海隆玄武岩质弥散流喷口',
        realm: 'marine',
        isPrimary: true,
        description:
          '固着于活动喷口周围的玄武岩裂隙，让鳃羽处在富硫化物热液与含氧深海水混合的弥散流中；常用参考深度为 1900 至 3600 米，另有约 3800 米的机构野外记录。',
      },
      {
        name: '瓜伊马斯海盆沉积物覆盖型热液区',
        realm: 'marine',
        description:
          '也生活在加利福尼亚湾富有机沉积物覆盖的热液喷口，仍依赖持续的还原性化合物流和含氧海水交界面。',
      },
      {
        name: '浅表海底玄武岩空腔',
        realm: 'marine',
        description:
          '东太平洋海隆熔岩板下空腔已直接发现成体；该记录证明成体可占据浅表海底空间，但幼体进入路径、停留时间和普遍性仍待验证。',
      },
    ],
    measurements: {
      length: {
        max: 2,
        unit: 'm',
        note: 'MBARI 物种概览的最大尺寸；形态材料中软体测至约 1.5 米、栖管超过 2.65 米。此字段不代表典型成体范围，也不能把栖管长度当作软体长度。',
      },
    },
    diet: {
      types: ['bacterivore'],
      foods: [
        'trophosome 细胞内硫氧化共生菌固定的有机碳',
        '宿主控制分解的末端共生菌细胞',
      ],
      description:
        '营养体 trophosome 中的共生细菌氧化硫化物，利用释放的能量把二氧化碳转成有机物，再把营养转移给宿主。管虫也会分解部分共生菌细胞。成体没有口和消化道，全部营养依赖这一体内共生系统。',
    },
    activity: [
      '定居后终生固着在自建几丁质管内，只让前端鳃羽伸入喷口弥散流与深海水的混合区',
      '用高度血管化的红色鳃羽吸收氧、硫化物、二氧化碳等代谢底物并排出代谢产物',
      '受到捕食者或机械扰动时把柔软鳃羽缩回管内，留下空的圆形管口',
      '由细胞内共生菌氧化硫化物并固定碳，宿主循环系统把底物送往 trophosome',
      '雌雄异体，在活动喷口群落中释放配子或受精卵；幼体随近底层水流扩散后固着',
    ],
    tags: [
      '海洋',
      '深海',
      '热液喷口',
      '固着',
      '管栖',
      '环节动物',
      '多毛纲',
      '化能共生',
      '硫氧化细菌',
      '东太平洋',
    ],
    summary:
      '巨型管虫固着在东太平洋深海热液喷口周围，血红色鳃羽从白管中伸出。成体没有口和消化道，依靠体内的硫氧化细菌获得营养。',
    description:
      '巨型管虫的柔软身体可长约 1.5 米，外面的保护管能超过 2.65 米。鳃羽接触热液与含氧海水的混合水流，吸收氧、硫化物和二氧化碳，再由循环系统送入体内的营养体 trophosome。营养体中的细菌用氧化硫化物取得的能量制造有机物，供养管虫。幼体先有暂时性消化道，固着并从环境获得共生菌后，消化道逐渐退化。它的生存取决于喷口持续供给化学物质。',
    storySections: [
      {
        key: 'tube-and-red-plume',
        label: '外形',
        title: '白管保护身体，红色鳃羽接触水流',
        body: '几丁质管固定在喷口岩石上，承担支撑与防护作用。柔软身体平时藏在管内，前端扁平鳃羽伸出管口。鳃羽的红色来自循环液中的血红蛋白；捕食者靠近或水流受扰时，动物可把鳃羽缩回管内。管长与软体长度不相等。',
      },
      {
        key: 'adult-without-gut',
        label: '消化',
        title: '营养体占据躯干的大部分空间',
        body: '成体缺少口、胃、肠和肛门，长躯干的大部分空间由多叶的营养体占据。细菌住在这里的专门细胞内，向管虫提供有机营养。后端短小的分节区负责把身体锚定在管中。',
      },
      {
        key: 'plume-metabolite-uptake',
        label: '运输',
        title: '一种血红蛋白系统运输氧和硫化物',
        body: '高度血管化的鳃羽位于含氧深海水与富硫化物弥散流交界处。三类细胞外血红蛋白在不同位点结合氧和硫化物，降低两者提前反应的机会，再由循环系统把底物送入 trophosome。鳃羽也参与二氧化碳吸收和酸碱平衡。',
      },
      {
        key: 'intracellular-chemosynthesis',
        label: '共生',
        title: '细菌用化学能制造有机物',
        body: '营养体中的专门宿主细胞包住硫氧化细菌。细菌氧化硫化物取得能量，再固定二氧化碳；宿主获得细菌转移的有机碳，也会消化进入末端阶段的共生菌。同一共生群体中的菌体大小不同，反映它们处在不同生理阶段。',
      },
      {
        key: 'larval-horizontal-transmission',
        label: '幼体',
        title: '每一代幼体都从环境重新获得共生菌',
        body: '卵和早期幼体不携带成体共生菌。幼体固着后，环境中的目标细菌从外皮侵入，穿过组织到达消化道附近并建立初生 trophosome；暂时性口和消化道随后退化。38 天是 2°C、250 个大气压条件下估算的平均代谢寿命，不是每只幼体的实测漂流期。',
      },
      {
        key: 'ephemeral-vent-monitoring',
        label: '监测',
        title: '喷口会迁移，管虫丛也会更替',
        body: '火山和构造活动不断打开、改道或关闭热液通道。新喷口能被幼体占据，流体停止则会使依赖化学底物的群落死亡。固定样带的 ROV 影像需要与温度、硫化物、流速和喷口位置同步记录，单次画面无法给出丰度趋势或全球风险。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1981 年正式描述的喷口管虫',
        body: 'Jones 在 1981 年正式描述巨型管虫，并使用 Riftia pachyptila 这一名称；原始描述材料来自加拉帕戈斯裂谷热液喷口。早期分类曾把它与近缘管虫放在独立的动物类群，后来的系统研究确认它属于环节动物。没有消化道却能长成大型身体，促使研究者继续追查其细菌共生的营养机制。',
      },
    ],
    keyFacts: [
      'WoRMS 接受名为 Riftia pachyptila Jones, 1981，原始描述来自加拉帕戈斯裂谷热液喷口。',
      '巨型管虫属于环节动物门、西伯加虫科；旧分类曾将这一类管虫单列为须腕动物或前庭动物。',
      '旧文献把它列入须腕动物或前庭动物；现代口径把这些管虫置于环节动物的西伯加虫科。',
      'MBARI 汇总最大尺寸为 2 米；形态材料中软体约 1.5 米、栖管超过 2.65 米，三者不能混写。',
      '管由几丁质与蛋白质构成，只有红色鳃羽和前端组织伸出管口。',
      '成体完全缺少口和消化道，营养主要来自营养体 trophosome 内的共生细菌。',
      '共生菌住在专门的宿主细胞内，以硫化物氧化供能并固定二氧化碳。',
      '鳃羽吸收氧、硫化物和二氧化碳；细胞外血红蛋白把氧和硫化物送往 trophosome。',
      '幼体不从亲代继承共生菌，固着后由环境细菌穿过皮肤完成水平传播。',
      '幼体和小型后期幼体具有暂时性消化系统，trophosome 建立时消化道退化。',
      '压力培养与代谢模型给出幼体平均 38 天能量寿命；真实漂流距离取决于水流和温度。',
      '喷口时间序列曾估算管长最快增加约 85 厘米/年；这是局地快速建群记录。',
      'IUCN 尚未给出本种全球评估，全球种群趋势未知。',
    ],
    threats: [
      '热液流体自然改道或停止会切断硫化物供应，使局地管虫丛衰退或死亡',
      '海底硫化物采矿、钻探或基础设施可能压碎管体、掩埋生境并改变地下流体通道；尚无本种全球效应量',
      '密集取样和机械接触会损伤局地群落，稀有或新生喷口更难承受重复扰动',
      '喷口分布零散且寿命有限，全球喷口清单、丰度时间序列和种群趋势仍不完整',
    ],
    conservationActions: [
      '把有代表性的活动喷口、相连流体通道和周边缓冲区纳入禁止采矿或高强度扰动的保护网络',
      '在固定样带重复开展非接触 ROV 影像调查，同步记录温度、硫化物、流速和喷口位置',
      '限制重复采集，保存影像、组织、遗传序列和精确站位信息以提高每个样本的研究价值',
      '监测新喷口的定殖与老喷口的流体衰减，区分自然群落更替和人为影响',
      '补齐东太平洋各喷口区的连通性、成熟个体数量和趋势数据，再开展全球灭绝风险评估',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'maximum-size',
        label: '最大汇总尺寸',
        value: '2',
        unit: '米',
        note: 'MBARI 物种概览未区分软体与栖管；形态材料显示两者不能混写，也不代表常见成体长度。',
      },
      {
        key: 'reported-depth',
        label: '汇总深度',
        value: '1900—3600',
        unit: '米',
        note: 'MBARI 物种页的常用参考范围；另有约 3800 米记录，不表示绝对边界或在各深度等频出现。',
      },
      {
        key: 'maximum-tube-growth',
        label: '局地最快管长增长',
        value: '约 85',
        unit: '厘米/年',
        note: '1990 年代东太平洋海隆喷口时间序列估算，不是终生恒定速率。',
      },
      {
        key: 'modeled-larval-lifespan',
        label: '幼体平均代谢寿命',
        value: '38',
        unit: '天',
        note: '2°C、250 个大气压下的模型估值，不是实测最长漂流期。',
      },
    ],
    media: {
      image:
        './images/species/giant-tube-worm/01-diffuse-flow-adult-cover.webp',
      alt: '深海玄武岩右侧一只完整巨型管虫从白色几丁质管中伸出血红色鳃羽，斜视角使远侧鳃羽部分遮挡，左侧保留暗色海水空间',
      focalPoint: { x: 0.7, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/giant-tube-worm/02-branchial-plume-diagnostic.webp',
          alt: '一只巨型管虫的管口近摄，扁平血红鳃羽围绕浅粉色中轴与乳白色封管结构展开',
          title: '鳃羽、封管结构与管口',
          caption:
            '外部形态重建突出鳃羽、轴向结构和管口；画面不能量化鳃丝数、交换面积、血红蛋白含量或个体尺寸。',
          focalPoint: { x: 0.5, y: 0.44 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/giant-tube-worm/03-gutless-trophosome-cutaway.webp',
          alt: '巨型管虫几丁质管的非血腥纵向开窗重建中，红色鳃羽连接充满褐红色多叶 trophosome 的长躯干，没有画出消化道',
          title: '无消化道成体与 trophosome',
          caption:
            '纵向开窗把鳃羽、躯干、trophosome 和循环分支放在同一画面；它不是真实解剖，不能确认器官比例、血管排列、共生菌生物量或个体性别。',
          focalPoint: { x: 0.52, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/giant-tube-worm/04-trophosome-bacteriocyte-micrograph.webp',
          alt: 'trophosome 叶的显微重建中，大型紫褐色宿主细胞包裹许多小型杆状与球状共生菌，中央保留血淋巴通道',
          title: '住在 bacteriocyte 内的硫氧化细菌',
          caption:
            '显微重建表现胞内位置和叶内分区；AI 像素不能识别菌株、测定含硫颗粒成分、判定细胞阶段或计算菌数。',
          focalPoint: { x: 0.5, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/giant-tube-worm/05-juvenile-skin-symbiont-acquisition.webp',
          alt: '透明早期管中的一只微小巨型管虫幼体具有暂时性消化道，少量粉色杆菌从躯干外皮进入并朝发育中的 trophosome 聚集',
          title: '共生菌从幼体皮肤进入',
          caption:
            '重建把经皮侵入、暂时性消化道和初生 trophosome 并置；静态图不能确定发育阶段、入侵方向、持续时间、细菌身份或组织凋亡范围。',
          focalPoint: { x: 0.48, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/giant-tube-worm/06-rov-thicket-monitoring.webp',
          alt: '左侧无品牌水下相机隔着清晰水隙观察右侧巨型管虫丛，白色管体中有些伸出红色鳃羽，有些只露出空管口',
          title: 'ROV 非接触记录管虫丛',
          caption:
            '一帧广角调查画面不能证明物种身份、丰度、趋势、健康状况、喷口流量、深度或具体地点。',
          focalPoint: { x: 0.68, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...GIANT_TUBE_WORM_SOURCES,
      {
        title: 'GBIF: Riftia pachyptila Jones, 1981 nomenclatural record',
        url: 'https://www.gbif.org/species/2329590',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: GIANT_TUBE_WORM_CONTENT_DATE,
    updatedAt: GIANT_TUBE_WORM_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
