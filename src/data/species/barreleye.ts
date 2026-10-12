import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-macropinna-microstoma',
    slug: 'barreleye',
    names: { zh: '大鳍后肛鱼', en: 'Pacific Barreleye', aliases: ['太平洋桶眼鱼', '管眼鱼', 'Barreleye Fish'] },
    scientificName: 'Macropinna microstoma',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Actinopterygii', '辐鳍鱼纲'),
      taxon('Argentiniformes', '水珍鱼目'),
      taxon('Opisthoproctidae', '后肛鱼科'),
      taxon('Macropinna', '大鳍后肛鱼属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'], continents: ['亚洲', '北美洲'],
      regions: ['北太平洋', '白令海', '日本附近海域', '加利福尼亚与下加利福尼亚外海'],
      countries: ['日本', '美国', '墨西哥'],
      range: '分布于北太平洋，从白令海延伸至日本和墨西哥下加利福尼亚附近海域。加利福尼亚外海已有活体观察，其他地区的记录共同构成已知范围。',
      center: { lat: 36.7, lng: -122.1 },
    },
    habitats: [{ name: '深海中层水域', realm: 'marine', description: '悬游在离开海底的水体中；MBARI列出的观察深度为600 至 800米，上方只有微弱日光。', isPrimary: true }],
    measurements: { length: { max: 15, unit: 'cm', note: 'MBARI列出的最大体长，不是所有成鱼的典型长度。' } },
    diet: { types: ['carnivore'], foods: ['小型甲壳动物', '管水母等浮游动物'], description: '捕食浮游动物；研究者还提出它可能取走管水母触手捕获的小动物，这种取食关系仍需验证。' },
    activity: ['中层悬游', '向上观察', '眼睛转动'],
    tags: ['透明头罩', '管状眼睛', '深海鱼', '北太平洋', '后肛鱼科'],
    summary: '大鳍后肛鱼的眼睛藏在透明头罩里。它能先向上寻找食物，再转动管状眼睛看向前方。',
    description: '大鳍后肛鱼生活在北太平洋深水中，用宽阔鱼鳍维持近乎静止的悬游姿态。透明头罩内的绿色结构是管状眼睛的上端；嘴上方的两个暗点属于嗅觉器官。眼睛可以转动，先向上寻找食物，再朝前观察取食目标。它会捕食小型浮游动物，头罩防刺和从管水母触手取食的功能仍属待验证假说。',
    storySections: [
      {
        key: 'identity',
        label: '外形与分类',
        title: '辨认眼睛与嗅觉器官',
        body: '头罩内的绿色结构是眼睛，脸前方的暗点是嗅觉器官。FishBase 和 NCBI 将它列入水珍鱼目、后肛鱼科、大鳍后肛鱼属；旧资料可能使用胡瓜鱼目下的历史归属。',
      },
      {
        key: 'eyes',
        label: '视觉机制',
        title: '从朝上看到朝前',
        body: '管状眼睛适合收集弱光，却只能看见较窄的区域。MBARI研究者通过活体观察确认，眼睛可以在头罩内转动；鱼寻找上方食物时朝上看，取食时则能把视线转向前方。',
      },
      {
        key: 'shield',
        label: '透明头罩',
        title: '眼睛外面还有一层软罩',
        body: '眼睛周围包着充满液体的透明组织。研究者推测，这层罩也可能在鱼接近刺胞动物时保护眼睛；这一作用仍需验证。绿色眼部色素帮助辨认猎物的解释也属于功能假说。',
      },
      {
        key: 'feeding',
        label: '食物与行为',
        title: '悬在水中观察食物',
        body: '它用鱼鳍维持水中姿态，捕食小型浮游动物。研究者提出，它可能接近管水母伸展的触手，取走触手捕获的猎物。现有资料不足以把这个假说写成每次捕食都会发生的行为。',
      },
      {
        key: 'habitat',
        label: '栖息环境',
        title: '住在北太平洋的深水中',
        body: '它在北太平洋中层水域生活，不需要贴着海底游动。MBARI给出的600 至 800米是该机构介绍的深度范围，不能当作这个物种绝不会越过的界线。头部在照片里清楚可见，通常要借助水下设备照明。',
      },
      {
        key: 'research',
        label: '研究与保护',
        title: '用水下机器人观察活鱼',
        body: '水下机器人让研究者能观察活鱼头罩与眼睛的位置，补充捕捞标本难以保存的细节。FishBase的IUCN状态栏列为未评估（NE）；目前不能据此判断种群安全或下降。记录偶获、栖息深度和活体行为，有助于补足资料。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1939 年命名，活体观察解开眼睛之谜',
        body: 'Chapman 在 1939 年正式描述大鳍后肛鱼，现用名称为 Macropinna microstoma。早期研究一度认为管状眼睛只能固定朝上，捕捞标本的柔软头罩也容易破损。MBARI 在 2009 年介绍的活体研究确认，眼睛能在透明头罩内转动；水下录像和短时间船上饲养让这一结构得以完整观察。',
      },
    ],
    keyFacts: ['绿色眼睛位于透明头罩内部。', '嘴上方的暗点属于嗅觉器官。', '管状眼睛能从朝上转向朝前。', '借管水母触手取食和头罩防刺作用仍属假说。', 'FishBase列为未评估（NE），种群趋势未知。'],
    threats: ['FishBase记录有渔业偶获用途；偶获对种群的影响尚不明确。', '尚缺少可用于判断全球种群变化的资料。'],
    conservationActions: ['记录偶获地点、深度与个体信息，补充调查资料。', '通过水下机器人持续观察活体，记录头罩和取食行为。'],
    metrics: {},
    featuredStats: [
      { key: 'length', label: '最大体长', value: '15', unit: '厘米', note: 'MBARI列出的最大尺寸。' },
      { key: 'depth', label: '观察深度', value: '600–800', unit: '米', note: 'MBARI资料范围，不是绝对深度极限。' },
      { key: 'status', label: '保护等级', value: 'NE', note: 'FishBase列为未评估；种群趋势未知。' },
    ],
    media: {
      image: './images/species/barreleye/01-midwater-cover.webp',
      alt: '一条大鳍后肛鱼悬在画面右上方的深蓝水中，透明头罩、鱼鳍和尾鳍完整留在画内。',
      focalPoint: { x: 0.86, y: 0.38 }, credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/barreleye/02-transparent-head.webp', alt: '大鳍后肛鱼全身近景，透明头罩内有两个绿色眼部结构，嘴上方可见暗色嗅觉器官。', title: '找到真正的眼睛', caption: 'AI生成外形重建；用于辨认头罩和眼睛位置，组织纹理与身体比例不作为解剖测量。', focalPoint: { x: 0.6, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/barreleye/03-upward-gaze.webp', alt: '头部近景中，两只管状眼睛向透明头罩顶部伸展。', title: '头罩里的管状眼睛', caption: 'AI生成局部结构示意；鱼身有意裁出画面，静态图不展示完整眼球转动过程。', focalPoint: { x: 0.6, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/barreleye/04-broad-fins.webp', alt: '鱼悬在水中，身体两侧展开宽阔的半透明鱼鳍。', title: '展开鱼鳍悬游', caption: 'AI生成悬游情景；鱼鳍姿态为示意，不代表一次真实运动记录。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/barreleye/05-midwater-habitat.webp', alt: '大鳍后肛鱼周围漂着稀疏颗粒，身后是没有海底的暗色水体。', title: '生活在中层水体', caption: 'AI生成栖息情景；悬浮颗粒与照明作了可视化处理，并非实地定位照片。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/barreleye/06-rov-observation.webp', alt: '左侧水下机器人照亮水体，右侧一条大鳍后肛鱼保持距离悬游。', title: '水下机器人的观察', caption: 'AI生成研究情景；设备外观、鱼体比例和距离为示意，不对应MBARI某次潜航。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'MBARI — Barreleye fish', url: 'https://www.mbari.org/animal/barreleye-fish/', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'MBARI — Tubular eyes and transparent head（活体观察与功能假说）', url: 'https://www.mbari.org/news/researchers-solve-mystery-of-deep-sea-fish-with-tubular-eyes-and-transparent-head/', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'FishBase — Macropinna microstoma（分类、偶获与NE状态）', url: 'https://www.fishbase.org/summary/2704', kind: 'general', accessedAt: '2026-09-07' },
      { title: 'NCBI Taxonomy — Macropinna microstoma', url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=557410&lvl=0', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: 'University of Texas Marine Science Institute — Macropinna', url: 'https://utmsi.utexas.edu/science-and-the-sea/radio-program/macropinna/', kind: 'distribution', accessedAt: '2026-09-07' },
      {
        title: 'GBIF: Macropinna microstoma nomenclatural record',
        url: 'https://www.gbif.org/species/2411162',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true, publishedAt: '2026-09-07', updatedAt: '2026-09-07',
  } as const satisfies Species;

export default profile;
