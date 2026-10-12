import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const SUNDA_COLUGO_SOURCE_DATE = '2026-09-02' as const;

const SUNDA_COLUGO_CONTENT_DATE = '2026-09-02' as const;

const SUNDA_COLUGO_SOURCES = [
  {
    title: 'Mammal Diversity Database: Galeopterus variegatus',
    url: 'https://www.mammaldiversity.org/taxon/1000535/',
    kind: 'taxonomy',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Galeopterus variegatus',
    url: 'https://doi.org/10.2305/IUCN.UK.2008.RLTS.T41502A10479343.en',
    kind: 'conservation',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'Handbook of the Mammals of the World: Galeopterus variegatus',
    url: 'https://doi.org/10.5281/zenodo.6628095',
    kind: 'general',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'Janečka et al. 2008: Evidence for multiple Sunda colugo species',
    url: 'https://doi.org/10.1016/j.cub.2008.09.005',
    kind: 'taxonomy',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'Mason et al. 2016: Hidden biodiversity within colugos',
    url: 'https://doi.org/10.1126/sciadv.1600633',
    kind: 'taxonomy',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'McBride and Sargis 2026: Body size variation and sexual dimorphism',
    url: 'https://doi.org/10.1093/jmammal/gyag052',
    kind: 'general',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'Byrnes, Lim and Spence 2008: Take-off and landing kinetics',
    url: 'https://doi.org/10.1098/rspb.2007.1684',
    kind: 'ecology',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'Byrnes et al. 2011: Gliding saves time but not energy',
    url: 'https://doi.org/10.1242/jeb.052993',
    kind: 'ecology',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'Byrnes et al. 2011: Sex differences in locomotor ecology',
    url: 'https://doi.org/10.1644/10-MAMM-A-048.1',
    kind: 'ecology',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'Agoramoorthy, Sha and Hsu 2006: Diet in fragmented habitat',
    url: 'https://doi.org/10.1007/s10531-004-6900-1',
    kind: 'ecology',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'Tsuji et al. 2015: Resting-site selection and daytime feeding',
    url: 'https://doi.org/10.3106/041.040.0107',
    kind: 'ecology',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'Tsuji et al. 2018: A local mass-mortality event',
    url: 'https://doi.org/10.3106/ms2017-0071',
    kind: 'ecology',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'Tsuji et al. 2019: Ranging behavior in West Java',
    url: 'https://doi.org/10.13057/biodiv/d200218',
    kind: 'ecology',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'Youlatos, Widayati and Tsuji 2019: Positional behavior',
    url: 'https://doi.org/10.1016/j.mambio.2018.06.004',
    kind: 'ecology',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'Lee et al. 2023: Restoring road-crossing glide connectivity',
    url: 'https://doi.org/10.1111/1365-2664.14372',
    kind: 'conservation',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
  {
    title: 'NParks BiodiversitySG: Sunda Colugo',
    url: 'https://biodiversitysg.nparks.gov.sg/our-biodiversity/mammals/other-mammals/sunda-colugo/',
    kind: 'general',
    accessedAt: SUNDA_COLUGO_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-galeopterus-variegatus',
    slug: 'sunda-colugo',
    names: {
      zh: '马来鼯猴',
      en: 'Sunda Colugo',
      aliases: [
        '巽他鼯猴',
        '马来亚鼯猴',
        'Sunda Flying Lemur',
        'Malayan Colugo',
        'Malayan Flying Lemur',
        'Bornean Colugo',
        'Javan Colugo',
        'Sumatran Colugo',
      ],
    },
    scientificName: 'Galeopterus variegatus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Dermoptera', '皮翼目'),
      taxon('Cynocephalidae', '鼯猴科'),
      taxon('Galeopterus', '斑鼯猴属'),
    ),
    conservation: conservation('LC', 'decreasing', 2008),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: ['东南亚', '中南半岛南部', '马来半岛', '巽他陆棚岛屿'],
      countries: [
        '缅甸',
        '泰国',
        '老挝',
        '柬埔寨',
        '越南',
        '马来西亚',
        '新加坡',
        '文莱',
        '印度尼西亚',
      ],
      range:
        '原生范围从中南半岛南部经马来半岛，延伸至苏门答腊、婆罗洲、西爪哇及邻近岛屿。婆罗洲范围包括文莱，部分数据库国家清单有所遗漏。当前广义种包含多个尚未正式拆分的区域谱系，具体边界仍在研究。',
      center: { lat: 3, lng: 108 },
    },
    habitats: [
      {
        name: '热带低地常绿雨林',
        realm: 'terrestrial',
        description:
          '高大树木提供起跳点、垂直着陆树干、嫩叶食物和连续树冠，是本种的主要森林生境。',
        isPrimary: true,
      },
      {
        name: '高大次生林与森林边缘',
        realm: 'terrestrial',
        description:
          '树冠覆盖、树高和树干尺度合适时可维持种群；次生林记录不能证明任意退化林都能替代成熟森林。',
        isPrimary: true,
      },
      {
        name: '沼泽林、沿海林与丘陵森林',
        realm: 'terrestrial',
        description:
          '区域资料记录泥炭沼泽、红树林后缘和丘陵生境，但这些类型的密度与长期繁殖成功率尚未得到同等强度研究。',
        isPrimary: true,
      },
      {
        name: '果园、花园及树木种植景观',
        realm: 'terrestrial',
        description:
          '橡胶、椰子、果园和花园可提供食物或树间通道，价值取决于树冠连通、邻近天然林和猎捕压力。',
      },
    ],
    measurements: {
      length: {
        min: 34,
        max: 42,
        unit: 'cm',
        note: '成年头体长，不含17至28厘米的尾长；范围可能混合多个尚未拆分的区域谱系。',
      },
      weight: {
        min: 1.2,
        max: 1.7,
        unit: 'kg',
        note: '权威物种综述给出的成年范围，不是单一地点或候选谱系的平均值。',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: ['嫩叶', '叶芽与嫩梢', '花与花芽', '果实', '树液', '地衣'],
      description:
        '以嫩叶和其他柔软植物部分为主，也取食芽、花、果实、树液和地衣；食物植物随地区与生境变化，蚂蚁只有罕见取食记录。',
    },
    activity: [
      '主要夜行，白天通常贴在树干、粗枝或枝叶遮蔽处休息，偶尔也会换位或取食',
      '以弯爪贴附和攀爬陡直树干，在较细枝条上也能悬垂移动',
      '从较高树位跃出，用连续皮膜滑过树冠缺口，接近落点时上仰减速',
      '多数时间单独活动，但母幼、雌雄接触和雄性驱赶说明它并非严格无社会接触',
      '在枝端剪食嫩叶、芽、花和其他柔软植物部分',
    ],
    tags: [
      '脊索动物门',
      '哺乳纲',
      '皮翼目',
      '鼯猴科',
      '东南亚',
      '夜行性',
      '高度树栖',
      '滑翔',
      '食叶',
      '树冠连通',
      '隐存谱系',
      'IUCN无危',
      'CITES未列入',
    ],
    summary:
      '马来鼯猴是东南亚的夜行树栖哺乳动物，皮膜从颈部连到指趾和尾端，能在树冠间滑翔。它主要吃嫩叶，幼体抓在母体腹面随行。',
    description:
      '马来鼯猴属于皮翼目，以弯爪抓附树干。四肢、指趾和尾部共同撑开连续的有毛皮膜，接近下一棵树时，它抬起身体调整皮膜角度，减缓着陆冲击。夜间，它在不同树冠取食嫩叶、芽、花和果实。现行分类仍把中南半岛南部至巽他群岛的种群合为一个广义种，但研究支持至少六个深分化的候选物种级谱系，各地区的保护风险可能不同。',
    storySections: [
      {
        key: 'lineage',
        label: '分类',
        title: '一个广义种中包含多个区域谱系',
        body: '皮翼目现行名录承认马来鼯猴和菲律宾鼯猴两种现生成员。基因组研究支持皮翼目与灵长目互为姊妹群，即共享较近的共同祖先。跨中南半岛和巽他群岛的样本至少支持六个候选物种级谱系；在历史名称、模式材料和边界完成修订前，MDD 仍保留一个广义种。',
      },
      {
        key: 'skin-wing',
        label: '解剖',
        title: '皮膜连通颈部、指趾和尾端',
        body: '皮膜从颈部沿前肢伸至五根手指，跨过体侧到后肢和五根脚趾，再收束到尾端。尾巴包在尾膜内，没有从后缘伸出。四肢张开时，身体、指趾和尾巴把这张有毛皮膜绷成宽阔滑翔面；收拢时，膜沿身体垂成褶皱。它没有蝙蝠式极端延长翼指，也不靠拍翼产生动力。落树后，弯爪和足部姿态把滑翔接到树干攀爬。',
      },
      {
        key: 'controlled-glide',
        label: '运动',
        title: '最短的跳跃，可能比长滑翔更难刹车',
        body: '新加坡五只自由活动个体的222次记录显示，较长滑翔的着陆峰值力反而较低，因为动物有时间建立气动力并在接近树干时上仰。样本平均着陆速度约3.99米每秒，比长滑翔达到平衡附近的平均水平速度低约60%。短滑翔留给姿态调整的时间少，峰值力可能更高。这是小样本的运动学结果，不是每次滑翔的固定速度或保证安全落地的公式。',
      },
      {
        key: 'foraging-clock',
        label: '食性',
        title: '滑翔的时间与能量成本',
        body: '嫩叶、芽、花和果实散落在不同树冠。四只个体、258次滑翔的研究得到约31.0 ± 24.8米的样本平均估算距离，却以攀爬记录和跨物种代谢标度模型估计，为滑翔先爬高的成本约为沿树冠水平移动同样距离的1.5倍。研究没有直接测量鼯猴耗氧，因此结果支持滑翔节省通行时间，不证明每米都节省能量。一次食蚁观察也不能把以嫩叶为核心的本种改写成食虫动物。',
      },
      {
        key: 'night-and-young',
        label: '生活史',
        title: '幼体抓住母体腹面随行',
        body: '马来鼯猴主要在夜间单独取食和移动，但母幼共享空间，雌雄会接触，雄性之间也会驱赶。通常每胎一仔，偶见双仔；发育不完全的幼体用四肢抓住母体腹面，母体收拢的后部皮膜可在外侧形成遮护褶皱。这里没有袋鼠式袋口，也没有把幼体悬在皮膜上的独立吊床。妊娠期估计横跨60至180天，野外寿命和性成熟时间仍不确定。',
      },
      {
        key: 'connected-canopy',
        label: '保护',
        title: '保护滑翔者，先保住起跳和落点',
        body: '新加坡Mandai道路由约10米拓宽到约30米并移除640株路旁树后，地点模型中的可行滑翔连接从3689条降到249条，减少93.3%。施工期设置的九根滑翔杆中，模型判断只有三根提供连接，说明位置、周边树高和双向可达性比设施数量重要。这些是一个工程案例的模型结果，不能直接变成所有道路的阈值。保护还要面对2008年LC评估偏旧、全球趋势下降和广义种掩盖小范围谱系风险。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '现行名录采用 Cuvier 的 1797 年名称',
        body: '哺乳动物多样性数据库采用 Cuvier 在 1797 年描述的 Galeopithecus variegatus，现用组合为 Galeopterus variegatus。原始描述未给出模式产地，Thomas 在 1908 年将其限定为马来半岛及岛屿。部分旧资料仍写 Audebert，1799；目前多个候选谱系尚需确认各自对应的历史名称。',
      },
    ],
    keyFacts: [
      'MDD接受名为Galeopterus variegatus (G. Cuvier, 1797)，英文主名为Sunda Colugo；旧资料常见的Audebert 1799不作为当前命名口径。',
      '属于皮翼目和鼯猴科；皮翼目与灵长目互为姊妹群，但鼯猴不是狐猴、灵长类祖先、蝙蝠或鼯鼠。',
      '现行名录仍保留一个广义种，分子和形态证据支持至少六个尚未正式拆分的候选物种级谱系。',
      '原生范围从中南半岛南部延伸到苏门答腊、婆罗洲、西爪哇和邻岛；权威物种综述的婆罗洲范围包含文莱。',
      '成年头体长约34至42厘米，尾长约17至28厘米，头体长指标不含尾巴。',
      '成年体重约1.2至1.7千克，范围可能混合多个区域谱系。',
      '有毛皮膜从颈部延至前肢、指间、后肢、趾间和尾端，四肢与尾部共同撑开滑翔面。',
      '尾巴完整包在尾膜中，指间和趾间也有皮膜，共同形成连续滑翔面。',
      '五只个体的长滑翔平均水平速度约10.1米每秒，这不是最高速度；样本推算距离上限150米也不是精确物种纪录。',
      '接近近垂直树干时会抬起身体改变皮膜迎角，以升力和阻力减速；较长滑翔的峰值着陆力可能更低。',
      '食物以嫩叶和其他柔软植物部分为主，也吃芽、花、果实、树液和地衣；食蚁只有罕见观察。',
      '通常每胎一仔，幼体用四肢抓住母体腹面；后部皮膜只形成外部遮护褶皱，不是有袋类育儿袋。',
      '可靠的全球成熟个体数和野外寿命未知；约17.5年的记录来自圈养个体，不能当作野外平均寿命。',
      'IUCN当前等级为无危、趋势下降，评估来自2008年；广义种内部的候选谱系可能面临不同风险。',
      '当前CITES附录未列入本种，不等于任何范围国都允许自由猎捕、持有或交易。',
    ],
    threats: [
      '低地和丘陵森林丧失、退化与单一种植园转换',
      '道路拓宽和无树缺口切断起跳树与着陆树之间的滑翔连接',
      '部分地区的猎捕与诱捕',
      '干旱、嫩叶短缺与开发叠加造成的局地死亡风险',
      '广义种分类掩盖小范围谱系的真实风险',
    ],
    conservationActions: [
      '保护原生林和高树冠覆盖的次生林',
      '保留高大起跳树、垂直着陆树、食物树和连续树冠',
      '在道路和开发前建立地点化滑翔连接模型并优化缓解设施位置',
      '监测滑翔杆实际使用、路杀、猎捕和繁殖结果，而非只记录设施数量',
      '完成区域谱系的分类修订和独立种群调查',
      '更新2008年IUCN评估，并按修订后的分类单元重新评估',
    ],
    metrics: {
      adultLengthCm: [34, 42],
      adultMassKg: [1.2, 1.7],
    },
    featuredStats: [
      {
        key: 'adult-length',
        label: '成年头体长',
        value: '34–42',
        unit: '厘米',
        note: '权威物种综述的广义种范围，不含尾长。',
      },
      {
        key: 'adult-mass',
        label: '成年体重',
        value: '1.2–1.7',
        unit: '千克',
        note: '跨地域范围，内部可能包含多个候选谱系。',
      },
      {
        key: 'mean-glide-distance',
        label: '样本平均滑翔距离',
        value: '31.0 ± 24.8',
        unit: '米',
        note: '新加坡4只个体、258次滑翔的持续时间估计，不是全物种平均或最大值。',
      },
      {
        key: 'long-glide-speed',
        label: '长滑翔平均水平速度',
        value: '10.1',
        unit: '米/秒',
        note: '新加坡5只个体中超过20米的已知距离滑翔；不是最高速度。',
      },
    ],
    media: {
      image:
        './images/species/sunda-colugo/01-lowland-forest-trunk-portrait.webp',
      alt: '东南亚低地雨林暮色中，一只灰褐斑驳的马来鼯猴纵向抓附粗大树干，四足弯爪和包住尾部的折叠翼膜完整可见',
      focalPoint: { x: 0.64, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/sunda-colugo/02-full-patagium-glide.webp',
          alt: '一只马来鼯猴在两棵雨林树之间滑翔，四肢张开，连续有毛翼膜从颈部经指趾延伸至包尾后缘',
          title: '从颈部延伸到尾端的滑翔面',
          caption:
            '解剖重建显示四肢和包入尾膜的尾巴共同撑开连续有毛皮膜；静态画面不能测量滑翔距离、速度、高度损失、能耗、着陆结果或精确指趾数量。',
          focalPoint: { x: 0.51, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/sunda-colugo/03-controlled-tree-landing.webp',
          alt: '一只马来鼯猴上仰接近近垂直树干，连续翼膜仍张开，四足弯爪朝向树皮且尚留空气间隙',
          title: '上仰接近树干的制动姿态',
          caption:
            '依据自由活动个体运动学重建上仰并把四足伸向树皮的落树前瞬间；单帧不能确定此前轨迹、速度、制动力、冲击、抓附成功或伤害风险。',
          focalPoint: { x: 0.54, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/sunda-colugo/04-young-leaf-foraging.webp',
          alt: '夜间树冠中，一只马来鼯猴以四足抓住斜枝，把狭长吻部靠近一簇浅绿色嫩叶和叶芽',
          title: '树冠中的嫩叶食者',
          caption:
            '取食重建显示个体抓枝并把口部贴近嫩叶与芽；画面不能鉴定植物种类、证明已经吞食、量化季节选择或代表全分布区食谱。',
          focalPoint: { x: 0.51, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/sunda-colugo/05-mother-with-ventral-infant.webp',
          alt: '一只成年马来鼯猴贴附树干，唯一一只小型幼体以四肢从外侧抱抓母体腹面，后部包尾翼膜形成开放褶皱',
          title: '腹面抓附的幼体',
          caption:
            '母幼重建显示一只幼体在母兽腹面外部用四肢抓附，后部皮膜只形成开放遮护褶皱而非育儿袋；画面不能确定年龄、性别、亲子身份、哺乳、断奶状态、携幼时长或窝仔数频率。',
          focalPoint: { x: 0.52, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/sunda-colugo/06-day-roost-camouflage.webp',
          alt: '日间林下阴影中，一只斑驳灰褐马来鼯猴头朝上贴在带地衣的树干，四足抓附且折叠翼膜包住尾部',
          title: '贴树休息时的斑驳伪装',
          caption:
            '日栖重建显示斑驳被毛与树皮和地衣相近，动物仍完整可辨；单张图不能证明主动选择该休息点、睡眠状态、捕食者检测概率、伪装收益、个体身份或地点占域。',
          focalPoint: { x: 0.54, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: SUNDA_COLUGO_SOURCES,
    featured: true,
    publishedAt: SUNDA_COLUGO_CONTENT_DATE,
    updatedAt: SUNDA_COLUGO_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
