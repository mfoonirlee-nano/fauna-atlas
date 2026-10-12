import type { Species } from '../../types/species.ts';

const profile = {
  "id": "eurasian-woodcock",
  "slug": "eurasian-woodcock",
  "names": {
    "zh": "丘鹬",
    "en": "Eurasian Woodcock"
  },
  "scientificName": "Scolopax rusticola",
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
      "scientificName": "Charadriiformes",
      "zhName": "鸻形目"
    },
    "family": {
      "scientificName": "Scolopacidae",
      "zhName": "鹬科"
    },
    "genus": {
      "scientificName": "Scolopax",
      "zhName": "丘鹬属"
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
    "assessor": '全球保护等级及评估年份尚未确认；NE 表示资料不完整，不表示本种安全或实际未受评估。全球种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "欧亚大陆的林地"
    ],
    "countries": [],
    "range": '欧亚大陆的部分林地。'
  },
  "habitats": [
    {
      "name": "湿润林地",
      "realm": "terrestrial",
      "description": '欧亚大陆有湿润土壤、落叶和植被遮蔽的林地。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "蚯蚓",
      "甲虫",
      "蜘蛛等小型无脊椎动物"
    ],
    "description": '用长嘴探入土壤，摄食蚯蚓和其他小型无脊椎动物。'
  },
  "tags": [
    "丘鹬",
    "湿润林地"
  ],
  "summary": '丘鹬白天藏在林地植被下，傍晚和夜间用长嘴探土找蚯蚓。高而偏后的眼睛和落叶般羽纹容易观察。',
  "description": '丘鹬在欧亚大陆湿润林地生活，白天常隐蔽在植被下，傍晚和夜间用长直嘴探土，寻找蚯蚓等小型无脊椎动物。身体圆厚、腿短，眼睛较高且偏后，褐黑与浅色羽纹能融入落叶。它在地面隐蔽处筑巢，雏鸟孵出后能离巢活动。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '长嘴和高位眼睛',
      body: '丘鹬身体圆厚，腿较短，嘴长而直。眼睛位于头部较高且偏后的位置，褐色、黑色与浅色羽纹在落叶间难以辨认。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '湿润林地',
      body: '它在林地湿润土壤中寻找食物，白天常隐蔽在植被下，傍晚和夜间活动。英国地区保护标签与全球等级的范围不同。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '它用长嘴探入土壤摄食蚯蚓和其他小型无脊椎动物。图中嘴的位置展示取食情景，不能证明地下猎物的实际位置。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '它在地面隐蔽处筑巢，雏鸟孵出后能离巢活动。成鸟与雏鸟同框是阶段重建，不表示一次实测育幼记录。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种为 Scolopax rusticola，属于鸻形目、鹬科。分类图谱说明归属，不表示演化发生的时间。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '先看图，再读资料',
      body: '保留湿润林地的落叶层与地面隐蔽空间，远距离观察，不惊动巢区。长嘴、高位眼睛和保护色可结合图与资料认识。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '暮色中的飞行让调查者找到它',
      body: 'Linnaeus 在 1758 年发表 Scolopax rusticola 的科学描述，英文 Eurasian Woodcock 提示欧亚林地的这种鸟。繁殖雄鸟会在暮色中作称为 roding 的展示飞行，边飞边发出声音。英国鸟类学信托用这类飞行调查繁殖丘鹬，因为白天藏在落叶间的个体很难发现。',
    },
  ],
  "keyFacts": [
    '丘鹬身体圆厚，腿较短，嘴长而直。眼睛位于头部较高且偏后的位置，褐色、黑色与浅色羽纹在落叶间难以辨认。',
    '它在地面隐蔽处筑巢，雏鸟孵出后能离巢活动。成鸟与雏鸟同框是阶段重建，不表示一次实测育幼记录。',
    '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。',
  ],
  "threats": [
    '栖息地改变与人为干扰；全球物种级威胁排序尚未确认。',
  ],
  "conservationActions": [
    "保留自然隐蔽空间，观察时保持距离，不捕捉、翻动或诱发行为。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "湿润林地"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "长嘴和高位眼睛"
    }
  ],
  "media": {
    "image": "./images/species/eurasian-woodcock/01-cover.webp",
    "alt": "丘鹬及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/eurasian-woodcock/02-observation.webp",
        "title": "头后的眼睛",
        "alt": "丘鹬：头后的眼睛，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。完整长嘴和高位眼睛的头部重建。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-woodcock/03-observation.webp",
        "title": "长嘴探进湿土",
        "alt": "丘鹬：长嘴探进湿土，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。探土情景，摄食动作需看连续影像。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-woodcock/04-observation.webp",
        "title": "落叶间的羽纹",
        "alt": "丘鹬：落叶间的羽纹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。先沿羽毛和落叶找身体边界。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-woodcock/05-observation.webp",
        "title": "傍晚的林缘",
        "alt": "丘鹬：傍晚的林缘，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。情景照明，不代表固定活动时间。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-woodcock/06-observation.webp",
        "title": "地面上的雏鸟",
        "alt": "丘鹬：地面上的雏鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。雏鸟阶段重建，非实测比例。",
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
      "title": "RSPB：丘鹬识别与林地生活",
      "url": "https://www.rspb.org.uk/birds-and-wildlife/woodcock",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "GBIF：接受学名与分类定位",
      "url": "https://www.gbif.org/species/2481700",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      title: 'BTO：用暮色展示飞行调查丘鹬',
      url: 'https://www.bto.org/learn/about-birds/birdfacts/woodcock',
      kind: 'ecology',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
