import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const BELCHERS_LANCELET_SOURCE_DATE = '2026-08-27' as const;

const BELCHERS_LANCELET_CONTENT_DATE = '2026-08-27' as const;

const BELCHERS_LANCELET_SOURCES = [
  {
    title: 'WoRMS — Branchiostoma belcheri (Gray, 1847), AphiaID 214516',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=214516',
    kind: 'taxonomy',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Catalogue of Life — Branchiostoma belcheri, taxon N6RK',
    url: 'https://www.catalogueoflife.org/data/taxon/N6RK',
    kind: 'taxonomy',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'ITIS — Branchiostoma belcheri, TSN 159685',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=159685',
    kind: 'taxonomy',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Gray 1847 — Description of a new species of Amphioxus from Borneo',
    url: 'https://doi.org/10.1080/037454809495995',
    kind: 'taxonomy',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局、农业农村部 — 国家重点保护野生动物名录（2021）',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search — Branchiostoma belcheri（核验日无物种评估结果）',
    url: 'https://www.iucnredlist.org/search?query=Branchiostoma%20belcheri&searchType=species',
    kind: 'conservation',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Xu et al. 2005 — Morphological and 12S rRNA gene comparison of two Branchiostoma species in Xiamen waters',
    url: 'https://doi.org/10.1002/jez.b.21036',
    kind: 'taxonomy',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2006 — Branchiostoma japonicum and B. belcheri are distinct lancelets in Xiamen waters',
    url: 'https://doi.org/10.2108/zsj.23.573',
    kind: 'taxonomy',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Zhong et al. 2009 — Complete mitochondrial genomes defining two distinct lancelet species in the West Pacific Ocean',
    url: 'https://doi.org/10.1080/17451000802430817',
    kind: 'taxonomy',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Lin et al. 2014 — Sediment, depth, temperature and currents shaping NW Pacific lancelet biogeography',
    url: 'https://doi.org/10.1111/maec.12183',
    kind: 'distribution',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Au et al. 2023 — Spatial distribution, abundance, seasonality and environmental relationship of amphioxus in Hong Kong waters',
    url: 'https://doi.org/10.1016/j.rsma.2022.102726',
    kind: 'distribution',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Chen et al. 2008 — Growth, secondary production and gonad development of two co-existing amphioxus species in Hong Kong',
    url: 'https://doi.org/10.1016/j.jembe.2007.12.028',
    kind: 'ecology',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Chen et al. 2008 — The diet of amphioxus in subtropical Hong Kong as indicated by fatty acid and stable isotopic analyses',
    url: 'https://doi.org/10.1017/S0025315408001951',
    kind: 'ecology',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Low et al. 2016 — Branchiostoma belcheri records from Singapore',
    url: 'https://lkcnhm.nus.edu.sg/app/uploads/2017/04/sbr2016-126-128.pdf',
    kind: 'distribution',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Bertrand et al. 2021 — The Ontology of the Amphioxus Anatomy and Life Cycle',
    url: 'https://doi.org/10.3389/fcell.2021.668025',
    kind: 'general',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Kaneto & Wada 2011 — Regeneration of amphioxus oral cirri and its skeletal rods',
    url: 'https://doi.org/10.1002/jez.b.21411',
    kind: 'general',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'He et al. 2018 — Phagocytic intracellular digestion in amphioxus',
    url: 'https://doi.org/10.1098/rspb.2018.0438',
    kind: 'ecology',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Li et al. 2013 — Year-Round Reproduction and Induced Spawning of Chinese Amphioxus',
    url: 'https://doi.org/10.1371/journal.pone.0075461',
    kind: 'ecology',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Huang et al. 2014 — Decelerated genome evolution in modern vertebrates revealed by analysis of multiple lancelet genomes',
    url: 'https://doi.org/10.1038/ncomms6896',
    kind: 'general',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Chen et al. 2020 — Effects of sediment fining on benthic macrofaunal community in subtidal amphioxus habitats in Xiamen',
    url: 'https://www.sciengine.com/parse/pdf/0029-814X/DD1ECB14B33447B4ACEA074D70E0F4DB.pdf?attname=EFFECTS+OF+SEDIMENT+FINING+ON+BENTHIC+MACROFAUNAL+COMMUNITY+IN+SUBTIDAL+AMPHIOXUS+HABITATS+IN+XIAMEN.pdf',
    kind: 'conservation',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-branchiostoma-belcheri',
    slug: 'belchers-lancelet',
    names: {
      zh: '厦门文昌鱼',
      en: "Belcher's Lancelet",
      aliases: ['文昌鱼', '白氏鳃口文昌鱼', '白氏文昌鱼', 'Chinese Lancelet'],
    },
    scientificName: 'Branchiostoma belcheri',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Leptocardii', '文昌鱼纲'),
      taxon('Amphioxiformes', '文昌鱼目'),
      taxon('Branchiostomatidae', '文昌鱼科'),
      taxon('Branchiostoma', '鳃口文昌鱼属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['亚洲'],
      regions: [
        '南海北部',
        '台湾海峡',
        '香港东部水域',
        '厦门湾',
        '婆罗洲西北岸',
        '新加坡海峡',
      ],
      countries: ['中国', '马来西亚', '新加坡'],
      range:
        '现代形态或分子资料确认厦门、茂名或湛江、香港、台湾北部、台湾浅滩和新加坡记录，模式产地位于婆罗洲。日本与青岛旧称 Branchiostoma belcheri 的材料多归入 B. japonicum；印度至西太平洋其他历史记录须逐点重鉴定后再加入确定国家。',
      center: { lat: 21.5, lng: 113.8 },
    },
    habitats: [
      {
        name: '洁净浅海砂底',
        realm: 'marine',
        description:
          '底栖期埋在有持续水交换、含氧良好、低有机质的细砂至粗砂中，只让口笠接触近底水流；粒径和水动力共同决定适生性。',
        isPrimary: true,
      },
      {
        name: '粗砂、碎贝壳陆架内侧海床',
        realm: 'marine',
        description:
          '新加坡约 32 至 33 米记录来自粗砂、碎贝壳和低粉砂底质；这是两个标本的采集环境，不代表全种深度上限。',
      },
      {
        name: '近岸浮游发育水层',
        realm: 'marine',
        description:
          '胚胎和浮游幼体先在水层中生活，变态后进入砂底；水层是生活史阶段生境，不代表成体长期远洋生活。',
      },
    ],
    measurements: {
      length: {
        min: 39.3,
        max: 57.2,
        unit: 'mm',
        note:
          '厦门 100 只经形态鉴定的 B. belcheri 样本范围，平均 47.63 ± 4.73 毫米；不是全种成年范围或绝对最大体长',
      },
    },
    diet: {
      types: ['filter-feeder', 'detritivore'],
      foods: [
        '微生物与细菌',
        '微型浮游生物',
        '微藻与甲藻',
        '小型浮游动物',
        '悬浮有机碎屑',
      ],
      description:
        '口笠触手先筛去大颗粒，轮器和咽部纤毛维持水流，内柱黏液捕获微小悬浮颗粒并送入消化道。脂肪酸与稳定同位素支持微生物、微型浮游生物、微藻、小型浮游动物和碎屑共同供能，但不提供固定食谱比例。',
    },
    activity: [
      '沙中埋栖',
      '露出口笠滤食',
      '短距离波状游泳',
      '体外受精',
      '浮游幼体',
      '变态后底栖',
    ],
    tags: [
      '头索动物',
      '海洋底栖滤食者',
      '国家二级保护动物（仅限野外种群）',
      'IUCN 未评估',
      '演化发育模式动物',
      '沙质海床',
    ],
    summary:
      '一种半透明的海洋头索动物，靠贯穿身体的背索和人字形肌节运动，常半埋在洁净砂底滤食；中国将野外种群列为国家二级保护动物。',
    description:
      '厦门文昌鱼属于头索动物，不是鱼类或脊椎动物。它没有真正头颅、脊柱、颌、鳞片、鳃盖和成对鳍，终生保留的背索延伸到吻端，约 64 个人字形肌节透过半透明体壁可见。口笠触手挡住大颗粒，内部轮器协助水流，咽鳃裂形成滤水通路，内柱黏液捕获微藻、微生物和碎屑，肝盲囊参与胞外与胞内消化。成体多埋在低有机质砂底，只露前端滤食；配子在海水中体外受精，浮游幼体变态后转为底栖。厦门文昌鱼与青岛、日本旧资料中的 B. japonicum 必须分开鉴定。IUCN 尚无全球评估；中国 2021 年名录将其列为国家二级保护野生动物，仅限野外种群。',
    storySections: [
      {
        key: 'notochord-not-vertebrae',
        label: '分类与身体',
        title: '终生保留背索的头索动物',
        body: '厦门文昌鱼是一种头索动物。它没有头颅、颌、脊椎和成对鳍，终生保留的背索从吻端贯穿身体，体侧肌节沿这根弹性轴线逐段收缩，让半透明身体产生侧向波。',
      },
      {
        key: 'oral-hood-filter',
        label: '滤食结构',
        title: '口笠粗筛，黏液捕获小颗粒',
        body: '口笠触手先把大颗粒挡在外面，轮器则藏在口腔前庭内推动水流。小颗粒进入咽部后被内柱黏液捕获，纤毛再把食物送进消化道，轮器位于口腔前庭内部。',
      },
      {
        key: 'buried-filter-feeder',
        label: '砂底生境',
        title: '在洁净、富氧砂底中埋栖',
        body: '底栖个体把身体埋进低有机质砂底，只留下前端迎着水流。洁净粒隙和持续水交换同时带来氧和食物；泥化、压实或水流改变会让一片看似普通的沙失去功能。',
      },
      {
        key: 'two-lancelet-names',
        label: '物种边界',
        title: '两种文昌鱼曾共用一个名字',
        body: '厦门水域的两种文昌鱼外形相近：本种肛前鳍室为 80 至 103 个，B. japonicum 为 48 至 64 个，线粒体序列也清楚分开。青岛与日本旧称 B. belcheri 的资料多属于 B. japonicum，旧论文中的数字必须先确认物种身份。',
      },
      {
        key: 'planktonic-to-benthic',
        label: '繁殖与发育',
        title: '浮游幼体落向砂底',
        body: '卵和精子在海水中相遇，胚胎与幼体先随水层生活，变态后才进入砂底。香港的 6 至 7 月和厦门的 6 至 9 月都是局地繁殖窗口；实验室全年产卵说明可塑性，不是野外日历。',
      },
      {
        key: 'protect-moving-sand',
        label: '保护与监测',
        title: '保护砂床、水流和野外种群',
        body: '国家二级保护约束的是野外种群，真正的保护对象还包括粒径、水流和低有机质共同维持的砂床。固定站位监测、物种级鉴定和工程避让比一个脱离采样背景的总数更能判断变化。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1847 年的命名与婆罗洲模式产地',
        body: '厦门文昌鱼的科学命名记录署名为 Gray，年份为 1847 年，现用学名为 Branchiostoma belcheri，模式产地在婆罗洲。中文名包含“厦门”，其自然范围却还包括其他经确认地点。厦门水域后来发现两个近似物种，青岛和日本旧称 B. belcheri 的材料多归入 B. japonicum。',
      },
    ],
    keyFacts: [
      '厦门文昌鱼是头索动物，不是鱼类；它没有真正头颅、脊柱、颌、鳞片、鳃盖或成对鳍。',
      '终生保留的背索延伸到吻端，厦门 100 只样本有 63 至 66 个肌节。',
      '口笠触手是外部粗筛，轮器是口腔前庭内部纤毛褶，内柱黏液负责捕获微小食物。',
      '肝盲囊参与消化并能由上皮吞噬藻细胞，不宜直接称为原始肝脏。',
      '真种厦门样本的肛前鳍室为 80 至 103 个；青岛和日本旧名记录多属于 B. japonicum。',
      '胚胎和幼体先在水层生活，变态后转入砂底埋栖。',
      'IUCN 尚无全球评估；中国把本种列为国家二级保护野生动物，仅限野外种群。',
    ],
    threats: [
      '围填海、航道疏浚、采砂和海底工程移除、压实砂底或改变近底水流',
      '拖网、锚泊和缆线施工反复扰动埋栖个体及底质',
      '悬浮泥沙沉降与底质细化压缩洁净砂底',
      '陆源污染、富营养化、低氧和有机质累积降低栖息质量',
      '历史捕捞、教学或商品采集在局部高密度斑块集中移除个体',
      '斑块化分布使局部砂坝和浅滩改变影响补充',
      '与 B. japonicum 的旧记录混淆削弱趋势判断和保护评估',
    ],
    conservationActions: [
      '执行国家二级保护规定，并在执法和展示中保留仅限野外种群的法律边界',
      '保护洁净砂底、近底水流和相邻幼体补充区的连续组合',
      '在疏浚、采砂、围填海、底拖、锚泊和缆线选址中避让已确认栖息斑块',
      '控制陆源营养盐、有机物和悬浮泥沙，监测底质粒径与低氧',
      '以统一抓斗面积、筛网、季节和重复站位开展长期密度监测',
      '结合形态和物种诊断 DNA，分别报告 B. belcheri 与 B. japonicum',
      '保存凭证标本、组织、坐标精度、采样努力和鉴定者信息',
      '把圈养繁育用于研究和补充，不以此替代野外砂底保护',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'xiamen-sample-max-length',
        label: '厦门样本最大体长',
        value: '57.2',
        unit: '毫米',
        note: '100 只经形态鉴定样本中的最大值，不是物种绝对上限',
      },
      {
        key: 'preanal-fin-chambers',
        label: '肛前鳍室',
        value: '80 至 103',
        unit: '个',
        note: '厦门 100 只 B. belcheri 的鉴别范围，不是肌节数',
      },
      {
        key: 'pak-lap-wan-density',
        label: '香港单点密度',
        value: '423.8 ± 111.1',
        unit: '只/平方米',
        note: '2005 至 2006 年 Pak Lap Wan 一站，不是全球平均',
      },
      {
        key: 'reference-haplotype-assembly',
        label: '参考单倍型组装',
        value: '426',
        unit: 'Mb',
        note: '2014 年一只厦门雄体的主参考组装，不是固定种级基因组大小',
      },
    ],
    media: {
      image: './images/species/belchers-lancelet/01-sandy-seabed-cover.webp',
      alt: '洁净浅海粗砂上方，一只完整半透明厦门文昌鱼露出人字形肌节和口笠触手',
      focalPoint: { x: 0.68, y: 0.61 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/belchers-lancelet/02-translucent-body-field-marks.webp',
          alt: '一只厦门文昌鱼的侧面全身，口笠触手、人字形肌节、连续浅色轴线和正中鳍褶清楚可见',
          title: '没有脊柱的脊索动物',
          caption:
            '浅色轴线表现延伸到吻端的背索，肌节呈人字形，身体没有鱼类眼、颌、鳞片或成对鳍；画面不保证精确显示全部肌节或鳍室数量。',
          focalPoint: { x: 0.53, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image: './images/species/belchers-lancelet/03-coarse-sand-habitat.webp',
          alt: '开阔浅海粗砂和细碎贝壳海床上，只有一只小型厦门文昌鱼贴近底部',
          title: '水流维持的洁净砂底',
          caption:
            '低有机质砂底和持续水交换共同维持滤食生境；这是概括性重建，不代表已确认站位、深度或种群密度。',
          focalPoint: { x: 0.68, y: 0.76 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image: './images/species/belchers-lancelet/04-buried-filter-feeding.webp',
          alt: '一只厦门文昌鱼的大部分身体埋入粗砂，只让带口笠触手的前端迎向水流',
          title: '半埋在砂中滤食',
          caption:
            '口笠触手拦截过大颗粒，轮器位于口腔前庭内部；画面不显示地下身体、食物颗粒或一次真实摄食结果。',
          focalPoint: { x: 0.72, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/belchers-lancelet/05-night-swimming-emergence.webp',
          alt: '蓝色昏暗海水中，一只完整厦门文昌鱼在粗砂上方呈柔和侧向波动姿态',
          title: '背索与肌节驱动的短距离游泳',
          caption:
            '画面用暮色重建一次离砂后的波状移动，不据此判断昼夜节律，也不代表迁徙、集群或繁殖行为。',
          focalPoint: { x: 0.55, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/belchers-lancelet/06-noninvasive-sediment-survey.webp',
          alt: '一只厦门文昌鱼位于粗砂前景，远处一名潜水调查员在方框旁记录底质，两者没有接触',
          title: '不接触的底质调查',
          caption:
            '调查场景强调底质与采样努力记录；画面不代表真实人员、站位、规程、捕获数或种群结果。',
          focalPoint: { x: 0.69, y: 0.78 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...BELCHERS_LANCELET_SOURCES,
      {
        title: 'GBIF: Branchiostoma belcheri (Gray, 1847) nomenclatural record',
        url: 'https://www.gbif.org/species/5227667',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: BELCHERS_LANCELET_CONTENT_DATE,
    updatedAt: BELCHERS_LANCELET_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
