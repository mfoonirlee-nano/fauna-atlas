import type { Species } from '../../types/species.ts';

const profile = {
  "id": "moose",
  "slug": "moose",
  "names": {
    "zh": "驼鹿",
    "en": "Moose"
  },
  "scientificName": "Alces alces",
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
      "scientificName": "Artiodactyla",
      "zhName": "偶蹄目"
    },
    "family": {
      "scientificName": "Cervidae",
      "zhName": "鹿科"
    },
    "genus": {
      "scientificName": "Alces",
      "zhName": "驼鹿属"
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
    "assessor": '全球等级为 LC；独立评估日期与趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "欧亚大陆北部与北美洲北部"
    ],
    "countries": [],
    "range": "欧亚大陆北部与北美洲北部；主要生活在北方森林与湖沼边缘。"
  },
  "habitats": [
    {
      "name": "北方森林与湖沼边缘",
      "realm": "terrestrial",
      "description": '欧亚大陆北部和北美洲北部的森林、湖泊及沼泽边缘。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "树叶",
      "嫩枝",
      "水生植物"
    ],
    "description": "食物包括树叶、嫩枝、水生植物。"
  },
  "tags": [
    "驼鹿",
    "北方森林与湖沼边缘"
  ],
  "summary": '驼鹿在北方森林和湖沼边吃枝叶、水生植物。雄鹿的掌状角会脱落重长，雌鹿通常无角，长腿适合涉水。',
  "description": '驼鹿生活在欧亚大陆和北美洲北部的森林、湖沼边缘，吃枝叶和水生植物。长腿与宽蹄帮助它涉水。成年雄鹿有掌状大角，角会周期性脱落重长，雌鹿通常无角。幼鹿由母鹿照顾。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '雄鹿的掌状角',
      body: '图中是成年雄鹿。它的角有宽阔的掌状部分和向外伸出的角枝；雌鹿通常没有角。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '吃树叶的雌鹿',
      body: '这只没有角的成年雌鹿正在取食枝叶。驼鹿也吃嫩枝和水生植物。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '长腿走进浅水',
      body: '驼鹿常到湖沼附近觅食。长腿帮助它涉过浅水，宽大的蹄子支撑身体。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '跟着妈妈走',
      body: '小驼鹿出生后由母鹿照顾。图中的小鹿比妈妈矮得多，身体比例也不同。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '寒冷林地里的生活',
      body: '厚毛帮助驼鹿生活在北方地区。雄鹿的角会周期性脱落并重新生长，因此不是全年都能看到大角。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '本种的全球保护等级为 LC（无危），独立评估日期和趋势尚未确认。寒冷地区的厚毛帮助保暖，雄鹿角会周期性脱落、重新生长。观察带幼仔的母鹿时应保持距离。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '掌状角与物种范围',
      body: 'Linnaeus 在 1758 年发表了驼鹿的科学描述，今天采用 Alces alces。这里依哺乳动物多样性数据库把北美、欧亚种群归为一种，包括曾单列为 Alces americanus 的种群。雄鹿的掌状角容易辨认，但角会脱落重长，雌鹿通常没有角，判断驼鹿不能只看大角。',
    },
  ],
  "keyFacts": [
    "图中是成年雄鹿。它的角有宽阔的掌状部分和向外伸出的角枝；雌鹿通常没有角。",
    "这只没有角的成年雌鹿正在取食枝叶。驼鹿也吃嫩枝和水生植物。",
    "驼鹿常到湖沼附近觅食。长腿帮助它涉过浅水，宽大的蹄子支撑身体。",
    "小驼鹿出生后由母鹿照顾。图中的小鹿比妈妈矮得多，身体比例也不同。",
    "厚毛帮助驼鹿生活在北方地区。雄鹿的角会周期性脱落并重新生长，因此不是全年都能看到大角。"
  ],
  "threats": [],
  "conservationActions": [
    "保护北方森林与湖沼边缘，观察时不捕捉、不驱赶。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "北方森林与湖沼边缘"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "雄鹿的掌状角"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "无危",
      "note": "沿用 MDD 的单种 Alces alces 口径，包含曾单列为 Alces americanus 的北美及亚洲东部种群。MDD 列全球 LC；独立评估日期和趋势未核实。"
    }
  ],
  "media": {
    "image": "./images/species/moose/01-cover.webp",
    "alt": "驼鹿及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/moose/02-observation.webp",
        "alt": "驼鹿：雄鹿的掌状角",
        "title": "雄鹿的掌状角",
        "caption": "AI 生成科学情景重建。图中是成年雄鹿。它的角有宽阔的掌状部分和向外伸出的角枝；雌鹿通常没有角。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/moose/03-observation.webp",
        "alt": "驼鹿：吃树叶的雌鹿",
        "title": "吃树叶的雌鹿",
        "caption": "AI 生成科学情景重建。这只没有角的成年雌鹿正在取食枝叶。驼鹿也吃嫩枝和水生植物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/moose/04-observation.webp",
        "alt": "驼鹿：长腿走进浅水",
        "title": "长腿走进浅水",
        "caption": "AI 生成科学情景重建。驼鹿常到湖沼附近觅食。长腿帮助它涉过浅水，宽大的蹄子支撑身体。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/moose/05-observation.webp",
        "alt": "驼鹿：跟着妈妈走",
        "title": "跟着妈妈走",
        "caption": "AI 生成科学情景重建。小驼鹿出生后由母鹿照顾。图中的小鹿比妈妈矮得多，身体比例也不同。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/moose/06-observation.webp",
        "alt": "驼鹿：寒冷林地里的生活",
        "title": "寒冷林地里的生活",
        "caption": "AI 生成科学情景重建。厚毛帮助驼鹿生活在北方地区。雄鹿的角会周期性脱落并重新生长，因此不是全年都能看到大角。",
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
      "title": "MDD：Alces alces",
      "url": "https://www.mammaldiversity.org/taxon/1006285/",
      "kind": "conservation",
      "accessedAt": "2026-09-23"
    },
    {
      "title": "ADW：Alces alces",
      "url": "https://animaldiversity.org/accounts/Alces_alces/",
      "kind": "general",
      "accessedAt": "2026-09-23"
    },
    {
      title: 'GBIF：驼鹿的科学命名记录',
      url: 'https://www.gbif.org/species/2440940',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-23",
  "updatedAt": "2026-09-23"
} as const satisfies Species;

export default profile;
