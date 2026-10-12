import type { Species } from '../../types/species.ts';

const profile = {
  "id": "largescale-foureyes",
  "slug": "largescale-foureyes",
  "names": {
    "zh": "四眼鱼",
    "en": "Largescale Foureyes"
  },
  "scientificName": "Anableps anableps",
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
      "scientificName": "Actinopterygii",
      "zhName": "辐鳍鱼纲"
    },
    "order": {
      "scientificName": "Cyprinodontiformes",
      "zhName": "鳉形目"
    },
    "family": {
      "scientificName": "Anablepidae",
      "zhName": "四眼鱼科"
    },
    "genus": {
      "scientificName": "Anableps",
      "zhName": "四眼鱼属"
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
    "assessor": 'FishBase 转引 IUCN 全球评估，评估日期 2020-04-10；全球种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "freshwater",
      "marine"
    ],
    "continents": [
      "南美洲"
    ],
    "regions": [
      "南美洲北部与特立尼达沿岸"
    ],
    "countries": [
      "巴西",
      "委内瑞拉",
      "特立尼达和多巴哥"
    ],
    "range": '分布于南美洲北部和特立尼达的淡水、河口及红树林半咸水区域。国家列表列举代表记录。'
  },
  "habitats": [
    {
      "name": "河口与红树林水面",
      "realm": "freshwater",
      "description": '鱼常贴近水面，在淡水和河口红树林附近活动，随潮汐利用不同的浅水区域。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "昆虫",
      "小型无脊椎动物",
      "藻类",
      "小鱼"
    ],
    "description": '四眼鱼吃昆虫、其他小型无脊椎动物、小鱼与藻类。巴西红树林研究记录，各地点和潮汐阶段的食物组成不同，某地点以红藻为主的食谱不能代表所有种群。'
  },
  "tags": [
    "四眼鱼",
    "河口与红树林水面"
  ],
  "summary": '四眼鱼只有两只眼，每只眼的角膜与瞳孔分为上下部分，能同时接收空气和水中的光。',
  "description": '四眼鱼常贴着水面游动，身体有大鳞片和纵向条纹。它是胎生鱼，幼体在母体内发育后出生；潮汐会改变它们能进入的浅水区域。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '水面上下的两只眼睛',
      body: '头顶只有两只突出的眼，每只眼的角膜和瞳孔分成上下部分，共用一个晶状体，能接收空气与水中的光。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '河口与红树林水面',
      body: '南美洲北部与特立尼达的淡水、河口和红树林沿岸都有记录。潮汐改变可进入的浅水区域。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '食物随潮汐与地点变化',
      body: '昆虫、其他小型无脊椎动物、小鱼与藻类都在食谱中，食物组成随地点和潮汐变化。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '出生前，眼睛就在发育',
      body: '四眼鱼是胎生鱼，幼体在母体内发育后出生。2017 年研究描述了眼部结构在出生前的发育变化。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '胎生鱼中的四眼鱼',
      body: '四眼鱼的学名为 Anableps anableps，属于辐鳍鱼纲、鳉形目和四眼鱼科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '全球无危，趋势尚未确认',
      body: '全球 IUCN 等级为无危，FishBase 转引的评估日期为 2020-04-10。全球种群趋势尚未确认。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“四眼”来自两只眼中的上下分区',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Anableps anableps。它实际只有两个眼球，每只眼的角膜与瞳孔分成上下部分。2017 年发育研究描述了出生前这些结构的形成过程，因此“四眼”是外观上的称呼，不能按四个独立眼球来理解。',
    },
  ],
  "keyFacts": [
    '只有两只眼，每只眼的角膜与瞳孔分成上下部分。',
    '常贴着水面游动，同时接收水上和水下的光。',
    '身体有较大鳞片和纵向条纹。',
    '潮汐会改变可进入的浅水区域。',
    '幼体在母体内发育后出生。',
  ],
  "threats": [
    "河口与红树林栖息环境改变"
  ],
  "conservationActions": [
    "保护河口浅水与红树林",
    "用连续影像观察水面活动"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "水面上下的两只眼睛"
    }
  ],
  "media": {
    "image": "./images/species/largescale-foureyes/01-cover.webp",
    "alt": "四眼鱼及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/largescale-foureyes/02-observation.webp",
        "title": "贴近水面的身体",
        "alt": '贴近水面的身体，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。全身侧面，眼睛位于水面上下。图像尺度未经实测，单幅图只能展示姿态。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/largescale-foureyes/03-observation.webp",
        "title": "眼部与身体侧面",
        "alt": '眼部与身体侧面，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。眼部与身体侧面重建；具体角膜与瞳孔结构以原始研究图为准。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/largescale-foureyes/04-observation.webp",
        "title": "红树林根旁",
        "alt": '红树林根旁，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。河口环境重建，不表示具体采样地点。画面不能证明水域的盐度。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/largescale-foureyes/05-observation.webp",
        "title": "从前侧看两只眼睛",
        "alt": '从前侧看两只眼睛，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。找两只抬高的眼睛，勿按四个眼球计数。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/largescale-foureyes/06-observation.webp",
        "title": "浅水里的幼鱼",
        "alt": '浅水里的幼鱼，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。出生后的幼鱼外形重建，尺度非实测。图示不对应胚胎阶段，也不表示真实出生体长或一次产仔数。',
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
      "title": "FishBase：分类、分布、食性及 IUCN 评估日期",
      "url": "https://www.fishbase.se/summary/Anableps-anableps.html",
      "kind": "general",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "2017 原始研究：眼部与头骨发育",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5394668/",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "2007 原始研究：潮汐迁移与食物组成",
      "url": "https://onlinelibrary.wiley.com/doi/10.1111/j.1095-8649.2007.01313.x",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    },
    {
      title: 'GBIF：Anableps anableps 的命名作者与年份',
      url: 'https://www.gbif.org/species/2350683',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-10",
  "updatedAt": "2026-10-10"
} as const satisfies Species;

export default profile;
