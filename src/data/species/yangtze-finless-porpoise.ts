import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const YANGTZE_FINLESS_PORPOISE_SOURCE_DATE = '2026-08-25' as const;

const YANGTZE_FINLESS_PORPOISE_CONTENT_DATE = '2026-08-25' as const;

const YANGTZE_FINLESS_PORPOISE_SOURCES = [
  {
    title: 'Mammal Diversity Database v2.5 — Neophocaena asiaeorientalis',
    url: 'https://www.mammaldiversity.org/taxon/1006446/',
    kind: 'taxonomy',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Society for Marine Mammalogy 2026 — List of Marine Mammal Species and Subspecies',
    url: 'https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/',
    kind: 'taxonomy',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Zhou et al. 2018 — Population genomics and freshwater adaptation of finless porpoises',
    url: 'https://doi.org/10.1038/s41467-018-03722-x',
    kind: 'taxonomy',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'IUCN — Yangtze Finless Porpoise assessment (boundary-matched legacy subspecies)',
    url: 'https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T43205774A45893487.en',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'IUCN — Narrow-ridged Finless Porpoise assessment (legacy broad species)',
    url: 'https://doi.org/10.2305/IUCN.UK.2017-3.RLTS.T41754A50381766.en',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC Cetacean Specialist Group — Red List Status of Cetaceans',
    url: 'https://iucn-csg.org/red-list-status-of-cetaceans/',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: '国家林草局、农业农村部 — 国家重点保护野生动物名录（2021 年第 3 号）',
    url: 'https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: '农业农村部 — 长江江豚拯救行动计划（2026—2035 年）发布实施',
    url: 'https://cjyzbgs.moa.gov.cn/gzdt/202512/t20251231_6480313.htm',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: '农业农村部 2023 — 我国迁地保护长江江豚首次放归长江',
    url: 'https://cjyzbgs.moa.gov.cn/gzdt/202304/t20230426_6426280.htm',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: '农业农村部 2018 — 长江江豚科学考察及珍稀物种拯救行动发布会',
    url: 'https://cjyzbgs.moa.gov.cn/ztzl/201904/t20190428_6220353.htm',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: '新华社 — 2025 年专项调查估算长江江豚 1,426 头',
    url: 'https://www.xinhuanet.com/politics/20260130/597b750309264e9186ac584acd6de664/c.html',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Zhao et al. 2008 — Abundance and conservation status in the Yangtze River',
    url: 'https://doi.org/10.1016/j.biocon.2008.09.005',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Mei et al. 2014 — The Yangtze finless porpoise: on an accelerating path to extinction?',
    url: 'https://doi.org/10.1016/j.biocon.2014.02.033',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Huang et al. 2020 — Population survey showing hope for recovery',
    url: 'https://doi.org/10.1016/j.biocon.2019.108315',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Liu et al. 2022 — Seasonal movements in Poyang Lake',
    url: 'https://doi.org/10.1016/j.scitotenv.2021.150782',
    kind: 'distribution',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Mei et al. 2017 — Habitat preference in a minimally disturbed environment',
    url: 'https://doi.org/10.1016/j.ecolmodel.2016.12.020',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Duan et al. 2023 — Biosonar activity at the Yangtze–Poyang junction',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10559091/',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Yang et al. 2021 — Temporal variation in diet and semi-migratory fish',
    url: 'https://doi.org/10.1111/fwb.13692',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Wang et al. 2014 — Diel rhythms of biosonar behavior',
    url: 'https://doi.org/10.1371/journal.pone.0097907',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 1993 — Population in the middle and lower Yangtze reaches',
    url: 'https://www.mammal.cn/EN/Y1993/V13/I4/260',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Mooney et al. 2014 — Hearing pathways in the Yangtze finless porpoise',
    url: 'https://doi.org/10.1242/jeb.091470',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Zeng et al. 2022 — Pregnancy diagnosis and fetal monitoring',
    url: 'https://doi.org/10.3354/esr01179',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Hao et al. 2019 — Non-invasive fecal steroid monitoring of reproductive status',
    url: 'https://doi.org/10.3389/fendo.2019.00606',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Gao & Zhou 1995 — Geographic variation of external measurements and three finless porpoise subspecies',
    url: 'https://www.mammal.cn/CN/Y1995/V15/I2/81',
    kind: 'general',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Jefferson 2002 — Preliminary analysis of geographic variation in finless porpoise cranial morphometrics',
    url: 'https://lkcnhm.nus.edu.sg/wp-content/uploads/sites/10/2020/12/s10rbz003-014.pdf',
    kind: 'general',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Nabi et al. 2018 — Biological state, habitat and physiological measurements',
    url: 'https://doi.org/10.1093/conphys/coy072',
    kind: 'general',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Nabi et al. 2019 — Hematologic and biochemical reference intervals by age, sex, season and location',
    url: 'https://doi.org/10.3389/fphys.2019.00792',
    kind: 'general',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Mei et al. 2021 — Mitigating shipping effects on freshwater cetaceans',
    url: 'https://doi.org/10.1016/j.biocon.2021.109132',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Li et al. 2022 — Stranding risk under low-water scenarios in Poyang Lake',
    url: 'https://doi.org/10.3390/rs14102455',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Xiong et al. 2019 — Trace elements in Yangtze finless porpoise tissues',
    url: 'https://doi.org/10.1016/j.scitotenv.2019.06.031',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Qiu et al. 2025 — Rebuilding the critically endangered Yangtze finless porpoise population: successful release from an ex situ conservation programme',
    url: 'https://doi.org/10.1098/rsbl.2024.0719',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Convention on Migratory Species — Neophocaena asiaeorientalis',
    url: 'https://www.cms.int/species/neophocaena-asiaeorientalis',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-neophocaena-asiaeorientalis',
    slug: 'yangtze-finless-porpoise',
    names: {
      zh: '长江江豚',
      en: 'Yangtze Finless Porpoise',
      aliases: ['江豚', '江猪', '微笑天使', 'Yangtze River Finless Porpoise'],
    },
    scientificName: 'Neophocaena asiaeorientalis',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Cetacea', '鲸目'),
      taxon('Phocoenidae', '鼠海豚科'),
      taxon('Neophocaena', '江豚属'),
    ),
    conservation: conservation('CR', 'decreasing', 2012, 'A3b+4b'),
    distribution: {
      realms: ['freshwater'],
      continents: ['亚洲'],
      regions: [
        '长江中下游干流',
        '鄱阳湖',
        '洞庭湖',
        '少数通江支流、汊江与江湖连接水道',
      ],
      countries: ['中国'],
      endemicTo: ['中国长江中下游水系'],
      range:
        '中国特有，现存自然种群分布于长江中下游干流、鄱阳湖、洞庭湖及少数保持水文连通的支流、汊江和江湖连接水道；不包含东亚沿海的 Neophocaena sunameri。',
      center: { lat: 30.1, lng: 115.7 },
    },
    habitats: [
      {
        name: '长江中下游自然岸带、洲滩与汇流区',
        realm: 'freshwater',
        description:
          '利用缓坡自然岸线、沙洲两侧、支汊和汇流形成的中等水深与较缓流速水域；鱼类丰富度和船舶干扰共同影响实际使用。',
        isPrimary: true,
      },
      {
        name: '鄱阳湖、洞庭湖与季节性湖槽',
        realm: 'freshwater',
        description:
          '湖泊水位涨落会重画深槽、浅滩和鱼群分布；江豚随水位在主湖体、支流和通道间季节移动。',
        isPrimary: true,
      },
      {
        name: '江湖连接口、通江支流与汊江走廊',
        realm: 'freshwater',
        description:
          '连接干流、湖泊和地方觅食区的狭窄水道维持移动与种群连通，对水深、岸线工程、船流和噪声变化敏感。',
      },
    ],
    measurements: {
      length: {
        min: 131,
        max: 168,
        unit: 'cm',
        note: '鄱阳湖与天鹅洲多年份研究的审慎成体样本包络；131 厘米是雌性成体分组阈值，168 厘米是该样本实测上端，不是全种绝对极值。',
      },
      weight: {
        min: 33,
        max: 83,
        unit: 'kg',
        note: '同一研究体系的成体实测值取整包络；性别、妊娠、体况、样地和年份都会影响体重。',
      },
    },
    diet: {
      types: ['carnivore', 'piscivore'],
      foods: ['半洄游淡水鱼', '定居性淡水鱼', '湖泊与干流小型鱼类'],
      description:
        '作为长江中下游水域的广食性鱼食顶级捕食者，随季节、水位和鱼群可用性改变半洄游与定居鱼类的相对摄食比例，并借助高频回声定位在浑浊水体中追踪猎物。',
    },
    activity: [
      '短暂滚动出水换气，因无背鳍而难以目视追踪',
      '频繁使用高频点击导航、搜寻鱼群并完成捕食接近',
      '可独游或组成随觅食和母幼关系变化的小群',
      '昼夜均会活动，部分地点傍晚与夜间觅食声学活动更强',
      '随湖泊水位在主湖体、支流和连接水道间季节移动',
      '趋向鱼类较丰富、流速较缓的岸带、洲滩和汇流水域',
    ],
    tags: [
      '中国特有',
      '长江中下游',
      'IUCN 极危（2012 亚种评估）',
      '国家一级重点保护野生动物',
      'CITES 附录 I',
      'CMS 附录 II（旧广义种口径）',
      '淡水齿鲸',
      '无背鳍',
      '回声定位',
    ],
    summary:
      '长江江豚只生活在长江中下游的淡水中，没有背鳍，靠高频回声定位寻找鱼群。专项调查显示数量回升，与其现有种界对应的 IUCN 评估仍为极危。',
    description:
      '长江江豚是中国长江中下游特有的淡水鼠海豚。MDD v2.5 将它与海生东亚江豚拆为两个物种，SMM 仍保留亚种处理，因此历史资料必须先核对分类边界。它以圆钝头部、几乎不存在的吻突、无背鳍和狭窄瘤粒脊区别于宽吻海豚，依靠高频回声定位在浑浊干流、湖泊和连接水道中追逐鱼群。2025 年专项调查估算自然种群 1,426 头，比 2022 年增加 177 头；该数字是全龄调查估计，不能替代成熟个体数或自动改变 2012 年同域 IUCN CR、decreasing 评估。禁渔、岸线与江湖廊道修复、航运管理、声学监测、半自然故道保险种群和科学放归需要长期并行。',
    storySections: [
      {
        key: 'freshwater-species-boundary',
        label: '种界与适应',
        title: '从海洋祖先进入长江，淡水种界仍在检验',
        body: '群体基因组把长江个体分成清楚的遗传簇，并发现渗透调节与肾功能相关的淡水适应信号。MDD v2.5 因此把长江江豚与海生东亚江豚拆开；SMM 等待长江口潜在接触区的补充取样。目前 MDD 与 SMM 对物种边界的处理仍有分歧。',
      },
      {
        key: 'finless-dorsal-ridge',
        label: '外形识别',
        title: '没有背鳍，一条瘤粒脊短暂划过水面',
        body: '长江江豚的额部圆钝、吻突几乎不突出，背中线只有狭窄低矮的瘤粒脊。长江样本脊宽仅 0.2 至 0.8 厘米，滚动换气后很快消失在浑水中。嘴线自然上弯带来“微笑天使”昵称，却不能当成人类式情绪证据。',
      },
      {
        key: 'sound-guided-fishing',
        label: '声音与觅食',
        title: '在看不远的水里，用高频点击追随鱼群',
        body: '浑浊长江压缩视觉距离，高频回声定位承担导航、目标探测和捕食接近。鄱阳湖食性资料显示它在半洄游与定居鱼类之间灵活取食；港口声学记录中的点击串和捕食嗡鸣则随时段与鱼类可用性变化。',
      },
      {
        key: 'water-level-corridors',
        label: '水文生境',
        title: '随水位移动的江湖生境',
        body: '鄱阳湖低、中水位时，江豚从主湖体进入支流；高水位时返回主湖。水深、鱼类和人类活动共同移动，固定保护边界很容易错过季节核心区。深槽、支汊和江湖连接口要作为一个动态网络管理。',
      },
      {
        key: 'year-long-pregnancy',
        label: '繁殖与母幼',
        title: '妊娠约一年，幼体需要长期照护',
        body: '圈养激素和超声研究把妊娠估为约 12 个月，分娩多集中在 5 至 7 月。较慢的繁殖节律意味着种群回升依赖成年雌性、幼体和育幼水域的长期保护。',
      },
      {
        key: 'recovery-with-caveats',
        label: '保护进展',
        title: '调查数量回升，极危风险仍需评估',
        body: '官方估计从 2017 年 1,012 头增至 2022 年 1,249 头，2025 年专项调查又报 1,426 头。禁渔和系统保护取得可见进展；公开简报仍缺分区置信区间，年龄结构、干流碎片化、极端低水位和航运压力也没有消失。与现有种界对应的 IUCN 评估仍为极危，需要正式重评才能更新。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1972 年的长江命名记录',
        body: '1972 年，Pilleri 与 Gihr 以 Neomeris asiaeorientalis 描述这一长江淡水单元，模式产地记录为江苏、上海一带的长江。今天使用属名 Neophocaena。它与海生东亚江豚是两个物种还是同一物种的亚种，目前仍有不同处理，阅读历史研究时需核对其包含的范围。',
      },
    ],
    keyFacts: [
      'MDD v2.5 把 Neophocaena asiaeorientalis 限定为中国长江中下游淡水种，并把海生东亚江豚处理为 N. sunameri。',
      'SMM 2026 仍将长江和东亚沿海单元列为广义 N. asiaeorientalis 的两个亚种，理由包括长江口潜在接触区取样不足。',
      '与现有种界对应的 IUCN 记录采用与当前种界同域的旧亚种评估：CR、decreasing、2012、A3b+4b；2017 广义种 EN 评估还包含海生单元。',
      '2025 年专项调查估算自然种群 1,426 头，比 2022 年增加 177 头；这是全龄估计，不能填作成熟个体数。',
      '长江江豚是国家一级重点保护野生动物，同时列 CITES 附录 I；CMS 附录 II 条目沿用旧广义种口径。',
      '长江江豚没有背鳍，长江样本的背部瘤粒脊宽仅 0.2 至 0.8 厘米。',
      '审慎的实测成体样本包络为身长 131 至 168 厘米、体重约 33 至 83 千克；数值不表示全种绝对极值。',
      '鄱阳湖江豚随水位在主湖体、支流和连接水道之间季节移动，适宜水深会随水文期改变。',
      '它主要捕食半洄游和定居淡水鱼，结合被动听觉与高频回声定位在浑水中追踪猎物。',
      '圈养内分泌和超声资料估计妊娠约 12 个月；慢生命史要求长期保护成年雌性、幼体和育幼生境。',
      '鲸类在完整分类中属于偶蹄目 Artiodactyla。',
    ],
    threats: [
      '刺网、滚钩、电捕鱼及其他合法或非法渔具造成兼捕、缠绕、创伤和直接死亡',
      '历史过度捕捞与鱼类群落退化减少半洄游和定居鱼类猎物',
      '密集航运、水下噪声和近岸航线重叠引发回避、通讯干扰与优选生境挤压',
      '非法采砂、疏浚、港口工程和岸线硬化破坏洲滩、缓坡、支汊与鱼类栖息地',
      '水文改变、江湖连通下降和极端低水位增加廊道中断、浅水围困与搁浅风险',
      '工业、农业和城市污染物在食物网与组织中累积，形成长期健康压力',
      '干流分布空缺和小群隔离削弱迁移、配偶交换及局地灾害后的恢复能力',
    ],
    conservationActions: [
      '落实长江重点水域常年禁渔，持续打击电、毒、炸、滚钩和其他高风险非法作业',
      '保护并修复自然岸带、洲滩、支汊、汇流区与江湖连接口，按季节水位管理核心生境',
      '约束船舶使用指定航道，分江段评估船速、流量、夜间活动和累积水下噪声',
      '结合双船目视航线、被动声学、环境 DNA、遗传与健康监测，并公开调查不确定性',
      '在鄱阳湖、洞庭湖和极端低水位高风险区建立预警、巡查、救护与深水通道维护机制',
      '坚持就地保护为核心，以半自然故道保险种群和人工繁育作为辅助而非栖息地替代',
      '按健康、行为、遗传和捕食能力开展渐进野化放归，实施放归后追踪和失败预案',
      '控制工程与污染累积影响，维持鱼类资源和完整食物网，定期复核种群分区与连通性',
      '执行国家一级保护、CITES 与 CMS 管理要求，倡导不追逐、不触摸、不投喂的公众观察',
    ],
    metrics: {
      adultLengthCm: [131, 168],
      adultMassKg: [33, 83],
    },
    featuredStats: [
      {
        key: 'wild-population-2025',
        label: '2025 自然种群估算',
        value: '1,426',
        unit: '头',
        note: '专项调查全龄估计；不是成熟个体数，公开简报未给置信区间',
      },
      {
        key: 'increase-since-2022',
        label: '较 2022 年估算增加',
        value: '177',
        unit: '头',
        note: '两次专项调查的官方比较，不是逐头连续追踪',
      },
      {
        key: 'dorsal-ridge-width',
        label: '长江样本背部脊宽',
        value: '0.2—0.8',
        unit: '厘米',
        note: 'n=39；是瘤粒脊，不是背鳍',
      },
      {
        key: 'gestation',
        label: '妊娠期估计',
        value: '约 12',
        unit: '个月',
        note: '圈养个体孕酮与超声研究的小样本估计',
      },
    ],
    media: {
      image: './images/species/yangtze-finless-porpoise/01-yangtze-channel-portrait.webp',
      alt: '浑浊长江淡水中，一只完整灰色长江江豚从右向左游过，圆钝无喙头部、无背鳍背线、胸鳍和水平尾叶可见',
      focalPoint: { x: 0.72, y: 0.54 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/yangtze-finless-porpoise/02-rounded-head-and-dorsal-ridge.webp',
          alt: '斜俯水下视角中，一只完整长江江豚的圆钝头部、一枚近侧胸鳍、狭窄瘤粒脊和水平尾叶清楚可见，背部没有背鳍',
          title: '无背鳍的一条狭脊',
          caption:
            '长江样本的瘤粒脊宽仅 0.2 至 0.8 厘米，低矮而狭窄，容易在短暂换气后消失于浑水中。',
          focalPoint: { x: 0.53, y: 0.52 },
        },
        {
          image: './images/species/yangtze-finless-porpoise/03-connected-river-lake-habitat.webp',
          alt: '相连的长江式干流与湖泊水道、天然沙洲和湿地岸带占据大部画面，一只小比例长江江豚在深水通道内换气',
          title: '水位重画的江湖通道',
          caption:
            '江豚随水位在主湖、支流和连接水道间移动；画面重建通用连通水域，不声称是精确地点或调查记录。',
          focalPoint: { x: 0.69, y: 0.6 },
        },
        {
          image: './images/species/yangtze-finless-porpoise/04-surface-breath.webp',
          alt: '平静绿褐色淡水中，恰好一只长江江豚完成短暂滚动换气，圆钝前额、单个头顶呼吸孔和无背鳍背弧露出水面',
          title: '一次低而快的水面换气',
          caption:
            '江豚只短暂露出头部和一段背弧；稀薄呼气雾不能用来推算换气间隔、潜水时长或健康状态。',
          focalPoint: { x: 0.54, y: 0.51 },
        },
        {
          image: './images/species/yangtze-finless-porpoise/05-mother-and-calf-travel.webp',
          alt: '斜俯浑浊淡水中，一大一小两只长江江豚同向游动并保持清楚水隙，两套无背鳍背线与水平双叶尾鳍完整分离',
          title: '成体与幼体同行',
          caption:
            '约一年妊娠使每次育幼投入都很重要；重建画面不据外观确认成体性别、亲缘、幼体年龄或哺乳行为。',
          focalPoint: { x: 0.52, y: 0.54 },
        },
        {
          image: './images/species/yangtze-finless-porpoise/06-passive-acoustic-monitoring.webp',
          alt: '两名穿救生衣的研究人员在一艘小型科考船上操作采集设备，并用单根缆线把一个水听器垂直下放至河水中',
          title: '在低能见度里持续聆听',
          caption:
            '被动声学能记录点击活动；一次设备部署不能单独证明江豚的出现、缺席、身份或未经模型校正的个体数量。',
          focalPoint: { x: 0.48, y: 0.63 },
        },
      ],
    },
    sources: YANGTZE_FINLESS_PORPOISE_SOURCES,
    featured: true,
    publishedAt: YANGTZE_FINLESS_PORPOISE_CONTENT_DATE,
    updatedAt: YANGTZE_FINLESS_PORPOISE_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
