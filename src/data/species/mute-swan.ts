import type { Species } from '../../types/species.ts';

const profile = {
  "id": "mute-swan",
  "slug": "mute-swan",
  "names": {
    "zh": "疣鼻天鹅",
    "en": "Mute Swan"
  },
  "scientificName": "Cygnus olor",
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
      "scientificName": "Anseriformes",
      "zhName": "雁形目"
    },
    "family": {
      "scientificName": "Anatidae",
      "zhName": "鸭科"
    },
    "genus": {
      "scientificName": "Cygnus",
      "zhName": "天鹅属"
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
    "assessor": "IUCN；等级来源与适用范围见来源记录"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "欧洲",
      "亚洲"
    ],
    "regions": [
      "欧洲至亚洲的湖泊与湿地"
    ],
    "countries": [
      "英国",
      "法国",
      "德国",
      "丹麦",
      "波兰",
      "俄罗斯"
    ],
    "range": "疣鼻天鹅原生于欧洲至亚洲的部分地区，常利用湖泊、河流与湿地。北美、日本、澳大利亚等地另有引入种群，不能把这些记录都当作原生范围；所列国家为代表性分布。",
    "center": {
      "lat": 52,
      "lng": 15
    }
  },
  "habitats": [
    {
      "name": "湖泊、缓流与湿地",
      "realm": "freshwater",
      "description": '它们在湖泊、缓流和湿地游泳、育雏，长颈能伸入浅水获取植物。湿地中的铅污染、废弃钓线和垃圾会造成伤害。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 140,
      "max": 160,
      "unit": "cm"
    },
    "weight": {
      "min": 10,
      "max": 12,
      "unit": "kg"
    },
    "wingspan": {
      "min": 208,
      "max": 238,
      "unit": "cm"
    }
  },
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "水生植物",
      "昆虫",
      "螺类"
    ],
    "description": "疣鼻天鹅主要吃水生植物，也会取食昆虫和螺类。长颈帮助它们够到水下植物，取食时常将头颈伸入水中。"
  },
  "activity": [
    "主要在白天活动"
  ],
  "tags": [
    "疣鼻天鹅",
    "弯起来的长脖子"
  ],
  "summary": "成年疣鼻天鹅羽毛白色，橙色喙的根部有黑色突起。它常弯起长颈游泳，幼鸟则披着灰羽。",
  "description": '疣鼻天鹅用有蹼的脚划水，取食时伸长脖子探向水下植物。成鸟会带领灰色幼鸟活动，幼鸟长大后逐渐换上白羽。英文名中的 Mute 不表示它完全不会发声。',
  "storySections": [
    {
      key: 'neck',
      label: '生活与认识',
      title: '长脖子弯成曲线',
      body: '疣鼻天鹅游泳时常弯起长颈，取食时再把颈伸向水下。',
    },
    {
      key: 'bill',
      label: '生活与认识',
      title: '嘴边的黑色突起',
      body: '成年疣鼻天鹅有橙色喙，喙根部带黑色突起；大天鹅的喙则呈黄黑色。喙的颜色和突起位置能帮助区分两种天鹅。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '把头伸进浅水里',
      body: '水生植物是疣鼻天鹅的主要食物，它们也吃小型无脊椎动物。长颈帮助它们够到水下植物。',
    },
    {
      key: 'feet',
      label: '生活与认识',
      title: '脚趾之间连着蹼',
      body: '疣鼻天鹅的黑色脚掌上，脚趾之间连着蹼，划水时能推动身体前进。',
    },
    {
      key: 'young',
      label: '生活与认识',
      title: '灰色幼鸟跟着游',
      body: '幼鸟通常有灰色绒羽，成长中逐渐换上白羽。成鸟带领幼鸟活动；同一幅图中的幼鸟也未必处在相同发育阶段。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '给湿地留下空间',
      body: '疣鼻天鹅在全球属无危。健康湿地与低污染的水体仍然重要，减少铅污染、妥善收走钓线和垃圾，也能减少水鸟受伤的风险。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“疣鼻”指喙根部的突起',
      body: 'J.F.Gmelin 于 1789 年描述了这个物种，现用学名为 Cygnus olor。中文名中的“疣鼻”对应橙色喙根部的黑色突起，能够帮助辨认成鸟。幼鸟的灰色羽毛会逐渐换成白色，和成年鸟的外形有明显差别。',
    },
  ],
  "keyFacts": [
    "疣鼻天鹅游泳时常见弯曲的长颈，取食时又会把颈伸向水下。",
    "成年疣鼻天鹅有橙色喙，喙根部的黑色突起是识别线索。",
    "水生植物是疣鼻天鹅的主要食物，它们也吃小型无脊椎动物。",
    "疣鼻天鹅的脚趾之间有蹼，能帮助它们划水。",
    "幼鸟通常有灰色绒羽，成长中逐渐换上白羽。"
  ],
  "threats": [
    "局部湿地退化",
    "铅污染",
    "废弃钓线等人类活动风险"
  ],
  "conservationActions": [
    "维护健康湿地",
    "减少铅和水体污染",
    "妥善处理钓线与垃圾"
  ],
  "metrics": {
    "adultLengthCm": [
      140,
      160
    ],
    "adultMassKg": [
      10,
      12
    ],
    "wingspanCm": [
      208,
      238
    ]
  },
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "弯起来的长脖子"
    },
    {
      "key": "food",
      "label": "主要食物",
      "value": "水生植物"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "湖泊、缓流与湿地"
    }
  ],
  "media": {
    "image": "./images/species/mute-swan/01-cover.webp",
    "alt": "疣鼻天鹅在生活环境中的完整身体",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/mute-swan/02-observation.webp",
        "title": "弯起来的长颈",
        "alt": "白色疣鼻天鹅在水面游动，长颈弯成曲线",
        "caption": "AI 生成科学情景重建。白色疣鼻天鹅在水面游动，长颈弯成曲线。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/mute-swan/03-observation.webp",
        "title": "橙色喙与黑色额瘤",
        "alt": "疣鼻天鹅侧脸近景，橙色喙根部的黑色突起清楚可见",
        "caption": "AI 生成科学情景重建。疣鼻天鹅侧脸近景，橙色喙根部的黑色突起清楚可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/mute-swan/04-observation.webp",
        "title": "伸颈取食",
        "alt": "疣鼻天鹅在浅水中低头寻找水生植物",
        "caption": "AI 生成科学情景重建。疣鼻天鹅在浅水中低头寻找水生植物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/mute-swan/05-observation.webp",
        "title": "看看脚上的蹼",
        "alt": "疣鼻天鹅站在浅水岸边，黑色脚掌可见",
        "caption": "AI 生成科学情景重建。疣鼻天鹅站在浅水岸边，黑色脚掌可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/mute-swan/06-observation.webp",
        "title": "成鸟与灰色幼鸟",
        "alt": "白色疣鼻天鹅带着灰色幼鸟在水面游动",
        "caption": "AI 生成科学情景重建。白色疣鼻天鹅带着灰色幼鸟在水面游动。",
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
      "title": "Birds Canada Avibase：疣鼻天鹅分类与范围",
      "url": "https://avibase.bsc-eoc.org/species.jsp?avibaseid=694C127A5D849FFE&lang=EN",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "RSPB：疣鼻天鹅外形与食物",
      "url": "https://www.rspb.org.uk/birds-and-wildlife/mute-swan/?i=1",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "BTO BirdFacts：疣鼻天鹅保护等级与繁殖",
      "url": "https://www.bto.org/learn/about-birds/birdfacts/mute-swan",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Cygnus olor 的命名作者与年份',
      url: 'https://www.gbif.org/species/2498343',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
