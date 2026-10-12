import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const GOLDEN_EAGLE_SOURCE_DATE = '2026-08-26' as const;

const GOLDEN_EAGLE_CONTENT_DATE = '2026-08-26' as const;

const GOLDEN_EAGLE_SOURCES = [
  {
    title: 'IOC World Bird List v15.2 — Master, Raptor and Multilingual Lists',
    url: 'https://www.worldbirdnames.org/new/ioc-lists/master-list-2/',
    kind: 'taxonomy',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Aquila chrysaetos (2021 global assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22696060A202078899.en',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone — Golden Eagle Aquila chrysaetos',
    url: 'https://datazone.birdlife.org/species/factsheet/golden-eagle-aquila-chrysaetos',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'BirdLife International 2021 — European Red List of Birds',
    url: 'https://www.birdlife.org/wp-content/uploads/2022/05/BirdLife-European-Red-List-of-Birds-2021.pdf.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'Katzner et al. 2020 — Golden Eagle, Birds of the World v2.0',
    url: 'https://doi.org/10.2173/bow.goleag.02',
    kind: 'ecology',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'Cornell Lab — Golden Eagle identification and measurements',
    url: 'https://www.allaboutbirds.org/guide/Golden_Eagle/id',
    kind: 'general',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'U.S. Fish & Wildlife Service — Golden Eagle species profile',
    url: 'https://www.fws.gov/species/golden-eagle-aquila-chrysaetos',
    kind: 'ecology',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'Convention on Migratory Species — Aquila chrysaetos',
    url: 'https://www.cms.int/species/aquila-chrysaetos',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'China Biodiversity Red List — Vertebrates (2020)',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'China 2021 — List of National Key Protected Wild Animals',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'Bedrosian et al. 2018 — Migration corridors of adult Golden Eagles',
    url: 'https://doi.org/10.1371/journal.pone.0205204',
    kind: 'distribution',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'Millsap et al. 2022 — Survival, causes of death and allowable take',
    url: 'https://doi.org/10.1002/eap.2544',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'Slabe et al. 2022 — Demographic implications of lead poisoning for eagles',
    url: 'https://doi.org/10.1126/science.abj3068',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'Katzner et al. 2017 — Golden Eagle fatalities and wind-energy consequences',
    url: 'https://doi.org/10.1111/cobi.12836',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-aquila-chrysaetos',
    slug: 'golden-eagle',
    names: {
      zh: '金雕',
      en: 'Golden Eagle',
      aliases: ['金鵰'],
    },
    scientificName: 'Aquila chrysaetos',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Accipitriformes', '鹰形目'),
      taxon('Accipitridae', '鹰科'),
      taxon('Aquila', '雕属'),
    ),
    conservation: conservation('LC', 'stable', 2021),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲', '欧洲', '北美洲', '非洲'],
      regions: [
        '阿拉斯加、加拿大与北美西部',
        '欧洲山地、北欧与地中海地区',
        '北非与西亚',
        '中亚草原、荒漠山地与青藏高原—喜马拉雅',
        '蒙古、西伯利亚、东北亚与日本列岛',
      ],
      countries: [
        '加拿大',
        '美国',
        '墨西哥',
        '俄罗斯',
        '中国',
        '蒙古',
        '哈萨克斯坦',
        '吉尔吉斯斯坦',
        '塔吉克斯坦',
        '乌兹别克斯坦',
        '阿富汗',
        '巴基斯坦',
        '印度',
        '尼泊尔',
        '不丹',
        '日本',
        '朝鲜',
        '韩国',
        '挪威',
        '瑞典',
        '芬兰',
        '英国',
        '西班牙',
        '法国',
        '意大利',
        '希腊',
        '土耳其',
        '伊朗',
        '摩洛哥',
        '阿尔及利亚',
        '突尼斯',
        '埃及',
      ],
      range:
        '广布于北美、欧洲、北非和亚洲北部至中部，并延伸到西亚、中亚、喜马拉雅、青藏高原、东北亚、日本及墨西哥中西部。许多中低纬成鸟留居，高纬种群可南迁，幼鸟还会远距离扩散。国家列表为代表性常规范围，不含完整的通道、偶见和迷鸟记录。',
    },
    habitats: [
      {
        name: '温带草原、草甸与欧亚草原',
        realm: 'terrestrial',
        description:
          '主要觅食环境；开阔视野和地面猎物让金雕能从高空、低空或停栖点发现兔、野兔、地松鼠和旱獭。',
        isPrimary: true,
      },
      {
        name: '山地、崖壁、岩峰与峡谷',
        realm: 'terrestrial',
        description:
          '山脊和崖壁产生可利用的抬升气流，岩台可供筑巢；金雕也使用丘陵及低海拔崖地，不只生活在高山。',
      },
      {
        name: '荒漠、半荒漠与干旱灌丛',
        realm: 'terrestrial',
        description:
          '北美西南部、北非、西亚和中亚常见的开阔猎场；降水、植被和猎物波动会改变使用强度。',
      },
      {
        name: '苔原、高山草甸与林线以上开阔地',
        realm: 'terrestrial',
        description:
          '供高纬和高海拔种群繁殖、狩猎及季节移动；北方巢区并非全年覆盖冰雪。',
      },
      {
        name: '疏林、林缘与河岸镶嵌景观',
        realm: 'terrestrial',
        description:
          '大树可承载枝巢，林缘和开阔斑块可供狩猎；连续密林和高密度开发区通常不利。',
      },
    ],
    measurements: {
      length: {
        min: 70,
        max: 84,
        unit: 'cm',
        note: 'Cornell 北美物种指南的两性共同范围，不代表六亚种全球极值',
      },
      weight: {
        min: 3,
        max: 6.125,
        unit: 'kg',
        note: 'Cornell 北美物种指南的两性共同范围；雌鸟平均大于雄鸟',
      },
      wingspan: {
        min: 185,
        max: 220,
        unit: 'cm',
        note: 'Cornell 北美物种指南的两性共同范围',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '兔与野兔',
        '地松鼠与草原犬鼠',
        '旱獭及其他中小型哺乳动物',
        '鸟类',
        '爬行动物',
        '腐肉',
      ],
      description:
        '机会性肉食猛禽，常捕食兔、野兔、地松鼠、旱獭等地面动物，也取食鸟类、爬行动物及腐肉；食谱随地区、季节和猎物供应改变。',
    },
    activity: [
      '昼行性',
      '通常单独或成对活动',
      '利用热气流和山脊升力翱翔',
      '从空中、低空或停栖点狩猎',
      '部分高纬种群长距离迁徙',
      '幼鸟可远距离扩散',
    ],
    tags: [
      '北半球',
      '鹰形目',
      '大型猛禽',
      '开阔地猎手',
      '部分种群迁徙',
      'IUCN 无危',
      '中国国家一级重点保护野生动物',
      'CITES 附录 II',
      'CMS 附录 II',
    ],
    summary:
      '金雕分布在北美、欧洲、北非和亚洲的开阔地带，成鸟深褐，后头和后颈呈金褐色。部分高纬种群远距离迁徙，许多中低纬个体留居。',
    description:
      '金雕利用草原、山地、荒漠灌丛、苔原和疏林边缘寻找地面猎物，并借助热气流和山脊升力作低成本滑翔。成鸟以深褐色为主，金褐色集中在后头和后颈；幼鸟常有白色尾基和初级飞羽基部白斑。一对金雕可在繁殖领域内维护多个备用巢，巢址包括崖台、大树和少数人工结构。2021 年 IUCN/BirdLife 全球评估为 LC、趋势稳定，成熟个体估算为 85,000 至 160,000，但资料质量低且来自推断；中国 2020 红色名录则列为 VU。触电、碰撞、射杀、中毒、能源设施选址和开放生境变化仍需区域性管理。',
    storySections: [
      {
        key: 'golden-nape-and-age',
        label: '形态与年龄',
        title: '后头和后颈的金褐色羽毛',
        body: '金雕成鸟以深褐色为主，后头和后颈的金褐羽在侧光下很醒目。幼鸟的尾基和翼部常有界线清楚的白斑。羽色能提示年龄阶段，单幅图仍不足以精确判龄。',
      },
      {
        key: 'uplift-and-movement',
        label: '飞行与迁徙',
        title: '利用热气流和山脊气流滑翔',
        body: '金雕借热气流和山脊抬升气流滑翔，沿开阔地形搜索猎物或迁徙。高纬种群可远距离南迁，许多中低纬成鸟则留居；一个物种内部同时存在迁徙、扩散和局地移动。',
      },
      {
        key: 'open-ground-hunter',
        label: '生境与食性',
        title: '猎场不只在高山',
        body: '草原、荒漠灌丛、苔原和疏林边缘都能成为猎场。兔、野兔、地松鼠和旱獭常占食谱重要位置，鸟类、爬行动物及腐肉也会被利用，具体组合取决于当地能找到什么。',
      },
      {
        key: 'alternate-eyries',
        label: '繁殖',
        title: '一片领域，几个备用巢',
        body: '一对金雕可在繁殖领域内维护多个巢，崖台、大树和少数人工结构都可能承载多年增筑的枝巢。通常一窝一至四枚卵，两枚最常见；漫长孵化和育幼限制了损失后的补充速度。',
      },
      {
        key: 'status-at-different-scales',
        label: '评估尺度',
        title: '全球与区域保护状态不同',
        body: '2021 年全球评估为无危、趋势稳定，欧洲区域趋势上升。中国 2020 红色名录将金雕列为易危，并实行国家一级重点保护。区域评估反映特定地区的种群风险。',
      },
      {
        key: 'preventable-mortality',
        label: '保护',
        title: '许多死亡本可避免',
        body: '触电、碰撞、射杀和中毒会叠加到这种长寿猛禽身上。高风险电杆改造、减少含铅弹药残留、能源项目避让与监测、繁殖地低干扰管理，都针对可识别且可降低的风险。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的命名记录',
        body: '金雕的命名记录可追溯到林奈 1758 年的描述，现用学名为 Aquila chrysaetos。“金雕”这一中文名对应成鸟后头和后颈的金褐羽，其余身体大多深褐。一对金雕还能在领域内维护多个备用巢，轮换使用崖台或大树上的巢址。',
      },
    ],
    keyFacts: [
      'IOC World Bird List v15.2 承认金雕的六个亚种。',
      'IUCN/BirdLife 2021 年全球评估为无危，趋势稳定，未触发受胁标准代码。',
      '全球成熟个体估算为 85,000 至 160,000，但 BirdLife 将资料质量标为 poor、推导方式标为 inferred。',
      '成鸟深褐，金褐色集中在后头和后颈；幼鸟常有白色尾基和翼部白斑。',
      '部分高纬种群长距离迁徙，许多中低纬个体留居或只作局地移动。',
      '一对金雕可在同一繁殖领域内维护并轮换使用多个巢。',
      '中国 2020 红色名录列为易危，2021 年国家重点保护野生动物名录列为一级。',
      'CITES 与 CMS 均将金雕列入附录 II；两个公约的附录体系分别管理国际贸易与迁徙物种合作。',
    ],
    threats: [
      '非法射杀、投毒、捕捉及针对猛禽的迫害',
      '配电杆触电，以及电线、车辆、风机和其他结构碰撞',
      '摄入含铅弹药碎片的尸体或内脏，并接触抗凝血灭鼠剂等污染物',
      '风能、油气、矿业、道路及高密度开发的不当选址造成死亡、干扰或有效生境损失',
      '草地、灌丛和开放林地转化、破碎或植被结构改变，以及关键猎物下降',
      '繁殖巢、夜栖地和主要觅食地附近的人为干扰',
      '干旱、火情和气候相关生境变化对猎物、繁殖与移动的区域性影响',
    ],
    conservationActions: [
      '保护繁殖领域、巢址、夜栖点、主要觅食地和迁徙走廊，并按当地证据设置季节性缓冲区',
      '在高风险地段优先改造配电杆，隔离裸露带电部件并采用适合大型猛禽的安全间距',
      '以非铅弹药、猎后内脏和未回收尸体处理等措施减少铅暴露，并监测效果',
      '风能和其他能源项目先避让高使用率地点，再管理和补偿剩余风险',
      '执行反盗猎、反投毒和贸易管制，跨行政区共享死亡、救护、执法与追踪资料',
      '维护开阔生境和本地猎物群落，依据地区证据管理放牧、植被演替与火情',
      '用巢占用率、繁殖成功、年龄别生存、卫星追踪和标准化调查监测趋势',
      '在中国按国家一级重点保护野生动物要求管理许可、救护、利用和巢区干扰',
    ],
    metrics: {
      adultLengthCm: [70, 84],
      adultMassKg: [3, 6.125],
      wingspanCm: [185, 220],
      estimatedMatureIndividuals: [85000, 160000],
    },
    featuredStats: [
      {
        key: 'wingspan',
        label: '北美参考翼展',
        value: '185—220',
        unit: '厘米',
        note: 'Cornell 两性共同范围，不是六亚种全球极值',
      },
      {
        key: 'mass',
        label: '北美参考体重',
        value: '3—6.125',
        unit: '千克',
        note: 'Cornell 两性共同范围；雌鸟平均较大',
      },
      {
        key: 'incubation',
        label: '孵化期约',
        value: '41—45',
        unit: '天',
        note: '双亲都会孵卵，雌鸟承担多数时间',
      },
      {
        key: 'mature-population',
        label: '全球成熟个体估算',
        value: '8.5万—16万',
        note: 'BirdLife 2021 低质量推断区间，不是同期全球普查',
      },
    ],
    media: {
      image: './images/species/golden-eagle/01-alpine-ridge-portrait.webp',
      alt: '清晨岩脊上，一只完整成年金雕站在画面右侧，深褐体羽与后颈局部金褐羽清晰，左侧是开阔山谷和天空',
      focalPoint: { x: 0.7, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/golden-eagle/02-adult-flight-field-marks.webp',
          alt: '一只完整成年金雕在开放山坡上空侧倾滑翔，长宽双翼、分指状翼尖、圆形带纹尾和金褐后颈清晰',
          title: '长宽翼与圆形长尾',
          caption:
            '成鸟没有幼鸟式大块白翼斑和白尾基；滑翔时长宽双翼、分指状翼尖和较长圆尾构成主要轮廓。',
          focalPoint: { x: 0.59, y: 0.46 },
        },
        {
          image: './images/species/golden-eagle/03-open-mountain-habitat.webp',
          alt: '开阔草坡、岩壁、浅沟和远山占据画面，一只小型完整成年金雕停在中右侧岩石上',
          title: '开放山地留下猎场与巢台',
          caption:
            '草坡、低灌丛、岩壁和沟谷形成可供搜索猎物、停栖与筑巢的镶嵌景观。',
          focalPoint: { x: 0.67, y: 0.48 },
        },
        {
          image: './images/species/golden-eagle/04-hare-hunting-approach.webp',
          alt: '开阔山地草坡上，一只成年金雕低空接近一只奔跑野兔，二者之间仍有明显距离，没有接触',
          title: '从开阔地锁定地面猎物',
          caption:
            '兔、野兔、地松鼠和旱獭常是重要猎物，鸟类、爬行动物和腐肉也会进入地区性食谱。',
          focalPoint: { x: 0.51, y: 0.49 },
        },
        {
          image: './images/species/golden-eagle/05-cliff-eyrie-and-eaglet.webp',
          alt: '远距离视角下，一只成年金雕站在崖台枝巢旁，巢内一只较大幼鸟长出部分深褐幼羽',
          title: '一个领域可以有多个巢',
          caption:
            '配对个体会维护备用巢；崖台是代表性巢址，大树和少数人工结构也能承载枝巢。',
          focalPoint: { x: 0.55, y: 0.52 },
        },
        {
          image: './images/species/golden-eagle/06-distance-raptor-monitoring.webp',
          alt: '宽阔山谷左侧，两名小型观察者在远处使用一台三脚架望远镜和记录册，一只完整成年金雕在右侧滑翔',
          title: '把距离留给巢区和猛禽',
          caption:
            '远距离观察可减少干扰并记录活动；单次观察不能替代标准化长期监测，也不能证明种群趋势。',
          focalPoint: { x: 0.7, y: 0.39 },
        },
      ],
    },
    sources: [
      ...GOLDEN_EAGLE_SOURCES,
      {
        title: 'GBIF: Aquila chrysaetos (Linnaeus, 1758) nomenclatural record',
        url: 'https://www.gbif.org/species/2480506',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: GOLDEN_EAGLE_CONTENT_DATE,
    updatedAt: GOLDEN_EAGLE_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
