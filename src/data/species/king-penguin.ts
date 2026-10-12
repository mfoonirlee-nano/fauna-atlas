import type { Species } from '../../types/species.ts';

const profile = {
  "id": "king-penguin",
  "slug": "king-penguin",
  "names": {
    "zh": "王企鹅",
    "en": "King Penguin"
  },
  "scientificName": "Aptenodytes patagonicus",
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
      "scientificName": "Aptenodytes",
      "zhName": "王企鹅属"
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
      "亚南极岛屿"
    ],
    "countries": [],
    "range": "在南乔治亚岛、克罗泽群岛、凯尔盖朗群岛、麦夸里岛等亚南极岛屿繁殖，在周边海域觅食。"
  },
  "habitats": [
    {
      "name": "亚南极海岸与海洋",
      "realm": "marine",
      "description": '王企鹅在亚南极岛屿的无冰海岸繁殖，在周边海域觅食。亲鸟往返于海洋和繁殖地，幼鸟留在岸上等待喂食。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "height": {
      "min": 85,
      "max": 95,
      "unit": "cm",
      "note": "成鸟站立高度，不是头尾长度。"
    }
  },
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "灯笼鱼等小鱼",
      "鱿鱼"
    ],
    "description": "取食灯笼鱼等小鱼、鱿鱼。"
  },
  "tags": [
    "王企鹅",
    "颈侧橙黄色羽毛"
  ],
  "summary": "王企鹅的体型仅次于帝企鹅，颈侧有鲜亮的橙黄色斑块。它在无冰海岸繁殖，到海中捕食。",
  "description": '王企鹅用鳍状翅划水，在海里捕捉小鱼和鱿鱼。它不筑巢，将一枚卵放在脚背上，用腹部皮褶孵化；棕色绒羽的幼鸟在岸上等待亲鸟带回食物。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '颈侧的橙黄色',
      body: '黑色头部旁有鲜亮橙黄色羽毛，延伸到颈侧和上胸。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '把蛋放在脚上',
      body: '王企鹅不筑巢，将一枚卵放在脚背上，以腹部皮褶盖住孵化。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '棕色的绒毛幼鸟',
      body: '幼鸟披棕色绒羽，换羽后才有成鸟的黑白与橙黄色羽毛。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '用鳍状翅游泳',
      body: '鳍状翅划水，让王企鹅在海中寻找小鱼和鱿鱼。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '从海里回到岸上',
      body: '亲鸟往返于海洋和繁殖地，幼鸟在岸上等待喂食。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为无危，部分繁殖群仍有下降。保护人员需要持续观察繁殖地和周边海洋环境。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '早期欧洲记录曾把它当作最大企鹅',
      body: 'J.F.Miller 于 1778 年描述了这个物种，现用学名为 Aptenodytes patagonicus。王企鹅体型仅次于帝企鹅，成鸟有鲜亮橙黄色颈斑。它们不筑巢，卵放在脚背上由腹部皮褶盖住；幼鸟的棕色绒羽和成年鸟差别很大，换羽后才显露熟悉的黑白羽衣。18 世纪初，欧洲探险者认识王企鹅时，曾以为它是现存最大的企鹅。1844 年，英国博物馆的 George Robert Gray 把它与更大的帝企鹅区分开。',
    },
  ],
  "keyFacts": [
    '黑色头部旁有鲜亮橙黄色羽毛，延伸到颈侧和上胸。',
    '王企鹅不筑巢，将一枚卵放在脚背上，以腹部皮褶盖住孵化。',
    '幼鸟披棕色绒羽，换羽后才有成鸟的黑白与橙黄色羽毛。',
    '鳍状翅划水，让王企鹅在海中寻找小鱼和鱿鱼。',
    '亲鸟往返于海洋和繁殖地，幼鸟在岸上等待喂食。',
  ],
  "threats": [
    "海洋环境变化",
    "繁殖地的人为干扰"
  ],
  "conservationActions": [
    "保护繁殖地",
    "监测海洋食物与繁殖状况"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "颈侧橙黄色羽毛"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "亚南极海岸与海洋"
    }
  ],
  "media": {
    "image": "./images/species/king-penguin/01-cover.webp",
    "alt": "王企鹅的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/king-penguin/02-observation.webp",
        "title": "颈侧的橙黄色",
        "alt": '颈侧的橙黄色',
        "caption": "AI 生成科学情景重建。从黑色头部旁边，找找延伸到上胸的橙黄色羽毛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/king-penguin/03-observation.webp",
        "title": "把蛋放在脚上",
        "alt": '把蛋放在脚上',
        "caption": "AI 生成科学情景重建。王企鹅不筑巢，把一枚蛋放在脚背上，用腹部的皮褶盖住孵化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/king-penguin/04-observation.webp",
        "title": "棕色的绒毛幼鸟",
        "alt": '棕色的绒毛幼鸟',
        "caption": "AI 生成科学情景重建。幼鸟披着棕色绒羽，长大换羽后才有成鸟的黑白与橙黄色羽毛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/king-penguin/05-observation.webp",
        "title": "用鳍状翅游泳",
        "alt": '用鳍状翅游泳',
        "caption": "AI 生成科学情景重建。王企鹅用鳍状翅划水，在海里寻找鱼和鱿鱼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/king-penguin/06-observation.webp",
        "title": "从海里回到岸上",
        "alt": '从海里回到岸上',
        "caption": "AI 生成科学情景重建。成年王企鹅往返于海洋和繁殖地，幼鸟在岸上等候喂食。",
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
      "title": "Australian Antarctic Program：王企鹅",
      "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/king-penguin/",
      "kind": "ecology",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "Australian Antarctic Program：王企鹅全球保护等级",
      "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/king-penguin/",
      "kind": "conservation",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "King Penguin：学名与分类",
      "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/king-penguin/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-16"
    },
    {
      title: 'GBIF：Aptenodytes patagonicus 的命名作者与年份',
      url: 'https://www.gbif.org/species/2481660',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-16",
  "updatedAt": "2026-09-16"
} as const satisfies Species;

export default profile;
