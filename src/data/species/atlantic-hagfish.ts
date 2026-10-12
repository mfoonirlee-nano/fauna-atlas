import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const ATLANTIC_HAGFISH_SOURCE_DATE = '2026-08-31' as const;

const ATLANTIC_HAGFISH_CONTENT_DATE = '2026-08-31' as const;

const ATLANTIC_HAGFISH_SOURCES = [
  {
    title: 'WoRMS — Myxine glutinosa (AphiaID 101170)',
    url: 'https://www.marinespecies.org/rest/AphiaRecordByAphiaID/101170',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Myxine limosa (AphiaID 271309)',
    url: 'https://www.marinespecies.org/rest/AphiaRecordByAphiaID/271309',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title: "Eschmeyer's Catalog of Fishes — Myxine glutinosa",
    url: 'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=6425',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title:
      'Hagfish phylogeny and taxonomy, with description of the new genus Rubicundus',
    url: 'https://doi.org/10.1111/jzs.12035',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title: 'Review of New World hagfishes of the genus Myxine',
    url: 'https://spo.nmfs.noaa.gov/sites/default/files/pdf-content/1995/933/wisner.pdf',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title: 'DFO — Revision of fish catches from the CCGS Teleost ecosystem survey',
    url: 'https://waves-vagues.dfo-mpo.gc.ca/library-bibliotheque/41045324.pdf',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title: 'The genome sequence of the Hagfish, Myxine glutinosa',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12699212/',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title:
      'National Museum of Marine Biology and Aquarium — Myxine glutinosa specimen',
    url: 'https://helloocean.nmmba.gov.tw/nmmba_front/SpecimenDetail.aspx?id=39639',
    kind: 'general',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Myxine glutinosa assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2011-1.RLTS.T196057A8988080.en',
    kind: 'conservation',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title:
      'IUCN — Overview of the Conservation Status of Mediterranean Marine Fishes',
    url: 'https://portals.iucn.org/library/efiles/documents/RL-262-001.pdf',
    kind: 'conservation',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title:
      'FAO — The Living Marine Resources of the Eastern Central Atlantic, Volume 2',
    url: 'https://www.fao.org/3/i5712e/i5712e.pdf',
    kind: 'distribution',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title: 'UK Government SEA8 — Fish and fish assemblages of the British Isles',
    url: 'https://assets.publishing.service.gov.uk/media/5a7c89e1e5274a0bb7cb7b36/SEA8_TechRep_Fish_of_BI.pdf',
    kind: 'distribution',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title: 'On the Feeding of the Hagfish Myxine glutinosa in the North Sea',
    url: 'https://doi.org/10.1017/S0025315400024413',
    kind: 'ecology',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title:
      'Direct evidence of an efficient energy transfer pathway from jellyfish carcasses',
    url: 'https://doi.org/10.1038/s41598-017-17557-x',
    kind: 'ecology',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title:
      'Rapid scavenging of jellyfish carcasses reveals importance to deep-sea food webs',
    url: 'https://doi.org/10.1098/rspb.2014.2210',
    kind: 'ecology',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title: 'A cineradiographic study of respiration in Myxine glutinosa',
    url: 'https://doi.org/10.1242/jeb.37.3.474',
    kind: 'ecology',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title:
      'Cutaneous and subcutaneous sensory receptors of Myxine glutinosa',
    url: 'https://doi.org/10.1007/BF00318754',
    kind: 'ecology',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title: 'Thread Cells from the Slime Glands of Hagfish',
    url: 'https://doi.org/10.1111/j.1463-6395.1981.tb00623.x',
    kind: 'ecology',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title:
      'Effect of ionic strength and seawater cations on hagfish slime formation',
    url: 'https://doi.org/10.1038/s41598-018-27975-0',
    kind: 'ecology',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title: 'Different Types of Body Movement in the Hagfish, Myxine glutinosa',
    url: 'https://doi.org/10.1038/188595a0',
    kind: 'ecology',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title: 'Characterization of body knotting behavior used for escape in hagfishes',
    url: 'https://doi.org/10.1111/jzo.12752',
    kind: 'ecology',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title: 'Emptying and refilling of slime glands in Atlantic and Pacific hagfishes',
    url: 'https://doi.org/10.1242/jeb.172254',
    kind: 'ecology',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title:
      'The use of Atlantic hagfish as a bioindicator near dumped chemical warfare agents',
    url: 'https://doi.org/10.1016/j.marenvres.2020.105097',
    kind: 'conservation',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
  {
    title: 'FishBase — Myxine glutinosa current summary and IUCN assessment date',
    url: 'https://www.fishbase.se/summary/Myxine-glutinosa.html',
    kind: 'general',
    accessedAt: ATLANTIC_HAGFISH_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-myxine-glutinosa',
    slug: 'atlantic-hagfish',
    names: {
      zh: '大西洋盲鳗',
      en: 'Atlantic Hagfish',
      aliases: ['Common Hagfish', 'Common Hag'],
    },
    scientificName: 'Myxine glutinosa',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Myxini', '盲鳗纲'),
      taxon('Myxiniformes', '盲鳗目'),
      taxon('Myxinidae', '盲鳗科'),
      taxon('Myxine', '盲鳗属'),
    ),
    conservation: conservation('LC', 'unknown', 2009),
    distribution: {
      realms: ['marine'],
      continents: ['欧洲', '非洲'],
      regions: [
        '巴伦支海、挪威海与北海',
        '斯卡格拉克海峡、卡特加特海峡与西波罗的海边缘',
        '不列颠群岛及欧洲大西洋大陆架',
        '伊比利亚半岛、摩洛哥与西地中海边缘',
      ],
      countries: [
        '俄罗斯',
        '挪威',
        '瑞典',
        '丹麦',
        '德国',
        '荷兰',
        '比利时',
        '英国',
        '爱尔兰',
        '法国',
        '西班牙',
        '葡萄牙',
        '摩洛哥',
        '阿尔及利亚',
        '意大利',
        '克罗地亚',
      ],
      range:
        '严格按现行种界分布于东北和东部大西洋，从巴伦支海、挪威海与北海向南，经欧洲大西洋岸至伊比利亚半岛、摩洛哥及西地中海边缘。格陵兰和冰岛记录仍需凭证或遗传复核；西大西洋旧称 Myxine glutinosa 的记录现归 Myxine limosa，不纳入本范围。',
      center: { lat: 57, lng: 3 },
    },
    habitats: [
      {
        name: '冷水软泥大陆架与上部陆坡',
        realm: 'marine',
        description:
          '稳定、较高盐度的泥质海底提供主要生境；个体能钻入表层沉积物，也会离开泥底游动。一个海域的盐度或深度记录不能充当全范围硬边界。',
        isPrimary: true,
      },
      {
        name: '挪威峡湾深水盆地',
        realm: 'marine',
        description:
          '峡湾泥底和富有机碎屑的深水区可供藏身与觅食；Sognefjord 的诱饵相机曾记录个体取食水母尸体。',
      },
      {
        name: '北海稳定细粒沉积区',
        realm: 'marine',
        description:
          '北海研究把出现记录与稳定软泥和较高盐度联系起来，也指出常规拖网和底栖采样容易漏掉能游动、钻泥的盲鳗。',
      },
      {
        name: '西地中海与北非陆坡泥底',
        realm: 'marine',
        description:
          '区域资料记录从大陆架延伸至超过 1000 米的陆坡水域；这些局地记录不能拼成全种精确深度上下限。',
      },
    ],
    measurements: {
      length: {
        max: 0.45,
        unit: 'm',
        note:
          '严格东大西洋材料的已发表最大总长，不代表典型成体长度；79—95 厘米等大型记录来自西大西洋旧广义名资料，现应归 Myxine limosa，未纳入本字段',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '北方长额虾及其他底栖无脊椎动物',
        '鱼类等动物腐肉',
        '直接观察记录中的水母尸体',
      ],
      description:
        '大西洋盲鳗是机会性底栖肉食者和食腐者。北海资料支持取食虾类与其他底栖动物，挪威峡湾诱饵相机直接记录了水母尸体取食。鱼类腐肉也是食物来源，但现有证据不足以把它写成只吃死鱼，或给出全范围食物比例。',
    },
    activity: [
      '在大陆架和陆坡软泥底活动',
      '钻入表层泥中并在近底层游动',
      '借鼻部化学感受与头部感觉触须寻找食物',
      '受扰时从体侧腺孔释放蛋白丝束与黏蛋白囊泡',
      '能将柔软身体打结并把结沿身体移动',
      '严格东大西洋口径下缺少统一昼夜节律证据',
    ],
    tags: [
      '盲鳗纲',
      '无颌类',
      '东大西洋',
      '海洋底栖',
      '软泥底',
      '机会性肉食',
      '食腐',
      '纤维防御黏液',
      '身体打结',
      '单对外部鳃孔',
    ],
    summary:
      '大西洋盲鳗是东大西洋冷水软泥底的无颌动物。它以单一鼻孔和感觉触须寻找食物，通过六对内部鳃囊呼吸，并能让蛋白丝束与黏蛋白在海水中迅速展开成纤维黏液。',
    description:
      '大西洋盲鳗属于盲鳗纲盲鳗科，身体细长无鳞，没有成对鳍和上下颌；口内可前伸、回收的角质齿板负责抓取和撕扯食物。现行分类把东大西洋 Myxine glutinosa 与西大西洋 Myxine limosa 分开，因此北美体尺、繁殖、渔业和行为定量资料不能继续混用。严格东大西洋已发表最大总长为 45 厘米。它生活在大陆架至陆坡的稳定软泥底，捕食底栖无脊椎动物，也利用鱼类与水母腐肉。六对内部鳃囊的排水管在每侧汇入一个外部鳃孔；体侧黏液腺释放的卷曲蛋白丝束和黏蛋白囊泡遇海水后形成纤维水凝胶。IUCN 沿用 2009 年无危评估，但该评估早于现行东西大西洋拆分，严格东大西洋种群趋势仍未知。',
    storySections: [
      {
        key: 'one-name-two-atlantics',
        label: '种名拆分',
        title: '东、西大西洋盲鳗重新分开',
        body: '北美文献长期把西大西洋盲鳗写成 Myxine glutinosa。1995 年形态修订恢复 Myxine limosa，2013 年 16S 与 COI 数据确认它与东大西洋种不同。严格本种采用欧洲与北非一侧范围，加拿大渔业和 95 厘米体长都属于被拆出的西大西洋种。',
      },
      {
        key: 'six-pouches-two-exits',
        label: '鳃囊呼吸',
        title: '六对鳃囊，外面却只见左右两个出口',
        body: '水从头端单一鼻孔进入，帆状结构把水推过咽部和六对圆囊状鳃。每侧六条排水管在皮下汇合，最终只从一个外部鳃孔排出；左侧鳃孔还接入咽皮管。六对内部鳃囊不是六对外露鳃裂，这一点也把它与海七鳃鳗的外形分开。',
      },
      {
        key: 'life-under-soft-mud',
        label: '软泥底栖',
        title: '钻泥与游动使常规调查容易漏检',
        body: '北海研究把大西洋盲鳗与稳定、高盐度软泥底联系起来。它能钻泥，也能离开底面游动；只用底栖抓斗或常规拖网会低估这种动物。诱饵陷阱和相机可以补足检出，但一次空陷阱绝不等于当地没有盲鳗。',
      },
      {
        key: 'slime-built-in-seawater',
        label: '纤维黏液',
        title: '海水完成防御材料的最后一步',
        body: '黏液腺释放卷曲蛋白丝束和装有黏蛋白的囊泡。挪威个体的新鲜分泌物实验显示，海水的离子强度和二价阳离子协调丝束展开、囊泡破裂与保水，不到一秒便形成纤维水凝胶。这个时间来自受控材料混合，不是野外捕食反应计时。',
      },
      {
        key: 'knot-without-a-jaw',
        label: '身体打结',
        title: '身体打结帮助清除黏液',
        body: 'Oslofjord 的早期观察记录大西洋盲鳗打结并把结沿身体移动，以清除黏液。后来的精细逃脱实验使用美国 Massachusetts 个体，现应归 Myxine limosa；因此本种能打结有东大西洋证据，结型偏好和逃脱次数却不能照搬北美数据。',
      },
      {
        key: 'least-concern-needs-a-recheck',
        label: '旧评估',
        title: '全球评估早于现行种界',
        body: 'IUCN 的 LC 评估日期是 2009 年，当时资料仍把东西大西洋记录放在同一个名称下。严格东大西洋的数量与趋势没有可靠综合；Skagerrak 沉船附近又已记录局地污染生物效应。更新评估、保存凭证和统一渔获种名，比从 LC 推导稳定更重要。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的名字后来收回东大西洋',
        body: '林奈于 1758 年命名大西洋盲鳗，现用学名为 Myxine glutinosa。北美资料长期沿用这个名称，1995 年形态修订恢复了西大西洋种 Myxine limosa，2013 年基因数据进一步确认两者不同。因此加拿大渔业和 95 厘米体长等旧记录需归回西大西洋种。',
      },
    ],
    keyFacts: [
      '现行 Myxine glutinosa 只采用东大西洋口径，西大西洋种为 Myxine limosa。',
      'WoRMS 分别接受 Myxine glutinosa 和 Myxine limosa。',
      '2013 年 16S 与 COI 数据确认东西大西洋两种不同。',
      '2025 年染色体级基因组使用采自瑞典 Kristineberg 的东大西洋凭证个体。',
      '它属于无颌类，不是鳗鲡类。',
      '身体无鳞，也没有成对鳍。',
      '头端只有一个正中鼻孔。',
      '头部有六根感觉触须，包括四根鼻须和两根口须。',
      '退化眼位于皮下，不能把外形描述扩大成已证实完全没有光感。',
      '它没有上下颌，角质齿板可以前伸和回收。',
      '标准解剖有六对内部鳃囊。',
      '每侧鳃囊排水管只汇入一个外部鳃孔。',
      '左外部鳃孔还与咽皮管相连。',
      '严格东大西洋已发表最大总长为 45 厘米。',
      '79 至 95 厘米等大型记录来自西大西洋旧广义名，已排除。',
      '体重、寿命和典型成体长度缺少可用于严格东大西洋全种的统一范围。',
      '主要生活在冷水大陆架与陆坡的稳定软泥底。',
      '钻泥和游动会使常规底栖调查低估它。',
      '北海资料支持取食虾类和其他底栖无脊椎动物。',
      '挪威峡湾相机直接记录它取食水母尸体。',
      '两次水母诱饵部署中的 2 和 14 分钟到达时间不是典型响应时间。',
      '黏液由卷曲蛋白丝束与黏蛋白囊泡共同形成。',
      '单个成熟黏液腺丝细胞可包含长达 10 厘米的卷曲蛋白丝。',
      '挪威来源分泌物在受控海水实验中不到一秒形成纤维水凝胶。',
      '经典野外捕食者鳃堵塞录像来自其他盲鳗，不能冒充本种直接实证。',
      'Oslofjord 观察证实它能把身体打结并清除黏液。',
      '美国样本的 2020 年打结次数按现行种界应归 Myxine limosa。',
      '严格东大西洋繁殖季、窝卵数和成熟体长仍缺少可靠现代综合。',
      'IUCN LC 的实际评估日期为 2009 年，早于现行种界确认。',
      '严格东大西洋全球趋势应录为 unknown，不能从 LC 推导 stable。',
      'Skagerrak 沉船附近个体出现局地污染生物标志物效应。',
      '一次空陷阱只能表示该次画面没有捕获，不能证明缺失或下降。',
    ],
    threats: [
      'IUCN 2009 评估早于东西大西洋种界确认，严格东大西洋风险可能被旧广义范围稀释',
      'Skagerrak 化学武器沉船附近已记录局地污染暴露与氧化应激生物标志物效应',
      '底拖网、海底工程和沉积物扰动可能破坏稳定软泥微生境，但缺少全范围影响量',
      '兼捕和零散渔获的物种名称仍可能与 Myxine limosa 混用，妨碍趋势判断',
      '部分边缘海域记录缺少凭证或遗传复核，使现行分布边界仍有不确定性',
      '繁殖、年龄、寿命、成熟体长和严格东大西洋数量趋势资料不足',
    ],
    conservationActions: [
      '按现行 Myxine glutinosa 与 Myxine limosa 种界更新 IUCN 全球评估',
      '为边缘分布、调查和渔获记录保存凭证，并以条形码或基因组数据复核物种',
      '统一欧洲与北美数据库、调查及渔业报告中的两个种名',
      '用标准化诱饵陷阱和相机记录努力量、零捕获、体长、性别、深度与底质',
      '持续监测 Skagerrak 等沉船污染点的组织污染物和生物效应',
      '在海底工程或高强度拖网区域识别并减少对稳定软泥底的局地扰动',
      '建立跨区域长期序列，分别报告占域、单位努力量捕获和环境条件',
      '补充严格东大西洋繁殖、早期生活史、年龄与种群连通性研究',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'iucn-status',
        label: 'IUCN',
        value: 'LC',
        note: '实际评估日期为 2009 年，早于东西大西洋种界确认；严格东大西洋趋势未知',
      },
      {
        key: 'eastern-atlantic-maximum-length',
        label: '东大西洋最长记录',
        value: '45',
        unit: '厘米',
        note: '已发表最大总长，不是典型成体；排除西大西洋 79 至 95 厘米旧广义名记录',
      },
      {
        key: 'internal-gill-pouch-pairs',
        label: '内部鳃囊',
        value: '6',
        unit: '对',
        note: '标准解剖；每侧排水管汇入一个外部鳃孔，不是六对外露鳃裂',
      },
      {
        key: 'laboratory-slime-deployment',
        label: '黏液材料展开',
        value: '<1',
        unit: '秒',
        note: '挪威个体新鲜分泌物的受控海水混合实验，不是野外固定反应时',
      },
    ],
    media: {
      image:
        './images/species/atlantic-hagfish/01-muddy-seafloor-adult-cover.webp',
      alt: '暗色软泥海底上，一只完整灰粉色大西洋盲鳗从钝头延伸到渐尖尾部，细长无鳞身体和部分腹外侧小孔列可见；画面没有其他动物',
      focalPoint: { x: 0.64, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/atlantic-hagfish/02-blunt-head-and-sensory-tentacles.webp',
          alt: '浅色细沙海底上，一只完整灰粉色盲鳗侧卧，钝头的单一鼻孔、数根感觉触须、近侧一个鳃孔和腹外侧小孔列可见',
          title: '单一鼻孔与感觉触须',
          caption:
            'AI生成科学情景重建；斜侧视角支持单一鼻孔、感觉触须、近侧一个外部鳃孔和黏液孔列的定性展示。画面不是可计数的标本诊断，不能核定全部触须、内部鳃囊或黏液孔数量，也不能判断性别、年龄、体长、深度或地点。',
          focalPoint: { x: 0.49, y: 0.62 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/atlantic-hagfish/03-mud-burrow-benthic-habitat.webp',
          alt: '宽阔软泥海底上，一只大西洋盲鳗的钝头和前段露在一处浅泥穴外，其余身体连续进入沉积物',
          title: '部分埋入软泥的临时浅穴',
          caption:
            'AI生成科学情景重建；一只盲鳗部分埋入软泥，只表达临时浅穴和底栖情境。画面不能证明洞由该个体开挖或长期占用，也不能确定巢穴、固定隧道、实际水深、盐度、温度、地点或昼夜节律。',
          focalPoint: { x: 0.66, y: 0.69 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/atlantic-hagfish/04-slime-thread-defense-cloud.webp',
          alt: '暗色泥底上，一只完整灰粉色大西洋盲鳗的腹外侧小孔列旁展开一团局部半透明细丝状黏液网络',
          title: '遇海水展开的黏液与蛋白丝',
          caption:
            'AI生成科学材料情景重建；局部分泌物沿体侧小孔列进入海水后展开成黏液与蛋白丝网络。静帧不能确定刺激来源、分泌量、丝线数量、展开速度、防御功能或结果；较大的前侧孔是近侧外部鳃孔，不是黏液喷嘴。',
          focalPoint: { x: 0.54, y: 0.66 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/atlantic-hagfish/05-single-body-overhand-knot.webp',
          alt: '浅色泥底上，一只完整灰粉色大西洋盲鳗以一头一尾和连续身体形成单个松弛反手结',
          title: '一条连续身体形成的简单结',
          caption:
            'AI生成科学情景重建；一只盲鳗的一头、一尾和连续身体形成一个可读的松弛反手结。静帧不能判断结的形成方向、力量、持续时间、用途或频率，也不把美国样本的逃脱实验数值归给现行东大西洋种。',
          focalPoint: { x: 0.5, y: 0.59 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/atlantic-hagfish/06-empty-trap-fishery-monitoring.webp',
          alt: '阴天海面的小型工作船上，恰有两名工作人员检查一个打开的空圆筒穿孔采样陷阱，其中一人持记录板，画面没有动物或饵料',
          title: '记录一次空陷阱检查',
          caption:
            'AI生成科学监测情景重建；两名工作人员、一个空圆筒陷阱和一块记录板只表达通用采样工作。零只动物可见不能证明检出、缺失、丰度、趋势、渔具合规或保护成效；画面也不代表特定国家、机构或标准盲鳗渔具。',
          focalPoint: { x: 0.65, y: 0.59 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...ATLANTIC_HAGFISH_SOURCES,
      {
        title: 'GBIF: Myxine glutinosa Linnaeus, 1758 nomenclatural record',
        url: 'https://www.gbif.org/species/2498670',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: ATLANTIC_HAGFISH_CONTENT_DATE,
    updatedAt: ATLANTIC_HAGFISH_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
