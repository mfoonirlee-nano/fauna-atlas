import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const SEVENTEEN_YEAR_CICADA_SOURCE_DATE = '2026-09-01' as const;

const SEVENTEEN_YEAR_CICADA_CONTENT_DATE = '2026-09-01' as const;

const SEVENTEEN_YEAR_CICADA_SOURCES = [
  {
    title: 'ITIS — Magicicada septendecim, TSN 847190',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=847190',
    kind: 'taxonomy',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'UConn Periodical Cicada Information Pages — Magicicada septendecim',
    url: 'https://cicadas.uconn.edu/species/m_septendecim/',
    kind: 'general',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'UConn Periodical Cicada Information Pages — General periodical cicada information',
    url: 'https://cicadas.uconn.edu/',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'UConn Periodical Cicada Information Pages — Behavior',
    url: 'https://cicadas.uconn.edu/behavior/',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'UConn Periodical Cicada Information Pages — Broods',
    url: 'https://cicadas.uconn.edu/broods/',
    kind: 'distribution',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Alexander & Moore 1962 — The evolutionary relationships of 17-year and 13-year cicadas, and three new species',
    url: 'https://deepblue.lib.umich.edu/items/858cf767-7c61-4baa-bd5a-5e09fcd59950',
    kind: 'taxonomy',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Maier 1982 — Observations on the Seventeen-Year Periodical Cicada, Magicicada septendecim',
    url: 'https://doi.org/10.1093/aesa/75.1.14',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Heath 1968 — Thermal synchronization of emergence in periodical “17-year” cicadas',
    url: 'https://doi.org/10.2307/2423537',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'Karban, Black & Weinbaum 2000 — How 17-year cicadas keep track of time',
    url: 'https://doi.org/10.1046/j.1461-0248.2000.00164.x',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Cooley & Marshall 2001 — Sexual signaling in periodical cicadas, Magicicada spp.',
    url: 'https://doi.org/10.1163/156853901753172674',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Du et al. 2019 — Mitochondrial genomics of three periodical cicada species groups',
    url: 'https://doi.org/10.1093/molbev/msz051',
    kind: 'distribution',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Hepler et al. 2023 — Do adult Magicicada feed? Molecular gut-content evidence',
    url: 'https://doi.org/10.1093/jisesa/iead082',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'IUCN Red List — Magicicada septendecim (1996 assessment under version 2.3)',
    url: 'https://doi.org/10.2305/IUCN.UK.1996.RLTS.T12691A3373584.en',
    kind: 'conservation',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'IUCN Red List version 2025-1 — Summary Statistics Table 7 category mapping',
    url: 'https://nc.iucnredlist.org/redlist/content/attachment_files/2025-1_RL_Table_7.pdf',
    kind: 'conservation',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'NatureServe Explorer — Magicicada septendecim (G4; last reviewed 1986)',
    url: 'https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.112782/Magicicada_septendecim',
    kind: 'conservation',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (effective 5 March 2026)',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'CITES — Checklist of Species',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-magicicada-septendecim',
    slug: 'seventeen-year-cicada',
    names: {
      zh: '十七年蝉',
      en: 'Seventeen-year Cicada',
      aliases: [
        '林奈十七年蝉',
        '法老蝉',
        'Pharaoh cicada',
        'Linnaeus’ 17-year cicada',
        '17-year locust',
      ],
    },
    scientificName: 'Magicicada septendecim',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Insecta', '昆虫纲'),
      taxon('Hemiptera', '半翅目'),
      taxon('Cicadidae', '蝉科'),
      taxon('Magicicada', '周期蝉属'),
    ),
    conservation: conservation('NT', 'unknown', 1996),
    distribution: {
      realms: ['terrestrial'],
      continents: ['北美洲'],
      regions: ['北美洲东部', '美国东部与中部的十七年周期群分布区'],
      countries: ['美国'],
      endemicTo: ['北美洲东部'],
      range:
        '可靠的核心分布位于美国中部和东部，UConn 的调查持续核实各地出现记录。历史资料中的加拿大记录仍需辨别。十二个十七年型出土批次使用 I 至 X、XIII 和 XIV 等罗马数字编号，这些编号表示出土时间安排。',
      center: { lat: 39.5, lng: -82.5 },
    },
    habitats: [
      {
        name: '北美洲东部落叶林与林缘',
        realm: 'terrestrial',
        description:
          '成虫在活木本植物上取食、鸣叫和产卵；雄虫合唱群常聚集在光照较好的高枝。林分组成、树龄与郁闭度的偏好缺少覆盖全分布区的物种级统一量化。',
        isPrimary: true,
      },
      {
        name: '木本宿主根区土壤',
        realm: 'terrestrial',
        description:
          '若虫在地下洞道中经历五个龄期并从根部取得木质部液体。根深、土深和活动范围会随地点、宿主及若虫阶段变化，不能用一张剖面图指定固定深度。',
      },
      {
        name: '果园、林带与有成熟树木的居住区',
        realm: 'terrestrial',
        description:
          'Brood II 的康涅狄格研究比较过苹果园和邻近森林，项目点位也覆盖人类改造景观；这类记录证明可利用相应生境，不代表果园是全种首选环境。',
      },
    ],
    measurements: {
      length: {
        min: 27,
        max: 33,
        unit: 'mm',
        note:
          'Alexander 与 Moore 1962 年物种鉴别表的头至腹端体长，不含超出腹端的翅；这是鉴别资料范围，不是所有成虫的硬下限、硬上限或图片测量。',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: ['若虫取食的木本植物根部木质部液体', '成虫取食的活木本枝条木质部液体'],
      description:
        'UConn 的周期蝉属资料记录若虫吸取根部液体，成虫也在多种落叶木本植物和灌木上取食。2023 年分子肠内容研究支持成虫摄入木质部液体；现有证据不能给出本种全生命周期的宿主清单、各树种比例或单只摄入量。',
    },
    activity: [
      '若虫期在地下持续约十七年并经历五个龄期',
      '同一周期群在出土季高度同步，但离群个体可提前或延后出现',
      '出土若虫常在日落后爬上植被完成终龄蜕皮',
      '雄虫成熟后在合唱群中鸣叫并穿插短距离飞行',
      '出土时刻、土温和活动峰随地点、天气与周期群而变',
    ],
    tags: [
      '十七年周期',
      '北美洲东部特有',
      '同步出土',
      '地下若虫',
      '木质部取食',
      '雄虫鼓膜器鸣叫',
      '雌虫振翅回应',
      '枝条产卵',
      '捕食者饱和',
      'IUCN近危旧评估',
    ],
    summary:
      '十七年蝉分布在美国中东部。若虫长期在地下吸取树根汁液，同一批个体通常相隔十七年集中出土，成虫用鸣声与振翅信号寻找配偶。',
    description:
      '十七年蝉有黑色身体、红眼和橙色翅脉，腹部下方带宽阔橙纹。若虫在地下经历五个龄期，靠树根木质部汁液生活；出土后爬上植物蜕皮，进入短暂的成虫阶段。成虫集群鸣叫、交配，雌体把卵产进细枝。十七年指通常的世代周期，实际还存在提前或推迟出土的个体。现有全球风险评估沿用 1996 年的旧记录，今天的种群情况仍需持续调查。',
    storySections: [
      {
        key: 'decim-identification',
        label: '分类与辨识',
        title: '用形态与鸣声辨认十七年蝉',
        body: 'ITIS 将 Magicicada septendecim 作为有效种，归入半翅目蝉科周期蝉属；“17-year locust”只是英语俗名，它不属于直翅目的蝗虫。UConn 以较大体型、腹面宽橙带、复眼后方至前翅基部的橙色区和近似“Pharaoh”的叫声短语辅助辨识。Alexander 与 Moore 的鉴别表给出头至腹端 27 至 33 毫米；这不含翅尖，也不是所有个体的硬范围。照片外形和人耳拟声不能单独完成种级鉴定，可靠记录还需腹面、胸侧、鸣声、地点与周期信息互证。',
      },
      {
        key: 'seventeen-year-underground-cycle',
        label: '地下十七年',
        title: '若虫的发育可能受树木季节信号影响',
        body: '周期蝉属若虫在地下经历五个龄期，以木本植物根部液体为食。Karban 等人改变承载若虫的宿主树季节循环并诱发提前变态，支持若虫利用宿主季节信号计年；实验没有找出感受器、信号分子或完整生理时钟。十七年是同一地区年级群的主周期，提前或延后一年乃至更多的 straggler 记录说明个体会偏离日程，因此档案不把它写成固定寿命或零误差倒计时。',
      },
      {
        key: 'synchronized-emergence-boundaries',
        label: '同步出土',
        title: '土壤温度与集中出土',
        body: 'Heath 的研究在约 20 厘米深处记录到土温达到约 17.8°C 时开始出土，这是特定研究中的观察值。Maier 对 1979 年康涅狄格 Brood II 的研究发现，出土多发生在日落附近，果园和森林的时间还有差异。温度、地形和微环境都会改变当地出土进程。',
      },
      {
        key: 'chorus-and-wing-flick-duet',
        label: '鸣声与回应',
        title: '鸣声与振翅共同完成求偶',
        body: '雄虫第一腹节两侧各有一枚有棱的鼓膜器，肌肉驱动膜片产生声脉冲，腹部空腔参与共鸣。成熟雄虫在高枝形成合唱群；decim 组雄虫常唱 1 至 3 个短语后短飞，接近有回应的雌虫时转入 CI、CII、CIII 求偶序列。具有交配意愿的雌虫会在雄鸣后的物种特定时间振翅，雄虫同时接收声学和视觉线索。“Pharaoh”只描述人耳听感。',
      },
      {
        key: 'twig-oviposition-and-hatching',
        label: '产卵与孵化',
        title: '卵留在细枝中，若虫孵出后入土',
        body: '交配后的雌虫用产卵器在活枝中切出一系列 Y 形卵室。UConn 的周期蝉属综述给出每室最多约 20 枚、一只雌虫最多约 600 枚和约 6 至 10 周孵化期；这些都是属级上限或概括，不能当成本种每只雌虫的固定产量和固定日程。初龄若虫孵化后落到地面、钻入土中并寻找细根。枝条照片不能确认卵数、胚龄、孵化率、树种适宜性或树体损伤程度。',
      },
      {
        key: 'broods-and-stale-assessment',
        label: '周期群与保护',
        title: '出土批次需要长期追踪',
        body: 'UConn 把 brood 定义为某地区按共同日程出土的记账单位，它不是物种、亚种或单一演化种群。2019 年研究表把 M. septendecim 记录于现存十七年周期群 I、X、XIII、XIV；周期群边界细碎，地图空白也可能只是无人核验。IUCN 1996 年 2.3 版 LR/nt 在现行汇总中并入 NT，但近三十年的评估年龄阻止我们推断当前趋势、成熟个体数或威胁强度。2026 年 CITES 附录未列名也不能补上这些数据。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年命名的周期蝉',
        body: '林奈在 1758 年正式命名十七年蝉，现用学名为 Magicicada septendecim。中文名中的“十七年”对应它通常的世代周期。研究者进一步用出土年份把各地种群编成批次，以跟踪下一次集中出土；批次编号与物种或亚种的分类名称用途不同。',
      },
    ],
    keyFacts: [
      '十七年蝉属于半翅目、蝉科和周期蝉属；旧资料中的“同翅目”等名称反映历史分类。',
      '成虫腹面有宽橙带，复眼后方至前翅基部带橙色；这些特征要与鸣声、地点和周期资料合并判断。',
      'Alexander 与 Moore 1962 年鉴别表记录头至腹端 27 至 33 毫米，不含翅尖，也不构成全种硬范围。',
      '“十七年”描述同一地点大多数个体的年级周期；提前或延后出土的 straggler 会偏离主日程。',
      '周期蝉属若虫在地下经历五个龄期并取食根部木质部液体，具体根深和宿主比例缺少本种全域数据。',
      '操纵宿主树季节循环可诱发提前变态，支持以宿主季节信号计年；完整感受与计时机制仍未知。',
      '约 20 厘米土深 17.8 摄氏度来自 Heath 的研究群体，不是所有地点和年份的硬出土阈值。',
      '康涅狄格 Brood II 观察到多数若虫在日落前后出土；这个地点结果不能规定全种统一夜间日程。',
      '雄虫以第一腹节的一对鼓膜器鸣叫，雌虫会按物种特定时序振翅回应。',
      'UConn 展示 CI、CII、CIII 三段求偶信号；“Pharaoh”只是人耳对叫声短语的拟声。',
      '每室最多约 20 枚卵、雌虫最多约 600 枚和 6 至 10 周孵化期均为周期蝉属概括，不是本种固定常数。',
      'brood 是地区加共同出土年份的记账单位，可包含多个物种，也可能含彼此分离的区域。',
      '2019 年汇总把本种列于 I、X、XIII、XIV 共十二个现存十七年周期群；这些编号不是十二个亚种。',
      'IUCN 1996 年 LR/nt 旧评估按现行汇总记作 NT，种群趋势仍记 unknown，档案不虚构成熟个体数。',
      '本种未见于 2026 年 3 月 5 日生效的 CITES 附录；未列名不等于无危或没有地方性保护需求。',
    ],
    threats: [
      '清除成熟木本植被和长期土壤扰动可能同时移除取食根系与地下年级群，物种级影响缺少跨周期量化',
      '道路、建设和林地破碎化可能切断局地出土斑块，1996 年评估后的范围变化尚未完成全球重评',
      '产卵枝条修剪、老树替换和出土季大面积施工可能削弱局地繁殖，影响取决于地点与周期群',
      '农药、土壤污染和宿主树管理可能接触若虫或成虫，现有资料不足以排列全分布区威胁强度',
      '周期群间隔十七年，缺少跨完整世代的标准化重复调查会掩盖局地衰退与离群出土',
      'IUCN 评估停留在 1996 年，当前成熟个体数、总体趋势和各威胁贡献均未知',
    ],
    conservationActions: [
      '保留已知出土点及其周边的成熟木本植被、根区土壤和更新树木，维持跨十七年的连续宿主条件',
      '在同一固定点按周期群日程重复记录出土孔、蜕皮壳、合唱与产卵枝，并同步记录未检出',
      '为新点位和离群出土保存腹面与胸侧照片、鸣声、日期、坐标和凭证材料，减少近似种误判',
      '将林地、果园和城市树木管理记录与下一轮出土结果配对，检验土壤扰动和树木移除影响',
      '在地图中保留点数据与空白区的调查状态，不用县级填色夸大连续分布或周期群重叠',
      '推动采用现行 IUCN 标准的全球重评，并分别报告评估年龄、趋势证据和地区差异',
    ],
    metrics: {
      adultLengthCm: [2.7, 3.3],
    },
    featuredStats: [
      {
        key: 'population-cycle',
        label: '年级群主周期',
        value: '17',
        unit: '年',
        note:
          '描述同一地区大多数个体的出土周期；straggler 可提前或延后，不能当作每只个体固定寿命。',
      },
      {
        key: 'diagnostic-body-length',
        label: '鉴别表头腹长',
        value: '27–33',
        unit: '毫米',
        note:
          'Alexander 与 Moore 1962 年头至腹端范围，不含翅尖，也不是全种硬上下限。',
      },
      {
        key: 'nymphal-instars',
        label: '地下若虫龄期',
        value: '5',
        unit: '龄',
        note:
          'UConn 对周期蝉属生活史的概括；各龄持续时间和根区深度不是固定值。',
      },
      {
        key: 'documented-broods',
        label: '文献所列周期群',
        value: 'I–X、XIII–XIV',
        note:
          '2019 年研究表所列现存十七年周期群；brood 可含多个物种，也不等于亚种或连续种群。',
      },
    ],
    media: {
      image:
        './images/species/seventeen-year-cicada/01-adult-forest-portrait.webp',
      alt: '北美洲东部落叶林枝条上，一只完整成年十七年蝉侧向停栖，黑色身体、红眼、透明翅与橙色翅脉清楚可见',
      focalPoint: { x: 0.62, y: 0.48 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/seventeen-year-cicada/02-adult-external-morphology.webp',
          alt: '树干表面一只成年十七年蝉侧背近景，黑色身体、红眼、橙色翅脉与透明前翅清楚可见',
          title: '成虫外部形态线索',
          caption:
            'AI 生成形态重建；画面不能独立确认物种、性别、头腹长或分类身份，也不能核验腹带宽度、胸侧斑和翅脉细节。',
          focalPoint: { x: 0.5, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/seventeen-year-cicada/03-synchronized-night-emergence.webp',
          alt: '夜间树干基部的小范围出土情景，若虫、附着空蜕、苍白刚蜕成虫和已硬化成虫分布在树皮与土面上',
          title: '集中出土与终龄蜕皮情景',
          caption:
            'AI 生成同步出土重建；画面不能测量土深、土温、密度、日期、周期群身份或单夜出土比例，也不能证明所有个体同时出现。',
          focalPoint: { x: 0.52, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/seventeen-year-cicada/04-male-chorus-calling.webp',
          alt: '日间树冠枝叶间，四只成年十七年蝉彼此分离停栖在受光树枝上',
          title: '高枝合唱生境情景',
          caption:
            'AI 生成合唱情景；静帧不能传达叫声频率、声压、短语时长、CI、CIII 阶段或雌虫振翅时序，也不能只凭姿态确认鸣叫和物种。',
          focalPoint: { x: 0.57, y: 0.46 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/seventeen-year-cicada/05-female-twig-oviposition.webp',
          alt: '一只雌性十七年蝉停在活树枝上，尖窄腹端直接贴住一条横向细枝，画面没有外露卵',
          title: '细枝上的产卵接触情景',
          caption:
            'AI 生成产卵重建；画面不能确认卵室形状、卵数、胚龄、孵化期、孵化率、树种适宜性或枝条损伤程度。',
          focalPoint: { x: 0.56, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/seventeen-year-cicada/06-underground-nymph-root-feeding.webp',
          alt: '地下土室内一只周期蝉若虫贴近一条细根的微距情景，掘土型前足与分节身体可见',
          title: '根区中的地下若虫',
          caption:
            'AI 生成土壤剖面；画面不能确定真实深度、若虫年龄、龄期、宿主树种、取食流量或季节计数机制，也不代表固定地下姿势。',
          focalPoint: { x: 0.55, y: 0.59 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...SEVENTEEN_YEAR_CICADA_SOURCES,
      {
        title: 'GBIF: Magicicada septendecim (Linnaeus, 1758) nomenclatural record',
        url: 'https://www.gbif.org/species/5792026',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: SEVENTEEN_YEAR_CICADA_CONTENT_DATE,
    updatedAt: SEVENTEEN_YEAR_CICADA_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
