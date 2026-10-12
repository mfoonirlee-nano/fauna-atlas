import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const CROWN_OF_THORNS_STARFISH_SOURCE_DATE = '2026-08-29' as const;

const CROWN_OF_THORNS_STARFISH_CONTENT_DATE = '2026-08-29' as const;

const CROWN_OF_THORNS_STARFISH_SOURCES = [
  {
    title: 'WoRMS: Acanthaster planci (Linnaeus, 1758), AphiaID 213289',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=213289',
    kind: 'taxonomy',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST: classification of Acanthaster planci, AphiaID 213289',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/213289',
    kind: 'taxonomy',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title: 'WoRMS: Acanthaster solaris (Schreber, 1793), AphiaID 378572',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=378572',
    kind: 'taxonomy',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title: 'Vogler et al. 2008: four crown-of-thorns starfish lineages',
    url: 'https://doi.org/10.1098/rsbl.2008.0454',
    kind: 'taxonomy',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title: 'Vogler et al. 2012: phylogeography in the Indian Ocean',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3424128/',
    kind: 'distribution',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title: 'Wörheide et al. 2022: Acanthaster species-complex morphology',
    url: 'https://doi.org/10.11646/zootaxa.5209.3.7',
    kind: 'taxonomy',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title:
      'Uthicke et al. 2024: biology and ecology of five Acanthaster species',
    url: 'https://doi.org/10.1007/s00227-023-04355-5',
    kind: 'general',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title: 'Burn et al. 2020: behaviour of A. planci and A. cf. solaris',
    url: 'https://doi.org/10.1371/journal.pone.0228796',
    kind: 'ecology',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title: 'Saponari et al. 2018: A. planci outbreak in Ari Atoll',
    url: 'https://doi.org/10.1007/s10661-018-6661-z',
    kind: 'ecology',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title:
      'Pisapia et al. 2016: coral recovery and disturbance in central Maldives',
    url: 'https://doi.org/10.1038/srep34720',
    kind: 'ecology',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title:
      'Deaker and Byrne 2022: crown-of-thorns starfish life-history traits',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9023020/',
    kind: 'ecology',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title:
      'Pratchett et al. 2014: limits to understanding Acanthaster outbreaks',
    url: 'https://doi.org/10.1201/b17143-4',
    kind: 'ecology',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title:
      'Doll et al. 2025: ontogenetic change in juvenile Acanthaster morphology',
    url: 'https://doi.org/10.1007/s00338-025-02637-6',
    kind: 'ecology',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search: Acanthaster planci',
    url: 'https://www.iucnredlist.org/search?query=Acanthaster%20planci&searchType=species',
    kind: 'conservation',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title: 'CITES: Appendices I, II and III',
    url: 'https://cites.org/eng/app/appendices.php',
    kind: 'conservation',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title: 'Australian Institute of Marine Science: crown-of-thorns starfish',
    url: 'https://www.aims.gov.au/research-topics/marine-life/crown-thorns-starfish',
    kind: 'general',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
  {
    title: 'Reef Authority: Crown-of-thorns Starfish Control Program',
    url: 'https://www2.gbrmpa.gov.au/our-work/programs-and-projects/crown-thorns-starfish-control-program',
    kind: 'conservation',
    accessedAt: CROWN_OF_THORNS_STARFISH_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-acanthaster-planci',
    slug: 'crown-of-thorns-starfish',
    names: {
      zh: '棘冠海星',
      en: 'Crown-of-thorns Starfish',
      aliases: ['长棘海星', 'Crown-of-thorns Seastar', 'COTS'],
    },
    scientificName: 'Acanthaster planci',
    taxonomy: animalTaxonomy(
      taxon('Echinodermata', '棘皮动物门'),
      taxon('Asteroidea', '海星纲'),
      taxon('Valvatida', '瓣棘海星目'),
      taxon('Acanthasteridae', '长棘海星科'),
      taxon('Acanthaster', '长棘海星属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['亚洲'],
      regions: [
        '阿曼湾与阿拉伯海北缘',
        '马尔代夫与北印度洋中部环礁',
        '安达曼海与苏门答腊西缘',
        '印度尼西亚西部岛礁与圣诞岛周边东印度洋',
      ],
      countries: [
        '阿曼',
        '阿拉伯联合酋长国',
        '印度',
        '马尔代夫',
        '泰国',
        '印度尼西亚',
      ],
      range:
        '狭义范围采用北印度洋狭义Acanthaster planci：从阿曼湾经马尔代夫、安达曼海至印度尼西亚西部和圣诞岛周边。阿曼与阿联酋是南北印度洋谱系共域区，个体需要分子资料确认。范围不含红海、西南印度洋、南海、大堡礁或其他太平洋海域；圣诞岛不映射为澳大利亚大陆分布。',
      center: { lat: 3.2, lng: 73 },
    },
    habitats: [
      {
        name: '热带浅水珊瑚礁',
        realm: 'marine',
        description:
          '北印度洋岸礁和环礁的礁冠、礁坡及活珊瑚斑块提供猎物；马尔代夫研究分别在8米礁冠和15米礁坡调查本种，这两个深度不是全球上下限。',
        isPrimary: true,
      },
      {
        name: '礁体缝隙与突悬阴面',
        realm: 'marine',
        description:
          '复杂死珊瑚骨架、孔隙和珊瑚块底面提供白昼藏身处；调查时段和搜索缝隙的力度会改变可探测率。',
      },
    ],
    measurements: {
      length: {
        min: 22,
        max: 57,
        unit: 'cm',
        note: '2017年马尔代夫Lankanfushi高密度地点的现场样本总直径，按腕尖到对侧腕尖测量；不是物种成体范围或全球极值。',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: ['造礁石珊瑚的活组织', 'Porites珊瑚', 'Favites珊瑚', 'Pavona珊瑚'],
      description:
        '管足把身体固定在珊瑚上，贲门胃从腹面口部翻出并覆盖活珊瑚组织，体外消化后留下裸露骨骼。马尔代夫现场中Porites被取食最多，Favites和Pavona表现出选择性；猎物组成随当地珊瑚群落而变。',
    },
    activity: [
      '马尔代夫现场研究记录到夜间暴露、移动和取食增加',
      '白天常藏在礁体孔隙、珊瑚块底面和突悬阴面',
      '用腹面管足沿活珊瑚、死骨骼和其他硬底移动',
      '高密度时多个个体可在同一礁区形成移动的取食前沿',
    ],
    tags: [
      '棘皮动物门',
      '海星纲',
      '多腕海星',
      '北印度洋',
      '珊瑚礁',
      '原生珊瑚捕食者',
      '体外消化',
      '种群暴发',
      '物种复合群',
      'IUCN未评估',
    ],
    summary:
      '棘冠海星是北印度洋原生珊瑚捕食者；低密度个体参与礁区自然生态过程，局部暴发的高密度取食则会造成活珊瑚覆盖损失。它用管足移动，把胃翻出体外消化珊瑚。',
    description:
      '棘冠海星Acanthaster planci是长棘海星科的多腕海星。WoRMS接受Acanthaster planci并把A. solaris列作异名；系统地理研究识别至少四个谱系，两套分类口径并存，种界尚未统一。狭义本种范围采用北印度洋谱系。AIMS把大堡礁动物写作A. cf. solaris；大堡礁和太平洋资料不能直接作为本种的严格种级证据。马尔代夫现场记录显示，它常在夜间离开礁缝，把贲门胃翻出并覆盖活珊瑚组织。新鲜取食疤痕不同于白化，调查者还需结合组织状态、疤痕边界和时间序列判读。局地暴发可迅速减少活珊瑚，暴发涉及多个因素和竞争假说，包括营养盐与水质、捕食压力、幼体存活与招募、海流连通以及气候事件。长棘含毒素并可造成刺伤、疼痛和持续炎症；不要徒手触摸、搬动或切割，控制工作应交给受训团队。IUCN尚未评估本种，NE不等于LC或无危。',
    storySections: [
      {
        key: 'two-taxonomic-lenses',
        label: '分类边界',
        title: '接受名与地理谱系仍有分歧',
        body: 'WoRMS接受Acanthaster planci，并把A. solaris列作异名；系统地理研究识别至少四个谱系。两套分类口径并存，种界尚未统一。AIMS把大堡礁动物写作A. cf. solaris，太平洋资料不能代替本种的严格种级证据。目前狭义本种范围采用北印度洋。',
      },
      {
        key: 'blue-distal-arms',
        label: '形态与安全',
        title: '蓝色腕端之前布满长棘',
        body: '北印度洋真A. planci常在腕背远端呈鲜艳蓝色，这一段明显少长棘；中央盘和腕基部仍覆盖密集棘刺。颜色只能提供线索，研究人员还要结合地点、棘刺微形态和DNA。长棘含毒素，刺伤会引起疼痛和伤口反应，观察者不要徒手处理。',
      },
      {
        key: 'external-coral-digestion',
        label: '取食',
        title: '胃翻到身体外面消化珊瑚',
        body: '棘冠海星用管足贴住珊瑚，把贲门胃从腹面翻出并铺在活珊瑚组织上。胃收回后常留下边缘清楚的白色裸骨。取食疤痕不同于白化，单张白斑照片仍不能排除疾病、旧死亡或其他损伤。马尔代夫暴发现场中Porites被吃得最多，Favites和Pavona则表现出选择性。',
      },
      {
        key: 'night-detectability',
        label: '昼夜行为',
        title: '夜间调查会看见更多暴露个体',
        body: '2017年，研究者在马尔代夫同一片礁冠和礁坡分时重复搜索。夜间超过97%的观测个体暴露在礁面，早晨有更多个体藏进孔隙和突悬下方。礁体复杂度和猎物供应会改变行为，这个地点的比例不能当作物种固定时钟。',
      },
      {
        key: 'borrowed-life-history',
        label: '生活史证据',
        title: '五臂稚体来自复合群研究',
        body: 'Acanthaster属幼体定居后形成五臂藻食稚体，先在壳状珊瑚藻上取食；随后发育会增加臂和棘，并转向活珊瑚。广播产卵、浮游幼体和这段稚体过程主要由大堡礁与日本研究支撑。北印度洋名义种缺少直接的产卵量、幼体持续期、转食月龄和成熟年龄数据。',
      },
      {
        key: 'outbreak-state',
        label: '暴发与管理',
        title: '密度决定一片礁承受的取食量',
        body: '低密度时，它是原生食物网中的珊瑚捕食者；暴发高密度可让活珊瑚损失超过恢复速度。暴发由多个因素和竞争假说解释，营养盐、捕食者、幼体招募、海流连通和气候扰动可能共同作用。管理者需要同步记录海星密度、活珊瑚覆盖、白化和风暴，单看清除数量无法判断礁区是否恢复。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的名称与尚未统一的种界',
        body: '棘冠海星的命名记录可追溯到林奈 1758 年的描述，现用学名为 Acanthaster planci。长棘覆盖中央盘和腕基部，是中文名所指的外形。现代研究识别至少四个地理谱系，WoRMS 接受名与系统地理研究的处理仍有差别，太平洋资料需与北印度洋狭义本种分开。',
      },
    ],
    keyFacts: [
      'WoRMS当前接受学名为Acanthaster planci (Linnaeus, 1758)，AphiaID为213289。',
      '六级分类采用Animalia、Echinodermata、Asteroidea、Valvatida、Acanthasteridae和Acanthaster。',
      'WoRMS把A. solaris列作异名，系统地理研究则区分至少四个谱系；分类口径并存。',
      'AIMS和大堡礁管理机构把当地动物写作A. cf. solaris，太平洋资料不能直接归给北印度洋本种。',
      '名义种的可靠范围从阿曼湾，经马尔代夫和安达曼海，延伸至印度尼西亚西部与圣诞岛周边。',
      '红海、西南印度洋、南海、大堡礁和东太平洋记录不进入本种狭义范围。',
      '阿曼和阿联酋同时出现北、南印度洋谱系，个体身份不能只按地点判断。',
      '本种没有可用的IUCN全球评估，状态为NE，全球种群趋势为unknown；NE不等于LC或无危。',
      'CITES当前附录没有列出Acanthaster planci，未列入不能替代保护风险评估。',
      '棘冠海星是北印度洋原生珊瑚捕食者，局部种群暴发不会使它自动成为外来入侵种。',
      '低密度个体属于礁区自然生态过程，高密度取食才会让珊瑚损失超过恢复速度。',
      '成体由宽中央盘和许多细长腕构成，历史材料记录过15条腕和14至19条腕的现场范围。',
      '北印度洋真A. planci常有鲜艳蓝色的腕背远端，该段明显缺少长棘。',
      '长棘带有毒素并可造成刺伤、疼痛和炎症；不要徒手触摸、搬动或切割。',
      '马尔代夫一个高密度地点记录的总直径为22至57厘米，这不是全球成体范围。',
      '马尔代夫现场研究覆盖8米礁冠和15米礁坡，这两个深度不是全球栖息上下限。',
      '取食时，贲门胃从腹面翻出并覆盖活珊瑚组织，体外消化后留下裸露骨骼。',
      'Ari Atoll研究中Porites被取食最多，Favites和Pavona表现选择性；食谱会随当地珊瑚改变。',
      '新鲜取食疤痕不同于热白化，现场需结合活组织、疤痕边界和时间序列判断。',
      '马尔代夫Lankanfushi研究夜间记录到超过97%的个体暴露在礁面，这个比例只适用于当时当地。',
      '局部暴发会造成活珊瑚覆盖损失，并与热白化、风暴和疾病形成累积影响。',
      '暴发涉及多因素与竞争假说，营养盐、捕食压力、幼体招募、海流连通和气候事件都需要检验。',
      '五臂稚体先在壳状珊瑚藻上藻食；随后发育会增加臂和棘，并转向活珊瑚。',
      '繁殖、幼体、成熟年龄、寿命和年摄食面积的大多数数字来自太平洋谱系，不能移入严格本种的数据。',
      '2024年综述发现棘冠海星类研究的88%针对西太平洋A. cf. solaris，真A. planci专项论文只有8篇。',
      '现有证据不支持填写本种体重、寿命、成熟年龄、产卵量、年摄食面积或全球成熟个体数。',
    ],
    threats: [
      '海洋热浪和珊瑚白化减少活珊瑚猎物；北印度洋名义种的种群后果尚无全球评估',
      '强风暴和礁体物理损伤会改变猎物供给、缝隙庇护与局地栖息结构',
      '沉积、污染和水质退化会重塑珊瑚群落及幼体环境，本种的剂量响应仍不清楚',
      '暴发地点的人工移除和定点扑杀会降低局部种群，影响取决于强度、频次与连通性',
      '历史分类混用与北印度洋监测空缺掩盖物种级分布、趋势和局部种群变化',
    ],
    conservationActions: [
      '在北印度洋建立带照片、采样凭证和可复核坐标的长期监测',
      '分别记录海星密度、总直径、隐蔽比例、取食疤痕和活珊瑚覆盖率',
      '在阿曼和阿联酋等共域区用DNA条形码或群体遗传标记确认物种',
      '统一样带宽度、礁缝搜索方法、调查时段和可探测性记录',
      '把新鲜取食疤、热白化、疾病和旧死亡骨骼分开记录，保留多扰动归因',
      '保护活珊瑚、礁体复杂度与水质，并监测热白化和风暴后的猎物变化',
      '保存组织样本、影像与地理元数据，建设北印度洋区域间的标本和数据凭证',
      '需要控制暴发时，由受训并获许可的团队执行当地方案，持续复查海星密度与珊瑚响应',
      '面向公众发布不触摸、不搬动和不切割的报告指引',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'lineage-range',
        label: '可靠谱系范围',
        value: '北印度洋',
        note: '从阿曼湾经马尔代夫至印度尼西亚西部；共域区需要分子鉴定。',
      },
      {
        key: 'field-diameter',
        label: '现场样本总直径',
        value: '22–57',
        unit: 'cm',
        note: '2017年马尔代夫Lankanfushi高密度地点；不是物种成体范围。',
      },
      {
        key: 'night-exposure',
        label: '夜间暴露比例',
        value: '>97',
        unit: '%',
        note: '同一马尔代夫现场研究；环境会改变隐蔽行为。',
      },
      {
        key: 'species-specific-studies',
        label: '名义种专项论文',
        value: '8',
        unit: '篇',
        note: '2024年系统综述的WoS样本；棘冠海星类研究中88%针对西太平洋谱系。',
      },
    ],
    media: {
      image:
        './images/species/crown-of-thorns-starfish/01-coral-reef-adult-portrait.webp',
      alt: '蓝色海水与珊瑚礁坡前，一只红褐长棘、灰蓝多腕的棘冠海星位于画面右侧',
      focalPoint: { x: 0.7, y: 0.5 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/crown-of-thorns-starfish/02-dorsal-disc-arms-and-spines.webp',
          alt: '俯视一只多腕海星平展在浅色礁面，中央盘与每条腕上密布红褐色长棘',
          title: '中央盘、多腕与成排长棘',
          caption:
            'AI生成科学情景重建；像素只能呈现多腕、中央盘和长棘的外观，不能确认它属于Acanthaster planci或区分其他Acanthaster物种，也不能用于量取臂数、棘长或体径。',
          focalPoint: { x: 0.5, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/crown-of-thorns-starfish/03-everted-stomach-coral-feeding.webp',
          alt: '一只灰褐多腕海星铺在枝状珊瑚上，身体下方邻接一片不规则白色珊瑚骨骼',
          title: '腹面淡色组织与白色珊瑚斑块',
          caption:
            'AI生成科学情景重建；画面呈现海星覆盖珊瑚、腹面淡色组织和邻近白色斑块，不能确认胃正在外翻或个体正在取食，也不能量取体径、疤痕面积或消化速率。',
          focalPoint: { x: 0.51, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/crown-of-thorns-starfish/04-reef-high-density-mosaic.webp',
          alt: '四只多腕长棘海星分散在活珊瑚与藻覆礁面之间，彼此留有清楚间隔',
          title: '四个分离主体的高密度示意',
          caption:
            'AI生成科学情景重建；画面安排四个清楚分离的多腕主体，不能鉴定它们的Acanthaster物种，也不能用于确定野外真实数量、密度、珊瑚覆盖率或暴发范围。',
          focalPoint: { x: 0.5, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/crown-of-thorns-starfish/05-broadcast-spawning-plume.webp',
          alt: '一只多腕海星弓起身体，多处腕基附近的淡色颗粒流在上方汇成稀薄水下羽流',
          title: '多处腕基汇起的淡色羽流',
          caption:
            'AI生成科学情景重建；多处腕基释放只呈现Acanthaster属的广播产卵机制，不能凭像素鉴定物种、确定羽流是精子还是卵，或量取配子量、释放速率和同步程度。',
          focalPoint: { x: 0.51, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/crown-of-thorns-starfish/06-five-arm-juvenile-coralline-algae.webp',
          alt: '一只低矮五腕小海星位于粉紫色壳状珊瑚藻斑块中央，腕缘仅有稀疏细小骨片',
          title: '壳状珊瑚藻上的五腕稚体',
          caption:
            'AI生成科学情景重建；画面呈现五腕稚体和粉紫色壳状珊瑚藻，不能由像素确认其种级身份、藻食行为或发育阶段，也不能确定体径、年龄、棘数或定居时间。',
          focalPoint: { x: 0.51, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...CROWN_OF_THORNS_STARFISH_SOURCES,
      {
        title: 'GBIF: Acanthaster planci (Linnaeus, 1758) nomenclatural record',
        url: 'https://www.gbif.org/species/2271208',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: CROWN_OF_THORNS_STARFISH_CONTENT_DATE,
    updatedAt: CROWN_OF_THORNS_STARFISH_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
