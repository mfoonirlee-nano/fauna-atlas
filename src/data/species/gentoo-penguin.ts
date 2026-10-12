import type { Species } from '../../types/species.ts';

const profile = {
  "id": "gentoo-penguin",
  "slug": "gentoo-penguin",
  "names": {
    "zh": "巴布亚企鹅",
    "en": "Gentoo Penguin"
  },
  "scientificName": "Pygoscelis papua",
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
      "scientificName": "Sphenisciformes",
      "zhName": "企鹅目"
    },
    "family": {
      "scientificName": "Spheniscidae",
      "zhName": "企鹅科"
    },
    "genus": {
      "scientificName": "Pygoscelis",
      "zhName": "阿德利企鹅属"
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
    "assessor": "依据所列资料的全球等级；独立评估日期未核实"
  },
  "distribution": {
    "realms": [
      "marine",
      "terrestrial"
    ],
    "continents": [
      "南极洲"
    ],
    "regions": [
      "亚南极岛屿与南极半岛"
    ],
    "countries": [],
    "range": "在多个亚南极岛屿和南极半岛繁殖，常在繁殖地附近海域觅食。"
  },
  "habitats": [
    {
      "name": "石滩、草丛与近海",
      "realm": "marine",
      "description": '石滩和草丛提供筑巢位置，繁殖地附近海域提供食物。幼鸟留在岸上，待长出适合游泳的羽毛后进入海洋。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "weight": {
      "min": 5,
      "max": 8,
      "unit": "kg",
      "note": "Australian Antarctic Program 所列成鸟范围。"
    }
  },
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "甲壳类",
      "小鱼",
      "鱿鱼"
    ],
    "description": "取食甲壳类、小鱼、鱿鱼。"
  },
  "tags": [
    "巴布亚企鹅",
    "头顶连起来的白斑"
  ],
  "summary": "巴布亚企鹅的白色花纹跨过头顶，嘴呈橙红色，脚为橙色。它属于阿德利企鹅属。",
  "description": '巴布亚企鹅用鳍状翅划水，捕食甲壳类、小鱼和鱿鱼。亲鸟在石滩或草丛间筑巢，轮流孵卵；绒羽幼鸟由亲鸟喂食，长出适合游泳的羽毛后下海。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '头顶的白色花纹',
      body: '两眼上方的白斑跨过头顶，形成连在一起的白色花纹。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '橙色的蹼足',
      body: '橙色脚趾之间连着蹼，走上石滩时能够看见。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '在岸上筑巢',
      body: '巴布亚企鹅在石滩或草丛间筑巢，亲鸟轮流孵卵。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '鳍状翅划水',
      body: '在水中，它用鳍状翅推动身体，捕捉鱼和甲壳类。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '亲鸟和幼鸟',
      body: '绒羽幼鸟留在岸上，由亲鸟喂食，换上适合游泳的羽毛后下海。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为无危。不同地区的种群变化不同，保护工作需要结合当地繁殖地与海域情况。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '名字里的“巴布亚”来自旧误记',
      body: 'J.R.Forster 于 1781 年描述了这个物种，现用学名为 Pygoscelis papua。Forster 命名时将福克兰群岛的企鹅与此前误报的新几内亚记录联系起来，留下了 papua 这个种名。它实际在亚南极岛屿和南极半岛繁殖，名字不能当作分布证据；这里保留资料来源中的广义物种范围。',
    },
  ],
  "keyFacts": [
    '两眼上方的白斑跨过头顶，形成连在一起的白色花纹。',
    '橙色脚趾之间连着蹼，走上石滩时能够看见。',
    '巴布亚企鹅在石滩或草丛间筑巢，亲鸟轮流孵卵。',
    '在水中，它用鳍状翅推动身体，捕捉鱼和甲壳类。',
    '绒羽幼鸟留在岸上，由亲鸟喂食，换上适合游泳的羽毛后下海。',
  ],
  "threats": [
    "繁殖地干扰",
    "海洋环境变化",
    "部分地点的外来动物"
  ],
  "conservationActions": [
    "保护繁殖地",
    "减少人为干扰",
    "持续监测各地种群"
  ],
  "metrics": {
    "adultMassKg": [
      5,
      8
    ]
  },
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "头顶连起来的白斑"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "石滩、草丛与近海"
    }
  ],
  "media": {
    "image": "./images/species/gentoo-penguin/01-cover.webp",
    "alt": "巴布亚企鹅的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/gentoo-penguin/02-observation.webp",
        "title": "头顶的白色花纹",
        "alt": '头顶的白色花纹',
        "caption": "AI 生成科学情景重建。看看两眼上方的白斑怎样从头顶连起来。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/gentoo-penguin/03-observation.webp",
        "title": "橙色的蹼足",
        "alt": '橙色的蹼足',
        "caption": "AI 生成科学情景重建。走上石滩时，找找橙色脚趾之间连着的蹼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/gentoo-penguin/04-observation.webp",
        "title": "在岸上筑巢",
        "alt": '在岸上筑巢',
        "caption": "AI 生成科学情景重建。巴布亚企鹅在石滩或草丛间筑巢，亲鸟轮流孵蛋。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/gentoo-penguin/05-observation.webp",
        "title": "鳍状翅划水",
        "alt": '鳍状翅划水',
        "caption": "AI 生成科学情景重建。在水里，它用鳍状翅推动身体，捕捉鱼和甲壳类。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/gentoo-penguin/06-observation.webp",
        "title": "亲鸟和幼鸟",
        "alt": '亲鸟和幼鸟',
        "caption": "AI 生成科学情景重建。绒羽幼鸟留在岸上，由亲鸟喂食；长出适合游泳的羽毛后再下海。",
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
      "title": "Australian Antarctic Program：巴布亚企鹅",
      "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/gentoo-penguin/",
      "kind": "ecology",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "BirdLife South Africa：巴布亚企鹅全球等级与分类范围",
      "url": "https://www.birdlife.org.za/red-data-book/red-list/gentoo-penguin/",
      "kind": "conservation",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "Gentoo Penguin：学名与分类",
      "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/gentoo-penguin/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-16"
    },
    {
      title: 'GBIF：Pygoscelis papua 的命名作者与年份',
      url: 'https://www.gbif.org/species/2481666',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
    {
      title: 'HANZAB：Gentoo Penguin 原始命名地点误记',
      url: 'https://www.nzbirdsonline.org.nz/assets/95597/1691727492-042_gentoo-20penguin.pdf',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-16",
  "updatedAt": "2026-09-16"
} as const satisfies Species;

export default profile;
