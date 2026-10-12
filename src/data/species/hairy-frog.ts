import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-astylosternus-robustus',
    slug: 'hairy-frog',
    names: { zh: '壮发蛙', en: 'Hairy Frog', aliases: ['毛蛙', '多毛蛙', 'Trichobatrachus robustus'] },
    scientificName: 'Astylosternus robustus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Amphibia', '两栖纲'),
      taxon('Anura', '无尾目'),
      taxon('Arthroleptidae', '节蛙科'),
      taxon('Astylosternus', 'Astylosternus属'),
    ),
    conservation: conservation('LC', 'unknown'),
    distribution: {
      realms: ['terrestrial', 'freshwater'], continents: ['非洲'],
      regions: ['中非西部森林带', '几内亚湾周缘'],
      countries: ['尼日利亚', '喀麦隆', '赤道几内亚', '加蓬', '刚果共和国', '刚果民主共和国', '安哥拉'],
      range: '从尼日利亚东南部延伸到喀麦隆、赤道几内亚、加蓬和两刚果，并见于安哥拉北部。美国自然历史博物馆的数据库已纳入安哥拉新记录。',
      center: { lat: 3.5, lng: 10.5 },
    },
    habitats: [
      { name: '森林溪流', realm: 'freshwater', description: '在森林中的流水环境繁殖，卵附着于溪中石面。', isPrimary: true },
      { name: '潮湿林地', realm: 'terrestrial', description: '成蛙也在溪流周边的林地地表活动。' },
    ],
    measurements: {},
    diet: { types: ['carnivore', 'insectivore'], foods: ['甲虫', '蝗虫', '蜘蛛', '蛞蝓', '多足类'], description: '成蛙捕食昆虫及其他小型无脊椎动物；食谱包括蜘蛛、蛞蝓和多足类，因此并非只吃昆虫。' },
    activity: ['地表活动', '溪流繁殖', '踢蹬防御'],
    tags: ['皮肤乳突', '骨爪', '溪流', '节蛙科', '非洲'],
    summary: '壮发蛙的雄蛙在繁殖期长出毛发状皮肤突起。它还有藏在后脚趾内的尖骨，受威胁时能让骨尖穿出皮肤，用踢蹬抵御对手。',
    description: '壮发蛙生活在非洲中西部森林及溪流周围，头宽、身体结实，体色以褐色为主。繁殖期雄蛙体侧和大腿长出毛发状皮肤突起，可能增加呼吸表面积，这一功能仍需进一步验证。后脚趾内的骨尖能够刺穿趾腹皮肤，受抓握时的踢蹬可划伤对手；骨爪收回与伤口修复过程尚未直接确认。旧文献常使用 Trichobatrachus robustus。',
    storySections: [
      {
        key: 'identity',
        label: '外形与分类',
        title: '旧属名与现用分类',
        body: '美国自然历史博物馆的 Amphibian Species of the World 依据 2021 年研究，把壮发蛙归入节蛙科 Astylosternus 属。旧名 Trichobatrachus robustus 在历史研究中仍常出现，与现用名称对应同一物种。',
      },
      {
        key: 'papillae',
        label: '毛发状皮肤',
        title: '雄蛙体侧的细长突起',
        body: '繁殖期雄蛙的体侧和大腿会长出皮肤乳突，雌蛙没有同样的“毛”。研究者推测，这些突起扩大了与水接触的表面积，可能帮助雄蛙摄取氧气。呼吸功能仍应作为解释性假说阅读，不能从外观推算吸氧效率。',
      },
      {
        key: 'claws',
        label: '防御机制',
        title: '后脚趾里藏着尖骨',
        body: '2008年的解剖研究显示，后脚第II至V趾的末端趾骨有向下弯曲的尖端，平时藏在皮肤内，并通过结缔组织与小骨结相连。研究者提出，屈肌牵拉使末端趾骨脱离这个连接，再刺穿趾腹皮肤。把这个过程说成“把整根趾骨折成两截”并不准确。',
      },
      {
        key: 'evidence',
        label: '观察与边界',
        title: '骨爪伸出以后',
        body: '观察者记录到壮发蛙受抓握时踢蹬，骨爪能划伤对手。骨爪没有角蛋白爪鞘。2008年论文没有直接确认收回与修复过程，因此不把主动缩爪、伤口愈合速度或反复使用次数写成已知事实。',
      },
      {
        key: 'breeding',
        label: '繁殖与取食',
        title: '回到石间流水中',
        body: '壮发蛙回到溪流繁殖，雌蛙把卵产在水中石面。ZSL的介绍记述雄蛙长时间守在卵旁。成蛙在陆地捕食小型无脊椎动物，幼体则在水中发育；保护溪流也需要保留周围的林地。',
      },
      {
        key: 'conservation',
        label: '分布与保护',
        title: '保留林荫下的溪流',
        body: 'IUCN区域综述将壮发蛙列为无危，并记录人们将它作为食物采集。广泛分布不代表所有地点都没有压力。维护溪流水质、保留岸边植被与记录采集量，有助于了解当地种群状况。独立全球评估日期和趋势尚未核实。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1900 年正式命名的“毛蛙”',
        body: 'Boulenger 在 1900 年以 Trichobatrachus robustus 正式描述本种，现用组合为 Astylosternus robustus。俗称“毛蛙”对应繁殖期雄蛙的细长皮肤乳突，这些结构不是哺乳动物毛发。2008 年的骨爪研究进一步解释了后脚趾尖骨的结构，却没有直接确认它如何收回。',
      },
    ],
    keyFacts: [
      '毛发状突起属于皮肤，出现在繁殖期雄蛙体侧和大腿。',
      '骨爪位于后脚，尖端由末端趾骨形成。',
      '骨爪如何收回和修复，2008年的研究没有直接确认。',
      '旧名 Trichobatrachus robustus 与现用名 Astylosternus robustus 对应同一物种。',
    ],
    threats: ['森林减少与水体污染会损害溪流及周边生活环境。', '人们采集成蛙和幼体食用，需关注当地采集压力。'],
    conservationActions: ['保留溪岸林木，减少泥沙和污染物进入溪流。', '支持当地调查，记录出现地点和采集强度。', '在原处观察，不抓握或刺激蛙来展示骨爪。'],
    metrics: {},
    featuredStats: [
      { key: 'description-year', label: '正式描述', value: '1900', unit: '年', note: 'Boulenger发表原始学名。' },
      { key: 'claw-study', label: '骨爪解剖研究', value: '2008', unit: '年', note: '区分解剖证据与动作机制推测。' },
      { key: 'status', label: '保护等级', value: 'LC', note: 'IUCN区域综述列为无危；未核实独立评估日期。' },
    ],
    media: {
      image: './images/species/hairy-frog/01-stream-cover.webp',
      alt: '一只褐色壮发蛙蹲在画面右侧的溪边岩石上，完整身体留在画内。',
      focalPoint: { x: 0.86, y: 0.34 }, credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/hairy-frog/02-male-papillae.webp', alt: '褐色雄蛙蹲在湿石面，体侧可见一束束毛发状突起。', title: '雄蛙的体侧轮廓', caption: 'AI生成科学情景重建；皮肤乳突位置用于外形说明，密度和长度不代表标本测量。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/hairy-frog/03-female-forest-floor.webp', alt: '体侧没有毛发状突起的褐色雌蛙蹲在湿落叶上。', title: '雌蛙的裸露体侧', caption: 'AI生成科学情景重建；表现雌雄外观差异，不能仅凭这张图鉴定野外个体。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/hairy-frog/04-stream-habitat.webp', alt: '林荫下的溪水从长满苔藓的石块之间流过。', title: '森林中的石间流水', caption: 'AI生成栖息地情景；概括森林溪流环境，并非实地定位照片。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/hairy-frog/05-papillae-detail.webp', alt: '雄蛙体侧伸出细长皮肤突起，前肢表面没有这些突起。', title: '靠近看皮肤乳突', caption: 'AI生成局部外形重建；乳突粗细经过简化，画面不展示内部血管或证明呼吸功能。', focalPoint: { x: 0.6, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/hairy-frog/06-stream-night.webp', alt: '夜色中的壮发蛙蹲在溪边湿石上，身后是流水和暗色森林。', title: '夜色里的溪边', caption: 'AI生成科学情景重建；夜间场景不表示活动时段统计，也不展示防御动作。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'AMNH — Astylosternus robustus', url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Arthroleptidae/Astylosterninae/Astylosternus/Astylosternus-robustus', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: 'Blackburn et al. 2008 — Concealed weapons: erectile claws in African frogs', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2610158/', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'ZSL EDGE — X-Frogs（皮肤乳突与守卵）', url: 'https://www.edgeofexistence.org/blog/x-frogs/', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'IUCN — Situation analysis of terrestrial and freshwater fauna in West and Central Africa', url: 'https://portals.iucn.org/library/sites/library/files/documents/SSC-OP-054.pdf', kind: 'conservation', accessedAt: '2026-09-07' },
      { title: 'Wikipedia — Hairy frog（食谱与生活史补充）', url: 'https://en.wikipedia.org/wiki/Hairy_frog', kind: 'general', accessedAt: '2026-09-07' },
      {
        title: 'GBIF: Astylosternus robustus (Boulenger, 1900) nomenclatural record',
        url: 'https://www.gbif.org/species/11076551',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true, publishedAt: '2026-09-07', updatedAt: '2026-09-07',
  } as const satisfies Species;

export default profile;
