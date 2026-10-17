import type { Species } from '../../types/species.ts';

const profile = {
  "id": "chinese-softshell-turtle",
  "slug": "chinese-softshell-turtle",
  "names": {
    "zh": "中华鳖",
    "en": "Chinese Softshell Turtle",
    "aliases": [
      "甲鱼",
      "团鱼",
      "Trionyx sinensis"
    ]
  },
  "scientificName": "Pelodiscus sinensis",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Chordata",
      "zhName": "脊索动物门"
    },
    "class": {
      "scientificName": "Reptilia",
      "zhName": "爬行纲"
    },
    "order": {
      "scientificName": "Testudines",
      "zhName": "龟鳖目"
    },
    "family": {
      "scientificName": "Trionychidae",
      "zhName": "鳖科"
    },
    "genus": {
      "scientificName": "Pelodiscus",
      "zhName": "鳖属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "VU",
    "label": {
      "zh": "易危",
      "en": "Vulnerable"
    },
    "trend": "unknown",
    "assessor": "采用 IUCN 所列 2000 年全球易危评估，2016 年勘误不作为新的评估日期。这是历史评估；鳖属后续拆分改变物种范围，未据养殖数量推断野生趋势。",
    "assessedYear": 2000
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "中国淡水水域及引入地区"
    ],
    "countries": [],
    "range": "现用分类下主要见于中国的淡水水域，其他地区也有引入和养殖记录。较早资料把部分现已独立的近缘种算在中华鳖内，不能直接照搬旧的东亚全范围。地图坐标是代表点，市场地点和养殖地点另行理解。",
    "center": {
      "lat": 30.7,
      "lng": 114.4
    }
  },
  "habitats": [
    {
      "name": "河湖缓流、沙泥底与相连岸边",
      "realm": "freshwater",
      "description": "它主要在水中生活，常贴近沙泥底活动或把身体埋入底质，也会上岸晒背。伸长的颈和吻端有助于它靠近水面呼吸。图中露出头颈的姿势只展示外形；连续影像才能记录它怎样出水换气。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "水生无脊椎动物",
      "小鱼",
      "部分植物材料"
    ],
    "description": "中华鳖主要取食动物性食物，包括水生无脊椎动物和小鱼等，也可摄入植物材料。它会在水底寻找食物。养殖池的配合饲料由人工提供，市场售卖的个体也不能代表某条河里的天然食谱。"
  },
  "tags": [
    "中华鳖",
    "爬行纲",
    "软甲、管状吻端与蹼足"
  ],
  "summary": "中华鳖有扁平的软甲和管状吻端，常藏身沙泥底，雌鳖会上岸产卵。",
  "description": "中华鳖的背甲扁平，表面覆盖柔软的皮肤，边缘可以弯曲，看不到草龟那样整齐的角质盾片。头小、颈长，吻端的鼻孔伸成短管状；四足有蹼，帮助它在水中划动。观察软甲和吻端，就能与硬壳的龟作比较。它主要在水中生活，常贴近沙泥底活动或把身体埋入底质，也会上岸晒背。伸长的颈和吻端有助于它靠近水面呼吸。图中露出头颈的姿势只展示外形；连续影像才能记录它怎样出水换气。中华鳖主要取食动物性食物，包括水生无脊椎动物和小鱼等，也可摄入植物材料。它会在水底寻找食物。养殖池的配合饲料由人工提供，市场售卖的个体也不能代表某条河里的天然食谱。雌鳖到岸上挖巢产卵，卵在陆地的巢中发育，幼鳖孵出后进入水中生活。生活史同时需要水域和可产卵的岸边。幼鳖的身体比例和花纹会与成体不同，图库中的幼体单独重建，不记录同一个体的成长。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "找一找身体的特点",
      "body": "中华鳖的背甲扁平，表面覆盖柔软的皮肤，边缘可以弯曲，看不到草龟那样整齐的角质盾片。头小、颈长，吻端的鼻孔伸成短管状；四足有蹼，帮助它在水中划动。观察软甲和吻端，就能与硬壳的龟作比较。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "生活环境与活动",
      "body": "它主要在水中生活，常贴近沙泥底活动或把身体埋入底质，也会上岸晒背。伸长的颈和吻端有助于它靠近水面呼吸。图中露出头颈的姿势只展示外形；连续影像才能记录它怎样出水换气。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它会吃什么",
      "body": "中华鳖主要取食动物性食物，包括水生无脊椎动物和小鱼等，也可摄入植物材料。它会在水底寻找食物。养殖池的配合饲料由人工提供，市场售卖的个体也不能代表某条河里的天然食谱。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从卵到幼体",
      "body": "雌鳖到岸上挖巢产卵，卵在陆地的巢中发育，幼鳖孵出后进入水中生活。生活史同时需要水域和可产卵的岸边。幼鳖的身体比例和花纹会与成体不同，图库中的幼体单独重建，不记录同一个体的成长。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案指 Pelodiscus sinensis。过去的广义中华鳖还包含如今分开的近缘种，旧资料的分布范围需要结合年代阅读。“甲鱼”是俗称，市场和养殖来源可能包含近缘种或杂交个体，仅凭生成图不能精确鉴定。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：中华鳖的背甲与草龟的背甲有什么不同？观察任务：看完整外形图找软甲边缘和吻端，再比较草龟；观察野生个体时留在岸边。野生捕捉和栖息地改变会影响龟类，饲养常见不能代替野外调查。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "中华鳖的名称与记录",
      "body": "Wiegmann 发表的 Trionyx sinensis 后来改为现用组合 Pelodiscus sinensis。GBIF 与 Reptile Database 常列 1835 年，龟类分类工作组清单列 1834 年；这里保留这项年代差异，学名采用共同接受的二名，不把旧组合另计一种动物。"
    }
  ],
  "keyFacts": [
    "中华鳖的背甲扁平，表面覆盖柔软的皮肤，边缘可以弯曲，看不到草龟那样整齐的角质盾片。头小、颈长，吻端的鼻孔伸成短管状；四足有蹼，帮助它在水中划动。观察软甲和吻端，就能与硬壳的龟作比较。",
    "中华鳖主要取食动物性食物，包括水生无脊椎动物和小鱼等，也可摄入植物材料。它会在水底寻找食物。养殖池的配合饲料由人工提供，市场售卖的个体也不能代表某条河里的天然食谱。",
    "雌鳖到岸上挖巢产卵，卵在陆地的巢中发育，幼鳖孵出后进入水中生活。生活史同时需要水域和可产卵的岸边。幼鳖的身体比例和花纹会与成体不同，图库中的幼体单独重建，不记录同一个体的成长。"
  ],
  "threats": [
    "野生捕捉与贸易",
    "水域和岸边环境改变"
  ],
  "conservationActions": [
    "保护原生栖息环境，观察时保持距离，不带走野生动物或自行放生。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "河湖缓流、沙泥底与相连岸边"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "软甲、管状吻端与蹼足"
    }
  ],
  "media": {
    "image": "./images/species/chinese-softshell-turtle/01-cover.webp",
    "alt": "中华鳖完整外形与自然环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/chinese-softshell-turtle/02-observation.webp",
        "title": "沙岸上的完整外形",
        "alt": "中华鳖：沙岸上的完整外形，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。沙岸上的完整外形；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-softshell-turtle/03-observation.webp",
        "title": "水面附近的管状吻端",
        "alt": "中华鳖：水面附近的管状吻端，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水面附近的管状吻端；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-softshell-turtle/04-observation.webp",
        "title": "沙底上方的蹼足",
        "alt": "中华鳖：沙底上方的蹼足，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。沙底上方的蹼足；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-softshell-turtle/05-observation.webp",
        "title": "湿沙边的幼鳖",
        "alt": "中华鳖：湿沙边的幼鳖，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。湿沙边的幼鳖；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。幼体位于前景，成体同时入画；两者大小仅作阶段对照，非实测比例，也不表示亲子关系或护幼行为。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/chinese-softshell-turtle/06-observation.webp",
        "title": "河岸与沙泥底环境",
        "alt": "中华鳖：河岸与沙泥底环境，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成鳖停在河岸与浅水交界处，此图未展示埋入沙泥的过程，生成细节不用于精确鉴种。",
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
      "title": "GBIF：接受名称与原始匹配响应",
      "url": "https://www.gbif.org/species/5220435",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN：2000 全球评估及 2016 勘误",
      "url": "https://doi.org/10.2305/IUCN.UK.2000.RLTS.T39620A10251914.en",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "FAO：软甲、生活环境、食物与陆地产卵",
      "url": "https://www.fao.org/fishery/culturedspecies/trionyx_sinensis__en/en",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2025 黄河湿地原始研究：越冬环境与野生压力",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11739605/",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "Reptile Database：名称、异名与分类范围",
      "url": "https://reptile-database.reptarium.cz/Pelodiscus/sinensis",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "龟类分类工作组 2025 清单：命名年代与近缘种",
      "url": "https://iucn-tftsg.org/wp-content/uploads/crm.10.checklist.atlas_.v10.2025.pdf",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球等级对照",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/39620",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
