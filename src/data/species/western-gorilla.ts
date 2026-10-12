import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const WESTERN_GORILLA_SOURCE_DATE = '2026-08-20' as const;

const WESTERN_GORILLA_CONTENT_DATE = '2026-08-20' as const;

const WESTERN_GORILLA_SOURCES = [
  {
    title: '中华人民共和国 CITES 公约履约工作办公室 — 物种名录（Gorilla gorilla：大猩猩）',
    url: 'https://www.cites.org.cn/zxgg/zxzn/202404/t20240419_770803.html',
    kind: 'taxonomy',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Gorilla gorilla (assessed 2016; amended 2018)',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T9404A136250858.en',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database v2.5 — Gorilla gorilla',
    url: 'https://www.mammaldiversity.org/taxon/1000717/',
    kind: 'taxonomy',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (effective 5 March 2026)',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'CMS — Gorilla gorilla (Appendix I since 2005)',
    url: 'https://www.cms.int/species/gorilla-gorilla-0',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC — Western Lowland Gorillas and Central Chimpanzees Action Plan 2015–2025',
    url: 'https://portals.iucn.org/library/sites/library/files/documents/2014-075.pdf',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC — Revised Cross River Gorilla Action Plan 2014–2019',
    url: 'https://portals.iucn.org/library/sites/library/files/documents/IUCN-2014-013.pdf',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC 2025 — Great ape population health, disease control and outbreak response',
    url: 'https://doi.org/10.2305/JEPK4717',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Strindberg et al. 2018 — Guns, germs, and trees determine gorilla density and distribution',
    url: 'https://doi.org/10.1126/sciadv.aar2964',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Imong et al. 2014 — Human activity and Cross River Gorilla range fragmentation',
    url: 'https://doi.org/10.1111/acv.12100',
    kind: 'distribution',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Meireles et al. 2026 — Global Data From Great Ape Zoo Populations Confirm a High Prevalence of Overweight Individuals',
    url: 'https://doi.org/10.1002/ajp.70185',
    kind: 'general',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Smithsonian National Zoo — Western Lowland Gorilla',
    url: 'https://nationalzoo.si.edu/animals/western-lowland-gorilla',
    kind: 'general',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Doran-Sheehy et al. 2009 — Male and female western gorilla diet and fallback foods',
    url: 'https://doi.org/10.1002/ajpa.21118',
    kind: 'ecology',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Robbins & Robbins 2018 — Variation in the social organization of gorillas',
    url: 'https://doi.org/10.1002/evan.21721',
    kind: 'ecology',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Robbins et al. 2022 — Population dynamics of western gorillas at Mbeli Bai',
    url: 'https://doi.org/10.1371/journal.pone.0275635',
    kind: 'ecology',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Stokes et al. 2003 — Female dispersal and reproductive success in western lowland gorillas',
    url: 'https://doi.org/10.1007/s00265-003-0630-3',
    kind: 'ecology',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Petre et al. 2015 — Seed quantity and spatial distribution by western lowland gorillas',
    url: 'https://doi.org/10.1017/S0266467415000073',
    kind: 'ecology',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Breuer et al. 2005 — First observation of tool use in wild gorillas',
    url: 'https://doi.org/10.1371/journal.pbio.0030380',
    kind: 'ecology',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
  {
    title: 'Bermejo et al. 2006 — Ebola outbreak mortality in western gorillas',
    url: 'https://doi.org/10.1126/science.1133105',
    kind: 'conservation',
    accessedAt: WESTERN_GORILLA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-gorilla-gorilla',
    slug: 'western-gorilla',
    names: {
      zh: '大猩猩',
      en: 'Western Gorilla',
      aliases: ['西部大猩猩'],
    },
    scientificName: 'Gorilla gorilla',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Primates', '灵长目'),
      taxon('Hominidae', '人科'),
      taxon('Gorilla', '大猩猩属'),
    ),
    conservation: conservation('CR', 'decreasing', 2016, 'A4bcde'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['非洲'],
      regions: ['西赤道非洲', '刚果盆地西部', '尼日利亚—喀麦隆克罗斯河森林'],
      countries: ['安哥拉', '喀麦隆', '中非共和国', '赤道几内亚', '加蓬', '尼日利亚', '刚果共和国'],
      range: '原生分布从尼日利亚东南部、喀麦隆和中非共和国南部延伸至赤道几内亚大陆、加蓬、刚果共和国及安哥拉卡宾达；西部低地亚种占据较广阔而破碎的低地森林，克罗斯河亚种仅存于尼日利亚、喀麦隆边境的若干森林斑块。',
      center: { lat: 1.2, lng: 13.2 },
    },
    habitats: [
      {
        name: '热带湿润低地森林',
        realm: 'terrestrial',
        description: '西部低地亚种主要生活在常绿与半常绿低地林，也利用次生林；多数记录低于海拔 500 米。',
        isPrimary: true,
      },
      {
        name: '沼泽林与湿润林间空地',
        realm: 'terrestrial',
        description: '沼泽林、浅水草地和自然林间空地提供季节性食物；大猩猩会涉水取食，主要仍在陆地活动。',
      },
      {
        name: '湿润丘陵与山地森林',
        realm: 'terrestrial',
        description: '克罗斯河亚种现多见于崎岖偏远森林，最高约至海拔 1,900 米；这种格局也反映了低地人类活动带来的避难效应。',
      },
    ],
    measurements: {
      height: {
        max: 1.8,
        unit: 'm',
        note: '西部低地成年雄兽短暂直立的上限参考；不是惯常姿态、肩高或两个亚种的完整范围',
      },
      weight: {
        typical: 165.9,
        unit: 'kg',
        note: '2026 同行评审综合研究的野外成年雄性加权均值；成年雌性对应均值约 70.7 千克，二者都不是个体上下限',
      },
    },
    diet: {
      types: ['herbivore', 'insectivore'],
      foods: ['成熟果实', '草本茎叶与髓', '嫩叶', '树皮', '蚂蚁与白蚁'],
      description: '以植物为主、随季节改变的叶食、果食者。果实充足时显著增加食果，缺果期更多依靠草本、叶、髓和树皮；不同地点取食蚂蚁、白蚁与坚果的频率差异很大。',
    },
    activity: [
      '昼行，以地面指关节行走为主',
      '每晚通常重新选择地点并筑巢休息',
      '典型繁殖群多有一只成年雄性、数只雌性和幼体，但也存在独居雄性、雄性群与少见多雄群',
      '半地栖，也会攀树和浅水涉行；家域会随食物季节变化并可与其他群体重叠',
    ],
    tags: ['中非雨林', '大型类人猿', '两个亚种', '种子传播者', '极危物种', 'CITES 附录 I', 'CMS 附录 I'],
    summary: '西部大猩猩生活在西赤道非洲雨林，以果实和草本等为食，筑巢过夜。它繁殖缓慢，面临道路、疾病和猎捕的威胁，目前处于极危状态。',
    description: 'Gorilla gorilla 是大猩猩属中的西部物种，包含西部低地亚种与克罗斯河亚种；东部大猩猩和山地大猩猩属于另一个物种。成体用指关节支撑身体行走，成熟雄性背部呈银灰色。繁殖群常由一只成年雄性、数只雌性和幼体组成，也有其他群体结构。它们吞食果实并传播森林植物的种子，繁殖缓慢，难以快速弥补偷猎、埃博拉和栖息地退化造成的损失。',
    storySections: [
      {
        key: 'identity',
        label: '物种边界',
        title: '大猩猩属的西部物种',
        body: '大猩猩属的两个现生物种是 Gorilla gorilla 与 Gorilla beringei。前者的英文名为 Western Gorilla，包含西部低地大猩猩和克罗斯河大猩猩两个亚种。维龙加山地的山地大猩猩属于后者。',
      },
      {
        key: 'form-and-movement',
        label: '形态与移动',
        title: '指关节行走和银灰色背部',
        body: '大猩猩没有尾巴，双臂显著长于双腿，地面移动时主要用弯曲手指的中节承重。西部低地亚种的毛通常较短，呈灰黑至棕黑色，头顶可带暖棕色；雄性成熟后，背与臀部出现银灰色毛。野外体重样本显示雄性比雌性重，站立高度则随姿态变化，难以直接比较。',
      },
      {
        key: 'seasonal-diet',
        label: '食物与森林',
        title: '果实丰年走得更远，缺果时回到茎叶',
        body: '野外研究显示，大猩猩随果实供应改变食谱，草本茎叶、髓和树皮是较稳定的后备食物。部分地点还记录到白蚁、蚂蚁或坚果，地区差异很大。许多大粒种子随粪便散落到新的地点。喀麦隆一个种群的粪样研究发现，经过这种传播的部分植物种子，发芽率保持不变或有所提高。',
      },
      {
        key: 'social-life',
        label: '群体与关系',
        title: '银背雄性与迁入迁出的成员',
        body: '典型繁殖群常由一只银背雄性、数只成年雌性和幼体组成，雌雄在成长后都可能迁出，雌性成年后也可能再次换群；独居雄性、雄性群和少见多雄群同样存在。这样的群体可以稳定多年；成员来来去去，银背雄性通常是群体聚集的中心。',
      },
      {
        key: 'nests-and-growth',
        label: '休息与成长',
        title: '每天筑夜巢，幼体成长缓慢',
        body: '大猩猩通常在傍晚弯折附近植被筑一座新的夜巢，成年雄性更多在地面，雌性和幼体也会使用树巢；未独立的幼体与母亲同巢。Mbeli Bai 长期资料中，雌性平均约 12.2 岁首次生产；仅统计前一幼体至少存活至 3 岁的样本时，产仔间隔平均约 65.3 个月。地点与能量条件会改变这些参数，但缓慢生命史使种群难以快速回补。',
      },
      {
        key: 'conservation',
        label: '威胁与保护',
        title: '猎捕、道路与疾病的影响',
        body: '猎杀与套索是主要威胁。伐木、矿业、农业和道路破坏森林，也使猎人更容易进入；埃博拉曾使刚果共和国一个研究区的大猩猩大量死亡。保护人员需要加强执法、规划土地与迁移通道，并与社区合作开展疾病防控和标准化监测。已到期的区域行动计划仍提供这些方法的参考。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '加蓬标本与 1847 年的描述',
        body: '萨维奇与怀曼在 1847 年发表了大猩猩的科学描述，原始名称为 Troglodytes gorilla，命名材料来自加蓬。后来研究者设立大猩猩属，名称成为 Gorilla gorilla。今天这个名字专指西部物种，西部和东部大猩猩的分类范围也因此可以区分。',
      },
    ],
    keyFacts: [
      'Gorilla gorilla 是西部物种，包含西部低地大猩猩 G. g. gorilla 与克罗斯河大猩猩 G. g. diehli 两个亚种。',
      '现行 IUCN 记录是 2016 年评估、2018 年修订发布的极危 A4bcde；“三代约 66 年内降幅超过 80%”的结论横跨过去与未来，出自评估模型而非一次清点。',
      '2013 年模型估计西部低地亚种约有 361,919 只断奶个体（95% 区间 302,973 至 460,093）；这一估计不代表今天的数量。',
      '野外西部低地样本的体重文献范围约为雌性 68 至 85 千克、雄性 112 至 170 千克；动物园个体通常更重。',
      '喀麦隆一个种群的 1,030 份粪样中记录到 58 种植物的种子，表明大猩猩能传播多种森林植物。',
      'Mbeli Bai 雌性平均约 12.2 岁首次生产；前一幼体至少存活至 3 岁的产仔间隔平均约 65.3 个月，显示其种群回补速度很慢。',
    ],
    threats: [
      '丛林肉猎杀、幼体非法贸易及套索误伤',
      '埃博拉等传染病与人兽接触带来的疾病传播风险',
      '农业与油棕扩张、伐木、矿业和道路造成的森林丧失与退化',
      '道路提高森林可达性并放大猎捕和破碎化',
      '克罗斯河亚种小而分散的亚群面临连通性与随机事件风险',
      '气候变化可能改变森林水分、物候和火灾风险，但幅度仍不确定',
    ],
    conservationActions: [
      '在保护区、伐木特许区与未保护森林协同开展反偷猎巡护、司法执法和非法贸易管制',
      '把油棕、矿业、伐木和道路纳入跨境土地利用规划，保护完整森林并恢复克罗斯河亚群间廊道',
      '以 One Health 方法开展健康监测、人员卫生规范和低接触旅游管理，降低人与大猩猩之间的病原传播',
      '结合样线、巢迹、遗传样本、相机陷阱和疾病数据进行标准化长期监测，不用零散目击代替种群趋势',
      '支持社区共同管护、替代生计和冲突预防，让保护收益与当地居民长期利益相连',
    ],
    metrics: {},
    featuredStats: [
      { key: 'subspecies', label: '现生亚种', value: '2', unit: '个', note: '西部低地亚种与克罗斯河亚种' },
      {
        key: 'sex-specific-mass',
        label: '野外成年雌 / 雄均重',
        value: '70.7 / 165.9',
        unit: '千克',
        note: '2026 同行评审综合研究的野外加权均值；具体个体可轻可重',
      },
      { key: 'generation-window', label: 'IUCN 三代窗口', value: '66', unit: '年', note: '每代约 22 年；这是评估模型的计算窗口' },
      {
        key: 'western-lowland-2013',
        label: '西部低地亚种 2013 估计',
        value: '361,919',
        unit: '只断奶个体',
        note: '2013 年模型估计，95% CI 302,973 至 460,093；今天的确切数量仍未知',
      },
    ],
    media: {
      image: './images/species/western-gorilla/01-lowland-rainforest-portrait.webp',
      alt: '晨雾低地雨林中一只成年雄性大猩猩以指关节行走，短棕黑毛、暖棕头顶和银灰背鞍清晰可见',
      focalPoint: { x: 0.72, y: 0.54 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/western-gorilla/02-seasonal-fruit-foraging.webp',
          alt: '低地雨林地面一只无银背的成年雌性大猩猩坐着查看一小块自然落果，双手和双足可见',
          title: '果实随季节而来',
          caption: '果实丰富时，大猩猩多吃果实；缺果时主要取食草本、叶、髓和树皮。',
          focalPoint: { x: 0.54, y: 0.53 },
        },
        {
          image: './images/species/western-gorilla/03-swamp-forest-mosaic.webp',
          alt: '雨后中非低地雨林的浅水草本空地与密林交界，一只大猩猩在远处林缘显得很小',
          title: '从干林地到沼泽林',
          caption: '西部低地亚种出没于陆地林、沼泽林和湿润林间空地；克罗斯河亚种则退守更崎岖的丘陵森林。',
          focalPoint: { x: 0.65, y: 0.58 },
        },
        {
          image: './images/species/western-gorilla/04-daily-ground-nest.webp',
          alt: '低地雨林林下一只成年大猩猩把新鲜带叶茎弯向身体周围，形成浅而松散的地面休息巢',
          title: '每天重铺一张床',
          caption: '大猩猩通常每天重新筑巢；地面还是树上，随年龄、性别、植被和天气而定。',
          focalPoint: { x: 0.51, y: 0.57 },
        },
        {
          image: './images/species/western-gorilla/05-mother-and-infant.webp',
          alt: '潮湿低地雨林中一只成年雌性大猩猩以指关节行走，一只幼体紧贴在母兽身体侧下方',
          title: '缓慢的成长节律',
          caption: '幼体早期紧随母亲并与母亲同巢；Mbeli Bai 中前一幼体至少存活至 3 岁的产仔间隔平均约 5.4 年。',
          focalPoint: { x: 0.52, y: 0.54 },
        },
        {
          image: './images/species/western-gorilla/06-camera-trap-monitoring.webp',
          alt: '低地雨林自然兽径旁一台无品牌被动相机固定在树干上，远处一只大猩猩与设备保持明显距离',
          title: '不接触，也能留下记录',
          caption: '相机记录大猩猩出现的时间和行为；估算森林里的数量还需结合标准化抽样、巢迹与遗传资料。',
          focalPoint: { x: 0.5, y: 0.54 },
        },
      ],
    },
    sources: WESTERN_GORILLA_SOURCES,
    featured: true,
    publishedAt: WESTERN_GORILLA_CONTENT_DATE,
    updatedAt: WESTERN_GORILLA_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
