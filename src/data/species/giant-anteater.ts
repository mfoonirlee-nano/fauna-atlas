import type { Species } from '../../types/species.ts';

const profile = {
  "id": "giant-anteater",
  "slug": "giant-anteater",
  "names": {
    "zh": "大食蚁兽",
    "en": "Giant Anteater"
  },
  "scientificName": "Myrmecophaga tridactyla",
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
      "scientificName": "Pilosa",
      "zhName": "披毛目"
    },
    "family": {
      "scientificName": "Myrmecophagidae",
      "zhName": "食蚁兽科"
    },
    "genus": {
      "scientificName": "Myrmecophaga",
      "zhName": "大食蚁兽属"
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
    "assessor": '全球等级为 VU（易危）；独立评估日期与种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "北美洲",
      "南美洲"
    ],
    "regions": [
      "中美洲与南美洲的草原、湿地和热带森林"
    ],
    "countries": [
      "巴西",
      "玻利维亚",
      "巴拉圭"
    ],
    "range": "中美洲与南美洲的草原、湿地和热带森林。列出的国家为代表性分布地，不是完整名录。"
  },
  "habitats": [
    {
      "name": "中美洲与南美洲的草原、湿地和热带森林",
      "realm": "terrestrial",
      "description": "中美洲与南美洲的草原、湿地和热带森林。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "蚂蚁",
      "白蚁"
    ],
    "description": "主要取食蚂蚁、白蚁。"
  },
  "tags": [
    "大食蚁兽",
    "长嘴里的细舌头"
  ],
  "summary": '大食蚁兽用黏而长的舌头取食蚂蚁和白蚁。它没有牙齿，走路时收起前爪，幼兽常伏在母兽背上。',
  "description": '大食蚁兽在中美洲和南美洲的草原、湿地及热带森林生活。它靠嗅觉寻找蚁巢，再把带黏液的长舌伸进去，粘住蚂蚁和白蚁。它没有牙齿，走路时把锋利的前爪收向掌心，用指关节着地。幼兽会爬上母兽的背，休息时母兽还能用蓬松尾巴盖住身体。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '长嘴里的细舌头',
      body: '大食蚁兽没有牙齿，会把带黏液的长舌头伸进蚁巢，粘住蚂蚁和白蚁。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '收起前爪走路',
      body: '它把锋利的前爪收向掌心，用前足的指关节着地行走。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '毛茸茸的大尾巴',
      body: '休息时，它可以把蓬松的尾巴盖在身上。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '妈妈背着幼兽',
      body: '幼兽出生后会爬上妈妈的背，跟着妈妈一起移动。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '低头闻一闻',
      body: '它的嗅觉灵敏，会低头寻找蚁巢。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保留草原与森林之间的通道，减少道路碰撞和人为火灾。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '长舌食蚁兽的科学记录',
      body: 'Linnaeus 在 1758 年发表了大食蚁兽的科学名称 Myrmecophaga tridactyla。中文名中的“食蚁”很好记，但它取食时靠的是黏舌而非牙齿；这种动物根本没有牙齿。幼兽背在母兽背上的姿势，则能帮助人们认识它的育幼生活。',
    },
  ],
  "keyFacts": [
    "大食蚁兽没有牙齿，会把带黏液的长舌头伸进蚁巢，粘住蚂蚁和白蚁。",
    "它把锋利的前爪收向掌心，用前足的指关节着地行走。",
    "休息时，它可以把蓬松的尾巴盖在身上。",
    "幼兽出生后会爬上妈妈的背，跟着妈妈一起移动。",
    "它的嗅觉灵敏，会低头寻找蚁巢。"
  ],
  "threats": [
    "栖息地减少",
    "道路碰撞",
    "野火"
  ],
  "conservationActions": [
    "保留草原与森林之间的通道，减少道路碰撞和人为火灾。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "长嘴里的细舌头"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "中美洲与南美洲的草原、湿地和热带森林"
    }
  ],
  "media": {
    "image": "./images/species/giant-anteater/01-cover.webp",
    "alt": "大食蚁兽在自然栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/giant-anteater/02-observation.webp",
        "title": "长嘴里的细舌头",
        "alt": "大食蚁兽：长嘴里的细舌头",
        "caption": "AI 生成科学情景重建。大食蚁兽没有牙齿，会把带黏液的长舌头伸进蚁巢，粘住蚂蚁和白蚁。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-anteater/03-observation.webp",
        "title": "收起前爪走路",
        "alt": "大食蚁兽：收起前爪走路",
        "caption": "AI 生成科学情景重建。它把锋利的前爪收向掌心，用前足的指关节着地行走。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-anteater/04-observation.webp",
        "title": "毛茸茸的大尾巴",
        "alt": "大食蚁兽：毛茸茸的大尾巴",
        "caption": "AI 生成科学情景重建。休息时，它可以把蓬松的尾巴盖在身上。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-anteater/05-observation.webp",
        "title": "妈妈背着幼兽",
        "alt": "大食蚁兽：妈妈背着幼兽",
        "caption": "AI 生成科学情景重建。幼兽出生后会爬上妈妈的背，跟着妈妈一起移动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-anteater/06-observation.webp",
        "title": "低头闻一闻",
        "alt": "大食蚁兽：低头闻一闻",
        "caption": "AI 生成科学情景重建。它的嗅觉灵敏，会低头寻找蚁巢。",
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
      "title": "史密森国家动物园：自然史",
      "url": "https://nationalzoo.si.edu/animals/giant-anteater",
      "kind": "ecology",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "IUCN 食蚁兽专家组：易危状态",
      "url": "https://xenarthrans.org/species/anteaters/anteaters-giant-anteater/",
      "kind": "conservation",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "MDD：接受学名与分类",
      "url": "https://www.mammaldiversity.org/taxon/1000442/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-20"
    },
    {
      title: 'GBIF：大食蚁兽的科学命名记录',
      url: 'https://www.gbif.org/species/2436346',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-20",
  "updatedAt": "2026-09-20"
} as const satisfies Species;

export default profile;
