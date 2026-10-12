import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-mesocricetus-auratus",
  "slug": "golden-hamster",
  "names": {
    "zh": "金仓鼠",
    "en": "Golden Hamster",
    "aliases": [
      "叙利亚仓鼠",
      "黄金仓鼠"
    ]
  },
  "scientificName": "Mesocricetus auratus",
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
      "scientificName": "Rodentia",
      "zhName": "啮齿目"
    },
    "family": {
      "scientificName": "Cricetidae",
      "zhName": "仓鼠科"
    },
    "genus": {
      "scientificName": "Mesocricetus",
      "zhName": "中仓鼠属"
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
    "assessor": "IUCN（2022-1 等级变更表）"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "countries": [
      "叙利亚",
      "土耳其"
    ],
    "regions": [
      "叙利亚与土耳其部分地区"
    ],
    "range": "野生金仓鼠分布局限于叙利亚及土耳其部分地区；全球宠物和实验饲养地点不计入野生分布。",
    "center": {
      "lat": 36.3,
      "lng": 37.2
    }
  },
  "habitats": [
    {
      "name": "干旱草地与农田边缘",
      "description": "在土中挖洞，出洞寻找食物，洞内可储粮。",
      "realm": "terrestrial",
      "isPrimary": true
    }
  ],
  "measurements": {
    "weight": {
      "min": 100,
      "max": 125,
      "unit": "g",
      "note": "ADW 所列成年范围；不覆盖全部人工选育品系。"
    }
  },
  "metrics": {
    "adultMassKg": [
      0.1,
      0.125
    ]
  },
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "种子",
      "谷物",
      "坚果",
      "昆虫"
    ],
    "description": "种子、谷物、坚果、昆虫是它的食物。"
  },
  "activity": [
    "活动时段受环境影响"
  ],
  "tags": [
    "颊囊",
    "地下洞穴"
  ],
  "summary": "金仓鼠用颊囊暂存食物，再把食物带回洞里。野生型背部金褐色、腹部浅色，人工饲养的个体则有多种毛色。",
  "description": '野生型金仓鼠的背部金褐色、腹部浅色，耳朵圆，尾巴短。图集展示这种外观；人工饲养个体经选育还有其他毛色。',
  "storySections": [
    {
      key: 'cheeks',
      label: '亲子观察',
      title: '脸颊里能装食物',
      body: '嘴巴两侧的颊囊可以暂存食物，装入食物后脸颊会鼓起来。观察鼓起的轮廓；照片看不到毛皮下面的囊壁。',
    },
    {
      key: 'body',
      label: '生活与认识',
      title: '圆耳朵，小短尾',
      body: '从圆耳朵找到胡须，再看看小脚和短尾巴。金仓鼠属于啮齿目，不能用宠物毛色来判断野生种群的分布。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '前爪拿住一粒种子',
      body: '金仓鼠会用前爪拿住食物。它吃植物种子，也吃昆虫；把食物带回洞中储藏，是它生活的一部分。',
    },
    {
      key: 'burrow',
      label: '生活与认识',
      title: '洞口通向地下',
      body: '金仓鼠在土中挖洞，用来藏身和储粮。地面上的小洞口连接地下空间，观察时应远离洞口，避免挖开。',
    },
    {
      key: 'alone',
      label: '生活与认识',
      title: '一只仓鼠有自己的住处',
      body: '成年野生金仓鼠多独居，有领地行为。常见的饲养个体偏夜间活动；野外活动时段还受环境影响，不能用一张照片判断全天作息。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '宠物常见，野外仍需保护',
      body: 'IUCN 的 2022-1 等级变更表将金仓鼠从易危改列濒危。野生种群分布小，受栖息地变化、捕捉和毒杀影响。大量饲养个体不能替代野外保护。独立评估日期和全球趋势未核实。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '野生型金褐色，颊囊能搬粮',
      body: 'Waterhouse 于 1839 年描述了这个物种，现用学名为 Mesocricetus auratus。金仓鼠的野生型背部呈金褐色，家养个体还有许多毛色。它会把食物装进嘴巴两侧的颊囊，带回洞里储藏；成年野生个体多独自生活。',
    },
  ],
  "keyFacts": [
    "颊囊可暂存和搬运食物。",
    "圆耳朵、短尾巴是观察线索。",
    "它既吃种子，也吃昆虫。",
    "成年野生个体多独居。",
    "濒危等级针对野生种群。"
  ],
  "threats": [
    "野生栖息地改变。",
    "农业区域的捕捉和毒杀。"
  ],
  "conservationActions": [
    "保护野生栖息地并支持种群调查。",
    "不捕捉野生仓鼠，也不向野外放生宠物。"
  ],
  "featuredStats": [
    {
      "key": "0",
      "label": "观察重点",
      "value": "颊囊"
    },
    {
      "key": "1",
      "label": "住在哪里",
      "value": "地下洞穴"
    },
    {
      "key": "2",
      "label": "参考体重",
      "value": "100–125 g"
    }
  ],
  "sources": [
    {
      "title": "GBIF — 名称与分类归属",
      "url": "https://www.gbif.org/species/2438482",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Animal Diversity Web — 金仓鼠生态",
      "url": "https://animaldiversity.org/accounts/Mesocricetus_auratus/",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "RVO — 金仓鼠行为与颊囊",
      "url": "https://www.rvo.nl/huis-en-hobbydieren/goudhamster",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "IUCN — 2022-1 等级变更表",
      "url": "https://nc.iucnredlist.org/redlist/content/attachment_files/2022-1_RL_Stats_Table_7.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Mammal Diversity Database — 野生分布与等级",
      "url": "https://www.mammaldiversity.org/taxon/1002208/",
      "kind": "distribution",
      "accessedAt": "2026-09-09"
    }
  ],
  "media": {
    "image": "./images/species/golden-hamster/01-cover.webp",
    "alt": "金褐色金仓鼠坐在右侧土面上，周围是干燥田边环境。",
    "focalPoint": {"x": 0.78, "y": 0.35},
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/golden-hamster/02-body.webp",
        "title": "小脚和短尾巴",
        "alt": "野生型金仓鼠侧身停在土上，圆耳朵和小脚清楚可见。",
        "caption": "野生型金仓鼠侧身停在土上，圆耳朵和小脚清楚可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/golden-hamster/03-cheeks.webp",
        "title": "脸颊鼓起来",
        "alt": "金仓鼠的脸颊鼓起，前爪拿着食物；图片表现颊囊装食后的外形。",
        "caption": "金仓鼠的脸颊鼓起，前爪拿着食物；图片表现颊囊装食后的外形。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/golden-hamster/04-feeding.webp",
        "title": "拿着种子啃",
        "alt": "金仓鼠用两只前爪拿住食物。",
        "caption": "金仓鼠用两只前爪拿住食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/golden-hamster/05-burrow.webp",
        "title": "洞口在这里",
        "alt": "金仓鼠停在土中洞口旁，地下部分没有展示。",
        "caption": "金仓鼠停在土中洞口旁，地下部分没有展示。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/golden-hamster/06-habitat.webp",
        "title": "田边找食物",
        "alt": "一只金仓鼠在黄昏的田边行走，周围有干草和谷物。",
        "caption": "一只金仓鼠在黄昏的田边行走，周围有干草和谷物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      }
    ]
  },
  "featured": true,
  "publishedAt": "2026-09-09",
  "updatedAt": "2026-09-09"
} as const satisfies Species;

export default profile;
