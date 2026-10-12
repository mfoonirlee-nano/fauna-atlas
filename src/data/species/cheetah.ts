import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-acinonyx-jubatus",
    "slug": "cheetah",
    "names": {
      "zh": "猎豹",
      "en": "Cheetah",
      "aliases": []
    },
    "scientificName": "Acinonyx jubatus",
    "featured": true,
    "publishedAt": "2026-09-08",
    "updatedAt": "2026-09-08",
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
        "scientificName": "Felidae",
        "zhName": "猫科"
      },
      "genus": {
        "scientificName": "Acinonyx",
        "zhName": "猎豹属"
      }
    },
    "conservation": {
      "system": "IUCN Red List",
      "code": "VU",
      "label": {
        "zh": "易危",
        "en": "Vulnerable"
      },
      "trend": "decreasing",
      "assessor": "IUCN 全球物种评估",
      "assessedYear": 2021
    },
    "distribution": {
      "realms": [
        "terrestrial"
      ],
      "continents": [
        "非洲",
        "亚洲"
      ],
      "regions": [
        "开阔草原与灌丛"
      ],
      "countries": [
        "纳米比亚",
        "博茨瓦纳",
        "南非",
        "肯尼亚",
        "坦桑尼亚",
        "伊朗"
      ],
      "range": "原生种群主要分布于非洲，伊朗仍有小规模残存种群；国家列表为代表性分布。印度的迁入重建种群不计入这里的原生分布。"
    },
    "habitats": [
      {
        "name": "开阔草原与灌丛",
        "realm": "terrestrial",
        "description": '猎豹利用开阔草原和灌丛潜近猎物，再作短距离追逐。相连的草地为它寻找猎物和同伴提供空间。',
        "isPrimary": true
      }
    ],
    "measurements": {
      "length": {
        "min": 100,
        "max": 140,
        "unit": "cm",
        "note": "头体长，不含尾；采用圣迭戈动物园公制范围。"
      }
    },
    "metrics": {
      "adultLengthCm": [
        100,
        140
      ]
    },
    "diet": {
      "types": [
        "carnivore"
      ],
      "foods": [
        "小型羚羊",
        "野兔",
        "地栖鸟类"
      ],
      "description": "猎豹以小型羚羊、野兔和地栖鸟类等动物为食。它通常先观察、潜近，再发起短距离追逐；清晨和傍晚是常见的捕猎时段。"
    },
    "activity": [
      "日间活动",
      "短距离追逐"
    ],
    "tags": [
      "开阔草原与灌丛",
      "易危",
      "长尾转向",
      "爪尖抓地"
    ],
    "summary": "猎豹追逐猎物时，会弯转长尾帮助控制方向。脚上的爪尖大多露在外面，奔跑时能增加抓地力。",
    "description": "小头、深胸、细腰和长腿构成猎豹的轮廓。它的斑点大多为实心黑点，眼角到嘴边有黑色泪纹。",
    "storySections": [
      {
        key: 'identity',
        label: '认识猎豹',
        title: '实心斑点与黑色泪纹',
        body: '猎豹属于猫科猎豹属。辨认时可以先看眼角下方的黑色泪纹，再看身体的实心斑点和修长四肢。它与豹属于不同的属。',
      },
      {
        key: 'turning',
        label: '长尾转向',
        title: '追逐途中也要拐弯',
        body: '猎物不会沿直线逃跑。猎豹摆动长尾帮助控制身体姿态，在追逐中转向；柔韧的脊柱则让四肢在每一步中伸展得更远。',
      },
      {
        key: 'claws',
        label: '脚下抓地',
        title: '爪尖像跑鞋钉',
        body: '猎豹的爪子可以略微回缩，但多数爪尖平时仍露在外面，奔跑时增加抓地力。长期接触地面也会磨损爪尖。它擅长短距离冲刺，不能一直保持高速。',
      },
      {
        key: 'feeding',
        label: '寻找猎物',
        title: '先靠近，再冲刺',
        body: '猎豹以小型羚羊、野兔和地栖鸟类等动物为食。它通常先观察、潜近，再发起短距离追逐；清晨和傍晚是常见的捕猎时段。',
      },
      {
        key: 'family',
        label: '幼崽成长',
        title: '背上披着银灰色长毛',
        body: '幼崽背部有一层银灰色长毛，随着成长逐渐消退。母豹照顾幼崽并带它们学习捕猎。成年雌性多独自活动，部分雄性会结成小群。',
      },
      {
        key: 'conservation',
        label: '保护草原',
        title: '为移动保留通道',
        body: 'IUCN 的全球易危记录于 2021 年评估、2022 年发表，种群趋势为下降。栖息地破碎、猎物减少和人兽冲突压缩活动空间，保护区之间的通道也需要保留。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '猎豹的爪尖与短跑本领',
        body: 'Schreber 于 1775 年描述了这个物种，现用学名为 Acinonyx jubatus。它的黑色泪纹和实心斑点帮助区分其他大猫。许多猫科动物能把爪尖藏起来，猎豹的多数爪尖平时露在外面，像跑鞋钉一样增加抓地力，适合短距离追逐。',
      },
    ],
    "keyFacts": [
      '眼角至嘴边有黑色泪纹，身上大多为实心黑斑。',
      '长尾帮助它在追逐中控制姿态和转向。',
      '多数爪尖平时露在外面，增加奔跑抓地力。',
      '通常先潜近猎物，再作短距离冲刺。',
      '幼崽背部的银灰色长毛随成长逐渐消退。',
    ],
    "threats": [
      "草原破碎与猎物减少。",
      "因捕食家畜而遭报复性猎杀。",
      "非法捕捉与贸易。"
    ],
    "conservationActions": [
      "保留栖息地之间的连通通道。",
      "改善家畜防护，减少人兽冲突。",
      "监测野生种群并打击非法贸易。"
    ],
    "featuredStats": [
      {
        "key": "length",
        "label": "头体长约",
        "value": "100—140",
        "unit": "厘米"
      },
      {
        "key": "assessment",
        "label": "所用评估年份",
        "value": "2021",
        "unit": "年"
      }
    ],
    "sources": [
      {
        "title": "圣迭戈动物园 — 猎豹外形、运动与生活",
        "url": "https://animals.sandiegozoo.org/animals/cheetah/",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "IUCN 全球评估 — 2021 年评估、2022 年发表（CMS 存档）",
        "url": "https://www.cms.int/sites/default/files/document/cites-cms_aci2_inf.10_cheetah-iucn-red-list_e.pdf",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "IUCN 全球评估 — 猎豹分类与分布",
        "url": "https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T219A124366642.en",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Acinonyx jubatus 的命名作者与年份',
        url: 'https://www.gbif.org/species/2435270',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/cheetah/01-cover.webp",
      "alt": "猎豹位于画面右侧远处，完整身体及可见附肢周围留有背景。",
      "focalPoint": {
        "x": 0.9,
        "y": 0.4
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/cheetah/02-body.webp",
          "title": "细腰与长腿",
          "alt": "猎豹侧身站在草地上，完整长尾和四足可见。",
          "caption": "AI 生成外形重建；不用于体长测量。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/cheetah/03-running.webp",
          "title": "短距离冲刺",
          "alt": "猎豹伸展四肢奔跑，长尾向后弯曲。",
          "caption": "AI 生成奔跑情景；不代表测速或连续步态记录。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/cheetah/04-paws.webp",
          "title": "露在外面的爪尖",
          "alt": "猎豹前足落在沙地上，短爪尖从趾端露出。",
          "caption": "AI 生成足部近景；不作为趾骨解剖图。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/cheetah/05-family.webp",
          "title": "母豹与幼崽",
          "alt": "母豹与背部有浅色长毛的幼崽在草地上休息。",
          "caption": "AI 生成育幼情景；幼崽数量不代表平均窝仔数。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/cheetah/06-habitat.webp",
          "title": "相连的草地",
          "alt": "远处的猎豹站在土丘上，周围是草原与零散树木。",
          "caption": "AI 生成生境重建；不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        }
      ]
    }
  } as const satisfies Species;

export default profile;
