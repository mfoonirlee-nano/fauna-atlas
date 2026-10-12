import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-paracanthurus-hepatus",
  "slug": "blue-tang",
  "names": {
    "zh": "拟刺尾鲷",
    "en": "Blue Tang",
    "aliases": [
      "蓝倒吊",
      "蓝吊"
    ]
  },
  "scientificName": "Paracanthurus hepatus",
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
      "scientificName": "Acanthuridae",
      "zhName": "刺尾鱼科"
    },
    "genus": {
      "scientificName": "Paracanthurus",
      "zhName": "拟刺尾鱼属"
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
    "assessor": "IUCN；来源与核实范围见保护章节",
    "assessedYear": 2010
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "亚洲",
      "非洲",
      "大洋洲"
    ],
    "regions": [
      "印度洋与西太平洋热带礁区"
    ],
    "countries": [],
    "range": "广泛分布于印度洋与西太平洋的热带海域，在珊瑚礁附近活动；澳大利亚大堡礁是其分布区域之一。地图中心用于定位大堡礁，不表示完整分布范围。",
    "center": {
      "lat": -16,
      "lng": 146
    }
  },
  "habitats": [
    {
      "name": "热带珊瑚礁",
      "realm": "marine",
      "description": '在热带珊瑚礁及其上方水层活动，利用珊瑚结构躲藏，取食浮游动物及少量藻类。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "max": 31,
      "unit": "cm",
      "note": "澳大利亚博物馆给出的可达长度；不作为成体常见范围。"
    }
  },
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "浮游动物",
      "藻类"
    ],
    "description": "食物包括浮游动物、藻类。"
  },
  "tags": [
    "拟刺尾鲷",
    "蓝身体黄尾巴"
  ],
  "summary": "拟刺尾鲷身体蓝色，带有黑色花纹，尾鳍大部分为黄色。身体与尾鳍相接处的两侧各有一枚棘。",
  "description": '拟刺尾鲷属于刺尾鱼科，身体侧扁，蓝色体侧的黑纹像调色板。它主要吃浮游动物，偶尔啄食藻类，幼鱼利用珊瑚枝躲藏。',
  "storySections": [
    {
      key: 'colors',
      label: '生活与认识',
      title: '蓝身体后面有黄尾巴',
      body: '拟刺尾鲷身体侧面呈蓝色，黑色花纹围出像调色板的轮廓。尾鳍大部分为黄色，上下边缘带黑色。',
    },
    {
      key: 'tail',
      label: '生活与认识',
      title: '尾巴前面藏着小棘',
      body: '尾柄两侧各有一枚棘，位于身体和尾鳍相接处。这是刺尾鱼科的重要外形结构，远景中不容易看清。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '在礁区找食物',
      body: '它主要吃浮游动物，偶尔也啄食藻类。图中贴近岩面的姿势用于观察取食动作，不表示它只吃岩面上的食物。',
    },
    {
      key: 'group',
      label: '生活与认识',
      title: '和同伴一起游',
      body: '拟刺尾鲷可以成群在礁区上方活动。看鱼群图时，找找不同方向的尾鳍；图里几条鱼的数量不能代表野外固定群体大小。',
    },
    {
      key: 'shelter',
      label: '生活与认识',
      title: '珊瑚枝间能躲藏',
      body: '幼鱼会利用珊瑚结构躲藏。身体侧扁，转向时能改变我们看到的宽度；从照片不能推断每条缝隙都能钻进去。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '保留珊瑚礁里的住处',
      body: 'FishBase 收录的全球 IUCN 等级为无危，评估日期为 2010 年 5 月 7 日。礁区退化与观赏鱼捕捉仍可能影响局部种群；全球等级不能说明每一片珊瑚礁里的种群状况。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '蓝黄体色之外，尾前有棘',
      body: 'Linnaeus 于 1766 年描述了这个物种，现用学名为 Paracanthurus hepatus。它蓝色体侧的黑纹像调色板，黄色尾鳍前方两侧各有一枚棘，属于刺尾鱼科的外形结构。幼鱼还会利用珊瑚枝间的空间躲藏。',
    },
  ],
  "keyFacts": [
    '蓝色身体带黑纹，尾鳍大部分黄色。',
    '尾柄两侧各有一枚棘。',
    '主要吃浮游动物，偶尔吃藻类。',
    '可成群在礁区上方活动。',
    '幼鱼利用珊瑚结构躲藏。',
  ],
  "threats": [
    "珊瑚礁栖地退化",
    "观赏鱼捕捉压力"
  ],
  "conservationActions": [
    "保护珊瑚礁与水质",
    "减少对野生礁鱼的捕捉"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "蓝身体黄尾巴"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "浮游动物"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "热带珊瑚礁"
    }
  ],
  "media": {
    "image": "./images/species/blue-tang/01-cover.webp",
    "alt": "拟刺尾鲷与周围生活环境的全身场景",
    "focalPoint": {
      "x": 0.78,
      "y": 0.35
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/blue-tang/02-observation.webp",
        "alt": "拟刺尾鲷侧身游动，蓝色身体上有黑色花纹，尾鳍呈黄色",
        "title": "蓝身体黄尾巴",
        "caption": "AI 生成科学情景重建。拟刺尾鲷侧身游动，蓝色身体上有黑色花纹，尾鳍呈黄色。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-tang/03-observation.webp",
        "alt": "拟刺尾鲷身体和黄色尾鳍相接处的近景",
        "title": "尾柄与尾鳍",
        "caption": "AI 生成科学情景重建。拟刺尾鲷身体和黄色尾鳍相接处的近景。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-tang/04-observation.webp",
        "alt": "拟刺尾鲷把嘴靠近礁区岩面",
        "title": "贴近岩面",
        "caption": "AI 生成科学情景重建。拟刺尾鲷把嘴靠近礁区岩面。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-tang/05-observation.webp",
        "alt": "一小群拟刺尾鲷在珊瑚上方游动",
        "title": "礁区里的鱼群",
        "caption": "AI 生成科学情景重建。一小群拟刺尾鲷在珊瑚上方游动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-tang/06-observation.webp",
        "alt": "幼年拟刺尾鲷停在珊瑚枝附近，蓝黑身体和黄色尾巴可见",
        "title": "珊瑚枝间的幼鱼",
        "caption": "AI 生成科学情景重建。幼年拟刺尾鲷停在珊瑚枝附近，蓝黑身体和黄色尾巴可见。",
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
      "title": "澳大利亚博物馆 — 拟刺尾鲷外形与分类",
      "url": "https://australian.museum/learn/animals/fishes/blue-tang-paracanthurus-hepatus/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "FishBase — 拟刺尾鲷全球等级",
      "url": "https://www.fishbase.se/summary/Paracanthurus-hepatus.html",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Animal Diversity Web — Paracanthurus hepatus 形态与生活",
      "url": "https://animaldiversity.org/accounts/Paracanthurus_hepatus/",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      title: 'GBIF：Paracanthurus hepatus 的命名作者与年份',
      url: 'https://www.gbif.org/species/2379534',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-09",
  "updatedAt": "2026-09-09"
} as const satisfies Species;

export default profile;
