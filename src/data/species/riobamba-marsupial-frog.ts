import type { Species } from '../../types/species.ts';

const profile = {
  "id": "riobamba-marsupial-frog",
  "slug": "riobamba-marsupial-frog",
  "names": {
    "zh": "囊蛙",
    "en": "Riobamba Marsupial Frog",
    "aliases": [
      "安第斯囊蛙",
      "里奥班巴囊蛙"
    ]
  },
  "scientificName": "Gastrotheca riobambae",
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
      "scientificName": "Hemiphractidae",
      "zhName": "扩角蛙科"
    },
    "genus": {
      "scientificName": "Gastrotheca",
      "zhName": "囊蛙属"
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
    "assessor": "采用 Zootier Lexikon 所引 IUCN 2023 发布记录的 VU；该文说明评估于 2021 年进行。旧资料 EN 和厄瓜多尔地方等级不替代这份全球记录；全球趋势未录入。",
    "assessedYear": 2021
  },
  "distribution": {
    "realms": [
      "terrestrial",
      "freshwater"
    ],
    "continents": [
      "南美洲"
    ],
    "regions": [
      "厄瓜多尔安第斯山区"
    ],
    "countries": [
      "厄瓜多尔"
    ],
    "range": "厄瓜多尔北部和中部的安第斯山区与山间谷地，是厄瓜多尔特有种。"
  },
  "habitats": [
    {
      "name": "安第斯山地灌丛与湿地",
      "realm": "terrestrial",
      "description": '生活在安第斯山地植被、草地与邻近水域的环境，也利用部分农地和城郊地带。',
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
    "description": "食物包括昆虫、其他小型无脊椎动物。"
  },
  "tags": [
    "囊蛙",
    "安第斯山地灌丛与湿地"
  ],
  "summary": '囊蛙生活在厄瓜多尔安第斯山区，雌蛙背部皮肤下有育儿袋，胚胎长成蝌蚪后还需进入水中。',
  "description": '囊蛙 Gastrotheca riobambae 是厄瓜多尔特有种，生活在北部和中部的安第斯山地与谷地，利用灌丛、草地、部分农地和城郊环境，取食昆虫等小型无脊椎动物。雌蛙的背部皮肤下有育儿袋，胚胎在袋中发育到蝌蚪阶段，离袋后继续在水中生长。背色可绿可褐，常带深斑。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '先看看蛙的背部',
      body: '雌蛙的育儿袋位于背部皮肤下，外面的皮肤不透明。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '背上的育儿袋',
      body: '育儿袋为胚胎提供发育的场所，胚胎在袋中长到蝌蚪阶段。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '蝌蚪来到水里',
      body: '胚胎在袋里发育到蝌蚪阶段，离袋后还要在水中生长。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '叶片边缘的脚趾',
      body: '成蛙会停在低矮植被上，脚趾末端较圆。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '山地的小水塘',
      body: '成蛙需要山地植被，蝌蚪还需要水域，两种生活环境都应保留。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保护安第斯山区的植被与小水域，支持当地两栖动物保育项目。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '旧名留下里奥班巴的地点',
      body: 'Fowler 在 1913 年以 Hyla riobambae 发表了本种的科学名称，命名标本来自厄瓜多尔里奥班巴。后来它被归入囊蛙属，现名为 Gastrotheca riobambae。“囊蛙”对应雌蛙背部的育儿袋，名称里的 riobambae 则保留了里奥班巴这个地点的联系。',
    },
  ],
  "keyFacts": [
    '雌蛙的育儿袋位于背部皮肤下，外面的皮肤不透明。',
    '育儿袋为胚胎提供发育的场所，胚胎在袋中长到蝌蚪阶段。',
    '胚胎在袋里发育到蝌蚪阶段，离袋后还要在水中生长。',
    '成蛙会停在低矮植被上，脚趾末端较圆。',
    '成蛙需要山地植被，蝌蚪还需要水域，两种生活环境都应保留。',
  ],
  "threats": [
    "城镇和农业扩展造成栖息地损失",
    "水体污染与农药使用"
  ],
  "conservationActions": [
    "保护安第斯山区的植被与小水域，支持当地两栖动物保育项目。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "安第斯山地灌丛与湿地"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "先看看蛙的背部"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "易危",
      "note": "采用 Zootier Lexikon 所引 IUCN 2023 发布记录的 VU；该文说明评估于 2021 年进行。旧资料 EN 和厄瓜多尔地方等级不替代这份全球记录；全球趋势未录入。"
    }
  ],
  "media": {
    "image": "./images/species/riobamba-marsupial-frog/01-cover.webp",
    "alt": "囊蛙及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/riobamba-marsupial-frog/02-observation.webp",
        "alt": "囊蛙：先看看蛙的背部",
        "title": "先看看蛙的背部",
        "caption": 'AI 生成科学情景重建。沿着头后方找到背部。雌蛙的育儿袋藏在背部皮肤下，外观图看不到里面的胚胎。采用绿褐相间的一种外形。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/riobamba-marsupial-frog/03-observation.webp",
        "alt": "囊蛙：背上的育儿袋",
        "title": "背上的育儿袋",
        "caption": "AI 生成位置示意图。位置示意图：浅色窗口表示雌蛙背部皮肤下的育儿袋，里面的圆点表示胚胎。窗口为解释而画，真实皮肤并不透明；数量、排列和比例均作简化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/riobamba-marsupial-frog/04-observation.webp",
        "alt": "囊蛙：蝌蚪来到水里",
        "title": "蝌蚪来到水里",
        "caption": "AI 生成科学情景重建。胚胎在袋里发育到蝌蚪阶段，离袋后还要在水中继续生长。重建图表示水中阶段，不供幼体鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/riobamba-marsupial-frog/05-observation.webp",
        "alt": "囊蛙：叶片边缘的脚趾",
        "title": "叶片边缘的脚趾",
        "caption": "AI 生成科学情景重建。找找接触叶片的圆形趾端。成蛙会停在低矮植被上。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/riobamba-marsupial-frog/06-observation.webp",
        "alt": "囊蛙：山地的小水塘",
        "title": "山地的小水塘",
        "caption": "AI 生成科学情景重建。看看水塘旁的草和灌木。保护成蛙生活的植被，也要保留蝌蚪生长的水域。",
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
      "title": "AMNH Amphibian Species of the World：接受学名、分类与分布",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Hemiphractidae/Gastrotheca/Gastrotheca-riobambae",
      "kind": "taxonomy",
      "accessedAt": "2026-10-01"
    },
    {
      "title": "del Pino 等：育儿袋与胚胎发育研究",
      "url": "https://pubmed.ncbi.nlm.nih.gov/29324196/",
      "kind": "ecology",
      "accessedAt": "2026-10-01"
    },
    {
      "title": "Quito Zoo / Amphibian Ark：保育与食性记录",
      "url": "https://www.amphibianark.org/fileadmin/uploads/aark/Newsletters/Newsletters_ENG/AArk-newsletter-31.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-01"
    },
    {
      "title": "Zootier Lexikon：IUCN 更新及外形",
      "url": "https://www.zootier-lexikon.org/lurche-amphibia/laub-ried-und-beutelfroesche/rio-bamba-beutelfrosch-gastrotheca-riobambae",
      "kind": "conservation",
      "accessedAt": "2026-10-01"
    },
    {
      "title": "IUCN 2023 全球记录（全文未取得）",
      "url": "https://www.iucnredlist.org/species/55357/98647877",
      "kind": "conservation",
      "accessedAt": "2026-10-01"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-01",
  "updatedAt": "2026-10-01"
} as const satisfies Species;

export default profile;
