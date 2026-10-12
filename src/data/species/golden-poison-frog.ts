import type { SpeciesSource, Species } from '../../types/species.ts';

import { CONTENT_DATE, animalTaxonomy, conservation, taxon } from './shared.js';

const GOLDEN_POISON_FROG_SOURCE_DATE = '2026-08-16' as const;

const GOLDEN_POISON_FROG_CONTENT_DATE = '2026-08-16' as const;

const GOLDEN_POISON_FROG_SOURCES = [
  {
    title: 'IUCN SSC Amphibian Specialist Group — Phyllobates terribilis, Red List 2017-3',
    url: 'https://doi.org/10.2305/IUCN.UK.2017-3.RLTS.T55264A85887889.en',
    kind: 'conservation',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'AMNH Amphibian Species of the World 6.2 — Phyllobates terribilis',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Dendrobatoidea/Dendrobatidae/Dendrobatinae/Phyllobates/Phyllobates-terribilis',
    kind: 'taxonomy',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Myers, Daly & Malkin 1978 — Original description and natural history',
    url: 'https://hdl.handle.net/2246/1286',
    kind: 'general',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Amézquita et al. 2024 — Molecular phylogenetics of Phyllobates',
    url: 'https://doi.org/10.3897/zookeys.1212.126733',
    kind: 'taxonomy',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Márquez et al. 2012 — Range extension into Valle del Cauca',
    url: 'https://doi.org/10.13128/Acta_Herpetol-11387',
    kind: 'distribution',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Alzate-Lozano et al. 2018 — Population parameters and habitat',
    url: 'https://doi.org/10.21068/c2018.v19n01a09',
    kind: 'ecology',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Zimmermann & Zimmermann 1985 — Reproductive strategy and paternal care',
    url: 'https://salamandra-journal.com/index.php/contents/1985-vol-21/1115-zimmermann-h-e-zimmermann-1/file',
    kind: 'ecology',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Duarte-Marín et al. 2024 — Male carrying an unusually high tadpole load',
    url: 'https://www.biotaxa.org/hn/article/download/85203/81250',
    kind: 'ecology',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Daly et al. 1980 — Batrachotoxin levels and physiological resistance',
    url: 'https://doi.org/10.1126/science.6246586',
    kind: 'ecology',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Daly et al. 1994 — Dietary alkaloid uptake in poison frogs',
    url: 'https://doi.org/10.1016/0041-0101(94)90335-2',
    kind: 'ecology',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Dumbacher et al. 2004 — Melyrid beetles as a putative BTX source',
    url: 'https://doi.org/10.1073/pnas.0407197101',
    kind: 'ecology',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Abderemane-Ali et al. 2021 — Evidence against a simple sodium-channel resistance mechanism',
    url: 'https://doi.org/10.1085/jgp.202112872',
    kind: 'ecology',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'WCS Colombia — Poison Dart Frogs of Colombia',
    url: 'https://colombia.wcs.org/en-us/WCS-VISUAL/Photo-Gallery/Poison-Dart-Frogs-of-Colombia.aspx',
    kind: 'conservation',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Colombia MinAmbiente — Resolución 0126 de 2024',
    url: 'https://www.minambiente.gov.co/wp-content/uploads/2024/02/Resolucion-0126-de-2024.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'CITES — Phyllobates listing',
    url: 'https://cites.org/eng/taxonomy/term/4836',
    kind: 'conservation',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC 2024 — Amphibian Conservation Action Plan',
    url: 'https://portals.iucn.org/library/sites/library/files/documents/SSC-OP-057-En.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Colombia RUNAP/CRC — K´õk´õi Eujã protected-area agreement',
    url: 'https://runapadmin.parquesnacionales.gov.co/default/general/descargardocumento?did=2081',
    kind: 'conservation',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Forero-Medina et al. — International trade of Colombian endemic poison frogs',
    url: 'https://doi.org/10.1111/csp2.13283',
    kind: 'conservation',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-phyllobates-terribilis',
    slug: 'golden-poison-frog',
    names: { zh: '金色箭毒蛙', en: 'Golden Poison Frog', aliases: ['黄金箭毒蛙'] },
    scientificName: 'Phyllobates terribilis',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Amphibia', '两栖纲'),
      taxon('Anura', '无尾目'),
      taxon('Dendrobatidae', '箭毒蛙科'),
      taxon('Phyllobates', '叶毒蛙属'),
    ),
    conservation: conservation('EN', 'decreasing', 2016, 'B1ab(iii)'),
    distribution: {
      realms: ['terrestrial', 'freshwater'],
      continents: ['南美洲'],
      regions: ['哥伦比亚太平洋低地', '萨伊哈—纳亚—尤鲁曼吉河流域'],
      countries: ['哥伦比亚'],
      endemicTo: ['哥伦比亚考卡省和考卡山谷省的太平洋低地'],
      range: '仅自然分布于哥伦比亚西部考卡省和考卡山谷省的极湿低地雨林；已确认范围从萨伊哈河流域向北延至纳亚和尤鲁曼吉河流域。地图只显示粗粒度范围，不公开敏感采集点。',
      center: { lat: 3.1, lng: -77.3 },
    },
    habitats: [
      {
        name: '太平洋极湿低地雨林落叶层',
        realm: 'terrestrial',
        description: '成蛙主要在原生、轻度干扰及部分仍保有湿润微气候的次生林地表活动，利用落叶层、树根和低矮遮蔽物。',
        isPrimary: true,
      },
      {
        name: '林下幼体水体',
        realm: 'freshwater',
        description: '卵产在潮湿陆地微生境；孵化后由雄蛙把蝌蚪背到林下水体，幼体在水中继续发育。成蛙的生活重心仍在陆上。',
      },
    ],
    measurements: {
      length: { min: 37, max: 47, unit: 'mm', note: '成体吻肛长；雌性通常稍大，后肢不在量程之内' },
    },
    diet: {
      types: ['insectivore'],
      foods: ['小型陆生节肢动物'],
      description: '在林地表面捕食小型节肢动物；物种级定量食谱仍不足。皮肤生物碱从食物中摄取和储存，但哥伦比亚野外提供蛙毒素的具体猎物尚未确定。',
    },
    activity: ['日行性', '地表落叶层活动', '雄性颤音鸣叫与领域互动', '雄性背负蝌蚪'],
    tags: ['哥伦比亚特有种', 'IUCN 濒危', '警戒色', '膳食来源皮肤生物碱', '雄性育幼运输', 'CITES 附录 II'],
    summary: '金色箭毒蛙只分布于哥伦比亚一小片雨林。鲜明体色发出警告，皮肤中的生物碱来自食物，雄蛙会背运蝌蚪。',
    description: '成年金色箭毒蛙可呈均一的亮黄、橙金或绿乳白色，黑底金纹的幼体则会随成长换装。它白天在极湿雨林地表觅食，从小型节肢动物中摄取并储存防御性生物碱；具体提供蛙毒素的哥伦比亚猎物和它避免自体中毒的完整机制仍未知。雄蛙以颤音参与求偶和领域互动，并把孵化的蝌蚪背到水体。这个物种只分布在考卡省和考卡山谷省的一小片太平洋低地林，森林损失、采矿与污染会被狭窄范围进一步放大。',
    storySections: [
      {
        key: 'color-change',
        label: '外形与成长',
        title: '从黑底金纹，换成一身警戒色',
        body: '小幼蛙呈黑色，背外侧有金色纵纹，长大后逐渐变成较均匀的亮黄、橙金或绿乳白色。醒目的成体色能警告天敌，区分近缘叶毒蛙仍需更细的形态特征。',
      },
      {
        key: 'forest-floor',
        label: '活动与鸣叫',
        title: '在落叶层活动和鸣叫',
        body: '金色箭毒蛙白天在极湿低地林的落叶、树根和低矮遮蔽物间活动。雄蛙发出持续数秒的颤音吸引雌性，也会追逐、扭抱同类，表现出领域互动，但领域范围尚不清楚。',
      },
      {
        key: 'dietary-toxin',
        label: '食物与化学防御',
        title: '皮肤毒素来自食物',
        body: '它捕食小型陆生节肢动物，把膳食中的生物碱运输并储存在皮肤腺体。圈养繁殖、缺少相关生物碱食物的个体通常没有可检测的蛙毒素；野外捕获个体却能保留多年。究竟哪种哥伦比亚猎物提供蛙毒素，以及蛙如何避免自体中毒，都还没有最终答案。',
      },
      {
        key: 'tadpole-transport',
        label: '繁殖与育幼',
        title: '雄蛙把下一代背到水边',
        body: '雌蛙把一簇卵留在潮湿落叶间；半自然观察中，雄蛙在产卵后短暂返回润湿卵簇，临近孵化时再回来，让幼体爬上背部并运到林下水体。当地约 16 年非系统观察多见一次背 2 至 9 只；2023 年的 16 只是一笔异常纪录，窝数推断还需更多观察。',
      },
      {
        key: 'narrow-range',
        label: '分布与生境',
        title: '哥伦比亚西岸的狭窄分布',
        body: '它只见于考卡省和考卡山谷省太平洋侧的极湿低地林，部分研究地点海拔低于 25 米。DNA 证据把已知北界扩展到纳亚和尤鲁曼吉流域，但整个自然分布仍很狭窄。',
      },
      {
        key: 'conservation',
        label: '保护与治理',
        title: '保护落叶层，也保护管理森林的人',
        body: '砍伐、农业和非法作物扩张、采金及污染同时挤压有限生境。Eperãra Siaapidaarã 人民推动的 K´õk´õi Eujã 保护区把大片文化领地纳入国家保护地系统。未来还需要连通森林、控制污染、长期声学与种群监测，并让国际贸易的许可和创始谱系真正可追溯。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '当地使用的毒蛙，1978 年才正式命名',
        body: '迈尔斯、戴利与马尔金研究哥伦比亚西部 Emberá 人民用于处理吹箭的蛙时，发现其中一种尚未在科学文献中描述。经过多年的采集与研究，他们在 1978 年命名 Phyllobates terribilis。这个名字反映了它强烈的皮肤毒性；当地居民对它的认识早于这次科学命名。',
      },
    ],
    keyFacts: [
      '只自然分布于哥伦比亚考卡省和考卡山谷省的太平洋低地雨林。',
      '成体吻肛长约 37 至 47 毫米；小幼体黑底带金色纵纹，长大后才转成较均一的警戒色。',
      '皮肤生物碱来自食物摄取与储存，但提供蛙毒素的哥伦比亚野外猎物仍未确定。',
      '圈养繁殖且缺少相关膳食生物碱的个体通常没有可检测蛙毒素；野外捕获个体可能在圈养多年后仍保留毒性。',
      '蛙毒素会使电压门控钠通道持续开放，但这只蛙避免自体中毒的完整机制仍未解决。',
      '雄蛙会把孵化后的蝌蚪背到林下水体；16 只是一笔异常纪录，寻常背负多在 2 至 9 只之间。',
    ],
    threats: [
      '农业、非法作物、采伐与聚落扩张造成低地雨林丧失和破碎化',
      '金矿开采及相关水土污染',
      '非法作物喷洒与其他农业污染',
      '极窄分布范围放大局地森林损失和污染事件的影响',
      '来源不明的创始谱系与非法采集造成贸易可追溯性风险',
    ],
    conservationActions: [
      '保护、恢复并连接萨伊哈、纳亚等流域的极湿低地森林',
      '支持 Eperãra Siaapidaarã 等当地社区和原住民治理保护地',
      '控制采金、砍伐、农业扩张与喷洒造成的水土污染',
      '开展不公开敏感点位的长期视觉、声学、占域与种群趋势监测',
      '执行 CITES 许可和创始谱系可追溯性，使保育繁殖补充而非替代原地保护',
    ],
    metrics: {
      adultLengthCm: [3.7, 4.7],
    },
    featuredStats: [
      {
        key: 'adult-svl',
        label: '成体吻肛长',
        value: '3.7—4.7',
        unit: '厘米',
        note: '可靠成体范围；后肢不在量程之内',
      },
      {
        key: 'extent-of-occurrence',
        label: 'IUCN 分布范围',
        value: '约 1,473',
        unit: '平方千米',
        note: 'EOO 为评估用几何量，勾勒的是分布轮廓',
      },
      {
        key: 'documented-elevation',
        label: '可靠研究地点海拔',
        value: '<25—200',
        unit: '米',
        note: '下限记作“低于 25 米”；精确的低点尚无实测',
      },
      {
        key: 'tadpole-load',
        label: '非系统观察多见',
        value: '2—9',
        unit: '只蝌蚪',
        note: '来自当地约 16 年观察；2023 年 16 只为异常最高纪录',
      },
    ],
    media: {
      image: './images/species/golden-poison-frog/01-leaf-litter-portrait.webp',
      alt: '潮湿低地雨林的落叶层上，一只通体金黄色的金色箭毒蛙位于画面右侧',
      focalPoint: { x: 0.69, y: 0.57 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/golden-poison-frog/02-leaf-litter-foraging.webp',
          alt: '一只金黄色箭毒蛙伏低身体，在湿润落叶层中搜索微小节肢动物',
          title: '落叶层里的觅食',
          caption: '金色箭毒蛙捕食小型陆生节肢动物。图中蚁形猎物仅作觅食示意，哥伦比亚野外提供蛙毒素的具体猎物尚未确定。',
          focalPoint: { x: 0.63, y: 0.5 },
        },
        {
          image: './images/species/golden-poison-frog/03-lowland-rainforest-habitat.webp',
          alt: '极湿低地雨林的板根与浅水渗流旁，一只金黄色箭毒蛙在落叶层中显得很小',
          title: '一小片极湿低地林',
          caption: '成蛙在陆地落叶层活动，雄蛙再把孵化的蝌蚪送往林下水体；两个生态域在同一段生命史中相连。',
          focalPoint: { x: 0.62, y: 0.62 },
        },
        {
          image: './images/species/golden-poison-frog/04-subtle-calling.webp',
          alt: '一只雄性金色箭毒蛙在湿润树根旁抬起前身，闭口鸣叫时喉部轻微扩张',
          title: '落叶间的颤音',
          caption: '雄蛙以延续数秒的颤音参与求偶和领域互动；叫声会随温度、地点和个体而变化。',
          focalPoint: { x: 0.4, y: 0.55 },
        },
        {
          image: './images/species/golden-poison-frog/05-terrestrial-egg-clutch.webp',
          alt: '卷曲落叶下，一只雄性金色箭毒蛙停在一簇含深色胚胎的透明胶质卵旁',
          title: '卵留在潮湿陆地',
          caption: '半自然观察中，雄蛙会返回润湿卵簇，并在临近孵化时让幼体爬上背部，再运往林下水体。',
          focalPoint: { x: 0.5, y: 0.5 },
        },
        {
          image: './images/species/golden-poison-frog/06-male-tadpole-transport.webp',
          alt: '一只雄性金色箭毒蛙背负六只深色蝌蚪，朝林下浅水体移动',
          title: '雄蛙背上的旅程',
          caption: '当地约 16 年非系统观察多见雄蛙一次背 2 至 9 只蝌蚪；画面中的六只处于这一观察区间。',
          focalPoint: { x: 0.46, y: 0.5 },
        },
      ],
    },
    sources: [
      ...GOLDEN_POISON_FROG_SOURCES,
      {
        title: '金色箭毒蛙：描述与命名记录',
        url: 'https://www.amnh.org/explore/news-blogs/golden-poison-frog-discovery',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: CONTENT_DATE,
    updatedAt: GOLDEN_POISON_FROG_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
