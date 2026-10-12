import type { Species } from '../../types/species.ts';

const profile = {
  "id": "great-hammerhead",
  "slug": "great-hammerhead",
  "names": {
    "zh": "无沟双髻鲨",
    "en": "Great Hammerhead"
  },
  "scientificName": "Sphyrna mokarran",
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
      "scientificName": "Carcharhiniformes",
      "zhName": "真鲨目"
    },
    "family": {
      "scientificName": "Sphyrnidae",
      "zhName": "双髻鲨科"
    },
    "genus": {
      "scientificName": "Sphyrna",
      "zhName": "双髻鲨属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "CR",
    "label": {
      "zh": "极危",
      "en": "Critically Endangered"
    },
    "trend": "unknown",
    "assessor": '全球等级为 CR（极危）；独立评估日期与种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "亚洲",
      "非洲",
      "北美洲",
      "南美洲",
      "大洋洲"
    ],
    "regions": [
      "全球热带与暖温带近海"
    ],
    "countries": [
      "巴哈马",
      "美国",
      "澳大利亚",
      "南非"
    ],
    "range": "全球热带与暖温带近海。国家列表仅列代表性分布地。"
  },
  "habitats": [
    {
      "name": "全球热带与暖温带近海",
      "realm": "marine",
      "description": "全球热带与暖温带近海。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "硬骨鱼",
      "鳐类",
      "其他鲨鱼",
      "无脊椎动物"
    ],
    "description": "食物包括硬骨鱼、鳐类、其他鲨鱼、无脊椎动物。"
  },
  "tags": [
    "无沟双髻鲨",
    "头两端的眼睛"
  ],
  "summary": '无沟双髻鲨的宽头两端长着眼睛，头部感受器能察觉微弱电信号。它常在海底附近寻找鱼和鳐类。',
  "description": '无沟双髻鲨生活在全球热带和暖温带近海，包括岸边水域和较外侧陆架。宽头两端各有一只眼睛，成体头部前缘接近平直，中间有浅缺口；第一背鳍很高，向后弯。它在海底附近寻找鱼和鳐类，头部感受器还能察觉猎物产生的微弱电信号。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '头两端的眼睛',
      body: '宽头的左右两端各有一只眼睛。斜着看的时候，远侧眼睛可能不明显；可以先沿着头的前缘找两端。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '高高的背鳍',
      body: '它背上第一片背鳍很高，边缘向后弯。身体两旁还有胸鳍，后面有长短不同的尾鳍叶。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '从上方看宽头',
      body: '成年无沟双髻鲨的头部前缘接近平直，中间有浅缺口。其他双髻鲨的头形不同，不能把所有锤形头都认成这个物种。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '贴近海底找食物',
      body: '它会在海底附近寻找鱼和鳐类。头部的感受器能够察觉猎物产生的微弱电信号，这些信号在照片中看不见。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '游向开阔海水',
      body: '无沟双髻鲨生活在热带与暖温带海域，能在岸边水域和较外侧的陆架活动。图中展示珊瑚礁边缘的一处环境。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '减少定向捕捞与兼捕，保护重要栖息海域并记录捕获种类。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '锤子形头留下的属名',
      body: 'Rüppell 在 1837 年以 Zygaena mokarran 描述这种鲨鱼，同年又采用 Sphyrna mokarran。属名 Sphyrna 来自希腊语“锤子”，指横向展开的头。锤形头也见于其他双髻鲨，辨认本种还需看成体近乎平直的头前缘和浅缺口。',
    },
  ],
  "keyFacts": [
    "宽头的左右两端各有一只眼睛。斜着看的时候，远侧眼睛可能不明显；可以先沿着头的前缘找两端。",
    "它背上第一片背鳍很高，边缘向后弯。身体两旁还有胸鳍，后面有长短不同的尾鳍叶。",
    "成年无沟双髻鲨的头部前缘接近平直，中间有浅缺口。其他双髻鲨的头形不同，不能把所有锤形头都认成这个物种。",
    "它会在海底附近寻找鱼和鳐类。头部的感受器能够察觉猎物产生的微弱电信号，这些信号在照片中看不见。",
    "无沟双髻鲨生活在热带与暖温带海域，能在岸边水域和较外侧的陆架活动。图中展示珊瑚礁边缘的一处环境。"
  ],
  "threats": [
    "定向捕捞与兼捕",
    "鱼鳍贸易带来的捕捞压力"
  ],
  "conservationActions": [
    "减少定向捕捞与兼捕，保护重要栖息海域并记录捕获种类。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "头两端的眼睛"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "全球热带与暖温带近海"
    }
  ],
  "media": {
    "image": "./images/species/great-hammerhead/01-cover.webp",
    "alt": "无沟双髻鲨在栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/great-hammerhead/02-observation.webp",
        "title": "头两端的眼睛",
        "alt": "无沟双髻鲨：头两端的眼睛",
        "caption": "AI 生成科学情景重建。宽头的左右两端各有一只眼睛。斜着看的时候，远侧眼睛可能不明显；可以先沿着头的前缘找两端。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/great-hammerhead/03-observation.webp",
        "title": "高高的背鳍",
        "alt": "无沟双髻鲨：高高的背鳍",
        "caption": "AI 生成科学情景重建。它背上第一片背鳍很高，边缘向后弯。身体两旁还有胸鳍，后面有长短不同的尾鳍叶。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/great-hammerhead/04-observation.webp",
        "title": "从上方看宽头",
        "alt": "无沟双髻鲨：从上方看宽头",
        "caption": "AI 生成科学情景重建。成年无沟双髻鲨的头部前缘接近平直，中间有浅缺口。其他双髻鲨的头形不同，不能把所有锤形头都认成这个物种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/great-hammerhead/05-observation.webp",
        "title": "贴近海底找食物",
        "alt": "无沟双髻鲨：贴近海底找食物",
        "caption": "AI 生成科学情景重建。它会在海底附近寻找鱼和鳐类。头部的感受器能够察觉猎物产生的微弱电信号，这些信号在照片中看不见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/great-hammerhead/06-observation.webp",
        "title": "游向开阔海水",
        "alt": "无沟双髻鲨：游向开阔海水",
        "caption": "AI 生成科学情景重建。无沟双髻鲨生活在热带与暖温带海域，能在岸边水域和较外侧的陆架活动。图中展示珊瑚礁边缘的一处环境。",
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
      "title": "佛罗里达自然历史博物馆：形态鉴别与分类",
      "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/great-hammerhead/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "IUCN 2024 全球鲨鳐报告：双髻鲨科与全球极危状态",
      "url": "https://portals.iucn.org/library/sites/library/files/documents/2024-024-En_part_10.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "Oceana：无沟双髻鲨食性与保护",
      "url": "https://oceana.org/marine-life/great-hammerhead-shark/",
      "kind": "ecology",
      "accessedAt": "2026-09-21"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-21",
  "updatedAt": "2026-09-21"
} as const satisfies Species;

export default profile;
