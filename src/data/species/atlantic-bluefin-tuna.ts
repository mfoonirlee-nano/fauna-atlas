import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE = '2026-08-27' as const;

const ATLANTIC_BLUEFIN_TUNA_CONTENT_DATE = '2026-08-27' as const;

const ATLANTIC_BLUEFIN_TUNA_SOURCES = [
  {
    title: 'IUCN Red List — Thunnus thynnus (assessment dated 2021)',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T21860A46913402.en',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'IUCN 2021 — Tuna reassessment and regional recovery limits',
    url: 'https://iucn.org/news/species/202109/tuna-species-recovering-despite-growing-pressures-marine-life-iucn-red-list',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'Eschmeyer’s Catalog of Fishes — Thunnus thynnus current species record',
    url: 'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=19735',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Thunnus thynnus, AphiaID 127029',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=127029',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'FAO — Thunnus thynnus species account and external identification',
    url: 'https://www.fao.org/4/y4162e/y4162e53.pdf',
    kind: 'general',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'ICCAT 2025 — Atlantic bluefin tuna executive summary',
    url: 'https://www.iccat.int/Documents/SCRS/ExecSum/BFT_E_ENG.pdf',
    kind: 'general',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'ICCAT 2019 — SCRS report and Atlantic bluefin tuna biology summary',
    url: 'https://www.iccat.int/Documents/Meetings/Docs/2019/REPORTS/2019_SCRS_ENG.pdf',
    kind: 'general',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Western Atlantic bluefin tuna',
    url: 'https://www.fisheries.noaa.gov/species/western-atlantic-bluefin-tuna',
    kind: 'general',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'ICCAT 2025 — Standing Committee on Research and Statistics report',
    url: 'https://www.iccat.int/Documents/Meetings/Docs/2025/Reports/2025_SCRS_ENG.pdf',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'ICCAT — Current stock assessment schedule',
    url: 'https://www.iccat.int/en/assess.html',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'ICCAT 2026 — First intersessional bluefin tuna status-check meeting',
    url: 'https://www.iccat.int/Documents/Meetings/Docs/2026/reports/2026_BFT_MAR_ENG.pdf',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'ICCAT — Atlantic bluefin tuna management strategy evaluation',
    url: 'https://www.iccat.int/mse/en/specMSE_BFT.asp',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'ICCAT 2022 — Management-strategy evaluation, stock mixing and the 45°W boundary',
    url: 'https://www.iccat.int/Documents/MSE/BFT_MSE_01_2022_ENG.pdf',
    kind: 'distribution',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'ICCAT 2022 — Eastern Atlantic and Mediterranean bluefin tuna stock assessment',
    url: 'https://www.iccat.int/Documents/CVSP/CV079_2022/n_3/CV079030426.pdf',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'ICCAT 2021 — Western Atlantic bluefin tuna stock assessment',
    url: 'https://www.iccat.int/Documents/CVSP/CV078_2021/n_3/CV078030640.pdf',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'ICCAT Recommendation 25-04 — Eastern Atlantic and Mediterranean management measures',
    url: 'https://www.iccat.int/Documents/Recs/compendiopdf-e/2025-04-e.pdf',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'ICCAT Recommendation 25-05 — Western Atlantic management measures',
    url: 'https://www.iccat.int/Documents/Recs/compendiopdf-e/2025-05-e.pdf',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'ICCAT — Bluefin tuna catch documentation and eBCD programme',
    url: 'https://www.iccat.int/en/BCD.asp',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (effective 5 March 2026)',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'CITES CoP15 — Rejected Appendix I proposal for Thunnus thynnus',
    url: 'https://cites.org/sites/default/files/eng/cop/15/doc/E15-68A03.pdf',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'Block et al. 2001 — Electronic tagging and physiological ecology of tunas',
    url: 'https://doi.org/10.1126/science.1061197',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'Carey & Gibson 1983 — Heat exchange in warm-bodied fishes',
    url: 'https://doi.org/10.1016/0300-9629(83)90612-6',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title: 'Gleiss et al. 2019 — Atlantic bluefin tuna locomotor behaviour',
    url: 'https://doi.org/10.1098/rsos.190203',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'Block et al. 2005 — Electronic tagging reveals population structure and movements',
    url: 'https://doi.org/10.1038/nature03463',
    kind: 'distribution',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'Rooker et al. 2008 — Natal homing and connectivity in Atlantic bluefin tuna',
    url: 'https://doi.org/10.1126/science.1161473',
    kind: 'distribution',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'Block et al. 2026 — Range-wide electronic tagging and cross-Atlantic mixing',
    url: 'https://doi.org/10.1073/pnas.2535185123',
    kind: 'distribution',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'Richardson et al. 2026 — Broad western Atlantic spawning distribution',
    url: 'https://doi.org/10.1016/j.pocean.2026.103687',
    kind: 'distribution',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'Mikles et al. 2026 — Genomic evidence for population structure and mixing',
    url: 'https://doi.org/10.1016/j.cub.2026.04.006',
    kind: 'distribution',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'Logan et al. 2025 — Range-wide meta-analysis of Atlantic bluefin tuna diet',
    url: 'https://doi.org/10.3354/meps14875',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'Corriero et al. 2005 — Sexual maturity of Mediterranean female bluefin tuna',
    url: 'https://doi.org/10.1111/j.1439-0426.2005.00700.x',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'Aranda et al. 2013 — Spawning frequency and batch fecundity in the western Mediterranean',
    url: 'https://doi.org/10.1016/j.seares.2012.08.005',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
  {
    title:
      'Muhling et al. 2011 — Climate change and Gulf of Mexico spawning habitat',
    url: 'https://doi.org/10.1093/icesjms/fsr008',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUEFIN_TUNA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-thunnus-thynnus',
    slug: 'atlantic-bluefin-tuna',
    names: {
      zh: '大西洋蓝鳍金枪鱼',
      en: 'Atlantic Bluefin Tuna',
      aliases: ['北方蓝鳍金枪鱼', 'Northern Bluefin Tuna'],
    },
    scientificName: 'Thunnus thynnus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Actinopterygii', '辐鳍鱼纲'),
      taxon('Scombriformes', '鲭形目'),
      taxon('Scombridae', '鲭科'),
      taxon('Thunnus', '金枪鱼属'),
    ),
    conservation: conservation('LC', 'unknown', 2021),
    distribution: {
      realms: ['marine'],
      continents: ['欧洲', '北美洲', '非洲', '亚洲', '南美洲'],
      regions: [
        '北大西洋温带外海、陆架边缘与高纬索饵海域',
        '地中海、马尔马拉海及相邻东北大西洋',
        '墨西哥湾、佛罗里达海峡、西北大西洋陆架与 Slope Sea',
        '北海、挪威海与冰岛周边季节性活动区',
      ],
      countries: [
        '加拿大',
        '美国',
        '墨西哥',
        '巴哈马',
        '古巴',
        '冰岛',
        '挪威',
        '英国',
        '爱尔兰',
        '法国',
        '西班牙',
        '葡萄牙',
        '意大利',
        '马耳他',
        '克罗地亚',
        '希腊',
        '土耳其',
        '摩洛哥',
        '阿尔及利亚',
        '突尼斯',
        '利比亚',
      ],
      range:
        '广布北大西洋及相邻海域，在外海、陆架和沿岸索饵区之间季节移动，并在地中海及西大西洋暖水产卵区繁殖。历史或边缘记录延伸到黑海、西波罗的海、巴西东北和南非；代表国家列表不等于完整出现记录。',
      center: { lat: 38, lng: -30 },
    },
    habitats: [
      {
        name: '北大西洋外海与陆架边缘',
        realm: 'marine',
        description:
          '主要巡游与索饵空间；个体能跨越深水盆地，并沿锋面、海流和陆架坡折寻找群游猎物。',
        isPrimary: true,
      },
      {
        name: '高纬高生产力索饵海域',
        realm: 'marine',
        description:
          '加拿大大西洋、冰岛、挪威海和北海等地形成季节性食物热点，大型个体会追随鲱、鲭等群游鱼。',
      },
      {
        name: '暖水外海产卵区',
        realm: 'marine',
        description:
          '地中海与西大西洋的季节性暖水外海承载体外受精后的浮性卵和仔鱼；适温范围与时序随海区和年份变化，西侧直接证据已超出墨西哥湾，仍不能据此划出一个固定连续边界。',
      },
      {
        name: '中层与深层水域',
        realm: 'marine',
        description:
          '日常垂直移动和深潜能进入中层乃至一千米以下，实际深度随猎物、温度、溶氧和时段改变。',
      },
    ],
    measurements: {
      length: {
        max: 330,
        unit: 'cm',
        note: 'ICCAT 2019 SCRS 生物学摘要采用的最大直线叉长；不是普通成体范围，也不表示与 725 千克上限来自同一尾实测个体',
      },
      weight: {
        max: 725,
        unit: 'kg',
        note: 'ICCAT 2019 SCRS 生物学摘要采用的近似体重上限；不是普通成体、全球统一测量样本范围或与 330 厘米记录配对的个体',
      },
    },
    diet: {
      types: ['carnivore', 'piscivore'],
      foods: ['鲱鱼和鲭鱼等群游鱼', '其他海洋鱼类', '鱿鱼等头足类', '甲壳类'],
      description:
        '机会性捕食鱼类、头足类和甲壳类，组成会随海区、年份、季节和体长改变。跨范围胃含物研究不支持把鲱鱼、鲭鱼或任何单一猎物写成全年全球固定主食。',
    },
    activity: [
      '在北大西洋外海、陆架边缘与高纬索饵区之间完成长距离季节移动',
      '跨越 ICCAT 的 45°W 管理线，并在索饵海域与另一繁殖来源的个体混合',
      '结群巡游，也会围绕局地猎物热点形成松散聚集',
      '在表层与深水之间垂直移动，电子标记曾记录一千米以上的深潜',
      '以区域性内温维持深层游泳肌、内脏及脑眼区域的较高温度',
      '在暖水外海体外受精并分批产卵，卵和仔鱼随水柱漂浮，不筑巢也不护幼',
    ],
    tags: [
      'IUCN 无危',
      '全球趋势未知',
      '鲭形目',
      '北大西洋远洋鱼',
      '区域性内温',
      '跨大西洋迁徙',
      '深潜超过一千米',
      'ICCAT 双管理区',
      '45°W 管理线',
      'CITES 未列入',
      'eBCD 贸易追溯',
      '电子标记研究',
    ],
    summary:
      '北大西洋与地中海的巨型远洋金枪鱼，靠流线体型、区域性内温和广阔垂直活动范围穿行冷暖水团；全球 IUCN 无危不等于两个 ICCAT 管理种群均已完全恢复。',
    description:
      '大西洋蓝鳍金枪鱼有粗壮的纺锤形身体、蓝黑色背部、银白腹部、短胸鳍、红褐色第二背鳍和尾前的小型黄黑鳍。个体能跨越大西洋，也会潜至一千米以下；逆流热交换血管网让深层肌肉等区域保留代谢热，但并非全身恒温。地中海和西大西洋是两个主要繁殖区域，本种在暖水外海体外受精；新的仔鱼与电子标记研究又显示西侧产卵分布和两个来源群体的混合比传统二分法更复杂。IUCN 2021 全球等级为 LC、趋势未知。ICCAT 以 45°W 分设管理区并通过管理程序、配额、观察和电子渔获文件管制捕捞与贸易；本种当前未列入 CITES 附录。',
    storySections: [
      {
        key: 'streamlined-ocean-giant',
        label: '外形与体型',
        title: '短胸鳍与粗壮流线体型',
        body: '蓝黑背、银白腹、红褐色第二背鳍和尾前小鳍构成醒目组合。ICCAT 2019 SCRS 生物学摘要采用 330 厘米直叉长和 725 千克的上限；两项不代表普通成体，也不能假定来自同一尾实测鱼。',
      },
      {
        key: 'regional-endothermy-and-depth',
        label: '内温与深潜',
        title: '保留部分体热，进入冷水觅食',
        body: '逆流热交换血管网保存部分代谢热，使深层红肌、内脏和脑眼区域高于周围海水。电子标记曾记录一千米以上的下潜；区域性内温不是鸟兽式全身恒温，温差也会随体型、活动和环境改变。',
      },
      {
        key: 'ocean-crossing-stock-mixing',
        label: '迁徙与混合',
        title: '跨越大西洋的鱼群会相互混合',
        body: '电子标记记录到跨大西洋移动，许多东部来源个体会到西侧索饵后返回地中海繁殖。ICCAT 用 45°W 分开两个管理区，这条经线方便分配责任，却不是群体终生分居的生态屏障。',
      },
      {
        key: 'variable-pelagic-diet',
        label: '觅食',
        title: '猎物随海域和体长一起变化',
        body: '胃含物可见鲱、鲭等群游鱼，也有其他鱼类、鱿鱼和甲壳类。不同海区、年份和体型的组成差异显著，尚无证据支持任何单一猎物是全年、全范围的固定主食。',
      },
      {
        key: 'broad-spawning-waters',
        label: '繁殖海域',
        title: '暖水里分批排卵，没有巢和护幼',
        body: '地中海和西大西洋仍是两个主要繁殖区域；西侧仔鱼证据已从墨西哥湾扩展到西北加勒比、巴哈马附近、佛罗里达流与 Slope Sea。体外受精后的卵与仔鱼漂在水柱中。',
      },
      {
        key: 'management-with-uncertainty',
        label: '评估与管理',
        title: '灭绝风险、捕捞率和生物量分别评估',
        body: 'IUCN 的全球 LC 与趋势未知描述灭绝风险。ICCAT 2025 汇总以 2020 为参考年：东部 Fcur/F0.1 为 0.81（约 95% 置信区间 0.48 至 1.62），西部 F2018 至 2020/F0.1 为 0.53（约 80% 置信区间 0.49 至 0.58），正式结论均为未发生过度捕捞，西部发生过度捕捞的概率不超过 1%。东部 2022 三个模型都重建出产卵亲鱼生物量回升，但对幅度、速率和绝对生物量的估计差异很大，三个相对捕捞率点估计分别为 1.16、0.72 和 0.54，真实 B0.1 参考点仍未知；西部则因招募潜力不确定而没有估算生物量参考点。两区当前生物量状态都无法判定。2026 状态检查截至核验日没有公开最终结论，配额、观察员和 eBCD 追溯仍需继续。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的蓝鳍金枪鱼命名记录',
        body: '大西洋蓝鳍金枪鱼的命名记录可追溯到林奈 1758 年的描述，现用学名为 Thunnus thynnus。今天太平洋蓝鳍金枪鱼和南方蓝鳍金枪鱼被另列为独立种。电子标记还显示，大西洋个体能够跨越 45°W 管理线，并在不同来源的鱼群间混合。',
      },
    ],
    keyFacts: [
      'Catalog of Fishes 接受 Thunnus thynnus (Linnaeus, 1758)；太平洋蓝鳍金枪鱼 T. orientalis 和南方蓝鳍金枪鱼 T. maccoyii 是独立种。',
      '粗壮纺锤体、蓝黑背、银白腹、短胸鳍、红褐色第二背鳍、尾前小型黄黑鳍和新月尾构成主要外形线索。',
      'ICCAT 2019 SCRS 生物学摘要采用可达 330 厘米直叉长和 725 千克的上限，两项不是普通成体范围或同一尾鱼的配对测量。',
      '寿命可约 40 年，电子标记曾记录一千米以上的深潜；这些是近似上限或能力记录，不是每尾鱼的固定值。',
      '逆流热交换让深层游泳肌、内脏与脑眼区域保留代谢热，属于区域性内温而非全身恒温。',
      '个体能够跨大西洋，并在两个繁殖来源的索饵区混合；45°W 是 ICCAT 管理线，不是生态屏障。',
      '食物包括群游鱼、其他鱼类、头足类和甲壳类，组成随海区、年份、季节和体长改变。',
      '地中海和西大西洋是两个主要繁殖区域，西侧产卵证据已超出墨西哥湾；本种体外受精并分批排卵，不筑巢也不护幼。',
      'IUCN 2021 全球等级为 LC、正式当前趋势为 unknown，不能据此推断全球持续增长或所有区域均已恢复。',
      'ICCAT 用东部大西洋/地中海与西部大西洋两个管理区开展评估，鱼群混合使二者不是封闭生物种群。',
      'ICCAT 2025 汇总以 2020 为参考年，将东、西两区捕捞死亡率均列为未发生过度捕捞；东部三个模型均见产卵亲鱼生物量回升，但真实 B0.1 参考点仍未知，西部则因招募潜力不确定而没有估算生物量参考点，因此两区当前生物量状态都无法判定；2026 状态检查尚无公开最终结论。',
      'CITES 当前未将本种列入附录；捕捞、转移、养殖育肥和贸易仍受 ICCAT 配额、授权与 eBCD 追溯约束。',
    ],
    threats: [
      '高市场价值维持强烈定向捕捞动机，捕捞死亡率一旦超过管理目标可再次压低繁殖群体',
      '非法、不报告和不管制捕捞，以及转笼、养殖育肥和贸易链的数据缺口，削弱配额与追溯',
      '幼鱼捕捞和繁殖区延绳钓兼捕会在个体进入繁殖群体前或产卵季移除它们',
      '海水升温已使西大西洋部分适宜产卵温度窗口提前，也可能重排仔鱼栖息地、高纬索饵区和猎物分布；现有证据不足以量化全球损失',
      '季节性产卵聚集让成鱼更容易被集中捕获，繁殖季和产卵区的捕捞压力会直接移除亲鱼',
      '跨管理区混合、生物量参考点缺失和未申报捕获会让区级措施错配真实来源与风险',
    ],
    conservationActions: [
      '继续用 ICCAT 管理程序设置分区 TAC，并公开说明配额输出、委员会调整和死亡丢弃口径',
      '执行最小体长、季节、海区、船队能力和养殖容量限制，防止幼鱼与繁殖群体被集中捕获',
      '扩大船上与转笼观察、立体视频、港口核验和电子监测，完整记录捕获、丢弃、转移与收获',
      '以 eBCD 从捕获、转笼、养殖育肥到市场追踪每批蓝鳍金枪鱼，并查处非法和未申报贸易',
      '在主要产卵与仔鱼海域减少定向捕捞、延绳钓兼捕和死亡丢弃，不把一条固定边界当作全部繁殖范围',
      '结合电子标签、耳石、基因组和仔鱼调查估计跨 45°W 混合及繁殖来源，修正管理模型',
      '完成新的东西部完整评估并建立可解释的生物量参考点，分别报告捕捞死亡率与资源量状态',
      '长期监测海温、海流、猎物和高纬索饵地变化，把气候情景纳入管理程序与空间措施',
      '由大西洋沿岸捕捞国共享船队、养殖、贸易和科研数据，以同一口径核验配额执行效果',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'maximum-straight-fork-length',
        label: '最大直线叉长',
        value: '330',
        unit: '厘米',
        note: 'ICCAT 2019 SCRS 生物学摘要的物种上限，不是普通成体范围或与最大体重配对的同一尾鱼',
      },
      {
        key: 'approximate-maximum-mass',
        label: '近似体重上限',
        value: '725',
        unit: '千克',
        note: 'ICCAT 2019 SCRS 生物学摘要口径；不是常见体重、统一样本范围或与 330 厘米记录配对的个体',
      },
      {
        key: 'recorded-dive-depth',
        label: '电子标记深潜记录',
        value: '> 1,000',
        unit: '米',
        note: '电子标记记录的能力边界，不是所有个体每次下潜的深度，也不写入固定数值比较字段',
      },
      {
        key: 'approximate-lifespan',
        label: '近似寿命上限',
        value: '约 40',
        unit: '年',
        note: 'ICCAT 2019 SCRS 生物学摘要的近似值，不代表每个管理种群或个体都能达到',
      },
    ],
    media: {
      image:
        './images/species/atlantic-bluefin-tuna/01-open-ocean-portrait.webp',
      alt: '深蓝色开阔海水中，一尾完整成年大西洋蓝鳍金枪鱼朝左巡游，蓝黑背部、银灰腹部和新月形尾鳍可见，鱼身位于画面右侧',
      focalPoint: { x: 0.65, y: 0.5 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/atlantic-bluefin-tuna/02-streamlined-body-and-finlets.webp',
          alt: '一尾完整成年大西洋蓝鳍金枪鱼的清晰侧视图，粗壮流线身体、短胸鳍、两枚背鳍、尾前小鳍和新月尾清楚可见',
          title: '短胸鳍与尾前小鳍组成外形线索',
          caption:
            '第二帧最清楚地重建短胸鳍、两枚背鳍和尾前小鳍；生成图仍不能替代凭证标本、测量记录或与其他蓝鳍金枪鱼的完整鉴定。',
          focalPoint: { x: 0.51, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/atlantic-bluefin-tuna/03-pelagic-schooling-cruise.webp',
          alt: '开阔蓝色海水中七尾大西洋蓝鳍金枪鱼分处前景与远处结群巡游，前景个体朝左，鱼身互不重叠',
          title: '七尾鱼共享一片外海水层',
          caption:
            '巡游时第一背鳍可收进背沟；同框只表示结群，不给出固定群体规模、速度、迁徙路线、繁殖来源或跨越 45°W 的证据。',
          focalPoint: { x: 0.59, y: 0.49 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/atlantic-bluefin-tuna/04-prey-school-foraging.webp',
          alt: '深蓝色开阔海水中，一尾成年大西洋蓝鳍金枪鱼从右侧接近左侧密集的小型银色鱼群，没有咬住猎物',
          title: '接近鱼群，还没有发生捕获',
          caption:
            '接近只重建索饵情境；画面不能识别猎物种类、证明一次攻击或代表不同海区、季节和体型的完整食谱。',
          focalPoint: { x: 0.61, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/atlantic-bluefin-tuna/05-spawning-aggregation.webp',
          alt: '暖色阳光透入开阔蓝色海水，五尾成年大西洋蓝鳍金枪鱼在不同距离松散聚集，没有卵或配子可见',
          title: '繁殖季里进入同一片暖水',
          caption:
            '五尾鱼的集群只表示繁殖季情境；画面没有证明正在产卵，也不能判定性别、繁殖来源、准确地点或一个新种群。',
          focalPoint: { x: 0.51, y: 0.49 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/atlantic-bluefin-tuna/06-satellite-tag-monitoring.webp',
          alt: '深蓝外海中一尾完整成年大西洋蓝鳍金枪鱼朝右游动，第一背鳍后方背部带有一枚小型深色卫星档案标签和短天线',
          title: '一枚外部标签记录看不见的旅程',
          caption:
            '画面说明电子追踪概念；标签的系绳和锚点没有清楚呈现，不能用来教授安装方法，也不提供真实路线、深度、个体或研究结果。',
          focalPoint: { x: 0.52, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...ATLANTIC_BLUEFIN_TUNA_SOURCES,
      {
        title: 'GBIF: Thunnus thynnus (Linnaeus, 1758) nomenclatural record',
        url: 'https://www.gbif.org/species/2373980',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: ATLANTIC_BLUEFIN_TUNA_CONTENT_DATE,
    updatedAt: ATLANTIC_BLUEFIN_TUNA_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
