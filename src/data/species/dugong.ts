import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const DUGONG_SOURCE_DATE = '2026-08-22' as const;

const DUGONG_CONTENT_DATE = '2026-08-22' as const;

const DUGONG_SOURCES = [
  {
    title: 'Society for Marine Mammalogy — List of Marine Mammal Species and Subspecies (April 2026)',
    url: 'https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/',
    kind: 'taxonomy',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database v2.5 — Dugong dugon',
    url: 'https://www.mammaldiversity.org/taxon/1000529/',
    kind: 'taxonomy',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Dugong dugon (assessed 2015; amended publication 2019)',
    url: 'https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T6909A160756767.en',
    kind: 'conservation',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'CMS 2025 — A Global Assessment of Dugong Status and Conservation Needs',
    url: 'https://doi.org/10.25903/0ncx-v838',
    kind: 'general',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'CMS — Dugong dugon, Appendix II and Dugong MOU',
    url: 'https://www.cms.int/species/dugong-dugon',
    kind: 'conservation',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'CMS Dugong MOU — Dugong facts',
    url: 'https://dugong.cms.int/species/dugong-facts',
    kind: 'general',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Australian Government DCCEEW — Dugongs',
    url: 'https://www.dcceew.gov.au/environment/marine/marine-species/dugongs',
    kind: 'general',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Cherdsukjai et al. 2020 — Age, body weight and body length in wild dugongs',
    url: 'https://doi.org/10.7717/peerj.10319',
    kind: 'general',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Queensland Government — Dugongs',
    url: 'https://www.qld.gov.au/environment/plants-animals/conservation/threatened-species/featured-projects/dugongs',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Great Barrier Reef Marine Park Authority — Dugong',
    url: 'https://www.gbrmpa.gov.au/learn/animals/dugong',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Great Barrier Reef Outlook Report 2024 — Dugongs',
    url: 'https://outlookreport.gbrmpa.gov.au/values/2-biodiversity/24-populations-species-and-groups-species/2416-dugongs',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局、农业农村部 — 国家重点保护野生动物名录（2021年第3号）',
    url: 'https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml',
    kind: 'conservation',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: '生态环境部、中国科学院 — 中国生物多样性红色名录·脊椎动物卷（2020；2023发布）',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Lin et al. 2022 — Functional extinction of dugongs in China',
    url: 'https://doi.org/10.1098/rsos.211994',
    kind: 'distribution',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Lin et al. 2025 — Interview-based sighting history of dugongs in China',
    url: 'https://doi.org/10.1098/rsos.250486',
    kind: 'distribution',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Sheppard et al. 2006 — Large-scale movement heterogeneity of dugongs',
    url: 'https://doi.org/10.1016/j.jembe.2006.01.011',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Preen 1995 — Dugong foraging and cultivation grazing in Moreton Bay',
    url: 'https://doi.org/10.3354/meps124201',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Preen 1995 — Diet of dugongs: are they omnivores?',
    url: 'https://doi.org/10.2307/1382325',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Ozawa et al. 2024 — Fecal DNA and sighting evidence in the Ryukyu Islands',
    url: 'https://doi.org/10.1038/s41598-024-58674-8',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Mousavi-Derazmahalleh et al. 2026 — Species-specific qPCR assay for dugong eDNA',
    url: 'https://doi.org/10.3389/fmamm.2026.1915420',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (effective 5 March 2026)',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: DUGONG_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-dugong-dugon',
    slug: 'dugong',
    names: {
      zh: '儒艮',
      en: 'Dugong',
      aliases: ['海牛', 'Sea Cow'],
    },
    scientificName: 'Dugong dugon',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Sirenia', '海牛目'),
      taxon('Dugongidae', '儒艮科'),
      taxon('Dugong', '儒艮属'),
    ),
    conservation: conservation('VU', 'decreasing', 2015, 'A2bcd+4bcd'),
    distribution: {
      realms: ['marine'],
      continents: ['非洲', '亚洲', '大洋洲'],
      regions: [
        '红海与西印度洋沿岸',
        '阿拉伯湾及南亚沿岸',
        '东南亚沿岸与群岛',
        '东亚南部',
        '澳大利亚北部沿岸',
        '西太平洋岛屿水域',
      ],
      countries: [],
      range:
        '儒艮分布于印度洋、西太平洋和红海热带与亚热带的沿岸、岛屿水域，主要活动区随海草床分布而呈不同大小的斑块。澳大利亚保有最大的区域种群。中国大陆南海近岸属于历史分布区，两轮大范围访谈研究支持当地已功能性灭绝。',
    },
    habitats: [
      {
        name: '热带与亚热带浅海海草床',
        realm: 'marine',
        description:
          '多数核心生境位于约 20 米以内、阳光够得到海底的沿岸浅水。细沙或泥沙上的海草是主要口粮；一片草床的面积、草种和营养好坏，决定它们留下还是转移。',
        isPrimary: true,
      },
      {
        name: '海湾、潟湖与红树林水道',
        realm: 'marine',
        description:
          '避风海湾、岛屿背风面、潮沟和红树林相邻水道可连接觅食斑块，也让母幼在浅水中移动；这些地点仍会与渔网和船只重叠。',
      },
      {
        name: '大陆架觅食斑块与移动通道',
        realm: 'marine',
        description:
          '宽阔浅大陆架上的离岸海草床同样可被利用。个体会穿过较深水域，在风暴、洪水或海草衰退后转移到新的觅食地。',
      },
    ],
    measurements: {
      length: {
        typical: 2.5,
        max: 3,
        unit: 'm',
        note: '泰国成熟个体研究均值约 2.5 米；政府概览给出的近似最大体长约 3 米',
      },
      weight: {
        typical: 250,
        max: 500,
        unit: 'kg',
        note: '泰国成熟个体均值约 250 千克；不同官方概览给出的最大值为 400—500 千克',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: ['海草', '大型藻类（偶见）', '海鞘等大型无脊椎动物（部分种群）'],
      description:
        '儒艮用带触须的下弯吻部探查海底，用两叶肌肉质上唇剪取叶片或拔起整株海草。海草是主食，部分地区的个体也摄食藻类、海鞘等大型无脊椎动物，比例随地区而变。',
    },
    activity: [
      '昼夜均可活动',
      '浅潜啃食海草并定期浮出换气',
      '独行、小群或在高质量草床局地聚集',
      '随海草、潮汐和风暴影响移动',
      '母幼保持长期紧密联系',
    ],
    tags: [
      '严格海生草食哺乳动物',
      '海草床',
      '儒艮科唯一现生种',
      'IUCN 易危',
      'CMS 附录 II',
      'CITES 附录 I',
      '国家一级保护野生动物',
      '中国海域功能性灭绝',
    ],
    summary: '儒艮属于海牛目，用下弯、带触须的吻部贴着海底取食。它育幼时间长，兼捕和海草床损失造成的种群损失难以迅速恢复。',
    description:
      '儒艮是儒艮科唯一现生种，终生生活在海洋中，是大型草食哺乳动物。宽阔下弯的吻部、分成两叶的上唇和新月形水平尾鳍，帮助它在海底取食与移动。现存种群分布于印度洋和西太平洋沿岸，许多地区数量稀少而分散。刺网兼捕、捕杀、船撞与海草床退化造成的损失，因它繁殖缓慢而难以迅速恢复。',
    storySections: [
      {
        key: 'dugong-not-manatee',
        label: '形态与分类',
        title: '新月形尾鳍，把儒艮与海牛属分开',
        body: '儒艮身体粗壮、呈流线形，两枚短前鳍肢辅助划水，水平尾叶推进，后肢已退化，背部没有背鳍。儒艮的尾鳍呈新月形，海牛属的尾则呈圆桨状，海豚通常有吻突和背鳍。两叶上唇向下弯，吻缘触须帮助探查海草。成年雄性和部分高龄雌性有露出的短门齿，但远距离水中观察不易看清。',
      },
      {
        key: 'seagrass-grazing',
        label: '取食',
        title: '一条食痕，只记录一次经过',
        body: '儒艮偏选低纤维、高氮的海草，用上唇夹取叶片，也会连根和地下茎一起拔起，在沙泥底留下蜿蜒食痕。反复啃食改变草床高度、更新与斑块分布。食痕能提供活动线索，个体身份、食量与当地数量还需其他调查。',
      },
      {
        key: 'movement-between-meadows',
        label: '移动',
        title: '草床改变，活动范围也会改变',
        body: '有些个体守着相邻的海湾活动，有些会跨过较深的水域寻找新草床。澳大利亚一项跟踪 70 只个体的研究，记录到最远离捕获点 560 千米的移动：长途旅行的本领确凿，至于各种群是否沿固定路线年年往返，答案各不相同。洪水、气旋和海洋热浪削弱海草时，个体可能离开故地、推迟繁殖，也可能因饥饿死去。',
      },
      {
        key: 'slow-reproduction',
        label: '繁殖与育幼',
        title: '一只幼仔，要用母兽数年来养',
        body: '雌性通常在 6 至 17 岁首次繁殖，妊娠约 12 至 14 个月，每胎多产一仔。幼仔在水下吸乳，随母 1 至 2 年，产仔间隔常为 3 至 7 年。即使自然死亡很低，模型给出的种群最大年增长率也只有约 5%，成年个体的额外死亡因此影响很大。',
      },
      {
        key: 'ecological-and-cultural-role',
        label: '海草床联系',
        title: '保护儒艮，也要让海草床保持连通',
        body: '儒艮拔取海草、穿行于斑块间，会改变海草群落，也可能携带海草繁殖体，帮助连接草床。海草床为幼鱼和无脊椎动物提供育幼场，稳定沉积物并储存蓝碳，即海洋植物吸收、储存在植被和沉积物中的碳。沿海社群与儒艮有长期生活和文化联系，保护方案也需要他们参与。',
      },
      {
        key: 'functional-extinction-in-china',
        label: '中国海域',
        title: '连续多年无确认记录之后',
        body: '2022 年研究访问 788 名渔民并汇总历史记录，发现 2008 年后无确认记录，据此判断中国大陆近岸已失去能维持繁殖的种群。2025 年第二轮访谈覆盖 841 人，记录一宗受访者报告的 2021 年疑似兼捕，仍支持功能性灭绝结论。个别游荡者可能出现，但不能证明稳定繁殖群体恢复；新证据核验、海草床修复与兼捕管控仍需继续。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1776 年的 Trichecus dugon',
        body: '米勒在 1776 年使用 Trichecus dugon 描述儒艮，原文的产地范围从好望角写到菲律宾。后来研究者设立儒艮属，形成今天的 Dugong dugon。早期书中的宽泛地点记载属于命名历史，现代分布和地方种群状态仍需要独立调查。',
      },
    ],
    keyFacts: [
      '儒艮是儒艮科唯一现生种；现生海牛目另外三种都属于海牛科海牛属。',
      '水平的新月形尾鳍有别于海牛属的圆桨状尾，背上也没有鲸豚那样的背鳍。',
      'CMS 资料概括成体可达约 3 米、500 千克；那是少数大个体才够得着的上限。',
      '昆士兰资料概括成体每天摄食约 30 千克海草，摄入量随个体和草床条件浮动。',
      '已记录个体可活到约 70 岁；这是物种的寿命量级，落到每只头上长短各异。',
      '妊娠约 12 至 14 个月，通常一胎一仔，幼仔随母 1 至 2 年，两胎常相隔 3 至 7 年。',
      'IUCN 全球评估为 VU、decreasing、2015、A2bcd+4bcd；2019 年发布的是修订版，评估年份仍是 2015。',
      '全球成熟个体总数未知；区域估计各有方法与年份，简单相加凑不出可靠的全球数字。',
      '中国两轮大范围访谈研究支持功能性灭绝；出现疑似记录或游荡个体时，谈恢复还需要更多证据。',
    ],
    threats: [
      '刺网及其他渔具造成兼捕、缠绕和溺亡',
      '直接捕杀、偷猎与不可持续利用',
      '船舶碰撞、浅水高速航行和旅游干扰',
      '疏浚、填海、港口、养殖与岸线开发破坏海草床',
      '陆源污染、营养盐与悬浮沉积物降低水质和海草光照',
      '洪水、气旋、海洋热浪与气候变化造成海草大面积衰退',
      '海洋垃圾与多种沿岸压力在小型、隔离种群中叠加',
    ],
    conservationActions: [
      '在高风险海区减少刺网暴露，记录兼捕并建立渔民参与的快速报告与安全释放机制',
      '保护和修复海草床，控制疏浚、锚泊、岸线开发、陆源营养盐与沉积物输入',
      '在觅食地实施船速、航线和观赏距离规则，降低碰撞与持续干扰',
      '结合航空或无人机调查、照片、遗传与环境 DNA 监测，分别估计出现、数量和趋势',
      '通过 CMS Dugong MOU 协调跨境种群、移动通道和沿海社区参与',
      '执行国家保护和 CITES 贸易管制，并对中国海域的新报告保留可核验的影像、样本和地点证据',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'typical-adult',
        label: '泰国成熟个体均值约',
        value: '2.5 m / 250 kg',
        note: '来自泰国地区研究；概览给出的最大值约 3 米、500 千克',
      },
      {
        key: 'gestation',
        label: '妊娠期约',
        value: '12—14',
        unit: '个月',
        note: '通常一胎一仔',
      },
      {
        key: 'calving-interval',
        label: '理想条件下产仔间隔',
        value: '3—7',
        unit: '年',
        note: '幼仔可随母 1 至 2 年',
      },
      {
        key: 'maximum-population-growth',
        label: '理论最大年增长率约',
        value: '≤5',
        unit: '%',
        note: '低自然死亡的理想条件估计',
      },
    ],
    media: {
      image: './images/species/dugong/01-seagrass-meadow-portrait.webp',
      alt: '清澈浅海的海草床上方，一只成年儒艮从右侧向左缓慢游过，下弯吻部和两枚前鳍肢清晰，尾鳍以接近侧面的角度伸向右侧',
      focalPoint: { x: 0.68, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/dugong/02-downturned-muzzle-grazing.webp',
          alt: '浅海海草床上，一只完整成年儒艮低下头，把宽阔触须吻部贴近海草取食，身体和水平尾鳍延伸到右侧',
          title: '用下弯吻部贴近草床',
          caption: '儒艮用分叶上唇夹取海草，吻缘触须帮助探查食物，摄食量取决于个体和草床条件。',
          focalPoint: { x: 0.46, y: 0.58 },
        },
        {
          image: './images/species/dugong/03-tropical-seagrass-habitat.webp',
          alt: '大片海草与浅色沙地交错的热带浅海中，一只小型远景儒艮在画面右侧完整游过',
          title: '由斑块连成的海草家园',
          caption: '海草床由一块块斑块拼成，面积、连通性和草种质量决定儒艮在哪里安家、往哪里赶路。',
          focalPoint: { x: 0.7, y: 0.42 },
        },
        {
          image: './images/species/dugong/04-surface-breath.webp',
          alt: '平静晨海的水线上，一只完整成年儒艮仅让吻顶与成对鼻孔露出水面，身体、前鳍肢和水平尾鳍仍在海草床上方水下',
          title: '只把鼻孔送出水面',
          caption: '儒艮用肺呼吸，会把吻部露出水面换气，通常没有鲸类那样明显的高喷气柱。',
          focalPoint: { x: 0.42, y: 0.47 },
        },
        {
          image: './images/species/dugong/05-mother-and-calf.webp',
          alt: '浅海海草床上方，恰好一只大型成年儒艮与一只小幼仔同向游动，幼仔贴近成体肩部下后方',
          title: '一只幼仔，数年的投入',
          caption: '雌性通常一胎一仔；幼仔随母 1 至 2 年，漫长育幼和产仔间隔限制了种群恢复速度。',
          focalPoint: { x: 0.54, y: 0.5 },
        },
        {
          image: './images/species/dugong/06-seagrass-edna-monitoring.webp',
          alt: '阴天浅海中，恰好两名研究人员坐在一艘无标识小艇内，一人用短杆和透明采样瓶取水，另一人用一块记录夹记录，水下海草清晰可见',
          title: '一瓶海水里的线索',
          caption: '环境 DNA 能提示这片海近期是否有儒艮经过；要把线索坐实成结论，还须重复采样，加上航空调查、影像和现场记录。',
          focalPoint: { x: 0.4, y: 0.52 },
        },
      ],
    },
    sources: DUGONG_SOURCES,
    featured: true,
    publishedAt: DUGONG_CONTENT_DATE,
    updatedAt: DUGONG_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
