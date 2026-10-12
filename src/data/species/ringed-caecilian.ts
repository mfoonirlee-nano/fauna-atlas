import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const RINGED_CAECILIAN_SOURCE_DATE = '2026-08-30' as const;

const RINGED_CAECILIAN_CONTENT_DATE = '2026-08-30' as const;

const RINGED_CAECILIAN_SOURCES = [
  {
    title: 'Amphibian Species of the World 6.2 — Siphonops annulatus',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Gymnophiona/Siphonopidae/Siphonops/Siphonops-annulatus',
    kind: 'taxonomy',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title: 'ITIS — Siphonops annulatus (TSN 668505)',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=668505',
    kind: 'taxonomy',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title: 'A nine-family classification of caecilians (Amphibia: Gymnophiona)',
    url: 'https://doi.org/10.11646/zootaxa.2874.1.3',
    kind: 'taxonomy',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Siphonops annulatus assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T59593A43784684.en',
    kind: 'conservation',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title:
      'CPRH — Avaliação do Estado de Conservação dos Anfíbios e Répteis de Pernambuco',
    url: 'https://www2.cprh.pe.gov.br/wp-content/uploads/2023/02/E-book-Avaliacao-do-Estado-de-Conservacao-dos-Anfibios-e-Repteis-de-Pernambuco-Vermelho-IMPRESSAO-ATUALIZADA.pdf',
    kind: 'conservation',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title: 'Conservation of Siphonops annulatus in Brazilian cacao plantations',
    url: 'https://doi.org/10.21757/0103-3816.2015v27n3p233-238',
    kind: 'conservation',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title: 'Taxonomy and distribution of caecilians of Brazilian Amazonia',
    url: 'https://doi.org/10.11646/zootaxa.2984.1.1',
    kind: 'distribution',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title: 'Rediscovery of Siphonops annulatus in Pará with an updated distribution map',
    url: 'https://doi.org/10.15560/9.1.106',
    kind: 'distribution',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title: 'Argentina National Parks SIB — Siphonops annulatus',
    url: 'https://sib.gob.ar/especies/siphonops-annulatus',
    kind: 'distribution',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title: 'One hundred million years of skin feeding?',
    url: 'https://doi.org/10.1098/rsbl.2008.0217',
    kind: 'ecology',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title: 'Life history and reproduction of Siphonops annulatus',
    url: 'https://doi.org/10.1111/azo.12254',
    kind: 'ecology',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title: 'Milk provisioning in oviparous caecilian amphibians',
    url: 'https://doi.org/10.1126/science.adi5379',
    kind: 'ecology',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title:
      'Skin gland concentrations in the head and posterior regions of Siphonops annulatus',
    url: 'https://doi.org/10.1038/s41598-018-22005-5',
    kind: 'ecology',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title: 'Morphological evidence for an oral venom system in caecilian amphibians',
    url: 'https://doi.org/10.1016/j.isci.2020.101234',
    kind: 'ecology',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title: 'Morphology of cutaneous poison and mucous glands in Siphonops annulatus',
    url: 'https://doi.org/10.3390/toxins13110779',
    kind: 'ecology',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title:
      'Metabolic and endocrine changes during the reproductive cycle of dermatophagic caecilians',
    url: 'https://doi.org/10.1016/j.zool.2013.06.002',
    kind: 'ecology',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title: 'A Goliath among Davids: an impressive new size record for Siphonops annulatus',
    url: 'https://sedici.unlp.edu.ar/bitstream/handle/10915/168077/Documento_completo.pdf-PDFA.pdf?sequence=1',
    kind: 'general',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
  {
    title: 'Guia de Identificação das Espécies de Anfíbios e Répteis do Brasil Central',
    url: 'https://books.scielo.org/id/9qfsp/pdf/vaz-9786587590011.pdf',
    kind: 'general',
    accessedAt: RINGED_CAECILIAN_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-siphonops-annulatus',
    slug: 'ringed-caecilian',
    names: {
      zh: '环纹蚓螈',
      en: 'Ringed Caecilian',
      aliases: ['Ringed Caecilia', 'Ilulo Anillado', 'Cecília-anelada'],
    },
    scientificName: 'Siphonops annulatus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Amphibia', '两栖纲'),
      taxon('Gymnophiona', '蚓螈目'),
      taxon('Siphonopidae', '环管蚓科'),
      taxon('Siphonops', '环管蚓属'),
    ),
    conservation: conservation('LC', 'unknown', 2014),
    distribution: {
      realms: ['terrestrial'],
      continents: ['南美洲'],
      regions: [
        '安第斯山脉以东的南美洲低地',
        '西部亚马孙、巴西亚马孙与圭亚那地区',
        '巴西东部大西洋森林至阿根廷米西奥内斯',
      ],
      countries: [
        '阿根廷',
        '玻利维亚',
        '巴西',
        '哥伦比亚',
        '厄瓜多尔',
        '圭亚那',
        '秘鲁',
        '苏里南',
        '委内瑞拉',
      ],
      endemicTo: ['南美洲'],
      range:
        '广布于安第斯山脉以东的南美洲，已知范围分成西部亚马孙、东部亚马孙与圭亚那地区、巴西东部至阿根廷米西奥内斯等相隔区域；采集空缺和未解决的种界都可能影响范围图。法属圭亚那记录已受质疑，巴拉圭缺少可靠凭证，乌拉圭仍属推测。',
      center: { lat: -9.5, lng: -57 },
    },
    habitats: [
      {
        name: '湿润森林土壤与落叶层',
        realm: 'terrestrial',
        description:
          '亚马孙和大西洋森林中湿润、疏松、富腐殖质的土层、树根与腐木周边提供主要微生境；被翻出的个体不代表长期在地表活动。',
        isPrimary: true,
      },
      {
        name: '稀树草原、灌丛与 Caatinga',
        realm: 'terrestrial',
        description:
          '它能利用较开放或季节偏干的环境，但仍依赖可钻掘并保有水分的土壤微环境；这不等于生活在裸沙或岩地。',
      },
      {
        name: '荫蔽可可农林系统与乡村花园',
        realm: 'terrestrial',
        description:
          '南巴伊亚 cabruca 的树冠、厚落叶层和肥沃湿土支持当地研究种群；一个农业系统不能代表所有种植园或证明全球种群稳定。',
      },
      {
        name: '浅表隧道与地下育幼巢室',
        realm: 'terrestrial',
        description:
          '光滑隧道、树根间巢室和腐殖质空腔可用于活动、产卵和育幼；20 厘米隧道深度与不足 15 厘米的巢深来自南巴伊亚研究，不能外推为全范围上限。',
      },
    ],
    measurements: {
      length: {
        max: 0.72,
        unit: 'm',
        note:
          'UFRO-H 3214 单只雄性保存标本的已发表总长极端记录；此前最大记录为 0.539 米，不代表常见成体上限或典型范围',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '蚓螈类资料支持的预期土壤无脊椎动物食物',
        '圈养条件下接受的蚯蚓和其他动物性食物',
        '圈养观察中的机会性腐肉',
      ],
      description:
        '成体为肉食者，能咬住食物并沿身体长轴旋转撕取，也会把地表食物拖入洞中。当前缺少本种野外胃含物比例，圈养食物表不能替代自然食谱。',
    },
    activity: [
      '主要在地下穴居',
      '在湿润腐殖土和落叶层近表面活动',
      '以头部开挖并使用光滑隧道',
      '雨后可能接近地表',
      '母体在地下巢室守卵并照护幼体',
      '缺少统一昼夜节律证据',
    ],
    tags: [
      '蚓螈目',
      '环管蚓科',
      '南美洲',
      '地下穴居',
      '卵生直接发育',
      '母性食皮',
      '泄殖孔营养分泌物',
      '浅色环沟',
    ],
    summary:
      '环纹蚓螈是南美洲湿土中的无足两栖动物，以蓝灰色圆柱身体和浅色环沟辨识；母体在地下守护陆生卵，孵化后的幼体会周期性取食富脂表皮，并摄食来自母体泄殖孔的营养分泌物。',
    description:
      '环纹蚓螈属于蚓螈目环管蚓科，广布于安第斯山脉以东的南美洲森林、稀树草原和部分农林生境。它没有四肢，蓝灰至板岩色身体被浅色环沟分段，小眼和眼鼻之间的感觉触须帮助适应地下生活；头部富集黏液腺，身体后端富集皮肤毒腺。现有最大总长记录为 72 厘米，但来自一只异常巨大的保存标本。它卵生并直接发育，母体在浅层土巢中守卵，幼体孵化后用暂时性多尖牙齿取食母体富脂外层表皮，还会摄食输卵管腺经泄殖孔释放的乳状营养分泌物。IUCN 现行条目沿用 2014 年无危评估，全球种群趋势和数量仍未知；分类边界、局地土壤生境变化与低检出率需要持续研究。',
    storySections: [
      {
        key: 'an-amphibian-without-legs',
        label: '无足两栖',
        title: '湿土中生活的无足两栖动物',
        body: '环纹蚓螈没有四肢，身体近圆柱形，蓝灰皮肤被浅色环沟分成一圈圈，但它属于两栖纲。小眼仍可从皮肤下看见，眼与鼻孔之间还有一对感觉触须。现行分类把它放在蚓螈目环管蚓科；旧资料中的蚓螈科口径已经改变。',
      },
      {
        key: 'lubricated-soil-tunnels',
        label: '湿土隧道',
        title: '头部先润滑，身体随后钻入土中',
        body: '头部密集的黏液腺会产生含脂质的滑润分泌物，帮助身体贴着土壁推进。南巴伊亚研究者挖到光滑、可分叉的浅表隧道，也常在树根、腐木和厚落叶层附近找到个体；当地最深 20 厘米的记录不是整个物种的钻土极限。',
      },
      {
        key: 'two-ends-two-gland-systems',
        label: '腺体分工',
        title: '身体两端承担不同的地下任务',
        body: '头端以大型黏液腺为主，后端则集中皮肤毒腺，还能像塞子一样挡住狭窄隧道。牙齿基部另有齿相关腺，其分泌物显示多种酶活性，但研究尚未证实毒性和有效注入，因此不能把它称作已经确认用毒牙捕猎的动物。',
      },
      {
        key: 'maternal-skin-feeding',
        label: '母性食皮',
        title: '幼体取食母体富脂外层表皮',
        body: '孵化后的幼体无色素、没有鳃，仍留在地下巢室。育幼母体的表皮细胞膨大并积累脂质，幼体用暂时性多尖匙形牙齿撕取最外层表皮。研究者只完整记录过一次七分钟的食皮过程，不能把这个时长和约 64 小时的单次间隔写成固定日程。',
      },
      {
        key: 'oviduct-milk-provisioning',
        label: '乳状分泌物',
        title: '输卵管腺还为幼体准备另一份营养',
        body: '2024 年研究确认，育幼母体肥大的输卵管腺产生富含脂质和碳水化合物的营养分泌物，幼体约两个月内从泄殖孔摄食。研究人员把它称作 milk，但母体没有乳房或乳头；这类供给似乎与幼体触碰和发声相伴，触发机制仍待检验。',
      },
      {
        key: 'wide-range-hidden-questions',
        label: '广布谜题',
        title: '广布种仍有种界和监测空白',
        body: '现有记录横跨安第斯山脉以东的南美洲，IUCN 因范围广和生境耐受性在 2014 年列为无危。然而全球数量和趋势没有可靠估计，几个相隔范围块还可能混有采集空缺或未识别谱系。保存湿润有机土和荫蔽农林生境的同时，分类修订与跨区域监测仍是核心任务。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1822 年的命名年份校正',
        body: '环纹蚓螈的科学命名署名为 Mikan，现代两栖动物名录把年份校正为 1822 年，现用学名为 Siphonops annulatus。中文“环纹”对应圆柱身体上的浅色环沟。此后研究陆续记录母体守卵、幼体食皮，以及 2024 年确认的输卵管腺营养分泌物。',
      },
    ],
    keyFacts: [
      '它是无四肢的两栖动物，不是蛇、蚯蚓或蚓蜥。',
      '现行分类链为两栖纲、蚓螈目、环管蚓科、环管蚓属。',
      'ASW 6.2 与 ITIS 把命名年份校正为 1822。',
      '2011 年分类研究把环管蚓科从旧蚓螈科口径中恢复并重新界定。',
      '原生范围局限于安第斯山脉以东的南美洲。',
      '范围图分成几个相隔区域，采集空缺与未解决种界都可能影响图形。',
      '法属圭亚那记录受质疑，巴拉圭缺少可靠凭证，乌拉圭仍属推测。',
      '它利用森林湿土、稀树草原、Caatinga 和部分人为改变生境。',
      '该种陆栖并直接发育，不依赖开放水体完成繁殖。',
      '多数已知记录低于约 800 米，但这不是硬海拔上限。',
      '蓝灰至板岩色身体具有浅色环沟，旧诊断记录 78 至 98 个体环。',
      '小眼可见，眼和鼻孔之间有一对感觉触须。',
      '720 毫米总长来自一只异常巨大的保存雄性标本。',
      '南巴伊亚不同样本的体长和体重均值不可拼成全物种典型范围。',
      '头部富集大型黏液腺，含脂质分泌物有助于降低钻土摩擦。',
      '身体后端富集皮肤毒腺，并可堵住与身体等宽的隧道。',
      '牙齿基部有齿相关腺，分泌物具有多种常见于毒液的酶活性。',
      '现有实验尚未验证齿相关分泌物的毒性和有效注入，不能确认毒液咬合。',
      '野外食谱缺少物种级比例数据，圈养观察支持肉食和机会性食腐。',
      '个体能沿身体长轴旋转，帮助撕取较大的食物。',
      '南巴伊亚找到的光滑隧道不深于 20 厘米，但该值不是全物种上限。',
      '没有足够证据把该种统一归为昼行或夜行。',
      '母体把卵产在地下，环抱卵团并会用头轻推卵。',
      '南巴伊亚记录每窝 5 至 16 只幼体，月份物候只适用于当地。',
      '幼体直接孵化为无鳃、无色素的幼体，没有自由生活水生蝌蚪期。',
      '育幼幼体用暂时性多尖匙形牙齿取食母体富脂外层表皮。',
      '一次完整食皮事件持续七分钟，不能据此制定固定觅食日程。',
      '母体输卵管腺产生富含脂质和碳水化合物的乳状营养分泌物。',
      '2024 年研究观察到幼体约两个月从母体泄殖孔摄食该分泌物。',
      'IUCN 现行条目为 2014 年无危，全球种群趋势和成熟个体数仍未知。',
    ],
    threats: [
      'IUCN 尚未识别全范围重大威胁，但评估年份较旧且全球趋势未知',
      '局地原生林、湿润腐殖土和厚落叶层被清除或简化',
      '南巴伊亚传统荫蔽可可农林系统衰退可能移除当地重要生境',
      '深翻、土壤压实和化学污染可能伤害穴居个体与浅层巢室，影响程度尚未量化',
      '分类边界未解决，广布物种口径可能掩盖范围较小的谱系',
      '穴居习性和低检出率使局地下降难以及时发现',
    ],
    conservationActions: [
      '保护原生森林中湿润、疏松且富腐殖质的土壤与落叶层',
      '保留大树根系、腐木、落叶堆和其他浅层地下微生境',
      '维持南巴伊亚 cabruca 等保有树冠与厚落叶层的荫蔽农林系统',
      '在已知巢区减少深翻、土壤压实与不必要的农药投入',
      '采用凭证标本、形态和遗传资料修订跨南美洲的分类边界',
      '在不同范围块开展标准化占域、检出率和长期趋势监测',
      '补充野外食性、海拔、活动节律和非巴伊亚种群的繁殖研究',
      '向农林从业者说明蚓螈是无足两栖动物，减少误认成蛇后的杀害',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'documented-maximum-length',
        label: '最长记录',
        value: '72',
        unit: '厘米',
        note: '单只雄性保存标本 UFRO-H 3214 的异常极端记录，不代表典型成体',
      },
      {
        key: 'primary-annuli',
        label: '体环数',
        value: '78—98',
        unit: '个',
        note: '传统形态诊断范围；浅色环沟大多完整环绕身体',
      },
      {
        key: 'young-per-brood',
        label: '同巢幼体',
        value: '5—16',
        unit: '只',
        note: '南巴伊亚长期野外与圈养研究记录，不代表全范围固定窝数',
      },
      {
        key: 'milk-provisioning-period',
        label: '营养分泌物供给',
        value: '约 2',
        unit: '个月',
        note: '2024 年南巴伊亚来源家庭的研究观察；只指泄殖孔分泌物供给',
      },
    ],
    media: {
      image:
        './images/species/ringed-caecilian/01-cacao-agroforest-adult-portrait.webp',
      alt: '湿润可可农林地的深色腐殖土和落叶上，一只完整蓝灰色无足动物横向伸展，圆柱身体布满浅色环沟，头尾均钝圆',
      focalPoint: { x: 0.58, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/ringed-caecilian/02-annuli-and-blunt-head-profile.webp',
          alt: '黄褐色湿泥地上，一只完整蓝灰色无足动物弯成宽弧，身体浅色环沟清楚，钝圆头部侧面只见一个小暗点',
          title: '浅色环沟与钝圆头部',
          caption:
            'AI生成科学情景重建；画面支持蓝灰圆柱身体、浅色环沟和钝圆头部的外形展示。触突孔与鼻孔未稳定分辨，画面不能支持头部开口判定，也不能支持环沟计数或体长、性别与年龄判断。',
          focalPoint: { x: 0.43, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/ringed-caecilian/03-shallow-smooth-walled-tunnel.webp',
          alt: '湿润深色土壤剖面中，一只完整蓝灰色无足动物沿一段弯曲、光滑的浅层通道伸展，上方覆盖潮湿落叶',
          title: '湿润腐殖土中的浅层通道',
          caption:
            'AI生成科学情景重建；南巴伊亚研究记录过光滑浅隧道，但这一静帧不能证明可见个体挖掘了通道、长期占用它，也不提供真实深度或完整洞系；当地 20 厘米记录不代表物种级上限。',
          focalPoint: { x: 0.61, y: 0.59 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/ringed-caecilian/04-root-chamber-egg-attendance.webp',
          alt: '湿润树根围成的土室中，一只蓝灰色无足成体盘绕在八枚浅黄色圆卵外围，卵团位于画面中央',
          title: '根间土室中的成体与八枚卵',
          caption:
            'AI生成科学情景重建；画中的八枚卵属于受控构图，静帧不能确认成体与卵的亲缘，也不能把数量外推为物种级窝卵数或判断孵化成功率；画面不标定产卵月份、胚胎日龄或巢深。',
          focalPoint: { x: 0.51, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/ringed-caecilian/05-maternal-dermatophagy-hatchlings.webp',
          alt: '暗色湿土巢室中，一只粗壮浅灰白色无足成体盘曲，五只细小淡色幼体的头部贴近成体体侧，未见血液或伤口',
          title: '浅色成体与五只幼体的贴近姿态',
          caption:
            'AI生成科学情景重建；画中的五只幼体与浅色成体形成接触姿态，静帧不能证明它们正在吞咽或撕取表皮，也不表现泄殖腔分泌物、触发信号、七分钟时长或固定间隔；画面没有血液和伤口。',
          focalPoint: { x: 0.53, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/ringed-caecilian/06-cacao-soil-active-search.webp',
          alt: '荫蔽可可农林地中，两名戴手套的野外人员在大树根旁查看湿土和落叶，一人用小铲翻开表土，画面没有动物',
          title: '在可可树下开展土壤搜寻',
          caption:
            'AI生成科学情景重建；画面有零动物可见，不能证明缺失，也不能当作标准化检测结果、局地丰度或无扰动状态的证据；人物、机构、地点、取样设计和许可均未识别。',
          focalPoint: { x: 0.53, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...RINGED_CAECILIAN_SOURCES,
      {
        title: 'GBIF: Siphonops annulatus (Mikan, 1822) nomenclatural record',
        url: 'https://www.gbif.org/species/2430946',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: RINGED_CAECILIAN_CONTENT_DATE,
    updatedAt: RINGED_CAECILIAN_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
