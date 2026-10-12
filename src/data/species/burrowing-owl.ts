import type { Species } from '../../types/species.ts';

const profile = {
  "id": "burrowing-owl",
  "slug": "burrowing-owl",
  "names": {
    "zh": "穴小鸮",
    "en": "Burrowing Owl"
  },
  "scientificName": "Athene cunicularia",
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
      "scientificName": "Strigiformes",
      "zhName": "鸮形目"
    },
    "family": {
      "scientificName": "Strigidae",
      "zhName": "鸱鸮科"
    },
    "genus": {
      "scientificName": "Athene",
      "zhName": "小鸮属"
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
    "assessor": '全球等级为 LC（无危）；独立评估日期尚未确认。'
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
      "美洲开阔草地"
    ],
    "countries": [],
    "range": "分布于美洲开阔地区，包括北美西部、中美洲和南美洲的草地与干燥地带；部分北方种群迁徙。"
  },
  "habitats": [
    {
      "name": "短草地与地洞周围",
      "realm": "terrestrial",
      "description": "分布于美洲开阔地区，包括北美西部、中美洲和南美洲的草地与干燥地带；部分北方种群迁徙。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "昆虫",
      "小型啮齿动物",
      "其他小型脊椎动物"
    ],
    "description": "食物包括昆虫、小型啮齿动物、其他小型脊椎动物。"
  },
  "tags": [
    "穴小鸮",
    "洞口旁的小鸮"
  ],
  "summary": '穴小鸮在美洲开阔草地的洞穴里筑巢，长腿适合在地面行走。它捕食昆虫和小型脊椎动物，昼夜都能活动。',
  "description": "穴小鸮有黄色眼睛、圆圆的头和细长的腿，褐色羽毛上散着白斑。它常在地面活动，并在地下洞穴里筑巢。",
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '洞口旁的小鸮',
      body: '穴小鸮常借用其他动物挖出的地洞，也有自己挖洞的种群。看看洞口与站在旁边的小鸮。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '用长腿走路',
      body: '长腿把身体撑离地面。它能在草地上走动，也能飞行。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '黄色的眼睛',
      body: '找找圆头上的黄眼睛、浅色眉纹和短嘴。它没有耳羽簇。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '开阔地方找食物',
      body: '它在地面或低处观察周围，捕食昆虫和小型动物；白天和夜间都可能觅食。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '一起待在洞旁',
      body: '繁殖期的成对穴小鸮会在洞穴附近活动，亲鸟也会照顾幼鸟。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保留开阔草地和洞穴，观察时远离巢洞，不堵洞或追赶幼鸟。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '洞穴里的小鸮',
      body: 'Molina 在 1782 年发表了穴小鸮的科学描述，今天采用 Athene cunicularia。中文名里的“穴”对应地洞，它常借用其他动物挖好的洞穴，部分地方的种群也会自己挖洞。长腿适合在地面行走，捕食活动可以发生在白天或夜间。',
    },
  ],
  "keyFacts": [
    "穴小鸮常借用其他动物挖出的地洞，也有自己挖洞的种群。看看洞口与站在旁边的小鸮。",
    "长腿把身体撑离地面。它能在草地上走动，也能飞行。",
    "找找圆头上的黄眼睛、浅色眉纹和短嘴。它没有耳羽簇。",
    "它在地面或低处观察周围，捕食昆虫和小型动物；白天和夜间都可能觅食。",
    "繁殖期的成对穴小鸮会在洞穴附近活动，亲鸟也会照顾幼鸟。"
  ],
  "threats": [
    "草地栖息地丧失",
    "筑巢洞穴破坏"
  ],
  "conservationActions": [
    "保留开阔草地和洞穴，观察时远离巢洞，不堵洞或追赶幼鸟。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "洞口旁的小鸮"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "短草地与地洞周围"
    }
  ],
  "media": {
    "image": "./images/species/burrowing-owl/01-cover.webp",
    "alt": "穴小鸮在短草地与地洞周围中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/burrowing-owl/02-observation.webp",
        "title": "洞口旁的小鸮",
        "alt": "穴小鸮：洞口旁的小鸮",
        "caption": "AI 生成科学情景重建。穴小鸮常借用其他动物挖出的地洞，也有自己挖洞的种群。看看洞口与站在旁边的小鸮。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/burrowing-owl/03-observation.webp",
        "title": "用长腿走路",
        "alt": "穴小鸮：用长腿走路",
        "caption": "AI 生成科学情景重建。长腿把身体撑离地面。它能在草地上走动，也能飞行。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/burrowing-owl/04-observation.webp",
        "title": "黄色的眼睛",
        "alt": "穴小鸮：黄色的眼睛",
        "caption": "AI 生成科学情景重建。找找圆头上的黄眼睛、浅色眉纹和短嘴。它没有耳羽簇。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/burrowing-owl/05-observation.webp",
        "title": "开阔地方找食物",
        "alt": "穴小鸮：开阔地方找食物",
        "caption": "AI 生成科学情景重建。它在地面或低处观察周围，捕食昆虫和小型动物；白天和夜间都可能觅食。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/burrowing-owl/06-observation.webp",
        "title": "一起待在洞旁",
        "alt": "穴小鸮：一起待在洞旁",
        "caption": "AI 生成科学情景重建。繁殖期的成对穴小鸮会在洞穴附近活动，亲鸟也会照顾幼鸟。",
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
      "title": "史密森尼国家动物园：穴小鸮",
      "url": "https://nationalzoo.si.edu/animals/burrowing-owl",
      "kind": "ecology",
      "accessedAt": "2026-09-22"
    },
    {
      "title": "康奈尔鸟类实验室：穴小鸮生活史",
      "url": "https://www.allaboutbirds.org/guide/Burrowing_Owl/lifehistory",
      "kind": "ecology",
      "accessedAt": "2026-09-22"
    },
    {
      "title": "ADW：穴小鸮分类与 IUCN LC",
      "url": "https://animaldiversity.org/accounts/Athene_cunicularia/",
      "kind": "conservation",
      "accessedAt": "2026-09-22"
    },
    {
      title: 'GBIF：穴小鸮的科学命名记录',
      url: 'https://www.gbif.org/species/2497240',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-22",
  "updatedAt": "2026-09-22"
} as const satisfies Species;

export default profile;
