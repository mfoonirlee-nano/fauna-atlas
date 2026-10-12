import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const EMPEROR_SCORPION_SOURCE_DATE = '2026-09-01' as const;

const EMPEROR_SCORPION_CONTENT_DATE = '2026-09-01' as const;

const EMPEROR_SCORPION_SOURCES = [
  {
    title: 'C. L. Koch 1841 — Original description of Buthus imperator in Die Arachniden',
    url: 'https://doi.org/10.5962/bhl.title.43744',
    kind: 'taxonomy',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title:
      'Prendini 2016 — Redefinition and Systematic Revision of the East African Scorpion Genus Pandinoides (Scorpiones: Scorpionidae) With Critique of the Taxonomy of Pandinus, Sensu Lato',
    url: 'https://doi.org/10.1206/0003-0090-407.1.1',
    kind: 'taxonomy',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title: 'Holstein, Wendt & Rossi 2017 — Rediscovery and redescription of the holotype',
    url: 'https://doi.org/10.5431/aramit5410',
    kind: 'taxonomy',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title: 'Prendini 2004 — Scorpions of Gabon and the range of Pandinus imperator',
    url: 'https://research.amnh.org/users/lorenzo/PDF/Prendini.2004.CSAM.GabonScorps.pdf',
    kind: 'distribution',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title: 'Casper 1985 — Prey capture and stinging behavior in Pandinus imperator',
    url: 'https://www.americanarachnology.org/journal-joa/joa-all-articles/article/download/JoA_v13_p277.pdf/?no_cache=1',
    kind: 'ecology',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title: 'Mahsberg 1990 — Brood care and family cohesion in Pandinus imperator',
    url: 'https://opus.bibliothek.uni-wuerzburg.de/opus4-wuerzburg/frontdoor/deliver/index/docId/3978/file/Mahsberg_Brood_care_family.pdf',
    kind: 'ecology',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title: 'Lourenço & Cloudsley-Thompson 1999 — Forest and savanna reproductive investment',
    url: 'https://britishspiders.org.uk/system/files/library/110404.pdf',
    kind: 'ecology',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title: 'Hembree 2014 — Neoichnology of captive Pandinus imperator burrows',
    url: 'https://doi.org/10.1007/978-94-017-8721-5_11',
    kind: 'ecology',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title:
      'Fasel et al. 1997 — Photoluminescence of the African scorpion Pandinus imperator',
    url: 'https://doi.org/10.1016/S1011-1344(96)00016-4',
    kind: 'ecology',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title: 'NTNU The Scorpion Files — Pandinus imperator species account',
    url: 'https://www.ntnu.no/ub/scorpion-files/p_imperator.php',
    kind: 'general',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title: 'CITES AC26 Doc. 12.2 Annex — Significant-trade review for Pandinus imperator',
    url: 'https://cites.org/sites/default/files/eng/com/ac/26/E26-12-02-A.pdf',
    kind: 'conservation',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title: 'CITES Notification 2025/031 — Togo export quota and withdrawal of trade suspension',
    url: 'https://cites.org/sites/default/files/notifications/E-Notif-2025-031.pdf',
    kind: 'conservation',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title: '国家濒科委 — 2023 年 CITES 附录中文版（将军巨蝎）',
    url: 'https://www.cites.org.cn/zxgg/zxzn/202404/t20240419_770803.html',
    kind: 'conservation',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title: '国家林草局 — 2025 年第 1 号公告（多哥将军巨蝎年度出口配额）',
    url: 'https://www.forestry.gov.cn/c/www/gsgg/622955.jhtml',
    kind: 'conservation',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search — Pandinus imperator, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Pandinus%20imperator&searchType=species',
    kind: 'conservation',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List FAQ — Species absent from the Red List are Not Evaluated',
    url: 'https://nrl.iucnredlist.org/about/faqs',
    kind: 'conservation',
    accessedAt: EMPEROR_SCORPION_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-pandinus-imperator',
    slug: 'emperor-scorpion',
    names: {
      zh: '帝王蝎',
      en: 'Emperor Scorpion',
      aliases: [
        '将军巨蝎',
        'Buthus imperator',
        'Heterometrus roeseli',
        'Pandinus africanus',
        'Scorpio simoni',
        'Pandinus camerounensis',
      ],
    },
    scientificName: 'Pandinus imperator',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Arachnida', '蛛形纲'),
      taxon('Scorpiones', '蝎目'),
      taxon('Scorpionidae', '蝎科'),
      taxon('Pandinus', '巨蝎属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['非洲'],
      regions: [
        '几内亚与塞拉利昂至利比里亚的西非森林带',
        '科特迪瓦 Banco 湿润森林与 Lamto 几内亚稀树草原',
        '加纳、多哥、贝宁至尼日利亚东部的森林—稀树草原带',
        '喀麦隆北部 Pandinus camerounensis 模式材料区域',
      ],
      countries: [
        '几内亚',
        '塞拉利昂',
        '利比里亚',
        '科特迪瓦',
        '加纳',
        '多哥',
        '贝宁',
        '尼日利亚',
        '喀麦隆',
      ],
      range:
        '可靠文献把核心范围放在西非，从几内亚和塞拉利昂经利比里亚、科特迪瓦、加纳、多哥与贝宁延伸到尼日利亚东部。2016 年修订又把喀麦隆北部描述的 P. camerounensis 并入 P. imperator，因此确认范围包括喀麦隆；较早报道的马里、布基纳法索、几内亚比绍、塞内加尔、赤道几内亚、刚果和加蓬记录包含未确认或误鉴问题，不进入国家清单。',
      center: { lat: 7.5, lng: -2.5 },
    },
    habitats: [
      {
        name: '西非热带湿润森林地表与林下隐蔽处',
        realm: 'terrestrial',
        description:
          '科特迪瓦 Banco 森林样本来自倒木、枯树和潮湿地表隐蔽处；“森林栖息”不表示整个分布区只有连续雨林。',
        isPrimary: true,
      },
      {
        name: '几内亚稀树草原与河谷林斑块',
        realm: 'terrestrial',
        description:
          'Lamto 研究区以几内亚稀树草原为主，夹有河边林斑；日间采样者在枯死的非洲扇椰子下找到个体。',
      },
      {
        name: '土穴、腐木下方与可重复利用的遮蔽空间',
        realm: 'terrestrial',
        description:
          '本种会利用和挖掘地下避难空间。2014 年受控实验中的圈养个体造出斜坡、螺旋和分枝三类洞穴；实验结构不能直接规定野外洞穴深度、形状或使用者数量。',
      },
    ],
    measurements: {
      length: {
        unit: 'cm',
        note: '1985 年论文记录本种总长可超过 17 厘米，研究中的实测个体为 10—17 厘米；重发现的模式标本现测 160.9 毫米，计入缺失部分后估计约 170 毫米。流行资料常写 20 厘米，但现有一手数据不能支持它作为稳定成体范围或典型均值，也不能把超过 17 厘米当作物种硬上限。',
      },
    },
    diet: {
      types: ['carnivore', 'insectivore'],
      foods: [
        '陆生昆虫及其他无脊椎猎物，野外组成与比例未知',
        '1985 年圈养试验中的家蟋蟀',
        '1990 年圈养家族试验中的大型蟑螂',
      ],
      description:
        '帝王蝎以须肢钳抓持猎物，螯肢随后处理食物。1985 年刺击研究使用圈养家蟋蟀和实验小鼠，1990 年家族试验使用大型蟑螂；两项试验回答行为问题，不构成野外食谱。现有物种级资料没有给出自然猎物清单、偏好或比例，因此不把白蚁、鼠类或任何单一猎物写成主食。',
    },
    activity: [
      '在森林落叶、倒木、枯树和稀树草原枯死棕榈下利用隐蔽空间',
      '圈养掘洞实验中用前三对步足直接挖掘，并随沉积物湿度改变洞穴复杂度',
      '停止移动时可让须肢钳指与成对栉状器接触基底，具体感知阈值未由画面或本档案测定',
      '以两只须肢钳围住并抓持猎物，是否使用尾刺受个体发育阶段、猎物大小和挣扎影响',
      '母蝎产仔后背负早期幼体；下背后的幼蝎在圈养家族实验中仍会聚集在母体附近',
      '野外可出现多只共用隐蔽处的聚集，但一次最高 15 只的记录不能定义固定群体规模',
    ],
    tags: [
      '蝎目首次收录',
      '蝎科',
      '西非',
      '森林—稀树草原',
      '穴居',
      '强壮须肢钳',
      '栉状器',
      '外源紫外激发荧光',
      '发育阶段相关刺击',
      '母体照护',
      '家族聚集',
      'IUCN 未评估',
      'CITES 附录 II',
      '国际宠物贸易',
    ],
    summary:
      '帝王蝎是西非森林与稀树草原中的大型穴居蝎，已发表资料记录总长超过 17 厘米；它用宽大的须肢钳控制猎物，母蝎背负幼体，硬化表皮在外源紫外照射下会发出荧光。',
    description:
      '帝王蝎现行接受名为 Pandinus imperator (C. L. Koch, 1841)。Koch 在 1841 年以 Buthus imperator 描述它；2016 年修订整理了 Heterometrus roeseli、Pandinus africanus、Scorpio simoni 和 P. camerounensis 等异名，2017 年论文则报道馆藏数字化时重发现的正模。它分布在西非森林与几内亚稀树草原，以腐木、地表遮蔽物和土穴为避难空间。1985 年研究中的两只圈养出生幼蝎在长到 6 至 8 厘米时改变了对蟋蟀的刺击使用，成年圈养个体与实验猎物结果不能外推为野外全种规则。1990 年研究记录育幼和圈养家族实验，野外隐蔽处最多见到 15 只聚集；1999 年科特迪瓦两个地点又显示森林与稀树草原种群的繁殖投入不同。IUCN 尚未发布本种全球评估，状态记为 NE、趋势未知；CITES 自 1995 年起把它列入附录 II。2025 年通知确认多哥每年 20,000 只的出口配额条件，这个数字不是实际出口量、全球种群数量或安全采集目标。',
    storySections: [
      {
        key: 'name-synonyms-and-holotype',
        label: '名字与模式标本',
        title: '1841 年的 Buthus，回到数字化馆藏里',
        body: 'C. L. Koch 在 1841 年把它命名为 Buthus imperator，转入 Pandinus 后，作者和年份外侧出现括号。2016 年修订把 Heterometrus roeseli、Pandinus africanus、Scorpio simoni 和 P. camerounensis 列入本种异名；当时正模仍被认为失踪。斯图加特博物馆人员在 2015 年数字化馆藏时找到 SMNS-Scor-002031，2017 年论文依据原描述、彩色图版、尺寸和栉状器等证据确认它就是正模。标签和原描述都没有产地。',
      },
      {
        key: 'chelae-pectines-and-fluorescence',
        label: '钳、栉状器与荧光',
        title: '宽钳负责抓持，腹面双梳贴近地面',
        body: '重发现的正模具有宽而圆、表面带颗粒的须肢钳，腹面有一对栉状器。正模左右各有 16 个栉齿，这只是一个标本的数值，不能拿来给生成图计齿或替代完整鉴定。Fasel 等人在 1997 年用外源紫外光激发表皮，测到纳秒尺度的蓝绿色荧光；黑暗中没有外部激发便没有这种发光。该论文据此得出“荧光不承担生物学作用”的结论；它没有进行行为或野外生态试验。',
      },
      {
        key: 'forest-savanna-refuges-and-burrows',
        label: '森林、稀树草原与洞穴',
        title: '湿润森林与稀树草原都可利用',
        body: '科特迪瓦研究者在 Banco 湿润森林的倒木和枯树下采到帝王蝎，也在 Lamto 几内亚稀树草原的枯死非洲扇椰子下找到它们。两地资料证明本种跨越森林与稀树草原，却没有给整个范围划定统一湿度。2014 年圈养实验让单只或五只个体在沉积物中挖出斜坡、螺旋和分枝洞穴；较低湿度减少复杂度并增加坍塌。实验说明它能造穴，不等于野外每条洞都遵循这些尺寸和形状。',
      },
      {
        key: 'sting-use-ontogeny-boundary',
        label: '尾刺使用的样本边界',
        title: '6 至 8 厘米的变化，来自两只圈养幼蝎',
        body: '1985 年研究跟踪两只圈养出生的幼蝎。它们小时候经常刺击蟋蟀，长到 6 至 8 厘米时刺击行为发生转变，更多依靠须肢钳；到 10 厘米时，面对较大、挣扎剧烈的实验猎物又会用刺。另有五只 14 至 17 厘米的圈养成年个体在试验中没有刺击猎物。这个小样本不能外推成年个体的野外行为，也不能得出“帝王蝎长大后从不使用尾刺”的结论。',
      },
      {
        key: 'maternal-care-and-local-reproduction',
        label: '育幼与地方差异',
        title: '母幼群留在一起，胚胎数却随地点变化',
        body: '1990 年育幼研究记录野外隐蔽处最多聚集 15 只，并用圈养家族实验检验母蝎照护：二龄幼蝎偏向自己的母体，有母体的幼蝎可分享她制服的大型猎物。实验支持持续的母幼联系，不能把任何聚集都判成亲属群。1999 年科特迪瓦研究分别统计森林的 25 只雌蝎和稀树草原的 25 只雌蝎；森林样本每胎 28 至 42 枚胚胎，稀树草原样本为 7 至 21 枚。两个地点的差异不能变成全物种固定窝仔数。',
      },
      {
        key: 'trade-controls-and-unknown-status',
        label: '贸易管制与未知状态',
        title: '贸易配额与种群评估分别看待',
        body: 'CITES 从 1995 年 2 月 16 日起把帝王蝎列入附录 II，国际贸易需满足许可和非致危性要求。CITES 2025/031 号通知在多哥公布每年 20,000 只的条件下撤销贸易暂停，其中 8,000 只为野生来源、12,000 只为养殖来源；配额是监管上限，不是已出口数量，也不证明全球种群安全。IUCN 搜索没有本种全球评估，全球种群趋势仍未知。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1841 年的正模在数字化时重新找到',
        body: 'Koch 在 1841 年以 Buthus imperator 描述帝王蝎，后来它被转入 Pandinus。正模一度被认为失踪，斯图加特博物馆人员在 2015 年数字化馆藏时重新找到 SMNS-Scor-002031，2017 年论文确认其身份。标签与原描述均没有产地，模式产地仍未知。',
      },
    ],
    keyFacts: [
      '现行接受名是 Pandinus imperator (C. L. Koch, 1841)。',
      'Koch 在 1841 年以 Buthus imperator 描述本种，现名作者年份的括号记录了属级转移。',
      '2016 年修订列出的异名包括 Heterometrus roeseli、Pandinus africanus、Scorpio simoni 和 Pandinus camerounensis。',
      '2015 年馆藏数字化重发现正模 SMNS-Scor-002031，2017 年发表重描述；模式产地仍未知。',
      '它属于节肢动物门、蛛形纲、蝎目、蝎科和巨蝎属。',
      '“将军巨蝎”是中国官方 CITES 附录采用的中文名，“帝王蝎”也是常用名。',
      '可靠核心范围从几内亚和塞拉利昂经利比里亚、科特迪瓦、加纳、多哥与贝宁延伸到尼日利亚东部。',
      '2016 年把喀麦隆北部 P. camerounensis 并入本种；其他西非和中非旧记录仍需排除近似种误鉴。',
      '科特迪瓦物种级资料同时记录湿润森林和几内亚稀树草原，不能把本种写成雨林专性。',
      '个体会利用倒木、枯树、枯死棕榈下方和土穴作为隐蔽处。',
      '1985 年论文记录总长超过 17 厘米；常见的 20 厘米说法不代表稳定成体范围、典型均值或硬上限。',
      '重发现正模现测总长 160.9 毫米，计入缺失部分后估计约 170 毫米。',
      '宽而圆的颗粒状须肢钳是醒目外形，但黑色、大体型和宽钳不能单独完成种级鉴定。',
      '正模左右栉状器各有 16 个齿，这个单标本计数不是全种固定齿数。',
      '1997 年实验表明表皮在外源紫外照射下产生纳秒级短寿命荧光，不是生物发光；该论文的结论是这种荧光不承担生物学作用。',
      '2014 年圈养个体用前三对步足直接挖掘，可形成斜坡、螺旋和分枝洞穴。',
      '圈养洞穴复杂度随沉积物湿度改变，实验洞形不能直接外推野外洞穴尺寸。',
      '1985 年刺击发育变化只来自两只圈养出生幼蝎，6 至 8 厘米是这两只个体的行为转变区间。',
      '同一试验中的成年个体与蟋蟀、小鼠结果不能外推为成年帝王蝎在野外从不使用尾刺。',
      '1990 年研究记录野外隐蔽处最多 15 只的聚集，不代表固定群体规模或全部个体互为亲属。',
      '1990 年圈养家族实验支持母蝎育幼会影响幼蝎获得大型猎物、成长与存活。',
      '1999 年科特迪瓦研究比较森林的 25 只雌蝎与稀树草原的 25 只雌蝎。',
      '同一研究中，森林样本每胎 28 至 42 枚胚胎，稀树草原样本为 7 至 21 枚，不能外推为全种固定范围。',
      'IUCN 尚未发布本种全球评估；NE 和未知趋势不表示无危或稳定。',
      'CITES 自 1995 年 2 月 16 日起把本种列入附录 II。',
      'CITES 2025/031 号通知确认多哥年度配额总计 20,000 只，分为 8,000 只野生来源和 12,000 只养殖来源。',
      '多哥配额是出口监管上限，不是实际贸易量、全球种群规模、允许每地采集量或安全证明。',
    ],
    threats: [
      '国际宠物贸易持续产生采集需求；CITES 配额和许可控制不能替代产地种群监测',
      '野生、养殖和圈养繁殖来源若记录不实，会遮蔽实际野采量并削弱非致危性判断',
      '森林与稀树草原的倒木、枯树、棕榈残体、落叶层和适合造穴的土壤可能随土地利用变化而减少，物种级损失尚未量化',
      '巨蝎属近似种、旧异名与商品名混用会污染分布、贸易和种群资料',
      'IUCN 尚未评估，全球种群大小、趋势、占域、世代长度和主要威胁排序均未知',
      '把圈养行为、单一地点的胚胎数或 20 厘米二手说法写成全种常数，会误导采集和管理判断',
    ],
    conservationActions: [
      '在确认范围内用固定搜索时长和季节重复调查，记录未检出、个体数量、发育阶段、微生境与洞穴占用',
      '为范围边缘、贸易批次和旧记录保存凭证标本、精确产地、诊断形态图像与必要的分子数据',
      '按野生、养殖和圈养繁殖来源分别记录许可数量、实际出口量、死亡量与目的国，让多哥 20,000 只年度配额可审计',
      '用独立种群调查更新非致危性意见，任何配额调整都应说明可持续采集量的证据和不确定性',
      '在主要采集区保留森林和稀树草原的倒木、落叶、枯死棕榈、河谷林斑块与稳定土壤避难空间',
      '补足野外食谱、繁殖频率、幼体扩散、洞穴使用、种群趋势和采集响应研究，明确区分野外观察与圈养试验',
      '定期复核 IUCN、CITES 与巨蝎属分类变化，不把 NE 或附录 II 等同于低风险',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'published-total-length',
        label: '已发表总长记录',
        value: '>17',
        unit: '厘米',
        note: '1985 年论文的物种描述口径，不是典型成体范围或硬上限；20 厘米缺少同等一手支撑。',
      },
      {
        key: 'captive-sting-use-transition',
        label: '圈养幼蝎刺击变化',
        value: '6–8',
        unit: '厘米',
        note: '1985 年两只圈养出生幼蝎对蟋蟀的行为转变区间，不能外推全种。',
      },
      {
        key: 'field-aggregation-maximum',
        label: '一次研究野外聚集',
        value: '最多 15',
        unit: '只',
        note: '1990 年隐蔽处观察上限，不是固定家庭群大小、平均值或密度。',
      },
      {
        key: 'local-embryo-ranges',
        label: '两地每胎胚胎范围',
        value: '28–42 / 7–21',
        unit: '枚',
        note: '1999 年科特迪瓦森林与稀树草原各 25 只雌蝎的样本，不是全种固定范围。',
      },
    ],
    media: {
      image:
        './images/species/emperor-scorpion/01-forest-refuge-portrait.webp',
      alt: '西非森林与稀树草原过渡环境的腐木下，一只完整黑色帝王蝎停在浅土穴入口右侧，左侧保留深色落叶空地',
      focalPoint: { x: 0.67, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/emperor-scorpion/02-dorsal-morphology.webp',
          alt: '暗褐土面上，一只完整黑色帝王蝎从高斜角展示两只宽大须肢钳、四对步足、分节后腹部和末端毒针',
          title: '宽钳、四对步足与一条完整后腹部',
          caption:
            'AI 生成形态重建；画面不能用于物种身份确认，也无法测量体长或核验栉齿、毛序与感觉毛数量。',
          focalPoint: { x: 0.52, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/emperor-scorpion/03-ultraviolet-fluorescence.webp',
          alt: '夜间深色落叶上，一只完整帝王蝎的硬化表皮在外部紫外照射下发出克制的青绿色荧光',
          title: '外源紫外激发的表皮荧光',
          caption:
            'AI 生成荧光重建；外源紫外照射可激发表皮的纳秒级荧光，不是生物发光。1997 年论文认为它不承担生物学作用，画面本身不是行为试验。',
          focalPoint: { x: 0.56, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/emperor-scorpion/04-pectine-sensory-combs.webp',
          alt: '一只黑色帝王蝎腹面后部的近景，两枚淡色梳状栉状器成对附着并靠近细土颗粒',
          title: '腹面成对的栉状器',
          caption:
            'AI 生成形态重建；画面不能核验齿数、判断雌雄或确认物种身份，也无法测出感知阈值和基底化学。',
          focalPoint: { x: 0.51, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/emperor-scorpion/05-pedipalp-prey-restraint.webp',
          alt: '夜间落叶层中，一只完整成年帝王蝎以两只宽钳夹持一只完整深色甲虫状节肢动物，尾刺与猎物分开',
          title: '用须肢钳限制一只节肢动物',
          caption:
            'AI 生成圈养结果启发的捕食情景；画面不能代表野外猎物或自然捕食过程，也不能据此断言成体从不用毒刺。',
          focalPoint: { x: 0.55, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/emperor-scorpion/06-maternal-brood-care.webp',
          alt: '土穴入口处，一只完整黑色母帝王蝎背负一群聚集在腹部背面的浅色初龄幼蝎，地面没有散落幼体',
          title: '母蝎背上的初龄幼体',
          caption:
            'AI 生成育幼重建；画面不能证明固定幼体数，也不能确定母幼关系持续多长时间、幼体存活率或这群个体的亲缘。',
          focalPoint: { x: 0.56, y: 0.57 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...EMPEROR_SCORPION_SOURCES,
      {
        title: 'GBIF: Pandinus imperator (C.L.Koch, 1841) nomenclatural record',
        url: 'https://www.gbif.org/species/6894611',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: EMPEROR_SCORPION_CONTENT_DATE,
    updatedAt: EMPEROR_SCORPION_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
