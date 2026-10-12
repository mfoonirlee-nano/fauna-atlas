import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-vulpes-zerda",
  "slug": "fennec-fox",
  "names": {
    "zh": "耳廓狐",
    "en": "Fennec Fox"
  },
  "scientificName": "Vulpes zerda",
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
      "scientificName": "Carnivora",
      "zhName": "食肉目"
    },
    "family": {
      "scientificName": "Canidae",
      "zhName": "犬科"
    },
    "genus": {
      "scientificName": "Vulpes",
      "zhName": "狐属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "trend": "stable",
    "assessor": "Wacher, T., Bauman, K. & Cuzin, F. / IUCN",
    "assessedYear": 2015
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "非洲"
    ],
    "regions": [
      "北非撒哈拉及周缘干旱地区"
    ],
    "countries": [],
    "range": "耳廓狐生活在北非撒哈拉及周缘干旱地区，利用沙地和稀疏植被间的洞穴。地图标记仅作分布区域的示意中心。",
    "center": {
      "lat": 25,
      "lng": 10
    }
  },
  "habitats": [
    {
      "name": "沙漠与稀疏灌丛",
      "realm": "terrestrial",
      "description": '利用撒哈拉及周边的沙地和稀疏植被，掘沙洞躲避白天炎热，夜间在地面觅食。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 35.6,
      "max": 40.6,
      "unit": "cm",
      "note": "Smithsonian 给出的常见头体长，不含约 18–30 cm 的尾巴。"
    },
    "weight": {
      "min": 0.9,
      "max": 1.4,
      "unit": "kg",
      "note": "Smithsonian 给出的常见头体长，不含约 18–30 cm 的尾巴。"
    }
  },
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "昆虫",
      "小型脊椎动物",
      "植物性食物"
    ],
    "description": "主要食物包括昆虫、小型脊椎动物、植物性食物。"
  },
  "tags": [
    "耳廓狐",
    "大耳朵"
  ],
  "summary": "耳廓狐借助大耳朵散热，也靠听觉寻找猎物。它的毛色浅，能融入沙地背景，蓬松尾巴的末端颜色较深。",
  "description": '耳廓狐有浅色毛皮、蓬松尾巴和深色尾尖，脚底也长毛。它白天躲在沙洞中避热，夜间寻找昆虫、小动物和植物性食物。',
  "storySections": [
    {
      key: 'ears',
      label: '生活与认识',
      title: '两只大耳朵',
      body: '耳廓狐借助大耳朵散热，也靠听觉寻找猎物。',
    },
    {
      key: 'tail',
      label: '生活与认识',
      title: '尾巴末端是深色的',
      body: '它的尾巴蓬松，尾尖颜色较深。浅色毛皮能帮助它融入沙地背景。',
    },
    {
      key: 'night',
      label: '生活与认识',
      title: '天暗了出来活动',
      body: '耳廓狐常在夜间寻找食物。它会吃昆虫、小型动物，也吃植物性食物。',
    },
    {
      key: 'burrow',
      label: '生活与认识',
      title: '在沙洞里休息',
      body: '耳廓狐会掘洞，白天常在洞内躲避炎热。洞口图帮助我们认识它的住处，不能从一张图判断地下通道有多长。',
    },
    {
      key: 'paws',
      label: '生活与认识',
      title: '脚底也长着毛',
      body: '看看脚掌周围的毛。脚底的毛帮助它在沙地上活动，也减少热沙对脚掌的影响。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '让它留在自己的家',
      body: '耳廓狐的 IUCN 全球等级为无危，贸易和栖息地扰动仍影响野生个体。保护它们的环境、减少野外捕捉，有助于保留种群。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '大耳朵与沙漠生活',
      body: 'Zimmermann 于 1780 年描述了这个物种，现用学名为 Vulpes zerda。耳廓狐的大耳朵帮助散热，也帮助听到猎物。脚底的毛则减少热沙对脚掌的影响。它通常白天躲进沙洞，夜里出来找食物。',
    },
  ],
  "keyFacts": [
    '大耳朵帮助散热和寻找猎物。',
    '毛皮浅色，尾巴蓬松、尾尖较深。',
    '常在夜间觅食。',
    '白天在沙洞内避热。',
    '脚底的毛减少热沙对脚掌的影响。',
  ],
  "threats": [
    "捕捉供宠物贸易和游客展示",
    "人类活动扰动栖息地"
  ],
  "conservationActions": [
    "不购买野外捕捉的耳廓狐",
    "保护沙漠栖息地"
  ],
  "metrics": {
    "adultLengthCm": [
      35.6,
      40.6
    ],
    "adultMassKg": [
      0.9,
      1.4
    ]
  },
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "大耳朵"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "昆虫"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "沙漠与稀疏灌丛"
    }
  ],
  "media": {
    "image": "./images/species/fennec-fox/01-cover.webp",
    "alt": "耳廓狐的完整身体位于画面右侧。",
    "focalPoint": {
      "x": 0.78,
      "y": 0.37
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/fennec-fox/02-observation.webp",
        "title": "沙地上的小狐狸",
        "alt": "耳廓狐站在沙地上，大耳朵、四肢和尾巴可见。",
        "caption": "耳廓狐站在沙地上，大耳朵、四肢和尾巴可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/fennec-fox/03-observation.webp",
        "title": "靠近看大耳朵",
        "alt": "耳廓狐头部近景，两只大耳朵竖在小脸上方。",
        "caption": "耳廓狐头部近景，两只大耳朵竖在小脸上方。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/fennec-fox/04-observation.webp",
        "title": "天暗了出来走走",
        "alt": "耳廓狐在暮色中的沙地和稀疏灌丛间行走。",
        "caption": "耳廓狐在暮色中的沙地和稀疏灌丛间行走。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/fennec-fox/05-observation.webp",
        "title": "洞口旁休息",
        "alt": "耳廓狐蜷伏在沙洞入口附近。",
        "caption": "耳廓狐蜷伏在沙洞入口附近。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/fennec-fox/06-observation.webp",
        "title": "脚掌周围的毛",
        "alt": "耳廓狐的腿和脚掌近景，脚趾周围有浅色毛。",
        "caption": "耳廓狐的腿和脚掌近景，脚趾周围有浅色毛。",
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
      "title": "Smithsonian National Zoo — 耳廓狐形态与生活",
      "url": "https://nationalzoo.si.edu/animals/fennec-fox",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "NCBI Taxonomy — Vulpes zerda",
      "url": "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=68732",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "IUCN — Vulpes zerda 全球评估（2015，评估报告镜像）",
      "url": "https://ascaris.org/uploads/s/8/e/d/8edzn3y4lrw0/file/zcJZDCQj.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      title: 'GBIF：Vulpes zerda 的命名作者与年份',
      url: 'https://www.gbif.org/species/5219310',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-09",
  "updatedAt": "2026-09-09"
} as const satisfies Species;

export default profile;
