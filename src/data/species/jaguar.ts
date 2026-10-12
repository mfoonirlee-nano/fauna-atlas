import type { Species } from '../../types/species.ts';

const profile = {
  "id": "jaguar",
  "slug": "jaguar",
  "names": {
    "zh": "美洲豹",
    "en": "Jaguar"
  },
  "scientificName": "Panthera onca",
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
      "scientificName": "Panthera",
      "zhName": "豹属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "NT",
    "label": {
      "zh": "近危",
      "en": "Near Threatened"
    },
    "trend": "decreasing",
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
      "热带森林、湿地与河岸"
    ],
    "countries": [],
    "range": "主要分布于墨西哥、中美洲至南美洲北部和中部的适宜生境；美国西南部偶有游荡个体。"
  },
  "habitats": [
    {
      "name": "热带森林、湿地与河岸",
      "realm": "terrestrial",
      "description": '热带森林、湿地和河岸提供猎物与隐蔽位置。美洲豹能涉水、游泳，也利用河岸阴影休息。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "西貒",
      "水豚",
      "鹿",
      "凯门鳄"
    ],
    "description": "捕食哺乳动物和爬行动物等，猎物随地区变化。"
  },
  "tags": [
    "美洲豹",
    "大斑纹里面的小黑点"
  ],
  "summary": "美洲豹身体粗壮、头宽大，身侧许多玫瑰花状斑纹里有小黑点。这些斑纹有助于把它与豹区分开。",
  "description": '美洲豹会涉水，也善于游泳，森林和湿地都能提供猎物。它捕食哺乳动物、爬行动物等，在河岸阴影处休息；幼崽跟随母亲成长。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '大斑纹里的小黑点',
      body: '身侧许多玫瑰状斑纹内部有小黑点，可与豹的斑纹比较。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '走进浅水里',
      body: '美洲豹善于游泳，也会涉水活动。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '沿着林间小路走',
      body: '粗壮身体由四肢支撑，能在林间小路行走。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '河岸上的休息时刻',
      body: '美洲豹会在河岸阴影处伏卧休息，前爪伸在身前。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '母豹身旁的幼崽',
      body: '幼崽跟随母亲成长，成年前需要母亲照顾。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为近危，各地种群处境不同。保护栖息地之间的通道、维护猎物种群和减少人兽冲突，是保护工作的一部分。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“豹”名之下的美洲物种',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Panthera onca。美洲豹与分布在非洲和亚洲的豹是不同物种。它的身体更粗壮、头宽，许多玫瑰状斑纹内部有小黑点；它还善于游泳，能利用湿地和河岸环境。',
    },
  ],
  "keyFacts": [
    '身侧许多玫瑰状斑纹内部有小黑点，可与豹的斑纹比较。',
    '美洲豹善于游泳，也会涉水活动。',
    '粗壮身体由四肢支撑，能在林间小路行走。',
    '美洲豹会在河岸阴影处伏卧休息，前爪伸在身前。',
    '幼崽跟随母亲成长，成年前需要母亲照顾。',
  ],
  "threats": [
    "栖息地丧失与破碎化",
    "猎物减少",
    "报复性捕杀"
  ],
  "conservationActions": [
    "保护栖息地通道",
    "维护野生猎物种群",
    "减少人兽冲突"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "大斑纹里面的小黑点"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "热带森林、湿地与河岸"
    }
  ],
  "media": {
    "image": "./images/species/jaguar/01-cover.webp",
    "alt": "美洲豹的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/jaguar/02-observation.webp",
        "title": "大斑纹里的小黑点",
        "alt": '大斑纹里的小黑点',
        "caption": "AI 生成科学情景重建。先找一个大斑纹，再看看里面有没有小黑点。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/jaguar/03-observation.webp",
        "title": "走进浅水里",
        "alt": '走进浅水里',
        "caption": "AI 生成科学情景重建。美洲豹善于游泳，也会涉水活动。看看水面到了腿的哪里。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/jaguar/04-observation.webp",
        "title": "沿着林间小路走",
        "alt": '沿着林间小路走',
        "caption": "AI 生成科学情景重建。看看它走路时四只脚的位置。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/jaguar/05-observation.webp",
        "title": "河岸上的休息时刻",
        "alt": '河岸上的休息时刻',
        "caption": "AI 生成科学情景重建。图中的美洲豹趴在河岸阴影里，前爪伸在身前。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/jaguar/06-observation.webp",
        "title": "母豹身旁的幼崽",
        "alt": '母豹身旁的幼崽',
        "caption": "AI 生成科学情景重建。幼崽跟随母亲成长。图集没有记录同一个体的连续成长过程。",
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
      "title": "IUCN 猫科专家组：美洲豹分类",
      "url": "https://www.catsg.org/living-species-jaguar",
      "kind": "taxonomy",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "IUCN 猫科专家组：美洲豹生态",
      "url": "https://www.catsg.org/living-species-jaguar",
      "kind": "ecology",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "IUCN 猫科专家组：美洲豹全球等级",
      "url": "https://www.catsg.org/living-species-jaguar",
      "kind": "conservation",
      "accessedAt": "2026-09-15"
    },
    {
      title: 'GBIF：Panthera onca 的命名作者与年份',
      url: 'https://www.gbif.org/species/5219426',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-15",
  "updatedAt": "2026-09-15"
} as const satisfies Species;

export default profile;
