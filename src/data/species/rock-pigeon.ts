import type { Species } from '../../types/species.ts';

const profile = {
  "id": "rock-pigeon",
  "slug": "rock-pigeon",
  "names": {
    "zh": "原鸽",
    "en": "Rock Pigeon",
    "aliases": [
      "城市鸽",
      "岩鸽",
      "家鸽"
    ]
  },
  "scientificName": "Columba livia",
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
      "scientificName": "Aves",
      "zhName": "鸟纲"
    },
    "order": {
      "scientificName": "Columbiformes",
      "zhName": "鸽形目"
    },
    "family": {
      "scientificName": "Columbidae",
      "zhName": "鸠鸽科"
    },
    "genus": {
      "scientificName": "Columba",
      "zhName": "鸽属"
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
    "assessedYear": 2016,
    "assessor": "全球物种评估为无危；地区种群与城市野化群体的状况需分别看待。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "欧洲、北非与亚洲西南部",
      "世界多地城镇（引入与野化）"
    ],
    "countries": [],
    "range": "野生原鸽原产欧洲、北非和亚洲西南部；人类饲养与引入后，其野化后代出现在世界多地城镇。两种范围分别叙述，不把城市鸽的出现都视为原生分布。"
  },
  "habitats": [
    {
      "name": "城镇建筑与岩壁",
      "realm": "terrestrial",
      "description": "野生原鸽原产欧洲、北非和亚洲西南部；人类饲养与引入后，其野化后代出现在世界多地城镇。两种范围分别叙述，不把城市鸽的出现都视为原生分布。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "种子",
      "谷物"
    ],
    "description": "原鸽主要在地面寻找种子和谷物。城市里的食物来源受人类活动影响，观察任务不安排投喂面包或零食。"
  },
  "tags": [
    "原鸽",
    "城镇建筑与岩壁"
  ],
  "summary": "原鸽的家养后代常在城市生活。双亲共同育幼，早期以嗉囊产生的鸽乳喂雏鸟。",
  "description": "典型原鸽呈蓝灰色，翅上有两道黑带，颈部羽毛在光照下显出绿色或紫色光泽。城市鸽也有褐色、白色和斑驳羽色，同一物种内可以有多种外观。本档案采用 Columba livia，涵盖野生原鸽及其家养、野化后代。广场上的城市鸽多与家养后代有关，不能把城市观察记录当作原生野生种群；家鸽品种不另计物种。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体特点辨认",
      "body": "典型原鸽呈蓝灰色，翅上有两道黑带，颈部羽毛在光照下显出绿色或紫色光泽。城市鸽也有褐色、白色和斑驳羽色，同一物种内可以有多种外观。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "原鸽常在地面行走、取食，并成群停栖。城市建筑上的高处和凹槽提供类似岩壁的停栖与筑巢位置；辨认时也要考虑家养与野化背景。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "原鸽主要在地面寻找种子和谷物。城市里的食物来源受人类活动影响，观察任务不安排投喂面包或零食。"
    },
    {
      "key": "life-cycle",
      "label": "成长与育幼",
      "title": "幼仔怎样长大",
      "body": "双亲共同孵卵和照顾雏鸟。育幼早期，雄鸟和雌鸟都能在嗉囊产生富营养的鸽乳，并通过口喂给雏鸟；这里的乳是俗称，与哺乳动物的乳腺不同。雏鸟最初留在巢里，长成后才离巢。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的内容范围",
      "body": "本档案采用 Columba livia，涵盖野生原鸽及其家养、野化后代。广场上的城市鸽多与家养后代有关，不能把城市观察记录当作原生野生种群；家鸽品种不另计物种。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：鸽子的翅膀上有没有两道黑带？观察任务：在广场远看三只鸽子的羽色，再用图片了解巢里雏鸟与成年鸟的不同。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "原鸽的学名与记录",
      "body": "格梅林在 1789 年使用 Columba livia 这一名称。人类饲养鸽子的历史更早，家养和野化后代形成了多种羽色。项目用同一个接受物种名建立档案，并分别说明野生岩壁环境与城市生活背景。"
    }
  ],
  "keyFacts": [
    "典型原鸽呈蓝灰色，翅上有两道黑带，颈部羽毛在光照下显出绿色或紫色光泽。城市鸽也有褐色、白色和斑驳羽色，同一物种内可以有多种外观。",
    "原鸽主要在地面寻找种子和谷物。城市里的食物来源受人类活动影响，观察任务不安排投喂面包或零食。",
    "双亲共同孵卵和照顾雏鸟。育幼早期，雄鸟和雌鸟都能在嗉囊产生富营养的鸽乳，并通过口喂给雏鸟；这里的乳是俗称，与哺乳动物的乳腺不同。雏鸟最初留在巢里，长成后才离巢。"
  ],
  "threats": [
    "栖息地改变",
    "人为干扰"
  ],
  "conservationActions": [
    "按场所规则远距离观察，为动物保留取食、休息和育幼空间。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "城镇建筑与岩壁"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "羽色与双亲育幼"
    }
  ],
  "media": {
    "image": "./images/species/rock-pigeon/01-cover.webp",
    "alt": "原鸽及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/rock-pigeon/02-observation.webp",
        "title": "颈部的光泽",
        "alt": "原鸽：颈部的光泽，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。羽毛反光随角度变化；图中颜色不是固定色块。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rock-pigeon/03-observation.webp",
        "title": "双亲与巢中雏鸟",
        "alt": "原鸽：双亲与巢中雏鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。双亲都参与育幼；画面不展示鸽乳的内部产生过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rock-pigeon/04-observation.webp",
        "title": "广场上的行走",
        "alt": "原鸽：广场上的行走，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。城市鸽多与家养后代有关，静图不能判断步态。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rock-pigeon/05-observation.webp",
        "title": "不同羽色的同伴",
        "alt": "原鸽：不同羽色的同伴，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。多种羽色可出现在同一物种中，不新增品种节点。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rock-pigeon/06-observation.webp",
        "title": "岩壁上的原鸽",
        "alt": "原鸽：岩壁上的原鸽，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示野生型外观与岩壁环境，不能凭羽色确认遗传来源。",
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
      "title": "GBIF：接受学名、命名人和分类链",
      "url": "https://www.gbif.org/species/2495414",
      "kind": "taxonomy",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "密歇根大学 ADW：原鸽形态与原生、引入范围",
      "url": "https://animaldiversity.org/accounts/Columba_livia/",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "康奈尔鸟类实验室：原鸽生活史与双亲育幼",
      "url": "https://www.allaboutbirds.org/guide/Rock_Pigeon/lifehistory",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "BTO：原鸽与城市鸽的关系及保护状态",
      "url": "https://www.bto.org/learn/about-birds/birdfacts/rock-dove",
      "kind": "conservation",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "康奈尔鸟类实验室：鸽类双亲与嗉囊乳",
      "url": "https://www.allaboutbirds.org/guide/Common_Wood-Pigeon/overview",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "IUCN：原鸽 2016 年全球评估",
      "url": "https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T22690066A155493121.en",
      "kind": "conservation",
      "accessedAt": "2026-10-14"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-14",
  "updatedAt": "2026-10-14"
} as const satisfies Species;

export default profile;
