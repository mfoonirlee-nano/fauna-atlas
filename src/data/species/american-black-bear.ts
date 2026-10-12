import type { Species } from '../../types/species.ts';

const profile = {
  "id": "american-black-bear",
  "slug": "american-black-bear",
  "names": {
    "zh": "美洲黑熊",
    "en": "American Black Bear"
  },
  "scientificName": "Ursus americanus",
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
      "scientificName": "Ursidae",
      "zhName": "熊科"
    },
    "genus": {
      "scientificName": "Ursus",
      "zhName": "熊属"
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
      "北美洲"
    ],
    "regions": [
      "森林、灌丛与林缘溪流"
    ],
    "countries": [],
    "range": "原生于加拿大、美国和墨西哥的部分地区。"
  },
  "habitats": [
    {
      "name": "森林、灌丛与林缘溪流",
      "realm": "terrestrial",
      "description": '森林、灌丛和林缘溪流附近提供食物与活动空间。树木能供黑熊攀爬，灌木中的浆果也是食物。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "浆果",
      "坚果",
      "昆虫",
      "鱼和腐肉"
    ],
    "description": '美洲黑熊吃植物和动物，也取食浆果，食物随地区与季节变化。'
  },
  "tags": [
    "美洲黑熊",
    "抱住树干往上爬"
  ],
  "summary": "美洲黑熊用弯爪攀爬树木，有圆耳朵。同种个体也可能长着棕色或浅色毛，毛色并不都黑。",
  "description": '美洲黑熊的弯爪能抓住树皮，让它攀爬树木。它吃植物和动物，浆果也是食物之一，食谱随地区与季节变化；幼熊会跟随母熊生活一段时间。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '抱着树干的小熊',
      body: '幼熊用爪抓住树皮，前后脚交替向上攀爬。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '圆耳朵和棕色嘴鼻',
      body: '美洲黑熊有圆耳朵，嘴鼻周围可呈棕色。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '灌木上的浆果',
      body: '黑熊也吃植物，浆果是它能取食的食物之一。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '沿溪流行走',
      body: '林缘溪流、石头和树木组成它会利用的环境。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '跟着妈妈的幼熊',
      body: '幼熊会跟随母熊生活一段时间。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为无危。妥善收好食物和垃圾、不投喂野熊，可以减少人熊冲突。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '黑熊的毛色也可能浅',
      body: 'Pallas 于 1780 年描述了这个物种，现用学名为 Ursus americanus。美洲黑熊的毛色并不都黑，同种个体也可能呈棕色或其他浅色。圆耳朵、弯爪和攀树能力也是辨认线索，名字中的“黑”不能单独决定物种鉴定。',
    },
  ],
  "keyFacts": [
    '幼熊用爪抓住树皮，前后脚交替向上攀爬。',
    '美洲黑熊有圆耳朵，嘴鼻周围可呈棕色。',
    '黑熊也吃植物，浆果是它能取食的食物之一。',
    '林缘溪流、石头和树木组成它会利用的环境。',
    '幼熊会跟随母熊生活一段时间。',
  ],
  "threats": [
    "栖息地破碎化",
    "人熊冲突"
  ],
  "conservationActions": [
    "维护森林连通性",
    "管理食物与垃圾",
    "避免投喂野熊"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "抱住树干往上爬"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "森林、灌丛与林缘溪流"
    }
  ],
  "media": {
    "image": "./images/species/american-black-bear/01-cover.webp",
    "alt": "美洲黑熊的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/american-black-bear/02-observation.webp",
        "title": "抱着树干的小熊",
        "alt": '抱着树干的小熊',
        "caption": "AI 生成科学情景重建。小熊用爪抓住树皮，前后脚交替向上。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-black-bear/03-observation.webp",
        "title": "圆耳朵和棕色嘴鼻",
        "alt": '圆耳朵和棕色嘴鼻',
        "caption": "AI 生成科学情景重建。找找头顶的两只圆耳朵，再看看嘴鼻周围的颜色。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-black-bear/04-observation.webp",
        "title": "灌木上的浆果",
        "alt": '灌木上的浆果',
        "caption": "AI 生成科学情景重建。黑熊也吃植物，图中的黑熊正在取食浆果。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-black-bear/05-observation.webp",
        "title": "沿溪流行走",
        "alt": '沿溪流行走',
        "caption": "AI 生成科学情景重建。看看溪水、石头和树木，这是黑熊能活动的环境之一。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-black-bear/06-observation.webp",
        "title": "跟着妈妈的幼熊",
        "alt": '跟着妈妈的幼熊',
        "caption": "AI 生成科学情景重建。幼熊会跟随母熊生活一段时间。图集中的个体不代表同一家庭的连续记录。",
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
      "title": "Animal Diversity Web：美洲黑熊分类",
      "url": "https://animaldiversity.org/accounts/Ursus_americanus/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "美国国家公园管理局：黑熊的食物与生活",
      "url": "https://www.nps.gov/subjects/bears/black-bears.htm",
      "kind": "ecology",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "Animal Diversity Web：美洲黑熊全球等级",
      "url": "https://animaldiversity.org/accounts/Ursus_americanus/",
      "kind": "conservation",
      "accessedAt": "2026-09-15"
    },
    {
      title: 'GBIF：Ursus americanus 的命名作者与年份',
      url: 'https://www.gbif.org/species/2433407',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-15",
  "updatedAt": "2026-09-15"
} as const satisfies Species;

export default profile;
