import type { Species } from '../../types/species.ts';

const profile = {
  "id": "harlequin-ladybird",
  "slug": "harlequin-ladybird",
  "names": {
    "zh": "异色瓢虫",
    "en": "Harlequin Ladybird"
  },
  "scientificName": "Harmonia axyridis",
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
      "scientificName": "Coleoptera",
      "zhName": "鞘翅目"
    },
    "family": {
      "scientificName": "Coccinellidae",
      "zhName": "瓢虫科"
    },
    "genus": {
      "scientificName": "Harmonia",
      "zhName": "异瓢虫属"
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
      "欧洲",
      "北美洲",
      "南美洲"
    ],
    "regions": [
      "有蚜虫的园林、农田与林缘植被"
    ],
    "countries": [],
    "range": "原产亚洲，在欧洲和美洲等地区也有引入及扩散记录。在部分引入地区会影响本地瓢虫；本地有益捕食作用与外来地区影响需要分别讨论。"
  },
  "habitats": [
    {
      "name": "有蚜虫的园林、农田与林缘植被",
      "realm": "terrestrial",
      "description": "原产亚洲，在欧洲和美洲等地区也有引入及扩散记录。在部分引入地区会影响本地瓢虫；本地有益捕食作用与外来地区影响需要分别讨论。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "蚜虫",
      "介壳虫等小型昆虫",
      "其他食物"
    ],
    "description": "异色瓢虫成虫和幼虫都能捕食蚜虫等小型昆虫，也可利用其他食物。它在不同地区的生态影响不同，不能因为会吃蚜虫就自行搬运或放飞到新地方。"
  },
  "tags": [
    "异色瓢虫",
    "有蚜虫的园林、农田与林缘植被"
  ],
  "summary": "异色瓢虫，成虫身体拱圆，鞘翅花纹变化很大，可见橙底黑斑，也有黑底红斑等形式。",
  "description": "成虫身体拱圆，鞘翅花纹变化很大，可见橙底黑斑，也有黑底红斑等形式。前胸背板常有浅色边缘及深色图案；斑点数不能当作年龄，也不能单独作为定种依据。成虫会飞，也在植物上爬行寻找食物。幼虫身体较长、带突起，外观不像圆圆的成虫；发现它时可先拍照比对，不因不像瓢虫就清除。本种经历卵、幼虫、蛹、成虫。卵常呈黄色并成簇直立附在叶面，幼虫多为深色并有橙色区，蛹附着在植物上；蛹期与正在取食的幼虫分开标注。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形辨认",
      "body": "成虫身体拱圆，鞘翅花纹变化很大，可见橙底黑斑，也有黑底红斑等形式。前胸背板常有浅色边缘及深色图案；斑点数不能当作年龄，也不能单独作为定种依据。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "成虫会飞，也在植物上爬行寻找食物。幼虫身体较长、带突起，外观不像圆圆的成虫；发现它时可先拍照比对，不因不像瓢虫就清除。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "异色瓢虫成虫和幼虫都能捕食蚜虫等小型昆虫，也可利用其他食物。它在不同地区的生态影响不同，不能因为会吃蚜虫就自行搬运或放飞到新地方。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从幼体到成体",
      "body": "本种经历卵、幼虫、蛹、成虫。卵常呈黄色并成簇直立附在叶面，幼虫多为深色并有橙色区，蛹附着在植物上；蛹期与正在取食的幼虫分开标注。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的范围",
      "body": "本档案限定 Harmonia axyridis，属于瓢虫科异瓢虫属。它与已有七星瓢虫分别建档；同一种异色瓢虫的多种色型不另增加物种数。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：两种色型的身体轮廓有什么共同点？观察任务：在有蚜虫的植物旁寻找成虫或幼虫，记录花纹，不数斑点猜年龄。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "异色瓢虫的名称与记录",
      "body": "Pallas 于 1773 年发表本种名称，现用 Harmonia axyridis，作者加括号。Harlequin Ladybird 和 Multicolored Asian Lady Beetle 都联系它多变的外观；色型名称不等于独立物种名称。"
    }
  ],
  "keyFacts": [
    "成虫身体拱圆，鞘翅花纹变化很大，可见橙底黑斑，也有黑底红斑等形式。前胸背板常有浅色边缘及深色图案；斑点数不能当作年龄，也不能单独作为定种依据。",
    "异色瓢虫成虫和幼虫都能捕食蚜虫等小型昆虫，也可利用其他食物。它在不同地区的生态影响不同，不能因为会吃蚜虫就自行搬运或放飞到新地方。",
    "本种经历卵、幼虫、蛹、成虫。卵常呈黄色并成簇直立附在叶面，幼虫多为深色并有橙色区，蛹附着在植物上；蛹期与正在取食的幼虫分开标注。"
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
      "value": "有蚜虫的园林、农田与林缘植被"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "黑底红斑的色型"
    }
  ],
  "media": {
    "image": "./images/species/harlequin-ladybird/01-cover.webp",
    "alt": "异色瓢虫及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/harlequin-ladybird/02-observation.webp",
        "title": "黑底红斑的色型",
        "alt": "异色瓢虫：黑底红斑的色型，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。另一种成虫色型，斑点不是年龄。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/harlequin-ladybird/03-observation.webp",
        "title": "捕食蚜虫的幼虫",
        "alt": "异色瓢虫：捕食蚜虫的幼虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。深色带橙纹的幼虫，不是成虫缩小版。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/harlequin-ladybird/04-observation.webp",
        "title": "附着在植物上的蛹",
        "alt": "异色瓢虫：附着在植物上的蛹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。蛹期重建，不是正在进食的幼虫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/harlequin-ladybird/05-observation.webp",
        "title": "叶面的黄色卵簇",
        "alt": "异色瓢虫：叶面的黄色卵簇，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。卵簇数量为情景，不代表固定产卵数。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/harlequin-ladybird/06-observation.webp",
        "title": "成虫寻找蚜虫",
        "alt": "异色瓢虫：成虫寻找蚜虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。取食情景，不代表全部食谱。",
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
      "url": "https://www.gbif.org/species/4989904",
      "kind": "taxonomy",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "UC IPM：异色瓢虫形态、生活史与食性",
      "url": "https://ipm.ucanr.edu/natural-enemies/multicolored-asian-lady-beetle/",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "UC ANR：原产范围与引入地区影响",
      "url": "https://ucanr.edu/blog/pests-urban-landscape/article/multicolored-asian-lady-beetle-bad",
      "kind": "distribution",
      "accessedAt": "2026-10-15"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-15",
  "updatedAt": "2026-10-15"
} as const satisfies Species;

export default profile;
