import type { Species } from '../../types/species.ts';

const profile = {
  "id": "frilled-lizard",
  "slug": "frilled-lizard",
  "names": {
    "zh": "伞蜥",
    "en": "Frilled Lizard",
    "aliases": [
      "褶伞蜥",
      "澳洲伞蜥"
    ]
  },
  "scientificName": "Chlamydosaurus kingii",
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
      "scientificName": "Reptilia",
      "zhName": "爬行纲"
    },
    "order": {
      "scientificName": "Squamata",
      "zhName": "有鳞目"
    },
    "family": {
      "scientificName": "Agamidae",
      "zhName": "鬣蜥科"
    },
    "genus": {
      "scientificName": "Chlamydosaurus",
      "zhName": "伞蜥属"
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
    "assessor": "IUCN；全球等级见来源，独立评估日期与全球趋势未核实"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "大洋洲"
    ],
    "regions": [
      "澳大利亚北部",
      "新几内亚南部"
    ],
    "countries": [
      "澳大利亚",
      "巴布亚新几内亚",
      "印度尼西亚"
    ],
    "range": "分布于澳大利亚北部和新几内亚南部，常在开阔林地的树干上活动。",
    "center": {
      "lat": -14,
      "lng": 133
    }
  },
  "habitats": [
    {
      "name": "热带稀树草原与开阔林地",
      "realm": "terrestrial",
      "description": '开阔林地和稀树草原的树干提供停留、隐蔽和逃避危险的位置。它们常下到地面捕食昆虫，雨季食物丰富时更活跃。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "白蚁",
      "蚂蚁",
      "蝗虫"
    ],
    "description": "伞蜥主要捕食昆虫，也会吃其他小型动物，常从树上来到地面觅食。"
  },
  "activity": [
    "主要在白天活动"
  ],
  "tags": [
    "伞蜥",
    "脖子周围展开一圈皮肤"
  ],
  "summary": "伞蜥平时收拢颈部皮褶，遇到威胁时会张嘴并展开皮褶。它常停在树干上，灰褐色身体与树皮相近。",
  "description": '伞蜥大部分时间停在树上，长脚趾和爪能抓住树皮，身后拖着长尾巴。逃跑时，它能抬起前肢，用两条后腿跑向树木，再爬上树干。',
  "storySections": [
    {
      key: 'frill',
      label: '生活与认识',
      title: '脖子周围展开一圈皮肤',
      body: '伞蜥遇到威胁时张嘴并展开颈褶，使身体显得更大，也用颈褶与同类交流。观察活体时不要为看它展开颈褶而惊吓它。',
    },
    {
      key: 'rest',
      label: '生活与认识',
      title: '平时把颈褶收起来',
      body: '休息时，伞蜥把颈褶收在颈侧和肩旁，灰褐色身体与树皮相近。',
    },
    {
      key: 'climb',
      label: '生活与认识',
      title: '用爪抓着树皮',
      body: '伞蜥大部分时间在树上，长脚趾和爪帮助它抓住树皮。',
    },
    {
      key: 'run',
      label: '生活与认识',
      title: '用后腿跑向藏身处',
      body: '快速移动时，伞蜥能抬起前肢，用两条后腿奔跑。它常逃向附近树木，再爬上树干。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '来到地面找昆虫',
      body: '它会从树上下来寻找蚂蚁、白蚁和其他昆虫。雨季食物较丰富，它也常更活跃。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '保留能攀爬的树林',
      body: '伞蜥全球属无危。保留林地树木和地面的植被，有助于它们寻找食物、躲避危险。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '像伞一样展开的颈褶',
      body: 'Gray 于 1825 年描述了这个物种，现用学名为 Chlamydosaurus kingii。“伞蜥”对应宽大的颈部皮褶。它遇到威胁时展开颈褶，平时将皮褶收起；澳大利亚北领地的介绍还记录，它们在干季减少活动，雨季开始后更容易见到。',
    },
  ],
  "keyFacts": [
    "伞蜥遇到威胁时能展开颈褶，让身体显得更大。",
    "休息时，它把颈褶收在颈侧和肩旁。",
    "伞蜥大部分时间在树上，长脚趾和爪帮助它抓住树皮。",
    "快速移动时，伞蜥能抬起前肢，用两条后腿奔跑。",
    "它会从树上下来寻找蚂蚁、白蚁和其他昆虫。"
  ],
  "threats": [
    "林地栖息地改变",
    "局部野外捕捉"
  ],
  "conservationActions": [
    "保护开阔林地",
    "减少野外捕捉和干扰"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "脖子周围展开一圈皮肤"
    },
    {
      "key": "food",
      "label": "主要食物",
      "value": "白蚁"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "热带稀树草原与开阔林地"
    }
  ],
  "media": {
    "image": "./images/species/frilled-lizard/01-cover.webp",
    "alt": "树干上的伞蜥和长尾",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/frilled-lizard/02-observation.webp",
        "title": "展开颈褶",
        "alt": "伞蜥张嘴展开颈部皮褶，身体和长尾巴可见",
        "caption": 'AI 生成科学情景重建。伞蜥张嘴展开颈部皮褶，身体和长尾巴可见。与封面分别生成，用于比较颈褶开合，不能当作同一次动作的连续实拍。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/frilled-lizard/03-observation.webp",
        "title": "收拢颈褶休息",
        "alt": "伞蜥沿树皮休息，颈褶贴在颈侧",
        "caption": "AI 生成科学情景重建。伞蜥沿树皮休息，颈褶贴在颈侧。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/frilled-lizard/04-observation.webp",
        "title": "抓住树皮向上爬",
        "alt": "伞蜥四肢抓住树干，长尾巴向下延伸",
        "caption": "AI 生成科学情景重建。伞蜥四肢抓住树干，长尾巴向下延伸。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/frilled-lizard/05-observation.webp",
        "title": "抬起前肢奔跑",
        "alt": "伞蜥在林地用后腿奔跑，前肢抬起",
        "caption": "AI 生成科学情景重建。伞蜥在林地用后腿奔跑，前肢抬起。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/frilled-lizard/06-observation.webp",
        "title": "地面上的昆虫",
        "alt": "伞蜥在落叶旁朝向一只蝗虫",
        "caption": "AI 生成科学情景重建。伞蜥在落叶旁朝向一只蝗虫。",
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
      "title": "The Reptile Database：伞蜥分类与分布",
      "url": "https://reptile-database.reptarium.cz/Chlamydosaurus/kingii",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Animal Diversity Web：伞蜥颈褶与生活史",
      "url": "https://animaldiversity.org/accounts/Chlamydosaurus_kingii/",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "澳大利亚北领地政府：伞蜥观察资料",
      "url": "https://nt.gov.au/__data/assets/pdf_file/0007/200032/frilled-lizard.pdf",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Potawatomi Zoo：伞蜥保护等级",
      "url": "https://potawatomizoo.org/animal/frilled-lizard/",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Chlamydosaurus kingii 的命名作者与年份',
      url: 'https://www.gbif.org/species/2466087',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
