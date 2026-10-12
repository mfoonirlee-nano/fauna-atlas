import type { Species } from '../../types/species.ts';

const profile = {
  "id": "pygmy-hippopotamus",
  "slug": "pygmy-hippopotamus",
  "names": {
    "zh": "倭河马",
    "en": "Pygmy Hippopotamus"
  },
  "scientificName": "Choeropsis liberiensis",
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
      "scientificName": "Artiodactyla",
      "zhName": "偶蹄目"
    },
    "family": {
      "scientificName": "Hippopotamidae",
      "zhName": "河马科"
    },
    "genus": {
      "scientificName": "Choeropsis",
      "zhName": "倭河马属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "EN",
    "label": {
      "zh": "濒危",
      "en": "Endangered"
    },
    "trend": "unknown",
    "assessor": "依据所列资料中的全球等级；未单独核实评估日期"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "非洲"
    ],
    "regions": [
      "西非"
    ],
    "countries": [],
    "range": "现存种群分布在利比里亚、塞拉利昂、几内亚和科特迪瓦的森林地区，常靠近溪流与沼泽。"
  },
  "habitats": [
    {
      "name": "西非森林与溪流",
      "realm": "terrestrial",
      "description": '西非森林提供植物食物和遮蔽，溪流、沼泽及其附近隐蔽处能供倭河马休息。它们沿林间通道活动，在陆地度过较多时间。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 150,
      "max": 175,
      "unit": "cm",
      "note": "成体头体长，不含约 20 cm 的尾巴；河马专家组资料。"
    }
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "叶片",
      "草本植物",
      "落果",
      "蕨类"
    ],
    "description": "在森林中取食叶片、草本植物和落果等，更多时间在陆地活动。"
  },
  "tags": [
    "倭河马",
    "森林里的小体形河马"
  ],
  "summary": "倭河马比普通河马体型小，是河马科的另一个物种。它的眼睛没有那么突出，常独自或成对在森林和水边活动。",
  "description": '倭河马用厚嘴唇取食叶片、草本和落果，通常在夜间更活跃，也会白天活动。它白天常在水边或水中的隐蔽位置休息，潜水时能关闭耳孔和鼻孔。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '和成年河马比一比',
      body: '倭河马是河马科的独立物种，成年体型小于普通河马，眼睛也没那么突出。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '厚嘴唇取下叶子',
      body: '厚嘴唇能帮助倭河马取食植物。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '溪流里歇一歇',
      body: '白天常在水边或水中的隐蔽位置休息，森林提供遮蔽。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '小耳朵和鼻孔',
      body: '潜入水中时，倭河马能关闭耳孔和鼻孔。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '沿着林间小路走',
      body: '它沿林间通道活动，通常夜间更活跃，也会白天活动。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为濒危。森林丧失和破碎化使种群分隔，捕猎也带来威胁。保护森林与溪流周边环境是保护工作的重点。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '小体型的独立物种',
      body: 'Morton 于 1849 年描述了这个物种，现用学名为 Choeropsis liberiensis。倭河马是河马科中的独立物种，成年个体也比普通河马小。它的眼睛没那么突出，更常独自或成对在森林和水边活动，陆地生活时间较多，和普通河马的习性有差别。',
    },
  ],
  "keyFacts": [
    '倭河马是河马科的独立物种，成年体型小于普通河马，眼睛也没那么突出。',
    '厚嘴唇能帮助倭河马取食植物。',
    '白天常在水边或水中的隐蔽位置休息，森林提供遮蔽。',
    '潜入水中时，倭河马能关闭耳孔和鼻孔。',
    '它沿林间通道活动，通常夜间更活跃，也会白天活动。',
  ],
  "threats": [
    "森林砍伐",
    "农业与居民点扩张",
    "捕猎"
  ],
  "conservationActions": [
    "保护西非森林",
    "维持溪流周边生境",
    "减少捕猎并监测种群"
  ],
  "metrics": {
    "adultLengthCm": [
      150,
      175
    ]
  },
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "森林里的小体形河马"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "西非森林与溪流"
    }
  ],
  "media": {
    "image": "./images/species/pygmy-hippopotamus/01-cover.webp",
    "alt": "倭河马的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/pygmy-hippopotamus/02-observation.webp",
        "title": "和成年河马比一比",
        "alt": "成年倭河马与普通河马的体形比例示意",
        "caption": "AI 生成比例示意。左边是倭河马，右边是普通河马。图中用约 1.5 米与 3.0 米的成年头体长示意，比例约为一比二；实际个体大小会不同。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pygmy-hippopotamus/03-observation.webp",
        "title": "厚嘴唇取下叶子",
        "alt": '厚嘴唇取下叶子',
        "caption": "AI 生成科学情景重建。倭河马用厚嘴唇取食植物，看看嘴边的叶片。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pygmy-hippopotamus/04-observation.webp",
        "title": "溪流里歇一歇",
        "alt": '溪流里歇一歇',
        "caption": "AI 生成科学情景重建。白天常在水边或水中隐蔽处休息，周围的森林为它提供遮蔽。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pygmy-hippopotamus/05-observation.webp",
        "title": "小耳朵和鼻孔",
        "alt": '小耳朵和鼻孔',
        "caption": "AI 生成科学情景重建。找找小圆耳朵与鼻孔。潜入水中时，它能关闭耳孔和鼻孔。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pygmy-hippopotamus/06-observation.webp",
        "title": "沿着林间小路走",
        "alt": '沿着林间小路走',
        "caption": "AI 生成科学情景重建。倭河马会沿林间通道活动，通常在夜间更活跃，也会在白天活动。",
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
      "title": "Pygmy Hippopotamus：分类与生态资料",
      "url": "https://www.hipposg.org/pygmy-hippopotamus",
      "kind": "taxonomy",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "Pygmy Hippopotamus：保护状况",
      "url": "https://www.hipposg.org/pygmy-hippopotamus",
      "kind": "conservation",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "倭河马：形态与生活习性",
      "url": "https://www.hipposg.org/pygmy-hippopotamus",
      "kind": "ecology",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "河马专家组：普通河马成年头体长（比较图依据）",
      "url": "https://www.hipposg.org/common-hippopotamus",
      "kind": "general",
      "accessedAt": "2026-09-16"
    },
    {
      title: 'GBIF：Choeropsis liberiensis 的命名作者与年份',
      url: 'https://www.gbif.org/species/5787064',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-16",
  "updatedAt": "2026-09-16"
} as const satisfies Species;

export default profile;
