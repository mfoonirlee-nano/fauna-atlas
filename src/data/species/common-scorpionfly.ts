import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-scorpionfly",
  "slug": "common-scorpionfly",
  "names": {
    "zh": "普通蝎蛉",
    "en": "Common Scorpionfly"
  },
  "scientificName": "Panorpa communis",
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
      "scientificName": "Mecoptera",
      "zhName": "长翅目"
    },
    "family": {
      "scientificName": "Panorpidae",
      "zhName": "蝎蛉科"
    },
    "genus": {
      "scientificName": "Panorpa",
      "zhName": "蝎蛉属"
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
      "欧洲树篱与林缘"
    ],
    "countries": [],
    "range": '英国与欧洲有观察记录，常见于树篱、荨麻丛和林缘植被。英国有近似种，区分时需要检查生殖结构。'
  },
  "habitats": [
    {
      "name": "树篱与林缘植被",
      "realm": "terrestrial",
      "description": '树篱、荨麻丛和林缘植被供成虫活动，也可观察到它们在蛛网上取食。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "成虫取食死昆虫"
    ],
    "description": '成虫主要吃死昆虫，也会从蜘蛛网上取得食物。英国蜘蛛学会的观察论文记录了包括本种在内的蝎蛉在蛛网上取食。'
  },
  "tags": [
    "普通蝎蛉",
    "树篱与林缘植被"
  ],
  "summary": '普通蝎蛉的雄虫把腹部末端向上弯曲，看起来像蝎尾，末端实际是生殖结构，没有毒刺。',
  "description": '它的长口部向下伸出，透明翅膀带深色斑纹，常在欧洲树篱、荨麻丛和林缘植被活动。成虫吃死昆虫，也会到蜘蛛网上取食。',
  "storySections": [
    {
      key: 'appearance',
      label: '身体外观',
      title: '向下的口部与向上的腹端',
      body: '长口部向下伸出，透明翅膀带深色斑纹。雄虫腹部末端向上弯曲，末端是生殖结构，没有蝎子的毒刺；雌虫腹端形状不同，较直。',
    },
    {
      key: 'habitat',
      label: '栖息环境',
      title: '树篱、荨麻丛与林缘',
      body: '英国和欧洲有观察记录，树篱、荨麻丛与林缘植被是常见活动环境。',
    },
    {
      key: 'feeding',
      label: '取食',
      title: '也会到蜘蛛网上取食',
      body: '成虫主要取食死昆虫。英国蜘蛛学会的论文记录了蝎蛉在蛛网上取食，其中包括普通蝎蛉。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '雌雄腹端不同',
      body: '雄虫具有弯曲的腹端，雌虫腹端较直。区分英国的近似种时，需要检查雄虫生殖囊或雌虫产卵器，单凭翅斑难以确定物种。',
    },
    {
      key: 'taxonomy',
      label: '分类归属',
      title: '长翅目中的蝎蛉',
      body: '普通蝎蛉的学名为 Panorpa communis，属于昆虫纲、长翅目和蝎蛉科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '全球保护资料待补充',
      body: '尚未确认可引用的 IUCN 全球评估。地方观察记录提供出现地点，不能直接确定全球保护等级或数量趋势。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“蝎蛉”来自雄虫像蝎尾的腹端',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Panorpa communis。雄虫向上弯曲的腹端容易让人想到蝎尾，实际属于生殖结构，没有蝎子的毒刺。英国蜘蛛学会还记录过它在蜘蛛网上取食的行为，提供了外形以外的生活线索。',
    },
  ],
  "keyFacts": [
    '长口部向下伸出。',
    '透明翅膀带深色斑纹。',
    '雄虫弯曲腹端是生殖结构，没有毒刺。',
    '成虫吃死昆虫，也会在蛛网上取食。',
    '近似种的区别需要检查生殖结构。',
  ],
  "threats": [
    "树篱与林缘植被损失"
  ],
  "conservationActions": [
    "保留树篱、林缘与自然植被",
    "减少对昆虫栖息地的干扰"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "共读观察",
      "value": '向下伸出的口部，与雌雄形状不同的腹端。'
    }
  ],
  "media": {
    "image": "./images/species/common-scorpionfly/01-cover.webp",
    "alt": "普通蝎蛉及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-scorpionfly/02-observation.webp",
        "title": "雄虫的长口部与腹端",
        "alt": '雄虫的长口部与腹端，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。雄性有翅成虫；弯曲腹端为生殖结构，没有毒刺。图像尺度未经实测，不能用于物种鉴定或判断连续动作。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-scorpionfly/03-observation.webp",
        "title": "向下伸出的口部",
        "alt": '向下伸出的口部，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。成虫头部放大外观；不是吸血或毒液注射器官的示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-scorpionfly/04-observation.webp",
        "title": "雌虫的腹端",
        "alt": '雌虫的腹端，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。雌性有翅成虫，腹端较直；与雄性图分开比较。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-scorpionfly/05-observation.webp",
        "title": "雄虫的生殖囊",
        "alt": '雄虫的生殖囊，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。雄性生殖结构放大重建，非毒刺；不用于显微鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-scorpionfly/06-observation.webp",
        "title": "林缘叶片上的雄虫",
        "alt": '林缘叶片上的雄虫，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。雄性有翅成虫与林缘环境；翅斑为近似重建。",
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
      "url": "https://www.gbif.org/species/5742495",
      "kind": "taxonomy",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "NatureSpot：本种记录、雌雄结构与食性",
      "url": "https://www.naturespot.org/species/scorpion-fly",
      "kind": "general",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "英国蜘蛛学会：蝎蛉在蛛网取食的观察",
      "url": "https://britishspiders.org.uk/system/files/library/090402.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "EPPO：接受名称与分类入口",
      "url": "https://gd.eppo.int/taxon/PNRPCO",
      "kind": "taxonomy",
      "accessedAt": "2026-10-11"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-11",
  "updatedAt": "2026-10-11"
} as const satisfies Species;

export default profile;
