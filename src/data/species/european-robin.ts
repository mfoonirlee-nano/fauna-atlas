import type { Species } from '../../types/species.ts';

const profile = {
  "id": "european-robin",
  "slug": "european-robin",
  "names": {
    "zh": "欧亚红胸鸲",
    "en": "European Robin"
  },
  "scientificName": "Erithacus rubecula",
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
      "scientificName": "Passeriformes",
      "zhName": "雀形目"
    },
    "family": {
      "scientificName": "Muscicapidae",
      "zhName": "鹟科"
    },
    "genus": {
      "scientificName": "Erithacus",
      "zhName": "红胸鸲属"
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
      "欧洲"
    ],
    "regions": [
      "欧洲及邻近地区"
    ],
    "countries": [],
    "range": "广布于欧洲，也见于邻近的西亚和北非地区；不同种群的迁徙习性不同。"
  },
  "habitats": [
    {
      "name": "林地、灌丛与花园",
      "realm": "terrestrial",
      "description": '林地、灌丛和花园提供地面昆虫、蠕虫及果实。红胸鸲也会在浅水沐浴，野外观察需留出活动空间。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "typical": 14,
      "unit": "cm"
    },
    "weight": {
      "min": 14,
      "max": 21,
      "unit": "g"
    },
    "wingspan": {
      "min": 20,
      "max": 22,
      "unit": "cm"
    }
  },
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "昆虫",
      "蠕虫",
      "果实"
    ],
    "description": "取食昆虫、蠕虫、果实。"
  },
  "tags": [
    "欧亚红胸鸲",
    "橙红色的胸前"
  ],
  "summary": "成年欧亚红胸鸲的脸、喉部和胸前有橙红羽毛，雌雄都有。幼鸟主要是褐色斑纹，尚无成鸟的橙红胸羽。",
  "description": '欧亚红胸鸲在地面找蠕虫和昆虫，也吃果实。雌雄都能鸣唱保卫领地；幼鸟以褐色、浅色斑纹为主，换羽后才逐渐出现成鸟的橙红胸羽。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '橙红色的胸前',
      body: '成鸟橙红色羽毛从脸部延伸到喉和胸，雌雄都有。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '落叶间找食物',
      body: '它在地面寻找蠕虫和昆虫，也取食果实。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '张开嘴唱歌',
      body: '雌鸟和雄鸟都能鸣唱保卫领地。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '幼鸟还没有红胸',
      body: '幼鸟以褐色、浅色斑纹为主，换羽后橙红胸羽才逐渐出现。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '浅水里洗羽毛',
      body: '红胸鸲会在浅水中沐浴，清理羽毛。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '留住它的生活环境',
      body: '欧亚红胸鸲全球属无危，独立评估日期和全球种群趋势尚未确认。观察时应留出活动空间，避免干扰巢穴。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“红胸”属于成鸟，雌雄都有',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Erithacus rubecula。“红胸”对应脸、喉和胸部的橙红羽毛，但幼鸟仍是褐色斑纹，要经过换羽才出现这片颜色。雌雄成鸟都带红胸，也都能鸣唱来保卫领地。',
    },
  ],
  "keyFacts": [
    '成鸟橙红色羽毛从脸部延伸到喉和胸，雌雄都有。',
    '它在地面寻找蠕虫和昆虫，也取食果实。',
    '雌鸟和雄鸟都能鸣唱保卫领地。',
    '幼鸟以褐色、浅色斑纹为主，换羽后橙红胸羽才逐渐出现。',
    '红胸鸲会在浅水中沐浴，清理羽毛。',
  ],
  "threats": [
    "局地栖息环境改变与巢址干扰"
  ],
  "conservationActions": [
    "保留原生植被和巢址",
    "野外观察保持距离"
  ],
  "metrics": {
    "adultMassKg": [
      0.014,
      0.021
    ],
    "wingspanCm": [
      20,
      22
    ]
  },
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "橙红色的胸前"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "林地、灌丛与花园"
    }
  ],
  "media": {
    "image": "./images/species/european-robin/01-cover.webp",
    "alt": "欧亚红胸鸲的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/european-robin/02-observation.webp",
        "title": "橙红色的胸前",
        "alt": '橙红色的胸前',
        "caption": "AI 生成科学情景重建。橙红色从脸部延伸到喉和胸。雌鸟与雄鸟都能有这片颜色。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-robin/03-observation.webp",
        "title": "落叶间找食物",
        "alt": '落叶间找食物',
        "caption": "AI 生成科学情景重建。它在地面寻找蠕虫和昆虫，也会取食果实。看看小虫与细嘴的位置。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-robin/04-observation.webp",
        "title": "张开嘴唱歌",
        "alt": '张开嘴唱歌',
        "caption": "AI 生成科学情景重建。红胸鸲会鸣唱，雄鸟和雌鸟都能用鸣声保卫领地。图片只展示张嘴姿态。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-robin/05-observation.webp",
        "title": "幼鸟还没有红胸",
        "alt": '幼鸟还没有红胸',
        "caption": "AI 生成科学情景重建。幼鸟身上有褐色和浅色斑纹。长大换羽后，橙红色胸羽才逐渐出现。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-robin/06-observation.webp",
        "title": "浅水里洗羽毛",
        "alt": '浅水里洗羽毛',
        "caption": "AI 生成科学情景重建。小鸟在浅水中沐浴，水花落在羽毛上。观察野鸟时，给它留出活动的空间。",
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
      "title": "英国自然历史博物馆：欧亚红胸鸲",
      "url": "https://www.nhm.ac.uk/discover/robin-erithacus-rubecula.html",
      "kind": "ecology",
      "accessedAt": "2026-09-17"
    },
    {
      "title": "BTO：红胸鸲分类与全球等级",
      "url": "https://www.bto.org/learn/about-birds/birdfacts/robin",
      "kind": "conservation",
      "accessedAt": "2026-09-17"
    },
    {
      "title": "BTO：幼鸟羽色识别",
      "url": "https://www.bto.org/learn/skills/bird-identification/young-birds",
      "kind": "general",
      "accessedAt": "2026-09-17"
    },
    {
      title: 'GBIF：Erithacus rubecula 的命名作者与年份',
      url: 'https://www.gbif.org/species/2492462',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-17",
  "updatedAt": "2026-09-17"
} as const satisfies Species;

export default profile;
