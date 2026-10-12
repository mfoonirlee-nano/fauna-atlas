import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-hippopotamus-amphibius",
    "slug": "hippopotamus",
    "names": {
      "zh": "河马",
      "en": "Common Hippopotamus",
      "aliases": [
        "普通河马"
      ]
    },
    "scientificName": "Hippopotamus amphibius",
    "featured": true,
    "publishedAt": "2026-09-08",
    "updatedAt": "2026-09-08",
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
        "scientificName": "Artiodactyla",
        "zhName": "偶蹄目"
      },
      "family": {
        "scientificName": "Hippopotamidae",
        "zhName": "河马科"
      },
      "genus": {
        "scientificName": "Hippopotamus",
        "zhName": "河马属"
      }
    },
    "conservation": {
      "system": "IUCN Red List",
      "code": "VU",
      "label": {
        "zh": "易危",
        "en": "Vulnerable"
      },
      "trend": "stable",
      "assessor": "Lewison 与 Pluháček 的 IUCN 全球评估，2016 年评估、2017 年发表；全球稳定趋势属于该评估口径，局部种群仍有下降。",
      "assessedYear": 2016
    },
    "distribution": {
      "realms": [
        "freshwater",
        "terrestrial"
      ],
      "continents": [
        "非洲"
      ],
      "regions": [
        "撒哈拉以南非洲的河流、湖泊与湿地"
      ],
      "countries": [
        "肯尼亚",
        "坦桑尼亚",
        "乌干达",
        "赞比亚",
        "博茨瓦纳",
        "南非"
      ],
      "range": "原生范围为撒哈拉以南非洲，生活在河流、湖泊及相邻草地。国家列表为代表性原生分布地，并非完整清单；水域之间的分布并不连续。",
      "center": {
        "lat": -3,
        "lng": 30
      }
    },
    "habitats": [
      {
        "name": "河流与浅湖",
        "realm": "freshwater",
        "description": "白天在水中休息，水位需要允许它浸没身体并浮出呼吸。",
        "isPrimary": true
      },
      {
        "name": "沿岸草地",
        "realm": "terrestrial",
        "description": "傍晚和夜间上岸，沿熟悉的路径寻找短草。"
      }
    ],
    "measurements": {
      "length": {
        "min": 3.3,
        "max": 5,
        "unit": "m",
        "note": "圣迭戈动物园给出的体长范围。"
      }
    },
    "metrics": {
      "adultLengthCm": [
        330,
        500
      ]
    },
    "diet": {
      "types": [
        "herbivore"
      ],
      "foods": [
        "草本植物"
      ],
      "description": "主要在夜间上岸吃草，以宽厚的嘴唇贴近地面取食。水中的休息地点和陆地上的取食地共同组成它的日常活动空间。"
    },
    "activity": [
      "白天水中休息",
      "夜间上岸吃草",
      "水底行走与蹬地"
    ],
    "tags": [
      "半水生",
      "鼻孔闭合",
      "夜间吃草",
      "河流",
      "易危"
    ],
    "summary": "河马白天多在水中休息，潜下时闭合鼻孔、折拢耳朵，过几分钟再浮出换气。夜色降临后，它会走上岸边吃草。",
    "description": "它有桶状躯干、宽大的吻部和四条短腿。眼、耳与鼻孔的位置都较高，身体浸在水中时，头顶仍可露出水面。",
    "storySections": [
      {
        key: 'identity',
        label: '认识河马',
        title: '眼耳鼻都靠近头顶',
        body: '河马属于哺乳纲、偶蹄目、河马科。眼睛、耳朵和鼻孔靠近头顶，身体大部分浸在水中时仍能观察、听声和呼吸。普通河马的学名是 Hippopotamus amphibius，倭河马是另一种体型更小的动物。',
      },
      {
        key: 'breathing',
        label: '潜水换气',
        title: '潜下时关上鼻孔',
        body: '完全潜入水中时，河马会闭合鼻孔并折拢耳朵，减少进水。成体一次屏息可达约五分钟或更久，随后需要露出鼻孔换气；不同年龄和活动状态下，时间会变化。',
      },
      {
        key: 'movement',
        label: '水下移动',
        title: '脚蹬河底向前走',
        body: '河马在浅水中常用脚触地、蹬地或沿河底行走，借助水的浮力移动沉重的身体。它每次蹬地后可以短暂离开河底，再落下接着前进。',
      },
      {
        key: 'grazing',
        label: '夜间吃草',
        title: '离开水面，沿小路上岸',
        body: '太阳落下后，河马会从水中走到附近草地取食。它主要吃草；宽吻适合靠近地面取食，长犬齿更多用于展示和争斗。保护河马需要同时保留水域和上岸觅食的通道。',
      },
      {
        key: 'skin',
        label: '皮肤分泌物',
        title: '红色液体从哪里来',
        body: '河马皮肤会分泌含色素的液体，暴露后可变成橙红色，人们曾把它叫作“血汗”。这些色素有吸收紫外线等作用。白天待在水中也帮助皮肤保持湿润。',
      },
      {
        key: 'conservation',
        label: '水域保护',
        title: '不同地方的河马处境不同',
        body: '2016 年评估、2017 年发表的 IUCN 全球记录将河马列为易危，趋势为稳定。CITES 文件指出，同一时期各国种群的变化差异很大。水域改变、栖息地减少和非法猎捕仍会影响地方种群，需要持续调查。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '河里的哺乳动物与所谓“血汗”',
        body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Hippopotamus amphibius。河马生活离不开水，也需要上岸吃草。它皮肤上的橙红色液体曾被叫作“血汗”，实际是含有特殊色素的分泌物，其中的色素能吸收紫外线。',
      },
    ],
    "keyFacts": [
      "原生分布在撒哈拉以南非洲。",
      "属于哺乳动物，需要到水面呼吸空气。",
      "潜水时闭合鼻孔，耳朵也会折拢。",
      "常通过脚蹬河底或沿底行走移动。",
      "主要在夜间上岸吃草。",
      "红色皮肤分泌物含有特殊色素。"
    ],
    "threats": [
      "水道改变与河岸栖息地减少。",
      "为获取肉和犬齿而发生的非法猎捕。",
      "旱期水源压力及人与河马的活动空间重叠。"
    ],
    "conservationActions": [
      "保留自然水域、河岸草地和两者之间的通道。",
      "巡护并监测非法猎捕与牙齿贸易。",
      "分别跟踪各地种群，结合社区工作减少冲突。"
    ],
    "featuredStats": [
      {
        "key": "length",
        "label": "体长约",
        "value": "3.3—5",
        "unit": "米"
      },
      {
        "key": "breath",
        "label": "成体屏息约",
        "value": "5",
        "unit": "分钟以上",
        "note": "可达约五分钟或更久，并非固定换气间隔。"
      },
      {
        "key": "food",
        "label": "主要食物",
        "value": "草"
      },
      {
        "key": "assessment",
        "label": "所用评估年份",
        "value": "2016",
        "unit": "年",
        "note": "评估于 2017 年发表。"
      }
    ],
    "sources": [
      {
        "title": "Mammal Diversity Database — 河马分类",
        "url": "https://www.mammaldiversity.org/taxon/1006390/",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "圣迭戈动物园 — 河马的水下生活与取食",
        "url": "https://animals.sandiegozoo.org/animals/hippo",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Animal Diversity Web — 河马形态、分布与皮肤",
        "url": "https://animaldiversity.org/accounts/Hippopotamus_amphibius/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "IUCN — 河马全球评估",
        "url": "https://www.iucnredlist.org/species/10103/18567364",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "CITES — 河马种群评估与贸易资料审议",
        "url": "https://cites.org/sites/default/files/documents/E-CoP19-89-01_0.pdf",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Hippopotamus amphibius 的命名作者与年份',
        url: 'https://www.gbif.org/species/2441247',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/hippopotamus/01-cover.webp",
      "alt": "河马站在画面右侧远处的河岸上，宽吻、四足与短尾完整可见。",
      "focalPoint": {
        "x": 0.95,
        "y": 0.35
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/hippopotamus/02-body.webp",
          "title": "岸上的河马",
          "alt": "完整侧身河马站在沙岸上，灰粉色躯干下有四条短腿。",
          "caption": "AI 生成外形重建；不作体长或体重测量。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/hippopotamus/03-breathing.webp",
          "title": "露出水面的鼻孔",
          "alt": "河马身体浸在水里，眼睛、耳朵和鼻孔露在水面上方。",
          "caption": "AI 生成呼吸情景；不对应某次呼吸间隔测量。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/hippopotamus/04-underwater.webp",
          "title": "蹬着河底前进",
          "alt": "水下的河马用后足蹬着沙底，前足抬起向前移动。",
          "caption": "AI 生成触底移动情景；水体透明度和姿态经过简化。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/hippopotamus/05-grazing.webp",
          "title": "黄昏上岸吃草",
          "alt": "河马在傍晚草地上低头取食，宽吻贴近草尖。",
          "caption": "AI 生成取食情景；未展示完整夜间活动路线。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/hippopotamus/06-habitat.webp",
          "title": "河流与岸边草地",
          "alt": "几只河马在宽阔河道中休息，岸边分布着草地。",
          "caption": "AI 生成生境重建；群体数量不代表当地种群密度。",
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
