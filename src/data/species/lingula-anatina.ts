import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const LINGULA_ANATINA_SOURCE_DATE = '2026-08-31' as const;

const LINGULA_ANATINA_CONTENT_DATE = '2026-08-31' as const;

const LINGULA_ANATINA_SOURCES = [
  {
    title: 'WoRMS — Lingula anatina (AphiaID 235362)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=235362',
    kind: 'taxonomy',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Classification of Lingula anatina',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/235362',
    kind: 'taxonomy',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'GBIF — Lingula anatina (species key 5183826)',
    url: 'https://www.gbif.org/species/5183826',
    kind: 'taxonomy',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'NCBI Taxonomy — Lingula anatina (taxid 7574)',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=7574&lvl=0',
    kind: 'taxonomy',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: '林業保育署 — 新竹市濱海野生動物保護區保育計畫中的鴨嘴海豆芽名錄',
    url: 'https://www.forest.gov.tw/file/199217',
    kind: 'general',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Taiwan Biodiversity Network — 鴨嘴海豆芽',
    url: 'https://www.tbn.org.tw/taxa/f829da55-c892-48b2-bbac-aa5ff089d9b8',
    kind: 'taxonomy',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'National Museum of Natural Science Taiwan — 鴨嘴海豆芽 specimen record',
    url: 'https://www.nmns.edu.tw/collect/catalog/detail/?id=13752',
    kind: 'taxonomy',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Lamarck 1801 — Système des animaux sans vertèbres',
    url: 'https://doi.org/10.5962/bhl.title.14255',
    kind: 'taxonomy',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Emig 1982 — Taxonomie du genre Lingula',
    url: 'https://doi.org/10.5962/p.286042',
    kind: 'taxonomy',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Emig 2008 — History of the names Lingula and anatina',
    url: 'https://carnetsgeol.net/cg/08/A08/index.html',
    kind: 'taxonomy',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'FAO — Species identification guide for fishery purposes: Lingula anatina',
    url: 'https://openknowledge.fao.org/server/api/core/bitstreams/f32d004b-6358-44f3-8242-b9d23e5346d0/content',
    kind: 'general',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Goto et al. 2022 — Stasis and diversity in living fossils: Species delimitation and evolution of lingulid brachiopods',
    url: 'https://doi.org/10.1016/j.ympev.2022.107460',
    kind: 'distribution',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Emig 2003 — Proof that Lingula is not a living fossil',
    url: 'https://carnetsgeol.net/cg/03/L01/index.html',
    kind: 'general',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Luo et al. 2015 — The Lingula genome provides insights into brachiopod evolution and the origin of phosphate biomineralization',
    url: 'https://doi.org/10.1038/ncomms9301',
    kind: 'general',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Temereva & Tsitrin 2015 — Modern data on the innervation of the lophophore in Lingula anatina',
    url: 'https://doi.org/10.1371/journal.pone.0123040',
    kind: 'ecology',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Westbroek, Yanagida & Isa 1980 — Functional morphology of brachiopod and coral skeletal structures supporting ciliated epithelia',
    url: 'https://doi.org/10.1017/S0094837300006825',
    kind: 'ecology',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Emig 1997 — Part H, Brachiopoda (Revised), vol. 1, ch. 6, p. 473–502',
    url: 'https://doi.org/10.17161/dt.v0i0.5558',
    kind: 'ecology',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Chuang 1956 — The ciliary feeding mechanisms of Lingula unguis',
    url: 'https://doi.org/10.1111/j.1096-3642.1956.tb00468.x',
    kind: 'ecology',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Chuang 1959 — The breeding season of the brachiopod Lingula unguis',
    url: 'https://doi.org/10.2307/1538900',
    kind: 'ecology',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Trueman & Wong 1987 — The role of the coelom as a hydrostatic skeleton in lingulid brachiopods',
    url: 'https://doi.org/10.1111/j.1469-7998.1987.tb03696.x',
    kind: 'ecology',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Savazzi 1991 — Burrowing in Lingula anatina',
    url: 'https://doi.org/10.1016/0031-0182(91)90027-O',
    kind: 'ecology',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Thayer & Steele-Petrovic 1975 — Burrowing of the lingulid Glottidia pyramidata',
    url: 'https://doi.org/10.1111/j.1502-3931.1975.tb00925.x',
    kind: 'ecology',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'AIMS — Salinity tolerance and burrowing of Lingula anatina in North Queensland',
    url: 'https://researchdata.edu.au/salinity-tolerance-burrowing-north-queensland/677904',
    kind: 'ecology',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Hammond 1983 — Experimental studies of salinity tolerance, burrowing behavior and pedicle regeneration in Lingula anatina',
    url: 'https://www.jstor.org/stable/1304816',
    kind: 'ecology',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Fujii et al. 2019 — Breeding season and life history after settlement in Amami-Oshima',
    url: 'https://doi.org/10.3800/pbr.14.45',
    kind: 'ecology',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Madison, Kuzmina & Temereva 2021 — Analysis of the juvenile shell of Lingula anatina (Brachiopoda: Linguliformea) provides insight into the evolution of life cycles of fossil brachiopods',
    url: 'https://doi.org/10.1017/pab.2020.51',
    kind: 'ecology',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Abe & Sato-Okoshi 2020 — Polydora lingulicola and the three surface openings of Lingula',
    url: 'https://doi.org/10.11646/zoosymposia.19.1.13',
    kind: 'ecology',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Hong et al. 2007 — Lingula habitat affected by Saemangeum reclamation',
    url: 'https://doi.org/10.3800/pbr.2.70',
    kind: 'conservation',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'Hong Kong AFCD — Marine Living Fossils subgroup Red List expert report',
    url: 'https://www.afcd.gov.hk/English/conservation/Con_hkbsap/bsap_links_to_resources/files/Appendix_10_Marine_Living_Fossils_Subgroup_Report_Red_List_FG.pdf',
    kind: 'conservation',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search — Lingula anatina, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Lingula%20anatina&searchType=species',
    kind: 'conservation',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List FAQ — species absent from the Red List are Not Evaluated',
    url: 'https://nrl.iucnredlist.org/about/faqs',
    kind: 'conservation',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (effective 5 March 2026)',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
  {
    title: 'CITES — CITES-listed species database search',
    url: 'https://cites.org/eng/node/10288',
    kind: 'conservation',
    accessedAt: LINGULA_ANATINA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-lingula-anatina',
    slug: 'lingula-anatina',
    names: {
      zh: '鸭嘴海豆芽',
      en: "Duck's-bill Lingula",
      aliases: ['鴨嘴海豆芽', 'Duck Lingula', 'Lingula unguis'],
    },
    scientificName: 'Lingula anatina',
    taxonomy: animalTaxonomy(
      taxon('Brachiopoda', '腕足动物门'),
      taxon('Lingulata', '舌形贝纲'),
      taxon('Lingulida', '舌形贝目'),
      taxon('Lingulidae', '舌形贝科'),
      taxon('Lingula', '海豆芽属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: [],
      regions: [
        '印度—西太平洋名义种记录区',
        '印度尼西亚摩鹿加群岛模式产地',
      ],
      countries: [],
      range:
        '名义上的 Lingula anatina 记录集中于印度、西太平洋，模式产地位于印度尼西亚摩鹿加群岛。分子取样把传统归入本名的材料分成温带东亚与热带西、中太平洋等多个隐存谱系；在查明载名模式的保存状态并与模式产地附近凭证比较前，狭义物种的确切边界和范围仍待修订。GBIF 聚合记录还混有化石、馆藏、材料样本和人类观察，不能据点位密度把本种画成全球连续分布。',
      center: { lat: -3.2, lng: 128.2 },
    },
    habitats: [
      {
        name: '潮间带细砂与泥质软底',
        realm: 'marine',
        description:
          '常见生境描述指向受潮汐浸没的细砂、粉砂或泥质沉积物。动物把壳近垂直安置在有黏液衬里的单竖井中，壳前缘靠近底表，细长肉茎向下伸入沉积物；外套膜刚毛在泥面围出两个侧方入水口和一个中央出水口。',
        isPrimary: true,
      },
      {
        name: '河口与红树林邻近的半咸水软底',
        realm: 'marine',
        description:
          'WoRMS 把本种标为海生兼半咸水，FAO 也记录河口与红树林邻近软底的利用。半咸水属于海水与淡水混合环境，尚无淡水生活证据。',
      },
      {
        name: '浅水软沉积底',
        realm: 'marine',
        description:
          '部分记录来自潮下带浅水软底。北昆士兰与宿务实验显示覆沙逃逸和重新掘穴能力会随沉积厚度、粒径、体型与地点而变，不能把一种实验底质推广到全部种群。',
      },
    ],
    measurements: {
      length: {
        typical: 40,
        unit: 'mm',
        note: 'FAO 识别指南给出的常见壳长约 4 厘米，并另列指南最大壳长 6.5 厘米；结构化长度只保留常见值，两个数都沿用名义种口径，不是已厘清所有隐存谱系后的狭义物种常数，也不含高度伸缩的肉茎。',
      },
    },
    diet: {
      types: ['filter-feeder'],
      foods: ['细小悬浮颗粒', '悬浮有机物', '可被触手冠截留的其他颗粒'],
      description:
        '鸭嘴海豆芽用螺旋型触手冠进行悬浮滤食。触手纤毛形成水流、截留颗粒，并把合适食物沿食物沟送向位于两条螺旋臂之间的口；过量细粒和较粗颗粒可被拒绝。它不是用嘴主动吸水，现有资料也不支持把食谱缩成单一“浮游生物”。',
    },
    activity: [
      '壳前缘停在洞口附近，外套膜刚毛围成两个侧方入水口和一个中央出水口',
      '触手冠纤毛驱动水流、筛留悬浮颗粒并沿食物沟送入口中',
      '受扰时肉茎收缩，把壳向近垂直洞穴深处拉回',
      '覆沙后可沿沉积物向上逃逸，但成功率受覆盖厚度和实验条件限制',
      '宿务实验中的离洞个体可用壳瓣、刚毛、体腔静水骨骼和旋转剪切动作重新掘穴；不同地点实验结果并不一致',
    ],
    tags: [
      '腕足动物门',
      '舌形贝纲',
      '海洋无脊椎动物',
      '潮间带',
      '半咸水',
      '软底洞穴',
      '背腹壳瓣',
      '有机磷灰质壳',
      '肉茎',
      '螺旋型触手冠',
      '悬浮滤食',
      '有壳摄食型浮游稚体',
      '隐存物种复合群',
      '活化石误传',
      'IUCN 未评估',
    ],
    summary:
      '鸭嘴海豆芽生活在潮间带和浅海软底，壳近垂直留在洞口，肉茎向下锚定并可回缩。它用螺旋触手冠滤食，传统物种名下还包含待厘清的近似谱系。',
    description:
      '鸭嘴海豆芽是现生舌形贝类的一种名义种，接受名为 Lingula anatina Lamarck, 1801。它不是双壳类软体动物：两片薄壳分别位于身体背侧和腹侧，而不是左右两侧；壳由磷灰石、几丁质和蛋白质层构成，也不是“骨头”。壳常呈有光泽的绿色至深绿色、狭长近舌形，FAO 识别指南给出常见壳长约 4 厘米、指南最大壳长 6.5 厘米。活体通常让壳近垂直停在潮间带至浅水软沉积物的单竖井中，细长肉茎向下锚定并可在受扰时把壳拉深。两条对称螺旋臂组成触手冠，纤毛驱动水流并把悬浮颗粒送入口中。个体雌雄异体，配子排入海水后体外受精；早期有壳摄食型浮游稚体在水层生活，之后沉降到底栖生活。具体繁殖季和成熟年龄只来自尚待厘清的局地名义种群，不能推广到整个物种。2022 年分子研究显示，传统的 L. anatina 至少包含温带东亚与热带西、中太平洋主要支系。现生 Lingula 属的冠群更可能起源于白垩纪，不是寒武纪物种原样存活至今。IUCN Red List 当前未找到本种全球评估；NE 表示未评估，不代表无危或种群稳定。',
    storySections: [
      {
        key: 'dorsal-ventral-phosphatic-shell',
        label: '两片壳的方向',
        title: '看似贝壳，却不是左右各一片的双壳类',
        body: '腕足动物的两片壳对应身体背面和腹面，每一片壳大体沿自身中线左右对称；双壳类软体动物的壳则位于身体左右两侧。鸭嘴海豆芽的薄壳由磷灰石、几丁质和蛋白质层构成，与许多双壳类以碳酸钙为主的壳不同。磷酸钙成分不等于脊椎动物骨骼，外形相似也不能把它归为蛤、蚌或其他软体动物。',
      },
      {
        key: 'vertical-burrow-and-pedicle',
        label: '一条近垂直的洞',
        title: '壳守在沉积物表面，肉茎向下固定并负责回缩',
        body: '正常生活位中，狭长壳的长轴近乎竖直，前缘靠近底表；肉茎沿有黏液衬里的单竖井向下延伸，末端可黏结沙粒形成锚定区。受扰时肉茎缩短，把壳拉回洞内。掘穴动力并不只是肉茎“钻土”：壳瓣与刚毛的动作、身体旋转剪切和充液体腔形成的静水骨骼共同参与，肉茎更多提供支点、牵引与锚定。文献中的 U 形描述重埋运动路线，不是成熟个体两端开口的常住洞穴。',
      },
      {
        key: 'reburrowing-experiment-boundaries',
        label: '离洞之后',
        title: '重新掘穴能力随地点与底质变化',
        body: '北昆士兰实验中，个体能从 5 至 10 厘米覆盖沉积物下向上逃逸；覆盖 20 厘米时出现 30% 至 50% 死亡，而且移出底质后没有重新建立洞穴。宿务实验则发现原生粉砂中的各生长阶段都能重新掘穴，包括壳长超过 50 毫米的成体；壳长不超过 25 毫米的个体还能处理更广粒径。地点、底质、体型和实验设计不同，因此不能断言离洞个体“绝不再掘”或“总能回到原洞”。',
      },
      {
        key: 'spirolophe-suspension-feeding',
        label: '螺旋触手冠',
        title: '水从两侧进入，颗粒沿触手送往两臂之间的口',
        body: '螺旋型触手冠由两条对称卷曲的臂组成，口位于两臂之间。触手不同表面的纤毛分工驱动水流、筛留颗粒并把食物送入食物沟；历史异名 L. unguis 的实验还描述了两个侧方入水区和一个中央出水区，以及对过量细粒和较粗颗粒的拒绝。',
      },
      {
        key: 'shelled-planktotrophic-young',
        label: '有壳的浮游稚体',
        title: '稚体在水层中摄食，带着幼壳转向底栖生活',
        body: '历史异名材料的产卵观察与奄美人工培养研究支持配子排入海水、在体外完成受精；早期发育产生能摄食并带壳的浮游稚体，随后沉降到底质。传统文献常把它称作幼体，幼壳形态研究则把这个已有成体式身体构造的阶段定义为 planktotrophic juvenile。奄美基因组研究展示了两对触手阶段，但该群体沿用的 L. anatina 名称尚未通过模式材料完成命名锚定。狭义物种的发育天数、繁殖季和具体路线仍缺统一数据。',
      },
      {
        key: 'species-complex-and-living-fossil-myth',
        label: '名字下面的多条谱系',
        title: '隐存谱系与持续演化的舌形贝',
        body: '跨东亚、澳大利亚、大洋洲和美洲材料的 COI 分析识别出多个舌形贝候选种，传统的 L. anatina 名义物种复合群至少分成温带东亚和热带西、中太平洋主要支系。模式产地在摩鹿加群岛，但只有查明载名模式的保存状态并与模式产地附近凭证比较，才能为现代序列完成命名归属。化石外形保守不等于物种或基因组停滞；分子定年把现生 Lingula 冠群推向白垩纪，基因组研究也记录持续演化。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1801 年的摩鹿加群岛命名材料',
        body: 'Lamarck 于 1801 年命名鸭嘴海豆芽，现用学名为 Lingula anatina，模式产地位于印度尼西亚摩鹿加群岛。历史名 Lingula unguis 如今列作异名。现代分子研究发现传统名称下有多个隐存谱系，需要与模式产地附近的材料比较，才能确定序列和名称的对应关系。',
      },
    ],
    keyFacts: [
      'WoRMS 接受名为 Lingula anatina Lamarck, 1801，AphiaID 235362；命名人不加括号。',
      '它属于腕足动物门、舌形贝纲、舌形贝目、舌形贝科和海豆芽属。',
      'WoRMS 当前把历史名 Lingula unguis 处理为异名；旧研究的样本不能因此视为已经过现代分子复核。',
      '主名“鸭嘴海豆芽”有台湾林业保育机构资料记录，英文种级俗名可写 Duck’s-bill lingula。',
      '两片壳位于身体背侧与腹侧，不是双壳类软体动物那样分居左右。',
      '壳主要含有机基质和磷酸钙；“磷酸钙”不等于动物拥有脊椎动物式骨骼。',
      'FAO 识别指南给出常见壳长约 4 厘米、最大 6.5 厘米；名义种复合群使这些值不能作为狭义物种绝对常数。',
      '肉茎高度伸缩，FAO 指南描述伸展时可接近壳长十倍；这不是所有个体的固定比例。',
      '成熟常住洞穴是近垂直单竖井，壳前缘靠近底表；U 形描述重埋路线，不是永久双开口管。',
      '肉茎向下锚定并能把壳拉深，泥面三个开口由刚毛围成两个侧方入水口和一个中央出水口，不是三根肉质水管。',
      '肉茎不是单独的钻头，壳瓣、刚毛、旋转剪切动作与体腔静水骨骼共同参与掘穴。',
      '北昆士兰和宿务实验对离洞后重新掘穴得出不同结果，不能省略地点、粒径、体型与处理条件。',
      '螺旋型触手冠有两条对称臂，纤毛驱动水流并把合适悬浮颗粒送入口中。',
      '早期有壳摄食型浮游稚体在水层生活，之后沉降进入底栖生活；传统“幼体”称呼不等于形态学幼虫。',
      '奄美材料的繁殖季、2 至 3 年成熟估计和至少 4 年队列记录都属于分类未定的局地群体。',
      '2022 年分子研究表明传统 L. anatina 是包含多个隐存谱系的复合群，狭义分布仍待修订。',
      '现生 Lingula 属冠群更可能起源于白垩纪，不能写成寒武纪 L. anatina 原样存活至今。',
      'IUCN Red List 当前未找到本种全球评估；NE 不代表无危、数量稳定或没有威胁。',
      '截至 2026-08-31，核对 2026 年 3 月 5 日生效的 CITES 附录未检出本种列名；未列入 CITES 不代表无危，也不能替代种群评估。',
    ],
    threats: [
      'IUCN 尚未评估，狭义物种的全球种群大小、趋势、世代时间和威胁排序均未知',
      '围填海、航道与岸线工程、底质硬化及清淤会改变潮间带软底，但缺少可归到狭义 L. anatina 的全球效应量',
      '河口污染、缺氧、盐度突变和沉积物变化可能影响洞居滤食动物；局地耐受实验不能换算成全球安全阈值',
      '采集食用或鱼饵利用可能造成局地压力，现有资料不足以给出全物种捕捞量和下降率',
      '历史异名、隐存谱系及缺少凭证的聚合记录会掩盖真实分布和局地变化',
    ],
    conservationActions: [
      '保护河口、红树林邻近潮滩和浅水软底的沉积过程、水质与潮汐连通性',
      '在固定样方重复记录洞口检出、个体密度、壳长、粒径、盐度、溶氧和底质扰动，并保留未检出记录',
      '新记录同时保存壳体、软组织、照片、坐标与环境元数据，结合形态和分子序列复核谱系',
      '查明载名模式的保存状态，采集并保存摩鹿加模式产地附近的凭证标本，以检验各分子谱系的命名归属',
      '监测采集量与尺寸组成，在物种边界厘清前按地点和凭证分别报告，不合并成全球趋势',
      '把化石、历史馆藏、材料样本与经复核的现生活体记录分开，避免聚合地图制造虚假广布',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'common-shell-length',
        label: '指南常见壳长',
        value: '约 4',
        unit: '厘米',
        note: 'FAO 名义种识别值；不是隐存谱系厘清后的统一成体长度。',
      },
      {
        key: 'guide-maximum-shell-length',
        label: '指南最大壳长',
        value: '6.5',
        unit: '厘米',
        note: 'FAO 识别指南数值，不含肉茎，也不应外推为所有谱系的绝对上限。',
      },
      {
        key: 'lophophore-arms',
        label: '螺旋触手冠臂',
        value: '2',
        unit: '条',
        note: '两条对称螺旋臂之间是口；这不是两根独立触手。',
      },
      {
        key: 'pedicle-extension',
        label: '指南肉茎伸展',
        value: '接近 10',
        unit: '倍壳长',
        note: 'FAO 指南对伸展状态的描述；肉茎会伸缩、断裂与再生，不存在固定比例。',
      },
    ],
    media: {
      image:
        './images/species/lingula-anatina/01-tidal-flat-burrow-cover.webp',
      alt: '浅水潮滩细泥表面，一个低矮洞口边缘只露出约顶部一小段橄榄绿色鸭嘴海豆芽壳与细密刚毛，其余身体埋在沉积物中',
      focalPoint: { x: 0.52, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/lingula-anatina/02-shell-and-pedicle-diagnostic.webp',
          alt: '浅水标本盘中，一只鸭嘴海豆芽露出完整狭长橄榄绿色舌形壳，壳后连接一条细长淡肉色肉茎',
          title: '舌形壳与可伸缩肉茎',
          caption:
            'AI生成原创外形重建；完整壳与伸展肉茎帮助区分结构，不能仅凭颜色确认物种、隐存谱系、活体比例、年龄或采集地点。',
          focalPoint: { x: 0.5, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/lingula-anatina/03-vertical-burrow-cutaway.webp',
          alt: '潮滩沉积物剖面重建中，一只鸭嘴海豆芽以狭长绿色壳近垂直停在洞口下方，细长肉茎沿单条闭底洞穴向下延伸至黏沙锚定区',
          title: '近垂直洞穴中的壳与肉茎',
          caption:
            'AI生成原创剖面示意；画面只表达壳靠近表面、肉茎向下锚定的关系，不能确定自然个体的背腹壳瓣朝向、洞深、洞径、尺寸比例或沉积层结构。',
          focalPoint: { x: 0.53, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/lingula-anatina/04-spirolophe-suspension-feeding.webp',
          alt: '橄榄绿色鸭嘴海豆芽壳前部呈透明观察窗，内部两条对称卷曲的浅色螺旋触手冠臂和臂间口部可见',
          title: '两条螺旋触手冠臂',
          caption:
            'AI生成原创解剖重建；透明观察窗并非自然外观，只用于说明两臂与口的位置，静帧不能测量水流方向、流速、颗粒选择或摄食成功。',
          focalPoint: { x: 0.51, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/lingula-anatina/05-two-pair-cirri-juvenile.webp',
          alt: '浅灰显微视野中，一个透明椭圆的舌形贝早期有壳浮游个体伸出四条简单不分枝的具纤毛触手，并带一束中央纤毛',
          title: '人工培养中的两对触手浮游稚体',
          caption:
            'AI生成原创发育重建；两对简单触手对应奄美人工受精材料的有壳摄食型浮游稚体阶段，该群体分类身份未定，画面不能证明自然年龄、阶段持续时间或狭义 L. anatina 的统一发育路线。',
          focalPoint: { x: 0.5, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/lingula-anatina/06-three-opening-photo-survey.webp',
          alt: '浅水泥质潮滩上放着一个白色方形样框，框内中央只有一组彼此靠近的三个圆形小洞，后方相机与脚架正在记录',
          title: '用固定样方记录潮滩洞口',
          caption:
            'AI生成原创调查情景；三孔组合只是可复查的表面线索，不能单凭洞口确认物种、占洞个体、洞穴连通方式、丰度或种群趋势，还需挖取凭证与重复调查。',
          focalPoint: { x: 0.51, y: 0.6 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: LINGULA_ANATINA_SOURCES,
    featured: true,
    publishedAt: LINGULA_ANATINA_CONTENT_DATE,
    updatedAt: LINGULA_ANATINA_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
