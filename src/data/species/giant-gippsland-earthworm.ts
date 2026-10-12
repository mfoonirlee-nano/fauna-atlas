import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE = '2026-08-29' as const;

const GIANT_GIPPSLAND_EARTHWORM_CONTENT_DATE = '2026-08-29' as const;

const GIANT_GIPPSLAND_EARTHWORM_SOURCES = [
  {
    title: 'Australian Faunal Directory: Megascolides australis McCoy, 1878',
    url: 'https://biodiversity.org.au/afd/taxa/Megascolides_australis',
    kind: 'taxonomy',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Megascolides australis, EN B1ab(iii)+2ab(iii)',
    url: 'https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T13008A21416160.en',
    kind: 'conservation',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List version 2014.3, Table 7: species changing status',
    url: 'https://cmsdocs.s3.amazonaws.com/summarystats/2014_3_Summary_Stats_Page_Documents/2014_3_RL_Stats_Table_7.pdf',
    kind: 'conservation',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'DCCEEW: Giant Gippsland earthworm priority species profile',
    url: 'https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/giant-gippsland-earthworm',
    kind: 'conservation',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'DCCEEW 2010: National Recovery Plan for the Giant Gippsland Earthworm',
    url: 'https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf',
    kind: 'conservation',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'DEECA: Giant Gippsland Earthworm Action Statement, Taxon ID 15004',
    url: 'https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/actionstmts/Giant_Gippsland_Earthworm_AS_15004.pdf',
    kind: 'conservation',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'DEECA 2021: Threatened Species Assessment for Megascolides australis',
    url: 'https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/species_assessments/Megascolides_australis_15004.pdf',
    kind: 'conservation',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'DEECA 2024: Giant Gippsland Earthworm Species Forecast Report',
    url: 'https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/forecast/15004_Giant_Gippsland_Earthworm_SpeciesReport.html',
    kind: 'distribution',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'Museums Victoria: Megascolides australis, Giant Gippsland Earthworm',
    url: 'https://collections.museumsvictoria.com.au/species/14381',
    kind: 'general',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'Van Praagh 1992: The biology and conservation of the Giant Gippsland Earthworm',
    url: 'https://doi.org/10.1016/0038-0717(92)90119-I',
    kind: 'ecology',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'Van Praagh 1995: Reproductive biology of Megascolides australis',
    url: 'https://doi.org/10.1071/ZO9950489',
    kind: 'ecology',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'Van Praagh, Hinkley and Sargeant 2002: Giant Gippsland Earthworm population at Loch Hill',
    url: 'https://doi.org/10.24199/j.mvsr.2002.02',
    kind: 'distribution',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'Van Praagh 1997: Conservation of native earthworms and the Giant Gippsland Earthworm as a flagship taxon',
    url: 'https://doi.org/10.24199/j.mmv.1997.56.56',
    kind: 'general',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'Museums Victoria Science Report No. 4: field survey and gurgle detection',
    url: 'https://museumsvictoria.com.au/media/6153/mv-science-reports-4.pdf',
    kind: 'ecology',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'DCCEEW and TERN: Literature review of monitoring methods for the Giant Gippsland Earthworm',
    url: 'https://emsa.tern.org.au/document/download/116/3fd75f22-79b2-4eba-99f5-ac6870f34755/124',
    kind: 'conservation',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'Museums Victoria: specimen F 40135 Megascolides australis syntype',
    url: 'https://collections.museumsvictoria.com.au/specimens/646181',
    kind: 'taxonomy',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'Australian Museum: Australian earthworms',
    url: 'https://australian.museum/learn/animals/worms/australian-earthworms/',
    kind: 'general',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'South Gippsland Planning Scheme: Giant Gippsland Earthworm habitat and conservation significance',
    url: 'https://planning-schemes.app.planning.vic.gov.au/South%20Gippsland/histories/VC271/ordinance/18527641',
    kind: 'ecology',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-megascolides-australis',
    slug: 'giant-gippsland-earthworm',
    names: {
      zh: '巨蚯蚓',
      en: 'Giant Gippsland Earthworm',
      aliases: [
        '吉普斯兰大蚯蚓',
        '吉普斯兰巨蚯蚓',
        '澳洲巨型蚯蚓',
        'Gippsland Giant Earthworm',
        'GGE',
      ],
    },
    scientificName: 'Megascolides australis',
    taxonomy: animalTaxonomy(
      taxon('Annelida', '环节动物门'),
      taxon('Clitellata', '环带纲'),
      taxon('Crassiclitellata', '厚环带目'),
      taxon('Megascolecidae', '巨蚓科'),
      taxon('Megascolides', '巨蚓属'),
    ),
    conservation: conservation('EN', 'unknown', 2013, 'B1ab(iii)+2ab(iii)'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['大洋洲'],
      regions: [
        '澳大利亚维多利亚州南部与西部吉普斯兰',
        '巴斯河谷与西斯特泽莱茨基山脉',
        'Warragul、Loch、Korumburra、Kernot与Mount Worth之间的破碎黏土斑块',
      ],
      countries: ['澳大利亚'],
      endemicTo: ['澳大利亚维多利亚州南部和西部吉普斯兰'],
      range:
        '澳大利亚维多利亚州特有，确认范围局限在南部和西部吉普斯兰的巴斯河谷与西斯特泽莱茨基山脉一带。约40,000公顷的范围包络内只有破碎、离散的湿润黏土微斑块被实际占用，许多地点不足10平方米；大多数记录位于私人农业用地。',
      center: { lat: -38.35, lng: 145.75 },
    },
    habitats: [
      {
        name: '终年湿润的深层黏土洞道',
        realm: 'terrestrial',
        description:
          '在深蓝灰色黏土或红褐色黏壤土中建立永久洞道；土壤需要全年保持湿润和通气，长期积水、洪泛、沙土与高粉砂土不适合。',
        isPrimary: true,
      },
      {
        name: '小溪岸、泉眼与渗水阶地',
        realm: 'terrestrial',
        description:
          '常见于小溪和排水沟的岸与阶地、泉眼及渗水斑块，位置通常高于常规洪水线；局地地下水补给比地表植被名称更能预测占用。',
        isPrimary: true,
      },
      {
        name: '朝南或朝西的湿润牧场坡地',
        realm: 'terrestrial',
        description:
          '南向或西向坡面及横坡小阶地可截留径流、补充土壤水分；多数已知地点处在私人奶牛牧场，但只有具备合适土层、微地形和水文的斑块被占用。',
      },
    ],
    measurements: {
      length: {
        typical: 80,
        max: 150,
        unit: 'cm',
        note: '成体平均约80厘米；现代可靠记录可达约1.5米。身体可伸缩，未采用缺少现代标本支持的3米旧报告。',
      },
      weight: {
        typical: 200,
        max: 400,
        unit: 'g',
        note: '成体平均约200克，现代研究和政府资料记录最高接近400克；不是所有成体范围。',
      },
    },
    diet: {
      types: ['detritivore'],
      foods: ['土壤中的有机质', '腐解根系与细小植物碎屑'],
      description:
        '在开挖和维护地下洞道时吞食土壤，消化其中的根材料与有机质，再把蚓粪留在洞道内；现有资料没有给出各类食物的固定比例。',
    },
    activity: [
      '终生生活在一套复杂、长期使用的湿润黏土洞道中，洞道可延伸到约1至1.5米深',
      '用身体伸缩在湿洞内移动，水与空气被推动时可产生地面能够听见的咕噜声',
      '在浅层洞道吞食含有根系和有机质的土壤，并把蚓粪留在地下洞道中',
      '暴雨淹灌或牛蹄严重扰动时才偶尔出现在地表',
      '扩散能力很低，破碎斑块之间几乎没有自然迁移机会',
    ],
    tags: [
      '环节动物门',
      '环带纲',
      '巨型蚯蚓',
      '地下土壤动物',
      '维多利亚州特有',
      '湿润黏土洞道',
      '永久洞道',
      'IUCN濒危',
      'EPBC易危',
      '维州FFG濒危',
    ],
    summary:
      '巨蚯蚓终生藏在维多利亚州吉普斯兰的湿润黏土洞道里，成体平均约80厘米长。它每个大型卵茧只发育一个胚胎，孵化至少需要一年；狭小破碎的栖息地和极低扩散能力使局地水文改变格外危险。',
    description:
      '巨蚯蚓Megascolides australis是澳大利亚维多利亚州南部和西部吉普斯兰特有的巨蚓科环节动物。前部约三分之一呈深紫色，后部为粉灰色，成体平均约80厘米长、200克重。它不在落叶表面游走，而是在终年湿润、又不积水的深层黏土里维护可达约1至1.5米深的永久洞道；身体伸缩推动洞内水和空气时，地面有时能听到咕噜声。它吞食含根材料和有机质的土壤，并把蚓粪留在地下。雌雄同体的两个个体交换精子，产茧活动集中在南半球春夏；它们在洞道侧室产下大型琥珀色卵茧，每茧只有一个胚胎，孵化至少需要12个月，性成熟可能再等约4至5年。传统范围约40,000公顷，实际占用却由许多不足10平方米的湿润黏土斑块组成。排水、道路和住宅土方、压实、农药、失当密植与气候干燥都可能破坏洞道和水分。IUCN列为濒危，澳大利亚EPBC Act列为易危，维州FFG Act列为濒危。保护应先在原地避让洞道、维持整个补水单元，并与私人土地所有者共同管理。',
    storySections: [
      {
        key: 'reliable-giant',
        label: '体型与传说',
        title: '平均八十厘米，三米说法缺少现代标本',
        body: '成体平均约80厘米长、2厘米粗和200克重，现代可靠记录可达约1.5米并接近400克。蚯蚓会大幅伸缩，长度容易被姿势放大。旧文献写过3米，Museums Victoria和国家恢复计划都没有找到接近这个数字的现代标本，约 1.5 米是恢复计划采用的可靠记录级上限。',
      },
      {
        key: 'wet-permanent-burrow',
        label: '地下生活',
        title: '湿润永久洞道中的咕噜声',
        body: '一只巨蚯蚓通常占据一套复杂的永久洞道，深处可达约1至1.5米。洞壁即使在夏季也保持湿润，帮助身体移动和皮肤呼吸。它伸缩时推动水与空气，地面观察者有时能听到咕噜声；一次声音只能证明可能有活动，不能告诉你地下有几只。',
      },
      {
        key: 'hydrological-mosaic',
        label: '生境与水文',
        title: '实际栖地由狭小湿土斑块组成',
        body: '传统范围约40,000公顷，实际占用却集中在小溪岸、泉眼、渗水坡和横坡小阶地的深厚黏土中。许多斑块不足10平方米。土壤需要全年潮湿和通气，长期积水、沙土与洪泛平原都不合适；地图上的大范围包络不能替代地下水流和微地形。',
      },
      {
        key: 'one-embryo-cocoon',
        label: '繁殖与成长',
        title: '每个卵茧只有一个胚胎',
        body: '雌雄同体的两个个体交换精子，春夏在洞道侧室放置琥珀色卵茧。每个卵茧只有一个胚胎，孵化至少需要12个月，新生幼蚓已经约18厘米长。产茧率很低，性成熟可能需要约4至5年；慢繁殖让一次土方损失很难迅速补回。',
      },
      {
        key: 'pasture-paradox',
        label: '农田共存',
        title: '牧场中的种群仍需要土层与补水',
        body: '大多数已知种群位于私人奶牛牧场。本种能够在森林清除后的部分开阔湿地继续生活，关键是黏土结构和地下补水仍在。深耕、牛蹄泥泞践踏、机械压实、排水沟和密集植树会改变洞道空间或水分。保护行动必须按斑块水文设计。',
      },
      {
        key: 'listen-before-digging',
        label: '监测与保护',
        title: '先听、先测水，再决定是否动土',
        body: '传统挖掘调查会切断洞道并伤害身体脆弱的个体。研究者正在改进声音、振动和洞道探测等低侵入方法，同时记录土壤湿度与地下水位。道路、住宅和复植项目前应避让已知斑块及其补水区；迁地只适合在获批协议下作为最后手段。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '十九世纪的标本曾被当作新蛇',
        body: '十九世纪七十年代，一件巨蚯蚓标本被送到维多利亚国家博物馆，发现者以为它是新的蛇类。McCoy 在 1878 年正式描述为 Megascolides australis，原始描述收在《维多利亚动物志》第一册。它的英文常用名 Giant Gippsland Earthworm 对应巨大的身体和吉普斯兰分布区。',
      },
    ],
    keyFacts: [
      'Australian Faunal Directory接受Megascolides australis McCoy, 1878，并记录Notoscolex gippslandicus为异名。',
      '六级分类采用Animalia、Annelida、Clitellata、Crassiclitellata、Megascolecidae和Megascolides。',
      '本种只分布于澳大利亚维多利亚州南部和西部吉普斯兰。',
      'IUCN列为EN，criteria为B1ab(iii)+2ab(iii)；IUCN评估来自2013年并在2014-1版本发布。',
      '澳大利亚 EPBC Act 将其列为易危，维多利亚州 FFG Act 列为濒危；这些法定保护等级与 IUCN 风险评估分别采用不同制度。',
      '传统范围约40,000公顷，实际占用由破碎微斑块组成，一些地点不足10平方米。',
      '没有可靠的全种数量或成熟个体估计；单个地点记录从一两只到约800只。',
      '成体平均约80厘米长、2厘米粗和200克重，现代可靠记录可达约1.5米并接近400克。',
      '旧文献报告过3米个体，博物馆与恢复计划都没有找到接近该长度的现代标本。',
      '身体由约300至500个体节构成，前部约三分之一深紫至紫黑，其余部分浅粉灰。',
      '终生生活在地下永久洞道中，洞道通常延伸到约1至1.5米深。',
      '占用洞道全年保持湿润，身体移动时可能产生地面能够听见的咕噜声。',
      '在土中摄取根材料和有机质，并把蚓粪留在地下洞道内。',
      '本种为需要配偶交换精子的雌雄同体动物，产茧活动主要发生在南半球春夏。',
      '琥珀色卵茧单独置于洞道侧室，原始研究记录约4至7厘米长，后续综合记录可达约9厘米。',
      '每个卵茧只有一个胚胎，孵化至少需要12个月。',
      '新孵化幼体约18厘米长，性成熟可能需要约4至5年；最大寿命未知。',
      '适生土壤需要全年湿润却不长期积水，常见于小溪岸上方、泉眼、渗水地和朝南或朝西坡。',
      '大多数已知地点处于私人农业用地，牧场名称本身不能预测占用，土层、微地形与水文才是关键。',
      '排水和地下水位改变、土方、压实、农药与失当密植是主要管理风险。',
      '身体非常脆弱，挖取、拉扯和搬运可能致死；公众观察不应使用破坏性鉴定。',
      '声音和湿洞可辅助发现活动，单次咕噜声不能估算个体数或种群趋势。',
    ],
    threats: [
      '排水、筑坝、地形改变和上下游取排水改变地下水位及洞道湿度',
      '降雨减少与升温造成的土壤水分下降，使全年湿润洞道更难维持',
      '道路、住宅、管线、耕作与其他土方工程直接切断洞道并伤害个体和卵茧',
      '重型机械压实与牛群踩踏、泥泞践踏和侵蚀破坏黏土结构及洞道空间',
      '不合地点水文的密集植树、深翻与挖穴降低土壤水分或占用地下空间',
      '农药和其他化学径流可能直接致死或改变土壤条件，但本种剂量响应仍缺少实验',
      '极小斑块和很低扩散能力阻断重建与基因交流，使局地损失难以自然恢复',
      '破坏性调查、挖取、搬运和错误处理会伤害身体脆弱的个体',
    ],
    conservationActions: [
      '在确认洞道、卵茧和关键补水区周围优先避让土方，并设置覆盖完整地下水文单元的缓冲带',
      '与私人土地所有者签订保护契约或管理协议，对微斑块围栏并调整放牧强度',
      '维持地方规划覆盖层，把巨蚯蚓调查、水文评估和累积影响纳入道路、住宅与管线审批',
      '保护泉眼、渗水坡和小溪岸的地表及地下水流，避免新增排水、填土、筑坝和压实',
      '按地点水文设计复植密度、树种和施工方式，避免在洞道上深翻、密植或挖大型树穴',
      '减少农药和污染径流，优先使用综合虫害管理并保留无化学扰动缓冲区',
      '开发并校准声音、振动、洞道成像和其他低侵入监测方法，明确检出率后再解释趋势',
      '用统一努力的长期调查记录占用、繁殖迹象、土壤湿度、地下水位与土地管理变化',
      '只在原地避让不可行且有批准协议时评估迁地，记录伤亡、年龄结构、繁殖与多年存活',
      '向土地所有者和公众提供不挖取、不拉扯、不搬运的报告指引，并保护精细地点信息',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'average-adult-length',
        label: '成体平均长度',
        value: '约80',
        unit: 'cm',
        note: '身体可伸缩；现代可靠记录可达约1.5米，未采用缺少标本支持的3米旧报告',
      },
      {
        key: 'average-adult-mass',
        label: '成体平均体重',
        value: '约200',
        unit: 'g',
        note: '可靠记录最高接近400克；平均值不是成体最小值',
      },
      {
        key: 'cocoon-incubation',
        label: '单胚卵茧孵化',
        value: '至少12',
        unit: '个月',
        note: '每个卵茧只有一个胚胎，产量低且可能不是每年发生',
      },
      {
        key: 'range-envelope',
        label: '传统范围包络',
        value: '约40,000',
        unit: '公顷',
        note: '实际占用高度破碎，一些地点不足10平方米；不是连续栖息地面积',
      },
    ],
    media: {
      image:
        './images/species/giant-gippsland-earthworm/01-moist-clay-burrow-adult.webp',
      alt: '湿润蓝灰黏土的地下洞道中，一只前部深紫、后部粉灰的完整巨蚯蚓沿洞壁形成宽缓弯曲',
      focalPoint: { x: 0.35, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/giant-gippsland-earthworm/02-purple-anterior-segmented-body.webp',
          alt: '一只完整巨蚯蚓在湿黏土洞道中转弯，深紫色前部连接粉灰色后体，近乎平滑的表面带浅细横向微纹',
          title: '深紫前部连接粉灰长身',
          caption:
            'AI生成科学情景重建；体色、圆柱身体和浅细横向微纹提供外形线索，像素不能确认物种、性别、生殖状态，也不用于逐节计数。',
          focalPoint: { x: 0.53, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/giant-gippsland-earthworm/03-streambank-clay-habitat-cutaway.webp',
          alt: '开阔牧场小溪岸的地下剖面中，一只小比例巨蚯蚓位于常规水线以上的湿润蓝灰黏土洞道',
          title: '洪水线以上的湿润黏土斑块',
          caption:
            'AI生成科学情景重建；溪岸、渗水和深层黏土组合已知生境条件，不能表示真实地点、完整分布、土层厚度或固定水位。',
          focalPoint: { x: 0.61, y: 0.62 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/giant-gippsland-earthworm/04-wet-permanent-burrow-movement.webp',
          alt: '湿黏土洞道近景中，一只巨蚯蚓伸缩前进，身体旁的薄水膜形成小幅弯月形位移',
          title: '湿洞里推动水和空气',
          caption:
            'AI生成科学情景重建；水膜只解释咕噜声的可能机制，静帧不能证明声音强度、移动速度、季节或地下个体数。',
          focalPoint: { x: 0.62, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/giant-gippsland-earthworm/05-amber-egg-cocoon-side-chamber.webp',
          alt: '湿黏土主洞道旁的小室中放着一个完整琥珀色椭长卵茧，远处仅露出一小段成体身体',
          title: '侧室里的单个大型卵茧',
          caption:
            'AI生成科学情景重建；研究记录每茧一个胚胎并至少孵化12个月，像素不能显示胚胎数、卵茧年龄、深度或重量。',
          focalPoint: { x: 0.57, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/giant-gippsland-earthworm/06-acoustic-hydrology-monitoring.webp',
          alt: '研究者在湿润牧场坡地表面放置小型声学传感器和土壤水分探头，围栏将牛群隔在远处，地面没有开挖',
          title: '不挖出动物也能开始调查',
          caption:
            'AI生成科学情景重建；声音、振动和水分监测仍需校准，一次检出不能换算种群数量、繁殖成功或长期趋势。',
          focalPoint: { x: 0.64, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...GIANT_GIPPSLAND_EARTHWORM_SOURCES,
      {
        title: 'Museums Victoria: McCoy original description in 1878',
        url: 'https://museumsvictoria.com.au/discover/websites/caughtandcoloured/mccoys-zoology-of-victoria/man-of-many-ologies/biologist/how-the-worm-turned/',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: GIANT_GIPPSLAND_EARTHWORM_CONTENT_DATE,
    updatedAt: GIANT_GIPPSLAND_EARTHWORM_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
