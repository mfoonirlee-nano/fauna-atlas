import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const HOATZIN_SOURCE_DATE = '2026-08-30' as const;

const HOATZIN_CONTENT_DATE = '2026-08-30' as const;

const HOATZIN_SOURCES = [
  {
    title: 'AviList v2025b — Global avian checklist',
    url: 'https://www.avilist.org/checklist/v2025b/',
    kind: 'taxonomy',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'South American Classification Committee — Part 4',
    url: 'https://www.museum.lsu.edu/~Remsen/SACCBaseline04.htm',
    kind: 'taxonomy',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'NCBI Taxonomy — Opisthocomus hoazin',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=30419&mode=info',
    kind: 'taxonomy',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone — Hoatzin species factsheet',
    url: 'https://datazone.birdlife.org/species/factsheet/hoatzin-opisthocomus-hoazin',
    kind: 'distribution',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'Hedges et al. 1995 — Phylogenetic relationships of the hoatzin',
    url: 'https://doi.org/10.1073/pnas.92.25.11662',
    kind: 'general',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'Mayr 2022 — The Hoatzin',
    url: 'https://doi.org/10.1016/j.cub.2022.08.064',
    kind: 'general',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'Grajal et al. 1989 — Foregut fermentation in the Hoatzin',
    url: 'https://doi.org/10.1126/science.245.4923.1236',
    kind: 'ecology',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'Grajal 1995 — Structure and function of the digestive tract',
    url: 'https://doi.org/10.2307/4088763',
    kind: 'ecology',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'Grajal 1995 — Digestive efficiency of the Hoatzin',
    url: 'https://doi.org/10.1111/j.1474-919X.1995.tb08037.x',
    kind: 'ecology',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'Dominguez-Bello et al. 1993 — Microbial digestive symbionts',
    url: 'https://doi.org/10.1086/physzool.66.3.30163698',
    kind: 'ecology',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'Godoy-Vitorino et al. 2008 — Bacterial community in the crop',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2565963/',
    kind: 'ecology',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'Wright et al. 2009 — Methanogenic diversity in the foregut',
    url: 'https://doi.org/10.1038/ismej.2009.41',
    kind: 'ecology',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'Godoy-Vitorino et al. 2010 — Developmental microbial ecology',
    url: 'https://doi.org/10.1038/ismej.2009.147',
    kind: 'ecology',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'Abourachid et al. 2019 — Hoatzin nestling locomotion',
    url: 'https://doi.org/10.1126/sciadv.aat0787',
    kind: 'ecology',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'Strahl 1988 — Social organization and behaviour',
    url: 'https://doi.org/10.1111/j.1474-919X.1988.tb02714.x',
    kind: 'ecology',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'Dominguez-Bello et al. 1994 — Ecology of the Hoatzin',
    url: 'https://digitalcommons.usf.edu/auk/vol111/iss3/14/',
    kind: 'ecology',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'Mullner et al. 2007 — Reproductive biology in Ecuador',
    url: 'https://doi.org/10.1111/j.1557-9263.2007.00123.x',
    kind: 'ecology',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
  {
    title: 'Mullner et al. 2004 — Exposure to ecotourism',
    url: 'https://doi.org/10.1016/j.biocon.2003.10.003',
    kind: 'conservation',
    accessedAt: HOATZIN_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-opisthocomus-hoazin',
    slug: 'hoatzin',
    names: {
      zh: '麝雉',
      en: 'Hoatzin',
      aliases: [
        'Opisthocomus hoazin',
        'Stinkbird',
        'Canje Pheasant',
        '臭雉',
      ],
    },
    scientificName: 'Opisthocomus hoazin',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Opisthocomiformes', '麝雉目'),
      taxon('Opisthocomidae', '麝雉科'),
      taxon('Opisthocomus', '麝雉属'),
    ),
    conservation: conservation('LC', 'decreasing', 2024),
    distribution: {
      realms: ['terrestrial', 'freshwater'],
      continents: ['南美洲'],
      regions: [
        '亚马孙盆地',
        '奥里诺科盆地',
        '圭亚那地盾低地',
        '南美洲北部与中部河岸湿地',
      ],
      countries: [
        '玻利维亚',
        '巴西',
        '哥伦比亚',
        '厄瓜多尔',
        '法属圭亚那',
        '圭亚那',
        '秘鲁',
        '苏里南',
        '委内瑞拉',
      ],
      range:
        '留居于南美洲北部和中部的亚马孙、奥里诺科及圭亚那地区，主要沿低地河道、湖泊、沼泽和淹水森林的树木与灌丛活动。',
      center: { lat: -3, lng: -61 },
    },
    habitats: [
      {
        name: '低地湿润与淹水森林',
        realm: 'terrestrial',
        description:
          '河流、湖泊和季节性积水区周围的低地森林，为群体栖息、取食和繁殖提供连续枝叶；并非所有低地雨林都有相同密度。',
        isPrimary: true,
      },
      {
        name: '河岸林与廊道林',
        realm: 'terrestrial',
        description:
          '沿河道延伸的树木、灌丛与藤本带连接取食树、夜栖点和巢位；沿水活动不表示成鸟在水中取食。',
      },
      {
        name: '沼泽与内陆湿地边缘',
        realm: 'freshwater',
        description:
          '沼泽、湖泊和缓流水道边的枝叶层，巢多见于水面上方；这种常见布局不是全分布区的绝对规则。',
      },
    ],
    measurements: {
      length: {
        typical: 65,
        unit: 'cm',
        note: '成鸟全长的常用近似值，不是经全分布区核实的封闭范围',
      },
      weight: {
        typical: 0.72,
        unit: 'kg',
        note: '由解剖样本合并均值 716.1 克取整，不代表物种级上下限',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: ['嫩叶与叶芽', '细嫩枝梢', '花', '少量果实'],
      description:
        '以树木和灌木的嫩叶、叶芽与细枝为主，植物种类随地点和可用性变化；花和少量果实可补充食谱，不能据此归为杂食。',
    },
    activity: ['日行性', '树栖', '群居', '留鸟', '短距离飞行', '合作繁殖'],
    tags: [
      '南美洲',
      '亚马孙',
      '前肠发酵',
      '植食鸟',
      '雏鸟翼爪',
      '合作繁殖',
      'IUCN 无危',
    ],
    summary:
      '南美洲河岸林里的麝雉以巨大嗉囊和后段食管发酵叶片；雏鸟还能用翼爪攀枝并协调四肢游泳。',
    description:
      '麝雉是麝雉目现存唯一物种，留居于亚马孙、奥里诺科和圭亚那地区的河岸林、淹水森林与湿地边缘。它以嫩叶和细枝为主食，在胃前的多腔嗉囊与后段食管内依靠复杂微生物群发酵植物。成鸟有蓝色裸露面皮、红眼和红橙色冠羽，能作短距离飞行；雏鸟每翼两枚可动爪，可配合喙和足攀爬，也具水面及水下游泳能力。群体常合作繁殖，巢多见于水道上方。IUCN 2024 年仍列无危，但趋势下降，全球成熟个体数未量化。',
    storySections: [
      {
        key: 'one-living-lineage',
        label: '独立谱系',
        title: '麝雉目唯一现生物种',
        body: '麝雉是麝雉目、麝雉科和麝雉属唯一现生成员。它的分类位置独立，演化史上仍有其他麝雉类，不能据此把它当作其他现代鸟的祖先。',
      },
      {
        key: 'fermentation-before-stomach',
        label: '前肠发酵',
        title: '发酵室在胃之前',
        body: '巨大的嗉囊和后段食管分成多个腔室，让叶片颗粒停留并接受微生物发酵。解剖样本中，这两段合计约占总消化道容量的 77%，不是体重的 77%。麝雉与反刍动物只在功能上趋同，它没有四个胃，也没有被证实会反刍嚼团。',
      },
      {
        key: 'microbiome-matures',
        label: '微生物群',
        title: '幼鸟随发育转向自行吃叶',
        body: '亲鸟给早期雏鸟吐喂预先处理的叶性食物，幼鸟约在 7 至 10 周龄转向自行取食叶片。小样本研究显示，细菌、产甲烷古菌和纤毛虫组成会随发育重排，多种微生物共同参与发酵。',
      },
      {
        key: 'wing-claw-climber',
        label: '雏鸟翼爪',
        title: '翅膀也能抓住枝条',
        body: '雏鸟每翼有两枚显著可动的爪。实验中，它们让翼爪锚住斜面或枝条，再用屈翼动作拉动身体，喙和双足也参与，形成交替的四肢攀爬序列。显著翼爪通常随成熟退化或消失，不能拿幼鸟结构代表成鸟。',
      },
      {
        key: 'water-edge-nursery',
        label: '水边育幼',
        title: '实验确认幼鸟能在水面和水下游泳',
        body: '多地研究在水道上方记录到松散平台巢。4 只雏鸟的实验确认它们能在水面和水下协调四肢游泳；实验没有测量野外受惊跳水的频率、原因、潜水时长或返回原巢的成功率，能力与完整逃生故事必须分开。',
      },
      {
        key: 'least-concern-decreasing',
        label: '保护现状',
        title: '全球无危，趋势仍下降',
        body: '2024 年评估仍将麝雉列为无危，但趋势下降，全球成熟个体数没有量化。BirdLife 依据范围内树冠变化暂定过去三代种群减少 1% 至 19%，最佳估计 11% 至 14%；这是模型推断，不是全范围同步计数。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1776 年的麝雉命名记录',
        body: '麝雉的科学命名记录署名为 Statius Müller，年份为 1776 年，现用学名为 Opisthocomus hoazin。种加词 hoazin 与英文常用名 Hoatzin 的拼写不同，前者没有字母 t。雏鸟每翼两枚可动爪用于攀枝，显著翼爪通常随成熟退化或消失。',
      },
    ],
    keyFacts: [
      '现行学名为 Opisthocomus hoazin；种加词 hoazin 不含英文名 Hoatzin 中的字母 t。',
      '它是麝雉目、麝雉科和麝雉属现存唯一物种。',
      '“现存唯一”不代表演化史上从无其他麝雉类，也不支持“活化石”标签。',
      'IUCN 2024 年评估为无危，全球趋势下降，LC 记录没有受威胁判据字符串。',
      '全球成熟个体数没有量化，BirdLife 只提供定性与模型化趋势判断。',
      '原生留居范围跨南美洲九个国家或地区，集中于亚马孙、奥里诺科和圭亚那低地。',
      '主要生活在河岸林、廊道林、淹水森林和内陆湿地边缘。',
      'BirdLife 当前评估采用的已知海拔范围为 0 至 1,050 米，不是生理极限。',
      '成鸟全长常概括为约 65 厘米。',
      '解剖样本合并平均体重为 716.1 克，不能当作物种上下限。',
      '红眼、鲜蓝裸露面皮和红橙色冠羽是成鸟醒目的识别特征，雌雄外观近似。',
      '食谱以嫩叶、叶芽和细嫩枝梢为主，花和少量果实可作补充。',
      '主要发酵室是嗉囊和后段食管，位于真正的胃之前。',
      '解剖样本中，嗉囊和后段食管合计约占总消化道容量 77%，这个比例不是体重占比。',
      '麝雉没有反刍动物的四胃结构，也没有可靠的嚼反刍团证据。',
      '发酵群落包括细菌、产甲烷古菌和纤毛虫，不是一种单独的“消化菌”。',
      '一项 6 只成鸟研究的序列中，厚壁菌门和拟杆菌门占主导；局地小样本比例不是物种常数。',
      '雏鸟、幼鸟与成鸟的前肠微生物群会随饮食和发育发生重排。',
      '雏鸟每翼有两枚显著、可动的翼指爪；翼指的数字命名在资料间并不统一。',
      '雏鸟能结合翼爪、喙和双足，以交替的四肢模式攀爬。',
      '实验确认雏鸟能在水面和水下协调四肢游泳，但没有测量野外跳水频率。',
      '显著翼爪通常随成熟退化或消失，不宜断言所有成鸟在同一日龄绝对没有爪痕。',
      '麝雉会飞，巨大前肠和胸骨结构更适合描述为限制长距离飞行。',
      '委内瑞拉研究记录 2 至 8 只的合作繁殖单元，往年后代可协助守域、筑巢、孵卵和喂育；这不是全范围固定群型。',
      '巢多为水道上方的松散枝条平台，通常约两枚卵，孵化约一个月。',
    ],
    threats: [
      '河岸林、淹水森林和湿地廊道的树冠损失与破碎化；BirdLife 据范围内树冠变化推断总体趋势下降。',
      '繁殖地近距离、持续性的船只和游客活动；厄瓜多尔 Cuyabeno 的局地研究记录到幼鸟存活、体重或应激方面的不利关联，不能直接外推为全球效应。',
      '部分地区存在食用或宠物用途记录，但当前资料没有量化其全球影响，不能列为已证实的首要全球驱动。',
      '缺少标准化全范围数量与趋势监测，使局地下降难以及时转换为可靠的全球种群估计。',
    ],
    conservationActions: [
      '保护并恢复河岸林、淹水森林、沼泽边缘和相互连通的水道植被廊道。',
      '在繁殖季为巢区制定船只限速、观察距离和安静区，并根据当地繁殖监测动态调整。',
      '建立跨国家和保护地的标准化计数、繁殖成功率与遥感树冠变化监测，补足全球种群基线。',
      '维持已识别保护地的有效管理，并在存在捕猎或宠物捕捉的地区执行本地法规和社区共管。',
      '研究水文变化、食物植物、巢位选择和旅游扰动的因果关系，再据结果制定地点级管理阈值。',
    ],
    metrics: {
      elevationM: [0, 1050],
    },
    featuredStats: [
      {
        key: 'adult-length',
        label: '成鸟全长',
        value: '约65',
        unit: '厘米',
        note: '常用代表值，不是经全分布区验证的封闭范围',
      },
      {
        key: 'typical-adult-mass',
        label: '样本平均体重',
        value: '约0.72',
        unit: '千克',
        note: '由解剖样本合并均值 716.1 克取整，不代表物种上下限',
      },
      {
        key: 'foregut-capacity-share',
        label: '前肠容量占比',
        value: '77',
        unit: '%',
        note: '嗉囊加后段食管占总消化道容量的解剖样本值，不是体重占比',
      },
      {
        key: 'local-incubation',
        label: '局地平均孵化期',
        value: '32',
        unit: '天',
        note: '厄瓜多尔研究均值 32 ± 1.5 天，样本量 20，不是全球固定值',
      },
    ],
    media: {
      image:
        './images/species/hoatzin/01-floodplain-riparian-portrait.webp',
      alt: '亚马孙与奥里诺科式淹水森林河道上方，一只蓝脸红眼、带红褐冠羽和长尾的成年麝雉完整栖在斜枝上',
      focalPoint: { x: 0.65, y: 0.51 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/hoatzin/02-full-body-diagnostic-profile.webp',
          alt: '柔焦绿色湿地背景前，一只成年麝雉以左向完整侧面站在横枝上，红眼、蓝色裸露面皮、尖长冠羽、栗色翼和浅色尾端清楚可见',
          title: '蓝脸、红眼与长冠羽组成醒目标记',
          caption:
            'AI生成科学情景重建；画面支持外形的定性辨认。透视与枝条遮挡不能证明足趾方向、校准体长、体重、性别、年龄、个体身份或具体地点。',
          focalPoint: { x: 0.49, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/hoatzin/03-young-leaf-foraging.webp',
          alt: '水边灌丛中，一只完整成年麝雉抓住树枝，短喙接触一枚仍连在细枝上的嫩绿叶片',
          title: '短喙接触一枚嫩叶',
          caption:
            'AI生成科学情景重建；静帧只显示喙与叶片接触，不能鉴定植物、证明吞咽、量化食谱、呈现发酵或确认处理植物次生化合物的效果。',
          focalPoint: { x: 0.53, y: 0.47 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/hoatzin/04-enlarged-crop-foregut-cutaway.webp',
          alt: '一只左向麝雉的科学概念剖面，颈胸内可见装有碎叶的膨大前肠结构，外部羽色与长尾保持完整',
          title: '发酵空间位于真正的胃之前',
          caption:
            'AI生成科学概念重建；画面只表达膨大的嗉囊与下段食管参与胃前发酵。它不是 CT、解剖记录或测量，不能定义腔室数量、连接拓扑、相对容量、器官精确位置或下游胃段结构，也不能作为“多室胃”、瘤胃、微生物组成或反刍证据。',
          focalPoint: { x: 0.44, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/hoatzin/05-nestling-two-wing-claws.webp',
          alt: '一只黑褐绒羽麝雉幼鸟站在粗枝上，近侧发育中羽翼抬向镜头，一枚短弯爪位于翼端，另一枚位于更近身的翼前缘，两足抓枝',
          title: '同一幼翼上两枚错位分布的短爪',
          caption:
            'AI生成科学情景重建；可见翼上两枚短爪的连接点前后错开，一枚在翼端，一枚位于较近端翼前缘。画面不能校准爪长、翼指比例、关节连接或年龄，也不能核验隐藏侧翼、证明攀爬序列或演化祖先。',
          focalPoint: { x: 0.76, y: 0.36 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/hoatzin/06-chick-surface-swimming.webp',
          alt: '淹水林低枝下，一只黑褐绒羽麝雉幼鸟在平静水面游动，胸前形成小波纹，周围没有捕食者或成鸟',
          title: '一只幼鸟在低枝间作水面游动',
          caption:
            'AI生成科学情景重建；静帧只表达实验确认的水面游泳能力，不能显示先前是否跳巢、捕食压力、水下划动、潜水深度与时长、目的地、返回原巢或存活结果。',
          focalPoint: { x: 0.43, y: 0.57 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...HOATZIN_SOURCES,
      {
        title: 'GBIF: Opisthocomus hoazin (Statius Muller, 1776) nomenclatural record',
        url: 'https://www.gbif.org/species/2496202',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: HOATZIN_CONTENT_DATE,
    updatedAt: HOATZIN_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
