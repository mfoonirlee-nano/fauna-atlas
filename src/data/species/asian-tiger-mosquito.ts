import type { Species } from '../../types/species.ts';

const profile = {
  "id": "asian-tiger-mosquito",
  "slug": "asian-tiger-mosquito",
  "names": {
    "zh": "白纹伊蚊",
    "en": "Asian Tiger Mosquito"
  },
  "scientificName": "Aedes albopictus",
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
      "scientificName": "Culicidae",
      "zhName": "蚊科"
    },
    "genus": {
      "scientificName": "Aedes",
      "zhName": "伊蚊属"
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
      "亚洲及随运输扩散的多地"
    ],
    "countries": [],
    "range": "亚洲及随运输扩散的多地。白纹伊蚊可在住宅周边绿地与林缘活动。树洞、竹筒和人工容器的小量积水都可能供幼虫生长；代表坐标只帮助地图浏览，不表达完整分布或一次采集记录。地图代表点不表达完整范围，也不是野外观察记录。",
    "center": {
      "lat": 24,
      "lng": 113
    }
  },
  "habitats": [
    {
      "name": "居民区绿地与小型积水",
      "realm": "terrestrial",
      "description": "白纹伊蚊可在住宅周边绿地与林缘活动。树洞、竹筒和人工容器的小量积水都可能供幼虫生长；代表坐标只帮助地图浏览，不表达完整分布或一次采集记录。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "nectarivore",
      "omnivore"
    ],
    "foods": [
      "植物糖液",
      "雌蚊繁殖所需的血液",
      "幼虫阶段的水中微小有机颗粒"
    ],
    "description": "成蚊可获取植物糖液，雌蚊还会为产卵吸血。幼虫在水中摄取微小有机颗粒，蛹不进食。不要为了观察吸血，把身体或宠物当作诱饵。"
  },
  "tags": [
    "白纹伊蚊",
    "居民区绿地与小型积水"
  ],
  "summary": "白纹伊蚊胸背中央有一条白色纵线，足上有白环。幼虫和蛹住在水中，成虫离水飞行。",
  "description": "白纹伊蚊体色深，胸背中央有一条银白色纵纹，细长足上有白环。埃及伊蚊的胸背纹样不同，不能仅凭“黑白相间”鉴定。成虫具有细长口器和一对狭长翅。本档案采用 GBIF 接受的 Aedes albopictus，归入双翅目、蚊科、伊蚊属。文献里的 Aedes (Stegomyia) albopictus 包含亚属名，本档案以不带亚属括号的双名展示。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "白纹伊蚊体色深，胸背中央有一条银白色纵纹，细长足上有白环。埃及伊蚊的胸背纹样不同，不能仅凭“黑白相间”鉴定。成虫具有细长口器和一对狭长翅。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "白纹伊蚊可在住宅周边绿地与林缘活动。树洞、竹筒和人工容器的小量积水都可能供幼虫生长；代表坐标只帮助地图浏览，不表达完整分布或一次采集记录。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物与口器",
      "body": "成蚊可获取植物糖液，雌蚊还会为产卵吸血。幼虫在水中摄取微小有机颗粒，蛹不进食。不要为了观察吸血，把身体或宠物当作诱饵。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "从卵到成虫",
      "body": "雌蚊把卵粘在容器内壁靠近水线的位置。水位升高浸没卵后，幼虫可孵化并在水中生长，随后变成逗号形的蛹；成虫从蛹中羽化后离开水面。发育速度随温度和环境变化。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "本档案采用 GBIF 接受的 Aedes albopictus，归入双翅目、蚊科、伊蚊属。文献里的 Aedes (Stegomyia) albopictus 包含亚属名，本档案以不带亚属括号的双名展示。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：胸背是一条中央纵纹，还是弯曲的成对纹样？观察任务：在照片中区分水生幼虫、蛹与成蚊。积水容器由成人清空和刷洗，不用活蚊开展近身观察。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Aedes albopictus 的名称记录",
      "body": "Skuse 在 1894 年描述该种。名称后来采用 Aedes albopictus 组合，命名人外的括号提示它与原始属级组合不同；“亚洲虎蚊”是描述黑白纹样的常见英文名译法。"
    }
  ],
  "keyFacts": [
    "白纹伊蚊体色深，胸背中央有一条银白色纵纹，细长足上有白环。埃及伊蚊的胸背纹样不同，不能仅凭“黑白相间”鉴定。成虫具有细长口器和一对狭长翅。",
    "成蚊可获取植物糖液，雌蚊还会为产卵吸血。幼虫在水中摄取微小有机颗粒，蛹不进食。不要为了观察吸血，把身体或宠物当作诱饵。",
    "雌蚊把卵粘在容器内壁靠近水线的位置。水位升高浸没卵后，幼虫可孵化并在水中生长，随后变成逗号形的蛹；成虫从蛹中羽化后离开水面。发育速度随温度和环境变化。"
  ],
  "threats": [
    "局部生活环境变化；所引资料未量化全球种群趋势"
  ],
  "conservationActions": [
    "辨认问题：胸背是一条中央纵纹，还是弯曲的成对纹样？观察任务：在照片中区分水生幼虫、蛹与成蚊。积水容器由成人清空和刷洗，不用活蚊开展近身观察。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "居民区绿地与小型积水"
    },
    {
      "key": "food",
      "label": "食物观察",
      "value": "植物糖液、雌蚊繁殖所需的血液"
    }
  ],
  "media": {
    "image": "./images/species/asian-tiger-mosquito/01-cover.webp",
    "alt": "白纹伊蚊及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/asian-tiger-mosquito/02-observation.webp",
        "title": "胸背的一条白线",
        "alt": "白纹伊蚊：胸背的一条白线，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。中央白纹是识别线索之一，足上白环也需要一起比较。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-tiger-mosquito/03-observation.webp",
        "title": "花上的成蚊",
        "alt": "白纹伊蚊：花上的成蚊，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成蚊可获取植物糖液，雌蚊吸血属于另一类取食情景。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-tiger-mosquito/04-observation.webp",
        "title": "水中的幼虫",
        "alt": "白纹伊蚊：水中的幼虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼虫生活于水中，树洞和小容器都可能提供发育环境。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-tiger-mosquito/05-observation.webp",
        "title": "水面的逗号形蛹",
        "alt": "白纹伊蚊：水面的逗号形蛹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。蚊蛹不进食，仍可在水中活动。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-tiger-mosquito/06-observation.webp",
        "title": "水线旁的卵",
        "alt": "白纹伊蚊：水线旁的卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。伊蚊卵可附着于容器内壁，清理时需要刷洗内壁。 同图不同阶段作发育对照，比例仅作示意。",
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
      "url": "https://www.gbif.org/species/1651430",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "CDC：白纹伊蚊外形与繁殖环境",
      "url": "https://stacks.cdc.gov/view/cdc/31033/cdc_31033_DS1.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "CDC：伊蚊生活史",
      "url": "https://www.cdc.gov/mosquitoes/about/life-cycle-of-aedes-mosquitoes.html/",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球名录：本批检索记录",
      "url": "https://api.gbif.org/v1/species/search?datasetKey=19491596-35ae-4a91-9a98-85cf505f1bd3&q=Aedes%20albopictus&limit=50",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
