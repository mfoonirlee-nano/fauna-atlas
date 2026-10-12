import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const RED_EYED_TREE_FROG_SOURCE_DATE = '2026-08-31' as const;

const RED_EYED_TREE_FROG_CONTENT_DATE = '2026-08-31' as const;

const RED_EYED_TREE_FROG_SOURCES = [
  {
    title: 'IUCN SSC Amphibian Specialist Group — Agalychnis callidryas, Red List 2020-1',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T55290A3028059.en',
    kind: 'conservation',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Crossref — IUCN assessment DOI metadata',
    url: 'https://api.crossref.org/works/10.2305%2FIUCN.UK.2020-1.RLTS.T55290A3028059.en',
    kind: 'conservation',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'AMNH Amphibian Species of the World 6.2 — Agalychnis callidryas',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-callidryas',
    kind: 'distribution',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'AMNH Amphibian Species of the World 6.2 — Agalychnis taylori',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-taylori',
    kind: 'taxonomy',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'CITES — Agalychnis callidryas taxon record',
    url: 'https://cites.org/eng/taxonomy/term/4867',
    kind: 'conservation',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Smithsonian Tropical Research Institute — Biota de Panama species account',
    url: 'https://panamabiota.org/portal/taxa/index.php?clid=16&taxauthid=1&taxon=10678',
    kind: 'general',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Duellman 1970 — The Hylid Frogs of Middle America',
    url: 'https://kuscholarworks.ku.edu/bitstream/1808/25332/1/Duellman_NHMUK_1970.pdf',
    kind: 'general',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Clark et al. 2022 — Genetic isolation by distance underlies colour pattern divergence',
    url: 'https://doi.org/10.1111/mec.16350',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Warkentin 1995 — Adaptive plasticity in hatching age',
    url: 'https://doi.org/10.1073/pnas.92.8.3507',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Warkentin 1999 — Effects of hatching age on development and hatchling morphology',
    url: 'https://doi.org/10.1111/j.1095-8312.1999.tb01180.x',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Warkentin 2005 — Vibrational cues in predator-induced hatching',
    url: 'https://doi.org/10.1016/j.anbehav.2004.09.019',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Warkentin, Caldwell & McDaniel 2006 — Temporal pattern cues in vibrational risk assessment',
    url: 'https://doi.org/10.1242/jeb.02150',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Warkentin et al. 2007 — Flexible information sampling in vibrational risk assessment',
    url: 'https://doi.org/10.1242/jeb.001362',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Caldwell, McDaniel & Warkentin 2009 — Frequency information in vibration-cued escape hatching',
    url: 'https://doi.org/10.1242/jeb.026518',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Caldwell et al. 2010 — Rain-vibration features reduce false alarms',
    url: 'https://doi.org/10.1016/j.anbehav.2009.11.005',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Caldwell et al. 2010 — Vibrational signaling in agonistic interactions',
    url: 'https://doi.org/10.1016/j.cub.2010.03.069',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Cohen, Seid & Warkentin 2016 — Hatching mechanics and enzyme release',
    url: 'https://doi.org/10.1242/jeb.139519',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Warkentin et al. 2017 — Developmental onset depends on cue type',
    url: 'https://doi.org/10.1016/j.anbehav.2017.05.008',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Cohen et al. 2019 — Two types of hatching gland cells',
    url: 'https://doi.org/10.1093/biolinnean/bly214',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Jung et al. 2019 — Vestibular mechanoreception in snake-attack detection',
    url: 'https://doi.org/10.1242/jeb.206052',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Jung, Serrano-Rojas & Warkentin 2020 — Multimodal mechanosensing in escape hatching',
    url: 'https://doi.org/10.1242/jeb.236141',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Costa & Vonesh 2013 — Tadpole effects on primary producers and zooplankton',
    url: 'https://doi.org/10.1111/btp.12032',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Alza, Donnelly & Whitfield 2016 — Temperature and chlorothalonil effects on larvae',
    url: 'https://doi.org/10.1002/etc.3484',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-agalychnis-callidryas',
    slug: 'red-eyed-tree-frog',
    names: {
      zh: '红眼树蛙',
      en: 'Red-eyed Treefrog',
      aliases: [
        'Red-eyed Tree Frog',
        'Red-eyed Leaf Frog',
        'Red-eyed Multicolored Treefrog',
        'Gaudy Leaf Frog',
      ],
    },
    scientificName: 'Agalychnis callidryas',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Amphibia', '两栖纲'),
      taxon('Anura', '无尾目'),
      taxon('Phyllomedusidae', '叶泡蛙科'),
      taxon('Agalychnis', '红眼雨蛙属'),
    ),
    conservation: conservation('LC', 'decreasing', 2016),
    distribution: {
      realms: ['terrestrial', 'freshwater'],
      continents: ['北美洲', '南美洲'],
      regions: [
        '洪都拉斯东北部与尼加拉瓜东部加勒比低地',
        '哥斯达黎加南部与巴拿马太平洋低地',
        '巴拿马加勒比低地与中部低地',
        '哥伦比亚乔科及西北部低地',
      ],
      countries: ['洪都拉斯', '尼加拉瓜', '哥斯达黎加', '巴拿马', '哥伦比亚'],
      range:
        '按 2019 年 Agalychnis taylori 恢复为有效种后的现行分类口径，红眼树蛙分布于洪都拉斯东北部、尼加拉瓜东部，沿中美洲低地经哥斯达黎加和巴拿马延伸到哥伦比亚乔科及西北部，记录海拔为海平面至 1325 米。墨西哥、伯利兹、危地马拉和洪都拉斯中西部种群现归 A. taylori；马格达莱纳河谷旧记录现归 A. terranova。',
      center: { lat: 9.1, lng: -81.8 },
    },
    habitats: [
      {
        name: '热带湿润低地森林与林缘植被',
        realm: 'terrestrial',
        description:
          '成体在树木、灌木和较高植被间活动，繁殖期会到林内池塘周围；巴拿马资料也记录到旱季藏身于棕榈叶和凤梨科植物的个体。',
        isPrimary: true,
      },
      {
        name: '池塘上方的叶片与胶质卵团',
        realm: 'terrestrial',
        description:
          '卵团附着在临时或永久池塘上方的叶片或其他植被，胚胎在空气中发育，孵化后落入水中。',
      },
      {
        name: '临时与永久森林池塘',
        realm: 'freshwater',
        description:
          '蝌蚪在池塘水柱中发育和悬浮摄食；水温、捕食者、食物和水期会改变生长与变态时机，单一池塘不能代表整个分布区。',
      },
    ],
    measurements: {
      length: {
        max: 7.1,
        unit: 'cm',
        note: '巴拿马机构账户记录的雌体最大吻肛长，雄体最大 5.6 厘米。Cerro La Campana 局地样本为雄体 4.45–5.09 厘米、雌体 5.44–6.61 厘米；局地样本不代表全物种下限或硬范围。',
      },
    },
    diet: {
      types: ['carnivore', 'filter-feeder'],
      foods: [
        '成体：推测为小型陆生节肢动物，缺少物种级野外定量食谱',
        '蝌蚪：水柱悬浮颗粒、浮游生物与附着藻，比例随环境变化',
      ],
      description:
        '生命阶段的摄食方式不同。成体被推测捕食小型陆生节肢动物，但野外食谱尚未完成物种级定量；蝌蚪是水体中层悬浮摄食者，也会取食附着藻。围隔实验记录了蝌蚪对浮游植物、附着藻和浮游动物的影响，不能据此给自然食谱设定固定比例。',
    },
    activity: [
      '树栖，繁殖期在森林池塘周围植被活动',
      '繁殖集群与雄性竞争主要在夜间被记录，但现有证据不支持绝对夜行',
      '雄蛙鸣叫并以后肢颤动产生植物基质振动',
      '雄雄冲突可由颤动展示升级为摔跤',
      '陆生卵中的胚胎可依据捕食扰动的复合机械线索调整孵化时间',
      '蝌蚪在淡水池塘水柱中发育和悬浮摄食',
    ],
    tags: [
      '无尾目',
      '叶泡蛙科',
      '中美洲',
      '哥伦比亚',
      '热带湿润森林',
      '树栖',
      '陆地产卵',
      '池塘蝌蚪',
      '振动通讯',
      '风险诱导孵化',
      'CITES 附录 II',
    ],
    summary:
      '红眼树蛙把胶质卵团产在森林池塘上方的叶片；达到孵化能力的胚胎可综合蛇袭产生的振动模式提前破卵落水，逃开眼前捕食，也让较幼小的蝌蚪更早进入水中风险。',
    description:
      '红眼树蛙属于叶泡蛙科红眼雨蛙属。2019 年 Agalychnis taylori 从旧广义物种概念中恢复后，现行范围不再包括墨西哥、伯利兹和危地马拉，而从洪都拉斯东北部、尼加拉瓜东部经哥斯达黎加和巴拿马低地延伸到哥伦比亚乔科及西北部。成体有绿色背面、红色虹膜、垂直瞳孔、大型趾端吸盘和彩色体侧，腿色、体侧色和竖条却随地域与个体变化。繁殖时，胶质卵团附着在池塘上方的植被；巴拿马未受扰动胚胎通常约六至七日孵化，达到发育门槛后可根据捕食者扰动产生的时序、频率与幅度等复合机械线索提前离卵。提前孵化并非没有代价，较幼小的蝌蚪会更早面对水生捕食者。IUCN 现行记录为无危、趋势下降，评估日期为 2016 年；该评估早于 2019 年分类拆分，不能视为狭义物种的独立重评估。',
    storySections: [
      {
        key: 'red-eyes-and-variable-flanks',
        label: '会变化的配色',
        title: '红眼与趾盘醒目，体侧颜色有变化',
        body: '红色虹膜、垂直瞳孔、绿色背面和大型趾端吸盘构成可靠的识别组合。体侧常见深蓝至紫色底色和乳白或黄色竖条，隐蔽腿面可呈橙色、蓝色或紫色。哥斯达黎加太平洋岸的研究记录到腿色沿地理渐变，过渡带还有多种色型共存；一张照片只能展示一个个体，不能定义全种唯一配色。',
      },
      {
        key: 'life-above-the-pond',
        label: '池塘上方的生活',
        title: '成体住在植被，繁殖把它带到水边',
        body: '成体主要利用湿润森林中的树木、灌木和较高植被，繁殖季在夜间到临时或永久池塘周围活动。它并非长期住在池水中的蛙；淡水对其生命史仍不可缺少，因为叶上胚胎孵化后必须落入池塘，蝌蚪才能继续发育。',
      },
      {
        key: 'leaf-borne-egg-clutches',
        label: '叶上的胶质卵团',
        title: '胚胎在空气中发育，孵化后切换到水下',
        body: '雌蛙把卵包在透明胶质中，附着于池塘上方的叶片或其他植被。巴拿马未受扰动的胚胎通常约在产卵后六至七日孵化，随后直接落水。具体时刻会随温度、亲本、地点和发育状态改变，六至七日是研究地点的典型时段，不是全范围倒计时。',
      },
      {
        key: 'vibration-cued-escape-hatching',
        label: '卵中的机械感觉',
        title: '胚胎从一组振动特征判断眼前风险',
        body: '食卵蛇咬住、拉扯卵团时，运动和振动会经胶质与植物传给胚胎。达到孵化能力的胚胎综合振动持续时间、间隔、频率和幅度，并跨多个周期采样信息；暴雨也会强烈摇动卵团，所以并非每次震动都触发逃生。内耳前庭机械感受与侧线神经丘都参与反应，不能简化成胚胎“听见蛇”。',
      },
      {
        key: 'a-costly-head-start',
        label: '提前逃生的代价',
        title: '躲过树上的蛇，更早面对水里的猎手',
        body: '捕食袭击可使胚胎比未受扰动孵化最多提前约三成发育时间。胚胎先在吻端附近释放孵化酶、破开卵膜，再用肌肉运动退出；不是蛇把它咬出来，也不是整团卵同步爆裂。提前落水能逃开食卵捕食者，但较早孵化、发育较少的蝌蚪面对水生捕食者时处于劣势。',
      },
      {
        key: 'one-name-changing-map',
        label: '种界改变地图',
        title: '2019 年拆分改变了旧分布范围',
        body: '2019 年 Agalychnis taylori 从红眼树蛙的同物异名中恢复，墨西哥、伯利兹、危地马拉和洪都拉斯中西部种群不再属于现行 A. callidryas；哥伦比亚马格达莱纳河谷旧记录则归 A. terranova。IUCN 的 LC、下降和 2016 年记录采用拆分前口径，狭义物种仍需正式重评估。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1862 年的 Hyla callidryas',
        body: '1862 年，Cope 以 Hyla callidryas 命名红眼树蛙，后来它被归入 Agalychnis。中文名对应成体红色虹膜，腿和体侧配色却随地理种群变化。2019 年 A. taylori 恢复为有效种后，墨西哥、伯利兹和危地马拉等旧记录不再属于狭义红眼树蛙。',
      },
    ],
    keyFacts: [
      '现行接受名为 Agalychnis callidryas (Cope, 1862)，原始组合为 Hyla callidryas。',
      '当前科级分类为 Phyllomedusidae；旧资料中的 Hylidae 或 Phyllomedusinae 反映较早分类口径。',
      '2019 年 Agalychnis taylori 恢复为有效种，旧广义红眼树蛙资料须按地点重新核对。',
      '现行叙述范围包括洪都拉斯东北部、尼加拉瓜东部、哥斯达黎加、巴拿马和哥伦比亚西北部。',
      '墨西哥、伯利兹和危地马拉记录现归 A. taylori，不属于现行本种范围。',
      '哥伦比亚马格达莱纳河谷旧记录现归 A. terranova。',
      '洪都拉斯东部至哥斯达黎加北部种群可能对应 A. helenae，但该分类动作尚未正式执行。',
      'ASW 记录的海拔范围为海平面至 1325 米。',
      '红色虹膜、垂直瞳孔、绿色背面和大型趾端吸盘构成可靠识别组合。',
      '体侧竖条数量和宽度有变化，隐蔽腿面与体侧颜色也随地理种群变化。',
      '巴拿马机构账户记录雌体最大吻肛长 7.1 厘米、雄体最大 5.6 厘米。',
      'Cerro La Campana 局地样本的雄体为 4.45 至 5.09 厘米、雌体为 5.44 至 6.61 厘米，不能据此制造全物种下限。',
      '成体利用树木、灌木和较高植被；繁殖期会到临时或永久池塘周围。',
      '卵包在透明胶质中，附着于池塘上方的叶片或其他植被，不是水下卵或泡沫巢。',
      '巴拿马未受扰动胚胎通常约在产卵后六至七日孵化，日龄会随环境和发育状态变化。',
      '蛇袭造成的卵团运动与振动可触发提前孵化，胚胎不是靠看见、听见或闻到蛇来反应。',
      '胚胎组合使用振动时序、频率、幅度和多周期采样，不会对任意震动同步跳水。',
      '发育中的内耳前庭机械感受与侧线神经丘共同参与逃生孵化，重要性会随阶段与刺激改变。',
      '胚胎在吻部附近释放孵化酶并主动退出卵膜，卵团不会因捕食刺激整团爆炸。',
      '蛇袭可让孵化最多提前约 30% 的发育时间；这不是孵化比例、存活增幅或固定提前天数。',
      '提前孵化能逃离食卵捕食者，却让发育更少的蝌蚪更早面对水生捕食者。',
      '雄蛙竞争时也会以后肢使植物颤动；特定基质振动能引发对手回应，任意噪声振动则不能。',
      '成体野外食谱尚未被可靠定量，只能推测其捕食小型陆生节肢动物。',
      '蝌蚪是有直接研究支持的水柱悬浮摄食者，不能把这一摄食方式套到成体。',
      'IUCN 现行记录为 LC、趋势下降、评估日期 2016 年；它早于 2019 年分类拆分。',
      'CITES 把 Agalychnis spp. 列入附录 II；这要求国际贸易受许可和可持续性监管，并非全面禁贸。',
    ],
    threats: [
      '湿润森林被清除或破碎化，会同时减少成体植被、池塘周边遮蔽和水面上方的产卵叶片',
      '池塘排水、岸缘植被清除与水文改变会切断叶上胚胎到水生幼体的两阶段生命史',
      '蝌蚪对百菌清的实验暴露出现存活和生长影响，但实验浓度不能直接换算为野外下降率或水质阈值',
      '国际活体贸易需要来源与许可证监管；历史申报量不能当作当前野外捕捉量',
      '两栖疾病属于需要监测的风险，现有证据不足以把它定为狭义物种全球下降的首要原因',
      '拆分前记录混合 A. callidryas、A. taylori 和其他近缘种，会掩盖各分类单元的真实范围与趋势',
      'IUCN 评估早于 2019 年种界修订，现行狭义物种缺少独立全球风险评估',
    ],
    conservationActions: [
      '连片保护湿润森林、繁殖池塘、岸缘植被和水面上方的产卵叶片，而不是只保留孤立水面',
      '按同一季节、夜间时段和调查强度重复记录鸣叫成体、卵团、蝌蚪与未检出样点',
      '采样保存带地点和日期的影像、声音、组织或环境 DNA 凭证，以区分 A. callidryas、A. taylori 与候选谱系',
      '监测农业径流与繁殖池水质，把实验毒理结果用于设计调查，而非直接当作野外安全阈值',
      '执行 CITES 附录 II 的许可、非致危性审查、来源代码与贸易链可追溯要求',
      '野外调查与圈养转运采用两栖动物生物安全措施，避免在水体和地点间携带病原',
      '补足成体野外食谱、全范围体尺、局地种群趋势和两阶段生境连通性数据',
      '推动以 2019 年后物种边界开展 IUCN 重评估，并把尚未正式处理的 A. helenae 假说单独记录',
    ],
    metrics: {
      elevationM: [0, 1325],
    },
    featuredStats: [
      {
        key: 'female-maximum-svl',
        label: '巴拿马雌体最大吻肛长',
        value: '7.1',
        unit: '厘米',
        note: '机构账户记录的巴拿马上限，不是全范围典型值或硬上限。',
      },
      {
        key: 'recorded-elevation',
        label: '记录海拔',
        value: '0–1325',
        unit: '米',
        note: '按 2019 年拆分后的 ASW 叙述范围。',
      },
      {
        key: 'undisturbed-hatching',
        label: '未受扰动自然孵化',
        value: '约 6–7',
        unit: '天',
        note: '巴拿马研究中的典型时段，会随地点、温度、亲本和发育状态变化。',
      },
      {
        key: 'maximum-hatching-advance',
        label: '捕食诱导孵化提前',
        value: '最多约 30',
        unit: '%',
        note: '指相对未受扰动孵化的发育时间提前幅度，不是孵化比例或存活提升。',
      },
    ],
    media: {
      image:
        './images/species/red-eyed-tree-frog/01-rainforest-leaf-adult-cover.webp',
      alt: '夜间湿润阔叶上，一只完整的绿色红眼树蛙侧身停栖，红色竖瞳眼、蓝色体侧浅色竖条和橙色趾盘清楚可见',
      focalPoint: { x: 0.58, y: 0.54 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/red-eyed-tree-frog/02-red-eye-flank-bars-toe-pads.webp',
          alt: '一只完整红眼树蛙横向抓住细枝，红色虹膜、垂直瞳孔、浅色腹面、蓝紫体侧竖条和圆形趾盘可见',
          title: '一个成体的眼、体侧花纹与趾盘',
          caption:
            'AI生成原创形态重建；画面支持红眼、竖瞳、绿色背面、彩色体侧和趾盘的组合展示，不能确定性别、年龄、地点、体尺、血统，也不能把这一配色当作全种唯一标准。',
          focalPoint: { x: 0.53, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/red-eyed-tree-frog/03-lowland-wet-forest-pond-habitat.webp',
          alt: '雨后湿润低地森林的小型静水池塘周围生长着浓密阔叶植物，一只完整红眼树蛙停在水面上方的叶片上',
          title: '湿润森林里的池塘与上方植被',
          caption:
            'AI生成原创生境重建；画面表达成体植被、产卵位置和幼体水域相邻的环境结构，不代表具体国家或地点，不能证明繁殖、测量冠层、推断密度或概括全部生境。',
          focalPoint: { x: 0.64, y: 0.48 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/red-eyed-tree-frog/04-nocturnal-moth-encounter.webp',
          alt: '夜间林下，一只完整红眼树蛙蹲在细枝上，面对相邻叶缘的一只小型褐灰色蛾，双方没有接触',
          title: '夜间与一只小型节肢动物相遇',
          caption:
            'AI生成原创行为重建；画面只表现一次可能的节肢动物遭遇，不能确认猎物身份、捕获结果、偏好、食谱比例或通用捕食动作。成体野外食谱尚未完成物种级定量。',
          focalPoint: { x: 0.47, y: 0.48 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/red-eyed-tree-frog/05-leaf-egg-clutch-above-pond.webp',
          alt: '池塘水面上方的宽叶下附着一团透明胶质卵，许多无肢、带尾的深色胚胎分别包在完整卵囊内',
          title: '水面上方的一团叶生卵',
          caption:
            'AI生成原创繁殖重建；画面显示一个晚期胶质卵团及水面位置关系，不能确定窝卵数、胚胎日龄、亲本、发育速度、孵化时间、线索感知或存活率。',
          focalPoint: { x: 0.49, y: 0.47 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/red-eyed-tree-frog/06-snake-attack-escape-hatching.webp',
          alt: '一条闭口的褐色猫眼蛇接触叶下胶质卵团边缘，三只彼此分开的无肢蝌蚪正从卵团落向下方池水',
          title: '蛇接触卵团时的逃生孵化重建',
          caption:
            'AI生成原创行为重建；同框的蛇接触和三只落水蝌蚪不能从像素证明胚胎感知了振动、识别了具体线索或在特定日龄响应，也不能证明全部胚胎同步孵化或落水后存活。',
          focalPoint: { x: 0.5, y: 0.48 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...RED_EYED_TREE_FROG_SOURCES,
      {
        title: 'GBIF: Agalychnis callidryas (Cope, 1862) nomenclatural record',
        url: 'https://www.gbif.org/species/2428197',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: RED_EYED_TREE_FROG_CONTENT_DATE,
    updatedAt: RED_EYED_TREE_FROG_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
