import type { Species } from '../../types/species.ts';

const profile = {
  "id": "bactrian-camel",
  "slug": "bactrian-camel",
  "names": {
    "zh": "双峰驼",
    "en": "Domestic Bactrian Camel",
    "aliases": [
      "家双峰驼"
    ]
  },
  "scientificName": "Camelus bactrianus",
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
      "scientificName": "Camelidae",
      "zhName": "骆驼科"
    },
    "genus": {
      "scientificName": "Camelus",
      "zhName": "骆驼属"
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
    "assessor": "本档案限定家养范围，记录为 NE；不套用野生近缘物种的 IUCN 等级，也不把家畜数量当作野生种群估计。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "中亚及中国北部的饲养地区"
    ],
    "countries": [],
    "range": "家双峰驼主要由人类在中亚、中国北部及邻近干旱地区饲养，也见于世界各地展示或其他饲养设施。这里记录饲养范围，地图点代表蒙古牧养地区，不是野骆驼的天然分布记录。",
    "center": {
      "lat": 43,
      "lng": 105
    }
  },
  "habitats": [
    {
      "name": "中亚荒漠草原牧场",
      "realm": "terrestrial",
      "description": "牧人饲养双峰驼的地区多有荒漠草原和稀疏灌丛，活动路线与水源、季节和饲养管理有关。它能在沙地及砾石地上行走；动物园场景与中亚牧场的资源条件并不相同。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草本植物",
      "灌木枝叶"
    ],
    "description": "双峰驼取食草本和灌木枝叶，也能利用较粗硬的植物材料。它会反刍，驼峰中的脂肪可在食物不足时供能。能够耐受缺水不表示饲养时可以省去清洁饮水。"
  },
  "tags": [
    "双峰驼",
    "中亚荒漠草原牧场"
  ],
  "summary": "双峰驼背上有两个储存脂肪的驼峰，宽阔的足垫承托身体。本档案介绍家养双峰驼，野骆驼另属 Camelus ferus。",
  "description": "家双峰驼有两个驼峰、弯曲长颈和较长的毛，寒冷季节的毛更浓密。宽阔的两趾足下有厚实足垫；睫毛、耳毛及可收缩的鼻孔有助于应对风沙。驼峰主要储存脂肪，不能把它解释成装水的水囊。图册以 Camelus bactrianus 表示家双峰驼，归入骆驼科、骆驼属。野骆驼 Camelus ferus 是另一个现生物种，不能把它的分布、数量和极危状态直接写在家双峰驼名下。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "家双峰驼有两个驼峰、弯曲长颈和较长的毛，寒冷季节的毛更浓密。宽阔的两趾足下有厚实足垫；睫毛、耳毛及可收缩的鼻孔有助于应对风沙。驼峰主要储存脂肪，不能把它解释成装水的水囊。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "牧人饲养双峰驼的地区多有荒漠草原和稀疏灌丛，活动路线与水源、季节和饲养管理有关。它能在沙地及砾石地上行走；动物园场景与中亚牧场的资源条件并不相同。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物怎样进入身体",
      "body": "双峰驼取食草本和灌木枝叶，也能利用较粗硬的植物材料。它会反刍，驼峰中的脂肪可在食物不足时供能。能够耐受缺水不表示饲养时可以省去清洁饮水。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼体与成体",
      "body": "母驼通常产下一只驼羔并哺乳，幼体随母体成长。换毛时旧的长毛会呈片状脱落，毛被不整齐可以是季节变化；是否健康仍需结合采食、行动和专业检查。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "图册以 Camelus bactrianus 表示家双峰驼，归入骆驼科、骆驼属。野骆驼 Camelus ferus 是另一个现生物种，不能把它的分布、数量和极危状态直接写在家双峰驼名下。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：驼峰中主要储存什么？观察任务：对照冬毛与换毛图，看长毛分布和宽大的足垫。 保存地方家畜遗传资源并提供适宜饲养条件；野骆驼保护需按另一物种单独讨论。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Camelus bactrianus 的名称记录",
      "body": "Linnaeus 在 1758 年发表 Camelus bactrianus 这一名称，后来研究进一步厘清它与野骆驼的关系。家养历史早于现代双名法，科学命名年份不等于驯养开始的年份。"
    }
  ],
  "keyFacts": [
    "家双峰驼有两个驼峰、弯曲长颈和较长的毛，寒冷季节的毛更浓密。宽阔的两趾足下有厚实足垫；睫毛、耳毛及可收缩的鼻孔有助于应对风沙。驼峰主要储存脂肪，不能把它解释成装水的水囊。",
    "双峰驼取食草本和灌木枝叶，也能利用较粗硬的植物材料。它会反刍，驼峰中的脂肪可在食物不足时供能。能够耐受缺水不表示饲养时可以省去清洁饮水。",
    "母驼通常产下一只驼羔并哺乳，幼体随母体成长。换毛时旧的长毛会呈片状脱落，毛被不整齐可以是季节变化；是否健康仍需结合采食、行动和专业检查。"
  ],
  "threats": [
    "地方家畜品种资源流失",
    "饲养条件和牧场资源压力"
  ],
  "conservationActions": [
    "保存地方家畜遗传资源并提供适宜饲养条件；野骆驼保护需按另一物种单独讨论。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "中亚荒漠草原牧场"
    },
    {
      "key": "diet",
      "label": "主要食物",
      "value": "草本植物、灌木枝叶"
    }
  ],
  "media": {
    "image": "./images/species/bactrian-camel/01-cover.webp",
    "alt": "双峰驼及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/bactrian-camel/02-observation.webp",
        "title": "取食荒漠草原植物",
        "alt": "双峰驼：取食荒漠草原植物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。双峰驼利用植物性食物，种类随牧场而变。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bactrian-camel/03-observation.webp",
        "title": "睫毛与分开的上唇",
        "alt": "双峰驼：睫毛与分开的上唇，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。面部细节用于观察，不能从图片测量耐旱能力。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bactrian-camel/04-observation.webp",
        "title": "春季换毛",
        "alt": "双峰驼：春季换毛，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。旧长毛可成片脱落，季节影响毛被外观。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bactrian-camel/05-observation.webp",
        "title": "母驼与驼羔",
        "alt": "双峰驼：母驼与驼羔，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼体依靠母乳成长，同框不是实测体型比较。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bactrian-camel/06-observation.webp",
        "title": "宽足垫上的步伐",
        "alt": "双峰驼：宽足垫上的步伐，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。两趾和厚实足垫共同承托身体。",
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
      "url": "https://www.gbif.org/species/2441238",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "Mammal Diversity Database：家双峰驼的分类范围",
      "url": "https://www.mammaldiversity.org/taxon/1006382/",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "Oryx 原始论文：野骆驼名称与家双峰驼区别",
      "url": "https://doi.org/10.1017/S0030605322000114",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "ADW：双峰驼外形与生理特征（旧页范围混合，限用形态）",
      "url": "https://animaldiversity.org/accounts/Camelus_bactrianus/",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN：NE 与全球红色名录的评估范围",
      "url": "https://nrl.iucnredlist.org/about/faqs",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
