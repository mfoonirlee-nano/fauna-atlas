import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const GREAT_HORNBILL_SOURCE_DATE = '2026-09-03' as const;

const GREAT_HORNBILL_CONTENT_DATE = '2026-09-03' as const;

const GREAT_HORNBILL_SOURCES = [
  {
    title: 'AviList v2025b: Buceros bicornis',
    url: 'https://doi.org/10.2173/avilist.v2025b',
    kind: 'taxonomy',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List 2020: Buceros bicornis',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T22682453A184603863.en',
    kind: 'conservation',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Great Hornbill species factsheet',
    url: 'https://datazone.birdlife.org/species/factsheet/great-hornbill-buceros-bicornis',
    kind: 'conservation',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Great Hornbill assessment history',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/952/history',
    kind: 'conservation',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Great Hornbill country distribution',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/952/countries',
    kind: 'distribution',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Great Hornbill habitat classification',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/952/habitats',
    kind: 'ecology',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Great Hornbill range, ecology, threats and actions',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/952/text',
    kind: 'ecology',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC Hornbill Specialist Group: Great Hornbill',
    url: 'https://iucnhornbills.org/great-hornbill/',
    kind: 'general',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: '云南省林草局: 曲靖查获一只双角犀鸟',
    url: 'https://lcj.yn.gov.cn/html/2016/zuixindongtai_1116/46621.html',
    kind: 'general',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: '国家重点保护野生动物名录',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist: Buceros bicornis',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'Birds of the World: Great Hornbill',
    url: 'https://doi.org/10.2173/bow.grehor1.01',
    kind: 'ecology',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: '国家林草局: 双角犀鸟，雨林里的曼妙珍禽',
    url: 'https://www.forestry.gov.cn/c/www/dw/362497.jhtml',
    kind: 'general',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-buceros-bicornis',
    slug: 'great-hornbill',
    names: {
      zh: '双角犀鸟',
      en: 'Great Hornbill',
      aliases: [
        '大犀鸟',
        'Great Indian Hornbill',
        'Great Pied Hornbill',
      ],
    },
    scientificName: 'Buceros bicornis',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Bucerotiformes', '犀鸟目'),
      taxon('Bucerotidae', '犀鸟科'),
      taxon('Buceros', '犀鸟属'),
    ),
    conservation: conservation('VU', 'decreasing', 2020, 'A3cd+4cd'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: [
        '喜马拉雅南麓与印度东北部',
        '印度西高止山脉',
        '中国西南边境',
        '大陆东南亚',
        '马来半岛与苏门答腊',
      ],
      countries: [
        '孟加拉国',
        '不丹',
        '柬埔寨',
        '中国',
        '印度',
        '印度尼西亚',
        '老挝',
        '马来西亚',
        '缅甸',
        '尼泊尔',
        '泰国',
        '越南',
      ],
      range:
        '原生留居范围覆盖南亚和东南亚十二国，从喜马拉雅南麓、印度东北部和西高止山脉，经中国西南边境与中南半岛，延伸至马来半岛和苏门答腊。各地分布已经破碎，国家级记录不能说明林块之间仍然连通。',
      center: { lat: 19, lng: 96 },
    },
    habitats: [
      {
        name: '热带与亚热带湿润低地森林',
        realm: 'terrestrial',
        description:
          '主要生境；连续林冠、大型结果树、夜栖树和带天然洞穴的成熟树共同支持觅食、繁殖与移动。',
        isPrimary: true,
      },
      {
        name: '热带与亚热带湿润山地森林',
        realm: 'terrestrial',
        description:
          '沿山地和山麓利用湿润常绿林，也进入部分混交落叶林；当前全球评估采用0至2,000米海拔边界，不代表最适海拔带。',
        isPrimary: true,
      },
      {
        name: '保留大树的种植园与乡村园地',
        realm: 'terrestrial',
        description:
          '在邻接连续森林并保留大型巢树与食物树时提供补充生境，不能替代成熟低地森林。',
      },
    ],
    measurements: {
      length: {
        min: 112,
        max: 150,
        unit: 'cm',
        note: 'IUCN SSC犀鸟专家组范围；雌鸟112至125厘米，雄鸟121至150厘米',
      },
      weight: {
        min: 2.157,
        max: 3.9,
        unit: 'kg',
        note: 'IUCN SSC犀鸟专家组范围；雌鸟2.157至3.350千克，雄鸟2.610至3.900千克',
      },
      wingspan: {
        min: 146,
        max: 160,
        unit: 'cm',
        note: '中国林草主管部门公开展示范围；原页面没有样本量或测量方法，不能解释为全球极值',
      },
    },
    diet: {
      types: ['omnivore'],
      foods: [
        '无花果与其他肉质果实',
        '樟科、番荔枝科、楝科和肉豆蔻科果实',
        '昆虫',
        '两栖类与爬行动物',
        '小型哺乳动物',
        '小鸟与鸟卵',
      ],
      description:
        '以树冠果实为主，尤其利用无花果，也机会性捕食昆虫和小型脊椎动物。食物组成随地点、季节和结果树的物候变化。',
    },
    activity: [
      '昼行性',
      '树冠层活动',
      '天然树洞繁殖',
      '繁殖期活动范围收缩',
      '非繁殖期追随果源广域移动',
      '非迁徙性留居',
      '吞食果实与种子传播',
    ],
    tags: [
      '亚洲',
      '热带森林',
      '犀鸟',
      '大型食果鸟',
      '树洞巢',
      '种子传播',
      '社区守巢',
      'IUCN易危',
      'CITES附录I',
      '国家一级保护动物',
    ],
    summary:
      '双角犀鸟生活在南亚和东南亚湿润森林，吃果实及小型动物。繁殖时雌鸟封窄天然树洞入口，雄鸟从留下的缝隙递送食物。',
    description:
      '双角犀鸟有巨大的黄色弯喙和低平盔突，黑色身体上带白色翼带，白尾横着一条黑带。成年雌雄的虹膜、眼周和盔突外观有差异，浅色羽毛还常被尾脂染黄。它随结果树变化在森林间移动，繁殖依赖带大型天然洞穴的成熟树。雌鸟占巢约 102 至 144 天，平均约 120 天，多数巢最终育成一只幼鸟。森林丧失、老树减少和捕猎使全球种群下降。',
    storySections: [
      {
        key: 'casque-and-sex',
        label: '形态',
        title: '盔突、虹膜与眼周共同标出成年性别',
        body: '巨大的黄色弯喙上托着低平盔突。成年雄鸟通常有红虹膜、黑眼周和带黑边的较大盔突；成年雌鸟有白至蓝白虹膜、红粉眼周和较小的无黑边盔突。两性都有黑体、白翼带和白尾黑带，浅色羽毛还会被尾脂染黄。识别需要组合多项特征。',
      },
      {
        key: 'fruit-routes',
        label: '食性',
        title: '结果树把森林连成移动路线',
        body: '无花果和其他肉质果实吸引双角犀鸟进入树冠。它吞下果实，在林间移动后排出或吐出种子，也会捕捉昆虫和小型脊椎动物。非繁殖期个体能跨越大片森林追随短暂的结果高峰。种子传播效果取决于植物种类、种子处理和移动距离。',
      },
      {
        key: 'sealed-cavity',
        label: '繁殖',
        title: '树洞入口只留下一条递食缝',
        body: '雌鸟进入大型天然树洞后封窄入口，雄鸟把果实和动物性食物从缝外递入。占巢过程平均约四个月，雏鸟约在雌鸟入洞40天后孵出，多数巢最终育成一只幼鸟。公开资料没有给出全分布区统一的封壁材料配比。',
      },
      {
        key: 'flight-pattern',
        label: '飞行',
        title: '白色翼带在宽翼拍动间展开',
        body: '双角犀鸟展开宽而圆的双翼时，黑色飞羽间显出白色带纹，白尾横过一条宽黑带。专业物种账户还记载其振翼声可从远处听见。',
      },
      {
        key: 'large-forest',
        label: '生境',
        title: '大鸟需要结果树、空洞树和连续林块',
        body: '大型结果树供食，带天然空洞的老树供巢，林块之间的连续性支撑季节移动。选择性砍伐即使留下绿色树冠，也可能先移除最重要的食物树、夜栖树和巢树。繁殖期活动范围可缩到约0.7至7平方千米；泰国非繁殖期曾记录138平方千米，两组局地数字不能相除成固定倍数。',
      },
      {
        key: 'nest-guardians',
        label: '保护',
        title: '守住巢树，也要守住周围森林',
        body: '泰国和印度的项目让社区守护者监测天然巢，并修复部分受损洞穴。守住一棵巢树能降低单巢风险，长期恢复还依赖反捕猎、大片低地林、大树更新与持续种群监测。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '林奈在 1758 年使用的名称沿用至今',
        body: '林奈在 1758 年正式命名双角犀鸟，Buceros bicornis 这一科学名称沿用至今。巨大的喙与盔突是它醒目的外形，识别成年雌雄还需结合虹膜和眼周颜色。雌鸟在封窄的树洞中育雏、雄鸟从缝外供食的行为，则使大型巢树成为保护工作的重要对象。',
      },
    ],
    keyFacts: [
      'AviList v2025b接受Buceros bicornis，归入犀鸟目、犀鸟科和犀鸟属。',
      'Linnaeus于1758年命名本种；Great Hornbill是当前英文主名。',
      '中国现行名录使用“双角犀鸟”，并将其列为国家一级重点保护野生动物。',
      '本种列入CITES附录I；附录等级仍需结合公约许可和各国法律解释。',
      'IUCN当前正式记录为易危、趋势下降，2020年评估判据为A3cd+4cd。',
      'BirdLife在2026-09-03提示正在重评；该提示不是新的类别、趋势或评估年份。',
      '2020年评估估计全球有13,000至27,000只成熟个体，数据质量为poor、推导方式为inferred，并非同步普查。',
      '评估预计未来三代约54.9年下降30%至49%，区间不能改写成一个精确百分比。',
      '18.3年是评估采用的世代长度，不是平均寿命。',
      'BirdLife当前原生、现存、留居清单包括孟加拉国、不丹、柬埔寨、中国、印度、印度尼西亚、老挝、马来西亚、缅甸、尼泊尔、泰国和越南。',
      '主要生境是热带或亚热带湿润低地林和湿润山地林，也会利用部分保留大树的种植园与乡村园地。',
      '当前全球评估使用0至2,000米海拔范围；该区间不是最适海拔或生理极限。',
      '雄鸟体长121至150厘米、体重2.610至3.900千克；雌鸟体长112至125厘米、体重2.157至3.350千克。',
      '中国林草主管部门公开的翼展范围为146至160厘米，但页面没有给出样本量和测量方法。',
      '成年雄鸟有红虹膜、黑眼周和带黑边的较大盔突；盔突前端可形成双尖。',
      '成年雌鸟有白至蓝白虹膜、红或粉红眼周和较小的无黑边盔突。',
      '颈部和其他浅色羽毛可被尾脂腺分泌物染成黄奶油色，并非全部属于羽毛本色。',
      '它以无花果和其他肉质果实为主，也吃昆虫、两栖类、爬行动物、小型哺乳动物、小鸟和鸟卵。',
      '雌鸟封窄天然树洞入口后依赖雄鸟递食；占巢期为102至144天，平均约120天。',
      '雏鸟约在雌鸟入洞40天后孵出，多数巢最终育成一只幼鸟。',
      '繁殖期活动范围研究值约0.7至7平方千米；泰国非繁殖期记录过138平方千米，这些局地结果不能外推成固定季节倍数。',
      'BirdLife将本种列为非迁徙种；追随果源的跨林块移动不等于固定季节迁徙。',
      '森林清除、破碎化和选择性砍伐会同时移除食物树、夜栖树与天然洞穴巢树。',
      '捕猎目标包括肉、脂肪、盔突和尾羽，宠物贸易与掏取雏鸟还会直接破坏繁殖。',
    ],
    threats: [
      '农业、种植园、住房和道路扩张清除并破碎热带与亚热带湿润森林。',
      '选择性砍伐和老树死亡移除大型结果树、夜栖树及带天然洞穴的巢树。',
      '捕猎者为食物、脂肪、盔突和尾羽猎杀成鸟；固定果树和重复使用的巢洞增加可预测性。',
      '宠物贸易和掏取雏鸟直接破坏繁殖；CITES附录I不能替代地方巡护、执法和需求削减。',
      '小型孤立林块难以支撑非繁殖期广域移动，保护地外种群也可能承受更强捕猎压力。',
    ],
    conservationActions: [
      '保护并连接大片湿润低地林和山地林，优先保留大型结果树、天然巢树和夜栖树。',
      '采用可比方法监测成熟个体、巢占用、繁殖结果、范围收缩与保护地外移动。',
      '与社区共同减少捕猎和掏巢，执行国家一级保护与CITES附录I的许可和贸易管制。',
      '培训并支持社区巢树守护者长期记录巢占用和繁殖结果，不能用认养数量代替成效数据。',
      '由专业人员评估后修复受损天然洞穴或设置适配巢箱，并比较入住、孵化与出飞结果。',
      '保留圈养种群谱系；只有在威胁受控、栖息地适宜并完成风险评估后，才考虑补充或重引入。',
    ],
    metrics: {
      adultLengthCm: [112, 150],
      adultMassKg: [2.157, 3.9],
      wingspanCm: [146, 160],
      elevationM: [0, 2000],
      estimatedMatureIndividuals: [13000, 27000],
    },
    featuredStats: [
      {
        key: 'mature-population',
        label: '全球成熟个体',
        value: '13,000–27,000',
        unit: '只',
        note: '2020年IUCN采用的poor-quality、inferred区间，不是全球同步普查',
      },
      {
        key: 'projected-decline',
        label: '未来三代预计下降',
        value: '30–49',
        unit: '%',
        note: '三代约54.9年；这是疑似趋势区间，不是精确预测值',
      },
      {
        key: 'adult-mass',
        label: '成鸟体重',
        value: '2.157–3.900',
        unit: '千克',
        note: '合并两性范围；雌鸟与雄鸟的分组范围不同',
      },
      {
        key: 'nesting-period',
        label: '占巢期',
        value: '102–144',
        unit: '天',
        note: '多地资料汇总范围，平均约120天',
      },
    ],
    media: {
      image:
        './images/species/great-hornbill/01-canopy-perch-cover.webp',
      alt: '成熟湿润森林中，恰好一只完整的雄性双角犀鸟停在画面右侧斜枝上，巨大黄黑喙盔、折叠双翼、双足和白尾黑带均在画内，左侧保留林冠背景',
      focalPoint: { x: 0.751, y: 0.417 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/great-hornbill/02-adult-sex-comparison.webp',
          alt: '湿润森林的一根宽枝上，恰好两只完整成年双角犀鸟并排停栖，左侧雄鸟盔突较大并带黑边，右侧雌鸟虹膜淡蓝白、盔突较小且无黑边',
          title: '成年雌雄的虹膜与盔突差异',
          caption:
            'AI生成科学情景重建；左雄右雌按成年虹膜、眼周和盔突组合特征重建。画面用于展示识别线索，不是标本、校准色卡、体尺比较或年龄判定。',
          focalPoint: { x: 0.5, y: 0.49 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/great-hornbill/03-sealed-cavity-feeding.webp',
          alt: '高大树干上，恰好一只完整雄性双角犀鸟把一枚果实递向粗糙灰褐有机封壁留下的窄缝，洞内只露出雌鸟淡色眼睛和喙尖',
          title: '树洞只留下一条递食缝',
          caption:
            'AI生成科学情景重建；雌鸟封窄天然树洞入口后依赖雄鸟递食。粗糙封壁和一枚果实只表现通用过程，不指定材料比例、巢位、繁殖阶段或结果。',
          focalPoint: { x: 0.58, y: 0.49 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/great-hornbill/04-canopy-fig-toss.webp',
          alt: '湿润森林树冠中，恰好一只完整雄性双角犀鸟停在果枝旁，张开的巨大黄喙上方有一枚抛起的小果实，双足与白尾黑带均在画内',
          title: '追随树冠的果实脉冲',
          caption:
            'AI生成科学情景重建；画面表现一次小型肉质果实的抛接动作，枝叶不作植物种鉴定，也不能证明吞咽、传播距离或萌发成功。',
          focalPoint: { x: 0.57, y: 0.46 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/great-hornbill/05-full-wing-flight.webp',
          alt: '雾气森林上方，恰好一只完整成年双角犀鸟展翼飞行，两侧宽翼、分开的初级飞羽、白色翼带、双足和白尾黑带均在画内',
          title: '宽翼掠过森林上空',
          caption:
            'AI生成科学情景重建；展开的白色翼带和白尾黑带表现飞行场标，静帧不能呈现振翼声，也不测量速度、高度、路线或迁徙。',
          focalPoint: { x: 0.55, y: 0.47 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/great-hornbill/06-community-nest-guardians.webp',
          alt: '成熟湿润森林中，恰好两名社区监测员在巨型洞穴树下观察和记录，相邻上层树冠停着一只完整雄性双角犀鸟，人与鸟没有接触',
          title: '社区守护成熟巢树',
          caption:
            'AI生成科学情景重建；两名监测员、一只雄鸟和一棵成熟洞穴树只代表社区守巢模式，不指向具体项目、地点、人员、监测距离、巢占用或繁殖成效。',
          focalPoint: { x: 0.62, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...GREAT_HORNBILL_SOURCES,
      {
        title: 'GBIF: Buceros bicornis Linnaeus, 1758 nomenclatural record',
        url: 'https://www.gbif.org/species/2476012',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: GREAT_HORNBILL_CONTENT_DATE,
    updatedAt: GREAT_HORNBILL_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
