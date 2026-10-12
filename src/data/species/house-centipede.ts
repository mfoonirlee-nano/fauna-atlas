import type { Species } from '../../types/species.ts';

const profile = {
  "id": "house-centipede",
  "slug": "house-centipede",
  "names": {
    "zh": "蚰蜒",
    "en": "House Centipede"
  },
  "scientificName": "Scutigera coleoptrata",
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
      "scientificName": "Chilopoda",
      "zhName": "唇足纲"
    },
    "order": {
      "scientificName": "Scutigeromorpha",
      "zhName": "蚰蜒目"
    },
    "family": {
      "scientificName": "Scutigeridae",
      "zhName": "蚰蜒科"
    },
    "genus": {
      "scientificName": "Scutigera",
      "zhName": "蚰蜒属"
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
    "assessor": "尚未确认可引用的 IUCN 全球评估；“未评估”表示资料缺口，不能据此判断种群安全，也不等于确认该物种从未接受评估。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "地中海及多个扩散记录区"
    ],
    "countries": [],
    "range": "通常认为原生于地中海地区，后来扩散到欧洲、亚洲和北美等多地。野外研究也在法国、克罗地亚和西班牙的石堆、腐木等处采集本种，不能把屋内观察当作唯一栖息环境。"
  },
  "habitats": [
    {
      "name": "石缝、腐木与建筑隐蔽处",
      "realm": "terrestrial",
      "description": "通常认为原生于地中海地区，后来扩散到欧洲、亚洲和北美等多地。野外研究也在法国、克罗地亚和西班牙的石堆、腐木等处采集本种，不能把屋内观察当作唯一栖息环境。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小型昆虫及其他节肢动物"
    ],
    "description": "蚰蜒捕食较小节肢动物，头后改造的颚足参与制伏猎物。细长触角与感觉结构帮助接收环境信息；速度和捕食动作需要连续观察，不能只凭足长推算。"
  },
  "tags": [
    "蚰蜒",
    "石缝、腐木与建筑隐蔽处"
  ],
  "summary": "蚰蜒身体细长，背上有深色纵纹，成体有十五对长足，越靠后的足越长。",
  "description": "黄褐色身体背面有三条深色纵纹，两根触角细长，侧面有发达的复眼。成体十五对细长行走足带有深浅环纹，后面的足更长，最后一对尤其长；较早幼体的足对数少于成体，达到十五对后还会继续蜕皮发育。",
  "storySections": [
    {
      "key": "appearance",
      "label": "身体外观",
      "title": "纵纹、触角与长行走足",
      "body": "黄褐色身体背面有三条深色纵纹，两根触角细长，侧面有发达的复眼。成体十五对细长行走足带有深浅环纹，后面的足更长，最后一对尤其长；幼体的足对数少于成体。"
    },
    {
      "key": "habitat",
      "label": "栖息环境",
      "title": "石缝与建筑中的隐蔽空间",
      "body": "通常认为原生于地中海地区，后来扩散到欧洲、亚洲和北美等多地。野外研究也在法国、克罗地亚和西班牙的石堆、腐木等处采集本种，不能把屋内观察当作唯一栖息环境。"
    },
    {
      "key": "feeding",
      "label": "取食",
      "title": "捕食较小节肢动物",
      "body": "蚰蜒捕食较小节肢动物，头后改造的颚足参与制伏猎物。细长触角与感觉结构帮助接收环境信息；速度和捕食动作需要连续观察，不能只凭足长推算。"
    },
    {
      "key": "life-cycle",
      "label": "生活史",
      "title": "幼体逐步增加足对",
      "body": "幼体随着生长和蜕皮增加足对，成体达到十五对行走足。幼体要单独标注，不能当作缺失足的成体。极长的最后一对仍是足，不是触角或双尾虫的尾须。"
    },
    {
      "key": "taxonomy",
      "label": "分类归属",
      "title": "用学名定位具体物种",
      "body": "蚰蜒的学名为 Scutigera coleoptrata，属于唇足纲、蚰蜒目和蚰蜒科。中文通称也可能指一个类群，学名限定本档案的具体物种。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "观察完整身体与附肢",
      "body": "尚未确认可引用的 IUCN 全球评估；“未评估”表示资料缺口，不能据此判断种群安全，也不等于确认该物种从未接受评估。共读时可以沿着身体向后看，比较前后行走足的长度。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "常在房屋中看到，也生活在野外",
      "body": "Linnaeus 于 1758 年描述了这个物种，现用学名为 Scutigera coleoptrata。英语通名 House Centipede 联系人们在房屋中见到它的经验，博物馆与原始研究也记录它在石缝和腐木中的野外生活。黄褐身体上的三条纵纹、细长环纹足和长触角提供外观线索；它属于唇足纲，与倍足纲马陆分别归类，不能把两者的足和食性混为一谈。"
    }
  ],
  "keyFacts": [
    "成体有十五对行走足。",
    "后面的足比前面的长。",
    "最后一对长足仍然是足。",
    "较早幼体足对数少于成体。"
  ],
  "threats": [],
  "conservationActions": [
    "观察时减少对动物及其栖息环境的干扰"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "共读观察",
      "value": "沿着身体向后看，比较前后行走足的长度。"
    }
  ],
  "media": {
    "image": "./images/species/house-centipede/01-cover.webp",
    "alt": "蚰蜒及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/house-centipede/02-observation.webp",
        "alt": "蚰蜒：背部纵纹与足列，AI 生成科学情景重建",
        "title": "背部纵纹与足列",
        "caption": "成体背面重建，观察深色纵纹与沿体排列的长足；非实测比例，生成图不用于精确数足。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/house-centipede/03-observation.webp",
        "alt": "蚰蜒：头部与细长触角，AI 生成科学情景重建",
        "title": "头部与细长触角",
        "caption": "头部局部放大重建，触角和侧面眼区为近似外观；不用于显微结构鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/house-centipede/04-observation.webp",
        "alt": "蚰蜒：更长的后足，AI 生成科学情景重建",
        "title": "更长的后足",
        "caption": "身体后部重建，最后一对属于行走足，不是尾须。放大展示，非实测比例。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/house-centipede/05-observation.webp",
        "alt": "蚰蜒：足对较少的幼体，AI 生成科学情景重建",
        "title": "足对较少的幼体",
        "caption": "较早幼体情景重建，足对数少于成体十五对；不把它当作缺足成体，不用生成图确定幼体龄期。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/house-centipede/06-observation.webp",
        "alt": "蚰蜒：石缝旁的完整个体，AI 生成科学情景重建",
        "title": "石缝旁的完整个体",
        "caption": "成体在隐蔽处的情景重建，完整触角与长足可见；静图不代表奔跑速度。",
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
      "url": "https://www.gbif.org/species/5179027",
      "kind": "taxonomy",
      "accessedAt": "2026-10-12"
    },
    {
      "title": "阿肯色大学节肢动物博物馆：蚰蜒外观与分布",
      "url": "https://arthropod.uark.edu/house-centipede/",
      "kind": "general",
      "accessedAt": "2026-10-12"
    },
    {
      "title": "蚰蜒触角感觉结构原始研究：野外采样与形态",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8567564/",
      "kind": "ecology",
      "accessedAt": "2026-10-12"
    },
    {
      "title": "宾夕法尼亚州立大学：蚰蜒生活史与取食",
      "url": "https://extension.psu.edu/house-centipedes",
      "kind": "ecology",
      "accessedAt": "2026-10-12"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-12",
  "updatedAt": "2026-10-12"
} as const satisfies Species;

export default profile;
