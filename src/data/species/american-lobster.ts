import type { Species } from '../../types/species.ts';

const profile = {
  "id": "american-lobster",
  "slug": "american-lobster",
  "names": {
    "zh": "美洲螯龙虾",
    "en": "American Lobster",
    "aliases": [
      "美洲龙虾",
      "波士顿龙虾"
    ]
  },
  "scientificName": "Homarus americanus",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Arthropoda",
      "zhName": "节肢动物门"
    },
    "class": {
      "scientificName": "Malacostraca",
      "zhName": "软甲纲"
    },
    "order": {
      "scientificName": "Decapoda",
      "zhName": "十足目"
    },
    "family": {
      "scientificName": "Nephropidae",
      "zhName": "海螯虾科"
    },
    "genus": {
      "scientificName": "Homarus",
      "zhName": "螯龙虾属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "trend": "stable",
    "assessor": "依据来源所载全球等级；未单独核实评估日期，地方等级另见保护章节"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "北美洲大西洋沿岸"
    ],
    "countries": [],
    "range": "原生分布沿北美洲大西洋岸，从加拿大拉布拉多一带延伸到美国北卡罗来纳附近。"
  },
  "habitats": [
    {
      "name": "有石缝的岩礁海底与砂泥底",
      "realm": "marine",
      "description": '岩礁海底的石缝提供躲藏位置，附近的砂泥底也能供龙虾取食与行走。它们会把身体藏进阴影，触角仍可伸向缝隙外。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "贝类",
      "蟹类",
      "蠕虫",
      "鱼类",
      "大型藻类"
    ],
    "description": "成体在海底寻找贝类、蟹类和蠕虫，也会吃藻类；幼体主要捕食浮游动物。"
  },
  "tags": [
    "美洲螯龙虾",
    "大螯和长触角"
  ],
  "summary": "美洲螯龙虾伸出长触角，前方两只大螯的形状不同。活体通常呈橄榄绿或绿褐色，分节腹部的末端展开成尾扇。",
  "description": '美洲螯龙虾在海底用步足行走，休息时躲进岩石缝隙。遇险时，它能收缩分节腹部，向后退游；雌虾把卵附在腹部下方的游泳足上，直到幼体孵出。',
  "storySections": [
    {
      key: 'claws',
      label: '生活与认识',
      title: '两只大螯不一样',
      body: '一只螯粗壮，适合压碎硬壳；另一只较细，适合撕开食物。两只螯的形状与用途有差别。',
    },
    {
      key: 'walking',
      label: '生活与认识',
      title: '沿着海底走',
      body: '美洲螯龙虾用步足在海底移动。大螯也是胸部步足的一部分，共有五对胸部步足，触角另算。',
    },
    {
      key: 'shelter',
      label: '生活与认识',
      title: '石缝可以藏身体',
      body: '海底的岩石缝隙为龙虾提供躲藏处。它把身体藏进阴影，触角还可以向外伸出。',
    },
    {
      key: 'tail',
      label: '生活与认识',
      title: '腹部末端有尾扇',
      body: '腹部由一节节外壳包覆，末端有尾扇。遇到危险时，它能收缩腹部向后退游。',
    },
    {
      key: 'eggs',
      label: '生活与认识',
      title: '卵留在妈妈腹部下面',
      body: '雌虾把卵附着在腹部下方的游泳足上，带着卵发育，直到幼体孵出。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '给龙虾留下长大的时间',
      body: 'IUCN 数据转载记录为无危、趋势稳定；这不代表每个海区的资源状况相同。渔业管理会限制捕捞规格，并保护抱卵雌虾。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '两只螯各有用途',
      body: 'H.Milne Edwards 于 1837 年描述了这个物种，现用学名为 Homarus americanus。美洲螯龙虾的两只大螯形状不同，一只适合压碎硬壳，一只适合撕开食物。它们属于五对胸部步足中的一对；长触角和腹部下的游泳足则是另外的附肢。',
    },
  ],
  "keyFacts": [
    '两只大螯用途不同：粗壮螯压碎硬壳，较细螯撕开食物。',
    '它有五对胸部步足，包括带大螯的一对。',
    '岩石缝隙能提供躲藏位置。',
    '收缩腹部时，它能向后退游。',
    '雌虾把卵附在腹部下方的游泳足上，直到孵化。',
  ],
  "threats": [
    "部分海域捕捞压力",
    "海洋环境变化"
  ],
  "conservationActions": [
    "保护抱卵雌虾",
    "遵守捕捞规格和数量限制"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "大螯和长触角"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "有石缝的岩礁海底与砂泥底"
    }
  ],
  "media": {
    "image": "./images/species/american-lobster/01-cover.webp",
    "alt": "美洲螯龙虾的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/american-lobster/02-observation.webp",
        "title": "形状不同的大螯",
        "alt": "美洲螯龙虾前方一宽一窄的两只大螯",
        "caption": "AI 生成科学情景重建。美洲螯龙虾前方一宽一窄的两只大螯。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-lobster/03-observation.webp",
        "title": "沿海底行走",
        "alt": "美洲螯龙虾在石块之间的海底行走",
        "caption": "AI 生成科学情景重建。美洲螯龙虾在石块之间的海底行走。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-lobster/04-observation.webp",
        "title": "岩缝里的藏身处",
        "alt": "美洲螯龙虾从岩石缝隙向外伸出触角和螯",
        "caption": "AI 生成科学情景重建。美洲螯龙虾从岩石缝隙向外伸出触角和螯。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-lobster/05-observation.webp",
        "title": "一节节的腹部与尾扇",
        "alt": "美洲螯龙虾的分节腹部和展开的尾扇",
        "caption": "AI 生成科学情景重建。美洲螯龙虾的分节腹部和展开的尾扇。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-lobster/06-observation.webp",
        "title": "腹部下面的卵",
        "alt": "雌性美洲螯龙虾腹部下方附着成团的卵",
        "caption": "AI 生成科学情景重建。雌性美洲螯龙虾腹部下方附着成团的卵。",
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
      "title": "NOAA Fisheries：美洲螯龙虾",
      "url": "https://www.fisheries.noaa.gov/species/american-lobster",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Animal Diversity Web：Homarus americanus",
      "url": "https://animaldiversity.org/accounts/Homarus_americanus/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Encyclopedia of Life：IUCN 转载数据",
      "url": "https://media.eol.org/pages/46505674/data?resource_id=5",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Homarus americanus 的命名作者与年份',
      url: 'https://www.gbif.org/species/5972004',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
