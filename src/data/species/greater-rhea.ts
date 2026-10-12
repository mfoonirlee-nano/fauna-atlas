import type { Species } from '../../types/species.ts';

const profile = {
  "id": "greater-rhea",
  "slug": "greater-rhea",
  "names": {
    "zh": "大美洲鸵",
    "en": "Greater Rhea"
  },
  "scientificName": "Rhea americana",
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
      "scientificName": "Rheiformes",
      "zhName": "美洲鸵目"
    },
    "family": {
      "scientificName": "Rheidae",
      "zhName": "美洲鸵科"
    },
    "genus": {
      "scientificName": "Rhea",
      "zhName": "美洲鸵属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "NT",
    "label": {
      "zh": "近危",
      "en": "Near Threatened"
    },
    "trend": "unknown",
    "assessor": "依据所列资料的全球等级；独立评估日期未核实"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "南美洲"
    ],
    "regions": [
      "南美洲中东部"
    ],
    "countries": [],
    "range": "分布于巴西、玻利维亚、巴拉圭、乌拉圭和阿根廷的草原及半干旱灌丛。"
  },
  "habitats": [
    {
      "name": "草原与灌丛",
      "realm": "terrestrial",
      "description": '南美洲草原与半干旱灌丛提供阔叶植物和其他食物，也供鸟群奔跑。繁殖期的巢址需要安静空间。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "height": {
      "min": 90,
      "max": 150,
      "unit": "cm",
      "note": "史密森尼所列站立高度。"
    },
    "weight": {
      "min": 15,
      "max": 30,
      "unit": "kg"
    }
  },
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "阔叶植物",
      "种子",
      "果实",
      "昆虫"
    ],
    "description": "取食阔叶植物、种子、果实、昆虫。"
  },
  "tags": [
    "大美洲鸵",
    "展开翅膀跑"
  ],
  "summary": "大美洲鸵生活在南美洲，颈和腿都很长。它不会飞，奔跑时会展开翅膀帮助平衡。",
  "description": '大美洲鸵的灰褐羽毛也覆盖长颈，常在草原结群活动，边走边取食植物和昆虫。繁殖时雌鸟把卵产在雄鸟准备的巢里，雄鸟负责孵卵和照顾幼鸟。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '展开翅膀跑',
      body: '奔跑时，大美洲鸵展开翅膀，辅助平衡和改变方向。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '脖子上也有羽毛',
      body: '长颈上也覆盖着羽毛，身体以灰褐色为主。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '爸爸照看幼鸟',
      body: '雌鸟在雄鸟准备的巢内产卵，雄鸟孵卵并照顾幼鸟。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '边走边吃',
      body: '它在草地边走边取食，偏爱阔叶植物，也吃种子、果实和昆虫。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '草原上的邻居',
      body: '大美洲鸵常结群活动，繁殖时守巢和带幼鸟的雄鸟需要空间。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为近危。保护草原和繁殖地，能为成鸟与幼鸟保留活动空间。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '翅膀用来平衡，雄鸟留巢育雏',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Rhea americana。大美洲鸵生活在南美洲，和非洲鸵鸟是不同物种。它不会飞，奔跑时仍会展开翅膀来平衡和转向；雌鸟产卵后，雄鸟承担孵卵和幼鸟照顾。',
    },
  ],
  "keyFacts": [
    '奔跑时，大美洲鸵展开翅膀，辅助平衡和改变方向。',
    '长颈上也覆盖着羽毛，身体以灰褐色为主。',
    '雌鸟在雄鸟准备的巢内产卵，雄鸟孵卵并照顾幼鸟。',
    '它在草地边走边取食，偏爱阔叶植物，也吃种子、果实和昆虫。',
    '大美洲鸵常结群活动，繁殖时守巢和带幼鸟的雄鸟需要空间。',
  ],
  "threats": [
    "草原转为农田",
    "捕猎与取卵"
  ],
  "conservationActions": [
    "保护天然草原",
    "减少捕猎与巢区干扰"
  ],
  "metrics": {
    "adultMassKg": [
      15,
      30
    ]
  },
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "展开翅膀跑"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "草原与灌丛"
    }
  ],
  "media": {
    "image": "./images/species/greater-rhea/01-cover.webp",
    "alt": "大美洲鸵的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/greater-rhea/02-observation.webp",
        "title": "展开翅膀跑",
        "alt": '展开翅膀跑',
        "caption": "AI 生成科学情景重建。看看跑动时张开的翅膀。大美洲鸵会借助翅膀保持平衡和改变方向。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/greater-rhea/03-observation.webp",
        "title": "脖子上也有羽毛",
        "alt": '脖子上也有羽毛',
        "caption": "AI 生成科学情景重建。从头顶沿着长脖子看下去，那里也覆盖着羽毛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/greater-rhea/04-observation.webp",
        "title": "爸爸照看幼鸟",
        "alt": '爸爸照看幼鸟',
        "caption": "AI 生成科学情景重建。雌鸟把蛋产在雄鸟准备的巢里，雄鸟孵蛋并照看孵出的幼鸟。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/greater-rhea/05-observation.webp",
        "title": "边走边吃",
        "alt": '边走边吃',
        "caption": "AI 生成科学情景重建。大美洲鸵在草地上走动取食，偏爱阔叶植物，也会吃种子和昆虫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/greater-rhea/06-observation.webp",
        "title": "草原上的邻居",
        "alt": '草原上的邻居',
        "caption": "AI 生成科学情景重建。大美洲鸵常结群活动。繁殖时，守巢和带幼鸟的雄鸟需要自己的空间。",
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
      "title": "史密森尼：大美洲鸵形态、育幼与食性",
      "url": "https://www.nationalzoo.si.edu/animals/greater-rhea",
      "kind": "ecology",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "ADW：大美洲鸵及近危等级",
      "url": "https://animaldiversity.org/accounts/Rhea_americana/",
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
      title: 'GBIF：Rhea americana 的命名作者与年份',
      url: 'https://www.gbif.org/species/2495165',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-16",
  "updatedAt": "2026-09-16"
} as const satisfies Species;

export default profile;
