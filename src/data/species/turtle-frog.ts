import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-myobatrachus-gouldii",
  "slug": "turtle-frog",
  "names": {
    "zh": "龟蛙",
    "en": "Turtle Frog",
    "aliases": [
      "古氏龟蟾"
    ]
  },
  "scientificName": "Myobatrachus gouldii",
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
      "scientificName": "Amphibia",
      "zhName": "两栖纲"
    },
    "order": {
      "scientificName": "Anura",
      "zhName": "无尾目"
    },
    "family": {
      "scientificName": "Myobatrachidae",
      "zhName": "龟蟾科"
    },
    "genus": {
      "scientificName": "Myobatrachus",
      "zhName": "龟蟾属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "trend": "stable",
    "assessedYear": 2021,
    "assessor": "IUCN SSC Amphibian Specialist Group；全球评估日期2021-05-18，2022年发布"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "大洋洲"
    ],
    "regions": [
      "西澳大利亚州西南部与部分内陆沙地"
    ],
    "countries": [
      "澳大利亚"
    ],
    "endemicTo": [
      "澳大利亚西澳大利亚州"
    ],
    "range": "澳大利亚特有种，分布在西澳大利亚州西南部和部分内陆地区的沙质土壤中。IUCN 记录的范围从北部海岸卡尔巴里延伸至南部埃斯佩兰斯附近；并非整片区域都有它，部分高大森林地带缺少记录。地图取珀斯沿海平原的代表点。",
    "center": {
      "lat": -31.95,
      "lng": 115.8
    }
  },
  "habitats": [
    {
      "name": "西澳沙质土壤与地下洞穴",
      "realm": "terrestrial",
      "description": "澳大利亚特有种，分布在西澳大利亚州西南部和部分内陆地区的沙质土壤中。IUCN 记录的范围从北部海岸卡尔巴里延伸至南部埃斯佩兰斯附近；并非整片区域都有它，部分高大森林地带缺少记录。地图取珀斯沿海平原的代表点。",
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "max": 5,
      "unit": "cm",
      "note": "西澳博物馆记录的身体长度上限，不含姿势伸展。"
    }
  },
  "diet": {
    "types": [
      "insectivore",
      "carnivore"
    ],
    "foods": [
      "白蚁等地下无脊椎动物"
    ],
    "description": "它在地下活动并取食白蚁等无脊椎动物。西澳调查报告指出，早期“只吃白蚁”的说法依据很少，后来的胃内容物研究发现了多类无脊椎动物，因此不能把白蚁写成唯一食物。"
  },
  "tags": [
    "龟蛙",
    "西澳沙质土壤与地下洞穴"
  ],
  "summary": "龟蛙长着小头、细小的眼睛和短粗四肢，圆身体像一只没有壳的小龟。它用前肢向前钻入西澳沙土，幼蛙在大卵里发育，孵化后就能爬动。",
  "description": "龟蛙的头很小，与宽圆身体之间能看出分界，前肢短而有力。背部颜色可从粉色到浅棕、深棕，外形没有龟壳，也没有成年尾巴。它适应地下生活，只有部分时间来到地表，常在雨后的繁殖季听见低沉叫声。",
  "storySections": [
    {
      "key": "shape",
      "label": "生活与认识",
      "title": "小头连着宽圆身体",
      "body": "龟蛙的头和眼睛都很小，身体宽圆，四肢短而有力，尤其是前臂。它的颜色并不只有粉红色，研究照片也记录了棕色个体。名字里的“龟”说的是相似轮廓，它仍是一种没有壳的蛙。"
    },
    {
      "key": "burrowing",
      "label": "生活与认识",
      "title": "用前肢向前钻进沙里",
      "body": "龟蛙靠强壮前肢在沙土中向前钻行。许多其他掘穴蛙用后足挖土并倒退下降，龟蛙的动作方向不同。观察图先找朝前的头部，再顺着前肢看它如何推开沙粒；不需要把它挖出来验证。"
    },
    {
      "key": "breeding",
      "label": "生活与认识",
      "title": "一对蛙在地下等待",
      "body": "珀斯一带的雄蛙会在夏季雨后鸣叫。配对后，两只蛙进入洞穴底部，可能过几个月才繁殖；洞可深达约 1.2 米。内陆记录的叫声季节与沿海不同，不能把所有地点都排进同一个繁殖月份。"
    },
    {
      "key": "eggs",
      "label": "生活与认识",
      "title": "从大卵里出来的就是小蛙",
      "body": "雌蛙在地下产下大卵，胚胎在卵膜内完成发育，孵化时已是小蛙。它没有在池塘里自由游泳的蝌蚪阶段，因此能生活在缺少地表积水的沙地。卵内画面只说明发育方式，不能当作野外透视照片。"
    },
    {
      "key": "underground-food",
      "label": "生活与认识",
      "title": "地下食物不只有白蚁",
      "body": "它常出现在沙土和白蚁群体附近，白蚁是食物之一。早期研究只检查少数来自白蚁巢的个体，后来研究在胃内容物中发现了更多种无脊椎动物。图中示意它靠近白蚁，不能由此推断它每餐都只吃白蚁。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Gray 在1841年描述的龟蛙",
      "body": "John Edward Gray 在 1841 年以 Breviceps gouldii 描述了龟蛙，后来研究者把它放入 Myobatrachus 属。种名纪念鸟类学家与插画家 John Gould；西澳博物馆说明了这段命名由来。后来研究者记录它在地下繁殖，以及幼体在卵内完成发育的生活史。"
    }
  ],
  "keyFacts": [
    "小头连着宽圆身体：龟蛙的头和眼睛都很小，身体宽圆，四肢短而有力，尤其是前臂。",
    "用前肢向前钻进沙里：龟蛙靠强壮前肢在沙土中向前钻行。",
    "一对蛙在地下等待：珀斯一带的雄蛙会在夏季雨后鸣叫。",
    "从大卵里出来的就是小蛙：雌蛙在地下产下大卵，胚胎在卵膜内完成发育，孵化时已是小蛙。"
  ],
  "threats": [],
  "conservationActions": [
    "保留自然栖息环境，观察时不采挖或搬动动物"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "小头和粗壮前肢"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "西澳沙质土壤与地下洞穴"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "白蚁等地下无脊椎动物"
    }
  ],
  "media": {
    "image": "./images/species/turtle-frog/01-cover.webp",
    "alt": "龟蛙在生活环境中的完整身体（AI 生成科学情景重建）",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/turtle-frog/02-observation.webp",
        "alt": "龟蛙侧前方近景呈现小头、小眼、宽圆身体与四条短粗腿（AI 生成科学情景重建）",
        "title": "小头和粗壮前肢",
        "caption": "AI 生成科学情景重建。龟蛙侧前方近景呈现小头、小眼、宽圆身体与四条短粗腿。粉色只是本种可能的体色之一。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/turtle-frog/03-observation.webp",
        "alt": "龟蛙头部朝向沙土洞口，前肢推开沙粒，身体向前钻入（AI 生成科学情景重建）",
        "title": "向前挖沙",
        "caption": "AI 生成科学情景重建。龟蛙头部朝向沙土洞口，前肢推开沙粒，身体向前钻入。动物部分进入土中，此图专门表现掘穴动作。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/turtle-frog/04-observation.webp",
        "alt": "地下沙质洞室剖面里，一对龟蛙停在洞底（AI 生成科学情景重建）",
        "title": "地下洞室中的一对蛙",
        "caption": "AI 生成科学情景重建。地下沙质洞室剖面里，一对龟蛙停在洞底。洞室剖面为概念示意，尺寸和深度未按比例呈现。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/turtle-frog/05-observation.webp",
        "alt": "地下卵室中的大卵旁有刚孵化的小蛙，局部透明示意卵内发育（AI 生成科学情景重建）",
        "title": "在卵里发育的小蛙",
        "caption": "AI 生成科学情景重建。地下卵室中的大卵旁有刚孵化的小蛙，局部透明示意卵内发育。卵内透明视图为概念示意；不画成在水中自由游泳的蝌蚪。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/turtle-frog/06-observation.webp",
        "alt": "龟蛙在沙土与白蚁通道交界处靠近几只白蚁（AI 生成科学情景重建）",
        "title": "寻找地下小动物",
        "caption": "AI 生成科学情景重建。龟蛙在沙土与白蚁通道交界处靠近几只白蚁。白蚁是食物之一，地下还有其他可食无脊椎动物。",
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
      "title": "西澳博物馆：本种外形、掘穴、直接发育、分布与 John Gould 命名由来",
      "url": "https://museum.wa.gov.au/explore/frogwatch/frogs/turtle-frog/",
      "kind": "ecology",
      "accessedAt": "2026-10-23"
    },
    {
      "title": "美国自然历史博物馆：Myobatrachus gouldii、Gray 1841 原名及模式记录",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Myobatrachoidea/Myobatrachidae/Myobatrachus/Myobatrachus-gouldii",
      "kind": "taxonomy",
      "accessedAt": "2026-10-23"
    },
    {
      "title": "西澳 DBCA 调查报告：龟蛙地下生活史与多样的无脊椎食物，印刷页53",
      "url": "https://library.dbca.wa.gov.au/FullTextFiles/923003.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-23"
    },
    {
      "title": "IUCN 全球评估：2021年评估、2022年发布，LC与稳定趋势",
      "url": "https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T41171A78444058.en",
      "kind": "conservation",
      "accessedAt": "2026-10-23"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-23",
  "updatedAt": "2026-10-23"
} as const satisfies Species;

export default profile;
