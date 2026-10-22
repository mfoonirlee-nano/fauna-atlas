import type { Species } from '../../types/species.ts';

const profile = {
  "id": "woolly-mammoth",
  "slug": "woolly-mammoth",
  "names": {
    "zh": "真猛犸象",
    "en": "Woolly Mammoth",
    "aliases": [
      "长毛猛犸象"
    ]
  },
  "scientificName": "Mammuthus primigenius",
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
      "scientificName": "Proboscidea",
      "zhName": "长鼻目"
    },
    "family": {
      "scientificName": "Elephantidae",
      "zhName": "象科"
    },
    "genus": {
      "scientificName": "Mammuthus",
      "zhName": "猛犸象属"
    }
  },
  "conservation": {
    "system": "Historical and fossil evidence",
    "code": "EX",
    "label": {
      "zh": "已灭绝",
      "en": "Extinct"
    },
    "trend": "unknown",
    "assessor": "依据所引博物馆资料与化石研究；未采用独立 IUCN 评估。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲",
      "亚洲",
      "北美洲"
    ],
    "regions": [
      "欧亚大陆北部与北美北部（历史范围）"
    ],
    "countries": [],
    "range": "真猛犸象的代表性遗存范围为欧亚大陆北部与北美北部（历史范围）。现代地名用于定位遗存，不表示完整古地理范围；现无活体分布，不提供当前代表坐标。"
  },
  "habitats": [
    {
      "name": "寒冷草原",
      "realm": "terrestrial",
      "description": "它曾生活在欧亚与北美北部的开阔寒冷草原，环境常有低矮草本植物。冻土保存的遗体提供皮毛线索；封面中的草原、天气和站姿是重建选择，不代表它一直站在厚雪里。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草本植物"
    ],
    "description": "臼齿上排列着许多珐琅质薄板，适合反复磨碎草本食物。研究者还会参考植物残留物与牙齿磨耗讨论食物；象牙不是用来咀嚼的牙齿。"
  },
  "tags": [
    "真猛犸象",
    "已灭绝",
    "古哺乳动物"
  ],
  "summary": "真猛犸象长着长毛和弯曲象牙，耳朵较小，背部从高肩向后倾斜。",
  "description": "真猛犸象长着长毛和弯曲象牙，耳朵较小，背部从高肩向后倾斜。先找高高的肩部、向后倾斜的背线，再看弯曲象牙和长鼻。它的耳朵比今天非洲草原象的小，长毛与脂肪帮助它适应寒冷。不同猛犸象的毛被不同，不能将真猛犸象的长毛套给整个属。骨骼、冻土遗体和古 DNA 提供了不同证据。少数标本保存毛发并不意味着所有个体毛色相同；图中棕色长毛、象鼻姿态和生活场景仍含推测。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体特征开始看",
      "body": "先找高高的肩部、向后倾斜的背线，再看弯曲象牙和长鼻。它的耳朵比今天非洲草原象的小，长毛与脂肪帮助它适应寒冷。不同猛犸象的毛被不同，不能将真猛犸象的长毛套给整个属。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "化石产地与古环境",
      "body": "它曾生活在欧亚与北美北部的开阔寒冷草原，环境常有低矮草本植物。冻土保存的遗体提供皮毛线索；封面中的草原、天气和站姿是重建选择，不代表它一直站在厚雪里。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "牙齿与食物线索",
      "body": "臼齿上排列着许多珐琅质薄板，适合反复磨碎草本食物。研究者还会参考植物残留物与牙齿磨耗讨论食物；象牙不是用来咀嚼的牙齿。"
    },
    {
      "key": "evidence",
      "label": "遗存与复原",
      "title": "用遗存检查复原",
      "body": "骨骼、冻土遗体和古 DNA 提供了不同证据。少数标本保存毛发并不意味着所有个体毛色相同；图中棕色长毛、象鼻姿态和生活场景仍含推测。"
    },
    {
      "key": "conservation",
      "label": "灭绝记录",
      "title": "时期与末次记录的区别",
      "body": "大陆种群与岛屿种群并非同时消失。圣保罗岛和弗兰格尔岛的种群延续到全新世，后者约在距今四千年前消失；各地消失的原因和时间需要分别讨论。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "真猛犸象的发现与名称",
      "body": "Blumenbach 于 1799 年命名的物种后来归入 Mammuthus。本档案采用真猛犸象这一中文名，也可称长毛猛犸象；它与美洲乳齿象属于不同属，不能因都有象牙而当成同一种动物。"
    }
  ],
  "keyFacts": [
    "先找高高的肩部、向后倾斜的背线，再看弯曲象牙和长鼻。它的耳朵比今天非洲草原象的小，长毛与脂肪帮助它适应寒冷。不同猛犸象的毛被不同，不能将真猛犸象的长毛套给整个属。",
    "骨骼、冻土遗体和古 DNA 提供了不同证据。少数标本保存毛发并不意味着所有个体毛色相同；图中棕色长毛、象鼻姿态和生活场景仍含推测。",
    "大陆种群与岛屿种群并非同时消失。圣保罗岛和弗兰格尔岛的种群延续到全新世，后者约在距今四千年前消失；各地消失的原因和时间需要分别讨论。"
  ],
  "threats": [],
  "conservationActions": [
    "保存化石及其地层、产地和测年资料。",
    "区分原始化石、复制件与科学复原示意。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "period",
      "label": "代表时期",
      "value": "更新世至全新世"
    },
    {
      "key": "status",
      "label": "记录状态",
      "value": "已灭绝"
    }
  ],
  "media": {
    "image": "./images/species/woolly-mammoth/01-cover.webp",
    "alt": "真猛犸象科学复原示意，AI 生成",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学复原示意",
    "gallery": [
      {
        "image": "./images/species/woolly-mammoth/02-observation.webp",
        "title": "全身侧面",
        "alt": "真猛犸象：全身侧面，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。先找高高的肩部、向后倾斜的背线，再看弯曲象牙和长鼻。它的耳朵比今天非洲草原象的小，长毛与脂肪帮助它适应寒冷。不同猛犸象的毛被不同，不能将真猛犸象的长毛套给整个属。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/woolly-mammoth/03-observation.webp",
        "title": "头部外形",
        "alt": "真猛犸象：头部外形，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。观察鼻吻、头部及外部附属结构；图中不展示精确内部牙齿或骨骼。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/woolly-mammoth/04-observation.webp",
        "title": "前侧全身",
        "alt": "真猛犸象：前侧全身，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。骨骼、冻土遗体和古 DNA 提供了不同证据。少数标本保存毛发并不意味着所有个体毛色相同；图中棕色长毛、象鼻姿态和生活场景仍含推测。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/woolly-mammoth/05-observation.webp",
        "title": "古环境示意",
        "alt": "真猛犸象：古环境示意，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。它曾生活在欧亚与北美北部的开阔寒冷草原，环境常有低矮草本植物。冻土保存的遗体提供皮毛线索；封面中的草原、天气和站姿是重建选择，不代表它一直站在厚雪里。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/woolly-mammoth/06-observation.webp",
        "title": "后侧与尾部",
        "alt": "真猛犸象：后侧与尾部，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。观察后肢、尾部与背线，姿态不表示已确认的固定行为。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      }
    ]
  },
  "sources": [
    {
      "title": "NHM · 猛犸象形态、环境与岛屿存活记录",
      "url": "https://www.nhm.ac.uk/discover/were-all-mammoths-woolly.html",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "NHM · 最后的猛犸象",
      "url": "https://www.nhm.ac.uk/discover/last-mammoths.html",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "美国国家公园管理局 · 猛犸象与乳齿象的牙齿",
      "url": "https://www.nps.gov/articles/mammoth-or-mastodon.htm",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "PBDB · 化石分类记录",
      "url": "https://paleobiodb.org/classic/checkTaxonInfo?taxon_no=46027",
      "kind": "conservation",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "GBIF · 原始匹配，采用差异见研究记录",
      "url": "https://api.gbif.org/v1/species/match?name=Mammuthus%20primigenius",
      "kind": "taxonomy",
      "accessedAt": "2026-10-22"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-22",
  "updatedAt": "2026-10-22"
} as const satisfies Species;

export default profile;
