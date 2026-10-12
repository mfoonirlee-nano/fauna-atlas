import type { Species } from '../../types/species.ts';

const profile = {
  "id": "wolverine",
  "slug": "wolverine",
  "names": {
    "zh": "狼獾",
    "en": "Wolverine"
  },
  "scientificName": "Gulo gulo",
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
      "scientificName": "Mustelidae",
      "zhName": "鼬科"
    },
    "genus": {
      "scientificName": "Gulo",
      "zhName": "狼獾属"
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
      "北美洲",
      "欧洲",
      "亚洲"
    ],
    "regions": [
      "北美洲北部",
      "欧洲北部",
      "亚洲北部"
    ],
    "countries": [],
    "range": "生活在北美洲和欧亚大陆北部的寒冷地区，也出现在高山环境。需要面积较大、干扰较少的栖息地。"
  },
  "habitats": [
    {
      "name": "寒带森林与苔原",
      "realm": "terrestrial",
      "description": '寒带森林、苔原和高山提供觅食空间。狼獾需要面积较大、干扰较少的环境，宽脚掌帮助它在积雪上移动。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "哺乳动物",
      "鸟类和卵",
      "动物尸体"
    ],
    "description": "会捕食，也会寻找其他动物留下的尸体，并储藏食物。"
  },
  "tags": [
    "狼獾",
    "宽宽的脚掌"
  ],
  "summary": "狼獾是身体结实、腿短有力的鼬科动物。宽脚掌能分散体重，帮助它在积雪上行走。",
  "description": '狼獾的深褐毛皮常有浅色侧带，尾巴蓬松。它用嗅觉寻找猎物和动物尸体，还会储藏食物；大多在地面活动，也能够攀爬。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '宽脚掌踩在雪上',
      body: '狼獾属于鼬科，腿短有力，宽脚掌能分散体重，帮助它在积雪上行走。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '身体侧面的浅色带',
      body: '深褐色身体侧面常有从肩部延向尾部的浅色毛带。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '圆圆的小耳朵',
      body: '狼獾有小圆耳朵和深色鼻子。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '低下头闻一闻',
      body: '它用嗅觉寻找食物，会在地面和树根附近嗅闻。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '爬上倒下的树',
      body: '狼獾大多在地面活动，也能用四肢支撑身体攀爬。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '狼獾全球属无危，部分地区仍受栖息地变化和捕猎影响。全球等级不能代替对当地种群的评估。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '名字带“狼”，分类属于鼬科',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Gulo gulo。狼獾的分类属于鼬科，有结实身体和短而有力的腿。它既捕猎，也寻找动物尸体并储藏食物；北方雪地里的宽脚掌能分散体重，帮助它行走。',
    },
  ],
  "keyFacts": [
    '狼獾属于鼬科，腿短有力，宽脚掌能分散体重，帮助它在积雪上行走。',
    '深褐色身体侧面常有从肩部延向尾部的浅色毛带。',
    '狼獾有小圆耳朵和深色鼻子。',
    '它用嗅觉寻找食物，会在地面和树根附近嗅闻。',
    '狼獾大多在地面活动，也能用四肢支撑身体攀爬。',
  ],
  "threats": [
    "栖息地破碎化",
    "捕猎和陷阱",
    "积雪环境变化"
  ],
  "conservationActions": [
    "保护连续栖息地",
    "减少陷阱伤害",
    "监测积雪与种群变化"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "宽宽的脚掌"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "寒带森林与苔原"
    }
  ],
  "media": {
    "image": "./images/species/wolverine/01-cover.webp",
    "alt": "狼獾的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/wolverine/02-observation.webp",
        "title": "宽脚掌踩在雪上",
        "alt": '宽脚掌踩在雪上',
        "caption": "AI 生成科学情景重建。找找宽宽的脚掌。它能分散身体重量，帮助狼獾在雪上行走。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/wolverine/03-observation.webp",
        "title": "身体侧面的浅色带",
        "alt": '身体侧面的浅色带',
        "caption": "AI 生成科学情景重建。沿着身体侧面，找找从肩部延向尾部的浅色毛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/wolverine/04-observation.webp",
        "title": "圆圆的小耳朵",
        "alt": '圆圆的小耳朵',
        "caption": "AI 生成科学情景重建。看看头顶两侧的小圆耳朵，再找找深色的鼻子。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/wolverine/05-observation.webp",
        "title": "低下头闻一闻",
        "alt": '低下头闻一闻',
        "caption": "AI 生成科学情景重建。狼獾用嗅觉寻找食物，会在地面和树根附近嗅闻。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/wolverine/06-observation.webp",
        "title": "爬上倒下的树",
        "alt": '爬上倒下的树',
        "caption": "AI 生成科学情景重建。狼獾大多在地面活动，也能攀爬。看看它怎样用四肢支撑身体。",
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
      "title": "Wolverine：分类与生态资料",
      "url": "https://animaldiversity.org/accounts/Gulo_gulo/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "Wolverine：保护状况",
      "url": "https://animaldiversity.org/accounts/Gulo_gulo/",
      "kind": "conservation",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "狼獾：形态与生活习性",
      "url": "https://animaldiversity.org/accounts/Gulo_gulo/",
      "kind": "ecology",
      "accessedAt": "2026-09-16"
    },
    {
      title: 'GBIF：Gulo gulo 的命名作者与年份',
      url: 'https://www.gbif.org/species/5219073',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-16",
  "updatedAt": "2026-09-16"
} as const satisfies Species;

export default profile;
