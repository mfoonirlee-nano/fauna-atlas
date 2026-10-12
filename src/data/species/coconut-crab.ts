import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const COCONUT_CRAB_SOURCE_DATE = '2026-08-28' as const;

const COCONUT_CRAB_CONTENT_DATE = '2026-08-28' as const;

const COCONUT_CRAB_SOURCES = [
  {
    title: 'WoRMS/DecaNet — Birgus latro (accepted; AphiaID 208668)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=208668',
    kind: 'taxonomy',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — full classification of Birgus latro',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/208668',
    kind: 'taxonomy',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'WoRMS/DecaNet — Cancer latro (original combination)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=412028',
    kind: 'taxonomy',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Taiwan Biodiversity Network — 椰子蟹 Birgus latro',
    url: 'https://www.tbn.org.tw/taxa/70289a06-2865-44a7-b787-4827c67f2b5b',
    kind: 'taxonomy',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Birgus latro (assessed 2018; published 2020)',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T2811A126813586.en',
    kind: 'conservation',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Cumberlidge et al. 2022 — Troubled giants: updated conservation status',
    url: 'https://doi.org/10.26107/RBZ-2022-0001',
    kind: 'conservation',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Drew et al. 2010 — Review of the biology and ecology of Birgus latro',
    url: 'https://doi.org/10.1016/j.jcz.2010.03.001',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Bond & Lavers 2024 — eastern range extension in the Pitcairn Islands',
    url: 'https://doi.org/10.1071/PC24043',
    kind: 'distribution',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Parks Australia — Robber crab on Christmas Island',
    url: 'https://christmasislandnationalpark.gov.au/discover/nature/animals/crabs/robber-crab/',
    kind: 'distribution',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Drew & Hansson 2014 — Christmas Island population and habitat study',
    url: 'https://lkcnhm.nus.edu.sg/wp-content/uploads/sites/11/app/uploads/2017/06/S30_C17_150_161.pdf',
    kind: 'distribution',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Anagnostou & Schubart 2014 — adult morphometrics on Christmas Island',
    url: 'https://lkcnhm.nus.edu.sg/wp-content/uploads/sites/11/app/uploads/2017/06/S30_C16_136_149.pdf',
    kind: 'general',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Oka et al. 2016 — measured and modelled pinching force',
    url: 'https://doi.org/10.1371/journal.pone.0166108',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Greenaway 2003 — Terrestrial adaptations in the Anomura',
    url: 'https://museumsvictoria.com.au/media/4024/60_1_greenaway.pdf',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Farrelly & Greenaway 2005 — gills and branchiostegal lungs',
    url: 'https://doi.org/10.1016/j.asd.2004.11.002',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Greenaway & Morris 1989 — purine excretion and water economy',
    url: 'https://doi.org/10.1242/jeb.143.1.333',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Greenaway et al. 1990 — branchial urine reprocessing',
    url: 'https://doi.org/10.1242/jeb.152.1.505',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Taylor et al. 1993 — selective drinking and osmoregulation',
    url: 'https://doi.org/10.1242/jeb.179.1.93',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Stensmyr et al. 2005 — Insect-like olfactory adaptations',
    url: 'https://doi.org/10.1016/j.cub.2004.12.069',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Knaden et al. 2019 — Acetoin as a resource-location odor',
    url: 'https://doi.org/10.1242/jeb.202929',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Wilde et al. 2004 — Dietary assimilation and omnivory',
    url: 'https://doi.org/10.1007/s00360-004-0415-7',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Krieger et al. 2016 — Active predation on Christmas Island red crabs',
    url: 'https://doi.org/10.6620/ZS.2016.55-06',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Veldsman et al. 2021 — genome and marine-to-land life cycle',
    url: 'https://doi.org/10.1186/s12864-021-07636-9',
    kind: 'general',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Wang et al. 2007 — Laboratory larval development',
    url: 'https://doi.org/10.1651/S-2797.1',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Hamasaki et al. 2011 — Shell use and land transition by glaucothoes',
    url: 'https://doi.org/10.1016/j.jembe.2011.04.007',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Kadiri-Jan & Chauvet 1998 — Juvenile shell use and coastal microhabitat',
    url: 'https://doi.org/10.1080/11956860.1998.11682451',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Sato & Yoseda 2013 — Seasonal reproduction and coastal migration',
    url: 'https://doi.org/10.3800/pbr.8.49',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Krieger et al. 2012 — GPS movement and homing on Christmas Island',
    url: 'https://doi.org/10.1371/journal.pone.0049809',
    kind: 'ecology',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Oka et al. 2015 — Mark-recapture growth and longevity model',
    url: 'https://doi.org/10.2108/zs150008',
    kind: 'general',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Drew et al. 2013 — Moult increment and long-life growth model',
    url: 'https://doi.org/10.3354/ab00523',
    kind: 'general',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Caro et al. 2021 — Zanzibar threats and conservation solutions',
    url: 'https://doi.org/10.1017/S0030605319000863',
    kind: 'conservation',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
  {
    title: 'Yorisue et al. 2020 — Ryukyu population structure and exploitation signals',
    url: 'https://doi.org/10.1038/s41598-020-66712-4',
    kind: 'conservation',
    accessedAt: COCONUT_CRAB_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-birgus-latro',
    slug: 'coconut-crab',
    names: {
      zh: '椰子蟹',
      en: 'Coconut Crab',
      aliases: [
        '椰蟹',
        '强盗蟹',
        '八卦蟹',
        'Robber Crab',
        'Palm Thief',
        'Cancer latro Linnaeus, 1767',
        'Birgus laticauda Latreille, 1829',
      ],
    },
    scientificName: 'Birgus latro',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Malacostraca', '软甲纲'),
      taxon('Decapoda', '十足目'),
      taxon('Coenobitidae', '陆寄居蟹科'),
      taxon('Birgus', '椰子蟹属'),
    ),
    conservation: conservation('VU', 'decreasing', 2018, 'A2cd+4cd'),
    distribution: {
      realms: ['terrestrial', 'marine'],
      continents: ['非洲', '亚洲', '大洋洲'],
      regions: [
        '东非外海与西印度洋岛屿',
        '安达曼—尼科巴群岛与东南亚群岛',
        '圣诞岛与科科斯（基林）群岛',
        '琉球群岛、台湾及菲律宾群岛',
        '密克罗尼西亚与美拉尼西亚岛群',
        '波利尼西亚至皮特凯恩群岛',
      ],
      countries: [
        '坦桑尼亚',
        '莫桑比克',
        '塞舌尔',
        '科摩罗',
        '印度',
        '印度尼西亚',
        '菲律宾',
        '日本',
        '中国',
        '澳大利亚',
        '巴布亚新几内亚',
        '帕劳',
        '密克罗尼西亚联邦',
        '马绍尔群岛',
        '基里巴斯',
        '瑙鲁',
        '图瓦卢',
        '所罗门群岛',
        '瓦努阿图',
        '斐济',
        '汤加',
        '萨摩亚',
        '纽埃',
        '库克群岛',
        '法国',
        '英国',
        '美国',
        '新西兰',
      ],
      range:
        '分布横跨热带印度洋与太平洋岛屿，从东非近海和西印度洋群岛，经安达曼、尼科巴、东南亚、圣诞岛、琉球与台湾，延伸至密克罗尼西亚、美拉尼西亚和波利尼西亚；2024 年皮特凯恩群岛新记录又把已知东界推进到奥埃诺环礁、亨德森岛与迪西环礁。今天的成体分布由彼此分隔的小岛种群组成，许多大陆海岸、人口密集大岛和历史地点已局部消失。成体可深入岛内森林，抱卵雌蟹仍须抵达海岸，海生幼体则随近岸水体和海流扩散。',
      center: { lat: -6, lng: 150 },
    },
    habitats: [
      {
        name: '潮湿原生海岸林与岛内雨林',
        realm: 'terrestrial',
        description:
          '荫蔽、高湿、具有落果和深厚腐殖层的天然森林为成体提供食物、稳定温度与隐蔽处；圣诞岛个体可进入距海岸数千米的内陆高原雨林。',
        isPrimary: true,
      },
      {
        name: '海岸灌丛、棕榈林与珊瑚石灰岩地',
        realm: 'terrestrial',
        description:
          '海岸植被、林缘、珊瑚碎屑和石灰岩裂隙连接陆上活动区与繁殖海岸；椰林只是可利用生境之一，不能代表全部适生地。',
      },
      {
        name: '土穴、树根空隙与岩缝庇护所',
        realm: 'terrestrial',
        description:
          '个体在白天、干燥期和蜕壳期利用湿润洞穴、根隙或岩缝降低失水与干扰；土壤压实、清林和采掘会同时移除这些微生境。',
      },
      {
        name: '上潮线、浅海与近岸幼体水域',
        realm: 'marine',
        description:
          '雌蟹在浪缘让成熟胚胎接触海水孵化，蚤状幼体在海中发育，大眼幼体随后进入浅水、取得小型腹足类贝壳并登陆；成体本身不以水下环境为生。',
      },
    ],
    measurements: {
      weight: {
        max: 4,
        unit: 'kg',
        note:
          '同行评审综述汇总的极大个体量级，部分记录写作超过 4 kg；圣诞岛 120 只成熟个体样本的实测最大值为 2.75 kg，不能把 4 kg 当作普通成体体重。',
      },
    },
    diet: {
      types: ['omnivore'],
      foods: [
        '林下成熟果实与落果',
        '种子、坚果与植物髓部',
        '椰肉和桄榔等棕榈果实',
        '腐肉、昆虫和其他动物性材料',
        '偶尔主动捕获的陆蟹等猎物',
      ],
      description:
        '椰子蟹是机会性杂食者，能利用高脂果实、种子、坚果、植物组织、腐肉，也有主动捕食陆蟹的现场记录。大型个体可用强螯缓慢打开椰子；椰子既不是唯一食物，也没有证据支持它在全分布区占固定或主要比例。',
    },
    activity: [
      '多数受调查种群以夜间地面活动为主，无捕捞压力的地点也会出现日间活动',
      '用适应空气的嗅觉系统寻找成熟果实、腐肉和其他资源',
      '能攀爬树干、根系和岩面，但主要在地面觅食与藏身',
      '圣诞岛雄蟹 GPS 研究记录到常规小范围活动和 0.7 至 4.2 km 的少数长距离移动',
      '繁殖季雌雄会在内陆与海岸之间移动，抱卵雌蟹到浪缘释放幼体',
      '成体在封闭庇护所内蜕壳，缓慢生长使大型个体需要多年形成',
      '以鳃室肺呼吸空气，长时间浸没会窒息，不能像海蟹一样在水下生活',
    ],
    tags: [
      '最大陆生节肢动物',
      '陆寄居蟹科',
      '成体弃壳',
      '鳃室肺',
      '海洋幼体',
      '携壳幼体',
      '杂食',
      '空气嗅觉',
      '缓慢生长',
      '岛屿生物',
      'IUCN易危',
      '种群下降',
    ],
    summary:
      '现存最大的陆生节肢动物，也是成体不再背壳的陆寄居蟹亲属；极大个体可超过 4 千克、足展接近 1 米，陆生成体仍必须借海洋幼体完成生活史。',
    description:
      '椰子蟹 Birgus latro 属于十足目异尾类的陆寄居蟹科，不是短尾下目的“真蟹”，也不是所有现生蟹类中体型最大者。幼体在海中经历蚤状幼体和大眼幼体阶段，登陆时借用小型腹足类贝壳；幼蟹腹部硬化后弃壳，成体依靠钙化腹甲、强螯、鳃室肺、节水排泄和灵敏的空气嗅觉生活在热带岛屿森林。冲绳 29 只野生个体的最大实测夹力为 1,765.2 N；常见的 3,300 N 数字来自对 4 kg 假定个体的回归外推。全球 IUCN 在 2018 年评估本种为易危 A2cd+4cd，趋势下降；捕捞、森林和海岸生境丧失、道路碾压及入侵种使许多岛屿种群缩小或消失。',
    storySections: [
      {
        key: 'hermit-relative-without-adult-shell',
        label: '分类与外形',
        title: '幼蟹借壳，腹部硬化后弃壳',
        body: 'Birgus latro 属于陆寄居蟹科。大眼幼体和早期幼蟹把柔软腹部藏进小型腹足类贝壳，随后腹部背面逐渐钙化，幼蟹弃壳并突破壳体对体型的限制。极大个体超过 4 kg、足展接近 1 m 的数字描述物种上限量级，不代表普通成体；它是现存最大陆生节肢动物，却不是足展最大的所有“蟹”。',
      },
      {
        key: 'air-breathing-and-water-balance',
        label: '陆生生理',
        title: '用鳃室肺呼吸，再从初尿中收回水和盐',
        body: '成体主要依靠高度血管化、表面积扩大的鳃室肺从空气取氧，缩小的鳃仍参与部分气体与离子交换。肾脏产生的初尿与血淋巴近等渗，身体让尿液流过前鳃室并重新摄入其中大部分水和离子；尿酸排氮又减少失水。这套系统服务于陆地生活，不能支持成体长期潜水，浓海水也不是它必须饮用的固定补给。',
      },
      {
        key: 'ocean-larvae-shell-and-landfall',
        label: '两界生活史',
        title: '母蟹守在浪边，后代先漂海再背壳登陆',
        body: '交配、抱卵和成体生活都发生在陆上，雌蟹却必须到海岸让成熟胚胎接触海水孵化。台湾室内培养中，多数幼体经过五个蚤状期、29 至 33 天成为大眼幼体，少数走过较短路径；石垣岛实验中的大眼幼体常在变态后 5 至 12 天入壳并表现登陆行为。温度、食物、湿度、贝壳和庇护物都会改变结果，这些天数不是全球固定日程。',
      },
      {
        key: 'claw-and-broad-diet',
        label: '强螯与食谱',
        title: '强螯处理多种食物',
        body: '冲绳研究实测 29 只野生个体，夹力随体重增加，最大实测值为 1,765.2 N。论文再用回归关系估算 4 kg 个体可达约 3,300 N，两个数字不能互换。强螯能处理果实、种子、坚果和动物性食物，也能防御或争夺资源；现场记录还确认了对陆蟹的主动捕食，但一次行为记录不能推出固定食谱比例。',
      },
      {
        key: 'aerial-smell-and-island-movement',
        label: '嗅觉与移动',
        title: '靠空气嗅觉寻找食物',
        body: '椰子蟹的触角感受器、神经反应和行为实验都显示出类似昆虫的空气嗅觉适应。圣诞岛实验把乙偶姻识别为一种强烈的成熟食物线索，却没有证明它是唯一气味或远距离导航信号。另一项 GPS 研究跟踪 55 只雄蟹，记录到 0.7 至 4.2 km 的少数长距离移动；熟悉廊道中的归巢成功也不能外推到雌蟹或所有岛屿。',
      },
      {
        key: 'slow-replacement-and-island-protection',
        label: '保护与恢复',
        title: '缓慢生长使大型成体难以补充',
        body: '冲绳标记重捕模型把雌雄寿命都估为约 50 年，圣诞岛模型给出更长的可能值；研究者没有直接读到五十岁或百岁个体。缓慢生长、晚熟和海洋幼体招募的不确定性，使大型成体捕捞后难以迅速补充。保护需要同时限制捕捞、保住内陆森林和海岸通道、降低道路死亡、控制入侵种，并用统一时段和方法监测体型、性比与招募。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1767 年的 Cancer latro',
        body: '1767 年，林奈以 Cancer latro 命名椰子蟹，后来它被归入椰子蟹属 Birgus。中文名来自它能用强螯处理椰子的习性，椰子只占多样食物中的一部分。它与陆寄居蟹关系密切，幼体曾借用小贝壳，腹部硬化后才弃壳长大。',
      },
    ],
    keyFacts: [
      '当前接受学名是 Birgus latro (Linnaeus, 1767)，原始组合为 Cancer latro Linnaeus, 1767。',
      '椰子蟹属 Birgus 目前只含这一个现生接受种，分类上属于陆寄居蟹科。',
      '它是现存最大的陆生节肢动物；极大个体可超过 4 kg，足展接近 1 m。',
      '4 kg 与 1 m 描述极大个体量级，不是普通成体平均值或所有种群的固定上限。',
      '成体不背腹足类贝壳，腹部背面的钙化板为失去外壳后的身体提供保护。',
      '成体主要用鳃室肺呼吸空气，长时间浸没会窒息，不能当作水下生活的海蟹。',
      '它通过尿液重处理回收水和离子，并以尿酸承担大部分氮排泄来减少失水。',
      '雌蟹在陆上抱卵，到浪缘让成熟胚胎接触海水孵化，自己通常不游入海中。',
      '海生蚤状幼体变态为大眼幼体后取得小型腹足类贝壳，再完成登陆。',
      '幼蟹只在早期携壳，腹部硬化后弃壳；单一地点的体长阈值不能推广全种。',
      '食物包括果实、种子、坚果、植物组织、腐肉和动物性材料，并非只吃椰子。',
      '对圣诞岛红蟹的观察证明椰子蟹能主动捕食，却不能说明红蟹在食谱中的比例。',
      '冲绳样本的最大实测夹力为 1,765.2 N；约 3,300 N 是对 4 kg 个体的模型外推。',
      '空气嗅觉实验支持它利用挥发性气味找食物，乙偶姻只是已测试出的一个强线索。',
      '冲绳标记重捕模型估计寿命约 50 年，圣诞岛更高数值也是模型推算而非直接定龄。',
      '全球分布面积看似辽阔，成体实际栖地却由散落在广阔海洋中的小片岛屿组成。',
      'IUCN 当前状态为 VU A2cd+4cd，评估日期是 2018-08-06，全球趋势下降。',
    ],
    threats: [
      '大型成体容易发现和捕捉，食用性、商业性及旅游消费捕捞会先移除繁殖价值高的大个体',
      '森林清除、农业、采矿、聚落和旅游开发会减少湿润庇护所与天然食物',
      '海岸硬化、照明和开发会切断内陆栖地到幼体释放海岸之间的繁殖通道',
      '道路穿过森林和迁徙路线时，夜间活动个体会遭车辆碾压',
      '鼠、猪等外来捕食者会捕食幼体，黄疯蚁可在圣诞岛攻击并杀死陆蟹',
      '晚熟、缓慢生长和不规律的海洋幼体招募会延长过度捕捞后的恢复时间',
      '海平面上升及海洋环境变化可能损害低平环礁和海生幼体，但直接量化证据弱于捕捞与生境破坏',
    ],
    conservationActions: [
      '按岛屿种群设定禁捕区、季节、袋数和最小尺寸，并保护抱卵雌蟹与大型繁殖个体',
      '打击餐饮、旅游和跨岛贸易中的非法收购，不把单一全域规则替代地方调查',
      '保护潮湿原生森林、土穴与岩缝，并维持岛内栖地到幼体释放海岸的连续通道',
      '在繁殖移动和高活动时段限速、临时封路或设置无障碍导流，记录道路死亡',
      '控制黄疯蚁、鼠和野猪等入侵种，同时监测控制措施对其他岛屿生物的影响',
      '用标准化夜间样线、照片个体识别和标记重捕追踪密度、体型、性比与招募',
      '保护近岸幼体水域，并把海流、温度、酸化和登陆基质纳入海陆联合监测',
      '让依赖椰子蟹的社区共同制定采捕规则、巡护和长期数据共享机制',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'maximum-body-mass',
        label: '极大个体体重',
        value: '>4',
        unit: 'kg',
        note: '同行评审综述汇总的物种极值量级，不是普通成体平均值；圣诞岛成体样本最大实测 2.75 kg。',
      },
      {
        key: 'maximum-leg-span',
        label: '极大个体足展',
        value: '约 1',
        unit: 'm',
        note: '跨伸展步足的极值量级，不是头胸甲长、全身长或每个种群都能达到的固定尺寸。',
      },
      {
        key: 'measured-pinch-force',
        label: '样本最大实测夹力',
        value: '1,765.2',
        unit: 'N',
        note: '冲绳 29 只、33 至 2,120 g 野生个体中的最大实测值；3,300 N 是对假定 4 kg 个体的回归外推。',
      },
      {
        key: 'modelled-longevity',
        label: '冲绳模型寿命',
        value: '约 50',
        unit: '年',
        note: '照片重识别标记重捕模型估计，不是直接测得的个体年龄或物种寿命硬上限。',
      },
    ],
    media: {
      image:
        './images/species/coconut-crab/01-rainforest-adult-portrait.webp',
      alt: '潮湿热带岛屿森林的石灰岩与落叶间，一只无螺壳的蓝紫褐色成年椰子蟹位于画面右侧，钙化腹甲、粗大左螯、步足、眼柄和触角可见',
      focalPoint: { x: 0.72, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/coconut-crab/02-shell-carrying-early-juvenile.webp',
          alt: '海岸林落叶与珊瑚砂交界处，一只代表性的早期椰子蟹幼体把腹部藏在一枚小型腹足类贝壳中并朝陆地移动',
          title: '登陆后还要暂借一只贝壳',
          caption:
            '大眼幼体取得小型腹足类贝壳后转向陆地；画面是代表性重建，不能单凭外形判定物种、年龄或野外登陆日数。',
          focalPoint: { x: 0.63, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/coconut-crab/03-ovigerous-female-at-surf.webp',
          alt: '月夜上潮线，一只抱着深橙褐色卵团的成年雌性椰子蟹立在礁岩上，仅腹部后方接触浅薄浪花，头胸部留在空气中',
          title: '陆生母蟹把下一代交给海浪',
          caption:
            '雌蟹到浪缘让成熟胚胎接触海水孵化；成体依靠空气呼吸，画面没有把它表现成游泳或水下生活的蟹。',
          focalPoint: { x: 0.61, y: 0.57 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/coconut-crab/04-coconut-fiber-feeding.webp',
          alt: '林下落叶间，一只大型成年椰子蟹用较粗大的左螯夹住一枚已部分裂开的成熟椰子外层纤维，白色椰肉从小开口露出',
          title: '强螯能开椰子，过程并不迅速',
          caption:
            '大型个体能缓慢处理坚硬落果；画面从已有开口开始，也不把椰子写成全分布区唯一或固定主食。',
          focalPoint: { x: 0.55, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/coconut-crab/05-airborne-odor-foraging.webp',
          alt: '夜间湿润林地中，一只成年椰子蟹朝左侧散落的成熟棕榈果移动，长短触角抬起并彼此分开，画面没有气味轨迹或诱饵装置',
          title: '在空气中寻找成熟食物的气味',
          caption:
            '实验确认椰子蟹具有灵敏空气嗅觉，乙偶姻是一个强食物线索；静止画面不能证明检测距离、化学成分或行为因果。',
          focalPoint: { x: 0.59, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/coconut-crab/06-night-road-monitoring.webp',
          alt: '热带岛屿森林的窄路上，一只椰子蟹独自向右侧植被移动，两名研究者留在左侧路肩用红光相机和记录板远距离记录',
          title: '把道路死亡与可见个体一起记录',
          caption:
            '照片个体识别可支持长期监测；画面只重建非接触记录，不能代表真实团队、地点、调查强度或种群趋势。',
          focalPoint: { x: 0.51, y: 0.6 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...COCONUT_CRAB_SOURCES,
      {
        title: 'GBIF: Birgus latro (Linnaeus, 1767) nomenclatural record',
        url: 'https://www.gbif.org/species/4311512',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: COCONUT_CRAB_CONTENT_DATE,
    updatedAt: COCONUT_CRAB_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
