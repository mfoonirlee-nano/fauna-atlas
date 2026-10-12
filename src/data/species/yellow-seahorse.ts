import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-hippocampus-kuda",
  "slug": "yellow-seahorse",
  "names": {
    "zh": "黄海马",
    "en": "Yellow Seahorse",
    "aliases": []
  },
  "scientificName": "Hippocampus kuda",
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
      "scientificName": "Actinopterygii",
      "zhName": "辐鳍鱼纲"
    },
    "order": {
      "scientificName": "Syngnathiformes",
      "zhName": "海龙目"
    },
    "family": {
      "scientificName": "Syngnathidae",
      "zhName": "海龙科"
    },
    "genus": {
      "scientificName": "Hippocampus",
      "zhName": "海马属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "VU",
    "label": {
      "zh": "易危",
      "en": "Vulnerable"
    },
    "trend": "unknown",
    "assessor": "IUCN（等级见所列保护来源）",
    "assessedYear": 2012,
    "criteria": "A2cd+3cd+4cd"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "亚洲"
    ],
    "countries": [
      "印度",
      "印度尼西亚",
      "越南",
      "中国"
    ],
    "regions": [
      "印度洋与西太平洋近岸"
    ],
    "range": '按 Eschmeyer 鱼类名录的处理，本种见于印度洋和西太平洋部分近岸海域。早期文献的范围较宽，其中一些记录后来经过分类修订，仍需分别核对。',
    "center": {
      "lat": 10,
      "lng": 105
    }
  },
  "habitats": [
    {
      "realm": "marine",
      "name": "海草床与河口近岸",
      "description": "用尾部攀附海草等支撑物，捕食微小动物。",
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 7,
      "max": 17,
      "unit": "cm",
      "note": "ADW 的头冠至尾尖测量值，与卷尾状态下的可见高度不同；不用于标准化头体长比较。"
    }
  },
  "metrics": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小型甲壳动物",
      "浮游动物"
    ],
    "description": '用管状吻吸入小型甲壳动物等猎物。'
  },
  "activity": [
    "日间活动",
    "卷尾攀附"
  ],
  "tags": [
    "黄海马",
    "卷起来的尾巴"
  ],
  "summary": "黄海马用卷曲的尾巴抓住海草等物体，再用细长的嘴吸入小猎物。它属于鱼类，皮肤下有骨板，尾端没有展开的尾鳍。",
  "description": '黄海马有低而圆钝的体表突起，皮肤覆盖着骨板。个体可呈浅黄、褐色或近黑色，颜色和斑纹也会变化，鉴定时需要结合身体结构。',
  "storySections": [
    {
      key: 'tail',
      label: '生活与认识',
      title: '尾巴卷住海草',
      body: '黄海马的尾巴能弯曲卷握，帮助身体固定在海草等物体上。',
    },
    {
      key: 'body',
      label: '生活与认识',
      title: '身上有一圈圈骨板',
      body: '海马属于鱼类，皮肤覆盖着骨板。黄海马身上的突起较低而圆钝；它没有鱼尾那样展开的尾鳍。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '用管状嘴吸入食物',
      body: '黄海马吃小型甲壳动物等猎物，用管状的吻吸入食物。看近景时，找找伸向前方的嘴。',
    },
    {
      key: 'colour',
      label: '生活与认识',
      title: '黄海马也有深色个体',
      body: '本种可呈浅黄、褐色或近黑色，颜色和斑纹会变化。黄色并不能单独证明物种身份，辨认还要看身体结构。',
    },
    {
      key: 'pouch',
      label: '生活与认识',
      title: '爸爸用育儿袋护卵',
      body: '雌海马把卵交给雄海马后，雄海马在育儿袋内照顾胚胎，直到幼海马离开。图中只展示袋的外形，不展示内部结构。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '保留海草床，减少误捕',
      body: '本种全球等级为易危。捕捞、误捕和近岸栖息地退化会威胁海马。保护海草床，并减少破坏海底的捕捞方式，有助于留下攀附和觅食的地方。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“黄海马”不一定是黄色',
      body: 'Bleeker 于 1852 年描述了这个物种，现用学名为 Hippocampus kuda。个体可呈浅黄、褐色或近黑色，因此颜色不能单独确认物种。更特别的是它的繁殖方式：雌性把卵交给雄性，雄性在育儿袋里照顾胚胎。',
    },
  ],
  "keyFacts": [
    '卷握的尾巴能抓住海草等支撑物。',
    '皮肤覆盖骨板，体表突起低而圆钝。',
    '用管状吻吸入小猎物。',
    '有浅黄、褐色和近黑色个体。',
    '雄海马在育儿袋中照顾胚胎。',
  ],
  "threats": [
    "定向捕捞与渔业误捕。",
    "海草床退化及近岸开发。"
  ],
  "conservationActions": [
    "保护海草床，减少破坏性捕捞和误捕。",
    "不购买来源不明的野生海马制品。"
  ],
  "featuredStats": [
    {
      "key": "0",
      "label": "观察重点",
      "value": "卷起来的尾巴"
    },
    {
      "key": "1",
      "label": "主要食物",
      "value": "小型甲壳动物"
    },
    {
      "key": "2",
      "label": "育幼成员",
      "value": "雄海马"
    }
  ],
  "sources": [
    {
      "title": "Eschmeyer 鱼类名录 — 黄海马名称与修订分布",
      "url": "https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?genus=Hippocampus&tbl=species",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Animal Diversity Web — 黄海马形态与生活",
      "url": "https://animaldiversity.org/accounts/Hippocampus_kuda/",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "CMFRI — 黄海马繁殖与保护",
      "url": "https://eprints.cmfri.org.in/14955/1/Hippocampus%20kuda.pdf",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "FishBase — 黄海马全球等级及评估日期",
      "url": "https://www.fishbase.se/summary/Hippocampus-kuda",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      title: 'GBIF：Hippocampus kuda 的命名作者与年份',
      url: 'https://www.gbif.org/species/5201037',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "media": {
    "image": "./images/species/yellow-seahorse/01-cover.webp",
    "alt": "黄海马位于画面右侧的自然栖息环境中。",
    "focalPoint": {
      "x": 0.75,
      "y": 0.39
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/yellow-seahorse/02-observation.webp",
        "title": "尾巴抓住海草",
        "alt": "黄色黄海马直立在海草间，尾巴卷握一根海草。",
        "caption": "黄色黄海马直立在海草间，尾巴卷握一根海草。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-seahorse/03-observation.webp",
        "title": "卷握的尾尖",
        "alt": "近景展示黄海马带有环纹的尾巴卷住海草。",
        "caption": "近景展示黄海马带有环纹的尾巴卷住海草。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-seahorse/04-observation.webp",
        "title": "管状的嘴",
        "alt": "黄海马的吻前方有一只小虾。",
        "caption": "黄海马的吻前方有一只小虾。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-seahorse/05-observation.webp",
        "title": "褐色的黄海马",
        "alt": "一只褐色黄海马攀附在海草间。",
        "caption": "一只褐色黄海马攀附在海草间。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-seahorse/06-observation.webp",
        "title": "雄海马的育儿袋",
        "alt": "雄黄海马侧面可见躯干下方的育儿袋外形。",
        "caption": "雄黄海马侧面可见躯干下方的育儿袋外形。",
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
