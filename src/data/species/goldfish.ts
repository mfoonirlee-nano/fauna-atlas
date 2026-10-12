import type { Species } from '../../types/species.ts';

const profile = {
    "id": "goldfish",
    "slug": "goldfish",
    "names": {
      "zh": "金鱼",
      "en": "Goldfish",
      "aliases": []
    },
    "scientificName": "Carassius auratus",
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
        "scientificName": "Actinopterygii",
        "zhName": "辐鳍鱼纲"
      },
      "order": {
        "scientificName": "Cypriniformes",
        "zhName": "鲤形目"
      },
      "family": {
        "scientificName": "Cyprinidae",
        "zhName": "鲤科"
      },
      "genus": {
        "scientificName": "Carassius",
        "zhName": "鲫属"
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
      "assessedYear": 2010,
      "assessor": "IUCN Red List（FishBase 引用记录）"
    },
    "distribution": {
      "realms": [
        "freshwater"
      ],
      "continents": [
        "亚洲"
      ],
      "regions": [
        "东亚原生范围；观赏品种在全球饲养"
      ],
      "countries": [
        "中国"
      ],
      "range": '本种起源于东亚，观赏金鱼经过中国长期选育形成，现于世界多地饲养，并在一些地方建立了引入种群。地图聚焦中国的选育历史；本种也有其他分布地点。',
      "center": {
        "lat": 31,
        "lng": 115
      }
    },
    "habitats": [
      {
        "name": "池塘与缓流水体",
        "realm": "freshwater",
        "description": '生活在淡水池塘、湖泊和缓流水域。图集展示的是橙色家养单尾品种。',
        "isPrimary": true
      }
    ],
    "measurements": {
      "length": {
        "max": 45,
        "unit": "cm",
        "note": "ADW 的本种总长上限，包含尾鳍；家养品种体形差异较大，不作为共同成年范围。"
      }
    },
    "metrics": {},
    "diet": {
      "types": [
        "omnivore"
      ],
      "foods": [
        "小型甲壳动物",
        "昆虫幼虫",
        "藻类",
        "植物碎屑"
      ],
      "description": "用口吸入食物，再由咽部的牙齿处理，能利用动物性和植物性食物。"
    },
    "tags": [
      "池塘与缓流水体",
      "无危",
      "咽齿磨食"
    ],
    "summary": "金鱼的口中没有用来咬碎食物的颌齿，却在咽部生有咽齿；它没有真正的胃，食物主要在肠道中继续消化。",
    "description": '人们长期选择体色、体形和鳍形，育成单尾、双尾等多种观赏金鱼。常见的橙红色来自选育，野生型的外观往往较暗。这些品系都属于 Carassius auratus。',
    "storySections": [
      {
        key: 'identity',
        label: '家养金鱼',
        title: '一条鱼可以有许多品种',
        body: '人们长期选择金鱼的体色、身体和鳍形，培育出多种观赏品系。图集中的单尾金鱼身体修长。不同家养品系的外形虽有差异，仍属于同一个物种。',
      },
      {
        key: 'teeth',
        label: '牙齿在咽部',
        title: '吸入口中，再送到后面磨',
        body: '金鱼没有颌齿，咽部的齿长在特化的鳃弓骨上，与对面的结构配合处理食物。看到它反复张口，不代表口沿长着一排小牙。',
      },
      {
        key: 'digestion',
        label: '没有真正的胃',
        title: '食物在肠道中继续消化',
        body: '金鱼属于无胃鱼类，没有分泌胃酸的真胃。食物通过前部消化道进入肠道，在那里继续消化和吸收。',
      },
      {
        key: 'feeding',
        label: '杂食觅食',
        title: '植物和小动物都能入口',
        body: '金鱼会吃藻类、植物物质和小型无脊椎动物，常吸入底部颗粒后再筛选食物。进入不属于它的水域后，这种觅食方式可能扰动底泥并改变当地生态。',
      },
      {
        key: 'life',
        label: '幼鱼成长',
        title: '幼鱼不一定已经通体橙红',
        body: '金鱼的黏性卵可附着在水生植物等表面，并在水中完成受精。幼鱼早期常呈暗色，后来如何变色、何时变色，随品系和发育状况而异。',
      },
      {
        key: 'conservation',
        label: '不要放生',
        title: '家养数量与野生保护分开看',
        body: 'IUCN 对 Carassius auratus 的物种评估为无危，不能用它表示所有观赏品种都适合野外生活。弃养或放生可形成外来种群；继续妥善饲养或寻找接收者，避免把金鱼倒入河湖。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '一个物种，许多观赏品系',
        body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Carassius auratus。金鱼的观赏选育历史发生在中国，远早于许多现代品系的出现。人们不断选择颜色、体形和鳍形，培育出多种金鱼，它们仍归入同一物种。',
      },
    ],
    "keyFacts": [
      '人类选育形成多种颜色、体形和鳍形的品系。',
      '没有颌齿，咽部的齿帮助处理食物。',
      '没有真胃，食物在肠道继续消化和吸收。',
      '吃藻类、植物物质和小型无脊椎动物。',
      '产下黏性卵，幼鱼体色随品系和发育变化。',
    ],
    "threats": [
      "局部淡水生境污染。",
      "引入种群可能扰动底泥并影响本地水生生物。"
    ],
    "conservationActions": [
      "保护淡水生境，区分原生与引入种群。",
      "不向自然水域释放观赏金鱼。"
    ],
    "featuredStats": [
      {
        "key": "trait",
        "label": "观察重点",
        "value": "咽齿磨食"
      },
      {
        "key": "length",
        "label": "总长上限约",
        "value": "45",
        "unit": "厘米",
        "note": "包含尾部，非成年平均值"
      }
    ],
    "sources": [
      {
        "title": "ADW — 金鱼生态与生活史",
        "url": "https://animaldiversity.org/accounts/Carassius_auratus/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "FishBase — 金鱼及 IUCN 记录",
        "url": "https://www.fishbase.org/summary/Carassius_auratus.html",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Eschmeyer’s Catalog of Fishes — 金鱼",
        "url": "https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?genus=Carassius&species=auratus&tbl=species",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "PLOS ONE — 鲤形目咽齿的演化",
        "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0011293",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "金鱼消化道 ghrelin 定位研究",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4624692/",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "金鱼无胃消化道的生理研究",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6661352/",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Carassius auratus 的命名作者与年份',
        url: 'https://www.gbif.org/species/4286942',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/goldfish/01-cover.webp",
      "alt": "金鱼位于画面右侧，完整主体周围保留环境。",
      "focalPoint": {
        "x": 0.95,
        "y": 0.4
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/goldfish/02-body.webp",
          "title": "单尾金鱼的外形",
          "alt": "橙色家养单尾金鱼侧身游动，完整鱼鳍可见。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/goldfish/03-detail.webp",
          "title": "没有颌齿的口",
          "alt": "家养金鱼侧身游动，可见无颌齿的口部与鳃盖。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/goldfish/04-behavior.webp",
          "title": "水草间觅食",
          "alt": "家养金鱼在水草间吸食小颗粒。",
          "caption": "AI 生成科学情景重建，不对应定位野外照片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/goldfish/05-life.webp",
          "title": "已显橙色的幼鱼",
          "alt": "已显橙色的单尾金鱼幼体在水草边游动。",
          "caption": "AI 生成科学情景重建，展示已显橙色的幼鱼；不代表全部品系都在同一阶段变色。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/goldfish/06-habitat.webp",
          "title": "家养金鱼池",
          "alt": "庭院观赏鱼池中种有水生植物，一条家养金鱼在水下游动。",
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
