import type { Species } from '../../types/species.ts';

const profile = {
  "id": "black-carp",
  "slug": "black-carp",
  "names": {
    "zh": "青鱼",
    "en": "Black Carp",
    "aliases": [
      "螺蛳青"
    ]
  },
  "scientificName": "Mylopharyngodon piceus",
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
      "scientificName": "Actinopterygii",
      "zhName": "辐鳍鱼纲"
    },
    "order": {
      "scientificName": "Cypriniformes",
      "zhName": "鲤形目"
    },
    "family": {
      "scientificName": "Cyprinidae",
      "zhName": "鲤科"
    },
    "genus": {
      "scientificName": "Mylopharyngodon",
      "zhName": "青鱼属"
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
    "assessedYear": 2020,
    "assessor": "采用 FishBase 所列全球 IUCN 等级与评估日期；未独立核实全球趋势，保留 unknown。"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "东亚河流与湖泊"
    ],
    "countries": [],
    "range": "原生于东亚，从黑龙江流域至中国南部水系；河流与相连湖泊是重要环境，也广泛用于养殖。海外另有引入种群，市场销售地不表示野生分布。",
    "center": {
      "lat": 30.6,
      "lng": 114.3
    }
  },
  "habitats": [
    {
      "name": "河流、湖泊与养殖池塘",
      "realm": "freshwater",
      "description": "青鱼常在水体下层活动，在河流和相连湖泊中寻找食物。养殖池塘也能见到它；市场里的青鱼可能来自养殖，销售地点不能用来判断原生分布。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "螺类",
      "蚌类",
      "幼鱼阶段的浮游与底栖动物"
    ],
    "description": "成鱼常吃螺、蚌等软体动物，用咽部的齿处理硬壳。幼鱼还会取食浮游动物和小型底栖动物，食物随成长改变。咽齿在口腔深处，不能从普通闭嘴照片中看见。"
  },
  "tags": [
    "青鱼",
    "淡水鱼",
    "河流、湖泊与养殖池塘"
  ],
  "summary": "青鱼体色深，成鱼常吃螺和蚌，咽部的齿能帮助处理硬壳。",
  "description": "青鱼的身体较长，背部和体侧呈青灰至黑灰色，鳞片的边缘更深。它和草鱼外形相近，青鱼通常颜色更深，但水色、光线和年龄都会影响外观，辨认时还需比较头形与身体比例。青鱼常在水体下层活动，在河流和相连湖泊中寻找食物。养殖池塘也能见到它；市场里的青鱼可能来自养殖，销售地点不能用来判断原生分布。成鱼常吃螺、蚌等软体动物，用咽部的齿处理硬壳。幼鱼还会取食浮游动物和小型底栖动物，食物随成长改变。咽齿在口腔深处，不能从普通闭嘴照片中看见。青鱼在河流流水中产卵，卵随水漂移，发育需要合适的水温和水流。池塘养成与自然繁殖的条件不同；养殖场可采用人工繁殖技术，不能把鱼在池塘里长大理解为它会在那里自然产卵。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体和鳍开始",
      "body": "青鱼的身体较长，背部和体侧呈青灰至黑灰色，鳞片的边缘更深。它和草鱼外形相近，青鱼通常颜色更深，但水色、光线和年龄都会影响外观，辨认时还需比较头形与身体比例。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "水里的生活位置",
      "body": "青鱼常在水体下层活动，在河流和相连湖泊中寻找食物。养殖池塘也能见到它；市场里的青鱼可能来自养殖，销售地点不能用来判断原生分布。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它怎样取得食物",
      "body": "成鱼常吃螺、蚌等软体动物，用咽部的齿处理硬壳。幼鱼还会取食浮游动物和小型底栖动物，食物随成长改变。咽齿在口腔深处，不能从普通闭嘴照片中看见。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "成长中的变化",
      "body": "青鱼在河流流水中产卵，卵随水漂移，发育需要合适的水温和水流。池塘养成与自然繁殖的条件不同；养殖场可采用人工繁殖技术，不能把鱼在池塘里长大理解为它会在那里自然产卵。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案指 Mylopharyngodon piceus，与草鱼 Ctenopharyngodon idella 是不同属的物种。图册按 GBIF 口径归入鲤科；部分鱼类资料将它列入 Xenocyprididae，查资料时要区分所用分类口径。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：青鱼和草鱼的头形、体色有什么差别？观察任务：隔着水族展示窗比较完整侧面图，找出背鳍和尾鳍；不为了观察咽齿掰开鱼嘴。保护水域环境，不把饲养或购买的动物放入野外。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "青鱼的名称与记录",
      "body": "Richardson 于 1846 年发表本种名称，现用组合为 Mylopharyngodon piceus。中文俗名“螺蛳青”与它取食螺类的习性有关。学名发表年份记录学术命名，不能当作人们开始认识或养殖青鱼的年份。"
    }
  ],
  "keyFacts": [
    "青鱼的身体较长，背部和体侧呈青灰至黑灰色，鳞片的边缘更深。它和草鱼外形相近，青鱼通常颜色更深，但水色、光线和年龄都会影响外观，辨认时还需比较头形与身体比例。",
    "成鱼常吃螺、蚌等软体动物，用咽部的齿处理硬壳。幼鱼还会取食浮游动物和小型底栖动物，食物随成长改变。咽齿在口腔深处，不能从普通闭嘴照片中看见。",
    "青鱼在河流流水中产卵，卵随水漂移，发育需要合适的水温和水流。池塘养成与自然繁殖的条件不同；养殖场可采用人工繁殖技术，不能把鱼在池塘里长大理解为它会在那里自然产卵。"
  ],
  "threats": [
    "水域污染",
    "栖息环境改变"
  ],
  "conservationActions": [
    "保护原生水域及岸边植被；不随意放生或转移水生动物。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "河流、湖泊与养殖池塘"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "青灰体色与取食螺贝"
    }
  ],
  "media": {
    "image": "./images/species/black-carp/01-cover.webp",
    "alt": "青鱼与淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/black-carp/02-observation.webp",
        "title": "青灰色身体与鳞片",
        "alt": "青鱼：青灰色身体与鳞片，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。青灰色身体与鳞片；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-carp/03-observation.webp",
        "title": "头部与嘴形",
        "alt": "青鱼：头部与嘴形，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。头部与嘴形；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-carp/04-observation.webp",
        "title": "河底的螺类食物",
        "alt": "青鱼：河底的螺类食物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。河底的螺类食物；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-carp/05-observation.webp",
        "title": "幼鱼的身体比例",
        "alt": "青鱼：幼鱼的身体比例，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼鱼的身体比例；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-carp/06-observation.webp",
        "title": "河流下层的活动环境",
        "alt": "青鱼：河流下层的活动环境，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。河流下层的活动环境；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
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
      "title": "GBIF：接受名称、命名作者与分类链",
      "url": "https://www.gbif.org/species/2362110",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FishBase：生态对照及全球 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Mylopharyngodon-piceus.html",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "ADW：图册沿用的辐鳍鱼纲归属",
      "url": "https://animaldiversity.org/accounts/Cyprinus_carpio/classification/",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "美国鱼类与野生动物管理局：外形、咽齿与生态",
      "url": "https://www.fws.gov/species/black-carp-mylopharyngodon-piceus",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FAO：中国综合养鱼的食性与繁殖",
      "url": "https://www.fao.org/4/AC264E/AC264E01.htm",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
