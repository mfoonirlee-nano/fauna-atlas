import type { Species } from '../../types/species.ts';

const profile = {
  "id": "white-wagtail",
  "slug": "white-wagtail",
  "names": {
    "zh": "白鹡鸰",
    "en": "White Wagtail",
    "aliases": []
  },
  "scientificName": "Motacilla alba",
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
      "scientificName": "Motacillidae",
      "zhName": "鹡鸰科"
    },
    "genus": {
      "scientificName": "Motacilla",
      "zhName": "鹡鸰属"
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
      "terrestrial",
      "freshwater"
    ],
    "continents": [
      "亚洲",
      "欧洲",
      "非洲"
    ],
    "regions": [
      "路边、河岸与开阔地"
    ],
    "countries": [],
    "range": "白鹡鸰广布于欧亚等地区，部分种群迁徙，部分留居。中国不同地区和季节出现的亚种组合不同，香港 leucopsis 的生态资料不代表所有亚种都留居。",
    "center": {
      "lat": 30.2,
      "lng": 120.2
    }
  },
  "habitats": [
    {
      "name": "路边、河岸与开阔地",
      "realm": "terrestrial",
      "description": "它常在地面行走或小跑，停下时也会摆动尾巴；还会短距离跃起追捕小虫。摆尾是需要连续观察的动作，一张尾巴抬起的图不能证明摆动频率。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "昆虫",
      "其他小型无脊椎动物"
    ],
    "description": "白鹡鸰主要取食昆虫等小型无脊椎动物，会沿地面、水边追寻，也会短距离追逐飞虫。嘴里的一只虫只能说明画面中的食物例子。"
  },
  "tags": [
    "白鹡鸰",
    "路边、河岸与开阔地"
  ],
  "summary": "白鹡鸰身体细长，黑、白、灰相间，长尾外侧带白色，脚细。它常在地面行走或小跑，停下时也会摆动尾巴；还会短距离跃起追捕小虫。",
  "description": "白鹡鸰身体细长，黑、白、灰相间，长尾外侧带白色，脚细。不同亚种、季节和年龄的头部黑白花纹不同，图库以东亚白脸的 leucopsis 型外观作情景示例。本档案采用 Motacilla alba，覆盖这个物种内的不同亚种。黄鹡鸰 Motacilla flava 与它分别成种；同样摆尾和到水边活动不表示属于同一种。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从羽色与轮廓辨认",
      "body": "白鹡鸰身体细长，黑、白、灰相间，长尾外侧带白色，脚细。不同亚种、季节和年龄的头部黑白花纹不同，图库以东亚白脸的 leucopsis 型外观作情景示例。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "它常在地面行走或小跑，停下时也会摆动尾巴；还会短距离跃起追捕小虫。摆尾是需要连续观察的动作，一张尾巴抬起的图不能证明摆动频率。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "白鹡鸰主要取食昆虫等小型无脊椎动物，会沿地面、水边追寻，也会短距离追逐飞虫。嘴里的一只虫只能说明画面中的食物例子。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼鸟、成鸟与季节",
      "body": "白鹡鸰会利用合适的缝隙或有遮蔽位置筑巢，亲鸟为幼鸟带回食物。幼鸟通常较灰、花纹较淡；不能把不同季节的成鸟都看作幼鸟。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "名称指向的物种",
      "body": "本档案采用 Motacilla alba，覆盖这个物种内的不同亚种。黄鹡鸰 Motacilla flava 与它分别成种；同样摆尾和到水边活动不表示属于同一种。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：白鹡鸰腹部有大片黄色吗？观察任务：在岸上数它一小段时间内摆尾的次数，并记录是否行走，不为计数追赶鸟。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Motacilla alba 的名称记录",
      "body": "GBIF 的名称记录为 Motacilla alba Linnaeus, 1758。作者与年份表示科学命名记录，不是人类第一次见到这种鸟的时间。本档案采用 Motacilla alba，覆盖这个物种内的不同亚种。黄鹡鸰 Motacilla flava 与它分别成种；同样摆尾和到水边活动不表示属于同一种。"
    }
  ],
  "keyFacts": [
    "白鹡鸰身体细长，黑、白、灰相间，长尾外侧带白色，脚细。不同亚种、季节和年龄的头部黑白花纹不同，图库以东亚白脸的 leucopsis 型外观作情景示例。",
    "白鹡鸰主要取食昆虫等小型无脊椎动物，会沿地面、水边追寻，也会短距离追逐飞虫。嘴里的一只虫只能说明画面中的食物例子。",
    "白鹡鸰会利用合适的缝隙或有遮蔽位置筑巢，亲鸟为幼鸟带回食物。幼鸟通常较灰、花纹较淡；不能把不同季节的成鸟都看作幼鸟。"
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
      "value": "路边、河岸与开阔地"
    },
    {
      "key": "food",
      "label": "食物举例",
      "value": "昆虫、其他小型无脊椎动物"
    }
  ],
  "media": {
    "image": "./images/species/white-wagtail/01-cover.webp",
    "alt": "白鹡鸰及生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/white-wagtail/02-observation.webp",
        "title": "黑白脸与细脚",
        "alt": "白鹡鸰：黑白脸与细脚，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。图示 leucopsis 型外观，不涵盖所有亚种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/white-wagtail/03-observation.webp",
        "title": "水边嘴里的小虫",
        "alt": "白鹡鸰：水边嘴里的小虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。图中食物不作精确虫种鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/white-wagtail/04-observation.webp",
        "title": "羽色较淡的幼鸟",
        "alt": "白鹡鸰：羽色较淡的幼鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。年龄还需结合羽缘和其他特征，不能只看灰色。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/white-wagtail/05-observation.webp",
        "title": "低空飞行",
        "alt": "白鹡鸰：低空飞行，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。静图不记录飞行轨迹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/white-wagtail/06-observation.webp",
        "title": "溪岸上的两只成鸟",
        "alt": "白鹡鸰：溪岸上的两只成鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。出现时间受地区与季节影响。",
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
      "url": "https://www.gbif.org/species/9687165",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "物种外形、活动与分布",
      "url": "https://avifauna.hkbws.org.hk/species/0440/053810",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "物种资料列示的全球 IUCN 等级",
      "url": "https://avifauna.hkbws.org.hk/species/0440/053810",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
