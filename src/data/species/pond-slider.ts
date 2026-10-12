import type { Species } from '../../types/species.ts';

const profile = {
  "id": "pond-slider",
  "slug": "pond-slider",
  "names": {
    "zh": "滑龟",
    "en": "Pond Slider",
    "aliases": [
      "红耳龟",
      "巴西龟",
      "Trachemys scripta elegans"
    ]
  },
  "scientificName": "Trachemys scripta",
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
      "scientificName": "Trachemys",
      "zhName": "滑龟属"
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
    "assessor": "IUCN；全球等级见来源，独立评估日期与全球趋势未核实"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "美国中部与东南部"
    ],
    "countries": [
      "美国"
    ],
    "range": "原生于美国中部和东南部的淡水水域；红耳亚种经人为引入，在亚洲、欧洲等地形成野外种群。",
    "center": {
      "lat": 33,
      "lng": -90
    }
  },
  "habitats": [
    {
      "name": "池塘、湖泊与缓流水域",
      "realm": "freshwater",
      "description": '滑龟利用池塘、湖泊和缓流水域，水边的木头与石头能供它们晒背。产卵需要附近的陆地环境。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "水生植物",
      "昆虫",
      "螺类"
    ],
    "description": "滑龟吃植物和小动物；幼龟通常吃较多动物性食物，成龟也会取食水草。"
  },
  "activity": [
    "白天游泳、觅食和晒背"
  ],
  "tags": [
    "滑龟",
    "爬上木头晒背"
  ],
  "summary": "滑龟在水中游泳，也会爬上木头和岸边晒背。图中红耳亚种的眼睛后有红斑，其他亚种的头部花纹有所不同。",
  "description": '滑龟的脚趾之间有蹼，游泳时用四肢划水，到水面露出鼻孔呼吸。晒背能提高体温；繁殖时，它们上岸产卵，小龟孵出后独立生活。',
  "storySections": [
    {
      key: 'basking',
      label: '生活与认识',
      title: '爬上木头晒背',
      body: '滑龟会爬到水边的木头或石头上，伸出头和四肢晒太阳，以提高体温。',
    },
    {
      key: 'swimming',
      label: '生活与认识',
      title: '张开有蹼的脚',
      body: '它用四肢在水里划动，脚趾之间连着蹼。游到水面时，它会露出鼻孔呼吸。',
    },
    {
      key: 'identity',
      label: '生活与认识',
      title: '红斑在眼睛后面',
      body: '红耳亚种的学名为 Trachemys scripta elegans，红斑在眼睛后方。滑龟还包括头侧带黄色花纹的亚种；本图集展示红耳亚种。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '水草和小动物都吃',
      body: '幼龟常吃昆虫等小动物；随着长大，许多个体会吃更多植物。食物比例也随生活地点变化。',
    },
    {
      key: 'young',
      label: '生活与认识',
      title: '小龟也有自己的壳',
      body: '滑龟在陆地上产卵。小龟孵出时已经有龟壳，之后独立生活，龟壳会随着身体一起长大。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '让水塘里的动物各有家',
      body: '滑龟全球属无危。人们把红耳龟放入原本没有它们的水域，可能影响当地龟类；不要把饲养动物放进河湖。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '一个物种里的不同头纹',
      body: 'Thunberg In Schoepff 于 1792 年描述了这个物种，现用学名为 Trachemys scripta。滑龟的红耳亚种在眼睛后方有红斑，其他亚种的头侧可带黄色花纹。晒背和水中游泳属于它们的生活习性，但红斑只是红耳亚种的辨认线索。',
    },
  ],
  "keyFacts": [
    "滑龟会爬到水边的木头或石头上，伸出头和四肢晒太阳。",
    "它用四肢在水里划动，脚趾之间连着蹼。",
    "本图集中的红耳亚种学名为 Trachemys scripta elegans，红斑在眼睛后方。",
    "幼龟常吃昆虫等小动物；随着长大，许多个体会吃更多植物。",
    "滑龟在陆地上产卵。"
  ],
  "threats": [
    "原生水域栖息地退化",
    "道路交通"
  ],
  "conservationActions": [
    "保护原生淡水栖息地",
    "不向野外放生饲养龟"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "爬上木头晒背"
    },
    {
      "key": "food",
      "label": "主要食物",
      "value": "水生植物"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "池塘、湖泊与缓流水域"
    }
  ],
  "media": {
    "image": "./images/species/pond-slider/01-cover.webp",
    "alt": "红耳滑龟在木头上晒背",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/pond-slider/02-observation.webp",
        "title": "爬出水面",
        "alt": "红耳滑龟用前脚抓住木头，向水面上方攀爬",
        "caption": "AI 生成科学情景重建。红耳滑龟用前脚抓住木头，向水面上方攀爬。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pond-slider/03-observation.webp",
        "title": "有蹼的脚在划水",
        "alt": "红耳滑龟在浅水中游泳，后脚的蹼展开",
        "caption": "AI 生成科学情景重建。红耳滑龟在浅水中游泳，后脚的蹼展开。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pond-slider/04-observation.webp",
        "title": "眼睛后面的红斑",
        "alt": "红耳滑龟头部侧面，红色斑块位于眼睛后方",
        "caption": "AI 生成科学情景重建。红耳滑龟头部侧面，红色斑块位于眼睛后方。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pond-slider/05-observation.webp",
        "title": "水草也是食物",
        "alt": "红耳滑龟在水下取食植物叶片",
        "caption": "AI 生成科学情景重建。红耳滑龟在水下取食植物叶片。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pond-slider/06-observation.webp",
        "title": "岸边的小龟",
        "alt": "幼年红耳滑龟停在湿润岸边，绿色龟壳上的纹路可见",
        "caption": "AI 生成科学情景重建。幼年红耳滑龟停在湿润岸边，绿色龟壳上的纹路可见。",
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
      "title": "The Reptile Database：滑龟分类与分布",
      "url": "https://reptile-database.reptarium.cz/Trachemys/scripta",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Animal Diversity Web：滑龟生活史",
      "url": "https://animaldiversity.org/accounts/Trachemys_scripta/",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "ITIS：滑龟分类记录与 LC 引用",
      "url": "https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=173819",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Trachemys scripta 的命名作者与年份',
      url: 'https://www.gbif.org/species/2443002',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
