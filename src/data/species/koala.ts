import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-phascolarctos-cinereus",
  "slug": "koala",
  "names": {
    "zh": "考拉",
    "en": "Koala",
    "aliases": [
      "树袋熊"
    ]
  },
  "scientificName": "Phascolarctos cinereus",
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
      "scientificName": "Diprotodontia",
      "zhName": "双门齿目"
    },
    "family": {
      "scientificName": "Phascolarctidae",
      "zhName": "树袋熊科"
    },
    "genus": {
      "scientificName": "Phascolarctos",
      "zhName": "树袋熊属"
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
    "assessor": "IUCN（澳大利亚官方恢复计划引用全球等级）"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "大洋洲"
    ],
    "countries": [
      "澳大利亚"
    ],
    "regions": [
      "澳大利亚东部与东南部"
    ],
    "range": "在澳大利亚东部及东南部呈斑块状分布，栖息于有合适食物树的林地。",
    "center": {
      "lat": -30,
      "lng": 151
    }
  },
  "habitats": [
    {
      "name": "桉树林与疏林",
      "description": "在合适的桉树上取食、休息，偶尔下地换树。",
      "realm": "terrestrial",
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 68,
      "max": 82,
      "unit": "cm",
      "note": "Australian Museum 所列尺寸范围，未明确测量端点，因此不用于标准化头体长比较。"
    }
  },
  "metrics": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "部分桉树的叶",
      "少量花与嫩茎"
    ],
    "description": "部分桉树的叶、少量花与嫩茎是它的食物。"
  },
  "activity": [
    "树上休息与取食"
  ],
  "tags": [
    "抱住树干",
    "桉树叶"
  ],
  "summary": "考拉用手脚抓住树皮，在树上吃叶子、休息。它是有袋类哺乳动物，幼仔先在母亲的育儿袋中成长。",
  "description": '考拉有灰色厚毛、浅色胸部、圆圆的毛耳朵和黑色鼻子。弯曲的爪帮助它抓住树皮，树杈支撑着它休息时的身体。',
  "storySections": [
    {
      key: 'grip',
      label: '亲子观察',
      title: '手脚抓住树干',
      body: '先找到考拉抱住树的前肢，再看看脚落在哪里。弯曲的爪帮助它抓住树皮，树杈能支撑休息的身体。',
    },
    {
      key: 'face',
      label: '生活与认识',
      title: '圆耳朵和黑鼻子',
      body: '找找头顶两只毛茸茸的耳朵，再看脸中央的黑鼻子。灰色背毛和浅色胸部也是认出考拉的线索。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '挑选合适的叶子',
      body: '考拉主要吃某些桉树的叶，也取食少量花和茎。它有帮助消化高纤维食物的长盲肠，并非任何树叶都能吃。',
    },
    {
      key: 'rest',
      label: '生活与认识',
      title: '靠在树杈上休息',
      body: '考拉把很多时间用来休息和取食，通常待在树上。偶尔它会下地，走到另一棵树旁再爬上去。',
    },
    {
      key: 'young',
      label: '生活与认识',
      title: '先住育儿袋，再爬上背',
      body: '幼仔早期在母亲育儿袋里吃奶和成长，长大后离开袋子，常骑在母亲背上。图集展示已经长毛的较大幼仔。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '把食物树连起来',
      body: '考拉的 IUCN 全球等级为易危。澳大利亚将昆士兰、新南威尔士和首都领地的合并种群列为濒危，两者评估范围不同。清林、疾病、火灾、车辆和犬只都会威胁考拉；全球种群趋势尚未确认。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '幼仔先住育儿袋',
      body: 'Goldfuss 于 1817 年描述了这个物种，现用学名为 Phascolarctos cinereus。考拉是有袋类哺乳动物，幼仔先在母亲的育儿袋里吃奶，长大后骑到背上。成年考拉挑选合适的桉树叶，高纤维食物的消化有赖于长盲肠。',
    },
  ],
  "keyFacts": [
    "用手脚和爪抓住树皮。",
    "主要吃部分桉树的叶。",
    "考拉属于有袋类。",
    "幼仔先在育儿袋中成长。",
    "全球易危与澳大利亚部分种群濒危是不同范围的评估。"
  ],
  "threats": [
    "食物树减少和栖息地破碎化。",
    "疾病、火灾、车辆碰撞和犬只攻击。"
  ],
  "conservationActions": [
    "保留并恢复连通的适宜林地。",
    "在考拉活动区管理犬只、遵守道路限速。",
    "远观休息中的考拉，不为合影强行抱持。"
  ],
  "featuredStats": [
    {
      "key": "0",
      "label": "观察重点",
      "value": "抱住树干"
    },
    {
      "key": "1",
      "label": "主要食物",
      "value": "桉树叶"
    },
    {
      "key": "2",
      "label": "幼仔成长",
      "value": "育儿袋"
    }
  ],
  "sources": [
    {
      "title": "GBIF — 名称与分类归属",
      "url": "https://www.gbif.org/species/2440012",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Australian Museum — 考拉",
      "url": "https://australian.museum/learn/animals/mammals/koala/",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Animal Diversity Web — 考拉",
      "url": "https://animaldiversity.org/accounts/Phascolarctos_cinereus/",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "澳大利亚考拉恢复计划 — 全球与地区等级",
      "url": "https://www.legislation.gov.au/F2022L00555/asmade/2022-04-07/text/original/epub/OEBPS/document_1/document_1.html",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "DCCEEW — 考拉保护行动",
      "url": "https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/koala",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    }
  ],
  "media": {
    "image": "./images/species/koala/01-cover.webp",
    "alt": "考拉坐在右侧桉树树杈上，手脚抓住树皮。",
    "focalPoint": {"x": 0.75, "y": 0.39},
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/koala/02-body.webp",
        "title": "抱住树杈",
        "alt": "考拉坐在树杈中，灰毛、浅色胸部和圆耳朵清楚可见。",
        "caption": "考拉坐在树杈中，灰毛、浅色胸部和圆耳朵清楚可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/koala/03-grip.webp",
        "title": "抓树皮的爪",
        "alt": "考拉的前肢和爪贴住树干，近景展示抓握姿势。",
        "caption": "考拉的前肢和爪贴住树干，近景展示抓握姿势。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/koala/04-feeding.webp",
        "title": "嘴边的桉树叶",
        "alt": "考拉抓着带叶树枝，嘴靠近一片桉树叶。",
        "caption": "考拉抓着带叶树枝，嘴靠近一片桉树叶。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/koala/05-resting.webp",
        "title": "靠着树杈休息",
        "alt": "考拉闭眼蜷坐在树杈上。",
        "caption": "考拉闭眼蜷坐在树杈上。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/koala/06-young.webp",
        "title": "妈妈背上的幼仔",
        "alt": "一只长毛的考拉幼仔抓住母亲的背，母亲坐在树杈上。",
        "caption": "一只长毛的考拉幼仔抓住母亲的背，母亲坐在树杈上。",
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
