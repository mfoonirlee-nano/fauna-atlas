import type { Species } from '../../types/species.ts';

const profile = {
  "id": "adzuki-bean-beetle",
  "slug": "adzuki-bean-beetle",
  "names": {
    "zh": "绿豆象",
    "en": "Adzuki Bean Beetle"
  },
  "scientificName": "Callosobruchus chinensis",
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
      "scientificName": "Coleoptera",
      "zhName": "鞘翅目"
    },
    "family": {
      "scientificName": "Chrysomelidae",
      "zhName": "叶甲科"
    },
    "genus": {
      "scientificName": "Callosobruchus",
      "zhName": "瘤背豆象属"
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
      "亚洲及随豆类贸易扩散的多地"
    ],
    "countries": [],
    "range": "亚洲及随豆类贸易扩散的多地。绿豆象可在田间侵染豆类，也可随着种子进入储藏环境。它原产亚洲，后来随运输到达其他地区。观察到豆孔只能提示内部曾有昆虫，不能仅凭一个孔认定物种。地图代表点不表达完整范围，也不是野外观察记录。",
    "center": {
      "lat": 26,
      "lng": 110
    }
  },
  "habitats": [
    {
      "name": "豆类种子与储藏环境",
      "realm": "terrestrial",
      "description": "绿豆象可在田间侵染豆类，也可随着种子进入储藏环境。它原产亚洲，后来随运输到达其他地区。观察到豆孔只能提示内部曾有昆虫，不能仅凭一个孔认定物种。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "幼虫取食的绿豆、赤豆等豆类种子"
    ],
    "description": "幼虫在豆类种子内部取食，通常在同一粒种子内完成生长并化蛹。成虫寿命较短，FAO介绍的储粮生活史不把成虫取食当作必需环节；不能把幼虫食物直接套到所有成虫身上。"
  },
  "tags": [
    "绿豆象",
    "豆类种子与储藏环境"
  ],
  "summary": "绿豆象的幼虫钻进豆类种子，在种子内部生长。成虫离开时会在种皮上留下圆孔，它没有米象那样的长吻。",
  "description": "绿豆象是体形短小的豆象类甲虫，鞘翅较短，腹部末端可露出。体表毛与斑纹让它呈浅深相间的褐色；雄虫触角较呈梳状，雌虫较接近锯齿状。它没有米象明显的长吻。本档案采用 GBIF 的 Callosobruchus chinensis，归入鞘翅目、叶甲科、瘤背豆象属。部分农业资料仍把豆象类单列为豆象科，本图谱使用 GBIF 的叶甲科归属，不混用两条科级路径。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "绿豆象是体形短小的豆象类甲虫，鞘翅较短，腹部末端可露出。体表毛与斑纹让它呈浅深相间的褐色；雄虫触角较呈梳状，雌虫较接近锯齿状。它没有米象明显的长吻。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "绿豆象可在田间侵染豆类，也可随着种子进入储藏环境。它原产亚洲，后来随运输到达其他地区。观察到豆孔只能提示内部曾有昆虫，不能仅凭一个孔认定物种。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物与口器",
      "body": "幼虫在豆类种子内部取食，通常在同一粒种子内完成生长并化蛹。成虫寿命较短，FAO介绍的储粮生活史不把成虫取食当作必需环节；不能把幼虫食物直接套到所有成虫身上。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "从卵到成虫",
      "body": "雌虫把卵牢固粘在豆粒外表面。幼虫孵化后直接钻入种子，在内部生长，靠近种皮形成化蛹位置。成虫羽化后咬开圆形出口离开，外表完整的豆粒也可能已有早期虫害。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "本档案采用 GBIF 的 Callosobruchus chinensis，归入鞘翅目、叶甲科、瘤背豆象属。部分农业资料仍把豆象类单列为豆象科，本图谱使用 GBIF 的叶甲科归属，不混用两条科级路径。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：它有长吻吗，鞘翅有没有遮住腹端？观察任务：用照片比较豆粒表面的卵与成虫出口。储粮检查交给成人，不把虫豆带进种子交换或饲养活动。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Callosobruchus chinensis 的名称记录",
      "body": "Linnaeus 在 1758 年以 Bruchus chinensis 发表该种，今天采用 Callosobruchus chinensis 组合。绿豆象的中文名来自常见受害豆类，但它并不只利用绿豆。"
    }
  ],
  "keyFacts": [
    "绿豆象是体形短小的豆象类甲虫，鞘翅较短，腹部末端可露出。体表毛与斑纹让它呈浅深相间的褐色；雄虫触角较呈梳状，雌虫较接近锯齿状。它没有米象明显的长吻。",
    "幼虫在豆类种子内部取食，通常在同一粒种子内完成生长并化蛹。成虫寿命较短，FAO介绍的储粮生活史不把成虫取食当作必需环节；不能把幼虫食物直接套到所有成虫身上。",
    "雌虫把卵牢固粘在豆粒外表面。幼虫孵化后直接钻入种子，在内部生长，靠近种皮形成化蛹位置。成虫羽化后咬开圆形出口离开，外表完整的豆粒也可能已有早期虫害。"
  ],
  "threats": [
    "局部生活环境变化；所引资料未量化全球种群趋势"
  ],
  "conservationActions": [
    "辨认问题：它有长吻吗，鞘翅有没有遮住腹端？观察任务：用照片比较豆粒表面的卵与成虫出口。储粮检查交给成人，不把虫豆带进种子交换或饲养活动。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "豆类种子与储藏环境"
    },
    {
      "key": "food",
      "label": "食物观察",
      "value": "幼虫取食的绿豆、赤豆等豆类种子"
    }
  ],
  "media": {
    "image": "./images/species/adzuki-bean-beetle/01-cover.webp",
    "alt": "绿豆象及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/adzuki-bean-beetle/02-observation.webp",
        "title": "短鞘翅与斑纹",
        "alt": "绿豆象：短鞘翅与斑纹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。豆象类前翅硬化成鞘翅，末端未必完全覆盖腹部。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/adzuki-bean-beetle/03-observation.webp",
        "title": "触角与露出的腹端",
        "alt": "绿豆象：触角与露出的腹端，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。图示雌型锯齿状触角，雄虫触角可更加梳状。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/adzuki-bean-beetle/04-observation.webp",
        "title": "粘在豆粒上的卵",
        "alt": "绿豆象：粘在豆粒上的卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼虫孵化后可穿过卵底进入种子，卵很小，图中为放大情景。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/adzuki-bean-beetle/05-observation.webp",
        "title": "种皮上的圆形出口",
        "alt": "绿豆象：种皮上的圆形出口，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。圆孔可能由储粮昆虫羽化形成，仅靠孔形不能鉴种。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/adzuki-bean-beetle/06-observation.webp",
        "title": "储藏豆粒间的成虫",
        "alt": "绿豆象：储藏豆粒间的成虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。受害豆粒可能夹带不同阶段，运输和储存前由成人检查。 同图不同阶段作发育对照，比例仅作示意。",
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
      "url": "https://www.gbif.org/species/1047341",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "FAO：Callosobruchus chinensis 形态及生活史",
      "url": "https://www.fao.org/4/x5048e/x5048E0a.htm",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "EPPO：绿豆象名称与异名",
      "url": "https://gd.eppo.int/taxon/CALSCH",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球名录：本批检索记录",
      "url": "https://api.gbif.org/v1/species/search?datasetKey=19491596-35ae-4a91-9a98-85cf505f1bd3&q=Callosobruchus%20chinensis&limit=50",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
