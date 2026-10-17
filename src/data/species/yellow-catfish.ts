import type { Species } from '../../types/species.ts';

const profile = {
  "id": "yellow-catfish",
  "slug": "yellow-catfish",
  "names": {
    "zh": "黄颡鱼",
    "en": "Yellow Catfish",
    "aliases": [
      "黄骨鱼",
      "黄辣丁"
    ]
  },
  "scientificName": "Tachysurus fulvidraco",
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
      "scientificName": "Siluriformes",
      "zhName": "鲶形目"
    },
    "family": {
      "scientificName": "Bagridae",
      "zhName": "鲿科"
    },
    "genus": {
      "scientificName": "Tachysurus",
      "zhName": "黄颡鱼属"
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
    "assessedYear": 2011,
    "assessor": "采用 FishBase 所列全球 IUCN 等级与评估日期；未独立核实全球趋势，保留 unknown。养殖或引入水域数量不代表原生野生趋势。"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "中国及东亚河湖"
    ],
    "countries": [],
    "range": "原生于中国及东亚河湖，资料记录从黑龙江流域至中国南方水系的分布。养殖与水产销售还会把它带到其他地点，市场上的产地与野生范围需要分别核对。",
    "center": {
      "lat": 30.5,
      "lng": 114.4
    }
  },
  "habitats": [
    {
      "name": "河道、湖泊与近底水域",
      "realm": "freshwater",
      "description": "它主要生活在河道与湖泊，常到近底水域寻找食物。泥沙、水草和水下遮蔽物为它提供活动空间。体色会受个体和环境影响，图中明亮的黄色不能代表所有黄颡鱼都一样鲜艳。",
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
      "软体动物",
      "小鱼"
    ],
    "description": "黄颡鱼会在水底取食水生昆虫、软体动物等，也偶尔吃鱼。不同水域和成长阶段的食物可能不同，不能只把它写成吃虾或吃鱼。小嘴周围的须是感知环境的结构，图片不显示体内的感受过程。"
  },
  "tags": [
    "黄颡鱼",
    "淡水鱼",
    "河道、湖泊与近底水域"
  ],
  "summary": "黄颡鱼常有黄黑相间的体色和四对须，背鳍与胸鳍前缘有硬棘。",
  "description": "黄颡鱼的身体常有黄色底色和深色斑块，表面没有明显鳞片，口边有四对须。它有一枚明显的背鳍，后面还有较小的脂鳍，尾鳍分叉。背鳍和胸鳍前缘有硬棘，观察时不徒手抓握。它主要生活在河道与湖泊，常到近底水域寻找食物。泥沙、水草和水下遮蔽物为它提供活动空间。体色会受个体和环境影响，图中明亮的黄色不能代表所有黄颡鱼都一样鲜艳。黄颡鱼会在水底取食水生昆虫、软体动物等，也偶尔吃鱼。不同水域和成长阶段的食物可能不同，不能只把它写成吃虾或吃鱼。小嘴周围的须是感知环境的结构，图片不显示体内的感受过程。黄颡鱼产卵繁殖，雄鱼会守护卵。观察育幼时，要区分守护卵与把卵含在嘴里的口孵：本批尼罗罗非鱼采用雌鱼口孵，两种鱼的育幼方式不同。图库幼鱼单独重建，不记录同一个体的年龄。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体和外形开始",
      "body": "黄颡鱼的身体常有黄色底色和深色斑块，表面没有明显鳞片，口边有四对须。它有一枚明显的背鳍，后面还有较小的脂鳍，尾鳍分叉。背鳍和胸鳍前缘有硬棘，观察时不徒手抓握。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "水边的生活",
      "body": "它主要生活在河道与湖泊，常到近底水域寻找食物。泥沙、水草和水下遮蔽物为它提供活动空间。体色会受个体和环境影响，图中明亮的黄色不能代表所有黄颡鱼都一样鲜艳。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它怎样取得食物",
      "body": "黄颡鱼会在水底取食水生昆虫、软体动物等，也偶尔吃鱼。不同水域和成长阶段的食物可能不同，不能只把它写成吃虾或吃鱼。小嘴周围的须是感知环境的结构，图片不显示体内的感受过程。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "成长与育幼",
      "body": "黄颡鱼产卵繁殖，雄鱼会守护卵。观察育幼时，要区分守护卵与把卵含在嘴里的口孵：本批尼罗罗非鱼采用雌鱼口孵，两种鱼的育幼方式不同。图库幼鱼单独重建，不记录同一个体的年龄。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案采用 GBIF 接受名 Tachysurus fulvidraco，旧资料常用 Pelteobagrus fulvidraco 或 Pseudobagrus fulvidraco。它属于鲿科，与鲶科的鲶不同；“黄骨鱼”等俗名仍需结合学名确认。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：黄颡鱼大背鳍后面，还有一枚小鳍吗？观察任务：隔着展示窗比较鲶与黄颡鱼的鳍和体色，不触碰鱼鳍硬棘。保护原生水域，不把购买或饲养的鱼放入野外。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "黄颡鱼的名称与记录",
      "body": "Richardson 于 1846 年发表本种名称，现用组合为 Tachysurus fulvidraco。它在不同资料中曾被放入不同属，核对旧名称可帮助追溯养殖和生态研究，不能把属名变化当作新物种的发现。"
    }
  ],
  "keyFacts": [
    "黄颡鱼的身体常有黄色底色和深色斑块，表面没有明显鳞片，口边有四对须。它有一枚明显的背鳍，后面还有较小的脂鳍，尾鳍分叉。背鳍和胸鳍前缘有硬棘，观察时不徒手抓握。",
    "黄颡鱼会在水底取食水生昆虫、软体动物等，也偶尔吃鱼。不同水域和成长阶段的食物可能不同，不能只把它写成吃虾或吃鱼。小嘴周围的须是感知环境的结构，图片不显示体内的感受过程。",
    "黄颡鱼产卵繁殖，雄鱼会守护卵。观察育幼时，要区分守护卵与把卵含在嘴里的口孵：本批尼罗罗非鱼采用雌鱼口孵，两种鱼的育幼方式不同。图库幼鱼单独重建，不记录同一个体的年龄。"
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
      "value": "河道、湖泊与近底水域"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "四对须、脂鳍与分叉尾"
    }
  ],
  "media": {
    "image": "./images/species/yellow-catfish/01-cover.webp",
    "alt": "黄颡鱼与淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/yellow-catfish/02-observation.webp",
        "title": "黄色底色与深色斑块",
        "alt": "黄颡鱼：黄色底色与深色斑块，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。黄色底色与深色斑块；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-catfish/03-observation.webp",
        "title": "口边的须",
        "alt": "黄颡鱼：口边的须，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。口边的须；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-catfish/04-observation.webp",
        "title": "背鳍、脂鳍和胸鳍",
        "alt": "黄颡鱼：背鳍、脂鳍和胸鳍，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。背鳍、脂鳍和胸鳍；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-catfish/05-observation.webp",
        "title": "水草间的幼鱼",
        "alt": "黄颡鱼：水草间的幼鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水草间的幼鱼；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-catfish/06-observation.webp",
        "title": "近底水域的食物环境",
        "alt": "黄颡鱼：近底水域的食物环境，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。近底水域的食物环境；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
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
      "url": "https://www.gbif.org/species/6168091",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FishBase：形态、分布、雄鱼护卵与全球 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Tachysurus-fulvidraco.html",
      "kind": "conservation",
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
