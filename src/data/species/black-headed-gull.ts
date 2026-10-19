import type { Species } from '../../types/species.ts';

const profile = {
  "id": "black-headed-gull",
  "slug": "black-headed-gull",
  "names": {
    "zh": "红嘴鸥",
    "en": "Black-headed Gull",
    "aliases": []
  },
  "scientificName": "Chroicocephalus ridibundus",
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
      "scientificName": "Charadriiformes",
      "zhName": "鸻形目"
    },
    "family": {
      "scientificName": "Laridae",
      "zhName": "鸥科"
    },
    "genus": {
      "scientificName": "Chroicocephalus",
      "zhName": "彩头鸥属"
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
      "freshwater",
      "marine"
    ],
    "continents": [
      "亚洲",
      "欧洲",
      "非洲"
    ],
    "regions": [
      "湖泊、河口与海湾"
    ],
    "countries": [],
    "range": "在欧亚北部等地区繁殖，许多种群冬季迁到较温暖的内陆水域和海岸。中国北部有繁殖种群，南方许多地区以冬候鸟为主，地图点仅代表一处越冬地区。",
    "center": {
      "lat": 25,
      "lng": 102.7
    }
  },
  "habitats": [
    {
      "name": "湖泊、河口与海湾",
      "realm": "terrestrial",
      "description": "红嘴鸥会游泳，也会飞到水面取食，非繁殖季常成群停歇。中国一些城市冬季可见候鸟，具体来去时间应结合当地记录。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "水生无脊椎动物",
      "小鱼",
      "其他可利用食物"
    ],
    "description": "它取食水面的小型动物及其他可利用食物，食谱随环境变化。有些地区会利用人类食物，但本档案不把游客投喂作为自然观察任务。"
  },
  "tags": [
    "红嘴鸥",
    "湖泊、河口与海湾"
  ],
  "summary": "红嘴鸥成鸟背和上翼浅灰，身体白，嘴和脚带红色。红嘴鸥会游泳，也会飞到水面取食，非繁殖季常成群停歇。",
  "description": "红嘴鸥成鸟背和上翼浅灰，身体白，嘴和脚带红色。繁殖羽头部有巧克力褐色头罩，冬季多为白头加深色耳斑；英文“黑头”不意味着全年黑头。本档案采用 Chroicocephalus ridibundus，旧组合为 Larus ridibundus。中文名强调红嘴，英文名强调繁殖期深色头罩，两种名称指同一物种。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从羽色与轮廓辨认",
      "body": "红嘴鸥成鸟背和上翼浅灰，身体白，嘴和脚带红色。繁殖羽头部有巧克力褐色头罩，冬季多为白头加深色耳斑；英文“黑头”不意味着全年黑头。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "红嘴鸥会游泳，也会飞到水面取食，非繁殖季常成群停歇。中国一些城市冬季可见候鸟，具体来去时间应结合当地记录。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "它取食水面的小型动物及其他可利用食物，食谱随环境变化。有些地区会利用人类食物，但本档案不把游客投喂作为自然观察任务。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼鸟、成鸟与季节",
      "body": "红嘴鸥在合适湿地集群繁殖。幼鸟有较多褐色翼斑，初冬仍不同于灰白色成鸟；头罩变化与换羽有关，不能仅凭头色判断年龄。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "名称指向的物种",
      "body": "本档案采用 Chroicocephalus ridibundus，旧组合为 Larus ridibundus。中文名强调红嘴，英文名强调繁殖期深色头罩，两种名称指同一物种。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：冬季头上的深色斑覆盖整个头吗？观察任务：在岸边比较耳斑与繁殖头罩的图片，不投食、不为拍展翅而驱赶鸟群。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Chroicocephalus ridibundus 的名称记录",
      "body": "GBIF 的名称记录为 Chroicocephalus ridibundus (Linnaeus, 1766)。作者与年份表示科学命名记录，不是人类第一次见到这种鸟的时间。本档案采用 Chroicocephalus ridibundus，旧组合为 Larus ridibundus。中文名强调红嘴，英文名强调繁殖期深色头罩，两种名称指同一物种。"
    }
  ],
  "keyFacts": [
    "红嘴鸥成鸟背和上翼浅灰，身体白，嘴和脚带红色。繁殖羽头部有巧克力褐色头罩，冬季多为白头加深色耳斑；英文“黑头”不意味着全年黑头。",
    "它取食水面的小型动物及其他可利用食物，食谱随环境变化。有些地区会利用人类食物，但本档案不把游客投喂作为自然观察任务。",
    "红嘴鸥在合适湿地集群繁殖。幼鸟有较多褐色翼斑，初冬仍不同于灰白色成鸟；头罩变化与换羽有关，不能仅凭头色判断年龄。"
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
      "value": "湖泊、河口与海湾"
    },
    {
      "key": "food",
      "label": "食物举例",
      "value": "水生无脊椎动物、小鱼"
    }
  ],
  "media": {
    "image": "./images/species/black-headed-gull/01-cover.webp",
    "alt": "红嘴鸥及生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/black-headed-gull/02-observation.webp",
        "title": "冬季耳后的深色斑",
        "alt": "红嘴鸥：冬季耳后的深色斑，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。冬季耳斑不同于繁殖头罩。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-headed-gull/03-observation.webp",
        "title": "繁殖期的褐色头罩",
        "alt": "红嘴鸥：繁殖期的褐色头罩，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。头罩为深褐色，光线下可能显得接近黑。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-headed-gull/04-observation.webp",
        "title": "飞行中的浅色翼前缘",
        "alt": "红嘴鸥：飞行中的浅色翼前缘，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。白色翼前缘和深色初级飞羽可辅助辨认。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-headed-gull/05-observation.webp",
        "title": "带褐色翼斑的幼鸟",
        "alt": "红嘴鸥：带褐色翼斑的幼鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼鸟的褐色翼斑会随换羽变化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-headed-gull/06-observation.webp",
        "title": "水面停歇的鸟群",
        "alt": "红嘴鸥：水面停歇的鸟群，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。群体数量是示意，不表示某地实测数量。",
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
      "url": "https://www.gbif.org/species/6065824",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "物种外形、活动与分布",
      "url": "https://avifauna.hkbws.org.hk/species/0110/016300",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "物种资料列示的全球 IUCN 等级",
      "url": "https://avifauna.hkbws.org.hk/species/0110/016300",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
