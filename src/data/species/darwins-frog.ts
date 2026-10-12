import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-rhinoderma-darwinii',
    slug: 'darwins-frog',
    names: { zh: '达尔文蛙', en: "Southern Darwin’s Frog", aliases: ['南达尔文蛙', '达尔文鼻蛙', "Darwin’s Frog"] },
    scientificName: 'Rhinoderma darwinii',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Amphibia', '两栖纲'),
      taxon('Anura', '无尾目'),
      taxon('Rhinodermatidae', '鼻蛙科'),
      taxon('Rhinoderma', '鼻蛙属'),
    ),
    conservation: conservation('EN', 'decreasing'),
    distribution: {
      realms: ['terrestrial'], continents: ['南美洲'],
      regions: ['智利中南部', '瓦尔迪维亚温带森林', '阿根廷安第斯山脉邻近地区'],
      countries: ['智利', '阿根廷'],
      range: '分布于智利中南部及阿根廷邻近地区的湿润温带森林，包括智利安第斯山西坡、中央谷地与海岸山脉，以及阿根廷拉宁和纳韦尔瓦皮国家公园。',
      center: { lat: -40.2, lng: -72.5 },
    },
    habitats: [
      { name: '湿润温带森林', realm: 'terrestrial', description: '在林冠遮蔽的苔藓、落叶与倒木周围生活，繁殖也依赖湿润的森林地表。', isPrimary: true },
    ],
    measurements: { length: { min: 2.5, max: 3.5, unit: 'cm', note: 'Animal Diversity Web列出的体长范围。' } },
    diet: { types: ['insectivore'], foods: ['昆虫', '其他小型陆生节肢动物'], description: '成蛙捕食森林地表的小型昆虫及其他节肢动物。' },
    activity: ['林地活动', '雄蛙鸣叫', '鸣囊育幼'],
    tags: ['鸣囊育幼', '雄性育幼', '尖吻', '温带雨林', '鼻蛙科'],
    summary: '达尔文蛙的雄蛙把幼体收入鸣囊，照顾到它们变成小蛙。小蛙从父亲口中离开，开始在湿润的森林地表生活。',
    description: '达尔文蛙生活在智利和阿根廷的湿润温带森林，体长只有几厘米，尖吻和绿褐色身体容易与落叶相混。雌蛙先在湿润地表产卵，雄蛙守护后把幼体经口收入鸣囊。幼体在囊中完成变态，再从口中离开，成为能在地面活动的小蛙。森林丧失与壶菌病共同威胁这种特别的育幼方式。',
    storySections: [
      {
        key: 'identity',
        label: '外形与分类',
        title: '落叶间的小尖吻',
        body: '先找头部前端的尖吻，再看身体两侧的棱线。达尔文蛙的背部可呈绿色或褐色，腹面则有黑底与浅色斑块。美国自然历史博物馆将它归入无尾目鼻蛙科鼻蛙属；南达尔文蛙与北达尔文蛙仍分别列种。',
      },
      {
        key: 'forest',
        label: '栖息环境',
        title: '生活在湿润的森林地面',
        body: '它分布在智利和阿根廷的湿润温带森林，在落叶、苔藓与低矮植被间活动。成蛙捕食昆虫等小型节肢动物。保持林冠和林地湿度，能保护它的日常住处与繁殖地点。',
      },
      {
        key: 'eggs',
        label: '陆地产卵',
        title: '幼体先在湿地表发育',
        body: '雌蛙把卵产在湿润的森林地表，雄蛙在附近守护。临近孵化时，雄蛙把发育中的幼体经口收入鸣囊。卵的早期发育发生在体外，随后雄蛙才接手囊内育幼。',
      },
      {
        key: 'brooding',
        label: '鸣囊育幼',
        title: '在父亲的鸣囊里长大',
        body: '鸣囊是雄蛙喉部相连的囊状结构。达尔文蛙幼体在这里度过蝌蚪阶段并完成变态，随后从雄蛙口中离开。资料描述的囊内发育时间约为六周到两个月，环境与记录条件会影响时长。观察外部喉形不能直接确认里面是否有幼体。',
      },
      {
        key: 'froglets',
        label: '幼蛙生活',
        title: '出来时已经是一只小蛙',
        body: '幼体离开鸣囊时已有小蛙的外形，可以在地面活动。这个物种不需要把自由游泳的蝌蚪放进池塘，但它仍需要湿润环境。雄蛙育幼的方式也不能套用到鼻蛙属所有物种的完整生活史上。',
      },
      {
        key: 'conservation',
        label: '威胁与保护',
        title: '守住森林，也防范疾病',
        body: 'IUCN将南达尔文蛙列为濒危。森林丧失与破碎化会缩小栖息空间；壶菌病也能侵袭陆生种群。2026年ZSL发布的研究介绍指出，局部接触可在森林中的小种群间传播感染。保护工作包括保留原生森林、监测野外种群与疾病，以及建立有生物安全措施的保育繁殖种群。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '达尔文的航行标本留下名字',
        body: '达尔文在“小猎犬”号航行期间采集过这种蛙，1834 年的笔记中还留下了描述和草图。Duméril 与 Bibron 在 1841 年正式命名 Rhinoderma darwinii，种名纪念达尔文。达尔文在笔记中记录了它在瓦尔迪维亚森林中的出现；后来科学研究揭示的雄蛙鸣囊育幼，则成为本种最受关注的习性。',
      },
    ],
    keyFacts: [
      '雄蛙把幼体收入鸣囊，直到它们完成变态。',
      '小蛙从雄蛙口中离开，不是从胃里出生。',
      '卵先在湿润的森林地表发育。',
      '陆生生活不能让它避开壶菌病。',
      '保护等级为濒危；未核实独立评估日期，评估年份留空。',
    ],
    threats: ['原生森林丧失与破碎化。', '壶菌病造成种群死亡。', '栖息地干燥与局部环境改变。'],
    conservationActions: ['保护原生林冠、苔藓与落叶层。', '持续监测繁殖种群，并按保护机构规范控制病原传播。', '通过保育繁殖与野外保护共同保留种群。'],
    metrics: { adultLengthCm: [2.5, 3.5] },
    featuredStats: [
      { key: 'length', label: '体长', value: '2.5–3.5', unit: '厘米', note: '常见资料范围，不代表所有个体的极值。' },
      { key: 'brooding', label: '鸣囊育幼', value: '约6–8', unit: '周', note: '资料约六周至两个月，发育时长有变化。' },
      { key: 'status', label: '保护等级', value: 'EN', note: 'IUCN与ZSL支持濒危；未核实独立评估日期。' },
    ],
    media: {
      image: './images/species/darwins-frog/01-forest-cover.webp',
      alt: '一只绿褐色达尔文蛙蹲在画面右侧苔藓上，尖吻、身体和可见脚趾完整留在画内。',
      focalPoint: { x: 0.9, y: 0.38 }, credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/darwins-frog/02-leaf-shaped-body.webp', alt: '达尔文蛙蹲在湿落叶上，绿色背部与尖吻组成叶片般的轮廓。', title: '叶片般的身体', caption: 'AI生成外形重建；颜色、皮肤纹理与趾形不作为标本测量依据。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/darwins-frog/03-forest-eggs.webp', alt: '一只达尔文蛙蹲在湿润落叶上的一小团透明胶质卵旁。', title: '湿地表上的卵', caption: 'AI生成守卵情景；卵径、数量与排列仅作示意，不代表实际一窝卵或精确发育阶段。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/darwins-frog/04-throat-profile.webp', alt: '达尔文蛙的侧前方近景，可见尖吻下方圆鼓的喉部。', title: '靠近看喉部', caption: 'AI生成外部喉形示意；未展示内部结构，不能凭这张图确认个体正在育幼。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/darwins-frog/05-froglet.webp', alt: '一只褐色小蛙站在带有叶脉的湿润落叶上。', title: '开始地面生活的小蛙', caption: 'AI生成幼蛙情景；叶片提供环境参照，不是精确比例尺。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/darwins-frog/06-temperate-forest.webp', alt: '温带雨林地表铺满落叶，倒木、树干和蕨类周围长着苔藓。', title: '湿润的温带雨林', caption: 'AI生成栖息地重建；概括林下环境，并非实地定位照片。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'AMNH — Rhinoderma darwinii', url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Rhinodermatidae/Rhinoderma/Rhinoderma-darwinii', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: 'Animal Diversity Web — Rhinoderma darwinii（外形、食性与生活史；分类和保护等级文字较旧）', url: 'https://animaldiversity.org/accounts/Rhinoderma_darwinii/', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'London Zoo — Southern Darwin’s frog', url: 'https://www.londonzoo.org/whats-here/animals/southern-darwins-frog', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'IUCN — Darwin’s frogs conservation action plan', url: 'https://iucn.org/news/species-survival-commission/202007/new-action-plan-developed-conservation-darwins-frogs', kind: 'conservation', accessedAt: '2026-09-07' },
      { title: 'ZSL — Hidden chytrid outbreaks in Darwin’s frogs（2026）', url: 'https://www.zsl.org/news-and-events/news/conservationists-move-closer-saving-tiny-frog-amphibian-apocalypse', kind: 'conservation', accessedAt: '2026-09-07' },
      { title: 'Oryx — Binational action plan for Darwin’s frogs', url: 'https://www.cambridge.org/core/journals/oryx/article/flagship-for-austral-temperate-forest-conservation-an-action-plan-for-darwins-frogs-brings-key-stakeholders-together/040B38FFC544950B0110B8F8E65F046E', kind: 'conservation', accessedAt: '2026-09-07' },
      {
        title: 'Darwin Online: Zoology of the Beagle introduction and Rhinoderma specimen history',
        url: 'https://darwin-online.org.uk/EditorialIntroductions/Chancellor_ZoologyoftheBeagle.html',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
      {
        title: 'GBIF: Rhinoderma darwinii nomenclatural record',
        url: 'https://www.gbif.org/species/5217388',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true, publishedAt: '2026-09-07', updatedAt: '2026-09-07',
  } as const satisfies Species;

export default profile;
