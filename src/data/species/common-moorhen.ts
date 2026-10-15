import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-moorhen",
  "slug": "common-moorhen",
  "names": {
    "zh": "黑水鸡",
    "en": "Common Moorhen"
  },
  "scientificName": "Gallinula chloropus",
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
      "scientificName": "Gruiformes",
      "zhName": "鹤形目"
    },
    "family": {
      "scientificName": "Rallidae",
      "zhName": "秧鸡科"
    },
    "genus": {
      "scientificName": "Gallinula",
      "zhName": "黑水鸡属"
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
    "assessor": "采用所引物种资料明列的全球 IUCN LC；独立评估日期和全球趋势未核实，不补写年份。地区等级与地区数量变化不代替全球评估。"
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "亚洲",
      "欧洲",
      "非洲"
    ],
    "regions": [
      "公园池塘、沟渠与芦苇水边"
    ],
    "countries": [],
    "range": "分布于欧洲、非洲和亚洲多种低地湿地，中国公园池塘、水渠与水边草丛中可见。留居与迁徙依当地种群而异，本档案不将美洲近缘种并入分布。",
    "center": {
      "lat": 22.47,
      "lng": 114.01
    }
  },
  "habitats": [
    {
      "name": "公园池塘、沟渠与芦苇水边",
      "realm": "freshwater",
      "description": "分布于欧洲、非洲和亚洲多种低地湿地，中国公园池塘、水渠与水边草丛中可见。留居与迁徙依当地种群而异，本档案不将美洲近缘种并入分布。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "水生植物",
      "种子",
      "小型无脊椎动物"
    ],
    "description": "黑水鸡吃植物、种子及小型无脊椎动物，会在水面、泥岸和草地寻找食物。它在岸边啄食不表示它只在陆地进食，观察时无需投喂。"
  },
  "tags": [
    "黑水鸡",
    "公园池塘、沟渠与芦苇水边"
  ],
  "summary": "黑水鸡成鸟红嘴黄尖，身体两侧有白纹，常用细长脚趾在水边植被间行走。",
  "description": "成鸟身体深灰黑，背部褐色，嘴与额甲红色、嘴尖黄色，胁部有白色细纹，尾下也有白色。腿和细长脚趾偏绿色，趾间没有鸭那样的连蹼；幼鸟偏褐，缺少成鸟醒目的红额甲。它会游泳，也会沿岸走动或穿行水边植被，抬尾时可见尾下白色。长趾帮助它在松软地面和植物上分散重量；不要为了看脚而追赶躲进芦苇的鸟。亲鸟在水边植物间筑巢，雌雄参与孵卵。黑色绒羽的雏鸟能游泳，仍依靠亲鸟照料。随成长，幼鸟换上褐色羽毛，再逐渐呈现成鸟的嘴色与额甲。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形辨认",
      "body": "成鸟身体深灰黑，背部褐色，嘴与额甲红色、嘴尖黄色，胁部有白色细纹，尾下也有白色。腿和细长脚趾偏绿色，趾间没有鸭那样的连蹼；幼鸟偏褐，缺少成鸟醒目的红额甲。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "它会游泳，也会沿岸走动或穿行水边植被，抬尾时可见尾下白色。长趾帮助它在松软地面和植物上分散重量；不要为了看脚而追赶躲进芦苇的鸟。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "黑水鸡吃植物、种子及小型无脊椎动物，会在水面、泥岸和草地寻找食物。它在岸边啄食不表示它只在陆地进食，观察时无需投喂。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从幼体到成体",
      "body": "亲鸟在水边植物间筑巢，雌雄参与孵卵。黑色绒羽的雏鸟能游泳，仍依靠亲鸟照料。随成长，幼鸟换上褐色羽毛，再逐渐呈现成鸟的嘴色与额甲。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的范围",
      "body": "本档案限定旧大陆的 Gallinula chloropus。美洲的 Gallinula galeata 现另作物种处理，旧资料中合并使用的 Common Moorhen 范围不能直接照搬；黑水鸡也不属于家鸡所在的雉科。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：黑水鸡与白骨顶的嘴分别是什么颜色？观察任务：从步道记录一次抬尾或岸边行走，画下白色胁纹，不进入芦苇和巢区。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "黑水鸡的名称与记录",
      "body": "林奈在 1758 年发表本种名称，今天使用 Gallinula chloropus，作者名带括号。英文旧资料里的 Common Moorhen 曾涵盖后来拆分的美洲近缘种，本档案用学名限定记录范围，避免同名造成混淆。"
    }
  ],
  "keyFacts": [
    "成鸟身体深灰黑，背部褐色，嘴与额甲红色、嘴尖黄色，胁部有白色细纹，尾下也有白色。腿和细长脚趾偏绿色，趾间没有鸭那样的连蹼；幼鸟偏褐，缺少成鸟醒目的红额甲。",
    "黑水鸡吃植物、种子及小型无脊椎动物，会在水面、泥岸和草地寻找食物。它在岸边啄食不表示它只在陆地进食，观察时无需投喂。",
    "亲鸟在水边植物间筑巢，雌雄参与孵卵。黑色绒羽的雏鸟能游泳，仍依靠亲鸟照料。随成长，幼鸟换上褐色羽毛，再逐渐呈现成鸟的嘴色与额甲。"
  ],
  "threats": [
    "栖息地改变",
    "人为干扰"
  ],
  "conservationActions": [
    "按场所规则在原处观察，为动物保留取食、休息和繁殖空间。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "公园池塘、沟渠与芦苇水边"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "游泳时的白色胁纹"
    }
  ],
  "media": {
    "image": "./images/species/common-moorhen/01-cover.webp",
    "alt": "黑水鸡及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-moorhen/02-observation.webp",
        "title": "游泳时的白色胁纹",
        "alt": "黑水鸡：游泳时的白色胁纹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。红嘴黄尖与白色胁纹是成鸟观察线索。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-moorhen/03-observation.webp",
        "title": "植被上的细长脚趾",
        "alt": "黑水鸡：植被上的细长脚趾，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。脚趾细长、没有连蹼；图像不作精确趾数证据。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-moorhen/04-observation.webp",
        "title": "岸边寻找种子",
        "alt": "黑水鸡：岸边寻找种子，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。取食情景重建，种子只占食谱一部分。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-moorhen/05-observation.webp",
        "title": "褐色羽毛的幼鸟",
        "alt": "黑水鸡：褐色羽毛的幼鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼鸟缺少成鸟醒目的红额甲。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-moorhen/06-observation.webp",
        "title": "巢边的亲鸟与雏鸟",
        "alt": "黑水鸡：巢边的亲鸟与雏鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。绒羽雏鸟与亲鸟的重建，非真实巢位记录。",
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
      "title": "GBIF：接受名称、命名作者与分类链",
      "url": "https://www.gbif.org/species/5228199",
      "kind": "taxonomy",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "物种外形与生活观察",
      "url": "https://www.rspb.org.uk/birds-and-wildlife/moorhen",
      "kind": "general",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "BTO：生态记录与全球保护等级",
      "url": "https://www.bto.org/learn/about-birds/birdfacts/moorhen",
      "kind": "conservation",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "生活史与范围资料",
      "url": "https://www.allaboutbirds.org/guide/Common_Gallinule/",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-15",
  "updatedAt": "2026-10-15"
} as const satisfies Species;

export default profile;
