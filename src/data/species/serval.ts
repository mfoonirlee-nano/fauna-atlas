import type { Species } from '../../types/species.ts';

const profile = {
  "id": "serval",
  "slug": "serval",
  "names": {
    "zh": "薮猫",
    "en": "Serval"
  },
  "scientificName": "Leptailurus serval",
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
      "scientificName": "Leptailurus",
      "zhName": "薮猫属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "trend": "stable",
    "assessor": "依据所列资料中的全球等级；未单独核实评估日期"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "非洲"
    ],
    "regions": [
      "湿润草地、芦苇地与河岸"
    ],
    "countries": [],
    "range": "主要分布于撒哈拉以南非洲的适宜生境，北非另有孤立种群记录。"
  },
  "habitats": [
    {
      "name": "湿润草地、芦苇地与河岸",
      "realm": "terrestrial",
      "description": '湿润草地、芦苇地和河岸提供小动物与遮蔽。薮猫用大耳朵听声，长腿支撑它在草间走动和跃起捕猎。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鼠类",
      "鸟",
      "蛙",
      "昆虫"
    ],
    "description": "主要捕食小型哺乳动物，也捕食鸟等小动物。"
  },
  "tags": [
    "薮猫",
    "长腿和大耳朵"
  ],
  "summary": "薮猫腿长、头小、耳朵大，尾巴相对较短。身侧有黑色斑点，颈肩部的斑纹常连成条纹。",
  "description": '薮猫用听觉寻找草中的小动物，定位后跃起扑击。它主要吃小型哺乳动物，也捕鸟等动物，常在湿润草地与河岸活动；幼猫也有黑斑和大耳朵。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '草丛上方的大耳朵',
      body: '薮猫用听觉寻找草里的小动物，耳朵能朝不同方向转动。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '长腿走过草地',
      body: '四条长腿支撑修长身体，让它在草地走动。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '跃起再扑下',
      body: '薮猫寻找猎物时会跃起，随后向下扑击。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '水边的草地',
      body: '薮猫常在湿润草地和河岸活动。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '草丛里的幼猫',
      body: '幼猫也有黑色斑点和大耳朵，能够藏身草间。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为无危，北非种群处境更严峻。湿地退化、道路伤害和捕猎威胁薮猫；保护湿润草地有助于保留它的食物与藏身处。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '大耳朵定位，长腿跃起',
      body: 'Schreber 于 1776 年描述了这个物种，现用学名为 Leptailurus serval。薮猫的耳朵很大，能帮助它寻找草里发声的小动物。长腿则让它在草间移动，找到猎物后跃起扑击，耳朵与腿都和这种捕猎方式有关。',
    },
  ],
  "keyFacts": [
    '薮猫用听觉寻找草里的小动物，耳朵能朝不同方向转动。',
    '四条长腿支撑修长身体，让它在草地走动。',
    '薮猫寻找猎物时会跃起，随后向下扑击。',
    '薮猫常在湿润草地和河岸活动。',
    '幼猫也有黑色斑点和大耳朵，能够藏身草间。',
  ],
  "threats": [
    "湿地与草地退化",
    "道路伤害",
    "捕猎"
  ],
  "conservationActions": [
    "保护湿地和草地",
    "减少道路伤害",
    "减少捕猎"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "长腿和大耳朵"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "湿润草地、芦苇地与河岸"
    }
  ],
  "media": {
    "image": "./images/species/serval/01-cover.webp",
    "alt": "薮猫的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/serval/02-observation.webp",
        "title": "草丛上方的大耳朵",
        "alt": '草丛上方的大耳朵',
        "caption": "AI 生成科学情景重建。薮猫用听觉寻找草里的小动物，找找它朝向不同方向的耳朵。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/serval/03-observation.webp",
        "title": "长腿走过草地",
        "alt": '长腿走过草地',
        "caption": "AI 生成科学情景重建。看看身体下面的四条长腿。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/serval/04-observation.webp",
        "title": "跃起再扑下",
        "alt": '跃起再扑下',
        "caption": "AI 生成科学情景重建。薮猫寻找猎物时会跃起扑击，图片展示其中一个姿势。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/serval/05-observation.webp",
        "title": "水边的草地",
        "alt": '水边的草地',
        "caption": "AI 生成科学情景重建。在图中找找草和水。薮猫常在湿润草地和河岸活动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/serval/06-observation.webp",
        "title": "草丛里的幼猫",
        "alt": '草丛里的幼猫',
        "caption": "AI 生成科学情景重建。找找藏在草间的幼猫，它也有黑色斑点和大耳朵。",
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
      "title": "IUCN 猫科专家组：薮猫分类",
      "url": "https://www.catsg.org/living-species-serval",
      "kind": "taxonomy",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "IUCN 猫科专家组：薮猫生态",
      "url": "https://www.catsg.org/living-species-serval",
      "kind": "ecology",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "IUCN 猫科专家组：薮猫全球等级",
      "url": "https://www.catsg.org/living-species-serval",
      "kind": "conservation",
      "accessedAt": "2026-09-15"
    },
    {
      title: 'GBIF：Leptailurus serval 的命名作者与年份',
      url: 'https://www.gbif.org/species/2435172',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-15",
  "updatedAt": "2026-09-15"
} as const satisfies Species;

export default profile;
