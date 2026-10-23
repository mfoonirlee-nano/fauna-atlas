import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-argyroneta-aquatica",
  "slug": "diving-bell-spider",
  "names": {
    "zh": "水蜘蛛",
    "en": "Diving Bell Spider",
    "aliases": [
      "水蛛",
      "潜水钟蜘蛛"
    ]
  },
  "scientificName": "Argyroneta aquatica",
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
      "scientificName": "Arachnida",
      "zhName": "蛛形纲"
    },
    "order": {
      "scientificName": "Araneae",
      "zhName": "蜘蛛目"
    },
    "family": {
      "scientificName": "Argyronetidae",
      "zhName": "水蛛科"
    },
    "genus": {
      "scientificName": "Argyroneta",
      "zhName": "水蛛属"
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
    "assessor": "本档案尚未核实适用于该物种的 IUCN 全球评估；NE 为项目资料占位，不代表已确认未受威胁，不填写评估日期。"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "欧洲",
      "亚洲"
    ],
    "regions": [
      "欧洲至东亚的淡水水域"
    ],
    "countries": [
      "德国",
      "俄罗斯",
      "中国",
      "日本",
      "韩国"
    ],
    "range": "分布从欧洲延伸到亚洲部分地区，包括中国、韩国和日本；常在有水草的池塘、湿地和缓流水域活动。2011 年呼吸研究使用德国北部埃德河附近采集的个体，地图代表点取该研究区域，不表示整条河都适合它居住。",
    "center": {
      "lat": 54.3,
      "lng": 10.0
    }
  },
  "habitats": [
    {
      "name": "有水草的淡水池塘与缓流水域",
      "realm": "freshwater",
      "description": "分布从欧洲延伸到亚洲部分地区，包括中国、韩国和日本；常在有水草的池塘、湿地和缓流水域活动。2011 年呼吸研究使用德国北部埃德河附近采集的个体，地图代表点取该研究区域，不表示整条河都适合它居住。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "水蚤",
      "水生昆虫幼虫等小动物"
    ],
    "description": "它捕食水中小动物。研究者在饲养实验中投喂水蚤和摇蚊幼虫，观察到蜘蛛把猎物带回潜水钟，有时先扩充丝罩和空气，再把猎物拉进去取食。"
  },
  "tags": [
    "水蜘蛛",
    "有水草的淡水池塘与缓流水域"
  ],
  "summary": "水蜘蛛在水草之间织出钟形丝罩，把从水面带来的空气存进里面。水下腹部的空气层显出银亮光泽，像穿着一件薄薄的银衣。",
  "description": "它有棕褐色头胸部、椭圆腹部和八条步足。腹面及部分头胸部的疏水细毛能留住空气，在水中形成银亮外观。钟形气室由蛛丝固定在水草间，底部留有入口；它仍用呼吸空气的器官呼吸，潜水钟不是鱼鳃。",
  "storySections": [
    {
      "key": "silver-air",
      "label": "生活与认识",
      "title": "银亮外观来自空气",
      "body": "水下的水蜘蛛腹部常显得银亮。细毛之间留住一层空气，光在空气与水的边界反射，形成这种外观；它的身体本身并不是金属银色。找一找棕褐色头胸部与银亮腹部的分界，再数数步足。"
    },
    {
      "key": "bell-building",
      "label": "生活与认识",
      "title": "把水面的空气带回家",
      "body": "它先在水草之间织丝，再从水面带回气泡。气泡附在腹部和后足的细毛附近，蜘蛛游回丝罩下方，把空气加进罩内。反复运气后，丝罩成为底部有入口的钟形气室。"
    },
    {
      "key": "gas-exchange",
      "label": "生活与认识",
      "title": "潜水钟还会交换气体",
      "body": "研究者把微小的氧气探头放进潜水钟，发现水里溶解的氧能进入钟内，帮助满足静息蜘蛛的需要。气室也会逐渐缩小，蜘蛛会回到水面补气；图中的空气边界是结构示意，不表示实测氧气浓度。"
    },
    {
      "key": "feeding",
      "label": "生活与认识",
      "title": "带着猎物回到钟里",
      "body": "它在水草间寻找水蚤和水生昆虫幼虫等猎物。2011 年实验中，有的蜘蛛抓住猎物后，先添丝和补气扩大潜水钟，再把食物带进去。小猎物、蜘蛛和气室的关系适合用连续画面观察。"
    },
    {
      "key": "eggs",
      "label": "生活与认识",
      "title": "卵囊也藏在丝罩中",
      "body": "雌蛛能在潜水钟内制作丝质卵囊，并守护下一代。研究者在饲养录像中观察到雌蛛产卵后护卵，幼蛛离开卵囊后游动分散。卵囊有自己的丝壁，和储存呼吸空气的气室是两种结构。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "1757 年的记录与后来的潜水研究",
      "body": "Carl Alexander Clerck 在 1757 年以 Araneus aquaticus 描述了这种蜘蛛，后来学名改为 Argyroneta aquatica。世界蜘蛛名录保留了原描述与后续研究记录。早期研究曾把它放入不同的科，当前名录接受水蛛科 Argyronetidae；2011 年的氧气实验进一步解释了它怎样在水下利用潜水钟。"
    }
  ],
  "keyFacts": [
    "银亮外观来自空气：水下的水蜘蛛腹部常显得银亮。",
    "把水面的空气带回家：它先在水草之间织丝，再从水面带回气泡。",
    "潜水钟还会交换气体：研究者把微小的氧气探头放进潜水钟，发现水里溶解的氧能进入钟内，帮助满足静息蜘蛛的需要。",
    "带着猎物回到钟里：它在水草间寻找水蚤和水生昆虫幼虫等猎物。"
  ],
  "threats": [],
  "conservationActions": [
    "保留自然栖息环境，观察时不采挖或搬动动物"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "银亮的空气外衣"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "有水草的淡水池塘与缓流水域"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "水蚤、水生昆虫幼虫等小动物"
    }
  ],
  "media": {
    "image": "./images/species/diving-bell-spider/01-cover.webp",
    "alt": "水蜘蛛在生活环境中的完整身体（AI 生成科学情景重建）",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/diving-bell-spider/02-observation.webp",
        "alt": "水蜘蛛在水草旁伸展八足，棕褐色头胸部与腹部银亮空气层同时可见（AI 生成科学情景重建）",
        "title": "银亮的空气外衣",
        "caption": "AI 生成科学情景重建。水蜘蛛在水草旁伸展八足，棕褐色头胸部与腹部银亮空气层同时可见。银亮处示意体表滞留空气的反光。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/diving-bell-spider/03-observation.webp",
        "alt": "水蜘蛛靠近水面，腹部与后足附近附着一枚待带回的气泡（AI 生成科学情景重建）",
        "title": "从水面运回气泡",
        "caption": "AI 生成科学情景重建。水蜘蛛靠近水面，腹部与后足附近附着一枚待带回的气泡。气泡的尺寸用于帮助识别运气动作。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/diving-bell-spider/04-observation.webp",
        "alt": "水蜘蛛在水草间的倒扣钟形丝罩入口处，把空气加入气室（AI 生成科学情景重建）",
        "title": "丝罩里的气室",
        "caption": "AI 生成科学情景重建。水蜘蛛在水草间的倒扣钟形丝罩入口处，把空气加入气室。展示蛛丝支架与底部入口，未按实测气压绘制。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/diving-bell-spider/05-observation.webp",
        "alt": "水蜘蛛在潜水钟入口附近抓住一只小型水生甲壳动物（AI 生成科学情景重建）",
        "title": "带回小猎物",
        "caption": "AI 生成科学情景重建。水蜘蛛在潜水钟入口附近抓住一只小型水生甲壳动物。以捕食位置说明行为，未复现某次野外观察。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/diving-bell-spider/06-observation.webp",
        "alt": "雌性水蜘蛛停在潜水钟内的独立丝质卵囊旁（AI 生成科学情景重建）",
        "title": "守护丝质卵囊",
        "caption": "AI 生成科学情景重建。雌性水蜘蛛停在潜水钟内的独立丝质卵囊旁。卵囊与空气边界分别表示，内部布局为依据研究的概念示意。",
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
      "title": "世界蜘蛛名录：接受学名、Clerck 1757 原描述及水蛛科归属",
      "url": "https://www.wsc.nmbe.ch/spec-data/14930",
      "kind": "taxonomy",
      "accessedAt": "2026-10-23"
    },
    {
      "title": "Seymour 与 Hetz（2011）：潜水钟的氧气交换、运气与取食实验",
      "url": "https://journals.biologists.com/jeb/article/214/13/2175/10328/The-diving-bell-and-the-spider-the-physical-gill",
      "kind": "ecology",
      "accessedAt": "2026-10-23"
    },
    {
      "title": "2023 年原始研究：水下附着丝与建钟照片",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10700320/",
      "kind": "ecology",
      "accessedAt": "2026-10-23"
    },
    {
      "title": "Masumoto 等（1998）：水蜘蛛饲养录像中的护卵与幼蛛扩散",
      "url": "https://www.jstage.jst.go.jp/article/asjaa1936/47/2/47_2_125/_article/-char/ja",
      "kind": "ecology",
      "accessedAt": "2026-10-23"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-23",
  "updatedAt": "2026-10-23"
} as const satisfies Species;

export default profile;
