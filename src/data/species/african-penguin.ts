import type { Species } from '../../types/species.ts';

const profile = {
  "id": "african-penguin",
  "slug": "african-penguin",
  "names": {
    "zh": "非洲企鹅",
    "en": "African Penguin"
  },
  "scientificName": "Spheniscus demersus",
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
      "scientificName": "Spheniscus",
      "zhName": "环企鹅属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "CR",
    "label": {
      "zh": "极危",
      "en": "Critically Endangered"
    },
    "trend": "decreasing",
    "assessor": "依据所列资料的全球等级；独立评估日期未核实"
  },
  "distribution": {
    "realms": [
      "marine",
      "terrestrial"
    ],
    "continents": [
      "非洲"
    ],
    "regions": [
      "非洲南部海岸"
    ],
    "countries": [],
    "range": "在南非和纳米比亚的沿海岛屿及部分大陆海岸繁殖，到近海捕食。"
  },
  "habitats": [
    {
      "name": "温带海岸与近海",
      "realm": "marine",
      "description": '温带海岸的洞穴、岩石和植被提供遮蔽巢址，近海小鱼供亲鸟觅食。繁殖地附近的食物资源与清洁海水影响种群生存。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "height": {
      "min": 55,
      "max": 65,
      "unit": "cm",
      "note": "BirdLife South Africa 所列成鸟站立高度。"
    },
    "weight": {
      "min": 2.9,
      "max": 3.5,
      "unit": "kg",
      "note": "BirdLife South Africa 所列体重范围。"
    }
  },
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "沙丁鱼",
      "鳀鱼"
    ],
    "description": "取食沙丁鱼、鳀鱼。"
  },
  "tags": [
    "非洲企鹅",
    "胸前弯弯的黑带"
  ],
  "summary": "非洲企鹅生活在非洲南部海岸。成鸟白色胸腹上有弯曲的黑带和零散黑点，眼睛上方露出粉红色皮肤。",
  "description": '非洲企鹅在近海捕食沙丁鱼、鳀鱼等小鱼，回岸后在沙滩和岩石间行走。它们在洞穴或岩石、植被遮蔽处筑巢，让卵和幼鸟避开烈日。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '胸前一条黑带',
      body: '成鸟白色胸腹上有弯曲黑带和零散黑点。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '到海里捕鱼',
      body: '非洲企鹅潜进近海，捕食沙丁鱼、鳀鱼等小鱼。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '有遮蔽的巢',
      body: '它们在洞穴或岩石、植被遮蔽处筑巢，让卵和幼鸟避开烈日。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '眼睛上方的粉红色',
      body: '眼睛上方有一块粉红色裸皮，没有羽毛覆盖。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '走上海滩',
      body: '它们从海里回到岸边，在沙滩与岩石间行走。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '非洲企鹅全球属极危，种群正在减少；南非区域评估的濒危等级属于地区评估。保护繁殖地附近的食物资源、减少油污，是保护工作的重点。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '非洲海岸的企鹅',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Spheniscus demersus。非洲企鹅的名字对应南部非洲家园，在南非和纳米比亚繁殖。它们到海里捕食，但巢需要洞穴、岩石或植被遮蔽，能帮助卵和幼鸟避开海岸烈日。',
    },
  ],
  "keyFacts": [
    '成鸟白色胸腹上有弯曲黑带和零散黑点。',
    '非洲企鹅潜进近海，捕食沙丁鱼、鳀鱼等小鱼。',
    '它们在洞穴或岩石、植被遮蔽处筑巢，让卵和幼鸟避开烈日。',
    '眼睛上方有一块粉红色裸皮，没有羽毛覆盖。',
    '它们从海里回到岸边，在沙滩与岩石间行走。',
  ],
  "threats": [
    "食物短缺与渔业竞争",
    "石油污染",
    "繁殖地干扰"
  ],
  "conservationActions": [
    "保护繁殖地周边觅食海域",
    "减少油污并救护受影响个体",
    "保护巢址"
  ],
  "metrics": {
    "adultMassKg": [
      2.9,
      3.5
    ]
  },
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "胸前弯弯的黑带"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "温带海岸与近海"
    }
  ],
  "media": {
    "image": "./images/species/african-penguin/01-cover.webp",
    "alt": "非洲企鹅的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/african-penguin/02-observation.webp",
        "title": "胸前一条黑带",
        "alt": '胸前一条黑带',
        "caption": "AI 生成科学情景重建。顺着白色胸前的黑带看一看，再找找腹部的小黑点。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/african-penguin/03-observation.webp",
        "title": "到海里捕鱼",
        "alt": '到海里捕鱼',
        "caption": "AI 生成科学情景重建。非洲企鹅潜进近海，捕食沙丁鱼和鳀鱼等小鱼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/african-penguin/04-observation.webp",
        "title": "有遮蔽的巢",
        "alt": '有遮蔽的巢',
        "caption": "AI 生成科学情景重建。它们在洞穴或岩石、植被遮蔽处筑巢，让蛋和幼鸟避开烈日。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/african-penguin/05-observation.webp",
        "title": "眼睛上方的粉红色",
        "alt": '眼睛上方的粉红色',
        "caption": "AI 生成科学情景重建。找找眼睛上方的粉红色裸皮。那一小块没有羽毛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/african-penguin/06-observation.webp",
        "title": "走上海滩",
        "alt": '走上海滩',
        "caption": "AI 生成科学情景重建。非洲企鹅从海里游回岸边，在沙滩和岩石间行走。",
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
      "title": "BirdLife South Africa：非洲企鹅全球等级、分类与生态",
      "url": "https://www.birdlife.org.za/red-data-book/red-list/african-penguin/",
      "kind": "conservation",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "SANBI：非洲企鹅的形态与筑巢",
      "url": "https://www.sanbi.org/animal-of-the-week/african-penguin/",
      "kind": "ecology",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "African Penguin：学名与分类",
      "url": "https://www.birdlife.org.za/red-data-book/red-list/african-penguin/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-16"
    },
    {
      title: 'GBIF：Spheniscus demersus 的命名作者与年份',
      url: 'https://www.gbif.org/species/5229384',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-16",
  "updatedAt": "2026-09-16"
} as const satisfies Species;

export default profile;
