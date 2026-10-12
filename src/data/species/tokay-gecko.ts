import type { Species } from '../../types/species.ts';

const profile = {
  "id": "tokay-gecko",
  "slug": "tokay-gecko",
  "names": {
    "zh": "蛤蚧",
    "en": "Tokay Gecko"
  },
  "scientificName": "Gekko gecko",
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
      "scientificName": "Reptilia",
      "zhName": "爬行纲"
    },
    "order": {
      "scientificName": "Squamata",
      "zhName": "有鳞目"
    },
    "family": {
      "scientificName": "Gekkonidae",
      "zhName": "壁虎科"
    },
    "genus": {
      "scientificName": "Gekko",
      "zhName": "壁虎属"
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
    "assessor": '采用 Gekko gecko 的红斑型范围，不把 Gekko reevesii 的黑斑种群全并入。文献确认全球 LC；独立评估日期与种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "南亚与东南亚的热带林地及附近建筑"
    ],
    "countries": [
      "泰国",
      "印度尼西亚",
      "孟加拉国",
      "越南"
    ],
    "range": "南亚与东南亚的热带林地及附近建筑。国家列表仅列代表性分布地。"
  },
  "habitats": [
    {
      "name": "南亚与东南亚的热带林地及附近建筑",
      "realm": "terrestrial",
      "description": "南亚与东南亚的热带林地及附近建筑。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore",
      "carnivore"
    ],
    "foods": [
      "昆虫",
      "蜘蛛",
      "偶尔的小型脊椎动物"
    ],
    "description": "食物包括昆虫、蜘蛛、偶尔的小型脊椎动物。"
  },
  "tags": [
    "蛤蚧",
    "宽宽的脚趾"
  ],
  "summary": '蛤蚧用宽趾附着结构攀爬，夜间等待昆虫靠近。图库展示蓝灰底色、橙红斑点的红斑型。',
  "description": '蛤蚧生活在南亚和东南亚的热带林地，也会出现在附近建筑上。它用脚趾下的细微附着结构攀爬，白天躲进树洞或缝隙，夜间等待昆虫靠近。图库展示红斑型：蓝灰身体有橙红斑点，眼中可见竖形瞳孔。近景不能显示脚趾刚毛的微观结构。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '宽宽的脚趾',
      body: '蛤蚧的脚趾下面有细微结构，帮助它贴住表面。图中展示宽趾形状，不能看清微观刚毛。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '沿着树干爬',
      body: '蛤蚧用四肢攀爬，身后拖着长尾巴。树皮只作环境参照，不代表固定比例。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '大眼睛与斑点',
      body: '本组展示红斑型蛤蚧，蓝灰色身体上有橙红斑点，眼睛里可以看到竖形瞳孔。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '夜里等虫子',
      body: '蛤蚧常在夜里活动，停在树干上等待昆虫靠近。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '白天的藏身处',
      body: '它会躲在树洞和缝隙里。人们也能在靠近林地的建筑上发现它。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保护林地，减少对野生蛤蚧的捕捉和交易。旧资料里的黑斑类群 Gekko reevesii 已有独立物种处理，其整个分布不能算作本种范围。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '叫声里的 Tokay',
      body: 'Linnaeus 在 1758 年发表了蛤蚧的科学描述，今天采用 Gekko gecko。它的英文名 Tokay 来自雄性反复发出的“to-kay”叫声，繁殖季用来吸引配偶。名字能由声音而来，静态图像却听不到这一特征；图片更适合观察斑点、瞳孔和脚趾。',
    },
  ],
  "keyFacts": [
    "蛤蚧的脚趾下面有细微结构，帮助它贴住表面。图中展示宽趾形状，不能看清微观刚毛。",
    "蛤蚧用四肢攀爬，身后拖着长尾巴。树皮只作环境参照，不代表固定比例。",
    "本组展示红斑型蛤蚧，蓝灰色身体上有橙红斑点，眼睛里可以看到竖形瞳孔。",
    "蛤蚧常在夜里活动，停在树干上等待昆虫靠近。",
    "它会躲在树洞和缝隙里。人们也能在靠近林地的建筑上发现它。"
  ],
  "threats": [
    "野生个体过度捕捉",
    "栖息地破坏"
  ],
  "conservationActions": [
    "保护林地，减少对野生蛤蚧的捕捉和交易。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "宽宽的脚趾"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "南亚与东南亚的热带林地及附近建筑"
    }
  ],
  "media": {
    "image": "./images/species/tokay-gecko/01-cover.webp",
    "alt": "蛤蚧在栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/tokay-gecko/02-observation.webp",
        "title": "宽宽的脚趾",
        "alt": "蛤蚧：宽宽的脚趾",
        "caption": "AI 生成科学情景重建。蛤蚧的脚趾下面有细微结构，帮助它贴住表面。图中展示宽趾形状，不能看清微观刚毛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/tokay-gecko/03-observation.webp",
        "title": "沿着树干爬",
        "alt": "蛤蚧：沿着树干爬",
        "caption": "AI 生成科学情景重建。蛤蚧用四肢攀爬，身后拖着长尾巴。树皮只作环境参照，不代表固定比例。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/tokay-gecko/04-observation.webp",
        "title": "大眼睛与斑点",
        "alt": "蛤蚧：大眼睛与斑点",
        "caption": "AI 生成科学情景重建。本组展示红斑型蛤蚧，蓝灰色身体上有橙红斑点，眼睛里可以看到竖形瞳孔。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/tokay-gecko/05-observation.webp",
        "title": "夜里等虫子",
        "alt": "蛤蚧：夜里等虫子",
        "caption": "AI 生成科学情景重建。蛤蚧常在夜里活动，停在树干上等待昆虫靠近。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/tokay-gecko/06-observation.webp",
        "title": "白天的藏身处",
        "alt": "蛤蚧：白天的藏身处",
        "caption": "AI 生成科学情景重建。它会躲在树洞和缝隙里。人们也能在靠近林地的建筑上发现它。",
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
      "title": "爬行动物数据库：蛤蚧名称与物种范围",
      "url": "https://reptile-database.reptarium.cz/Gekko/gecko",
      "kind": "taxonomy",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "史密森国家动物园：蛤蚧形态与夜间活动",
      "url": "https://nationalzoo.si.edu/animals/tokay-gecko",
      "kind": "ecology",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "Zootaxa 新加坡爬两名录：全球 LC 与引入种群",
      "url": "https://zenodo.org/records/7967814",
      "kind": "conservation",
      "accessedAt": "2026-09-21"
    },
    {
      title: 'GBIF：蛤蚧的科学命名记录',
      url: 'https://www.gbif.org/species/2447367',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-21",
  "updatedAt": "2026-09-21"
} as const satisfies Species;

export default profile;
