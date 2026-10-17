import type { Species } from '../../types/species.ts';

const profile = {
  "id": "water-buffalo",
  "slug": "water-buffalo",
  "names": {
    "zh": "水牛",
    "en": "Water Buffalo",
    "aliases": [
      "家养水牛"
    ]
  },
  "scientificName": "Bubalus bubalis",
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
      "scientificName": "Artiodactyla",
      "zhName": "偶蹄目"
    },
    "family": {
      "scientificName": "Bovidae",
      "zhName": "牛科"
    },
    "genus": {
      "scientificName": "Bubalus",
      "zhName": "水牛属"
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
    "assessor": "本档案介绍家养水牛，未收录适用于这一家养范围的红色名录评估，不套用野水牛的等级。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "亚洲及世界多地（家养）"
    ],
    "countries": [],
    "range": "家养水牛起源于亚洲，随人类饲养分布到世界多地，亚洲农牧区尤为集中。地图点只代表一处饲养地区，不表示野水牛的天然分布。",
    "center": {
      "lat": 23,
      "lng": 113
    }
  },
  "habitats": [
    {
      "name": "农场与湿草地",
      "realm": "terrestrial",
      "description": "家养水牛起源于亚洲，随人类饲养分布到世界多地，亚洲农牧区尤为集中。地图点只代表一处饲养地区，不表示野水牛的天然分布。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草",
      "水生植物",
      "干草"
    ],
    "description": "水牛吃草等植物性食物，也会反刍，把先前吞下的食团送回口中再嚼。消化道中的微生物帮助利用植物纤维，画面里的草只是食物举例，不代表完整饲料配方。"
  },
  "tags": [
    "水牛",
    "农场与湿草地"
  ],
  "summary": "水牛长着向两侧弯出的角，常在水里或泥里降温。它吃草、反刍，小牛早期依靠母乳成长。",
  "description": "水牛皮肤多呈灰黑色，体毛稀疏，角从头顶两侧伸出。蹄分成两瓣，尾端有一撮长毛。角形、体型与毛色随品种和个体而变；图片选用家养沼泽型水牛的外观。本档案采用 Bubalus bubalis，介绍家养水牛。野水牛 Bubalus arnee 与非洲水牛 Syncerus caffer 各有自己的物种范围；旧文献有时合并家养与野生水牛，不能照搬其野外数量和保护等级。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "水牛皮肤多呈灰黑色，体毛稀疏，角从头顶两侧伸出。蹄分成两瓣，尾端有一撮长毛。角形、体型与毛色随品种和个体而变；图片选用家养沼泽型水牛的外观。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "水牛会走到水边饮水，也会把身体浸在水或泥浆里。浸水与寻找树荫能帮助它应对炎热；饲养环境需要提供饮水、遮阴和活动空间。它仍用肺呼吸，不能把水中休息理解为在水下呼吸。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物怎样进入身体",
      "body": "水牛吃草等植物性食物，也会反刍，把先前吞下的食团送回口中再嚼。消化道中的微生物帮助利用植物纤维，画面里的草只是食物举例，不代表完整饲料配方。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼体与成体",
      "body": "母水牛产下小牛并哺乳。小牛会逐渐尝试植物性食物；图库将成年牛与幼牛放在一起，便于比较身体和角的大小，不表示图中的比例来自实测。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "本档案采用 Bubalus bubalis，介绍家养水牛。野水牛 Bubalus arnee 与非洲水牛 Syncerus caffer 各有自己的物种范围；旧文献有时合并家养与野生水牛，不能照搬其野外数量和保护等级。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：水牛角从头顶哪两处伸出？观察任务：在农场指定位置，看它选择草地、树荫还是水边休息，记录当时天气；不要越过围栏靠近。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Bubalus bubalis 的名称记录",
      "body": "GBIF 采用 Bubalus bubalis，命名人记为 Linnaeus，年份为 1758。这个年份记录科学命名，家养水牛与人类共同生活的历史更早。河流型与沼泽型是家养水牛中的不同类型，本档案不把它们拆成两份物种档案。"
    }
  ],
  "keyFacts": [
    "水牛皮肤多呈灰黑色，体毛稀疏，角从头顶两侧伸出。蹄分成两瓣，尾端有一撮长毛。角形、体型与毛色随品种和个体而变；图片选用家养沼泽型水牛的外观。",
    "水牛吃草等植物性食物，也会反刍，把先前吞下的食团送回口中再嚼。消化道中的微生物帮助利用植物纤维，画面里的草只是食物举例，不代表完整饲料配方。",
    "母水牛产下小牛并哺乳。小牛会逐渐尝试植物性食物；图库将成年牛与幼牛放在一起，便于比较身体和角的大小，不表示图中的比例来自实测。"
  ],
  "threats": [
    "不适合的饲养环境与热应激"
  ],
  "conservationActions": [
    "为家养水牛提供饮水、遮阴和活动空间。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "农场与湿草地"
    },
    {
      "key": "diet",
      "label": "主要食物",
      "value": "草、水生植物"
    }
  ],
  "media": {
    "image": "./images/species/water-buffalo/01-cover.webp",
    "alt": "水牛及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/water-buffalo/02-observation.webp",
        "title": "角从两侧伸出",
        "alt": "水牛：角从两侧伸出，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。观察角基部之间的间隔与弯曲方向，角形随品种和个体变化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/water-buffalo/03-observation.webp",
        "title": "低头吃草",
        "alt": "水牛：低头吃草，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水牛吃植物性食物，静图不展示反刍的完整过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/water-buffalo/04-observation.webp",
        "title": "泥水里休息",
        "alt": "水牛：泥水里休息，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。身体浸在水里可帮助降温，头部保持在水面以上。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/water-buffalo/05-observation.webp",
        "title": "成年牛与小牛",
        "alt": "水牛：成年牛与小牛，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼牛早期吃奶，图示大小差异不是实测比例。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/water-buffalo/06-observation.webp",
        "title": "树荫下卧息",
        "alt": "水牛：树荫下卧息，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水牛也会在干地和树荫下休息，并非一直泡在水里。",
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
      "title": "GBIF：接受学名、命名人与分类链",
      "url": "https://www.gbif.org/species/7422937",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FAO：家养水牛与饲养分布",
      "url": "https://www.fao.org/livestock-systems/global-distributions/buffaloes/en/",
      "kind": "distribution",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FAO：环境与水牛生产",
      "url": "https://www.fao.org/4/v1650t/v1650t0a.htm",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FAO：热带奶牛与水牛饲养",
      "url": "https://www.fao.org/4/t0413e/t0413e10.htm",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "ADW：水牛生活史，旧广义范围仅作对照",
      "url": "https://animaldiversity.org/accounts/Bubalus_bubalis/",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
