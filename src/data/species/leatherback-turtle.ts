import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const LEATHERBACK_TURTLE_SOURCE_DATE = '2026-08-27' as const;

const LEATHERBACK_TURTLE_CONTENT_DATE = '2026-08-27' as const;

const LEATHERBACK_TURTLE_SOURCES = [
  {
    title: 'The Reptile Database — Dermochelys coriacea (Vandelli, 1761)',
    url: 'https://reptile-database.reptarium.cz/Dermochelys/coriacea',
    kind: 'taxonomy',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Dermochelys coriacea global assessment (2013)',
    url: 'https://doi.org/10.2305/IUCN.UK.2013-2.RLTS.T6494A43526147.en',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN-SSC Marine Turtle Specialist Group — Red List assessments',
    url: 'https://www.iucn-mtsg.org/statuses',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN-SSC MTSG — 2013 leatherback Red List assessments',
    url: 'https://www.iucn-mtsg.org/updates/2013-leatherback-red-list-assessments',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN-SSC MTSG — 2019 Northwest Atlantic leatherback update',
    url: 'https://www.iucn-mtsg.org/updates/2019-red-list-updates',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Northwest Atlantic Dermochelys coriacea assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-2.RLTS.T46967827A184748440.en',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Leatherback Turtle (updated 3 August 2026)',
    url: 'https://www.fisheries.noaa.gov/species/leatherback-turtle',
    kind: 'general',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'NOAA and U.S. Fish & Wildlife Service — 2020 status review of the leatherback sea turtle',
    url: 'https://repository.library.noaa.gov/view/noaa/25629',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'U.S. Fish & Wildlife Service — Leatherback Sea Turtle',
    url: 'https://www.fws.gov/species/leatherback-sea-turtle-dermochelys-coriacea',
    kind: 'general',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Wallace et al. 2025 — Updated global conservation status and priorities for marine turtles',
    url: 'https://doi.org/10.3354/esr01385',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Benson et al. 2011 — Large-scale movements and high-use areas of western Pacific leatherbacks',
    url: 'https://doi.org/10.1890/ES11-00053.1',
    kind: 'distribution',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Houghton et al. 2008 — Deep diving by leatherback turtles',
    url: 'https://doi.org/10.1242/jeb.020065',
    kind: 'ecology',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Heaslip et al. 2012 — Jellyfish consumption by leatherback turtles',
    url: 'https://doi.org/10.1371/journal.pone.0033259',
    kind: 'ecology',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Casey et al. 2014 — Thermal biology of free-swimming adult leatherbacks',
    url: 'https://doi.org/10.1242/jeb.100347',
    kind: 'ecology',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'CMS — Appendices I and II effective 27 June 2026',
    url: 'https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局、农业农村部 — 国家重点保护野生动物名录（2021年第3号）',
    url: 'https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-dermochelys-coriacea',
    slug: 'leatherback-turtle',
    names: {
      zh: '棱皮龟',
      en: 'Leatherback Turtle',
      aliases: ['革龟'],
    },
    scientificName: 'Dermochelys coriacea',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Reptilia', '爬行纲'),
      taxon('Testudines', '龟鳖目'),
      taxon('Dermochelyidae', '棱皮龟科'),
      taxon('Dermochelys', '棱皮龟属'),
    ),
    conservation: conservation('VU', 'decreasing', 2013, 'A2bd'),
    distribution: {
      realms: ['marine', 'terrestrial'],
      continents: ['亚洲', '非洲', '欧洲', '北美洲', '南美洲', '大洋洲'],
      regions: [
        '北大西洋、加勒比海与地中海',
        '南大西洋与西非沿岸',
        '印度洋',
        '东太平洋与西太平洋',
        '温带与近寒带高生产力觅食水域',
        '热带与亚热带繁殖海滩',
      ],
      countries: [
        '中国',
        '印度',
        '斯里兰卡',
        '印度尼西亚',
        '巴布亚新几内亚',
        '所罗门群岛',
        '澳大利亚',
        '美国',
        '加拿大',
        '墨西哥',
        '哥斯达黎加',
        '巴拿马',
        '特立尼达和多巴哥',
        '圭亚那',
        '苏里南',
        '巴西',
        '加蓬',
        '加纳',
        '南非',
        '莫桑比克',
      ],
      range:
        '广布于大西洋、太平洋、印度洋和地中海；筑巢主要发生在热带与亚热带沙滩，大幼体和成体可迁往温带及近寒带的陆架、大洋锋面和上升流区觅食。所列国家仅为代表性范围国，不是完整分布或偶见记录清单。',
    },
    habitats: [
      {
        name: '大洋锋面、汇聚带与上升流区',
        realm: 'marine',
        description:
          '胶质浮游动物随动态水团聚集，是成体跨洋迁徙和觅食的重要环境；位置随季节、洋流与海况改变。',
        isPrimary: true,
      },
      {
        name: '温带与近寒带陆架觅食水域',
        realm: 'marine',
        description:
          '大幼体和成体可利用加拿大外海、加利福尼亚洋流等高生产力海区，凭体型、隔热、循环和行为维持高于环境的体温。',
      },
      {
        name: '跨洋迁徙通道与深水水柱',
        realm: 'marine',
        description:
          '连接繁殖地与季节性觅食区，跨越公海和多国水域；绝大多数记录潜水浅于300米，极深潜水罕见。',
      },
      {
        name: '热带与亚热带沙质繁殖海滩',
        realm: 'terrestrial',
        description:
          '雌龟夜间挖体坑和深卵室；足够宽的干沙、天然暗夜、适宜温度及不过度淹水共同影响繁殖成功。',
      },
    ],
    measurements: {
      length: {
        min: 152,
        max: 183,
        unit: 'cm',
        note: 'NOAA成体5至6英尺展示范围的四舍五入换算，不代表全球最大背甲长。',
      },
      weight: {
        min: 340,
        max: 454,
        unit: 'kg',
        note: 'NOAA成体750至1,000磅展示范围的四舍五入换算，不代表全球极值。',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: ['水母', '狮鬃水母', '海月水母', '樽海鞘', '其他胶质浮游动物'],
      description:
        '高度专食柔软胶质猎物的肉食性海龟；双尖突颌缘和向后角质乳突帮助留住水母与樽海鞘，但这些结构不是牙齿，也不适合压碎硬壳猎物。',
    },
    activity: ['昼夜活动随觅食条件而变', '跨洋洄游', '深潜与表层觅食', '单独活动为主', '雌龟夜间上岸筑巢'],
    tags: ['海龟', '海洋爬行动物', '胶质浮游动物捕食者', '跨洋洄游', '深潜', '七条背棱', '温度依赖型性别决定'],
    summary: '拥有七条纵棱和柔韧皮质背甲、以水母等胶质猎物为主食，并跨越热带繁殖海滩与高纬觅食区的最大型海龟。',
    description:
      '棱皮龟没有其他海龟那样外露的硬质盾片，深色皮肤下的真皮骨构成柔韧背甲，七条纵棱与极长无爪前鳍肢适合远洋游动。成体能在冷水觅食，部分西太平洋路线超过一万千米，少数潜水达到1,250米；日常潜水远浅于这项纪录。它以水母和樽海鞘等胶质动物为主食，雌龟每隔数年返回热带或亚热带海滩夜间产卵。IUCN当前全球记录为2013年易危且下降，七个亚种群中有四个极危、一个濒危和两个数据缺乏，渔业兼捕仍是首要保护压力。',
    storySections: [
      {
        key: 'identity',
        label: '辨识',
        title: '柔韧背甲上，恰好七条纵棱',
        body: '棱皮龟的深色皮肤下，小型真皮骨构成柔韧背甲，外表没有硬质盾片；七条纵棱汇向钝尖后缘。两只极长前鳍肢和两只短后鳍肢都没有爪，头顶常有粉红斑。',
      },
      {
        key: 'gelatinous-diet',
        label: '食性',
        title: '大量取食水母等胶质动物',
        body: '棱皮龟以水母、樽海鞘等胶质动物为主。加拿大一处研究用19只龟的短时视频和能量模型估计，日均摄入约330千克湿重水母；这个局地结果解释了它为何持续追随高密度猎物，却不是全球个体每天固定配额。',
      },
      {
        key: 'thermal-biology',
        label: '体温',
        title: '在冷海水中保留身体热量',
        body: '五只高纬觅食成体在13.6至15.9°C海水中保持25.4至27.3°C核心体温。巨型身体、脂肪和结缔组织隔热、血流调节、游泳与消化产热、表层晒暖共同维持10.7至12.1°C温差；这属于区域性内温与巨温效应，不等同哺乳动物恒温。',
      },
      {
        key: 'migration-diving',
        label: '迁徙与潜水',
        title: '跨洋迁徙，偶有极深潜水',
        body: '部分西太平洋个体从巴布亚或印度尼西亚前往东北太平洋，路线超过10,000千米。13只成体的26,146次潜水中，最深纪录达1,250米，但99.6%浅于300米；迁徙路线和潜水策略随繁殖群、季节与猎物改变。',
      },
      {
        key: 'nesting',
        label: '繁殖',
        title: '夜间在动态沙滩挖出深卵室',
        body: '雌龟通常每二至四年回到繁殖区，一个季节每隔八至十二天再筑一巢，每巢约一百枚卵，孵化约两个月。沙温影响性别与存活，照明、硬质护岸、侵蚀、风暴和淹水会同时改变母龟上岸与下一代出巢。',
      },
      {
        key: 'regional-risk',
        label: '保护',
        title: '全球易危之下，四个区域已经极危',
        body: '当前全球记录仍是2013年VU且下降；东太平洋、西南大西洋、西南印度洋和西太平洋亚种群为CR，西北大西洋为EN，另有两个DD。2025年优先级研究再次把兼捕列为最高威胁，保护必须按种群和渔业现场实施。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1761 年的棱皮龟命名记录',
        body: '棱皮龟的科学命名记录署名为 Vandelli，年份为 1761 年，现用学名为 Dermochelys coriacea。它的中文名对应背部七条纵棱和皮肤覆盖的柔韧背甲。与多数海龟相比，它没有外露硬质盾片，四个鳍肢也都没有爪。',
      },
    ],
    keyFacts: [
      '当前接受名为Dermochelys coriacea，归入龟鳖目、棱皮龟科、棱皮龟属；当前分类记录不承认有效亚种。',
      '背部没有外露硬质盾片，连续深色皮肤下由小型真皮骨构成柔韧背甲，并有恰好7条纵棱。',
      '成体前鳍肢比例极长，四个鳍肢均无爪；上颌双尖突和咽部乳突不是牙齿。',
      'NOAA成体展示范围约长152至183厘米、重340至454千克；这是典型范围，不是全球极值。',
      '棱皮龟主要捕食水母、樽海鞘和其他胶质浮游动物。',
      '五只高纬成体在13.6至15.9°C海水中维持25.4至27.3°C核心体温，但不能称为哺乳动物式恒温。',
      '研究样本最深潜水为1,250米；13只成体的26,146次潜水中有99.6%浅于300米。',
      '部分西太平洋迁徙路线超过10,000千米，路线随繁殖群与季节变化。',
      '雌龟通常每2至4年繁殖，一个季节多次筑巢，间隔8至12天，每巢约100枚卵并孵化约两个月。',
      'IUCN当前全球评估为VU、decreasing、2013、A2bd；四个亚种群为CR，西北大西洋为EN。',
      'CITES附录I、CMS附录I和中国国家一级保护均是法律状态，不能替代IUCN全球风险评估。',
    ],
    threats: [
      '刺网、延绳钓、拖网、笼具和垂直浮标绳造成的兼捕、溺亡、吞钩与缠绕',
      '为肉、卵及销售进行的直接捕杀与采集',
      '人工照明、滨海开发、硬质护岸、采砂和车辆造成的繁殖海滩丧失与退化',
      '海滩升温、海平面上升、侵蚀、风暴和淹水对巢、性别比与幼龟产出的影响',
      '海洋变暖导致猎物、觅食区和迁徙时序改变',
      '塑料、气球、钓线、油污和遗失渔具造成的误食或缠绕',
      '港口、航道和近岸繁殖迁徙热点的船只撞击',
    ],
    conservationActions: [
      '按渔具和海区验证圆形钩、饵料调整、网具改造、弱链、时空关闭、TED与安全放生流程',
      '保护筑巢雌龟、卵室、天然沙丘和足够宽的干沙，限制车辆、采砂、白光与硬质护岸',
      '只在具体现场风险高于搬迁风险时由受训团队移巢，并完整记录深度、朝向、时间和温度',
      '与社区合作减少捕杀和采卵，执行国内保护、CITES贸易管制与CMS跨国协作',
      '清除遗失渔具、钓线、气球和塑料，在近岸热点实施船只减速、瞭望与避让',
      '按遗传种群和RMU维持可比的巢数、海上丰度、兼捕、遥测与气候监测',
      '补足雄龟、幼龟和非繁殖区资料，以多处动态繁殖海滩分散气候风险',
    ],
    metrics: {
      adultLengthCm: [152, 183],
      adultMassKg: [340, 454],
    },
    featuredStats: [
      {
        key: 'adult-length',
        label: '成体长度',
        value: '152—183',
        unit: '厘米',
        note: 'NOAA 5至6英尺展示范围的换算，不是全球最大甲长',
      },
      {
        key: 'adult-mass',
        label: '成体质量',
        value: '340—454',
        unit: '千克',
        note: 'NOAA 750至1,000磅展示范围的换算，不是全球极值',
      },
      {
        key: 'recorded-dive',
        label: '研究纪录潜深',
        value: '1,250',
        unit: '米',
        note: '13只成体研究中的最深纪录；99.6%的潜水浅于300米，不是日常深度或物种上限',
      },
      {
        key: 'transoceanic-route',
        label: '跨洋迁徙路线',
        value: '>10,000',
        unit: '千米',
        note: '西太平洋部分个体从巴布亚或印度尼西亚前往东北太平洋的路线，不是全种平均值',
      },
    ],
    media: {
      image: './images/species/leatherback-turtle/01-open-ocean-ridged-swim.webp',
      alt: '一只七条纵棱清楚、深色淡斑且无硬质盾片的成年棱皮龟在开放蓝水中游动，主体位于画面右侧，左侧保留宽阔安静水体',
      focalPoint: { x: 0.72, y: 0.56 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/leatherback-turtle/02-seven-ridges-clawless-flippers.webp',
          alt: '从略高的三分之四视角观察一只成年棱皮龟，恰好七条背棱、粉红头斑、两只长前鳍和两只短后鳍完整可见且均无爪',
          title: '七条纵棱与无爪长鳍',
          caption: '连续皮肤覆盖柔韧背甲，七条纵棱和极长前鳍是区别于其他海龟的核心特征。',
          focalPoint: { x: 0.6, y: 0.5 },
        },
        {
          image: './images/species/leatherback-turtle/03-jellyfish-foraging.webp',
          alt: '一只成年棱皮龟在开放海水中接近一只狮鬃水母，平滑双尖突上颌和中央缺口可见，口中没有独立牙齿',
          title: '追随胶质浮游动物',
          caption: '水母与樽海鞘是主要猎物；加拿大局地的高摄入量模型不能外推为每只龟的固定日粮。',
          focalPoint: { x: 0.62, y: 0.52 },
        },
        {
          image: './images/species/leatherback-turtle/04-deep-transit-dive.webp',
          alt: '一只成年棱皮龟从高处明亮海面斜向下潜入无海底可见的深蓝水柱，完整四鳍肢与七条纵棱保持清楚',
          title: '迁徙阶段的罕见深潜',
          caption: '研究最深纪录为1,250米，但26,146次潜水中99.6%浅于300米，极深潜水并非常态。',
          focalPoint: { x: 0.61, y: 0.61 },
        },
        {
          image: './images/species/leatherback-turtle/05-night-nest-digging.webp',
          alt: '月光下的暗色热带沙滩上，一只短尾成年雌性棱皮龟用后鳍挖深卵室，周围只有体坑与自然鳍痕且没有外露卵',
          title: '短尾雌龟夜间挖巢',
          caption: '雌龟先挖体坑和深卵室；画面保留单一筑巢瞬间，不把产卵、覆巢和幼龟出巢拼在一起。',
          focalPoint: { x: 0.63, y: 0.58 },
        },
        {
          image: './images/species/leatherback-turtle/06-striped-hatchlings-dark-beach.webp',
          alt: '恰好三只深黑棱皮龟幼龟在无人工白光的暗色沙滩朝低海平线爬行，每只都有七条淡色背棱线和淡色鳍缘',
          title: '带淡色棱线的幼龟入海',
          caption: '幼龟不是微缩成体：七条淡色棱线、淡色鳍缘和相对很长的前鳍在暗夜中清楚可辨。',
          focalPoint: { x: 0.55, y: 0.62 },
        },
      ],
    },
    sources: [
      ...LEATHERBACK_TURTLE_SOURCES,
      {
        title: 'GBIF: Dermochelys coriacea (Vandelli, 1761) nomenclatural record',
        url: 'https://www.gbif.org/species/9789983',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: LEATHERBACK_TURTLE_CONTENT_DATE,
    updatedAt: LEATHERBACK_TURTLE_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
