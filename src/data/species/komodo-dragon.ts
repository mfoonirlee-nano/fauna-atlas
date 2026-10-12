import type { SpeciesSource, Species } from '../../types/species.ts';

import { CONTENT_DATE, animalTaxonomy, conservation, taxon } from './shared.js';

const KOMODO_DRAGON_SOURCE_DATE = '2026-08-17' as const;

const KOMODO_DRAGON_CONTENT_DATE = '2026-08-17' as const;

const KOMODO_DRAGON_SOURCES = [
  {
    title: 'IUCN Red List — Varanus komodoensis (2019 assessment, published in 2021-2)',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T22884A123633058.en',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Indonesia Ministry of Forestry — Komodo Dragon Conservation Strategy and Action Plan 2025–2035',
    url: 'https://ksdae.kehutanan.go.id/in-flores/storage/7b49f5e3-eedd-484c-8014-aa19a4e79892/preview/',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Indonesia Ministry of Forestry — Priority Species Conservation: 2024 Komodo monitoring',
    url: 'https://ksdae.kehutanan.go.id/in-flores/program/priority-species-conservation/',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (25 May 2024)',
    url: 'https://www.cites.org/sites/default/files/eng/app/2024/E-Appendices-2024-05-25.pdf',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Reptile Database — Varanus komodoensis',
    url: 'https://reptile-database.reptarium.cz/Varanus/komodoensis',
    kind: 'taxonomy',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Ouwens 1912 — Original description of Varanus komodoensis',
    url: 'https://www.biodiversitylibrary.org/part/76070',
    kind: 'taxonomy',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'CITES/BfN — Identification Guide for Monitor Lizards',
    url: 'https://cites.org/sites/default/files/vc-files/files/ID_Guide_Lizards_BFN.pdf',
    kind: 'general',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: "Smithsonian's National Zoo — Komodo Dragon",
    url: 'https://nationalzoo.si.edu/animals/komodo-dragon',
    kind: 'general',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Iannucci et al. 2022 — Population genomics and conservation units',
    url: 'https://doi.org/10.1111/mec.16121',
    kind: 'distribution',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Harlow et al. 2010 — Thermoregulatory habits of free-ranging Komodo dragons',
    url: 'https://doi.org/10.1155/2010/921371',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Imansyah et al. 2008 — Ontogenetic habitat use and arboreality',
    url: 'https://doi.org/10.1111/j.1469-7998.2007.00368.x',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Laver et al. 2012 — Sex-biased life-history divergence and growth',
    url: 'https://doi.org/10.1371/journal.pone.0045398',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Jessop et al. 2006 — Island differences in body size and prey biomass',
    url: 'https://doi.org/10.1111/j.0030-1299.2006.14371.x',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Purwandana et al. 2016 — Ontogenetic shift in diet and foraging',
    url: 'https://doi.org/10.1007/s00114-016-1351-6',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Fry et al. 2009 — Venom system and predatory mechanics',
    url: 'https://doi.org/10.1073/pnas.0810883106',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: "D'Amore et al. 2011 — Bite force and bite-and-pull feeding mechanics",
    url: 'https://doi.org/10.1371/journal.pone.0026226',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Goldstein et al. 2013 — Saliva and gingiva bacteriology of captive Komodo dragons',
    url: 'https://doi.org/10.1638/2012-0022R.1',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'LeBlanc et al. 2024 — Iron-coated serrated teeth',
    url: 'https://doi.org/10.1038/s41559-024-02477-7',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Lind et al. 2019 — Komodo dragon genome and vomeronasal receptors',
    url: 'https://doi.org/10.1038/s41559-019-0945-8',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Jessop et al. 2004 — Nesting ecology and conservation',
    url: 'https://doi.org/10.1016/j.biocon.2003.08.005',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Purwandana et al. 2020 — Reproductive periodicity and hatchling emergence',
    url: 'https://doi.org/10.1643/CH-19-337',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Purwandana et al. 2022 — Seasonal activity and reproduction',
    url: 'https://doi.org/10.1093/biolinnean/blac045',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Jessop et al. 2018 — Dispersal, site fidelity and movement',
    url: 'https://doi.org/10.1098/rspb.2018.1829',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Clemente et al. 2009 — Locomotor capacity in monitor lizards',
    url: 'https://doi.org/10.1111/j.1469-7998.2009.00559.x',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Watts et al. 2006 — Parthenogenesis in captive Komodo dragons',
    url: 'https://doi.org/10.1038/4441021a',
    kind: 'ecology',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Jones et al. 2020 — Climate-change vulnerability to 2050',
    url: 'https://doi.org/10.1002/ece3.6705',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Ariefiandy et al. 2021 — Human pressures and range loss on Flores',
    url: 'https://doi.org/10.1007/s10531-020-02100-8',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'Azmi et al. 2021 — Road mortality in northern Flores',
    url: 'https://www.herpconbio.org/Volume_16/Issue_1/Azmi_etal_2021.pdf',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
  {
    title: 'UNESCO/IUCN 2022 — Reactive Monitoring Mission to Komodo National Park',
    url: 'https://whc.unesco.org/document/199286',
    kind: 'conservation',
    accessedAt: KOMODO_DRAGON_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-varanus-komodoensis',
    slug: 'komodo-dragon',
    names: { zh: '科莫多巨蜥', en: 'Komodo Dragon', aliases: ['科莫多龙', '科摩多巨蜥'] },
    scientificName: 'Varanus komodoensis',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Reptilia', '爬行纲'),
      taxon('Squamata', '有鳞目'),
      taxon('Varanidae', '巨蜥科'),
      taxon('Varanus', '巨蜥属'),
    ),
    conservation: conservation('EN', 'decreasing', 2019, 'C1'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: ['小巽他群岛', '科莫多国家公园', '弗洛勒斯沿海'],
      countries: ['印度尼西亚'],
      endemicTo: [
        '科莫多岛',
        '林卡岛',
        '吉利莫堂岛',
        '努沙科德岛',
        '帕达尔岛',
        '弗洛勒斯岛及邻近小岛',
      ],
      range:
        '仅自然分布于印度尼西亚小巽他群岛。2024 年国家公园监测覆盖科莫多、林卡、吉利莫堂、努沙科德和帕达尔五岛；国家公园外仍见于弗洛勒斯岛西、南、北部破碎沿海生境及 Longos、Ontoloe 等近岸小岛。',
      center: { lat: -8.56, lng: 119.48 },
    },
    habitats: [
      {
        name: '沿海落叶季风林与谷地',
        realm: 'terrestrial',
        description:
          '靠近海岸的开放落叶季风林、谷地与山麓提供阴蔽、巢址、猎物和幼体所需的树木；多年龄阶段会主动选择这类生境。',
        isPrimary: true,
      },
      {
        name: '稀树草原、草地与灌丛镶嵌',
        realm: 'terrestrial',
        description:
          '成年个体会穿行和伏击于季节性干燥的稀树草原、林地、草地与灌丛；开阔地只是这幅镶嵌画的一部分。',
      },
      {
        name: '河岸带、红树林与沿海避难生境',
        realm: 'terrestrial',
        description:
          '河岸植被、红树林边缘和较湿润的沿海微生境在干季提供遮蔽与食物资源，也是整体生境镶嵌的一部分。',
      },
    ],
    measurements: {
      length: {
        max: 3.04,
        unit: 'm',
        note: '雄性全长纪录；雌性纪录 2.67 米，两笔都是极值',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: ['昆虫与其他节肢动物', '小型爬行动物和鸟类', '帝汶鹿', '野猪', '水牛', '腐肉', '较小同类'],
      description:
        '幼体主动搜索小型猎物；体型超过约 20 千克后，更常伏击大型脊椎动物。后弯锯齿牙切开组织，颈部和身体后拉扩大伤口，下颌毒腺分泌物可加重失血和低血压。真正的主攻手是牙齿与毒液，口腔细菌至多算帮凶。',
    },
    activity: ['日间活动为主', '幼体主动觅食、大型个体伏击', '高度地点忠诚', '多独行、可在尸体边竞争性聚集'],
    tags: ['印度尼西亚特有种', 'IUCN 濒危', '现生最大蜥蜴', '岛屿顶级捕食者', 'CITES 附录 I', '幼体树栖'],
    summary: '科莫多巨蜥是现生最大的蜥蜴，仅分布于印度尼西亚小巽他群岛。幼体在树上捕食，长大后逐渐转为伏击较大猎物。',
    description:
      '科莫多巨蜥生活在沿海落叶季风林与稀树草原交错的岛屿景观。黄色分叉舌采集化学颗粒，成对犁鼻器帮助它循迹；后弯锯齿牙、咬住后拉和毒腺分泌物共同造成猎物创伤。幼体纤细而斑纹鲜明，主要在树上活动；成年雄性则可能长到约 3 米。国家公园内种群近年总体稳定，但弗洛勒斯破碎生境、猎物减少、犬、道路、非法捕捉与未来海平面上升仍使全球状态维持濒危。',
    storySections: [
      {
        key: 'island-giant',
        label: '外形与岛屿',
        title: '三米纪录，只属于最大的雄性',
        body: '科莫多巨蜥是现生体长最大的蜥蜴，雄性全长纪录 3.04 米，雌性纪录 2.67 米。长期研究种群中，成年雄性约 70 千克、雌性约 25 千克，不同岛屿的猎物供应也影响种群体型。它的背脊平直，鳞片粗糙。',
      },
      {
        key: 'chemical-trail',
        label: '感官',
        title: '舌头采样，犁鼻器判断方向',
        body: '黄色分叉舌从左右两侧采集化学颗粒，再送入口腔顶部成对的犁鼻器分析。全基因组研究发现犁鼻受体扩张，与发达的化学感知相符。自然史资料还记录它能循气味找到数千米外的受伤动物或腐肉，具体距离随个体与情境而变。',
      },
      {
        key: 'bite-and-pull',
        label: '捕猎',
        title: '咬住，然后往后拉',
        body: '后弯的锯齿牙切开组织，巨蜥再用颈部、四肢和身体向后拉扯；下颌毒腺分泌物加重出血与低血压。捕杀大型猎物靠这些作用共同完成，不能把一次咬伤简单等同于立即毒杀。',
      },
      {
        key: 'tree-childhood',
        label: '成长',
        title: '先在树上长大，再到地面伏击',
        body: '刚出巢的幼体更纤细，身上有醒目的黄黑或橙黑斑带，主要在树上寻找昆虫、小蜥蜴和鸟类，顺便躲开会吃掉它们的成年同类。随着身体变重，树栖活动下降，食谱和捕猎方式一起转向大型地面猎物。',
      },
      {
        key: 'five-park-islands',
        label: '分布',
        title: '国家公园五岛与弗洛勒斯种群',
        body: '2024 年官方监测覆盖科莫多、林卡、吉利莫堂、努沙科德和帕达尔五岛。国家公园外的弗洛勒斯沿岸和近岸小岛仍有分散种群，各岛之间较为隔离，需要分别保护栖息地和遗传单元。',
      },
      {
        key: 'conservation-boundary',
        label: '保护',
        title: '公园内的稳定，群岛间的压力',
        body: '国家公园 2024 年估计有 3,270 ± 371 只各年龄个体，近年总体稳定；IUCN 的全球评估却仍是濒危、下降。弗洛勒斯生境破碎、猎物盗猎、犬、道路和非法捕捉都在发生，海平面上升和气候变化还会把沿海窄域的风险推向未来。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1912 年的科莫多岛巨蜥描述',
        body: '奥文斯在 1912 年发表科莫多巨蜥的正式科学描述，命名为 Varanus komodoensis。1926 年，伯登率领的考察队把两只活体送往纽约动物园，巨蜥才开始在远离原产地的公众展览中出现。早期科学描述与后来的活体展示，是两个不同的历史事件。',
      },
    ],
    keyFacts: [
      '黄色分叉舌采集化学颗粒，成对犁鼻器负责分析；循迹数千米之说出自自然史资料，远近随情境而变。',
      '幼体高度树栖、斑纹鲜明，随体型增长转到地面，由主动觅食转向伏击。',
      '锯齿牙撕裂、身体后拉加毒腺分泌物共同致伤；口腔细菌至多算帮凶。',
      '圈养雌性曾被证实能孤雌生殖；野外繁殖仍以有性生殖为主。',
    ],
    threats: [
      '弗洛勒斯沿海生境丧失、退化与破碎化',
      '鹿和野猪等猎物被盗猎',
      '自由活动犬与人兽冲突',
      '道路致死和未经充分评估的基础设施开发',
      '非法捕捉与贸易',
      '海平面上升和气候变化',
      '低遗传多样性与种群隔离',
    ],
    conservationActions: [
      '保护并恢复沿海季风林谷地和弗洛勒斯破碎生境',
      '保护猎物并加强协同巡护、反盗猎和贸易执法',
      '控制自由活动犬并缓解道路和人兽冲突',
      '持续开展种群、巢址、猎物和遗传监测',
      '分别维护重要遗传单元并规划气候避难所',
      '对旅游和基础设施开展环评、承载量评估及社区共管',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'maximum-length',
        label: '雄性全长纪录',
        value: '3.04',
        unit: '米',
        note: '雌性纪录 2.67 米；两笔都是极值纪录',
      },
      {
        key: 'mature-individuals',
        label: 'IUCN 成熟个体估算',
        value: '1,383',
        unit: '只',
        note: '2019 全球评估；仅计成熟个体',
      },
      {
        key: 'park-population',
        label: '国家公园总个体估算',
        value: '3,270 ± 371',
        unit: '只',
        note: '印度尼西亚官方 2024 监测，包含不同年龄阶段',
      },
      {
        key: 'monitored-islands',
        label: '国家公园监测岛屿',
        value: '5',
        unit: '座',
        note: '科莫多、林卡、吉利莫堂、努沙科德、帕达尔',
      },
    ],
    media: {
      image: './images/species/komodo-dragon/01-dry-savanna-portrait.webp',
      alt: '旱季小巽他群岛的枯黄草地与棕榈山坡前，一只成年科莫多巨蜥完整地横向走过开阔地',
      focalPoint: { x: 0.68, y: 0.62 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/komodo-dragon/02-forked-tongue-sensing.webp',
          alt: '落叶季风林边缘，一只成年科莫多巨蜥抬头伸出一条末端分成两叉的浅黄色舌头',
          title: '把空气送进犁鼻器',
          caption: '分叉舌采集左右两侧的化学颗粒，犁鼻器分析这些线索，帮助巨蜥辨别食物方向。',
          focalPoint: { x: 0.72, y: 0.53 },
        },
        {
          image: './images/species/komodo-dragon/03-island-habitat-mosaic.webp',
          alt: '云层下的小巽他群岛山地景观中，枯草坡、季风林、棕榈与远海相连，一只科莫多巨蜥在中景行走',
          title: '草原与季风林之间',
          caption: '科莫多巨蜥利用的是季节性生境镶嵌；开阔草坡、林地遮阴、溪谷和沿海植被共同支持不同体型与季节需求。',
          focalPoint: { x: 0.62, y: 0.58 },
        },
        {
          image: './images/species/komodo-dragon/04-timor-deer-ambush.webp',
          alt: '干燥季风林小径旁，一只科莫多巨蜥伏在左侧阴影中，与右侧一只完整无伤的帝汶鹿保持明显距离',
          title: '伏击发生在最后几步之前',
          caption: '大型科莫多巨蜥常在猎物经过的路径上伏击，较少主动长距离追赶。图中巨蜥与猎物仍保持一段距离。',
          focalPoint: { x: 0.57, y: 0.57 },
        },
        {
          image: './images/species/komodo-dragon/05-arboreal-juvenile.webp',
          alt: '季风林的一根粗壮低树枝上，一只带黑黄橙斑带的细长科莫多巨蜥幼体伸展长尾向前爬行',
          title: '幼体先到树上生活',
          caption: '初孵幼体体型很小、花纹鲜明，树栖能降低被大型同类捕食的风险，也提供适合其体型的昆虫和小型脊椎动物。',
          focalPoint: { x: 0.58, y: 0.52 },
        },
        {
          image: './images/species/komodo-dragon/06-mound-nest-guarding.webp',
          alt: '落叶季风林中，一只成年科莫多巨蜥守在带有多处穴口和新翻土迹的宽大土丘巢旁，地面没有裸露的卵',
          title: '真正的卵室藏在假洞之后',
          caption: '守巢由雌性承担；真正的卵室深藏在土丘内部的多腔通道尽头。',
          focalPoint: { x: 0.57, y: 0.55 },
        },
      ],
    },
    sources: [
      ...KOMODO_DRAGON_SOURCES,
      {
        title: '科莫多巨蜥：科学描述与命名资料',
        url: 'https://repository.naturalis.nl/pub/318765',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: CONTENT_DATE,
    updatedAt: KOMODO_DRAGON_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
