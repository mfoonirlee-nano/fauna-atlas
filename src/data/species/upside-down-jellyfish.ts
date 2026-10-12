import type { Species } from '../../types/species.ts';

const profile = {
  "id": "upside-down-jellyfish",
  "slug": "upside-down-jellyfish",
  "names": {
    "zh": "仙后水母",
    "en": "Upside-down Jellyfish"
  },
  "scientificName": "Cassiopea xamachana",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Cnidaria",
      "zhName": "刺胞动物门"
    },
    "class": {
      "scientificName": "Scyphozoa",
      "zhName": "钵水母纲"
    },
    "order": {
      "scientificName": "Rhizostomeae",
      "zhName": "根口水母目"
    },
    "family": {
      "scientificName": "Cassiopeidae",
      "zhName": "仙后水母科"
    },
    "genus": {
      "scientificName": "Cassiopea",
      "zhName": "仙后水母属"
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
    "assessor": "本次未核实全球物种级 IUCN 评估，沿用项目 NE 占位口径；不表示没有保护风险。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲",
      "南美洲"
    ],
    "regions": [
      "加勒比海与邻近西大西洋浅海"
    ],
    "countries": [],
    "range": '已核实核心记录在加勒比海及邻近西大西洋，包括佛罗里达与加勒比沿岸。仙后水母属内有外观相似的种，其他物种记录需要分别核对。'
  },
  "habitats": [
    {
      "name": "红树林浅海",
      "realm": "marine",
      "description": '常见于浅海潟湖和红树林附近水域，倒置在海床上，浅水光照支持组织中共生藻的光合作用。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小型浮游动物",
      "共生藻提供的光合产物"
    ],
    "description": '捕捉小型浮游动物，同时利用共生藻的光合产物。研究发现，黏液中的刺细胞团 cassiosomes 能捕获猎物。'
  },
  "tags": [
    "仙后水母",
    "红树林浅海"
  ],
  "summary": '仙后水母倒置在加勒比海及邻近浅水海床上，伞部朝下、分枝口腕朝上。它利用组织中的共生藻获得营养，也捕食小型浮游动物。',
  "description": '仙后水母的宽扁伞部贴近海床，朝上的分枝口腕让组织中的共生藻接触浅水光照。伞部搏动带动周围水流，水母也释放含有刺细胞团的黏液，帮助捕获猎物。未接触身体时，附近水体中的这些结构也可能引起蜇刺，因此观察需要保持距离。',
  "storySections": [
    {
      key: 'observation-1',
      label: '姿态',
      title: '伞部朝下，口腕朝上',
      body: '宽扁伞部贴近海床，分枝口腕朝水面伸展。这种倒置姿态与组织中的光合共生藻有关。',
    },
    {
      key: 'observation-2',
      label: '辨认',
      title: '外观相近的种需要核验',
      body: '口腕附属结构、色彩与分枝会改变，单凭外观不足以确认仙后水母属内的种。记录产地与保存鉴定资料有助于分清相似动物。',
    },
    {
      key: 'observation-3',
      label: '共生',
      title: '共生藻利用浅水光照',
      body: '藻类住在水母组织中，利用浅水中的光合成有机物，水母从中获得营养。水母本身仍会捕食小动物。',
    },
    {
      key: 'observation-4',
      label: '水流',
      title: '伞部搏动带动周围水',
      body: '伞部搏动改变周围水流，水母常保持倒置姿态。具体搏动频率与水流效果需要连续记录。',
    },
    {
      key: 'observation-5',
      label: '刺细胞',
      title: '黏液中的刺细胞团也能蜇刺',
      body: '释放到水中的黏液可含刺细胞团，帮助捕捉猎物，也可能蜇刺附近泳者。观察时需保持距离，触碰并不是唯一接触途径。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '1892 年命名，后来解开“蜇水”之谜',
      body: 'Bigelow 在 1892 年正式命名 Cassiopea xamachana。倒置在海床的外观早已明显，研究者后来追查为何有人没有碰到水母仍会被蜇。Smithsonian 的研究在释放黏液中发现能活动的刺细胞团 cassiosomes，解释了部分“蜇水”现象，并发现它们能够捕获猎物。',
    },
  ],
  "keyFacts": [
    "属于刺胞动物门的钵水母纲。",
    "伞部朝下，分枝口腕朝上。",
    "共生藻参与供能，水母也捕食。",
    "未接触身体也可能因附近水体中的刺细胞结构受到蜇刺。"
  ],
  "threats": [
    "本次未核实全球物种级威胁排序。"
  ],
  "conservationActions": [
    "通过影像观察，保留来源与物种限定。",
    "减少水域污染，野外观察不取走活体。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "pose",
      "label": "姿态",
      "value": "倒置"
    },
    {
      "key": "habitat",
      "label": "生活水域",
      "value": "浅海"
    }
  ],
  "media": {
    "image": "./images/species/upside-down-jellyfish/01-cover.webp",
    "alt": "仙后水母及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/upside-down-jellyfish/02-observation.webp",
        "title": "口腕朝着上方",
        "alt": "仙后水母：口腕朝着上方",
        "caption": "AI 生成科学情景重建。宽扁的伞部贴在底上，分枝口腕朝水面方向伸展。先在侧面图里找出底和上方。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/upside-down-jellyfish/03-observation.webp",
        "title": "从上面看圆形伞部",
        "alt": "仙后水母：从上面看圆形伞部",
        "caption": "AI 生成科学情景重建。从上方看口腕和伞部的圆形轮廓。色彩、附属结构和分枝形态会变化，单凭外观不能确定仙后水母属内的种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/upside-down-jellyfish/04-observation.webp",
        "title": "口腕里的共生藻",
        "alt": "仙后水母：口腕里的共生藻",
        "caption": "AI 生成科学情景重建。共生藻住在组织中，利用浅水里的光。生成图表现外形和色彩，不把藻细胞画成肉眼可见的大叶片。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/upside-down-jellyfish/05-observation.webp",
        "title": "伞部的搏动",
        "alt": "仙后水母：伞部的搏动",
        "caption": "AI 生成科学情景重建。水母通过伞部搏动带动周围的水。观察图展示一种姿态，静态图不能证明动作速度或频率。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/upside-down-jellyfish/06-observation.webp",
        "title": "在红树林附近的浅海",
        "alt": "仙后水母：在红树林附近的浅海",
        "caption": "AI 生成科学情景重建。几只仙后水母各自倒置在底上。保持距离观察，释放到水里的黏液也可能带有能蜇刺的结构。",
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
      "title": "Smithsonian：仙后水母黏液中的刺细胞结构",
      "url": "https://www.si.edu/newsdesk/releases/stinging-water-mystery-solved-jellyfish-can-sting-swimmers-prey-mucus-grenades",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "Cassiopea xamachana 系统综述",
      "url": "https://doi.org/10.3389/fevo.2018.00035",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "墨西哥加勒比海钵水母名录与分子核验",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12869186/",
      "kind": "distribution",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "WoRMS：接受学名与分类",
      "url": "https://www.marinespecies.org/aphia.php?id=287172&p=taxdetails",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      title: 'GBIF: Cassiopea xamachana Bigelow, 1892 nomenclatural record',
      url: 'https://www.gbif.org/species/2264599',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
