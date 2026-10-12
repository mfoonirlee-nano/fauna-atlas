import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const MARINE_IGUANA_SOURCE_DATE = '2026-08-27' as const;

const MARINE_IGUANA_CONTENT_DATE = '2026-08-27' as const;

const MARINE_IGUANA_SOURCES = [
  {
    title: 'IUCN Red List — Amblyrhynchus cristatus (2019 assessment, published 2020)',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T1086A177552193.en',
    kind: 'conservation',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC Iguana Specialist Group — 2020 species and subspecies assessments',
    url: 'https://www.iucn-isg.org/publications/recent-red-list-assessments/',
    kind: 'conservation',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'The Reptile Database — Amblyrhynchus cristatus',
    url: 'https://reptile-database.reptarium.cz/Amblyrhynchus/cristatus',
    kind: 'taxonomy',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Miralles et al. 2017 — Integrative taxonomic revision of Galápagos marine iguanas',
    url: 'https://doi.org/10.1093/zoolinnean/zlx007',
    kind: 'taxonomy',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'CITES CoP20 Proposal 22 — Transfer Amblyrhynchus cristatus to Appendix I',
    url: 'https://cites.org/sites/default/files/documents/E-CoP20-Prop-22.pdf',
    kind: 'conservation',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Galápagos National Park — Emblematic species monitoring across 13 islands',
    url: 'https://galapagos.gob.ec/monitoreo-de-especies-emblematicas-de-galapagos-verifica-buen-estado-de-conservacion/',
    kind: 'distribution',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Galápagos National Park — Marine iguana nesting protection guidance',
    url: 'https://galapagos.gob.ec/iguanas-marinas-de-galapagos-iniciaron-su-proceso-de-anidacion/',
    kind: 'conservation',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Wikelski 2005 — Evolution of body size in Galápagos marine iguanas',
    url: 'https://doi.org/10.1098/rspb.2005.3205',
    kind: 'general',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Wikelski and Trillmich 1997 — Body size and sexual size dimorphism',
    url: 'https://doi.org/10.1111/j.1558-5646.1997.tb03673.x',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Wikelski and Trillmich 1994 — Ontogenetic foraging strategies',
    url: 'https://doi.org/10.1163/156853994X00280',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Buttemer and Dawson 1993 — Foraging and microhabitat use',
    url: 'https://doi.org/10.1007/BF00318031',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Shepherd and Hawkes 2005 — Algal preferences and seasonal foraging',
    url: 'https://media.migramar.org/uploads/archive/595.pdf',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Bartholomew 1966 — Field study of temperature relations',
    url: 'https://library.iucn-isg.org/documents/1966/Bartholomew_1966_Copeia.pdf',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Shoemaker and Nagy 1984 — Osmoregulation in the Galápagos marine iguana',
    url: 'https://doi.org/10.1086/physzool.57.3.30163717',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Wikelski and Wrege 2000 — Niche expansion, body size and survival',
    url: 'https://doi.org/10.1007/s004420050030',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Wikelski and Thom 2000 — Marine iguanas shrink to survive El Niño',
    url: 'https://doi.org/10.1038/47396',
    kind: 'ecology',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Wikelski et al. 2002 — Marine iguanas die from trace oil pollution',
    url: 'https://doi.org/10.1038/417607a',
    kind: 'conservation',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
  {
    title: 'Varela-Jaramillo et al. 2025 — Citizen-science counts from drone imagery',
    url: 'https://doi.org/10.1038/s41598-025-08381-9',
    kind: 'conservation',
    accessedAt: MARINE_IGUANA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-amblyrhynchus-cristatus',
    slug: 'marine-iguana',
    names: {
      zh: '海鬣蜥',
      en: 'Marine Iguana',
      aliases: ['加拉帕戈斯海鬣蜥', '海洋鬣蜥', '钝鼻蜥'],
    },
    scientificName: 'Amblyrhynchus cristatus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Reptilia', '爬行纲'),
      taxon('Squamata', '有鳞目'),
      taxon('Iguanidae', '美洲鬣蜥科'),
      taxon('Amblyrhynchus', '海鬣蜥属'),
    ),
    conservation: conservation('VU', 'decreasing', 2019, 'A2abce+4abce'),
    distribution: {
      realms: ['marine', 'terrestrial'],
      continents: ['南美洲'],
      regions: ['加拉帕戈斯群岛', '东太平洋'],
      countries: ['厄瓜多尔'],
      endemicTo: ['加拉帕戈斯群岛'],
      range:
        '仅自然分布于厄瓜多尔加拉帕戈斯群岛，从 Española、Fernandina、Isabela、Santa Cruz 等大岛到 Darwin、Wolf、Roca Redonda 及众多近岸小岛的适宜海岸。各岛群体高度结构化，不能把一次调查覆盖的岛屿数当作完整分布岛数。',
      center: { lat: -0.65, lng: -90.55 },
    },
    habitats: [
      {
        name: '岩石潮间带与浪洗熔岩岸',
        realm: 'marine',
        description:
          '多数个体在白昼低潮暴露或浅水覆盖的岩面啃食短草皮状红绿藻，并用长爪抵抗海浪。',
        isPrimary: true,
      },
      {
        name: '浅海亚潮带岩礁与藻床',
        realm: 'marine',
        description:
          '各群落中体型最大的个体可游离岸边，在约2 至 30米深的岩礁藻床取食；这不是所有年龄和性别的常规策略。',
      },
      {
        name: '海岸熔岩、干旱灌丛与沙质巢地',
        realm: 'terrestrial',
        description:
          '个体在海岸岩面晒太阳、群聚休息和繁殖；雌性会进入岸后沙地或疏松土壤挖巢。',
      },
    ],
    measurements: {
      length: {
        max: 1.3,
        unit: 'm',
        note: '大型雄性约值；体型随岛屿、性别和食物条件显著变化，不是普通成体统一上限。',
      },
      weight: {
        max: 12,
        unit: 'kg',
        note: '群岛研究中的岛屿最大雄性体重；赫诺韦萨等岛的最大雄性约0.9千克。',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: [
        'Centroceras 等红藻',
        'Gelidium 等红藻',
        'Pterocladia 等红藻',
        'Ulva 等绿藻',
      ],
      description:
        '几乎全以岩石潮间带和亚潮带的大型海藻为食，常优先选择营养较高的红藻；低潮条件不利时会增加可触及绿藻。北西摩有局地群体补食 Batis 海滨植物，但不能代表全种能靠陆生植物度过厄尔尼诺。',
    },
    activity: [
      '昼行',
      '低潮取食',
      '晒太阳调温',
      '多数潮间带取食、最大个体可潜水',
      '群聚休息',
      '繁殖期展示场交配',
    ],
    tags: [
      '加拉帕戈斯特有种',
      'IUCN 易危',
      '唯一海中取食的现生蜥蜴',
      '海藻食者',
      '11个亚种',
      'CITES 附录 I',
    ],
    summary: '只生活在加拉帕戈斯、用侧扁长尾潜入冷海啃藻，再回到火山岩上晒热身体的海洋蜥蜴。',
    description:
      '海鬣蜥把陆地与海洋连成一个生活周期：它在黑色熔岩岸休息、调温和繁殖，在低潮岩面或浅海藻床取食。短钝吻、长爪和侧扁尾分别帮助啃藻、抓岩与游泳，鼻盐腺排出随食物和海水摄入的电解质。不同岛屿的最大雄性体重相差超过十倍，11个亚种也承受不同程度的局地风险。IUCN全种评估为2019年易危且下降；厄尔尼诺导致的藻类更替、外来捕食者、油污、巢地干扰和非法贸易要求保护者按岛监测并采取行动。',
    storySections: [
      {
        key: 'volcanic-shore',
        label: '外形与生境',
        title: '生活在陆地，食物来自海里',
        body: '短钝吻贴近岩面，长爪扣住黑色熔岩，侧扁尾从低矮背棘后延伸。海鬣蜥在陆上休息、交配和产卵，却把食物来源放在潮间带与浅海；它是现生蜥蜴中唯一以海中取食为常规生活方式的物种。',
      },
      {
        key: 'low-tide-table',
        label: '潮汐与食性',
        title: '低潮时在暴露岩面啃藻',
        body: '多数海鬣蜥不必深潜。白昼低潮露出浪洗岩面后，小型个体迅速啃食红藻；潮位偏高、优选红藻仍在水下时，它们会更多利用可触及的绿藻 Ulva。潮汐、日照和海藻可达性共同安排每次取食。',
      },
      {
        key: 'cold-water-dive',
        label: '潜水与体温',
        title: '较大个体可潜入冷水取食',
        body: '各群落最大的个体更常游向亚潮带，用侧扁尾推进，再以长爪抓牢岩礁啃藻。最大取食深度记录约30米；多数个体留在潮间带，出水个体则伏在日照熔岩上，把冷海带走的热量补回来。',
      },
      {
        key: 'nasal-salt',
        label: '生理适应',
        title: '鼻盐腺排出多余盐分',
        body: '海藻和误吞海水带来高盐负担。鼻盐腺把浓缩电解质送到鼻腔，海鬣蜥再以短促喷气排出液滴。水分蒸发后，头顶和吻部留下白色盐晶。',
      },
      {
        key: 'enso-shrinkage',
        label: '气候与生存',
        title: '厄尔尼诺让大身体变成负担',
        body: '强厄尔尼诺让暖水压低营养盐上涌，可食红绿藻随之衰退。1997 至 1998年研究中，部分成体吻肛长可逆缩短最多约20%，缩得较多者存活更久；这种缓冲能力仍无法消除连续暖水事件的种群风险。',
      },
      {
        key: 'island-by-island',
        label: '繁殖与保护',
        title: '按岛屿监测和保护种群',
        body: '雌性离开岩岸到沙土中挖巢，部分巢区紧邻居民点和步道。一个物种包含11个岛屿亚种，风险从易危到极危；围护巢地、管理宠物和外来捕食者、防止油污与塑料、执行2026年生效的CITES附录I，还要用重复调查补齐每个群体的数量基线。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1825 年的海鬣蜥命名记录',
        body: 'Bell 于 1825 年命名海鬣蜥，现用学名为 Amblyrhynchus cristatus。中文名“海”对应它在潮间带和浅海啃食藻类的习性，休息、交配和产卵仍在陆地。加拉帕戈斯各岛种群的体型、颜色和遗传结构不同，现行分类承认 11 个亚种。',
      },
    ],
    keyFacts: [
      '当前接受名为Amblyrhynchus cristatus，归入有鳞目、美洲鬣蜥科、海鬣蜥属；该属只有这一个现生种。',
      'Miralles 2017与The Reptile Database接受11个亚种；旧名A. c. albemarlensis已并入A. c. cristatus。',
      '海鬣蜥只自然分布于厄瓜多尔加拉帕戈斯群岛，在海中取食，却在陆地休息、调温和繁殖。',
      '现生蜥蜴中只有海鬣蜥把海中取食作为常规生活方式；多数个体仍在潮间带而非深水觅食。',
      '短钝吻啃食岩面短藻，长爪抓住浪洗岩石，侧扁长尾推进游泳；四肢不是鳍。',
      '食物几乎全是附着红绿藻；北西摩局地补食海滨植物的记录不能代表全种食性。',
      '最大取食深度约30米是IUCN汇总极值，不是每只个体的日常潜深。',
      '鼻盐腺承担大部分摄入电解质的排出，鼻孔喷出的液滴干后形成白色盐晶。',
      '各岛最大雄性体重约0.9 至 12千克；这组岛屿极值跨度不是普通成体范围。',
      '1997 至 1998年强厄尔尼诺期间，部分成体吻肛长可逆缩短最多约20%；该记录不适用于每次事件或每只个体。',
      'IUCN 在 2019 年按 A2abce+4abce 将全种评为易危，趋势下降；部分亚种的濒危或极危等级适用于相应亚种。',
      '2026年3月5日起生效的CITES附录I是国际贸易法律状态，不改变IUCN全种VU等级。',
      '国家公园一次13岛33点位调查记录27,758只，管理方明确说明它只代表抽样，不是全群岛总数。',
      'Jessica号油污后圣菲研究群体一年内死亡62%，这个局地事件比例不能外推到其他群体或污染事件。',
    ],
    threats: [
      '厄尔尼诺和气候变化引起的海温升高、上涌减弱与海藻更替',
      '猫、犬、猪和鼠等外来捕食者及居民宠物干扰',
      '燃油泄漏、塑料和其他海洋污染',
      '巢地、晒背岸线和潮间带受到建设、车辆、踩踏与游客近距干扰',
      '岛际交通带来的新外来种和病原体风险',
      '非法捕捉和国际宠物贸易',
      '狭域亚种的小种群、隔离和监测缺口',
    ],
    conservationActions: [
      '按11个亚种和岛屿群体开展数量、年龄结构、体况、疾病与污染监测',
      '清除或控制外来捕食者，管理宠物并强化港口、机场和岛际生物安全',
      '保护潮间带藻场、亚潮带岩礁、晒背岸线和沙质巢地之间的连续生境',
      '繁殖季围护巢区、临时关闭高风险步道并限制车辆和踩踏',
      '加强燃油泄漏预防与快速响应，清理塑料和遗失渔具',
      '监测海温、上涌与藻类群落，识别厄尔尼诺避难群体',
      '执行CITES附录I和厄瓜多尔禁捕规定，调查来源可疑活体',
    ],
    metrics: {
      maxDiveDepthM: 30,
    },
    featuredStats: [
      {
        key: 'recognized-subspecies',
        label: '当前接受亚种',
        value: '11',
        unit: '个',
        note: 'Miralles 2017与The Reptile Database；不是11个物种。',
      },
      {
        key: 'island-male-mass',
        label: '各岛最大雄性体重',
        value: '0.9—12',
        unit: '千克',
        note: '群岛研究的岛屿最大值跨度，不是普通成体范围。',
      },
      {
        key: 'foraging-depth',
        label: '最大取食深度',
        value: '30',
        unit: '米',
        note: 'IUCN汇总极值；多数个体在潮间带取食。',
      },
      {
        key: 'enso-shrinkage',
        label: '强厄尔尼诺最大缩短',
        value: '约20%',
        note: '1997 至 1998年部分成体吻肛长，可逆且不代表每只个体。',
      },
    ],
    media: {
      image: './images/species/marine-iguana/01-black-lava-adult-cover.webp',
      alt: '加拉帕戈斯黑色玄武岩海岸上只有一只完整灰黑成年雄性海鬣蜥，短钝吻、颗粒鳞、连续背棘、长爪和完整尾尖清楚，主体位于右侧并面向开阔海面',
      focalPoint: { x: 0.7, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/marine-iguana/02-flattened-tail-swimming.webp',
          alt: '清澈浅海中只有一只完整成年海鬣蜥从右向左游过玄武岩礁，四肢贴近躯干，长尾呈上下较深的侧扁桨状轮廓',
          title: '侧扁长尾承担水下推进',
          caption:
            '游姿重建展示尾部推进与贴体四肢；画面不能提供潜水深度、持续时间或这只个体的体型等级。',
          focalPoint: { x: 0.5, y: 0.56 },
        },
        {
          image: './images/species/marine-iguana/03-volcanic-intertidal-habitat.webp',
          alt: '低潮时的黑色熔岩岸连接干燥晒背岩台、浪溅带、潮池和近岸海水，一只完整灰黑海鬣蜥伏在岩台上，湿岩覆盖薄层红绿藻',
          title: '一条岸线连接三类生境',
          caption:
            '环境重建同时呈现晒背处、潮间带短藻与浅海；它不代表指定岛屿、藻类覆盖率或调查点位。',
          focalPoint: { x: 0.31, y: 0.48 },
        },
        {
          image: './images/species/marine-iguana/04-underwater-algae-grazing.webp',
          alt: '浅海玄武岩礁上只有一只完整成年海鬣蜥，强壮长爪抓紧岩面，短钝吻贴近自然低矮红绿藻膜刮食，侧扁长尾完整',
          title: '长爪固定身体，钝吻刮取短藻',
          caption:
            '画面重建一次水下刮食动作；它不能确认藻类物种、摄入量、潜深或取食结果。',
          focalPoint: { x: 0.51, y: 0.58 },
        },
        {
          image: './images/species/marine-iguana/05-sandy-nest-burrow-female.webp',
          alt: '远离潮线的浅色火山沙地上只有一只完整成年雌性海鬣蜥，她在一个窄巢洞旁扬起松沙，画面没有可见卵、幼体或其他动物',
          title: '离开熔岩岸进入沙地挖巢',
          caption:
            '画面只保留一个挖洞瞬间；它不提供窝卵数、巢深、孵化期或繁殖结果。',
          focalPoint: { x: 0.49, y: 0.56 },
        },
        {
          image: './images/species/marine-iguana/06-distance-shoreline-census.webp',
          alt: '黑色熔岩岸前景只有一只完整海鬣蜥伏卧，远处只有一名观察员用双筒望远镜和记录板进行目视计数，人与动物没有接触',
          title: '保持距离的岸线目视计数',
          caption:
            '这是非接触监测的代表性重建，不对应真实调查、设备、地点、个体、数量或监测结果。',
          focalPoint: { x: 0.42, y: 0.68 },
        },
      ],
    },
    sources: [
      ...MARINE_IGUANA_SOURCES,
      {
        title: 'GBIF: Amblyrhynchus cristatus Bell, 1825 nomenclatural record',
        url: 'https://www.gbif.org/species/5224602',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: MARINE_IGUANA_CONTENT_DATE,
    updatedAt: MARINE_IGUANA_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
