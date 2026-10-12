import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-cornu-aspersum',
    slug: 'garden-snail',
    names: { zh: '散大蜗牛', en: 'Garden Snail', aliases: ['花园蜗牛', '欧洲褐色花园蜗牛', 'Brown Garden Snail', 'Helix aspersa'] },
    scientificName: 'Cornu aspersum',
    taxonomy: animalTaxonomy(
      taxon('Mollusca', '软体动物门'),
      taxon('Gastropoda', '腹足纲'),
      taxon('Stylommatophora', '柄眼目'),
      taxon('Helicidae', '大蜗牛科'),
      taxon('Cornu', 'Cornu属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['欧洲', '非洲', '亚洲'],
      regions: ['欧洲西部', '地中海周缘', '黑海周缘'],
      countries: [],
      range: '原生范围以欧洲西部、地中海和黑海周缘为主。人类通过食用养殖和植物运输把它带到澳大利亚、新西兰、南非及美洲多地，建立了引入种群。',
      center: { lat: 40, lng: 10 },
    },
    habitats: [
      { name: '花园与绿篱', realm: 'terrestrial', description: '在植物、落叶和石块提供的潮湿缝隙中藏身，外出取食叶片。', isPrimary: true },
      { name: '果园与菜地', realm: 'terrestrial', description: '利用栽培植物与地表遮蔽物，高密度种群可损伤作物。' },
    ],
    measurements: { length: { min: 5, max: 6, unit: 'cm', note: '加拿大食品检验局给出的头足部伸展长度，非壳径；个体伸缩会改变读数。' } },
    diet: { types: ['herbivore', 'detritivore'], foods: ['叶片', '花', '果实', '腐解有机物'], description: '以植物材料为主要食物，也吃腐解有机物。口内的齿舌帮助刮取、切碎食物。' },
    activity: ['夜间活动', '雨后爬行', '缩壳', '土中产卵'],
    tags: ['陆生腹足类', '柄眼目', '四根触角', '齿舌', '黏液足迹', '花园动物'],
    summary: '散大蜗牛用两对可伸缩触角感知周围，长触角末端各有一只眼。它多在夜间或雨后活动，用腹足和黏液爬行，刮取植物及腐解材料。',
    description: '散大蜗牛背着黄褐至灰褐色的球状螺壳，深色螺旋带常被浅斑打断。柔软身体下方的宽阔腹足协调收缩，分泌黏液帮助移动；干燥时，它缩入壳中形成临时封口膜。它是雌雄同体动物，通常与同伴交配，再把卵产进土穴。现用学名为 Cornu aspersum，旧文献常写 Helix aspersa。',
    storySections: [
      {
        key: 'identity',
        label: '外形与分类',
        title: '斑驳螺壳下是柔软腹足',
        body: '散大蜗牛属于软体动物门腹足纲、柄眼目大蜗牛科。成体壳口边缘向外翻，壳面有细生长纹。加拿大食品检验局列出的成体壳径为32至38毫米，壳高为29至33毫米；这些尺寸不能代替伸展开的头足部长度。',
      },
      {
        key: 'tentacles',
        label: '感知周围',
        title: '四根触角都能收回',
        body: '头顶较长的一对触角末端各有一只眼；靠近嘴的另一对较短。触角也参与感知气味和接触刺激。蜗牛能改变触角伸出的长度，受扰时把它们收回头部；观察时不必用手反复触碰。',
      },
      {
        key: 'locomotion',
        label: '腹足与黏液',
        title: '靠肌肉收缩向前爬',
        body: '身体下面的腹足是一片宽阔肌肉。蜗牛协调足部收缩，并分泌黏液帮助移动，因此经过石块或叶片后常留下反光痕迹。',
      },
      {
        key: 'food',
        label: '取食方式',
        title: '用口内的齿舌刮食',
        body: '齿舌上排列着细小齿状结构，蜗牛用它刮取或切碎食物。散大蜗牛会吃蔬菜、花卉和果树的组织，也取食腐解材料。在引入地区，它可能成为园艺害物；叶片上的孔洞还需结合动物和足迹判断来源。',
      },
      {
        key: 'retreat',
        label: '避开干燥',
        title: '缩进壳里暂歇',
        body: '散大蜗牛多在夜间活动，雨后也可能白天出行。干燥时它能收回身体，用分泌物封住壳口，减少水分散失；湿润条件恢复后再活动。封口膜是一层临时结构，不能把贴在石头上的螺壳直接判断为死壳。',
      },
      {
        key: 'reproduction',
        label: '繁殖与传播',
        title: '把卵藏进土中',
        body: '散大蜗牛是雌雄同体动物，通常与同伴交配。它在土中挖穴产下白色球状卵，幼体孵化时已经带着薄壳。卵和小蜗牛可能藏在盆栽土壤中随人运输；观察后留在原地，不把它们带到新的地区放生。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1774 年使用的 Helix aspersa',
        body: 'O. F. Müller 在 1774 年以 Helix aspersa 正式命名散大蜗牛，现用组合为 Cornu aspersum。两种写法对应同一物种，旧研究和食用养殖资料中仍经常出现前者。它也随着养殖与植物运输进入多个大陆，土中的卵和小蜗牛使传播不容易被及时发现。',
      },
    ],
    keyFacts: [
      '四根触角分为长短两对，眼睛位于较长一对的末端。',
      '壳径32至38毫米与头足部伸展长5至6厘米采用不同测量口径。',
      '它属于腹足类，口内有刮取食物的齿舌。',
      '旧名称 Helix aspersa 与现用名称 Cornu aspersum 对应同一物种。',
      'IUCN 法国委员会 2021 年表格列法国等级为无危、全球等级为未评估；尚无已核实的更新全球评估和趋势。',
    ],
    threats: ['干燥会限制局部活动，园艺防治也可影响地方种群；现有资料未确定全球数量趋势。'],
    conservationActions: ['观察并记录当地蜗牛的外形与栖身环境。', '搬运盆栽前检查容器和土壤，避免把蜗牛与卵带入新地区。'],
    metrics: {},
    featuredStats: [
      { key: 'tentacles', label: '可伸缩触角', value: '4', unit: '根', note: '长短各一对。' },
      { key: 'shell-diameter', label: '成体壳径', value: '32–38', unit: '毫米', note: '加拿大食品检验局资料范围。' },
      { key: 'extended-length', label: '头足部伸展长', value: '5–6', unit: '厘米', note: '伸展长度，非壳径。' },
    ],
    media: {
      image: './images/species/garden-snail/01-garden-stone-cover.webp',
      alt: '一只散大蜗牛在画面右侧的湿润石面上爬行，完整螺壳、触角与腹足留在画内。',
      focalPoint: { x: 0.88, y: 0.34 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/garden-snail/02-field-marks.webp', alt: '散大蜗牛在落叶上向左爬行，呈现斑驳螺壳和灰色腹足。', title: '斑驳螺壳与腹足', caption: 'AI生成科学情景重建；展示外形组合，不能替代标本鉴定或壳径测量。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/garden-snail/03-four-tentacles.webp', alt: '散大蜗牛朝前伸出两根长眼柄和两根较短触角。', title: '长短两对触角', caption: 'AI生成科学情景重建；近景表现触角位置，静帧不能展示回缩过程或测量视力。', focalPoint: { x: 0.6, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/garden-snail/04-leaf-feeding.webp', alt: '散大蜗牛的嘴贴近绿色叶片缺口，一根长触角受透视缩短。', title: '贴近叶缘取食', caption: 'AI生成科学情景重建；口内齿舌未展示，不能据图确定叶片损伤原因。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/garden-snail/05-shell-retreat.webp', alt: '斑驳螺壳贴在阴影中的石面上，软体与触角收在壳内。', title: '缩入壳中暂歇', caption: 'AI生成科学情景重建；壳口朝向石面，封口膜不可见，无法据图判断休眠状态。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/garden-snail/06-mucus-trail.webp', alt: '散大蜗牛向右爬过湿石面，尾后留着一道反光痕迹。', title: '石面上的黏液足迹', caption: 'AI生成科学情景重建；远侧短触角受遮挡，足迹光泽不能说明黏液成分或分泌量。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'Australian Museum — Garden Snail（含分类阶元）', url: 'https://australian.museum/learn/animals/molluscs/garden-snail/', kind: 'taxonomy', accessedAt: '2026-09-06' },
      { title: 'University of Florida IFAS — Brown Garden Snail', url: 'https://ask.ifas.ufl.edu/publication/IN396', kind: 'general', accessedAt: '2026-09-06' },
      { title: 'University of Florida IFAS — Terrestrial Snails（触角、腹足与齿舌）', url: 'https://ask.ifas.ufl.edu/publication/IN893', kind: 'ecology', accessedAt: '2026-09-06' },
      { title: 'Canadian Food Inspection Agency — Cornu aspersum fact sheet', url: 'https://inspection.canada.ca/en/plant-health/invasive-species/nematodes-snails-and-others/european-brown-garden-snail/fact-sheet', kind: 'distribution', accessedAt: '2026-09-06' },
      { title: 'UICN France — Mollusques continentaux（2021，表内第11页：法国LC、全球NE）', url: 'https://uicn.fr/wp-content/uploads/2022/02/tableaux-liste-rouge-mollusques-continentaux-de-france-metropolitaine.pdf', kind: 'conservation', accessedAt: '2026-09-06' },
      {
        title: 'GBIF: Cornu aspersum (O.F.Müller, 1774) nomenclatural record',
        url: 'https://www.gbif.org/species/5858758',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: '2026-09-06',
    updatedAt: '2026-09-06',
  } as const satisfies Species;

export default profile;
