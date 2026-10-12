import type { Species } from '../../types/species.ts';

const profile = {
  "id": "green-drake-mayfly",
  "slug": "green-drake-mayfly",
  "names": {
    "zh": "丹麦蜉蝣",
    "en": "Green Drake Mayfly"
  },
  "scientificName": "Ephemera danica",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Arthropoda",
      "zhName": "节肢动物门"
    },
    "class": {
      "scientificName": "Insecta",
      "zhName": "昆虫纲"
    },
    "order": {
      "scientificName": "Ephemeroptera",
      "zhName": "蜉蝣目"
    },
    "family": {
      "scientificName": "Ephemeridae",
      "zhName": "蜉蝣科"
    },
    "genus": {
      "scientificName": "Ephemera",
      "zhName": "蜉蝣属"
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
    "assessor": '尚未确认可引用的 IUCN 全球评估；“未评估”表示资料缺口，不能据此判断种群安全。地方记录或 NatureServe 等级不能代替 IUCN 全球等级。'
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "欧洲"
    ],
    "regions": [
      "欧洲淡水与河岸"
    ],
    "countries": [],
    "range": '这是欧洲物种，英国与德国有淡水记录。若虫栖于砂或砾石底的河流、溪流和湖泊，成虫在邻近岸边植被与水面上方活动。'
  },
  "habitats": [
    {
      "name": "砂砾底淡水与河岸",
      "realm": "freshwater",
      "description": '若虫在砂砾底掘穴，收集有机碎屑；羽化后，成虫在水边植被与水面上方活动。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "detritivore"
    ],
    "foods": [
      "若虫取食细颗粒有机碎屑"
    ],
    "description": '水生若虫从水流和沉积物收集细颗粒有机碎屑。有翅阶段不取食，使用若虫期积累的能量。'
  },
  "tags": [
    "丹麦蜉蝣",
    "砂砾底淡水与河岸"
  ],
  "summary": '丹麦蜉蝣的大部分生命在水中度过。有翅的亚成虫还会再蜕一次皮，才成为成熟成虫。',
  "description": '成虫身体细长，浅色腹部带褐色斑纹，尾端有三根长尾丝，休息时翅膀竖起。若虫在淡水底部掘穴取食，有翅阶段利用水生期积累的能量。',
  "storySections": [
    {
      key: 'appearance',
      label: '身体外观',
      title: '竖起的翅膀与三根尾丝',
      body: '有翅成虫身体细长，浅色腹部带褐色斑纹，尾端有三根长尾丝。亚成虫的翅膀较暗、不透明，成熟成虫的翅膀更透明。',
    },
    {
      key: 'habitat',
      label: '栖息环境',
      title: '水底掘穴，水边飞行',
      body: '欧洲河流、溪流和湖泊中的砂砾底供若虫生活，英国和德国有相关记录。成虫活动于邻近的岸边植被和水面上方。',
    },
    {
      key: 'feeding',
      label: '取食',
      title: '能量先在水中积累',
      body: '若虫收集细颗粒有机碎屑。有翅阶段不再取食。2018 年稳定同位素研究追踪若虫积累的营养如何分配到亚成虫的不同组织。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '长时间若虫，短时间成虫',
      body: '它经历卵、水生若虫、有翅亚成虫和成熟成虫。亚成虫还会再蜕皮。多数介绍记载生活史约两年，英国较暖水域可在一年完成；成虫期短，整段生命却远不止一天。',
    },
    {
      key: 'taxonomy',
      label: '分类归属',
      title: '蜉蝣目中的丹麦蜉蝣',
      body: '丹麦蜉蝣的学名为 Ephemera danica，属于昆虫纲、蜉蝣目和蜉蝣科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '地方记录与全球评估',
      body: '英国与德国的记录提供地方观察资料，尚未确认可引用的 IUCN 全球评估。“未评估”表示资料缺口。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '有翅之后，还要再蜕皮',
      body: 'Müller 于 1764 年描述了这个物种，现用学名为 Ephemera danica。丹麦蜉蝣属于蜉蝣目。“蜉蝣一生只有一天”的说法遗漏了较长的水生若虫期；它还有特殊的有翅亚成虫阶段，亚成虫会再蜕一次皮才成熟。2018 年营养研究追踪了这段转变中的能量分配。',
    },
  ],
  "keyFacts": [
    '休息时翅膀竖起，尾端有三根长尾丝。',
    '水生若虫掘穴，收集有机碎屑。',
    '有翅的亚成虫还会再蜕皮。',
    '有翅阶段不取食，利用先前积累的能量。',
    '生活史通常约两年，较暖水域可在一年完成。',
  ],
  "threats": [
    "水质污染与淡水生境改变"
  ],
  "conservationActions": [
    "保护河流与湖泊水质",
    "保留自然河岸植被"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "共读观察",
      "value": '三根尾丝、竖起的翅膀，以及水生若虫和有翅阶段的区别。'
    }
  ],
  "media": {
    "image": "./images/species/green-drake-mayfly/01-cover.webp",
    "alt": "丹麦蜉蝣及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/green-drake-mayfly/02-observation.webp",
        "title": "成虫与三根尾丝",
        "alt": '成虫与三根尾丝，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。有翅成虫侧面；细丝与足可能重叠，不用于精确结构计数。图像尺度未经实测，不能用于物种鉴定或判断连续动作。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/green-drake-mayfly/03-observation.webp",
        "title": "竖起的透明翅膀",
        "alt": '竖起的透明翅膀，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。成熟成虫；翅脉与斑纹为近似重建。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/green-drake-mayfly/04-observation.webp",
        "title": "砂砾底的水生若虫",
        "alt": '砂砾底的水生若虫，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。水生若虫，展示鳃与尾丝；没有成虫的展开翅膀。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/green-drake-mayfly/05-observation.webp",
        "title": "较暗翅膀的亚成虫",
        "alt": '较暗翅膀的亚成虫，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。有翅亚成虫，尚会再蜕皮；色调非诊断证据。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/green-drake-mayfly/06-observation.webp",
        "title": "河岸叶片上的成虫",
        "alt": '河岸叶片上的成虫，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。有翅成虫与河岸情景；静图不证明飞行或羽化。",
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
      "title": "GBIF：接受名称与分类链",
      "url": "https://www.gbif.org/species/5716472",
      "kind": "taxonomy",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "NatureSpot：实地记录、形态与生活史",
      "url": "https://www.naturespot.org/species/green-drake-mayfly",
      "kind": "general",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "原始研究：营养在亚成虫组织中的分配",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6295106/",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "NCBI：Ephemera danica 分类与基因组项目",
      "url": "https://www.ncbi.nlm.nih.gov/bioproject/171755",
      "kind": "taxonomy",
      "accessedAt": "2026-10-11"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-11",
  "updatedAt": "2026-10-11"
} as const satisfies Species;

export default profile;
