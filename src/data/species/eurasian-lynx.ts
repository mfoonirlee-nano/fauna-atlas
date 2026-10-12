import type { Species } from '../../types/species.ts';

const profile = {
  "id": "eurasian-lynx",
  "slug": "eurasian-lynx",
  "names": {
    "zh": "欧亚猞猁",
    "en": "Eurasian Lynx"
  },
  "scientificName": "Lynx lynx",
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
      "scientificName": "Felidae",
      "zhName": "猫科"
    },
    "genus": {
      "scientificName": "Lynx",
      "zhName": "猞猁属"
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
    "assessor": "依据所列资料中的全球等级；未单独核实评估日期"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲",
      "亚洲"
    ],
    "regions": [
      "欧洲",
      "西伯利亚",
      "中亚"
    ],
    "countries": [],
    "range": "分布于欧洲至亚洲的适宜生境，包括西伯利亚森林和中亚山地；一些欧洲种群彼此隔离。"
  },
  "habitats": [
    {
      "name": "森林与山地灌丛",
      "realm": "terrestrial",
      "description": '森林和山地灌丛提供猎物与隐蔽位置。冬季雪地中的猞猁用宽脚掌分散重量，草木也帮助它隐蔽接近猎物。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "狍等有蹄类",
      "野兔",
      "鸟"
    ],
    "description": "主要捕食中小型有蹄类，也会取食野兔和鸟；不同地区的食物组成不同。"
  },
  "tags": [
    "欧亚猞猁",
    "黑尖短尾巴"
  ],
  "summary": "欧亚猞猁有长腿、宽脚掌和耳尖的黑色长毛，短尾末端也是黑色。身上斑纹随个体和地区而变化。",
  "description": '欧亚猞猁常独自活动，借草木掩护接近有蹄类、野兔和鸟。冬季脚掌上的毛更密，宽脚掌帮助它在雪中行走；幼崽跟随母亲生活，长大后寻找自己的活动区域。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '短尾巴在哪里',
      body: '尾巴很短，末端呈黑色。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '耳尖的黑色长毛',
      body: '两只耳朵尖端各有竖起的黑色长毛。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '宽脚掌走过雪地',
      body: '冬季脚掌上的毛更密，宽脚掌帮助它在雪中行走。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '藏在林地里',
      body: '欧亚猞猁通常独自活动，借助草木掩护接近猎物。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '林间的小猞猁',
      body: '幼崽跟随母亲生活，长大后离开，寻找自己的活动区域。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为无危，一些欧洲孤立种群仍受威胁。连接森林、减少道路伤害和非法捕猎，有助于保护猞猁。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '短尾与宽脚掌',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Lynx lynx。欧亚猞猁的短尾有黑色末端，耳尖长着黑毛，身上的斑纹却随个体和地区变化。冬季脚掌的毛更密，宽脚掌帮助这只长腿猫在雪中行走。',
    },
  ],
  "keyFacts": [
    '尾巴很短，末端呈黑色。',
    '两只耳朵尖端各有竖起的黑色长毛。',
    '冬季脚掌上的毛更密，宽脚掌帮助它在雪中行走。',
    '欧亚猞猁通常独自活动，借助草木掩护接近猎物。',
    '幼崽跟随母亲生活，长大后离开，寻找自己的活动区域。',
  ],
  "threats": [
    "栖息地破碎化",
    "非法捕猎",
    "道路伤害"
  ],
  "conservationActions": [
    "连接森林生境",
    "减少非法捕猎",
    "改善家畜防护"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "黑尖短尾巴"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "森林与山地灌丛"
    }
  ],
  "media": {
    "image": "./images/species/eurasian-lynx/01-cover.webp",
    "alt": "欧亚猞猁的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/eurasian-lynx/02-observation.webp",
        "title": "短尾巴在哪里",
        "alt": '短尾巴在哪里',
        "caption": "AI 生成科学情景重建。沿着背部往后看，找找末端黑黑的短尾巴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-lynx/03-observation.webp",
        "title": "耳尖的黑色长毛",
        "alt": '耳尖的黑色长毛',
        "caption": "AI 生成科学情景重建。看看两只耳朵上竖起来的黑色毛簇。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-lynx/04-observation.webp",
        "title": "宽脚掌走过雪地",
        "alt": '宽脚掌走过雪地',
        "caption": "AI 生成科学情景重建。冬季脚掌上的毛更密，能帮助猞猁在雪中行走。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-lynx/05-observation.webp",
        "title": "藏在林地里",
        "alt": '藏在林地里',
        "caption": "AI 生成科学情景重建。猞猁通常独自活动，会借助草木掩护接近猎物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-lynx/06-observation.webp",
        "title": "林间的小猞猁",
        "alt": '林间的小猞猁',
        "caption": "AI 生成科学情景重建。幼崽会跟随母亲生活，长大后离开，寻找自己的活动区域。",
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
      "title": "IUCN 猫科专家组：欧亚猞猁",
      "url": "https://www.catsg.org/living-species-eurasianlynx",
      "kind": "taxonomy",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "IUCN 猫科专家组：生态与全球等级",
      "url": "https://www.catsg.org/living-species-eurasianlynx",
      "kind": "conservation",
      "accessedAt": "2026-09-15"
    },
    {
      title: 'GBIF：Lynx lynx 的命名作者与年份',
      url: 'https://www.gbif.org/species/2435240',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-15",
  "updatedAt": "2026-09-15"
} as const satisfies Species;

export default profile;
