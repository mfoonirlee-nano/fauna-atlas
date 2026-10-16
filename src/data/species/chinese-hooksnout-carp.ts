import type { Species } from '../../types/species.ts';

const profile = {
  "id": "chinese-hooksnout-carp",
  "slug": "chinese-hooksnout-carp",
  "names": {
    "zh": "马口鱼",
    "en": "Chinese Hooksnout Carp"
  },
  "scientificName": "Opsariichthys bidens",
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
      "scientificName": "Opsariichthys",
      "zhName": "马口鱼属"
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
    "assessor": "采用 FishBase 所列全球 IUCN 等级与评估日期；未独立确认全球趋势，保留 unknown。养殖数量不用于推断野生种群状态。"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "中国及东亚部分溪流水系"
    ],
    "countries": [],
    "range": "本档案指中国及东亚部分溪流水系中的 Opsariichthys bidens。清弋江研究记录了安徽黄山地区种群；旧资料可能覆盖后来拆分的近缘种，不能将历史上的所有“马口鱼”地点直接拼成本种分布。",
    "center": {
      "lat": 29.7,
      "lng": 118.1
    }
  },
  "habitats": [
    {
      "name": "流水溪流与砾石河段",
      "realm": "freshwater",
      "description": "它常在有水流、沙砾底质的溪流中活动。观察时在岸上看它相对石头的位置和游动方向；不把一张静图解释成持续逆流的证明，也不翻石捕捉。",
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
      "小型甲壳动物",
      "小鱼"
    ],
    "description": "小个体会取食浮游动物、水生昆虫和虾等，较大个体也能捕食小鱼。清弋江研究说明食性可随体型改变，不能把一个地区的体长分界当作全国固定规律。"
  },
  "tags": [
    "马口鱼",
    "淡水鱼",
    "流水溪流与砾石河段"
  ],
  "summary": "马口鱼生活在溪流中，嘴大而斜，成雄鱼和雌鱼的体色可有明显差异。",
  "description": "马口鱼身体较细长，嘴大而斜，上下颌的形状是观察重点。成雄鱼可出现暗色横带和繁殖色，雌鱼通常较素；幼鱼不能简单画成缩小的艳色雄鱼。它常在有水流、沙砾底质的溪流中活动。观察时在岸上看它相对石头的位置和游动方向；不把一张静图解释成持续逆流的证明，也不翻石捕捉。小个体会取食浮游动物、水生昆虫和虾等，较大个体也能捕食小鱼。清弋江研究说明食性可随体型改变，不能把一个地区的体长分界当作全国固定规律。清弋江研究记录了本地的繁殖季节和成长情况；本种会在浅水沙砾环境中产卵。不同水系的水温、水位和干扰不同，本档案不据单一地点给所有种群规定孵化天数或寿命。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从嘴、鳞片和鳍开始",
      "body": "马口鱼身体较细长，嘴大而斜，上下颌的形状是观察重点。成雄鱼可出现暗色横带和繁殖色，雌鱼通常较素；幼鱼不能简单画成缩小的艳色雄鱼。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在水里怎样活动",
      "body": "它常在有水流、沙砾底质的溪流中活动。观察时在岸上看它相对石头的位置和游动方向；不把一张静图解释成持续逆流的证明，也不翻石捕捉。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "水里的食物",
      "body": "小个体会取食浮游动物、水生昆虫和虾等，较大个体也能捕食小鱼。清弋江研究说明食性可随体型改变，不能把一个地区的体长分界当作全国固定规律。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "卵和幼鱼的生活",
      "body": "清弋江研究记录了本地的繁殖季节和成长情况；本种会在浅水沙砾环境中产卵。不同水系的水温、水位和干扰不同，本档案不据单一地点给所有种群规定孵化天数或寿命。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "采用项目 GBIF 基线的鲤科、马口鱼属；FishBase 和近期分类论文把它放在 Xenocyprididae。这里记录差异，不将两个科名混作同一分类单元，也不将近缘种 O. iridescens 的照片或范围合并。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：雄鱼与雌鱼的体色一样吗？它的大嘴和鲤的嘴有什么不同？观察任务：比较标明雌雄的重建图，记录条带和嘴形；在溪边只从岸上观察。养殖常见不代表野外种群没有压力。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "马口鱼的名称与记录",
      "body": "Günther 在 1873 年发表本种名称，现用学名为 Opsariichthys bidens。命名年份记录的是学术名称的发表时间，不是人们第一次见到这种鱼的时间。中文通名和商品名有时指向不同范围，观察与研究应同时核对学名。"
    }
  ],
  "keyFacts": [
    "马口鱼身体较细长，嘴大而斜，上下颌的形状是观察重点。成雄鱼可出现暗色横带和繁殖色，雌鱼通常较素；幼鱼不能简单画成缩小的艳色雄鱼。",
    "小个体会取食浮游动物、水生昆虫和虾等，较大个体也能捕食小鱼。清弋江研究说明食性可随体型改变，不能把一个地区的体长分界当作全国固定规律。",
    "清弋江研究记录了本地的繁殖季节和成长情况；本种会在浅水沙砾环境中产卵。不同水系的水温、水位和干扰不同，本档案不据单一地点给所有种群规定孵化天数或寿命。"
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
      "value": "流水溪流与砾石河段"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "体色较素的雌鱼"
    }
  ],
  "media": {
    "image": "./images/species/chinese-hooksnout-carp/01-cover.webp",
    "alt": "马口鱼及其淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/chinese-hooksnout-carp/02-observation.webp",
        "title": "体色较素的雌鱼",
        "alt": "马口鱼：体色较素的雌鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-hooksnout-carp/03-observation.webp",
        "title": "大嘴与颌部",
        "alt": "马口鱼：大嘴与颌部，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-hooksnout-carp/04-observation.webp",
        "title": "溪流中的食物",
        "alt": "马口鱼：溪流中的食物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-hooksnout-carp/05-observation.webp",
        "title": "浅水中的幼鱼",
        "alt": "马口鱼：浅水中的幼鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼鱼阶段单独重建，不表示与其他图片是同一条鱼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-hooksnout-carp/06-observation.webp",
        "title": "雌雄外形对照",
        "alt": "马口鱼：雌雄外形对照，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示外形或生活环境，静止图片不证明动作过程；生成细节不用于精确鉴定。",
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
      "url": "https://www.gbif.org/species/2365479",
      "kind": "taxonomy",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "原始生活史研究",
      "url": "https://zoolstud.sinica.edu.tw/Journals/51.4/476.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-16"
    },
    {
      "title": "FishBase：物种对照与全球 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Opsariichthys-bidens.html",
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
      "url": "https://fishdb.sinica.edu.tw/eng/specimendetail.php?id=NTOUP200802-192",
      "kind": "general",
      "accessedAt": "2026-10-16"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-16",
  "updatedAt": "2026-10-16"
} as const satisfies Species;

export default profile;
