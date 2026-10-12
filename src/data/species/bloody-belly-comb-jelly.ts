import type { Species } from '../../types/species.ts';

const profile = {
  "id": "bloody-belly-comb-jelly",
  "slug": "bloody-belly-comb-jelly",
  "names": {
    "zh": "血腹栉水母",
    "en": "Bloody-belly Comb Jelly"
  },
  "scientificName": "Lampocteis cruentiventer",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Ctenophora",
      "zhName": "栉水母动物门"
    },
    "class": {
      "scientificName": "Tentaculata",
      "zhName": "触手纲"
    },
    "order": {
      "scientificName": "Lobata",
      "zhName": "兜水母目"
    },
    "family": {
      "scientificName": "Lampoctenidae",
      "zhName": "灯栉水母科"
    },
    "genus": {
      "scientificName": "Lampocteis",
      "zhName": "灯栉水母属"
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
    "assessor": "本次未核实全球物种级 IUCN 评估，沿用项目 NE 占位口径；不表示没有保护风险。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲",
      "亚洲"
    ],
    "regions": [
      "北太平洋深层水域"
    ],
    "countries": [],
    "range": 'MBARI 列出北太平洋范围，包括加拿大至下加利福尼亚及日本。记录水深约 250 至 1500 米，生活在水体中层而非固定在海底；不同资料的观察深度区间不完全相同。'
  },
  "habitats": [
    {
      "name": "深海中层水域",
      "realm": "marine",
      "description": '在北太平洋中层水体中游泳，记录深度约 250 至 1500 米，包括部分低氧水层。不同资料的观察深度区间有所差异。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "max": 16,
      "unit": "cm",
      "note": "MBARI 给出的最大大小，非所有个体的固定体长。"
    }
  },
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [],
    "description": '本种属于捕食性栉水母，但具体野外食谱尚未明确。红色消化区域能遮掩吞入猎物的发光，不能据此确定每种猎物或比例。'
  },
  "tags": [
    "血腹栉水母",
    "深海中层水域"
  ],
  "summary": '血腹栉水母在北太平洋深水中游动，八行梳板的纤毛负责推进。红色消化区域在深海中显得暗，能够遮掩吞入的发光猎物。',
  "description": '血腹栉水母属于栉水母动物门，身体柔软，前端带宽大的口叶。观察灯照亮时，深红消化区域和梳板彩色光带格外明显；光带来自纤毛对入射光的衍射，随光线与角度改变。它是捕食者，但具体野外食谱仍未知。MBARI 汇总最大体长为 16 厘米，记录水深约 250 至 1500 米。',
  "storySections": [
    {
      key: 'observation-1',
      label: '运动',
      title: '梳板纤毛摆动推动身体',
      body: '八行梳板由许多细小纤毛组成，纤毛摆动推动动物游泳。入射光经过梳板后形成彩色衍射光带。',
    },
    {
      key: 'observation-2',
      label: '光学',
      title: '彩色光带随光线改变',
      body: '梳板上的彩色光带随照明与角度变化，属于对入射光的衍射。识别这一效果需要区分照明条件与动物自身的组织颜色。',
    },
    {
      key: 'observation-3',
      label: '腹部',
      title: '深红色遮掩发光食物',
      body: '深红消化区域能够遮掩吞入的发光猎物，降低身体被从内部照亮的机会。观察灯使红色鲜亮，自然深海中红色则显得暗。',
    },
    {
      key: 'observation-4',
      label: '口叶',
      title: '宽大口叶是柔软身体的一部分',
      body: '身体前端有宽大的口叶，梳板分布在体表。它属于栉水母动物门，与常见伞状刺胞水母具有不同的身体结构。',
    },
    {
      key: 'observation-5',
      label: '研究',
      title: '具体食谱仍待观察',
      body: '本种生活在深海水体中，局部录像提供形态和行为线索，但具体食谱仍不明确。连续观测与可靠个体记录才能进一步判断取食方式。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '2001 年建立新属与新科',
      body: 'Harbison、Matsumoto 与 Robison 在 2001 年正式描述 Lampocteis cruentiventer，同时建立新属和 Lampoctenidae 科。血红色消化区域形成了“血腹”的名称印象，梳板衍射光则是另一种视觉效果。研究者把这些结构与深海隐蔽和运动联系起来，具体食谱仍待确认。',
    },
  ],
  "keyFacts": [
    "属于栉水母动物门。",
    "身体有八行梳板。",
    "梳板的彩色光带来自入射光的衍射。",
    "MBARI 列出的最大体长为 16 厘米，具体食谱未知。"
  ],
  "threats": [
    "本次未核实全球物种级威胁排序。"
  ],
  "conservationActions": [
    "通过影像观察，保留来源与物种限定。",
    "减少水域污染，野外观察不取走活体。"
  ],
  "metrics": {
    "maxDiveDepthM": 1500
  },
  "featuredStats": [
    {
      "key": "combs",
      "label": "梳板行",
      "value": "8 行"
    },
    {
      "key": "depth",
      "label": "记录水深",
      "value": "250—1500",
      "unit": "m"
    },
    {
      "key": "length",
      "label": "最大体长",
      "value": "16",
      "unit": "cm"
    }
  ],
  "media": {
    "image": "./images/species/bloody-belly-comb-jelly/01-cover.webp",
    "alt": "血腹栉水母及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/bloody-belly-comb-jelly/02-observation.webp",
        "title": "沿身体找彩色光带",
        "alt": "血腹栉水母：沿身体找彩色光带",
        "caption": "AI 生成科学情景重建。梳板由许多细小纤毛组成，动物靠纤毛摆动游泳。观察灯照射后，可在梳板上看见衍射形成的彩色光带。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bloody-belly-comb-jelly/03-observation.webp",
        "title": "一排排梳状纤毛",
        "alt": "血腹栉水母：一排排梳状纤毛",
        "caption": "AI 生成科学情景重建。微距图放大一条梳板行。光带随光线和角度改变，生成图不用于计数纤毛，也不是实际显微照片。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bloody-belly-comb-jelly/04-observation.webp",
        "title": "中央的深红色",
        "alt": "血腹栉水母：中央的深红色",
        "caption": "AI 生成科学情景重建。深红色消化区域能遮掩吞入的发光猎物。观察灯让红色显现，自然深海的环境光不能让它像图中一样鲜亮。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bloody-belly-comb-jelly/05-observation.webp",
        "title": "柔软的口叶",
        "alt": "血腹栉水母：柔软的口叶",
        "caption": "AI 生成科学情景重建。身体前端有宽大的口叶。它属于栉水母动物门，图中的柔软口叶和梳板帮助区分常见伞状水母外形。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bloody-belly-comb-jelly/06-observation.webp",
        "title": "游在深海水体中",
        "alt": "血腹栉水母：游在深海水体中",
        "caption": "AI 生成科学情景重建。周围可见细小漂浮颗粒。画面采用模拟观察灯；具体食谱仍不明确，不在图中虚构某种猎物或进食过程。",
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
      "title": "MBARI：血腹栉水母",
      "url": "https://www.mbari.org/animal/bloody-belly-comb-jelly/",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "蒙特雷湾水族馆：梳板衍射与生活范围",
      "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/bloodybelly-comb-jelly",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "WoRMS：接受学名与分类",
      "url": "https://www.marinespecies.org/aphia.php?id=265955&p=taxdetails",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      title: 'GBIF: Lampocteis cruentiventer Harbison, Matsumoto & Robison, 2001 nomenclatural record',
      url: 'https://www.gbif.org/species/2501200',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
