import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE = '2026-08-24' as const;

const CHINESE_RUFOUS_HORSESHOE_BAT_CONTENT_DATE = '2026-08-24' as const;

const CHINESE_RUFOUS_HORSESHOE_BAT_SOURCES = [
  {
    title: 'Mammal Diversity Database: Rhinolophus sinicus',
    url: 'https://www.mammaldiversity.org/taxon/1004746/',
    kind: 'taxonomy',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Andersen 1905: Original description of Rhinolophus rouxi sinicus',
    url: 'https://www.biodiversitylibrary.org/page/31207559',
    kind: 'taxonomy',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Mao et al. 2013: Lineage divergence and historical gene flow',
    url: 'https://doi.org/10.1371/journal.pone.0056777',
    kind: 'taxonomy',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Mao et al. 2019: Relationships among six horseshoe bat taxa',
    url: 'https://doi.org/10.1016/j.ympev.2019.106551',
    kind: 'taxonomy',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Rhinolophus sinicus (2019 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41529A22005184.en',
    kind: 'conservation',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: '生态环境部、中国科学院：中国生物多样性红色名录·脊椎动物卷（2020；2023发布）',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Handbook of the Mammals of the World: Rhinolophus sinicus treatment',
    url: 'https://doi.org/10.5281/zenodo.3808964',
    kind: 'general',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Bats in China: Rhinolophus sinicus morphology and calls',
    url: 'https://www.bio.bris.ac.uk/research/bats/China/rhinolophussinicus.htm',
    kind: 'general',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Xie et al. 2017: Geographic variation in echolocation calls',
    url: 'https://doi.org/10.1111/eth.12627',
    kind: 'ecology',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Wu et al. 2022: Roost ecology and population conservation in Xiangxi',
    url: 'https://doi.org/10.5846/stxb202011162947',
    kind: 'ecology',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Zhou et al. 2026: Seasonal diet and pest predation in South China',
    url: 'https://doi.org/10.1016/j.agee.2026.110330',
    kind: 'ecology',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Ge et al. 2013: Isolation of a bat SARS-like coronavirus using ACE2',
    url: 'https://doi.org/10.1038/nature12711',
    kind: 'ecology',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Hu et al. 2017: SARS-related coronavirus diversity in one Yunnan cave',
    url: 'https://doi.org/10.1371/journal.ppat.1006698',
    kind: 'ecology',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Zhou et al. 2020: SARS-CoV-2-related coronavirus from R. affinis',
    url: 'https://doi.org/10.1038/s41586-020-2012-7',
    kind: 'ecology',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-rhinolophus-sinicus',
    slug: 'chinese-rufous-horseshoe-bat',
    names: {
      zh: '中华菊头蝠',
      en: 'Chinese Rufous Horseshoe Bat',
      aliases: ['Chinese Horseshoe Bat', 'Little Nepalese Horseshoe Bat', '鲁氏菊头蝠（旧称）'],
    },
    scientificName: 'Rhinolophus sinicus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Chiroptera', '翼手目'),
      taxon('Rhinolophidae', '菊头蝠科'),
      taxon('Rhinolophus', '菊头蝠属'),
    ),
    conservation: conservation('LC', 'unknown', 2019),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: [
        '中国中南部、东南部与西南部湿润山地',
        '喜马拉雅东段和北印度山地',
        '尼泊尔中东部山地',
        '缅甸北部湿润森林',
        '越南北部至中部山地',
      ],
      countries: ['中国', '印度', '缅甸', '尼泊尔', '越南'],
      range:
        'MDD 当前列出中国、印度、缅甸、尼泊尔和越南，范围跨古北界与东洋界。旧专论常把现已独立的北方菊头蝠 Rhinolophus septentrionalis 纳入本种，因此云南等接触区域的旧记录、量测和声学数据需要按当前分类口径重新核对。',
      center: { lat: 27.5, lng: 105 },
    },
    habitats: [
      {
        name: '湿润山地森林',
        realm: 'terrestrial',
        description: '降雨较多的山地林、林缘和林下提供夜飞昆虫与可机动的取食空间。',
        isPrimary: true,
      },
      {
        name: '洞穴与废弃隧道',
        realm: 'terrestrial',
        description: '黑暗、温湿度合适且少受干扰的洞段承担白天休息、冬眠和部分繁育功能。',
      },
      {
        name: '次生林、竹林与林农镶嵌',
        realm: 'terrestrial',
        description: '本种可在受扰山地景观活动，但仍需要可用栖点、森林结构和持续的昆虫资源。',
      },
      {
        name: '建筑、井与树洞栖点',
        realm: 'terrestrial',
        description: '部分个体利用寺庙、房屋、井和树洞；这些补充栖点不能代表全部种群。',
      },
    ],
    measurements: {
      length: {
        min: 43,
        max: 53.5,
        unit: 'mm',
        note: '2019 专论的头体长；来源仍采用包含 R. septentrionalis 的宽物种概念，不进入 normalized metrics',
      },
      weight: {
        min: 10,
        max: 12.5,
        unit: 'g',
        note: '四川 4 只个体的地区样本，不作为全球范围',
      },
    },
    diet: {
      types: ['insectivore'],
      foods: [
        '夜间活动的飞行昆虫',
        '林下、林缘与冠层附近的小型昆虫',
        '从停栖点出击捕获的昆虫',
        '局地农业景观中的部分害虫类群',
      ],
      description:
        '在湿润山地森林和林缘空中追捕昆虫，也会从停栖点出击。食谱随地点和季节改变，单个农业生态系统的猎物记录不能外推至五国范围。',
    },
    activity: [
      '黄昏后离开栖点，夜间在森林、林缘和林农镶嵌中捕食昆虫',
      '从鼻孔发出 FM-CF-FM 型超声叫声，峰值频率随地点、群体和性别变化',
      '白天单独或成群栖息于洞穴、隧道、建筑、井和树洞',
      '部分较冷地区的种群冬眠；繁育期雌性可聚集，但全分布区的繁殖数字仍缺乏',
      '用宽圆翼在植被密集空间机动飞行，在空中追捕或从停栖点出击',
    ],
    tags: [
      '古北界',
      '东洋界',
      '翼手目',
      '菊头蝠科',
      '湿润山地森林',
      '洞穴栖息',
      '夜行性',
      '食虫动物',
      '回声定位',
      'FM-CF-FM 叫声',
      '部分种群冬眠',
      'IUCN 无危',
      '种群趋势未知',
    ],
    summary:
      '中华菊头蝠生活在亚洲湿润山地，白天在洞穴等栖点休息，黄昏后到森林和林缘捕捉昆虫。马蹄形鼻叶帮助它定向发出超声。',
    description:
      '中华菊头蝠分布于中国、印度、缅甸、尼泊尔和越南。木褐至红褐背毛、较浅腹毛、小耳和复杂马蹄形鼻叶构成外形组合；照片或单一叫声频率不足以排除近缘隐存类群。它在黄昏后离开洞穴、隧道或其他栖点，以宽圆翼穿过湿润山地森林的林缘和林下，发出短调频段连接长恒频段的 FM-CF-FM 叫声来定位昆虫。部分较冷地区种群会冬眠，繁育期雌性可组成集群，但现有资料不足以给出覆盖全范围的繁殖数字。当前 IUCN 全球等级和中国 2020 区域等级均为无危；局地洞穴干扰、森林损失、分类混淆与趋势数据不足仍需要持续监测。',
    storySections: [
      {
        key: 'noseleaf-sound',
        label: '形态',
        title: '鼻叶帮助超声定向',
        body: '马蹄形鼻叶包围鼻孔，中央鞍状叶和后方披针叶形成复杂轮廓。中华菊头蝠从鼻孔发出超声，鼻叶参与声束定向。红褐毛色会变化，物种鉴定需要同时查看鼻叶、体型、翼指和遗传信息。',
      },
      {
        key: 'constant-frequency-call',
        label: '声学',
        title: '长恒频段捕捉昆虫翼拍',
        body: '中华菊头蝠的叫声先短暂改变频率，再保持较长的恒定频率，最后又改变频率，研究者简写为 FM-CF-FM。中国 13 只手持样本的最强能量频率为 80 至 88.2 千赫。地点、群体、纬度和性别都会影响频率，单个数字不能代替形态或遗传鉴定。',
      },
      {
        key: 'cave-and-forest',
        label: '生境',
        title: '洞穴和森林组成一套生活空间',
        body: '白天，中华菊头蝠在洞穴、隧道、建筑或树洞休息；黄昏后，它进入湿润山地森林、林缘和林下捕捉昆虫。保护行动需要同时保留栖点、取食地及两者之间的飞行通道。',
      },
      {
        key: 'aerial-and-perch-foraging',
        label: '觅食',
        title: '空中追捕，也从停栖点出击',
        body: '宽圆翼方便中华菊头蝠在枝叶密集处转向。较长的恒频超声有助于检测昆虫翼拍引起的回声频率变化。它既在空中追捕昆虫，也能从停栖点出击，现有食谱资料还不足以确定全分布区各种昆虫所占比例。',
      },
      {
        key: 'seasonal-roost',
        label: '季节',
        title: '冬眠和繁育需要低干扰洞段',
        body: '湘西研究记录当地群体从秋季聚集冬眠，翌春苏醒，夏季繁育栖点位于隐蔽洞段。具体时间属于地区种群，每处洞穴的安静期应由重复监测确定。',
      },
      {
        key: 'evidence-led-monitoring',
        label: '监测',
        title: '每类数据都有自己的证据边界',
        body: '被动声学适合记录活动变化，但叫声重叠会限制物种鉴定；洞穴计数不能自动换算成全球趋势。云南局部样本检出的 SARS-CoV 相关病毒也不能证明每只个体携带病毒，更不能把本种写成 SARS-CoV-2 的直接来源。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1905 年曾作为亚种描述',
        body: '安德森在 1905 年将中华菊头蝠描述为 Rhinolophus rouxi sinicus，当时视作另一种菊头蝠的亚种，命名材料来自安徽长江下游一带。后来的研究将它独立为 Rhinolophus sinicus，并从中另分出北方菊头蝠。旧亚种资料需要结合这些变化重新核对。',
      },
    ],
    keyFacts: [
      'MDD 接受名为 Rhinolophus sinicus，英文主名为 Chinese Rufous Horseshoe Bat。',
      '当前分类口径已把 Rhinolophus septentrionalis 拆出，旧亚种资料不能无条件合并。',
      '自然分布覆盖中国、印度、缅甸、尼泊尔和越南，不是中国特有种。',
      'IUCN 2019 全球等级与中国 2020 区域等级均为无危；全球种群趋势记为未知。',
      '湿润山地森林提供取食空间，洞穴和隧道常承担休息、冬眠与繁育功能。',
      '它在黄昏后出飞，夜间捕捉昆虫，也会从停栖点出击。',
      '回声定位叫声呈 FM-CF-FM 结构，峰值频率随地点、群体和性别变化。',
      '中国 13 只样本的前臂长为 44.8 至 51.5 毫米，不能当作全球极值。',
      '四川 4 只样本重 10 至 12.5 克，现有资料不支持全球体重范围。',
      '云南局部种群样本检出过多种 SARS-CoV 相关冠状病毒，WIV1 可在细胞实验中利用人 ACE2。',
      '现有证据不支持把中华菊头蝠称为 SARS-CoV-2 的直接来源；RaTG13 的宿主记录为中菊头蝠。',
      '一个洞穴在冬眠或繁育期受到干扰，可能同时影响许多个体；无危不等于每处栖点安全。',
    ],
    threats: [
      '洞穴、废弃隧道和其他群体栖点受到封堵、开采、施工或频繁进入干扰',
      '湿润山地森林损失与破碎化减少夜间取食空间和昆虫资源',
      '冬眠和繁育季的人为照明、噪声与近距离活动迫使群体耗能或迁离',
      '缺少跨国、按当前拆分口径开展的种群趋势与栖点监测',
      '疾病污名可能引发驱赶或扑杀，不规范采样也会增加人员和动物暴露风险',
    ],
    conservationActions: [
      '建立重要洞穴和隧道栖点名录，记录季节、群体规模和同洞物种',
      '在冬眠与繁育期设置安静区，限制照明、爆破、旅游和重复进入',
      '保留洞口周边湿润森林、林缘和水体，维持夜间取食通道',
      '修复或封护洞穴前评估气流、温湿度和出入口，避免把蝙蝠封在洞内',
      '用统一声学、红外计数和遗传鉴定协议监测，并排除 R. septentrionalis 的混入',
      '病原监测采用非致死采样、个人防护、去污染和最少处理时间',
      '向公众说明病毒序列检出与实际传播风险的差别，反对因污名驱赶或扑杀',
      '补充繁殖、迁移、食谱和五国种群趋势研究，避免用单洞结果代表全物种',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'global-iucn-status',
        label: 'IUCN 全球等级',
        value: 'LC',
        unit: '无危',
        note: '2019 年评估；全球种群趋势暂按未知记录',
      },
      {
        key: 'forearm-length',
        label: '前臂长',
        value: '44.8—51.5',
        unit: '毫米',
        note: '中国 13 只样本，不是全球极值',
      },
      {
        key: 'body-mass',
        label: '体重',
        value: '10—12.5',
        unit: '克',
        note: '四川 4 只样本，不是全球范围',
      },
      {
        key: 'echolocation-peak',
        label: '回声定位峰值',
        value: '80—88.2',
        unit: '千赫',
        note: '中国手持个体 n=13；随地点、群体和性别变化',
      },
    ],
    media: {
      image:
        './images/species/chinese-rufous-horseshoe-bat/01-cave-mouth-roost-portrait.webp',
      alt: '一只完整的中华菊头蝠倒挂在石灰岩洞口右侧岩顶，折翼、鼻叶和洞外湿润山地森林清楚可见',
      focalPoint: { x: 0.7, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/chinese-rufous-horseshoe-bat/02-horseshoe-noseleaf-anatomy.webp',
          alt: '一只完整倒挂的中华菊头蝠近景，马蹄形鼻叶、鞍状叶、披针叶、小耳、折翼和双足均可见',
          title: '鼻叶是线索，不是单项鉴定',
          caption:
            '毛色、体型和叫声都会重叠；可靠鉴定需要组合形态、地点和必要的遗传证据。',
          focalPoint: { x: 0.5, y: 0.48 },
        },
        {
          image: './images/species/chinese-rufous-horseshoe-bat/03-cave-exit-flight.webp',
          alt: '湿润山地森林覆盖的石灰岩洞口只有一只小型中华菊头蝠正在黄昏出飞',
          title: '一条连接洞穴与森林的飞行通道',
          caption:
            '远景重建不能证明地点、洞穴占用、出飞数量或物种身份，只呈现栖点与取食生境的关系。',
          focalPoint: { x: 0.74, y: 0.49 },
        },
        {
          image: './images/species/chinese-rufous-horseshoe-bat/04-cave-roost-group.webp',
          alt: '六只菊头蝠彼此分开倒挂在天然石灰岩洞顶，每只都以双足抓住岩面并收拢翼膜',
          title: '同一洞顶的六只群栖个体',
          caption:
            '画面不能确定物种、性别、亲缘、繁育或冬眠状态，也不能用六只推算真实群体规模。',
          focalPoint: { x: 0.5, y: 0.49 },
        },
        {
          image:
            './images/species/chinese-rufous-horseshoe-bat/05-forest-edge-moth-foraging.webp',
          alt: '一只中华菊头蝠在黄昏的森林洞口附近展开翼膜，接近前方一只尚未接触的小型飞蛾',
          title: '接近猎物不等于已经捕获',
          caption:
            '这幅重建只呈现空中觅食；单只飞蛾不能说明猎物身份、捕食成功或完整食谱。',
          focalPoint: { x: 0.58, y: 0.48 },
        },
        {
          image:
            './images/species/chinese-rufous-horseshoe-bat/06-passive-acoustic-monitoring.webp',
          alt: '两名研究人员在石灰岩洞外使用一台三脚架超声麦克风、记录器和无字夹板开展被动监测，画面没有蝙蝠',
          title: '把记录留在洞外',
          caption:
            '一次被动声学访问不能确认物种、数量或趋势；重叠叫声需要形态、遗传和重复调查补充。',
          focalPoint: { x: 0.48, y: 0.53 },
        },
      ],
    },
    sources: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCES,
    featured: true,
    publishedAt: CHINESE_RUFOUS_HORSESHOE_BAT_CONTENT_DATE,
    updatedAt: CHINESE_RUFOUS_HORSESHOE_BAT_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
