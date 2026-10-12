import type { Species } from '../../types/species.ts';

const profile = {
  "id": "gray-wolf",
  "slug": "gray-wolf",
  "names": {
    "zh": "灰狼",
    "en": "Gray Wolf"
  },
  "scientificName": "Canis lupus",
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
      "scientificName": "Carnivora",
      "zhName": "食肉目"
    },
    "family": {
      "scientificName": "Canidae",
      "zhName": "犬科"
    },
    "genus": {
      "scientificName": "Canis",
      "zhName": "犬属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "trend": "stable",
    "assessor": "依据所列资料中的全球等级；未单独核实评估日期"
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
      "欧亚大陆",
      "北美洲"
    ],
    "countries": [],
    "range": "分布于欧亚大陆和北美洲的适宜生境，部分历史分布区已经失去狼群。"
  },
  "habitats": [
    {
      "name": "森林、草原与苔原",
      "realm": "terrestrial",
      "description": '灰狼利用森林、草原和苔原等环境寻找猎物。狼群需要足够的活动空间和野生猎物，也需要减少与牧业的冲突。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鹿",
      "马鹿",
      "野兔",
      "其他哺乳动物"
    ],
    "description": "主要吃肉，常捕食有蹄类，也取食小型哺乳动物和腐肉。"
  },
  "tags": [
    "灰狼",
    "抬头嚎叫"
  ],
  "summary": "灰狼有长腿、较长的口鼻和蓬松尾巴，会抬头嚎叫。毛色可混有灰、褐、黑、白，也有近乎全白或全黑的个体。",
  "description": '灰狼常以亲代和后代组成家庭群体，成员共同照顾幼狼。它们用嚎叫联络，用嗅觉寻找食物和了解同伴活动；长腿能支撑狼在森林、草原和苔原移动。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '抬头嚎叫',
      body: '狼用嚎叫与同伴联络，白天也会嚎叫，月亮不是嚎叫的条件。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '洞口的一家',
      body: '狼群常由亲代和后代组成，群体成员会照顾幼狼。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '走过林间小路',
      body: '长腿支撑身体，蓬松尾巴在行走时垂于后方。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '耳朵和长嘴巴',
      body: '灰狼有竖起的耳朵和较长口鼻，毛色可以灰、褐、黑、白相混。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '低头闻一闻',
      body: '狼用嗅觉寻找食物，也通过气味了解同伴的活动。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为无危，全球趋势稳定，各地种群处境有差异。保护生境和野生猎物、减少与牧业的冲突，有助于狼群生存。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '灰狼也有白色和黑色个体',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Canis lupus。“灰狼”这个名字不能概括所有毛色，同种个体也可接近全白或全黑。它们组成的狼群常是亲代与后代的家庭，嚎叫用于联络，白天也能听到。',
    },
  ],
  "keyFacts": [
    '狼用嚎叫与同伴联络，白天也会嚎叫，月亮不是嚎叫的条件。',
    '狼群常由亲代和后代组成，群体成员会照顾幼狼。',
    '长腿支撑身体，蓬松尾巴在行走时垂于后方。',
    '灰狼有竖起的耳朵和较长口鼻，毛色可以灰、褐、黑、白相混。',
    '狼用嗅觉寻找食物，也通过气味了解同伴的活动。',
  ],
  "threats": [
    "人兽冲突造成的捕杀",
    "栖息地破碎化",
    "猎物减少"
  ],
  "conservationActions": [
    "保护连通的栖息地",
    "改善家畜防护",
    "监测地方种群"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "抬头嚎叫"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "森林、草原与苔原"
    }
  ],
  "media": {
    "image": "./images/species/gray-wolf/01-cover.webp",
    "alt": "灰狼的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/gray-wolf/02-observation.webp",
        "title": "抬头嚎叫",
        "alt": '抬头嚎叫',
        "caption": "AI 生成科学情景重建。狼会用嚎叫与同伴联络。白天也会嚎叫，不需要等到月亮出现。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/gray-wolf/03-observation.webp",
        "title": "洞口的一家",
        "alt": '洞口的一家',
        "caption": "AI 生成科学情景重建。狼群常由亲代和后代组成，群体成员会照顾幼狼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/gray-wolf/04-observation.webp",
        "title": "走过林间小路",
        "alt": '走过林间小路',
        "caption": "AI 生成科学情景重建。找找迈开的长腿和垂在后面的蓬松尾巴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/gray-wolf/05-observation.webp",
        "title": "耳朵和长嘴巴",
        "alt": '耳朵和长嘴巴',
        "caption": "AI 生成科学情景重建。看看竖起的耳朵，再找找向前伸出的口鼻。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/gray-wolf/06-observation.webp",
        "title": "低头闻一闻",
        "alt": '低头闻一闻',
        "caption": "AI 生成科学情景重建。狼会用嗅觉寻找食物，也通过气味了解同伴的活动。",
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
      "title": "Animal Diversity Web：灰狼分类与生态",
      "url": "https://animaldiversity.org/accounts/Canis_lupus/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "IUCN 犬科专家组：灰狼全球等级",
      "url": "https://www.canids.org/species/view/PREKLD895731",
      "kind": "conservation",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "美国国家公园管理局：灰狼",
      "url": "https://www.nps.gov/articles/life-of-a-wolf.htm",
      "kind": "ecology",
      "accessedAt": "2026-09-15"
    },
    {
      title: 'GBIF：Canis lupus 的命名作者与年份',
      url: 'https://www.gbif.org/species/5219173',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-15",
  "updatedAt": "2026-09-15"
} as const satisfies Species;

export default profile;
