import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-anas-platyrhynchos",
  "slug": "mallard",
  "names": {
    "zh": "绿头鸭",
    "en": "Mallard",
    "aliases": [
      "野鸭"
    ]
  },
  "scientificName": "Anas platyrhynchos",
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
      "scientificName": "Anseriformes",
      "zhName": "雁形目"
    },
    "family": {
      "scientificName": "Anatidae",
      "zhName": "鸭科"
    },
    "genus": {
      "scientificName": "Anas",
      "zhName": "鸭属"
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
    "assessor": "IUCN（CMS 物种页引用）"
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "亚洲",
      "欧洲",
      "北美洲"
    ],
    "countries": [
      "中国",
      "英国",
      "美国"
    ],
    "regions": [
      "北半球湖泊、河流与湿地"
    ],
    "range": "广布于北半球多种湿地，也有人为引入地区。这里列出部分原生分布，不将全球所有记录都视为原生。",
    "center": {
      "lat": 40,
      "lng": 110
    }
  },
  "habitats": [
    {
      "name": "浅水湿地",
      "description": "湖泊、池塘和缓流河段提供食物，岸边植被为筑巢提供遮蔽。",
      "realm": "freshwater",
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 50,
      "max": 65,
      "unit": "cm",
      "note": "Cornell Lab 所列成鸟体长。"
    },
    "weight": {
      "min": 1,
      "max": 1.3,
      "unit": "kg"
    }
  },
  "metrics": {
    "adultLengthCm": [
      50,
      65
    ],
    "adultMassKg": [
      1,
      1.3
    ]
  },
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "水生植物",
      "种子",
      "昆虫",
      "其他水生无脊椎动物"
    ],
    "description": "水生植物、种子、昆虫、其他水生无脊椎动物是它的食物。"
  },
  "activity": [
    "日夜均可活动"
  ],
  "tags": [
    "游泳",
    "有蹼"
  ],
  "summary": "绿头鸭用带蹼的脚划水。繁殖期雄鸭的头部呈绿色，颈部有白环；雌鸭主要是褐色斑纹。",
  "description": '绿头鸭属于鸭科。繁殖羽雄鸭有绿头、黄色嘴和白颈环，雌鸭有褐色斑纹；雄鸭换羽期间也可能变得接近雌鸭的颜色。',
  "storySections": [
    {
      key: 'swimming',
      label: '亲子观察',
      title: '脚在水里划',
      body: '绿头鸭用带蹼的脚划水，游过后在身后留下波纹。脚常藏在水下，岸边停立时比较容易观察。',
    },
    {
      key: 'plumage',
      label: '生活与认识',
      title: '绿头和褐色花纹',
      body: '繁殖羽雄鸭有绿头和白颈环，雌鸭披着褐色斑纹。雄鸭换羽期间也可能变得接近雌鸭的颜色。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '把头伸进浅水里',
      body: '绿头鸭会在水面和浅水取食，也能倒立，把尾巴翘在水面上。它吃植物和种子，也吃昆虫等小动物。',
    },
    {
      key: 'young',
      label: '生活与认识',
      title: '小鸭跟着妈妈游',
      body: '雌鸭在岸边隐蔽处筑巢。幼鸭孵化后很快能走动，跟着母鸭到水里活动，并自己啄取食物。',
    },
    {
      key: 'seasons',
      label: '生活与认识',
      title: '有些鸭子要迁徙',
      body: '北方的绿头鸭常在寒冷季节迁往较温暖的地方；有些地区的鸭群留在当地。水面和岸边植被都是它们生活的一部分。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '给鸭子留一片浅水',
      body: '全球红色名录等级为无危。湿地排水、污染和岸边干扰仍会影响鸭群。站在岸边观察，让母鸭和小鸭能自由通行。独立评估日期和全球趋势未核实。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“绿头”主要属于繁殖羽雄鸭',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Anas platyrhynchos。雌鸭的头部主要是褐色斑纹，雄鸭换羽时也可能接近雌鸭颜色。幼鸭孵化后很快能跟着母鸭到水里活动，并自己啄取食物。',
    },
  ],
  "keyFacts": [
    "脚趾之间有蹼。",
    "繁殖羽雄鸭有绿色头部。",
    "雌鸭主要呈褐色斑纹。",
    "小鸭会跟母鸭游泳并自己取食。",
    "一些种群迁徙，一些留居。"
  ],
  "threats": [
    "湿地退化与水体污染。",
    "繁殖季岸边活动干扰。"
  ],
  "conservationActions": [
    "保护浅水湿地和岸边植被。",
    "不追赶鸭群，不捡走幼鸭。"
  ],
  "featuredStats": [
    {
      "key": "0",
      "label": "观察重点",
      "value": "游泳"
    },
    {
      "key": "1",
      "label": "脚的特点",
      "value": "有蹼"
    },
    {
      "key": "2",
      "label": "成鸟体长",
      "value": "50–65 cm"
    }
  ],
  "sources": [
    {
      "title": "GBIF — 名称与分类归属",
      "url": "https://www.gbif.org/species/9761484",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Cornell Lab — 绿头鸭识别与体型",
      "url": "https://www.allaboutbirds.org/guide/Mallard/id",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Cornell Lab — 绿头鸭生活史",
      "url": "https://www.allaboutbirds.org/guide/Mallard/lifehistory",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Animal Diversity Web — 绿头鸭",
      "url": "https://animaldiversity.org/accounts/Anas_platyrhynchos/",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "CMS — IUCN 等级",
      "url": "https://www.cms.int/species/anas-platyrhynchos",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    }
  ],
  "media": {
    "image": "./images/species/mallard/01-cover.webp",
    "alt": "繁殖羽雄性绿头鸭站在右侧岸边，嘴、尾羽和脚完整可见。",
    "focalPoint": {"x": 0.82, "y": 0.25},
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/mallard/02-body.webp",
        "title": "看看带蹼的脚",
        "alt": "雄鸭站在岸边，绿色头部、白颈环和橙色蹼足清楚可见。",
        "caption": "雄鸭站在岸边，绿色头部、白颈环和橙色蹼足清楚可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/mallard/03-female.webp",
        "title": "褐色花纹的雌鸭",
        "alt": "雌性绿头鸭站在浅水旁，全身有褐色斑纹。",
        "caption": "雌性绿头鸭站在浅水旁，全身有褐色斑纹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/mallard/04-swimming.webp",
        "title": "身后留下波纹",
        "alt": "雄鸭在水面游动，脚藏在水下。",
        "caption": "雄鸭在水面游动，脚藏在水下。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/mallard/05-feeding.webp",
        "title": "尾巴朝上找食物",
        "alt": "雌鸭将头伸入浅水，尾部翘起。",
        "caption": "雌鸭将头伸入浅水，尾部翘起。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/mallard/06-young.webp",
        "title": "跟着母鸭游",
        "alt": "三只绒羽小鸭跟着褐色母鸭在水面游动。",
        "caption": "三只绒羽小鸭跟着褐色母鸭在水面游动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      }
    ]
  },
  "featured": true,
  "publishedAt": "2026-09-09",
  "updatedAt": "2026-09-09"
} as const satisfies Species;

export default profile;
