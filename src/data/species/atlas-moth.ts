import type { Species } from '../../types/species.ts';

const profile = {
  "id": "atlas-moth",
  "slug": "atlas-moth",
  "names": {
    "zh": "乌桕大蚕蛾",
    "en": "Atlas Moth",
    "aliases": [
      "皇蛾"
    ]
  },
  "scientificName": "Attacus atlas",
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
      "scientificName": "Saturniidae",
      "zhName": "天蚕蛾科"
    },
    "genus": {
      "scientificName": "Attacus",
      "zhName": "皇蛾属"
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
    "assessor": "所引 MyBIS 与 ADW 资料未提供全球物种级 IUCN 评估，按 NE 记录；未评估不表示没有风险。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "亚洲热带与亚热带森林"
    ],
    "countries": [
      "中国",
      "印度",
      "马来西亚",
      "印度尼西亚"
    ],
    "range": "亚洲热带与亚热带森林。国家列表仅列代表性分布地。"
  },
  "habitats": [
    {
      "name": "亚洲热带与亚热带森林",
      "realm": "terrestrial",
      "description": "亚洲热带与亚热带森林。",
      "isPrimary": true
    }
  ],
  "measurements": {
    "wingspan": {
      "max": 27,
      "unit": "cm",
      "note": "伦敦自然历史博物馆给出的展翅宽度上限，并非每只成蛾的大小。图片未按实物等比例显示。"
    }
  },
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "幼虫取食的植物叶片"
    ],
    "description": "幼虫吃植物叶片；成蛾口器退化，不再进食。"
  },
  "tags": [
    "乌桕大蚕蛾",
    "像梳子的触角"
  ],
  "summary": '乌桕大蚕蛾的翅膀有半透明三角斑。幼虫吃叶、吐丝结茧，成蛾口器退化，靠幼虫时储存的能量生活。',
  "description": '乌桕大蚕蛾生活在亚洲热带和亚热带森林。褐红大翅上有浅色纹带与半透明三角斑，绿色幼虫则有突起和白色蜡质覆盖，吃叶后吐丝结茧。成蛾口器退化，依靠幼虫时储存的能量生活。雄蛾用宽羽状触角感受雌蛾释放的气味。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '像梳子的触角',
      body: '雄蛾头上有一对宽宽的羽状触角。它会用触角感受雌蛾释放的气味，寻找同伴。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '翅膀上的小窗',
      body: '前翅和后翅上都有半透明的斑块。看看深色边缘围着的三角形小窗，再看看周围的彩色鳞片。这是放大的细节图，背景叶片只作环境参照。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '吃叶子的幼虫',
      body: '幼虫是浅绿色的毛毛虫，背上有突起和白色蜡质覆盖。它吃植物叶片，图中叶子提供环境参照，不是精确尺标。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '叶间的茧',
      body: '幼虫长大后吐丝做茧，在里面化蛹。茧附着在枝叶间，外面能看到褐色的丝。图中成蛾与茧展示不同阶段，不表示同一个体正在羽化。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '成蛾停在枝叶旁',
      body: '成蛾的口器退化，不能像许多蝴蝶那样吸食花蜜。它靠幼虫时期积累的能量生活，白天常停着休息。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保留幼虫可取食的植物和林地，欣赏时不采集成蛾或茧。所引 MyBIS 与 ADW 资料未提供全球物种级 IUCN 评估，按 NE 记录；未评估不表示没有风险。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: 'Atlas 的命名解释仍有疑问',
      body: 'Linnaeus 在 1758 年发表 Attacus atlas 这个名称。Atlas 与希腊神话中支撑天空的泰坦同名，但伦敦自然历史博物馆指出，是否直接以神话人物命名并不明确，也有人把翅纹与地图联系起来。这只大蛾还有一个容易忽略的特点：成蛾不吃东西，幼虫阶段储存的能量供它继续生活。',
    },
  ],
  "keyFacts": [
    "雄蛾头上有一对宽宽的羽状触角。它会用触角感受雌蛾释放的气味，寻找同伴。",
    "前翅和后翅上都有半透明的斑块。看看深色边缘围着的三角形小窗，再看看周围的彩色鳞片。这是放大的细节图，背景叶片只作环境参照。",
    "幼虫是浅绿色的毛毛虫，背上有突起和白色蜡质覆盖。它吃植物叶片，图中叶子提供环境参照，不是精确尺标。",
    "幼虫长大后吐丝做茧，在里面化蛹。茧附着在枝叶间，外面能看到褐色的丝。图中成蛾与茧展示不同阶段，不表示同一个体正在羽化。",
    "成蛾的口器退化，不能像许多蝴蝶那样吸食花蜜。它靠幼虫时期积累的能量生活，白天常停着休息。"
  ],
  "threats": [
    "栖息地改变",
    "野外采集压力"
  ],
  "conservationActions": [
    "保留幼虫可取食的植物和林地，欣赏时不采集成蛾或茧。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "像梳子的触角"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "亚洲热带与亚热带森林"
    },
    {
      "key": "wingspan",
      "label": "展翅可达",
      "value": "27",
      "unit": "厘米",
      "note": "来源上限；图片非等比例。"
    }
  ],
  "media": {
    "image": "./images/species/atlas-moth/01-cover.webp",
    "alt": "乌桕大蚕蛾在栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/atlas-moth/02-observation.webp",
        "title": "像梳子的触角",
        "alt": "乌桕大蚕蛾：像梳子的触角",
        "caption": "AI 生成科学情景重建。雄蛾头上有一对宽宽的羽状触角。它会用触角感受雌蛾释放的气味，寻找同伴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlas-moth/03-observation.webp",
        "title": "翅膀上的小窗",
        "alt": "乌桕大蚕蛾：翅膀上的小窗",
        "caption": "AI 生成科学情景重建。前翅和后翅上都有半透明的斑块。看看深色边缘围着的三角形小窗，再看看周围的彩色鳞片。这是放大的细节图，背景叶片只作环境参照。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlas-moth/04-observation.webp",
        "title": "吃叶子的幼虫",
        "alt": "乌桕大蚕蛾：吃叶子的幼虫",
        "caption": "AI 生成科学情景重建。幼虫是浅绿色的毛毛虫，背上有突起和白色蜡质覆盖。它吃植物叶片，图中叶子提供环境参照，不是精确尺标。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlas-moth/05-observation.webp",
        "title": "叶间的茧",
        "alt": "乌桕大蚕蛾：叶间的茧",
        "caption": "AI 生成科学情景重建。幼虫长大后吐丝做茧，在里面化蛹。茧附着在枝叶间，外面能看到褐色的丝。图中成蛾与茧展示不同阶段，不表示同一个体正在羽化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlas-moth/06-observation.webp",
        "title": "成蛾停在枝叶旁",
        "alt": "乌桕大蚕蛾：成蛾停在枝叶旁",
        "caption": "AI 生成科学情景重建。成蛾的口器退化，不能像许多蝴蝶那样吸食花蜜。它靠幼虫时期积累的能量生活，白天常停着休息。",
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
      "title": "马来西亚 MyBIS：乌桕大蚕蛾分类、形态与未评估状态",
      "url": "https://www.mybis.gov.my/art/281",
      "kind": "conservation",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "伦敦自然历史博物馆：大蚕蛾生活史与口器",
      "url": "https://www.nhm.ac.uk/discover/spotlight-the-atlas-moth.html",
      "kind": "ecology",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "密歇根大学 ADW：乌桕大蚕蛾分类与幼虫形态",
      "url": "https://animaldiversity.org/accounts/Attacus_atlas/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-21"
    },
    {
      title: 'GBIF：乌桕大蚕蛾的科学命名记录',
      url: 'https://www.gbif.org/species/5124716',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-21",
  "updatedAt": "2026-09-21"
} as const satisfies Species;

export default profile;
