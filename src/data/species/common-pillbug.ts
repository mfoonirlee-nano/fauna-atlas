import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-armadillidium-vulgare',
    slug: 'common-pillbug',
    names: { zh: '寻常球鼠妇', en: 'Common Pillbug', aliases: ['西瓜虫', '球鼠妇', 'Common Pill Woodlouse', 'Roly-poly'] },
    scientificName: 'Armadillidium vulgare',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Malacostraca', '软甲纲'),
      taxon('Isopoda', '等足目'),
      taxon('Armadillidiidae', '球鼠妇科'),
      taxon('Armadillidium', '球鼠妇属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['欧洲', '非洲'],
      regions: ['地中海周缘', '欧洲南部', '非洲北部'],
      countries: [],
      range: '原生范围以欧洲南部和非洲北部的地中海周缘为核心。北美洲、日本、澳大利亚等地已有随人类活动引入的种群，具体传播过程需结合当地历史记录。',
      center: { lat: 38, lng: 15 },
    },
    habitats: [
      { name: '落叶层与腐木下', realm: 'terrestrial', description: '在遮阴、潮湿而不积水的地表缝隙中藏身。', isPrimary: true },
      { name: '花园与绿篱', realm: 'terrestrial', description: '利用石块、落叶和土壤间的空隙活动。' },
    ],
    measurements: { length: { typical: 10, unit: 'mm', note: 'Animal Diversity Web给出的年轻成体典型体长，不能代表成体上下限。' } },
    diet: { types: ['detritivore'], foods: ['腐解落叶', '植物碎屑', '果实', '种子'], description: '主要咬食腐解植物材料，也会取食其他植物组织。' },
    activity: ['地表爬行', '夜间觅食', '卷球', '聚集'],
    tags: ['陆生甲壳动物', '等足目', '落叶层', '碎屑食性', '卷球防御', '西瓜虫'],
    summary: '寻常球鼠妇是生活在落叶、石块和腐木下的陆生甲壳动物，主要吃腐解植物。受到干扰时，它把足和触角收进背甲，卷成小球。',
    description: '寻常球鼠妇有隆起的灰色分节背甲，成体用七对步足爬行，常在夜间或湿度较高时外出。它需要遮阴、潮湿但不长期积水的缝隙，咬碎落叶并参与有机物分解。卷球既能遮护柔软腹面，在某些实验条件下也能降低失水。“西瓜虫”可指多种会卷球的动物，辨认本种仍需查看形态。',
    storySections: [
      {
        key: 'identity',
        label: '外形与分类',
        title: '背甲下面有七对步足',
        body: '寻常球鼠妇归入软甲纲等足目、球鼠妇科球鼠妇属。成体的七个胸节各带一对步足；从背面看，短足常藏在体缘下。头前最显眼的是一对触角。',
      },
      {
        key: 'conglobation',
        label: '卷球防御',
        title: '把柔软腹面收进球里',
        body: '受到压力或强烈振动时，它能让身体首尾相接，把足和触角藏进背甲围成的球内。这种姿势保护腹面，但不能保证躲过所有捕食者。',
      },
      {
        key: 'water',
        label: '水分平衡',
        title: '卷球也能减少失水',
        body: 'Smigel与Gibbs在2008年发表实验：在18±1℃干燥空气中，同一个体卷球时的失水速率比展开时低34.8%。研究者用软橡皮圈维持卷球姿势；另一组湿度实验在较高湿度下未检出显著差异，因此不能把34.8%当作野外固定值。',
      },
      {
        key: 'respiration',
        label: '陆地生活',
        title: '潮湿缝隙提供藏身处',
        body: '球鼠妇腹部附肢具有适应空气呼吸的结构，呼吸表面仍涉及水分散失。它会在落叶和腐木下躲避干燥，夜间或湿度升高时外出。长时间积水也不适合作为陆生球鼠妇的栖身环境。',
      },
      {
        key: 'life-cycle',
        label: '取食与繁殖',
        title: '在落叶层长大',
        body: '它以腐解植物材料为主要食物，咬碎落叶，参与地表有机物的分解。雌性腹面的育儿囊容纳卵和早期幼体，幼体离开后通过蜕皮长大。',
      },
      {
        key: 'range',
        label: '分布与观察',
        title: '花园里的跨洲旅客',
        body: '洛杉矶自然历史博物馆记录了园区中的寻常球鼠妇，并把欧洲南部和非洲北部列作原产区域。土壤和植物运输可帮助这类动物跨区传播，具体到某个种群仍需历史证据。观察后把石块和落叶放回原位，避免把动物连土带到别处。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1804 年正式命名的“西瓜虫”之一',
        body: 'Latreille 在 1804 年正式命名本种，现用名称为 Armadillidium vulgare。生活在陆地上、能卷成球的外观容易让人把它当作昆虫，它实际是等足目甲壳动物。后来的水分实验发现，卷球可以在干燥空气中减少失水，但效果随湿度和试验条件改变。',
      },
    ],
    keyFacts: [
      '“西瓜虫”是俗名，寻常球鼠妇对应的科学名称为 Armadillidium vulgare。',
      '成体有七对步足；它属于等足目。',
      '完整卷球时可把触角收进球内。',
      '34.8%的失水速率差异来自18±1℃干燥空气实验。',
      '现有资料列本种为未评估，尚无可核实的独立全球风险评估与趋势。',
    ],
    threats: ['干燥和地表遮蔽物减少会影响局部栖身条件；没有据此推断全球种群趋势。'],
    conservationActions: ['保留适量落叶、腐木及潮湿地表缝隙。', '观察后恢复遮蔽物，避免跨地区释放或搬运带虫土壤。'],
    metrics: {},
    featuredStats: [
      { key: 'length', label: '年轻成体典型体长', value: '10', unit: '毫米', note: '资料典型值，非全种成体范围。' },
      { key: 'legs', label: '成体步足', value: '7', unit: '对' },
      { key: 'water-loss', label: '卷球时失水速率降低', value: '34.8', unit: '%', note: '18±1℃干燥空气实验，非野外固定值。' },
    ],
    media: {
      image: './images/species/common-pillbug/01-leaf-litter-cover.webp',
      alt: '一只寻常球鼠妇在画面右侧的湿润落叶上爬行，完整触角与身体留在画内。',
      focalPoint: { x: 0.96, y: 0.34 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/common-pillbug/02-field-marks.webp', alt: '灰色球鼠妇在落叶上爬行，呈现隆起的分节背甲。', title: '隆起的分节背甲', caption: 'AI生成科学情景重建；足部存在遮挡，不能据图计数或鉴定标本。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/common-pillbug/03-conglobation.webp', alt: '球鼠妇卷成灰色小球，背甲围住身体。', title: '卷成小球', caption: 'AI生成科学情景重建；表现卷球姿势，不表示一次实测的防御或保水结果。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/common-pillbug/04-leaf-litter.webp', alt: '球鼠妇头部靠近腐解落叶的破损边缘。', title: '落叶边缘的食物', caption: 'AI生成科学情景重建；静帧不能证明吞食或测出分解速率。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/common-pillbug/05-shelter.webp', alt: '几只球鼠妇靠在潮湿腐树皮下。', title: '树皮下的藏身处', caption: 'AI生成科学情景重建；不能据图判断亲缘、性别或聚集原因。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/common-pillbug/06-moss-walk.webp', alt: '球鼠妇沿苔藓与落叶交界处爬行，短足位于背甲下方。', title: '贴近湿润地表', caption: 'AI生成科学情景重建；画面不能测量湿度，腹面呼吸结构未展示。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'Animal Diversity Web — Armadillidium vulgare', url: 'https://animaldiversity.org/accounts/Armadillidium_vulgare/', kind: 'general', accessedAt: '2026-09-06' },
      { title: 'Natural History Museum — Nature Gardens Pill Bugs', url: 'https://nhm.org/stories/nature-gardens-pill-bugs', kind: 'distribution', accessedAt: '2026-09-06' },
      { title: 'Smigel & Gibbs 2008 — Conglobation as a water conservation mechanism', url: 'https://gibbs.faculty.unlv.edu/Pill%20Bug%202008.pdf', kind: 'ecology', accessedAt: '2026-09-06' },
      { title: 'Natural History Museum UK Species Dictionary — Armadillidium vulgare', url: 'https://www.nhm.ac.uk/our-science/data/uk-species/taxon?tvk=NBNSYS0000008572', kind: 'taxonomy', accessedAt: '2026-09-06' },
      {
        title: 'GBIF: Armadillidium vulgare (Latreille, 1804) nomenclatural record',
        url: 'https://www.gbif.org/species/2203611',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: '2026-09-06',
    updatedAt: '2026-09-06',
  } as const satisfies Species;

export default profile;
