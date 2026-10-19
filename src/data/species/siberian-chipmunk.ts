import type { Species } from '../../types/species.ts';

const profile = {
  "id": "siberian-chipmunk",
  "slug": "siberian-chipmunk",
  "names": {
    "zh": "西伯利亚花栗鼠",
    "en": "Siberian Chipmunk",
    "aliases": [
      "Eutamias sibiricus",
      "花栗鼠",
      "花鼠"
    ]
  },
  "scientificName": "Tamias sibiricus",
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
      "scientificName": "Mammalia",
      "zhName": "哺乳纲"
    },
    "order": {
      "scientificName": "Rodentia",
      "zhName": "啮齿目"
    },
    "family": {
      "scientificName": "Sciuridae",
      "zhName": "松鼠科"
    },
    "genus": {
      "scientificName": "Tamias",
      "zhName": "花鼠属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "trend": "unknown",
    "assessor": "IUCN 发布于 GBIF 的全球受威胁物种名录列为 LC；本次未核实独立评估日期，保留年份空缺，全球等级不代表各地区都常见。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "欧亚大陆北部至东亚"
    ],
    "countries": [],
    "range": "原生范围横跨欧亚大陆北部与东亚森林地区，欧洲一些地方存在由宠物逸出或释放形成的引入种群。地图点代表贝加尔湖邻近地区，不表示每一片北亚森林都分布有它。",
    "center": {
      "lat": 52,
      "lng": 105
    }
  },
  "habitats": [
    {
      "name": "北亚森林地面与灌丛",
      "realm": "terrestrial",
      "description": "它在北亚与东亚森林的地面、倒木和灌丛附近活动，也会攀爬。地下洞穴用于躲避、繁殖和储存食物，寒冷地区有季节性的冬眠；不同气候下活动周期会改变。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "种子",
      "坚果",
      "果实",
      "昆虫"
    ],
    "description": "它取食种子、坚果、果实等植物材料，也吃昆虫等小动物。颊囊负责搬运而不是消化，食物可被带回洞穴储存；脸颊鼓起不能直接量出储粮总量。"
  },
  "tags": [
    "西伯利亚花栗鼠",
    "北亚森林地面与灌丛"
  ],
  "summary": "西伯利亚花栗鼠背部有相间的深浅纵纹，常在地面寻找种子。颊囊可以搬运食物，地下洞穴则提供储藏和休息空间。",
  "description": "西伯利亚花栗鼠体形小，背部有五条深色纵纹，眼周也有深浅相间的线纹。耳朵较圆，尾巴有毛但不如树栖松鼠那样蓬大；颊囊装入食物时脸部会鼓起。GBIF 把 Eutamias sibiricus 列为 Tamias sibiricus 的异名，本图册按既有 GBIF 基线采用后者与花鼠属。IUCN 和一些哺乳动物文献采用 Eutamias，两个组合在这里指向同一目标物种，不重复建档。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "西伯利亚花栗鼠体形小，背部有五条深色纵纹，眼周也有深浅相间的线纹。耳朵较圆，尾巴有毛但不如树栖松鼠那样蓬大；颊囊装入食物时脸部会鼓起。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "它在北亚与东亚森林的地面、倒木和灌丛附近活动，也会攀爬。地下洞穴用于躲避、繁殖和储存食物，寒冷地区有季节性的冬眠；不同气候下活动周期会改变。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物怎样进入身体",
      "body": "它取食种子、坚果、果实等植物材料，也吃昆虫等小动物。颊囊负责搬运而不是消化，食物可被带回洞穴储存；脸颊鼓起不能直接量出储粮总量。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼体与成体",
      "body": "幼鼠在洞穴内出生并接受母乳喂养，之后开始离巢觅食。储粮与冬眠帮助它渡过食物较少的季节，静图里的种子堆只是重建场景，不代表实际储粮规模。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "GBIF 把 Eutamias sibiricus 列为 Tamias sibiricus 的异名，本图册按既有 GBIF 基线采用后者与花鼠属。IUCN 和一些哺乳动物文献采用 Eutamias，两个组合在这里指向同一目标物种，不重复建档。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：背部能找到几条深色纵纹？观察任务：比较普通脸颊和装食物后的脸颊，区分颊囊与肚子的位置。 保留林地和地面遮蔽；不把饲养花栗鼠放归非原生地区。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Tamias sibiricus 的名称记录",
      "body": "Laxmann 在 1769 年发表这一物种的名称，之后研究者先后采用 Tamias 和 Eutamias 等属级组合。属名变化不意味着动物换了一个物种；查找旧资料时应同时比对命名人、种加词和接受名。"
    }
  ],
  "keyFacts": [
    "西伯利亚花栗鼠体形小，背部有五条深色纵纹，眼周也有深浅相间的线纹。耳朵较圆，尾巴有毛但不如树栖松鼠那样蓬大；颊囊装入食物时脸部会鼓起。",
    "它取食种子、坚果、果实等植物材料，也吃昆虫等小动物。颊囊负责搬运而不是消化，食物可被带回洞穴储存；脸颊鼓起不能直接量出储粮总量。",
    "幼鼠在洞穴内出生并接受母乳喂养，之后开始离巢觅食。储粮与冬眠帮助它渡过食物较少的季节，静图里的种子堆只是重建场景，不代表实际储粮规模。"
  ],
  "threats": [
    "原生森林环境改变",
    "宠物释放造成引入影响"
  ],
  "conservationActions": [
    "保留林地和地面遮蔽；不把饲养花栗鼠放归非原生地区。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "北亚森林地面与灌丛"
    },
    {
      "key": "diet",
      "label": "主要食物",
      "value": "种子、坚果"
    }
  ],
  "media": {
    "image": "./images/species/siberian-chipmunk/01-cover.webp",
    "alt": "西伯利亚花栗鼠及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/siberian-chipmunk/02-observation.webp",
        "title": "前爪间的种子",
        "alt": "西伯利亚花栗鼠：前爪间的种子，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。花栗鼠会取食和搬运种子。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/siberian-chipmunk/03-observation.webp",
        "title": "鼓起的颊囊",
        "alt": "西伯利亚花栗鼠：鼓起的颊囊，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。颊囊是搬运食物的口腔结构。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/siberian-chipmunk/04-observation.webp",
        "title": "地下洞口旁",
        "alt": "西伯利亚花栗鼠：地下洞口旁，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。洞穴可以提供休息和储食空间。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/siberian-chipmunk/05-observation.webp",
        "title": "越过倒木",
        "alt": "西伯利亚花栗鼠：越过倒木，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。背部深浅相间的纵纹在这个角度较清楚。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/siberian-chipmunk/06-observation.webp",
        "title": "秋季收集食物",
        "alt": "西伯利亚花栗鼠：秋季收集食物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。重建储食季节的场景，食物数量不是野外实测。",
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
      "title": "GBIF：接受学名、命名人和分类链",
      "url": "https://www.gbif.org/species/2437450",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "中国兽类名录2024：花鼠属及物种中文名称",
      "url": "https://cdn.sciengine.com/doi/pdf/46E010F42A7D4C96877CD3FB59901108",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "American Society of Mammalogists：西伯利亚花栗鼠与原生分布",
      "url": "https://www.mammalogy.org/image-library/eutamias-sibiricus-4919",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "原始研究综述：引入西伯利亚花栗鼠的全球分布",
      "url": "https://doi.org/10.1111/mam.12117",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "ADW：花栗鼠的生活史与储食",
      "url": "https://animaldiversity.org/accounts/Tamias_sibiricus/",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球受威胁物种名录",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/176671568",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 全球评估与采用的名称范围",
      "url": "https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T21360A22268598.en",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
