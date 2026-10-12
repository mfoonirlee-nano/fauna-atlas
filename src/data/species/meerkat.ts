import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const MEERKAT_SOURCE_DATE = '2026-09-04' as const;

const MEERKAT_CONTENT_DATE = '2026-09-04' as const;

const MEERKAT_SOURCES = [
  {
    title: 'Mammal Diversity Database v2.5: Suricata suricatta',
    url: 'https://www.mammaldiversity.org/taxon/1006070/',
    kind: 'taxonomy',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: '香港動植物公園: 狐獴',
    url: 'https://www.hkzbg.gov.hk/tc/animals/mammals/animals_12.html',
    kind: 'general',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List 2015: Suricata suricatta',
    url: 'https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T41624A45209377.en',
    kind: 'conservation',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'EWT/SANBI Regional Red List: Suricata suricatta',
    url: 'https://ewt.org/wp-content/uploads/2022/11/38.-Suricate-Suricata-suricatta_LC.pdf',
    kind: 'conservation',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist of Species',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'van Staaden 1994: Suricata suricatta, Mammalian Species 483',
    url: 'https://doi.org/10.2307/3504085',
    kind: 'general',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Doolan & Macdonald 1996: Diet and foraging behaviour of group-living meerkats',
    url: 'https://doi.org/10.1111/j.1469-7998.1996.tb05472.x',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Clutton-Brock et al. 1999: Selfish Sentinels in Cooperative Mammals',
    url: 'https://doi.org/10.1126/science.284.5420.1640',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Manser 1999: Response of foraging group members to sentinel calls',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1689937/',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Houslay, Nielsen & Clutton-Brock 2021: Sources of cooperative-behaviour variation',
    url: 'https://doi.org/10.1111/evo.14383',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Santema & Clutton-Brock 2013: Pups and sentinel behaviour in meerkats',
    url: 'https://doi.org/10.1016/j.anbehav.2012.12.029',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Manser 2001: Alarm-call structure varies with predator type and urgency',
    url: 'https://doi.org/10.1098/rspb.2001.1773',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Thornton & McAuliffe 2006: Teaching in wild meerkats',
    url: 'https://pubmed.ncbi.nlm.nih.gov/16840701/',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Young & Clutton-Brock 2006: Infanticide and reproductive sharing in meerkats',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1686192/',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Cram et al. 2018: Rank-related contrasts in meerkat longevity',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30174185/',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'AnAge: Suricata suricatta longevity and life history',
    url: 'https://genomics.senescence.info/species/entry.php?species=Suricata_suricatta',
    kind: 'general',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Duncan, Manser & Clutton-Brock 2021: Causes of group failure in meerkats',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8571573/',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Thorley et al. 2025: Climate variability and meerkat demography',
    url: 'https://doi.org/10.1002/ecm.70021',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Dubuc & Clutton-Brock 2019: Male immigration and subordinate female growth',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6374659/',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-suricata-suricatta',
    slug: 'meerkat',
    names: {
      zh: '狐獴',
      en: 'Meerkat',
      aliases: ['Suricate', 'Slender-tailed Meerkat', 'Gray Meerkat'],
    },
    scientificName: 'Suricata suricatta',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Carnivora', '食肉目'),
      taxon('Herpestidae', '獴科'),
      taxon('Suricata', '狐獴属'),
    ),
    conservation: {
      ...conservation('LC', 'stable', 2015),
      assessor: 'Jordan, N. R. & Do Linh San, E.（IUCN Red List，评估于2015-02-28）',
    },
    distribution: {
      realms: ['terrestrial'],
      continents: ['非洲'],
      regions: [
        '南部非洲西部干旱内陆',
        '喀拉哈里盆地与邻近半干旱地带',
        '安哥拉极西南缘',
        '纳米比亚西部和南部',
        '博茨瓦纳西南部',
        '南非北部和西部',
      ],
      countries: ['安哥拉', '博茨瓦纳', '纳米比亚', '南非'],
      range:
        '分布于南部非洲西部内陆，包括纳米比亚西部和南部、博茨瓦纳西南部、南非北部和西部，以及安哥拉极西南缘。莱索托只有历史推测，截至 2015 年评估仍无确认记录。',
      center: { lat: -25.5, lng: 21 },
    },
    habitats: [
      {
        name: '干旱稀树草原与短草开阔地',
        realm: 'terrestrial',
        description: '短草、稀疏木本植物和可挖掘土壤构成主要觅食与避难环境。',
        isPrimary: true,
      },
      {
        name: '半干旱草地与喀拉哈里沙地',
        realm: 'terrestrial',
        description: '包括沙丘间平地、干河床和邻近开阔地；不等同真正无植被沙漠。',
        isPrimary: true,
      },
      {
        name: '干旱灌丛与卡鲁型开阔地',
        realm: 'terrestrial',
        description: '利用保持开阔结构的干灌丛和石质地带，不进入密闭森林或山地。',
      },
      {
        name: '荒漠边缘与受改造开放景观',
        realm: 'terrestrial',
        description: '可在部分农村和农业景观出现，但记录存在不表示质量等同天然生境。',
      },
    ],
    measurements: {
      length: {
        min: 24.5,
        max: 29,
        unit: 'cm',
        note: '成体头体长，不含另长19至24厘米的尾；旧物种账户引用Smithers 1971。',
      },
      weight: {
        min: 620,
        max: 969,
        unit: 'g',
        note: '历史样本合并范围；雄性平均731克、626至797克，雌性平均720克、620至969克。',
      },
    },
    diet: {
      types: ['insectivore', 'carnivore'],
      foods: [
        '甲虫成虫与幼虫',
        '其他昆虫及幼体',
        '蜘蛛与蝎',
        '蜈蚣与马陆',
        '蜥蜴和其他小型爬行动物',
        '局地或季节性小型哺乳类与鸟类',
        '少量植物材料',
      ],
      description:
        '以昆虫和其他无脊椎动物为主，也取食小型脊椎动物及少量植物材料；南喀拉哈里研究显示食物组成随月份和猎物可获得性变化，局地比例不是全物种固定菜单。',
    },
    activity: [
      '昼行性，白天离洞觅食，夜间返回洞穴系统',
      '以发达前爪掘取地下猎物，掘食期间穿插短促地面扫描',
      '觅食群中常有成员到土丘或枯树等高处警戒，其他成员相继参与但没有固定轮班顺序',
      '警戒者的持续叫声会改变其他成员的觅食与警戒分配',
      '日程和觅食表现随季节、降雨、温度及食物条件变化',
    ],
    tags: [
      '哺乳纲',
      '食肉目',
      '獴科',
      '南部非洲',
      '昼行性',
      '合作繁殖',
      '群居动物',
      '放哨行为',
      '警报叫声',
      '掘洞',
      '食虫动物',
      'IUCN无危',
    ],
    summary:
      '狐獴是南部非洲干旱开阔地的昼行动物，群居、挖洞，以昆虫等小动物为食。觅食时常有成员站到高处警戒，群体还会合作照顾幼崽。',
    description:
      '狐獴有黑眼斑、背部暗纹、四趾足和黑色尾尖。白天，群体离洞寻找昆虫、蝎和其他小动物，夜间返回洞系。成员会守洞、给幼崽递食，并相继承担高处警戒；警戒叫声能减少同伴反复抬头和无人值守的空档。个体的贡献随体况、年龄、地位和风险改变。2015 年评估列为无危，后续局地研究仍发现气候和结核病会影响群体。',
    storySections: [
      {
        key: 'open-country-not-empty-desert',
        label: '分布',
        title: '干旱开阔地也需要植被与洞穴',
        body: '狐獴分布在南部非洲的干旱与半干旱开阔地，偏好短草、稀疏灌木和可挖掘土壤。沙丘间平地、干河床和邻近开阔地提供食物与洞穴资源，真正缺乏植被的沙漠通常不适合它。',
      },
      {
        key: 'prey-below-the-surface',
        label: '食性',
        title: '把脸埋进土里寻找今天的猎物',
        body: '昆虫及其幼体构成食物核心，蝎、蛛、多足类、蜥蜴和其他小型脊椎动物也会进入菜单。掘食让眼睛暂时离开地平线，这正是地面扫描和抬高警戒能与觅食相互配合的场景。局地食性比例随月份改变，不能把一项半年研究写成全年固定食谱。',
      },
      {
        key: 'alternation-without-a-rota',
        label: '行为',
        title: '警戒者会接替，顺序随情况改变',
        body: '前一只警戒者回到地面后，另一名成员通常很快补上；同一个体很少连续承担两次长时警戒。这让观察者看见“轮流”，但序列分析没有发现固定接班顺序。饱食、体况、年龄、性别、地位和群体大小都会改变贡献，群体中也没有终身专职的哨兵。',
      },
      {
        key: 'the-watchmans-call',
        label: '交流',
        title: '叫声告诉伙伴“现在有人在看”',
        body: '警戒者会在值守期间持续发声。观察和回放实验显示，听到叫声的觅食者较少自行抬头或同时上岗，群体的警戒重叠和无人警戒时段随之减少。叫声改善协调，却没有维持严格轮班；警报声随风险变化，也不能逐句翻译成人类语言。',
      },
      {
        key: 'helpers-at-burrow-and-prey',
        label: '育幼',
        title: '群体成员共同照顾幼崽',
        body: '幼崽最初约三周留在地下，一名成员可留守洞口一整天，其他成员外出觅食。幼崽出洞后，助手会递送猎物，并随幼崽成长改变活猎物处理方式。实验支持这会加快幼崽学习，但守洞、递食和放哨都不是固定阶级的终身工作。',
      },
      {
        key: 'least-concern-with-local-signals',
        label: '保护',
        title: '气候与疾病仍需长期监测',
        body: '2015年全球评估判为无危、趋势稳定，没有成熟个体估算，也未识别主要威胁。此后一个南喀拉哈里长期研究点显示，降雨、极热和结核病能影响体况、繁殖、生存或群体延续。局地机制不等于全球下降，却说明更新评估不能只沿用一枚旧标签。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1776 年最初归在 Viverra 属',
        body: 'Schreber 在 1776 年以 Viverra suricatta 正式命名狐獴，模式产地记为南非好望角，现用学名为 Suricata suricatta。长期野外研究后来揭示了它的合作育幼、警戒叫声和教学行为。助手会随幼崽成长调整活猎物的处理方式，帮助幼崽更快学会捕食。',
      },
    ],
    keyFacts: [
      'MDD当前接受名是Suricata suricatta (von Schreber, 1776)，英文主名为Meerkat。',
      '原生国家为安哥拉、博茨瓦纳、纳米比亚和南非；莱索托没有确认记录。',
      'IUCN全球等级为LC、趋势稳定，评估日期为2015-02-28，没有判据代码或全球成熟个体估算。',
      'CITES在线名录未列本种，但国内和地方野生动物及贸易法规仍可适用。',
      '成体头体长24.5至29厘米，尾另长19至24厘米。',
      '历史样本雄性平均731克、雌性平均720克，两性范围高度重叠。',
      '黑眼斑、后背暗色横纹、四趾足和黑色尾尖构成可见识别组合。',
      '昆虫及其他无脊椎动物是食物主体，也取食小型脊椎动物和少量植物材料。',
      '群体资料跨度约2至50只，通常包含优势繁殖对和多个助手。',
      '成员会相继承担抬高警戒，但没有固定接班顺序、等额轮班或专职哨兵。',
      '抬高警戒、洞口警戒和觅食中的地面扫描是三种不同观察类别。',
      '警戒叫声减少其他成员的重复警戒、值守重叠和无人警戒空档。',
      '放哨贡献受营养状态、年龄、性别、地位、群体大小、捕食环境和幼崽在场影响。',
      '南喀拉哈里优势雌性产生大多数活到独立期的幼崽，下位雌性仍可能繁殖。',
      '幼崽最初约三周留在地下，其他成员可守洞，出洞后助手会递食。',
      '助手随幼崽成长调整活猎物处理方式，实验支持这构成操作性教学。',
      '南喀拉哈里资料中优势雌性可活到约12年，圈养最高纪录为20.6年；二者都不是典型野外寿命范围。',
      '2015年全球评估未识别主要威胁，后续局地研究仍发现气候和结核病会影响种群过程。',
    ],
    threats: [
      '2015年全球评估未识别主要威胁，但评估距今较久且没有全球成熟个体估算',
      '降雨不足和极端高温可通过猎物、觅食效率与体况影响南喀拉哈里种群，尚无全分布区下降比例',
      'Mycobacterium suricattae结核病可导致南喀拉哈里长期研究群失败，全球流行范围与种群效应未量化',
      '灌溉农业、土地改造与生态系统工程动物减少可能降低局地猎物和洞穴资源，证据主要来自区域评估',
      '局地宠物捕捉和贸易有轶闻记录，但对野生种群的规模效应未知',
      '国家级分布宽而监测密度不均，局地下降可能被全球LC标签掩盖',
    ],
    conservationActions: [
      '维持并连通喀拉哈里跨境公园等大型保护地内的天然开阔半干旱生境',
      '用重复、可比较的调查监测四个范围国的占域、群体数和密度，不把单年波动当长期趋势',
      '在长期研究点同步记录降雨、极端高温、植被生产力、体况、繁殖和生存',
      '监测Mycobacterium suricattae的空间范围、传播途径和群体层影响，并与全球威胁评估分开报告',
      '量化宠物捕捉、国内贸易和跨境流通，按国家法律监管野生来源个体',
      '在农业和放牧景观保留洞穴系统、可挖掘土壤、短草开阔地及无脊椎动物猎物基础',
      '更新全球IUCN评估，补充成熟个体数、趋势置信度和各范围国威胁差异',
    ],
    metrics: {
      adultLengthCm: [24.5, 29],
      adultMassKg: [0.62, 0.969],
    },
    featuredStats: [
      {
        key: 'iucn-status',
        label: 'IUCN全球等级',
        value: 'LC',
        unit: '无危',
        note: '2015年评估，趋势稳定；没有全球成熟个体估算。',
      },
      {
        key: 'head-body-length',
        label: '成体头体长',
        value: '24.5–29.0',
        unit: '厘米',
        note: '不含另长19至24厘米的尾；旧物种账户引用历史样本。',
      },
      {
        key: 'social-group-size',
        label: '观察群体规模',
        value: '2–50',
        unit: '只',
        note: '区域账户与南喀拉哈里研究的跨度，不是固定或最佳群体大小。',
      },
      {
        key: 'raised-guard-bout',
        label: '抬高警戒段',
        value: '267.6 ± 74.9',
        unit: '秒',
        note: '1999年研究六群的均值 ± SE，不是固定班长。',
      },
    ],
    media: {
      image: './images/species/meerkat/01-sentinel-mound-cover.webp',
      alt: '一只完整的成年外观狐獴在画面右侧低矮沙丘上自然直立，鼻端、双耳、前肢、两只后足和完整尾尖均在画内，左侧保留安静的半干旱灌丛背景',
      focalPoint: { x: 0.77, y: 0.65 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image: './images/species/meerkat/02-full-body-diagnostic-profile.webp',
          alt: '沙地上恰好一只完整的成年外观狐獴呈严格侧身四足姿态，尖吻、黑眼斑、后背暗纹、四足与整条细长尾均在画内',
          title: '细长躯体与不蓬松的长尾',
          caption:
            'AI生成科学情景重建；侧面轮廓展示种级识别组合。趾端在画面中互有遮挡，不能据此计数，也不能反测体长、体重、年龄、性别、亚种或地点。',
          focalPoint: { x: 0.52, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/meerkat/03-sentinel-above-foraging-group.webp',
          alt: '开阔沙地中恰好五只完整狐獴，一只位于右中低丘上直立，另外四只在较低处以四足姿态分散觅食',
          title: '高位直立与地面觅食同时出现',
          caption:
            'AI生成科学情景重建；画面只支持一只高位直立、四只低位觅食的空间关系，不证明警戒接替、报警、发现捕食者、固定分工或典型群体规模。',
          focalPoint: { x: 0.55, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/meerkat/04-sand-foraging-dig.webp',
          alt: '半干旱沙地上恰好一只完整狐獴低头刨土，前爪触及松沙，四足和细长尾尖均未裁切，画面中没有可见猎物',
          title: '前爪掘开表层沙土',
          caption:
            'AI生成科学情景重建；低头和松沙表现一次掘食姿态，不能确认地下猎物、挖掘深度、持续时间、觅食成功或个体正在进行警戒扫描。',
          focalPoint: { x: 0.5, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/meerkat/05-pup-provisioning.webp',
          alt: '天然沙质洞口旁恰好一只完整成年外观狐獴与一只完整幼獴相对，成体嘴边叼着一只小型昆虫，两只个体均完整入画',
          title: '成体与幼獴之间的一只小型猎物',
          caption:
            'AI生成科学情景重建；静帧不能确认亲缘、助手身份、猎物状态、递交是否完成或这次互动属于实验定义的教学，也不代表固定育幼方式。',
          focalPoint: { x: 0.51, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/meerkat/06-morning-burrow-group.webp',
          alt: '晨光下恰好四只完整狐獴分布在两个天然洞口附近，其中一只低头梳理身体，一只体型较小，其余个体保持四足姿态',
          title: '晨光中的洞口群体',
          caption:
            'AI生成科学情景重建；四只个体、两个洞口、一次理毛姿态和体型差异用于保持画面可读，不证明亲缘、年龄、守洞职责、典型群体规模或洞系结构。',
          focalPoint: { x: 0.52, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: MEERKAT_SOURCES,
    featured: true,
    publishedAt: MEERKAT_CONTENT_DATE,
    updatedAt: MEERKAT_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
