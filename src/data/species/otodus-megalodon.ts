import type { Species } from '../../types/species.ts';

const profile = {
  "id": "otodus-megalodon",
  "slug": "otodus-megalodon",
  "names": {
    "zh": "巨齿鲨",
    "en": "Megalodon"
  },
  "scientificName": "Otodus megalodon",
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
      "scientificName": "Chondrichthyes",
      "zhName": "软骨鱼纲"
    },
    "order": {
      "scientificName": "Lamniformes",
      "zhName": "鼠鲨目"
    },
    "family": {
      "scientificName": "Otodontidae",
      "zhName": "耳齿鲨科"
    },
    "genus": {
      "scientificName": "Otodus",
      "zhName": "耳齿鲨属"
    }
  },
  "conservation": {
    "system": "Historical and fossil evidence",
    "code": "EX",
    "label": {
      "zh": "已灭绝",
      "en": "Extinct"
    },
    "trend": "unknown",
    "assessor": "依据所引博物馆资料与化石研究；未采用独立 IUCN 评估。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲",
      "欧洲"
    ],
    "regions": [
      "多地中新世至上新世海相地层（代表遗存范围）"
    ],
    "countries": [],
    "range": "巨齿鲨的代表性遗存范围为多地中新世至上新世海相地层（代表遗存范围）。现代地名用于定位遗存，不表示完整古地理范围；现无活体分布，不提供当前代表坐标。"
  },
  "habitats": [
    {
      "name": "古近岸与开放海域",
      "realm": "marine",
      "description": "中新世和上新世的海相地层在多地保存巨齿鲨遗存，反映它曾在多种海域出现。古海岸线与今天不同，本档案不提供当前活体坐标，也不把深海电影场景当作栖息证据。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "海生哺乳动物",
      "鱼类"
    ],
    "description": "牙齿结构及部分海生哺乳动物骨骼上的咬痕支持肉食解释。不同地区与年龄个体可能利用不同猎物，不能将“只吃鲸”当作固定食谱；图中不安排没有具体标本支持的攻击过程。"
  },
  "tags": [
    "巨齿鲨",
    "已灭绝",
    "古鱼类"
  ],
  "summary": "巨齿鲨以大型三角形锯齿牙著名，完整身体比例仍需依据椎骨和现生鲨类估算。",
  "description": "巨齿鲨以大型三角形锯齿牙著名，完整身体比例仍需依据椎骨和现生鲨类估算。三角形牙冠边缘有细锯齿，牙根宽阔。牙齿比身体轮廓更容易保存，研究者不能用一颗牙直接量出整只鲨鱼。图中采用较修长的鲭鲨型复原，背鳍、尾鳍比例和体色含推测。除牙齿外，关联椎骨为体型重建提供依据。2025 年研究比较多种鲨鱼比例，提出更修长的身体与更大体长假说；作者也把结论列为待检验解释。本档案不把推算上限写成实测尺寸或确定外形。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体特征开始看",
      "body": "三角形牙冠边缘有细锯齿，牙根宽阔。牙齿比身体轮廓更容易保存，研究者不能用一颗牙直接量出整只鲨鱼。图中采用较修长的鲭鲨型复原，背鳍、尾鳍比例和体色含推测。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "化石产地与古环境",
      "body": "中新世和上新世的海相地层在多地保存巨齿鲨遗存，反映它曾在多种海域出现。古海岸线与今天不同，本档案不提供当前活体坐标，也不把深海电影场景当作栖息证据。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "牙齿与食物线索",
      "body": "牙齿结构及部分海生哺乳动物骨骼上的咬痕支持肉食解释。不同地区与年龄个体可能利用不同猎物，不能将“只吃鲸”当作固定食谱；图中不安排没有具体标本支持的攻击过程。"
    },
    {
      "key": "evidence",
      "label": "遗存与复原",
      "title": "用遗存检查复原",
      "body": "除牙齿外，关联椎骨为体型重建提供依据。2025 年研究比较多种鲨鱼比例，提出更修长的身体与更大体长假说；作者也把结论列为待检验解释。本档案不把推算上限写成实测尺寸或确定外形。"
    },
    {
      "key": "conservation",
      "label": "灭绝记录",
      "title": "时期与末次记录的区别",
      "body": "可靠研究把巨齿鲨灭绝放在上新世，约距今三百六十万年前。该时间是对化石记录的统计约束，仍有误差；没有证据支持它今天藏在深海存活，年轻地层中的再搬运牙齿也不等于晚期活体。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "巨齿鲨的发现与名称",
      "body": "Agassiz 于 1835 年命名的巨齿鲨在旧文献中有 Carcharodon 与 Carcharocles 等属名组合。本档案采用近年研究使用的 Otodus megalodon 和耳齿鲨科口径。megalodon 指“大牙”，不表示它与现生大白鲨属于同一个种。"
    }
  ],
  "keyFacts": [
    "三角形牙冠边缘有细锯齿，牙根宽阔。牙齿比身体轮廓更容易保存，研究者不能用一颗牙直接量出整只鲨鱼。图中采用较修长的鲭鲨型复原，背鳍、尾鳍比例和体色含推测。",
    "除牙齿外，关联椎骨为体型重建提供依据。2025 年研究比较多种鲨鱼比例，提出更修长的身体与更大体长假说；作者也把结论列为待检验解释。本档案不把推算上限写成实测尺寸或确定外形。",
    "可靠研究把巨齿鲨灭绝放在上新世，约距今三百六十万年前。该时间是对化石记录的统计约束，仍有误差；没有证据支持它今天藏在深海存活，年轻地层中的再搬运牙齿也不等于晚期活体。"
  ],
  "threats": [],
  "conservationActions": [
    "保存化石及其地层、产地和测年资料。",
    "区分原始化石、复制件与科学复原示意。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "period",
      "label": "代表时期",
      "value": "中新世至上新世"
    },
    {
      "key": "status",
      "label": "记录状态",
      "value": "已灭绝"
    }
  ],
  "media": {
    "image": "./images/species/otodus-megalodon/01-cover.webp",
    "alt": "巨齿鲨科学复原示意，AI 生成",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学复原示意",
    "gallery": [
      {
        "image": "./images/species/otodus-megalodon/02-observation.webp",
        "title": "全身侧面",
        "alt": "巨齿鲨：全身侧面，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。三角形牙冠边缘有细锯齿，牙根宽阔。牙齿比身体轮廓更容易保存，研究者不能用一颗牙直接量出整只鲨鱼。图中采用较修长的鲭鲨型复原，背鳍、尾鳍比例和体色含推测。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/otodus-megalodon/03-observation.webp",
        "title": "头部外形",
        "alt": "巨齿鲨：头部外形，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。观察鼻吻、头部及外部附属结构；图中不展示精确内部牙齿或骨骼。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/otodus-megalodon/04-observation.webp",
        "title": "前侧全身",
        "alt": "巨齿鲨：前侧全身，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。除牙齿外，关联椎骨为体型重建提供依据。2025 年研究比较多种鲨鱼比例，提出更修长的身体与更大体长假说；作者也把结论列为待检验解释。本档案不把推算上限写成实测尺寸或确定外形。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/otodus-megalodon/05-observation.webp",
        "title": "古环境示意",
        "alt": "巨齿鲨：古环境示意，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。中新世和上新世的海相地层在多地保存巨齿鲨遗存，反映它曾在多种海域出现。古海岸线与今天不同，本档案不提供当前活体坐标，也不把深海电影场景当作栖息证据。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/otodus-megalodon/06-observation.webp",
        "title": "后侧与尾部",
        "alt": "巨齿鲨：后侧与尾部，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。观察后肢、尾部与背线，姿态不表示已确认的固定行为。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      }
    ]
  },
  "sources": [
    {
      "title": "Shimada 等2025 · 巨齿鲨身体比例与体型假说",
      "url": "https://palaeo-electronica.org/content/2025/5450-biology-of-otodus-megalodon",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "NHM · 巨齿鲨灭绝与存活传言",
      "url": "https://www.nhm.ac.uk/discover/is-megalodon-still-alive.html",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "Boessenecker 等2019 · 巨齿鲨灭绝时间复核",
      "url": "https://doi.org/10.7717/peerj.6088",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "PBDB · 化石分类记录",
      "url": "https://paleobiodb.org/classic/checkTaxonInfo?taxon_no=80603",
      "kind": "conservation",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "GBIF · 原始匹配，采用差异见研究记录",
      "url": "https://api.gbif.org/v1/species/match?name=Otodus%20megalodon",
      "kind": "taxonomy",
      "accessedAt": "2026-10-22"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-22",
  "updatedAt": "2026-10-22"
} as const satisfies Species;

export default profile;
