import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const TUATARA_SOURCE_DATE = '2026-08-26' as const;

const TUATARA_CONTENT_DATE = '2026-08-26' as const;

const TUATARA_SOURCES = [
  {
    title: 'The Reptile Database: Sphenodon punctatus',
    url: 'https://reptile-database.reptarium.cz/front.front/species?genus=sphenodon&species=punctatus',
    kind: 'taxonomy',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Hay et al. 2010: Genetic diversity and taxonomy of tuatara',
    url: 'https://doi.org/10.1007/s10592-009-9952-7',
    kind: 'taxonomy',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Sphenodon punctatus, 2019 assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-2.RLTS.T131735762A120191347.en',
    kind: 'conservation',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'New Zealand Threat Classification Series 50: Reptiles 2025',
    url: 'https://www.doc.govt.nz/globalassets/documents/science-and-technical/nztcs50.pdf',
    kind: 'conservation',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'New Zealand Department of Conservation: Tuatara',
    url: 'https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/',
    kind: 'distribution',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'New Zealand Department of Conservation: Tuatara husbandry manual',
    url: 'https://www.doc.govt.nz/documents/science-and-technical/TSOP21.pdf',
    kind: 'ecology',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'New Zealand Department of Conservation: Tuatara Recovery Plan 2001–2011',
    url: 'https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf',
    kind: 'distribution',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Cree, Thompson & Daugherty 1995: Tuatara sex determination',
    url: 'https://doi.org/10.1038/375543a0',
    kind: 'ecology',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Mitchell et al. 2006: Temperature-dependent sex determination in tuatara',
    url: 'https://doi.org/10.1186/1742-9994-3-9',
    kind: 'ecology',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Mitchell et al. 2010: Demographic effects of temperature-dependent sex determination',
    url: 'https://doi.org/10.1111/j.1365-2486.2009.01964.x',
    kind: 'ecology',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Ung & Molteno 2004: Tuatara parietal-eye histology',
    url: 'https://doi.org/10.1111/j.1442-9071.2004.00912.x',
    kind: 'ecology',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Castanet et al. 1988: Skeletochronological age and growth in tuatara',
    url: 'https://www.jstor.org/stable/3892195',
    kind: 'ecology',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Gemmell et al. 2020: The tuatara genome',
    url: 'https://doi.org/10.1038/s41586-020-2561-9',
    kind: 'general',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Museum of New Zealand Te Papa Tongarewa: Tuatara, longtime resident',
    url: 'https://www.tepapa.govt.nz/digital-museum/explore-digital-museum/science-and-nature/tuatara-longtime-resident',
    kind: 'general',
    accessedAt: TUATARA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-sphenodon-punctatus',
    slug: 'tuatara',
    names: {
      zh: '喙头蜥',
      en: 'Tuatara',
      aliases: ['楔齿蜥'],
    },
    scientificName: 'Sphenodon punctatus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Reptilia', '爬行纲'),
      taxon('Rhynchocephalia', '喙头目'),
      taxon('Sphenodontidae', '楔齿蜥科'),
      taxon('Sphenodon', '楔齿蜥属'),
    ),
    conservation: conservation('LC', 'unknown', 2019),
    distribution: {
      realms: ['terrestrial'],
      continents: ['大洋洲'],
      regions: ['新西兰北岛东北近海岛屿', '库克海峡与马尔堡峡湾岛屿', '经迁地恢复的岛屿与围栏保护地'],
      countries: ['新西兰'],
      endemicTo: ['新西兰'],
      range:
        '历史上遍布新西兰主岛，现存自然野生种群集中在北岛东北近海和马尔堡峡湾的无鼠岛屿；清除外来哺乳动物、人工孵化和迁移恢复又把种群带回部分原生岛屿及围栏大陆保护地。分布由彼此隔离的保护单元组成，不能用一个中心点概括。',
    },
    habitats: [
      {
        name: '海岸森林与低矮灌丛',
        realm: 'terrestrial',
        description:
          '湿润落叶层、苔藓、岩隙和松软土壤提供隐蔽、取食与体温调节空间，是现存岛屿种群的主要生境。',
        isPrimary: true,
      },
      {
        name: '海鸟繁殖地的洞穴土坡',
        realm: 'terrestrial',
        description:
          '繁殖海鸟提高土壤肥力并支持无脊椎动物和蜥蜴猎物；喙头蜥会自掘洞穴，也会使用海鸟洞穴，但并非每个洞穴都由它挖掘或与海鸟共享。',
      },
      {
        name: '林缘空地、草坡与岩石裂隙',
        realm: 'terrestrial',
        description:
          '开阔处供日间晒太阳和雌性寻找温暖巢址，岩隙与植被边缘提供躲藏；这些微生境必须与安全洞穴和无外来捕食者环境相连。',
      },
    ],
    measurements: {
      length: {
        typical: 0.5,
        unit: 'm',
        note: '新西兰 DOC 对完全成长成年雄性的近似全长；不是雌雄合并范围，雌性通常更小。',
      },
      weight: {
        max: 1.5,
        unit: 'kg',
        note: '新西兰 DOC 给出的完全成长雄性上限；雌性通常更小，1.5 千克不是雌雄通用的典型体重。',
      },
    },
    diet: {
      types: ['insectivore', 'carnivore'],
      foods: [
        '甲虫与蛾类等昆虫',
        '洞穴螽等 wētā',
        '蚯蚓、马陆与蜘蛛',
        '蜗牛和其他小型无脊椎动物',
        '小型蜥蜴',
        '偶尔摄食海鸟卵、雏鸟和幼年同类',
      ],
      description:
        '主要捕食夜行无脊椎动物，也会摄食小型蜥蜴、海鸟卵和雏鸟，偶见同类相食。两列上颌齿之间嵌入一列下颌齿，适合剪切食物；牙样突起与颌骨相连，磨损后不会像多数爬行动物那样逐颗替换。',
    },
    activity: [
      '成年个体以夜间活动为主，白天也会在洞口或空地晒太阳',
      '能在较凉天气活动，低温时退回洞穴；持续高温不利于生存',
      '利用自掘洞穴、岩隙或海鸟洞穴休息和避险',
      '雄性在繁殖季守卫领域，以竖起颈背皮褶、追逐和咬斗展示',
      '雌性在产卵季前往开阔温暖坡地挖巢，回填后部分雌性会短暂守巢数日',
      '生长和繁殖节奏缓慢，管理成效需要跨越多年观察',
    ],
    tags: [
      '喙头目唯一现生物种',
      '新西兰特有',
      '不是蜥蜴',
      '软质背脊皮褶',
      '温度决定性别',
      '长寿缓慢繁殖',
      'IUCN 无危',
      '新西兰 At Risk – Uncommon',
      'CITES 附录 I',
      '外来捕食者控制',
    ],
    summary:
      '喙头蜥是新西兰特有的喙头目唯一现生物种，依靠无鼠岛屿、围栏保护地和持续生物安全管理保住这个古老谱系。',
    description:
      '喙头蜥外形像蜥蜴，却属于与有鳞目并列的喙头目。遗传研究把曾作独立种的 Sphenodon guntheri 并回 S. punctatus，现行口径只承认一个现生物种。IUCN 全球评估为 LC、趋势未知；新西兰 2025 评估列 At Risk 、 Uncommon，并以 CI、CD、RR、Rel 标明气候影响、保护依赖、范围受限和遗存分布，反映它仍依赖无外来哺乳动物的岛屿、围栏保护地、迁移恢复和严格生物安全。',
    storySections: [
      {
        key: 'one-living-rhynchocephalian',
        label: '分类口径',
        title: '喙头目只剩一个现生物种',
        body: 'Reptile Database 与新西兰保护部门均把曾独立列种的 Sphenodon guntheri 归入 S. punctatus，因此当前只承认一个现生喙头蜥物种。它所属的支系历史古老，基因组与种群研究仍记录到持续演化和地域差异。',
      },
      {
        key: 'soft-crest-and-parietal-organ',
        label: '外形边界',
        title: '柔软背部皮褶与被覆盖的顶眼',
        body: 'tuatara 在毛利语中指向背部隆起；雄性颈背皮褶更高，展示时可竖起。幼体头顶的顶眼区域较明显，之后由色素和鳞片覆盖，成体头顶没有外露的第三个眼球。',
      },
      {
        key: 'cool-climate-rhythm',
        label: '冷凉节律',
        title: '夜里觅食，白天仍会晒太阳',
        body: '成年喙头蜥多在夜间离洞捕食，也会在白天晒太阳调节体温；研究汇总的最适体温约 16 至 21 摄氏度。持续超过约 25 摄氏度的恒温环境不利于健康，低温时则留在洞内，不能简化成只喜冷或只在夜间出现。',
      },
      {
        key: 'jaw-shearing-system',
        label: '颌与食物',
        title: '一列下颌齿滑过两列上颌齿',
        body: '闭口时一列下颌牙样突起嵌在两列上颌突起之间，前后运动产生剪切。它们与颌骨相连，磨损后不逐颗更换；老年个体会更多选择蚯蚓、幼虫和蛞蝓等较软食物。',
      },
      {
        key: 'slow-temperature-linked-reproduction',
        label: '缓慢繁殖',
        title: '产卵间隔长，孵化需要近一年或更久',
        body: 'Takapourewa 雌性平均约四年产一窝、平均 9 至 10 枚，自然孵化约需 11 至 16 个月，其他岛屿会变化。较暖条件产生更多雄性；约 22 摄氏度只来自两个库克海峡种群的恒温实验，不能当作全种固定开关。',
      },
      {
        key: 'island-biosecurity-and-restoration',
        label: '保护行动',
        title: '清除鼠类之后，还要防止它们回来',
        body: '清除岛上鼠类、人工孵化幼体、迁移恢复和围栏保护地扩大了安全范围。船只、装备或违规登陆仍可能把外来哺乳动物重新带上岛，长期保护需要入岛生物安全、种群与巢温监测及遗传来源管理。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1842 年的描述与毛利语名字',
        body: '喙头蜥的科学命名记录署名为 Gray，年份为 1842 年，现用学名为 Sphenodon punctatus。英文常用名 tuatara 来自毛利语，指向背部隆起；这些看似刺的结构其实是柔软皮褶。曾使用的 Sphenodon guntheri 已被并入本种，但北兄弟岛种群仍需按其遗传独特性保护。',
      },
    ],
    keyFacts: [
      '现行分类只承认 Sphenodon punctatus 一个现生物种；S. guntheri 是曾用的独立种名，不能再计作第二个现生种。',
      '喙头蜥属于 Rhynchocephalia 喙头目，不属于 Squamata 有鳞目；“像蜥蜴”只是外形描述。',
      '它是喙头目唯一现生物种，也是新西兰特有种。',
      '“活化石”不等于停止演化；基因组与种群研究记录了持续的遗传变化和地域差异。',
      'IUCN 2019 全球评估为 LC、趋势未知且没有受胁 criteria。',
      '新西兰 2025 状态为 At Risk 、 Uncommon，并带 CI、CD、RR、Rel 限定词；它与全球 IUCN LC 使用不同尺度和标准。',
      '现存自然野生种群主要留在北岛东北近海与马尔堡峡湾的 32 个无鼠岛屿，其他地点包含迁移恢复种群。',
      '成年雄性约 0.5 米，完全成长雄性可达 1.5 千克；该上限不能当作雌雄通用典型体重。',
      '成年个体平均寿命约 60 年，DOC 记载可活到约 100 年；百岁不是每只个体的预期寿命。',
      '研究汇总的最适体温约 16 至 21 摄氏度；持续高温不利，但不存在简单的 25 摄氏度即死阈值。',
      '颈背“刺”由柔软三角形皮褶组成，雄性通常更发达，并在展示时竖起。',
      '幼体顶眼区域随后被鳞片和色素覆盖，成年个体没有头顶外露的第三个眼球。',
      '两列上颌齿之间嵌入一列下颌齿；牙样突起磨损后不会逐颗替换。',
      '无脊椎动物构成主要食物，小型蜥蜴、海鸟卵和雏鸟只占机会性部分。',
      'Takapourewa 雌性平均约四年产一窝、平均 9 至 10 枚，自然孵化约需 11 至 16 个月；岛间差异明显。',
      '较暖孵化条件产生更多雄性，气候升温可能让特定种群性别比偏雄；约 22 摄氏度不是全种固定开关。',
      '北兄弟岛种群不再列作独立种，但遗传独特性仍要求把它作为独立保护管理单元。',
      'CITES 附录 I 管制国际商业贸易，新西兰法律另行提供国内严格保护。',
    ],
    threats: [
      '鼠类捕食卵和幼体，并消耗无脊椎动物食物；种群缓慢繁殖，难以补偿持续损失',
      '船只、货物和访客装备把鼠类等外来哺乳动物重新带入无害兽岛屿',
      '火灾、植被破坏和违规登陆踩踏洞穴或改变小岛生境',
      '气候升温改变巢温并使部分种群后代性别比偏雄，也压缩冷凉活动条件',
      '小岛种群彼此隔离，部分经历过数量瓶颈并保留较低遗传多样性',
      '偷猎和非法收藏仍可能伤害规模小、位置集中的种群',
      '疾病、风暴和其他偶发事件可在狭小岛屿上同时影响大量个体',
    ],
    conservationActions: [
      '维持无鼠岛屿的外来哺乳动物清除成果，并在码头、船只和装备环节执行生物安全检查',
      '保护海岸森林、低灌丛、洞穴土坡、晒太阳空地和繁殖巢址',
      '用人工孵化、幼体暂养和迁移恢复重建适合岛屿及围栏大陆保护地的种群',
      '长期监测数量、年龄结构、巢温、孵化性别比、繁殖间隔和恢复地点存活',
      '按岛屿来源和遗传差异设计迁移，避免抹去具有保护价值的地域结构',
      '限制敏感岛屿登陆，减少火灾、踩踏、干扰和外来物种夹带',
      '执行新西兰野生动物保护法规和 CITES 附录 I 国际贸易管制',
      '与毛利 iwi 和 kaitiaki 共同决定研究、基因组数据、迁移及保护管理',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'lineage-split',
        label: '与有鳞目谱系分开',
        value: '约 2.5 亿',
        unit: '年前',
        note: '基因组系统发育估计；不是现生物种或个体年龄。',
      },
      {
        key: 'optimal-body-temperature',
        label: '最适体温',
        value: '16—21',
        unit: '°C',
        note: '行为性体温调节；持续高温不利，但不存在简单的 25°C 即死阈值。',
      },
      {
        key: 'natural-incubation',
        label: '自然孵化期',
        value: '11—16',
        unit: '个月',
        note: '野外巢温会波动；人工恒温孵化不能与自然巢周期直接混用。',
      },
      {
        key: 'natural-refuge-islands',
        label: '自然残存岛屿',
        value: '32',
        unit: '座',
        note: '不含后来建立的迁地恢复种群；2020 年论文另记约 10 个恢复种群。',
      },
    ],
    media: {
      image:
        './images/species/tuatara/01-coastal-forest-adult-male-portrait.webp',
      alt: '潮湿新西兰海岸森林地面上只有一只完整成年雄性喙头蜥，橄榄灰斑点体色和较高的柔软颈背皮褶清楚可见，左后方有一个洞口',
      focalPoint: { x: 0.68, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/tuatara/02-adult-female-field-marks.webp',
          alt: '湿润落叶层和苔藓间只有一只完整成年雌性喙头蜥，身体贴近地面，颈背柔软皮褶低于封面雄性',
          title: '较低皮褶只是雌性重建线索',
          caption:
            '成年雌性通常较小、头部与颈背皮褶较低；单幅外观不能独立确认性别，也不能给出体长或体重。',
          focalPoint: { x: 0.52, y: 0.58 },
        },
        {
          image: './images/species/tuatara/03-seabird-island-burrow-habitat.webp',
          alt: '新西兰近海岛屿的海岸灌丛、海面、土坡和多个洞口占据宽景，中右侧只有一只较小完整喙头蜥靠近一个洞口',
          title: '洞穴密布的海岸岛屿生境',
          caption:
            '画面重建海岸森林、开阔坡地和洞穴微生境；没有海鸟入画，也不能据此判断洞穴由谁挖掘或是否共享。',
          focalPoint: { x: 0.68, y: 0.6 },
        },
        {
          image: './images/species/tuatara/04-nocturnal-weta-foraging.webp',
          alt: '夜间潮湿森林地面上只有一只完整喙头蜥靠近一只完整 wētā，闭合的吻端与昆虫之间仍有间距',
          title: '夜行无脊椎动物进入视线',
          caption:
            '场景停在接触前，只重建潜在取食机会；它不证明捕获结果、猎物身份、取食频率或 wētā 在食谱中的比例。',
          focalPoint: { x: 0.58, y: 0.62 },
        },
        {
          image: './images/species/tuatara/05-nesting-slope-female.webp',
          alt: '傍晚开阔土坡上只有一只完整成年雌性喙头蜥拨动浅坑旁松土，画面没有可见卵或开放卵室',
          title: '覆土动作没有暴露巢卵',
          caption:
            '浅坑与扬起的松土支持覆巢重建，不能提供卵数、巢深、孵化期、后代性别或繁殖结果。',
          focalPoint: { x: 0.55, y: 0.59 },
        },
        {
          image:
            './images/species/tuatara/06-predator-free-island-monitoring.webp',
          alt: '海岸森林地面上只有一只完整喙头蜥守在洞口旁，远处一名戴手套的巡护员检查一个黑色隧道状监测装置',
          title: '把外来哺乳动物挡在岛外',
          caption:
            '画面只说明非接触生物安全监测；它不代表指定设备、标准流程、检测结果或该地点已经无鼠。',
          focalPoint: { x: 0.68, y: 0.62 },
        },
      ],
    },
    sources: [
      ...TUATARA_SOURCES,
      {
        title: 'GBIF: Sphenodon punctatus (Gray, 1842) nomenclatural record',
        url: 'https://www.gbif.org/species/5227650',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: TUATARA_CONTENT_DATE,
    updatedAt: TUATARA_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
