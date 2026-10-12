import type { Species } from '../../types/species.ts';

const profile = {
  "id": "plains-viscacha",
  "slug": "plains-viscacha",
  "names": {
    "zh": "草原黏鼠",
    "en": "Plains Viscacha",
    "aliases": [
      "平原黏鼠"
    ]
  },
  "scientificName": "Lagostomus maximus",
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
      "scientificName": "Rodentia",
      "zhName": "啮齿目"
    },
    "family": {
      "scientificName": "Chinchillidae",
      "zhName": "毛丝鼠科"
    },
    "genus": {
      "scientificName": "Lagostomus",
      "zhName": "黏鼠属"
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
      "南美洲南部平原"
    ],
    "countries": [
      "阿根廷",
      "巴拉圭",
      "玻利维亚"
    ],
    "range": '南美洲南部的部分平原与低地灌丛。'
  },
  "habitats": [
    {
      "name": "草原与灌丛",
      "realm": "terrestrial",
      "description": '南美洲南部平原的草地、低地灌丛与地下洞穴系统。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草",
      "其他地表植物"
    ],
    "description": '吃草和其他植物，外出取食，回洞隐蔽。'
  },
  "tags": [
    "草原黏鼠",
    "草原与灌丛"
  ],
  "summary": '草原黏鼠群居在相连地下洞穴，黄昏和夜间外出吃植物。黑白脸纹、长须、粗壮身体和有毛尾巴是观察线索。',
  "description": '草原黏鼠在南美洲南部平原与低地灌丛群居，使用由隧道和巢室相连的地下洞穴，常在黄昏、夜间外出吃草等植物。它有粗壮灰褐身体、黑白脸纹、长须和发达后腿，尾巴有毛。洞穴提供隐蔽与育幼空间，不同群体的规模会有差别。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '黑白脸纹',
      body: '草原黏鼠有粗壮的灰褐身体、明显的黑白脸纹和长须，后腿发达，尾巴带毛。它属于毛丝鼠科黏鼠属，学名为 Lagostomus maximus。',
    },
    {
      key: 'movement',
      label: '生活环境',
      title: '在栖息地活动',
      body: '它在草原与低地灌丛群居，使用地下洞穴系统，常在黄昏和夜间外出。洞口群体图不表示真实群体数量。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '它吃草和其他植物，外出取食，回洞隐蔽。静态低头图不能说明摄食量或活动频率。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '幼仔由母体产出，随后吃奶。体型随性别等因素变化，单只动物的体重不能代表全部个体。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '草原黏鼠也叫平原黏鼠，学名 Lagostomus maximus，属于毛丝鼠科。它与山地黏鼠属 Lagidium 的动物是不同物种。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保留草原、灌丛和地下洞穴。洞口可供远距离观察，图中一个入口不能说明整套地下系统的深度与面积。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '共享洞穴还有专门的名称',
      body: 'Desmarest 在 1817 年发表了本种的科学描述，今天采用 Lagostomus maximus。草原黏鼠也叫平原黏鼠，名称提示平原家园，与山地黏鼠属 Lagidium 的动物分开。其共享洞穴系统有专门名称 viscachera，不使用的入口有时被木棍、石头、骨头等物封堵。',
    },
  ],
  "keyFacts": [
    '粗大的脸纹是共读线索，重建细节不用于鉴定近似种。',
    '一个洞口不能代表整个地下系统的深度和面积。',
    '群居情景重建，不供真实群体计数。',
    '植物性取食情景，非实测摄食记录。',
    '完整尾端与后脚可见，静态图不能展示奔跑或跳跃过程。',
    '草原黏鼠也叫平原黏鼠，学名 Lagostomus maximus，属于毛丝鼠科。它与山地黏鼠属 Lagidium 的动物是不同物种。',
    '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。',
  ],
  "threats": [
    "草原栖息地改变",
    "人类捕杀"
  ],
  "conservationActions": [
    '保护草原与灌丛及天然隐蔽空间，观察时保留安静距离。',
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "草原与灌丛"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "黑白脸纹"
    },
    {
      "key": "conservation",
      "label": "评估资料",
      "value": "尚未核实",
      "note": '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。'
    }
  ],
  "media": {
    "image": "./images/species/plains-viscacha/01-cover.webp",
    "alt": "草原黏鼠及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/plains-viscacha/02-observation.webp",
        "title": "黑白脸纹",
        "alt": "草原黏鼠：黑白脸纹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。粗大的脸纹是共读线索，重建细节不用于鉴定近似种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/plains-viscacha/03-observation.webp",
        "title": "洞口旁",
        "alt": "草原黏鼠：洞口旁，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。一个洞口不能代表整个地下系统的深度和面积。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/plains-viscacha/04-observation.webp",
        "title": "一起生活的邻居",
        "alt": "草原黏鼠：一起生活的邻居，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。群居情景重建，不供真实群体计数。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/plains-viscacha/05-observation.webp",
        "title": "草地上的食物",
        "alt": "草原黏鼠：草地上的食物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。植物性取食情景，非实测摄食记录。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/plains-viscacha/06-observation.webp",
        "title": "后脚和尾巴",
        "alt": "草原黏鼠：后脚和尾巴，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。完整尾端与后脚可见，静态图不能展示奔跑或跳跃过程。",
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
      "url": "https://www.gbif.org/species/5219945",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "密歇根大学 ADW：草原黏鼠",
      "url": "https://animaldiversity.org/accounts/Lagostomus_maximus/",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
