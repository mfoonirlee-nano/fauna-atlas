import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const GREEN_SEA_TURTLE_SOURCE_DATE = '2026-08-21' as const;

const GREEN_SEA_TURTLE_CONTENT_DATE = '2026-08-21' as const;

const GREEN_SEA_TURTLE_SOURCES = [
  {
    title: 'The Reptile Database — Chelonia mydas (Linnaeus, 1758)',
    url: 'https://reptile-database.reptarium.cz/Chelonia/mydas',
    kind: 'taxonomy',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Chelonia mydas global assessment (2025)',
    url: 'https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T4615A285108125.en',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN 2025 Red List update — Green sea turtle rebounds through conservation',
    url: 'https://iucn.org/press-release/202510/arctic-seals-threatened-climate-change-birds-decline-globally-iucn-red-list',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Chelonia mydas, amended version of the 2004 assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T4615A247654386.en',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN-SSC Marine Turtle Specialist Group — Red List assessments',
    url: 'https://www.iucn-mtsg.org/statuses',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'MTSG Green Turtle Red List working group 2026 — Conservation status of 11 RMUs',
    url: 'https://www.seaturtlestatus.org/articles/conservation-status-of-green-turtle-populations-worldwide',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Green Turtle (updated 13 July 2026)',
    url: 'https://www.fisheries.noaa.gov/species/green-turtle',
    kind: 'general',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Wallace et al. 2023 — Updated global Regional Management Unit framework',
    url: 'https://doi.org/10.3354/esr01243',
    kind: 'distribution',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Wallace et al. 2025 — Updated global conservation status and priorities for marine turtles',
    url: 'https://doi.org/10.3354/esr01385',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Restrepo et al. 2026 — Global migratory connectivity of green turtles',
    url: 'https://doi.org/10.1111/ddi.70196',
    kind: 'distribution',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Reich, Bjorndal & Bolten 2007 — The lost years of green turtles',
    url: 'https://doi.org/10.1098/rsbl.2007.0394',
    kind: 'ecology',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Rice & Balazs 2008 — Diving during Hawaiian green turtle migrations',
    url: 'https://doi.org/10.1016/j.jembe.2007.12.010',
    kind: 'ecology',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Hazel, Lawler & Hamann 2009 — Near-shore green turtle diving behaviour',
    url: 'https://doi.org/10.1016/j.jembe.2009.01.007',
    kind: 'ecology',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Gulick et al. 2021 — Compensatory seagrass growth under cultivation grazing',
    url: 'https://doi.org/10.1111/1365-2745.13718',
    kind: 'ecology',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Okuyama et al. 2026 — Intensive grazing, seagrass depletion and constrained turtle growth',
    url: 'https://doi.org/10.1038/s41598-026-49615-8',
    kind: 'ecology',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Turtle Excluder Devices (updated 18 June 2026)',
    url: 'https://www.fisheries.noaa.gov/southeast/bycatch/turtle-excluder-devices',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'CMS — Appendices I and II effective 27 June 2026',
    url: 'https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局、农业农村部 — 国家重点保护野生动物名录（2021年第3号）',
    url: 'https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: '台湾海洋保育署 — 绿蠵龟物种资料',
    url: 'https://www.oca.gov.tw/ch/home.jsp?dataserno=202103170001&id=289&mcustomize=ocamaritime_view.jsp&parentpath=0%2C5',
    kind: 'general',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-chelonia-mydas',
    slug: 'green-sea-turtle',
    names: {
      zh: '绿海龟',
      en: 'Green Turtle',
      aliases: ['绿蠵龟', '青海龟'],
    },
    scientificName: 'Chelonia mydas',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Reptilia', '爬行纲'),
      taxon('Testudines', '龟鳖目'),
      taxon('Cheloniidae', '海龟科'),
      taxon('Chelonia', '绿海龟属'),
    ),
    conservation: conservation('LC', 'increasing', 2025),
    distribution: {
      realms: ['marine', 'terrestrial'],
      continents: ['亚洲', '非洲', '欧洲', '北美洲', '南美洲', '大洋洲'],
      regions: [
        '热带与亚热带大西洋及加勒比海',
        '地中海',
        '印度洋与红海',
        '东太平洋、中太平洋与西太平洋',
        '开放海洋表层汇聚带',
        '全球暖水海岸的觅食地与繁殖海滩',
      ],
      countries: [
        '中国',
        '日本',
        '印度',
        '印度尼西亚',
        '马来西亚',
        '阿曼',
        '土耳其',
        '塞浦路斯',
        '希腊',
        '澳大利亚',
        '巴布亚新几内亚',
        '美国',
        '墨西哥',
        '哥斯达黎加',
        '厄瓜多尔',
        '巴西',
        '委内瑞拉',
        '南非',
        '莫桑比克',
        '塞舌尔',
      ],
      range:
        '广布于大西洋、太平洋、印度洋和地中海的热带、亚热带及部分温带水域，在80多个国家筑巢并使用140多个国家的沿岸水域；幼体利用开放海洋表层漂流带，大幼体和成体多在浅海觅食，再沿跨国迁徙通道往返觅食地与繁殖海滩。所列国家仅为代表，完整范围与迷游记录远多于此。',
    },
    habitats: [
      {
        name: '浅海海草床、藻场、潟湖与礁缘',
        realm: 'marine',
        description:
          '大幼龟和成龟的主要觅食、生长与休息环境；食物可由海草、大型藻类和少量动物性食物组成，组成随种群与地点变化。',
        isPrimary: true,
      },
      {
        name: '开放海洋表层汇聚带与漂浮马尾藻群落',
        realm: 'marine',
        description:
          '出巢后的早期幼体在此生活数年，借漂流带获得遮蔽并摄食附生及漂浮生物，随后才转入近岸。',
      },
      {
        name: '跨国迁徙走廊与水下休息水域',
        realm: 'marine',
        description:
          '成熟个体往返觅食场与繁殖区，路线可从局地定居到超过5000千米，并跨越国家管辖区和部分RMU边界。',
      },
      {
        name: '热带与亚热带沙质繁殖海滩',
        realm: 'terrestrial',
        description:
          '雌龟夜间在高潮线以上挖巢，卵在沙中孵化；黑暗、可挖掘且不易淹水的海滩与天然海向地平线对成功繁殖关键。',
      },
    ],
    measurements: {
      length: {
        min: 91,
        max: 122,
        unit: 'cm',
        note: 'NOAA成体3—4英尺展示范围的四舍五入换算；全球最大的个体比这更长。',
      },
      weight: {
        min: 113,
        max: 181,
        unit: 'kg',
        note: 'NOAA Quick Facts成体250—400磅展示范围的四舍五入换算。',
      },
    },
    diet: {
      types: ['herbivore', 'omnivore'],
      foods: [
        '海草',
        '大型藻类',
        '漂浮马尾藻与附生生物',
        '海绵及其他小型无脊椎动物',
        '部分地区可获得的动物性食物',
      ],
      description:
        '食性随发育阶段与种群改变：早期幼体在开放海洋中偏肉食或杂食，许多大幼龟和成龟转入浅海后以海草和藻类为主；东太平洋等地可保留较多动物性食物。',
    },
    activity: ['昼夜活动随阶段而变', '远距离洄游', '潜水取食与休息', '单独活动为主', '雌龟夜间上岸筑巢'],
    tags: ['海龟', '海洋爬行动物', '巨型草食动物', '跨洋洄游', '海草床', '温度依赖型性别决定', '全球恢复不均'],
    summary: '绿海龟是体型最大的硬壳海龟，广布全球暖水海洋。成体多吃海草和藻类，会在觅食地与出生海滩所在区域之间迁徙。',
    description:
      '绿海龟的甲通常是褐、灰或橄榄色，名字来自绿色脂肪。幼体先在开放海洋的漂流带生活，许多个体随后转入浅海草床和藻场，用带细锯齿的短喙剪食植物。成熟个体常沿跨国通道迁往繁殖区，雌龟回到出生海滩所在区域产卵。IUCN 在 2025 年把全球状态从濒危更新为无危、趋势上升，纳入评估的筑巢量自 1970 年代总体增加约 28%。十一个区域管理单元中仍有濒危、易危和近危种群，部分地方数量继续下降。',
    storySections: [
      {
        key: 'identity',
        label: '辨识',
        title: '绿色藏在脂肪里',
        body: '成体有平滑的褐、灰或橄榄色斑驳硬壳，中线五枚椎盾，两侧各四枚肋盾。头相对小，两眼间只有一对大型额前鳞，短圆喙的切缘有细锯齿。名称中的绿色指皮下脂肪的颜色。',
      },
      {
        key: 'life-stages',
        label: '成长',
        title: '从马尾藻漂流带转入浅海草床',
        body: '刚出巢的幼龟先游向开放海洋，在表层汇聚带和漂浮马尾藻附近生活数年。北大西洋样本显示，早期约三至五年偏肉食。较大幼龟随后转入浅海，许多个体逐渐以海草和藻类为主，因此成体食性不能概括它们整个一生。',
      },
      {
        key: 'grazing',
        label: '生态',
        title: '巨型草食动物会重塑海草床',
        body: '反复剪食会形成草斑，在部分加勒比海草床中能促进补偿生长，影响取决于龟的密度和草床恢复力。2026 年久米岛研究显示，高密度持续啃食也能耗竭孤立草床，进一步限制龟的体况和生长。保护行动需要同时维护龟与海草床。',
      },
      {
        key: 'migration-diving',
        label: '迁徙与潜水',
        title: '浅水活动与迁徙中的深潜',
        body: '近岸研究中的绿海龟有八成以上时间处在极浅水，另一项只有三只夏威夷成龟的迁徙研究却记录到夜间深潜，其中一只雌龟两次超过135米。全球路线也从定居到超过5000千米都有；它们用肺呼吸，必须浮到水面换气。',
      },
      {
        key: 'nesting',
        label: '繁殖',
        title: '几十年后，雌龟回到出生海滩所在区域',
        body: '雌龟约二十五至三十五岁成熟，通常每二至五年进行繁殖迁徙；一个筑巢季可每隔约两周再产一巢，每巢约一百一十枚卵、孵化约两个月。沙温影响幼龟性别与存活，黑暗海滩、可挖干沙和天然海向地平线共同决定下一代能否入海。',
      },
      {
        key: 'uneven-recovery',
        label: '保护',
        title: '全球恢复与地方下降',
        body: '2025年全球评估为LC且上升，但四个RMU仍下降，中南太平洋为EN，东太平洋与北印度洋为VU。保护筑巢雌龟和卵、减少捕杀与贸易、使用合适兼捕缓解装置、维护黑暗海滩及浅海觅食地带来了恢复；这些措施一旦中断，区域成果仍可逆转。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: 'Testudo mydas 与绿色脂肪',
        body: '林奈在 1758 年使用 Testudo mydas 描述绿海龟，后来归入绿海龟属，学名成为 Chelonia mydas。中文与英文俗名中的“绿”来自皮下绿色脂肪，成体背甲通常呈褐、灰或橄榄色。核对名字与颜色时，甲色并不是判断它身份的唯一依据。',
      },
    ],
    keyFacts: [
      '当前接受名为Chelonia mydas，归入龟鳖目、海龟科、绿海龟属；近年的分类口径通常不承认亚种。',
      '成体背甲通常褐、灰或橄榄斑驳；中线5枚椎盾、两侧各4枚肋盾，头小且两眼间有一对大型额前鳞。',
      'NOAA成体展示范围约长91 至 122厘米、重113 至 181千克；全球最大的个体比这更大。',
      '寿命未知、估计70年或更长；雌龟常约25 至 35岁成熟，成熟速度随种群与生长条件改变。',
      '早期幼体利用开放海洋漂流带并偏肉食或杂食，许多大幼龟和成龟转入浅海后以海草和藻类为主。',
      '全球迁徙连接从局地定居到超过5000千米都有，大多数已整理路线跨越国家管辖区。',
      '一只迁徙雌龟曾两次潜到超过135米，近岸样本却有89%、100%的时间待在5米之内；深潜是插曲，浅水是日常。',
      '每巢约110枚卵、孵化约两个月；较高沙温通常产生更多雌性，极端温度和淹水会降低孵化成功。',
      'IUCN 在 2025 年将全球等级评为无危，趋势上升；2023 年记录只是 2004 年濒危 A2bd 评估的修订版。',
      '全球纳入评估的筑巢量自1970年代约增加28%，但4/11 RMU仍下降，中南太平洋RMU仍为EN。',
      '在中国，绿海龟是国家一级保护野生动物；IUCN 评级之外，国内与国际的法律保护照旧生效。',
    ],
    threats: [
      '拖网、刺网、延绳钓、钩线及笼具造成的兼捕、溺亡、吞钩和缠绕',
      '为肉、脂肪、卵及贸易进行的直接捕杀和不可持续采集',
      '滨海开发、硬质护岸、采砂、车辆和人工照明造成的繁殖海滩丧失与退化',
      '疏浚、污染、富营养化、锚泊和沿海工程造成的海草床、藻场及礁缘退化',
      '海滩升温、海平面上升、侵蚀、盐水入侵和风暴对巢、性别比及幼龟产出的影响',
      '港口、航道、入口和近岸水面换气区的船只撞击',
      '塑料、气球、油污、钓线和遗失渔具的误食或缠绕',
      '纤维乳头瘤病等具有地域差异的疾病压力',
    ],
    conservationActions: [
      '保护筑巢雌龟、卵、天然沙丘和高潮线以上干沙，限制车辆、硬质护岸与不当海滩工程',
      '关闭、遮蔽或定向管理海滩可见光源，维持母龟上岸和幼龟朝海所需的黑暗地平线',
      '与社区合作减少不可持续捕杀和卵采集，执行国内保护、CITES贸易管制与跨境协作',
      '在适用拖网渔业正确安装和维护TED，并结合圆形钩、网具改造、时空关闭与安全放生流程减少兼捕',
      '保护和恢复海草床、藻场、潟湖、礁缘、休息水域及跨国家迁徙连接',
      '在近岸热点实施船只减速、瞭望与避让，清除遗失渔具、钓线、塑料并响应搁浅个体',
      '按11个RMU维持长期一致的筑巢、海上丰度、遗传、标记重捕、遥测和威胁监测',
      '补足雄龟、幼龟和非繁殖地样本，并在恢复后的高密度觅食场同步监测草床承载力与龟体况',
    ],
    metrics: {
      adultLengthCm: [91, 122],
      adultMassKg: [113, 181],
    },
    featuredStats: [
      {
        key: 'adult-length',
        label: '成体长度',
        value: '91—122',
        unit: '厘米',
        note: 'NOAA 3 至 4英尺展示范围的换算；全球最大甲长超出此列',
      },
      {
        key: 'adult-mass',
        label: '成体质量',
        value: '113—181',
        unit: '千克',
        note: 'NOAA 250 至 400磅展示范围的换算',
      },
      {
        key: 'recorded-dive',
        label: '记录潜深',
        value: '>135',
        unit: '米',
        note: '仅一只迁徙雌龟的两次记录；日常潜深要浅得多',
      },
      {
        key: 'eggs-per-nest',
        label: '每巢卵数',
        value: '约110',
        unit: '枚',
        note: '典型近似值，随地区、季节与个体变化',
      },
    ],
    media: {
      image: './images/species/green-sea-turtle/01-seagrass-meadow-grazing.webp',
      alt: '一只褐橄榄斑驳硬壳的成体绿海龟在清澈浅海草床低头取食，身体位于画面右侧，左侧保留宽阔安静的蓝绿水体与低矮草床',
      focalPoint: { x: 0.72, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/green-sea-turtle/02-serrated-beak-grazing.webp',
          alt: '一只成体绿海龟在浅海草床剪食一小束海草，近距离侧面清楚显示相对小的头、两眼间一对大型额前鳞和无牙的短圆喙',
          title: '锯齿状短喙剪食海草',
          caption: '短圆喙的细锯齿切缘适合剪断海草；名字里的那抹绿，藏在皮下的脂肪里。',
          focalPoint: { x: 0.60, y: 0.49 },
        },
        {
          image: './images/species/green-sea-turtle/03-pelagic-juvenile-sargassum.webp',
          alt: '一只小型幼年绿海龟在开放海洋表层游过天然漂浮马尾藻下方，周围是宽阔深蓝水体且没有海底草床',
          title: '漂浮马尾藻下的早期海洋阶段',
          caption: '幼龟先在开放海洋表层汇聚带生活数年，之后许多个体才转入浅海觅食地并改变食性。',
          focalPoint: { x: 0.57, y: 0.57 },
        },
        {
          image: './images/species/green-sea-turtle/04-ocean-migration-surface-breath.webp',
          alt: '一只成体绿海龟在开阔海洋的空气与海水界面换气，鼻孔和头顶刚越过水面，褐色硬壳与四个鳍肢仍在蓝色水下',
          title: '迁徙途中浮到水面换气',
          caption: '绿海龟用肺呼吸，迁徙途中也得浮出水面换气；一条路线跨过多国海域，每只龟各有各的走法。',
          focalPoint: { x: 0.62, y: 0.58 },
        },
        {
          image: './images/species/green-sea-turtle/05-night-nest-covering.webp',
          alt: '星光下的黑暗沙滩上，一只短尾雌性绿海龟用后鳍肢把沙扫回已经产完卵的巢室，卵全部埋藏且海面位于远处',
          title: '雌龟在夜间覆盖巢室',
          caption: '产卵后，雌龟用后鳍肢回填沙土并扫平巢位，再返回海中。',
          focalPoint: { x: 0.59, y: 0.57 },
        },
        {
          image: './images/species/green-sea-turtle/06-dark-beach-hatchling-monitoring.webp',
          alt: '三只深色白边的绿海龟幼龟在黑暗海滩朝开放海面地平线爬行，远处一名监测员仅用遮蔽暗红光记录且没有触碰幼龟',
          title: '黑暗海滩上的远距监测',
          caption: '幼龟根据天然海向地平线的亮度入海，监测人员在远处使用受控红光记录，减少照明干扰。',
          focalPoint: { x: 0.56, y: 0.61 },
        },
      ],
    },
    sources: GREEN_SEA_TURTLE_SOURCES,
    featured: true,
    publishedAt: GREEN_SEA_TURTLE_CONTENT_DATE,
    updatedAt: GREEN_SEA_TURTLE_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
