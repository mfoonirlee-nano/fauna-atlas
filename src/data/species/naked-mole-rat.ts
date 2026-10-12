import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const NAKED_MOLE_RAT_SOURCE_DATE = '2026-09-02' as const;

const NAKED_MOLE_RAT_CONTENT_DATE = '2026-09-02' as const;

const NAKED_MOLE_RAT_SOURCES = [
  {
    title: 'Mammal Diversity Database v2.5: Heterocephalus glaber',
    url: 'https://www.mammaldiversity.org/taxon/1001280/',
    kind: 'taxonomy',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Mammal Diversity Database v2.5: Heterocephalus phillipsi',
    url: 'https://www.mammaldiversity.org/taxon/1007027/',
    kind: 'taxonomy',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Patterson and Upham 2014: Heterocephalidae as a distinct family',
    url: 'https://doi.org/10.1111/zoj.12201',
    kind: 'taxonomy',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Uhrová et al. 2025/2026: More than one species of the naked mole-rat',
    url: 'https://doi.org/10.1038/s42003-025-09338-4',
    kind: 'taxonomy',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Heterocephalus glaber (2016 assessment; 2017 errata)',
    url: 'https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T9987A22184136.en',
    kind: 'conservation',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Jarvis and Sherman 2002: Heterocephalus glaber',
    url: 'https://doi.org/10.1644/0.706.1',
    kind: 'general',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Jarvis 1981: Eusociality in a mammal',
    url: 'https://doi.org/10.1126/science.7209555',
    kind: 'ecology',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Faulkes et al. 1990: Social suppression of ovarian cyclicity',
    url: 'https://doi.org/10.1530/jrf.0.0880559',
    kind: 'ecology',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Sherman et al. 1999: Litter sizes and mammary numbers',
    url: 'https://doi.org/10.2307/1383241',
    kind: 'ecology',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: "O'Riain et al. 1996: A dispersive morph in the naked mole-rat",
    url: 'https://doi.org/10.1038/380619a0',
    kind: 'ecology',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Withers and Jarvis 1980: Huddling, thermoregulation and oxygen consumption',
    url: 'https://doi.org/10.1016/0300-9629(80)90154-1',
    kind: 'ecology',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Barker et al. 2021: Vocal dialects and social identity',
    url: 'https://doi.org/10.1126/science.abc6588',
    kind: 'ecology',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Park et al. 2017: Fructose-driven glycolysis supports anoxia resistance',
    url: 'https://doi.org/10.1126/science.aab3896',
    kind: 'general',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Ruby et al. 2018: Mortality rates defy Gompertzian laws',
    url: 'https://doi.org/10.7554/eLife.31157',
    kind: 'general',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Yamakawa et al. 2025: Behavioral diversity in naked mole-rat societies',
    url: 'https://doi.org/10.1126/sciadv.ady0481',
    kind: 'ecology',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-heterocephalus-glaber',
    slug: 'naked-mole-rat',
    names: {
      zh: '裸鼹鼠',
      en: 'Common Naked Mole-rat',
      aliases: ['Naked Mole-rat', 'Naked Mole Rat', 'Desert Mole Rat', 'Sand Puppy'],
    },
    scientificName: 'Heterocephalus glaber',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Rodentia', '啮齿目'),
      taxon('Heterocephalidae', '裸鼹鼠科'),
      taxon('Heterocephalus', '裸鼹鼠属'),
    ),
    conservation: conservation('LC', 'stable', 2016),
    distribution: {
      realms: ['terrestrial'],
      continents: ['非洲'],
      regions: ['非洲之角', '东非干旱与半干旱带', '埃塞俄比亚高地东缘', '肯尼亚中部与南部干旱区'],
      countries: ['吉布提', '埃塞俄比亚', '肯尼亚', '索马里'],
      range:
        '当前狭义种分布于吉布提、埃塞俄比亚中部和东部、肯尼亚中部和南部，以及索马里中部的干旱与半干旱地区。索马里兰南部原归本种的谱系现列为 Heterocephalus phillipsi。各国记录仍需进一步核实具体种群边界。',
      center: { lat: 4.5, lng: 42 },
    },
    habitats: [
      {
        name: '干旱和半干旱开阔稀树草原',
        realm: 'terrestrial',
        description:
          '稀疏地表植被下的块根和鳞茎形成斑块状食物；拆种前综述记录的常见年雨量约为200至400毫米。',
        isPrimary: true,
      },
      {
        name: '干草原与灌丛',
        realm: 'terrestrial',
        description:
          '地下生活缓冲地表温度波动，适宜区仍受到极端高温、最低降雨和土壤盐度共同限制。',
        isPrimary: true,
      },
      {
        name: '红土、砂土和石膏土中的地下洞系',
        realm: 'terrestrial',
        description:
          '群落在可掘土层中连接巢室、食物斑块和较深通道；降雨软化土壤后更容易扩建觅食洞。',
        isPrimary: true,
      },
      {
        name: '根茎作物和低强度农业边缘',
        realm: 'terrestrial',
        description:
          '地下根茎会吸引取食并引发局地冲突，现有资料不足以把农地列为主要天然生境或量化成全范围威胁。',
      },
    ],
    measurements: {
      length: {
        min: 10.3,
        max: 13.6,
        unit: 'cm',
        note: '42只野生成体的头体长范围，不含3.2至4.7厘米尾长；数据来自2002年拆种前综述。',
      },
      weight: {
        min: 9,
        max: 69,
        unit: 'g',
        note: '651只野生成体的观测范围，样本平均33.9 ± 4.9克；繁殖状态、年龄和食物会改变体重。',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: ['鳞茎', '根', '块根', '其他地下地生植物', '盲肠便'],
      description:
        '地下植物同时提供食物与主要水分，后肠发酵和重新摄食盲肠便帮助利用高纤维食物。旧广义种观察记录个体局部啃食大型块根、回填后再访；地点记录不能设成当前狭义种各地的固定菜单，也不能证明每枚块根都会再生。',
    },
    activity: [
      '地下活动不宜按地表昼夜简单归类；圈养群落全天均可活动，隔离个体又可能出现昼夜节律',
      '最前成员以位于闭合嘴唇前的白色门齿啃松土壤，后方成员沿窄洞向后扫送松土',
      '向前时用吻须接触洞壁，倒退时摆动尾部触毛，在狭窄洞道中无需转身',
      '群落具有世代重叠、合作育幼和繁殖分工，成员行为会随年龄、体型与群落状态改变',
      '最常见的soft chirp携带可学习的群落方言，不能等同人类词句或固定个体语言',
    ],
    tags: [
      '脊索动物门',
      '哺乳纲',
      '啮齿目',
      '裸鼹鼠科',
      '非洲之角',
      '地下生活',
      '植食',
      '真社会性',
      '合作育幼',
      '社会性繁殖抑制',
      '门齿掘洞',
      '群落方言',
      '低氧耐受',
      'IUCN无危',
      'CITES未列入',
    ],
    summary:
      '裸鼹鼠在非洲之角的干旱地区地下生活，用伸在嘴唇前的门齿掘洞，吃块根和鳞茎。群体成员共同挖洞、育幼和防御，繁殖通常集中在一只雌性和少数雄性。',
    description:
      '裸鼹鼠是小型啮齿动物，皮肤松弛，被毛稀疏，吻部和尾部保留触毛，帮助它在狭窄洞道中前进和倒退。地下植物提供食物和主要水分，雨水软化土壤后，群落更容易扩建觅食洞。未繁殖的雌性受到社会环境抑制，离群或繁殖雌性消失后可以恢复繁殖。2025 年的分类研究把 Heterocephalus phillipsi 从广义裸鼹鼠中拆出，2016 年的无危评估则仍对应拆分前的范围。',
    storySections: [
      {
        key: 'one-family-now-two-species',
        label: '分类',
        title: '实验室种群主要来自肯尼亚少数谱系',
        body: 'MDD v2.5把裸鼹鼠置于独立的裸鼹鼠科。2025年基因组、牙齿和环境研究把索马里兰南部谱系恢复为Heterocephalus phillipsi，本属因此包含两个现生种。世界各地实验室建群动物多来自肯尼亚少数地点，主要属于H. g. ansorgei；在这一谱系上发现的寿命、低氧和交流机制不能未经验证代表H. phillipsi或整个属。',
      },
      {
        key: 'incisors-before-lips',
        label: '解剖',
        title: '门齿挖土时，嘴唇仍能闭合',
        body: '上下两对白色门齿伸到嘴唇外，啃松土壤时，门齿后的口腔褶皱关闭入口。最前成员负责咬土，后方成员沿窄洞向后扫送松土。松弛皮肤让身体在狭处扭转，吻须和尾部触毛分别帮助前进与倒退；它没有鼹鼠式铲掌，也不是普通无毛家鼠。',
      },
      {
        key: 'one-breeder-reversible-suppression',
        label: '社会',
        title: '繁殖分工随社会环境改变',
        body: '群落具有合作育幼、世代重叠和繁殖分工，繁殖通常集中在一只雌性和一至三只雄性。其他雌性的卵巢周期受到社会环境抑制，离群或繁殖雌性消失后可恢复。成员的挖洞、育幼和防御频率会随年龄、体型与群落状态改变，不能照搬蚂蚁的终生固定阶级。',
      },
      {
        key: 'rain-opens-a-digging-window',
        label: '生态',
        title: '降雨后更容易扩建觅食洞',
        body: '地下块根分布零散，干季硬土让新洞成本升高。土层受雨水软化后，群落集中扩建觅食洞；遇到小块根斑块时洞道细密分枝，遇到大型地生植物时则局部取食、回填后再访。一个85至90只群落一年掘出2.3至2.9千米新洞的旧记录来自单一地点，不能写成当前狭义种的年均值。',
      },
      {
        key: 'dialect-huddle-and-no-oxygen',
        label: '生理',
        title: '聚集、叫声与低氧适应的实验',
        body: '四只贴靠的聚集实验显示，动物在 20°C 下的单位质量热导降低。回放和寄养实验发现，轻柔唧叫声具有可学习的群落方言。另一项密闭实验记录个体在 0% 氧条件下存活 18 分钟，并发现低氧时脑和心脏可利用果糖糖酵解供能。这些结果各有独立的实验条件，尤其不能把实验存活时间当作野外零氧纪录。',
      },
      {
        key: 'least-concern-before-the-split',
        label: '保护',
        title: '无危标签早于当前种界',
        body: 'IUCN在2016年把旧广义裸鼹鼠评为LC、趋势稳定，没有估算全球成熟个体数。MDD名称使用记录中的“IUCN (2024)”只是数据库引用年，不是一次2024年新评估。2025年拆出的H. phillipsi当前仍是NE，H. glaber的范围也随之收窄；下一步需要按凭证和遗传边界重做范围、趋势与威胁调查。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1842 年描述的东北非洲啮齿动物',
        body: 'Rüppell 在 1842 年描述并命名 Heterocephalus glaber，模式产地记为埃塞俄比亚和绍阿地区，现用学名保留了原始组合。它后来因群体繁殖分工和特殊生理受到研究关注。新的遗传与形态研究又重新划定属内种界，因此解读早期野外记录和实验结论时需要留意样本来自哪一谱系。',
      },
    ],
    keyFacts: [
      'MDD v2.5接受名为Heterocephalus glaber Rüppell, 1842，英文主名为Common Naked Mole-rat。',
      '现行分类采用独立的裸鼹鼠科；2002 年综述使用的 Bathyergidae 反映当时分类。',
      '2025年研究恢复H. phillipsi，MDD当前承认裸鼹鼠属有两个现生种。',
      '当前狭义种在吉布提、埃塞俄比亚、肯尼亚和索马里有记录，分布集中于适宜的干旱与半干旱地区。',
      'IUCN当前为LC、趋势稳定、评估年2016；MDD所记IUCN (2024)只是名称使用引用年。',
      '2016年IUCN使用拆种前广义种边界，没有给出全球成熟个体总数；H. phillipsi当前NE。',
      '2026年现行CITES附录未列入本种，这不免除范围国许可、动物伦理或其他跨境规则。',
      '42只野生成体的头体长为10.3至13.6厘米，尾另长3.2至4.7厘米。',
      '651只野生成体平均体重33.9 ± 4.9克，观测范围9至69克。',
      '它没有完整被毛，却有遍布身体、吻部和尾部的稀疏触毛。',
      '白色门齿伸在闭合嘴唇前，用于掘土与取食；前足不是鼹鼠式铲掌。',
      '地下食物包括鳞茎、根、块根和其他地生植物，水分主要来自多汁食物。',
      '旧广义种群落观测从不超过约10只到超过290只，平均约75至80只。',
      '繁殖通常集中在一只雌性和一至三只雄性，非繁殖雌性受到可逆的社会性生殖抑制。',
      '野外 82 窝平均有 11.3 ± 6.2 只幼仔，范围为 1 至 28 只。',
      '常见的轻柔唧叫声（soft chirp）具有可学习的群落方言，早期寄养幼仔会学习养群的叫声。',
      '四只聚集实验降低了20°C下的单位质量热导，没有把动物变成普通恒温模式。',
      '0%氧环境下存活18分钟来自密闭实验，不是野外屏息纪录或安全阈值。',
      '超过3,000条圈养记录中有个体活到30岁，观测期死亡风险未呈典型年龄增长；这不等于永生。',
      '生理与行为研究集中在肯尼亚少数来源的H. g. ansorgei圈养谱系，不能自动代表H. phillipsi。',
    ],
    threats: [
      '2016年IUCN没有识别旧广义种的全范围主要威胁；这项结论早于2025年拆种，不能替代两种的独立调查',
      '根茎作物取食会引发局地害兽控制，现有资料没有量化其对当前狭义种全球趋势的影响',
      '过度放牧、土地转化、极端热旱和盐渍化可能改变地下食物与可掘土层，目前没有全种损失比例',
      '政治不稳定和野外取样不足使索马里、吉布提与埃塞俄比亚部分范围缺少现代凭证和趋势资料',
      '拆种前评估与当前种界错位可能掩盖小范围谱系风险，H. phillipsi仍未获得独立IUCN评估',
    ],
    conservationActions: [
      '按H. glaber、H. phillipsi及H. glaber内部谱系整理点位、凭证标本和遗传样本',
      '在四个范围国结合地表土丘、洞系占用和遗传鉴定开展标准化监测，避免把一个土丘等同一只动物',
      '保留干旱与半干旱稀树草原、灌丛、地下地生植物和可掘土壤组成的完整生态系统',
      '记录根茎作物损失、控制手段和误杀，采用有目标的冲突缓解措施',
      '检验放牧、土地转化、极端热旱和盐渍化对地下食物及可掘土层的影响',
      '推动拆种后的独立IUCN评估，并让科研采样和运输遵守范围国许可、动物伦理及获取与惠益分享规则',
    ],
    metrics: {
      adultLengthCm: [10.3, 13.6],
      adultMassKg: [0.009, 0.069],
    },
    featuredStats: [
      {
        key: 'iucn-status',
        label: 'IUCN',
        value: 'LC',
        note: '2016年旧广义种评估，趋势稳定；评估早于H. phillipsi拆分。',
      },
      {
        key: 'head-body-length',
        label: '成体头体长',
        value: '10.3–13.6',
        unit: '厘米',
        note: '42只野生成体的范围，不含3.2至4.7厘米尾长；来自拆种前综述。',
      },
      {
        key: 'colony-size',
        label: '旧资料群落规模',
        value: '≤10–≥290',
        unit: '只',
        note: '拆种前野外观测跨度，平均约75至80只；不是当前每个群落或两种裸鼹鼠的固定值。',
      },
      {
        key: 'zero-oxygen-experiment',
        label: '0%氧实验存活',
        value: '18',
        unit: '分钟',
        note: '密闭实验中的存活与复氧恢复，不是野外屏息纪录、安全阈值或无限耐受。',
      },
    ],
    media: {
      image: './images/species/naked-mole-rat/01-underground-tunnel-portrait.webp',
      alt: '狭窄红褐色土洞中，恰好一只棕粉色裸鼹鼠朝镜头斜向前进，白色前伸门齿、四只短足和细尾完整可见',
      focalPoint: { x: 0.69, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image: './images/species/naked-mole-rat/02-full-body-diagnostic-profile.webp',
          alt: '平整土洞中，恰好一只棕粉色成年裸鼹鼠严格侧向站立，从白色前伸门齿到细尾尖和四足均未裁切',
          title: '门齿、触毛和短尾构成的识别组合',
          caption:
            '侧面形态重建显示白色门齿位于闭合嘴唇前，松弛皮肤仍有稀疏触毛；画面不是尺标，不能测量体长、体重、年龄，也不能区分两个H. glaber亚种。',
          focalPoint: { x: 0.52, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/naked-mole-rat/03-cooperative-digging-chain.webp',
          alt: '狭窄土洞中，恰好三只成年裸鼹鼠排成单列，前方个体以白色门齿咬土，后两只向后扫送一小堆松土',
          title: '沿窄洞传递松土的挖掘链',
          caption:
            '三只个体重建门齿松土和后方成员扫土的挖掘链；静态画面不能测量掘进速度、搬土量、洞长或职责稳定性，也不证明野外每次施工恰有三只。',
          focalPoint: { x: 0.55, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/naked-mole-rat/04-partial-geophyte-feeding.webp',
          alt: '地下觅食侧洞中，恰好一只裸鼹鼠以白色门齿啃食一枚仍埋在土中并连着根系的大型块根局部',
          title: '埋在原位的地下植物食物',
          caption:
            '旧广义种观察支持对大型块根的局部取食和再访；画面不能鉴定植物种类、证明块根会再生或曾被同一个体访问，也不能代表拆种后每个谱系的固定食谱。',
          focalPoint: { x: 0.51, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/naked-mole-rat/05-breeding-female-with-pups.webp',
          alt: '地下巢室的干燥植物纤维上，恰好一只身体较长的成年裸鼹鼠与六只可分别计数的粉色幼仔伏在一起',
          title: '一只繁殖雌性与六仔情景',
          caption:
            '六仔处于旧广义种野外 1 至 28 仔的记录范围内；重建画面不能确认成体性别、亲子关系、哺乳和幼仔日龄，也不能据此判断平均窝仔数。',
          focalPoint: { x: 0.52, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/naked-mole-rat/06-nest-chamber-huddle.webp',
          alt: '较宽地下巢室内，恰好六只成年裸鼹鼠在干燥植物纤维上身体相贴，每只头部和躯干均可分辨',
          title: '巢室里的贴靠聚集',
          caption:
            '六只成体重建巢室聚集姿态；单张图无法测量体温、代谢、热流、氧气或二氧化碳，也不能证明它们属于固定群组、同龄或完整群落。',
          focalPoint: { x: 0.52, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: NAKED_MOLE_RAT_SOURCES,
    featured: true,
    publishedAt: NAKED_MOLE_RAT_CONTENT_DATE,
    updatedAt: NAKED_MOLE_RAT_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
