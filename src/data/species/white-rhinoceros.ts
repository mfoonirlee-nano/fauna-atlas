import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const WHITE_RHINOCEROS_SOURCE_DATE = '2026-08-23' as const;

const WHITE_RHINOCEROS_CONTENT_DATE = '2026-08-23' as const;

const WHITE_RHINOCEROS_SOURCES = [
  {
    title: 'ASM Mammal Diversity Database v2.5: Ceratotherium simum',
    url: 'https://www.mammaldiversity.org/taxon/1006111/',
    kind: 'taxonomy',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Ceratotherium simum (2020 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T4185A45813880.en',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Ceratotherium simum cottoni (2020 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T4183A45813838.en',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Ceratotherium simum simum (2020 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T39317A45814320.en',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'IUCN: African rhino population estimates at the end of 2024',
    url: 'https://iucn.org/press-release/202508/poaching-african-rhinos-down-drought-and-other-threats-drive-losses-globally',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'IUCN and TRAFFIC CoP20 analyses: southern white rhinoceros population and range, 2024',
    url: 'https://www.traffic.org/site/assets/files/28130/iucn_traffic_cop20_full_analyses_ver_4.pdf',
    kind: 'distribution',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'SANBI Scientific Authority: southern white rhinoceros non-detriment finding, October 2024',
    url: 'https://www.sanbi.org/wp-content/uploads/2025/07/White-rhino_Oct-2024.pdf',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices I, II and III, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC: African rhino conservation 2025–2035',
    url: 'https://doi.org/10.2305/RIGA8357',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Harley et al. 2016: mitochondrial genomes and white rhinoceros species definitions',
    url: 'https://doi.org/10.1007/s10592-016-0861-2',
    kind: 'taxonomy',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Groves 1972: Ceratotherium simum, Mammalian Species',
    url: 'https://doi.org/10.2307/3503966',
    kind: 'general',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Garand et al. 2025: rhinoceros body mass records compared with free-ranging field data',
    url: 'https://doi.org/10.1002/zoo.70034',
    kind: 'general',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Endo et al. 1999: morphology of the white rhinoceros intestinal tract',
    url: 'https://doi.org/10.1046/j.1439-0264.1999.00210.x',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Steuer et al. 2010: digestion in grazing and browsing rhinoceroses',
    url: 'https://doi.org/10.1016/j.cbpa.2010.03.006',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Plochocki et al. 2017: histological study of white rhinoceros integument',
    url: 'https://doi.org/10.1371/journal.pone.0176327',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Tichagwa et al. 2020: factors influencing white rhinoceros activity and behaviour',
    url: 'https://doi.org/10.1111/aje.12770',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Marneweck et al. 2017: information in white rhinoceros dung odours',
    url: 'https://doi.org/10.1098/rspb.2016.2376',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Schwarzenberger and Hermes 2023: comparative rhinoceros gestation',
    url: 'https://doi.org/10.1016/j.ygcen.2023.114214',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Waldram, Bond and Stock 2008: white rhinoceros as a context-dependent ecosystem engineer',
    url: 'https://doi.org/10.1007/s10021-007-9109-9',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Rookmaaker 2019: Debunked, the name of the White rhinoceros',
    url: 'https://doi.org/10.69649/pachyderm.v60i.47',
    kind: 'general',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Ol Pejeta Conservancy: rhino conservation and the last two northern white rhinoceroses',
    url: 'https://www.olpejetaconservancy.org/what-we-do/conservation/wildlife-conservation/rhinos/',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Leibniz-IZW BioRescue: northern white rhinoceros embryos and transfer attempts, August 2025',
    url: 'https://www.izw-berlin.de/en/press-release/biorescue-scientists-produced-three-new-embryos-and-began-using-northern-white-rhino-embryos-in-embryo-transfers-in-the-race-to-save-the-species.html',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-ceratotherium-simum',
    slug: 'white-rhinoceros',
    names: {
      zh: '白犀',
      en: 'White Rhinoceros',
      aliases: ['Square-lipped Rhinoceros'],
    },
    scientificName: 'Ceratotherium simum',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Perissodactyla', '奇蹄目'),
      taxon('Rhinocerotidae', '犀科'),
      taxon('Ceratotherium', '白犀属'),
    ),
    conservation: conservation('NT', 'decreasing', 2020),
    distribution: {
      realms: ['terrestrial'],
      continents: ['非洲'],
      regions: ['南部非洲', '东非', '中非', '西非'],
      countries: [
        '博茨瓦纳',
        '科特迪瓦',
        '刚果民主共和国',
        '斯威士兰',
        '肯尼亚',
        '莫桑比克',
        '纳米比亚',
        '卢旺达',
        '塞内加尔',
        '南非',
        '乌干达',
        '赞比亚',
        '津巴布韦',
      ],
      range:
        '现存数量几乎全部为南方白犀，分布由南非原生核心、南部非洲多国的现存或重引入种群，以及东非、中非和西非的辅助迁殖或引入种群组成。2024 年报告记录十三国，但部分极小种群采用 2023 年资料；这些种群没有构成连续自然分布带。北方白犀历史分布于中北部非洲，当前已知两只雌性在肯尼亚受管理保育。',
      center: { lat: -22, lng: 25 },
    },
    habitats: [
      {
        name: '短草放牧草坪',
        realm: 'terrestrial',
        description:
          '主要取食生境；白犀以宽方唇贴地割取短而多叶的禾草，并通过反复放牧维持部分短草斑块。',
        isPrimary: true,
      },
      {
        name: '稀树草原与 bushveld 镶嵌景观',
        realm: 'terrestrial',
        description:
          '草地、疏灌丛和零散乔木提供短草、较高丛生草、阴凉与移动通道；现存地点多受保护或围栏管理。',
      },
      {
        name: '浅水塘、排水线与泥塘边缘',
        realm: 'terrestrial',
        description:
          '提供饮水、泥浴和炎热时段的热环境调节资源；这些地点不构成淡水生活史或水生生境。',
      },
    ],
    measurements: {
      length: {
        min: 3.35,
        max: 3.77,
        unit: 'm',
        note: '头体长，Groves 1972 的四成体历史样本；不是全物种极值',
      },
      height: {
        min: 1.71,
        max: 1.85,
        unit: 'm',
        note: '肩高，Groves 1972 的四成体历史样本',
      },
      weight: {
        min: 1.4,
        max: 2.4,
        unit: 't',
        note: '野外参考；成年雌性约 1.4—1.8 吨，成年雄性约 2.0—2.4 吨',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: ['短而多叶的禾草', '禾本科草', '较高且纤维较粗的丛生草'],
      description:
        '大型食草者，以宽方唇贴地割取禾本科草；优先利用短草，短草不足时可转食较高、纤维较粗的丛生草，并通过扩大的结肠进行后肠发酵。',
    },
    activity: [
      '昼夜均可活动，天气、温度、时段、月相、生境和年龄性别会改变采食与移动节律',
      '炎热时段常休息、寻阴、饮水或泥浴，皮肤上的泥层也可参与热环境调节与皮肤护理',
      '凝聚关系以母子和小型亚成体组合为主；成年公犀通常独居',
      '繁殖公犀维持领域，其他个体的活动范围可重叠',
      '共同粪堆中的气味可传递性别、年龄、领域身份和发情状态信息',
    ],
    tags: [
      '非洲',
      '奇蹄目',
      '巨型食草动物',
      '方唇食草者',
      '草原生态工程师',
      'IUCN 近危',
      '依赖持续保护',
    ],
    summary:
      '白犀是现存最大的犀牛，用宽方唇贴地吃草。南方白犀曾从十九世纪末的低谷恢复，盗猎、干旱与高昂安保成本仍影响保护。',
    description:
      '白犀是现存最大的犀牛，也是依靠扩大的结肠发酵植物纤维的巨型食草动物。它把长头垂向地面，用宽方唇割取禾草；炎热时会饮水、寻阴或泥浴。稳定的社会组合以母子和小型亚成体群为主，成年公犀多独居并维持领域。各性别和年龄阶段的个体都会访问公共粪堆，白犀可从粪便气味中辨别性别、年龄、公犀领域身份和母犀发情状态等信息。2024 年末，全球估计有 15,752 只白犀，其中南方白犀 15,750 只；北方白犀仅存两只雌性。保护机构需要维护安全且资源充足的草原，并按遗传、年龄和性别结构调配个体；执法部门负责追查跨国盗猎与贩运，当地社区应参与决策并分享合理收益。',
    storySections: [
      {
        key: 'two-subspecies',
        label: '分类边界',
        title: '南方与北方白犀的现状',
        body: '南方白犀构成当前几乎全部现存数量，北方白犀则为极危并可能已在野外灭绝，只余两只无法自然延续种群的雌性。物种级近危状态不能遮住北方亚种的危机，北方亚种的两只也不能代替整个物种数量。',
      },
      {
        key: 'square-lipped-grazer',
        label: '形态与食性',
        title: '宽方唇贴地割取禾草',
        body: '白犀把长头垂向地面，用宽而平直的唇缘割取禾草，颈肩隆起支撑持续采食的姿势。它优先吃短草，也能取食较高、纤维较粗的丛生草。黑犀的唇为钩状，适合抓取枝叶，两种犀牛的取食方式不同。',
      },
      {
        key: 'water-mud-and-heat',
        label: '生理与行为',
        title: '白犀会饮水、泥浴和寻阴',
        body: '白犀在浅水塘或泥塘饮水、泥浴，炎热时也会躲进树荫。一只老年雌性南方白犀的皮肤研究发现汗腺稀疏，研究者据此推测泥浴与寻阴可辅助散热。湿泥外观只能说明近期接触过泥浆，不能量化散热效果。',
      },
      {
        key: 'social-scent-map',
        label: '社会与通讯',
        title: '母子组合与公共粪堆',
        body: '研究记录的稳定组合以母子和小型亚成体群为主，成年公犀多独居。各性别和年龄阶段的个体都会访问公共粪堆，并可从粪便气味中辨别性别、年龄、公犀领域身份和母犀发情状态等信息。',
      },
      {
        key: 'grazing-lawns',
        label: '生态作用',
        title: '白犀改变草高和火烧格局',
        body: '较湿润稀树草原的移除实验显示，白犀会维持短草草坪并降低草本燃料的连续性。移除白犀的样地草层更高，火烧范围也更连片。该效应取决于降水和当地草食动物组合；在较干旱地点，小型食草动物可维持部分短草结构。',
      },
      {
        key: 'conservation-dependent-recovery',
        label: '保护',
        title: '南方白犀的恢复依赖持续投入',
        body: '迁地扩散、重引入、保护地与持续监测让南方白犀从十九世纪末的低谷恢复，但非法犀角需求、有组织犯罪、干旱和高昂安保成本仍可迅速逆转成果。保护机构需要扩展安全且资源充足的草原，按承载量和遗传结构调配个体；政府还需保障社区参与和合理收益，并追查跨国盗猎与贩运。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1817 年的命名与“白”字误解',
        body: '伯切尔在 1817 年用 Rhinoceros simus 描述白犀，今天的学名为 Ceratotherium simum。它的皮肤呈灰色，常见的“white 是宽嘴一词 wijd 误译”说法缺少历史证据。辨认白犀时，宽方唇与贴地吃草的习惯比名称中的颜色更有用。',
      },
    ],
    keyFacts: [
      'IUCN 2020 年将整个白犀物种评为近危，种群趋势为下降。',
      '2024 年末估计有 15,752 只白犀，包括 15,750 只南方白犀和 2 只北方白犀；该数字统计总个体。',
      '北方白犀为极危（可能已在野外灭绝）；已知存活的两只均为雌性。',
      '成年雌性野外体重参考约 1.4 至 1.8 吨，雄性约 2.0 至 2.4 吨，是现存最大的犀牛。',
      '宽方唇适合贴地采草；白犀是结肠显著扩大的后肠发酵者。',
      '公共粪堆中的气味可传递性别、年龄、公犀领域身份和母犀发情状态。',
      '常见的 white 源自 wijd 误译之说缺少历史证据，白犀皮肤本身是灰色。',
    ],
    threats: [
      '非法犀角需求驱动的盗猎、贩运和跨国有组织犯罪',
      '保护地、私人和社区保育地长期安保与管理成本上升',
      '草原转化、栖息地破碎和围栏景观限制扩散与种群增长',
      '干旱、低质量草场及局地管理变化造成死亡和繁殖下降',
      '小型隔离种群的性别年龄失衡、近交和随机事件风险',
      '低繁殖率使成年个体损失无法快速补回',
      '北方白犀只余两只雌性，无法依靠自然繁殖恢复',
    ],
    conservationActions: [
      '保护并扩展有足够草、水、阴凉和泥塘资源的安全草原与稀树草原',
      '依据承载量、遗传、年龄和性别结构开展转移、重引入与元种群管理',
      '以个体识别、距离抽样和一致报告持续监测数量、繁殖、死亡和分布',
      '开展情报主导的反盗猎、跨境执法、司法协作和非法资金链调查',
      '研究并减少非法犀角市场需求，同时执行 CITES 的种群与标本级贸易限制',
      '让当地社区参与决策，保障其合法权利并分享合理收益，避免将保护成本集中转嫁给社区',
      '为保护地、私人和社区保育地提供稳定资金、治理与专业能力',
      '去角需要麻醉并定期重复，只能作为持续安保和监测的辅助措施',
      '谨慎推进北方白犀辅助生殖研究，不把胚胎数量或移植尝试等同于种群恢复',
    ],
    metrics: {
      adultMassKg: [1400, 2400],
      lifespanYears: [30, 40],
    },
    featuredStats: [
      {
        key: 'end-2024-population',
        label: '2024 年末估计',
        value: '15,752',
        unit: '只总个体',
        note: '15,750 只南方白犀加 2 只北方白犀；不是成熟个体数或同步普查',
      },
      {
        key: 'adult-field-mass',
        label: '成年野外体重参考',
        value: '雌约 1.6 / 雄约 2.2',
        unit: '吨',
        note: '汇总资料的平均参考；雌约 1.4 至 1.8 吨，雄约 2.0 至 2.4 吨',
      },
      {
        key: 'gestation',
        label: '平均妊娠期',
        value: '约 504',
        unit: '天',
        note: '比较研究范围 480 至 525 天，约 16 至 17 个月',
      },
      {
        key: 'reporting-countries',
        label: '2024 报告国家',
        value: '13',
        unit: '国',
        note: '含重引入和辅助迁殖种群；部分极小种群采用 2023 年资料',
      },
    ],
    media: {
      image: './images/species/white-rhinoceros/01-square-lipped-savanna-portrait.webp',
      alt: '一只成年南方白犀在短草稀树草原安静站立，宽方唇、低垂长头、颈肩隆起和两只鼻角清楚可见',
      focalPoint: { x: 0.68, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/white-rhinoceros/02-square-lip-grazing.webp',
          alt: '一只完整的南方白犀低头，以宽而平直的方唇贴地取食短草',
          title: '贴地工作的方唇',
          caption: '白犀主要取食禾本科草；钩状抓握唇与枝叶浏览属于黑犀的典型组合。',
          focalPoint: { x: 0.51, y: 0.58 },
        },
        {
          image: './images/species/white-rhinoceros/03-grassland-water-pan-habitat.webp',
          alt: '短草稀树草原环绕浅水塘，一只小型远景白犀完整走过右侧开阔地',
          title: '草原中的关键水源',
          caption: '水塘供白犀饮水和泥浴，白犀仍是陆生动物。',
          focalPoint: { x: 0.68, y: 0.59 },
        },
        {
          image: './images/species/white-rhinoceros/04-mud-coating-after-wallow.webp',
          alt: '一只完整的南方白犀站在浅泥塘旁，腹侧和四肢仍覆盖着带湿亮反光的泥层',
          title: '泥浴后留下的泥层',
          caption: '白犀会寻阴或泥浴以帮助散热；画面中的湿泥只能说明它近期接触过泥浆。',
          focalPoint: { x: 0.53, y: 0.54 },
        },
        {
          image: './images/species/white-rhinoceros/05-cow-and-calf.webp',
          alt: '一只成年白犀母兽与一只低头宽平唇的短角幼仔在短草地并行，两只动物均完整可见',
          title: '漫长的母子联系',
          caption: '幼仔通常在约 2.2 至 3.3 岁、接近母兽下一次生产时独立。',
          focalPoint: { x: 0.53, y: 0.58 },
        },
        {
          image: './images/species/white-rhinoceros/06-distance-monitoring.webp',
          alt: '两名生态监测人员在左侧用双筒望远镜、观测镜和平板记录，远处右侧一只完整白犀与他们隔着大片草原',
          title: '保持距离的长期监测',
          caption: '研究人员通过非侵入观察记录个体；估算数量和趋势还需长期、标准化调查。',
          focalPoint: { x: 0.52, y: 0.56 },
        },
      ],
    },
    sources: WHITE_RHINOCEROS_SOURCES,
    featured: true,
    publishedAt: WHITE_RHINOCEROS_CONTENT_DATE,
    updatedAt: WHITE_RHINOCEROS_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
