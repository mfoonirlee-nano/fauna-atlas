import type { Species } from '../../types/species.ts';

const profile = {
  "id": "blackfin-icefish",
  "slug": "blackfin-icefish",
  "names": {
    "zh": "黑鳍冰鱼",
    "en": "Blackfin Icefish"
  },
  "scientificName": "Chaenocephalus aceratus",
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
      "scientificName": "Perciformes",
      "zhName": "鲈形目"
    },
    "family": {
      "scientificName": "Channichthyidae",
      "zhName": "鳄冰鱼科"
    },
    "genus": {
      "scientificName": "Chaenocephalus",
      "zhName": "头带冰鱼属"
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
    "assessedYear": 2023,
    "assessor": 'FishBase 转引 IUCN 全球评估，评估日期 2023-11-29；全球种群趋势尚未确认。',
    "criteria": "A2bcde"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "斯科舍海与南极半岛北部等南大洋水域"
    ],
    "countries": [],
    "range": '记录分布包括南大洋斯科舍海、南极半岛北部和布韦岛周边的陆架与近底水域。'
  },
  "habitats": [
    {
      "name": "南极陆架海底",
      "realm": "marine",
      "description": '寒冷陆架近底水域供成鱼生活取食，幼体有较长浮游阶段，利用的水层与成体不同。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鱼类",
      "磷虾"
    ],
    "description": '成体吃鱼类和磷虾，食物比例需要结合具体研究地点判断。'
  },
  "tags": [
    "黑鳍冰鱼",
    "南极陆架海底"
  ],
  "summary": '黑鳍冰鱼头宽扁、胸鳍宽大，身体浅灰带斑纹。它的血液缺少红细胞和功能性血红蛋白。',
  "description": '黑鳍冰鱼在南大洋陆架附近的海底生活，成体吃鱼和磷虾，幼体则经历较长浮游阶段。血液中的氧主要以溶解形式运输，它仍有血液，也需要氧。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '宽大的胸鳍与浅色身体',
      body: '头部宽扁、吻长，浅灰身体带斑纹，胸鳍宽大，背鳍分为前后两枚。浅色皮肤并非透明。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '南极陆架海底',
      body: '黑鳍冰鱼在南大洋陆架和近底水域生活，氧主要以物理溶解形式随血液运输。它仍有血液，也需要氧。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '成鱼吃鱼和磷虾',
      body: '成体取食鱼类与磷虾。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '幼体有较长浮游阶段',
      body: '黑鳍冰鱼产卵，幼体有较长浮游阶段，与成体近底生活不同。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '冰鱼科中的黑鳍冰鱼',
      body: '黑鳍冰鱼的学名为 Chaenocephalus aceratus，属于辐鳍鱼纲、鲈形目和鳄冰鱼科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '全球无危，趋势尚未确认',
      body: '全球 IUCN 等级为易危，FishBase 转引的评估日期为 2023-11-29。全球种群趋势尚未确认。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '2019 年研究看清特殊血液的遗传基础',
      body: 'Lönnberg 于 1906 年描述了这个物种，现用学名为 Chaenocephalus aceratus。2019 年本种基因组研究确认，它缺少功能性血红蛋白基因和红细胞。氧主要溶在血液中运输，这种特殊生理并不能靠浅色皮肤来判断，也不意味着动物没有血液。',
    },
  ],
  "keyFacts": [
    '头宽扁，胸鳍宽大，背鳍前后分开。',
    '浅灰身体带斑纹，皮肤并不透明。',
    '成体近底生活，吃鱼和磷虾。',
    '幼体经历较长浮游阶段。',
    '血液主要以溶解形式运输氧。',
  ],
  "threats": [
    "渔业捕获及南大洋环境变化"
  ],
  "conservationActions": [
    "按物种记录渔业捕获与种群调查",
    "保护南极海洋生态环境"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "宽大的胸鳍与浅色身体"
    }
  ],
  "media": {
    "image": "./images/species/blackfin-icefish/01-cover.webp",
    "alt": "黑鳍冰鱼及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/blackfin-icefish/02-observation.webp",
        "title": "岩石海底旁的成体",
        "alt": '岩石海底旁的成体，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。南极陆架环境重建。图像尺度未经实测，单幅图只能展示姿态。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blackfin-icefish/03-observation.webp",
        "title": "宽头与胸鳍",
        "alt": '宽头与胸鳍，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。外形近景，不展示血液或内部器官。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blackfin-icefish/04-observation.webp",
        "title": "展开的扇形胸鳍",
        "alt": '展开的扇形胸鳍，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。浅色身体与斑纹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blackfin-icefish/05-observation.webp",
        "title": "磷虾附近的身体",
        "alt": '磷虾附近的身体，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。潜在食物的环境重建，非摄食实录。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/blackfin-icefish/06-observation.webp",
        "title": "前后两枚背鳍",
        "alt": '前后两枚背鳍，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。完整体形与尾鳍，不以浅色证明血液生理。",
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
      "title": "FishBase：分类、分布、食物及 2023 年 VU 评估",
      "url": "https://www.fishbase.se/summary/Chaenocephalus-aceratus.html",
      "kind": "general",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "2019 原始研究：黑鳍冰鱼基因组与血液生理",
      "url": "https://www.nature.com/articles/s41559-019-0812-7",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "英国南极调查局：分布与生态研究",
      "url": "https://nora.nerc.ac.uk/775/1/Reid_et_al._Scotia_Sea_icefish_revised_textfigs.pdf",
      "kind": "distribution",
      "accessedAt": "2026-10-10"
    },
    {
      title: 'GBIF：Chaenocephalus aceratus 的命名作者与年份',
      url: 'https://www.gbif.org/species/5210343',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-10",
  "updatedAt": "2026-10-10"
} as const satisfies Species;

export default profile;
