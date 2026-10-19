import type { Species } from '../../types/species.ts';

const profile = {
  "id": "domestic-yak",
  "slug": "domestic-yak",
  "names": {
    "zh": "牦牛",
    "en": "Domestic Yak",
    "aliases": [
      "家牦牛"
    ]
  },
  "scientificName": "Bos grunniens",
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
      "scientificName": "Bos",
      "zhName": "牛属"
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
      "青藏高原及邻近高地的饲养地区"
    ],
    "countries": [],
    "range": "家牦牛饲养集中在青藏高原及邻近喜马拉雅、中亚和蒙古等高地，另有少量其他地区的饲养群体。地图点位于青藏高原，表示代表性牧养地区，不是野牦牛的观测位置。",
    "center": {
      "lat": 33,
      "lng": 97
    }
  },
  "habitats": [
    {
      "name": "高寒草甸牧场",
      "realm": "terrestrial",
      "description": "家牦牛主要在青藏高原及邻近山地放牧，利用高寒草甸、草原和季节牧场。牧人会根据草料、水源与天气管理牛群；高地适应能力不代表它在炎热低海拔环境中同样舒适。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "高山禾草",
      "莎草",
      "其他草本植物"
    ],
    "description": "家牦牛吃禾草、莎草和其他低矮植物，并通过反刍再次咀嚼食物。牧场的生长季较短，冬春草料状况会影响身体状态，饲养方式需要结合当地牧草和补饲条件。"
  },
  "tags": [
    "牦牛",
    "高寒草甸牧场"
  ],
  "summary": "牦牛腹侧长毛垂在短腿周围，厚毛和身体特征适合寒冷高地。本页记录家牦牛 Bos grunniens，与野牦牛 Bos mutus 分开。",
  "description": "家牦牛身体结实，肩部较高，腹侧和腿边垂着长毛，尾部也有浓密长毛。家养群体可见黑、褐、白或花色等毛色差异，角的形状与大小也会变化；毛色不能单独决定家养或野生身份。图册采用 GBIF 的 Bos grunniens，中文范围为家牦牛；野牦牛 Bos mutus 另作物种处理。旧文献有时把两者统称为牦牛，引用分布、体型或保育数据前需要先核对研究对象。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "家牦牛身体结实，肩部较高，腹侧和腿边垂着长毛，尾部也有浓密长毛。家养群体可见黑、褐、白或花色等毛色差异，角的形状与大小也会变化；毛色不能单独决定家养或野生身份。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "家牦牛主要在青藏高原及邻近山地放牧，利用高寒草甸、草原和季节牧场。牧人会根据草料、水源与天气管理牛群；高地适应能力不代表它在炎热低海拔环境中同样舒适。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物怎样进入身体",
      "body": "家牦牛吃禾草、莎草和其他低矮植物，并通过反刍再次咀嚼食物。牧场的生长季较短，冬春草料状况会影响身体状态，饲养方式需要结合当地牧草和补饲条件。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼体与成体",
      "body": "母牦牛产犊后用乳汁哺育幼犊，幼体随后开始尝试植物食物。家畜的繁殖与生长受营养和管理影响，不能把某个牧场的生长速度推广到全部品种。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "图册采用 GBIF 的 Bos grunniens，中文范围为家牦牛；野牦牛 Bos mutus 另作物种处理。旧文献有时把两者统称为牦牛，引用分布、体型或保育数据前需要先核对研究对象。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：腹侧长毛和尾毛分别在哪里？观察任务：比较花色与深色家牦牛，找出毛色变化之外共有的体形。 保存地方品种、改善饲草管理并兼顾牧场恢复；野牦牛保护状态需另行查证。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Bos grunniens 的名称记录",
      "body": "Linnaeus 在 1766 年以 Bos grunniens 命名牦牛，FAO 也记录了 Poephagus grunniens 的另一属级组合。本页统一采用 GBIF 的牛属名称，现代学名与当地牧养名称可以并存。"
    }
  ],
  "keyFacts": [
    "家牦牛身体结实，肩部较高，腹侧和腿边垂着长毛，尾部也有浓密长毛。家养群体可见黑、褐、白或花色等毛色差异，角的形状与大小也会变化；毛色不能单独决定家养或野生身份。",
    "家牦牛吃禾草、莎草和其他低矮植物，并通过反刍再次咀嚼食物。牧场的生长季较短，冬春草料状况会影响身体状态，饲养方式需要结合当地牧草和补饲条件。",
    "母牦牛产犊后用乳汁哺育幼犊，幼体随后开始尝试植物食物。家畜的繁殖与生长受营养和管理影响，不能把某个牧场的生长速度推广到全部品种。"
  ],
  "threats": [
    "地方品种资源流失",
    "季节性饲草不足与牧场压力"
  ],
  "conservationActions": [
    "保存地方品种、改善饲草管理并兼顾牧场恢复；野牦牛保护状态需另行查证。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "高寒草甸牧场"
    },
    {
      "key": "diet",
      "label": "主要食物",
      "value": "高山禾草、莎草"
    }
  ],
  "media": {
    "image": "./images/species/domestic-yak/01-cover.webp",
    "alt": "牦牛及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/domestic-yak/02-observation.webp",
        "title": "高寒草甸采食",
        "alt": "牦牛：高寒草甸采食，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。禾草和其他低矮植物构成牧场食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-yak/03-observation.webp",
        "title": "卧地反刍",
        "alt": "牦牛：卧地反刍，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。反刍包含再次咀嚼，单幅图片不能直接显示消化过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-yak/04-observation.webp",
        "title": "母牛与幼犊",
        "alt": "牦牛：母牛与幼犊，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。家牦牛幼体以乳汁开始成长。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-yak/05-observation.webp",
        "title": "家养群体的花色差异",
        "alt": "牦牛：家养群体的花色差异，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。黑白花色只是家牦牛毛色变化的一例。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-yak/06-observation.webp",
        "title": "寒冷高地的厚毛",
        "alt": "牦牛：寒冷高地的厚毛，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。长毛与浓密毛被可从外形观察，高原适应还涉及体内生理。",
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
      "url": "https://www.gbif.org/species/2441019",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "FAO：牦牛起源、家养范围和分布",
      "url": "https://www.fao.org/4/ad347e/ad347e05.htm",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "FAO：牦牛品种与命名历史",
      "url": "https://www.fao.org/4/ad347e/ad347e06.htm",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "FAO：牦牛饲养管理与幼犊",
      "url": "https://www.fao.org/4/ad347e/ad347e0j.htm",
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
