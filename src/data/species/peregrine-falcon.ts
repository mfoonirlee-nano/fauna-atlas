import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const PEREGRINE_FALCON_SOURCE_DATE = '2026-08-26' as const;

const PEREGRINE_FALCON_CONTENT_DATE = '2026-08-26' as const;

const PEREGRINE_FALCON_SOURCES = [
  {
    title: 'IOC World Bird List v15.2: Seriemas and Falcons',
    url: 'https://www.worldbirdnames.org/new/bow/falcons/',
    kind: 'taxonomy',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Falco peregrinus, 2021 global assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T45354964A206217909.en',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Peregrine Falcon Falco peregrinus',
    url: 'https://datazone.birdlife.org/species/factsheet/peregrine-falcon-falco-peregrinus/details',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'Cornell Lab: Peregrine Falcon Identification',
    url: 'https://www.allaboutbirds.org/guide/Peregrine_Falcon/id',
    kind: 'general',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'Cornell Lab: Peregrine Falcon Life History',
    url: 'https://www.allaboutbirds.org/guide/Peregrine_Falcon/lifehistory',
    kind: 'ecology',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'USFWS: Peregrine Falcon recovery and 1999 federal delisting',
    url: 'https://www.fws.gov/press-release/1999-08/peregrine-falcon-back-babbit-announces-removal-worlds-fastest-bird-endangered',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'USFWS 1999 final rule removing the American Peregrine Falcon from the federal endangered list',
    url: 'https://www.fws.gov/sites/default/files/federal_register_document/99-21959.pdf',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'Gu et al. 2021: Climate-driven flyway changes and memory-based long-distance migration',
    url: 'https://doi.org/10.1038/s41586-021-03265-0',
    kind: 'distribution',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'Alerstam 1987: Radar observations of the peregrine stoop',
    url: 'https://doi.org/10.1111/j.1474-919X.1987.tb03207.x',
    kind: 'ecology',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'Tucker 1998: Gliding flight of ideal falcons during diving and pull-out',
    url: 'https://doi.org/10.1242/jeb.201.3.403',
    kind: 'ecology',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'Time 2016: Hunting activity by urban Peregrine Falcons',
    url: 'https://doi.org/10.15845/on.v39i0.1048',
    kind: 'ecology',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'China Biodiversity Red List: Vertebrates 2020',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'China National Key Protected Wild Animals List 2021',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'CMS: Falco peregrinus species page',
    url: 'https://www.cms.int/species/falco-peregrinus',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'Caliendo et al. 2025: HPAI and Peregrine Falcon decline in the Netherlands',
    url: 'https://doi.org/10.3390/v17010024',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-falco-peregrinus',
    slug: 'peregrine-falcon',
    names: {
      zh: '游隼',
      en: 'Peregrine Falcon',
      aliases: ['花梨鹰', 'Peregrine', 'Duck Hawk'],
    },
    scientificName: 'Falco peregrinus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Falconiformes', '隼形目'),
      taxon('Falconidae', '隼科'),
      taxon('Falco', '隼属'),
    ),
    conservation: conservation('LC', 'increasing', 2021),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲', '欧洲', '非洲', '北美洲', '南美洲', '大洋洲'],
      regions: [
        '北极苔原、北方森林带与北大西洋岛屿',
        '欧洲、地中海与北非',
        '西亚、中亚、南亚、东亚与东南亚',
        '北美、中美洲、加勒比与南美洲',
        '撒哈拉以南非洲、马达加斯加与西印度洋岛屿',
        '澳大利亚、新几内亚与西南太平洋岛屿',
      ],
      countries: [
        '加拿大',
        '美国',
        '墨西哥',
        '巴西',
        '秘鲁',
        '智利',
        '阿根廷',
        '英国',
        '法国',
        '西班牙',
        '德国',
        '挪威',
        '瑞典',
        '芬兰',
        '俄罗斯',
        '摩洛哥',
        '阿尔及利亚',
        '埃及',
        '肯尼亚',
        '南非',
        '马达加斯加',
        '土耳其',
        '伊朗',
        '哈萨克斯坦',
        '蒙古',
        '中国',
        '日本',
        '韩国',
        '巴基斯坦',
        '印度',
        '斯里兰卡',
        '菲律宾',
        '印度尼西亚',
        '澳大利亚',
        '巴布亚新几内亚',
        '斐济',
      ],
      range:
        '除南极洲外六大洲均有分布，范围涵盖北极苔原、温带山地和海岸、热带岛屿、非洲、南美洲及澳大拉西亚。高纬种群可作洲际迁徙，低纬度和南半球种群多留居或局地移动。中国多地有繁殖、迁徙停歇或越冬记录。国家列表只列代表性常规范围，不含完整通道、偶见和迷鸟记录。',
    },
    habitats: [
      {
        name: '崖壁、岩峰与峡谷',
        realm: 'terrestrial',
        description:
          '主要自然繁殖环境；裸岩台可容纳浅刮巢，高处便于起飞、守望和进入开阔猎场。',
        isPrimary: true,
      },
      {
        name: '海岸、海岛、泥滩与湿地边缘',
        realm: 'terrestrial',
        description:
          '迁徙和越冬期可利用滨鸟、水鸟及海鸟集中的开阔空域，部分种群也在海崖和近岸岛屿繁殖。',
      },
      {
        name: '苔原、草地、灌丛与荒漠开阔地',
        realm: 'terrestrial',
        description:
          '北方繁殖区和内陆猎场提供开阔飞行空间，岩丘、土崖或人工高点可充当巢位与停栖点。',
      },
      {
        name: '河谷、湖岸与疏林边缘',
        realm: 'terrestrial',
        description:
          '水域和林缘汇集鸟类猎物，崖岸、大树遗留巢或高大结构可提供繁殖与休息位置。',
      },
      {
        name: '城市高层建筑、桥梁、塔架与采石场',
        realm: 'terrestrial',
        description:
          '人工结构能模拟崖壁，鸽类等城市鸟类提供猎物；玻璃、车辆、施工和夜间照明也形成风险。',
      },
    ],
    measurements: {
      length: {
        min: 36,
        max: 49,
        unit: 'cm',
        note: 'Cornell 北美两性共同范围，不代表 18 亚种全球极值',
      },
      weight: {
        min: 0.53,
        max: 1.6,
        unit: 'kg',
        note: 'Cornell 北美两性共同范围；雌鸟通常较大',
      },
      wingspan: {
        min: 100,
        max: 110,
        unit: 'cm',
        note: 'Cornell 北美两性共同范围',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: ['鸽与鸠', '滨鸟', '鸭及其他水鸟', '海鸟', '鸣禽', '蝙蝠'],
      description:
        '以空中捕捉鸟类为主，猎物可包括鸽、滨鸟、鸭、海鸟和鸣禽，也会捕食蝙蝠并偶尔利用少量其他脊椎动物；食谱随地区和季节改变。',
    },
    activity: [
      '以昼行和晨昏活动为主',
      '从高位守望或在高空搜索猎物',
      '用俯冲、水平追逐和鸟群截击捕猎',
      '城市灯光下可出现夜间捕猎',
      '高纬种群可长距离迁徙',
      '低纬和南半球种群多留居',
    ],
    tags: [
      '全球广布',
      '隼形目',
      '空中猎手',
      '高速俯冲',
      '部分种群迁徙',
      '城市适应',
      'IUCN 无危',
      '中国国家二级重点保护野生动物',
      'CITES 附录 I',
      'CMS 附录 II',
    ],
    summary:
      '除南极洲外六大洲广布的空中猎手。游隼以尖翼追击飞鸟，并以高空狩猎俯冲闻名；高纬种群远距离迁徙，部分低纬种群留居。',
    description:
      '游隼利用崖壁、海岸、湿地边缘、开阔地和城市高层结构繁殖或捕猎。它主要在空中截取鸟类，典型成鸟具有蓝灰上体、深色头罩、粗黑髭纹和腹部横斑。Cornell 采用 320 千米/小时作为高空俯冲的圆整科普值；野外雷达、训练鸟试验和气动模型给出不同结果，因此该数字不代表平飞或每次捕猎。2021 年 IUCN/BirdLife 全球评估为 LC、趋势上升，成熟个体初步估算为 248,000 至 478,000，资料质量为 poor。中国 2020 红色名录列为 NT，2021 年国家重点保护野生动物名录列为二级。禁用 DDT、圈养繁育和放归推动了北美恢复，非法捕捉、碰撞、污染、巢区干扰及区域性 HPAI 风险仍需管理。',
    storySections: [
      {
        key: 'hood-and-pointed-wings',
        label: '形态',
        title: '黑头罩下的空中猎手',
        body: '成鸟蓝灰色上体、深色头罩和粗黑髭纹构成醒目的面部图案，浅色腹部布满横斑。长而尖的双翼适合快速飞行，雌鸟通常比雄鸟大；亚种和年龄会改变羽色深浅。',
      },
      {
        key: 'stoop-speed-evidence',
        label: '飞行',
        title: '俯冲速度受飞行条件影响',
        body: '游隼从高处收拢双翼进入狩猎俯冲，重力、气动外形和起始高度共同影响速度。320 千米/小时是 Cornell 使用的圆整科普值，野外雷达、训练鸟试验和模型给出不同结果，平飞速度也低得多。',
      },
      {
        key: 'urban-cliff-analogue',
        label: '城市生态',
        title: '在城市高处筑巢',
        body: '城市建筑、桥梁和塔架提供类似岩壁的高位平台，鸽类又提供稳定猎物。人工结构也带来玻璃碰撞、车辆、施工和灯光风险；城市种群需要巢台管理与低干扰观察。',
      },
      {
        key: 'aerial-bird-hunter',
        label: '食性',
        title: '大多数猎物在空中被截住',
        body: '游隼常从高位观察，再俯冲或水平追逐飞鸟。鸽、滨鸟、鸭、海鸟和鸣禽都会进入食谱，部分种群也捕食蝙蝠；具体猎物由当地季节性鸟群决定。',
      },
      {
        key: 'latitude-and-migration',
        label: '迁徙',
        title: '高纬种群可跨洲迁徙',
        body: '北极和高纬种群可跨洲迁徙，低纬度与南半球种群多留居。对 56 只北极游隼的追踪识别出五条主要路线，研究种群的平均迁徙距离约 3,600 或 6,400 千米。',
      },
      {
        key: 'recovery-and-vigilance',
        label: '保护',
        title: '种群恢复后继续减少风险',
        body: '禁用 DDT、圈养繁育和放归推动北美种群恢复，全球评估现为 LC 且趋势上升。非法捕捉、碰撞、污染、巢区干扰和 HPAI 仍在不同地区发生；中国区域红色名录为 NT，法律保护等级为国家二级。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1771 年的游隼命名记录',
        body: '游隼的科学命名记录署名为 Tunstall，年份为 1771 年，现用学名为 Falco peregrinus。它长而尖的双翼适合快速飞行，高纬种群还会跨洲迁徙。城市高楼、桥梁和塔架提供类似崖壁的巢台，使这种原本利用自然岩壁的鸟也能在城市繁殖。',
      },
    ],
    keyFacts: [
      'IOC World Bird List v15.2 承认游隼 18 个亚种；旧版资料可能写 19 个。',
      'IUCN/BirdLife 2021 年全球评估为无危，趋势上升，没有受胁标准代码。',
      '全球成熟个体初步估算为 248,000 至 478,000，BirdLife 将资料质量标为 poor、推导方式标为 suspected。',
      'Cornell 北美参考体尺为体长 36 至 49 厘米、体重 0.53 至 1.6 千克、翼展 100 至 110 厘米。',
      '320 千米/小时是高空俯冲的圆整科普值，不能代表平飞速度或每次野外捕猎。',
      '高纬种群可远距离迁徙，低纬度和南半球种群多留居。',
      '禁用 DDT、圈养繁育和放归共同推动北美种群恢复。',
      '中国红色名录列为近危，国家重点保护等级为二级；CITES 列附录 I，CMS 列附录 II。',
    ],
    threats: [
      '为鹰猎贸易非法捕捉成鸟、盗取雏鸟和卵，以及针对猛禽的射杀、投毒和巢毁',
      '有机氯农药及其他污染物造成繁殖、生理和食物链风险',
      '与玻璃幕墙、建筑、车辆、风机、电线和其他结构碰撞，以及配电设施触电',
      '攀岩、摄影、施工和缺乏规范的研究活动在繁殖期干扰巢址',
      '风能、道路、采石和高密度建设选址改变巢区、猎场或飞行通道',
      '海鸟、滨鸟和湿地鸟类猎物下降，连同油污、火情和局地生境退化',
      'HPAI 等疾病对部分区域种群造成新增死亡，全球范围和长期影响仍需监测',
    ],
    conservationActions: [
      '保护自然崖巢、城市巢台、主要猎场和迁徙停歇地，并按当地繁殖时间设置干扰缓冲区',
      '执行反盗猎、反巢盗和 CITES 附录 I 贸易管制，追踪合法人工繁育个体',
      '持续监测持久性有机污染物、重金属和新兴化学物，保留对高风险农药的限制',
      '改造高风险电力设施并降低玻璃、车辆、线路和风机碰撞风险',
      '能源与采石项目避让巢区、高使用率猎场和主要飞行通道',
      '在合适人工结构上提供稳定巢台，并制定幼鸟坠落、施工冲突和公众观察方案',
      '用巢区占用率、繁殖成功、年龄别生存和标准化迁徙监测评估趋势',
      '在 HPAI 暴发区加强死鸟检测、猎物死亡监测和安全尸体处置',
      '在中国按国家二级重点保护野生动物要求管理救护、科研、人工繁育、利用和巢区施工',
    ],
    metrics: {
      adultLengthCm: [36, 49],
      adultMassKg: [0.53, 1.6],
      wingspanCm: [100, 110],
      topSpeedKph: 320,
      estimatedMatureIndividuals: [248000, 478000],
    },
    featuredStats: [
      {
        key: 'stoop-speed',
        label: '高空俯冲报道可达',
        value: '320',
        unit: '千米/小时',
        note: 'Cornell 圆整科普值；不是持续平飞速度，实测受高度、角度和采样方法影响',
      },
      {
        key: 'mature-population',
        label: '全球成熟个体初步估算',
        value: '24.8万至47.8万',
        note: 'BirdLife 2021，资料质量 poor、推导方式 suspected',
      },
      {
        key: 'incubation',
        label: '孵化期',
        value: '29至32',
        unit: '天',
        note: 'Cornell 北美参考范围',
      },
      {
        key: 'arctic-migration',
        label: '北极样本平均迁徙',
        value: '3,600或6,400',
        unit: '千米',
        note: 'Gu 等 2021 研究中的西部短程组与东部长程组，不代表全种',
      },
    ],
    media: {
      image: './images/species/peregrine-falcon/01-cliff-portrait.webp',
      alt: '海岸崖缘上，一只完整成年游隼站在画面右侧，蓝灰上体、深色头罩、粗黑髭纹和黄色脚清晰，左侧为开阔海面与远方海蚀崖',
      focalPoint: { x: 0.72, y: 0.5 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/peregrine-falcon/02-high-speed-stoop.webp',
          alt: '一只完整成年游隼在宽阔天空中作陡角俯冲，长尖双翼后掠，远处地景提供高度感',
          title: '速度取决于俯冲条件',
          caption:
            '320 千米/小时是有来源的圆整科普值；静态图不能测量速度，野外实测也受高度、角度和采样方法影响。',
          focalPoint: { x: 0.56, y: 0.43 },
        },
        {
          image: './images/species/peregrine-falcon/03-urban-nest-ledge.webp',
          alt: '一只成年游隼守在高层建筑宽阔碎石巢台旁，浅巢凹内恰好有三枚斑驳卵，远处城市背景虚化，没有雏鸟或枝巢',
          title: '碎石浅巢中的三枚卵',
          caption:
            '游隼不搭枝巢，而是在基质上刮出浅凹；图中三枚卵处于 Cornell 记录的每窝 2 至 5 枚范围内。',
          focalPoint: { x: 0.6, y: 0.5 },
        },
        {
          image: './images/species/peregrine-falcon/04-aerial-bird-hunt.webp',
          alt: '一只成年游隼从后上方接近一只健康飞行的原鸽，双方完整且保持距离，没有接触或伤口',
          title: '在空中截取飞鸟',
          caption:
            '游隼主要捕捉鸟类；原鸽只是城市常见猎物之一，滨鸟、鸭、海鸟和鸣禽也会进入地区性食谱。',
          focalPoint: { x: 0.54, y: 0.46 },
        },
        {
          image: './images/species/peregrine-falcon/05-migration-coastline.webp',
          alt: '宽阔海岸、泥滩和河口上空，一只完整游隼沿海岸线飞行，远处岬角隐约可见',
          title: '迁徙与留居并存',
          caption:
            '高纬种群可跨洲迁徙，低纬度和南半球种群多留居；画面不指向具体路线或个体来源。',
          focalPoint: { x: 0.64, y: 0.4 },
        },
        {
          image: './images/species/peregrine-falcon/06-cliff-monitoring.webp',
          alt: '远距离视角下，两名调查人员在左侧使用一台三脚架望远镜和记录册，一只成年游隼停在远方崖壁上',
          title: '用长期监测守住恢复成果',
          caption:
            '远距观察可以记录巢区占用和活动并减少干扰；单次观察不能证明繁殖成功或种群趋势。',
          focalPoint: { x: 0.68, y: 0.44 },
        },
      ],
    },
    sources: [
      ...PEREGRINE_FALCON_SOURCES,
      {
        title: 'GBIF: Falco peregrinus Tunstall, 1771 nomenclatural record',
        url: 'https://www.gbif.org/species/2481047',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: PEREGRINE_FALCON_CONTENT_DATE,
    updatedAt: PEREGRINE_FALCON_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
