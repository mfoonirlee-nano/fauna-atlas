import type { SpeciesSource, Species } from '../../types/species.ts';

import { CONTENT_DATE, animalTaxonomy, conservation, taxon } from './shared.js';

const BLUE_WHALE_SOURCE_DATE = '2026-08-18' as const;

const BLUE_WHALE_CONTENT_DATE = '2026-08-18' as const;

const BLUE_WHALE_SOURCES = [
  {
    title: 'Society for Marine Mammalogy — List of Marine Mammal Species and Subspecies (April 2026)',
    url: 'https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/',
    kind: 'taxonomy',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Balaenoptera musculus (2018 assessment, 2019 errata)',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T2477A156923585.en',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Recovery Plan for the Blue Whale (2020)',
    url: 'https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Blue Whale',
    url: 'https://www.fisheries.noaa.gov/species/blue-whale?page=1',
    kind: 'general',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Attard et al. 2024 — Global genomic population structure of blue whales',
    url: 'https://doi.org/10.1111/acv.12935',
    kind: 'taxonomy',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Branch et al. 2007 — Intraspecific structure and body length of blue whales',
    url: 'https://doi.org/10.1111/j.1748-7692.2007.00137.x',
    kind: 'taxonomy',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Branch et al. 2007 — Past and present distribution, densities and movements of blue whales',
    url: 'https://doi.org/10.1111/j.1365-2907.2007.00106.x',
    kind: 'distribution',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Abrahms et al. 2019 — Memory and resource tracking drive blue whale migrations',
    url: 'https://doi.org/10.1073/pnas.1819031116',
    kind: 'distribution',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Savoca et al. 2021 — Baleen whale prey consumption',
    url: 'https://doi.org/10.1038/s41586-021-03991-5',
    kind: 'ecology',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Goldbogen et al. 2011 — Mechanics and energetics of blue whale lunge feeding',
    url: 'https://doi.org/10.1242/jeb.048157',
    kind: 'ecology',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Owen et al. 2016 — Dive and movement behaviour of an Indian Ocean pygmy blue whale',
    url: 'https://doi.org/10.1186/s40317-016-0109-4',
    kind: 'ecology',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'McDonald et al. 2006 — Biogeographic characterisation of blue whale song worldwide',
    url: 'https://escholarship.org/uc/item/5r16c2mz',
    kind: 'distribution',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Oleson et al. 2007 — Behavioural context of call production by eastern North Pacific blue whales',
    url: 'https://doi.org/10.3354/meps330269',
    kind: 'ecology',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Stafford et al. 1998 — Blue whale calls recorded on a regional hydrophone array',
    url: 'https://doi.org/10.1121/1.423944',
    kind: 'ecology',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Sears et al. 2013 — Photographic identification reveals blue whale life-history data',
    url: 'https://doi.org/10.3354/esr00532',
    kind: 'ecology',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Rockwood et al. 2017 — High mortality of blue whales from ship strikes off the U.S. West Coast',
    url: 'https://doi.org/10.1371/journal.pone.0183052',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Goldbogen et al. 2013 — Blue whale behavioural response to simulated sonar',
    url: 'https://doi.org/10.1098/rspb.2013.0657',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Rocha et al. 2014 — Summary of industrial whaling catches in the 20th century',
    url: 'https://doi.org/10.7755/MFR.76.4.3',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Olson et al. 2025 — Antarctic blue whale abundance from photo identification',
    url: 'https://doi.org/10.1111/mms.13215',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III',
    url: 'https://cites.org/sites/default/files/esp/app/2025/S-Appendices-2025-02-07.pdf',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Convention on Migratory Species — Appendices I and II (effective June 2026)',
    url: 'https://www.cms.int/species/appendix-i-ii-cms',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'International Whaling Commission — Commercial whaling',
    url: 'https://iwc.int/management-and-conservation/whaling/commercial',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-balaenoptera-musculus',
    slug: 'blue-whale',
    names: { zh: '蓝鲸', en: 'Blue Whale', aliases: [] },
    scientificName: 'Balaenoptera musculus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Cetacea', '鲸目'),
      taxon('Balaenopteridae', '须鲸科'),
      taxon('Balaenoptera', '须鲸属'),
    ),
    conservation: conservation('EN', 'increasing', 2018, 'A1abd'),
    distribution: {
      realms: ['marine'],
      continents: ['亚洲', '非洲', '欧洲', '北美洲', '南美洲', '大洋洲', '南极洲'],
      regions: [
        '南极洲周边与南大洋',
        '东南太平洋与智利海域',
        '北太平洋',
        '北大西洋',
        '北印度洋',
        '南印度洋与澳大利亚周边',
      ],
      countries: [],
      range:
        '广布除北冰洋主体之外的世界各大洋，并分成多个具有不同歌型、移动方式和恢复进程的种群。多数种群进行季节移动，但路线和时序因种群与个体而异；北印度洋还存在不遵循典型高纬、低纬往返的驻留型。',
      center: { lat: -35, lng: -120 },
    },
    habitats: [
      {
        name: '高生产力摄食海域',
        realm: 'marine',
        description: '在涌升流、海洋锋、大陆架边缘和极地水域寻找高密度磷虾斑块；这些热点会随季节和海况移动。',
        isPrimary: true,
      },
      {
        name: '开阔大洋与移动通道',
        realm: 'marine',
        description: '跨越远洋盆地连接不同季节生境；部分个体会迁徙，另一些可能全年留在同一大区。',
      },
      {
        name: '温暖水域的繁殖与育幼区',
        realm: 'marine',
        description: '多个种群会在较暖水域产仔和哺乳，但许多具体繁殖海域仍未被清楚划定。',
      },
    ],
    measurements: {},
    diet: {
      types: ['filter-feeder'],
      foods: ['磷虾（主要猎物）', '桡足类等小型甲壳动物（少数地区或记录）'],
      description:
        '蓝鲸先加速冲进稠密猎物斑块，张口让喉腹褶扩张并吞入大量海水，再闭口用鲸须排水、留下微小甲壳动物；收益取决于猎物密度，而不是持续张口巡游。',
    },
    activity: [
      '单独活动或在食物热点松散聚集',
      '冲刺式吞噬滤食',
      '随猎物深度调整昼夜潜水',
      '种群与个体依赖的季节移动',
      '发出低频叫声与区域性歌型',
      '母鲸与幼鲸短期同行',
    ],
    tags: ['全球海洋', 'IUCN 濒危', 'CITES 附录 I', 'CMS 附录 I', '现生最大动物', '冲刺滤食', '低频歌声'],
    summary: '蓝鲸是现生体型最大的动物，会冲向密集的磷虾群并张口吞入。研究者通过不同海域的歌声类型和远距离录音，了解分散的种群。',
    description:
      '蓝鲸的不同海区种群有各自的歌型、移动节律和恢复情况，现行分类承认北方、南极、侏儒与北印度洋四个亚种。工业捕鲸曾使全球数量大幅减少。IUCN 记录总体趋势上升，但估计成熟个体仍只有约 5,000 至 15,000 只。船撞、渔具缠绕，以及需要继续研究的噪声和气候压力，会给各海区种群带来不同程度的风险。',
    storySections: [
      {
        key: 'ocean-giant',
        label: '形态与体型',
        title: '不同种群的体型',
        body: '蓝鲸有宽扁的 U 形吻部、一对呼吸孔、细长胸鳍和位置靠后的微小背鳍。超过 30 米的巨鲸只占极少数，成熟雌性的平均体长从侏儒蓝鲸的约 21.0 米，到南极蓝鲸的约 25.4 至 26.6 米不等。现行分类把鲸类放在偶蹄目之内，Cetacea 表示其中的鲸类支系。',
      },
      {
        key: 'lunge-feeding',
        label: '冲刺滤食',
        title: '先吞下一片海水，再把磷虾留下',
        body: '每次冲刺张口都会使身体减速，蓝鲸因此需要寻找足够密集的磷虾群。喉腹褶扩张，容纳猎物和海水，闭口后用鲸须排水并留下磷虾。对一头 22.4 米东部北太平洋成体的模型估计表明，它在觅食日约摄入 16 吨磷虾，估计区间为 10 至 22 吨，其他个体和海区的摄食量会有差别。',
      },
      {
        key: 'many-migrations',
        label: '移动策略',
        title: '洄游路线因种群而异',
        body: '东部北太平洋 60 只标记蓝鲸的移动，更贴近多年平均叶绿素季节峰值，对当年即时峰值的跟随较弱。这提示经验与记忆可能帮助它们寻找季节性资源。不同种群的时序和路线有差异，北印度洋还有全年驻留的类型，只有部分种群往返极地与热带。',
      },
      {
        key: 'songs-and-calls',
        label: '声学',
        title: '歌声里的方言',
        body: '不同海区的蓝鲸发出不同的重复歌型，研究者据此提出种群边界的假说，划分亚种还需结合形态与遗传证据。东部北太平洋研究样本中的 AB 歌只由雄性发出，D 型叫声则在雌雄觅食时都有记录。水听器能从数百千米外录到声音，这个接收距离不能直接当作鲸之间的交流距离。',
      },
      {
        key: 'calf-cycle',
        label: '繁殖与成长',
        title: '幼鲸随母生活数月',
        body: '蓝鲸通常每胎产一仔，妊娠约 10 至 12 个月，幼鲸约 6 至 7 个月断奶。美国西岸与加利福尼亚湾的长期照片识别研究得到平均产仔间隔约 2.57 年，漏记产仔可能影响估计。母子随后分开，蓝鲸通常不组成长期家庭群。',
      },
      {
        key: 'uneven-recovery',
        label: '历史与保护',
        title: '停止捕杀之后，恢复仍以海区为单位发生',
        body: '研究汇总的 1900 至 1999 年有记录与重建工业捕鲸量达到 379,185 只蓝鲸。IUCN 2018 年估计全球仍只有 5,000 至 15,000 只成熟个体，约为 1926 年的 3%、11%。总趋势上升掩盖了种群间差异；今天的直接风险更多来自船撞和缠网，噪声与猎物变化则需要持续监测。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '林奈笔下的 Balaena musculus',
        body: '林奈在 1758 年《自然系统》中使用 Balaena musculus 描述蓝鲸，原始文献把产地写为苏格兰海域。后来研究者将它归入须鲸属，学名成为 Balaenoptera musculus。描述所依据的模式材料如今已无法找到，早期文字仍是追溯这个名字的重要记录。',
      },
    ],
    keyFacts: [
      'IUCN 2018 年估计全球约有 5,000 至 15,000 只成熟个体、10,000 至 25,000 只总个体，趋势上升但仍列为濒危。',
      '现行海洋哺乳动物分类承认北方、南极、侏儒和北印度洋四个蓝鲸亚种；智利群常作为独特种群讨论，第五个亚种尚未正式确立。',
      '成熟雌性平均体长随亚种和种群而变：侏儒蓝鲸约 21.0 米、智利群约 23.5 米、南极蓝鲸约 25.4 至 26.6 米。',
      '觅食日约 16 吨磷虾，是对一头 22.4 米东部北太平洋成体的模型估计；换一头鲸、换一片海，数字都会不同。',
      '506 米的最深下潜记录，来自一头西澳侏儒蓝鲸的 7.6 天标签数据；这个单次记录不能代表蓝鲸通常的潜水深度。',
      '区域歌型是识别种群的线索；要确定亚种身份和它们彼此的通话距离，还需要更多证据。',
      '多数种群季节移动，但路线与时序不统一，部分个体并非每年迁徙，北印度洋还存在驻留型。',
      '现行科学分类把鲸类置于偶蹄目之内，Cetacea 是其中的鲸类支系。',
    ],
    threats: [
      '繁忙航道和高船速造成致死性船舶碰撞',
      '固定或漂流渔具导致缠绕、受伤和溺亡',
      '航运、工业活动与声呐等人为噪声可能改变行为和声学环境，种群尺度效应仍待量化',
      '气候变化可能通过海温、海冰、上升流与磷虾分布改变觅食机会',
      '污染与船只干扰等累积压力的种群尺度效应仍待量化',
    ],
    conservationActions: [
      '维持国际商业捕鲸禁令并监测任何直接捕杀',
      '在高风险海域调整航线、实施动态或季节限速并改进船撞报告',
      '改良渔具、减少高风险绳索并建立大型鲸缠网响应能力',
      '结合照片识别、遗传、卫星标签和被动声学开展分种群长期监测',
      '评估并降低关键海域的累积噪声，避免把单次声学记录直接换算成数量',
      '把磷虾渔业与气候变化纳入摄食热点和跨境保护规划',
    ],
    metrics: {
      estimatedMatureIndividuals: [5000, 15000],
    },
    featuredStats: [
      {
        key: 'mature-individuals',
        label: 'IUCN 成熟个体估计',
        value: '5,000—15,000',
        unit: '只',
        note: '2018 评估；总个体估计约 10,000 至 25,000 只',
      },
      {
        key: 'historical-level',
        label: '相对 1926 年成熟数量',
        value: '约 3—11',
        unit: '%',
        note: 'IUCN 全球估计；各海区的恢复进度相差很远',
      },
      {
        key: 'female-mean-length',
        label: '成熟雌性平均体长',
        value: '21.0—26.6',
        unit: '米',
        note: '跨亚种种群的平均值区间；最大的个体可以远超此数',
      },
      {
        key: 'industrial-catch',
        label: '20 世纪工业捕鲸汇总',
        value: '379,185',
        unit: '只',
        note: '1900 至 1999 年有记录与重建的捕获量',
      },
    ],
    media: {
      image: './images/species/blue-whale/01-open-ocean-portrait.webp',
      alt: '清澈冷蓝色外海的海面下，一头蓝鲸从画面右侧向左平稳游过，宽扁头部、斑驳蓝灰色全身和靠后的微小背鳍完整可见',
      focalPoint: { x: 0.68, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/blue-whale/02-krill-lunge-feeding.webp',
          alt: '冷水层的稠密磷虾斑块中，一头蓝鲸侧向张开巨口冲刺摄食，深色鲸须、扩张的喉腹褶和完整身体清楚可见',
          title: '先吞海水，再留下磷虾',
          caption:
            '冲刺张口让喉腹褶完全撑开，连海水带磷虾一起吞入，再经鲸须把水排出。一头东部北太平洋成体在觅食日可摄入约 16 吨磷虾。',
          focalPoint: { x: 0.48, y: 0.54 },
        },
        {
          image: './images/species/blue-whale/03-productive-ocean-front.webp',
          alt: '高处俯瞰深蓝与青绿色水团缓慢交汇的开阔海面，一头完整蓝鲸在广阔海洋锋附近显得很小',
          title: '沿着高生产力水域移动',
          caption:
            '海洋锋和涌升流聚起猎物，也随季节和海况漂移；蓝鲸跟着食物走，路线因种群和个体而异。',
          focalPoint: { x: 0.62, y: 0.56 },
        },
        {
          image: './images/species/blue-whale/04-tall-surface-blow.webp',
          alt: '灰蓝色外海上，一头蓝鲸的宽阔头部和长背刚露出水面，一对呼吸孔上方升起高而近乎垂直的白色雾柱',
          title: '雾柱来自一次呼气',
          caption: '蓝鲸从一对呼吸孔快速呼气，在海面竖起高而较直的白色雾柱。',
          focalPoint: { x: 0.58, y: 0.46 },
        },
        {
          image: './images/species/blue-whale/05-mother-calf-travel.webp',
          alt: '温暖外海水下，一头较大的蓝鲸与一头体型明显较小的蓝鲸保持距离并行，两头鲸的全身、胸鳍和尾鳍都在画面内',
          title: '最初的旅程跟着母鲸',
          caption:
            '幼鲸约 6 至 7 个月断奶，随母鲸完成最初的旅程；此后母子分开，各自游向自己的海域。',
          focalPoint: { x: 0.54, y: 0.55 },
        },
        {
          image: './images/species/blue-whale/06-passive-acoustic-monitoring.webp',
          alt: '深蓝远洋中，一头完整蓝鲸从远处游过，前景一套系泊式水下声学记录器与鲸保持清晰距离',
          title: '在海里记录低频声',
          caption:
            '被动声学设备记录蓝鲸叫声出现的时间与海域；估算鲸的数量，还需要结合照片识别、船上调查等证据。',
          focalPoint: { x: 0.5, y: 0.52 },
        },
      ],
    },
    sources: [
      ...BLUE_WHALE_SOURCES,
      {
        title: 'Mammal Diversity Database：蓝鲸原名与描述史',
        url: 'https://www.mammaldiversity.org/taxon/1006401/',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: CONTENT_DATE,
    updatedAt: BLUE_WHALE_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
