import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const PEACOCK_MANTIS_SHRIMP_SOURCE_DATE = '2026-09-01' as const;

const PEACOCK_MANTIS_SHRIMP_CONTENT_DATE = '2026-09-01' as const;

const PEACOCK_MANTIS_SHRIMP_SOURCES = [
  {
    title:
      'WoRMS — Odontodactylus scyllarus (Linnaeus, 1758), AphiaID 220297',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=220297',
    kind: 'taxonomy',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title: 'OBIS — Odontodactylus scyllarus, taxon 220297',
    url: 'https://obis.org/taxon/220297',
    kind: 'taxonomy',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title: 'NCBI Taxonomy — Odontodactylus scyllarus, txid 120888',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=120888&mode=Info',
    kind: 'taxonomy',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      'Brokensha et al. 2025 — South African Stomatopoda taxonomic guide',
    url: 'https://doi.org/10.11646/zootaxa.5713.1.1',
    kind: 'taxonomy',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title: '台湾农业部农业知识入口网 — 蝉型齿指虾蛄',
    url: 'https://kmweb.moa.gov.tw/subject/subject.php?id=38515',
    kind: 'general',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title: '台湾海洋国家公园 — 澎湖南方四岛大型甲壳动物',
    url: 'https://www.marine.gov.tw/uploads/publication_file/file/67651fae36737644ea5464f5/111%E6%BE%8E%E6%B9%96%E5%8D%97%E6%96%B9%E5%9B%9B%E5%B3%B6%E5%A4%A7%E5%9E%8B%E7%94%B2%E6%AE%BC%E5%8B%95%E7%89%A9%E5%85%A7%E9%A0%81.pdf',
    kind: 'ecology',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      'FAO 1998 — Living Marine Resources of the Western Central Pacific',
    url: 'https://www.fao.org/4/w7192e/w7192e12.pdf',
    kind: 'distribution',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title: 'Ahyong 2001 — Revision of the Australian Stomatopod Crustacea',
    url: 'https://doi.org/10.3853/j.0812-7387.26.2001.1333',
    kind: 'taxonomy',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      'Reaka & Manning 1981 — Stomatopod behavior and rates of evolution',
    url: 'https://doi.org/10.2307/1547964',
    kind: 'ecology',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title: 'Poupin et al. 2019 — Stomatopod Crustaceans from Mayotte Island',
    url: 'https://doi.org/10.5479/si.0077-5630.624',
    kind: 'distribution',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      'Patek et al. 2004 — Deadly strike mechanism of a mantis shrimp',
    url: 'https://doi.org/10.1038/428819a',
    kind: 'ecology',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      'Patek & Caldwell 2005 — Extreme impact and cavitation forces of a biological hammer',
    url: 'https://doi.org/10.1242/jeb.01831',
    kind: 'ecology',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      "Patek et al. 2007 — Linkage mechanics and power amplification of the mantis shrimp's strike",
    url: 'https://doi.org/10.1242/jeb.006486',
    kind: 'ecology',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title: 'Weaver et al. 2012 — The stomatopod dactyl club',
    url: 'https://doi.org/10.1126/science.1218764',
    kind: 'general',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      'Amini et al. 2019 — A diecast mineralization process forms the mantis shrimp dactyl club',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6500109/',
    kind: 'general',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      'Cronin et al. 1994 — Specialization of retinal function in mantis shrimp compound eyes',
    url: 'https://doi.org/10.1016/0042-6989(94)90221-6',
    kind: 'general',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      'Kleinlogel & Marshall 2009 — Ultraviolet polarisation sensitivity in Odontodactylus scyllarus',
    url: 'https://doi.org/10.1007/s00359-009-0491-y',
    kind: 'general',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      'Chiou et al. 2008 — Circular polarization vision in a stomatopod crustacean',
    url: 'https://doi.org/10.1016/j.cub.2008.02.066',
    kind: 'general',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      'Cronin et al. 2014 — Filtering and polychromatic vision in mantis shrimps',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3886321/',
    kind: 'general',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title: 'Daly et al. 2017 — Colour preference in Odontodactylus scyllarus',
    url: 'https://doi.org/10.1093/jcbiol/rux038',
    kind: 'ecology',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title: 'Daly et al. 2016 — Dynamic polarization vision in mantis shrimps',
    url: 'https://doi.org/10.1038/ncomms12140',
    kind: 'general',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      'Poding et al. 2024 — Fluorescent organisms in the Banda Sea and Red Sea',
    url: 'https://doi.org/10.1371/journal.pone.0292476',
    kind: 'general',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title: 'Smithsonian Ocean — Mantis Shrimp Carries Eggs',
    url: 'https://ocean.si.edu/ocean-life/invertebrates/mantis-shrimp-carries-eggs',
    kind: 'ecology',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      'IUCN Red List species search — Odontodactylus scyllarus, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Odontodactylus%20scyllarus&searchType=species',
    kind: 'conservation',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      'IUCN Red List FAQ — Species absent from the Red List are Not Evaluated',
    url: 'https://nrl.iucnredlist.org/about/faqs',
    kind: 'conservation',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title:
      'Michel 1970 — Pelagic larvae and post-larvae of Odontodactylus',
    url: 'https://horizon.documentation.ird.fr/exl-doc/pleins_textes/cahiers/oceanographie/19584.pdf',
    kind: 'ecology',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title: 'CITES — Checklist of Species',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
  {
    title: 'Caldwell 1987 — Assessment strategies in stomatopods',
    url: 'https://www.ingentaconnect.com/content/umrsmas/bullmar/1987/00000041/00000002/art00003',
    kind: 'general',
    accessedAt: PEACOCK_MANTIS_SHRIMP_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-odontodactylus-scyllarus',
    slug: 'peacock-mantis-shrimp',
    names: {
      zh: '雀尾螳螂虾',
      en: 'Peacock Mantis Shrimp',
      aliases: [
        '蝉型齿指虾蛄',
        '蝉形齿指虾蛄',
        '孔雀螳螂虾',
        '拳击虾',
        'Cancer scyllarus',
        'Gonodactylus bleekeri',
        'Gonodactylus elegans',
      ],
    },
    scientificName: 'Odontodactylus scyllarus',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Malacostraca', '软甲纲'),
      taxon('Stomatopoda', '口足目'),
      taxon('Odontodactylidae', '齿指虾蛄科'),
      taxon('Odontodactylus', '齿指虾蛄属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['非洲', '亚洲', '大洋洲'],
      regions: [
        '热带与亚热带印度—西太平洋',
        '西印度洋岛屿与东非沿岸',
        '南海、日本至澳大利亚和西南太平洋岛屿',
      ],
      countries: [],
      range:
        '分布横跨印度、西太平洋：从南非东岸、莫桑比克及西印度洋岛屿，经南海与日本，延伸至澳大利亚、新喀里多尼亚、斐济和新西兰北部。国家清单并非穷尽，地图不表示连续占据或丰度。',
      center: { lat: -5, lng: 120 },
    },
    habitats: [
      {
        name: '浅水珊瑚礁与岩礁基部',
        realm: 'marine',
        description:
          '利用珊瑚、岩块和礁基附近的孔隙或可挖掘底质作为隐蔽处；多份资料聚焦约 30 米以浅。',
        isPrimary: true,
      },
      {
        name: '岩砾、碎珊瑚与粗颗粒硬底',
        realm: 'marine',
        description:
          '在岩石、碎珊瑚、贝壳和沙质混合底上挖掘或修整洞穴，并以大块碎屑加固入口。',
      },
      {
        name: '印度—西太平洋浅海礁坪',
        realm: 'marine',
        description:
          '白昼洞口附近和夜间开放礁坪都有观察；馆藏与文献记录包络达 100 米，这个数字不代表典型水深或潜水能力。',
      },
    ],
    measurements: {
      length: {
        max: 171,
        unit: 'mm',
        note:
          'Manning 1967 报告的最大总长，经 2001 与 2025 分类处理引用；不是典型成体范围、平均值、甲长或图片测量。',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: ['腹足类', '双壳类', '其他甲壳类'],
      description:
        '以棒状掠肢反复击打硬壳猎物；处理螺类时可将猎物抵在坚硬岩面上。实验饵料和零散鱼类记录不能代表完整野外食谱或固定比例。',
    },
    activity: [
      '白昼活动有记录',
      '夜间开放礁坪也有记录',
      '多在洞穴及入口附近活动',
      '缺少物种级昼夜活动时间预算',
    ],
    tags: [
      '锤击型口足类',
      '印度—西太平洋',
      '珊瑚礁与岩礁',
      '碎石洞穴',
      '弹簧—闩锁掠肢',
      '空化',
      '独立柄眼',
      '紫外视觉',
      '偏振视觉',
      '局部荧光',
      '雌体持卵团',
      'IUCN未评估',
    ],
    summary:
      '雀尾螳螂虾生活在印度洋和西太平洋的礁区，用锤状捕捉足击碎贝壳。它的复眼能探测颜色、紫外光和偏振光，常在碎石围成的洞口守候猎物。',
    description:
      '雀尾螳螂虾属于口足目，常见于珊瑚礁、碎石和砂岩混合海床。它把洞穴作为藏身处和捕食据点，以贝类、甲壳类等动物为食。捕捉足的外骨骼储存能量，再迅速释放，使末端的硬锤高速击中猎物；冲击产生的空化气泡还会形成第二次作用。眼部的多种感光通道各有用途，通道数量多并不直接说明它比人分辨更多颜色。',
    storySections: [
      {
        key: 'stomatopod-body-plan',
        label: '分类与形态',
        title: '口足目动物的捕捉足',
        body: '雀尾螳螂虾的头胸甲较短，部分胸节露在甲外，腹部末端形成宽大的尾扇。第二对胸部附肢特化成捕捉足，末端具有坚硬锤部，适合击破硬壳猎物。体色会随个体和环境改变，辨认物种仍需结合捕捉足、尾部和甲壳等结构。',
      },
      {
        key: 'rubble-burrow-and-activity',
        label: '洞穴与活动',
        title: '洞口的碎石也能提供防护',
        body: '从礁坪到礁基，它会在岩石、珊瑚与粗颗粒底质之间挖掘或修整洞穴，并用碎珊瑚、贝壳和岩砾加固入口。资料多聚焦约 30 米以浅，2025 年分类处理汇总的 0 至 100 米是记录包络，不是典型水深或潜水能力。白昼洞口附近和夜间开放礁坪都有观察，现有记录不足以给它贴上严格日行或夜行标签。',
      },
      {
        key: 'spring-loaded-raptorial-club',
        label: '弹簧与闩锁',
        title: '捕捉足储能后迅速挥出',
        body: '肌肉先为外骨骼弹性结构加载，闩锁控制释放，杠杆和四杆联动再把储能转成掠肢转动。高速摄影实验记录棒状指节撞击端达到 14 至 23 米/秒、峰值加速度 65 至 104 千米每二次方秒，动作平均约 2.7 毫秒。这些量属于掠肢，不是动物游速；鞍形结构也只是多个储能部位之一。',
      },
      {
        key: 'impact-and-cavitation',
        label: '冲击与空化',
        title: '一次挥击可能产生两个冲击峰',
        body: '掠肢撞击先产生第一个力峰，接触点附近的局部低压形成空化泡，泡塌陷后产生第二个峰。研究共购入 13 只商业采集个体；平面三轴钢传感器最终纳入 10 只，最高冲击峰为 1,501 牛。其他测试记录到最高 504 牛空化峰，两峰常相隔约 390 至 480 微秒。这些峰值不代表每次击打、所有体型或自然猎物上的输出。',
      },
      {
        key: 'three-part-polarization-eye',
        label: '复眼与偏振',
        title: '复眼能感知偏振光',
        body: '每只柄眼都能独立运动，背侧半球、腹侧半球和六行中带的视区重叠会形成三个暗色假瞳孔。中带第 1 至 4 行参与颜色处理，第 5 至 6 行参与偏振处理；实验还确认紫外线偏振敏感和左右旋圆偏振区分。最多 12 个颜色视觉通道描述感受器与滤光系统，不表示比人类多看十二倍颜色，也不能推出更高色觉精度或全景无死角。',
      },
      {
        key: 'egg-mass-and-data-gaps',
        label: '繁殖与未知',
        title: '雌体抱住卵团',
        body: '雌体可在口部前方用附肢携带并照料卵团；幼体离开后进入浮游生活阶段。现有可靠资料尚不足以给本种统一的成熟年龄、寿命或固定繁殖次数。抱卵和浮游幼体记录需要区分种群、发育阶段与观察条件。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '从 Cancer scyllarus 到现用学名',
        body: '林奈在 1758 年以 Cancer scyllarus 正式描述这一动物，后来分类研究将其归入 Odontodactylus 属，现用学名为 Odontodactylus scyllarus。学名保留了早期命名的种名，分类位置则随对口足目结构的认识而调整。锤状捕捉足和复杂复眼后来成为生物力学与视觉研究的重要对象。',
      },
    ],
    keyFacts: [
      '当前接受名是 Odontodactylus scyllarus (Linnaeus, 1758)，原始组合是 Cancer scyllarus Linnaeus, 1758。',
      '雀尾螳螂虾是软甲纲口足目动物，不是真正的十足目虾；台湾官方资料使用“蝉型”或“蝉形齿指虾蛄”。',
      '可靠分布横跨印度、西太平洋，2025 年分类处理确认了南非东岸的科学记录。',
      '多份资料聚焦约 30 米以浅的珊瑚、岩礁和岩砾生境；0 至 100 米只表示记录包络。',
      '已发表最大总长为 171 毫米，不是典型成体、平均值、甲长或可靠成体范围。',
      '它用棒状掠肢反复击打腹足类等硬壳猎物，并可将螺壳抵在坚硬表面上。',
      '掠肢撞击端实验速度为 14 至 23 米/秒；这个数字不能写成整只动物的游速。',
      '外骨骼弹簧、闩锁、杠杆和四杆联动共同放大输出，肌肉不在击打瞬间独自提供全部功率。',
      '一次击打可先后产生掠肢冲击峰和空化泡塌陷峰，两个峰不是两只掠肢同时命中。',
      '1,501 牛是平面钢传感器上的最高实验冲击峰，不是每拳固定输出或自然猎物值。',
      '指节棒的多相矿物与螺旋几丁质结构延缓破坏，但指节棒并非永不磨损，蜕皮后还要重新矿化。',
      '每只复眼包含背、腹半球和六行中带；三个暗点是假瞳孔，不是三个真实瞳孔。',
      '最多 12 个颜色视觉通道不等于十二倍人类色彩或更精细的色差判断。',
      '本种能处理线性偏振、圆偏振和紫外信息，圆偏振在自然环境中的主要用途尚未证实。',
      '眼内滤光结构与部分体表附肢在外源激发下会发荧光，不是生物发光，体表荧光功能未知。',
      '雌体以前部附肢持抱黏合卵团，本种后期幼体有浮游采样记录。',
      '固定卵数、孵育时长、成熟年龄和 4 至 6 年寿命都缺可靠物种级依据。',
      'IUCN 尚无全球评估；NE 和 CITES 名录缺席不能解释成 LC、种群稳定或贸易安全。',
    ],
    threats: [
      '珊瑚礁、岩礁和碎石硬底受损可能减少可用洞穴与硬壳猎物，物种级影响尚未量化',
      '水族展示贸易已经确认存在，但缺少采集量、来源、死亡率和种群效应资料',
      '破坏性翻底、采挖和底质扰动可能移除洞穴结构，影响程度仍缺重复调查',
      '分布广而调查不均，误鉴、无凭证记录和缺少固定方法长期监测妨碍趋势判断',
      'IUCN 尚未评估，全球种群量、趋势、占域变化和威胁排序均未知',
    ],
    conservationActions: [
      '在分布区按水深、底质和固定搜索时长重复调查洞穴与个体，并记录未检出',
      '为范围边缘、贸易批次和新记录保留凭证标本、诊断照片、采集深度与坐标',
      '量化水族贸易的物种鉴定、来源地、数量、死亡率和野生采集比例',
      '保护珊瑚礁、岩礁及碎珊瑚、贝壳混合底，避免破坏性翻底和采集',
      '补足野外食谱、昼夜活动、繁殖、寿命、幼体扩散和种群趋势研究',
      '推动 IUCN 全球评估，并定期复核 CITES 与国家名录',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'published-maximum-total-length',
        label: '已发表最大总长',
        value: '171',
        unit: '毫米',
        note: 'Manning 1967 的总长上限，经分类修订引用；不是典型成体、平均值或甲长。',
      },
      {
        key: 'raptorial-strike-speed',
        label: '掠肢峰值速度',
        value: '14–23',
        unit: '米/秒',
        note: '高速摄影实验中的棒状指节撞击端速度，不是整只动物游速。',
      },
      {
        key: 'peak-impact-force',
        label: '实验冲击峰值',
        value: '最高 1,501',
        unit: '牛',
        note: '平面三轴钢传感器最终纳入 10 只个体；这是其中最高记录，不代表每次自然击打。',
      },
      {
        key: 'colour-channels',
        label: '颜色视觉通道',
        value: '最多 12',
        unit: '通道',
        note: '描述感受器与滤光系统，不表示比人类多看十二倍颜色或拥有十二倍色觉精度。',
      },
    ],
    media: {
      image:
        './images/species/peacock-mantis-shrimp/01-reef-burrow-portrait.webp',
      alt: '浅海珊瑚碎石洞口旁，一只完整绿色雀尾螳螂虾位于画面右侧，柄眼、触角、折叠掠肢、分节腹部和蓝紫尾扇可见，左侧保留开放沙地与水体',
      focalPoint: { x: 0.67, y: 0.56 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/peacock-mantis-shrimp/02-external-morphology.webp',
          alt: '浅色珊瑚砂上，一只完整雀尾螳螂虾以背侧三分之四视角展示柄眼、触角鳞片、折叠掠肢、分节腹部、腹肢和尾扇',
          title: '口足目的外部身体结构',
          caption:
            'AI 生成形态重建；画面不能确认物种、性别、年龄或总长，也不能核验掠肢齿数、尾肢刺数和尾节纵脊。',
          focalPoint: { x: 0.52, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/peacock-mantis-shrimp/03-raptorial-club-strike.webp',
          alt: '珊瑚砂底上，一只完整雀尾螳螂虾伸出一枚关节状掠肢接触空螺壳，接触点旁有少量扬起的砂粒',
          title: '棒状掠肢接触硬壳',
          caption:
            'AI 生成击打机制重建；静帧不能测量速度、加速度、冲击力、空化力或两峰间隔，也不能证明螺壳强度、捕猎频率和成功。',
          focalPoint: { x: 0.54, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/peacock-mantis-shrimp/04-compound-eye-midband.webp',
          alt: '深色洞口前的雀尾螳螂虾头部微距，两只完整柄眼各有清楚的横向中带和细密复眼表面',
          title: '横过复眼的中带',
          caption:
            'AI 生成眼部结构重建；外观不能显示感受器数量、光谱通道、偏振敏感、神经编码、视野、色觉精度或动物所见颜色。',
          focalPoint: { x: 0.5, y: 0.44 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/peacock-mantis-shrimp/05-burrow-maintenance.webp',
          alt: '珊瑚碎石洞口内，一只雀尾螳螂虾探出前半身，前方放着一块扁平碎珊瑚，入口周围堆有贝壳和岩砾',
          title: '碎石洞口的维护情景',
          caption:
            'AI 生成洞穴维护重建；画面不能证明洞穴建造者、长度、形状、居住时间、搬运频率、领地归属或全种底质偏好。',
          focalPoint: { x: 0.58, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/peacock-mantis-shrimp/06-egg-mass-care.webp',
          alt: '岩砾洞穴内，一只雀尾螳螂虾以前部附肢在头胸部下方持抱一团完整橙褐色细粒卵团',
          title: '头胸部下方的一团卵',
          caption:
            'AI 生成持卵重建；画面不能确定卵数、胚胎阶段、孵育时长、进食状态、亲本关系、配偶制度、孵化率或固定行为日程。',
          focalPoint: { x: 0.56, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...PEACOCK_MANTIS_SHRIMP_SOURCES,
      {
        title: 'GBIF: Odontodactylus scyllarus (Linnaeus, 1758) nomenclatural record',
        url: 'https://www.gbif.org/species/4316608',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: PEACOCK_MANTIS_SHRIMP_CONTENT_DATE,
    updatedAt: PEACOCK_MANTIS_SHRIMP_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
