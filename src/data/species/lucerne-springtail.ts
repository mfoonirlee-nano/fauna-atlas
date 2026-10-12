import type { Species } from '../../types/species.ts';

const profile = {
  "id": "lucerne-springtail",
  "slug": "lucerne-springtail",
  "names": {
    "zh": "苜蓿跳虫",
    "en": "Lucerne Springtail"
  },
  "scientificName": "Sminthurus viridis",
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
      "scientificName": "Collembola",
      "zhName": "弹尾纲"
    },
    "order": {
      "scientificName": "Symphypleona",
      "zhName": "愈腹目"
    },
    "family": {
      "scientificName": "Sminthuridae",
      "zhName": "圆跳虫科"
    },
    "genus": {
      "scientificName": "Sminthurus",
      "zhName": "圆跳虫属"
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
      "欧洲与澳大利亚南部记录区"
    ],
    "countries": [],
    "range": "欧洲有记录，澳大利亚南部也有引入种群，包括维多利亚、塔斯马尼亚和其他南部地区。当地常在秋冬潮湿条件下出现，降雨与土壤含水情况影响活动和发育。"
  },
  "habitats": [
    {
      "name": "潮湿草地与植物叶片",
      "realm": "terrestrial",
      "description": "欧洲有记录，澳大利亚南部也有引入种群，包括维多利亚、塔斯马尼亚和其他南部地区。当地常在秋冬潮湿条件下出现，降雨与土壤含水情况影响活动和发育。",
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "typical": 3,
      "unit": "mm",
      "note": "成体身体约长 3 毫米，来源为澳大利亚农业资料。"
    }
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "苜蓿、三叶草等植物的叶片细胞"
    ],
    "description": "它刮食叶片的柔软绿色组织，可留下薄膜般的透明小窗，较坚韧的叶脉仍在。苜蓿、三叶草和多种作物都是记录的食物植物，不把所有弹尾类都当作同样的植食者。"
  },
  "tags": [
    "苜蓿跳虫",
    "潮湿草地与植物叶片"
  ],
  "summary": "苜蓿跳虫身体近球形，腹面收着分叉的弹器，常在潮湿环境中的植物上取食。",
  "description": "成体常呈黄绿色，近球形身体带有深浅斑纹；头部有一对触角，胸部有三对足。腹下的弹器能够迅速展开，推动身体弹起。它没有翅，跳跃使用的结构与猫蚤的长后足不同。",
  "storySections": [
    {
      "key": "appearance",
      "label": "身体外观",
      "title": "圆身体与腹下弹器",
      "body": "成体常呈黄绿色，近球形身体带有深浅斑纹；头部有一对触角，胸部有三对足。腹下的弹器能够迅速展开，推动身体弹起。它没有翅，跳跃使用的结构与猫蚤的长后足不同。"
    },
    {
      "key": "habitat",
      "label": "栖息环境",
      "title": "潮湿草地中的季节变化",
      "body": "欧洲有记录，澳大利亚南部也有引入种群，包括维多利亚、塔斯马尼亚和其他南部地区。当地常在秋冬潮湿条件下出现，降雨与土壤含水情况影响活动和发育。"
    },
    {
      "key": "feeding",
      "label": "取食",
      "title": "叶片上的透明小窗",
      "body": "它刮食叶片的柔软绿色组织，可留下薄膜般的透明小窗，较坚韧的叶脉仍在。苜蓿、三叶草和多种作物都是记录的食物植物，不把所有弹尾类都当作同样的植食者。"
    },
    {
      "key": "life-cycle",
      "label": "生活史",
      "title": "蜕皮与保护卵",
      "body": "幼体体形与成体相似，会经过多次蜕皮。澳大利亚南部种群可通过具保护层的卵度过干燥夏季，在适宜的雨后孵化；这一季节节律描述当地种群，不直接套到全球。"
    },
    {
      "key": "taxonomy",
      "label": "分类归属",
      "title": "用接受学名定位具体物种",
      "body": "苜蓿跳虫的学名为 Sminthurus viridis，本档案的分类链采用 GBIF 所列的弹尾纲、愈腹目和圆跳虫科。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "从图片中找身体特点",
      "body": "尚未确认可引用的 IUCN 全球评估；“未评估”表示资料缺口，不能据此判断种群安全，也不等于确认该物种从未接受评估。共读时可以在腹面示意中找找收起的小叉，再看圆圆的身体和触角。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "名字中的“跳”对应腹下弹器",
      "body": "Linnaeus 于 1758 年描述了这个物种，其原始组合为 Podura viridis，现用学名为 Sminthurus viridis。苜蓿和三叶草是它利用的植物，通名因此与这些植物相联系。英语也称 Lucerne Flea；这里的 Flea 指小而会跳的外观，不表示它属于蚤目。观察时可把腹下弹器与猫蚤的长后足分别找出来。"
    }
  ],
  "keyFacts": [
    "身体近球形，有三对足。",
    "腹下的分叉弹器参与跳跃。",
    "成体没有翅。",
    "刮食叶片可留下透明小窗。"
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
      "value": "在腹面示意中找找收起的小叉，再看圆圆的身体和触角。"
    }
  ],
  "media": {
    "image": "./images/species/lucerne-springtail/01-cover.webp",
    "alt": "苜蓿跳虫及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/lucerne-springtail/02-observation.webp",
        "alt": "苜蓿跳虫：叶片上的圆身体，AI 生成科学情景重建",
        "title": "叶片上的圆身体",
        "caption": "成体放大重建：近球形身体与触角；非实测比例，斑纹不能单独用于鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lucerne-springtail/03-observation.webp",
        "alt": "苜蓿跳虫：收起的弹器，AI 生成科学情景重建",
        "title": "收起的弹器",
        "caption": "腹面结构示意：分叉弹器收在腹部下方，和三对足分开观察。放大重建，非实测比例，不能用来测量结构。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lucerne-springtail/04-observation.webp",
        "alt": "苜蓿跳虫：背部的斑纹，AI 生成科学情景重建",
        "title": "背部的斑纹",
        "caption": "背面放大重建：黄绿色身体有不规则斑纹，个体颜色有所差异。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lucerne-springtail/05-observation.webp",
        "alt": "苜蓿跳虫：幼体与成体，AI 生成科学情景重建",
        "title": "幼体与成体",
        "caption": "幼体和成体并置示意，幼体形态与成体相似；相对大小非实测比例。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lucerne-springtail/06-observation.webp",
        "alt": "苜蓿跳虫：叶片的透明小窗，AI 生成科学情景重建",
        "title": "叶片的透明小窗",
        "caption": "叶片组织刮食痕迹的情景重建，薄膜与叶脉为观察提示，不能由一张图确定损伤来源。",
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
      "url": "https://www.gbif.org/species/5167064",
      "kind": "taxonomy",
      "accessedAt": "2026-10-12"
    },
    {
      "title": "维多利亚州农业部门：本种形态、食物和生活史",
      "url": "https://agriculture.vic.gov.au/biosecurity/pest-insects-and-mites/priority-pest-insects-and-mites/lucerne-flea",
      "kind": "ecology",
      "accessedAt": "2026-10-12"
    },
    {
      "title": "ITIS：接受名称与原始名称",
      "url": "https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=100378",
      "kind": "taxonomy",
      "accessedAt": "2026-10-12"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-12",
  "updatedAt": "2026-10-12"
} as const satisfies Species;

export default profile;
