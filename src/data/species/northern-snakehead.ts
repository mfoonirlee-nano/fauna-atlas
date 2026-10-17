import type { Species } from '../../types/species.ts';

const profile = {
  "id": "northern-snakehead",
  "slug": "northern-snakehead",
  "names": {
    "zh": "乌鳢",
    "en": "Northern Snakehead",
    "aliases": [
      "黑鱼"
    ]
  },
  "scientificName": "Channa argus",
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
      "scientificName": "Channidae",
      "zhName": "鳢科"
    },
    "genus": {
      "scientificName": "Channa",
      "zhName": "鳢属"
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
      "亚洲"
    ],
    "regions": [
      "东亚原生水域及引入地区"
    ],
    "countries": [],
    "range": "原生于东亚，包括中国、朝鲜半岛和俄罗斯部分水域，海外另有引入种群。具体分布随资料范围而异；这里区分原生生活环境和引入地生态影响，代表坐标不表示完整分布。",
    "center": {
      "lat": 31.1,
      "lng": 118.6
    }
  },
  "habitats": [
    {
      "name": "水草丰富的池塘、河湖缓流",
      "realm": "freshwater",
      "description": "乌鳢能用鳃上方的辅助呼吸结构利用空气，需要到水面换气。它常在水草间隐蔽，等待猎物靠近。能呼吸空气不表示可以任意离水，把鱼放在干地上观察会伤害它。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "piscivore"
    ],
    "foods": [
      "鱼类",
      "其他小型水生动物"
    ],
    "description": "成鱼主要吃鱼，也会利用水域中的其他动物性食物，幼鱼的食谱与成鱼有差别。乌鳢常采用伏击方式捕食；静止图只能说明身体藏在植物间，不能证明一次完整的捕食过程。"
  },
  "tags": [
    "乌鳢",
    "淡水鱼",
    "水草丰富的池塘、河湖缓流"
  ],
  "summary": "乌鳢有长背鳍和斑驳体侧，能到水面呼吸空气，常藏在水草间等待猎物。",
  "description": "乌鳢身体较长，头部宽扁而有鳞，体侧有不规则深色斑块。背鳍和臀鳍都很长，尾鳍较圆，嘴边没有鲶鱼那样的须。斑块会随个体和光照变化，不能把黑色的鱼都叫作乌鳢。乌鳢能用鳃上方的辅助呼吸结构利用空气，需要到水面换气。它常在水草间隐蔽，等待猎物靠近。能呼吸空气不表示可以任意离水，把鱼放在干地上观察会伤害它。成鱼主要吃鱼，也会利用水域中的其他动物性食物，幼鱼的食谱与成鱼有差别。乌鳢常采用伏击方式捕食；静止图只能说明身体藏在植物间，不能证明一次完整的捕食过程。乌鳢在水草较多的浅水环境繁殖，亲鱼会守护卵和幼鱼。幼鱼有时成群活动，但鱼群的外观不能代替对亲鱼守护行为的连续观察。幼鱼的外形和食物会随成长变化，图中的鱼群不能用来推定实际年龄。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体和外形开始",
      "body": "乌鳢身体较长，头部宽扁而有鳞，体侧有不规则深色斑块。背鳍和臀鳍都很长，尾鳍较圆，嘴边没有鲶鱼那样的须。斑块会随个体和光照变化，不能把黑色的鱼都叫作乌鳢。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "水边的生活",
      "body": "乌鳢能用鳃上方的辅助呼吸结构利用空气，需要到水面换气。它常在水草间隐蔽，等待猎物靠近。能呼吸空气不表示可以任意离水，把鱼放在干地上观察会伤害它。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它怎样取得食物",
      "body": "成鱼主要吃鱼，也会利用水域中的其他动物性食物，幼鱼的食谱与成鱼有差别。乌鳢常采用伏击方式捕食；静止图只能说明身体藏在植物间，不能证明一次完整的捕食过程。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "成长与育幼",
      "body": "乌鳢在水草较多的浅水环境繁殖，亲鱼会守护卵和幼鱼。幼鱼有时成群活动，但鱼群的外观不能代替对亲鱼守护行为的连续观察。幼鱼的外形和食物会随成长变化，图中的鱼群不能用来推定实际年龄。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案指 Channa argus，与斑鳢、月鳢和其他鳢属鱼分开。图册沿用 GBIF 的鲈形目口径，FishBase 等资料采用攀鲈目 Anabantiformes；跨资料比较时需注意目级处理差异。海外引入地的影响也不代表原生地的保护等级。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：乌鳢与黄鳝都能利用空气，它们的鳍有什么不同？观察任务：看自然影像中鱼接近水面的过程，不把鱼捞出水试验呼吸能力。保护原生水域，不把购买或饲养的鱼放入野外。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "乌鳢的名称与记录",
      "body": "Cantor 于 1842 年发表本种名称，现用学名为 Channa argus。英文 Northern Snakehead 描述它的蛇形头部，但它仍是鱼类。学名帮助区分原生与引入水域中研究的对象，发表年代不等于引入年代。"
    }
  ],
  "keyFacts": [
    "乌鳢身体较长，头部宽扁而有鳞，体侧有不规则深色斑块。背鳍和臀鳍都很长，尾鳍较圆，嘴边没有鲶鱼那样的须。斑块会随个体和光照变化，不能把黑色的鱼都叫作乌鳢。",
    "成鱼主要吃鱼，也会利用水域中的其他动物性食物，幼鱼的食谱与成鱼有差别。乌鳢常采用伏击方式捕食；静止图只能说明身体藏在植物间，不能证明一次完整的捕食过程。",
    "乌鳢在水草较多的浅水环境繁殖，亲鱼会守护卵和幼鱼。幼鱼有时成群活动，但鱼群的外观不能代替对亲鱼守护行为的连续观察。幼鱼的外形和食物会随成长变化，图中的鱼群不能用来推定实际年龄。"
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
      "value": "水草丰富的池塘、河湖缓流"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "长背鳍与水面换气"
    }
  ],
  "media": {
    "image": "./images/species/northern-snakehead/01-cover.webp",
    "alt": "乌鳢与淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/northern-snakehead/02-observation.webp",
        "title": "长背鳍与深色斑块",
        "alt": "乌鳢：长背鳍与深色斑块，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。长背鳍与深色斑块；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/northern-snakehead/03-observation.webp",
        "title": "接近水面的头部",
        "alt": "乌鳢：接近水面的头部，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。接近水面的头部；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/northern-snakehead/04-observation.webp",
        "title": "水草中的隐蔽位置",
        "alt": "乌鳢：水草中的隐蔽位置，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水草中的隐蔽位置；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/northern-snakehead/05-observation.webp",
        "title": "浅水区的幼鱼群",
        "alt": "乌鳢：浅水区的幼鱼群，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。浅水区的幼鱼群；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/northern-snakehead/06-observation.webp",
        "title": "芦苇根系附近的成鱼",
        "alt": "乌鳢：芦苇根系附近的成鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。芦苇根系附近的成鱼；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
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
      "url": "https://www.gbif.org/species/4284921",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FishBase：形态、分布、食性与全球 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Channa-argus.html",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "USGS：空气呼吸、护幼与原生和引入范围",
      "url": "https://nas.er.usgs.gov/queries/factsheet.aspx?lv=true&speciesid=2265",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2018 原始研究：空气呼吸结构与生理调节",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5861356/",
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
