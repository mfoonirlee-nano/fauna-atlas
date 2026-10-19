import type { Species } from '../../types/species.ts';

const profile = {
  "id": "pale-grass-blue",
  "slug": "pale-grass-blue",
  "names": {
    "zh": "酢浆灰蝶",
    "en": "Pale Grass Blue",
    "aliases": [
      "Zizeeria maha",
      "蓝灰蝶"
    ]
  },
  "scientificName": "Pseudozizeeria maha",
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
      "scientificName": "Lycaenidae",
      "zhName": "灰蝶科"
    },
    "genus": {
      "scientificName": "Pseudozizeeria",
      "zhName": "酢浆灰蝶属"
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
      "南亚、东南亚与东亚部分地区"
    ],
    "countries": [],
    "range": "南亚、东南亚与东亚部分地区。酢浆灰蝶分布于亚洲多地，常在有酢浆草的低矮植被附近活动。日本研究观察到它的生活与贴地寄主紧密相连；这不是对所有地区飞行高度的固定测量。地图代表点不表达完整范围，也不是野外观察记录。",
    "center": {
      "lat": 26,
      "lng": 119
    }
  },
  "habitats": [
    {
      "name": "酢浆草生长的低矮草地",
      "realm": "terrestrial",
      "description": "酢浆灰蝶分布于亚洲多地，常在有酢浆草的低矮植被附近活动。日本研究观察到它的生活与贴地寄主紧密相连；这不是对所有地区飞行高度的固定测量。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore",
      "nectarivore"
    ],
    "foods": [
      "幼虫取食的酢浆草叶",
      "成蝶吸食的花蜜"
    ],
    "description": "幼虫可吃酢浆草，成蝶访花吸蜜。关于幼虫体色的实验使用酢浆草研究寄主颜色影响，不能据此把寄主植物颜色直接当成鉴种标准，也不能认为所有地区只利用一种植物。"
  },
  "tags": [
    "酢浆灰蝶",
    "酢浆草生长的低矮草地"
  ],
  "summary": "酢浆灰蝶常贴近低矮草地活动，幼虫可取食酢浆草。雄蝶上翅面带淡蓝紫色，合翅时露出有小黑点的灰白翅底。",
  "description": "酢浆灰蝶体形小，翅底偏灰白，带排列成行的小黑点，后翅没有明显长尾突。雄蝶翅面常呈淡蓝紫色，雌蝶深色区域可较多。辨认时要比较同一侧翅面，不能把开翅与闭翅的照片当成不同物种。本档案采用待办和 GBIF 所列 Pseudozizeeria maha，归入灰蝶科、酢浆灰蝶属。研究论文也使用 Zizeeria maha；当前 GBIF 将两种组合分列，图册仅保留一份档案，并把另一组合列为检索别名。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "酢浆灰蝶体形小，翅底偏灰白，带排列成行的小黑点，后翅没有明显长尾突。雄蝶翅面常呈淡蓝紫色，雌蝶深色区域可较多。辨认时要比较同一侧翅面，不能把开翅与闭翅的照片当成不同物种。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "酢浆灰蝶分布于亚洲多地，常在有酢浆草的低矮植被附近活动。日本研究观察到它的生活与贴地寄主紧密相连；这不是对所有地区飞行高度的固定测量。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物与口器",
      "body": "幼虫可吃酢浆草，成蝶访花吸蜜。关于幼虫体色的实验使用酢浆草研究寄主颜色影响，不能据此把寄主植物颜色直接当成鉴种标准，也不能认为所有地区只利用一种植物。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "从卵到成虫",
      "body": "雌蝶在寄主上产卵，幼虫经过蜕皮后化蛹，最终羽化成蝶。幼虫体色受遗传与环境共同影响，图库中绿色幼虫属于情景示意，不代表一个固定日龄或所有季节外观。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "本档案采用待办和 GBIF 所列 Pseudozizeeria maha，归入灰蝶科、酢浆灰蝶属。研究论文也使用 Zizeeria maha；当前 GBIF 将两种组合分列，图册仅保留一份档案，并把另一组合列为检索别名。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：翅底的小点怎样排列，后翅有没有长尾突？观察任务：在草地影像中先找酢浆草，再找成蝶和叶背的卵。卵与幼虫留在寄主上，不采集带走。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Pseudozizeeria maha 的名称记录",
      "body": "该种最初以 Lycaena maha 命名，分类文献通常把 Kollar 的发表年记为 [1844]，当前 GBIF 的 Pseudozizeeria 记录却显示 1848。两种属级组合与年份差异均保留来源对照，不据此把同一种蝶增加为两个物种。"
    }
  ],
  "keyFacts": [
    "酢浆灰蝶体形小，翅底偏灰白，带排列成行的小黑点，后翅没有明显长尾突。雄蝶翅面常呈淡蓝紫色，雌蝶深色区域可较多。辨认时要比较同一侧翅面，不能把开翅与闭翅的照片当成不同物种。",
    "幼虫可吃酢浆草，成蝶访花吸蜜。关于幼虫体色的实验使用酢浆草研究寄主颜色影响，不能据此把寄主植物颜色直接当成鉴种标准，也不能认为所有地区只利用一种植物。",
    "雌蝶在寄主上产卵，幼虫经过蜕皮后化蛹，最终羽化成蝶。幼虫体色受遗传与环境共同影响，图库中绿色幼虫属于情景示意，不代表一个固定日龄或所有季节外观。"
  ],
  "threats": [
    "局部生活环境变化；所引资料未量化全球种群趋势"
  ],
  "conservationActions": [
    "辨认问题：翅底的小点怎样排列，后翅有没有长尾突？观察任务：在草地影像中先找酢浆草，再找成蝶和叶背的卵。卵与幼虫留在寄主上，不采集带走。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "酢浆草生长的低矮草地"
    },
    {
      "key": "food",
      "label": "食物观察",
      "value": "幼虫取食的酢浆草叶、成蝶吸食的花蜜"
    }
  ],
  "media": {
    "image": "./images/species/pale-grass-blue/01-cover.webp",
    "alt": "酢浆灰蝶及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/pale-grass-blue/02-observation.webp",
        "title": "合翅露出的翅底",
        "alt": "酢浆灰蝶：合翅露出的翅底，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。灰白翅底的小黑点要结合排列比较，磨损和光线会影响辨认。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pale-grass-blue/03-observation.webp",
        "title": "雄蝶淡蓝紫色翅面",
        "alt": "酢浆灰蝶：雄蝶淡蓝紫色翅面，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。本图表现雄蝶上翅面，雌蝶和季节型可能不同。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pale-grass-blue/04-observation.webp",
        "title": "酢浆草上的幼虫",
        "alt": "酢浆灰蝶：酢浆草上的幼虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼虫使用酢浆草，绿色外观是阶段示意。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pale-grass-blue/05-observation.webp",
        "title": "叶背的小卵",
        "alt": "酢浆灰蝶：叶背的小卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。卵的表面结构需要放大查看，叶片不作比例尺。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pale-grass-blue/06-observation.webp",
        "title": "低矮花朵上的成蝶",
        "alt": "酢浆灰蝶：低矮花朵上的成蝶，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成蝶贴近低矮植物活动，静态图片不测量飞行范围。 同图不同阶段作发育对照，比例仅作示意。",
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
      "url": "https://www.gbif.org/species/1921150",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "原始研究：酢浆灰蝶幼虫体色与寄主颜色",
      "url": "https://doi.org/10.3390/insects14020202",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "原始研究：低矮寄主与酢浆灰蝶生活环境",
      "url": "https://doi.org/10.1186/1471-2148-13-168",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "GBIF：另一组合 Zizeeria maha 记录",
      "url": "https://www.gbif.org/species/7346407",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "原始区系研究：Pseudozizeeria maha 名称史",
      "url": "https://www.munisentzool.org/yayin/vol11/issue2/vol11issue2-475428.pdf",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球名录：本批检索记录",
      "url": "https://api.gbif.org/v1/species/search?datasetKey=19491596-35ae-4a91-9a98-85cf505f1bd3&q=Pseudozizeeria%20maha&limit=50",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
