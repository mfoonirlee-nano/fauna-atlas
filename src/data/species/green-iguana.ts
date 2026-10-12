import type { Species } from '../../types/species.ts';

const profile = {
    "id": "green-iguana",
    "slug": "green-iguana",
    "names": {
      "zh": "绿鬣蜥",
      "en": "Green Iguana",
      "aliases": []
    },
    "scientificName": "Iguana iguana",
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
        "scientificName": "Reptilia",
        "zhName": "爬行纲"
      },
      "order": {
        "scientificName": "Squamata",
        "zhName": "有鳞目"
      },
      "family": {
        "scientificName": "Iguanidae",
        "zhName": "美洲鬣蜥科"
      },
      "genus": {
        "scientificName": "Iguana",
        "zhName": "美洲鬣蜥属"
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
      "assessor": "Bock, B. 等",
      "assessedYear": 2018
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
        "中美洲",
        "南美洲",
        "加勒比地区"
      ],
      "countries": [
        "哥伦比亚",
        "委内瑞拉",
        "巴西",
        "巴拉圭"
      ],
      "range": '分布于热带美洲及部分加勒比岛屿，美国佛罗里达等地另有引入种群。近年的分类修订会改变不同物种的分布边界。',
      "center": {
        "lat": -3,
        "lng": -60
      }
    },
    "habitats": [
      {
        "name": "热带河岸森林",
        "realm": "terrestrial",
        "description": "多在树上活动，常利用靠近水域的树冠和枝条晒太阳。",
        "isPrimary": true
      }
    ],
    "measurements": {
      "weight": {
        "min": 4,
        "max": 6,
        "unit": "kg",
        "note": "采用 ADW 正文的成体质量范围；不包含极端大个体。"
      },
      "length": {
        "max": 2,
        "unit": "m",
        "note": "ADW 头至尾尖的最大总长约值；不是成年长度范围。"
      }
    },
    "metrics": {
      "adultMassKg": [
        4,
        6
      ]
    },
    "diet": {
      "types": [
        "herbivore"
      ],
      "foods": [
        "叶片",
        "花",
        "果实"
      ],
      "description": '主要取食植物的叶片、花和果实，偶发的动物性食物只占食谱的一部分。'
    },
    "activity": [
      "日行性"
    ],
    "tags": [
      "热带河岸森林",
      "无危",
      "头顶感光"
    ],
    "summary": "绿鬣蜥头顶有感光的顶眼，能感受明暗变化。背上的棘列、喉垂和长尾也是它的外形特征。",
    "description": "绿鬣蜥的体色会随年龄和状态变化，头侧耳膜下方有显眼的大圆鳞，背棘延伸至尾部附近。",
    "storySections": [
      {
        key: 'identity',
        label: '认识绿鬣蜥',
        title: '喉垂下方连着长身体',
        body: '绿鬣蜥属于美洲鬣蜥科，与鬃狮蜥所在的鬣蜥科分属不同科。它有下垂喉部皮褶、背棘与很长的渐细尾巴。',
      },
      {
        key: 'parietal',
        label: '头顶感光',
        title: '顶眼感受明暗变化',
        body: '顶眼位于头顶中线上，能感受光线和上方阴影变化。它不能像两侧眼睛那样形成清晰图像，外形也不是第三只大眼球。',
      },
      {
        key: 'basking',
        label: '树上晒太阳',
        title: '在日照与阴影间移动',
        body: '它利用环境热量调节体温，常在树枝上晒太阳。生境需要同时提供可攀爬的枝干、日照和躲避炎热的位置。',
      },
      {
        key: 'food',
        label: '植物食物',
        title: '树上寻找叶、花和果',
        body: '绿鬣蜥主要吃植物的叶片、花和果实。个体大小随年龄和食物条件等因素变化。',
      },
      {
        key: 'water',
        label: '河岸生活',
        title: '长尾也能帮助游泳',
        body: '绿鬣蜥善于游泳，受到威胁时可能从树上进入水中。雌性会到地面挖穴产卵，因此树冠之外的地面环境同样重要。',
      },
      {
        key: 'conservation',
        label: '原生与引入',
        title: '不同地区面对不同问题',
        body: '2018 年 IUCN 全球记录将绿鬣蜥列为无危，各地种群的风险有所不同。原生地需要关注捕捉和生境改变，引入地区需要管理生态影响。饲养个体应留在合适的照顾环境中，避免随意放归野外。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '绿色身体，头顶还有感光器官',
        body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Iguana iguana。它的颜色会随年龄和状态变化。更不容易发现的是头顶中线上的顶眼：这个小型感光结构能察觉明暗和上方阴影，成像能力与两侧眼睛不同。',
      },
    ],
    "keyFacts": [
      '有喉垂、背棘和渐细长尾，属于美洲鬣蜥科。',
      '头顶的顶眼能感受光线及上方阴影变化。',
      '通过晒太阳和移入阴影调节体温。',
      '主要吃叶片、花和果实。',
      '善于游泳，雌性到地面挖穴产卵。',
    ],
    "threats": [
      "原生地的捕捉及生境改变。",
      "引入种群与当地生态发生冲突。"
    ],
    "conservationActions": [
      "保护原生河岸森林并追踪贸易来源。",
      "避免弃养和向非原生地区放生。"
    ],
    "featuredStats": [
      {
        "key": "mass",
        "label": "成体体重约",
        "value": "4—6",
        "unit": "千克"
      },
      {
        "key": "trait",
        "label": "观察重点",
        "value": "头顶感光"
      }
    ],
    "sources": [
      {
        "title": "Animal Diversity Web — 绿鬣蜥",
        "url": "https://animaldiversity.org/accounts/Iguana_iguana/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "The Reptile Database — 绿鬣蜥分类",
        "url": "https://reptile-database.reptarium.cz/Iguana/iguana",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "IUCN SSC Iguana Specialist Group — 2018 年评估记录",
        "url": "https://www.iucn-isg.org/publications/recent-red-list-assessments/",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "IUCN SSC Iguana Specialist Group — 原生种群与引入影响",
        "url": "https://www.iucn-isg.org/wp-content/uploads/2020/01/ISG_Newsletter_18.pdf",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Iguana iguana 的命名作者与年份',
        url: 'https://www.gbif.org/species/2459658',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/green-iguana/01-cover.webp",
      "alt": "绿鬣蜥位于画面右侧，完整身体及尾部周围保留环境。",
      "focalPoint": {
        "x": 0.95,
        "y": 0.4
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/green-iguana/02-body.webp",
          "title": "背棘与长尾",
          "alt": "绿鬣蜥侧身停在枝条上，展示喉垂、背棘和爪足。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/green-iguana/03-detail.webp",
          "title": "头部鳞片",
          "alt": "绿鬣蜥头部与前身近景，可见头侧鳞片和喉垂。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。展示头侧鳞片与喉垂；顶眼位置未作图示。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/green-iguana/04-behavior.webp",
          "title": "树上吃叶",
          "alt": "绿鬣蜥在树上取食绿叶。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/green-iguana/05-life.webp",
          "title": "河岸枝头晒太阳",
          "alt": "绿鬣蜥在河流上方的枝条上晒太阳。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/green-iguana/06-habitat.webp",
          "title": "热带河岸森林",
          "alt": "南美热带河岸森林形成连续树冠。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
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
