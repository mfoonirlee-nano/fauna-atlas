import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const CHINESE_GIANT_SALAMANDER_SOURCE_DATE = '2026-08-21' as const;

const CHINESE_GIANT_SALAMANDER_CONTENT_DATE = '2026-08-21' as const;

const CHINESE_GIANT_SALAMANDER_SOURCES = [
  {
    title: 'IUCN Red List — Andrias davidianus (assessed 2020; published 2023-1)',
    url: 'https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T179010104A48438418.en',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Amphibian Species of the World — Andrias davidianus',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Cryptobranchidae/Andrias/Andrias-davidianus',
    kind: 'taxonomy',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Amphibian Species of the World — Andrias',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Cryptobranchidae/Andrias',
    kind: 'taxonomy',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Yan et al. 2018 — Hidden extinction of cryptic Chinese giant salamander species',
    url: 'https://doi.org/10.1016/j.cub.2018.04.004',
    kind: 'taxonomy',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Liang et al. 2019 — Phylogeographic patterns and conservation implications',
    url: 'https://doi.org/10.1002/ece3.5014',
    kind: 'distribution',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Turvey et al. 2019 — Historical museum collections clarify cryptic species radiation',
    url: 'https://doi.org/10.1002/ece3.5257',
    kind: 'taxonomy',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Marr et al. 2024 — Species delimitation for Chinese giant salamanders',
    url: 'https://doi.org/10.1093/evolinnean/kzae007',
    kind: 'taxonomy',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Jiang et al. 2026 — Andrias yaoluopingensis from Yuexi, Anhui',
    url: 'https://doi.org/10.3897/zse.102.179377',
    kind: 'taxonomy',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (effective 5 March 2026)',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'CITES AC33 Inf. 15 — Amphibian species in the CITES Appendices',
    url: 'https://cites.org/sites/default/files/documents/E-AC33-Inf-15.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Mao et al. 2024 — A conservation action plan for Chinese giant salamanders',
    url: 'https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'China 2021 — List of Wildlife under Special State Protection',
    url: 'https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Turvey et al. 2018 — Imminent extinction in the wild of the world’s largest amphibian',
    url: 'https://doi.org/10.1016/j.cub.2018.04.005',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Tapley et al. 2021 — Range-wide decline of Chinese giant salamanders',
    url: 'https://doi.org/10.1017/S0030605320000411',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Cunningham et al. 2016 — Chinese giant salamander farming industry',
    url: 'https://doi.org/10.1017/S0030605314000842',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Shu et al. 2021 — Disordered translocation hastens local extinction',
    url: 'https://doi.org/10.16373/j.cnki.ahr.200080',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Heiss et al. 2013 — Jaw-powered suction feeding biomechanics',
    url: 'https://doi.org/10.1098/rsif.2012.1028',
    kind: 'ecology',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Luo et al. 2018 — Breeding behaviour under digital monitoring',
    url: 'https://doi.org/10.3390/ani8100161',
    kind: 'ecology',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-andrias-davidianus',
    slug: 'chinese-giant-salamander',
    names: {
      zh: '中国大鲵',
      en: 'Chinese Giant Salamander',
      aliases: ['大鲵', '娃娃鱼', 'Sieboldia davidiana'],
    },
    scientificName: 'Andrias davidianus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Amphibia', '两栖纲'),
      taxon('Caudata', '有尾目'),
      taxon('Cryptobranchidae', '隐鳃鲵科'),
      taxon('Andrias', '大鲵属'),
    ),
    conservation: conservation('CR', 'decreasing', 2020, 'A2acde'),
    distribution: {
      realms: ['freshwater'],
      continents: ['亚洲'],
      regions: ['四川盆地西缘与西南缘山地（狭义 G1 谱系）', '长江上游流域'],
      countries: ['中国'],
      endemicTo: ['中国'],
      range:
        '现代种界下，狭义 Andrias davidianus 最合理地对应四川盆地西缘与西南缘的 G1 谱系；具归属证据的遗传或历史博物馆样本来自四川麻边、眉山洪雅和雅安，模式产地为四川江油中坝，但模式标本未取得可用古 DNA，这些记录也不等于各地今天仍有野生繁殖种群。IUCN 2020 评估因种界尚未完全解决，仍吸收较宽口径下的衰退证据；旧广布资料、养殖逃逸和跨流域放流个体不能自动视为本种现存原生种群。',
      center: { lat: 29.8, lng: 103.3 },
    },
    habitats: [
      {
        name: '清凉岩石山溪与河流',
        realm: 'freshwater',
        description: '利用清凉、含氧、缓流至急流的永久性山地溪流和小河；连续水流、完整森林岸坡与较低泥沙负荷共同维持水下微生境。',
        isPrimary: true,
      },
      {
        name: '巨石下、岩岸洞穴与深潭边缘',
        realm: 'freshwater',
        description: '成体以巨石下空隙、岩岸洞穴和深潭边缘作为隐蔽、休息或繁殖巢穴；水坝、采砂和河道硬化会切断这些结构。',
        isPrimary: true,
      },
      {
        name: '喀斯特及其他地下水文系统',
        realm: 'freshwater',
        description: '部分评估记录涉及与地表溪流相连的喀斯特洞穴和地下水系；其中哪些属于严格种义的本种，仍待分子核验。',
      },
    ],
    measurements: {},
    diet: {
      types: ['carnivore'],
      foods: ['淡水蟹、虾等甲壳类', '鱼类', '蛙类与其他水生脊椎动物', '水生昆虫及其他无脊椎动物'],
      description: '大鲵在水下机会性捕食，通过快速张口产生吸力，吸入近处猎物。现有食物记录来自拆分前的广义“中国大鲵”，狭义本种野外食谱缺少系统量化，因此食物类别可作参考，比例仍未知。',
    },
    activity: [
      '终生水栖，常利用巨石下和岩岸水下洞穴',
      '低光条件下活动记录较多，但野外精确昼夜节律资料仍有限',
      '快速张口产生吸入水流捕获近距离猎物',
      '繁殖期雄性占据水下巢穴，并持续守护和翻动卵串',
    ],
    tags: ['中国特有种', 'IUCN 极危', '隐鳃鲵科', '物种复合群', '山地溪流', '雄性守卵', 'CITES附录I'],
    summary: '中国大鲵生活在清凉的岩石溪流中，是大型水栖有尾类。过去这个名字涵盖多个谱系，保护时需要分清分类归属、遗传来源和所处溪流。',
    description:
      '中国大鲵是大鲵属的水栖两栖动物，成体以宽扁头部、很小的眼、粗糙褶皱皮肤和侧扁尾适应岩石溪流，幼体期的羽状外鳃早已随发育退去。它靠快速张口吸入近处猎物，繁殖期由雄性占据水下巢穴并守护串珠状卵。历史上的 Andrias davidianus 实际包含多个隐蔽谱系，现代养殖转运、逃逸和缺乏筛查的放流又打乱了地理信号；因此“在某地发现大鲵”，未必就是找回本种的原生种群。IUCN 按 2020 操作口径评为极危且持续下降，CITES 将大鲵属列入附录 I。',
    storySections: [
      {
        key: 'species-complex',
        label: '名字与谱系',
        title: '旧名之下的不同谱系',
        body: '馆藏标本与遗传研究显示，历史上统称 Andrias davidianus 的中国大鲵有多条长期隔离的谱系，其中一些已命名为独立物种，另一些仍待研究。狭义本种的自然范围可能小于旧地图，养殖转运和放流又使今日采集地点难以反映原生遗传来源。',
      },
      {
        key: 'stream-body',
        label: '水下形态',
        title: '宽扁身体贴近水底，褶皱皮肤留在水流里',
        body: '成体头宽而扁，眼很小，身体两侧有明显皮褶。短肢支撑在石底，侧扁尾在水中推进。幼体有三对外鳃，但这些结构随发育退化。成年大鲵的外形与保留外鳃的墨西哥钝口螈不同。',
      },
      {
        key: 'rocky-stream',
        label: '溪流与洞穴',
        title: '巨石下的休息与繁殖空间',
        body: '清凉永久溪流中的巨石空隙、岩岸洞穴、深潭边缘与连通水流提供隐蔽和繁殖空间。水坝、引水、采砂、采矿、伐木与农业污染不仅改变水质，也会把连续河段切成无法交换的碎片。',
      },
      {
        key: 'suction-feeding',
        label: '吸入式摄食',
        title: '快速张口吸入近处猎物',
        body: '大鲵快速张开宽口并降低口腔底部，产生吸力，把近处的蟹、虾、鱼、蛙或水生无脊椎动物连同水带入口中。实验支持这种由下颌驱动的双向吸食机制。不过猎物记录多来自物种拆分之前，只能作为参考，狭义种食谱仍需研究。',
      },
      {
        key: 'den-master',
        label: '雄性育幼',
        title: '卵留在水下，守巢者是雄性',
        body: '繁殖期雌性在雄性占据的水下洞穴产下串珠状卵并体外受精，随后离开。雄性继续守巢、扇尾换水、翻动卵串，并清除死亡或未受精卵；约 50 至 60 天的孵化记录来自广义种群和仿生态环境，会随水温与地区变化。',
      },
      {
        key: 'release-is-not-recovery',
        label: '放流与恢复',
        title: '放流之前，先对好血缘',
        body: '2002 至 2019 年，至少 287,840 只养殖大鲵被放入各地溪流，多数未经充分遗传筛查，普遍建立可持续种群的证据仍不足。混放可能引起谱系杂交、生态替代与病原传播。放流前后需要结合水样环境 DNA、遗传鉴定、健康筛查和长期个体监测。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1871 年名称与四川中坝标本',
        body: '布朗夏尔在 1871 年使用 Sieboldia davidiana 描述中国大鲵。原始资料写“东藏”，后由戴维的旅行记录与标本研究落实为四川中坝，即今天江油一带。学名后来改为 Andrias davidianus；近年的遗传研究又表明旧广义名称包含多个谱系，因此历史地点不能直接代表今天的狭义分布。',
      },
    ],
    keyFacts: [
      '当前接受名为 Andrias davidianus；历史广义记录包含多个已命名或候选的大鲵谱系。',
      'IUCN 2020 评估为极危、趋势下降，标准 A2acde；其操作口径仍受未完全解决的分类边界影响。',
      'CITES 以 Andrias spp. 整属列入附录 I，国际贸易受到严格管制。',
      '成体具有宽扁头、小眼、明显侧皮褶和侧扁尾；幼体的三对外鳃早已随发育退去。',
      '已报道食物包括淡水蟹虾、鱼、蛙和水生无脊椎动物，但严格种义野外食谱仍缺少系统量化。',
      '雌性在水下巢穴产下卵串并离开，雄性完成守卵、扇水、翻卵和清理。',
      '大规模养殖转运和缺乏筛查的放流可能混淆地理谱系，也可能传播病原。',
    ],
    threats: [
      '为食用、贸易和养殖亲本进行的历史过度捕捉、盗猎及非法市场需求',
      '水坝、引水、采砂和河道硬化改变水流并切断山地溪流连通性',
      '采矿、伐木、农业与生活污染增加泥沙和污染物，降低水质及巢穴可用性',
      '养殖逃逸和未经遗传、疾病筛查的放流造成杂交、遗传同质化、生态替代与病原传播风险',
      '残存原生种群高度稀少和破碎，分类不确定性又可能让独立谱系被错误合并管理',
    ],
    conservationActions: [
      '保护和恢复完整山地溪流、岩石巢穴、森林岸坡及喀斯特水文连通性',
      '加强反盗猎、市场执法、养殖亲本来源追踪与 CITES 附录 I 贸易管理',
      '以馆藏、野外遗传样本和形态证据继续解决分类，建立分谱系保护单元',
      '保育繁殖按谱系管理，并在任何放流前完成遗传匹配、病原筛查和受体水系评估',
      '暂停没有明确保护目标、遗传来源和放后监测方案的增殖放流',
      '结合标准化夜间调查、水样 eDNA、个体标记和长期健康监测评估真实恢复',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'named-chinese-species',
        label: '已命名中国大鲵属物种',
        value: '5',
        unit: '种',
        note: '截至 2026-08-21；大鲵属另含日本大鲵，候选中国种级谱系仍多于已命名物种',
      },
      {
        key: 'iucn-decline',
        label: 'IUCN 推断历史下降',
        value: '>80',
        unit: '%',
        note: '2020 评估的过去三个世代、约 45 年窗口；证据仍部分覆盖种界未完全解决的中国 Andrias',
      },
      {
        key: 'range-survey',
        label: '范围调查发现',
        value: '24 / 97',
        unit: '只 / 处',
        note: '2013 至 2016 年中国大鲵属范围级调查；发现个体可能来自养殖逃逸或放流，剩余总量仍未知',
      },
      {
        key: 'documented-releases',
        label: '养殖个体放流记录',
        value: '≥287,840',
        unit: '只',
        note: '2002 至 2019 年广义中国大鲵统计；放归后的野外存活与定殖数量仍不确定。',
      },
    ],
    media: {
      image: './images/species/chinese-giant-salamander/01-rocky-stream-portrait.webp',
      alt: '清澈的中国山地森林溪流中，一只完整的深褐斑驳成体中国大鲵伏在右侧巨石下，左侧保留开阔水体与砾石',
      focalPoint: { x: 0.72, y: 0.63 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/chinese-giant-salamander/02-flattened-head-and-skin-folds.webp',
          alt: '一只成体中国大鲵的水下近景，宽扁头部、极小眼睛、粗糙皮肤和身体侧面的褶皱清晰可见，头后没有外鳃',
          title: '一副贴近水底的宽扁身体',
          caption: '成体具有小眼、宽头、粗糙皮肤与侧褶，幼体的三对外鳃会随发育退化。',
          focalPoint: { x: 0.7, y: 0.56 },
        },
        {
          image: './images/species/chinese-giant-salamander/03-forest-stream-habitat.webp',
          alt: '清澈的森林山溪水下，一只完整的深色中国大鲵藏在右下方巨石边，开阔水体、卵石和巨石占据大部分画面',
          title: '一条溪流，连接藏身处与巢穴',
          caption: '巨石空隙、深潭边缘、森林岸坡和连续水流，为大鲵提供藏身、觅食与繁殖空间。',
          focalPoint: { x: 0.71, y: 0.73 },
        },
        {
          image: './images/species/chinese-giant-salamander/04-nocturnal-crab-encounter.webp',
          alt: '夜间岩石溪流底部，一只完整的成体中国大鲵静伏在右侧，一只小型淡水蟹在左侧隔着一片开阔砾石且尚未接触',
          title: '夜色中的溪底相遇',
          caption: '大鲵与淡水蟹在溪流中相遇。蟹见于广义大鲵的猎物记录，这幅图未表现实际捕食。',
          focalPoint: { x: 0.58, y: 0.64 },
        },
        {
          image: './images/species/chinese-giant-salamander/05-den-master-egg-guarding.webp',
          alt: '水下岩洞内，一只成体中国大鲵守在洞口，数条透明胶质串珠状卵带向洞穴阴影深处延伸',
          title: '守在卵串旁的“巢穴主人”',
          caption: '守巢、扇水和翻卵都由雄性完成；孵化时长则随水温与环境起伏。',
          focalPoint: { x: 0.58, y: 0.56 },
        },
        {
          image: './images/species/chinese-giant-salamander/06-edna-water-sampling.webp',
          alt: '傍晚山溪边，两名穿涉水服的研究人员在左侧采集水样并记录，右下水下巨石旁一只中国大鲵保持数米距离且未被接触',
          title: '从一瓶水里寻找线索',
          caption: 'eDNA 能提示水体中存在遗传物质，却仍需谱系鉴定、病原筛查、标准化复查和长期监测才能解释保护意义。',
          focalPoint: { x: 0.57, y: 0.66 },
        },
      ],
    },
    sources: CHINESE_GIANT_SALAMANDER_SOURCES,
    featured: true,
    publishedAt: CHINESE_GIANT_SALAMANDER_CONTENT_DATE,
    updatedAt: CHINESE_GIANT_SALAMANDER_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
