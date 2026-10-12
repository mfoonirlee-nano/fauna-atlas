import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-asterias-rubens",
  "slug": "common-starfish",
  "names": {
    "zh": "普通海星",
    "en": "Common Starfish",
    "aliases": []
  },
  "scientificName": "Asterias rubens",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Echinodermata",
      "zhName": "棘皮动物门"
    },
    "class": {
      "scientificName": "Asteroidea",
      "zhName": "海星纲"
    },
    "order": {
      "scientificName": "Forcipulatida",
      "zhName": "钳棘目"
    },
    "family": {
      "scientificName": "Asteriidae",
      "zhName": "海盘车科"
    },
    "genus": {
      "scientificName": "Asterias",
      "zhName": "海盘车属"
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
    "assessor": "IUCN（NE 见所列动物园或水族馆来源）"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "欧洲",
      "非洲"
    ],
    "countries": [
      "英国",
      "爱尔兰",
      "挪威"
    ],
    "regions": [
      "东北大西洋近岸"
    ],
    "range": "东北大西洋沿岸常见，包括英国、爱尔兰及挪威等地；这里列举部分分布地，不把地图中心当作完整范围。",
    "center": {
      "lat": 55,
      "lng": -5
    }
  },
  "habitats": [
    {
      "realm": "marine",
      "name": "岩礁与贝床",
      "description": "普通海星生活在岩石、砂砾等海底环境，也常见于贝类聚集的地方。它的腕能弯曲，活动时腕尖有时会向上翘。",
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 10,
      "max": 30,
      "unit": "cm",
      "note": "MarLIN 给出的常见直径范围，包含伸出的腕；不作为头体长。"
    }
  },
  "metrics": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "贻贝",
      "其他双壳类",
      "小型海底动物"
    ],
    "description": '吃贻贝等海底动物，用腕和管足抓住贝壳，再把胃从口中伸出，在壳缝中消化软体部分。'
  },
  "tags": [
    "普通海星",
    "五条伸出的腕"
  ],
  "summary": "普通海星通常有五条腕，腕下面的小管足帮助它附着和爬行。受伤或再生中的个体，腕数可能不同。",
  "description": '普通海星生活在岩石、砂砾等海底，也常见于贝床。它可以呈橙色、浅褐色或紫色，活动时腕能弯曲，腕尖有时向上翘。',
  "storySections": [
    {
      key: 'arms',
      label: '生活与认识',
      title: '一起数五条腕',
      body: '普通海星通常有五条腕，从身体中央向外伸出。受伤或再生中的个体可能有不同的腕数。',
    },
    {
      key: 'feet',
      label: '生活与认识',
      title: '小管足贴住海底',
      body: '腕的下面有许多小管足，能附着在岩石等表面，再带动身体移动。观察图中腕底的小结构，可以看看管足与海底怎样接触。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '在贝壳旁边找食物',
      body: '普通海星吃贻贝等海底动物。它用腕和管足抓住贝壳，还能把胃从口中伸出，在壳缝中消化软体部分。共读时先找找海星下面的贝壳。',
    },
    {
      key: 'colour',
      label: '生活与认识',
      title: '也有紫色的海星',
      body: '本种可以呈橙色、浅褐色或紫色。图集展示不同颜色的个体，不能把颜色差别理解为同一只海星正在变色。',
    },
    {
      key: 'habitat',
      label: '生活与认识',
      title: '沿着海底慢慢爬',
      body: '普通海星生活在岩石、砂砾等海底环境，也常见于贝类聚集的地方。它的腕能弯曲，活动时腕尖有时会向上翘。',
    },
    {
      key: 'care',
      label: '生活与认识',
      title: '在水里观察海星',
      body: '普通海星的 IUCN 状态为未评估（NE），不等于无危。到海边观察时，让海星留在水里，不掰腕、不带走。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '五条腕下面藏着管足',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Asterias rubens。普通海星通常有五条腕，再生中的个体腕数可能不同。它用许多小管足抓住贝壳，还能把胃伸出口外，在壳缝中消化贝类软体部分。',
    },
  ],
  "keyFacts": [
    '通常有五条腕，受伤或再生时腕数可能不同。',
    '用腕下面的管足附着和移动。',
    '能把胃从口中伸出，消化贝类软体部分。',
    '可呈橙色、浅褐色或紫色。',
    '生活在岩礁、砂砾和贝床等海底。',
  ],
  "threats": [
    "近岸污染与海底生境扰动。"
  ],
  "conservationActions": [
    "保留潮间带生境，观察后让动物留在原处。"
  ],
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "五条伸出的腕"
    },
    {
      "key": "food",
      "label": "主要食物",
      "value": "贻贝"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "岩礁与贝床"
    }
  ],
  "sources": [
    {
      "title": "ADW — 普通海星分类与生活",
      "url": "https://animaldiversity.org/accounts/Asterias_rubens/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "MarLIN — 普通海星形态、分布与生态",
      "url": "https://www.marlin.ac.uk/species/detail/1194",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Macduff Aquarium — 普通海星未评估状态",
      "url": "https://www.macduff-aquarium.org.uk/explore/fish-finder/common-starfish",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      title: 'GBIF：Asterias rubens 的命名作者与年份',
      url: 'https://www.gbif.org/species/7765831',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "media": {
    "image": "./images/species/common-starfish/01-cover.webp",
    "alt": "普通海星的完整身体位于画面右侧。",
    "focalPoint": {
      "x": 0.74,
      "y": 0.33
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-starfish/02-observation.webp",
        "title": "一起数五条腕",
        "alt": "俯视普通海星，五条橙色腕在岩石上展开。",
        "caption": "俯视普通海星，五条橙色腕在岩石上展开。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-starfish/03-observation.webp",
        "title": "小管足贴住海底",
        "alt": "腕下方可见贴近岩石的小管足。",
        "caption": "腕下方可见贴近岩石的小管足。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-starfish/04-observation.webp",
        "title": "在贝壳旁边找食物",
        "alt": "普通海星伏在贻贝床上。",
        "caption": "普通海星伏在贻贝床上。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-starfish/05-observation.webp",
        "title": "也有紫色的海星",
        "alt": "一只偏紫色的普通海星位于浅色海底。",
        "caption": "一只偏紫色的普通海星位于浅色海底。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-starfish/06-observation.webp",
        "title": "沿着海底慢慢爬",
        "alt": "普通海星的腕沿低矮岩石弯曲。",
        "caption": "普通海星的腕沿低矮岩石弯曲。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      }
    ]
  },
  "featured": true,
  "publishedAt": "2026-09-09",
  "updatedAt": "2026-09-09"
} as const satisfies Species;

export default profile;
