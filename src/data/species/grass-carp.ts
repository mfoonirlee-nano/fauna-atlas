import type { Species } from '../../types/species.ts';

const profile = {
  "id": "grass-carp",
  "slug": "grass-carp",
  "names": {
    "zh": "草鱼",
    "en": "Grass Carp"
  },
  "scientificName": "Ctenopharyngodon idella",
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
      "scientificName": "Ctenopharyngodon",
      "zhName": "草鱼属"
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
      "中国东部水系及引入养殖地区"
    ],
    "countries": [],
    "range": "原生范围包括中国珠江至黑龙江等水系，生活于河流、湖泊和水库。多地为养殖或水草管理而引入草鱼；引入和养殖记录不等同于本地原生种群。",
    "center": {
      "lat": 30.6,
      "lng": 114.3
    }
  },
  "habitats": [
    {
      "name": "河流、湖泊、水库与养殖池塘",
      "realm": "freshwater",
      "description": "成鱼常在中下层水域活动，能在植物附近游动取食。河流和池塘都能见到它，但繁殖需要的水流条件与成鱼日常生活的环境并不相同。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "水生植物",
      "陆生草",
      "早期鱼苗取食浮游动物"
    ],
    "description": "较大的草鱼主要取食水草，也会吃陆生草；鱼苗早期主要吃浮游动物。养殖时还可投喂配合饲料，因此“吃草”不是每个生长阶段唯一的食物。"
  },
  "tags": [
    "草鱼",
    "淡水鱼",
    "河流、湖泊、水库与养殖池塘"
  ],
  "summary": "草鱼身体修长，成鱼主要吃水草，鱼苗早期的食物却以浮游动物为主。",
  "description": "草鱼身体较长，背部偏青褐色，体侧较浅，大鳞片边缘较深。它的嘴边没有鲤那样的须，背鳍基部也较短。辨认时同时比较体形、嘴和鳍，不只看颜色。成鱼常在中下层水域活动，能在植物附近游动取食。河流和池塘都能见到它，但繁殖需要的水流条件与成鱼日常生活的环境并不相同。较大的草鱼主要取食水草，也会吃陆生草；鱼苗早期主要吃浮游动物。养殖时还可投喂配合饲料，因此“吃草”不是每个生长阶段唯一的食物。自然繁殖与河流的水流和水位变化有关，卵可随流水漂移。普通静水池塘能养大草鱼，却不意味着它会在里面自然完成产卵；人工繁育使用专门条件。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从嘴、鳞片和鳍开始",
      "body": "草鱼身体较长，背部偏青褐色，体侧较浅，大鳞片边缘较深。它的嘴边没有鲤那样的须，背鳍基部也较短。辨认时同时比较体形、嘴和鳍，不只看颜色。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在水里怎样活动",
      "body": "成鱼常在中下层水域活动，能在植物附近游动取食。河流和池塘都能见到它，但繁殖需要的水流条件与成鱼日常生活的环境并不相同。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "水里的食物",
      "body": "较大的草鱼主要取食水草，也会吃陆生草；鱼苗早期主要吃浮游动物。养殖时还可投喂配合饲料，因此“吃草”不是每个生长阶段唯一的食物。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "卵和幼鱼的生活",
      "body": "自然繁殖与河流的水流和水位变化有关，卵可随流水漂移。普通静水池塘能养大草鱼，却不意味着它会在里面自然完成产卵；人工繁育使用专门条件。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案采用 GBIF 的接受名 Ctenopharyngodon idella；部分 FAO 旧页写作 C. idellus，研究记录保留这一差异。草鱼与青鱼是不同物种，食物和身体特点也不同。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：草鱼嘴边有须吗？它与鲤的身体轮廓有什么不同？观察任务：在水族场所比较嘴和背鳍，在图中区分成鱼与幼鱼，不自行向野外水域放鱼。养殖常见不代表野外种群没有压力。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "草鱼的名称与记录",
      "body": "Valenciennes 在 1844 年发表本种名称，现用学名为 Ctenopharyngodon idella。命名年份记录的是学术名称的发表时间，不是人们第一次见到这种鱼的时间。旧名和现用属级组合不同，资料检索时需核对接受名称。"
    }
  ],
  "keyFacts": [
    "草鱼身体较长，背部偏青褐色，体侧较浅，大鳞片边缘较深。它的嘴边没有鲤那样的须，背鳍基部也较短。辨认时同时比较体形、嘴和鳍，不只看颜色。",
    "较大的草鱼主要取食水草，也会吃陆生草；鱼苗早期主要吃浮游动物。养殖时还可投喂配合饲料，因此“吃草”不是每个生长阶段唯一的食物。",
    "自然繁殖与河流的水流和水位变化有关，卵可随流水漂移。普通静水池塘能养大草鱼，却不意味着它会在里面自然完成产卵；人工繁育使用专门条件。"
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
      "value": "河流、湖泊、水库与养殖池塘"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "长身体与短背鳍"
    }
  ],
  "media": {
    "image": "./images/species/grass-carp/01-cover.webp",
    "alt": "草鱼及其淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/grass-carp/02-observation.webp",
        "title": "长身体与短背鳍",
        "alt": "草鱼：长身体与短背鳍，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/grass-carp/03-observation.webp",
        "title": "水草旁的取食",
        "alt": "草鱼：水草旁的取食，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/grass-carp/04-observation.webp",
        "title": "育苗水域中的幼鱼",
        "alt": "草鱼：育苗水域中的幼鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼鱼阶段单独重建，不表示与其他图片是同一条鱼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/grass-carp/05-observation.webp",
        "title": "河流中的成鱼",
        "alt": "草鱼：河流中的成鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/grass-carp/06-observation.webp",
        "title": "随水漂移的卵",
        "alt": "草鱼：随水漂移的卵，AI 生成科学情景重建",
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
      "url": "https://www.gbif.org/species/2362030",
      "kind": "taxonomy",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "FAO：形态、食物与繁殖",
      "url": "https://www.fao.org/fishery/docs/DOCUMENT/aquaculture/CulturedSpecies/file/en/en_grasscarp.htm",
      "kind": "ecology",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "FishBase：物种对照与全球 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Ctenopharyngodon-idella.html",
      "kind": "conservation",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "ADW：图册沿用的辐鳍鱼纲与鲤形目归属",
      "url": "https://animaldiversity.org/accounts/Cyprinus_carpio/classification/",
      "kind": "taxonomy",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "物种范围与研究对照",
      "url": "https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T61295A3102796.en",
      "kind": "general",
      "accessedAt": "2026-10-16"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-16",
  "updatedAt": "2026-10-16"
} as const satisfies Species;

export default profile;
