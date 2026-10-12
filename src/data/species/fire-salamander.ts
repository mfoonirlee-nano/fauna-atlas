import type { Species } from '../../types/species.ts';

const profile = {
  "id": "fire-salamander",
  "slug": "fire-salamander",
  "names": {
    "zh": "火蝾螈",
    "en": "Fire Salamander",
    "aliases": [
      "欧洲火蝾螈"
    ]
  },
  "scientificName": "Salamandra salamandra",
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
      "scientificName": "Amphibia",
      "zhName": "两栖纲"
    },
    "order": {
      "scientificName": "Caudata",
      "zhName": "有尾目"
    },
    "family": {
      "scientificName": "Salamandridae",
      "zhName": "蝾螈科"
    },
    "genus": {
      "scientificName": "Salamandra",
      "zhName": "火蝾螈属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "VU",
    "label": {
      "zh": "易危",
      "en": "Vulnerable"
    },
    "trend": "unknown",
    "assessor": "IUCN SSC Amphibian Specialist Group"
  },
  "distribution": {
    "realms": [
      "terrestrial",
      "freshwater"
    ],
    "continents": [
      "欧洲"
    ],
    "regions": [
      "欧洲中部、南部与西部"
    ],
    "countries": [
      "德国",
      "法国",
      "西班牙",
      "葡萄牙",
      "意大利",
      "希腊"
    ],
    "range": "分布于欧洲中部、南部与西部的适宜林地，从伊比利亚半岛延伸至巴尔干地区。这里采用 AMNH 的现行物种范围，不把已分为其他火蝾螈物种的北非和西亚种群并入。地图中心只代表欧洲中部。",
    "center": {
      "lat": 48,
      "lng": 10
    }
  },
  "habitats": [
    {
      "name": "湿润林地与林间溪流",
      "realm": "terrestrial",
      "description": "成体常在阴凉、潮湿的林地地表活动，利用落叶、腐木和石缝躲藏；许多种群的幼体在清洁的小溪或其他适宜水体中发育。",
      "isPrimary": true
    },
    {
      "name": "幼体发育水体",
      "realm": "freshwater",
      "description": "许多种群的幼体利用阴凉溪流或其他适宜的小型水体发育。"
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "蚯蚓",
      "蛞蝓",
      "昆虫"
    ],
    "description": "成体捕食蚯蚓、蛞蝓和昆虫等小型无脊椎动物；水中的幼体也捕食小型水生动物。"
  },
  "tags": [
    "火蝾螈",
    "黑底上的黄色花纹"
  ],
  "summary": "火蝾螈的黑色皮肤上有黄色斑块或条纹，每只的花纹并不相同。它身体细长，长大后仍保留长尾。",
  "description": '火蝾螈有四条短腿和长尾，皮肤需要保持湿润。它常在夜间或雨后活动，成体捕食蚯蚓、蛞蝓及昆虫，皮肤腺体还会产生防御分泌物。',
  "storySections": [
    {
      key: 'pattern',
      label: '生活与认识',
      title: '黑底上的黄色花纹',
      body: '火蝾螈的黑色皮肤上有黄色斑块或条纹。不同个体的花纹并不完全相同。它是一种身体细长、带有长尾的两栖动物。',
    },
    {
      key: 'movement',
      label: '生活与认识',
      title: '短腿撑起长身体',
      body: '它有四条短腿，走动时身体和尾巴会跟着弯曲。它的皮肤需要保持湿润，常在夜间或雨后活动；晴热干燥时，石缝和腐木下能提供阴凉的躲藏处。',
    },
    {
      key: 'defence',
      label: '生活与认识',
      title: '看看花纹，留在原处',
      body: '醒目的黄黑花纹与防御有关。它的皮肤腺体能分泌使捕食者不适的物质。共读时用图片找花纹，在野外观察就让它留在地上，不拿在手里玩。',
    },
    {
      key: 'larvae',
      label: '生活与认识',
      title: '幼体在水里长大',
      body: '许多火蝾螈种群的雌体会把已发育的幼体产入水中。幼体头后有外鳃，长大变态后转向陆地生活。部分种群会产下已完成变态的幼体，不能把水生阶段说成整个物种都相同的过程。',
    },
    {
      key: 'habitat',
      label: '生活与认识',
      title: '树林和小溪连在一起',
      body: '成体生活的湿润林地与幼体发育的水体相邻，能减少它们往返时遇到的障碍。火蝾螈的名字里虽然有“火”，它仍需要阴凉湿润的环境，也会被火烧伤。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '留住潮湿林地',
      body: 'IUCN 在 2023-1 全球等级变更表中将火蝾螈从无危调整为易危；一些旧网页仍显示无危。壶菌 Bsal 引起的疾病能使局部种群大幅减少，林地破碎化和水体污染也会影响它。保护林地与溪流、避免把两栖动物及其携带的病原移到其他地点，有助于减少威胁。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '名字有“火”，生活需要湿润',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Salamandra salamandra。火蝾螈需要阴凉、潮湿的环境，也会被火烧伤。许多种群产下带外鳃的水生幼体，另一些则能产出已经完成变态的幼体，同一物种的繁殖路径有所不同。',
    },
  ],
  "keyFacts": [
    '黑色皮肤带黄色斑块或条纹，个体花纹各异。',
    '四条短腿撑住长身体和长尾。',
    '皮肤腺体产生使捕食者不适的分泌物。',
    '许多种群产出带外鳃的水生幼体。',
    '部分种群直接产下完成变态的幼体。',
  ],
  "threats": [
    "Bsal 真菌病",
    "林地破碎化",
    "繁殖水体污染"
  ],
  "conservationActions": [
    "保护湿润林地和繁殖水体",
    "监测两栖动物疾病",
    "避免人为转移野生两栖动物"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "黑底上的黄色花纹"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "蚯蚓"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "湿润林地与林间溪流"
    }
  ],
  "media": {
    "image": "./images/species/fire-salamander/01-cover.webp",
    "alt": "火蝾螈与生活环境的全身场景",
    "focalPoint": {
      "x": 0.75,
      "y": 0.31
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/fire-salamander/02-observation.webp",
        "alt": "火蝾螈伏在湿叶上，黑色身体和黄色斑块清楚可见",
        "title": "黑底上的黄斑",
        "caption": "AI 生成科学情景重建。火蝾螈伏在湿叶上，黑色身体和黄色斑块清楚可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/fire-salamander/03-observation.webp",
        "alt": "火蝾螈走过苔藓，短腿撑起身体，长尾向侧面弯曲",
        "title": "尾巴跟着身体弯",
        "caption": "AI 生成科学情景重建。火蝾螈走过苔藓，短腿撑起身体，长尾向侧面弯曲。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/fire-salamander/04-observation.webp",
        "alt": "火蝾螈停在腐木边，周围有湿叶和苔藓",
        "title": "湿润的躲藏处",
        "caption": "AI 生成科学情景重建。火蝾螈停在腐木边，周围有湿叶和苔藓。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/fire-salamander/05-observation.webp",
        "alt": "火蝾螈幼体停在清浅溪水中，头后有外鳃",
        "title": "水里的幼体",
        "caption": "AI 生成科学情景重建。火蝾螈幼体停在清浅溪水中，头后有外鳃。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/fire-salamander/06-observation.webp",
        "alt": "火蝾螈在潮湿的夜间林地活动，落叶间留有爬行空间",
        "title": "夜间的林地",
        "caption": "AI 生成科学情景重建。火蝾螈在潮湿的夜间林地活动，落叶间留有爬行空间。",
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
      "title": "AMNH — 火蝾螈现行分类与分布",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Salamandridae/Salamandrinae/Salamandra/Salamandra-salamandra",
      "kind": "taxonomy",
      "accessedAt": "2026-09-10"
    },
    {
      "title": "Animal Diversity Web — 火蝾螈形态与生活史（旧分类范围）",
      "url": "https://animaldiversity.org/accounts/Salamandra_salamandra/",
      "kind": "ecology",
      "accessedAt": "2026-09-10"
    },
    {
      "title": "IUCN Red List 2023-1 — 全球等级变更表（LC → VU）",
      "url": "https://nc.iucnredlist.org/redlist/content/attachment_files/2023-1_RL_Table_7.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-10"
    },
    {
      "title": "Deiß 等 2024 — Bsal 与火蝾螈的林地微气候研究",
      "url": "https://www.mdpi.com/1424-2818/16/8/510",
      "kind": "conservation",
      "accessedAt": "2026-09-10"
    },
    {
      title: 'GBIF：Salamandra salamandra 的命名作者与年份',
      url: 'https://www.gbif.org/species/2431776',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-10",
  "updatedAt": "2026-09-10"
} as const satisfies Species;

export default profile;
