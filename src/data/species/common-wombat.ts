import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-wombat",
  "slug": "common-wombat",
  "names": {
    "zh": "袋熊",
    "en": "Bare-nosed Wombat",
    "aliases": [
      "裸鼻袋熊",
      "普通袋熊"
    ]
  },
  "scientificName": "Vombatus ursinus",
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
      "scientificName": "Vombatidae",
      "zhName": "袋熊科"
    },
    "genus": {
      "scientificName": "Vombatus",
      "zhName": "袋熊属"
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
      "澳大利亚东南部",
      "塔斯马尼亚"
    ],
    "countries": [
      "澳大利亚"
    ],
    "range": "原生于澳大利亚东南部和塔斯马尼亚等地，现今大陆分布存在破碎和局部退缩。地图标记仅代表东南部的一处位置，不表示连续分布。",
    "center": {
      "lat": -37,
      "lng": 147
    }
  },
  "habitats": [
    {
      "name": "温带林地与草地",
      "realm": "terrestrial",
      "description": "袋熊在林地、灌丛和草地活动，常在斜坡挖洞，在附近的草地取食。",
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 84,
      "max": 115,
      "unit": "cm",
      "note": "Australian Museum 所列大陆个体头体长，不含短尾；不代表岛屿种群。"
    }
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草",
      "莎草",
      "灯心草"
    ],
    "description": "袋熊主要啃食纤维丰富的草本植物，食物随所在地的植被而变化。"
  },
  "tags": [
    "袋熊",
    "圆鼻子和短腿"
  ],
  "summary": "裸鼻袋熊用前爪拨开泥土。它有粗厚的灰褐色毛、短腿和宽鼻子，鼻子表面没有毛。",
  "description": '裸鼻袋熊属于有袋类，幼仔在育儿袋中继续发育。它用有力四肢和扁平爪挖洞，常在日落后出去吃草，天亮前回洞休息。',
  "storySections": [
    {
      key: 'body',
      label: '生活与认识',
      title: '宽鼻子，短短腿',
      body: '袋熊有粗厚的灰褐色皮毛、宽鼻子和短腿。这份档案介绍的是裸鼻袋熊，鼻子表面没有毛，两侧是小眼睛。',
    },
    {
      key: 'digging',
      label: '生活与认识',
      title: '前爪把泥土拨开',
      body: '袋熊用有力的四肢和扁平的爪挖洞。观察前爪贴近泥土的位置，再看看身后的松土。两张挖洞图分别生成，用来比较姿势，不是同一只动物的连续实拍。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '低下头，啃草叶',
      body: '袋熊主要吃草，也取食莎草和灯心草。它用门齿切断植物。共读时可以沿着低下的头，找到嘴边的草。',
    },
    {
      key: 'burrow',
      label: '生活与认识',
      title: '白天在洞里休息',
      body: '袋熊通常在日落后出洞觅食，天亮前返回休息。凉爽或阴天时也可能白天出来。洞穴为它提供藏身和休息的空间。',
    },
    {
      key: 'identity',
      label: '生活与认识',
      title: '它是有袋类动物',
      body: '袋熊妈妈的幼仔会在育儿袋里继续发育。这里的 Vombatus ursinus 与两种毛鼻袋熊不同，不能把濒危毛鼻袋熊的保护等级套到它身上。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '给洞穴和草地留出空间',
      body: 'Australian Museum 列出的全球 IUCN 等级为无危，但部分地区的分布已缩小。保护林地、草地及洞穴周围的环境，可以保留它觅食和藏身的地方。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '看起来像熊，幼仔却住育儿袋',
      body: 'Shaw 于 1800 年描述了这种袋熊，原名为 Didelphis ursina，现用 Vombatus ursinus。澳大利亚博物馆指出，种加词 ursinus 与拉丁语“熊”有关，来自它似熊的外形。它属于有袋类，幼仔在母亲的育儿袋中继续发育。',
    },
  ],
  "keyFacts": [
    '鼻面没有毛，身体灰褐、腿短。',
    '有力四肢和扁平爪帮助挖洞。',
    '主要吃草，也吃莎草和灯心草。',
    '通常日落后出洞，天亮前回洞。',
    '属于有袋类，幼仔在育儿袋中发育。',
  ],
  "threats": [
    "栖息地破碎与局部丧失"
  ],
  "conservationActions": [
    "保护林地草地与洞穴",
    "减少对洞口的干扰"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "圆鼻子和短腿"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "草"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "温带林地与草地"
    }
  ],
  "media": {
    "image": "./images/species/common-wombat/01-cover.webp",
    "alt": "袋熊与生活环境的全身场景",
    "focalPoint": {
      "x": 0.85,
      "y": 0.33
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-wombat/02-observation.webp",
        "alt": "袋熊侧身站在草地上，宽鼻子和短腿清楚可见",
        "title": "圆鼻子和短腿",
        "caption": "AI 生成科学情景重建。袋熊侧身站在草地上，宽鼻子和短腿清楚可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-wombat/03-observation.webp",
        "alt": "袋熊在洞口用前爪刨土，鼻子靠近地面",
        "title": "前爪拨开泥土",
        "caption": "AI 生成科学情景重建。袋熊在洞口用前爪刨土，鼻子靠近地面。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-wombat/04-observation.webp",
        "alt": "袋熊伏低身体继续挖洞，身后堆着松土",
        "title": "土往身后去",
        "caption": "AI 生成科学情景重建。袋熊伏低身体继续挖洞，身后堆着松土。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-wombat/05-observation.webp",
        "alt": "袋熊低下头啃食草叶",
        "title": "低头吃草",
        "caption": "AI 生成科学情景重建。袋熊低下头啃食草叶。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-wombat/06-observation.webp",
        "alt": "袋熊停在斜坡上的洞口外",
        "title": "洞口旁的袋熊",
        "caption": "AI 生成科学情景重建。袋熊停在斜坡上的洞口外。",
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
      "title": "Australian Museum — 裸鼻袋熊分类与分布",
      "url": "https://australian.museum/learn/animals/mammals/bare-nosed-wombat/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-12"
    },
    {
      "title": "Australian Museum — 裸鼻袋熊挖洞、食性与育幼",
      "url": "https://australian.museum/learn/animals/mammals/bare-nosed-wombat/",
      "kind": "ecology",
      "accessedAt": "2026-09-12"
    },
    {
      "title": "Australian Museum — 裸鼻袋熊全球 IUCN 等级",
      "url": "https://australian.museum/learn/animals/mammals/bare-nosed-wombat/",
      "kind": "conservation",
      "accessedAt": "2026-09-12"
    },
    {
      title: '澳大利亚博物馆馆刊：Shaw 1800 的袋熊原始描述',
      url: 'https://museum-publications.australian.museum/media/dd/Uploads/Documents/38160/ANH_vXX_09_lowres.46cbf61.pdf',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-12",
  "updatedAt": "2026-09-12"
} as const satisfies Species;

export default profile;
