import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const TORPEDO_TORPEDO_SOURCE_DATE = '2026-08-31' as const;

const TORPEDO_TORPEDO_CONTENT_DATE = '2026-08-31' as const;

const TORPEDO_TORPEDO_SOURCES = [
  {
    title: 'WoRMS: Torpedo torpedo (AphiaID 271691)',
    url: 'https://www.marinespecies.org/rest/AphiaRecordByAphiaID/271691',
    kind: 'taxonomy',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title: "Eschmeyer's Catalog of Fishes: Torpedo torpedo",
    url: 'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?tbl=species&genus=Torpedo&species=torpedo',
    kind: 'taxonomy',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title: 'Taiwan Fish Database: Torpedo torpedo Chinese names',
    url: 'https://fishdb.sinica.edu.tw/chi/chinesequer2.php?D1=&R1=&T1=&cn=&dere=asc&fm=&gc=&me=&orderby=is_accepted_name&page=49&pz=50&vn=',
    kind: 'taxonomy',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Torpedo torpedo assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T161397A124477382.en',
    kind: 'conservation',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List 2021-2: Table 7, status changes',
    url: 'https://nc.iucnredlist.org/redlist/content/attachment_files/2021-2_RL_Stats_Table_7.pdf',
    kind: 'conservation',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title: 'FAO: Sharks, Batoids and Chimaeras of the North Atlantic',
    url: 'https://www.fao.org/4/i3178e/i3178e.pdf',
    kind: 'distribution',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title:
      'FAO: Field Identification Guide to the Living Marine Resources of the Eastern and Southern Mediterranean',
    url: 'https://www.fao.org/4/i1276b/i1276b12.pdf',
    kind: 'general',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title: 'FAO: Atlas of the Maturity Stages of Mediterranean Fishery Resources',
    url: 'https://www.fao.org/3/ca2740en/ca2740en.pdf',
    kind: 'distribution',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title:
      'IUCN: Identification Guide of Vulnerable Species Incidentally Caught in Mediterranean Fisheries',
    url: 'https://portals.iucn.org/library/sites/library/files/documents/2019-050-En.pdf',
    kind: 'general',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title:
      'First records of the West African torpedo in Cabo Verde Archipelago, eastern Atlantic',
    url: 'https://www.cambridge.org/core/journals/oryx/article/first-records-of-the-west-african-torpedo-in-cabo-verde-archipelago-eastern-atlantic/2F4DD22111191A25BEBB18CF9168EC97',
    kind: 'distribution',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title:
      'Comparative study on the reproductive biology of Torpedo torpedo and T. marmorata in the central Mediterranean Sea',
    url: 'https://doi.org/10.3989/scimar.2007.71n2213',
    kind: 'ecology',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title: 'Biological aspects of the common torpedo in the central Mediterranean Sea',
    url: 'https://doi.org/10.1080/24750263.2019.1696419',
    kind: 'ecology',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title:
      'Observations on the biology of the common torpedo and marbled electric ray from Egyptian Mediterranean waters',
    url: 'https://doi.org/10.1071/MF9940693',
    kind: 'ecology',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title: 'Reproductive biology of the common torpedo from the coast of Senegal',
    url: 'https://raco.cat/index.php/Mzoologica/article/view/90040',
    kind: 'ecology',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title:
      'Maturity, reproductive cycle and fecundity of common torpedo from the Lagoon of Bizerte',
    url: 'https://doi.org/10.1134/S0032945213060118',
    kind: 'ecology',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title: 'Observations on feeding, growth and electric discharge of newborn Torpedo ocellata',
    url: 'https://doi.org/10.1111/j.1095-8649.1979.tb03579.x',
    kind: 'ecology',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title: 'An unusual nine-ocellated common torpedo from southern France',
    url: 'https://acta.izor.hr/ojs/index.php/acta/article/view/182',
    kind: 'ecology',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title:
      'I Like This New Me: Population structure and taxonomic uncertainties in Mediterranean electric rays',
    url: 'https://doi.org/10.3390/ani13182899',
    kind: 'taxonomy',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title: 'Integrated genomics and proteomics of the Torpedo californica electric organ',
    url: 'https://doi.org/10.1186/2044-5040-1-20',
    kind: 'ecology',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title: 'Electric organ development in Torpedo marmorata',
    url: 'https://doi.org/10.1016/0012-1606(78)90307-X',
    kind: 'ecology',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title: 'The electrophysiology of electric organs of marine electric fishes',
    url: 'https://doi.org/10.1085/jgp.44.4.757',
    kind: 'ecology',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title: 'Regulation of perhydrohistrionicotoxin binding to Torpedo ocellata electroplax',
    url: 'https://doi.org/10.1016/S0021-9258(19)69691-2',
    kind: 'ecology',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title:
      'Reduction of by-catch and discards in the Algarve small-scale coastal fishery using a guarded trammel net',
    url: 'https://doi.org/10.3989/scimar.04734.16B',
    kind: 'conservation',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
  {
    title:
      'Overfishing drives over one-third of all sharks and rays toward a global extinction crisis',
    url: 'https://doi.org/10.1016/j.cub.2021.08.062',
    kind: 'conservation',
    accessedAt: TORPEDO_TORPEDO_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-torpedo-torpedo',
    slug: 'ocellate-torpedo',
    names: {
      zh: '眼斑电鳐',
      en: 'Ocellate Torpedo',
      aliases: ['Common Torpedo', '电鳐', '电鲼', '普通电鳐'],
    },
    scientificName: 'Torpedo torpedo',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Chondrichthyes', '软骨鱼纲'),
      taxon('Torpediniformes', '电鳐目'),
      taxon('Torpedinidae', '电鳐科'),
      taxon('Torpedo', '电鳐属'),
    ),
    conservation: conservation('VU', 'decreasing', 2020, 'A2bd'),
    distribution: {
      realms: ['marine'],
      continents: ['欧洲', '非洲', '亚洲'],
      regions: [
        '比斯开湾南部、伊比利亚半岛与邻近东大西洋',
        '地中海及马尔马拉海',
        '西非东大西洋沿岸至安哥拉',
        '佛得角与圣多美和普林西比近海',
      ],
      countries: [
        '法国',
        '西班牙',
        '葡萄牙',
        '意大利',
        '马耳他',
        '斯洛文尼亚',
        '克罗地亚',
        '黑山',
        '阿尔巴尼亚',
        '希腊',
        '塞浦路斯',
        '土耳其',
        '叙利亚',
        '黎巴嫩',
        '以色列',
        '埃及',
        '利比亚',
        '突尼斯',
        '阿尔及利亚',
        '摩洛哥',
        '毛里塔尼亚',
        '塞内加尔',
        '佛得角',
        '几内亚比绍',
        '几内亚',
        '塞拉利昂',
        '利比里亚',
        '科特迪瓦',
        '加纳',
        '贝宁',
        '尼日利亚',
        '喀麦隆',
        '赤道几内亚',
        '圣多美和普林西比',
        '加蓬',
        '刚果共和国',
        '安哥拉',
      ],
      range:
        '传统分类口径下分布于地中海、马尔马拉海和东大西洋，从比斯开湾南部沿伊比利亚及西非海岸至安哥拉，并有佛得角、圣多美和普林西比记录；不纳入黑海、红海、印度洋、西大西洋或南非。所列国家是代表性范围，不能表示各海区密度。2023 年线粒体研究提示地中海外记录可能包含尚待厘清的隐蔽谱系。',
      center: { lat: 28, lng: -5 },
    },
    habitats: [
      {
        name: '近岸沙泥软底',
        realm: 'marine',
        description:
          '内陆架浅水沙底和泥底是核心生境，个体可把胸鳍盘半埋在沉积物中伏击小鱼；FAO 指南给出的核心范围约为 5 至 70 或 100 米。',
        isPrimary: true,
      },
      {
        name: '沙石混合底与海草床边缘',
        realm: 'marine',
        description:
          '西西里 4 至 25 米三层刺网样本来自沙底、混合底和邻近 Posidonia oceanica 海草床；这是局地利用记录，不能扩大为全范围主要生境。',
      },
      {
        name: '大陆架较深软底',
        realm: 'marine',
        description:
          '较宽资料偶有核心浅层以外、最深约 400 米的底栖记录；这个发生深度不是典型水深，也不是主动潜水能力。',
      },
    ],
    measurements: {
      length: {
        max: 0.6,
        unit: 'm',
        note:
          'FAO 指南汇编的最大总长约 60 厘米，不代表通常体长；常见总长约 30 至 40 厘米，区域样本最大值也有差异',
      },
    },
    diet: {
      types: ['carnivore', 'piscivore'],
      foods: [
        '底栖与近底层小型鱼类',
        '虾虎鱼、鲽形鱼等区域样本猎物',
        '甲壳类及其他少量底栖无脊椎动物',
      ],
      description:
        '眼斑电鳐以鱼类为主，是伏在软底等待猎物的广食性鱼食者。西西里样本检出多种底栖和近底层鱼；埃及与突尼斯资料显示它也会取食甲壳类等次要食物，因此不能写成只吃鱼，现有证据也不足以给出全范围固定比例。',
    },
    activity: [
      '伏在或半埋于沙泥底等待猎物',
      '从沉积物中冲出并把小鱼压在胸鳍盘下',
      '用胸鳍盘内成对电器官产生放电，参与捕食与防御',
      '主要以粗壮尾部和尾鳍推进',
      '全范围昼夜节律与社会性尚未量化',
    ],
    tags: [
      '软骨鱼纲',
      '电鳐目',
      '东大西洋',
      '地中海',
      '海洋底栖',
      '沙泥软底',
      '电器官',
      '鱼食性',
      '无胎盘胎生',
      'IUCN 易危',
      '渔业兼捕',
    ],
    summary:
      '眼斑电鳐常把圆厚身体半埋进地中海与东大西洋的浅层沙泥底。它通常带五枚蓝心眼斑，并能用胸鳍盘内的成对电器官伏击小鱼。',
    description:
      '眼斑电鳐是电鳐科的海洋软骨鱼，具有近圆厚实的胸鳍盘、短粗尾部、两个背鳍和发达尾鳍。背面通常有五枚带蓝色中心的环纹眼斑，但已发表个体可少于或多于五枚；这些眼斑并不是真正的眼睛。它主要生活在浅层沙泥软底，会半埋等待并以鱼类为主食，也摄食甲壳类等无脊椎动物。头部两侧皮下各有一枚电器官；以旧异名 Torpedo ocellata 发表的圈养幼体研究显示，放电能力在出生后数月增强，但水下放电没有可见闪电。它无胎盘胎生，成熟体长、妊娠期和胎仔数在地中海与西非样本间不同。IUCN 按 2020 年全球评估列为易危且趋势下降，标准 A2bd；底拖网和缠刺网兼捕是主要压力。',
    storySections: [
      {
        key: 'five-ocelli-usually',
        label: '眼斑辨识',
        title: '通常五枚蓝心眼斑，数量也会变化',
        body: '黄褐色圆盘上通常排着五枚蓝心眼斑，每枚外缘还有深色与浅黄色环。2006 年形态论文汇总了零至九枚的个体。五枚最能呈现典型外观，却不是物种固定计数；这些平面色素斑也不是真眼，真正的眼位于头部背面，后方紧邻喷水孔。',
      },
      {
        key: 'electric-organs-under-disc',
        label: '电器官',
        title: '两枚电器官藏在圆盘里',
        body: '头部两侧皮下各有一枚近肾形电器官，正常外观只见完整皮肤。电鳐属和近缘电鳐研究显示，肌源性扁平电细胞成列排列，胆碱能神经让许多细胞同步去极化。目标种旧异名材料直接确认了烟碱型乙酰胆碱受体；精细发育和排列仍来自近缘种，不能把那些细胞数或器官比例移植到本种。',
      },
      {
        key: 'voltage-after-birth',
        label: '放电发育',
        title: '出生第一天已经放电，随后数月继续增强',
        body: '以 Torpedo ocellata 发表的目标种实验测得，圈养新生个体日龄约一天时放电约 4 伏，前三周升到约 20 伏，四个月时趋近 26 伏。这是幼体早期发育实验，不代表成年峰值或野外致伤阈值，也不能与指南的 40 至 200 伏汇编范围拼成完整生长曲线。',
      },
      {
        key: 'ambush-beneath-sand',
        label: '埋沙伏击',
        title: '在沙底伏击并控制小鱼',
        body: '圈养新生个体会从沙中冲出，把活鱼压在胸鳍盘下，再用身体动作把猎物导向腹面的口。胃含物研究显示鱼类是主要食物，但一些区域样本也检出甲壳类和其他底栖无脊椎动物。电放电在水下没有可见光。',
      },
      {
        key: 'regional-reproduction',
        label: '区域繁殖',
        title: '繁殖数据随海区和样本变化',
        body: '本种为无胎盘胎生，胚胎先依赖卵黄，西非干重平衡还提示可能有有限母体补给。拉齐奥样本推定妊娠约六个月、每胎实测 4 至 19 个胚胎；塞内加尔样本为六至八个月，广义繁殖力 5 至 28。埃及与比塞大潟湖的成熟体长也各不相同，因此这些值都必须保留地点和样本边界。',
      },
      {
        key: 'vulnerable-bycatch',
        label: '兼捕压力',
        title: '兼捕记录需要区分物种',
        body: 'IUCN 在 2020 年把眼斑电鳐评为易危且趋势下降，标准 A2bd 依据适合该类群的丰度指数和开发水平推断过去种群缩减；2021-2 只是发布批次。底拖网、刺网和三层刺网会兼捕这种浅层底栖鱼，丢弃记录又常合并成 Torpedo spp.。记录到种、统一努力量并研究释放后存活，才能改善下一次评估。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的 Raja torpedo 与旧名材料',
        body: '1758 年，林奈以 Raja torpedo 命名眼斑电鳐，后来它被归入电鳐属，成为 Torpedo torpedo。旧异名 Torpedo ocellata 下的圈养幼体实验，也属于研究本种的历史资料。中文名“眼斑”对应背部的蓝心环纹，这些色斑通常五枚，也可能更多或更少。',
      },
    ],
    keyFacts: [
      '接受学名为 Torpedo torpedo，原始组合是 Raja torpedo。',
      '英文主名采用 Ocellate Torpedo，Common Torpedo 只作别名。',
      '中文常用名有“眼斑电鳐”“电鳐”和“电鲼”。',
      '分类属于软骨鱼纲、电鳐目、电鳐科、电鳐属。',
      '传统范围是地中海、马尔马拉海和比斯开湾南部至安哥拉的东大西洋。',
      '黑海、红海、印度洋、西大西洋和南非的同名记录不在已核实的本种核心范围内。',
      '主要生活在内陆架浅水沙底与泥底，FAO 核心范围约为 5 至 70 或 100 米。',
      '约 400 米是较宽发生资料的边界，不是最大潜水指标。',
      '胸鳍盘厚实且近圆，尾部短粗，有两个背鳍和发达尾鳍。',
      '口、鼻孔和五对鳃裂位于腹面，眼与喷水孔位于背面。',
      '皮肤光滑，没有鳞、棘或黄貂鱼式尾刺。',
      '喷水孔边缘有短小乳突，较大个体可能不醒目。',
      '背面通常有五枚蓝心眼斑，外缘带深色和浅黄色环。',
      '2006 年论文汇总过零至九枚眼斑的个体，五枚不是固定计数。',
      '60 厘米是 FAO 汇编最大总长，30 至 40 厘米才是常见总长。',
      '以底栖与近底层鱼类为主食，也会取食甲壳类等无脊椎动物。',
      '西西里胃含物样本的 Levins 指数为 0.82，只代表当地样本。',
      '圈养新生个体会从沙中冲出，把活鱼压在胸鳍盘下。',
      '现有目标种证据不足以把它写成全范围固定夜行。',
      '成对近肾形电器官位于胸鳍盘内部、头部两侧。',
      '目标种旧异名材料直接确认电器官膜含烟碱型乙酰胆碱受体。',
      '电细胞发育与串并联细节主要来自近缘电鳐，必须标注证据层级。',
      '圈养新生个体约一天时放电约 4 伏，四个月时趋近约 26 伏。',
      'FAO 的 40 至 200 伏是指南汇编范围，不是每尾成体的固定输出。',
      '电放电在水下没有可见光。',
      '本种无胎盘胎生，不产海床卵囊。',
      '拉齐奥样本推定妊娠约六个月，每胎实测 4 至 19 个胚胎。',
      '塞内加尔样本推定妊娠六至八个月，出生总长 102 至 125 毫米。',
      '成熟体长随地区研究而异，尚无统一全球数值。',
      'IUCN 当前为 VU、decreasing，实际评估年 2020，标准 A2bd。',
      '旧版 DD 和较早区域状态不能覆盖当前全球评估。',
      '底拖网、刺网和三层刺网兼捕是已记录压力。',
      '一项改网实验只捕到一尾本种，不能证明物种级减捕效果。',
      '形态初判可能混淆近缘电鳐，渔获记录需要凭证与分子复核。',
    ],
    threats: [
      '底拖网、刺网、三层刺网及其他底层渔具在浅层软底造成兼捕',
      '丢弃和 Torpedo spp. 合并记录使种级死亡率与趋势被低估',
      '浅水繁殖、产仔和幼体利用区与高强度沿岸渔业重叠',
      '生活史地区差异大，成熟体长、世代长度和释放后存活资料不足',
      '形态误认会把近缘电鳐渔获和监测数据混入本种',
    ],
    conservationActions: [
      '把渔获和丢弃记录到种，并保存照片、组织或凭证供形态与分子复核',
      '统一记录努力量、渔具、地点、深度、体长、性别和船边状态',
      '开展电鳐安全释放及释放后存活实验，避免徒手抓握胸鳍盘',
      '识别浅层软底繁殖与幼体利用区，测试有时空边界的减缓措施',
      '在底拖网和三层刺网渔业中继续测试改网，同时保留目标种样本量',
      '分别监测地中海与西非趋势，并用 2020 年评估后的新资料支持重评',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'iucn-status',
        label: 'IUCN',
        value: 'VU',
        note: '2020 年全球评估为易危、趋势下降，标准 A2bd；2021-2 是发布批次',
      },
      {
        key: 'typical-ocelli',
        label: '典型背部眼斑',
        value: '5',
        unit: '枚',
        note: '典型型态；2006 年论文汇总过零至九枚，斑数并不固定',
      },
      {
        key: 'compiled-maximum-length',
        label: '汇编最大总长',
        value: '60',
        unit: '厘米',
        note: 'FAO 指南最大值；常见总长约 30 至 40 厘米',
      },
      {
        key: 'captive-neonate-discharge',
        label: '幼体放电发育',
        value: '4 → 26',
        unit: '伏',
        note: '圈养目标种旧异名样本从日龄约一天至四个月；不代表成年输出',
      },
    ],
    media: {
      image:
        './images/species/ocellate-torpedo/01-mediterranean-soft-bottom-portrait.webp',
      alt: '浅蓝绿色海水下，一条黄褐色眼斑电鳐完整伏在沙泥海床，近圆厚盘上有五枚蓝心环纹眼斑',
      focalPoint: { x: 0.56, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/ocellate-torpedo/02-five-ocelli-diagnostic-dorsal.webp',
          alt: '从斜上方看，一条完整眼斑电鳐伏在浅色沙底，背部五枚蓝心眼斑、近圆厚盘、粗壮尾部和两枚背鳍可见',
          title: '典型五眼斑与厚圆盘',
          caption:
            'AI生成科学情景重建；五枚是常见型，不是物种固定计数，眼斑也不是真眼。生成像素不能核定喷水孔乳突数、体尺、性别、年龄、地点或标本身份。',
          focalPoint: { x: 0.5, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/ocellate-torpedo/03-sand-burial-resting.webp',
          alt: '广阔沙泥海床上，一条眼斑电鳐的盘缘埋在薄沙下，中央背面、头部开口和完整尾部仍露出',
          title: '软底中的半掩埋状态',
          caption:
            'AI生成科学情景重建；沉积物遮住部分斑纹，画面不能据此计数眼斑，也不能判断埋沙方式、掩埋时长、昼夜、猎物、水深、地点或检出率。',
          focalPoint: { x: 0.64, y: 0.67 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/ocellate-torpedo/04-ventral-electric-organs.webp',
          alt: '一条游动电鳐露出乳白腹面，弧形口部、成对短鳃裂行和头部两侧对称的浅色蜂巢纹区域可见',
          title: '头部两侧的电器官区域',
          caption:
            '腹面电器官区域是AI生成科学教育概念重建，浅色纹理只示意完整皮肤下成对器官的位置，不是解剖标本。像素不能核定鳃裂、电细胞或柱数，也不能提供计数、器官质量、电压、电流或放电时点。',
          focalPoint: { x: 0.5, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/ocellate-torpedo/05-small-fish-prey-encounter.webp',
          alt: '浅层沙泥底上，一尾完整眼斑电鳐与一尾完整小鱼隔着清楚水隙相对',
          title: '小鱼附近的伏击者',
          caption:
            'AI生成科学情景重建；一尾电鳐与一尾完整小鱼的接近只显示相对位置，不能证明猎物选择、追逐、放电、捕获、摄食成功或食谱比例；水中没有可见电光。',
          focalPoint: { x: 0.62, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/ocellate-torpedo/06-noncontact-visual-survey.webp',
          alt: '一名潜水员保持距离，在数个体长外拍摄沙底上的一条完整眼斑电鳐，人与动物之间留有开阔水域',
          title: '保持距离的影像记录',
          caption:
            'AI生成科学监测情景重建；远距离拍摄只表达非接触记录方式，不代表真实样点或个体，也不能证明检出、占域、丰度、种群趋势、调查结果或保护成效。',
          focalPoint: { x: 0.69, y: 0.72 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...TORPEDO_TORPEDO_SOURCES,
      {
        title: 'GBIF: Torpedo torpedo (Linnaeus, 1758) nomenclatural record',
        url: 'https://www.gbif.org/species/5215534',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: TORPEDO_TORPEDO_CONTENT_DATE,
    updatedAt: TORPEDO_TORPEDO_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
