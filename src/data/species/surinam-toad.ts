import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const SURINAM_TOAD_SOURCE_DATE = '2026-08-30' as const;

const SURINAM_TOAD_CONTENT_DATE = '2026-08-30' as const;

const SURINAM_TOAD_SOURCES = [
  {
    title: 'Amphibian Species of the World 6.2 — Pipa pipa',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Pipidae/Pipinae/Pipa/Pipa-pipa',
    kind: 'taxonomy',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Pipa pipa assessment 85900348',
    url: 'https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T58163A85900348.en',
    kind: 'conservation',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'Crossref metadata — IUCN assessment 85900348',
    url: 'https://api.crossref.org/works/10.2305/IUCN.UK.2023-1.RLTS.T58163A85900348.en',
    kind: 'conservation',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'Encyclopedia of Life — Pipa pipa',
    url: 'https://eol.org/pages/332922',
    kind: 'conservation',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'Amphibians of Ecuador — Pipa pipa',
    url: 'https://bioweb.bio/faunaweb/amphibiaweb/FichaEspecie/Pipa%20pipa',
    kind: 'distribution',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title:
      'Diversity, biogeography, and reproductive evolution in the genus Pipa',
    url: 'https://doi.org/10.1016/j.ympev.2022.107442',
    kind: 'taxonomy',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'A revision of the genus Pipa',
    url: 'https://www.jstor.org/stable/3892485',
    kind: 'taxonomy',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'External morphology and lateral line system of four Pipa species',
    url: 'https://doi.org/10.11606/1807-0205/2022.62.008',
    kind: 'general',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'A somatosensory fovea in the fingertips of the Surinam toad',
    url: 'https://doi.org/10.1007/s00359-026-01838-w',
    kind: 'ecology',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'Ontogeny of the bizarre: skeletal development in Pipa pipa',
    url: 'https://pubmed.ncbi.nlm.nih.gov/10629097/',
    kind: 'general',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title:
      'Morphometric variation of Pipa pipa, with notes on diet and gonad development',
    url: 'https://www.seh-herpetology.org/journals/herpetology-notes/back-issues/volume-7-2014',
    kind: 'ecology',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'Aquatic feeding in pipid frogs: Pipa pipa',
    url: 'https://doi.org/10.1242/jeb.043380',
    kind: 'ecology',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'How a frog, Pipa pipa, succeeds or fails in catching fish',
    url: 'https://doi.org/10.1643/CH-16-510',
    kind: 'ecology',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'Morphology of the feeding apparatus in Pipa pipa',
    url: 'https://doi.org/10.1002/jmor.20707',
    kind: 'ecology',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'On the breeding behavior of the Surinam toad, Pipa pipa',
    url: 'https://doi.org/10.2307/1439751',
    kind: 'ecology',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'Development of Pipa pipa',
    url: 'https://doi.org/10.2307/1439843',
    kind: 'ecology',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'First evidence of terrestrial dispersal in the Surinam toad',
    url: 'https://herpetologynotes.org/index.php/hn/article/download/107/193/3738',
    kind: 'distribution',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
  {
    title: 'Recent observations of the Suriname Toad in Trinidad',
    url: 'https://doi.org/10.17161/randa.v30i1.20954',
    kind: 'distribution',
    accessedAt: SURINAM_TOAD_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-pipa-pipa',
    slug: 'surinam-toad',
    names: {
      zh: '负子蟾',
      en: 'Surinam Toad',
      aliases: [
        'Suriname Toad',
        'Common Surinam Toad',
        'Star-fingered Frog',
        'Surinam Water-toad',
      ],
    },
    scientificName: 'Pipa pipa',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Amphibia', '两栖纲'),
      taxon('Anura', '无尾目'),
      taxon('Pipidae', '负子蟾科'),
      taxon('Pipa', '负子蟾属'),
    ),
    conservation: conservation('LC', 'stable', 2021),
    distribution: {
      realms: ['freshwater'],
      continents: ['南美洲'],
      regions: [
        '亚马孙流域低地',
        '圭亚那地盾与三圭亚那地区',
        '奥里诺科部分低地',
        '特立尼达岛淡水湿地',
      ],
      countries: [
        '玻利维亚',
        '巴西',
        '哥伦比亚',
        '厄瓜多尔',
        '法属圭亚那',
        '圭亚那',
        '秘鲁',
        '苏里南',
        '特立尼达和多巴哥',
        '委内瑞拉',
      ],
      endemicTo: ['南美洲'],
      range:
        '按当前广义 Pipa pipa 口径，原生范围横跨亚马孙流域、圭亚那地盾及特立尼达的低地淡水环境。2022 年遗传研究在传统种名下恢复出五个遗传操作分类单元（OTU），范围边缘、谱系连接和各谱系风险仍需修订。',
      center: { lat: -3.5, lng: -61.5 },
    },
    habitats: [
      {
        name: '热带低地森林缓流与静水',
        realm: 'freshwater',
        description:
          '林内缓流水道、小溪回水、泥底或落叶底池塘提供主要水下生境；局地水温、酸碱度和水深不能外推到全范围。',
        isPrimary: true,
      },
      {
        name: '泛滥平原、牛轭湖与季节湿地',
        realm: 'freshwater',
        description:
          '永久水体和雨季淹水洼地共同提供栖息地与换水体通道，陆上穿越属于水文周期中的移动。',
      },
      {
        name: '沼泽与林缘池塘',
        realm: 'freshwater',
        description:
          '水流缓慢、底质复杂且有沉水落叶的浅水环境可供隐蔽和捕食；受改变水体中的记录不代表它能承受持续污染或排水。',
      },
      {
        name: '特立尼达林溪',
        realm: 'freshwater',
        description:
          '近期记录来自森林中的缓慢黑水小溪；单一溪段的观察不能代表整座岛的丰度或趋势。',
      },
    ],
    measurements: {
      length: {
        max: 20,
        unit: 'cm',
        note: '已发表吻肛长极端值，不代表常见成体长度；一个系统学有性别样本为雌体 10.5—17.1 厘米、雄体 10.6—15.4 厘米，特立尼达成体雄体记录为 7—10 厘米，因此这些系列不能构成全物种统一下限',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '局地野外胃含物中的桡足类和十足目等水生甲壳类',
        '局地野外胃含物中的昆虫幼体和水生半翅目',
        '少量野外记录及圈养动作实验中的小鱼',
      ],
      description:
        '负子蟾是水生肉食者。巴西局地胃含物样本以水生甲壳类、昆虫幼体和其他水生无脊椎动物为主；鱼类只见于少量野外记录和圈养捕食实验。它通过迅速扩大口咽与躯干产生惯性吸食，前肢可围堵猎物。蚯蚓和活鱼实验用于解析动作，不能定义全范围的自然主食。',
    },
    activity: [
      '高度水栖，多在缓流或静水底部活动',
      '野外记录多来自夜间，但现有证据不支持绝对昼夜限制',
      '通过惯性吸食捕猎，并用无蹼前肢协同围堵目标',
      '水位变化时可在永久水体与季节湿地之间跨陆地移动',
      '繁殖时采用腹股沟抱对并连续完成垂直翻转环路',
    ],
    tags: [
      '无尾目',
      '负子蟾科',
      '南美洲',
      '淡水',
      '高度水栖',
      '无舌吸食',
      '机械感觉指尖',
      '背部皮肤育幼',
      '内营养性幼体发育',
      '无自由生活摄食蝌蚪期',
    ],
    summary:
      '负子蟾是亚马孙与圭亚那低地淡水中的扁平无舌蛙，借机械感觉指尖和惯性吸食捕猎；繁殖时卵经水下翻转转移到雌体背上，皮肤随后围成育儿室，幼体在其中完成内营养性发育与变态。',
    description:
      '负子蟾属于负子蟾科负子蟾属，按当前广义分类口径分布于亚马孙流域、圭亚那地盾和特立尼达。它身体宽而扁平，眼小，后足全蹼，前指末端连续分叉；八个前指共有 128 个机械感觉小叶，可感知近距离水流扰动。它没有舌，通过迅速扩大口咽和躯干吸入甲壳类、昆虫等猎物，前肢还能围堵逃逸目标。繁殖时雌体和雄体腹股沟抱对并连续翻转，短暂有黏性的卵在回正时落到雌体肿胀背部，富血管皮肤随后在卵周围形成独立育儿室。胚胎在室内经历内营养性蝌蚪样幼体阶段、尾吸收和变态，完成变态的小蛙自行离开。IUCN 现行记录日期为 2021 年，类别无危、趋势稳定；传统种名下五个遗传操作分类单元（OTU） 使各谱系的范围与风险仍需修订。',
    storySections: [
      {
        key: 'a-body-built-for-still-water',
        label: '水底轮廓',
        title: '扁平身体贴着泥底和落叶',
        body: '负子蟾身体宽而强烈扁平，三角形头部几乎与身体连成一片，整体呈枯叶般的轮廓。微小、没有眼睑的眼位于背面，细长而无蹼的前指与完全蹼化的后足形成对比。褐色斑驳和粗糙皮肤与泥底、落叶底相衬。它大部分时间留在水中；秘鲁研究也记录到个体随季节水位跨过陆地，在永久湖水和暂时淹水地之间移动。',
      },
      {
        key: 'starred-fingertip-fovea',
        label: '感觉指尖',
        title: '八个前指把近距离水流转成触觉信息',
        body: '每个前指末端连续分叉成 16 个小叶，八个前指共 128 个。实验显示这些小叶接收密集、低阈值的机械感觉输入；负子蟾能在约 5 毫米实验距离内先于接触察觉猎鱼产生的水动力扰动。这个实验结果不能换算成野外固定探测半径，也没有证据支持嗅觉或味觉功能。',
      },
      {
        key: 'tongueless-suction',
        label: '无舌吸食',
        title: '口咽、前肢和躯干共同完成捕食动作',
        body: '负子蟾没有舌，以惯性吸食捕猎。捕食时口咽迅速扩张，水和猎物一同进入口中，前肢协同围住逃逸路径。肩带、躯干、骨盆和舌骨牵引系统共同参与动作；圈养蚯蚓和活鱼实验解释了这套机械，却不能代替跨地域的野外食谱调查。',
      },
      {
        key: 'turnover-egg-transfer',
        label: '翻转转卵',
        title: '卵在水下翻转中转移到背部',
        body: '腹股沟抱对中的雌体发起垂直环路。两体倒置时，雌体释放的卵先到雄体腹部附近，回正下降时再落到雌体已经肿胀的背部。新卵短暂带有黏性，雄体夹抱使卵贴得更牢；富血管背部皮肤随后增生，在各枚卵周围形成彼此独立的临时育儿室。',
      },
      {
        key: 'larval-life-inside-skin',
        label: '室内变态',
        title: '幼体在背部育儿室内完成变态',
        body: '每枚卵由独立、富血管的皮肤育儿室包围。胚胎形成内营养性的蝌蚪样幼体和尾部，再在室内完成尾吸收与变态；这一过程没有自由生活、摄食的蝌蚪期。完成变态的小蛙自行离开育儿室，现有批次记录之间的差异不支持固定孵育时钟。',
      },
      {
        key: 'one-name-five-lineages',
        label: '种界未决',
        title: '传统种名中发现五个遗传单元',
        body: '现行分类仍接受 Pipa pipa，但 2022 年研究在传统种名下恢复出五个遗传操作分类单元（OTU），部分候选边界还需要核基因和空间采样验证。IUCN 以广义分类单元评为无危、趋势稳定；研究人员仍需分别核对各谱系的范围、占域和局地趋势。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年曾以 Rana pipa 命名',
        body: '1758 年，林奈以 Rana pipa 命名负子蟾，后来它被归入负子蟾属，成为 Pipa pipa。中文名对应雌体背部育幼的特点：繁殖时卵转移到背上，皮肤围成独立育儿室，幼体在其中完成变态，再自行离开。传统种名下还有五个遗传单元需要进一步厘清。',
      },
    ],
    keyFacts: [
      '现行接受名为 Pipa pipa (Linnaeus, 1758)，原始组合为 Rana pipa。',
      '它属于无尾目负子蟾科，不属于蟾蜍科。',
      '2022 年研究在负子蟾属识别出 15 个 OTU，其中传统 Pipa pipa 名下有五个。',
      '五个 OTU 中部分候选种界仍需更多核基因与空间采样验证。',
      '按当前广义口径，原生范围横跨亚马孙流域、圭亚那地盾和特立尼达。',
      '原生国家与地区清单包含十项，其中法属圭亚那按来源口径单列。',
      '它高度水栖，主要利用低地森林中的缓流、静水和季节湿地。',
      '秘鲁研究支持个体随水位变化跨陆地换水体，水栖不等于终生停留在同一水体。',
      '野外记录多来自夜间，现有资料未建立绝对昼夜活动限制。',
      '身体宽而扁平，头呈三角形，眼小且位于背面。',
      '它没有外露鼓膜，后足完全蹼化，前足不具蹼。',
      '每个前指末端有 16 个感觉小叶，八个前指共 128 个。',
      '2026 年实验支持这些指端小叶属于低阈值机械感觉器官。',
      '约 5 毫米来自实验中的水动力检测距离，不是野外固定探测半径。',
      '下颌附近皮褶与侧线神经丘也参与水中感觉，皮褶形态存在个体差异。',
      '约 20 厘米是已发表最大吻肛长，不是常见成体长度。',
      '系统学有性别样本与特立尼达成体记录不能拼成全物种统一体尺范围。',
      '两只生殖雌体的局地称重不能建立全物种成体体重区间。',
      '局地野外胃含物以水生甲壳类、昆虫幼体和水生半翅目为主要可鉴定项目。',
      '活鱼与蚯蚓研究属于圈养动作实验，不能定义野外主食。',
      '它没有舌，通过迅速扩大口咽和躯干产生惯性吸食。',
      '前肢既能单独抓取，也能配合吸入水流围堵猎物。',
      '口咽、肩带、躯干与骨盆系统共同参与吸食动作。',
      '繁殖采用腹股沟抱对，雌体发起连续的垂直翻转环路。',
      '倒置阶段排出的卵先到雄体腹部附近，回正时再落到雌体背部。',
      '新产卵短时间带有黏性，背部皮肤在卵附着后形成独立育儿室。',
      '育儿室皮肤富含血管，并把发育中的各枚卵彼此分隔。',
      '幼体依靠卵内营养发育，形成尾部并在育儿室内完成变态。',
      '发育过程没有自由生活、摄食的蝌蚪期，完成变态的小蛙自行离开育儿室。',
      '一个圈养繁殖批次记录了 96 枚卵，其中 76 枚留在背部、20 枚散落；96 枚不代表固定产卵数或物种常数。',
      '同一批次的小蛙在第 77 至 136 天陆续离开育儿室；77 至 136 天不代表固定发育或出幼时长。',
      'IUCN 现行评估记录日期为 2021 年，类别无危，全球趋势稳定。',
      'IUCN DOI 中的 2023-1 表示红皮书发布版本，评估年份仍为 2021。',
      '广义种单元的无危结论不能替代五个 OTU 各自的范围和趋势调查。',
    ],
    threats: [
      '局地低地森林、池塘、小溪、沼泽和泛滥平原因伐木、农业与居民点扩张而丧失或退化',
      '污水、农业径流与沉积物增加会降低缓流和静水生境质量，影响规模仍待量化',
      '排水、筑堤与河道改造会改变季节泛滥过程和水位周期',
      '永久水体与季节湿地之间的水文连通性中断可能阻碍换水体移动',
      '传统 Pipa pipa 名下包含五个 OTU，广义无危口径可能掩盖范围较窄的谱系',
      '候选谱系、岛屿种群和局地占域缺少长期趋势数据，下降可能难以及时识别',
      '活体来源不明、运输不当和放生会带来合规、动物福利与生物安全风险，全球规模未量化',
    ],
    conservationActions: [
      '保护低地森林中的缓流小溪、池塘、牛轭湖、沼泽及岸带植被',
      '维持季节泛滥过程和永久水体之间的水文连通性',
      '减少污水、农业径流、过量沉积物与不必要的河道改造',
      '监测代表性水体的水质、水位周期、占域和局地种群趋势',
      '开展跨国家的凭证、形态、核基因和基因组采样，厘清五个 OTU 的种界与范围',
      '分别监测候选谱系与特立尼达种群，不用广义无危状态替代局地数据',
      '保存泥底、沉水落叶、根系和缓流边缘等水下微生境结构',
      '活体只采用合法、可追溯且符合动物福利和生物安全的来源，并杜绝放生圈养个体',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'iucn-status',
        label: 'IUCN',
        value: 'LC',
        note: 'IUCN 2021 年现行评估为无危、趋势稳定；记录日期为 2021-04-13，2023-1 是发布版本，不是评估年份',
      },
      {
        key: 'pipa-pipa-otus',
        label: '传统种名下的 OTU',
        value: '5',
        note: '2022 年遗传界定结果，不代表五个已经正式命名的物种',
      },
      {
        key: 'fingertip-lobules',
        label: '八个前指末端小叶',
        value: '128',
        unit: '个',
        note: '成体形态研究与 2026 年机械感觉实验所用总数',
      },
      {
        key: 'laboratory-detection-distance',
        label: '实验水动力检测距离',
        value: '约 5',
        unit: '毫米',
        note: '实验条件下的近距离结果，不是野外固定探测半径',
      },
    ],
    media: {
      image: './images/species/surinam-toad/01-leaf-litter-adult-cover.webp',
      alt: '单宁色浅水下，一只完整褐色斑驳成体伏在深色淤泥与腐叶间，宽扁身体、三角头、细前指和宽蹼后足可见；画面没有其他动物',
      focalPoint: { x: 0.62, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/surinam-toad/02-flattened-body-and-fingertips.webp',
          alt: '浅褐色水底上，一只完整褐色斑驳成体呈背侧视角，宽扁身体、三角头、小型背位眼、无蹼前指末端的圆形小结构和宽蹼后足可见',
          title: '扁平轮廓与圆形指端结构',
          caption:
            'AI生成科学情景重建；画面支持宽扁身体、三角头、细长无蹼前指和小型圆形指端结构的外形展示。像素不能分辨精确的四叶形态，也不能排除外形相近的负子蟾属物种，不能证明感觉功能、校准体尺或判断性别与年龄。',
          focalPoint: { x: 0.51, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/surinam-toad/03-floodplain-blackwater-habitat.webp',
          alt: '连通的黑水泛滥平原水下场景中，一只完整小型褐色斑驳蛙伏在沉水腐叶和根系之间',
          title: '腐叶与根系交错的黑水环境',
          caption:
            'AI生成科学情景重建；腐叶、根系、淤泥和单宁色缓水代表已报道的低地淡水环境。画面不能识别河流、季节、水文周期、实际占域点、水质或生境使用频率，也不能证明检出率或丰度。',
          focalPoint: { x: 0.66, y: 0.68 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/surinam-toad/04-suction-feeding-small-fish.webp',
          alt: '水下淤泥与腐叶背景中，一只完整扁平褐色蛙面向一条完整小鱼，小鱼停在短暂张开的蛙口外，二者之间可见细小悬浮颗粒',
          title: '一只蛙与口外的一条小鱼',
          caption:
            'AI生成科学情景重建；一只蛙、一条完整口外小鱼和悬浮颗粒只重建圈养捕食研究中的相对位置。静帧不能证明吸食已经发生、猎物将被捕获，也不能测量力量、速度、检测距离或自然食谱比例。',
          focalPoint: { x: 0.55, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/surinam-toad/05-closed-dorsal-brood-chambers.webp',
          alt: '单宁色浅水中，一只完整宽扁褐色成体的背部皮肤表面完整，浅圆形至多边形育儿室全部闭合；画面没有卵、幼体或开放空腔',
          title: '闭合而完整的背部皮肤表面',
          caption:
            'AI生成科学情景重建；闭合的皮肤色结构用于表达背部育儿室的外部表面，画面保持完整且无可见幼体。外观不能证明个体性别、内部胚胎数量、发育日期、存活状态或离室时间。',
          focalPoint: { x: 0.52, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/surinam-toad/06-floodplain-water-survey.webp',
          alt: '林缘单宁色水池旁恰有两名研究者，一人使用一个小型取水瓶，另一人手持一个记录板和一支书写工具，画面没有动物',
          title: '记录泛滥平原水体环境',
          caption:
            'AI生成科学情景重建；两名研究者、一个取水瓶、一个记录板和一支书写工具只表示低干扰水体调查场景。画面有零只动物可见，不能证明检出或缺失、调查协议、水质结果、种群趋势、机构、地点或保护成效。',
          focalPoint: { x: 0.69, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...SURINAM_TOAD_SOURCES,
      {
        title: 'GBIF: Pipa pipa (Linnaeus, 1758) nomenclatural record',
        url: 'https://www.gbif.org/species/2423966',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: SURINAM_TOAD_CONTENT_DATE,
    updatedAt: SURINAM_TOAD_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
