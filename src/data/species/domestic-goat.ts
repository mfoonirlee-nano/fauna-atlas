import type { Species } from '../../types/species.ts';

const profile = {
  "id": "domestic-goat",
  "slug": "domestic-goat",
  "names": {
    "zh": "山羊",
    "en": "Domestic Goat",
    "aliases": [
      "家山羊"
    ]
  },
  "scientificName": "Capra hircus",
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
      "scientificName": "Capra",
      "zhName": "山羊属"
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
    "assessor": "本档案限定家养范围；NE 表示未收录适用于该范围的红色名录评估，不替代野生祖先或整个接受物种的评估。"
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
    "range": "人类在世界多地的农场与牧场饲养山羊；有些地区存在野化群体。这里的饲养分布不代表野生祖先的原生范围。"
  },
  "habitats": [
    {
      "name": "牧场与农场",
      "realm": "terrestrial",
      "description": "人类在世界多地的农场与牧场饲养山羊；有些地区存在野化群体。这里的饲养分布不代表野生祖先的原生范围。",
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
      "灌木叶片"
    ],
    "description": "山羊吃草和灌木叶片，属于反刍动物。它会先摄取食物，之后把部分食物送回口中重新咀嚼。"
  },
  "tags": [
    "山羊",
    "牧场与农场"
  ],
  "summary": "山羊常抬起短尾，用分趾蹄站稳，也会取食灌木叶片。小羊早期吃奶。",
  "description": "山羊脚上有分趾蹄，许多个体长着胡须和角，尾巴短而常向上抬。不同品种的耳形、被毛和角差异很大，不能只凭胡须辨认雌雄。图库选择短毛有角的外观，和绵羊比较时还要看尾姿与身体特点。本档案采用 GBIF 接受名 Capra hircus，记录家养山羊；Capra 与绵羊所在的 Ovis 是不同属。其他资料可能将家山羊作为野生山羊下的驯化形式，家养品种不另计物种。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体特点辨认",
      "body": "山羊脚上有分趾蹄，许多个体长着胡须和角，尾巴短而常向上抬。不同品种的耳形、被毛和角差异很大，不能只凭胡须辨认雌雄。图库选择短毛有角的外观，和绵羊比较时还要看尾姿与身体特点。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "山羊能在不平的地面和低矮岩石上活动，常与同伴一起取食。农场观察可以看看它怎样放下前蹄，再移动后蹄；完整步态需要连续影像。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "山羊吃草和灌木叶片，属于反刍动物。它会先摄取食物，之后把部分食物送回口中重新咀嚼。"
    },
    {
      "key": "life-cycle",
      "label": "成长与育幼",
      "title": "幼仔怎样长大",
      "body": "母山羊产下幼仔，幼仔早期吃奶，长大后逐渐摄取植物性食物。图中一只小羊只是一个育幼情景，不能代表每次产仔数量。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的内容范围",
      "body": "本档案采用 GBIF 接受名 Capra hircus，记录家养山羊；Capra 与绵羊所在的 Ovis 是不同属。其他资料可能将家山羊作为野生山羊下的驯化形式，家养品种不另计物种。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：山羊的尾巴朝哪里？观察任务：隔着围栏比较山羊与绵羊的尾姿、被毛和耳形，记录两处不同。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "山羊的学名与记录",
      "body": "林奈在 1758 年使用 Capra hircus 这一名称。人类饲养山羊的历史早于正式命名。本档案沿用 GBIF 的物种处理，限定家养范围，不把野生近缘种的保护评估套用到农场山羊。"
    }
  ],
  "keyFacts": [
    "山羊脚上有分趾蹄，许多个体长着胡须和角，尾巴短而常向上抬。不同品种的耳形、被毛和角差异很大，不能只凭胡须辨认雌雄。图库选择短毛有角的外观，和绵羊比较时还要看尾姿与身体特点。",
    "山羊吃草和灌木叶片，属于反刍动物。它会先摄取食物，之后把部分食物送回口中重新咀嚼。",
    "母山羊产下幼仔，幼仔早期吃奶，长大后逐渐摄取植物性食物。图中一只小羊只是一个育幼情景，不能代表每次产仔数量。"
  ],
  "threats": [
    "不适当的饲养环境"
  ],
  "conservationActions": [
    "按场所规则远距离观察，为动物保留取食、休息和育幼空间。"
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
      "value": "短尾与分趾蹄"
    }
  ],
  "media": {
    "image": "./images/species/domestic-goat/01-cover.webp",
    "alt": "山羊及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/domestic-goat/02-observation.webp",
        "title": "角、耳与胡须",
        "alt": "山羊：角、耳与胡须，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。观察头部外形；胡须和角不能单独判断雌雄。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-goat/03-observation.webp",
        "title": "取食叶片",
        "alt": "山羊：取食叶片，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。山羊取食灌木叶片，画面不构成饲喂配方。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-goat/04-observation.webp",
        "title": "站在岩石上",
        "alt": "山羊：站在岩石上，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。观察完整分趾蹄与身体姿态，静图不证明攀爬过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-goat/05-observation.webp",
        "title": "母山羊与小羊",
        "alt": "山羊：母山羊与小羊，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。区分成体和幼仔，图中数量不代表固定产仔数。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-goat/06-observation.webp",
        "title": "短尾与分趾蹄",
        "alt": "山羊：短尾与分趾蹄，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。结合尾姿、被毛和蹄形与绵羊比较。",
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
      "title": "GBIF：接受学名、命名人和分类链",
      "url": "https://www.gbif.org/species/2441056",
      "kind": "taxonomy",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "密歇根大学 ADW：家山羊形态、生活与分布",
      "url": "https://animaldiversity.org/accounts/Capra_hircus/",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-14",
  "updatedAt": "2026-10-14"
} as const satisfies Species;

export default profile;
