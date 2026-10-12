import type { Species } from '../../types/species.ts';

const profile = {
  "id": "white-stork",
  "slug": "white-stork",
  "names": {
    "zh": "白鹳",
    "en": "White Stork",
    "aliases": [
      "欧洲白鹳"
    ]
  },
  "scientificName": "Ciconia ciconia",
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
      "scientificName": "Aves",
      "zhName": "鸟纲"
    },
    "order": {
      "scientificName": "Ciconiiformes",
      "zhName": "鹳形目"
    },
    "family": {
      "scientificName": "Ciconiidae",
      "zhName": "鹳科"
    },
    "genus": {
      "scientificName": "Ciconia",
      "zhName": "鹳属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "trend": "unknown",
    "assessor": "IUCN；全球等级见来源，独立评估日期与全球趋势未核实"
  },
  "distribution": {
    "realms": [
      "terrestrial",
      "freshwater"
    ],
    "continents": [
      "欧洲",
      "非洲",
      "亚洲"
    ],
    "regions": [
      "欧洲与北非",
      "西亚与中亚",
      "非洲及南亚越冬地"
    ],
    "countries": [
      "西班牙",
      "波兰",
      "摩洛哥",
      "土耳其",
      "印度"
    ],
    "range": "繁殖地包括欧洲、北非和亚洲部分地区，许多种群迁往非洲或南亚越冬，也有留居种群。",
    "center": {
      "lat": 42,
      "lng": 25
    }
  },
  "habitats": [
    {
      "name": "湿草甸、浅水湿地与农田",
      "realm": "freshwater",
      "description": '白鹳在浅水、湿草甸和农田迈步觅食，在树木、屋顶等高处筑巢。迁徙中的鸟群还需要沿途有食物和休息位置。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "昆虫",
      "蚯蚓",
      "蛙类",
      "小鱼",
      "小型哺乳动物"
    ],
    "description": '白鹳边走边寻找昆虫、蚯蚓、蛙和其他小型脊椎动物，食物随地区和季节变化。'
  },
  "activity": [
    "主要在白天活动"
  ],
  "tags": [
    "白鹳",
    "浅水里的红色长腿"
  ],
  "summary": "成年白鹳有红色长嘴和长腿，在浅水或草地上迈步觅食。飞行时，它把脖子伸向前、双腿伸向后。",
  "description": '白鹳的身体以白色为主，飞羽呈黑色；幼鸟有浅色绒羽，早期嘴色较暗。它们在高处搭枝条巢，双亲共同照顾幼鸟。成年白鹳的红嘴也能与黑嘴的东方白鹳区分。',
  "storySections": [
    {
      key: 'legs',
      label: '生活与认识',
      title: '浅水里的红色长腿',
      body: '白鹳用细长双腿在浅水和湿草地上走动，脚趾在地面或水底支撑身体。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '边走边找食物',
      body: '它们会低头用嘴捕捉昆虫、蚯蚓或小型动物，既在浅水取食，也在草地和农田觅食。',
    },
    {
      key: 'flight',
      label: '生活与认识',
      title: '把脖子伸直飞',
      body: '白鹳飞行时伸直颈部，两腿拖在身体后方。黑色飞羽与白色身体形成对比；它们还会利用上升气流滑翔。',
    },
    {
      key: 'nest',
      label: '生活与认识',
      title: '高处的大枝条巢',
      body: '白鹳在树木、屋顶或其他合适高处搭建枝条巢。成鸟会仰头，以快速开合喙发出哒哒声，与巢边同伴交流。',
    },
    {
      key: 'young',
      label: '生活与认识',
      title: '小鸟的嘴还没有变红',
      body: '白鹳幼鸟有浅色绒羽，嘴在早期较暗。双亲参与照顾幼鸟，幼鸟长大后才逐渐具有成鸟的外形。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '沿着迁徙路线保护湿地',
      body: '白鹳全球属无危。保护湿地、草地和安全巢址，为留居与迁徙的白鹳保留食物和休息空间。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '高处枝条巢边的哒哒声',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Ciconia ciconia。白鹳会把巢建在树木、屋顶等高处。巢边的成鸟仰起头，快速开合喙发出哒哒声；飞行时，它们伸直长颈，还会利用上升气流滑翔。',
    },
  ],
  "keyFacts": [
    "白鹳用细长双腿在浅水和湿草地上走动。",
    "它们会低头用嘴捕捉昆虫、蚯蚓或小型动物。",
    "白鹳飞行时伸直颈部，两腿拖在身体后方。",
    "白鹳会在树木、屋顶或合适高处搭建枝条巢。",
    "白鹳幼鸟有浅色绒羽，嘴在早期较暗。"
  ],
  "threats": [
    "湿地退化",
    "繁殖地干扰"
  ],
  "conservationActions": [
    "保护湿地与草地",
    "保留安全巢址",
    "减少迁徙停歇地干扰"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "浅水里的红色长腿"
    },
    {
      "key": "food",
      "label": "主要食物",
      "value": "昆虫"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "湿草甸、浅水湿地与农田"
    }
  ],
  "media": {
    "image": "./images/species/white-stork/01-cover.webp",
    "alt": "白鹳在生活环境中的完整身体",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/white-stork/02-observation.webp",
        "title": "浅水中迈开长腿",
        "alt": "成年白鹳在浅水湿草地迈步，红色腿和脚趾可见",
        "caption": "AI 生成科学情景重建。成年白鹳在浅水湿草地迈步，红色腿和脚趾可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/white-stork/03-observation.webp",
        "title": "低头寻找小动物",
        "alt": "白鹳在草地低头寻找昆虫",
        "caption": "AI 生成科学情景重建。白鹳在草地低头寻找昆虫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/white-stork/04-observation.webp",
        "title": "伸直脖子滑翔",
        "alt": "白鹳伸直脖子和双腿滑翔，黑色飞羽展开",
        "caption": "AI 生成科学情景重建。白鹳伸直脖子和双腿滑翔，黑色飞羽展开。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/white-stork/05-observation.webp",
        "title": "屋顶巢边的成鸟",
        "alt": "两只成年白鹳站在屋顶枝条巢边，一只仰头鸣嘴",
        "caption": "AI 生成科学情景重建。两只成年白鹳站在屋顶枝条巢边，一只仰头鸣嘴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/white-stork/06-observation.webp",
        "title": "巢里的白色幼鸟",
        "alt": "成年白鹳照顾枝条巢中两只嘴色较暗的幼鸟",
        "caption": "AI 生成科学情景重建。成年白鹳照顾枝条巢中两只嘴色较暗的幼鸟。",
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
      "title": "Animal Diversity Web：白鹳分类、分布与生活史",
      "url": "https://animaldiversity.org/accounts/Ciconia_ciconia/",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "BTO：白鹳全球等级与留居行为",
      "url": "https://www.bto.org/learn/about-birds/birdfacts/white-stork",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Ciconia ciconia 的命名作者与年份',
      url: 'https://www.gbif.org/species/2481912',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
