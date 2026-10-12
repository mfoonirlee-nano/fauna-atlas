import type { Species } from '../../types/species.ts';

const profile = {
  "id": "puma",
  "slug": "puma",
  "names": {
    "zh": "美洲狮",
    "en": "Puma"
  },
  "scientificName": "Puma concolor",
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
      "scientificName": "Felidae",
      "zhName": "猫科"
    },
    "genus": {
      "scientificName": "Puma",
      "zhName": "美洲金猫属"
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
    "assessor": "依据所列资料中的全球等级；未单独核实评估日期"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "北美洲",
      "南美洲"
    ],
    "regions": [
      "山地、森林与灌丛"
    ],
    "countries": [],
    "range": "分布于加拿大至南美洲南端的部分地区，美国东部大部分地区已失去原有种群。"
  },
  "habitats": [
    {
      "name": "山地、森林与灌丛",
      "realm": "terrestrial",
      "description": '山地、森林和灌丛提供猎物与遮蔽。岩石让美洲狮攀登和移动，灌木下的阴影提供休息位置。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鹿",
      "原驼",
      "兔",
      "其他中小型哺乳动物"
    ],
    "description": "捕食动物，不同地区的主要猎物有所不同。"
  },
  "tags": [
    "美洲狮",
    "长长的尾巴"
  ],
  "summary": "成年美洲狮毛色通常较均匀，长尾的末端颜色较深。幼崽身上的斑点会随成长逐渐淡去。",
  "description": '美洲狮有小圆耳朵和浅色下巴，强壮后腿帮助它登上岩石。它捕食动物，能在山地、森林和灌丛生活，在灌木阴影下休息；各地的主要猎物不同。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '身后的长尾巴',
      body: '美洲狮的尾巴很长，末端颜色较深。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '后腿蹬上石头',
      body: '后腿发力，帮助它登上岩石。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '灌木下休息',
      body: '美洲狮能在灌木阴影下伏卧休息，前爪伸在身前。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '圆耳朵和浅色下巴',
      body: '它有小圆耳朵，下巴带浅色毛。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '幼崽身上的斑点',
      body: '幼崽身上有斑点，成长中逐渐淡去，成兽毛色通常较均匀。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为无危，不等于各地种群都安全。栖息地破碎化、道路和人兽冲突仍带来压力；野生动物通道能帮助连接生境。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '成年均匀毛色，幼崽却有斑点',
      body: 'Linnaeus 于 1771 年描述了这个物种，现用学名为 Puma concolor。美洲狮成年后通常毛色均匀，幼崽却带斑点，斑点随成长逐渐淡去。这个物种从加拿大到南美洲南端都有部分分布，美国东部多数地方则已失去原有种群。',
    },
  ],
  "keyFacts": [
    '美洲狮的尾巴很长，末端颜色较深。',
    '后腿发力，帮助它登上岩石。',
    '美洲狮能在灌木阴影下伏卧休息，前爪伸在身前。',
    '它有小圆耳朵，下巴带浅色毛。',
    '幼崽身上有斑点，成长中逐渐淡去，成兽毛色通常较均匀。',
  ],
  "threats": [
    "栖息地破碎化",
    "道路阻隔与车辆碰撞",
    "人兽冲突"
  ],
  "conservationActions": [
    "保留生境通道",
    "减少道路伤害",
    "减少人兽冲突"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "长长的尾巴"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "山地、森林与灌丛"
    }
  ],
  "media": {
    "image": "./images/species/puma/01-cover.webp",
    "alt": "美洲狮的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/puma/02-observation.webp",
        "title": "身后的长尾巴",
        "alt": '身后的长尾巴',
        "caption": "AI 生成科学情景重建。从尾巴根部一直看到深色尾尖，看看它怎样弯着。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/puma/03-observation.webp",
        "title": "后腿蹬上石头",
        "alt": '后腿蹬上石头',
        "caption": "AI 生成科学情景重建。看看它迈上低岩石的姿势，后腿为动作提供力量。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/puma/04-observation.webp",
        "title": "灌木下休息",
        "alt": '灌木下休息',
        "caption": "AI 生成科学情景重建。图中的美洲狮在灌木阴影下休息，前爪伸在身前。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/puma/05-observation.webp",
        "title": "圆耳朵和浅色下巴",
        "alt": '圆耳朵和浅色下巴',
        "caption": "AI 生成科学情景重建。找找小圆耳朵，再看看嘴巴下面的浅色毛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/puma/06-observation.webp",
        "title": "幼崽身上的斑点",
        "alt": '幼崽身上的斑点',
        "caption": "AI 生成科学情景重建。把有斑点的幼崽和旁边毛色均匀的成兽放在一起看。",
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
      "title": "IUCN 猫科专家组：美洲狮分类",
      "url": "https://www.catsg.org/living-species-puma",
      "kind": "taxonomy",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "IUCN 猫科专家组：美洲狮生态",
      "url": "https://www.catsg.org/living-species-puma",
      "kind": "ecology",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "IUCN 猫科专家组：美洲狮全球等级",
      "url": "https://www.catsg.org/living-species-puma",
      "kind": "conservation",
      "accessedAt": "2026-09-15"
    },
    {
      title: 'GBIF：Puma concolor 的命名作者与年份',
      url: 'https://www.gbif.org/species/2435099',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-15",
  "updatedAt": "2026-09-15"
} as const satisfies Species;

export default profile;
