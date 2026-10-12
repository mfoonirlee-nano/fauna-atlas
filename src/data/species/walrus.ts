import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-odobenus-rosmarus",
  "slug": "walrus",
  "names": {
    "zh": "海象",
    "en": "Walrus",
    "aliases": []
  },
  "scientificName": "Odobenus rosmarus",
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
      "scientificName": "Mammalia",
      "zhName": "哺乳纲"
    },
    "order": {
      "scientificName": "Carnivora",
      "zhName": "食肉目"
    },
    "family": {
      "scientificName": "Odobenidae",
      "zhName": "海象科"
    },
    "genus": {
      "scientificName": "Odobenus",
      "zhName": "海象属"
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
    "assessor": "IUCN（等级与适用范围见正文及来源）"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "亚洲",
      "欧洲",
      "北美洲"
    ],
    "countries": [
      "俄罗斯",
      "美国",
      "加拿大",
      "挪威"
    ],
    "regions": [
      "北极及邻近浅海"
    ],
    "range": '分布于北极及邻近海域，包括白令海、楚科奇海和北大西洋北部。太平洋与大西洋亚种的地区记录范围不同，不能直接当作整个物种的全球数量。',
    "center": {
      "lat": 72,
      "lng": -165
    }
  },
  "habitats": [
    {
      "realm": "marine",
      "name": "浅海、海冰与海岸",
      "description": '利用北极浅海寻找贝类，在海冰或海岸休息和育幼。休息地点与觅食水域之间的距离关系到日常活动。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "metrics": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "蛤类",
      "其他海底无脊椎动物"
    ],
    "description": '潜入浅海，在海底寻找蛤类等无脊椎动物，再吸食贝壳里的软体部分。敏感胡须帮助探查食物。'
  },
  "tags": [
    "海象",
    "嘴边的两根长牙"
  ],
  "summary": "海象嘴边的长牙是伸长的上犬齿，雌雄都能长出。它用敏感的胡须探查海底，寻找贝类等食物。",
  "description": '海象四肢呈鳍状，游泳时后肢推动身体、前肢帮助转向。它会上岸或海冰休息，母海象在育幼期间照顾幼崽，并用乳汁喂养。',
  "storySections": [
    {
      key: 'tusks',
      label: '生活与认识',
      title: '长牙从上颌伸出',
      body: '海象的长牙是伸长的上犬齿。雄性和雌性都能长出长牙，雄性的通常更粗长。',
    },
    {
      key: 'whiskers',
      label: '生活与认识',
      title: '胡须帮助寻找食物',
      body: '海象用敏感的胡须探查海底，寻找贝类等食物。两根长牙之间，嘴边密密的一圈就是胡须。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '在浅海寻找贝类',
      body: '海象会潜入浅海，在海底寻找蛤类等无脊椎动物，并吸食贝壳里的软体部分。图中的海底场景不表示它用长牙挖贝壳。',
    },
    {
      key: 'swim',
      label: '生活与认识',
      title: '用鳍状肢游泳',
      body: '海象的四肢呈鳍状。游泳时，它用后肢推动身体，前肢帮助转向；上岸后也能借助四肢移动。找找身体前后两组鳍状肢。',
    },
    {
      key: 'young',
      label: '生活与认识',
      title: '幼崽跟在妈妈身边',
      body: '海象妈妈用乳汁喂养幼崽，并在育幼期间照顾它。幼崽的长牙还不显眼；图中只展示母幼相伴的场景。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '留下休息的海冰',
      body: '海象全球 IUCN 等级为易危，依据 2016 年发布的评估。海冰减少会改变它们休息和觅食的条件；岸上聚集的海象还可能受到船只和人的惊扰。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '长牙其实是上犬齿',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Odobenus rosmarus。海象的雄性和雌性都有长牙，雄性的通常更粗长。寻找贝类时，它用敏感胡须探查海底，再吸食贝壳里的软体部分，长牙并非图中挖贝壳的工具。',
    },
  ],
  "keyFacts": [
    '长牙是伸长的上犬齿，雌雄都能长出。',
    '敏感的胡须帮助探查海底食物。',
    '主要在浅海寻找贝类等无脊椎动物。',
    '后鳍推动身体，前鳍帮助转向。',
    '母海象用乳汁喂养并照顾幼崽。',
  ],
  "threats": [
    "气候变暖造成海冰减少。",
    "岸上休息群受人类活动惊扰。"
  ],
  "conservationActions": [
    "减少温室气体排放。",
    "船只和游客与海象休息地保持距离。"
  ],
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "嘴边的两根长牙"
    },
    {
      "key": "food",
      "label": "主要食物",
      "value": "蛤类"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "浅海、海冰与海岸"
    }
  ],
  "sources": [
    {
      "title": "ADW — 海象分类、形态与取食",
      "url": "https://animaldiversity.org/accounts/Odobenus_rosmarus/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "WWF — 海象保护现状及全球 IUCN 2016 等级",
      "url": "https://www.arcticwwf.org/site/assets/files/1541/walrus-report-2018-screen.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "USFWS — 太平洋海象种群评估（地区资料）",
      "url": "https://www.fws.gov/sites/default/files/documents/Pacific-Walrus-Stock-Assessment-Report-2023.pdf",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      title: 'GBIF：Odobenus rosmarus 的命名作者与年份',
      url: 'https://www.gbif.org/species/5218819',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "media": {
    "image": "./images/species/walrus/01-cover.webp",
    "alt": "海象的完整身体位于画面右侧。",
    "focalPoint": {
      "x": 0.88,
      "y": 0.34
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/walrus/02-observation.webp",
        "title": "长牙从上颌伸出",
        "alt": "海象在碎石海岸休息，长牙和鳍状肢可见。",
        "caption": "海象在碎石海岸休息，长牙和鳍状肢可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/walrus/03-observation.webp",
        "title": "胡须帮助寻找食物",
        "alt": "近看海象向下伸出的长牙和嘴边胡须。",
        "caption": "近看海象向下伸出的长牙和嘴边胡须。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/walrus/04-observation.webp",
        "title": "在浅海寻找贝类",
        "alt": "海象在浅海底部靠近贝类觅食。",
        "caption": "海象在浅海底部靠近贝类觅食。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/walrus/05-observation.webp",
        "title": "用鳍状肢游泳",
        "alt": "海象在冷水中游泳，身体后方可见后肢。",
        "caption": "海象在冷水中游泳，身体后方可见后肢。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/walrus/06-observation.webp",
        "title": "幼崽跟在妈妈身边",
        "alt": "成年雌海象与幼崽在海冰上相伴。",
        "caption": "成年雌海象与幼崽在海冰上相伴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      }
    ]
  },
  "featured": true,
  "publishedAt": "2026-09-09",
  "updatedAt": "2026-09-09"
} as const satisfies Species;

export default profile;
