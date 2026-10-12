import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE = '2026-08-20' as const;

const RUBY_THROATED_HUMMINGBIRD_CONTENT_DATE = '2026-08-20' as const;

const RUBY_THROATED_HUMMINGBIRD_SOURCES = [
  {
    title: 'AviList Core Team 2026 — Global Avian Checklist v2025b',
    url: 'https://www.avilist.org/checklist/v2025b/',
    kind: 'taxonomy',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'IOC World Bird List v15.2 — Master and Multilingual Lists',
    url: 'https://www.worldbirdnames.org/new/ioc-lists/master-list-2/',
    kind: 'taxonomy',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Archilochus colubris (assessed 12 October 2020)',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22688193A186910664.en',
    kind: 'conservation',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone — Ruby-throated Hummingbird Archilochus colubris',
    url: 'https://datazone.birdlife.org/species/factsheet/ruby-throated-hummingbird-archilochus-colubris',
    kind: 'general',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'Cornell Lab — Ruby-throated Hummingbird identification and measurements',
    url: 'https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/id',
    kind: 'general',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'Cornell Lab — Ruby-throated Hummingbird life history',
    url: 'https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/lifehistory',
    kind: 'ecology',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'eBird Status and Trends — Ruby-throated Hummingbird range, data version 2023',
    url: 'https://science.ebird.org/en/status-and-trends/species/rthhum/range-map',
    kind: 'distribution',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'Smithsonian National Zoo — Ruby-throated hummingbird',
    url: 'https://nationalzoo.si.edu/animals/ruby-throated-hummingbird',
    kind: 'general',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'Smithsonian Migratory Bird Center — Ruby-throated Hummingbird annual-cycle factsheet',
    url: 'https://nationalzoo.si.edu/sites/default/files/documents/ruby-throated_hummingbird_1-20-12.pdf',
    kind: 'distribution',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'Hou & Welch 2016 — Premigratory fuelling strategies in Ruby-throated Hummingbirds',
    url: 'https://doi.org/10.1016/j.anbehav.2016.08.019',
    kind: 'ecology',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'Zenzal et al. 2018 — Juvenile migration decisions along the Gulf of Mexico',
    url: 'https://doi.org/10.1016/j.anbehav.2018.01.019',
    kind: 'ecology',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'USGS 2026 — North American Breeding Bird Survey Analysis Results 1966–2025',
    url: 'https://doi.org/10.5066/P1OSNSFC',
    kind: 'conservation',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'USFWS — Hummingbirds of North America: habitat, hazards and conservation actions',
    url: 'https://www.fws.gov/story/hummingbirds-north-america',
    kind: 'conservation',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'USFWS — Migratory Bird Treaty Act',
    url: 'https://www.fws.gov/law/migratory-bird-treaty-act-1918',
    kind: 'conservation',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-archilochus-colubris',
    slug: 'ruby-throated-hummingbird',
    names: {
      zh: '红喉北蜂鸟',
      en: 'Ruby-throated Hummingbird',
      aliases: ['红玉喉北蜂鸟'],
    },
    scientificName: 'Archilochus colubris',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Apodiformes', '雨燕目'),
      taxon('Trochilidae', '蜂鸟科'),
      taxon('Archilochus', '北蜂鸟属'),
    ),
    conservation: conservation('LC', 'increasing', 2020),
    distribution: {
      realms: ['terrestrial'],
      continents: ['北美洲'],
      regions: [
        '加拿大南部与中部',
        '美国东部与中部',
        '墨西哥湾沿岸及跨湾迁徙通道',
        '墨西哥南部',
        '中美洲',
      ],
      countries: [
        '加拿大',
        '美国',
        '墨西哥',
        '伯利兹',
        '危地马拉',
        '萨尔瓦多',
        '洪都拉斯',
        '尼加拉瓜',
        '哥斯达黎加',
        '巴拿马',
      ],
      range:
        '在加拿大南部至中部和美国东部、中部繁殖，秋季经美国东南部与墨西哥湾沿岸南迁；部分个体跨越海湾，另一些沿海岸移动。主要在墨西哥南部至中美洲越冬，少数留在佛罗里达南端；国家列表概括常规范围，不含全部加勒比迁徙记录与迷鸟。',
    },
    habitats: [
      {
        name: '开阔落叶林、混交林林缘与林间空地',
        realm: 'terrestrial',
        description: '主要繁殖环境，也利用河岸、草甸、果园、公园和有连续花源及细枝巢位的郊区花园。',
        isPrimary: true,
      },
      {
        name: '迁徙停歇地的沿海灌丛与花源镶嵌',
        realm: 'terrestrial',
        description: '在墨西哥湾沿岸及内陆通道补充花蜜和小型节肢动物；路线与停留时间随年龄、天气和个体状态改变。',
      },
      {
        name: '热带干林、次生林缘、绿篱与遮荫农园',
        realm: 'terrestrial',
        description: '墨西哥南部和中美洲的主要越冬环境，包括仍保留树冠、灌丛、花源和昆虫食物的遮荫咖啡及柑橘园。',
      },
    ],
    measurements: {
      length: {
        min: 7,
        max: 9,
        unit: 'cm',
        note: 'Cornell 给出的两性共同体长范围。',
      },
      weight: {
        min: 2,
        max: 6,
        unit: 'g',
        note: '宽泛体重包络；性别、时间和迁徙增脂状态会改变体重。',
      },
      wingspan: {
        min: 8,
        max: 11,
        unit: 'cm',
        note: 'Cornell 给出的两性共同翼展范围。',
      },
    },
    diet: {
      types: ['nectarivore', 'insectivore'],
      foods: ['本地管状花与开花树木的花蜜', '蚊、蠓和果蝇等小型飞虫', '小型蜂与蚜虫', '蜘蛛', '树液'],
      description:
        '悬停或短暂停栖取食花蜜，以快速补充碳水化合物；也在空中、叶面、蛛网和啄木鸟树液孔附近捕捉小型昆虫与蜘蛛，动物性食物在育雏期尤其重要。',
    },
    activity: ['昼行性', '长距离迁徙', '单独活动为主', '悬停取食', '资源领地防卫'],
    tags: ['北美候鸟', '蜂鸟', '传粉者', '悬停飞行', '食蜜兼食虫', '雌雄异形', '墨西哥湾迁徙'],
    summary: '红喉北蜂鸟体型微小，能悬停采蜜，也捕食微小节肢动物来满足较高的能量需求。它在北美东部繁殖，冬季迁往墨西哥南部与中美洲。',
    description:
      '红喉北蜂鸟上体闪现金属绿，只有成鸟雄鸟拥有随光线明灭的红宝石色喉斑；雌鸟独自用植物绒毛和蛛丝筑巢、孵卵并育幼。它们并非只食花蜜，也捕捉昆虫和蜘蛛。部分个体跨越墨西哥湾，另一些沿湾岸迁徙。IUCN 的 2020 全球评估仍为无危且趋势上升；最新的 BBS 监测却在 2015 至 2025 年窗口检测到北美繁殖区的下降信号。',
    storySections: [
      {
        key: 'gorget',
        label: '辨识',
        title: '红宝石喉斑会随光线明灭',
        body: '成年雄鸟的喉斑由有方向性的虹彩羽毛组成，角度合适时呈金属红，换个角度可能近黑。雌鸟没有完整红喉斑，喉部为白色、背部为绿色，外侧尾羽带白色末端。头顶和胸前的绿与白没有同样的红色喉斑变化。',
      },
      {
        key: 'flight',
        label: '飞行',
        title: '悬停、倒飞和侧移',
        body: '灵活的翼关节让蜂鸟能够悬停、倒飞、侧移和快速制动，再在花朵或叶隙间转为直线飞行。不同动作的姿态与能量消耗有所差别。',
      },
      {
        key: 'feeding',
        label: '食性',
        title: '花蜜供能，昆虫补上动物性营养',
        body: '红喉北蜂鸟将细喙和舌伸入管状花获取花蜜，也从空中、叶面和蛛网附近捕捉微小昆虫与蜘蛛。花蜜提供能量，动物性食物提供育雏和换羽所需的其他营养。',
      },
      {
        key: 'migration',
        label: '迁徙',
        title: '跨海与沿岸，是同一物种的不同选择',
        body: '一些个体携带脂肪储备跨越墨西哥湾，另一些沿海岸飞行并取食。阿拉巴马湾岸的遥测显示，幼鸟多数沿海岸方向离开，迁徙路线受年龄、天气、脂肪储备和停歇地影响。',
      },
      {
        key: 'nesting',
        label: '繁殖',
        title: '雌鸟独自筑巢和育雏',
        body: '雌鸟在细枝顶面用植物绒毛和蛛丝筑巢，再以地衣和苔藓伪装；富有弹性的巢壁会随雏鸟长大。每窝 1 至 3 枚卵，孵化约 12 至 14 天，雏鸟在巢约 18 至 22 天，雄鸟不参与筑巢、孵卵或喂雏。',
      },
      {
        key: 'conservation',
        label: '监测与保护',
        title: '整体向上，近十年转弱',
        body: 'IUCN 2020 仍记录 LC 与 increasing；USGS 最新 BBS 却显示，1966 至 2025 长期仍增长，而 2015 至 2025 的北美繁殖区出现下降。保护需要保留全年度花源、昆虫和细枝巢位，使玻璃可见、让猫留在室内、正确维护喂食器，并持续用一致方法监测。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '林奈记录的微小蜂鸟',
        body: '林奈在 1758 年以 Trochilus colubris 描述红喉北蜂鸟，后来研究者将它移入北蜂鸟属，形成今天的 Archilochus colubris。中文名中的红喉是成年雄鸟的辨识特征，雌鸟没有完整红喉斑；辨认这两种外观还需要结合背部、尾羽与体型。',
      },
    ],
    keyFacts: [
      '当前接受名为 Archilochus colubris，归入雨燕目、蜂鸟科、北蜂鸟属；红玉喉北蜂鸟可作中文检索别名。',
      '成鸟雄鸟具有角度依赖的红宝石色虹彩喉斑，雌鸟没有完整红喉斑并在外侧尾羽带白端。',
      '体长约 7 至 9 厘米、体重约 2 至 6 克、翼展约 8 至 11 厘米，迁徙增脂使体重随阶段改变。',
      '花蜜提供能量，小型昆虫和蜘蛛提供育雏与换羽所需的动物性营养。',
      '部分个体跨越墨西哥湾，另一些沿湾岸迁徙，路线随年龄、天气、地点和燃料状态改变。',
      '雌鸟独自筑巢、孵卵和育幼；每窝 1 至 3 枚卵，孵化约 12 至 14 天，雏鸟在巢约 18 至 22 天。',
      'IUCN 2020 年全球评估为无危、趋势上升，区域监测采用不同地点和时间窗，需要分别解读。',
      '最新 USGS BBS 显示 1966 至 2025 北美繁殖区长期增长，但 2015 至 2025 十年窗口转为下降，时间尺度必须注明。',
      '在美国，本种受 Migratory Bird Treaty Act 保护，未经许可不得捕捉或持有鸟、巢与卵。',
    ],
    threats: [
      '玻璃反射造成的碰撞伤亡',
      '自由活动家猫在花源、喂食器和停栖处捕食',
      '繁殖地、迁徙停歇地和中美洲越冬生境的丧失与破碎化',
      '广谱农药暴露及小型昆虫、蜘蛛食物减少',
      '霉变、发酵、错误配方或位置不安全的人工喂食器',
      '迁徙生态屏障中的恶劣天气、燃料不足和连续花源缺口',
    ],
    conservationActions: [
      '保护并连接繁殖林缘、迁徙停歇地和中美洲越冬灌丛，维持全年度连续花源与昆虫食物',
      '种植本地管状花、保留灌木和落叶层，并采用综合虫害管理减少广谱农药',
      '在玻璃外侧设置覆盖整面、间距足够密集的防撞图案或物理屏障',
      '让家猫留在室内或受控活动，并使花源和喂食器远离猫的伏击点',
      '喂食器只使用一份白砂糖配四份水的透明溶液，按温度频繁更换并彻底清洁',
      '联合 BBS、eBird、持证环志和自动遥测监测繁殖趋势、迁徙路线、停歇资源与越冬连接',
    ],
    metrics: {
      adultLengthCm: [7, 9],
      adultMassKg: [0.002, 0.006],
      wingspanCm: [8, 11],
    },
    featuredStats: [
      {
        key: 'body-length',
        label: '体长',
        value: '7—9',
        unit: '厘米',
        note: 'Cornell 两性共同范围',
      },
      {
        key: 'body-mass',
        label: '体重',
        value: '2—6',
        unit: '克',
        note: '迁徙增脂、性别和时间会改变体重',
      },
      {
        key: 'incubation',
        label: '孵化期',
        value: '12—14',
        unit: '天',
        note: '由雌鸟独自孵卵',
      },
      {
        key: 'nestling-period',
        label: '雏鸟在巢',
        value: '18—22',
        unit: '天',
        note: '随天气、纬度与个体情况变化',
      },
    ],
    media: {
      image: './images/species/ruby-throated-hummingbird/01-iridescent-gorget-woodland-edge.webp',
      alt: '明亮林缘前，一只成鸟雄性红喉北蜂鸟停在画面右侧细枝上，红宝石色虹彩喉斑受侧光点亮，左侧保留开阔绿色背景',
      focalPoint: { x: 0.72, y: 0.48 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/ruby-throated-hummingbird/02-cardinal-flower-hover-feeding.webp',
          alt: '一只白喉、绿背且外侧尾羽带白端的雌性红喉北蜂鸟，悬停在一株红色北美半边莲的管状花前取食',
          title: '在管状花前精确悬停',
          caption: '花蜜供能，昆虫补充营养；画面里这只雌鸟的白喉，正是它与雄鸟的区别。',
          focalPoint: { x: 0.57, y: 0.49 },
        },
        {
          image: './images/species/ruby-throated-hummingbird/03-aerial-insect-foraging.webp',
          alt: '一只白喉红喉北蜂鸟在落叶林隙悬停，细长黑喙前方只有一只毫米级小飞虫',
          title: '花蜜之外的动物性食物',
          caption: '它们会在空中、叶面和蛛网附近捕捉小型昆虫与蜘蛛，动作快到肉眼几乎跟不上。',
          focalPoint: { x: 0.56, y: 0.47 },
        },
        {
          image: './images/species/ruby-throated-hummingbird/04-gulf-crossing-migration.webp',
          alt: '日出时的开阔墨西哥湾水面上，一只红喉北蜂鸟向前飞行，身体和短尾清晰而双翼带自然运动模糊',
          title: '跨湾只是可能路线之一',
          caption: '部分个体携着脂肪储备跨越开阔海湾，另一些沿海岸边飞边吃。',
          focalPoint: { x: 0.58, y: 0.45 },
        },
        {
          image: './images/species/ruby-throated-hummingbird/05-female-nestling-care.webp',
          alt: '一只白喉雌性红喉北蜂鸟悬停在细树枝上的地衣杯巢旁，巢中恰好两只羽毛初长的雏鸟张喙等待喂食',
          title: '雌鸟独自承担亲代照护',
          caption: '雌鸟独自筑巢、孵卵和育幼；雄鸟求偶交配后不参与筑巢、孵化或喂雏。',
          focalPoint: { x: 0.61, y: 0.56 },
        },
        {
          image: './images/species/ruby-throated-hummingbird/06-native-garden-monitoring.webp',
          alt: '本地管状花盛开的花园中，一只白喉红喉北蜂鸟在右侧花丛取食，一名观察者在左侧远处用双筒望远镜和笔记本记录',
          title: '把花源与长期观察连接起来',
          caption: '保留连续的本地花源，并采用一致的观察方法，有利于蜂鸟取食和季节监测。',
          focalPoint: { x: 0.66, y: 0.52 },
        },
      ],
    },
    sources: [
      ...RUBY_THROATED_HUMMINGBIRD_SOURCES,
      {
        title: '红喉北蜂鸟：科学描述与命名资料',
        url: 'https://www.gbif.org/species/5228514',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
      {
        title: '美国鸟类学会：红喉北蜂鸟原始命名记录',
        url: 'https://americanornithology.org/wp-content/uploads/2019/07/AOSChecklistPter-Apod.pdf',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: RUBY_THROATED_HUMMINGBIRD_CONTENT_DATE,
    updatedAt: RUBY_THROATED_HUMMINGBIRD_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
