import type { Species } from '../../types/species.ts';

const profile = {
  "id": "three-spined-stickleback",
  "slug": "three-spined-stickleback",
  "names": {
    "zh": "三刺鱼",
    "en": "Three-spined Stickleback"
  },
  "scientificName": "Gasterosteus aculeatus",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Chordata",
      "zhName": "脊索动物门"
    },
    "class": {
      "scientificName": "Actinopterygii",
      "zhName": "辐鳍鱼纲"
    },
    "order": {
      "scientificName": "Gasterosteiformes",
      "zhName": "刺鱼目"
    },
    "family": {
      "scientificName": "Gasterosteidae",
      "zhName": "刺鱼科"
    },
    "genus": {
      "scientificName": "Gasterosteus",
      "zhName": "刺鱼属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "trend": "unknown",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "assessedYear": 2022,
    "assessor": "FishBase 转录 IUCN 全球 LC，评估日期为 2022-05-30；全球趋势未核实，局部种群等级不能代替全球物种等级。"
  },
  "distribution": {
    "realms": [
      "freshwater",
      "marine"
    ],
    "continents": [],
    "regions": [
      "北半球温带与寒温带"
    ],
    "countries": [],
    "range": "分布于北半球温带和寒温带的淡水、半咸水与近岸海域。不同种群的迁移方式和体侧骨板数量有差异。"
  },
  "habitats": [
    {
      "name": "浅水水草区",
      "realm": "freshwater",
      "description": '利用淡水、半咸水和近岸海域的浅水区域，植物碎片和浅水底面可供雄鱼筑巢。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小型甲壳动物",
      "水生昆虫幼虫"
    ],
    "description": "取食水中的小型动物。"
  },
  "tags": [
    "三刺鱼",
    "浅水水草区"
  ],
  "summary": '三刺鱼雄鱼在浅水中用植物碎片筑巢、守卵并扇动胸鳍通水，背上通常有三根分开的硬棘。',
  "description": '三刺鱼生活在北半球温带和寒温带的淡水、半咸水和近岸海域，吃小型甲壳动物与水生昆虫幼虫。有的种群留在淡水，有的在海水和淡水间迁移，体侧骨板数量也有差别。繁殖期雄鱼常有红色喉部，会收集植物碎片在浅水底筑巢，守护卵并扇动胸鳍通水。背上通常有三根分开的硬棘，后面才是柔软背鳍；雌鱼与非繁殖个体颜色不同。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '衔来一片植物',
      body: '雄鱼收集植物碎片，在浅水底筑巢。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '巢边的雄鱼',
      body: '雄鱼守护巢中的卵，并扇动胸鳍使水流经过巢。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '银色的小鱼',
      body: '雌鱼通常没有繁殖期雄鱼的鲜红喉部，颜色还随种群、季节与状态而变。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '找找背上的棘',
      body: '背上通常有三根分开的硬棘，后方有柔软背鳍。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '水草间的生活',
      body: '有的种群终生在淡水生活，有的在海水与淡水间迁移。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '全球保护等级为无危。保护浅水植被，观察时不翻动鱼巢。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '名字来自三根背棘，育幼由雄鱼承担',
      body: '林奈在 1758 年发表了 Gasterosteus aculeatus，这个名称沿用至今。中文“三刺鱼”和英文 Three-spined Stickleback 都提示背上通常分开的三根硬棘。它的雄鱼还会筑巢、守卵、扇鳍通水，这些繁殖行为让浅水植物区成为生活中不可缺少的一部分。',
    },
  ],
  "keyFacts": [
    '雄鱼收集植物碎片，在浅水底筑巢。',
    '雄鱼守护巢中的卵，并扇动胸鳍使水流经过巢。',
    '雌鱼通常没有繁殖期雄鱼的鲜红喉部，颜色还随种群、季节与状态而变。',
    '背上通常有三根分开的硬棘，后方有柔软背鳍。',
    '有的种群终生在淡水生活，有的在海水与淡水间迁移。',
  ],
  "threats": [
    "局部栖息地改变"
  ],
  "conservationActions": [
    "保护浅水植被，观察时不翻动鱼巢。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "栖息环境",
      "value": "浅水水草区"
    },
    {
      "key": "observation",
      "label": "观察提示",
      "value": "衔来一片植物"
    },
    {
      "key": "status",
      "label": "全球保护等级",
      "value": "无危",
      "note": "FishBase 转录 IUCN 全球 LC，评估日期为 2022-05-30；全球趋势未核实，局部种群等级不能代替全球物种等级。"
    }
  ],
  "media": {
    "image": "./images/species/three-spined-stickleback/01-cover.webp",
    "alt": "三刺鱼及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/three-spined-stickleback/02-observation.webp",
        "alt": "三刺鱼：衔来一片植物",
        "title": "衔来一片植物",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。雄鱼收集植物碎片，在浅水底部搭建巢。单张重建图展示衔运的一刻，不能代替连续行为影像。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/three-spined-stickleback/03-observation.webp",
        "alt": "三刺鱼：巢边的雄鱼",
        "title": "巢边的雄鱼",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。雄鱼在巢边守护卵，并扇动胸鳍使水流经过巢。观察时不翻动巢或靠近惊扰。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/three-spined-stickleback/04-observation.webp",
        "alt": "三刺鱼：银色的小鱼",
        "title": "银色的小鱼",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。雌鱼通常没有繁殖期雄鱼那样鲜红的喉部。颜色还随种群、季节和状态变化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/three-spined-stickleback/05-observation.webp",
        "alt": "三刺鱼：找找背上的棘",
        "title": "找找背上的棘",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。背上通常有三根分开的硬棘，后方才是柔软的背鳍。图中的棘与鳍条属于重建，不能用于标本计数。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/three-spined-stickleback/06-observation.webp",
        "alt": "三刺鱼：水草间的生活",
        "title": "水草间的生活",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。有的种群终生住在淡水，有的会在海水与淡水间迁移。这里只展示一种浅水生境。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      }
    ]
  },
  "sources": [
    {
      "title": "Animal Diversity Web：三刺鱼形态、筑巢与分布",
      "url": "https://animaldiversity.org/accounts/Gasterosteus_aculeatus/",
      "kind": "ecology",
      "accessedAt": "2026-10-07"
    },
    {
      "title": "FishBase：三刺鱼全球保护评估",
      "url": "https://www.fishbase.se/summary/Gasterosteus_aculeatus.html",
      "kind": "conservation",
      "accessedAt": "2026-10-07"
    },
    {
      title: 'GBIF：Gasterosteus aculeatus 的描述作者与年份',
      url: 'https://www.gbif.org/species/4286327',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-07",
  "updatedAt": "2026-10-07"
} as const satisfies Species;

export default profile;
