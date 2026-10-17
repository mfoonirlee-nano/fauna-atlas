import type { Species } from '../../types/species.ts';

const profile = {
  "id": "djungarian-hamster",
  "slug": "djungarian-hamster",
  "names": {
    "zh": "加卡利亚仓鼠",
    "en": "Djungarian Hamster",
    "aliases": [
      "准噶尔仓鼠",
      "冬白仓鼠",
      "三线仓鼠",
      "Phodopus sungorus",
      "Cricetiscus sungorus"
    ]
  },
  "scientificName": "Phodopus sungorus",
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
      "scientificName": "Cricetidae",
      "zhName": "仓鼠科"
    },
    "genus": {
      "scientificName": "Phodopus",
      "zhName": "毛足鼠属"
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
    "assessor": "IUCN 2016 年评估为 LC；2017 年勘误不是新的评估。种群趋势未知。",
    "assessedYear": 2016
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "中亚与西伯利亚南部"
    ],
    "countries": [],
    "range": "野生种群分布于中亚和西伯利亚南部的草原等地区。家庭饲养记录不能当成当地野生分布；地图点表示草原地区的代表位置。",
    "center": {
      "lat": 50,
      "lng": 75
    }
  },
  "habitats": [
    {
      "name": "草原与洞穴",
      "realm": "terrestrial",
      "description": "野生种群分布于中亚和西伯利亚南部的草原等地区。家庭饲养记录不能当成当地野生分布；地图点表示草原地区的代表位置。",
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
      "植物绿色部分",
      "小型昆虫"
    ],
    "description": "它吃种子和其他植物材料，也会取食小型昆虫。食物进入颊囊后还能运往储藏处，颊囊并不是胃；脸颊变鼓不能用来判断它已经吃饱。"
  },
  "tags": [
    "加卡利亚仓鼠",
    "草原与洞穴"
  ],
  "summary": "加卡利亚仓鼠尾巴很短，背上常有一条深色线。它用颊囊搬运食物，有些个体会随日照变化换上较白的冬毛。",
  "description": "加卡利亚仓鼠身体圆短、耳朵小，夏毛多呈灰褐色，背部中央有深色纵纹，腹面偏白。短尾容易藏在毛里，脚部也有毛；毛色和外形不能单独证明宠物个体的物种或血统。图册沿用 GBIF 的 Phodopus sungorus 与毛足鼠属口径。Mammal Diversity Database 当前采用 Cricetiscus sungorus；两者指向这里介绍的仓鼠，并非两个新选题。它与坎贝尔仓鼠以及金仓鼠分属不同物种。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "加卡利亚仓鼠身体圆短、耳朵小，夏毛多呈灰褐色，背部中央有深色纵纹，腹面偏白。短尾容易藏在毛里，脚部也有毛；毛色和外形不能单独证明宠物个体的物种或血统。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "野生加卡利亚仓鼠在草原等环境中挖洞，常在夜间活动。颊囊位于口腔两侧，可暂存并搬运食物。观察饲养个体时，等它自行醒来再看，不为展示颊囊挤压脸部。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物怎样进入身体",
      "body": "它吃种子和其他植物材料，也会取食小型昆虫。食物进入颊囊后还能运往储藏处，颊囊并不是胃；脸颊变鼓不能用来判断它已经吃饱。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼体与成体",
      "body": "幼鼠出生时尚未具备独立生活能力，依靠母乳和巢内照料，之后长毛、睁眼并开始取食。部分成体在日照缩短时换上较白的冬毛，反应会因个体和光照经历而异，不能保证家养仓鼠到冬天都会变白。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "图册沿用 GBIF 的 Phodopus sungorus 与毛足鼠属口径。Mammal Diversity Database 当前采用 Cricetiscus sungorus；两者指向这里介绍的仓鼠，并非两个新选题。它与坎贝尔仓鼠以及金仓鼠分属不同物种。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：尾巴和小家鼠相比有什么不同？观察任务：在它自行活动时看背部纵纹和取食动作，再对照冬毛示意图；不用改变温度、食物或灯光来诱导变色。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Phodopus sungorus 的名称记录",
      "body": "Pallas 在 1773 年命名这一物种。GBIF 保留 Phodopus sungorus 组合，Mammal Diversity Database 则采用 Cricetiscus sungorus；属名变化反映分类处理变化，不表示动物在改名时才出现。宠物贸易中的“三线”也不能替代物种核验。"
    }
  ],
  "keyFacts": [
    "加卡利亚仓鼠身体圆短、耳朵小，夏毛多呈灰褐色，背部中央有深色纵纹，腹面偏白。短尾容易藏在毛里，脚部也有毛；毛色和外形不能单独证明宠物个体的物种或血统。",
    "它吃种子和其他植物材料，也会取食小型昆虫。食物进入颊囊后还能运往储藏处，颊囊并不是胃；脸颊变鼓不能用来判断它已经吃饱。",
    "幼鼠出生时尚未具备独立生活能力，依靠母乳和巢内照料，之后长毛、睁眼并开始取食。部分成体在日照缩短时换上较白的冬毛，反应会因个体和光照经历而异，不能保证家养仓鼠到冬天都会变白。"
  ],
  "threats": [
    "局部栖息地改变"
  ],
  "conservationActions": [
    "区分野生种群与宠物饲养记录，不把饲养个体放归野外。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "草原与洞穴"
    },
    {
      "key": "diet",
      "label": "主要食物",
      "value": "种子、植物绿色部分"
    }
  ],
  "media": {
    "image": "./images/species/djungarian-hamster/01-cover.webp",
    "alt": "加卡利亚仓鼠及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/djungarian-hamster/02-observation.webp",
        "title": "背上的深色线",
        "alt": "加卡利亚仓鼠：背上的深色线，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。背部中央的深色纵纹是观察点，不能单凭条纹鉴定宠物血统。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/djungarian-hamster/03-observation.webp",
        "title": "前足与食物",
        "alt": "加卡利亚仓鼠：前足与食物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。颊囊帮助搬运食物，静图不展示储藏食物的整个过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/djungarian-hamster/04-observation.webp",
        "title": "洞口的夜间活动",
        "alt": "加卡利亚仓鼠：洞口的夜间活动，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。洞口场景展示活动环境，不能从一张图确定每日活动时间。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/djungarian-hamster/05-observation.webp",
        "title": "较白的冬毛",
        "alt": "加卡利亚仓鼠：较白的冬毛，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。部分个体随日照变化换毛，家养个体不一定出现同样变化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/djungarian-hamster/06-observation.webp",
        "title": "长毛后的幼鼠",
        "alt": "加卡利亚仓鼠：长毛后的幼鼠，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。这里展示已长毛、睁眼的幼鼠，不是刚出生的幼鼠。",
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
      "url": "https://www.gbif.org/species/2437845",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "世界哺乳动物手册：Phodopus sungorus（Plazi 转录）",
      "url": "https://treatment.plazi.org/GgServer/xhtml/03F06D13FFAC2064084213670A9AFC9D",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "仓鼠颊囊的比较形态研究",
      "url": "https://pubmed.ncbi.nlm.nih.gov/3783717/",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "季节换毛与日照研究",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3864830/",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "Mammal Diversity Database：Cricetiscus sungorus",
      "url": "https://www.mammaldiversity.org/taxon/1002215/",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球保护名录",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/176673683",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN：全球评估与日期",
      "url": "https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T17037A22354157.en",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
