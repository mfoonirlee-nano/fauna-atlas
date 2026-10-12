import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const SEA_LAMPREY_SOURCE_DATE = '2026-08-27' as const;

const SEA_LAMPREY_CONTENT_DATE = '2026-08-27' as const;

const SEA_LAMPREY_SOURCES = [
  {
    title: 'IUCN Red List — Petromyzon marinus (assessed 2022, published 2024)',
    url: 'https://doi.org/10.2305/IUCN.UK.2024-2.RLTS.T16781A58298056.en',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC — Freshwater fishes of potential interest for inclusion in CMS',
    url: 'https://iucn.org/sites/default/files/2024-01/freshwater-fishes-of-potential-interest-for-inclusion-in-cms-information-brief.pdf',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Petromyzon marinus, AphiaID 101174',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=101174',
    kind: 'taxonomy',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'ITIS — Petromyzon marinus, TSN 159722',
    url: 'https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=159722',
    kind: 'taxonomy',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Taiwan Fish Database — Petromyzon marinus and Chinese name',
    url: 'https://fishdb.sinica.edu.tw/chi/chinesequer2.php?D1=&R1=&T1=&cn=&dere=asc&fm=&gc=&me=&orderby=is_accepted_name&page=4&pz=500&vn=',
    kind: 'taxonomy',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'FAO 2011 — Lampreys of the world',
    url: 'https://www.fao.org/4/i2335e/i2335e.pdf',
    kind: 'general',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'U.S. Fish and Wildlife Service — Sea Lamprey species profile',
    url: 'https://www.fws.gov/species/sea-lamprey-petromyzon-marinus',
    kind: 'ecology',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'USGS Nonindigenous Aquatic Species — Petromyzon marinus',
    url: 'https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=836',
    kind: 'distribution',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Great Lakes Fishery Commission — Sea lamprey lifecycle',
    url: 'https://www.glfc.org/sea-lamprey-lifecycle.php',
    kind: 'ecology',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Bjerselius et al. 2000 — Larval bile acids as a migratory pheromone',
    url: 'https://www.usgs.gov/publications/direct-behavioral-evidence-unique-bile-acids-released-larval-sea-lamprey-petromyzon-0',
    kind: 'ecology',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Johnson et al. 2012 — Odor-conditioned rheotaxis toward sea lamprey pheromone',
    url: 'https://pubs.usgs.gov/publication/70042537',
    kind: 'ecology',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Barany et al. 2020 — Osmoregulatory role of the intestine in sea lamprey',
    url: 'https://pubs.usgs.gov/publication/70211049',
    kind: 'ecology',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Swink 2003 — Host selection and lethality of sea lamprey attacks',
    url: 'https://pubs.usgs.gov/publication/1000960',
    kind: 'ecology',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'OSPAR — Sea lamprey status assessment',
    url: 'https://oap.ospar.org/en/ospar-assessments/committee-assessments/biodiversity-committee/status-assesments/sea-lamprey/',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'HELCOM 2024 Red List — Petromyzon marinus',
    url: 'https://helcom.fi/wp-content/uploads/2025/12/HELCOM-Red-List-Petromyzon-marinus_II.pdf',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'EU Council Directive 92/43/EEC — Consolidated Habitats Directive',
    url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A01992L0043-20250714',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Bern Convention — Appendix III protected fauna',
    url: 'https://rm.coe.int/1680304356',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Convention on Great Lakes Fisheries, 1954',
    url: 'https://www.glfc.org/pubs/conv.htm',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Great Lakes Fishery Commission — Sea Lamprey Control in the Great Lakes 2025',
    url: 'https://www.glfc.org/pubs/slcp/annual_reports/ANNUAL_REPORT_2025.pdf',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-petromyzon-marinus',
    slug: 'sea-lamprey',
    names: {
      zh: '海七鳃鳗',
      en: 'Sea Lamprey',
      aliases: ['海七鰓鰻', 'Lake Lamprey'],
    },
    scientificName: 'Petromyzon marinus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Petromyzonti', '七鳃鳗纲'),
      taxon('Petromyzontiformes', '七鳃鳗目'),
      taxon('Petromyzontidae', '七鳃鳗科'),
      taxon('Petromyzon', '海七鳃鳗属'),
    ),
    conservation: conservation('LC', 'stable', 2022),
    distribution: {
      realms: ['freshwater', 'marine'],
      continents: ['欧洲', '北美洲', '非洲'],
      regions: [
        '北大西洋西岸及入海河流',
        '北大西洋东岸、波罗的海及入海河流',
        '西部和中部地中海、亚得里亚海及北非沿岸',
        '五大湖与其他陆封湖泊种群',
      ],
      countries: [
        '加拿大',
        '美国',
        '冰岛',
        '挪威',
        '芬兰',
        '爱沙尼亚',
        '拉脱维亚',
        '立陶宛',
        '波兰',
        '俄罗斯',
        '英国',
        '法国',
        '西班牙',
        '葡萄牙',
        '意大利',
        '克罗地亚',
        '波黑',
        '黑山',
        '摩洛哥',
        '阿尔及利亚',
        '突尼斯',
      ],
      range:
        '原生范围横跨北大西洋两岸、部分波罗的海和地中海水系，兼有溯河型和永久淡水陆封型；Lake Erie、Michigan、Huron 和 Superior 的种群属于外来入侵，Lake Ontario、Lake Champlain 与 Finger Lakes 的起源仍有争议。',
      center: { lat: 48, lng: -25 },
    },
    habitats: [
      {
        name: '有水流的砾石产卵河段',
        realm: 'freshwater',
        description:
          '性成熟个体进入富氧河流，在砾石、卵石和小石块混合的浅水河床筑巢；水坝与不适合七鳃鳗的鱼道会切断上溯。',
        isPrimary: true,
      },
      {
        name: '缓流软沉积幼体区',
        realm: 'freshwater',
        description:
          '幼体埋在河缘、潭区或回水带的粉砂、细砂和有机碎屑中滤食；这类底床与上游产卵砾石床承担不同阶段。',
      },
      {
        name: '河口与北大西洋摄食水域',
        realm: 'marine',
        description:
          '溯河型个体变态后经河口进入海洋，在水层和近底区域寻找宿主；河口是淡水与海水渗透调节转换带。',
      },
      {
        name: '大湖与大型淡水水体',
        realm: 'freshwater',
        description:
          '陆封型寄生个体在湖泊和大型河流摄食。上游五大湖属于外来控制情境，其他陆封湖泊的起源和管理身份需逐地判断。',
      },
    ],
    measurements: {
      length: {
        min: 11.4,
        max: 120,
        unit: 'cm',
        note:
          'FAO 成体观测汇编跨度，混合海洋型、陆封型和不同成熟阶段；不是普通成体范围',
      },
      weight: {
        max: 2.3,
        unit: 'kg',
        note: 'FAO 所列 1.2 米最大标本的湿重，不是平均值或全种常见上限',
      },
    },
    diet: {
      types: ['carnivore', 'filter-feeder', 'detritivore'],
      foods: ['硅藻', '细菌', '有机碎屑', '宿主鱼血液', '宿主体液和少量组织'],
      description:
        '埋栖幼体用口罩、黏液和纤毛滤取微小颗粒；变态后的寄生阶段以口盘附着大型鱼类，再用舌部角质板锉开组织摄取血液和体液。性成熟迁徙阶段停止摄食。',
    },
    activity: [
      '幼体埋栖滤食',
      '寄生期湖海摄食',
      '夜间迁徙活动',
      '溯河产卵',
      '口盘搬石筑巢',
      '一次繁殖后死亡',
    ],
    tags: [
      '无颌脊椎动物',
      '溯河洄游',
      '生活史变态',
      'IUCN 无危',
      '大西洋原生种',
      '上游五大湖外来入侵种',
      '欧盟附录 II（瑞典种群除外）',
    ],
    summary:
      '一种跨越淡水与海洋的无颌脊椎动物，幼体埋沙滤食，变态后以齿盘附着鱼类；原生河流保护它，上游五大湖则持续控制它。',
    description:
      '海七鳃鳗没有上下颌、鳞片和成对鳍，圆形口盘、角质齿、锉状舌与每侧七个鳃孔构成成体外形。幼体在淡水软底中埋栖滤食数年，变态后进入海洋或大湖寄生摄食，随后停止进食并溯河完成一次繁殖。迁徙个体利用幼体气味寻找适生河流，通常没有鲑鱼式出生河归巢。IUCN 2022 年全球评估为无危、趋势稳定，OSPAR 和 HELCOM 仍记录欧洲区域衰退。大西洋原生种群需要河流连通和生境保护；Lake Erie、Michigan、Huron 与 Superior 的外来种群接受美加联合控制，Lake Ontario 等湖泊的起源不能写成定论。',
    storySections: [
      {
        key: 'jawless-vertebrate',
        label: '分类与外形',
        title: '一条没有颌的脊椎动物',
        body: '海七鳃鳗用圆形口盘、角质齿和锉状舌取代上下颌。光滑无鳞的身体没有胸鳍和腹鳍，眼后每侧七个鳃孔排成一列；它与鳗鲡只共享细长轮廓。',
      },
      {
        key: 'buried-larval-years',
        label: '幼体生活',
        title: '幼体在河床中埋栖数年',
        body: '幼体把身体埋进粉砂和细砂，只露出口罩迎向水流。黏液截留硅藻、细菌和碎屑；这段滤食生活通常至少约五年，记录跨度为两年至十九年以上。',
      },
      {
        key: 'metamorphic-rebuild',
        label: '变态与生理',
        title: '变态后转入寄生摄食阶段',
        body: '变态让眼、齿盘和寄生摄食结构出现，也重建鳃、肠道和离子转运系统。受控实验中，完全变态个体可直接耐受 35 ppt 海水；这个实验结果不是每只野外个体的固定耐盐上限。',
      },
      {
        key: 'attachment-and-breathing',
        label: '寄生摄食',
        title: '口盘吸住鱼，鳃孔继续换水',
        body: '口盘封在宿主体表时，鳃囊改从外侧鳃孔吸入和排出水，舌齿板则往复锉开组织。个体摄取血液和体液，宿主结局随鱼种、体型、温度和水域改变，一次附着不能证明宿主必然死亡。',
      },
      {
        key: 'scent-guided-migration',
        label: '嗅觉迁徙',
        title: '靠幼体气味寻找适生河流',
        body: '迁徙个体通常不精准返回出生河。幼体释放的气味帮助它们选择曾让后代存活的河流；进入繁殖阶段后，雄体信息素又引导雌体接近巢区，单一分子不能代表完整天然气味。',
      },
      {
        key: 'two-management-goals',
        label: '保护与控制',
        title: '原生水域保护，外来水域控制',
        body: '欧洲和北美大西洋河流移除阻隔、保护河床，让原生海七鳃鳗完成迁徙。上游五大湖的管理人员使用杀七鳃鳗剂、屏障和陷阱压低外来种群；全球无危等级不能替代具体水域的身份判断。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的海七鳃鳗命名记录',
        body: '林奈于 1758 年命名海七鳃鳗，现用学名为 Petromyzon marinus。它成体眼后每侧排列七个鳃孔，中文名“七鳃”指这一外形。幼体曾在形态和食性上显得与成体很不同：它们埋在河床滤食，经过变态才出现发达的眼、齿盘和寄生摄食结构。',
      },
    ],
    keyFacts: [
      '海七鳃鳗是无颌脊椎动物，不是鳗鲡；它没有上下颌、鳞片、鳃盖或成对鳍。',
      '成体眼后每侧有七个圆形鳃孔，侧面观察只能看到近侧七孔。',
      '角质齿不是真正骨质牙，中央舌部角质板承担锉开宿主组织的动作。',
      '幼体没有成体齿盘和可见大眼，以口罩、黏液和纤毛滤取硅藻、细菌与碎屑。',
      '幼体期通常至少约五年，记录跨度为两年至十九年以上。',
      '完全变态个体直接耐受 35 ppt 海水的结论来自受控实验。',
      '迁徙个体利用幼体气味选择河流，通常没有鲑鱼式出生河归巢。',
      '繁殖个体用口盘逐块移动石头筑巢，雌雄在一次产卵后死亡且不护幼。',
      'FAO 汇编的溯河型怀卵量为 151,836 至 304,832 粒，陆封型为 43,997 至 101,932 粒。',
      'IUCN 全球评估为 LC、趋势稳定，OSPAR 和 HELCOM 的区域评估更差。',
      'Lake Erie、Michigan、Huron 和 Superior 的种群属于外来入侵；Lake Ontario、Lake Champlain 与 Finger Lakes 的起源仍有争议。',
      '欧盟《栖息地指令》附录 II 列入本种但排除瑞典种群，伯尔尼公约将其列入附录 III。',
    ],
    threats: [
      '原生范围的水坝、堰和水电设施阻断成体上溯与变态个体入海',
      '疏浚、采砂、河道硬化和底床翻动破坏产卵砾石与幼体软沉积区',
      '城市、农业和工业污染及富营养化降低水质与底床溶氧',
      '部分欧洲河流的传统捕捞集中移除溯河繁殖成体',
      '河口、主河道、产卵床和幼体区之间的生境连通性丧失',
      '升温、枯水和洪峰时序变化可能错开产卵温度与流量窗口',
      '区域监测方法和采样努力不一致，使局部衰退难以比较',
    ],
    conservationActions: [
      '原生范围移除失去功能的阻隔，或设置适合七鳃鳗吸附和较弱持续游泳能力的通道',
      'Lake Erie、Michigan、Huron 和 Superior 的外来种群使用 TFM、必要时配合 Bayluscide、屏障和陷阱开展综合控制',
      '逐地核验种群身份，不把上游四湖的清除工具推广到大西洋原生河流或起源仍有争议的湖泊',
      '原生范围连通海洋、河口、主河道、产卵砾石床和幼体软底区',
      '限制关键河段的采砂、疏浚和硬化，维持粗底产卵区与细沉积幼体区',
      '改善污水处理，控制营养盐、有毒污染物和低氧',
      '组合成体计数、巢穴调查、标准化幼体采样和 eDNA，并报告采样努力与检出边界',
      '按河流种群状态管理传统渔业的季节、工具、数量和捕捞努力',
      '五大湖施药与屏障行动按水化学、剂量和非目标物种标准操作规程评估',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'gill-pores-per-side',
        label: '每侧鳃孔',
        value: '7',
        unit: '个',
        note: '两侧共 14 个；侧面图只能看到近侧七孔',
      },
      {
        key: 'maximum-documented-length',
        label: '最大记录总长',
        value: '1.2',
        unit: '米',
        note: 'FAO 汇编最大标本，重 2.3 千克；不是典型成体',
      },
      {
        key: 'larval-duration',
        label: '埋栖幼体期记录',
        value: '2 至 19+',
        unit: '年',
        note: '通常至少约 5 年；温度、食物和种群改变时长',
      },
      {
        key: 'anadromous-fecundity',
        label: '溯河型怀卵量',
        value: '15.2 万至 30.5 万',
        unit: '粒',
        note: 'FAO 汇编范围；陆封型约 4.4 万至 10.2 万粒',
      },
    ],
    media: {
      image: './images/species/sea-lamprey/01-open-water-portrait.webp',
      alt: '蓝绿色近岸水体中，一只完整海七鳃鳗从背上方呈 S 形游动，身体位于右侧并露出两枚背鳍',
      focalPoint: { x: 0.72, y: 0.47 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/sea-lamprey/02-oral-disc-and-seven-gill-pores.webp',
          alt: '一只海七鳃鳗的口盘近景，角质齿、一只可见侧眼和近侧七个圆形鳃孔清楚可见',
          title: '口盘与七个鳃孔',
          caption:
            '口盘中的小型角质齿和中央舌齿板用于附着与摄食；画面是科学约束下的重建，不提供凭证标本级齿数鉴定。',
          focalPoint: { x: 0.4, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/sea-lamprey/03-gravel-riffle-nest-building.webp',
          alt: '浅水砾石急流中，一只性别未定的繁殖期海七鳃鳗用口盘吸住一块小卵石',
          title: '用口盘移动巢材',
          caption:
            '雌雄繁殖个体都会移动石块形成砾石巢；画面只重建一次搬石动作，不证明巢已完成、发生交配或存在亲体护幼。',
          focalPoint: { x: 0.66, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/sea-lamprey/04-lake-trout-parasitic-feeding.webp',
          alt: '一只寄生期海七鳃鳗附着在一条完整湖鳟体侧的非血腥重建',
          title: '上游四湖的寄生摄食',
          caption:
            '画面按 Lake Erie、Michigan、Huron 与 Superior 的外来种群管理语境重建，不覆盖起源仍有争议的 Lake Ontario；一次附着不代表宿主死亡或固定损失量。',
          focalPoint: { x: 0.57, y: 0.49 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/sea-lamprey/05-buried-ammocoete-filter-feeding.webp',
          alt: '缓流软沉积物中，一只海七鳃鳗幼体大部分埋藏，只让口罩与覆有细沙的前端接触水流',
          title: '埋在河床里的滤食幼体',
          caption:
            '幼体没有成体齿盘和发达眼睛，身体多埋在细砂、粉砂与碎屑中；外部幼体形态本身不能完成物种鉴定。',
          focalPoint: { x: 0.33, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image: './images/species/sea-lamprey/06-edna-stream-monitoring.webp',
          alt: '两名研究人员在温带河流边采集并过滤环境 DNA 水样',
          title: '用水样寻找迁徙鱼的踪迹',
          caption:
            'eDNA 可支持原生种群保护或外来种群控制；一次水样不能单独证明存在、缺失、数量、入侵身份或种群趋势。',
          focalPoint: { x: 0.59, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...SEA_LAMPREY_SOURCES,
      {
        title: 'GBIF: Petromyzon marinus Linnaeus, 1758 nomenclatural record',
        url: 'https://www.gbif.org/species/8236498',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: SEA_LAMPREY_CONTENT_DATE,
    updatedAt: SEA_LAMPREY_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
