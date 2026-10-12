import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-loon",
  "slug": "common-loon",
  "names": {
    "zh": "普通潜鸟",
    "en": "Common Loon"
  },
  "scientificName": "Gavia immer",
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
      "scientificName": "Gaviiformes",
      "zhName": "潜鸟目"
    },
    "family": {
      "scientificName": "Gaviidae",
      "zhName": "潜鸟科"
    },
    "genus": {
      "scientificName": "Gavia",
      "zhName": "潜鸟属"
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
      "terrestrial",
      "freshwater",
      "marine"
    ],
    "continents": [],
    "regions": [
      "北美洲与北大西洋沿岸"
    ],
    "countries": [
      "加拿大",
      "美国",
      "冰岛"
    ],
    "range": '北美洲与北大西洋沿岸的部分湖泊及近岸海域。'
  },
  "habitats": [
    {
      "name": "湖泊与近岸海域",
      "realm": "marine",
      "description": '繁殖期利用湖泊、湖岸与岛边，越冬期可利用近岸海域。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "piscivore"
    ],
    "foods": [
      "鱼",
      "其他水生动物"
    ],
    "description": "它依靠视觉寻找鱼等水生动物，在水下捕获较小食物。清澈水域有助于视觉取食，钓具缠绕与污染会影响其生活。"
  },
  "tags": [
    "普通潜鸟",
    "湖泊与近岸海域"
  ],
  "summary": '普通潜鸟用靠后的脚潜水捕鱼，繁殖在湖岸，越冬可到海岸。红眼与棋盘背纹属于繁殖期，冬季羽色较朴素。',
  "description": '普通潜鸟在北美洲与北大西洋沿岸活动，繁殖时利用湖泊，越冬时可到近岸海域。它用靠近身体后方的脚在水下推进，凭视觉捕鱼，上岸行走却不方便。繁殖期有红眼、黑头颈、白颈纹和棋盘状背纹，非繁殖期头背灰褐、喉腹偏白。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '红眼睛和颈纹',
      body: '普通潜鸟繁殖期有黑色头颈、白色颈纹和黑白棋盘状背纹，眼睛呈红色，嘴直而尖。非繁殖期头背灰褐、喉部和腹部偏白，不能把两套羽色混成同一阶段。',
    },
    {
      key: 'movement',
      label: '生活环境',
      title: '在栖息地活动',
      body: '它用脚在水下推进，腿靠近身体后部，适于游泳却使陆上行走不便。重建姿态不用于测量潜深或速度。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '它依靠视觉寻找鱼等水生动物，在水下捕获较小食物。清澈水域有助于视觉取食，钓具缠绕与污染会影响其生活。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '它在湖岸、岛边等靠近水面的地方筑巢，雌雄参与孵卵和育幼。季节迁移连接繁殖湖泊与越冬近岸海域；“湖鸟”不能概括它全年的环境。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种为 Gavia immer，属于潜鸟目、潜鸟科。图库区分繁殖期与非繁殖期成鸟；地方保护名录与全球等级各有不同范围。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保护繁殖湖岸和越冬海岸，减少钓具缠绕与污染。共读可比较繁殖羽和非繁殖羽，两个阶段的并置图不表示同时换成两套羽色。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '同一只潜鸟一年会换两套羽色',
      body: 'Brunnich 在 1764 年发表了本种的科学描述，今天采用 Gavia immer。中文名“潜鸟”可以与潜水捕鱼的生活对应。繁殖羽与非繁殖羽差别明显，灰褐头背的冬季成鸟不等于另一物种；季节迁移也连接了繁殖湖泊和越冬海岸。',
    },
  ],
  "keyFacts": [
    '繁殖期成鸟外形重建，红眼不表示画中受到惊吓。',
    '繁殖羽从背部观察，纹样不用于个体识别。',
    '完整潜泳姿态，脚靠后；静态图不用于判断最大潜深。',
    '繁殖期巢位情景重建，卵的数量不代表固定窝卵数。',
    '非繁殖期成鸟，头背灰褐、喉腹偏白，与繁殖期图片分开。',
    '本种为 Gavia immer，属于潜鸟目、潜鸟科。图库区分繁殖期与非繁殖期成鸟；地方保护名录与全球等级各有不同范围。',
    '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。',
  ],
  "threats": [
    "繁殖地人类活动干扰",
    "渔具缠绕与铅污染",
    "水体污染"
  ],
  "conservationActions": [
    '保护湖泊与近岸海域及天然隐蔽空间，观察时保留安静距离。',
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "湖泊与近岸海域"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "红眼睛和颈纹"
    },
    {
      "key": "conservation",
      "label": "评估资料",
      "value": "尚未核实",
      "note": '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。'
    }
  ],
  "media": {
    "image": "./images/species/common-loon/01-cover.webp",
    "alt": "普通潜鸟及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-loon/02-observation.webp",
        "title": "红眼睛和颈纹",
        "alt": "普通潜鸟：红眼睛和颈纹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。繁殖期成鸟外形重建，红眼不表示画中受到惊吓。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-loon/03-observation.webp",
        "title": "棋盘一样的背纹",
        "alt": "普通潜鸟：棋盘一样的背纹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。繁殖羽从背部观察，纹样不用于个体识别。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-loon/04-observation.webp",
        "title": "身体后方的脚",
        "alt": "普通潜鸟：身体后方的脚，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。完整潜泳姿态，脚靠后；静态图不用于判断最大潜深。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-loon/05-observation.webp",
        "title": "靠水面的巢",
        "alt": "普通潜鸟：靠水面的巢，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。繁殖期巢位情景重建，卵的数量不代表固定窝卵数。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-loon/06-observation.webp",
        "title": "非繁殖期的羽色",
        "alt": "普通潜鸟：非繁殖期的羽色，AI 生成科学情景重建",
        "caption": 'AI 生成科学情景重建。左为繁殖羽，右为非繁殖羽的阶段对照；非繁殖期头背灰褐、喉腹偏白。图为教学并置，不是同一时刻的自然记录。',
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
      "url": "https://www.gbif.org/species/2481962",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "密歇根大学 ADW：普通潜鸟",
      "url": "https://animaldiversity.org/accounts/Gavia_immer/",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
