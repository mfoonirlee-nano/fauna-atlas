import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const SEA_OTTER_SOURCE_DATE = '2026-08-25' as const;

const SEA_OTTER_CONTENT_DATE = '2026-08-25' as const;

const SEA_OTTER_SOURCES = [
  {
    title: 'IUCN Red List: Enhydra lutris (assessed 2020; errata published 2022)',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T7750A219377647.en',
    kind: 'conservation',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database v2.5: Enhydra lutris',
    url: 'https://www.mammaldiversity.org/taxon/1005842/',
    kind: 'taxonomy',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: 'COSEWIC 2022: Sea Otter assessment and status report',
    url: 'https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html',
    kind: 'general',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: '中国大百科全书：海獭',
    url: 'https://www.zgbk.com/ecph/words?Name=%E6%B5%B7%E7%8D%AD&SiteID=1&SourceID=198808&Type=bkzyb&subSourceType=000003000007000022',
    kind: 'taxonomy',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: 'Cronin et al. 1996: Systematics, taxonomy, and genetic variation of sea otters',
    url: 'https://doi.org/10.2307/1382828',
    kind: 'taxonomy',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: 'CITES: Appendices I, II and III, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: '国家林草局：CITES 附录中文版，2026 年 3 月 5 日生效',
    url: 'https://www.forestry.gov.cn/u/cms/www/202603/09095455uug5.pdf',
    kind: 'conservation',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: 'U.S. Fish and Wildlife Service: Southern Sea Otter',
    url: 'https://www.fws.gov/species/southern-sea-otter-enhydra-lutris-nereis',
    kind: 'general',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: 'Estes & Duggins 1995: Sea otters and kelp forests in Alaska',
    url: 'https://doi.org/10.2307/2937159',
    kind: 'ecology',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: 'Hughes et al. 2013: Recovery of a top predator mediates eutrophic effects on seagrass',
    url: 'https://doi.org/10.1073/pnas.1302805110',
    kind: 'ecology',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: 'Fujii, Ralls & Tinker 2015: Ecological drivers of variation in tool-use frequency',
    url: 'https://doi.org/10.1093/beheco/aru220',
    kind: 'ecology',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: 'Wright et al. 2021: Skeletal muscle thermogenesis enables aquatic life in sea otters',
    url: 'https://doi.org/10.1126/science.abf4557',
    kind: 'ecology',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: 'McKay Strobel et al. 2018: Active touch in sea otters',
    url: 'https://doi.org/10.1242/jeb.181347',
    kind: 'ecology',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: 'Thometz et al. 2014: Energetic demands of immature sea otters and reproductive females',
    url: 'https://doi.org/10.1242/jeb.099739',
    kind: 'ecology',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: 'USGS: California sea otter surveys and research',
    url: 'https://www.usgs.gov/centers/werc/science/california-sea-otter-surveys-and-research',
    kind: 'conservation',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: 'USGS 2024: Southern sea otter census and statistical model development',
    url: 'https://www.usgs.gov/centers/werc/news/2024-southern-sea-otter-census-and-statistical-model-development',
    kind: 'conservation',
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-enhydra-lutris',
    slug: 'sea-otter',
    names: {
      zh: '海獭',
      en: 'Sea Otter',
      aliases: ['海虎'],
    },
    scientificName: 'Enhydra lutris',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Carnivora', '食肉目'),
      taxon('Mustelidae', '鼬科'),
      taxon('Enhydra', '海獭属'),
    ),
    conservation: conservation('EN', 'decreasing', 2020, 'A2abe'),
    distribution: {
      realms: ['marine'],
      continents: ['亚洲', '北美洲'],
      regions: [
        '千岛群岛、堪察加半岛与科曼多尔群岛',
        '北海道东部近海，常驻状态尚不确定',
        '阿留申群岛、阿拉斯加南岸与阿拉斯加湾',
        '阿拉斯加东南部、不列颠哥伦比亚和华盛顿州外海',
        '加利福尼亚中部海岸与圣尼古拉斯岛',
        '下加利福尼亚近海，季节性或常驻状态尚不确定',
      ],
      countries: ['加拿大', '日本', '墨西哥', '俄罗斯', '美国'],
      range:
        '沿北太平洋边缘的岛屿与近岸海域间断分布，从千岛群岛、堪察加和科曼多尔群岛，经阿留申群岛与阿拉斯加湾延至不列颠哥伦比亚、华盛顿州和加利福尼亚；北海道东部与下加利福尼亚有现存记录，但季节性或常驻状态尚不确定。',
      center: { lat: 52, lng: -170 },
    },
    habitats: [
      {
        name: '岩礁与巨藻林',
        realm: 'marine',
        description:
          '浅海岩礁提供海胆、螺、蟹与双壳类等底栖猎物；巨藻冠层也能减缓漂移，为水面休息和母幼照护提供结构。',
        isPrimary: true,
      },
      {
        name: '软底海湾、河口与海草床',
        realm: 'marine',
        description:
          '蛤类丰富的软沉积物、受遮蔽海湾和河口可支持高密度种群；海獭通过蟹类等猎物也能改变局部海草食物网。',
      },
      {
        name: '岛屿外缘与有遮蔽的近岸水域',
        realm: 'marine',
        description:
          '活动通常集中在距岸一至两千米以内，多数觅食潜水浅于四十米；安全水面与邻近猎物地共同构成完整生境。',
      },
    ],
    measurements: {
      length: {
        max: 148,
        unit: 'cm',
        note: '成体总长上限；雄性可至 148 厘米，雌性可至 140 厘米，不能把 140 至 148 厘米写成全体成体范围',
      },
      weight: {
        max: 46,
        unit: 'kg',
        note: '成体体重上限；雄性可至 46 千克，雌性可至 36 千克，体重随性别、地点与资源条件变化',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '海胆',
        '蛤、贻贝等双壳类',
        '螺与石鳖',
        '蟹和其他甲壳类',
        '章鱼',
        '海参与海星',
        '部分地区的鱼类',
      ],
      description:
        '主要潜至海底捕食底栖无脊椎动物，鱼类只在部分西部种群中占较大比重。个体常形成长期猎物偏好，食谱会随地点、密度和资源条件改变；部分个体用石头处理厚壳猎物。',
    },
    activity: [
      '昼夜均可活动，觅食节律随地点、潮汐与资源改变',
      '在海底觅食，在水面进食、休息和梳理被毛',
      '雌雄常组成分开的海面群体，繁殖雄性可建立领域',
      '多数个体具有较强地点忠诚，部分会季节移动或随范围扩张迁移',
      '工具使用频率随个体、猎物和种群显著变化',
    ],
    tags: ['北太平洋', '海生鼬科', '近岸关键种', '工具使用', 'IUCN 濒危', 'CITES 亚种分列'],
    summary:
      '海獭生活在北太平洋近岸，靠极密的被毛和高代谢保温，用灵活前爪寻找底栖食物。它捕食海胆与蟹类，能影响部分海岸生态系统。',
    description:
      '海獭的宽大后足像鳍，帮助它在近岸潜水；短而灵活的前爪和敏感触须用于寻找和处理底栖猎物。它主要依靠极密的双层被毛保温，需要频繁梳理，并以高代谢持续产热。部分个体还用石头敲开厚壳猎物。海獭曾因毛皮贸易濒临消失，保护与转移计划让它重返许多海岸。但阿留申群岛的下降、加利福尼亚的分布限制，以及油污、渔具、疾病和资源冲突仍使全球趋势下降。',
    storySections: [
      {
        key: 'fully-marine-mustelid',
        label: '海洋生活',
        title: '把一生留在海里',
        body: '海獭能在水面休息、进食、交配、生产和照护幼崽，也会短暂登上岩礁或沙滩。宽大的后足和肌肉质尾巴负责水中推进与转向，短而灵活的前爪则处理海底猎物。',
      },
      {
        key: 'fur-and-heat',
        label: '保温与能量',
        title: '密毛和高代谢维持体温',
        body: '极密绒毛困住空气，外层护毛挡水，频繁梳理让毛保持整洁。骨骼肌也持续产热。维持体温需要大量能量，海獭每天要吃下超过体重五分之一的食物。',
      },
      {
        key: 'urchins-and-kelp',
        label: '关键种作用',
        title: '捕食海胆可以帮助维持巨藻林',
        body: '在许多岩礁生态系统中，海獭捕食海胆，减少海胆啃食巨藻，从而帮助维持巨藻林。这种由捕食者传到植物的影响叫营养级联。跨地点和长期研究支持这一关系，影响强度也取决于海胆补充、生境和其他捕食者。',
      },
      {
        key: 'touch-and-tools',
        label: '感知与工具',
        title: '用触觉找食物，用石头处理硬壳',
        body: '灵活前爪和触须让海獭在岩缝、沉积物和浑水中分辨猎物。面对厚壳蛤或螺，部分个体把石头留在腋下皮褶，再带到水面当砧台。工具使用不是物种统一动作：不同地点使用者比例和每次觅食的使用频率相差很大。',
      },
      {
        key: 'mother-and-pup',
        label: '繁殖与成长',
        title: '母亲独自照护幼崽六至八个月',
        body: '雌性通常一次产一只幼崽，独自承担托抱、梳理、哺乳、保护和觅食。幼崽依赖母亲约六至八个月，母亲的能量负担会随幼崽成长而显著上升。',
      },
      {
        key: 'uneven-recovery',
        label: '保护与监测',
        title: '各地种群恢复程度不同',
        body: '捕猎禁令、法律保护和转移计划让海獭重返不少海岸，各地恢复程度却不同。西部大范围下降、加利福尼亚边缘死亡，以及油污、渔具、病原体和资源冲突仍在影响种群。长期重复调查和健康监测可以帮助辨明原因。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的堪察加海獭记录',
        body: '1758 年，林奈以 Mustela Lutris 描述海獭，模式产地记录为俄罗斯堪察加。后来它被归入海獭属 Enhydra，成为今天的 Enhydra lutris。旧属名反映了早期与其他鼬科动物的归类，现代研究则记录了它在海中觅食、休息和育幼的生活方式。',
      },
    ],
    keyFacts: [
      '海獭是 Enhydra lutris；欧亚水獭是 Lutra lutra，前者在海洋中完成全部生命过程。',
      '通行分类承认三个亚种：E. l. lutris、E. l. kenyoni 和 E. l. nereis。',
      'IUCN 全球评估为濒危 A2abe、趋势下降，评估日期为 2020 年 1 月 21 日。',
      '极密双层被毛每平方厘米约可达 100,000 根毛；频繁梳理用于维持困住空气的隔热层。',
      '海獭每天摄食超过体重的 20%；多数觅食潜水在 40 米以内，能够下潜约 100 米。',
      '工具使用随个体和地点改变；八个种群研究中，会使用工具的个体比例约为 10% 至 93%。',
      '雌性通常一次产一只幼崽，独自照护约 6 至 8 个月。',
      'CITES 将南方海獭 E. l. nereis 列入附录 I，其余海獭经水獭亚科条目列入附录 II。',
    ],
    threats: [
      '大型与慢性油污破坏被毛隔热，造成失温、中毒和集中死亡',
      '刺网、蟹笼和废弃渔具缠绕或溺死，以及近岸船只碰撞',
      '贝类和其他渔业资源冲突引发的非法或报复性捕杀',
      '弓形虫等病原体、生物毒素、污染物和陆海径流进入近岸食物网',
      '海洋增温、酸化和极端事件改变猎物、生境与疾病风险',
      '虎鲸捕食和大白鲨咬伤在特定区域限制种群恢复或范围扩张',
      '船艇和过近观察打断休息、梳理与母幼照护',
    ],
    conservationActions: [
      '预防溢油并维持面向近岸聚集海獭的快速响应、救护与长期跟踪能力',
      '降低渔具缠绕、幽灵渔具和船只碰撞风险，管理高干扰水域',
      '保护和恢复巨藻林、海草床、软底海湾及相连的近岸猎物生境',
      '改善流域污水和雨洪管理，联合监测病原体、有害藻华与污染物',
      '与原住民族、沿海社区和渔业共同处理资源冲突，预防非法捕杀',
      '用标准化重复计数、检测校正、遥测、搁浅尸检和健康采样追踪区域趋势',
      '按亚种落实 CITES 附录 I 与附录 II 的差异化国际贸易管制',
    ],
    metrics: {
      lifespanYears: [10, 20],
      maxDiveDepthM: 100,
    },
    featuredStats: [
      {
        key: 'fur-density',
        label: '被毛密度',
        value: '约 100,000',
        unit: '根/平方厘米',
        note: '权威物种报告给出的量级；画面无法直接验证毛发计数',
      },
      {
        key: 'daily-intake',
        label: '每日摄食量',
        value: '>20',
        unit: '% 体重',
        note: '支撑冷水生活高代谢的日摄食量级，不是每次潜水的摄食量',
      },
      {
        key: 'foraging-depth',
        label: '多数觅食水深',
        value: '≤40',
        unit: '米',
        note: '最大下潜能力约 100 米，多数日常觅食远浅于此',
      },
      {
        key: 'pup-dependence',
        label: '幼崽依赖期',
        value: '6–8',
        unit: '个月',
        note: '雌性通常独自照护一只幼崽',
      },
    ],
    media: {
      image: './images/species/sea-otter/01-kelp-surface-portrait.webp',
      alt: '一只完整成年海獭在北太平洋巨藻水面仰浮，浅色头部、短前爪、宽大后足和逐渐收窄的尾巴清楚可见',
      focalPoint: { x: 0.72, y: 0.51 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/sea-otter/02-surface-fur-grooming.webp',
          alt: '一只海獭仰浮在平静海面，用短前爪梳理胸前深色被毛，两只宽扁后足伸出水面',
          title: '守住被毛里的空气',
          caption:
            '梳理帮助双层被毛维持困住空气的隔热结构；每平方厘米约十万根毛和骨骼肌产热来自测量与生理研究，不能由图片本身证明。',
          focalPoint: { x: 0.4, y: 0.47 },
        },
        {
          image: './images/species/sea-otter/03-rocky-kelp-forest-habitat.webp',
          alt: '从高处俯瞰雾气笼罩的北太平洋岩岸和大片巨藻林，一只小比例海獭独自在水面穿行',
          title: '岩礁、浅水与巨藻连成一处家园',
          caption:
            '岩礁提供底栖猎物，巨藻冠层减缓水流并提供水面结构；一只远景海獭只能说明当时使用这片生境，不能证明密度或营养级联。',
          focalPoint: { x: 0.66, y: 0.5 },
        },
        {
          image: './images/species/sea-otter/04-stone-anvil-mussel-foraging.webp',
          alt: '一只仰浮海獭把一块圆石放在胸前作砧台，双前爪举着一只深色贻贝准备敲击',
          title: '部分海獭会使用石头',
          caption:
            '部分个体用石头处理厚壳猎物；十七年、八个种群的资料显示，工具使用频率随个体、猎物与地点大幅变化。',
          focalPoint: { x: 0.46, y: 0.43 },
        },
        {
          image: './images/species/sea-otter/05-mother-carrying-pup.webp',
          alt: '一只成年母海獭仰浮在巨藻水面，胸腹上托着恰好一只浅褐色蓬松幼崽',
          title: '母兽独自承担漫长育幼',
          caption:
            '雌性通常一次产一只幼崽，并独自照护约六至八个月；这幅编辑图不表示精确月龄或已完成亲缘鉴定。',
          focalPoint: { x: 0.43, y: 0.48 },
        },
        {
          image: './images/species/sea-otter/06-shore-based-visual-survey.webp',
          alt: '两名研究者坐在高处岩岸，一人使用三脚架单筒望远镜观察巨藻海湾，另一人在夹板上记录，画面中没有可见海獭',
          title: '把观察变成可比较的调查',
          caption:
            '固定设计下的重复计数与检测校正才支持丰度和趋势判断；调查画面里没有可见动物，也不能凭一次岸基观察断言缺席。',
          focalPoint: { x: 0.32, y: 0.67 },
        },
      ],
    },
    sources: SEA_OTTER_SOURCES,
    featured: true,
    publishedAt: SEA_OTTER_CONTENT_DATE,
    updatedAt: SEA_OTTER_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
