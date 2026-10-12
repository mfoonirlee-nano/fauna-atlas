import type { Species } from '../../types/species.ts';

const profile = {
  "id": "bat-eared-fox",
  "slug": "bat-eared-fox",
  "names": {
    "zh": "大耳狐",
    "en": "Bat-eared Fox"
  },
  "scientificName": "Otocyon megalotis",
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
      "scientificName": "Otocyon",
      "zhName": "大耳狐属"
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
    "assessor": '全球等级为 LC；独立评估年份尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "非洲东部和南部"
    ],
    "countries": [],
    "range": "非洲东部和南部；主要见于稀树草原与短草地。"
  },
  "habitats": [
    {
      "name": "稀树草原与短草地",
      "realm": "terrestrial",
      "description": '非洲东部和南部的稀树草原、短草地。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "白蚁",
      "甲虫",
      "其他小型无脊椎动物"
    ],
    "description": "食物包括白蚁、甲虫、其他小型无脊椎动物。"
  },
  "tags": [
    "大耳狐",
    "稀树草原与短草地"
  ],
  "summary": '大耳狐在非洲短草地寻找白蚁等昆虫，宽耳帮助听声和散热。它利用地洞藏身，雄狐也参与育幼。',
  "description": '大耳狐生活在非洲东部和南部的短草地、稀树草原，主要找白蚁、甲虫等小型无脊椎动物。宽耳帮助听声，也参与散热，脸、腿和尾尖呈深色。它利用地洞休息和躲避危险，雄狐也参与照顾幼狐。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '宽大的耳朵',
      body: '两只耳朵比脸高出一大截。耳朵帮助它听见周围的声音，也参与散热。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '低头寻找白蚁',
      body: '大耳狐会在地面寻找白蚁等昆虫。鼻子贴近土面时，耳朵仍然竖在头顶。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '深色的小腿',
      body: '灰黄的身体下面是颜色较深的腿。看看它走路时，四只脚怎样交替落地。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '地洞旁休息',
      body: '大耳狐利用地洞躲避危险和休息。观察洞口时保持距离，不堵住它进出的路。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '幼狐跟在身旁',
      body: '成年大耳狐会照顾幼狐，雄狐也参与育幼。幼狐长大后，大耳朵会越来越显眼。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '本种的全球保护等级为 LC（无危），独立评估年份尚未确认。观察地洞旁的狐群时保持距离，给幼狐留下进出洞穴的路。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '学名也在说“大耳朵”',
      body: 'Desmarest 在 1822 年发表了大耳狐的科学描述，今天采用 Otocyon megalotis。圣迭戈动物园解释，学名的希腊语词根分别涉及“耳”“犬”和“大”，与宽大耳朵相对应。它与耳廓狐是不同种，大耳狐的主要食物包括白蚁。',
    },
  ],
  "keyFacts": [
    "两只耳朵比脸高出一大截。耳朵帮助它听见周围的声音，也参与散热。",
    "大耳狐会在地面寻找白蚁等昆虫。鼻子贴近土面时，耳朵仍然竖在头顶。",
    "灰黄的身体下面是颜色较深的腿。看看它走路时，四只脚怎样交替落地。",
    "大耳狐利用地洞躲避危险和休息。观察洞口时保持距离，不堵住它进出的路。",
    "成年大耳狐会照顾幼狐，雄狐也参与育幼。幼狐长大后，大耳朵会越来越显眼。"
  ],
  "threats": [],
  "conservationActions": [
    "观察时不捕捉、不投喂，保留它生活的环境。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "稀树草原与短草地"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "宽大的耳朵"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "无危",
      "note": "采用 Otocyon megalotis，不与耳廓狐混同。Mammal Diversity Database 列全球 IUCN 无危；独立评估年份未核实。"
    }
  ],
  "media": {
    "image": "./images/species/bat-eared-fox/01-cover.webp",
    "alt": "大耳狐及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/bat-eared-fox/02-observation.webp",
        "alt": "大耳狐：宽大的耳朵",
        "title": "宽大的耳朵",
        "caption": "AI 生成科学情景重建。两只耳朵比脸高出一大截。耳朵帮助它听见周围的声音，也参与散热。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bat-eared-fox/03-observation.webp",
        "alt": "大耳狐：低头寻找白蚁",
        "title": "低头寻找白蚁",
        "caption": "AI 生成科学情景重建。大耳狐会在地面寻找白蚁等昆虫。鼻子贴近土面时，耳朵仍然竖在头顶。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bat-eared-fox/04-observation.webp",
        "alt": "大耳狐：深色的小腿",
        "title": "深色的小腿",
        "caption": "AI 生成科学情景重建。灰黄的身体下面是颜色较深的腿。看看它走路时，四只脚怎样交替落地。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bat-eared-fox/05-observation.webp",
        "alt": "大耳狐：地洞旁休息",
        "title": "地洞旁休息",
        "caption": "AI 生成科学情景重建。大耳狐利用地洞躲避危险和休息。观察洞口时保持距离，不堵住它进出的路。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bat-eared-fox/06-observation.webp",
        "alt": "大耳狐：幼狐跟在身旁",
        "title": "幼狐跟在身旁",
        "caption": "AI 生成科学情景重建。成年大耳狐会照顾幼狐，雄狐也参与育幼。幼狐长大后，大耳朵会越来越显眼。",
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
      "title": "圣迭戈动物园：Bat-eared Fox",
      "url": "https://animals.sandiegozoo.org/animals/bat-eared-fox",
      "kind": "ecology",
      "accessedAt": "2026-09-24"
    },
    {
      "title": "Mammal Diversity Database：Otocyon megalotis",
      "url": "https://www.mammaldiversity.org/taxon/1005963/",
      "kind": "conservation",
      "accessedAt": "2026-09-24"
    },
    {
      title: 'GBIF：大耳狐的科学命名记录',
      url: 'https://www.gbif.org/species/2434349',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-24",
  "updatedAt": "2026-09-24"
} as const satisfies Species;

export default profile;
