import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE = '2026-08-27' as const;

const GREAT_BLUE_SPOTTED_MUDSKIPPER_CONTENT_DATE = '2026-08-27' as const;

const GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCES = [
  {
    title: 'Catalog of Fishes — Boleophthalmus species account',
    url: 'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?genus=Boleophthalmus&tbl=species',
    kind: 'taxonomy',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Boleophthalmus pectinirostris, AphiaID 279926',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=279926',
    kind: 'taxonomy',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title: 'FishBase — Boleophthalmus pectinirostris',
    url: 'https://www.fishbase.org/summary/15864',
    kind: 'general',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Boleophthalmus pectinirostris',
    url: 'https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T241148837A241148840.en',
    kind: 'conservation',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title:
      'Murdy 1989 — A taxonomic revision and cladistic analysis of the oxudercine gobies',
    url: 'https://journals.australian.museum/media/Uploads/Journals/17704/93_complete.pdf',
    kind: 'taxonomy',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title: '台湾国家公园署 — 大弹涂鱼',
    url: 'https://www.taiwan.nps.gov.tw/home/zh-tw/eco-gallery/21696.html',
    kind: 'general',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title: '香港湿地公园 — 大弹涂鱼',
    url: 'https://www.wetlandpark.gov.hk/tc/biodiversity/beauty-of-wetlands/wildlife/boleophthalmus-pectinirostris',
    kind: 'ecology',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title:
      'Yang et al. 2003 — Size-selective feeding on microphytobenthos',
    url: 'https://doi.org/10.1007/s00227-003-1067-y',
    kind: 'ecology',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title:
      'Yokoya & Tamura 1992 — Fine structure of the skin of amphibious fishes',
    url: 'https://doi.org/10.1002/jmor.1052140305',
    kind: 'ecology',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title:
      'Ishimatsu et al. 2021 — Morphology of the respiratory vasculature',
    url: 'https://doi.org/10.1002/jmor.21404',
    kind: 'ecology',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title:
      'Storz et al. 2020 — Hemoglobin function in a facultative air-breathing fish',
    url: 'https://doi.org/10.1242/jeb.217307',
    kind: 'ecology',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title: 'Hong et al. 2007 — Reproductive ecology of Boleophthalmus pectinirostris',
    url: 'https://www.researchgate.net/publication/279699828_Reproductive_ecology_of_the_mudskipper_Bolephthalmus_pectinirostris',
    kind: 'ecology',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title: 'Toba & Ishimatsu 2014 — Roles of air stored in mudskipper burrows',
    url: 'https://doi.org/10.1111/jfb.12324',
    kind: 'ecology',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title:
      'Chen et al. 2008 — Habitat preference of the early juvenile mudskipper',
    url: 'https://doi.org/10.1111/j.1095-8649.2007.01723.x',
    kind: 'ecology',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title:
      'Nanjo et al. 2008 — Territory characteristics and function of the mudskipper',
    url: 'https://doi.org/10.1017/S0025315407054434',
    kind: 'ecology',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title: 'Takegaki et al. 2005 — Age and growth in the Ariake Sea',
    url: 'https://doi.org/10.1016/j.fishres.2005.04.005',
    kind: 'ecology',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title:
      'Takegaki et al. 2005 — Distribution and conservation in Ariake and Yatsushiro sounds',
    url: 'https://doi.org/10.11369/jji1950.52.9',
    kind: 'conservation',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title:
      'Wu et al. 2024 — Climate-change responses of Boleophthalmus genetic lineages',
    url: 'https://doi.org/10.3389/fevo.2024.1364822',
    kind: 'conservation',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
  {
    title: '台北市社子湿地生物资源调查',
    url: 'https://www-ws.gov.taipei/Download.ashx?icon=..pdf&n=56S%2B5a2Q5bO2LeeUn%2BaFi%2Biqv%2BafpeWgseWRii3nrKzkuIDmrKHloLHlkYoucGRm&u=LzAwMS9VcGxvYWQvMzQ0L3JlbGZpbGUvNDMyNzYvNzYwNDMwNi85OGNiZmVhYi00OTQ1LTQ3ZjUtYTc2Ni1lNDU0MDk3M2ExN2YucGRm',
    kind: 'distribution',
    accessedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-boleophthalmus-pectinirostris',
    slug: 'great-blue-spotted-mudskipper',
    names: {
      zh: '大弹涂鱼',
      en: 'Great Blue-spotted Mudskipper',
      aliases: ['花跳', '花条'],
    },
    scientificName: 'Boleophthalmus pectinirostris',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Actinopterygii', '辐鳍鱼纲'),
      taxon('Gobiiformes', '虾虎鱼目'),
      taxon('Oxudercidae', '背眼虾虎鱼科'),
      taxon('Boleophthalmus', '大弹涂鱼属'),
    ),
    conservation: conservation('VU', 'decreasing', 2024, 'A2bcd'),
    distribution: {
      realms: ['marine'],
      continents: ['亚洲'],
      regions: [
        '中国大陆、台湾、韩国与日本的河口潮间带',
        '越南北部与马来半岛的泥质河口',
        '印度尼西亚苏门答腊及邻近东印度洋边缘',
      ],
      countries: ['中国', '韩国', '日本', '越南', '马来西亚', '印度尼西亚'],
      range:
        '分布于东亚至东南亚西太平洋和东印度洋边缘的河口潮间带，以湿软泥滩、潮沟和红树林边缘为核心；在水与裸露泥面间往返，并利用泥洞度过高潮和繁殖。',
      center: { lat: 27, lng: 124 },
    },
    habitats: [
      {
        name: '河口开阔软泥潮滩',
        realm: 'marine',
        description:
          '退潮后活动与刮食的主要空间，泥面保持湿润并生长硅藻型微型底栖藻类。',
        isPrimary: true,
      },
      {
        name: '红树林边缘与潮沟湿泥',
        realm: 'marine',
        description:
          '富有机质、邻近浅水的软泥微生境，供个体活动、回水和躲避干燥。',
      },
      {
        name: '浅潮池与低盐水覆泥面',
        realm: 'marine',
        description:
          '鱼在空气与水之间往返的水域，也为幼鱼和浸水活动提供微生境。',
      },
      {
        name: '潮滩泥洞与空气产卵室',
        realm: 'marine',
        description:
          '高潮、夜间、越冬和繁殖使用的洞穴系统；空气室为附着在壁面和顶部的胚胎供氧。',
      },
    ],
    measurements: {
      length: {
        max: 17.5,
        unit: 'cm',
        note: 'FishBase 对雄性或未判性个体的最大总长记录；台湾野外资料常见 10—15 厘米。',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: ['底栖硅藻', '微型底栖藻类', '泥表有机藻膜'],
      description:
        '低潮时用宽口和具缺刻的下颌齿刮取泥表微型底栖藻类。香港泥滩研究显示它选择性摄食较大的硅藻，但食物组成会随地点、季节和体长改变。',
    },
    activity: [
      '低潮在湿泥表面刮食',
      '用肉质胸鳍支撑并划动爬行',
      '短距离跳跃与雄鱼求偶跃起',
      '在空气与浅水之间往返呼吸',
      '高潮或夜间退入泥洞',
      '雄鱼在空气产卵室护卵',
    ],
    tags: ['易危', '潮间带', '河口泥滩', '空气呼吸', '微藻刮食', '洞穴繁殖'],
    summary:
      '大弹涂鱼是东亚至东南亚河口泥滩上的两栖鱼类，以高位眼、肉质胸鳍和浅蓝斑点识别。它在低潮刮食泥表硅藻，并把卵留在泥洞的空气产卵室中。',
    description:
      '退潮后，大弹涂鱼用肉质胸鳍支撑身体，在湿泥面刮食微型藻类。湿润皮肤、富血管的口咽和鳃盖腔表面帮助它在空气中呼吸，高潮时则退回泥洞。它的英文名 Great Blue-spotted Mudskipper 与另一种以动物性食物为主的 Giant Mudskipper 不同。全球 IUCN 评估为易危，捕捞和河口生境退化仍在压缩种群。',
    storySections: [
      {
        key: 'blue-spotted-identity',
        label: '识别',
        title: '浅蓝斑点与高位眼',
        body: '宽钝头、高位眼、两枚背鳍和散落在青褐身体上的浅蓝点组成了它的识别线索。英文主名是 Great Blue-spotted Mudskipper；Giant Mudskipper 指另一种体形更大的 Periophthalmodon schlosseri。',
      },
      {
        key: 'amphibious-respiration',
        label: '呼吸',
        title: '皮肤与口咽表面都要保持湿润',
        body: '贴近表皮的毛细血管和富血管的口咽、鳃盖腔内衬让它离水后继续交换气体，鳃也没有退出这套系统。回到水洼和保持黏液湿润，是在潮滩活动的必要条件。',
      },
      {
        key: 'fin-supported-motion',
        label: '移动',
        title: '胸鳍撑起一条鱼',
        body: '肉质胸鳍像支点一样托住前半身，再以划动、爬行和短跃穿过软泥。繁殖期雄鱼还会竖起两枚背鳍垂直跃起；这里的“行走”不是四足动物式步态。',
      },
      {
        key: 'diatom-grazing',
        label: '食性',
        title: '刮食泥表的微型藻膜',
        body: '它让嘴贴近泥面，刮取硅藻主导的微型底栖藻膜。香港研究发现它偏向摄食最大长度超过 50 微米的硅藻；这个数字属于特定泥滩实验，不是所有河口的固定菜单。',
      },
      {
        key: 'air-filled-nursery',
        label: '繁殖',
        title: '泥下的空气育儿室',
        body: '卵以附着丝粘在产卵室壁面和顶部，在空气中发育，雄鱼留洞护卵。样洞中的空气量从 30 到大于 400 毫升；雄鱼补气是证据支持的机制模型，但尚不能描述成逐次行为都被直接拍摄。',
      },
      {
        key: 'shared-mudflat',
        label: '保护',
        title: '大弹涂鱼与招潮蟹共用泥滩',
        body: '调查可以在同一河口泥面记录到大弹涂鱼和弧边招潮蟹，说明它们在同一地区生活。尚无证据表明二者相互喂食或依存。保护潮沟、泥滩水文和沉积物质量，也有助于维持其他潮间带动物。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的命名与相似英文名',
        body: '大弹涂鱼的命名记录可追溯到林奈 1758 年的描述，现用学名为 Boleophthalmus pectinirostris。英文名 Great Blue-spotted Mudskipper 对应体表浅蓝斑点；Giant Mudskipper 则指另一个物种 Periophthalmodon schlosseri。泥洞研究发现，大弹涂鱼把卵附着在空气产卵室的壁面与顶部。',
      },
    ],
    keyFacts: [
      'Catalog of Fishes 接受 Boleophthalmus pectinirostris，当前科级口径为 Oxudercidae。',
      'IUCN 2024 年评估为 VU A2bcd，当前趋势为 decreasing。',
      '皮肤、口咽、鳃盖腔内衬和鳃共同参与水陆气体交换。',
      '低潮主要刮食泥表硅藻型微型底栖藻类。',
      '卵附着在无水产卵室壁面和顶部，雄鱼留洞护卵。',
      '与弧边招潮蟹的关系只能写同域共现，不能写互利共生。',
    ],
    threats: [
      '食用捕捞和局地过度开发造成的种群压力',
      '河口围垦、港口和岸线硬化造成泥滩丧失与破碎化',
      '工业、农业和城市污染改变沉积物与底栖藻类环境',
      '气候与水文变化对不同地理谱系适生区的差异化影响',
    ],
    conservationActions: [
      '管理捕捞季节、体长、渔获量与重要繁殖泥滩',
      '长期监测泥面密度、渔获努力、幼鱼补充和洞穴占用',
      '保护并恢复河口潮沟、软泥滩、红树林边缘及潮汐连通',
      '控制污染并监测沉积物和食用组织中的污染物',
      '保存不同地理谱系，避免未经遗传评估的跨区放流',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'max-length',
        label: '报告最大总长',
        value: '17.5',
        unit: '厘米',
        note: 'FishBase 雄性或未判性最大记录；不是普通成鱼的典型体长。',
      },
      {
        key: 'generation-length',
        label: '估算世代长度',
        value: '4.5',
        unit: '年',
        note: 'IUCN 评估采用的估算值，不是每尾鱼固定 4.5 岁繁殖。',
      },
      {
        key: 'selected-diatom-size',
        label: '选择摄食硅藻',
        value: '>50',
        unit: '微米',
        note: '香港单一泥滩研究中的硅藻最大长度阈值。',
      },
      {
        key: 'burrow-air-volume',
        label: '洞穴回收气体',
        value: '30–>400',
        unit: '毫升',
        note: '日本有明海样洞实测范围，不是每个洞穴的标准容量。',
      },
    ],
    media: {
      image:
        './images/species/great-blue-spotted-mudskipper/01-mudflat-adult-portrait.webp',
      alt: '一尾大弹涂鱼以肉质胸鳍撑在东亚河口的湿软泥面上，头和两枚背鳍散布浅蓝斑点',
      focalPoint: { x: 0.64, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/great-blue-spotted-mudskipper/02-dorsal-fins-and-blue-spots.webp',
          alt: '一尾大弹涂鱼侧身撑在湿泥上，高位眼、两枚分离的背鳍和浅蓝斑点清楚可见',
          title: '高位眼与两枚背鳍组成识别线索',
          caption:
            '生成图重建外部形态，不能展示皮肤与口咽表面的毛细血管，也不能替代凭证标本和鳍条计数。',
          focalPoint: { x: 0.5, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/great-blue-spotted-mudskipper/03-mudflat-fiddler-crab-cooccurrence.webp',
          alt: '一尾大弹涂鱼与三只弧边招潮蟹分处同一片河口泥滩，彼此没有接触',
          title: '鱼和蟹共享一片泥滩',
          caption:
            '同一调查地共现不等于互利、共生或捕食，画面也不提供固定密度。',
          focalPoint: { x: 0.62, y: 0.62 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/great-blue-spotted-mudskipper/04-diatom-film-grazing.webp',
          alt: '一尾大弹涂鱼把宽口贴近湿泥表面，刮过薄薄的微型底栖藻膜',
          title: '贴近泥面刮食藻膜',
          caption:
            '一次接触只能重建泥表刮食情境，不能识别硅藻种类、测量摄入量或代表完整食谱。',
          focalPoint: { x: 0.55, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/great-blue-spotted-mudskipper/05-short-mudflat-skip.webp',
          alt: '一尾大弹涂鱼在湿泥上完成一次贴近地面的短跃，身体和尾部弯曲，胸鳍自然展开',
          title: '身体和尾部推动一次短跃',
          caption:
            '画面冻结一次低跃，不定义完整步态、跳跃高度、速度、距离或求偶行为。',
          focalPoint: { x: 0.49, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/great-blue-spotted-mudskipper/06-air-filled-egg-chamber-cutaway.webp',
          alt: '大弹涂鱼泥洞的解释性剖面有两个泥面开口、Y 形通道、空气产卵室、顶部附着卵和一尾成鱼',
          title: '泥下空气室为附着卵供氧',
          caption:
            '剖面连接已知结构，不给出真实洞穴尺寸、卵数、气体组成、成鱼性别或补气频率。',
          focalPoint: { x: 0.5, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...GREAT_BLUE_SPOTTED_MUDSKIPPER_SOURCES,
      {
        title: 'GBIF: Boleophthalmus pectinirostris (Linnaeus, 1758) nomenclatural record',
        url: 'https://www.gbif.org/species/2378429',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_CONTENT_DATE,
    updatedAt: GREAT_BLUE_SPOTTED_MUDSKIPPER_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
