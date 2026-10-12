import type { Species } from '../../types/species.ts';

const profile = {
  "id": "blue-tit",
  "slug": "blue-tit",
  "names": {
    "zh": "蓝山雀",
    "en": "Eurasian Blue Tit"
  },
  "scientificName": "Cyanistes caeruleus",
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
      "scientificName": "Passeriformes",
      "zhName": "雀形目"
    },
    "family": {
      "scientificName": "Paridae",
      "zhName": "山雀科"
    },
    "genus": {
      "scientificName": "Cyanistes",
      "zhName": "蓝山雀属"
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
    "assessor": "依据所列资料的全球等级；独立评估日期未核实"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲"
    ],
    "regions": [
      "欧洲及邻近西亚"
    ],
    "countries": [],
    "range": "分布于欧洲及邻近西亚，常在阔叶树枝叶间活动。"
  },
  "habitats": [
    {
      "name": "阔叶林、花园与灌丛",
      "realm": "terrestrial",
      "description": '阔叶林、花园和灌丛提供枝叶间的食物。树洞及合适巢箱可供繁殖，蓝山雀还会在浅水沐浴。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "昆虫",
      "蜘蛛",
      "种子"
    ],
    "description": "取食昆虫、蜘蛛、种子。"
  },
  "tags": [
    "蓝山雀",
    "倒挂着找食物"
  ],
  "summary": "蓝山雀抓紧细枝，有时倒挂着探向叶片下方寻找食物。它头顶和翅膀蓝色，脸颊白色，腹部黄色。",
  "description": '蓝山雀脚趾能抓紧细枝，倒挂探向叶片下面找食物。它吃昆虫、蜘蛛和种子，育雏时毛毛虫很重要；繁殖利用洞穴，也使用合适的巢箱。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '倒挂着找食物',
      body: '脚趾抓住细枝，身体倒挂，喙探向叶片下面。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '蓝帽子和白脸颊',
      body: '头顶和翅膀蓝色，脸颊白色，眼纹深色，腹部黄色。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '嘴边的小虫',
      body: '它捕食昆虫与蜘蛛，育雏时毛毛虫是重要食物。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '树洞旁的小鸟',
      body: '蓝山雀在洞穴中筑巢，也使用合适的巢箱。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '浅水里的小水花',
      body: '蓝山雀会在浅水中沐浴。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '留住它的生活环境',
      body: '蓝山雀全球属无危。树木枝叶和合适巢洞提供食物与繁殖位置，观察时应保持距离。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '蓝色头顶与倒挂取食',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Cyanistes caeruleus。蓝山雀的蓝色头顶和翅膀配着白脸、黄腹，是辨认线索。它的小脚还能抓紧细枝、倒挂伸向叶片下方，育雏时从枝叶间获取的毛毛虫是重要食物。',
    },
  ],
  "keyFacts": [
    '脚趾抓住细枝，身体倒挂，喙探向叶片下面。',
    '头顶和翅膀蓝色，脸颊白色，眼纹深色，腹部黄色。',
    '它捕食昆虫与蜘蛛，育雏时毛毛虫是重要食物。',
    '蓝山雀在洞穴中筑巢，也使用合适的巢箱。',
    '蓝山雀会在浅水中沐浴。',
  ],
  "threats": [
    "局地栖息环境改变与人为干扰"
  ],
  "conservationActions": [
    "保留原生植被和巢址",
    "野外观察保持距离"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "倒挂着找食物"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "阔叶林、花园与灌丛"
    }
  ],
  "media": {
    "image": "./images/species/blue-tit/01-cover.webp",
    "alt": "蓝山雀的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/blue-tit/02-observation.webp",
        "title": "倒挂着找食物",
        "alt": '倒挂着找食物',
        "caption": "AI 生成科学情景重建。小脚抓住上方的枝条，身体倒挂下来，嘴巴伸向叶片下面。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-tit/03-observation.webp",
        "title": "蓝帽子和白脸颊",
        "alt": '蓝帽子和白脸颊',
        "caption": "AI 生成科学情景重建。找找头顶的蓝色，再沿着眼睛看看深色的细纹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-tit/04-observation.webp",
        "title": "嘴边的小虫",
        "alt": '嘴边的小虫',
        "caption": "AI 生成科学情景重建。它会捕食昆虫和蜘蛛；育雏时，毛毛虫是重要的食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-tit/05-observation.webp",
        "title": "树洞旁的小鸟",
        "alt": '树洞旁的小鸟',
        "caption": "AI 生成科学情景重建。蓝山雀在洞穴中筑巢，也会使用合适的巢箱。远远看，不伸手探洞。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-tit/06-observation.webp",
        "title": "浅水里的小水花",
        "alt": '浅水里的小水花',
        "caption": "AI 生成科学情景重建。这张图展示浅水沐浴的姿态。找找羽毛旁边溅起的水滴。",
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
      "title": "BTO：蓝山雀分类与全球等级",
      "url": "https://www.bto.org/learn/about-birds/birdfacts/blue-tit",
      "kind": "conservation",
      "accessedAt": "2026-09-17"
    },
    {
      "title": "RSPB：蓝山雀识别与生态",
      "url": "https://www.rspb.org.uk/birds-and-wildlife/blue-tit/",
      "kind": "ecology",
      "accessedAt": "2026-09-17"
    },
    {
      title: 'GBIF：Cyanistes caeruleus 的命名作者与年份',
      url: 'https://www.gbif.org/species/2487879',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-17",
  "updatedAt": "2026-09-17"
} as const satisfies Species;

export default profile;
