import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const BUGULA_NERITINA_SOURCE_DATE = '2026-08-31' as const;

const BUGULA_NERITINA_CONTENT_DATE = '2026-08-31' as const;

const BUGULA_NERITINA_SOURCES = [
  {
    title: 'WoRMS — Bugula neritina (AphiaID 111158)',
    url: 'https://www.marinespecies.org/rest/AphiaRecordByAphiaID/111158',
    kind: 'taxonomy',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Classification of Bugula neritina',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/111158',
    kind: 'taxonomy',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Synonyms of Bugula neritina',
    url: 'https://www.marinespecies.org/rest/AphiaSynonymsByAphiaID/111158',
    kind: 'taxonomy',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'GBIF Backbone Taxonomy — Bugula neritina (species key 4984851)',
    url: 'https://api.gbif.org/v1/species/4984851',
    kind: 'taxonomy',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'NCBI Taxonomy — Bugula neritina (taxid 10212)',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=10212',
    kind: 'taxonomy',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Ramsar Sites Information Service — Futian Mangrove fauna list with 总合草苔虫',
    url: 'https://rsis.ramsar.org/RISapp/files/6345930/documents/CN2518_taxo230214.pdf',
    kind: 'general',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'US Department of the Interior — Taxonomic description of Bugula neritina',
    url: 'https://www.govinfo.gov/content/pkg/GOVPUB-I-06c87877e9b22bce7d4d58c907cb137a/pdf/GOVPUB-I-06c87877e9b22bce7d4d58c907cb137a.pdf',
    kind: 'general',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Winston & Woollacott 2008 — Redescription and revision of red-pigmented Bugula species',
    url: 'https://www.biodiversitylibrary.org/part/93305',
    kind: 'taxonomy',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Bishop Museum — Introduced Marine Species Guide: Bugula neritina',
    url: 'https://data.bishopmuseum.org/HBS/invertguide/species_pdf/bugulaneritina.pdf',
    kind: 'general',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Australian NIMPIS — Bugula neritina species profile',
    url: 'https://nimpis.marinepests.gov.au/species/species/89',
    kind: 'distribution',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Smithsonian NEMESIS — Bugula neritina species summary',
    url: 'https://invasions.si.edu/nemesis/species_summary/-95',
    kind: 'distribution',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Denton et al. 2024 — The genome sequence of the ruby bryozoan, Bugula neritina',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11480708/',
    kind: 'general',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Fehlauer-Ale et al. 2014 — Cryptic species in the cosmopolitan Bugula neritina complex',
    url: 'https://doi.org/10.1111/zsc.12042',
    kind: 'distribution',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Davidson & Haygood 1999 — Sibling species, bryostatin chemotypes and Endobugula strains',
    url: 'https://pubmed.ncbi.nlm.nih.gov/10390826/',
    kind: 'distribution',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'McGovern & Hellberg 2003 — Cryptic species, cryptic endosymbionts and chemical defences',
    url: 'https://doi.org/10.1046/j.1365-294X.2003.01758.x',
    kind: 'distribution',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Mackie et al. 2006 — Global dispersal and phylogenetic relationships of Bugula neritina',
    url: 'https://doi.org/10.1007/s00227-005-0196-x',
    kind: 'distribution',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Piola & Johnston 2006 — Differential resistance to extended copper exposure in four introduced bryozoans',
    url: 'https://www.int-res.com/articles/meps2006/311/m311p103.pdf',
    kind: 'ecology',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Okamura 1990 — Particle size, flow velocity and suspension feeding by bryozoans',
    url: 'https://doi.org/10.1007/BF01344268',
    kind: 'ecology',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Bullivant 1968 — The method of feeding of lophophorates',
    url: 'https://doi.org/10.1080/00288330.1968.9515231',
    kind: 'ecology',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Burgess et al. 2019 — Self-fertilization and biparental inbreeding in Bugula neritina',
    url: 'https://doi.org/10.1002/ece3.5636',
    kind: 'ecology',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Reed & Woollacott 1982 — Attachment during Bugula neritina metamorphosis',
    url: 'https://doi.org/10.1002/jmor.1051720308',
    kind: 'ecology',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Wong et al. 2010 — Protein synthesis and rapid metamorphosis of Bugula neritina',
    url: 'https://doi.org/10.1186/1477-5956-8-25',
    kind: 'ecology',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Kitamura & Hirayama 1984 — Growth of the colony and maturation of zooids in the sea',
    url: 'https://doi.org/10.4282/sosj1979.5.9',
    kind: 'ecology',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Davidson et al. 2001 — Evidence for bryostatin biosynthesis by Candidatus Endobugula sertula',
    url: 'https://doi.org/10.1128/AEM.67.10.4531-4537.2001',
    kind: 'ecology',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Sudek et al. 2007 — Identification of the putative bryostatin polyketide synthase gene cluster',
    url: 'https://doi.org/10.1021/np060361d',
    kind: 'ecology',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Miller et al. 2016 — Genome and expression of the bryostatin-producing symbiont',
    url: 'https://doi.org/10.1128/AEM.01800-16',
    kind: 'ecology',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Linneman et al. 2014 — Latitudinal variation of a defensive symbiosis',
    url: 'https://doi.org/10.1371/journal.pone.0108783',
    kind: 'ecology',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Lopanik et al. 2004 — Symbiont-produced cytotoxins protect host larvae from predation',
    url: 'https://doi.org/10.1007/s00442-004-1487-5',
    kind: 'ecology',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Sharp, Davidson & Haygood 2007 — Symbiont and bryostatin localization through the host life cycle',
    url: 'https://doi.org/10.1038/ismej.2007.78',
    kind: 'ecology',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Kim et al. 2018 — Environmental DNA detection of Bugula neritina',
    url: 'https://doi.org/10.1016/j.marenvres.2018.04.015',
    kind: 'ecology',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'National Cancer Institute — Definition of bryostatin 1',
    url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/bryostatin-1',
    kind: 'general',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search — Bugula neritina, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Bugula%20neritina&searchType=species',
    kind: 'conservation',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List FAQ — species absent from the Red List are Not Evaluated',
    url: 'https://nrl.iucnredlist.org/about/faqs',
    kind: 'conservation',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'EUNIS — Bugula neritina has not yet been assessed for the IUCN Red List',
    url: 'https://eunis.eea.europa.eu/species/31158',
    kind: 'conservation',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (effective 5 March 2026)',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
  {
    title: 'Species+ — CITES checklist search for Bugula neritina',
    url: 'https://www.speciesplus.net/checklist/taxon_concepts?scientific_name=Bugula%20neritina',
    kind: 'conservation',
    accessedAt: BUGULA_NERITINA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-bugula-neritina',
    slug: 'bugula-neritina',
    names: {
      zh: '总合草苔虫',
      en: 'Brown Bryozoan',
      aliases: [
        '总合苔虫',
        '多室草苔虫',
        'Common Bugula',
        'Ruby Bryozoan',
        'Sertularia neritina',
      ],
    },
    scientificName: 'Bugula neritina',
    taxonomy: animalTaxonomy(
      taxon('Bryozoa', '苔藓动物门'),
      taxon('Gymnolaemata', '裸唇纲'),
      taxon('Cheilostomatida', '唇口目'),
      taxon('Bugulidae', '草苔虫科'),
      taxon('Bugula', '草苔虫属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: [],
      regions: [
        '全球热带、亚热带与温带名义种记录区',
        '地中海原始描述材料来源区',
      ],
      countries: [],
      range:
        'Bugula neritina 广义种在多片海域都有记录，常随船体、浮筒和养殖设施进入港湾。林奈依据地中海材料命名，但描述材料来源不能证明原生范围。多基因研究支持 S、D、N 三个隐存种：Type S 广布于热带、亚热带和温带海域，Type D 主要见于东北太平洋，Type N 见于北大西洋，也在加州和澳大利亚检出。三个支系尚无正式种名，照片、旧标本和未测序记录只能按广义种处理；聚合点位不能证明单一物种天然全球分布。',
    },
    habitats: [
      {
        name: '避风浅海硬质基底',
        realm: 'marine',
        description:
          '群体用基部附着结构固定在浅水岩石、木材、贝壳、其他固着生物或大型藻类表面。分枝需要水流带来悬浮颗粒，也需要避开强浪直接撕扯。',
        isPrimary: true,
      },
      {
        name: '码头与船体污损表面',
        realm: 'marine',
        description:
          '浮筒、桩柱、船壳、取水管和附着板提供连续硬表面。群体能在这些人工结构上快速出芽、生长和育幼，船舶与设备转运也会把附着群体带到新的港湾。',
      },
      {
        name: '养殖与海草床邻近附着面',
        realm: 'marine',
        description:
          '网箱、绳索、牡蛎及海草叶片都可承载名义种群体。不同地点可能属于不同隐存支系，出现于一种载体不等于该支系以那里为原生地。',
      },
    ],
    measurements: {
      height: {
        max: 10,
        unit: 'cm',
        note: '分类描述记录群体可达约 10 厘米；长崎局地附着板研究中，能释放幼虫的群体约高 2 至 4 厘米，最大群体约高 6 至 10 厘米。这里的 10 厘米是整丛群体的局地上限参考，不是单个个虫体长或整个复合体的全球上限。',
      },
    },
    diet: {
      types: ['filter-feeder'],
      foods: ['微型藻类', '其他浮游微生物', '细小悬浮碎屑与有机颗粒'],
      description:
        '每个摄食个虫把触手冠伸入水中，约 23 至 24 条具纤毛触手围住口。纤毛驱动水流，触手截留适合大小的悬浮颗粒并送入口中；颗粒大小、水流和食物种类都会改变摄食率，因此不能把它归成只吃藻的草食动物。',
    },
    activity: [
      '摄食个虫伸出触手冠制造局部水流，受扰时把整套软体结构缩回虫室',
      '首个摄食个虫以无性出芽增加克隆个虫，枝条按二列排列并反复二歧分叉',
      '柔韧群体随水流摆动，让不同枝条上的触手冠接触流经颗粒',
      '有性繁殖产生的胚胎在外置卵室内发育，释放后成为不摄食的冠状幼虫',
      '冠状幼虫游泳和探查硬表面，附着后先形成前初虫，再发育为首个摄食初虫',
    ],
    tags: [
      '苔藓动物门首次收录',
      '裸唇纲',
      '固着群体动物',
      '克隆个虫',
      '二列虫室',
      '二歧分枝',
      '触手冠',
      '悬浮摄食',
      '外置卵室',
      '冠状幼虫',
      '母体营养补给',
      '隐存种复合体',
      '海洋污损生物',
      'Candidatus Endobugula sertula',
      'bryostatin',
      'IUCN 未评估',
    ],
    summary:
      '一枚不摄食幼虫附着后，用出芽建成红紫色分枝群体；每条枝由两列微小个虫组成，各自伸出触手冠过滤海水。',
    description:
      '总合草苔虫是直立、丛状的海洋苔藓动物。整丛红紫至紫褐色结构不是一只分枝动物，也不是海藻或珊瑚；一个有性产生的冠状幼虫附着后形成首个摄食初虫，初虫再以无性出芽建立相连的克隆个虫。长崎局地附着板研究中，能释放幼虫的群体约含 1,000 至 5,000 个虫，最大群体估计约含 20,000 至 50,000 个虫；这些数量不能外推为整个复合体的固定规模。窄枝反复二歧分叉，每条枝上有两列交错虫室。单个虫室通常长约 600 至 800 微米、宽约 200 至 300 微米，摄食个虫能伸出约含 23 至 24 条触手的触手冠。群体为雌雄同体，胚胎在球形外置卵室中接受母体营养，离开卵室的不摄食幼虫只携带有限储备，通常在数十分钟至数小时内寻找硬表面。传统学名下至少混有 S、D、N 三个隐存种；“浅水型”和“深水型”源自南加州早期采样，不能当作全球固定水深。部分群体携带未培养共生菌 Candidatus Endobugula sertula，研究把 bryostatin 核心聚酮生物合成定位到该菌，但并非每个群体都含该菌或同样的化合物组合，部分酯侧链由谁安装仍待厘清。广布 Type S 常随船体和养殖设施传播，许多地区把它列作外来污损生物；原生范围仍未知，不能把所有海域的记录都叫入侵种。IUCN Red List 当前没有本复合体的全球评估，NE 不表示无危或种群稳定。',
    storySections: [
      {
        key: 'one-colony-many-zooids',
        label: '一丛里的许多个体',
        title: '幼虫附着后，由初虫出芽建群',
        body: '冠状幼虫固定在硬表面后，先经历快速附着和形态重排，再用约 36 至 48 小时形成首个摄食初虫。这个初虫不断出芽，后代个虫保持连接，营养可经群体内部系统流向生长端和繁殖结构。长崎附着板研究记录的性成熟群体约有 1,000 至 5,000 个虫，最大群体估计约有 20,000 至 50,000 个虫，但这是局地尺度，不是全球常数。每丛群体来自一个建群者及其相连的克隆后代。',
      },
      {
        key: 'biserial-branches-and-lophophores',
        label: '两列虫室',
        title: '每条窄枝排两列个虫，各自伸出一圈触手',
        body: '窄枝在分叉之间保持两列交错虫室。分类描述给出的个虫多长 600 至 800 微米、宽 200 至 300 微米，额膜覆盖正面大部，外远端角形成一个尖突；本种没有鸟头体，也没有成排长棘。摄食时，个虫从虫室开口伸出约 23 至 24 条触手组成的触手冠，纤毛制造水流并截留悬浮颗粒。',
      },
      {
        key: 'brooding-and-coronate-larva',
        label: '卵室里的营养',
        title: '母体补给胚胎，幼虫离巢后不再进食',
        body: '群体包含雄性和雌性功能，精子进入受精过程后，胚胎在个虫外侧显眼的球形卵室中发育。母体通过类似胎盘的结构向胚胎补给营养。研究仍未判定单个个虫同时拥有两种性功能，还是随年龄转换。成熟冠状幼虫离开卵室后不摄食，靠母体储备游泳、探查和附着；文献中的 1 至 30 小时范围受群体、温度和实验条件影响。',
      },
      {
        key: 'three-cryptic-species',
        label: '一个名字，三条谱系',
        title: 'S、D、N 已达到物种分界，却还没有正式种名',
        body: 'COI、16S 和两个核基因共同支持 S、D、N 为三个生物学物种。Type S 横跨多片海域，Type D 主要见于东北太平洋，Type N 除北大西洋外也在加州和澳大利亚出现。“浅水型”和“深水型”只是南加州最初采样形成的代号，不能据名称给全球样本分层。分类数据库尚未给三个支系配置正式种名，因此形态、生态和化学资料都要保留采样地点与分子凭证。',
      },
      {
        key: 'endobugula-and-bryostatins',
        label: '共生菌的化学工厂',
        title: '共生菌合成化合物的核心骨架',
        body: '研究者在幼虫套腔窦、成体营养联系统和繁殖结构中检测到 Candidatus Endobugula sertula。抗生素降低共生菌数量时，PKS 基因信号和 bryostatin 活性也下降；后续研究找到 bry 基因簇并检测到通路表达，支持共生菌完成核心聚酮生物合成。部分酯侧链可能由未识别细菌酶或宿主安装，而且有些群体没有该菌或没有相同化学谱。Bryostatin 1 是研究中的 PKC 调节剂，现有证据不能把这只动物写成能治愈癌症或阿尔茨海默病。',
      },
      {
        key: 'fouling-and-lineage-aware-monitoring',
        label: '跟着船走的群体',
        title: '附着板先记群体，DNA 再回答是哪条谱系',
        body: '船体、浮筒、取水管和养殖器材给群体提供附着面，也把带活体的设备运往别处。Type S 的广布格局符合多次人为转运，许多港湾把它作为外来污损生物管理；澳大利亚资料仍把部分记录列为来源不明的 来源不明型（cryptogenic）。监测人员可在固定深度和时段拍摄标准附着板，记录覆盖、群体数和尺寸，再保存带坐标的凭证与 DNA。照片能发现红紫色分枝群体，不能单独判断 S、D、N，也不能证明原生或入侵身份。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的 Sertularia neritina',
        body: '林奈在 1758 年依据地中海材料，以 Sertularia neritina 命名总合草苔虫，后来它改归 Bugula。描述材料的来源不能证明原生范围；多基因研究还支持 S、D、N 三个隐存种，尚未正式命名。广布型常随船体与养殖设施转运，因此原生、外来和来源不明记录需分别核对。',
      },
    ],
    keyFacts: [
      'WoRMS 接受名为 Bugula neritina (Linnaeus, 1758)，AphiaID 111158；括号表示林奈最初把它命名为 Sertularia neritina。',
      '它属于苔藓动物门、裸唇纲、唇口目、草苔虫科和草苔虫属，Ectoprocta 是苔藓动物的另一名称。',
      '“总合草苔虫”见中国政府提交的拉姆萨尔物种名录，“多室草苔虫”可作中文别名。',
      '英文常用名有 Brown Bryozoan 和 Common Bugula。',
      '局地附着板研究中，能释放幼虫的性成熟群体约含 1,000 至 5,000 个虫，最大群体估计约含 20,000 至 50,000 个虫；建群幼虫形成首个初虫后靠无性出芽扩展。',
      '分类描述记录群体可达约 10 厘米；长崎附着板研究中的性成熟群体约高 2 至 4 厘米，最大群体约高 6 至 10 厘米，这些都不是复合体的全球固定范围。',
      '枝条反复二歧分叉，每条窄枝上有两列交错个虫。',
      '个虫通常长约 600 至 800 微米、宽约 200 至 300 微米；群体高度不能当作单个个虫体长。',
      '本种没有鸟头体和成排长棘，外远端角只有一个尖突；球形偏白卵室可宽约 400 至 450 微米。',
      '每个摄食个虫的触手冠约有 23 至 24 条触手，纤毛驱动悬浮摄食。',
      '群体为雌雄同体，单个个虫的性功能是否同时出现或随年龄转换仍未确定。',
      '胚胎在外置卵室中接受母体营养；离开卵室的冠状幼虫不摄食。',
      '附着后数分钟内完成第一阶段形态重排，发育成首个完整摄食初虫还需更长时间。',
      '多基因物种界定支持 S、D、N 三个隐存种，三个支系尚未获得正式种名。',
      'Type S 广布，Type D 主要见于东北太平洋，Type N 见于北大西洋、加州和澳大利亚。',
      'S 和 D 的浅水、深水称呼源自南加州采样，不能当作全球固定深度界线。',
      '原生范围未知；地中海描述材料、全球出现记录和人工结构上的群体都不能单独回答原生地。',
      '部分群体携带 Candidatus Endobugula sertula，共生菌和 bryostatin 化学谱不会随传统物种名整齐分布。',
      'PKS 基因、抗生素处理、基因簇和表达证据支持共生菌合成 bryostatin 核心骨架；部分酯侧链的安装者仍未知。',
      'Bryostatin 在部分幼虫中承担拒食防御，不能据此宣称成年群体都含同一剂量或具有同等防御。',
      'Bryostatin 1 仍是研究中的药理分子，不是获证可由动物直接提供的癌症或阿尔茨海默病治愈药。',
      'IUCN Red List 当前没有本种评估；NE 不代表无危、数量稳定或无需监测。',
      '截至 2026-08-31，核对 2026 年 3 月 5 日生效的 CITES 附录与 Species+，未检出本种列名；未列名不是种群安全证明。',
    ],
    threats: [
      'IUCN 尚未评估，三个隐存种的原生范围、全球数量、趋势和威胁排序均未知',
      '港口改造、底栖附着面清除、浑浊和局地污染会改变群体生存，但不同支系与地点的耐受不能合并成全球阈值',
      '含铜防污剂与机械清除会改变污损群落并移除部分群体；该名义种的幼体和成体已有较高耐铜记录，效果随浓度、地点和群体而异，不能假定铜涂层必然杀死本种，清除时也可能误伤原生无脊椎动物',
      '船体、养殖设施和移动设备会传播活群体或新附着幼体，扩大外来支系范围',
      '只按枝色和外形记录会混并 S、D、N，也可能混入其他 Bugula，掩盖局地谱系变化',
    ],
    conservationActions: [
      '用固定深度、季节、浸泡时长和板材的附着板重复记录群体数、覆盖与尺寸，并保留未检出样本',
      '为新地点保存带坐标和日期的凭证、显微虫室照片及 DNA 条形码，按 S、D、N 或未定谱系报告',
      '清洁船体、浮筒和养殖设备时收集并妥善处置附着物，避免把活碎片或幼体排入未占据水体',
      '把原生、外来和来源不明三种身份分开，不因全球名义记录多就默认某港口的群体属于原生种',
      '监测铜、温度、盐度、水流和食物条件，让环境变化与物种更替能在重复调查中分开解释',
      '药用天然产物研究优先采用合成、生物工程和可追溯培养材料，避免以大规模野采替代供应链',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'colony-height',
        label: '群体记录高度',
        value: '最高约 10',
        unit: '厘米',
        note: '分类描述的上限参考；长崎附着板研究中，能释放幼虫的群体约高 2 至 4 厘米，最大群体约高 6 至 10 厘米。',
      },
      {
        key: 'zooid-length',
        label: '单个个虫长',
        value: '约 600–800',
        unit: '微米',
        note: '分类描述范围，部分个虫更长；轻微尺寸差异不能区分三个隐存种。',
      },
      {
        key: 'zooid-rows',
        label: '每条窄枝的虫室列数',
        value: '2',
        unit: '列',
        note: '两列交错排列，在分叉处由改形虫室衔接。',
      },
      {
        key: 'lophophore-tentacles',
        label: '每个触手冠',
        value: '约 23–24',
        unit: '条触手',
        note: '广义种形态资料；静态图片不能可靠逐条计数。',
      },
    ],
    media: {
      image:
        './images/species/bugula-neritina/01-marina-piling-colony-cover.webp',
      alt: '浅绿港湾水下，一丛完整的深红紫色总合草苔虫以小型基部附着在混凝土桩柱上，许多窄枝反复二歧分叉并显出细密虫室格纹',
      focalPoint: { x: 0.64, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/bugula-neritina/02-biserial-zooid-diagnostic.webp',
          alt: '浅水观察盘内，一段红紫色草苔虫活体枝形成清楚的 Y 形分叉，每条枝由两列交错的连接虫室组成，多枚淡色球形卵室可见',
          title: '二列虫室与球形卵室',
          caption:
            'AI生成原创形态重建；枝段强调分叉、虫室和卵室的相对位置，不能据外形确认 S、D、N 谱系、个虫精确尺寸、性功能或真实胚胎阶段。',
          focalPoint: { x: 0.5, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/bugula-neritina/03-lophophore-suspension-feeding.webp',
          alt: '暗色海水背景中，一段红紫色草苔虫枝上的五个个虫各伸出一圈浅色纤细触手冠，其他虫室保持收缩',
          title: '相邻个虫各有一套触手冠',
          caption:
            'AI生成原创摄食重建；静帧可区分虫室与触手冠，不能测量纤毛运动、水流、触手数、颗粒选择、摄食率或一次吞咽结果。',
          focalPoint: { x: 0.61, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/bugula-neritina/04-ovicells-and-coronate-larva.webp',
          alt: '浅灰显微视野右侧是一段带多枚淡色球形卵室的红紫色草苔虫枝，左侧只有一枚周缘具短纤毛的圆形冠状幼虫',
          title: '卵室旁的一枚冠状幼虫',
          caption:
            'AI生成原创繁殖重建；同框只说明卵室与不摄食冠状幼虫两个阶段，不能证明亲子关系、释放时刻、自然比例、游泳时长或母体补给速率。',
          focalPoint: { x: 0.57, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/bugula-neritina/05-larval-symbiont-window.webp',
          alt: '浅灰显微视野中央，一枚周缘具连续短纤毛的冠状幼虫带人工透明观察窗，窗内一条狭长区域聚集许多微小金色杆状共生菌',
          title: '幼虫套腔窦内的共生菌位置',
          caption:
            'AI生成原创解剖重建；金色杆状体只示意套腔窦中的共生菌定位，不能确认菌株、细胞数量、垂直传播、bry 基因表达、bryostatin 含量或完整分子装配。',
          focalPoint: { x: 0.5, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/bugula-neritina/06-settlement-plate-monitoring.webp',
          alt: '港湾水下，一块由两根绳悬挂的白色方形附着板中央长着一小丛红紫色分枝群体，侧面无标识相机对准板面记录',
          title: '用标准附着板重复记录港湾群体',
          caption:
            'AI生成原创调查情景；单块板和一丛分枝只能表达记录方法，不能确认物种、S、D、N 谱系、原生或入侵身份、定殖时间、覆盖趋势或港湾总体丰度。',
          focalPoint: { x: 0.59, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...BUGULA_NERITINA_SOURCES,
      {
        title: 'GBIF: Bugula neritina (Linnaeus, 1758) nomenclatural record',
        url: 'https://www.gbif.org/species/4984851',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: BUGULA_NERITINA_CONTENT_DATE,
    updatedAt: BUGULA_NERITINA_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
