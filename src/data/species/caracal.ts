import type { Species } from '../../types/species.ts';

const profile = {
  "id": "caracal",
  "slug": "caracal",
  "names": {
    "zh": "狞猫",
    "en": "Caracal",
    "aliases": []
  },
  "scientificName": "Caracal caracal",
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
      "scientificName": "Felidae",
      "zhName": "猫科"
    },
    "genus": {
      "scientificName": "Caracal",
      "zhName": "狞猫属"
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
    "assessor": "依据来源所载全球等级；未单独核实评估日期，地方等级另见保护章节"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "非洲",
      "亚洲"
    ],
    "regions": [
      "非洲、西亚与中亚部分地区至印度西北部"
    ],
    "countries": [],
    "range": "分布跨非洲及西亚、中亚部分地区，向东到印度西北部；不同地区的分布连续程度与数量差异明显。"
  },
  "habitats": [
    {
      "name": "有植被遮蔽的干草原、灌丛与疏林",
      "realm": "terrestrial",
      "description": '狞猫在干草原、灌丛和疏林寻找猎物，用植被隐蔽身体。浓密草木、岩缝与洞穴能提供炎热时休息的位置。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "野兔",
      "啮齿动物",
      "鸟类",
      "小型羚羊"
    ],
    "description": "主要捕食中小型哺乳动物和鸟类。它多在地面接近猎物，也能跃起捕捉起飞的鸟。"
  },
  "tags": [
    "狞猫",
    "耳朵尖上的黑色长毛"
  ],
  "summary": "狞猫腿长，黄褐到红褐色的身体下方是浅色腹部。黑色耳背和耳尖的一簇长黑毛是它醒目的特征。",
  "description": '狞猫的腿长、尾巴比豹短，耳朵背面发黑，耳尖有长黑毛。它常独自接近猎物，后腿发力时还能向上跃起捕捉飞鸟；活动时间随温度和环境变化。',
  "storySections": [
    {
      key: 'ears',
      label: '生活与认识',
      title: '耳朵尖上长着黑毛',
      body: '三角形耳朵的尖端各有一簇黑色长毛。狞猫会转动耳朵，听周围的声音。',
    },
    {
      key: 'walking',
      label: '生活与认识',
      title: '长腿穿过草丛',
      body: '狞猫用长腿走过干草与灌丛，身体的纯色毛皮和周围的土色接近。',
    },
    {
      key: 'jump',
      label: '生活与认识',
      title: '后腿蹬地跃起来',
      body: '狞猫能用后腿发力向上跳，伸出前爪捕捉起飞的鸟。',
    },
    {
      key: 'rest',
      label: '生活与认识',
      title: '热的时候找阴影',
      body: '炎热时，狞猫会在浓密植被、岩缝或洞穴里休息。',
    },
    {
      key: 'stalk',
      label: '生活与认识',
      title: '贴近地面慢慢走',
      body: '狞猫常独自活动，接近猎物时放低身体。活动时间随环境和温度变化，白天与夜里都可能出没。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '各地的处境不同',
      body: '全球等级为无危，全球趋势尚不清楚；部分亚洲和北非种群稀少。保护有植被的生境、减少捕杀和家畜冲突仍有必要。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '耳尖黑毛与跳跃捕鸟',
      body: 'Schreber 于 1776 年描述了这个物种，现用学名为 Caracal caracal。狞猫的黑色耳背和耳尖长毛是辨认线索，身上没有豹那样的玫瑰状斑纹。它会隐蔽接近地面猎物，也能以后腿发力跃起，捕捉刚飞起的鸟。',
    },
  ],
  "keyFacts": [
    '三角形耳朵的尖端有长黑毛，耳朵能转动听声。',
    '长腿帮助它穿过干草与灌丛，纯色毛皮接近土色。',
    '后腿发力跃起时，它能捕捉起飞的鸟。',
    '浓密植被、岩缝和洞穴提供休息位置。',
    '它常独自活动，放低身体接近猎物。',
  ],
  "threats": [
    "栖息地丧失",
    "因家畜冲突遭捕杀"
  ],
  "conservationActions": [
    "保护灌丛与疏林",
    "改善家畜防护并减少捕杀"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "耳朵尖上的黑色长毛"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "有植被遮蔽的干草原、灌丛与疏林"
    }
  ],
  "media": {
    "image": "./images/species/caracal/01-cover.webp",
    "alt": "狞猫的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/caracal/02-observation.webp",
        "title": "耳尖的黑色长毛",
        "alt": "狞猫头部两只尖耳朵上有黑色长毛",
        "caption": "AI 生成科学情景重建。狞猫头部两只尖耳朵上有黑色长毛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/caracal/03-observation.webp",
        "title": "长腿走过干草地",
        "alt": "狞猫用长腿走过稀疏的干草地",
        "caption": "AI 生成科学情景重建。狞猫用长腿走过稀疏的干草地。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/caracal/04-observation.webp",
        "title": "跃起时的前爪和后腿",
        "alt": "狞猫在草地上跃起，前爪伸出、后腿弯曲",
        "caption": "AI 生成科学情景重建。狞猫在草地上跃起，前爪伸出、后腿弯曲。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/caracal/05-observation.webp",
        "title": "岩石阴影里休息",
        "alt": "狞猫卧在岩石旁的阴影中",
        "caption": "AI 生成科学情景重建。狞猫卧在岩石旁的阴影中。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/caracal/06-observation.webp",
        "title": "伏低身体前行",
        "alt": "狞猫放低身体穿过草丛",
        "caption": "AI 生成科学情景重建。狞猫放低身体穿过草丛。",
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
      "title": "IUCN SSC Cat Specialist Group：狞猫",
      "url": "https://www.catsg.org/living-species-caracal",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Mammalian Species：Caracal caracal",
      "url": "https://academic.oup.com/mspecies/article/52/993/71/6016926",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "IUCN SSC Cat Specialist Group：狞猫保护状态",
      "url": "https://www.catsg.org/living-species-caracal",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Caracal caracal 的命名作者与年份',
      url: 'https://www.gbif.org/species/2435010',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
