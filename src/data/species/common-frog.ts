import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-frog",
  "slug": "common-frog",
  "names": {
    "zh": "欧洲林蛙",
    "en": "Common Frog"
  },
  "scientificName": "Rana temporaria",
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
      "scientificName": "Amphibia",
      "zhName": "两栖纲"
    },
    "order": {
      "scientificName": "Anura",
      "zhName": "无尾目"
    },
    "family": {
      "scientificName": "Ranidae",
      "zhName": "蛙科"
    },
    "genus": {
      "scientificName": "Rana",
      "zhName": "蛙属"
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
    "assessor": "依据所列来源中的全球等级；未单独核实评估日期"
  },
  "distribution": {
    "realms": [
      "terrestrial",
      "freshwater"
    ],
    "continents": [
      "欧洲",
      "亚洲"
    ],
    "regions": [
      "欧洲"
    ],
    "countries": [
      "英国",
      "法国",
      "德国",
      "瑞典",
      "俄罗斯"
    ],
    "range": "广布欧洲，并向东延伸到亚洲西部；常见于湿润草地、林地和繁殖水域附近。",
    "center": {
      "lat": 52,
      "lng": 10
    }
  },
  "habitats": [
    {
      "name": "湿润林地、草地与池塘",
      "realm": "terrestrial",
      "description": "广布欧洲，并向东延伸到亚洲西部；常见于湿润草地、林地和繁殖水域附近。",
      "isPrimary": true
    },
    {
      "name": "繁殖池塘",
      "realm": "freshwater",
      "description": "卵与蝌蚪在水中发育。"
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "昆虫",
      "蛞蝓",
      "蚯蚓",
      "其他小型无脊椎动物"
    ],
    "description": "成体取食昆虫、蛞蝓、蚯蚓、其他小型无脊椎动物。"
  },
  "tags": [
    "欧洲林蛙",
    "眼后的深色斑"
  ],
  "summary": "欧洲林蛙在湿润陆地寻找小动物，繁殖时回到浅水产卵。它眼后有深色斑，长后腿常折在身体两侧。",
  "description": '欧洲林蛙广布欧洲，向东延伸到亚洲西部。成蛙在湿润草地和林地寻找昆虫、蛞蝓等小动物，繁殖时回到浅水产卵。它眼后的深色斑围着鼓膜，粗长的后腿能帮助跳跃和游泳。蝌蚪先靠尾巴游泳，随后长出四肢，尾巴逐渐缩短。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '眼后的深色斑',
      body: '眼睛后面的深色区域包围着鼓膜。不同个体的身体底色和斑点会有差别。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '折起来的后腿',
      body: '粗长的后腿折在身体两侧，伸展时帮助它跳跃和游泳。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '水里的卵团',
      body: '雌蛙把卵产在浅水中，许多带透明胶质的卵聚成团，里面可见深色胚胎。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '摆尾巴的蝌蚪',
      body: '刚孵出的蝌蚪用尾巴游泳，随着发育长出腿，尾巴逐渐缩短。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '落叶间找食物',
      body: '成蛙会离开水，在湿润草地和林地捕食昆虫、蛞蝓等小动物，也利用遮蔽物休息。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '全球保护等级为无危。保留池塘及周边植被，减少水体污染。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '比正式学名更早的图像',
      body: 'Linnaeus 在 1758 年发表 Rana temporaria，原始记录的产地写作欧洲。他还引用了 Gessner 在 1554 年等早期著作中的动物图像。因此，1758 年对应它进入现代科学命名体系的时间，欧洲读者更早就已在自然史书里见过这种蛙。',
    },
  ],
  "keyFacts": [
    "眼睛后面的深色区域包围着鼓膜。不同个体的身体底色和斑点会有差别。",
    "粗长的后腿折在身体两侧，伸展时帮助它跳跃和游泳。",
    "雌蛙把卵产在浅水中，许多带透明胶质的卵聚成团，里面可见深色胚胎。",
    "刚孵出的蝌蚪用尾巴游泳，随着发育长出腿，尾巴逐渐缩短。",
    "成蛙会离开水，在湿润草地和林地捕食昆虫、蛞蝓等小动物，也利用遮蔽物休息。"
  ],
  "threats": [
    "繁殖池塘消失",
    "栖息地破碎化与污染"
  ],
  "conservationActions": [
    "保留池塘及周边植被",
    "减少水体污染"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "眼后的深色斑"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "湿润林地、草地与池塘"
    }
  ],
  "media": {
    "image": "./images/species/common-frog/01-cover.webp",
    "alt": "欧洲林蛙的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-frog/02-observation.webp",
        "title": "眼后的深色斑",
        "alt": "欧洲林蛙：眼后的深色斑",
        "caption": "AI 生成科学情景重建。眼睛后面的深色区域包围着鼓膜。不同个体的身体底色和斑点会有差别。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-frog/03-observation.webp",
        "title": "折起来的后腿",
        "alt": "欧洲林蛙：折起来的后腿",
        "caption": "AI 生成科学情景重建。粗长的后腿折在身体两侧，伸展时帮助它跳跃和游泳。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-frog/04-observation.webp",
        "title": "水里的卵团",
        "alt": "欧洲林蛙：水里的卵团",
        "caption": "AI 生成科学情景重建。雌蛙把卵产在浅水中，许多带透明胶质的卵聚成团，里面可见深色胚胎。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-frog/05-observation.webp",
        "title": "摆尾巴的蝌蚪",
        "alt": "欧洲林蛙：摆尾巴的蝌蚪",
        "caption": "AI 生成科学情景重建。刚孵出的蝌蚪用尾巴游泳，随着发育长出腿，尾巴逐渐缩短。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-frog/06-observation.webp",
        "title": "落叶间找食物",
        "alt": "欧洲林蛙：落叶间找食物",
        "caption": "AI 生成科学情景重建。成蛙会离开水，在湿润草地和林地捕食昆虫、蛞蝓等小动物，也利用遮蔽物休息。",
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
      "title": "Froglife：欧洲林蛙",
      "url": "https://www.froglife.org/info-advice/amphibians-and-reptiles/common-frog-2/",
      "kind": "ecology",
      "accessedAt": "2026-09-19"
    },
    {
      "title": "Amphibian Species of the World：欧洲林蛙",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Ranidae/Rana/Rana-temporaria",
      "kind": "taxonomy",
      "accessedAt": "2026-09-19"
    },
    {
      "title": "ZSL：两栖动物保护项目及全球等级",
      "url": "https://www.zsl.org/what-we-do/projects/amphibian-chytridiomycosis",
      "kind": "conservation",
      "accessedAt": "2026-09-19"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-19",
  "updatedAt": "2026-09-19"
} as const satisfies Species;

export default profile;
