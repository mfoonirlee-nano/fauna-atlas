import type { Species } from '../../types/species.ts';

const profile = {
  "id": "giant-salmonfly",
  "slug": "giant-salmonfly",
  "names": {
    "zh": "加州大石蝇",
    "en": "Giant Salmonfly"
  },
  "scientificName": "Pteronarcys californica",
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
      "scientificName": "Plecoptera",
      "zhName": "襀翅目"
    },
    "family": {
      "scientificName": "Pteronarcyidae",
      "zhName": "大石蝇科"
    },
    "genus": {
      "scientificName": "Pteronarcys",
      "zhName": "大石蝇属"
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
      "北美洲"
    ],
    "regions": [
      "北美西部河流"
    ],
    "countries": [],
    "range": '生活于北美西部河流，加拿大与美国西部多地有记录。若虫栖于流水中的石块底部，成熟后爬向岸边羽化。'
  },
  "habitats": [
    {
      "name": "流水砾石底与河岸",
      "realm": "freshwater",
      "description": '若虫生活在河流石块底部，成熟后离开水面，到岸边蜕皮羽化。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "detritivore",
      "herbivore"
    ],
    "foods": [
      "若虫取食植物碎屑",
      "藻类"
    ],
    "description": '若虫吃植物碎屑与藻类等，参与河流有机物的分解。某些地点的肠内容物也含动物残余，食物比例会因地点而异。'
  },
  "tags": [
    "加州大石蝇",
    "流水砾石底与河岸"
  ],
  "summary": '加州大石蝇的若虫在北美西部河流生活多年，成熟后爬到岸边，蜕去外骨骼成为有翅成虫。',
  "description": '深色成虫的腹部侧面与部分关节呈橙色，两对翅膀平放在背上。水生若虫有明显体节、翅芽和鳃簇，会取食植物碎屑、藻类等河流有机物。',
  "storySections": [
    {
      key: 'appearance',
      label: '身体外观',
      title: '平放的翅膀与水下鳃簇',
      body: '成虫体色深，腹部侧面和部分关节呈橙色，两对翅膀休息时平放在背上，触角长，尾端有附肢。若虫体节明显，具有翅芽和鳃簇，翅膀尚未发育完整。',
    },
    {
      key: 'habitat',
      label: '栖息环境',
      title: '北美西部的流水河床',
      body: '加拿大和美国西部多地有记录。若虫生活在流水中的石块底部，成熟后爬向岸边羽化。',
    },
    {
      key: 'feeding',
      label: '取食',
      title: '若虫处理河流有机物',
      body: '若虫取食植物碎屑、藻类等，参与有机物的分解。某些研究地点的肠内容物中也有动物残余，具体比例不能推广到所有种群。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '岸边留下空蜕壳',
      body: '水生阶段跨越多年，持续时间随地点与温度变化。成熟若虫爬出水面，脱下外骨骼成为有翅成虫，空蜕壳留在岸边。',
    },
    {
      key: 'taxonomy',
      label: '分类归属',
      title: '襀翅目中的大石蝇',
      body: '加州大石蝇的学名为 Pteronarcys californica，属于昆虫纲、襀翅目和大石蝇科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '河流环境与保护资料',
      body: '自然河床和河岸是若虫生活、成虫羽化的环境。尚未确认可引用的 IUCN 全球评估，全球种群趋势也未确认。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '空蜕壳也能帮助统计羽化',
      body: 'Newport 于 1848 年描述了这个物种，现用学名为 Pteronarcys californica。加州大石蝇属于襀翅目。2020 年研究利用岸边留下的空蜕壳估计羽化数量，并探讨它们与水中幼期密度的关系。记录成虫出现时，研究者也能从遗留的外骨骼获得线索。',
    },
  ],
  "keyFacts": [
    '成虫两对翅膀平放在背上。',
    '若虫有翅芽和鳃簇。',
    '若虫吃植物碎屑与藻类等有机物。',
    '水生阶段可跨越多年。',
    '成熟若虫到岸边羽化，留下空蜕壳。',
  ],
  "threats": [
    "河水升温、流量改变与污染",
    "细沉积物增加和河岸土地利用改变"
  ],
  "conservationActions": [
    "保留清洁流水和自然河岸",
    "监测若虫及羽化记录"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "共读观察",
      "value": '成虫平放的翅膀、水生若虫的体节和岸边空蜕壳。'
    }
  ],
  "media": {
    "image": "./images/species/giant-salmonfly/01-cover.webp",
    "alt": "加州大石蝇及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/giant-salmonfly/02-observation.webp",
        "title": "平放在背上的翅膀",
        "alt": '平放在背上的翅膀，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。有翅成虫；橙色腹侧与折叠翅膀。图像尺度未经实测，不能用于物种鉴定或判断连续动作。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-salmonfly/03-observation.webp",
        "title": "成虫的头胸部",
        "alt": '成虫的头胸部，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。有翅成虫放大外观；触角和翅脉非鉴定证据。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-salmonfly/04-observation.webp",
        "title": "水下的若虫",
        "alt": '水下的若虫，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。水生若虫，展示翅芽、鳃簇与尾端附肢；不按实测比例。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-salmonfly/05-observation.webp",
        "title": "岸边的空蜕壳",
        "alt": '岸边的空蜕壳，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。空的若虫蜕壳，非活体；情景不证明羽化过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-salmonfly/06-observation.webp",
        "title": "河边枝条上的成虫",
        "alt": '河边枝条上的成虫，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。有翅成虫与河流背景；不用于估算个体大小。",
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
      "url": "https://www.gbif.org/species/2001399",
      "kind": "taxonomy",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "2025 原始基因组研究：生活史、分类及环境压力",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12130441/",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "NatureServe：北美分布与生态记录",
      "url": "https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.112052/Pteronarcys_californica",
      "kind": "distribution",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "2020 原始研究：蜕壳与幼期密度估算",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7148124/",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-11",
  "updatedAt": "2026-10-11"
} as const satisfies Species;

export default profile;
