import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-phycodurus-eques',
    slug: 'leafy-seadragon',
    names: { zh: '叶海龙', en: 'Leafy Seadragon', aliases: ['叶形海龙', 'Leafy Sea Dragon'] },
    scientificName: 'Phycodurus eques',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Actinopterygii', '辐鳍鱼纲'),
      taxon('Syngnathiformes', '海龙目'),
      taxon('Syngnathidae', '海龙科'),
      taxon('Phycodurus', '叶海龙属'),
    ),
    conservation: conservation('LC', 'unknown', 2016),
    distribution: {
      realms: ['marine'], continents: ['大洋洲'], countries: ['澳大利亚'],
      regions: ['南澳大利亚沿岸', '西澳大利亚沿岸', '袋鼠岛附近海域'],
      endemicTo: ['澳大利亚南部温带海域'],
      range: '澳大利亚南部特有，从南澳大利亚维克多港附近向西延伸至西澳大利亚沿岸，主要利用温带近岸海域。',
      center: { lat: -35.7, lng: 137.5 },
    },
    habitats: [{ name: '温带海草床与海藻礁', realm: 'marine', description: '生活在避风海湾的海草床、长有大型海藻的岩礁及相邻沙地，Fishes of Australia记录深度为4 至 50米。', isPrimary: true }],
    measurements: { length: { max: 35, unit: 'cm', note: '采用Fishes of Australia和FishBase的最大总长口径；部分水族馆资料给出50厘米。' } },
    diet: { types: ['carnivore'], foods: ['糠虾', '其他小型甲壳动物'], description: '接近小型甲壳动物后，用管状吻端的嘴吸入猎物。' },
    activity: ['缓慢游动', '随水流摆动', '雄鱼育卵'],
    tags: ['叶片伪装', '雄鱼育卵', '温带海域', '澳大利亚特有', '海龙科'],
    summary: '叶海龙披着叶片状附肢，在海藻间随水流摆动。繁殖时，雄鱼把受精卵带在尾部，直到幼鱼孵出。',
    description: '叶海龙生活在澳大利亚南部的温带海草床和海藻礁，黄绿或黄褐色身体外包骨板，分枝叶状附肢帮助它隐蔽。透明小鳍负责缓慢推进和转向，管状吻端的嘴能吸入糠虾等小型甲壳动物。繁殖时，雄鱼在尾部下方的外露育卵区携卵，幼鱼孵出后自行觅食。',
    storySections: [
      {
        key: 'identity',
        label: '外形与分类',
        title: '海藻间藏着一条鱼',
        body: '叶海龙属于辐鳍鱼纲、海龙目、海龙科。观察近景时，可以顺着骨板环纹找出躯干，再辨认伸向四周的叶状附肢。它与海马同科，属于独立的叶海龙属。',
      },
      {
        key: 'camouflage',
        label: '伪装方式',
        title: '跟着水流轻轻摆动',
        body: '叶状附肢让身体轮廓接近周围的海藻。叶海龙还会随着水流前后摇摆，让捕食者更难从植物间辨认出它。',
      },
      {
        key: 'swimming',
        label: '游泳机制',
        title: '寻找几乎透明的小鱼鳍',
        body: '叶片状附肢主要参与伪装。叶海龙靠靠近尾部的透明背鳍起伏推进，头部后方的小胸鳍参与控制方向。它游动缓慢，观察时要把这些小鳍与大片叶状附肢区分开。',
      },
      {
        key: 'feeding',
        label: '食物与行为',
        title: '用细长的嘴吸入小虾',
        body: '叶海龙吃糠虾等小型甲壳动物。它靠近猎物后，迅速张开管状吻端的嘴，把猎物吸进去。海草和海藻周围既有藏身处，也有可捕食的小动物。',
      },
      {
        key: 'breeding',
        label: '繁殖与成长',
        title: '爸爸把卵带在尾巴下面',
        body: '雌鱼把卵转移到雄鱼尾部下方，雄鱼使卵受精并携带它们发育。卵部分嵌入外露的育卵组织，雄鱼没有海马那样封闭的育儿袋。幼鱼孵出后自行寻找食物。不同资料对孵化时间的记录有差异，尚不能给出适用于所有条件的固定期限。',
      },
      {
        key: 'conservation',
        label: '栖息地与保护',
        title: '保留可以藏身的海草床',
        body: '叶海龙生活在澳大利亚南部温带近岸海域。污染和过量营养物进入海水会影响海草与海藻栖息地，采集也曾造成压力。FishBase所列IUCN状态为无危（LC），评估于2016年；全球数量趋势尚未核实。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1865 年命名的叶状伪装鱼',
        body: 'Günther 在 1865 年正式命名叶海龙，现用学名为 Phycodurus eques。叶状附肢形成海藻般的轮廓，身体仍由骨板包围，游动则依靠较小的透明鱼鳍。雄鱼尾部携卵的方式与同科海马的封闭育儿袋不同，也是辨识其繁殖习性的要点。',
      },
    ],
    keyFacts: ['叶状附肢主要用于伪装。', '透明背鳍起伏推动身体前进。', '管状吻端的嘴能吸入小型甲壳动物。', '雄鱼在尾部外露的育卵区携带卵，没有封闭育儿袋。', '栖息于澳大利亚南部温带海域。'],
    threats: ['沿岸污染及营养物径流影响海草和海藻栖息地。', '采集压力与渔业偶获可能影响局部种群。'],
    conservationActions: ['保护海草床与海藻礁，减少陆源污染。', '观察时保持距离，不触碰、搬动或采集个体。'],
    metrics: {},
    featuredStats: [
      { key: 'length', label: '最大总长', value: '35', unit: '厘米', note: '采用Fishes of Australia与FishBase口径。' },
      { key: 'depth', label: '记录深度', value: '4–50', unit: '米', note: 'Fishes of Australia资料范围。' },
      { key: 'brooding', label: '育卵位置', value: '尾部下方', note: '雄鱼外露的育卵区。' },
    ],
    media: {
      image: './images/species/leafy-seadragon/01-kelp-cover.webp',
      alt: '叶海龙悬在画面右上方的蓝绿色海水中，细长吻、叶状附肢与尾部完整可见。',
      focalPoint: { x: 0.86, y: 0.38 }, credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/leafy-seadragon/02-leafy-profile.webp', alt: '叶海龙侧面外形，躯干外有环纹，周围伸出叶片状附肢。', title: '辨认叶片下的身体', caption: 'AI生成外形重建；颜色与附肢细节为示意。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/leafy-seadragon/03-transparent-fins.webp', alt: '叶海龙躯干与尾基部近景，可见半透明小鳍和较大的叶状附肢。', title: '透明小鳍帮助游泳', caption: 'AI生成局部结构示意；身体有意裁出画面，鳍条不用于解剖计数。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/leafy-seadragon/04-mysid-feeding.webp', alt: '叶海龙的管状吻前方有一只小型虾状动物。', title: '靠近一只小虾', caption: 'AI生成取食情景；表现猎物接近嘴端，静态图不代表实测吸食过程。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/leafy-seadragon/05-male-eggs.webp', alt: '雄性叶海龙尾部下方的外露组织上排列着粉红色卵。', title: '尾巴下面的卵', caption: 'AI生成育卵结构重建；卵的数目、大小和排列不作为测量记录。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/leafy-seadragon/06-seagrass-habitat.webp', alt: '一条叶海龙游在温带海湾的海草、褐色海藻与岩礁之间。', title: '可以藏身的近岸海湾', caption: 'AI生成栖息地重建；不对应某个实际调查地点。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'Fishes of Australia — Phycodurus eques（分类、分布与形态）', url: 'https://fishesofaustralia.net.au/home/species/3126', kind: 'general', accessedAt: '2026-09-07' },
      { title: 'Monterey Bay Aquarium — Leafy sea dragon（育卵与栖息地压力）', url: 'https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/leafy-sea-dragon', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'Waikīkī Aquarium — Leafy Seadragon（游泳与取食）', url: 'https://www.waikikiaquarium.org/experience/animal-guide/fishes/seahorses-seadragons-and-pipefishes/leafy-seadragon/', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'FishBase — Phycodurus eques（LC，2016年评估）', url: 'https://www.fishbase.org/summary/Phycodurus_eques.html', kind: 'conservation', accessedAt: '2026-09-07' },
      { title: 'NCBI Taxonomy — Phycodurus eques', url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=693459', kind: 'taxonomy', accessedAt: '2026-09-07' },
      {
        title: 'GBIF: Phycodurus eques (Günther, 1865) nomenclatural record',
        url: 'https://www.gbif.org/species/2332986',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true, publishedAt: '2026-09-07', updatedAt: '2026-09-07',
  } as const satisfies Species;

export default profile;
