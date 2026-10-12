import type { Species } from '../../types/species.ts';

const profile = {
  "id": "kinkajou",
  "slug": "kinkajou",
  "names": {
    "zh": "蜜熊",
    "en": "Kinkajou"
  },
  "scientificName": "Potos flavus",
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
      "scientificName": "Procyonidae",
      "zhName": "浣熊科"
    },
    "genus": {
      "scientificName": "Potos",
      "zhName": "蜜熊属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "trend": "unknown",
    "assessor": '全球等级为 LC；独立评估年份尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "墨西哥南部至中美洲、南美洲部分地区"
    ],
    "countries": [],
    "range": "墨西哥南部至中美洲、南美洲部分地区；主要见于热带森林的树冠和树洞。"
  },
  "habitats": [
    {
      "name": "热带森林的树冠和树洞",
      "realm": "terrestrial",
      "description": '墨西哥南部至中美洲、南美洲部分地区的热带森林树冠和树洞。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "果实",
      "花蜜",
      "少量动物性食物"
    ],
    "description": "食物包括果实、花蜜、少量动物性食物。"
  },
  "tags": [
    "蜜熊",
    "热带森林的树冠和树洞"
  ],
  "summary": '蜜熊夜间在热带树冠吃果实和花蜜，白天在树洞休息。毛尾能抓握，灵活脚踝帮助它头朝下攀树。',
  "description": '蜜熊夜间在墨西哥南部至南美洲的热带树冠取食，主要吃果实、花蜜，偶尔吃小动物。金棕色毛尾能抓握树枝，前爪灵巧，后脚踝可以转动，帮助它沿树干头朝下攀爬。白天它在树洞或隐蔽枝间休息。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '绕住树枝的尾巴',
      body: '蜜熊的尾巴长着厚毛，能够抓握树枝。看看它攀爬时，尾巴绕在什么地方。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '圆耳朵和大眼睛',
      body: '圆耳朵藏在头顶两侧，眼睛又大又亮。它通常在夜间活动，白天找地方休息。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '前爪里的果实',
      body: '蜜熊会用灵巧的前爪拿住食物。它属于食肉目，平时却主要吃果实，也会取食花蜜。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '沿着树干爬',
      body: '爪子帮助它抓住树皮，后脚踝还能转动。它可以沿树干头朝下移动，图中只展示一个攀爬姿势。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '树洞里的白天',
      body: '天亮后，它会在树洞或树枝间的隐蔽处休息。蜷起来时，长尾巴也能绕在身体旁。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '本种的全球保护等级为 LC（无危），独立评估年份尚未确认。蜜熊依靠树冠与隐蔽休息处生活，夜间观察时不追逐或惊扰动物。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“蜜熊”属于浣熊科',
      body: 'Schreber 在 1774 年发表了蜜熊的科学描述，今天采用 Potos flavus。英文俗名 Honey Bear 与它会舔食蜂蜜有关，长舌也能伸进花朵取花蜜。中文虽然叫“熊”，它属于浣熊科，夜间主要寻找果实和花蜜。',
    },
  ],
  "keyFacts": [
    "蜜熊的尾巴长着厚毛，能够抓握树枝。看看它攀爬时，尾巴绕在什么地方。",
    "圆耳朵藏在头顶两侧，眼睛又大又亮。它通常在夜间活动，白天找地方休息。",
    "蜜熊会用灵巧的前爪拿住食物。它属于食肉目，平时却主要吃果实，也会取食花蜜。",
    "爪子帮助它抓住树皮，后脚踝还能转动。它可以沿树干头朝下移动，图中只展示一个攀爬姿势。",
    "天亮后，它会在树洞或树枝间的隐蔽处休息。蜷起来时，长尾巴也能绕在身体旁。"
  ],
  "threats": [],
  "conservationActions": [
    "观察时不捕捉、不投喂，保留它生活的环境。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "热带森林的树冠和树洞"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "绕住树枝的尾巴"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "无危",
      "note": "采用 Potos flavus，属于浣熊科。Mammal Diversity Database 列全球 IUCN 无危；独立评估年份未核实，未以资料访问年份代替。"
    }
  ],
  "media": {
    "image": "./images/species/kinkajou/01-cover.webp",
    "alt": "蜜熊及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/kinkajou/02-observation.webp",
        "alt": "蜜熊：绕住树枝的尾巴",
        "title": "绕住树枝的尾巴",
        "caption": "AI 生成科学情景重建。蜜熊的尾巴长着厚毛，能够抓握树枝。看看它攀爬时，尾巴绕在什么地方。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/kinkajou/03-observation.webp",
        "alt": "蜜熊：圆耳朵和大眼睛",
        "title": "圆耳朵和大眼睛",
        "caption": "AI 生成科学情景重建。圆耳朵藏在头顶两侧，眼睛又大又亮。它通常在夜间活动，白天找地方休息。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/kinkajou/04-observation.webp",
        "alt": "蜜熊：前爪里的果实",
        "title": "前爪里的果实",
        "caption": "AI 生成科学情景重建。蜜熊会用灵巧的前爪拿住食物。它属于食肉目，平时却主要吃果实，也会取食花蜜。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/kinkajou/05-observation.webp",
        "alt": "蜜熊：沿着树干爬",
        "title": "沿着树干爬",
        "caption": "AI 生成科学情景重建。爪子帮助它抓住树皮，后脚踝还能转动。它可以沿树干头朝下移动，图中只展示一个攀爬姿势。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/kinkajou/06-observation.webp",
        "alt": "蜜熊：树洞里的白天",
        "title": "树洞里的白天",
        "caption": "AI 生成科学情景重建。天亮后，它会在树洞或树枝间的隐蔽处休息。蜷起来时，长尾巴也能绕在身体旁。",
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
      "title": "圣迭戈动物园：Kinkajou",
      "url": "https://animals.sandiegozoo.org/animals/kinkajou",
      "kind": "ecology",
      "accessedAt": "2026-09-24"
    },
    {
      "title": "Mammal Diversity Database：Potos flavus",
      "url": "https://www.mammaldiversity.org/taxon/1005890/",
      "kind": "conservation",
      "accessedAt": "2026-09-24"
    },
    {
      "title": "Animal Diversity Web：Potos flavus",
      "url": "https://animaldiversity.org/accounts/Potos_flavus/",
      "kind": "general",
      "accessedAt": "2026-09-24"
    },
    {
      title: 'GBIF：蜜熊的科学命名记录',
      url: 'https://www.gbif.org/species/2433573',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-24",
  "updatedAt": "2026-09-24"
} as const satisfies Species;

export default profile;
