import type { Species } from '../../types/species.ts';

const profile = {
  "id": "large-billed-crow",
  "slug": "large-billed-crow",
  "names": {
    "zh": "大嘴乌鸦",
    "en": "Large-billed Crow",
    "aliases": []
  },
  "scientificName": "Corvus macrorhynchos",
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
      "scientificName": "Aves",
      "zhName": "鸟纲"
    },
    "order": {
      "scientificName": "Passeriformes",
      "zhName": "雀形目"
    },
    "family": {
      "scientificName": "Corvidae",
      "zhName": "鸦科"
    },
    "genus": {
      "scientificName": "Corvus",
      "zhName": "鸦属"
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
    "assessor": "所引物种资料列全球 IUCN 等级为 LC；本次未核实独立评估日期，未填写评估年或推断全球趋势。全球等级不代表各地区都常见。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "林地与城市树丛"
    ],
    "countries": [],
    "range": "在亚洲广泛分布，中国、朝鲜半岛、日本等东亚地区有种群。不同分类口径会改变南亚和东南亚部分范围的归属，地图点只代表东亚地区。",
    "center": {
      "lat": 35,
      "lng": 139
    }
  },
  "habitats": [
    {
      "name": "林地与城市树丛",
      "realm": "terrestrial",
      "description": "它常单独或成对活动，也会在食物丰富处或夜宿地聚群。林地、公园和城市边缘可提供活动空间，数量和活动位置并不固定。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "无脊椎动物",
      "果实与种子",
      "其他动物性食物"
    ],
    "description": "大嘴乌鸦取食多种植物性和动物性食物，也会取食动物遗骸。某些地区的城市食物记录不代表天然食谱全部，观察不应靠投喂来展示行为。"
  },
  "tags": [
    "大嘴乌鸦",
    "林地与城市树丛"
  ],
  "summary": "大嘴乌鸦全身黑，嘴粗厚，嘴上缘明显弯曲，额头较高。它常单独或成对活动，也会在食物丰富处或夜宿地聚群。",
  "description": "大嘴乌鸦全身黑，嘴粗厚，嘴上缘明显弯曲，额头较高。黑羽会随光线带光泽，不能单凭亮不亮来分种；嘴形也需与当地其他鸦类比较。本档案使用 GBIF 的 Corvus macrorhynchos 基线；大嘴乌鸦复合群在不同鸟类名录中有拆分差异。图示东亚外观，印度等地区旧广义资料不逐项套用到东亚种群。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从羽色与轮廓辨认",
      "body": "大嘴乌鸦全身黑，嘴粗厚，嘴上缘明显弯曲，额头较高。黑羽会随光线带光泽，不能单凭亮不亮来分种；嘴形也需与当地其他鸦类比较。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "它常单独或成对活动，也会在食物丰富处或夜宿地聚群。林地、公园和城市边缘可提供活动空间，数量和活动位置并不固定。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "大嘴乌鸦取食多种植物性和动物性食物，也会取食动物遗骸。某些地区的城市食物记录不代表天然食谱全部，观察不应靠投喂来展示行为。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼鸟、成鸟与季节",
      "body": "它在树上用枝条等材料营巢，并携食育幼。巢通常不容易从地面看清，不能因没有看见雏鸟就断定附近的成鸟不繁殖。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "名称指向的物种",
      "body": "本档案使用 GBIF 的 Corvus macrorhynchos 基线；大嘴乌鸦复合群在不同鸟类名录中有拆分差异。图示东亚外观，印度等地区旧广义资料不逐项套用到东亚种群。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：嘴上缘是平直还是拱起？观察任务：用望远镜比较嘴形与额头，不靠近巢树、不打开垃圾吸引鸟。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Corvus macrorhynchos 的名称记录",
      "body": "GBIF 的名称记录为 Corvus macrorhynchos Wagler, 1827。作者与年份表示科学命名记录，不是人类第一次见到这种鸟的时间。本档案使用 GBIF 的 Corvus macrorhynchos 基线；大嘴乌鸦复合群在不同鸟类名录中有拆分差异。图示东亚外观，印度等地区旧广义资料不逐项套用到东亚种群。"
    }
  ],
  "keyFacts": [
    "大嘴乌鸦全身黑，嘴粗厚，嘴上缘明显弯曲，额头较高。黑羽会随光线带光泽，不能单凭亮不亮来分种；嘴形也需与当地其他鸦类比较。",
    "大嘴乌鸦取食多种植物性和动物性食物，也会取食动物遗骸。某些地区的城市食物记录不代表天然食谱全部，观察不应靠投喂来展示行为。",
    "它在树上用枝条等材料营巢，并携食育幼。巢通常不容易从地面看清，不能因没有看见雏鸟就断定附近的成鸟不繁殖。"
  ],
  "threats": [
    "栖息地改变与人为干扰"
  ],
  "conservationActions": [
    "保留适合取食与停歇的环境，按场所规则远距离观察，不干扰巢与幼鸟。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "林地与城市树丛"
    },
    {
      "key": "food",
      "label": "食物举例",
      "value": "无脊椎动物、果实与种子"
    }
  ],
  "media": {
    "image": "./images/species/large-billed-crow/01-cover.webp",
    "alt": "大嘴乌鸦及生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/large-billed-crow/02-observation.webp",
        "title": "粗嘴与高额头",
        "alt": "大嘴乌鸦：粗嘴与高额头，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。嘴形需结合姿势和当地相似种辨认。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/large-billed-crow/03-observation.webp",
        "title": "地面寻找食物",
        "alt": "大嘴乌鸦：地面寻找食物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。坚果是食物例子，不是全部食谱。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/large-billed-crow/04-observation.webp",
        "title": "公园中的两只鸟",
        "alt": "大嘴乌鸦：公园中的两只鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。群体或配对关系不能从同框确认。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/large-billed-crow/05-observation.webp",
        "title": "宽阔的黑色翅膀",
        "alt": "大嘴乌鸦：宽阔的黑色翅膀，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。图中翼形受姿势影响。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/large-billed-crow/06-observation.webp",
        "title": "高枝停栖",
        "alt": "大嘴乌鸦：高枝停栖，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。树木是停栖和营巢环境的一部分。",
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
      "title": "GBIF：接受学名与命名记录",
      "url": "https://www.gbif.org/species/2482487",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "物种外形、活动与分布",
      "url": "https://avifauna.hkbws.org.hk/species/0260/034200",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "物种资料列示的全球 IUCN 等级",
      "url": "https://avifauna.hkbws.org.hk/species/0260/034200",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "新加坡国家公园局：大嘴乌鸦",
      "url": "https://biodiversitysg.nparks.gov.sg/our-biodiversity/birds/crows-starlings-mynas/large-billed-crow/",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
