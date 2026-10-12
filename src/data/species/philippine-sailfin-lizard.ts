import type { Species } from '../../types/species.ts';

const profile = {
  "id": "philippine-sailfin-lizard",
  "slug": "philippine-sailfin-lizard",
  "names": {
    "zh": "菲律宾帆蜥",
    "en": "Philippine Sailfin Lizard"
  },
  "scientificName": "Hydrosaurus pustulatus",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Chordata",
      "zhName": "脊索动物门"
    },
    "order": {
      "scientificName": "Squamata",
      "zhName": "有鳞目"
    },
    "family": {
      "scientificName": "Agamidae",
      "zhName": "鬣蜥科"
    },
    "genus": {
      "scientificName": "Hydrosaurus",
      "zhName": "帆蜥属"
    },
    "class": {
      "scientificName": "Reptilia",
      "zhName": "爬行纲"
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
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "菲律宾低地林区的水边"
    ],
    "countries": [
      "菲律宾"
    ],
    "range": '菲律宾部分低地林区的河岸与水边。'
  },
  "habitats": [
    {
      "name": "热带河岸林",
      "realm": "terrestrial",
      "description": '菲律宾低地热带森林的河岸植被及水上方枝干。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "叶与芽",
      "果实",
      "昆虫"
    ],
    "description": "它吃植物的叶、芽和果实，也摄食昆虫等小动物。不同年龄的食物组合可以不同。"
  },
  "tags": [
    "菲律宾帆蜥",
    "热带河岸林"
  ],
  "summary": '菲律宾帆蜥在河岸枝干停留，也会用侧扁尾巴游泳。成年雄性有较高尾帆，雌性和幼体较低，吃植物和小动物。',
  "description": '菲律宾帆蜥在菲律宾低地热带河岸林生活，常停在水面上方的枝干，也会游泳，侧扁尾巴参与水中运动。颈背有一列嵴，成年雄性尾基部的帆状结构较高，雌性和幼体较低。它吃叶、芽、果实和昆虫等食物，雌性在水边隐蔽土中产卵，幼体出壳后已能游泳。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '背嵴与尾基部的帆状结构',
      body: '颈背有一列嵴，成年雄性尾基部的帆状结构较高，雌性和幼体较低。不同阶段的轮廓各有差别。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '热带河岸林',
      body: '它生活在菲律宾低地热带森林的河岸植被中，常停留在水上方的枝干。它会游泳，侧扁的尾巴参与水中运动。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '它吃植物的叶、芽和果实，也摄食昆虫等小动物。不同年龄的食物组合可以不同。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '本种产卵，雌性在水边土中的隐蔽处留下卵。幼体出生时就能游泳，背嵴和尾帆随生长变化。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种为 Hydrosaurus pustulatus，属于有鳞目、鬣蜥科。分类图谱说明归属，不表示演化发生的时间。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '先找图中可见的特点',
      body: '保留热带河岸林、停栖枝干与水边隐蔽土层，不诱发跳水。比较成年雄性、雌性和幼体尾帆时，要留意图像不是实测比例。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '吕宋标本与雄性的高尾帆',
      body: 'Eschscholtz 在 1829 年以 Istiturus pustulatus 描述本种，原始模式产地为菲律宾吕宋岛，今天采用 Hydrosaurus pustulatus。中文“帆蜥”可以联系成年雄性尾基部的高帆，雌性与幼体轮廓不同。名称里的“菲律宾”也有明确产地和分布线索。',
    },
  ],
  "keyFacts": [
    '颈背有一列嵴，成年雄性尾基部的帆状结构较高，雌性和幼体较低。不同阶段的轮廓各有差别。',
    '本种产卵，雌性在水边土中的隐蔽处留下卵。幼体出生时就能游泳，背嵴和尾帆随生长变化。',
  ],
  "threats": [
    "河岸林砍伐与土地开发",
    "野生动物贸易中的捕捉"
  ],
  "conservationActions": [
    "保护原生栖息环境，保留隐蔽空间，观察时不捕捉或诱发行为。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "热带河岸林"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "背嵴与尾基部的帆状结构"
    }
  ],
  "media": {
    "image": "./images/species/philippine-sailfin-lizard/01-cover.webp",
    "alt": "菲律宾帆蜥及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/philippine-sailfin-lizard/02-observation.webp",
        "title": "成年雄性的尾帆",
        "alt": "菲律宾帆蜥：成年雄性的尾帆，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成年雄性重建，尾基部高帆不能套给所有个体。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/philippine-sailfin-lizard/03-observation.webp",
        "title": "成年雌性的低嵴",
        "alt": "菲律宾帆蜥：成年雌性的低嵴，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成年雌性重建，和雄性图分别观察，非实测对比。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/philippine-sailfin-lizard/04-observation.webp",
        "title": "水边的侧扁尾巴",
        "alt": "菲律宾帆蜥：水边的侧扁尾巴，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水边静止姿态重建，不能用静图证明游泳动作。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/philippine-sailfin-lizard/05-observation.webp",
        "title": "河边枝上的幼蜥",
        "alt": "菲律宾帆蜥：河边枝上的幼蜥，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼体重建，背嵴较低，不能按图判定年龄。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/philippine-sailfin-lizard/06-observation.webp",
        "title": "河流上方的停留",
        "alt": "菲律宾帆蜥：河流上方的停留，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成年雄性停留情景重建，不诱发跳水行为。",
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
      "title": "Reptile Database：分类、菲律宾分布与产卵",
      "url": "https://reptile-database.reptarium.cz/Hydrosaurus/pustulatus",
      "kind": "taxonomy",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "里斯本动物园：雌雄差异、水边生活与繁殖",
      "url": "https://www.zoo.pt/pt/conhecer/animais/repteis/hidrossauro-das-filipinas/",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "萨格勒布动物园：食物与栖息地",
      "url": "https://zoo.hr/259024-2/",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-10",
  "updatedAt": "2026-10-10"
} as const satisfies Species;

export default profile;
