import type { Species } from '../../types/species.ts';

const profile = {
  "id": "rosy-maple-moth",
  "slug": "rosy-maple-moth",
  "names": {
    "zh": "玫瑰枫蛾",
    "en": "Rosy Maple Moth"
  },
  "scientificName": "Dryocampa rubicunda",
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
      "scientificName": "Lepidoptera",
      "zhName": "鳞翅目"
    },
    "family": {
      "scientificName": "Saturniidae",
      "zhName": "天蚕蛾科"
    },
    "genus": {
      "scientificName": "Dryocampa",
      "zhName": "枫蚕蛾属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "trend": "unknown",
    "code": "NE",
    "label": {
      "zh": "未评估",
      "en": "Not Evaluated"
    },
    "assessor": '尚未核实本种的全球 IUCN 评估，种群变化趋势也不明确。地区等级与 NatureServe 等级不能换算成全球 IUCN 等级。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "北美洲东部"
    ],
    "countries": [],
    "range": "原生于加拿大南部和美国东部的落叶林，幼虫主要取食枫树，也有栎树寄主记录。"
  },
  "habitats": [
    {
      "name": "有枫树的落叶林",
      "realm": "terrestrial",
      "description": '利用加拿大南部和美国东部的落叶林，幼虫主要吃枫树叶，也有栎树寄主记录。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "枫树叶片",
      "部分栎树叶片"
    ],
    "description": "幼虫吃寄主树叶；成蛾不进食。"
  },
  "tags": [
    "玫瑰枫蛾",
    "有枫树的落叶林"
  ],
  "summary": '玫瑰枫蛾在北美落叶林生活，幼虫吃枫树等寄主的叶片，粉黄相间的成蛾不进食。',
  "description": '玫瑰枫蛾原生于加拿大南部和美国东部的落叶林。成蛾前翅常有黄色中带，基部和外缘粉色，胸部有黄色鳞毛，足常为粉色。不同个体颜色有差别，有些很浅。幼虫绿色、带纵纹，胸部前方有一对黑色角状突起，主要吃枫树叶，也有栎树寄主记录。雌蛾将黄色卵产在叶背，成蛾不进食。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '粉色与黄色',
      body: '前翅常有黄色中带，基部和外缘粉色，不同个体的粉色范围和深浅有差别。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '毛茸茸的身体',
      body: '黄色胸部有鳞毛，足常为粉色，身体有昆虫的胸部、腹部和触角。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '带纵纹的毛毛虫',
      body: '幼虫绿色、带纵纹，胸部前方有一对黑色角状突起，外形与成蛾不同。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '叶背的黄色卵',
      body: '雌蛾把黄色卵产在叶背，幼虫孵化后取食寄主叶片。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '枫树旁的成蛾',
      body: '成蛾不进食，依靠幼虫时期吃叶片积累的能量。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保留寄主树木，在原处观察卵和幼虫。尚未核实本种的全球 IUCN 评估，种群变化趋势也不明确。地区等级与 NatureServe 等级不能换算成全球 IUCN 等级。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '粉黄成蛾与绿色幼虫用同一个物种名称',
      body: 'Fabricius 在 1793 年发表了本种的科学描述，现用名为 Dryocampa rubicunda。英文 Rosy Maple Moth 中的 Maple 对应幼虫常用的枫树寄主，Rosy 对应成蛾常见的粉色。幼虫却是带纵纹的绿色毛毛虫，不能根据两个阶段颜色不同就判断它们属于不同物种。',
    },
  ],
  "keyFacts": [
    '前翅常有黄色中带，基部和外缘粉色，不同个体的粉色范围和深浅有差别。',
    '黄色胸部有鳞毛，足常为粉色，身体有昆虫的胸部、腹部和触角。',
    '幼虫绿色、带纵纹，胸部前方有一对黑色角状突起，外形与成蛾不同。',
    '雌蛾把黄色卵产在叶背，幼虫孵化后取食寄主叶片。',
    '成蛾不进食，依靠幼虫时期吃叶片积累的能量。',
  ],
  "threats": [
    "局部栖息地改变"
  ],
  "conservationActions": [
    "保留寄主植物，观察时不采集卵、幼虫、蛹或成虫。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "栖息环境",
      "value": "有枫树的落叶林"
    },
    {
      "key": "observation",
      "label": "观察提示",
      "value": "粉色与黄色"
    },
    {
      "key": "status",
      "label": "全球保护等级",
      "value": "未评估",
      "note": "所引资料未确认全球物种级 IUCN 评估，沿用项目 NE 占位口径；地区等级与 NatureServe 等级不换算成全球 IUCN 等级。未评估不表示没有风险。"
    }
  ],
  "media": {
    "image": "./images/species/rosy-maple-moth/01-cover.webp",
    "alt": "玫瑰枫蛾及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/rosy-maple-moth/02-observation.webp",
        "alt": "玫瑰枫蛾：粉色与黄色",
        "title": "粉色与黄色",
        "caption": 'AI 生成科学情景重建。放大展示，非实测比例。前翅常有黄色的中带，基部和外缘带粉色。个体颜色存在差异，画面展示一种常见配色。 ',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rosy-maple-moth/03-observation.webp",
        "alt": "玫瑰枫蛾：毛茸茸的身体",
        "title": "毛茸茸的身体",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。靠近看黄色胸部与粉色足，身体表面的鳞毛让轮廓显得蓬松。它有昆虫的触角、胸部和腹部。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rosy-maple-moth/04-observation.webp",
        "alt": "玫瑰枫蛾：带纵纹的毛毛虫",
        "title": "带纵纹的毛毛虫",
        "caption": 'AI 生成科学情景重建。放大展示，非实测比例。绿色幼虫身上有纵纹，胸部靠前处有一对黑色角状突起。幼虫和成蛾颜色不同。图中成虫与卵或幼虫作不同阶段对照，不表示育幼或同一时刻的实拍。 ',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rosy-maple-moth/05-observation.webp",
        "alt": "玫瑰枫蛾：叶背的黄色卵",
        "title": "叶背的黄色卵",
        "caption": 'AI 生成科学情景重建。放大展示，非实测比例。雌蛾把黄色卵产在叶背，幼虫孵化后吃叶片。卵经过放大，不能按画面推算实物大小。图中成虫与卵或幼虫作不同阶段对照，不表示育幼或同一时刻的实拍。 ',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rosy-maple-moth/06-observation.webp",
        "alt": "玫瑰枫蛾：枫树旁的成蛾",
        "title": "枫树旁的成蛾",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。在有寄主树木的林地里找停歇的成蛾。成蛾不进食，幼虫时期取食叶片积累能量。",
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
      "title": "BAMONA：玫瑰枫蛾",
      "url": "https://www.butterfliesandmoths.org/species/Dryocampa-rubicunda",
      "kind": "general",
      "accessedAt": "2026-10-07"
    },
    {
      "title": "北卡罗来纳州立大学：枫树昆虫与幼虫形态",
      "url": "https://content.ces.ncsu.edu/common-insect-pests-of-maple-in-north-carolina",
      "kind": "ecology",
      "accessedAt": "2026-10-07"
    },
    {
      "title": "马萨诸塞大学：玫瑰枫蛾寄主与卵",
      "url": "https://www.umass.edu/agriculture-food-environment/landscape/publications-resources/insect-mite-guide/dryocampa-rubicunda",
      "kind": "ecology",
      "accessedAt": "2026-10-07"
    },
    {
      title: 'GBIF：Dryocampa rubicunda 的描述作者与年份',
      url: 'https://www.gbif.org/species/1865862',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-07",
  "updatedAt": "2026-10-07"
} as const satisfies Species;

export default profile;
