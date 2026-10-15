import type { Species } from '../../types/species.ts';

const profile = {
  "id": "scarlet-skimmer",
  "slug": "scarlet-skimmer",
  "names": {
    "zh": "赭黄蜻蜓",
    "en": "Orange Skimmer"
  },
  "scientificName": "Orthetrum testaceum",
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
      "scientificName": "Orthetrum",
      "zhName": "灰蜻属"
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
      "亚洲"
    ],
    "regions": [
      "池塘、排水沟与开阔水边"
    ],
    "countries": [],
    "range": "分布于亚洲的热带、亚热带等地区，新加坡官方资料记录其利用池塘、花园与排水沟。这里描述分布与环境，不把新加坡地区常见程度当作全球数量趋势。"
  },
  "habitats": [
    {
      "name": "池塘、排水沟与开阔水边",
      "realm": "freshwater",
      "description": "分布于亚洲的热带、亚热带等地区，新加坡官方资料记录其利用池塘、花园与排水沟。这里描述分布与环境，不把新加坡地区常见程度当作全球数量趋势。",
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
    "description": "蜻蜓类成虫在空中捕捉小型昆虫，水生若虫捕捉水中小动物。静止的展翅图片用于观察形态，不显示完整捕食过程或飞行速度。"
  },
  "tags": [
    "赭黄蜻蜓",
    "池塘、排水沟与开阔水边"
  ],
  "summary": "赭黄蜻蜓，成熟雄虫胸部橙褐，腹部红色，眼偏浅褐灰色，后翅基部可见琥珀色。",
  "description": "成熟雄虫胸部橙褐，腹部红色，眼偏浅褐灰色，后翅基部可见琥珀色。雌虫偏黄褐，后翅基部通常较透明；与赤蜻比较时应同时看胸部、眼色和腹部。成虫在水边飞行，也常停在突出枝条上。公园池塘和受人活动影响的排水沟也可提供观察机会，但有水并不自动代表水体适合若虫生存。卵孵化后成为水生若虫，经过多次蜕皮，再爬出水面羽化为成虫，没有蛹期。蜻科若虫体形较粗壮，腹端没有细蟌类那样三片外露的叶状尾鳃。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形辨认",
      "body": "成熟雄虫胸部橙褐，腹部红色，眼偏浅褐灰色，后翅基部可见琥珀色。雌虫偏黄褐，后翅基部通常较透明；与赤蜻比较时应同时看胸部、眼色和腹部。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "成虫在水边飞行，也常停在突出枝条上。公园池塘和受人活动影响的排水沟也可提供观察机会，但有水并不自动代表水体适合若虫生存。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "蜻蜓类成虫在空中捕捉小型昆虫，水生若虫捕捉水中小动物。静止的展翅图片用于观察形态，不显示完整捕食过程或飞行速度。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从幼体到成体",
      "body": "卵孵化后成为水生若虫，经过多次蜕皮，再爬出水面羽化为成虫，没有蛹期。蜻科若虫体形较粗壮，腹端没有细蟌类那样三片外露的叶状尾鳃。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的范围",
      "body": "本档案指 Orthetrum testaceum，属于蜻科灰蜻属。英文资料常称 Orange Skimmer 或 Crimson Dropwing，不能只凭 Skimmer 一词与 Crocothemis servilia 合并。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：胸部和腹部是不是完全同一种红色？观察任务：从岸上记录停栖枝条，比较雌雄外观，不追赶，不捕捉来检查翅。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "赭黄蜻蜓的名称与记录",
      "body": "Burmeister 在 1839 年发表本种名称，现用 Orthetrum testaceum，命名作者加括号。中文赭黄蜻蜓联系黄褐色调，但成熟雄虫腹部会变红，名称本身不能涵盖全部雌雄和成熟阶段。"
    }
  ],
  "keyFacts": [
    "成熟雄虫胸部橙褐，腹部红色，眼偏浅褐灰色，后翅基部可见琥珀色。雌虫偏黄褐，后翅基部通常较透明；与赤蜻比较时应同时看胸部、眼色和腹部。",
    "蜻蜓类成虫在空中捕捉小型昆虫，水生若虫捕捉水中小动物。静止的展翅图片用于观察形态，不显示完整捕食过程或飞行速度。",
    "卵孵化后成为水生若虫，经过多次蜕皮，再爬出水面羽化为成虫，没有蛹期。蜻科若虫体形较粗壮，腹端没有细蟌类那样三片外露的叶状尾鳃。"
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
      "value": "池塘、排水沟与开阔水边"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "黄褐色的雌虫"
    }
  ],
  "media": {
    "image": "./images/species/scarlet-skimmer/01-cover.webp",
    "alt": "赭黄蜻蜓及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/scarlet-skimmer/02-observation.webp",
        "title": "雌雄的颜色对照",
        "alt": "赭黄蜻蜓：雌雄的颜色对照，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。左侧红腹为雄虫，右侧黄褐色为雌虫；并非同一真实种群记录。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/scarlet-skimmer/03-observation.webp",
        "title": "雄虫背面的胸腹颜色",
        "alt": "赭黄蜻蜓：雄虫背面的胸腹颜色，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成熟雄虫背面观察，眼、胸和腹部需一起对照。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/scarlet-skimmer/04-observation.webp",
        "title": "水下的粗壮若虫",
        "alt": "赭黄蜻蜓：水下的粗壮若虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。蜻科若虫重建，没有外露叶状尾鳃。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/scarlet-skimmer/05-observation.webp",
        "title": "成虫与羽化蜕皮",
        "alt": "赭黄蜻蜓：成虫与羽化蜕皮，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成虫与留下的若虫蜕皮情景，不表示刚羽化或羽化后经过的时间。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/scarlet-skimmer/06-observation.webp",
        "title": "池塘边的停栖点",
        "alt": "赭黄蜻蜓：池塘边的停栖点，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水边栖地重建，非真实地点记录。",
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
      "url": "https://www.gbif.org/species/1428590",
      "kind": "taxonomy",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "NParks：赭黄蜻蜓形态与栖地",
      "url": "https://www.nparks.gov.sg/florafaunaweb/fauna/1/1/1196",
      "kind": "general",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "NParks：蜻蜓目生活史",
      "url": "https://www.nparks.gov.sg/docs/default-source/sbwr-wetlands-newsletter/wetlands-newsletter--vol-13-no-3-dec-2006.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "台湾生物多样性网络：国际红皮书等级",
      "url": "https://www.tbn.org.tw/taxa/4b1f5678-22ef-4262-895b-f60ca5df4b8d",
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
