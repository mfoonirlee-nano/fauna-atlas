import type { Species } from '../../types/species.ts';

const profile = {
  "id": "sika-deer",
  "slug": "sika-deer",
  "names": {
    "zh": "梅花鹿",
    "en": "Sika Deer",
    "aliases": []
  },
  "scientificName": "Cervus nippon",
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
      "scientificName": "Artiodactyla",
      "zhName": "偶蹄目"
    },
    "family": {
      "scientificName": "Cervidae",
      "zhName": "鹿科"
    },
    "genus": {
      "scientificName": "Cervus",
      "zhName": "鹿属"
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
    "assessor": "IUCN 2014 年评估、2015 年发表为 LC；日本较大种群影响全球判断，不能据此认定所有原生地区都常见。",
    "assessedYear": 2014
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "东亚原生地区",
      "欧洲与其他引入地区"
    ],
    "countries": [],
    "range": "梅花鹿原生于东亚，现存原生种群分布不均，也有人类引入的欧洲等地种群。饲养展示地点不等于天然分布；地图点只代表东亚的一处地区。",
    "center": {
      "lat": 29,
      "lng": 118
    }
  },
  "habitats": [
    {
      "name": "森林与林缘草地",
      "realm": "terrestrial",
      "description": "梅花鹿原生于东亚，现存原生种群分布不均，也有人类引入的欧洲等地种群。饲养展示地点不等于天然分布；地图点只代表东亚的一处地区。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草",
      "树叶",
      "嫩枝"
    ],
    "description": "梅花鹿吃草、叶片和嫩枝等植物材料，并会反刍。食物组成随地区和季节变化，观察时不要随手投喂人类食品。"
  },
  "tags": [
    "梅花鹿",
    "森林与林缘草地"
  ],
  "summary": "梅花鹿夏毛常带白色斑点，成年雄鹿的角会周期性脱落再生。冬毛通常更厚、更暗，斑点也可能不那么醒目。",
  "description": "梅花鹿夏季的红褐色毛上常有白斑，臀部有浅色斑块。雄鹿通常长角，雌鹿通常无角。冬毛更厚，颜色及斑点清晰程度随种群和季节变化，不能只看斑点数量判断年龄。图册采用 Cervus nippon，归入鹿科、鹿属，与马鹿等其他鹿属物种分别记录。不同地区种群及亚种的外观有差异，图库展示物种层面的观察特征，不作为亚种鉴定图。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "梅花鹿夏季的红褐色毛上常有白斑，臀部有浅色斑块。雄鹿通常长角，雌鹿通常无角。冬毛更厚，颜色及斑点清晰程度随种群和季节变化，不能只看斑点数量判断年龄。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "梅花鹿利用森林和林缘草地，取食与休息的位置会随季节和环境变化。它可能独自活动，也会成群；动物园中的活动空间不能代表野外种群的完整栖息环境。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物怎样进入身体",
      "body": "梅花鹿吃草、叶片和嫩枝等植物材料，并会反刍。食物组成随地区和季节变化，观察时不要随手投喂人类食品。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼体与成体",
      "body": "母鹿通常产下一只幼鹿并哺乳，幼鹿带有斑点。雄鹿的鹿角经历生长、硬化和脱落的周期；生长中的角表面覆有茸皮，角枝数量不能直接换算成准确年龄。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "图册采用 Cervus nippon，归入鹿科、鹿属，与马鹿等其他鹿属物种分别记录。不同地区种群及亚种的外观有差异，图库展示物种层面的观察特征，不作为亚种鉴定图。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：两张图里的鹿都有角吗？观察任务：对照夏毛、冬毛和长茸角的图片，分别看毛色和角的变化。遵守园区距离，不触摸鹿角，也不靠近幼鹿。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Cervus nippon 的名称记录",
      "body": "Temminck 在 1838 年命名 Cervus nippon，GBIF 当前保留这一接受名。科学命名年份不同于人类开始认识鹿的时间；本档案介绍梅花鹿这个物种，保护状态和分布也需注明全球或地区尺度。"
    }
  ],
  "keyFacts": [
    "梅花鹿夏季的红褐色毛上常有白斑，臀部有浅色斑块。雄鹿通常长角，雌鹿通常无角。冬毛更厚，颜色及斑点清晰程度随种群和季节变化，不能只看斑点数量判断年龄。",
    "梅花鹿吃草、叶片和嫩枝等植物材料，并会反刍。食物组成随地区和季节变化，观察时不要随手投喂人类食品。",
    "母鹿通常产下一只幼鹿并哺乳，幼鹿带有斑点。雄鹿的鹿角经历生长、硬化和脱落的周期；生长中的角表面覆有茸皮，角枝数量不能直接换算成准确年龄。"
  ],
  "threats": [
    "部分原生地区的栖息地丧失与猎捕"
  ],
  "conservationActions": [
    "保护原生栖息地并按地区监测种群；引入地区需另行管理生态影响。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "森林与林缘草地"
    },
    {
      "key": "diet",
      "label": "主要食物",
      "value": "草、树叶"
    }
  ],
  "media": {
    "image": "./images/species/sika-deer/01-cover.webp",
    "alt": "梅花鹿及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/sika-deer/02-observation.webp",
        "title": "没有角的成年雌鹿",
        "alt": "梅花鹿：没有角的成年雌鹿，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。雌鹿通常无角，无角不等于幼鹿。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sika-deer/03-observation.webp",
        "title": "林缘吃草",
        "alt": "梅花鹿：林缘吃草，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。梅花鹿取食植物，林缘可提供草本和木本食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sika-deer/04-observation.webp",
        "title": "长着茸皮的新角",
        "alt": "梅花鹿：长着茸皮的新角，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。生长中的鹿角表面有茸皮，静图不展示完整的年周期。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sika-deer/05-observation.webp",
        "title": "雌鹿与幼鹿",
        "alt": "梅花鹿：雌鹿与幼鹿，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼鹿依靠母乳成长；同框大小差异不是实测比例。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sika-deer/06-observation.webp",
        "title": "较深的冬毛",
        "alt": "梅花鹿：较深的冬毛，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。冬毛通常较厚、较暗，白斑清晰程度也会变化。",
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
      "url": "https://www.gbif.org/species/2440954",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "ADW：梅花鹿外形、生活史和分布",
      "url": "https://animaldiversity.org/accounts/Cervus_nippon/",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "美国国家公园管理局：鹿角与牛角",
      "url": "https://home.nps.gov/articles/yell-horns-vs-antlers.htm",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN：梅花鹿全球评估",
      "url": "https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T41788A22155877.en",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球保护名录",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/176669420",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
