import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const AARDVARK_SOURCE_DATE = '2026-08-30' as const;

const AARDVARK_CONTENT_DATE = '2026-08-30' as const;

const AARDVARK_SOURCES = [
  {
    title: 'ASM Mammal Diversity Database: Orycteropus afer',
    url: 'https://www.mammaldiversity.org/taxon/1000520/',
    kind: 'taxonomy',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Orycteropus afer (2014 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T41504A21286437.en',
    kind: 'conservation',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
  {
    title: 'Handbook taxonomic treatment: Orycteropus afer',
    url: 'https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934',
    kind: 'general',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices I, II and III, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
  {
    title: 'CITES CoP8 Proposal 12: deletion of Orycteropus afer from Appendix II',
    url: 'https://cites.org/sites/default/files/eng/cop/08/prop/E08-Prop-12_Orycteropus.PDF',
    kind: 'conservation',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
  {
    title: 'Taylor et al. 2002: The feeding ecology of the aardvark Orycteropus afer',
    url: 'https://doi.org/10.1006/jare.2001.0854',
    kind: 'ecology',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
  {
    title: 'Taylor and Skinner 2003: Activity patterns, home ranges and burrow use of aardvarks in the Karoo',
    url: 'https://doi.org/10.1017/S0952836903004217',
    kind: 'ecology',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
  {
    title: 'Weyer et al. 2020: Increased Diurnal Activity Is Indicative of Energy Deficit in a Nocturnal Mammal, the Aardvark',
    url: 'https://doi.org/10.3389/fphys.2020.00637',
    kind: 'ecology',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
  {
    title: 'Whittington-Jones et al. 2011: Aardvark burrows as a resource for animals in arid environments',
    url: 'https://doi.org/10.1080/15627020.2011.11407509',
    kind: 'ecology',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
  {
    title: 'Haussmann et al. 2018: Ecosystem engineering through aardvark burrowing',
    url: 'https://doi.org/10.1016/j.ecoleng.2018.04.022',
    kind: 'ecology',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
  {
    title: 'Johnson et al. 2025: Antbears and underground melons',
    url: 'https://doi.org/10.1002/ppp3.10638',
    kind: 'ecology',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
  {
    title: 'Endo et al. 2003: CT analysis of the aardvark digging system',
    url: 'https://doi.org/10.1016/S0940-9602(03)80063-8',
    kind: 'general',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
  {
    title: 'Christman et al. 2022: Dental disease and tooth structure in aardvarks',
    url: 'https://doi.org/10.3390/ani12070845',
    kind: 'general',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
  {
    title: 'Fallon et al. 2026: Female reproductive physiology in the aardvark',
    url: 'https://doi.org/10.1016/j.therwi.2026.100145',
    kind: 'ecology',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
  {
    title: 'SANBI Red List of Mammals of South Africa: Orycteropus afer',
    url: 'https://speciesstatus.sanbi.org/assessment/last-assessment/2287/',
    kind: 'conservation',
    accessedAt: AARDVARK_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-orycteropus-afer',
    slug: 'aardvark',
    names: {
      zh: '土豚',
      en: 'Aardvark',
      aliases: ['Antbear'],
    },
    scientificName: 'Orycteropus afer',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Tubulidentata', '管齿目'),
      taxon('Orycteropodidae', '土豚科'),
      taxon('Orycteropus', '土豚属'),
    ),
    conservation: conservation('LC', 'unknown', 2014),
    distribution: {
      realms: ['terrestrial'],
      continents: ['非洲'],
      regions: [
        '西非萨赫勒南缘、稀树草原与林地',
        '中非森林边缘、林间空地与稀树草原',
        '东非高地、草原与灌丛',
        '南部非洲卡鲁、喀拉哈里、草原与疏林',
      ],
      countries: [
        '安哥拉',
        '贝宁',
        '博茨瓦纳',
        '布基纳法索',
        '布隆迪',
        '喀麦隆',
        '中非共和国',
        '乍得',
        '科特迪瓦',
        '刚果民主共和国',
        '吉布提',
        '赤道几内亚',
        '厄立特里亚',
        '埃斯瓦蒂尼（斯威士兰）',
        '埃塞俄比亚',
        '加蓬',
        '冈比亚',
        '加纳',
        '几内亚',
        '几内亚比绍',
        '肯尼亚',
        '莱索托',
        '利比里亚',
        '马拉维',
        '马里',
        '毛里塔尼亚',
        '莫桑比克',
        '纳米比亚',
        '尼日尔',
        '尼日利亚',
        '刚果共和国',
        '卢旺达',
        '塞内加尔',
        '塞拉利昂',
        '索马里',
        '南非',
        '南苏丹',
        '苏丹',
        '坦桑尼亚',
        '乌干达',
        '赞比亚',
        '津巴布韦',
      ],
      range:
        '分布于撒哈拉以南非洲。Mammal Diversity Database当前列出42个原生范围国；2014年IUCN全球评估列出40国，差异来自资料年份与国家口径，当前范围国记录采用 MDD。记录从海平面延伸到约3,200米，但硬岩、永久积水地和缺少蚁类猎物的环境会限制占用。',
      center: { lat: -2, lng: 24 },
    },
    habitats: [
      {
        name: '草原、稀树草原与开放灌丛',
        realm: 'terrestrial',
        description:
          '疏林、草地和半干旱稀树草原提供蚂蚁、白蚁与可挖土层。土豚需要能开掘觅食坑和休息洞，坚硬岩面或浅薄石质土会限制利用。',
        isPrimary: true,
      },
      {
        name: '林地、落叶林与雨林',
        realm: 'terrestrial',
        description:
          '本种可进入林地、落叶林和雨林；西非雨林内的详细范围仍缺资料，植被类型也不能替代对猎物和土壤的判断。',
      },
      {
        name: '半干旱卡鲁及其他干旱草灌地',
        realm: 'terrestrial',
        description:
          '土豚能在半干旱地利用洞穴缓冲温湿度波动；纳米布等极端荒漠、硬地和多石地不能概括为适宜生境。',
        isPrimary: true,
      },
    ],
    measurements: {
      length: {
        min: 94,
        max: 142,
        unit: 'cm',
        note: '成体头体长，不含44至63厘米的尾；没有与旧资料的更宽范围混拼。',
      },
      weight: {
        min: 40,
        max: 65,
        unit: 'kg',
        note: '当前分类处理采用的成体参考范围；不同地区、性别和体况会造成差异。',
      },
    },
    diet: {
      types: ['insectivore'],
      foods: [
        '蚂蚁',
        '白蚁',
        '少量金龟子幼虫或蛹',
        '局地取食的地下果实Cucumis humifructus',
      ],
      description:
        '长吻嗅到地下蚁巢后，四趾前足扒开土层，细长舌头把蚂蚁或白蚁送入口中。卡鲁标记个体会在可用猎物中选择种类，并非挖到什么都吃；金龟子蛹和纳米比亚地下果实属于局地记录，不能改写成全范围的固定食谱。',
    },
    activity: [
      '通常独居并以夜间地表觅食为主，白天在地下洞穴中休息',
      '用灵敏嗅觉寻找蚁巢，长耳也会在行进和挖掘间改变朝向',
      '短而强壮的前肢压碎土壳并向后扫土，后肢支撑和推出松土',
      '卡鲁样地标记个体一夜移动约2.11至4.39公里，不能外推为全种固定里程',
      '低食物和能量不足时可能增加白昼活动；白昼目击不等于本种具有固定昼行节律',
      '定期另挖休息洞，离开的洞穴可被其他动物使用',
    ],
    tags: [
      '脊索动物门',
      '哺乳纲',
      '管齿目',
      '土豚科',
      '撒哈拉以南非洲',
      '夜行',
      '穴居',
      '食蚁动物',
      '生态系统工程师',
      'IUCN无危',
      '种群趋势未知',
    ],
    summary:
      '土豚是管齿目唯一现生种。它夜间用四趾前足挖开蚁巢，再以细长舌头取食；休息洞还为许多脊椎动物提供庇护。IUCN列为无危，但2014年全球评估没有给出种群趋势。',
    description:
      '土豚Orycteropus afer分布于撒哈拉以南非洲，是管齿目、土豚科和土豚属唯一现生成员。它的俗名常把外形联想到猪或食蚁兽，分类上却属于非洲兽类的一条独立谱系。成体头体长约94至142厘米、体重40至65千克，另有44至63厘米的粗尾。四趾前足和五趾后足配合开掘觅食坑与休息洞；成体20枚颊齿由成束牙本质小管组成，没有釉质并持续生长。土豚通常独居、夜间寻找蚂蚁和白蚁，个别地区也记录金龟子蛹和地下果实。它挖出的洞穴缓冲地表温湿度，南非三个样地的相机调查记录27种脊椎动物到访。全球IUCN评估在2014年把本种列为无危，却没有估算成熟个体总数或种群趋势；猎捕、土地利用改变、围栏和极端干旱仍会造成局地压力。',
    storySections: [
      {
        key: 'sole-living-tubulidentate',
        label: '分类',
        title: '管齿目最后的现生代表',
        body: '现生管齿目只剩土豚一个物种，土豚科和土豚属也只保留这一个现生成员。Aardvark源自南非荷兰语的“土猪”，antbear等俗名又把它叫成“蚁熊”；这些名字描述外形或食性，不表示它与猪、熊或真正的食蚁兽近缘。',
      },
      {
        key: 'digging-and-tubular-teeth',
        label: '形态',
        title: '前爪破土，管状牙齿继续生长',
        body: '前足四趾，宽爪负责压碎土壳并向后扫土；后足五趾，在深挖时支撑身体和推开松土。成体没有门齿和犬齿，保留20枚颊齿。每枚牙齿由许多直立牙本质小管组成，没有釉质并持续生长，这套结构给管齿目留下了名字。',
      },
      {
        key: 'selective-myrmecophage',
        label: '食性',
        title: '取食蚁类时也会选择种类',
        body: '研究者在南非卡鲁跟踪13只土豚，发现食谱主要由蚂蚁和白蚁构成，个体还会在可用猎物中作出选择。少量金龟子幼虫或蛹，以及纳米比亚地下结果的Cucumis humifructus，说明局地例外存在；它们不能代表全范围、全年或每只土豚的固定食谱。',
      },
      {
        key: 'flexible-clock-under-drought',
        label: '活动节律',
        title: '白昼活动可能是能量警报',
        body: '土豚通常在夜里觅食，白天回洞休息。卡拉哈里三年研究记录到干旱降低食物可得性后，研究个体体况和体温下降，白昼活动增加，并出现死亡。白昼活动在该研究中与能量不足相关；这个样地结果不能把本种改写成固定昼行，也不能把一次白昼目击直接诊断为饥饿。',
      },
      {
        key: 'burrow-engineering',
        label: '生态作用',
        title: '一个洞改变温度、土壤与邻居',
        body: '土豚挖洞时搬运土壤，洞室也缓冲地表的温湿度波动。研究者记录27种脊椎动物使用或到访南非三个样地的土豚洞穴，但相机布设偏向哺乳类和夜行种，这27种不能代表全分布区或所有洞穴。新洞和旧洞周围植物丰富度的变化方向也不同，因此不能笼统声称每个洞都会增加多样性。',
      },
      {
        key: 'least-concern-unknown-trend',
        label: '保护',
        title: '全球趋势仍未知',
        body: 'IUCN在2014年完成全球评估，并在2015-2版本发布无危结论；评估没有给出全球成熟个体数或种群趋势。CITES曾在1975年把本种列入附录II，1992年删除，2026年现行附录没有收录。管理者仍需监测猎捕、农业扩张、围栏和干旱对局地种群的影响。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1766 年曾被归入食蚁兽属',
        body: '1766 年，Pallas 以 Myrmecophaga afra 正式描述土豚，模式产地为南非好望角。后来它被归入土豚属 Orycteropus，并成为管齿目唯一现生种。旧属名反映早期对食性的归类，今天它与真正的食蚁兽分属不同演化谱系。',
      },
    ],
    keyFacts: [
      '土豚是管齿目、土豚科和土豚属唯一现生物种。',
      'Mammal Diversity Database当前列出42个原生范围国；IUCN 2014旧口径的40国不能等同于当前MDD的42国。',
      '分布记录从海平面延伸到约3,200米，但海拔范围不表示每种土壤和植被都适合。',
      '当前分类处理给出成体头体长94至142厘米、体重40至65千克，尾长44至63厘米。',
      '前足有四趾、后足有五趾，宽爪与短而强壮的肢带共同承担挖掘。',
      '成体没有门齿和犬齿，20枚颊齿没有釉质，由牙本质小管组成并持续生长。',
      '主要取食蚂蚁和白蚁，同时存在少量昆虫与地下果实的局地食谱例外。',
      '通常独居且主要夜行，低食物可得性和能量不足可能推动研究个体增加白昼活动。',
      '卡鲁单一样地的家域估计为133至302公顷，一夜行程约2.11至4.39公里，均不是全种固定值。',
      '南非三个样地记录27种脊椎动物使用或到访土豚洞穴，调查设计会漏掉部分小型或昼行使用者。',
      '妊娠期文献估计约213至258天，通常产一仔；野外繁殖资料仍少。',
      'CITES在1975年将土豚列入附录II，1992年删除；2026年3月生效的附录没有收录本种。',
      'IUCN全球评估日期为2014年1月21日，2015-2是发布批次，不能作为评估年份。',
      '2014年全球评估到2026年已经超过十年；IUCN在新评估发布前仍保留最近的LC记录。',
      'IUCN列为LC并把种群趋势记为unknown，没有可靠的全球成熟个体总数。',
    ],
    threats: [
      '部分地区为获取肉、皮或传统用途而猎捕土豚，影响程度缺少全范围统一数据',
      '农业扩张、深翻、采矿、道路和建设改变可挖土层，减少蚁类猎物并切断活动空间',
      '围栏阻挡夜间移动，错误网孔、松弛铁丝和电线还会造成缠绕或触电风险',
      '洞穴和觅食坑可能引发农牧业冲突，填洞、毒杀或直接迫害会造成局地死亡',
      '持续高温和干旱可减少猎物并造成能量赤字；现有生理证据来自少数南部非洲样地',
      '全球评估较旧且种群趋势未知，长期下降可能在缺少重复调查的地区被忽略',
    ],
    conservationActions: [
      '用重复相机、足迹、洞穴占用和标准化样线监测分布及趋势，并明确检出率',
      '保护连续的稀树草原、草地、灌丛与林地镶嵌，保留可挖土壤和蚁类猎物',
      '把活跃洞穴、觅食坑和周边补充洞纳入道路、采矿、建设及农地施工前调查',
      '在不增加盗猎风险的前提下保留废弃洞穴，为其他动物提供温湿度庇护',
      '与土地所有者试验摆动门、轮胎通道等野生动物友好围栏，并在当地验证效果',
      '与土地所有者共同处理洞穴造成的生产风险，用局部标记和绕行替代投毒或填埋',
      '执行当地狩猎法规并监测市场与传统利用，按地区证据确定管理强度',
      '把降雨、温度、猎物、体况和活动时间纳入长期研究，检验干旱影响能否跨地区重复',
    ],
    metrics: {
      adultLengthCm: [94, 142],
      adultMassKg: [40, 65],
      elevationM: [0, 3200],
    },
    featuredStats: [
      {
        key: 'global-iucn-status',
        label: 'IUCN全球等级',
        value: 'LC',
        unit: '无危',
        note: '2014年评估；全球种群趋势未知',
      },
      {
        key: 'head-body-length',
        label: '成体头体长',
        value: '94—142',
        unit: '厘米',
        note: '不含44至63厘米的尾',
      },
      {
        key: 'adult-mass',
        label: '成体体重',
        value: '40—65',
        unit: '千克',
        note: '当前分类处理采用的参考范围',
      },
      {
        key: 'burrow-users',
        label: '洞穴访客记录',
        value: '27',
        unit: '种脊椎动物',
        note: '南非三个样地；调查偏向哺乳类与夜行种',
      },
    ],
    media: {
      image: './images/species/aardvark/01-dusk-burrow-foraging.webp',
      alt: '暮色旱草地上，一只完整土豚在洞口旁低头贴近红土地面，长耳、管状吻和粗长尾清晰可见',
      focalPoint: { x: 0.61, y: 0.56 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/aardvark/02-full-body-diagnostic-profile.webp',
          alt: '夜间开阔地上，一只完整土豚侧身站立，长耳、管状吻、拱背、深色四肢和粗长尾清晰可见',
          title: '长耳、管吻与粗尾',
          caption:
            'AI生成科学情景重建；完整侧影呈现土豚的外形组合，近侧前足可读出四趾。普通照片不能替代来源和分类记录，也不能凭毛色判断年龄或性别。',
          focalPoint: { x: 0.51, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/aardvark/03-termite-mound-excavation.webp',
          alt: '夜间一只土豚用前足扒开红色土质丘壁，吻端贴近新开的洞口，松散土粒落在脚下',
          title: '前足扒开土质丘壁',
          caption:
            'AI生成科学情景重建；重叠前足不能用于逐趾计数，土粒也不能量化挖掘速度、力量或持续时间。画面无法确认丘内白蚁的种类和数量。',
          focalPoint: { x: 0.67, y: 0.57 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/aardvark/04-sticky-tongue-termite-feeding.webp',
          alt: '土豚头部与前足近景，单一细长粉色舌头从吻端伸入土质丘壁的小孔，近侧前足四趾清晰可见',
          title: '细长舌探入土孔',
          caption:
            'AI生成科学情景重建；近侧前足显示四趾，舌头连续伸入土孔。像素不能证明舌面黏性、伸出长度、摄食量或孔内猎物身份。',
          focalPoint: { x: 0.62, y: 0.59 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/aardvark/05-mother-single-juvenile.webp',
          alt: '暮色洞口旁，一只较小的幼年土豚跟在一只成体左后方，两只动物一同向右行走',
          title: '成体身后的单只幼体',
          caption:
            'AI生成科学情景重建；一大一小两只土豚表现成体与幼体同行。画面不能确认成年个体性别、实际亲子关系、幼体年龄、窝仔数或长期结伴。',
          focalPoint: { x: 0.59, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/aardvark/06-daytime-burrow-chamber-cutaway.webp',
          alt: '草地地表剖面下，一只土豚蜷卧在与斜向通道相连的宽阔土质洞室中',
          title: '白昼藏在地下洞室',
          caption:
            'AI生成科学剖面重建；地表、斜向通道与休息个体说明日间利用洞穴的概念。画面不能代表真实洞穴的深度、长度、入口数量、土层结构或连续使用时间。',
          focalPoint: { x: 0.68, y: 0.68 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: AARDVARK_SOURCES,
    featured: true,
    publishedAt: AARDVARK_CONTENT_DATE,
    updatedAt: AARDVARK_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
