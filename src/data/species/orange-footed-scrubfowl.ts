import type { Species } from '../../types/species.ts';

const profile = {
  "id": "orange-footed-scrubfowl",
  "slug": "orange-footed-scrubfowl",
  "names": {
    "zh": "橙脚冢雉",
    "en": "Orange-footed Scrubfowl"
  },
  "scientificName": "Megapodius reinwardt",
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
      "scientificName": "Galliformes",
      "zhName": "鸡形目"
    },
    "family": {
      "scientificName": "Megapodiidae",
      "zhName": "冢雉科"
    },
    "genus": {
      "scientificName": "Megapodius",
      "zhName": "冢雉属"
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
      "澳大利亚北部、新几内亚与小巽他群岛"
    ],
    "countries": [
      "澳大利亚",
      "巴布亚新几内亚",
      "印度尼西亚"
    ],
    "range": '澳大利亚北部、新几内亚与小巽他群岛的部分地区。'
  },
  "habitats": [
    {
      "name": "热带林地",
      "realm": "terrestrial",
      "description": '澳大利亚北部、新几内亚与小巽他群岛部分热带林地的地表与巢丘附近。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "种子",
      "果实",
      "昆虫等小型动物"
    ],
    "description": '摄食种子、果实以及昆虫等小型动物。'
  },
  "tags": [
    "橙脚冢雉",
    "热带林地"
  ],
  "summary": '橙脚冢雉用大脚拨动落叶、取食和维护巢丘。卵埋在丘中借热量孵化，幼鸟出壳后能自己活动。',
  "description": '橙脚冢雉在澳大利亚北部、新几内亚与小巽他群岛部分热带林地活动，用橙色大脚拨落叶和土，寻找种子、果实和小动物，也堆积、维护巢丘。灰头颈上有小冠，身体深褐。卵埋在巢丘中，借环境及材料分解的热量孵化，幼鸟出壳后能自行活动。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '橙色的大脚',
      body: '橙脚冢雉的头颈灰色，头顶有小冠，身体羽毛深褐，橙色的腿和大脚趾突出。它在地面走动，用脚拨动落叶与土。',
    },
    {
      key: 'movement',
      label: '生活环境',
      title: '在栖息地活动',
      body: '成鸟在热带林地堆积和维护巢丘。脚与脚爪既帮助地面取食，也用于处理巢丘材料。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '它摄食种子、果实和昆虫等小型动物。落叶取食图只示意环境，不表示一次真实摄食记录。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '卵埋入巢丘，利用环境与有机材料分解的热量孵化。幼鸟出壳后能自行活动，不依靠亲鸟坐巢孵卵或喂食。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种为 Megapodius reinwardt，属于鸡形目、冢雉科。巢丘剖面只是示意，埋卵位置、数量和土层颜色不代表实测结构。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保留热带林地与落叶材料，观察时不挖开巢丘。大脚、头顶小冠和巢丘可以从图中认识，内部热量与孵化需要由资料解释。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '巢丘的热量帮助孵卵',
      body: 'Dumont 在 1823 年发表 Megapodius reinwardt 的科学描述。中文名“橙脚”对应腿与脚的颜色，“冢”可以联系丘状巢穴。成鸟处理落叶与土，卵在巢丘中接受环境和有机材料分解的热量；它们无需像许多鸟那样坐在卵上孵化。',
    },
  ],
  "keyFacts": [
    '成鸟足部放大重建；脚拨动落叶的完整动作需看录像。',
    '成鸟与巢丘的情景对照，不用于测量丘高或巢区面积。',
    '剖面示意，非实测比例。卵在巢丘中，亲鸟没有坐在卵上孵化。',
    '成鸟头颈重建，灰色头颈与深褐身体分开观察。',
    '幼鸟阶段示意，没有画成由亲鸟喂食；不能从静态图验证出壳全过程。',
    '本种为 Megapodius reinwardt，属于鸡形目、冢雉科。巢丘剖面只是示意，埋卵位置、数量和土层颜色不代表实测结构。',
    '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。',
  ],
  "threats": [
    "林地栖息地改变",
    "巢区人为干扰"
  ],
  "conservationActions": [
    '保护热带林地及天然隐蔽空间，观察时保留安静距离。',
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "热带林地"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "橙色的大脚"
    },
    {
      "key": "conservation",
      "label": "评估资料",
      "value": "尚未核实",
      "note": '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。'
    }
  ],
  "media": {
    "image": "./images/species/orange-footed-scrubfowl/01-cover.webp",
    "alt": "橙脚冢雉及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/orange-footed-scrubfowl/02-observation.webp",
        "title": "橙色的大脚",
        "alt": "橙脚冢雉：橙色的大脚，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成鸟足部放大重建；脚拨动落叶的完整动作需看录像。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/orange-footed-scrubfowl/03-observation.webp",
        "title": "落叶堆成的巢丘",
        "alt": "橙脚冢雉：落叶堆成的巢丘，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成鸟与巢丘的情景对照，不用于测量丘高或巢区面积。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/orange-footed-scrubfowl/04-observation.webp",
        "title": "巢丘里的卵",
        "alt": "橙脚冢雉：巢丘里的卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。剖面示意，非实测比例。卵在巢丘中，亲鸟没有坐在卵上孵化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/orange-footed-scrubfowl/05-observation.webp",
        "title": "头顶的小冠",
        "alt": "橙脚冢雉：头顶的小冠，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成鸟头颈重建，灰色头颈与深褐身体分开观察。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/orange-footed-scrubfowl/06-observation.webp",
        "title": "自己活动的小鸟",
        "alt": "橙脚冢雉：自己活动的小鸟，AI 生成科学情景重建",
        "caption": 'AI 生成科学情景重建。幼鸟出壳后能自行活动；图为幼体阶段示意，不能说明整个出壳过程。',
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
      "title": "GBIF：接受学名与分类入口",
      "url": "https://www.gbif.org/species/2482118",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "NT 政府：冢雉取食与巢丘",
      "url": "https://nt.gov.au/environment/animals/wildlife-in-nt/scrubfowl",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "巢丘微生物与分解热原始研究",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9332330/",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "Earthwatch ClimateWatch：橙脚冢雉",
      "url": "https://www.climatewatch.org.au/species/birds/orange-footed-scrubfowl",
      "kind": "general",
      "accessedAt": "2026-10-09"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
