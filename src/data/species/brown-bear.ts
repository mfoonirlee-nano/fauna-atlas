import type { Species } from '../../types/species.ts';

const profile = {
  "id": "brown-bear",
  "slug": "brown-bear",
  "names": {
    "zh": "棕熊",
    "en": "Brown Bear",
    "aliases": [
      "欧亚棕熊",
      "灰熊"
    ]
  },
  "scientificName": "Ursus arctos",
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
      "scientificName": "Ursidae",
      "zhName": "熊科"
    },
    "genus": {
      "scientificName": "Ursus",
      "zhName": "熊属"
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
    "assessor": "IUCN（由 Animal Diversity Web 转引）"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲",
      "亚洲",
      "北美洲"
    ],
    "regions": [
      "欧亚大陆与北美洲部分地区"
    ],
    "countries": [
      "俄罗斯",
      "加拿大",
      "美国",
      "中国",
      "芬兰",
      "瑞典"
    ],
    "range": "分布于欧亚大陆和北美洲的部分地区，利用森林、山地草甸、苔原和河谷等环境。不同地区种群的体型、食物和冬眠习惯会有差异；地图中心只作欧亚大陆的代表定位。",
    "center": {
      "lat": 60,
      "lng": 100
    }
  },
  "habitats": [
    {
      "name": "森林、草甸与河谷",
      "realm": "terrestrial",
      "description": "森林提供隐蔽处，开阔草地和灌木丛提供植物食物，一些沿海种群还会在有鲑鱼的河流中觅食。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "植物根茎",
      "浆果",
      "昆虫",
      "鱼类",
      "其他动物"
    ],
    "description": "棕熊是杂食动物，吃植物、浆果、昆虫和多种动物性食物。具体食谱随地区和季节变化，不能用捕鲑鱼的场景代表所有棕熊。"
  },
  "tags": [
    "棕熊",
    "圆耳朵和大熊掌"
  ],
  "summary": "棕熊有圆耳朵、宽大脚掌和短尾巴，肩部肌肉隆起。毛色有深有浅，辨认时还要结合爪的长度和脸部轮廓。",
  "description": '棕熊是杂食动物，食物随地点和季节变化。许多个体冬天进入洞穴，靠积累的脂肪度过食物少的季节；幼崽由母熊照顾，逐渐学习找食物。',
  "storySections": [
    {
      key: 'body',
      label: '生活与认识',
      title: '圆耳朵，小尾巴',
      body: '棕熊有圆耳朵、宽大的脚掌和短尾巴。肩部隆起的肌肉、较长的爪和侧面略凹的脸部轮廓，能帮助我们认识它。棕熊的毛色有深有浅，单看“棕色”还不足以认出物种。',
    },
    {
      key: 'paws',
      label: '生活与认识',
      title: '前爪能挖土',
      body: '棕熊用有力的前肢和长爪拨开土壤，寻找根茎等食物。看挖土图时，可以沿着前腿找到爪子，再找脚下松开的泥土。',
    },
    {
      key: 'diet',
      label: '生活与认识',
      title: '今天吃什么',
      body: '棕熊会吃浆果、植物、昆虫，也会捕食或取食其他动物。一些沿海棕熊能利用洄游鲑鱼，内陆棕熊则会寻找当地能获得的食物。图集里的浆果和河流表现两种取食环境。',
    },
    {
      key: 'winter',
      label: '生活与认识',
      title: '冬天在洞穴里休息',
      body: '许多棕熊会进入洞穴冬眠，依靠先前积累的脂肪度过食物少的季节。冬眠长短因气候和地点而异，也有个体在冬季保持活动；它们并不是固定睡同样长的时间。',
    },
    {
      key: 'cubs',
      label: '生活与认识',
      title: '小熊跟着妈妈',
      body: '幼崽出生时很小，依靠母乳长大，之后跟随母熊活动。在草地上的母子图里，可以找找小熊的位置；母熊会带领幼崽寻找食物和躲避危险。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '给熊留下生活空间',
      body: '棕熊的全球 IUCN 等级为无危，但部分地区的种群仍受威胁。栖息地被分割、捕猎和人与熊的冲突会影响当地棕熊。保护连通的栖地、妥善存放食物和垃圾，有助于减少它们接近人类活动区。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '棕熊也不只有一种棕色',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Ursus arctos。不同棕熊毛色深浅不同，辨认时还要结合肩部肌肉隆起、较长的爪和侧面略凹的脸。冬眠长短随地点及气候变化，一些个体冬季仍保持活动。',
    },
  ],
  "keyFacts": [
    '有圆耳、宽掌和短尾，肩部肌肉隆起。',
    '有力前肢和长爪能挖土找食物。',
    '吃植物、浆果、昆虫和其他动物性食物。',
    '许多个体冬眠，长短随地点与气候变化。',
    '幼崽吃奶成长，再跟随母熊活动。',
  ],
  "threats": [
    "栖息地破碎化",
    "捕猎",
    "人熊冲突"
  ],
  "conservationActions": [
    "保护连通的栖息地",
    "妥善管理食物和垃圾",
    "监测局部种群"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "圆耳朵和大熊掌"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "植物根茎"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "森林、草甸与河谷"
    }
  ],
  "media": {
    "image": "./images/species/brown-bear/01-cover.webp",
    "alt": "棕熊与生活环境的全身场景",
    "focalPoint": {
      "x": 0.76,
      "y": 0.4
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/brown-bear/02-observation.webp",
        "alt": "棕熊站在林缘，圆耳朵、肩部隆起和宽大的脚掌可见",
        "title": "圆耳朵和宽熊掌",
        "caption": "AI 生成科学情景重建。棕熊站在林缘，圆耳朵、肩部隆起和宽大的脚掌可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/brown-bear/03-observation.webp",
        "alt": "棕熊用有长爪的前脚拨开松土",
        "title": "前爪挖一挖",
        "caption": "AI 生成科学情景重建。棕熊用有长爪的前脚拨开松土。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/brown-bear/04-observation.webp",
        "alt": "棕熊在灌木边取食浆果",
        "title": "灌木上的浆果",
        "caption": "AI 生成科学情景重建。棕熊在灌木边取食浆果。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/brown-bear/05-observation.webp",
        "alt": "棕熊站在浅河中低头寻找食物",
        "title": "浅河里的棕熊",
        "caption": "AI 生成科学情景重建。棕熊站在浅河中低头寻找食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/brown-bear/06-observation.webp",
        "alt": "一只棕熊幼崽跟随母熊走过草地",
        "title": "跟着妈妈走",
        "caption": "AI 生成科学情景重建。一只棕熊幼崽跟随母熊走过草地。",
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
      "title": "Animal Diversity Web — 棕熊分类、分布与全球等级",
      "url": "https://animaldiversity.org/accounts/Ursus_arctos/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-10"
    },
    {
      "title": "U.S. National Park Service — 棕熊食物、冬眠与育幼",
      "url": "https://www.nps.gov/subjects/bears/brown-bears.htm",
      "kind": "ecology",
      "accessedAt": "2026-09-10"
    },
    {
      "title": "Animal Diversity Web — 棕熊保护状态",
      "url": "https://animaldiversity.org/accounts/Ursus_arctos/#conservation",
      "kind": "conservation",
      "accessedAt": "2026-09-10"
    },
    {
      title: 'GBIF：Ursus arctos 的命名作者与年份',
      url: 'https://www.gbif.org/species/2433433',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-10",
  "updatedAt": "2026-09-10"
} as const satisfies Species;

export default profile;
