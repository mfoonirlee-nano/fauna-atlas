import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-fratercula-arctica",
  "slug": "atlantic-puffin",
  "names": {
    "zh": "大西洋海鹦",
    "en": "Atlantic Puffin"
  },
  "scientificName": "Fratercula arctica",
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
      "scientificName": "Aves",
      "zhName": "鸟纲"
    },
    "order": {
      "scientificName": "Charadriiformes",
      "zhName": "鸻形目"
    },
    "family": {
      "scientificName": "Alcidae",
      "zhName": "海雀科"
    },
    "genus": {
      "scientificName": "Fratercula",
      "zhName": "海鹦属"
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
    "assessor": "IUCN；等级来源与适用范围见正文"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲",
      "欧洲"
    ],
    "regions": [
      "北大西洋海域与沿岸岛屿"
    ],
    "countries": [],
    "range": '在北大西洋沿岸和岛屿繁殖，非繁殖期大多在开阔海域生活。冰岛附近是其中一个代表性区域。',
    "center": {
      "lat": 64,
      "lng": -20
    }
  },
  "habitats": [
    {
      "name": "海岛草坡与近海",
      "realm": "marine",
      "description": '繁殖期利用海岛草坡洞穴及岩缝筑巢，在近海捕食；非繁殖期多在开阔海域生活。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "weight": {
      "typical": 0.5,
      "unit": "kg",
      "note": "Animal Diversity Web 给出的平均体重约 500 g；不作为所有地区个体的固定体重。"
    }
  },
  "diet": {
    "types": [
      "piscivore"
    ],
    "foods": [
      "沙鳗等小鱼",
      "其他小型海洋动物"
    ],
    "description": "主要食物包括沙鳗等小鱼、其他小型海洋动物。"
  },
  "tags": [
    "大西洋海鹦",
    "彩色的嘴巴"
  ],
  "summary": "繁殖期的大西洋海鹦有橙红、黄色和灰色相间的粗喙，黑背、白腹和橙色蹼足也很醒目。幼鸟和冬季成鸟的喙没有这样鲜艳。",
  "description": '大西洋海鹦有黑背、白腹和橙色蹼足。它能飞，也会用翅膀在水下推进身体，潜水寻找小鱼。繁殖时在海岛草坡洞穴或岩缝中筑巢。',
  "storySections": [
    {
      key: 'bill',
      label: '生活与认识',
      title: '嘴巴上有好几种颜色',
      body: '繁殖期成鸟的嘴粗而扁，侧面像三角形，能看到橙红、黄色和灰色区域。图集展示繁殖期外形，冬季和幼鸟的嘴没有这样鲜艳。',
    },
    {
      key: 'feet',
      label: '生活与认识',
      title: '黑背白肚子橙色脚',
      body: '它背部黑色、腹部白色，脚掌橙色。脚趾之间连着蹼，帮助它在水面活动。',
    },
    {
      key: 'swim',
      label: '生活与认识',
      title: '也会潜到水下',
      body: '海鹦在海里寻找小鱼。它不仅能漂在水面，还会用翅膀在水下推进身体。',
    },
    {
      key: 'flight',
      label: '生活与认识',
      title: '张开翅膀飞起来',
      body: '海鹦是会飞的海鸟。看飞行图里展开的翅膀，再和企鹅的翅膀比较，不能只凭黑白羽毛把它认成企鹅。',
    },
    {
      key: 'burrow',
      label: '生活与认识',
      title: '草坡里有巢洞',
      body: '繁殖期的海鹦会利用海岛草坡上的洞穴筑巢，也可能利用岩缝。非繁殖期它们多在海上生活。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '保护海岛和小鱼',
      body: 'BirdLife 记录的全球 IUCN 等级为易危，欧洲区域等级不能代替全球等级。海洋变暖、食物不足和岛屿上的外来捕食动物都会威胁海鹦。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '彩色大喙也有季节变化',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Fratercula arctica。繁殖期成鸟的粗喙有橙红、黄色和灰色，冬季与幼鸟的喙没有这样鲜艳。海鹦能飞，也用翅膀在水下游动，黑白羽毛并不表示它是企鹅。',
    },
  ],
  "keyFacts": [
    '繁殖期粗喙有橙红、黄色和灰色区域。',
    '背黑腹白，脚掌橙色、脚趾间有蹼。',
    '用翅膀在水下推进，潜水找小鱼。',
    '也能展开翅膀飞行。',
    '繁殖时在草坡洞穴或岩缝筑巢。',
  ],
  "threats": [
    "海洋变暖改变食物供应",
    "过度捕捞与渔业混获",
    "岛屿上的外来捕食动物"
  ],
  "conservationActions": [
    "保护繁殖岛屿和海洋食物资源",
    "减少海洋污染与混获"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "彩色的嘴巴"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "沙鳗等小鱼"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "海岛草坡与近海"
    }
  ],
  "media": {
    "image": "./images/species/atlantic-puffin/01-cover.webp",
    "alt": "大西洋海鹦的完整身体位于画面右侧。",
    "focalPoint": {
      "x": 0.78,
      "y": 0.35
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/atlantic-puffin/02-observation.webp",
        "title": "草坡上的海鹦",
        "alt": "繁殖期大西洋海鹦站在草地上，彩色嘴和橙色脚可见。",
        "caption": "繁殖期大西洋海鹦站在草地上，彩色嘴和橙色脚可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlantic-puffin/03-observation.webp",
        "title": "靠近看彩色嘴",
        "alt": "海鹦头部侧面近景，粗而扁的嘴上有多种颜色。",
        "caption": "海鹦头部侧面近景，粗而扁的嘴上有多种颜色。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlantic-puffin/04-observation.webp",
        "title": "漂在海面上",
        "alt": "大西洋海鹦收起翅膀，在海面游动。",
        "caption": "大西洋海鹦收起翅膀，在海面游动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlantic-puffin/05-observation.webp",
        "title": "展开翅膀飞",
        "alt": "大西洋海鹦在海面上方飞行，两翼展开。",
        "caption": "大西洋海鹦在海面上方飞行，两翼展开。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlantic-puffin/06-observation.webp",
        "title": "巢洞在哪里",
        "alt": "大西洋海鹦站在海岛草坡的洞口附近。",
        "caption": "大西洋海鹦站在海岛草坡的洞口附近。",
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
      "title": "BirdLife International — 大西洋海鹦生活与全球等级",
      "url": "https://www.birdlife.org/news/2022/04/06/seabird-of-the-month-atlantic-puffin-fratercula-arctica/",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Animal Diversity Web — Fratercula arctica 形态与生活",
      "url": "https://animaldiversity.org/accounts/Fratercula_arctica/",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Animal Diversity Web — Fratercula arctica 分类归属",
      "url": "https://animaldiversity.org/accounts/Fratercula_arctica/#classification",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "RSPB — 大西洋海鹦外形与季节变化",
      "url": "https://www.rspb.org.uk/birds-and-wildlife/puffin",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      title: 'GBIF：Fratercula arctica 的命名作者与年份',
      url: 'https://www.gbif.org/species/2481353',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-09",
  "updatedAt": "2026-09-09"
} as const satisfies Species;

export default profile;
