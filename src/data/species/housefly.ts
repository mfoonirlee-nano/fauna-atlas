import type { Species } from '../../types/species.ts';

const profile = {
  "id": "housefly",
  "slug": "housefly",
  "names": {
    "zh": "家蝇",
    "en": "House Fly"
  },
  "scientificName": "Musca domestica",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Arthropoda",
      "zhName": "节肢动物门"
    },
    "class": {
      "scientificName": "Insecta",
      "zhName": "昆虫纲"
    },
    "order": {
      "scientificName": "Diptera",
      "zhName": "双翅目"
    },
    "family": {
      "scientificName": "Muscidae",
      "zhName": "蝇科"
    },
    "genus": {
      "scientificName": "Musca",
      "zhName": "蝇属"
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
    "assessor": "本批未核实全球物种级 IUCN 评估，页面暂记 NE；检索无结果不证明从未评估，地区保护等级和入侵风险不换算成全球等级。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "世界多地"
    ],
    "countries": [],
    "range": "世界多地。家蝇常在建筑、农场和生活垃圾附近停落。它会在食物与腐败有机物之间移动；观察时用照片比较落足位置，不把它引到餐具上，也不触碰它停过的食物。地图代表点不表达完整范围，也不是野外观察记录。",
    "center": {
      "lat": 30,
      "lng": 110
    }
  },
  "habitats": [
    {
      "name": "建筑周边与有机物附近",
      "realm": "terrestrial",
      "description": "家蝇常在建筑、农场和生活垃圾附近停落。它会在食物与腐败有机物之间移动；观察时用照片比较落足位置，不把它引到餐具上，也不触碰它停过的食物。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore",
      "detritivore"
    ],
    "foods": [
      "液态食物",
      "腐熟植物材料中的微生物"
    ],
    "description": "成虫用舐吸式口器获取液体，遇到固体食物时可先使表面液化。幼虫在潮湿腐熟材料中取食。家蝇不会用针状口器叮咬，但接触食物可带来卫生问题。"
  },
  "tags": [
    "家蝇",
    "建筑周边与有机物附近"
  ],
  "summary": "家蝇胸背有四条深色纵纹，成虫用舐吸式口器取食。白色幼虫在潮湿有机物中生长，随后进入棕色的蛹壳。",
  "description": "家蝇的复眼大，胸背常能看到四条深色纵纹。它只有一对用于飞行的翅，后翅退化为平衡棒。灰色体色不能单独用来鉴种，厩螫蝇等相似种需要继续比较口器和胸部特征。本档案采用 GBIF 的 Musca domestica，归入双翅目、蝇科、蝇属。“苍蝇”是多种相似昆虫的日常统称，不能把家中出现的每一只蝇都叫家蝇。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "家蝇的复眼大，胸背常能看到四条深色纵纹。它只有一对用于飞行的翅，后翅退化为平衡棒。灰色体色不能单独用来鉴种，厩螫蝇等相似种需要继续比较口器和胸部特征。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "家蝇常在建筑、农场和生活垃圾附近停落。它会在食物与腐败有机物之间移动；观察时用照片比较落足位置，不把它引到餐具上，也不触碰它停过的食物。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物与口器",
      "body": "成虫用舐吸式口器获取液体，遇到固体食物时可先使表面液化。幼虫在潮湿腐熟材料中取食。家蝇不会用针状口器叮咬，但接触食物可带来卫生问题。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "从卵到成虫",
      "body": "雌蝇把卵产在适合幼虫生长的有机物上。幼虫无足，发育后离开过湿的食物寻找较干处，最后在硬化的末龄幼虫皮内化蛹。卵、幼虫、蛹和成虫构成完全变态，温度会影响发育速度。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "本档案采用 GBIF 的 Musca domestica，归入双翅目、蝇科、蝇属。“苍蝇”是多种相似昆虫的日常统称，不能把家中出现的每一只蝇都叫家蝇。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：胸背有几条纵纹，口器向前伸成硬针了吗？观察任务：在已有影像中比较家蝇与厩螫蝇。成人保持食物覆盖并及时清理有机垃圾，孩子不接触幼虫生长的材料。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Musca domestica 的名称记录",
      "body": "Linnaeus 在 1758 年发表 Musca domestica。GBIF 当前接受这一组合；命名年份记录名称的发表，不代表人类从那一年才认识这种与生活环境关系密切的昆虫。"
    }
  ],
  "keyFacts": [
    "家蝇的复眼大，胸背常能看到四条深色纵纹。它只有一对用于飞行的翅，后翅退化为平衡棒。灰色体色不能单独用来鉴种，厩螫蝇等相似种需要继续比较口器和胸部特征。",
    "成虫用舐吸式口器获取液体，遇到固体食物时可先使表面液化。幼虫在潮湿腐熟材料中取食。家蝇不会用针状口器叮咬，但接触食物可带来卫生问题。",
    "雌蝇把卵产在适合幼虫生长的有机物上。幼虫无足，发育后离开过湿的食物寻找较干处，最后在硬化的末龄幼虫皮内化蛹。卵、幼虫、蛹和成虫构成完全变态，温度会影响发育速度。"
  ],
  "threats": [
    "局部生活环境变化；所引资料未量化全球种群趋势"
  ],
  "conservationActions": [
    "辨认问题：胸背有几条纵纹，口器向前伸成硬针了吗？观察任务：在已有影像中比较家蝇与厩螫蝇。成人保持食物覆盖并及时清理有机垃圾，孩子不接触幼虫生长的材料。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "建筑周边与有机物附近"
    },
    {
      "key": "food",
      "label": "食物观察",
      "value": "液态食物、腐熟植物材料中的微生物"
    }
  ],
  "media": {
    "image": "./images/species/housefly/01-cover.webp",
    "alt": "家蝇及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/housefly/02-observation.webp",
        "title": "复眼与短触角",
        "alt": "家蝇：复眼与短触角，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。复眼由许多小眼组成，触角上的芒需要放大查看。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/housefly/03-observation.webp",
        "title": "胸背的四条纵纹",
        "alt": "家蝇：胸背的四条纵纹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。胸背纵纹可作线索，鉴种还需要比较其他结构。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/housefly/04-observation.webp",
        "title": "舐吸式口器",
        "alt": "家蝇：舐吸式口器，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成虫获取液态食物，静图只呈现一次取食姿态。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/housefly/05-observation.webp",
        "title": "腐熟材料中的幼虫",
        "alt": "家蝇：腐熟材料中的幼虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼虫无足，在适宜的潮湿有机物里发育；不要取材料供孩子触摸。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/housefly/06-observation.webp",
        "title": "硬化的蛹壳",
        "alt": "家蝇：硬化的蛹壳，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。蛹在末龄幼虫皮硬化形成的蛹壳中发育，图示不能判断准确日龄。 同图不同阶段作发育对照，比例仅作示意。",
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
      "title": "GBIF：接受学名与分类链",
      "url": "https://www.gbif.org/species/1524843",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "加州大学 IPM：家蝇的形态、取食与生活史",
      "url": "https://ipm.ucanr.edu/home-and-landscape/flies/",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "佛罗里达大学：家蝇物种介绍",
      "url": "https://doi.org/10.32473/edis-in205-1998",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球名录：本批检索记录",
      "url": "https://api.gbif.org/v1/species/search?datasetKey=19491596-35ae-4a91-9a98-85cf505f1bd3&q=Musca%20domestica&limit=50",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
