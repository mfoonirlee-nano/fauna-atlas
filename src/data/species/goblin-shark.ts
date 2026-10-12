import type { Species } from '../../types/species.ts';

const profile = {
  "id": "goblin-shark",
  "slug": "goblin-shark",
  "names": {
    "zh": "欧氏尖吻鲨",
    "en": "Goblin Shark"
  },
  "scientificName": "Mitsukurina owstoni",
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
      "scientificName": "Chondrichthyes",
      "zhName": "软骨鱼纲"
    },
    "order": {
      "scientificName": "Lamniformes",
      "zhName": "鼠鲨目"
    },
    "family": {
      "scientificName": "Mitsukurinidae",
      "zhName": "剑吻鲨科"
    },
    "genus": {
      "scientificName": "Mitsukurina",
      "zhName": "尖吻鲨属"
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
      "marine"
    ],
    "continents": [],
    "regions": [
      "大西洋、印度洋与太平洋的深水陆坡"
    ],
    "countries": [
      "日本",
      "澳大利亚",
      "新西兰",
      "美国"
    ],
    "range": '多个大洋的部分深水陆坡和海底峡谷有记录。'
  },
  "habitats": [
    {
      "name": "深水陆坡与海底峡谷",
      "realm": "marine",
      "description": '多个大洋的深水陆坡与海底峡谷，野外遇见记录较少。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鱼类",
      "头足类",
      "甲壳类"
    ],
    "description": "取食鱼类、头足类与甲壳类等动物。2016 年研究分析了两条鲨鱼的五次摄食影像，记录了颌部快速前伸；图库只展示动作的教学姿态，不提供运动速度测量。"
  },
  "tags": [
    "欧氏尖吻鲨",
    "深水陆坡与海底峡谷"
  ],
  "summary": '欧氏尖吻鲨在深水捕食，细长扁吻位于嘴上方。平时收颌，取食时颌可快速前伸，动作已有原始影像研究。',
  "description": '欧氏尖吻鲨在多个大洋的深水陆坡、海底峡谷记录到，取食鱼、头足类和甲壳动物。细长扁吻在嘴上方，身体常粉灰色，眼小，有五对鳃裂与两枚低背鳍。平时颌部收回，捕食时能快速前伸，2016 年原始影像研究记录了这一动作；繁殖细节仍有限。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '长吻下方可前伸的颌',
      body: '吻部细长而扁，位于嘴上方，身体常呈粉灰色，眼睛小，具有五对鳃裂与两枚低背鳍。休息时颌部收回；伸颌姿态属于取食动作的一部分，不能把持续外伸的嘴当作普通游泳外形。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '深水陆坡与海底峡谷',
      body: '多个大洋的深水陆坡和海底峡谷有记录，野外较少遇见。国家列表列代表地点，重建图不能证明地点或水深。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '取食鱼类、头足类与甲壳类等动物。2016 年研究分析了两条鲨鱼的五次摄食影像，记录了颌部快速前伸；图库只展示动作的教学姿态，不提供运动速度测量。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '繁殖和早期生活史资料有限，胚胎在母体内发育的说法仍属于推测。幼体图只重建外形，不能说明出生体长、妊娠期或繁殖周期。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种为 Mitsukurina owstoni，属于鼠鲨目、剑吻鲨科。分类图谱说明归属，不表示演化发生的时间。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '先找图中可见的特点',
      body: '保留深水海域，减少对罕见鲨鱼的干扰。长吻、收颌与伸颌姿态可结合图比较，摄食动作和速度需看原始研究影像。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '一份标本连起三个研究者',
      body: 'Jordan 在 1898 年发表 Mitsukurina owstoni 的科学描述。Alan Owston 提供标本，日本动物学家 Kakichi Mitsukuri 将它交给 Jordan 研究，属名纪念 Mitsukuri，种名纪念 Owston；中文“欧氏”保留后者的线索。长吻与能前伸的颌是两个不同结构，名字里的“尖吻”提示长吻外形。',
    },
  ],
  "keyFacts": [
    '吻部细长而扁，位于嘴上方，身体常呈粉灰色，眼睛小，具有五对鳃裂与两枚低背鳍。休息时颌部收回；伸颌姿态属于取食动作的一部分，不能把持续外伸的嘴当作普通游泳外形。',
    '繁殖和早期生活史资料有限，胚胎在母体内发育的说法仍属于推测。幼体图只重建外形，不能说明出生体长、妊娠期或繁殖周期。',
    '图片为 AI 科学情景重建，尺度非实测；静图不代表连续动作。',
  ],
  "threats": [
    "深水拖网、延绳钓与刺网的兼捕"
  ],
  "conservationActions": [
    "记录兼捕及深水栖息环境",
    "持续研究繁殖与种群资料"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "长吻下方可前伸的颌"
    }
  ],
  "media": {
    "image": "./images/species/goblin-shark/01-cover.webp",
    "alt": "欧氏尖吻鲨及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/goblin-shark/02-observation.webp",
        "title": "收颌时的全身侧面",
        "alt": "欧氏尖吻鲨：收颌时的全身侧面，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。常态外形重建，长吻与嘴分开观察。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/goblin-shark/03-observation.webp",
        "title": "长吻与小眼睛",
        "alt": "欧氏尖吻鲨：长吻与小眼睛，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。头部侧面放大，吻部不是锯齿状武器。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/goblin-shark/04-observation.webp",
        "title": "颌部前伸姿态",
        "alt": "欧氏尖吻鲨：颌部前伸姿态，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。摄食姿态教学重建；动作与速度以原始影像研究为依据。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/goblin-shark/05-observation.webp",
        "title": "陆坡上方的身体",
        "alt": "欧氏尖吻鲨：陆坡上方的身体，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。完整身体与两枚低背鳍重建，人工照明不表示自然光照。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/goblin-shark/06-observation.webp",
        "title": "幼体的外形",
        "alt": "欧氏尖吻鲨：幼体的外形，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼体科学重建，非已知出生体长或真实个体记录。",
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
      "title": "佛罗里达博物馆：分类、形态、分布及繁殖资料限制",
      "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/goblin-shark/",
      "kind": "general",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "Nakaya 等 2016：颌部前伸的原始影像分析",
      "url": "https://www.nature.com/articles/srep27786",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    },
    {
      title: 'ETYFish：欧氏尖吻鲨的标本与命名人物',
      url: 'https://etyfish.org/ETYFish_Mitsukurinidae.pdf',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-10",
  "updatedAt": "2026-10-10"
} as const satisfies Species;

export default profile;
