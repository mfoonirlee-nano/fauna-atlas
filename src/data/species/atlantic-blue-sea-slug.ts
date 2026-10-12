import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE = '2026-08-29' as const;

const ATLANTIC_BLUE_SEA_SLUG_CONTENT_DATE = '2026-08-29' as const;

const ATLANTIC_BLUE_SEA_SLUG_SOURCES = [
  {
    title: 'WoRMS/MolluscaBase — Glaucus atlanticus (accepted; AphiaID 140022)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=140022',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — full classification of Glaucus atlanticus',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/140022',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'WoRMS/MolluscaBase — Glaucilla marginata (accepted; AphiaID 534056)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=534056',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Churchill et al. 2014 — molecular and morphological systematics of neustonic nudibranchs',
    url: 'https://doi.org/10.1071/IS13038',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Churchill et al. 2014 — barriers to gene flow among subtropical ocean basins',
    url: 'https://doi.org/10.1007/s00227-014-2389-7',
    kind: 'distribution',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Pinotti et al. 2019 — southwestern Atlantic occurrence and wind-driven strandings',
    url: 'https://doi.org/10.1590/0001-3765201920180154',
    kind: 'distribution',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search — Glaucus atlanticus',
    url: 'https://www.iucnredlist.org/search?query=Glaucus%20atlanticus&searchType=species',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List FAQ — treatment of taxa absent from the Red List',
    url: 'https://nrl.iucnredlist.org/about/faqs',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'IUCN 2012 — Red List Categories and Criteria, Version 3.1 (second edition)',
    url: 'https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Chong et al. 2023 — neustonic life in the plastic-rich North Pacific Garbage Patch',
    url: 'https://doi.org/10.1371/journal.pbio.3001646',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Ferreira & da Silva 2026 — climate-scenario habitat-suitability modelling',
    url: 'https://doi.org/10.1016/j.rsma.2026.105068',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Ross & Quetin 1990 — mating, egg strings and larval development',
    url: 'https://www.biodiversitylibrary.org/part/143242',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Helm 2021 — natural history of neustonic animals in the Sargasso Sea',
    url: 'https://doi.org/10.1007/s12526-021-01233-5',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Thompson & Bennett 1969 — Physalia nematocysts stored by Glaucus',
    url: 'https://doi.org/10.1126/science.166.3912.1532',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Thompson & Bennett 1970 — observations on Australian Glaucidae',
    url: 'https://doi.org/10.1111/j.1096-3642.1970.tb00735.x',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Goodheart et al. 2018 — cnidosac morphology and kleptocnidy in Cladobranchia',
    url: 'https://doi.org/10.1186/s12983-018-0289-2',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Yamamoto et al. 2025 — ceratal prey handling and captive feeding in Glaucus atlanticus',
    url: 'https://doi.org/10.1002/ecy.70062',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Naturalis Pelagic Molluscs 2.0 — Glaucus atlanticus',
    url: 'https://pelagic-molluscs.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?id=116646',
    kind: 'general',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Taiwan Ocean Conservation Administration — Glaucus atlanticus',
    url: 'https://www.oca.gov.tw/ch/home.jsp?dataserno=202202240024&id=522&mcustomize=ocamaritime_view.jsp&parentpath=0%2C298%2C386',
    kind: 'general',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-glaucus-atlanticus',
    slug: 'atlantic-blue-sea-slug',
    names: {
      zh: '大西洋海神海蛞蝓',
      en: 'Atlantic Blue Sea Slug',
      aliases: [
        '蓝龙海蛞蝓',
        'Blue Sea Dragon',
        'Blue Dragon',
        'Blue Glaucus',
        'Sea Swallow',
        'Blue Angel',
      ],
    },
    scientificName: 'Glaucus atlanticus',
    taxonomy: animalTaxonomy(
      taxon('Mollusca', '软体动物门'),
      taxon('Gastropoda', '腹足纲'),
      taxon('Nudibranchia', '裸鳃目'),
      taxon('Glaucidae', '海神鳃科'),
      taxon('Glaucus', '海神鳃属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['亚洲', '欧洲', '非洲', '北美洲', '南美洲', '大洋洲'],
      regions: [
        '北大西洋副热带环流区',
        '南大西洋副热带环流区',
        '北太平洋副热带环流区',
        '南太平洋副热带环流区',
        '印度洋副热带环流区',
        '西部与中部地中海零散海面记录',
      ],
      countries: [
        '澳大利亚',
        '新西兰',
        '南非',
        '莫桑比克',
        '印度',
        '日本',
        '中国',
        '美国',
        '墨西哥',
        '巴西',
        '乌拉圭',
        '西班牙',
        '阿尔及利亚',
        '突尼斯',
      ],
      range:
        '分布于大西洋、印度洋和太平洋的热带与亚热带海气界面，五个副热带环流区均有分子样本。大陆、冷水和洋盆结构限制跨洋基因流，不能把广布理解成全球随机交配或各处密度均匀。西部与中部地中海有零散记录；所列国家只列代表性有凭证沿岸国家，海滩记录多是风与表层流运输的结果。',
      center: { lat: 32, lng: -65 },
    },
    habitats: [
      {
        name: '热带与亚热带海气界面',
        realm: 'marine',
        description:
          '终生生活在海面薄层，吞入空气后倒置悬挂，蓝色足面朝向天空，银白真背面朝向深水；同一表层群落还包括僧帽水母、帆水母和银币水母等漂浮生物。',
        isPrimary: true,
      },
      {
        name: '副热带环流与表层辐合带',
        realm: 'marine',
        description:
          '风、表层海流和锋面会聚集本种、猎物与其他漂浮物。局地出现量随季节和海况改变，不能用一次聚集估算全球数量。',
      },
      {
        name: '风驱外陆架与近岸表层水',
        realm: 'marine',
        description:
          '持续向岸风或风暴可把远洋个体送入陆架、浪区并造成搁浅。海滩是运输终点，不是本种的常驻底栖或潮间带生境。',
      },
    ],
    measurements: {
      length: {
        max: 43,
        unit: 'mm',
        note:
          'Ross & Quetin 的文献汇总与 Naturalis 物种页采用的最大报道体长。WoRMS 说明文字另写可达 6 cm，但没有给出测量个体和原始口径；15–35 mm 是一次西南大西洋搁浅事件的样本范围，不是全种成体范围。',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '僧帽水母属 Physalia',
        '帆水母 Velella velella',
        '银币水母 Porpita porpita',
      ],
      description:
        '海面肉食者，主要捕食与其共同漂流的刺胞动物。它能爬到猎物下方啃食水螅体，并用前部鳃突抓握、转动猎物。未发射的刺丝囊可经消化道分支进入鳃突末端的刺胞囊，用于防御。2025 年水族实验还观察到捕捉小鱼等机会性行为，但野外食谱尚未得到肠道或分子资料验证，因此鱼类未列为核心食物。',
    },
    activity: [
      '吞入空气并把气体留在胃腔，倒置悬挂于海气界面下方',
      '蓝色足面朝向天空，银白真背面朝向深水',
      '主要随风驱表流、锋面和副热带环流漂移，而非主动跨洋游动',
      '从海面猎物下方取食水螅体，并用前部鳃突抓握和调整猎物',
      '把猎物未发射的刺丝囊保存在鳃突末端用于防御',
      '两个同时雌雄同体的个体相互交配',
      '释放短直胶质卵带，部分卵带自由下沉或落在猎物残骸上',
      '孵化出的带幼壳面盘幼体在水柱中摄食，野外回到海面的过程未知',
    ],
    tags: [
      '软体动物门',
      '腹足纲',
      '裸鳃目',
      '海面漂浮生物',
      '海气界面',
      '倒置漂浮',
      '反向保护色',
      '刺胞动物捕食者',
      '盗刺细胞',
      '单列鳃突',
      '同时雌雄同体',
      '短直卵带',
      '面盘幼体',
      'IUCN未评估',
      '全球趋势未知',
    ],
    summary:
      '倒置悬挂在热带和亚热带海面的蓝银色裸鳃类，随风与表层海流漂移，捕食僧帽水母等刺胞动物，并把猎物未发射的刺丝囊送入鳃突末端用于防御。',
    description:
      '大西洋海神海蛞蝓 Glaucus atlanticus 是终生生活在海气界面的海生腹足类。它吞入空气并把气体留在胃腔，以蓝色足面朝天、银白真背面朝向深水的姿态倒置悬挂；这种配色通常解释为反向保护色，但目前没有针对本种捕食风险的量化实验。系统学重描述记录每侧四组鳃突，其中前三组显眼且位于侧柄，靠尾的第四组小而无柄；观察角度可能使后组不易辨认。它随风和表层海流跨越热带、亚热带海域，五个副热带环流区之间仍存在基因流屏障。它捕食 Physalia、Velella 和 Porpita，将未发射刺丝囊转移到鳃突末端的刺胞囊；2025 年研究还记录前部鳃突抓握活猎物。两个个体均具有雌雄生殖系统，实验记录了短直卵带和 19°C 下约第 3 天孵出的带幼壳面盘幼体。IUCN 尚未评估本种，全球数量和趋势均未知。',
    storySections: [
      {
        key: 'upside-down-neuston',
        label: '海面生境',
        title: '胃腔里的空气托住倒置身体',
        body: '它吞入空气，把气体留在胃腔，借此悬在海气界面下方。蓝色足面和腹面朝向天空，银白真背面朝向深水；鳃突参与保持位置和操控猎物，却不是外置气囊或拍动的翅。风与表层海流决定大尺度去向，本种没有主动深潜或定向横渡洋盆的证据。',
      },
      {
        key: 'countershading-and-form',
        label: '颜色与辨认',
        title: '向天的一面蓝，向深水的一面银',
        body: '从空中俯视时，蓝色足面贴近海色；从水下仰视时，银白真背面接近受光水面。研究者通常把它解释为适应倒置生活的反向保护色，尚无实验给出减少捕食的固定比例。系统学重描述记录每侧四组单列鳃突：前三组显眼且位于侧柄，第四组靠尾、小而无柄。',
      },
      {
        key: 'gyres-and-strandings',
        label: '环流与分布',
        title: '广布海面，洋盆之间仍有边界',
        body: '群体遗传研究采集五个副热带环流区的 98 个体，发现同一洋盆内联系较强，非洲与欧亚大陆、美洲大陆及高纬冷水限制跨洋基因流。向岸风、暖流交汇和风暴能把个体推上陆架或海滩；一次搁浅带的数量记录反映运输、观测努力和局地聚集，不能直接证明全球种群增长或下降。',
      },
      {
        key: 'prey-and-kleptocnidy',
        label: '捕食与防御',
        title: '前部鳃突抓猎物，末端保存刺丝囊',
        body: '野外和实验记录支持 Physalia、Velella 与 Porpita 为核心猎物。2025 年研究观察到前部鳃突像抓握器一样控制活猎物，并在组织切片中找到进入鳃突末端刺胞囊的 Physalia 刺丝囊。专门细胞保存完整、未发射的刺丝囊，这一过程称为盗刺细胞。它没有自行制造猎物毒液，现有证据也不支持“毒性必定超过僧帽水母”；搁浅个体仍应避免徒手触碰。',
      },
      {
        key: 'eggs-and-veligers',
        label: '繁殖与发育',
        title: '短卵带下沉，幼体带壳孵出',
        body: '本种同时雌雄同体，交配双方都具有雌性和雄性生殖系统。仅三对实验个体的交配观察持续约 43 至 59 分钟，不能当作固定种级时长。实验个体释放约 5.0 至 17.5 毫米的短直胶质卵带；19°C 下约第 3 天孵出半具壳、能浮游摄食的面盘幼体。实验没有完成变态和全生活史，野外繁殖季、成熟年龄与幼体重返海面的过程仍未知。',
      },
      {
        key: 'unknown-trend-monitoring',
        label: '状态与监测',
        title: '全球数量与趋势仍未知',
        body: 'IUCN 尚未正式评估本种，全球数量与趋势未知。漂浮塑料调查和气候适生性模型提出了研究问题，尚未测得全球下降。监测需要记录采样努力、海况、风流、猎物和鉴定凭证，以区分环流输送、观察偏差与种群变化。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1777 年的大西洋海蛞蝓命名记录',
        body: 'Forster 于 1777 年命名大西洋海神海蛞蝓，现用学名为 Glaucus atlanticus。它如今在大西洋、印度洋和太平洋的热带与亚热带海面都有记录。研究还发现，它能把猎物未发射的刺丝囊保存于鳃突末端，用于自身防御；这个过程称为盗刺细胞。',
      },
    ],
    keyFacts: [
      '当前接受学名是 Glaucus atlanticus Forster, 1777，WoRMS AphiaID 为 140022。',
      '分类归属依次为 Mollusca、Gastropoda、Nudibranchia、Glaucidae 与 Glaucus。',
      '本种属于终生生活在海洋表层的 海面薄层漂浮生物（neuston），不是底栖海蛞蝓或鱼类。',
      '它吞入空气并把气体留在胃腔，正常姿态是倒置悬挂在海气界面下方。',
      '蓝色足面朝向天空，银白真背面朝向深水；反向保护色仍缺少本种捕食实验。',
      '系统学重描述记录每侧四组单列鳃突：前三组显眼且位于侧柄，靠尾的第四组小而无柄。',
      '鳃突沿支轴单列排列，细长体形可帮助区别鳃突多列、身体较短的 Glaucilla 近似种。',
      '最大报道体长为 43 mm；WoRMS 另写可达 6 cm，但没有给出标本与测量口径。',
      '分子样本覆盖五个副热带环流区的 98 个体，大陆与冷水仍会限制洋盆间基因流。',
      '野外核心猎物包括 Physalia、Velella 和 Porpita 等海面刺胞动物。',
      '2025 年研究观察到前部鳃突抓握活猎物；水族捕鱼记录尚不能扩展成固定野外食谱。',
      '猎物未发射的刺丝囊可进入鳃突末端刺胞囊，专门细胞保存它们用于防御。',
      '搁浅个体仍可能保留可发射刺丝囊，发现者应避免徒手触碰。',
      '本种同时雌雄同体；43 至 59 分钟的交配时长只来自三对实验观察。',
      '实验卵带短而直，长约 5.0 至 17.5 mm，可自由下沉，也有少数落在猎物残骸上。',
      '19°C 实验中约第 3 天孵出带幼壳的浮游摄食型面盘幼体，野外孵化期未知。',
      'IUCN 尚未评估本种，全球数量、种群趋势、寿命与成熟年龄均未知。',
    ],
    threats: [],
    conservationActions: [
      '在五个副热带环流区使用可比较的表层拖网、视觉航线和搁浅记录，并保存采样努力量、季节与海况',
      '同步记录 Physalia、Velella、Porpita 等猎物、风、表层流、海温、锋面与表层辐合',
      '为异常搁浅保留全身照片、尺标、坐标精度、时间、组织或凭证标本',
      '结合单列鳃突等形态特征与 DNA，区分 Glaucus atlanticus 和 Glaucilla 近似种',
      '研究微塑料、化学污染物和漂浮垃圾对摄食、发育与刺丝囊保留的实际影响',
      '向发现者提供不徒手触摸、不带走、保持距离拍照并报告位置的非接触记录指引',
      '减少海洋表层塑料和化学污染，保护 neuston 食物网，并把它作为生态系统层面的预防行动',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'reported-maximum-length',
        label: '最大报道体长',
        value: '43',
        unit: 'mm',
        note: '文献汇总值；WoRMS 另写可达 6 cm，但没有给出标本和测量口径。',
      },
      {
        key: 'subtropical-gyres-sampled',
        label: '分子采样环流区',
        value: '5',
        unit: '个',
        note: '98 个样本覆盖南北大西洋、南北太平洋和印度洋副热带环流区，不表示五个孤立物种或各区密度相等。',
      },
      {
        key: 'experimental-egg-string-length',
        label: '实验卵带长度',
        value: '5.0–17.5',
        unit: 'mm',
        note: '少数实验个体释放的短直胶质卵带范围，不是每条卵带的固定尺寸。',
      },
      {
        key: 'veliger-hatching-at-19c',
        label: '实验孵化时间',
        value: '约 3',
        unit: '天',
        note: '19°C 条件下孵出带幼壳的浮游摄食型面盘幼体，不能外推为野外固定孵化期。',
      },
    ],
    media: {
      image:
        './images/species/atlantic-blue-sea-slug/01-ocean-surface-adult-portrait.webp',
      alt: '开阔蓝色海面下，一只完整大西洋海神海蛞蝓位于画面右侧，蓝色足面朝向天空，可见三对大型侧簇和靠尾的一对小型鳃突组',
      focalPoint: { x: 0.67, y: 0.49 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/atlantic-blue-sea-slug/02-upside-down-countershading.webp',
          alt: '从水下仰视紧贴海面的大西洋海神海蛞蝓，银白真背面朝向镜头，蓝色边缘贴近上方波动水面',
          title: '蓝色足面向天，银白真背面向深水',
          caption:
            '胃腔中的空气帮助它维持倒置姿态；反向保护色是形态与朝向的合理解释，尚无实验量化防捕食效果。',
          focalPoint: { x: 0.55, y: 0.48 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/atlantic-blue-sea-slug/03-physalia-feeding.webp',
          alt: '海面下，一只大西洋海神海蛞蝓贴近小型僧帽水母下侧的水螅体，前部鳃突接触并控制猎物',
          title: '从僧帽水母下方取食',
          caption:
            'Physalia 是有野外与实验记录的猎物；画面表现抓握和取食关系，不表示毒力增强、固定猎物比例或捕食结果。',
          focalPoint: { x: 0.55, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/atlantic-blue-sea-slug/04-cerata-cnidosac-closeup.webp',
          alt: '大西洋海神海蛞蝓一簇蓝银色细长鳃突的微距重建，深蓝尖端和半透明组织占据画面中央',
          title: '刺丝囊最终进入鳃突末端',
          caption:
            '专门细胞可在刺胞囊中保存猎物未发射的刺丝囊；生成近景不能显示真实刺丝囊数量、毒量或鳃突组数。',
          focalPoint: { x: 0.56, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/atlantic-blue-sea-slug/05-free-egg-strings.webp',
          alt: '倒置漂浮的大西洋海神海蛞蝓周围散布多条细小浅色卵带，卵带从海面薄层向蓝色水体延伸',
          title: '成体附近的自由卵带',
          caption:
            '实验记录的卵带长约 5.0 至 17.5 mm，可自由下沉或落在猎物残骸上；画面组合成体与自由卵带，不对应被记录的释放瞬间，也不提供精确长度、数量或附着规则。',
          focalPoint: { x: 0.67, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/atlantic-blue-sea-slug/06-veliger-larva.webp',
          alt: '深蓝水体中一只透明面盘幼体的微距情景重建，可见盘卷幼壳和两片布满纤毛的面盘叶',
          title: '带壳的面盘幼体阶段',
          caption:
            '19°C 实验中约第 3 天孵出的幼体只有半具、尚未盘卷的卵圆幼壳，数日后幼壳才盘卷；画面仅重建带壳面盘幼体的一般结构，不对应第 3 天壳形、野外日龄或真实比例。',
          focalPoint: { x: 0.53, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...ATLANTIC_BLUE_SEA_SLUG_SOURCES,
      {
        title: 'GBIF: Glaucus atlanticus Forster, 1777 nomenclatural record',
        url: 'https://www.gbif.org/species/5190072',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: ATLANTIC_BLUE_SEA_SLUG_CONTENT_DATE,
    updatedAt: ATLANTIC_BLUE_SEA_SLUG_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
