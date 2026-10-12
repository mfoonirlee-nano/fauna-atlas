import type { Species } from '../../types/species.ts';

const profile = {
  "id": "beadlet-anemone",
  "slug": "beadlet-anemone",
  "names": {
    "zh": "红海葵",
    "en": "Beadlet Anemone"
  },
  "scientificName": "Actinia equina",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Cnidaria",
      "zhName": "刺胞动物门"
    },
    "class": {
      "scientificName": "Anthozoa",
      "zhName": "珊瑚纲"
    },
    "order": {
      "scientificName": "Actiniaria",
      "zhName": "海葵目"
    },
    "family": {
      "scientificName": "Actiniidae",
      "zhName": "海葵科"
    },
    "genus": {
      "scientificName": "Actinia",
      "zhName": "海葵属"
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
    "assessor": "所引资料列为未评估；不据此推断种群安全。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "欧洲",
      "非洲"
    ],
    "regions": [
      "东北大西洋与地中海的潮间带岩岸"
    ],
    "countries": [
      "英国",
      "法国",
      "西班牙"
    ],
    "range": "东北大西洋与地中海的潮间带岩岸。列出的国家为代表性分布地，不是完整名录。"
  },
  "habitats": [
    {
      "name": "东北大西洋与地中海的潮间带岩岸",
      "realm": "marine",
      "description": "东北大西洋与地中海的潮间带岩岸。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小型甲壳动物",
      "其他小型海洋动物"
    ],
    "description": "主要取食小型甲壳动物、其他小型海洋动物。"
  },
  "tags": [
    "红海葵",
    "水里伸开触手"
  ],
  "summary": '红海葵用基盘附着岩石，涨潮浸水时伸出触手捕食，退潮时收成圆团。身体上缘的蓝色小点含刺细胞。',
  "description": '红海葵生活在东北大西洋和地中海的潮间带岩岸，用身体下方的基盘贴住岩石。海水淹没时，口盘周围的触手展开捕食；退潮露出水面后，触手收入身体，外形变成圆团。上缘的蓝色小球状结构含刺细胞。红色是这个物种的一种体色。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '水里伸开触手',
      body: '海水淹没身体时，红海葵可以展开口盘周围的触手来捕捉食物。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '退潮后缩成小团',
      body: '露出水面时，它能把触手收进身体，外形变成光滑的圆团。两张图展示不同状态，并非连续实拍。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '边缘的小蓝点',
      body: '触手下方、身体上缘有蓝色小球状结构，内含刺细胞；这些小点不是眼睛。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '底部贴着岩石',
      body: '身体下方的基盘附着在岩面上，海葵没有植物那样的根。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '潮池里的动物',
      body: '它虽像一朵花，却靠捕食生活，是刺胞动物。图中红色只是这个物种的一种体色。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '在潮池边观察时不触碰触手、不把海葵从岩石上剥下，保留岩岸环境。所引资料列为未评估；不据此推断种群安全。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '像花的动物进入名录',
      body: 'Linnaeus 在 1758 年发表了红海葵的科学描述，今天常用 Actinia equina。名称中的“海葵”容易让人想到花，它实际是用触手捕食的刺胞动物。退潮时触手收起，身体像光滑圆团，所以比较水里、水外的样子才能认识它的两种常见状态。',
    },
  ],
  "keyFacts": [
    "海水淹没身体时，红海葵可以展开口盘周围的触手来捕捉食物。",
    "露出水面时，它能把触手收进身体，外形变成光滑的圆团。两张图展示不同状态，并非连续实拍。",
    "触手下方、身体上缘有蓝色小球状结构，内含刺细胞；这些小点不是眼睛。",
    "身体下方的基盘附着在岩面上，海葵没有植物那样的根。",
    "它虽像一朵花，却靠捕食生活，是刺胞动物。图中红色只是这个物种的一种体色。"
  ],
  "threats": [
    "潮间带踩踏",
    "沿岸污染"
  ],
  "conservationActions": [
    "在潮池边观察时不触碰触手、不把海葵从岩石上剥下，保留岩岸环境。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "水里伸开触手"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "东北大西洋与地中海的潮间带岩岸"
    }
  ],
  "media": {
    "image": "./images/species/beadlet-anemone/01-cover.webp",
    "alt": "红海葵在自然栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/beadlet-anemone/02-observation.webp",
        "title": "水里伸开触手",
        "alt": "红海葵：水里伸开触手",
        "caption": "AI 生成科学情景重建。海水淹没身体时，红海葵可以展开口盘周围的触手来捕捉食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/beadlet-anemone/03-observation.webp",
        "title": "退潮后缩成小团",
        "alt": "红海葵：退潮后缩成小团",
        "caption": "AI 生成科学情景重建。露出水面时，它能把触手收进身体，外形变成光滑的圆团。两张图展示不同状态，并非连续实拍。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/beadlet-anemone/04-observation.webp",
        "title": "边缘的小蓝点",
        "alt": "红海葵：边缘的小蓝点",
        "caption": "AI 生成科学情景重建。触手下方、身体上缘有蓝色小球状结构，内含刺细胞；这些小点不是眼睛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/beadlet-anemone/05-observation.webp",
        "title": "底部贴着岩石",
        "alt": "红海葵：底部贴着岩石",
        "caption": "AI 生成科学情景重建。身体下方的基盘附着在岩面上，海葵没有植物那样的根。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/beadlet-anemone/06-observation.webp",
        "title": "潮池里的动物",
        "alt": "红海葵：潮池里的动物",
        "caption": "AI 生成科学情景重建。它虽像一朵花，却靠捕食生活，是刺胞动物。图中红色只是这个物种的一种体色。",
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
      "title": "英国海洋生物协会 MarLIN：红海葵形态与分类",
      "url": "https://www.marlin.ac.uk/species/detail/1561",
      "kind": "ecology",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "格拉纳达大学动物学馆：未评估状态",
      "url": "https://ccz.ugr.es/en/museovirtual/Cnidaria/194747",
      "kind": "conservation",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "SeaLifeBase：全球未评估状态",
      "url": "https://sealifebase.org/summary/Actinia-equina.html",
      "kind": "conservation",
      "accessedAt": "2026-09-21"
    },
    {
      title: 'GBIF：红海葵的科学命名记录',
      url: 'https://www.gbif.org/species/2256559',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-21",
  "updatedAt": "2026-09-21"
} as const satisfies Species;

export default profile;
