import type { Species } from '../../types/species.ts';

const profile = {
  "id": "blue-shark",
  "slug": "blue-shark",
  "names": {
    "zh": "蓝鲨",
    "en": "Blue Shark"
  },
  "scientificName": "Prionace glauca",
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
      "scientificName": "Chondrichthyes",
      "zhName": "软骨鱼纲"
    },
    "order": {
      "scientificName": "Carcharhiniformes",
      "zhName": "真鲨目"
    },
    "family": {
      "scientificName": "Carcharhinidae",
      "zhName": "真鲨科"
    },
    "genus": {
      "scientificName": "Prionace",
      "zhName": "大青鲨属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "NT",
    "label": {
      "zh": "近危",
      "en": "Near Threatened"
    },
    "trend": "unknown",
    "assessor": "依据所列来源中的全球等级；未单独核实评估日期"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "大西洋",
      "太平洋",
      "印度洋"
    ],
    "countries": [],
    "range": "广布于全球温带和热带海洋，主要在外海活动，可进行跨海域迁移。",
    "center": {
      "lat": 30,
      "lng": -35
    }
  },
  "habitats": [
    {
      "name": "开阔海洋",
      "realm": "marine",
      "description": "广布于全球温带和热带海洋，主要在外海活动，可进行跨海域迁移。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鱼类",
      "鱿鱼"
    ],
    "description": "取食鱼类、鱿鱼。"
  },
  "tags": [
    "蓝鲨",
    "长长的胸鳍"
  ],
  "summary": "蓝鲨身体细长、背蓝腹白，胸鳍很长。它在开阔海洋取食鱼类和鱿鱼，也会跨越很远的海域。",
  "description": '蓝鲨广布全球温带和热带海洋，主要在外海活动，能进行长距离迁移。它身体细长，吻部尖长，两侧伸出很长的胸鳍。蓝色背部向白色腹部过渡；在开阔海洋中，它取食鱼类和鱿鱼，也会游到较深的水层。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '长长的胸鳍',
      body: '看看胸部两侧伸出的鳍，细长而尖。它们是蓝鲨明显的外形特点。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '蓝背和白肚子',
      body: '从侧面看，背部的蓝色向浅色腹部过渡。水深和光线会影响看到的颜色。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '尖长的吻部',
      body: '找找眼睛前方伸出的吻部。蓝鲨的头部轮廓较细长。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '海面下面的游泳者',
      body: '它会在近水面活动，也能潜到更深的水中。图库只重建其中一个场景。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '在外海转弯',
      body: '尾部摆动推动身体前进。蓝鲨能在开阔海洋中长距离迁移。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保护生活的水域',
      body: '全球等级为近危。地中海地区的等级不同，不以地区等级替代全球等级；减少捕捞和误捕压力仍很重要。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '三个名字都提到了蓝色',
      body: 'Linnaeus 在 1758 年描述了蓝鲨，历史名称中包括 Squalus glaucus，今天常用 Prionace glauca。佛罗里达自然历史博物馆把种名 glauca 解释为蓝灰色或绿色，指它的蓝色体色。中文名“蓝鲨”和英文名 Blue Shark 也都点出了背部的颜色。',
    },
  ],
  "keyFacts": [
    "看看胸部两侧伸出的鳍，细长而尖。它们是蓝鲨明显的外形特点。",
    "从侧面看，背部的蓝色向浅色腹部过渡。水深和光线会影响看到的颜色。",
    "找找眼睛前方伸出的吻部。蓝鲨的头部轮廓较细长。",
    "它会在近水面活动，也能潜到更深的水中。图库只重建其中一个场景。",
    "尾部摆动推动身体前进。蓝鲨能在开阔海洋中长距离迁移。"
  ],
  "threats": [
    "定向捕捞",
    "延绳钓等渔具误捕"
  ],
  "conservationActions": [
    "减少误捕死亡",
    "跨海域协调渔业管理"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "长长的胸鳍"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "开阔海洋"
    }
  ],
  "media": {
    "image": "./images/species/blue-shark/01-cover.webp",
    "alt": "蓝鲨的完整身体与水中环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/blue-shark/02-observation.webp",
        "title": "长长的胸鳍",
        "alt": "蓝鲨：长长的胸鳍",
        "caption": "AI 生成科学情景重建。看看胸部两侧伸出的鳍，细长而尖。它们是蓝鲨明显的外形特点。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-shark/03-observation.webp",
        "title": "蓝背和白肚子",
        "alt": "蓝鲨：蓝背和白肚子",
        "caption": "AI 生成科学情景重建。从侧面看，背部的蓝色向浅色腹部过渡。水深和光线会影响看到的颜色。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-shark/04-observation.webp",
        "title": "尖长的吻部",
        "alt": "蓝鲨：尖长的吻部",
        "caption": "AI 生成科学情景重建。找找眼睛前方伸出的吻部。蓝鲨的头部轮廓较细长。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-shark/05-observation.webp",
        "title": "海面下面的游泳者",
        "alt": "蓝鲨：海面下面的游泳者",
        "caption": "AI 生成科学情景重建。它会在近水面活动，也能潜到更深的水中。图库只重建其中一个场景。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-shark/06-observation.webp",
        "title": "在外海转弯",
        "alt": "蓝鲨：在外海转弯",
        "caption": "AI 生成科学情景重建。尾部摆动推动身体前进。蓝鲨能在开阔海洋中长距离迁移。",
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
      "title": "Florida Museum：蓝鲨分类与形态",
      "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/blue-shark/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "CMS：蓝鲨迁移与全球等级",
      "url": "https://www.cms.int/species/prionace-glauca",
      "kind": "conservation",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "Florida Museum：蓝鲨生态",
      "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/blue-shark/",
      "kind": "ecology",
      "accessedAt": "2026-09-20"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-20",
  "updatedAt": "2026-09-20"
} as const satisfies Species;

export default profile;
