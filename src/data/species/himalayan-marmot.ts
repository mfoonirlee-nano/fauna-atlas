import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-marmota-himalayana',
    slug: 'himalayan-marmot',
    names: { zh: '喜马拉雅旱獭', en: 'Himalayan Marmot', aliases: ['土拨鼠', '旱獭', '雪猪', 'Himalayan marmot', 'Marmota himalayana'] },
    scientificName: 'Marmota himalayana',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Rodentia', '啮齿目'),
      taxon('Sciuridae', '松鼠科'),
      taxon('Marmota', '旱獭属'),
    ),
    conservation: conservation('LC', 'unknown'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: ['青藏高原', '喜马拉雅山地', '拉达克'],
      countries: ['中国', '印度', '尼泊尔', '巴基斯坦'],
      range: '原生于青藏高原及喜马拉雅周缘山地，主要生活在适宜的高山开阔草地。各国的记录集中在部分高海拔区域。',
      center: { lat: 33, lng: 88 },
    },
    habitats: [
      { name: '高山草甸与草原', realm: 'terrestrial', description: '常见于林线以上的开阔草地，ADW概述常见海拔约3,500 至 5,200米；这是常见生境范围，并非全部分布极值。', isPrimary: true },
      { name: '高原土丘与缓坡', realm: 'terrestrial', description: '在适合挖掘的土层中营建洞穴。若尔盖研究中的繁殖洞多位于土丘，周边另有临时避难洞。' },
    ],
    measurements: {
      weight: { min: 4, max: 9.2, unit: 'kg', note: 'ADW汇总范围；体重随季节与个体变化，不能当作每只成体的常态。' },
    },
    diet: {
      types: ['herbivore'],
      foods: ['草本植物的叶与嫩茎', '根', '种子', '果实'],
      description: '以植物为食，取食组合随当地植被和季节改变。甘南草甸的粪便显微分析研究比较了自然与人类干扰生境，不能把一处样地的食物比例套用于整个物种。',
    },
    activity: ['昼行性', '洞居', '冬眠', '群居', '警戒'],
    tags: ['土拨鼠', '青藏高原', '高山草甸', '松鼠科', '冬眠', '洞穴', '植食', 'IUCN无危'],
    summary: '喜马拉雅旱獭生活在青藏高原及喜马拉雅山地的开阔草甸。它白天吃植物、警戒同伴周围的动静，用洞穴避险，并在寒冷季节冬眠。',
    description: '喜马拉雅旱獭身体粗壮，有短圆耳和短尾，黄褐色背毛下，额部和吻部常较深。它属于松鼠科，四肢适合掘土，繁殖与冬眠洞周围还可有临时避难洞。冬眠通常历时约 6 至 8 个月，期间会阶段性觉醒。俗称“土拨鼠”也用于其他旱獭，确认物种需要结合外形与产地。',
    storySections: [
      {
        key: 'identity',
        label: '外形与分类',
        title: '在地面生活的松鼠科成员',
        body: '喜马拉雅旱獭属于啮齿目、松鼠科、旱獭属。它用短而有力的四肢挖土，尾巴没有树栖松鼠那样长。辨认时应合看体形、短耳、脸部深色毛和尾部，不能只凭一张站立照片给旱獭定种。',
      },
      {
        key: 'burrows',
        label: '洞穴生活',
        title: '土丘上的主洞与附近的避难洞',
        body: '2021年发表的若尔盖研究比较了三处不同干扰程度的生境。研究者观察到，旱獭会在土丘上营建繁殖和冬眠用洞，并利用临时洞躲避威胁；干扰较强的样地有更多、间隔更近的避难洞。这是当地种群的应对方式，不能据此说它喜欢车流或追逐。',
      },
      {
        key: 'hibernation',
        label: '越冬方式',
        title: '把寒冷季节留在地下',
        body: '喜马拉雅旱獭会经历长时间冬眠，资料概述约为6 至 8个月，实际起止随地区和年份变化。研究者比较冬眠低代谢期与觉醒期的组织，发现肝脏脂肪酸代谢等通路的基因表达发生变化。它会在冬眠中阶段性觉醒，不能把整个冬季理解为一次连续不醒的睡眠。',
      },
      {
        key: 'vigilance',
        label: '警戒与交往',
        title: '抬身警戒与同伴接触',
        body: '旱獭在地面活动时会警戒威胁，也以叫声和身体接触交流，鼻部接触可出现在同伴相遇时。抬身站立是一种可观察的姿态，要判断是否鸣叫或具体交流内容，还需要声音与连续行为记录。',
      },
      {
        key: 'plateau',
        label: '高原适应',
        title: '在稀薄空气与低温中生活',
        body: '基因组研究比较了不同海拔的喜马拉雅旱獭，找到与缺氧应答、能量利用有关的候选遗传差异。这些结果为高原适应提供线索；研究者仍需功能实验检验具体机制，不能把候选基因写成已经证实的单一“耐寒开关”。',
      },
      {
        key: 'coexistence',
        label: '观察与保护',
        title: '把草甸和洞口留给旱獭',
        body: 'MDD列出的全球IUCN等级为无危，这不代表各地种群都没有压力。道路活动、犬只和局部放牧干扰仍值得关注。中国疾控中心建议游客不逗玩、不投喂旱獭，不在洞口周围坐卧，尤其不要接触病死动物。观察时留在远处，不为拍摄逼它退入洞中。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1841 年记录的喜马拉雅旱獭',
        body: 'Hodgson 在 1841 年以 Arctomys Himalayanus 正式命名本种，模式产地记录指向喜马拉雅及西藏地区，现用组合为 Marmota himalayana。长期穴居和冬眠是它适应高原生活的重要方式。现代研究又通过组织和基因组比较，探索缺氧应答与能量利用的变化，具体机制仍需实验检验。',
      },
    ],
    keyFacts: ['“土拨鼠”用于多个旱獭物种，喜马拉雅旱獭对应 Marmota himalayana。', '它属于松鼠科，依靠洞穴躲避威胁和越冬。', '冬眠中有低代谢与阶段性觉醒，不能等同于整冬不醒。', '站立姿势不等于正在鸣叫，静态图片也不能证明叫声内容。'],
    threats: ['局部道路、车辆与人员活动造成持续干扰', '犬只对野生旱獭的追逐与捕食', '部分地区的捕猎与过度放牧压力'],
    conservationActions: ['维护草甸与洞穴周围的生境，减少车辆碾压和人为逼近', '管理犬只，减少对野生动物的追逐', '不投喂、不逗玩，不接触病死旱獭；遵循当地保护与疾控提示'],
    metrics: { adultMassKg: [4, 9.2] },
    featuredStats: [
      { key: 'mass', label: '体重范围', value: '4—9.2', unit: 'kg', note: 'ADW汇总值，随季节与个体变化。' },
      { key: 'tail', label: '尾长', value: '12.5—15', unit: 'cm', note: 'ADW汇总范围，不含头体长度。' },
      { key: 'hibernation', label: '冬眠时段', value: '6—8', unit: '个月', note: '概述范围；实际起止因地、因年而异，期间有阶段性觉醒。' },
      { key: 'status', label: '全球保护等级', value: 'LC', note: 'IUCN无危；据MDD与RSPN转引，趋势未知，原始评估年份未核实。' },
    ],
    media: {
      image: './images/species/himalayan-marmot/01-alpine-meadow-cover.webp',
      alt: '一只喜马拉雅旱獭站在画面右侧的高原草坡上，远处是山地，完整短尾留在身后。',
      focalPoint: { x: 0.85, y: 0.34 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/himalayan-marmot/02-field-marks.webp', alt: '喜马拉雅旱獭侧身站在草地上，呈现粗壮身体、短圆耳和短尾。', title: '短耳、粗毛与短尾', caption: 'AI生成科学情景重建；表现外形组合，不作为体型测量或野外鉴定记录。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/himalayan-marmot/03-upright-vigilance.webp', alt: '喜马拉雅旱獭在洞口附近用后足撑起身体，前爪收在胸前。', title: '抬身观察', caption: 'AI生成科学情景重建；图中表现警戒姿态，不表示正在鸣叫或具有人的情绪。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/himalayan-marmot/04-meadow-foraging.webp', alt: '喜马拉雅旱獭俯下吻部，贴近草地上的绿色植物。', title: '草甸上取食', caption: 'AI生成科学情景重建；没有确定植物物种，也不能据图推算食谱比例。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/himalayan-marmot/05-burrow-entrance.webp', alt: '喜马拉雅旱獭停在草坡洞口外，附近露出挖掘过的土壤。', title: '洞口外的片刻', caption: 'AI生成科学情景重建；地下通道不可见，不能据洞口判断深度或冬眠状态。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/himalayan-marmot/06-social-contact.webp', alt: '两只体形不同的喜马拉雅旱獭在草地上靠近鼻部。', title: '同伴间的鼻部接触', caption: 'AI生成科学情景重建；表现社交接触，不证明两只动物的亲缘、性别或年龄。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'ASM Mammal Diversity Database — Marmota himalayana（含IUCN等级）', url: 'https://www.mammaldiversity.org/taxon/1001730/', kind: 'taxonomy', accessedAt: '2026-09-06' },
      { title: 'Animal Diversity Web — Marmota himalayana', url: 'https://animaldiversity.org/accounts/Marmota_himalayana/', kind: 'general', accessedAt: '2026-09-06' },
      { title: 'Bai et al. — Hypoxic and Cold Adaptation Insights from the Himalayan Marmot Genome', url: 'https://doi.org/10.1016/j.isci.2018.11.034', kind: 'ecology', accessedAt: '2026-09-06' },
      { title: 'Zhou et al. 2021 — Human activity and habitat utilization in Zoige wetland', url: 'https://aurora.auburn.edu/handle/11200/50001', kind: 'ecology', accessedAt: '2026-09-06' },
      { title: '草地学报2022 — 人类活动对甘南草甸喜马拉雅旱獭食性的影响', url: 'https://manu40.magtech.com.cn/Jweb_cdxb/EN/Y2022/V30/I5/1219', kind: 'ecology', accessedAt: '2026-09-06' },
      { title: 'RSPN Rangzhin 2023 — Himalayan marmot species watch', url: 'https://www.rspnbhutan.org/wp-content/uploads/2023/10/Rangzhin_Volume_16_Issue_1_2023.pdf', kind: 'conservation', accessedAt: '2026-09-06' },
      { title: '中国疾控中心 — 预防鼠疫，你需要知道的这些事', url: 'https://www.chinacdc.cn/jkkp/ggws/syyr/202408/t20240825_295563.html', kind: 'general', accessedAt: '2026-09-06' },
    ],
    featured: true,
    publishedAt: '2026-09-06',
    updatedAt: '2026-09-06',
  } as const satisfies Species;

export default profile;
