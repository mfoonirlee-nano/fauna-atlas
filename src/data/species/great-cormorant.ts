import type { Species } from '../../types/species.ts';

const profile = {
  "id": "great-cormorant",
  "slug": "great-cormorant",
  "names": {
    "zh": "普通鸬鹚",
    "en": "Great Cormorant"
  },
  "scientificName": "Phalacrocorax carbo",
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
      "scientificName": "Suliformes",
      "zhName": "鲣鸟目"
    },
    "family": {
      "scientificName": "Phalacrocoracidae",
      "zhName": "鸬鹚科"
    },
    "genus": {
      "scientificName": "Phalacrocorax",
      "zhName": "鸬鹚属"
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
    "assessor": "采用所引物种资料明列的全球 IUCN LC；独立评估日期和全球趋势未核实，不补写年份。地区等级与地区数量变化不代替全球评估。"
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial",
      "marine"
    ],
    "continents": [
      "亚洲",
      "欧洲",
      "非洲",
      "大洋洲",
      "北美洲"
    ],
    "regions": [
      "河湖、河口与海岸"
    ],
    "countries": [],
    "range": "分布跨越欧亚、非洲、大洋洲及北美部分地区，利用内陆河湖、河口与海岸。中国多地可见，季节性出现情况依地区而异。",
    "center": {
      "lat": 22.47,
      "lng": 114.01
    }
  },
  "habitats": [
    {
      "name": "河湖、河口与海岸",
      "realm": "freshwater",
      "description": "分布跨越欧亚、非洲、大洋洲及北美部分地区，利用内陆河湖、河口与海岸。中国多地可见，季节性出现情况依地区而异。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "piscivore"
    ],
    "foods": [
      "鱼"
    ],
    "description": "它主要潜水捕鱼，用嘴抓住猎物后吞下。嘴端的钩是观察线索，实际捕食需要连续影像才能看清；不要为展示而投放活鱼。"
  },
  "tags": [
    "普通鸬鹚",
    "河湖、河口与海岸"
  ],
  "summary": "普通鸬鹚用带钩的嘴捕鱼，游泳时身体贴近水面，休息时常站在岸边展开双翅。",
  "description": "成鸟身体大多黑色，颈长，嘴端向下弯成钩，嘴基有黄色裸皮，脚趾间有蹼。幼鸟偏褐色，胸腹可较浅；繁殖成鸟脸部和腿侧可见白斑。它在淡水和海岸水域游泳、潜水，也在树木、岩石或岸边休息。站立时常展开双翅晾干羽毛；这个姿势不表示它受伤，也不能凭一帧推断晾翅持续多久。普通鸬鹚可集群筑巢，在树上或岩石等处堆积枝条。雌雄参与孵卵，刚孵出的雏鸟依靠亲鸟照料和喂食。褐色幼鸟的羽色会随成长变化，图库幼鸟已长羽。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形辨认",
      "body": "成鸟身体大多黑色，颈长，嘴端向下弯成钩，嘴基有黄色裸皮，脚趾间有蹼。幼鸟偏褐色，胸腹可较浅；繁殖成鸟脸部和腿侧可见白斑。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "它在淡水和海岸水域游泳、潜水，也在树木、岩石或岸边休息。站立时常展开双翅晾干羽毛；这个姿势不表示它受伤，也不能凭一帧推断晾翅持续多久。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "它主要潜水捕鱼，用嘴抓住猎物后吞下。嘴端的钩是观察线索，实际捕食需要连续影像才能看清；不要为展示而投放活鱼。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从幼体到成体",
      "body": "普通鸬鹚可集群筑巢，在树上或岩石等处堆积枝条。雌雄参与孵卵，刚孵出的雏鸟依靠亲鸟照料和喂食。褐色幼鸟的羽色会随成长变化，图库幼鸟已长羽。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的范围",
      "body": "本档案限定 Phalacrocorax carbo，属于鲣鸟目鸬鹚科鸬鹚属。鸬鹚是多个物种的类群通称，不能把所有黑色、会潜水捕鱼的长颈鸟都并入普通鸬鹚。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：嘴的末端怎样弯曲？观察任务：从岸上比较游泳与站立时露出的身体部位，记录是否展翅，不惊飞休息的鸟。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "普通鸬鹚的名称与记录",
      "body": "林奈在 1758 年发表本种名称，现用 Phalacrocorax carbo，GBIF 将作者和年份置于括号内。中文“普通鸬鹚”限定这一物种；传统捕鱼中的鸬鹚形象不能替代具体物种的鉴定记录。"
    }
  ],
  "keyFacts": [
    "成鸟身体大多黑色，颈长，嘴端向下弯成钩，嘴基有黄色裸皮，脚趾间有蹼。幼鸟偏褐色，胸腹可较浅；繁殖成鸟脸部和腿侧可见白斑。",
    "它主要潜水捕鱼，用嘴抓住猎物后吞下。嘴端的钩是观察线索，实际捕食需要连续影像才能看清；不要为展示而投放活鱼。",
    "普通鸬鹚可集群筑巢，在树上或岩石等处堆积枝条。雌雄参与孵卵，刚孵出的雏鸟依靠亲鸟照料和喂食。褐色幼鸟的羽色会随成长变化，图库幼鸟已长羽。"
  ],
  "threats": [
    "栖息地改变",
    "人为干扰"
  ],
  "conservationActions": [
    "按场所规则在原处观察，为动物保留取食、休息和繁殖空间。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "河湖、河口与海岸"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "岸边展开双翅"
    }
  ],
  "media": {
    "image": "./images/species/great-cormorant/01-cover.webp",
    "alt": "普通鸬鹚及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/great-cormorant/02-observation.webp",
        "title": "岸边展开双翅",
        "alt": "普通鸬鹚：岸边展开双翅，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。完整展翅姿势重建，不显示动作全过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/great-cormorant/03-observation.webp",
        "title": "贴近水面游泳",
        "alt": "普通鸬鹚：贴近水面游泳，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水面姿态，水下身体受水面遮挡。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/great-cormorant/04-observation.webp",
        "title": "带钩的嘴与鱼",
        "alt": "普通鸬鹚：带钩的嘴与鱼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。捕鱼情景重建，不表示一次真实捕食记录。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/great-cormorant/05-observation.webp",
        "title": "浅色胸腹的幼鸟",
        "alt": "普通鸬鹚：浅色胸腹的幼鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。已长羽幼鸟，不能当作刚孵出的雏鸟。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/great-cormorant/06-observation.webp",
        "title": "树上的枝条巢",
        "alt": "普通鸬鹚：树上的枝条巢，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。树巢情景重建，不代表所有种群都在树上筑巢。",
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
      "title": "GBIF：接受名称、命名作者与分类链",
      "url": "https://www.gbif.org/species/2481890",
      "kind": "taxonomy",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "物种外形与生活观察",
      "url": "https://www.rspb.org.uk/birds-and-wildlife/cormorant",
      "kind": "general",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "BTO：生态记录与全球保护等级",
      "url": "https://www.bto.org/learn/about-birds/birdfacts/cormorant",
      "kind": "conservation",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "生活史与范围资料",
      "url": "https://animaldiversity.org/accounts/Phalacrocorax_carbo/",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-15",
  "updatedAt": "2026-10-15"
} as const satisfies Species;

export default profile;
