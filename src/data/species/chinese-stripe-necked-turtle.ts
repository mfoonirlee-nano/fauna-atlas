import type { Species } from '../../types/species.ts';

const profile = {
  "id": "chinese-stripe-necked-turtle",
  "slug": "chinese-stripe-necked-turtle",
  "names": {
    "zh": "中华花龟",
    "en": "Chinese Stripe-necked Turtle",
    "aliases": [
      "花龟",
      "Ocadia sinensis"
    ]
  },
  "scientificName": "Mauremys sinensis",
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
      "scientificName": "Testudines",
      "zhName": "龟鳖目"
    },
    "family": {
      "scientificName": "Geoemydidae",
      "zhName": "地龟科"
    },
    "genus": {
      "scientificName": "Mauremys",
      "zhName": "拟水龟属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "CR",
    "label": {
      "zh": "极危",
      "en": "Critically Endangered"
    },
    "trend": "decreasing",
    "assessor": "采用 IUCN 全球评估：2018 年评估、2021 年发表，极危，趋势下降。人工繁育和售卖数量不用于推断野生种群安全。",
    "assessedYear": 2018
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "中国南部与越南部分低地湿地"
    ],
    "countries": [],
    "range": "原生范围涉及中国南部低地湿地及越南部分地区，包括台湾和海南的记录，另有引入地区。地图选中国南部代表点，不表示全部分布。水族售卖和人工繁育地点需要与野生原生范围分别核对。",
    "center": {
      "lat": 23.4,
      "lng": 113.5
    }
  },
  "habitats": [
    {
      "name": "低地池塘、沼泽与缓流水域",
      "realm": "freshwater",
      "description": "它生活在低地的池塘、沼泽和缓流水域，在水中游动，也会爬上岸边或倒木晒背。水域边缘提供水陆之间的通道。看见龟停在石头上，可以记录位置和姿态；一张图无法说明它晒背了多久。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "水生植物",
      "昆虫",
      "螺",
      "其他小型动物"
    ],
    "description": "中华花龟会吃水生植物，也利用昆虫、螺和其他小动物。台湾的野外食性研究发现，食物组成随性别和采样时期变化，部分样本中植物占比很高。这里采用杂食的概括，保留研究地点，不把一地食谱套给所有个体。"
  },
  "tags": [
    "中华花龟",
    "爬行纲",
    "头颈细纹与椭圆形背甲"
  ],
  "summary": "中华花龟的头颈有密集浅色细纹，常在水边晒背，野生种群已列为极危。",
  "description": "中华花龟的头和长颈上分布着多条细而平行的浅黄色纹。背甲呈椭圆形，棕色甲面可以看见盾片和纵向低棱；足趾有爪，趾间有蹼。它与草龟都有颈纹，辨认时要连同背甲和整只动物一起看。它生活在低地的池塘、沼泽和缓流水域，在水中游动，也会爬上岸边或倒木晒背。水域边缘提供水陆之间的通道。看见龟停在石头上，可以记录位置和姿态；一张图无法说明它晒背了多久。中华花龟会吃水生植物，也利用昆虫、螺和其他小动物。台湾的野外食性研究发现，食物组成随性别和采样时期变化，部分样本中植物占比很高。这里采用杂食的概括，保留研究地点，不把一地食谱套给所有个体。雌龟在陆地挖巢产卵，幼龟孵出后到水边生活。幼体也有头颈条纹，但身体和尾部的比例与成龟有差别。图库分别重建成龟与幼龟，不能用甲上的纹路推算准确年龄。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "找一找身体的特点",
      "body": "中华花龟的头和长颈上分布着多条细而平行的浅黄色纹。背甲呈椭圆形，棕色甲面可以看见盾片和纵向低棱；足趾有爪，趾间有蹼。它与草龟都有颈纹，辨认时要连同背甲和整只动物一起看。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "生活环境与活动",
      "body": "它生活在低地的池塘、沼泽和缓流水域，在水中游动，也会爬上岸边或倒木晒背。水域边缘提供水陆之间的通道。看见龟停在石头上，可以记录位置和姿态；一张图无法说明它晒背了多久。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它会吃什么",
      "body": "中华花龟会吃水生植物，也利用昆虫、螺和其他小动物。台湾的野外食性研究发现，食物组成随性别和采样时期变化，部分样本中植物占比很高。这里采用杂食的概括，保留研究地点，不把一地食谱套给所有个体。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从卵到幼体",
      "body": "雌龟在陆地挖巢产卵，幼龟孵出后到水边生活。幼体也有头颈条纹，但身体和尾部的比例与成龟有差别。图库分别重建成龟与幼龟，不能用甲上的纹路推算准确年龄。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案采用 Mauremys sinensis，旧资料中的 Ocadia sinensis 指同一物种。中华花龟属于地龟科，与草龟和黄喉拟水龟同属拟水龟属；人工环境中存在杂交问题，条纹相似也需要核对来源和学名。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：花龟颈部的浅色纹是一条粗纹，还是多条细纹？观察任务：与黄喉拟水龟的头颈图并排比较，记录条纹分布，不翻动或抓住龟。野生捕捉和栖息地改变会影响龟类，饲养常见不能代替野外调查。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "中华花龟的名称与记录",
      "body": "Gray 于 1834 年以 Emys sinensis 发表名称，后来曾使用 Ocadia sinensis，现用 Mauremys sinensis。查阅旧资料时可以沿这些组合追溯记录。属名的修订记录分类研究过程，发表年代不表示当地人那时才认识它。"
    }
  ],
  "keyFacts": [
    "中华花龟的头和长颈上分布着多条细而平行的浅黄色纹。背甲呈椭圆形，棕色甲面可以看见盾片和纵向低棱；足趾有爪，趾间有蹼。它与草龟都有颈纹，辨认时要连同背甲和整只动物一起看。",
    "中华花龟会吃水生植物，也利用昆虫、螺和其他小动物。台湾的野外食性研究发现，食物组成随性别和采样时期变化，部分样本中植物占比很高。这里采用杂食的概括，保留研究地点，不把一地食谱套给所有个体。",
    "雌龟在陆地挖巢产卵，幼龟孵出后到水边生活。幼体也有头颈条纹，但身体和尾部的比例与成龟有差别。图库分别重建成龟与幼龟，不能用甲上的纹路推算准确年龄。"
  ],
  "threats": [
    "野生捕捉与贸易",
    "水域和岸边环境改变"
  ],
  "conservationActions": [
    "保护原生栖息环境，观察时保持距离，不带走野生动物或自行放生。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "低地池塘、沼泽与缓流水域"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "头颈细纹与椭圆形背甲"
    }
  ],
  "media": {
    "image": "./images/species/chinese-stripe-necked-turtle/01-cover.webp",
    "alt": "中华花龟完整外形与自然环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/chinese-stripe-necked-turtle/02-observation.webp",
        "title": "倒木上晒背的成龟",
        "alt": "中华花龟：倒木上晒背的成龟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。倒木上晒背的成龟；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-stripe-necked-turtle/03-observation.webp",
        "title": "头颈上的细条纹",
        "alt": "中华花龟：头颈上的细条纹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。头颈上的细条纹；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-stripe-necked-turtle/04-observation.webp",
        "title": "从上方看背甲",
        "alt": "中华花龟：从上方看背甲，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。从上方看背甲；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-stripe-necked-turtle/05-observation.webp",
        "title": "水边落叶上的幼龟",
        "alt": "中华花龟：水边落叶上的幼龟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水边落叶上的幼龟；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。幼龟位于前景，成龟同时入画；大小仅作阶段对照，非实测比例，不表示亲子关系或护幼行为。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-stripe-necked-turtle/06-observation.webp",
        "title": "浅水中的游动姿态",
        "alt": "中华花龟：浅水中的游动姿态，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。浅水中的游动姿态；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
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
      "title": "GBIF：接受名称与原始匹配响应",
      "url": "https://www.gbif.org/species/2443244",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN：2018 全球极危评估，2021 发表",
      "url": "https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T15026A547319.en",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2009 台湾野外原始研究：种群及食物组成",
      "url": "https://zoolstud.sinica.edu.tw/Journals/48.1/95.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2024 原始研究：自然食谱与人工饲料的区别",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11394261/",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "USFWS：生态、繁殖与野生采集压力",
      "url": "https://www.fws.gov/sites/default/files/documents/Ecological-Risk-Screening-Summary-Chinese-Striped-necked-Turtle.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "Reptile Database：名称、异名与分类链",
      "url": "https://reptile-database.reptarium.cz/Mauremys/sinensis",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球等级对照",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/15026",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
