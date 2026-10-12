import type { Species } from '../../types/species.ts';

const profile = {
    "id": "barn-swallow",
    "slug": "barn-swallow",
    "names": {
      "zh": "家燕",
      "en": "Barn Swallow",
      "aliases": []
    },
    "scientificName": "Hirundo rustica",
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
        "scientificName": "Passeriformes",
        "zhName": "雀形目"
      },
      "family": {
        "scientificName": "Hirundinidae",
        "zhName": "燕科"
      },
      "genus": {
        "scientificName": "Hirundo",
        "zhName": "燕属"
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
      "assessedYear": 2019
    },
    "distribution": {
      "realms": [
        "terrestrial"
      ],
      "continents": [
        "欧洲",
        "亚洲",
        "非洲",
        "北美洲",
        "南美洲"
      ],
      "regions": [
        "欧洲",
        "亚洲",
        "非洲",
        "北美洲",
        "南美洲"
      ],
      "countries": [
        "中国",
        "日本",
        "英国",
        "美国",
        "南非",
        "巴西"
      ],
      "range": "广布于北半球繁殖地，许多种群迁往南方越冬；具体迁徙路线随种群而异。",
      "center": {
        "lat": 32,
        "lng": 112
      }
    },
    "habitats": [
      {
        "name": "农田、村落与湿地边缘",
        "realm": "terrestrial",
        "description": "在开阔地捕虫，利用屋檐、桥下和棚舍等有遮蔽的位置筑巢。",
        "isPrimary": true
      }
    ],
    "measurements": {
      "weight": {
        "min": 17,
        "max": 20,
        "unit": "g",
        "note": "采用 ADW 的成体质量范围。"
      },
      "length": {
        "min": 14.6,
        "max": 19.9,
        "unit": "cm",
        "note": "ADW 总长范围，包含尾羽。"
      }
    },
    "metrics": {
      "adultMassKg": [
        0.017,
        0.02
      ],
      "adultLengthCm": [
        14.6,
        19.9
      ]
    },
    "diet": {
      "types": [
        "insectivore"
      ],
      "foods": [
        "苍蝇",
        "甲虫",
        "蚊类",
        "其他飞行昆虫"
      ],
      "description": "主要在飞行中捕食昆虫，常贴近草地或水面觅食。"
    },
    "activity": [
      "日行性"
    ],
    "tags": [
      "农田、村落与湿地边缘",
      "无危",
      "衔泥筑巢"
    ],
    "summary": "家燕在飞行中捕捉昆虫，用衔来的泥团和草茎筑成开口杯状巢，常把巢安在屋檐或横梁上。",
    "description": "家燕背部蓝黑而带光泽，额头和喉部带锈红色，长尾深深分叉，外侧尾羽像两条细带。",
    "storySections": [
      {
        key: 'identity',
        label: '认识家燕',
        title: '看清深叉的尾巴',
        body: '家燕属于雀形目燕科。尖长双翼、深叉尾和锈红色喉部是常见辨认线索，腹部颜色会随地区种群变化。',
      },
      {
        key: 'flight',
        label: '空中捕虫',
        title: '飞着寻找下一口食物',
        body: '家燕常在开阔地低飞捕虫，也能掠过水面饮水。水边、草地和农田里的昆虫为它提供食物。',
      },
      {
        key: 'nesting',
        label: '衔泥筑巢',
        title: '把泥团垒成开口的杯',
        body: '双亲收集泥和植物材料，把巢固定在有支撑的位置，再铺入柔软衬垫。家燕的巢顶部敞开，不是封闭的瓶状泥巢。',
      },
      {
        key: 'young',
        label: '巢中的雏鸟',
        title: '双亲往返送来昆虫',
        body: '刚孵化的雏鸟需要双亲喂养。即使幼鸟离开巢，亲鸟仍可能继续照顾一段时间，观察时应与巢保持距离。',
      },
      {
        key: 'migration',
        label: '季节迁徙',
        title: '追随适合捕虫的季节',
        body: '许多家燕在繁殖季结束后迁往较温暖地区。不同地区的种群使用不同路线，不能用一条线路代表全球家燕。',
      },
      {
        key: 'conservation',
        label: '与村落共处',
        title: '保留巢位，清理废线',
        body: '2019 年 IUCN 全球评估将家燕列为无危，种群趋势下降。人造建筑提供巢位，废弃鱼线和细绳却可能缠住成鸟或幼鸟。保留安全巢位、清理散落线材能帮助它们繁殖。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '屋檐下的开口泥巢',
        body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Hirundo rustica。家燕常利用屋檐和横梁筑巢，与人类建筑共享空间。双亲衔来泥团和草茎，筑成顶部敞开的杯状巢，再往返捕虫喂养雏鸟。',
      },
    ],
    "keyFacts": [
      '尖长双翼、深叉尾和锈红色喉部是辨认线索。',
      '在飞行中捕虫，也能掠过水面饮水。',
      '双亲用泥和植物材料筑成顶部敞开的杯状巢。',
      '雏鸟由双亲喂养，离巢后仍可能受到照顾。',
      '许多种群迁往较暖地区，各地路线不同。',
    ],
    "threats": [
      "巢位拆除与繁殖干扰。",
      "废弃鱼线或细绳缠绕。"
    ],
    "conservationActions": [
      "保留安全巢位，繁殖期避免扰巢。",
      "清理废线，保护昆虫丰富的水边与草地。"
    ],
    "featuredStats": [
      {
        "key": "mass",
        "label": "成体体重约",
        "value": "17—20",
        "unit": "克"
      },
      {
        "key": "trait",
        "label": "观察重点",
        "value": "衔泥筑巢"
      }
    ],
    "sources": [
      {
        "title": "Animal Diversity Web — 家燕",
        "url": "https://animaldiversity.org/accounts/Hirundo_rustica/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Cornell Lab — 家燕生活史",
        "url": "https://www.allaboutbirds.org/guide/Barn_Swallow/lifehistory",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "BirdLife DataZone — 全球评估档案",
        "url": "https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/7116",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "BirdLife DataZone — 评估历史",
        "url": "https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/7116/history",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Hirundo rustica 的命名作者与年份',
        url: 'https://www.gbif.org/species/9515886',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/barn-swallow/01-cover.webp",
      "alt": "家燕位于画面右侧，完整身体及尾部周围保留环境。",
      "focalPoint": {
        "x": 0.95,
        "y": 0.4
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/barn-swallow/02-body.webp",
          "title": "长叉尾的家燕",
          "alt": "家燕完整停栖，外侧长尾羽和足部可见。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/barn-swallow/03-detail.webp",
          "title": "空中的尖翼",
          "alt": "家燕飞过草地，尖翼与叉尾展开。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/barn-swallow/04-behavior.webp",
          "title": "衔泥的成鸟",
          "alt": "家燕在浅水泥边采集泥团。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/barn-swallow/05-life.webp",
          "title": "屋檐下的杯状巢",
          "alt": "家燕停在横梁上的开口杯状泥巢旁。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/barn-swallow/06-habitat.webp",
          "title": "农田与水域",
          "alt": "家燕飞过村落旁的农田与池塘。",
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
