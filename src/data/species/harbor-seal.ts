import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-phoca-vitulina",
  "slug": "harbor-seal",
  "names": {
    "zh": "港海豹",
    "en": "Harbor Seal"
  },
  "scientificName": "Phoca vitulina",
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
      "scientificName": "Phocidae",
      "zhName": "海豹科"
    },
    "genus": {
      "scientificName": "Phoca",
      "zhName": "海豹属"
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
    "assessor": "IUCN；等级来源与适用范围见正文"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲",
      "欧洲",
      "亚洲"
    ],
    "regions": [
      "北大西洋与北太平洋沿岸"
    ],
    "countries": [],
    "range": '分布于北美洲、欧洲和亚洲北部的温带至亚北极海岸，部分种群也进入河流或湖泊。它利用岩礁、沙滩和一些冰面休息。',
    "center": {
      "lat": 58,
      "lng": -135
    }
  },
  "habitats": [
    {
      "name": "近岸海域与岩岸",
      "realm": "marine",
      "description": '在近岸水域捕食鱼类及无脊椎动物，利用岩礁、沙滩和部分冰面上岸休息、育幼。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 152,
      "max": 183,
      "unit": "cm",
      "note": "NOAA 常见成年长度约 5–6 英尺、体重约 180–285 磅，换算后取整；不同地区与性别存在差异。"
    },
    "weight": {
      "min": 82,
      "max": 129,
      "unit": "kg",
      "note": "NOAA 常见成年长度约 5–6 英尺、体重约 180–285 磅，换算后取整；不同地区与性别存在差异。"
    }
  },
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鱼类",
      "甲壳动物",
      "软体动物"
    ],
    "description": "主要食物包括鱼类、甲壳动物、软体动物。"
  },
  "tags": [
    "港海豹",
    "鼻子旁的胡须"
  ],
  "summary": "港海豹在海中游泳，也会上岸休息。短吻、胡须和斑点毛皮有助于辨认它；头部两侧只有耳孔，没有海狮那样的外耳廓。",
  "description": '港海豹属于海豹科，四肢呈鳍状。上岸后，后肢无法像海狮那样转到身体下方，因此它在岸上的移动姿势与海狮不同。',
  "storySections": [
    {
      key: 'whiskers',
      label: '生活与认识',
      title: '鼻子两边有胡须',
      body: '短吻和斑点毛皮也是认识港海豹的线索。',
    },
    {
      key: 'ears',
      label: '生活与认识',
      title: '耳朵藏在哪里',
      body: '港海豹头部两侧有耳孔，没有突出的外耳廓。它属于海豹科，可以和长有外耳廓的海狮比较。',
    },
    {
      key: 'swim',
      label: '生活与认识',
      title: '鳍状的四肢',
      body: '它的四肢呈鳍状，在水中帮助游动。上岸后，后肢不能像海狮那样转到身体下方行走。',
    },
    {
      key: 'pup',
      label: '生活与认识',
      title: '小海豹跟着妈妈',
      body: '小海豹出生后就能游泳，也会和妈妈在岸边休息、吃奶。看见独处的幼崽时，不要把它赶回海里。',
    },
    {
      key: 'rest',
      label: '生活与认识',
      title: '把头和后鳍抬起来',
      body: '港海豹有时在岸上把头和后鳍抬起，身体像弯弯的香蕉。上岸休息是正常生活的一部分。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '给休息的海豹留出空间',
      body: '全球 IUCN 等级为无危，各地种群的变化并不相同。船只和游客应避免打扰休息地；不要从一个海滩上的数量推断全球趋势。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '海豹和海狮的耳朵不同',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Phoca vitulina。港海豹只有耳孔，没有突出的外耳廓，后肢也不能像海狮那样转到身下。上岸休息时，它有时抬起头和后鳍，整个身体呈香蕉般的弯曲姿势。',
    },
  ],
  "keyFacts": [
    '短吻两侧有胡须，毛皮带斑点。',
    '有耳孔，没有突出的外耳廓。',
    '四肢呈鳍状，后肢不能转到身体下方行走。',
    '幼崽出生后就能游泳。',
    '有时把头和后鳍抬起，呈香蕉状休息姿势。',
  ],
  "threats": [
    "渔具缠绕",
    "休息地受到干扰",
    "海洋污染"
  ],
  "conservationActions": [
    "远距离观察岸上的海豹，不投喂",
    "减少废弃渔具和海岸垃圾"
  ],
  "metrics": {
    "adultLengthCm": [
      152,
      183
    ],
    "adultMassKg": [
      82,
      129
    ]
  },
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "鼻子旁的胡须"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "鱼类"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "近岸海域与岩岸"
    }
  ],
  "media": {
    "image": "./images/species/harbor-seal/01-cover.webp",
    "alt": "港海豹的完整身体位于画面右侧。",
    "focalPoint": {
      "x": 0.75,
      "y": 0.42
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/harbor-seal/02-observation.webp",
        "title": "岩石上的海豹",
        "alt": "斑点毛皮的港海豹躺在海岸岩石上，后鳍露在身体末端。",
        "caption": "斑点毛皮的港海豹躺在海岸岩石上，后鳍露在身体末端。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/harbor-seal/03-observation.webp",
        "title": "鼻子旁的胡须",
        "alt": "近看港海豹的鼻子、眼睛和两侧胡须。",
        "caption": "近看港海豹的鼻子、眼睛和两侧胡须。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/harbor-seal/04-observation.webp",
        "title": "在水里游动",
        "alt": "港海豹在水下游动，前鳍和后鳍可见。",
        "caption": "港海豹在水下游动，前鳍和后鳍可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/harbor-seal/05-observation.webp",
        "title": "妈妈和小海豹",
        "alt": "成年港海豹与幼崽在安静的沙岸上休息。",
        "caption": "成年港海豹与幼崽在安静的沙岸上休息。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/harbor-seal/06-observation.webp",
        "title": "弯弯的休息姿势",
        "alt": "港海豹躺在岸边，头部和后鳍稍稍抬起。",
        "caption": "港海豹躺在岸边，头部和后鳍稍稍抬起。",
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
      "title": "NOAA Fisheries — 港海豹形态、分布与生活",
      "url": "https://www.fisheries.noaa.gov/species/harbor-seal",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Society for Marine Mammalogy — 2026 年分类名单",
      "url": "https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "CMS — Phoca vitulina 全球 IUCN 等级",
      "url": "https://www.cms.int/species/phoca-vitulina",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      title: 'GBIF：Phoca vitulina 的命名作者与年份',
      url: 'https://www.gbif.org/species/2434793',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-09",
  "updatedAt": "2026-09-09"
} as const satisfies Species;

export default profile;
