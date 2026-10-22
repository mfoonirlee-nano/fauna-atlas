import type { Species } from '../../types/species.ts';

const profile = {
  "id": "dire-wolf",
  "slug": "dire-wolf",
  "names": {
    "zh": "重型恐狼",
    "en": "Dire Wolf",
    "aliases": [
      "恐狼",
      "Canis dirus"
    ]
  },
  "scientificName": "Aenocyon dirus",
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
      "scientificName": "Carnivora",
      "zhName": "食肉目"
    },
    "family": {
      "scientificName": "Canidae",
      "zhName": "犬科"
    },
    "genus": {
      "scientificName": "Aenocyon",
      "zhName": "恐狼属"
    }
  },
  "conservation": {
    "system": "Historical and fossil evidence",
    "code": "EX",
    "label": {
      "zh": "已灭绝",
      "en": "Extinct"
    },
    "trend": "unknown",
    "assessor": "依据所引博物馆资料与化石研究；未采用独立 IUCN 评估。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "北美洲",
      "南美洲"
    ],
    "regions": [
      "美洲（化石范围，以北美研究材料为主）"
    ],
    "countries": [],
    "range": "重型恐狼的代表性遗存范围为美洲（化石范围，以北美研究材料为主）。现代地名用于定位遗存，不表示完整古地理范围；现无活体分布，不提供当前代表坐标。"
  },
  "habitats": [
    {
      "name": "开阔林地与草原",
      "realm": "terrestrial",
      "description": "北美许多更新世遗址留下它的骨骼，拉布雷亚的材料尤其丰富。这里用开阔林地与草地示意环境；同一遗址发现许多个体并不等于一次完整狼群活动的直接记录。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "大型哺乳动物"
    ],
    "description": "颌骨和牙齿支持它取食大型哺乳动物的解释。研究者会比较牙齿磨耗、同位素与同地猎物遗存，推断取食范围；复原图不指定固定猎物，也不展示没有证据的围猎队形。"
  },
  "tags": [
    "重型恐狼",
    "已灭绝",
    "古哺乳动物"
  ],
  "summary": "重型恐狼有粗壮颌骨和结实身体，古 DNA 帮助研究者重新认识它与灰狼的关系。",
  "description": "重型恐狼有粗壮颌骨和结实身体，古 DNA 帮助研究者重新认识它与灰狼的关系。先观察较宽厚的吻部与结实躯干，再比较四肢和尾部。骨架总体像狼，牙齿和颌骨提供更细的区别；图中棕灰毛色、耳形和毛量属于保守复原，不能单凭外观判定物种。2021 年古 DNA 研究支持恐狼具有独特谱系，并重新使用 Aenocyon 属名。2026 年古基因组研究提出更复杂的混合祖源，说明亲缘结论会随材料改变；本档案保留来源差异，不把它说成放大的灰狼。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体特征开始看",
      "body": "先观察较宽厚的吻部与结实躯干，再比较四肢和尾部。骨架总体像狼，牙齿和颌骨提供更细的区别；图中棕灰毛色、耳形和毛量属于保守复原，不能单凭外观判定物种。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "化石产地与古环境",
      "body": "北美许多更新世遗址留下它的骨骼，拉布雷亚的材料尤其丰富。这里用开阔林地与草地示意环境；同一遗址发现许多个体并不等于一次完整狼群活动的直接记录。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "牙齿与食物线索",
      "body": "颌骨和牙齿支持它取食大型哺乳动物的解释。研究者会比较牙齿磨耗、同位素与同地猎物遗存，推断取食范围；复原图不指定固定猎物，也不展示没有证据的围猎队形。"
    },
    {
      "key": "evidence",
      "label": "遗存与复原",
      "title": "用遗存检查复原",
      "body": "2021 年古 DNA 研究支持恐狼具有独特谱系，并重新使用 Aenocyon 属名。2026 年古基因组研究提出更复杂的混合祖源，说明亲缘结论会随材料改变；本档案保留来源差异，不把它说成放大的灰狼。"
    },
    {
      "key": "conservation",
      "label": "灭绝记录",
      "title": "时期与末次记录的区别",
      "body": "重型恐狼是更新世末消失的犬科动物。现有化石与古 DNA 支持已灭绝状态；将现代灰狼进行基因编辑的动物不能作为本物种仍有野外分布的记录。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "重型恐狼的发现与名称",
      "body": "Leidy 于 1858 年描述的恐狼长期使用 Canis dirus 名称。Merriam 在 1918 年提出 Aenocyon，2021 年研究重新采用；本档案用 Aenocyon dirus，并把 Canis dirus 保留为检索别名，不重复计数。"
    }
  ],
  "keyFacts": [
    "先观察较宽厚的吻部与结实躯干，再比较四肢和尾部。骨架总体像狼，牙齿和颌骨提供更细的区别；图中棕灰毛色、耳形和毛量属于保守复原，不能单凭外观判定物种。",
    "2021 年古 DNA 研究支持恐狼具有独特谱系，并重新使用 Aenocyon 属名。2026 年古基因组研究提出更复杂的混合祖源，说明亲缘结论会随材料改变；本档案保留来源差异，不把它说成放大的灰狼。",
    "重型恐狼是更新世末消失的犬科动物。现有化石与古 DNA 支持已灭绝状态；将现代灰狼进行基因编辑的动物不能作为本物种仍有野外分布的记录。"
  ],
  "threats": [],
  "conservationActions": [
    "保存化石及其地层、产地和测年资料。",
    "区分原始化石、复制件与科学复原示意。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "period",
      "label": "代表时期",
      "value": "更新世"
    },
    {
      "key": "status",
      "label": "记录状态",
      "value": "已灭绝"
    }
  ],
  "media": {
    "image": "./images/species/dire-wolf/01-cover.webp",
    "alt": "重型恐狼科学复原示意，AI 生成",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学复原示意",
    "gallery": [
      {
        "image": "./images/species/dire-wolf/02-observation.webp",
        "title": "全身侧面",
        "alt": "重型恐狼：全身侧面，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。先观察较宽厚的吻部与结实躯干，再比较四肢和尾部。骨架总体像狼，牙齿和颌骨提供更细的区别；图中棕灰毛色、耳形和毛量属于保守复原，不能单凭外观判定物种。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/dire-wolf/03-observation.webp",
        "title": "头部外形",
        "alt": "重型恐狼：头部外形，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。观察鼻吻、头部及外部附属结构；图中不展示精确内部牙齿或骨骼。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/dire-wolf/04-observation.webp",
        "title": "前侧全身",
        "alt": "重型恐狼：前侧全身，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。2021 年古 DNA 研究支持恐狼具有独特谱系，并重新使用 Aenocyon 属名。2026 年古基因组研究提出更复杂的混合祖源，说明亲缘结论会随材料改变；本档案保留来源差异，不把它说成放大的灰狼。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/dire-wolf/05-observation.webp",
        "title": "古环境示意",
        "alt": "重型恐狼：古环境示意，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。北美许多更新世遗址留下它的骨骼，拉布雷亚的材料尤其丰富。这里用开阔林地与草地示意环境；同一遗址发现许多个体并不等于一次完整狼群活动的直接记录。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/dire-wolf/06-observation.webp",
        "title": "后侧与尾部",
        "alt": "重型恐狼：后侧与尾部，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。观察后肢、尾部与背线，姿态不表示已确认的固定行为。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      }
    ]
  },
  "sources": [
    {
      "title": "Perri 等 2021 · 恐狼古 DNA 原始研究",
      "url": "https://doi.org/10.1038/s41586-020-03082-x",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "Queen Mary 大学 · 恐狼属名与古 DNA",
      "url": "https://www.qmul.ac.uk/news/latest-news/2021/se/ancient-dna-from-extinct-dire-wolves-reveals-their-unique-evolutionary-history.html",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "2026 · 恐狼祖源与演化古基因组研究",
      "url": "https://pubmed.ncbi.nlm.nih.gov/42508403",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "拉布雷亚沥青坑博物馆 · 冰期动物教学材料",
      "url": "https://tarpits.org/sites/default/files/2019-03/lbtp_return_to_ice_age.pdf",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "PBDB · 化石分类记录",
      "url": "https://paleobiodb.org/classic/checkTaxonInfo?taxon_no=44837",
      "kind": "conservation",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "GBIF · 原始匹配，采用差异见研究记录",
      "url": "https://api.gbif.org/v1/species/match?name=Aenocyon%20dirus",
      "kind": "taxonomy",
      "accessedAt": "2026-10-22"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-22",
  "updatedAt": "2026-10-22"
} as const satisfies Species;

export default profile;
