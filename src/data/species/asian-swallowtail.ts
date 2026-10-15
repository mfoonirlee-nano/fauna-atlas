import type { Species } from '../../types/species.ts';

const profile = {
  "id": "asian-swallowtail",
  "slug": "asian-swallowtail",
  "names": {
    "zh": "柑橘凤蝶",
    "en": "Asian Swallowtail"
  },
  "scientificName": "Papilio xuthus",
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
      "scientificName": "Papilionidae",
      "zhName": "凤蝶科"
    },
    "genus": {
      "scientificName": "Papilio",
      "zhName": "凤蝶属"
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
    "assessor": "采用项目 NE 占位口径：本批未确认可引用的全球物种级 IUCN 评估，不代表已证实从未评估。农业、园林用途或地区等级不代替全球等级。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲",
      "大洋洲"
    ],
    "regions": [
      "有芸香科植物的园林与开阔林缘"
    ],
    "countries": [],
    "range": "主要分布于东亚及邻近地区，中国多地、日本等地有记录，也随植物栽培传播至夏威夷等太平洋岛屿。台湾的低海拔观察与全球分布分别记录，不把园林栽培点当作野外原产证据。"
  },
  "habitats": [
    {
      "name": "有芸香科植物的园林与开阔林缘",
      "realm": "terrestrial",
      "description": "主要分布于东亚及邻近地区，中国多地、日本等地有记录，也随植物栽培传播至夏威夷等太平洋岛屿。台湾的低海拔观察与全球分布分别记录，不把园林栽培点当作野外原产证据。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore",
      "nectarivore"
    ],
    "foods": [
      "花蜜",
      "芸香科植物叶片"
    ],
    "description": "成蝶访问花朵吸取花蜜，幼虫取食柑橘、花椒等芸香科植物的叶片。成蝶与幼虫利用的食物不同，不能给整种动物只写一种食物。"
  },
  "tags": [
    "柑橘凤蝶",
    "有芸香科植物的园林与开阔林缘"
  ],
  "summary": "柑橘凤蝶，成蝶翅面黑褐色与黄白色条斑相间，后翅有细长尾突，近臀角可见红斑和蓝色区域。",
  "description": "成蝶翅面黑褐色与黄白色条斑相间，后翅有细长尾突，近臀角可见红斑和蓝色区域。不同季节个体的大小和黑带宽度可有差异，不能只按体型另分物种。成蝶会到花上访问，停下时可以观察尾突与翅面条纹。幼虫主要在寄主植物上爬行，不具成蝶的翅；尾突是翅的一部分，不是脚或触角。它经过卵、幼虫、蛹、成虫。早龄幼虫黑白相间、外观像鸟粪，末龄转为绿色并有眼状斑，随后化蛹；眼状斑不是头部真正的眼。图库分别展示两种龄期、蛹与卵。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形辨认",
      "body": "成蝶翅面黑褐色与黄白色条斑相间，后翅有细长尾突，近臀角可见红斑和蓝色区域。不同季节个体的大小和黑带宽度可有差异，不能只按体型另分物种。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "成蝶会到花上访问，停下时可以观察尾突与翅面条纹。幼虫主要在寄主植物上爬行，不具成蝶的翅；尾突是翅的一部分，不是脚或触角。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "成蝶访问花朵吸取花蜜，幼虫取食柑橘、花椒等芸香科植物的叶片。成蝶与幼虫利用的食物不同，不能给整种动物只写一种食物。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从幼体到成体",
      "body": "它经过卵、幼虫、蛹、成虫。早龄幼虫黑白相间、外观像鸟粪，末龄转为绿色并有眼状斑，随后化蛹；眼状斑不是头部真正的眼。图库分别展示两种龄期、蛹与卵。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的范围",
      "body": "本档案指 Papilio xuthus，属于凤蝶科凤蝶属。幼虫会吃柑橘叶并不能单独确定物种；其他凤蝶也利用芸香科植物，应结合成蝶条纹、尾突及幼虫细节核对。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：早龄与末龄幼虫的颜色怎样不同？观察任务：从步道看寄主叶片，记录是否有卵或取食痕，不翻动蛹，不触碰幼虫来诱发防御。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "柑橘凤蝶的名称与记录",
      "body": "林奈于 1767 年发表 Papilio xuthus，接受名称的命名作者没有括号。中文柑橘凤蝶联系幼虫寄主植物，英文 Asian Swallowtail 联系其主要分布；命名年份与后来解析幼虫变色的研究年份不同。"
    }
  ],
  "keyFacts": [
    "成蝶翅面黑褐色与黄白色条斑相间，后翅有细长尾突，近臀角可见红斑和蓝色区域。不同季节个体的大小和黑带宽度可有差异，不能只按体型另分物种。",
    "成蝶访问花朵吸取花蜜，幼虫取食柑橘、花椒等芸香科植物的叶片。成蝶与幼虫利用的食物不同，不能给整种动物只写一种食物。",
    "它经过卵、幼虫、蛹、成虫。早龄幼虫黑白相间、外观像鸟粪，末龄转为绿色并有眼状斑，随后化蛹；眼状斑不是头部真正的眼。图库分别展示两种龄期、蛹与卵。"
  ],
  "threats": [],
  "conservationActions": [
    "保留原处生活环境，以拍照记录替代捕捉；不挖巢、不带走卵或幼体，不向其他地区放生。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "有芸香科植物的园林与开阔林缘"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "花上合翅取蜜"
    }
  ],
  "media": {
    "image": "./images/species/asian-swallowtail/01-cover.webp",
    "alt": "柑橘凤蝶及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建；翅纹参考 Alpsdake，CC BY-SA 3.0，已改编，图像按同协议分享",
    "gallery": [
      {
        "image": "./images/species/asian-swallowtail/02-observation.webp",
        "title": "花上合翅取蜜",
        "alt": "柑橘凤蝶：花上合翅取蜜，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成蝶吸蜜情景；幼虫吃叶，食物不同。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建；翅纹参考 Alpsdake，CC BY-SA 3.0，已改编，图像按同协议分享"
      },
      {
        "image": "./images/species/asian-swallowtail/03-observation.webp",
        "title": "像鸟粪的早龄幼虫",
        "alt": "柑橘凤蝶：像鸟粪的早龄幼虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。黑白体色的早龄幼虫，不是受伤个体。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-swallowtail/04-observation.webp",
        "title": "绿色的末龄幼虫",
        "alt": "柑橘凤蝶：绿色的末龄幼虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。绿色末龄幼虫；眼状斑不是真眼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-swallowtail/05-observation.webp",
        "title": "丝带固定的蛹",
        "alt": "柑橘凤蝶：丝带固定的蛹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。蛹期与固定丝带，蛹颜色会受环境影响。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-swallowtail/06-observation.webp",
        "title": "叶上的球形卵",
        "alt": "柑橘凤蝶：叶上的球形卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。球形卵重建，不代表固定产卵位置或数量。",
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
      "title": "GBIF：接受名称、作者与分类链",
      "url": "https://www.gbif.org/species/1937819",
      "kind": "taxonomy",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "台湾生命大百科：柑橘凤蝶外形、分布与寄主",
      "url": "https://taieol.tw/pages/104327/articles",
      "kind": "general",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "幼虫龄期伪装变化的原始研究",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3386895/",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "Notch 与 Delta 调节幼虫体色图案研究",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7347997/",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "蛹保护色与环境条件研究",
      "url": "https://www.sciencedirect.com/science/article/pii/S0022191006000813",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "Alpsdake：柑橘凤蝶成虫翅纹参考，CC BY-SA 3.0",
      "url": "https://commons.wikimedia.org/wiki/File:Papilio_xuthus_front_view_2011-07-16.jpg",
      "kind": "general",
      "accessedAt": "2026-10-15"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-15",
  "updatedAt": "2026-10-15"
} as const satisfies Species;

export default profile;
