import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const AFRICAN_OSTRICH_SOURCE_DATE = '2026-08-26' as const;

const AFRICAN_OSTRICH_CONTENT_DATE = '2026-08-26' as const;

const AFRICAN_OSTRICH_SOURCES = [
  {
    title: 'IOC World Bird List v15.2: Ratites — ostriches to tinamous',
    url: 'https://www.worldbirdnames.org/new/bow/ratites/',
    kind: 'taxonomy',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'IOC World Bird List v15.2: Master, subspecies and multilingual lists',
    url: 'https://www.worldbirdnames.org/new/ioc-lists/master-list-2/',
    kind: 'taxonomy',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'Miller et al. 2011: Phylogeographic analysis of ostrich subspecies',
    url: 'https://doi.org/10.1007/s10592-010-0149-x',
    kind: 'taxonomy',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Struthio camelus, 2025 global assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T45020636A280828427.en',
    kind: 'conservation',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Common Ostrich Struthio camelus',
    url: 'https://datazone.birdlife.org/species/factsheet/common-ostrich-struthio-camelus',
    kind: 'distribution',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices: population-limited Appendix I listing for Struthio camelus',
    url: 'https://cites.org/sites/default/files/eng/app/2025/E-Appendices-2025-02-07.pdf',
    kind: 'conservation',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'CMS Appendices I and II, effective 27 June 2026',
    url: 'https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf',
    kind: 'conservation',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'Smithsonian National Zoo: Ostrich',
    url: 'https://nationalzoo.si.edu/animals/ostrich',
    kind: 'general',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'San Diego Zoo: Ostrich life history and sex-specific measurements',
    url: 'https://animals.sandiegozoo.org/animals/ostrich',
    kind: 'ecology',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'EAZA: North African Ostrich Best Practice Guidelines',
    url: 'https://strapi.eaza.net/uploads/North_ostrich_BPG_c731b4a332.pdf',
    kind: 'ecology',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'Alexander et al. 1979: Mechanics of running of the ostrich',
    url: 'https://doi.org/10.1111/j.1469-7998.1979.tb03941.x',
    kind: 'ecology',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'Natural History Museum: largest bird and single-male speed record',
    url: 'https://www.nhm.ac.uk/discover/what-is-the-biggest-bird-in-the-world.html',
    kind: 'general',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'Withers 1983: Energy, water and solute balance of the ostrich',
    url: 'https://doi.org/10.1086/physzool.56.4.30155880',
    kind: 'ecology',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'Williams et al. 1993: Field metabolism and water requirements in the Namib',
    url: 'https://doi.org/10.2307/1939301',
    kind: 'ecology',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'Sahara Conservation: North African Ostrich Recovery',
    url: 'https://saharaconservation.org/restoring-wildlife/north-african-ostrich-recovery/',
    kind: 'conservation',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-struthio-camelus',
    slug: 'african-ostrich',
    names: {
      zh: '非洲鸵鸟',
      en: 'Common Ostrich',
      aliases: ['鴕鳥', '鸵鸟', 'African Ostrich'],
    },
    scientificName: 'Struthio camelus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Struthioniformes', '鸵鸟目'),
      taxon('Struthionidae', '鸵鸟科'),
      taxon('Struthio', '鸵鸟属'),
    ),
    conservation: conservation('LC', 'decreasing', 2025),
    distribution: {
      realms: ['terrestrial'],
      continents: ['非洲'],
      regions: ['萨赫勒与撒哈拉南缘', '东非稀树草原', '南部非洲干旱草原与灌丛'],
      countries: [
        '毛里塔尼亚',
        '马里',
        '尼日尔',
        '乍得',
        '苏丹',
        '厄立特里亚',
        '埃塞俄比亚',
        '肯尼亚',
        '乌干达',
        '坦桑尼亚',
        '安哥拉',
        '纳米比亚',
        '博茨瓦纳',
        '南非',
        '赞比亚',
        '津巴布韦',
        '莫桑比克',
        '喀麦隆',
        '中非共和国',
        '塞内加尔',
      ],
      range:
        '原生分布横跨非洲萨赫勒、东非和南部非洲，在干旱草原、稀树草原、灌丛、半荒漠和开阔林地留居或随资源游移；北非和西非分布已经高度破碎，西亚亚种已经灭绝。澳大利亚种群来自引入，不属于原生范围。',
    },
    habitats: [
      {
        name: '干旱草原与稀树草原',
        realm: 'terrestrial',
        description:
          '短草、散生乔木和广阔视野支持取食、奔跑和警戒，是 BirdLife 列出的主要生境。',
        isPrimary: true,
      },
      {
        name: '半荒漠、萨赫勒平原与干河谷灌丛',
        realm: 'terrestrial',
        description:
          '降雨稀少，植物脉冲、多肉植物和干河谷植被提供季节性食物与水；饮水点是资源，不是淡水生境分类。',
      },
      {
        name: '开阔林地、牧场与农业边缘',
        realm: 'terrestrial',
        description:
          '可利用疏林和低强度牧场；人工地景只属边缘生境，不能替代连续原生开阔地。',
      },
    ],
    measurements: {
      height: {
        min: 1.7,
        max: 2.7,
        unit: 'm',
        note: '圣迭戈动物园成鸟范围；雌鸟 1.7—1.9 米，雄鸟 2.1—2.7 米。',
      },
      weight: {
        min: 90,
        max: 130,
        unit: 'kg',
        note: '圣迭戈动物园成鸟范围；雌鸟 90—110 千克，雄鸟 100—130 千克；不含个别极值。',
      },
    },
    diet: {
      types: ['herbivore', 'omnivore'],
      foods: [
        '草、叶和嫩枝',
        '花、种子和果实',
        '根与多肉植物',
        '蝗虫等昆虫',
        '偶遇的蜥蜴、蛙和小型啮齿类',
      ],
      description:
        '以植物为主的机会型杂食者，随季节取食草、叶、花、种子、根、多肉植物和果实，也摄食昆虫及偶遇的小型脊椎动物；吞下砂粒和小石是为了帮助砂囊研磨，不是从石头获取营养。',
    },
    activity: [
      '非迁徙性陆栖，干旱地区会随食物和降雨广域游移',
      '日间活动，清晨和傍晚常更活跃',
      '可独行、成对或组成松散群体，聚群规模随资源改变',
      '用长颈和大眼警戒，以奔跑逃离风险',
      '翅膀与尾羽参与求偶、威吓、平衡和转向，但飞行能力已经退化',
      '能利用植物水并浓缩排泄物节水，有水时仍会主动饮用',
    ],
    tags: [
      '现存最大鸟类',
      '古颚类群',
      '不能飞行',
      '每脚两趾',
      '共同巢',
      '干旱地适应',
      'IUCN 无危',
      '全球趋势下降',
      'CITES 附录 I（指定北方国家种群）',
    ],
    summary:
      '非洲鸵鸟是横跨非洲干旱开阔地的现存最大鸟类，以两趾长腿奔跑，由多只雌鸟共享地面浅巢；全球评估无危，但北非种群仍在恢复。',
    description:
      'IOC v15.2 接受 Common Ostrich，即 Struthio camelus，并列出四个亚种：camelus、massaicus、australis 三个现生亚种，以及约 1966 年灭绝的西亚亚种 syriacus。索马里鸵鸟 Struthio molybdophanes 是独立种，不是本种的现生亚种。非洲鸵鸟是现存最高、最重的鸟，以植物为主，在草原、稀树草原、半荒漠和灌丛留居或随资源游移。BirdLife/IUCN 2025 全球评估为 LC、趋势下降；全球 LC 不代表各区域种群安全，北非指名亚种仍需反盗猎、遗传管理和放归恢复。',
    storySections: [
      {
        key: 'taxonomy-and-palaeognaths',
        label: '分类口径',
        title: '非洲鸵鸟与索马里鸵鸟是两个物种',
        body: '现行分类把非洲鸵鸟和索马里鸵鸟作为两个独立物种。它们都属于古颚类群，该类群的名称来自上颚结构。IOC v15.2 承认非洲鸵鸟有三个现生亚种。',
      },
      {
        key: 'sex-and-region',
        label: '性别与地域型',
        title: '羽色辨性别，颈腿颜色辨地域型',
        body: '成年雄鸟主体黑而飞羽和尾羽白，成年雌鸟整体灰褐。北非和马赛雄鸟的裸颈偏粉红至红，南部雄鸟的颈腿偏灰蓝；不同亚种的裸露皮肤颜色存在差异。',
      },
      {
        key: 'two-toed-running',
        label: '两趾奔跑',
        title: '奔跑速度随个体和持续时间变化',
        body: '高速电影研究中的一只 40 千克雌鸟约达 61 千米/小时；英国自然历史博物馆另载一只雄鸟在 732 米路段达到 72 千米/小时。Smithsonian 汇总的 48 至 59 千米/小时属于较长时间的持续速度，69 千米/小时属于短时峰值；这些数字都不是每只成鸟的固定速度。',
      },
      {
        key: 'dryland-water',
        label: '干旱地水分',
        title: '缺水时节约水分，有水时仍会饮用',
        body: '纳米布野生成鸟可在特定观察期依靠植物水，实验鸟断水时也能减少尿量并浓缩尿液；七天断水仍造成负水分平衡和体重下降。有水时鸵鸟会饮用，“从不喝水”并不成立。',
      },
      {
        key: 'communal-ground-nest',
        label: '共同巢',
        title: '单只雌鸟的卵会汇入一个共同浅窝',
        body: '雄鸟刨出地面浅窝，多只雌鸟可向同一个共同巢产卵。单只雌鸟通常产 7 至 10枚卵；孵化期为 42 至 46 天，主雌鸟主要白天伏巢，雄鸟主要夜间接替。共同巢可有几十枚卵，不能把它们全归给一只雌鸟。',
      },
      {
        key: 'north-african-recovery',
        label: '北非恢复',
        title: '全球无危没有消除北非的盗猎与遗传风险',
        body: '北非指名亚种已经离开大片原生范围。恢复工作需要保护开阔生境和巢、控制盗猎、核验圈养谱系并持续跟踪放归个体；CITES 附录 I 也只覆盖指定北方国家种群，不是全种列名。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的鸵鸟命名记录',
        body: '林奈于 1758 年命名非洲鸵鸟，现用学名为 Struthio camelus。它是现存最高、最重的鸟类，中文名“非洲”对应主要原生区域。如今索马里鸵鸟被另列为独立种；非洲鸵鸟中曾生活于西亚的亚种 syriacus 则约在 1966 年灭绝。',
      },
    ],
    keyFacts: [
      'IOC v15.2 接受英文名 Common Ostrich，并列出四个亚种，其中三个现生；西亚亚种 syriacus 约在 1966 年灭绝。',
      '索马里鸵鸟 Struthio molybdophanes 是独立物种，不再作为非洲鸵鸟的亚种。',
      'BirdLife/IUCN 2025 全球评估为 LC、趋势下降，记录没有受胁 评估准则代码。',
      '非洲鸵鸟是非迁徙性陆鸟，干旱区群体仍会随资源游移。',
      '雌鸟高 1.7 至 1.9 米、90 至 110 千克；雄鸟高 2.1 至 2.7 米、100 至 130 千克。',
      '2.7 米和 130 千克是常用成鸟范围的上限，位于范围顶端，并非所有个体的典型值；2.75 米和 156 千克又属于个体极值。',
      '一只 40 千克雌鸟的电影实测约 61 千米/小时；一只雄鸟的整理纪录为 72 千米/小时、732 米，两组数字都不能外推成群体常态。',
      '鸵鸟双脚各有两个向前脚趾；翅膀帮助平衡、转向和求偶，但不能飞行。',
      '食性以植物为主，也摄食昆虫及偶遇的小型脊椎动物；砂砾只帮助砂囊研磨。',
      '能用植物水和浓缩排泄物度过缺水期，有水时仍会饮用。',
      '多只雌鸟可向共同地面巢产卵，主雌鸟主要白天、雄鸟主要夜间孵化。',
      '单只雌鸟 7 至 10 枚与共同巢几十枚属于不同统计单位。',
      '鸵鸟把头埋进沙里躲避危险是神话；翻卵或贴近地面观察会制造这种错觉。',
      'CITES 附录 I 只覆盖 12 个指定北方国家种群，全球 LC 不能概括北非指名亚种的恢复需求。',
    ],
    threats: [
      '农牧扩张、过度放牧和土地转换造成连续开阔生境丧失与退化',
      '为肉、羽、皮、脂肪和其他产品猎杀或盗猎野生鸵鸟',
      '收集野生卵降低繁殖产出并支持非法贸易',
      '冲突和管理中断削弱巡护并提高车辆、武器盗猎压力',
      '北非残存小种群面临隔离、近交和偶发事件风险',
      '未经遗传核验的商业杂交谱系威胁北非恢复项目的谱系完整性',
    ],
    conservationActions: [
      '保护并连接短草平原、稀树草原、萨赫勒灌丛和干河谷',
      '在残存北非种群和繁殖地加强反盗猎、巡护及社区协作',
      '打击野生卵、肉、皮、羽和其他制品的非法采集与跨境贸易',
      '按亚种和野生来源监测数量、繁殖成功、分布与趋势',
      '对北非圈养保障群开展谱系和遗传管理，防止近交及杂交混入',
      '放归前评估栖息地、社区、疾病和遗传来源，放归后持续跟踪',
      '执行 CITES 对指定北方国家种群的附录 I 贸易管制',
    ],
    metrics: {
      adultMassKg: [90, 130],
    },
    featuredStats: [
      {
        key: 'sex-specific-height',
        label: '成鸟站立高度',
        value: '雌1.7—1.9；雄2.1—2.7',
        unit: '米',
        note: '圣迭戈动物园性别分列范围；2.75 米属于个体极值记录。',
      },
      {
        key: 'single-male-speed-record',
        label: '单只雄鸟路段纪录',
        value: '72',
        unit: '千米/小时',
        note: '英国自然历史博物馆整理的 1964 年记录，路段 732 米；不代表群体平均或持续速度。',
      },
      {
        key: 'eggs-per-female',
        label: '单只雌鸟产卵数',
        value: '7—10',
        unit: '枚',
        note: '圣迭戈动物园汇总；共同巢由多只雌鸟贡献，可汇集几十枚。',
      },
      {
        key: 'incubation',
        label: '孵化期',
        value: '42—46',
        unit: '天',
        note: '主雌鸟主要白天、雄鸟主要夜间孵化；EAZA 野外汇总平均约 42 天。',
      },
    ],
    media: {
      image:
        './images/species/african-ostrich/01-open-savanna-adult-male-portrait.webp',
      alt: '开阔南部非洲稀树草原上恰好一只完整成年雄性非洲鸵鸟，灰色颈腿、黑色体羽、白色飞羽和尾羽全部入画',
      focalPoint: { x: 0.68, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/african-ostrich/02-adult-female-field-marks.webp',
          alt: '恰好一只完整成年雌性非洲鸵鸟站在开阔草原，灰褐色体羽与较淡翼尾、灰色颈腿和双脚均清楚可见',
          title: '灰褐羽色属于成年雌鸟',
          caption:
            '一只完整成年雌性非洲鸵鸟呈灰褐色体羽和较淡翼尾；图集采用南部灰颈亚种，不能据此概括所有亚种的裸露皮肤颜色。',
          focalPoint: { x: 0.58, y: 0.52 },
        },
        {
          image:
            './images/species/african-ostrich/03-semi-arid-savanna-habitat.webp',
          alt: '半干旱稀树草原、低矮灌丛和开阔地占据宽景，中右侧只有一只完整非洲鸵鸟',
          title: '开阔地让长颈和奔跑发挥作用',
          caption:
            '画面重建干旱草原与灌丛镶嵌生境，不是出现记录、范围边界或种群密度证据。',
          focalPoint: { x: 0.68, y: 0.57 },
        },
        {
          image:
            './images/species/african-ostrich/04-two-toed-running-stride.webp',
          alt: '一只雄性非洲鸵鸟横向奔跑，一脚着地一脚抬起；抬起的后脚两个向前脚趾可见，着地前脚的小外趾与主趾在侧视中重叠',
          title: '一脚负重的奔跑步态',
          caption:
            '本种每只脚有两个向前脚趾；图中前脚小外趾发生透视重叠，不能作为完整解剖图。短翼可参与平衡与转向，但单帧不证明这只鸟正在用翼改变方向，也不代表测速结果。',
          focalPoint: { x: 0.52, y: 0.55 },
        },
        {
          image:
            './images/species/african-ostrich/05-communal-ground-nest-and-eggs.webp',
          alt: '一只完整成年雌性非洲鸵鸟守在共同地面浅刮巢旁，巢内多枚奶油色大卵中九枚清楚可数',
          title: '共同浅窝中的九枚可见卵',
          caption:
            '九枚只表示一个重建时点；共同巢可由多只雌鸟贡献几十枚，画面不提供产卵雌鸟数、最终总数或孵化结果。',
          focalPoint: { x: 0.52, y: 0.6 },
        },
        {
          image:
            './images/species/african-ostrich/06-distance-savanna-monitoring.webp',
          alt: '恰好两名野外观察者用一台三脚架望远镜和一本记录册，在远处观察只有一只完整非洲鸵鸟',
          title: '隔着开阔地完成远距观察',
          caption:
            '人鸟之间保留宽阔地景缓冲；单幅画面不能给出地点、个体身份、数量或种群趋势。',
          focalPoint: { x: 0.6, y: 0.56 },
        },
      ],
    },
    sources: [
      ...AFRICAN_OSTRICH_SOURCES,
      {
        title: 'GBIF: Struthio camelus Linnaeus, 1758 nomenclatural record',
        url: 'https://www.gbif.org/species/2495150',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: AFRICAN_OSTRICH_CONTENT_DATE,
    updatedAt: AFRICAN_OSTRICH_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
