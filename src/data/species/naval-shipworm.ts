import type { Species } from '../../types/species.ts';

const profile = {
  "id": "naval-shipworm",
  "slug": "naval-shipworm",
  "names": {
    "zh": "船蛆",
    "en": "Naval Shipworm"
  },
  "scientificName": "Teredo navalis",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Mollusca",
      "zhName": "软体动物门"
    },
    "class": {
      "scientificName": "Bivalvia",
      "zhName": "双壳纲"
    },
    "order": {
      "scientificName": "Myida",
      "zhName": "海螂目"
    },
    "family": {
      "scientificName": "Teredinidae",
      "zhName": "船蛆科"
    },
    "genus": {
      "scientificName": "Teredo",
      "zhName": "船蛆属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "NE",
    "label": {
      "zh": "未评估",
      "en": "Not Evaluated"
    },
    "trend": "unknown",
    "assessor": "尚未确认可引用的 IUCN 全球评估；NE 暂表示资料缺口，不等于确认从未评估，也不能据此判断种群安全。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "温带与暖水沿岸的广泛记录海域"
    ],
    "countries": [],
    "range": "史密森尼 NEMESIS 记录本种在多个海域的传播和分布，但其原生范围仍有争议。历史船运和漂木传播使原生、引入与来源不明记录难以区分，档案不把全球记录直接写成原生范围。"
  },
  "habitats": [
    {
      "name": "海水中的木材与漂木",
      "realm": "marine",
      "description": "史密森尼 NEMESIS 记录本种在多个海域的传播和分布，但其原生范围仍有争议。历史船运和漂木传播使原生、引入与来源不明记录难以区分，档案不把全球记录直接写成原生范围。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "detritivore"
    ],
    "foods": [
      "木材",
      "水中食物颗粒"
    ],
    "description": "前端小壳刮取木屑，鳃中的共生细菌帮助处理木材纤维；它也可以摄取水中的食物颗粒。水管与外界海水连通，鳃参与交换。共读时可以沿剖面从小壳找到长身体，再找到通向海水的水管。"
  },
  "tags": [
    "船蛆",
    "海水中的木材与漂木"
  ],
  "summary": "船蛆是钻进木材生活的双壳类，细长身体前端只有两片小壳，后端的水管连着海水。",
  "description": "它的身体细长柔软，两片小壳只覆盖前端，壳面适合刮削木材。身体的大部分藏在木材隧道内，后端有一对水管和可关闭洞口的小板。木材保护了软身体，不能照普通蛤蜊的外形画成两片包住全身的大壳。",
  "storySections": [
    {
      "key": "appearance",
      "label": "身体外观",
      "title": "壳与软身体",
      "body": "它的身体细长柔软，两片小壳只覆盖前端，壳面适合刮削木材。身体的大部分藏在木材隧道内，后端有一对水管和可关闭洞口的小板。木材保护了软身体，不能照普通蛤蜊的外形画成两片包住全身的大壳。"
    },
    {
      "key": "habitat",
      "label": "栖息环境",
      "title": "海水中的木材与漂木",
      "body": "史密森尼 NEMESIS 记录本种在多个海域的传播和分布，但其原生范围仍有争议。历史船运和漂木传播使原生、引入与来源不明记录难以区分，档案不把全球记录直接写成原生范围。"
    },
    {
      "key": "feeding",
      "label": "取食",
      "title": "食物与摄食结构",
      "body": "前端小壳刮取木屑，鳃中的共生细菌帮助处理木材纤维；它也可以摄取水中的食物颗粒。水管与外界海水连通，鳃参与交换。共读时可以沿剖面从小壳找到长身体，再找到通向海水的水管。"
    },
    {
      "key": "life-cycle",
      "label": "生活史",
      "title": "阶段与观察依据",
      "body": "Woods Hole 的本种研究记录雌性在鳃区保留胚胎与早期幼体，随后释放浮游面盘幼体，幼体找到木材后定居并钻入。发育时长和繁殖季节来自特定地点与条件，不能作为所有海域的固定日程。生活史图分别放大幼体与成体，不按实测比例。"
    },
    {
      "key": "taxonomy",
      "label": "分类归属",
      "title": "用学名定位物种",
      "body": "船蛆的学名为 Teredo navalis，本档案按 GBIF 分类链归入双壳纲、海螂目、船蛆科。少见科属的中文名称用于项目展示，完整科学名称提供可追溯的定位。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "保护资料与共读观察",
      "body": "尚未确认可引用的 IUCN 全球评估；NE 暂表示资料缺口，不等于确认从未评估，也不能据此判断种群安全。共读时可以在木材剖面里找小壳、长身体和通海水的水管。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "历史记录与学名",
      "body": "Linnaeus 于 1758 年命名 Teredo navalis，种加词 navalis 与船舶有关。人们从木船和海港木构件的蛀蚀认识船蛆，名称里的“蛆”不代表昆虫幼虫。历史记录有时把不同船蛆混用，本档案用学名限定物种，并采用 NEMESIS 对原生范围和传播记录的谨慎说明。"
    }
  ],
  "keyFacts": [
    "船蛆属于双壳纲。",
    "两片小壳位于身体前端。",
    "身体藏在木材隧道中。",
    "幼体与成体外形不同。"
  ],
  "threats": [],
  "conservationActions": [
    "共读时使用研究影像或示意，减少对动物及其环境的干扰"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "共读观察",
      "value": "在木材剖面里找小壳、长身体和通海水的水管。"
    }
  ],
  "media": {
    "image": "./images/species/naval-shipworm/01-cover.webp",
    "alt": "船蛆及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/naval-shipworm/02-observation.webp",
        "title": "木材里的长身体",
        "alt": "船蛆：木材里的长身体，AI 生成科学情景重建",
        "caption": "剖面结构重建，整个身体藏在隧道中；非实测比例，不是实际解剖照片。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/naval-shipworm/03-observation.webp",
        "title": "前端的两片小壳",
        "alt": "船蛆：前端的两片小壳，AI 生成科学情景重建",
        "caption": "前端结构放大示意，壳面刮削木材，局部齿纹不用于精确比较。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/naval-shipworm/04-observation.webp",
        "title": "洞口的水管",
        "alt": "船蛆：洞口的水管，AI 生成科学情景重建",
        "caption": "后端水管与小板放大重建，不能从静图判断水流方向。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/naval-shipworm/05-observation.webp",
        "title": "留下的隧道",
        "alt": "船蛆：留下的隧道，AI 生成科学情景重建",
        "caption": "空木材剖面重建，多个隧道不表示同一个动物的多个身体。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/naval-shipworm/06-observation.webp",
        "title": "幼体与成体",
        "alt": "船蛆：幼体与成体，AI 生成科学情景重建",
        "caption": "浮游面盘幼体和木材中的成体并置示意；分别放大，非实测比例。",
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
      "title": "GBIF：接受名称与分类链",
      "url": "https://www.gbif.org/species/2288847",
      "kind": "taxonomy",
      "accessedAt": "2026-10-12"
    },
    {
      "title": "史密森尼 NEMESIS：船蛆形态与分布",
      "url": "https://invasions.si.edu/nemesis/species_summary/81862",
      "kind": "general",
      "accessedAt": "2026-10-12"
    },
    {
      "title": "哈佛自然历史博物馆：船蛆结构与共生",
      "url": "https://whatsinaname.hmnh.harvard.edu/shipworm",
      "kind": "ecology",
      "accessedAt": "2026-10-12"
    },
    {
      "title": "Woods Hole 船蛆生活史原始研究",
      "url": "https://www.journals.uchicago.edu/doi/10.2307/1537080",
      "kind": "ecology",
      "accessedAt": "2026-10-12"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-12",
  "updatedAt": "2026-10-12"
} as const satisfies Species;

export default profile;
