import type { Species } from '../../types/species.ts';

const profile = {
  "id": "maned-wolf",
  "slug": "maned-wolf",
  "names": {
    "zh": "鬃狼",
    "en": "Maned Wolf"
  },
  "scientificName": "Chrysocyon brachyurus",
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
      "scientificName": "Canidae",
      "zhName": "犬科"
    },
    "genus": {
      "scientificName": "Chrysocyon",
      "zhName": "鬃狼属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "NT",
    "label": {
      "zh": "近危",
      "en": "Near Threatened"
    },
    "trend": "unknown",
    "assessor": '全球等级为 NT（近危）；独立评估日期与种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "南美洲"
    ],
    "regions": [
      "南美洲中东部的塞拉多草原与灌丛"
    ],
    "countries": [
      "巴西",
      "玻利维亚",
      "巴拉圭",
      "阿根廷"
    ],
    "range": "南美洲中东部的塞拉多草原与灌丛。列出的国家为代表性分布地，不是完整名录。"
  },
  "habitats": [
    {
      "name": "南美洲中东部的塞拉多草原与灌丛",
      "realm": "terrestrial",
      "description": "南美洲中东部的塞拉多草原与灌丛。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "果实",
      "小型哺乳动物",
      "昆虫"
    ],
    "description": "主要取食果实、小型哺乳动物、昆虫。"
  },
  "tags": [
    "鬃狼",
    "高草里的长腿"
  ],
  "summary": '鬃狼用长腿穿过南美洲高草，常独自活动。脖子后的深色鬃毛很醒目，它既吃小动物，也吃狼果等果实。',
  "description": '鬃狼生活在南美洲中东部的塞拉多草原和灌丛，常在黄昏、夜间独自寻找食物。长腿把身体抬出高草，大耳朵能转动，听草丛中小动物的动静。它吃小动物，也吃当地称为狼果的植物果实。红褐色身体上有深色鬃毛，喉部和尾端有白毛。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '高草里的长腿',
      body: '鬃狼用长腿穿过高草，也能把头抬到草丛上方观察周围。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '转动大耳朵',
      body: '它会转动竖起的大耳朵，听草丛里小动物的动静。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '也会吃果子',
      body: '鬃狼吃小动物，也吃果实，包括当地称为狼果的植物果实。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '黄昏出来走走',
      body: '它常在黄昏和夜间活动，通常独自寻找食物。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '脖子后的黑鬃毛',
      body: '红褐色身体上有一片深色鬃毛，喉部和尾端则有白毛。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保护塞拉多原生植被，让道路为野生动物保留通行空间。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '名字里的鬃毛',
      body: 'Illiger 在 1815 年发表了鬃狼的科学描述，今天常用 Chrysocyon brachyurus。中文名中的“鬃”可以对应到脖子后的深色长毛。它的食物也值得留意：这只外形高挑的犬科动物除了捕捉小动物，还会吃当地称为狼果的果实。',
    },
  ],
  "keyFacts": [
    "鬃狼用长腿穿过高草，也能把头抬到草丛上方观察周围。",
    "它会转动竖起的大耳朵，听草丛里小动物的动静。",
    "鬃狼吃小动物，也吃果实，包括当地称为狼果的植物果实。",
    "它常在黄昏和夜间活动，通常独自寻找食物。",
    "红褐色身体上有一片深色鬃毛，喉部和尾端则有白毛。"
  ],
  "threats": [
    "草原转为农地",
    "道路碰撞",
    "家犬传播疾病"
  ],
  "conservationActions": [
    "保护塞拉多原生植被，让道路为野生动物保留通行空间。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "高草里的长腿"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "南美洲中东部的塞拉多草原与灌丛"
    }
  ],
  "media": {
    "image": "./images/species/maned-wolf/01-cover.webp",
    "alt": "鬃狼在自然栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/maned-wolf/02-observation.webp",
        "title": "高草里的长腿",
        "alt": "鬃狼：高草里的长腿",
        "caption": "AI 生成科学情景重建。鬃狼用长腿穿过高草，也能把头抬到草丛上方观察周围。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/maned-wolf/03-observation.webp",
        "title": "转动大耳朵",
        "alt": "鬃狼：转动大耳朵",
        "caption": "AI 生成科学情景重建。它会转动竖起的大耳朵，听草丛里小动物的动静。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/maned-wolf/04-observation.webp",
        "title": "也会吃果子",
        "alt": "鬃狼：也会吃果子",
        "caption": "AI 生成科学情景重建。鬃狼吃小动物，也吃果实，包括当地称为狼果的植物果实。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/maned-wolf/05-observation.webp",
        "title": "黄昏出来走走",
        "alt": "鬃狼：黄昏出来走走",
        "caption": "AI 生成科学情景重建。它常在黄昏和夜间活动，通常独自寻找食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/maned-wolf/06-observation.webp",
        "title": "脖子后的黑鬃毛",
        "alt": "鬃狼：脖子后的黑鬃毛",
        "caption": "AI 生成科学情景重建。红褐色身体上有一片深色鬃毛，喉部和尾端则有白毛。",
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
      "title": "史密森国家动物园：自然史与近危状态",
      "url": "https://nationalzoo.si.edu/animals/maned-wolf",
      "kind": "conservation",
      "accessedAt": "2026-09-20"
    },
    {
      title: 'GBIF：鬃狼的科学命名记录',
      url: 'https://www.gbif.org/species/2434450',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-20",
  "updatedAt": "2026-09-20"
} as const satisfies Species;

export default profile;
