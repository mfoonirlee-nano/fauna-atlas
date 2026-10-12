import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const GUMBOOT_CHITON_SOURCE_DATE = '2026-09-01' as const;

const GUMBOOT_CHITON_CONTENT_DATE = '2026-09-01' as const;

const GUMBOOT_CHITON_SOURCES = [
  {
    title: 'MolluscaBase / WoRMS: Cryptochiton stelleri (AphiaID 240776)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=240776',
    kind: 'taxonomy',
    accessedAt: GUMBOOT_CHITON_SOURCE_DATE,
  },
  {
    title: 'Stanford SeaNet: Polyplacophora and the Giant Pacific Chiton',
    url: 'https://seanet.stanford.edu/Polyplacophora',
    kind: 'general',
    accessedAt: GUMBOOT_CHITON_SOURCE_DATE,
  },
  {
    title: 'National Museum of Natural Science: Cryptochiton stelleri specimen',
    url: 'https://www.nmns.edu.tw/collect/catalog/detail/?id=32208',
    kind: 'general',
    accessedAt: GUMBOOT_CHITON_SOURCE_DATE,
  },
  {
    title: 'Alaska Species Ranking System 2006: Gumboot Chiton',
    url: 'https://www.adfg.alaska.gov/static-f/species/speciesinfo/_aknhp/Gumboot_Chiton.pdf',
    kind: 'ecology',
    accessedAt: GUMBOOT_CHITON_SOURCE_DATE,
  },
  {
    title: 'MARINe Taxon Profile: Cryptochiton stelleri',
    url: 'https://marine.ucsc.edu/target/cryptochiton/',
    kind: 'distribution',
    accessedAt: GUMBOOT_CHITON_SOURCE_DATE,
  },
  {
    title: 'Lord 2011: Larval development, settlement and metamorphosis',
    url: 'https://doi.org/10.1093/mollus/eyr004',
    kind: 'ecology',
    accessedAt: GUMBOOT_CHITON_SOURCE_DATE,
  },
  {
    title: 'Lord 2012: Growth and longevity using internal growth lines',
    url: 'https://doi.org/10.4002/040.055.0104',
    kind: 'ecology',
    accessedAt: GUMBOOT_CHITON_SOURCE_DATE,
  },
  {
    title: 'Weaver et al. 2010: Analysis of an ultra hard magnetic biomineral in chiton radular teeth',
    url: 'https://doi.org/10.1016/S1369-7021(10)70016-X',
    kind: 'ecology',
    accessedAt: GUMBOOT_CHITON_SOURCE_DATE,
  },
  {
    title: 'Nemoto et al. 2019: Molecular mechanism of radular tooth biomineralization',
    url: 'https://doi.org/10.1038/s41598-018-37839-2',
    kind: 'ecology',
    accessedAt: GUMBOOT_CHITON_SOURCE_DATE,
  },
  {
    title: 'Stegbauer et al. 2021: Persistent polyamorphism in the chiton tooth',
    url: 'https://doi.org/10.1073/pnas.2020160118',
    kind: 'ecology',
    accessedAt: GUMBOOT_CHITON_SOURCE_DATE,
  },
  {
    title: 'McIntire and Bourdeau 2020: Thermal limits of grazing performance and habitat preference',
    url: 'https://doi.org/10.3354/meps13477',
    kind: 'ecology',
    accessedAt: GUMBOOT_CHITON_SOURCE_DATE,
  },
  {
    title: 'Miner et al. 2015: Mass mortality among northeastern Pacific rocky-shore invertebrates',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4454560/',
    kind: 'conservation',
    accessedAt: GUMBOOT_CHITON_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List search: Cryptochiton stelleri',
    url: 'https://nrl.iucnredlist.org/search',
    kind: 'conservation',
    accessedAt: GUMBOOT_CHITON_SOURCE_DATE,
  },
  {
    title: 'Oregon Coast Aquarium: Gumboot Chiton',
    url: 'https://aquarium.org/animals/gumboot-chiton/',
    kind: 'conservation',
    accessedAt: GUMBOOT_CHITON_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-cryptochiton-stelleri',
    slug: 'gumboot-chiton',
    names: {
      zh: '橡胶靴石鳖',
      en: 'Gumboot Chiton',
      aliases: ['斯特勒氏隐石鳖', 'Giant Pacific Chiton'],
    },
    scientificName: 'Cryptochiton stelleri',
    taxonomy: animalTaxonomy(
      taxon('Mollusca', '软体动物门'),
      taxon('Polyplacophora', '多板纲'),
      taxon('Chitonida', '石鳖目'),
      taxon('Mopaliidae', '鬃毛石鳖科'),
      taxon('Cryptochiton', '隐石鳖属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['北美洲', '亚洲'],
      regions: [
        '阿拉斯加湾、白令海东缘与阿留申群岛',
        '加拿大不列颠哥伦比亚至美国加利福尼亚海峡群岛',
        '堪察加半岛、千岛群岛与北海道北部',
      ],
      countries: ['美国', '加拿大', '俄罗斯', '日本'],
      range:
        '环北太平洋分布。东岸自阿拉斯加和加拿大沿美国西岸南达加利福尼亚海峡群岛，西岸见于堪察加、千岛群岛和北海道北部。',
      center: { lat: 52, lng: -160 },
    },
    habitats: [
      {
        name: '北太平洋低潮带岩礁',
        realm: 'marine',
        isPrimary: true,
        description:
          '低潮线附近的岩面、潮池、浪沟和岩缝，常有红藻、珊瑚藻及其他大型海藻，个体偏向较受遮蔽或中低浪击位置。',
      },
      {
        name: '浅海潮下带岩礁与海藻林',
        realm: 'marine',
        description:
          '浅潮下带岩石底和岩沙交界也有记录，MARINe 资料记录可至约 60 米，但主要生活图景仍是有自然光的浅水岩礁。',
      },
      {
        name: '幼体隐蔽微生境',
        realm: 'marine',
        description:
          '俄勒冈样区的幼体常见于废弃海胆坑、岩洞或红藻下方；这是局地庇护关联，不是全物种的专性需求。',
      },
    ],
    measurements: {
      length: {
        max: 36,
        unit: 'cm',
        note: '最大报道体长；身体柔软且可伸缩，不代表普通成体长度。',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: [
        'Mazzaella、Cryptopleura 等红藻',
        'Ulva 等绿藻',
        '幼嫩的 Nereocystis、Saccharina 等褐藻',
        '变态后稚体的硅藻、蓝细菌与底栖微藻膜',
      ],
      description:
        '用持续更新、成熟主齿齿冠含磁铁矿的齿舌刮食岩面与大型海藻，以红藻为主，也取食绿藻和幼嫩褐藻。',
    },
    activity: [
      '主要在夜间爬行刮食海藻',
      '以宽阔肌足贴附岩面，在潮间带浪击中保持位置',
      '白天常停留在岩缝、海藻下或其他受遮蔽位置',
    ],
    tags: [
      '海洋',
      '潮间带',
      '底栖',
      '草食动物',
      '多板纲',
      '北太平洋',
      '磁铁矿齿舌',
      '广播产卵',
    ],
    summary:
      '石鳖生活在北太平洋岩岸，宽大的红褐色外套把八块背板藏在皮下。它用腹面的肌足贴住岩石，多在夜间刮食藻类，齿舌牙尖含有坚硬的磁铁矿。',
    description:
      '石鳖的成年身体可长得很大，厚实外套呈红褐色，八块相连的背板藏在外套下。它常在低潮带和浅海岩面活动，依靠宽大的足附着，并用持续更换的齿舌牙齿刮取红藻、绿藻和幼嫩褐藻。牙尖外层富含磁铁矿，内部的含铁材料与结构共同承担刮擦。生长环研究曾估计个体至少可活 40 年，但这不等于种群平均寿命。',
    storySections: [
      {
        key: 'hidden-armor',
        label: '隐甲',
        title: '八块背板藏在厚外套下',
        body: '石鳖通常以八枚重叠背板示人，橡胶靴石鳖却把这套甲片完全藏在宽大外套带下。正常成体背视图只见砖红至红褐色的粗糙表面和细小骨针；白色至淡蓝绿色背板只有在幼体、标本或科学剖视中可见。厚外套带没有抹去多板纲的基本结构，只改变了人眼能直接看到的部分。',
      },
      {
        key: 'algal-grazer',
        label: '夜食',
        title: '在低潮带刮食红藻',
        body: '它常在夜间离开岩缝和海藻遮蔽处，以宽阔肌足贴住岩面，用齿舌刮食海藻。红藻是常见食物，也会摄食绿藻和幼嫩褐藻。精确移动距离随地点和潮位改变，不能把局地标记数据当作固定速度。',
      },
      {
        key: 'iron-radula',
        label: '铁齿',
        title: '含铁牙齿承受岩面刮擦',
        body: '齿舌后端持续产生新齿，齿列向前移动时依次完成铁沉积和矿化，成熟主齿变成黑色。磁铁矿外层承担刮削磨损，铁磷酸盐核心和具有机械梯度的齿柄连接较软的齿舌。磁性矿物在这里是结构材料，没有证据表明它用来吸铁、放电或导航。',
      },
      {
        key: 'larval-transition',
        label: '变态',
        title: '从无甲担轮幼体到八板幼体',
        body: '约 12°C 的俄勒冈实验中，绿色卵约 46 小时后孵化为具顶纤毛束和原担轮的担轮幼体，此时没有背板。受精后约第 5 天出现七个背板前体并开始定居，附着珊瑚藻能诱发变态；第八枚背板随后形成。俄勒冈野外 7.6 至 12.6 毫米幼体可见八枚外露背板，外套带在成长中逐渐把它们覆盖。',
      },
      {
        key: 'long-life',
        label: '年轮',
        title: '背板记录至少四十年的生长',
        body: '研究者利用背板年生长带估龄，记录的最大年龄至少约 40 年。这个数字是已估最大年龄记录的下限，不是平均寿命。柔软身体会伸缩，单次体长也不能准确代表年龄。长寿与补充波动意味着，大型成体被集中采走后，局地恢复可能很慢。',
      },
      {
        key: 'uncertain-future',
        label: '监测',
        title: '局地风险明确，全球趋势仍待测量',
        body: 'IUCN 尚未完成本种全球评估。采集、岸线污染、油污、踩踏、异常藻华和升温都有局地证据或明确机制，但现有资料不能推出全球下降率。固定样点的数量与体型结构、死亡事件记录和分布边缘凭证，才是判断变化所需的基础。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1847 年正式命名的大型石鳖',
        body: 'Middendorff 在 1847 年正式命名这一物种，现用学名为 Cryptochiton stelleri。英语常用名为 gumboot chiton。与背板明显外露的许多石鳖相比，本种的八块背板藏在外套下；这一结构也让它的外观格外容易辨认。',
      },
    ],
    keyFacts: [
      '成体有八枚背板，但全部被厚实的宽大外套带覆盖，正常背视图看不见甲片。',
      '最大报道体长约 36 厘米，是现生体型最大的石鳖。',
      '成熟主齿齿冠由磁铁矿外层和铁磷酸盐核心构成耐磨复合结构。',
      '齿舌后端持续产生新齿，齿列向前移动时逐步矿化。',
      '绿色卵孵化为不摄食的担轮幼体，初孵阶段没有背板。',
      '约 12°C 的俄勒冈实验中，幼体约第 5 天出现七个背板前体并可受珊瑚藻诱导变态。',
      '野外毫米级幼体已经具有八枚外露背板，外套带随成长逐渐覆盖它们。',
      '背板年生长带记录的已估最大年龄至少约 40 年，但这不是平均寿命。',
      'IUCN 尚未评估本种，全球种群趋势未知。',
    ],
    threats: [
      '局地食用或采集大型成体；长寿和补充波动会减慢恢复',
      '低潮带踩踏、翻石与岸线开发造成的生境干扰',
      '污水和溢油降低岩礁与海藻生境质量',
      '有害藻华等异常事件可能造成区域性大量死亡，具体原因需逐次确认',
      '海洋变暖和热浪可能先降低取食表现，但尚无全球效应量',
    ],
    conservationActions: [
      '在固定岩岸样点持续记录数量、体长结构、补充和异常死亡',
      '调查采集量，在高利用地点实行社区协作的限采或保护措施',
      '保护低潮带与浅潮下带岩礁，减少踩踏、污染和油污风险',
      '用照片、馆藏或遗传凭证复核分布边缘记录',
      '开展跨区域长期监测后再判断全球种群趋势',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'plate-count',
        label: '背板数量',
        value: '8',
        unit: '枚',
        note: '正常成体全部被宽大外套带覆盖；幼体可见。',
      },
      {
        key: 'maximum-length',
        label: '最大报道体长',
        value: '36',
        unit: '厘米',
        note: '柔软身体的直线长度受姿态影响，不代表普通成体长度。',
      },
      {
        key: 'maximum-estimated-age',
        label: '已估最大年龄',
        value: '≥40',
        unit: '年',
        note: '依据背板年生长带；这是已估最大年龄记录的下限，不是平均寿命。',
      },
      {
        key: 'radula-mineral',
        label: '成熟主齿齿冠',
        value: '磁铁矿',
        note: '外层与铁磷酸盐核心共同形成耐磨复合结构。',
      },
    ],
    media: {
      image:
        './images/species/gumboot-chiton/01-north-pacific-rocky-reef-adult-portrait.webp',
      alt: '北太平洋浅海岩礁上一只完整的砖红色橡胶靴石鳖，粗糙宽大的外套带没有露出背板',
      focalPoint: { x: 0.68, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/gumboot-chiton/02-juvenile-eight-exposed-valves.webp',
          alt: '粉色珊瑚藻岩面上一只黄色幼体，中央恰有八枚外露背板，周围是带红色骨针簇的宽外套带',
          title: '八枚背板仍外露的幼体',
          caption:
            '俄勒冈野外毫米级幼体可见八枚背板，外套带随后继续覆盖；AI 图不能确认物种、体长、日龄、地点、覆盖速度或海胆坑依赖。',
          focalPoint: { x: 0.5, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/gumboot-chiton/03-adult-concealed-valves-girdle-macro.webp',
          alt: '砖红与橙褐交错的成体外套带微距，表面密布短刺状纹理、疣状起伏和组织褶皱，没有露出背板',
          title: '完全隐甲的成体外套带',
          caption:
            '成体背板完全被外套带覆盖；画面不能证明内部背板数量、组织厚度、骨针成分或个体年龄。',
          focalPoint: { x: 0.55, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/gumboot-chiton/04-ventral-foot-and-gill-grooves.webp',
          alt: '非血腥腹面重建中，黄色宽阔肌足位于中央，两侧外套沟内排列鳃列，外围是厚实外套带',
          title: '肌足与两侧鳃沟',
          caption:
            '腹面结构重建显示肌足和两侧鳃沟；静态画面不能确定鳃数、水流、附着力或常见姿态。',
          focalPoint: { x: 0.5, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/gumboot-chiton/05-radula-tooth-mineralization-macro.webp',
          alt: '显微重建中的齿舌带由浅色新齿过渡到棕色发育齿与黑色成熟三尖主齿',
          title: '不断更新的磁铁矿齿带',
          caption:
            '颜色梯度表现齿列成熟顺序；AI 像素不能验证磁铁矿和铁磷酸盐的化学成分、硬度、齿列数或机械梯度。',
          focalPoint: { x: 0.52, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/gumboot-chiton/06-newly-hatched-trochophore-microscopy.webp',
          alt: '清洁海水显微视野中一只绿色卵黄性担轮幼体，具有顶纤毛束和一圈原担轮，没有背板、壳或足',
          title: '初孵无甲担轮幼体',
          caption:
            '约 12°C 的俄勒冈实验中，初孵担轮幼体约 46 小时孵化，以卵黄供能且没有背板；这一局地实验不能证明全分布区都有固定时序。',
          focalPoint: { x: 0.5, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...GUMBOOT_CHITON_SOURCES,
      {
        title: 'GBIF: Cryptochiton stelleri (Middendorff, 1847) nomenclatural record',
        url: 'https://www.gbif.org/species/5193725',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: GUMBOOT_CHITON_CONTENT_DATE,
    updatedAt: GUMBOOT_CHITON_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
