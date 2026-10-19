import type { Species } from '../../types/species.ts';

const profile = {
  "id": "yellow-legged-hornet",
  "slug": "yellow-legged-hornet",
  "names": {
    "zh": "黄脚胡蜂",
    "en": "Yellow-legged Hornet"
  },
  "scientificName": "Vespa velutina",
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
      "scientificName": "Hymenoptera",
      "zhName": "膜翅目"
    },
    "family": {
      "scientificName": "Vespidae",
      "zhName": "胡蜂科"
    },
    "genus": {
      "scientificName": "Vespa",
      "zhName": "胡蜂属"
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
    "assessor": "本批未核实全球物种级 IUCN 评估，页面暂记 NE；检索无结果不证明从未评估，地区保护等级和入侵风险不换算成全球等级。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "亚洲原生范围及欧洲等引入地区"
    ],
    "countries": [],
    "range": "亚洲原生范围及欧洲等引入地区。本种原生于亚洲部分地区，也已引入欧洲等地。蜂群可把封闭的纸质巢建在树木或建筑附近，巢位随环境而变。地图使用中国的代表位置，不能据此判断附近有蜂巢。地图代表点不表达完整范围，也不是野外观察记录。",
    "center": {
      "lat": 25,
      "lng": 110
    }
  },
  "habitats": [
    {
      "name": "林缘、树冠与居民区绿地",
      "realm": "terrestrial",
      "description": "本种原生于亚洲部分地区，也已引入欧洲等地。蜂群可把封闭的纸质巢建在树木或建筑附近，巢位随环境而变。地图使用中国的代表位置，不能据此判断附近有蜂巢。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore",
      "insectivore"
    ],
    "foods": [
      "其他昆虫",
      "花蜜",
      "成熟果实汁液"
    ],
    "description": "成虫可取食花蜜和果汁等含糖液体。工蜂捕捉蜜蜂及其他节肢动物，把蛋白质食物带给幼虫。静态图片里的访果和巢外活动不能代表完整捕猎过程。"
  },
  "tags": [
    "黄脚胡蜂",
    "林缘、树冠与居民区绿地"
  ],
  "summary": "黄脚胡蜂能用木纤维建造纸质巢。成虫取食含糖液体，工蜂也会捕捉昆虫，为幼虫提供食物。",
  "description": "黄脚胡蜂的体色会随地理型变化。图中表现深色胸部、腹部橙黄色带和黄色足端的 nigrithorax 外观。它与金环胡蜂并非同一种，辨认时需要同时看头、胸、腹部与足的纹样。本档案采用 GBIF 接受的 Vespa velutina，归入膜翅目、胡蜂科、胡蜂属。图片采用常见深色地理型作示意，不用单一亚种外观覆盖本种所有地理变异。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "黄脚胡蜂的体色会随地理型变化。图中表现深色胸部、腹部橙黄色带和黄色足端的 nigrithorax 外观。它与金环胡蜂并非同一种，辨认时需要同时看头、胸、腹部与足的纹样。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "本种原生于亚洲部分地区，也已引入欧洲等地。蜂群可把封闭的纸质巢建在树木或建筑附近，巢位随环境而变。地图使用中国的代表位置，不能据此判断附近有蜂巢。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物与口器",
      "body": "成虫可取食花蜜和果汁等含糖液体。工蜂捕捉蜜蜂及其他节肢动物，把蛋白质食物带给幼虫。静态图片里的访果和巢外活动不能代表完整捕猎过程。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "从卵到成虫",
      "body": "越冬后的雌蜂可在新一季开始筑巢、产卵。卵经幼虫和蛹发育成工蜂，工蜂随后参与觅食与扩巢。温带地区常见一年一代的蜂群周期，具体时间会随气候变化。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "本档案采用 GBIF 接受的 Vespa velutina，归入膜翅目、胡蜂科、胡蜂属。图片采用常见深色地理型作示意，不用单一亚种外观覆盖本种所有地理变异。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：足的末端是否比基部浅，腹部带纹怎样排列？观察任务：在自然影像中比较纸巢外壳。现场远离巢与飞行路线，发现巢由成人联系当地专业人员处理。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Vespa velutina 的名称记录",
      "body": "Lepeletier 在 1836 年发表 Vespa velutina。不同语言的“亚洲胡蜂”可指向不止一种蜂，本档案将黄脚胡蜂和学名绑定；命名年份不等于它进入欧洲的时间。"
    }
  ],
  "keyFacts": [
    "黄脚胡蜂的体色会随地理型变化。图中表现深色胸部、腹部橙黄色带和黄色足端的 nigrithorax 外观。它与金环胡蜂并非同一种，辨认时需要同时看头、胸、腹部与足的纹样。",
    "成虫可取食花蜜和果汁等含糖液体。工蜂捕捉蜜蜂及其他节肢动物，把蛋白质食物带给幼虫。静态图片里的访果和巢外活动不能代表完整捕猎过程。",
    "越冬后的雌蜂可在新一季开始筑巢、产卵。卵经幼虫和蛹发育成工蜂，工蜂随后参与觅食与扩巢。温带地区常见一年一代的蜂群周期，具体时间会随气候变化。"
  ],
  "threats": [
    "局部生活环境变化；所引资料未量化全球种群趋势"
  ],
  "conservationActions": [
    "辨认问题：足的末端是否比基部浅，腹部带纹怎样排列？观察任务：在自然影像中比较纸巢外壳。现场远离巢与飞行路线，发现巢由成人联系当地专业人员处理。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "林缘、树冠与居民区绿地"
    },
    {
      "key": "food",
      "label": "食物观察",
      "value": "其他昆虫、花蜜"
    }
  ],
  "media": {
    "image": "./images/species/yellow-legged-hornet/01-cover.webp",
    "alt": "黄脚胡蜂及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/yellow-legged-hornet/02-observation.webp",
        "title": "橙色脸与黄色足端",
        "alt": "黄脚胡蜂：橙色脸与黄色足端，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。图示为 nigrithorax 深色地理型，不代表所有地区个体都相同。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-legged-hornet/03-observation.webp",
        "title": "果实上的成蜂",
        "alt": "黄脚胡蜂：果实上的成蜂，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成虫获取糖类食物，幼虫所需蛋白质则可来自其他昆虫。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-legged-hornet/04-observation.webp",
        "title": "封闭的纸巢外侧",
        "alt": "黄脚胡蜂：封闭的纸巢外侧，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。木纤维形成的巢壳包围巢内结构，外形不同于裸露的蜂房。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-legged-hornet/05-observation.webp",
        "title": "初期的小巢",
        "alt": "黄脚胡蜂：初期的小巢，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。新蜂群可从较小的初期巢开始，图中大小不用于推算蜂龄。 同图不同阶段作发育对照，比例仅作示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/yellow-legged-hornet/06-observation.webp",
        "title": "树冠中的纸巢",
        "alt": "黄脚胡蜂：树冠中的纸巢，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。巢位可高可低，切勿靠近、敲击或自行摘取。 同图不同阶段作发育对照，比例仅作示意。",
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
      "title": "GBIF：接受学名与分类链",
      "url": "https://www.gbif.org/species/1311477",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "佛罗里达大学：黄脚胡蜂生物学",
      "url": "https://ask.ifas.ufl.edu/publication/IN1282",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "原始研究：西班牙加利西亚的初期巢与转巢",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9597825/",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球名录：本批检索记录",
      "url": "https://api.gbif.org/v1/species/search?datasetKey=19491596-35ae-4a91-9a98-85cf505f1bd3&q=Vespa%20velutina&limit=50",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
