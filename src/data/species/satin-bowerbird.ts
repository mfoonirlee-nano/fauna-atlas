import type { Species } from '../../types/species.ts';

const profile = {
  "id": "satin-bowerbird",
  "slug": "satin-bowerbird",
  "names": {
    "zh": "缎蓝园丁鸟",
    "en": "Satin Bowerbird"
  },
  "scientificName": "Ptilonorhynchus violaceus",
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
      "scientificName": "Ptilonorhynchidae",
      "zhName": "园丁鸟科"
    },
    "genus": {
      "scientificName": "Ptilonorhynchus",
      "zhName": "缎蓝园丁鸟属"
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
    "assessor": '全球等级为 LC（无危）；独立评估日期尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "大洋洲"
    ],
    "regions": [
      "澳大利亚东部湿润森林"
    ],
    "countries": [
      "澳大利亚"
    ],
    "range": "分布于澳大利亚东部和东南部的湿润森林、林地及附近开阔地。"
  },
  "habitats": [
    {
      "name": "澳大利亚东部湿润森林",
      "realm": "terrestrial",
      "description": "分布于澳大利亚东部和东南部的湿润森林、林地及附近开阔地。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "果实",
      "昆虫",
      "叶子"
    ],
    "description": "食物包括果实、昆虫、叶子。"
  },
  "tags": [
    "缎蓝园丁鸟",
    "草茎搭的通道"
  ],
  "summary": '缎蓝园丁鸟雄鸟在地面搭通道、收集蓝色饰物求偶。雌鸟和年轻雄鸟偏黄绿，雌鸟在树上另筑育雏巢。',
  "description": "成年雄鸟的羽毛有蓝黑色光泽，雌鸟和年轻雄鸟偏黄绿色。雄鸟在地面搭建并装饰求偶场地，雌鸟在树上另筑育雏巢。",
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '草茎搭的通道',
      body: '雄鸟在地面搭起两排草茎和细枝，形成求偶时使用的通道。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '收集蓝色物件',
      body: '看看通道旁的蓝色花和羽毛。雄鸟会收集这些物件装饰求偶场地。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '雌鸟是黄绿色',
      body: '雌鸟背部偏橄榄绿，浅色腹面有深色鳞状花纹。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '树上才是育雏巢',
      body: '雌鸟在树或灌木上另筑巢，独自承担育雏工作。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '枝头找果实',
      body: '它们一年中主要吃果实，也会补充昆虫和叶子。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保留森林和林下环境，观察时不移动求偶场地里的枝条与饰物。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '求偶场地与育雏巢各在一处',
      body: 'Vieillot 在 1816 年发表了缎蓝园丁鸟的科学描述，今天采用 Ptilonorhynchus violaceus。“园丁鸟”容易让人联想到雄鸟装饰求偶场地的行为。它在地面搭草茎通道、收集蓝色物件，雌鸟则另在树上筑巢，独自养育幼鸟。',
    },
  ],
  "keyFacts": [
    "雄鸟在地面搭起两排草茎和细枝，形成求偶时使用的通道。",
    "看看通道旁的蓝色花和羽毛。雄鸟会收集这些物件装饰求偶场地。",
    "雌鸟背部偏橄榄绿，浅色腹面有深色鳞状花纹。",
    "雌鸟在树或灌木上另筑巢，独自承担育雏工作。",
    "它们一年中主要吃果实，也会补充昆虫和叶子。"
  ],
  "threats": [
    "湿润森林与林地受损的局地压力"
  ],
  "conservationActions": [
    "保留森林和林下环境，观察时不移动求偶场地里的枝条与饰物。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "草茎搭的通道"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "澳大利亚东部湿润森林"
    }
  ],
  "media": {
    "image": "./images/species/satin-bowerbird/01-cover.webp",
    "alt": "缎蓝园丁鸟在栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/satin-bowerbird/02-observation.webp",
        "title": "草茎搭的通道",
        "alt": "缎蓝园丁鸟：草茎搭的通道",
        "caption": "AI 生成科学情景重建。雄鸟在地面搭起两排草茎和细枝，形成求偶时使用的通道。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/satin-bowerbird/03-observation.webp",
        "title": "收集蓝色物件",
        "alt": "缎蓝园丁鸟：收集蓝色物件",
        "caption": "AI 生成科学情景重建。看看通道旁的蓝色花和羽毛。雄鸟会收集这些物件装饰求偶场地。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/satin-bowerbird/04-observation.webp",
        "title": "雌鸟是黄绿色",
        "alt": "缎蓝园丁鸟：雌鸟是黄绿色",
        "caption": "AI 生成科学情景重建。雌鸟背部偏橄榄绿，浅色腹面有深色鳞状花纹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/satin-bowerbird/05-observation.webp",
        "title": "树上才是育雏巢",
        "alt": "缎蓝园丁鸟：树上才是育雏巢",
        "caption": "AI 生成科学情景重建。雌鸟在树或灌木上另筑巢，独自承担育雏工作。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/satin-bowerbird/06-observation.webp",
        "title": "枝头找果实",
        "alt": "缎蓝园丁鸟：枝头找果实",
        "caption": "AI 生成科学情景重建。它们一年中主要吃果实，也会补充昆虫和叶子。",
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
      "title": "澳大利亚博物馆：缎蓝园丁鸟",
      "url": "https://australian.museum/learn/animals/birds/satin-bowerbird/",
      "kind": "ecology",
      "accessedAt": "2026-09-22"
    },
    {
      "title": "维多利亚博物馆：分类与 IUCN LC",
      "url": "https://collections.museumsvictoria.com.au/species/14376",
      "kind": "conservation",
      "accessedAt": "2026-09-22"
    },
    {
      title: 'GBIF：缎蓝园丁鸟的科学命名记录',
      url: 'https://www.gbif.org/species/5231665',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-22",
  "updatedAt": "2026-09-22"
} as const satisfies Species;

export default profile;
