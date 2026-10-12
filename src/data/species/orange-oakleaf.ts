import type { Species } from '../../types/species.ts';

const profile = {
  "id": "orange-oakleaf",
  "slug": "orange-oakleaf",
  "names": {
    "zh": "枯叶蛱蝶",
    "en": "Orange Oakleaf",
    "aliases": [
      "枯叶蝶"
    ]
  },
  "scientificName": "Kallima inachus",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Arthropoda",
      "zhName": "节肢动物门"
    },
    "class": {
      "scientificName": "Insecta",
      "zhName": "昆虫纲"
    },
    "order": {
      "scientificName": "Lepidoptera",
      "zhName": "鳞翅目"
    },
    "family": {
      "scientificName": "Nymphalidae",
      "zhName": "蛱蝶科"
    },
    "genus": {
      "scientificName": "Kallima",
      "zhName": "枯叶蛱蝶属"
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
    "assessor": "未取得可核实的全球物种评估"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "亚热带森林林下"
    ],
    "countries": [
      "中国",
      "印度",
      "不丹",
      "尼泊尔"
    ],
    "range": "分布于亚洲的热带、亚热带森林地区，包括喜马拉雅地区、印度东北部及中国部分地区。枯叶蛱蝶属还有外形相似的其他种，不能把所有枯叶状蝴蝶记录合并为本种。",
    "center": {
      "lat": 27,
      "lng": 103
    }
  },
  "habitats": [
    {
      "name": "亚热带森林林下",
      "realm": "terrestrial",
      "description": '在热带、亚热带森林林下活动，寄主植物供幼虫吃叶，湿润的小环境和果汁来源供成蝶利用。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "metrics": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "熟果汁液",
      "寄主植物叶片"
    ],
    "description": "成蝶能用喙吸食熟果等汁液；幼虫取食寄主植物叶片，已记录寄主包括马蓝属等植物。"
  },
  "activity": [
    "日行性"
  ],
  "tags": [
    "枯叶伪装",
    "亚热带森林林下"
  ],
  "summary": "枯叶蛱蝶合起翅膀时，褐色斑纹、叶脉状线条和后翅尾突拼成枯叶轮廓。它张开翅膀后，又会露出蓝紫色与橙色的翅面。",
  "description": '枯叶蛱蝶合翅停栖时，外露的褐色翅腹面像枯叶，捕食者较难将它识别为食物。触角、身体和足仍藏在翅旁；这种伪装有时也会被识破。',
  "storySections": [
    {
      key: 'identity',
      label: '翅的两面',
      title: '展开后露出橙色斜带',
      body: '成蝶翅背面有蓝紫色区域和橙色斜带，翅腹面则以褐色为主。张开或合起翅膀时，外露的是不同一面，看到的颜色也随之改变。',
    },
    {
      key: 'masquerade',
      label: '枯叶伪装',
      title: '线条和轮廓一起像叶子',
      body: '翅腹面的线条类似枯叶主脉和侧脉，后翅尾突延长叶柄般的轮廓。它静止停在合适背景中时，捕食者可能将其当作无食用价值的枯叶，这属于拟态中的伪装。',
    },
    {
      key: 'variation',
      label: '个体花纹',
      title: '枯叶也有深浅变化',
      body: '不同个体的翅腹面深浅、斑点和纹路各异，像不同状态的枯叶。物种和亚种鉴定还需比较更多细节。',
    },
    {
      key: 'feeding',
      label: '卷曲长喙',
      title: '成蝶吸汁，幼虫吃叶',
      body: '成蝶用长喙吸食熟果汁液，平时可将喙卷起。幼虫则用咀嚼式口器吃寄主植物叶片，两个阶段的取食方式与可用食物不同。',
    },
    {
      key: 'life',
      label: '完整生活史',
      title: '从毛虫到有翅成蝶',
      body: '枯叶蛱蝶经历卵、幼虫、蛹和成虫阶段。幼虫需要合适的寄主植物，成蝶出现的林地还必须能支持下一代，不能只种供成蝶取食的植物。',
    },
    {
      key: 'conservation',
      label: '林下生境',
      title: '保护蝴蝶也要保护寄主',
      body: '保留林下植被、寄主植物和湿润的小环境，有助于各阶段生存。观察时可以拍照，避免捕捉成蝶。全球 IUCN 评估尚未核实，按未评估收录，风险仍需专门调查。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '合起翅膀才露出“枯叶”',
      body: 'Boisduval 于 1836 年描述了这个物种，现用学名为 Kallima inachus。中文名可以对应合翅时的外形：翅腹面的线条像叶脉，后翅尾突像叶柄。张开后却露出蓝紫色和橙色。捕食实验研究的正是这种叶形伪装如何影响识别。',
    },
  ],
  "keyFacts": [
    '展开双翅有蓝紫色区域与橙色斜带。',
    '合翅后露出褐色翅腹面，线条和尾突像枯叶。',
    '个体的翅腹面深浅、斑点和纹路各异。',
    '成蝶吸熟果汁液，幼虫用口器吃寄主叶片。',
    '经历卵、幼虫、蛹和成虫四个阶段。',
  ],
  "threats": [
    "森林破碎化和林下植被清除。",
    "局部采集压力。"
  ],
  "conservationActions": [
    "保留森林林下植被与寄主植物。",
    "用照片观察记录，不追捕停栖成蝶。"
  ],
  "featuredStats": [
    {
      "key": "trait",
      "label": "观察重点",
      "value": "枯叶伪装"
    },
    {
      "key": "development",
      "label": "发育方式",
      "value": "完全变态"
    }
  ],
  "sources": [
    {
      "title": "NCBI — 枯叶蛱蝶分类",
      "url": "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=311037&lin=f&lvl=3&mode=Info",
      "kind": "taxonomy",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "Butterflies of India — 枯叶蛱蝶与寄主记录",
      "url": "https://www.ifoundbutterflies.org/node/3302",
      "kind": "general",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "枯叶伪装的捕食实验",
      "url": "https://pubmed.ncbi.nlm.nih.gov/39382079/",
      "kind": "ecology",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "枯叶蛱蝶成虫的取食行为实验",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3740915/",
      "kind": "ecology",
      "accessedAt": "2026-09-08"
    },
    {
      title: 'GBIF：Kallima inachus 的命名作者与年份',
      url: 'https://www.gbif.org/species/1909607',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "media": {
    "image": "./images/species/orange-oakleaf/01-cover.webp",
    "alt": "枯叶蛱蝶位于画面右侧，完整主体周围保留环境。",
    "focalPoint": {
      "x": 0.86,
      "y": 0.28
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/orange-oakleaf/02-body.webp",
        "title": "展开翅背面",
        "alt": '展开双翅可见蓝紫色区域和橙色斜带。',
        "caption": "展开双翅可见蓝紫色区域和橙色斜带。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/orange-oakleaf/03-detail.webp",
        "title": "像叶脉的翅腹面",
        "alt": '合翅后的褐色线条与后翅尾突共同形成枯叶轮廓。',
        "caption": "合翅后的褐色线条与后翅尾突共同形成枯叶轮廓。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/orange-oakleaf/04-behavior.webp",
        "title": "停在枯叶之间",
        "alt": '停栖位置和静止姿态与翅的外形共同参与伪装。',
        "caption": "停栖位置和静止姿态与翅的外形共同参与伪装。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/orange-oakleaf/05-life.webp",
        "title": "用长喙吸取果汁",
        "alt": '成蝶取食熟果汁液；此图展示成蝶取食，不是幼虫。',
        "caption": "成蝶取食熟果汁液；此图展示成蝶取食，不是幼虫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/orange-oakleaf/06-habitat.webp",
        "title": "湿润的林下环境",
        "alt": '林下植被和寄主植物为不同生命阶段提供条件。',
        "caption": "林下植被和寄主植物为不同生命阶段提供条件。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      }
    ]
  },
  "featured": true,
  "publishedAt": "2026-09-08",
  "updatedAt": "2026-09-08"
} as const satisfies Species;

export default profile;
