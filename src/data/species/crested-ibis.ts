import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const CRESTED_IBIS_SOURCE_DATE = '2026-08-25' as const;

const CRESTED_IBIS_CONTENT_DATE = '2026-08-25' as const;

const CRESTED_IBIS_SOURCES = [
  {
    title: 'Avibase — Nipponia nippon',
    url: 'https://avibase.bsc-eoc.org/species.jsp?avibaseid=3E328C3C526E7ECF',
    kind: 'taxonomy',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: 'BirdLife International — Asian Crested Ibis species factsheet',
    url: 'https://datazone.birdlife.org/species/factsheet/asian-crested-ibis-nipponia-nippon',
    kind: 'conservation',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: '国家林草局 2024 — 全球朱鹮种群数量已超过 1.1 万只',
    url: 'https://www.forestry.gov.cn/c/www/dfdt/545445.jhtml',
    kind: 'conservation',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: '重庆市农业农村委 2023 — 全球朱鹮种群数量达 1.1 万只',
    url: 'https://nyncw.cq.gov.cn/zwxx_161/ywxx/202311/t20231109_12540505.html',
    kind: 'conservation',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: '生态环境部 2022 — 朱鹮拯救保护案例',
    url: 'https://www.mee.gov.cn/ywgz/zrstbh/swdyxbh/202212/t20221212_1007662.shtml',
    kind: 'conservation',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: '国家林草局、农业农村部 — 国家重点保护野生动物名录（2021 年第 3 号）',
    url: 'https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html',
    kind: 'conservation',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: '生态环境部、中国科学院 — 中国生物多样性红色名录：脊椎动物卷（2020）',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: 'CMS — Species list',
    url: 'https://www.cms.int/species',
    kind: 'conservation',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: '日本环境省 2026 — レッドデータブック鳥類・トキ',
    url: 'https://www.env.go.jp/nature/kisho/5th-rl-2026/BI0054_RDB5th.pdf',
    kind: 'conservation',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: '日本环境省 — 佐渡朱鹮野外放归与首次野外孵化',
    url: 'https://www.env.go.jp/content/000039969.pdf',
    kind: 'conservation',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: '韩国政府 2019 — First release at Upo Wetland',
    url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148860661',
    kind: 'conservation',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: '韩国环境部 2023 — Seventh release of Crested Ibises',
    url: 'https://eng.me.go.kr/eng/web/board/read.do?boardId=1599780&boardMasterId=522',
    kind: 'conservation',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: 'Bird Research — 生態図鑑 トキ',
    url: 'https://www.bird-research.jp/1_shiryo/seitai/toki.pdf',
    kind: 'general',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: '日本国立科学博物館 — トキ Nipponia nippon',
    url: 'https://www.kahaku.go.jp/pickup-science/nid00001005.html',
    kind: 'general',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: 'Uchida 1970 — Nuptial coloration in the Japanese Crested Ibis',
    url: 'https://doi.org/10.3312/jyio1952.6.54',
    kind: 'ecology',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: 'Endo & Nagata 2013 — Seasonal foraging habitats and prey on Sado',
    url: 'https://doi.org/10.1017/S0959270913000035',
    kind: 'ecology',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: 'Okahisa et al. 2022 — Integrated population model in Japan',
    url: 'https://doi.org/10.1111/ibi.13071',
    kind: 'conservation',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: 'Feng et al. 2019 — The genomic footprints of the fall and recovery of the Crested Ibis',
    url: 'https://www.sciencedirect.com/science/article/pii/S0960982218316099',
    kind: 'conservation',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
  {
    title: 'Oxford Ornithology 2023 — Density-dependent natal dispersal',
    url: 'https://academic.oup.com/condor/article/125/1/duac042/6779103',
    kind: 'distribution',
    accessedAt: CRESTED_IBIS_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-nipponia-nippon',
    slug: 'crested-ibis',
    names: {
      zh: '朱鹮',
      en: 'Crested Ibis',
      aliases: ['Asian Crested Ibis', 'Japanese Crested Ibis', 'Toki'],
    },
    scientificName: 'Nipponia nippon',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Pelecaniformes', '鹈形目'),
      taxon('Threskiornithidae', '鹮科'),
      taxon('Nipponia', '朱鹮属'),
    ),
    conservation: conservation('EN', 'increasing', 2018, 'B1ab(iii)'),
    distribution: {
      realms: ['terrestrial', 'freshwater'],
      continents: ['亚洲'],
      regions: ['中国秦岭及扩展区', '日本佐渡岛', '韩国牛浦湿地'],
      countries: ['中国', '日本', '韩国'],
      range:
        '历史分布于东亚大陆、朝鲜半岛、日本和台湾；当前中国种群以陕西秦岭为恢复源头并持续扩展，日本佐渡和韩国牛浦为重引入种群。',
      center: { lat: 33.23, lng: 107.55 },
    },
    habitats: [
      {
        name: '浅水稻田、河岸与淡水湿地',
        realm: 'freshwater',
        description: '在浅泥、浅水和缓流边缘探食，水位和农法改变季节可用性。',
        isPrimary: true,
      },
      {
        name: '农田、池塘与草地镶嵌景观',
        realm: 'terrestrial',
        description: '稻田、田埂、草地、池塘和水库组成觅食网络，冬季蓄水与低投入耕作维持猎物。',
        isPrimary: true,
      },
      {
        name: '湿地附近温带高大乔木林',
        realm: 'terrestrial',
        description: '在邻近觅食地的高大松、栎、榆等横枝筑盘状巢并夜栖。',
      },
    ],
    measurements: {
      length: {
        typical: 75,
        unit: 'cm',
        note: '日本国立科学博物馆物种概览的代表值，不是全种极值。',
      },
      weight: {
        min: 1.6,
        max: 2,
        unit: 'kg',
        note: '日本国立科学博物馆物种概览的体重范围。',
      },
      wingspan: {
        typical: 1.4,
        unit: 'm',
        note: '日本国立科学博物馆物种概览的代表值，不是全种极值。',
      },
    },
    diet: {
      types: ['carnivore', 'piscivore', 'insectivore'],
      foods: [
        '泥鳅及其他小鱼',
        '蛙类',
        '淡水蟹与螯虾',
        '河螺等软体动物',
        '昆虫及幼虫',
        '蚯蚓',
      ],
      description:
        '以弯喙在浅泥和浅水中触觉探食，随季节在稻田、河岸、田埂和草地间改变猎物组合。',
    },
    activity: [
      '日出前后离开夜栖树',
      '以弯喙触觉探查浅泥',
      '白天觅食与树上休息交替',
      '日落前返回林木夜栖',
      '非繁殖期可形成觅食群',
      '双亲共同筑巢、孵卵和育雏',
    ],
    tags: [
      '东亚涉禽',
      'IUCN 濒危',
      '国家一级重点保护野生动物',
      'CITES 附录 I',
      '重引入',
      '稻田湿地',
      '触觉探食',
      '繁殖期涂羽',
    ],
    summary:
      '朱鹮是东亚湿地鸟类，用弯喙在浅泥中探食，并在高树筑巢。1981 年陕西重新发现 7 只后，种群逐步恢复；繁殖期它会把皮肤分泌物涂在白羽上，形成灰色外观。',
    description:
      '朱鹮以红色裸脸、下弯黑喙、朱红腿和鲑橙飞羽辨识，在高树筑巢，到附近稻田、河岸和浅水湿地探食。1981 年陕西洋县仅发现 7 只，此后通过巡护、繁育、栖息地管理和中日韩重引入恢复到全球超过 11,000 只。IUCN 正式评估仍为 2018 年濒危、趋势上升，准则 B1ab(iii)，其成熟个体估计沿用 2006 年数据；恢复不等于遗传瓶颈、污染和生境风险已经消失。',
    storySections: [
      {
        key: 'seven-founders',
        label: '恢复史',
        title: '从七只幸存者逐步恢复',
        body: '1981 年在陕西洋县仅确认 4 只成鸟、3 只幼鸟。此后保护与繁育推动恢复，全球总量后来超过 11,000 只。这一数字包含不同年龄和饲养条件的个体，早期少数创始个体造成的遗传瓶颈仍有影响。',
      },
      {
        key: 'cosmetic-plumage',
        label: '繁殖外观',
        title: '繁殖期灰色来自皮肤分泌物',
        body: '成鸟洗浴后把面部附近皮肤产生的黑色物质涂到头颈和肩背白羽，多次涂抹形成炭灰色外观。',
      },
      {
        key: 'paddy-forest-mosaic',
        label: '生境拼图',
        title: '浅水觅食地与高树巢址',
        body: '浅水农田和河岸提供猎物，高树承载巢与夜栖点；冬季蓄水、低投入耕作和林木保护必须一起发生。',
      },
      {
        key: 'assessment-clock',
        label: '数字边界',
        title: '正式评估沿用较早的数量资料',
        body: 'IUCN 的 330 只成熟个体来自 2006 年。2024 年日本成熟个体估计已达 336 只，全球正式状态仍要等待重评。',
      },
      {
        key: 'east-asian-return',
        label: '重引入',
        title: '中国、日本和韩国的重引入',
        body: '中国秦岭、日本佐渡、韩国牛浦重建部分历史范围；野外出生、成熟、配对与持续生存比放飞数更能说明恢复。',
      },
      {
        key: 'tactile-foraging',
        label: '觅食',
        title: '用弯喙触觉寻找泥中猎物',
        body: '朱鹮把弯喙探入浅泥，以触觉发现小鱼、蟹、昆虫幼虫和蚯蚓，季节水位改变田块选择。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1835 年的命名与 1981 年的重新发现',
        body: '朱鹮的科学命名记录署名为 Temminck，年份为 1835 年，现用学名为 Nipponia nippon。1981 年陕西洋县发现 7 只，是衰退之后重新找到野生种群；此前东亚居民和科学文献已经认识这种鸟。如今脚环和长期观察帮助研究者追踪放归个体的存活与繁殖。',
      },
    ],
    keyFacts: [
      '主名 Crested Ibis；Asian Crested Ibis 为别名。',
      'IUCN 为 EN、increasing、2018、B1ab(iii)，正在重评。',
      'IUCN 约 330 只成熟个体源于 2006 年旧估计。',
      '1981 年重新发现 7 只；2024 年全球概数超过 11,000 只，但不是成熟个体数。',
      '中国列国家一级，中国红名录 2020 为 EN，CITES 列附录 I。',
      '繁殖期炭灰色来自把皮肤分泌物涂在白羽上。',
      '佐渡雌雄均值约总长 73.1 至 77.2 cm、体重 1.55 至 1.78 kg，不是绝对范围。',
      '窝卵数中位数 3、范围 2 至 5，孵化约 27 至 28 天，约 40 至 45 天离巢。',
    ],
    threats: [
      '历史猎捕、巢树砍伐与湿地丧失',
      '农药、化肥与猎物衰退',
      '冬季稻田排干、土地转用和河岸硬化',
      '偶发射杀、捕捉和巢区干扰',
      '七只创始瓶颈造成的低遗传多样性',
      '小型重引入种群的疾病、随机事件与连通风险',
    ],
    conservationActions: [
      '保护巢树、繁殖核心和夜栖林',
      '推广低投入稻作、冬季延长蓄水并恢复浅水猎物',
      '分别监测野外、放归和人工种群',
      '结合健康、行为和遗传评估开展放归与追踪',
      '维持中日韩种群遗传管理与疾病防控',
      '执行国家一级与 CITES 管理并规范观鸟距离',
    ],
    metrics: {
      adultMassKg: [1.6, 2],
    },
    featuredStats: [
      {
        key: 'rediscovery',
        label: '1981 年重新发现',
        value: '7',
        unit: '只',
        note: '4 成鸟、3 幼鸟',
      },
      {
        key: 'global-total',
        label: '2024 全球官方概数',
        value: '>11,000',
        unit: '只',
        note: '全龄、野外与人工混合；不是成熟个体数',
      },
      {
        key: 'sado-wild',
        label: '2024 年末佐渡野外',
        value: '576',
        unit: '只',
        note: '133 只放归、443 只野外出生',
      },
      {
        key: 'clutch',
        label: '窝卵数',
        value: '2—5',
        unit: '枚',
        note: '研究汇总中位数 3',
      },
    ],
    media: {
      image: './images/species/crested-ibis/01-rice-paddy-flight.webp',
      alt: '一只朱鹮伸直颈部低飞越过浅水稻田，红色裸脸、下弯黑喙、白色身体和鲑橙色下翼清楚可见',
      focalPoint: { x: 0.68, y: 0.48 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/crested-ibis/02-adult-field-marks.webp',
          alt: '浅水田边一只完整非繁殖成鸟侧身站立，红色裸脸和腿、黑色下弯喙红色喙端、白色冠羽与淡鲑色飞羽可见',
          title: '红脸、弯喙与鲑色飞羽',
          caption:
            '红脸、下弯黑喙与鲑橙飞羽组合用于辨识；重建图保留非繁殖期白色体羽。',
          focalPoint: { x: 0.55, y: 0.52 },
        },
        {
          image: './images/species/crested-ibis/03-paddy-forest-mosaic.webp',
          alt: '东亚浅水稻田、河岸池塘与邻近温带高树林组成连续景观，一只小比例朱鹮在田中觅食',
          title: '稻田与巢树组成的生境拼图',
          caption:
            '浅水农田供食，高大邻林承载巢与夜栖点；画面展示通用景观，不代表某个恢复区。',
          focalPoint: { x: 0.55, y: 0.57 },
        },
        {
          image: './images/species/crested-ibis/04-tactile-paddy-foraging.webp',
          alt: '一只朱鹮把向下弯曲的长喙探入浅水稻田软泥，以触觉寻找泥中小型猎物',
          title: '用弯喙探查浅泥',
          caption:
            '喙端在泥中依靠触觉寻找猎物；单幅觅食场景不表示泥鳅是全年唯一主食。',
          focalPoint: { x: 0.5, y: 0.58 },
        },
        {
          image: './images/species/crested-ibis/05-cosmetic-daubing.webp',
          alt: '繁殖期朱鹮洗浴后把头侧贴向肩背涂抹，头颈与上背呈炭灰色，翼和腹部仍白',
          title: '自己涂出的繁殖灰色',
          caption:
            '炭灰来自洗浴后反复涂抹皮肤分泌物，不是换出的黑色新羽，也不覆盖翼腹。',
          focalPoint: { x: 0.55, y: 0.5 },
        },
        {
          image: './images/species/crested-ibis/06-leg-band-monitoring.webp',
          alt: '恢复区浅水稻田中一只佩戴细小彩色脚环的朱鹮正常觅食，两名研究人员在远处用望远镜记录',
          title: '远距离读取脚环',
          caption:
            '脚环让研究者从远处记录生存与移动；画面不对应特定个体、放归批次或恢复成效。',
          focalPoint: { x: 0.62, y: 0.58 },
        },
      ],
    },
    sources: [
      ...CRESTED_IBIS_SOURCES,
      {
        title: 'GBIF: Nipponia nippon (Temminck, 1835) nomenclatural record',
        url: 'https://www.gbif.org/species/2480810',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: CRESTED_IBIS_CONTENT_DATE,
    updatedAt: CRESTED_IBIS_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
