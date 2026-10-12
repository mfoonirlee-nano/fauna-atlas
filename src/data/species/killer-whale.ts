import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-orcinus-orca",
  "slug": "killer-whale",
  "names": {
    "zh": "虎鲸",
    "en": "Killer Whale"
  },
  "scientificName": "Orcinus orca",
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
      "scientificName": "Cetacea",
      "zhName": "鲸目"
    },
    "family": {
      "scientificName": "Delphinidae",
      "zhName": "海豚科"
    },
    "genus": {
      "scientificName": "Orcinus",
      "zhName": "虎鲸属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "DD",
    "label": {
      "zh": "资料缺乏",
      "en": "Data Deficient"
    },
    "trend": "unknown",
    "assessor": "IUCN；等级来源与适用范围见正文"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲",
      "南美洲",
      "欧洲",
      "非洲",
      "亚洲",
      "大洋洲",
      "南极洲"
    ],
    "regions": [
      "世界各大洋"
    ],
    "countries": [],
    "range": '世界各大洋都有虎鲸记录，从极地到热带均有分布。不同种群有各自的活动区域和食物选择。',
    "center": {
      "lat": 60,
      "lng": -145
    }
  },
  "habitats": [
    {
      "name": "近岸与远洋海域",
      "realm": "marine",
      "description": '在近岸和远洋水域活动，各种群利用不同海区及猎物资源。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "max": 9.75,
      "unit": "m",
      "note": "NOAA 给出的最大长度约 32 英尺，换算为约 9.75 m；不是全部个体的常见长度。"
    }
  },
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鱼类",
      "部分种群捕食海洋哺乳动物",
      "鱿鱼等海洋动物"
    ],
    "description": "有些虎鲸种群主要吃鱼，有些会捕食海洋哺乳动物。不能把某一群的食谱当作所有虎鲸的共同食谱。"
  },
  "tags": [
    "虎鲸",
    "黑色和白色斑块"
  ],
  "summary": '虎鲸会组成社会群体，用声音和动作与同伴交流。不同种群的食物各异，有些主要吃鱼，有些会捕食海洋哺乳动物。',
  "description": '虎鲸背部多为黑色，腹部和头侧有白色区域，真正的眼睛位于大白斑前方。个体斑块形状有所不同，成年雄性的背鳍通常比雌性更高。',
  "storySections": [
    {
      key: 'pattern',
      label: '生活与认识',
      title: '先找黑白斑块',
      body: '虎鲸背部大多是黑色，腹部和眼睛附近有白色区域。不同个体的斑块形状会有差别。',
    },
    {
      key: 'eye',
      label: '生活与认识',
      title: '白斑不是眼睛',
      body: '头部侧面的大白斑很容易看见，真正的眼睛在它前方，是一个小小的深色部位。',
    },
    {
      key: 'family',
      label: '生活与认识',
      title: '和同伴一起游',
      body: '虎鲸组成社会群体，同伴通过声音和动作交流。图集中的两只虎鲸展示相伴游动，具体亲缘关系需要个体资料确认。',
    },
    {
      key: 'fin',
      label: '生活与认识',
      title: '背上竖起一片鳍',
      body: '虎鲸背上有背鳍，成年雄性的背鳍通常比雌性更高。它要到水面呼吸，也用胸鳍和尾叶控制游动。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '不同种群吃什么',
      body: '有些虎鲸种群主要吃鱼，有些会捕食海洋哺乳动物。不能把某一群的食谱当作所有虎鲸的共同食谱。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '资料缺乏也需要保护',
      body: '全球 IUCN 等级为资料缺乏，南方居留种群有独立的濒危保护状态。海洋哺乳动物学会 2026 年名单仍保留 Orcinus orca，食物和习性不同的生态型尚未全部列为独立物种。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '一种虎鲸，食谱可以很不同',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Orcinus orca。不同虎鲸种群会长期利用不同猎物：有些主要吃鱼，有些捕食海洋哺乳动物。海洋哺乳动物学会 2026 年名单仍保留 Orcinus orca，生态型与独立物种的界限还在研究。',
    },
  ],
  "keyFacts": [
    '背黑腹白，头侧有大白斑。',
    '真正的眼睛位于头侧大白斑前方。',
    '组成社会群体，以声音和动作交流。',
    '成年雄性的背鳍通常更高。',
    '不同种群的食谱不同。',
  ],
  "threats": [
    "猎物减少",
    "持久性化学污染物",
    "船舶噪声与渔具缠绕"
  ],
  "conservationActions": [
    "保护猎物资源",
    "减少污染和船舶干扰"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "黑色和白色斑块"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "鱼类"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "近岸与远洋海域"
    }
  ],
  "media": {
    "image": "./images/species/killer-whale/01-cover.webp",
    "alt": "虎鲸的完整身体位于画面右侧。",
    "focalPoint": {
      "x": 0.89,
      "y": 0.36
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/killer-whale/02-observation.webp",
        "title": "黑白相间的身体",
        "alt": "虎鲸在水下侧身游动，背鳍、胸鳍和尾叶可见。",
        "caption": "虎鲸在水下侧身游动，背鳍、胸鳍和尾叶可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/killer-whale/03-observation.webp",
        "title": "找到真正的眼睛",
        "alt": "虎鲸头部侧面近景，小眼睛在大白斑前方。",
        "caption": "虎鲸头部侧面近景，小眼睛在大白斑前方。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/killer-whale/04-observation.webp",
        "title": "同伴一起游",
        "alt": "两只虎鲸在水中并排游动。",
        "caption": "两只虎鲸在水中并排游动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/killer-whale/05-observation.webp",
        "title": "水面上的背鳍",
        "alt": "虎鲸浮到海面，背部与背鳍露出水面。",
        "caption": "虎鲸浮到海面，背部与背鳍露出水面。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/killer-whale/06-observation.webp",
        "title": "鱼群旁的虎鲸",
        "alt": "虎鲸在鱼群附近游动；这一场景不代表所有种群的食谱。",
        "caption": "虎鲸在鱼群附近游动；这一场景不代表所有种群的食谱。",
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
      "title": "NOAA Fisheries — 虎鲸形态、食性与种群",
      "url": "https://www.fisheries.noaa.gov/species/killer-whale",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Society for Marine Mammalogy — 2026 年名单与虎鲸分类注释",
      "url": "https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "IUCN SSC Cetacean Specialist Group — 全球鲸类红色名录状态",
      "url": "https://iucn-csg.org/red-list-status-of-cetaceans/",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    },
    {
      title: 'GBIF：Orcinus orca 的命名作者与年份',
      url: 'https://www.gbif.org/species/2440483',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-09",
  "updatedAt": "2026-09-09"
} as const satisfies Species;

export default profile;
