import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-cavia-porcellus",
  "slug": "guinea-pig",
  "names": {
    "zh": "豚鼠",
    "en": "Guinea Pig",
    "aliases": [
      "天竺鼠"
    ]
  },
  "scientificName": "Cavia porcellus",
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
      "scientificName": "Rodentia",
      "zhName": "啮齿目"
    },
    "family": {
      "scientificName": "Caviidae",
      "zhName": "豚鼠科"
    },
    "genus": {
      "scientificName": "Cavia",
      "zhName": "豚鼠属"
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
    "assessor": '家养豚鼠的全球保护评估尚未确认；野生近缘种需分别看待。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "南美洲"
    ],
    "countries": [],
    "regions": [
      "起源于南美洲的驯养动物"
    ],
    "range": '豚鼠起源于南美洲，现由人类在世界多地饲养。地图表示驯养起源地区，野生近缘种各有自己的分布。',
    "center": {
      "lat": -15,
      "lng": -70
    }
  },
  "habitats": [
    {
      "realm": "terrestrial",
      "name": "人类提供的草料与遮蔽环境",
      "description": "豚鼠会利用遮蔽物休息和躲藏。图里的木屋属于人类提供的饲养环境，不是它自己建造的房子。",
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 20,
      "max": 25,
      "unit": "cm",
      "note": "Smithsonian 给出的驯养豚鼠一般体长范围；品种和个体存在差别。"
    },
    "weight": {
      "min": 700,
      "max": 1100,
      "unit": "g",
      "note": "驯养个体的一般范围。"
    }
  },
  "metrics": {
    "adultLengthCm": [
      20,
      25
    ],
    "adultMassKg": [
      0.7,
      1.1
    ]
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草",
      "干草",
      "其他植物性食物"
    ],
    "description": '豚鼠吃草等植物性食物，图集展示它咬住干草的姿势；这组图片只呈现部分食物。'
  },
  "tags": [
    "豚鼠",
    "小短腿和胡须"
  ],
  "summary": "豚鼠是身体圆、腿短的啮齿动物，没有外露的尾巴。它用嘴咬住草叶咀嚼，圆钝的鼻子旁长着胡须。",
  "description": '豚鼠起源于南美洲，是人类驯养的啮齿动物。它有圆钝鼻子、小耳朵和长胡须，喜欢利用遮蔽物休息，也会与同伴用声音和动作交流。',
  "storySections": [
    {
      key: 'body',
      label: '生活与认识',
      title: '圆身体下面有短腿',
      body: '豚鼠身体圆，腿短，没有外露的尾巴。它属于啮齿动物，与猪并不是同一类动物。',
    },
    {
      key: 'whiskers',
      label: '生活与认识',
      title: '鼻子旁边长着胡须',
      body: '豚鼠的圆钝鼻子旁长着胡须，头部两侧是小耳朵。近景适合观察这些结构。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '低头咬住草叶',
      body: '豚鼠用嘴咬下草等植物性食物，再咀嚼。观察图里的草茎，可以沿着草找到嘴巴的位置。',
    },
    {
      key: 'company',
      label: '生活与认识',
      title: '和同伴待在一起',
      body: '豚鼠是社会性动物，会用声音和身体动作交流。图片展示两只豚鼠相伴，毛色不同并不意味着它们属于不同物种。',
    },
    {
      key: 'shelter',
      label: '生活与认识',
      title: '在遮蔽物旁活动',
      body: '豚鼠会利用遮蔽物休息和躲藏。图里的木屋属于人类提供的饲养环境，不是它自己建造的房子。',
    },
    {
      key: 'domestic',
      label: '生活与认识',
      title: '这是人类驯养的豚鼠',
      body: 'Cavia porcellus 是人类驯养的豚鼠，按未评估收录。野生豚鼠近缘种是不同物种，需要各自的保护评估。家养豚鼠应继续获得照顾，避免放到野外。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '名字像猪，分类属于啮齿动物',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Cavia porcellus。豚鼠是南美洲起源的驯养啮齿动物，与猪属于不同类群。它没有外露尾巴，会用声音和身体动作与同伴交流，也会利用人类提供的遮蔽物休息。',
    },
  ],
  "keyFacts": [
    '身体圆、腿短，没有外露尾巴。',
    '鼻子圆钝，旁边长着胡须。',
    '吃草等植物性食物。',
    '与同伴通过声音和身体动作交流。',
    '会利用人类提供的遮蔽物休息。',
  ],
  "threats": [
    "遗弃和不合适的饲养条件会伤害个体；这不是野生种群灭绝风险评估。"
  ],
  "conservationActions": [
    "照顾驯养动物，不遗弃、不放生。"
  ],
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "小短腿和胡须"
    },
    {
      "key": "food",
      "label": "主要食物",
      "value": "草"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "人类提供的草料与遮蔽环境"
    }
  ],
  "sources": [
    {
      "title": "Smithsonian National Zoo — 豚鼠形态、驯化与生活",
      "url": "https://nationalzoo.si.edu/animals/guinea-pig",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "NCBI Taxonomy — Cavia porcellus 分类",
      "url": "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=10141",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Smithsonian National Zoo — 豚鼠驯养身份与保护说明",
      "url": "https://nationalzoo.si.edu/animals/guinea-pig#conservation",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      title: 'GBIF：Cavia porcellus 的命名作者与年份',
      url: 'https://www.gbif.org/species/5219702',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "media": {
    "image": "./images/species/guinea-pig/01-cover.webp",
    "alt": "豚鼠的完整身体位于画面右侧。",
    "focalPoint": {
      "x": 0.81,
      "y": 0.33
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/guinea-pig/02-observation.webp",
        "title": "圆身体下面有短腿",
        "alt": "短毛豚鼠站在草地上，身体下方可见短腿。",
        "caption": "短毛豚鼠站在草地上，身体下方可见短腿。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/guinea-pig/03-observation.webp",
        "title": "鼻子旁边长着胡须",
        "alt": "近看豚鼠的小耳朵、鼻子和长胡须。",
        "caption": "近看豚鼠的小耳朵、鼻子和长胡须。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/guinea-pig/04-observation.webp",
        "title": "低头咬住草叶",
        "alt": "豚鼠在饲养环境中咬住干草。",
        "caption": "豚鼠在饲养环境中咬住干草。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/guinea-pig/05-observation.webp",
        "title": "和同伴待在一起",
        "alt": "两只不同毛色的豚鼠在木制遮蔽物旁休息。",
        "caption": "两只不同毛色的豚鼠在木制遮蔽物旁休息。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/guinea-pig/06-observation.webp",
        "title": "在遮蔽物旁活动",
        "alt": "豚鼠从木制遮蔽物旁走到铺有干草的地面。",
        "caption": "豚鼠从木制遮蔽物旁走到铺有干草的地面。",
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
