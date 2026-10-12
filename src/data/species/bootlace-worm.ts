import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-lineus-longissimus",
    "slug": "bootlace-worm",
    "names": {
      "zh": "巨纵沟纽虫",
      "en": "Bootlace Worm",
      "aliases": []
    },
    "scientificName": "Lineus longissimus",
    "taxonomy": {
      "kingdom": {
        "scientificName": "Animalia",
        "zhName": "动物界"
      },
      "phylum": {
        "scientificName": "Nemertea",
        "zhName": "纽形动物门"
      },
      "class": {
        "scientificName": "Pilidiophora",
        "zhName": "Pilidiophora纲"
      },
      "order": {
        "scientificName": "Heteronemertea",
        "zhName": "异纽目"
      },
      "family": {
        "scientificName": "Lineidae",
        "zhName": "纵沟纽虫科"
      },
      "genus": {
        "scientificName": "Lineus",
        "zhName": "纵沟纽虫属"
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
        "min": 5,
        "max": 15,
        "unit": "m",
        "note": "MarLIN描述的常见伸展长度为5—15米；柔软身体可伸缩，不代表固定体长或绝对极限。"
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
        "欧洲"
      ],
      "regions": [
        "东北大西洋",
        "欧洲北海沿岸",
        "波罗的海沿岸"
      ],
      "countries": [
        "冰岛",
        "英国",
        "爱尔兰"
      ],
      "range": '已知范围从冰岛延伸至欧洲大西洋、北海和波罗的海沿岸，具体地点仍需凭证记录与物种鉴定确认。',
      "center": {
        "lat": 56,
        "lng": -5
      }
    },
    "habitats": [
      {
        "name": "岩岸潮池与石下缝隙",
        "realm": "marine",
        "description": "常在低潮带石块下、海带固着器间和岩缝中盘曲；潮下带也有泥、沙和贝壳底质记录。",
        "isPrimary": true
      }
    ],
    "diet": {
      "types": [
        "carnivore"
      ],
      "foods": [
        "小型海洋无脊椎动物"
      ],
      "description": '用可翻出的长吻捕捉猎物，再经口吞食。现有资料未提供完整、定量的本种野外食谱。'
    },
    "activity": [
      "底栖活动",
      "盘曲隐蔽",
      "翻吻捕猎"
    ],
    "tags": [
      "纽形动物",
      "长吻",
      "不分节",
      "黏液",
      "岩岸"
    ],
    "summary": "巨纵沟纽虫在石块下盘成一团，伸展开来却能长达数米。捕猎时，它从头端翻出长吻接触猎物，再把食物送进口中。",
    "description": '巨纵沟纽虫生活在欧洲东北大西洋等海域，深褐色身体细长、光滑而不分节，常盘在石块下、岩缝或海带固着器间。头部两侧有沟裂，暗色表面可遮住小眼点。身体能够大幅伸缩，捕猎时从独立吻腔翻出长吻，再把食物经口送入消化道；本种没有吻刺。',
    "storySections": [
      {
        key: 'identity',
        label: '认识巨纵沟纽虫',
        title: '一根不分节的海底细绳',
        body: '巨纵沟纽虫属于纽形动物门。它没有蚯蚓那样连续的外部体节，也没有步足。WoRMS 与 OBIS 将其归入Pilidiophora纲、异纽目、纵沟纽虫科。',
      },
      {
        key: 'length',
        label: '伸缩的身体',
        title: '盘起来与伸展开来',
        body: 'MarLIN记述本种常见伸展长度约5 至 15米，身体却只有毫米级宽度。肌肉收缩会改变姿态和长度，野外测量还受个体完整性影响。流传的超长纪录尚缺可靠测量，盘曲时占据的宽度也不能代替伸展体长。',
      },
      {
        key: 'proboscis',
        label: '翻吻捕猎',
        title: '吻与消化道分开',
        body: '纽虫的吻平时收在独立的吻腔中，捕猎时可以从前端向外翻出，再收回。它是捕猎器官，食物仍需经过口进入消化道。本种所属的异纽目没有有刺纽虫那样的吻刺。',
      },
      {
        key: 'mucus',
        label: '体表分泌物',
        title: '黏液里有活性肽',
        body: '2018年的研究从巨纵沟纽虫表皮黏液中发现α-nemertide肽，并研究其中一种对离子通道和实验动物的作用。这说明黏液含有生物活性物质；实验剂量和注射结果不能直接当作野外接触风险或捕猎全过程的证据。',
      },
      {
        key: 'shelter',
        label: '藏身的位置',
        title: '石下与海带根部',
        body: '在低潮带寻找本种时，调查者会检查潮池、石块下和海带固着器之间的缝隙。它常把细长身体盘曲在有限空间中。观察时保留原有石块和附着生物，避免拉扯脆弱的身体。',
      },
      {
        key: 'conservation',
        label: '分布与保护',
        title: '先积累物种记录',
        body: '巨纵沟纽虫尚无已核实的 IUCN 全球评估，种群趋势未知。海岸污染和底质扰动值得当地调查，但目前不把这些压力写成本种已经量化的全球威胁。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1770 年命名的细长纽虫',
        body: 'Gunnerus 在 1770 年正式命名巨纵沟纽虫，现用学名为 Lineus longissimus。它可以伸展数米，身体却只有毫米级宽度，早期和现代记录都需要留意测量时的伸缩状态。2018 年研究还从表皮黏液中找到 α-nemertide 活性肽，为了解其分泌物提供了实验线索。',
      },
    ],
    "keyFacts": [
      "属于纽形动物门，身体不分节。",
      '常见伸展长度约5 至 15米，身体可收缩。',
      "用独立的可翻出长吻捕猎。",
      "本种没有吻刺。",
      "常藏在低潮带石块下与岩缝中。",
      "表皮黏液含有研究者发现的活性肽。"
    ],
    "featuredStats": [
      {
        "key": "length",
        "label": "常见伸展长度",
        "value": "5—15",
        "unit": "米",
        "note": "可伸缩；不代表绝对极限。"
      },
      {
        "key": "phylum",
        "label": "所属门",
        "value": "纽形动物门"
      },
      {
        "key": "capture",
        "label": "捕猎器官",
        "value": "可翻长吻"
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
        "title": "MarLIN — 外形、长度、栖息地与欧洲分布",
        "url": "https://www.marlin.ac.uk/species/detail/2075",
        "kind": "distribution",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "OBIS / WoRMS — 巨纵沟纽虫分类路径",
        "url": "https://obis.org/taxon/122528",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Jacobsson等2018 — 表皮黏液中的α-nemertide肽",
        "url": "https://www.nature.com/articles/s41598-018-22305-w",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "NCBI Taxonomy — Lineus longissimus",
        "url": "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=88925",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF: Lineus longissimus (Gunnerus, 1770) nomenclatural record',
        url: 'https://www.gbif.org/species/2508430',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/bootlace-worm/01-cover.webp",
      "alt": "一条完整的深褐色巨纵沟纽虫盘曲在画面右侧的浅水岩面上。",
      "focalPoint": {
        "x": 0.92,
        "y": 0.35
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/bootlace-worm/02-body.webp",
          "alt": "深褐色的细长纽虫在湿岩面上盘曲，身体表面没有体节。",
          "title": "细长而不分节的身体",
          "caption": "AI生成外形示意；体色、眼点和头沟不能代替标本鉴定。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/bootlace-worm/03-proboscis.webp",
          "alt": "纽虫头端伸出一条浅色长吻，朝向旁边的小型海洋蠕虫。",
          "title": "翻出的长吻",
          "caption": "AI生成翻吻捕猎示意；吻与猎物比例经过简化，不是实测捕猎记录。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/bootlace-worm/04-rock-shelter.webp",
          "alt": "深褐色纽虫沿潮池石块下的狭缝伸展。",
          "title": "石块下的缝隙",
          "caption": "AI生成隐蔽情景；石下部分身体不可见，不能据此测量全长。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/bootlace-worm/05-mucus.webp",
          "alt": "纽虫光滑的深色体表带有湿润光泽。",
          "title": "体表的黏液",
          "caption": "AI生成体表特写；光泽不能用于识别黏液成分或推断毒性。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/bootlace-worm/06-habitat.webp",
          "alt": "岩岸潮池与海藻分布在阴天的海边。",
          "title": "岩岸潮池",
          "caption": "AI生成栖息地重建，不对应具体调查点。",
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
