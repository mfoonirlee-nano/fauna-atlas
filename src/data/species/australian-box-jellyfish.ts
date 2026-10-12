import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-chironex-fleckeri",
    "slug": "australian-box-jellyfish",
    "names": {
      "zh": "澳大利亚箱水母",
      "en": "Australian Box Jellyfish",
      "aliases": [
        "澳大利亚箱形水母",
        "海蜂"
      ]
    },
    "scientificName": "Chironex fleckeri",
    "taxonomy": {
      "kingdom": {
        "scientificName": "Animalia",
        "zhName": "动物界"
      },
      "phylum": {
        "scientificName": "Cnidaria",
        "zhName": "刺胞动物门"
      },
      "class": {
        "scientificName": "Cubozoa",
        "zhName": "箱水母纲"
      },
      "order": {
        "scientificName": "Chirodropida",
        "zhName": "手曳水母目"
      },
      "family": {
        "scientificName": "Chirodropidae",
        "zhName": "手曳水母科"
      },
      "genus": {
        "scientificName": "Chironex",
        "zhName": "箱水母属"
      }
    },
    "measurements": {},
    "metrics": {},
    "featured": true,
    "publishedAt": "2026-09-08",
    "updatedAt": "2026-09-08",
    "conservation": {
      "system": "IUCN Red List",
      "code": "NE",
      "label": {
        "zh": "未评估",
        "en": "Not Evaluated"
      },
      "trend": "unknown",
      "assessor": "SeaLifeBase 收录的 IUCN 全球状态为未评估（2025-2）；未提供评估年份，种群趋势未知。"
    },
    "distribution": {
      "realms": [
        "marine"
      ],
      "continents": [
        "大洋洲"
      ],
      "regions": [
        "澳大利亚北部热带近岸",
        "西澳大利亚州",
        "北领地",
        "昆士兰州"
      ],
      "countries": [
        "澳大利亚"
      ],
      "range": '澳大利亚博物馆记录，本种生活在西澳大利亚州、北领地到昆士兰州的热带近岸水域。其他印度太平洋海区也有不同种类的箱水母，记录时需要区分。'
    },
    "habitats": [
      {
        "name": "热带近岸与河口",
        "realm": "marine",
        "description": "在浅海和河口附近游动，部分生境带有红树林根系。",
        "isPrimary": true
      }
    ],
    "diet": {
      "types": [
        "carnivore"
      ],
      "foods": [
        "小虾",
        "鱼类"
      ],
      "description": "用带有刺细胞的触手捕获小虾和鱼类，再把猎物送到伞下的口部。研究者在水流循环水槽中观察到活体捕食。"
    },
    "activity": [
      "主动游泳",
      "视觉避障",
      "触手捕食"
    ],
    "tags": [
      "箱水母纲",
      "24只眼",
      "晶状体",
      "河口",
      "刺细胞"
    ],
    "summary": "澳大利亚箱水母透明的伞体近似方盒，四角垂着成束触手。它有 24 只眼，其中 8 只带晶状体，能感受视觉线索并调整游动方向。",
    "description": "透过海水可看见近方形的透明伞体，伞下四角的触手基部各伸出一束细触手。眼睛集中在四个感觉器上，远看只像伞缘附近的小点。",
    "storySections": [
      {
        key: 'identity',
        label: '认识箱水母',
        title: '四个角各垂下一束触手',
        body: '澳大利亚箱水母属于刺胞动物门、箱水母纲。透明的伞体近似方盒，四个角各有一束触手，成体最多可达约 60 条。触手数量会随生长变化。',
      },
      {
        key: 'eyes',
        label: '四组眼睛',
        title: '每个感觉器上有六只眼',
        body: '伞体四侧各有一个感觉器，每个感觉器带两只晶状体眼、两只杯状眼和两只缝状眼，合计 24 只眼。其中 8 只带晶状体。不同类型的眼接收光线信息，成像能力各不相同。',
      },
      {
        key: 'vision',
        label: '视觉与游泳',
        title: '看到深色物体后游开',
        body: '1995 年研究发现，实验室里的澳大利亚箱水母看到深色物体后会游开。2020 年研究又测量了其晶状体眼的瞳孔对明暗变化的反应，显示视觉参与运动调节。这些研究讨论的是本种，其他箱水母的学习实验针对不同物种。',
      },
      {
        key: 'feeding',
        label: '触手捕食',
        title: '用刺细胞留住小虾和鱼',
        body: '细长触手接触猎物时，表面的刺细胞帮助捕获和制服猎物。研究者在循环水槽中观察到它捕捉小虾和鱼，并弯动触手基部，将食物送向伞下的口部。',
      },
      {
        key: 'habitat',
        label: '河口与近岸',
        title: '透明身体藏在浅水里',
        body: '澳大利亚北部的热带近岸水域有本种明确记录，涵盖西澳大利亚州、北领地和昆士兰州，河口和红树林附近也有合适生境。透明身体在水下难以辨认，调查者需要结合形态鉴定记录。',
      },
      {
        key: 'conservation',
        label: '观察与记录',
        title: '记录数量，也记录生境',
        body: 'SeaLifeBase 收录的全球 IUCN 状态为未评估，种群趋势未知。连续调查能补充分布和出现时间。它的触手具有危险刺细胞，野外观察应保持距离，遵守当地海滩管理提示。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '从描述物种到研究二十四只眼',
        body: 'Southcott 于 1956 年描述了这个物种，现用学名为 Chironex fleckeri。四角各垂一束触手的方盒状伞体，让“箱水母”这个名字容易对应外形。1995 年实验观察到它对深色物体作出视觉反应，2020 年研究又测量了晶状体眼对明暗的瞳孔反应。',
      },
    ],
    "keyFacts": [
      "四个感觉器共有 24 只眼。",
      "其中 8 只眼带晶状体。",
      "四角各有一束触手，成体最多约 60 条。",
      "本种有视觉避障的实验观察记录。",
      "用触手捕食小虾和鱼类。",
      "IUCN 全球状态按未评估收录。"
    ],
    "threats": [
      "现有资料不足以量化全球种群趋势及主要威胁。"
    ],
    "conservationActions": [
      "记录近岸和河口生境中的出现时间与数量。",
      "以可靠的形态或分子鉴定区分外形相近的箱水母。"
    ],
    "featuredStats": [
      {
        "key": "eyes",
        "label": "眼睛总数",
        "value": "24",
        "unit": "只"
      },
      {
        "key": "lens-eyes",
        "label": "晶状体眼",
        "value": "8",
        "unit": "只"
      },
      {
        "key": "tentacles",
        "label": "触手最多约",
        "value": "60",
        "unit": "条",
        "note": "成体上限，随生长阶段变化。"
      },
      {
        "key": "bell",
        "label": "伞体最大约",
        "value": "30",
        "unit": "厘米",
        "note": "澳大利亚博物馆资料；不含触手。"
      }
    ],
    "sources": [
      {
        "title": "OBIS — 澳大利亚箱水母分类归属",
        "url": "https://obis.org/taxon/289593",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "澳大利亚博物馆 — 箱水母识别与分布",
        "url": "https://australian.museum/learn/animals/jellyfish/boxjellyfish/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Hamner 等 1995 — 本种游泳、捕食与视觉",
        "url": "https://doi.org/10.1071/MF9950985",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Seymour 与 O’Hara 2020 — 三种箱水母的瞳孔反应",
        "url": "https://www.jstage.jst.go.jp/article/pbr/15/2/15_P150210/_pdf",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "SeaLifeBase — 本种全球 IUCN 状态",
        "url": "https://www.sealifebase.ca/summary/Chironex-fleckeri.html",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Chironex fleckeri 的命名作者与年份',
        url: 'https://www.gbif.org/species/2264689',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/australian-box-jellyfish/01-cover.webp",
      "alt": "透明箱水母位于画面右侧，方形伞体和成束触手完整可见。",
      "focalPoint": {
        "x": 0.98,
        "y": 0.35
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/australian-box-jellyfish/02-body.webp",
          "alt": "透明的近方形伞体四角伸出细长触手。",
          "title": "四角的触手束",
          "caption": "AI 生成外形重建；触手数量随年龄变化，图像不作物种鉴定。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/australian-box-jellyfish/03-eyes.webp",
          "alt": "放大的感觉器示意图展示两只晶状体眼和两对简单眼。",
          "title": "感觉器上的眼睛",
          "caption": "AI 生成结构示意；组织形状和比例经过简化，不是显微照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/australian-box-jellyfish/04-navigation.webp",
          "alt": "箱水母游过红树林根系间的空隙。",
          "title": "在根系附近游动",
          "caption": "AI 生成行为情景；不表示某次避障实验的水下实拍。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/australian-box-jellyfish/05-feeding.webp",
          "alt": "箱水母的细触手接触一只小虾。",
          "title": "触手捕获小虾",
          "caption": "AI 生成捕食情景；猎物比例和触手姿态经过简化。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/australian-box-jellyfish/06-habitat.webp",
          "alt": "红树林边缘的近岸浅水与水下根系。",
          "title": "热带河口",
          "caption": "AI 生成生境重建；不对应具体地理坐标或现场记录。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        }
      ]
    }
  } as const satisfies Species;

export default profile;
