import type { Species } from '../../types/species.ts';

const profile = {
  "id": "hazel-dormouse",
  "slug": "hazel-dormouse",
  "names": {
    "zh": "榛睡鼠",
    "en": "Hazel Dormouse"
  },
  "scientificName": "Muscardinus avellanarius",
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
      "scientificName": "Gliridae",
      "zhName": "睡鼠科"
    },
    "genus": {
      "scientificName": "Muscardinus",
      "zhName": "榛睡鼠属"
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
    "assessor": '全球无危等级不代表各地种群都没有下降。全球保护等级据 MDD 所列 IUCN 记录，独立评估年份尚未核实。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "欧洲多地及小亚细亚部分地区"
    ],
    "countries": [],
    "range": "欧洲多地及小亚细亚部分地区；主要栖息于落叶林、灌丛与树篱。"
  },
  "habitats": [
    {
      "name": "落叶林、灌丛与树篱",
      "realm": "terrestrial",
      "description": '栖息在林下灌丛较密的落叶林，也利用树篱。相连的枝条便于它攀爬和觅食。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "果实",
      "坚果",
      "花粉",
      "昆虫"
    ],
    "description": '取食果实、坚果和花粉，也吃昆虫；榛果是其中一种食物。'
  },
  "tags": [
    "榛睡鼠",
    "落叶林、灌丛与树篱"
  ],
  "summary": '榛睡鼠夜间在欧洲和小亚细亚的灌丛中攀爬觅食，白天回巢休息，寒冷季节还会冬眠。',
  "description": '榛睡鼠有金棕色的毛、圆耳朵和黑眼睛，尾巴也长满毛。它的小脚灵活，能抓住细枝，在灌木间寻找果实、坚果、花粉和昆虫。夜间是它的活动时间，白天通常在巢里休息，寒冷季节则会冬眠。落叶林下的灌丛与相连的树篱，为它提供食物和攀爬的路径。',
  "storySections": [
    {
      key: 'observation-1',
      label: '身体特点',
      title: '抓住细枝的小脚',
      body: '灵活的前后脚能抓住细枝，帮助榛睡鼠在灌木间攀爬。',
    },
    {
      key: 'observation-2',
      label: '身体特点',
      title: '长满毛的尾巴',
      body: '尾巴表面长满毛。',
    },
    {
      key: 'observation-3',
      label: '身体特点',
      title: '圆耳朵和黑眼睛',
      body: '头部两侧有小圆耳，眼睛呈黑色。榛睡鼠主要在夜间活动。',
    },
    {
      key: 'observation-4',
      label: '生活习性',
      title: '抱着榛果吃',
      body: '榛睡鼠用前脚扶住榛果，再用门齿啃咬。它也吃其他果实、花粉和昆虫。',
    },
    {
      key: 'observation-5',
      label: '栖息与生活',
      title: '窝里蜷着睡',
      body: '白天，榛睡鼠在巢里休息，寒冷季节还会冬眠。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保留相连的树篱和林下灌丛，给榛睡鼠留下攀爬与筑巢的地方，观察时不翻动巢。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '1758 年记录中的旧属名',
      body: '林奈在 1758 年以 Mus avellanarius 发表了榛睡鼠的科学名称，后来它被归入 Muscardinus 属，组成今天使用的 Muscardinus avellanarius。它被称为“榛睡鼠”，而食物中既有榛果，也有其他果实和昆虫；白天休息与冬眠则是两种不同的状态。',
    },
  ],
  "keyFacts": [
    '灵活的前后脚能抓住细枝，帮助榛睡鼠在灌木间攀爬。',
    '尾巴表面长满毛。',
    '头部两侧有小圆耳，眼睛呈黑色。榛睡鼠主要在夜间活动。',
    '榛睡鼠用前脚扶住榛果，再用门齿啃咬。它也吃其他果实、花粉和昆虫。',
    '白天，榛睡鼠在巢里休息，寒冷季节还会冬眠。',
    '林奈在 1758 年以 Mus avellanarius 发表了榛睡鼠的科学名称，后来它被归入 Muscardinus 属，组成今天使用的 Muscardinus avellanarius。它被称为“榛睡鼠”，而食物中既有榛果，也有其他果实和昆虫；白天休息与冬眠则是两种不同的状态。',
  ],
  "threats": [
    "林下灌丛丧失",
    "树篱与林地破碎化"
  ],
  "conservationActions": [
    "保留相连的树篱和林下灌丛，给榛睡鼠留下攀爬与筑巢的地方，观察时不翻动巢。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "落叶林、灌丛与树篱"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "抓住细枝的小脚"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "无危",
      "note": "全球无危等级不代表各地种群都没有下降；冬眠与白天睡眠分开介绍。保护等级采用 MDD 所列 IUCN 全球等级，独立评估年份未核实。"
    }
  ],
  "media": {
    "image": "./images/species/hazel-dormouse/01-cover.webp",
    "alt": "榛睡鼠及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/hazel-dormouse/02-observation.webp",
        "alt": "榛睡鼠：抓住细枝的小脚",
        "title": "抓住细枝的小脚",
        "caption": "AI 生成科学情景重建。看看前脚和后脚怎样围住树枝。灵活的小脚帮助它在灌木间攀爬。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/hazel-dormouse/03-observation.webp",
        "alt": "榛睡鼠：长满毛的尾巴",
        "title": "长满毛的尾巴",
        "caption": "AI 生成科学情景重建。从身体后面沿着尾巴看，尾巴表面也长着毛。图中展示它沿枝条移动的姿势。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/hazel-dormouse/04-observation.webp",
        "alt": "榛睡鼠：圆耳朵和黑眼睛",
        "title": "圆耳朵和黑眼睛",
        "caption": "AI 生成科学情景重建。找找头两侧的小圆耳朵，再看看两只黑色的眼睛。榛睡鼠主要在夜间活动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/hazel-dormouse/05-observation.webp",
        "alt": "榛睡鼠：抱着榛果吃",
        "title": "抱着榛果吃",
        "caption": "AI 生成科学情景重建。看看它用前脚扶住榛果，再用门齿啃咬。它也吃其他果实、花粉和昆虫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/hazel-dormouse/06-observation.webp",
        "alt": "榛睡鼠：窝里蜷着睡",
        "title": "窝里蜷着睡",
        "caption": "AI 生成科学情景重建。白天，它会在巢里休息。寒冷季节还会冬眠；这张睡姿图不能单凭外观判断是否正在冬眠。",
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
      "title": "Mammal Diversity Database：Muscardinus avellanarius",
      "url": "https://www.mammaldiversity.org/taxon/1001530/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-27"
    },
    {
      "title": "MDD 官方数据：分类、分布与所列 IUCN 等级",
      "url": "https://raw.githubusercontent.com/mammaldiversity/mammaldiversity.github.io/master/assets/data/mdd.csv",
      "kind": "conservation",
      "accessedAt": "2026-09-27"
    },
    {
      "title": "Animal Diversity Web：Muscardinus avellanarius",
      "url": "https://animaldiversity.org/accounts/Muscardinus_avellanarius/",
      "kind": "ecology",
      "accessedAt": "2026-09-27"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-27",
  "updatedAt": "2026-09-27"
} as const satisfies Species;

export default profile;
