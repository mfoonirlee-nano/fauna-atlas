import type { Species } from '../../types/species.ts';

const profile = {
  "id": "chinese-bitterling",
  "slug": "chinese-bitterling",
  "names": {
    "zh": "中华鳑鲏",
    "en": "Chinese Bitterling",
    "aliases": [
      "中华鰟鮍"
    ]
  },
  "scientificName": "Rhodeus sinensis",
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
      "scientificName": "Rhodeus",
      "zhName": "鳑鲏属"
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
    "assessedYear": 2011,
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
      "中国淡水河湖"
    ],
    "countries": [],
    "range": "中国淡水河湖的缓流和水草环境有本种记录，研究者也报告朝鲜半岛种群。近缘鳑鲏容易混淆，具体水域记录应结合鉴定资料；地图代表点不表示完整范围。",
    "center": {
      "lat": 30.8,
      "lng": 119.8
    }
  },
  "habitats": [
    {
      "name": "有水草和淡水蚌的河塘缓流",
      "realm": "freshwater",
      "description": "它在河塘等淡水环境中活动，水草和底质为小鱼提供生活空间。繁殖还需要适合的活体淡水蚌。水体看起来清澈，并不等于已经具备它完成生活史所需的条件。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "藻类",
      "小型水生动物"
    ],
    "description": "中华鳑鲏取食藻类、植物碎屑及小型水生动物等。研究者在不同水域记录到不同食物组成，人工实验也观察到它捕食小龙虾幼体。这里不设固定食物比例，水族饲养的投喂也不能代替野外食谱。"
  },
  "tags": [
    "中华鳑鲏",
    "淡水鱼",
    "有水草和淡水蚌的河塘缓流"
  ],
  "summary": "中华鳑鲏身体侧扁，雌鱼用产卵管把卵送入活体淡水蚌内。",
  "description": "中华鳑鲏的身体侧扁，轮廓近椭圆，嘴边没有须。繁殖期雄鱼会显出较鲜明的体色，雌鱼则可见细长产卵管。普通体色、繁殖期体色和雌雄差异应分别看，不能把所有鳑鲏都画成红肚子的雄鱼。它在河塘等淡水环境中活动，水草和底质为小鱼提供生活空间。繁殖还需要适合的活体淡水蚌。水体看起来清澈，并不等于已经具备它完成生活史所需的条件。中华鳑鲏取食藻类、植物碎屑及小型水生动物等。研究者在不同水域记录到不同食物组成，人工实验也观察到它捕食小龙虾幼体。这里不设固定食物比例，水族饲养的投喂也不能代替野外食谱。雌鱼用产卵管把卵送入双壳贝类体内，幼鱼在贝内度过早期阶段，到能够游泳后离开。蚌是活体宿主，不是一只空贝壳；这种繁殖依赖也不意味着鱼和蚌的关系在各种条件下都互相有利。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体和鳍开始",
      "body": "中华鳑鲏的身体侧扁，轮廓近椭圆，嘴边没有须。繁殖期雄鱼会显出较鲜明的体色，雌鱼则可见细长产卵管。普通体色、繁殖期体色和雌雄差异应分别看，不能把所有鳑鲏都画成红肚子的雄鱼。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "水里的生活位置",
      "body": "它在河塘等淡水环境中活动，水草和底质为小鱼提供生活空间。繁殖还需要适合的活体淡水蚌。水体看起来清澈，并不等于已经具备它完成生活史所需的条件。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它怎样取得食物",
      "body": "中华鳑鲏取食藻类、植物碎屑及小型水生动物等。研究者在不同水域记录到不同食物组成，人工实验也观察到它捕食小龙虾幼体。这里不设固定食物比例，水族饲养的投喂也不能代替野外食谱。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "成长中的变化",
      "body": "雌鱼用产卵管把卵送入双壳贝类体内，幼鱼在贝内度过早期阶段，到能够游泳后离开。蚌是活体宿主，不是一只空贝壳；这种繁殖依赖也不意味着鱼和蚌的关系在各种条件下都互相有利。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案指 Rhodeus sinensis，不把高体鳑鲏、彩石鳑鲏或其他近缘种当作同一种。GBIF 把它归入鲤科，FishBase 使用 Acheilognathidae。项目保留 GBIF 分类口径，并注明鱼类资料中科级范围的差别。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：雌鱼腹部后方细长的产卵管有什么作用？观察任务：对照普通体色、繁殖期雄鱼和雌鱼的图，找差异；不为观察翻开活蚌。保护水域环境，不把饲养或购买的动物放入野外。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "中华鳑鲏的名称与记录",
      "body": "Günther 于 1868 年发表 Rhodeus sinensis。后续研究持续核对鳑鲏类的物种边界，因此仅凭鲜艳体色或俗称不能确定物种。学名及命名作者用于追溯名称，不代表当年才有人发现鱼会在蚌内繁殖。"
    }
  ],
  "keyFacts": [
    "中华鳑鲏的身体侧扁，轮廓近椭圆，嘴边没有须。繁殖期雄鱼会显出较鲜明的体色，雌鱼则可见细长产卵管。普通体色、繁殖期体色和雌雄差异应分别看，不能把所有鳑鲏都画成红肚子的雄鱼。",
    "中华鳑鲏取食藻类、植物碎屑及小型水生动物等。研究者在不同水域记录到不同食物组成，人工实验也观察到它捕食小龙虾幼体。这里不设固定食物比例，水族饲养的投喂也不能代替野外食谱。",
    "雌鱼用产卵管把卵送入双壳贝类体内，幼鱼在贝内度过早期阶段，到能够游泳后离开。蚌是活体宿主，不是一只空贝壳；这种繁殖依赖也不意味着鱼和蚌的关系在各种条件下都互相有利。"
  ],
  "threats": [
    "水域污染",
    "栖息环境改变"
  ],
  "conservationActions": [
    "保护原生水域及岸边植被；不随意放生或转移水生动物。",
    "保留适合的活体淡水蚌及其栖息环境，不捞取活蚌作展示。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "有水草和淡水蚌的河塘缓流"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "侧扁身体与蚌内育幼"
    }
  ],
  "media": {
    "image": "./images/species/chinese-bitterling/01-cover.webp",
    "alt": "中华鳑鲏与淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/chinese-bitterling/02-observation.webp",
        "title": "普通体色的侧扁身体",
        "alt": "中华鳑鲏：普通体色的侧扁身体，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。普通体色的侧扁身体；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-bitterling/03-observation.webp",
        "title": "繁殖期雄鱼",
        "alt": "中华鳑鲏：繁殖期雄鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。繁殖期雄鱼；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-bitterling/04-observation.webp",
        "title": "雌鱼与产卵管",
        "alt": "中华鳑鲏：雌鱼与产卵管，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。雌鱼与产卵管；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-bitterling/05-observation.webp",
        "title": "水草旁的幼鱼",
        "alt": "中华鳑鲏：水草旁的幼鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水草旁的幼鱼；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-bitterling/06-observation.webp",
        "title": "活体淡水蚌与成鱼",
        "alt": "中华鳑鲏：活体淡水蚌与成鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。活体淡水蚌与成鱼；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
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
      "title": "原始研究：中华鳑鲏的杂食性与幼虾捕食实验",
      "url": "https://www.sciencedirect.com/science/article/pii/S2352513424005957",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "GBIF：接受名称、命名作者与分类链",
      "url": "https://www.gbif.org/species/2360841",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FishBase：生态对照及全球 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Rhodeus-sinensis.html",
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
      "title": "原始研究：朝鲜半岛种群及蚌依赖繁殖",
      "url": "https://pubmed.ncbi.nlm.nih.gov/42728659/",
      "kind": "distribution",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
