import type { Species } from '../../types/species.ts';

const profile = {
  "id": "large-white",
  "slug": "large-white",
  "names": {
    "zh": "大白粉蝶",
    "en": "Large White"
  },
  "scientificName": "Pieris brassicae",
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
      "scientificName": "Pieridae",
      "zhName": "粉蝶科"
    },
    "genus": {
      "scientificName": "Pieris",
      "zhName": "粉蝶属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "trend": "unknown",
    "code": "NE",
    "label": {
      "zh": "未评估",
      "en": "Not Evaluated"
    },
    "assessor": '尚未核实本种的全球 IUCN 评估，种群变化趋势也不明确。地区等级与 NatureServe 等级不能换算成全球 IUCN 等级。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "欧洲、北非与亚洲部分地区"
    ],
    "countries": [],
    "range": "广布于欧洲、北非与亚洲部分地区，常在有十字花科植物的开阔地、花园和菜园活动。出现季节随地区不同。"
  },
  "habitats": [
    {
      "name": "菜园、花园与开阔地",
      "realm": "terrestrial",
      "description": '在欧洲、北非和亚洲部分地区有十字花科寄主的开阔地、花园与菜园生活，出现季节因地区而异。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "幼虫取食的十字花科植物叶片",
      "成蝶吸食的花蜜"
    ],
    "description": "幼虫吃甘蓝等寄主植物叶片，成蝶访花吸蜜。"
  },
  "tags": [
    "大白粉蝶",
    "菜园、花园与开阔地"
  ],
  "summary": '大白粉蝶常把黄色卵成簇产在菜叶背面，幼虫吃十字花科植物，成蝶访花吸蜜。',
  "description": '大白粉蝶广布于欧洲、北非和亚洲部分地区，在菜园、花园及开阔地活动。成蝶白翅的前端有黑斑，雌蝶前翅上表面还有一对黑点，雄蝶上表面没有这对黑点。雌蝶常把黄色卵成簇产在寄主叶背。幼虫呈黄绿至灰绿色，带深色斑纹和短毛，小幼虫常一起取食十字花科植物叶片。成熟幼虫化蛹，用丝带固定在支撑物上；成蝶主要吸食花蜜。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '叶背的一簇卵',
      body: '雌蝶常把黄色卵成簇产在寄主叶背，卵表面的细纹需放大观察。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '一起吃叶子的幼虫',
      body: '幼虫呈黄绿至灰绿色，带深色斑纹和短毛，小幼虫常聚在一起吃叶片。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '固定在枝上的蛹',
      body: '成熟幼虫化蛹，丝带将蛹固定在枝条等支撑物上，内部继续发育。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '成蝶到花上吃饭',
      body: '成蝶展开长口器吸食花蜜，食物与吃叶子的幼虫不同。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '雄蝶的翅面',
      body: '雄蝶有深色前翅端斑，前翅上表面没有雌蝶那对黑点；比较时要看同一侧翅面。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保留本地寄主和开花植物，在原处观察各发育阶段。尚未核实本种的全球 IUCN 评估，种群变化趋势也不明确。地区等级与 NatureServe 等级不能换算成全球 IUCN 等级。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '科学名称沿用自 1758 年',
      body: '林奈在 1758 年发表了大白粉蝶的科学名称，今天使用 Pieris brassicae。中文名“大白粉蝶”和英文 Large White 都提示成蝶的外观。辨认雌雄还需要看翅纹：两者前翅都有深色端斑，雌蝶上表面有成对黑点，雄蝶缺少这对黑点。',
    },
  ],
  "keyFacts": [
    '雌蝶常把黄色卵成簇产在寄主叶背，卵表面的细纹需放大观察。',
    '幼虫呈黄绿至灰绿色，带深色斑纹和短毛，小幼虫常聚在一起吃叶片。',
    '成熟幼虫化蛹，丝带将蛹固定在枝条等支撑物上，内部继续发育。',
    '成蝶展开长口器吸食花蜜，食物与吃叶子的幼虫不同。',
    '雄蝶有深色前翅端斑，前翅上表面没有雌蝶那对黑点；比较时要看同一侧翅面。',
  ],
  "threats": [
    "局部栖息地改变"
  ],
  "conservationActions": [
    "保留寄主植物，观察时不采集卵、幼虫、蛹或成虫。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "栖息环境",
      "value": "菜园、花园与开阔地"
    },
    {
      "key": "observation",
      "label": "观察提示",
      "value": "叶背的一簇卵"
    },
    {
      "key": "status",
      "label": "全球保护等级",
      "value": "未评估",
      "note": "所引资料未确认全球物种级 IUCN 评估，沿用项目 NE 占位口径；地区等级与 NatureServe 等级不换算成全球 IUCN 等级。未评估不表示没有风险。"
    }
  ],
  "media": {
    "image": "./images/species/large-white/01-cover.webp",
    "alt": "大白粉蝶及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/large-white/02-observation.webp",
        "alt": "大白粉蝶：叶背的一簇卵",
        "title": "叶背的一簇卵",
        "caption": 'AI 生成科学情景重建。放大展示，非实测比例。雌蝶常把黄色的卵成簇产在寄主叶背。卵的细纹需要放大观察，叶片不是尺标。图中成虫与卵或幼虫作不同阶段对照，不表示育幼或同一时刻的实拍。 ',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/large-white/03-observation.webp",
        "alt": "大白粉蝶：一起吃叶子的幼虫",
        "title": "一起吃叶子的幼虫",
        "caption": 'AI 生成科学情景重建。放大展示，非实测比例。幼虫呈黄绿至灰绿色，带深色斑纹和短毛。小幼虫常聚在一起吃叶片。图中成虫与卵或幼虫作不同阶段对照，不表示育幼或同一时刻的实拍。 ',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/large-white/04-observation.webp",
        "alt": "大白粉蝶：固定在枝上的蛹",
        "title": "固定在枝上的蛹",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。成熟幼虫化蛹，丝带将蛹固定在支撑物上。外形不动不表示没有生命。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/large-white/05-observation.webp",
        "alt": "大白粉蝶：成蝶到花上吃饭",
        "title": "成蝶到花上吃饭",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。成蝶展开长口器吸食花蜜。闭翅侧面与封面的展翅背面展示同种动物的不同角度。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/large-white/06-observation.webp",
        "alt": "大白粉蝶：雄蝶的翅面",
        "title": "雄蝶的翅面",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。雄蝶有深色前翅端斑，上表面却没有雌蝶那组成对黑点。比较时须看同一侧翅面。",
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
      "title": "Butterfly Conservation：大白粉蝶",
      "url": "https://butterfly-conservation.org/news-and-blog/species-of-the-month-large-white",
      "kind": "ecology",
      "accessedAt": "2026-10-07"
    },
    {
      "title": "BAMONA：大白粉蝶的卵、幼虫与蛹",
      "url": "https://www.butterfliesandmoths.org/species/Pieris-brassicae",
      "kind": "general",
      "accessedAt": "2026-10-07"
    },
    {
      "title": "Butterfly Conservation：雌雄翅纹与寄主",
      "url": "https://butterfly-conservation.org/in-your-area/east-scotland-branch/scottish-butterflies-large-white",
      "kind": "ecology",
      "accessedAt": "2026-10-07"
    },
    {
      title: 'GBIF：Pieris brassicae 的描述作者与年份',
      url: 'https://www.gbif.org/species/1920506',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-07",
  "updatedAt": "2026-10-07"
} as const satisfies Species;

export default profile;
