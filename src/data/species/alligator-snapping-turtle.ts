import type { Species } from '../../types/species.ts';

const profile = {
  "id": "alligator-snapping-turtle",
  "slug": "alligator-snapping-turtle",
  "names": {
    "zh": "大鳄龟",
    "en": "Alligator Snapping Turtle"
  },
  "scientificName": "Macrochelys temminckii",
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
      "scientificName": "Reptilia",
      "zhName": "爬行纲"
    },
    "order": {
      "scientificName": "Testudines",
      "zhName": "龟鳖目"
    },
    "family": {
      "scientificName": "Chelydridae",
      "zhName": "鳄龟科"
    },
    "genus": {
      "scientificName": "Macrochelys",
      "zhName": "大鳄龟属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "EN",
    "label": {
      "zh": "濒危",
      "en": "Endangered"
    },
    "trend": "unknown",
    "assessor": "依据所列资料的全球等级；独立评估日期未核实"
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "美国中部与东南部河流系统"
    ],
    "countries": [],
    "range": '原生于美国中部至东南部的河流系统。苏旺尼大鳄龟已列为另一物种，苏旺尼河种群分布另计。'
  },
  "habitats": [
    {
      "name": "河流、湖泊与沼泽",
      "realm": "freshwater",
      "description": '大鳄龟常停在河流、湖泊和沼泽底部，沉木与树根提供隐蔽位置。幼龟也利用有遮蔽的浅水。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "鱼类",
      "螯虾",
      "软体动物",
      "少量植物"
    ],
    "description": "取食鱼类、螯虾、软体动物、少量植物。"
  },
  "tags": [
    "大鳄龟",
    "龟壳上的三道棱"
  ],
  "summary": "大鳄龟头大、上喙弯曲，背甲有三道纵向隆起。它常待在水底，口内有一小段像虫子的舌部突起。",
  "description": '大鳄龟在水底等待，张开嘴摆动像虫子的舌部突起，吸引鱼靠近。弯曲上喙没有牙齿，头部周围有皮肤突起；幼龟也有背甲棱，在隐蔽浅水活动。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '龟壳上的三道棱',
      body: '背甲有三道纵向隆起，头很大。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '嘴里的小诱饵',
      body: '张口时摆动像虫子的舌部突起，吸引鱼靠近；诱饵是舌部的一部分。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '在沉木旁等待',
      body: '深色身体接近水底环境，它常在沉木或树根附近停留。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '弯弯的上喙',
      body: '上喙弯曲，头部周围有皮肤突起，嘴里没有牙齿。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '幼龟也有棱',
      body: '幼龟也有背甲棱和长尾，在有遮蔽的浅水处活动。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '留住它的生活环境',
      body: '所列资料记录的全球等级为濒危。保护河流与岸边植被、减少废弃钓线与渔具。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '嘴里的虫状诱饵',
      body: 'Troost 于 1835 年描述了这个物种，现用学名为 Macrochelys temminckii。大鳄龟张嘴等待时，能摆动虫状舌部突起来吸引鱼，这个诱饵属于身体的一部分。它与鳄龟分属不同属；近似的苏旺尼大鳄龟也已分开列为另一物种。',
    },
  ],
  "keyFacts": [
    '背甲有三道纵向隆起，头很大。',
    '张口时摆动像虫子的舌部突起，吸引鱼靠近；诱饵是舌部的一部分。',
    '深色身体接近水底环境，它常在沉木或树根附近停留。',
    '上喙弯曲，头部周围有皮肤突起，嘴里没有牙齿。',
    '幼龟也有背甲棱和长尾，在有遮蔽的浅水处活动。',
  ],
  "threats": [
    "非法捕捉",
    "渔具误捕",
    "栖息地退化"
  ],
  "conservationActions": [
    "保护河流与岸边植被",
    "减少废弃钓线与渔具"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "龟壳上的三道棱"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "河流、湖泊与沼泽"
    }
  ],
  "media": {
    "image": "./images/species/alligator-snapping-turtle/01-cover.webp",
    "alt": "大鳄龟的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/alligator-snapping-turtle/02-observation.webp",
        "title": "龟壳上的三道棱",
        "alt": '龟壳上的三道棱',
        "caption": "AI 生成科学情景重建。从头部朝尾巴方向看，背甲上排列着三道凸起的棱。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/alligator-snapping-turtle/03-observation.webp",
        "title": "嘴里的小诱饵",
        "alt": '嘴里的小诱饵',
        "caption": "AI 生成科学情景重建。它在水底张开嘴，摆动像小虫的舌部突起，吸引鱼靠近。那是身体的一部分。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/alligator-snapping-turtle/04-observation.webp",
        "title": "在沉木旁等待",
        "alt": '在沉木旁等待',
        "caption": "AI 生成科学情景重建。深色身体与水底环境接近。它常留在沉木或树根附近。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/alligator-snapping-turtle/05-observation.webp",
        "title": "弯弯的上喙",
        "alt": '弯弯的上喙',
        "caption": "AI 生成科学情景重建。看看弯曲的上喙和头部周围的皮肤突起。它的嘴没有牙齿。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/alligator-snapping-turtle/06-observation.webp",
        "title": "幼龟也有棱",
        "alt": '幼龟也有棱',
        "caption": "AI 生成科学情景重建。小大鳄龟的背甲上也有凸起，身后拖着长尾巴。它会在有遮蔽的浅水处活动。",
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
      "title": "美国鱼类与野生动物管理局：大鳄龟",
      "url": "https://www.fws.gov/species/alligator-snapping-turtle-macrochelys-temminckii",
      "kind": "ecology",
      "accessedAt": "2026-09-18"
    },
    {
      "title": "The Reptile Database：大鳄龟",
      "url": "https://reptile-database.reptarium.cz/Macrochelys/temminckii",
      "kind": "taxonomy",
      "accessedAt": "2026-09-18"
    },
    {
      "title": "IUCN 龟类专家组：2025 世界龟类名录",
      "url": "https://iucn-tftsg.org/wp-content/uploads/crm.10.checklist.atlas_.v10.2025.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-18"
    },
    {
      title: 'GBIF：Macrochelys temminckii 的命名作者与年份',
      url: 'https://www.gbif.org/species/5220318',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-18",
  "updatedAt": "2026-09-18"
} as const satisfies Species;

export default profile;
