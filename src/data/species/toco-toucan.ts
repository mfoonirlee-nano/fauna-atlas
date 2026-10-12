import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-ramphastos-toco",
    "slug": "toco-toucan",
    "names": {
      "zh": "托哥巨嘴鸟",
      "en": "Toco Toucan",
      "aliases": []
    },
    "scientificName": "Ramphastos toco",
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
        "scientificName": "Piciformes",
        "zhName": "鴷形目"
      },
      "family": {
        "scientificName": "Ramphastidae",
        "zhName": "巨嘴鸟科"
      },
      "genus": {
        "scientificName": "Ramphastos",
        "zhName": "巨嘴鸟属"
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
      "assessedYear": 2025
    },
    "distribution": {
      "realms": [
        "terrestrial"
      ],
      "continents": [
        "南美洲"
      ],
      "regions": [
        "疏林与稀树草原"
      ],
      "countries": [
        "巴西",
        "玻利维亚",
        "巴拉圭",
        "阿根廷"
      ],
      "range": "原生于南美洲中东部等地区，常利用疏林、稀树草原和河岸林。国家列表列出代表性分布地；中文名中的“托哥”不表示它原生于非洲多哥。"
    },
    "habitats": [
      {
        "name": "疏林与稀树草原",
        "realm": "terrestrial",
        "description": '利用南美洲疏林、稀树草原和河岸林，果树提供食物，带洞的树木提供巢位。',
        "isPrimary": true
      }
    ],
    "measurements": {
      "weight": {
        "min": 592,
        "max": 760,
        "unit": "g",
        "note": "采用 ADW 的成鸟质量范围。"
      }
    },
    "metrics": {
      "adultMassKg": [
        0.592,
        0.76
      ]
    },
    "diet": {
      "types": [
        "omnivore"
      ],
      "foods": [
        "果实",
        "昆虫",
        "鸟卵",
        "小型脊椎动物"
      ],
      "description": "它主要吃果实，也会取食昆虫、鸟卵和小型脊椎动物。长喙可以够到细枝上的果实；吞下果肉后，它可能把种子带到别处，参与植物传播。"
    },
    "activity": [
      "日行性",
      "树栖"
    ],
    "tags": [
      "疏林与稀树草原",
      "无危",
      "轻质巨喙",
      "调节散热"
    ],
    "summary": "托哥巨嘴鸟的巨喙外面是角蛋白壳，里面有轻巧的骨质网架。它还能调整流向喙部的血流，帮助身体散热。",
    "description": "黑色身体衬着白色喉胸，橙黄色大喙末端有黑斑。眼周蓝色部分是裸露皮肤，外面还有橙色皮肤环。",
    "storySections": [
      {
        key: 'identity',
        label: '认识托哥巨嘴鸟',
        title: '橙黄大喙配白色喉胸',
        body: '托哥巨嘴鸟属于鴷形目巨嘴鸟科，原生于南美洲。橙黄巨喙末端带黑斑，黑色身体衬着白色喉胸。眼周蓝圈是裸露皮肤，外侧还有橙色皮肤环。',
      },
      {
        key: 'structure',
        label: '轻巧的喙',
        title: '硬壳里面有骨质网架',
        body: '材料研究显示，它的喙由外层角蛋白和内部骨质结构共同支撑。内部的纤维网架与薄膜组成类似泡沫的结构，局部还有空腔，因此大喙不会像同体积实心骨块那样沉重。',
      },
      {
        key: 'heat',
        label: '喙部散热',
        title: '调节血流，把热带到喙上',
        body: '研究者用红外热成像发现，托哥巨嘴鸟能改变流经喙部的血流，让这块缺少羽毛覆盖的表面参与散热。散热量会随环境温度等条件变化。',
      },
      {
        key: 'feeding',
        label: '果实与小动物',
        title: '用长喙够到枝端果实',
        body: '它主要吃果实，也会取食昆虫、鸟卵和小型脊椎动物。长喙可以够到细枝上的果实；吞下果肉后，它可能把种子带到别处，参与植物传播。',
      },
      {
        key: 'nesting',
        label: '树洞育雏',
        title: '留住可以筑巢的树',
        body: '托哥巨嘴鸟利用树洞繁殖，双亲都会参与照顾后代。它常生活在较开阔的林地和稀树草原，果树与带洞的树木都是重要资源。',
      },
      {
        key: 'conservation',
        label: '保护与贸易',
        title: '无危也需要留意捕捉',
        body: '2025 年 IUCN 全球评估将托哥巨嘴鸟列为无危，趋势下降。栖息地改变和捕捉贸易需要持续关注，保护工作包括保留食物树、巢树，并追踪贸易来源。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '南美洲的巨嘴鸟',
        body: 'P.L.S.Müller 于 1776 年描述了这个物种，现用学名为 Ramphastos toco。它原生于南美洲，中文名里的“托哥”并不指非洲多哥。看似沉重的巨喙内部有轻巧的骨质网架，研究者还用红外热成像发现它能调节喙部血流来散热。',
      },
    ],
    "keyFacts": [
      '原生于南美洲，巨喙橙黄、末端有黑斑。',
      '巨喙外层为角蛋白，内部有轻巧的骨质网架。',
      '能调节喙部血流，利用喙表面散热。',
      '以果实为主食，也吃昆虫和小动物。',
      '在树洞繁殖，双亲共同照顾后代。',
    ],
    "threats": [
      "栖息地改变及巢树减少。",
      "为宠物贸易捕捉野生个体。"
    ],
    "conservationActions": [
      "保留果树、巢树和林地联系。",
      "监测种群与贸易，减少非法捕捉。"
    ],
    "featuredStats": [
      {
        "key": "mass",
        "label": "成鸟体重约",
        "value": "592—760",
        "unit": "克"
      },
      {
        "key": "bill",
        "label": "喙部作用",
        "value": "取食、散热"
      }
    ],
    "sources": [
      {
        "title": "IOC World Bird List — 巨嘴鸟分类",
        "url": "https://www.worldbirdnames.org/new/bow/jacamars/",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Animal Diversity Web — 托哥巨嘴鸟",
        "url": "https://animaldiversity.org/accounts/Ramphastos_toco/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "UC San Diego — 巨嘴鸟喙的轻质结构",
        "url": "https://jacobsschool.ucsd.edu/news/release/417",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Tattersall 等 — 喙部血流与热交换",
        "url": "https://doi.org/10.1126/science.1175553",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "BirdLife International — 托哥巨嘴鸟全球档案",
        "url": "https://datazone.birdlife.org/species/factsheet/toco-toucan-ramphastos-toco",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "United Parks — 托哥巨嘴鸟与 2017 年评估引用",
        "url": "https://seaworld.org/animals/facts/birds/toco-toucan/",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "BirdLife DataZone — 公开评估历史数据",
        "url": "https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/876/history",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Ramphastos toco 的命名作者与年份',
        url: 'https://www.gbif.org/species/2478765',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/toco-toucan/01-cover.webp",
      "alt": "托哥巨嘴鸟位于画面右侧远处，完整身体及可见附肢周围留有背景。",
      "focalPoint": {
        "x": 0.95,
        "y": 0.4
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/toco-toucan/02-body.webp",
          "title": "黑身、白喉与橙黄大喙",
          "alt": "托哥巨嘴鸟侧身栖在枝头，完整大喙和尾羽可见。",
          "caption": "AI 生成外形重建；不用于测量喙部比例。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/toco-toucan/03-bill.webp",
          "title": "喙和眼周皮肤",
          "alt": "托哥巨嘴鸟头部近景显示橙黄喙、黑色端斑及眼周裸皮。",
          "caption": "AI 生成外观近景；不属于热成像或内部结构图。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/toco-toucan/04-feeding.webp",
          "title": "伸喙取果",
          "alt": "托哥巨嘴鸟用大喙伸向枝头果实。",
          "caption": "AI 生成取食情景；植物未作物种级鉴定。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/toco-toucan/05-nest.webp",
          "title": "树洞旁的成鸟",
          "alt": "托哥巨嘴鸟栖在树干空洞附近。",
          "caption": "AI 生成繁殖生境情景；不对应真实巢穴监测。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/toco-toucan/06-habitat.webp",
          "title": "巴西的开阔林地",
          "alt": "稀树草原与果树之间有远处的托哥巨嘴鸟。",
          "caption": "AI 生成生境重建；不对应定位野外照片。",
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
