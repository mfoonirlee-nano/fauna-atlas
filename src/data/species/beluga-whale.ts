import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-delphinapterus-leucas",
  "slug": "beluga-whale",
  "names": {
    "zh": "白鲸",
    "en": "Beluga Whale"
  },
  "scientificName": "Delphinapterus leucas",
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
      "scientificName": "Cetacea",
      "zhName": "鲸目"
    },
    "family": {
      "scientificName": "Monodontidae",
      "zhName": "一角鲸科"
    },
    "genus": {
      "scientificName": "Delphinapterus",
      "zhName": "白鲸属"
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
    "assessor": "IUCN；等级来源与适用范围见正文"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲",
      "欧洲",
      "亚洲"
    ],
    "regions": [
      "北极与亚北极海域"
    ],
    "countries": [],
    "range": '分布于北极和亚北极海域。许多种群随季节在近岸、河口和冰区之间移动，不同种群有各自的活动范围。',
    "center": {
      "lat": 70,
      "lng": -100
    }
  },
  "habitats": [
    {
      "name": "北极近岸海域与河口",
      "realm": "marine",
      "description": '在北极近岸海域、河口和冰区寻找鱼类及无脊椎动物，许多种群随季节移动。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "max": 4.88,
      "unit": "m",
      "note": "NOAA 给出的长度上限约 16 英尺，换算为约 4.88 m；并非一般成年个体的固定长度。"
    }
  },
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鱼类",
      "虾蟹等甲壳动物",
      "其他海洋无脊椎动物"
    ],
    "description": "主要食物包括鱼类、虾蟹等甲壳动物、其他海洋无脊椎动物。"
  },
  "tags": [
    "白鲸",
    "圆圆的额头"
  ],
  "summary": "成年白鲸通体发白，幼鲸呈灰色。它额头鼓起的额隆与发声和回声定位有关，背上没有背鳍，只有低矮的脊。",
  "description": '白鲸属于哺乳动物，用肺呼吸，幼鲸吃奶成长。它用胸鳍和尾叶游动，会结群活动，以多种声音与同伴交流。',
  "storySections": [
    {
      key: 'melon',
      label: '生活与认识',
      title: '圆额头里有什么',
      body: '白鲸额头鼓起的部分叫额隆，与发声和回声定位有关。它借助声音探查水下环境，图集展示额隆的外形。',
    },
    {
      key: 'back',
      label: '生活与认识',
      title: '背上没有高高的鳍',
      body: '白鲸没有背鳍，背部只有低矮的脊。两侧的胸鳍和身体末端的尾叶帮助它在水里活动。',
    },
    {
      key: 'calf',
      label: '生活与认识',
      title: '小白鲸是灰色的',
      body: '幼年白鲸的皮肤较深，长大后逐渐变白。可以在同伴图里比较深浅颜色，不要把所有灰色鲸都当成白鲸幼崽。',
    },
    {
      key: 'air',
      label: '生活与认识',
      title: '到水面换气',
      body: '白鲸用肺呼吸，要到水面通过头顶的呼吸孔换气。它是哺乳动物，幼崽吃奶长大。',
    },
    {
      key: 'group',
      label: '生活与认识',
      title: '和同伴一起游',
      body: '白鲸会结群活动，用多种声音交流。它会在不同水层寻找鱼和其他小动物，群体大小随地点和季节变化。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '全球与地方分开看',
      body: '白鲸的全球 IUCN 等级为无危，库克湾种群却面临严重威胁，两种记录的范围不同。白鲸属于鲸类，现代分类将鲸类置于偶蹄目内。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '幼鲸长大后才变白',
      body: 'Pallas 于 1776 年描述了这个物种，现用学名为 Delphinapterus leucas。白鲸幼年时皮肤较深，成年后逐渐发白。它背上没有高背鳍，只有低矮隆脊，会在北极和亚北极水域用多种声音与同伴交流。',
    },
  ],
  "keyFacts": [
    '额头的额隆与发声和回声定位有关。',
    '没有背鳍，背部只有低矮隆脊。',
    '幼鲸较深灰，成年后逐渐变白。',
    '用肺呼吸，通过头顶呼吸孔换气。',
    '会结群活动，用多种声音交流。',
  ],
  "threats": [
    "海洋噪声与污染",
    "海冰和栖息环境变化",
    "猎物供应变化"
  ],
  "conservationActions": [
    "保护河口与近岸栖息地",
    "减少水下噪声和污染"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "圆圆的额头"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "鱼类"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "北极近岸海域与河口"
    }
  ],
  "media": {
    "image": "./images/species/beluga-whale/01-cover.webp",
    "alt": "白鲸的完整身体位于画面右侧。",
    "focalPoint": {
      "x": 0.81,
      "y": 0.32
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/beluga-whale/02-observation.webp",
        "title": "白色的身体",
        "alt": "成年白鲸在水下侧身游动，圆额头和没有背鳍的背部可见。",
        "caption": "成年白鲸在水下侧身游动，圆额头和没有背鳍的背部可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/beluga-whale/03-observation.webp",
        "title": "靠近看圆额头",
        "alt": "白鲸头部侧面近景，额头圆鼓，眼睛较小。",
        "caption": "白鲸头部侧面近景，额头圆鼓，眼睛较小。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/beluga-whale/04-observation.webp",
        "title": "灰色的小白鲸",
        "alt": "白色成年白鲸和灰色幼鲸在水中相伴游动。",
        "caption": "白色成年白鲸和灰色幼鲸在水中相伴游动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/beluga-whale/05-observation.webp",
        "title": "浮到水面",
        "alt": "白鲸在平静水面露出头背，头顶可见呼吸孔。",
        "caption": "白鲸在平静水面露出头背，头顶可见呼吸孔。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/beluga-whale/06-observation.webp",
        "title": "冰旁的白鲸",
        "alt": "白鲸在冰区水下游动，胸鳍和尾叶可见。",
        "caption": "白鲸在冰区水下游动，胸鳍和尾叶可见。",
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
      "title": "NOAA Fisheries — 白鲸形态与生活",
      "url": "https://www.fisheries.noaa.gov/species/beluga-whale",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Society for Marine Mammalogy — 2026 年分类名单",
      "url": "https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "IUCN SSC Cetacean Specialist Group — 全球鲸类红色名录状态",
      "url": "https://iucn-csg.org/red-list-status-of-cetaceans/",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      title: 'GBIF：Delphinapterus leucas 的命名作者与年份',
      url: 'https://www.gbif.org/species/5220003',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-09",
  "updatedAt": "2026-09-09"
} as const satisfies Species;

export default profile;
