import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const DAPHNIA_MAGNA_SOURCE_DATE = '2026-09-01' as const;

const DAPHNIA_MAGNA_CONTENT_DATE = '2026-09-01' as const;

const DAPHNIA_MAGNA_SOURCES = [
  {
    title: 'WoRMS — Daphnia magna Straus, 1820 (AphiaID 148372)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=148372',
    kind: 'taxonomy',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'Xiang et al. 2015 — Checklist of Chinese cladocerans',
    url: 'https://doi.org/10.11646/zootaxa.3904.1.1',
    kind: 'taxonomy',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'Straus 1820 — Memoire sur les Daphnia',
    url: 'https://books.google.com/books?id=vx8OAAAAQAAJ',
    kind: 'taxonomy',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'ITIS — Daphnia magna Straus, 1820 (TSN 83884)',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=83884',
    kind: 'taxonomy',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'Catalogue of Life — Daphnia (Ctenodaphnia) magna Straus, 1820',
    url: 'https://www.catalogueoflife.org/data/taxon/6CCSV',
    kind: 'taxonomy',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'GBIF Backbone Taxonomy — Daphnia magna Straus, 1820',
    url: 'https://www.gbif.org/species/2234822',
    kind: 'taxonomy',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'Bekker et al. 2018 — Phylogeography of Daphnia magna',
    url: 'https://doi.org/10.1371/journal.pone.0194045',
    kind: 'distribution',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'University of Basel — Daphnia magna Diversity Panel',
    url: 'https://www.evolution.unibas.ch/ebert/research/referencepanel/index.htm',
    kind: 'distribution',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'Fields et al. 2022 — Population-genomic analysis of Daphnia magna',
    url: 'https://doi.org/10.1093/molbev/msac048',
    kind: 'distribution',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'De Gelas & De Meester 2005 — Phylogeography of Daphnia magna in Europe',
    url: 'https://doi.org/10.1111/j.1365-294X.2004.02434.x',
    kind: 'distribution',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'Chakri et al. 2010 — North African Daphnia magna responses to predator cues',
    url: 'https://doi.org/10.1016/j.crvi.2010.09.004',
    kind: 'distribution',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'Espinosa-Rodríguez et al. 2024 — Daphnia magna in central Mexico wetlands and implications of laboratory escape',
    url: 'https://doi.org/10.1007/s10530-023-03164-7',
    kind: 'distribution',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'Ebert 2005 — Ecology, Epidemiology, and Evolution of Parasitism in Daphnia',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK2042/',
    kind: 'general',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'Ebert 2022 — Daphnia as a versatile model system in ecology and evolution',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9360664/',
    kind: 'general',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'NINA — Daphnia magna identification and body-size reference sheet',
    url: 'https://nina.no/archive/nina/PppBasePdf/NINA-Infomateriell/2007/krepsdyrfaktaark/walseng_Daphnia%20magna.pdf',
    kind: 'general',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'Seidl et al. 2002 — Water flow through the brood chamber of Daphnia magna',
    url: 'https://doi.org/10.1078/0944-2006-00050',
    kind: 'ecology',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'Mittmann et al. 2014 — Development and staging of Daphnia magna based on morphological landmarks',
    url: 'https://doi.org/10.1186/2041-9139-5-12',
    kind: 'general',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'Gerritsen & Porter 1982 — Surface chemistry in zooplankton filter feeding',
    url: 'https://doi.org/10.1126/science.216.4551.1225',
    kind: 'ecology',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'Siehoff et al. 2009 — Periphyton as an alternative food for Daphnia magna',
    url: 'https://doi.org/10.1111/j.1365-2427.2008.02087.x',
    kind: 'ecology',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'Brans et al. 2024 — Regional and local adaptation in salinity tolerance',
    url: 'https://doi.org/10.1098/rspb.2023.1917',
    kind: 'ecology',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'Kato et al. 2019 — Live observation of oviposition in Daphnia magna',
    url: 'https://doi.org/10.1371/journal.pone.0224388',
    kind: 'ecology',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'Cuenca Cambronero & Orsini 2018 — Resurrection of dormant Daphnia magna',
    url: 'https://doi.org/10.3791/56637',
    kind: 'ecology',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'Santos & Ebert 2023 — Stress tolerance of Daphnia magna resting stages',
    url: 'https://doi.org/10.1007/s00442-023-05478-8',
    kind: 'ecology',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'Rabus & Laforsch 2011 — Predator-induced defence in Daphnia magna',
    url: 'https://doi.org/10.1111/j.1365-2435.2011.01840.x',
    kind: 'ecology',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'Rabus et al. 2013 — Predator-induced fortification of the Daphnia magna carapace',
    url: 'https://doi.org/10.1371/journal.pone.0067856',
    kind: 'ecology',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'OECD Test No. 202 — Daphnia sp. acute immobilisation test',
    url: 'https://doi.org/10.1787/9789264069947-en',
    kind: 'ecology',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'OECD Test No. 211 — Daphnia magna reproduction test',
    url: 'https://doi.org/10.1787/9789264185203-en',
    kind: 'ecology',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: '生态环境部 HJ 1456—2026 — 水质 急性毒性的测定 大型溞活动抑制法',
    url: 'https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/jcffbz/202602/W020260206384592303542.pdf',
    kind: 'ecology',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'Lee et al. 2019 — The genome of Daphnia magna: a potential use for freshwater molecular ecotoxicology',
    url: 'https://doi.org/10.1016/j.aquatox.2019.02.009',
    kind: 'general',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'EUNIS — Daphnia magna, not evaluated by IUCN',
    url: 'https://eunis.eea.europa.eu/species/257821',
    kind: 'conservation',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: 'NatureServe Explorer — Daphnia magna global status GNR',
    url: 'https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.1102152/Daphnia_magna',
    kind: 'conservation',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'IUCN Red List species search — Daphnia magna, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Daphnia%20magna&searchType=species',
    kind: 'conservation',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      'IUCN Red List FAQ — Species absent from the Red List are Not Evaluated',
    url: 'https://nrl.iucnredlist.org/about/faqs',
    kind: 'conservation',
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-daphnia-magna',
    slug: 'large-water-flea',
    names: {
      zh: '大型溞',
      en: 'Large Water Flea',
      aliases: ['大型水蚤', 'Large Waterflea', 'Daphnia (Ctenodaphnia) magna'],
    },
    scientificName: 'Daphnia magna',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Branchiopoda', '鳃足纲'),
      taxon('Anomopoda', '异足目'),
      taxon('Daphniidae', '溞科'),
      taxon('Daphnia', '溞属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['freshwater'],
      continents: ['欧洲', '亚洲', '北美洲', '非洲'],
      regions: [
        '欧洲、亚洲和北美洲的温带至寒温带静水水体',
        '北非部分临时池塘',
        '淡水及部分弱咸水池塘与岩池',
      ],
      countries: [],
      range:
        '广见于欧洲、亚洲和北美的温带及较冷地区，北非也有记录，常见生境包括池塘和季节性水体。各地种群存在遗传差异，汇总记录还可能混有误鉴和培养个体逸出；出现记录需要进一步核实，才能判断原生范围。',
      center: { lat: 50, lng: 35 },
    },
    habitats: [
      {
        name: '浅水池塘、沟渠与小型水库',
        realm: 'freshwater',
        description:
          '大型溞多见于静水或缓流水体；浮游藻类丰富时可形成高密度种群，单次暴发不能代表长期丰度。',
        isPrimary: true,
      },
      {
        name: '季节性池塘与岩池',
        realm: 'freshwater',
        description:
          '水体干涸会清除活动个体，沉积物中的卵鞍和休眠卵可参与下一水期重建；两者不是同一个结构。',
      },
      {
        name: '湖泊与水库的开放水层',
        realm: 'freshwater',
        description:
          '它能进入较大的永久水体，但强烈的视觉性鱼类捕食会压低或排除大型枝角类，不能把所有湖泊都视作典型优势生境。',
      },
      {
        name: '弱咸水池塘与沿海岩池',
        realm: 'freshwater',
        description:
          '部分种群可生活在弱咸水。21 个种群、126 个克隆的共同园实验显示盐度反应有区域、种群和克隆差异，不能套用全种统一阈值。',
      },
    ],
    measurements: {
      length: {
        min: 2.2,
        max: 6,
        unit: 'mm',
        note: '成体参考跨度；挪威区域鉴定资料给出雌性约 2.9—6.0 毫米、雄性约 2.2—3.5 毫米，不能外推为所有地点、季节与克隆的统计分布。',
      },
    },
    diet: {
      types: ['filter-feeder'],
      foods: [
        '单细胞藻类与其他浮游植物',
        '细菌',
        '细颗粒有机碎屑',
        '食物不足时可利用的附生生物',
      ],
      description:
        '五对叶状胸肢维持背甲腹侧水流，滤板捕获悬浮颗粒并把食物送入口部；浮游食物不足时也能从表面利用附生生物。颗粒留存受尺寸、表面化学、食物浓度、体型和水质影响，不是按单一筛孔机械截留。',
    },
    activity: [
      '用分枝的第二触角划水，呈跳跃式游泳',
      '以五对叶状胸肢维持滤食、导食和呼吸水流',
      '浮游食物不足时可在近底层或表面利用附生生物',
      '生长与蜕皮交替，背甲后端形成尾刺',
      '有利条件下以孤雌生殖连续产生即时卵',
      '环境信号可让部分克隆进入有性阶段并形成带休眠卵的卵鞍',
    ],
    tags: [
      '鳃足纲首次收录',
      '异足目',
      '溞科',
      '淡水浮游动物',
      '悬浮滤食',
      '透明背甲',
      '第二触角游泳',
      '周期性孤雌生殖',
      '背侧育儿室',
      '卵鞍',
      '休眠卵库',
      '捕食者诱导可塑性',
      '模式生物',
      '生态毒理学',
      'IUCN 未评估',
    ],
    summary:
      '大型溞是淡水中的小型甲壳动物，用第二对触角划水，用五对胸肢过滤食物。适宜时，雌体可连续产生不经受精的后代；环境变差时，种群会形成受保护的休眠卵。',
    description:
      '大型溞常生活在温带池塘、季节性水体和缓流淡水中。薄而透明的外壳包住身体，伸出的第二对触角带动它一跳一跳地游动。胸肢形成水流，收集微藻、细菌和有机颗粒，它又是鱼类等动物的食物。科研人员常用它研究水污染、捕食压力和休眠卵，但不同地区、不同克隆的反应可能差别很大。',
    storySections: [
      {
        key: 'taxonomy-aperture',
        label: '分类口径',
        title: '分类资料为何使用不同的“目”',
        body: 'Straus 在 1820 年正式命名大型溞，现用学名仍为 Daphnia magna。不同分类体系对高层级的安排有所不同：WoRMS 将 Anomopoda 作为目，Diplostraca 放在更高层级；另一些资料把 Diplostraca 列为目。中文旧资料和水质标准也常沿用“甲壳纲”“枝角类”等传统称呼。查找研究时，学名比这些层级名称更稳定。',
      },
      {
        key: 'transparent-filter-feeder',
        label: '透明滤食者',
        title: '透明外壳下的五对胸肢',
        body: '第二对触角负责游泳，五对叶状胸肢持续形成水流，兼顾取食和气体交换。过滤结构对颗粒的截留会受到粒径、表面电荷和湿润性等因素影响，研究还记录过约 0.5 微米颗粒的截留。因此，胸肢不能简单理解为孔径固定的筛网。',
      },
      {
        key: 'food-web-and-predator-plasticity',
        label: '食物网与可塑性',
        title: '捕食压力能改变某些克隆的体形',
        body: 'Rabus 与 Laforsch 的实验发现，一个大型溞克隆遇到食肉的欧洲鲎虫 Triops cancriformis 时，会形成更宽的身体、更长的尾刺和更坚硬的外壳。这种反应与克隆、年龄和实验条件有关。其他溞类的头盔或颈齿也各有研究背景，不能一并当作大型溞的固定特征。',
      },
      {
        key: 'parthenogenetic-brood-chamber',
        label: '孤雌育儿室',
        title: '雌体在育儿腔中携带后代',
        body: '条件适宜时，雌体通过孤雌生殖产生二倍体卵，在背部育儿腔中发育。水质标准所用的约 20°C 条件下，幼体经历 4 至 6 个龄期，约 6 至 8 天性成熟；常见每窝 20 至 30 只，文献最大值可到 150 只。这些数字随温度、食物和培养条件改变。',
      },
      {
        key: 'ephippium-resting-egg-bank',
        label: '卵鞍与休眠卵',
        title: '休眠卵在保护壳里等待水体恢复',
        body: '有性生殖产生的受精卵进入深色的卵鞍，卵鞍通常容纳两枚卵，也可能只有一枚或没有卵。卵鞍随蜕皮脱落，能进入沉积物，或由水流、风和动物带到别处。休眠的是卵内胚胎，卵鞍是外部保护结构。研究者可孵化旧沉积物中的卵来比较历史种群，但能保存并孵出的个体只代表其中一部分。',
      },
      {
        key: 'ecotoxicology-test-organism',
        label: '生态毒理试验',
        title: '水质实验测什么',
        body: 'OECD 202 使用孵出不足 24 小时的幼体，观察 48 小时内的活动抑制，并可计算 24 和 48 小时的 EC50，即让一半测试个体活动受抑制的浓度。OECD 211 则用不足 24 小时的雌体开展 21 天试验，记录存活与后代数量。中国 HJ 1456 至 2026 自 2026 年 5 月 1 日实施；解读结果需要同时查看试验条件和测量指标。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1820 年正式命名的淡水“水蚤”',
        body: '大型溞的正式科学命名署名为 Straus，年份为 1820，现用名称是 Daphnia magna。“水蚤”是溞类常见的俗称，它们实际属于甲壳动物。大型溞能快速繁殖、形成休眠卵，后来成为水质毒性试验和种群演化研究中常用的动物。',
      },
    ],
    keyFacts: [
      '接受名是 Daphnia magna Straus, 1820；原始属未改变，所以作者和年份不加括号。',
      '现行国家生态环境标准采用“大型溞”，旧资料中的“大型水蚤”保留为检索别名。',
      '大型溞属于节肢动物门、鳃足纲、溞科和溞属；不同分类体系对“目”的层级安排有所不同。',
      'WoRMS 与枝角类分类文献把 Anomopoda 置于目级；ITIS、Catalogue of Life 与 GBIF Backbone 把 Diplostraca 置于目级。',
      '大型溞分布于欧洲、亚洲和北美洲温带至寒温带水体，北非部分临时池塘也有可靠记录。',
      '不同大陆和欧亚东西部样本存在明显遗传结构，广布不等于全范围自由混合。',
      '聚合平台的出现记录需要区分原生种群、培养个体逸出和误鉴，不能直接用于逐国划定原生范围。',
      '挪威区域鉴定资料给出雌体 2.9 至 6.0 毫米、雄体 2.2 至 3.5 毫米。',
      '第二触角是主要游泳器官，五对叶状胸肢参与滤食、导食和呼吸水流。',
      '颗粒留存受尺寸和表面化学共同影响，不能把胸肢滤板解释为固定孔径筛网。',
      '大型溞主要摄取单细胞藻类、细菌与细颗粒有机物，浮游食物不足时也能利用附生生物。',
      '它是浮游食物网中的初级消费者，同时成为鱼类和较大无脊椎动物的猎物。',
      '强烈鱼类捕食会压低或排除大型枝角类，湖泊记录不代表在所有湖泊占优势。',
      '21 个种群、126 个克隆的共同园实验显示盐度耐受存在区域、种群和克隆差异。',
      'Triops cancriformis 线索可在特定实验克隆中诱导更宽的身体、较长尾刺和强化背甲。',
      '捕食诱导结果不能外推为所有克隆都会形成相同结构，头盔与颈齿也不是本种固定防御。',
      '有利条件下，雌体以孤雌生殖产生二倍体即时卵，并把卵放入背侧育儿室。',
      'HJ 标准培养背景中的 20 摄氏度、4 至 6 个幼龄期和 6 至 8 天成熟不是野外固定时间表。',
      '一个卵鞍通常容纳两枚休眠卵，也可能只有一枚或没有卵。',
      '休眠卵是胚胎，卵鞍是背甲特化形成的保护结构，两者不能互换。',
      '卵鞍在下一次蜕皮时脱落，休眠卵可进入沉积物卵库并跨越不利水期。',
      'OECD TG 202 使用不足 24 小时幼溞，暴露 48 小时并记录活动抑制和 EC50。',
      '活动抑制可以包括死亡，但不等同于死亡率或化学物鉴定。',
      'OECD TG 211 以不足 24 小时年轻雌体开始 21 天繁殖试验，核心终点包括存活后代数。',
      'HJ 1456 至 2026 于 2026 年 5 月 1 日实施，适用于规定水样的急性活动抑制测定。',
      '单克隆标准试验不能代表所有大型溞种群或整个淡水无脊椎动物群落。',
      'IUCN 尚未发布本种全球评估；NE 和未知趋势不等于 LC、DD 或种群稳定。',
    ],
    threats: [
      '临时池塘排水、水文改变和表层沉积物扰动可破坏地方活动种群及休眠卵库，全球影响尚未量化',
      '鱼类引入或捕食压力升高会压低大型枝角类的地方占据与体型结构',
      '盐化、升温和污染物会造成种群与克隆特异的生存、发育或繁殖效应',
      '实验室培养株逸出、被动转移和误鉴会干扰分布、遗传结构和地方种群判断',
      '把一个克隆的毒性阈值或诱导防御当作全种常数，会遮蔽强烈的地理和遗传差异',
      'IUCN 尚未评估，全球种群大小、趋势、占域变化和主要威胁排序均未知',
    ],
    conservationActions: [
      '保存永久与季节性池塘组成的水体网络，维持自然水文周期，并避免破坏含卵鞍的表层沉积物',
      '长期记录水期、鱼类、盐度、污染物、活动种群和休眠卵库，不以一次丰度或未检出代替趋势',
      '用形态凭证、DNA 条形码和采样元数据互证分布记录，区分原生、引入、培养株和误鉴',
      '避免释放实验室或商业培养克隆，跨实验室转移时记录来源并控制伴生生物',
      '报告生态毒理试验的克隆、龄期、温度、水质和暴露设计，并以多物种及现场证据校验外推',
      '补足东亚、北美与非洲的系统地理和种群监测，推动 IUCN 全球评估',
    ],
    metrics: {
      adultLengthCm: [0.22, 0.6],
    },
    featuredStats: [
      {
        key: 'adult-length',
        label: '成体体长',
        value: '约 2.2–6.0',
        unit: '毫米',
        note: '雌性约 2.9 至 6.0 毫米，雄性约 2.2 至 3.5 毫米；挪威区域鉴定资料。',
      },
      {
        key: 'maturity-at-20c',
        label: '20℃培养至性成熟',
        value: '6–8',
        unit: '天',
        note: 'HJ 1456—2026 的标准培养背景，不是所有野外种群的固定年龄。',
      },
      {
        key: 'resting-eggs',
        label: '每个卵鞍的休眠卵',
        value: '通常 2',
        unit: '枚',
        note: '卵鞍也可能为空或只有一枚；休眠卵与卵鞍不是同一个结构。',
      },
      {
        key: 'standard-tests',
        label: '标准急性 / 繁殖试验',
        value: '48 / 21',
        unit: '小时 / 天',
        note: 'OECD TG 202 的急性活动抑制与 TG 211 的繁殖试验周期。',
      },
    ],
    media: {
      image: './images/species/large-water-flea/01-shallow-pond-portrait.webp',
      alt: '浅绿色淡水中，一只完整透明的大型溞位于画面右侧，第二触角、背侧育儿室轮廓和尾刺可见，左侧保留深色开放水域',
      focalPoint: { x: 0.66, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image: './images/species/large-water-flea/02-lateral-morphology.webp',
          alt: '蓝灰色显微视野中，一只完整大型溞以侧面展示复眼、分枝第二触角、透明背甲、内部胸肢、弯曲消化道和尾刺',
          title: '透明背甲里的侧面结构',
          caption:
            'AI 生成形态重建；画面不能确认物种、性别、年龄或体长，也不能核验诊断刚毛、胸肢细节和背甲微结构。',
          focalPoint: { x: 0.52, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/large-water-flea/03-filter-feeding-algae.webp',
          alt: '透明大型溞周围散布绿色单细胞藻类，腹侧胸肢附近颗粒较集中，消化道呈淡绿褐色',
          title: '胸肢驱动的悬浮滤食',
          caption:
            'AI 生成滤食机制重建；画面不能测量清滤率、颗粒选择、食物质量、摄取速度或野外食谱比例。',
          focalPoint: { x: 0.56, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/large-water-flea/04-parthenogenetic-brood.webp',
          alt: '深橄榄蓝显微视野中，一只完整雌性大型溞的背侧育儿室内排列着一组彼此分开的圆形胚胎',
          title: '背侧育儿室里的孤雌胚胎',
          caption:
            'AI 生成发育重建；画面不能证明固定窝卵数、胚胎龄期、发育时长、克隆身份、温度反应或野外繁殖率。',
          focalPoint: { x: 0.55, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/large-water-flea/05-dark-ephippium.webp',
          alt: '琥珀灰色显微视野中，一只完整大型溞的背侧背甲带有深色鞍形卵鞍，内部隐约可见两个椭圆轮廓',
          title: '加厚变深的卵鞍',
          caption:
            'AI 生成卵鞍重建；画面不能证明每个卵鞍都含两枚休眠卵，也不能确定有性来源、休眠时长、孵化线索或存活率。',
          focalPoint: { x: 0.53, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/large-water-flea/06-ecotoxicology-test-vessels.webp',
          alt: '整洁实验台上排列装有无色清水的小型玻璃试验容器，前景宽口玻璃吸管靠近容器，玻璃内可辨一只放大的溞形轮廓',
          title: '生态毒理试验的容器情景',
          caption:
            'AI 生成实验设置重建；画面不代表 OECD 或 HJ 合规试验，不能确认化学物、浓度、时长、动物数、活动抑制、繁殖结果或 EC50。',
          focalPoint: { x: 0.58, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: DAPHNIA_MAGNA_SOURCES,
    featured: true,
    publishedAt: DAPHNIA_MAGNA_CONTENT_DATE,
    updatedAt: DAPHNIA_MAGNA_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
