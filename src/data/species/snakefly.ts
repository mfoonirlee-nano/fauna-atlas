import type { Species } from '../../types/species.ts';

const profile = {
  "id": "snakefly",
  "slug": "snakefly",
  "names": {
    "zh": "蛇蛉",
    "en": "Snakefly"
  },
  "scientificName": "Raphidia ophiopsis",
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
      "scientificName": "Raphidioptera",
      "zhName": "蛇蛉目"
    },
    "family": {
      "scientificName": "Raphidiidae",
      "zhName": "蛇蛉科"
    },
    "genus": {
      "scientificName": "Raphidia",
      "zhName": "蛇蛉属"
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
      "欧洲",
      "亚洲"
    ],
    "regions": [
      "欧洲与亚洲旧北界林地"
    ],
    "countries": [],
    "range": '物种目录记录它广布于旧北界中部与东部，即欧洲和亚洲北部等区域的相应范围。旧英国文献中同名的其他蛇蛉记录，不能用于确认本种分布。'
  },
  "habitats": [
    {
      "name": "旧北界林地",
      "realm": "terrestrial",
      "description": '林地树皮缝隙供幼虫寻找小型节肢动物，成虫可停留在枝条和树皮上。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "小型节肢动物"
    ],
    "description": '蛇蛉类成虫和幼虫用咀嚼式口器捕食小型节肢动物。本种幼虫有在树皮缝隙中捕食的研究记录，具体猎物比例尚未确认。'
  },
  "tags": [
    "蛇蛉",
    "旧北界林地"
  ],
  "summary": '蛇蛉头后方的前胸细长，像拉长的脖子。雌虫腹端有细长产卵器，用于产卵。',
  "description": '成虫的两对透明翅膀有网状翅脉，休息时拢在背上。蛇蛉类的成虫和幼虫捕食小型节肢动物，本种幼虫有在树皮缝隙中捕食的记录。',
  "storySections": [
    {
      key: 'appearance',
      label: '身体外观',
      title: '细长前胸像脖子',
      body: '头后方的前胸细长，透明翅膀有网状翅脉。成虫休息时把两对翅膀拢在背上，雌虫腹端伸出细长的产卵器。',
    },
    {
      key: 'habitat',
      label: '栖息环境',
      title: '旧北界中部与东部的记录',
      body: '物种目录将本种记载于旧北界中部与东部，涉及欧洲及亚洲北部等区域。旧英国文献中同名的其他蛇蛉，需要按实际物种分别看待。',
    },
    {
      key: 'feeding',
      label: '取食',
      title: '树皮缝隙中的捕食者',
      body: '蛇蛉类成虫和幼虫具有咀嚼式口器，捕食小型节肢动物。本种幼虫有在树皮缝隙中捕食的记录。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '产卵器位于雌虫腹端',
      body: '蛇蛉目具有卵、幼虫、蛹和成虫阶段。雌虫的细长腹端结构是产卵器，没有毒刺；翅脉和腹端细节需要用标本鉴别。',
    },
    {
      key: 'taxonomy',
      label: '分类归属',
      title: '蛇蛉目中的蛇蛉',
      body: '蛇蛉的学名为 Raphidia ophiopsis，属于昆虫纲、蛇蛉目和蛇蛉科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '全球评估仍待确认',
      body: '尚未确认可引用的 IUCN 全球评估，全球数量趋势也未确认。“未评估”表示保护资料缺口。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '像长脖子的部分是前胸',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Raphidia ophiopsis。蛇蛉的细长“脖子”实际是头后方的前胸，雌虫细长的腹端则是产卵器。这两处外形醒目，但确认本种还需要标本中的翅脉和腹端细节；历史上相同的名称也曾用于其他蛇蛉，旧记录需要辨别实际物种。',
    },
  ],
  "keyFacts": [
    '头后方的前胸细长。',
    '两对透明翅膀具有网状翅脉。',
    '雌虫腹端有细长产卵器。',
    '成虫和幼虫捕食小型节肢动物。',
    '本种幼虫有树皮缝隙中的捕食记录。',
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
      "value": '头后的细长前胸、透明翅膀与雌虫腹端的产卵器。'
    }
  ],
  "media": {
    "image": "./images/species/snakefly/01-cover.webp",
    "alt": "蛇蛉及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/snakefly/02-observation.webp",
        "title": "树皮上的成虫",
        "alt": '树皮上的成虫，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。有翅成虫全身侧面。图像尺度未经实测，不能用于物种鉴定或判断连续动作。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/snakefly/03-observation.webp",
        "title": "细长的前胸",
        "alt": '细长的前胸，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。成虫头部与前胸放大外观。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/snakefly/04-observation.webp",
        "title": "透明翅膀的翅脉",
        "alt": '透明翅膀的翅脉，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。成虫翅脉近似重建，不作鉴定依据。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/snakefly/05-observation.webp",
        "title": "雌虫的产卵器",
        "alt": '雌虫的产卵器，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。雌性成虫；细长产卵器不是毒刺。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/snakefly/06-observation.webp",
        "title": "枝条上的成虫",
        "alt": '枝条上的成虫，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。成虫与林地枝条；静图不证明运动。",
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
      "url": "https://www.gbif.org/species/2006704",
      "kind": "taxonomy",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "Neuropterida：名称与旧北界分布",
      "url": "https://lacewing.tamu.edu/edoc/17504",
      "kind": "taxonomy",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "Watson 与 Dallwitz：蛇蛉目形态、食性与生活史",
      "url": "https://www.delta-intkey.com/britin/ord/www/raphidio.htm",
      "kind": "general",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "USDA 保存的研究资料：本种幼虫树皮缝隙捕食记录",
      "url": "https://www.ars.usda.gov/ARSUserFiles/80620520/Batko74.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-11",
  "updatedAt": "2026-10-11"
} as const satisfies Species;

export default profile;
