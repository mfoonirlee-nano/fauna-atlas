import type { Species } from '../../types/species.ts';

const profile = {
  "id": "adelie-penguin",
  "slug": "adelie-penguin",
  "names": {
    "zh": "阿德利企鹅",
    "en": "Adélie Penguin"
  },
  "scientificName": "Pygoscelis adeliae",
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
      "南极洲沿岸"
    ],
    "countries": [],
    "range": "在南极大陆沿岸及附近岛屿的裸露岩地繁殖，在周边海域和海冰区活动。"
  },
  "habitats": [
    {
      "name": "南极裸岩海岸与海冰",
      "realm": "marine",
      "description": '裸露岩地提供繁殖巢址，周边海域和海冰区供阿德利企鹅活动与取食。岸上育幼和海中捕食需要亲鸟往返。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "weight": {
      "min": 3,
      "max": 6,
      "unit": "kg",
      "note": "成鸟体重范围。"
    }
  },
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "磷虾",
      "鱼",
      "端足类"
    ],
    "description": "取食磷虾、鱼、端足类。"
  },
  "tags": [
    "阿德利企鹅",
    "眼睛周围的白圈"
  ],
  "summary": "阿德利企鹅有黑头、白腹和醒目的白眼圈。它在裸露岩地筑巢，也会趴在雪上用腹部滑行。",
  "description": '阿德利企鹅搬运小石子，在裸岩地面垒巢，双亲轮流照顾幼鸟。它们在海里捕食磷虾、鱼和端足类；积雪合适时，能用腹部滑行，脚和鳍状翅辅助移动。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '眼睛外面一圈白',
      body: '黑色头部上有围着眼睛的细白圈。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '叼石头筑巢',
      body: '阿德利企鹅搬运小石子，在裸岩地面垒成低矮巢。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '肚子贴着雪滑行',
      body: '积雪合适时，它趴下滑行，脚和鳍状翅辅助移动。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '潜进水里找食物',
      body: '它在海中捕捉磷虾和鱼，食物随地点变化。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '石子巢里的幼鸟',
      body: '双亲轮流照顾幼鸟，从海里带回食物。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为无危，各地种群变化并不一致。研究人员记录海冰、巢和幼鸟存活情况，了解环境变化的影响。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '法国考察队与 Adéle 的名字',
      body: 'Hombron & Jacquinot 于 1841 年描述了这个物种，现用学名为 Pygoscelis adeliae。1840 年，Dumont d’Urville 率领的法国南极考察队记录了这种企鹅。他用妻子 Adéle 的名字命名阿德利地，Hombron 与 Jacquinot 也将这个名字用于企鹅。',
    },
  ],
  "keyFacts": [
    '黑色头部上有围着眼睛的细白圈。',
    '阿德利企鹅搬运小石子，在裸岩地面垒成低矮巢。',
    '积雪合适时，它趴下滑行，脚和鳍状翅辅助移动。',
    '它在海中捕捉磷虾和鱼，食物随地点变化。',
    '双亲轮流照顾幼鸟，从海里带回食物。',
  ],
  "threats": [
    "海冰与海洋环境变化",
    "繁殖地干扰"
  ],
  "conservationActions": [
    "监测繁殖群和海冰变化",
    "保护繁殖地"
  ],
  "metrics": {
    "adultMassKg": [
      3,
      6
    ]
  },
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "眼睛周围的白圈"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "南极裸岩海岸与海冰"
    }
  ],
  "media": {
    "image": "./images/species/adelie-penguin/01-cover.webp",
    "alt": "阿德利企鹅的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/adelie-penguin/02-observation.webp",
        "title": "眼睛外面一圈白",
        "alt": '眼睛外面一圈白',
        "caption": "AI 生成科学情景重建。在黑色头部上，找找围着眼睛的细白圈。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/adelie-penguin/03-observation.webp",
        "title": "叼石头筑巢",
        "alt": '叼石头筑巢',
        "caption": "AI 生成科学情景重建。阿德利企鹅搬运小石子，在裸岩地面垒成低矮的巢。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/adelie-penguin/04-observation.webp",
        "title": "肚子贴着雪滑行",
        "alt": '肚子贴着雪滑行',
        "caption": "AI 生成科学情景重建。积雪合适时，它会趴下滑行，用脚和鳍状翅帮助移动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/adelie-penguin/05-observation.webp",
        "title": "潜进水里找食物",
        "alt": '潜进水里找食物',
        "caption": "AI 生成科学情景重建。阿德利企鹅在海中捕捉磷虾和鱼，食物随地点而变化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/adelie-penguin/06-observation.webp",
        "title": "石子巢里的幼鸟",
        "alt": '石子巢里的幼鸟',
        "caption": "AI 生成科学情景重建。父母轮流照顾幼鸟，并从海里带回食物。",
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
      "title": "Australian Antarctic Program：阿德利企鹅",
      "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/adelie-penguin/",
      "kind": "ecology",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "Australian Antarctic Program：阿德利企鹅全球保护等级",
      "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/adelie-penguin/",
      "kind": "conservation",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "Adélie Penguin：学名与分类",
      "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/adelie-penguin/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-16"
    },
    {
      title: 'GBIF：Pygoscelis adeliae 的命名作者与年份',
      url: 'https://www.gbif.org/species/2481663',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-16",
  "updatedAt": "2026-09-16"
} as const satisfies Species;

export default profile;
