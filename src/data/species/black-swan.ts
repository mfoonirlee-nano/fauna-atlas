import type { Species } from '../../types/species.ts';

const profile = {
  "id": "black-swan",
  "slug": "black-swan",
  "names": {
    "zh": "黑天鹅",
    "en": "Black Swan"
  },
  "scientificName": "Cygnus atratus",
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
      "scientificName": "Anseriformes",
      "zhName": "雁形目"
    },
    "family": {
      "scientificName": "Anatidae",
      "zhName": "鸭科"
    },
    "genus": {
      "scientificName": "Cygnus",
      "zhName": "天鹅属"
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
    "assessor": "依据所列资料的全球等级；独立评估日期未核实"
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "大洋洲"
    ],
    "regions": [
      "澳大利亚"
    ],
    "countries": [],
    "range": "原生于澳大利亚，在南部较常见；新西兰等地有引入种群。生活于淡水、咸淡水及部分咸水湿地。"
  },
  "habitats": [
    {
      "name": "湖泊、河口与湿地",
      "realm": "freshwater",
      "description": '湖泊、河口和湿地提供水草、藻类与岸边草叶。黑天鹅利用淡水、咸淡水和部分咸水湿地。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 120,
      "max": 142,
      "unit": "cm"
    }
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "水草",
      "藻类",
      "岸边草叶"
    ],
    "description": "取食水草、藻类、岸边草叶。"
  },
  "tags": [
    "黑天鹅",
    "红嘴和长脖子"
  ],
  "summary": "黑天鹅大部分羽毛黑色，展翅时才露出白色飞羽。它脖子长，红色嘴尖附近有一道窄白纹。",
  "description": '黑天鹅伸长脖子在水下取食水草与藻类，也到岸上吃草，弯颈用喙整理羽毛。灰色雏鸟孵出不久就能游泳，成长后才有成鸟的深色羽衣。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '红嘴和长脖子',
      body: '黑天鹅有长颈和红喙，喙尖附近有窄白纹。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '黑翅膀里的白羽毛',
      body: '大部分羽毛黑色，展开翅膀时露出白色飞羽。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '伸长脖子吃水草',
      body: '长颈伸入水中取食水草和藻类，有时到岸上吃草。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '灰色的小天鹅',
      body: '灰色绒羽雏鸟孵出不久就能游泳。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '整理羽毛',
      body: '黑天鹅弯过长颈，用喙整理背羽。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '留住它的生活环境',
      body: '黑天鹅全球属无危。湿地的植物食物和清洁水体提供生活条件，观察时应留出活动空间。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '黑色羽衣之中，还有白色飞羽',
      body: 'Latham 于 1790 年描述了这个物种，现用学名为 Cygnus atratus。黑天鹅原生于澳大利亚，名称对应大部分黑色羽毛，展开翅膀时却能看到白色飞羽。刚孵出的雏鸟也没有全黑羽衣，而是灰色绒羽，孵出不久就能游泳。',
    },
  ],
  "keyFacts": [
    '黑天鹅有长颈和红喙，喙尖附近有窄白纹。',
    '大部分羽毛黑色，展开翅膀时露出白色飞羽。',
    '长颈伸入水中取食水草和藻类，有时到岸上吃草。',
    '灰色绒羽雏鸟孵出不久就能游泳。',
    '黑天鹅弯过长颈，用喙整理背羽。',
  ],
  "threats": [
    "局地栖息环境改变与人为干扰"
  ],
  "conservationActions": [
    "保护湿地与岸边植被",
    "远距离观察，不投喂"
  ],
  "metrics": {
    "adultLengthCm": [
      120,
      142
    ]
  },
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "红嘴和长脖子"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "湖泊、河口与湿地"
    }
  ],
  "media": {
    "image": "./images/species/black-swan/01-cover.webp",
    "alt": "黑天鹅的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/black-swan/02-observation.webp",
        "title": "红嘴和长脖子",
        "alt": '红嘴和长脖子',
        "caption": "AI 生成科学情景重建。顺着弯弯的脖子找到红嘴，再看看嘴尖附近的白色窄纹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-swan/03-observation.webp",
        "title": "黑翅膀里的白羽毛",
        "alt": '黑翅膀里的白羽毛',
        "caption": "AI 生成科学情景重建。黑天鹅也有白色飞羽。翅膀伸展开时，这片白色更容易看见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-swan/04-observation.webp",
        "title": "伸长脖子吃水草",
        "alt": '伸长脖子吃水草',
        "caption": "AI 生成科学情景重建。它把长脖子伸入水中取食水草和藻类，有时也在岸上吃草。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-swan/05-observation.webp",
        "title": "灰色的小天鹅",
        "alt": '灰色的小天鹅',
        "caption": "AI 生成科学情景重建。雏鸟披着灰色绒羽，刚孵出不久就能游泳。看看它们和成鸟的颜色差别。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-swan/06-observation.webp",
        "title": "整理羽毛",
        "alt": '整理羽毛',
        "caption": "AI 生成科学情景重建。它弯过脖子，用嘴整理背上的羽毛。图片只展示一个姿势。",
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
      "title": "澳大利亚博物馆：黑天鹅",
      "url": "https://australian.museum/learn/animals/birds/black-swan/",
      "kind": "ecology",
      "accessedAt": "2026-09-17"
    },
    {
      "title": "BirdLife Australia：黑天鹅全球等级",
      "url": "https://birdlife.org.au/bird-profiles/black-swan/",
      "kind": "conservation",
      "accessedAt": "2026-09-17"
    },
    {
      title: 'GBIF：Cygnus atratus 的命名作者与年份',
      url: 'https://www.gbif.org/species/2498344',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-17",
  "updatedAt": "2026-09-17"
} as const satisfies Species;

export default profile;
