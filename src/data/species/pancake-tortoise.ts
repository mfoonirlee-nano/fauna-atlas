import type { Species } from '../../types/species.ts';

const profile = {
  "id": "pancake-tortoise",
  "slug": "pancake-tortoise",
  "names": {
    "zh": "饼干龟",
    "en": "Pancake Tortoise"
  },
  "scientificName": "Malacochersus tornieri",
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
      "scientificName": "Reptilia",
      "zhName": "爬行纲"
    },
    "order": {
      "scientificName": "Testudines",
      "zhName": "龟鳖目"
    },
    "family": {
      "scientificName": "Testudinidae",
      "zhName": "陆龟科"
    },
    "genus": {
      "scientificName": "Malacochersus",
      "zhName": "饼干龟属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "CR",
    "label": {
      "zh": "极危",
      "en": "Critically Endangered"
    },
    "trend": "unknown",
    "assessor": '全球等级为 CR（极危）；独立评估日期与种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "非洲"
    ],
    "regions": [
      "东非干燥草原和灌丛中的岩石丘陵"
    ],
    "countries": [
      "肯尼亚",
      "坦桑尼亚"
    ],
    "range": "东非干燥草原和灌丛中的岩石丘陵。列出的国家为代表性分布地，不是完整名录。"
  },
  "habitats": [
    {
      "name": "东非干燥草原和灌丛中的岩石丘陵",
      "realm": "terrestrial",
      "description": "东非干燥草原和灌丛中的岩石丘陵。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草",
      "叶片",
      "其他植物"
    ],
    "description": "主要取食草、叶片、其他植物。"
  },
  "tags": [
    "饼干龟",
    "扁扁的龟壳"
  ],
  "summary": '饼干龟用扁平、较灵活的身体钻进岩缝躲藏。它在东非岩石丘陵生活，主要取食草和其他植物。',
  "description": '饼干龟生活在东非干燥草原、灌丛中的岩石丘陵。低而扁的棕黄色背甲带深色纹路，身体较灵活，能钻进狭窄岩缝躲藏。它用脚爪抓住粗糙岩面，在岩石附近取食草和其他植物。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '扁扁的龟壳',
      body: '饼干龟的背甲低而扁，与许多背甲高高拱起的陆龟不同。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '岩缝里的藏身处',
      body: '扁平、较灵活的身体让它能够钻进狭窄岩缝躲藏。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '地上的植物',
      body: '它主要取食草和其他植物，常在岩石附近寻找食物。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '壳上的棕色纹路',
      body: '棕黄色甲片上有深色纹路，和干燥岩地的颜色接近。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '脚抓住岩面',
      body: '它能用脚爪抓住粗糙岩面，在岩石之间攀爬。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保护岩石栖息地，不购买来源不明的野生龟。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '人名和扁平龟壳',
      body: 'Siebenrock 在 1903 年发表的原名是 Testudo tornieri，今天采用 Malacochersus tornieri。种名 tornieri 纪念德国动物学家 Gustav Tornier。俗名“饼干龟”和英文 Pancake Tortoise 则把人们的视线引向扁平龟壳，这样的身体能钻进岩石缝隙。',
    },
  ],
  "keyFacts": [
    "饼干龟的背甲低而扁，与许多背甲高高拱起的陆龟不同。",
    "扁平、较灵活的身体让它能够钻进狭窄岩缝躲藏。",
    "它主要取食草和其他植物，常在岩石附近寻找食物。",
    "棕黄色甲片上有深色纹路，和干燥岩地的颜色接近。",
    "它能用脚爪抓住粗糙岩面，在岩石之间攀爬。"
  ],
  "threats": [
    "宠物贸易捕捉",
    "岩地栖息地破坏"
  ],
  "conservationActions": [
    "保护岩石栖息地，不购买来源不明的野生龟。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "扁扁的龟壳"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "东非干燥草原和灌丛中的岩石丘陵"
    }
  ],
  "media": {
    "image": "./images/species/pancake-tortoise/01-cover.webp",
    "alt": "饼干龟在自然栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/pancake-tortoise/02-observation.webp",
        "title": "扁扁的龟壳",
        "alt": "饼干龟：扁扁的龟壳",
        "caption": "AI 生成科学情景重建。饼干龟的背甲低而扁，与许多背甲高高拱起的陆龟不同。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pancake-tortoise/03-observation.webp",
        "title": "岩缝里的藏身处",
        "alt": "饼干龟：岩缝里的藏身处",
        "caption": "AI 生成科学情景重建。扁平、较灵活的身体让它能够钻进狭窄岩缝躲藏。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pancake-tortoise/04-observation.webp",
        "title": "地上的植物",
        "alt": "饼干龟：地上的植物",
        "caption": "AI 生成科学情景重建。它主要取食草和其他植物，常在岩石附近寻找食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pancake-tortoise/05-observation.webp",
        "title": "壳上的棕色纹路",
        "alt": "饼干龟：壳上的棕色纹路",
        "caption": "AI 生成科学情景重建。棕黄色甲片上有深色纹路，和干燥岩地的颜色接近。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pancake-tortoise/06-observation.webp",
        "title": "脚抓住岩面",
        "alt": "饼干龟：脚抓住岩面",
        "caption": "AI 生成科学情景重建。它能用脚爪抓住粗糙岩面，在岩石之间攀爬。",
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
      "title": "史密森国家动物园：饼干龟形态与生活史",
      "url": "https://nationalzoo.si.edu/animals/african-pancake-tortoise",
      "kind": "ecology",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "贝尔法斯特动物园：全球极危状态",
      "url": "https://www.belfastcity.gov.uk/zoo/our-animals/reptiles/pancake-tortoise",
      "kind": "conservation",
      "accessedAt": "2026-09-21"
    },
    {
      title: 'The Reptile Database：饼干龟名称词源',
      url: 'https://reptile-database.reptarium.cz/Malacochersus/tornieri',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-21",
  "updatedAt": "2026-09-21"
} as const satisfies Species;

export default profile;
