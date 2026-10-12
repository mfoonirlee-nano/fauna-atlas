import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const GILA_MONSTER_SOURCE_DATE = '2026-08-30' as const;

const GILA_MONSTER_CONTENT_DATE = '2026-08-30' as const;

const GILA_MONSTER_SOURCES = [
  {
    title: 'ITIS: Heloderma suspectum, TSN 174113',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=174113',
    kind: 'taxonomy',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'The Reptile Database: Heloderma suspectum',
    url: 'https://reptile-database.reptarium.cz/Heloderma/suspectum',
    kind: 'taxonomy',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'SSAR 2025: Scientific and Standard English Names, 9th edition',
    url: 'https://ssarherps.org/wp-content/uploads/2025/03/9th-Edition-Scientific-and-Standard-English-Names-of-Amphibians-and-Reptiles.pdf',
    kind: 'taxonomy',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Douglas et al. 2010: Conservation phylogenetics of helodermatid lizards',
    url: 'https://doi.org/10.1016/j.ympev.2009.12.009',
    kind: 'taxonomy',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Heloderma suspectum (2007 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2007.RLTS.T9865A13022716.en',
    kind: 'conservation',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist of Species',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Mexico NOM-059-SEMARNAT-2010 official record',
    url: 'https://www.dof.gob.mx/nota_detalle.php?codigo=5173091&fecha=30/12/2010',
    kind: 'conservation',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Arizona Wildlife Conservation Strategy: Heloderma suspectum',
    url: 'https://awcs.azgfd.com/species/reptiles/heloderma-suspectum',
    kind: 'conservation',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'New Mexico Department of Wildlife: Amphibian and reptile recovery plans',
    url: 'https://wildlife.dgf.nm.gov/conservation/wildlife-species-information/amphibians-and-reptiles/',
    kind: 'distribution',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Saguaro National Park: Gila Monster',
    url: 'https://www.nps.gov/sagu/learn/nature/gila-monster.htm',
    kind: 'general',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Beck & Jennings 2003: Habitat use by Gila Monsters',
    url: 'https://doi.org/10.1655/0733-1347%282003%29017%5B0111%3AHUBGMT%5D2.0.CO%3B2',
    kind: 'ecology',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Davis & DeNardo 2010: Seasonal body condition, hydration and activity',
    url: 'https://doi.org/10.1670/08-263.1',
    kind: 'ecology',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'DeNardo et al. 2018: Atypical nest overwintering by hatchlings',
    url: 'https://doi.org/10.1098/rspb.2018.0632',
    kind: 'ecology',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Mackessy 2022: Venom production and secretion in reptiles',
    url: 'https://doi.org/10.1242/jeb.227348',
    kind: 'ecology',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'FDA 2017: Exenatide pharmacology and toxicology review',
    url: 'https://www.accessdata.fda.gov/drugsatfda_docs/nda/2017/209210Orig1s000PharmR.pdf',
    kind: 'general',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Massengill et al. 2026: Fatality following Gila Monster envenomation',
    url: 'https://doi.org/10.1177/10806032261447178',
    kind: 'general',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Sullivan et al. 2004: Translocation of urban Gila Monsters',
    url: 'https://doi.org/10.1016/j.biocon.2003.07.002',
    kind: 'conservation',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Hromada et al. 2025: Climate and dispersal limit future Mojave habitats',
    url: 'https://doi.org/10.1002/ece3.71008',
    kind: 'conservation',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-heloderma-suspectum',
    slug: 'gila-monster',
    names: {
      zh: '美国毒蜥',
      en: 'Gila Monster',
      aliases: [
        '希拉毒蜥',
        '吉拉毒蜥',
        '钝尾毒蜥',
        'Monstruo de Gila',
        'Lagarto de Gila',
      ],
    },
    scientificName: 'Heloderma suspectum',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Reptilia', '爬行纲'),
      taxon('Squamata', '有鳞目'),
      taxon('Helodermatidae', '毒蜥科'),
      taxon('Heloderma', '毒蜥属'),
    ),
    conservation: conservation('NT', 'decreasing', 2007),
    distribution: {
      realms: ['terrestrial'],
      continents: ['北美洲'],
      regions: [
        '美国西南部与墨西哥西北部',
        '索诺兰荒漠核心分布区',
        '莫哈韦荒漠与奇瓦瓦荒漠西缘',
      ],
      countries: ['美国', '墨西哥'],
      range:
        '原生分布从美国犹他州西南端、内华达州南部和加利福尼亚州东南端，经亚利桑那州与新墨西哥州西南部，向南进入墨西哥索诺拉州并到达锡那罗亚州最北端；核心范围位于亚利桑那和索诺拉。',
      center: { lat: 32.3, lng: -111.4 },
    },
    habitats: [
      {
        name: '岩质荒漠灌丛与山麓',
        realm: 'terrestrial',
        description:
          '索诺兰和莫哈韦荒漠中有灌木覆盖的岩质坡、冲积山麓斜坡（bajada）、山脚与巨石地，为觅食、体温调节和庇护提供连续微生境；这不等于裸沙沙丘。',
        isPrimary: true,
      },
      {
        name: '峡谷、冲沟与 wash 周边',
        realm: 'terrestrial',
        description:
          '岩石峡谷、季节性干沟（arroyos） 和季节性冲沟附近常有较高地形异质性、植被和湿度，但美国毒蜥并非依赖常年流水的淡水物种。',
      },
      {
        name: '半荒漠草地与北墨西哥刺灌丛',
        realm: 'terrestrial',
        description:
          '草地、灌丛和稀疏林缘可被利用，尤其在有岩石和可靠地下退避处时；开阔平地、清理农地或所有草地并非同等适生。',
      },
      {
        name: '地下庇护所网络',
        realm: 'terrestrial',
        description:
          '石缝、巨石下空腔、林鼠巢堆、钙结层洞穴及其他动物洞穴帮助保存水分、缓冲温度并提供季节性退避处。',
      },
    ],
    measurements: {
      length: {
        max: 0.56,
        unit: 'm',
        note:
          'Smithsonian 与 Saguaro NPS 的四舍五入总长上限；USGS 为 0.50 米、San Diego Zoo 为 0.55 米，不构成成年封闭范围或绝对纪录',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '地面或低位筑巢鸟类的卵与雏鸟',
        '幼兔、幼地松鼠和其他巢内幼年哺乳类',
        '陆龟、蜥蜴等爬行动物的卵',
        '偶见的小型蜥蜴、蛇、蛙、无脊椎动物与腐肉',
      ],
      description:
        '以寻找脊椎动物巢内容物为核心的肉食者，靠叉舌追踪化学线索，取食鸟卵、雏鸟、巢内幼年哺乳类和爬行动物卵。动物园资料列出的其他小型猎物与腐肉没有全范围比例，不应取代主要食谱。',
    },
    activity: [
      '大部分时间在地下庇护',
      '春季地表活动较集中',
      '昼夜节律随季节和温度改变',
      '降雨期地表活动增加',
      '掘穴并利用既有洞穴',
      '独居为主',
      '繁殖期雄性仪式化争斗',
    ],
    tags: [
      '毒蜥科',
      '北美荒漠',
      '珠状骨鳞',
      '巢穴掠食',
      '下颌毒腺',
      '地下生活',
      'CITES附录II',
    ],
    summary:
      '美国西南与墨西哥西北荒漠中的粗壮毒蜥，以珠粒状骨鳞、黑橙花纹和下颌沟齿著称；它多数时间藏在地下，春季循气味寻找鸟兽与爬行动物的巢。',
    description:
      '美国毒蜥是毒蜥科的粗壮陆栖蜥蜴，原生范围横跨美国西南部与墨西哥西北部，以亚利桑那和索诺拉为核心。成体总长可达约 56 厘米，黑色吻端、珠粒状骨鳞、短厚尾和粉红至橙黄色斑带构成醒目标志。它依赖岩质山麓、冲沟和地下庇护所，地表活动随季节、温度和降雨改变；主要循化学线索寻找鸟卵、雏鸟、幼年哺乳类和爬行动物卵。多叶毒腺位于下颌，毒液靠持续咬合沿沟齿低压进入伤口，主要被认为承担防御功能。IUCN 当前仍沿用 2007 年近危、下降评估，现行资料没有可录入的全球成熟个体范围；生境丧失、道路死亡、非法采集和人为杀害持续造成局地压力。',
    storySections: [
      {
        key: 'beads-pattern-and-tail',
        label: '珠状皮甲',
        title: '珠粒状骨鳞与个体花纹',
        body: '美国毒蜥宽头、短腿、尾巴肥厚，背部和体侧的珠粒状鳞片下埋着 骨质皮板（osteoderms）。黑底上的粉红、橙或淡黄色花纹还可帮助照片识别个体。横带和网纹之间没有一条可凭单张照片稳妥划出的现行亚种线，花纹不宜单独用于亚种鉴定。',
      },
      {
        key: 'seasons-belowground',
        label: '地下季节表',
        title: '多数日子藏在石缝和洞穴里',
        body: '地下庇护所缓冲热、冷和干旱，也构成觅食与繁殖活动的起点。超过 95% 的地下隐蔽时间是遥测与自然史资料的综合近似，不是每只个体的固定计时结果。春季较常在早晨或傍晚出地面，盛夏可转为夜行，季风雨后又可能出现活动峰；冬季偶尔到洞口晒太阳，因此“全年夜行”与“固定冬眠月份”都过于整齐。',
      },
      {
        key: 'following-a-nest-scent',
        label: '巢穴掠食',
        title: '叉舌追的是巢里的食物',
        body: '黑色分叉舌收集空气和地面的化学线索，帮助它找到鸟、哺乳类和爬行动物的巢。卵、雏鸟、幼兔和幼年啮齿类是核心猎物，并非只吃鸟蛋。它能一次摄入很大一餐并把能量储存在尾部和体内，但没有证据要求每只野生个体一年恰好吃三四顿。',
      },
      {
        key: 'warning-before-biting',
        label: '张口警戒',
        title: '张口与嘶声是近距离警告',
        body: '受逼近或摆弄时，美国毒蜥可能张口、嘶声并转身警戒，继续受压才可能咬住。真正咬住后，多叶下颌腺的毒液会随持续咬合沿沟齿低压进入伤口；它没有中空上颌长牙，也不会喷射毒液。毒液主要被认为用于防御，这仍是有证据支持的解释而非排除一切捕食作用的定论。2026 年病例说明旧有“从未致死”表述已经失效，但不能反推咬伤通常致命。',
      },
      {
        key: 'hatch-before-emergence',
        label: '巢内越冬',
        title: '孵出与钻出地面相隔数月',
        body: '控制条件下卵孵化需要 114 至 152 天。有限的天然巢证据显示幼体可在秋季孵出，留在巢内越冬，到次年晚春或夏季才来到地表，因此从产卵到出巢约 9 至 12 个月。把这段时间全部叫作“孵化期”会混淆胚胎发育与幼体滞留，也不能断言每窝都采取相同策略。',
      },
      {
        key: 'telemetry-through-hidden-seasons',
        label: '无线电遥测',
        title: '用遥测追踪隐蔽生活和移动',
        body: '美国毒蜥大部分时间藏在地下，研究者结合无线电遥测、野外记录与个体花纹照片，才能估计出地表活动、庇护所利用和移动。追踪结果受地点、季节、性别、样本和计算方法影响。城市冲突个体的远距离搬迁可能引发异常移动并切断熟悉庇护资源，公众应联系主管机构而非自行捕捉或搬移。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1869 年的美国毒蜥命名记录',
        body: 'Cope 于 1869 年命名美国毒蜥，现用学名为 Heloderma suspectum。它的原生范围跨美国西南部与墨西哥西北部，中文名不表示仅见于美国。背部珠粒状鳞片下有骨质皮板，个体黑橙花纹还能用于照片识别；传统两亚种的分界尚未得到稳固分子支持。',
      },
    ],
    keyFacts: [
      '现行学名为 Heloderma suspectum Cope, 1869，属于有鳞目、毒蜥科、毒蜥属。',
      '传统名录仍列两个亚种，但分子研究没有稳固支持横带型与网纹型的二分边界。',
      '个体花纹可以提供识别线索，横带型与网纹型不足以稳妥判定亚种。',
      '原生范围跨美国与墨西哥，不是任一国家特有种。',
      '分布核心在亚利桑那州和墨西哥索诺拉州，并延伸至周边四个美国州和锡那罗亚最北端。',
      'IUCN 截止 2026-1 仍沿用 2007 年近危、下降评估。',
      'IUCN 将 A2、A3、A4 作为接近易危阈值的说明，正式近危条目没有受胁准则代码。',
      'CITES 通过 Heloderma 属级条目把美国毒蜥列入附录 II。',
      '墨西哥 NOM-059 把它列为 Amenazada，代码 A，并注明非墨西哥特有。',
      '2011 年犹他 DPS 请愿未获推进，不等于美国毒蜥已列入联邦 ESA。',
      '它偏好有岩石和灌木覆盖的山麓、bajada、峡谷与冲沟，通常回避清理农地和广阔开阔平地。',
      '石缝、巨石下空腔、林鼠巢堆和其他动物洞穴是关键季节性庇护所。',
      '总长可达约 56 厘米；这是机构页面的四舍五入上限，不是成年封闭范围。',
      '现有体重摘要从 0.7 至 1.4 千克到可达 2.3 千克以上不等，不适合填统一体重范围。',
      '黑色吻端、珠粒状骨鳞、宽头、短壮四肢和短厚储脂尾是主要识别特征。',
      '四足各有五趾和弯爪，舌为黑色并深度分叉。',
      '个体花纹可用于照片识别，但不能从单帧可靠判断性别。',
      '大部分时间在地下；超过 95% 是综合近似值，不是每只个体的固定计时结果。',
      '春季较常在白天早晚活动，夏季高温时可转为夜行，地表活动常随降雨增加。',
      '食谱核心是鸟、哺乳类与爬行动物巢内的卵和幼体，不是只吃鸟蛋。',
      '尾部和体内储脂、低代谢和大餐能力帮助它应对沙漠中脉冲式食物供应。',
      '成对多叶毒腺位于下颌前外侧，不在蛇类常见的眼后上颌位置。',
      '毒液经独立导管到达前部下颌沟齿基部，再靠持续咬合低压进入伤口。',
      '美国毒蜥没有中空上颌长牙，也不会像喷毒蛇那样喷射毒液。',
      '毒液主要被认为承担防御功能，因为常见巢内猎物不需要中毒制服。',
      '2015 年毒物中心分析记录过危及气道的严重并发症。',
      '2026 年发表的病例报告使“美国毒蜥咬伤从未致死”成为过时表述。',
      '繁殖期雄性会进行仪式化摔跤，静态外形本身不能验明两只动物的性别。',
      '实验卵孵化期为 114 至 152 天，不能写成 9 至 12 个月。',
      '有限天然巢证据支持幼体秋季孵出后在巢内越冬，产卵到地表出巢约 9 至 12 个月。',
      'FDA 资料把 exenatide 定义为 exendin-4 的合成版本，不需要持续从美国毒蜥采毒；这不等于 semaglutide 或所有 GLP-1 药物都来自美国毒蜥。',
    ],
    threats: [
      '城市扩张、农业清理、运河与能源设施改变荒漠灌丛、山麓和冲沟生境',
      '道路切割季节性移动路径并造成车辆撞击，雨后和活动季的局地风险更高',
      '巨石、洞穴、林鼠巢堆和灌木被清除，减少温湿度稳定的关键庇护所',
      '非法采集和宠物贸易对易接近的局地种群造成压力，精确地点公开也会增加风险',
      '因恐惧或误解而故意杀害；多数自然相遇并不等于主动攻击',
      '靠近住宅时遭犬猫捕杀，影响强度随地点而异',
      '更高温度和更强干旱可能加剧脱水并压缩地表活动窗口；现有未来模型主要来自莫哈韦北缘',
    ],
    conservationActions: [
      '保护并连接岩质山麓、bajada、峡谷、wash 和灌木覆盖路径，同时保留不同季节可用的地下庇护所',
      '用道路死亡记录、遥测和季节活动数据确定局地穿越热点，再配置限速、涵洞或其他适地缓解措施',
      '执行各州采集禁令、墨西哥 NOM-059 与 CITES 附录 II 许可管理，避免公开敏感洞穴和繁殖地点',
      '利用背部与体侧独特花纹开展非接触照片识别，并把照片、日期和粗尺度地点交给主管监测项目',
      '城市冲突由受训野生动物机构处置；不鼓励公众抓取、触碰或长距离搬迁个体',
      '搬迁方案先评估原家域、熟悉庇护资源和释放距离，持续跟踪返回、异常移动、存活与新的冲突',
      '在莫哈韦北缘保护中等坡度和较高灌木覆盖的移动通道，并监测低海拔热旱压力与高海拔适生区可达性',
      '拴系家犬、减少宠物靠近洞穴，并用准确的咬伤风险教育替代夸张传说和报复性杀害',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'rounded-total-length',
        label: '最大总长概括',
        value: '约56',
        unit: '厘米',
        note: 'Smithsonian 与 Saguaro NPS 的四舍五入上限；不是成年封闭范围或绝对纪录',
      },
      {
        key: 'time-in-shelter',
        label: '地下隐蔽时间',
        value: '>95',
        unit: '%',
        note: '遥测与自然史综合近似；地点、季节和研究方法会改变比例',
      },
      {
        key: 'laboratory-incubation',
        label: '实验卵孵化期',
        value: '114—152',
        unit: '天',
        note: '控制条件下从产卵到孵出，不含幼体孵出后的巢内越冬',
      },
      {
        key: 'oviposition-to-emergence',
        label: '产卵至地表出巢',
        value: '约9—12',
        unit: '个月',
        note: '有限天然巢观察；幼体秋季孵出后可留在巢内越冬，不等于孵化期',
      },
    ],
    media: {
      image:
        './images/species/gila-monster/01-rocky-desert-scrub-adult-portrait.webp',
      alt: '索诺兰型岩质荒漠灌丛中，一只黑底带粉橙斑纹的成年美国毒蜥完整停行，宽钝黑吻、珠粒状鳞片、短腿和粗短尾清楚可见',
      focalPoint: { x: 0.67, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/gila-monster/02-beaded-scales-diagnostic-profile.webp',
          alt: '浅色碎石地上，一只黑底带粉橙斑纹的成年美国毒蜥以完整低位左向侧姿站立，黑吻、珠粒状背鳞、短壮四肢和短厚尾清楚可见',
          title: '珠粒状鳞片覆盖粗壮低矮的身体',
          caption:
            'AI生成科学情景重建；完整侧姿只支持美国毒蜥的物种级轮廓与鳞片质感辨认。透视遮挡的远侧足趾不用于解剖计数，外形和花纹也不能校准体长、体重、年龄、性别或诊断传统亚种。',
          focalPoint: { x: 0.51, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/gila-monster/03-rock-burrow-entrance.webp',
          alt: '干燥岩坡上，一只完整美国毒蜥停在巨石下自然洞口外，洞口周围有碎石、根系和稀疏灌木',
          title: '巨石下的一处自然洞口',
          caption:
            'AI生成科学情景重建；岩板下空腔与既有洞穴可构成关键庇护所，但画面不证明这只个体占用或挖掘该洞、刚结束冬季隐蔽、即将入洞，也不揭示任何地下结构。',
          focalPoint: { x: 0.58, y: 0.57 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/gila-monster/04-ground-nest-egg-foraging.webp',
          alt: '低矮荒漠灌木旁，一只完整美国毒蜥向浅地面鸟巢伸出一条黑色分叉舌，巢中有三枚完整浅色细斑小卵',
          title: '叉舌靠近一处地面巢食',
          caption:
            'AI生成科学情景重建；三枚完整小型鸟卵只是可控构图，代表可能的巢内猎物，不是完整窝卵数、鸟种鉴定或食物比例。静帧也不能证明画中个体已经闻到、准备取食或会破坏这些卵。',
          focalPoint: { x: 0.55, y: 0.61 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/gila-monster/05-defensive-mouth-posture.webp',
          alt: '岩质荒漠灌丛近景中，一只完整美国毒蜥四足支撑并抬头张口，周围没有人、捕食者、接触、伤口或可见毒液',
          title: '无接触的张口警戒姿势',
          caption:
            'AI生成科学情景重建；美国毒蜥受压时可能张口并嘶声警戒，但无接触静帧只重建姿势，不能证明嘶声、攻击意图、即将咬合或毒液流动。画面没有清楚分辨牙列，不能据此判断牙齿形态。',
          focalPoint: { x: 0.63, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/gila-monster/06-radio-telemetry-habitat-monitoring.webp',
          alt: '索诺兰型岩质山谷中，一只完整美国毒蜥与两名保持距离的研究人员分居画面两侧，一人持定向天线和接收器，另一人用记录板记录',
          title: '隔开动物的生境遥测工作',
          caption:
            'AI生成科学情景重建；天线、接收器和记录板只表达非接触遥测工作流程。画面不证明可见个体携带发射器或正在回传信号，也不支持个体身份、性别、移动结果、家域、存活率、种群数量、机构或地点判断。',
          focalPoint: { x: 0.67, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...GILA_MONSTER_SOURCES,
      {
        title: 'GBIF: Heloderma suspectum Cope, 1869 nomenclatural record',
        url: 'https://www.gbif.org/species/2460817',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: GILA_MONSTER_CONTENT_DATE,
    updatedAt: GILA_MONSTER_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
