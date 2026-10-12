import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const JAPANESE_PLANARIAN_SOURCE_DATE = '2026-08-31' as const;

const JAPANESE_PLANARIAN_CONTENT_DATE = '2026-08-31' as const;

const JAPANESE_PLANARIAN_SOURCES = [
  {
    title: 'WoRMS — Dugesia japonica Ichikawa & Kawakatsu, 1964 (AphiaID 484630)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=484630',
    kind: 'taxonomy',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — Classification for AphiaID 484630',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/484630',
    kind: 'taxonomy',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — Distribution records for AphiaID 484630',
    url: 'https://www.marinespecies.org/rest/AphiaDistributionsByAphiaID/484630',
    kind: 'distribution',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Dugesia japonica japonica, unaccepted subspecies record',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=487866',
    kind: 'taxonomy',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Dugesia ryukyuensis, accepted separate species',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=484111',
    kind: 'taxonomy',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title: 'GBIF — Dugesia japonica, species key 5892108',
    url: 'https://www.gbif.org/species/5892108',
    kind: 'taxonomy',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title: 'NCBI Taxonomy — Dugesia japonica, taxid 6161',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=6161',
    kind: 'taxonomy',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title:
      '中国生态环境部 HJ 831-2022 — 淡水生物水质基准推导技术指南',
    url: 'https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/shjbh/xgbzh/202203/W020220719504208090518.pdf',
    kind: 'taxonomy',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title: '四川动物 2016 — 被杆体纲分类阶元用例',
    url: 'https://html.rhhz.net/scdwzz/html/50993.htm',
    kind: 'taxonomy',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title: 'Ichikawa & Kawakatsu 1964 — Original description of Dugesia japonica',
    url: 'https://dl.ndl.go.jp/view/prepareDownload?itemId=info%3Andljp%2Fpid%2F10854715',
    kind: 'general',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title:
      'Kawakatsu et al. 1995 — Taxonomy and geographical distribution of Dugesia japonica and D. ryukyuensis',
    url: 'https://doi.org/10.1007/978-94-011-0045-8_10',
    kind: 'distribution',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title:
      'Liu et al. 2022 — Historical biogeography and species boundaries in Asian Dugesia',
    url: 'https://doi.org/10.1111/jbi.14371',
    kind: 'distribution',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title:
      'Nishimura et al. 2015 — Draft genome and transcriptome of Dugesia japonica',
    url: 'https://doi.org/10.1371/journal.pone.0143525',
    kind: 'general',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title: 'Kreshchenko 1985 — Chemotactic responses to food-related substances',
    url: 'https://doi.org/10.34425/zs000141',
    kind: 'ecology',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title:
      'Miyamoto et al. 2020 — The planarian pharynx as an autonomous food-sensing organ',
    url: 'https://doi.org/10.1126/sciadv.aaz0882',
    kind: 'ecology',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title:
      'Shibata et al. 2025 — Chironomus larvae as a long-term food for Dugesia japonica',
    url: 'https://doi.org/10.3390/biom15121659',
    kind: 'ecology',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title:
      'Orii et al. 2005 — Neoblast distribution and X-ray response in Dugesia japonica',
    url: 'https://doi.org/10.1007/s00427-004-0460-y',
    kind: 'general',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title:
      'Tasaki et al. 2011 — JNK activation and blastema formation during regeneration',
    url: 'https://doi.org/10.1111/j.1440-169X.2011.01254.x',
    kind: 'general',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title:
      'Umesono et al. 2013 — ERK and Wnt establish the planarian body axis',
    url: 'https://doi.org/10.1038/nature12359',
    kind: 'general',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title:
      'Yazawa et al. 2009 — Hedgehog signaling regulates anterior-posterior polarity',
    url: 'https://doi.org/10.1073/pnas.0907464106',
    kind: 'general',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title:
      'Malinowski et al. 2017 — Mechanics of whole-body fission in planarians',
    url: 'https://doi.org/10.1073/pnas.1700762114',
    kind: 'ecology',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title:
      'Aikawa & Shimozawa 1981 — Cocoon production and incubation in Dugesia japonica',
    url: 'https://dl.ndl.go.jp/view/prepareDownload?itemId=info%3Andljp%2Fpid%2F10850640',
    kind: 'ecology',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title:
      'Liu et al. 2021 — Genetic diversity and demographic inference in Taihang Mountain populations',
    url: 'https://doi.org/10.11865/zs.2021202',
    kind: 'conservation',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2012 — Subacute copper toxicity in Dugesia japonica',
    url: 'https://doi.org/10.1177/0748233712452600',
    kind: 'ecology',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
  {
    title:
      'IUCN Red List species search — Dugesia japonica, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Dugesia%20japonica&searchType=species',
    kind: 'conservation',
    accessedAt: JAPANESE_PLANARIAN_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-dugesia-japonica',
    slug: 'japanese-planarian',
    names: {
      zh: '日本三角涡虫',
      en: 'Japanese Planarian',
      aliases: ['Japanese Freshwater Planarian', 'ナミウズムシ'],
    },
    scientificName: 'Dugesia japonica',
    taxonomy: animalTaxonomy(
      taxon('Platyhelminthes', '扁形动物门'),
      taxon('Rhabditophora', '被杆体纲'),
      taxon('Tricladida', '三肠目'),
      taxon('Dugesiidae', '三角涡虫科'),
      taxon('Dugesia', '三角涡虫属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['freshwater'],
      continents: ['亚洲'],
      regions: [
        '日本列岛的低地与山麓淡水水系',
        '中国大陆与台湾的淡水水系',
        '朝鲜半岛淡水水系',
        '俄罗斯滨海边疆区',
      ],
      countries: ['日本', '中国', '朝鲜', '韩国', '俄罗斯'],
      range:
        '分类与地理修订支持本种分布于日本、中国大陆、台湾、朝鲜半岛和俄罗斯滨海边疆区。记录沿溪流、泉水及其他淡水小生境呈斑块状，而不是覆盖整片东亚陆地。日本旧文献曾把它误作欧洲的 Dugesia gonocephala，琉球群岛材料还需与近似的 Dugesia ryukyuensis 区分；缺少凭证、交配器解剖或分子资料的聚合点位不能直接扩大全种范围。',
      center: { lat: 36.24, lng: 137.97 },
    },
    habitats: [
      {
        name: '溪流石块与落叶下方',
        realm: 'freshwater',
        description:
          '常贴附在浅水溪流的石块、落叶和其他沉水物背面，湿润表面既让腹面纤毛滑行，也提供隐蔽处。流速、水温和底质随地点变化，不能把一条溪流的测值写成全种耐受范围。',
        isPrimary: true,
      },
      {
        name: '泉水与地下水影响水体',
        realm: 'freshwater',
        description:
          '泉口、泉溪和部分洞穴淡水中有记录；稳定水源可维持局地微生境，但“见于泉水”不表示本种只生活在恒温、黑暗或地下环境。',
      },
      {
        name: '池塘、沟渠与缓流水边缘',
        realm: 'freshwater',
        description:
          '早期日本记录同时包括流动水和静水中的沉水物下方。不同水体里的出现需要凭证复核，实验室自来水培养条件也不能替代野外栖息地描述。',
      },
    ],
    measurements: {
      length: {
        min: 15,
        max: 20,
        unit: 'mm',
        note: '原始描述中性成熟个体在活动伸展状态下的通常体长，不是全物种硬边界。',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '摇蚊属水生幼虫（培养研究）',
        '其他小型淡水无脊椎动物（捕食者功能群口径）',
        '动物尸体或组织（实验诱食证据）',
      ],
      description:
        '个体借水中化学线索定位动物性食物，再从腹面中后段的口伸出肌肉质咽，贴近并摄入软组织。离体咽在实验中仍能完成感知、接近、选择和摄入的一系列动作，说明咽神经系统具有较强自主性；摇蚊幼虫是长期培养研究使用的活饲，肝脏和蛋白胨则是实验诱食材料，都不代表固定野外食谱或首选猎物。',
    },
    activity: [
      '腹面表皮纤毛在分泌的黏液层中同步摆动，使身体贴着石面或培养皿平稳滑行',
      '受强刺激时可改用肌肉驱动的蠕动或 scrunching；这些步态不能与日常纤毛滑行混为一谈',
      '摄食时从腹面中后段伸出可收回的肌肉质咽，食物经咽进入分支肠道',
      '部分无性实验株以横裂繁殖，先形成腰缩，再脉动拉伸并横向断裂',
      '断裂或切割后的组织依靠 neoblast 增殖、分化与位置信号重建缺失部位',
    ],
    tags: [
      '扁形动物门',
      '淡水涡虫',
      '三角头',
      '一对眼点',
      '腹面纤毛滑行',
      '黏液层',
      '可伸缩咽',
      '横裂',
      '无性繁殖',
      'neoblast',
      '全身再生',
      '模式动物',
      '实验株边界',
      'IUCN 未评估',
    ],
    summary:
      '东亚淡水石块下的扁形动物：腹面纤毛借黏液贴底滑行，可伸缩咽从身体中后段探出摄食，部分无性实验株还能横裂并重建头尾。',
    description:
      '日本三角涡虫是东亚淡水三肠目动物。1964 年原始描述中，性成熟且活动伸展的个体通常长 15 至 20 毫米；活体会伸缩，该范围不是全物种硬边界。身体背腹扁平，灰褐至棕褐，头端呈三角形并带两枚短圆耳突和一对眼点。眼点感受光线，口却不在头部，而位于腹面中后段；摄食时肌肉质咽从口伸出。平常移动主要依靠腹面纤毛在黏液层中滑行，肌肉则参与转向、强刺激步态和横裂。再生需要 成体增殖细胞（neoblast）提供新细胞，也需要原有分化组织中的 ERK、Wnt/β-catenin、Hedgehog 等位置信号告诉新细胞形成头、尾或躯干。许多经典结果来自无性克隆、人工切割、RNA 干扰或药理处理，不能直接代表全部野外种群的繁殖方式、再生速度、基因组或生态状态。IUCN Red List 当前没有本种全球评估；NE 只表示未评估，不代表无危、数量稳定或没有栖息地压力。',
    storySections: [
      {
        key: 'freshwater-under-stones',
        label: '溪石背面',
        title: '淡水石块与沉水物下的生活',
        body: '日本三角涡虫生活在淡水中，常从溪流石块、落叶或其他沉水物的背面找到。日本早期记录也包括静水，远东修订把范围扩展到中国、台湾、朝鲜半岛和俄罗斯滨海边疆区。分布图由不同年代、不同鉴定标准的记录拼成，仍需区分近似种并保存凭证。',
      },
      {
        key: 'ventral-cilia-gliding',
        label: '贴底滑行',
        title: '腹面纤毛驱动黏液中的滑行',
        body: '日常滑行时，腹面表皮纤毛在分泌的黏液层中同步摆动，身体轮廓几乎不必像尺蠖那样反复缩放。强烈化学、温度或机械刺激可触发肌肉主导的 收缩爬行（scrunching），横裂也依靠肌肉和基质附着产生拉力；这些现象不能用来否定正常滑行的纤毛机制。',
      },
      {
        key: 'ventral-pharynx-feeding',
        label: '咽从腹面探出',
        title: '咽从腹面中后段伸出摄食',
        body: '一对眼点不承担咀嚼，三角头也没有位于尖端的嘴。动物定位食物后让腹面朝向目标，肌肉质咽从中后段的口伸出并摄入组织。离体咽自主完成整套摄食动作来自实验装置中的观察，不能据此断言咽脱离身体后能长期存活，或野外个体只吃实验用肝脏。',
      },
      {
        key: 'three-stage-transverse-fission',
        label: '把自己分成两段',
        title: '先收出细腰，再脉动拉伸，最后横向断裂',
        body: '对无性克隆日本三角涡虫的连续录像把横裂分为腰缩、脉动和横向断裂三个阶段。研究者分析了 22 次录像事件，并用去头提高横裂出现率；断裂后的头段和尾段在约一周内补回缺失部分。样本、预处理、20°C 培养和充足喂食都限定了结论，三阶段是观察到的动作序列，约一周不是每个野外个体的固定计时器。',
      },
      {
        key: 'neoblasts-and-positional-signals',
        label: '细胞与坐标',
        title: '增殖细胞与位置信号共同参与再生',
        body: '成体增殖细胞（neoblast）分散在身体内部，受伤后增殖并产生多种分化后代。原有分化组织的信号重新标定前后轴：日本三角涡虫实验显示，ERK 偏向前方程序，Wnt/β-catenin 与 Hedgehog 参与后方身份和轴向极性。实验敲低这些基因可造成双头或双尾，说明信号参与再生方向的决定。',
      },
      {
        key: 'laboratory-strains-versus-wild-populations',
        label: '模式动物边界',
        title: '实验克隆与野外种群存在差异',
        body: '常用 GI 克隆源自 1990 年日本岐阜县入间川采到的一只个体，研究者让它无性维持超过 20 年；基因组草图也来自实验室繁育的无性克隆。长期培养、克隆积累的体细胞变异、饲料与温度都可能塑造实验结果。野外种群可能具有不同倍性、生殖状态和遗传背景，因此克隆的横裂频率、再生时间和药理反应不能直接升级为全种常数。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1964 年从近似种中正式描述',
        body: 'Ichikawa 与 Kawakatsu 于 1964 年正式描述日本三角涡虫，现用学名为 Dugesia japonica。日本旧资料曾把它误作欧洲的 D. gonocephala，琉球材料还需与 D. ryukyuensis 区分。常用 GI 克隆则来自 1990 年岐阜县入间川的一只个体，实验室培养史与整个野外物种的历史应分开看。',
      },
    ],
    keyFacts: [
      '当前接受名为 Dugesia japonica Ichikawa & Kawakatsu, 1964；WoRMS AphiaID 484630，NCBI Taxonomy ID 6161。',
      '不同体系对 Rhabditophora 的阶元处理不同，中文资料常称“被杆体纲”，WoRMS 将其列为亚门。',
      '日本 20 世纪早期资料曾把本种误称为欧洲的 Dugesia gonocephala，1964 年原始描述厘清了物种身份。',
      '远东修订记录范围包括日本、中国大陆、台湾、朝鲜半岛和俄罗斯滨海边疆区。',
      '身体背腹扁平，头端呈三角形，带两枚短圆耳突和一对感光眼点。',
      '普通滑行依靠腹面纤毛在黏液层中摆动，不等于游泳，也不等于肌肉主导的 scrunching。',
      '口位于腹面中后段，可伸缩肌肉质咽从这里探出摄食；嘴不在三角头尖端。',
      '横裂录像中的三个阶段是腰缩、脉动和横向断裂。',
      '三阶段结论来自 22 次无性克隆录像事件；研究者用去头提高事件率，不能省略实验边界。',
      '研究中的头段与尾段约一周恢复完整形态，这不是所有温度、营养和野外种群的固定时长。',
      'neoblast 是成体增殖细胞群，既维持组织更新，也为再生提供分化后代。',
      'ERK、Wnt/β-catenin 与 Hedgehog 的 Dugesia japonica 实验共同说明再生还要恢复前后轴位置信息。',
      '“能再生头尾”不等于任意大小的碎屑、单个 neoblast 或每个身体片段都能独立成活。',
      'GI 克隆源自 1990 年岐阜县入间川的一只个体，超过 20 年的培养史不能代表整个野外物种。',
      '不同实验可能使用不同克隆、培养温度、饲料、切割位置和干预，结果之间不能省略这些条件。',
      'IUCN Red List 当前没有本种全球评估；NE 不代表无危、数量稳定或没有威胁。',
    ],
    threats: [
      'IUCN 尚未评估，全球种群大小、趋势、世代时间和受威胁程度均未知',
      '溪流硬化、清淤、泉水截流和长期干涸可能移除石块与落叶下的局地微生境，但缺少物种级效应量化',
      '污染、缺氧和水温变化可影响淡水底栖动物；现有实验反应不能直接换算成野外安全阈值或全球趋势',
      '近似种、旧名与无性个体缺少交配器特征会造成误鉴定，进而扭曲分布和变化判断',
      '实验克隆资料远多于标准化野外监测，不能用培养皿中的稳定繁殖替代自然种群评估',
    ],
    conservationActions: [
      '在代表性溪流、泉水和静水站点重复记录检出、底质、流量、水温、溶氧与水质',
      '调查时翻动石块后放回原位，减少对贴附动物和底栖微生境的破坏',
      '为新地点记录保存照片、整虫与组织凭证，并结合交配器解剖、核型或分子条形码复核身份',
      '维护泉溪连通性、岸带遮荫和清洁淡水，避免把潜在栖息地压力写成已证实全球下降',
      '给实验株记录采集地点、克隆谱系、倍性、生殖方式、饲料、温度和培养代数',
      '积累可比较的分布与丰度时间序列，为未来保护评估提供物种级证据',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'eyespots',
        label: '头部眼点',
        value: '2',
        unit: '枚',
        note: '一对感光眼点是外观线索，不能单独完成 Dugesia 属内种级鉴定。',
      },
      {
        key: 'fission-stages',
        label: '横裂动作阶段',
        value: '3',
        unit: '阶段',
        note: '腰缩、脉动、横向断裂；来自无性克隆的连续录像与力学分析。',
      },
      {
        key: 'fragment-regeneration',
        label: '实验头尾段再生',
        value: '约1',
        unit: '周',
        note: 'PNAS 横裂研究的培养条件下约数，不是全物种或野外固定时长。',
      },
      {
        key: 'gi-clone-history',
        label: 'GI 克隆维持记录',
        value: '>20',
        unit: '年',
        note: '源自 1990 年入间川单一个体的实验谱系；不代表自然寿命或野外克隆年龄。',
      },
    ],
    media: {
      image:
        './images/species/japanese-planarian/01-stream-stone-cover.webp',
      alt: '清澈浅溪的一块深色湿石上，一只完整棕褐色日本三角涡虫贴附滑行，三角形头端和一对眼点可见',
      focalPoint: { x: 0.65, y: 0.5 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/japanese-planarian/02-triangular-head-eyespots.webp',
          alt: '灰色湿石表面上一只完整日本三角涡虫的背面近景，三角头、两枚短圆耳突和一对深色眼点清楚可见',
          title: '三角头、耳突与一对眼点',
          caption:
            'AI生成原创形态情景；头形与眼点可帮助认识外观，却不能替代交配器解剖、核型、分类检索或分子鉴定。',
          focalPoint: { x: 0.46, y: 0.48 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/japanese-planarian/03-pharynx-feeding.webp',
          alt: '溪石下方一只完整日本三角涡虫的腹面中后段伸出浅色管状咽，咽端接触一小段红色动物组织',
          title: '从腹面伸出的肌肉质咽',
          caption:
            'AI生成原创摄食情景；画面说明咽的伸出位置和动物性食物接触，不能证明吞咽成功、摄食速率、猎物身份或野外食谱比例。',
          focalPoint: { x: 0.54, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/japanese-planarian/04-transverse-fission.webp',
          alt: '湿润深色石面上，日本三角涡虫的头段和尾段彼此分开，两个平直断面之间留有窄小水隙',
          title: '并列的头段与尾段',
          caption:
            'AI生成原创片段对照情景；画面中平直的相对断面不能区分自然横裂与人工切段。一张静帧也不能显示腰缩、脉动和横向断裂的时间顺序，或测出拉力与再生时长。',
          focalPoint: { x: 0.53, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/japanese-planarian/05-head-tail-regeneration.webp',
          alt: '透明培养皿中并列放着一段保留三角头和眼点的日本三角涡虫头段，以及一段前端创面浅色的无头尾段',
          title: '头段和尾段各自补回缺失部位',
          caption:
            'AI生成原创再生情景；并列片段不证明二者来自同一横裂事件，也不能从外观确认 neoblast 活性、切割时间、再生完成度或存活结局。',
          focalPoint: { x: 0.5, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/japanese-planarian/06-stereomicroscope-observation.webp',
          alt: '体视显微镜物镜下的透明培养皿中放着一个完整涡虫与两个大小不同的棕褐色组织片段',
          title: '在体视显微镜下记录片段变化',
          caption:
            'AI生成原创实验情景；通用培养皿、显微镜、一个完整个体和两个片段不能确认物种、克隆、切割位置、时间点、处理组或再生成功，研究还需比例尺、连续记录和样本信息。',
          focalPoint: { x: 0.61, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: JAPANESE_PLANARIAN_SOURCES,
    featured: true,
    publishedAt: JAPANESE_PLANARIAN_CONTENT_DATE,
    updatedAt: JAPANESE_PLANARIAN_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
