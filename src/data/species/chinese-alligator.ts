import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const CHINESE_ALLIGATOR_SOURCE_DATE = '2026-08-30' as const;

const CHINESE_ALLIGATOR_CONTENT_DATE = '2026-08-30' as const;

const CHINESE_ALLIGATOR_SOURCES = [
  {
    title: 'The Reptile Database — Alligator sinensis',
    url: 'https://reptile-database.reptarium.cz/Alligator/sinensis',
    kind: 'taxonomy',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'GBIF Backbone Taxonomy — Alligator sinensis',
    url: 'https://www.gbif.org/species/2441368',
    kind: 'distribution',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Alligator sinensis (2017 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-1.RLTS.T867A3146005.en',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Crocodile Specialist Group — Conservation Status',
    url: 'https://www.iucncsg.org/pages/Conservation-Status.html',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Crocodile Specialist Group 2019 — Chinese Alligator Action Plan',
    url: 'https://www.iucncsg.org/365_docs/attachments/protarea/1726a747dff36b92c73693a8e542b872.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'CITES — Alligator sinensis',
    url: 'https://cites.org/eng/taxonomy/term/3526',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Crocodile Specialist Group 2024 — Red List Authority table',
    url: 'https://www.iucncsg.org/content_images/Darwin/SC27%20Documents.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Smithsonian National Zoo — Chinese Alligator',
    url: 'https://nationalzoo.si.edu/animals/chinese-alligator',
    kind: 'general',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Lau et al. 2025 — Land-use threats to the last wild Chinese Alligator population',
    url: 'https://doi.org/10.1017/S0030605324000978',
    kind: 'distribution',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局 2025 — 安徽开展扬子鳄野外种群资源调查',
    url: 'https://www.forestry.gov.cn/c/www/dfdt/625606.jhtml',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Thorbjarnarson et al. 2001 — Reproductive ecology of the Chinese Alligator',
    url: 'https://doi.org/10.2307/1565892',
    kind: 'ecology',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Ding et al. 2003 — Position of burrow entrances in wild Chinese Alligators',
    url: 'https://zoores.ac.cn/article/id/1011',
    kind: 'ecology',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Wang et al. 2011 — Testing reintroduction as a conservation strategy',
    url: 'https://doi.org/10.1007/s11434-011-4615-8',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Wang et al. 2007 — Acoustic signals of Chinese Alligators',
    url: 'https://doi.org/10.1121/1.2714910',
    kind: 'ecology',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Lin et al. 2018 — Temperature-dependent sex determination',
    url: 'https://doi.org/10.1016/j.scib.2018.01.004',
    kind: 'ecology',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Lin et al. 2020 — Energy-saving strategy during hibernation',
    url: 'https://doi.org/10.1016/j.isci.2020.101202',
    kind: 'ecology',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Yang et al. 2023 — Genomics of three Chinese Alligator breeding populations',
    url: 'https://doi.org/10.1111/1755-0998.13702',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
  {
    title: 'Pan et al. 2025 — Genomic insights and captive-breeding conservation potential',
    url: 'https://doi.org/10.1126/sciadv.adm7980',
    kind: 'conservation',
    accessedAt: CHINESE_ALLIGATOR_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-alligator-sinensis',
    slug: 'chinese-alligator',
    names: {
      zh: '扬子鳄',
      en: 'Chinese Alligator',
      aliases: ['Yangtze Alligator', '鼍', '中华鼍', '土龙', '猪婆龙'],
    },
    scientificName: 'Alligator sinensis',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Reptilia', '爬行纲'),
      taxon('Crocodylia', '鳄目'),
      taxon('Alligatoridae', '短吻鳄科'),
      taxon('Alligator', '短吻鳄属'),
    ),
    conservation: conservation(
      'CR',
      'decreasing',
      2017,
      'A1b; B1ab(ii,v)+2ab(ii,v); C1+2a(i)',
    ),
    distribution: {
      realms: ['freshwater', 'terrestrial'],
      continents: ['亚洲'],
      regions: [
        '长江中下游历史分布区',
        '皖东南自然野生残存斑块',
        '安徽、浙江与上海的恢复和再引入地点',
      ],
      countries: ['中国'],
      endemicTo: ['中国'],
      range:
        '中国特有。历史上分布于长江中下游湿地；现存自然野生残存种群集中在皖东南五县的隔离湿地与池塘，安徽、浙江和上海另有人工繁育、放归及其繁殖形成的恢复种群。',
      center: { lat: 30.85, lng: 118.75 },
    },
    habitats: [
      {
        name: '低地池塘与残存淡水湿地',
        realm: 'freshwater',
        description:
          '水流缓慢或静止的池塘、小型湿地、沼泽和回水水体提供取食、避难与繁殖水域；当前高质量生境很少，并非所有稻田和水库都同等适生。',
        isPrimary: true,
      },
      {
        name: '植被覆盖的土岸、岛屿与丘坡',
        realm: 'terrestrial',
        description:
          '靠近水体的土质岸坡、低丘植被和小岛为洞穴、晒背和丘状巢提供陆地空间；洞口位置比例只来自安徽 40 个洞穴的局地样本。',
      },
      {
        name: '农业水网与人工水体镶嵌',
        realm: 'freshwater',
        description:
          '水库、灌渠、稻作池塘和林地湿地组成的人类改造景观，部分残存或放归个体生活其中，同时面对抽水、污染、干扰和陡硬岸线。',
      },
    ],
    measurements: {
      length: {
        typical: 1.5,
        max: 2.16,
        unit: 'm',
        note: '1.5 米为 Smithsonian 的常见代表值，2.16 米是近代测得的极端个体；两者不构成成年封闭范围',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '螺类与其他水生软体动物',
        '甲壳类',
        '水生和陆生昆虫',
        '鱼类',
        '偶尔捕食的幼水鸟与小型啮齿类',
      ],
      description:
        '机会性捕食水边可得的小型动物，以螺类、甲壳类、昆虫和鱼较常见；钝圆后齿适合压碎硬壳，偶尔也取食小型鸟兽。圈养饲料和早期局地胃内容物比例不代表全物种野外食谱。',
    },
    activity: [
      '半水栖',
      '以夜间和晨昏活动为主',
      '掘穴',
      '季节性冬眠',
      '晒背',
      '发声交流',
    ],
    tags: [
      '中国特有种',
      '长江中下游',
      '短吻鳄科',
      '淡水湿地',
      '温度依赖性别决定',
      '保护繁育与再引入',
      'IUCN 极危',
    ],
    summary:
      '中国特有的扬子鳄体形短小、全身骨甲发达，在皖东南低地湿地越冬掘穴、夏季发声与筑丘巢；自然野生残存种群仍极度破碎。',
    description:
      '扬子鳄是短吻鳄属现存的亚洲成员，历史上生活在长江中下游湿地，现存自然野生残存种群集中于皖东南五县的孤立池塘和湿地。成体通常约 1.5 米，吻部宽短微翘，眼睑、背部和腹部都有骨质皮板。它机会性捕食螺、甲壳类、昆虫和鱼，在土岸洞穴中度过寒冷季节；繁殖期雌鳄筑植物丘巢，胚胎性别受孵化温度影响。2019 年约 200 只是皖东南自然残存种群的全年龄估计，不是成熟个体数；后续放归报告也混合了不同来源。IUCN 当前仍列极危，2017 年评估趋势为下降。',
    storySections: [
      {
        key: 'armored-asian-alligator',
        label: '亚洲短吻鳄',
        title: '宽短吻部下的一整套骨甲',
        body: '扬子鳄是短吻鳄属现存的亚洲成员。它通常约 1.5 米，头部粗壮、吻端微翘，眼睑带骨板，腹面也有美洲短吻鳄缺少的发达骨质皮板。',
      },
      {
        key: 'winter-under-the-bank',
        label: '越冬洞穴',
        title: '冷季藏进水边土岸',
        body: '扬子鳄常在 10 月末至次年 3 月末进入越冬休眠。安徽 40 个洞穴的局地调查发现，多数洞口贴近水面并离水不远；多组织研究也记录到冬季代谢、消化、肌肉活动、排泄和免疫相关通路下调。洞口调查与组织实验没有给出每座洞穴的内部结构或每只野生鳄的能量账本。',
      },
      {
        key: 'shell-crushing-feeder',
        label: '机会性捕食',
        title: '钝齿压碎水边硬壳',
        body: '螺类、甲壳类、昆虫和鱼是常见食物，钝圆后齿能处理带壳猎物；可得时也会捕食幼水鸟和小型啮齿类。早期胃内容物比例缺少可复核的样本背景，圈养中心的鼠和鱼则是人工饲料，因此自然食谱采用定性描述。',
      },
      {
        key: 'voices-across-the-pond',
        label: '水面声信号',
        title: '远距离吼叫和近距离声学交流',
        body: '半自然围栏研究把扬子鳄信号分成远距离吼叫和多种近距离声音，包括 短促笛声（toot）、吐泡、嘶声、低鸣（moo）、拍头与哀鸣（whine）。记录证明它们拥有复杂声学交流，却没有为每种声音建立固定野外词义；合唱吸引配偶或聚集群体仍需按实验条件表述。',
      },
      {
        key: 'mound-nest-and-temperature',
        label: '丘巢与孵化',
        title: '巢温参与决定胚胎性别',
        body: '雌鳄用腐败植物材料堆成丘巢，专家资料概括每窝常见 10 至 40 枚卵。控制实验中，29°C 孵化组全雌、34°C 孵化组全雄；这两个端点不是野外唯一阈值。自然史观察还记录雌鳄开巢、助孵和衔运幼体，但没有证明每只母鳄都执行相同步骤。',
      },
      {
        key: 'recovery-with-provenance',
        label: '放归与基因',
        title: '分别追踪自然残存与放归种群',
        body: '繁育中心和持续放归让部分恢复地点重新繁殖。管理者仍要把自然残存个体、放归个体、放归后代和圈养库存分开，并追踪亲缘、栖息地承载力与放归后存活。2016 年约 28,000 只和 2023 年约 10,000 只属于不同时点与机构口径的圈养数，不能替换野外种群。三个繁育群保存不同遗传成分，基因组可辅助配对与遗传救援，却不能替代湿地恢复和长期野外监测。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1879 年的扬子鳄命名记录',
        body: 'Fauvel 于 1879 年命名扬子鳄，现用学名为 Alligator sinensis。英文别名 Yangtze Alligator 对应其历史长江中下游分布。它是短吻鳄属现存的亚洲成员，眼睑、背部和腹部都有发达骨质皮板；目前自然残存种群集中在皖东南。',
      },
    ],
    keyFacts: [
      '现行学名为 Alligator sinensis Fauvel, 1879，没有公认有效亚种。',
      '它属于爬行纲、鳄目、短吻鳄科、短吻鳄属。',
      'Chinese Alligator 是英文主名，Yangtze Alligator 是常用英文别名。',
      '它是中国特有种，历史原生范围位于长江中下游湿地。',
      '自然野生残存种群集中在皖东南五县，上海和部分浙江记录属于恢复或再引入体系。',
      'IUCN 当前列为极危，2017 年评估的全球趋势为下降。',
      '当前 IUCN 判据为 A1b; B1ab(ii,v)+2ab(ii,v); C1+2a(i)。',
      'CITES 把扬子鳄列入附录 I，中国把它列为国家一级保护野生动物。',
      '2019 年约 200 只指皖东南自然野生残存种群的全年龄估计，不是成熟个体数。',
      '放归后报告的“野外数量”包含人工繁育个体，不能与自然残存基线直接相减或相加。',
      '成体总长通常约 1.5 米，近代测得的极端个体达 2.16 米。',
      'Smithsonian 资料称多数个体低于 23 千克，部分可达 38.5 千克。',
      '宽短而微上翘的吻部、眼睑骨板和腹部骨质皮板是重要识别特征。',
      '幼体底色深并带浅黄横带，不能把幼体花纹直接画到成年个体上。',
      '食物常见螺类、甲壳类、昆虫和鱼，也会机会性捕食小型鸟兽。',
      '后部钝齿适合压碎带壳猎物，但现有证据不支持固定的全物种食物比例。',
      '安徽 40 个洞穴的调查中，24 个在用、16 个废弃。',
      '同一局地样本中，85% 洞口距水体不超过 5 米；该比例不能代表全部栖息地。',
      '越冬休眠常概括为 10 月末至次年 3 月末，具体日期受场地和天气影响。',
      '冬眠组学研究发现多类代谢和生理通路下调，但没有测量每只野生鳄的能量消耗。',
      '雌鳄用植物材料筑丘巢，专家资料概括每窝常见 10 至 40 枚卵。',
      '雌鳄开巢、助孵和搬运幼体属于自然史观察，不是每只个体都必然执行的程序。',
      '29°C 全雌、34°C 全雄来自控制孵化实验，不是野外巢温的固定分界。',
      '2007 年半自然研究记录远距离吼叫和多种近距离声信号。',
      '2003 年三只成体放归试验的存活结果不能换算成物种级重引入成功率。',
      '三个繁育种群保存不同遗传成分，它们不是三支自然野生种群。',
      '2025 年保护基因组研究的野外测序样本只有 3 个，圈养与野外比较需要保留这个限制。',
    ],
    threats: [
      '长江中下游天然湿地被农业、养殖和建设用地转换，剩余池塘与湿地斑块彼此隔离。',
      '灌溉抽水和季节性水位下降压缩活动水域、食物与避暑深水区；首次放归试验已记录这一地点级风险。',
      '硬化、清除植被或反复扰动的岸坡减少洞穴、晒背、丘巢和幼体入水所需的陆水交界空间。',
      '农药、化肥和受污染猎物可能直接或间接影响个体；现有访谈关联不能给出统一的全范围效应值。',
      '极小且破碎的自然野生残存种群面临随机事件、低繁殖补充、近交和遗传漂变。',
      '干旱、异常洪水和冬季洞穴进水可能造成局地死亡，气候模型结果仍需用长期现场数据校验。',
      '少数地点仍有杀害、误捕和食用报告；低识别率也削弱社区监测和冲突报告。',
    ],
    conservationActions: [
      '保护并恢复连通的浅水湿地、池塘、植被土岸、小岛和可掘穴丘坡，避免只增加开放水面。',
      '与农户协商灌溉时序和最低水位，在春至秋活动期保留深水避难区与岸边植被。',
      '分别监测自然残存、放归、放归后野外出生和圈养个体，统一使用芯片、遗传标记与来源档案。',
      '放归前评估水文、岸坡、食物、污染、人为干扰、疾病和承载力；放归后持续追踪存活、扩散与繁殖。',
      '用全基因组亲缘关系和繁育谱系减少近亲配对，并在跨繁育群混配前评估有害变异与局地适应。',
      '建立保护区内外的社区识别、报告、补偿和联合巡护机制，执行国家一级保护与 CITES 附录 I 管理。',
      '把巢数、卵数、幼体补充、成年存活、水位、污染和遗传多样性纳入同一长期监测框架。',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'usual-total-length',
        label: '常见总长',
        value: '约1.5',
        unit: '米',
        note: 'Smithsonian 的常见代表值，不是成年封闭范围；近代极端记录为 2.16 米',
      },
      {
        key: 'winter-dormancy',
        label: '常见越冬期',
        value: '10月末—3月末',
        note: '研究资料的季节概括；出入洞日期随场地、气温和年份改变',
      },
      {
        key: 'typical-clutch-summary',
        label: '常见窝卵数',
        value: '10—40',
        unit: '枚',
        note: 'CSG 的物种级概括；单巢、野巢和圈养中心数据都有差异',
      },
      {
        key: 'laboratory-sex-endpoints',
        label: '实验孵化端点',
        value: '29♀ / 34♂',
        unit: '°C',
        note: '控制实验分别得到全雌和全雄；不是天然巢的固定性别分界',
      },
    ],
    media: {
      image:
        './images/species/chinese-alligator/01-lowland-wetland-adult-portrait.webp',
      alt: '皖东南式低丘农业谷地的湿地池塘边，一只深灰色成年扬子鳄完整伏在植被土岸上',
      focalPoint: { x: 0.68, y: 0.63 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/chinese-alligator/02-full-body-diagnostic-profile.webp',
          alt: '潮湿池塘土岸上，一只深灰色成年扬子鳄以完整左向侧面低伏，宽短吻部、背部骨甲和连续长尾清楚可见',
          title: '宽短吻部连接一副紧凑骨甲身体',
          caption:
            'AI生成科学情景重建；侧面姿态只支持宽短微翘吻与发达背甲的定性辨认。透视和遮挡不能测定腹部骨板、性别、年龄、体重、绝对体长或个体身份。',
          focalPoint: { x: 0.5, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/chinese-alligator/03-bank-burrow-entrance.webp',
          alt: '冬末水边湿土上，一只完整成年扬子鳄伏在一个有根系和嫩草环绕的椭圆土岸洞口旁',
          title: '静水旁的土岸洞口',
          caption:
            'AI生成科学情景重建；画面只显示一只鳄与一个水边洞口，不能证明个体挖掘或使用该洞、正在冬眠、固定出洞日期，也不揭示内部房间、水池、通气孔或隧道结构。',
          focalPoint: { x: 0.62, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/chinese-alligator/04-summer-bellowing-posture.webp',
          alt: '夏季清晨池塘中，一只扬子鳄身体浸在浅水里，头部上抬、尾基弓出水面，身旁形成低幅波纹',
          title: '抬头姿态与低幅水纹',
          caption:
            'AI生成科学情景重建；无声静帧只能表达与吼叫观察相符的姿态，不能证明声音发生、测量频率或时长、识别性别、确认合唱、指定求偶功能或推断远处个体回应。',
          focalPoint: { x: 0.67, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/chinese-alligator/05-vegetation-mound-nest.webp',
          alt: '夏末湿地池塘边，一只完整成年扬子鳄低伏在由腐叶、草茎和细枝堆成的完整丘巢旁',
          title: '腐植材料堆成一座完整丘巢',
          caption:
            'AI生成科学情景重建；画面只把一只成年鳄与一座植被丘并置，外形不能确定性别、亲缘、守巢、巢主、窝卵存在与数量、巢温、幼体叫声因果、孵化率或普遍母护行为。',
          focalPoint: { x: 0.54, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/chinese-alligator/06-reintroduction-radio-monitoring.webp',
          alt: '雾气笼罩的恢复湿地中，两名野外人员在水道一侧使用定向天线和记录板，另一侧小岛上只有一只完整扬子鳄',
          title: '隔水开展非接触无线电监测',
          caption:
            'AI生成科学情景重建；画面不证明个体为圈养繁育或放归来源、携带可工作的发射器、被接收机检出、已经适应、成功繁殖或长期存活，也不识别人员、机构和地点。',
          focalPoint: { x: 0.68, y: 0.49 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: CHINESE_ALLIGATOR_SOURCES,
    featured: true,
    publishedAt: CHINESE_ALLIGATOR_CONTENT_DATE,
    updatedAt: CHINESE_ALLIGATOR_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
