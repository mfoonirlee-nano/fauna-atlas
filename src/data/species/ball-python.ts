import type { Species } from '../../types/species.ts';

const profile = {
  "id": "ball-python",
  "slug": "ball-python",
  "names": {
    "zh": "球蟒",
    "en": "Ball Python"
  },
  "scientificName": "Python regius",
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
      "scientificName": "Reptilia",
      "zhName": "爬行纲"
    },
    "order": {
      "scientificName": "Squamata",
      "zhName": "有鳞目"
    },
    "family": {
      "scientificName": "Pythonidae",
      "zhName": "蟒科"
    },
    "genus": {
      "scientificName": "Python",
      "zhName": "蟒属"
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
    "assessor": "依据所列资料的全球等级；独立评估日期未核实"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "非洲"
    ],
    "regions": [
      "非洲西部与中部及邻近地区"
    ],
    "countries": [],
    "range": "原生于非洲西部和中部及邻近地区，生活在草地、稀树草原与开阔林地，也利用洞穴躲藏。"
  },
  "habitats": [
    {
      "name": "稀树草原与开阔林地",
      "realm": "terrestrial",
      "description": "原生于非洲西部和中部及邻近地区，生活在草地、稀树草原与开阔林地，也利用洞穴躲藏。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小型哺乳动物",
      "鸟类"
    ],
    "description": "取食小型哺乳动物、鸟类。"
  },
  "tags": [
    "球蟒",
    "把头藏进身体里"
  ],
  "summary": "球蟒遇到威胁时常蜷成球，把头藏在中间。它身体粗壮、尾短，会利用洞穴躲藏，也捕食小型动物。",
  "description": '球蟒原生于非洲西部、中部及邻近地区，在草地、稀树草原和开阔林地生活，常借洞穴藏身。它多在黄昏和夜间寻找小型哺乳动物或鸟类，嘴边的热感受小凹窝能帮助寻找猎物。野生型个体身体粗壮、尾短，带深浅褐色斑纹；受到威胁时常蜷成球，把头护在中间。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '把头藏进身体里',
      body: '受威胁时，它可能蜷成球状，把头保护在身体中间。不要为了观察而惊扰蛇。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '贴着地面前进',
      body: '它没有四肢，靠身体肌肉和腹部鳞片配合，在地面上移动。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '嘴边的小凹窝',
      body: '上唇附近的小凹窝能感受热，有助于它寻找温暖的猎物。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '洞口的遮蔽',
      body: '它会利用洞穴藏身，在遮蔽处休息。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '傍晚的草地',
      body: '球蟒多在黄昏和夜间活动，寻找小型哺乳动物或鸟类。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '留住它的生活环境',
      body: '全球保护等级为近危。保护原生栖息地，减少野生捕捉。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '王室名称和球形身体',
      body: 'Shaw 在 1802 年用 Boa regia 这个名称描述球蟒，后来它归入 Python 属。今天的种名 regius 有“王室的”含义，所以它也有 Royal Python 这个英文名。“球蟒”描述的是另一件事：它受到威胁时常把身体蜷成一团。',
    },
  ],
  "keyFacts": [
    "受威胁时，它可能蜷成球状，把头保护在身体中间。不要为了观察而惊扰蛇。",
    "它没有四肢，靠身体肌肉和腹部鳞片配合，在地面上移动。",
    "上唇附近的小凹窝能感受热，有助于它寻找温暖的猎物。",
    "它会利用洞穴藏身，在遮蔽处休息。",
    "球蟒多在黄昏和夜间活动，寻找小型哺乳动物或鸟类。"
  ],
  "threats": [
    "野生个体捕捉与贸易",
    "栖息地改变"
  ],
  "conservationActions": [
    "保护原生栖息地",
    "减少野生捕捉"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "把头藏进身体里"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "稀树草原与开阔林地"
    }
  ],
  "media": {
    "image": "./images/species/ball-python/01-cover.webp",
    "alt": "球蟒的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/ball-python/02-observation.webp",
        "title": "把头藏进身体里",
        "alt": "球蟒：把头藏进身体里",
        "caption": "AI 生成科学情景重建。受威胁时，它可能蜷成球状，把头保护在身体中间。不要为了观察而惊扰蛇。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ball-python/03-observation.webp",
        "title": "贴着地面前进",
        "alt": "球蟒：贴着地面前进",
        "caption": "AI 生成科学情景重建。它没有四肢，靠身体肌肉和腹部鳞片配合，在地面上移动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ball-python/04-observation.webp",
        "title": "嘴边的小凹窝",
        "alt": "球蟒：嘴边的小凹窝",
        "caption": "AI 生成科学情景重建。上唇附近的小凹窝能感受热，有助于它寻找温暖的猎物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ball-python/05-observation.webp",
        "title": "洞口的遮蔽",
        "alt": "球蟒：洞口的遮蔽",
        "caption": "AI 生成科学情景重建。它会利用洞穴藏身，在遮蔽处休息。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ball-python/06-observation.webp",
        "title": "傍晚的草地",
        "alt": "球蟒：傍晚的草地",
        "caption": "AI 生成科学情景重建。球蟒多在黄昏和夜间活动，寻找小型哺乳动物或鸟类。",
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
      "title": "ADW：球蟒",
      "url": "https://animaldiversity.org/accounts/Python_regius/",
      "kind": "ecology",
      "accessedAt": "2026-09-19"
    },
    {
      "title": "The Reptile Database：球蟒",
      "url": "https://reptile-database.reptarium.cz/Python/regius",
      "kind": "taxonomy",
      "accessedAt": "2026-09-19"
    },
    {
      "title": "IUCN 2021 等级变更记录",
      "url": "https://nc.iucnredlist.org/redlist/content/attachment_files/2021-2_RL_Stats_Table_7.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-19"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-19",
  "updatedAt": "2026-09-19"
} as const satisfies Species;

export default profile;
