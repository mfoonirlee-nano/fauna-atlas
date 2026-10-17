import type { Species } from '../../types/species.ts';

const profile = {
  "id": "pale-chub",
  "slug": "pale-chub",
  "names": {
    "zh": "宽鳍鱲",
    "en": "Pale Chub",
    "aliases": []
  },
  "scientificName": "Zacco platypus",
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
      "scientificName": "Zacco",
      "zhName": "鱲属"
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
    "assessedYear": 2023,
    "assessor": "采用 FishBase 所列全球 IUCN 等级与评估日期；未独立核实全球趋势，保留 unknown。评估所用物种范围与后续分类修订需分别阅读，不能据此给未划定的近缘种赋予同一等级。"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "东亚溪流，具体范围依分类处理"
    ],
    "countries": [],
    "range": "本档案采用 Zacco platypus 的名称范围，以东亚溪流为观察背景，代表点取日本。近年研究指出中国南方广义旧记录混有尖鳍鱲等近缘种，因此不照搬从中国北部到越南的旧宽泛范围；代表坐标不表示完整分布。",
    "center": {
      "lat": 35.0,
      "lng": 135.7
    }
  },
  "habitats": [
    {
      "name": "清浅溪流与河流砾石水段",
      "realm": "freshwater",
      "description": "宽鳍鱲常在溪流和河流的流水段活动，砾石、水流和浅水边缘提供不同的小环境。静止画面只能显示鱼鳍与身体的姿势，游泳方向、速度和对水流的反应要靠连续影像观察。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "浮游动物",
      "小型甲壳类",
      "藻类",
      "有机碎屑"
    ],
    "description": "宽鳍鱲取食浮游动物、小型甲壳类等，也会摄入藻类和碎屑。它会利用水流带来的食物，具体食谱随水域和个体大小变化，不应仅凭彩色体侧推断食性。"
  },
  "tags": [
    "宽鳍鱲",
    "淡水鱼",
    "清浅溪流与河流砾石水段"
  ],
  "summary": "宽鳍鱲生活在流水中，繁殖期雄鱼的体侧斑带和臀鳍格外显眼。",
  "description": "宽鳍鱲身体侧扁，尾鳍分叉。普通体色以银色为主，繁殖期雄鱼体侧可见蓝绿色斑带，腹侧泛红，臀鳍也更显眼。颜色受性别、季节和光照影响，辨认时要同时比较体形和鳍的位置。宽鳍鱲常在溪流和河流的流水段活动，砾石、水流和浅水边缘提供不同的小环境。静止画面只能显示鱼鳍与身体的姿势，游泳方向、速度和对水流的反应要靠连续影像观察。宽鳍鱲取食浮游动物、小型甲壳类等，也会摄入藻类和碎屑。它会利用水流带来的食物，具体食谱随水域和个体大小变化，不应仅凭彩色体侧推断食性。幼鱼的体色和鳍形与繁殖期雄鱼不同，观察成长时应比较相同方向、相近光照的画面。繁殖期雄鱼的鲜艳颜色是阶段性特点，不能据此推断幼鱼的性别，也不能把图中的个体当成连续成长记录。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体和鳍开始",
      "body": "宽鳍鱲身体侧扁，尾鳍分叉。普通体色以银色为主，繁殖期雄鱼体侧可见蓝绿色斑带，腹侧泛红，臀鳍也更显眼。颜色受性别、季节和光照影响，辨认时要同时比较体形和鳍的位置。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "水里的生活位置",
      "body": "宽鳍鱲常在溪流和河流的流水段活动，砾石、水流和浅水边缘提供不同的小环境。静止画面只能显示鱼鳍与身体的姿势，游泳方向、速度和对水流的反应要靠连续影像观察。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它怎样取得食物",
      "body": "宽鳍鱲取食浮游动物、小型甲壳类等，也会摄入藻类和碎屑。它会利用水流带来的食物，具体食谱随水域和个体大小变化，不应仅凭彩色体侧推断食性。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "成长中的变化",
      "body": "幼鱼的体色和鳍形与繁殖期雄鱼不同，观察成长时应比较相同方向、相近光照的画面。繁殖期雄鱼的鲜艳颜色是阶段性特点，不能据此推断幼鱼的性别，也不能把图中的个体当成连续成长记录。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案使用 GBIF 接受名 Zacco platypus，与马口鱼 Opsariichthys bidens 分开。旧文献把中国南方一些近缘鱼混入广义 Z. platypus；近年研究区分尖鳍鱲及其他近缘种，因此这里不照搬旧资料的宽泛范围，也不把中国溪流里有彩色斑带的小鱼一概认作本种。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：普通体色和繁殖期雄鱼的身体有哪些变化？观察任务：比较两张侧面图中的斑带与臀鳍，再从自然影像观察鱼怎样在流水里活动。保护水域环境，不把饲养或购买的动物放入野外。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "宽鳍鱲的名称与记录",
      "body": "Temminck 与 Schlegel 于 1846 年发表本种名称。现用组合为 Zacco platypus，部分文献使用 Opsariichthys platypus。研究者仍在修订鱲类边界；检索“宽鳍鱲”时，需要核对学名、样本地点和论文年代。"
    }
  ],
  "keyFacts": [
    "宽鳍鱲身体侧扁，尾鳍分叉。普通体色以银色为主，繁殖期雄鱼体侧可见蓝绿色斑带，腹侧泛红，臀鳍也更显眼。颜色受性别、季节和光照影响，辨认时要同时比较体形和鳍的位置。",
    "宽鳍鱲取食浮游动物、小型甲壳类等，也会摄入藻类和碎屑。它会利用水流带来的食物，具体食谱随水域和个体大小变化，不应仅凭彩色体侧推断食性。",
    "幼鱼的体色和鳍形与繁殖期雄鱼不同，观察成长时应比较相同方向、相近光照的画面。繁殖期雄鱼的鲜艳颜色是阶段性特点，不能据此推断幼鱼的性别，也不能把图中的个体当成连续成长记录。"
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
      "value": "清浅溪流与河流砾石水段"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "体侧斑带与繁殖期鳍形"
    }
  ],
  "media": {
    "image": "./images/species/pale-chub/01-cover.webp",
    "alt": "宽鳍鱲与淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/pale-chub/02-observation.webp",
        "title": "普通体色与体侧斑带",
        "alt": "宽鳍鱲：普通体色与体侧斑带，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。普通体色与体侧斑带；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pale-chub/03-observation.webp",
        "title": "繁殖期雄鱼的鳍与体色",
        "alt": "宽鳍鱲：繁殖期雄鱼的鳍与体色，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。繁殖期雄鱼的鳍与体色；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pale-chub/04-observation.webp",
        "title": "砾石上方的流水环境",
        "alt": "宽鳍鱲：砾石上方的流水环境，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。砾石上方的流水环境；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pale-chub/05-observation.webp",
        "title": "溪边浅水中的幼鱼",
        "alt": "宽鳍鱲：溪边浅水中的幼鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。溪边浅水中的幼鱼；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pale-chub/06-observation.webp",
        "title": "成鱼与水下石块",
        "alt": "宽鳍鱲：成鱼与水下石块，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成鱼与水下石块；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
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
      "url": "https://www.gbif.org/species/2365787",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FishBase：生态对照及全球 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Zacco-platypus.html",
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
      "title": "2024 基因组原始研究：分类边界与形态",
      "url": "https://www.nature.com/articles/s41597-024-03163-w",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2023 系统地理原始研究：中国南方旧记录的混用",
      "url": "https://www.frontiersin.org/journals/ecology-and-evolution/articles/10.3389/fevo.2023.1142810/full",
      "kind": "distribution",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
