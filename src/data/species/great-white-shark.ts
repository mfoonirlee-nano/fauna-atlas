import type { Species } from '../../types/species.ts';

const profile = {
    "id": "great-white-shark",
    "slug": "great-white-shark",
    "names": {
      "zh": "大白鲨",
      "en": "Great White Shark",
      "aliases": []
    },
    "scientificName": "Carcharodon carcharias",
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
        "scientificName": "Chondrichthyes",
        "zhName": "软骨鱼纲"
      },
      "order": {
        "scientificName": "Lamniformes",
        "zhName": "鼠鲨目"
      },
      "family": {
        "scientificName": "Lamnidae",
        "zhName": "鼠鲨科"
      },
      "genus": {
        "scientificName": "Carcharodon",
        "zhName": "噬人鲨属"
      }
    },
    "conservation": {
      "system": "IUCN Red List",
      "code": "VU",
      "label": {
        "zh": "易危",
        "en": "Vulnerable"
      },
      "trend": "unknown",
      "assessor": "IUCN Red List（Florida Museum 引用记录）"
    },
    "distribution": {
      "realms": [
        "marine"
      ],
      "continents": [
        "非洲",
        "大洋洲",
        "北美洲",
        "南美洲",
        "亚洲",
        "欧洲"
      ],
      "regions": [
        "全球温带及部分亚热带海域"
      ],
      "countries": [
        "南非",
        "澳大利亚",
        "新西兰",
        "美国",
        "墨西哥"
      ],
      "range": "广布于温带和部分亚热带海域，既利用近岸水域，也进行远洋移动。所列国家仅为代表性分布地点，不能视作完整清单。",
      "center": {
        "lat": -34,
        "lng": 20
      }
    },
    "habitats": [
      {
        "name": "温带近海与开放海域",
        "realm": "marine",
        "description": "在大陆架、岛屿周边及开放海域活动，幼鲨也利用浅海育幼场。",
        "isPrimary": true
      }
    ],
    "measurements": {
      "length": {
        "max": 6,
        "unit": "m",
        "note": "Florida Museum 给出的估计最大总长约 6 米；不采用未经确认的更大传闻，不作为成年范围。"
      }
    },
    "metrics": {},
    "diet": {
      "types": [
        "carnivore",
        "piscivore"
      ],
      "foods": [
        "鱼类",
        "鳐类和其他鲨类",
        "海豹与海狮",
        "鲸类尸体"
      ],
      "description": "幼鲨较多取食鱼类，较大个体也捕食海洋哺乳动物，并会利用大型动物尸体。"
    },
    "tags": [
      "温带近海与开放海域",
      "易危",
      "不断换牙"
    ],
    "summary": "大白鲨的牙齿会持续更替：前排牙齿脱落后，后面的牙齿向前补位，维持捕食时使用的齿列。",
    "description": '锥形吻部、三角形背鳍和新月形尾鳍组成大白鲨的轮廓。灰色背部与较白的腹部之间有明显分界。',
    "storySections": [
      {
        key: 'identity',
        label: '认识大白鲨',
        title: '灰背与白腹之间有分界',
        body: '大白鲨属于鼠鲨科，是以软骨构成主要骨架的鱼类。较大的三角形背鳍和新月形尾鳍有助于识别，但在野外不能只凭露出水面的一角鱼鳍认定物种。',
      },
      {
        key: 'teeth',
        label: '牙齿补位',
        title: '牙齿会接替使用',
        body: '大白鲨有多排处于不同发育位置的牙齿。功能齿磨损或脱落后，后方牙齿逐步向前补位。成年个体的牙齿多为三角形，边缘带锯齿；更换速度随条件变化。',
      },
      {
        key: 'feeding',
        label: '成长与食物',
        title: '小鲨与大鲨的菜单不同',
        body: '幼鲨较多捕食鱼类和其他软骨鱼，随着体形增大，海豹、海狮等也可成为猎物。大白鲨还会取食鲸类尸体，各地食谱随食物条件变化。',
      },
      {
        key: 'temperature',
        label: '保留热量',
        title: '部分身体比周围海水温暖',
        body: '大白鲨能通过特殊血管结构回收部分肌肉活动产生的热量，使某些组织高于周围水温。这是区域性内温，不代表身体各处都维持哺乳动物式的恒定温度。',
      },
      {
        key: 'life',
        label: '浅海幼鲨',
        title: '幼鲨出生时已经会游泳',
        body: '胚胎在母体内发育，雌鲨产下能够独立游动的幼鲨。浅海育幼场为幼鲨提供食物和适宜环境；成年个体的远洋活动不能代表全部生命阶段的栖息需求。',
      },
      {
        key: 'conservation',
        label: '减少误捕',
        title: '长得慢，恢复也需要时间',
        body: '本种全球 IUCN 状态为易危。误捕、定向捕捞和较慢的繁殖速度增加保护难度；区域种群恢复并不等于全球都已恢复，持续监测和降低渔业死亡仍有必要。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '灰背白腹的大白鲨',
        body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Carcharodon carcharias。名字中的“白”可以从腹面看到，背部则是灰色。它会持续更换牙齿，前方功能齿磨损或脱落后，后面的牙齿逐渐向前补位。',
      },
    ],
    "keyFacts": [
      '属于鼠鲨科，主要骨架由软骨构成。',
      '前排牙齿磨损或脱落后，后方牙齿逐渐补位。',
      '幼鲨较多吃鱼，大个体也捕食海洋哺乳动物。',
      '特殊血管结构回收热量，使部分组织高于水温。',
      '胚胎在母体发育，出生的幼鲨能独立游动。',
    ],
    "threats": [
      "渔业误捕与定向捕捞。",
      "为获取颌骨、牙齿等制品而捕杀。"
    ],
    "conservationActions": [
      "减少渔业误捕并开展种群监测。",
      "保护育幼水域，不购买野生鲨鱼纪念制品。"
    ],
    "featuredStats": [
      {
        "key": "trait",
        "label": "观察重点",
        "value": "不断换牙"
      },
      {
        "key": "length",
        "label": "总长上限约",
        "value": "6",
        "unit": "米",
        "note": "包含尾部，非成年平均值"
      }
    ],
    "sources": [
      {
        "title": "Florida Museum — 大白鲨",
        "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/white-shark/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "NOAA Fisheries — 大白鲨生态与保护",
        "url": "https://www.fisheries.noaa.gov/species/white-shark",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "University of Florida IFAS — 鲨鱼牙齿更替",
        "url": "https://ask.ifas.ufl.edu/publication/FA179",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Carcharodon carcharias 的命名作者与年份',
        url: 'https://www.gbif.org/species/2420694',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/great-white-shark/01-cover.webp",
      "alt": "大白鲨位于画面右侧，完整主体周围保留环境。",
      "focalPoint": {
        "x": 0.91,
        "y": 0.4
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/great-white-shark/02-body.webp",
          "title": "完整的游动轮廓",
          "alt": "大白鲨在海中侧身游动，背鳍、胸鳍和完整尾鳍可见。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/great-white-shark/03-detail.webp",
          "title": "带锯齿的牙齿",
          "alt": "大白鲨略微张口，可见三角形牙齿。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/great-white-shark/04-behavior.webp",
          "title": "鱼群附近游动",
          "alt": "大白鲨在海中游动，远处有鱼群。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/great-white-shark/05-life.webp",
          "title": "浅海中的幼鲨",
          "alt": "幼年大白鲨在浅海沙底上方游动。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/great-white-shark/06-habitat.webp",
          "title": "温带海岸水域",
          "alt": "温带海岸的海带林边缘与开放水域。",
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
