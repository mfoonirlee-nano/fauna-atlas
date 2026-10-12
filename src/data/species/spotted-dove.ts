import type { Species } from '../../types/species.ts';

const profile = {
  "id": "spotted-dove",
  "slug": "spotted-dove",
  "names": {
    "zh": "珠颈斑鸠",
    "en": "Spotted Dove"
  },
  "scientificName": "Spilopelia chinensis",
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
      "scientificName": "Columbiformes",
      "zhName": "鸽形目"
    },
    "family": {
      "scientificName": "Columbidae",
      "zhName": "鸠鸽科"
    },
    "genus": {
      "scientificName": "Spilopelia",
      "zhName": "珠颈斑鸠属"
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
    "assessor": "采用来源所列 IUCN 全球等级，独立评估年份未核实。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "亚洲南部、东部与东南部；澳大利亚等地有引入种群"
    ],
    "countries": [],
    "range": "亚洲南部、东部与东南部；澳大利亚等地有引入种群。"
  },
  "habitats": [
    {
      "name": "林缘、农地与公园",
      "realm": "terrestrial",
      "description": '在林缘、公园等有树木和开阔地面的环境活动，地面便于拾食种子，树枝可供停栖。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草籽",
      "谷物"
    ],
    "description": '主要在地面拾食草籽和谷物。'
  },
  "tags": [
    "珠颈斑鸠",
    "林缘、农地与公园"
  ],
  "summary": '珠颈斑鸠在地面拾食种子，常独自或成小群活动；成鸟颈侧有黑底白点的羽毛。',
  "description": '珠颈斑鸠头部灰色，翅膀褐色，颈侧的黑色羽毛上布着白点，尾巴较长。它常在地面拾食草籽和谷物，休息时用脚抓住树枝。成年雌雄羽色相似，幼鸟的黑白颈斑通常较淡。它原分布于亚洲南部、东部和东南部，澳大利亚等地也有引入种群。',
  "storySections": [
    {
      key: 'observation-1',
      label: '身体特点',
      title: '黑底上的白点',
      body: '颈侧的黑色羽毛上有白点，成年雌雄都可有这片花纹。',
    },
    {
      key: 'observation-2',
      label: '身体特点',
      title: '身后的长尾巴',
      body: '尾巴较长，走在地面上时向身体后方伸出。',
    },
    {
      key: 'observation-3',
      label: '身体特点',
      title: '地面上的种子',
      body: '珠颈斑鸠主要在地面拾食草籽和谷物。',
    },
    {
      key: 'observation-4',
      label: '生活习性',
      title: '树枝上的休息处',
      body: '它用脚抓住树枝休息，褐色翅膀收在身体两侧。',
    },
    {
      key: 'observation-5',
      label: '栖息与生活',
      title: '同伴一起觅食',
      body: '珠颈斑鸠可单独或成小群觅食。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保留公园与林缘植被，安静观察，不靠近鸟巢或用食物引鸟摆姿势。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '颈侧的珠点与旧属名',
      body: 'Scopoli 在 1786 年以 Columba chinensis 发表了珠颈斑鸠的科学名称。后来它被归入 Spilopelia 属，现用学名为 Spilopelia chinensis。中文名“珠颈”与成鸟颈侧黑底上的白点相对应；幼鸟这片斑纹通常不如成鸟鲜明，辨认时也要考虑年龄。',
    },
  ],
  "keyFacts": [
    '颈侧的黑色羽毛上有白点，成年雌雄都可有这片花纹。',
    '尾巴较长，走在地面上时向身体后方伸出。',
    '珠颈斑鸠主要在地面拾食草籽和谷物。',
    '它用脚抓住树枝休息，褐色翅膀收在身体两侧。',
    '珠颈斑鸠可单独或成小群觅食。',
    'Scopoli 在 1786 年以 Columba chinensis 发表了珠颈斑鸠的科学名称。后来它被归入 Spilopelia 属，现用学名为 Spilopelia chinensis。中文名“珠颈”与成鸟颈侧黑底上的白点相对应；幼鸟这片斑纹通常不如成鸟鲜明，辨认时也要考虑年龄。',
  ],
  "threats": [
    "局部栖息地改变",
    "巢位受扰"
  ],
  "conservationActions": [
    "保留公园与林缘植被，安静观察，不靠近鸟巢或用食物引鸟摆姿势。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "林缘、农地与公园"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "黑底上的白点"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "无危",
      "note": "采用来源所列 IUCN 全球等级，独立评估年份未核实。"
    }
  ],
  "media": {
    "image": "./images/species/spotted-dove/01-cover.webp",
    "alt": "珠颈斑鸠及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/spotted-dove/02-observation.webp",
        "alt": "珠颈斑鸠：黑底上的白点",
        "title": "黑底上的白点",
        "caption": "AI 生成科学情景重建。从灰色头部向下看，找找颈侧黑色羽毛上的白点。成年雌雄都可有这片花纹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-dove/03-observation.webp",
        "alt": "珠颈斑鸠：身后的长尾巴",
        "title": "身后的长尾巴",
        "caption": "AI 生成科学情景重建。沿着背部看到尾巴尖。走在地面上时，长尾巴在身体后方伸出。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-dove/04-observation.webp",
        "alt": "珠颈斑鸠：地面上的种子",
        "title": "地面上的种子",
        "caption": "AI 生成科学情景重建。找找嘴边的小种子。珠颈斑鸠主要在地面拾食草籽和谷物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-dove/05-observation.webp",
        "alt": "珠颈斑鸠：树枝上的休息处",
        "title": "树枝上的休息处",
        "caption": "AI 生成科学情景重建。看看脚怎样抓住树枝，再找找收在身体两侧的褐色翅膀。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-dove/06-observation.webp",
        "alt": "珠颈斑鸠：同伴一起觅食",
        "title": "同伴一起觅食",
        "caption": "AI 生成科学情景重建。在草地上找找两只珠颈斑鸠。它们可以单独或成小群觅食，图中不能据外形判断性别。",
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
      "title": "BirdLife Australia：珠颈斑鸠与全球保护等级",
      "url": "https://birdlife.org.au/bird-profiles/spotted-dove/",
      "kind": "conservation",
      "accessedAt": "2026-09-27"
    },
    {
      "title": "台湾生物多样性网络：珠颈斑鸠指名亚种",
      "url": "https://www.tbn.org.tw/taxa/480cdaf0-aa28-44f4-b906-780e9aa7a52d",
      "kind": "taxonomy",
      "accessedAt": "2026-09-27"
    },
    {
      title: 'GBIF：珠颈斑鸠的现用学名与描述作者',
      url: 'https://www.gbif.org/species/6101224',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
    {
      title: 'GBIF：Columba chinensis 原学名记录',
      url: 'https://www.gbif.org/species/10279330',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-27",
  "updatedAt": "2026-09-27"
} as const satisfies Species;

export default profile;
