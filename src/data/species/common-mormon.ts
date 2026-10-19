import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-mormon",
  "slug": "common-mormon",
  "names": {
    "zh": "玉带凤蝶",
    "en": "Common Mormon"
  },
  "scientificName": "Papilio polytes",
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
      "scientificName": "Papilionidae",
      "zhName": "凤蝶科"
    },
    "genus": {
      "scientificName": "Papilio",
      "zhName": "凤蝶属"
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
    "range": "南亚、东南亚与东亚部分地区。玉带凤蝶可在亚洲热带、亚热带的林缘、花园及城市绿地活动。成蝶访问花朵，雌蝶寻找适合幼虫的寄主。地图代表点不包含完整分布，区域亚种的名称也不替代种级名称。地图代表点不表达完整范围，也不是野外观察记录。",
    "center": {
      "lat": 23,
      "lng": 113
    }
  },
  "habitats": [
    {
      "name": "林缘、花园与柑橘寄主附近",
      "realm": "terrestrial",
      "description": "玉带凤蝶可在亚洲热带、亚热带的林缘、花园及城市绿地活动。成蝶访问花朵，雌蝶寻找适合幼虫的寄主。地图代表点不包含完整分布，区域亚种的名称也不替代种级名称。",
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
      "幼虫取食的芸香科寄主叶",
      "成蝶吸食的花蜜"
    ],
    "description": "幼虫取食柑橘、咖喱叶树等芸香科寄主，成蝶以长口器吸食花蜜。寄主叶片和蜜源花是不同资源，花园里种花并不自动满足幼虫所需。"
  },
  "tags": [
    "玉带凤蝶",
    "林缘、花园与柑橘寄主附近"
  ],
  "summary": "玉带凤蝶雄蝶的黑色后翅上有浅色带纹和尾突。雌蝶外观可有多种类型，幼虫取食柑橘等芸香科植物。",
  "description": "玉带凤蝶雄蝶翅色黑，后翅一列浅色斑相连成带，后翅末端有尾突。雌蝶存在不同外观类型，部分类型会拟态有毒蝶类。图库以雄蝶为主，不能据此认定所有雌蝶也有相同翅纹。本档案采用 GBIF 的 Papilio polytes，归入鳞翅目、凤蝶科、凤蝶属。新加坡资料的 Papilio polytes romulus 是亚种记录，生态资料在注明范围后供种级介绍参考。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "玉带凤蝶雄蝶翅色黑，后翅一列浅色斑相连成带，后翅末端有尾突。雌蝶存在不同外观类型，部分类型会拟态有毒蝶类。图库以雄蝶为主，不能据此认定所有雌蝶也有相同翅纹。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "玉带凤蝶可在亚洲热带、亚热带的林缘、花园及城市绿地活动。成蝶访问花朵，雌蝶寻找适合幼虫的寄主。地图代表点不包含完整分布，区域亚种的名称也不替代种级名称。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物与口器",
      "body": "幼虫取食柑橘、咖喱叶树等芸香科寄主，成蝶以长口器吸食花蜜。寄主叶片和蜜源花是不同资源，花园里种花并不自动满足幼虫所需。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "从卵到成虫",
      "body": "雌蝶把卵产在合适寄主上。幼虫随蜕皮改变外观，成熟后以丝带固定身体化蛹，成蝶从蛹中羽化。图中卵、绿幼虫、蛹和成蝶是阶段示意，不能当作同一只虫的连续实拍。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "本档案采用 GBIF 的 Papilio polytes，归入鳞翅目、凤蝶科、凤蝶属。新加坡资料的 Papilio polytes romulus 是亚种记录，生态资料在注明范围后供种级介绍参考。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：浅色带在哪对翅上，尾突从哪里延伸？观察任务：比较雄蝶与不同雌型影像。保留合适寄主，在原地看卵和幼虫，不把不同地区饲养个体放生。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Papilio polytes 的名称记录",
      "body": "Linnaeus 在 1758 年发表 Papilio polytes，这一属种组合沿用至今。“玉带”可帮助记住雄蝶后翅浅带，但雌蝶多型提醒我们，俗名描述的外观不会覆盖每个个体。"
    }
  ],
  "keyFacts": [
    "玉带凤蝶雄蝶翅色黑，后翅一列浅色斑相连成带，后翅末端有尾突。雌蝶存在不同外观类型，部分类型会拟态有毒蝶类。图库以雄蝶为主，不能据此认定所有雌蝶也有相同翅纹。",
    "幼虫取食柑橘、咖喱叶树等芸香科寄主，成蝶以长口器吸食花蜜。寄主叶片和蜜源花是不同资源，花园里种花并不自动满足幼虫所需。",
    "雌蝶把卵产在合适寄主上。幼虫随蜕皮改变外观，成熟后以丝带固定身体化蛹，成蝶从蛹中羽化。图中卵、绿幼虫、蛹和成蝶是阶段示意，不能当作同一只虫的连续实拍。"
  ],
  "threats": [
    "局部生活环境变化；所引资料未量化全球种群趋势"
  ],
  "conservationActions": [
    "辨认问题：浅色带在哪对翅上，尾突从哪里延伸？观察任务：比较雄蝶与不同雌型影像。保留合适寄主，在原地看卵和幼虫，不把不同地区饲养个体放生。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "林缘、花园与柑橘寄主附近"
    },
    {
      "key": "food",
      "label": "食物观察",
      "value": "幼虫取食的芸香科寄主叶、成蝶吸食的花蜜"
    }
  ],
  "media": {
    "image": "./images/species/common-mormon/01-cover.webp",
    "alt": "玉带凤蝶及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-mormon/02-observation.webp",
        "title": "吸蜜时的侧面",
        "alt": "玉带凤蝶：吸蜜时的侧面，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。长口器吸取花蜜，后翅尾突需要连同翅缘一起观察。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-mormon/03-observation.webp",
        "title": "雄蝶后翅的浅色带",
        "alt": "玉带凤蝶：雄蝶后翅的浅色带，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。本图为雄蝶示意，雌蝶可有不同翅纹。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-mormon/04-observation.webp",
        "title": "柑橘叶上的成熟幼虫",
        "alt": "玉带凤蝶：柑橘叶上的成熟幼虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼虫外观会随龄期变化，绿色幼虫不代表刚孵化阶段。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-mormon/05-observation.webp",
        "title": "丝带固定的蛹",
        "alt": "玉带凤蝶：丝带固定的蛹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。丝带支撑蛹体，绿色并不是所有环境下唯一的蛹色。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-mormon/06-observation.webp",
        "title": "寄主叶上的卵",
        "alt": "玉带凤蝶：寄主叶上的卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。卵很小，放大场景不提供真实尺寸或准确孵化日期。 同图不同阶段作发育对照，比例仅作示意。",
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
      "url": "https://www.gbif.org/species/1938088",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "新加坡 NParks：玉带凤蝶 romulus 亚种",
      "url": "https://www.nparks.gov.sg/florafaunaweb/fauna/9/3/932",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "新加坡 NParks：地区蝶类保护名录",
      "url": "https://www.nparks.gov.sg/nature/species-list/lepidoptera-butterflies",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球名录：本批检索记录",
      "url": "https://api.gbif.org/v1/species/search?datasetKey=19491596-35ae-4a91-9a98-85cf505f1bd3&q=Papilio%20polytes&limit=50",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
