import type { SpeciesSource, Species } from '../../types/species.ts';

import { CONTENT_DATE, animalTaxonomy, conservation, taxon } from './shared.js';

const RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE = '2026-08-17' as const;

const RUSTY_PATCHED_BUMBLE_BEE_CONTENT_DATE = '2026-08-17' as const;

const RUSTY_PATCHED_BUMBLE_BEE_SOURCES = [
  {
    title: 'Hatfield et al. — Bombus affinis, IUCN Red List 2015-2',
    url: 'https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T44937399A46440196.en',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'ITIS — Bombus affinis (TSN 714782)',
    url: 'https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=714782',
    kind: 'taxonomy',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'COSEWIC 2022 — Rusty-patched Bumble Bee assessment and status report',
    url: 'https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Environment and Climate Change Canada 2020 — Recovery Strategy for Bombus affinis',
    url: 'https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/recovery-strategies/rusty-patched-bumble-bee-2020.html?wbdisable=true',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'USFWS — Rusty Patched Bumble Bee current species profile',
    url: 'https://www.fws.gov/species/rusty-patched-bumble-bee-bombus-affinis',
    kind: 'general',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'USFWS 2017 — Endangered Species Status for Rusty Patched Bumble Bee',
    url: 'https://www.govinfo.gov/content/pkg/FR-2017-01-11/pdf/2017-00195.pdf',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'USFWS 2021 — Recovery Plan for the Rusty Patched Bumble Bee',
    url: 'https://www.fws.gov/media/recovery-plan-rusty-patched-bumble-bee',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'USFWS 2022 — Rusty Patched Bumble Bee 5-Year Review',
    url: 'https://ecos.fws.gov/docs/tess/species_nonpublish/3911.pdf',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'USFWS 2026 — Final Critical Habitat Rule for Bombus affinis',
    url: 'https://www.govinfo.gov/content/pkg/FR-2026-06-01/pdf/2026-10846.pdf',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'USFWS 2026 — Voluntary Conservation Measures for Bombus affinis',
    url: 'https://www.fws.gov/media/voluntary-conservation-measures-rusty-patched-bumble-bee-bombus-affinis',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Cameron et al. 2011 — Patterns of widespread decline in North American bumble bees',
    url: 'https://doi.org/10.1073/pnas.1014743108',
    kind: 'distribution',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Colla et al. 2012 — Assessing declines using museum specimens',
    url: 'https://doi.org/10.1007/s10531-012-0383-2',
    kind: 'distribution',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Cameron et al. 2016 — Test of the invasive pathogen hypothesis',
    url: 'https://doi.org/10.1073/pnas.1525266113',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Mola et al. 2024 — Range-wide genetics, population structure and colony abundance',
    url: 'https://doi.org/10.1093/jisesa/ieae041',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Boone et al. 2022 — Bombus affinis nest observations',
    url: 'https://doi.org/10.1111/icad.12564',
    kind: 'ecology',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Smith et al. 2025 — Conservation questions from discovered wild Bombus affinis nests',
    url: 'https://doi.org/10.1111/icad.12808',
    kind: 'ecology',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Simanonok et al. 2021 — A century of pollen foraging from museum specimens',
    url: 'https://doi.org/10.1007/s10531-020-02081-8',
    kind: 'ecology',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Wolf et al. 2022 — Floral resources used in the Midwestern United States',
    url: 'https://doi.org/10.3375/22-2',
    kind: 'ecology',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Hepner et al. 2024 — Central Appalachian forest refuges for Bombus affinis',
    url: 'https://doi.org/10.1016/j.foreco.2024.121751',
    kind: 'distribution',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'MacKenzie 1994 — Honey bee and bumble bee foraging on cranberry',
    url: 'https://doi.org/10.1051/apido:19940404',
    kind: 'ecology',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-bombus-affinis',
    slug: 'rusty-patched-bumble-bee',
    names: { zh: '锈斑熊蜂', en: 'Rusty-patched Bumble Bee', aliases: [] },
    scientificName: 'Bombus affinis',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Insecta', '昆虫纲'),
      taxon('Hymenoptera', '膜翅目'),
      taxon('Apidae', '蜜蜂科'),
      taxon('Bombus', '熊蜂属'),
    ),
    conservation: conservation('CR', 'decreasing', 2014, 'A2b'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['北美洲'],
      regions: ['北美东部温带区', '五大湖—上中西部', '中阿巴拉契亚山地'],
      countries: ['美国', '加拿大'],
      range:
        '历史上广布北美东部温带区；当前已知核心破碎分布于美国上中西部和中阿巴拉契亚。加拿大最后一次确认记录在 2009 年，之后虽经大规模调查仍未检出，可能只剩未发现的极小残存种群或已在当地消失。',
      center: { lat: 43, lng: -89 },
    },
    habitats: [
      {
        name: '森林—林缘—草甸生境镶嵌',
        realm: 'terrestrial',
        description:
          '一个年度蜂群需在可达范围内获得早春林下和木本花源、夏秋草甸与湿地花源、地下巢穴，以及安全的越冬土壤。',
        isPrimary: true,
      },
      {
        name: '地下兽穴与疏松土壤',
        realm: 'terrestrial',
        description:
          '巢多位于废弃啮齿动物洞、其他哺乳动物洞或有遮蔽的空腔，常在地下约 0.3 至 1.2 米；已交配新蜂王另在阴凉、排水良好的林地落叶层和松土中越冬。',
      },
      {
        name: '城市花园与农田边缘',
        realm: 'terrestrial',
        description:
          '邻近半自然生境、具有连续花源和可渗透土壤的城市公园、花园与农地边缘可作补充生境，但硬化、耕作、农药和管理蜂会降低其质量。',
      },
    ],
    measurements: {
      length: {
        min: 9,
        max: 23,
        unit: 'mm',
        note: '成虫体长；蜂王 19—23 毫米、工蜂 9—16 毫米、雄蜂 14—17 毫米',
      },
    },
    diet: {
      types: ['nectarivore', 'herbivore'],
      foods: ['多种开花植物的花蜜', '多种开花植物的花粉'],
      description:
        '短舌、广食性访花者；成虫以花蜜补充碳水化合物，并采集富含蛋白质和脂类的花粉供蜂群。它需要从早春至秋季连续、丰富且多样的花源。',
    },
    activity: ['日行性', '一年一代的真社会性蜂群', '只有已交配新蜂王越冬', '春季蜂王独自创巢'],
    tags: ['传粉者', '北美东部', '社会性昆虫', 'IUCN 极危', '美国 ESA 濒危', '地下筑巢'],
    summary: '工蜂和雄蜂的黄色第二腹背板中央常带锈褐斑；这个曾遍布北美东部的熊蜂如今主要残存在上中西部和中阿巴拉契亚。',
    description:
      '锈斑熊蜂每年重建蜂群：已交配新蜂王单独越冬，春季出蛰、补能并寻找旧兽穴等巢址；工蜂随后承担访花和育幼，晚夏蜂群产生雄蜂与下一代蜂王。它利用森林、林缘、草甸、湿地及部分城市生境组成的全季资源链。历史急剧衰退的确切原因仍未完全解决；病原体、农药、生境退化、管理蜂、气候压力和小种群近交持续且可能协同作用。',
    storySections: [
      {
        key: 'caste-identification',
        label: '外形与蜂级',
        title: '工蜂和雄蜂的锈褐斑',
        body: '工蜂与雄蜂的第二腹背板 T2 中央通常是锈褐色，斑块后方和两侧仍有黄色毛；蜂王的 T2 通常整体为黄。蜂王也更大：19 至 23 毫米，对比工蜂 9 至 16 毫米和雄蜂 14 至 17 毫米。锈斑是强辨识提示，可靠鉴定还需结合头颊、其余毛色、地点和专家复核。',
      },
      {
        key: 'seasonal-habitat',
        label: '生境',
        title: '从早春到秋季都需要花源',
        body: '早春蜂王在林地花和开花木本上补充能量，夏秋工蜂、雄蜂与新蜂王利用草甸、湿地、稀树草原、林缘和部分花园。花源需靠近巢洞与越冬土壤，并覆盖整个活动季，单一盛夏花田提供的资源并不足够。',
      },
      {
        key: 'borrowed-burrow',
        label: '巢与越冬',
        title: '借一座旧兽穴筑巢，换一处安静土层过冬',
        body: '巢多位于废弃啮齿动物洞或有遮蔽空腔中，常在地下约 0.3 至 1.2 米，也有地表和建筑结构中的例外。冬季仅已交配的新蜂王存活。本种唯一有文件记录的越冬蜂王，位于林内落叶与松土下几厘米；更广的偏好主要依据同属研究推断。',
      },
      {
        key: 'annual-colony',
        label: '年度蜂群',
        title: '一位蜂王，从春天重新开始',
        body: '创巢蜂王独自产下第一批工蜂；工蜂接手访花、育幼与巢务后，蜂群在夏季扩张。晚夏至初秋出现雄蜂和未交配新蜂王，交配后的新蜂王寻找越冬点；雄蜂、工蜂与旧蜂王在冬前死亡。所谓“一年一代”，说的是蜂群的循环，单只成虫的寿命短得多。',
      },
      {
        key: 'flowers-and-pollination',
        label: '花源与授粉',
        title: '标本花粉记录的食谱',
        body: '百年博物馆标本的花粉显示，锈斑熊蜂利用过近百个植物类群，没有发现全分布区都必需的单一花种。野外观察记录到它振动蔓越莓花取粉，番茄授粉效率则缺少同等直接研究。生境修复需要让当地从早春到秋季都有连续、多样的花源。',
      },
      {
        key: 'decline-and-recovery',
        label: '衰退与恢复',
        title: '调查数量与种群健康需要分别看',
        body: '调查增多后，已知观察点增加，但多数地点仍只有一两只记录。遗传研究发现高近交和约 15% 的雄性二倍体率，病原体、农药、生境与气候压力也可能叠加。保护调查需要记录分布、蜂群产出、遗传、疾病与暴露情况，不能只统计照片数量。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1863 年描述的锈斑熊蜂',
        body: '克雷松在 1863 年描述锈斑熊蜂，学名 Bombus affinis 此后保持稳定。俗名所指的锈褐色斑通常出现在工蜂和雄蜂的第二腹背板，蜂王这一节通常整体为黄色。因此早春见到没有锈斑的大蜂王，仍可能是同一物种。',
      },
    ],
    keyFacts: [
      '工蜂和雄蜂的 T2 中央通常有被黄色毛包围的锈褐斑；蜂王的 T2 通常整体为黄。',
      '蜂王体长 19 至 23 毫米、工蜂 9 至 16 毫米、雄蜂 14 至 17 毫米。',
      '蜂群一年一代，只有已交配的新蜂王单独越冬，翌春重新创巢。',
      '加拿大自 2009 年后没有确认记录；美国当前最明确的核心在上中西部与中阿巴拉契亚。',
      '野外研究直接观察到它振动蔓越莓花取粉；番茄授粉服务则还停留在推测阶段。',
      'USFWS 的约 87% 指历史 432 个县/县等价区对比 2000 年以来 55 个的空间占用缩减，不是土地面积。',
    ],
    threats: [
      '病原体及来自管理熊蜂和蜜蜂的传播风险',
      '小种群近交、二倍体雄蜂与区域遗传多样性流失',
      '杀虫剂、杀菌剂、除草剂及其混合与土壤残留暴露',
      '森林、林缘、草甸生境丧失、破碎化与季节花源缺口',
      '巢洞丧失、土壤压实、硬化与不当时机的割草、火烧或翻土',
      '极端热、干旱、洪水、春霜和物候改变等气候压力',
      '管理蜂造成的花源竞争与病原外溢',
    ],
    conservationActions: [
      '保护并连接森林、林缘、草甸、湿地和城市半自然斑块，提供早春至秋季连续本地花源',
      '保留废弃兽穴、既有空腔、落叶层和疏松未压实的巢址与越冬土壤',
      '采用综合虫害管理，减少花期施药、系统性农药、混合暴露与漂移径流',
      '加强商业熊蜂防逃逸、管理蜂病原筛查，并谨慎控制核心生境附近蜂箱密度',
      '以分区轮替和适当季节安排割草、火烧、放牧、林业及道路维护',
      '联合监测占域、蜂群产出、遗传、病原体和农药暴露，并在风险评估后才开展增殖或重引入',
    ],
    metrics: {
      adultLengthCm: [0.9, 2.3],
    },
    featuredStats: [
      {
        key: 'caste-length',
        label: '成虫体长',
        value: '9—23',
        unit: '毫米',
        note: '蜂王 19 至 23、工蜂 9 至 16、雄蜂 14 至 17 毫米',
      },
      {
        key: 'county-occupancy-loss',
        label: 'USFWS 县级空间占用缩减',
        value: '约 87',
        unit: '%',
        note: '历史 432 个县/县等价区，对比 2000 年以来 55 个；按出现记录计',
      },
      {
        key: 'colony-cycle',
        label: '蜂群周期',
        value: '一年一代',
        note: '只有已交配新蜂王越冬，翌春重新创巢',
      },
      {
        key: 'critical-habitat',
        label: '美国 2026 关键栖息地',
        value: '621,172',
        unit: '公顷',
        note: '六州 14 单元的 ESA 法律指定范围；与当前分布或保护区面积各有所指',
      },
    ],
    media: {
      image: './images/species/rusty-patched-bumble-bee/01-wild-bergamot-worker-portrait.webp',
      alt: '一只锈斑熊蜂工蜂停在淡紫色野蜂香草花序上，黄色第二腹背板中央可见局部锈褐斑',
      focalPoint: { x: 0.64, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/rusty-patched-bumble-bee/02-diagnostic-rusty-patch.webp',
          alt: '一只锈斑熊蜂工蜂停在白色 Culver’s root 花穗上，背侧可见黄色 T1 和被黄色包围的 T2 锈褐斑',
          title: '锈斑只在 T2 中央',
          caption: '工蜂和雄蜂的锈褐斑是强辨识提示，但照片鉴定仍需结合头颊、其他毛色、地点和专家复核。',
          focalPoint: { x: 0.55, y: 0.5 },
        },
        {
          image: './images/species/rusty-patched-bumble-bee/03-prairie-woodland-mosaic.webp',
          alt: '开花草原、橡树稀树草原、林缘和湿草甸相连，一只很小的锈斑熊蜂工蜂停在前景花上',
          title: '一整年的生境链',
          caption: '森林早春花、草甸与湿地夏秋花、林缘巢洞和越冬土壤需要在可达景观内彼此连接。',
          focalPoint: { x: 0.57, y: 0.63 },
        },
        {
          image: './images/species/rusty-patched-bumble-bee/04-underground-nest-entrance.webp',
          alt: '一只携带花粉的锈斑熊蜂工蜂停在林缘疏松土壤中的废弃小型哺乳动物洞口外',
          title: '借来的地下入口',
          caption: '锈斑熊蜂常在废弃兽穴或其他空腔中筑巢，图中仅展示洞口附近的活动。',
          focalPoint: { x: 0.49, y: 0.6 },
        },
        {
          image: './images/species/rusty-patched-bumble-bee/05-spring-foundress-queen.webp',
          alt: '一只体型较大的锈斑熊蜂创巢蜂王在春季柳花上补能，T1 与 T2 均呈黄色而没有锈斑',
          title: '没有锈斑的创巢蜂王',
          caption: '蜂王出蛰后依靠早春花源恢复能量、寻找巢址；她的 T2 通体黄色，锈斑是工蜂和雄蜂的标记。',
          focalPoint: { x: 0.54, y: 0.52 },
        },
        {
          image: './images/species/rusty-patched-bumble-bee/06-late-summer-male.webp',
          alt: '一只触角较长、后足没有花粉筐的锈斑熊蜂雄蜂停在晚夏一枝黄花花序上',
          title: '年度蜂群末期的雄蜂',
          caption: '雄蜂在晚夏至初秋出现，交配后在冬前死亡；工蜂负责采粉与巢内工作。',
          focalPoint: { x: 0.55, y: 0.52 },
        },
      ],
    },
    sources: RUSTY_PATCHED_BUMBLE_BEE_SOURCES,
    featured: true,
    publishedAt: CONTENT_DATE,
    updatedAt: RUSTY_PATCHED_BUMBLE_BEE_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
