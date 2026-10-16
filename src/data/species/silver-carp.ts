import type { Species } from '../../types/species.ts';

const profile = {
  "id": "silver-carp",
  "slug": "silver-carp",
  "names": {
    "zh": "鲢",
    "en": "Silver Carp",
    "aliases": [
      "白鲢"
    ]
  },
  "scientificName": "Hypophthalmichthys molitrix",
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
    "code": "NT",
    "label": {
      "zh": "近危",
      "en": "Near Threatened"
    },
    "trend": "unknown",
    "assessedYear": 2011,
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
      "亚洲原生水系及各地养殖水域"
    ],
    "countries": [],
    "range": "原生于亚洲淡水水系，中国有原生分布，也在多地养殖。它已被引入其他地区；水产市场常见和养殖数量多，不能直接用来判断原生野生种群的状况。",
    "center": {
      "lat": 30.6,
      "lng": 114.3
    }
  },
  "habitats": [
    {
      "name": "江河、湖泊与养殖池塘",
      "realm": "freshwater",
      "description": "它在水体中游动取食，受到惊扰时可能跃出水面。观察时等鱼自行活动，不敲击、拍水或追赶来展示跳跃；一张游泳图无法说明速度和跃起高度。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "filter-feeder"
    ],
    "foods": [
      "浮游植物",
      "其他微小浮游生物",
      "有机颗粒"
    ],
    "description": "它借助鳃耙过滤水里的微小食物，以浮游植物等为重要食物，也会摄取其他微小颗粒。滤食不等于只喝水，也不能把鲢概括成可以处理任何污染的“清洁鱼”。"
  },
  "tags": [
    "鲢",
    "淡水鱼",
    "江河、湖泊与养殖池塘"
  ],
  "summary": "鲢体色偏银白，眼睛位置较低，用鳃耙过滤水里的浮游食物。",
  "description": "鲢身体侧扁，整体偏银白，鳞片细小，眼睛在头部较低的位置。嘴边没有须。与鳙比较时，可以看体侧是否有明显暗色斑驳，并比较头部占身体的比例。它在水体中游动取食，受到惊扰时可能跃出水面。观察时等鱼自行活动，不敲击、拍水或追赶来展示跳跃；一张游泳图无法说明速度和跃起高度。它借助鳃耙过滤水里的微小食物，以浮游植物等为重要食物，也会摄取其他微小颗粒。滤食不等于只喝水，也不能把鲢概括成可以处理任何污染的“清洁鱼”。自然繁殖时，成鱼在河流中上溯，产出的非黏性卵吸水膨胀，并在合适水流中悬浮漂移。卵沉在缺少水流的池底和随河水漂移的条件不同，人工繁殖要维持适合的水流。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从嘴、鳞片和鳍开始",
      "body": "鲢身体侧扁，整体偏银白，鳞片细小，眼睛在头部较低的位置。嘴边没有须。与鳙比较时，可以看体侧是否有明显暗色斑驳，并比较头部占身体的比例。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在水里怎样活动",
      "body": "它在水体中游动取食，受到惊扰时可能跃出水面。观察时等鱼自行活动，不敲击、拍水或追赶来展示跳跃；一张游泳图无法说明速度和跃起高度。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "水里的食物",
      "body": "它借助鳃耙过滤水里的微小食物，以浮游植物等为重要食物，也会摄取其他微小颗粒。滤食不等于只喝水，也不能把鲢概括成可以处理任何污染的“清洁鱼”。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "卵和幼鱼的生活",
      "body": "自然繁殖时，成鱼在河流中上溯，产出的非黏性卵吸水膨胀，并在合适水流中悬浮漂移。卵沉在缺少水流的池底和随河水漂移的条件不同，人工繁殖要维持适合的水流。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案指 Hypophthalmichthys molitrix，俗称白鲢。它与鳙同属但不同种，不能因市场常合称“鲢鳙”就把两者合并。鳃耙的精细结构需要专业资料，生成图不作解剖证据。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：鲢的眼睛在嘴的上方还是较低的位置？它与鳙的体侧颜色有何不同？观察任务：比较两种鱼的侧面图，只记录看得见的部位；水里的微小食物需另看放大资料。养殖常见不代表野外种群没有压力。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "鲢的名称与记录",
      "body": "Valenciennes 在 1844 年发表本种名称，现用学名为 Hypophthalmichthys molitrix。命名年份记录的是学术名称的发表时间，不是人们第一次见到这种鱼的时间。旧名和现用属级组合不同，资料检索时需核对接受名称。"
    }
  ],
  "keyFacts": [
    "鲢身体侧扁，整体偏银白，鳞片细小，眼睛在头部较低的位置。嘴边没有须。与鳙比较时，可以看体侧是否有明显暗色斑驳，并比较头部占身体的比例。",
    "它借助鳃耙过滤水里的微小食物，以浮游植物等为重要食物，也会摄取其他微小颗粒。滤食不等于只喝水，也不能把鲢概括成可以处理任何污染的“清洁鱼”。",
    "自然繁殖时，成鱼在河流中上溯，产出的非黏性卵吸水膨胀，并在合适水流中悬浮漂移。卵沉在缺少水流的池底和随河水漂移的条件不同，人工繁殖要维持适合的水流。"
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
      "value": "江河、湖泊与养殖池塘"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "银白色的体侧"
    }
  ],
  "media": {
    "image": "./images/species/silver-carp/01-cover.webp",
    "alt": "鲢及其淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/silver-carp/02-observation.webp",
        "title": "银白色的体侧",
        "alt": "鲢：银白色的体侧，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/silver-carp/03-observation.webp",
        "title": "较低的眼睛",
        "alt": "鲢：较低的眼睛，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/silver-carp/04-observation.webp",
        "title": "水中的滤食情景",
        "alt": "鲢：水中的滤食情景，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/silver-carp/05-observation.webp",
        "title": "幼鱼的外形",
        "alt": "鲢：幼鱼的外形，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼鱼阶段单独重建，不表示与其他图片是同一条鱼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/silver-carp/06-observation.webp",
        "title": "流水中的卵",
        "alt": "鲢：流水中的卵，AI 生成科学情景重建",
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
      "url": "https://www.gbif.org/species/2362473",
      "kind": "taxonomy",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "FAO：形态、食物与繁殖",
      "url": "https://www.fao.org/fishery/docs/CDrom/aquaculture/I1129m/file/en/en_silvercarp.htm",
      "kind": "ecology",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "FishBase：物种对照与全球 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Hypophthalmichthys-molitrix.html",
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
