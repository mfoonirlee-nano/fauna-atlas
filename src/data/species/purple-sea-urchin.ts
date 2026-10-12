import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const PURPLE_SEA_URCHIN_SOURCE_DATE = '2026-09-01' as const;

const PURPLE_SEA_URCHIN_CONTENT_DATE = '2026-09-01' as const;

const PURPLE_SEA_URCHIN_SOURCES = [
  {
    title: 'World Echinoidea Database / WoRMS: Strongylocentrotus purpuratus (AphiaID 240747)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=240747',
    kind: 'taxonomy',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'WoRMS: complete Aphia classification for Strongylocentrotus purpuratus',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/240747',
    kind: 'taxonomy',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Ebert 2010: Demographic patterns across the latitudinal range',
    url: 'https://doi.org/10.3354/meps08547',
    kind: 'distribution',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Fisheries and Oceans Canada 1999: Purple Sea Urchin biology and assessment needs',
    url: 'https://publications.gc.ca/collections/collection_2015/mpo-dfo/Fs70-1-1999-163-eng.pdf',
    kind: 'distribution',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'MARINe: Strongylocentrotus purpuratus monitoring profile',
    url: 'https://marine.ucsc.edu/target/strongylocentrotus/',
    kind: 'general',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Sea Urchin Genome Sequencing Consortium 2006: The sea urchin genome',
    url: 'https://doi.org/10.1126/science.1133609',
    kind: 'general',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Burke et al. 2006: A genomic view of the sea urchin nervous system',
    url: 'https://doi.org/10.1016/j.ydbio.2006.08.007',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Narvaez et al. 2024: Purple Sea Urchin tube-foot plasticity',
    url: 'https://doi.org/10.1093/iob/obae022',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Russell 1987: Life-history traits and resource allocation',
    url: 'https://doi.org/10.1016/0022-0981(87)90085-2',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Smith & Garcia 2021: Morphological traits and resource availability',
    url: 'https://doi.org/10.7717/peerj.11352',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Yorke, Page & Miller 2019: Sea urchins mediate kelp-detritus availability',
    url: 'https://doi.org/10.1098/rspb.2019.0846',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Rogers-Bennett & Catton 2019: Heatwave and multiple stressors in bull-kelp forests',
    url: 'https://doi.org/10.1038/s41598-019-51114-y',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Heyland & Hodin 2014: Late larval development and juvenile rudiment staging',
    url: 'https://doi.org/10.1186/1471-213X-14-22',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Bodnar et al. 2016: Tissue regeneration across sea urchin lifespans',
    url: 'https://doi.org/10.1111/acel.12487',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Kelly, Padilla-Gamiño & Hofmann 2013: Variation in acidification response',
    url: 'https://doi.org/10.1111/gcb.12251',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'NOAA National Marine Sanctuaries 2026: Sea urchins and ecosystem monitoring',
    url: 'https://sanctuaries.noaa.gov/news/2026/restoring-balance.html',
    kind: 'conservation',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List search: Strongylocentrotus purpuratus',
    url: 'https://nrl.iucnredlist.org/search',
    kind: 'conservation',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List citation information: version 2026-1',
    url: 'https://nrl.iucnredlist.org/about/citationinfo',
    kind: 'conservation',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-strongylocentrotus-purpuratus',
    slug: 'purple-sea-urchin',
    names: {
      zh: '紫海胆',
      en: 'Purple Sea Urchin',
      aliases: ['加州紫海胆', 'California Purple Sea Urchin'],
    },
    scientificName: 'Strongylocentrotus purpuratus',
    taxonomy: animalTaxonomy(
      taxon('Echinodermata', '棘皮动物门'),
      taxon('Echinoidea', '海胆纲'),
      taxon('Camarodonta', '拱齿目'),
      taxon('Strongylocentrotidae', '球海胆科'),
      taxon('Strongylocentrotus', '球海胆属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['北美洲'],
      regions: [
        '阿拉斯加东南部 Torch Bay 与不列颠哥伦比亚沿岸',
        '华盛顿州、俄勒冈州与加利福尼亚州太平洋岸',
        '下加利福尼亚半岛北部至 Cedros Island',
      ],
      countries: ['加拿大', '美国', '墨西哥'],
      range:
        '历史资料把海域范围概括为北美太平洋岸的阿拉斯加东南部 Torch Bay 至墨西哥 Cedros Island；潮间带可靠记录向南至少到 Punta San Carlos。北端个体以潮下带为主，各地点的密度、招募和最大尺寸差异很大，这些端点不表示沿岸连续分布或当前种群边界。',
      center: { lat: 39, lng: -124 },
    },
    habitats: [
      {
        name: '浪击岩岸低潮带与潮池',
        realm: 'marine',
        isPrimary: true,
        description:
          '常见于暴露岩岸的低潮带、潮池、沟槽和岩缝。紫海胆用管足黏附岩面，也会把身体压入凹穴，降低浪涌和退潮暴露带来的位移风险。',
      },
      {
        name: '浅海海带林与岩礁',
        realm: 'marine',
        description:
          '潮下岩礁上的海带林提供漂流藻片和隐蔽空间。资料把本种记录到约 160 米，但多数生态研究来自潮间带和浅海，160 米不能当作常见栖息深度。',
      },
      {
        name: '海胆荒地与壳状藻岩面',
        realm: 'marine',
        description:
          '在直立大型藻稀少的开阔岩面，本种可依靠壳状藻等低质量食物维持。荒地个体常有较低的性腺指数和相对较长的咀嚼器，但地点与形成时间会改变这一关系。',
      },
    ],
    measurements: {
      length: {
        typical: 5,
        max: 10.4,
        unit: 'cm',
        note: '硬壳（test）最大直径，不含棘。常见值约 50 毫米，已记录最大值 104 毫米；`length` 字段为适配现有 schema 存放直径，不代表头体长，也不表示成体通常覆盖 5—10.4 厘米的连续范围。',
      },
    },
    diet: {
      types: ['herbivore', 'detritivore'],
      foods: ['漂流巨藻和其他大型藻碎片', '岩面直立褐藻、红藻与绿藻', '壳状藻和附着微藻'],
      description:
        '紫海胆先用棘和管足截住漂流藻片，再把食物传向口面；口内亚里士多德提灯的五枚牙齿切取藻体并刮食岩面。漂流藻减少且密度升高时，个体会离开缝隙主动啃食直立海带和低矮藻类。食物供应、捕食者、热浪与海带恢复共同决定海带林是否转成海胆荒地。',
    },
    activity: [
      '用管足的可逆黏附和棘的支撑在浪击岩面保持位置并缓慢移动',
      '用管足与棘截取漂流藻片，把食物逐步传到位于口面的咀嚼器',
      '食物充足时多在岩缝和凹穴周围取食漂流藻，漂流藻不足时可转为开阔岩面主动刮食',
      '雌雄异体但外表相似，成体把精子或卵释放进海水完成受精',
      '浮游长腕幼体摄食并形成体内幼体原基，达到变态能力后定居为五辐幼体',
    ],
    tags: [
      '海洋',
      '北美太平洋岸',
      '岩岸潮间带',
      '海带林',
      '棘皮动物',
      '海胆纲',
      '藻食性',
      '亚里士多德提灯',
      '广播产卵',
      '模式生物',
    ],
    summary:
      '紫海胆分布在北美太平洋岩岸，用管足黏住礁石，并用五枚牙齿刮食藻类。它常接取漂流藻片，也会在食物不足时离开岩缝主动取食。',
    description:
      '紫海胆的短紫棘之间伸出许多管足，帮助它附着、移动和搬运食物。口位于贴近海床的一侧，内部的复杂咀嚼器称为“亚里士多德提灯”，有五枚持续生长的牙齿。它是海带林的正常草食成员；在部分地区，热浪、捕食者减少和藻类供应变化共同促成密集海胆种群与海带衰退。成体为五辐对称，浮游幼体却呈两侧对称。',
    storySections: [
      {
        key: 'living-test-and-fivefold-body',
        label: '身体',
        title: '表皮下的五辐内骨骼',
        body: '许多碳酸钙骨板互相嵌合，构成低矮圆拱状硬壳；活表皮覆盖骨板和棘，所以这副“壳”属于内骨骼。成体围绕从口到身体上侧的轴线形成五辐结构，口位于贴近岩面的下侧，肛门位于反口面。成年个体多呈深紫色，幼小海胆有时带浅绿色。',
      },
      {
        key: 'spines-feet-and-pedicellariae',
        label: '附肢',
        title: '棘负责支撑，管足负责黏附',
        body: '紫海胆用肌肉控制棘基部的球窝关节，让短棘参与支撑和转向。水管系统驱动管足从五组步带孔伸出，末端黏附盘可抓住岩面或食物。棘间还分布微小叉棘，用于清理体表和处理接触物；这些结构也带有感觉与运动神经。',
      },
      {
        key: 'five-toothed-lantern',
        label: '摄食',
        title: '五枚牙齿从口面刮过岩石',
        body: '口内复杂的亚里士多德提灯围绕五枚持续生长的方解石牙齿组织肌肉和骨片。紫海胆用牙尖切断柔软藻体，也会刮取贴在岩面的壳状藻与微藻。蒙特雷湾研究发现，荒地个体的提灯相对壳径更长、性腺指数更低，说明它们会在食物不足时调整资源分配；这一结果来自特定地点，不能推广成固定形态。',
      },
      {
        key: 'kelp-forest-barren-mosaic',
        label: '生态',
        title: '同一片岩礁可在海带林与荒地之间转换',
        body: '海带林中的紫海胆常躲在缝隙中截取漂流藻。漂流食物减少、海胆密度升高时，一部分个体会走上开阔岩面啃食活海带。北加利福尼亚 2014 年后的转换同时伴随海洋热浪、海星捕食者衰退和海带受损。这些因素共同影响海带林的变化。',
      },
      {
        key: 'bilateral-pluteus-to-pentaradial-juvenile',
        label: '发育',
        title: '幼体体内先形成幼海胆的原基',
        body: '精卵在海水中结合后，胚胎形成能摄食的 pluteus 长腕幼体。幼体用纤毛带游动和取食，细长腕由方解石骨杆支撑；随后在身体一侧建立幼体原基。实验培养中的浮游期约 1 至 3 个月，受温度、食物和定居线索影响。变态时幼体原基翻出，长腕组织被重塑为底栖幼海胆。',
      },
      {
        key: 'monitoring-without-global-status',
        label: '监测',
        title: '固定样方追踪海胆与海带变化',
        body: '研究者在固定岩礁重复记录海胆数量、壳径分布、藻类覆盖和捕食者，并把结果与温度、浪况和海带冠层配对。增长模型把最大预期寿命估到 50 年以上，但没有验证某只个体的已知年龄上限。IUCN 2026-1 精确检索未见本种评估；局地暴增、荒地存活和某处下降都不能替代全分布区风险评估。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1857 年命名的太平洋海胆',
        body: 'Stimpson 在 1857 年正式命名紫海胆，现用学名为 Strongylocentrotus purpuratus。鲜紫至深紫的成年短棘是常见识别特征，但颜色仍需结合产地和结构判断。它后来成为发育生物学的研究动物；浮游幼体从两侧对称转变为五辐幼海胆的过程，尤其适合研究身体结构如何形成。',
      },
    ],
    keyFacts: [
      'WoRMS 接受名为 Strongylocentrotus purpuratus (Stimpson, 1857)，AphiaID 240747。',
      '紫海胆属于海胆纲、拱齿目、球海胆科和球海胆属；旧资料也使用 Echinoida 等历史分类名称。',
      '“紫海胆”也可指其他紫色海胆，检索本种资料时宜核对 Strongylocentrotus purpuratus。',
      '硬壳常见直径约 50 毫米，最大记录 104 毫米；这两个值都不包括棘。',
      '成年棘多呈鲜紫至深紫色，棘长很少超过 25 毫米，通常比近缘红海胆短。',
      '硬壳、棘、管足和叉棘都覆盖活组织，活体骨骼表面有表皮。',
      '亚里士多德提灯包含五枚牙齿；画面看到的牙尖只是整个咀嚼器的一小部分。',
      '管足参与黏附、运动、搬运食物和感知，棘也能支撑身体并参与移动。',
      '本种从阿拉斯加东南部沿北美太平洋岸分布到下加利福尼亚；北端主要见于潮下带。',
      'pluteus 长腕幼体呈两侧对称，体内幼体原基在变态后形成五辐幼海胆。',
      '50 年以上寿命来自生长和存活模型估计，尚未由已知年龄的个体验证。',
      'IUCN Red List 2026-1 未检出本种全球评估，NE 不表示无危，全球种群趋势仍未知。',
    ],
    threats: [
      '极端高温、退潮暴露和强浪事件可造成局地潮间带死亡，影响大小随纬度、微地形和季节改变',
      '海洋变暖和酸化会改变幼体发育、钙化与不同种群的表现；实验结果存在种群差异，尚不能换算成全球下降率',
      '海带林衰退会减少高质量漂流藻，荒地个体虽可长期存活，却常降低性腺投入并改变觅食形态',
      '局地清除、采捕或礁区工程若缺少基线与对照，可能改变海胆、海带、捕食者关系，也难以判断恢复效果',
      '跨阿拉斯加至下加利福尼亚的可比数量、招募和长期趋势资料不足，当前无法判断全球灭绝风险',
    ],
    conservationActions: [
      '在固定样方重复记录海胆密度、壳径频率、藻类覆盖、捕食者和温度，保留原始影像与站位信息',
      '把海洋热浪、水质、海带补充和捕食者恢复纳入同一评估，避免把荒地治理简化为单一物种清除',
      '对海胆移除、海带移植或捕食者恢复设置对照区和停止条件，跟踪海胆回补、海带存活与群落副作用',
      '保护岩岸潮池和浅海海带林的水质、底质与连通性，减少施工、沉积和污染对底栖生境的压力',
      '补齐分布端点、潮下深度、成熟个体数量和长期趋势后，再开展正式全球灭绝风险评估',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'common-test-diameter',
        label: '常见硬壳直径',
        value: '约 50',
        unit: '毫米',
        note: '数值指不含棘的硬壳直径；最大记录为 104 毫米。',
      },
      {
        key: 'maximum-spine-length',
        label: '棘通常短于',
        value: '少于 25',
        unit: '毫米',
        note: '资料表述为很少超过 25 毫米，不是每根棘的固定上限。',
      },
      {
        key: 'lantern-teeth',
        label: '提灯牙齿',
        value: '5',
        unit: '枚',
        note: '五枚牙齿属于复杂咀嚼器，不能把牙尖当成整个亚里士多德提灯。',
      },
      {
        key: 'planktonic-larval-duration',
        label: '实验浮游期',
        value: '1—3',
        unit: '月',
        note: '培养研究的范围；温度、食物和定居线索会改变发育与变态时间。',
      },
    ],
    media: {
      image:
        './images/species/purple-sea-urchin/01-wave-washed-kelp-reef-adult-cover.webp',
      alt: '东北太平洋海带林的浪洗岩面右侧，一只覆盖短粗深紫色棘的紫海胆附着在壳状藻之间',
      focalPoint: { x: 0.72, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/purple-sea-urchin/02-spines-tube-feet-pedicellariae-macro.webp',
          alt: '潮池岩面上一只完整紫海胆的近摄，密集短棘之间伸出多条末端带盘的半透明紫色管足',
          title: '短棘、管足与棘间叉棘',
          caption:
            '形态重建把短棘、伸展管足和棘间微小叉棘放入一帧；画面不能测量棘长、管足数量或叉棘数量，也不能代替种级鉴定。',
          focalPoint: { x: 0.52, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/purple-sea-urchin/03-aristotles-lantern-grazing-closeup.webp',
          alt: '一只紫海胆抬起的口面贴近藻膜岩石，中央口周围露出五枚浅色牙尖，管足正接触一片褐藻',
          title: '亚里士多德提灯的五枚牙齿',
          caption:
            '口面重建显示亚里士多德提灯的五枚牙齿接触藻膜；画面不能量化摄食率、牙齿磨损、咬合力或实际食物组成。',
          focalPoint: { x: 0.52, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/purple-sea-urchin/04-kelp-forest-barren-boundary.webp',
          alt: '连续岩礁左侧保留直立巨藻，右侧以粉色壳状藻和短棘紫海胆为主，形成不规则生态交界',
          title: '海带林与海胆荒地交界',
          caption:
            '生态重建显示海带林与海胆荒地的交界；一张图不能证明转变因果、密度、面积或时间趋势。',
          focalPoint: { x: 0.56, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/purple-sea-urchin/05-eight-arm-pluteus-larva.webp',
          alt: '深蓝显微背景中一只透明八腕 pluteus 长腕幼体，细长腕内有骨杆，体侧可见幼体原基样结构',
          title: '两侧对称的八腕长腕幼体',
          caption:
            '显微重建显示一个八腕 pluteus 长腕幼体及体内幼体原基；画面不能确定年龄、发育时长、浮游期、水温或发育速度。',
          focalPoint: { x: 0.5, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/purple-sea-urchin/06-rocky-reef-quadrat-monitoring.webp',
          alt: '一名潜水调查员悬停在岩礁后方，用完整网格样方记录短棘紫海胆和藻类覆盖，没有接触动物',
          title: '固定样方记录岩礁变化',
          caption:
            '样方调查重建在岩礁上记录紫海胆和藻类；单次监测不能估计全分布区总数量、总体丰度或种群趋势。',
          focalPoint: { x: 0.6, y: 0.6 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...PURPLE_SEA_URCHIN_SOURCES,
      {
        title: 'GBIF: Strongylocentrotus purpuratus (Stimpson, 1857) nomenclatural record',
        url: 'https://www.gbif.org/species/2278852',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: PURPLE_SEA_URCHIN_CONTENT_DATE,
    updatedAt: PURPLE_SEA_URCHIN_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
