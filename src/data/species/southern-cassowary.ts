import type { Species } from '../../types/species.ts';

const profile = {
  "id": "southern-cassowary",
  "slug": "southern-cassowary",
  "names": {
    "zh": "双垂鹤鸵",
    "en": "Southern Cassowary",
    "aliases": [
      "南方鹤鸵",
      "双垂食火鸡"
    ]
  },
  "scientificName": "Casuarius casuarius",
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
      "scientificName": "Casuariiformes",
      "zhName": "鹤鸵目"
    },
    "family": {
      "scientificName": "Casuariidae",
      "zhName": "鹤鸵科"
    },
    "genus": {
      "scientificName": "Casuarius",
      "zhName": "鹤鸵属"
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
    "assessor": "IUCN；全球等级见来源，独立评估日期与全球趋势未核实"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "大洋洲"
    ],
    "regions": [
      "澳大利亚东北部",
      "新几内亚及邻近岛屿"
    ],
    "countries": [
      "澳大利亚",
      "巴布亚新几内亚",
      "印度尼西亚"
    ],
    "range": "分布于澳大利亚北昆士兰、新几内亚以及印度尼西亚东部部分岛屿的雨林。",
    "center": {
      "lat": -16,
      "lng": 145
    }
  },
  "habitats": [
    {
      "name": "热带雨林",
      "realm": "terrestrial",
      "description": '雨林地面的落果是双垂鹤鸵的重要食物。它们用强壮的腿在林下走动，树木之间连通的森林为它们提供活动空间。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "落果",
      "蜗牛",
      "其他小型动物"
    ],
    "description": "双垂鹤鸵主要吃掉落在林地上的果实，也会摄食小型动物。"
  },
  "activity": [
    "主要在白天活动"
  ],
  "tags": [
    "双垂鹤鸵",
    "头顶的角盔"
  ],
  "summary": "双垂鹤鸵头顶长着角盔，蓝色的头颈前垂着两条红色肉垂。它不会飞，用强壮的腿在雨林地面行走。",
  "description": '双垂鹤鸵身上的黑羽像粗毛，蓝色裸露头颈前有两条红色肉垂。每只脚有三根向前的趾，内侧趾爪很长；雌鸟产下绿色卵后，雄鸟负责孵卵和带领幼鸟。',
  "storySections": [
    {
      key: 'casque',
      label: '生活与认识',
      title: '头顶的角盔',
      body: '头顶的角盔是身体的一部分，下面是蓝色头颈和两条肉垂。它与由羽毛组成的羽冠不同。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '低头找落果',
      body: '双垂鹤鸵主要在林地寻找掉下来的果实。不同果树在不同时间结果，它们会在自己的活动范围内寻找食物。',
    },
    {
      key: 'walking',
      label: '生活与认识',
      title: '用强壮的腿走路',
      body: '它们不会飞，常在雨林地面走动。每只脚有三根向前的脚趾，内侧趾爪很长；观察时保持距离，不接近或喂食。',
    },
    {
      key: 'young',
      label: '生活与认识',
      title: '幼鸟跟着爸爸',
      body: '成年雄鸟会带领雏鸟觅食。幼鸟有浅色和深色纵纹，还没有成鸟那样鲜艳的头颈和高大的角盔。',
    },
    {
      key: 'nest',
      label: '生活与认识',
      title: '爸爸留在地面孵卵',
      body: '雌鸟把绿色卵产在铺有植物材料的地面浅窝里，雄鸟负责孵卵并照顾幼鸟。巢边的成鸟需要不受干扰的空间。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '让雨林连在一起',
      body: 'BirdLife 列出的全球等级为无危，但澳大利亚部分种群仍面临生境丧失、道路和犬只等压力。保护相连的雨林，开车经过活动区域时留意野生动物。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '两条肉垂与育雏的父亲',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Casuarius casuarius。“双垂”对应颈前的两条肉垂。繁殖时，雌鸟把绿色卵产在地面的浅窝，雄鸟留在巢中孵卵，随后带领有纵纹、角盔尚小的幼鸟在林地觅食。',
    },
  ],
  "keyFacts": [
    "角盔长在头顶，不是羽冠。",
    "双垂鹤鸵主要在林地寻找掉下来的果实。",
    "它们不会飞，常在雨林地面走动。",
    "成年雄鸟会带领雏鸟觅食。",
    "雌鸟把绿色卵产在铺有植物材料的地面浅窝里，雄鸟负责孵卵并照顾幼鸟。"
  ],
  "threats": [
    "雨林丧失与破碎化",
    "道路碰撞",
    "犬只袭击"
  ],
  "conservationActions": [
    "保护相连的雨林",
    "减少道路碰撞",
    "管束犬只并避免投喂"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "头顶的角盔"
    },
    {
      "key": "food",
      "label": "主要食物",
      "value": "落果"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "热带雨林"
    }
  ],
  "media": {
    "image": "./images/species/southern-cassowary/01-cover.webp",
    "alt": "双垂鹤鸵在生活环境中的完整身体",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/southern-cassowary/02-observation.webp",
        "title": "角盔和两条肉垂",
        "alt": "双垂鹤鸵头颈近景，角盔与两条红色肉垂完整可见",
        "caption": "AI 生成科学情景重建。双垂鹤鸵头颈近景，角盔与两条红色肉垂完整可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/southern-cassowary/03-observation.webp",
        "title": "寻找地上的果实",
        "alt": "双垂鹤鸵低头拾取雨林落果",
        "caption": "AI 生成科学情景重建。双垂鹤鸵低头拾取雨林落果。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/southern-cassowary/04-observation.webp",
        "title": "走过雨林的双腿",
        "alt": "双垂鹤鸵从蕨类植物旁走过，粗壮双腿清楚可见",
        "caption": "AI 生成科学情景重建。双垂鹤鸵从蕨类植物旁走过，粗壮双腿清楚可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/southern-cassowary/05-observation.webp",
        "title": "爸爸带着条纹幼鸟",
        "alt": "雄性双垂鹤鸵带着两只纵纹雏鸟在林地行走",
        "caption": "AI 生成科学情景重建。雄性双垂鹤鸵带着两只纵纹雏鸟在林地行走。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/southern-cassowary/06-observation.webp",
        "title": "地面巢里的爸爸",
        "alt": "雄性双垂鹤鸵伏在树根旁的地面巢中孵卵",
        "caption": "AI 生成科学情景重建。雄性双垂鹤鸵伏在树根旁的地面巢中孵卵。",
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
      "title": "BirdLife Australia：双垂鹤鸵生态与分布",
      "url": "https://birdlife.org.au/bird-profiles/southern-cassowary/",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "BirdLife Australia：全球保护等级",
      "url": "https://birdlife.org.au/bird-profiles/southern-cassowary/",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Australian Museum：角盔、脚趾与繁殖",
      "url": "https://australian.museum/learn/animals/birds/southern-cassowary/",
      "kind": "general",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "NCBI：鹤鸵属所属鹤鸵目",
      "url": "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?name=Casuarius",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Queensland Government：雨林、道路与犬只威胁",
      "url": "https://www.qld.gov.au/environment/plants-animals/conservation/threatened-species/featured-projects/southern-cassowary",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Casuarius casuarius 的命名作者与年份',
      url: 'https://www.gbif.org/species/5231783',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
