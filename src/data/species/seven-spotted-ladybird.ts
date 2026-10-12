import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE = '2026-08-28' as const;

const SEVEN_SPOTTED_LADYBIRD_CONTENT_DATE = '2026-08-28' as const;

const SEVEN_SPOTTED_LADYBIRD_SOURCES = [
  {
    title: 'GBIF / Catalogue of Life: Coccinella septempunctata',
    url: 'https://www.gbif.org/species/4990191',
    kind: 'taxonomy',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'ITIS Standard Report: Coccinella septempunctata, TSN 114347',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?print_version=PRT&search_topic=TSN&search_value=114347&source=to_print',
    kind: 'taxonomy',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'EPPO Global Database: Coccinella septempunctata (COCISE)',
    url: 'https://gd.eppo.int/taxon/COCISE',
    kind: 'taxonomy',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Taiwan Biodiversity Network: 七星瓢蟲 Coccinella septempunctata',
    url: 'https://www.tbn.org.tw/taxa/2324e44f-020c-4818-a3df-41f1c4f6d059',
    kind: 'taxonomy',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'USDA National Agricultural Library Thesaurus: Coccinella septempunctata',
    url: 'https://lod.nal.usda.gov/nalt/en/page/27442',
    kind: 'taxonomy',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'ICAR-NBAIR Featured Insects: Seven-spotted ladybird',
    url: 'https://databases.nbair.res.in/Featured_insects/Coccinella-septempunctata.php',
    kind: 'general',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Iqbal et al. 2024: Review of the genus Coccinella from Pakistan',
    url: 'https://doi.org/10.3897/BDJ.12.e137417',
    kind: 'taxonomy',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Marin et al. 2010: Coccinella septempunctata, a species complex?',
    url: 'https://doi.org/10.1111/j.1463-6409.2010.00450.x',
    kind: 'taxonomy',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Lecompte et al. 2016: Genetic structure across the native range',
    url: 'https://doi.org/10.1002/ece3.2288',
    kind: 'distribution',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Schaefer et al. 1987: North American distribution and establishment hypotheses',
    url: 'https://doi.org/10.1093/ee/16.2.368',
    kind: 'distribution',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Angalet et al. 1979: Coccinella septempunctata in the United States',
    url: 'https://doi.org/10.1093/ee/8.5.896',
    kind: 'distribution',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Day & Tatman 2006: Native and adventive ladybirds in northeastern US alfalfa',
    url: 'https://www.ars.usda.gov/ARSUserFiles/80100000/WHDay/DayandTatman06.pdf',
    kind: 'distribution',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'UK Species Inventory: Coccinella septempunctata',
    url: 'https://uksi-sandbox.nhm.ac.uk/taxon.php?linkKey=NBNSYS0000008324',
    kind: 'general',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Cornell Biological Control: Coccinella septempunctata',
    url: 'https://biocontrol.entomology.cornell.edu/predators/Coccinella.php',
    kind: 'ecology',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'USDA ARS and Washington State University: Field Guide for Integrated Pest Management in Hops',
    url: 'https://www.ars.usda.gov/ARSUserFiles/37109/hophandbook2010.pdf',
    kind: 'ecology',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Triltsch 1999: Food remains in field-collected adults and larvae',
    url: 'https://www.eje.cz/artkey/eje-199904-0006_Food_remains_in_the_guts_of_Coccinella_septempunctata_Coleoptera_Coccinellidae_adults_and_larvae.php',
    kind: 'ecology',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Weber & Lundgren 2009: Assessing the trophic ecology of Coccinellidae',
    url: 'https://www.ars.usda.gov/ARSUserFiles/30842/PUBS-PDF/Weber-Lundgren2009-Coccinellid.pdf',
    kind: 'ecology',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Khan & Yoldaş 2018: Functional response to pea aphid density',
    url: 'https://doi.org/10.1016/j.aspen.2018.08.012',
    kind: 'ecology',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Farooq et al. 2020: Demography on four host aphid species',
    url: 'https://doi.org/10.7717/peerj.8313',
    kind: 'ecology',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Hesler et al. 2010: Elytral macular variation in Palearctic and North American specimens',
    url: 'https://www.ars.usda.gov/research/publications/publication/?seqNo115=252796',
    kind: 'general',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Holloway et al. 1991: Coccinelline distribution and individual variation in defence',
    url: 'https://doi.org/10.1007/BF01240660',
    kind: 'ecology',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Blount et al. 2012: Resource limitation and aposematic signals',
    url: 'https://doi.org/10.1111/j.1365-2435.2012.01961.x',
    kind: 'ecology',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Hodek & Čerkasov 1960: Prevention and induction of adult diapause',
    url: 'https://doi.org/10.1038/187345a0',
    kind: 'ecology',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Hodek 2012: Adult diapause in Coleoptera',
    url: 'https://doi.org/10.1155/2012/249081',
    kind: 'ecology',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'UKCEH: Why ladybirds enter homes and where seven-spots overwinter',
    url: 'https://www.ceh.ac.uk/news-and-media/blogs/why-are-some-ladybirds-so-varied-colour',
    kind: 'ecology',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'UKCEH European Ladybirds: Ladybird morphology',
    url: 'https://european-ladybirds.brc.ac.uk/ladybird',
    kind: 'general',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List search: Coccinella septempunctata, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Coccinella%20septempunctata&searchType=species',
    kind: 'conservation',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'German Red List Centre: Coccinella septempunctata regional assessment',
    url: 'https://www.rote-liste-zentrum.de/en/detailseite/?species_uuid=e7b10812-7db4-40c7-bc20-2e95e4b8276e',
    kind: 'conservation',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Evans 2004: Habitat displacement of North American ladybirds',
    url: 'https://doi.org/10.1890/03-0230',
    kind: 'ecology',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Soares et al. 2023: A roadmap for ladybird conservation and recovery',
    url: 'https://doi.org/10.1111/cobi.13965',
    kind: 'conservation',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'UMN Extension: Lady beetle conservation and release guidance',
    url: 'https://extension.umn.edu/garden-and-home/yard-and-garden/yard-and-garden-insects/lady-beetles',
    kind: 'general',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
  {
    title: 'Sublethal and transgenerational effects of synthetic insecticides on Coccinella septempunctata',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9885102/',
    kind: 'ecology',
    accessedAt: SEVEN_SPOTTED_LADYBIRD_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-coccinella-septempunctata',
    slug: 'seven-spotted-ladybird',
    names: {
      zh: '七星瓢虫',
      en: 'Seven-spotted Ladybird',
      aliases: [
        '七星瓢蟲',
        '7-spot Ladybird',
        'Seven-spot Ladybird',
        'Seven-spotted Lady Beetle',
        'Sevenspotted Lady Beetle',
        'C-7',
        'Coccinella 7-punctata',
      ],
    },
    scientificName: 'Coccinella septempunctata',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Insecta', '昆虫纲'),
      taxon('Coleoptera', '鞘翅目'),
      taxon('Coccinellidae', '瓢虫科'),
      taxon('Coccinella', '瓢虫属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲', '欧洲', '非洲', '北美洲'],
      countries: [
        '中国',
        '日本',
        '韩国',
        '印度',
        '巴基斯坦',
        '俄罗斯',
        '英国',
        '法国',
        '德国',
        '美国',
        '加拿大',
      ],
      regions: [
        '欧洲与地中海沿岸',
        '北非古北界地区',
        '西亚、中亚、南亚与东亚',
        '西伯利亚及俄罗斯远东',
        '美国与加拿大的引入分布区',
      ],
      range:
        '原生范围横跨古北界的大部分欧洲、亚洲和北非；20 世纪的反复释放与其他输入过程让它在北美以引入种身份建立并扩散。美国 1973 年的新泽西种群是北美早期确认的建立种群之一，不能当作第一次释放或唯一输入事件。国家清单只列代表性记录区，不穷尽完整分布，也不把发生点等同稳定繁殖种群。',
      center: { lat: 45, lng: 55 },
    },
    habitats: [
      {
        name: '蚜虫丰富的农田与作物带',
        realm: 'terrestrial',
        description:
          '小麦、豆科、马铃薯、玉米和苜蓿等作物上的蚜虫斑块提供主要觅食场所；猎物密度、作物物候和耕作扰动会改变停留时间。',
        isPrimary: true,
      },
      {
        name: '草地、草本群落与田边',
        realm: 'terrestrial',
        description:
          '未耕草地、演替草本和田边植被可在作物更替时继续提供猎物、花粉与移动通道，具体利用随季节变化。',
      },
      {
        name: '林缘、灌丛与木本植物',
        realm: 'terrestrial',
        description:
          '猎物转移后，成虫会飞到林缘、灌木或树冠搜索蚜虫和替代食物；单一作物样地不能概括全年生境。',
      },
      {
        name: '枯叶与近地越冬庇护处',
        realm: 'terrestrial',
        description:
          '成虫会在落叶、草丛基部和其他避风处进入越冬休眠。不同地区使用的地点和群聚规模不固定，清除全部枯叶会减少部分可用庇护。',
      },
    ],
    measurements: {
      length: {
        min: 0.52,
        max: 0.86,
        unit: 'cm',
        note:
          '印度 ICAR-NBAIR 物种页给出成虫体长 5.2 至 8.6 毫米、体宽 4.0 至 6.6 毫米；英国识别资料常用 6 至 8 毫米，巴基斯坦凭证样本为 6.63 至 7.20 毫米。三组口径来自不同地区和用途，不是全球极值。',
      },
    },
    diet: {
      types: ['carnivore', 'insectivore'],
      foods: [
        '蚜虫（成虫与幼虫的核心猎物）',
        '粉虱、木虱和介壳虫等小型半翅目',
        '蓟马、甲虫幼虫及瓢虫卵和幼虫等非蚜虫节肢动物',
        '花粉、真菌孢子和少量花蜜等替代食物',
      ],
      description:
        '成虫和幼虫都会在植被上搜索蚜虫。德国田间肠道剖检还发现蓟马、其他非蚜虫节肢动物、花粉和真菌孢子，季节与发育阶段会改变多类猎物的比例，因此不能把七星瓢虫写成只吃害虫的定向捕食者。',
    },
    activity: [
      '在植被上主动搜索猎物',
      '飞行转移觅食斑块',
      '成虫越冬休眠',
      '可形成越冬群聚',
      '完全变态',
    ],
    tags: [
      '鞘翅目',
      '古北界原生',
      '北美引入种',
      '蚜食性捕食者',
      '反射出血',
      '完全变态',
      '成虫越冬',
    ],
    summary:
      '红色鞘翅上通常排列七枚黑斑，成虫与幼虫追踪蚜虫，也会利用其他小型猎物和替代食物。',
    description:
      '七星瓢虫是瓢虫科瓢虫属的捕食性甲虫。标准成虫的红橙色鞘翅上有七枚黑斑：左右各三枚，另有一枚跨越鞘翅缝；斑数不记录年龄，个体也会出现斑纹融合。硬化鞘翅保护折叠的膜质后翅，飞行时才向两侧抬起。它经历卵、四龄幼虫、蛹和成虫的完全变态，幼虫与成虫都以蚜虫为重要食物。受扰时，腿部关节会渗出含瓢虫素的黄色血淋巴。它原生于古北界，在北美属于引入种；IUCN 尚未评估本种，CITES 当前未列入，全球趋势未知。',
    storySections: [
      {
        key: 'seven-spots-not-seven-certainties',
        label: '斑纹与身份',
        title: '七枚斑点的标准排列',
        body: '标准斑纹由三枚位于左鞘翅、三枚位于右鞘翅和一枚横跨两片鞘翅前缘的共享斑组成，总数为七。北美标本研究记录过斑块扩大或融合的个体，因此七斑不能代表年龄，照片里的斑数也不能替代完整鉴定。',
      },
      {
        key: 'elytra-and-flight',
        label: '甲虫结构',
        title: '红色外壳是前翅，真正的飞行翼折在下面',
        body: '两片红色鞘翅是硬化前翅，静止时覆盖腹部和膜质后翅。起飞前，成虫抬起鞘翅，再展开折叠的膜质后翅完成飞行；落地后，后翅重新收纳。斑纹长在鞘翅上，不在飞行后翅上。',
      },
      {
        key: 'aphid-predator-not-pest-specialist',
        label: '食性与生物防治',
        title: '捕食蚜虫，也利用其他食物',
        body: '成虫和幼虫都捕食蚜虫，捕食量受温度、龄期、饥饿程度与猎物密度影响。田间肠道记录还检出蓟马、甲虫幼虫、瓢虫幼体、花粉和真菌孢子等替代猎物。这种广食性有助于抑制蚜虫，也会影响其他食物网成员。',
      },
      {
        key: 'coccinelline-warning',
        label: '警戒色与防御',
        title: '腿部关节渗出的黄滴，是带苦味的血淋巴',
        body: '捕食者施压时，七星瓢虫能从腿部股胫关节释放黄色血淋巴，这种反射出血会带出防御生物碱 coccinelline（瓢虫素）。红黑警戒色与化学防御共同降低部分捕食风险。黄色液体不是尿液，也不是由口器注入的毒液。',
      },
      {
        key: 'four-stages-and-winter',
        label: '发育与年周期',
        title: '四个生命阶段之后，成虫跨过寒季',
        body: '生命周期依次经过卵、四龄幼虫、蛹和成虫，属于完全变态。雌虫常把卵产在猎物附近，幼虫孵化后主动搜索蚜虫；温度和食物会影响每个阶段的时长，固定天数只能代表特定实验。成虫在寒季进入休眠，可在枯叶等庇护处聚集。',
      },
      {
        key: 'beneficial-here-nonnative-there',
        label: '分布与管理',
        title: '原生区与北美引入区分别管理',
        body: '七星瓢虫在古北界原生食物网中捕食蚜虫，在北美却是经过释放和其他输入过程建立的外来捕食者。北美长期记录显示本地瓢虫下降与外来种建立相伴，但这种相关不足以支持单一因果，土地利用和其他外来瓢虫也参与变化。管理者应分开记录两套种群。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的命名与历史数字拼写',
        body: '林奈于 1758 年命名七星瓢虫，现用学名为 Coccinella septempunctata，历史文献还出现 Coccinella 7-punctata 的拼写。中文“七星”对应标准成虫的七枚黑斑：两侧鞘翅各三枚，加上前端一枚共享斑。斑块可能融合，数量也不代表年龄。',
      },
    ],
    keyFacts: [
      '当前接受学名为 Coccinella septempunctata Linnaeus, 1758；Coccinella 7-punctata 是历史拼写。',
      '标准成虫每片鞘翅各有三枚黑斑，另有一枚跨越前端鞘翅缝，合计七枚。',
      '斑点数不代表年龄；斑块可扩大或融合，困难个体需要结合更多形态特征鉴定。',
      '鞘翅是硬化前翅，飞行用的膜质后翅折叠在其下。',
      '印度 ICAR-NBAIR 资料给出成虫体长 5.2 至 8.6 毫米，不能当作全球极值。',
      '成虫和幼虫都以蚜虫为核心猎物，也取食蓟马等非蚜虫猎物、花粉和真菌孢子。',
      '生命周期包含卵、四个幼虫龄期、蛹和成虫，温度与食物会改变发育日程。',
      '黄色防御液是从腿部关节释放的含瓢虫素血淋巴，不是尿液或注射型毒液。',
      '本种原生于古北界，在美国和加拿大属于引入种；北美建立来源包含人为释放与其他可能输入。',
      'IUCN 尚未评估本种，CITES 当前未列入，全球种群趋势未知。',
    ],
    threats: [
      'IUCN 尚未给出物种级全球评估，原生区与引入区也缺少同一口径的长期趋势；现有资料不能判定全球增减。',
      '广谱杀虫剂会同时影响瓢虫、蚜虫和其他猎物，频繁清除田边草本与枯叶还会减少觅食和越冬空间；风险随药剂、时机和地区变化。',
      '单一作物、同步收割和短暂蚜虫高峰会迫使成虫在生境间移动，田边植被质量决定部分季节能否持续利用。',
      '北美引入种群会与本地捕食者竞争并发生集团内捕食，但本地瓢虫变化还受土地利用、其他外来种和调查差异影响。',
      '跨区域运输或释放会混淆原生与引入边界，并可能把伴生病原、寄生物或不合适遗传来源带入新地点。',
      '公众常把七斑当作年龄、把黄色血淋巴当作尿液，也容易把它与异色瓢虫等相近种混淆，错误识别会污染监测记录。',
    ],
    conservationActions: [
      '分别维护古北界原生种群与北美引入种群的数据字段、趋势判断和管理目标。',
      '在农田、草地、林缘和越冬地开展定时定量调查，同时记录作物、猎物密度、用药、收割和枯叶覆盖。',
      '原生区的综合虫害管理应保留部分未施药田边与越冬庇护，并选用对非目标捕食者风险较低的时机和药剂。',
      '北美调查应同时记录本地和外来瓢虫群落，使用凭证照片或标本检验竞争与下降假说。',
      '停止跨边界放生来源不明的成虫、幼虫或卵，生物防治项目应先核对当地法规、原生性和非目标风险。',
      '科普材料应说明它会捕食多类节肢动物，避免使用固定日捕食量或“只吃害虫”的宣传。',
      '定期复核 IUCN、CITES、区域红色名录和分布数据库；未评估与未列入贸易公约都不能替代风险判断。',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'adult-length',
        label: '成虫体长',
        value: '5.2–8.6',
        unit: 'mm',
        note: '印度 ICAR-NBAIR 物种页口径；英国与巴基斯坦资料给出更窄的地区区间，不是全球极值。',
      },
      {
        key: 'elytral-spots',
        label: '标准鞘翅黑斑',
        value: '7',
        unit: '个',
        note: '左鞘翅 3 枚、右鞘翅 3 枚，再共享 1 枚跨缝斑；斑数不代表年龄，个体斑块可融合。',
      },
      {
        key: 'larval-instars',
        label: '幼虫龄期',
        value: '4',
        unit: '龄',
        note: '完全变态中的四个幼虫龄期；温度、猎物和实验条件会改变各龄持续时间。',
      },
      {
        key: 'north-american-establishment',
        label: '北美早期建立记录',
        value: '1973',
        unit: '年',
        note: '新泽西发现建立繁殖种群的年份，不等于首次释放、首次到达或北美全域扩散时间。',
      },
    ],
    media: {
      image:
        './images/species/seven-spotted-ladybird/01-adult-aphid-colony-portrait.webp',
      alt: '绿色叶片右侧一只完整七星瓢虫成虫呈背侧视角，红色鞘翅七枚黑斑清楚可数，左侧茎上有分离的绿色蚜虫群',
      focalPoint: { x: 0.69, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/seven-spotted-ladybird/02-standard-seven-spot-dorsal.webp',
          alt: '一只完整七星瓢虫成虫停在绿色叶面，近背面视角显示左右各三斑与一枚跨鞘翅缝的共享斑',
          title: '七枚黑斑的标准排列',
          caption:
            '共享斑只计一次；斑数不表示年龄，真实个体还可能出现斑块扩大或融合。',
          focalPoint: { x: 0.5, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/seven-spotted-ladybird/03-larva-aphid-hunt.webp',
          alt: '一只深灰黑色带橙色侧斑的七星瓢虫后期幼虫在叶片上接近另一茎上的绿色蚜虫群，双方保持间隙',
          title: '幼虫也会搜索蚜虫',
          caption:
            '画面停在接触之前，只表达蚜虫是重要猎物，不给出固定捕食量或成功结果。',
          focalPoint: { x: 0.34, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/seven-spotted-ladybird/04-pupa-on-leaf.webp',
          alt: '绿色叶片上一只完整橙黑色七星瓢虫蛹以后端固定，附着点留有一小块皱缩空幼虫皮',
          title: '固定在叶面的蛹',
          caption:
            '蛹体保持闭合，后端只留空蜕皮；温度与食物会影响蛹期，画面不提供固定日程。',
          focalPoint: { x: 0.47, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/seven-spotted-ladybird/05-reflex-bleeding-defense.webp',
          alt: '一只完整七星瓢虫成虫停在绿叶上，两侧各有一小滴黄色血淋巴附着在腿部关节',
          title: '腿部关节的反射出血',
          caption:
            '黄色液滴代表含瓢虫素的血淋巴，不是尿液、伤口流血或由口器注入的毒液。',
          focalPoint: { x: 0.5, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/seven-spotted-ladybird/06-leaf-litter-overwintering.webp',
          alt: '温带田边卷曲枯叶下三只七星瓢虫成虫静伏在湿润土壤和苔藓间',
          title: '枯叶下的越冬小群',
          caption:
            '场景重建成虫使用落叶庇护的可能状态，不把三只当作固定群聚规模或所有地区的统一越冬地点。',
          focalPoint: { x: 0.51, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: SEVEN_SPOTTED_LADYBIRD_SOURCES,
    featured: true,
    publishedAt: SEVEN_SPOTTED_LADYBIRD_CONTENT_DATE,
    updatedAt: SEVEN_SPOTTED_LADYBIRD_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
