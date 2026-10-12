import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-nasikabatrachus-sahyadrensis',
    slug: 'purple-frog',
    names: { zh: '紫蛙', en: 'Purple Frog', aliases: ['印度紫蛙', '猪鼻蛙', 'Indian Purple Frog', 'Pignose Frog'] },
    scientificName: 'Nasikabatrachus sahyadrensis',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Amphibia', '两栖纲'),
      taxon('Anura', '无尾目'),
      taxon('Nasikabatrachidae', '紫蛙科'),
      taxon('Nasikabatrachus', '紫蛙属'),
    ),
    conservation: conservation('NT', 'unknown'),
    distribution: {
      realms: ['terrestrial', 'freshwater'], continents: ['亚洲'],
      regions: ['西高止山脉', '喀拉拉邦', '泰米尔纳德邦'],
      countries: ['印度'], endemicTo: ['印度西高止山脉'],
      range: '印度西高止山脉特有种，记录分布于喀拉拉邦及邻近的泰米尔纳德邦。成蛙主要藏在土中，季节性溪流及周边地区供繁殖和幼体发育。',
      center: { lat: 10.2, lng: 76.9 },
    },
    habitats: [
      { name: '林下湿润土壤', realm: 'terrestrial', description: '成蛙在有林冠遮蔽、疏松湿润的土壤中穴居。', isPrimary: true },
      { name: '季节性岩石溪流', realm: 'freshwater', description: '雨季溪流中的岩缝和浅池供繁殖使用，蝌蚪在流水中的石面发育。' },
    ],
    measurements: {},
    diet: { types: ['insectivore'], foods: ['白蚁', '其他小型无脊椎动物'], description: '成蛙在地下觅食，以白蚁为主要食物，也捕食其他小型无脊椎动物。蝌蚪在溪流石面刮食藻类，食性与成蛙不同。' },
    activity: ['地下穴居', '雨季集中繁殖', '地下鸣叫'],
    tags: ['地下生活', '季风', '吸附型蝌蚪', '西高止山脉', '紫蛙科'],
    summary: '紫蛙大部分时间藏在地下，雨季来临时才短暂现身繁殖。雄蛙能隔着薄土层鸣叫，蝌蚪则靠吸盘状口器贴住急流中的石头。',
    description: '紫蛙身体圆鼓，头和眼都很小，短尖吻呈小猪鼻般的轮廓，皮肤为暗紫灰至紫褐色。它在印度西高止山脉的湿润土壤中穴居，以白蚁等小型动物为食。雨季才短暂靠近地表和溪流繁殖，雄蛙能隔着薄土层发声。当地居民早已认识这种蛙，2003 年的正式描述才把它纳入现代科学命名。',
    storySections: [
      {
        key: 'identity',
        label: '外形与分类',
        title: '圆身体前的小尖吻',
        body: '看紫蛙时，可以先找小眼睛和尖吻，再看它短而粗壮的四肢。美国自然历史博物馆将它放在无尾目紫蛙科紫蛙属。如今该科已知两种，早期论文中“全科只有一种”的说法对应当时的认识。',
      },
      {
        key: 'underground',
        label: '地下生活',
        title: '在土里寻找白蚁',
        body: '成蛙在疏松、湿润的土壤里穴居，也在地下寻找白蚁等小型无脊椎动物。短肢和紧凑的身体适合这样的生活。研究者很难持续观察地下个体，洞穴深度的地点记录还不能代表全种。',
      },
      {
        key: 'calling',
        label: '雨季鸣叫',
        title: '声音从薄土层下面传来',
        body: '早期雨水到来后，雄蛙靠近地表，藏在窄小土道入口附近鸣叫。2014年的野外研究记录了10只雄蛙的208次求偶鸣声。研究者观察到它们隔着薄薄的松土和腐殖质发声；用这种声音寻找繁殖点，可以减少翻土寻找成蛙的干扰。',
      },
      {
        key: 'breeding',
        label: '季风繁殖',
        title: '短暂走向流水',
        body: '季节性溪流开始流动时，紫蛙配对繁殖，雌蛙背着较小的雄蛙到溪中岩缝等地点产卵。随后成蛙回到地下。资料描述的地表繁殖窗口从几天到一两周不等，不能把一个地点的记录写成全物种每年固定的日程。',
      },
      {
        key: 'tadpoles',
        label: '幼体发育',
        title: '先贴住石头，再钻进泥土',
        body: '紫蛙蝌蚪身体扁平，腹面有发达的吸盘状口器，能贴在流水冲刷的岩面。变态后的小蛙转向地下生活。2016年的发育研究发现，幼体在变态后期仍保留用于吸附的口部结构，之后骨骼与四肢发生适应挖掘的变化。成蛙和蝌蚪需要保护的环境也因此不同。',
      },
      {
        key: 'conservation',
        label: '分布与保护',
        title: '保留溪流与岸边的土壤',
        body: 'IUCN的2022年等级变更表将紫蛙从濒危列为近危，喀拉拉森林研究所的2023年调查报告也采用近危。较早的保护资料仍写濒危。林地改为农地、溪流水文改变、繁殖迁移中的道路死亡及局部采集都会带来压力；等级变化不能单独证明种群已经恢复。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '2003 年描述揭示与塞舌尔蛙的亲缘',
        body: 'Biju 与 Bossuyt 在 2003 年正式描述并命名 Nasikabatrachus sahyadrensis。形态和 DNA 分析表明，这种印度穴居蛙与塞舌尔的蛙类有较近的亲缘关系，论文当时据此建立紫蛙科。正式科学命名发生得较晚，但当地居民此前已经认识它；如今该科已知的物种数量也多于原始论文发表时。',
      },
    ],
    keyFacts: [
      '成蛙大部分时间在地下生活，雨季短暂现身繁殖。',
      '雄蛙能从地表下的土道入口附近鸣叫。',
      '蝌蚪用吸盘状口器贴住溪流石面，变态后转向穴居。',
      '2003年是学名正式发表的年份，当地居民此前已认识它。',
      '保护等级采用近危；未取得独立评估日期，全球趋势暂记未知。',
    ],
    threats: ['林地开垦会破坏穴居土壤与溪岸植被。', '拦水工程可能改变幼体所需的季节性流水环境。', '成蛙繁殖迁移时面临路杀，部分地点存在成蛙和蝌蚪采集。'],
    conservationActions: ['保留溪流周边林冠和疏松湿润土壤。', '维护繁殖溪流的季节性水流，并监测卵与蝌蚪。', '与当地社区合作记录鸣声、繁殖点及道路死亡，观察时避免挖掘洞穴。'],
    metrics: {},
    featuredStats: [
      { key: 'description-year', label: '正式描述', value: '2003', unit: '年', note: 'Biju与Bossuyt发表物种学名。' },
      { key: 'breeding-window', label: '地表繁殖期', value: '几天至两周', note: '不同资料和地点的记录范围，不是固定日程。' },
      { key: 'status', label: '保护等级', value: 'NT', note: 'IUCN 2022年变更表与KFRI报告支持近危；未核实独立评估日期。' },
    ],
    media: {
      image: './images/species/purple-frog/01-monsoon-cover.webp',
      alt: '一只暗紫褐色紫蛙蹲在画面右侧林下湿土上，完整身体与脚趾留在画内。',
      focalPoint: { x: 0.85, y: 0.38 }, credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/purple-frog/02-body-form.webp', alt: '圆鼓的紫蛙蹲在湿土上，可见小眼睛、短尖吻和短粗四肢。', title: '成蛙的圆鼓轮廓', caption: 'AI生成科学情景重建；展示成蛙外形，体型比例与皮肤纹理不代表标本测量。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/purple-frog/03-burrow-entrance.webp', alt: '紫蛙从落叶和松土下的洞口露出尖吻、眼睛与部分前肢。', title: '松土下的洞口', caption: 'AI生成穴居情景；洞口作了便于观察的展示，不表示真实洞深，也不证明图中个体正在鸣叫。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/purple-frog/04-seasonal-stream.webp', alt: '林冠下的溪水沿暗色岩床流过，在岩缝间形成浅池。', title: '雨季的岩石溪流', caption: 'AI生成栖息地情景；概括季节性溪流环境，并非实地定位照片。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/purple-frog/05-snout-detail.webp', alt: '紫蛙头部特写，小眼睛前方伸出颜色较浅的短尖吻。', title: '靠近看小尖吻', caption: 'AI生成局部外形重建；身体有意裁出画面，不展示内部骨骼或听觉结构。', focalPoint: { x: 0.6, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/purple-frog/06-rainy-bank.webp', alt: '紫蛙蹲在雨后溪岸湿土上，身后是流水与湿润绿叶。', title: '短暂走到溪岸', caption: 'AI生成科学情景重建；表现地表与溪流相邻的环境，不代表一次真实繁殖事件。', focalPoint: { x: 0.6, y: 0.55 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'AMNH — Nasikabatrachus sahyadrensis', url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Nasikabatrachidae/Nasikabatrachus/Nasikabatrachus-sahyadrensis', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: 'Thomas et al. 2014 — Vocal Behavior of the Elusive Purple Frog of India', url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0084809', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'Senevirathne et al. 2016 — From Clinging to Digging', url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0151114', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'ZSL EDGE — Purple Frog（生活史；保护等级文字较旧）', url: 'https://www.edgeofexistence.org/species/purple-frog/', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'ZSL EDGE — Survival Blueprint 2019（繁殖与威胁）', url: 'https://www.edgeofexistence.org/wp-content/uploads/2017/06/Survival_Blueprint_2019_Purplefrog_India.pdf', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'IUCN — 2022-2等级变更表（搜索索引核实EN→NT）', url: 'https://nc.iucnredlist.org/redlist/content/attachment_files/2022-2_RL_Stats_Table_7.pdf', kind: 'conservation', accessedAt: '2026-09-07' },
      { title: 'KFRI — Monsoon Croaks 2023，第14页物种表（NT）', url: 'https://www.ccsbi.kfri.res.in/static/files/Monsoon_croaks_report.pdf', kind: 'conservation', accessedAt: '2026-09-07' },
      {
        title: 'Biju & Bossuyt 2003: original description of Nasikabatrachus sahyadrensis',
        url: 'https://www.nature.com/articles/nature02019',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true, publishedAt: '2026-09-07', updatedAt: '2026-09-07',
  } as const satisfies Species;

export default profile;
