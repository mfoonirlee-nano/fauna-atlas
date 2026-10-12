import type { Species } from '../../types/species.ts';

const profile = {
  "id": "violet-snail",
  "slug": "violet-snail",
  "names": {
    "zh": "紫螺",
    "en": "Violet Snail"
  },
  "scientificName": "Janthina janthina",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Mollusca",
      "zhName": "软体动物门"
    },
    "class": {
      "scientificName": "Gastropoda",
      "zhName": "腹足纲"
    },
    "order": {
      "scientificName": "Caenogastropoda incertae sedis",
      "zhName": "新腹足类目级未定群"
    },
    "family": {
      "scientificName": "Epitoniidae",
      "zhName": "梯螺科"
    },
    "genus": {
      "scientificName": "Janthina",
      "zhName": "紫螺属"
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
    "assessor": "本次未核实全球物种级 IUCN 评估，沿用项目 NE 占位口径；不表示没有保护风险。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "亚洲",
      "非洲",
      "欧洲",
      "北美洲",
      "南美洲",
      "大洋洲"
    ],
    "regions": [
      "三大洋热带与亚热带表层"
    ],
    "countries": [],
    "range": "分布于大西洋、太平洋和印度洋的热带与亚热带海域，在海面附近漂浮。澳大利亚多个沿岸地区有记录；被浪冲上岸的壳不意味着它平时生活在陆地上。"
  },
  "habitats": [
    {
      "name": "海洋表层",
      "realm": "marine",
      "description": '生活在热带与亚热带开阔海面的漂浮层，壳和大部分身体悬在泡沫筏下，移动受风与海流影响。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "typical": 3,
      "unit": "cm",
      "note": "澳大利亚博物馆列出的壳体大小约 3 厘米，不作为全部成体的固定长度。"
    }
  },
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "僧帽水母属动物",
      "帆水母"
    ],
    "description": '捕食海面漂浮的刺胞动物，包括 Physalia 属动物和帆水母 Velella velella。'
  },
  "tags": [
    "紫螺",
    "海洋表层"
  ],
  "summary": '紫螺用黏液包住空气制作泡沫筏，紫色薄壳悬在筏下，随风和海流漂浮，并捕食帆水母等海面刺胞动物。',
  "description": '紫螺生活在三大洋热带与亚热带海面附近，足附着在自己制作的泡沫筏下。螺旋壳薄而呈紫色，不同部位颜色深浅有差别。风和海流影响它的去向，也可能把个体或空壳带到海滩；岸边记录因此还需区分活体漂浮生活与搁浅。',
  "storySections": [
    {
      key: 'observation-1',
      label: '漂浮',
      title: '泡沫筏托住水下身体',
      body: '泡沫筏浮在海面，紫色螺壳和大部分身体悬在水下，足附着在筏下。泡泡和壳的位置共同构成漂浮姿态。',
    },
    {
      key: 'observation-2',
      label: '泡沫筏',
      title: '黏液包裹空气形成泡泡',
      body: '紫螺制作黏液包裹的空气泡，形成托住身体的筏。泡泡大小与数量会改变，需要活体观察才能了解制作过程。',
    },
    {
      key: 'observation-3',
      label: '螺壳',
      title: '薄壳呈紫色',
      body: '螺壳薄，形状呈螺旋，不同部位紫色深浅有差别。外形仍需与同属或近缘种的结构比较。',
    },
    {
      key: 'observation-4',
      label: '捕食',
      title: '漂浮刺胞动物成为食物',
      body: '帆水母及 Physalia 属动物等海面刺胞动物进入紫螺食谱。猎物与捕食者共享漂浮层，风和水流也影响相遇机会。',
    },
    {
      key: 'observation-5',
      label: '分布',
      title: '海滩壳来自漂浮和搁浅',
      body: '海面生活使紫螺随风与海流移动，海滩上有时出现被冲上岸的壳。搁浅地点可以提供出现线索，却不能说明它平时在陆地生活。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '1758 年命名的海面紫螺',
      body: '林奈在 1758 年正式命名紫螺，现用名称为 Janthina janthina。薄紫壳是明显外形，泡沫筏则让它能够生活在海面漂浮层。澳大利亚沿岸的搁浅记录有助于观察这种平时漂在海上的动物，辨认记录仍需区分活体和空壳。',
    },
  ],
  "keyFacts": [
    "泡沫筏由黏液包裹的空气泡组成。",
    "螺壳悬在泡沫筏下方。",
    "现行 WoRMS 将其目级归属列为 Caenogastropoda incertae sedis，科为梯螺科。"
  ],
  "threats": [
    "本次未核实全球物种级威胁排序。"
  ],
  "conservationActions": [
    "通过影像观察，保留来源与物种限定。",
    "减少水域污染，野外观察不取走活体。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "raft",
      "label": "漂浮工具",
      "value": "泡沫筏"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "漂浮刺胞动物"
    }
  ],
  "media": {
    "image": "./images/species/violet-snail/01-cover.webp",
    "alt": "紫螺及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/violet-snail/02-observation.webp",
        "title": "泡泡在上，螺壳在下",
        "alt": "紫螺：泡泡在上，螺壳在下",
        "caption": "AI 生成科学情景重建。泡沫筏托在海面上，紫色壳和大部分身体悬在水下。先沿水面找出泡泡和壳的位置。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/violet-snail/03-observation.webp",
        "title": "用黏液包住空气",
        "alt": "紫螺：用黏液包住空气",
        "caption": "AI 生成科学情景重建。紫螺制作黏液包裹的泡泡，并用足附着在筏下。泡泡数量和大小会变化，生成图不能用来精确计数。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/violet-snail/04-observation.webp",
        "title": "紫色的螺旋壳",
        "alt": "紫螺：紫色的螺旋壳",
        "caption": "AI 生成科学情景重建。壳薄而带紫色，外形有螺旋。不同部位的颜色深浅有差别，观察图采用水下视角。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/violet-snail/05-observation.webp",
        "title": "海面附近的食物",
        "alt": "紫螺：海面附近的食物",
        "caption": "AI 生成科学情景重建。紫螺会取食帆水母等漂浮刺胞动物。图中为独立取食场景重建，不表示连续拍摄，也不据图判断一次吃多少。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/violet-snail/06-observation.webp",
        "title": "随风和水流漂浮",
        "alt": "紫螺：随风和水流漂浮",
        "caption": "AI 生成科学情景重建。两只紫螺各挂在自己的泡沫筏下。海面生活使它们随风和水流移动，海滩上有时能看见被冲上岸的壳。",
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
      "title": "澳大利亚博物馆：紫螺",
      "url": "https://australian.museum/learn/animals/molluscs/violet-snail/",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "WoRMS：紫螺完整分类链",
      "url": "https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/140155",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "WoRMS：接受学名与分类",
      "url": "https://www.marinespecies.org/aphia.php?id=140155&p=taxdetails",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      title: 'GBIF: Janthina janthina (Linnaeus, 1758) nomenclatural record',
      url: 'https://www.gbif.org/species/2299286',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
