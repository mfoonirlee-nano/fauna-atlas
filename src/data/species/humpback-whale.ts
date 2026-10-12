import type { Species } from '../../types/species.ts';

const profile = {
  "id": "humpback-whale",
  "slug": "humpback-whale",
  "names": {
    "zh": "座头鲸",
    "en": "Humpback Whale"
  },
  "scientificName": "Megaptera novaeangliae",
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
      "scientificName": "Balaenopteridae",
      "zhName": "须鲸科"
    },
    "genus": {
      "scientificName": "Megaptera",
      "zhName": "座头鲸属"
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
    "assessor": "IUCN；等级来源与适用范围见来源记录"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "亚洲",
      "欧洲",
      "非洲",
      "北美洲",
      "南美洲",
      "大洋洲",
      "南极洲"
    ],
    "regions": [
      "全球各大洋"
    ],
    "countries": [],
    "range": "分布于各大洋。许多种群在高纬度觅食区和较温暖的繁殖区之间季节迁移；并非所有种群都进行相同的长距离迁移。地图点仅代表夏威夷附近海域。",
    "center": {
      "lat": 20,
      "lng": -155
    }
  },
  "habitats": [
    {
      "name": "海洋与沿岸海域",
      "realm": "marine",
      "description": '利用海洋及沿岸水域。许多种群在高纬觅食区和较暖繁殖区之间迁移，各种群路线和距离不同。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "filter-feeder"
    ],
    "foods": [
      "磷虾",
      "小型群游鱼类"
    ],
    "description": "座头鲸张口吞入带着磷虾或小鱼的海水，再把水排出，用鲸须留下食物。它喉部有纵向褶沟，取食时能扩张。"
  },
  "tags": [
    "座头鲸",
    "长长的胸鳍"
  ],
  "summary": "座头鲸的胸鳍细长，边缘有突起。它会调整胸鳍姿势来游动和转向，跃出水面时也能看见展开的长胸鳍。",
  "description": '座头鲸是须鲸，喉部纵向褶沟能扩张，吞入海水后用鲸须滤下磷虾和小鱼。幼鲸靠母乳成长，母幼都需回到水面呼吸。',
  "storySections": [
    {
      key: 'flippers',
      label: '生活与认识',
      title: '展开长胸鳍',
      body: '座头鲸的胸鳍细长，边缘有突起。它游动和转向时会调整胸鳍的姿势。',
    },
    {
      key: 'breach',
      label: '生活与认识',
      title: '跃出水面',
      body: '座头鲸会把身体跃出海面，落水时溅起水花。观察跃身图，看看露出水面的身体和胸鳍；图片展示一个姿势，不代表每次跃身都相同。',
    },
    {
      key: 'tail',
      label: '生活与认识',
      title: '尾巴抬起来',
      body: '座头鲸有向左右展开的尾叶，游泳时上下摆动尾部。准备下潜时，有时能看到它把尾巴抬出水面。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '用鲸须留下食物',
      body: '座头鲸张口吞入带着磷虾或小鱼的海水，再把水排出，用鲸须留下食物。它喉部有纵向褶沟，取食时能扩张。',
    },
    {
      key: 'calf',
      label: '生活与认识',
      title: '小鲸跟着妈妈',
      body: '幼鲸在海中出生，靠母乳长大。母鲸和幼鲸会一起游动；它们都用肺呼吸，需要返回水面换气。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '让鲸有空间游动',
      body: '全球 IUCN 等级为无危，但不同地区种群的风险不同。渔具缠绕、船只碰撞和水下噪声仍会伤害座头鲸。观鲸船应保持距离，避免追逐。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '长胸鳍之外，喉部还能扩张',
      body: 'Borowski 于 1781 年描述了这个物种，现用学名为 Megaptera novaeangliae。座头鲸用鲸须留下磷虾和小鱼，喉部纵向褶沟在取食时扩张，让它吞入更多含食物的海水。许多种群还在觅食区和繁殖区之间季节迁移。',
    },
  ],
  "keyFacts": [
    '胸鳍细长，边缘有突起。',
    '会跃出水面。',
    '尾叶上下摆动，下潜前有时抬出水面。',
    '用鲸须滤食，喉部褶沟帮助口腔扩张。',
    '幼鲸吃奶成长，跟随母鲸游动。',
    '属于鲸类，现代分类将鲸类放在偶蹄目内。',
  ],
  "threats": [
    "渔具缠绕",
    "船只碰撞",
    "水下噪声"
  ],
  "conservationActions": [
    "减少渔具缠绕",
    "降低船舶碰撞风险",
    "保护觅食与繁殖海域"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "长长的胸鳍"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "磷虾"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "海洋与沿岸海域"
    }
  ],
  "media": {
    "image": "./images/species/humpback-whale/01-cover.webp",
    "alt": "座头鲸与生活环境的全身场景",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/humpback-whale/02-observation.webp",
        "title": "跃出水面",
        "alt": "座头鲸跃出海面，展开长胸鳍",
        "caption": "AI 生成科学情景重建。座头鲸跃出海面，展开长胸鳍。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/humpback-whale/03-observation.webp",
        "title": "找到胸鳍",
        "alt": "水下的座头鲸伸出长胸鳍",
        "caption": "AI 生成科学情景重建。水下的座头鲸伸出长胸鳍。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/humpback-whale/04-observation.webp",
        "title": "抬起尾巴",
        "alt": "座头鲸的尾叶露出水面",
        "caption": "AI 生成科学情景重建。座头鲸的尾叶露出水面。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/humpback-whale/05-observation.webp",
        "title": "看看喉部褶沟",
        "alt": "座头鲸闭口游动，腹侧可见纵向褶沟",
        "caption": "AI 生成科学情景重建。座头鲸闭口游动，腹侧可见纵向褶沟。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/humpback-whale/06-observation.webp",
        "title": "跟着妈妈游",
        "alt": "母鲸和幼鲸在水下游动",
        "caption": "AI 生成科学情景重建。母鲸和幼鲸在水下游动。",
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
      "title": "ASM Mammal Diversity Database — 分类与名称",
      "url": "https://www.mammaldiversity.org/taxon/1006405/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-13"
    },
    {
      "title": "NOAA Fisheries — 座头鲸",
      "url": "https://www.fisheries.noaa.gov/species/humpback-whale",
      "kind": "ecology",
      "accessedAt": "2026-09-13"
    },
    {
      "title": "IUCN — 全球保护等级（ASM MDD 转引）",
      "url": "https://www.mammaldiversity.org/taxon/1006405/",
      "kind": "conservation",
      "accessedAt": "2026-09-13"
    },
    {
      title: 'GBIF：Megaptera novaeangliae 的命名作者与年份',
      url: 'https://www.gbif.org/species/5220086',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-13",
  "updatedAt": "2026-09-13"
} as const satisfies Species;

export default profile;
