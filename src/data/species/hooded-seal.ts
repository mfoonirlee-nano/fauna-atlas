import type { Species } from '../../types/species.ts';

const profile = {
  "id": "hooded-seal",
  "slug": "hooded-seal",
  "names": {
    "zh": "冠海豹",
    "en": "Hooded Seal"
  },
  "scientificName": "Cystophora cristata",
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
      "scientificName": "Phocidae",
      "zhName": "海豹科"
    },
    "genus": {
      "scientificName": "Cystophora",
      "zhName": "冠海豹属"
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
    "assessor": "采用 MDD 所列 IUCN 全球等级，独立评估年份未核实。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "北大西洋与邻近北冰洋海域"
    ],
    "countries": [],
    "range": "北大西洋与邻近北冰洋海域。"
  },
  "habitats": [
    {
      "name": "寒冷海域与浮冰",
      "realm": "marine",
      "description": '生活在北大西洋和邻近北冰洋的冷水海域，依赖浮冰休息和育幼。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鱼类",
      "鱿鱼"
    ],
    "description": '潜水捕食鱼类和鱿鱼。'
  },
  "tags": [
    "冠海豹",
    "寒冷海域与浮冰"
  ],
  "summary": '冠海豹在北大西洋和邻近北冰洋潜水觅食，在浮冰上育幼；成年雄性的鼻囊能鼓起。',
  "description": '冠海豹在冷水中寻找鱼类和鱿鱼，上浮冰休息、繁殖。成年雄性头部的深色鼻囊能够鼓起，也能外翻红色鼻膜，这是两种不同的结构。雌性没有同样显眼的膨大鼻囊。幼崽背部的蓝灰色毛很醒目，腹部较浅。全球保护等级为濒危，海冰栖息环境和渔具缠绕都与它的生存有关。',
  "storySections": [
    {
      key: 'observation-1',
      label: '身体特点',
      title: '雄性鼓起的鼻囊',
      body: '成年雄性有能鼓起的深色鼻囊，也能外翻红色鼻膜。',
    },
    {
      key: 'observation-2',
      label: '身体特点',
      title: '身体旁的小鳍肢',
      body: '身体两侧的前鳍肢较短。冠海豹在冰上休息，入水后用鳍肢帮助游动。',
    },
    {
      key: 'observation-3',
      label: '身体特点',
      title: '蓝灰色背毛的幼崽',
      body: '幼崽背毛呈蓝灰色，腹部颜色较浅。NOAA 记录，幼崽出生后约 3 至 5 天就断奶。',
    },
    {
      key: 'observation-4',
      label: '生活习性',
      title: '冰下游动',
      body: '冠海豹会潜水寻找鱼类和鱿鱼，身体后方有后鳍肢。',
    },
    {
      key: 'observation-5',
      label: '栖息与生活',
      title: '浮冰上的母子',
      body: '雌性没有成年雄性那样显眼的膨大鼻囊。幼崽在冰上度过早期生活。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保护海冰栖息环境，减少渔具缠绕；观察海豹时保持距离，让它们安静休息。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '从 Phoca cristata 到冠海豹',
      body: 'Erxleben 在 1777 年以 Phoca cristata 发表了冠海豹的科学名称，原记录提到格陵兰南部和纽芬兰。后来它被归入 Cystophora 属，现用学名是 Cystophora cristata。“冠”与成年雄性头部能膨起的鼻囊相对应，NOAA 也记录了“囊鼻海豹”这一通名。',
    },
  ],
  "keyFacts": [
    '成年雄性有能鼓起的深色鼻囊，也能外翻红色鼻膜。',
    '身体两侧的前鳍肢较短。冠海豹在冰上休息，入水后用鳍肢帮助游动。',
    '幼崽背毛呈蓝灰色，腹部颜色较浅。NOAA 记录，幼崽出生后约 3 至 5 天就断奶。',
    '冠海豹会潜水寻找鱼类和鱿鱼，身体后方有后鳍肢。',
    '雌性没有成年雄性那样显眼的膨大鼻囊。幼崽在冰上度过早期生活。',
    'Erxleben 在 1777 年以 Phoca cristata 发表了冠海豹的科学名称，原记录提到格陵兰南部和纽芬兰。后来它被归入 Cystophora 属，现用学名是 Cystophora cristata。“冠”与成年雄性头部能膨起的鼻囊相对应，NOAA 也记录了“囊鼻海豹”这一通名。',
  ],
  "threats": [
    "气候变化与海冰减少",
    "捕猎",
    "渔具缠绕"
  ],
  "conservationActions": [
    "保护海冰栖息环境，减少渔具缠绕；观察海豹时保持距离，让它们安静休息。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "寒冷海域与浮冰"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "雄性鼓起的鼻囊"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "濒危",
      "note": "采用 MDD 所列 IUCN 全球等级，独立评估年份未核实。"
    }
  ],
  "media": {
    "image": "./images/species/hooded-seal/01-cover.webp",
    "alt": "冠海豹及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/hooded-seal/02-observation.webp",
        "alt": "冠海豹：雄性鼓起的鼻囊",
        "title": "雄性鼓起的鼻囊",
        "caption": "AI 生成科学情景重建。图中是成年雄性的深色鼻囊。它还可外翻红色鼻膜，两者不能混作同一个结构；这张重建图未展示红色鼻膜。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/hooded-seal/03-observation.webp",
        "alt": "冠海豹：身体旁的小鳍肢",
        "title": "身体旁的小鳍肢",
        "caption": "AI 生成科学情景重建。在身体两侧找找短短的前鳍肢。冠海豹在冰上休息，进入水中后用鳍肢帮助游动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/hooded-seal/04-observation.webp",
        "alt": "冠海豹：蓝灰色背毛的幼崽",
        "title": "蓝灰色背毛的幼崽",
        "caption": "AI 生成科学情景重建。看看幼崽的背部与腹部：背毛呈蓝灰色，腹部颜色较浅。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/hooded-seal/05-observation.webp",
        "alt": "冠海豹：冰下游动",
        "title": "冰下游动",
        "caption": "AI 生成科学情景重建。沿着水中的身体找到后鳍肢。冠海豹会潜水寻找鱼类和鱿鱼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/hooded-seal/06-observation.webp",
        "alt": "冠海豹：浮冰上的母子",
        "title": "浮冰上的母子",
        "caption": "AI 生成科学情景重建。这张图展示雌性和幼崽。雌性没有成年雄性那样显眼的膨大鼻囊，幼崽在冰上度过早期生活。",
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
      "title": "MDD：分类、分布与保护等级",
      "url": "https://www.mammaldiversity.org/taxon/1005911/",
      "kind": "conservation",
      "accessedAt": "2026-09-27"
    },
    {
      "title": "NOAA Fisheries：冠海豹",
      "url": "https://www.fisheries.noaa.gov/species/hooded-seal",
      "kind": "ecology",
      "accessedAt": "2026-09-27"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-27",
  "updatedAt": "2026-09-27"
} as const satisfies Species;

export default profile;
