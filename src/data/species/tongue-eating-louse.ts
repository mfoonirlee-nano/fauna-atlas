import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-cymothoa-exigua",
    "slug": "tongue-eating-louse",
    "names": {
      "zh": "缩头鱼虱",
      "en": "Tongue-eating Louse",
      "aliases": []
    },
    "scientificName": "Cymothoa exigua",
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
        "scientificName": "Malacostraca",
        "zhName": "软甲纲"
      },
      "order": {
        "scientificName": "Isopoda",
        "zhName": "等足目"
      },
      "family": {
        "scientificName": "Cymothoidae",
        "zhName": "缩头水虱科"
      },
      "genus": {
        "scientificName": "Cymothoa",
        "zhName": "缩头水虱属"
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
      "assessor": "未核实到本种全球IUCN评估；暂记NE，不设评估年份。"
    },
    "measurements": {
      "length": {
        "min": 8,
        "max": 29,
        "unit": "mm",
        "note": "1981年专著中的雌体样本范围；雄体样本7.5—15毫米，不是全种的绝对极限。"
      }
    },
    "metrics": {},
    "threats": [
      "本种全球种群趋势与具体威胁程度尚待调查。"
    ],
    "conservationActions": [
      "减少近岸污染，维护海岸栖息地。",
      "记录采集地点并核对物种身份，积累分布资料。"
    ],
    "featured": true,
    "publishedAt": "2026-09-08",
    "updatedAt": "2026-09-08",
    "distribution": {
      "realms": [
        "marine"
      ],
      "continents": [
        "北美洲",
        "南美洲"
      ],
      "regions": [
        "东太平洋热带近岸",
        "加利福尼亚湾"
      ],
      "countries": [
        "墨西哥",
        "巴拿马",
        "厄瓜多尔"
      ],
      "range": 'Brusca 的东太平洋专著记录了从加利福尼亚湾到厄瓜多尔的缩头鱼虱。其他海域也有外形相似的口居鱼虱，鉴定时还需检查标本。',
      "center": {
        "lat": 17,
        "lng": -103
      }
    },
    "habitats": [
      {
        "name": "近岸海鱼的口腔与鳃腔",
        "realm": "marine",
        "description": "雌体通常附着在宿主口腔，雄体多见于鳃部。专著记录集中在近岸浅水鱼类。",
        "isPrimary": true
      }
    ],
    "diet": {
      "types": [
        "carnivore"
      ],
      "foods": [
        "宿主来源的营养"
      ],
      "description": '缩头鱼虱依赖鱼类宿主获取营养。吸血常用于解释鱼虱寄生和鱼舌退化，但 1983 年研究仍未确定大型口居雌体的全部营养来源。'
    },
    "activity": [
      "附着寄生",
      "口腔生活"
    ],
    "tags": [
      "寄生",
      "等足目",
      "鱼舌退化",
      "宿主关系",
      "甲壳动物"
    ],
    "summary": "缩头鱼虱的雌体会附着在鱼嘴里。研究者发现，有些宿主的鱼舌已大部退化，鱼虱占据原位，鱼却仍能进食。",
    "description": "这是一种海洋寄生等足类，身体呈浅色椭圆形，分节的甲壳下伸出带钩的步足。它与陆上的鼠妇同属等足目。",
    "storySections": [
      {
        key: 'identity',
        label: '认识缩头鱼虱',
        title: '带钩步足的等足类',
        body: '缩头鱼虱属于软甲纲、等足目、缩头水虱科。成体有七对步足，末端钩状结构帮助它抓住宿主组织。外形相似的口居鱼虱有多个物种，物种鉴定还需检查头部、体节和附肢。',
      },
      {
        key: 'attachment',
        label: '附着位置',
        title: '雌体在口腔，雄体多在鳃部',
        body: 'Brusca 的东太平洋专著记录，雌体常附着在宿主舌部，雄体多位于鳃部。长大的雌体与口腔空间贴合，持续附着在那里。',
      },
      {
        key: 'tongue',
        label: '鱼舌的变化',
        title: '舌部退化后仍能进食',
        body: '1983年论文检查了墨西哥加利福尼亚湾的笛鲷Lutjanus guttatus，其中两条寄生鱼的舌部超过九成缺失，鱼虱附着在残基与口腔底部。研究者仍在宿主体内发现食物，说明这些鱼当时能继续进食。',
      },
      {
        key: 'hypothesis',
        label: '替代舌假说',
        title: '鱼虱可能怎样支撑食物',
        body: '1983 年研究的作者提出，鱼虱可能在机械作用上替代鱼舌，在鱼处理食物时提供支撑。这是一项根据观察提出的假说，作者没有用对照实验测量进食效率。鱼虱自身的组织仍与鱼舌组织不同。',
      },
      {
        key: 'size',
        label: '雌雄差异',
        title: '雌体往往更大',
        body: '1981 年专著测得雌体长 8 至 29 毫米，雄体长 7.5 至 15 毫米，雌体通常更大。这些数字来自研究样本。鱼虱科还存在先发育为雄性、随后转为雌性的性别转换现象。',
      },
      {
        key: 'conservation',
        label: '宿主与分布',
        title: '跟着宿主记录寄生关系',
        body: '缩头鱼虱的全球 IUCN 评估尚未核实，种群趋势未知。调查者需要同时鉴定鱼虱和宿主，记录地点及附着位置，以区分不同海域的相似寄生种。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '命名之后，研究者记录了“替代舌”',
        body: 'Schioedte & Meinert 于 1884 年描述了这个物种，现用学名为 Cymothoa exigua。近一百年后的 1983 年，加利福尼亚湾研究记录到鱼舌大部缺失、鱼虱占据原位而鱼仍能进食的笛鲷。研究者据此提出鱼虱可能支撑食物的“机械替代”假说。',
      },
    ],
    "keyFacts": [
      "属于等足目，是甲壳动物。",
      "成体有七对带钩步足。",
      "雌体通常附着在鱼的口腔。",
      "雄体多见于鳃部。",
      "研究记录过舌部大部缺失但仍能进食的宿主。",
      "机械替代鱼舌是原始论文提出的假说。"
    ],
    "featuredStats": [
      {
        "key": "female",
        "label": "雌体样本长度",
        "value": "8—29",
        "unit": "毫米",
        "note": "1981年专著样本，非绝对极限。"
      },
      {
        "key": "legs",
        "label": "成体步足",
        "value": "7",
        "unit": "对"
      },
      {
        "key": "site",
        "label": "雌体附着处",
        "value": "口腔"
      },
      {
        "key": "status",
        "label": "保护等级",
        "value": "NE",
        "note": "未核实全球评估。"
      }
    ],
    "sources": [
      {
        "title": "Brusca 1981 — 东太平洋鱼虱科专著，样本尺寸与分布",
        "url": "https://research.nhm.org/pdfs/2794/2794.pdf",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Brusca与Gilligan 1983 — 鱼舌替代观察及假说",
        "url": "https://www.rickbrusca.com/http___www.rickbrusca.com_index.html/Papers_files/Brusca%20%26%20Gilligan%201983%20Tongue%20Replacement.pdf",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "WoRMS — 缩头水虱属接受名",
        "url": "https://www.marinespecies.org/aphia.php?p=taxlist&tName=Cymothoa",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "得克萨斯大学生物多样性中心 — 鱼虱寄生生活",
        "url": "https://biodiversity.utexas.edu/news/features/all-things-creepy-parasitism-pt-3-tongue-biters",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Cymothoa exigua 的命名作者与年份',
        url: 'https://www.gbif.org/species/2210260',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/tongue-eating-louse/01-cover.webp",
      "alt": "一只浅色缩头鱼虱位于画面右侧的湿润灰色表面，展示完整外形。",
      "focalPoint": {
        "x": 0.92,
        "y": 0.35
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/tongue-eating-louse/02-body.webp",
          "alt": "浅色缩头鱼虱的椭圆身体分成多个体节，两侧有短步足。",
          "title": "分节的甲壳动物",
          "caption": "AI生成外形示意；附肢与体节细节不能代替分类鉴定。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/tongue-eating-louse/03-mouth.webp",
          "alt": "笛鲷张开的嘴内，一只浅色鱼虱附着在口腔底部。",
          "title": "鱼嘴里的雌体",
          "caption": "AI生成寄生情景；鱼与鱼虱比例不代表1983年论文的标本测量。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/tongue-eating-louse/04-attachment.webp",
          "alt": "鱼嘴的简化侧面剖图中，鱼虱附着在舌部残基上。",
          "title": "附着在舌部残基",
          "caption": "AI生成附着关系示意；组织和步足经过简化，不能用于数足、物种鉴定或判断替代效率。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/tongue-eating-louse/05-pair.webp",
          "alt": "一大一小两只浅色鱼虱并列，示意雌雄体形差别。",
          "title": "雌雄体形比较",
          "caption": "AI生成体形比较；大小比例为示意，不能据此判定个体性别或测量范围。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/tongue-eating-louse/06-habitat.webp",
          "alt": "蓝绿色海水覆盖着东太平洋近岸的岩石底质。",
          "title": "东太平洋近岸",
          "caption": "AI生成栖息地重建，不对应确定采集地点。",
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
