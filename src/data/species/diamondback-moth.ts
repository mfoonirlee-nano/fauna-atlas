import type { Species } from '../../types/species.ts';

const profile = {
  "id": "diamondback-moth",
  "slug": "diamondback-moth",
  "names": {
    "zh": "小菜蛾",
    "en": "Diamondback Moth"
  },
  "scientificName": "Plutella xylostella",
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
      "scientificName": "Plutellidae",
      "zhName": "菜蛾科"
    },
    "genus": {
      "scientificName": "Plutella",
      "zhName": "菜蛾属"
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
    "assessor": "本批未核实全球物种级 IUCN 评估，页面暂记 NE；检索无结果不证明从未评估，地区保护等级和入侵风险不换算成全球等级。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "世界多地的十字花科植物种植区"
    ],
    "countries": [],
    "range": "世界多地的十字花科植物种植区。小菜蛾随寄主与种植活动广布，成虫能扩散到新的菜地。它可出现在甘蓝、芥菜等十字花科植物附近。叶片破洞有多种成因，要结合虫体形态观察。地图代表点不表达完整范围，也不是野外观察记录。",
    "center": {
      "lat": 30,
      "lng": 113
    }
  },
  "habitats": [
    {
      "name": "十字花科菜地与野生寄主周边",
      "realm": "terrestrial",
      "description": "小菜蛾随寄主与种植活动广布，成虫能扩散到新的菜地。它可出现在甘蓝、芥菜等十字花科植物附近。叶片破洞有多种成因，要结合虫体形态观察。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "幼虫取食的十字花科植物叶片"
    ],
    "description": "幼虫取食十字花科植物叶片，可留下薄膜样食痕或小孔。成虫与幼虫的取食结构不同，不能把吃菜叶的行为画到成蛾身上。田间管理需辨认虫害及其天敌。"
  },
  "tags": [
    "小菜蛾",
    "十字花科菜地与野生寄主周边"
  ],
  "summary": "小菜蛾合翅停息时，背上浅色波纹常拼成菱形。幼虫吃十字花科叶片，化蛹时会结疏松的丝茧。",
  "description": "小菜蛾成虫细小、灰褐，狭长翅的边缘有缘毛。合翅时背部浅色波纹可组成连续的菱形纹，名称 Diamondback Moth 由此而来。幼虫偏绿，前后端较细。本档案采用 GBIF 接受的 Plutella xylostella，归入鳞翅目、菜蛾科、菜蛾属。菜青虫是其他几种蝶类幼虫的俗称，不能把所有吃菜叶的小绿虫都当作小菜蛾幼虫。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "小菜蛾成虫细小、灰褐，狭长翅的边缘有缘毛。合翅时背部浅色波纹可组成连续的菱形纹，名称 Diamondback Moth 由此而来。幼虫偏绿，前后端较细。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "小菜蛾随寄主与种植活动广布，成虫能扩散到新的菜地。它可出现在甘蓝、芥菜等十字花科植物附近。叶片破洞有多种成因，要结合虫体形态观察。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物与口器",
      "body": "幼虫取食十字花科植物叶片，可留下薄膜样食痕或小孔。成虫与幼虫的取食结构不同，不能把吃菜叶的行为画到成蛾身上。田间管理需辨认虫害及其天敌。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "从卵到成虫",
      "body": "雌蛾把卵产在叶面，孵出的幼虫取食并多次蜕皮，随后在叶背等处结疏松丝茧化蛹。蛹在茧内发育成蛾。温度和寄主会影响完成一代所需的时间。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "本档案采用 GBIF 接受的 Plutella xylostella，归入鳞翅目、菜蛾科、菜蛾属。菜青虫是其他几种蝶类幼虫的俗称，不能把所有吃菜叶的小绿虫都当作小菜蛾幼虫。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：浅纹在合翅处怎样拼成菱形，茧是致密还是疏松？观察任务：用照片比较幼虫、蛹茧与成虫。菜地里的药剂和虫害处理由成人依当地指导完成。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Plutella xylostella 的名称记录",
      "body": "Linnaeus 在 1767 年描述该种，今天使用 Plutella xylostella 组合。文献与农业推广资料都用这一双名把成虫、幼虫和疏松丝茧联系起来，俗名中的“小”和“菜”并不是诊断特征。"
    }
  ],
  "keyFacts": [
    "小菜蛾成虫细小、灰褐，狭长翅的边缘有缘毛。合翅时背部浅色波纹可组成连续的菱形纹，名称 Diamondback Moth 由此而来。幼虫偏绿，前后端较细。",
    "幼虫取食十字花科植物叶片，可留下薄膜样食痕或小孔。成虫与幼虫的取食结构不同，不能把吃菜叶的行为画到成蛾身上。田间管理需辨认虫害及其天敌。",
    "雌蛾把卵产在叶面，孵出的幼虫取食并多次蜕皮，随后在叶背等处结疏松丝茧化蛹。蛹在茧内发育成蛾。温度和寄主会影响完成一代所需的时间。"
  ],
  "threats": [
    "局部生活环境变化；所引资料未量化全球种群趋势"
  ],
  "conservationActions": [
    "辨认问题：浅纹在合翅处怎样拼成菱形，茧是致密还是疏松？观察任务：用照片比较幼虫、蛹茧与成虫。菜地里的药剂和虫害处理由成人依当地指导完成。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "十字花科菜地与野生寄主周边"
    },
    {
      "key": "food",
      "label": "食物观察",
      "value": "幼虫取食的十字花科植物叶片"
    }
  ],
  "media": {
    "image": "./images/species/diamondback-moth/01-cover.webp",
    "alt": "小菜蛾及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/diamondback-moth/02-observation.webp",
        "title": "背上的菱形纹",
        "alt": "小菜蛾：背上的菱形纹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。菱形纹在合翅时更容易观察，磨损个体可能不清晰。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/diamondback-moth/03-observation.webp",
        "title": "叶背的绿色幼虫",
        "alt": "小菜蛾：叶背的绿色幼虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼虫两端渐细，准确鉴定还需要更多结构。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/diamondback-moth/04-observation.webp",
        "title": "叶片上的取食痕",
        "alt": "小菜蛾：叶片上的取食痕，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。小孔和薄膜样食痕可作线索，不能单靠虫孔确定物种。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/diamondback-moth/05-observation.webp",
        "title": "疏松丝茧里的蛹",
        "alt": "小菜蛾：疏松丝茧里的蛹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。小菜蛾的茧较疏松，可隐约看见内部蛹体。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/diamondback-moth/06-observation.webp",
        "title": "菜地中的成蛾",
        "alt": "小菜蛾：菜地中的成蛾，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。十字花科植物供幼虫生长，成蛾并不以同样方式啃叶。 同图不同阶段作发育对照，比例仅作示意。",
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
      "title": "GBIF：接受学名与分类链",
      "url": "https://www.gbif.org/species/1831136",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "佛罗里达大学：小菜蛾形态、生活史及管理",
      "url": "https://ask.ifas.ufl.edu/publication/IN1443",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "佛罗里达大学：甘蓝种植中的小菜蛾",
      "url": "https://ask.ifas.ufl.edu/pi042/",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球名录：本批检索记录",
      "url": "https://api.gbif.org/v1/species/search?datasetKey=19491596-35ae-4a91-9a98-85cf505f1bd3&q=Plutella%20xylostella&limit=50",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
