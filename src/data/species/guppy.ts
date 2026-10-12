import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-poecilia-reticulata",
  "slug": "guppy",
  "names": {
    "zh": "孔雀鱼",
    "en": "Guppy",
    "aliases": [
      "虹鳉"
    ]
  },
  "scientificName": "Poecilia reticulata",
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
      "scientificName": "Cyprinodontiformes",
      "zhName": "鳉形目"
    },
    "family": {
      "scientificName": "Poeciliidae",
      "zhName": "花鳉科"
    },
    "genus": {
      "scientificName": "Poecilia",
      "zhName": "花鳉属"
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
    "assessedYear": 2020
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "南美洲",
      "北美洲"
    ],
    "regions": [
      "南美洲北部与加勒比海部分岛屿"
    ],
    "countries": [],
    "range": "原生范围包括南美洲北部与加勒比海部分岛屿，后来经人为引入扩散到许多地区。它主要生活在淡水，也能进入部分半咸水环境。地图只标示特立尼达附近的代表区域。",
    "center": {
      "lat": 10.5,
      "lng": -61.3
    }
  },
  "habitats": [
    {
      "name": "温暖的溪流与水草区",
      "realm": "freshwater",
      "description": '利用温暖溪流及其他水体，主要生活在淡水，也能进入部分半咸水。水草为幼鱼提供躲藏空间。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "max": 6,
      "unit": "cm",
      "note": "FishBase 记录的雌鱼最大标准长，不含尾鳍；不能作为成体常见长度范围。"
    }
  },
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "浮游动物",
      "小昆虫",
      "有机碎屑"
    ],
    "description": "食物包括浮游动物、小昆虫、有机碎屑。"
  },
  "tags": [
    "孔雀鱼",
    "扇形尾鳍"
  ],
  "summary": "观赏雄性孔雀鱼常有彩色的扇形尾鳍，颜色和尾形随品系而异。野生雄鱼的尾鳍通常没这么大，雌鱼往往体型更大、颜色较淡。",
  "description": '孔雀鱼的雌鱼往往更大、颜色较淡，雄鱼带彩斑，臀鳍形成交接器。雌鱼直接产下能游动的幼鱼，亲鱼不持续照料，还可能吃掉幼鱼。',
  "storySections": [
    {
      key: 'tail',
      label: '生活与认识',
      title: '小扇子是尾鳍',
      body: '图中的观赏雄鱼有展开的扇形尾鳍，鳍面带着斑点，里面能看到细细的鳍条。不同品系的颜色和尾形不同，不能把这条鱼当作所有孔雀鱼的样子。',
    },
    {
      key: 'varieties',
      label: '生活与认识',
      title: '野生鱼的尾巴小一些',
      body: '人们选育出许多观赏品系，放大了颜色和尾形的差别。野生雄鱼通常带有彩斑，尾鳍没有图中观赏品系那样夸张；雌鱼往往更大、颜色较淡。',
    },
    {
      key: 'sexes',
      label: '生活与认识',
      title: '看看两条鱼的差别',
      body: '野生型雌鱼通常比雄鱼大，颜色较淡。雄鱼臀鳍形成用于繁殖的交接器。比较时需要结合颜色、身体轮廓和鳍形。',
    },
    {
      key: 'stream',
      label: '生活与认识',
      title: '水草之间找食物',
      body: '孔雀鱼会吃浮游动物、小昆虫和有机碎屑。它们能生活在多种温暖水体中，水草为小鱼提供躲藏空间。图集分别展示野生型雌雄外形对照与观赏品系的水族环境。',
    },
    {
      key: 'young',
      label: '生活与认识',
      title: '出生就是会游的小鱼',
      body: '雌鱼产下能游动的幼鱼，小鱼会在水草间躲藏和活动。亲鱼没有持续照料幼鱼的行为，还可能把幼鱼当作食物。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '观赏鱼别放进河里',
      body: 'FishBase 收录的全球 IUCN 等级为无危，评估日期为 2020 年 5 月 18 日，全球种群趋势尚未确认。孔雀鱼在原生范围之外可能影响当地水生动物，家养个体不应随意放流。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '一条小鱼，许多观赏尾形',
      body: 'Peters 于 1859 年描述了这个物种，现用学名为 Poecilia reticulata。野生雄鱼带彩斑，尾鳍通常较小。人们通过选育放大颜色与尾形差异，形成许多观赏品系；这些差异仍在 Poecilia reticulata 这个物种内。',
    },
  ],
  "keyFacts": [
    '观赏雄鱼常有彩色扇形尾鳍。',
    '野生雄鱼的尾鳍通常较小。',
    '雌鱼往往更大、颜色较淡。',
    '吃浮游动物、小昆虫和有机碎屑。',
    '雌鱼直接产下能游动的幼鱼。',
  ],
  "threats": [
    "原生水体的栖地改变"
  ],
  "conservationActions": [
    "保护原生水体",
    "不把观赏鱼放流到自然水域"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "扇形尾鳍"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "浮游动物"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "温暖的溪流与水草区"
    }
  ],
  "media": {
    "image": "./images/species/guppy/01-cover.webp",
    "alt": "孔雀鱼与周围生活环境的全身场景",
    "focalPoint": {
      "x": 0.78,
      "y": 0.35
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/guppy/02-observation.webp",
        "alt": "水草缸中的观赏雄性孔雀鱼，尾鳍展开，带有橙色与深色斑点",
        "title": "观赏雄鱼的尾巴",
        "caption": "AI 生成科学情景重建。水草缸中的观赏雄性孔雀鱼，尾鳍展开，带有橙色与深色斑点。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/guppy/03-observation.webp",
        "alt": "孔雀鱼的扇形尾鳍与鳍条近景，展示观赏品系",
        "title": "尾鳍里的细线",
        "caption": "AI 生成科学情景重建。孔雀鱼的扇形尾鳍与鳍条近景，展示观赏品系。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/guppy/04-observation.webp",
        "alt": "野生型雄性孔雀鱼带彩色斑点，旁边的雌鱼较大且颜色较淡",
        "title": "野生型雌雄对照",
        "caption": "AI 生成科学情景重建。野生型雄性孔雀鱼带彩色斑点，旁边的雌鱼较大且颜色较淡。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/guppy/05-observation.webp",
        "alt": "一小群观赏孔雀鱼在水草间游动",
        "title": "水草间的鱼群",
        "caption": "AI 生成科学情景重建。一小群观赏孔雀鱼在水草间游动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/guppy/06-observation.webp",
        "alt": "孔雀鱼幼鱼在水草叶片间活动",
        "title": "水草间的小鱼",
        "caption": "AI 生成科学情景重建。孔雀鱼幼鱼在水草叶片间活动。",
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
      "title": "FishBase — 孔雀鱼分类、生活与全球等级",
      "url": "https://www.fishbase.se/Summary/Poecilia-reticulata",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "FishBase — 孔雀鱼分类归属",
      "url": "https://www.fishbase.se/Summary/Poecilia-reticulata.html",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      title: 'GBIF：Poecilia reticulata 的命名作者与年份',
      url: 'https://www.gbif.org/species/2350050',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-09",
  "updatedAt": "2026-09-09"
} as const satisfies Species;

export default profile;
