import type { Species } from '../../types/species.ts';

const profile = {
  "id": "black-rhinoceros",
  "slug": "black-rhinoceros",
  "names": {
    "zh": "黑犀",
    "en": "Black Rhinoceros"
  },
  "scientificName": "Diceros bicornis",
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
      "scientificName": "Perissodactyla",
      "zhName": "奇蹄目"
    },
    "family": {
      "scientificName": "Rhinocerotidae",
      "zhName": "犀科"
    },
    "genus": {
      "scientificName": "Diceros",
      "zhName": "黑犀属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "CR",
    "label": {
      "zh": "极危",
      "en": "Critically Endangered"
    },
    "trend": "unknown",
    "assessor": "依据所列资料的全球等级；独立评估日期未核实"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "非洲"
    ],
    "regions": [
      "东非与南部非洲"
    ],
    "countries": [],
    "range": "生活在东非和南部非洲的灌丛、稀树草原等环境中，现存种群受到保护区与周边土地利用的影响。"
  },
  "habitats": [
    {
      "name": "稀树草原与灌丛",
      "realm": "terrestrial",
      "description": '灌丛和稀树草原中的枝叶提供食物，泥水供黑犀打滚降温。保护区与周边土地利用会影响种群的活动空间。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "weight": {
      "min": 800,
      "max": 1400,
      "unit": "kg",
      "note": "ADW 所列成体体重范围。"
    }
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "叶片",
      "嫩枝"
    ],
    "description": "取食叶片、嫩枝。"
  },
  "tags": [
    "黑犀",
    "能卷住叶子的上唇"
  ],
  "summary": "黑犀用能活动的尖上唇卷住枝叶。它皮肤灰色、鼻上有两只角，嘴形比皮肤颜色更适合用来区分黑犀和白犀。",
  "description": '黑犀用四条粗壮的腿在灌丛间行走，取食叶片和嫩枝。天气热时会在泥水里打滚降温；幼崽跟随母亲活动，从她那里吃奶。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '用上唇取食',
      body: '能活动的尖上唇可以卷住枝头叶片，帮助黑犀取食。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '粗壮的腿',
      body: '四条粗壮的腿支撑身体，在灌丛间行走。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '在泥水里打滚',
      body: '天气热时，黑犀在泥水中打滚，帮助身体降温。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '竖起耳朵',
      body: '黑犀头顶有耳朵，鼻上有两只角，皮肤呈灰色。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '幼崽跟着走',
      body: '幼崽跟随母亲活动，从母亲那里吃奶。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '黑犀的全球等级为极危。保护人员通过反偷猎巡护、种群监测和生境保护帮助它们生存。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '黑犀与白犀，先看嘴形',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Diceros bicornis。黑犀的皮肤呈灰色，名字中的“黑”不能单独区分它和白犀。它有能活动的尖上唇，能卷住叶片和嫩枝，嘴形比皮肤颜色更适合作为辨认线索。',
    },
  ],
  "keyFacts": [
    '能活动的尖上唇可以卷住枝头叶片，帮助黑犀取食。',
    '四条粗壮的腿支撑身体，在灌丛间行走。',
    '天气热时，黑犀在泥水中打滚，帮助身体降温。',
    '黑犀头顶有耳朵，鼻上有两只角，皮肤呈灰色。',
    '幼崽跟随母亲活动，从母亲那里吃奶。',
  ],
  "threats": [
    "为获取犀角的偷猎",
    "生境丧失与破碎化"
  ],
  "conservationActions": [
    "保护栖息地",
    "打击偷猎和非法犀角贸易",
    "监测种群"
  ],
  "metrics": {
    "adultMassKg": [
      800,
      1400
    ]
  },
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "能卷住叶子的上唇"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "稀树草原与灌丛"
    }
  ],
  "media": {
    "image": "./images/species/black-rhinoceros/01-cover.webp",
    "alt": "黑犀的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/black-rhinoceros/02-observation.webp",
        "title": "用上唇取食",
        "alt": '用上唇取食',
        "caption": "AI 生成科学情景重建。看看它怎样用上唇卷住枝头的叶片。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-rhinoceros/03-observation.webp",
        "title": "粗壮的腿",
        "alt": '粗壮的腿',
        "caption": "AI 生成科学情景重建。黑犀用四条粗壮的腿支撑身体，在灌丛间行走。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-rhinoceros/04-observation.webp",
        "title": "在泥水里打滚",
        "alt": '在泥水里打滚',
        "caption": "AI 生成科学情景重建。天气热时，黑犀会在泥水中打滚，帮助身体降温。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-rhinoceros/05-observation.webp",
        "title": "竖起耳朵",
        "alt": '竖起耳朵',
        "caption": "AI 生成科学情景重建。找找头顶的耳朵，再看看鼻子上的两只角。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-rhinoceros/06-observation.webp",
        "title": "幼崽跟着走",
        "alt": '幼崽跟着走',
        "caption": "AI 生成科学情景重建。幼崽跟随母亲活动，从母亲那里吃奶。",
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
      "title": "ADW：黑犀分类、形态与生态",
      "url": "https://animaldiversity.org/accounts/Diceros_bicornis/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "Save the Rhino：黑犀保护状况与取食",
      "url": "https://www.savetherhinoinc.com/rhino-information/species/black-rhino/",
      "kind": "conservation",
      "accessedAt": "2026-09-16"
    },
    {
      title: 'GBIF：Diceros bicornis 的命名作者与年份',
      url: 'https://www.gbif.org/species/5220111',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-16",
  "updatedAt": "2026-09-16"
} as const satisfies Species;

export default profile;
