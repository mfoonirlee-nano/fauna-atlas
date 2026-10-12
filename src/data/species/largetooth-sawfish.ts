import type { Species } from '../../types/species.ts';

const profile = {
  "id": "largetooth-sawfish",
  "slug": "largetooth-sawfish",
  "names": {
    "zh": "锯鲛",
    "en": "Largetooth Sawfish",
    "aliases": [
      "大齿锯鳐",
      "淡水锯鳐",
      "Pristis microdon",
      "Pristis perotteti"
    ]
  },
  "scientificName": "Pristis pristis",
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
      "scientificName": "Rhinopristiformes",
      "zhName": "犁头鳐目"
    },
    "family": {
      "scientificName": "Pristidae",
      "zhName": "锯鳐科"
    },
    "genus": {
      "scientificName": "Pristis",
      "zhName": "锯鳐属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "CR",
    "label": {
      "zh": "极危",
      "en": "Critically Endangered"
    },
    "trend": "unknown",
    "assessor": "全球等级核验范围见保护章节；未确认独立评估日期和全球趋势"
  },
  "distribution": {
    "realms": [
      "marine",
      "freshwater"
    ],
    "continents": [
      "亚洲",
      "非洲",
      "北美洲",
      "南美洲",
      "大洋洲"
    ],
    "regions": [
      "热带沿岸、河口与相通河流，现存分布破碎"
    ],
    "countries": [],
    "range": "历史上广布热带沿岸及相通淡水水域，如今许多地方已消失或只剩零星记录，澳大利亚北部仍有重要种群。历史分布不能视作连续的现存范围。"
  },
  "habitats": [
    {
      "name": "浅海湾、河口与热带河流",
      "realm": "marine",
      "description": '幼鱼利用河流和河口浅水，红树林附近水域也提供生活空间。成鱼可利用沿岸海湾及相通淡水，河流与河口之间的通道需要保持连通。',
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
      "甲壳动物",
      "其他底栖无脊椎动物"
    ],
    "description": "锯鲛捕食鱼类和甲壳动物等，用长吻探测猎物，并可左右挥动长吻击中鱼群。"
  },
  "tags": [
    "锯鲛",
    "长吻两边的小尖齿"
  ],
  "summary": "锯鲛属于鳐类，头前伸出宽长的吻，两侧排列着尖齿，看起来像一把锯子。",
  "description": '锯鲛属于软骨鱼中的鳐类，真正的嘴巴和鳃裂位于头部下面。宽胸鳍后有两片背鳍；幼鱼常利用河流、河口和红树林附近的浅水成长。Pristis microdon 和 Pristis perotteti 现并入本种。',
  "storySections": [
    {
      key: 'rostrum',
      label: '生活与认识',
      title: '尖齿排在长吻两旁',
      body: '宽长吻部的两侧各排一列尖齿，形似锯子。真正的嘴位于头部腹面，长吻本身不会像嘴一样张开。',
    },
    {
      key: 'nursery',
      label: '生活与认识',
      title: '幼鱼游进浅水河口',
      body: '幼年锯鲛会利用河流和河口等浅水栖息地。红树林附近的水域为小鱼提供生活空间。',
    },
    {
      key: 'underside',
      label: '生活与认识',
      title: '嘴巴和鳃在下面',
      body: '锯鲛属于软骨鱼中的鳐类，嘴巴和鳃裂位于头部下方。',
    },
    {
      key: 'feeding',
      label: '生活与认识',
      title: '用长吻寻找食物',
      body: '长吻能探测猎物，还能左右挥动，击中小鱼。',
    },
    {
      key: 'sand',
      label: '生活与认识',
      title: '贴着沙底看全身',
      body: '锯鲛有扁平的头、宽胸鳍、两片背鳍和尾巴。长吻两侧的尖齿容易缠住渔网。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '为锯鲛保留河口',
      body: '锯鲛全球 IUCN 等级为极危。误捕、捕捞和栖息地退化使其数量下降。保护河口与河流之间的通道、减少误捕，有助于保留现存种群。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '曾经三个学名，如今合为一个物种',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Pristis pristis。Pristis microdon 和 Pristis perotteti 后来并入 Pristis pristis，过去分别记录的分布因此需要合起来理解。中文名里的“锯”对应带尖齿的长吻；它的分类属于鳐类，真正的嘴在头部下方。',
    },
  ],
  "keyFacts": [
    '长吻两侧各有一列尖齿，真正的嘴在头部腹面。',
    '幼鱼会利用河流、河口和红树林附近浅水。',
    '锯鲛属于鳐类，嘴巴和鳃裂在头部下方。',
    '长吻能探测猎物，并左右挥动击中小鱼。',
    '长吻的尖齿容易缠住渔网。',
  ],
  "threats": [
    "渔具误捕",
    "捕捞",
    "河口与河流栖息地退化"
  ],
  "conservationActions": [
    "减少误捕",
    "保护河口和河流通道"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "长吻两边的小尖齿"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "浅海湾、河口与热带河流"
    }
  ],
  "media": {
    "image": "./images/species/largetooth-sawfish/01-cover.webp",
    "alt": "锯鲛的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/largetooth-sawfish/02-observation.webp",
        "title": "完整的长吻",
        "alt": "锯鲛长吻两边各有一列间距较宽的尖齿",
        "caption": "AI 生成科学情景重建。锯鲛长吻两边各有一列间距较宽的尖齿。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/largetooth-sawfish/03-observation.webp",
        "title": "红树林旁的幼鱼",
        "alt": "幼年锯鲛游过红树林根部附近的浅水",
        "caption": "AI 生成科学情景重建。幼年锯鲛游过红树林根部附近的浅水。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/largetooth-sawfish/04-observation.webp",
        "title": "头部的下面",
        "alt": "从下方观察锯鲛的嘴巴和鳃裂",
        "caption": 'AI 生成科学情景重建。从下方观察锯鲛的嘴巴和鳃裂。腹面图用于认识嘴和鳃裂的位置，不能作为鳃裂计数图。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/largetooth-sawfish/05-observation.webp",
        "title": "游近小鱼群",
        "alt": "锯鲛带着长吻靠近一群小鱼",
        "caption": 'AI 生成科学情景重建。锯鲛带着长吻靠近一群小鱼。画面展示接近鱼群的场景，不能据此判断一次捕食是否成功。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/largetooth-sawfish/06-observation.webp",
        "title": "沙底上的全身",
        "alt": "从上方观察锯鲛在沙底上方的完整身体",
        "caption": "AI 生成科学情景重建。从上方观察锯鲛在沙底上方的完整身体。",
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
      "title": "Florida Museum：锯鲛分类与物种合并",
      "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/largetooth-sawfish/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Florida Museum：锯鲛自然史",
      "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/largetooth-sawfish/",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Florida Museum：锯鲛全球极危及威胁",
      "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/largetooth-sawfish/",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Pristis pristis 的命名作者与年份',
      url: 'https://www.gbif.org/species/5216276',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
