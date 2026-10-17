import type { Species } from '../../types/species.ts';

const profile = {
  "id": "nile-tilapia",
  "slug": "nile-tilapia",
  "names": {
    "zh": "尼罗罗非鱼",
    "en": "Nile Tilapia",
    "aliases": [
      "尼罗口孵非鲫"
    ]
  },
  "scientificName": "Oreochromis niloticus",
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
      "scientificName": "Perciformes",
      "zhName": "鲈形目"
    },
    "family": {
      "scientificName": "Cichlidae",
      "zhName": "丽鱼科"
    },
    "genus": {
      "scientificName": "Oreochromis",
      "zhName": "罗非鱼属"
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
      "非洲",
      "亚洲"
    ],
    "regions": [
      "非洲与西亚原生水域及多地养殖水域"
    ],
    "countries": [],
    "range": "原生于非洲的尼罗河及其他部分河湖水系，西亚部分沿海河流也有原生记录；现已被广泛引入养殖，也有野外建立的引入种群。这里不把养殖遍布多地写成原生于全球，代表点取东非水域。",
    "center": {
      "lat": 0.4,
      "lng": 33.2
    }
  },
  "habitats": [
    {
      "name": "温暖河湖、浅水区与养殖池塘",
      "realm": "freshwater",
      "description": "它原生于非洲及西亚部分水域，在温暖的河湖环境生活，如今在许多地区养殖。水产市场里的罗非鱼可能来自养殖场；售卖地点不能说明它原生于当地。地图以非洲代表点呈现原生背景，不把全部养殖地画成自然范围。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "浮游生物",
      "附着藻类",
      "植物碎屑",
      "小型水生动物"
    ],
    "description": "尼罗罗非鱼会利用浮游生物、附着藻类、植物碎屑和小型水生动物，属于食谱较广的杂食鱼。养殖场也提供配合饲料；人工投喂与野外天然食物的组成需要分别解释。"
  },
  "tags": [
    "尼罗罗非鱼",
    "淡水鱼",
    "温暖河湖、浅水区与养殖池塘"
  ],
  "summary": "尼罗罗非鱼的尾鳍有竖向条纹，雌鱼会把受精卵含在嘴里孵育。",
  "description": "尼罗罗非鱼身体侧扁，背鳍较长，尾鳍上有多条竖向深色细纹。体色随年龄、性别和繁殖状态变化，尾部条纹是可以比较的特点，但仅凭一张生成图不能确定品种或杂交背景。它原生于非洲及西亚部分水域，在温暖的河湖环境生活，如今在许多地区养殖。水产市场里的罗非鱼可能来自养殖场；售卖地点不能说明它原生于当地。地图以非洲代表点呈现原生背景，不把全部养殖地画成自然范围。尼罗罗非鱼会利用浮游生物、附着藻类、植物碎屑和小型水生动物，属于食谱较广的杂食鱼。养殖场也提供配合饲料；人工投喂与野外天然食物的组成需要分别解释。雄鱼会在底质上营造繁殖区域，雌鱼产卵后把受精卵收入口中孵育。口孵期间雌鱼减少进食或停止进食，幼鱼离口后还可短时返回。育幼图只展示外观，闭嘴姿势本身不能证明口内正在含卵。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体和外形开始",
      "body": "尼罗罗非鱼身体侧扁，背鳍较长，尾鳍上有多条竖向深色细纹。体色随年龄、性别和繁殖状态变化，尾部条纹是可以比较的特点，但仅凭一张生成图不能确定品种或杂交背景。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "水边的生活",
      "body": "它原生于非洲及西亚部分水域，在温暖的河湖环境生活，如今在许多地区养殖。水产市场里的罗非鱼可能来自养殖场；售卖地点不能说明它原生于当地。地图以非洲代表点呈现原生背景，不把全部养殖地画成自然范围。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它怎样取得食物",
      "body": "尼罗罗非鱼会利用浮游生物、附着藻类、植物碎屑和小型水生动物，属于食谱较广的杂食鱼。养殖场也提供配合饲料；人工投喂与野外天然食物的组成需要分别解释。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "成长与育幼",
      "body": "雄鱼会在底质上营造繁殖区域，雌鱼产卵后把受精卵收入口中孵育。口孵期间雌鱼减少进食或停止进食，幼鱼离口后还可短时返回。育幼图只展示外观，闭嘴姿势本身不能证明口内正在含卵。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案只介绍 Oreochromis niloticus。“罗非鱼”涵盖多种近缘鱼及养殖杂交群体，红色或银色外观都不能单独确定物种。不要把其他口孵非鲫或所有市场罗非鱼的习性直接归到本种。图册沿用 GBIF 的鲈形目，FishBase 采用丽鱼目 Cichliformes，比较资料时需区分分类口径。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：尾鳍上的深色条纹是横向还是竖向？观察任务：找尾鳍条纹，再用连续影像观察口孵育幼；不掰开鱼嘴检查卵。保护原生水域，不把购买或饲养的鱼放入野外。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "尼罗罗非鱼的名称与记录",
      "body": "Linnaeus 于 1758 年发表本种名称，现用组合为 Oreochromis niloticus。旧文献可见 Tilapia nilotica 等名称。属名和组合的变化记录分类研究的过程，学名发表年代也不代表中国开始养殖它的年代。"
    }
  ],
  "keyFacts": [
    "尼罗罗非鱼身体侧扁，背鳍较长，尾鳍上有多条竖向深色细纹。体色随年龄、性别和繁殖状态变化，尾部条纹是可以比较的特点，但仅凭一张生成图不能确定品种或杂交背景。",
    "尼罗罗非鱼会利用浮游生物、附着藻类、植物碎屑和小型水生动物，属于食谱较广的杂食鱼。养殖场也提供配合饲料；人工投喂与野外天然食物的组成需要分别解释。",
    "雄鱼会在底质上营造繁殖区域，雌鱼产卵后把受精卵收入口中孵育。口孵期间雌鱼减少进食或停止进食，幼鱼离口后还可短时返回。育幼图只展示外观，闭嘴姿势本身不能证明口内正在含卵。"
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
      "value": "温暖河湖、浅水区与养殖池塘"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "尾鳍竖纹与雌鱼口孵"
    }
  ],
  "media": {
    "image": "./images/species/nile-tilapia/01-cover.webp",
    "alt": "尼罗罗非鱼与淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/nile-tilapia/02-observation.webp",
        "title": "尾鳍上的竖向条纹",
        "alt": "尼罗罗非鱼：尾鳍上的竖向条纹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。尾鳍上的竖向条纹；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/nile-tilapia/03-observation.webp",
        "title": "侧扁身体与长背鳍",
        "alt": "尼罗罗非鱼：侧扁身体与长背鳍，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。侧扁身体与长背鳍；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/nile-tilapia/04-observation.webp",
        "title": "育幼雌鱼的外观",
        "alt": "尼罗罗非鱼：育幼雌鱼的外观，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。育幼雌鱼的外观；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。闭口雌鱼外观不证明口内含卵，未绘制透视或内部解剖。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/nile-tilapia/05-observation.webp",
        "title": "浅水区的鱼苗",
        "alt": "尼罗罗非鱼：浅水区的鱼苗，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。浅水区的鱼苗；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/nile-tilapia/06-observation.webp",
        "title": "石面附着藻类的环境",
        "alt": "尼罗罗非鱼：石面附着藻类的环境，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。石面附着藻类的环境；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
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
      "url": "https://www.gbif.org/species/4285694",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FishBase：物种对照与全球 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Oreochromis-niloticus.html",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FAO：原生范围、形态、食物与雌鱼口孵",
      "url": "https://www.fao.org/fishery/docs/CDrom/aquaculture/I1129m/file/en/en_niletilapia.htm",
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
