import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-lemur-catta",
    "slug": "ring-tailed-lemur",
    "names": {
      "zh": "环尾狐猴",
      "en": "Ring-tailed Lemur",
      "aliases": []
    },
    "scientificName": "Lemur catta",
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
        "scientificName": "Primates",
        "zhName": "灵长目"
      },
      "family": {
        "scientificName": "Lemuridae",
        "zhName": "狐猴科"
      },
      "genus": {
        "scientificName": "Lemur",
        "zhName": "狐猴属"
      }
    },
    "conservation": {
      "system": "IUCN Red List",
      "code": "EN",
      "label": {
        "zh": "濒危",
        "en": "Endangered"
      },
      "trend": "decreasing",
      "assessor": "IUCN 全球物种评估",
      "assessedYear": 2018
    },
    "distribution": {
      "realms": [
        "terrestrial"
      ],
      "continents": [
        "非洲"
      ],
      "regions": [
        "干燥林地与河岸林"
      ],
      "countries": [
        "马达加斯加"
      ],
      "range": "原生分布限于马达加斯加南部及西南部等地区，可见于干燥林地、河岸林与岩地灌丛；现存种群常被隔在森林片段中。",
      "endemicTo": [
        "马达加斯加"
      ]
    },
    "habitats": [
      {
        "name": "干燥林地与河岸林",
        "realm": "terrestrial",
        "description": '在干燥林地、河岸林和岩地灌丛活动，既爬树，也常在地面寻找食物。现存林地片段之间需要保留通路。',
        "isPrimary": true
      }
    ],
    "measurements": {
      "length": {
        "min": 39,
        "max": 46,
        "unit": "cm",
        "note": "头体长，不含尾；ADW 正文以厘米列出，页面自动范围栏误写为毫米，此处采用正文。"
      }
    },
    "metrics": {
      "adultLengthCm": [
        39,
        46
      ]
    },
    "diet": {
      "types": [
        "omnivore"
      ],
      "foods": [
        "果实",
        "叶片",
        "花",
        "昆虫"
      ],
      "description": "环尾狐猴以果实、叶片和花等植物食物为主，也会取食昆虫等小动物。当地植物随季节变化，它们会在树上和地面寻找可利用的食物。"
    },
    "activity": [
      "日行性",
      "群居",
      "地面行走"
    ],
    "tags": [
      "干燥林地与河岸林",
      "濒危",
      "环纹尾",
      "气味标记"
    ],
    "summary": "雄性环尾狐猴把腺体分泌物擦到长尾上，再朝对手挥尾。黑白相间的尾巴既能让同伴看见，也能传递气味信息。",
    "description": "灰褐色身体、白脸和眼周黑斑之外，最醒目的是长长的黑白环纹尾。它会爬树，也花很多时间在地面行走。",
    "storySections": [
      {
        key: 'identity',
        label: '认识环尾狐猴',
        title: '长尾上有黑白环纹',
        body: '环尾狐猴属于灵长目狐猴科，原生于马达加斯加。它的尾巴比头体长更长，尾毛上有一圈圈黑白相间的花纹，白脸上还带着深色眼斑。',
      },
      {
        key: 'scent',
        label: '气味交流',
        title: '先擦尾巴，再向对手挥动',
        body: '雄性会把腕部等处腺体的分泌物擦到尾毛上，再向对手挥动长尾，进行俗称“臭味大战”的展示。这种气味展示让雄性能够隔着一段距离交流。',
      },
      {
        key: 'troop',
        label: '群体生活',
        title: '竖起尾巴穿过灌丛',
        body: '环尾狐猴常在地面四足行走，举起的环纹尾方便同伴看见。群体中雌性通常占优势地位；个体还会通过叫声和相互梳理保持联系。',
      },
      {
        key: 'feeding',
        label: '季节食谱',
        title: '树叶和果实都能吃',
        body: '环尾狐猴以果实、叶片和花等植物食物为主，也会取食昆虫等小动物。当地植物随季节变化，它们会在树上和地面寻找可利用的食物。',
      },
      {
        key: 'tail',
        label: '尾巴用途',
        title: '跳跃时靠长尾保持平衡',
        body: '环尾狐猴跳跃时用长尾保持平衡，还用它传递视觉和气味信号。尾巴没有卷握功能，爬树时它依靠手足抓住枝条。',
      },
      {
        key: 'conservation',
        label: '保护野生种群',
        title: '常见于动物园，野外仍濒危',
        body: '2018 年评估、2020 年发表的 IUCN 记录将环尾狐猴列为濒危。林地清除、猎捕和宠物贸易威胁野生种群。保留林地、恢复片段之间的联系，可以帮助它们寻找食物和同伴。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '黑白环纹之外，尾巴还传气味',
        body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Lemur catta。环尾狐猴的名字对应黑白相间的尾毛。雄性还会把腕部腺体分泌物擦到尾上，再向对手挥动；研究者把这种展示俗称为“臭味大战”。',
      },
    ],
    "keyFacts": [
      '原生于马达加斯加，尾毛有黑白环纹。',
      '雄性把腺体分泌物擦到尾巴上，挥尾展示气味。',
      '群体中雌性通常占优势地位。',
      '主要吃果实、叶片和花，也吃小动物。',
      '尾巴帮助平衡和交流，攀爬靠手足抓握。',
    ],
    "threats": [
      "森林清除与生境破碎。",
      "猎捕和宠物贸易。"
    ],
    "conservationActions": [
      "保护和恢复干林及河岸林。",
      "支持当地社区巡护，减少野生捕捉。"
    ],
    "featuredStats": [
      {
        "key": "length",
        "label": "头体长约",
        "value": "39—46",
        "unit": "厘米"
      },
      {
        "key": "range",
        "label": "原生分布",
        "value": "马达加斯加"
      }
    ],
    "sources": [
      {
        "title": "Mammal Diversity Database — 环尾狐猴分类",
        "url": "https://www.classic.mammaldiversity.org/taxon/1001008",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Duke Lemur Center — 环尾狐猴气味与群体生活",
        "url": "https://lemur.duke.edu/discover/meet-the-lemurs/ring-tailed-lemur/",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Animal Diversity Web — 环尾狐猴",
        "url": "https://animaldiversity.org/accounts/Lemur_catta/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "IUCN — 2020 年狐猴评估发布说明",
        "url": "https://iucn.org/news/eastern-and-southern-africa/202007/almost-a-third-lemurs-now-critically-endangered-iucn-red-list",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Lemur Conservation Network — 评估日期索引",
        "url": "https://www.lemurconservationnetwork.org/wordpress/wp-content/uploads/2021/04/IUCN-Red-List-Data-Lemurs.pdf",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Lemur catta 的命名作者与年份',
        url: 'https://www.gbif.org/species/2436412',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/ring-tailed-lemur/01-cover.webp",
      "alt": "环尾狐猴位于画面右侧远处，完整身体及可见附肢周围留有背景。",
      "focalPoint": {
        "x": 0.95,
        "y": 0.4
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/ring-tailed-lemur/02-body.webp",
          "title": "黑白环纹长尾",
          "alt": "环尾狐猴坐在岩石上，长尾弯在身体旁边。",
          "caption": "AI 生成外形重建；环纹数不用于个体鉴定。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/ring-tailed-lemur/03-scent.webp",
          "title": "把气味擦到尾毛上",
          "alt": "雄性环尾狐猴用前肢靠近并摩擦自己的环纹尾。",
          "caption": "AI 生成气味标记情景；不展示不可见的气味分子。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/ring-tailed-lemur/04-troop.webp",
          "title": "沿地面结伴行走",
          "alt": "几只环尾狐猴举着长尾穿过干燥林地。",
          "caption": "AI 生成群体情景；不表示固定群体大小。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/ring-tailed-lemur/05-feeding.webp",
          "title": "树上的叶片",
          "alt": "环尾狐猴坐在树枝间取食叶片。",
          "caption": "AI 生成取食情景；植物未作物种级鉴定。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/ring-tailed-lemur/06-habitat.webp",
          "title": "干林与岩地",
          "alt": "马达加斯加干燥林地和岩石之间有远处的环尾狐猴。",
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
