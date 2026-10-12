import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const DOMESTIC_SILKWORM_SOURCE_DATE = '2026-08-28' as const;

const DOMESTIC_SILKWORM_CONTENT_DATE = '2026-08-28' as const;

const DOMESTIC_SILKWORM_SOURCES = [
  {
    title: 'NCBI Taxonomy: Bombyx mori, Taxonomy ID 7091',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=7091&lvl=0',
    kind: 'taxonomy',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'GBIF / Catalogue of Life: Bombyx mori',
    url: 'https://www.gbif.org/species/1868664',
    kind: 'taxonomy',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'NCBI Taxonomy: Bombyx mandarina, Taxonomy ID 7092',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=7092',
    kind: 'taxonomy',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'GBIF / Catalogue of Life: Bombyx mandarina',
    url: 'https://www.gbif.org/species/6544581',
    kind: 'taxonomy',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'National Forestry and Grassland Administration: Chinese insect names standard',
    url: 'https://www.forestry.gov.cn/html/lykj/lykj_1716/20190704152301877420072/file/20190704210951288677543.pdf',
    kind: 'taxonomy',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'SAMR: Technical specification for Bombyx mori genetic resource survey',
    url: 'https://std.samr.gov.cn/gb/search/gbDetailed?id=33D40F11615A5D92E06397BE0A0A5B93',
    kind: 'taxonomy',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'NCBI BioProject PRJDB4947: Bombyx mori p50T chromosome assembly',
    url: 'https://www.ncbi.nlm.nih.gov/bioproject/PRJDB4947',
    kind: 'general',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      'International Silkworm Genome Consortium 2008: The genome of a lepidopteran model insect',
    url: 'https://doi.org/10.1016/j.ibmb.2008.11.004',
    kind: 'general',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'Xia et al. 2009: Complete resequencing reveals silkworm domestication',
    url: 'https://doi.org/10.1126/science.1176620',
    kind: 'general',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'Xiang et al. 2018: The evolutionary road from wild moth to domestic silkworm',
    url: 'https://doi.org/10.1038/s41559-018-0593-4',
    kind: 'general',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'Tong et al. 2022: High-resolution silkworm pan-genome',
    url: 'https://www.nature.com/articles/s41467-022-33366-x',
    kind: 'distribution',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'Arunkumar et al. 2006: Molecular phylogeny and the origin of Bombyx mori',
    url: 'https://doi.org/10.1016/j.ympev.2006.02.023',
    kind: 'taxonomy',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'Kim et al. 2022: Phylogeography of wild and domestic silkmoths',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8773246/',
    kind: 'taxonomy',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'Bisch-Knaden et al. 2014: Olfactory coding in B. mori and B. mandarina',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3843842/',
    kind: 'ecology',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'Lu et al. 2020: Flight structures in flightless Bombyx mori',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7240457/',
    kind: 'ecology',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'NARO: Secrets of Silkworms',
    url: 'https://www.naro.go.jp/english/Information/laboratory/nias/165757.html',
    kind: 'ecology',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'National BioResource Project Silkworm',
    url: 'https://silkworm.nbrp.jp/',
    kind: 'conservation',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'Central Silk Board of India: Silk and sericulture',
    url: 'https://csb.gov.in/silk-sericulture/silk',
    kind: 'ecology',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'Ministry of Education of China: Materials on silkworm development',
    url: 'https://www.moe.gov.cn/srcsite/A26/s8001/201112/W020220418401384311181.pdf',
    kind: 'ecology',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'FAO Silk Reeling and Testing Manual: Silkworm and cocoon production',
    url: 'https://www.fao.org/4/x2099e/x2099e02.htm',
    kind: 'general',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'FAO Silk Reeling and Testing Manual: Cocoon filament and silk proteins',
    url: 'https://www.fao.org/4/x2099e/x2099e03.htm',
    kind: 'ecology',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'FAO: Conservation status of silkworm germplasm resources',
    url: 'https://www.fao.org/4/ad108e/ad108e0a.htm',
    kind: 'distribution',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'Chinese Academy of Sciences 2025: Diapause and voltinism in Bombyx mori',
    url: 'https://cemps.cas.cn/kyjz/kyjz2025/202505/t20250529_7793945.html',
    kind: 'ecology',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'Sakurai et al. 2004: A pheromone receptor determines Bombyx sexual behavior',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC528734/',
    kind: 'ecology',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List FAQ: treatment of domesticated taxa',
    url: 'https://nrl.iucnredlist.org/about/faqs',
    kind: 'conservation',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List search: Bombyx mori',
    url: 'https://www.iucnredlist.org/search?query=Bombyx%20mori&searchType=species',
    kind: 'conservation',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: 'Species+ Checklist search: Bombyx mori',
    url: 'https://www.speciesplus.net/checklist/taxon_concepts?scientific_name=Bombyx%20mori&page=1&per_page=20&output_layout=alphabetical&locale=en',
    kind: 'conservation',
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-bombyx-mori',
    slug: 'domestic-silkworm',
    names: {
      zh: '家蚕',
      en: 'Domestic Silkworm',
      aliases: [
        '蚕',
        '桑蚕',
        '家蚕蛾',
        'Silkworm',
        'Silk Moth',
        'Domesticated Silkmoth',
        'Mulberry Silkworm',
        'Phalaena mori',
      ],
    },
    scientificName: 'Bombyx mori',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Insecta', '昆虫纲'),
      taxon('Lepidoptera', '鳞翅目'),
      taxon('Bombycidae', '蚕蛾科'),
      taxon('Bombyx', '家蚕蛾属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲', '欧洲', '非洲', '北美洲', '南美洲', '大洋洲'],
      countries: [
        '中国',
        '印度',
        '日本',
        '韩国',
        '泰国',
        '越南',
        '老挝',
        '柬埔寨',
        '乌兹别克斯坦',
        '伊朗',
        '土耳其',
        '意大利',
        '法国',
        '罗马尼亚',
        '摩洛哥',
        '埃及',
        '马达加斯加',
        '巴西',
        '墨西哥',
        '巴布亚新几内亚',
      ],
      regions: [
        '中国的驯化起源与现今蚕桑生产、种质保存区',
        '东亚、南亚、东南亚、中亚和西亚人工饲养区',
        '欧洲传统蚕业、育种和研究维持区',
        '非洲人工养蚕和种质保存点',
        '美洲及大洋洲的人工养蚕、教育和研究点',
      ],
      range:
        '主要驯化谱系起源于中国，现完全依赖人类维持，并在全球多地人工饲养于蚕室、桑园配套系统、育种场、种质库、实验室和教育设施。自然野外分布不适用，Bombyx mori 没有自我维持的野生种群；所列国家只代表有资料支持的人工品系或养蚕范围，野桑蚕 Bombyx mandarina 的东亚野外分布属于另一分类单元。',
      center: { lat: 32, lng: 110 },
    },
    habitats: [
      {
        name: '桑园与蚕室配套的人工饲养系统',
        realm: 'terrestrial',
        description:
          '桑园供应幼虫食叶，幼虫主要在受控蚕室、蚕座或饲育架上生长。这里的“生境”是人类建立并持续管理的生产系统，不是野生生境。',
        isPrimary: true,
      },
      {
        name: '清洁通风的室内蚕座与饲育架',
        realm: 'terrestrial',
        description:
          '卵和各龄幼虫在人工控制温湿度、密度、卫生与饲料供应的空间中维持；具体制度随品系和地区变化。',
      },
      {
        name: '蔟具与结茧空间',
        realm: 'terrestrial',
        description:
          '成熟五龄幼虫转移到竹木、纸质或其他人工蔟具，在可附着的立体间隙内搭丝架并形成茧。',
      },
      {
        name: '种质资源库、实验室与教育饲养设施',
        realm: 'terrestrial',
        description:
          '不同地理品系、育成品种和突变系依靠活体继代、适用的低温或生殖材料保存及完整谱系记录维持。',
      },
    ],
    measurements: {},
    diet: {
      types: ['herbivore'],
      foods: [
        '桑属植物的新鲜叶片（幼虫）',
        '以桑叶粉等植物原料配制的人工饲料（特定饲养体系）',
      ],
      description:
        '只有幼虫阶段摄食，以桑叶为主要饲料；特定品系和人工饲养体系可使用含桑叶成分的配方饲料。成虫功能性口器退化，不再进食，主要完成求偶、交配和产卵。',
    },
    activity: [
      '完全依赖人工饲养与繁殖管理',
      '幼虫四次蜕皮、共五个龄期',
      '五龄末吐丝结茧',
      '成虫有翅但不能持续飞行',
      '成虫不取食，依靠幼虫期积累的储备',
      '雄蛾可振翅并步行追踪雌蛾性信息素',
    ],
    tags: [
      '完全驯化',
      '人类依赖',
      '桑叶食性',
      '完全变态',
      '吐丝结茧',
      '成虫不取食',
      '成虫失飞',
      '种质资源',
      'IUCN不适用',
      'CITES未列入',
    ],
    summary:
      '在中国形成主要驯化谱系、完全依赖人工饲养的蚕蛾；幼虫食桑并在五龄末吐丝结茧，成虫有翅却不能持续飞行，也不再取食。',
    description:
      '家蚕 Bombyx mori 的主要驯化谱系形成于中国，近缘野生祖先属于野桑蚕谱系。如今它依靠人类供叶、环境管理和繁殖，世界多地的蚕业、育种、科研和教育机构都保存着人工品系。幼虫经过四次蜕皮和五个龄期，五龄末由丝腺制造丝素与丝胶，吐丝结茧。成虫口器退化，不再取食，虽保留两对有鳞翅，却不能持续飞行。家蚕没有自我维持的野生种群，IUCN 野生灭绝风险框架不适用于这种纯驯化谱系，CITES 当前也未列入。',
    storySections: [
      {
        key: 'china-domestication-and-human-care',
        label: '驯化与依赖',
        title: '主要驯化谱系形成于中国',
        body: '群体基因组研究支持家蚕的主要驯化过程始于中国，随后随人类交流传播并继续改良。人工选择改变了飞行、繁殖和产丝等性状，也使它无法脱离供叶、清洁、环境控制和配种管理形成野生种群。约五千年是遗传模型估计，不是精确纪年或单一遗址坐标。',
      },
      {
        key: 'mori-and-mandarina',
        label: '最近缘野生谱系',
        title: '家蚕与近缘野桑蚕分列为两个种',
        body: '现行目录把 Bombyx mori 和 Bombyx mandarina 分作两个种级分类单元。两者能够产生可育杂交后代，种界曾有讨论；系统发育证据仍支持中国野桑蚕谱系最接近家蚕祖先。野桑蚕的东亚分布、染色体地理差异和野外风险必须单独记录。',
      },
      {
        key: 'five-instars-complete-metamorphosis',
        label: '完整生活史',
        title: '四次蜕皮形成五龄，茧中还要经历真正的蛹期',
        body: '卵孵出的幼虫连续四次蜕皮，五龄末停止取食并寻找蔟具。幼虫先搭丝架，再把自己包进茧中，经历预蛹和蛹后羽化为成虫。各阶段持续多久以及卵是否滞育，会随品系、温度、光周期和饲养制度变化。',
      },
      {
        key: 'fibroin-sericin-cocoon',
        label: '茧丝结构',
        title: '丝素承担骨架，丝胶把连续纤维黏成茧层',
        body: '五龄幼虫的丝腺制造丝素和丝胶，纤维经头部吐丝器输出并逐圈铺成茧。FAO 手册给出的品种依赖总茧丝长度为 600 至 1,500 米，其中只有一部分适合连续缫取。丝由幼虫产生，成虫不吐丝。',
      },
      {
        key: 'flightless-nonfeeding-adult',
        label: '短暂成虫期',
        title: '保留四片翅，却靠振翅和步行寻找配偶',
        body: '家蚕成虫有两对有鳞翅，雌雄通常都不能持续飞行。雄蛾能在地面振翅并追踪雌蛾释放的性信息素。NARO 饲养概述中的成虫期约一周，主要用于交配和产卵；不取食是家蚕与野桑蚕共享的性状，不能全归因于驯化。',
      },
      {
        key: 'germplasm-not-wild-range',
        label: '遗传资源保存',
        title: '保存人工品系与谱系记录',
        body: '家蚕的多样性存在于地方品种、育成品种和突变系中，并依赖种质库与饲养机构逐代维持。保存工作需要活体继代、适用的低温或生殖材料保存、谱系与表型记录、卫生和防混控制。IUCN 野生灭绝风险框架不适用于纯驯化谱系。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的学名，早于现代品种培育',
        body: '1758 年，林奈以 Phalaena mori 命名家蚕，后来它归入蚕蛾属，成为 Bombyx mori。科学命名远晚于人类养蚕历史：群体基因组研究推算，主要驯化谱系约五千年前形成于中国。现代地方品种、育成品种和突变系仍依靠人工逐代维持。',
      },
    ],
    keyFacts: [
      '当前接受学名是 Bombyx mori (Linnaeus, 1758)，原始组合为 Phalaena mori。',
      '家蚕约在五千年前于中国形成主要驯化谱系，这一时间来自群体基因组推断。',
      '它完全依赖人工供叶、环境管理和繁殖维持，没有自我延续的野生种群。',
      '野桑蚕 Bombyx mandarina 是最近缘野生祖先谱系，现行目录仍与家蚕分开收录。',
      '家蚕与野桑蚕可以杂交并产生可育后代，现行目录仍将二者分列为两个种。',
      '幼虫经过四次蜕皮，共有五个龄期，随后在茧内化蛹，属于完全变态。',
      '只有幼虫摄食，以桑叶为主；成虫的功能性口器退化，不取食。',
      '成虫保留两对有鳞翅，能够振翅，雌雄通常都不能持续飞行。',
      '成虫不取食是家蚕与野桑蚕共享的性状，失飞才是显著驯化差异之一。',
      '五龄幼虫的丝腺产生丝素和丝胶，经头部吐丝器输出连续纤维并构筑茧。',
      'FAO 给出的品种依赖总茧丝长度为 600 至 1,500 m，并非全部可缫成成品丝。',
      '发育时长、胚胎滞育、年世代数、产卵量和茧丝性状随品系与饲养条件变化。',
      '家蚕在多地人工饲养和保存种质，没有自然原生分布。',
      'IUCN 野生灭绝风险框架不适用于纯驯化类群，家蚕没有该框架下的正式评估。',
      'CITES 当前未列入家蚕，这不代表遗传资源无风险或地方生产规则不适用。',
    ],
    threats: [
      '地方品种和稀有突变系被少数商业品系替代，会缩窄人工维持的遗传多样性',
      '病毒、细菌、真菌、微孢子虫等病原可在高密度饲养中损害整批材料',
      '活体继代失败、设施中断或温湿度事故会让不能在野外恢复的品系永久丢失',
      '谱系、表型、采集地和保存代次记录丢失会降低材料的研究与育种价值',
      '品系混杂、错误标识和未经记录的杂交会造成遗传身份污染',
      '商业缫丝通常在羽化前以热处理杀死蛹，形成需要明确记录的动物福利影响',
    ],
    conservationActions: [
      '在国家和区域种质库中保存地方品种、育成品种、突变系及其代表性遗传材料',
      '用活体继代、适用的胚胎或生殖材料低温保存和异地备份降低单点失败风险',
      '为每个品系保留来源、谱系、基因型、表型、化性、滞育和饲养条件元数据',
      '实行隔离、消毒、病原监测和批次追踪，控制高密度饲养中的疾病传播',
      '用身份核验、独立编号和受控配种防止品系混杂或未记录杂交',
      '将野桑蚕作为独立野生分类单元开展分布、遗传结构和生境保护',
      '定期复核 IUCN 对驯化类群的规则、CITES 附录及各地种质、检疫和动物利用规定',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'larval-moults',
        label: '幼虫蜕皮',
        value: '4',
        unit: '次',
        note: '形成通常的五个幼虫龄期；不把每龄持续天数写成全球常数。',
      },
      {
        key: 'naro-larval-period',
        label: 'NARO 饲养概述幼虫期',
        value: '约 25',
        unit: '天',
        note: 'NARO 的标准饲养说明，不代表所有品系、温度、光周期和饲养制度。',
      },
      {
        key: 'cocoon-filament-length',
        label: 'FAO 总茧丝长',
        value: '600–1,500',
        unit: 'm',
        note: 'FAO 手册给出的品种依赖总长度；只有一部分可连续缫取，不等于成品丝长度。',
      },
      {
        key: 'naro-adult-stage',
        label: 'NARO 饲养概述成虫期',
        value: '约 1',
        unit: '周',
        note: 'NARO 的饲养框架。成虫不取食，时长仍受品系和环境影响。',
      },
    ],
    media: {
      image:
        './images/species/domestic-silkworm/01-adult-domestic-silkworm-portrait.webp',
      alt: '一只乳白色家蚕雄蛾停在竹制蚕匾边缘，旁侧是一枚已羽化的空白茧',
      focalPoint: { x: 0.72, y: 0.56 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/domestic-silkworm/02-mature-larva-mulberry-feeding.webp',
          alt: '一只乳白色五龄家蚕幼虫在竹制蚕匾上的桑叶边缘取食',
          title: '唯一取食的幼虫阶段',
          caption:
            '幼虫以桑叶为主要饲料；画面只表现常见五龄外形，不给出跨品系的固定体长。',
          focalPoint: { x: 0.52, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/domestic-silkworm/03-first-instar-hatching-from-eggs.webp',
          alt: '一只深色初孵家蚕幼虫位于一组灰色扁圆卵粒和一枚空卵壳旁',
          title: '从卵开始的人工继代',
          caption:
            '画面只含一只初孵幼虫；卵色、滞育状态和孵化日程会随品系与处理变化。',
          focalPoint: { x: 0.52, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/domestic-silkworm/04-larva-spinning-silk-scaffold.webp',
          alt: '一只成熟家蚕幼虫在竹制蔟具中由口下吐丝器搭建疏松丝架',
          title: '先搭丝架，再包裹成茧',
          caption:
            '连续纤维由幼虫丝腺产生并经头部吐丝器输出；画面停在尚未封闭成茧的早期阶段。',
          focalPoint: { x: 0.53, y: 0.48 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/domestic-silkworm/05-pupa-inside-opened-cocoon.webp',
          alt: '一枚放在浅色陶皿中的乳白家蚕茧经人工打开后露出完整褐色蛹体',
          title: '茧中的蛹期',
          caption:
            '开口是为观察而人工形成的切面；正常茧层在蛾羽化前保持闭合，蛹不是缩小的成虫。',
          focalPoint: { x: 0.55, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/domestic-silkworm/06-germplasm-line-rearing.webp',
          alt: '一名饲养人员在木架间为不同家蚕品系的独立分盘饲养添加新鲜桑叶',
          title: '依靠人维持的家蚕品系',
          caption:
            '代表性分系照料重建；画面不指向实际种质机构、固定流程或保存成效。',
          focalPoint: { x: 0.64, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: DOMESTIC_SILKWORM_SOURCES,
    featured: true,
    publishedAt: DOMESTIC_SILKWORM_CONTENT_DATE,
    updatedAt: DOMESTIC_SILKWORM_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
