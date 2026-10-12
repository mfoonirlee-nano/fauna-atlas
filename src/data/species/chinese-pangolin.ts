import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const CHINESE_PANGOLIN_SOURCE_DATE = '2026-08-22' as const;

const CHINESE_PANGOLIN_CONTENT_DATE = '2026-08-22' as const;

const CHINESE_PANGOLIN_SOURCES = [
  {
    title: 'Mammal Diversity Database — Manis pentadactyla',
    url: 'https://www.mammaldiversity.org/taxon/1005797/',
    kind: 'taxonomy',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title:
      'Koju et al. 2026 — Revalidation of Manis aurita based on integrative genomic and morphological evidence',
    url: 'https://doi.org/10.1038/s42003-026-10314-9',
    kind: 'taxonomy',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Manis pentadactyla (2019 errata assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T12764A168392151.en',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices — effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'CITES Resolution Conf. 17.10 (Rev. CoP19) — Conservation of and trade in pangolins',
    url: 'https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-17-10-R19.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'CITES SC74 Doc. 73 Annex 2 — Implementation of Decision 18.240',
    url: 'https://www.cites.org/sites/default/files/eng/com/sc/74/E-SC74-73-A2.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'CITES Decisions 19.201–19.203 — pangolin species identification and stock controls',
    url: 'https://cites.org/sites/default/files/eng/dec/valid19/E19-Dec.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局公告 2020 年第 12 号 — 穿山甲调整保护级别',
    url: 'https://www.forestry.gov.cn/main/3457/20200619/092010699781014.html',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: '国家重点保护野生动物名录 2021 — 穿山甲 Manis pentadactyla',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局 2020 — 关于加大中华穿山甲保护的建议复文',
    url: 'https://www.forestry.gov.cn/c/www/gkjyfw/132202.jhtml',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: '台湾林业及自然保育署、台湾生物多样性研究所 2025 — 台湾穿山甲保育行动计划（第二版）',
    url: 'https://conservation.forest.gov.tw/File.aspx?fno=91300',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: '台湾林业及自然保育署 — 台湾穿山甲物种页',
    url: 'https://www.forest.gov.tw/0008047',
    kind: 'general',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Kong et al. 2021 — Distribution records and conservation status in China during 2010–2020',
    url: 'https://doi.org/10.17520/biods.2020446',
    kind: 'distribution',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Wu et al. 2021 — Observations of Chinese pangolins in mainland China',
    url: 'https://doi.org/10.1016/j.gecco.2021.e01460',
    kind: 'distribution',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Lee et al. 2017 — Diet of one juvenile Chinese pangolin in Hong Kong',
    url: 'https://doi.org/10.1177/1940082917709648',
    kind: 'ecology',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Sun, Pei & Wu 2021 — Long-term monitoring of wild reproductive behaviour',
    url: 'https://doi.org/10.1038/s41598-021-97618-4',
    kind: 'ecology',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Chin et al. 2012 — Gestation monitoring in rescued Formosan pangolins',
    url: 'https://doi.org/10.1002/zoo.20413',
    kind: 'ecology',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Sun, Lin & Pei 2025 — Characteristics and usage patterns of resting burrows',
    url: 'https://doi.org/10.1016/j.gecco.2025.e03406',
    kind: 'ecology',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Sun, Pei & Lin 2019 — Attaching tracking devices to Chinese pangolins in Taiwan',
    url: 'https://doi.org/10.1016/j.gecco.2019.e00700',
    kind: 'ecology',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2024 — Disturbance by free-ranging domestic dogs in Guangdong',
    url: 'https://doi.org/10.3390/d16070386',
    kind: 'conservation',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
  {
    title: 'Heath 1992 — Manis pentadactyla species account',
    url: 'https://doi.org/10.2307/3504143',
    kind: 'general',
    accessedAt: CHINESE_PANGOLIN_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-manis-pentadactyla',
    slug: 'chinese-pangolin',
    names: {
      zh: '中华穿山甲',
      en: 'Chinese Pangolin',
      aliases: ['穿山甲', '中国穿山甲', '鲮鲤', 'Short-tailed Pangolin'],
    },
    scientificName: 'Manis pentadactyla',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Pholidota', '鳞甲目'),
      taxon('Manidae', '鲮鲤科'),
      taxon('Manis', '穿山甲属'),
    ),
    conservation: conservation('CR', 'decreasing', 2019, 'A3d+4d'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: ['台湾、海南与中国南部及东部', '中南半岛北部（按 2026 种界仍待逐点复核）'],
      countries: ['中国', '老挝', '缅甸', '泰国', '越南'],
      range:
        '2026 年种界下，狭义 Manis pentadactyla 包括以台湾为模式产地的指名种群和海南 pusilla 谱系，主要分布于中国南部、东部及东南亚。过去归入本种的尼泊尔、藏南和印度东北部种群现属 Manis aurita；缅甸北部可能接触区及东南亚国家级边界仍需有凭证的遗传与形态采样复核。旧 MDD 国家列表和 IUCN 2019 范围仍停留在拆分前的口径，需要与现行狭义种范围分别解读。',
      center: { lat: 24.5, lng: 111.5 },
    },
    habitats: [
      {
        name: '亚热带与热带森林',
        realm: 'terrestrial',
        description:
          '原生和成熟阔叶林提供低干扰休息地、可挖掘土层、倒木以及稳定的蚂蚁和白蚁资源；连续林地有助于个体在多个休息洞之间移动。',
        isPrimary: true,
      },
      {
        name: '次生林、竹林与灌草镶嵌',
        realm: 'terrestrial',
        description:
          '台湾指名种群可利用次生林、竹林、混合林、灌草地和林缘；低干扰且具有黏土或壤土的地点可保留长期复用的休息洞。',
        isPrimary: true,
      },
      {
        name: '低强度农林与浅山里山环境',
        realm: 'terrestrial',
        description:
          '它也进入果园、农地和聚落边缘觅食，这些环境中的道路、犬只、兽夹、农药与开发会增加风险。',
      },
    ],
    measurements: {
      length: {
        min: 44,
        max: 56,
        unit: 'cm',
        note: '台湾指名种群头体长；尾长另有 30—40 厘米，全长要两项相加',
      },
      weight: {
        typical: 4.65,
        unit: 'kg',
        note: '台湾指名种群成体平均 4.5—4.8 千克的展示中点；其他地区的数字仍待补充',
      },
    },
    diet: {
      types: ['insectivore'],
      foods: ['蚂蚁', '白蚁', '蚁蛹与幼体', '有翅繁殖型社会性昆虫'],
      description:
        '中华穿山甲专食蚂蚁和白蚁。它凭嗅觉定位巢穴，用前爪打开土壤、朽木或巢体，再伸出细长黏性舌取食。猎物组成随地区、季节和可利用巢穴而变，单一个体的胃样本不能代表全种食谱。',
    },
    activity: [
      '以陆栖和掘洞生活为主，前爪用于建立休息洞与打开社会性昆虫巢',
      '台湾材料多记录傍晚至夜间出洞，白天在休息洞隐蔽；其他地区的作息表仍待记录',
      '通常独居，繁殖、雄性造访育幼洞及母兽携带单仔时例外',
      '在活动范围内轮换多个休息洞，洞穴可被不同个体共享并跨季节重复利用',
      '受威胁时蜷成鳞球护住柔软的腹面；这身铠甲挡得住猛禽利爪，却挡不住人手和犬群的持续围攻',
    ],
    tags: [
      'IUCN极危',
      'CITES附录I',
      '国家一级保护',
      '鳞甲目',
      '食虫动物',
      '掘洞',
      '夜间活动',
      '单仔育幼',
      '分类新修订',
    ],
    summary:
      '中华穿山甲披着角蛋白鳞片，挖洞休息，专食蚂蚁和白蚁。它主要分布于中国南部、东部及东南亚，南喜马拉雅种群在 2026 年被另列为 Manis aurita。',
    description:
      '中华穿山甲是以台湾为模式产地的鳞甲目哺乳动物，具有圆锥形头部、明显耳廓、宽菱形重叠角蛋白鳞片、发达五爪前肢和相对较短的尾。它在中国南部、东部及东南亚的森林、次生林、竹林与低强度农林镶嵌中建立并轮换休息洞，专食蚂蚁和白蚁。2026 年整合分类研究把南喜马拉雅的 Manis aurita 从旧广义种中恢复，令分布和保护资料必须重新校正；IUCN 当前仍沿用拆分前的 2019 年评估，将其列为极危、趋势下降。过度利用和非法贸易是全球核心威胁，生境破碎、犬伤、兽夹、路杀及潜在污染和疾病风险在不同地区叠加。',
    storySections: [
      {
        key: 'aurita-split',
        label: '分类更新',
        title: '南喜马拉雅种群另列物种',
        body: '2026 年基因组、模式标本与形态研究将南喜马拉雅的 Manis aurita 恢复为独立种，估计它与狭义中华穿山甲约在 180 万年前分化。旧资料中的尼泊尔、藏南和印度东北部记录改归该种，缅甸北部的边界仍需更多采样。',
      },
      {
        key: 'scales-and-claws',
        label: '独特身体',
        title: '鳞片保护身体，前爪用于挖掘',
        body: '角蛋白鳞片重叠覆盖头背、躯干和尾部，腹面仍柔软。圆锥形头、明显耳廓和五爪前肢是本种的外形特征，粗壮前爪能挖洞、打开蚁巢。穿山甲没有牙齿，主要用黏性长舌取食。',
      },
      {
        key: 'burrow-is-not-individual',
        label: '监测边界',
        title: '一只动物会使用多个休息洞',
        body: '无线电追踪显示，一只个体可轮换数十个休息洞，同一洞也会被不同个体共享、跨季节重用，洞口压实也不一定已弃用。洞穴提供活动线索，估算密度还需记录检测概率并开展重复调查。',
      },
      {
        key: 'selective-myrmecophagy',
        label: '选择性觅食',
        title: '挑食的蚁巢猎人',
        body: '香港一只幼体胃中超过 2.6 万件猎物，支持它直接打开树上或地表蚁巢取食；台湾排遗显示猎物组成随季节改变。单一个体胃中的猎物数量不能当作每日食量，这些结果说明它专食蚂蚁和白蚁，并随地区与季节选择猎物。',
      },
      {
        key: 'single-pup-maternal-care',
        label: '繁殖与育幼',
        title: '一只幼仔，在多个育幼洞之间长大',
        body: '台湾一只雌兽四年间两次在 12 月初各产一仔，并在核心活动区多个洞穴间转移幼仔，第一胎育幼 157 天。该个案记录了野外母幼行为，约 150 天妊娠与延迟着床仍主要依据小样本，需要进一步研究。',
      },
      {
        key: 'trade-and-recovery',
        label: '保护链条',
        title: '非法贸易与地方生境风险',
        body: 'IUCN 怀疑拆分前广义种在三个世代下降超过 80%，CITES 附录 I 之后非法贸易仍未绝迹。恢复需要供应链执法与种级法证，也需要连续生境、标准化监测、犬只和道路管理、规范救伤放归及社区需求降低同时推进。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年名称与台湾模式产地',
        body: '林奈在 1758 年命名 Manis pentadactyla，现行数据库将模式产地列为台湾。这个名称曾涵盖更广的亚洲种群，2026 年研究恢复南喜马拉雅的 Manis aurita 为独立种后，中华穿山甲的范围收窄。早期保护评估仍沿用较广范围，不能直接作为狭义物种的现状。',
      },
    ],
    keyFacts: [
      '当前接受名为 Manis pentadactyla，模式产地为台湾；MDD 首选英文名是 Short-tailed Pangolin。',
      '2026 年 Manis aurita 恢复为独立种，南喜马拉雅记录不再属于狭义中华穿山甲。',
      'IUCN 当前正式值为 CR、趋势下降、2019 年评估、准则 A3d+4d，但评估证据早于物种拆分。',
      '现行 CITES 附录将中华穿山甲列入附录 I，中国大陆名录将其列为国家一级重点保护野生动物。',
      '台湾指名种群头体长 44 至 56 厘米、尾长 30 至 40 厘米，成体平均 4.5 至 4.8 千克。',
      '身体大部覆以角蛋白鳞片，腹面和四肢内侧无鳞；发达五爪前肢用于掘洞和打开昆虫巢。',
      '核心食物是蚂蚁和白蚁，猎物选择随地区与季节变化；单一个体的胃内容物撑不起每日食量的推断。',
      '个体轮换多个休息洞，洞穴还会被共享、复用；从洞口数到种群密度，中间隔着一道换算。',
      '野外资料通常为每胎一仔；台湾完整个案的约 150 天妊娠和 157 天育幼只来自一只雌兽。',
    ],
    threats: [
      '肉和鳞片需求驱动的盗猎、国内非法交易与跨境走私',
      '道路、建设、农业扩张和持续干扰造成的森林及浅山生境丧失、退化与破碎化',
      '自由活动犬只造成的攻击、创伤、死亡与活动空间干扰，严重程度具有区域差异',
      '兽夹等非目标猎具、道路死亡、沟渠与其他人工结构造成的伤亡和阻隔',
      '农药与污染物累积以及犬源病原等潜在健康风险，剂量和种群效应仍需研究',
      '每胎通常一仔、低自然密度与破碎种群导致的缓慢恢复',
      '新旧种界错位造成的分布误判、扣押物误鉴、风险评估滞后和错误放归',
    ],
    conservationActions: [
      '联合范围国、过境国和消费市场打击盗猎与非法供应链，对扣押物尽量完成种级法证鉴定',
      '保护并连接有可挖掘土层、低干扰休息洞和稳定蚁白蚁资源的森林、竹林及农林镶嵌',
      '组合标准化相机、占域模型、遗传或环境 DNA、个体标记和重复调查，不以洞穴数替代个体数',
      '补充缅甸北部等缺资料区的有凭证样本，更新 Manis pentadactyla 与 M. aurita 的边界',
      '建立救伤、检疫、原产地鉴定、放归地评估和放归后追踪 SOP，避免来源不明个体跨区释放',
      '在犬只冲突热点实施饲主管理、游荡犬控制，并减缓兽夹、路杀、沟渠和道路阻隔',
      '与社区推进友善农作、减少除草剂和杀虫剂，保护林缘昆虫资源并建立威胁通报网络',
      '开展有评估的需求降低、库存控制和公众教育，并推动 IUCN、CITES 与国家数据库同步新种界',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'aurita-divergence',
        label: '与南喜马拉雅种分化',
        value: '约 1.8',
        unit: '百万年',
        note: '2026 年基因组时钟均值，95% 置信区间约 1.3 至 2.5 百万年；分化时间早于现存种群',
      },
      {
        key: 'iucn-decline',
        label: 'IUCN 怀疑三个世代下降',
        value: '>80',
        unit: '%',
        note: '2019 年拆分前评估，三个世代约 21 年、主要归因于捕猎和非法贸易；狭义种的独立重算仍待进行',
      },
      {
        key: 'china-records',
        label: '中国确认发现记录',
        value: '142 / 11',
        unit: '条 / 省级行政区',
        note: '2010 至 2020 年资料汇编；记录量不是个体总数，西南边缘记录还需按新种界复核',
      },
      {
        key: 'usual-litter-size',
        label: '野外通常每胎',
        value: '1',
        unit: '仔',
        note: '依据台湾官方行动计划和一只雌兽连续两年的单仔记录；例外情形仍可能存在',
      },
    ],
    media: {
      image: './images/species/chinese-pangolin/01-forest-floor-portrait.webp',
      alt: '潮湿的东亚亚热带森林地面，一只完整的深灰褐中华穿山甲在右侧低头行走，圆形耳廓、重叠鳞片、粗壮前爪和完整尾巴清晰可见，左侧为较暗的林地留白',
      focalPoint: { x: 0.68, y: 0.61 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/chinese-pangolin/02-scale-and-claw-anatomy.webp',
          alt: '一只中华穿山甲的近距离侧前方全身视图，圆锥形头部、明显圆耳、宽菱形重叠鳞片、三枚发达中爪和较短的完整尾巴清晰可见',
          title: '鳞片是角蛋白，前爪才是挖掘工具',
          caption: '台湾指名种群的圆耳、重叠鳞片和五爪前肢清晰可辨；想靠数鳞片行数分辨两个近缘种，分类学家已证明此路不通。',
          focalPoint: { x: 0.48, y: 0.54 },
        },
        {
          image: './images/species/chinese-pangolin/03-core-natural-habitat.webp',
          alt: '雨后的亚热带次生阔叶林、竹林和草地开口形成连续镶嵌，一只小型中华穿山甲位于右下方一块自然裸露、轻微扰动的可挖掘土壤旁',
          title: '可挖掘土壤，只是核心生境的一部分',
          caption: '次生林、竹林、草地与可挖掘的黏壤土，共同提供觅食和休息的条件；画面里那片裸露的松软土面，正是它最爱下手的地方。',
          focalPoint: { x: 0.68, y: 0.72 },
        },
        {
          image: './images/species/chinese-pangolin/04-ant-foraging.webp',
          alt: '夜间湿润林地中，一只中华穿山甲把粗壮前爪抵在倒木旁，并将细长舌头伸入腐木中的疑似蚁巢缝隙',
          title: '舌头探进一道缝隙',
          caption: '香港一只幼体的胃内容物与台湾排遗，共同勾勒出一份挑剔而随季节变化的蚁白蚁食谱；画面是觅食机制的示意。',
          focalPoint: { x: 0.51, y: 0.58 },
        },
        {
          image: './images/species/chinese-pangolin/05-mother-and-single-pup.webp',
          alt: '夜间林坡一处洞口附近，一只短尾的中华穿山甲母兽缓慢行走，尾基和臀部稳稳背着恰好一只鳞片较细小的灰色幼仔',
          title: '一只幼仔，在多个育幼洞之间长大',
          caption: '台湾野外个案记录了母兽背着独仔辗转多个育幼洞；“一胎一仔”是目前的稳健图景，具体天数则来自那只被长期追踪的雌兽。',
          focalPoint: { x: 0.54, y: 0.58 },
        },
        {
          image: './images/species/chinese-pangolin/06-burrow-camera-monitoring.webp',
          alt: '日间的亚热带次生林中，恰好两名研究人员带着一块记录夹在树旁设置一台红外相机，镜头朝向数米外的候选洞穴并保持非接触',
          title: '一次拍到，只是一次检测',
          caption: '研究者结合相机、重复调查和遗传证据估算趋势，单张照片仅能提供一次出现记录。',
          focalPoint: { x: 0.52, y: 0.58 },
        },
      ],
    },
    sources: [
      ...CHINESE_PANGOLIN_SOURCES,
      {
        title: 'Smithsonian Q?rius：穿山甲没有牙齿，使用舌头摄食',
        url: 'https://qrius.si.edu/taxonomy/term/12162',
        kind: 'ecology',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: CHINESE_PANGOLIN_CONTENT_DATE,
    updatedAt: CHINESE_PANGOLIN_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
