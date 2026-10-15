import type { Species } from '../../types/species.ts';

const profile = {
  "id": "eurasian-coot",
  "slug": "eurasian-coot",
  "names": {
    "zh": "白骨顶",
    "en": "Eurasian Coot"
  },
  "scientificName": "Fulica atra",
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
      "scientificName": "Fulica",
      "zhName": "骨顶属"
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
      "非洲",
      "大洋洲"
    ],
    "regions": [
      "湖泊、池塘与水草湿地"
    ],
    "countries": [],
    "range": "广布于欧亚、非洲及大洋洲的湿地，中国的湖泊、池塘等地可见。部分地区有季节性迁移，冬季可集群；某个湖泊的数量不代表全球趋势。",
    "center": {
      "lat": 22.47,
      "lng": 114.01
    }
  },
  "habitats": [
    {
      "name": "湖泊、池塘与水草湿地",
      "realm": "freshwater",
      "description": "广布于欧亚、非洲及大洋洲的湿地，中国的湖泊、池塘等地可见。部分地区有季节性迁移，冬季可集群；某个湖泊的数量不代表全球趋势。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "水草",
      "藻类",
      "种子",
      "螺",
      "昆虫幼虫"
    ],
    "description": "它主要取食水草、藻类等植物，也吃种子、螺和昆虫幼虫等。它会潜入水下取得植物，再浮出水面进食；不同环境中的食物比例会变化。"
  },
  "tags": [
    "白骨顶",
    "湖泊、池塘与水草湿地"
  ],
  "summary": "白骨顶成鸟嘴和额甲白色，脚趾两侧有瓣状皮膜，能在水面游动并潜水觅食。",
  "description": "成鸟身体灰黑，嘴和额头上方的额甲白色，眼红。脚趾两侧长有瓣状皮膜，各趾之间仍分开，和鸭脚的连蹼不同。小雏鸟有深色绒羽，头部带红橙色。它常在开阔水面游泳，也会潜水和到岸边活动。起飞前可在水面拍翅助跑，繁殖季节会守护领域。站在岸上观察即可，不用靠近诱发驱赶行为。亲鸟用湿地植物材料筑巢，双亲参与孵卵。雏鸟孵出后不久能跟随亲鸟游泳，但仍需要照料和喂食。红橙色头部的雏鸟与白额甲成鸟外形不同。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形辨认",
      "body": "成鸟身体灰黑，嘴和额头上方的额甲白色，眼红。脚趾两侧长有瓣状皮膜，各趾之间仍分开，和鸭脚的连蹼不同。小雏鸟有深色绒羽，头部带红橙色。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "它常在开阔水面游泳，也会潜水和到岸边活动。起飞前可在水面拍翅助跑，繁殖季节会守护领域。站在岸上观察即可，不用靠近诱发驱赶行为。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "它主要取食水草、藻类等植物，也吃种子、螺和昆虫幼虫等。它会潜入水下取得植物，再浮出水面进食；不同环境中的食物比例会变化。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从幼体到成体",
      "body": "亲鸟用湿地植物材料筑巢，双亲参与孵卵。雏鸟孵出后不久能跟随亲鸟游泳，但仍需要照料和喂食。红橙色头部的雏鸟与白额甲成鸟外形不同。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的范围",
      "body": "本档案指 Fulica atra，属于秧鸡科骨顶属。白骨顶和黑水鸡同属秧鸡科，但分别属于骨顶属与黑水鸡属；嘴、额甲和脚趾结构可以对照观察。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：白色额甲位于嘴的什么方向？观察任务：在岸上比较白骨顶与黑水鸡的嘴色；等鸟自行上岸再看脚，不把它赶出水。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "白骨顶的名称与记录",
      "body": "林奈在 1758 年发表 Fulica atra，GBIF 接受记录沿用这个双名，作者名没有括号。中文“白骨顶”联系白色额甲，这一醒目线索适用于成鸟；幼鸟不能只凭额头颜色判断。"
    }
  ],
  "keyFacts": [
    "成鸟身体灰黑，嘴和额头上方的额甲白色，眼红。脚趾两侧长有瓣状皮膜，各趾之间仍分开，和鸭脚的连蹼不同。小雏鸟有深色绒羽，头部带红橙色。",
    "它主要取食水草、藻类等植物，也吃种子、螺和昆虫幼虫等。它会潜入水下取得植物，再浮出水面进食；不同环境中的食物比例会变化。",
    "亲鸟用湿地植物材料筑巢，双亲参与孵卵。雏鸟孵出后不久能跟随亲鸟游泳，但仍需要照料和喂食。红橙色头部的雏鸟与白额甲成鸟外形不同。"
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
      "value": "湖泊、池塘与水草湿地"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "水面的白色额甲"
    }
  ],
  "media": {
    "image": "./images/species/eurasian-coot/01-cover.webp",
    "alt": "白骨顶及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/eurasian-coot/02-observation.webp",
        "title": "水面的白色额甲",
        "alt": "白骨顶：水面的白色额甲，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成鸟白嘴与额甲的外观重建。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-coot/03-observation.webp",
        "title": "分开的瓣状趾",
        "alt": "白骨顶：分开的瓣状趾，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示各趾两侧的瓣膜，生成图不用于精确解剖测量。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-coot/04-observation.webp",
        "title": "取食水生植物",
        "alt": "白骨顶：取食水生植物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。取食水草的情景，不表示只吃植物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-coot/05-observation.webp",
        "title": "红橙色头部的雏鸟",
        "alt": "白骨顶：红橙色头部的雏鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。雏鸟颜色不同于成鸟，非真实亲子记录。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-coot/06-observation.webp",
        "title": "巢中的卵",
        "alt": "白骨顶：巢中的卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。巢与部分卵的重建，不代表固定窝卵数。",
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
      "url": "https://www.gbif.org/species/2474377",
      "kind": "taxonomy",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "物种外形与生活观察",
      "url": "https://www.rspb.org.uk/birds-and-wildlife/eurasian-coot",
      "kind": "general",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "BTO：生态记录与全球保护等级",
      "url": "https://www.bto.org/learn/about-birds/birdfacts/coot",
      "kind": "conservation",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "香港物种记录与保护状态",
      "url": "https://avifauna.hkbws.org.hk/species/0060/007800",
      "kind": "conservation",
      "accessedAt": "2026-10-15"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-15",
  "updatedAt": "2026-10-15"
} as const satisfies Species;

export default profile;
