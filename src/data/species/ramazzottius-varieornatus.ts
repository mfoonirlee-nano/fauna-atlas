import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-ramazzottius-varieornatus',
    slug: 'ramazzottius-varieornatus',
    names: { zh: '拉氏熊虫', en: 'Ramazzottius varieornatus', aliases: ['水熊虫', '缓步动物'] },
    scientificName: 'Ramazzottius varieornatus',
    taxonomy: animalTaxonomy(
      taxon('Tardigrada', '缓步动物门'), taxon('Eutardigrada', '真缓步纲'),
      taxon('Parachela', '并爪目'), taxon('Ramazzottiidae', '拉氏熊虫科'), taxon('Ramazzottius', '拉氏熊虫属'),
    ),
    conservation: { ...conservation('NE', 'unknown'), assessor: '本次未核实到本种IUCN全球评估；暂按NE收录，非正式评估结论。' },
    distribution: {
      realms: ['terrestrial'], continents: ['亚洲'], regions: ['日本北海道札幌'], countries: ['日本'],
      range: '研究者从日本札幌的苔藓中采得用于建立培养体系的个体。此处列出已核实的研究材料来源，不代表本种只分布于日本。',
      center: { lat: 43.06, lng: 141.35 },
    },
    habitats: [{ name: '苔藓中的水膜', realm: 'terrestrial', description: '生活在陆地苔藓微环境中，活动、取食与生长需要周围有水。', isPrimary: true }],
    measurements: {},
    diet: { types: ['herbivore'], foods: ['普通小球藻'], description: '研究者用普通小球藻Chlorella vulgaris培养本种。培养食物记录不能视为完整的野外食谱。' },
    activity: ['水膜中爬行', '脱水隐生', '复水恢复'],
    tags: ['缓步动物', '水熊虫', '隐生体', '苔藓', '显微世界'],
    summary: '拉氏熊虫在苔藓的水膜里用短足爬行。环境变干时，它能收拢身体和足，缩成隐生体；水分回来后，存活个体可以重新伸展、恢复活动。',
    description: '拉氏熊虫是缓步动物门的微小动物，有四对不分节的短足，在苔藓水膜中爬行和取食。失水时它能缩成桶状隐生体，代谢降到难以检测的水平；复水后，存活个体可恢复活动。实验室能用普通小球藻培养它，研究者由此比较卵、幼体和成体的脱水能力，并寻找参与细胞保护的蛋白质。',
    storySections: [
      {
        key: 'identity',
        label: '认识拉氏熊虫',
        title: '显微鉴定需要比较爪和口咽结构',
        body: '水熊虫是缓步动物的俗称，包含许多物种。拉氏熊虫对应 Ramazzottius varieornatus，NCBI 将其归入真缓步纲、并爪目、Ramazzottiidae 科和 Ramazzottius 属；较早文献曾把该属列入 Hypsibiidae。鉴定还需比较爪、口咽结构和卵的特征。',
      },
      {
        key: 'body',
        label: '活动状态',
        title: '四对短足在水膜中爬行',
        body: '伸展时，它有四对短而不分节的足，末端带爪。苔藓之间少量的水就能提供活动空间。',
      },
      {
        key: 'anhydrobiosis',
        label: '脱水隐生',
        title: '把身体缩成隐生体',
        body: '失水时，本种能收拢足和身体，形成桶状隐生体，代谢降到难以检测的水平。它能耐受较快的干燥，但存活仍取决于脱水过程、暴露条件与持续时间。复水后，存活个体重新伸展并恢复活动；并非每个个体都会恢复，也没有固定适用于所有条件的恢复时长。',
      },
      {
        key: 'proteins',
        label: '细胞保护',
        title: '研究者寻找保护细胞的蛋白质',
        body: '2016年的基因组研究发现了与本种耐受能力相关的候选基因和蛋白质。其中Dsup能与DNA结合，研究者让人类培养细胞表达它后，观察到X射线造成的DNA损伤减少。这是细胞实验结果，不能理解成人也能像水熊虫那样脱水生活，更不能把一种蛋白质当作全部耐受机制。',
      },
      {
        key: 'feeding',
        label: '取食与繁殖',
        title: '用小球藻养育下一代',
        body: '2008年的培养研究以普通小球藻作为食物，记录了卵、幼体与成体。实验中，卵平均约5.7天孵化，个体在孵化后第9天开始产卵；这些时间来自特定培养条件。研究还观察到卵、幼体与成体都有脱水隐生能力，不能据此推断它们在任意干燥环境下都能存活。',
      },
      {
        key: 'habitat',
        label: '栖息地与保护',
        title: '保留苔藓中的微小空间',
        body: '已核实的研究材料来自日本札幌的苔藓。本种的完整分布、种群数量与 IUCN 全球评估尚未核实。观察时可先看苔藓和水膜，减少刮除与采集；有关保护的建议针对微栖息地，并非本种威胁的量化结论。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1993 年命名，培养体系推动耐受研究',
        body: 'Bertolani 与 Kinchin 在 1993 年正式命名 Ramazzottius varieornatus。2008 年的研究建立了以小球藻为食的培养体系，后来基因组研究又找到 Dsup 等候选保护蛋白。Dsup 在人类培养细胞中减少 X 射线 DNA 损伤的结果，属于细胞实验，仍不能代表整个人体获得同样耐受能力。',
      },
    ],
    keyFacts: ['属于缓步动物门，水熊虫是类群俗称。', '身体有四对短足。', '脱水后能缩成桶状隐生体。', '存活个体复水后可以恢复活动。', '实验室可用普通小球藻培养。', '耐受能力取决于状态和实验条件。'],
    threats: ['本种具体威胁及影响程度尚待调查。'],
    conservationActions: ['保留苔藓及其微栖息地，减少刮除和采集。', '调查分布与微环境，结合显微特征确认物种。'],
    metrics: {},
    featuredStats: [
      { key: 'legs', label: '短足', value: '4', unit: '对', note: '足末端有爪。' },
      { key: 'state', label: '脱水状态', value: '隐生体', note: '代谢降到难以检测的水平。' },
      { key: 'food', label: '培养食物', value: '小球藻', note: '普通小球藻Chlorella vulgaris。' },
      { key: 'hatching', label: '实验平均孵化', value: '5.7', unit: '天', note: '2008年培养研究：5.7±1.1天，不是野外固定值。' },
    ],
    media: {
      image: './images/species/ramazzottius-varieornatus/01-moss-cover.webp',
      alt: '一只浅琥珀色拉氏熊虫在画面右侧的苔藓碎屑间伸展短足，左侧是模糊的绿色背景。',
      focalPoint: { x: 0.92, y: 0.32 }, credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/ramazzottius-varieornatus/02-active-body.webp', alt: '伸展的水熊虫有柔软的身体和带爪短足。', title: '活动时的身体', caption: 'AI生成显微外形示意，爪形与体表纹理不用于物种鉴定。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/ramazzottius-varieornatus/03-dry-tun.webp', alt: '脱水后的水熊虫收缩成表面带褶皱的桶状隐生体。', title: '脱水后的隐生体', caption: 'AI生成收缩状态示意；褶皱与体积不对应实测数据。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/ramazzottius-varieornatus/04-rehydration.webp', alt: '水膜中的水熊虫开始伸展身体和短足。', title: '复水后的伸展', caption: 'AI生成复水过程示意，不是连续显微录像或固定时间点。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/ramazzottius-varieornatus/05-algal-feeding.webp', alt: '水熊虫的口部靠近绿色小球藻细胞。', title: '小球藻作为培养食物', caption: 'AI生成培养取食示意；不代表完整野外食谱，藻细胞比例经过简化。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/ramazzottius-varieornatus/06-moss-habitat.webp', alt: '潮湿苔藓覆盖灰色基质，叶片之间留有水分。', title: '苔藓中的微栖息地', caption: 'AI生成栖息地示意，不对应精确采集点；此尺度下不展示水熊虫。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'NCBI Taxonomy — Ramazzottius varieornatus分类路径', url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=947166&lvl=0', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: 'Horikawa等2008 — 拉氏熊虫培养体系与生活史', url: 'https://doi.org/10.1089/ast.2007.0139', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'Hashimoto等2016 — 基因组、脱水耐受与Dsup细胞实验', url: 'https://www.nature.com/articles/ncomms12808', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'JAXA研究报告 — 札幌苔藓来源与培养研究', url: 'https://jaxa.repo.nii.ac.jp/record/17667/files/SA6000008059.pdf', kind: 'distribution', accessedAt: '2026-09-07' },
      {
        title: 'GBIF: Ramazzottius varieornatus Bertolani & Kinchin, 1993 nomenclatural record',
        url: 'https://www.gbif.org/species/2253920',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true, publishedAt: '2026-09-07', updatedAt: '2026-09-07',
  } as const satisfies Species;

export default profile;
