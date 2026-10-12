import type { Species } from '../../types/species.ts';

const profile = {
  "id": "giraffe-weevil",
  "slug": "giraffe-weevil",
  "names": {
    "zh": "长颈卷叶象",
    "en": "Giraffe Weevil"
  },
  "scientificName": "Trachelophorus giraffa",
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
      "scientificName": "Insecta",
      "zhName": "昆虫纲"
    },
    "order": {
      "scientificName": "Coleoptera",
      "zhName": "鞘翅目"
    },
    "family": {
      "scientificName": "Attelabidae",
      "zhName": "卷象科"
    },
    "genus": {
      "scientificName": "Trachelophorus",
      "zhName": "长颈卷象属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "NT",
    "label": {
      "zh": "近危",
      "en": "Near Threatened"
    },
    "trend": "unknown",
    "assessor": 'Englefield（2021）全球评估引文记录近危（NT），GBIF 展示相同等级；评估日期、标准及种群趋势尚未核实。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "非洲"
    ],
    "regions": [
      "马达加斯加"
    ],
    "countries": [],
    "range": '马达加斯加特有，生活在森林树木上。它与新西兰的长颈象甲 Lasiorhynchus barbicornis 是不同物种。'
  },
  "habitats": [
    {
      "name": "马达加斯加森林树叶间",
      "realm": "terrestrial",
      "description": '生活在马达加斯加森林树木的叶片间，寄主叶片供取食，也供雌虫制作叶卷。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "寄主树叶"
    ],
    "description": "成虫取食寄主树叶，幼虫在雌虫制作的叶卷中利用叶片作为食物。"
  },
  "tags": [
    "长颈卷叶象",
    "马达加斯加森林树叶间"
  ],
  "summary": '长颈卷叶象只生活在马达加斯加，雄虫颈部很长，雌虫把叶片卷成幼虫的食物和藏身处。',
  "description": '长颈卷叶象是马达加斯加森林中的特有甲虫，身体黑色，鞘翅红色。雄虫头部和身体间的颈状部分明显长于雌虫，能用于雄虫间的竞争。雌虫把寄主叶片卷起来，在叶卷里留下卵，孵化的幼虫取食叶片；成虫也吃寄主叶。它属于卷象类，这里的“颈”是外形称呼，不表示有脊椎动物的颈椎。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '雄虫的长颈',
      body: '雄虫的小脑袋与身体之间有细长的黑色颈状部分，雄虫在竞争中会使用长颈。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '雌虫的颈短一些',
      body: '雌虫颈部比雄虫短得多，卷叶并留下卵的是雌虫。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '把叶缘卷起来',
      body: '雌虫把叶片卷成保护卵的叶卷，制作过程包含多个动作。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '叶卷里的小生命',
      body: '卵留在卷好的叶片中，幼虫孵化后在里面取食叶片。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '生活在树叶间',
      body: '红色鞘翅与黑色身体相间，本种只在马达加斯加生活。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '在原处观察',
      body: '保护马达加斯加森林和寄主树木，不拆开叶卷。Englefield（2021）全球评估引文记录近危（NT），GBIF 展示相同等级；评估日期、标准及种群趋势尚未核实。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '最初名称为 Apoderus giraffa',
      body: '卷象分类目录记载，Jekel 在 1860 年以 Apoderus giraffa 命名本种，现用名为 Trachelophorus giraffa。“长颈”对应雄虫伸长的颈状部分，雌虫的这一部分短得多。新西兰也有俗称长颈象甲的 Lasiorhynchus barbicornis，它与这只马达加斯加甲虫是不同物种。',
    },
  ],
  "keyFacts": [
    '雄虫的小脑袋与身体之间有细长的黑色颈状部分，雄虫在竞争中会使用长颈。',
    '雌虫颈部比雄虫短得多，卷叶并留下卵的是雌虫。',
    '雌虫把叶片卷成保护卵的叶卷，制作过程包含多个动作。',
    '卵留在卷好的叶片中，幼虫孵化后在里面取食叶片。',
    '红色鞘翅与黑色身体相间，本种只在马达加斯加生活。',
  ],
  "threats": [
    '栖息环境改变；全球种群趋势尚不明确。',
  ],
  "conservationActions": [
    "保留马达加斯加的森林和寄主树木，不采集野生个体或拆开叶卷。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "栖息环境",
      "value": "马达加斯加森林树叶间"
    },
    {
      "key": "observation",
      "label": "观察提示",
      "value": "雄虫的长颈"
    },
    {
      "key": "status",
      "label": "全球保护等级",
      "value": "近危",
      "note": "Englefield（2021）全球评估引文，GBIF 展示 NT；红色名录原页本次访问受限，未补填评估日期、标准或趋势。"
    }
  ],
  "media": {
    "image": "./images/species/giraffe-weevil/01-cover.webp",
    "alt": "长颈卷叶象及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/giraffe-weevil/02-observation.webp",
        "title": "雄虫的长颈",
        "alt": "长颈卷叶象：雄虫的长颈",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。雄虫的小脑袋与身体之间有细长的黑色部分。雄虫会在竞争中使用长颈，单张静态图不展示动作过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giraffe-weevil/03-observation.webp",
        "title": "雌虫的颈短一些",
        "alt": "长颈卷叶象：雌虫的颈短一些",
        "caption": 'AI 生成科学情景重建。放大展示，非实测比例。雌虫也有黑色颈部，但比雄虫短得多。两张观察图分别展示雌雄，放大倍率不同，不能据图量出比例。 ',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giraffe-weevil/04-observation.webp",
        "title": "把叶缘卷起来",
        "alt": "长颈卷叶象：把叶缘卷起来",
        "caption": 'AI 生成科学情景重建。放大展示，非实测比例。雌虫把叶片卷成保护卵的叶卷。图示卷叶过程中的一个位置，不表示一次就能完成。 ',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giraffe-weevil/05-observation.webp",
        "title": "叶卷里的小生命",
        "alt": "长颈卷叶象：叶卷里的小生命",
        "caption": 'AI 生成科学情景重建。放大展示，非实测比例。雌虫把卵留在卷好的叶片中，幼虫孵化后取食叶片。画面只展示叶卷外形，没有剖开真实叶卷。 ',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giraffe-weevil/06-observation.webp",
        "title": "生活在树叶间",
        "alt": "长颈卷叶象：生活在树叶间",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。红色鞘翅与黑色身体形成鲜明对照。它生活在马达加斯加森林中，不能只凭“长颈”把其他象甲认作本种。",
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
      "title": "旧金山动物园：雌雄差异与卷叶行为",
      "url": "https://www.sfzoo.org/pdf/education/SLP%20docs/SLP%20-%20Invertebrates%20Information%20Sheets.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-07"
    },
    {
      "title": "GBIF：长颈卷叶象及 NT 等级",
      "url": "https://www.gbif.org/taxon/7CLDD",
      "kind": "taxonomy",
      "accessedAt": "2026-10-07"
    },
    {
      "title": "IUCN：Englefield 2021 全球评估引文（本次原页访问受限）",
      "url": "https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T193348632A193724158.en",
      "kind": "conservation",
      "accessedAt": "2026-10-07"
    },
    {
      title: 'Alonso-Zarazaga 与 Lyal（1999）：卷象总科世界分类目录',
      url: 'https://www.zin.ru/animalia/coleoptera/pdf/alonso_zarazaga_1999_weevil_catalogue.pdf',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-07",
  "updatedAt": "2026-10-07"
} as const satisfies Species;

export default profile;
