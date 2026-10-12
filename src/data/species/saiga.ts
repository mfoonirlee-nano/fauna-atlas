import type { Species } from '../../types/species.ts';

const profile = {
  "id": "saiga",
  "slug": "saiga",
  "names": {
    "zh": "高鼻羚羊",
    "en": "Saiga"
  },
  "scientificName": "Saiga tatarica",
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
      "scientificName": "Artiodactyla",
      "zhName": "偶蹄目"
    },
    "family": {
      "scientificName": "Bovidae",
      "zhName": "牛科"
    },
    "genus": {
      "scientificName": "Saiga",
      "zhName": "高鼻羚羊属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "NT",
    "label": {
      "zh": "近危",
      "en": "Near Threatened"
    },
    "trend": "unknown",
    "assessor": "IUCN；等级来源与适用范围见来源记录"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲",
      "欧洲"
    ],
    "regions": [
      "欧亚草原与半荒漠"
    ],
    "countries": [
      "哈萨克斯坦",
      "蒙古",
      "俄罗斯",
      "乌兹别克斯坦"
    ],
    "range": '现存野生种群主要位于哈萨克斯坦、蒙古、俄罗斯和乌兹别克斯坦的开阔草原及半荒漠。MDD 将蒙古种群包含在 Saiga tatarica 中；地图点仅代表哈萨克斯坦草原。',
    "center": {
      "lat": 48,
      "lng": 66
    }
  },
  "habitats": [
    {
      "name": "干旱草原与半荒漠",
      "realm": "terrestrial",
      "description": '它们在少树的草原和半荒漠取食、集群和迁移，公路及围栏可能挡住通行路线。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "禾草",
      "草本植物",
      "灌木"
    ],
    "description": "高鼻羚羊吃禾草、其他草本和灌木。它们低头取食，也会随食物和季节变化在开阔地带移动。"
  },
  "tags": [
    "高鼻羚羊",
    "向下鼓起的大鼻子"
  ],
  "summary": "高鼻羚羊膨大的鼻子向下垂，鼻孔朝下。鼻部能过滤扬尘，也能在寒冷时温暖吸入的空气。",
  "description": '高鼻羚羊在开阔草原上成群生活，随季节迁移寻找植物。雄性有浅色、带环纹的角，雌性没有角；幼仔在春季出生，由母亲哺乳。',
  "storySections": [
    {
      key: 'nose',
      label: '生活与认识',
      title: '鼓鼓的鼻子垂下来',
      body: '高鼻羚羊有膨大的鼻部，鼻孔朝下。大鼻子能帮助过滤扬起的尘土，并在寒冷时温暖吸入的空气。',
    },
    {
      key: 'horns',
      label: '生活与认识',
      title: '雄性头上有角',
      body: '雄性高鼻羚羊长着浅色、带环状纹的角，雌性没有角。膨大的鼻子则是雌雄共有的特征。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '在草原吃植物',
      body: '高鼻羚羊吃禾草、其他草本和灌木。它们低头取食，也会随食物和季节变化在开阔地带移动。',
    },
    {
      key: 'herd',
      label: '生活与认识',
      title: '跟着群体走',
      body: '高鼻羚羊会成群活动并进行季节迁移。公路、围栏等障碍可能阻断它们的路线，保护工作需要保留通行空间。',
    },
    {
      key: 'calf',
      label: '生活与认识',
      title: '春天的小羚羊',
      body: '雌性在春季生下幼仔，并用乳汁喂养。母幼图能比较体形，不能据此判断幼仔的精确年龄。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '恢复之后继续保护',
      body: '高鼻羚羊的全球 IUCN 等级已从极危调整为近危。保护工作帮助种群恢复，但偷猎、疾病暴发和迁移通道受阻仍威胁它们。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '大鼻子适应草原生活',
      body: 'Linnaeus 于 1766 年描述了这个物种，现用学名为 Saiga tatarica。“高鼻”对应下垂膨大的鼻部，鼻孔朝下。夏季群体奔跑会扬起尘土，鼻部能过滤这些颗粒；寒冷时，它还能温暖吸入的空气。',
    },
  ],
  "keyFacts": [
    '膨大的鼻部能过滤扬尘，并在寒冷时温暖吸入的空气。',
    '雄性有带环纹的角，雌性没有角。',
    '它们吃禾草、其他草本和灌木。',
    '高鼻羚羊成群活动，随季节迁移。',
    '雌性在春季产仔，用乳汁喂养幼仔。',
  ],
  "threats": [
    "偷猎",
    "疾病暴发",
    "迁移通道受阻"
  ],
  "conservationActions": [
    "保护迁移通道",
    "反偷猎巡护",
    "监测疾病与种群"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "向下鼓起的大鼻子"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "禾草"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "干旱草原与半荒漠"
    }
  ],
  "media": {
    "image": "./images/species/saiga/01-cover.webp",
    "alt": "高鼻羚羊与生活环境的全身场景",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/saiga/02-observation.webp",
        "title": "看看大鼻子",
        "alt": "雄性高鼻羚羊的鼻部膨大下垂",
        "caption": "AI 生成科学情景重建。雄性高鼻羚羊的鼻部膨大下垂。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/saiga/03-observation.webp",
        "title": "雌性没有角",
        "alt": "右侧无角的雌性高鼻羚羊与左侧有角的雄性站在草原",
        "caption": "AI 生成科学情景重建。右侧无角的雌性高鼻羚羊与左侧有角的雄性站在草原。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/saiga/04-observation.webp",
        "title": "低头吃植物",
        "alt": "雄性高鼻羚羊低头取食",
        "caption": "AI 生成科学情景重建。雄性高鼻羚羊低头取食。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/saiga/05-observation.webp",
        "title": "沿草原移动",
        "alt": "一小群高鼻羚羊穿过开阔草原",
        "caption": "AI 生成科学情景重建。一小群高鼻羚羊穿过开阔草原。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/saiga/06-observation.webp",
        "title": "母亲和幼仔",
        "alt": "高鼻羚羊幼仔站在无角雌性前方，旁边有一只有角雄性",
        "caption": "AI 生成科学情景重建。高鼻羚羊幼仔站在无角雌性前方，旁边有一只有角雄性。",
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
      "title": "ASM Mammal Diversity Database — 分类与名称",
      "url": "https://www.mammaldiversity.org/taxon/1006176/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-13"
    },
    {
      "title": "Saiga Conservation Alliance — 外形与生活",
      "url": "https://saiga-conservation.org/saigas/",
      "kind": "ecology",
      "accessedAt": "2026-09-13"
    },
    {
      "title": "IUCN — 全球保护等级（ASM MDD 转引）",
      "url": "https://www.mammaldiversity.org/taxon/1006176/",
      "kind": "conservation",
      "accessedAt": "2026-09-13"
    },
    {
      title: 'GBIF：Saiga tatarica 的命名作者与年份',
      url: 'https://www.gbif.org/species/2441067',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-13",
  "updatedAt": "2026-09-13"
} as const satisfies Species;

export default profile;
