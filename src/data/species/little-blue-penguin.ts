import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-eudyptula-minor",
  "slug": "little-blue-penguin",
  "names": {
    "zh": "小蓝企鹅",
    "en": "Little Blue Penguin",
    "aliases": []
  },
  "scientificName": "Eudyptula minor",
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
      "scientificName": "Sphenisciformes",
      "zhName": "企鹅目"
    },
    "family": {
      "scientificName": "Spheniscidae",
      "zhName": "企鹅科"
    },
    "genus": {
      "scientificName": "Eudyptula",
      "zhName": "小蓝企鹅属"
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
    "assessor": "IUCN（等级见所列保护来源）"
  },
  "distribution": {
    "realms": [
      "marine",
      "terrestrial"
    ],
    "continents": [
      "大洋洲"
    ],
    "countries": [
      "澳大利亚",
      "新西兰"
    ],
    "regions": [
      "澳大利亚南部海岸",
      "新西兰海岸及邻近岛屿"
    ],
    "range": '广义 Eudyptula minor 分布包括澳大利亚南部和新西兰沿海。另有分类将澳大利亚及奥塔哥部分种群分为 E. novaehollandiae；图集展示新西兰海岸场景。',
    "center": {
      "lat": -41,
      "lng": 174
    }
  },
  "habitats": [
    {
      "realm": "marine",
      "name": "近岸海域",
      "description": "入海追逐小鱼等猎物。",
      "isPrimary": true
    },
    {
      "realm": "terrestrial",
      "name": "海岸洞穴与岩缝",
      "description": "上岸筑巢、育雏和换羽。",
      "isPrimary": false
    }
  ],
  "measurements": {
    "weight": {
      "typical": 1,
      "unit": "kg",
      "note": "New Zealand Birds Online 所列代表体重，非范围。"
    }
  },
  "metrics": {},
  "diet": {
    "types": [
      "piscivore",
      "carnivore"
    ],
    "foods": [
      "小型群游鱼",
      "鱿鱼",
      "甲壳动物"
    ],
    "description": "小蓝企鹅在海中追捕小型群游鱼，也吃鱿鱼和甲壳动物。它会反复潜水寻找食物。"
  },
  "activity": [
    "海中取食",
    "常在天暗后上岸"
  ],
  "tags": [
    "小蓝企鹅",
    "翅膀和脚"
  ],
  "summary": "小蓝企鹅背部蓝灰、腹部白色，生活在温带海岸。它用短而扁的翅膀在水中推进身体，再回到岸上休息。",
  "description": '小蓝企鹅是体型最小的企鹅，背部蓝灰色，腹部白色，脚呈粉白色。它在海岸地洞、岩缝或植被下筑巢，双亲分担孵卵和育雏。',
  "storySections": [
    {
      key: 'wings',
      label: '生活与认识',
      title: '翅膀像两片小桨',
      body: '企鹅的翅膀短而扁，游泳时用来推进身体。',
    },
    {
      key: 'colours',
      label: '生活与认识',
      title: '蓝灰色背，白肚子',
      body: '小蓝企鹅的背部有蓝灰色羽毛，腹部白色，脚呈粉白色。它属于体型最小的企鹅，生活在温带海岸。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '潜进海里追小鱼',
      body: '小蓝企鹅在海中追捕小型群游鱼，也吃鱿鱼和甲壳动物。它会反复潜水寻找食物。',
    },
    {
      key: 'shore',
      label: '生活与认识',
      title: '天暗后走上岸',
      body: '小蓝企鹅常在天暗后上岸，沿海岸走向藏身处。岸边道路、犬只和渔网都可能威胁它。',
    },
    {
      key: 'chicks',
      label: '生活与认识',
      title: '把巢藏进洞里',
      body: '小蓝企鹅会在地洞、岩缝或植被下筑巢。父母分担孵卵与育雏，幼鸟长出适合下水的羽毛后才离巢。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '全球等级与当地处境分开看',
      body: 'BirdLife Australia 将广义小蓝企鹅列为全球无危。新西兰 DOC 的“有风险、正在减少”属于地区评估，范围与全球评估不同；分类拆分后，各物种的种群范围也需分别判断。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '名字中的“小蓝”与分类分歧',
      body: 'J.R.Forster 于 1781 年描述了这个物种，现用学名为 Eudyptula minor。蓝灰色背羽可以对应“小蓝”这个名字。广义 Eudyptula minor 包括澳大利亚南部和新西兰沿岸种群，另一些分类把澳大利亚及奥塔哥部分种群分为 E. novaehollandiae，读分布资料时需要看清采用的范围。',
    },
  ],
  "keyFacts": [
    '短而扁的翅膀在水中推动身体。',
    '背部蓝灰色，腹部白色。',
    '追捕小鱼，也吃鱿鱼和甲壳动物。',
    '常在天暗后上岸。',
    '在洞穴、岩缝或植被下筑巢。',
  ],
  "threats": [
    "犬、猫及鼬类捕食。",
    "近岸渔网误捕、道路死亡和筑巢地破坏。"
  ],
  "conservationActions": [
    "在企鹅海岸管理犬只，远离巢穴。",
    "保护筑巢地，减少近岸误捕。"
  ],
  "featuredStats": [
    {
      "key": "0",
      "label": "观察重点",
      "value": "翅膀和脚"
    },
    {
      "key": "1",
      "label": "取食地点",
      "value": "近岸海水"
    },
    {
      "key": "2",
      "label": "羽毛颜色",
      "value": "蓝灰和白"
    }
  ],
  "sources": [
    {
      "title": "GBIF — 小蓝企鹅分类",
      "url": "https://www.gbif.org/species/2481646",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "New Zealand Birds Online — 小蓝企鹅",
      "url": "https://www.nzbirdsonline.org.nz/species/little-penguin",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "DOC — 小蓝企鹅的生活与地区保护",
      "url": "https://www.doc.govt.nz/korora",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "BirdLife Australia — 广义小企鹅全球等级",
      "url": "https://birdlife.org.au/bird-profiles/little-penguin/",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Birds New Zealand — 企鹅分类处理",
      "url": "https://www.birdsnz.org.nz/society-publications/checklist/sphenisciformes-penguins/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    }
  ],
  "media": {
    "image": "./images/species/little-blue-penguin/01-cover.webp",
    "alt": "小蓝企鹅位于画面右侧的自然栖息环境中。",
    "focalPoint": {
      "x": 0.79,
      "y": 0.39
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/little-blue-penguin/02-observation.webp",
        "title": "翅膀和脚在哪里",
        "alt": "小蓝企鹅站在海岸上，翅膀垂在身体两侧。",
        "caption": "小蓝企鹅站在海岸上，翅膀垂在身体两侧。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/little-blue-penguin/03-observation.webp",
        "title": "蓝背和白肚子",
        "alt": "近景展示小蓝企鹅蓝灰色上体和白色腹部。",
        "caption": "近景展示小蓝企鹅蓝灰色上体和白色腹部。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/little-blue-penguin/04-observation.webp",
        "title": "在水里划动翅膀",
        "alt": "小蓝企鹅在水下展开翅膀游泳。",
        "caption": "小蓝企鹅在水下展开翅膀游泳。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/little-blue-penguin/05-observation.webp",
        "title": "傍晚上岸",
        "alt": "小蓝企鹅在暮色中走过海边湿石。",
        "caption": "小蓝企鹅在暮色中走过海边湿石。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/little-blue-penguin/06-observation.webp",
        "title": "巢边的幼鸟",
        "alt": "成年小蓝企鹅和灰色绒羽幼鸟待在海岸洞口。",
        "caption": "成年小蓝企鹅和灰色绒羽幼鸟待在海岸洞口。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      }
    ]
  },
  "featured": true,
  "publishedAt": "2026-09-09",
  "updatedAt": "2026-09-09"
} as const satisfies Species;

export default profile;
