import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-egg-eater",
  "slug": "common-egg-eater",
  "names": {
    "zh": "卵食蛇",
    "en": "Common Egg-eater"
  },
  "scientificName": "Dasypeltis scabra",
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
      "scientificName": "Reptilia",
      "zhName": "爬行纲"
    },
    "order": {
      "scientificName": "Squamata",
      "zhName": "有鳞目"
    },
    "family": {
      "scientificName": "Colubridae",
      "zhName": "游蛇科"
    },
    "genus": {
      "scientificName": "Dasypeltis",
      "zhName": "食卵蛇属"
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
      "非洲多地的林地、草原与灌丛"
    ],
    "countries": [],
    "range": '非洲多地的林地、草原与灌丛。'
  },
  "habitats": [
    {
      "name": "林地与灌丛",
      "realm": "terrestrial",
      "description": '非洲部分草原、林地和灌丛的地面及可攀爬枝条。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鸟卵"
    ],
    "description": "它吞入鸟卵，脊椎的特殊突起进入食道区域帮助破壳，摄取内容物后吐出压碎的壳。该结构由成人配资料解释，嘴部重建不是内部解剖证据。"
  },
  "tags": [
    "卵食蛇",
    "林地与灌丛"
  ],
  "summary": '卵食蛇寻找并吞入鸟卵，特殊脊椎结构帮助破壳，吃下内容物后吐壳。它自身也产卵，身体常有菱形斑。',
  "description": '卵食蛇在非洲多地的林地、草原和灌丛找鸟卵，也能爬到巢位。它吞卵后由脊椎特殊突起帮助破壳，吃下内容物，再吐出压碎的壳。常见灰褐身体有深色菱形斑，鳞片有棱，头较小。花纹随个体变化，本种自身也产卵。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '嘴围住一枚卵',
      body: '卵食蛇身体常为灰褐色，背部有深色菱形斑，鳞片有棱，头较小。个体花纹存在差异，不能靠生成图判断种类。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '林地与灌丛',
      body: '它在地面与灌丛寻找鸟卵，也能攀爬到巢位。观察时不惊吓，也不诱发防御姿态。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '它吞入鸟卵，脊椎的特殊突起进入食道区域帮助破壳，摄取内容物后吐出压碎的壳。该结构由成人配资料解释，嘴部重建不是内部解剖证据。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '本种自身也产卵。作为食物的鸟卵与它产出的蛇卵各有不同用途，图库中的卵属于鸟卵取食情景。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种为 Dasypeltis scabra，属于有鳞目、游蛇科。分类图谱说明归属，不表示演化发生的时间。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '先看图，再读资料',
      body: '保留林地和灌丛，也不要移动鸟卵或惊扰巢位。吞卵姿态可结合图与影像观察，内部破壳结构需要由成人配研究资料解释。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '最初的产地记录曾写错',
      body: 'Linnaeus 在 1758 年以 Coluber scaber 描述本种，今天采用 Dasypeltis scabra。原记录将产地写成“Indiis”，后来确认有误，对应南非开普地区。中文名“卵食”说明吃鸟卵的习性；它摄取卵内食物后吐壳，和自己产出的蛇卵是两件事。',
    },
  ],
  "keyFacts": [
    '卵食蛇身体常为灰褐色，背部有深色菱形斑，鳞片有棱，头较小。个体花纹存在差异，不能靠生成图判断种类。',
    '本种自身也产卵。作为食物的鸟卵与它产出的蛇卵各有不同用途，图库中的卵属于鸟卵取食情景。',
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
      "value": "林地与灌丛"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "嘴围住一枚卵"
    }
  ],
  "media": {
    "image": "./images/species/common-egg-eater/01-cover.webp",
    "alt": "卵食蛇及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-egg-eater/02-observation.webp",
        "title": "小头和有棱的鳞片",
        "alt": "卵食蛇：小头和有棱的鳞片，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。头部放大重建，非实测比例。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-egg-eater/03-observation.webp",
        "title": "检查一枚鸟卵",
        "alt": "卵食蛇：检查一枚鸟卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。鸟卵为食物情景，不是蛇卵。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-egg-eater/04-observation.webp",
        "title": "嘴围住鸟卵",
        "alt": "卵食蛇：嘴围住鸟卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。吞卵姿态示意，尺寸不表示吞卵上限。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-egg-eater/05-observation.webp",
        "title": "落叶上的身体",
        "alt": "卵食蛇：落叶上的身体，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。完整身体和背部斑纹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-egg-eater/06-observation.webp",
        "title": "灌丛里的攀爬",
        "alt": "卵食蛇：灌丛里的攀爬，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。攀爬情景重建。",
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
      "title": "Reptile Database：接受名称、分类与范围",
      "url": "https://reptile-database.reptarium.cz/Dasypeltis/scabra",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "SANBI：卵食蛇食性与破壳结构",
      "url": "https://biodiversityadvisor.sanbi.org/search/detail/80882",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "GBIF：接受学名与分类定位",
      "url": "https://www.gbif.org/species/2456029",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
