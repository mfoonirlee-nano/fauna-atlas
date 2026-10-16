import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-carp",
  "slug": "common-carp",
  "names": {
    "zh": "鲤",
    "en": "Common Carp"
  },
  "scientificName": "Cyprinus carpio",
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
      "scientificName": "Cypriniformes",
      "zhName": "鲤形目"
    },
    "family": {
      "scientificName": "Cyprinidae",
      "zhName": "鲤科"
    },
    "genus": {
      "scientificName": "Cyprinus",
      "zhName": "鲤属"
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
    "assessedYear": 2022,
    "assessor": "采用 FishBase 所列全球 IUCN 等级与评估日期；未独立确认全球趋势，保留 unknown。养殖数量不用于推断野生种群状态。"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "亚洲",
      "欧洲"
    ],
    "regions": [
      "欧亚大陆原生水系及各地养殖水域"
    ],
    "countries": [],
    "range": "按本档案采用的较窄物种范围，原生区域包括黑海、里海和咸海流域；现已在多地引入和养殖。市场里的“鲤鱼”可能涉及不同种、品系或杂交来源，不能据商品名推定其原生分布。",
    "center": {
      "lat": 47.5,
      "lng": 19.1
    }
  },
  "habitats": [
    {
      "name": "湖泊、池塘与缓流河段",
      "realm": "freshwater",
      "description": "它常在缓流水域和池塘底部附近活动，也会游到其他水层。观察时找一找尾鳍、胸鳍和背鳍的位置，再看它们怎样随鱼转向；静图只呈现某一瞬间。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "水生昆虫幼虫",
      "底栖无脊椎动物",
      "植物材料"
    ],
    "description": "它会在底部寻找昆虫幼虫、蠕虫和软体动物，也吃植物材料，属于杂食鱼。嘴边的须是感觉结构，不能把须当成牙齿。"
  },
  "tags": [
    "鲤",
    "淡水鱼",
    "湖泊、池塘与缓流河段"
  ],
  "summary": "鲤的厚嘴唇旁有两对须，常在水底附近寻找食物，黏性的卵会附着在水草上。",
  "description": "鲤的身体侧扁，鳞片大，背鳍的基部长。厚嘴唇旁有两对须，一对较短，一对较长。普通体色从褐绿到铜金色都有；颜色和鳞片分布也会随养殖品系变化。它常在缓流水域和池塘底部附近活动，也会游到其他水层。观察时找一找尾鳍、胸鳍和背鳍的位置，再看它们怎样随鱼转向；静图只呈现某一瞬间。它会在底部寻找昆虫幼虫、蠕虫和软体动物，也吃植物材料，属于杂食鱼。嘴边的须是感觉结构，不能把须当成牙齿。它在浅水植物附近产卵，卵遇水后具有黏性，可附着在水草等基物上。幼鱼孵出后逐渐开始游泳和自行取食。图库的卵和幼鱼分别重建，不是同一窝鱼的连续照片。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从嘴、鳞片和鳍开始",
      "body": "鲤的身体侧扁，鳞片大，背鳍的基部长。厚嘴唇旁有两对须，一对较短，一对较长。普通体色从褐绿到铜金色都有；颜色和鳞片分布也会随养殖品系变化。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在水里怎样活动",
      "body": "它常在缓流水域和池塘底部附近活动，也会游到其他水层。观察时找一找尾鳍、胸鳍和背鳍的位置，再看它们怎样随鱼转向；静图只呈现某一瞬间。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "水里的食物",
      "body": "它会在底部寻找昆虫幼虫、蠕虫和软体动物，也吃植物材料，属于杂食鱼。嘴边的须是感觉结构，不能把须当成牙齿。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "卵和幼鱼的生活",
      "body": "它在浅水植物附近产卵，卵遇水后具有黏性，可附着在水草等基物上。幼鱼孵出后逐渐开始游泳和自行取食。图库的卵和幼鱼分别重建，不是同一窝鱼的连续照片。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案限定 Cyprinus carpio。锦鲤常涉及另一个接受种 Cyprinus rubrofuscus；不同资料对东亚鲤的历史处理不同，不能把所有中国本土鲤和锦鲤都合并到这里。已有金鱼属于鲫属，也不是本种的幼鱼。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：鲤的嘴边能找到须吗？它的背鳍和草鱼的背鳍有什么不同？观察任务：隔着水族箱玻璃观察一条鱼的转向，记录哪几片鳍在动，不敲玻璃、不投食。养殖常见不代表野外种群没有压力。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "鲤的名称与记录",
      "body": "Linnaeus 在 1758 年发表本种名称，现用学名为 Cyprinus carpio。命名年份记录的是学术名称的发表时间，不是人们第一次见到这种鱼的时间。中文通名和商品名有时指向不同范围，观察与研究应同时核对学名。"
    }
  ],
  "keyFacts": [
    "鲤的身体侧扁，鳞片大，背鳍的基部长。厚嘴唇旁有两对须，一对较短，一对较长。普通体色从褐绿到铜金色都有；颜色和鳞片分布也会随养殖品系变化。",
    "它会在底部寻找昆虫幼虫、蠕虫和软体动物，也吃植物材料，属于杂食鱼。嘴边的须是感觉结构，不能把须当成牙齿。",
    "它在浅水植物附近产卵，卵遇水后具有黏性，可附着在水草等基物上。幼鱼孵出后逐渐开始游泳和自行取食。图库的卵和幼鱼分别重建，不是同一窝鱼的连续照片。"
  ],
  "threats": [
    "水域污染",
    "河流与繁殖环境改变"
  ],
  "conservationActions": [
    "保护水域与繁殖环境；不把养殖或观赏鱼自行放入野外水域。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "湖泊、池塘与缓流河段"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "水底上方的侧影"
    }
  ],
  "media": {
    "image": "./images/species/common-carp/01-cover.webp",
    "alt": "鲤及其淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-carp/02-observation.webp",
        "title": "水底上方的侧影",
        "alt": "鲤：水底上方的侧影，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-carp/03-observation.webp",
        "title": "嘴边的须",
        "alt": "鲤：嘴边的须，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-carp/04-observation.webp",
        "title": "底部觅食情景",
        "alt": "鲤：底部觅食情景，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-carp/05-observation.webp",
        "title": "水草间的幼鱼",
        "alt": "鲤：水草间的幼鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼鱼阶段单独重建，不表示与其他图片是同一条鱼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-carp/06-observation.webp",
        "title": "附着在水草上的卵",
        "alt": "鲤：附着在水草上的卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。卵的放大情景，不按实测比例，不作物种鉴定或胚胎发育阶段的证据。",
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
      "url": "https://www.gbif.org/species/4286975",
      "kind": "taxonomy",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "FAO：形态、食物与繁殖",
      "url": "https://www.fao.org/fishery/docs/CDrom/aquaculture/I1129m/file/en/en_commoncarp.htm",
      "kind": "ecology",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "FishBase：物种对照与全球 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Cyprinus-carpio.html",
      "kind": "conservation",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "ADW：图册沿用的辐鳍鱼纲与鲤形目归属",
      "url": "https://animaldiversity.org/accounts/Cyprinus_carpio/classification/",
      "kind": "taxonomy",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "物种范围与研究对照",
      "url": "https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=3294",
      "kind": "taxonomy",
      "accessedAt": "2026-10-16"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-16",
  "updatedAt": "2026-10-16"
} as const satisfies Species;

export default profile;
