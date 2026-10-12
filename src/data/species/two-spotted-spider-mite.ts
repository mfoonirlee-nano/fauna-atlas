import type { Species } from '../../types/species.ts';

const profile = {
  "id": "two-spotted-spider-mite",
  "slug": "two-spotted-spider-mite",
  "names": {
    "zh": "二斑叶螨",
    "en": "Two-spotted Spider Mite"
  },
  "scientificName": "Tetranychus urticae",
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
      "scientificName": "Arachnida",
      "zhName": "蛛形纲"
    },
    "order": {
      "scientificName": "Trombidiformes",
      "zhName": "绒螨目"
    },
    "family": {
      "scientificName": "Tetranychidae",
      "zhName": "叶螨科"
    },
    "genus": {
      "scientificName": "Tetranychus",
      "zhName": "叶螨属"
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
      "温带与亚热带植物记录区"
    ],
    "countries": [],
    "range": "欧洲标本用于最初描述，温带和亚热带多地有记录。美国多种果树、蔬菜和观赏植物上有记录，温室还能让它在部分自然越冬范围之外生存。寄主记录多不表示每一片叶上的螨都属于本种。"
  },
  "habitats": [
    {
      "name": "植物叶片背面与越冬隐蔽处",
      "realm": "terrestrial",
      "description": "欧洲标本用于最初描述，温带和亚热带多地有记录。美国多种果树、蔬菜和观赏植物上有记录，温室还能让它在部分自然越冬范围之外生存。寄主记录多不表示每一片叶上的螨都属于本种。",
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "typical": 0.4,
      "unit": "mm",
      "note": "成体雌性身体长度约 0.4 毫米，不含足。"
    }
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "植物叶片细胞内容物"
    ],
    "description": "针状口器刺入植物组织，获取叶片细胞内容物。常在叶背活动，受损叶片可出现细小浅色斑点，持续取食后逐渐黄化。细丝是动物产生的丝，不是植物的根或叶脉。"
  },
  "tags": [
    "二斑叶螨",
    "植物叶片背面与越冬隐蔽处"
  ],
  "summary": "二斑叶螨身体小而透光，成体有八只足，刚孵化的幼虫有六只足，常在叶背留下细丝。",
  "description": "成体雌性身体椭圆，常呈浅绿或黄绿色，透过体壁可见两侧深色斑块。新蜕皮个体可能缺少明显斑块，越冬雌性还可呈橙红色；颜色和斑块不能单独确定物种。幼虫有三对足，后续若虫和成体有四对足。",
  "storySections": [
    {
      "key": "appearance",
      "label": "身体外观",
      "title": "透光身体和两侧深色区域",
      "body": "成体雌性身体椭圆，常呈浅绿或黄绿色，透过体壁可见两侧深色斑块。新蜕皮个体可能缺少明显斑块，越冬雌性还可呈橙红色；颜色和斑块不能单独确定物种。幼虫有三对足，后续若虫和成体有四对足。"
    },
    {
      "key": "habitat",
      "label": "栖息环境",
      "title": "叶背与温室中的生活",
      "body": "欧洲标本用于最初描述，温带和亚热带多地有记录。美国多种果树、蔬菜和观赏植物上有记录，温室还能让它在部分自然越冬范围之外生存。寄主记录多不表示每一片叶上的螨都属于本种。"
    },
    {
      "key": "feeding",
      "label": "取食",
      "title": "刺取细胞内容物",
      "body": "针状口器刺入植物组织，获取叶片细胞内容物。常在叶背活动，受损叶片可出现细小浅色斑点，持续取食后逐渐黄化。细丝是动物产生的丝，不是植物的根或叶脉。"
    },
    {
      "key": "life-cycle",
      "label": "生活史",
      "title": "六足幼虫与八足成体",
      "body": "发育经过卵、六足幼虫、两个八足若虫阶段和八足成体，速度随温度改变。部分地区的雌性在落叶或树皮隐蔽处越冬，体色转为橙红；颜色变化与生命阶段、环境都有关。"
    },
    {
      "key": "taxonomy",
      "label": "分类归属",
      "title": "用学名定位具体物种",
      "body": "二斑叶螨的学名为 Tetranychus urticae，属于蛛形纲、绒螨目和叶螨科。中文通称也可能指一个类群，学名限定本档案的具体物种。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "观察完整身体与附肢",
      "body": "尚未确认可引用的 IUCN 全球评估；“未评估”表示资料缺口，不能据此判断种群安全，也不等于确认该物种从未接受评估。共读时可以对照幼虫和成体的结构示意，分别找三对和四对足。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "两侧斑块有时不明显",
      "body": "Koch 于 1836 年描述了这个物种，现用学名为 Tetranychus urticae。“二斑”联系身体两侧常见的深色区域，这些内容物能透过浅色体壁被看见。新蜕皮个体可能没有清楚的斑块，越冬雌性也可变为橙红色；通名提供观察线索，却不能代替显微鉴定。不同生命阶段的足数同样要在比较前区分。"
    }
  ],
  "keyFacts": [
    "幼虫有三对足，若虫和成体有四对足。",
    "成体没有昆虫那样的触角。",
    "两侧深色斑块并非每个阶段都清楚。",
    "叶背可见细丝和取食损伤。"
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
      "value": "对照幼虫和成体的结构示意，分别找三对和四对足。"
    }
  ],
  "media": {
    "image": "./images/species/two-spotted-spider-mite/01-cover.webp",
    "alt": "二斑叶螨及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/two-spotted-spider-mite/02-observation.webp",
        "alt": "二斑叶螨：成体雌性的背面，AI 生成科学情景重建",
        "title": "成体雌性的背面",
        "caption": "成体雌性放大重建，浅色体壁与两侧深色区域；非实测比例，不由斑块单独鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/two-spotted-spider-mite/03-observation.webp",
        "alt": "二斑叶螨：叶背的细丝，AI 生成科学情景重建",
        "title": "叶背的细丝",
        "caption": "成体与叶背细丝的放大情景重建，细丝不画成陆生蜘蛛的巨大圆网。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/two-spotted-spider-mite/04-observation.webp",
        "alt": "二斑叶螨：六足幼虫，AI 生成科学情景重建",
        "title": "六足幼虫",
        "caption": "幼虫结构重建：三对足，共六足，不能当作八足成体。非实测比例，细小附肢为近似外观。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/two-spotted-spider-mite/05-observation.webp",
        "alt": "二斑叶螨：卵、幼虫与成体，AI 生成科学情景重建",
        "title": "卵、幼虫与成体",
        "caption": "分区生活阶段示意：卵、六足幼虫和八足成体分别观察。放大重建，非实测比例。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/two-spotted-spider-mite/06-observation.webp",
        "alt": "二斑叶螨：越冬雌性的体色，AI 生成科学情景重建",
        "title": "越冬雌性的体色",
        "caption": "橙红色越冬成体雌性放大重建；体色不是确定物种或性别的独立依据。",
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
      "url": "https://www.gbif.org/species/2130185",
      "kind": "taxonomy",
      "accessedAt": "2026-10-12"
    },
    {
      "title": "佛罗里达大学 IFAS：叶螨形态与生活史",
      "url": "https://ask.ifas.ufl.edu/publication/IN307",
      "kind": "general",
      "accessedAt": "2026-10-12"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-12",
  "updatedAt": "2026-10-12"
} as const satisfies Species;

export default profile;
