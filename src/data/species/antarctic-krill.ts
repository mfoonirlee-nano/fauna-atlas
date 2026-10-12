import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const ANTARCTIC_KRILL_SOURCE_DATE = '2026-08-28' as const;

const ANTARCTIC_KRILL_CONTENT_DATE = '2026-08-28' as const;

const ANTARCTIC_KRILL_SOURCES = [
  {
    title: 'WoRMS: Euphausia superba Dana, 1850, AphiaID 236217',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=236217',
    kind: 'taxonomy',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'WoRMS taxon list: Euphausia accepted names and synonyms',
    url: 'https://www.marinespecies.org/aphia.php?p=taxlist&tName=Euphausia',
    kind: 'taxonomy',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Naturalis Euphausiids of the World Ocean: Euphausia superba',
    url: 'https://euphausiids.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?epi=3&id=176913',
    kind: 'taxonomy',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'China NHC: Krill oil sourced from Euphausia superba',
    url: 'https://www.nhc.gov.cn/sps/c100088/201401/e45a8b098f78442881322a787d2e82b7.shtml',
    kind: 'taxonomy',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Naturalis Euphausiids of the World Ocean: What is a Euphausiid?',
    url: 'https://euphausiids.linnaeus.naturalis.nl/linnaeus_ng/app/views/introduction/topic.php?epi=3&id=1',
    kind: 'general',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Australian Antarctic Program: Antarctic krill',
    url: 'https://www.antarctica.gov.au/about-antarctica/animals/krill/',
    kind: 'general',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'FAO: Biological information on commercially harvested krill',
    url: 'https://www.fao.org/4/w5911e/w5911e0c.htm',
    kind: 'general',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Atkinson et al. 2008: Oceanic circumpolar habitats of Antarctic krill',
    url: 'https://www.bas.ac.uk/data/our-data/publication/oceanic-circumpolar-habitats-of-antarctic-krill/',
    kind: 'distribution',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Atkinson et al. 2017: KRILLBASE circumpolar density database, 1926–2016',
    url: 'https://doi.org/10.5194/essd-9-193-2017',
    kind: 'distribution',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Perry et al. 2019: Habitat partitioning, spawning hotspots and nursery areas',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6655634/',
    kind: 'distribution',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Reiss et al. 2022: Summer and winter distribution at the northern Antarctic Peninsula',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9165435/',
    kind: 'distribution',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Schmidt et al. 2011: Seabed foraging and bentho-pelagic coupling',
    url: 'https://doi.org/10.4319/lo.2011.56.4.1411',
    kind: 'distribution',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Price et al. 1988: Omnivorous feeding behavior of Antarctic krill',
    url: 'https://doi.org/10.1007/BF00391246',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Hamner et al. 1983: Chemoreception, feeding, schooling and molting',
    url: 'https://doi.org/10.1126/science.220.4595.433',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Meyer 2012: Overwintering of Antarctic krill from an ecophysiological perspective',
    url: 'https://doi.org/10.1007/s00300-011-1120-0',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Daly 1990: Overwintering development, growth and feeding under sea ice',
    url: 'https://doi.org/10.4319/lo.1990.35.7.1564',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Meyer et al. 2017: Winter pack-ice habitat of larval Antarctic krill',
    url: 'https://doi.org/10.1038/s41559-017-0368-3',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Walsh et al. 2020: Flexible winter diet and recruitment under varying sea ice',
    url: 'https://doi.org/10.3354/meps13325',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Hofmann et al. 1992: Modelled embryonic descent and larval ascent',
    url: 'https://doi.org/10.1016/0198-0149(92)90063-Y',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Kawaguchi 2016: Reproduction and larval development in Antarctic krill',
    url: 'https://doi.org/10.1007/978-3-319-29279-3_6',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Tarling et al. 2018: Diel variability in open-ocean krill swarms',
    url: 'https://doi.org/10.1093/jcbiol/ruy040',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Marschoff et al. 1998: Diel larval catches, migration or net avoidance?',
    url: 'https://doi.org/10.1016/S0022-0981(98)00012-4',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Bahlburg et al. 2023: Plasticity and seasonality of vertical migration',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10523065/',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Grinnell et al. 1988: Eye and photophore coordination in Antarctic krill',
    url: 'https://doi.org/10.1242/jeb.134.1.61',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Auerswald et al. 2008: Physiological and morphological colour change',
    url: 'https://doi.org/10.1242/jeb.024232',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Barnes et al. 2026: Provisional invalidation of eyestalk-band ageing',
    url: 'https://doi.org/10.1093/jcbiol/ruag012',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Atkinson et al. 2009: Re-appraisal of total biomass and annual production',
    url: 'https://doi.org/10.1016/j.dsr.2008.12.007',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Cavan et al. 2019: Antarctic krill in biogeochemical cycles',
    url: 'https://doi.org/10.1038/s41467-019-12668-7',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Belcher et al. 2020: Continuous moulting drives carbon-export pulses',
    url: 'https://doi.org/10.1038/s41467-020-19956-7',
    kind: 'ecology',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Atkinson et al. 2019: Southwest Atlantic distribution contracts southward',
    url: 'https://doi.org/10.1038/s41558-018-0370-z',
    kind: 'distribution',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Cox et al. 2018: No detected density decline in the Southwest Atlantic, 1976–2016',
    url: 'https://doi.org/10.1093/jcbiol/ruy072',
    kind: 'distribution',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Skaret et al. 2023: South Orkney distribution and biomass, 2011–2020',
    url: 'https://doi.org/10.1093/icesjms/fsad076',
    kind: 'distribution',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search: Euphausia superba',
    url: 'https://www.iucnredlist.org/search?query=Euphausia%20superba&searchType=species',
    kind: 'conservation',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Kawaguchi et al. 2013: Acidification risk maps and egg hatching',
    url: 'https://doi.org/10.1038/nclimate1937',
    kind: 'conservation',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Ericson et al. 2018: Adult krill resilience under simulated high CO2',
    url: 'https://doi.org/10.1038/s42003-018-0195-3',
    kind: 'conservation',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Kawaguchi et al. 2024: Climate impacts on behavior and population dynamics',
    url: 'https://doi.org/10.1038/s43017-023-00504-y',
    kind: 'conservation',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'CCAMLR 2025 Fishery Report: Euphausia superba in Area 48',
    url: 'https://fishdocs.ccamlr.org/FishRep_48_KRI_2025.html',
    kind: 'conservation',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'CCAMLR Conservation Measure 51-01: Precautionary catch limitations on krill',
    url: 'https://cm.ccamlr.org/measure-51-01',
    kind: 'conservation',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'CCAMLR Conservation Measure 51-06: Scientific observation in krill fisheries',
    url: 'https://cm.ccamlr.org/measure-51-06',
    kind: 'conservation',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'CCAMLR Ecosystem Monitoring Program',
    url: 'https://www.ccamlr.org/en/science/ccamlr-ecosystem-monitoring-program-cemp',
    kind: 'conservation',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Constable et al. 2023: Dynamic ecosystem-risk framework for krill fisheries',
    url: 'https://doi.org/10.3389/fevo.2023.1043800',
    kind: 'conservation',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'Savoca et al. 2024: Whale recovery and overlap with the krill fishery',
    url: 'https://doi.org/10.1038/s41467-024-51954-x',
    kind: 'conservation',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries: Krill and oceanographic research in the Antarctic',
    url: 'https://www.fisheries.noaa.gov/international/science-data/krill-and-oceanographic-research-antarctic',
    kind: 'general',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
  {
    title: 'British Antarctic Survey: RMT8 net, trawl and sledge capability',
    url: 'https://www.bas.ac.uk/polar-operations/sites-and-facilities/facility/rrs-sir-david-attenborough/science-facilities/net-trawl-sledge-systems/',
    kind: 'general',
    accessedAt: ANTARCTIC_KRILL_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-euphausia-superba',
    slug: 'antarctic-krill',
    names: {
      zh: '南极磷虾',
      en: 'Antarctic Krill',
      aliases: [
        '南极大磷虾',
        'Euphausia antarctica G.O. Sars, 1883',
        'Euphausia australis Hodgson, 1902',
        'Euphausia glacialis Hodgson, 1902',
        'Euphausia murrayi G.O. Sars, 1883',
      ],
    },
    scientificName: 'Euphausia superba',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Malacostraca', '软甲纲'),
      taxon('Euphausiacea', '磷虾目'),
      taxon('Euphausiidae', '磷虾科'),
      taxon('Euphausia', '磷虾属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['南极洲'],
      regions: [
        '南大洋',
        '斯科舍海与南极半岛',
        '威德尔海',
        '东南极印度洋扇区',
        '罗斯海与太平洋扇区',
      ],
      countries: [],
      range:
        '环南极分布于南大洋，规则范围大体位于南极辐合带或南极锋以南，北界随经度和水团约在南纬 50° 至 60°。分布高度斑块化，南极半岛、斯科舍海和南乔治亚所在的西南大西洋扇区汇集了大量记录和估算存量；大陆架、陆坡、深远洋和季节性海冰区都可被利用，具体位置随生命阶段、季节、海流与食物变化。',
      center: { lat: -65, lng: -30 },
    },
    habitats: [
      {
        name: '季节性海冰区与冰下表面',
        realm: 'marine',
        description:
          '海冰下的纹理、孔隙和冰藻为晚期糠虾幼体及部分幼体提供食物与庇护；这种联系随季节、区域、海冰性质和发育阶段变化，各幼期与季节不能一概而论。',
      },
      {
        name: '大陆架、陆坡与海湾水域',
        realm: 'marine',
        description:
          '南极半岛、斯科舍海和其他陆架至陆坡区可形成高密度虾群，也是企鹅、海豹、鲸类与鱼类觅食和商业渔业容易发生空间重叠的海域。',
      },
      {
        name: '远洋表层至中层水柱',
        realm: 'marine',
        description:
          '开阔南大洋的上层水体是夏季摄食、聚群和大量调查记录的核心生境；冬季或特定群体可进入更深水层，位置受海流、锋面、食物、光照与捕食压力共同影响。',
        isPrimary: true,
      },
      {
        name: '深水及近底界面',
        realm: 'marine',
        description:
          '成体会在大陆架乃至远洋深水和海底附近取食碎屑与桡足类，连接底栖和浮游过程；它仍是以水柱为主的游泳动物，不能把近底记录写成固定深海生活层。',
      },
    ],
    measurements: {
      length: {
        min: 42,
        max: 65,
        unit: 'mm',
        note: 'Naturalis 给出的成体全长范围；年龄、海区、性别、季节和个体状态都会造成差异。',
      },
      weight: {
        max: 2,
        unit: 'g',
        note: 'FAO 历史综述给出的个体最大体重上限，不是平均、典型或固定成体体重。',
      },
    },
    diet: {
      types: ['filter-feeder', 'omnivore'],
      foods: [
        '浮游植物与硅藻',
        '海冰下表面的海冰藻',
        '原生动物、桡足类等浮游动物',
        '悬浮碎屑与有机颗粒',
      ],
      description:
        '南极磷虾用胸部摄食足形成的刚毛滤篮截取浮游植物和硅藻，也能摄食浮游动物与碎屑，属于机会性的杂食滤食者。春夏食物常来自水柱浮游植物；冬季和海冰期可利用冰藻、动物性食物与有机碎屑，食谱随季节、海区和食物条件变化。',
    },
    activity: [
      '形成从稀疏聚集到高密度的大型虾群，尺度、密度和持续时间变化很大',
      '用游泳足推进，并以尾扇快速后退逃避捕食者',
      '昼夜垂直迁移常见，但方向和幅度随海区、季节、海冰、发育阶段、光照和群体变化',
      '近表层释放的卵下沉，早期无摄食幼体孵化后完成发育上升',
      '终生持续蜕皮，食物匮乏时可缩短体长并消耗身体储备',
      '晚期幼体与海冰下表面及冰藻联系紧密，成体也会随条件利用冰下和开阔水域',
    ],
    tags: [
      '南大洋',
      '环南极',
      '季节性海冰',
      '群游',
      '杂食滤食',
      '发育上升',
      '终生蜕皮',
      '关键饵料',
      'CCAMLR 渔业',
      'IUCN 未评估',
    ],
    summary:
      '南极磷虾在环南极的南大洋成群生活，成体全长约 42 至 65 毫米。它吃浮游植物和海冰藻，也是鲸、企鹅、海豹等动物的食物；商业捕捞受 CCAMLR 管理。',
    description:
      '南极磷虾 Euphausia superba 是软甲纲磷虾目甲壳动物，不是鱼。它在南极锋以南呈环极分布，西南大西洋扇区的记录和虾群最集中。雌体在近表层释放卵，卵下沉后孵出不摄食的无节幼体；幼体向上完成发育上升，较晚的糠虾期幼体可利用冰下微生境和海冰藻。成体以浮游植物为主，也摄食浮游动物和碎屑；虾群又成为须鲸、海豹、企鹅、海鸟、鱼和鱿鱼的关键饵料。一个基于 1926 至 2004 年网采资料的历史模型把环极夏季后幼体生物量估计为 3.79 亿吨，这不是同步全球普查或固定现存量，年代跨度、斑块化和采样方法也带来巨大不确定性。IUCN 当前尚未评估本种，NE 不代表安全或无风险；海冰和海洋变暖带来的生态变化，加上捕捞与捕食者需求在局地发生空间重叠，都需要持续监测。',
    storySections: [
      {
        key: 'krill-not-fish',
        label: '分类与形态',
        title: '半透明身体与远洋甲壳动物身份',
        body: '南极磷虾属于软甲纲磷虾目。成体半透明，带自然红色色素点，有黑色复眼、外露羽状鳃、五对腹部游泳足和尾扇。摄食足没有大螯。磷虾目成员具有发光器，具体功能仍有多种假说。',
      },
      {
        key: 'patchy-circumpolar-biomass',
        label: '环极虾群',
        title: '环极分布，虾群高度斑块化',
        body: '历史网采资料与模型支持本种环极分布，但群集高度斑块化，西南大西洋扇区贡献了很大一部分记录。2009 年研究给出的 3.79 亿吨，是针对环极夏季后幼体的模型生物量估计，输入资料、可采水层和统计方法都带来不确定性；它不是某一天完成的全球个体清点，也不能替代分区声学调查。',
      },
      {
        key: 'seasonal-omnivore',
        label: '食物与海冰',
        title: '滤食浮游植物，也会随季节换菜单',
        body: '胸部摄食足的刚毛组成滤篮，能截取水柱中的硅藻等浮游植物。南极磷虾也吃原生动物、桡足类等浮游动物和有机碎屑；晚期糠虾幼体在海冰下表面取食冰藻。冰下联系对越冬幼体很重要，但不同阶段、海区和年份各有条件，各阶段并非全年都在海冰下生活。',
      },
      {
        key: 'developmental-ascent-and-age',
        label: '生活史',
        title: '卵向下沉，幼体向上游；年龄仍难精确读取',
        body: '雌体在近表层释放成批卵，卵可下沉到约 1,000 米并在深水孵化。依靠卵黄的无节幼体不摄食，却必须向上游回有光和食物的水层，随后经过后无节、原蚤和糠虾等多个幼体阶段。南极磷虾终生蜕皮，食物不足时还能缩短体长，这使体长难以直接换算年龄。常用寿命估计为 5 至 7 年；2026 年方法复核认为现有眼柄生长带定龄准确度不足，因此这个范围是历史综合口径，不是经眼带验证的硬上限。',
      },
      {
        key: 'migration-and-food-web',
        label: '移动与食物网',
        title: '把微藻生产传给大型捕食者',
        body: '虾群把浮游植物与冰藻生产转给须鲸、食蟹海豹、企鹅、海鸟、鱼和鱿鱼，是南大洋食物网的关键种与关键饵料。许多观测记录到昼夜垂直迁移，但有的群体夜间上浮，有的保持深度或出现反向移动；海区、季节、海冰、发育阶段、光照与捕食压力都会改变模式。',
      },
      {
        key: 'fishery-and-management',
        label: '渔业与管理',
        title: '捕捞总量与局地空间重叠分别管理',
        body: 'CCAMLR 为 Area 48 设定的模型预防性总量上限为 5.61 百万吨；在更细空间分配达成前，实际 trigger 维持 620,000 t。用于把触发水平分到四个子区的 CM 51-07 在 2024 渔季结束后到期，自 2025 年起这 62 万吨没有进一步法定空间分配。渔业可集中在南极半岛和斯科舍海的捕食者觅食热点，因此管理不能只看全区总量，还要结合分区声学调查、渔获报告、观察员资料和捕食者监测。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1850 年的南极磷虾命名记录',
        body: 'Dana 于 1850 年命名南极磷虾，现用学名为 Euphausia superba。历史文献中的 E. antarctica、E. australis、E. glacialis 与 E. murrayi 等名称，如今列为它的同物异名。它在食物不足时能缩短体长，加上终生蜕皮，研究者很难仅凭尺寸准确读取年龄。',
      },
    ],
    keyFacts: [
      '当前接受学名是 Euphausia superba Dana, 1850；历史同物异名包括 Euphausia antarctica G.O. Sars, 1883、E. australis Hodgson, 1902、E. glacialis Hodgson, 1902 和 E. murrayi G.O. Sars, 1883。',
      '南极磷虾是软甲纲磷虾目甲壳动物，不属于鱼类，也没有龙虾式大螯。',
      '成体全长常见综合范围为 42 至 65 毫米；不同海区、季节、年龄和个体状态会改变尺寸。',
      '近表层释放的卵会下沉，早期无摄食幼体孵化后向上完成发育上升。',
      '较晚的糠虾期幼体常利用海冰下表面和冰藻；这种联系不能外推至全年或全部幼期。',
      '南极磷虾终生蜕皮，并能在食物匮乏期缩短体长，所以体长不是可靠年龄尺。',
      '5 至 7 年是历史综合形成的常用寿命估计，不是经眼柄生长带验证的硬上限。',
      '它用胸部刚毛滤篮摄食浮游植物，也摄食浮游动物和有机碎屑。',
      '昼夜垂直迁移常见但不固定，会随海区、季节、海冰、阶段、光照和群体变化。',
      '须鲸、海豹、企鹅、海鸟、鱼和鱿鱼都直接或间接依赖南极磷虾。',
      '3.79 亿吨是历史环极夏季后幼体模型估值，不是同步全球普查或固定现存量。',
      'CCAMLR 的 Area 48 总量上限 5.61 百万吨与实际 620,000 t trigger 不是同一个管理数字。',
      'CM 51-07 到期后，自 2025 年起 Area 48 的 62 万吨触发水平没有进一步法定空间分配。',
      'IUCN 当前没有本种评估；未评估不能解读为安全、无危或种群稳定。',
      '商业拖网样本、科研网采和声学调查各有选择性，任何一种方法都不能单独代表全部虾群。',
    ],
    threats: [
      '海冰范围、季节和结构变化会改变晚期幼体的冰藻食物与冰下庇护条件',
      '海洋变暖和水团变化会移动适宜栖息地、生产力热点与虾群输送路径',
      '深层海洋酸化可能降低下沉卵的孵化成功，成体对单一高二氧化碳压力的耐受不能代表整个生命周期',
      '渔业在时间和空间上集中，会与企鹅、海豹和鲸类的局地捕食者需求重叠',
      '兼捕、网具作业和船舶活动会给非目标海鸟、海豹及局地生态系统增加压力',
      '稀疏而不均匀的调查覆盖会把真实变化与采样位置、网具和声学方法差异混在一起',
    ],
    conservationActions: [
      '由 CCAMLR 按生态系统和预防性原则设定限额，并把全区上限落实为可执行的细尺度时空管理',
      '在渔业热点周围提高近实时渔获报告、观察员覆盖和捕食者觅食监测能力',
      '用标准化声学调查、分层网采和环境 DNA 互相校验虾群密度、年龄结构与空间变化',
      '保护对晚期幼体重要的季节性海冰及冰下微生境，并把海冰异常纳入年度风险评估',
      '评估海洋变暖、酸化和捕捞的累积效应，不用单年全区总量掩盖局地短缺',
      '更新寿命、补充量和生物量模型，停止把未经验证的眼柄生长带当作绝对年龄标尺',
      '公开分区渔获、声学调查和生态系统监测资料，使限额调整可以复核',
    ],
    metrics: {
      adultLengthCm: [4.2, 6.5],
      lifespanYears: [5, 7],
    },
    featuredStats: [
      {
        key: 'adult-length',
        label: '成体全长',
        value: '42–65',
        unit: 'mm',
        note: 'Naturalis 成体范围；年龄、海区、性别、季节和缺食缩短都会造成差异。',
      },
      {
        key: 'maximum-mass',
        label: '最大体重',
        value: '约 2',
        unit: 'g',
        note: 'FAO 历史物种表上限，不是平均或典型成体质量。',
      },
      {
        key: 'estimated-lifespan',
        label: '常用寿命估计',
        value: '5–7',
        unit: '年',
        note: '历史综合口径；2026 年方法复核不支持用现有眼柄生长带读取绝对年龄，不是硬上限。',
      },
      {
        key: 'egg-descent',
        label: '卵常见孵化深度',
        value: '约 700–1,000',
        unit: 'm',
        note: '下沉胚胎的代表范围；受产卵深度、温度、水团和海底地形影响，不是成体固定潜深。',
      },
    ],
    media: {
      image:
        './images/species/antarctic-krill/01-adult-krill-under-sea-ice.webp',
      alt: '海冰下方冷蓝海水中一只半透明南极磷虾成体位于画面右侧，红色色素点、黑色复眼、外露羽状鳃、五对腹部游泳足和尾扇可见',
      focalPoint: { x: 0.72, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/antarctic-krill/02-filter-feeding-phytoplankton.webp',
          alt: '一只半透明南极磷虾在冷蓝海水中展开无大螯的刚毛胸足滤取散布的微型硅藻，绿色内容只位于可见消化道内',
          title: '胸足展开一张微型滤网',
          caption:
            '刚毛滤篮截取微藻，也能处理动物性食物和碎屑；绿色来自摄入内容，不是固定体色。',
          focalPoint: { x: 0.52, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/antarctic-krill/03-larval-development-under-sea-ice.webp',
          alt: '一只具大眼和细长附肢的晚期糠虾幼体贴近海冰下表面的褐绿色冰藻斑块，画面没有成体虾群或卵',
          title: '晚期幼体借海冰过冬',
          caption:
            'furcilia 等晚期幼体会利用冰下微生境与冰藻；画面只表现一个阶段，不能外推至全年或全部幼期。',
          focalPoint: { x: 0.55, y: 0.43 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/antarctic-krill/04-diel-vertical-migration.webp',
          alt: '黎明冷蓝水柱中，一群南极磷虾从近表层向下方较暗水层移动，以深浅分层重建一种昼夜垂直迁移情景',
          title: '同一水柱，不同时间的深度选择',
          caption:
            '昼夜垂直迁移模式随海区、季节、海冰、发育阶段和群体变化，并非每天固定为昼深夜浅。',
          focalPoint: { x: 0.54, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/antarctic-krill/05-predator-prey-swarm.webp',
          alt: '一只帽带企鹅在南极半岛近岸冷蓝海水中接近一群半透明南极磷虾，企鹅喙与最近磷虾之间保留清楚水隙',
          title: '虾群把微藻能量送向捕食者',
          caption:
            '企鹅只是众多消费者之一；鲸、海豹、海鸟、鱼和鱿鱼也依赖这条能量通道，图中不宣称捕获结果。',
          focalPoint: { x: 0.54, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/antarctic-krill/06-scientific-net-sampling.webp',
          alt: '南大洋科研船在灰蓝海面部署一具矩形中层拖网，后甲板研究人员与绞车保持安全距离，画面没有商业连续泵吸系统',
          title: '一网样本，只覆盖一段水柱',
          caption:
            'RMT8 式科研网采能验证种类、尺寸和阶段；声学调查补充大尺度密度信息，两者都受采样位置与方法影响。',
          focalPoint: { x: 0.57, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...ANTARCTIC_KRILL_SOURCES,
      {
        title: 'GBIF: Euphausia superba Dana, 1850 nomenclatural record',
        url: 'https://www.gbif.org/species/2228010',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: ANTARCTIC_KRILL_CONTENT_DATE,
    updatedAt: ANTARCTIC_KRILL_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
