import type { Species } from '../../types/species.ts';

const profile = {
  "id": "blue-tailed-giant-larvacean",
  "slug": "blue-tailed-giant-larvacean",
  "names": {
    "zh": "巨型尾海鞘",
    "en": "Blue-tailed Giant Larvacean"
  },
  "scientificName": "Bathochordaeus mcnutti",
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
      "scientificName": "Appendicularia",
      "zhName": "尾海鞘纲"
    },
    "order": {
      "scientificName": "Copelata",
      "zhName": "有尾目"
    },
    "family": {
      "scientificName": "Oikopleuridae",
      "zhName": "住囊虫科"
    },
    "genus": {
      "scientificName": "Bathochordaeus",
      "zhName": "巨型尾海鞘属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "NE",
    "label": {
      "zh": "未评估",
      "en": "Not Evaluated"
    },
    "trend": "unknown",
    "assessor": '尚未确认可引用的 IUCN 全球评估；“未评估”表示资料缺口，不能据此判断种群安全。地方记录或 NatureServe 等级不能代替 IUCN 全球等级。'
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "东北太平洋蒙特雷湾"
    ],
    "countries": [],
    "range": '原始描述来自美国加利福尼亚蒙特雷湾中层水域。当地研究录像中多数个体出现在约 90 至 120 米深处，这并非全球分布的深度上下限。'
  },
  "habitats": [
    {
      "name": "海洋中层水域",
      "realm": "marine",
      "description": '它在中层海水中浮游，摆动长尾驱动滤食房内的水流。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "filter-feeder"
    ],
    "foods": [
      "悬浮有机颗粒",
      "浮游微小生物"
    ],
    "description": '海水穿过外层与内层滤网，悬浮小颗粒被收集起来成为食物。滤网堵塞后，动物会舍弃旧房子。'
  },
  "tags": [
    "巨型尾海鞘",
    "海洋中层水域"
  ],
  "summary": '巨型尾海鞘摆动蓝边长尾，让海水穿过自己分泌的黏液滤食房，收集悬浮小颗粒。',
  "description": '它的小躯干透明，连接宽而扁的长尾。成体仍保留尾部和脊索，没有脊柱，终生在海水中浮游。滤食房比身体大，堵塞后会被舍弃。',
  "storySections": [
    {
      key: 'appearance',
      label: '身体外观',
      title: '透明躯干与蓝边长尾',
      body: '小而透明的躯干连接宽而扁的长尾，尾缘有蓝色线条。成体保留尾部及脊索，没有脊柱。大房子由分泌的黏液构成，属于滤食结构，并非身体本身。',
    },
    {
      key: 'habitat',
      label: '栖息环境',
      title: '蒙特雷湾的中层水域',
      body: '原始描述来自美国加利福尼亚蒙特雷湾。当地录像中多数个体在约 90 至 120 米深处，这个集中深度不能代表全球分布的边界。',
    },
    {
      key: 'feeding',
      label: '取食',
      title: '会被舍弃的滤食房',
      body: '它摆动尾部，让海水穿过外层与内层滤网。两层承担不同的过滤作用，悬浮小颗粒被收集起来。房子堵塞后被舍弃，带着颗粒下沉。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '成年后仍有长尾',
      body: '巨型尾海鞘终生浮游，成体仍有长尾。原始描述记录了带有卵和精巢的成熟个体，带尾的外形也会出现在成年阶段。',
    },
    {
      key: 'taxonomy',
      label: '分类归属',
      title: '被囊动物中的尾海鞘',
      body: '巨型尾海鞘的学名为 Bathochordaeus mcnutti，属于尾海鞘纲、有尾目和住囊虫科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '全球保护资料仍待补充',
      body: '尚未确认可引用的 IUCN 全球评估。保护等级中的“未评估”表示资料缺口，不能据此判断种群数量或安全程度。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '蓝色尾缘帮助研究者认出新种',
      body: 'Sherlock、Walz、Schlining 和 Robison 正式描述了 Bathochordaeus mcnutti，论文于 2016 年上线、列入 2017 年期刊卷期。研究者结合遥控潜水器的长期录像、采集标本和遗传资料，把它与近似种区分开；鲜明的蓝色尾缘是可观察的差别之一。种名 mcnutti 纪念发现时担任 MBARI 主席兼首席执行官的 Marcia McNutt。',
    },
  ],
  "keyFacts": [
    '透明的小躯干连接蓝边长尾。',
    '成体保留尾部与脊索，没有脊柱。',
    '终生在海水中浮游。',
    '黏液房子过滤悬浮小颗粒。',
    '滤网堵塞后会舍弃房子。',
  ],
  "threats": [
    "海洋颗粒污染及其食物网传递需要监测"
  ],
  "conservationActions": [
    "减少塑料进入海洋",
    "通过无干扰水下观测研究浮游动物"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "共读观察",
      "value": '透明躯干、蓝边长尾与身体外的黏液滤食房。'
    }
  ],
  "media": {
    "image": "./images/species/blue-tailed-giant-larvacean/01-cover.webp",
    "alt": "巨型尾海鞘及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/blue-tailed-giant-larvacean/02-observation.webp",
        "title": "房子外的身体",
        "alt": '房子外的身体，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。完整躯干与蓝边长尾；身体及尾的比例非实测。图像尺度未经实测，不能用于物种鉴定或判断连续动作。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-tailed-giant-larvacean/03-observation.webp",
        "title": "透明躯干与尾基",
        "alt": '透明躯干与尾基，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。放大重建；内部结构不能代替解剖依据。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-tailed-giant-larvacean/04-observation.webp",
        "title": "黏液滤食房",
        "alt": '黏液滤食房，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。个体与周围黏液房分别观察；滤网形态为近似重建。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-tailed-giant-larvacean/05-observation.webp",
        "title": "身体与旧房子",
        "alt": '身体与旧房子，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。舍弃滤食房的情景重建；静图不能证明动作先后。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blue-tailed-giant-larvacean/06-observation.webp",
        "title": "海水中的长尾",
        "alt": '海水中的长尾，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。斜侧面身体外观；蓝色尾缘不表示尾部会发光。",
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
      "title": "GBIF：接受名称与分类链",
      "url": "https://www.gbif.org/species/9603764",
      "kind": "taxonomy",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "原始物种描述：形态、生态与成熟个体",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5159439/",
      "kind": "taxonomy",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "MBARI：新发现动物与尾海鞘",
      "url": "https://annualreport.mbari.org/2018",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "研究：滤食与碳输送",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5415331/",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-11",
  "updatedAt": "2026-10-11"
} as const satisfies Species;

export default profile;
