import type { Species } from '../../types/species.ts';

const profile = {
  "id": "anhinga",
  "slug": "anhinga",
  "names": {
    "zh": "美洲蛇鹈",
    "en": "Anhinga"
  },
  "scientificName": "Anhinga anhinga",
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
      "scientificName": "Anhingidae",
      "zhName": "蛇鹈科"
    },
    "genus": {
      "scientificName": "Anhinga",
      "zhName": "蛇鹈属"
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
    "assessor": '全球保护等级及评估年份尚未确认；NE 表示资料不完整，不表示本种安全或实际未受评估。全球种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial",
      "freshwater"
    ],
    "continents": [],
    "regions": [
      "美洲暖温带与热带湿地"
    ],
    "countries": [
      "美国",
      "墨西哥",
      "巴西"
    ],
    "range": '美洲暖温带与热带的部分湿地。'
  },
  "habitats": [
    {
      "name": "浅水湿地",
      "realm": "freshwater",
      "description": '美洲暖温带和热带浅水、缓流湿地及附近可晾翼的树枝与岸边。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "piscivore"
    ],
    "foods": [
      "湿地鱼类"
    ],
    "description": '在水下寻找鱼，用嘴刺向猎物；湿地植被与清浅水域提供取食空间。'
  },
  "tags": [
    "美洲蛇鹈",
    "浅水湿地"
  ],
  "summary": '美洲蛇鹈潜入浅水，用直尖嘴捕鱼，出水后展开双翼。游泳时常只露长颈和头，雄鸟翅上有银白纹。',
  "description": '美洲蛇鹈在美洲暖温带、热带浅水湿地潜泳，利用脚推进，用细长直嘴刺取鱼。水面常只露头颈，出水后会站在支撑物上展开双翼。雄鸟体羽深色，翅上有银白纹，雌鸟头颈颜色不同。它在水边树上筑巢，雌雄共同参与繁殖。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '长颈和直嘴',
      body: '它有细长颈部、直尖嘴和长尾。雄鸟体羽深色，翅上带银白纹；雌鸟头颈颜色不同，图库主要展示雄鸟。',
    },
    {
      key: 'movement',
      label: '生活环境',
      title: '在栖息地活动',
      body: '它在浅水中潜泳，水面常只露头颈；出水后会在附近支撑物上展开双翼。脚参与水下推进。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '它在水下寻找鱼，用嘴刺向猎物。湿地植物与清浅水域提供取食空间，各地食谱可能不同。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '它在水边树上筑巢，雌雄参与繁殖。巢群规模不能从重建图推断。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种属于鲣鸟目、蛇鹈科，与鸬鹚各有不同科级归属。长颈的联想只是名称线索。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保留浅水湿地和水边筑巢、晾翼的支撑物，清理遗弃钓线。潜水、捕鱼与晾翼的先后要结合连续自然影像。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '水面上的长颈像蛇',
      body: 'Linnaeus 在 1766 年发表了本种的科学描述，今天采用 Anhinga anhinga。中文名“蛇鹈”可以联系水面上只露长颈与头部的游姿；本种属于蛇鹈科，和鸬鹚分别归入不同科。雄鸟与雌鸟头颈羽色不同，图库主要呈现雄性成鸟。',
    },
  ],
  "keyFacts": [
    '雄性成鸟重建，细嘴与长颈供外观观察。',
    '完整翼尖可见，出水展开双翼的姿态不表示正在飞行。',
    '身体浸在水下，局部露出是姿态限定，不是缺少身体。',
    '成鸟在支撑物上站立，完整脚与尾留在图中。',
    '静态潜泳重建，连续动作需查看自然录像。',
    '本种属于鲣鸟目、蛇鹈科，与鸬鹚各有不同科级归属。长颈的联想只是名称线索。',
    '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。',
  ],
  "threats": [
    "湿地栖息地减少",
    "废弃钓线缠绕"
  ],
  "conservationActions": [
    '保护浅水湿地及天然隐蔽空间，观察时保留安静距离。',
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "浅水湿地"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "长颈和直嘴"
    },
    {
      "key": "conservation",
      "label": "评估资料",
      "value": "尚未核实",
      "note": '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。'
    }
  ],
  "media": {
    "image": "./images/species/anhinga/01-cover.webp",
    "alt": "美洲蛇鹈及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/anhinga/02-observation.webp",
        "title": "长颈和直嘴",
        "alt": "美洲蛇鹈：长颈和直嘴，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。雄性成鸟重建，细嘴与长颈供外观观察。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/anhinga/03-observation.webp",
        "title": "张开双翼",
        "alt": "美洲蛇鹈：张开双翼，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。完整翼尖可见，出水展开双翼的姿态不表示正在飞行。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/anhinga/04-observation.webp",
        "title": "水面上的头颈",
        "alt": "美洲蛇鹈：水面上的头颈，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。身体浸在水下，局部露出是姿态限定，不是缺少身体。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/anhinga/05-observation.webp",
        "title": "长尾和有蹼的脚",
        "alt": "美洲蛇鹈：长尾和有蹼的脚，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成鸟在支撑物上站立，完整脚与尾留在图中。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/anhinga/06-observation.webp",
        "title": "水下的身体",
        "alt": "美洲蛇鹈：水下的身体，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。静态潜泳重建，连续动作需查看自然录像。",
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
      "title": "GBIF：接受学名与分类入口",
      "url": "https://www.gbif.org/species/2482082",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "康奈尔鸟类学实验室：美洲蛇鹈生活史",
      "url": "https://www.allaboutbirds.org/guide/Anhinga/lifehistory",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "康奈尔鸟类学实验室：美洲蛇鹈识别",
      "url": "https://www.allaboutbirds.org/guide/Anhinga/overview",
      "kind": "general",
      "accessedAt": "2026-10-09"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
