import type { Species } from '../../types/species.ts';

const profile = {
  "id": "malayan-tapir",
  "slug": "malayan-tapir",
  "names": {
    "zh": "马来貘",
    "en": "Malayan Tapir",
    "aliases": [
      "亚洲貘"
    ]
  },
  "scientificName": "Tapirus indicus",
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
      "scientificName": "Perissodactyla",
      "zhName": "奇蹄目"
    },
    "family": {
      "scientificName": "Tapiridae",
      "zhName": "貘科"
    },
    "genus": {
      "scientificName": "Tapirus",
      "zhName": "貘属"
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
    "assessor": "IUCN（由 Animal Diversity Web 转引）"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "东南亚"
    ],
    "countries": [
      "马来西亚",
      "泰国",
      "缅甸",
      "印度尼西亚"
    ],
    "range": "现生种群分布在马来半岛、泰国及缅甸部分地区和印度尼西亚苏门答腊岛，许多种群生活在相互隔开的森林中。地图中心只代表马来半岛，不表示连续分布。",
    "center": {
      "lat": 4,
      "lng": 102
    }
  },
  "habitats": [
    {
      "name": "热带森林",
      "realm": "terrestrial",
      "description": "利用热带森林、次生林及林边的低矮植被觅食，也会到溪流、湿地和泥塘活动。森林之间的通道有助于它在栖地间移动。",
      "isPrimary": true
    }
  ],
  "measurements": {
    "weight": {
      "min": 250,
      "max": 540,
      "unit": "kg",
      "note": "ADW 所列体重范围，个体大小与性别等因素有关。"
    }
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "树叶",
      "嫩枝",
      "果实"
    ],
    "description": "马来貘主要吃植物，用灵活的短鼻和上唇取下树叶、嫩枝，也吃果实等食物。"
  },
  "tags": [
    "马来貘",
    "白色鞍斑"
  ],
  "summary": "成年马来貘的头、肩和腿是黑色，身体中后部有一大片鞍状白色区域。它还有能弯曲的短鼻子。",
  "description": '马来貘有浅色耳缘，鼻子和上唇延长成能弯曲的短鼻。幼崽为棕色，带浅色条纹和斑点，成长后才逐渐换成成体的黑白鞍斑。',
  "storySections": [
    {
      key: 'saddle',
      label: '生活与认识',
      title: '身上有一大片白色',
      body: '成年马来貘的头、肩和腿是黑色的，身体中后部覆盖一大片白色，像鞍子搭在背上。耳朵边缘也有浅色。',
    },
    {
      key: 'proboscis',
      label: '生活与认识',
      title: '短鼻子帮忙取树叶',
      body: '它的鼻子和上唇延长成灵活的短鼻，能卷住低处的树叶，再送到嘴边。先看图里鼻尖弯向哪里，再找它正在取食的植物。',
    },
    {
      key: 'calf',
      label: '生活与认识',
      title: '小貘穿着条纹',
      body: '幼崽出生时呈棕色，带浅色条纹和斑点，和成体的黑白鞍斑不同。随着成长，幼崽的花纹逐渐淡去。图集把母貘和幼崽放在同一场景中，方便观察这处差别。',
    },
    {
      key: 'water',
      label: '生活与认识',
      title: '走到水里凉快一下',
      body: '马来貘能够游泳，也会涉过浅水或在泥塘中打滚。看浅水图时，先找露在水面上的身体，再看水线落在腿的什么位置。',
    },
    {
      key: 'forest',
      label: '生活与认识',
      title: '沿着树林找食物',
      body: '它常在黄昏和夜间活动，独自沿着树林寻找植物。吃下果实时，部分种子能随粪便到达别处，让马来貘也参与森林中种子的传播。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '让森林之间留有通道',
      body: '马来貘的全球 IUCN 等级为濒危。森林被砍伐和分割后，它能找到的食物、隐蔽处和配偶都会减少。保护现有森林，并连接孤立的栖地，能帮助野生马来貘继续生活。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '来自马来半岛的早期记录',
      body: 'Desmarest 于 1819 年发表马来貘的科学描述，原始名称就是 Tapirus indicus。Mammal Diversity Database 收录的命名资料指向马来半岛，并保留原始文献页码。幼崽的浅色条纹和斑点后来逐渐淡去，成年才显出大块黑白鞍斑。',
    },
  ],
  "keyFacts": [
    '成年身体中后部有大块白色鞍斑。',
    '鼻子与上唇形成灵活短鼻，取下低处植物。',
    '幼崽棕色，带浅色条纹和斑点。',
    '能够游泳，也在泥塘打滚。',
    '常在黄昏及夜间独自取食植物。',
  ],
  "threats": [
    "森林砍伐",
    "栖息地破碎化",
    "捕猎与误捕"
  ],
  "conservationActions": [
    "保护热带森林",
    "连接森林栖地",
    "减少捕猎与误捕"
  ],
  "metrics": {
    "adultMassKg": [
      250,
      540
    ]
  },
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "白色鞍斑"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "树叶"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "热带森林"
    }
  ],
  "media": {
    "image": "./images/species/malayan-tapir/01-cover.webp",
    "alt": "马来貘与生活环境的全身场景",
    "focalPoint": {
      "x": 0.83,
      "y": 0.34
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/malayan-tapir/02-observation.webp",
        "alt": "成年马来貘站在林间，白色鞍斑与黑色头部、四肢形成对照",
        "title": "身上的白色鞍斑",
        "caption": "AI 生成科学情景重建。成年马来貘站在林间，白色鞍斑与黑色头部、四肢形成对照。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/malayan-tapir/03-observation.webp",
        "alt": "马来貘用短鼻和上唇卷住低处的树叶",
        "title": "会弯的短鼻子",
        "caption": "AI 生成科学情景重建。马来貘用短鼻和上唇卷住低处的树叶。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/malayan-tapir/04-observation.webp",
        "alt": "马来貘幼崽身上有浅色条纹和斑点，与身旁成体的鞍斑不同",
        "title": "幼崽的条纹",
        "caption": "AI 生成科学情景重建。马来貘幼崽身上有浅色条纹和斑点，与身旁成体的鞍斑不同。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/malayan-tapir/05-observation.webp",
        "alt": "马来貘在森林溪流的浅水处行走",
        "title": "水边走一走",
        "caption": "AI 生成科学情景重建。马来貘在森林溪流的浅水处行走。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/malayan-tapir/06-observation.webp",
        "alt": "马来貘低头在森林边缘取食低矮植物",
        "title": "沿着树林找食物",
        "caption": "AI 生成科学情景重建。马来貘低头在森林边缘取食低矮植物。",
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
      "title": "Animal Diversity Web — 马来貘分类与形态",
      "url": "https://animaldiversity.org/accounts/Tapirus_indicus/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-10"
    },
    {
      "title": "San Diego Zoo — 貘的鼻子、幼崽和生活",
      "url": "https://animals.sandiegozoo.org/animals/tapir",
      "kind": "ecology",
      "accessedAt": "2026-09-10"
    },
    {
      "title": "IUCN SSC Tapir Specialist Group — Tapir Tracks 马来貘范围与保护",
      "url": "https://tapirs.org/wp-content/uploads/2018/06/TAPIR-TRACKS-A-Curriculum-Guide-for-Educators.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-10"
    },
    {
      "title": "Animal Diversity Web — 马来貘全球 IUCN 等级",
      "url": "https://animaldiversity.org/accounts/Tapirus_indicus/#conservation",
      "kind": "conservation",
      "accessedAt": "2026-09-10"
    },
    {
      title: 'Mammal Diversity Database：马来貘原始描述与模式产地',
      url: 'https://www.mammaldiversity.org/taxon/1006117/',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-10",
  "updatedAt": "2026-09-10"
} as const satisfies Species;

export default profile;
