import type { Species } from '../../types/species.ts';

const profile = {
  "id": "great-potoo",
  "slug": "great-potoo",
  "names": {
    "zh": "大林鸱",
    "en": "Great Potoo"
  },
  "scientificName": "Nyctibius grandis",
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
      "scientificName": "Nyctibiiformes",
      "zhName": "林鸱目"
    },
    "family": {
      "scientificName": "Nyctibiidae",
      "zhName": "林鸱科"
    },
    "genus": {
      "scientificName": "Nyctibius",
      "zhName": "林鸱属"
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
      "中美洲与南美洲热带地区"
    ],
    "countries": [],
    "range": '中美洲与南美洲的部分热带地区。'
  },
  "habitats": [
    {
      "name": "热带森林",
      "realm": "terrestrial",
      "description": '中美洲与南美洲部分热带森林的树枝、断枝与天然巢位。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "大型飞行昆虫",
      "部分小型脊椎动物"
    ],
    "description": '主要捕食夜间飞行昆虫，也有小型脊椎动物的食物记录。'
  },
  "tags": [
    "大林鸱",
    "热带森林"
  ],
  "summary": '大林鸱白天沿枝干静止，羽纹像树皮；夜间捕捉飞行猎物。外观短嘴下有宽口裂，在天然凹处孵一枚卵。',
  "description": '大林鸱在中美洲与南美洲部分热带森林生活，白天沿枝干伸直身体静止停栖，夜间从栖枝出发捕捉飞行昆虫，也有小型脊椎动物的食物记录。灰白、褐色和深色羽纹像树皮，头大、嘴短，但张口时口裂很宽。它在枝干天然凹处产一枚卵，亲鸟孵卵、照料幼鸟。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '树桩旁的身体轮廓',
      body: '大林鸱头较大，嘴外观短，张口时口裂宽。灰白、褐色与深色斑纹覆盖身体，长尾的羽纹与树皮颜色相近。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '热带森林',
      body: '它在白天静止停栖，常沿树枝或断枝的方向伸直身体；夜间从栖枝出发捕捉空中的猎物。图中闭眼姿态不代表全天闭眼。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '它主要捕食夜间飞行昆虫，也有小型脊椎动物记录。栖枝与飞蛾同框只是取食环境示意。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '它利用树枝凹处等天然位置产一枚卵，不搭建常见杯状巢。亲鸟孵卵并照料幼鸟；画中的树桩不是所有巢位的统一形状。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种为 Nyctibius grandis，属于林鸱目、林鸱科。分类图谱说明归属，不表示演化发生的时间。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '先看图，再读资料',
      body: '保留森林的树枝和天然巢位，不惊扰静止停栖的鸟。可以沿羽纹与树皮找身体边界，夜间取食要结合真实影像。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '像断枝的森林鸟',
      body: 'J. F. Gmelin 在 1789 年发表了本种的科学描述，今天采用 Nyctibius grandis。中文名中的“林”可以联系森林家园，羽纹和直立静止的姿态帮助它融入树皮、断枝。它产卵利用枝干天然凹处，不搭建常见杯状巢，不能只用树桩的一种形状解释所有巢位。',
    },
  ],
  "keyFacts": [
    '大林鸱头较大，嘴外观短，张口时口裂宽。灰白、褐色与深色斑纹覆盖身体，长尾的羽纹与树皮颜色相近。',
    '它利用树枝凹处等天然位置产一枚卵，不搭建常见杯状巢。亲鸟孵卵并照料幼鸟；画中的树桩不是所有巢位的统一形状。',
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
      "value": "热带森林"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "树桩旁的身体轮廓"
    }
  ],
  "media": {
    "image": "./images/species/great-potoo/01-cover.webp",
    "alt": "大林鸱及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/great-potoo/02-observation.webp",
        "title": "像断枝的姿态",
        "alt": "大林鸱：像断枝的姿态，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。白天停栖重建，不通过惊吓诱导姿态。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/great-potoo/03-observation.webp",
        "title": "夜间的大眼睛",
        "alt": "大林鸱：夜间的大眼睛，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。模拟夜间观察照明，瞳孔大小受光照影响。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/great-potoo/04-observation.webp",
        "title": "短嘴下的宽口裂",
        "alt": "大林鸱：短嘴下的宽口裂，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。自然张口姿态，口裂宽不等于嘴角受伤。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/great-potoo/05-observation.webp",
        "title": "夜里的栖枝",
        "alt": "大林鸱：夜里的栖枝，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。飞蛾同框不是捕食实录。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/great-potoo/06-observation.webp",
        "title": "天然凹处的一枚卵",
        "alt": "大林鸱：天然凹处的一枚卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。亲鸟在天然枝端凹处孵卵，卵由身体遮挡；画面不用于测量巢位。",
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
      "title": "ADW：大林鸱的外形与生活史",
      "url": "https://animaldiversity.org/accounts/Nyctibius_grandis/",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "GBIF：接受学名与分类定位",
      "url": "https://www.gbif.org/species/2496801",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
