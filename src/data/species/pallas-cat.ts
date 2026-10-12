import type { Species } from '../../types/species.ts';

const profile = {
  "id": "pallas-cat",
  "slug": "pallas-cat",
  "names": {
    "zh": "兔狲",
    "en": "Pallas's Cat"
  },
  "scientificName": "Otocolobus manul",
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
      "scientificName": "Felidae",
      "zhName": "猫科"
    },
    "genus": {
      "scientificName": "Otocolobus",
      "zhName": "兔狲属"
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
    "assessor": '全球等级为 LC（无危），评估日期为 2019-11-06；2020 年发布勘误版。猫科专家组网页仍有旧 NT（近危）文字，等级据全球评估原文。',
    "assessedYear": 2019
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "中亚及周边山地草原，包括蒙古、中国和俄罗斯南部等地区"
    ],
    "countries": [],
    "range": "中亚及周边山地草原，包括蒙古、中国和俄罗斯南部等地区；主要见于有岩石遮蔽的草原和山地灌丛。"
  },
  "habitats": [
    {
      "name": "有岩石遮蔽的草原和山地灌丛",
      "realm": "terrestrial",
      "description": '中亚及周边有岩石遮蔽的草原、山地灌丛，包括蒙古、中国及俄罗斯南部等地。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鼠兔",
      "啮齿动物",
      "小型鸟类"
    ],
    "description": "食物包括鼠兔、啮齿动物、小型鸟类。"
  },
  "tags": [
    "兔狲",
    "有岩石遮蔽的草原和山地灌丛"
  ],
  "summary": '兔狲常在晨昏寻找鼠兔等小动物，利用草石和洞穴藏身。厚毛、粗尾和宽脸两侧的低位圆耳容易辨认。',
  "description": '兔狲生活在中亚及周边山地草原，厚毛包住短腿和粗尾，圆耳位于宽脸较低的位置。它捕食鼠兔、啮齿动物和小鸟，常在晨昏活动，也会在其他时段出现。岩石、草丛和洞穴提供隐蔽与休息处。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '低低的圆耳朵',
      body: '两只小圆耳朵分在宽脸两侧。先找到眼睛，再看看耳朵比头顶低多少。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '厚毛下面的短腿',
      body: '长而密的毛让身体显得蓬松。看它站起来的样子，找找肚子下面的四条短腿。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '粗尾巴上的环纹',
      body: '兔狲的尾巴粗厚，末端颜色深。沿着尾巴找找几道深色环纹，不用环纹根数判断个体。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '在草石之间移动',
      body: '兔狲常在晨昏活动，也会在其他时段出现。岩石和草丛能为它提供遮蔽，图中展示行走姿势。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '岩缝旁的休息处',
      body: '它会利用岩缝、洞穴和其他动物留下的洞穴藏身。看看身体怎样靠近石头，耳朵还露在什么位置。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保留草原上的岩石、灌丛和洞穴。兔狲是野生猫科动物，共读时用图片观察，不追赶或投喂。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '英文名称保留描述者的名字',
      body: 'Pallas 在 1776 年以 Felis manul 发表了兔狲的科学描述，今天采用 Otocolobus manul。英文名称 Pallas’s Cat 保留了这位描述者的名字，Manul 也仍是常用名称。厚毛使它看起来更蓬松，粗尾带深色环纹，辨认时不能只数环纹。',
    },
  ],
  "keyFacts": [
    "两只小圆耳朵分在宽脸两侧。先找到眼睛，再看看耳朵比头顶低多少。",
    "长而密的毛让身体显得蓬松。看它站起来的样子，找找肚子下面的四条短腿。",
    "兔狲的尾巴粗厚，末端颜色深。沿着尾巴找找几道深色环纹，不用环纹根数判断个体。",
    "兔狲常在晨昏活动，也会在其他时段出现。岩石和草丛能为它提供遮蔽，图中展示行走姿势。",
    "它会利用岩缝、洞穴和其他动物留下的洞穴藏身。看看身体怎样靠近石头，耳朵还露在什么位置。"
  ],
  "threats": [
    "栖息地干扰与破碎化",
    "猎物减少"
  ],
  "conservationActions": [
    "保留草原上的岩石、灌丛和洞穴。兔狲是野生猫科动物，共读时用图片观察，不追赶或投喂。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "有岩石遮蔽的草原和山地灌丛"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "低低的圆耳朵"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "无危",
      "note": 'IUCN 的全球评估日期为 2019-11-06，2020 年发布勘误版，等级为无危。Cat Specialist Group 物种页仍留有旧近危文字，以评估原文为准。'
    }
  ],
  "media": {
    "image": "./images/species/pallas-cat/01-cover.webp",
    "alt": "兔狲及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/pallas-cat/02-observation.webp",
        "alt": "兔狲：低低的圆耳朵",
        "title": "低低的圆耳朵",
        "caption": "AI 生成科学情景重建。两只小圆耳朵分在宽脸两侧。先找到眼睛，再看看耳朵比头顶低多少。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pallas-cat/03-observation.webp",
        "alt": "兔狲：厚毛下面的短腿",
        "title": "厚毛下面的短腿",
        "caption": "AI 生成科学情景重建。长而密的毛让身体显得蓬松。看它站起来的样子，找找肚子下面的四条短腿。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pallas-cat/04-observation.webp",
        "alt": "兔狲：粗尾巴上的环纹",
        "title": "粗尾巴上的环纹",
        "caption": "AI 生成科学情景重建。兔狲的尾巴粗厚，末端颜色深。沿着尾巴找找几道深色环纹，不用环纹根数判断个体。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pallas-cat/05-observation.webp",
        "alt": "兔狲：在草石之间移动",
        "title": "在草石之间移动",
        "caption": "AI 生成科学情景重建。兔狲常在晨昏活动，也会在其他时段出现。岩石和草丛能为它提供遮蔽，图中展示行走姿势。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pallas-cat/06-observation.webp",
        "alt": "兔狲：岩缝旁的休息处",
        "title": "岩缝旁的休息处",
        "caption": "AI 生成科学情景重建。它会利用岩缝、洞穴和其他动物留下的洞穴藏身。看看身体怎样靠近石头，耳朵还露在什么位置。",
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
      "title": "IUCN：Otocolobus manul，2019 评估、2020 勘误版",
      "url": "https://pallascats.org/wp-content/uploads/2021/06/10.2305_IUCN.UK_.2020-2.RLTS_.T15640A180145377.en_.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-25"
    },
    {
      "title": "IUCN Cat Specialist Group：兔狲形态与生态",
      "url": "https://www.catsg.org/living-species-pallasscat",
      "kind": "ecology",
      "accessedAt": "2026-09-25"
    },
    {
      title: '哺乳动物多样性数据库：兔狲的原名',
      url: 'https://www.mammaldiversity.org/taxon/1006010/',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-25",
  "updatedAt": "2026-09-25"
} as const satisfies Species;

export default profile;
