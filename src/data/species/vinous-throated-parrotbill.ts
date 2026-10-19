import type { Species } from '../../types/species.ts';

const profile = {
  "id": "vinous-throated-parrotbill",
  "slug": "vinous-throated-parrotbill",
  "names": {
    "zh": "棕头鸦雀",
    "en": "Vinous-throated Parrotbill",
    "aliases": [
      "Suthora webbiana"
    ]
  },
  "scientificName": "Sinosuthora webbiana",
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
      "scientificName": "Sylviidae",
      "zhName": "林莺科"
    },
    "genus": {
      "scientificName": "Sinosuthora",
      "zhName": "棕头鸦雀属"
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
    "assessor": "所引物种资料列全球 IUCN 等级为 LC；本次未核实独立评估日期，未填写评估年或推断全球趋势。全球等级不代表各地区都常见。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "芦苇、竹丛与灌草地"
    ],
    "countries": [],
    "range": "主要分布于中国东部和南部，并延至朝鲜半岛、俄罗斯远东和越南北部等地。台湾有本地亚种；香港小范围种群的来源被认为与笼养逸出有关。",
    "center": {
      "lat": 30,
      "lng": 120
    }
  },
  "habitats": [
    {
      "name": "芦苇、竹丛与灌草地",
      "realm": "terrestrial",
      "description": "它常成对或结小群在高草、矮竹与灌丛间移动，也会攀在细茎上。成群时可能不断发出联络叫声，声音和姿势需要连续影像辅助观察。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "草籽",
      "昆虫等无脊椎动物"
    ],
    "description": "棕头鸦雀吃草籽，也会取食昆虫等无脊椎动物。荷兰官方风险分析记录它取用种子及昆虫；香港记录有亲鸟携带小虫，地区资料不能直接换算成所有种群的比例。"
  },
  "tags": [
    "棕头鸦雀",
    "芦苇、竹丛与灌草地"
  ],
  "summary": "棕头鸦雀身体圆、头较大，头顶棕红，喉胸带粉褐色，嘴短而粗，尾巴较长。它常成对或结小群在高草、矮竹与灌丛间移动，也会攀在细茎上。",
  "description": "棕头鸦雀身体圆、头较大，头顶棕红，喉胸带粉褐色，嘴短而粗，尾巴较长。短嘴外形像缩小的鹦鹉嘴，但它属于雀形目，不是鹦鹉。GBIF 接受名为 Sinosuthora webbiana，科级置于 Sylviidae；现代鸟类名录常用 Suthora webbiana、Paradoxornithidae。本库保留 GBIF 基线并记录不同处理，不把名称变化重复计数。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从羽色与轮廓辨认",
      "body": "棕头鸦雀身体圆、头较大，头顶棕红，喉胸带粉褐色，嘴短而粗，尾巴较长。短嘴外形像缩小的鹦鹉嘴，但它属于雀形目，不是鹦鹉。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "它常成对或结小群在高草、矮竹与灌丛间移动，也会攀在细茎上。成群时可能不断发出联络叫声，声音和姿势需要连续影像辅助观察。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "棕头鸦雀吃草籽，也会取食昆虫等无脊椎动物。荷兰官方风险分析记录它取用种子及昆虫；香港记录有亲鸟携带小虫，地区资料不能直接换算成所有种群的比例。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼鸟、成鸟与季节",
      "body": "亲鸟会筑巢并喂养幼鸟。香港资料有携巢材和喂幼鸟的记录，图片选择成鸟与取食情景，不为未核实的巢内年龄或窝卵数补造细节。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "名称指向的物种",
      "body": "GBIF 接受名为 Sinosuthora webbiana，科级置于 Sylviidae；现代鸟类名录常用 Suthora webbiana、Paradoxornithidae。本库保留 GBIF 基线并记录不同处理，不把名称变化重复计数。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：它的嘴与细长嘴的鸟差在哪里？观察任务：在步道边比较鸟抓住草茎的位置，不摇动芦苇或拨开巢丛。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Sinosuthora webbiana 的名称记录",
      "body": "GBIF 的名称记录为 Sinosuthora webbiana (Gould, 1852)。作者与年份表示科学命名记录，不是人类第一次见到这种鸟的时间。GBIF 接受名为 Sinosuthora webbiana，科级置于 Sylviidae；现代鸟类名录常用 Suthora webbiana、Paradoxornithidae。本库保留 GBIF 基线并记录不同处理，不把名称变化重复计数。"
    }
  ],
  "keyFacts": [
    "棕头鸦雀身体圆、头较大，头顶棕红，喉胸带粉褐色，嘴短而粗，尾巴较长。短嘴外形像缩小的鹦鹉嘴，但它属于雀形目，不是鹦鹉。",
    "棕头鸦雀吃草籽，也会取食昆虫等无脊椎动物。荷兰官方风险分析记录它取用种子及昆虫；香港记录有亲鸟携带小虫，地区资料不能直接换算成所有种群的比例。",
    "亲鸟会筑巢并喂养幼鸟。香港资料有携巢材和喂幼鸟的记录，图片选择成鸟与取食情景，不为未核实的巢内年龄或窝卵数补造细节。"
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
      "value": "芦苇、竹丛与灌草地"
    },
    {
      "key": "food",
      "label": "食物举例",
      "value": "草籽、昆虫等无脊椎动物"
    }
  ],
  "media": {
    "image": "./images/species/vinous-throated-parrotbill/01-cover.webp",
    "alt": "棕头鸦雀及生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/vinous-throated-parrotbill/02-observation.webp",
        "title": "短而粗的浅色嘴",
        "alt": "棕头鸦雀：短而粗的浅色嘴，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。嘴形相像不表示属于鹦鹉类。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/vinous-throated-parrotbill/03-observation.webp",
        "title": "草茎上的取食",
        "alt": "棕头鸦雀：草茎上的取食，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。草籽为食物之一，不表示完整食谱。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/vinous-throated-parrotbill/04-observation.webp",
        "title": "芦苇间的小群体",
        "alt": "棕头鸦雀：芦苇间的小群体，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。群体构成不能由静图确定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/vinous-throated-parrotbill/05-observation.webp",
        "title": "嘴里的小型无脊椎动物",
        "alt": "棕头鸦雀：嘴里的小型无脊椎动物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。亲鸟可用小型动物性食物喂幼鸟，图中未标具体虫种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/vinous-throated-parrotbill/06-observation.webp",
        "title": "冬季干芦苇中的成鸟",
        "alt": "棕头鸦雀：冬季干芦苇中的成鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。季节背景为情景重建，不是一次观察记录。",
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
      "url": "https://www.gbif.org/species/6100921",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "物种外形、活动与分布",
      "url": "https://avifauna.hkbws.org.hk/species/0360/043000",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "物种资料列示的全球 IUCN 等级",
      "url": "https://avifauna.hkbws.org.hk/species/0360/043000",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "荷兰食品与消费品安全局：棕头鸦雀生态风险分析",
      "url": "https://www.nvwa.nl/binaries/nvwa/documenten/dier/dieren-in-de-natuur/exoten/risicobeoordelingen/bruinkopdiksnavelmees/bruinkopdiksnavelmees.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "台湾农业部：粉红鸚嘴／棕头鸦雀",
      "url": "https://kmweb.moa.gov.tw/theme_data.php?id=74&theme=bird_illustration",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "BirdLife：现代属与科级处理",
      "url": "https://datazone.birdlife.org/species/factsheet/vinous-throated-parrotbill-suthora-webbiana",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
