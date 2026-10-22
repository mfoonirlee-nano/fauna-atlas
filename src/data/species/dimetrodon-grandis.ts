import type { Species } from '../../types/species.ts';

const profile = {
  "id": "dimetrodon-grandis",
  "slug": "dimetrodon-grandis",
  "names": {
    "zh": "大异齿龙",
    "en": "Dimetrodon grandis",
    "aliases": [
      "异齿龙"
    ]
  },
  "scientificName": "Dimetrodon grandis",
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
      "scientificName": "Synapsida",
      "zhName": "合弓纲"
    },
    "family": {
      "scientificName": "Sphenacodontidae",
      "zhName": "楔齿龙科"
    },
    "genus": {
      "scientificName": "Dimetrodon",
      "zhName": "异齿龙属"
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
      "北美洲"
    ],
    "regions": [
      "美国得克萨斯州（代表化石产区）"
    ],
    "countries": [],
    "range": "大异齿龙的代表性遗存范围为美国得克萨斯州（代表化石产区）。现代地名用于定位遗存，不表示完整古地理范围；现无活体分布，不提供当前代表坐标。"
  },
  "habitats": [
    {
      "name": "河流泛滥平原",
      "realm": "terrestrial",
      "description": "史密森学会保存的本种材料出自得克萨斯州 Clear Fork 地层。当地沉积记录可帮助研究河流与泛滥平原环境。图中沿岸缓步只展示一种可能姿态，不能据此确认日常路线或背帆调温方式。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "其他脊椎动物"
    ],
    "description": "不同大小的牙齿适于抓持和处理动物性食物，研究者据此把异齿龙解释为食肉动物。具体捕食对象需要牙齿、咬痕等证据支持，本档案不安排与恐龙追逐的场景。"
  },
  "tags": [
    "大异齿龙",
    "已灭绝",
    "早期合弓类"
  ],
  "summary": "大异齿龙背上有高帆，牙齿大小不一，属于哺乳动物支系的早期合弓类。",
  "description": "大异齿龙背上有高帆，牙齿大小不一，属于哺乳动物支系的早期合弓类。先看背上高起的轮廓，再看低矮的身体和向两侧伸出的四肢。背帆由加长的椎骨神经棘支撑，头骨深，颌内牙齿大小不同。它属于早期合弓类，生活年代早于恐龙出现；画面中的肤色和帆膜边缘含推测。馆藏材料包括头骨、牙齿、带长神经棘的椎骨及四肢骨。研究者可用这些部位检查头身比例和背帆支架；帆膜、皮肤颜色与显示行为难以从这些骨骼直接还原，背帆功能仍有讨论。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体特征开始看",
      "body": "先看背上高起的轮廓，再看低矮的身体和向两侧伸出的四肢。背帆由加长的椎骨神经棘支撑，头骨深，颌内牙齿大小不同。它属于早期合弓类，生活年代早于恐龙出现；画面中的肤色和帆膜边缘含推测。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "化石产地与古环境",
      "body": "史密森学会保存的本种材料出自得克萨斯州 Clear Fork 地层。当地沉积记录可帮助研究河流与泛滥平原环境。图中沿岸缓步只展示一种可能姿态，不能据此确认日常路线或背帆调温方式。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "牙齿与食物线索",
      "body": "不同大小的牙齿适于抓持和处理动物性食物，研究者据此把异齿龙解释为食肉动物。具体捕食对象需要牙齿、咬痕等证据支持，本档案不安排与恐龙追逐的场景。"
    },
    {
      "key": "evidence",
      "label": "遗存与复原",
      "title": "用遗存检查复原",
      "body": "馆藏材料包括头骨、牙齿、带长神经棘的椎骨及四肢骨。研究者可用这些部位检查头身比例和背帆支架；帆膜、皮肤颜色与显示行为难以从这些骨骼直接还原，背帆功能仍有讨论。"
    },
    {
      "key": "conservation",
      "label": "灭绝记录",
      "title": "时期与末次记录的区别",
      "body": "本种的代表记录属于早二叠世，今天没有活体。地层年代约束的是化石形成时期，尚不能给出最后一个大异齿龙死亡的日期。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "大异齿龙的发现与名称",
      "body": "本档案采用 Dimetrodon grandis（Case，1907），记录 Romer 与 Price 1940 年修订中的用法。哈佛馆藏还将旧名 D. maximus 的材料归入本种。Dimetrodon 指两种尺度的牙齿；“大异齿龙”用来区分本次具体物种，属名里的“龙”不表示它是恐龙。"
    }
  ],
  "keyFacts": [
    "先看背上高起的轮廓，再看低矮的身体和向两侧伸出的四肢。背帆由加长的椎骨神经棘支撑，头骨深，颌内牙齿大小不同。它属于早期合弓类，生活年代早于恐龙出现；画面中的肤色和帆膜边缘含推测。",
    "馆藏材料包括头骨、牙齿、带长神经棘的椎骨及四肢骨。研究者可用这些部位检查头身比例和背帆支架；帆膜、皮肤颜色与显示行为难以从这些骨骼直接还原，背帆功能仍有讨论。",
    "本种的代表记录属于早二叠世，今天没有活体。地层年代约束的是化石形成时期，尚不能给出最后一个大异齿龙死亡的日期。"
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
      "value": "早二叠世"
    },
    {
      "key": "status",
      "label": "记录状态",
      "value": "已灭绝"
    }
  ],
  "media": {
    "image": "./images/species/dimetrodon-grandis/01-cover.webp",
    "alt": "大异齿龙科学复原示意，AI 生成",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学复原示意",
    "gallery": [
      {
        "image": "./images/species/dimetrodon-grandis/02-observation.webp",
        "title": "全身侧面",
        "alt": "大异齿龙：全身侧面，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。先看背上高起的轮廓，再看低矮的身体和向两侧伸出的四肢。背帆由加长的椎骨神经棘支撑，头骨深，颌内牙齿大小不同。它属于早期合弓类，生活年代早于恐龙出现；画面中的肤色和帆膜边缘含推测。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/dimetrodon-grandis/03-observation.webp",
        "title": "头部外形",
        "alt": "大异齿龙：头部外形，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。观察鼻吻、头部及外部附属结构；图中不展示精确内部牙齿或骨骼。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/dimetrodon-grandis/04-observation.webp",
        "title": "前侧全身",
        "alt": "大异齿龙：前侧全身，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。馆藏材料包括头骨、牙齿、带长神经棘的椎骨及四肢骨。研究者可用这些部位检查头身比例和背帆支架；帆膜、皮肤颜色与显示行为难以从这些骨骼直接还原，背帆功能仍有讨论。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/dimetrodon-grandis/05-observation.webp",
        "title": "古环境示意",
        "alt": "大异齿龙：古环境示意，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。史密森学会保存的本种材料出自得克萨斯州 Clear Fork 地层。当地沉积记录可帮助研究河流与泛滥平原环境。图中沿岸缓步只展示一种可能姿态，不能据此确认日常路线或背帆调温方式。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/dimetrodon-grandis/06-observation.webp",
        "title": "后侧与尾部",
        "alt": "大异齿龙：后侧与尾部，AI 生成科学复原示意",
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
      "title": "史密森学会 · 大异齿龙骨骼与产地",
      "url": "https://www.si.edu/object/dimetrodon-grandis-romer-price-1940%3Anmnhpaleobiology_3451032",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "哈佛 MCZ · 本种鉴定与旧名记录",
      "url": "https://mczbase.mcz.harvard.edu/guid/MCZ%3AVP%3AVPRA-1491",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "哈佛自然历史博物馆 · 异齿龙名称与合弓类背景",
      "url": "https://whatsinaname.hmnh.harvard.edu/dimetrodon",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "PBDB · 化石分类记录",
      "url": "https://paleobiodb.org/classic/checkTaxonInfo?taxon_no=138059",
      "kind": "conservation",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "GBIF · 原始匹配，采用差异见研究记录",
      "url": "https://api.gbif.org/v1/species/match?name=Dimetrodon%20grandis",
      "kind": "taxonomy",
      "accessedAt": "2026-10-22"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-22",
  "updatedAt": "2026-10-22"
} as const satisfies Species;

export default profile;
