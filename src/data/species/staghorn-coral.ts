import type { SpeciesSource, Species } from '../../types/species.ts';

import { CONTENT_DATE, animalTaxonomy, conservation, taxon } from './shared.js';

const STAGHORN_CORAL_SOURCE_DATE = '2026-08-17' as const;

const STAGHORN_CORAL_CONTENT_DATE = '2026-08-17' as const;

const STAGHORN_CORAL_SOURCES = [
  {
    title: 'Crabbe et al. 2022 — Acropora cervicornis, IUCN Red List',
    url: 'https://www.iucnredlist.org/species/133381/165860142',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'ITIS — Acropora cervicornis (TSN 52862)',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=52862',
    kind: 'taxonomy',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Acropora cervicornis (AphiaID 206989)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=206989',
    kind: 'taxonomy',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Staghorn Coral current species profile',
    url: 'https://www.fisheries.noaa.gov/species/staghorn-coral',
    kind: 'general',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries 2006 — Final ESA listing rule for elkhorn and staghorn corals',
    url: 'https://www.govinfo.gov/content/pkg/FR-2006-05-09/pdf/06-4321.pdf',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries 2014 — Final coral listing and Acropora reclassification rule',
    url: 'https://www.federalregister.gov/documents/2014/09/10/2014-20814/endangered-and-threatened-wildlife-and-plants-final-listing-determinations-on-proposal-to-list-66',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries 2008 — Critical habitat for elkhorn and staghorn corals',
    url: 'https://www.fisheries.noaa.gov/action/critical-habitat-elkhorn-and-staghorn-corals',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries 2015 — Recovery Plan for Elkhorn and Staghorn Corals',
    url: 'https://repository.library.noaa.gov/view/noaa/8950/noaa_8950_DS1.pdf',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries 2022 — Caribbean Corals 5-Year Review',
    url: 'https://media.fisheries.noaa.gov/2022-08/Caribbean%20Corals%205%20Year%20Review_0.pdf',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Aronson & Precht 2001 — White-band disease and Caribbean reef change',
    url: 'https://doi.org/10.1023/A:1013103928980',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Lirman et al. 2014 — Growth dynamics of Acropora cervicornis',
    url: 'https://doi.org/10.1371/journal.pone.0107253',
    kind: 'ecology',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Mercado-Molina et al. 2014 — Survival and growth of unattached fragments',
    url: 'https://doi.org/10.1016/j.jembe.2014.04.017',
    kind: 'ecology',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Irwin et al. 2017 — Age and diversity of resilient Acropora communities',
    url: 'https://doi.org/10.1007/s00338-017-1602-9',
    kind: 'ecology',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Goergen et al. 2019 — Temporal change and recovery potential',
    url: 'https://doi.org/10.3389/fmars.2019.00036',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Miller et al. 2020 — Larval longevity and settlement competency',
    url: 'https://doi.org/10.7717/peerj.9705',
    kind: 'ecology',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Palacio-Castro et al. 2021 — Nutrient and heat susceptibility',
    url: 'https://doi.org/10.1007/s00338-021-02159-x',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Vollmer et al. 2023 — Genomic signatures of disease resistance',
    url: 'https://doi.org/10.1126/science.adi3601',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Muller et al. 2025 — Restoration strategies after the 2023 Florida heatwave',
    url: 'https://doi.org/10.1111/cobi.70168',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-acropora-cervicornis',
    slug: 'staghorn-coral',
    names: { zh: '鹿角珊瑚', en: 'Staghorn Coral', aliases: [] },
    scientificName: 'Acropora cervicornis',
    taxonomy: animalTaxonomy(
      taxon('Cnidaria', '刺胞动物门'),
      taxon('Anthozoa', '珊瑚纲'),
      taxon('Scleractinia', '石珊瑚目'),
      taxon('Acroporidae', '轴孔珊瑚科'),
      taxon('Acropora', '轴孔珊瑚属'),
    ),
    conservation: conservation('CR', 'decreasing', 2021, 'A2bce'),
    distribution: {
      realms: ['marine'],
      continents: ['北美洲', '南美洲'],
      regions: [
        '热带西大西洋',
        '加勒比海',
        '墨西哥湾',
        '佛罗里达礁群',
        '大安的列斯与小安的列斯',
        '中美洲加勒比岸',
      ],
      countries: [
        '美国',
        '巴哈马',
        '墨西哥',
        '伯利兹',
        '洪都拉斯',
        '古巴',
        '牙买加',
        '多米尼加共和国',
        '哥伦比亚',
        '委内瑞拉',
      ],
      range:
        '分布于热带西大西洋、加勒比海与墨西哥湾多国及属地的适宜礁区和硬底。大尺度地理包络仍广，但历史出现礁点、覆盖度、密度和连续枝丛均已严重减少；国家列表仅列代表性范围。',
      center: { lat: 20, lng: -78 },
    },
    habitats: [
      {
        name: '中浅水礁坡与斑块礁',
        realm: 'marine',
        description:
          '常见于约 5 至 20 米深的沟脊礁、银行礁、斑块礁与过渡礁；局地可更浅，罕见记录可深至约 60 米。',
        isPrimary: true,
      },
      {
        name: '固结硬底与石灰岩台地',
        realm: 'marine',
        description: '稳定的死珊瑚骨骼、石灰岩脊、台地和其他硬底为幼体附着与断枝再附着提供基底。',
      },
      {
        name: '清澈、流通且光照充足的水体',
        realm: 'marine',
        description: '高度依赖共生藻光合供能；长期浑浊、沉积物、营养盐和大型藻覆盖会降低生长与招募。',
      },
    ],
    measurements: {
      length: {
        max: 2.4,
        unit: 'm',
        note: '群体最大直径的公众资料上限；现代残存枝丛常小得多，单只珊瑚虫更远小于此',
      },
      height: {
        max: 1.2,
        unit: 'm',
        note: '群体最大高度；断枝可使同一基因个体形成多个分离枝丛',
      },
    },
    diet: {
      types: ['filter-feeder'],
      foods: ['共生甲藻转移的光合产物', '浮游生物与悬浮有机颗粒'],
      description:
        '主要能量来自组织内共生甲藻的光合作用，珊瑚虫也用触手捕捉浮游生物和悬浮颗粒；“滤食者”只是现有分类对悬浮摄食的近似。',
    },
    activity: ['固着珊瑚虫群体', '持续钙化与分枝生长', '年度广播产卵', '断枝克隆繁殖'],
    tags: ['热带西大西洋', '加勒比海', '基础造礁种', '共生', '克隆繁殖', 'IUCN 极危', '美国 ESA 受威胁'],
    summary: '鹿角珊瑚的金褐色圆柱形分枝组成鹿角状群体。它是造礁珊瑚，曾在加勒比中浅水礁形成大片立体枝丛。',
    description:
      '鹿角珊瑚快速分枝，断枝再附着后能扩展为遗传相同的克隆枝丛，有性繁殖则产生新的基因型。白带病曾使它大量衰退，海洋热浪、酸化、污染、沉积、藻类竞争与物理破坏继续影响恢复，较低的不同基因个体密度也限制受精。苗圃、基因库和移植能保存局地群体，长期保护还需减排并改善礁区环境。',
    storySections: [
      {
        key: 'cylindrical-branches',
        label: '辨识',
        title: '活组织覆盖的圆柱形分枝',
        body: '鹿角珊瑚的枝条直或略弯，恢复计划记录枝径约 0.25 至 5 厘米，活组织呈金黄至中褐色，正在生长的枝尖自然较浅。麋角珊瑚的枝更宽扁，整片惨白则可能是白化或组织脱落；识别需结合活组织、枝径与珊瑚杯排布。',
      },
      {
        key: 'colony-clone-thicket',
        label: '生命形态',
        title: '一片枝丛，可能同属一个基因',
        body: '每个群体由许多遗传相同的珊瑚虫组成。断枝再附着后，形成同一基因个体的新分株，多个分株可交错成枝丛。覆盖面积增加，未必代表基因型增加，因此恢复调查要同时记录珊瑚量与遗传多样性。',
      },
      {
        key: 'symbiosis-and-bleaching',
        label: '共生',
        title: '白化之后，生命仍在枝上',
        body: '组织内共生甲藻把光合产物供给珊瑚，珊瑚虫也捕捉浮游生物。热应激使共生体系失衡时，仍存活的组织会苍白透明、露出白色骨骼；若压力持续，才可能因能量不足、疾病和组织死亡而失去整枝。',
      },
      {
        key: 'two-reproductive-paths',
        label: '繁殖',
        title: '断枝扩张得快，新基因型却来自短暂的产卵窗口',
        body: '断枝在稳定硬底上可形成克隆群体；每年少数夜晚，成熟群体也会把卵和精子释放到水柱中。虽然同一群体同时产生两类配子，通常仍需不同基因个体交配。如今范围内有效有性招募几乎缺席，稀疏的基因个体又进一步压低了受精机会。',
      },
      {
        key: 'collapse-and-heat',
        label: '危机',
        title: '白带病与海洋热浪造成的损失',
        body: '1980 年代白带病使历史优势种大规模崩落；疾病、风暴和热异常持续造成脉冲式死亡。2023 年佛州创纪录热浪又重创野生、苗圃与移植群体。局地可在平静年份缓过来，只是扰动来得越来越密，枝条生长和断枝补充追不上损失。',
      },
      {
        key: 'restoration-boundaries',
        label: '恢复',
        title: '保存基因型与改善礁区环境',
        body: '海上苗圃、陆基活体基因库、有性繁育和移植可保存基因型、增加局地覆盖并避免区域消失；长期成活却随地点、年份和基因型大幅变化。恢复还需要清洁稳定的招募硬底、减少沉积和营养盐、疾病与遗传监测，以及压低温室气体排放。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1816 年的鹿角状珊瑚标本',
        body: '拉马克在 1816 年用 Madrepora cervicornis 描述鹿角珊瑚，后来移入鹿角珊瑚属，现行学名为 Acropora cervicornis。法国国家自然历史博物馆仍保存着命名所用的模式标本。它的圆柱形分枝呈鹿角状，与枝条宽扁的麋角珊瑚可以区别。',
      },
    ],
    keyFacts: [
      '早期野外研究汇总的枝条线性延伸约 3 至 11.5 厘米/年；NOAA 公众资料给出健康状态最高约 20 厘米/年，基因型与环境差异很大。',
      '断枝会形成遗传相同的分株；只有有性繁殖产生的幼体才能为种群加入新基因型。',
      '白化是共生藻或其色素丧失，活组织仍可能存在；白带病则表现为推进的组织损失和新鲜裸露骨骼。',
      '交错的圆柱枝为中浅水礁生物提供立体庇护空间；统计枝条、分株和不同基因个体，得到的是不同数量。',
      'IUCN 全球等级为极危；美国 ESA 法律状态仍为受威胁，两套体系各有各的口径。',
    ],
    threats: [
      '海洋升温、海洋热浪与白化',
      '白带病等疾病及温度、疾病协同',
      '海洋酸化',
      '沉积物、营养盐、污染与藻类竞争',
      '风暴、船只搁浅、锚具和潜水活动造成的物理破坏',
      '捕食与疾病传播',
      '低群体/基因个体密度和有性招募不足',
    ],
    conservationActions: [
      '减少温室气体排放与海洋升温、酸化压力',
      '改善流域水质，保护稳定硬底并减少物理破坏',
      '以基因型追踪的海上苗圃、陆基活体基因库和审慎移植分散风险',
      '辅助有性繁殖、幼体培育与新基因型补充',
      '疾病、白化、覆盖度和长期成活联合监测',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'growth',
        label: '枝条线性延伸',
        value: '约 3—11.5',
        unit: '厘米/年',
        note: 'NOAA 恢复计划汇总的早期野外范围；健康个体上限可更高，环境与基因型差异显著。',
      },
      {
        key: 'depth',
        label: '常见水深',
        value: '5—20',
        unit: '米',
        note: '局地可更浅；罕见记录可深至约 60 米，丰度随水深变化很大。',
      },
      {
        key: 'historic-decline',
        label: '历史丰度衰退',
        value: '约 97',
        unit: '%',
        note: 'NOAA 对 1980 年代以来白带病相关种群崩落的范围级概述，出自区域综合而非逐株普查。',
      },
      {
        key: 'form',
        label: '生命形态',
        value: '克隆珊瑚虫群体',
        note: '断枝形成分株；多个分株可属于同一基因个体，并交错构成连续枝丛。',
      },
    ],
    media: {
      image: './images/species/staghorn-coral/01-shallow-reef-colony-cover.webp',
      alt: '依照 Acropora cervicornis 形态创作的 AI 图像：清澈加勒比浅海中一个金褐色鹿角珊瑚群体从礁石向上伸展，枝端呈自然浅色，远处有小型礁鱼',
      focalPoint: { x: 0.62, y: 0.56 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/staghorn-coral/02-axial-radial-corallites-macro.webp',
          alt: '依照 Acropora cervicornis 形态创作的 AI 图像：鹿角珊瑚活枝尖微距，末端较大的轴向珊瑚杯与朝枝尖排列的细小辐射珊瑚杯清楚可见',
          title: '圆柱枝端的生长点',
          caption: '浅色活跃枝尖是健康的模样之一；轴向和辐射珊瑚杯的排布，是分类学家辨认它们的线索。',
          focalPoint: { x: 0.62, y: 0.47 },
        },
        {
          image: './images/species/staghorn-coral/03-interlocking-thicket-fish-habitat.webp',
          alt: '依照 Acropora cervicornis 形态创作的 AI 图像：密集交错的金褐色鹿角珊瑚圆柱枝铺满浅礁，几尾小型加勒比礁鱼在分枝间穿梭',
          title: '由许多枝条织成的庇护空间',
          caption: '圆柱形分枝交错成枝丛，为小鱼提供庇护。枝条数量与不同基因个体数量需要分别统计。',
          focalPoint: { x: 0.57, y: 0.54 },
        },
        {
          image: './images/species/staghorn-coral/04-bleaching-versus-white-band.webp',
          alt: '依照 Acropora cervicornis 形态创作的 AI 图像：两组鹿角珊瑚并列，左侧仍有组织但整体白化，右侧鲜白裸骨带分隔金褐活组织与覆藻旧骨',
          title: '三种白色，三种含义',
          caption: '均匀苍白的活组织是白化；推进的鲜白裸骨带提示组织损失；健康枝尖的自然浅色又是正常生长。',
          focalPoint: { x: 0.5, y: 0.52 },
        },
        {
          image: './images/species/staghorn-coral/05-in-water-coral-tree-nursery.webp',
          alt: '依照 Acropora cervicornis 形态创作的 AI 图像：海中树状苗圃上分别悬挂着多枚健康鹿角珊瑚圆柱形断枝，一名潜水员在远处维护',
          title: '把基因型分散保存在海上苗圃',
          caption: '苗圃断枝多是克隆分株；它们可保存和扩增既有基因型，却不会自动增加遗传多样性。',
          focalPoint: { x: 0.62, y: 0.5 },
        },
        {
          image: './images/species/staghorn-coral/06-diver-outplanting-fragments.webp',
          alt: '依照 Acropora cervicornis 形态创作的 AI 图像：戴手套的潜水员把五枚苗圃培育鹿角珊瑚碎枝用少量海用环氧胶固定在石灰岩硬底上',
          title: '回到硬底，只是长期恢复的开始',
          caption: '移植可增加局地覆盖并避免消失，但长期成活仍取决于水质、疾病、热浪、基因型和持续监测。',
          focalPoint: { x: 0.54, y: 0.65 },
        },
      ],
    },
    sources: [
      ...STAGHORN_CORAL_SOURCES,
      {
        title: '鹿角珊瑚：描述与命名记录',
        url: 'https://science.mnhn.fr/institution/mnhn/collection/ik/item/2010-510',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: CONTENT_DATE,
    updatedAt: STAGHORN_CORAL_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
