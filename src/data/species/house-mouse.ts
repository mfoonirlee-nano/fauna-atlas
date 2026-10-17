import type { Species } from '../../types/species.ts';

const profile = {
  "id": "house-mouse",
  "slug": "house-mouse",
  "names": {
    "zh": "小家鼠",
    "en": "House Mouse",
    "aliases": [
      "家鼠"
    ]
  },
  "scientificName": "Mus musculus",
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
      "scientificName": "Mammalia",
      "zhName": "哺乳纲"
    },
    "order": {
      "scientificName": "Rodentia",
      "zhName": "啮齿目"
    },
    "family": {
      "scientificName": "Muridae",
      "zhName": "鼠科"
    },
    "genus": {
      "scientificName": "Mus",
      "zhName": "小鼠属"
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
    "assessor": "IUCN 2016 年评估的 2021 年修订版为 LC；修订发表年不替代评估年。",
    "assessedYear": 2016
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "世界多地"
    ],
    "countries": [],
    "range": "小家鼠随人类活动扩散到世界多地，生活于建筑周边、农田及其他有食物和遮蔽的环境。地图代表点并非完整分布范围，也不是一次野外观察记录。",
    "center": {
      "lat": 35,
      "lng": 110
    }
  },
  "habitats": [
    {
      "name": "建筑周边与田野",
      "realm": "terrestrial",
      "description": "小家鼠随人类活动扩散到世界多地，生活于建筑周边、农田及其他有食物和遮蔽的环境。地图代表点并非完整分布范围，也不是一次野外观察记录。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "种子",
      "谷物",
      "植物材料",
      "昆虫"
    ],
    "description": "小家鼠取食谷物、种子等植物材料，也会吃昆虫。门齿持续生长，啃咬时会受到磨耗。不要把漫画里的奶酪当成它唯一的食物，也不要用食物引它到孩子身边。"
  },
  "tags": [
    "小家鼠",
    "建筑周边与田野"
  ],
  "summary": "小家鼠有尖吻、圆耳和细长尾巴，常在夜间寻找食物。它的门齿持续生长，幼鼠出生时还没有睁眼。",
  "description": "小家鼠身形较细，吻部尖，耳朵相对较大。尾巴细长、毛少，可见环状鳞纹。它与褐家鼠的幼体容易混淆，不能只凭“个头小”认定物种。本档案采用 GBIF 接受的 Mus musculus，属于鼠科、小鼠属。不同文献对小家鼠复合群及其亚种的处理有差异；“老鼠”是日常统称，不能把建筑附近的鼠都归入这一物种。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "小家鼠身形较细，吻部尖，耳朵相对较大。尾巴细长、毛少，可见环状鳞纹。它与褐家鼠的幼体容易混淆，不能只凭“个头小”认定物种。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "小家鼠常在夜间活动，会沿有遮蔽物的地方奔跑，也能攀爬。它借助嗅觉、听觉和触须探索周围；日间偶尔出现并不自动说明它生病。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物怎样进入身体",
      "body": "小家鼠取食谷物、种子等植物材料，也会吃昆虫。门齿持续生长，啃咬时会受到磨耗。不要把漫画里的奶酪当成它唯一的食物，也不要用食物引它到孩子身边。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼体与成体",
      "body": "刚出生的小家鼠没有毛，眼睛尚未睁开，需要母鼠哺乳。后来逐渐长毛、睁眼并离巢活动，图库里的长毛幼鼠已经度过新生阶段。繁殖情况受食物、温度和栖身条件影响。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "本档案采用 GBIF 接受的 Mus musculus，属于鼠科、小鼠属。不同文献对小家鼠复合群及其亚种的处理有差异；“老鼠”是日常统称，不能把建筑附近的鼠都归入这一物种。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：小家鼠和仓鼠的尾巴差在哪里？观察任务：用自然影像比较耳、吻和尾巴。发现家中鼠迹时交由成人处理，不触碰野鼠、巢材或排泄物，也不安排诱捕观察。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Mus musculus 的名称记录",
      "body": "Linnaeus 在 1758 年使用 Mus musculus 这一名称，GBIF 当前将它列为接受种。小家鼠随人类运输扩散的历史不能由命名年份推算；白色实验或饲养品系也不因毛色不同就另算一个物种。"
    }
  ],
  "keyFacts": [
    "小家鼠身形较细，吻部尖，耳朵相对较大。尾巴细长、毛少，可见环状鳞纹。它与褐家鼠的幼体容易混淆，不能只凭“个头小”认定物种。",
    "小家鼠取食谷物、种子等植物材料，也会吃昆虫。门齿持续生长，啃咬时会受到磨耗。不要把漫画里的奶酪当成它唯一的食物，也不要用食物引它到孩子身边。",
    "刚出生的小家鼠没有毛，眼睛尚未睁开，需要母鼠哺乳。后来逐渐长毛、睁眼并离巢活动，图库里的长毛幼鼠已经度过新生阶段。繁殖情况受食物、温度和栖身条件影响。"
  ],
  "threats": [
    "引入地区可能影响本地生态"
  ],
  "conservationActions": [
    "成人妥善存放食物、减少建筑入口与藏身处；不放生饲养鼠。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "建筑周边与田野"
    },
    {
      "key": "diet",
      "label": "主要食物",
      "value": "种子、谷物"
    }
  ],
  "media": {
    "image": "./images/species/house-mouse/01-cover.webp",
    "alt": "小家鼠及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/house-mouse/02-observation.webp",
        "title": "吻部与触须",
        "alt": "小家鼠：吻部与触须，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。触须参与触觉探索，图中耳朵与吻部比例仅作观察示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/house-mouse/03-observation.webp",
        "title": "前足捧着种子",
        "alt": "小家鼠：前足捧着种子，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。小家鼠取食多种食物，种子只是其中一种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/house-mouse/04-observation.webp",
        "title": "墙边活动",
        "alt": "小家鼠：墙边活动，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。建筑边缘可提供遮蔽，夜间活动需要连续影像观察。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/house-mouse/05-observation.webp",
        "title": "隐蔽处的草巢",
        "alt": "小家鼠：隐蔽处的草巢，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。它会利用柔软材料筑巢，现场不要翻动巢材。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/house-mouse/06-observation.webp",
        "title": "已经睁眼的幼鼠",
        "alt": "小家鼠：已经睁眼的幼鼠，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。这只幼鼠已经长毛；刚出生时没有这样的外观。",
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
      "title": "GBIF：接受学名、命名人与分类链",
      "url": "https://www.gbif.org/species/7429082",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "ADW：小家鼠生活史",
      "url": "https://animaldiversity.org/accounts/Mus_musculus/",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "加州大学 IPM：小家鼠",
      "url": "https://ipm.ucanr.edu/home-and-landscape/house-mouse/",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "加州大学推广服务：小鼠门齿",
      "url": "https://ucanr.edu/county/cooperative-extension-ventura-county/mice",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球保护名录",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/176677922",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN：全球评估与日期",
      "url": "https://doi.org/10.2305/IUCN.UK.2021-1.RLTS.T13972A197519724.en",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "挪威生物多样性信息中心：引用 2016 评估及 2021 修订",
      "url": "https://lister.artsdatabanken.no/fremmedartslista/2023/3124",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
