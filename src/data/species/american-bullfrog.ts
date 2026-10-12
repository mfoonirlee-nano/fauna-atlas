import type { Species } from '../../types/species.ts';

const profile = {
  "id": "american-bullfrog",
  "slug": "american-bullfrog",
  "names": {
    "zh": "美洲牛蛙",
    "en": "American Bullfrog"
  },
  "scientificName": "Lithobates catesbeianus",
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
      "scientificName": "Ranidae",
      "zhName": "蛙科"
    },
    "genus": {
      "scientificName": "Lithobates",
      "zhName": "美洲蛙属"
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
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "北美洲原生分布区；其他洲有引入种群"
    ],
    "countries": [],
    "range": '原生于北美洲东部和中部，后来由人类引入多个地区。引入种群与原生分布需要区分。'
  },
  "habitats": [
    {
      "name": "池塘、湖泊与缓流水域",
      "realm": "freshwater",
      "description": '池塘、湖泊和缓流水域能供成蛙觅食，也让蝌蚪生长。成蛙可在水边蹲伏，或将身体浸入水中。',
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
      "小鱼",
      "其他蛙类"
    ],
    "description": "成蛙捕食多种能吞下的小动物，食谱与蝌蚪阶段不同。"
  },
  "tags": [
    "美洲牛蛙",
    "折起来的大后腿"
  ],
  "summary": "美洲牛蛙常停在水边，粗壮身体两侧折着大后腿。它的背部呈绿色或褐色，眼睛后面能看见圆形鼓膜。",
  "description": '美洲牛蛙眼后有参与接收声音的圆形鼓膜。它游泳时向后伸展粗壮后腿，用后脚的蹼划水；身体浸在水中时，眼睛和鼻孔仍可露出水面。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '眼睛后面的圆圈',
      body: '眼睛后面的圆形结构是鼓膜，参与接收声音。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '把后腿折起来',
      body: '蹲伏时，粗壮后腿折在身体两侧。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '后脚向后蹬',
      body: '游泳时，它伸展后腿，用后脚趾之间的蹼划水。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '小时候有尾巴',
      body: '牛蛙先经历蝌蚪阶段，发育速度随环境变化。变成小蛙时，尾巴逐渐吸收。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '眼睛露在水面上',
      body: '它能把身体浸在水中，只露出眼睛和鼻孔。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为无危，但在一些引入地区，牛蛙会捕食本地动物并影响当地生态。不要把养殖牛蛙放进野外水域。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '原生地与引入地的不同处境',
      body: 'Shaw 于 1802 年描述了这个物种，现用学名为 Lithobates catesbeianus。牛蛙原生于北美洲，后来由人类带到多个地区。它能捕食许多可吞下的小动物，在部分引入地因此影响本地动物；全球无危等级和当地的外来物种问题属于不同情况。',
    },
  ],
  "keyFacts": [
    '眼睛后面的圆形结构是鼓膜，参与接收声音。',
    '蹲伏时，粗壮后腿折在身体两侧。',
    '游泳时，它伸展后腿，用后脚趾之间的蹼划水。',
    '牛蛙先经历蝌蚪阶段，发育速度随环境变化。变成小蛙时，尾巴逐渐吸收。',
    '它能把身体浸在水中，只露出眼睛和鼻孔。',
  ],
  "threats": [],
  "conservationActions": [
    "防止养殖个体逃逸",
    "不向野外放生牛蛙",
    "保护本地两栖动物"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "折起来的大后腿"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "池塘、湖泊与缓流水域"
    }
  ],
  "media": {
    "image": "./images/species/american-bullfrog/01-cover.webp",
    "alt": "美洲牛蛙的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/american-bullfrog/02-observation.webp",
        "title": "眼后的圆形鼓膜",
        "alt": '眼后的圆形鼓膜',
        "caption": "AI 生成科学情景重建。那个圆圈是鼓膜，参与接收声音。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-bullfrog/03-observation.webp",
        "title": "折起的大后腿",
        "alt": '折起的大后腿',
        "caption": "AI 生成科学情景重建。蹲伏时，粗壮的后腿折在身体两侧。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-bullfrog/04-observation.webp",
        "title": "水下伸展的后脚",
        "alt": '水下伸展的后脚',
        "caption": "AI 生成科学情景重建。游泳时，它伸展后腿，后脚趾之间的蹼帮助划水。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-bullfrog/05-observation.webp",
        "title": "有长尾巴的蝌蚪",
        "alt": '有长尾巴的蝌蚪',
        "caption": "AI 生成科学情景重建。牛蛙先经历蝌蚪阶段，发育速度随环境变化。长成小蛙时，尾巴逐渐吸收。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-bullfrog/06-observation.webp",
        "title": "水面上的眼睛",
        "alt": '水面上的眼睛',
        "caption": "AI 生成科学情景重建。它能把身体浸在水中，露出眼睛和鼻孔。",
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
      "title": "FWS：美洲牛蛙名称",
      "url": "https://www.fws.gov/species/american-bullfrog-lithobates-catesbeianus",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Animal Diversity Web：美洲牛蛙自然史",
      "url": "https://animaldiversity.org/accounts/Lithobates_catesbeianus/",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Animal Diversity Web：美洲牛蛙全球等级",
      "url": "https://animaldiversity.org/accounts/Lithobates_catesbeianus/",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "AMNH：牛蛙的引入影响",
      "url": "https://www.amnh.org/exhibitions/frogs-a-chorus-of-colors/featured-frog-species/green-invaders",
      "kind": "general",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Lithobates catesbeianus 的命名作者与年份',
      url: 'https://www.gbif.org/species/2427091',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
