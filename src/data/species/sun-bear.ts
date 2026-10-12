import type { Species } from '../../types/species.ts';

const profile = {
  "id": "sun-bear",
  "slug": "sun-bear",
  "names": {
    "zh": "马来熊",
    "en": "Sun Bear"
  },
  "scientificName": "Helarctos malayanus",
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
      "scientificName": "Ursidae",
      "zhName": "熊科"
    },
    "genus": {
      "scientificName": "Helarctos",
      "zhName": "马来熊属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "VU",
    "label": {
      "zh": "易危",
      "en": "Vulnerable"
    },
    "trend": "decreasing",
    "assessor": "依据所列资料中的全球等级；未单独核实评估日期"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "热带森林"
    ],
    "countries": [],
    "range": "分布于东南亚及邻近地区的热带森林，包括苏门答腊和婆罗洲。"
  },
  "habitats": [
    {
      "name": "热带森林",
      "realm": "terrestrial",
      "description": '热带森林中的树木能供马来熊攀爬和休息，也提供果实。朽木和其他藏有昆虫的位置提供取食机会。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "蚂蚁和白蚁",
      "果实",
      "蜂蜜"
    ],
    "description": "杂食，取食昆虫、果实和蜂蜜等。"
  },
  "tags": [
    "马来熊",
    "胸前浅色的花纹"
  ],
  "summary": "马来熊体型小，黑色短毛之间有浅色胸斑，每只的斑形不同。它常爬树取食或休息。",
  "description": '马来熊用弯爪攀树，在树上取食或休息。它还能伸出长舌舔取昆虫和蜂蜜，果实也在食谱中；浅色胸斑的形状因个体而异。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '胸前的浅色弯纹',
      body: '黑色胸口上有浅色弯纹，不同个体的胸斑形状有差异。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '爪子抓住树干',
      body: '马来熊用弯爪抓住树干，前后脚配合攀爬。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '伸出长舌头',
      body: '长舌能舔取昆虫或蜂蜜，也能伸入朽木中的取食位置。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '地上的果实',
      body: '果实是马来熊食物的一部分。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '树枝上休息',
      body: '马来熊能把身体放在树枝上休息。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为易危。森林减少、盗猎和非法宠物贸易威胁马来熊；保护森林并支持救护与野外保护工作有助于减少这些压力。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '胸斑让人联想到太阳',
      body: 'Raffles 于 1822 年描述了这个物种，现用学名为 Helarctos malayanus。马来熊原生于东南亚热带森林，胸前浅色斑纹的形状因个体而异。除了攀树，它还会用长舌舔取昆虫和蜂蜜，短毛下的弯爪则帮助抓住树皮。英文名 Sun Bear 来自胸前浅色的马蹄形斑纹，被比作升起或落下的太阳。它也有“蜜熊”的称呼，长舌有助于舔取蜂巢中的蜂蜜。',
    },
  ],
  "keyFacts": [
    '黑色胸口上有浅色弯纹，不同个体的胸斑形状有差异。',
    '马来熊用弯爪抓住树干，前后脚配合攀爬。',
    '长舌能舔取昆虫或蜂蜜，也能伸入朽木中的取食位置。',
    '果实是马来熊食物的一部分。',
    '马来熊能把身体放在树枝上休息。',
  ],
  "threats": [
    "森林丧失",
    "盗猎",
    "非法宠物贸易"
  ],
  "conservationActions": [
    "保护热带森林",
    "打击非法捕捉",
    "支持救护与野外监测"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "胸前浅色的花纹"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "热带森林"
    }
  ],
  "media": {
    "image": "./images/species/sun-bear/01-cover.webp",
    "alt": "马来熊的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/sun-bear/02-observation.webp",
        "title": "胸前的浅色弯纹",
        "alt": '胸前的浅色弯纹',
        "caption": "AI 生成科学情景重建。在黑色胸口找找浅色花纹，看看弯曲的形状。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sun-bear/03-observation.webp",
        "title": "爪子抓住树干",
        "alt": '爪子抓住树干',
        "caption": "AI 生成科学情景重建。马来熊能用弯爪攀爬，看看前脚和后脚落在哪里。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sun-bear/04-observation.webp",
        "title": "伸出长舌头",
        "alt": '伸出长舌头',
        "caption": "AI 生成科学情景重建。它能用长舌头舔取昆虫或蜂蜜，图中展示在朽木处取食的情景。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sun-bear/05-observation.webp",
        "title": "地上的果实",
        "alt": '地上的果实',
        "caption": "AI 生成科学情景重建。马来熊也吃果实，找找嘴边的食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sun-bear/06-observation.webp",
        "title": "树枝上休息",
        "alt": '树枝上休息',
        "caption": "AI 生成科学情景重建。看看它把身体放在树枝上的姿势。树木也为它提供休息的地方。",
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
      "title": "ASM Mammal Diversity Database：马来熊",
      "url": "https://www.mammaldiversity.org/taxon/1005932/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "婆罗洲马来熊保育中心：马来熊资料",
      "url": "https://www.bsbcc.org.my/sun-bear-facts",
      "kind": "ecology",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "圣迭戈动物园：马来熊",
      "url": "https://animals.sandiegozoo.org/animals/sun-bear",
      "kind": "ecology",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "婆罗洲马来熊保育中心：全球等级与威胁",
      "url": "https://www.bsbcc.org.my/sun-bear-facts",
      "kind": "conservation",
      "accessedAt": "2026-09-15"
    },
    {
      title: 'GBIF：Helarctos malayanus 的命名作者与年份',
      url: 'https://www.gbif.org/species/2433403',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-15",
  "updatedAt": "2026-09-15"
} as const satisfies Species;

export default profile;
