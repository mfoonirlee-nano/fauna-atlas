import type { Species } from '../../types/species.ts';

const profile = {
  "id": "red-deer",
  "slug": "red-deer",
  "names": {
    "zh": "马鹿",
    "en": "Red Deer",
    "aliases": [
      "欧洲马鹿",
      "西方马鹿"
    ]
  },
  "scientificName": "Cervus elaphus",
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
      "scientificName": "Cervidae",
      "zhName": "鹿科"
    },
    "genus": {
      "scientificName": "Cervus",
      "zhName": "鹿属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "trend": "increasing",
    "assessedYear": 2015,
    "assessor": "IUCN 全球评估为 LC，评估年份 2015；全球等级不代替地区状态。2018 年发表，2019 年勘误。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "欧洲、西亚及北非部分原生地区"
    ],
    "countries": [],
    "range": "按本页的物种范围，原生种群主要见于欧洲、西亚与北非部分地区，另有新西兰、澳大利亚和南美等地的引入群体。地图点代表苏格兰的一处地区，不表示全部中文“马鹿”的天然分布。",
    "center": {
      "lat": 56,
      "lng": -4
    }
  },
  "habitats": [
    {
      "name": "森林、林缘与开阔山地",
      "realm": "terrestrial",
      "description": "马鹿利用森林、林缘和开阔山地，环境会影响群体大小。雄鹿与雌鹿群在一年中常分开活动，繁殖季再聚合；苏格兰开阔山地的生活方式不代表全部原生种群。",
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
      "莎草",
      "灌木叶片",
      "嫩枝"
    ],
    "description": "马鹿吃草、莎草、灌木叶片和嫩枝等植物，也会反刍。林地和山地种群可获得的食物不同，季节会改变它们在木本植物与草本植物之间的取食比例。"
  },
  "tags": [
    "马鹿",
    "森林、林缘与开阔山地"
  ],
  "summary": "马鹿的成年雄鹿有分枝鹿角，成年雌鹿通常无角。本页按 Cervus elaphus 的现行范围记录西方马鹿，加拿大马鹿等近缘种另作区分。",
  "description": "成年马鹿的夏毛常呈红褐色，冬毛更厚、更灰暗，臀部有浅色斑。雄鹿的角分枝并经历年周期，雌鹿通常无角；幼鹿可带白斑，不能将幼鹿的斑点当作成年梅花鹿的鉴定结论。本页的马鹿特指 Cervus elaphus，主要对应欧洲、西亚和北非的西方马鹿范围。加拿大马鹿 Cervus canadensis 以及部分亚洲近缘分类群另有界定；旧称“马鹿”的亚洲记录不能不经核对全部并入此页。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "成年马鹿的夏毛常呈红褐色，冬毛更厚、更灰暗，臀部有浅色斑。雄鹿的角分枝并经历年周期，雌鹿通常无角；幼鹿可带白斑，不能将幼鹿的斑点当作成年梅花鹿的鉴定结论。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "马鹿利用森林、林缘和开阔山地，环境会影响群体大小。雄鹿与雌鹿群在一年中常分开活动，繁殖季再聚合；苏格兰开阔山地的生活方式不代表全部原生种群。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物怎样进入身体",
      "body": "马鹿吃草、莎草、灌木叶片和嫩枝等植物，也会反刍。林地和山地种群可获得的食物不同，季节会改变它们在木本植物与草本植物之间的取食比例。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼体与成体",
      "body": "母鹿通常产下一只幼鹿并哺乳。雄鹿每年经历鹿角生长、硬化和脱落，新角初期覆有茸皮；角枝数量同时受营养与个体差异影响，无法直接换算准确年龄。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "本页的马鹿特指 Cervus elaphus，主要对应欧洲、西亚和北非的西方马鹿范围。加拿大马鹿 Cervus canadensis 以及部分亚洲近缘分类群另有界定；旧称“马鹿”的亚洲记录不能不经核对全部并入此页。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：成年雌鹿和雄鹿的角一样吗？观察任务：比较茸角、硬角与冬毛，分清身体不同部位的季节变化。 按地区监测原生种群和栖息地，管理引入及杂交影响。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Cervus elaphus 的名称记录",
      "body": "Linnaeus 在 1758 年命名 Cervus elaphus。过去文献曾把更广的欧亚与北美鹿群纳入该名，现代研究和 IUCN 评估已区分若干近缘种；比较旧分布图时应先核对采用的分类范围。"
    }
  ],
  "keyFacts": [
    "成年马鹿的夏毛常呈红褐色，冬毛更厚、更灰暗，臀部有浅色斑。雄鹿的角分枝并经历年周期，雌鹿通常无角；幼鹿可带白斑，不能将幼鹿的斑点当作成年梅花鹿的鉴定结论。",
    "马鹿吃草、莎草、灌木叶片和嫩枝等植物，也会反刍。林地和山地种群可获得的食物不同，季节会改变它们在木本植物与草本植物之间的取食比例。",
    "母鹿通常产下一只幼鹿并哺乳。雄鹿每年经历鹿角生长、硬化和脱落，新角初期覆有茸皮；角枝数量同时受营养与个体差异影响，无法直接换算准确年龄。"
  ],
  "threats": [
    "部分地区的栖息地丧失与猎捕",
    "跨地区引种造成遗传混合"
  ],
  "conservationActions": [
    "按地区监测原生种群和栖息地，管理引入及杂交影响。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "森林、林缘与开阔山地"
    },
    {
      "key": "diet",
      "label": "主要食物",
      "value": "草、莎草"
    }
  ],
  "media": {
    "image": "./images/species/red-deer/01-cover.webp",
    "alt": "马鹿及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/red-deer/02-observation.webp",
        "title": "没有角的成年雌鹿",
        "alt": "马鹿：没有角的成年雌鹿，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。无角可以是成年雌鹿，不能据此判定年龄。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/red-deer/03-observation.webp",
        "title": "长着茸皮的新角",
        "alt": "马鹿：长着茸皮的新角，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。新角生长时表面覆有茸皮。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/red-deer/04-observation.webp",
        "title": "雌鹿与带斑幼鹿",
        "alt": "马鹿：雌鹿与带斑幼鹿，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。白斑常见于幼鹿，成年西方马鹿通常不保留这种斑点。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/red-deer/05-observation.webp",
        "title": "繁殖季的雄鹿",
        "alt": "马鹿：繁殖季的雄鹿，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。张口姿态重建鸣叫情景，图片没有声音记录。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/red-deer/06-observation.webp",
        "title": "较厚的冬毛",
        "alt": "马鹿：较厚的冬毛，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。冬季毛色与毛厚变化不能直接换算年龄。",
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
      "url": "https://www.gbif.org/species/2440958",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "NatureScot：马鹿的生境、食物与群体",
      "url": "https://www.nature.scot/plants-animals-and-fungi/mammals/land-mammals/deer",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "NatureScot：马鹿遗传监测与近缘种区别",
      "url": "https://www.nature.scot/doc/genetic-scorecard-indicator-red-deer",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN：西方马鹿分类、全球分布与评估详情",
      "url": "https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T55997072A142404453.en",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球受威胁物种名录",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/176669406",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 全球评估与采用的名称范围",
      "url": "https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T55997072A142404453.en",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
