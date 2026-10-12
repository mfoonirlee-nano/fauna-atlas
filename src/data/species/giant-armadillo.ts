import type { Species } from '../../types/species.ts';

const profile = {
  "id": "giant-armadillo",
  "slug": "giant-armadillo",
  "names": {
    "zh": "大犰狳",
    "en": "Giant Armadillo"
  },
  "scientificName": "Priodontes maximus",
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
      "scientificName": "Cingulata",
      "zhName": "有甲目"
    },
    "family": {
      "scientificName": "Tolypeutidae",
      "zhName": "三带犰狳科"
    },
    "genus": {
      "scientificName": "Priodontes",
      "zhName": "大犰狳属"
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
    "assessor": '全球等级为 VU（易危）；独立评估年份尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "南美洲安第斯山脉以东的部分地区"
    ],
    "countries": [],
    "range": "南美洲安第斯山脉以东的部分地区；主要栖息于热带森林、草原与林地。"
  },
  "habitats": [
    {
      "name": "热带森林、草原与林地",
      "realm": "terrestrial",
      "description": '南美洲安第斯山脉以东部分地区的热带森林、草原和林地。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "白蚁",
      "蚂蚁",
      "其他小型无脊椎动物"
    ],
    "description": "食物包括白蚁、蚂蚁、其他小型无脊椎动物。"
  },
  "tags": [
    "大犰狳",
    "热带森林、草原与林地"
  ],
  "summary": '大犰狳用强壮前肢和大弯爪挖土、打开蚁巢，也挖洞藏身。横向活动甲带让身体弯动，长尾覆盖鳞片。',
  "description": '大犰狳在南美洲部分森林、草原和林地生活，主要吃白蚁、蚂蚁，也取食其他小型无脊椎动物。强壮前肢和大弯爪扒开土壤、蚁巢，自己挖洞藏身。横向活动甲带让披甲身体仍能弯动，长尾覆盖鳞片。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '前脚的大弯爪',
      body: '看看前脚伸出的弯爪。它用强壮的前肢扒开土壤和白蚁巢。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '一排排的甲片',
      body: '从背上找到横向排列的活动甲带。它们让披着甲壳的身体仍能弯动。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '贴近地面的长嘴',
      body: '大犰狳把长嘴靠近地面寻找食物，主要吃白蚁和蚂蚁。图中没有展示捕食过程。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '长长的尾巴',
      body: '沿着背甲向后找到尾巴。它的尾巴覆着鳞片，行走时拖在身后。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '洞口旁的土堆',
      body: '大犰狳能挖出藏身的洞。看图找找洞口与挖出的土，不伸手或钻进野外洞穴。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保留它生活的热带森林、草原与林地，观察时保持距离，不移动动物或破坏藏身处。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '大洞穴还有其他动物来用',
      body: 'Kerr 在 1792 年发表了大犰狳的科学描述，今天采用 Priodontes maximus。2013 年研究者在巴西潘塔纳尔记录，大犰狳挖掘的洞穴与周围土堆还为许多其他脊椎动物提供生活空间。它改变的地面环境不只供自己使用，保护洞穴也会惠及那些邻居。',
    },
  ],
  "keyFacts": [
    "看看前脚伸出的弯爪。它用强壮的前肢扒开土壤和白蚁巢。",
    "从背上找到横向排列的活动甲带。它们让披着甲壳的身体仍能弯动。",
    "大犰狳把长嘴靠近地面寻找食物，主要吃白蚁和蚂蚁。图中没有展示捕食过程。",
    "沿着背甲向后找到尾巴。它的尾巴覆着鳞片，行走时拖在身后。",
    "大犰狳能挖出藏身的洞。看图找找洞口与挖出的土，不伸手或钻进野外洞穴。"
  ],
  "threats": [
    "栖息地改变",
    "捕猎"
  ],
  "conservationActions": [
    "保留它生活的热带森林、草原与林地，观察时保持距离，不移动动物或破坏藏身处。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "热带森林、草原与林地"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "前脚的大弯爪"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "易危",
      "note": "分类采用 MDD 当前的三带犰狳科 Tolypeutidae，不沿用旧资料中的犰狳科或倭犰狳科。保护等级采用 MDD 所列 IUCN 全球等级，独立评估年份未核实。"
    }
  ],
  "media": {
    "image": "./images/species/giant-armadillo/01-cover.webp",
    "alt": "大犰狳及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/giant-armadillo/02-observation.webp",
        "alt": "大犰狳：前脚的大弯爪",
        "title": "前脚的大弯爪",
        "caption": "AI 生成科学情景重建。看看前脚伸出的弯爪。它用强壮的前肢扒开土壤和白蚁巢。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-armadillo/03-observation.webp",
        "alt": "大犰狳：一排排的甲片",
        "title": "一排排的甲片",
        "caption": "AI 生成科学情景重建。从背上找到横向排列的活动甲带。它们让披着甲壳的身体仍能弯动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-armadillo/04-observation.webp",
        "alt": "大犰狳：贴近地面的长嘴",
        "title": "贴近地面的长嘴",
        "caption": "AI 生成科学情景重建。大犰狳把长嘴靠近地面寻找食物，主要吃白蚁和蚂蚁。图中没有展示捕食过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-armadillo/05-observation.webp",
        "alt": "大犰狳：长长的尾巴",
        "title": "长长的尾巴",
        "caption": "AI 生成科学情景重建。沿着背甲向后找到尾巴。它的尾巴覆着鳞片，行走时拖在身后。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-armadillo/06-observation.webp",
        "alt": "大犰狳：洞口旁的土堆",
        "title": "洞口旁的土堆",
        "caption": "AI 生成科学情景重建。大犰狳能挖出藏身的洞。看图找找洞口与挖出的土，不伸手或钻进野外洞穴。",
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
      "title": "Mammal Diversity Database：Priodontes maximus",
      "url": "https://www.mammaldiversity.org/taxon/1000418/",
      "kind": "conservation",
      "accessedAt": "2026-09-26"
    },
    {
      "title": "Animal Diversity Web：Priodontes maximus",
      "url": "https://animaldiversity.org/accounts/Priodontes_maximus/",
      "kind": "ecology",
      "accessedAt": "2026-09-26"
    },
    {
      title: 'Biotropica：大犰狳洞穴的生态研究',
      url: 'https://onlinelibrary.wiley.com/doi/10.1111/btp.12052',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
    {
      title: 'GBIF：大犰狳的科学命名记录',
      url: 'https://www.gbif.org/species/5220096',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-26",
  "updatedAt": "2026-09-26"
} as const satisfies Species;

export default profile;
