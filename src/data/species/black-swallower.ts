import type { Species } from '../../types/species.ts';

const profile = {
  "id": "black-swallower",
  "slug": "black-swallower",
  "names": {
    "zh": "黑叉齿龙鱼",
    "en": "Black Swallower"
  },
  "scientificName": "Chiasmodon niger",
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
      "scientificName": "Actinopterygii",
      "zhName": "辐鳍鱼纲"
    },
    "order": {
      "scientificName": "Scombriformes",
      "zhName": "鲭形目"
    },
    "family": {
      "scientificName": "Chiasmodontidae",
      "zhName": "叉齿龙鱼科"
    },
    "genus": {
      "scientificName": "Chiasmodon",
      "zhName": "叉齿龙鱼属"
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
    "assessedYear": 2014,
    "assessor": "FishBase 转录 IUCN 全球 LC，评估日期为 2014-07-15；全球种群趋势未独立核实。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "大西洋温带与热带深水，包括墨西哥湾"
    ],
    "countries": [],
    "range": 'FishBase 与 WHOI 记录包括大西洋温带、热带深水和墨西哥湾。不同数据库的全球汇总范围有差异，这些地点并非完整分布边界。'
  },
  "habitats": [
    {
      "name": "深海开放水域",
      "realm": "marine",
      "description": '深海开放水域供黑叉齿龙鱼生活，幼鱼与较大个体采集到的水层不同。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鱼类"
    ],
    "description": '黑叉齿龙鱼吞食鱼类，可扩张的胃能容纳较大猎物，博物馆标本保留了扩张胃部的实物记录。'
  },
  "tags": [
    "黑叉齿龙鱼",
    "深海开放水域"
  ],
  "summary": '黑叉齿龙鱼身体细长、体色暗，口裂很长。它可扩张的胃能够容纳较大的鱼类猎物。',
  "description": '黑叉齿龙鱼下颌略向前突出，在深水中吞食鱼类。深水记录多来自采集标本，幼鱼和较大个体的采集水层有差异；爱尔兰国家博物馆保存有胃部扩张的实物标本。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '细长的暗色身体与长口裂',
      body: '身体细长、暗色，口裂很长，下颌略向前突出。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '深海开放水域',
      body: '记录包括大西洋温带、热带深水和墨西哥湾，各数据库对完整全球范围的汇总有差异。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '扩张的胃容纳鱼类猎物',
      body: '黑叉齿龙鱼吞食鱼类，可扩张胃部容纳较大猎物。爱尔兰国家博物馆保存有相关标本。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '幼鱼与大个体利用不同水层',
      body: '幼鱼和较大个体的采集水层有差异，产卵季节与数量尚缺确认资料。',
    },
    {
      key: 'taxonomy',
      label: '分类归属',
      title: '叉齿龙鱼科中的深水鱼',
      body: '黑叉齿龙鱼的学名为 Chiasmodon niger，属于辐鳍鱼纲、鲭形目和叉齿龙鱼科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '全球无危，趋势尚未确认',
      body: '全球 IUCN 等级为无危，FishBase 转引的评估日期为 2014-07-15。全球种群趋势尚未确认。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '馆藏标本保存了扩张的胃',
      body: 'Johnson 于 1864 年描述了这个物种，现用学名为 Chiasmodon niger。“黑”对应暗色体表，英文名 Black Swallower 则让人留意它吞食鱼类的方式。爱尔兰国家博物馆保存有胃部扩张标本，提供真实身体结构的记录；图片里的膨大腹部只用于解释外形。',
    },
  ],
  "keyFacts": [
    '身体细长暗色，口裂长。',
    '下颌略向前突出。',
    '胃能够扩张，容纳较大猎物。',
    '主要吞食鱼类。',
    '幼鱼与较大个体的采集水层有差异。',
  ],
  "threats": [],
  "conservationActions": [
    "保留深海标本的采集地点与水深",
    "区分实物标本、自然影像与生成示意"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "细长的暗色身体与长口裂"
    }
  ],
  "media": {
    "image": "./images/species/black-swallower/01-cover.webp",
    "alt": "黑叉齿龙鱼及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/black-swallower/02-observation.webp",
        "title": "普通腹部的全身",
        "alt": '普通腹部的全身，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。展示未明显扩张腹部的成体外形。图像尺度未经实测，单幅图只能展示姿态。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-swallower/03-observation.webp",
        "title": "长口裂与头部",
        "alt": '长口裂与头部，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。头部放大重建，牙齿细节不用于鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-swallower/04-observation.webp",
        "title": "斜侧面的细长身体",
        "alt": '斜侧面的细长身体，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。斜侧视角观察身体与鱼鳍。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-swallower/05-observation.webp",
        "title": "深水环境",
        "alt": '深水环境，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。照明为情景重建，非自然光或地点记录。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-swallower/06-observation.webp",
        "title": "腹部轮廓示意",
        "alt": '腹部轮廓示意，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。胃部扩张的概念外观示意，非实测比例、标本复刻或摄食记录。共读时可以比较腹部轮廓，不让孩子模仿大口吞食。',
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
      "title": "FishBase：分类、分布与全球保护评估日期",
      "url": "https://www.fishbase.se/summary/Chiasmodon-niger.html",
      "kind": "general",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "WHOI：黑叉齿龙鱼身体与生活环境",
      "url": "https://www.whoi.edu/ocean-learning-hub/ocean-facts/black-swallower/",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "爱尔兰国家博物馆：扩张胃部的馆藏标本",
      "url": "https://www.museum.ie/getmedia/cd11862c-a1a7-4691-a39f-d8f77f2268ea/nhm_guide_web_en.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    },
    {
      title: 'GBIF：Chiasmodon niger 的命名作者与年份',
      url: 'https://www.gbif.org/species/2394676',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-11",
  "updatedAt": "2026-10-11"
} as const satisfies Species;

export default profile;
