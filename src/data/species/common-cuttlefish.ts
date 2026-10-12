import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-sepia-officinalis",
  "slug": "common-cuttlefish",
  "names": {
    "zh": "普通乌贼",
    "en": "Common Cuttlefish",
    "aliases": [
      "欧洲乌贼",
      "欧洲墨鱼"
    ]
  },
  "scientificName": "Sepia officinalis",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Mollusca",
      "zhName": "软体动物门"
    },
    "class": {
      "scientificName": "Cephalopoda",
      "zhName": "头足纲"
    },
    "order": {
      "scientificName": "Sepiida",
      "zhName": "乌贼目"
    },
    "family": {
      "scientificName": "Sepiidae",
      "zhName": "乌贼科"
    },
    "genus": {
      "scientificName": "Sepia",
      "zhName": "乌贼属"
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
    "assessor": "IUCN；来源与核实范围见保护章节"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "欧洲",
      "非洲"
    ],
    "regions": [
      "东北大西洋与地中海"
    ],
    "countries": [],
    "range": "分布于东北大西洋和地中海等海域，常在沙质或泥质海底活动，随季节进入近岸或较深水域。地图中心只标示英吉利海峡附近，不代表全部分布。",
    "center": {
      "lat": 49,
      "lng": -3
    }
  },
  "habitats": [
    {
      "name": "沿岸沙泥海底",
      "realm": "marine",
      "description": '在沿岸沙质或泥质海底活动，随季节利用近岸和较深水域，在水下植物等物体上附卵。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "甲壳动物",
      "小鱼",
      "其他小型海洋动物"
    ],
    "description": "食物包括甲壳动物、小鱼、其他小型海洋动物。"
  },
  "tags": [
    "普通乌贼",
    "嘴边的腕足"
  ],
  "summary": "普通乌贼有八条腕和两条较长的捕食触手。触手平时可以收起，捕食时伸出，身体两侧还有薄薄的鳍。",
  "description": '普通乌贼有大眼睛，瞳孔可呈 W 形。眼睛后方的外套膜包着内脏，体内乌贼骨帮助支撑和调节浮力；皮肤能变色、改变纹理来接近周围背景。',
  "storySections": [
    {
      key: 'arms',
      label: '生活与认识',
      title: '八条腕和两条触手',
      body: '普通乌贼有八条腕，另有两条较长的捕食触手。触手平时可以收起，捕食时伸出；图中的休息姿势不一定能让你数齐。',
    },
    {
      key: 'eye',
      label: '生活与认识',
      title: '眼睛旁边找花纹',
      body: '它有大眼睛，瞳孔可呈 W 形。眼睛前方是腕，后方是包着内脏的外套膜；看侧面图，先分清头和身体的位置。',
    },
    {
      key: 'camouflage',
      label: '生活与认识',
      title: '在沙地上找乌贼',
      body: '普通乌贼能改变皮肤颜色和纹理，减少身体与背景的差别。图集分别重建了斑驳和浅色外观，真实变色过程需要连续观察。',
    },
    {
      key: 'fins',
      label: '生活与认识',
      title: '身体两侧有薄鳍',
      body: '沿着椭圆形外套膜的边缘，可以找到薄薄的鳍。它能用鳍的波动游动，也能喷水推进；静态图只展示鳍的形状。',
    },
    {
      key: 'eggs',
      label: '生活与认识',
      title: '海草上挂着卵',
      body: '雌乌贼把卵附在海草等水下物体上，卵常带深色外被，成簇看起来像小葡萄。它的体内还有支持和调节浮力的乌贼骨，外面看不到硬壳。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '留下产卵的地方',
      body: '普通乌贼的全球 IUCN 等级为无危，全球种群趋势尚未确认。捕捞和产卵栖地受损仍影响局部种群，近岸水下植被提供产卵地点。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '身体里藏着乌贼骨',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Sepia officinalis。普通乌贼外面看不到硬壳，体内却有帮助支撑和调节浮力的乌贼骨。雌性把深色卵成簇附在海草等物体上，形状像一串小葡萄。',
    },
  ],
  "keyFacts": [
    '有八条腕和两条可收回的捕食触手。',
    '大眼睛的瞳孔可呈 W 形。',
    '皮肤能改变颜色和纹理。',
    '用薄鳍波动游动，也能喷水推进。',
    '深色卵成簇附着在海草等物体上。',
  ],
  "threats": [
    "捕捞压力",
    "产卵栖地受损"
  ],
  "conservationActions": [
    "保护近岸产卵栖地",
    "减少幼体混获"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "嘴边的腕足"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "甲壳动物"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "沿岸沙泥海底"
    }
  ],
  "media": {
    "image": "./images/species/common-cuttlefish/01-cover.webp",
    "alt": "普通乌贼与周围生活环境的全身场景",
    "focalPoint": {
      "x": 0.78,
      "y": 0.35
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-cuttlefish/02-observation.webp",
        "alt": "普通乌贼在沙底上方悬停，腕聚在头前，两侧薄鳍可见",
        "title": "嘴边的腕",
        "caption": "AI 生成科学情景重建。普通乌贼在沙底上方悬停，腕聚在头前，两侧薄鳍可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-cuttlefish/03-observation.webp",
        "alt": "普通乌贼眼睛和头部近景，瞳孔呈 W 形",
        "title": "W 形瞳孔",
        "caption": "AI 生成科学情景重建。普通乌贼眼睛和头部近景，瞳孔呈 W 形。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-cuttlefish/04-observation.webp",
        "alt": "普通乌贼以浅色斑驳外形停在沙底附近",
        "title": "沙地上的伪装",
        "caption": "AI 生成科学情景重建。普通乌贼以浅色斑驳外形停在沙底附近。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-cuttlefish/05-observation.webp",
        "alt": "普通乌贼侧身游动，外套膜边缘的鳍呈波纹状",
        "title": "薄鳍的波纹",
        "caption": "AI 生成科学情景重建。普通乌贼侧身游动，外套膜边缘的鳍呈波纹状。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-cuttlefish/06-observation.webp",
        "alt": "普通乌贼深色的卵成簇附着在海草上",
        "title": "海草上的卵",
        "caption": "AI 生成科学情景重建。普通乌贼深色的卵成簇附着在海草上。",
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
      "title": "Animal Diversity Web — Sepia officinalis 形态与生活",
      "url": "https://animaldiversity.org/accounts/Sepia_officinalis/",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Animal Diversity Web — Sepia officinalis 分类归属",
      "url": "https://animaldiversity.org/accounts/Sepia_officinalis/#classification",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "MarLIN — 普通乌贼生态与全球等级",
      "url": "https://www.marlin.ac.uk/species/detail/1098",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      title: 'GBIF：Sepia officinalis 的命名作者与年份',
      url: 'https://www.gbif.org/species/2290849',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-09",
  "updatedAt": "2026-09-09"
} as const satisfies Species;

export default profile;
