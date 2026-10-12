import type { Species } from '../../types/species.ts';

const profile = {
  "id": "green-tree-python",
  "slug": "green-tree-python",
  "names": {
    "zh": "绿树蟒",
    "en": "Green Tree Python"
  },
  "scientificName": "Morelia viridis",
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
      "scientificName": "Squamata",
      "zhName": "有鳞目"
    },
    "family": {
      "scientificName": "Pythonidae",
      "zhName": "蟒科"
    },
    "genus": {
      "scientificName": "Morelia",
      "zhName": "树蟒属"
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
    "assessor": "依据所列资料中的全球等级；未单独核实评估日期"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "大洋洲",
      "亚洲"
    ],
    "regions": [
      "新几内亚南部及邻近岛屿",
      "澳大利亚约克角半岛"
    ],
    "countries": [],
    "range": '按区分 Morelia azurea 后的分类，绿树蟒主要分布于新几内亚南部、阿鲁群岛和澳大利亚约克角等地。新几内亚北部近似种的分布另计。'
  },
  "habitats": [
    {
      "name": "热带雨林的树枝间",
      "realm": "terrestrial",
      "description": '雨林树枝提供休息和伏击位置。绿树蟒把盘起的身体分放在枝条两侧，以身体和尾巴获得支撑。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小型哺乳动物",
      "蜥蜴",
      "鸟类"
    ],
    "description": "它伏击小动物，幼体和成体的食物大小不同。"
  },
  "tags": [
    "绿树蟒",
    "盘在树枝上的身体"
  ],
  "summary": "绿树蟒把身体盘在枝条上，线圈垂向两侧，头放在身体上。成体多为绿色，幼体呈黄色。",
  "description": '绿树蟒用可抓握的尾巴辅助攀爬，能从一根枝条伸向另一根。成体常在夜间伏击小动物，后部固定在枝上，前部等待伸出；黄色幼体长大后逐渐转绿。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '头放在线圈上',
      body: '休息时，绿树蟒可以把头搁在盘起的身体上。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '身体绕过树枝',
      body: '盘起的身体垂在树枝两侧，枝条在身体中间提供支撑。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '小时候是黄色',
      body: '狭义 Morelia viridis 的幼体呈黄色，长大后逐渐转绿。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '尾巴也能抓握',
      body: '可抓握的尾巴辅助攀爬，身体能从一根枝条伸向另一根。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '树枝上的等待',
      body: '成体常在夜间伏击，身体后部固定在枝上，前部准备伸出。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '保护资料列出的全球等级为无危，其中部分仍采用分种前的广义范围，不能据此判断每个地方种群的数量。保护雨林、减少非法野外采集，有助于保留种群。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '分种后的绿色成蛇与黄色幼体',
      body: 'Schlegel 于 1872 年描述了这个物种，现用学名为 Morelia viridis。过去广义绿树蟒中的部分种群后来归入 Morelia azurea。狭义 Morelia viridis 的幼体呈黄色，成年后逐渐转绿；查看旧资料中的颜色和分布时，需要先确认它采用的物种范围。',
    },
  ],
  "keyFacts": [
    '休息时，绿树蟒可以把头搁在盘起的身体上。',
    '盘起的身体垂在树枝两侧，枝条在身体中间提供支撑。',
    '狭义 Morelia viridis 的幼体呈黄色，长大后逐渐转绿。',
    '可抓握的尾巴辅助攀爬，身体能从一根枝条伸向另一根。',
    '成体常在夜间伏击，身体后部固定在枝上，前部准备伸出。',
  ],
  "threats": [
    "雨林生境丧失",
    "野外采集与非法贸易"
  ],
  "conservationActions": [
    "保护雨林",
    "减少非法野外采集"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "盘在树枝上的身体"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "热带雨林的树枝间"
    }
  ],
  "media": {
    "image": "./images/species/green-tree-python/01-cover.webp",
    "alt": "绿树蟒的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/green-tree-python/02-observation.webp",
        "title": "搁在身体上的头",
        "alt": '搁在身体上的头',
        "caption": "AI 生成科学情景重建。休息时，它可以把头搁在盘起的身体上。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/green-tree-python/03-observation.webp",
        "title": "树枝两侧的线圈",
        "alt": '树枝两侧的线圈',
        "caption": "AI 生成科学情景重建。沿着一圈圈身体找找枝条的位置，看看蛇怎样支撑自己。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/green-tree-python/04-observation.webp",
        "title": "黄色的幼蟒",
        "alt": '黄色的幼蟒',
        "caption": 'AI 生成科学情景重建。狭义 Morelia viridis 的幼体呈黄色，长大后逐渐转绿。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/green-tree-python/05-observation.webp",
        "title": "跨过枝条的身体",
        "alt": '跨过枝条的身体',
        "caption": "AI 生成科学情景重建。它用可抓握的尾巴辅助攀爬，身体能从一根枝条伸向另一根。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/green-tree-python/06-observation.webp",
        "title": "夜间的伏击姿势",
        "alt": '夜间的伏击姿势',
        "caption": "AI 生成科学情景重建。成体常在夜间伏击，身体后部固定在枝上，前部准备伸出。",
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
      "title": "Reptile Database：绿树蟒分类与物种界定",
      "url": "https://reptile-database.reptarium.cz/Morelia/viridis",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Animal Diversity Web：绿树蟒行为",
      "url": "https://animaldiversity.org/accounts/Morelia_viridis/",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "CITES：绿树蟒贸易与保护案例",
      "url": "https://cites.org/sites/default/files/vc-files/files/assessment_impact_pet_trade_case_study_Morelia_viridis.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Morelia viridis 的命名作者与年份',
      url: 'https://www.gbif.org/species/5225681',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
