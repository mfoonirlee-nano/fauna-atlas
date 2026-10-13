import type { Species } from '../../types/species.ts';

const profile = {
  "id": "domestic-sheep",
  "slug": "domestic-sheep",
  "names": {
    "zh": "绵羊",
    "en": "Domestic Sheep",
    "aliases": [
      "羊"
    ]
  },
  "scientificName": "Ovis aries",
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
      "scientificName": "Ovis",
      "zhName": "羊属"
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
    "range": "人类在世界多地的牧场和农场饲养绵羊。不同品种适应的环境有差异，此处不把饲养分布当作野生羊类的原生范围。"
  },
  "habitats": [
    {
      "name": "牧场与农场",
      "realm": "terrestrial",
      "description": "人类在世界多地的牧场和农场饲养绵羊。不同品种适应的环境有差异，此处不把饲养分布当作野生羊类的原生范围。",
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
      "其他植物性草料"
    ],
    "description": "绵羊主要摄取草等植物性食物，也会反刍。胃内微生物参与植物纤维的利用；吃草与后来重新咀嚼是需要连续观察的两个过程。"
  },
  "tags": [
    "绵羊",
    "牧场与农场"
  ],
  "summary": "绵羊常成群吃草，许多品种长着浓密羊毛。它是反刍动物，羊羔早期吃奶。",
  "description": "许多绵羊品种长着浓密羊毛，脚有分趾蹄，口鼻部较窄。不同品种也有黑色、褐色或较短的被毛，角与尾长同样有差异。图库中的白色无角母羊只代表一种外观。绵羊采用 Ovis aries，属于羊属；山羊采用 Capra hircus，属于山羊属。卷毛、颜色和角并不能单独区分所有品种，需要综合身体特点和来源资料。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "羊毛与食草生活",
      "body": "许多绵羊品种长着浓密羊毛，脚有分趾蹄，口鼻部较窄。不同品种也有黑色、褐色或较短的被毛，角与尾长同样有差异。图库中的白色无角母羊只代表一种外观。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在日常环境中观察",
      "body": "绵羊常与同伴一起活动，群体会在草地取食和休息。观察时可以找领头移动和随后跟上的个体，不惊吓羊群来演示群居行为。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "吃什么，怎样消化",
      "body": "绵羊主要摄取草等植物性食物，也会反刍。胃内微生物参与植物纤维的利用；吃草与后来重新咀嚼是需要连续观察的两个过程。"
    },
    {
      "key": "life-cycle",
      "label": "成长与育幼",
      "title": "幼体怎样长大",
      "body": "母羊产下羊羔，羊羔早期吃奶，并逐渐开始摄取草料。繁殖季节和产仔情况受品种与管理方式影响，图库不把一只羊羔当作所有母羊固定产仔数。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "家养动物与物种名称",
      "body": "绵羊采用 Ovis aries，属于羊属；山羊采用 Capra hircus，属于山羊属。卷毛、颜色和角并不能单独区分所有品种，需要综合身体特点和来源资料。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：图中的羊毛像短直毛，还是弯曲的毛束？观察任务：隔着围栏找成年羊与羊羔的体型差别，再比较绵羊和山羊的照片。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "绵羊的学名与品种",
      "body": "林奈在 1758 年使用 Ovis aries 这一名称。人类饲养绵羊的历史更早，逐步形成了不同被毛、体型和用途的品种。旧资料会把野生盘羊近缘类群与家养绵羊混在同一物种范围里；本档案沿用 GBIF 接受名，内容限定家养绵羊。"
    }
  ],
  "keyFacts": [
    "羊毛与食草生活",
    "绵羊主要摄取草等植物性食物，也会反刍。胃内微生物参与植物纤维的利用；吃草与后来重新咀嚼是需要连续观察的两个过程。",
    "母羊产下羊羔，羊羔早期吃奶，并逐渐开始摄取草料。繁殖季节和产仔情况受品种与管理方式影响，图库不把一只羊羔当作所有母羊固定产仔数。",
    "绵羊采用 Ovis aries，属于羊属；山羊采用 Capra hircus，属于山羊属。卷毛、颜色和角并不能单独区分所有品种，需要综合身体特点和来源资料。"
  ],
  "threats": [
    "不适当的饲养环境"
  ],
  "conservationActions": [
    "让羊群保留取食、休息和同伴空间，按农场规则远距离观察，不拉扯羊毛或追赶羊羔。"
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
      "value": "羊毛与食草生活"
    },
    {
      "key": "scope",
      "label": "内容范围",
      "value": "家养动物"
    }
  ],
  "media": {
    "image": "./images/species/domestic-sheep/01-cover.webp",
    "alt": "绵羊及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/domestic-sheep/02-observation.webp",
        "title": "弯曲的羊毛",
        "alt": "绵羊：弯曲的羊毛，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示白色羊毛纹理，不能量取真实纤维直径，也不代表全部绵羊品种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-sheep/03-observation.webp",
        "title": "低头吃草",
        "alt": "绵羊：低头吃草，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。绵羊摄取植物性食物，静图不展示后续反刍。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-sheep/04-observation.webp",
        "title": "草地上的羊群",
        "alt": "绵羊：草地上的羊群，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。群体情景用于观察多个个体，不说明固定群体数量。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-sheep/05-observation.webp",
        "title": "母羊与羊羔",
        "alt": "绵羊：母羊与羊羔，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。区分成体和幼体，不把本图羊羔数量当作固定产仔数。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-sheep/06-observation.webp",
        "title": "侧面的身体特点",
        "alt": "绵羊：侧面的身体特点，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。观察口鼻、被毛、尾和分趾蹄，综合比较绵羊与山羊。",
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
      "url": "https://www.gbif.org/species/2441110",
      "kind": "taxonomy",
      "accessedAt": "2026-10-13"
    },
    {
      "title": "密歇根大学 ADW：生活与分布资料（限定家养内容）",
      "url": "https://animaldiversity.org/accounts/Ovis_aries/",
      "kind": "ecology",
      "accessedAt": "2026-10-13"
    },
    {
      "title": "宾州州立大学：羊群、品种与饲养环境",
      "url": "https://extension.psu.edu/animals-and-livestock/sheep",
      "kind": "general",
      "accessedAt": "2026-10-13"
    },
    {
      "title": "明尼苏达大学：反刍消化结构",
      "url": "https://extension.umn.edu/agriculture/animals-and-livestock/dairy/the-ruminant-digestive-system",
      "kind": "ecology",
      "accessedAt": "2026-10-13"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-13",
  "updatedAt": "2026-10-13"
} as const satisfies Species;

export default profile;
