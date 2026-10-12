import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-toxotes-jaculatrix',
    slug: 'banded-archerfish',
    names: { zh: '射水鱼', en: 'Banded Archerfish', aliases: ['条纹射水鱼'] },
    scientificName: 'Toxotes jaculatrix',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Actinopterygii', '辐鳍鱼纲'),
      taxon('Carangiformes', '鲹形目'),
      taxon('Toxotidae', '射水鱼科'),
      taxon('Toxotes', '射水鱼属'),
    ),
    conservation: conservation('LC', 'unknown', 2011),
    distribution: {
      realms: ['marine', 'freshwater'], continents: ['亚洲', '大洋洲'],
      regions: ['热带东印度洋', '西太平洋', '东南亚河口', '澳大利亚北部'],
      countries: ['印度', '菲律宾', '印度尼西亚', '巴布亚新几内亚', '澳大利亚', '所罗门群岛', '瓦努阿图'],
      range: '从印度向东至菲律宾，向南至印度尼西亚与澳大利亚北部，并延伸到新几内亚、所罗门群岛和瓦努阿图。常见于红树林河口，也有进入淡水河流和小溪的记录。',
      center: { lat: 1.5, lng: 115 },
    },
    habitats: [
      { name: '红树林咸淡水河口', realm: 'marine', description: '常在受潮汐影响的咸淡水河口浅水区活动，岸边悬垂枝叶提供观察陆生昆虫的位置。', isPrimary: true },
      { name: '河流与小溪', realm: 'freshwater', description: '本种也有进入淡水河流和小溪的记录，不能把射水鱼属内所有物种都视为只生活在咸淡水中。' },
    ],
    measurements: { length: { typical: 20, max: 30, unit: 'cm', note: '常见总长约20厘米，最大记录约30厘米，均含尾鳍；两者不构成成体长度范围。' } },
    diet: { types: ['omnivore', 'insectivore'], foods: ['陆生昆虫', '昆虫幼虫', '水面漂浮食物', '植物性物质'], description: '白天在水面附近觅食，既取食漂浮食物，也能喷出水柱击落枝叶上的昆虫。研究还观察到它在水下射水，翻动沉积物寻找食物。' },
    activity: ['日间觅食', '水面瞄准', '射水捕猎'],
    tags: ['射水捕虫', '折射补偿', '水流控制', '红树林', '咸淡水'],
    summary: '射水鱼把嘴凑到水面，向枝叶上的昆虫喷出水柱。它会调节嘴部开合，让水流在接近目标时集中起来，再吃掉落入水中的猎物。',
    description: '射水鱼身体侧扁，银色体侧上部有四至五道黑色条带，嘴朝前上方开口。它常在红树林河口浅水活动，白天观察枝叶上的昆虫，用水柱击落猎物，也直接取食水面食物。喷射时，较快的后段水流追上前段，让冲击集中在目标附近；它还会在水下射水，翻动沉积物。',
    storySections: [
      {
        key: 'identity',
        label: '认识射水鱼',
        title: '银色身体上的黑条带',
        body: '射水鱼的现用学名为Toxotes jaculatrix，属于射水鱼科、射水鱼属。它体侧上部有四至五道黑带，背鳍有四根硬棘。外形相似的近亲也会射水，辨认时需要结合条带、鳍棘和其他特征。Eschmeyer 鱼类目录将本科归入鲹形目。',
      },
      {
        key: 'shooting',
        label: '射水捕猎',
        title: '把水送到叶片上的昆虫身边',
        body: '发现水面上方的昆虫后，射水鱼把嘴移到水面，朝目标喷出一股水。水柱击中昆虫后，可能把它从枝叶上打落。射水鱼也会直接取食水面食物，并非每一餐都要先射击。',
      },
      {
        key: 'jet-control',
        label: '水流机制',
        title: '后面的水追上前面的水',
        body: '高速成像研究发现，射水鱼喷出的水流速度会随时间改变，后段较快的水追上前段，在水柱前端聚集。2014年的实验进一步发现，它会根据目标距离调节嘴部开口变化的时序，让水在接近目标时集中，增强冲击。',
      },
      {
        key: 'vision',
        label: '隔水瞄准',
        title: '光线经过水面会转弯',
        body: '昆虫反射的光从空气进入水中时会折射，鱼看到的方向因此发生偏移。射水鱼仍能从倾斜角度命中水面上方的目标，说明它能应对这种偏差。研究者用不同目标位置测试瞄准行为；具体怎样结合视觉、身体姿态和经验完成校正，不能简单解释为鱼在计算公式。',
      },
      {
        key: 'underwater',
        label: '水下觅食',
        title: '向泥沙喷出短水流',
        body: '2017年的实验记录了射水鱼在水下喷出水流，扰动沉积物以接近埋藏的食物。初步观察包括本种和斑点射水鱼；随后关于底质与嘴部开合的详细实验使用斑点射水鱼，不能把全部测量结果直接算作本种结论。',
      },
      {
        key: 'conservation',
        label: '栖息地与保护',
        title: '保留河口的枝叶和浅水',
        body: 'FishBase所列IUCN评估为无危（LC），评估年份为2011；全球种群趋势尚未核实。保护红树林岸线、减少污水进入河口，可以维护它取食和活动的环境。栖息地变化对本种各地种群的影响仍需当地调查，不能用全球等级替代监测。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1767 年命名的射水捕猎者',
        body: 'Pallas 在 1767 年正式命名射水鱼，现用学名为 Toxotes jaculatrix。俗名直接对应喷出水柱击落猎物的行为。高速摄影后来揭示，它能调节嘴部开合与水流速度，使水柱在接近不同距离的目标时聚集；水下射水的观察又补充了人们对其觅食方式的认识。',
      },
    ],
    keyFacts: ['常见总长约20厘米，最大记录约30厘米。', '体侧上部有四至五道黑带。', '会用水柱击落水面上方的昆虫。', '能随目标距离调节水流聚集的时机。', '能应对水面折射造成的瞄准偏差。', '也会在水下射水翻动沉积物。', '常栖息于红树林咸淡水河口。'],
    threats: ['红树林减少、岸线改造和水质变化属于需要监测的潜在压力，其对本种全球种群的影响程度尚未核实。'],
    conservationActions: ['维护红树林与河口浅水栖息地，减少岸线破坏和污染。', '记录当地分布、数量与栖息地变化，为后续评估积累资料。'],
    metrics: {},
    featuredStats: [
      { key: 'common-length', label: '常见总长', value: '约20', unit: '厘米', note: '含尾鳍；不是最小成体长度。' },
      { key: 'maximum-length', label: '最大记录', value: '约30', unit: '厘米', note: '总长，含尾鳍。' },
      { key: 'hunting', label: '捕猎方式', value: '射水', note: '以水柱击落水面上方的昆虫。' },
      { key: 'status', label: '保护等级', value: 'LC', note: '2011年评估为无危，全球趋势未核实。' },
    ],
    media: {
      image: './images/species/banded-archerfish/01-mangrove-cover.webp',
      alt: '一条完整的射水鱼在画面右上方的绿色水域游动，银色体侧带有黑色条带。',
      focalPoint: { x: 0.92, y: 0.32 }, credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/banded-archerfish/02-body-profile.webp', alt: '射水鱼侧面全身外形，银色身体上有黑带，半透明鱼鳍展开。', title: '银色体侧与黑条带', caption: 'AI生成外形示意；细鳍条和斑纹不能代替标本鉴定。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/banded-archerfish/03-aerial-shot.webp', alt: '射水鱼在水面向悬垂叶片上的昆虫喷出细水柱。', title: '从水面向上射击', caption: 'AI生成捕猎情景；用于展示鱼、水面和猎物的位置关系，不表示实测射击角度。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/banded-archerfish/04-jet-impact.webp', alt: '一股水击中叶片下方的昆虫，周围散开少量水滴。', title: '水流击中猎物', caption: 'AI生成冲击瞬间示意，不是高速实验摄影，不能据此测量速度或冲击力。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/banded-archerfish/05-underwater-foraging.webp', alt: '射水鱼低头靠近水底，嘴前的沉积物扬起，旁边有小型水生猎物。', title: '在水下翻动泥沙', caption: 'AI生成水下觅食重建；水流与沉积物仅作情景说明，猎物外形不能用于辨认昆虫幼虫。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/banded-archerfish/06-mangrove-habitat.webp', alt: '红树林根系沿着浅水溪道伸展，枝叶悬在水面上方。', title: '红树林河口', caption: 'AI生成栖息地示意，不对应特定实地记录点。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'Eschmeyer鱼类目录 — 射水鱼科在鲹形目中的归属', url: 'https://research.calacademy.org/research/ichthyology/catalog/SpeciesByFamily.asp', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: 'FAO西中太平洋鱼类指南 — 射水鱼科鉴别与本种分布', url: 'https://www.fao.org/4/y0770e/y0770e41.pdf', kind: 'distribution', accessedAt: '2026-09-07' },
      { title: 'FishBase — 射水鱼生态、体长与保护状态', url: 'https://www.fishbase.se/summary/8229', kind: 'conservation', accessedAt: '2026-09-07' },
      { title: 'Vailati et al. 2012 — 射水鱼脉冲水柱的冲击机制', url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0047867', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'Gerullis与Schuster 2014 — 主动调节水柱动力学', url: 'https://pubmed.ncbi.nlm.nih.gov/25201684/', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'Timmermans 2001 — 射击角度与命中概率', url: 'https://www.sciencedirect.com/science/article/pii/S0376635701001723', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: '2017年水下射水实验 — 扰动底质觅食', url: 'https://journals.biologists.com/jeb/article/220/6/1019/18834/Archerfish-use-their-shooting-technique-to-produce', kind: 'ecology', accessedAt: '2026-09-07' },
      {
        title: 'GBIF: Toxotes jaculatrix (Pallas, 1767) nomenclatural record',
        url: 'https://www.gbif.org/species/2382436',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true, publishedAt: '2026-09-07', updatedAt: '2026-09-07',
  } as const satisfies Species;

export default profile;
