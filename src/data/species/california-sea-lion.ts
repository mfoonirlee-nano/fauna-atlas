import type { Species } from '../../types/species.ts';

const profile = {
  "id": "california-sea-lion",
  "slug": "california-sea-lion",
  "names": {
    "zh": "加州海狮",
    "en": "California Sea Lion",
    "aliases": [
      "加利福尼亚海狮"
    ]
  },
  "scientificName": "Zalophus californianus",
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
      "scientificName": "Mammalia",
      "zhName": "哺乳纲"
    },
    "order": {
      "scientificName": "Carnivora",
      "zhName": "食肉目"
    },
    "family": {
      "scientificName": "Otariidae",
      "zhName": "海狮科"
    },
    "genus": {
      "scientificName": "Zalophus",
      "zhName": "加州海狮属"
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
    "assessor": "IUCN（由 ASM Mammal Diversity Database 转引）"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "北太平洋东部沿岸",
      "加利福尼亚湾"
    ],
    "countries": [
      "美国",
      "加拿大",
      "墨西哥"
    ],
    "range": "生活在北太平洋东部，从阿拉斯加东南部到墨西哥中部太平洋沿岸。主要繁殖区位于南加州至墨西哥一带，部分雄性会季节性北上。地图点仅代表加州沿岸。",
    "center": {
      "lat": 34,
      "lng": -120
    }
  },
  "habitats": [
    {
      "name": "近岸海水与岩岸",
      "realm": "marine",
      "description": "加州海狮在近岸海域觅食，在岩岸、沙滩等处上岸休息和繁殖。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鱼类",
      "鱿鱼"
    ],
    "description": "加州海狮主要捕食鱼和鱿鱼，具体食物随海域、季节和供应变化。"
  },
  "tags": [
    "加州海狮",
    "头旁的小耳朵"
  ],
  "summary": "加州海狮用长前鳍游泳，也能用它们撑起身体。头两侧有小小的外耳廓，可以据此与港海豹区分。",
  "description": '加州海狮是用肺呼吸的哺乳动物，在海中吃鱼和鱿鱼，上岸休息、繁殖。成年雄性通常比雌性大，头顶可见隆起。它与加拉帕戈斯海狮是不同物种。',
  "storySections": [
    {
      key: 'ears',
      label: '生活与认识',
      title: '眼睛后面有小耳朵',
      body: '加州海狮有外露的小耳廓。从侧面可以看见眼睛后方贴近头侧的小耳廓。港海豹没有这样的外耳廓。',
    },
    {
      key: 'flippers',
      label: '生活与认识',
      title: '长前鳍划水',
      body: '加州海狮用长前鳍提供游泳的主要推进力。看水下图时，先找伸在身体两侧的前鳍，再沿着身体找到后鳍。它没有鱼那样的尾鳍。',
    },
    {
      key: 'walking',
      label: '生活与认识',
      title: '后鳍能转到身下',
      body: '在岸上，它能把后鳍转到身体下方，配合前鳍支撑和移动。观察岸上行走图，看看前后鳍分别接触地面的哪里。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '入水寻找鱼和鱿鱼',
      body: '加州海狮在海中寻找鱼和鱿鱼。它是用肺呼吸的哺乳动物，潜水后仍要回到水面换气。游泳图只展示姿势，不代表测得的潜水深度。',
    },
    {
      key: 'shore',
      label: '生活与认识',
      title: '上岸休息，养育幼仔',
      body: '加州海狮会聚集在岸上休息和繁殖。成年雄性通常比雌性更大，头顶也可见隆起。这份档案只介绍加州海狮，不混用加拉帕戈斯海狮的分布。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '收好钓线，留出休息空间',
      body: '加州海狮的全球 IUCN 等级为无危，仍会受到渔具缠绕、有害藻华毒素和人为伤害影响。收走废弃钓线、远离上岸休息的海狮，可以减少可避免的伤害。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '耳廓和前鳍帮助认出海狮',
      body: 'Lesson 于 1828 年描述了这个物种，现用学名为 Zalophus californianus。加州海狮有小外耳廓，长前鳍提供游泳的主要推进力，后鳍能转到身下帮助上岸行走。这些结构与港海豹不同。',
    },
  ],
  "keyFacts": [
    '眼睛后方有外露小耳廓。',
    '长前鳍提供游泳的主要推进力。',
    '后鳍能转到身体下方，帮助岸上行走。',
    '捕食鱼和鱿鱼，潜水后回水面换气。',
    '在岸上休息繁殖，雄性通常更大。',
  ],
  "threats": [
    "渔具缠绕",
    "有害藻华毒素",
    "人为伤害"
  ],
  "conservationActions": [
    "减少废弃渔具",
    "保护上岸休息场所",
    "监测搁浅与海洋健康"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "头旁的小耳朵"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "鱼类"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "近岸海水与岩岸"
    }
  ],
  "media": {
    "image": "./images/species/california-sea-lion/01-cover.webp",
    "alt": "加州海狮与生活环境的全身场景",
    "focalPoint": {
      "x": 0.79,
      "y": 0.36
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/california-sea-lion/02-observation.webp",
        "alt": "加州海狮侧头，小耳廓位于眼睛后方",
        "title": "头旁的小耳朵",
        "caption": "AI 生成科学情景重建。加州海狮侧头，小耳廓位于眼睛后方。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/california-sea-lion/03-observation.webp",
        "alt": "加州海狮用长前鳍撑起身体",
        "title": "长长的前鳍",
        "caption": "AI 生成科学情景重建。加州海狮用长前鳍撑起身体。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/california-sea-lion/04-observation.webp",
        "alt": "加州海狮用前鳍和转向前方的后鳍在岸上移动",
        "title": "在岸上走一走",
        "caption": "AI 生成科学情景重建。加州海狮用前鳍和转向前方的后鳍在岸上移动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/california-sea-lion/05-observation.webp",
        "alt": "加州海狮在水中展开前鳍游动",
        "title": "在水里划前鳍",
        "caption": "AI 生成科学情景重建。加州海狮在水中展开前鳍游动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/california-sea-lion/06-observation.webp",
        "alt": "几只加州海狮在岩岸上休息",
        "title": "回到岩岸休息",
        "caption": "AI 生成科学情景重建。几只加州海狮在岩岸上休息。",
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
      "title": "ASM Mammal Diversity Database — 加州海狮分类",
      "url": "https://www.mammaldiversity.org/taxon/1005908/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-12"
    },
    {
      "title": "NOAA Fisheries — 加州海狮生活、分布与威胁",
      "url": "https://www.fisheries.noaa.gov/species/california-sea-lion",
      "kind": "ecology",
      "accessedAt": "2026-09-12"
    },
    {
      "title": "ASM Mammal Diversity Database — 加州海狮全球 IUCN 等级",
      "url": "https://www.mammaldiversity.org/taxon/1005908/",
      "kind": "conservation",
      "accessedAt": "2026-09-12"
    },
    {
      "title": "NOAA Ocean Service — 海狮与海豹的耳廓和运动区别",
      "url": "https://oceanservice.noaa.gov/facts/seal-sealion.html",
      "kind": "ecology",
      "accessedAt": "2026-09-12"
    },
    {
      title: 'GBIF：Zalophus californianus 的命名作者与年份',
      url: 'https://www.gbif.org/species/2433458',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-12",
  "updatedAt": "2026-09-12"
} as const satisfies Species;

export default profile;
