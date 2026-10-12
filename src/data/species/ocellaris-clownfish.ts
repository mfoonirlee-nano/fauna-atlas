import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-amphiprion-ocellaris',
    slug: 'ocellaris-clownfish',
    names: { zh: '眼斑双锯鱼', en: 'Ocellaris Clownfish', aliases: ['小丑鱼', '公子小丑', '眼斑海葵鱼', 'Common Clownfish'] },
    scientificName: 'Amphiprion ocellaris',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Actinopterygii', '辐鳍鱼纲'),
      taxon('Perciformes', '鲈形目'),
      taxon('Pomacentridae', '雀鲷科'),
      taxon('Amphiprion', '双锯鱼属'),
    ),
    conservation: conservation('LC', 'unknown', 2021),
    distribution: {
      realms: ['marine'], continents: ['亚洲', '大洋洲'],
      regions: ['东印度洋', '东南亚海域', '琉球群岛', '台湾周边海域', '澳大利亚西北部'],
      countries: ['印度', '泰国', '马来西亚', '新加坡', '印度尼西亚', '菲律宾', '日本', '中国', '澳大利亚'],
      range: '分布于印度洋东部至西太平洋，从安达曼海和东南亚向北到台湾与琉球群岛，向南到澳大利亚西北部，主要依赖有适宜宿主海葵的浅海礁区。',
      center: { lat: 5, lng: 118 },
    },
    habitats: [
      { name: '浅海珊瑚礁', realm: 'marine', description: '在大型海葵附近活动，遇到危险时退回触手之间。', isPrimary: true },
      { name: '平静潟湖', realm: 'marine', description: '利用潟湖中有宿主海葵的礁石地带。' },
    ],
    measurements: { length: { max: 11, unit: 'cm', note: 'FishBase记录的最大全长，包含尾鳍；不是所有成体的常见长度。' } },
    diet: { types: ['omnivore'], foods: ['浮游动物', '小型甲壳动物', '藻类'], description: '在海葵附近摄取浮游动物和藻类，也吃小型甲壳动物。宿主提供藏身处，鱼仍需外出取食。' },
    activity: ['白天活动', '海葵共生', '等级群居', '护卵'],
    tags: ['小丑鱼', '海葵共生', '黏液保护', '雄先熟', '护卵', '珊瑚礁'],
    summary: '眼斑双锯鱼常见橙色身体和三道白带，生活在印度洋东部至西太平洋浅海礁区。它在海葵触手间藏身，外出摄食浮游动物等食物，繁殖雄鱼主要负责护卵。',
    description: '眼斑双锯鱼是俗称“小丑鱼”的多个物种之一，身体侧扁、尾鳍圆，澳大利亚北部还存在黑色体色型。体表黏液帮助它减少海葵刺细胞的触发。小群体按体型形成等级，较大的雌鱼与次大的雄鱼负责繁殖；雌鱼消失后，繁殖雄鱼可逐步转变为雌鱼。卵产在海葵附近的硬质表面，雄鱼会扇水和整理卵团。',
    storySections: [
      {
        key: 'identity',
        label: '外形与分类',
        title: '认出三道白带，还要核对物种',
        body: '眼后的白带、中段白带和尾柄白带是成体的醒目标记。它与海葵双锯鱼Amphiprion percula外观接近，鉴定还需核对鳍棘、鳍条等特征。澳大利亚博物馆与台湾鱼类资料库采用辐鳍鱼纲、鲈形目口径；FishBase与WoRMS采用不同的高阶元安排，不能把这些名称逐项混接。',
      },
      {
        key: 'mucus',
        label: '避开蜇刺',
        title: '黏液让海葵少触发刺细胞',
        body: '海葵用带刺细胞的触手捕食，眼斑双锯鱼却能在宿主触手间停留。2025年的实验发现，包括本种在内的海葵鱼体表黏液中某些唾液酸含量较低，有助于减少刺细胞放电。研究者还发现幼鱼发育阶段与抗蜇能力相关。这种保护依赖生物和发育条件，不能理解成对所有海葵毒素都免疫。',
      },
      {
        key: 'home',
        label: '浅海生活',
        title: '在海葵附近找食物',
        body: '它生活在礁区和潟湖，常见记录水深为1至15米。海葵让小鱼获得庇护，小鱼会离开触手短距离觅食，吃浮游动物、小型甲壳动物和藻类。两者都是动物：鱼用鳃呼吸，海葵属于刺胞动物，外形像花却不是海底植物。',
      },
      {
        key: 'sex-change',
        label: '群体与繁殖',
        title: '繁殖雄鱼能转变为雌鱼',
        body: '一个群体通常由较大的繁殖雌鱼、次大的繁殖雄鱼及较小的未繁殖成员组成。雌鱼消失后，繁殖雄鱼可以转变为雌鱼，这叫雄先熟。研究者在本种人工繁育群体中记录过这一过程。性腺、激素与行为的改变并不同时完成，不能把它写成瞬间转换，也不能只凭两条鱼的大小确定性别。',
      },
      {
        key: 'egg-care',
        label: '照顾后代',
        title: '雄鱼守着贴在岩面的卵',
        body: '雌鱼把卵产在海葵附近的硬质表面，卵附着在基底上。雄鱼承担主要照料，用鳍扇动水流并用嘴整理卵团。针对眼斑双锯鱼的实验还记录到，移除繁殖亲鱼后，部分未繁殖成员会照顾无亲缘关系的卵；这说明护卵行为也会随群体条件改变。',
      },
      {
        key: 'conservation',
        label: '栖地与保护',
        title: '保留海葵，也保留小鱼的住处',
        body: 'FishBase列出本种2021年2月3日的IUCN全球评估为无危，现有资料未核实全球种群趋势。无危不代表各地数量都稳定：印度尼西亚的实地研究把观赏鱼采集压力与当地鱼群体型、遗传多样性变化联系起来。保护礁区和宿主海葵、减少野外采集，才能保留这些共生群体。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1830 年正式命名的小丑鱼',
        body: 'Cuvier 在 1830 年正式命名眼斑双锯鱼，现用学名为 Amphiprion ocellaris。三道白带是常见外形线索，但它与 Amphiprion percula 很相似，仍需核对鳍棘等结构。现代繁育和行为研究还记录了雄先熟的性别转换，以及群体条件改变时非繁殖成员照顾无亲缘卵的行为。',
      },
    ],
    keyFacts: [
      '小丑鱼是多个物种的通称，眼斑双锯鱼对应 Amphiprion ocellaris。',
      '常见成体有三道白带，尾鳍呈圆形。',
      '繁殖雄鱼可以转变为雌鱼，过程需要时间。',
      '雄鱼主要负责照顾附着在硬质表面的卵。',
      '11厘米是记录的最大全长；2021年全球无危等级不等于局部种群没有压力。',
    ],
    threats: ['观赏鱼贸易造成的局部采集压力', '礁区与宿主海葵的损失'],
    conservationActions: ['观察时保持距离，不触碰或采集海葵及野生小丑鱼。', '支持礁区与海葵栖地保护，了解观赏鱼是否来自人工繁育。'],
    metrics: {},
    featuredStats: [
      { key: 'bars', label: '成体白带', value: '3', unit: '道', note: '分别位于眼后、身体中段与尾柄。' },
      { key: 'length', label: '记录最大全长', value: '11', unit: '厘米', note: 'FishBase记录，包含尾鳍。' },
      { key: 'depth', label: '记录栖息水深', value: '1–15', unit: '米', note: '浅海礁区与潟湖记录范围。' },
    ],
    media: {
      image: './images/species/ocellaris-clownfish/01-reef-cover.webp',
      alt: '一只眼斑双锯鱼在画面右侧向左游动，吻端、各鳍和圆形尾鳍完整留在画内。',
      focalPoint: { x: 0.84, y: 0.34 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/ocellaris-clownfish/02-field-marks.webp', alt: '眼斑双锯鱼的侧面近景，橙色身体上有三道白带和黑色鳍缘。', title: '三道白带与圆尾鳍', caption: 'AI生成科学情景重建；呈现外形组合，鳍条细节不能替代标本鉴定。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/ocellaris-clownfish/03-anemone-shelter.webp', alt: '眼斑双锯鱼停在褐色海葵触手间，部分腹侧鳍受遮挡。', title: '触手间的藏身处', caption: 'AI生成科学情景重建；黏液成分与刺细胞放电不可见，海葵外观不作为物种鉴定依据。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/ocellaris-clownfish/04-size-hierarchy.webp', alt: '两只体型不同的眼斑双锯鱼游在海葵上方。', title: '大小不同的同伴', caption: 'AI生成科学情景重建；繁殖配对是场景设定，静帧不能证明性别或展示性别转换。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/ocellaris-clownfish/05-egg-care.webp', alt: '眼斑双锯鱼靠近岩面上一片橙色卵团，胸鳍展开。', title: '守在卵团旁', caption: 'AI生成科学情景重建；表现护卵姿势，不能据图测出水流、卵数或胚胎发育阶段。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/ocellaris-clownfish/06-reef-foraging.webp', alt: '眼斑双锯鱼在海葵附近的水中张开小嘴，周围有细小悬浮颗粒。', title: '离开触手短距离觅食', caption: 'AI生成科学情景重建；颗粒未指定物种，画面不证明捕食成功或食谱比例。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'Australian Museum — Western Clown Anemonefish（分类与外形）', url: 'https://australian.museum/learn/animals/fishes/western-clown-anemonefish-amphiprion-ocellaris-cuvier-1830/', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: '台湾鱼类资料库 — 眼斑双锯鱼', url: 'https://fishdb.sinica.edu.tw/taxon/382320-fishdb', kind: 'general', accessedAt: '2026-09-07' },
      { title: 'FishBase — Amphiprion ocellaris（分布、最大全长与2021年IUCN评估）', url: 'https://www.fishbase.org/summary/Amphiprion-ocellaris.html', kind: 'conservation', accessedAt: '2026-09-07' },
      { title: 'Animal Diversity Web — Amphiprion ocellaris（食性与生态）', url: 'https://animaldiversity.org/accounts/Amphiprion_ocellaris/', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'BMC Biology 2025 — Anemonefish use sialic acid metabolism to avoid stinging', url: 'https://doi.org/10.1186/s12915-025-02144-8', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'CMFRI — Sex change of hatchery produced Amphiprion ocellaris', url: 'https://eprints.cmfri.org.in/5834/', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'Hormones and Behavior 2022 — Behavior during male-to-female sex change', url: 'https://doi.org/10.1016/j.yhbeh.2022.105239', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'Scientific Reports 2020 — Alloparental care in Amphiprion ocellaris', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7067848/', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'Frontiers in Marine Science 2018 — Reduced genetic diversity in exploited reefs', url: 'https://doi.org/10.3389/fmars.2018.00080', kind: 'conservation', accessedAt: '2026-09-07' },
      {
        title: 'GBIF: Amphiprion ocellaris Cuvier, 1830 nomenclatural record',
        url: 'https://www.gbif.org/species/5212106',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: '2026-09-07',
    updatedAt: '2026-09-07',
  } as const satisfies Species;

export default profile;
