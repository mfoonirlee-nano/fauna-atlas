import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-pseudocerastes-urarachnoides',
    slug: 'spider-tailed-horned-viper',
    names: { zh: '蛛尾拟角蝰', en: 'Spider-tailed Horned Viper', aliases: ['蛛尾角蝰', '伊朗蛛尾蝰', 'Iranian Spider Viper'] },
    scientificName: 'Pseudocerastes urarachnoides',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Reptilia', '爬行纲'),
      taxon('Squamata', '有鳞目'),
      taxon('Viperidae', '蝰科'),
      taxon('Pseudocerastes', '拟角蝰属'),
    ),
    conservation: conservation('NT', 'unknown'),
    distribution: {
      realms: ['terrestrial'], continents: ['亚洲'],
      regions: ['扎格罗斯山地', '伊朗西部', '伊拉克东部'], countries: ['伊朗', '伊拉克'],
      range: '栖息于扎格罗斯山地及周缘岩石丘陵。已知记录包括伊朗伊拉姆、克尔曼沙阿和胡齐斯坦省，以及伊拉克东部；2019 和 2020 年论文补充了伊拉克记录。',
      center: { lat: 33.5, lng: 46.3 },
    },
    habitats: [
      { name: '干旱岩石丘陵', realm: 'terrestrial', description: '在浅色石灰岩和风化岩块间隐蔽，身体斑纹与地表相近。', isPrimary: true },
      { name: '岩壁裂隙', realm: 'terrestrial', description: '利用沉积岩中的深裂缝藏身，周围常有稀疏灌丛。' },
    ],
    measurements: {},
    diet: { types: ['carnivore'], foods: ['小型鸟类'], description: '野外研究确认它能用尾尖吸引部分寻找节肢动物的鸟类靠近，再突然袭击。现有观察支持食鸟捕猎，尚不足以列出完整食谱。' },
    activity: ['伏击', '尾部诱捕', '岩缝隐蔽'],
    tags: ['蜘蛛状尾尖', '攻击性拟态', '蝰科', '扎格罗斯山地', '毒蛇'],
    summary: '蛛尾拟角蝰生活在伊朗和伊拉克的岩石山地，常把身体藏在岩纹间，摆动蜘蛛状尾尖，吸引觅食的鸟靠近后伏击。',
    description: '蛛尾拟角蝰的眼上有小角状鳞片，体表粗糙带棱，灰褐色斑纹与风化岩面相近。短尾末端膨大，两侧延长的鳞片形成像蜘蛛腿的轮廓。尾饰与蛇身相连，会随幼蛇成长继续发育。2006 年研究者正式描述本种，2015 年的野外研究确认了它利用尾部诱饵吸引部分鸟类的捕食方式。',
    storySections: [
      {
        key: 'identity',
        label: '外形与分类',
        title: '粗糙鳞片与眼上小角',
        body: '蛛尾拟角蝰属于有鳞目蝰科拟角蝰属。头部宽而扁，灰褐色斑纹与风化岩面接近。眼睛上方的小角由鳞片形成。识别时要同时看身体、头部和尾部特征，仅凭“有角”不能与其他角状鳞片的蛇区分。',
      },
      {
        key: 'lure',
        label: '尾尖结构',
        title: '把尾巴的一端变成诱饵',
        body: '短尾末端膨成椭圆形，两侧鳞片延长，形成类似蜘蛛腿的轮廓。蛇摆动尾巴时，这些结构随之移动。它们属于蛇的皮肤鳞片，没有蜘蛛的关节、眼睛或独立身体。',
      },
      {
        key: 'hunting',
        label: '伏击过程',
        title: '让寻找虫子的鸟走近',
        body: '蛇大部分身体保持隐蔽，把活动的尾尖露在外面。部分鸟类朝这个似乎可吃的小目标靠近，进入蛇的袭击距离。研究者在未受干扰的野外个体上直接记录了这种捕猎方式；它属于捕食者借助拟态吸引猎物的攻击性拟态。',
      },
      {
        key: 'evidence',
        label: '研究观察',
        title: '先提出猜想，再记录行为',
        body: '研究者早期根据尾尖形状推测它能诱捕猎物。2015年发表的研究历时约两年半，确认尾部诱饵能吸引部分鸟类，也观察到没有鸟在场时蛇仍会摆尾。因此，看到一次摆尾不能直接判断它当时已发现猎物。',
      },
      {
        key: 'development',
        label: '生长变化',
        title: '诱饵会随幼蛇成长',
        body: '2015年的研究发现，幼蛇出生后尾部诱饵结构继续发育，其发育程度与吻肛长有关。吻肛长指吻端至泄殖腔的长度，不含尾巴。不能把成蛇图中的完整尾饰照搬到刚出生的幼体，也不能用诱饵大小反推出精确年龄。',
      },
      {
        key: 'range-conservation',
        label: '分布与保护',
        title: '保留岩缝里的隐蔽空间',
        body: '已知记录跨越伊朗西部与伊拉克东部。岩石丘陵和裂隙提供栖身环境；2019年IUCN与TRAFFIC分析指出，当时缺乏种群总量和趋势估计，并讨论了活体贸易风险。IUCN 2022 年等级变更表采用近危，独立评估日期与数量趋势仍需核实。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '馆藏尾饰曾被怀疑是异常增生',
        body: '1968 年采集的标本后来进入菲尔德自然历史博物馆。研究者隔着瓶子初见尾尖时，以为上面附着一只小型蛛形动物；仔细检查后，又因只有一件标本，无法排除肿瘤或寄生造成的异常。第二件相似标本出现后，Bostanchi、Anderson、Kami 和 Papenfuss 在 2006 年正式描述并命名 Pseudocerastes urarachnoides。尾饰的诱鸟功能则由后续野外观察验证。',
      },
    ],
    keyFacts: [
      '蜘蛛状结构是尾末端与延长鳞片组成的诱饵。',
      '2015年野外研究确认尾部诱捕能吸引部分鸟类。',
      '幼蛇出生后，尾饰仍会继续发育。',
      '爬行动物数据库已列出伊朗和伊拉克分布。',
      'IUCN 2022 年等级变更表将本种由数据缺乏调整为近危，独立评估日期与全球趋势尚未核实。',
    ],
    threats: ['活体采集与贸易可能影响分布有限的野外种群。', '岩石栖息地受扰会影响藏身空间；尚无可靠全球数量估计。'],
    conservationActions: ['保留原有岩块与裂隙，避免为寻找蛇翻动栖息地。', '支持当地种群调查，不购买来源不明的野生个体。', '观察时保持距离，不触碰或驱赶蛇来诱导摆尾。'],
    metrics: {},
    featuredStats: [
      { key: 'description-year', label: '正式描述', value: '2006', unit: '年', note: '学名发表年份。' },
      { key: 'luring-study', label: '诱鸟研究发表', value: '2015', unit: '年', note: '包含未受干扰个体的野外直接观察。' },
      { key: 'status', label: '保护等级', value: 'NT', note: 'IUCN 2022年资料：近危。' },
    ],
    media: {
      image: './images/species/spider-tailed-horned-viper/01-limestone-cover.webp',
      alt: '一条蛛尾拟角蝰盘在画面右侧的浅色石灰岩上，完整蛇身与尾尖留在画内。',
      focalPoint: { x: 0.8, y: 0.38 }, credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/spider-tailed-horned-viper/02-field-marks.webp', alt: '蛛尾拟角蝰在浅色岩面上弯曲身体，头部朝左，短尾伸向右侧。', title: '头部、鳞片与短尾', caption: 'AI生成科学情景重建；展示外形组合，细小鳞片与尾饰比例不能替代标本鉴定。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/spider-tailed-horned-viper/03-tail-lure.webp', alt: '尾末端的椭圆形膨大结构两侧伸出细长鳞片，与后段蛇身连续。', title: '尾尖上的蜘蛛轮廓', caption: 'AI生成科学情景重建；局部近景表现膨大尾尖与延长鳞片，不表示精确鳞片数、组织切面或运动轨迹。', focalPoint: { x: 0.6, y: 0.6 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/spider-tailed-horned-viper/04-rock-camouflage.webp', alt: '灰褐色蛛尾拟角蝰盘在岩缝旁，身体颜色接近周围石面。', title: '伏在岩石纹理间', caption: 'AI生成科学情景重建；呈现隐蔽环境，不能据图量化伪装效果或确认真实发现地点。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/spider-tailed-horned-viper/05-lure-posture.webp', alt: '盘起的蛛尾拟角蝰把带细长鳞片的尾尖伸到头部附近的岩面上。', title: '把尾尖露在前方', caption: 'AI生成科学情景重建；静态姿势不展示摆尾频率、鸟类反应或捕猎成功率，尾饰细节有简化。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/spider-tailed-horned-viper/06-zagros-habitat.webp', alt: '一条蛛尾拟角蝰伏在干旱岩丘前景，远处散布稀疏灌丛。', title: '干旱山地的岩缝', caption: 'AI生成科学情景重建；概括岩丘与灌丛环境，并非定位照片；尾饰形状经过简化。', focalPoint: { x: 0.5, y: 0.55 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'The Reptile Database — Pseudocerastes urarachnoides', url: 'https://reptile-database.reptarium.cz/front.front/species?genus=pseudocerastes&species=urarachnoides', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: 'Fathinia et al. 2015 — Avian deception using an elaborate caudal lure', url: 'https://doi.org/10.1163/15685381-00002997', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'IUCN — 2022 Red List Table 7（DD调整为NT）', url: 'https://nc.iucnredlist.org/redlist/content/attachment_files/2022-2_RL_Stats_Table_7.pdf', kind: 'conservation', accessedAt: '2026-09-07' },
      { title: 'IUCN/TRAFFIC 2019 — CoP18 Proposal 32 analysis', url: 'https://portals.iucn.org/library/efiles/documents/CITES-007-2019-En.pdf', kind: 'conservation', accessedAt: '2026-09-07' },
      {
        title: 'Bostanchi et al. 2006: original description and history of Pseudocerastes urarachnoides',
        url: 'https://researcharchive.calacademy.org/research/scipubs/pdfs/v57/proccas_v57_n14.pdf',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true, publishedAt: '2026-09-07', updatedAt: '2026-09-07',
  } as const satisfies Species;

export default profile;
