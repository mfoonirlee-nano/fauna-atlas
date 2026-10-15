import type { Species } from '../../types/species.ts';

const profile = {
  "id": "asian-bluetail",
  "slug": "asian-bluetail",
  "names": {
    "zh": "亚洲细蟌",
    "en": "Asian Bluetail",
    "aliases": [
      "亚东细蟌",
      "东亚异痣蟌"
    ]
  },
  "scientificName": "Ischnura asiatica",
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
      "scientificName": "Odonata",
      "zhName": "蜻蜓目"
    },
    "family": {
      "scientificName": "Coenagrionidae",
      "zhName": "细蟌科"
    },
    "genus": {
      "scientificName": "Ischnura",
      "zhName": "异痣蟌属"
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
    "assessor": "采用台湾生物多样性网络明确标作国际红皮书的 LC；独立评估日期和全球趋势未核实，不填年份或推断趋势。网页更新时间及台湾地区评估日期不作全球评估日期。"
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "水田、池塘与静水岸边"
    ],
    "countries": [],
    "range": "分布于东亚等亚洲地区；台湾物种资料列水田、池塘与湖泊，并报道台湾北部、东北部记录。这是地区观察范围，不能理解为全球只存在于这些地点。"
  },
  "habitats": [
    {
      "name": "水田、池塘与静水岸边",
      "realm": "freshwater",
      "description": "分布于东亚等亚洲地区；台湾物种资料列水田、池塘与湖泊，并报道台湾北部、东北部记录。这是地区观察范围，不能理解为全球只存在于这些地点。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小型昆虫",
      "水生小动物"
    ],
    "description": "细蟌类成虫捕食小型飞虫，水生若虫捕捉水中小动物。这里描述类群共有的捕食方式，不把一只小飞虫当作本种唯一食物，也不安排人工投食。"
  },
  "tags": [
    "亚洲细蟌",
    "水田、池塘与静水岸边"
  ],
  "summary": "亚洲细蟌，身体细长，雄虫胸部有绿、黑色区，腹端附近有蓝色。",
  "description": "身体细长，雄虫胸部有绿、黑色区，腹端附近有蓝色。台湾物种资料记载雄虫第九腹节背面蓝色，是与近似细蟌对照的线索；不能只看蓝色尾端就定种。成虫在岸边植被间飞行，停栖时翅常在背上合拢。细蟌也属于蜻蜓目，细长身体与停翅姿势可以先观察，细小腹节需靠清楚的自然影像核对。它经历卵、水生若虫和有翅成虫，没有蛹期。细蟌类若虫腹端常有三片叶状尾鳃，末次蜕皮后离水成为成虫；这与本批蜻科若虫没有外露叶状尾鳃的形态不同。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形辨认",
      "body": "身体细长，雄虫胸部有绿、黑色区，腹端附近有蓝色。台湾物种资料记载雄虫第九腹节背面蓝色，是与近似细蟌对照的线索；不能只看蓝色尾端就定种。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "成虫在岸边植被间飞行，停栖时翅常在背上合拢。细蟌也属于蜻蜓目，细长身体与停翅姿势可以先观察，细小腹节需靠清楚的自然影像核对。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "细蟌类成虫捕食小型飞虫，水生若虫捕捉水中小动物。这里描述类群共有的捕食方式，不把一只小飞虫当作本种唯一食物，也不安排人工投食。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从幼体到成体",
      "body": "它经历卵、水生若虫和有翅成虫，没有蛹期。细蟌类若虫腹端常有三片叶状尾鳃，末次蜕皮后离水成为成虫；这与本批蜻科若虫没有外露叶状尾鳃的形态不同。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的范围",
      "body": "本档案指 Ischnura asiatica，台湾资料称亚东细蟌。青纹细蟌等近缘种也有蓝色腹节，不能把所有蓝尾细蟌合并；本种位于细蟌科，并非蜻科。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：它停栖时怎样收翅？观察任务：在岸上记录一只细蟌的停栖姿态，保留照片供成人核对腹节，不下水捞取若虫。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "亚洲细蟌的名称与记录",
      "body": "Brauer 在 1865 年发表本种名称，GBIF 接受 Ischnura asiatica，并将作者和年份置于括号内。本图册沿用清单中的亚洲细蟌，另记录台湾用名亚东细蟌；地区中文名不同不增加物种数。"
    }
  ],
  "keyFacts": [
    "身体细长，雄虫胸部有绿、黑色区，腹端附近有蓝色。台湾物种资料记载雄虫第九腹节背面蓝色，是与近似细蟌对照的线索；不能只看蓝色尾端就定种。",
    "细蟌类成虫捕食小型飞虫，水生若虫捕捉水中小动物。这里描述类群共有的捕食方式，不把一只小飞虫当作本种唯一食物，也不安排人工投食。",
    "它经历卵、水生若虫和有翅成虫，没有蛹期。细蟌类若虫腹端常有三片叶状尾鳃，末次蜕皮后离水成为成虫；这与本批蜻科若虫没有外露叶状尾鳃的形态不同。"
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
      "value": "水田、池塘与静水岸边"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "停栖时合拢的翅"
    }
  ],
  "media": {
    "image": "./images/species/asian-bluetail/01-cover.webp",
    "alt": "亚洲细蟌及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/asian-bluetail/02-observation.webp",
        "title": "停栖时合拢的翅",
        "alt": "亚洲细蟌：停栖时合拢的翅，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成年雄虫外观；蓝色腹节仅作观察线索。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-bluetail/03-observation.webp",
        "title": "岸边捕食小飞虫",
        "alt": "亚洲细蟌：岸边捕食小飞虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。细蟌类捕食情景，不是已验证的本种食物清单。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-bluetail/04-observation.webp",
        "title": "水生若虫的叶状尾鳃",
        "alt": "亚洲细蟌：水生若虫的叶状尾鳃，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。细蟌类水生若虫重建，腹端三片叶状尾鳃。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-bluetail/05-observation.webp",
        "title": "蜕皮后离水的成虫",
        "alt": "亚洲细蟌：蜕皮后离水的成虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。羽化情景与留下的蜕皮，成虫不是从蛹中出来。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/asian-bluetail/06-observation.webp",
        "title": "静水岸边的植被",
        "alt": "亚洲细蟌：静水岸边的植被，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。静水植被环境，不代表某次真实分布记录。",
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
      "url": "https://www.gbif.org/species/1423350",
      "kind": "taxonomy",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "台湾生命大百科：亚东细蟌形态与栖地",
      "url": "https://taieol.tw/pages/108334/articles",
      "kind": "general",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "NParks：蜻蜓目生活史与湿地观察",
      "url": "https://www.nparks.gov.sg/docs/default-source/sbwr-wetlands-newsletter/wetlands-newsletter--vol-13-no-3-dec-2006.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "台湾生物多样性网络：国际红皮书等级",
      "url": "https://www.tbn.org.tw/taxa/db43a9f2-b585-4ffb-b0e8-70af5c18f438",
      "kind": "conservation",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "British Dragonfly Society：蜻蜓目生活史与细蟌尾鳃",
      "url": "https://british-dragonflies.org.uk/odonata/life-cycle-and-biology/",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "生物多样性：大型底栖无脊椎动物名录中的异痣蟌属",
      "url": "https://www.biodiversity-science.net/fileup/1005-0094/SUPPL/supplFile_art_20240816155117.pdf",
      "kind": "taxonomy",
      "accessedAt": "2026-10-15"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-15",
  "updatedAt": "2026-10-15"
} as const satisfies Species;

export default profile;
