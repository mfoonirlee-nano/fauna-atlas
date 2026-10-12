import type { Species } from '../../types/species.ts';

const profile = {
  "id": "chinese-tree-frog",
  "slug": "chinese-tree-frog",
  "names": {
    "zh": "中国雨蛙",
    "en": "Chinese Tree Frog"
  },
  "scientificName": "Hyla chinensis",
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
      "scientificName": "Amphibia",
      "zhName": "两栖纲"
    },
    "order": {
      "scientificName": "Anura",
      "zhName": "无尾目"
    },
    "family": {
      "scientificName": "Hylidae",
      "zhName": "雨蛙科"
    },
    "genus": {
      "scientificName": "Hyla",
      "zhName": "雨蛙属"
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
      "terrestrial",
      "freshwater"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "中国东部与东南部"
    ],
    "countries": [],
    "range": "生活在中国东部、东南部及台湾等地的低山湿地和植被中。"
  },
  "habitats": [
    {
      "name": "池塘边的灌丛与叶片",
      "realm": "terrestrial",
      "description": '池塘边的灌丛与高秆植物提供攀爬和鸣叫位置，水域让卵和蝌蚪发育。',
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
      "其他小型无脊椎动物"
    ],
    "description": "成蛙捕食昆虫等小动物。"
  },
  "tags": [
    "中国雨蛙",
    "绿叶上的绿色身体"
  ],
  "summary": "中国雨蛙背部绿色、腹部浅色，眼睛后有深色细纹。它的圆趾端能贴住叶片。",
  "description": '中国雨蛙用圆形指、趾端黏附在叶片和细茎上，在灌丛与高秆植物中活动。雄蛙夜里在叶片上鸣叫；繁殖依靠水域，蝌蚪在水中发育后成为幼蛙。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '趾端圆圆的',
      body: '圆形指、趾端帮助中国雨蛙附着在植物表面。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '后腿折在身旁',
      body: '蹲伏时，它把后腿折在身体两侧。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '沿着植物攀爬',
      body: '中国雨蛙能沿灌丛和高秆植物的细茎攀爬。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '叶片上的夜晚',
      body: '雄蛙夜里会在植物叶片上鸣叫。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '水边长大的小蛙',
      body: '中国雨蛙在水边产卵，蝌蚪在水中发育，随后长成幼蛙。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '中国雨蛙的全球保护等级为无危。池塘边的植物和清洁水体是它生活与繁殖所需的环境。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '叶片上的鸣叫与水中的幼体',
      body: 'Günther 于 1858 年描述了这个物种，现用学名为 Hyla chinensis。中国雨蛙属于树蛙，圆形趾端能黏住植物表面。雄蛙会在叶片上鸣叫，但下一代仍要经历水中的蝌蚪阶段，池塘与岸边植被都和它的生活有关。',
    },
  ],
  "keyFacts": [
    '圆形指、趾端帮助中国雨蛙附着在植物表面。',
    '蹲伏时，它把后腿折在身体两侧。',
    '中国雨蛙能沿灌丛和高秆植物的细茎攀爬。',
    '雄蛙夜里会在植物叶片上鸣叫。',
    '中国雨蛙在水边产卵，蝌蚪在水中发育，随后长成幼蛙。',
  ],
  "threats": [
    "湿地改变",
    "水体污染"
  ],
  "conservationActions": [
    "保留水边植被",
    "减少水体污染"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "绿叶上的绿色身体"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "池塘边的灌丛与叶片"
    }
  ],
  "media": {
    "image": "./images/species/chinese-tree-frog/01-cover.webp",
    "alt": "中国雨蛙的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/chinese-tree-frog/02-observation.webp",
        "title": "叶面上的圆趾端",
        "alt": '叶面上的圆趾端',
        "caption": "AI 生成科学情景重建。它用指、趾端的吸盘附着在植物上。找找贴住叶面的地方。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-tree-frog/03-observation.webp",
        "title": "身旁折起的后腿",
        "alt": '身旁折起的后腿',
        "caption": "AI 生成科学情景重建。看看它蹲下时折起来的后腿。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-tree-frog/04-observation.webp",
        "title": "沿细茎攀爬",
        "alt": '沿细茎攀爬',
        "caption": "AI 生成科学情景重建。它能在灌丛和高秆植物上活动。顺着细茎找找四肢的位置。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-tree-frog/05-observation.webp",
        "title": "暮色里的绿叶",
        "alt": '暮色里的绿叶',
        "caption": "AI 生成科学情景重建。夜里，雄蛙会在植物叶片上鸣叫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-tree-frog/06-observation.webp",
        "title": "池塘边的小雨蛙",
        "alt": '池塘边的小雨蛙',
        "caption": "AI 生成科学情景重建。它在水边产卵，蝌蚪在水中发育，再长成幼蛙。",
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
      "title": "中国两栖类：中国雨蛙",
      "url": "https://amphibiachina.org/species/306",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "AMNH：中国雨蛙分类",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Hylidae/Hyla/Hyla-chinensis",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "中国两栖类：全球保护等级",
      "url": "https://amphibiachina.org/species/306",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Hyla chinensis 的命名作者与年份',
      url: 'https://www.gbif.org/species/2427571',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
