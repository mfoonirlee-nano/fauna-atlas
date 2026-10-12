import type { Species } from '../../types/species.ts';

const profile = {
  "id": "lilac-breasted-roller",
  "slug": "lilac-breasted-roller",
  "names": {
    "zh": "紫胸佛法僧",
    "en": "Lilac-breasted Roller",
    "aliases": []
  },
  "scientificName": "Coracias caudatus",
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
      "scientificName": "Coraciiformes",
      "zhName": "佛法僧目"
    },
    "family": {
      "scientificName": "Coraciidae",
      "zhName": "佛法僧科"
    },
    "genus": {
      "scientificName": "Coracias",
      "zhName": "佛法僧属"
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
    "assessor": "采用所列来源的 IUCN 全球等级；独立评估年份未核实，全球趋势未录入。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "非洲东部至南部的疏林和稀树草原"
    ],
    "countries": [],
    "range": "非洲东部至南部的疏林和稀树草原。"
  },
  "habitats": [
    {
      "name": "稀树草原与干燥疏林",
      "realm": "terrestrial",
      "description": '生活在稀树草原和干燥疏林，利用较高枝条观察猎物，树洞可供繁殖。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "蝗虫",
      "甲虫",
      "小蜥蜴",
      "蛙"
    ],
    "description": '食物包括蝗虫、甲虫、小蜥蜴、蛙。'
  },
  "tags": [
    "紫胸佛法僧",
    "稀树草原与干燥疏林"
  ],
  "summary": '紫胸佛法僧停在非洲疏林和稀树草原的高枝上等待猎物，用树洞繁殖，展开翅膀时可见浅蓝与深蓝羽区。',
  "description": '紫胸佛法僧常停在高枝上观察地面，捕食蝗虫、甲虫，也吃小蜥蜴和蛙。它生活在非洲东部至南部的疏林与稀树草原，用树洞繁殖。指名亚种的喉胸呈紫色，腹部蓝绿，翅膀有浅蓝和深蓝羽区，成年鸟的两根外侧尾羽明显延长。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '展开的蓝色翅膀',
      body: '翅膀有浅蓝和深蓝羽区，成年鸟两根外侧尾羽明显延长。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '从胸口找到肚子',
      body: '指名亚种胸部紫色，腹部蓝绿色。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '高枝上向下看',
      body: '紫胸佛法僧常从高处等待地面上的猎物出现。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '嘴里的小虫',
      body: '它会捕食蝗虫、甲虫，也吃小蜥蜴和蛙。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '树干上的洞口',
      body: '紫胸佛法僧利用树洞繁殖。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保留稀树草原中的树木和天然树洞，从远处观察停枝的鸟。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '紫色胸部写进了通名',
      body: '林奈在 1766 年发表了紫胸佛法僧的科学描述，现用学名为 Coracias caudatus。中文名“紫胸”和英文名 Lilac-breasted roller 都与胸部羽色相对应。指名亚种的喉胸呈紫色，成年鸟的两根外侧长尾羽也是辨认线索。',
    },
  ],
  "keyFacts": [
    '翅膀有浅蓝和深蓝羽区，成年鸟两根外侧尾羽明显延长。',
    '指名亚种胸部紫色，腹部蓝绿色。',
    '紫胸佛法僧常从高处等待地面上的猎物出现。',
    '它会捕食蝗虫、甲虫，也吃小蜥蜴和蛙。',
    '紫胸佛法僧利用树洞繁殖。',
  ],
  "threats": [
    "局地疏林栖息地改变"
  ],
  "conservationActions": [
    "保留稀树草原中的树木和天然树洞，从远处观察停枝的鸟。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "稀树草原与干燥疏林"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "展开的蓝色翅膀"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "无危",
      "note": "采用所列来源的 IUCN 全球等级；独立评估年份未核实，全球趋势未录入。"
    }
  ],
  "media": {
    "image": "./images/species/lilac-breasted-roller/01-cover.webp",
    "alt": "紫胸佛法僧及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/lilac-breasted-roller/02-observation.webp",
        "alt": "紫胸佛法僧：展开的蓝色翅膀",
        "title": "展开的蓝色翅膀",
        "caption": "AI 生成科学情景重建。从浅蓝色看到翅膀外侧的深蓝色，再找找长尾羽。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lilac-breasted-roller/03-observation.webp",
        "alt": "紫胸佛法僧：从胸口找到肚子",
        "title": "从胸口找到肚子",
        "caption": 'AI 生成科学情景重建。找到紫色胸部和蓝绿色腹部，看看两种颜色在哪里相接。采用紫色喉胸的指名亚种外形。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lilac-breasted-roller/04-observation.webp",
        "alt": "紫胸佛法僧：高枝上向下看",
        "title": "高枝上向下看",
        "caption": "AI 生成科学情景重建。顺着鸟嘴的方向看看地面。它常从高处等待猎物出现。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lilac-breasted-roller/05-observation.webp",
        "alt": "紫胸佛法僧：嘴里的小虫",
        "title": "嘴里的小虫",
        "caption": "AI 生成科学情景重建。找找嘴边的昆虫。它会捕食蝗虫等动物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lilac-breasted-roller/06-observation.webp",
        "alt": "紫胸佛法僧：树干上的洞口",
        "title": "树干上的洞口",
        "caption": "AI 生成科学情景重建。在鸟旁边找一个树洞。紫胸佛法僧会利用树洞繁殖。",
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
      "title": "ADW：分类",
      "url": "https://animaldiversity.org/accounts/Coracias_caudatus/classification/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-28"
    },
    {
      "title": "London Zoo：全球 LC 与捕食行为",
      "url": "https://www.londonzoo.org/whats-here/animals/lilac-breasted-roller",
      "kind": "conservation",
      "accessedAt": "2026-09-28"
    },
    {
      "title": "Biodiversity Explorer：分布、食物与巢洞",
      "url": "https://www.biodiversityexplorer.info/birds/coraciidae/coracias_caudatus.htm",
      "kind": "ecology",
      "accessedAt": "2026-09-28"
    },
    {
      title: 'GBIF：Coracias caudatus 的描述作者与年份',
      url: 'https://www.gbif.org/species/2475360',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-28",
  "updatedAt": "2026-09-28"
} as const satisfies Species;

export default profile;
