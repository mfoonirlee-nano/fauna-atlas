import type { Species } from '../../types/species.ts';

const profile = {
  "id": "blue-footed-booby",
  "slug": "blue-footed-booby",
  "names": {
    "zh": "蓝脚鲣鸟",
    "en": "Blue-footed Booby"
  },
  "scientificName": "Sula nebouxii",
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
      "scientificName": "Suliformes",
      "zhName": "鲣鸟目"
    },
    "family": {
      "scientificName": "Sulidae",
      "zhName": "鲣鸟科"
    },
    "genus": {
      "scientificName": "Sula",
      "zhName": "鲣鸟属"
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
    "assessor": '全球等级为 LC（无危）；独立评估日期与种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "marine",
      "terrestrial"
    ],
    "continents": [
      "北美洲",
      "南美洲"
    ],
    "regions": [
      "东太平洋沿岸及加拉帕戈斯群岛"
    ],
    "countries": [
      "墨西哥",
      "厄瓜多尔",
      "秘鲁"
    ],
    "range": "东太平洋沿岸及加拉帕戈斯群岛。国家列表仅列代表性分布地。"
  },
  "habitats": [
    {
      "name": "东太平洋沿岸及加拉帕戈斯群岛",
      "realm": "marine",
      "description": "东太平洋沿岸及加拉帕戈斯群岛。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "piscivore"
    ],
    "foods": [
      "沙丁鱼",
      "鳀鱼等小鱼"
    ],
    "description": "食物包括沙丁鱼、鳀鱼等小鱼。"
  },
  "tags": [
    "蓝脚鲣鸟",
    "蓝色的脚"
  ],
  "summary": '蓝脚鲣鸟用蓝色蹼足求偶展示，俯冲入海捕捉小鱼。父母在地面轮流育幼，幼鸟脚色不同于成鸟。',
  "description": '蓝脚鲣鸟生活在东太平洋沿岸和岛屿，加拉帕戈斯群岛是其中一处分布地。成鸟有蓝色蹼足，雄鸟求偶时轮流抬脚展示。它飞到海面寻找鱼群，俯冲入水捕捉小鱼。父母在地面轮流照顾卵和雏鸟，给幼鸟喂鱼；幼鸟的脚色与成鸟不同。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '蓝色的脚',
      body: '成年蓝脚鲣鸟的脚呈蓝色，脚趾之间连着蹼。幼鸟的脚色会与成鸟不同。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '抬脚给同伴看',
      body: '求偶时，雄鸟会轮流抬高双脚，向雌鸟展示脚部。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '飞到海上找鱼',
      body: '蓝脚鲣鸟飞到海面上寻找鱼群，再俯冲入水捕捉小鱼。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '地面上的小鸟',
      body: '蓝脚鲣鸟在地面繁殖。父母轮流照看卵和雏鸟，并给小鸟喂鱼。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '海岛岸边休息',
      body: '它在东太平洋海岸和岛屿生活，加拉帕戈斯是其中一处分布地。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '减少进入海洋的塑料，保护海鸟的食物来源与繁殖地。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '地上的“丑角”和海上的捕鱼者',
      body: 'Milne-Edwards 在 1882 年发表 Sula nebouxii 这个名称。英文 Booby 来自西班牙语 bobo，有“傻瓜、丑角”的意思，早期人们用它形容鲣鸟在地面上的动作。“蓝脚”则来自成鸟的蹼足，它求偶时会抬脚展示，捕鱼时又能俯冲入海。',
    },
  ],
  "keyFacts": [
    "成年蓝脚鲣鸟的脚呈蓝色，脚趾之间连着蹼。幼鸟的脚色会与成鸟不同。",
    "求偶时，雄鸟会轮流抬高双脚，向雌鸟展示脚部。",
    "蓝脚鲣鸟飞到海面上寻找鱼群，再俯冲入水捕捉小鱼。",
    "蓝脚鲣鸟在地面繁殖。父母轮流照看卵和雏鸟，并给小鸟喂鱼。",
    "它在东太平洋海岸和岛屿生活，加拉帕戈斯是其中一处分布地。"
  ],
  "threats": [
    "部分地区食物鱼类减少",
    "海洋塑料污染"
  ],
  "conservationActions": [
    "减少进入海洋的塑料，保护海鸟的食物来源与繁殖地。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "蓝色的脚"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "东太平洋沿岸及加拉帕戈斯群岛"
    }
  ],
  "media": {
    "image": "./images/species/blue-footed-booby/01-cover.webp",
    "alt": "蓝脚鲣鸟在栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/blue-footed-booby/02-observation.webp",
        "title": "蓝色的脚",
        "alt": "蓝脚鲣鸟：蓝色的脚",
        "caption": "AI 生成科学情景重建。成年蓝脚鲣鸟的脚呈蓝色，脚趾之间连着蹼。幼鸟的脚色会与成鸟不同。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-footed-booby/03-observation.webp",
        "title": "抬脚给同伴看",
        "alt": "蓝脚鲣鸟：抬脚给同伴看",
        "caption": "AI 生成科学情景重建。求偶时，雄鸟会轮流抬高双脚，向雌鸟展示脚部。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-footed-booby/04-observation.webp",
        "title": "飞到海上找鱼",
        "alt": "蓝脚鲣鸟：飞到海上找鱼",
        "caption": "AI 生成科学情景重建。蓝脚鲣鸟飞到海面上寻找鱼群，再俯冲入水捕捉小鱼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-footed-booby/05-observation.webp",
        "title": "地面上的小鸟",
        "alt": "蓝脚鲣鸟：地面上的小鸟",
        "caption": "AI 生成科学情景重建。蓝脚鲣鸟在地面繁殖。父母轮流照看卵和雏鸟，并给小鸟喂鱼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-footed-booby/06-observation.webp",
        "title": "海岛岸边休息",
        "alt": "蓝脚鲣鸟：海岛岸边休息",
        "caption": "AI 生成科学情景重建。它在东太平洋海岸和岛屿生活，加拉帕戈斯是其中一处分布地。",
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
      "title": "加拉帕戈斯保护信托：蓝脚鲣鸟生态与全球无危状态",
      "url": "https://galapagosconservation.org.uk/species/blue-footed-booby/",
      "kind": "conservation",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "加拉帕戈斯保护信托：蓝脚与求偶展示",
      "url": "https://galapagosconservation.org.uk/why-do-boobies-have-blue-feet-2/",
      "kind": "ecology",
      "accessedAt": "2026-09-21"
    },
    {
      title: 'GBIF：蓝脚鲣鸟的科学命名记录',
      url: 'https://www.gbif.org/species/2480978',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-21",
  "updatedAt": "2026-09-21"
} as const satisfies Species;

export default profile;
