import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-torquigener-albomaculosus',
    slug: 'white-spotted-pufferfish',
    names: { zh: '白斑河鲀', en: 'White-spotted Pufferfish', aliases: ['白斑窄额鲀', 'アマミホシゾラフグ'] },
    scientificName: 'Torquigener albomaculosus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Actinopterygii', '辐鳍鱼纲'),
      taxon('Tetraodontiformes', '鲀形目'),
      taxon('Tetraodontidae', '四齿鲀科'),
      taxon('Torquigener', '窄额鲀属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'], continents: ['亚洲'],
      regions: ['西北太平洋', '日本琉球群岛', '奄美大岛沿岸'], countries: ['日本'],
      range: '确认记录包括日本琉球群岛奄美大岛沿岸沙底海域。澳大利亚出现过相似沙圈，但造巢物种尚未确认，不能据此扩大本种范围。',
      center: { lat: 28.13, lng: 129.34 },
    },
    habitats: [{ name: '沿岸沙质海床', realm: 'marine', description: '潜水观察记录包括水深10至27米的沙底，奄美大岛北部另有约30米的记录。雄鱼在松散沙粒中挖出繁殖用的圆形巢。', isPrimary: true }],
    measurements: { length: { typical: 10, unit: 'cm', note: '筑巢研究描述的雄鱼约10厘米总长，含尾鳍；这是近似观察尺度，不是成体范围或物种最大值。' } },
    diet: { types: [], foods: ['尚未核实'], description: '现有主要研究集中于筑巢与繁殖，尚未核实本种野外食物组成。其他窄额鲀的食性只能作为比较，仍需本种证据。' },
    activity: ['海床筑巢', '求偶展示', '雄性护卵'],
    tags: ['放射状沙圈', '雄性筑巢', '细沙巢床', '雄性护卵', '琉球群岛'],
    summary: '雄性白斑河鲀用鱼鳍和身体拨动海沙，筑出直径约2米的放射状沙圈。雌鱼来访后，会在巢中央产卵；雄鱼留下照料鱼卵。',
    description: '白斑河鲀是生活在日本琉球群岛沙底海域的小型海鱼，背部有褐色网纹和白斑，腹部银白。繁殖雄鱼用身体与鱼鳍反复拨沙，筑成外围有放射状沙脊、中央积有细沙的圆巢。雌鱼来访并在中央产卵后，雄鱼留下守护，孵化后再另筑新巢。野外食物组成和全球种群趋势仍缺少已核实资料。',
    storySections: [
      {
        key: 'identity',
        label: '认识白斑河鲀',
        title: '在褐色背上找白斑',
        body: '白斑河鲀属于鲀形目、四齿鲀科、窄额鲀属。研究者在2014年正式描述了这个物种。它头部和身体的上半部带褐色细网纹与白斑，下半部呈银白色；准确鉴定还要核对鳍条等细节。',
      },
      {
        key: 'construction',
        label: '海底筑巢',
        title: '一次次朝圆心拨沙',
        body: '雄鱼从不同方向朝中心游，用鱼鳍和身体挖动沙粒，逐渐形成向外辐射的沟槽和沙脊。2018年的研究把观察到的游动规则用于模拟，说明重复的局部动作可以形成复杂的圆形结构。',
      },
      {
        key: 'sand',
        label: '沙圈结构',
        title: '把细沙聚到中央',
        body: '约2米宽的沙圈外围有放射状沙脊和沟槽，中央铺着细沙。雄鱼还会摆动臀鳍，在中央留下不规则纹路。研究者观察到，水经过迎流侧的沟槽后汇入中心；沙圈有助于把细颗粒聚到巢床。',
      },
      {
        key: 'courtship',
        label: '求偶与产卵',
        title: '雌鱼来到沙圈中',
        body: '雄鱼独自筑巢，雌鱼进入巢区后可能与它交配，在中央释放卵。研究者正在区分巢的大小、对称性、装饰和细沙等因素怎样影响雌鱼选择，不能把某一种纹路直接当成求偶成功的保证。',
      },
      {
        key: 'parenting',
        label: '雄性护卵',
        title: '产卵后留在巢里',
        body: '交配后，雄鱼独自守护巢中央的鱼卵，直到孵化。奄美大岛的研究记录了春夏繁殖季中约半个月一轮的筑巢、交配和护卵周期。鱼卵孵化后，雄鱼会为下一轮繁殖另筑新巢。',
      },
      {
        key: 'conservation',
        label: '观察与保护',
        title: '记录沙底，也记录巢',
        body: 'FishBase目前将本种的IUCN状态列为未评估（NE），全球种群趋势未知。观察者可以记录巢的位置、水深和繁殖时间，并避免触碰巢床、扬沙或驱赶护卵雄鱼。未评估不等于已经确认没有风险。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '先看见沙圈，后来找到造巢鱼',
        body: '奄美大岛海床上的约 2 米圆形结构在 1995 年已有发现记录。2013 年发表的研究把它们与小型雄性河鲀的筑巢和求偶行为联系起来，当时仍使用 Torquigener sp.；Matsuura 在 2014 年正式描述并命名 Torquigener albomaculosus。沙圈的出现记录早于造巢动物的正式科学命名。',
      },
    ],
    keyFacts: ['筑巢雄鱼约10厘米长，沙圈直径约2米。', '雄鱼用鱼鳍和身体挖沙。', '外围沟槽和沙脊朝不同方向辐射。', '细沙聚在巢的中央。', '雄鱼独自照料鱼卵直到孵化。', '2014年正式描述为新物种。', '本种生活在海水中。'],
    threats: ['沙底扰动和近岸水质变化属于值得监测的潜在压力，对本种的影响程度尚未核实。'],
    conservationActions: ['记录已确认个体和繁殖巢的分布，积累种群监测资料。', '潜水观察时避开巢床，减少扬沙与接触。'],
    metrics: {},
    featuredStats: [
      { key: 'male-length', label: '筑巢雄鱼', value: '约10', unit: '厘米', note: '研究中的近似总长，含尾鳍。' },
      { key: 'nest-diameter', label: '沙圈直径', value: '约2', unit: '米', note: '繁殖巢的外部直径，不是鱼的体长。' },
      { key: 'care', label: '护卵亲本', value: '雄鱼', note: '留在巢中央照料鱼卵直到孵化。' },
      { key: 'status', label: '保护等级', value: 'NE', note: 'FishBase列为未评估，种群趋势未知。' },
    ],
    media: {
      image: './images/species/white-spotted-pufferfish/01-sand-cover.webp',
      alt: '一条完整的白斑河鲀在画面右上方游过浅色沙底，背部褐色、腹部白色。',
      focalPoint: { x: 0.92, y: 0.32 }, credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/white-spotted-pufferfish/02-body-profile.webp', alt: '白斑河鲀在沙底上方游动的侧面外形，能看到眼睛、白腹和半透明鱼鳍。', title: '白斑与银白腹部', caption: 'AI生成外形示意；斑纹、细棘和鳍条细节不能作为物种鉴定依据。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/white-spotted-pufferfish/03-circular-nest.webp', alt: '从上方看海床上的圆形巢，外围有放射状沙脊，中央有细沙和一条小鱼。', title: '从上方看沙圈', caption: 'AI生成巢结构示意；用于辨认外围沙脊与中央巢床，不是实测三维模型。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/white-spotted-pufferfish/04-digging-sand.webp', alt: '一条白斑河鲀贴着沙底沟槽游动，身体下方扬起少量沙粒。', title: '用身体和鱼鳍拨沙', caption: 'AI生成筑巢情景；静态画面只示意姿态，不表示实测运动轨迹。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/white-spotted-pufferfish/05-egg-care.webp', alt: '雄性白斑河鲀停在巢中央的细沙上方。', title: '留在巢里护卵', caption: 'AI生成护卵情景；沙面颗粒不能用于辨认鱼卵或测量卵的大小、数量。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/white-spotted-pufferfish/06-coastal-habitat.webp', alt: '蓝绿色海水下铺着浅色沙底和稀疏贝壳碎屑。', title: '沿岸的沙质海床', caption: 'AI生成栖息地示意，不对应某个实地拍摄位置。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'Matsuura 2014 — 白斑河鲀原始物种描述（2015年卷期）', url: 'https://mhlw-grants.niph.go.jp/system/files/2014/144031/201426026A/201426026A0011.pdf', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: 'FishBase — Torquigener albomaculosus，分类、分布与未评估状态', url: 'https://www.fishbase.se/summary/67499', kind: 'conservation', accessedAt: '2026-09-07' },
      { title: 'Kawase et al. 2013 — 圆形巢与繁殖', url: 'https://www.nature.com/articles/srep02106', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'Mizuuchi et al. 2018 — 简单动作规则与筑巢模拟', url: 'https://www.nature.com/articles/s41598-018-30857-0', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'Kawase et al. 2022 — 沙圈三维模型与繁殖研究综述', url: 'https://www.nature.com/articles/s41597-022-01466-4', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'Bond et al. 2020 — 澳大利亚相似沙圈，造巢鱼种未确定', url: 'https://pubmed.ncbi.nlm.nih.gov/32820821/', kind: 'distribution', accessedAt: '2026-09-07' },
      { title: '台湾鱼类资料库 — 窄额鲀属中文名称（同属物种页面）', url: 'https://fishdb.sinica.edu.tw/mobi/species.php?id=383568', kind: 'taxonomy', accessedAt: '2026-09-07' },
      {
        title: 'GBIF: Torquigener albomaculosus Matsuura, 2014 nomenclatural record',
        url: 'https://www.gbif.org/species/7355719',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true, publishedAt: '2026-09-07', updatedAt: '2026-09-07',
  } as const satisfies Species;

export default profile;
