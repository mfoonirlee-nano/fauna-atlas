import type { Species } from '../../types/species.ts';

const profile = {
  "id": "elephant-bird",
  "slug": "elephant-bird",
  "names": {
    "zh": "大象鸟",
    "en": "Elephant Bird"
  },
  "scientificName": "Aepyornis maximus",
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
      "scientificName": "Struthioniformes",
      "zhName": "鸵鸟目"
    },
    "family": {
      "scientificName": "Aepyornithidae",
      "zhName": "象鸟科"
    },
    "genus": {
      "scientificName": "Aepyornis",
      "zhName": "象鸟属"
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
    "assessor": "依据所引遗存与研究记录；未采用独立 IUCN 评估。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "非洲"
    ],
    "regions": [
      "马达加斯加南部（历史范围）"
    ],
    "countries": [],
    "range": "马达加斯加南部为遗存记录的历史范围，不代表当前仍有活体。"
  },
  "habitats": [
    {
      "name": "干旱灌丛与草地",
      "realm": "terrestrial",
      "description": "它曾在马达加斯加南部的干旱灌丛与草地活动。它已经灭绝，图集中的自然场景属于科学复原示意。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "植物"
    ],
    "description": "蛋壳同位素为植物食物提供线索；不同象鸟类群的食谱不能全部套给本种。"
  },
  "tags": [
    "大象鸟",
    "已灭绝",
    "不会飞的鸟"
  ],
  "summary": "大象鸟身体厚重，腿骨粗壮，不能飞。它留下的巨大蛋壳，能让研究者寻找肉眼看不到的古 DNA。",
  "description": "大象鸟身体厚重，腿骨粗壮，不能飞。它留下的巨大蛋壳，能让研究者寻找肉眼看不到的古 DNA。骨骼与蛋壳支持大型地栖鸟的复原；羽色、眼色和具体姿态仍有推测。蛋壳里的 DNA 与蛋白质帮助比较类群，单凭蛋壳大小难以断定物种。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "看看身体比例",
      "body": "大象鸟身体厚重，腿骨粗壮，不能飞。它留下的巨大蛋壳，能让研究者寻找肉眼看不到的古 DNA。骨骼与蛋壳支持大型地栖鸟的复原；羽色、眼色和具体姿态仍有推测。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在地面寻找食物",
      "body": "它曾在马达加斯加南部的干旱灌丛与草地活动。它已经灭绝，图集中的自然场景属于科学复原示意。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "从喙和遗存寻找线索",
      "body": "蛋壳同位素为植物食物提供线索；不同象鸟类群的食谱不能全部套给本种。"
    },
    {
      "key": "evidence",
      "label": "遗存与复原",
      "title": "研究者依据什么复原",
      "body": "蛋壳里的 DNA 与蛋白质帮助比较类群，单凭蛋壳大小难以断定物种。"
    },
    {
      "key": "conservation",
      "label": "灭绝记录",
      "title": "区分遗存年代与灭绝时间",
      "body": "全新世晚期灭绝，不设精确灭绝年份。蛋壳样本的年代也不是最后一只鸟死亡的时间。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "大象鸟的名称与研究",
      "body": "Geoffroy Saint-Hilaire 于 1850 年命名本种。2023 年蛋壳研究建议把 Vorombe titan 暂并入本种，仍需更多证据检验；本档案不将其另计一种。"
    }
  ],
  "keyFacts": [
    "骨骼与蛋壳支持大型地栖鸟的复原；羽色、眼色和具体姿态仍有推测。",
    "蛋壳里的 DNA 与蛋白质帮助比较类群，单凭蛋壳大小难以断定物种。",
    "全新世晚期灭绝，不设精确灭绝年份。蛋壳样本的年代也不是最后一只鸟死亡的时间。"
  ],
  "threats": [
    "历史捕猎与环境变化，具体作用以研究记录为准"
  ],
  "conservationActions": [
    "保护现生鸟类及其栖息环境。",
    "保存遗存与研究记录，辨认复原图和实物。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "status",
      "label": "记录状态",
      "value": "已灭绝"
    }
  ],
  "media": {
    "image": "./images/species/elephant-bird/01-cover.webp",
    "alt": "大象鸟科学复原示意，AI 生成",
    "focalPoint": {
      "x": 0.72,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学复原示意",
    "gallery": [
      {
        "image": "./images/species/elephant-bird/02-observation.webp",
        "title": "外形与比例",
        "alt": "大象鸟：外形与比例，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。骨骼与蛋壳支持大型地栖鸟的复原；羽色、眼色和具体姿态仍有推测。 羽色与场景有推测，不作精确复原结论。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/elephant-bird/03-observation.webp",
        "title": "头部与喙",
        "alt": "大象鸟：头部与喙，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。局部外形供观察，不能从生成图测量。 羽色与场景有推测，不作精确复原结论。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/elephant-bird/04-observation.webp",
        "title": "外观模型示意",
        "alt": "大象鸟：外观模型示意，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。构想的外观模型，不对应真实馆藏或展览。 羽色与场景有推测，不作精确复原结论。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/elephant-bird/05-observation.webp",
        "title": "历史环境与取食",
        "alt": "大象鸟：历史环境与取食，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。环境与姿态为示意，不对应某次真实观察。 羽色与场景有推测，不作精确复原结论。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/elephant-bird/06-observation.webp",
        "title": "两个观察方向",
        "alt": "大象鸟：两个观察方向，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。同一种成年鸟的不同方向，非雌雄或共处关系。 羽色与场景有推测，不作精确复原结论。",
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
      "title": "CSIRO：象鸟蛋壳研究",
      "url": "https://www.csiro.au/en/news/all/articles/2023/march/elephant-birds",
      "kind": "conservation",
      "accessedAt": "2026-10-20"
    },
    {
      "title": "GBIF：学名与分类对照",
      "url": "https://www.gbif.org/species/4844156",
      "kind": "taxonomy",
      "accessedAt": "2026-10-20"
    },
    {
      "title": "2023 年象鸟蛋壳分子研究",
      "url": "https://www.nature.com/articles/s41467-023-36405-3",
      "kind": "taxonomy",
      "accessedAt": "2026-10-20"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-20",
  "updatedAt": "2026-10-20"
} as const satisfies Species;

export default profile;
