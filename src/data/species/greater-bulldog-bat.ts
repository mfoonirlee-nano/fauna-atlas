import type { Species } from '../../types/species.ts';

const profile = {
  "id": "greater-bulldog-bat",
  "slug": "greater-bulldog-bat",
  "names": {
    "zh": "大兔唇蝠",
    "en": "Greater Bulldog Bat"
  },
  "scientificName": "Noctilio leporinus",
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
      "scientificName": "Chiroptera",
      "zhName": "翼手目"
    },
    "family": {
      "scientificName": "Noctilionidae",
      "zhName": "兔唇蝠科"
    },
    "genus": {
      "scientificName": "Noctilio",
      "zhName": "兔唇蝠属"
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
    "assessor": '全球保护等级及评估年份尚未确认；NE 表示资料不完整，不表示本种安全或实际未受评估。全球种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial",
      "freshwater"
    ],
    "continents": [],
    "regions": [
      "美洲热带水域附近"
    ],
    "countries": [
      "墨西哥",
      "巴西",
      "阿根廷"
    ],
    "range": '美洲热带与亚热带水域附近。'
  },
  "habitats": [
    {
      "name": "河岸与树洞",
      "realm": "terrestrial",
      "description": '美洲热带与亚热带河岸、沿海等潮湿环境附近的洞穴、岩隙与树洞。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "piscivore",
      "insectivore"
    ],
    "foods": [
      "小鱼",
      "昆虫",
      "小型甲壳动物"
    ],
    "description": '摄食鱼，也取食昆虫和小型甲壳动物，不同地点与季节的比例会变化。'
  },
  "tags": [
    "大兔唇蝠",
    "河岸与树洞"
  ],
  "summary": '大兔唇蝠在水面上方探查小鱼，用后脚钩爪捕鱼。上唇有分开的皱褶，长后腿和大脚也适合辨认。',
  "description": '大兔唇蝠在美洲热带水域附近活动，白天利用洞穴、岩隙和树洞栖息。它用回声定位探查水面扰动，再把后脚伸入水中抓小鱼，也吃昆虫和小型甲壳动物。上唇有分开的皱褶，长尖耳、长后腿和大钩爪突出。雄性背毛可呈橙褐色，雌性常较灰褐。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '分开的上唇',
      body: '上唇有分开的皱褶，耳朵长而尖，后腿和后脚钩爪突出。雄性背毛可呈橙褐色，雌性常较灰褐；图库主要展示雄性。',
    },
    {
      key: 'movement',
      label: '生活环境',
      title: '在栖息地活动',
      body: '它在水面上方飞行，用回声定位探查水面扰动，后脚可伸入水中抓小鱼。连续影像能说明脚入水、捕鱼和离水的动作。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '摄食鱼，也取食昆虫和小型甲壳动物，不同地点与季节的比例会变化。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '幼仔由母体产出，随后吃奶。白天可利用洞穴、岩隙和树洞栖息；繁殖月份随地点变化。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种属于兔唇蝠科，与叶口蝠科的普通吸血蝠和猪鼻蝠科的猪鼻蝠各有不同归属。水面高度和身体比例不能从重建图测量。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保护河岸、树洞和其他日间栖息处，避免惊扰。捕鱼的后脚与尾膜可从图中观察，捕获动作需要看连续自然影像。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '兔唇、鼓起的嘴唇和暂存食物的颊囊',
      body: 'Linnaeus 在 1758 年发表了本种的科学描述，今天采用 Noctilio leporinus。中文名“兔唇”可以与鼻孔下分开的上唇皱褶对应，英文 Greater Bulldog Bat 则联系鼓起的嘴唇外观。它捕鱼后还可以把部分咀嚼的食物暂存颊囊，继续寻找下一条鱼。',
    },
  ],
  "keyFacts": [
    '雄性外形重建，放大观察嘴唇皱褶和长耳。',
    '后脚是水面捕食的重要结构，图中不展示人为诱发捕食。',
    '后脚下降的姿态示意，静态图无法证明捕获成功。',
    '自然栖息环境重建，不代表所有群体都住树洞。',
    '整个动物留在画面内；连续影像才能解释脚入水与离水的过程。',
    '本种属于兔唇蝠科，与叶口蝠科的普通吸血蝠和猪鼻蝠科的猪鼻蝠各有不同归属。水面高度和身体比例不能从重建图测量。',
    '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。',
  ],
  "threats": [
    "群栖点干扰",
    "水边栖息环境改变"
  ],
  "conservationActions": [
    '保护河岸与树洞及天然隐蔽空间，观察时保留安静距离。',
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "河岸与树洞"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "分开的上唇"
    },
    {
      "key": "conservation",
      "label": "评估资料",
      "value": "尚未核实",
      "note": '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。'
    }
  ],
  "media": {
    "image": "./images/species/greater-bulldog-bat/01-cover.webp",
    "alt": "大兔唇蝠及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/greater-bulldog-bat/02-observation.webp",
        "title": "分开的上唇",
        "alt": "大兔唇蝠：分开的上唇，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。雄性外形重建，放大观察嘴唇皱褶和长耳。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/greater-bulldog-bat/03-observation.webp",
        "title": "后脚的大钩爪",
        "alt": "大兔唇蝠：后脚的大钩爪，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。后脚是水面捕食的重要结构，图中不展示人为诱发捕食。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/greater-bulldog-bat/04-observation.webp",
        "title": "水面上方",
        "alt": "大兔唇蝠：水面上方，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。后脚下降的姿态示意，静态图无法证明捕获成功。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/greater-bulldog-bat/05-observation.webp",
        "title": "树洞旁的栖息姿态",
        "alt": "大兔唇蝠：树洞旁的栖息姿态，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。自然栖息环境重建，不代表所有群体都住树洞。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/greater-bulldog-bat/06-observation.webp",
        "title": "飞行时的脚和尾膜",
        "alt": "大兔唇蝠：飞行时的脚和尾膜，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。整个动物留在画面内；连续影像才能解释脚入水与离水的过程。",
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
      "title": "GBIF：接受学名与分类入口",
      "url": "https://www.gbif.org/species/2433343",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "密歇根大学 ADW：大兔唇蝠",
      "url": "https://animaldiversity.org/accounts/Noctilio_leporinus/",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
