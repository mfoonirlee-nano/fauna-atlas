import type { Species } from '../../types/species.ts';

const profile = {
  "id": "spotted-salamander",
  "slug": "spotted-salamander",
  "names": {
    "zh": "斑点钝口螈",
    "en": "Spotted Salamander"
  },
  "scientificName": "Ambystoma maculatum",
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
      "scientificName": "Caudata",
      "zhName": "有尾目"
    },
    "family": {
      "scientificName": "Ambystomatidae",
      "zhName": "钝口螈科"
    },
    "genus": {
      "scientificName": "Ambystoma",
      "zhName": "钝口螈属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "trend": "unknown",
    "assessor": "Animal Diversity Web 支持全球 LC；未核实独立评估日期与全球趋势，不用网页年份替代。"
  },
  "distribution": {
    "realms": [
      "terrestrial",
      "freshwater"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "北美洲东部"
    ],
    "countries": [
      "加拿大",
      "美国"
    ],
    "range": "加拿大新斯科舍、魁北克和安大略部分地区，向南延伸至美国东部和得克萨斯东部、佐治亚南部；不包括佛罗里达半岛。"
  },
  "habitats": [
    {
      "name": "湿润林地与季节性水塘",
      "realm": "terrestrial",
      "description": '成体利用湿润林地的隐蔽处，繁殖、卵和幼体依赖水塘，也需要林地与水塘间的通路。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "昆虫",
      "蚯蚓",
      "蛞蝓",
      "其他小型无脊椎动物"
    ],
    "description": "成体在林地捕食小型无脊椎动物；水生幼体的食物随体型和环境变化。"
  },
  "tags": [
    "斑点钝口螈",
    "湿润林地与季节性水塘"
  ],
  "summary": '斑点钝口螈夜间在北美湿润林地活动，春季迁往水塘繁殖；深色背上有两列黄至橙黄斑点。',
  "description": '斑点钝口螈身体粗壮，背部黑色或蓝黑色，两列黄色至橙黄色圆斑的大小和排列因个体而异。它生活在北美东部湿润林地，白天藏在落叶、倒木或地下，夜间找昆虫、蚯蚓、蛞蝓等小型无脊椎动物。繁殖时迁往水塘，雌螈把胶质卵团附在水中枝条等支撑物上。幼体先在水中靠外鳃呼吸，变态后转向陆地生活。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '两列黄色点点',
      body: '深色背上有两列黄至橙黄斑点，大小与排列因个体而异。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '夜里的林地行走',
      body: '成体常在夜间活动，白天藏在潮湿的落叶、倒木或地下。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '春天走向水塘',
      body: '繁殖季节，成体可在潮湿夜晚从林地迁往季节性水塘。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '卵团挂在水中',
      body: '雌螈把胶质卵团附在水中枝条等支撑物上。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '幼体先长着外鳃',
      body: '幼体在水中保留外鳃，变态后外鳃消失、转向陆地；幼体没有成体那样的醒目黄斑。',
    },
    {
      key: 'observation-6',
      label: '保护与分类',
      title: '留下林地和小水塘',
      body: '全球资料列为无危，但填平水塘、破坏林地会减少繁殖和隐蔽场所。保留湿地及周围植被，比单独保护一个水坑更符合它的生活史。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '胚胎细胞里发现了绿藻',
      body: '本种现用名称对应 Shaw 在 1802 年的科学描述，“斑点”提示深色背部的黄色斑纹。2011 年，Ryan Kerney 等研究者用显微成像和分子检测发现，绿藻能进入斑点钝口螈胚胎的组织与细胞。这项研究让人们认识到，卵中绿藻与胚胎的关系比只生活在胚胎周围更密切。',
    },
  ],
  "keyFacts": [
    '深色背上有两列黄至橙黄斑点，大小与排列因个体而异。',
    '成体常在夜间活动，白天藏在潮湿的落叶、倒木或地下。',
    '繁殖季节，成体可在潮湿夜晚从林地迁往季节性水塘。',
    '雌螈把胶质卵团附在水中枝条等支撑物上。',
    '幼体在水中保留外鳃，变态后外鳃消失、转向陆地；幼体没有成体那样的醒目黄斑。',
  ],
  "threats": [
    "林地与繁殖水塘消失",
    "水质变化和生境破碎化"
  ],
  "conservationActions": [
    "保留季节性水塘及周边林地",
    "维护繁殖迁移通路"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "栖息环境",
      "value": "湿润林地与季节性水塘"
    },
    {
      "key": "observation",
      "label": "观察提示",
      "value": "两列黄色点点"
    },
    {
      "key": "status",
      "label": "全球保护等级",
      "value": "无危",
      "note": "Animal Diversity Web 支持全球 LC；未核实独立评估日期与全球趋势，不用网页年份替代。"
    }
  ],
  "media": {
    "image": "./images/species/spotted-salamander/01-cover.webp",
    "alt": "斑点钝口螈及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/spotted-salamander/02-observation.webp",
        "alt": "斑点钝口螈：两列黄色点点",
        "title": "两列黄色点点",
        "caption": "AI 生成科学情景重建。沿着深色背部，从头后找到尾巴上的黄色斑点。两列斑点大小和排列有变化，不需要照着图数出固定数量。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-salamander/03-observation.webp",
        "alt": "斑点钝口螈：夜里的林地行走",
        "title": "夜里的林地行走",
        "caption": "AI 生成科学情景重建。成体常在夜间活动，白天在潮湿隐蔽处停留。图中呈现雨后落叶层，不需要翻动野外倒木去寻找它。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-salamander/04-observation.webp",
        "alt": "斑点钝口螈：春天走向水塘",
        "title": "春天走向水塘",
        "caption": "AI 生成科学情景重建。繁殖季节，成体可在潮湿夜晚从林地前往季节性水塘。陆地和水塘之间的通路也是它生活环境的一部分。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-salamander/05-observation.webp",
        "alt": "斑点钝口螈：卵团挂在水中",
        "title": "卵团挂在水中",
        "caption": "AI 生成科学情景重建。雌螈把胶质卵团留在水里的枝条等支撑物上。图中小点表示发育中的胚胎；卵的数量与发育速度不能从重建图推算。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-salamander/06-observation.webp",
        "alt": "斑点钝口螈：幼体先长着外鳃",
        "title": "幼体先长着外鳃",
        "caption": "AI 生成生活阶段对照示意。水上成体和水下幼体用于比较外形，不表示亲子照护或同一时刻的现场，比例并非实测。幼体在水中生活，头后有外鳃，尾部帮助游泳。变态后外鳃消失，成体转向陆地；幼体没有图中成体那样醒目的黄斑。",
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
      "title": "AMNH：接受学名与分布",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Ambystomatidae/Ambystoma/Ambystoma-maculatum",
      "kind": "taxonomy",
      "accessedAt": "2026-10-06"
    },
    {
      "title": "美国国家公园局：外形与林地生活",
      "url": "https://home.nps.gov/chat/learn/nature/spotted-salamander.htm",
      "kind": "ecology",
      "accessedAt": "2026-10-06"
    },
    {
      "title": "Animal Diversity Web：繁殖、食性与全球 LC",
      "url": "https://animaldiversity.org/accounts/Ambystoma_maculatum/",
      "kind": "conservation",
      "accessedAt": "2026-10-06"
    },
    {
      title: 'GBIF：Ambystoma maculatum 的描述作者与年份',
      url: 'https://www.gbif.org/species/2431951',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
    {
      title: 'Kerney 等：绿藻进入斑点钝口螈胚胎组织与细胞（2011）',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21464324/',
      kind: 'ecology',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-06",
  "updatedAt": "2026-10-06"
} as const satisfies Species;

export default profile;
