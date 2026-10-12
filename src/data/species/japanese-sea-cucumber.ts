import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const JAPANESE_SEA_CUCUMBER_SOURCE_DATE = '2026-08-29' as const;

const JAPANESE_SEA_CUCUMBER_CONTENT_DATE = '2026-08-29' as const;

const JAPANESE_SEA_CUCUMBER_SOURCES = [
  {
    title: 'WoRMS: Apostichopus japonicus (Selenka, 1867), AphiaID 241776',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=241776',
    kind: 'taxonomy',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST: Classification of Apostichopus japonicus, AphiaID 241776',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/241776',
    kind: 'taxonomy',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'WoRMS: Taxon list for Apostichopus',
    url: 'https://www.marinespecies.org/aphia.php?p=taxlist&tName=Apostichopus',
    kind: 'taxonomy',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'Miller et al. 2017: Molecular phylogeny of extant Holothuroidea',
    url: 'https://doi.org/10.1016/j.ympev.2017.02.014',
    kind: 'taxonomy',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'Woo et al. 2017: A taxonomic revision of the genus Apostichopus',
    url: 'https://doi.org/10.11646/zootaxa.4350.1.7',
    kind: 'taxonomy',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'Kanno & Kijima 2003: Genetic differentiation among color variants',
    url: 'https://doi.org/10.1046/j.1444-2906.2003.00690.x',
    kind: 'taxonomy',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'Kanno et al. 2006: Microsatellite evidence for isolation among color variants',
    url: 'https://doi.org/10.1007/s10126-006-6014-8',
    kind: 'taxonomy',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'MEE HJ 1260-2022: Chinese marine-organism list including Apostichopus japonicus',
    url: 'https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/shjbh/xgbzh/202207/W020220719527543090538.pdf',
    kind: 'taxonomy',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List 2013: Apostichopus japonicus, e.T180424A1629389',
    url: 'https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T180424A1629389.en',
    kind: 'conservation',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'CITES: Appendices I, II and III',
    url: 'https://cites.org/eng/app/appendices.php',
    kind: 'conservation',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'FAO 2010: Managing sea cucumber fisheries with an ecosystem approach',
    url: 'https://www.fao.org/4/i1384e/i1384e00.htm',
    kind: 'conservation',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'Japan Fisheries Agency: Countermeasures against poaching',
    url: 'https://www.jfa.maff.go.jp/j/enoki/mitsuryotaisaku.html',
    kind: 'conservation',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'FAO 2012: Commercially important sea cucumbers of the world',
    url: 'https://www.fao.org/4/i1918e/i1918e.pdf',
    kind: 'general',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'Choe & Ohshima 1961: Differences between green and red commercial forms',
    url: 'https://doi.org/10.2331/suisan.27.97',
    kind: 'ecology',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'Soliman et al. 2013: Captive breeding and larval development of red and green variants',
    url: 'https://doi.org/10.1111/j.1365-2109.2011.03078.x',
    kind: 'ecology',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'Fujiwara et al. 2010: Spawning induced by cubifrin',
    url: 'https://doi.org/10.1007/s12562-010-0262-2',
    kind: 'ecology',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'Gao & Yang 2015: Anatomy of Apostichopus japonicus',
    url: 'https://doi.org/10.1016/B978-0-12-799953-1.00004-0',
    kind: 'general',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'Sun et al. 2015: Feeding behavior and digestive physiology',
    url: 'https://doi.org/10.1016/j.physbeh.2014.11.051',
    kind: 'ecology',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'Gao et al. 2014: Gut-content and ambient-sediment bacterial communities',
    url: 'https://doi.org/10.1371/journal.pone.0100092',
    kind: 'ecology',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'Hou et al. 2018: Bioturbation effects on sediment phosphorus',
    url: 'https://doi.org/10.3354/aei00248',
    kind: 'ecology',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'Yokoyama 2013: Growth and food source below fish cages',
    url: 'https://doi.org/10.1016/j.aquaculture.2012.10.022',
    kind: 'ecology',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
  {
    title: 'Yamana & Hamano 2006: Standardized body-size measurement',
    url: 'https://doi.org/10.1111/j.1444-2906.2006.01187.x',
    kind: 'general',
    accessedAt: JAPANESE_SEA_CUCUMBER_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-apostichopus-japonicus',
    slug: 'japanese-sea-cucumber',
    names: {
      zh: '仿刺参',
      en: 'Japanese Spiky Sea Cucumber',
      aliases: ['刺参', 'Japanese Sea Cucumber'],
    },
    scientificName: 'Apostichopus japonicus',
    taxonomy: animalTaxonomy(
      taxon('Echinodermata', '棘皮动物门'),
      taxon('Holothuroidea', '海参纲'),
      taxon('Synallactida', '辛那参目'),
      taxon('Stichopodidae', '刺参科'),
      taxon('Apostichopus', '仿刺参属'),
    ),
    conservation: {
      ...conservation('EN', 'decreasing', 2010, 'A2bd'),
      assessor:
        'IUCN Red List，评估于2010-05-19，2013年发布；分类口径早于2017年A. japonicus与A. armatus拆分',
    },
    distribution: {
      realms: ['marine'],
      continents: ['亚洲'],
      regions: [
        '西北太平洋温带沿岸',
        '日本列岛沿岸（北海道至鹿儿岛）',
        '朝鲜半岛沿岸',
        '俄罗斯远东沿岸与萨哈林岛',
        '中国黄海、渤海及相邻北部温带沿岸',
      ],
      countries: ['中国', '日本', '朝鲜', '韩国', '俄罗斯'],
      range:
        '严格A. japonicus分布于西北太平洋温带浅海，包括中国、日本、朝鲜半岛和俄罗斯远东沿岸；2017年修订给出的北界为萨哈林岛、南界为鹿儿岛县。旧广义分布资料混合A. armatus，具体地点需以骨片或分子凭证重核。',
      center: { lat: 40, lng: 135 },
    },
    habitats: [
      {
        name: '西北太平洋温带浅海硬底',
        realm: 'marine',
        description:
          '严格本种生活在中国、日本、朝鲜半岛和俄罗斯远东的温带浅海，沿海床表面缓慢移动并摄食沉积物。',
        isPrimary: true,
      },
      {
        name: '岩石、卵石与砾石底',
        realm: 'marine',
        description:
          '红色型常与较外海的岩石、卵石和砾石底联系；石块间隙也可提供高温季节隐蔽位置。',
      },
    ],
    measurements: {},
    diet: {
      types: ['detritivore'],
      foods: [
        '海床表层沉积物中的有机碎屑',
        '底栖硅藻与其他微藻',
        '沉积物中的细菌和微生物聚集体',
        '分解中的植物与动物来源颗粒物',
      ],
      description:
        '用20枚盾状口触手抓取海床表层沉积物，并选择、消化其中的有机碎屑、微藻和微生物。具体食物组成随地点和季节改变；现有行为与肠内容物研究多采用未按2017年标准复核的历史广义种。',
    },
    activity: [
      '用腹面纵列管足附着海床并缓慢爬行，以20枚口触手连续抓取表层沉积物',
      '日本红色型观察显示，高温夏季可进入活动和摄食显著降低的夏眠状态',
      '历史广义种实验记录夜间摄食增强；严格本种的全球昼夜节律仍待验证',
    ],
    tags: ['海洋', '棘皮动物', '温带浅海', '沉积食者', '夏眠', '濒危', '分类修订'],
    summary:
      '西北太平洋温带岩石与砾石底的红色海参，以二十枚盾状触手摄食表层沉积物；2017年修订后，绿、黑色型已归入A. armatus。',
    description:
      '仿刺参Apostichopus japonicus是西北太平洋的温带底栖棘皮动物。严格本种对应红色型，背侧体壁退化桌形骨片的盘缘平滑；绿色和黑色型属于近缘A. armatus。它用腹面管足移动，以二十枚盾状触手抓取沉积物中的有机碎屑、微藻和微生物，并在高温季节进入夏眠。IUCN仍把拆分前广义种评为濒危，该评估的物种范围早于 2017 年拆分。',
    storySections: [
      {
        key: 'one-old-name-two-species',
        label: '分类',
        title: '2017 年重新分开红色与绿黑色型',
        body: '很长时间里，红、绿、黑三种海参都叫Apostichopus japonicus。2017年，研究者重新检查模式标本和馆藏骨片，认定红色型才是严格A. japonicus，绿色型和黑色型属于A. armatus。因此旧养殖、温度和食性实验需要先核对物种身份。',
      },
      {
        key: 'ossicle-diagnosis',
        label: '识别',
        title: '微小骨片帮助鉴定物种',
        body: '严格仿刺参的背侧体壁含退化桌形骨片，圆盘边缘平滑、不具刺。近缘A. armatus则以有刺边缘的同类骨片为主。活体颜色、底质和外形能帮助筛查，却不能替代骨片组合或经过验证的分子鉴定。',
      },
      {
        key: 'twenty-tentacles',
        label: '取食',
        title: '摄食沉积物中的有机材料',
        body: '口周围的二十枚盾状触手轮流贴近海床，抓起表层沉积物并送入口中。动物消化其中的有机碎屑、微藻和微生物，再排出重新加工的颗粒。实验还发现肠内和周围沉积物的细菌群落不同，说明取食过程并非毫无选择地吞下一切。',
      },
      {
        key: 'summer-aestivation',
        label: '行为',
        title: '夏天缩进石缝',
        body: '日本早期研究在高温夏季观察到几乎全部红色型进入夏眠。它们收缩身体、减少移动和摄食，并利用岩石或砾石间隙隐蔽。不同海域的温度、食物和水流会改变时间表，尚无全种统一的夏眠温度阈值。',
      },
      {
        key: 'transparent-larva',
        label: '发育',
        title: '从透明幼体到底栖稚参',
        body: '红色型的养殖记录从受精卵一路跟到耳状幼体、樽形幼体、五触手幼体和稚参。耳状幼体在水中游动，五触手阶段开始准备附着，稚参才进入海床生活。水槽里的天数受温度和饵料控制，能够解释发育顺序，却不是野外所有个体共用的日历。',
      },
      {
        key: 'identify-before-release',
        label: '保护',
        title: '放流前核对物种和遗传来源',
        body: '旧养殖体系常把两个现行物种都写作A. japonicus。若苗种没有骨片、遗传来源和病原记录，放流数量再大也无法判断它是否补充了目标野生种群。有效的增殖需要未放流对照、长期回捕或遗传监测，还要公开存活与繁殖结果。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1867 年的命名由模式材料重新核对',
        body: '仿刺参的科学命名记录署名为 Selenka，年份为 1867 年，现用学名为 Apostichopus japonicus。2017 年研究者重新检查模式标本和馆藏骨片，确定红色型属于严格本种，绿色和黑色型属于 A. armatus。微小骨片的盘缘差异使一个长期混用的名称重新得到厘清。',
      },
    ],
    keyFacts: [
      'WoRMS接受学名Apostichopus japonicus (Selenka, 1867)，AphiaID为241776。',
      '当前分类采用辛那参目Synallactida；旧楯手目Aspidochirotida已在2017年海参纲分子系统修订中停用。',
      '2017年属级修订把过去的红、绿、黑三种颜色型拆成两个有效种。',
      '红色型属于严格Apostichopus japonicus，绿色型和黑色型属于A. armatus。',
      '普通照片中的红色只能提供线索，可靠种级鉴定要检查背侧体壁骨片或经验证的分子标记。',
      '严格A. japonicus的退化桌形骨片盘缘平滑、不具刺；A. armatus以有刺盘缘骨片为主。',
      '两种Apostichopus的触手、疣足、管足和泄殖腔骨片相似，不能只取这些部位鉴定。',
      '严格本种分布在中国、日本、朝鲜半岛和俄罗斯远东的西北太平洋温带浅海。',
      '2017年修订给出的北界是萨哈林岛，南界是日本鹿儿岛县。',
      '红色型常与较外海的岩石、卵石和砾石底联系。',
      '旧资料中绿、黑色型的近岸沙泥底生境属于A. armatus，不属于严格本种的主要生境。',
      '口位于前端偏腹侧，周围有20枚盾状触手。',
      '腹面较平，管足沿纵向步带排列并负责附着和缓慢移动。',
      '它以盾状触手抓取海床表层沉积物，摄食其中的有机碎屑、微藻和微生物。',
      '历史广义种实验记录夜间摄食峰，但严格本种的全球昼夜节律仍未验证。',
      '1961年日本研究在高温夏季观察到几乎全部红色型进入夏眠。',
      '夏眠不是闭眼睡觉，也不会形成茧；个体收缩、隐蔽并显著降低活动和摄食。',
      '雌雄外观难以区分，配子由前端背侧、口触手后方的单一生殖孔释放。',
      '产卵时个体可抬高并摆动前端，把精子或卵释放到海水中完成外部受精。',
      '严格红色型完成受精卵、囊胚、原肠胚、耳状幼体、樽形幼体、五触手幼体和底栖稚参阶段。',
      '养殖条件下的发育天数和卵数不能直接换算成野外固定参数。',
      '沉积摄食和排泄会再加工海床表层颗粒，参与有机物、微生物和营养盐循环。',
      'IUCN将历史广义种评为EN A2bd，趋势decreasing，实际评估日期为2010-05-19。',
      'IUCN估算历史广义种在30至50年间至少下降60%；该数字早于2017年拆分。',
      '截至2026-08-29，CITES附录没有列入本种；未列附录不代表捕捞可持续。',
      '单次活体长度会受收缩影响，绿色、黑色型的标准体长公式不能直接用于严格本种。',
      '现有证据不足以填写严格本种的成体长度、体重、寿命、成熟年龄、最大深度或全球个体数。',
      '苗种放流必须先确认物种、遗传来源和病原状态，并设置长期的放流后对照监测。',
    ],
    threats: [
      '高价值干制品贸易和市场需求推动的定向过度捕捞',
      '浅海底栖、移动缓慢且容易采集，使局部种群承受偷捕和非法流通压力',
      '岩石、卵石和砾石底受疏浚、岸线工程、沉积物输入与污染改变；严格本种的种群效应仍缺少定量评估',
      '历史上把A. japonicus与A. armatus混为一种，导致捕捞趋势、放流效果和真实分布难以分开判断',
      '未经物种、遗传和病原风险核验的苗种放流可能把近缘种或不适配种源引入野生种群；实际影响仍需监测',
    ],
    conservationActions: [
      '按2017年分类重建野外基线：保留照片、背侧体壁骨片、组织样本、地点、深度和底质信息，分别统计A. japonicus与A. armatus',
      '用标准化水下样带和重复季节调查监测密度、体型结构、可见率和采捕量，不只依赖市场上岸量',
      '组合使用许可、总量或努力量限制、季节性禁采、最小采捕尺寸和长期禁采区，并根据本地数据定期复核',
      '保护红色型使用的岩石、卵石和砾石底，降低疏浚、岸线工程、污染和过量沉积物输入',
      '加强港口、市场和线上交易的来源追溯及反偷捕执法，并公开可核验的查获和渔获数据',
      '放流前确认现行物种、亲本来源、遗传多样性和病原状态；放流后设置未放流对照并监测存活、繁殖和遗传影响',
      '推动IUCN重新评估，把严格A. japonicus与A. armatus的分布、捕捞趋势和恢复成效分开处理',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'iucn-status',
        label: 'IUCN等级',
        value: 'EN',
        note: '评估于2010年，准则A2bd；分类口径早于2017年拆分',
      },
      {
        key: 'oral-tentacles',
        label: '口触手',
        value: '20',
        unit: '枚',
        note: '盾状触手，用于抓取海床表层沉积物',
      },
      {
        key: 'former-color-types',
        label: '原三色型现行归属',
        value: '2',
        unit: '种',
        note: '2017年日本材料修订：三种历史颜色型归入A. japonicus与A. armatus；不是该属全球物种数',
      },
      {
        key: 'historic-decline',
        label: '历史广义种估计下降',
        value: '≥60',
        unit: '%',
        note: 'IUCN对30至50年窗口的上岸量推定；混合拆分前两种，不是当前严格本种普查',
      },
    ],
    media: {
      image:
        './images/species/japanese-sea-cucumber/01-rocky-reef-red-adult-portrait.webp',
      alt: '西北太平洋温带浅海的灰褐岩石与砾石底上，一只完整红褐色仿刺参缓慢移动',
      focalPoint: { x: 0.7, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/japanese-sea-cucumber/02-peltate-tentacle-sediment-feeding.webp',
          alt: '红褐色海参前端贴近砾石间薄层沉积物，二十枚短而宽的口触手围绕口部，最低处触手接触底质',
          title: '二十枚盾状口触手接触沉积物',
          caption:
            'AI生成科学情景重建；二十枚盾状触手符合严格A. japonicus形态，低处触手接触沉积物只重建历史广义种的候选取食姿态。画面不能证明正在抓取或摄入颗粒，也不能确认个体种级身份、食物组成、动作频率或昼夜节律。',
          focalPoint: { x: 0.52, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/japanese-sea-cucumber/03-ventral-tube-feet-locomotion.webp',
          alt: '红色海参贴附在一块卵石表面，扁平腹面与三条纵向管足带清楚可见',
          title: '扁平腹面与纵列管足',
          caption:
            'AI生成科学情景重建；管足行列依据分类描述，像素不能用于计数、测量或骨片鉴定，也不能仅凭红色外观确认物种。',
          focalPoint: { x: 0.52, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/japanese-sea-cucumber/04-summer-aestivation-rock-shelter.webp',
          alt: '一只收缩的红褐色海参贴在大卵石阴面，口触手收回，周围是安静砾石底',
          title: '高温季节的低活动状态',
          caption:
            'AI生成科学情景重建；红色型夏眠有日本历史观察支持，具体石缝、温度和持续时间不能从画面推定。个体没有闭眼、成茧或完全埋藏。',
          focalPoint: { x: 0.58, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/japanese-sea-cucumber/05-upright-egg-release-reconstruction.webp',
          alt: '一只红色海参抬起身体前端，淡色配子羽流从口触手后方的前背侧单一开口散入海水',
          title: '前端抬起与单一生殖孔释放',
          caption:
            'AI生成科学情景重建；姿势依据诱导产卵实验，释放位置依据解剖资料。画面不能确定配子性别、数量、自然同步性或产卵时间。',
          focalPoint: { x: 0.5, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/japanese-sea-cucumber/06-auricularia-larva-microscopy.webp',
          alt: '暗蓝灰显微背景中，一只透明耳状幼体具有连续弯曲纤毛带和可见的简单消化道',
          title: '红色亲本谱系的透明耳状幼体',
          caption:
            'AI生成科学情景重建；红色指亲本颜色型，幼体本身透明。画面不能确定年龄、尺寸、存活率或野外发育速度。',
          focalPoint: { x: 0.5, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...JAPANESE_SEA_CUCUMBER_SOURCES,
      {
        title: 'GBIF: Apostichopus japonicus (Selenka, 1867) nomenclatural record',
        url: 'https://www.gbif.org/species/2279100',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: false,
    publishedAt: JAPANESE_SEA_CUCUMBER_CONTENT_DATE,
    updatedAt: JAPANESE_SEA_CUCUMBER_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
