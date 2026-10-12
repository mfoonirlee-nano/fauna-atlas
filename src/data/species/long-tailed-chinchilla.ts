import type { Species } from '../../types/species.ts';

const profile = {
  "id": "long-tailed-chinchilla",
  "slug": "long-tailed-chinchilla",
  "names": {
    "zh": "毛丝鼠",
    "en": "Long-tailed Chinchilla",
    "aliases": [
      "长尾毛丝鼠",
      "龙猫"
    ]
  },
  "scientificName": "Chinchilla lanigera",
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
      "scientificName": "Chinchillidae",
      "zhName": "毛丝鼠科"
    },
    "genus": {
      "scientificName": "Chinchilla",
      "zhName": "毛丝鼠属"
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
    "assessor": "IUCN（由 San Diego Zoo 转引）"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "南美洲"
    ],
    "regions": [
      "智利岩石灌丛地带"
    ],
    "countries": [
      "智利"
    ],
    "range": "野生长尾毛丝鼠原生于智利，生活在干燥、岩石较多的灌丛环境，利用岩缝等空间藏身。地图只给出智利中北部的粗略代表位置，不标出小种群地点；饲养个体的分布不属于野生范围。",
    "center": {
      "lat": -31,
      "lng": -71
    }
  },
  "habitats": [
    {
      "name": "干燥岩地与灌丛",
      "realm": "terrestrial",
      "description": "岩石间的缝隙提供躲藏空间，稀疏植物提供食物，地面细尘可用于清洁浓密的皮毛。",
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 23,
      "max": 36,
      "unit": "cm",
      "note": "Smithsonian 所列身体长度，不含另计约 7–15 厘米的尾巴。"
    }
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草",
      "叶片",
      "种子",
      "根茎"
    ],
    "description": "毛丝鼠主要取食植物，包括草、叶片、种子和根茎。饲养环境中的专用饲料不用于描述其野生食谱。"
  },
  "tags": [
    "毛丝鼠",
    "在细尘中翻滚"
  ],
  "summary": "长尾毛丝鼠有浓密的灰毛、大圆耳和蓬松尾巴，会在细尘里翻滚。它的后腿比前腿发达，能在岩石间移动和跳跃。",
  "description": '长尾毛丝鼠主要吃植物，用前脚扶住食物、门齿啃食。野生个体常夜间活动，利用干燥岩地的缝隙藏身；另有短尾毛丝鼠，是不同物种。',
  "storySections": [
    {
      key: 'fur',
      label: '生活与认识',
      title: '大耳朵，厚毛衣',
      body: '长尾毛丝鼠有大大的圆耳朵、长胡须和蓬松的尾巴，灰色皮毛十分浓密。它的后腿比前腿发达，能在岩石间移动和跳跃。',
    },
    {
      key: 'dust-bath',
      label: '生活与认识',
      title: '在细尘里滚一滚',
      body: '毛丝鼠会在细尘中翻滚，清洁皮毛。先看侧过身体的姿势，再看翻滚时弯起的四肢和扬起的尘土。两张图是分别生成的姿势示意，不是同一只毛丝鼠的一段连续实拍。',
    },
    {
      key: 'feeding',
      label: '生活与认识',
      title: '小前脚扶住食物',
      body: '毛丝鼠用灵活的前脚抓握食物，再用门齿啃食。它主要吃植物。观察取食图，可以找找前脚扶着的草茎，再看嘴巴靠近哪一端。',
    },
    {
      key: 'rocks',
      label: '生活与认识',
      title: '岩缝旁边躲一躲',
      body: '野生毛丝鼠利用干燥岩地的缝隙藏身，常在夜间活动。岩缝附近如果还有植物和可通行的地面，它就能从躲藏处出来寻找食物。',
    },
    {
      key: 'identity',
      label: '生活与认识',
      title: '这里认识长尾毛丝鼠',
      body: '这份档案对应 Chinchilla lanigera，也叫长尾毛丝鼠。日常说的“龙猫”常指饲养的毛丝鼠，但它并不是猫。另有短尾毛丝鼠 Chinchilla chinchilla，不能把两种动物的野生分布和保护资料混在一起。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '野外的毛丝鼠仍然稀少',
      body: '长尾毛丝鼠的全球 IUCN 等级为濒危。历史上的皮毛捕猎使野生种群大幅减少，栖息地损失也会影响它们。饲养个体常见不等于野生种群安全；保护原生栖地并减少捕猎，才有助于野外的毛丝鼠。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“龙猫”其实是毛丝鼠',
      body: 'Bennett 于 1829 年描述了这个物种，现用学名为 Chinchilla lanigera。日常所说“龙猫”常指饲养的毛丝鼠，它属于啮齿动物。长尾毛丝鼠与短尾毛丝鼠是不同物种，浓密毛皮需要通过细尘中翻滚来清洁。',
    },
  ],
  "keyFacts": [
    '圆耳朵大，灰色皮毛浓密，尾巴蓬松。',
    '在细尘中翻滚清洁皮毛。',
    '用前脚抓住植物，再用门齿啃食。',
    '常夜间活动，利用岩缝躲藏。',
    '属于长尾毛丝鼠，与短尾毛丝鼠不同。',
  ],
  "threats": [
    "皮毛捕猎",
    "栖息地丧失与退化"
  ],
  "conservationActions": [
    "保护智利原生岩地灌丛",
    "防止非法捕猎",
    "监测野生种群"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "在细尘中翻滚"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "草"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "干燥岩地与灌丛"
    }
  ],
  "media": {
    "image": "./images/species/long-tailed-chinchilla/01-cover.webp",
    "alt": "毛丝鼠与生活环境的全身场景",
    "focalPoint": {
      "x": 0.84,
      "y": 0.34
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/long-tailed-chinchilla/02-observation.webp",
        "alt": "毛丝鼠坐在岩石上，圆耳朵、长胡须和蓬松尾巴清楚可见",
        "title": "大耳朵和毛尾巴",
        "caption": "AI 生成科学情景重建。毛丝鼠坐在岩石上，圆耳朵、长胡须和蓬松尾巴清楚可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/long-tailed-chinchilla/03-observation.webp",
        "alt": "毛丝鼠在细尘中侧躺，开始翻滚清洁皮毛",
        "title": "先把身体侧过来",
        "caption": "AI 生成科学情景重建。毛丝鼠在细尘中侧躺，开始翻滚清洁皮毛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/long-tailed-chinchilla/04-observation.webp",
        "alt": "毛丝鼠在尘浴中翻滚，细尘扬起，四肢自然弯曲",
        "title": "在细尘里滚一滚",
        "caption": "AI 生成科学情景重建。毛丝鼠在尘浴中翻滚，细尘扬起，四肢自然弯曲。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/long-tailed-chinchilla/05-observation.webp",
        "alt": "毛丝鼠用前脚扶住植物，低头啃食",
        "title": "前脚抱着草茎",
        "caption": "AI 生成科学情景重建。毛丝鼠用前脚扶住植物，低头啃食。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/long-tailed-chinchilla/06-observation.webp",
        "alt": "毛丝鼠停在岩缝入口旁，周围是干燥石地和灌木",
        "title": "岩缝旁的住处",
        "caption": "AI 生成科学情景重建。毛丝鼠停在岩缝入口旁，周围是干燥石地和灌木。",
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
      "title": "Smithsonian National Zoo — 长尾毛丝鼠分类、体型与野生生活",
      "url": "https://www.nationalzoo.si.edu/animals/long-tailed-chinchilla",
      "kind": "taxonomy",
      "accessedAt": "2026-09-10"
    },
    {
      "title": "San Diego Zoo — 毛丝鼠尘浴与两种毛丝鼠的区别",
      "url": "https://animals.sandiegozoo.org/animals/chinchilla",
      "kind": "ecology",
      "accessedAt": "2026-09-10"
    },
    {
      "title": "Smithsonian National Zoo — 长尾毛丝鼠保护",
      "url": "https://www.nationalzoo.si.edu/animals/long-tailed-chinchilla#conservation",
      "kind": "conservation",
      "accessedAt": "2026-09-10"
    },
    {
      "title": "San Diego Zoo — 长尾与短尾毛丝鼠全球等级",
      "url": "https://animals.sandiegozoo.org/animals/chinchilla",
      "kind": "conservation",
      "accessedAt": "2026-09-10"
    },
    {
      title: 'GBIF：Chinchilla lanigera 的命名作者与年份',
      url: 'https://www.gbif.org/species/5219944',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-10",
  "updatedAt": "2026-09-10"
} as const satisfies Species;

export default profile;
