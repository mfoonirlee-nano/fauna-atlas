import type { Species } from '../../types/species.ts';

const profile = {
  "id": "king-ragworm",
  "slug": "king-ragworm",
  "names": {
    "zh": "沙蚕",
    "en": "King Ragworm",
    "aliases": [
      "Nereis virens"
    ]
  },
  "scientificName": "Alitta virens",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Annelida",
      "zhName": "环节动物门"
    },
    "class": {
      "scientificName": "Polychaeta",
      "zhName": "多毛纲"
    },
    "order": {
      "scientificName": "Phyllodocida",
      "zhName": "叶须虫目"
    },
    "family": {
      "scientificName": "Nereididae",
      "zhName": "沙蚕科"
    },
    "genus": {
      "scientificName": "Alitta",
      "zhName": "Alitta 属"
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
    "assessor": '全球保护评估尚未确认；NE（未评估）不等于无危。'
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "北大西洋沿岸"
    ],
    "countries": [],
    "range": "北大西洋沿岸；主要活动环境为潮间带泥沙与石下洞穴。"
  },
  "habitats": [
    {
      "name": "潮间带泥沙与石下洞穴",
      "realm": "marine",
      "description": "在潮间带泥沙与石下洞穴中寻找食物和藏身处。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "小型甲壳动物",
      "蠕虫",
      "动植物残屑"
    ],
    "description": "食物包括小型甲壳动物、蠕虫、动植物残屑。"
  },
  "tags": [
    "沙蚕",
    "潮间带泥沙与石下洞穴"
  ],
  "summary": '沙蚕 Alitta virens 在沿岸泥沙中挖通道，吃小动物和有机残屑。分节身体两侧的疣足带刚毛，帮助移动。',
  "description": '沙蚕 Alitta virens 的身体分成许多节，每节两侧有带刚毛的小突起，叫作疣足，帮助它移动。它在北大西洋沿岸的泥沙中挖通道，也利用石下空间藏身，取食小动物和有机残屑。体色可呈绿或红褐，在光下带虹彩。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '一节节的小突起',
      body: '每个体节两边有叫作疣足的小突起，上面长着刚毛，帮助沙蚕在底物上移动。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '头部的触须',
      body: '头部有感觉附肢和小眼点，帮助它感知周围。生成图不用于鉴定附肢数目或细微结构。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '泥沙中的洞穴',
      body: '它在泥沙里挖掘通道，也会利用石块下面的空间藏身。图中只露出洞口附近的部分身体。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '浅水里的长身体',
      body: '在潮水覆盖的泥沙上，身体会随运动弯曲。颜色可呈绿、红褐等色，在光下有虹彩。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '沿着湿泥沙爬行',
      body: '它吃小动物和有机残屑。退潮时留在潮滩上的动物需要湿润环境，观察时不要挖走它们。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '本种的全球保护评估尚未确认。退潮后沙蚕仍需要湿润环境，观察时不挖走它们或破坏洞穴。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '旧名与“绿沙蚕”',
      body: 'M. Sars 在 1835 年发表了本种的科学描述，旧资料常使用 Nereis virens，今天采用 Alitta virens。种名 virens 在拉丁语中指绿色，与法国俗名“绿沙蚕”相对应。中文“沙蚕”还可指其他多毛类动物，这里介绍的只是其中这一种。',
    },
  ],
  "keyFacts": [
    '每个体节两边有叫作疣足的小突起，上面长着刚毛，帮助沙蚕在底物上移动。',
    '头部有感觉附肢和小眼点，帮助它感知周围。生成图不用于鉴定附肢数目或细微结构。',
    '它在泥沙里挖掘通道，也会利用石块下面的空间藏身。图中只露出洞口附近的部分身体。',
    '在潮水覆盖的泥沙上，身体会随运动弯曲。颜色可呈绿、红褐等色，在光下有虹彩。',
    '它吃小动物和有机残屑。退潮时留在潮滩上的动物需要湿润环境，观察时不要挖走它们。',
  ],
  "threats": [],
  "conservationActions": [
    "保护潮间带泥沙与石下洞穴，观察时不捕捉、不驱赶。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "潮间带泥沙与石下洞穴"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "一节节的小突起"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "未评估",
      "note": "沙蚕是宽泛中文称呼，此处只指 Alitta virens，旧名 Nereis virens。DORIS 支持形态、北大西洋记录、杂食和洞栖；基因组论文支持分类阶元。全球等级未核实。"
    }
  ],
  "media": {
    "image": "./images/species/king-ragworm/01-cover.webp",
    "alt": "沙蚕及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/king-ragworm/02-observation.webp",
        "alt": "沙蚕：一节节的小突起",
        "title": "一节节的小突起",
        "caption": "AI 生成科学情景重建。每个体节两边有疣足，上面长着刚毛。它们帮助沙蚕在底物上运动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/king-ragworm/03-observation.webp",
        "alt": "沙蚕：头部的触须",
        "title": "头部的触须",
        "caption": "AI 生成科学情景重建。头部有感觉附肢和小眼点，帮助它感知周围。生成图不用于鉴定附肢数目或细微结构。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/king-ragworm/04-observation.webp",
        "alt": "沙蚕：泥沙中的洞穴",
        "title": "泥沙中的洞穴",
        "caption": "AI 生成科学情景重建。它在泥沙里挖掘通道，也会利用石块下面的空间藏身。图中只露出洞口附近的部分身体。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/king-ragworm/05-observation.webp",
        "alt": "沙蚕：浅水里的长身体",
        "title": "浅水里的长身体",
        "caption": "AI 生成科学情景重建。在潮水覆盖的泥沙上，身体会随运动弯曲。颜色可呈绿、红褐等色，在光下有虹彩。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/king-ragworm/06-observation.webp",
        "alt": "沙蚕：沿着湿泥沙爬行",
        "title": "沿着湿泥沙爬行",
        "caption": "AI 生成科学情景重建。它吃小动物和有机残屑。退潮时留在潮滩上的动物需要湿润环境，观察时不要挖走它们。",
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
      "title": "doris.ffessm.fr：Alitta virens",
      "url": "https://doris.ffessm.fr/Especes/Alitta-virens-Nereis-verte-2906",
      "kind": "general",
      "accessedAt": "2026-09-22"
    },
    {
      "title": "pmc.ncbi.nlm.nih.gov：Alitta virens",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10352625/",
      "kind": "general",
      "accessedAt": "2026-09-22"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-23",
  "updatedAt": "2026-09-23"
} as const satisfies Species;

export default profile;
