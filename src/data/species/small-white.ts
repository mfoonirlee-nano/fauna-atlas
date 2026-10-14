import type { Species } from '../../types/species.ts';

const profile = {
  "id": "small-white",
  "slug": "small-white",
  "names": {
    "zh": "菜粉蝶",
    "en": "Small White",
    "aliases": [
      "菜白蝶"
    ]
  },
  "scientificName": "Pieris rapae",
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
    "code": "NE",
    "label": {
      "zh": "未评估",
      "en": "Not Evaluated"
    },
    "trend": "unknown",
    "assessor": "采用项目 NE 占位口径：本批未确认可引用的全球物种级评估；欧洲与意大利的地区 LC 不换算成全球等级，ADW 的 No special status 也不等同于 IUCN LC。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲",
      "欧洲",
      "北美洲"
    ],
    "regions": [
      "菜园、花坛与开阔地"
    ],
    "countries": [],
    "range": "广布于欧洲和亚洲，并随人类活动扩展至北美等地。有十字花科寄主植物和花源的菜园、花坛常能见到，活动季节与一年中的代数随地区变化。",
    "center": {
      "lat": 31.2,
      "lng": 121.4
    }
  },
  "habitats": [
    {
      "name": "菜园、花坛与开阔地",
      "realm": "terrestrial",
      "description": "广布于欧洲和亚洲，并随人类活动扩展至北美等地。有十字花科寄主植物和花源的菜园、花坛常能见到，活动季节与一年中的代数随地区变化。",
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
      "十字花科植物叶片",
      "花蜜"
    ],
    "description": "绿色幼虫用咀嚼式口器吃甘蓝等十字花科植物叶片，成蝶用卷起的长口器吸食花蜜。幼虫与成虫吃的食物不同，菜叶上的孔洞也可能由其他昆虫造成。"
  },
  "tags": [
    "菜粉蝶",
    "菜园、花坛与开阔地"
  ],
  "summary": "菜粉蝶的绿色幼虫吃菜叶，白色成蝶访花吸蜜，一生经历卵、幼虫、蛹和成虫。",
  "description": "成蝶翅膀以白色为主，前翅尖端有深色区域。雌蝶前翅上表面通常有两枚黑点，雄蝶通常一枚；后翅下表面偏淡黄色。大白粉蝶等近缘种也有白翅，需要比较端斑和其他特征。成蝶白天在菜园和花坛飞行、停栖访花。雌蝶常把卵单独产在寄主叶片上，大白粉蝶则常成簇产卵；产卵方式是比较线索，不能仅凭一枚卵确定种名。菜粉蝶经历卵、幼虫、蛹和成虫四个阶段，属于完全变态。幼虫经过蜕皮长大，成熟后化蛹，丝带将蛹固定在枝茎等支撑物上。蝶从蛹中羽化，不是给幼虫直接添上一对翅膀。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形辨认",
      "body": "成蝶翅膀以白色为主，前翅尖端有深色区域。雌蝶前翅上表面通常有两枚黑点，雄蝶通常一枚；后翅下表面偏淡黄色。大白粉蝶等近缘种也有白翅，需要比较端斑和其他特征。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "成蝶白天在菜园和花坛飞行、停栖访花。雌蝶常把卵单独产在寄主叶片上，大白粉蝶则常成簇产卵；产卵方式是比较线索，不能仅凭一枚卵确定种名。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "绿色幼虫用咀嚼式口器吃甘蓝等十字花科植物叶片，成蝶用卷起的长口器吸食花蜜。幼虫与成虫吃的食物不同，菜叶上的孔洞也可能由其他昆虫造成。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从幼体到成体",
      "body": "菜粉蝶经历卵、幼虫、蛹和成虫四个阶段，属于完全变态。幼虫经过蜕皮长大，成熟后化蛹，丝带将蛹固定在枝茎等支撑物上。蝶从蛹中羽化，不是给幼虫直接添上一对翅膀。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的范围",
      "body": "菜粉蝶指 Pieris rapae，属于粉蝶科粉蝶属。已经收录的大白粉蝶 Pieris brassicae 是另一物种，两者的卵、幼虫和翅纹不能混用。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：幼虫和成蝶吃一样的东西吗？观察任务：从菜园道路上观察叶片与花，记录看到的生活阶段，比较成蝶两侧前翅的黑点；不采集卵、蛹或幼虫。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "菜粉蝶的学名与记录",
      "body": "林奈在 1758 年发表本种的科学名称，GBIF 目前采用 Pieris rapae，作者名带括号。菜粉蝶的中文名联系到菜园观察场景，英文 Small White 提示白色翅膀；名字不能代替比较近缘种的翅纹。"
    }
  ],
  "keyFacts": [
    "成蝶翅膀以白色为主，前翅尖端有深色区域。雌蝶前翅上表面通常有两枚黑点，雄蝶通常一枚；后翅下表面偏淡黄色。大白粉蝶等近缘种也有白翅，需要比较端斑和其他特征。",
    "绿色幼虫用咀嚼式口器吃甘蓝等十字花科植物叶片，成蝶用卷起的长口器吸食花蜜。幼虫与成虫吃的食物不同，菜叶上的孔洞也可能由其他昆虫造成。",
    "菜粉蝶经历卵、幼虫、蛹和成虫四个阶段，属于完全变态。幼虫经过蜕皮长大，成熟后化蛹，丝带将蛹固定在枝茎等支撑物上。蝶从蛹中羽化，不是给幼虫直接添上一对翅膀。"
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
      "value": "菜园、花坛与开阔地"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "闭翅访花"
    }
  ],
  "media": {
    "image": "./images/species/small-white/01-cover.webp",
    "alt": "菜粉蝶及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/small-white/02-observation.webp",
        "title": "闭翅访花",
        "alt": "菜粉蝶：闭翅访花，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示后翅下表面与访花情景，动作需连续观察。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/small-white/03-observation.webp",
        "title": "叶片上的一枚卵",
        "alt": "菜粉蝶：叶片上的一枚卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。单枚卵的放大重建，非实测比例；卵的颜色随发育变化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/small-white/04-observation.webp",
        "title": "吃菜叶的绿色幼虫",
        "alt": "菜粉蝶：吃菜叶的绿色幼虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼虫带细毛与浅色背线，图像非实测比例。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/small-white/05-observation.webp",
        "title": "丝带固定的蛹",
        "alt": "菜粉蝶：丝带固定的蛹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。蛹期放大重建，非实测比例；不移动或剥开蛹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/small-white/06-observation.webp",
        "title": "雌蝶的前翅黑点",
        "alt": "菜粉蝶：雌蝶的前翅黑点，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示雌蝶上表面，黑点数量与清晰度会随个体、季节和视角变化。",
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
      "url": "https://www.gbif.org/species/1920496",
      "kind": "taxonomy",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "UC IPM：菜粉蝶生活史",
      "url": "https://ipm.ucanr.edu/agriculture/cole-crops/imported-cabbageworm/",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "UF/IFAS：菜粉蝶各阶段",
      "url": "https://entnemdept.ufl.edu/creatures/veg/leaf/imported_cabbageworm.htm",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "Butterfly Conservation：翅纹辨认",
      "url": "https://butterfly-conservation.org/sites/default/files/2024-04/Highland%20Butterfly%20Atlas%202022%20Online.pdf",
      "kind": "general",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "菜粉蝶全球扩散研究",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6778179/",
      "kind": "distribution",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "ADW：菜粉蝶分布与生活史",
      "url": "https://animaldiversity.org/accounts/Pieris_rapae/",
      "kind": "distribution",
      "accessedAt": "2026-10-14"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-14",
  "updatedAt": "2026-10-14"
} as const satisfies Species;

export default profile;
