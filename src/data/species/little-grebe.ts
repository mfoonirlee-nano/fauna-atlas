import type { Species } from '../../types/species.ts';

const profile = {
  "id": "little-grebe",
  "slug": "little-grebe",
  "names": {
    "zh": "小䴙䴘",
    "en": "Little Grebe"
  },
  "scientificName": "Tachybaptus ruficollis",
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
      "scientificName": "Podicipediformes",
      "zhName": "䴙䴘目"
    },
    "family": {
      "scientificName": "Podicipedidae",
      "zhName": "䴙䴘科"
    },
    "genus": {
      "scientificName": "Tachybaptus",
      "zhName": "小䴙䴘属"
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
    "assessor": "采用香港观鸟会物种资料所列 IUCN LC；未确认独立评估日期和全球趋势，不补写年份。"
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "亚洲",
      "欧洲",
      "非洲"
    ],
    "regions": [
      "池塘、湖泊与缓流水域"
    ],
    "countries": [],
    "range": "分布于欧亚、非洲及部分邻近地区的湿地，中国多地可见。香港有留鸟；其他地区是否留居或迁徙要结合当地记录。",
    "center": {
      "lat": 22.47,
      "lng": 114.01
    }
  },
  "habitats": [
    {
      "name": "池塘、湖泊与缓流水域",
      "realm": "freshwater",
      "description": "分布于欧亚、非洲及部分邻近地区的湿地，中国多地可见。香港有留鸟；其他地区是否留居或迁徙要结合当地记录。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "水生无脊椎动物",
      "小鱼"
    ],
    "description": "它吃水生无脊椎动物和小鱼，常潜入水中寻找食物。亲鸟可以把捕到的食物交给幼鸟，单张图片不能显示一次潜水的持续时间。"
  },
  "tags": [
    "小䴙䴘",
    "池塘、湖泊与缓流水域"
  ],
  "summary": "小䴙䴘身体圆短，常潜入水中找小虫和小鱼，繁殖季节脸颊与颈部呈栗红色。",
  "description": "身体圆短，嘴尖，尾端看起来蓬松。繁殖羽的脸颊和颈部呈栗红色，嘴角有浅黄色斑；非繁殖羽较淡，幼鸟头部有条纹。它与已有的凤头䴙䴘分属不同属，没有凤头䴙䴘那样的头冠。它在池塘、湖泊和缓流中游泳，潜水捕食，也会潜水避开危险。脚的位置靠后，适合在水中推进。观察时等它自行浮出水面，记录位置，不追赶它来演示潜水。亲鸟用水草等植物材料筑巢，巢可浮在水面并依附植被。双亲参与孵卵和育幼；条纹头部的雏鸟会游泳，也可爬到亲鸟背上。图库分开重建卵期与幼鸟，不表示同一家庭的连续记录。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形辨认",
      "body": "身体圆短，嘴尖，尾端看起来蓬松。繁殖羽的脸颊和颈部呈栗红色，嘴角有浅黄色斑；非繁殖羽较淡，幼鸟头部有条纹。它与已有的凤头䴙䴘分属不同属，没有凤头䴙䴘那样的头冠。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "它在池塘、湖泊和缓流中游泳，潜水捕食，也会潜水避开危险。脚的位置靠后，适合在水中推进。观察时等它自行浮出水面，记录位置，不追赶它来演示潜水。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "它吃水生无脊椎动物和小鱼，常潜入水中寻找食物。亲鸟可以把捕到的食物交给幼鸟，单张图片不能显示一次潜水的持续时间。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从幼体到成体",
      "body": "亲鸟用水草等植物材料筑巢，巢可浮在水面并依附植被。双亲参与孵卵和育幼；条纹头部的雏鸟会游泳，也可爬到亲鸟背上。图库分开重建卵期与幼鸟，不表示同一家庭的连续记录。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的范围",
      "body": "本档案指 Tachybaptus ruficollis，属于䴙䴘科小䴙䴘属。小䴙䴘会游泳、潜水，但分类上属于䴙䴘目，不能因为生活在水面就归入鸭类。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：繁殖羽成鸟的脸颊和幼鸟的头纹有什么不同？观察任务：在岸上记录一次自行潜水前后的位置，不靠近巢，不投食。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "小䴙䴘的名称与记录",
      "body": "Pallas 在 1764 年发表本种名称，现用 Tachybaptus ruficollis，作者名加括号表示属级组合曾有变化。香港资料也写作“小鸊鷉”，本图册沿用“䴙䴘”的字形；不同写法不另计物种。"
    }
  ],
  "keyFacts": [
    "身体圆短，嘴尖，尾端看起来蓬松。繁殖羽的脸颊和颈部呈栗红色，嘴角有浅黄色斑；非繁殖羽较淡，幼鸟头部有条纹。它与已有的凤头䴙䴘分属不同属，没有凤头䴙䴘那样的头冠。",
    "它吃水生无脊椎动物和小鱼，常潜入水中寻找食物。亲鸟可以把捕到的食物交给幼鸟，单张图片不能显示一次潜水的持续时间。",
    "亲鸟用水草等植物材料筑巢，巢可浮在水面并依附植被。双亲参与孵卵和育幼；条纹头部的雏鸟会游泳，也可爬到亲鸟背上。图库分开重建卵期与幼鸟，不表示同一家庭的连续记录。"
  ],
  "threats": [
    "栖息地改变",
    "人为干扰"
  ],
  "conservationActions": [
    "按场所规则在原处观察，为动物保留取食、休息和繁殖空间。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "池塘、湖泊与缓流水域"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "非繁殖羽的浅色脸颊"
    }
  ],
  "media": {
    "image": "./images/species/little-grebe/01-cover.webp",
    "alt": "小䴙䴘及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/little-grebe/02-observation.webp",
        "title": "非繁殖羽的浅色脸颊",
        "alt": "小䴙䴘：非繁殖羽的浅色脸颊，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成鸟非繁殖羽，羽色不同于封面的繁殖羽。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/little-grebe/03-observation.webp",
        "title": "水边的脚趾",
        "alt": "小䴙䴘：水边的脚趾，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示水边足部，生成图不用于精确足趾鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/little-grebe/04-observation.webp",
        "title": "水面的食物",
        "alt": "小䴙䴘：水面的食物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。捕食情景重建，不表示仅以昆虫为食。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/little-grebe/05-observation.webp",
        "title": "条纹头部的幼鸟",
        "alt": "小䴙䴘：条纹头部的幼鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼鸟与亲鸟的情景重建，非真实家庭记录。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/little-grebe/06-observation.webp",
        "title": "水草筑成的浮巢",
        "alt": "小䴙䴘：水草筑成的浮巢，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示浮巢与部分卵，不代表一窝的固定卵数。",
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
      "title": "GBIF：接受名称、命名作者与分类链",
      "url": "https://www.gbif.org/species/2482048",
      "kind": "taxonomy",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "物种外形与生活观察",
      "url": "https://www.rspb.org.uk/birds-and-wildlife/little-grebe",
      "kind": "general",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "地区记录与物种对照",
      "url": "https://www.wetlandpark.gov.hk/tc/biodiversity/beauty-of-wetlands/wildlife/tachybaptus-ruficollis",
      "kind": "distribution",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "生活史与范围资料",
      "url": "https://canalrivertrust.org.uk/things-to-do/canal-and-river-wildlife/a-spotters-guide-to-waterway-wildlife/little-grebe",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "香港物种记录与保护状态",
      "url": "https://avifauna.hkbws.org.hk/species/0070/009000",
      "kind": "conservation",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "BTO：繁殖与孵卵资料",
      "url": "https://www.bto.org/learn/about-birds/birdfacts/little-grebe",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-15",
  "updatedAt": "2026-10-15"
} as const satisfies Species;

export default profile;
