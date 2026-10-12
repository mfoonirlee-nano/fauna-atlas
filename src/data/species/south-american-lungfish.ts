import type { Species } from '../../types/species.ts';

const profile = {
  "id": "south-american-lungfish",
  "slug": "south-american-lungfish",
  "names": {
    "zh": "南美肺鱼",
    "en": "South American Lungfish"
  },
  "scientificName": "Lepidosiren paradoxa",
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
      "scientificName": "Sarcopterygii",
      "zhName": "肉鳍鱼纲"
    },
    "order": {
      "scientificName": "Ceratodontiformes",
      "zhName": "角齿鱼目"
    },
    "family": {
      "scientificName": "Lepidosirenidae",
      "zhName": "美洲肺鱼科"
    },
    "genus": {
      "scientificName": "Lepidosiren",
      "zhName": "美洲肺鱼属"
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
    "assessedYear": 2020,
    "assessor": 'FishBase 转引 IUCN 全球评估，评估日期 2020-10-21；全球种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "南美洲"
    ],
    "regions": [
      "亚马孙与巴拉圭—巴拉那水系"
    ],
    "countries": [
      "巴西",
      "玻利维亚",
      "巴拉圭",
      "阿根廷"
    ],
    "range": '分布于南美洲淡水缓流、沼泽和季节性水域，包括亚马孙及巴拉圭至巴拉那水系。'
  },
  "habitats": [
    {
      "name": "南美缓流与沼泽",
      "realm": "freshwater",
      "description": '缓流水域和沼泽供南美肺鱼生活。成体到水面呼吸空气，季节性干旱时可以进入泥中。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "软体动物",
      "小型水生动物",
      "植物性食物"
    ],
    "description": '南美肺鱼吃软体动物、其他小型水生动物和植物性食物，用齿板处理；食谱随年龄与环境变化。'
  },
  "tags": [
    "南美肺鱼",
    "南美缓流与沼泽"
  ],
  "summary": '南美肺鱼身体长，胸鳍与腹鳍各一对，像细丝。成体用肺呼吸，会到水面换气。',
  "description": '成体呈灰黑或褐色，尾端有连续的低鳍褶，幼体常带黄色斑点。它们用齿板处理食物，湿季在巢中产卵，雄性守护后代，季节性干旱时可进入泥中。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '细丝状的成对鱼鳍',
      body: '成体长，呈灰黑或褐色，胸鳍与腹鳍各一对，细长如丝，尾端有低鳍褶。幼体常有黄色斑点；这些成对结构属于鱼鳍。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '南美缓流与沼泽',
      body: '它们利用亚马孙和巴拉圭至巴拉那水系的缓流、沼泽与季节性水域，干旱时可进入泥中。不同肺鱼的泥茧结构和持续时间有差异。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '用齿板处理食物',
      body: '南美肺鱼用齿板处理软体动物等水生小动物，也吃植物性食物。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '幼体有外鳃，雄鱼护卵',
      body: '湿季在巢中产卵，雄性守护后代。幼体早期可有外鳃，成体主要用肺呼吸。繁殖期雄性鳍上细丝的功能仍有讨论，是否向卵供氧尚无定论。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '肺鱼中的南美物种',
      body: '南美肺鱼的学名为 Lepidosiren paradoxa，属于肉鳍鱼纲、角齿鱼目和美洲肺鱼科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '全球无危，趋势尚未确认',
      body: '全球 IUCN 等级为无危，FishBase 转引的评估日期为 2020-10-21。全球种群趋势尚未确认。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '细丝状的是鱼鳍，呼吸会随成长变化',
      body: 'Fitzinger 于 1837 年描述了这个物种，现用学名为 Lepidosiren paradoxa。南美肺鱼属于鱼类，细丝状胸鳍和腹鳍与蝾螈四肢不同。幼体早期可有外鳃，成体则使用肺呼吸，观察幼体和成体资料时，需要区分它们的呼吸结构。',
    },
  ],
  "keyFacts": [
    '胸鳍与腹鳍各一对，细长如丝。',
    '幼体常带黄色斑点，成体多灰黑或褐色。',
    '成体用肺呼吸，到水面换气。',
    '湿季在巢内产卵，雄性守护后代。',
    '干旱时可以进入泥中。',
  ],
  "threats": [
    "淡水湿地改变与水质退化"
  ],
  "conservationActions": [
    "保护季节性湿地与水系连通",
    "记录不同生活阶段的外形"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "细丝状的成对鱼鳍"
    }
  ],
  "media": {
    "image": "./images/species/south-american-lungfish/01-cover.webp",
    "alt": "南美肺鱼及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/south-american-lungfish/02-observation.webp",
        "title": "缓流底部的成体",
        "alt": '缓流底部的成体，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。四枚细丝状成对鳍，不是四肢。图像尺度未经实测，单幅图只能展示姿态。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/south-american-lungfish/03-observation.webp",
        "title": "头部与细胸鳍",
        "alt": '头部与细胸鳍，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。成体近景，不画幼体外鳃。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/south-american-lungfish/04-observation.webp",
        "title": "接近水面的吻部",
        "alt": '接近水面的吻部，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。换气姿态重建；呼吸过程需用连续影像观察。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/south-american-lungfish/05-observation.webp",
        "title": "带黄斑的幼鱼",
        "alt": '带黄斑的幼鱼，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。幼体体色重建，非实测尺寸。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/south-american-lungfish/06-observation.webp",
        "title": "身体后方的细腹鳍",
        "alt": '身体后方的细腹鳍，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。成对腹鳍与尾端鳍褶的外形。",
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
      "title": "FishBase：现代分类、繁殖资料限制及评估日期",
      "url": "https://www.fishbase.se/summary/Lepidosiren-paradoxa",
      "kind": "general",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "密歇根大学 ADW：分布、外形与生活史",
      "url": "https://animaldiversity.org/accounts/Lepidosiren_paradoxa/",
      "kind": "general",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "FishBase：美洲肺鱼科的当前分类归属",
      "url": "https://fishbase.se/Summary/FamilySummary.php?ID=28",
      "kind": "taxonomy",
      "accessedAt": "2026-10-10"
    },
    {
      title: 'GBIF：Lepidosiren paradoxa 的命名作者与年份',
      url: 'https://www.gbif.org/species/2441263',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-10",
  "updatedAt": "2026-10-10"
} as const satisfies Species;

export default profile;
