import type { Species } from '../../types/species.ts';

const profile = {
  "id": "northern-grass-lizard",
  "slug": "northern-grass-lizard",
  "names": {
    "zh": "北草蜥",
    "en": "Northern Grass Lizard",
    "aliases": [
      "China Grass Lizard"
    ]
  },
  "scientificName": "Takydromus septentrionalis",
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
      "scientificName": "Squamata",
      "zhName": "有鳞目"
    },
    "family": {
      "scientificName": "Lacertidae",
      "zhName": "蜥蜴科"
    },
    "genus": {
      "scientificName": "Takydromus",
      "zhName": "草蜥属"
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
    "assessor": "IUCN 发布在 GBIF 的红色名录数据确认全球无危；条目文献发表于 2019 年，未核实独立评估日期，故不把发表年填作 assessedYear。全球趋势尚未独立核实。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "中国中部与东南部"
    ],
    "countries": [],
    "range": "主要分布于中国中部和东南部，舟山等岛屿种群有长期生态研究。近缘草蜥在一些地点共同分布，泛称“长尾蜥”的记录需要核实学名。地图选择浙江代表点，不表示一次野外观察或完整范围。",
    "center": {
      "lat": 29.8,
      "lng": 121.9
    }
  },
  "habitats": [
    {
      "name": "草地、灌丛边缘与低矮植被",
      "realm": "terrestrial",
      "description": "它白天在草地和低矮植被间活动，会爬上草茎，也会在地面移动。外界温度会影响活动，研究者因此比较过不同温度下的奔跑表现。长尾在草丛里容易漏看，观察时顺着尾巴找到末端，避免踩踏植被。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "昆虫",
      "其他小型无脊椎动物"
    ],
    "description": "北草蜥取食昆虫等小型无脊椎动物。研究中的饲养个体曾接受蟋蟀和黄粉虫等食物，人工食谱与野外可获得的猎物需要分别阅读。它用嘴捕食，足和长尾帮助它在植被间活动。"
  },
  "tags": [
    "北草蜥",
    "爬行纲",
    "细长尾巴与草茎活动"
  ],
  "summary": "北草蜥有细长身体和长尾，白天在草地与低矮植被间活动，取食小型无脊椎动物。",
  "description": "北草蜥身体细长，褐色背部和体侧常有纵向浅纹，尾巴细而长，明显超过头和躯干。四肢纤细，趾末有爪。看完整动物时，先找身体与尾巴的交界，再比较两段长度；尾端要一起留在观察范围中。它白天在草地和低矮植被间活动，会爬上草茎，也会在地面移动。外界温度会影响活动，研究者因此比较过不同温度下的奔跑表现。长尾在草丛里容易漏看，观察时顺着尾巴找到末端，避免踩踏植被。北草蜥取食昆虫等小型无脊椎动物。研究中的饲养个体曾接受蟋蟀和黄粉虫等食物，人工食谱与野外可获得的猎物需要分别阅读。它用嘴捕食，足和长尾帮助它在植被间活动。北草蜥是卵生蜥蜴，雌体在繁殖季可多次产卵。舟山岛屿的研究记录了不同个体和季节中的产卵差异，卵数与母体大小有关。这里不把实验中的一次产卵量写成全物种固定数值；幼体图也不代表某一天龄。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "找一找身体的特点",
      "body": "北草蜥身体细长，褐色背部和体侧常有纵向浅纹，尾巴细而长，明显超过头和躯干。四肢纤细，趾末有爪。看完整动物时，先找身体与尾巴的交界，再比较两段长度；尾端要一起留在观察范围中。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "生活环境与活动",
      "body": "它白天在草地和低矮植被间活动，会爬上草茎，也会在地面移动。外界温度会影响活动，研究者因此比较过不同温度下的奔跑表现。长尾在草丛里容易漏看，观察时顺着尾巴找到末端，避免踩踏植被。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它会吃什么",
      "body": "北草蜥取食昆虫等小型无脊椎动物。研究中的饲养个体曾接受蟋蟀和黄粉虫等食物，人工食谱与野外可获得的猎物需要分别阅读。它用嘴捕食，足和长尾帮助它在植被间活动。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从卵到幼体",
      "body": "北草蜥是卵生蜥蜴，雌体在繁殖季可多次产卵。舟山岛屿的研究记录了不同个体和季节中的产卵差异，卵数与母体大小有关。这里不把实验中的一次产卵量写成全物种固定数值；幼体图也不代表某一天龄。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案指 Takydromus septentrionalis。北草蜥与南草蜥等近缘种可在部分地区共存，长尾和纵纹并非本种独有。跨地区检索要核对物种名和鉴别资料，不能把整个草蜥属的分布都归给北草蜥。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：北草蜥的尾巴比头和身体合起来更长吗？观察任务：沿完整图片找尾端，在自然步道旁远看草丛，不拉尾巴或追赶动物。保留水陆边缘和植被通道，不把饲养动物放入野外。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "北草蜥的名称与记录",
      "body": "Günther 于 1864 年发表北草蜥名称，早期文献可见 Tachydromus septentrionalis 的拼写，现用 Takydromus septentrionalis。发表年份记录名称在分类文献中的历史；确认野外个体仍要结合地点和专业鉴别特征。"
    }
  ],
  "keyFacts": [
    "北草蜥身体细长，褐色背部和体侧常有纵向浅纹，尾巴细而长，明显超过头和躯干。四肢纤细，趾末有爪。看完整动物时，先找身体与尾巴的交界，再比较两段长度；尾端要一起留在观察范围中。",
    "北草蜥取食昆虫等小型无脊椎动物。研究中的饲养个体曾接受蟋蟀和黄粉虫等食物，人工食谱与野外可获得的猎物需要分别阅读。它用嘴捕食，足和长尾帮助它在植被间活动。",
    "北草蜥是卵生蜥蜴，雌体在繁殖季可多次产卵。舟山岛屿的研究记录了不同个体和季节中的产卵差异，卵数与母体大小有关。这里不把实验中的一次产卵量写成全物种固定数值；幼体图也不代表某一天龄。"
  ],
  "threats": [
    "栖息环境改变",
    "活动通道受阻"
  ],
  "conservationActions": [
    "保护原生栖息环境，观察时保持距离，不带走野生动物或自行放生。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "草地、灌丛边缘与低矮植被"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "细长尾巴与草茎活动"
    }
  ],
  "media": {
    "image": "./images/species/northern-grass-lizard/01-cover.webp",
    "alt": "北草蜥完整外形与自然环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/northern-grass-lizard/02-observation.webp",
        "title": "草茎间的完整长尾",
        "alt": "北草蜥：草茎间的完整长尾，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。草茎间的完整长尾；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/northern-grass-lizard/03-observation.webp",
        "title": "头部、前足与纵纹",
        "alt": "北草蜥：头部、前足与纵纹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。头部、前足与纵纹；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/northern-grass-lizard/04-observation.webp",
        "title": "草茎上的攀爬姿态",
        "alt": "北草蜥：草茎上的攀爬姿态，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。草茎上的攀爬姿态；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/northern-grass-lizard/05-observation.webp",
        "title": "叶片上的幼蜥",
        "alt": "北草蜥：叶片上的幼蜥，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。叶片上的幼蜥；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/northern-grass-lizard/06-observation.webp",
        "title": "草地边缘的活动环境",
        "alt": "北草蜥：草地边缘的活动环境，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。草地边缘的活动环境；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
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
      "url": "https://www.gbif.org/species/2468585",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN 发布的 GBIF 数据：全球等级与 2019 文献",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/102342469",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "Reptile Database：接受名称与分布",
      "url": "https://reptile-database.reptarium.cz/Takydromus/septentrionalis",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "USFWS：草蜥属的纲、目、科归属",
      "url": "https://www.fws.gov/taxonomic-tree/2039731",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "1998 舟山原始研究：雌雄差异与产卵",
      "url": "https://rjh.folium.ru/index.php/rjh/article/view/346",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2005 原始研究：日行性、卵生与温度影响",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S0306456504001743",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2020 原始研究：野生与人工饲养、实验食物",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7520994/",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2021 原始研究：北草蜥与近缘种分布",
      "url": "https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.7671",
      "kind": "distribution",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
