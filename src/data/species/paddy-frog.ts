import type { Species } from '../../types/species.ts';

const profile = {
  "id": "paddy-frog",
  "slug": "paddy-frog",
  "names": {
    "zh": "泽陆蛙",
    "en": "Paddy Frog",
    "aliases": [
      "泽蛙"
    ]
  },
  "scientificName": "Fejervarya multistriata",
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
      "scientificName": "Dicroglossidae",
      "zhName": "叉舌蛙科"
    },
    "genus": {
      "scientificName": "Fejervarya",
      "zhName": "陆蛙属"
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
    "assessor": "IUCN 发布于 GBIF 的全球受威胁物种名录列为 LC；本次未核实独立评估日期，保留年份空缺，全球等级不代表各地区都常见。IUCN 的 2023-1 类别变化表确认由 DD 调为 LC；发布批次不等于已核实独立评估日期，这一变化也不能直接理解为种群恢复。"
  },
  "distribution": {
    "realms": [
      "terrestrial",
      "freshwater"
    ],
    "continents": [],
    "regions": [
      "中国南部及邻近亚洲地区"
    ],
    "countries": [],
    "range": "本页聚焦中国南部与邻近地区、以香港模式产地相关范围理解的泽陆蛙。旧文献的广义泽蛙分布可能混有近缘陆蛙，地图点只是香港代表位置，不是完整分布多边形。",
    "center": {
      "lat": 22.3,
      "lng": 114.1
    }
  },
  "habitats": [
    {
      "name": "稻田、沟渠与浅水湿地边缘",
      "realm": "terrestrial",
      "description": "泽陆蛙利用稻田、沟渠、池塘和浅水湿地边缘，白天可隐蔽在草丛或泥岸。繁殖水体的类型与周边土地利用会影响局部种群；它在农田出现不代表所有耕作方式都适合蛙类。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "昆虫",
      "其他小型无脊椎动物"
    ],
    "description": "成蛙捕食昆虫及其他小型无脊椎动物，食物来自水边与地面环境。蝌蚪阶段的身体和取食方式与成蛙不同，不能把成蛙食谱直接套给整个生活史。"
  },
  "tags": [
    "泽陆蛙",
    "稻田、沟渠与浅水湿地边缘"
  ],
  "summary": "泽陆蛙常在稻田与浅水边活动，背部有断续纵向肤褶，后腿带深色横纹。它与近缘陆蛙外形相似，鉴定还需地点、鸣声或分子证据。",
  "description": "泽陆蛙多呈褐色或灰褐色，吻部较尖，背部有多条断续纵褶，后腿常带深色横纹。部分个体有较浅的背中线；有无这条线都不能单独决定种名。趾端没有树蛙那样扩大的吸盘。GBIF 和 AMNH 的 ASW 接受 Fejervarya multistriata，归入叉舌蛙科、陆蛙属。中国旧文献的 Fejervarya limnocharis 或泽蛙记录可能混有其他近缘种，包括川村陆蛙，不能只按旧名整批合并。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "泽陆蛙多呈褐色或灰褐色，吻部较尖，背部有多条断续纵褶，后腿常带深色横纹。部分个体有较浅的背中线；有无这条线都不能单独决定种名。趾端没有树蛙那样扩大的吸盘。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "泽陆蛙利用稻田、沟渠、池塘和浅水湿地边缘，白天可隐蔽在草丛或泥岸。繁殖水体的类型与周边土地利用会影响局部种群；它在农田出现不代表所有耕作方式都适合蛙类。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物怎样进入身体",
      "body": "成蛙捕食昆虫及其他小型无脊椎动物，食物来自水边与地面环境。蝌蚪阶段的身体和取食方式与成蛙不同，不能把成蛙食谱直接套给整个生活史。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼体与成体",
      "body": "卵在水中发育成蝌蚪，变态时四肢成熟，尾部逐渐退化，幼蛙转向以四肢运动。2026 年研究直接分析泽陆蛙变态尾吸收；静态情景展示不同阶段，不能测出完成变态所需时间。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "GBIF 和 AMNH 的 ASW 接受 Fejervarya multistriata，归入叉舌蛙科、陆蛙属。中国旧文献的 Fejervarya limnocharis 或泽蛙记录可能混有其他近缘种，包括川村陆蛙，不能只按旧名整批合并。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：背部纵褶是连续直线还是断续隆起？观察任务：比较后腿横纹与趾端形状，不用手抓蛙来测量。 维持浅水湿地和田边植被，减少农田径流对繁殖水体的影响。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Fejervarya multistriata 的名称记录",
      "body": "Hallowell 在 1861 年以 Rana multistriata 发表名称，模式产地记录为香港一带，后来转入 Fejervarya。ASW 记录了新模式指定和旧名纠缠；名称历史说明重新核对标本的重要性。"
    }
  ],
  "keyFacts": [
    "泽陆蛙多呈褐色或灰褐色，吻部较尖，背部有多条断续纵褶，后腿常带深色横纹。部分个体有较浅的背中线；有无这条线都不能单独决定种名。趾端没有树蛙那样扩大的吸盘。",
    "成蛙捕食昆虫及其他小型无脊椎动物，食物来自水边与地面环境。蝌蚪阶段的身体和取食方式与成蛙不同，不能把成蛙食谱直接套给整个生活史。",
    "卵在水中发育成蝌蚪，变态时四肢成熟，尾部逐渐退化，幼蛙转向以四肢运动。2026 年研究直接分析泽陆蛙变态尾吸收；静态情景展示不同阶段，不能测出完成变态所需时间。"
  ],
  "threats": [
    "浅水繁殖环境损失",
    "农田水体污染与生境简化"
  ],
  "conservationActions": [
    "维持浅水湿地和田边植被，减少农田径流对繁殖水体的影响。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "稻田、沟渠与浅水湿地边缘"
    },
    {
      "key": "diet",
      "label": "主要食物",
      "value": "昆虫、其他小型无脊椎动物"
    }
  ],
  "media": {
    "image": "./images/species/paddy-frog/01-cover.webp",
    "alt": "泽陆蛙及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/paddy-frog/02-observation.webp",
        "title": "背部断续的纵褶",
        "alt": "泽陆蛙：背部断续的纵褶，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。背纹和肤褶有个体差异，不能仅凭一张图鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/paddy-frog/03-observation.webp",
        "title": "稻田水边停留",
        "alt": "泽陆蛙：稻田水边停留，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。稻田和沟渠可以提供水陆交界生境。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/paddy-frog/04-observation.webp",
        "title": "地面觅食情景",
        "alt": "泽陆蛙：地面觅食情景，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。小型无脊椎动物构成成蛙的食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/paddy-frog/05-observation.webp",
        "title": "成蛙与水中蝌蚪情景",
        "alt": "泽陆蛙：成蛙与水中蝌蚪情景，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。同一水体里的蝌蚪不等于已经确认属于该成蛙。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/paddy-frog/06-observation.webp",
        "title": "雨后泥岸上的后腿",
        "alt": "泽陆蛙：雨后泥岸上的后腿，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。弯曲后肢和趾端可从侧面观察。",
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
      "url": "https://www.gbif.org/species/2430411",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 2023-1 类别变化表：泽陆蛙由 DD 调为 LC",
      "url": "https://nc.iucnredlist.org/redlist/content/attachment_files/2023-1_RL_Table_7.pdf",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "AMNH ASW：泽陆蛙命名历史与分类边界",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Dicroglossidae/Dicroglossinae/Fejervarya/Fejervarya-multistriata",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "原始研究：上海农田繁殖生境与泽陆蛙体况",
      "url": "https://doi.org/10.1016/j.agee.2019.04.003",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "原始研究：泽陆蛙变态过程中的尾吸收",
      "url": "https://pubmed.ncbi.nlm.nih.gov/41875788/",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球受威胁物种名录",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/176684048",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
