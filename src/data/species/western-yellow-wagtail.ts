import type { Species } from '../../types/species.ts';

const profile = {
  "id": "western-yellow-wagtail",
  "slug": "western-yellow-wagtail",
  "names": {
    "zh": "黄鹡鸰",
    "en": "Western Yellow Wagtail",
    "aliases": []
  },
  "scientificName": "Motacilla flava",
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
      "湿草地、田野与水边"
    ],
    "countries": [],
    "range": "本种在欧洲至西伯利亚部分地区繁殖，中国西北等地也有相应种群，冬季迁往更南地区。香港属于罕见迷鸟记录，不能将 todo 中的“田野常见”推广到中国所有地方。",
    "center": {
      "lat": 45,
      "lng": 82
    }
  },
  "habitats": [
    {
      "name": "湿草地、田野与水边",
      "realm": "terrestrial",
      "description": "它在开阔湿地和草地行走寻找小虫，也会跟随大型食草动物活动。不同种群随季节迁徙，不能把越冬地的出现时间写成全年都能看到。",
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
      "小型无脊椎动物"
    ],
    "description": "黄鹡鸰主要取食昆虫等小型无脊椎动物，可在草间、地面和浅水边找食。它有时捕捉被牲畜惊起的昆虫，不能据同框照片认定是在帮助牲畜。"
  },
  "tags": [
    "黄鹡鸰",
    "湿草地、田野与水边"
  ],
  "summary": "黄鹡鸰体形细长，尾巴较长，繁殖雄鸟腹面鲜黄，背偏绿。它在开阔湿地和草地行走寻找小虫，也会跟随大型食草动物活动。",
  "description": "黄鹡鸰体形细长，尾巴较长，繁殖雄鸟腹面鲜黄，背偏绿。头部花纹随亚种差别很大；图中灰蓝头、白眉的雄鸟展示 flava 型，雌鸟通常较淡。本档案“黄鹡鸰”明确限定为 Motacilla flava，也称西黄鹡鸰。东黄鹡鸰 Motacilla tschutschensis 常被拆成另一物种，不能把东亚所有黄色鹡鸰都归到本种。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从羽色与轮廓辨认",
      "body": "黄鹡鸰体形细长，尾巴较长，繁殖雄鸟腹面鲜黄，背偏绿。头部花纹随亚种差别很大；图中灰蓝头、白眉的雄鸟展示 flava 型，雌鸟通常较淡。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "它在开阔湿地和草地行走寻找小虫，也会跟随大型食草动物活动。不同种群随季节迁徙，不能把越冬地的出现时间写成全年都能看到。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "黄鹡鸰主要取食昆虫等小型无脊椎动物，可在草间、地面和浅水边找食。它有时捕捉被牲畜惊起的昆虫，不能据同框照片认定是在帮助牲畜。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼鸟、成鸟与季节",
      "body": "黄鹡鸰在地面或近地面的植被中营巢，亲鸟携小型动物性食物育幼。图库展示成鸟及雌雄差异，没有给未观察到的巢内阶段标注精确日龄。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "名称指向的物种",
      "body": "本档案“黄鹡鸰”明确限定为 Motacilla flava，也称西黄鹡鸰。东黄鹡鸰 Motacilla tschutschensis 常被拆成另一物种，不能把东亚所有黄色鹡鸰都归到本种。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：两只黄鹡鸰的头部花纹一定相同吗？观察任务：结合地点和月份比较腹色、眉纹与头顶，遇到不确定的黄鹡鸰先保留“鹡鸰类”记录。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Motacilla flava 的名称记录",
      "body": "GBIF 的名称记录为 Motacilla flava Linnaeus, 1758。作者与年份表示科学命名记录，不是人类第一次见到这种鸟的时间。本档案“黄鹡鸰”明确限定为 Motacilla flava，也称西黄鹡鸰。东黄鹡鸰 Motacilla tschutschensis 常被拆成另一物种，不能把东亚所有黄色鹡鸰都归到本种。"
    }
  ],
  "keyFacts": [
    "黄鹡鸰体形细长，尾巴较长，繁殖雄鸟腹面鲜黄，背偏绿。头部花纹随亚种差别很大；图中灰蓝头、白眉的雄鸟展示 flava 型，雌鸟通常较淡。",
    "黄鹡鸰主要取食昆虫等小型无脊椎动物，可在草间、地面和浅水边找食。它有时捕捉被牲畜惊起的昆虫，不能据同框照片认定是在帮助牲畜。",
    "黄鹡鸰在地面或近地面的植被中营巢，亲鸟携小型动物性食物育幼。图库展示成鸟及雌雄差异，没有给未观察到的巢内阶段标注精确日龄。"
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
      "value": "湿草地、田野与水边"
    },
    {
      "key": "food",
      "label": "食物举例",
      "value": "昆虫、小型无脊椎动物"
    }
  ],
  "media": {
    "image": "./images/species/western-yellow-wagtail/01-cover.webp",
    "alt": "黄鹡鸰及生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/western-yellow-wagtail/02-observation.webp",
        "title": "灰蓝头与白眉",
        "alt": "黄鹡鸰：灰蓝头与白眉，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示 flava 型雄鸟，不代表本种所有亚种的头纹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/western-yellow-wagtail/03-observation.webp",
        "title": "水边的小型飞虫",
        "alt": "黄鹡鸰：水边的小型飞虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。情景重建，不证明自然捕食的瞬间。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/western-yellow-wagtail/04-observation.webp",
        "title": "较淡的雌鸟",
        "alt": "黄鹡鸰：较淡的雌鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。雌鸟通常较淡，但羽色也受季节影响。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/western-yellow-wagtail/05-observation.webp",
        "title": "展开翅膀",
        "alt": "黄鹡鸰：展开翅膀，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。静图不能说明迁徙方向。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/western-yellow-wagtail/06-observation.webp",
        "title": "湿草地中的成鸟",
        "alt": "黄鹡鸰：湿草地中的成鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。同框羽色差异不应直接作为物种差异。",
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
      "url": "https://www.gbif.org/species/9701857",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "物种外形、活动与分布",
      "url": "https://avifauna.hkbws.org.hk/species/0440/053400",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "物种资料列示的全球 IUCN 等级",
      "url": "https://avifauna.hkbws.org.hk/species/0440/053400",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "BTO：黄鹡鸰生活史",
      "url": "https://www.bto.org/learn/about-birds/birdfacts/yellow-wagtail",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
