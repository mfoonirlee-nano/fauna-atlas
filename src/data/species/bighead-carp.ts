import type { Species } from '../../types/species.ts';

const profile = {
  "id": "bighead-carp",
  "slug": "bighead-carp",
  "names": {
    "zh": "鳙",
    "en": "Bighead Carp",
    "aliases": [
      "大头鱼",
      "花鲢"
    ]
  },
  "scientificName": "Hypophthalmichthys nobilis",
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
      "scientificName": "Cypriniformes",
      "zhName": "鲤形目"
    },
    "family": {
      "scientificName": "Cyprinidae",
      "zhName": "鲤科"
    },
    "genus": {
      "scientificName": "Hypophthalmichthys",
      "zhName": "鲢属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "DD",
    "label": {
      "zh": "数据缺乏",
      "en": "Data Deficient"
    },
    "trend": "unknown",
    "assessedYear": 2010,
    "assessor": "采用 FishBase 所列全球 IUCN 等级与评估日期；未独立确认全球趋势，保留 unknown。养殖数量不用于推断野生种群状态。"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "中国原生水系及引入养殖水域"
    ],
    "countries": [],
    "range": "原生于中国从珠江至黑龙江一带的淡水水系，生活在河流、湖泊和水库。其他地区也有引入和养殖；档案中的代表坐标用于地图探索，不是完整范围或野外观察记录。",
    "center": {
      "lat": 30.6,
      "lng": 114.3
    }
  },
  "habitats": [
    {
      "name": "江河、湖泊、水库与养殖池塘",
      "realm": "freshwater",
      "description": "它常在水体中上层活动，水中有丰富的天然食物时有利于取食。图中游泳姿势只用于讨论鳍的位置，不代表已经量出速度或固定活动水深。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "filter-feeder"
    ],
    "foods": [
      "浮游动物",
      "其他有机颗粒"
    ],
    "description": "它主要滤食浮游动物，也可摄入其他有机颗粒；养殖时还会利用饲料。鲢偏重浮游植物、鳙偏重浮游动物是比较方向，不能解释为两者的食物完全不重叠。"
  },
  "tags": [
    "鳙",
    "淡水鱼",
    "江河、湖泊、水库与养殖池塘"
  ],
  "summary": "鳙有大头、位置较低的眼睛和斑驳体侧，主要过滤水中的浮游动物。",
  "description": "鳙又叫大头鱼、花鲢，头部占身体的比例较大，眼睛在头部较低的位置。体侧常有暗色斑驳，嘴边没有须。与鲢一起看时，大头和斑驳的体侧是可比较的特点。它常在水体中上层活动，水中有丰富的天然食物时有利于取食。图中游泳姿势只用于讨论鳍的位置，不代表已经量出速度或固定活动水深。它主要滤食浮游动物，也可摄入其他有机颗粒；养殖时还会利用饲料。鲢偏重浮游植物、鳙偏重浮游动物是比较方向，不能解释为两者的食物完全不重叠。自然繁殖与河流中的水流、水位变化有关，半浮性卵需要合适水流保持悬浮。人工池塘可让鳙生长和性成熟，但自然产卵与专门人工繁殖的条件需要分开说明。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从嘴、鳞片和鳍开始",
      "body": "鳙又叫大头鱼、花鲢，头部占身体的比例较大，眼睛在头部较低的位置。体侧常有暗色斑驳，嘴边没有须。与鲢一起看时，大头和斑驳的体侧是可比较的特点。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在水里怎样活动",
      "body": "它常在水体中上层活动，水中有丰富的天然食物时有利于取食。图中游泳姿势只用于讨论鳍的位置，不代表已经量出速度或固定活动水深。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "水里的食物",
      "body": "它主要滤食浮游动物，也可摄入其他有机颗粒；养殖时还会利用饲料。鲢偏重浮游植物、鳙偏重浮游动物是比较方向，不能解释为两者的食物完全不重叠。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "卵和幼鱼的生活",
      "body": "自然繁殖与河流中的水流、水位变化有关，半浮性卵需要合适水流保持悬浮。人工池塘可让鳙生长和性成熟，但自然产卵与专门人工繁殖的条件需要分开说明。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案指 Hypophthalmichthys nobilis，旧资料也可能使用 Aristichthys nobilis。它与鲢属于同属不同种。“大头鱼”是俗名，购买或观察时仍要结合学名和外形判断。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：鳙的头约占身体多大一部分？它和鲢哪一种的体侧更斑驳？观察任务：比较两张完整侧面图，找头、眼和尾鳍的位置，不从图片估计真实体重。养殖常见不代表野外种群没有压力。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "鳙的名称与记录",
      "body": "Richardson 在 1845 年发表本种名称，现用学名为 Hypophthalmichthys nobilis。命名年份记录的是学术名称的发表时间，不是人们第一次见到这种鱼的时间。旧名和现用属级组合不同，资料检索时需核对接受名称。"
    }
  ],
  "keyFacts": [
    "鳙又叫大头鱼、花鲢，头部占身体的比例较大，眼睛在头部较低的位置。体侧常有暗色斑驳，嘴边没有须。与鲢一起看时，大头和斑驳的体侧是可比较的特点。",
    "它主要滤食浮游动物，也可摄入其他有机颗粒；养殖时还会利用饲料。鲢偏重浮游植物、鳙偏重浮游动物是比较方向，不能解释为两者的食物完全不重叠。",
    "自然繁殖与河流中的水流、水位变化有关，半浮性卵需要合适水流保持悬浮。人工池塘可让鳙生长和性成熟，但自然产卵与专门人工繁殖的条件需要分开说明。"
  ],
  "threats": [
    "水域污染",
    "河流与繁殖环境改变"
  ],
  "conservationActions": [
    "保护水域与繁殖环境；不把养殖或观赏鱼自行放入野外水域。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "江河、湖泊、水库与养殖池塘"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "大头与斑驳体侧"
    }
  ],
  "media": {
    "image": "./images/species/bighead-carp/01-cover.webp",
    "alt": "鳙及其淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/bighead-carp/02-observation.webp",
        "title": "大头与斑驳体侧",
        "alt": "鳙：大头与斑驳体侧，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bighead-carp/03-observation.webp",
        "title": "嘴和眼睛的位置",
        "alt": "鳙：嘴和眼睛的位置，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bighead-carp/04-observation.webp",
        "title": "浮游食物所在的水层",
        "alt": "鳙：浮游食物所在的水层，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bighead-carp/05-observation.webp",
        "title": "育苗水域中的幼鱼",
        "alt": "鳙：育苗水域中的幼鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼鱼阶段单独重建，不表示与其他图片是同一条鱼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bighead-carp/06-observation.webp",
        "title": "漂移卵的放大情景",
        "alt": "鳙：漂移卵的放大情景，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。卵的放大情景，不按实测比例，不作物种鉴定或胚胎发育阶段的证据。",
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
      "title": "GBIF：接受名称、命名作者与分类链",
      "url": "https://www.gbif.org/species/2362486",
      "kind": "taxonomy",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "FAO：形态、食物与繁殖",
      "url": "https://www.fao.org/fishery/docs/DOCUMENT/aquaculture/CulturedSpecies/file/en/en_bigheadcarp.htm",
      "kind": "ecology",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "FishBase：物种对照与全球 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Hypophthalmichthys-nobilis.html",
      "kind": "conservation",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "ADW：图册沿用的辐鳍鱼纲与鲤形目归属",
      "url": "https://animaldiversity.org/accounts/Cyprinus_carpio/classification/",
      "kind": "taxonomy",
      "accessedAt": "2026-10-16"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-16",
  "updatedAt": "2026-10-16"
} as const satisfies Species;

export default profile;
