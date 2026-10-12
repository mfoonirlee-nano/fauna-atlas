import type { Species } from '../../types/species.ts';

const profile = {
    "id": "veiled-chameleon",
    "slug": "veiled-chameleon",
    "names": {
      "zh": "高冠变色龙",
      "en": "Veiled Chameleon",
      "aliases": []
    },
    "scientificName": "Chamaeleo calyptratus",
    "featured": true,
    "publishedAt": "2026-09-08",
    "updatedAt": "2026-09-08",
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
        "scientificName": "Reptilia",
        "zhName": "爬行纲"
      },
      "order": {
        "scientificName": "Squamata",
        "zhName": "有鳞目"
      },
      "family": {
        "scientificName": "Chamaeleonidae",
        "zhName": "避役科"
      },
      "genus": {
        "scientificName": "Chamaeleo",
        "zhName": "避役属"
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
      "assessor": "Wilms, T., Sindaco, R. & Shobrak, M."
    },
    "distribution": {
      "realms": [
        "terrestrial"
      ],
      "continents": [
        "亚洲"
      ],
      "regions": [
        "阿拉伯半岛西南部"
      ],
      "countries": [
        "也门",
        "沙特阿拉伯"
      ],
      "range": "原生于也门及沙特阿拉伯西南部的山地、河谷和灌丛；海外引入种群与宠物饲养地点不计入原生分布。",
      "center": {
        "lat": 15,
        "lng": 44
      }
    },
    "habitats": [
      {
        "name": "山地疏林与灌丛",
        "realm": "terrestrial",
        "description": "在树枝和灌木间攀爬，借助枝叶隐蔽身体。",
        "isPrimary": true
      }
    ],
    "measurements": {
      "length": {
        "max": 61,
        "unit": "cm",
        "note": "成年雄性总长上限约 24 英寸，换算后取整；包含尾巴，不代表雌雄共同成年范围。"
      }
    },
    "metrics": {},
    "diet": {
      "types": [
        "insectivore",
        "omnivore"
      ],
      "foods": [
        "昆虫",
        "其他小型无脊椎动物",
        "少量叶片"
      ],
      "description": "主要用舌捕捉昆虫，也有取食植物叶片的记录。"
    },
    "tags": [
      "山地疏林与灌丛",
      "无危",
      "分头观察"
    ],
    "summary": "高冠变色龙的两只眼睛能分别转动；锁定昆虫后，它会弹出长舌，把猎物带回口中。",
    "description": "头顶高高的冠突、侧扁的身体和能卷握树枝的尾巴，帮助你认出这种来自阿拉伯半岛的蜥蜴。成年雄性的冠突通常更高。",
    "storySections": [
      {
        key: 'identity',
        label: '头顶的高冠',
        title: '冠突随身体一起长大',
        body: '幼体的冠突较低，成年雄性通常比雌性更高大。绿、黄与褐色的体表斑带会随状态变化，不能仅靠某一种颜色判定年龄或性别。',
      },
      {
        key: 'vision',
        label: '两眼分工',
        title: '一只眼看前面，另一只看侧面',
        body: '两只突出的眼睛能分别转动，让它身体少动时也能观察不同方向。捕食时，它调整视线对准猎物，再弹出长舌。',
      },
      {
        key: 'tongue',
        label: '长舌捕虫',
        title: '在树枝上把昆虫拉回来',
        body: '发现合适的昆虫后，它会朝目标弹出舌头，黏性的舌端帮助抓住猎物，随后将舌头收回。捕猎依靠瞄准和距离判断，并非看到任何远处昆虫都能捉到。',
      },
      {
        key: 'climbing',
        label: '抓牢枝条',
        title: '脚趾夹住树枝，尾巴再握一处',
        body: '每只脚的趾分成相对的两组，适合夹握枝条。可卷握的尾巴能增加支撑点；慢慢移动时，四肢和尾巴一起维持树栖姿势。',
      },
      {
        key: 'life',
        label: '从卵到幼体',
        title: '小变色龙也会攀爬',
        body: '雌性在土中产卵，幼体孵化后独立活动。它们也有抓握的脚和卷尾，但头部冠突及成年斑纹还会继续发育。',
      },
      {
        key: 'conservation',
        label: '保护原生地',
        title: '留下树木和灌丛之间的通路',
        body: 'IUCN 2012 年发布记录将高冠变色龙列为无危。当地生境改变和野生动物贸易仍需关注，保护需要保留原生树木及灌丛。圈养个体应避免释放到其他地区。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '冠突随着小变色龙长高',
        body: 'Duméril & Duméril 于 1851 年描述了这个物种，现用学名为 Chamaeleo calyptratus。高冠变色龙的头顶冠突从幼体时期继续发育，成年雄性通常更高。两只眼睛能够分别转动，锁定昆虫后再调整视线，用长舌把猎物带回来。',
      },
    ],
    "keyFacts": [
      '成年雄性通常比雌性高大，冠突更高。',
      '两只眼睛能分别转动。',
      '用黏性舌端抓住昆虫，再将舌头收回。',
      '脚趾分成相对两组，尾巴也能卷握树枝。',
      '雌性在土中产卵，幼体孵化后独立活动。',
    ],
    "threats": [
      "局部森林和灌丛清除。",
      "野生个体捕捉与贸易。"
    ],
    "conservationActions": [
      "保留原生树木与灌丛。",
      "不捕捉野生个体，不将宠物放生。"
    ],
    "featuredStats": [
      {
        "key": "trait",
        "label": "观察重点",
        "value": "分头观察"
      },
      {
        "key": "length",
        "label": "总长上限约",
        "value": "61",
        "unit": "厘米",
        "note": "包含尾部，非成年平均值"
      }
    ],
    "sources": [
      {
        "title": "ADW — 高冠变色龙",
        "url": "https://animaldiversity.org/accounts/Chamaeleo_calyptratus/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "高冠变色龙发育与身体特征研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30839129/",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "GBIF — 分类及 IUCN 状态",
        "url": "https://www.gbif.org/taxon/TK53",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "IUCN — 2012 年发布评估",
        "url": "https://doi.org/10.2305/IUCN.UK.2012.RLTS.T176306A1437838.en",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Chamaeleo calyptratus 的命名作者与年份',
        url: 'https://www.gbif.org/species/2449133',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/veiled-chameleon/01-cover.webp",
      "alt": "高冠变色龙位于画面右侧，完整主体周围保留环境。",
      "focalPoint": {
        "x": 0.95,
        "y": 0.4
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/veiled-chameleon/02-body.webp",
          "title": "枝上的完整身体",
          "alt": "高冠变色龙侧身握住树枝，卷尾和足部可见。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/veiled-chameleon/03-detail.webp",
          "title": "高冠与眼睛",
          "alt": "高冠变色龙侧身停在枝上，可见头顶冠突与突出的眼睛。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/veiled-chameleon/04-behavior.webp",
          "title": "伸舌捕捉昆虫",
          "alt": "高冠变色龙朝昆虫伸出长舌。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/veiled-chameleon/05-life.webp",
          "title": "冠突尚低的幼体",
          "alt": "绿色幼体抓住细枝，头顶冠突尚低。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/veiled-chameleon/06-habitat.webp",
          "title": "也门山地植被",
          "alt": "也门山地河谷中生长着树木与灌丛。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        }
      ]
    }
  } as const satisfies Species;

export default profile;
