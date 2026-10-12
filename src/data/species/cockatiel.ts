import type { Species } from '../../types/species.ts';

const profile = {
  "id": "cockatiel",
  "slug": "cockatiel",
  "names": {
    "zh": "鸡尾鹦鹉",
    "en": "Cockatiel",
    "aliases": [
      "玄凤鹦鹉"
    ]
  },
  "scientificName": "Nymphicus hollandicus",
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
      "scientificName": "Psittaciformes",
      "zhName": "鹦形目"
    },
    "family": {
      "scientificName": "Cacatuidae",
      "zhName": "凤头鹦鹉科"
    },
    "genus": {
      "scientificName": "Nymphicus",
      "zhName": "鸡尾鹦鹉属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "trend": "stable",
    "assessor": "IUCN；等级来源与适用范围见来源记录"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "大洋洲"
    ],
    "regions": [
      "澳大利亚大陆"
    ],
    "countries": [
      "澳大利亚"
    ],
    "range": "野生鸡尾鹦鹉生活在澳大利亚大陆，常见于内陆疏林、草地、河边桉树林和农地。天然分布不含塔斯马尼亚；世界其他地区常见的宠物个体不代表原生分布。",
    "center": {
      "lat": -25,
      "lng": 134
    }
  },
  "habitats": [
    {
      "name": "开阔疏林与草地",
      "realm": "terrestrial",
      "description": '它们利用内陆疏林、草地、河边桉树林和农地，成群到地面采食。水源影响鸟群活动，有树洞的老树提供繁殖位置。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 29,
      "max": 33,
      "unit": "cm",
      "note": "成鸟全长，含尾羽。"
    },
    "weight": {
      "min": 80,
      "max": 100,
      "unit": "g",
      "note": "World Parrot Trust 所列体重范围。"
    }
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草籽",
      "其他植物种子"
    ],
    "description": '鸡尾鹦鹉主要吃种子，用小弯喙处理食物，常成群落到地面觅食。'
  },
  "activity": [
    "主要在白天活动"
  ],
  "tags": [
    "鸡尾鹦鹉",
    "头顶的细长冠羽"
  ],
  "summary": "野生型鸡尾鹦鹉身体灰色，有白色翼斑、长尖尾和竖起的冠羽。成年雄性的黄色脸与橙色耳斑更鲜明，雌鸟和幼鸟头部较暗。",
  "description": '鸡尾鹦鹉在澳大利亚内陆成群生活，落到地面吃种子，到水边饮水。它们在树洞繁殖，双亲共同孵卵和喂雏；图集采用野生灰型，人工培育的宠物色型另有不同。',
  "storySections": [
    {
      key: 'crest',
      label: '生活与认识',
      title: '头顶竖起一撮羽毛',
      body: '鸡尾鹦鹉头顶有细长冠羽，脸侧有橙色耳斑。冠羽姿态会改变，单幅图中的姿态不足以判断它是开心还是害怕。',
    },
    {
      key: 'wings',
      label: '生活与认识',
      title: '白翼斑与长尾巴',
      body: '野生灰型身体两侧有白色翼斑，尾巴细长。白翼斑与长尖尾都是辨认它的线索。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '低头找草籽',
      body: '鸡尾鹦鹉以种子为主食，常在地面成群采食，用小弯喙处理食物。图里的草穗只是食物场景，不代表它们只吃一种草。',
    },
    {
      key: 'flock',
      label: '生活与认识',
      title: '伙伴一起到水边',
      body: '澳大利亚内陆的水源会影响鸟群活动。鸡尾鹦鹉常成群觅食和饮水。',
    },
    {
      key: 'nest',
      label: '生活与认识',
      title: '树洞里的小鸟',
      body: '鸡尾鹦鹉在树洞筑巢，双亲都会参与孵卵和喂养雏鸟。野外观察巢穴应保持距离。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '保留树洞与水源',
      body: '鸡尾鹦鹉目前在全球属无危，World Parrot Trust 将其种群趋势列为稳定。保留有树洞的老树与健康的取食、饮水环境，有助于野生鸟群继续生活。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '冠羽与一同育雏的双亲',
      body: 'Kerr 于 1792 年描述了这个物种，现用学名为 Nymphicus hollandicus。它有细长冠羽和长尖尾，野生型的灰色羽衣与白色翼斑也很醒目。树洞中的繁殖并非一只鸟的事，双亲都会参与孵卵和喂养雏鸟。',
    },
  ],
  "keyFacts": [
    "鸡尾鹦鹉有细长的冠羽，羽毛姿态会变化。",
    "灰色身体两侧有显眼的白色翼斑，尾巴细长。",
    "鸡尾鹦鹉以种子为主食，常在地面成群采食。",
    "澳大利亚内陆的水源会影响鸟群活动。",
    "鸡尾鹦鹉在树洞筑巢，双亲都会参与孵卵和喂养雏鸟。"
  ],
  "threats": [
    "有树洞老树减少",
    "局部取食与饮水环境退化"
  ],
  "conservationActions": [
    "保留天然树洞",
    "保护水源和疏林草地",
    "观察野鸟时避免干扰巢穴"
  ],
  "metrics": {
    "adultLengthCm": [
      29,
      33
    ],
    "adultMassKg": [
      0.08,
      0.1
    ]
  },
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "头顶的细长冠羽"
    },
    {
      "key": "food",
      "label": "主要食物",
      "value": "草籽"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "开阔疏林与草地"
    }
  ],
  "media": {
    "image": "./images/species/cockatiel/01-cover.webp",
    "alt": "鸡尾鹦鹉在生活环境中的完整身体",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/cockatiel/02-observation.webp",
        "title": "头顶的冠羽",
        "alt": "野生型雄性鸡尾鹦鹉竖起细长冠羽，脸侧可见橙色耳斑",
        "caption": "AI 生成科学情景重建。野生型雄性鸡尾鹦鹉竖起细长冠羽，脸侧可见橙色耳斑。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/cockatiel/03-observation.webp",
        "title": "低头找草籽",
        "alt": "鸡尾鹦鹉在地面低头采食草籽",
        "caption": "AI 生成科学情景重建。鸡尾鹦鹉在地面低头采食草籽。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/cockatiel/04-observation.webp",
        "title": "白翼斑和长尾",
        "alt": "鸡尾鹦鹉侧身站在树枝上，白色翼斑与长尾清楚可见",
        "caption": "AI 生成科学情景重建。鸡尾鹦鹉侧身站在树枝上，白色翼斑与长尾清楚可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/cockatiel/05-observation.webp",
        "title": "伙伴到水边",
        "alt": "一小群野生鸡尾鹦鹉在浅水边饮水",
        "caption": "AI 生成科学情景重建。一小群野生鸡尾鹦鹉在浅水边饮水。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/cockatiel/06-observation.webp",
        "title": "树洞旁的成鸟",
        "alt": "两只鸡尾鹦鹉停在桉树树洞附近",
        "caption": "AI 生成科学情景重建。两只鸡尾鹦鹉停在桉树树洞附近。",
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
      "title": "BirdLife HANZAB：凤头鹦鹉科分类",
      "url": "https://hanzab.birdlife.org.au/hanzab-taxonomy/hanzab-taxonomy-top/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "BirdLife Australia：鸡尾鹦鹉",
      "url": "https://birdlife.org.au/bird-profiles/cockatiel/",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "World Parrot Trust：鸡尾鹦鹉状态与生物资料",
      "url": "https://parrots.org/encyclopedia/cockatiel/",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Nymphicus hollandicus 的命名作者与年份',
      url: 'https://www.gbif.org/species/2479977',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
