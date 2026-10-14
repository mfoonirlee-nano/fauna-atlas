import type { Species } from '../../types/species.ts';

const profile = {
  "id": "migratory-locust",
  "slug": "migratory-locust",
  "names": {
    "zh": "飞蝗",
    "en": "Migratory Locust"
  },
  "scientificName": "Locusta migratoria",
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
      "scientificName": "Orthoptera",
      "zhName": "直翅目"
    },
    "family": {
      "scientificName": "Acrididae",
      "zhName": "蝗科"
    },
    "genus": {
      "scientificName": "Locusta",
      "zhName": "飞蝗属"
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
    "assessor": "采用项目 NE 占位口径：本批未确认可引用的全球物种级 IUCN 评估；欧洲红色名录的 LC 属于地区等级，不换算成全球 LC。农业害虫身份也不能代替保护等级。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲",
      "欧洲",
      "非洲",
      "大洋洲"
    ],
    "regions": [
      "草地、农田与湿地边缘"
    ],
    "countries": [],
    "range": "分布于非洲、欧洲、亚洲及大洋洲的许多地区，不同亚种和种群所用环境各异。中亚资料记录河湖岸边芦苇地等繁殖环境，不能把该地区一年一代的规律直接套用于中国各地。",
    "center": {
      "lat": 34.5,
      "lng": 116.0
    }
  },
  "habitats": [
    {
      "name": "草地、农田与湿地边缘",
      "realm": "terrestrial",
      "description": "分布于非洲、欧洲、亚洲及大洋洲的许多地区，不同亚种和种群所用环境各异。中亚资料记录河湖岸边芦苇地等繁殖环境，不能把该地区一年一代的规律直接套用于中国各地。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "禾草",
      "其他草本植物",
      "农作物"
    ],
    "description": "飞蝗取食禾草等植物，群聚种群可损害农作物。自然观察说明取食和身体结构，农田监测与治理需由相关人员处理，不为观察培养或放生飞蝗。"
  },
  "tags": [
    "飞蝗",
    "草地、农田与湿地边缘"
  ],
  "summary": "飞蝗用粗壮后腿跳跃，成虫有翅，若虫没有成熟的翅；高密度条件下可发生群聚变化。",
  "description": "飞蝗属于短角的蝗虫，触角通常短于身体，后腿的股节粗壮，成虫前翅较长。体色会随个体、环境和群聚状态变化，不能凭绿色或褐色就判断物种或是否形成蝗灾。飞蝗能用后腿跳跃，成虫也能飞行。密度增大且条件适合时，种群可逐渐从散居行为转为群聚，若虫形成蝗蝻群、成虫形成蝗群；几只站在一起的飞蝗不能单独证明发生了这一变化。雌虫把卵产在土中，孵出的若虫称蝗蝻。若虫经过多次蜕皮长大，最后成为有成熟翅的成虫，属于不完全变态，没有蝴蝶那样的蛹期。发育时间与代数依地区和温度变化。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形辨认",
      "body": "飞蝗属于短角的蝗虫，触角通常短于身体，后腿的股节粗壮，成虫前翅较长。体色会随个体、环境和群聚状态变化，不能凭绿色或褐色就判断物种或是否形成蝗灾。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "飞蝗能用后腿跳跃，成虫也能飞行。密度增大且条件适合时，种群可逐渐从散居行为转为群聚，若虫形成蝗蝻群、成虫形成蝗群；几只站在一起的飞蝗不能单独证明发生了这一变化。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "飞蝗取食禾草等植物，群聚种群可损害农作物。自然观察说明取食和身体结构，农田监测与治理需由相关人员处理，不为观察培养或放生飞蝗。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从幼体到成体",
      "body": "雌虫把卵产在土中，孵出的若虫称蝗蝻。若虫经过多次蜕皮长大，最后成为有成熟翅的成虫，属于不完全变态，没有蝴蝶那样的蛹期。发育时间与代数依地区和温度变化。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的范围",
      "body": "飞蝗指 Locusta migratoria，属于直翅目蝗科飞蝗属。不同地理种群的亚种名称不另计新物种；它与沙漠蝗 Schistocerca gregaria 分别记录，不能互换蝗灾分布和具体数据。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：若虫有成虫那样完整的翅吗？观察任务：在草地道路上比较触角与后腿，记录有翅或翅芽阶段；不捕捉、不饲养、不放生。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "飞蝗的学名与记录",
      "body": "林奈在 1758 年发表本种的科学名称，如今使用 Locusta migratoria，作者名带括号。英文 Migratory Locust 和中文飞蝗联系到成虫迁飞能力，但一个个体在草上停留不表示它正在迁徙，更不能据此判断蝗灾。"
    }
  ],
  "keyFacts": [
    "飞蝗属于短角的蝗虫，触角通常短于身体，后腿的股节粗壮，成虫前翅较长。体色会随个体、环境和群聚状态变化，不能凭绿色或褐色就判断物种或是否形成蝗灾。",
    "飞蝗取食禾草等植物，群聚种群可损害农作物。自然观察说明取食和身体结构，农田监测与治理需由相关人员处理，不为观察培养或放生飞蝗。",
    "雌虫把卵产在土中，孵出的若虫称蝗蝻。若虫经过多次蜕皮长大，最后成为有成熟翅的成虫，属于不完全变态，没有蝴蝶那样的蛹期。发育时间与代数依地区和温度变化。"
  ],
  "threats": [
    "栖息地改变",
    "人为干扰"
  ],
  "conservationActions": [
    "按场所规则在原处观察，为动物保留取食、休息和繁殖空间。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "草地、农田与湿地边缘"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "粗壮的后腿"
    }
  ],
  "media": {
    "image": "./images/species/migratory-locust/01-cover.webp",
    "alt": "飞蝗及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/migratory-locust/02-observation.webp",
        "title": "粗壮的后腿",
        "alt": "飞蝗：粗壮的后腿，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。比较后腿与前腿，静图不能测量跳跃距离。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/migratory-locust/03-observation.webp",
        "title": "没有成熟翅的若虫",
        "alt": "飞蝗：没有成熟翅的若虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。若虫放大重建，非实测比例；与成虫体色可能不同。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/migratory-locust/04-observation.webp",
        "title": "植物上的取食",
        "alt": "飞蝗：植物上的取食，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。取食草叶情景，不作为实测摄食量证据。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/migratory-locust/05-observation.webp",
        "title": "成虫展开翅膀",
        "alt": "飞蝗：成虫展开翅膀，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。飞行姿势重建，静图不能证明速度或迁飞距离。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/migratory-locust/06-observation.webp",
        "title": "几只成虫在草上",
        "alt": "飞蝗：几只成虫在草上，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。少量个体的重建，不表示群聚相或蝗灾。",
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
      "url": "https://www.gbif.org/species/1713418",
      "kind": "taxonomy",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "FAO：蝗虫生活史与群聚变化",
      "url": "https://www.fao.org/locusts-cca/bioecology/what-are-locusts/en/",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "FAO：中亚飞蝗环境与范围",
      "url": "https://www.fao.org/locusts-cca/bioecology/en",
      "kind": "distribution",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "澳大利亚 DAFF：飛蝗辨认、生活史与分布",
      "url": "https://www.agriculture.gov.au/pests-diseases-weeds/locusts/about/migratory",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-14",
  "updatedAt": "2026-10-14"
} as const satisfies Species;

export default profile;
