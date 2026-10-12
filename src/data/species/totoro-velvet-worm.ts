import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-eoperipatus-totoro',
    slug: 'totoro-velvet-worm',
    names: { zh: '龙猫栉蚕', en: 'Totoro Velvet Worm', aliases: ['龙猫天鹅绒虫'] },
    scientificName: 'Eoperipatus totoro',
    taxonomy: animalTaxonomy(
      taxon('Onychophora', '有爪动物门'), taxon('Udeonychophora', '有爪纲'),
      taxon('Euonychophora', '真有爪目'), taxon('Peripatidae', '栉蚕科'), taxon('Eoperipatus', '东栉蚕属'),
    ),
    conservation: { ...conservation('NE', 'unknown'), assessor: '本次未核实到本种IUCN全球评估；暂按NE收录，非正式评估结论。' },
    distribution: {
      realms: ['terrestrial'], continents: ['亚洲'], regions: ['东南亚', '越南南部'], countries: ['越南'],
      range: '原始描述的标本来自越南同奈省吉仙国家公园，在石块下发现。这里记录已核实的产地，不把公园边界当作本种完整分布边界。',
      center: { lat: 11.46, lng: 107.36 },
    },
    habitats: [
      { name: '热带森林林下', realm: 'terrestrial', description: '在林下石块遮蔽的潮湿微环境中发现。', isPrimary: true },
    ],
    measurements: {},
    diet: { types: ['carnivore'], foods: ['小型无脊椎动物'], description: '有爪动物通常捕食小型无脊椎动物，用口侧乳突喷出的黏液束缚猎物。这是类群层面的捕猎机制，本种的完整野外食谱仍未核实。' },
    activity: ['林下爬行', '隐蔽生活', '黏液捕猎'],
    tags: ['有爪动物', '黏液', '口侧乳突', '越南', '热带森林'],
    summary: '龙猫栉蚕是越南森林里的有爪动物，身体柔软、深褐，短足末端带爪。已知描述标本来自吉仙国家公园的石块下，完整分布与种群情况仍待调查。',
    description: '龙猫栉蚕用成排柔软短足爬行，头部触角感觉周围，口侧乳突是栉蚕喷黏液的结构。有爪动物能用黏液束缚小型无脊椎动物，但本种野外食谱尚未核实。2013 年的正式描述结合显微形态和分子资料，区分了这一越南物种；皮肤乳突和足部等细节仍需显微鉴定。',
    storySections: [
      {
        key: 'identity',
        label: '认识龙猫栉蚕',
        title: '2013 年正式描述的越南栉蚕',
        body: '龙猫栉蚕的学名为 Eoperipatus totoro，属于有爪动物门、栉蚕科和东栉蚕属。NCBI 列出有爪纲 Udeonychophora 和真有爪目 Euonychophora，ITIS 则省略这两个层级；查询资料时可以用学名核对。',
      },
      {
        key: 'body',
        label: '身体结构',
        title: '短足托起柔软身体',
        body: '观察身体两侧，可以看到一列列短足。栉蚕的足柔软，没有昆虫腿那样的硬质关节，末端的小爪帮助它接触地面。原始描述还比较了皮肤乳突、足部结构和腹面色纹；这些微小特征需要显微观察。',
      },
      {
        key: 'slime',
        label: '黏液捕猎',
        title: '从口的两侧喷出黏液',
        body: '栉蚕头上的长触角用于感觉环境，较短的口侧乳突负责喷出黏液。黏液丝缠住猎物，限制它的活动。两股丝束可以扫过并交错覆盖目标，形状并非每次都一样。这一捕猎机制来自有爪动物类群研究，本种野外捕猎还需要直接观察。',
      },
      {
        key: 'mechanism',
        label: '喷射机制',
        title: '柔软喷口随液流摆动',
        body: '2015年的研究用高速摄影和物理模型分析栉蚕喷射：黏液流经过柔软乳突时，液流与管壁的相互作用能让喷口摆动。论文研究了Peripatus solorzanoi等其他栉蚕，没有直接测量龙猫栉蚕。论文中的喷射速度、频率和持续时间因此不能直接视为本种参数。',
      },
      {
        key: 'habitat',
        label: '发现地点',
        title: '越南森林里的石块下',
        body: '研究者在越南同奈省吉仙国家公园采集了用于描述的标本，记录的藏身处是石块下。落叶、石块和腐木附近有许多不同的微环境；保护这类动物时，需要保留林下遮蔽和水分条件。',
      },
      {
        key: 'conservation',
        label: '保护与未知',
        title: '继续记录它生活在哪里',
        body: '龙猫栉蚕尚无已核实的 IUCN 全球评估与种群趋势。这不表示它数量充足，也不等于已有濒危结论。保留林下石块、落叶和腐木，减少翻动与采集，并调查更多地点，可以帮助了解它的分布；这些是栖息地保护建议，尚非本种威胁的量化评估。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '种名来自《龙猫》与多足坐骑',
        body: 'Oliveira 等人在 2013 年正式描述 Eoperipatus totoro，材料来自越南吉仙国家公园。原始论文写明，种名 totoro 按采集者的建议取自宫崎骏动画《龙猫》：片中龙猫乘坐的多足动物，让采集者联想到栉蚕。名称来自这段联想，物种鉴定则依靠显微形态和分子资料。',
      },
    ],
    keyFacts: ['学名为Eoperipatus totoro，属于有爪动物门。', '2013年发表正式物种描述。', '已核实产地为越南吉仙国家公园。', '头部触角和口侧乳突承担不同作用。', '栉蚕用黏液丝束缚猎物。', '本种种群数量与趋势尚未核实。'],
    threats: ['本种具体威胁及影响程度尚待调查。'],
    conservationActions: ['保留林下遮蔽、落叶和腐木。', '减少翻动石块和采集，记录发现地点与微环境。', '开展分布和种群调查。'],
    metrics: {},
    featuredStats: [
      { key: 'phylum', label: '所属门', value: '有爪动物门', note: '独立于节肢动物门。' },
      { key: 'locality', label: '已知产地', value: '越南', note: '吉仙国家公园的描述标本。' },
      { key: 'weapon', label: '捕猎结构', value: '口侧乳突', note: '栉蚕从这里喷出黏液。' },
      { key: 'description', label: '正式描述', value: '2013', unit: '年', note: '原始物种描述的发表年份。' },
    ],
    media: {
      image: './images/species/totoro-velvet-worm/01-forest-cover.webp',
      alt: '一只完整的深褐色龙猫栉蚕在画面右侧湿树皮上爬行，左侧是安静的林下落叶背景。',
      focalPoint: { x: 0.92, y: 0.32 }, credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/totoro-velvet-worm/02-body-profile.webp', alt: '龙猫栉蚕用成排短足在湿树皮上爬行，体表呈深褐色。', title: '全身外形', caption: 'AI生成外形示意；足数、乳突和体色细节不能用于物种鉴定。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/totoro-velvet-worm/03-head-papillae.webp', alt: '头部两根长触角下方，口的两侧各有一根较短的乳突。', title: '触角下方的口侧乳突', caption: 'AI生成头部结构示意；微小感官与表皮纹理经过简化。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/totoro-velvet-worm/04-slime-hunting.webp', alt: '栉蚕头部前方的黏液丝缠住一只小型昆虫。', title: '黏液束缚猎物', caption: 'AI生成栉蚕捕猎机制示意；不是本种野外捕猎记录，丝束轨迹与猎物种类仅作说明。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/totoro-velvet-worm/05-lobopod-feet.webp', alt: '软质短足支撑着栉蚕的身体，近处足端可见小爪。', title: '短足末端的小爪', caption: 'AI生成局部外形示意；不用于测量爪、足垫或皮肤乳突。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/totoro-velvet-worm/06-forest-habitat.webp', alt: '热带森林地面覆盖落叶和腐木，石块下方形成阴湿缝隙。', title: '林下潮湿的缝隙', caption: 'AI生成越南低地森林栖息地示意，不对应精确采集点。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'Oliveira等2013 — 龙猫栉蚕原始描述', url: 'https://doi.org/10.1016/j.jcz.2013.01.001', kind: 'general', accessedAt: '2026-09-07' },
      { title: 'NCBI Taxonomy — 龙猫栉蚕分类路径', url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?lvl=0&name=Eoperipatus+totoro', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: 'ITIS — 龙猫栉蚕有效名称与分类', url: 'https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=1184699', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: 'Concha等2015 — 栉蚕黏液喷射的流体与弹性机制', url: 'https://www.nature.com/articles/ncomms7292', kind: 'ecology', accessedAt: '2026-09-07' },
    ],
    featured: true, publishedAt: '2026-09-07', updatedAt: '2026-09-07',
  } as const satisfies Species;

export default profile;
