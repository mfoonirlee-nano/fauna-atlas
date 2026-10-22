import type { Species } from '../../types/species.ts';

const profile = {
  "id": "ichthyornis-dispar",
  "slug": "ichthyornis-dispar",
  "names": {
    "zh": "异齿鱼鸟",
    "en": "Ichthyornis"
  },
  "scientificName": "Ichthyornis dispar",
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
    "family": {
      "scientificName": "Ichthyornithidae",
      "zhName": "鱼鸟科"
    },
    "genus": {
      "scientificName": "Ichthyornis",
      "zhName": "鱼鸟属"
    }
  },
  "conservation": {
    "system": "Historical and fossil evidence",
    "code": "EX",
    "label": {
      "zh": "已灭绝",
      "en": "Extinct"
    },
    "trend": "unknown",
    "assessor": "依据所引博物馆资料与化石研究；未采用独立 IUCN 评估。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "北美西部内陆海道（代表化石产区）"
    ],
    "countries": [],
    "range": "异齿鱼鸟的代表性遗存范围为北美西部内陆海道（代表化石产区）。现代地名用于定位遗存，不表示完整古地理范围；现无活体分布，不提供当前代表坐标。"
  },
  "habitats": [
    {
      "name": "古海道与岸边",
      "realm": "marine",
      "description": "本种的代表化石来自北美晚白垩世海道沉积。翅骨表明它具备飞行结构，骨骼比较可讨论与水域活动的关系。画中掠过海面的姿态只作环境示意，不确定它采用哪一种现代海鸟的捕鱼动作。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "piscivore"
    ],
    "foods": [
      "鱼类",
      "其他小型水生动物"
    ],
    "description": "细小的颌尖喙与后方牙齿构成组合式取食结构，可能处理鱼类等小型动物。颅骨研究显示它兼具接近现生鸟类的部分颌部活动机制和较原始的肌肉空间，不据此编写具体捕食过程。"
  },
  "tags": [
    "异齿鱼鸟",
    "已灭绝",
    "古鸟类"
  ],
  "summary": "异齿鱼鸟能飞，颌尖有小型无牙喙，颌骨后方仍长着牙齿。",
  "description": "异齿鱼鸟能飞，颌尖有小型无牙喙，颌骨后方仍长着牙齿。观察尖细头部和展开的羽翼。它的喙集中在颌尖，牙齿位于更靠后的颌骨，不能画成整条喙边的锯齿。复原常借用现代海鸟的身体外观，羽色和软组织边界仍有推测。2018 年研究结合新发现的三维头骨材料和耶鲁模式标本，用 CT 重建颅骨。研究者在图中区分真实保存的骨片与缺失部分。AI 图只概括外形，不能替代这些模型或作为牙齿数目与脑部结构的证据。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体特征开始看",
      "body": "观察尖细头部和展开的羽翼。它的喙集中在颌尖，牙齿位于更靠后的颌骨，不能画成整条喙边的锯齿。复原常借用现代海鸟的身体外观，羽色和软组织边界仍有推测。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "化石产地与古环境",
      "body": "本种的代表化石来自北美晚白垩世海道沉积。翅骨表明它具备飞行结构，骨骼比较可讨论与水域活动的关系。画中掠过海面的姿态只作环境示意，不确定它采用哪一种现代海鸟的捕鱼动作。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "牙齿与食物线索",
      "body": "细小的颌尖喙与后方牙齿构成组合式取食结构，可能处理鱼类等小型动物。颅骨研究显示它兼具接近现生鸟类的部分颌部活动机制和较原始的肌肉空间，不据此编写具体捕食过程。"
    },
    {
      "key": "evidence",
      "label": "遗存与复原",
      "title": "用遗存检查复原",
      "body": "2018 年研究结合新发现的三维头骨材料和耶鲁模式标本，用 CT 重建颅骨。研究者在图中区分真实保存的骨片与缺失部分。AI 图只概括外形，不能替代这些模型或作为牙齿数目与脑部结构的证据。"
    },
    {
      "key": "conservation",
      "label": "灭绝记录",
      "title": "时期与末次记录的区别",
      "body": "异齿鱼鸟生活在晚白垩世，现已灭绝。不同标本来自不同时段，不能把某一标本的地层年龄或整个白垩纪结束时间直接定为本种最后个体的死亡时间。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "异齿鱼鸟的发现与名称",
      "body": "Marsh 于 1872 年命名 Ichthyornis dispar，之后研究者持续复查耶鲁保存的早期标本。Ichthyornis 的属名包含“鱼”和“鸟”的词根；名称本身不意味着它属于鱼类，也不能单独用来证明食性。"
    }
  ],
  "keyFacts": [
    "观察尖细头部和展开的羽翼。它的喙集中在颌尖，牙齿位于更靠后的颌骨，不能画成整条喙边的锯齿。复原常借用现代海鸟的身体外观，羽色和软组织边界仍有推测。",
    "2018 年研究结合新发现的三维头骨材料和耶鲁模式标本，用 CT 重建颅骨。研究者在图中区分真实保存的骨片与缺失部分。AI 图只概括外形，不能替代这些模型或作为牙齿数目与脑部结构的证据。",
    "异齿鱼鸟生活在晚白垩世，现已灭绝。不同标本来自不同时段，不能把某一标本的地层年龄或整个白垩纪结束时间直接定为本种最后个体的死亡时间。"
  ],
  "threats": [],
  "conservationActions": [
    "保存化石及其地层、产地和测年资料。",
    "区分原始化石、复制件与科学复原示意。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "period",
      "label": "代表时期",
      "value": "晚白垩世"
    },
    {
      "key": "status",
      "label": "记录状态",
      "value": "已灭绝"
    }
  ],
  "media": {
    "image": "./images/species/ichthyornis-dispar/01-cover.webp",
    "alt": "异齿鱼鸟科学复原示意，AI 生成",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学复原示意",
    "gallery": [
      {
        "image": "./images/species/ichthyornis-dispar/02-observation.webp",
        "title": "全身侧面",
        "alt": "异齿鱼鸟：全身侧面，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。观察尖细头部和展开的羽翼。它的喙集中在颌尖，牙齿位于更靠后的颌骨，不能画成整条喙边的锯齿。复原常借用现代海鸟的身体外观，羽色和软组织边界仍有推测。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/ichthyornis-dispar/03-observation.webp",
        "title": "头部外形",
        "alt": "异齿鱼鸟：头部外形，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。观察鼻吻、头部及外部附属结构；图中不展示精确内部牙齿或骨骼。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/ichthyornis-dispar/04-observation.webp",
        "title": "前侧全身",
        "alt": "异齿鱼鸟：前侧全身，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。2018 年研究结合新发现的三维头骨材料和耶鲁模式标本，用 CT 重建颅骨。研究者在图中区分真实保存的骨片与缺失部分。AI 图只概括外形，不能替代这些模型或作为牙齿数目与脑部结构的证据。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/ichthyornis-dispar/05-observation.webp",
        "title": "古环境示意",
        "alt": "异齿鱼鸟：古环境示意，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。本种的代表化石来自北美晚白垩世海道沉积。翅骨表明它具备飞行结构，骨骼比较可讨论与水域活动的关系。画中掠过海面的姿态只作环境示意，不确定它采用哪一种现代海鸟的捕鱼动作。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/ichthyornis-dispar/06-observation.webp",
        "title": "后侧与尾部",
        "alt": "异齿鱼鸟：后侧与尾部，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。观察后肢、尾部与背线，姿态不表示已确认的固定行为。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      }
    ]
  },
  "sources": [
    {
      "title": "Field 等2018 · 异齿鱼鸟三维头骨重建",
      "url": "https://www.nature.com/articles/s41586-018-0053-y",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "Dumont 等2016 · 带牙鸟牙齿结构",
      "url": "https://doi.org/10.1186/s12862-016-0753-6",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "Hinić-Frlog 与 Motani 2010 · 古鸟运动方式比较",
      "url": "https://doi.org/10.1111/j.1420-9101.2009.01909.x",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "PBDB · 化石分类记录",
      "url": "https://paleobiodb.org/classic/checkTaxonInfo?taxon_no=54877",
      "kind": "conservation",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "GBIF · 原始匹配，采用差异见研究记录",
      "url": "https://api.gbif.org/v1/species/match?name=Ichthyornis%20dispar",
      "kind": "taxonomy",
      "accessedAt": "2026-10-22"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-22",
  "updatedAt": "2026-10-22"
} as const satisfies Species;

export default profile;
