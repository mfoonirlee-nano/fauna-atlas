import type { Species } from '../../types/species.ts';

const profile = {
  "id": "azure-winged-magpie",
  "slug": "azure-winged-magpie",
  "names": {
    "zh": "灰喜鹊",
    "en": "Azure-winged Magpie",
    "aliases": []
  },
  "scientificName": "Cyanopica cyanus",
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
      "scientificName": "Corvidae",
      "zhName": "鸦科"
    },
    "genus": {
      "scientificName": "Cyanopica",
      "zhName": "灰喜鹊属"
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
    "assessor": "IUCN 发布于 GBIF 的全球名录列 LC；本次未核实与该名录记录对应的独立评估日期，未填写评估年或全球趋势。东亚灰喜鹊与伊比利亚近缘种分开处理。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "疏林与公园树丛"
    ],
    "countries": [],
    "range": "灰喜鹊分布于东亚，包括中国多地、朝鲜半岛、日本及相邻地区。公园疏林与林缘可提供树上停栖和地面取食空间；地图点并非完整范围。",
    "center": {
      "lat": 39.9,
      "lng": 116.3
    }
  },
  "habitats": [
    {
      "name": "疏林与公园树丛",
      "realm": "terrestrial",
      "description": "灰喜鹊常结群在树冠与地面间活动。群体会边移动边发出叫声，既可在树上找食，也会落到地面；一张合影不能说明它们的亲缘或分工。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "昆虫",
      "果实",
      "种子"
    ],
    "description": "它吃昆虫等小动物，也吃果实和种子，食物组成随季节和地点改变。图中取食坚果只展示一种情景，不能据此把灰喜鹊说成只吃植物。"
  },
  "tags": [
    "灰喜鹊",
    "疏林与公园树丛"
  ],
  "summary": "灰喜鹊头顶黑，喉部浅，身体灰褐，翅膀和长尾带蓝色。灰喜鹊常结群在树冠与地面间活动。",
  "description": "灰喜鹊头顶黑，喉部浅，身体灰褐，翅膀和长尾带蓝色。看长尾时要把尾端也算进完整身体，树枝遮挡会让尾巴显得比实际短。本档案采用东亚的 Cyanopica cyanus。伊比利亚灰喜鹊 Cyanopica cooki 现常另列一物种，不能把欧洲旧广义灰喜鹊的分布直接加到本档案。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从羽色与轮廓辨认",
      "body": "灰喜鹊头顶黑，喉部浅，身体灰褐，翅膀和长尾带蓝色。看长尾时要把尾端也算进完整身体，树枝遮挡会让尾巴显得比实际短。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "灰喜鹊常结群在树冠与地面间活动。群体会边移动边发出叫声，既可在树上找食，也会落到地面；一张合影不能说明它们的亲缘或分工。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "它吃昆虫等小动物，也吃果实和种子，食物组成随季节和地点改变。图中取食坚果只展示一种情景，不能据此把灰喜鹊说成只吃植物。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼鸟、成鸟与季节",
      "body": "灰喜鹊在树上筑巢育幼。中国一些研究种群中，亲鸟之外的个体也会帮助喂雏；这种合作并非每个巢都同样出现，不能从群体照片推断。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "名称指向的物种",
      "body": "本档案采用东亚的 Cyanopica cyanus。伊比利亚灰喜鹊 Cyanopica cooki 现常另列一物种，不能把欧洲旧广义灰喜鹊的分布直接加到本档案。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：尾羽和头顶分别是什么颜色？观察任务：在原处看一小群鸟先后去了哪些树，记录群体数量，不追逐落地的个体。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Cyanopica cyanus 的名称记录",
      "body": "GBIF 的名称记录为 Cyanopica cyanus (Pallas, 1776)。作者与年份表示科学命名记录，不是人类第一次见到这种鸟的时间。本档案采用东亚的 Cyanopica cyanus。伊比利亚灰喜鹊 Cyanopica cooki 现常另列一物种，不能把欧洲旧广义灰喜鹊的分布直接加到本档案。"
    }
  ],
  "keyFacts": [
    "灰喜鹊头顶黑，喉部浅，身体灰褐，翅膀和长尾带蓝色。看长尾时要把尾端也算进完整身体，树枝遮挡会让尾巴显得比实际短。",
    "它吃昆虫等小动物，也吃果实和种子，食物组成随季节和地点改变。图中取食坚果只展示一种情景，不能据此把灰喜鹊说成只吃植物。",
    "灰喜鹊在树上筑巢育幼。中国一些研究种群中，亲鸟之外的个体也会帮助喂雏；这种合作并非每个巢都同样出现，不能从群体照片推断。"
  ],
  "threats": [
    "栖息地改变与人为干扰"
  ],
  "conservationActions": [
    "保留适合取食与停歇的环境，按场所规则远距离观察，不干扰巢与幼鸟。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "疏林与公园树丛"
    },
    {
      "key": "food",
      "label": "食物举例",
      "value": "昆虫、果实"
    }
  ],
  "media": {
    "image": "./images/species/azure-winged-magpie/01-cover.webp",
    "alt": "灰喜鹊及生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/azure-winged-magpie/02-observation.webp",
        "title": "黑帽与浅色喉部",
        "alt": "灰喜鹊：黑帽与浅色喉部，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。羽色会受光线影响，不能按照片色值鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/azure-winged-magpie/03-observation.webp",
        "title": "地面上的坚果",
        "alt": "灰喜鹊：地面上的坚果，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。坚果只是食物例子，它也吃昆虫和果实。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/azure-winged-magpie/04-observation.webp",
        "title": "同枝的小群体",
        "alt": "灰喜鹊：同枝的小群体，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。静图不能证明同框个体互为亲属。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/azure-winged-magpie/05-observation.webp",
        "title": "展开的蓝色翅膀",
        "alt": "灰喜鹊：展开的蓝色翅膀，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。飞行情景重建，静图不能给出飞行路线。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/azure-winged-magpie/06-observation.webp",
        "title": "蓝色长尾",
        "alt": "灰喜鹊：蓝色长尾，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。观察完整尾端，蓝色深浅随光线变化。",
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
      "title": "GBIF：接受学名与命名记录",
      "url": "https://www.gbif.org/species/7341881",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "物种外形、活动与分布",
      "url": "https://lyj.hunan.gov.cn/lyj/ztzl/gdzt/bnl/201512/t20151229_2836891.html",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "灰喜鹊合作育幼原始研究",
      "url": "https://doi.org/10.1002/jav.03546",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "Cornell：灰喜鹊辨认",
      "url": "https://ebird.org/species/azwmag2",
      "kind": "distribution",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布的全球名录",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
