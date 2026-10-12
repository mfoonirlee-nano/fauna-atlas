import type { Species } from '../../types/species.ts';

const profile = {
  "id": "bombardier-beetle",
  "slug": "bombardier-beetle",
  "names": {
    "zh": "喷炮步甲",
    "en": "Bombardier Beetle"
  },
  "scientificName": "Brachinus crepitans",
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
      "scientificName": "Carabidae",
      "zhName": "步甲科"
    },
    "genus": {
      "scientificName": "Brachinus",
      "zhName": "喷炮步甲属"
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
    "assessor": '尚未确认可引用的 IUCN 全球评估；“未评估”表示资料缺口，不能据此判断种群安全。地方记录或 NatureServe 等级不能代替 IUCN 全球等级。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲"
    ],
    "regions": [
      "欧洲石灰质草地"
    ],
    "countries": [],
    "range": '欧洲有记录，英国记录集中于南部，偏好白垩或石灰岩环境。石灰质草地是介绍其环境的例子，不能代表完整全球分布。'
  },
  "habitats": [
    {
      "name": "石灰质草地",
      "realm": "terrestrial",
      "description": '英国南部白垩和石灰岩环境有记录，石灰质草地提供其活动环境。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小型动物性食物"
    ],
    "description": '防御研究在实验饲养中给它提供蟋蟀碎块，可以确认其利用动物性食物。这种实验饲料不能代表野外固定食谱，幼虫的具体食物也尚未确认。'
  },
  "tags": [
    "喷炮步甲",
    "石灰质草地"
  ],
  "summary": '喷炮步甲腹部的防御腺会排出热的防御液，液体含有苯醌；这个过程不会产生火焰。',
  "description": '橙红色头部和前胸与深色鞘翅形成明显区别，身体有三对足、两根触角。它在欧洲有记录，英国南部偏好白垩或石灰岩环境，生活史包括幼虫和蛹。',
  "storySections": [
    {
      key: 'appearance',
      label: '身体外观',
      title: '橙红前半身与深色鞘翅',
      body: '头部和较窄的前胸呈橙红色，鞘翅深蓝绿至近黑色。身体有三对足、两根触角，硬质鞘翅保护后方身体。',
    },
    {
      key: 'habitat',
      label: '栖息环境',
      title: '石灰质草地的记录',
      body: '欧洲有分布记录，英国记录集中于南部，偏好白垩或石灰岩环境。这些地方记录并非完整分布范围。',
    },
    {
      key: 'feeding',
      label: '取食',
      title: '实验饲料与野外食谱',
      body: '防御研究在饲养条件下提供蟋蟀碎块，说明它可利用动物性食物。野外食物组成和幼虫的具体食物尚缺确认资料。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '腹部有专门的防御腺',
      body: '本种经历卵、幼虫、蛹和成虫。腹部有成对防御腺，包含储存室与反应室，可以排出热的含苯醌防御液；苯醌是液体中的化学成分，喷射过程并不产生火焰。',
    },
    {
      key: 'taxonomy',
      label: '分类归属',
      title: '鞘翅目中的步甲',
      body: '喷炮步甲的学名为 Brachinus crepitans，属于昆虫纲、鞘翅目和步甲科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '全球评估资料待补充',
      body: '英国实地记录提供地方分布信息，尚未确认可引用的 IUCN 全球评估，全球种群趋势也未确认。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“喷炮”指向腹部的化学防御',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Brachinus crepitans。喷炮步甲的醒目本领来自腹部防御腺。功能解剖与分子研究分析了储存室、反应室和排出含苯醌液体的过程。这种防御依赖化学反应，“喷炮”的称呼容易让人联想到爆响或火焰，实际排出的是热的液体。',
    },
  ],
  "keyFacts": [
    '头与前胸橙红，鞘翅深蓝绿至近黑。',
    '身体有三对足、两根触角。',
    '腹部具有成对防御腺。',
    '防御腺含储存室和反应室。',
    '排出热的防御液，过程不产生火焰。',
  ],
  "threats": [],
  "conservationActions": [
    "保留自然栖息环境",
    "观察时减少对动物的干扰"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "共读观察",
      "value": '橙红色头部和前胸，以及深色硬质鞘翅。'
    }
  ],
  "media": {
    "image": "./images/species/bombardier-beetle/01-cover.webp",
    "alt": "喷炮步甲及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/bombardier-beetle/02-observation.webp",
        "title": "橙红与深蓝绿的身体",
        "alt": '橙红与深蓝绿的身体，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。成虫全身，橙红头胸与深色鞘翅。图像尺度未经实测，不能用于物种鉴定或判断连续动作。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bombardier-beetle/03-observation.webp",
        "title": "头部和前胸",
        "alt": '头部和前胸，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。成虫头部与窄前胸放大。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bombardier-beetle/04-observation.webp",
        "title": "硬质鞘翅",
        "alt": '硬质鞘翅，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。成虫鞘翅近似纹理，不能据此鉴别近似种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bombardier-beetle/05-observation.webp",
        "title": "腹部防御腺示意",
        "alt": '腹部防御腺示意，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。成虫腹部防御腺剖面示意；储存室、反应室与细雾，非实测比例，不是喷火。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bombardier-beetle/06-observation.webp",
        "title": "石灰质草地上的成虫",
        "alt": '石灰质草地上的成虫，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。成虫自然静止场景，未诱发防御。",
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
      "url": "https://www.gbif.org/species/4474861",
      "kind": "taxonomy",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "本种防御反应的分子基础原始研究",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12092131/",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "NatureSpot：本种形态与实地记录",
      "url": "https://www.naturespot.org/species/Brachinus-crepitans",
      "kind": "general",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "喷炮步甲防御系统功能解剖研究",
      "url": "https://www.sciencedirect.com/science/article/pii/S1467803915000766",
      "kind": "general",
      "accessedAt": "2026-10-11"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-11",
  "updatedAt": "2026-10-11"
} as const satisfies Species;

export default profile;
