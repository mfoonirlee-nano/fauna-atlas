import type { Species } from '../../types/species.ts';

const profile = {
  "id": "zebra-shark",
  "slug": "zebra-shark",
  "names": {
    "zh": "豹纹鲨",
    "en": "Zebra Shark"
  },
  "scientificName": "Stegostoma tigrinum",
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
      "scientificName": "Orectolobiformes",
      "zhName": "须鲨目"
    },
    "family": {
      "scientificName": "Stegostomatidae",
      "zhName": "豹纹鲨科"
    },
    "genus": {
      "scientificName": "Stegostoma",
      "zhName": "豹纹鲨属"
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
    "assessor": "依据所列来源中的全球等级；未单独核实评估日期"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "亚洲",
      "非洲",
      "大洋洲"
    ],
    "regions": [
      "印度洋",
      "西太平洋"
    ],
    "countries": [],
    "range": "分布于印度洋和西太平洋的热带近岸海域，包括红海及日本至澳大利亚附近水域。",
    "center": {
      "lat": -10,
      "lng": 120
    }
  },
  "habitats": [
    {
      "name": "珊瑚礁旁的沙底",
      "realm": "marine",
      "description": "分布于印度洋和西太平洋的热带近岸海域，包括红海及日本至澳大利亚附近水域。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "软体动物",
      "甲壳动物",
      "小鱼"
    ],
    "description": "取食软体动物、甲壳动物、小鱼。"
  },
  "tags": [
    "豹纹鲨",
    "幼体身上的条纹"
  ],
  "summary": "豹纹鲨幼体带浅色条纹，成年后多为浅褐底色和深色斑点。它常在海底休息，夜间寻找软体动物和甲壳动物等食物。",
  "description": '豹纹鲨生活在印度洋和西太平洋的热带近岸海域，白天常在海底休息，夜间寻找软体动物、甲壳动物和小鱼。幼鲨身上有浅色条纹，成鲨通常有浅褐底色和深色斑点。长大的个体背上还会出现纵向棱脊，尾部很长。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '幼体身上的条纹',
      body: '幼体的深色身体上有浅色条纹。先看这一张，再和下一张成体图比较花纹；两图不是等比例。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '成体身上的斑点',
      body: '长大后，豹纹鲨通常会出现浅色底上的深色斑点。幼体和成体仍是同一种动物。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '贴近海底的嘴',
      body: '它的嘴位于头部下方，能在海底寻找软体动物、甲壳动物等食物。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '拖在身后的长尾',
      body: '沿着身体看到尾尖。豹纹鲨的尾部很长，游动时会随身体摆动。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '背上的纵向棱脊',
      body: '成体背上有顺着身体延伸的棱脊，和圆圆的斑点一起构成外形特点。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保护生活的水域',
      body: '全球等级为濒危。保护近岸栖息地并减少捕捞压力，能帮助野生种群恢复。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '幼鲨像斑马，成鲨有豹纹',
      body: '豹纹鲨的英文俗名 Zebra Shark 意为“斑马鲨”，来自幼体身上的条纹；中文名则让人联想到成体的斑点。科学文献也曾使用 Stegostoma fasciatum 等名称。读到不同名字时，需要结合命名记录确认它们是否指同一个物种，幼鲨和成鲨的花纹差别本身并不代表换了物种。',
    },
  ],
  "keyFacts": [
    "幼体的深色身体上有浅色条纹。先看这一张，再和下一张成体图比较花纹；两图不是等比例。",
    "长大后，豹纹鲨通常会出现浅色底上的深色斑点。幼体和成体仍是同一种动物。",
    "它的嘴位于头部下方，能在海底寻找软体动物、甲壳动物等食物。",
    "沿着身体看到尾尖。豹纹鲨的尾部很长，游动时会随身体摆动。",
    "成体背上有顺着身体延伸的棱脊，和圆圆的斑点一起构成外形特点。"
  ],
  "threats": [
    "捕捞与误捕",
    "近岸栖息地退化"
  ],
  "conservationActions": [
    "减少捕捞压力",
    "保护珊瑚礁与附近沙底"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "幼体身上的条纹"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "珊瑚礁旁的沙底"
    }
  ],
  "media": {
    "image": "./images/species/zebra-shark/01-cover.webp",
    "alt": "豹纹鲨的完整身体与水中环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/zebra-shark/02-observation.webp",
        "title": "幼体身上的条纹",
        "alt": "豹纹鲨：幼体身上的条纹",
        "caption": "AI 生成科学情景重建。幼体的深色身体上有浅色条纹。先看这一张，再和下一张成体图比较花纹；两图不是等比例。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/zebra-shark/03-observation.webp",
        "title": "成体身上的斑点",
        "alt": "豹纹鲨：成体身上的斑点",
        "caption": "AI 生成科学情景重建。长大后，豹纹鲨通常会出现浅色底上的深色斑点。幼体和成体仍是同一种动物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/zebra-shark/04-observation.webp",
        "title": "贴近海底的嘴",
        "alt": "豹纹鲨：贴近海底的嘴",
        "caption": "AI 生成科学情景重建。它的嘴位于头部下方，能在海底寻找软体动物、甲壳动物等食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/zebra-shark/05-observation.webp",
        "title": "拖在身后的长尾",
        "alt": "豹纹鲨：拖在身后的长尾",
        "caption": "AI 生成科学情景重建。沿着身体看到尾尖。豹纹鲨的尾部很长，游动时会随身体摆动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/zebra-shark/06-observation.webp",
        "title": "背上的纵向棱脊",
        "alt": "豹纹鲨：背上的纵向棱脊",
        "caption": "AI 生成科学情景重建。成体背上有顺着身体延伸的棱脊，和圆圆的斑点一起构成外形特点。",
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
      "title": "Florida Museum：现行学名",
      "url": "https://www.floridamuseum.ufl.edu/science/scientists-look-to-shark-dna-for-the-genetic-signature-of-time/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "Florida Museum：豹纹鲨形态",
      "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/zebra-shark/",
      "kind": "ecology",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "National Aquarium：生活史与全球等级",
      "url": "https://aqua.org/explore/animals/zebra-shark",
      "kind": "conservation",
      "accessedAt": "2026-09-20"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-20",
  "updatedAt": "2026-09-20"
} as const satisfies Species;

export default profile;
