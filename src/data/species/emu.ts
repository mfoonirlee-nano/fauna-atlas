import type { Species } from '../../types/species.ts';

const profile = {
  "id": "emu",
  "slug": "emu",
  "names": {
    "zh": "鸸鹋",
    "en": "Emu"
  },
  "scientificName": "Dromaius novaehollandiae",
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
      "scientificName": "Casuariiformes",
      "zhName": "鹤鸵目"
    },
    "family": {
      "scientificName": "Casuariidae",
      "zhName": "鹤鸵科"
    },
    "genus": {
      "scientificName": "Dromaius",
      "zhName": "鸸鹋属"
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
      "terrestrial"
    ],
    "continents": [
      "大洋洲"
    ],
    "regions": [
      "澳大利亚"
    ],
    "countries": [],
    "range": "原生于澳大利亚大陆的多种开阔环境，随食物和水源条件移动。"
  },
  "habitats": [
    {
      "name": "开阔林地与草原",
      "realm": "terrestrial",
      "description": '开阔林地与草原提供果实、种子、嫩芽和昆虫。鸸鹋用长腿步行、奔跑，活动位置随食物和水源条件变化。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "height": {
      "min": 160,
      "max": 190,
      "unit": "cm",
      "note": "澳大利亚博物馆所列站立高度。"
    }
  },
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "果实",
      "种子",
      "嫩芽",
      "昆虫"
    ],
    "description": "取食果实、种子、嫩芽、昆虫。"
  },
  "tags": [
    "鸸鹋",
    "迈开长腿"
  ],
  "summary": "鸸鹋靠长腿在地面行走和奔跑，翅膀很小。它羽毛蓬松、呈灰褐色，成鸟颈部可见蓝黑色裸皮。",
  "description": '鸸鹋不会飞，每只脚有三根向前脚趾，没有后趾。雄鸟负责孵卵和照看条纹幼鸟；它们在澳大利亚开阔环境取食，随食物和水源变化移动。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '迈开长腿',
      body: '鸸鹋不会飞，靠双腿行走和奔跑。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '三根朝前的脚趾',
      body: '每只脚有三根向前脚趾，没有后趾。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '跟着爸爸走',
      body: '雄鸟负责孵卵和育雏，带有浅色条纹的幼鸟常跟随父亲。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '低头找食物',
      body: '鸸鹋取食嫩芽、果实、种子和昆虫等小动物。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '蓬松的褐色羽毛',
      body: '身体有蓬松灰褐羽毛，成鸟颈部羽毛较少，可见蓝黑色裸皮。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为无危。观察野生鸸鹋时保持距离，让带着幼鸟的雄鸟自行通过。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '由父亲孵卵、带领幼鸟',
      body: 'Latham 于 1790 年描述了这个物种，现用学名为 Dromaius novaehollandiae。鸸鹋的翅膀小，行动依靠长腿。繁殖时雄鸟承担孵卵与育雏，浅色条纹的小鸸鹋跟随父亲寻找食物，与成年鸟蓬松灰褐的羽毛不同。',
    },
  ],
  "keyFacts": [
    '鸸鹋不会飞，靠双腿行走和奔跑。',
    '每只脚有三根向前脚趾，没有后趾。',
    '雄鸟负责孵卵和育雏，带有浅色条纹的幼鸟常跟随父亲。',
    '鸸鹋取食嫩芽、果实、种子和昆虫等小动物。',
    '身体有蓬松灰褐羽毛，成鸟颈部羽毛较少，可见蓝黑色裸皮。',
  ],
  "threats": [
    "局部栖息地改变",
    "道路碰撞"
  ],
  "conservationActions": [
    "保留栖息地与水源通道",
    "开车时留意穿越道路的野生动物"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "迈开长腿"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "开阔林地与草原"
    }
  ],
  "media": {
    "image": "./images/species/emu/01-cover.webp",
    "alt": "鸸鹋的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/emu/02-observation.webp",
        "title": "迈开长腿",
        "alt": '迈开长腿',
        "caption": "AI 生成科学情景重建。鸸鹋不会飞。看看它跑起来时，一条腿向前迈，另一条腿向后伸。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/emu/03-observation.webp",
        "title": "三根朝前的脚趾",
        "alt": '三根朝前的脚趾',
        "caption": "AI 生成科学情景重建。鸸鹋每只脚有三根朝前的脚趾，没有后趾。先从站立图中找找它的脚。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/emu/04-observation.webp",
        "title": "跟着爸爸走",
        "alt": '跟着爸爸走',
        "caption": "AI 生成科学情景重建。雄鸟负责孵蛋和照看幼鸟。小鸸鹋身上有浅色条纹，常跟着爸爸活动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/emu/05-observation.webp",
        "title": "低头找食物",
        "alt": '低头找食物',
        "caption": "AI 生成科学情景重建。鸸鹋会低头取食嫩芽、果实和种子，也吃昆虫等小动物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/emu/06-observation.webp",
        "title": "蓬松的褐色羽毛",
        "alt": '蓬松的褐色羽毛',
        "caption": "AI 生成科学情景重建。看看身体上垂下的长羽毛，再看看颈部颜色较深、羽毛较少的地方。",
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
      "title": "澳大利亚博物馆：鸸鹋形态与生态",
      "url": "https://australian.museum/learn/animals/birds/emu/",
      "kind": "ecology",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "BirdLife Australia：鸸鹋全球等级",
      "url": "https://birdlife.org.au/bird-profiles/emu/",
      "kind": "conservation",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "BTO：鸟类的科与目",
      "url": "https://www.bto.org/learn/about-birds/bird-families",
      "kind": "taxonomy",
      "accessedAt": "2026-09-16"
    },
    {
      title: 'GBIF：Dromaius novaehollandiae 的命名作者与年份',
      url: 'https://www.gbif.org/species/2495134',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-16",
  "updatedAt": "2026-09-16"
} as const satisfies Species;

export default profile;
