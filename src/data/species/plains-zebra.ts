import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-equus-quagga',
    slug: 'plains-zebra',
    names: { zh: '平原斑马', en: 'Plains Zebra', aliases: ['普通斑马'] },
    scientificName: 'Equus quagga',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'), taxon('Mammalia', '哺乳纲'),
      taxon('Perissodactyla', '奇蹄目'), taxon('Equidae', '马科'), taxon('Equus', '马属'),
    ),
    conservation: conservation('NT', 'decreasing', 2016),
    distribution: {
      realms: ['terrestrial'], continents: ['非洲'], regions: ['东非', '南部非洲'],
      countries: ['安哥拉', '博茨瓦纳', '刚果民主共和国', '斯威士兰', '埃塞俄比亚', '肯尼亚', '马拉维', '莫桑比克', '纳米比亚', '卢旺达', '南非', '南苏丹', '坦桑尼亚', '乌干达', '赞比亚', '津巴布韦'],
      range: '原生于东非和南部非洲的草原、稀树草原与开阔疏林。MDD 将索马里记录列为存疑，现有核心范围未据此延伸。',
      center: { lat: -12, lng: 29 },
    },
    habitats: [
      { name: '草原与稀树草原', realm: 'terrestrial', description: '在开阔草地取食，随草料和水源的季节变化调整活动范围。', isPrimary: true },
      { name: '开阔疏林', realm: 'terrestrial', description: '也生活在林木稀疏、地面有草生长的环境中。' },
    ],
    measurements: {},
    diet: { types: ['herbivore'], foods: ['禾本科草本', '少量灌木枝叶'], description: '主要吃草，用前齿截取草叶，每天花许多时间低头取食，也会少量啃食灌木。' },
    activity: ['群居', '吃草', '部分种群季节性迁移'],
    tags: ['黑白条纹', '草原', '马科', '家庭群', '季节性迁移'],
    summary: '平原斑马在非洲草地上结群吃草。每匹身上的条纹都有差别，研究者可以比对照片，认出曾经记录过的个体。',
    description: '平原斑马生活在东非和南部非洲的草原、稀树草原及开阔疏林，以草为主要食物。短直鬃毛、尾端毛簇和黑白体纹是外形线索，部分南部种群还有浅褐影纹。它常以家庭群生活，多个家庭可聚成大群；部分种群随草料和水源季节迁移。每匹条纹的差异也能帮助研究者用照片识别个体。',
    storySections: [
      {
        key: 'identity',
        label: '认识平原斑马',
        title: '草原上的马科动物',
        body: '平原斑马的学名为Equus quagga，属于奇蹄目、马科、马属。平原斑马、山斑马和细纹斑马是不同物种，不能只看到黑白条纹就把它们算作同一种。平原斑马的条纹外观也随地区和个体变化。',
      },
      {
        key: 'stripes',
        label: '条纹识别',
        title: '沿着条纹认出同一匹',
        body: '拍下身体侧面的照片，再比对黑白条纹的分叉和走向，研究者就能辨认个体。你可以先找肩部或臀部的一处分叉，再观察周围几道条纹。',
      },
      {
        key: 'flies',
        label: '条纹实验',
        title: '虻靠近后，降落更困难',
        body: '2019年的研究观察了圈养平原斑马与家马周围的虻。虻会靠近两者，但在斑马身上成功降落较少；研究者给家马穿上条纹外罩后，也记录到较少降落。飞行录像显示，虻靠近斑马时没有像靠近家马那样充分减速。这支持条纹干扰降落的解释，但不能据此认定条纹只有一种作用。',
      },
      {
        key: 'feeding',
        label: '草食生活',
        title: '低头吃草，也要寻找水源',
        body: '平原斑马用前齿截取草叶，花许多时间进食。干湿季交替时，一些种群会迁移，前往草料和饮水条件更合适的地方；另一些种群不进行长距离季节性迁移。观察某一群的路线，不能直接推成整个物种的固定行程。',
      },
      {
        key: 'family',
        label: '群居与幼仔',
        title: '大群里的小家庭',
        body: '平原斑马常由一匹成年雄性、几匹雌性和幼仔组成家庭群。多个家庭可以聚到一起，形成更大的群体，原来的家庭关系仍会保留。幼仔跟随母亲活动。',
      },
      {
        key: 'conservation',
        label: '保护现状',
        title: '为草地与水源保留通路',
        body: 'IUCN在2016年将平原斑马评为近危（NT），种群趋势为下降。这是该年评估，不能当作2026年的新调查。狩猎、套索误捕以及阻断迁移通路的围栏会带来压力。保护草地和通往水源的通路，并持续记录当地数量，有助于保护这些群体。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1785 年的 Equus Quagga',
        body: 'Boddaert 在 1785 年以 Equus Quagga 正式命名，现用学名为 Equus quagga，模式产地记录指向南非瓦尔河以南地区。名字的历史来自南部种群，今天这一物种的分类范围覆盖平原斑马的多个地区种群。条纹随地区和个体变化，现代照片识别与条纹实验又为研究提供了不同用途。',
      },
    ],
    keyFacts: ['学名为Equus quagga，属于马科。', '研究者可用不同个体的条纹进行照片识别。', '主要吃草，也会少量取食灌木。', '常以家庭群生活，多个家庭可聚成大群。', '只有部分种群进行季节性迁移。', 'IUCN 2016年评估为近危，趋势下降。'],
    threats: ['狩猎与套索误捕。', '围栏阻断迁移通路，限制草料和水源的可达性。', '干旱与畜牧用地变化带来的栖息地压力。'],
    conservationActions: ['保护草地与饮水地点之间的通路。', '减少非法猎捕和套索风险。', '连续监测各地种群和栖息地变化。'],
    metrics: {},
    featuredStats: [
      { key: 'family', label: '所属科', value: '马科', note: '奇蹄目，马属。' },
      { key: 'diet', label: '主要食物', value: '草', note: '也会少量取食灌木。' },
      { key: 'social', label: '群体结构', value: '家庭群', note: '多个家庭可汇成大群。' },
      { key: 'status', label: '保护等级', value: 'NT', note: '2016年评估为近危。' },
    ],
    media: {
      image: './images/species/plains-zebra/01-savanna-cover.webp',
      alt: '一匹完整的平原斑马站在画面右侧远处的草坡上，左侧留有开阔草地。',
      focalPoint: { x: 0.92, y: 0.32 }, credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/plains-zebra/02-body-profile.webp', alt: '平原斑马侧面全身外形，短鬃直立，黑白条纹覆盖身体。', title: '侧面的黑白条纹', caption: 'AI生成外形示意；条纹不对应可识别的真实个体。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/plains-zebra/03-grazing.webp', alt: '平原斑马低下头，在短草地上吃草。', title: '低头取食草叶', caption: 'AI生成取食情景，不是野外行为录像的截帧。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/plains-zebra/04-family-group.webp', alt: '几匹成年平原斑马与一匹幼仔在开阔草地上聚集。', title: '家庭群一起活动', caption: 'AI生成群居示意，不能从画面确定成年个体性别或亲缘。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/plains-zebra/05-mare-and-foal.webp', alt: '一匹成年平原斑马身旁站着体型较小、条纹偏褐的幼仔。', title: '母亲身旁的幼仔', caption: 'AI生成母仔情景，未指定幼仔日龄，也不用于测量生长速度。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/plains-zebra/06-savanna-habitat.webp', alt: '稀树草原上有金色草地、远处的树木和浅水洼。', title: '草地与水源', caption: 'AI生成栖息地示意，不对应特定野外记录点。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'Mammal Diversity Database — 平原斑马分类与分布', url: 'https://www.mammaldiversity.org/taxon/1006127/', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: 'San Diego Zoo Wildlife Alliance — 斑马外形、食性与家庭群', url: 'https://animals.sandiegozoo.org/animals/zebra', kind: 'general', accessedAt: '2026-09-07' },
      { title: 'IUCN 2016 — 平原斑马全球评估', url: 'https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T41013A45172424.en', kind: 'conservation', accessedAt: '2026-09-07' },
      { title: 'Caro等 2019 — 斑马条纹与虻的接近、降落行为实验', url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210831', kind: 'ecology', accessedAt: '2026-09-07' },
    ],
    featured: true, publishedAt: '2026-09-07', updatedAt: '2026-09-07',
  } as const satisfies Species;

export default profile;
