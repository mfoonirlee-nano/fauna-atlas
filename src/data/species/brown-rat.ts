import type { Species } from '../../types/species.ts';

const profile = {
  "id": "brown-rat",
  "slug": "brown-rat",
  "names": {
    "zh": "褐家鼠",
    "en": "Brown Rat",
    "aliases": [
      "沟鼠"
    ]
  },
  "scientificName": "Rattus norvegicus",
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
      "scientificName": "Rattus",
      "zhName": "家鼠属"
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
    "assessor": "IUCN 2016 年全球评估为 LC，等级与 IUCN 发布于 GBIF 的名录相符。",
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
    "range": "褐家鼠原生于亚洲部分地区，随人类贸易和运输扩散到世界多地。城市、乡间与河岸都有适宜环境；地图点表示一处代表地区，不代表原产地边界。",
    "center": {
      "lat": 40,
      "lng": 116
    }
  },
  "habitats": [
    {
      "name": "建筑周边与河岸",
      "realm": "terrestrial",
      "description": "褐家鼠原生于亚洲部分地区，随人类贸易和运输扩散到世界多地。城市、乡间与河岸都有适宜环境；地图点表示一处代表地区，不代表原产地边界。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "谷物",
      "果实",
      "昆虫",
      "其他动物性食物"
    ],
    "description": "褐家鼠属于杂食动物，吃谷物、果实和多种动物性食物。可获得的食物会随环境改变，不能把某一地点的食谱当作全部种群的固定菜单。"
  },
  "tags": [
    "褐家鼠",
    "建筑周边与河岸"
  ],
  "summary": "褐家鼠身体粗壮，常靠嗅觉和触须探索环境。它能挖洞，也能游泳，食物来源随栖息地变化。",
  "description": "褐家鼠体形较粗壮，吻部比小家鼠显得钝，耳朵相对较小。尾巴有环状鳞纹，通常短于头和身体合计的长度。尾长是辅助特征，幼鼠和相似种仍需结合多个特征判断。褐家鼠采用 Rattus norvegicus，归入鼠科、家鼠属。它与小鼠属的小家鼠不同，也与黑家鼠分别成种。饲养褐家鼠有多种毛色，不应只按灰褐色来判断种类。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "褐家鼠体形较粗壮，吻部比小家鼠显得钝，耳朵相对较小。尾巴有环状鳞纹，通常短于头和身体合计的长度。尾长是辅助特征，幼鼠和相似种仍需结合多个特征判断。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "褐家鼠常在夜间活动，会在地面挖洞，也能游泳。它使用嗅觉寻找食物，触须和足部帮助感知周围物体；河岸、建筑缝隙与地下空间都可能提供遮蔽。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物怎样进入身体",
      "body": "褐家鼠属于杂食动物，吃谷物、果实和多种动物性食物。可获得的食物会随环境改变，不能把某一地点的食谱当作全部种群的固定菜单。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼体与成体",
      "body": "母鼠在隐蔽处的巢里产仔并哺乳。新生幼鼠尚未睁眼、体毛未长齐，随后长毛并开始离巢活动；图中长毛的小鼠不是新生个体。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "褐家鼠采用 Rattus norvegicus，归入鼠科、家鼠属。它与小鼠属的小家鼠不同，也与黑家鼠分别成种。饲养褐家鼠有多种毛色，不应只按灰褐色来判断种类。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：与小家鼠相比，耳朵和吻部有什么不同？观察任务：用影像比较两种鼠的体形与尾长。野鼠、鼠洞和排泄物交由成人处理，孩子不接触或投食。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Rattus norvegicus 的名称记录",
      "body": "GBIF 记录的命名人为 Berkenhout，年份为 1769，现用组合为 Rattus norvegicus。英语俗名 Norway rat 不足以证明它起源于挪威；本档案将科学命名信息与随人类扩散的分布历史分别说明。"
    }
  ],
  "keyFacts": [
    "褐家鼠体形较粗壮，吻部比小家鼠显得钝，耳朵相对较小。尾巴有环状鳞纹，通常短于头和身体合计的长度。尾长是辅助特征，幼鼠和相似种仍需结合多个特征判断。",
    "褐家鼠属于杂食动物，吃谷物、果实和多种动物性食物。可获得的食物会随环境改变，不能把某一地点的食谱当作全部种群的固定菜单。",
    "母鼠在隐蔽处的巢里产仔并哺乳。新生幼鼠尚未睁眼、体毛未长齐，随后长毛并开始离巢活动；图中长毛的小鼠不是新生个体。"
  ],
  "threats": [
    "引入种群对部分岛屿本地动物的压力"
  ],
  "conservationActions": [
    "成人管理食物、垃圾与建筑入口；不向野外释放饲养鼠。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "建筑周边与河岸"
    },
    {
      "key": "diet",
      "label": "主要食物",
      "value": "谷物、果实"
    }
  ],
  "media": {
    "image": "./images/species/brown-rat/01-cover.webp",
    "alt": "褐家鼠及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/brown-rat/02-observation.webp",
        "title": "小耳与触须",
        "alt": "褐家鼠：小耳与触须，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。耳朵相对较小，吻部较钝，触须参与感知环境。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/brown-rat/03-observation.webp",
        "title": "捧食的前足",
        "alt": "褐家鼠：捧食的前足，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。食物种类随环境改变，图中的谷物不是完整食谱。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/brown-rat/04-observation.webp",
        "title": "河岸洞口",
        "alt": "褐家鼠：河岸洞口，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。褐家鼠会挖洞，观察者不靠近或翻挖洞穴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/brown-rat/05-observation.webp",
        "title": "潮湿地面上的活动",
        "alt": "褐家鼠：潮湿地面上的活动，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。河岸场景展示可能的生活环境；此近景未展示完整尾巴，不能用来比较尾长。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/brown-rat/06-observation.webp",
        "title": "长毛后的幼鼠",
        "alt": "褐家鼠：长毛后的幼鼠，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼体大小不能单独用于与成年小家鼠区分。",
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
      "url": "https://www.gbif.org/species/2439261",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "ADW：褐家鼠生活史",
      "url": "https://animaldiversity.org/accounts/Rattus_norvegicus/",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "加州大学 IPM：家鼠辨认与生活环境",
      "url": "https://ipm.ucanr.edu/home-and-landscape/rats/",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球保护名录",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/176677210",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN：全球评估与日期",
      "url": "https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T19353A165118026.en",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
