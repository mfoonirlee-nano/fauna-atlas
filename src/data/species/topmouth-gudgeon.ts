import type { Species } from '../../types/species.ts';

const profile = {
  "id": "topmouth-gudgeon",
  "slug": "topmouth-gudgeon",
  "names": {
    "zh": "麦穗鱼",
    "en": "Topmouth Gudgeon",
    "aliases": []
  },
  "scientificName": "Pseudorasbora parva",
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
      "scientificName": "Pseudorasbora",
      "zhName": "麦穗鱼属"
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
    "assessor": "采用 FishBase 所列全球 IUCN 等级与评估日期；未独立核实全球趋势，保留 unknown。"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "东亚淡水水域及引入地区"
    ],
    "countries": [],
    "range": "原生于东亚，从黑龙江至珠江水系及邻近地区；也被引入欧洲和亚洲其他水域。原生范围和引入后的扩散分别记录，地图代表点不表示完整分布。",
    "center": {
      "lat": 31.2,
      "lng": 121.0
    }
  },
  "habitats": [
    {
      "name": "池塘、缓流沟渠与小型湖泊",
      "realm": "freshwater",
      "description": "麦穗鱼能生活在多种淡水环境，在水草较多的小沟渠、池塘和小湖泊尤其常见。它原生于东亚，后来随人类活动进入其他地区；引入地区的生态影响与原生地区的生活需要分开介绍。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "小型水生无脊椎动物",
      "植物性食物",
      "鱼卵"
    ],
    "description": "麦穗鱼取食小型水生无脊椎动物，也会摄入植物性食物、鱼卵等。它的食谱随环境变化，不能把它只写成吃某一种食物的鱼。嘴的位置是观察特点，具体吃了什么仍需胃含物等研究支持。"
  },
  "tags": [
    "麦穗鱼",
    "淡水鱼",
    "池塘、缓流沟渠与小型湖泊"
  ],
  "summary": "麦穗鱼的嘴小而向上，体侧常有暗色纵纹，常在池塘和缓流沟渠活动。",
  "description": "麦穗鱼是小型淡水鱼，身体偏细长，嘴小而向上，口边没有须。体侧常见一条暗色纵纹，鳞片边缘也有暗色。纵纹和体色会随年龄与繁殖状态变化，不能把某一种颜色当成所有个体的样子。麦穗鱼能生活在多种淡水环境，在水草较多的小沟渠、池塘和小湖泊尤其常见。它原生于东亚，后来随人类活动进入其他地区；引入地区的生态影响与原生地区的生活需要分开介绍。麦穗鱼取食小型水生无脊椎动物，也会摄入植物性食物、鱼卵等。它的食谱随环境变化，不能把它只写成吃某一种食物的鱼。嘴的位置是观察特点，具体吃了什么仍需胃含物等研究支持。繁殖时，麦穗鱼把黏性卵产在植物、石块等水下表面，雄鱼会守护产卵位置。卵、仔鱼和成鱼是不同阶段；图库中的幼鱼单独重建，不表示六张图记录了同一条鱼的成长。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体和鳍开始",
      "body": "麦穗鱼是小型淡水鱼，身体偏细长，嘴小而向上，口边没有须。体侧常见一条暗色纵纹，鳞片边缘也有暗色。纵纹和体色会随年龄与繁殖状态变化，不能把某一种颜色当成所有个体的样子。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "水里的生活位置",
      "body": "麦穗鱼能生活在多种淡水环境，在水草较多的小沟渠、池塘和小湖泊尤其常见。它原生于东亚，后来随人类活动进入其他地区；引入地区的生态影响与原生地区的生活需要分开介绍。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它怎样取得食物",
      "body": "麦穗鱼取食小型水生无脊椎动物，也会摄入植物性食物、鱼卵等。它的食谱随环境变化，不能把它只写成吃某一种食物的鱼。嘴的位置是观察特点，具体吃了什么仍需胃含物等研究支持。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "成长中的变化",
      "body": "繁殖时，麦穗鱼把黏性卵产在植物、石块等水下表面，雄鱼会守护产卵位置。卵、仔鱼和成鱼是不同阶段；图库中的幼鱼单独重建，不表示六张图记录了同一条鱼的成长。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案指 Pseudorasbora parva，图册按 GBIF 归入鲤科。FishBase 等鱼类资料把麦穗鱼列入 Gobionidae；这里保持与既有鲤形目档案一致的分类口径。不要把“麦穗”外形相近的小鱼都认作本种。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：麦穗鱼的嘴朝上还是朝下？观察任务：在照片上找出嘴、纵纹和尾鳍，不把水族鱼或野采鱼放入别的水域。保护水域环境，不把饲养或购买的动物放入野外。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "麦穗鱼的名称与记录",
      "body": "Temminck 与 Schlegel 于 1846 年发表本种名称，现用学名为 Pseudorasbora parva。科学名称帮助把不同地区的俗称对应到研究对象，命名年代也不等于它首次出现于中国池塘的年代。"
    }
  ],
  "keyFacts": [
    "麦穗鱼是小型淡水鱼，身体偏细长，嘴小而向上，口边没有须。体侧常见一条暗色纵纹，鳞片边缘也有暗色。纵纹和体色会随年龄与繁殖状态变化，不能把某一种颜色当成所有个体的样子。",
    "麦穗鱼取食小型水生无脊椎动物，也会摄入植物性食物、鱼卵等。它的食谱随环境变化，不能把它只写成吃某一种食物的鱼。嘴的位置是观察特点，具体吃了什么仍需胃含物等研究支持。",
    "繁殖时，麦穗鱼把黏性卵产在植物、石块等水下表面，雄鱼会守护产卵位置。卵、仔鱼和成鱼是不同阶段；图库中的幼鱼单独重建，不表示六张图记录了同一条鱼的成长。"
  ],
  "threats": [
    "水域污染",
    "栖息环境改变"
  ],
  "conservationActions": [
    "保护原生水域及岸边植被；不随意放生或转移水生动物。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "池塘、缓流沟渠与小型湖泊"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "上翘小嘴与体侧纵纹"
    }
  ],
  "media": {
    "image": "./images/species/topmouth-gudgeon/01-cover.webp",
    "alt": "麦穗鱼与淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/topmouth-gudgeon/02-observation.webp",
        "title": "体侧暗色纵纹",
        "alt": "麦穗鱼：体侧暗色纵纹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。体侧暗色纵纹；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/topmouth-gudgeon/03-observation.webp",
        "title": "向上开口的小嘴",
        "alt": "麦穗鱼：向上开口的小嘴，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。向上开口的小嘴；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/topmouth-gudgeon/04-observation.webp",
        "title": "水草旁的小鱼",
        "alt": "麦穗鱼：水草旁的小鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水草旁的小鱼；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/topmouth-gudgeon/05-observation.webp",
        "title": "附着在水下表面的卵",
        "alt": "麦穗鱼：附着在水下表面的卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。附着在水下表面的卵；为便于共读放大展示，卵与成鱼的相对比例未经实测，不用于发育阶段判断。不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/topmouth-gudgeon/06-observation.webp",
        "title": "幼鱼与池底",
        "alt": "麦穗鱼：幼鱼与池底，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼鱼与池底；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
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
      "url": "https://www.gbif.org/species/2362868",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FishBase：生态对照及全球 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Pseudorasbora-parva.html",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "ADW：图册沿用的辐鳍鱼纲归属",
      "url": "https://animaldiversity.org/accounts/Cyprinus_carpio/classification/",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "USGS：麦穗鱼生态与引入记录",
      "url": "https://nas.er.usgs.gov/queries/greatlakes/FactSheet.aspx?Species_ID=3650",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
