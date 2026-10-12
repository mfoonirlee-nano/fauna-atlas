import type { Species } from '../../types/species.ts';

const profile = {
  "id": "senegal-bichir",
  "slug": "senegal-bichir",
  "names": {
    "zh": "塞内加尔多鳍鱼",
    "en": "Senegal Bichir"
  },
  "scientificName": "Polypterus senegalus",
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
      "scientificName": "Polypteriformes",
      "zhName": "多鳍鱼目"
    },
    "family": {
      "scientificName": "Polypteridae",
      "zhName": "多鳍鱼科"
    },
    "genus": {
      "scientificName": "Polypterus",
      "zhName": "多鳍鱼属"
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
    "assessedYear": 2019,
    "assessor": "FishBase 转录 IUCN 全球 LC，评估日期为 2019-06-07；全球种群趋势未独立核实。"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [],
    "regions": [
      "非洲西部至尼罗河流域及部分湖泊、刚果河流域"
    ],
    "countries": [],
    "range": '记录包括西非多个流域、尼罗河流域与部分湖泊。南部亚种还见于刚果河流域，各亚种范围共同组成物种分布。'
  },
  "habitats": [
    {
      "name": "非洲淡水河岸与沼泽",
      "realm": "freshwater",
      "description": '河岸和沼泽的水生植物提供产卵与生活位置。成鱼吃水生动物，也能接近水面吸入空气。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "昆虫",
      "甲壳动物",
      "软体动物",
      "鱼类"
    ],
    "description": '本种吃昆虫、甲壳动物、软体动物和鱼等动物性食物，组成随亚种和地点变化。'
  },
  "tags": [
    "塞内加尔多鳍鱼",
    "非洲淡水河岸与沼泽"
  ],
  "summary": '塞内加尔多鳍鱼背部有一列分开的小背鳍，胸鳍基部厚，尾部较圆。它还能吸入空气到肺中。',
  "description": '塞内加尔多鳍鱼成体灰橄榄色，头较宽，身体细长，吃昆虫、甲壳动物、软体动物和鱼。它在茂密水生植物间产卵，幼体有外鳃，成年形态和呼吸方式不同。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '背上一片片分开的小鳍',
      body: '细长灰橄榄色身体上有分开的小背鳍，头宽，胸鳍基部厚，尾部较圆。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '非洲淡水河岸与沼泽',
      body: '分布记录涉及西非、尼罗河水系和湖泊，南部亚种还见于刚果河流域。各亚种分布范围不同。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '多样的动物性食物',
      body: '它吃昆虫、甲壳动物、软体动物和鱼，食物组成随地点与亚种变化。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '植物间产卵，幼体有外鳃',
      body: '它在茂密水生植物间产卵，幼体具有外鳃，形态与成体不同。',
    },
    {
      key: 'taxonomy',
      label: '分类归属',
      title: '多鳍鱼科中的塞内加尔种',
      body: '塞内加尔多鳍鱼的学名为 Polypterus senegalus，属于辐鳍鱼纲、多鳍鱼目和多鳍鱼科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '全球无危，趋势尚未确认',
      body: '全球 IUCN 等级为无危，FishBase 转引的评估日期为 2019-06-07。全球种群趋势尚未确认。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '2014 年研究记录喷水孔吸气',
      body: 'Cuvier 于 1829 年描述了这个物种，现用学名为 Polypterus senegalus。2014 年研究包含塞内加尔多鳍鱼，记录到头部喷水孔参与吸入空气、空气进入肺的过程。鼻端短管与喷水孔属于不同结构，“多鳍”则对应背部一片片分开的背鳍。',
    },
  ],
  "keyFacts": [
    '背部有一列分开的小背鳍。',
    '胸鳍基部厚，尾部圆。',
    '吃昆虫等水生动物与鱼类。',
    '幼体具有外鳃。',
    '头部喷水孔能参与吸入空气到肺。',
  ],
  "threats": [],
  "conservationActions": [
    "保护原生淡水生境",
    "观察时不诱发离水或缺氧行为"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "背上一片片分开的小鳍"
    }
  ],
  "media": {
    "image": "./images/species/senegal-bichir/01-cover.webp",
    "alt": "塞内加尔多鳍鱼及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/senegal-bichir/02-observation.webp",
        "title": "分开的背鳍",
        "alt": '分开的背鳍，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。全身侧面观察背部小鳍，不用于计数。图像尺度未经实测，单幅图只能展示姿态。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/senegal-bichir/03-observation.webp",
        "title": "头部与胸鳍基部",
        "alt": '头部与胸鳍基部，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。鼻端短管为外鼻孔相关结构，不标作喷水孔。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/senegal-bichir/04-observation.webp",
        "title": "从上方看背部",
        "alt": '从上方看背部，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。斜上方观察分开的背鳍与尾部。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/senegal-bichir/05-observation.webp",
        "title": "靠近水面的姿态",
        "alt": '靠近水面的姿态，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。水面外观重建，不呈现肺或气流。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/senegal-bichir/06-observation.webp",
        "title": "水草旁的成体",
        "alt": '水草旁的成体，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。灰橄榄色成体与非洲淡水环境重建。",
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
      "title": "FishBase：分类、分布与全球保护评估日期",
      "url": "https://www.fishbase.se/summary/Polypterus-senegalus.html",
      "kind": "general",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "2014 原始研究：含本种的喷水孔空气呼吸",
      "url": "https://www.nature.com/articles/ncomms4022",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    },
    {
      title: 'GBIF：Polypterus senegalus 的命名作者与年份',
      url: 'https://www.gbif.org/species/4287129',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-11",
  "updatedAt": "2026-10-11"
} as const satisfies Species;

export default profile;
