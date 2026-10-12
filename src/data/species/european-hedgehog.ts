import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-erinaceus-europaeus",
  "slug": "european-hedgehog",
  "names": {
    "zh": "西欧刺猬",
    "en": "Western European Hedgehog",
    "aliases": []
  },
  "scientificName": "Erinaceus europaeus",
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
      "scientificName": "Eulipotyphla",
      "zhName": "真盲缺目"
    },
    "family": {
      "scientificName": "Erinaceidae",
      "zhName": "猬科"
    },
    "genus": {
      "scientificName": "Erinaceus",
      "zhName": "猬属"
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
    "assessor": "IUCN（等级见所列保护来源）"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲"
    ],
    "countries": [
      "英国",
      "法国",
      "西班牙",
      "德国"
    ],
    "regions": [
      "欧洲西部与北部"
    ],
    "range": "原生分布包括欧洲西部与北部；引入新西兰的种群不作为原生分布。地图焦点代表欧洲示意位置。",
    "center": {
      "lat": 51,
      "lng": 4
    }
  },
  "habitats": [
    {
      "realm": "terrestrial",
      "name": "树篱、林缘与花园",
      "description": "在落叶和低矮植被间寻找食物，利用隐蔽处筑巢。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "metrics": {},
  "diet": {
    "types": [
      "omnivore",
      "insectivore"
    ],
    "foods": [
      "甲虫",
      "其他昆虫",
      "蚯蚓",
      "其他小型无脊椎动物"
    ],
    "description": "刺猬主要寻找昆虫等小型无脊椎动物，也吃蚯蚓。它会贴近地面嗅闻，用鼻子寻找食物。"
  },
  "activity": [
    "主要夜间活动",
    "冬眠"
  ],
  "tags": [
    "西欧刺猬",
    "背上的刺"
  ],
  "summary": "西欧刺猬背上的刺是特化的毛，脸和腹部仍有软毛。遇到威胁时，它会收起头和脚，蜷成刺球。",
  "description": '西欧刺猬有尖嘴和短脚，主要在夜间贴着地面嗅闻，寻找昆虫、蚯蚓等小动物。白天躲在隐蔽的巢内，寒冷季节会冬眠。',
  "storySections": [
    {
      key: 'spines',
      label: '生活与认识',
      title: '背上长着刺',
      body: '刺猬的刺是特化的毛，腹部没有同样的刺甲。',
    },
    {
      key: 'curl',
      label: '生活与认识',
      title: '把头和脚藏起来',
      body: '刺猬收紧身体，可以卷成防御用的刺球。观察野生刺猬时应保持距离，避免触碰或惊吓它。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '在落叶间找小动物',
      body: '刺猬主要寻找昆虫等小型无脊椎动物，也吃蚯蚓。它会贴近地面嗅闻，用鼻子寻找食物。',
    },
    {
      key: 'night',
      label: '生活与认识',
      title: '天暗后出来走动',
      body: '西欧刺猬主要在夜间活动，白天常躲在隐蔽巢穴。图集采用较亮的光线，方便观察短脚、尖嘴和背刺。',
    },
    {
      key: 'nest',
      label: '生活与认识',
      title: '用落叶做窝',
      body: '刺猬会利用树篱下等隐蔽位置筑巢，在寒冷季节冬眠。冬眠时间会随当地气候变化。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '让树篱和花园连起来',
      body: 'IUCN 在 2024 年将本种由无危调整为近危。栖息地破碎、道路死亡和食物减少使刺猬受到压力。连接树篱、花园与林缘，能为它们留下觅食和移动空间。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '背上的刺也是毛',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Erinaceus europaeus。刺猬的背刺来自特化的毛，脸和腹部仍有软毛。受威胁时，它收紧身体，把头和脚藏在刺球中；冬眠则在树篱等隐蔽处的巢里进行。',
    },
  ],
  "keyFacts": [
    '背刺是特化的毛，脸和腹部有软毛。',
    '受到威胁时可把头和脚藏进刺球。',
    '主要吃昆虫、蚯蚓等小型无脊椎动物。',
    '主要夜间活动，白天躲在巢内。',
    '寒冷季节冬眠，时间随当地气候变化。',
  ],
  "threats": [
    "栖息地破碎化与道路死亡。",
    "农业集约化及无脊椎动物食物减少。"
  ],
  "conservationActions": [
    "保留树篱和落叶隐蔽处。",
    "管理花园时先检查草丛与落叶堆中是否藏有动物。"
  ],
  "featuredStats": [
    {
      "key": "0",
      "label": "观察重点",
      "value": "背上的刺"
    },
    {
      "key": "1",
      "label": "活动时间",
      "value": "主要夜间"
    },
    {
      "key": "2",
      "label": "防御姿势",
      "value": "蜷成一团"
    }
  ],
  "sources": [
    {
      "title": "Mammal Diversity Database — 西欧刺猬分类",
      "url": "https://www.classic.mammaldiversity.org/taxon/1003810",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Animal Diversity Web — 西欧刺猬",
      "url": "https://animaldiversity.org/accounts/Erinaceus_europaeus/",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "IUCN — 2024 年西欧刺猬等级调整",
      "url": "https://iucn.org/press-release/202410/more-one-three-tree-species-worldwide-faces-extinction-iucn-red-list",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      title: 'GBIF：Erinaceus europaeus 的命名作者与年份',
      url: 'https://www.gbif.org/species/5219616',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "media": {
    "image": "./images/species/european-hedgehog/01-cover.webp",
    "alt": "西欧刺猬位于画面右侧的自然栖息环境中。",
    "focalPoint": {
      "x": 0.79,
      "y": 0.39
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/european-hedgehog/02-observation.webp",
        "title": "背刺和短脚",
        "alt": "西欧刺猬走过落叶地，背刺、尖嘴和短脚可见。",
        "caption": "西欧刺猬走过落叶地，背刺、尖嘴和短脚可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-hedgehog/03-observation.webp",
        "title": "近看背刺",
        "alt": "近景展示刺猬背部棕白相间的刺。",
        "caption": "近景展示刺猬背部棕白相间的刺。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-hedgehog/04-observation.webp",
        "title": "落叶间找食物",
        "alt": "刺猬低头嗅闻，前方有一条蚯蚓。",
        "caption": "刺猬低头嗅闻，前方有一条蚯蚓。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-hedgehog/05-observation.webp",
        "title": "蜷成一团",
        "alt": "刺猬蜷成刺球，头和脚藏在里面。",
        "caption": "刺猬蜷成刺球，头和脚藏在里面。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-hedgehog/06-observation.webp",
        "title": "树篱下的窝",
        "alt": "刺猬蜷卧在树篱下的落叶窝中。",
        "caption": "刺猬蜷卧在树篱下的落叶窝中。",
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
