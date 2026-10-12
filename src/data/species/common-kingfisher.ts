import type { Species } from '../../types/species.ts';

const profile = {
    "id": "common-kingfisher",
    "slug": "common-kingfisher",
    "names": {
      "zh": "普通翠鸟",
      "en": "Common Kingfisher",
      "aliases": []
    },
    "scientificName": "Alcedo atthis",
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
        "scientificName": "Aves",
        "zhName": "鸟纲"
      },
      "order": {
        "scientificName": "Coraciiformes",
        "zhName": "佛法僧目"
      },
      "family": {
        "scientificName": "Alcedinidae",
        "zhName": "翠鸟科"
      },
      "genus": {
        "scientificName": "Alcedo",
        "zhName": "翠鸟属"
      }
    },
    "conservation": {
      "system": "IUCN Red List",
      "code": "LC",
      "label": {
        "zh": "无危",
        "en": "Least Concern"
      },
      "trend": "decreasing",
      "assessor": "BirdLife International",
      "assessedYear": 2024
    },
    "distribution": {
      "realms": [
        "terrestrial",
        "freshwater"
      ],
      "continents": [
        "亚洲",
        "欧洲",
        "非洲"
      ],
      "regions": [
        "欧洲",
        "亚洲",
        "北非"
      ],
      "countries": [
        "中国",
        "日本",
        "英国",
        "印度"
      ],
      "range": "分布于欧洲、亚洲及北非的水域附近；部分北方种群会迁往较温暖地区。",
      "center": {
        "lat": 30,
        "lng": 110
      }
    },
    "habitats": [
      {
        "name": "溪流、河岸与池塘",
        "realm": "freshwater",
        "description": "清澈或缓流的水域提供小鱼，岸边枝条供它停栖，土岸可供挖巢。",
        "isPrimary": true
      }
    ],
    "measurements": {
      "weight": {
        "min": 26,
        "max": 39,
        "unit": "g",
        "note": "采用 ADW 的成体质量范围。"
      }
    },
    "metrics": {
      "adultMassKg": [
        0.026,
        0.039
      ]
    },
    "diet": {
      "types": [
        "piscivore",
        "carnivore"
      ],
      "foods": [
        "小鱼",
        "水生昆虫",
        "小型甲壳动物"
      ],
      "description": "它从水边枝头观察猎物，再俯冲捕捉小鱼，也吃水生无脊椎动物。"
    },
    "activity": [
      "日行性"
    ],
    "tags": [
      "溪流、河岸与池塘",
      "无危",
      "瞬膜与捕鱼"
    ],
    "summary": "普通翠鸟从枝头俯冲入水捕鱼，瞬膜像一层透明护目镜，保护眼睛。",
    "description": "蓝绿色背羽、橙色腹部和笔直长喙让它在水边很醒目，停下来时还能看见短尾与橙红色小脚。",
    "storySections": [
      {
        key: 'identity',
        label: '认识翠鸟',
        title: '蓝背、橙腹与长喙',
        body: '普通翠鸟属于佛法僧目翠鸟科。雄鸟的喙通常全黑，雌鸟下喙带橙红色；观察时还要留意年龄差异。',
      },
      {
        key: 'eyes',
        label: '入水护眼',
        title: '眼前还有一层瞬膜',
        body: '入水时，称为瞬膜的透明第三眼睑覆盖眼睛，保护眼表。它像一层可以移动的透明护膜。',
      },
      {
        key: 'fishing',
        label: '俯冲捕鱼',
        title: '从枝头盯住水中猎物',
        body: '翠鸟常在水边守候，发现目标便扎入水中。捕到鱼后，它会回到停栖点处理，再将鱼吞下。',
      },
      {
        key: 'nesting',
        label: '土岸里的巢',
        title: '在岸壁挖出育雏通道',
        body: '它在河岸土壁中挖隧道，并在通道末端育雏。平整硬化的岸壁会减少这类筑巢位置。',
      },
      {
        key: 'color',
        label: '羽毛的蓝色',
        title: '微小结构改变光线',
        body: '背羽的蓝色来自羽毛微结构对光的作用。不同光照和观察角度下，背部可能更偏蓝或偏绿。',
      },
      {
        key: 'conservation',
        label: '河流保护',
        title: '给捕鱼和筑巢留下空间',
        body: '2024 年 IUCN 全球评估将普通翠鸟列为无危，种群趋势下降。严寒、水污染和不当河道管理会影响它。保留岸边植被、自然土岸及清洁水体，能为捕鱼和筑巢留下空间。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '翠蓝羽色来自微小结构',
        body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Alcedo atthis。“翠”色可以在背羽上看到。羽毛的微小结构改变光线，因此同一只鸟的背部从不同角度看可能更偏蓝或偏绿。捕鱼时，它还会用透明的第三眼睑保护眼睛。',
      },
    ],
    "keyFacts": [
      '背羽蓝绿，腹部橙色，喙长而直。',
      '入水时用透明瞬膜保护眼睛。',
      '从水边枝头俯冲捕鱼，再回到停栖点处理。',
      '在河岸土壁挖隧道，通道末端用来育雏。',
      '羽毛微结构使背部随光照和角度呈蓝绿变化。',
    ],
    "threats": [
      "水污染及河道生境退化。",
      "严寒导致可用取食水域减少。"
    ],
    "conservationActions": [
      "保留自然土岸与岸边植被。",
      "减少污染，观察时远离巢洞。"
    ],
    "featuredStats": [
      {
        "key": "mass",
        "label": "成体体重约",
        "value": "26—39",
        "unit": "克"
      },
      {
        "key": "trait",
        "label": "观察重点",
        "value": "瞬膜与捕鱼"
      }
    ],
    "sources": [
      {
        "title": "Animal Diversity Web — 普通翠鸟",
        "url": "https://animaldiversity.org/accounts/Alcedo_atthis/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "RSPB — 普通翠鸟外形、瞬膜与生境",
        "url": "https://www.rspb.org.uk/birds-and-wildlife/kingfisher",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "BirdLife DataZone — 全球评估档案",
        "url": "https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/1066",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "BirdLife DataZone — 评估历史",
        "url": "https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/1066/history",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Alcedo atthis 的命名作者与年份',
        url: 'https://www.gbif.org/species/2475532',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/common-kingfisher/01-cover.webp",
      "alt": "普通翠鸟位于画面右侧，完整身体及尾部周围保留环境。",
      "focalPoint": {
        "x": 0.95,
        "y": 0.4
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/common-kingfisher/02-body.webp",
          "title": "枝头的蓝背小鸟",
          "alt": "普通翠鸟完整侧身停在水边枝条上。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/common-kingfisher/03-detail.webp",
          "title": "长喙与眼睛",
          "alt": "普通翠鸟头部近景，显示长喙、眼睛与白色喉斑。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。只展示外观，不展示瞬膜运动。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/common-kingfisher/04-behavior.webp",
          "title": "俯冲向水面",
          "alt": "普通翠鸟收拢翅膀，朝水面俯冲。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/common-kingfisher/05-life.webp",
          "title": "土岸巢洞旁",
          "alt": "普通翠鸟停在河岸土壁的隧道入口附近。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/common-kingfisher/06-habitat.webp",
          "title": "溪流与河岸",
          "alt": "自然溪流两侧保留土岸和植被。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
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
