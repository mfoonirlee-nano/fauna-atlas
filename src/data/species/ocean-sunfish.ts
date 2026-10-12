import type { Species } from '../../types/species.ts';

const profile = {
  "id": "ocean-sunfish",
  "slug": "ocean-sunfish",
  "names": {
    "zh": "翻车鱼",
    "en": "Ocean Sunfish",
    "aliases": [
      "翻车鲀"
    ]
  },
  "scientificName": "Mola mola",
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
      "scientificName": "Tetraodontiformes",
      "zhName": "鲀形目"
    },
    "family": {
      "scientificName": "Molidae",
      "zhName": "翻车鲀科"
    },
    "genus": {
      "scientificName": "Mola",
      "zhName": "翻车鲀属"
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
    "assessor": "全球等级核验范围见保护章节；未确认独立评估日期和全球趋势"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "世界热带与温带海洋"
    ],
    "countries": [],
    "range": "分布于世界热带和温带海洋，可在海面附近活动，也会潜入更深的水层。"
  },
  "habitats": [
    {
      "name": "开阔海洋与近岸海域",
      "realm": "marine",
      "description": '翻车鱼在开阔海洋与近岸海域活动，既会靠近海面，也会进入更深的水层。单张海面场景只能展示其中一种姿态。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "水母等胶质浮游动物",
      "小鱼",
      "甲壳动物"
    ],
    "description": '翻车鱼吃水母等胶质动物，也取食小鱼和甲壳动物。'
  },
  "tags": [
    "翻车鱼",
    "圆身体上下的长鱼鳍"
  ],
  "summary": "翻车鱼身体侧扁，从侧面看近似圆盘。背鳍和臀鳍分别向上、下伸出，身体后缘形成短而宽的舵鳍。",
  "description": '翻车鱼摆动背鳍和臀鳍前进，有时侧躺在海面附近，也会潜入深水。它吃水母等胶质动物、小鱼和甲壳动物，小型清洁鱼还会靠近它，取食体表寄生生物。',
  "storySections": [
    {
      key: 'fins',
      label: '生活与认识',
      title: '上下各有一片长鳍',
      body: '翻车鱼的背鳍向上、臀鳍向下伸出。它摆动这两片长鳍，在水中前进。',
    },
    {
      key: 'clavus',
      label: '生活与认识',
      title: '身体后面像一道短边',
      body: '身体后缘有短宽的舵鳍，外缘略呈波浪形，与许多鱼的分叉尾巴轮廓不同。',
    },
    {
      key: 'surface',
      label: '生活与认识',
      title: '侧身停在海面附近',
      body: '翻车鱼有时侧躺在海面附近，也能向深水游动。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '游近一只水母',
      body: '翻车鱼会捕食水母等胶质动物，也吃小鱼和甲壳动物。',
    },
    {
      key: 'cleaning',
      label: '生活与认识',
      title: '小鱼靠近身体',
      body: '小型清洁鱼靠近翻车鱼，取食它体表的寄生生物。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '减少海里的误捕和垃圾',
      body: '翻车鱼的全球 IUCN 等级为易危。渔具误捕和海洋垃圾会威胁它们，减少这些影响有助于保护种群。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '圆盘外形之外，也会进入深水',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Mola mola。侧扁的身体让翻车鱼从侧面看像圆盘，背鳍和臀鳍负责推动它前进。海面上的侧躺姿势只是它生活的一部分，它也会进入深水，还接受小型清洁鱼取食体表寄生生物。',
    },
  ],
  "keyFacts": [
    '背鳍和臀鳍上下伸出，摆动时推动身体前进。',
    '身体后缘有短宽、外缘略呈波浪形的舵鳍。',
    '它有时侧躺在海面附近，也会潜入深水。',
    '它吃胶质动物、小鱼和甲壳动物。',
    '小型清洁鱼会取食它体表的寄生生物。',
  ],
  "threats": [
    "渔具误捕",
    "海洋垃圾"
  ],
  "conservationActions": [
    "减少渔具误捕",
    "减少海洋垃圾"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "圆身体上下的长鱼鳍"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "开阔海洋与近岸海域"
    }
  ],
  "media": {
    "image": "./images/species/ocean-sunfish/01-cover.webp",
    "alt": "翻车鱼的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/ocean-sunfish/02-observation.webp",
        "title": "上下伸出的鱼鳍",
        "alt": "翻车鱼侧面完整显示背鳍和臀鳍",
        "caption": "AI 生成科学情景重建。翻车鱼侧面完整显示背鳍和臀鳍。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ocean-sunfish/03-observation.webp",
        "title": "短宽的舵鳍",
        "alt": "翻车鱼身体后部呈短宽的波浪形边缘",
        "caption": "AI 生成科学情景重建。翻车鱼身体后部呈短宽的波浪形边缘。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ocean-sunfish/04-observation.webp",
        "title": "海面附近侧身",
        "alt": "翻车鱼在海面附近侧身停留",
        "caption": "AI 生成科学情景重建。翻车鱼在海面附近侧身停留。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ocean-sunfish/05-observation.webp",
        "title": "朝向水母",
        "alt": "翻车鱼游近一只小水母",
        "caption": "AI 生成科学情景重建。翻车鱼游近一只小水母。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ocean-sunfish/06-observation.webp",
        "title": "小鱼清洁身体",
        "alt": "几条小型清洁鱼靠近翻车鱼体表",
        "caption": 'AI 生成科学情景重建。几条小型清洁鱼靠近翻车鱼体表。画面用于展示清洁行为，不能据此辨认寄生虫种类。',
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
      "title": "Monterey Bay Aquarium：翻车鱼形态、食物与全球等级",
      "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/ocean-sunfish",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Australian Museum：Mola mola 辨识与分类",
      "url": "https://australian.museum/learn/animals/fishes/ocean-sunfish-mola-mola/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Monterey Bay Aquarium：翻车鱼全球易危",
      "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/ocean-sunfish",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Marine Biology：翻车鱼海面行为与清洁互动",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3460849/",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Mola mola 的命名作者与年份',
      url: 'https://www.gbif.org/species/5213725',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
