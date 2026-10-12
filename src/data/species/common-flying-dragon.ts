import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-flying-dragon",
  "slug": "common-flying-dragon",
  "names": {
    "zh": "飞蜥",
    "en": "Common Flying Dragon"
  },
  "scientificName": "Draco volans",
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
      "scientificName": "Squamata",
      "zhName": "有鳞目"
    },
    "family": {
      "scientificName": "Agamidae",
      "zhName": "鬣蜥科"
    },
    "genus": {
      "scientificName": "Draco",
      "zhName": "飞蜥属"
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
    "assessor": '全球 IUCN 评估尚未确认；地区等级不等于全球评估。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      '印度尼西亚爪哇、巴厘等地；旧文献的广义范围包含已另列的近缘种。'
    ],
    "countries": [],
    "range": '印度尼西亚爪哇、巴厘等地；过去合并近似类群的较广分布不适用于本种。'
  },
  "habitats": [
    {
      "name": "热带林地树干与树冠",
      "realm": "terrestrial",
      "description": '热带林地的树干与树冠，相连林木提供攀爬和滑翔的空间。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "蚂蚁",
      "其他小型昆虫"
    ],
    "description": "食物包括蚂蚁、其他小型昆虫。"
  },
  "tags": [
    "飞蜥",
    "展开皮膜"
  ],
  "summary": '飞蜥用细长肋骨支撑身体两侧的皮膜，从高处滑翔。停下后收膜攀树，捕食蚂蚁等昆虫。',
  "description": '飞蜥在热带林地攀树，吃蚂蚁等小型昆虫。细长肋骨支撑身体两侧的皮膜，它从高处滑翔时会将皮膜展开，停落后收起。雄性喉下另有用于展示的皮褶，与滑翔膜是不同结构。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '展开皮膜',
      body: '看看身体两侧展开的皮膜。细长肋骨支撑皮膜，帮助飞蜥从高处滑翔。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '收起皮膜',
      body: '停在树干上时，飞蜥把皮膜收在身体两旁。它仍然用四条腿爬树。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '喉下的小扇子',
      body: '雄性会展开喉部皮褶作展示。喉部皮褶与身体两侧的滑翔膜是不同结构。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '抓住树皮',
      body: '找找脚趾上的小爪，它们帮助飞蜥攀住树皮。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '树干上的小食物',
      body: '飞蜥会在树干附近捕食小型昆虫，蚂蚁是其中一类食物。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '一起观察与保护',
      body: '保留相连的林木，用远观或影像认识滑翔，不抓取动物演示。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '学名里的“飞行”指向滑翔',
      body: 'Linnaeus 在 1758 年发表 Draco volans 这个名称。种名 volans 来自拉丁语“飞行”，属名 Draco 指传说中的龙。实际观察到的移动方式是借皮膜从高处滑翔，脚仍用于攀树。旧资料有时把近似类群合并，本种的分布因此要与后来分出的飞蜥区分。',
    },
  ],
  "keyFacts": [
    "看看身体两侧展开的皮膜。细长肋骨支撑皮膜，帮助飞蜥从高处滑翔。",
    "停在树干上时，飞蜥把皮膜收在身体两旁。它仍然用四条腿爬树。",
    "雄性会展开喉部皮褶作展示。喉部皮褶与身体两侧的滑翔膜是不同结构。",
    "找找脚趾上的小爪，它们帮助飞蜥攀住树皮。",
    "飞蜥会在树干附近捕食小型昆虫，蚂蚁是其中一类食物。"
  ],
  "threats": [],
  "conservationActions": [
    "保留相连的林木，用远观或影像认识滑翔，不抓取动物演示。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "展开皮膜"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "热带林地树干与树冠"
    }
  ],
  "media": {
    "image": "./images/species/common-flying-dragon/01-cover.webp",
    "alt": "飞蜥在热带林地树干与树冠中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-flying-dragon/02-observation.webp",
        "title": "展开皮膜",
        "alt": "飞蜥：展开皮膜",
        "caption": "AI 生成科学情景重建。看看身体两侧展开的皮膜。细长肋骨支撑皮膜，帮助飞蜥从高处滑翔。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-flying-dragon/03-observation.webp",
        "title": "收起皮膜",
        "alt": "飞蜥：收起皮膜",
        "caption": "AI 生成科学情景重建。停在树干上时，飞蜥把皮膜收在身体两旁。它仍然用四条腿爬树。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-flying-dragon/04-observation.webp",
        "title": "喉下的小扇子",
        "alt": "飞蜥：喉下的小扇子",
        "caption": "AI 生成科学情景重建。雄性会展开喉部皮褶作展示。喉部皮褶与身体两侧的滑翔膜是不同结构。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-flying-dragon/05-observation.webp",
        "title": "抓住树皮",
        "alt": "飞蜥：抓住树皮",
        "caption": "AI 生成科学情景重建。找找脚趾上的小爪，它们帮助飞蜥攀住树皮。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-flying-dragon/06-observation.webp",
        "title": "树干上的小食物",
        "alt": "飞蜥：树干上的小食物",
        "caption": "AI 生成科学情景重建。飞蜥会在树干附近捕食小型昆虫，蚂蚁是其中一类食物。",
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
      "title": "reptile-database.reptarium.cz：Draco volans",
      "url": "https://reptile-database.reptarium.cz/Draco/volans",
      "kind": "general",
      "accessedAt": "2026-09-22"
    },
    {
      "title": "animaldiversity.org：Draco volans",
      "url": "https://animaldiversity.org/accounts/Draco_volans/",
      "kind": "general",
      "accessedAt": "2026-09-22"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-22",
  "updatedAt": "2026-09-22"
} as const satisfies Species;

export default profile;
