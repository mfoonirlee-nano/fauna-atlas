import type { Species } from '../../types/species.ts';

const profile = {
  "id": "cat-flea",
  "slug": "cat-flea",
  "names": {
    "zh": "猫栉首蚤",
    "en": "Cat Flea"
  },
  "scientificName": "Ctenocephalides felis",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Arthropoda",
      "zhName": "节肢动物门"
    },
    "class": {
      "scientificName": "Insecta",
      "zhName": "昆虫纲"
    },
    "order": {
      "scientificName": "Siphonaptera",
      "zhName": "蚤目"
    },
    "family": {
      "scientificName": "Pulicidae",
      "zhName": "蚤科"
    },
    "genus": {
      "scientificName": "Ctenocephalides",
      "zhName": "栉首蚤属"
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
    "assessor": "尚未确认可引用的 IUCN 全球评估；“未评估”表示资料缺口，不能据此判断种群安全，也不等于确认该物种从未接受评估。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "多地哺乳动物及其休息环境"
    ],
    "countries": [],
    "range": "世界多地有记录。猫和狗都可作为宿主，也有其他哺乳动物宿主；卵、幼虫和蛹多在宿主休息处附近的环境中发育。名称中的“猫”不表示只生活在猫身上。"
  },
  "habitats": [
    {
      "name": "哺乳动物体表与休息处",
      "realm": "terrestrial",
      "description": "世界多地有记录。猫和狗都可作为宿主，也有其他哺乳动物宿主；卵、幼虫和蛹多在宿主休息处附近的环境中发育。名称中的“猫”不表示只生活在猫身上。",
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 1,
      "max": 3,
      "unit": "mm",
      "note": "成虫身体的概略长度，不含伸展的足。"
    }
  },
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "成虫：宿主血液",
      "幼虫：含成蚤排泄物的有机碎屑"
    ],
    "description": "成虫吸取宿主血液，幼虫在环境中利用有机碎屑，包括含血成蚤排泄物。两种阶段的取食位置与食物不同，不能把幼虫画成附在宿主身上的小成蚤。"
  },
  "tags": [
    "猫栉首蚤",
    "哺乳动物体表与休息处"
  ],
  "summary": "猫栉首蚤的成虫身体侧扁、后足长；无足幼虫则在宿主休息处附近生活。",
  "description": "成虫呈褐色，没有翅，侧扁身体便于穿行毛发之间。头部下缘与前胸的梳状刺是观察特点，长后足参与跳跃。幼虫浅色、细长、有稀疏刚毛，形态与成虫不同。",
  "storySections": [
    {
      "key": "appearance",
      "label": "身体外观",
      "title": "侧扁身体与长后足",
      "body": "成虫呈褐色，没有翅，侧扁身体便于穿行毛发之间。头部下缘与前胸的梳状刺是观察特点，长后足参与跳跃。幼虫浅色、细长、有稀疏刚毛，形态与成虫不同。"
    },
    {
      "key": "habitat",
      "label": "栖息环境",
      "title": "宿主体表与休息环境",
      "body": "世界多地有记录。猫和狗都可作为宿主，也有其他哺乳动物宿主；卵、幼虫和蛹多在宿主休息处附近的环境中发育。名称中的“猫”不表示只生活在猫身上。"
    },
    {
      "key": "feeding",
      "label": "取食",
      "title": "成虫和幼虫吃不同食物",
      "body": "成虫吸取宿主血液，幼虫在环境中利用有机碎屑，包括含血成蚤排泄物。两种阶段的取食位置与食物不同，不能把幼虫画成附在宿主身上的小成蚤。"
    },
    {
      "key": "life-cycle",
      "label": "生活史",
      "title": "卵、幼虫、蛹与成虫",
      "body": "生活史包括卵、幼虫、蛹和成虫。卵会从宿主体表落入环境，幼虫经过发育后结茧化蛹；茧表面可黏上周围的碎屑。静止的后足图片只能展示结构，跳跃过程需要连续影像。"
    },
    {
      "key": "taxonomy",
      "label": "分类归属",
      "title": "用接受学名定位具体物种",
      "body": "猫栉首蚤的学名为 Ctenocephalides felis，本档案的分类链采用 GBIF 所列的昆虫纲、蚤目和蚤科。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "从图片中找身体特点",
      "body": "尚未确认可引用的 IUCN 全球评估；“未评估”表示资料缺口，不能据此判断种群安全，也不等于确认该物种从未接受评估。共读时可以从侧面找找长后腿，再对照浅色、没有足的幼虫。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "猫与狗身上都能找到它",
      "body": "Bouché 于 1835 年描述了这个物种，现用学名为 Ctenocephalides felis。中文名中的“栉”可联系头胸部梳子般的刺来观察，但只看生成图不能完成鉴定。英文通名 Cat Flea 与猫有关，实际宿主也包括狗和其他哺乳动物。了解它的卵、幼虫和蛹在环境中发育，有助于说明为何发现跳蚤不意味着宠物或孩子做错了什么。"
    }
  ],
  "keyFacts": [
    "成虫身体侧扁，没有翅。",
    "成虫有三对足，后足较长。",
    "幼虫细长、有刚毛，没有足。",
    "卵、幼虫和蛹可在宿主休息环境中发育。"
  ],
  "threats": [],
  "conservationActions": [
    "观察时减少对动物及其栖息环境的干扰"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "共读观察",
      "value": "从侧面找找长后腿，再对照浅色、没有足的幼虫。"
    }
  ],
  "media": {
    "image": "./images/species/cat-flea/01-cover.webp",
    "alt": "猫栉首蚤及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/cat-flea/02-observation.webp",
        "alt": "猫栉首蚤：侧扁身体，AI 生成科学情景重建",
        "title": "侧扁身体",
        "caption": "侧面放大重建：成虫身体侧扁，后足长。非实测比例，不能从静图推断跳跃动作。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/cat-flea/03-observation.webp",
        "alt": "猫栉首蚤：头胸的梳状刺，AI 生成科学情景重建",
        "title": "头胸的梳状刺",
        "caption": "头部和前胸局部放大重建；刺列外观为近似示意，不能据此数刺或鉴别近缘种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/cat-flea/04-observation.webp",
        "alt": "猫栉首蚤：无足幼虫，AI 生成科学情景重建",
        "title": "无足幼虫",
        "caption": "幼虫放大重建：浅色细长身体与稀疏刚毛，没有足，不能当作缩小的成虫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/cat-flea/05-observation.webp",
        "alt": "猫栉首蚤：环境中的生活阶段，AI 生成科学情景重建",
        "title": "环境中的生活阶段",
        "caption": "卵、幼虫与茧中的蛹分区示意；非实测比例，不表示三个阶段在现场恰好相邻。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/cat-flea/06-observation.webp",
        "alt": "猫栉首蚤：休息处附近的成虫，AI 生成科学情景重建",
        "title": "休息处附近的成虫",
        "caption": "成虫与柔软纤维的情景重建。纤维不是宿主，画面不证明特定宠物发生感染。",
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
      "url": "https://www.gbif.org/species/1419472",
      "kind": "taxonomy",
      "accessedAt": "2026-10-12"
    },
    {
      "title": "佛罗里达大学 IFAS：猫蚤形态、宿主与生活史",
      "url": "https://ask.ifas.ufl.edu/publication/IN137",
      "kind": "general",
      "accessedAt": "2026-10-12"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-12",
  "updatedAt": "2026-10-12"
} as const satisfies Species;

export default profile;
