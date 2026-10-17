import type { Species } from '../../types/species.ts';

const profile = {
  "id": "asian-swamp-eel",
  "slug": "asian-swamp-eel",
  "names": {
    "zh": "黄鳝",
    "en": "Asian Swamp Eel",
    "aliases": [
      "鳝鱼"
    ]
  },
  "scientificName": "Monopterus albus",
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
      "scientificName": "Synbranchiformes",
      "zhName": "合鳃鱼目"
    },
    "family": {
      "scientificName": "Synbranchidae",
      "zhName": "合鳃鱼科"
    },
    "genus": {
      "scientificName": "Monopterus",
      "zhName": "黄鳝属"
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
    "assessor": "采用 FishBase 所列全球 IUCN 等级与评估日期；未独立核实全球趋势，保留 unknown。评估所用物种范围与后续分类修订需分别阅读，不能据此给未划定的近缘种赋予同一等级。"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "中国及东亚淡水湿地"
    ],
    "countries": [],
    "range": "本档案聚焦中国和东亚以 Monopterus albus 记录的稻田、池塘及沟渠种群。旧资料覆盖的亚洲范围涉及物种复合群；这里不合并所有东南亚和海外引入记录。",
    "center": {
      "lat": 28.2,
      "lng": 112.9
    }
  },
  "habitats": [
    {
      "name": "稻田、泥底池塘与沟渠",
      "realm": "freshwater",
      "description": "黄鳝会在泥底和植物根系附近活动，也会钻入洞穴。它能利用空气呼吸，常到水面换气；这不表示它可以长期离开湿润环境。观察水面姿势时，不从单张图片估计呼吸频率。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "水生昆虫",
      "蠕虫",
      "小型甲壳类",
      "小鱼"
    ],
    "description": "黄鳝捕食水生昆虫、蠕虫、小型甲壳类和小鱼等动物。它多在夜间觅食，泥底、洞口和水生植物提供了隐蔽处；养殖饲料与野外天然食物需分别说明。"
  },
  "tags": [
    "黄鳝",
    "淡水鱼",
    "稻田、泥底池塘与沟渠"
  ],
  "summary": "黄鳝是细长的鱼，缺少胸鳍和腹鳍，常在泥底活动并到水面换气。",
  "description": "黄鳝身体细长，表面没有明显鳞片，胸鳍和腹鳍消失，尾部逐渐变细。它的眼睛小，体色常为黄褐或棕褐色。细长外形像蛇，但黄鳝属于鱼类，不能只凭身体长短判断类群。黄鳝会在泥底和植物根系附近活动，也会钻入洞穴。它能利用空气呼吸，常到水面换气；这不表示它可以长期离开湿润环境。观察水面姿势时，不从单张图片估计呼吸频率。黄鳝捕食水生昆虫、蠕虫、小型甲壳类和小鱼等动物。它多在夜间觅食，泥底、洞口和水生植物提供了隐蔽处；养殖饲料与野外天然食物需分别说明。黄鳝有先雌后雄的性别转换生活史，性腺会经历转变阶段。不能凭体色或一张照片判断一条黄鳝的性别，也不能给每条个体规定相同的转换年龄。繁殖资料中常记录雄鱼守护泡沫巢与卵。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体和鳍开始",
      "body": "黄鳝身体细长，表面没有明显鳞片，胸鳍和腹鳍消失，尾部逐渐变细。它的眼睛小，体色常为黄褐或棕褐色。细长外形像蛇，但黄鳝属于鱼类，不能只凭身体长短判断类群。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "水里的生活位置",
      "body": "黄鳝会在泥底和植物根系附近活动，也会钻入洞穴。它能利用空气呼吸，常到水面换气；这不表示它可以长期离开湿润环境。观察水面姿势时，不从单张图片估计呼吸频率。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它怎样取得食物",
      "body": "黄鳝捕食水生昆虫、蠕虫、小型甲壳类和小鱼等动物。它多在夜间觅食，泥底、洞口和水生植物提供了隐蔽处；养殖饲料与野外天然食物需分别说明。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "成长中的变化",
      "body": "黄鳝有先雌后雄的性别转换生活史，性腺会经历转变阶段。不能凭体色或一张照片判断一条黄鳝的性别，也不能给每条个体规定相同的转换年龄。繁殖资料中常记录雄鱼守护泡沫巢与卵。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案沿用 GBIF 接受的 Monopterus albus，内容聚焦中国和东亚称为黄鳝的鱼。旧资料的广义分布涉及物种复合群，与 M. javanensis 的名称处理存在差异，不能把东南亚和海外引入种群的全部结论直接套用。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：黄鳝身上能找到和青鱼一样的胸鳍吗？观察任务：看自然影像中它怎样靠身体弯曲移动，不抓取、不离水摆拍。保护水域环境，不把饲养或购买的动物放入野外。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "黄鳝的名称与记录",
      "body": "Zuiew 于 1793 年以 Muraena alba 发表名称，现用组合为 Monopterus albus。研究者对模式产地、名称适用范围及近缘种的处理仍有讨论；查阅旧黄鳝文献时，需要同时看研究地点和作者采用的物种范围。"
    }
  ],
  "keyFacts": [
    "黄鳝身体细长，表面没有明显鳞片，胸鳍和腹鳍消失，尾部逐渐变细。它的眼睛小，体色常为黄褐或棕褐色。细长外形像蛇，但黄鳝属于鱼类，不能只凭身体长短判断类群。",
    "黄鳝捕食水生昆虫、蠕虫、小型甲壳类和小鱼等动物。它多在夜间觅食，泥底、洞口和水生植物提供了隐蔽处；养殖饲料与野外天然食物需分别说明。",
    "黄鳝有先雌后雄的性别转换生活史，性腺会经历转变阶段。不能凭体色或一张照片判断一条黄鳝的性别，也不能给每条个体规定相同的转换年龄。繁殖资料中常记录雄鱼守护泡沫巢与卵。"
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
      "value": "稻田、泥底池塘与沟渠"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "细长身体与水面换气"
    }
  ],
  "media": {
    "image": "./images/species/asian-swamp-eel/01-cover.webp",
    "alt": "黄鳝与淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/asian-swamp-eel/02-observation.webp",
        "title": "泥底上弯曲的完整身体",
        "alt": "黄鳝：泥底上弯曲的完整身体，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。泥底上弯曲的完整身体；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-swamp-eel/03-observation.webp",
        "title": "靠近水面的头部",
        "alt": "黄鳝：靠近水面的头部，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。靠近水面的头部；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-swamp-eel/04-observation.webp",
        "title": "泥岸洞口",
        "alt": "黄鳝：泥岸洞口，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。泥岸洞口；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-swamp-eel/05-observation.webp",
        "title": "浅水中的幼鱼",
        "alt": "黄鳝：浅水中的幼鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。浅水中的幼鱼；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-swamp-eel/06-observation.webp",
        "title": "稻田水下的植物根系",
        "alt": "黄鳝：稻田水下的植物根系，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。稻田水下的植物根系；不同图片独立重建，静止图不证明动作过程，生成细节不用于精确鉴定。",
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
      "url": "https://www.gbif.org/species/5204081",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FishBase：生态对照及全球 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Monopterus-albus.html",
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
      "title": "ADW：呼吸、食物与生活史",
      "url": "https://animaldiversity.org/accounts/Monopterus_albus/",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2021 名称研究：Muraena alba 的适用范围",
      "url": "https://pubmed.ncbi.nlm.nih.gov/33903352/",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "USGS：物种复合群与分布范围限制",
      "url": "https://nas.er.usgs.gov/Queries/FactSheet.aspx?SpeciesID=974",
      "kind": "distribution",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
