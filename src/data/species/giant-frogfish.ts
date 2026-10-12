import type { Species } from '../../types/species.ts';

const profile = {
  "id": "giant-frogfish",
  "slug": "giant-frogfish",
  "names": {
    "zh": "康氏躄鱼",
    "en": "Giant Frogfish"
  },
  "scientificName": "Antennarius commerson",
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
      "scientificName": "Lophiiformes",
      "zhName": "鮟鱇目"
    },
    "family": {
      "scientificName": "Antennariidae",
      "zhName": "躄鱼科"
    },
    "genus": {
      "scientificName": "Antennarius",
      "zhName": "躄鱼属"
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
    "assessor": "所列来源支持该等级；独立评估日期和全球趋势未核实"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "印度洋与太平洋热带、亚热带海域"
    ],
    "countries": [],
    "range": "印度洋与太平洋热带、亚热带海域；主要活动环境为浅海珊瑚礁与岩礁。"
  },
  "habitats": [
    {
      "name": "浅海珊瑚礁与岩礁",
      "realm": "marine",
      "description": "在浅海珊瑚礁与岩礁中寻找食物和藏身处。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "piscivore"
    ],
    "foods": [
      "小鱼"
    ],
    "description": "食物包括小鱼。"
  },
  "tags": [
    "康氏躄鱼",
    "浅海珊瑚礁与岩礁"
  ],
  "summary": '康氏躄鱼靠弯折胸鳍撑在礁底，用头顶“钓竿”摆动诱饵吸引小鱼。体色多变，能与周围海绵相似。',
  "description": '康氏躄鱼在热带、亚热带浅海礁区伏击小鱼。弯折的胸鳍支撑身体，第一根背鳍棘变成带诱饵的“钓竿”。它的颜色多变，常与周围海绵相似，猎物靠近时便张嘴吸入。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '撑住身体的胸鳍',
      body: '看看身体下面弯折的胸鳍。鳍末端仍有鳍条，不能把它们当作陆地动物的手指。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '头顶的小诱饵',
      body: '第一根背鳍棘变成了“钓竿”，末端带着小诱饵，它会摆动诱饵吸引猎物。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '像海绵一样藏着',
      body: '它的颜色多变，黄色、褐色等个体能与周围海绵相似。图中采用黄色个体。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '伏在礁底',
      body: '它常停在浅海礁石旁，等待小鱼靠近，再张嘴吸入。这里展示伏击前的静止姿态。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '宽宽的嘴',
      body: '看看嘴与身体的比例。观赏时不要触碰或移动鱼，也不要掰开胸鳍。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '本种的全球保护等级为 LC（无危），独立评估日期尚未确认。潜水观察时不触碰、移动鱼，也不掰开胸鳍。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '种名纪念博物学家康默森',
      body: 'Lacepède 在 1798 年发表了康氏躄鱼的科学名称，种名 commerson 纪念法国博物学家 Philibert Commerçon，描述所依据的模式产地在毛里求斯。“钓竿”则来自变形的第一根背鳍棘，末端诱饵能吸引小鱼靠近。',
    },
  ],
  "keyFacts": [
    "看看身体下面弯折的胸鳍。鳍末端仍有鳍条，不能把它们当作陆地动物的手指。",
    "第一根背鳍棘变成了“钓竿”，末端带着小诱饵，它会摆动诱饵吸引猎物。",
    "它的颜色多变，黄色、褐色等个体能与周围海绵相似。图中采用黄色个体。",
    "它常停在浅海礁石旁，等待小鱼靠近，再张嘴吸入。这里展示伏击前的静止姿态。",
    "看看嘴与身体的比例。观赏时不要触碰或移动鱼，也不要掰开胸鳍。"
  ],
  "threats": [],
  "conservationActions": [
    "保护浅海珊瑚礁与岩礁，观察时不捕捉、不驱赶。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "浅海珊瑚礁与岩礁"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "撑住身体的胸鳍"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "无危",
      "note": '大躄鱼分布于印太海域，全球保护等级为无危。公开资料中的最大长度记录有差异，独立评估日期尚未确认。'
    }
  ],
  "media": {
    "image": "./images/species/giant-frogfish/01-cover.webp",
    "alt": "康氏躄鱼及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/giant-frogfish/02-observation.webp",
        "alt": "康氏躄鱼：撑住身体的胸鳍",
        "title": "撑住身体的胸鳍",
        "caption": "AI 生成科学情景重建。看看身体下面弯折的胸鳍。鳍末端仍有鳍条，不能把它们当作陆地动物的手指。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-frogfish/03-observation.webp",
        "alt": "康氏躄鱼：头顶的小诱饵",
        "title": "头顶的小诱饵",
        "caption": "AI 生成科学情景重建。第一根背鳍棘变成了“钓竿”，末端带着小诱饵，它会摆动诱饵吸引猎物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-frogfish/04-observation.webp",
        "alt": "康氏躄鱼：像海绵一样藏着",
        "title": "像海绵一样藏着",
        "caption": "AI 生成科学情景重建。它的颜色多变，黄色、褐色等个体能与周围海绵相似。图中采用黄色个体。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-frogfish/05-observation.webp",
        "alt": "康氏躄鱼：伏在礁底",
        "title": "伏在礁底",
        "caption": "AI 生成科学情景重建。它常停在浅海礁石旁，等待小鱼靠近，再张嘴吸入。这里展示伏击前的静止姿态。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-frogfish/06-observation.webp",
        "alt": "康氏躄鱼：宽宽的嘴",
        "title": "宽宽的嘴",
        "caption": "AI 生成科学情景重建。看看嘴与身体的比例。观赏时不要触碰或移动鱼，也不要掰开胸鳍。",
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
      "title": "fishesofaustralia.net.au：Antennarius commerson",
      "url": "https://fishesofaustralia.net.au/home/species/2846",
      "kind": "conservation",
      "accessedAt": "2026-09-22"
    },
    {
      "title": "fishesofaustralia.net.au：Antennarius commerson",
      "url": "https://fishesofaustralia.net.au/home/genus/85",
      "kind": "general",
      "accessedAt": "2026-09-22"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-23",
  "updatedAt": "2026-09-23"
} as const satisfies Species;

export default profile;
