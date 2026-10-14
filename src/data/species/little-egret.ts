import type { Species } from '../../types/species.ts';

const profile = {
  "id": "little-egret",
  "slug": "little-egret",
  "names": {
    "zh": "白鹭",
    "en": "Little Egret",
    "aliases": [
      "小白鹭"
    ]
  },
  "scientificName": "Egretta garzetta",
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
      "scientificName": "Pelecaniformes",
      "zhName": "鹈形目"
    },
    "family": {
      "scientificName": "Ardeidae",
      "zhName": "鹭科"
    },
    "genus": {
      "scientificName": "Egretta",
      "zhName": "白鹭属"
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
    "assessor": "全球物种评估为无危；地区种群与城市野化群体的状况需分别看待。",
    "assessedYear": 2025
  },
  "distribution": {
    "realms": [
      "terrestrial",
      "freshwater",
      "marine"
    ],
    "continents": [],
    "regions": [
      "欧洲、非洲、亚洲与大洋洲湿地"
    ],
    "countries": [],
    "range": "白鹭分布于欧洲、非洲、亚洲和大洋洲的多种湿地。香港全年可见于淡水湿地、鱼塘、潮间带和海岸；其他地区的留居与迁徙情况不同。"
  },
  "habitats": [
    {
      "name": "浅水湿地与海岸",
      "realm": "terrestrial",
      "description": "白鹭分布于欧洲、非洲、亚洲和大洋洲的多种湿地。香港全年可见于淡水湿地、鱼塘、潮间带和海岸；其他地区的留居与迁徙情况不同。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小鱼",
      "虾",
      "其他水生小动物"
    ],
    "description": "白鹭捕食小鱼、虾和其他水生小动物。长腿让它能在浅水站立，细长的嘴帮助捕捉猎物；觅食方式随水深与环境变化。"
  },
  "tags": [
    "白鹭",
    "浅水湿地与海岸"
  ],
  "summary": "白鹭有细长黑嘴、黑腿和黄色脚，常在浅水中寻找鱼虾。辨认时要与其他白色鹭鸟比较。",
  "description": "成年白鹭全身白色，嘴细长而黑，腿黑，脚通常黄色。繁殖期部分个体会出现细长饰羽；幼鸟和繁殖期的裸露部位颜色可能不同。白色羽毛不是独有特点，要结合嘴、腿、脚和体型辨认。本档案的白鹭指 Egretta garzetta，又称小白鹭，属于鹭科白鹭属。大白鹭、中白鹭和其他白色鹭鸟另有物种身份，不能只按白色羽毛合并。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体特点辨认",
      "body": "成年白鹭全身白色，嘴细长而黑，腿黑，脚通常黄色。繁殖期部分个体会出现细长饰羽；幼鸟和繁殖期的裸露部位颜色可能不同。白色羽毛不是独有特点，要结合嘴、腿、脚和体型辨认。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "白鹭在浅水中行走取食，有时用脚搅动水底，惊起小动物。飞行时通常缩起脖子，腿向后伸；动作过程需要连续影像。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "白鹭捕食小鱼、虾和其他水生小动物。长腿让它能在浅水站立，细长的嘴帮助捕捉猎物；觅食方式随水深与环境变化。"
    },
    {
      "key": "life-cycle",
      "label": "成长与育幼",
      "title": "幼仔怎样长大",
      "body": "白鹭在树木等位置筑巢，双亲参与孵卵。雏鸟初期留在巢里，依靠亲鸟喂养，长出羽毛后逐渐离巢；图库展示已长羽的幼鸟，不代表刚孵出的外形。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的内容范围",
      "body": "本档案的白鹭指 Egretta garzetta，又称小白鹭，属于鹭科白鹭属。大白鹭、中白鹭和其他白色鹭鸟另有物种身份，不能只按白色羽毛合并。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：白鹭的腿和脚是同一种颜色吗？观察任务：从岸边远看它迈步，记录嘴、腿、脚的颜色；用图鉴比较其他白色鹭鸟。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "白鹭的学名与记录",
      "body": "林奈在 1766 年以 Ardea garzetta 命名，后来学者把它归入 Egretta，所以作者名加括号。中文白鹭在日常语言中也可能泛指白色鹭鸟；本档案用接受学名明确限定为小白鹭这一物种。"
    }
  ],
  "keyFacts": [
    "成年白鹭全身白色，嘴细长而黑，腿黑，脚通常黄色。繁殖期部分个体会出现细长饰羽；幼鸟和繁殖期的裸露部位颜色可能不同。白色羽毛不是独有特点，要结合嘴、腿、脚和体型辨认。",
    "白鹭捕食小鱼、虾和其他水生小动物。长腿让它能在浅水站立，细长的嘴帮助捕捉猎物；觅食方式随水深与环境变化。",
    "白鹭在树木等位置筑巢，双亲参与孵卵。雏鸟初期留在巢里，依靠亲鸟喂养，长出羽毛后逐渐离巢；图库展示已长羽的幼鸟，不代表刚孵出的外形。"
  ],
  "threats": [
    "栖息地改变",
    "人为干扰"
  ],
  "conservationActions": [
    "按场所规则远距离观察，为动物保留取食、休息和育幼空间。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "浅水湿地与海岸"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "黑腿与黄脚"
    }
  ],
  "media": {
    "image": "./images/species/little-egret/01-cover.webp",
    "alt": "白鹭及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/little-egret/02-observation.webp",
        "title": "黑嘴与长脖子",
        "alt": "白鹭：黑嘴与长脖子，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示带饰羽的成年外形；细长黑嘴要与其他鹭鸟比较。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/little-egret/03-observation.webp",
        "title": "浅水中的黄脚",
        "alt": "白鹭：浅水中的黄脚，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。脚色与腿色不同；水面可能遮挡部分脚趾。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/little-egret/04-observation.webp",
        "title": "飞行中的身体",
        "alt": "白鹭：飞行中的身体，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。观察缩颈与向后伸的腿，静图不证明完整飞行过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/little-egret/05-observation.webp",
        "title": "成鸟与已长羽幼鸟",
        "alt": "白鹭：成鸟与已长羽幼鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。巢中幼鸟已长羽，不代表刚孵出的阶段或固定窝数。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/little-egret/06-observation.webp",
        "title": "黑腿与黄脚",
        "alt": "白鹭：黑腿与黄脚，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。结合脚色、嘴形和体型辨认，不能只凭白色羽毛判断。",
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
      "url": "https://www.gbif.org/species/2480876",
      "kind": "taxonomy",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "香港观鸟会：白鹭辨认、湿地与地区分布",
      "url": "https://avifauna.hkbws.org.hk/species/0170/023500",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "BTO：白鹭觅食与生活史",
      "url": "https://www.bto.org/learn/about-birds/birdfacts/little-egret",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "BirdLife Australia：白鹭分布与外形",
      "url": "https://birdlife.org.au/bird-profiles/little-egret/",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "IUCN：2025 年白鹭全球评估",
      "url": "https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T62774969A154819214.en",
      "kind": "conservation",
      "accessedAt": "2026-10-14"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-14",
  "updatedAt": "2026-10-14"
} as const satisfies Species;

export default profile;
