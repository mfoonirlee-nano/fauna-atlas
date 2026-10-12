import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-hydrochoerus-hydrochaeris",
  "slug": "capybara",
  "names": {
    "zh": "水豚",
    "en": "Capybara",
    "aliases": []
  },
  "scientificName": "Hydrochoerus hydrochaeris",
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
      "scientificName": "Rodentia",
      "zhName": "啮齿目"
    },
    "family": {
      "scientificName": "Caviidae",
      "zhName": "豚鼠科"
    },
    "genus": {
      "scientificName": "Hydrochoerus",
      "zhName": "水豚属"
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
      "terrestrial",
      "freshwater"
    ],
    "continents": [
      "南美洲"
    ],
    "countries": [
      "巴西",
      "委内瑞拉",
      "乌拉圭",
      "阿根廷"
    ],
    "regions": [
      "南美洲河岸与湿地"
    ],
    "range": "原生于南美洲安第斯山脉以东的许多低地湿地。这里记录 Hydrochoerus hydrochaeris，不把小水豚的中美洲范围并入。",
    "center": {
      "lat": -15,
      "lng": -55
    }
  },
  "habitats": [
    {
      "realm": "terrestrial",
      "name": "河岸草地",
      "description": "在靠水的草地取食和休息。",
      "isPrimary": true
    },
    {
      "realm": "freshwater",
      "name": "河流与池塘",
      "description": "入水游泳、躲避威胁。",
      "isPrimary": false
    }
  ],
  "measurements": {
    "length": {
      "min": 106,
      "max": 134,
      "unit": "cm",
      "note": "ADW 所列成体长度，测量端点未明确，不用于标准化头体长比较。"
    },
    "weight": {
      "min": 35,
      "max": 66,
      "unit": "kg",
      "note": "ADW 所列成体体重范围。"
    }
  },
  "metrics": {
    "adultMassKg": [
      35,
      66
    ]
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草",
      "水生植物"
    ],
    "description": '主要吃草和水生植物，用门齿咬下植物后再咀嚼。'
  },
  "activity": [
    "晨昏活动",
    "群居",
    "游泳"
  ],
  "tags": [
    "水豚",
    "小耳朵"
  ],
  "summary": "水豚是现生体型最大的啮齿动物，会在河岸行走，也会下水游泳。它的眼睛、耳朵和鼻孔位置较高，游泳时可以露出水面。",
  "description": '水豚有粗糙的棕色毛、粗壮身体和短腿，没有明显外露的尾巴。它常结群活动，幼仔出生时已有毛、眼睛睁开，很快便能跟随母亲。',
  "storySections": [
    {
      key: 'face',
      label: '生活与认识',
      title: '圆钝鼻子，小小耳朵',
      body: '它的眼睛、耳朵和鼻孔位置较高，游泳时可以露在水面上。',
    },
    {
      key: 'body',
      label: '生活与认识',
      title: '粗毛下面是圆筒般的身体',
      body: '水豚有粗糙的棕色毛、粗壮身体和短腿，看不到明显的外露尾巴。它是现生体型最大的啮齿动物。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '低头吃草',
      body: '水豚主要吃草和水生植物。它用门齿咬下植物，再咀嚼食物；亲子共读时可以找找贴近草叶的嘴。',
    },
    {
      key: 'water',
      label: '生活与认识',
      title: '鼻子露出水面',
      body: '水豚会游泳，也能潜水。游在水面时，位置较高的鼻孔、眼睛和耳朵仍能露出来。',
    },
    {
      key: 'young',
      label: '生活与认识',
      title: '幼仔跟在成年水豚旁边',
      body: '水豚常结群生活，幼仔出生时已有毛，眼睛睁开，很快就能跟随母亲活动。图中的大小只表示成年与幼年，不作为比例尺。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '给河岸留出草地',
      body: 'IUCN 将本种列为无危；局部过度猎捕仍可能使数量减少。保留湿地与相连的岸边植被，有助于水豚取食和避险。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '会下水的“大啮齿动物”',
      body: 'Linnaeus 于 1766 年描述了这个物种，现用学名为 Hydrochoerus hydrochaeris。水豚是现生体型最大的啮齿动物。它既在岸边吃草，也下水避险，鼻孔、眼睛和耳朵的位置都较高，游在水面时仍能露出来。',
    },
  ],
  "keyFacts": [
    '眼睛、耳朵和鼻孔位置较高。',
    '是现生体型最大的啮齿动物。',
    '主要吃草和水生植物。',
    '会游泳，也能潜水。',
    '幼仔出生时有毛、睁眼，很快能跟随母亲。',
  ],
  "threats": [
    "局部过度猎捕。",
    "湿地转用及河岸植被减少。"
  ],
  "conservationActions": [
    "保留河岸草地与湿地。",
    "远距离观察，不追赶或投喂。"
  ],
  "featuredStats": [
    {
      "key": "0",
      "label": "观察重点",
      "value": "小耳朵"
    },
    {
      "key": "1",
      "label": "主要食物",
      "value": "草和水生植物"
    },
    {
      "key": "2",
      "label": "生活环境",
      "value": "河岸湿地"
    }
  ],
  "sources": [
    {
      "title": "GBIF — 水豚分类",
      "url": "https://www.gbif.org/species/5786666",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Animal Diversity Web — 水豚",
      "url": "https://animaldiversity.org/accounts/Hydrochoerus_hydrochaeris/",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "San Diego Zoo — 水豚",
      "url": "https://zoo.sandiegozoo.org/animals/capybara",
      "kind": "general",
      "accessedAt": "2026-09-09"
    }
  ],
  "media": {
    "image": "./images/species/capybara/01-cover.webp",
    "alt": "水豚位于画面右侧的自然栖息环境中。",
    "focalPoint": {
      "x": 0.75,
      "y": 0.39
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/capybara/02-observation.webp",
        "title": "河岸上的水豚",
        "alt": "水豚站在短草地上，宽嘴鼻、小耳朵和短腿可见。",
        "caption": "水豚站在短草地上，宽嘴鼻、小耳朵和短腿可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/capybara/03-observation.webp",
        "title": "鼻子和耳朵",
        "alt": "近景展示水豚的宽嘴鼻、眼睛与小耳朵。",
        "caption": "近景展示水豚的宽嘴鼻、眼睛与小耳朵。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/capybara/04-observation.webp",
        "title": "低头吃草",
        "alt": "水豚低下头，嘴靠近岸边的草。",
        "caption": "水豚低下头，嘴靠近岸边的草。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/capybara/05-observation.webp",
        "title": "游过水面",
        "alt": "水豚游泳时把鼻孔、眼睛和耳朵露在水面上。",
        "caption": "水豚游泳时把鼻孔、眼睛和耳朵露在水面上。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/capybara/06-observation.webp",
        "title": "成年与幼年",
        "alt": "一只幼年水豚站在成年水豚旁边。",
        "caption": "一只幼年水豚站在成年水豚旁边。",
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
