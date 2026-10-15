import type { Species } from '../../types/species.ts';

const profile = {
  "id": "wandering-glider",
  "slug": "wandering-glider",
  "names": {
    "zh": "黄蜻",
    "en": "Wandering Glider"
  },
  "scientificName": "Pantala flavescens",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Arthropoda",
      "zhName": "节肢动物门"
    },
    "class": {
      "scientificName": "Insecta",
      "zhName": "昆虫纲"
    },
    "order": {
      "scientificName": "Odonata",
      "zhName": "蜻蜓目"
    },
    "family": {
      "scientificName": "Libellulidae",
      "zhName": "蜻科"
    },
    "genus": {
      "scientificName": "Pantala",
      "zhName": "黄蜻属"
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
    "assessor": "采用台湾生物多样性网络明确标作国际红皮书的 LC；独立评估日期和全球趋势未核实，不填年份或推断趋势。网页更新时间及台湾地区评估日期不作全球评估日期。"
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "亚洲",
      "非洲",
      "欧洲",
      "北美洲",
      "南美洲",
      "大洋洲"
    ],
    "regions": [
      "开阔空地、雨后积水与临时池塘"
    ],
    "countries": [],
    "range": "广布于世界热带、亚热带并可迁移到更高纬度地区，欧洲相对少见，南极洲不在其常规分布范围。全球范围宽不意味着每处临时水体都能完成繁殖。"
  },
  "habitats": [
    {
      "name": "开阔空地、雨后积水与临时池塘",
      "realm": "freshwater",
      "description": "广布于世界热带、亚热带并可迁移到更高纬度地区，欧洲相对少见，南极洲不在其常规分布范围。全球范围宽不意味着每处临时水体都能完成繁殖。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "飞行小昆虫",
      "水生小动物"
    ],
    "description": "成虫在飞行中捕食小昆虫，若虫在水中捕食水生小动物。它常在开阔地飞行，图片中的草地只是飞行场景，不表示若虫也住在干草地。"
  },
  "tags": [
    "黄蜻",
    "开阔空地、雨后积水与临时池塘"
  ],
  "summary": "黄蜻，身体多呈黄褐至金黄色，后翅基部宽阔，翅大多透明。",
  "description": "身体多呈黄褐至金黄色，后翅基部宽阔，翅大多透明。停栖时可对照胸腹颜色与宽后翅；飞过头顶的一只黄色蜻蜓不能只凭颜色定种。黄蜻善于持续飞行和随季节移动，是研究蜻蜓迁移的重要物种。迁移路径的研究包括风场模型等方法，不能把路线推测写成每一只都完成同样旅程。卵和若虫阶段与淡水相连，可以利用临时积水繁殖。若虫最后离水蜕皮成为成虫，没有蛹期；若虫生长速度会受温度、水体持续时间等条件影响，不固定为某个天数。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形辨认",
      "body": "身体多呈黄褐至金黄色，后翅基部宽阔，翅大多透明。停栖时可对照胸腹颜色与宽后翅；飞过头顶的一只黄色蜻蜓不能只凭颜色定种。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "黄蜻善于持续飞行和随季节移动，是研究蜻蜓迁移的重要物种。迁移路径的研究包括风场模型等方法，不能把路线推测写成每一只都完成同样旅程。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "成虫在飞行中捕食小昆虫，若虫在水中捕食水生小动物。它常在开阔地飞行，图片中的草地只是飞行场景，不表示若虫也住在干草地。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从幼体到成体",
      "body": "卵和若虫阶段与淡水相连，可以利用临时积水繁殖。若虫最后离水蜕皮成为成虫，没有蛹期；若虫生长速度会受温度、水体持续时间等条件影响，不固定为某个天数。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的范围",
      "body": "本档案限定 Pantala flavescens，属于蜻科黄蜻属。它与本批其他蜻科物种分别建档；翅形与习性有助于观察，准确鉴定仍需清楚细节。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：前翅与后翅的基部哪个更宽？观察任务：雨后从干燥步道观察空中蜻蜓，记录日期和是否有积水，不进入沟渠。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "黄蜻的名称与记录",
      "body": "Fabricius 在 1798 年发表本种名称，现用 Pantala flavescens，作者和年份加括号。Wandering Glider 联系它的飞行与迁移特征；命名年代并不是科学家开始研究跨海迁移的年代。"
    }
  ],
  "keyFacts": [
    "身体多呈黄褐至金黄色，后翅基部宽阔，翅大多透明。停栖时可对照胸腹颜色与宽后翅；飞过头顶的一只黄色蜻蜓不能只凭颜色定种。",
    "成虫在飞行中捕食小昆虫，若虫在水中捕食水生小动物。它常在开阔地飞行，图片中的草地只是飞行场景，不表示若虫也住在干草地。",
    "卵和若虫阶段与淡水相连，可以利用临时积水繁殖。若虫最后离水蜕皮成为成虫，没有蛹期；若虫生长速度会受温度、水体持续时间等条件影响，不固定为某个天数。"
  ],
  "threats": [],
  "conservationActions": [
    "保留原处生活环境，以拍照记录替代捕捉；不挖巢、不带走卵或幼体，不向其他地区放生。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "开阔空地、雨后积水与临时池塘"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "开阔地上空飞行"
    }
  ],
  "media": {
    "image": "./images/species/wandering-glider/01-cover.webp",
    "alt": "黄蜻及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/wandering-glider/02-observation.webp",
        "title": "开阔地上空飞行",
        "alt": "黄蜻：开阔地上空飞行，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。飞行姿势重建，非迁移路线的追踪记录。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/wandering-glider/03-observation.webp",
        "title": "宽阔的后翅基部",
        "alt": "黄蜻：宽阔的后翅基部，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。翅形观察，不作翅脉测量证据。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/wandering-glider/04-observation.webp",
        "title": "临时水体的产卵情景",
        "alt": "黄蜻：临时水体的产卵情景，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。临时积水产卵情景，非真实繁殖记录。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/wandering-glider/05-observation.webp",
        "title": "水中的若虫",
        "alt": "黄蜻：水中的若虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。蜻科若虫重建，没有外露叶状尾鳃。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/wandering-glider/06-observation.webp",
        "title": "雨后草尖停栖",
        "alt": "黄蜻：雨后草尖停栖，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。雨后环境情景，不能推断单只个体迁飞距离。",
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
      "title": "GBIF：接受名称、作者与分类链",
      "url": "https://www.gbif.org/species/1427855",
      "kind": "taxonomy",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "SANBI：黄蜻全球范围与地区评估边界",
      "url": "https://speciesstatus.sanbi.org/assessment/last-assessment/1680/",
      "kind": "distribution",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "黄蜻迁移路径与风场模型研究",
      "url": "https://arxiv.org/abs/2206.11226",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "IUCN：黄蜻全球评估原文",
      "url": "https://pureportal.inbo.be/files/123966529/Pantala_flavescens.pdf",
      "kind": "conservation",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "NParks：蜻蜓目生活史",
      "url": "https://www.nparks.gov.sg/docs/default-source/sbwr-wetlands-newsletter/wetlands-newsletter--vol-13-no-3-dec-2006.pdf",
      "kind": "general",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "台湾生物多样性网络：国际红皮书等级",
      "url": "https://www.tbn.org.tw/taxa/a1b6a2c8-d224-4009-b22f-8e7f426300b6",
      "kind": "conservation",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "British Dragonfly Society：蜻蜓目生活史与细蟌尾鳃",
      "url": "https://british-dragonflies.org.uk/odonata/life-cycle-and-biology/",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-15",
  "updatedAt": "2026-10-15"
} as const satisfies Species;

export default profile;
