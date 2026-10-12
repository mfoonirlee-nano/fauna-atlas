import type { Species } from '../../types/species.ts';

const profile = {
  "id": "numbat",
  "slug": "numbat",
  "names": {
    "zh": "袋食蚁兽",
    "en": "Numbat"
  },
  "scientificName": "Myrmecobius fasciatus",
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
      "scientificName": "Dasyuromorphia",
      "zhName": "袋鼬目"
    },
    "family": {
      "scientificName": "Myrmecobiidae",
      "zhName": "袋食蚁兽科"
    },
    "genus": {
      "scientificName": "Myrmecobius",
      "zhName": "袋食蚁兽属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "EN",
    "label": {
      "zh": "濒危",
      "en": "Endangered"
    },
    "trend": "unknown",
    "assessor": '全球等级为 EN（濒危）；独立评估日期尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "大洋洲"
    ],
    "regions": [
      "澳大利亚西南部"
    ],
    "countries": [
      "澳大利亚"
    ],
    "range": "自然残存种群位于澳大利亚西南部；保护机构也在历史分布范围内开展再引入。"
  },
  "habitats": [
    {
      "name": "桉树林与疏林",
      "realm": "terrestrial",
      "description": "自然残存种群位于澳大利亚西南部；保护机构也在历史分布范围内开展再引入。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "白蚁"
    ],
    "description": "食物包括白蚁。"
  },
  "tags": [
    "袋食蚁兽",
    "尖嘴找白蚁"
  ],
  "summary": '袋食蚁兽白天在地面寻找白蚁，用细长舌头取食。背后有白色横纹，炎热时躲进树洞或洞穴。',
  "description": "袋食蚁兽是白天活动的有袋哺乳动物。它有尖尖的嘴、蓬松的长尾巴，身体后半部横着几道白纹，主要在林地地面寻找白蚁。",
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '尖嘴找白蚁',
      body: '袋食蚁兽在地表附近寻找白蚁通道，用细长的舌头取食。它不能像大食蚁兽那样破开坚硬的大蚁丘。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '背上的白条纹',
      body: '从侧面看看身体后半部的白色横纹，再找找眼旁的深色条纹。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '短腿向前走',
      body: '四条短腿支撑身体在林地走动，长尾巴跟在身后。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '空心木头里的住处',
      body: '炎热时段它会躲进空心倒木或洞穴，等天气凉一些再出来觅食。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '白天出来活动',
      body: '袋食蚁兽在白天活动，觅食时段会随白蚁在土里的活动深度和季节变化。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保护林地和空心倒木，支持外来捕食者控制与保护繁育。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '白天找白蚁的有袋动物',
      body: 'Waterhouse 在 1836 年发表 Myrmecobius fasciatus 这个名称。中文名“袋食蚁兽”把有袋动物的身份和取食习惯放在一起，但它的食物以白蚁为主。它不能像大型食蚁兽那样拆开坚硬蚁丘，白天沿地面寻找较容易够到的白蚁。',
    },
  ],
  "keyFacts": [
    "袋食蚁兽在地表附近寻找白蚁通道，用细长的舌头取食。它不能像大食蚁兽那样破开坚硬的大蚁丘。",
    "从侧面看看身体后半部的白色横纹，再找找眼旁的深色条纹。",
    "四条短腿支撑身体在林地走动，长尾巴跟在身后。",
    "炎热时段它会躲进空心倒木或洞穴，等天气凉一些再出来觅食。",
    "袋食蚁兽在白天活动，觅食时段会随白蚁在土里的活动深度和季节变化。"
  ],
  "threats": [
    "林地清理",
    "火灾",
    "外来狐狸和猫捕食"
  ],
  "conservationActions": [
    "保护林地和空心倒木，支持外来捕食者控制与保护繁育。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "尖嘴找白蚁"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "桉树林与疏林"
    }
  ],
  "media": {
    "image": "./images/species/numbat/01-cover.webp",
    "alt": "袋食蚁兽在桉树林与疏林中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/numbat/02-observation.webp",
        "title": "尖嘴找白蚁",
        "alt": "袋食蚁兽：尖嘴找白蚁",
        "caption": "AI 生成科学情景重建。袋食蚁兽在地表附近寻找白蚁通道，用细长的舌头取食。它不能像大食蚁兽那样破开坚硬的大蚁丘。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/numbat/03-observation.webp",
        "title": "背上的白条纹",
        "alt": "袋食蚁兽：背上的白条纹",
        "caption": "AI 生成科学情景重建。从侧面看看身体后半部的白色横纹，再找找眼旁的深色条纹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/numbat/04-observation.webp",
        "title": "短腿向前走",
        "alt": "袋食蚁兽：短腿向前走",
        "caption": "AI 生成科学情景重建。四条短腿支撑身体在林地走动，长尾巴跟在身后。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/numbat/05-observation.webp",
        "title": "空心木头里的住处",
        "alt": "袋食蚁兽：空心木头里的住处",
        "caption": "AI 生成科学情景重建。炎热时段它会躲进空心倒木或洞穴，等天气凉一些再出来觅食。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/numbat/06-observation.webp",
        "title": "白天出来活动",
        "alt": "袋食蚁兽：白天出来活动",
        "caption": "AI 生成科学情景重建。袋食蚁兽在白天活动，觅食时段会随白蚁在土里的活动深度和季节变化。",
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
      "title": "珀斯动物园：袋食蚁兽自然史",
      "url": "https://perthzoo.wa.gov.au/animal/numbat",
      "kind": "ecology",
      "accessedAt": "2026-09-22"
    },
    {
      "title": "美国哺乳动物学会 MDD：分类与全球 EN",
      "url": "https://www.mammaldiversity.org/taxon/1000219/",
      "kind": "conservation",
      "accessedAt": "2026-09-22"
    },
    {
      "title": "ADW：自然残存范围与再引入",
      "url": "https://animaldiversity.org/accounts/Myrmecobius_fasciatus/",
      "kind": "distribution",
      "accessedAt": "2026-09-22"
    },
    {
      title: 'GBIF：袋食蚁兽的科学命名记录',
      url: 'https://www.gbif.org/species/5219465',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-22",
  "updatedAt": "2026-09-22"
} as const satisfies Species;

export default profile;
