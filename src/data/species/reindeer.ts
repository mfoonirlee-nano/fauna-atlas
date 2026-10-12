import type { Species } from '../../types/species.ts';

const profile = {
  "id": "reindeer",
  "slug": "reindeer",
  "names": {
    "zh": "驯鹿",
    "en": "Reindeer",
    "aliases": [
      "北美驯鹿",
      "Caribou"
    ]
  },
  "scientificName": "Rangifer tarandus",
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
      "scientificName": "Artiodactyla",
      "zhName": "偶蹄目"
    },
    "family": {
      "scientificName": "Cervidae",
      "zhName": "鹿科"
    },
    "genus": {
      "scientificName": "Rangifer",
      "zhName": "驯鹿属"
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
    "assessor": "IUCN（由 ASM Mammal Diversity Database 转引）"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲",
      "亚洲",
      "北美洲"
    ],
    "regions": [
      "北极与亚北极苔原",
      "北方森林"
    ],
    "countries": [
      "挪威",
      "芬兰",
      "俄罗斯",
      "加拿大",
      "美国"
    ],
    "range": '广义 Rangifer tarandus 的野生种群分布于欧亚大陆和北美洲北部的苔原、北方森林等环境。国家列表列举代表地区，地图点仅代表北欧；驯养群体不能用来推断野生范围或数量。',
    "center": {
      "lat": 69,
      "lng": 24
    }
  },
  "habitats": [
    {
      "name": "苔原与北方森林",
      "realm": "terrestrial",
      "description": "驯鹿在寒冷地区取食和移动，不同种群利用开阔苔原、山地或北方森林。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "地衣",
      "草",
      "莎草",
      "灌木叶片"
    ],
    "description": "驯鹿取食地衣及多种植物，食谱随季节变化，冬季会刨开积雪寻找食物。"
  },
  "tags": [
    "驯鹿",
    "头上的分叉角"
  ],
  "summary": "驯鹿的雌雄都可能长出分叉的角，雄鹿的角通常更大。它会用前蹄刨开积雪。",
  "description": '驯鹿的宽蹄能够张开，帮助它走过松软地面和雪地。它吃地衣及其他植物，一些野生种群季节性长途迁移，另一些的活动范围较小。',
  "storySections": [
    {
      key: 'antlers',
      label: '生活与认识',
      title: '头上长着分叉角',
      body: '驯鹿的角从头顶向上伸出许多分叉。雄性和雌性都可能长角，雄鹿的角通常更大。',
    },
    {
      key: 'renewal',
      label: '生活与认识',
      title: '鹿角会脱落再长',
      body: '驯鹿会脱落旧角，再长出新角。新角外面包着有细毛的皮肤，称为鹿茸。不同性别和个体的脱角时间有差异，不能只凭有没有角判断性别。',
    },
    {
      key: 'hooves',
      label: '生活与认识',
      title: '宽蹄踩过苔原',
      body: '驯鹿的蹄子宽，能张开，有助于在松软地面和雪地行走。图集中先看抬起的一只脚，再看落在地面上的蹄。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '刨开雪找食物',
      body: '冬季，驯鹿会用前蹄刨雪，寻找下面的地衣等食物。夏季它也吃草和灌木叶片。图中的雪地与绿地表示不同季节的场景。',
    },
    {
      key: 'movement',
      label: '生活与认识',
      title: '有些鹿群走很远',
      body: '一些野生驯鹿种群随季节长距离迁移，也有活动范围较小的种群。这里把 reindeer 和 caribou 放在 Rangifer tarandus 下介绍，驯养个体与野生种群需要区分。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '让野生鹿群有路可走',
      body: '野生驯鹿的全球 IUCN 等级为易危。栖息地变化和人为干扰会影响鹿群；保护连通的栖地和迁移通道，有助于它们到达取食与繁殖地点。驯养数量不代表野生种群安全。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '鹿角也长在许多雌鹿头上',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Rangifer tarandus。驯鹿的雌雄都可能有角，旧角脱落后会重新长出，时间随性别和个体而异。“reindeer”和“caribou”在这里同属 Rangifer tarandus，驯养与野生群体需要分别记录。',
    },
  ],
  "keyFacts": [
    '雌雄都可能长角，雄鹿的通常更大。',
    '鹿角定期脱落再长，新角外面有鹿茸。',
    '宽蹄能张开，适合松软地面和雪地。',
    '冬季用前蹄刨雪寻找地衣。',
    '部分野生种群会季节性长途迁移。',
  ],
  "threats": [
    "栖息地变化与破碎",
    "气候变化",
    "人为干扰"
  ],
  "conservationActions": [
    "保护栖息地和迁移通道",
    "监测野生种群"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "头上的分叉角"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "地衣"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "苔原与北方森林"
    }
  ],
  "media": {
    "image": "./images/species/reindeer/01-cover.webp",
    "alt": "驯鹿与生活环境的全身场景",
    "focalPoint": {
      "x": 0.83,
      "y": 0.34
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/reindeer/02-observation.webp",
        "alt": "驯鹿侧身站立，完整鹿角伸向头顶上方",
        "title": "头上的分叉角",
        "caption": "AI 生成科学情景重建。驯鹿侧身站立，完整鹿角伸向头顶上方。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/reindeer/03-observation.webp",
        "alt": "驯鹿迈步时，宽蹄踩在苔原地面上",
        "title": "宽宽的蹄子",
        "caption": "AI 生成科学情景重建。驯鹿迈步时，宽蹄踩在苔原地面上。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/reindeer/04-observation.webp",
        "alt": "驯鹿用前蹄刨开浅雪，露出地面植被",
        "title": "前蹄刨开雪",
        "caption": "AI 生成科学情景重建。驯鹿用前蹄刨开浅雪，露出地面植被。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/reindeer/05-observation.webp",
        "alt": "驯鹿低头取食苔原上的矮生植物",
        "title": "低头吃植物",
        "caption": "AI 生成科学情景重建。驯鹿低头取食苔原上的矮生植物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/reindeer/06-observation.webp",
        "alt": "几只驯鹿沿着开阔苔原行走",
        "title": "一起走过苔原",
        "caption": "AI 生成科学情景重建。几只驯鹿沿着开阔苔原行走。",
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
      "title": "San Diego Zoo — 驯鹿分类、鹿角与食性",
      "url": "https://animals.sandiegozoo.org/animals/reindeer-caribou",
      "kind": "taxonomy",
      "accessedAt": "2026-09-12"
    },
    {
      "title": "San Diego Zoo — 驯鹿蹄部与季节性行为",
      "url": "https://animals.sandiegozoo.org/animals/reindeer-caribou",
      "kind": "ecology",
      "accessedAt": "2026-09-12"
    },
    {
      "title": "ASM Mammal Diversity Database — 驯鹿分类口径与全球易危等级",
      "url": "https://www.mammaldiversity.org/taxon/1006306/",
      "kind": "conservation",
      "accessedAt": "2026-09-12"
    },
    {
      "title": "Animal Diversity Web — 驯鹿刨雪取食与季节性移动",
      "url": "https://animaldiversity.org/accounts/Rangifer_tarandus/",
      "kind": "ecology",
      "accessedAt": "2026-09-12"
    },
    {
      title: 'GBIF：Rangifer tarandus 的命名作者与年份',
      url: 'https://www.gbif.org/species/5220114',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-12",
  "updatedAt": "2026-09-12"
} as const satisfies Species;

export default profile;
