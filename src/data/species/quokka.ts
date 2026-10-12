import type { Species } from '../../types/species.ts';

const profile = {
  "id": "quokka",
  "slug": "quokka",
  "names": {
    "zh": "短尾矮袋鼠",
    "en": "Quokka",
    "aliases": [
      "短尾袋鼠"
    ]
  },
  "scientificName": "Setonix brachyurus",
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
      "scientificName": "Diprotodontia",
      "zhName": "双门齿目"
    },
    "family": {
      "scientificName": "Macropodidae",
      "zhName": "袋鼠科"
    },
    "genus": {
      "scientificName": "Setonix",
      "zhName": "短尾矮袋鼠属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "VU",
    "label": {
      "zh": "易危",
      "en": "Vulnerable"
    },
    "trend": "unknown",
    "assessor": "IUCN（由 Australian Museum 转引）"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "大洋洲"
    ],
    "regions": [
      "西澳大利亚西南部",
      "罗特尼斯岛",
      "鲍尔德岛"
    ],
    "countries": [
      "澳大利亚"
    ],
    "range": "仅原生于西澳大利亚西南部，包括大陆上的零散种群、罗特尼斯岛和鲍尔德岛。地图标记代表西南部沿海，不表示澳大利亚全境都有分布。",
    "center": {
      "lat": -32,
      "lng": 115.5
    }
  },
  "habitats": [
    {
      "name": "灌丛与溪流边密生植被",
      "realm": "terrestrial",
      "description": "大陆种群常利用溪流和湿地附近的密生植被，岛上也生活在沿海灌丛中。",
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 40,
      "max": 54,
      "unit": "cm",
      "note": "身体长度，不含约 25–31 厘米的尾巴。"
    }
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草",
      "嫩叶",
      "植物茎"
    ],
    "description": "短尾矮袋鼠吃草和多种植物的叶、茎等部位，偏爱新长出的嫩枝叶。"
  },
  "tags": [
    "短尾矮袋鼠",
    "大后脚和小前爪"
  ],
  "summary": "短尾矮袋鼠有圆耳朵和较大的后脚，属于袋鼠科。坐着时前爪靠近胸前，向前跳跃时会伸展后腿。",
  "description": '短尾矮袋鼠有灰褐色厚毛、圆耳和毛较稀的短尾。它主要夜间吃植物，白天利用密生灌丛休息，大后脚帮助身体向前跳跃。',
  "storySections": [
    {
      key: 'feet',
      label: '生活与认识',
      title: '后脚比前爪大',
      body: '短尾矮袋鼠属于袋鼠科。它有圆耳朵、粗厚的灰褐色毛和较大的后脚。坐着时，前爪靠近胸前，后脚贴着地面。',
    },
    {
      key: 'hopping',
      label: '生活与认识',
      title: '弯下腿，向前跳',
      body: '它会用跳跃等步态移动。两张动作图分别呈现屈腿和离地的姿势，可以先找后脚，再看看身体离地的位置。这是分别生成的动作示意，不是连续实拍。',
    },
    {
      key: 'tail',
      label: '生活与认识',
      title: '尾巴细细一条',
      body: '它的尾巴相对较短，毛也比身上稀少。沿着后背向下看，可以找到伸在身体后方的尾巴；不要把它认成毛茸茸的松鼠尾巴。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '伸嘴吃嫩叶',
      body: '短尾矮袋鼠吃植物，喜欢嫩叶等新生部分。看取食图时，可以指一指嘴边的叶子。它在野外自行寻找食物，不需要游客喂零食。',
    },
    {
      key: 'shelter',
      label: '生活与认识',
      title: '在灌丛中藏身',
      body: '它多在夜间觅食，白天利用密生植被休息，也会在灌丛间走出小径。照片里看似上扬的嘴角不能证明它正在开心，观察时可以描述耳朵、嘴巴和动作。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '保留可以藏身的灌丛',
      body: '短尾矮袋鼠的全球 IUCN 等级为易危。栖地减少和引入的捕食者威胁大陆种群。保护植被、管理引入的狐狸等捕食者，有助于它们在原生地生活。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '短尾和大后脚的袋鼠亲属',
      body: 'Quoy & Gaimard 于 1830 年描述了这个物种，现用学名为 Setonix brachyurus。相对较短的尾巴毛较稀，大后脚帮助它向前跳。它的嘴角外形常让游客联想到笑容，观察动物时仍需看姿态与活动，单靠嘴形无法知道它的情绪。',
    },
  ],
  "keyFacts": [
    '后脚比前爪大，属于袋鼠科。',
    '用跳跃等步态移动。',
    '尾巴较短，毛比身上稀少。',
    '吃叶、茎等植物，偏爱嫩枝叶。',
    '主要夜间觅食，白天躲在密生植被中。',
  ],
  "threats": [
    "栖息地丧失",
    "引入捕食者"
  ],
  "conservationActions": [
    "保护密生灌丛与湿地植被",
    "管理引入捕食者",
    "避免投喂和追逐"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "大后脚和小前爪"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "草"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "灌丛与溪流边密生植被"
    }
  ],
  "media": {
    "image": "./images/species/quokka/01-cover.webp",
    "alt": "短尾矮袋鼠与生活环境的全身场景",
    "focalPoint": {
      "x": 0.83,
      "y": 0.37
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/quokka/02-observation.webp",
        "alt": "短尾矮袋鼠坐在地上，大后脚与小前爪可见",
        "title": "大后脚和小前爪",
        "caption": "AI 生成科学情景重建。短尾矮袋鼠坐在地上，大后脚与小前爪可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/quokka/03-observation.webp",
        "alt": "短尾矮袋鼠屈起后腿，身体稍向前倾",
        "title": "弯下腿准备跳",
        "caption": "AI 生成科学情景重建。短尾矮袋鼠屈起后腿，身体稍向前倾。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/quokka/04-observation.webp",
        "alt": "短尾矮袋鼠向前跳，后脚离开地面",
        "title": "后脚一起离地",
        "caption": "AI 生成科学情景重建。短尾矮袋鼠向前跳，后脚离开地面。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/quokka/05-observation.webp",
        "alt": "短尾矮袋鼠靠近低矮植物，啃食叶片",
        "title": "伸嘴吃叶子",
        "caption": "AI 生成科学情景重建。短尾矮袋鼠靠近低矮植物，啃食叶片。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/quokka/06-observation.webp",
        "alt": "短尾矮袋鼠在灌丛阴影边缘休息",
        "title": "灌丛旁休息",
        "caption": "AI 生成科学情景重建。短尾矮袋鼠在灌丛阴影边缘休息。",
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
      "title": "ASM Mammal Diversity Database — 短尾矮袋鼠分类",
      "url": "https://www.mammaldiversity.org/taxon/1000310/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-12"
    },
    {
      "title": "Australian Museum — 短尾矮袋鼠生活与分布",
      "url": "https://australian.museum/learn/animals/mammals/quokka/",
      "kind": "ecology",
      "accessedAt": "2026-09-12"
    },
    {
      "title": "Australian Museum — 短尾矮袋鼠全球 IUCN 等级",
      "url": "https://australian.museum/learn/animals/mammals/quokka/",
      "kind": "conservation",
      "accessedAt": "2026-09-12"
    },
    {
      "title": "Perth Zoo — 短尾矮袋鼠食性与栖地",
      "url": "https://perthzoo.wa.gov.au/data/animals/quokka",
      "kind": "ecology",
      "accessedAt": "2026-09-12"
    },
    {
      title: 'GBIF：Setonix brachyurus 的命名作者与年份',
      url: 'https://www.gbif.org/species/2440110',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-12",
  "updatedAt": "2026-09-12"
} as const satisfies Species;

export default profile;
