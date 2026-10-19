import type { Species } from '../../types/species.ts';

const profile = {
  "id": "pallas-squirrel",
  "slug": "pallas-squirrel",
  "names": {
    "zh": "赤腹松鼠",
    "en": "Pallas’s Squirrel",
    "aliases": [
      "红腹松鼠"
    ]
  },
  "scientificName": "Callosciurus erythraeus",
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
      "scientificName": "Callosciurus",
      "zhName": "丽松鼠属"
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
      "中国南部及东南亚部分原生地区"
    ],
    "countries": [],
    "range": "原生范围涵盖中国南部和邻近的南亚、东南亚部分地区，另外有人为引入的欧洲、日本和南美种群。具体原生边界随分类修订而调整；地图只给出中国南部一个代表点。",
    "center": {
      "lat": 25,
      "lng": 113
    }
  },
  "habitats": [
    {
      "name": "常绿林与林缘",
      "realm": "terrestrial",
      "description": "它白天在树木之间攀爬和取食，也会来到地面。常绿林、次生林和有树木的人工环境都可能提供食物与遮蔽；沿树干停下、抬头观察的姿态只是活动过程中的一个瞬间。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "果实",
      "种子",
      "嫩叶",
      "昆虫"
    ],
    "description": "果实、种子和植物嫩部构成它的食物，它也会取食昆虫等动物性食物。拿在前爪间啃咬与伏在树枝上取食都能观察到；人工投喂会改变它靠近人的行为。"
  },
  "tags": [
    "赤腹松鼠",
    "常绿林与林缘"
  ],
  "summary": "赤腹松鼠常在树冠和树干间活动，蓬松长尾帮助身体转向。腹部颜色随种群而变，中文名里的“赤腹”不代表每只都呈鲜红色。",
  "description": "赤腹松鼠的背毛常呈灰褐或橄榄褐色，腹部可呈栗红色或更淡的色调。耳朵较圆，长尾蓬松，爪帮助它抓住树皮。不同地区的毛色差异很大，不能只凭一块红色腹毛确定种类。图册采用 GBIF 的 Callosciurus erythraeus，归入松鼠科、丽松鼠属。它与松鼠属的欧亚红松鼠分属不同属，耳部、尾部和腹色需要一起看；本页不承担亚种鉴定。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "赤腹松鼠的背毛常呈灰褐或橄榄褐色，腹部可呈栗红色或更淡的色调。耳朵较圆，长尾蓬松，爪帮助它抓住树皮。不同地区的毛色差异很大，不能只凭一块红色腹毛确定种类。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "它白天在树木之间攀爬和取食，也会来到地面。常绿林、次生林和有树木的人工环境都可能提供食物与遮蔽；沿树干停下、抬头观察的姿态只是活动过程中的一个瞬间。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物怎样进入身体",
      "body": "果实、种子和植物嫩部构成它的食物，它也会取食昆虫等动物性食物。拿在前爪间啃咬与伏在树枝上取食都能观察到；人工投喂会改变它靠近人的行为。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼体与成体",
      "body": "母鼠在巢中产仔并哺乳，幼鼠长大后逐渐跟随成体活动。静图里的两只松鼠不等于已确认的亲子；观察幼体时应保留巢穴附近的安静空间。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "图册采用 GBIF 的 Callosciurus erythraeus，归入松鼠科、丽松鼠属。它与松鼠属的欧亚红松鼠分属不同属，耳部、尾部和腹色需要一起看；本页不承担亚种鉴定。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：尾毛与背毛的颜色相同吗？观察任务：对照树干和地面两幅图，找出前爪接触的位置。 保留林木与连通的栖息环境；引入地区按当地方案管理，不放生宠物。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Callosciurus erythraeus 的名称记录",
      "body": "Pallas 在 1779 年发表这一物种的名称，现用组合为 Callosciurus erythraeus，命名人外的括号表示属名曾调整。命名记录描述学名的历史，不表示当地居民从该年才认识这种松鼠。"
    }
  ],
  "keyFacts": [
    "赤腹松鼠的背毛常呈灰褐或橄榄褐色，腹部可呈栗红色或更淡的色调。耳朵较圆，长尾蓬松，爪帮助它抓住树皮。不同地区的毛色差异很大，不能只凭一块红色腹毛确定种类。",
    "果实、种子和植物嫩部构成它的食物，它也会取食昆虫等动物性食物。拿在前爪间啃咬与伏在树枝上取食都能观察到；人工投喂会改变它靠近人的行为。",
    "母鼠在巢中产仔并哺乳，幼鼠长大后逐渐跟随成体活动。静图里的两只松鼠不等于已确认的亲子；观察幼体时应保留巢穴附近的安静空间。"
  ],
  "threats": [
    "原生地区的森林转化",
    "引入地区对本地生态的影响"
  ],
  "conservationActions": [
    "保留林木与连通的栖息环境；引入地区按当地方案管理，不放生宠物。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "常绿林与林缘"
    },
    {
      "key": "diet",
      "label": "主要食物",
      "value": "果实、种子"
    }
  ],
  "media": {
    "image": "./images/species/pallas-squirrel/01-cover.webp",
    "alt": "赤腹松鼠及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/pallas-squirrel/02-observation.webp",
        "title": "前爪间的果实",
        "alt": "赤腹松鼠：前爪间的果实，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。用前爪固定果实，图像不说明每种植物都适合取食。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pallas-squirrel/03-observation.webp",
        "title": "沿树干攀爬",
        "alt": "赤腹松鼠：沿树干攀爬，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。爪与树皮接触，长尾随身体姿态改变位置。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pallas-squirrel/04-observation.webp",
        "title": "地面寻找食物",
        "alt": "赤腹松鼠：地面寻找食物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。树栖松鼠也会来到地面取食。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pallas-squirrel/05-observation.webp",
        "title": "枝叉间休息",
        "alt": "赤腹松鼠：枝叉间休息，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。尾部可以靠近身体，单幅图片不能确定休息时长。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pallas-squirrel/06-observation.webp",
        "title": "大小不同的两只松鼠",
        "alt": "赤腹松鼠：大小不同的两只松鼠，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼体与成体的示意场景，不能凭同框确定亲缘。",
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
      "url": "https://www.gbif.org/species/2437394",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "Mammalian Species：赤腹松鼠形态与生态综述",
      "url": "https://www.science.smith.edu/departments/Biology/VHAYSSEN/msi/pdf/902_Callosciurus_erythraeus.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "ADW：赤腹松鼠的生活史",
      "url": "https://animaldiversity.org/accounts/Callosciurus_erythraeus/",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球受威胁物种名录",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/176671866",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 全球评估与采用的名称范围",
      "url": "https://doi.org/10.2305/IUCN.UK.2017-2.RLTS.T3595A22254356.en",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
