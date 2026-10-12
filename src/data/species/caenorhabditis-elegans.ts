import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const CAENORHABDITIS_ELEGANS_SOURCE_DATE = '2026-08-31' as const;

const CAENORHABDITIS_ELEGANS_CONTENT_DATE = '2026-08-31' as const;

const CAENORHABDITIS_ELEGANS_SOURCES = [
  {
    title: 'Catalogue of Life via GBIF — Caenorhabditis elegans',
    url: 'https://www.gbif.org/taxon/87THG',
    kind: 'taxonomy',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'ITIS — Caenorhabditis elegans (TSN 63332)',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=63332',
    kind: 'taxonomy',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'NCBI Taxonomy — Caenorhabditis elegans (taxid 6239)',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=6239&lvl=0',
    kind: 'taxonomy',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'SAMR DB35/T 2132-2023 — 实验用秀丽隐杆线虫饲育技术',
    url: 'https://std.samr.gov.cn/db/search/stdDBDetailed?id=0BBEE3C38FD9D900E06397BE0A0A632E',
    kind: 'taxonomy',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'WormBook — A Transparent Window into Biology',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK299460/',
    kind: 'general',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'WormAtlas — Introduction to C. elegans hermaphrodite anatomy',
    url: 'https://www.wormatlas.org/hermaphrodite/introduction/mainframe.htm',
    kind: 'general',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'WormAtlas — The C. elegans pharynx',
    url: 'https://www.wormatlas.org/hermaphrodite/pharynx/mainframe.htm',
    kind: 'ecology',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'Brenner 1974 — The genetics of Caenorhabditis elegans',
    url: 'https://doi.org/10.1093/genetics/77.1.71',
    kind: 'general',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'Byerly et al. 1976 — Wild-type growth and reproduction through the life cycle',
    url: 'https://doi.org/10.1016/0012-1606(76)90119-6',
    kind: 'general',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'Cassada & Russell 1975 — The dauer larva, a post-embryonic developmental variant',
    url: 'https://doi.org/10.1016/0012-1606(75)90109-8',
    kind: 'ecology',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'Sulston & Horvitz 1977 — Post-embryonic cell lineages',
    url: 'https://doi.org/10.1016/0012-1606(77)90158-0',
    kind: 'general',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'Sulston et al. 1983 — The embryonic cell lineage of C. elegans',
    url: 'https://doi.org/10.1016/0012-1606(83)90201-4',
    kind: 'general',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'White et al. 1986 — The structure of the C. elegans nervous system',
    url: 'https://doi.org/10.1098/rstb.1986.0056',
    kind: 'general',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'Cook et al. 2019 — Whole-animal connectomes of both C. elegans sexes',
    url: 'https://doi.org/10.1038/s41586-019-1352-7',
    kind: 'general',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'C. elegans Sequencing Consortium 1998 — Genome sequence of C. elegans',
    url: 'https://doi.org/10.1126/science.282.5396.2012',
    kind: 'general',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'Félix & Duveau 2012 — Population dynamics in rotting fruits and stems',
    url: 'https://doi.org/10.1186/1741-7007-10-59',
    kind: 'distribution',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'CaeNDR — C. elegans natural-diversity data release',
    url: 'https://caendr.org/data/data-release/c-elegans/latest',
    kind: 'distribution',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'Viñuela et al. 2022 — Species-wide wild-strain distribution and expression',
    url: 'https://doi.org/10.1038/s41467-022-31208-4',
    kind: 'distribution',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'Schulenburg & Félix 2017 — The natural biotic environment of C. elegans',
    url: 'https://doi.org/10.1534/genetics.116.195511',
    kind: 'ecology',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'Samuel et al. 2016 — C. elegans responses to bacteria from natural habitats',
    url: 'https://doi.org/10.1073/pnas.1607183113',
    kind: 'ecology',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'Lee et al. 2017 — Natural variation in dauer phoretic behavior',
    url: 'https://doi.org/10.1038/s41467-017-00386-x',
    kind: 'ecology',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search — Caenorhabditis elegans, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Caenorhabditis%20elegans&searchType=species',
    kind: 'conservation',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List FAQ — species absent from the Red List are Not Evaluated',
    url: 'https://nrl.iucnredlist.org/about/faqs',
    kind: 'conservation',
    accessedAt: CAENORHABDITIS_ELEGANS_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-caenorhabditis-elegans',
    slug: 'caenorhabditis-elegans',
    names: {
      zh: '秀丽隐杆线虫',
      en: 'C. elegans',
      aliases: ['秀丽线虫', 'Rhabditis elegans'],
    },
    scientificName: 'Caenorhabditis elegans',
    taxonomy: animalTaxonomy(
      taxon('Nematoda', '线虫动物门'),
      taxon('Chromadorea', '色矛纲'),
      taxon('Rhabditida', '小杆目'),
      taxon('Rhabditidae', '小杆科'),
      taxon('Caenorhabditis', '隐杆线虫属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['欧洲', '亚洲', '北美洲', '南美洲', '非洲', '大洋洲'],
      regions: [
        '温带地区的腐烂果实与茎秆微环境',
        '花园堆肥与其他微生物丰富的腐殖基质',
        '由自然分离株记录的零散局地点位',
      ],
      countries: [],
      range:
        '自然分离记录散布于多个大陆，温带采样点较多。繁殖种群集中在短暂存在、微生物丰富的腐烂果实、茎秆和堆肥中；相邻基质也可能一个有虫、一个没有。全球分布图受采样强度和近似种鉴定影响，不能把实验室中的普遍使用写成野外处处常见。',
    },
    habitats: [
      {
        name: '微生物丰富的腐烂果实与茎秆',
        realm: 'terrestrial',
        description:
          '自然繁殖种群常见于湿润、正在分解的苹果、梨和植物茎秆等斑块，利用其中快速变化的细菌群落。线虫在这种局部基质中增殖，不等于均匀生活在普通矿质土壤里。',
        isPrimary: true,
      },
      {
        name: '花园堆肥与腐殖基质',
        realm: 'terrestrial',
        description:
          '人工环境中的堆肥、果园落果和富含腐烂植物的花园基质可提供食物与水膜。水分、温度、微生物组成和基质年龄共同改变局地种群状态。',
      },
      {
        name: '无脊椎动物表面的短暂运输阶段',
        realm: 'terrestrial',
        description:
          '耐受型 dauer 幼虫可抬起前半身摆动（nictation），并与等足类等活动动物形成携播关系。载体表面是短暂停留与迁移机会，不是成虫取食繁殖的固定栖息地。',
      },
    ],
    measurements: {
      length: {
        typical: 1,
        unit: 'mm',
        note: '成体雌雄同体的典型体长；雄虫和幼虫更短，体长还受年龄、品系、营养和姿势影响。',
      },
    },
    diet: {
      types: ['bacterivore'],
      foods: [
        '腐烂植物基质中的自然细菌群落',
        '实验培养常用的大肠杆菌 OP50',
      ],
      description:
        '秀丽隐杆线虫以细菌为食。头端口腔接入肌肉质咽，咽部收缩把细菌悬液吸入，末端咽球中的研磨器再破碎细胞。野外食物来自多种自然微生物；实验室常铺的大肠杆菌 OP50 是标准化饲料，不能代替自然食谱。',
    },
    activity: [
      '体壁运动肌沿纵向排列，靠背腹两侧交替收缩形成浅波状弯曲，在水膜或琼脂表面前进',
      '在细菌斑块边缘改变转向与停留，用肌肉质咽持续摄入微小细菌',
      '条件适宜时依次经历 L1、L2、L3、L4 四个幼体阶段与四次蜕皮',
      '食物不足、拥挤等线索可把发育引向不取食的 dauer 幼虫阶段',
      'dauer 幼虫可用尾端支撑并抬起前半身做 nictation，增加接触活动载体的机会',
    ],
    tags: [
      '线虫动物门',
      '自由生活线虫',
      '食细菌动物',
      '腐烂植物微环境',
      '透明身体',
      '无分节',
      '雌雄同体',
      '雄虫',
      '四个幼体阶段',
      'dauer 幼虫',
      'nictation',
      '模式动物',
      '细胞谱系',
      '神经连接组',
      'N2 品系边界',
      'IUCN 未评估',
    ],
    summary:
      '秀丽隐杆线虫在腐烂果实等富菌斑块中繁殖，成体约一毫米长。透明身体便于研究细胞发育，食物不足时则可进入停止取食的耐受幼体阶段。',
    description:
      '秀丽隐杆线虫是一种自由生活、以细菌为食的线虫，成体约一毫米长。身体呈透明的圆柱形，外覆角质层，没有环节、附肢或眼睛；咽、肠道、生殖腺和胚胎可在活体显微观察中辨认。自然繁殖种群主要利用腐烂果实、茎秆和堆肥中短暂出现的微生物资源，并非均匀散布于所有土壤。物种有 XX 雌雄同体和 XO 雄虫；雌雄同体先形成精子再形成卵母细胞，可以自体受精，也能与雄虫交配。标准实验条件下发育快，食物不足或拥挤时可进入不取食、耐受性较强的 dauer 幼虫阶段。成年雌雄同体的经典解剖记录为 959 个体细胞核，其中 302 个属于神经元；这些数字不能套给雄虫、胚胎或所有实验处理。实验室 N2 品系让遗传、发育、细胞死亡和神经连接研究获得统一参照，却不能替代野外遗传多样性与生态调查。IUCN Red List 当前没有本种全球评估；NE 表示未评估，不表示自然种群没有压力。',
    storySections: [
      {
        key: 'rotting-plant-microhabitat',
        label: '腐烂植物里的斑块',
        title: '繁殖种群集中在短暂的腐烂植物斑块',
        body: '野外调查在腐烂果实、茎秆和堆肥中找到正在繁殖的秀丽隐杆线虫。分解过程带来丰富而变化迅速的细菌，也让栖息斑块只有有限寿命。相邻果实的虫量和发育阶段可能差别很大，因此“土壤线虫”只是粗略称呼，不能描述它依赖微生物丰富腐烂基质的尺度。',
      },
      {
        key: 'undulation-and-pharyngeal-feeding',
        label: '弯曲前进与咽泵',
        title: '纵肌推动身体摆动，咽部把细菌送入肠道',
        body: '线虫体壁肌主要沿身体纵向排列，背腹两侧交替收缩，让身体在薄水膜或琼脂上形成波状弯曲。头端的肌肉质咽负责摄食，咽部末端研磨器处理吸入的细菌。实验室 OP50 菌苔便于重复培养，却只代表一种人工饲料安排；自然菌群既包含营养来源，也可能包含病原与有害微生物。',
      },
      {
        key: 'hermaphrodite-and-male',
        label: '两种性别',
        title: '雌雄同体可以自体受精，雄虫把遗传组合带入下一代',
        body: 'XX 个体发育为雌雄同体，生殖腺先产生有限数量的精子，随后转为产生卵母细胞；储存精子可完成自体受精。XO 雄虫体形较细短、尾端特化，可与雌雄同体交配。标准培养中单只自交雌雄同体常产生约 300 个后代，但品系、温度、食物和交配都会改变数量，不能把 300 当作野外固定产仔数。',
      },
      {
        key: 'four-larval-stages-and-dauer',
        label: '发育岔路',
        title: '四次蜕皮通向成虫，dauer 则暂停取食与繁殖',
        body: '正常路线依次经过 L1、L2、L3、L4 四个幼体阶段。20°C、食物充足的标准培养中，从受精卵到可育成体约需 3.5 天，温度和营养会改变时程。食物短缺、拥挤和温度等信号可在早期幼体阶段推动 耐受幼体（dauer）的形成；dauer 不取食，身体较细，能抬起前半身摆动 并借活动无脊椎动物迁移。静止姿态不能单独证明某条幼虫已经进入 dauer。',
      },
      {
        key: 'cell-lineage-and-connectome',
        label: '从细胞到连接组',
        title: '透明身体便于追踪细胞与神经连接',
        body: '经典 N2 雌雄同体发育研究记录 1,090 个体细胞核，其中 131 个按固定谱系发生程序性死亡，成年保留 959 个体细胞核。成年雌雄同体的 302 个神经元又成为连续切片与电子显微重构的基础。细胞核数、神经元数和连接图都对应明确性别、阶段与数据口径，不能概括成“整种只有 959 个细胞”。',
      },
      {
        key: 'model-strain-versus-wild-species',
        label: '模式品系边界',
        title: 'N2 实验品系与自然分离株各有差异',
        body: 'Brenner 建立的遗传体系、冻结保存、完整基因组和突变资源让实验室能复现许多结果。N2 与自然分离株在行为、生殖、耐受和基因组上存在差异，其中一部分可能与长期培养适应有关。实验室寿命、发育速度、菌食偏好和雄虫比例都依赖品系与条件；用自然分离株、微生物群落和现场元数据对照，才能把模式生物研究接回物种生态。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: 'Maupas 的描述与后来的属名变动',
        body: 'Maupas 于 1899 年的文献记录了 Rhabditis elegans，1900 年又发表相关描述。后来它改归隐杆线虫属，成为 Caenorhabditis elegans；Catalogue of Life 采用 (Maupas, 1899) Dougherty, 1953，NCBI 当前名称仍写 (Maupas, 1900)。Brenner 建立的实验遗传体系和 1998 年完整基因组，使这个自然界的食菌线虫成为模式动物。',
      },
    ],
    keyFacts: [
      '当前接受的二名法为 Caenorhabditis elegans，原始组合为 Rhabditis elegans；Catalogue of Life 与 NCBI 对命名年份采用不同口径。',
      '固定六阶分类路径采用动物界、线虫动物门、色矛纲、小杆目、小杆科、隐杆线虫属。',
      '它是自由生活的食菌线虫，不是人体或家畜寄生虫。',
      '成体雌雄同体通常约长 1 毫米；雄虫和幼虫更短，培养条件和品系也会改变体长。',
      '透明身体呈圆柱形且不分节，外覆角质层。',
      '自然繁殖种群与微生物丰富的腐烂果实、茎秆和堆肥斑块关系密切。',
      '肌肉质咽把细菌送入肠道，实验室 OP50 菌苔不能代表全部自然食物。',
      '体壁运动主要由纵向肌群驱动，背腹两侧交替收缩产生波状前进。',
      'XX 雌雄同体能够自体受精，也能接受 XO 雄虫的精子完成交配繁殖。',
      '正常发育包括 L1、L2、L3、L4 四个幼体阶段，每个阶段结束时蜕皮。',
      'dauer 是替代性的耐受幼体阶段，会停止取食；它不是固定出现在每一代的第五个普通龄期。',
      'dauer 的 nictation 增加接触等足类等载体的机会，单张竖立姿态不能证明已经发生运输。',
      '成年雌雄同体的经典记录是 959 个体细胞核和 302 个神经元，雄虫与其他阶段使用不同数字。',
      '1998 年发表的 C. elegans 基因组使它成为首个完成全基因组测序的多细胞动物。',
      'N2 品系及标准培养条件产生的数值不能直接升级为整个野外物种的常数。',
      'IUCN Red List 当前没有本种全球评估；NE 不代表无危、数量稳定或没有威胁。',
    ],
    threats: [
      'IUCN 尚未评估，自然种群的全球大小、趋势、世代结构和威胁排序均未知',
      '腐烂植物资源斑块短命且种群数量波动大，单次采样难以区分自然兴衰与长期变化',
      '全球采样存在地域、季节和基质偏差，近似种误鉴定也会扭曲分布与趋势判断',
    ],
    conservationActions: [
      '在腐烂果实、茎秆与堆肥的连续分解阶段重复采样，同时记录温度、水分、基质年龄和微生物组成',
      '为自然记录保存活体培养物、冷冻品系、DNA 样本和精确采集元数据，并用分子条形码复核物种',
      '比较 N2、多个自然分离株与自然微生物群落，标明品系、饲料、温度和培养代数',
      '扩展不同地区、季节和基质的标准化调查，把未检出与未采样分开记录',
      '积累跨地区可比的自然检出与丰度资料，为未来保护评估提供物种级证据',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'adult-length',
        label: '雌雄同体成体长度',
        value: '约 1',
        unit: '毫米',
        note: '成体雌雄同体的典型值；雄虫和幼虫更短。',
      },
      {
        key: 'larval-stages',
        label: '正常幼体阶段',
        value: '4',
        unit: '个',
        note: 'L1 至 L4；dauer 是替代发育路线，不是固定的第五龄期。',
      },
      {
        key: 'somatic-nuclei',
        label: '成体雌雄同体体细胞核',
        value: '959',
        unit: '个',
        note: '经典 N2 谱系口径；不能写成整个物种所有个体的总细胞数。',
      },
      {
        key: 'hermaphrodite-neurons',
        label: '成体雌雄同体神经元',
        value: '302',
        unit: '个',
        note: '雄虫神经系统的细胞数和连接不同。',
      },
    ],
    media: {
      image:
        './images/species/caenorhabditis-elegans/01-rotting-apple-habitat.webp',
      alt: '潮湿腐烂苹果组织的微生物薄膜上，一只完整透明的成年秀丽隐杆线虫呈浅 S 形伸展，咽、肠道和少量体内胚胎可见',
      focalPoint: { x: 0.58, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/caenorhabditis-elegans/02-transparent-hermaphrodite-dic.webp',
          alt: '浅灰色微分干涉显微视野中，一只完整透明的成年雌雄同体秀丽隐杆线虫横向弯曲，前咽、肠道、生殖腺和少量椭圆胚胎可见',
          title: '透明身体里的咽、肠道与生殖腺',
          caption:
            'AI生成原创 DIC 风格形态重建；画面帮助辨认透明身体中的大体结构，不能替代真实显微记录、比例尺、品系信息或组织标记。',
          focalPoint: { x: 0.5, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/caenorhabditis-elegans/03-pharyngeal-bacterial-feeding.webp',
          alt: '显微视野中一只完整秀丽隐杆线虫把前端伸到细颗粒菌苔边缘，透明头部内的细长咽腔与椭圆末端咽球清楚可见',
          title: '咽部在菌苔边缘摄食',
          caption:
            'AI生成原创摄食情景；静帧可显示咽部位置与细颗粒菌苔，不能测出泵动频率、摄入量、菌种身份或野外食谱比例。',
          focalPoint: { x: 0.4, y: 0.47 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/caenorhabditis-elegans/04-midbody-egg-laying.webp',
          alt: '浅色微分干涉显微视野中，一只完整怀卵雌雄同体秀丽隐杆线虫从腹侧中部阴门排出一枚椭圆卵，体内另有少量胚胎',
          title: '从身体中部排出一枚卵',
          caption:
            'AI生成原创产卵情景；单枚卵和一只成虫不能证明自体受精、亲缘关系、产卵速率、总后代数或培养条件。',
          focalPoint: { x: 0.53, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/caenorhabditis-elegans/05-dauer-nictation.webp',
          alt: '潮湿腐烂茎秆纤维上，一只完整细长的 dauer 幼虫只以尾端接触基质，前半身抬起并形成轻微弯曲',
          title: 'dauer 幼虫抬起身体等待接触',
          caption:
            'AI生成原创 nictation 情景；竖立姿态与 dauer 行为相符，却不能凭静帧确认发育阶段、停止取食、成功接触载体或已经发生迁移。',
          focalPoint: { x: 0.56, y: 0.49 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/caenorhabditis-elegans/06-agar-plate-observation.webp',
          alt: '无标识体视显微镜物镜下，一个装有透明琼脂的培养皿中，一只成年秀丽隐杆线虫与两只较小幼虫分开位于浅色菌苔上',
          title: '在琼脂培养皿中观察成虫与幼虫',
          caption:
            'AI生成原创实验观察情景；通用培养皿、菌苔和三只线虫不能确认 N2 品系、基因型、处理组、培养温度或任何实验结果。',
          focalPoint: { x: 0.53, y: 0.59 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...CAENORHABDITIS_ELEGANS_SOURCES,
      {
        title: 'WormBook: History of C. elegans research',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK453431/',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
      {
        title: 'NCBI Taxonomy: C. elegans nomenclature',
        url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=6239&mode=Info',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: CAENORHABDITIS_ELEGANS_CONTENT_DATE,
    updatedAt: CAENORHABDITIS_ELEGANS_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
