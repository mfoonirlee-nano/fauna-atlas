import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-mudpuppy",
  "slug": "common-mudpuppy",
  "names": {
    "zh": "斑泥螈",
    "en": "Common Mudpuppy"
  },
  "scientificName": "Necturus maculosus",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Chordata",
      "zhName": "脊索动物门"
    },
    "order": {
      "scientificName": "Caudata",
      "zhName": "有尾目"
    },
    "family": {
      "scientificName": "Proteidae",
      "zhName": "洞螈科"
    },
    "genus": {
      "scientificName": "Necturus",
      "zhName": "泥螈属"
    },
    "class": {
      "scientificName": "Amphibia",
      "zhName": "两栖纲"
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
      "freshwater"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "加拿大南部与美国东部、中央地区的淡水水域"
    ],
    "countries": [
      "加拿大",
      "美国"
    ],
    "range": '加拿大南部及美国东部、中央地区的部分淡水水域。'
  },
  "habitats": [
    {
      "name": "湖泊与河流底部",
      "realm": "freshwater",
      "description": '加拿大南部和美国东部、中央地区湖泊、河流底部的石块、沉木与水草旁。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "水生昆虫幼虫",
      "甲壳类",
      "小型水生动物"
    ],
    "description": "它吃水生昆虫幼虫、甲壳类和其他小型水生动物，也可能摄食小鱼。"
  },
  "tags": [
    "斑泥螈",
    "湖泊与河流底部"
  ],
  "summary": '斑泥螈终生在淡水生活，成年仍保留外鳃，成体常有深斑，幼体带纵纹。雌性守护水下巢穴顶部的卵。',
  "description": '斑泥螈终生在加拿大南部和美国东部、中央地区的淡水中生活，藏在石块、沉木和水草旁，吃水生昆虫幼虫、甲壳类等动物，也可能吃小鱼。成年仍有红褐外鳃，四肢各足四趾，尾侧扁，皮肤常有深色斑点；幼体可见纵向条纹。雌性将卵附在水下巢穴顶部，守护到孵化。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '成年仍保留的外鳃',
      body: '斑泥螈成体体表常有深色斑点，头宽而扁，头后两侧保留红褐色外鳃。它有四肢，各足四趾；尾巴侧扁。幼体可见纵向条纹。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '湖泊与河流底部',
      body: '它终生在淡水中生活，躲在石块、沉木或水草附近。外鳃在成年后仍存在，鳃的大小会随水中氧气条件变化。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '它吃水生昆虫幼虫、甲壳类和其他小型水生动物，也可能摄食小鱼。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '雌性把卵附在水下巢穴顶部，并守护到孵化。幼体带外鳃，成体继续保留外鳃，终生水中生活。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种为 Necturus maculosus，属于有尾目、洞螈科。分类图谱说明归属，不表示演化发生的时间。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '先找图中可见的特点',
      body: '保留淡水底部的石块、沉木和水草，不移走藏身物。可比较幼体条纹与成体斑点，外鳃大小与健康状况不能只凭图判断。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '俄亥俄河记录中的斑泥螈',
      body: 'Rafinesque 在 1818 年以 Sirena maculosa 描述本种，原始产地记录写的是美国俄亥俄河，今天采用 Necturus maculosus。中文“斑”可以与成体的深色斑点对应，幼体则可带纵纹。外鳃从幼体保留到成年，是本种正常生活史，不能据此把成体误认作蝾螈幼体。',
    },
  ],
  "keyFacts": [
    '斑泥螈成体体表常有深色斑点，头宽而扁，头后两侧保留红褐色外鳃。它有四肢，各足四趾；尾巴侧扁。幼体可见纵向条纹。',
    '雌性把卵附在水下巢穴顶部，并守护到孵化。幼体带外鳃，成体继续保留外鳃，终生水中生活。',
  ],
  "threats": [
    "水体污染与沉积物增加",
    "栖息地破坏"
  ],
  "conservationActions": [
    "保护原生栖息环境，保留隐蔽空间，观察时不捕捉或诱发行为。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "湖泊与河流底部"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "成年仍保留的外鳃"
    }
  ],
  "media": {
    "image": "./images/species/common-mudpuppy/01-cover.webp",
    "alt": "斑泥螈及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-mudpuppy/02-observation.webp",
        "title": "头旁的外鳃",
        "alt": "斑泥螈：头旁的外鳃，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成体外鳃重建，不凭鳃丝数量判定个体健康。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-mudpuppy/03-observation.webp",
        "title": "水底的四只脚",
        "alt": "斑泥螈：水底的四只脚，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成体水下姿态重建，各足四趾的描述以资料为准。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-mudpuppy/04-observation.webp",
        "title": "侧扁的尾巴",
        "alt": "斑泥螈：侧扁的尾巴，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。侧面观察重建，静图不证明游泳动作。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-mudpuppy/05-observation.webp",
        "title": "沉木下的隐蔽处",
        "alt": "斑泥螈：沉木下的隐蔽处，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水下隐蔽环境重建，不移开动物藏身的沉木。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-mudpuppy/06-observation.webp",
        "title": "带条纹的幼体",
        "alt": "斑泥螈：带条纹的幼体，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼体条纹与外鳃重建，和成体斑点分别标注。",
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
      "title": "AMNH：斑泥螈学名与分类",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Proteidae/Necturus/Necturus-maculosus",
      "kind": "taxonomy",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "密歇根大学 ADW：形态、分布与生活史",
      "url": "https://animaldiversity.org/accounts/Necturus_maculosus/",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-10",
  "updatedAt": "2026-10-10"
} as const satisfies Species;

export default profile;
