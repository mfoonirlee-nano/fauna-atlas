import type { Species } from '../../types/species.ts';

const profile = {
  "id": "chimpanzee",
  "slug": "chimpanzee",
  "names": {
    "zh": "黑猩猩",
    "en": "Chimpanzee"
  },
  "scientificName": "Pan troglodytes",
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
      "scientificName": "Primates",
      "zhName": "灵长目"
    },
    "family": {
      "scientificName": "Hominidae",
      "zhName": "人科"
    },
    "genus": {
      "scientificName": "Pan",
      "zhName": "黑猩猩属"
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
    "assessor": "IUCN；等级来源与适用范围见来源记录"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "非洲"
    ],
    "regions": [
      "西非与中非森林"
    ],
    "countries": [
      "几内亚",
      "科特迪瓦",
      "喀麦隆",
      "加蓬",
      "刚果民主共和国",
      "乌干达",
      "坦桑尼亚"
    ],
    "range": "黑猩猩分布从西非延伸至中非，并到达乌干达、坦桑尼亚等地。它们利用热带森林、疏林及林地与草地交错的环境；所列国家为代表性分布，并非完整名录。",
    "center": {
      "lat": 0,
      "lng": 23
    }
  },
  "habitats": [
    {
      "name": "热带森林与疏林",
      "realm": "terrestrial",
      "description": '黑猩猩利用热带森林、疏林和林地与草地交错的环境，在树上攀爬，也在地面用指关节支撑行走。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "typical": 90,
      "unit": "cm",
      "note": "动物园资料给出的头臀长近似值；不是各年龄个体的统一长度。"
    },
    "weight": {
      "min": 32,
      "max": 55,
      "unit": "kg",
      "note": "成年雌性约32–45千克，雄性约40–55千克。"
    }
  },
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "果实",
      "叶片",
      "种子",
      "昆虫",
      "小型动物"
    ],
    "description": "黑猩猩吃许多植物性食物，尤其喜欢果实，也会吃昆虫和其他动物。它们会用手拿取食物，有些群体还会使用枝条等工具。"
  },
  "activity": [
    "主要在白天活动"
  ],
  "tags": [
    "黑猩猩",
    "能抓握的手指"
  ],
  "summary": "黑猩猩用手抓握树枝，也会用指关节撑地行走。它们吃果实、互相理毛，并照顾幼仔。",
  "description": '黑猩猩没有尾巴，手臂较长，手和脚都能抓握。它们属于 Pan troglodytes，与倭黑猩猩是不同物种；群体成员会相互理毛，幼仔跟着母亲学习取食和交往。',
  "storySections": [
    {
      key: 'hands',
      label: '生活与认识',
      title: '手指围住树枝',
      body: '黑猩猩的拇指能与其他手指配合抓握，脚也能握住树枝。它们在树上借助不同肢体支撑和移动。',
    },
    {
      key: 'walking',
      label: '生活与认识',
      title: '指关节撑着走',
      body: '在地面移动时，黑猩猩常用弯曲手指的指关节承重；到树上则会抓握和攀爬。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '用手拿起食物',
      body: '果实是黑猩猩的重要食物，叶、种子和昆虫也在食谱中。有些群体会用枝条获取白蚁。',
    },
    {
      key: 'grooming',
      label: '生活与认识',
      title: '给同伴理理毛',
      body: '黑猩猩会拨开同伴的毛发进行理毛，这也是社会交往的一部分。单张露齿照片不足以判断它们是否开心。',
    },
    {
      key: 'young',
      label: '生活与认识',
      title: '幼仔靠近母亲',
      body: '黑猩猩通常一胎生一仔。幼仔依附母亲，在成长中学习取食和与群体相处；母幼图能比较体形，不能判断幼仔的精确年龄。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '让森林继续相连',
      body: '黑猩猩在全球被列为濒危，面临生境损失、猎杀和非法宠物贸易。保护森林与野生群体、拒绝野生动物宠物交易，可以减少这些压力。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '同一种动物，群体工具习惯会不同',
      body: 'Blumenbach 于 1775 年描述了这个物种，现用学名为 Pan troglodytes。黑猩猩会用手拿取食物，有些群体用枝条获取白蚁。它们的学习也发生在群体生活中，幼仔长期依靠母亲，逐渐学会寻找食物和与同伴相处。',
    },
  ],
  "keyFacts": [
    "黑猩猩的手指能弯曲，拇指可以与其他手指配合抓握。",
    "在地面移动时，黑猩猩常用弯曲手指的指关节承重；到树上则会抓握和攀爬。",
    "果实是黑猩猩的重要食物，叶、种子和昆虫也在食谱中。",
    "黑猩猩会拨开同伴的毛发进行理毛，这也是社会交往的一部分。",
    "黑猩猩通常一胎生一仔，幼仔会依附母亲，并在成长中学习取食和与群体相处。"
  ],
  "threats": [
    "森林丧失与破碎化",
    "猎杀",
    "非法宠物贸易"
  ],
  "conservationActions": [
    "保护并连接森林生境",
    "打击猎杀与非法交易",
    "支持野生群体监测"
  ],
  "metrics": {
    "adultMassKg": [
      32,
      55
    ]
  },
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "能抓握的手指"
    },
    {
      "key": "food",
      "label": "主要食物",
      "value": "果实"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "热带森林与疏林"
    }
  ],
  "media": {
    "image": "./images/species/chimpanzee/01-cover.webp",
    "alt": "黑猩猩在生活环境中的完整身体",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/chimpanzee/02-observation.webp",
        "title": "手指握住树枝",
        "alt": "黑猩猩弯曲手指抓握树枝，拇指位于树枝另一侧",
        "caption": "AI 生成科学情景重建。黑猩猩弯曲手指抓握树枝，拇指位于树枝另一侧。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chimpanzee/03-observation.webp",
        "title": "在地面走路",
        "alt": "黑猩猩在森林地面移动，长臂伸向地面",
        "caption": "AI 生成科学情景重建。黑猩猩在森林地面移动，长臂伸向地面。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chimpanzee/04-observation.webp",
        "title": "拿起一颗果实",
        "alt": "黑猩猩用手拿着果实靠近嘴边",
        "caption": "AI 生成科学情景重建。黑猩猩用手拿着果实靠近嘴边。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chimpanzee/05-observation.webp",
        "title": "同伴互相理毛",
        "alt": "两只黑猩猩靠近休息，一只为另一只理毛",
        "caption": "AI 生成科学情景重建。两只黑猩猩靠近休息，一只为另一只理毛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chimpanzee/06-observation.webp",
        "title": "贴近母亲",
        "alt": "黑猩猩母亲与依附在身前的幼仔",
        "caption": "AI 生成科学情景重建。黑猩猩母亲与依附在身前的幼仔。",
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
      "title": "ASM Mammal Diversity Database：黑猩猩",
      "url": "https://www.mammaldiversity.org/taxon/1000720/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "San Diego Zoo：黑猩猩的外形与生活",
      "url": "https://animals.sandiegozoo.org/animals/chimpanzee",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "ASM MDD 转引 IUCN：物种级濒危",
      "url": "https://www.mammaldiversity.org/taxon/1000720/",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Pan troglodytes 的命名作者与年份',
      url: 'https://www.gbif.org/species/5219534',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
