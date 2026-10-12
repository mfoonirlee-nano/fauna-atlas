import type { Species } from '../../types/species.ts';

const profile = {
  "id": "arctic-fox",
  "slug": "arctic-fox",
  "names": {
    "zh": "北极狐",
    "en": "Arctic Fox"
  },
  "scientificName": "Vulpes lagopus",
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
      "scientificName": "Vulpes",
      "zhName": "狐属"
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
      "亚洲",
      "欧洲",
      "北美洲"
    ],
    "regions": [
      "北极苔原与沿海地区"
    ],
    "countries": [],
    "range": "分布于欧亚大陆、北美洲及格陵兰、冰岛等北极和亚北极地区。"
  },
  "habitats": [
    {
      "name": "苔原、雪地与寒冷海岸",
      "realm": "terrestrial",
      "description": '北极狐利用苔原、雪地和寒冷海岸寻找食物。地下洞穴供它们育幼，海岸取食机会随当地环境变化。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "旅鼠等小型哺乳动物",
      "鸟和鸟卵",
      "腐肉",
      "浆果"
    ],
    "description": "会捕食小动物，也吃腐肉和浆果，食物随地区与季节变化。"
  },
  "tags": [
    "北极狐",
    "冬夏不同的毛色"
  ],
  "summary": "白色型北极狐冬毛多为白色，夏季背部转为灰褐色；蓝色型则常年较深。短圆耳朵和蓬松尾巴也是辨认线索。",
  "description": '北极狐的短圆耳朵周围有厚毛，休息时能蜷起身体，把蓬松尾巴围在身旁。它在苔原和海岸寻找小动物、腐肉及浆果，在地下洞穴育幼。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '短圆耳朵藏在厚毛里',
      body: '北极狐有短圆耳朵，脸部周围长着厚毛。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '夏天换上灰褐色毛',
      body: '白色型北极狐夏季背部换成灰褐色毛，冬毛多为白色；蓝色型常年较深。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '把尾巴绕到身旁',
      body: '休息时，北极狐能蜷起身体，把蓬松尾巴围在身旁。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '沿着海岸寻找食物',
      body: '北极狐也沿海岸活动，食物机会随地区和季节变化。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '洞口的小狐狸',
      body: '北极狐在地下洞穴中育幼，幼狐会在洞口活动。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为无危，部分地区种群仍面临压力。气候变化及与赤狐的竞争需要关注；保护苔原与繁殖洞穴时要考虑当地情况。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '冬白夏褐，还存在蓝色型',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Vulpes lagopus。北极狐的名称对应寒冷的北极及亚北极家园。白色型随季节换毛，冬季多白、夏季背部灰褐；蓝色型却常年较深，因此深色北极狐并不一定是夏毛个体。',
    },
  ],
  "keyFacts": [
    '北极狐有短圆耳朵，脸部周围长着厚毛。',
    '白色型北极狐夏季背部换成灰褐色毛，冬毛多为白色；蓝色型常年较深。',
    '休息时，北极狐能蜷起身体，把蓬松尾巴围在身旁。',
    '北极狐也沿海岸活动，食物机会随地区和季节变化。',
    '北极狐在地下洞穴中育幼，幼狐会在洞口活动。',
  ],
  "threats": [
    "气候变化",
    "与赤狐竞争",
    "部分地区的捕猎压力"
  ],
  "conservationActions": [
    "保护苔原生境",
    "减少繁殖洞穴干扰",
    "监测地方种群"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "冬夏不同的毛色"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "苔原、雪地与寒冷海岸"
    }
  ],
  "media": {
    "image": "./images/species/arctic-fox/01-cover.webp",
    "alt": "北极狐的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/arctic-fox/02-observation.webp",
        "title": "冬毛里的短圆耳朵",
        "alt": '冬毛里的短圆耳朵',
        "caption": "AI 生成科学情景重建。找找头顶的小耳朵，再看看脸周围的厚毛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/arctic-fox/03-observation.webp",
        "title": "白色型的灰褐色夏毛",
        "alt": '白色型的灰褐色夏毛',
        "caption": "AI 生成科学情景重建。图集展示白色型的夏毛，与封面的冬毛比较颜色；不是同一个体的连续记录。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/arctic-fox/04-observation.webp",
        "title": "蜷起身体与尾巴",
        "alt": '蜷起身体与尾巴',
        "caption": "AI 生成科学情景重建。休息时，北极狐能把身体蜷起，让蓬松尾巴围在身旁。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/arctic-fox/05-observation.webp",
        "title": "海岸上的北极狐",
        "alt": '海岸上的北极狐',
        "caption": "AI 生成科学情景重建。北极狐也会在海岸活动，取食机会随当地环境变化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/arctic-fox/06-observation.webp",
        "title": "洞口的幼狐",
        "alt": '洞口的幼狐',
        "caption": "AI 生成科学情景重建。北极狐在洞穴中育幼。图中幼狐站在洞口，洞道延伸到地下。",
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
      "title": "Animal Diversity Web：北极狐分类",
      "url": "https://animaldiversity.org/accounts/Vulpes_lagopus/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "挪威极地研究所：北极狐毛色与生境",
      "url": "https://npolar.no/en/species/arctic-fox/",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Animal Diversity Web：北极狐全球等级",
      "url": "https://animaldiversity.org/accounts/Vulpes_lagopus/",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Vulpes lagopus 的命名作者与年份',
      url: 'https://www.gbif.org/species/5219303',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
