import type { Species } from '../../types/species.ts';

const profile = {
  "id": "basking-shark",
  "slug": "basking-shark",
  "names": {
    "zh": "姥鲨",
    "en": "Basking Shark"
  },
  "scientificName": "Cetorhinus maximus",
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
      "scientificName": "Chondrichthyes",
      "zhName": "软骨鱼纲"
    },
    "order": {
      "scientificName": "Lamniformes",
      "zhName": "鼠鲨目"
    },
    "family": {
      "scientificName": "Cetorhinidae",
      "zhName": "姥鲨科"
    },
    "genus": {
      "scientificName": "Cetorhinus",
      "zhName": "姥鲨属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "EN",
    "label": {
      "zh": "濒危",
      "en": "Endangered"
    },
    "trend": "unknown",
    "assessor": "依据所列来源中的全球等级；未单独核实评估日期"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "温带海洋",
      "大西洋",
      "太平洋"
    ],
    "countries": [],
    "range": "广布于温带海域，可在沿岸与外海活动，也会穿过较温暖海域的深水层迁移。",
    "center": {
      "lat": 50,
      "lng": -10
    }
  },
  "habitats": [
    {
      "name": "温带沿岸与外海",
      "realm": "marine",
      "description": "广布于温带海域，可在沿岸与外海活动，也会穿过较温暖海域的深水层迁移。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "filter-feeder"
    ],
    "foods": [
      "桡足类等浮游动物"
    ],
    "description": "取食桡足类等浮游动物。"
  },
  "tags": [
    "姥鲨",
    "大嘴里的小食物"
  ],
  "summary": "姥鲨张嘴游动，让海水流过口腔和鳃部，从中滤取浮游动物。它既在近水面活动，也会潜入深水。",
  "description": '姥鲨在温带沿岸和外海活动，也能穿过较暖海域的深水层迁移。它张开大嘴游泳，让海水流过口腔和鳃部，滤取浮游动物。灰褐色身体两侧各有五条很长的鳃裂；人们能在近水面看见它的背鳍，它也会潜到深水。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '大嘴里的小食物',
      body: '姥鲨张嘴游泳，把水中的浮游动物滤出来吃。大嘴不表示它在追咬大鱼。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '靠近水面游动',
      body: '它有时在近水面游动，可以看到高高的背鳍。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '头后长长的鳃裂',
      body: '沿着头后方找找鳃裂。姥鲨两侧各有五条很长的鳃裂。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '闭上嘴巴时',
      body: '姥鲨也会闭嘴游泳。看看尖一些的吻部和完整身体。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '从沿岸游向外海',
      body: '它会在不同海域间迁移，也能潜入深水，不能只凭水面观察判断它去了哪里。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保护生活的水域',
      body: '全球等级为濒危。减少误捕，保护它觅食和迁移经过的海域。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“晒太阳的鲨鱼”与海怪误认',
      body: 'Gunnerus 在 1765 年描述了姥鲨。英文名 Basking Shark 与它贴近水面游动、背鳍露出水面，好像在晒太阳的姿势有关。它腐烂后的身体也曾让人误以为发现了海怪：佛罗里达自然历史博物馆记载，1977 年日本渔民捞起的一具残骸曾被认为是蛇颈龙。',
    },
  ],
  "keyFacts": [
    "姥鲨张嘴游泳，把水中的浮游动物滤出来吃。大嘴不表示它在追咬大鱼。",
    "它有时在近水面游动，可以看到高高的背鳍。",
    "沿着头后方找找鳃裂。姥鲨两侧各有五条很长的鳃裂。",
    "姥鲨也会闭嘴游泳。看看尖一些的吻部和完整身体。",
    "它会在不同海域间迁移，也能潜入深水，不能只凭水面观察判断它去了哪里。"
  ],
  "threats": [
    "渔具误捕与缠绕",
    "历史捕捞造成的种群损失"
  ],
  "conservationActions": [
    "减少渔具误捕",
    "保护迁移与觅食水域"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "大嘴里的小食物"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "温带沿岸与外海"
    }
  ],
  "media": {
    "image": "./images/species/basking-shark/01-cover.webp",
    "alt": "姥鲨的完整身体与水中环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/basking-shark/02-observation.webp",
        "title": "大嘴里的小食物",
        "alt": "姥鲨：大嘴里的小食物",
        "caption": "AI 生成科学情景重建。姥鲨张嘴游泳，把水中的浮游动物滤出来吃。大嘴不表示它在追咬大鱼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/basking-shark/03-observation.webp",
        "title": "靠近水面游动",
        "alt": "姥鲨：靠近水面游动",
        "caption": "AI 生成科学情景重建。它有时在近水面游动，可以看到高高的背鳍。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/basking-shark/04-observation.webp",
        "title": "头后长长的鳃裂",
        "alt": "姥鲨：头后长长的鳃裂",
        "caption": "AI 生成科学情景重建。沿着头后方找找鳃裂。姥鲨两侧各有五条很长的鳃裂。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/basking-shark/05-observation.webp",
        "title": "闭上嘴巴时",
        "alt": "姥鲨：闭上嘴巴时",
        "caption": "AI 生成科学情景重建。姥鲨也会闭嘴游泳。看看尖一些的吻部和完整身体。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/basking-shark/06-observation.webp",
        "title": "从沿岸游向外海",
        "alt": "姥鲨：从沿岸游向外海",
        "caption": "AI 生成科学情景重建。它会在不同海域间迁移，也能潜入深水，不能只凭水面观察判断它去了哪里。",
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
      "title": "Florida Museum：姥鲨分类与生态",
      "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/basking-shark/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "Shark Trust：姥鲨生活史",
      "url": "https://www.sharktrust.org/about-basking-sharks",
      "kind": "ecology",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "Shark Trust：全球保护等级",
      "url": "https://www.sharktrust.org/adopt-a-basking-shark",
      "kind": "conservation",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "WHOI：姥鲨深水迁移",
      "url": "https://www.whoi.edu/press-room/news-release/basking-migration/",
      "kind": "distribution",
      "accessedAt": "2026-09-20"
    },
    {
      title: 'GBIF：姥鲨的科学命名记录',
      url: 'https://www.gbif.org/species/2420726',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-20",
  "updatedAt": "2026-09-20"
} as const satisfies Species;

export default profile;
