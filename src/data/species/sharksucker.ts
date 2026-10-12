import type { Species } from '../../types/species.ts';

const profile = {
  "id": "sharksucker",
  "slug": "sharksucker",
  "names": {
    "zh": "印头鱼",
    "en": "Live Sharksucker"
  },
  "scientificName": "Echeneis naucrates",
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
      "scientificName": "Actinopterygii",
      "zhName": "辐鳍鱼纲"
    },
    "order": {
      "scientificName": "Perciformes",
      "zhName": "鲈形目"
    },
    "family": {
      "scientificName": "Echeneidae",
      "zhName": "䲟科"
    },
    "genus": {
      "scientificName": "Echeneis",
      "zhName": "䲟属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "NE",
    "label": {
      "zh": "未评估",
      "en": "Not Evaluated"
    },
    "trend": "unknown",
    "assessor": '全球保护评估尚未确认；NE（未评估）不等于无危。'
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "全球热带暖水海域"
    ],
    "countries": [],
    "range": "全球热带暖水海域；主要生活在近岸海域与大型海洋动物周边。"
  },
  "habitats": [
    {
      "name": "近岸海域与大型海洋动物周边",
      "realm": "marine",
      "description": '热带暖水近岸海域及大型海洋动物周边，有时随宿主进入较冷海域。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小鱼",
      "小型甲壳动物",
      "宿主体表寄生生物",
      "食物碎屑"
    ],
    "description": "食物包括小鱼、小型甲壳动物、宿主体表寄生生物、食物碎屑。"
  },
  "tags": [
    "印头鱼",
    "近岸海域与大型海洋动物周边"
  ],
  "summary": '印头鱼用头顶吸盘附着海龟或大鱼，也能独自游泳。它吃小动物、寄生生物和宿主附近的食物碎屑。',
  "description": '印头鱼生活在热带暖海，头顶吸盘由背鳍变来，能附着海龟、大鱼等动物，也能离开它们独自游动。细长身体两侧有深色纵带，下颌比上颌突出。它吃小鱼、甲壳动物、宿主体表寄生生物和食物碎屑。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '头顶的吸盘',
      body: '吸盘由背鳍特化而来，上面有一排排横向结构。找找它在头顶的位置。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '搭乘海龟',
      body: '它能用头顶吸盘附着在海龟等动物身上。图中重建这种附着关系，不代表每只印头鱼都有固定伙伴。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '自己游泳',
      body: '印头鱼会离开宿主独自游动。细长的身体两侧有深色纵带，后半身有较长的背鳍和臀鳍。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '向前伸的下颌',
      body: '从侧面看，下颌比上颌向前突出。它会捕食小动物，也吃宿主附近的食物碎屑。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '暖水里的生活',
      body: '印头鱼广布暖海，有时随宿主进入较冷水域。它们可以自由游动，并不一直贴在别的动物身上。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '全球保护评估尚未确认，NE（未评估）不等于无危。观察附着关系时不追逐海龟或大鱼，也不拉扯印头鱼。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '古代水手的“停船鱼”传说',
      body: 'Linnaeus 在 1758 年发表 Echeneis naucrates 这个名称。属名 Echeneis 的希腊语词根与“抓住”和“船”有关，古希腊水手曾相信这种鱼能让船慢下来，甚至停住。那是旧时传说；头顶吸盘确实用于附着，印头鱼也能离开宿主游泳。',
    },
  ],
  "keyFacts": [
    "吸盘由背鳍特化而来，上面有一排排横向结构。找找它在头顶的位置。",
    "它能用头顶吸盘附着在海龟等动物身上。图中重建这种附着关系，不代表每只印头鱼都有固定伙伴。",
    "印头鱼会离开宿主独自游动。细长的身体两侧有深色纵带，后半身有较长的背鳍和臀鳍。",
    "从侧面看，下颌比上颌向前突出。它会捕食小动物，也吃宿主附近的食物碎屑。",
    "印头鱼广布暖海，有时随宿主进入较冷水域。它们可以自由游动，并不一直贴在别的动物身上。"
  ],
  "threats": [],
  "conservationActions": [
    "保护近岸海域与大型海洋动物周边，观察时不捕捉、不驱赶。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "近岸海域与大型海洋动物周边"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "头顶的吸盘"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "未评估",
      "note": "采用佛罗里达博物馆的鲈形目口径，与仓库现有图谱一致。本轮未核实全球 IUCN 等级，沿用仓库 NE 缺省并注明证据缺口，不解释为无危。"
    }
  ],
  "media": {
    "image": "./images/species/sharksucker/01-cover.webp",
    "alt": "印头鱼及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/sharksucker/02-observation.webp",
        "alt": "印头鱼：头顶的吸盘",
        "title": "头顶的吸盘",
        "caption": "AI 生成科学情景重建。吸盘由背鳍特化而来，上面有一排排横向结构。找找它在头顶的位置。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sharksucker/03-observation.webp",
        "alt": "印头鱼：搭乘海龟",
        "title": "搭乘海龟",
        "caption": "AI 生成科学情景重建。它能用头顶吸盘附着在海龟等动物身上。图中重建这种附着关系，不代表每只印头鱼都有固定伙伴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sharksucker/04-observation.webp",
        "alt": "印头鱼：自己游泳",
        "title": "自己游泳",
        "caption": "AI 生成科学情景重建。印头鱼会离开宿主独自游动。细长的身体两侧有深色纵带，后半身有较长的背鳍和臀鳍。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sharksucker/05-observation.webp",
        "alt": "印头鱼：向前伸的下颌",
        "title": "向前伸的下颌",
        "caption": "AI 生成科学情景重建。从侧面看，下颌比上颌向前突出。它会捕食小动物，也吃宿主附近的食物碎屑。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sharksucker/06-observation.webp",
        "alt": "印头鱼：暖水里的生活",
        "title": "暖水里的生活",
        "caption": "AI 生成科学情景重建。印头鱼广布暖海，有时随宿主进入较冷水域。它们可以自由游动，并不一直贴在别的动物身上。",
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
      "title": "Florida Museum：Sharksucker",
      "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/sharksucker/",
      "kind": "general",
      "accessedAt": "2026-09-23"
    },
    {
      "title": "Fishes of Australia：Echeneis naucrates",
      "url": "https://fishesofaustralia.net.au/home/species/3711",
      "kind": "distribution",
      "accessedAt": "2026-09-23"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-23",
  "updatedAt": "2026-09-23"
} as const satisfies Species;

export default profile;
