import type { Species } from '../../types/species.ts';

const profile = {
  "id": "leopard",
  "slug": "leopard",
  "names": {
    "zh": "豹",
    "en": "Leopard",
    "aliases": [
      "花豹",
      "金钱豹"
    ]
  },
  "scientificName": "Panthera pardus",
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
      "scientificName": "Panthera",
      "zhName": "豹属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "VU",
    "label": {
      "zh": "易危",
      "en": "Vulnerable"
    },
    "trend": "decreasing",
    "assessor": "依据来源所载全球等级；未单独核实评估日期，地方等级另见保护章节"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "非洲",
      "亚洲"
    ],
    "regions": [
      "非洲与亚洲尚存的分散种群"
    ],
    "countries": [],
    "range": "豹仍分布于非洲和亚洲多地，但已从不少历史分布区消失。现存种群的连接程度与保护状况各不相同。"
  },
  "habitats": [
    {
      "name": "森林、疏林草原、灌丛与山地",
      "realm": "terrestrial",
      "description": '森林、疏林草原、灌丛和山地都能提供猎物与遮蔽。豹会在地面潜近猎物，也攀上粗树枝休息或保存猎物。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "羚羊等有蹄类",
      "猴类",
      "野兔",
      "其他中小型动物"
    ],
    "description": "豹捕食多种动物，食谱随地区变化。它常隐蔽接近猎物，再从近距离发起攻击。"
  },
  "tags": [
    "豹",
    "趴在树枝上的身体和长尾巴"
  ],
  "summary": "豹能在粗树枝上休息，也会把猎物拖上树保存。它身体结实、尾巴长，毛皮上有玫瑰状深色斑纹。",
  "description": '豹常独自活动，借助草木隐蔽身体，靠近猎物后从近距离发动攻击。它的侧身有玫瑰状斑纹，头部和四肢许多斑点更小、更实；到水边时也会低头饮水。',
  "storySections": [
    {
      key: 'rosettes',
      label: '生活与认识',
      title: '斑纹像一圈圈小花',
      body: '侧身深色斑纹围着较浅中心，形似玫瑰。头部和四肢的许多斑点更小、更实。',
    },
    {
      key: 'climbing',
      label: '生活与认识',
      title: '爪子抓住树皮',
      body: '豹用强壮四肢和脚爪攀爬树干，也能把猎物拖到树上保存。',
    },
    {
      key: 'branch',
      label: '生活与认识',
      title: '把身体放在粗树枝上',
      body: '豹可以沿粗枝卧下，长尾巴垂在树枝外。',
    },
    {
      key: 'stalking',
      label: '生活与认识',
      title: '借草木遮住身体',
      body: '它常独自活动，捕猎时会放低身体，利用草木遮挡靠近猎物。',
    },
    {
      key: 'water',
      label: '生活与认识',
      title: '低下头喝水',
      body: '豹也会到水边饮水，低头时用前腿支撑身体。水边只是它会利用的生活环境之一。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '保护能彼此连接的栖息地',
      body: '全球等级为易危，种群总体减少。栖息地破碎化、猎物减少与捕杀是主要威胁；保护生境通道和猎物、降低家畜冲突有助于豹生存。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '斑纹与树上的猎物',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Panthera pardus。豹的玫瑰状斑纹与猎豹的实心斑点不同。它善于攀爬，既会在粗树枝上休息，也可能将猎物拖到树上保存；如今非洲和亚洲的许多历史分布地已没有豹。',
    },
  ],
  "keyFacts": [
    '侧身斑纹围着较浅中心，头部和四肢许多斑点更小、更实。',
    '豹用强壮四肢攀爬，也会把猎物拖上树。',
    '它能沿粗枝卧下，长尾巴垂在枝外。',
    '它常独自活动，利用草木隐蔽接近猎物。',
    '豹会到水边饮水，也利用森林、草原、灌丛和山地。',
  ],
  "threats": [
    "栖息地破碎化",
    "猎物减少",
    "非法捕杀与贸易"
  ],
  "conservationActions": [
    "保护生境通道和猎物",
    "减少非法捕杀",
    "改善家畜防护"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "趴在树枝上的身体和长尾巴"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "森林、疏林草原、灌丛与山地"
    }
  ],
  "media": {
    "image": "./images/species/leopard/01-cover.webp",
    "alt": "豹的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/leopard/02-observation.webp",
        "title": "身侧的玫瑰状斑纹",
        "alt": "豹头部和侧身的深色斑点与玫瑰状斑纹",
        "caption": "AI 生成科学情景重建。豹头部和侧身的深色斑点与玫瑰状斑纹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/leopard/03-observation.webp",
        "title": "沿树干向上爬",
        "alt": "豹用四肢抓住倾斜树干向上攀爬",
        "caption": "AI 生成科学情景重建。豹用四肢抓住倾斜树干向上攀爬。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/leopard/04-observation.webp",
        "title": "树枝上垂下的长尾巴",
        "alt": "豹卧在粗树枝上，长尾巴垂在枝外",
        "caption": "AI 生成科学情景重建。豹卧在粗树枝上，长尾巴垂在枝外。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/leopard/05-observation.webp",
        "title": "伏低身体穿过草丛",
        "alt": "豹放低身体穿过草丛",
        "caption": "AI 生成科学情景重建。豹放低身体穿过草丛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/leopard/06-observation.webp",
        "title": "水边低头饮水",
        "alt": "豹在水边低头喝水",
        "caption": "AI 生成科学情景重建。豹在水边低头喝水。",
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
      "title": "IUCN SSC Cat Specialist Group：豹自然史与分类",
      "url": "https://www.catsg.org/living-species-leopard",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "IUCN SSC Cat Specialist Group：豹生态",
      "url": "https://www.catsg.org/living-species-leopard",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "IUCN SSC Cat Specialist Group：豹全球保护状态",
      "url": "https://www.catsg.org/living-species-leopard",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Panthera pardus 的命名作者与年份',
      url: 'https://www.gbif.org/species/5219436',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
