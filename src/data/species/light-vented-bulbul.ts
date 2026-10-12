import type { Species } from '../../types/species.ts';

const profile = {
  "id": "light-vented-bulbul",
  "slug": "light-vented-bulbul",
  "names": {
    "zh": "白头鹎",
    "en": "Light-vented Bulbul",
    "aliases": [
      "白头翁"
    ]
  },
  "scientificName": "Pycnonotus sinensis",
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
      "scientificName": "Passeriformes",
      "zhName": "雀形目"
    },
    "family": {
      "scientificName": "Pycnonotidae",
      "zhName": "鹎科"
    },
    "genus": {
      "scientificName": "Pycnonotus",
      "zhName": "鹎属"
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
    "assessor": '全球等级为 LC；独立评估年份尚未确认，地区数量变化不代表全球趋势。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "中国多地及东亚、东南亚部分地区"
    ],
    "countries": [],
    "range": "中国多地及东亚、东南亚部分地区；主要见于林缘、灌丛和有树木的公园。"
  },
  "habitats": [
    {
      "name": "林缘、灌丛和有树木的公园",
      "realm": "terrestrial",
      "description": '中国多地及东亚、东南亚部分地区的林缘、灌丛和有树木的公园。',
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
      "昆虫",
      "其他小型无脊椎动物"
    ],
    "description": "食物包括果实、昆虫、其他小型无脊椎动物。"
  },
  "tags": [
    "白头鹎",
    "林缘、灌丛和有树木的公园"
  ],
  "summary": '白头鹎成鸟头后和两侧有白斑，翅羽边缘橄榄绿。它在树木灌丛间吃果实与昆虫，也会结群过夜。',
  "description": '白头鹎在中国多地及东亚、东南亚部分地区的林缘、灌丛和公园活动，吃果实、昆虫等食物。成鸟黑色头顶后方与两侧有白斑，翅羽边缘橄榄绿。白斑范围随亚种和羽毛状态变化，它们也会结群活动、聚集过夜。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '头后的一片白',
      body: '成年白头鹎头顶有黑色，后方和两侧带白色斑块。不同亚种与羽毛状态会影响白色范围。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '枝头吃果子',
      body: '它会在树木和灌丛中吃果实，也捕食昆虫。图中的果实表示取食场景，不作为植物鉴定依据。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '折起来的翅膀',
      body: '停歇时，翅膀折在身体两侧。看看橄榄绿色的羽缘和后方伸出的尾巴。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '枝条间的同伴',
      body: '白头鹎可以结群活动，也会聚集过夜。两只一起停歇不表示它们一定是亲子或配偶。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '浅水里的梳洗',
      body: '鸟会通过沐浴和梳理维护羽毛。看看水滴和羽毛，再从远处观察身边鸟类的日常活动。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '本种的全球保护等级为 LC（无危），独立评估年份尚未确认；某个地区数量的变化不能代表全球趋势。图库主要展示头后白斑明显的成鸟。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“白头”是头后与两侧的白斑',
      body: 'Gmelin 在 1789 年发表了白头鹎的科学描述，今天采用 Pycnonotus sinensis。中文名“白头”可以与成鸟头后和两侧的白斑对应，头顶仍有黑色。它与红耳鹎、乌头翁是不同鸟，白斑范围还会随亚种和羽毛状态变化。',
    },
  ],
  "keyFacts": [
    "成年白头鹎头顶有黑色，后方和两侧带白色斑块。不同亚种与羽毛状态会影响白色范围。",
    "它会在树木和灌丛中吃果实，也捕食昆虫。图中的果实表示取食场景，不作为植物鉴定依据。",
    "停歇时，翅膀折在身体两侧。看看橄榄绿色的羽缘和后方伸出的尾巴。",
    "白头鹎可以结群活动，也会聚集过夜。两只一起停歇不表示它们一定是亲子或配偶。",
    "鸟会通过沐浴和梳理维护羽毛。看看水滴和羽毛，再从远处观察身边鸟类的日常活动。"
  ],
  "threats": [],
  "conservationActions": [
    "观察时不捕捉、不投喂，保留它生活的环境。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "林缘、灌丛和有树木的公园"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "头后的一片白"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "无危",
      "note": "采用 Pycnonotus sinensis；不混同红耳鹎或乌头翁。香港观鸟会列 IUCN 无危，独立评估年份未核实；地区丰度变化不当作全球趋势。图片主要表现头后白斑明显的成鸟。"
    }
  ],
  "media": {
    "image": "./images/species/light-vented-bulbul/01-cover.webp",
    "alt": "白头鹎及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/light-vented-bulbul/02-observation.webp",
        "alt": "白头鹎：头后的一片白",
        "title": "头后的一片白",
        "caption": "AI 生成科学情景重建。成年白头鹎头顶有黑色，后方和两侧带白色斑块。不同亚种与羽毛状态会影响白色范围。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/light-vented-bulbul/03-observation.webp",
        "alt": "白头鹎：枝头吃果子",
        "title": "枝头吃果子",
        "caption": "AI 生成科学情景重建。它会在树木和灌丛中吃果实，也捕食昆虫。图中的果实表示取食场景，不作为植物鉴定依据。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/light-vented-bulbul/04-observation.webp",
        "alt": "白头鹎：折起来的翅膀",
        "title": "折起来的翅膀",
        "caption": "AI 生成科学情景重建。停歇时，翅膀折在身体两侧。看看橄榄绿色的羽缘和后方伸出的尾巴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/light-vented-bulbul/05-observation.webp",
        "alt": "白头鹎：枝条间的同伴",
        "title": "枝条间的同伴",
        "caption": "AI 生成科学情景重建。白头鹎可以结群活动，也会聚集过夜。两只一起停歇不表示它们一定是亲子或配偶。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/light-vented-bulbul/06-observation.webp",
        "alt": "白头鹎：浅水里的梳洗",
        "title": "浅水里的梳洗",
        "caption": "AI 生成科学情景重建。鸟会通过沐浴和梳理维护羽毛。看看水滴和羽毛，再从远处观察身边鸟类的日常活动。",
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
      "title": "香港观鸟会：Chinese Bulbul",
      "url": "https://avifauna.hkbws.org.hk/species/0290/035900",
      "kind": "conservation",
      "accessedAt": "2026-09-24"
    },
    {
      "title": "Cornell eBird：Light-vented Bulbul range",
      "url": "https://science.ebird.org/status-and-trends/species/livbul1/range-map",
      "kind": "distribution",
      "accessedAt": "2026-09-24"
    },
    {
      title: 'GBIF：白头鹎的科学命名记录',
      url: 'https://www.gbif.org/species/2486150',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-24",
  "updatedAt": "2026-09-24"
} as const satisfies Species;

export default profile;
