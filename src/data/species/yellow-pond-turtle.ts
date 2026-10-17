import type { Species } from '../../types/species.ts';

const profile = {
  "id": "yellow-pond-turtle",
  "slug": "yellow-pond-turtle",
  "names": {
    "zh": "黄喉拟水龟",
    "en": "Yellow Pond Turtle",
    "aliases": [
      "石金钱龟"
    ]
  },
  "scientificName": "Mauremys mutica",
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
      "scientificName": "Geoemydidae",
      "zhName": "地龟科"
    },
    "genus": {
      "scientificName": "Mauremys",
      "zhName": "拟水龟属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "CR",
    "label": {
      "zh": "极危",
      "en": "Critically Endangered"
    },
    "trend": "decreasing",
    "assessor": "采用 IUCN 2021 全球极危条目；CITES 动物委员会资料注明 2018 评估及下降趋势，2021 为发表年。野生捕捉与栖息地变化仍需关注。",
    "assessedYear": 2018
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
      "中国南部、越南与部分东亚岛屿"
    ],
    "countries": [],
    "range": "本种分布涉及中国南部、台湾、越南以及日本琉球部分岛屿；部分地区的原生或引入背景需结合分类和当地研究判断。地图使用中国南部代表点，饲养和贸易地点不直接当作野生分布记录。",
    "center": {
      "lat": 23.7,
      "lng": 112.5
    }
  },
  "habitats": [
    {
      "name": "低海拔池塘、溪流与相连林地",
      "realm": "freshwater",
      "description": "它利用低海拔的池塘、沼泽和缓流溪沟，也会到水边陆地活动、晒背。水中与岸上的空间共同组成它的环境。观察时可记录足怎样接触石头或划水，静止图不记录一次完整的上岸过程。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "水生植物",
      "水生无脊椎动物",
      "其他动物性食物"
    ],
    "description": "黄喉拟水龟取食植物和动物性材料，包括水生植物及无脊椎动物等，属于杂食龟。天然食物会随地点和生活阶段变化。研究中的人工饲料和温度试验用于解释特定条件下的生长，不能代替野外食性记录。"
  },
  "tags": [
    "黄喉拟水龟",
    "爬行纲",
    "黄色喉部与眼后浅色带"
  ],
  "summary": "黄喉拟水龟常有黄色喉部和眼后浅色带，在水陆之间活动，野生种群已列为极危。",
  "description": "黄喉拟水龟常有棕褐色椭圆背甲，喉部带黄色，眼后可见向颈部延伸的浅黄色带。头颈颜色和条带深浅随地区及个体变化。先找喉部和眼后带，再与花龟的多条细纹比较，不能只凭壳的颜色判断物种。它利用低海拔的池塘、沼泽和缓流溪沟，也会到水边陆地活动、晒背。水中与岸上的空间共同组成它的环境。观察时可记录足怎样接触石头或划水，静止图不记录一次完整的上岸过程。黄喉拟水龟取食植物和动物性材料，包括水生植物及无脊椎动物等，属于杂食龟。天然食物会随地点和生活阶段变化。研究中的人工饲料和温度试验用于解释特定条件下的生长，不能代替野外食性记录。雌龟在陆地产卵，幼龟从卵中孵出。研究者比较过不同孵化温度下幼龟的生长和取食，也研究过母体大小与产卵数量的关系。这些结果各有实验条件，图片中的体型不足以推算准确年龄或孵化温度。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "找一找身体的特点",
      "body": "黄喉拟水龟常有棕褐色椭圆背甲，喉部带黄色，眼后可见向颈部延伸的浅黄色带。头颈颜色和条带深浅随地区及个体变化。先找喉部和眼后带，再与花龟的多条细纹比较，不能只凭壳的颜色判断物种。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "生活环境与活动",
      "body": "它利用低海拔的池塘、沼泽和缓流溪沟，也会到水边陆地活动、晒背。水中与岸上的空间共同组成它的环境。观察时可记录足怎样接触石头或划水，静止图不记录一次完整的上岸过程。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它会吃什么",
      "body": "黄喉拟水龟取食植物和动物性材料，包括水生植物及无脊椎动物等，属于杂食龟。天然食物会随地点和生活阶段变化。研究中的人工饲料和温度试验用于解释特定条件下的生长，不能代替野外食性记录。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从卵到幼体",
      "body": "雌龟在陆地产卵，幼龟从卵中孵出。研究者比较过不同孵化温度下幼龟的生长和取食，也研究过母体大小与产卵数量的关系。这些结果各有实验条件，图片中的体型不足以推算准确年龄或孵化温度。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案指 Mauremys mutica，使用拟水龟属的分类。它与草龟、中华花龟分别成种。“石金钱龟”等俗称也用于饲养和贸易场景，名称相同不保证来源相同，杂交个体仍需专业鉴定。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：黄喉拟水龟与花龟的颈纹有什么不同？观察任务：在展示影像中找黄色喉部和眼后带，再观察它在水里与岸上足的姿态。野生捕捉和栖息地改变会影响龟类，饲养常见不能代替野外调查。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "黄喉拟水龟的名称与记录",
      "body": "Cantor 于 1842 年以 Emys muticus 发表名称，现用组合为 Mauremys mutica。种加词的词尾随着属名组合调整。旧分类资料也可能把地龟类放在 Bataguridae，本图册采用地龟科 Geoemydidae，检索旧文献时一并核对。"
    }
  ],
  "keyFacts": [
    "黄喉拟水龟常有棕褐色椭圆背甲，喉部带黄色，眼后可见向颈部延伸的浅黄色带。头颈颜色和条带深浅随地区及个体变化。先找喉部和眼后带，再与花龟的多条细纹比较，不能只凭壳的颜色判断物种。",
    "黄喉拟水龟取食植物和动物性材料，包括水生植物及无脊椎动物等，属于杂食龟。天然食物会随地点和生活阶段变化。研究中的人工饲料和温度试验用于解释特定条件下的生长，不能代替野外食性记录。",
    "雌龟在陆地产卵，幼龟从卵中孵出。研究者比较过不同孵化温度下幼龟的生长和取食，也研究过母体大小与产卵数量的关系。这些结果各有实验条件，图片中的体型不足以推算准确年龄或孵化温度。"
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
      "value": "低海拔池塘、溪流与相连林地"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "黄色喉部与眼后浅色带"
    }
  ],
  "media": {
    "image": "./images/species/yellow-pond-turtle/01-cover.webp",
    "alt": "黄喉拟水龟完整外形与自然环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/yellow-pond-turtle/02-observation.webp",
        "title": "池边石上的成龟",
        "alt": "黄喉拟水龟：池边石上的成龟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。池边石上的成龟；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-pond-turtle/03-observation.webp",
        "title": "黄色喉部与眼后带",
        "alt": "黄喉拟水龟：黄色喉部与眼后带，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。黄色喉部与眼后带；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-pond-turtle/04-observation.webp",
        "title": "溪池中的游动姿态",
        "alt": "黄喉拟水龟：溪池中的游动姿态，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。溪池中的游动姿态；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-pond-turtle/05-observation.webp",
        "title": "苔石上的幼龟",
        "alt": "黄喉拟水龟：苔石上的幼龟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。苔石上的幼龟；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。幼体位于前景，成体同时入画；两者大小仅作阶段对照，非实测比例，也不表示亲子关系或护幼行为。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-pond-turtle/06-observation.webp",
        "title": "水域旁的落叶地面",
        "alt": "黄喉拟水龟：水域旁的落叶地面，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水域旁的落叶地面；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
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
      "url": "https://www.gbif.org/species/2443393",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN：全球极危条目，2021 发表",
      "url": "https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T39613A2930788.en",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "CITES 动物委员会：全球等级、下降趋势与评估年份",
      "url": "https://cites.org/sites/default/files/documents/F-AC32-14-02.pdf",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "CITES 原始提案：栖息环境、食性与贸易压力",
      "url": "https://cites.org/sites/default/files/eng/cop/12/prop/E12-P26.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "Naturalis 龟类资料：外形、分布与生活史，保护等级另用新评估",
      "url": "https://turtles.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?id=8073",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2019 原始研究：孵化温度与幼龟取食",
      "url": "https://www.sciencedirect.com/science/article/pii/S0044848619313365",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2023 原始研究：人工种群繁殖",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10340008/",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "Reptile Database：名称、异名与分类链",
      "url": "https://reptile-database.reptarium.cz/Mauremys/mutica",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球等级对照",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/39613",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
