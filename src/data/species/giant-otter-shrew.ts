import type { Species } from '../../types/species.ts';

const profile = {
  "id": "giant-otter-shrew",
  "slug": "giant-otter-shrew",
  "names": {
    "zh": "巨獭鼩",
    "en": "Giant Otter Shrew"
  },
  "scientificName": "Potamogale velox",
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
      "scientificName": "Mammalia",
      "zhName": "哺乳纲"
    },
    "order": {
      "scientificName": "Afrosoricida",
      "zhName": "非洲猬目"
    },
    "family": {
      "scientificName": "Potamogalidae",
      "zhName": "獭鼩科"
    },
    "genus": {
      "scientificName": "Potamogale",
      "zhName": "獭鼩属"
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
      "非洲中部热带林区"
    ],
    "countries": [
      "加蓬",
      "喀麦隆",
      "刚果民主共和国"
    ],
    "range": '非洲中部热带林区的部分地区。'
  },
  "habitats": [
    {
      "name": "森林溪流",
      "realm": "freshwater",
      "description": '非洲中部热带森林溪流与岸边，岸洞提供日间隐蔽处。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "蟹",
      "鱼",
      "蛙",
      "其他小型动物"
    ],
    "description": '捕食蟹、鱼、蛙等小动物，触觉和嗅觉参与探查。'
  },
  "tags": [
    "巨獭鼩",
    "森林溪流"
  ],
  "summary": '巨獭鼩夜间在森林溪流和岸边找小动物，白天藏在岸洞。侧扁长尾帮助游泳，脚趾没有蹼。',
  "description": '巨獭鼩在非洲中部热带森林的溪流和岸边生活，夜间寻找蟹、鱼、蛙等小动物，日间藏在岸洞。它有宽扁吻部、硬须、小眼和短腿，长尾侧扁，游泳时身体与尾巴向两侧摆动。背毛深褐，腹部较浅，脚趾没有蹼。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '宽嘴和硬须',
      body: '它有宽扁吻部、硬须、小眼和短腿，背部深褐，腹部较浅。长尾侧扁，脚趾没有蹼，属于獭鼩科。',
    },
    {
      key: 'movement',
      label: '生活环境',
      title: '在栖息地活动',
      body: '它夜间在森林溪流和岸边寻找食物，游泳时以身体和尾部的侧向动作推进。日间利用岸边洞穴隐蔽，水中与岸上各自提供不同的活动空间。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '它捕食蟹、鱼、蛙等小动物，触觉和嗅觉参与探查。岸边同框的动物只是取食环境示意。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '幼仔由母体产出，随后吃奶。本种繁殖与寿命资料仍有限，短期圈养后的存活时间不能当作物种寿命。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '哺乳动物多样性数据库将 Potamogale velox 放在非洲猬目、獭鼩科。ADW 旧页仍列马岛猬科，阅读旧资料时需注意这项差异。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保留森林溪流和岸洞。观察时先辨认宽吻、硬须和侧扁长尾，再结合自然影像理解水中推进。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '来自加蓬的标本与改变过的科级归属',
      body: '十九世纪，Du Chaillu 以 Cynogale velox 描述本种，描述所依据的标本来自加蓬，今天采用 Potamogale velox。中文“獭”提示水中生活和外形，它实际属于獭鼩科。旧资料曾把獭鼩放在马岛猬科，现代哺乳动物多样性数据库将它们另列为獭鼩科。',
    },
  ],
  "keyFacts": [
    '头部放大图用于观察外形，不能量化感觉能力。',
    '水中姿态重建，推进方式需要结合自然录像。',
    '足趾没有蹼膜，AI 重建不用于细微趾骨鉴定。',
    '岸洞入口情景，不代表实测洞穴路线。',
    '取食环境示意，不证明这一只动物偏好蟹。',
    '哺乳动物多样性数据库将 Potamogale velox 放在非洲猬目、獭鼩科。ADW 旧页仍列马岛猬科，阅读旧资料时需注意这项差异。',
    '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。',
  ],
  "threats": [
    "林地与溪流栖息地改变",
    "渔网和鱼陷阱误捕"
  ],
  "conservationActions": [
    '保护森林溪流及天然隐蔽空间，观察时保留安静距离。',
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "森林溪流"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "宽嘴和硬须"
    },
    {
      "key": "conservation",
      "label": "评估资料",
      "value": "尚未核实",
      "note": '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。'
    }
  ],
  "media": {
    "image": "./images/species/giant-otter-shrew/01-cover.webp",
    "alt": "巨獭鼩及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/giant-otter-shrew/02-observation.webp",
        "title": "宽嘴和硬须",
        "alt": "巨獭鼩：宽嘴和硬须，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。头部放大图用于观察外形，不能量化感觉能力。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-otter-shrew/03-observation.webp",
        "title": "侧扁的尾巴",
        "alt": "巨獭鼩：侧扁的尾巴，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水中姿态重建，推进方式需要结合自然录像。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-otter-shrew/04-observation.webp",
        "title": "岸边的短脚",
        "alt": "巨獭鼩：岸边的短脚，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。足趾没有蹼膜，AI 重建不用于细微趾骨鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-otter-shrew/05-observation.webp",
        "title": "溪岸的隐蔽空间",
        "alt": "巨獭鼩：溪岸的隐蔽空间，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。岸洞入口情景，不代表实测洞穴路线。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-otter-shrew/06-observation.webp",
        "title": "岸边的小动物",
        "alt": "巨獭鼩：岸边的小动物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。取食环境示意，不证明这一只动物偏好蟹。",
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
      "url": "https://www.gbif.org/species/2432147",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "密歇根大学 ADW：巨獭鼩",
      "url": "https://animaldiversity.org/accounts/Potamogale_velox/",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "ASM MDD：獭鼩科归属",
      "url": "https://www.mammaldiversity.org/taxon/1000488/",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
