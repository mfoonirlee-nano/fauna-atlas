import type { Species } from '../../types/species.ts';

const profile = {
  "id": "orange-sea-pen",
  "slug": "orange-sea-pen",
  "names": {
    "zh": "橙色海笔",
    "en": "Orange Sea Pen"
  },
  "scientificName": "Ptilosarcus gurneyi",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Cnidaria",
      "zhName": "刺胞动物门"
    },
    "class": {
      "scientificName": "Anthozoa",
      "zhName": "珊瑚纲"
    },
    "order": {
      "scientificName": "Pennatulacea",
      "zhName": "海鳃目"
    },
    "family": {
      "scientificName": "Pennatulidae",
      "zhName": "海鳃科"
    },
    "genus": {
      "scientificName": "Ptilosarcus",
      "zhName": "肉海鳃属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "NE",
    "label": {
      "zh": "未评估",
      "en": "Not Evaluated"
    },
    "trend": "unknown",
    "assessor": 'SeaLifeBase 记录全球等级为未评估，种群趋势尚未核实。'
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "东北太平洋的泥沙质海底"
    ],
    "countries": [
      "美国",
      "加拿大"
    ],
    "range": "东北太平洋的泥沙质海底。国家列表仅列代表性分布地。"
  },
  "habitats": [
    {
      "name": "东北太平洋的泥沙质海底",
      "realm": "marine",
      "description": "东北太平洋的泥沙质海底。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "随水流漂来的浮游动物"
    ],
    "description": "食物包括随水流漂来的浮游动物。"
  },
  "tags": [
    "橙色海笔",
    "像羽毛的群体"
  ],
  "summary": '橙色海笔由许多小水螅体组成，用触手捕捉浮游动物。它的基部固定在泥沙中，排水后群体能收缩。',
  "description": '橙色海笔生活在东北太平洋的泥沙海底，用膨大的基部固定身体。一根海笔由许多小水螅体组成，中央轴两侧的叶状结构承载这些小个体。摄食个体伸出触手，捕捉水流带来的浮游动物；群体排水后可以收缩。海底散布的每一根海笔都是一个群体。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '像羽毛的群体',
      body: '橙色海笔由许多小水螅体组成。中央有较粗的轴，两侧排着承载小水螅体的叶状结构。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '小触手等食物',
      body: '摄食水螅体伸出触手，捕捉水流带来的浮游动物。图片是情景重建，不用于精确计数。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '身体能够收缩',
      body: '海笔能排出体内的水，使群体收缩。图中为收缩状态示意，与展开图不是连续实拍。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '基部埋进泥沙',
      body: '海笔用膨大的基部固定在泥沙里。图中只能看到露出海底的部分，基部不是植物的根。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '海底的几根海笔',
      body: '多根海笔可以散布在同一片海底，每一根都是由许多小个体组成的群体。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保护泥沙海底，观察时不触碰或拔起海笔。部分地区的群体减少，原因尚未查明。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '一根海笔里有许多小个体',
      body: 'Gray 在 1860 年发表了橙色海笔的科学描述，今天采用 Ptilosarcus gurneyi。“海笔”可以和中央轴、两侧叶状结构形成的外形联系起来。整根海笔实际由许多小水螅体组成，伸出触手取食的小个体共同构成这个群体，基部则固定在泥沙里。',
    },
  ],
  "keyFacts": [
    "橙色海笔由许多小水螅体组成。中央有较粗的轴，两侧排着承载小水螅体的叶状结构。",
    "摄食水螅体伸出触手，捕捉水流带来的浮游动物。图片是情景重建，不用于精确计数。",
    "海笔能排出体内的水，使群体收缩。图中为收缩状态示意，与展开图不是连续实拍。",
    "海笔用膨大的基部固定在泥沙里。图中只能看到露出海底的部分，基部不是植物的根。",
    "多根海笔可以散布在同一片海底，每一根都是由许多小个体组成的群体。"
  ],
  "threats": [
    "海底扰动",
    "部分地区群体减少，原因尚未查明"
  ],
  "conservationActions": [
    "保护泥沙海底栖息地，观察时不触碰、拔起海笔。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "像羽毛的群体"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "东北太平洋的泥沙质海底"
    }
  ],
  "media": {
    "image": "./images/species/orange-sea-pen/01-cover.webp",
    "alt": "橙色海笔在栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/orange-sea-pen/02-observation.webp",
        "title": "像羽毛的群体",
        "alt": "橙色海笔：像羽毛的群体",
        "caption": "AI 生成科学情景重建。橙色海笔由许多小水螅体组成。中央有较粗的轴，两侧排着承载小水螅体的叶状结构。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/orange-sea-pen/03-observation.webp",
        "title": "小触手等食物",
        "alt": "橙色海笔：小触手等食物",
        "caption": "AI 生成科学情景重建。摄食水螅体伸出触手，捕捉水流带来的浮游动物。图片是情景重建，不用于精确计数。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/orange-sea-pen/04-observation.webp",
        "title": "身体能够收缩",
        "alt": "橙色海笔：身体能够收缩",
        "caption": "AI 生成科学情景重建。海笔能排出体内的水，使群体收缩。图中为收缩状态示意，与展开图不是连续实拍。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/orange-sea-pen/05-observation.webp",
        "title": "基部埋进泥沙",
        "alt": "橙色海笔：基部埋进泥沙",
        "caption": "AI 生成科学情景重建。海笔用膨大的基部固定在泥沙里。图中只能看到露出海底的部分，基部不是植物的根。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/orange-sea-pen/06-observation.webp",
        "title": "海底的几根海笔",
        "alt": "橙色海笔：海底的几根海笔",
        "caption": "AI 生成科学情景重建。多根海笔可以散布在同一片海底，每一根都是由许多小个体组成的群体。",
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
      "title": "蒙特雷湾水族馆：海笔群体结构与生活",
      "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/sea-pen",
      "kind": "ecology",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "ITIS：橙色海笔分类归属",
      "url": "https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=52424",
      "kind": "taxonomy",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "SeaLifeBase：橙色海笔全球未评估状态",
      "url": "https://www.sealifebase.ca/summary/Ptilosarcus-gurneyi",
      "kind": "conservation",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "Race Rocks 保护区：橙色海笔野外观察",
      "url": "https://racerocks.ca/sea-pen-ptilosarcus-gurneyi-the-race-rocks-taxonomy/",
      "kind": "ecology",
      "accessedAt": "2026-09-21"
    },
    {
      title: 'GBIF：橙色海笔的科学命名记录',
      url: 'https://www.gbif.org/species/2258713',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-21",
  "updatedAt": "2026-09-21"
} as const satisfies Species;

export default profile;
