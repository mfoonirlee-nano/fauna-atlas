import type { Species } from '../../types/species.ts';

const profile = {
  "id": "amur-catfish",
  "slug": "amur-catfish",
  "names": {
    "zh": "鲶",
    "en": "Amur Catfish",
    "aliases": [
      "鲇",
      "土鲶"
    ]
  },
  "scientificName": "Silurus asotus",
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
      "scientificName": "Actinopterygii",
      "zhName": "辐鳍鱼纲"
    },
    "order": {
      "scientificName": "Siluriformes",
      "zhName": "鲶形目"
    },
    "family": {
      "scientificName": "Siluridae",
      "zhName": "鲶科"
    },
    "genus": {
      "scientificName": "Silurus",
      "zhName": "鲶属"
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
    "assessedYear": 2020,
    "assessor": "采用 FishBase 所列全球 IUCN 等级与评估日期；未独立核实全球趋势，保留 unknown。养殖或引入水域数量不代表原生野生趋势。"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "中国及东亚淡水水域"
    ],
    "countries": [],
    "range": "本种分布于中国、朝鲜半岛、日本及俄罗斯部分东亚淡水水域。河湖、水田和人工养殖环境中的记录需结合地点阅读；地图坐标只作代表点，不表示完整范围或一次野外观察。",
    "center": {
      "lat": 30.6,
      "lng": 114.3
    }
  },
  "habitats": [
    {
      "name": "缓流河道、湖泊与水草浅水区",
      "realm": "freshwater",
      "description": "鲶常靠近河湖底部和水草边缘活动，宽头和触须是观察重点。它能利用较暗的环境寻找食物；从一张水下图片只能看见姿势，不能量出游速或判断一天中何时最活跃。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "piscivore"
    ],
    "foods": [
      "鱼类"
    ],
    "description": "成鱼主要捕食其他鱼类。口边的须带有感受器，帮助它感知周围环境和寻找食物。须不是用来咀嚼的牙齿，也不是可以用手拉动的装饰；观察时让鱼留在水中。"
  },
  "tags": [
    "鲶",
    "淡水鱼",
    "缓流河道、湖泊与水草浅水区"
  ],
  "summary": "鲶有宽扁的头、触须和无鳞皮肤，小背鳍与长臀鳍形成鲜明对照。",
  "description": "鲶的头宽而扁，皮肤表面没有鳞片，背鳍很小，腹部后方的臀鳍却很长。成鱼有一对较长的上颌须和一对较短的下颌须；幼鱼早期还可能有另一对下颌须，长大后退化。须的多少要结合生活阶段判断。鲶常靠近河湖底部和水草边缘活动，宽头和触须是观察重点。它能利用较暗的环境寻找食物；从一张水下图片只能看见姿势，不能量出游速或判断一天中何时最活跃。成鱼主要捕食其他鱼类。口边的须带有感受器，帮助它感知周围环境和寻找食物。须不是用来咀嚼的牙齿，也不是可以用手拉动的装饰；观察时让鱼留在水中。研究者记录过鲶在沟渠、稻田和溪流中追逐、缠抱及散卵的繁殖行为。产卵、孵化、仔鱼和幼鱼是不同阶段，不能把不同画面当成同一条鱼的连续成长，也不能把早期幼鱼的须数直接套到成鱼身上。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体和外形开始",
      "body": "鲶的头宽而扁，皮肤表面没有鳞片，背鳍很小，腹部后方的臀鳍却很长。成鱼有一对较长的上颌须和一对较短的下颌须；幼鱼早期还可能有另一对下颌须，长大后退化。须的多少要结合生活阶段判断。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "水边的生活",
      "body": "鲶常靠近河湖底部和水草边缘活动，宽头和触须是观察重点。它能利用较暗的环境寻找食物；从一张水下图片只能看见姿势，不能量出游速或判断一天中何时最活跃。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它怎样取得食物",
      "body": "成鱼主要捕食其他鱼类。口边的须带有感受器，帮助它感知周围环境和寻找食物。须不是用来咀嚼的牙齿，也不是可以用手拉动的装饰；观察时让鱼留在水中。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "成长与育幼",
      "body": "研究者记录过鲶在沟渠、稻田和溪流中追逐、缠抱及散卵的繁殖行为。产卵、孵化、仔鱼和幼鱼是不同阶段，不能把不同画面当成同一条鱼的连续成长，也不能把早期幼鱼的须数直接套到成鱼身上。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案指 Silurus asotus。“鲶鱼”也常被用作许多鲶形目鱼的统称，市场俗名不能代替学名。它与同属怀头鲶、南方鲶以及本批黄颡鱼不同；资料检索时要比较学名、成年须数和背鳍形态。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：鲶的背鳍和臀鳍，哪一个更长？观察任务：对照完整侧面图找头、须和鳍，再与黄颡鱼比较；不要抓住触须。保护原生水域，不把购买或饲养的鱼放入野外。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "鲶的名称与记录",
      "body": "Linnaeus 于 1758 年发表 Silurus asotus。旧文献也使用过 Parasilurus asotus 这一组合。名称和属级处理会随分类研究改变，命名年份记录学术名称的发表，并不表示人们当年才开始认识这种鱼。"
    }
  ],
  "keyFacts": [
    "鲶的头宽而扁，皮肤表面没有鳞片，背鳍很小，腹部后方的臀鳍却很长。成鱼有一对较长的上颌须和一对较短的下颌须；幼鱼早期还可能有另一对下颌须，长大后退化。须的多少要结合生活阶段判断。",
    "成鱼主要捕食其他鱼类。口边的须带有感受器，帮助它感知周围环境和寻找食物。须不是用来咀嚼的牙齿，也不是可以用手拉动的装饰；观察时让鱼留在水中。",
    "研究者记录过鲶在沟渠、稻田和溪流中追逐、缠抱及散卵的繁殖行为。产卵、孵化、仔鱼和幼鱼是不同阶段，不能把不同画面当成同一条鱼的连续成长，也不能把早期幼鱼的须数直接套到成鱼身上。"
  ],
  "threats": [
    "水域污染",
    "栖息环境改变"
  ],
  "conservationActions": [
    "保护原生水域与岸边环境，不把饲养动物自行放入野外。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "缓流河道、湖泊与水草浅水区"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "触须、小背鳍与长臀鳍"
    }
  ],
  "media": {
    "image": "./images/species/amur-catfish/01-cover.webp",
    "alt": "鲶与淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/amur-catfish/02-observation.webp",
        "title": "无鳞身体与长臀鳍",
        "alt": "鲶：无鳞身体与长臀鳍，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。无鳞身体与长臀鳍；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/amur-catfish/03-observation.webp",
        "title": "宽头和触须的位置",
        "alt": "鲶：宽头和触须的位置，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。宽头和触须的位置；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/amur-catfish/04-observation.webp",
        "title": "水底较暗的环境",
        "alt": "鲶：水底较暗的环境，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水底较暗的环境；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/amur-catfish/05-observation.webp",
        "title": "水草根系旁的幼鱼",
        "alt": "鲶：水草根系旁的幼鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水草根系旁的幼鱼；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。早期幼鱼与成鱼的须数可不同，不用生成细节逐根计数。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/amur-catfish/06-observation.webp",
        "title": "缓流河道中的成鱼",
        "alt": "鲶：缓流河道中的成鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。缓流河道中的成鱼；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
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
      "title": "GBIF：接受名称与原始分类响应",
      "url": "https://www.gbif.org/species/2337594",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FishBase：形态、分布、繁殖与全球 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Silurus-asotus.html",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2024 原始研究：鲶属边界及下颌须的区别",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11298680/",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "日本水产研究原始资料：发育中的须数变化",
      "url": "https://www.fra.go.jp/home/kenkyushokai/intercoop/ujnr/files/ujnr_poceedings_spawning_maturation1999.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "ADW：沿用图册辐鳍鱼纲的分类对照",
      "url": "https://animaldiversity.org/accounts/Cyprinus_carpio/classification/",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
