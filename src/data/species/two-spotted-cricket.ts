import type { Species } from '../../types/species.ts';

const profile = {
  "id": "two-spotted-cricket",
  "slug": "two-spotted-cricket",
  "names": {
    "zh": "双斑蟋蟀",
    "en": "Two-spotted Cricket",
    "aliases": []
  },
  "scientificName": "Gryllus bimaculatus",
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
      "scientificName": "Orthoptera",
      "zhName": "直翅目"
    },
    "family": {
      "scientificName": "Gryllidae",
      "zhName": "蟋蟀科"
    },
    "genus": {
      "scientificName": "Gryllus",
      "zhName": "蟋蟀属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危（欧洲）",
      "en": "Least Concern (Europe)"
    },
    "trend": "unknown",
    "assessor": "IUCN 欧洲区域评估；独立评估日期未核实"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲",
      "非洲",
      "欧洲"
    ],
    "regions": [
      "温暖草地与地表缝隙"
    ],
    "countries": [
      "中国",
      "印度",
      "南非",
      "西班牙"
    ],
    "range": "分布于非洲、亚洲及南欧等温暖地区，常在草地、农田边缘和石块缝隙活动。人工饲养地不直接代表野生分布。",
    "center": {
      "lat": 24,
      "lng": 105
    }
  },
  "habitats": [
    {
      "name": "温暖草地与地表缝隙",
      "realm": "terrestrial",
      "description": '在温暖草地、农田边缘和地表缝隙活动，石块、落叶与草丛提供白天的隐蔽处。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "metrics": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "植物碎片",
      "种子",
      "小型无脊椎动物",
      "动物残体"
    ],
    "description": "会取食植物性和动物性食物，是地表活动的杂食昆虫。"
  },
  "activity": [
    "夜间活动"
  ],
  "tags": [
    "前腿听声",
    "温暖草地与地表缝隙"
  ],
  "summary": "雄性双斑蟋蟀用前翅相互摩擦发声，接收声音的鼓膜器官却长在前腿胫节上。名字里的“双斑”指前翅基部附近的一对浅色斑。",
  "description": "双斑蟋蟀有深色身体、细长触角和发达的后腿，常在隐蔽处鸣叫。雄虫的鸣声用于求偶和同类交流；听见声音时，未必能从草丛里找到发声者。",
  "storySections": [
    {
      key: 'identity',
      label: '一对浅斑',
      title: '先找前翅基部的浅色斑',
      body: '双斑蟋蟀的身体多为深色，前翅基部附近有两个浅色斑。它用后腿跳跃，用长触角探索近处环境；鉴定仍需结合体形、翅和其他形态，不能只数斑点。',
    },
    {
      key: 'song',
      label: '前翅发声',
      title: '鸣叫来自两片前翅',
      body: '雄虫抬起前翅并反复开合，让一侧翅上的音锉与另一侧的刮片摩擦。呼唤、求偶和争斗时的鸣声有不同节奏，不是用后腿摩擦翅膀制造同一种声音。',
    },
    {
      key: 'hearing',
      label: '鼓膜在前腿',
      title: '用腿接收声音',
      body: '双斑蟋蟀的听觉鼓膜器官位于前腿胫节，雄雌都能接收声音。雌虫可以沿着雄虫的鸣声寻找配偶；耳朵的位置不在头部，也不是人类外耳那样的结构。',
    },
    {
      key: 'food',
      label: '地表觅食',
      title: '植物与小动物都能吃',
      body: '双斑蟋蟀利用地表的植物碎片和动物性食物。白天可躲入石下或缝隙，夜间外出取食；人工饲养的食物配方不等于野外只吃同一种饲料。',
    },
    {
      key: 'life',
      label: '不完全变态',
      title: '若虫逐次长出成虫的翅',
      body: '卵孵化后出现若虫，它已经有触角和三对足，却没有完整成翅。若虫经历多次蜕皮后成为成虫，中间没有蜜蜂和甲虫那样的蛹期。',
    },
    {
      key: 'conservation',
      label: '区域评估',
      title: '欧洲的记录有范围',
      body: 'IUCN 欧洲直翅目红色名录将本种列为欧洲区域无危。全球评估、独立评估日期和全球趋势尚未核实。保留草地和地表隐蔽处，有助于维持当地生境。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '名字里的“双斑”就在前翅旁',
      body: 'De Geer 于 1773 年描述了这个物种，现用学名为 Gryllus bimaculatus。前翅基部附近的一对浅色斑，让“双斑”这个名称容易对应外形。更特别的是，雄虫用前翅摩擦发声，而雌雄接收声音的鼓膜器官都长在前腿胫节上。',
    },
  ],
  "keyFacts": [
    '前翅基部附近有一对浅色斑。',
    '雄虫通过前翅上的音锉与刮片摩擦发声。',
    '听觉鼓膜器官位于前腿胫节，雌雄都能听到声音。',
    '吃植物碎片和动物性食物。',
    '若虫经过多次蜕皮成为成虫，没有蛹期。',
  ],
  "threats": [
    "局部草地清除和杀虫剂使用。"
  ],
  "conservationActions": [
    "保留草地边缘和地表隐蔽物。",
    "不向野外释放饲养蟋蟀。"
  ],
  "featuredStats": [
    {
      "key": "trait",
      "label": "观察重点",
      "value": "前腿听声"
    },
    {
      "key": "development",
      "label": "发育方式",
      "value": "不完全变态"
    }
  ],
  "sources": [
    {
      "title": "Orthoptera Species File — 双斑蟋蟀",
      "url": "https://orthoptera.speciesfile.org/otus/829311",
      "kind": "taxonomy",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "Journal of Insect Physiology — 前翅运动与鸣声",
      "url": "https://www.sciencedirect.com/science/article/pii/S0022191021001098",
      "kind": "ecology",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "双斑蟋蟀鼓膜器官研究",
      "url": "https://pubmed.ncbi.nlm.nih.gov/30828748/",
      "kind": "ecology",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "Nature Communications — 蟋蟀翅的发育",
      "url": "https://www.nature.com/articles/s41467-022-28624-x",
      "kind": "ecology",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "IUCN — 欧洲直翅目红色名录",
      "url": "https://portals.iucn.org/library/sites/library/files/documents/rl-4-021.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-08"
    },
    {
      title: 'GBIF：Gryllus bimaculatus 的命名作者与年份',
      url: 'https://www.gbif.org/species/1713034',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "media": {
    "image": "./images/species/two-spotted-cricket/01-cover.webp",
    "alt": "双斑蟋蟀位于画面右侧，完整主体周围保留环境。",
    "focalPoint": {
      "x": 0.81,
      "y": 0.23
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/two-spotted-cricket/02-body.webp",
        "title": "雄虫外形近景",
        "alt": '近景显示前翅基部浅色斑和后腿；一根触角延伸到画面之外。',
        "caption": "近景显示前翅基部浅色斑和后腿；一根触角延伸到画面之外。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/two-spotted-cricket/03-detail.webp",
        "title": "前腿胫节细节",
        "alt": '听觉器官位于前腿胫节；图像只能展示外部情景，不能代替显微解剖。',
        "caption": "听觉器官位于前腿胫节；图像只能展示外部情景，不能代替显微解剖。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/two-spotted-cricket/04-behavior.webp",
        "title": "雄虫抬翅鸣叫",
        "alt": '雄虫抬起前翅，通过两翅摩擦产生鸣声。',
        "caption": "雄虫抬起前翅，通过两翅摩擦产生鸣声。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/two-spotted-cricket/05-life.webp",
        "title": "尚未长成翅的若虫",
        "alt": '成虫与具有短翅芽的若虫并列展示；若虫经蜕皮长大，不经历蛹期，也不表示成虫会照料它。',
        "caption": "成虫与具有短翅芽的若虫并列展示；若虫经蜕皮长大，不经历蛹期，也不表示成虫会照料它。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/two-spotted-cricket/06-habitat.webp",
        "title": "草地与地表藏身处",
        "alt": '草丛、落叶和地表缝隙为蟋蟀提供藏身处。',
        "caption": "草丛、落叶和地表缝隙为蟋蟀提供藏身处。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      }
    ]
  },
  "featured": true,
  "publishedAt": "2026-09-08",
  "updatedAt": "2026-09-08"
} as const satisfies Species;

export default profile;
