import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-thresher-shark",
  "slug": "common-thresher-shark",
  "names": {
    "zh": "狐形长尾鲨",
    "en": "Common Thresher Shark"
  },
  "scientificName": "Alopias vulpinus",
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
      "scientificName": "Alopiidae",
      "zhName": "长尾鲨科"
    },
    "genus": {
      "scientificName": "Alopias",
      "zhName": "长尾鲨属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "VU",
    "label": {
      "zh": "易危",
      "en": "Vulnerable"
    },
    "trend": "unknown",
    "assessor": "依据所列来源的全球等级；未填未经核验的评估年份。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "全球多处温带及热带海域，以温带海域较常见"
    ],
    "countries": [],
    "range": "全球多处温带及热带海域，以温带海域较常见。"
  },
  "habitats": [
    {
      "name": "近海与开放海域",
      "realm": "marine",
      "description": '近海及开放海域，温带与热带海域均有记录。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "piscivore"
    ],
    "foods": [
      "群游小鱼",
      "头足类"
    ],
    "description": "食物包括群游小鱼、头足类。"
  },
  "tags": [
    "狐形长尾鲨",
    "长长的上尾叶"
  ],
  "summary": '狐形长尾鲨的尾鳍上叶特别长，能击打群游小鱼。它生活在多处温带和热带海域，以温带海域较常见。',
  "description": '狐形长尾鲨生活在温带和热带海域，以温带较常见。尾鳍上叶伸得很长，长度可接近头与身体总长，它能用长尾击打群游小鱼。身体有尖吻、小嘴和浅色腹部，胸鳍帮助调整水中姿态。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '长长的上尾叶',
      body: '沿着尾巴往上看，上半边伸得很长，长度可接近头和身体的总长。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '小嘴和尖吻',
      body: '从前侧看，找找尖吻、小嘴和眼睛。不要把它与眼睛更大的近似种混淆。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '小鱼群旁',
      body: '狐形长尾鲨捕食群游小鱼，能用长尾击打猎物。这里展示靠近鱼群的情景。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '浅色的肚皮',
      body: '从下方看看浅色腹部和身体两侧的胸鳍。胸鳍帮助它在水中调整姿态。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '海水中的轮廓',
      body: '把整条鲨鱼看一遍，从吻端经过背鳍，一直找到长尾尖。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '一起观察与保护',
      body: '支持减少渔业误捕与科学监测，观察海洋动物时不追逐。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '学名中的狐狸与捕食长尾',
      body: 'Bonnaterre 在 1788 年发表了狐形长尾鲨的科学描述，今天采用 Alopias vulpinus。种名 vulpinus 来自拉丁语中表示“狐狸”的词。“长尾”则直接对应上尾叶，它捕食群游小鱼时能用这条尾巴击打猎物。',
    },
  ],
  "keyFacts": [
    "沿着尾巴往上看，上半边伸得很长，长度可接近头和身体的总长。",
    "从前侧看，找找尖吻、小嘴和眼睛。不要把它与眼睛更大的近似种混淆。",
    "狐形长尾鲨捕食群游小鱼，能用长尾击打猎物。这里展示靠近鱼群的情景。",
    "从下方看看浅色腹部和身体两侧的胸鳍。胸鳍帮助它在水中调整姿态。",
    "把整条鲨鱼看一遍，从吻端经过背鳍，一直找到长尾尖。"
  ],
  "threats": [
    "定向捕捞",
    "渔业误捕"
  ],
  "conservationActions": [
    "支持减少渔业误捕与科学监测，观察海洋动物时不追逐。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "长长的上尾叶"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "近海与开放海域"
    }
  ],
  "media": {
    "image": "./images/species/common-thresher-shark/01-cover.webp",
    "alt": "狐形长尾鲨在近海与开放海域中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-thresher-shark/02-observation.webp",
        "title": "长长的上尾叶",
        "alt": "狐形长尾鲨：长长的上尾叶",
        "caption": "AI 生成科学情景重建。沿着尾巴往上看，上半边伸得很长，长度可接近头和身体的总长。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-thresher-shark/03-observation.webp",
        "title": "小嘴和尖吻",
        "alt": "狐形长尾鲨：小嘴和尖吻",
        "caption": "AI 生成科学情景重建。从前侧看，找找尖吻、小嘴和眼睛。不要把它与眼睛更大的近似种混淆。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-thresher-shark/04-observation.webp",
        "title": "小鱼群旁",
        "alt": "狐形长尾鲨：小鱼群旁",
        "caption": "AI 生成科学情景重建。狐形长尾鲨捕食群游小鱼，能用长尾击打猎物。这里展示靠近鱼群的情景。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-thresher-shark/05-observation.webp",
        "title": "浅色的肚皮",
        "alt": "狐形长尾鲨：浅色的肚皮",
        "caption": "AI 生成科学情景重建。从下方看看浅色腹部和身体两侧的胸鳍。胸鳍帮助它在水中调整姿态。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-thresher-shark/06-observation.webp",
        "title": "海水中的轮廓",
        "alt": "狐形长尾鲨：海水中的轮廓",
        "caption": "AI 生成科学情景重建。把整条鲨鱼看一遍，从吻端经过背鳍，一直找到长尾尖。",
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
      "title": "www.floridamuseum.ufl.edu：Alopias vulpinus",
      "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/thresher-shark/",
      "kind": "general",
      "accessedAt": "2026-09-22"
    },
    {
      "title": "fishesofaustralia.net.au：Alopias vulpinus",
      "url": "https://fishesofaustralia.net.au/home/species/1850",
      "kind": "conservation",
      "accessedAt": "2026-09-22"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-22",
  "updatedAt": "2026-09-22"
} as const satisfies Species;

export default profile;
