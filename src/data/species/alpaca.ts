import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-vicugna-pacos",
  "slug": "alpaca",
  "names": {
    "zh": "羊驼",
    "en": "Alpaca",
    "aliases": [
      "Lama pacos"
    ]
  },
  "scientificName": "Vicugna pacos",
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
      "scientificName": "Artiodactyla",
      "zhName": "偶蹄目"
    },
    "family": {
      "scientificName": "Camelidae",
      "zhName": "骆驼科"
    },
    "genus": {
      "scientificName": "Vicugna",
      "zhName": "小羊驼属"
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
    "assessor": "Mammal Diversity Database（家养类群，未评估）"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "南美洲"
    ],
    "countries": [
      "秘鲁",
      "玻利维亚"
    ],
    "regions": [
      "安第斯山区（驯养起源地区）"
    ],
    "range": "羊驼是安第斯地区驯养的动物，如今世界多地有人饲养。这里的地图表示驯养起源地区，并非现存野生分布。",
    "center": {
      "lat": -15,
      "lng": -70
    }
  },
  "habitats": [
    {
      "name": "山地牧场",
      "description": "人类在安第斯高地及其他地区的牧场饲养羊驼。",
      "realm": "terrestrial",
      "isPrimary": true
    }
  ],
  "measurements": {
    "weight": {
      "min": 45,
      "max": 90,
      "unit": "kg",
      "note": "Smithsonian 所列成年羊驼范围。"
    }
  },
  "metrics": {
    "adultMassKg": [
      45,
      90
    ]
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草",
      "干草"
    ],
    "description": "草、干草是它的食物。"
  },
  "activity": [
    "日间取食"
  ],
  "tags": [
    "长脖子",
    "毛茸茸"
  ],
  "summary": "羊驼是人类驯养的骆驼科动物，脖子长，身上覆盖浓密的毛。它以草为食，常和同伴待在一起。",
  "description": '羊驼的毛纤维可用于纺织。华卡约型的毛蓬松，苏利型的毛束较长、向下垂；毛色和外观还随个体及剪毛情况变化。图集展示华卡约型。',
  "storySections": [
    {
      key: 'neck',
      label: '亲子观察',
      title: '从头指到长脖子',
      body: '先找小脑袋和尖耳朵，再沿着脖子指到毛茸茸的身体。羊驼有四条腿，脚下长着柔软的肉垫。',
    },
    {
      key: 'fleece',
      label: '生活与认识',
      title: '身上的毛可以剪下来',
      body: '牧民饲养羊驼，获取可用于纺织的毛纤维。华卡约型的毛蓬松，苏利型的毛束则较长、向下垂。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '长脖子低下去吃草',
      body: '羊驼在牧场低头吃草，人工饲养时也吃干草。看图时可以找找嘴巴碰到的草叶。',
    },
    {
      key: 'herd',
      label: '生活与认识',
      title: '和同伴待在一起',
      body: '羊驼是群居动物，需要同类陪伴。它们通过叫声和身体姿态交流；不要把耳朵或嘴角的形状直接解释成人的情绪。',
    },
    {
      key: 'young',
      label: '生活与认识',
      title: '小羊驼站在妈妈身边',
      body: '母羊驼通常一次产一仔。幼仔出生后依靠母乳成长，逐渐吃草；图中母仔的大小只用于观察，不作为精确比例尺。',
    },
    {
      key: 'identity',
      label: '生活与认识',
      title: '人类饲养的骆驼科动物',
      body: '羊驼属于人类驯养的骆驼科动物。GBIF 使用学名 Vicugna pacos，Mammal Diversity Database 与 Smithsonian 使用 Lama pacos，两种名称都指这里的羊驼。家养羊驼按未评估收录，野生小羊驼是另一个物种。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '一个家养动物的两个属名',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Vicugna pacos。GBIF 把羊驼放在 Vicugna 属，Mammal Diversity Database 与 Smithsonian 使用 Lama pacos。不同分类处理都指这种安第斯地区驯养动物；华卡约型与苏利型则是毛纤维形态不同的品种。',
    },
  ],
  "keyFacts": [
    "羊驼是家养的骆驼科动物。",
    "脖子长，身上有浓密毛纤维。",
    "脚下有肉垫。",
    "羊驼需要同类陪伴。",
    "地图标示驯养起源地区。"
  ],
  "threats": [
    "饲养中缺少同伴或照料不当会影响福利。"
  ],
  "conservationActions": [
    "支持负责任的饲养和牧场管理。",
    "参观时遵守饲养员引导，不追赶、不擅自投喂。"
  ],
  "featuredStats": [
    {
      "key": "0",
      "label": "观察重点",
      "value": "长脖子"
    },
    {
      "key": "1",
      "label": "身体特点",
      "value": "毛茸茸"
    },
    {
      "key": "2",
      "label": "成年体重",
      "value": "45–90 kg"
    }
  ],
  "sources": [
    {
      "title": "GBIF — 名称与分类归属",
      "url": "https://www.gbif.org/species/7515593",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Smithsonian National Zoo — 羊驼",
      "url": "https://www.nationalzoo.si.edu/animals/alpaca",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Mammal Diversity Database — Lama pacos 与家养身份",
      "url": "https://www.mammaldiversity.org/taxon/1006387/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    }
  ],
  "media": {
    "image": "./images/species/alpaca/01-cover.webp",
    "alt": "奶白色羊驼站在右侧山地牧场，长脖子和四条腿在画面内。",
    "focalPoint": {"x": 0.83, "y": 0.32},
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/alpaca/02-body.webp",
        "title": "从脖子找到脚",
        "alt": "奶白色羊驼侧身站立，长脖子、身体和四条腿清楚可见。",
        "caption": "奶白色羊驼侧身站立，长脖子、身体和四条腿清楚可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/alpaca/03-fleece.webp",
        "title": "看看蓬松的毛",
        "alt": "羊驼头颈近景展示尖耳朵和蓬松毛纤维。",
        "caption": "羊驼头颈近景展示尖耳朵和蓬松毛纤维。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/alpaca/04-grazing.webp",
        "title": "低头吃草",
        "alt": "羊驼弯下长脖子，在短草地取食。",
        "caption": "羊驼弯下长脖子，在短草地取食。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/alpaca/05-herd.webp",
        "title": "同伴有不同毛色",
        "alt": "三只不同毛色的羊驼站在牧场中。",
        "caption": "三只不同毛色的羊驼站在牧场中。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/alpaca/06-young.webp",
        "title": "妈妈和幼仔",
        "alt": "一只成年羊驼和一只较小的幼仔站在一起。",
        "caption": "一只成年羊驼和一只较小的幼仔站在一起。",
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
