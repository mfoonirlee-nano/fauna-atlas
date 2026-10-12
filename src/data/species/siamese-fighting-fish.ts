import type { Species } from '../../types/species.ts';

const profile = {
    "id": "siamese-fighting-fish",
    "slug": "siamese-fighting-fish",
    "names": {
      "zh": "暹罗斗鱼",
      "en": "Siamese Fighting Fish",
      "aliases": []
    },
    "scientificName": "Betta splendens",
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
        "scientificName": "Actinopterygii",
        "zhName": "辐鳍鱼纲"
      },
      "order": {
        "scientificName": "Anabantiformes",
        "zhName": "攀鲈目"
      },
      "family": {
        "scientificName": "Osphronemidae",
        "zhName": "丝足鲈科"
      },
      "genus": {
        "scientificName": "Betta",
        "zhName": "斗鱼属"
      }
    },
    "conservation": {
      "system": "IUCN Red List",
      "code": "VU",
      "label": {
        "zh": "易危",
        "en": "Vulnerable"
      },
      "trend": "unknown",
      "assessor": "Vidthayanon, C.",
      "assessedYear": 2011,
      "criteria": "A2ace"
    },
    "distribution": {
      "realms": [
        "freshwater"
      ],
      "continents": [
        "亚洲"
      ],
      "regions": [
        "泰国低地淡水湿地"
      ],
      "countries": [
        "泰国"
      ],
      "range": "野生种群原生于泰国低地的浅水湿地。世界各地的观赏饲养及引入记录不表示原生分布；斗鱼近缘种和杂交观赏品系也不能直接并入本种野生范围。",
      "center": {
        "lat": 14,
        "lng": 101
      }
    },
    "habitats": [
      {
        "name": "植被茂密的浅水湿地",
        "realm": "freshwater",
        "description": "利用低地沼泽、池塘和缓流水域，水草与水面空间都是生活环境的一部分。",
        "isPrimary": true
      }
    ],
    "measurements": {},
    "metrics": {},
    "diet": {
      "types": [
        "carnivore",
        "insectivore"
      ],
      "foods": [
        "昆虫幼虫",
        "小型甲壳动物",
        "其他水生小动物"
      ],
      "description": "捕食水中及水面的小动物，上翘的口适合在靠近水面的地方取食。"
    },
    "tags": [
      "植被茂密的浅水湿地",
      "易危",
      "吞气呼吸"
    ],
    "summary": "暹罗斗鱼会游到水面吞咽空气，利用鳃上方的迷鳃器交换气体，帮助它在含氧较低的浅水中生活。",
    "description": "野生型暹罗斗鱼的鳍较短，褐色身体带有蓝绿光泽及红色鳍部。水族店中飘逸的大尾与鲜艳配色多来自人工选育。",
    "storySections": [
      {
        key: 'identity',
        label: '野生与观赏',
        title: '短鳍也是斗鱼的样子',
        body: '野生型暹罗斗鱼通常短鳍，褐色身体带蓝绿光泽，鳍部带红色。家养观赏品系经选育形成了长鳍和更多鲜艳配色。',
      },
      {
        key: 'breathing',
        label: '水面吞气',
        title: '迷鳃器补充氧气',
        body: '鳃上方的迷鳃器具有适合气体交换的表面，让它能利用吞入的空气。它仍然是一种水生鱼类，这种能力不能理解为可以长期离水或不需要合适水质。',
      },
      {
        key: 'territory',
        label: '守住位置',
        title: '雄鱼会展示和驱赶对手',
        body: '雄鱼可能张开鱼鳍、展开鳃盖，向同类雄鱼展示，并驱赶入侵者。领地行为不等于需要人为安排打斗，观察时应避免为了展示而持续刺激动物。',
      },
      {
        key: 'nest',
        label: '水面的泡巢',
        title: '雄鱼吹泡并照看卵',
        body: '繁殖时雄鱼在水面聚集带黏液的气泡，形成泡巢。产卵后，它会把卵送入巢中并守护；一小片泡沫本身并不能证明里面已有受精卵。',
      },
      {
        key: 'feeding',
        label: '靠近水面觅食',
        title: '用上翘的口捕捉小动物',
        body: '它捕食昆虫幼虫和其他小型水生动物，上翘的口适合靠近水面取食。湿地中茂密的植物同时提供遮蔽和食物来源。',
      },
      {
        key: 'conservation',
        label: '保护野生斗鱼',
        title: '家养常见，野生仍受威胁',
        body: 'IUCN 2011 年评估将本种列为易危。湿地改造、污染和野生捕捉影响自然种群，观赏养殖数量不能抵消这些压力；不要把家养斗鱼释放进野生种群的水域。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '短鳍野生鱼与长鳍观赏鱼',
        body: 'Regan 于 1910 年描述了这个物种，现用学名为 Betta splendens。野生种群来自泰国低地湿地，“暹罗”是名字中保留的地域称呼。雄鱼会展开鳍和鳃盖驱赶对手；后来选育形成的长鳍品系，与野生型的短鳍外形相差很大。',
      },
    ],
    "keyFacts": [
      '野生型通常短鳍，家养长鳍多来自人工选育。',
      '迷鳃器让它能利用从水面吞入的空气。',
      '雄鱼会展开鱼鳍和鳃盖，展示及驱赶对手。',
      '雄鱼吹泡筑巢，把卵送入巢中并守护。',
      '上翘的口适合捕捉靠近水面的小动物。',
    ],
    "threats": [
      "低地湿地改造与污染。",
      "野生捕捉及家养个体进入自然水域。"
    ],
    "conservationActions": [
      "保留浅水湿地及水生植被。",
      "不释放家养斗鱼，不为打斗而刺激动物。"
    ],
    "featuredStats": [
      {
        "key": "trait",
        "label": "观察重点",
        "value": "吞气呼吸"
      },
      {
        "key": "habitat",
        "label": "主要环境",
        "value": "植被茂密的浅水湿地"
      }
    ],
    "sources": [
      {
        "title": "ADW — 暹罗斗鱼行为与繁殖",
        "url": "https://animaldiversity.org/accounts/Betta_splendens/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "FishBase — IUCN 全球评估记录",
        "url": "https://fishbase.se/country/CountrySpeciesSummary.php?c_code=418&genusname=Betta&speciesname=splendens",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "ETYFish — 攀鲈目分类",
        "url": "https://etyfish.org/anabantiformes/",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "University of Florida IFAS — 迷鳃器与泡巢",
        "url": "https://ask.ifas.ufl.edu/publication/FA212",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Betta splendens 的命名作者与年份',
        url: 'https://www.gbif.org/species/2393998',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/siamese-fighting-fish/01-cover.webp",
      "alt": "暹罗斗鱼位于画面右侧，完整主体周围保留环境。",
      "focalPoint": {
        "x": 0.9,
        "y": 0.42
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/siamese-fighting-fish/02-body.webp",
          "title": "野生型短鳍雄鱼",
          "alt": "野生型暹罗斗鱼雄鱼侧身游动，鱼鳍较短。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/siamese-fighting-fish/03-detail.webp",
          "title": "到水面吞气",
          "alt": "暹罗斗鱼将口贴近水面吞气。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/siamese-fighting-fish/04-behavior.webp",
          "title": "泡巢下的雄鱼",
          "alt": "暹罗斗鱼雄鱼停在水面的泡巢下方。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/siamese-fighting-fish/05-life.webp",
          "title": "雌雄外形对照",
          "alt": "左侧褐色短鳍雌鱼与右侧色彩较明显的雄鱼在水草间相对。",
          "caption": "AI 生成科学情景重建，展示雌雄外形差异，不表示长期成对生活。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/siamese-fighting-fish/06-habitat.webp",
          "title": "泰国低地湿地",
          "alt": "泰国低地有草本植被的浅水湿地。",
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
