import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const GOLIATH_BIRDEATER_SOURCE_DATE = '2026-08-28' as const;

const GOLIATH_BIRDEATER_CONTENT_DATE = '2026-08-28' as const;

const GOLIATH_BIRDEATER_SOURCES = [
  {
    title: 'World Spider Catalog — Theraphosa blondi (Latreille, 1804)',
    url: 'https://wsc.nmbe.ch/lsid/urn:lsid:nmbe.ch:spidersp:002488',
    kind: 'taxonomy',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'World Spider Catalog — genus Theraphosa Walckenaer, 1805',
    url: 'https://www.wsc.nmbe.ch/genus-catalog/3612/Theraphosa',
    kind: 'taxonomy',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'ITIS — Theraphosa blondi, TSN 868632',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=868632',
    kind: 'taxonomy',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'GBIF Backbone Taxonomy — Theraphosa blondi, species key 5170451',
    url: 'https://www.gbif.org/species/5170451',
    kind: 'taxonomy',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List search — Theraphosa blondi (no assessment returned)',
    url: 'https://www.iucnredlist.org/search?query=Theraphosa%20blondi&searchType=species',
    kind: 'conservation',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: "Smithsonian's National Zoo — Goliath bird-eating tarantula",
    url: 'https://nationalzoo.si.edu/animals/goliath-bird-eating-tarantula',
    kind: 'general',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Natural History Museum — The world’s most extreme spiders',
    url: 'https://www.nhm.ac.uk/discover/the-worlds-most-extreme-spiders.html',
    kind: 'general',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title:
      'Mammola et al. 2017 — Record breaking achievements by spiders and the scientists who study them',
    url: 'https://doi.org/10.7717/peerj.3972',
    kind: 'general',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Guinness World Records — Heaviest arachnid',
    url: 'https://www.guinnessworldrecords.com/world-records/498536-heaviest-arachnid',
    kind: 'general',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Marshall & Uetz 1990 — Incorporation of urticating hairs into silk',
    url: 'https://www.americanarachnology.org/journal-joa/joa-all-volumes/detail/article/download/JoA_v18_p143.pdf/?no_cache=1',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title:
      'Marshall, Thoms & Uetz 1995 — Setal entanglement and stridulation in Theraphosa blondi',
    url: 'https://doi.org/10.1111/j.1469-7998.1995.tb01770.x',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title:
      'Bertani & Guadanucci 2013 — Morphology and evolution of urticating setae in theraphosids',
    url: 'https://doi.org/10.1590/S1984-46702013000400006',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Kaderka et al. 2019 — Urticating setae of Theraphosinae',
    url: 'https://doi.org/10.1371/journal.pone.0224384',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Fontana et al. 2002 — Neuromuscular activity of Theraphosa blondi venom',
    url: 'https://doi.org/10.1590/S0104-79302002000200010',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title:
      'Ebbinghaus et al. 2004 — Modulation of Kv4.2 channels by Theraphosa blondi venom peptides',
    url: 'https://doi.org/10.1016/j.toxicon.2003.12.012',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Menin et al. 2005 — Predation on amphibians by spiders in the Neotropical region',
    url: 'https://doi.org/10.11606/issn.2316-9079.v4i1p39-47',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title:
      'Bilce et al. 2021 — Predation on juvenile Drymoluber dichrous by Theraphosa blondi',
    url: 'https://www.biotaxa.org/hn/article/view/62475',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title:
      'Carvalho et al. 2016 — Opportunistic predation on a Common Scale-backed Antbird',
    url: 'https://doi.org/10.1080/01650521.2016.1237802',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Marshall et al. 2022 — Searching the web builds fuller picture of arachnid trade',
    url: 'https://doi.org/10.1038/s42003-022-03374-0',
    kind: 'conservation',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'GBIF Species Match API — Theraphosa blondi accepted backbone match',
    url: 'https://api.gbif.org/v1/species/match?name=Theraphosa%20blondi',
    kind: 'taxonomy',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-theraphosa-blondi',
    slug: 'goliath-birdeater',
    names: {
      zh: '巨人捕鸟蛛',
      en: 'Goliath Birdeater',
      aliases: [
        '歌利亚捕鸟蛛',
        'Goliath Bird-eating Tarantula',
        'Goliath Tarantula',
        'Theraphosa leblondi',
      ],
    },
    scientificName: 'Theraphosa blondi',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Arachnida', '蛛形纲'),
      taxon('Araneae', '蜘蛛目'),
      taxon('Theraphosidae', '捕鸟蛛科'),
      taxon('Theraphosa', '巨人捕鸟蛛属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['南美洲'],
      regions: [
        '委内瑞拉南部',
        '巴西北部',
        '圭亚那',
        '法属圭亚那',
      ],
      countries: ['委内瑞拉', '巴西', '圭亚那', '法国'],
      range:
        '南美洲北部圭亚那地盾与北亚马孙的湿润低地森林。WSC（World Spider Catalog）当前明确列出委内瑞拉、巴西和圭亚那；法属圭亚那有物种级野外研究，苏里南见于史密森尼范围概括，但后者需防范同属种误鉴。法国境内的范围仅指法属圭亚那。',
      center: { lat: 4.5, lng: -59 },
    },
    habitats: [
      {
        name: '低地湿润常绿林地表与穴居系统',
        realm: 'terrestrial',
        description:
          '圭亚那地盾和北亚马孙高湿、遮荫的森林地表；个体以衬丝土穴为避难、蜕皮和洞口伏击中心。',
        isPrimary: true,
      },
      {
        name: '树根、岩石和倒木下的衬丝土穴',
        realm: 'terrestrial',
        description:
          '洞穴常借树根、岩石或倒木获得稳定结构，蛛丝主要衬在洞内和洞口，不形成圆形捕虫网。',
      },
      {
        name: '厚落叶层与腐木斑块',
        realm: 'terrestrial',
        description: '潮湿落叶、根系和朽木构成洞口外短距离的夜间感知与伏击界面。',
      },
      {
        name: '湿洼地与季节性饱和森林土壤',
        realm: 'terrestrial',
        description:
          '部分范围概括提到潮湿、近沼泽的林下微地形；这不表示本种水生、半水生或专栖开阔沼泽。',
      },
    ],
    measurements: {
      length: {
        max: 12,
        unit: 'cm',
        note: '机构资料的身体长度上限，不含步足；不是腿展或普通成体均值。',
      },
      weight: {
        max: 170,
        unit: 'g',
        note: 'Guinness 正文记录的一只两岁圈养个体于 1998 年 2 月称得 170 克；页面未公开原始称量报告、性别、误差和称量时活体状态，不代表野外或典型成体上限。',
      },
    },
    diet: {
      types: ['carnivore', 'insectivore'],
      foods: [
        '大型昆虫及其他陆生节肢动物',
        '蚯蚓等软体无脊椎动物',
        '蛙类与小型蛇类等机会性脊椎动物',
      ],
      description:
        '在洞口和森林地表伏击活动猎物。自然史记录支持以无脊椎动物为常见食物，也记录到蛙类和小蛇；鸟类记录属于雾网困鸟事件，不能据此把鸟列为常规食物。',
    },
    activity: ['主要夜行', '穴居', '洞口伏击', '独居', '非结网捕食'],
    tags: [
      '可能是质量最大的蜘蛛',
      '穴居捕鸟蛛',
      '主要夜行',
      '防御性刚毛',
      'IUCN 未评估',
      '种群趋势未知',
    ],
    summary:
      '巨人捕鸟蛛生活在南美洲北部湿润雨林的土穴中，夜间伏击无脊椎动物，也会取食小型脊椎动物。受压时，它可扬起腹部刚毛、摩擦发声或咬击。',
    description:
      '巨人捕鸟蛛是捕鸟蛛科巨人捕鸟蛛属的模式种，分布核心位于圭亚那地盾和北亚马孙湿润低地森林。它身体可达约 12 厘米、腿展约 28 厘米；常被引用的 170 克来自 Guinness 正文记录的一只两岁圈养个体，不能代表野外常态。个体多在衬丝土穴内外夜间伏击无脊椎动物，也会机会性取食蛙和小蛇；已知捕鸟记录涉及先被雾网困住的鸟。受压时，它可用触肢与前足的特化刚毛摩擦发声，并以后足扬起另一套腹部带倒刺防御刚毛，而不是把毛射出。毒液在离体实验中具有神经活性，但没有物种级临床证据支持“致命剧毒”。IUCN 尚未评估本种，CITES 当期附录也未收录，全球种群趋势仍未知。',
    storySections: [
      {
        key: 'mass-record-boundary',
        label: '体型与纪录',
        title: '170 克纪录来自一只圈养个体',
        body: '机构资料给出巨人捕鸟蛛身体最长约 12 厘米、腿展最大约 28 厘米。吉尼斯另记录一只两岁圈养个体重 170 克，但未公开原始称量报告、性别或称量时的活体状态。这些是不同量法和个体的纪录，不能当作每只成蛛的典型值。',
      },
      {
        key: 'burrow-vibration-night',
        label: '穴居与感知',
        title: '靠振动与感觉毛在洞口伏击',
        body: '巨人捕鸟蛛把蛛丝铺在湿润土穴内外，不织圆网。夜间的地面振动和空气扰动由足和体表感觉毛接收，有限视觉只提供部分信息。它多在洞口短距离伏击，而不是在森林里长途追赶猎物。',
      },
      {
        key: 'prey-not-birds',
        label: '食性与俗名',
        title: '以无脊椎动物为常见食物',
        body: '无脊椎动物构成可确认的常见猎物，蛙和小蛇记录显示它也会利用机会性脊椎动物。一只蚁鸟被取食前已困在研究雾网中；这条记录解释了大型蛛能处理鸟，却不能证明它经常主动捕鸟。',
      },
      {
        key: 'setae-sound-venom',
        label: '防御机制',
        title: '后足扬毛、刚毛摩擦和最后的咬击',
        body: '受压时，它可抬起前足，让触肢与前足的特化刚毛相互摩擦产生嘶声；也可用后足擦过腹部，扬起另一套第三型带倒刺防御刚毛。两者不是同一种刚毛，腹部刚毛也不是被“射出”。毒液在小鼠离体组织和离子通道实验中有活性，但这些结果不能转换成人类致死结论。',
      },
      {
        key: 'egg-sac-and-growth',
        label: '繁殖与发育',
        title: '一只封闭卵囊，裹着母蛛的刚毛',
        body: '雌蛛在洞内制作丝质卵囊，并把腹部刚毛掺入外层。圈养观察记录守护约 11 周，幼蛛再经反复蜕皮生长；卵数、孵化时间和寿命都受性别与饲养条件影响，不能当作野外固定日程。',
      },
      {
        key: 'unknown-status',
        label: '保护与证据缺口',
        title: '未评估不是无风险',
        body: 'IUCN 没有本种评估，CITES 当期附录也没有本种条目，全球趋势仍未知。凭证标本可帮助确认分布，重复洞穴调查可判断占用变化，贸易来源和人工繁殖记录也需要可追溯。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1804 年的命名与“捕鸟”记录',
        body: '巨人捕鸟蛛的科学命名记录署名为 Latreille，年份为 1804 年，现用学名为 Theraphosa blondi，它也是该属的模式种。名称包含“捕鸟”，已知的一次蚁鸟取食事件中，鸟先被研究雾网困住。自然史记录仍以无脊椎动物为常见猎物，不能由名字推断日常食谱。',
      },
    ],
    keyFacts: [
      'World Spider Catalog 接受 Theraphosa blondi，并把它列为巨人捕鸟蛛属模式种。',
      '身体长度最高约 12 厘米，机构资料腿展最高约 28 厘米；两者使用不同量法。',
      '170 克只是一只两岁圈养个体的 Guinness 纪录，原始称量报告和活体状态未公开，不能代表野外或典型成年质量。',
      '日常食物以陆生无脊椎动物为主；已知捕鸟记录中的鸟先困在雾网中，不代表经常主动捕鸟。',
      '触肢与前足的特化刚毛负责摩擦发声；后足擦过腹部扬起另一套第三型带倒刺防御刚毛，不是把毛射出。',
      'IUCN 尚未评估本种，CITES 当期附录也未收录；全球种群趋势未知。',
    ],
    threats: [
      '低地湿润森林转化和破碎化可能减少高湿林下开穴微生境，但没有本种尺度的损失比例',
      '宠物市场中的野采与来源不透明值得监测，现有研究没有给出本种野采量或种群效应',
      '大型、寿命长且穴居的个体可能容易被定点采集，但全球采集率未知',
      '巨人捕鸟蛛属物种误鉴会污染贸易、馆藏和分布记录',
      '道路、矿业或林地开发可能改变土壤湿度、根系和洞穴稳定性，物种级暴露程度未知',
      '气候变化可能改变林下湿度和降雨季节性，尚无物种级响应模型',
    ],
    conservationActions: [
      '在分布核心开展有凭证标本支持的标准化洞穴和夜间样线调查',
      '同步记录搜索时间、未检出、性别、发育阶段、洞穴占用和季节',
      '结合成体形态、刚毛分布和必要的分子证据区分巨人捕鸟蛛属近似种',
      '保护连续湿润林下层、粗大根系、倒木和稳定土壤',
      '保存贸易个体的合法来源、繁殖代次、亲本来源和鉴定凭证',
      '公开范围边缘与历史记录的凭证图像或标本号，清理误鉴记录',
      '以确认物种的病例记录补足刚毛接触和咬伤临床证据',
      '定期复核 IUCN、CITES、分布、贸易和种群资料，不把未评估当成低风险',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'body-length-upper',
        label: '身体长度资料上限',
        value: '约 12',
        unit: '厘米',
        note: '史密森尼机构概括，不含步足；不是普通成体均值。',
      },
      {
        key: 'reported-leg-span',
        label: '腿展资料上限',
        value: '约 28',
        unit: '厘米',
        note: '完全伸展步足的跨度；不是身体长度，也不是无争议的蜘蛛腿展世界纪录。',
      },
      {
        key: 'captive-record-mass',
        label: '圈养个体报告质量',
        value: '170',
        unit: '克',
        note: 'Guinness 的两岁圈养个体纪录；原始称量报告、性别和活体状态未公开，不是野外或典型质量。',
      },
      {
        key: 'female-captive-longevity',
        label: '雌蛛圈养寿命概括',
        value: '可达 20',
        unit: '年',
        note: '动物园人类照护资料；雄蛛约 3 至 6 年，不能据此推断野外平均寿命。',
      },
    ],
    media: {
      image: './images/species/goliath-birdeater/01-burrow-entrance-portrait.webp',
      alt: '湿润雨林树根下，一只完整成年雌性巨人捕鸟蛛停在衬丝土穴入口右侧',
      focalPoint: { x: 0.68, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/goliath-birdeater/02-eye-cluster-and-pedipalps.webp',
          alt: '一只巨人捕鸟蛛的低角度近景，紧凑眼簇位于头胸部前方，两只较短触肢分列向下螯肢两侧',
          title: '紧凑眼簇与两只触肢',
          caption: '形态重建展示眼簇、触肢和螯肢的相对位置；它不代表视力测试或指定个体。',
          focalPoint: { x: 0.5, y: 0.48 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/goliath-birdeater/03-nocturnal-invertebrate-approach.webp',
          alt: '夜间一只完整巨人捕鸟蛛在洞口等待一只接近的地栖昆虫，双方尚未接触',
          title: '洞口的夜间伏击',
          caption: '画面选择无脊椎动物作为常见猎物代表，不提供自然食谱比例或真实捕食结果。',
          focalPoint: { x: 0.56, y: 0.6 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/goliath-birdeater/04-defensive-stridulation-posture.webp',
          alt: '一只完整巨人捕鸟蛛在洞口旁抬起前足作警戒姿态，没有接触者、文字或飞扬刚毛',
          title: '警戒姿态与刚毛摩擦',
          caption: '静态画面重建可伴随摩擦发声的姿态；它没有记录声音、咬击或刚毛释放结果。',
          focalPoint: { x: 0.5, y: 0.57 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image: './images/species/goliath-birdeater/05-female-guarding-egg-sac.webp',
          alt: '衬丝土穴内一只完整成年雌性巨人捕鸟蛛守在一个封闭球形丝质卵囊旁',
          title: '洞内守护卵囊',
          caption: '卵囊表层可掺入腹部刚毛；画面不提供卵数、发育阶段、孵化率或野外时长。',
          focalPoint: { x: 0.52, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image: './images/species/goliath-birdeater/06-noninvasive-burrow-survey.webp',
          alt: '夜间一只完整巨人捕鸟蛛位于洞口前景，两名研究者在数米外以低亮红光观察和记录',
          title: '保持距离的洞穴调查',
          caption: '代表性非接触调查重建；单次访问不能确定占用率、数量或种群趋势。',
          focalPoint: { x: 0.4, y: 0.65 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: GOLIATH_BIRDEATER_SOURCES,
    featured: true,
    publishedAt: GOLIATH_BIRDEATER_CONTENT_DATE,
    updatedAt: GOLIATH_BIRDEATER_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
