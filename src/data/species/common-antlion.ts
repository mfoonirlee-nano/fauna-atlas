import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-antlion",
  "slug": "common-antlion",
  "names": {
    "zh": "蚁蛉",
    "en": "Common Antlion"
  },
  "scientificName": "Myrmeleon formicarius",
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
      "scientificName": "Neuroptera",
      "zhName": "脉翅目"
    },
    "family": {
      "scientificName": "Myrmeleontidae",
      "zhName": "蚁蛉科"
    },
    "genus": {
      "scientificName": "Myrmeleon",
      "zhName": "蚁蛉属"
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
    "assessor": '尚未核实本种的全球 IUCN 评估，种群变化趋势也不明确。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲",
      "亚洲"
    ],
    "regions": [
      "欧洲至亚洲的旧北区沙地"
    ],
    "countries": [],
    "range": "分布于旧北区，欧洲和亚洲均有记录。这里的蚁蛉特指 Myrmeleon formicarius，不把其他蚁蛉的分布或全部行为并入本种。"
  },
  "habitats": [
    {
      "name": "干燥疏松沙地",
      "realm": "terrestrial",
      "description": '幼虫利用欧洲和亚洲的松散沙质基底挖陷阱，成虫可在附近草茎等植物上停歇。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "蚂蚁等小型昆虫（幼虫）"
    ],
    "description": "幼虫用弯曲的颚捕捉落入沙坑的小型昆虫；本档案的捕食观察限定于幼虫，不据此推断成虫的完整食谱。"
  },
  "tags": [
    "蚁蛉",
    "干燥疏松沙地"
  ],
  "summary": '蚁蛉幼虫在松散沙地挖漏斗形陷阱，用弯颚捕捉落入的小虫，成虫则有细长身体和透明翅膀。',
  "description": '本种蚁蛉 Myrmeleon formicarius 分布于旧北区，欧洲和亚洲都有记录。幼虫常叫蚁狮，身体短壮、前端有一对弯颚，在松散沙地挖漏斗形坑，藏在坑底捕捉掉入的小型昆虫。挖坑和维持陷阱时，它会用头部抛出沙粒。成虫身体细长，透明翅膀带网状翅脉，触角末端较粗，可在沙地附近草茎上停歇。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '漏斗形的小坑',
      body: '沙坑四周向中心倾斜，幼虫藏在底部，仅有头前的颚可能露出。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '幼虫的弯颚',
      body: '幼虫身体短壮，前端有一对弯曲的颚，能捕捉落入坑中的小虫。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '把沙粒向外抛',
      body: '幼虫用头部动作抛出沙粒，挖坑或维持陷阱。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '成虫的短触角',
      body: '成虫触角末端较粗，透明翅膀上有网状翅脉。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '沙地边的成虫',
      body: '成虫可以停在沙地附近的草茎上，细长的外形与短壮幼虫不同。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '留在原处观察',
      body: '绕开沙坑观察，不灌水、拨沙或投放活虫。尚未核实本种的全球 IUCN 评估，种群变化趋势也不明确。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '科学名称与“蚁狮”所指的阶段',
      body: '林奈在 1767 年发表了本种的科学描述，现用名为 Myrmeleon formicarius。中文“蚁狮”常指捕食小虫的幼虫：它藏在沙坑底，用弯颚抓住猎物。羽化后的成虫有细长身体和翅膀，沙坑捕食的观察属于幼虫阶段，不能据此推断成虫的完整食谱。',
    },
  ],
  "keyFacts": [
    '沙坑四周向中心倾斜，幼虫藏在底部，仅有头前的颚可能露出。',
    '幼虫身体短壮，前端有一对弯曲的颚，能捕捉落入坑中的小虫。',
    '幼虫用头部动作抛出沙粒，挖坑或维持陷阱。',
    '成虫触角末端较粗，透明翅膀上有网状翅脉。',
    '成虫可以停在沙地附近的草茎上，细长的外形与短壮幼虫不同。',
  ],
  "threats": [
    '裸露沙地及其周围植被改变可能影响栖息处；全球种群趋势尚不明确。',
  ],
  "conservationActions": [
    "绕开沙坑观察，不灌水、不拨沙，也不投放活虫。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "栖息环境",
      "value": "干燥疏松沙地"
    },
    {
      "key": "observation",
      "label": "观察提示",
      "value": "漏斗形的小坑"
    },
    {
      "key": "status",
      "label": "全球保护等级",
      "value": "未评估",
      "note": "本次未核实全球物种级 IUCN 评估，沿用项目 NE 占位口径；不表示没有保护风险。"
    }
  ],
  "media": {
    "image": "./images/species/common-antlion/01-cover.webp",
    "alt": "蚁蛉及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-antlion/02-observation.webp",
        "title": "漏斗形的小坑",
        "alt": "蚁蛉：漏斗形的小坑",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。沙坑的四周向中心倾斜，幼虫藏在底部。找找坑底的颚尖，不把整个沙坑当作幼虫身体。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-antlion/03-observation.webp",
        "title": "幼虫的弯颚",
        "alt": "蚁蛉：幼虫的弯颚",
        "caption": 'AI 生成科学情景重建。放大展示，非实测比例。幼虫身体短壮，前端有一对弯曲的颚。此图是外形重建，不是为了拍照把野外幼虫挖出来。 ',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-antlion/04-observation.webp",
        "title": "把沙粒向外抛",
        "alt": "蚁蛉：把沙粒向外抛",
        "caption": 'AI 生成科学情景重建。放大展示，非实测比例。幼虫会用头部动作抛出沙粒，挖坑或维持陷阱。图中只重建一个动作瞬间，不能从单张图读出速度。 ',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-antlion/05-observation.webp",
        "title": "成虫的短触角",
        "alt": "蚁蛉：成虫的短触角",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。成虫触角的末端较粗，透明翅膀上有网状翅脉。它与沙坑里的幼虫属于同一种动物的不同阶段。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-antlion/06-observation.webp",
        "title": "沙地边的成虫",
        "alt": "蚁蛉：沙地边的成虫",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。成虫可以停在沙地附近的草茎上。把它的细长身体与短壮幼虫对照；这些图不表示同一个体的连续成长记录。",
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
      "title": "2025 年蚁蛉科分类修订：本种形态和旧北区分布",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12699346/",
      "kind": "taxonomy",
      "accessedAt": "2026-10-08"
    },
    {
      "title": "2020 年土耳其研究：本种幼虫与沙质基底",
      "url": "https://dergipark.org.tr/en/pub/commagene/article/783479",
      "kind": "ecology",
      "accessedAt": "2026-10-08"
    },
    {
      "title": "香川县科学博物馆研究：幼虫抛沙捕食",
      "url": "https://cir.nii.ac.jp/crid/1390282679679450112?lang=en",
      "kind": "ecology",
      "accessedAt": "2026-10-08"
    },
    {
      "title": "EPPO：本种成虫观察记录",
      "url": "https://gd.eppo.int/taxon/MYRMFO/photos",
      "kind": "general",
      "accessedAt": "2026-10-08"
    },
    {
      title: 'GBIF：Myrmeleon formicarius 的描述作者与年份',
      url: 'https://www.gbif.org/species/2100670',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-08",
  "updatedAt": "2026-10-08"
} as const satisfies Species;

export default profile;
