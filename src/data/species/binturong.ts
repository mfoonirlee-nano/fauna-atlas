import type { Species } from '../../types/species.ts';

const profile = {
  "id": "binturong",
  "slug": "binturong",
  "names": {
    "zh": "熊狸",
    "en": "Binturong"
  },
  "scientificName": "Arctictis binturong",
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
      "scientificName": "Viverridae",
      "zhName": "灵猫科"
    },
    "genus": {
      "scientificName": "Arctictis",
      "zhName": "熊狸属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "VU",
    "label": {
      "zh": "易危",
      "en": "Vulnerable"
    },
    "trend": "unknown",
    "assessor": '全球等级为 VU（易危）；独立评估日期与种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "南亚和东南亚的热带森林"
    ],
    "countries": [
      "印度",
      "马来西亚",
      "印度尼西亚"
    ],
    "range": "南亚和东南亚的热带森林。列出的国家为代表性分布地，不是完整名录。"
  },
  "habitats": [
    {
      "name": "南亚和东南亚的热带森林",
      "realm": "terrestrial",
      "description": "南亚和东南亚的热带森林。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "果实",
      "昆虫",
      "小型脊椎动物"
    ],
    "description": "主要取食果实、昆虫、小型脊椎动物。"
  },
  "tags": [
    "熊狸",
    "尾巴也能抓握"
  ],
  "summary": '熊狸用能抓握的长尾在树上稳住身体。它主要吃果实，也吃小动物，常在黄昏和夜间活动。',
  "description": '熊狸生活在南亚和东南亚的热带森林，常在黄昏、夜间活动，白天伏在树枝上休息。它的长尾能卷住枝条，帮助粗壮的身体保持稳定。黑褐粗毛之间，脸旁伸出浅色长胡须，耳缘有毛簇。它常吃果实，也吃小动物，并能把吃下的果实种子带到别处。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '尾巴也能抓握',
      body: '熊狸的长尾巴能够卷住树枝，在树上移动时帮助稳住身体。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '脸旁的长胡须',
      body: '黑褐色的粗毛之间，脸旁伸出浅色长胡须，小耳朵边缘还有毛簇。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '树上的果子',
      body: '它常吃果实，也会吃昆虫等小动物。取食果实后，它能把种子带到别处。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '趴在树上休息',
      body: '白天可以看到它伏在树枝上休息，粗壮的身体贴着枝干。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '暮色里的树枝',
      body: '熊狸常在黄昏和夜里活动，用四足抓住树枝，尾巴帮助攀爬。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保留相连的森林，减少捕猎和对野生熊狸的交易。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '带爆米花气味的熊狸',
      body: 'Raffles 在 1821 年发表了熊狸的科学描述，今天常用 Arctictis binturong。它有 Bearcat 这个英文俗名，科学分类归于灵猫科。熊狸还有一种可以闻到的特点：尿液中的 2-乙酰基-1-吡咯啉也存在于爆米花香气中，所以人们常形容它有爆米花味。',
    },
  ],
  "keyFacts": [
    "熊狸的长尾巴能够卷住树枝，在树上移动时帮助稳住身体。",
    "黑褐色的粗毛之间，脸旁伸出浅色长胡须，小耳朵边缘还有毛簇。",
    "它常吃果实，也会吃昆虫等小动物。取食果实后，它能把种子带到别处。",
    "白天可以看到它伏在树枝上休息，粗壮的身体贴着枝干。",
    "熊狸常在黄昏和夜里活动，用四足抓住树枝，尾巴帮助攀爬。"
  ],
  "threats": [
    "森林砍伐与破碎化",
    "捕猎及野生动物交易"
  ],
  "conservationActions": [
    "保留相连的森林，减少捕猎和对野生熊狸的交易。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "尾巴也能抓握"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "南亚和东南亚的热带森林"
    }
  ],
  "media": {
    "image": "./images/species/binturong/01-cover.webp",
    "alt": "熊狸在自然栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/binturong/02-observation.webp",
        "title": "尾巴也能抓握",
        "alt": "熊狸：尾巴也能抓握",
        "caption": "AI 生成科学情景重建。熊狸的长尾巴能够卷住树枝，在树上移动时帮助稳住身体。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/binturong/03-observation.webp",
        "title": "脸旁的长胡须",
        "alt": "熊狸：脸旁的长胡须",
        "caption": "AI 生成科学情景重建。黑褐色的粗毛之间，脸旁伸出浅色长胡须，小耳朵边缘还有毛簇。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/binturong/04-observation.webp",
        "title": "树上的果子",
        "alt": "熊狸：树上的果子",
        "caption": "AI 生成科学情景重建。它常吃果实，也会吃昆虫等小动物。取食果实后，它能把种子带到别处。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/binturong/05-observation.webp",
        "title": "趴在树上休息",
        "alt": "熊狸：趴在树上休息",
        "caption": "AI 生成科学情景重建。白天可以看到它伏在树枝上休息，粗壮的身体贴着枝干。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/binturong/06-observation.webp",
        "title": "暮色里的树枝",
        "alt": "熊狸：暮色里的树枝",
        "caption": "AI 生成科学情景重建。熊狸常在黄昏和夜里活动，用四足抓住树枝，尾巴帮助攀爬。",
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
      "title": "史密森国家动物园：熊狸生活史",
      "url": "https://nationalzoo.si.edu/animals/binturong",
      "kind": "ecology",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "MDD：熊狸分类、分布与全球易危状态",
      "url": "https://www.mammaldiversity.org/taxon/1006097/",
      "kind": "conservation",
      "accessedAt": "2026-09-21"
    },
    {
      title: 'GBIF：熊狸的科学命名记录',
      url: 'https://www.gbif.org/species/2434615',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-21",
  "updatedAt": "2026-09-21"
} as const satisfies Species;

export default profile;
