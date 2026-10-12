import type { Species } from '../../types/species.ts';

const profile = {
    "id": "mandarin-duck",
    "slug": "mandarin-duck",
    "names": {
      "zh": "鸳鸯",
      "en": "Mandarin Duck",
      "aliases": []
    },
    "scientificName": "Aix galericulata",
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
        "scientificName": "Anseriformes",
        "zhName": "雁形目"
      },
      "family": {
        "scientificName": "Anatidae",
        "zhName": "鸭科"
      },
      "genus": {
        "scientificName": "Aix",
        "zhName": "鸳鸯属"
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
      "assessedYear": 2018
    },
    "distribution": {
      "realms": [
        "terrestrial",
        "freshwater"
      ],
      "continents": [
        "亚洲"
      ],
      "regions": [
        "东亚"
      ],
      "countries": [
        "中国",
        "日本",
        "俄罗斯",
        "朝鲜",
        "韩国"
      ],
      "range": "原生于东亚，在林间水域生活；英国等地另有从圈养个体建立的引入种群。",
      "center": {
        "lat": 33,
        "lng": 118
      }
    },
    "habitats": [
      {
        "name": "林间池塘与溪流",
        "realm": "freshwater",
        "description": "偏好周围有树林的淡水水域，需要可供繁殖的树洞。",
        "isPrimary": true
      }
    ],
    "measurements": {
      "weight": {
        "min": 428,
        "max": 693,
        "unit": "g",
        "note": "采用 ADW 的成体质量范围。"
      }
    },
    "metrics": {
      "adultMassKg": [
        0.428,
        0.693
      ]
    },
    "diet": {
      "types": [
        "omnivore"
      ],
      "foods": [
        "种子",
        "坚果",
        "水生植物",
        "昆虫",
        "小型水生动物"
      ],
      "description": "随季节利用植物种子和水生小动物；常在浅水和岸边觅食。"
    },
    "activity": [
      "日行性"
    ],
    "tags": [
      "林间池塘与溪流",
      "无危",
      "树洞育雏"
    ],
    "summary": "鸳鸯在树洞里筑巢。雏鸟孵化后会响应母鸟的呼唤，从洞口跳下，再跟随母鸟前往水域。",
    "description": "繁殖羽雄鸟背上立着橙色帆状羽，雌鸟则以灰褐色为主，眼周有白圈，眼后延伸一条白纹。",
    "storySections": [
      {
        key: 'identity',
        label: '认识鸳鸯',
        title: '帆状羽属于繁殖羽雄鸟',
        body: '鸳鸯属于鸭科鸳鸯属。雄鸟的橙色帆状羽和红喙很显眼，雌鸟没有这样的帆状羽。',
      },
      {
        key: 'female',
        label: '雌鸟的外形',
        title: '白色眼圈拖出细纹',
        body: '雌鸟灰褐色羽毛上有白色眼圈，细白纹从眼后延伸。繁殖羽雄鸟则有橙色帆状羽，雌雄外形相差很大。',
      },
      {
        key: 'nesting',
        label: '树洞育雏',
        title: '母鸟用绒羽铺巢',
        body: '雌鸟选择树洞并铺入绒羽，独自承担孵卵。水边保留带洞的老树，可以为它提供繁殖位置。',
      },
      {
        key: 'ducklings',
        label: '雏鸟离巢',
        title: '先跳下树，再去水里',
        body: '母鸟在地面呼唤，雏鸟爬到洞口后跳下。离巢时它们尚未能飞，却已能跟随母鸟活动；不能把这段行为理解为所有高度都安全。',
      },
      {
        key: 'feeding',
        label: '四季食物',
        title: '浅水和岸边都能觅食',
        body: '鸳鸯会吃种子、坚果与水生小动物，食物随季节改变。它需要的环境同时包括水面、岸边和树林。',
      },
      {
        key: 'conservation',
        label: '保留巢树',
        title: '水域旁的树林也要保护',
        body: '2018 年 IUCN 全球评估将鸳鸯列为无危，种群趋势下降。林地损失会减少巢洞和隐蔽处，因此水域与周围树木都需要保留。繁殖季应与巢洞保持距离。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '帆状羽之外，雏鸟还会跳树洞',
        body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Aix galericulata。鸳鸯雌雄外形差别很大：繁殖羽雄鸟有橙色帆状羽，雌鸟则有白色眼圈。雏鸟还不会飞时，就会响应母鸟的呼唤跳下树洞，跟着她前往水域。',
      },
    ],
    "keyFacts": [
      '繁殖羽雄鸟有橙色帆状羽，雌鸟没有。',
      '雌鸟的白色眼圈向后延伸成细纹。',
      '雌鸟在树洞铺入绒羽，独自孵卵。',
      '雏鸟尚不能飞时便会跳下树洞，跟随母鸟。',
      '食物包括种子、坚果和水生小动物。',
    ],
    "threats": [
      "林间湿地及巢树损失。",
      "繁殖地的人为干扰。"
    ],
    "conservationActions": [
      "保留水边老树及树洞。",
      "在岸边留出安静的育雏空间。"
    ],
    "featuredStats": [
      {
        "key": "mass",
        "label": "成体体重约",
        "value": "428—693",
        "unit": "克"
      },
      {
        "key": "trait",
        "label": "观察重点",
        "value": "树洞育雏"
      }
    ],
    "sources": [
      {
        "title": "Animal Diversity Web — 鸳鸯",
        "url": "https://animaldiversity.org/accounts/Aix_galericulata/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "BirdLife DataZone — 全球评估档案",
        "url": "https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/418",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "BirdLife DataZone — 评估历史",
        "url": "https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/418/history",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Aix galericulata 的命名作者与年份',
        url: 'https://www.gbif.org/species/2498388',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/mandarin-duck/01-cover.webp",
      "alt": "鸳鸯位于画面右侧，完整身体及尾部周围保留环境。",
      "focalPoint": {
        "x": 0.95,
        "y": 0.4
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/mandarin-duck/02-body.webp",
          "title": "繁殖羽雄鸟",
          "alt": "雄性鸳鸯站在木头上，橙色帆状羽和蹼足可见。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/mandarin-duck/03-detail.webp",
          "title": "雌雄外形对照",
          "alt": "左侧雌性鸳鸯游在水中，右侧繁殖羽雄鸟站在石上。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/mandarin-duck/04-behavior.webp",
          "title": "树洞入口",
          "alt": "雌性鸳鸯位于树洞入口，雄鸟站在前景。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/mandarin-duck/05-life.webp",
          "title": "母鸟带着雏鸟",
          "alt": "雌性鸳鸯带着绒羽雏鸟游过池塘，背景中还有雄鸟。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/mandarin-duck/06-habitat.webp",
          "title": "林间水域",
          "alt": "东亚林间池塘周围生长着大树。",
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
