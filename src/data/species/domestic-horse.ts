import type { Species } from '../../types/species.ts';

const profile = {
  "id": "domestic-horse",
  "slug": "domestic-horse",
  "names": {
    "zh": "家马",
    "en": "Domestic Horse",
    "aliases": [
      "马"
    ]
  },
  "scientificName": "Equus caballus",
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
      "scientificName": "Perissodactyla",
      "zhName": "奇蹄目"
    },
    "family": {
      "scientificName": "Equidae",
      "zhName": "马科"
    },
    "genus": {
      "scientificName": "Equus",
      "zhName": "马属"
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
    "assessor": "本档案记录家养动物，未采用野生祖先或近缘种的评估；NE 表示本档案未收录适用于这一家养范围的红色名录评估。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "世界多地（家养范围）"
    ],
    "countries": [],
    "range": "家马随人类饲养传播到世界多地，生活在牧场、农场和其他管理环境。野化群体与本土野马需分别说明，本档案不把牧场图作为野生分布证据。"
  },
  "habitats": [
    {
      "name": "牧场与农场",
      "realm": "terrestrial",
      "description": "家马随人类饲养传播到世界多地，生活在牧场、农场和其他管理环境。野化群体与本土野马需分别说明，本档案不把牧场图作为野生分布证据。",
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
      "干草"
    ],
    "description": "家马主要吃草和干草。它依靠后肠中的微生物帮助利用植物纤维，不像牛羊那样把食团返回口中反刍。"
  },
  "tags": [
    "家马",
    "牧场与农场"
  ],
  "summary": "家马每只脚以一个完整的蹄着地，颈上长着鬃毛。它吃草，幼驹出生后吃奶。",
  "description": "家马有长脸、颈部鬃毛和长毛尾。每只脚的主要承重趾包在一个完整的蹄内。毛色、体型和鬃毛长度随品种与个体变化，图库里的棕色身体和黑鬃毛只是一个例子。本档案采用 GBIF 接受名 Equus caballus，介绍家马。其他资料也可能采用野马下的驯化形式写法。家马品种与矮种马不另计物种，普氏野马也不直接当作图中家马。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "单蹄与鬃毛",
      "body": "家马有长脸、颈部鬃毛和长毛尾。每只脚的主要承重趾包在一个完整的蹄内。毛色、体型和鬃毛长度随品种与个体变化，图库里的棕色身体和黑鬃毛只是一个例子。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在日常环境中观察",
      "body": "家马会用不同步态行走和奔跑，也会与同伴一起活动。观察自然行走的视频，可以跟着找四只蹄的落地顺序；单张抬脚图片无法说明完整步态。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "吃什么，怎样消化",
      "body": "家马主要吃草和干草。它依靠后肠中的微生物帮助利用植物纤维，不像牛羊那样把食团返回口中反刍。"
    },
    {
      "key": "life-cycle",
      "label": "成长与育幼",
      "title": "幼体怎样长大",
      "body": "母马产下幼驹，幼驹吃奶并逐步学习跟随母马。图库把幼驹与成年马分开画出，不用一张图推断它的月龄或出生后站立所需时间。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "家养动物与物种名称",
      "body": "本档案采用 GBIF 接受名 Equus caballus，介绍家马。其他资料也可能采用野马下的驯化形式写法。家马品种与矮种马不另计物种，普氏野马也不直接当作图中家马。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：马蹄中间有牛蹄那样的分缝吗？观察任务：在农场围栏外看马吃草，比较低头取食与抬头时的脖子姿势，不靠近后腿。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "家马的名称与驯化范围",
      "body": "林奈在 1758 年以 Equus caballus 命名家马。人类此前已长期饲养和使用马，科学命名年份不表示驯化发生的年份。不同资料对家马和野马的分类处理有差异，本档案沿用已核验的 GBIF 接受名，并把生活内容限定在家养马。"
    }
  ],
  "keyFacts": [
    "单蹄与鬃毛",
    "家马主要吃草和干草。它依靠后肠中的微生物帮助利用植物纤维，不像牛羊那样把食团返回口中反刍。",
    "母马产下幼驹，幼驹吃奶并逐步学习跟随母马。图库把幼驹与成年马分开画出，不用一张图推断它的月龄或出生后站立所需时间。",
    "本档案采用 GBIF 接受名 Equus caballus，介绍家马。其他资料也可能采用野马下的驯化形式写法。家马品种与矮种马不另计物种，普氏野马也不直接当作图中家马。"
  ],
  "threats": [
    "不适当的饲养环境"
  ],
  "conservationActions": [
    "由饲养者安排适当活动、食物和蹄部护理；参观时遵守农场规则，保留动物走动的空间。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "牧场与农场"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "单蹄与鬃毛"
    },
    {
      "key": "scope",
      "label": "内容范围",
      "value": "家养动物"
    }
  ],
  "media": {
    "image": "./images/species/domestic-horse/01-cover.webp",
    "alt": "家马及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/domestic-horse/02-observation.webp",
        "title": "一个完整的马蹄",
        "alt": "家马：一个完整的马蹄，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。马的主要承重趾包在单蹄内，图中蹄部用于外观比较。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-horse/03-observation.webp",
        "title": "耳朵与鬃毛",
        "alt": "家马：耳朵与鬃毛，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。沿颈部寻找鬃毛；毛色和毛长随品种、个体而变化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-horse/04-observation.webp",
        "title": "低头吃草",
        "alt": "家马：低头吃草，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。马主要摄取草与干草，画中植物不代表完整食谱。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-horse/05-observation.webp",
        "title": "母马与幼驹",
        "alt": "家马：母马与幼驹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼驹由母马产出并吃奶，图片不标注未经核验的月龄。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-horse/06-observation.webp",
        "title": "牧场里的同伴",
        "alt": "家马：牧场里的同伴，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。情景重建展示两个个体，不代表固定群体数量或亲缘关系。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      }
    ]
  },
  "sources": [
    {"title": "明尼苏达大学：马的后肠发酵与草料", "url": "https://extension.umn.edu/agriculture/animals-and-livestock/horse/ten-things-you-should-know-about-feeding-the-mature-horse", "kind": "ecology", "accessedAt": "2026-10-13"},
    {
      "title": "GBIF：接受学名、命名人和分类链",
      "url": "https://www.gbif.org/species/2440886",
      "kind": "taxonomy",
      "accessedAt": "2026-10-13"
    },
    {
      "title": "密歇根大学 ADW：生活与分布资料（限定家养内容）",
      "url": "https://animaldiversity.org/accounts/Equus_caballus/",
      "kind": "ecology",
      "accessedAt": "2026-10-13"
    },
    {
      "title": "明尼苏达大学：马蹄护理与结构",
      "url": "https://extension.umn.edu/agriculture/animals-and-livestock/horse/caring-for-your-horses-hooves",
      "kind": "general",
      "accessedAt": "2026-10-13"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-13",
  "updatedAt": "2026-10-13"
} as const satisfies Species;

export default profile;
