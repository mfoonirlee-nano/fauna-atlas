import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const ROSY_FEATHER_STAR_SOURCE_DATE = '2026-09-02' as const;

const ROSY_FEATHER_STAR_CONTENT_DATE = '2026-09-02' as const;

const ROSY_FEATHER_STAR_SOURCES = [
  {
    title: 'World List of Crinoidea / WoRMS: Antedon bifida (AphiaID 124201)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=124201',
    kind: 'taxonomy',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS: complete Aphia classification for Antedon bifida',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/124201',
    kind: 'taxonomy',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS: vernacular names for Antedon bifida',
    url: 'https://www.marinespecies.org/rest/AphiaVernacularsByAphiaID/124201',
    kind: 'general',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS: Antedon bifida bifida (AphiaID 714189)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=714189',
    kind: 'distribution',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS: Antedon bifida moroccana (AphiaID 714190)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=714190',
    kind: 'distribution',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS: Antedon duebenii (AphiaID 124203)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=124203',
    kind: 'taxonomy',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Micael et al. 2019: The echinoderm fauna of the Azores',
    url: 'https://doi.org/10.11646/zootaxa.4639.1.1',
    kind: 'distribution',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'De Domenico et al. 2009: Echinoderm fauna of the Messina Strait',
    url: 'https://doi.org/10.1080/11250000802086011',
    kind: 'distribution',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Meyer et al. 1978: Crinoids from the western Caribbean and Gulf of Mexico',
    url: 'https://nsuworks.nova.edu/cgi/viewcontent.cgi?article=1127&context=occ_facarticles',
    kind: 'distribution',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'MarLIN: Rosy feather star species and sensitivity review',
    url: 'https://www.marlin.ac.uk/species/detail/1521',
    kind: 'general',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'La Touche 1978: Feeding behaviour of the featherstar Antedon bifida',
    url: 'https://doi.org/10.1017/S0025315400056836',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Lahaye & Jangoux 1985: Functional morphology of podia and ambulacral grooves',
    url: 'https://doi.org/10.1007/BF00397517',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Nichols 1960: Histology and activities of the tube-feet of Antedon bifida',
    url: 'https://doi.org/10.1242/jcs.s3-101.54.105',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Hunt 1925: Food of the bottom fauna of the Plymouth fishing grounds',
    url: 'https://doi.org/10.1017/S0025315400008079',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Moore 1924: Nervous mechanism of coordination in Antedon swimming',
    url: 'https://doi.org/10.1085/jgp.6.3.281',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Nichols 1994: Reproductive seasonality in Antedon bifida',
    url: 'https://doi.org/10.1098/rstb.1994.0015',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Nichols 1996: Evidence for predation on Antedon bifida',
    url: 'https://archimer.ifremer.fr/doc/00094/20482/18152.pdf',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Eeckhaut & Jangoux 1993: Myzostoma cirriferum life cycle and host infestation',
    url: 'https://doi.org/10.3354/dao015207',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'EUNIS: Antedon bifida threat and conservation status',
    url: 'https://eunis.eea.europa.eu/species/44201',
    kind: 'conservation',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: '陈慕雁等 2025：棘皮动物光感受系统研究进展',
    url: 'https://doi.org/10.11964/jfc.20241014721',
    kind: 'general',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-antedon-bifida',
    slug: 'rosy-feather-star',
    names: {
      zh: '海羊齿',
      en: 'Rosy Feather-star',
      aliases: ['Rosy Feather Star', 'Rosy Featherstar'],
    },
    scientificName: 'Antedon bifida',
    taxonomy: animalTaxonomy(
      taxon('Echinodermata', '棘皮动物门'),
      taxon('Crinoidea', '海百合纲'),
      taxon('Comatulida', '羽星目'),
      taxon('Antedonidae', '海羊齿科'),
      taxon('Antedon', '海羊齿属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['欧洲', '非洲'],
      regions: [
        '东北大西洋：设得兰与不列颠群岛至伊比利亚半岛大西洋岸',
        '马卡罗尼西亚：亚速尔、马德拉与加那利群岛',
        '东北大西洋非洲岸与西部至中部地中海局部海域',
      ],
      countries: [
        '英国',
        '爱尔兰',
        '法国',
        '西班牙',
        '葡萄牙',
        '摩洛哥',
        '塞拉利昂',
        '利比里亚',
        '意大利',
      ],
      range:
        '名义亚种从设得兰和不列颠群岛向南分布到葡萄牙；南方亚种见于马卡罗尼西亚、摩洛哥至西非及西部至中部地中海局部海域。加勒比和委内瑞拉的旧记录涉及历史误鉴，尚不能据此确认分布。',
      center: { lat: 40, lng: -10 },
    },
    habitats: [
      {
        name: '有水流的浅海岩礁与沟槽',
        realm: 'marine',
        isPrimary: true,
        description:
          '常以卷枝抓住岩壁、沟槽、巨砾、海藻或其他底栖生物，在水流输送悬浮颗粒的位置展开羽状腕；英爱资料记录 15 至 40 米为高丰度水深带。',
      },
      {
        name: '避浪海湾、海峡与海湖硬底',
        realm: 'marine',
        description:
          '可生活在遮蔽或中等暴露海岸的基岩、大型巨砾和大型藻类上；爱尔兰野外研究记录了定向流、波浪往复流与多向流中的摄食。',
      },
      {
        name: '较深陆架底栖环境',
        realm: 'marine',
        description:
          '名义亚种记录可到约 450 至 457 米；这个范围端点不代表普通个体的典型水深、固定底质或主动下潜能力。',
      },
    ],
    measurements: {
      length: {
        min: 5,
        max: 10,
        unit: 'cm',
        note: '单只腕的报道长度，不是中央盘直径、全展跨度或全身总长。',
      },
    },
    diet: {
      types: ['filter-feeder', 'omnivore'],
      foods: [
        '有机碎屑与其他悬浮颗粒',
        '硅藻、甲藻、颗石藻与硅鞭毛虫',
        '砂壳纤毛虫',
        '小型桡足类与甲壳类无节幼体',
      ],
      description:
        '羽枝上的长、中、短三联管足用黏液直接截住悬浮颗粒，短管足协助形成食团；食物沟内的纤毛再把食团送到口。显微研究没有发现悬在腕间的独立黏液网。',
    },
    activity: [
      '用反口面的分节卷枝抓住岩石、巨砾、海藻和其他底栖生物',
      '按水流方向弯曲和扭转腕及羽枝，让摄食面持续接触悬浮颗粒',
      '用卷枝爬行，也能让成对腕交替屈伸完成短距离游泳',
      '腕和羽枝受损后可以再生，英吉利海峡研究记录到频繁的局部损伤',
      '雌体可把卵和早期胚胎留在生殖羽枝外侧的黏液层中',
    ],
    tags: [
      '海洋',
      '底栖',
      '棘皮动物',
      '海百合纲',
      '羽状腕',
      '悬浮滤食',
      '卷枝抓附',
      '短距离游泳',
      '腕部育胚',
      '东北大西洋',
      'IUCN未评估',
    ],
    summary:
      '海羊齿生活在东北大西洋等海域有水流的岩礁上。十只羽状腕展开接取悬浮食物，盘底短卷枝抓住岩石或海藻，受到扰动时还能拍腕短游。',
    description:
      '海羊齿属于海百合纲，成体没有永久长柄。五条初生辐射各分成两腕，形成通常可见的十只羽状腕；腕两侧的细小羽枝和管足截住颗粒，食物沟中的纤毛再把食团送向中央的口。爱尔兰研究发现，它会随水流调整腕的姿态。英吉利海峡种群还会把早期胚胎留在羽枝外侧。现用分类包含名义亚种和南方亚种，部分加勒比旧记录则涉及误鉴。',
    storySections: [
      {
        key: 'five-rays-ten-arms',
        label: '身体',
        title: '五条辐射在盘缘展开成十只腕',
        body: '海羊齿的中央盘很小，五条初生辐射离开盘缘后各分成两只腕，形成典型的十腕轮廓。腕两侧密排羽枝，构成可以弯曲和扭转的摄食面。口与五条分叉的食物沟朝上，成体盘底只保留一簇短卷枝。',
      },
      {
        key: 'three-tube-feet',
        label: '捕捉',
        title: '三种管足共同收集颗粒',
        body: '羽枝食物沟两侧反复排列长、中、短三种管足。长管足和中管足用表面黏液直接截住悬浮颗粒，遇到较大颗粒还会局部卷曲；短管足划动并协助把颗粒包成食团。显微研究没有发现独立黏液网或黏液线。',
      },
      {
        key: 'ciliary-food-conveyor',
        label: '输送',
        title: '食物沟把每根羽枝接到中央的口',
        body: '管足把食团擦入细窄的食物沟，沟内纤毛沿羽枝和腕把它送向盘中央。胃含物研究找到碎屑、硅藻、甲藻、砂壳纤毛虫和小型甲壳类。这套输送通道会接收植物、动物和碎屑颗粒。',
      },
      {
        key: 'current-shaped-fan',
        label: '水流',
        title: '羽扇会顺着水流改变形状',
        body: '海羊齿常待在有水流的岩壁和沟槽，让海水送来食物。爱尔兰五处野外站点的个体会弯曲、扭转或重新排列腕和羽枝，应对定向流、波浪往复流和多向流。研究者在这些站点没有观察到固定的昼夜或潮汐摄食节律。',
      },
      {
        key: 'cirri-crawl-swim',
        label: '移动',
        title: '卷枝抓住海床，腕也能带身体游开',
        body: '盘底短卷枝像一簇活动抓钩，可以扣住岩石、海藻和其他底栖生物，也能帮助爬行。受到刺激时，同一辐射的一对腕交替屈伸，十只腕协同拍水，让身体短距离离开原附着点。历史实验没有提供野外速度或固定游程。',
      },
      {
        key: 'external-brood-and-pentacrinoid',
        label: '繁殖',
        title: '幼体先附着，再脱离短柄',
        body: '海羊齿雌雄异体。英吉利海峡种群在五月至七月把卵和早期胚胎留在雌体生殖羽枝外侧，雌体收拢腕保护胚胎。幼体离开后短暂游泳，再附着并经历带短柄的五角海百合幼体阶段（pentacrinoid），随后脱离柄。这个季节记录只适用于相应种群。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1777 年正式命名的无柄海百合',
        body: 'Pennant 在 1777 年正式命名本种，现用学名为 Antedon bifida。中文“海羊齿”和英文 feather star 都对应它展开时羽毛般的腕。成年个体虽没有永久长柄，幼体却经历带短柄的附着阶段；观察这一发育过程有助于理解它与其他海百合的关系。',
      },
    ],
    keyFacts: [
      'WoRMS 接受名为 Antedon bifida (Pennant, 1777)，AphiaID 124201。',
      '“海羊齿”也可泛指海羊齿属，Antedon bifida 用于明确本种。',
      '海羊齿属于海百合纲、羽星目、海羊齿科和海羊齿属。',
      '完整成体通常有十只羽状腕；五条初生辐射在盘缘各分成两腕。',
      '机构识别资料给出单腕约 5 至 10 厘米，这个数值不能当作中央盘直径或全展跨度。',
      '成体没有永久长柄，盘底短而分节的卷枝负责抓握和爬行。',
      '羽枝管足按长、中、短三只成组，黏液直接捕获颗粒；显微研究没有发现独立黏液网。',
      '食物沟纤毛把食团送到朝上的中央口。',
      '胃含物包括碎屑、微藻、原生生物和小型甲壳类残骸。',
      '名义亚种从设得兰和不列颠群岛向南到葡萄牙；南方亚种延伸到马卡罗尼西亚、西非和西部至中部地中海局部海域。',
      '英爱资料记录 15 至 40 米为高丰度水深带，名义亚种记录可到约 450 至 457 米。',
      '爱尔兰五处站点的个体能适应多种水流，站点观察没有显示固定昼夜或潮汐摄食节律。',
      '成对腕交替屈伸可完成短距离游泳，历史实验没有提供野外速度。',
      '英吉利海峡种群在五月至七月把卵和早期胚胎留在雌体羽枝外侧。',
      '共生蠕虫 Myzostoma cirriferum 的幼体可借摄食通道登上海羊齿；现有研究没有证明它会杀死宿主。',
      'IUCN 尚未评估本种；NE 只记录评估空缺，全球趋势仍未知。',
    ],
    threats: [
      '底拖、扇贝拖捞、疏浚和其他底接触作业会折断腕、压伤个体并扰动其附着位置',
      '岩石、巨砾、大型藻类或其他硬质附着基质被移除时，附着其上的海羊齿也会一同消失',
      '厚层沉积物覆盖会堵塞羽枝摄食面和体表交换区域，并阻碍卷枝重新抓住硬底',
      '工程改变近底水流后，过弱水流会减少悬浮食物输送，过强水流会压缩展开腕的摄食窗口',
      '亚种差异、历史异名和加勒比误鉴会污染范围与趋势数据，削弱风险评估',
    ],
    conservationActions: [
      '在岩礁、沟槽和大型藻类生境布设带尺度的固定摄影或视频样带，重复记录个体数、腕损伤与附着位置',
      '同步测量近底流向、流速、悬浮颗粒、沉积覆盖、温盐、溶氧和底质，解释影像中的数量与姿态变化',
      '在底接触渔业、疏浚和海床工程前绘制海羊齿聚集区，设置扰动前后对照并减少对硬底的接触',
      '监测沉积覆盖与水动力改变后的摄食面堵塞、个体位移和重新附着，按恢复结果调整工程措施',
      '为马卡罗尼西亚、西非、地中海和疑似加勒比记录保存整只凭证、背腹面照片及组织样本，复核亚种和误鉴',
      '汇总全范围数量、长期趋势、压力暴露和亚种边界后，开展正式全球灭绝风险评估',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'typical-arm-count',
        label: '典型腕数',
        value: '10',
        unit: '只',
        note: '五条初生辐射各在基部分成两腕；受伤、再生和少数发育差异会改变眼前可见数量。',
      },
      {
        key: 'reported-arm-length',
        label: '报道腕长',
        value: '5–10',
        unit: '厘米',
        note: '单只腕长度，不是全展直径、中央盘直径或全物种平均值。',
      },
      {
        key: 'peak-depth-band',
        label: '高丰度水深',
        value: '15–40',
        unit: '米',
        note: '英爱资料中的高丰度带；名义亚种记录可到约 450 至 457 米。',
      },
      {
        key: 'tube-feet-per-unit',
        label: '每组管足',
        value: '3',
        unit: '只',
        note: '长、中、短三种管足组成一个重复的摄食单元。',
      },
    ],
    media: {
      image:
        './images/species/rosy-feather-star/01-current-swept-rocky-reef-adult-cover.webp',
      alt: '东北大西洋冷水岩壁右侧，一只无柄海羊齿以短卷枝抓附岩面，十只红白相间的羽状腕完整展开',
      focalPoint: { x: 0.7, y: 0.54 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/rosy-feather-star/02-ten-pinnate-arms-and-cirri-diagnostic.webp',
          alt: '斜俯视一只贴在巨砾上的海羊齿，十只带双列羽枝的腕围绕小中央盘展开，盘底露出数根短卷枝',
          title: '十只羽状腕与盘底卷枝',
          caption:
            '形态重建显示十只羽状腕、小中央盘和盘底短卷枝；画面不能给出卷枝确切数量、羽枝节数、体尺、个体身份或与北方海羊齿的确定鉴别。',
          focalPoint: { x: 0.5, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/rosy-feather-star/03-raised-arm-suspension-feeding.webp',
          alt: '一只海羊齿抓附岩面，把多只密布羽枝的腕抬进水流形成开放羽扇，水中散布少量悬浮颗粒',
          title: '羽枝迎流截取悬浮颗粒',
          caption:
            '滤食重建显示腕和羽枝在水流中展开，并保留少量悬浮颗粒；单张图不能测量流向、流速、粒径、捕获率、摄食节律或单个颗粒的输送路径。',
          focalPoint: { x: 0.53, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/rosy-feather-star/04-short-distance-arm-swimming.webp',
          alt: '一只十腕海羊齿悬在岩砾海床上方，羽状腕朝不同方向弯曲拍水，盘底卷枝离开底面',
          title: '离开附着点的短距离游泳',
          caption:
            '运动重建显示海羊齿与海床之间的水隙及十只弯曲腕；静态画面不能确定完整划水序列、推进腕分工、速度、距离、持续时间或起游原因。',
          focalPoint: { x: 0.53, y: 0.49 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/rosy-feather-star/05-pinnule-brooded-embryos.webp',
          alt: '海羊齿腕基部的微距重建，几根生殖羽枝外侧附着小群浅琥珀色早期胚胎，周围腕向内收拢',
          title: '生殖羽枝外侧的胚胎群',
          caption:
            '繁殖重建把早期胚胎置于近腕基部的生殖羽枝外侧；画面不能确定实际窝卵数、发育阶段、受精时间、产卵月份、胚胎尺寸或附着时长。',
          focalPoint: { x: 0.49, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/rosy-feather-star/06-rocky-reef-video-transect-monitoring.webp',
          alt: '一台小型观察级 ROV 沿无读数样带拍摄东北大西洋岩礁，多只海羊齿分散抓附在巨砾表面，设备没有接触动物',
          title: '岩礁上的非接触视频样带',
          caption:
            '调查重建显示 ROV 沿岩礁样带记录海羊齿；单次影像不能确认每只远处动物的种级身份，也不能给出密度、占据面积、全范围总量、长期趋势或生境状况。',
          focalPoint: { x: 0.57, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...ROSY_FEATHER_STAR_SOURCES,
      {
        title: 'GBIF: Antedon bifida (Pennant, 1777) nomenclatural record',
        url: 'https://www.gbif.org/species/5187721',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: ROSY_FEATHER_STAR_CONTENT_DATE,
    updatedAt: ROSY_FEATHER_STAR_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
