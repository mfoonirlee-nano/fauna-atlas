import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const GREEN_PEAFOWL_SOURCE_DATE = '2026-08-26' as const;

const GREEN_PEAFOWL_CONTENT_DATE = '2026-08-26' as const;

const GREEN_PEAFOWL_SOURCES = [
  {
    title: 'IOC World Bird List v15.2: Pheasants, partridges and francolins',
    url: 'https://www.worldbirdnames.org/new/bow/pheasants/',
    kind: 'taxonomy',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: '《动物学精义·下》：Pavo muticus 历史中文名索引',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/SSID-13209155_%E5%8B%95%E7%89%A9%E5%AD%B8%E7%B2%BE%E7%BE%A9_%E4%B8%8B.pdf',
    kind: 'taxonomy',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Green Peafowl Pavo muticus',
    url: 'https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Pavo muticus, 2018 global assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22679440A131749282.en',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: 'Kong et al. 2018: Status and distribution changes in China',
    url: 'https://doi.org/10.1186/s40657-018-0110-0',
    kind: 'distribution',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: 'Ponsena 1988: Biological characteristics and breeding behaviours in Huai Kha Khaeng',
    url: 'https://li01.tci-thaijo.org/index.php/tjf/article/view/256671',
    kind: 'ecology',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: 'Hernowo 2011: Courtship behaviour in Baluran National Park',
    url: 'https://www.sciencedirect.com/science/article/pii/S1978301916302054',
    kind: 'ecology',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: 'Brickle 2002: Habitat use in Dak Lak Province, Vietnam',
    url: 'https://doi.org/10.1016/S0006-3207(01)00182-3',
    kind: 'ecology',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: 'Sukumal et al. 2020: Continental Southeast Asian range and conservation priorities',
    url: 'https://doi.org/10.1017/S003060531900005X',
    kind: 'distribution',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: 'Dong et al. 2021: Population genomic evidence for anthropogenic decline',
    url: 'https://doi.org/10.1098/rspb.2021.0073',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: 'Aung et al. 2020: Isolated forest fragments and low-intensity agriculture',
    url: 'https://www.cambridge.org/core/journals/oryx/article/importance-of-isolated-forest-fragments-and-low-intensity-agriculture-for-the-longterm-conservation-of-the-green-peafowl-pavo-muticus/49711DBBDBAF62F5F77A3D8986AEC5A1',
    kind: 'ecology',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: '上海自然博物馆：绿孔雀馆藏说明',
    url: 'https://www.snhm.org.cn/cpjc/info.htm?eid=589',
    kind: 'general',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: '国家重点保护野生动物名录（2021）',
    url: 'https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: '中国生物多样性红色名录·鸟类（2020）',
    url: 'https://sdr.cas.cn/zcgz/gjfg/202306/P020230523325260524862.pdf',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: '云南省林草局：2018 年绿孔雀调查结果',
    url: 'https://lcj.yn.gov.cn/html/2020/jianyitianbanli_0928/58739.html',
    kind: 'distribution',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: '云南省林草局：2023 年绿孔雀保护建议答复',
    url: 'https://lcj.yn.gov.cn/html/2023/jianyitianbanli_0526/69006.html',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: '国家林草局：云南系统性保护珍稀濒危物种（2026）',
    url: 'https://www.forestry.gov.cn/lyj/1/dzbhdt/20260818/684856.html',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
  {
    title: 'CMS Appendices I and II, effective 27 June 2026',
    url: 'https://www.cms.int/species/appendix-i-ii-cms',
    kind: 'conservation',
    accessedAt: GREEN_PEAFOWL_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-pavo-muticus',
    slug: 'green-peafowl',
    names: {
      zh: '绿孔雀',
      en: 'Green Peafowl',
      aliases: ['綠孔雀', '爪哇孔雀'],
    },
    scientificName: 'Pavo muticus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Galliformes', '鸡形目'),
      taxon('Phasianidae', '雉科'),
      taxon('Pavo', '孔雀属'),
    ),
    conservation: conservation('EN', 'decreasing', 2018, 'A2cd+3cd+4cd'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: ['中国西南部', '大陆东南亚', '爪哇岛'],
      countries: ['中国', '缅甸', '泰国', '老挝', '柬埔寨', '越南', '印度尼西亚'],
      range:
        '现存野生种群破碎分布于中国云南、缅甸、泰国、老挝、柬埔寨、越南和印度尼西亚爪哇岛。中国现存野生种群仅见于云南中部、西部和南部，以元江中上游为当前核心；这不表示绿孔雀是云南或中国特有种。历史原生范围还包括印度东北部、孟加拉国和马来半岛，但 BirdLife 当前把这些国家列为区域灭绝。',
    },
    habitats: [
      {
        name: '季节性河谷与干燥落叶林',
        realm: 'terrestrial',
        description:
          '当前记录较集中的生境；邻近河流或湿地、保留开阔地和低人类干扰的河谷可同时提供饮水、觅食与夜栖条件。',
        isPrimary: true,
      },
      {
        name: '河流、沙洲与湿地边缘疏林',
        realm: 'terrestrial',
        description:
          '岸边开阔地可供地面觅食和展示，附近高大树木用于夜栖；水边活动不把它变成水生鸟类。',
      },
      {
        name: '稀树草原、灌丛与草地镶嵌',
        realm: 'terrestrial',
        description:
          '开放斑块提供觅食和求偶空间，与自然林、水源及隐蔽带连通时更有利于形成完整生境。',
      },
      {
        name: '次生林、林缘和低强度传统农田边缘',
        realm: 'terrestrial',
        description:
          '部分种群会利用低干扰的人地镶嵌；高强度经济作物转换、道路和聚落扩张仍会移除或切碎生境。',
      },
    ],
    measurements: {
      length: {
        min: 100,
        max: 244,
        unit: 'cm',
        note:
          'BirdLife 性别分列值：雌鸟 100 至 110 厘米，雄鸟约 244 厘米；雄鸟总长包含由延长尾上覆羽形成的尾屏，合并范围不代表连续的典型体长',
      },
    },
    diet: {
      types: ['omnivore'],
      foods: ['果实与种子', '嫩芽、草叶和花', '昆虫', '小型脊椎动物'],
      description:
        '主要在地面取食多种植物材料，也捕食昆虫和小型脊椎动物。泰国一处野外研究记录至少 66 种食用植物，食谱仍会随地点和季节改变。',
    },
    activity: [
      '昼行性',
      '晨间与傍晚觅食较活跃',
      '主要在地面觅食',
      '夜间飞上高树休息',
      '留居、非迁徙',
      '繁殖期雄鸟鸣叫并在开阔地展示',
    ],
    tags: [
      '东南亚',
      '鸡形目',
      '季节性河谷',
      '地面觅食',
      '高树夜栖',
      '尾上覆羽尾屏',
      '地面浅窝',
      '非迁徙',
      'IUCN 濒危',
      '中国红色名录极危',
      '国家一级重点保护野生动物',
      'CITES 附录 II',
    ],
    summary:
      '高窄冠羽、鳞状绿颈和焦糖色初级飞羽把绿孔雀与常见蓝孔雀区分开。它在近水的季节性河谷与干燥落叶林中地面觅食、高树夜栖，中国现存野生种群仅见于云南。',
    description:
      '绿孔雀与蓝孔雀是两个独立物种。IOC v15.2 承认 3 个亚种，中国野生种群通常按地理分类归入 P. m. imperator，不同亚种仍属于绿孔雀这一物种。成年雄鸟的长尾屏由延长的尾上覆羽形成，真正尾羽在下方支撑；雌鸟没有长尾屏，却仍保留绿色鳞状颈羽和直立冠羽。现存范围从中国云南延伸到大陆东南亚和爪哇，但高度破碎。IUCN/BirdLife 2018 全球评估为 EN、趋势下降，成熟个体粗略估算为 10,000 至 19,999；中国 2020 区域红色名录按 A2cd+3cd+4cd 列为 CR，国家重点保护等级为一级。国家林草局 2026 年转载的最新监测报道称云南野外种群超过 1,000 只，该数值未分年龄，也没有公开足够方法供严格计算增长率，不能与全球成熟个体估算直接比较。',
    storySections: [
      {
        key: 'identity',
        label: '辨识',
        title: '绿色鳞状颈羽和高窄冠羽',
        body: '绿孔雀的两性都有高而窄的直立冠羽和鳞片般排列的绿色颈羽；蓝孔雀雄鸟则以钴蓝颈胸和宽扇形冠羽醒目。IOC v15.2 承认绿孔雀 3 个亚种。中国野生种群通常按地理分类归入中南亚种 P. m. imperator，这不等于每只个体都经过遗传鉴定。',
      },
      {
        key: 'river-valley',
        label: '生境',
        title: '河谷连接林地、草地和夜栖树',
        body: '当前较高密度记录常靠近未受强干扰的河流或湿地，并与干燥落叶林、疏林、沙洲和草地镶嵌相连。绿孔雀也能利用次生林和低强度传统农田边缘，但这不表示橡胶园、茶园或城市公园可以替代完整河谷。0 至 2,100 米是历史与现存记录合并的已知海拔边界，不是最适海拔带。',
      },
      {
        key: 'daily-rhythm',
        label: '活动与食物',
        title: '白天地面觅食，入夜飞上高树',
        body: '泰国野外研究记录绿孔雀昼行，在地面取食至少 66 种植物，也吃昆虫和小型脊椎动物，夜间进入河边高树休息。晨间和傍晚通常较活跃，中午会在隐蔽处停歇；具体时刻来自一个研究地，其他地区的作息可能有所不同。',
      },
      {
        key: 'courtship-and-nest',
        label: '繁殖',
        title: '尾屏展开在开阔地，浅窝藏在地面',
        body: '雄鸟在开阔展示场竖起眼状斑尾屏并振动羽毛。尾屏的主体是延长的尾上覆羽，不是整束真正尾羽。雌鸟在林下或河边高草中照看地面巢；泰国怀卡肯野外研究记录每窝 2 至 5 枚卵、孵化 26 至 27 天，繁殖月份会随纬度和季风改变。',
      },
      {
        key: 'last-wild-populations-in-china',
        label: '中国分布',
        title: '中国现存范围收缩到云南河谷',
        body: '20 世纪末以来的调查显示，中国可靠现存记录集中在云南中部、西部和南部，元江中上游成为当前核心。云南官方数据从 2018 年约 485 至 547 只、2023 年超过 650 只更新到 2026 年超过 1,000 只；公开页面没有给出完全一致的抽样设计、检测概率、分龄和置信区间，不能据此计算严格增长率。',
      },
      {
        key: 'protection-beyond-reserves',
        label: '保护',
        title: '保护地边界外仍要接通河谷',
        body: '云南 2023 年官方节点显示，当时三分之二的种群位于现有自然保护地外。保护需要连接核心河谷、水源、展示场和高大夜栖树，并在社区土地上减少套索、毒饵和高风险农药。重复样线、红外相机与鸣声调查还应报告检测概率和年龄结构，避免把监测到的个体数误写成成熟个体普查。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1766 年的绿孔雀命名记录',
        body: '林奈于 1766 年命名绿孔雀，现用学名为 Pavo muticus。它与常见的蓝孔雀不同，两性都保留鳞状绿色颈羽与高窄冠羽。雄鸟展示时的长羽扇主要来自延长的尾上覆羽，真正尾羽在下方支撑。中国现存野生种群只见于云南，东南亚大陆和爪哇仍有其他种群。',
      },
    ],
    keyFacts: [
      'IOC World Bird List v15.2 接受 Pavo muticus，并承认 spicifer、imperator 和 muticus 3 个亚种。',
      '中国现存野生绿孔雀仅分布于云南，但该物种还见于东南亚大陆和爪哇，不是云南或中国特有种。',
      'BirdLife 给出的雌鸟总长为 100 至 110 厘米，雄鸟约 244 厘米；雄鸟数值包含长尾屏。',
      '雄鸟眼状斑尾屏由延长的尾上覆羽形成，较短的真正尾羽在下方支撑展示。',
      '泰国野外研究记录绿孔雀取食至少 66 种植物，也吃昆虫和小型脊椎动物。',
      '它主要在白天地面觅食，夜间能飞上河边高树休息，并非不会飞的地栖鸟。',
      '泰国怀卡肯野外研究记录每窝 2 至 5 枚卵，孵化期 26 至 27 天。',
      'IUCN/BirdLife 2018 全球评估为 EN、趋势下降，10,000 至 19,999 是低质量的成熟个体估算，不是同步全球普查。',
      '中国 2020 红色名录列为 CR，国家保护等级为一级；2026 年云南监测超过 1,000 只的数字没有注明全部为成熟个体。',
      '绿孔雀列入 CITES 附录 II；截至 2026 年 8 月生效的 CMS 附录没有 Pavo muticus。',
    ],
    threats: [
      '为肉、活体和尾屏羽而捕猎，以及套索、卵和幼鸟采集',
      '农业扩张、经济作物种植和聚落扩张造成生境丧失与破碎化',
      '因取食作物而投毒、接触农药包衣种子及其他高风险农药',
      '道路、水电和采矿等工程切断或淹没关键河谷生境',
      '过度放牧、不当用火及反复人类干扰降低生境质量',
      '小而孤立的种群面临遗传多样性下降和近交风险',
    ],
    conservationActions: [
      '保护元江中上游等核心河谷、干燥落叶林、水源、展示场和高大夜栖树',
      '把保护延伸到现有保护地外，通过生态廊道连接孤立种群',
      '用红外相机、鸣声调查和重复样线开展可比较的长期监测，并报告检测概率与年龄结构',
      '严格执法，减少偷猎、套索、卵和幼鸟采集以及活体和尾屏羽非法交易',
      '减少毒饵和高风险农药使用，与社区共同缓解作物取食冲突',
      '在水电、道路、采矿和农业项目审批中评估对核心河谷的直接与累积影响',
      '修复河谷自然植被、水源和连接带，为保护地内外种群恢复连通性',
      '对迁地和候选放归个体实施遗传谱系、疾病、亚种来源和长期成效管理',
    ],
    metrics: {
      elevationM: [0, 2100],
      estimatedMatureIndividuals: [10000, 19999],
    },
    featuredStats: [
      {
        key: 'global-mature-population',
        label: '全球成熟个体估算',
        value: '10,000至19,999',
        note: 'BirdLife/IUCN 2018 低质量估算，不是同步全球普查',
      },
      {
        key: 'yunnan-wild-monitoring',
        label: '云南野外监测',
        value: '超过1,000',
        unit: '只',
        note: '国家林草局 2026 年转载的监测报道；未分年龄，不与全球成熟个体区间直接比较',
      },
      {
        key: 'adult-length',
        label: '性别分列总长',
        value: '雄鸟约244；雌鸟100至110',
        unit: '厘米',
        note: '雄鸟数值包含长尾屏，不能当作无尾屏的身体长度',
      },
      {
        key: 'clutch-and-incubation',
        label: '窝卵与孵化',
        value: '2至5枚；26至27天',
        note: '来自泰国怀卡肯一处野外研究，月份随地点改变',
      },
    ],
    media: {
      image: './images/species/green-peafowl/01-yunnan-river-valley-male-portrait.webp',
      alt: '开阔季节性河谷右侧，一只完整成年雄性绿孔雀站在石滩上，高窄冠羽、鳞状绿色颈羽、焦糖色初级飞羽和折叠长尾屏清晰可见',
      focalPoint: { x: 0.69, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/green-peafowl/02-adult-female-field-marks.webp',
          alt: '林地空地中，一只完整成年雌性绿孔雀保留高窄冠羽、绿色鳞状颈羽、蓝黄面部裸皮和短尾，周围留有充足裁切空间',
          title: '雌鸟也披着绿色鳞羽',
          caption:
            '基于物种鉴别特征创作的示意画面；雌鸟没有雄鸟长尾屏，仍不能套用蓝孔雀雌鸟的灰褐白腹外形。',
          focalPoint: { x: 0.56, y: 0.5 },
        },
        {
          image: './images/species/green-peafowl/03-seasonal-river-valley-habitat.webp',
          alt: '季节性落叶疏林、干草、石滩和常年水源铺满河谷，一只小型完整雌性绿孔雀站在右侧河岸',
          title: '水源与干燥落叶疏林相连',
          caption:
            '基于分布区生境事实创作的示意画面；它表示河谷镶嵌结构，不对应保护区、出现记录或最适生境阈值。',
          focalPoint: { x: 0.68, y: 0.57 },
        },
        {
          image: './images/species/green-peafowl/04-male-courtship-train-display.webp',
          alt: '开阔沙地上只有一只完整成年雄性绿孔雀，绿色鳞状颈胸前方竖起，整幅眼状斑尾屏、双腿和双脚均在画面内',
          title: '尾屏来自延长的尾上覆羽',
          caption:
            '基于求偶行为创作的示意画面；羽扇主体是延长的尾上覆羽，画面不表示配偶选择结果或真实展示场。',
          focalPoint: { x: 0.52, y: 0.52 },
        },
        {
          image: './images/species/green-peafowl/05-ground-scrape-and-four-eggs.webp',
          alt: '一只完整成年雌性绿孔雀站在简陋地面浅窝旁，窝内恰好四枚分开的浅色无斑卵，没有雄鸟、雏鸟或第五枚卵',
          title: '简陋浅窝中的四枚卵',
          caption:
            '基于繁殖资料创作的示意画面；四枚卵落在 2 至 5 枚记录范围内，不代表平均窝卵数或真实巢址。',
          focalPoint: { x: 0.52, y: 0.6 },
        },
        {
          image: './images/species/green-peafowl/06-distance-riverbank-monitoring.webp',
          alt: '宽阔河谷左侧恰好两名小型观察者使用一台三脚架望远镜和记录册，远处右岸只有一只完整雌性绿孔雀',
          title: '隔着河谷完成远距观察',
          caption:
            '基于低干扰监测原则创作的示意画面；人鸟间保留宽阔缓冲带，单幅图不提供地点、个体身份或数量趋势。',
          focalPoint: { x: 0.58, y: 0.56 },
        },
      ],
    },
    sources: [
      ...GREEN_PEAFOWL_SOURCES,
      {
        title: 'GBIF: Pavo muticus Linnaeus, 1766 nomenclatural record',
        url: 'https://www.gbif.org/species/2473599',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: GREEN_PEAFOWL_CONTENT_DATE,
    updatedAt: GREEN_PEAFOWL_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
