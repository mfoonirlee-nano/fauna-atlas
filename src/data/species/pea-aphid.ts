import type { Species } from '../../types/species.ts';

const profile = {
  "id": "pea-aphid",
  "slug": "pea-aphid",
  "names": {
    "zh": "豌豆蚜",
    "en": "Pea Aphid"
  },
  "scientificName": "Acyrthosiphon pisum",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Arthropoda",
      "zhName": "节肢动物门"
    },
    "class": {
      "scientificName": "Insecta",
      "zhName": "昆虫纲"
    },
    "order": {
      "scientificName": "Hemiptera",
      "zhName": "半翅目"
    },
    "family": {
      "scientificName": "Aphididae",
      "zhName": "蚜科"
    },
    "genus": {
      "scientificName": "Acyrthosiphon",
      "zhName": "长管蚜属"
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
    "assessor": '尚未确认可引用的 IUCN 全球评估；“未评估”表示资料缺口，不能据此判断种群安全。地方记录或 NatureServe 等级不能代替 IUCN 全球等级。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "多地豆科植物种植区"
    ],
    "countries": [],
    "range": '多地豆科作物种植区和草地有记录，寄主包括豌豆与苜蓿。不同寄主群体存在分化，一种植物出现在整体寄主列表中，不表示每个群体都利用它。'
  },
  "habitats": [
    {
      "name": "豆科植物叶片与嫩茎",
      "realm": "terrestrial",
      "description": '豌豆、苜蓿等豆科植物为豌豆蚜提供生活与取食位置，不同寄主群体有所分化。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "豆科植物韧皮部汁液"
    ],
    "description": '豌豆蚜用刺吸口器获取韧皮部汁液，也就是植物运送养分的汁液。它与体内 Buchnera 细菌共生，基因组研究分析了双方在氨基酸营养方面的联系。'
  },
  "tags": [
    "豌豆蚜",
    "豆科植物叶片与嫩茎"
  ],
  "summary": '豌豆蚜吸取豆科植物的汁液，既有绿色也有粉红色个体，还会出现有翅和无翅形态。',
  "description": '它身体柔软，触角长、足细，腹部后方有两根管状腹管。体内共生的 Buchnera 细菌参与营养供应；部分温带种群会在秋季产生有性个体和越冬卵。',
  "storySections": [
    {
      key: 'appearance',
      label: '身体外观',
      title: '腹部后方有两根小管',
      body: '柔软身体有长触角和细足，腹部后方有两根管状腹管。既有有翅与无翅个体，也有绿色、粉红等体色，颜色不能单独确定物种或性别。',
    },
    {
      key: 'habitat',
      label: '栖息环境',
      title: '豆科植物上的寄主群体',
      body: '多地豆科作物种植区和草地有记录，常见寄主包括豌豆、苜蓿。不同寄主群体存在分化，各群体利用的植物范围不完全相同。',
    },
    {
      key: 'feeding',
      label: '取食',
      title: '植物汁液与共生细菌',
      body: '刺吸口器获取植物运送养分的韧皮部汁液，腹管并非取食器官。体内的 Buchnera 共生细菌参与氨基酸营养供应，原始基因组研究分析了双方的联系。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖周期与翅膀形态',
      body: '豌豆蚜有孤雌生殖和有性生殖阶段。部分温带种群在秋季产生有性个体与越冬卵，其他种群的周期不同。若虫蜕皮后成为成虫，没有蛹期；有翅和无翅属于不同形态，不能单凭翅膀判断生命阶段。',
    },
    {
      key: 'taxonomy',
      label: '分类归属',
      title: '半翅目中的蚜虫',
      body: '豌豆蚜的学名为 Acyrthosiphon pisum，属于昆虫纲、半翅目和蚜科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '全球评估资料待补充',
      body: '尚未确认可引用的 IUCN 全球评估。“未评估”表示保护资料缺口，不能据此确定全球种群数量或趋势。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '小蚜虫成为研究共生的材料',
      body: 'Harris 于 1776 年描述了这个物种，现用学名为 Acyrthosiphon pisum。“豌豆蚜”对应它利用豌豆等豆科植物的习性，苜蓿也是记录的寄主。2010 年原始基因组研究把它作为研究材料，分析了与体内 Buchnera 细菌的营养联系；不同寄主群体、繁殖周期和有翅无翅形态，也需要在研究中分别比较。',
    },
  ],
  "keyFacts": [
    '腹部后方有两根管状腹管。',
    '有翅、无翅及绿色、粉红个体都可能出现。',
    '用刺吸口器获取植物汁液。',
    '体内有参与营养供应的共生细菌。',
    '若虫蜕皮成为成虫，没有蛹期。',
  ],
  "threats": [],
  "conservationActions": [
    "保留自然栖息环境",
    "观察时减少对动物的干扰"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "共读观察",
      "value": '腹部后方的两根小管，以及有翅、无翅和不同体色。'
    }
  ],
  "media": {
    "image": "./images/species/pea-aphid/01-cover.webp",
    "alt": "豌豆蚜及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/pea-aphid/02-observation.webp",
        "title": "无翅成虫",
        "alt": '无翅成虫，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。绿色无翅成虫。图像尺度未经实测，不能用于物种鉴定或判断连续动作。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pea-aphid/03-observation.webp",
        "title": "腹部后方的腹管",
        "alt": '腹部后方的腹管，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。无翅成虫腹管放大；不是取食口器。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pea-aphid/04-observation.webp",
        "title": "有翅成虫",
        "alt": '有翅成虫，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。有翅成虫；与无翅个体分开标注。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pea-aphid/05-observation.webp",
        "title": "叶片上的若虫",
        "alt": '叶片上的若虫，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。不同大小的无翅若虫，不按实测比例，不是成虫繁殖动作图。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pea-aphid/06-observation.webp",
        "title": "粉红色无翅成虫",
        "alt": '粉红色无翅成虫，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。粉红色无翅成虫；体色不表示性别。",
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
      "title": "GBIF：接受名称与分类链",
      "url": "https://www.gbif.org/species/2077503",
      "kind": "taxonomy",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "INRAE 蚜虫百科：本种寄主与形态",
      "url": "https://eng-encyclopedie-pucerons.hub.inrae.fr/species/aphids/acyrthosiphon/a.-pisum",
      "kind": "general",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "豌豆蚜基因组原始研究：共生与营养",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2826372/",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "有性与无性豌豆蚜种群生活史比较研究",
      "url": "https://pubmed.ncbi.nlm.nih.gov/28313668/",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-11",
  "updatedAt": "2026-10-11"
} as const satisfies Species;

export default profile;
