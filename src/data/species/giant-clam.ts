import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const GIANT_CLAM_SOURCE_DATE = '2026-08-29' as const;

const GIANT_CLAM_CONTENT_DATE = '2026-08-29' as const;

const GIANT_CLAM_SOURCES = [
  {
    title: 'WoRMS/MolluscaBase — Tridacna gigas (accepted; AphiaID 207670)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=207670',
    kind: 'taxonomy',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — full classification of Tridacna gigas',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/207670',
    kind: 'taxonomy',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III',
    url: 'https://cites.org/eng/app/appendices.php',
    kind: 'conservation',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'CITES Animals Committee — Review of Significant Trade in Tridacnidae',
    url: 'https://cites.org/sites/default/files/eng/com/ac/26/E26-12-02-A.pdf',
    kind: 'conservation',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: '上海市绿化和市容管理局 — 国家重点保护野生动物名录',
    url: 'https://lhsr.sh.gov.cn/gjzdbhysdwml/',
    kind: 'conservation',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'IUCN 2024 — Tridacna gigas assessment (CR A2acd)',
    url: 'https://doi.org/10.2305/IUCN.UK.2024-2.RLTS.T22137A119167161.en',
    kind: 'conservation',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List 2024-2 Table 7 — species changing status',
    url: 'https://nc.iucnredlist.org/redlist/content/attachment_files/2024-2_RL_Table_7.pdf',
    kind: 'conservation',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — True Giant Clam species profile',
    url: 'https://www.fisheries.noaa.gov/species/true-giant-clam',
    kind: 'distribution',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries 2024 — Status Review Report of Giant Clams',
    url: 'https://www.fisheries.noaa.gov/s3/2024-07/StatusReview-GiantClams-508.pdf',
    kind: 'general',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'U.S. Federal Register 2024 — proposed giant-clam listing determinations',
    url: 'https://www.federalregister.gov/documents/2024/07/25/2024-14970/endangered-and-threatened-wildlife-and-plants-proposed-listing-determinations-for-10-species-of',
    kind: 'conservation',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Senckenberg Society — Gentle Giants in Trouble',
    url: 'https://www.senckenberg.de/en/press-releases/gentle-giants-in-trouble/',
    kind: 'conservation',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Yonge 1981 — functional morphology and evolution in Tridacnidae',
    url: 'https://journals.australian.museum/yonge-1981-rec-aust-mus-3317-735777/',
    kind: 'general',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Klumpp et al. 1992 — filter feeding and photosynthate nutrition in Tridacna gigas',
    url: 'https://doi.org/10.1016/0022-0981(92)90030-E',
    kind: 'ecology',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Fisher et al. 1985 — photosynthesis, respiration, irradiance and size',
    url: 'https://doi.org/10.2307/1541400',
    kind: 'ecology',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Norton et al. 1992 — zooxanthellal tubular system in the giant clam',
    url: 'https://doi.org/10.2307/1542028',
    kind: 'ecology',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Leggat et al. 2000 — inorganic-carbon supply in a clam-alga association',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1690557/',
    kind: 'ecology',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Holt et al. 2014 — photosymbiotic giant clams transform solar flux',
    url: 'https://doi.org/10.1098/rsif.2014.0678',
    kind: 'ecology',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Ghoshal et al. 2016 — light scattering by giant-clam iridocytes',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4971220/',
    kind: 'ecology',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Wilkens 1986 — visual system and shadow response in Tridacna',
    url: 'https://doi.org/10.2307/1541850',
    kind: 'ecology',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Soo & Todd 2014 — behavior of giant clams',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4231208/',
    kind: 'ecology',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Crawford et al. 1986 — spawning and larval rearing of Tridacna gigas',
    url: 'https://doi.org/10.1016/0044-8486(86)90094-3',
    kind: 'ecology',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Fitt et al. 1986 — environmental acquisition of symbionts by larvae and juveniles',
    url: 'https://doi.org/10.1016/0044-8486(86)90051-7',
    kind: 'ecology',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Enricuso et al. 2019 — warming effects on embryonic and larval development',
    url: 'https://academic.oup.com/mollus/article/85/1/66/5185981',
    kind: 'ecology',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Watanabe et al. 2004 — a 60-year isotopic record from Tridacna gigas',
    url: 'https://doi.org/10.1016/S0031-0182(04)00358-X',
    kind: 'general',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Neo et al. 2015 — ecological significance of giant clams on coral reefs',
    url: 'https://doi.org/10.1016/j.biocon.2014.11.004',
    kind: 'ecology',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Cabaitan et al. 2008 — giant-clam restocking and reef-fish communities',
    url: 'https://doi.org/10.1016/j.jembe.2008.01.001',
    kind: 'conservation',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Cabaitan & Conaco 2017 — natural recruitment from restocked giant clams',
    url: 'https://doi.org/10.1007/s00338-017-1558-9',
    kind: 'conservation',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
  {
    title: 'Neo et al. 2017 — giant-clam species, distribution, threats and conservation',
    url: 'https://marineinfo.org/imis?module=ref&refid=318255',
    kind: 'distribution',
    accessedAt: GIANT_CLAM_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-tridacna-gigas',
    slug: 'giant-clam',
    names: {
      zh: '巨砗磲',
      en: 'Giant Clam',
      aliases: [
        '大砗磲',
        '巨砗磲蛤',
        '库氏砗磲',
        'True Giant Clam',
        'Gigas Clam',
      ],
    },
    scientificName: 'Tridacna gigas',
    taxonomy: animalTaxonomy(
      taxon('Mollusca', '软体动物门'),
      taxon('Bivalvia', '双壳纲'),
      taxon('Cardiida', '鸟蛤目'),
      taxon('Cardiidae', '鸟蛤科'),
      taxon('Tridacna', '砗磲属'),
    ),
    conservation: conservation('CR', 'decreasing', 2024, 'A2acd'),
    distribution: {
      realms: ['marine'],
      continents: ['亚洲', '大洋洲'],
      regions: [
        '东部印度洋安达曼海与印度尼西亚群岛',
        '南海与珊瑚三角区',
        '西太平洋岛弧与澳大利亚大堡礁',
        '密克罗尼西亚至基里巴斯的中太平洋',
      ],
      countries: [
        '澳大利亚',
        '缅甸',
        '泰国',
        '马来西亚',
        '印度尼西亚',
        '菲律宾',
        '中国',
        '日本',
        '帕劳',
        '巴布亚新几内亚',
        '所罗门群岛',
        '基里巴斯',
        '马绍尔群岛',
      ],
      range:
        '现代原生范围从东部印度洋的缅甸和安达曼海，经印度尼西亚群岛、南海、菲律宾、巴布亚新几内亚及澳大利亚大堡礁，向东延伸到马绍尔群岛和基里巴斯，北至琉球群岛。国家列表同时包含历史与现代原生记录，不代表各地仍有稳定繁殖种群；多处已经局部灭绝、极稀少或只见来源不明的放流个体。东非只有化石记录，夏威夷等地的引入和养殖记录也不属于现代原生范围。',
      center: { lat: -16.5, lng: 145.8 },
    },
    habitats: [
      {
        name: '透光浅水珊瑚礁与硬底',
        realm: 'marine',
        description:
          '典型记录集中在约 2 至 20 米深的热带透光带。粗糙硬底为幼体提供附着表面，清澈浅水让成体外套膜内的共生甲藻获得光照；这个范围描述常见生境，不是绝对深度边界。',
        isPrimary: true,
      },
      {
        name: '环礁礁湖、岸礁与堡礁',
        realm: 'marine',
        description:
          '巨砗磲可生活在约 2 至 20 米深的礁湖和礁台，只要水体保持足够光照与交换。大堡礁仍保有较连续的种群，其他历史分布地的存在记录不能证明当地仍能自然补充。',
      },
      {
        name: '砂底、死珊瑚块与珊瑚碎屑间',
        realm: 'marine',
        description:
          '大型成体可自由躺在浅礁砂底或珊瑚碎屑间，体重足以稳定身体，因此不再依赖幼年期的足丝固定。沉积物、浑浊和水质恶化会同时影响滤食、采光和幼体定居。',
      },
    ],
    measurements: {
      length: {
        max: 137,
        unit: 'cm',
        note:
          '最大报道壳长，指双壳前后方向的最大直线长度，不是外套膜展开宽度；常见壳长约 80 cm。',
      },
    },
    diet: {
      types: ['filter-feeder'],
      foods: ['浮游植物与其他微型浮游生物', '水体中的悬浮有机颗粒'],
      description:
        '鳃持续泵水并截留食物颗粒，外套膜内的共生甲藻还会把部分光合产物转移给宿主。阳光为共生藻提供能量，却不是巨砗磲吞食的食物；宿主仍从滤食、水体和自身代谢取得氮、磷等营养。',
    },
    activity: [
      '白天在光照充足时把外套膜铺展到壳缘上方',
      '用鳃泵水，过滤微型浮游生物和悬浮有机颗粒',
      '通过外套膜内细胞外分支管道中的共生甲藻接收光合产物',
      '用外套膜边缘的感光结构察觉移动阴影',
      '遇到阴影或触碰时先收回外套膜，再让双壳部分靠拢并从出水管排水',
      '成年个体依靠体重稳定在礁底，幼年阶段可用足丝附着粗糙硬底',
      '繁殖期向水体广播释放配子，外部受精依赖邻近成熟个体',
      '幼体从环境水体摄取共生甲藻，并在变态前后建立共生关系',
    ],
    tags: [
      '软体动物门',
      '双壳纲',
      '鸟蛤目',
      '现生最大双壳类',
      '珊瑚礁',
      '浅海透光带',
      '滤食者',
      '光合共生',
      '虹彩细胞',
      '针孔眼',
      '广播产卵',
      '先雄后雌',
      'IUCN极危',
      'CITES附录II',
      '国家一级保护',
    ],
    summary:
      '现生壳长纪录最大的双壳类，栖居东部印度洋至中太平洋约 2 至 20 米深的透光浅礁；它过滤水中颗粒，也接收外套膜共生甲藻的光合产物，长期采捕与环境退化使 IUCN 于 2024 年将其评为极危。',
    description:
      '巨砗磲 Tridacna gigas 是鸟蛤科砗磲属的海生双壳类。厚重双壳通常具有 4 至 6 条深放射褶和宽大三角形壳缘突起，外表缺少鳞砗磲那种密集叶片状鳞片；最大报道壳长 137 厘米，常见壳长约 80 厘米，超过 225 千克只描述极大个体的报道总重。黄褐至橄榄绿色外套膜布满细小蓝绿环斑，鳃负责滤食，细胞外分支管道中的共生甲藻提供部分光合产物，两条营养通道共同支持生长。移动阴影会触发外套膜回缩和双壳部分靠拢，这是一种防御反应，没有证据支持主动夹捕人类的“食人贝”故事。个体先形成雄性功能，随后成为同时具备雄、雌性功能的雌雄同体；平均一次可排约 5 亿枚卵，但低密度会降低外部受精机会。壳龄研究记录到约 60 至 76 年，最大寿命仍未确定。IUCN 2024 依据过去三个世代约 100 年内估计下降 84%，将本种列为 CR A2acd，全球成熟个体数仍未知。CITES 附录 II 要求国际贸易许可和非致危判断，并不等于全面禁贸。',
    storySections: [
      {
        key: 'deep-folded-shell',
        label: '壳形与尺寸',
        title: '厚重双壳上的深放射褶',
        body: '巨砗磲躺在浅礁底面时，厚重双壳常被藻类和附着生物染成旧岩石般的颜色。每片壳有 4 至 6 条深放射褶，壳缘形成宽大的三角突起，外表通常缺少鳞砗磲那种密集叶片状鳞片。大型成体依靠体重稳定在底面，不再依赖幼年期足丝固定。最大报道壳长 137 厘米，常见壳长约 80 厘米；超过 225 千克属于极大个体总重报道，不是普通成体的典型值。',
      },
      {
        key: 'mantle-light-field',
        label: '外套膜与光',
        title: '外套膜中的共生甲藻需要光照',
        body: '黄褐或橄榄绿色外套膜越过壳缘，边缘和水管附近分布许多细小蓝绿环斑。其他砗磲物种的实验显示，虹彩细胞可散射并重新分配光线，让光进入含共生甲藻的组织，同时减轻局部强光压力；巨砗磲本种仍缺少同等直接实验。共生藻生活在由消化系统延伸出的细胞外分支管道中。水管开口和外套膜花纹也需要与壳褶、鳞片等特征合看，颜色本身不足以完成物种鉴定。',
      },
      {
        key: 'dual-nutrition',
        label: '滤食与共生',
        title: '鳃过滤颗粒，共生藻转交光合产物',
        body: '鳃泵水并截留微型浮游生物和悬浮有机颗粒，共生甲藻则把部分光合固定的碳转移给宿主。实验显示小个体对滤食碳源的依赖更高，随身体增大，光合共生所占比例会上升，滤食仍会继续。阳光只为共生光合作用供能；水体颗粒、氮磷和宿主代谢共同维持这套营养关系。浑浊、污染和白化会从不同方向削弱两条通道。',
      },
      {
        key: 'shadow-defense',
        label: '感光与防御',
        title: '影子掠过，外套膜先收回',
        body: '外套膜边缘的感光结构能察觉光暗变化和移动物体。鱼影或潜水员靠近时，巨砗磲收回外套膜，让闭壳肌带动双壳靠拢，并可从出水管排水；大型成体常只能部分闭合。研究支持防御解释，没有证据表明它会伏击、夹死或吞食人类。野外观察者仍应保持距离，避免触碰外套膜或把肢体伸入双壳之间。',
      },
      {
        key: 'broadcast-spawning',
        label: '繁殖与定居',
        title: '大量配子仍需要邻居和合适海流',
        body: '巨砗磲先形成雄性功能，长大后同时具备雄、雌性功能。繁殖时个体先排精、后排卵，平均一次可排约 5 亿枚卵；外部受精仍需要邻近成熟个体在合适时间释放配子。早期死亡率很高，低密度会进一步稀释精卵。卵和早期幼体不携带共生藻，幼体从海水摄入合适藻株；养殖实验记录幼体在受精后约 7 至 8 天附着并变态，温度和培养条件会改变进度。',
      },
      {
        key: 'decline-and-restocking',
        label: '极危与恢复',
        title: '放流之后还要等到自然补充',
        body: '食用采捕、贝壳与活体贸易长期移走浅水大成体，栖息地退化和升温又损伤共生、幼体与招募。IUCN 2024 综合多地资料，估计过去三个世代约 100 年下降 84%，并把本种评为 CR A2acd；这不是全球逐只普查，也不能换算成现存个体总数。人工繁育和放流已在部分礁区留下存活或自然招募记录。管理者仍需跟踪来源、疾病、成熟、产卵和第二代补充，投放数量本身不能证明种群恢复。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的巨砗磲命名记录',
        body: '巨砗磲的命名记录可追溯到林奈 1758 年的描述，现用学名为 Tridacna gigas。中文“巨”对应其大型双壳，最大报道壳长 137 厘米，常见壳长约 80 厘米。流传的“食人贝”故事缺少证据，它收回外套膜并部分闭壳是防御反应。',
      },
    ],
    keyFacts: [
      '当前接受学名是 Tridacna gigas (Linnaeus, 1758)，WoRMS AphiaID 为 207670。',
      '当前六级分类采用 Mollusca、Bivalvia、Cardiida、Cardiidae 与 Tridacna。',
      '旧资料常采用 Veneroida 与 Tridacnidae，当前分类采用鸟蛤目 Cardiida 和鸟蛤科 Cardiidae。',
      '每片厚重双壳具有 4 至 6 条深放射褶，壳缘形成宽大三角突起。',
      '外壳通常缺少鳞砗磲那种醒目的叶片状鳞片，颜色不能单独完成鉴定。',
      '最大报道壳长为 137 cm，测量双壳前后方向的最大直线长度；常见壳长约 80 cm。',
      '超过 225 kg 只描述极大个体的报道总重，不是普通成体体重范围。',
      '核心生境位于约 2 至 20 m 深的透光珊瑚礁、礁湖、硬底和砂底。',
      '鳃滤食与共生甲藻的光合产物共同供能，阳光为共生藻提供能量。',
      '共生甲藻位于外套膜内的细胞外分支管道，并非宿主细胞内的绿色颗粒。',
      '共生藻不随卵遗传，幼体从环境水体摄入藻株。',
      '外套膜感光结构能探测移动阴影，回缩和部分闭壳属于防御反应。',
      '本种先形成雄性功能，随后成为同时具备雄、雌性功能的雌雄同体。',
      '平均一次产卵约 5 亿枚，高产卵量不能抵消早期死亡和低密度受精失败。',
      '壳龄研究记录到约 60 至 76 年，最大寿命尚未确定。',
      'IUCN 2024 状态为 CR A2acd、趋势下降；84% 是约 100 年趋势估计，不是全球个体普查。',
      'CITES 附录 II 管理国际贸易许可、来源和非致危判断，并非全面禁贸。',
      '中国《国家重点保护野生动物名录》以“大砗磲（原名库氏砗磲）”列为国家一级保护野生动物，保护范围限定为野生种群。',
    ],
    threats: [
      '食用采捕、偷捕及闭壳肌贸易持续移走浅水大型成体',
      '整壳、雕刻品与野采活体贸易可能混入合法养殖供应链',
      '低成体密度降低广播受精的精卵相遇率并阻断自然补充',
      '沿岸开发、沉积物、污水和污染物使栖息地与水质退化',
      '海洋升温会引发白化，并增加胚胎、幼体和定居后个体的异常与死亡',
    ],
    conservationActions: [
      '执行采捕法规和 CITES 附录 II 许可，追踪活体、肉、整壳及加工品来源',
      '保护大堡礁等残存繁殖聚集地，并改善沿岸水质与沉积管理',
      '长期监测成熟密度、尺寸结构、自然招募、白化与热暴露',
      '发展来源清楚且可追溯的人工繁育，减少市场对野采个体的需求',
      '放流前核对亲本来源与遗传结构，并开展疾病筛查',
      '放流后跟踪存活、生长、成熟、产卵和第二代自然招募',
      '与沿海社区共同制定管理、执法和替代生计方案',
      '保护热风险较低的浅礁庇护地，并通过减排降低长期海洋增暖压力',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'reported-maximum-shell-length',
        label: '最大报道壳长',
        value: '137',
        unit: 'cm',
        note: '双壳前后方向最大直线长度，不是外套膜展开宽度。',
      },
      {
        key: 'reported-extreme-total-mass',
        label: '极大个体报道总重',
        value: '>225',
        unit: 'kg',
        note: '下限式极值报道，不代表普通成体体重范围。',
      },
      {
        key: 'mean-eggs-per-spawning',
        label: '平均单次产卵量',
        value: '约 5亿',
        unit: '枚',
        note: '高产卵量不等于高受精率、幼体存活率或自然招募率。',
      },
      {
        key: 'estimated-three-generation-decline',
        label: '三个世代估计下降',
        value: '84',
        unit: '%',
        note: 'IUCN 2024 对约 100 年趋势的估计，不是全球个体普查。',
      },
    ],
    media: {
      image:
        './images/species/giant-clam/01-shallow-reef-adult-portrait.webp',
      alt: '透光浅礁底面，一只成年巨砗磲展开带细小蓝绿环斑的橄榄褐色外套膜，厚重双壳具有深褶和宽大三角壳缘',
      focalPoint: { x: 0.68, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/giant-clam/02-heavy-shell-rib-profile.webp',
          alt: '从侧面观察一只巨砗磲的厚重灰白双壳，可见数道深放射褶、宽大三角壳缘和靠近上缘的外套膜',
          title: '深放射褶塑造厚重壳形',
          caption:
            '侧面重建突出深壳褶与缺少大型叶片状鳞片的外形；生成像素不能提供精确褶数、壳长、重量或单独完成物种鉴定。',
          focalPoint: { x: 0.52, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/giant-clam/03-mantle-and-siphonal-openings-macro.webp',
          alt: '巨砗磲橄榄褐色外套膜近景，细小蓝绿环斑围绕一个宽阔入水开口和一个抬高的出水管',
          title: '双水管连接持续滤水',
          caption:
            '近景呈现无触手状缘的入水开口、出水管和细小环斑；画面不测量开口尺寸、水流速度、环斑数量或感光能力。',
          focalPoint: { x: 0.53, y: 0.48 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/giant-clam/04-sunlit-open-mantle.webp',
          alt: '浅海日光下，一只巨砗磲在礁面展开宽大的橄榄褐色外套膜，蓝绿色小环斑和两个水管开口清晰可见',
          title: '白昼展开外套膜，同时保持滤水',
          caption:
            '外套膜展开表现采光姿态，水管对应持续滤水；静态重建不显示光合碳比例、颗粒截留率、真实时刻或固定开合周期。',
          focalPoint: { x: 0.53, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/giant-clam/05-broadcast-spawning-plume.webp',
          alt: '浅礁上的一只巨砗磲上方出现从水管开口延伸到水体的浅色释放云团',
          title: '繁殖期的水体释放云团',
          caption:
            '画面重建广播繁殖时的释放情境；单帧不能判定云团是精子还是卵子，也不能读取配子释放顺序、数量、季节或邻近个体同步程度。',
          focalPoint: { x: 0.45, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/giant-clam/06-juvenile-byssal-attachment.webp',
          alt: '一只幼年巨砗磲底部的细足丝接触并附着在粗糙礁面上',
          title: '幼体足丝接触并附着礁面',
          caption:
            '足丝与粗糙底物的连接表现幼体附着关系；画面不提供体长、年龄、定居时间，也不表示足丝会成为永久锚定结构。',
          focalPoint: { x: 0.52, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...GIANT_CLAM_SOURCES,
      {
        title: 'GBIF: Tridacna gigas (Linnaeus, 1758) nomenclatural record',
        url: 'https://www.gbif.org/species/4372619',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: GIANT_CLAM_CONTENT_DATE,
    updatedAt: GIANT_CLAM_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
