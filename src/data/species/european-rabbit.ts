import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-oryctolagus-cuniculus",
  "slug": "european-rabbit",
  "names": {
    "zh": "穴兔",
    "en": "European Rabbit",
    "aliases": [
      "欧洲兔",
      "兔子"
    ]
  },
  "scientificName": "Oryctolagus cuniculus",
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
      "scientificName": "Lagomorpha",
      "zhName": "兔形目"
    },
    "family": {
      "scientificName": "Leporidae",
      "zhName": "兔科"
    },
    "genus": {
      "scientificName": "Oryctolagus",
      "zhName": "穴兔属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "EN",
    "label": {
      "zh": "濒危",
      "en": "Endangered"
    },
    "trend": "decreasing",
    "assessor": "IUCN（2019 年名录更新）"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲",
      "大洋洲"
    ],
    "regions": [
      "伊比利亚半岛与法国南部（原生）",
      "澳大利亚（引入）"
    ],
    "countries": [
      "西班牙",
      "葡萄牙",
      "法国",
      "澳大利亚"
    ],
    "range": "原生范围包括西班牙、葡萄牙和法国南部；人类将其引入包括澳大利亚在内的许多地区。此处列举原生区与一个引入区，并非完整全球分布清单。",
    "center": {
      "lat": 40,
      "lng": -4
    }
  },
  "habitats": [
    {
      "name": "草地与灌丛交错地带",
      "realm": "terrestrial",
      "description": "在开阔地取食，在灌丛附近藏身；松软土壤便于挖掘洞系。",
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 38,
      "max": 50,
      "unit": "cm",
      "note": "ADW 所列野生个体长度范围，原文未区分头体长和全长。"
    },
    "weight": {
      "min": 1.5,
      "max": 2.5,
      "unit": "kg",
      "note": "野生个体范围，不适用于人工选育家兔品种。"
    }
  },
  "metrics": {
    "adultMassKg": [
      1.5,
      2.5
    ]
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "草",
      "草本植物",
      "叶",
      "芽",
      "根"
    ],
    "description": "取食草及多种植物部位。"
  },
  "activity": [
    "晨昏活动",
    "夜间活动"
  ],
  "tags": [
    "长耳朵",
    "挖洞",
    "草食"
  ],
  "summary": "穴兔在草地上取食，也会钻进地下洞穴。它有长耳朵和短尾巴，后脚比前脚长；家兔就是由穴兔驯化而来的。",
  "description": '野生穴兔通常有灰褐色毛，尾巴短，尾巴下侧发白。它属于兔形目兔科，雌兔在洞系中用草和自己的毛铺巢。',
  "storySections": [
    {
      key: 'ears',
      label: '亲子观察',
      title: '找找兔子的长耳朵',
      body: '先指一指头顶的两只长耳朵，再看看鼻子旁边的胡须。野生穴兔通常长着灰褐色毛，尾巴短，尾巴下侧发白。',
    },
    {
      key: 'identity',
      label: '兔形目',
      title: '家兔的野生祖先',
      body: '家兔由穴兔驯化而来，经过人工选育，毛色、耳形和体型有许多变化。野生型穴兔属于兔形目兔科穴兔属，图集展示的是野生型。',
    },
    {
      key: 'food',
      label: '草食生活',
      title: '低下头，咬一口草',
      body: '穴兔吃草和其他草本植物，也取食叶、芽和根。它们常在黄昏到清晨出洞觅食。图里的兔子正低头吃草，可以跟着它的鼻子找找食物。',
    },
    {
      key: 'burrow',
      label: '地下洞系',
      title: '洞口后面还有通道',
      body: '穴兔挖掘地下洞系，常与同类一起生活。松软、便于掘洞的土壤，以及附近可取食的草地和提供遮蔽的灌丛，都是适宜住处的条件。看洞口时留在远处，给兔子留出进出的路。',
    },
    {
      key: 'young',
      label: '繁殖与成长',
      title: '小兔在巢里长大',
      body: '雌兔用草和自己的毛铺巢。刚出生的幼兔眼睛尚未睁开、身体少毛，依靠母乳成长；它们需要留在巢里，不能像成兔那样在草地上觅食。',
    },
    {
      key: 'conservation',
      label: '原生地与引入地',
      title: '同一种兔子，不同的处境',
      body: 'IUCN 在 2019 年发布的更新中将穴兔列为濒危，原生范围包括西班牙、葡萄牙和法国南部。兔出血症等疾病导致当地数量下降。在澳大利亚，引入的穴兔啃食植被、与本地动物争夺食物，需要管理。家兔饲养数量不能代替原生野生种群的保护；不要向野外放生家兔。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '家兔的野生祖先',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Oryctolagus cuniculus。人们从穴兔驯化出家兔，并通过选育改变毛色、耳形和体型。野生穴兔仍在草地旁挖洞，幼兔出生时少毛、未睁眼，需要留在巢内吃奶成长。',
    },
  ],
  "keyFacts": [
    '野生型通常灰褐色，耳朵长、尾巴短。',
    '穴兔属于兔形目兔科。',
    '家兔由穴兔驯化而来。',
    '挖掘地下洞系，常与同类一起生活。',
    '幼兔出生时未睁眼，依靠母乳成长。',
  ],
  "threats": [
    "原生地种群受兔出血症等疾病影响。",
    "破坏洞系和遮蔽植被会减少可用住处。"
  ],
  "conservationActions": [
    "保护原生地草地、灌丛与洞系，支持疾病和种群监测。",
    "远观洞口，不挖洞、不抓幼兔。",
    "不向野外放生家兔，配合引入地的本地生态保护。"
  ],
  "featuredStats": [
    {
      "key": "trait",
      "label": "观察重点",
      "value": "长耳朵"
    },
    {
      "key": "shelter",
      "label": "住在哪里",
      "value": "地下洞系"
    },
    {
      "key": "mass",
      "label": "野生体重",
      "value": "1.5–2.5",
      "unit": "kg"
    }
  ],
  "sources": [
    {
      "title": "GBIF — 穴兔分类",
      "url": "https://www.gbif.org/species/101179320",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Animal Diversity Web — 穴兔外形、食性与繁殖",
      "url": "https://animaldiversity.org/accounts/Oryctolagus_cuniculus/",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "IUCN — 2019 年红色名录更新：穴兔",
      "url": "https://iucn.org/news/species/201912/species-recoveries-bring-hope-amidst-biodiversity-crisis-iucn-red-list",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "澳大利亚环境部门 — 引入穴兔的生态与影响",
      "url": "https://www.dcceew.gov.au/sites/default/files/documents/rabbit.pdf",
      "kind": "distribution",
      "accessedAt": "2026-09-09"
    },
    {
      title: 'GBIF：Oryctolagus cuniculus 的命名作者与年份',
      url: 'https://www.gbif.org/species/2436940',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "media": {
    "image": "./images/species/european-rabbit/01-cover.webp",
    "alt": "一只长耳朵、灰褐色毛的穴兔坐在画面右侧土坡上，短尾巴和脚都在画面内。",
    "focalPoint": {
      "x": 0.78,
      "y": 0.43
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/european-rabbit/02-body.webp",
        "title": "长耳朵和短尾巴",
        "alt": "灰褐色穴兔侧身坐在草地上，耳尖、前脚、后脚和短尾巴都在画面内。",
        "caption": "灰褐色穴兔侧身坐在草地上，耳尖、前脚、后脚和短尾巴都在画面内。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-rabbit/03-ears.webp",
        "title": "两只耳朵朝向哪里",
        "alt": "看看两只耳朵，再找找鼻子旁边的细胡须。图片展示头胸部特写。",
        "caption": "看看两只耳朵，再找找鼻子旁边的细胡须。图片展示头胸部特写。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-rabbit/04-grazing.webp",
        "title": "低头吃草",
        "alt": "穴兔低下头取食草叶，后脚收在身体下方。",
        "caption": "穴兔低下头取食草叶，后脚收在身体下方。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-rabbit/05-burrow.webp",
        "title": "洞口旁的兔子",
        "alt": "穴兔停在土坡洞口旁，前脚落在松土上。洞系通向地下，图中只展示入口。",
        "caption": "穴兔停在土坡洞口旁，前脚落在松土上。洞系通向地下，图中只展示入口。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-rabbit/06-habitat.webp",
        "title": "草地旁有灌丛",
        "alt": "两只穴兔在草地上觅食，周围的灌丛提供遮蔽。",
        "caption": "两只穴兔在草地上觅食，周围的灌丛提供遮蔽。",
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
