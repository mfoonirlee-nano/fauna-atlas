import type { Species } from '../../types/species.ts';

const profile = {
  "id": "diamondback-terrapin",
  "slug": "diamondback-terrapin",
  "names": {
    "zh": "菱斑龟",
    "en": "Diamondback Terrapin",
    "aliases": []
  },
  "scientificName": "Malaclemys terrapin",
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
      "scientificName": "Emydidae",
      "zhName": "泽龟科"
    },
    "genus": {
      "scientificName": "Malaclemys",
      "zhName": "菱斑龟属"
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
    "assessor": "采用所列机构资料的 IUCN 全球等级；独立评估年份未核实，全球趋势未录入。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "北美海岸河口与盐沼"
    ],
    "countries": [
      "美国"
    ],
    "range": "美国大西洋和墨西哥湾沿岸，从马萨诸塞州至佛罗里达，再向西至得克萨斯州的河口、潮汐水道与盐沼；分布并非沿岸连续。"
  },
  "habitats": [
    {
      "name": "北美海岸河口与盐沼",
      "realm": "marine",
      "description": '生活在北美海岸的河口、潮汐水道和盐沼中，利用微咸水域觅食，并需要适宜岸地。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "螺类",
      "小型蟹类",
      "其他水生无脊椎动物"
    ],
    "description": "食物包括螺类、小型蟹类、其他水生无脊椎动物。"
  },
  "tags": [
    "菱斑龟",
    "北美海岸河口与盐沼"
  ],
  "summary": '菱斑龟在美国沿海河口和盐沼的微咸水里生活，用带蹼的脚游泳，取食螺类、小蟹等动物。',
  "description": '菱斑龟生活在美国大西洋和墨西哥湾沿岸的河口、潮汐水道与盐沼，适应海水和淡水相混的微咸水环境。它用带蹼的脚在浅水里游泳，吃螺类、小蟹和其他水生无脊椎动物，也会上岸活动。背甲盾片带一圈圈纹路，浅色头部和脚上常有黑斑。亚种和个体的配色会不同。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '背甲上的圈圈',
      body: '背甲盾片中可见一圈圈纹路。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '浅色皮肤与黑斑',
      body: '浅色头颈皮肤上常有黑色小斑，配色会随亚种和个体变化。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '带蹼的脚',
      body: '脚趾之间有蹼，帮助它在浅水里游泳。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '泥岸上走一走',
      body: '它能游泳，也会在泥岸上行走。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '水边的龟壳',
      body: '背甲略拱，浅水与盐沼植物构成它的海岸生活环境。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保护盐沼与产卵岸地，支持减少蟹笼误捕的措施，不带走野外的龟。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '从 Testudo terrapin 到菱斑龟',
      body: 'Schoepff 在 1793 年以 Testudo terrapin 发表了菱斑龟的科学名称，后来它被归入 Malaclemys 属，现用学名为 Malaclemys terrapin。英文名 Diamondback 提示它背甲上的菱形纹样，中文也称“菱斑龟”。同一种内还有不同亚种，体色和花纹也有变化。',
    },
  ],
  "keyFacts": [
    '背甲盾片中可见一圈圈纹路。',
    '浅色头颈皮肤上常有黑色小斑，配色会随亚种和个体变化。',
    '脚趾之间有蹼，帮助它在浅水里游泳。',
    '它能游泳，也会在泥岸上行走。',
    '背甲略拱，浅水与盐沼植物构成它的海岸生活环境。',
  ],
  "threats": [
    "蟹笼误捕后溺亡",
    "海岸栖息地丧失",
    "道路死亡与宠物贸易捕捉"
  ],
  "conservationActions": [
    "保护盐沼与产卵岸地，支持减少蟹笼误捕的措施，不带走野外的龟。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "北美海岸河口与盐沼"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "背甲上的圈圈"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "易危",
      "note": "采用所列机构资料的 IUCN 全球等级；独立评估年份未核实，全球趋势未录入。"
    }
  ],
  "media": {
    "image": "./images/species/diamondback-terrapin/01-cover.webp",
    "alt": "菱斑龟及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/diamondback-terrapin/02-observation.webp",
        "alt": "菱斑龟：背甲上的圈圈",
        "title": "背甲上的圈圈",
        "caption": 'AI 生成科学情景重建。找找每块盾片中一圈圈的线。这里观察纹路，不根据生成图的圈数判断年龄。采用灰色斑点皮肤与褐色背甲的一种配色，亚种与个体可能不同。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/diamondback-terrapin/03-observation.webp",
        "alt": "菱斑龟：浅色皮肤与黑斑",
        "title": "浅色皮肤与黑斑",
        "caption": "AI 生成科学情景重建。从眼睛旁看到脖子，找找浅色皮肤上的黑色小斑。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/diamondback-terrapin/04-observation.webp",
        "alt": "菱斑龟：带蹼的脚",
        "title": "带蹼的脚",
        "caption": "AI 生成科学情景重建。看看游泳时张开的脚，趾间连着薄薄的蹼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/diamondback-terrapin/05-observation.webp",
        "alt": "菱斑龟：泥岸上走一走",
        "title": "泥岸上走一走",
        "caption": "AI 生成科学情景重建。找找身体下面撑住泥地的脚。菱斑龟能在水中游，也会来到岸上。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/diamondback-terrapin/06-observation.webp",
        "alt": "菱斑龟：水边的龟壳",
        "title": "水边的龟壳",
        "caption": "AI 生成科学情景重建。从侧面看看背甲拱起的轮廓，再找找旁边的浅水与盐沼植物。",
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
      "title": "The Reptile Database：接受学名与分类",
      "url": "https://reptile-database.reptarium.cz/Malaclemys/terrapin",
      "kind": "taxonomy",
      "accessedAt": "2026-09-30"
    },
    {
      "title": "USGS：河口生态、分布、威胁与 IUCN VU",
      "url": "https://www.usgs.gov/centers/wetland-and-aquatic-research-center/science/ecology-diamondback-terrapin-demographics",
      "kind": "conservation",
      "accessedAt": "2026-09-30"
    },
    {
      "title": "Florida FWC：菱斑龟生态与亚种",
      "url": "https://myfwc.com/research/wildlife/amphibians-reptiles/turtles/diamondback-terrapins/",
      "kind": "ecology",
      "accessedAt": "2026-09-30"
    },
    {
      "title": "Texas Parks and Wildlife：形态和食性",
      "url": "https://tpwd.texas.gov/huntwild/wild/species/terrapin/",
      "kind": "ecology",
      "accessedAt": "2026-09-30"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-30",
  "updatedAt": "2026-09-30"
} as const satisfies Species;

export default profile;
