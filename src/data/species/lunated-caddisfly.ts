import type { Species } from '../../types/species.ts';

const profile = {
  "id": "lunated-caddisfly",
  "slug": "lunated-caddisfly",
  "names": {
    "zh": "月斑石蛾",
    "en": "Lunated Caddisfly"
  },
  "scientificName": "Limnephilus lunatus",
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
      "scientificName": "Trichoptera",
      "zhName": "毛翅目"
    },
    "family": {
      "scientificName": "Limnephilidae",
      "zhName": "北石蛾科"
    },
    "genus": {
      "scientificName": "Limnephilus",
      "zhName": "北石蛾属"
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
    "assessor": '尚未确认可引用的 IUCN 全球评估；“未评估”表示资料缺口，不能据此判断种群安全。地方记录或 NatureServe 等级不能代替 IUCN 全球等级。'
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "欧洲"
    ],
    "regions": [
      "欧洲淡水与湿地边缘"
    ],
    "countries": [],
    "range": '英国有实地记录，瑞典有幼虫研究。幼虫生活于淡水，成虫可见于溪流、池塘、湖泊和湿地附近；这些地点并非完整的全球分布边界。'
  },
  "habitats": [
    {
      "name": "池塘溪流与湿地",
      "realm": "freshwater",
      "description": '幼虫生活在淡水中，携带叶片与沙粒拼成的小筒；成虫出现在水域附近。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "幼虫取食植物性材料"
    ],
    "description": '携筒幼虫取食植物性材料，行为研究把它作为淡水植食模型。本种成虫的具体食谱尚缺确认资料。'
  },
  "tags": [
    "月斑石蛾",
    "池塘溪流与湿地"
  ],
  "summary": '月斑石蛾的幼虫用叶片碎屑和沙粒拼接巢筒，带着小筒在淡水中生活。',
  "description": '褐色成虫有细长触角和带毛的翅膀，休息时翅膀像屋顶罩住身体，前翅后缘附近有半月斑。幼虫、蛹和成虫外形不同，成虫不再携带幼虫的巢筒。',
  "storySections": [
    {
      key: 'appearance',
      label: '身体外观',
      title: '半月翅斑与携带的小筒',
      body: '褐色成虫有长触角和带毛的翅膀，静止时翅膀呈屋顶状。前翅后缘附近的浅色半月斑带深色边缘。幼虫则用叶片碎屑、沙粒等拼接巢筒。',
    },
    {
      key: 'habitat',
      label: '栖息环境',
      title: '幼虫生活于淡水',
      body: '英国有实地记录，瑞典开展过幼虫研究。成虫出现在溪流、池塘、湖泊和湿地附近，地方常见程度不能代表全球种群趋势。',
    },
    {
      key: 'feeding',
      label: '取食',
      title: '携筒幼虫取食植物',
      body: '行为研究把幼虫作为淡水植食模型，研究其行为。本种成虫的具体食谱尚缺确认资料。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '幼虫带筒，成虫有翅',
      body: '它经历卵、水生幼虫、蛹和有翅成虫，属于完全变态昆虫。幼虫的头与胸足可从巢筒前端伸出，成虫不再携带这种小筒。',
    },
    {
      key: 'taxonomy',
      label: '分类归属',
      title: '毛翅目中的月斑石蛾',
      body: '月斑石蛾的学名为 Limnephilus lunatus，属于昆虫纲、毛翅目和北石蛾科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '全球评估资料待补充',
      body: '尚未确认可引用的 IUCN 全球评估，地方观察记录不能直接确定全球种群趋势。“未评估”表示资料缺口。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“月斑”可以从翅膀上观察',
      body: 'Curtis 于 1834 年描述了这个物种，现用学名为 Limnephilus lunatus。月斑的称呼对应成虫前翅后缘附近带深边的浅色半月斑。幼虫与成虫外形差别很大，幼虫会拼接并携带巢筒；研究者也将它们作为淡水植食模型开展行为研究。',
    },
  ],
  "keyFacts": [
    '成虫有长触角和带毛的翅膀。',
    '休息时翅膀呈屋顶状。',
    '前翅后缘附近有带深边的浅色半月斑。',
    '幼虫用叶片与沙粒拼接巢筒。',
    '生活史包括卵、幼虫、蛹和成虫。',
  ],
  "threats": [
    "淡水污染与湿地生境损失"
  ],
  "conservationActions": [
    "保护淡水水质与湿地植被",
    "保留自然水边和底部有机物环境"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "共读观察",
      "value": '幼虫巢筒的叶片与沙粒，以及成虫的长触角和半月翅斑。'
    }
  ],
  "media": {
    "image": "./images/species/lunated-caddisfly/01-cover.webp",
    "alt": "月斑石蛾及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/lunated-caddisfly/02-observation.webp",
        "title": "成虫的屋顶状翅膀",
        "alt": '成虫的屋顶状翅膀，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。有翅成虫侧面与长触角；微距重建，尺度非实测。图像尺度未经实测，不能用于物种鉴定或判断连续动作。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lunated-caddisfly/03-observation.webp",
        "title": "翅膀上的半月斑",
        "alt": '翅膀上的半月斑，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。有翅成虫放大外观；生成花纹不用于鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lunated-caddisfly/04-observation.webp",
        "title": "携筒的水生幼虫",
        "alt": '携筒的水生幼虫，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。水生幼虫，头和胸足伸出叶片、沙粒巢筒；无成虫翅膀。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lunated-caddisfly/05-observation.webp",
        "title": "叶片与沙粒拼成的巢筒",
        "alt": '叶片与沙粒拼成的巢筒，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。水生幼虫及巢筒的近景；材料拼接为情景重建。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lunated-caddisfly/06-observation.webp",
        "title": "湿地边缘的成虫",
        "alt": '湿地边缘的成虫，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。有翅成虫与湿地背景，静图不证明飞行。",
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
      "url": "https://www.gbif.org/species/1442474",
      "kind": "taxonomy",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "NatureSpot：成虫半月斑、幼虫巢筒与记录",
      "url": "https://www.naturespot.org/species/limnephilus-lunatus",
      "kind": "general",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "原始行为研究：携筒幼虫与植食模型",
      "url": "https://doi.org/10.1080/01650424.2020.1865545",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-11",
  "updatedAt": "2026-10-11"
} as const satisfies Species;

export default profile;
