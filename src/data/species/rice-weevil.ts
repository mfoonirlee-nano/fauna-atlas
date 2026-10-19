import type { Species } from '../../types/species.ts';

const profile = {
  "id": "rice-weevil",
  "slug": "rice-weevil",
  "names": {
    "zh": "米象",
    "en": "Rice Weevil"
  },
  "scientificName": "Sitophilus oryzae",
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
      "scientificName": "Dryophthoridae",
      "zhName": "锥象科"
    },
    "genus": {
      "scientificName": "Sitophilus",
      "zhName": "谷象属"
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
      "世界多地的储粮环境"
    ],
    "countries": [],
    "range": "世界多地的储粮环境。米象能飞，可随储藏谷物运输到不同地区。它在适合的温湿条件下繁殖，外部看到的成虫只是生活史的一部分；代表点标记一种储粮环境位置，不表示自然起源地。地图代表点不表达完整范围，也不是野外观察记录。",
    "center": {
      "lat": 30,
      "lng": 110
    }
  },
  "habitats": [
    {
      "name": "储藏谷物与粮仓环境",
      "realm": "terrestrial",
      "description": "米象能飞，可随储藏谷物运输到不同地区。它在适合的温湿条件下繁殖，外部看到的成虫只是生活史的一部分；代表点标记一种储粮环境位置，不表示自然起源地。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "稻米",
      "小麦",
      "玉米等完整谷粒"
    ],
    "description": "米象及近似谷象的幼虫在完整谷粒或种子内部取食，成虫也会损害储粮。谷粒内部的发育阶段不容易从表面发现，不能把筛出成虫当成已经确认没有幼虫。"
  },
  "tags": [
    "米象",
    "储藏谷物与粮仓环境"
  ],
  "summary": "米象有向前伸的长吻，鞘翅上常见四块较浅的斑。幼虫在谷粒内部生长，成虫离开时留下小圆孔。",
  "description": "米象体色棕褐，头部向前延伸成长吻，触角在吻部弯折。鞘翅上可见四块较浅的红黄斑。它与玉米象外观相近，不能仅凭“米里有虫”或斑点数就完成物种鉴定。本档案采用 GBIF 的 Sitophilus oryzae，归入鞘翅目、锥象科、谷象属。部分资料把这一群并入象甲科下的亚科，本图谱保持 GBIF 科级路径；米象与玉米象分别属于不同物种。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "米象体色棕褐，头部向前延伸成长吻，触角在吻部弯折。鞘翅上可见四块较浅的红黄斑。它与玉米象外观相近，不能仅凭“米里有虫”或斑点数就完成物种鉴定。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "米象能飞，可随储藏谷物运输到不同地区。它在适合的温湿条件下繁殖，外部看到的成虫只是生活史的一部分；代表点标记一种储粮环境位置，不表示自然起源地。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物与口器",
      "body": "米象及近似谷象的幼虫在完整谷粒或种子内部取食，成虫也会损害储粮。谷粒内部的发育阶段不容易从表面发现，不能把筛出成虫当成已经确认没有幼虫。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "从卵到成虫",
      "body": "雌虫在谷粒内产卵，幼虫留在内部生长、化蛹。成虫羽化后穿出种皮，留下小而圆的出口。本种经历完全变态；图片没有剖开谷粒时，不声称能看见里面的幼虫。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "本档案采用 GBIF 的 Sitophilus oryzae，归入鞘翅目、锥象科、谷象属。部分资料把这一群并入象甲科下的亚科，本图谱保持 GBIF 科级路径；米象与玉米象分别属于不同物种。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：吻部和触角长在哪里，豆象也有同样的长吻吗？观察任务：在储粮照片中寻找出孔谷粒。发现虫害由成人检查密封与清洁，不向食物或儿童观察容器喷药。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Sitophilus oryzae 的名称记录",
      "body": "ITIS 与农业资料沿用 Sitophilus oryzae (Linnaeus, 1763)，原始组合为 Curculio oryza。当前 GBIF 匹配记录显示 A. Hustache, 1930，与这些来源不一致；本档案保留双名并明确差异，不把 1930 年写成已核实的首次描述年份。"
    }
  ],
  "keyFacts": [
    "米象体色棕褐，头部向前延伸成长吻，触角在吻部弯折。鞘翅上可见四块较浅的红黄斑。它与玉米象外观相近，不能仅凭“米里有虫”或斑点数就完成物种鉴定。",
    "米象及近似谷象的幼虫在完整谷粒或种子内部取食，成虫也会损害储粮。谷粒内部的发育阶段不容易从表面发现，不能把筛出成虫当成已经确认没有幼虫。",
    "雌虫在谷粒内产卵，幼虫留在内部生长、化蛹。成虫羽化后穿出种皮，留下小而圆的出口。本种经历完全变态；图片没有剖开谷粒时，不声称能看见里面的幼虫。"
  ],
  "threats": [
    "局部生活环境变化；所引资料未量化全球种群趋势"
  ],
  "conservationActions": [
    "辨认问题：吻部和触角长在哪里，豆象也有同样的长吻吗？观察任务：在储粮照片中寻找出孔谷粒。发现虫害由成人检查密封与清洁，不向食物或儿童观察容器喷药。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "储藏谷物与粮仓环境"
    },
    {
      "key": "food",
      "label": "食物观察",
      "value": "稻米、小麦"
    }
  ],
  "media": {
    "image": "./images/species/rice-weevil/01-cover.webp",
    "alt": "米象及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/rice-weevil/02-observation.webp",
        "title": "长吻与弯折触角",
        "alt": "米象：长吻与弯折触角，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。长吻是观察重点，谷象属的近似种仍需更多鉴别结构。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rice-weevil/03-observation.webp",
        "title": "鞘翅上的四块浅斑",
        "alt": "米象：鞘翅上的四块浅斑，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。斑色受个体和光线影响，不能只凭四个斑鉴种。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rice-weevil/04-observation.webp",
        "title": "谷粒上的出口",
        "alt": "米象：谷粒上的出口，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼虫在粒内生长，成虫可从小圆孔离开。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rice-weevil/05-observation.webp",
        "title": "完整谷粒间活动",
        "alt": "米象：完整谷粒间活动，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。完整外观不能排除谷粒内部已有虫体，检查交由成人。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rice-weevil/06-observation.webp",
        "title": "谷粒上的足与长吻",
        "alt": "米象：谷粒上的足与长吻，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。米象能够利用多种谷物，图中以稻米作情景示意。 同图不同阶段作发育对照，比例仅作示意。",
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
      "url": "https://www.gbif.org/species/9915023",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "马里兰大学推广：米象与谷象",
      "url": "https://extension.umd.edu/resource/rice-and-granary-weevils",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "明尼苏达大学推广：储粮昆虫",
      "url": "https://extension.umn.edu/garden-and-home/home-maintenance/household-insects/pantry-pests-insects-found-in-stored-food",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "ITIS：米象学名与原始组合",
      "url": "https://www.gbif.org/dataset/9ca92552-f23a-41a8-a140-01abaa31c931/taxon/188080",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球名录：本批检索记录",
      "url": "https://api.gbif.org/v1/species/search?datasetKey=19491596-35ae-4a91-9a98-85cf505f1bd3&q=Sitophilus%20oryzae&limit=50",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
