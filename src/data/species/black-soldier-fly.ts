import type { Species } from '../../types/species.ts';

const profile = {
  "id": "black-soldier-fly",
  "slug": "black-soldier-fly",
  "names": {
    "zh": "黑水虻",
    "en": "Black Soldier Fly"
  },
  "scientificName": "Hermetia illucens",
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
      "scientificName": "Diptera",
      "zhName": "双翅目"
    },
    "family": {
      "scientificName": "Stratiomyidae",
      "zhName": "水虻科"
    },
    "genus": {
      "scientificName": "Hermetia",
      "zhName": "扁角水虻属"
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
      "美洲及世界其他温暖地区"
    ],
    "countries": [],
    "range": "美洲及世界其他温暖地区。黑水虻常在有植被、腐熟有机物或农场废弃物的环境出现。临近化蛹的成熟幼虫可从取食点移到较干燥的隐蔽处。代表坐标用于浏览，不表达全球完整分布。地图代表点不表达完整范围，也不是野外观察记录。",
    "center": {
      "lat": 25,
      "lng": -81
    }
  },
  "habitats": [
    {
      "name": "植被与腐熟有机物附近",
      "realm": "terrestrial",
      "description": "黑水虻常在有植被、腐熟有机物或农场废弃物的环境出现。临近化蛹的成熟幼虫可从取食点移到较干燥的隐蔽处。代表坐标用于浏览，不表达全球完整分布。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "detritivore"
    ],
    "foods": [
      "幼虫取食的腐熟植物与其他有机材料"
    ],
    "description": "幼虫取食分解中的有机材料，在受控设施里可参与有机物处理。成虫主要依靠幼虫阶段积累的储备维持生活；不能把成虫画成用长螫针吸血，也不能据利用价值推断任意废物都适合作饲料。"
  },
  "tags": [
    "黑水虻",
    "植被与腐熟有机物附近"
  ],
  "summary": "黑水虻成虫细长、体色深，腹部基部有半透明的“窗”。幼虫身体分节明显，可在腐熟有机材料中生长。",
  "description": "黑水虻常因细长深色身体被误看成蜂。它有一对翅，触角较长，足端可见浅色区域；腹部基部的一对半透明区域可作观察线索。外形相似并不让它变成有螫针的蜂。本档案采用 GBIF 接受的 Hermetia illucens，归入双翅目、水虻科、扁角水虻属。它和同为双翅目的家蝇分属不同科，不能把两者的幼虫外形和生活环境全部互换。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "黑水虻常因细长深色身体被误看成蜂。它有一对翅，触角较长，足端可见浅色区域；腹部基部的一对半透明区域可作观察线索。外形相似并不让它变成有螫针的蜂。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "黑水虻常在有植被、腐熟有机物或农场废弃物的环境出现。临近化蛹的成熟幼虫可从取食点移到较干燥的隐蔽处。代表坐标用于浏览，不表达全球完整分布。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物与口器",
      "body": "幼虫取食分解中的有机材料，在受控设施里可参与有机物处理。成虫主要依靠幼虫阶段积累的储备维持生活；不能把成虫画成用长螫针吸血，也不能据利用价值推断任意废物都适合作饲料。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "从卵到成虫",
      "body": "雌虫在适合幼虫生长的材料附近缝隙中产卵。幼虫多次蜕皮，成熟后体色加深并迁移，在硬化的外皮内化蛹。卵、幼虫、蛹和成虫是不同阶段，不靠一张图片判断确切发育天数。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "本档案采用 GBIF 接受的 Hermetia illucens，归入双翅目、水虻科、扁角水虻属。它和同为双翅目的家蝇分属不同科，不能把两者的幼虫外形和生活环境全部互换。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：腹部基部能否看见浅色窗，触角与家蝇有何差别？观察任务：比较幼虫与较深色预蛹。腐熟材料的处理由成人完成，孩子只观看清晰影像。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Hermetia illucens 的名称记录",
      "body": "Linnaeus 在 1758 年以 Musca illucens 发表该种；后来采用 Hermetia illucens 组合，因此命名人常写在括号中。黑水虻的饲养利用属于后来的人类实践，不能从命名时间推算。"
    }
  ],
  "keyFacts": [
    "黑水虻常因细长深色身体被误看成蜂。它有一对翅，触角较长，足端可见浅色区域；腹部基部的一对半透明区域可作观察线索。外形相似并不让它变成有螫针的蜂。",
    "幼虫取食分解中的有机材料，在受控设施里可参与有机物处理。成虫主要依靠幼虫阶段积累的储备维持生活；不能把成虫画成用长螫针吸血，也不能据利用价值推断任意废物都适合作饲料。",
    "雌虫在适合幼虫生长的材料附近缝隙中产卵。幼虫多次蜕皮，成熟后体色加深并迁移，在硬化的外皮内化蛹。卵、幼虫、蛹和成虫是不同阶段，不靠一张图片判断确切发育天数。"
  ],
  "threats": [
    "局部生活环境变化；所引资料未量化全球种群趋势"
  ],
  "conservationActions": [
    "辨认问题：腹部基部能否看见浅色窗，触角与家蝇有何差别？观察任务：比较幼虫与较深色预蛹。腐熟材料的处理由成人完成，孩子只观看清晰影像。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "植被与腐熟有机物附近"
    },
    {
      "key": "food",
      "label": "食物观察",
      "value": "幼虫取食的腐熟植物与其他有机材料"
    }
  ],
  "media": {
    "image": "./images/species/black-soldier-fly/01-cover.webp",
    "alt": "黑水虻及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/black-soldier-fly/02-observation.webp",
        "title": "腹部基部的浅色窗",
        "alt": "黑水虻：腹部基部的浅色窗，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。半透明区域是观察线索，姿势与光线会影响可见程度。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-soldier-fly/03-observation.webp",
        "title": "较长的触角",
        "alt": "黑水虻：较长的触角，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成虫只有一对翅，不能根据似蜂的轮廓判断分类。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-soldier-fly/04-observation.webp",
        "title": "腐熟材料中的幼虫",
        "alt": "黑水虻：腐熟材料中的幼虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼虫在有机材料中取食，图中材料并非饲养配方。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-soldier-fly/05-observation.webp",
        "title": "较深色的预蛹",
        "alt": "黑水虻：较深色的预蛹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成熟幼虫可离开湿润取食点，体色逐渐加深。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-soldier-fly/06-observation.webp",
        "title": "干燥处的蛹壳",
        "alt": "黑水虻：干燥处的蛹壳，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。蛹在硬化外皮内发育，外壳不是昆虫卵。 同图不同阶段作发育对照，比例仅作示意。",
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
      "url": "https://www.gbif.org/species/1577153",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "佛罗里达大学：黑水虻幼虫与成虫资料",
      "url": "https://ask.ifas.ufl.edu/publication/IN830",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球名录：本批检索记录",
      "url": "https://api.gbif.org/v1/species/search?datasetKey=19491596-35ae-4a91-9a98-85cf505f1bd3&q=Hermetia%20illucens&limit=50",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
