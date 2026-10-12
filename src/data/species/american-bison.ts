import type { Species } from '../../types/species.ts';

const profile = {
  "id": "american-bison",
  "slug": "american-bison",
  "names": {
    "zh": "美洲野牛",
    "en": "American Bison",
    "aliases": [
      "Bos bison"
    ]
  },
  "scientificName": "Bison bison",
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
      "scientificName": "Artiodactyla",
      "zhName": "偶蹄目"
    },
    "family": {
      "scientificName": "Bovidae",
      "zhName": "牛科"
    },
    "genus": {
      "scientificName": "Bison",
      "zhName": "野牛属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "NT",
    "label": {
      "zh": "近危",
      "en": "Near Threatened"
    },
    "trend": "unknown",
    "assessor": "IUCN；等级来源与适用范围见来源记录"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "北美草原与疏林"
    ],
    "countries": [
      "美国",
      "加拿大",
      "墨西哥"
    ],
    "range": "原生范围横跨北美大片地区；现存保护种群分散在美国、加拿大和墨西哥的部分地区。档案涵盖平原野牛与森林野牛，图集以平原野牛外形为主。地图点仅代表黄石地区。",
    "center": {
      "lat": 44.6,
      "lng": -110.5
    }
  },
  "habitats": [
    {
      "name": "草原与草甸",
      "realm": "terrestrial",
      "description": '利用北美草原、草甸及部分林地，主要吃草。冬天摆头拨雪，寻找被覆盖的植物。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "禾草",
      "莎草",
      "其他草本植物"
    ],
    "description": "美洲野牛主要吃草，也吃其他草本植物。看吃草图，找到靠近地面的嘴和支撑身体的腿。"
  },
  "tags": [
    "美洲野牛",
    "高高隆起的肩背"
  ],
  "summary": "美洲野牛前半身粗壮，肩背隆起，下巴长着长毛。肩背的强壮肌肉有骨骼支撑，帮助它在冬天摆头拨开积雪。",
  "description": '美洲野牛头颈和肩部毛浓密，下巴有长毛，雌雄都有角。幼仔常呈红褐色。牛群组成随年龄、性别和季节变化。',
  "storySections": [
    {
      key: 'hump',
      label: '生活与认识',
      title: '肩背高高隆起',
      body: '美洲野牛前半身粗壮，肩背隆起，后半身相对低小。隆起处有骨骼支撑的强壮肌肉，冬天能帮助它摆动头部拨开积雪。',
    },
    {
      key: 'coat',
      label: '生活与认识',
      title: '前半身毛更长',
      body: '美洲野牛头颈和肩部的毛浓密，下巴垂着长毛。雄性和雌性都有角，成年雄性通常更大。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '低下头吃草',
      body: '美洲野牛主要吃草，也吃其他草本植物。看吃草图，找到靠近地面的嘴和支撑身体的腿。',
    },
    {
      key: 'snow',
      label: '生活与认识',
      title: '拨开雪找食物',
      body: '冬天，美洲野牛会左右摆头，把积雪扫开寻找植物。厚毛帮助它们在寒冷环境中生活。',
    },
    {
      key: 'calf',
      label: '生活与认识',
      title: '幼仔披着红褐色毛',
      body: '幼仔的毛常呈红褐色，与成年个体的深色外形不同。美洲野牛会成群生活，群体组成随年龄、性别和季节变化。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '让野生牛群有草地',
      body: '美洲野牛全球 IUCN 等级为近危，仍依赖持续保护。保护连通的活动空间、维持野生种群遗传多样性，都不能用牧场饲养数量代替。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '野牛的属名有不同处理',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Bison bison。NPS 与 IUCN 使用 Bison bison，Mammal Diversity Database 将野牛放在牛属，写作 Bos bison。档案包含平原野牛与森林野牛，图集主要展示平原野牛；小牛红褐色的毛也与成体深色不同。',
    },
  ],
  "keyFacts": [
    '前半身粗壮，肩背肌肉隆起。',
    '头颈、肩部和下巴毛较长。',
    '主要吃草及其他草本植物。',
    '冬天能摆头拨开积雪找食物。',
    '幼仔常披红褐色毛。',
    'NPS 与 IUCN 使用 Bison bison；MDD 将其放在牛属，采用 Bos bison。',
  ],
  "threats": [
    "栖息地破碎化",
    "小种群隔离",
    "家牛基因混入"
  ],
  "conservationActions": [
    "恢复草原栖息地",
    "保护野生种群遗传多样性",
    "支持原住民与保护机构恢复牛群"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "高高隆起的肩背"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "禾草"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "草原与草甸"
    }
  ],
  "media": {
    "image": "./images/species/american-bison/01-cover.webp",
    "alt": "美洲野牛与生活环境的全身场景",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/american-bison/02-observation.webp",
        "title": "高高的肩背",
        "alt": "美洲野牛侧身站立，肩背明显隆起",
        "caption": "AI 生成科学情景重建。美洲野牛侧身站立，肩背明显隆起。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-bison/03-observation.webp",
        "title": "下巴的长毛",
        "alt": "美洲野牛头部可见短角和下巴长毛",
        "caption": "AI 生成科学情景重建。美洲野牛头部可见短角和下巴长毛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-bison/04-observation.webp",
        "title": "低头吃草",
        "alt": "美洲野牛低下头在草原取食",
        "caption": "AI 生成科学情景重建。美洲野牛低下头在草原取食。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-bison/05-observation.webp",
        "title": "冬天找草",
        "alt": "美洲野牛低头拨开积雪",
        "caption": "AI 生成科学情景重建。美洲野牛低头拨开积雪。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/american-bison/06-observation.webp",
        "title": "红褐色幼仔",
        "alt": "成年野牛与红褐色幼仔站在草地上",
        "caption": "AI 生成科学情景重建。成年野牛与红褐色幼仔站在草地上。",
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
      "title": "ASM Mammal Diversity Database — 分类与名称",
      "url": "https://www.mammaldiversity.org/taxon/1006256/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-13"
    },
    {
      "title": "NPS — 美洲野牛基本资料",
      "url": "https://www.nps.gov/subjects/bison/bison-facts.htm",
      "kind": "ecology",
      "accessedAt": "2026-09-13"
    },
    {
      "title": "NPS — 黄石野牛生态",
      "url": "https://www.nps.gov/yell/learn/nature/bison.htm",
      "kind": "ecology",
      "accessedAt": "2026-09-13"
    },
    {
      "title": "IUCN — 全球保护等级：60 年保护回顾",
      "url": "https://nc.iucnredlist.org/redlist/content/attachment_files/Red_List_60_years_of_success_report_03Oct2025.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-13"
    },
    {
      "title": "NPS — Bison bison 名称与分类",
      "url": "https://www.nps.gov/subjects/bison/bison-facts.htm",
      "kind": "taxonomy",
      "accessedAt": "2026-09-13"
    },
    {
      title: 'GBIF：Bison bison 的命名作者与年份',
      url: 'https://www.gbif.org/species/2441176',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-13",
  "updatedAt": "2026-09-13"
} as const satisfies Species;

export default profile;
