import type { Species } from '../../types/species.ts';

const profile = {
  "id": "ventricose-orb-weaver",
  "slug": "ventricose-orb-weaver",
  "names": {
    "zh": "大腹园蛛",
    "en": "Ventricose Orb-weaver",
    "aliases": [
      "大腹圆蛛"
    ]
  },
  "scientificName": "Araneus ventricosus",
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
      "scientificName": "Arachnida",
      "zhName": "蛛形纲"
    },
    "order": {
      "scientificName": "Araneae",
      "zhName": "蜘蛛目"
    },
    "family": {
      "scientificName": "Araneidae",
      "zhName": "园蛛科"
    },
    "genus": {
      "scientificName": "Araneus",
      "zhName": "圆蛛属"
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
    "assessor": "本次未取得可核实的全球 IUCN 评估，项目以 NE 记录此信息缺口；不据此断言该种从未被评估，NE 也不代表无危。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "中国、日本、朝鲜半岛与俄罗斯远东等东亚地区"
    ],
    "countries": [],
    "range": "中国、日本、朝鲜半岛与俄罗斯远东等东亚地区。主要利用灌木间的圆网与树皮隐蔽处；地图点表示一个代表地区，不是完整分布边界或野外观察记录。",
    "center": {
      "lat": 31.2,
      "lng": 121.5
    }
  },
  "habitats": [
    {
      "name": "灌木间的圆网与树皮隐蔽处",
      "realm": "terrestrial",
      "description": "它常在傍晚和夜间利用圆网捕食，也会在网附近隐蔽。径向丝从中心伸向外缘，捕捉丝连接其间；观察时不拉扯蛛丝测试反应。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "昆虫"
    ],
    "description": "大腹园蛛捕食落入网中的昆虫。它会用丝包裹猎物；有关萤火虫信号的研究发生于特定种群和场景，不能据普通蛛网照片推断这种行为。"
  },
  "tags": [
    "大腹园蛛",
    "灌木间的圆网与树皮隐蔽处"
  ],
  "summary": "大腹园蛛长着膨大的腹部，会在植被间织圆网。蛛丝传来振动时，它能沿网接近落入网中的昆虫。",
  "description": "雌蛛腹部较大，常见褐色或灰褐色斑纹，足上带环纹和细毛。腹形与颜色会随个体和状态变化，近似圆蛛还需结合专业特征鉴别。本档案采用圆蛛属 Araneus 的 Araneus ventricosus。“园蛛”保留在常用中文名中，分类名称使用园蛛科和圆蛛属。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "雌蛛腹部较大，常见褐色或灰褐色斑纹，足上带环纹和细毛。腹形与颜色会随个体和状态变化，近似圆蛛还需结合专业特征鉴别。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "它常在傍晚和夜间利用圆网捕食，也会在网附近隐蔽。径向丝从中心伸向外缘，捕捉丝连接其间；观察时不拉扯蛛丝测试反应。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物怎样取得",
      "body": "大腹园蛛捕食落入网中的昆虫。它会用丝包裹猎物；有关萤火虫信号的研究发生于特定种群和场景，不能据普通蛛网照片推断这种行为。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼体与成体",
      "body": "雌蛛用丝包裹卵形成卵囊，幼蛛孵出后逐步分散。幼蛛经过蜕皮长大，成体腹部的大小不能单独用于判断年龄。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "本档案采用圆蛛属 Araneus 的 Araneus ventricosus。“园蛛”保留在常用中文名中，分类名称使用园蛛科和圆蛛属。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：圆网的径向丝与环形捕捉丝有什么区别？观察任务：从网外拍下结构并记录时间，保留网上动物与周围植被。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Araneus ventricosus 的名称记录",
      "body": "GBIF 记录 Araneus ventricosus (L. Koch, 1878)。世界蜘蛛名录保留它在不同属名组合和相关分类研究中的记录。作者名外的括号指组合发生过变化，不表示命名人对物种身份缺乏把握。"
    }
  ],
  "keyFacts": [
    "雌蛛腹部较大，常见褐色或灰褐色斑纹，足上带环纹和细毛。腹形与颜色会随个体和状态变化，近似圆蛛还需结合专业特征鉴别。",
    "大腹园蛛捕食落入网中的昆虫。它会用丝包裹猎物；有关萤火虫信号的研究发生于特定种群和场景，不能据普通蛛网照片推断这种行为。",
    "雌蛛用丝包裹卵形成卵囊，幼蛛孵出后逐步分散。幼蛛经过蜕皮长大，成体腹部的大小不能单独用于判断年龄。"
  ],
  "threats": [],
  "conservationActions": [
    "辨认问题：圆网的径向丝与环形捕捉丝有什么区别？观察任务：从网外拍下结构并记录时间，保留网上动物与周围植被。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "灌木间的圆网与树皮隐蔽处"
    },
    {
      "key": "diet",
      "label": "主要食物",
      "value": "昆虫"
    }
  ],
  "media": {
    "image": "./images/species/ventricose-orb-weaver/01-cover.webp",
    "alt": "大腹园蛛及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/ventricose-orb-weaver/02-observation.webp",
        "title": "膨大的腹部",
        "alt": "大腹园蛛：膨大的腹部，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。雌蛛腹部常较显眼，颜色和斑纹仍会变化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ventricose-orb-weaver/03-observation.webp",
        "title": "网中的支撑丝",
        "alt": "大腹园蛛：网中的支撑丝，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。径向丝和相连的捕捉丝组成圆网，影像只呈现一部分。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ventricose-orb-weaver/04-observation.webp",
        "title": "树皮附近的隐蔽处",
        "alt": "大腹园蛛：树皮附近的隐蔽处，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。网旁的树皮和枝叶可以提供遮蔽。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ventricose-orb-weaver/05-observation.webp",
        "title": "用丝包裹食物",
        "alt": "大腹园蛛：用丝包裹食物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。图中展示包裹昆虫的姿态，不呈现完整捕食顺序。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ventricose-orb-weaver/06-observation.webp",
        "title": "灌木之间的圆网",
        "alt": "大腹园蛛：灌木之间的圆网，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。蛛网需要周围枝叶作为支点，记录时不破坏这些连接。",
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
      "title": "GBIF：接受学名、命名人与分类链",
      "url": "https://www.gbif.org/species/2159950",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "世界蜘蛛名录：Araneus",
      "url": "https://wsc.nmbe.ch/genus-catalog/457/Araneus",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "蜘蛛利用萤火虫信号的野外实验",
      "url": "https://www.sciencedirect.com/science/article/pii/S096098222400914X",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "农光互补设施中的蜘蛛结网研究",
      "url": "https://www.jircas.go.jp/sites/default/files/publication/jarq/jarq59-4_271-277.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
