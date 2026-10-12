import type { Species } from '../../types/species.ts';

const profile = {
  "id": "pig-nosed-turtle",
  "slug": "pig-nosed-turtle",
  "names": {
    "zh": "猪鼻龟",
    "en": "Pig-nosed Turtle"
  },
  "scientificName": "Carettochelys insculpta",
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
      "scientificName": "Testudines",
      "zhName": "龟鳖目"
    },
    "family": {
      "scientificName": "Carettochelyidae",
      "zhName": "两爪鳖科"
    },
    "genus": {
      "scientificName": "Carettochelys",
      "zhName": "两爪鳖属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "EN",
    "label": {
      "zh": "濒危",
      "en": "Endangered"
    },
    "trend": "unknown",
    "assessor": '全球等级为 EN（濒危）；独立评估日期与种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "大洋洲"
    ],
    "regions": [
      "新几内亚南部与澳大利亚北部的河流和湖泊"
    ],
    "countries": [
      "印度尼西亚",
      "巴布亚新几内亚",
      "澳大利亚"
    ],
    "range": "新几内亚南部与澳大利亚北部的河流和湖泊。列出的国家为代表性分布地，不是完整名录。"
  },
  "habitats": [
    {
      "name": "新几内亚南部与澳大利亚北部的河流和湖泊",
      "realm": "freshwater",
      "description": "新几内亚南部与澳大利亚北部的河流和湖泊。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "落果",
      "水生植物",
      "软体动物",
      "甲壳动物"
    ],
    "description": "主要取食落果、水生植物、软体动物、甲壳动物。"
  },
  "tags": [
    "猪鼻龟",
    "前肢像小桨"
  ],
  "summary": '猪鼻龟用宽扁前肢划水，把突出的鼻部伸出水面呼吸。它的背甲覆盖皮肤，雌龟会到沙质河岸产卵。',
  "description": '猪鼻龟生活在新几内亚南部和澳大利亚北部的河流、湖泊。它用宽扁前肢划水，把突出的鼻部伸向水面呼吸，身体仍可留在水里。背甲覆盖皮肤，表面呈革质外观。它吃落入河中的果实、水生植物和小动物；雌龟上沙质河岸挖穴产卵。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '前肢像小桨',
      body: '猪鼻龟用宽扁的前肢在水中游动，四肢外形与许多淡水龟不同。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '鼻孔探出水面',
      body: '它把突出的鼻部伸向水面呼吸，身体可以留在水里。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '背上没有大块角质盾片',
      body: '背甲表面覆盖皮肤，呈革质外观，不像海龟那样有明显的大块角质盾片。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '河里的落果',
      body: '它会吃落入河中的果实，也取食水生植物和小动物。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '雌龟到岸上产卵',
      body: '雌龟会离开水面，在沙质河岸挖穴产卵。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保护产卵沙岸，减少采卵和对野生个体的捕捉。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '卷册年份和出版年份不相同',
      body: 'Ramsay 在 1886 年描述猪鼻龟，模式产地记录为新几内亚的弗莱河。原始描述所在卷册标着 1887 年，但爬行动物数据库记录实际出版时间是 1886 年 5 月 25 日。种名 insculpta 有“雕刻过的”含义，指背甲表面的凹纹；中文名则让人注意它突出的鼻部。',
    },
  ],
  "keyFacts": [
    "猪鼻龟用宽扁的前肢在水中游动，四肢外形与许多淡水龟不同。",
    "它把突出的鼻部伸向水面呼吸，身体可以留在水里。",
    "背甲表面覆盖皮肤，呈革质外观，不像海龟那样有明显的大块角质盾片。",
    "它会吃落入河中的果实，也取食水生植物和小动物。",
    "雌龟会离开水面，在沙质河岸挖穴产卵。"
  ],
  "threats": [
    "捕捉与采卵",
    "河岸栖息地破坏"
  ],
  "conservationActions": [
    "保护产卵沙岸，减少采卵和对野生个体的捕捉。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "前肢像小桨"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "新几内亚南部与澳大利亚北部的河流和湖泊"
    }
  ],
  "media": {
    "image": "./images/species/pig-nosed-turtle/01-cover.webp",
    "alt": "猪鼻龟在自然栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/pig-nosed-turtle/02-observation.webp",
        "title": "前肢像小桨",
        "alt": "猪鼻龟：前肢像小桨",
        "caption": "AI 生成科学情景重建。猪鼻龟用宽扁的前肢在水中游动，四肢外形与许多淡水龟不同。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pig-nosed-turtle/03-observation.webp",
        "title": "鼻孔探出水面",
        "alt": "猪鼻龟：鼻孔探出水面",
        "caption": "AI 生成科学情景重建。它把突出的鼻部伸向水面呼吸，身体可以留在水里。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pig-nosed-turtle/04-observation.webp",
        "title": "背上没有大块角质盾片",
        "alt": "猪鼻龟：背上没有大块角质盾片",
        "caption": "AI 生成科学情景重建。背甲表面覆盖皮肤，呈革质外观，不像海龟那样有明显的大块角质盾片。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pig-nosed-turtle/05-observation.webp",
        "title": "河里的落果",
        "alt": "猪鼻龟：河里的落果",
        "caption": "AI 生成科学情景重建。它会吃落入河中的果实，也取食水生植物和小动物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pig-nosed-turtle/06-observation.webp",
        "title": "雌龟到岸上产卵",
        "alt": "猪鼻龟：雌龟到岸上产卵",
        "caption": "AI 生成科学情景重建。雌龟会离开水面，在沙质河岸挖穴产卵。",
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
      "title": "ADW：猪鼻龟分布与生活史",
      "url": "https://animaldiversity.org/accounts/Carettochelys_insculpta/",
      "kind": "ecology",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "IUCN 龟类专家组 2025 清单：分类与濒危状态",
      "url": "https://iucn-tftsg.org/wp-content/uploads/crm.10.checklist.atlas_.v10.2025.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-20"
    },
    {
      title: 'The Reptile Database：猪鼻龟命名史',
      url: 'https://reptile-database.reptarium.cz/Carettochelys/insculpta',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-20",
  "updatedAt": "2026-09-20"
} as const satisfies Species;

export default profile;
