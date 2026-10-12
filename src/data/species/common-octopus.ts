import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const COMMON_OCTOPUS_SOURCE_DATE = '2026-08-28' as const;

const COMMON_OCTOPUS_CONTENT_DATE = '2026-08-28' as const;

const COMMON_OCTOPUS_SOURCES = [
  {
    title: 'WoRMS/MolluscaBase — Octopus vulgaris (accepted; AphiaID 140605)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=140605',
    kind: 'taxonomy',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — full classification of Octopus vulgaris',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/140605',
    kind: 'taxonomy',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — vernacular names for Octopus vulgaris',
    url: 'https://www.marinespecies.org/rest/AphiaVernacularsByAphiaID/140605',
    kind: 'taxonomy',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'FAO 2014 — Cephalopods of the World, Volume 3',
    url: 'https://www.fao.org/4/i3489e/i3489e.pdf',
    kind: 'general',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'FAO ArtFiMed — Octopus vulgaris Mediterranean species sheet',
    url: 'https://www.fao.org/fishery/docs/CDrom/ARTFIMED/ArtFiWeb/descript/Species/OCTOCVUL.HTML',
    kind: 'general',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'IUCN 2018 — Octopus vulgaris assessment (LC; assessed 2016)',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T162571A918906.en',
    kind: 'conservation',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'IUCN — Octopus vulgaris assessment PDF (A918906)',
    url: 'https://www.iucnredlist.org/species/pdf/918906.pdf',
    kind: 'conservation',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Amor et al. 2017 — morphology and molecular lineages in the Octopus vulgaris complex',
    url: 'https://doi.org/10.1111/zsc.12207',
    kind: 'taxonomy',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Gleadall 2016 — Octopus sinensis reinstated for the East Asian common octopus',
    url: 'https://doi.org/10.12782/sd.21.1.031',
    kind: 'taxonomy',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Quinteiro et al. 2020 — common-octopus phylogeography across Atlantic Macaronesia',
    url: 'https://doi.org/10.1371/journal.pone.0230294',
    kind: 'distribution',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'De Luca et al. 2016 — Mediterranean and Northeast Atlantic population structure',
    url: 'https://doi.org/10.1371/journal.pone.0149496',
    kind: 'distribution',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Emami-Khoyi et al. 2026 — genomic divergence of the southern Type III lineage',
    url: 'https://doi.org/10.1002/ece3.73235',
    kind: 'distribution',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Katsanevakis & Verriopoulos 2004 — den ecology on soft sediment',
    url: 'https://doi.org/10.3989/scimar.2004.68n1147',
    kind: 'ecology',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Arechavala-Lopez et al. 2018 — movements and dens on an altered coast',
    url: 'https://doi.org/10.1093/icesjms/fsy014',
    kind: 'ecology',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Josef et al. 2012 — natural-scene feature matching during camouflage',
    url: 'https://doi.org/10.1371/journal.pone.0037579',
    kind: 'ecology',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Ambrose & Nelson 1983 — prey remains around Mediterranean dens',
    url: 'https://doi.org/10.1111/j.1439-0485.1983.tb00299.x',
    kind: 'ecology',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Otero et al. 2007 — reproductive biology and potential fecundity in Galicia',
    url: 'https://doi.org/10.1016/j.fishres.2007.01.007',
    kind: 'ecology',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Deryckere et al. 2020 — egg strings, maternal care and hatching under culture conditions',
    url: 'https://doi.org/10.1186/s12861-020-00212-6',
    kind: 'ecology',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Villanueva 1995 — cultured paralarval growth and settlement',
    url: 'https://doi.org/10.1139/f95-853',
    kind: 'ecology',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Perales-Raya et al. 2014 — beak increments and lifespan estimates',
    url: 'https://doi.org/10.1007/s10750-013-1602-x',
    kind: 'general',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Hermosilla et al. 2010 — daily stylet-increment validation',
    url: 'https://doi.org/10.1093/icesjms/fsq047',
    kind: 'general',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Villanueva et al. 2021 — Kölliker organs and three-sucker hatchling arms',
    url: 'https://doi.org/10.3389/fmars.2021.645738',
    kind: 'ecology',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
  {
    title: 'Senckenberg Marinvert — Octopus vulgaris morphology reference',
    url: 'https://marinvert.senckenberg.science/octopus-vulgaris/',
    kind: 'general',
    accessedAt: COMMON_OCTOPUS_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-octopus-vulgaris',
    slug: 'common-octopus',
    names: {
      zh: '普通章鱼',
      en: 'Common Octopus',
      aliases: ['Common Atlantic Octopus', 'Common European Octopus'],
    },
    scientificName: 'Octopus vulgaris',
    taxonomy: animalTaxonomy(
      taxon('Mollusca', '软体动物门'),
      taxon('Cephalopoda', '头足纲'),
      taxon('Octopoda', '八腕目'),
      taxon('Octopodidae', '章鱼科'),
      taxon('Octopus', '章鱼属'),
    ),
    conservation: conservation('LC', 'unknown', 2016),
    distribution: {
      realms: ['marine'],
      continents: ['欧洲', '非洲'],
      regions: [
        '地中海',
        '东北大西洋欧洲沿岸',
        '西北非洲与东部中大西洋沿岸',
        '亚速尔、马德拉、加那利与佛得角群岛',
      ],
      countries: ['葡萄牙', '西班牙', '法国', '意大利', '希腊', '摩洛哥'],
      range:
        '狭义普通章鱼（Octopus vulgaris sensu stricto）的确认核心范围是地中海、东北至东部中大西洋的欧洲与西北非洲沿岸，以及亚速尔、马德拉、加那利和佛得角等马卡罗尼西亚岛群。所列国家只是范围中的代表。历史上归入本种的东亚、加勒比、巴西、南非与澳大利亚种群属于其他物种或待命名谱系，未计入此范围；IUCN 2018 评估仍使用较宽的旧分类口径。',
      center: { lat: 37, lng: 3 },
    },
    habitats: [
      {
        name: '浅海岩礁、岩缝与洞穴',
        realm: 'marine',
        description:
          '成体常把天然缝隙、石块下方或其他硬质遮蔽物当作巢穴，白天可留在洞内并从入口观察。巢穴会更换，不代表固定领地或终生住所。',
        isPrimary: true,
      },
      {
        name: '沙底、泥沙底与碎石底',
        realm: 'marine',
        description:
          '本种也在软底活动；石块、贝壳与其他可搬动固体材料能提供庇护和巢口结构，因此局地分布不只由沉积物粒径决定。',
      },
      {
        name: '海草床、藻场与人工硬质结构邻近海底',
        realm: 'marine',
        description:
          '海草、藻类和港岸硬质结构附近可同时提供猎物与遮蔽。记录从潮间带延伸到约 200 至 250 米，常见观察和捕捞集中在 100 米以内；深度上限不是精确生理极限。',
      },
    ],
    measurements: {
      length: {
        min: 10,
        max: 25,
        unit: 'cm',
        note:
          '常见成体外套膜长的约数范围，不是含腕全长或自然极值；历史 FAO 地中海资料为常见 10–20 cm、最大 23 cm，当前形态资料常以约 25 cm 描述大型成体。',
      },
      weight: {
        min: 1,
        max: 3,
        unit: 'kg',
        note:
          '历史 FAO 地中海种表的常见体重，不是狭义种全球成体范围；季节、性别、胃内容物和含水状态都会改变测量值。',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '蟹类等甲壳动物',
        '双壳类',
        '腹足类',
        '小型鱼类与其他底栖动物',
      ],
      description:
        '普通章鱼是机会性底栖捕食者，主要用腕、腕间膜与两列吸盘控制蟹类和贝类，再由腕冠中央隐藏的喙和齿舌处理食物。食谱随地点、体型和猎物供应改变；巢口猎物残骸堆 偏向保存硬壳残骸，不能当作完整食谱样本。',
    },
    activity: [
      '多数时间与一个或多个巢穴相连，能更换庇护点，也会在局地范围内往返觅食',
      '地中海许多地点以夜间活动为主，节律会随地点、捕食风险和食物变化，不能概括为严格夜行',
      '用八条腕和双列吸盘探索、抓握与搬动物体，喙藏在腕冠中央',
      '用色素胞与反光皮肤结构改变明暗和花纹，皮肤乳突改变表面纹理',
      '巢口常留下贝壳和甲壳残骸形成 midden，它只记录部分硬壳猎物',
      '遇险时可喷墨、喷水后退或缩入狭缝，日常移动也会沿底爬行',
      '刚孵化个体以短腕浮游幼体进入水柱，随后腕和吸盘增多并转为底栖生活',
    ],
    tags: [
      '软体动物门',
      '头足纲',
      '八腕目',
      '无外壳',
      '双列吸盘',
      '色素胞伪装',
      '皮肤乳突',
      '岩缝巢穴',
      '底栖捕食',
      '浮游幼体',
      '终末繁殖',
      '物种复合群',
      'IUCN无危',
      '渔业物种',
    ],
    summary:
      '地中海与东北大西洋沿岸的短寿八腕捕食者，用色素胞和皮肤乳突改变外观，并以双列吸盘的柔软腕探索岩礁、巢穴和猎物；狭义种不包含东亚、美洲、南非与澳大利亚旧记录。',
    description:
      '普通章鱼 Octopus vulgaris 属于软体动物门头足纲八腕目。常见成体外套膜长约 10 至 25 厘米、体重约 1 至 3 千克；两项都是展示口径，不是含腕全长或自然极值。八条腕各有两列吸盘，腕间膜能罩住猎物，中央喙通常隐藏；色素胞、反光结构和可隆起的皮肤乳突共同改变明暗、花纹与纹理。它利用岩缝或软底上的固体材料形成巢穴，捕食蟹类、双壳类和其他底栖动物。雌体把约 10 万至 50 万枚小卵连成卵串，在洞穴中持续清洁和通水，孵化后进入衰老；幼体先在水柱生活数周至数月，再转为底栖。寿命估计约 1 至 2 年。IUCN 于 2016 年评估为 LC、趋势未知，并在 2018 年发布；该评估仍沿用较宽物种概念。现行狭义种的确认范围包括地中海、东北大西洋和马卡罗尼西亚；东亚 O. sinensis 等旧广义型的分布另计。',
    storySections: [
      {
        key: 'species-complex',
        label: '名称与种界',
        title: '相似章鱼曾被合称为全球种',
        body: '“普通章鱼”曾被写成热带和温带海域的全球种。形态、线粒体和核基因组研究逐步拆开这个复合群：东亚个体使用 Octopus sinensis，南非与南印度洋 Type III 也与狭义种分离。当前狭义种把 O. vulgaris sensu stricto 限定在地中海、东北至东部中大西洋和马卡罗尼西亚；外形相似的异地照片不能独立完成种鉴定。',
      },
      {
        key: 'living-skin',
        label: '伪装皮肤',
        title: '皮肤改变颜色、花纹与纹理',
        body: '色素胞调节皮肤明暗和斑纹，其他反光结构参与颜色表现，肌肉控制的乳突改变表面起伏。地中海野外图像分析显示，章鱼选择附近物体的关键视觉特征来组织花纹，并非逐像素复制整幅背景。',
      },
      {
        key: 'arms-and-suckers',
        label: '八腕与吸盘',
        title: '八条腕同时承担移动、探索与控制猎物',
        body: '成体没有外露贝壳或鳍。成体八条肌肉质腕各有两列吸盘，柔软腕能沿复杂表面弯曲，吸盘负责接触、附着和感知。腕间膜可在捕食时罩住蟹或贝类，喙和齿舌藏在腕冠中央处理食物。漏斗位于头与外套膜腹侧，用于呼吸水流和快速喷射。',
      },
      {
        key: 'den-and-foraging',
        label: '巢穴与觅食',
        title: '巢口硬壳残骸提供部分猎物线索',
        body: '普通章鱼会利用岩缝、石块或软底上的固体材料形成庇护点，并在局地范围内往返觅食。巢口散落的双壳、螺壳和蟹壳形成猎物残骸堆（midden），研究者可借它识别部分猎物；水流、猎物重量和是否带回巢中会造成偏差。一个法国地中海地点的硬壳比例不能变成全种固定食谱。',
      },
      {
        key: 'brood-and-paralarvae',
        label: '卵串与幼体',
        title: '母体守在卵串下，幼体孵出后进入水柱',
        body: '雌体把大量约 2.5 × 1 毫米的小卵编成卵串，挂在洞穴硬基质上，持续清洁、通水和防卫。孵化后雌体进入衰老并死亡；雄体不参与共同守卵。刚孵化个体具有大外套膜、大眼、八条短腕和每腕约三枚吸盘，先以浮游幼体生活。21.2°C 培养实验在第 47 至 54 日观察到开始着底，这个结果受温度和饵料条件限制。',
      },
      {
        key: 'short-life-fishery',
        label: '短寿命与渔业',
        title: '短寿与快速变化的地方渔场',
        body: '普通章鱼寿命估计约 1 至 2 年，生长、成熟和招募会随温度与食物快速变化，地方渔获也可能剧烈波动。IUCN 的 LC 评估日期是 2016 年，趋势为未知，且分类基础包含如今已拆出的谱系。管理者仍需按地区记录捕捞努力、外套膜长、性别和成熟阶段，保护产卵季雌体与高密度巢穴区，并用遗传凭证清理历史混名。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1797 年的命名，后来拆开近似种',
        body: 'Cuvier 于 1797 年命名普通章鱼，现用学名为 Octopus vulgaris。它曾被当作遍布热带和温带的全球种，后来的形态与基因研究拆开了多个近似谱系。东亚旧资料中的“真蛸”现在使用 Octopus sinensis，狭义普通章鱼主要保留地中海和东北至东部中大西洋范围。',
      },
    ],
    keyFacts: [
      '当前接受学名是 Octopus vulgaris Cuvier, 1797，WoRMS AphiaID 为 140605。',
      '分类归属依次为 Mollusca、Cephalopoda、Octopoda、Octopodidae 与 Octopus。',
      '狭义种分布于地中海、东北至东部中大西洋和马卡罗尼西亚的狭义种。',
      '东亚“真蛸”使用 Octopus sinensis，不能作为本种中文别名或分布记录。',
      '南非至阿姆斯特丹岛 Type III 已显示与狭义种分离，但正式名称仍待解决。',
      '常见 10 至 25 cm 指外套膜长，不是含腕全长；常见体重约 1 至 3 kg。',
      '成体有八条腕，每腕两列吸盘，体外没有硬壳。',
      '色素胞、反光结构和皮肤乳突共同改变颜色、花纹与立体纹理。',
      '巢口 猎物残骸堆 偏向保存硬壳猎物，不能代表全部摄食比例。',
      '地中海多处记录夜间活动，但节律随地点、风险和食物改变。',
      '寿命估计约 1 至 2 年，温度、地点与年龄读取方法会改变结果。',
      '历史综合产卵量约 10 万至 50 万枚，不是每只雌体的固定窝卵数。',
      '雌体单独清洁、通水并防卫卵串，孵化后进入衰老。',
      '刚孵化幼体腕短，每腕约三枚吸盘，先在水柱生活数周至数月。',
      '21.2°C 培养实验在第 47 至 54 日开始着底，不能推广成野外固定日程。',
      'IUCN 评估日期为 2016 年、发布年份为 2018 年；正式状态是 LC、趋势未知。',
    ],
    threats: [
      '地笼、罐壶、拖网、刺网、手钓与潜捕等高强度定向渔业会压低地方繁殖个体数量',
      '软底拖网和沿岸工程会破坏岩缝、固体庇护物与产卵基质',
      '海水增温、低氧和上升流变化会改变生长、成熟、孵化与浮游幼体存活',
      '物种复合群长期混名，使渔获统计、分布记录和风险评估的对象错配',
      '海洋污染、遗失渔具与洞穴废弃物会造成局地伤亡，物种级全球量化仍有限',
    ],
    conservationActions: [
      '按地方成熟和招募数据设置最小上市重量、禁渔期、禁渔区与渔具限制',
      '保护产卵季雌体和高密度巢穴区，清理硬质结构前检查附着卵串',
      '统一记录捕捞努力量、外套膜长、体重、性别和成熟阶段，不只统计总吨数',
      '为渔获与馆藏保留照片、组织或遗传凭证，逐步拆分复合群历史记录',
      '联合监测浮游幼体、着底招募、温度与溶氧，避免用单年成体渔获代表种群趋势',
      '保留岩礁、海草床、碎石底与软底固体庇护物的组合，维持觅食和筑穴空间',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'arms',
        label: '腕的数量',
        value: '8',
        unit: '条',
        note: '成体八条腕各有两列吸盘，不是六腕加两条鱿鱼式捕食触手。',
      },
      {
        key: 'common-mantle-length',
        label: '常见外套膜长',
        value: '10–25',
        unit: 'cm',
        note: '约数口径，不是含腕全长或自然极值；不同来源的常见上限略有差异。',
      },
      {
        key: 'potential-fecundity',
        label: '潜在繁殖力',
        value: '约 10万–50万',
        unit: '枚',
        note: '历史综合范围；加利西亚样本均值约 22.1 万枚卵母细胞，不等于成功孵化数。',
      },
      {
        key: 'planktonic-settlement',
        label: '实验着底起始',
        value: '47–54',
        unit: '日',
        note: '21.2°C 培养条件下的开始着底日，温度、饵料和培养条件会改变阶段长度。',
      },
    ],
    media: {
      image:
        './images/species/common-octopus/01-rocky-reef-adult-portrait.webp',
      alt: '地中海浅海石灰岩礁上，一只完整普通章鱼位于画面右侧，棕灰斑驳外套膜、水平狭缝瞳孔、八条自然展开的腕和腕下双列吸盘清晰可见',
      focalPoint: { x: 0.68, y: 0.56 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/common-octopus/02-chromatophore-papillae-camouflage.webp',
          alt: '贴近浅色岩礁的一只普通章鱼近景，皮肤呈灰褐、赭色和棕红色破碎网纹，低矮乳突、水平瞳孔与部分腕下双列吸盘可见',
          title: '一次静态伪装，调用了颜色与纹理',
          caption:
            '色素胞、反光结构和皮肤乳突共同改变外观；画面只重建一个合理瞬间，不能测出变色速度或证明逐像素复制背景。',
          focalPoint: { x: 0.61, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/common-octopus/03-rock-crevice-den-and-midden.webp',
          alt: '岩缝洞穴口的一只普通章鱼向外伸出腕，前方沙砾上散落空双壳和两块空蟹壳，周围没有活猎物、血液或人类垃圾',
          title: '巢口残壳，只保存了菜单的一部分',
          caption:
            'midden 能提供硬壳猎物线索，水流和搬运行为会造成偏差；这一帧不表示永久筑巢、固定食谱或真实调查地点。',
          focalPoint: { x: 0.57, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/common-octopus/04-crab-capture-and-sucker-use.webp',
          alt: '岩沙海底的一只普通章鱼以八腕和腕间膜罩住一只完整小蟹，多条腕下双列吸盘接触蟹旁岩面，中央喙没有外露',
          title: '先用腕网控制，再把食物送向中央',
          caption:
            '蟹类是已记录猎物；画面停在无伤捕捉瞬间，不证明固定主食、捕猎成功率或后续处理方式。',
          focalPoint: { x: 0.57, y: 0.61 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/common-octopus/05-female-egg-brooding-and-ventilation.webp',
          alt: '昏暗岩洞中一只雌性普通章鱼独处于密集乳白小卵串下方，一条腕靠近卵串，腹侧漏斗朝向洞顶通水',
          title: '大量小卵串，只由雌体守护',
          caption:
            '卵串形态与通水行为来自实验证据；静态重建不能给出精确卵数、野外孵化期或母体当时的摄食状态。',
          focalPoint: { x: 0.52, y: 0.47 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/common-octopus/06-pelagic-paralarva.webp',
          alt: '深蓝水体中一只透明普通章鱼早期浮游幼体的高倍率重建，具有大外套膜、两只突出眼、八条短腕、少量小吸盘和背侧深棕色素胞斑',
          title: '孵化后先入水柱，再转向海底',
          caption:
            '早期浮游幼体具有大眼、大外套膜和短腕；画面不固定孵化日龄或每腕吸盘数，也不能据此读取真实体长与漂流时间。',
          focalPoint: { x: 0.56, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...COMMON_OCTOPUS_SOURCES,
      {
        title: 'GBIF: Octopus vulgaris Cuvier, 1797 nomenclatural record',
        url: 'https://www.gbif.org/species/2289671',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: COMMON_OCTOPUS_CONTENT_DATE,
    updatedAt: COMMON_OCTOPUS_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
