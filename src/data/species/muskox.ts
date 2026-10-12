import type { Species } from '../../types/species.ts';

const profile = {
  "id": "muskox",
  "slug": "muskox",
  "names": {
    "zh": "麝牛",
    "en": "Muskox"
  },
  "scientificName": "Ovibos moschatus",
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
      "scientificName": "Ovibos",
      "zhName": "麝牛属"
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
    "assessor": "依据所列来源的全球等级；未填未经核验的评估年份。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "加拿大、格陵兰及阿拉斯加等再引入地区"
    ],
    "countries": [],
    "range": "加拿大、格陵兰及阿拉斯加等再引入地区。"
  },
  "habitats": [
    {
      "name": "北极苔原",
      "realm": "terrestrial",
      "description": '北极树线以北的苔原，夏季生长草、莎草和灌木，冬季寒冷多风。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "莎草",
      "草",
      "灌木枝叶"
    ],
    "description": "食物包括莎草、草、灌木枝叶。"
  },
  "tags": [
    "麝牛",
    "垂到腿旁的长毛"
  ],
  "summary": '麝牛有遮挡风雪的长毛和保暖绒毛，雌雄都长弯角。它在北极苔原吃植物，冬天寻找浅雪处取食。',
  "description": '麝牛在北极苔原吃草、莎草和灌木枝叶。厚实身体下是短腿，外层长毛遮挡风雪，内层绒毛保暖。雌雄都有弯角，成年雄性的角基更厚。冬季，它们寻找积雪较浅的地方取食。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '垂到腿旁的长毛',
      body: '看看长毛怎样垂到腿旁边。外层长毛遮挡风雪，内层绒毛帮助保暖。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '弯弯的角',
      body: '角从头顶向两侧弯下，再朝上翘起。雌雄都有角，成年雄性的角基更厚。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '低头吃草',
      body: '夏季，麝牛在苔原低头吃草和莎草，也吃灌木枝叶。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '跟着妈妈',
      body: '小麝牛出生后不久就能站立，随后跟着妈妈，吃奶并获得保护。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '雪地里的短腿',
      body: '短腿支撑着厚实的身体。冬天，麝牛会寻找积雪较浅处的植物。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '一起观察与保护',
      body: '远距离观察麝牛，让带幼仔的兽群保持安静。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '回到阿拉斯加的麝牛',
      body: 'Zimmermann 在 1780 年发表了麝牛的科学描述。它在阿拉斯加的原有种群于十九世纪末消失，二十世纪三十年代，保护人员从格陵兰引入麝牛，重新建立当地种群。今天读分布图时，需要把加拿大、格陵兰的自然家园和这类再引入地区区分开。',
    },
  ],
  "keyFacts": [
    "看看长毛怎样垂到腿旁边。外层长毛遮挡风雪，内层绒毛帮助保暖。",
    "角从头顶向两侧弯下，再朝上翘起。雌雄都有角，成年雄性的角基更厚。",
    "夏季，麝牛在苔原低头吃草和莎草，也吃灌木枝叶。",
    "小麝牛出生后不久就能站立，随后跟着妈妈，吃奶并获得保护。",
    "短腿支撑着厚实的身体。冬天，麝牛会寻找积雪较浅处的植物。"
  ],
  "threats": [],
  "conservationActions": [
    "远距离观察麝牛，让带幼仔的兽群保持安静。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "垂到腿旁的长毛"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "北极苔原"
    }
  ],
  "media": {
    "image": "./images/species/muskox/01-cover.webp",
    "alt": "麝牛在北极苔原中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/muskox/02-observation.webp",
        "title": "垂到腿旁的长毛",
        "alt": "麝牛：垂到腿旁的长毛",
        "caption": "AI 生成科学情景重建。看看长毛怎样垂到腿旁边。外层长毛遮挡风雪，内层绒毛帮助保暖。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/muskox/03-observation.webp",
        "title": "弯弯的角",
        "alt": "麝牛：弯弯的角",
        "caption": "AI 生成科学情景重建。角从头顶向两侧弯下，再朝上翘起。雌雄都有角，成年雄性的角基更厚。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/muskox/04-observation.webp",
        "title": "低头吃草",
        "alt": "麝牛：低头吃草",
        "caption": "AI 生成科学情景重建。夏季，麝牛在苔原低头吃草和莎草，也吃灌木枝叶。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/muskox/05-observation.webp",
        "title": "跟着妈妈",
        "alt": "麝牛：跟着妈妈",
        "caption": "AI 生成科学情景重建。小麝牛出生后不久就能站立，随后跟着妈妈，吃奶并获得保护。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/muskox/06-observation.webp",
        "title": "雪地里的短腿",
        "alt": "麝牛：雪地里的短腿",
        "caption": "AI 生成科学情景重建。短腿支撑着厚实的身体。冬天，麝牛会寻找积雪较浅处的植物。",
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
      "title": "animaldiversity.org：Ovibos moschatus",
      "url": "https://animaldiversity.org/accounts/Ovibos_moschatus/",
      "kind": "conservation",
      "accessedAt": "2026-09-22"
    },
    {
      title: 'GBIF：麝牛的科学命名记录',
      url: 'https://www.gbif.org/species/2441108',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-22",
  "updatedAt": "2026-09-22"
} as const satisfies Species;

export default profile;
