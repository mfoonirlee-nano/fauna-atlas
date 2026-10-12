import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const KAKAPO_SOURCE_DATE = '2026-08-30' as const;

const KAKAPO_CONTENT_DATE = '2026-08-30' as const;

const KAKAPO_SOURCES = [
  {
    title: 'AviList v2025b — Global avian checklist',
    url: 'https://www.avilist.org/checklist/v2025b/',
    kind: 'taxonomy',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'IOC World Bird List — Taxonomic updates for Strigops habroptilus',
    url: 'https://www.worldbirdnames.org/new/updates/taxonomy/',
    kind: 'taxonomy',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'New Zealand Birds Online — Kākāpō | Kakapo',
    url: 'https://www.nzbirdsonline.org.nz/species/kakapo',
    kind: 'general',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List 2018 — Strigops habroptila assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22685245A129751169.en',
    kind: 'conservation',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Assessment process and ten-year update rule',
    url: 'https://nrl.iucnredlist.org/assessment/process',
    kind: 'conservation',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'DOC — Kākāpō Recovery current population',
    url: 'https://www.doc.govt.nz/kakapo',
    kind: 'conservation',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'DOC 2026-04-23 — Population snapshot of 235 kākāpō',
    url: 'https://www.doc.govt.nz/news/media-releases/2026-media-releases/fast-dna-sex-test-game-changer-for-conservation/',
    kind: 'conservation',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'DOC 2022 — Official population threshold for young kākāpō',
    url: 'https://www.doc.govt.nz/news/media-releases/2022-media-releases/bumper-breeding-season-boosts-kakapo-population/',
    kind: 'conservation',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'DOC — Kākāpō habitat and islands',
    url: 'https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/habitat-and-islands/',
    kind: 'distribution',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'DOC — Kākāpō behaviour',
    url: 'https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/',
    kind: 'ecology',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'DOC — Current kākāpō conservation',
    url: 'https://www.doc.govt.nz/our-work/kakapo-recovery/what-we-do/current-conservation/',
    kind: 'conservation',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'DOC 2026 — Kākāpō breeding season officially underway',
    url: 'https://www.doc.govt.nz/news/media-releases/2026-media-releases/kakapo-breeding-season-officially-underway/',
    kind: 'ecology',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'Harper et al. 2006 — What triggers nesting of kākāpō?',
    url: 'https://www.birdsnz.org.nz/wp-content/uploads/2021/12/Notornis_53_1_160.pdf',
    kind: 'ecology',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'Wilson et al. 2006 — Diet in breeding and non-breeding years',
    url: 'https://www.birdsnz.org.nz/publications/diet-of-kakapo-in-breeding-and-non-breeding-years-on-codfish-island-whenua-hou-and-stewart-island/',
    kind: 'ecology',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'Savage et al. 2022 — Early embryo mortality drives low hatching success',
    url: 'https://doi.org/10.1111/acv.12746',
    kind: 'conservation',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'Guhlin et al. 2023 — Species-wide genomics of kākāpō',
    url: 'https://doi.org/10.1038/s41559-023-02165-y',
    kind: 'general',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'Foster et al. 2026 — Genomic architecture of inbreeding depression',
    url: 'https://doi.org/10.1111/mec.70252',
    kind: 'conservation',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
  {
    title: 'Winter et al. 2022 — Kākāpō aspergillosis outbreak genomics',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9668684/',
    kind: 'conservation',
    accessedAt: KAKAPO_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-strigops-habroptilus',
    slug: 'kakapo',
    names: {
      zh: '鸮鹦鹉',
      en: 'Kākāpō',
      aliases: ['Kakapo', 'Owl Parrot'],
    },
    scientificName: 'Strigops habroptilus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Psittaciformes', '鹦形目'),
      taxon('Strigopidae', '鸮鹦鹉科'),
      taxon('Strigops', '鸮鹦鹉属'),
    ),
    conservation: conservation('CR', 'increasing', 2018, 'A2be'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['大洋洲'],
      regions: [
        'Whenua Hou/Codfish Island',
        'Pukenui/Anchor Island',
        'Te Kākahu-o-Tamatea/Chalky Island',
        'Sanctuary Mountain Maungatautari',
        'Coal Island/Te Puka-Hereka',
      ],
      countries: ['新西兰'],
      endemicTo: ['新西兰'],
      range:
        '历史上广布于新西兰大陆多类植被；当前全部已知个体生活在受保护的近海岛屿或围栏大陆保护地。Whenua Hou、Pukenui 与 Te Kākahu-o-Tamatea 是三个繁殖种群，Maungatautari 和 Coal Island 为小型雄鸟适生性与风险试验；这些地点的捕食者风险与管理用途并不相同。',
      center: { lat: -42.5, lng: 172 },
    },
    habitats: [
      {
        name: '南部陆均松与罗汉松类森林',
        realm: 'terrestrial',
        description:
          'Whenua Hou、Pukenui 与 Te Kākahu-o-Tamatea 的现存繁殖种群利用有陆均松丰年结果的原生森林；这不是历史全分布区的唯一生境。',
        isPrimary: true,
      },
      {
        name: '原生森林、灌丛与林缘镶嵌',
        realm: 'terrestrial',
        description:
          '历史记录覆盖多种森林和植被类型，地表路线、攀爬树木与季节性植物食物共同构成活动空间。',
      },
      {
        name: '山脊、岩台与低矮植被求偶场',
        realm: 'terrestrial',
        description:
          '雄鸟在突出地形上清理小径和浅碗穴；这是繁殖期行为微生境，不是全年唯一栖息地。',
      },
      {
        name: '树洞、岩穴与根系洞穴巢位',
        realm: 'terrestrial',
        description:
          '雌鸟在地面或地下天然空腔、树洞、岩石和树根形成的洞穴中独自孵卵育幼，具体巢型随地点变化。',
      },
    ],
    measurements: {
      length: {
        min: 58,
        max: 64,
        unit: 'cm',
        note: 'New Zealand Birds Online 汇总的成鸟全长范围',
      },
      weight: {
        min: 1,
        max: 4,
        unit: 'kg',
        note: '两性成鸟包络；雌鸟约 1—2.5 千克，雄鸟约 2—4 千克',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: [
        '陆均松及其他罗汉松类果实与种子',
        '叶、芽与花',
        '蕨叶与根茎',
        '树皮、根、块茎与鳞茎',
        '其他季节性原生植物果实',
      ],
      description:
        '完全植食，随季节和地点更换植物部位；会把坚韧叶片压榨后留下弯月形纤维嚼团。南部繁殖年常大量利用罗汉松类果实，但局地粪便比例不代表全分布区固定食谱。',
    },
    activity: ['夜行性', '地栖', '善攀树', '独居为主', '求偶期雄鸟集中展示'],
    tags: [
      '新西兰特有',
      '不会飞',
      '夜行鹦鹉',
      '陆均松丰年繁殖',
      '求偶场繁殖',
      '逐只遥测',
      'IUCN 极危',
      '重点保育',
    ],
    summary:
      '新西兰特有的夜行、不会飞的大型鹦鹉；雄鸟在山脊碗穴展示，雌鸟随陆均松丰年独自筑巢育幼。',
    description:
      '鸮鹦鹉是鸮鹦鹉属唯一现生种。它以苔绿斑驳羽色藏在森林地表，夜间步行和攀树取食植物；繁殖年里，雄鸟在求偶场持续轰鸣，雌鸟选偶后独自承担 1 至 4 枚卵和幼鸟。IUCN 2018 年仍将其列为极危、趋势上升，当时估计 116 只成熟个体；DOC 在 2026-04-23 报告 235 只，2026-08-30 动态页仍显示 235 只全龄在世野外个体。当前恢复依赖安全生境、逐只遥测、巢与健康管理、遗传决策和疾病防范。',
    storySections: [
      {
        key: 'night-on-foot',
        label: '夜行地栖',
        title: '夜间步行觅食，也会攀树',
        body: '白天，鸮鹦鹉在地面或树上休息；入夜后，它沿熟悉路线步行觅食，也会用强足攀上约 20 米高的陆均松。短圆翼已经不能提供主动飞行，只帮助平衡和缓冲跌落；体重较轻的雌鸟偶尔能滑过约 3 至 4 米空隙。',
      },
      {
        key: 'plant-chews',
        label: '植物食谱',
        title: '压榨叶片后留下纤维嚼团',
        body: '鸮鹦鹉只吃植物，却不只吃果实。叶、芽、花、蕨叶、树皮、根、根茎、块茎、果实和种子随季节轮换；面对坚韧叶片，它用足把叶片拉过喙缘，压榨可食部分，把纤维留成弯月形嚼团。',
      },
      {
        key: 'boom-lek',
        label: '求偶声场',
        title: '雄鸟在浅碗穴求偶场轰鸣',
        body: '繁殖年里，雄鸟在突出山脊清出小径与浅碗穴，鼓起胸部气囊，约每 1 至 2 秒发出一次低频轰鸣，再插入金属般的 ching 帮助雌鸟定位。雌鸟走过求偶场选择配偶；交配结束后，雄鸟不参与筑巢、孵卵或育幼。',
      },
      {
        key: 'rimu-mast-calendar',
        label: '丰年繁殖',
        title: '未熟陆均松果预告繁殖年',
        body: '当前南部繁殖种群通常只在陆均松丰年繁殖，间隔约 2 至 4 年。Whenua Hou 的时间序列把筑巢与春季未熟果量联系起来，但究竟是营养、化学还是认知信号仍未确定；普通补充饲料可以改善体况，却没有被证明能单独启动繁殖。',
      },
      {
        key: 'solo-mother',
        label: '独自育幼',
        title: '雌鸟在夜里独自往返巢穴',
        body: '雌鸟在树洞、岩穴或根系洞穴中产下 1 至 4 枚卵，独自孵化 27 至 31 天。幼鸟平均约 70 日龄离巢，平均约 9 个月独立；母鸟夜间必须离巢觅食，这段无人守巢时间曾让卵和幼鸟格外容易遭到外来哺乳动物捕食。',
      },
      {
        key: 'every-bird-ledger',
        label: '逐只守护',
        title: '每一只都进入保护台账',
        body: '每只鸮鹦鹉都佩戴智能发射器，接受定期健康检查并进入全国数据库；繁殖期另行监测巢穴。DOC 在 2026 年 4 月 23 日报告 235 只，8 月 30 日动态页仍显示同值；这个数字统计全龄在世野外个体，IUCN 2018 年的 116 只则是成熟个体估计。雏鸟孵化后还须达到管理项目的纳入门槛，不能直接与台账相加。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1845 年的科学命名，早于名字的是当地认识',
        body: 'Gray 在 1845 年正式命名鸮鹦鹉为 Strigops habroptilus。毛利语常用名 kākāpō 意为“夜间的鹦鹉”，当地居民在科学描述之前就认识并利用这种鸟。后来资料一度使用 habroptila，IOC 将种加词改回原有名词形式 habroptilus。',
      },
    ],
    keyFacts: [
      '鸮鹦鹉是鸮鹦鹉属唯一现生种；鸮鹦鹉科还包含另一属的现生成员。',
      'IOC 将旧拼法 Strigops habroptila 改回当前有效名 Strigops habroptilus；IUCN 2018 年评估题名仍保留旧拼法。',
      '成鸟全长约 58 至 64 厘米。',
      '雄鸟约 2 至 4 千克，雌鸟约 1 至 2.5 千克；雄鸟平均明显更重。',
      '它白天休息、夜间觅食，是夜行性鹦鹉。',
      '它不会主动飞行，短翼用于平衡和缓冲跌落；较轻的雌鸟可短距滑翔约 3 至 4 米。',
      '强足可让它攀上约 20 米高的陆均松，也能一次步行数公里；这些是观察范围，不是每只鸟的固定极限。',
      '食性完全植食，涵盖果实、种子、叶、芽、花、树皮、蕨叶、根、根茎和块茎。',
      '它会压榨坚韧叶片并留下弯月形纤维嚼团。',
      'Whenua Hou 与 Rakiura 的粪便研究显示，罗汉松类果实在繁殖年食谱中更常见；局地结果不代表固定比例。',
      '当前南部繁殖种群随陆均松丰年繁殖，常见间隔约 2 至 4 年；北部历史地点与其他植物群落的触发信号仍不确定。',
      '补充饲料可以改善体况和育雏资源，但没有被证明能单独触发筑巢。',
      '雄鸟在固定的 track-and-bowl 求偶场展示；鸮鹦鹉是唯一已知采用求偶场繁殖的鹦鹉。',
      '雄鸟鼓起胸部气囊，约每 1 至 2 秒轰鸣一次，并用 ching 帮助雌鸟定位。',
      '一晚展示最长可达约 8 小时并持续 2 至 3 个月，这是繁殖期上限式概括，不是每晚固定时长。',
      '交配后雄鸟不参与照护，雌鸟独自筑巢、孵卵和育幼。',
      '每窝 1 至 4 枚，孵化 27 至 31 天、平均约 29 天。',
      '幼鸟平均约 70 日龄离巢，平均约 9 个月独立。',
      'IUCN 2018 年评为极危、趋势上升、标准 A2be，当时估计 116 只成熟个体；截至 2026-08-30 这份评估尚未越过十年过期线。',
      'DOC 2026-04-23 报告 235 只；2026-08-30 动态页仍显示 235 只全龄在世野外个体，这不是当天完成的普查。',
      '孵化、离巢和进入官方种群台账不是同一事件；项目曾在幼鸟达到 150 日龄后才纳入官方数字。',
      '当前有 3 个繁殖种群，另有 Maungatautari 与 Coal Island 的小型雄鸟试验；Coal Island 仍可能有低密度白鼬。',
      '近四十年约 61% 的卵未孵化；表面未发育卵中多数实际已经受精，早期胚胎死亡是主要问题。',
      '148 只个体的研究显示，雌鸟全基因组近交程度升高与较低孵化成功率相关；这不是单基因因果。',
      '2019 年曲霉病暴发影响 21 只、造成 9 只死亡；关联菌株不足以单独解释暴发。',
    ],
    threats: [
      '外来猫、白鼬和鼠类的捕食，以及保护地再次入侵；Coal Island 试验地仍用于评估低密度白鼬风险。',
      '低遗传多样性和近交衰退与孵化失败相关，叠加丰年间隔长、雌鸟独自育幼的缓慢恢复速度。',
      '曲霉病等突发传染病会重创集中小种群，病原菌株、环境和宿主条件需要合并评估。',
      '可容纳繁殖种群的大型安全生境不足，使恢复持续依赖少数岛屿、围栏保护地与密集管理。',
    ],
    conservationActions: [
      '维持保护岛和围栏保护地的检疫、入侵检测与捕食者控制，并扩大可容纳繁殖种群的大型安全生境。',
      '为每只鸟使用智能发射器、自动站和至少年度健康检查，把体重、血样、寄生虫与病史写入全国数据库；繁殖期另行监测巢穴。',
      '在风险明确时使用补充饲料、换卵与寄养、人工孵化和手养，并在不同保护地试验更低干预的自然育雏。',
      '结合全种群基因组、亲缘和表型资料安排配对、人工授精与转移，减少近交并保留稀有谱系。',
      '维持兽医监测和暴发应对，结合病原基因组与环境采样区分关联菌株、宿主条件和场地风险。',
    ],
    metrics: {
      adultLengthCm: [58, 64],
      adultMassKg: [1, 4],
      estimatedMatureIndividuals: [116, 116],
    },
    featuredStats: [
      {
        key: 'global-iucn-status',
        label: 'IUCN 全球等级',
        value: 'CR',
        unit: '极危',
        note: '2018 年评估，趋势上升；截至 2026-08-30 尚未越过十年过期线',
      },
      {
        key: 'living-population-snapshot',
        label: '在世管理台账',
        value: '235',
        unit: '只',
        note: 'DOC 2026-04-23 有日期公告；2026-08-30 动态页同值，全龄且全部为野外个体',
      },
      {
        key: 'male-body-mass',
        label: '雄鸟体重',
        value: '2—4',
        unit: '千克',
        note: '雌鸟约 1 至 2.5 千克；用于表达体重性二型，不是每只雄鸟固定范围',
      },
      {
        key: 'rimu-breeding-interval',
        label: '繁殖间隔',
        value: '2—4',
        unit: '年',
        note: '当前南部种群随陆均松丰年繁殖；不是全历史范围固定时钟',
      },
    ],
    media: {
      image: './images/species/kakapo/01-moss-forest-nocturnal-portrait.webp',
      alt: '蓝色暮光下的新西兰温带森林地面，一只绿色斑驳的敦实鸮鹦鹉在苔藓与落叶间侧身站立',
      focalPoint: { x: 0.62, y: 0.57 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/kakapo/02-full-body-diagnostic-profile.webp',
          alt: '潮湿森林落叶地上，一只绿色斑驳鸮鹦鹉以左向三分之二侧面完整站立，浅灰钩喙、面盘、短翼与粗壮双腿可见',
          title: '不会飞鹦鹉的完整轮廓',
          caption:
            'AI生成科学情景重建；画面可见苔绿斑驳羽毛、面盘状羽毛、鹦鹉钩喙、短翼和粗壮腿。足趾方向受透视影响，像素不能证明对趾结构、性别、年龄、体重或飞行能力。',
          focalPoint: { x: 0.49, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/kakapo/03-male-track-and-bowl-booming.webp',
          alt: '夜间低矮植被中，一只鸮鹦鹉站在中央裸土浅凹内，数条窄径从浅凹向周围放射',
          title: '径道与浅碗穴组成展示场',
          caption:
            'AI生成科学情景重建；中央浅凹与放射小径表达 track-and-bowl 求偶场。静帧不能判定个体性别、是否正在轰鸣、声音传播距离、展示时长或场地尺寸。',
          focalPoint: { x: 0.55, y: 0.57 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/kakapo/04-rimu-fruit-tree-foraging.webp',
          alt: '新西兰森林枝条上，一只绿色鸮鹦鹉抓握树枝，钩喙接近细垂枝叶间带暗色种子端部的红橙色果实结构',
          title: '攀上细垂枝叶的结果枝条',
          caption:
            'AI生成科学情景重建；细垂枝叶和红橙色肉质托重建陆均松结果情景。图像不能鉴定植物或鸟的个体、证明吞食过程、标记丰年，更不能证明一次取食触发繁殖。',
          focalPoint: { x: 0.57, y: 0.49 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/kakapo/05-female-ground-cavity-two-eggs.webp',
          alt: '森林树根形成的地面空腔入口，一只鸮鹦鹉站在恰好两枚完整白卵旁边',
          title: '根部巢穴内可见两枚白卵',
          caption:
            'AI生成科学情景重建；画面恰好有两枚完整白卵，只表达合法窝卵范围内的一种巢景。羽色不能判定成鸟性别，静帧也不能证明亲缘、完整窝卵数、孵化行为、受精状态或孵化期。',
          focalPoint: { x: 0.57, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/kakapo/06-radio-telemetry-island-monitoring.webp',
          alt: '苔藓森林中，一名野外人员在远处手持定向天线与接收器，前景只有一只绿色斑驳鸮鹦鹉，人与鸟没有接触',
          title: '定向天线支持非接触监测',
          caption:
            'AI生成科学情景重建；画面只有一名人员、一只鸟和一副 Yagi 定向天线。鸟身没有可辨发射器，静帧不能证明收到信号，也不能识别人员、机构、地点、鸟的身份或监测结果。',
          focalPoint: { x: 0.66, y: 0.61 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...KAKAPO_SOURCES,
      {
        title: 'New Zealand DOC: Kakapo Recovery Plan naming history',
        url: 'https://www.doc.govt.nz/documents/science-and-technical/TSRP21.pdf',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
      {
        title: 'Te Ara: Kākāpō Māori common name',
        url: 'https://teara.govt.nz/en/large-forest-birds/page-5',
        kind: 'general',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: KAKAPO_CONTENT_DATE,
    updatedAt: KAKAPO_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
