import type { Species } from '../../types/species.ts';

const profile = {
  "id": "reeves-turtle",
  "slug": "reeves-turtle",
  "names": {
    "zh": "草龟",
    "en": "Reeves’s Turtle",
    "aliases": [
      "中华草龟",
      "乌龟",
      "Chinemys reevesii"
    ]
  },
  "scientificName": "Mauremys reevesii",
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
    "code": "EN",
    "label": {
      "zh": "濒危",
      "en": "Endangered"
    },
    "trend": "unknown",
    "assessedYear": 2011,
    "assessor": "采用 IUCN 龟类专家组物种研究所载 2011 全球评估；未独立核实全球趋势，保留 unknown。饲养数量不用于推断野生种群状况。"
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
      "东亚淡水湿地"
    ],
    "countries": [],
    "range": "东亚的中国、朝鲜半岛和日本部分地区有草龟记录；某些地区的原生或引入历史仍需结合研究判断。它在池塘和湿地及相连陆地生活，饲养或贸易地点不等于原生分布。",
    "center": {
      "lat": 30.1,
      "lng": 115.5
    }
  },
  "habitats": [
    {
      "name": "池塘、湿地及邻近陆地",
      "realm": "freshwater",
      "description": "草龟在水中游动，也会爬上岸边、石块或倒木晒背。它用肺呼吸，需要到水面换气，水边可上岸的休息位置很重要。自然环境中的晒背姿势不等于适用于所有家庭饲养条件的布置方案。",
      "isPrimary": true
    },
    {
      "name": "水域旁的晒背与产卵陆地",
      "realm": "terrestrial",
      "description": "草龟会上岸晒背，雌龟也在陆地挖巢产卵；保留与水域相连的岸边环境。"
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "植物性食物",
      "小型无脊椎动物",
      "其他动物性食物"
    ],
    "description": "草龟是杂食动物，取食植物以及水中或岸边的动物性食物。食物组成随环境和生活阶段变化，名称中的“草”不表示它只吃草。图中的植物和小动物用于解释环境，不能充当饲养配方。"
  },
  "tags": [
    "草龟",
    "淡水龟",
    "池塘、湿地及邻近陆地"
  ],
  "summary": "草龟常有三条背甲纵棱和浅色颈纹，会在水中游动，也会上岸晒背、产卵。",
  "description": "草龟的背甲呈椭圆形，常能看出三条纵向的棱，头颈两侧有浅黄色细纹。它用带爪的足活动，脚趾间有蹼。部分成年雄龟会随成长变得很黑，但不能只凭黑色就判断性别或年龄。草龟在水中游动，也会爬上岸边、石块或倒木晒背。它用肺呼吸，需要到水面换气，水边可上岸的休息位置很重要。自然环境中的晒背姿势不等于适用于所有家庭饲养条件的布置方案。草龟是杂食动物，取食植物以及水中或岸边的动物性食物。食物组成随环境和生活阶段变化，名称中的“草”不表示它只吃草。图中的植物和小动物用于解释环境，不能充当饲养配方。雌龟到陆地挖巢产卵，幼龟从卵中孵出。水域与邻近陆地共同参与它的生活史，不能把卵画成在水底孵化。幼龟背甲与尾部比例和成龟不同，龟甲纹路也不能当作可靠的逐岁年轮。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体和外形开始",
      "body": "草龟的背甲呈椭圆形，常能看出三条纵向的棱，头颈两侧有浅黄色细纹。它用带爪的足活动，脚趾间有蹼。部分成年雄龟会随成长变得很黑，但不能只凭黑色就判断性别或年龄。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "水边的生活",
      "body": "草龟在水中游动，也会爬上岸边、石块或倒木晒背。它用肺呼吸，需要到水面换气，水边可上岸的休息位置很重要。自然环境中的晒背姿势不等于适用于所有家庭饲养条件的布置方案。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它怎样取得食物",
      "body": "草龟是杂食动物，取食植物以及水中或岸边的动物性食物。食物组成随环境和生活阶段变化，名称中的“草”不表示它只吃草。图中的植物和小动物用于解释环境，不能充当饲养配方。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "成长与育幼",
      "body": "雌龟到陆地挖巢产卵，幼龟从卵中孵出。水域与邻近陆地共同参与它的生活史，不能把卵画成在水底孵化。幼龟背甲与尾部比例和成龟不同，龟甲纹路也不能当作可靠的逐岁年轮。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案指 Mauremys reevesii，旧名 Chinemys reevesii 指向同一物种。“乌龟”在口语里也用来泛指其他龟类；草龟与中华花龟、黄喉拟水龟以及滑龟仍需区分，人工环境中还可能出现杂交个体。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：草龟背甲上能找到几条纵向的棱？观察任务：隔着展示窗比较背甲和足的形状，不翻转龟体或带走野生幼龟。野生草龟受捕捉、贸易和栖息环境改变等压力，饲养常见不代表野生安全。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "草龟的名称与记录",
      "body": "Gray 于 1831 年以 Emys reevesii 发表名称，后续资料使用过 Chinemys reevesii，现用组合为 Mauremys reevesii。名称的变化反映属级归属的修订，不表示这些旧组合分别是新发现的物种。"
    }
  ],
  "keyFacts": [
    "草龟的背甲呈椭圆形，常能看出三条纵向的棱，头颈两侧有浅黄色细纹。它用带爪的足活动，脚趾间有蹼。部分成年雄龟会随成长变得很黑，但不能只凭黑色就判断性别或年龄。",
    "草龟是杂食动物，取食植物以及水中或岸边的动物性食物。食物组成随环境和生活阶段变化，名称中的“草”不表示它只吃草。图中的植物和小动物用于解释环境，不能充当饲养配方。",
    "雌龟到陆地挖巢产卵，幼龟从卵中孵出。水域与邻近陆地共同参与它的生活史，不能把卵画成在水底孵化。幼龟背甲与尾部比例和成龟不同，龟甲纹路也不能当作可靠的逐岁年轮。"
  ],
  "threats": [
    "野生捕捉与贸易",
    "湿地和岸边栖息地改变"
  ],
  "conservationActions": [
    "保护原生水域与岸边环境，不把饲养动物自行放入野外。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "池塘、湿地及邻近陆地"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "三条背甲纵棱与晒背"
    }
  ],
  "media": {
    "image": "./images/species/reeves-turtle/01-cover.webp",
    "alt": "草龟与淡水生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/reeves-turtle/02-observation.webp",
        "title": "倒木上晒背的成龟",
        "alt": "草龟：倒木上晒背的成龟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。倒木上晒背的成龟；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/reeves-turtle/03-observation.webp",
        "title": "背甲的三条纵棱",
        "alt": "草龟：背甲的三条纵棱，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。背甲的三条纵棱；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/reeves-turtle/04-observation.webp",
        "title": "水中伸颈游动",
        "alt": "草龟：水中伸颈游动，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水中伸颈游动；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/reeves-turtle/05-observation.webp",
        "title": "浅水边的幼龟",
        "alt": "草龟：浅水边的幼龟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。浅水边的幼龟；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/reeves-turtle/06-observation.webp",
        "title": "水域旁的陆地活动",
        "alt": "草龟：水域旁的陆地活动，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水域旁的陆地活动；不同画面独立重建，静止图不证明动作过程，生成细节不用于精确鉴种。",
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
      "title": "GBIF：接受名称与原始分类响应",
      "url": "https://www.gbif.org/species/2443597",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN 龟类专家组：生态、野生压力与 2011 全球评估",
      "url": "https://iucn-tftsg.org/cbftt/species-accounts/mauremys-reevesii-050/",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN 龟类专家组完整物种研究：食性、晒背与产卵",
      "url": "https://iucn-tftsg.org/wp-content/uploads/file/Accounts/crm_5_050_reevesii_v1_2011.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "Reptile Database：接受名称、异名与龟鳖目归属",
      "url": "https://reptile-database.reptarium.cz/Mauremys/reevesii",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2025 原始研究：湖北草龟的巢址与产卵行为",
      "url": "https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.71630",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
