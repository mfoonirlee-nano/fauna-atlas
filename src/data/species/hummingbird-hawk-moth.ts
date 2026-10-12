import type { Species } from '../../types/species.ts';

const profile = {
  "id": "hummingbird-hawk-moth",
  "slug": "hummingbird-hawk-moth",
  "names": {
    "zh": "小豆长喙天蛾",
    "en": "Hummingbird Hawk-moth"
  },
  "scientificName": "Macroglossum stellatarum",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Arthropoda",
      "zhName": "节肢动物门"
    },
    "class": {
      "scientificName": "Insecta",
      "zhName": "昆虫纲"
    },
    "order": {
      "scientificName": "Lepidoptera",
      "zhName": "鳞翅目"
    },
    "family": {
      "scientificName": "Sphingidae",
      "zhName": "天蛾科"
    },
    "genus": {
      "scientificName": "Macroglossum",
      "zhName": "长喙天蛾属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "NE",
    "label": {
      "zh": "未评估",
      "en": "Not Evaluated"
    },
    "trend": "unknown",
    "assessor": "所列来源记录为未评估；未评估不等于无危。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲",
      "非洲",
      "亚洲"
    ],
    "regions": [
      "有蜜源花朵和幼虫食草的开阔地"
    ],
    "countries": [],
    "range": "广布于旧大陆温暖地区，也会迁飞到更北的地区；英国记录常涉及迁入个体。"
  },
  "habitats": [
    {
      "name": "有蜜源花朵和幼虫食草的开阔地",
      "realm": "terrestrial",
      "description": "广布于旧大陆温暖地区，也会迁飞到更北的地区；英国记录常涉及迁入个体。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "nectarivore"
    ],
    "foods": [
      "花蜜（成虫）",
      "拉拉藤等植物叶片（幼虫）"
    ],
    "description": "食物包括花蜜（成虫）、拉拉藤等植物叶片（幼虫）。"
  },
  "tags": [
    "小豆长喙天蛾",
    "停在花前的空中"
  ],
  "summary": '小豆长喙天蛾白天在花前悬停、伸长喙吸蜜。灰褐前翅后面露出橙色后翅，幼虫以植物叶片为食。',
  "description": "小豆长喙天蛾白天也会活动。它的前翅灰褐，后翅橙色，成虫在花前快速振翅吸蜜；幼虫在食草上吃叶。",
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '停在花前的空中',
      body: '它能一边扇翅一边停留在花前，把长喙伸进花里吸蜜。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '休息时收起喙',
      body: '不用吸蜜时，细长的喙可以卷起来，收在头部下面。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '橙色的后翅',
      body: '飞动时，灰褐色前翅后面会露出橙色的后翅。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '叶子上的毛毛虫',
      body: '幼虫吃植物的叶子，绿色身体上有浅色纵线，后端长着一根小角。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '花丛间飞行',
      body: '白天也能看见它在花间活动。花朵可以帮助我们感受这只小昆虫的大小。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保留多种本地花草和幼虫食草，减少不必要的杀虫剂使用。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '花前悬停的蛾',
      body: 'Linnaeus 在 1758 年发表 Macroglossum stellatarum 这个名称。英文俗名 Hummingbird Hawk-moth 可以与花前悬停、伸喙吸蜜的姿势联系起来，它仍是一只蛾。成虫白天活动，幼虫吃叶，长大时外形和食物都有变化。',
    },
  ],
  "keyFacts": [
    "它能一边扇翅一边停留在花前，把长喙伸进花里吸蜜。",
    "不用吸蜜时，细长的喙可以卷起来，收在头部下面。",
    "飞动时，灰褐色前翅后面会露出橙色的后翅。",
    "幼虫吃植物的叶子，绿色身体上有浅色纵线，后端长着一根小角。",
    "白天也能看见它在花间活动。花朵可以帮助我们感受这只小昆虫的大小。"
  ],
  "threats": [
    "蜜源植物与幼虫食草减少的局地压力"
  ],
  "conservationActions": [
    "保留多种本地花草和幼虫食草，减少不必要的杀虫剂使用。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "停在花前的空中"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "有蜜源花朵和幼虫食草的开阔地"
    }
  ],
  "media": {
    "image": "./images/species/hummingbird-hawk-moth/01-cover.webp",
    "alt": "小豆长喙天蛾在栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/hummingbird-hawk-moth/02-observation.webp",
        "title": "停在花前的空中",
        "alt": "小豆长喙天蛾：停在花前的空中",
        "caption": "AI 生成科学情景重建。它能一边扇翅一边停留在花前，把长喙伸进花里吸蜜。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/hummingbird-hawk-moth/03-observation.webp",
        "title": "休息时收起喙",
        "alt": "小豆长喙天蛾：休息时收起喙",
        "caption": "AI 生成科学情景重建。不用吸蜜时，细长的喙可以卷起来，收在头部下面。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/hummingbird-hawk-moth/04-observation.webp",
        "title": "橙色的后翅",
        "alt": "小豆长喙天蛾：橙色的后翅",
        "caption": "AI 生成科学情景重建。飞动时，灰褐色前翅后面会露出橙色的后翅。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/hummingbird-hawk-moth/05-observation.webp",
        "title": "叶子上的毛毛虫",
        "alt": "小豆长喙天蛾：叶子上的毛毛虫",
        "caption": "AI 生成科学情景重建。幼虫吃植物的叶子，绿色身体上有浅色纵线，后端长着一根小角。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/hummingbird-hawk-moth/06-observation.webp",
        "title": "花丛间飞行",
        "alt": "小豆长喙天蛾：花丛间飞行",
        "caption": "AI 生成科学情景重建。白天也能看见它在花间活动。花朵可以帮助我们感受这只小昆虫的大小。",
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
      "title": "英国蝴蝶保护组织：小豆长喙天蛾",
      "url": "https://butterfly-conservation.org/news-and-blog/species-of-the-month-humming-bird-hawk-moth",
      "kind": "ecology",
      "accessedAt": "2026-09-22"
    },
    {
      "title": "欧洲环境署 EUNIS：分类与未评估说明",
      "url": "https://eunis.eea.europa.eu/species/Macroglossum%20stellatarum",
      "kind": "conservation",
      "accessedAt": "2026-09-22"
    },
    {
      title: 'GBIF：小豆长喙天蛾的科学命名记录',
      url: 'https://www.gbif.org/species/1864652',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-22",
  "updatedAt": "2026-09-22"
} as const satisfies Species;

export default profile;
