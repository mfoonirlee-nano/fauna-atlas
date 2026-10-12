import type { Species } from '../../types/species.ts';

const profile = {
  "id": "luna-moth",
  "slug": "luna-moth",
  "names": {
    "zh": "月蛾",
    "en": "Luna Moth"
  },
  "scientificName": "Actias luna",
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
      "scientificName": "Lepidoptera",
      "zhName": "鳞翅目"
    },
    "family": {
      "scientificName": "Saturniidae",
      "zhName": "天蚕蛾科"
    },
    "genus": {
      "scientificName": "Actias",
      "zhName": "尾天蚕蛾属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "trend": "unknown",
    "code": "NE",
    "label": {
      "zh": "未评估",
      "en": "Not Evaluated"
    },
    "assessor": '尚未核实本种的全球 IUCN 评估，种群变化趋势也不明确。地区等级与 NatureServe 等级不能换算成全球 IUCN 等级。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "北美洲东部"
    ],
    "countries": [],
    "range": "原生于加拿大南部和美国东部。幼虫取食枫香、胡桃等寄主树木，寄主随地区不同。"
  },
  "habitats": [
    {
      "name": "落叶阔叶林",
      "realm": "terrestrial",
      "description": '生活在加拿大南部和美国东部的落叶阔叶林，幼虫利用枫香、胡桃等寄主，寄主种类随地区不同。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "枫香等寄主树木的叶片"
    ],
    "description": "幼虫吃叶片；成蛾口器退化，不进食，依靠幼虫时期储存的能量。"
  },
  "tags": [
    "月蛾",
    "落叶阔叶林"
  ],
  "summary": '月蛾在北美落叶林生活，绿色后翅各有一条长尾；幼虫吃树叶，成蛾不进食。',
  "description": '月蛾原生于加拿大南部和美国东部的林地。成蛾翅膀绿色，前后翅都有眼斑，两片后翅各有一条细长尾状延伸。雄蛾的羽状触角比雌蛾宽，能感受雌蛾释放的气味信号。成蛾多在夜间活动，口器退化，不再进食。绿色幼虫吃寄主树叶，成熟后吐丝结茧，在茧内化蛹；不同地区利用的寄主有差别。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '后翅拖着长尾',
      body: '左右后翅各有一条尾状延伸，翅面还有眼斑。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '头上的羽状触角',
      body: '触角呈羽状，雄蛾的触角更宽，可感受气味信号。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '吃叶子的幼虫',
      body: '绿色幼虫在寄主叶片上取食，身体有小突起，成熟后化蛹。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '落叶包着的茧',
      body: '幼虫吐丝，将叶片包进茧的外层，蛹在里面发育。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '林中的成蛾',
      body: '成蛾多在夜间活动，白天可停在树干或枝叶上。成蛾口器退化，不吸食花蜜。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保留寄主树木，在原处观察卵、幼虫、蛹和成蛾。尚未核实本种的全球 IUCN 评估，种群变化趋势也不明确。地区等级与 NatureServe 等级不能换算成全球 IUCN 等级。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '1700 年已有记录，1758 年获得二名法名称',
      body: 'Petiver 在 1700 年记录了这种北美蛾，并用一个提到长尾的多词名称称呼它。林奈在 1758 年改用二名法，为它采用种名 luna。佛罗里达大学资料解释，这个名字来自翅上像月亮的斑纹。今天使用的名称为 Actias luna，它与亚洲的其他尾天蚕蛾是不同物种。',
    },
  ],
  "keyFacts": [
    '左右后翅各有一条尾状延伸，翅面还有眼斑。',
    '触角呈羽状，雄蛾的触角更宽，可感受气味信号。',
    '绿色幼虫在寄主叶片上取食，身体有小突起，成熟后化蛹。',
    '幼虫吐丝，将叶片包进茧的外层，蛹在里面发育。',
    '成蛾多在夜间活动，白天可停在树干或枝叶上。成蛾口器退化，不吸食花蜜。',
  ],
  "threats": [
    "局部栖息地改变"
  ],
  "conservationActions": [
    "保留寄主植物，观察时不采集卵、幼虫、蛹或成虫。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "栖息环境",
      "value": "落叶阔叶林"
    },
    {
      "key": "observation",
      "label": "观察提示",
      "value": "后翅拖着长尾"
    },
    {
      "key": "status",
      "label": "全球保护等级",
      "value": "未评估",
      "note": "所引资料未确认全球物种级 IUCN 评估，沿用项目 NE 占位口径；地区等级与 NatureServe 等级不换算成全球 IUCN 等级。未评估不表示没有风险。"
    }
  ],
  "media": {
    "image": "./images/species/luna-moth/01-cover.webp",
    "alt": "月蛾及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/luna-moth/02-observation.webp",
        "alt": "月蛾：后翅拖着长尾",
        "title": "后翅拖着长尾",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。左右后翅各有一条尾状延伸。沿着翅缘找尾端，不把长尾当作腿。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/luna-moth/03-observation.webp",
        "alt": "月蛾：头上的羽状触角",
        "title": "头上的羽状触角",
        "caption": 'AI 生成科学情景重建。放大展示，非实测比例。月蛾有羽状触角，雄蛾的触角更宽。触角可感受气味，放大重建图不用于精确鉴定。 ',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/luna-moth/04-observation.webp",
        "alt": "月蛾：吃叶子的幼虫",
        "title": "吃叶子的幼虫",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。绿色幼虫在寄主叶片上取食，身体有小突起。它日后会化蛹，再羽化成为成蛾。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/luna-moth/05-observation.webp",
        "alt": "月蛾：落叶包着的茧",
        "title": "落叶包着的茧",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。幼虫吐丝，把叶片包进茧的外层，蛹在里面发育。这里只展示茧的外部。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/luna-moth/06-observation.webp",
        "alt": "月蛾：林中的成蛾",
        "title": "林中的成蛾",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。成蛾多在夜间活动，白天可停在树干或枝叶上。它不吸食花蜜。",
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
      "title": "佛罗里达大学 IFAS：月蛾",
      "url": "https://ask.ifas.ufl.edu/publication/IN737",
      "kind": "ecology",
      "accessedAt": "2026-10-07"
    },
    {
      "title": "ITIS：Actias luna 分类记录",
      "url": "https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=936178",
      "kind": "taxonomy",
      "accessedAt": "2026-10-07"
    },
    {
      "title": "BAMONA：月蛾",
      "url": "https://www.butterfliesandmoths.org/species/Actias-luna",
      "kind": "general",
      "accessedAt": "2026-10-07"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-07",
  "updatedAt": "2026-10-07"
} as const satisfies Species;

export default profile;
