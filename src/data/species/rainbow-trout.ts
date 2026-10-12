import type { Species } from '../../types/species.ts';

const profile = {
  "id": "rainbow-trout",
  "slug": "rainbow-trout",
  "names": {
    "zh": "虹鳟",
    "en": "Rainbow Trout"
  },
  "scientificName": "Oncorhynchus mykiss",
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
      "scientificName": "Salmoniformes",
      "zhName": "鲑形目"
    },
    "family": {
      "scientificName": "Salmonidae",
      "zhName": "鲑科"
    },
    "genus": {
      "scientificName": "Oncorhynchus",
      "zhName": "太平洋鲑属"
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
    "assessor": "FishBase 引用全球 IUCN 等级，评估日期为 2020-07-28；趋势未核实",
    "assessedYear": 2020
  },
  "distribution": {
    "realms": [
      "freshwater",
      "marine"
    ],
    "continents": [
      "北美洲",
      "亚洲"
    ],
    "regions": [
      "北太平洋沿岸水系"
    ],
    "countries": [
      "美国",
      "加拿大",
      "墨西哥",
      "俄罗斯"
    ],
    "range": "原生于北太平洋沿岸的冷水水系，包括北美洲西部和亚洲东北部；人类已将它引入许多其他地区。",
    "center": {
      "lat": 48,
      "lng": -123
    }
  },
  "habitats": [
    {
      "name": "清凉河流与湖泊",
      "realm": "freshwater",
      "description": "原生于北太平洋沿岸的冷水水系，包括北美洲西部和亚洲东北部；人类已将它引入许多其他地区。",
      "isPrimary": true
    },
    {
      "name": "洄游型的海洋生活环境",
      "realm": "marine",
      "description": "部分个体进入海洋生长，再回淡水繁殖。"
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "水生无脊椎动物",
      "鱼卵",
      "小鱼"
    ],
    "description": "取食水生无脊椎动物、鱼卵、小鱼。"
  },
  "tags": [
    "虹鳟",
    "身体侧面的色带"
  ],
  "summary": "虹鳟体侧常有粉红带纹，背部和尾部散布黑点。有的终生生活在淡水，有的进入海洋后再回淡水繁殖，后者常称钢头鳟。",
  "description": '虹鳟原生于北太平洋沿岸的冷水水系，包括北美洲西部和亚洲东北部，人类后来把它引入许多其他地区。体侧粉红带纹、背部和尾部的小黑点是常见特征。部分个体终生留在淡水，部分进入海洋生长，再回淡水繁殖；后者常称钢头鳟。图库展示淡水场景。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '身体侧面的色带',
      body: '沿着身体找找粉红色带纹。颜色深浅会随个体、环境和生活阶段变化。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '迎着水流停留',
      body: '它会在水流中调整身体和鳍的位置。清凉、含氧充足的水域适合它生活。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '尾巴前的小脂鳍',
      body: '在背鳍与尾鳍之间找找小小的脂鳍，再看看尾部的黑点。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '溪流中的藏身处',
      body: '沉木和水流变化形成不同的停留位置，虹鳟可在这样的水域活动。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '回到淡水繁殖',
      body: '虹鳟在淡水中繁殖。洄游型也会从海里回到淡水；不能只看一张照片就确定它是否去过海洋。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保护生活的水域',
      body: '全球等级为无危，但部分地方种群面临威胁。保护原生水域，不把广泛养殖和引入等同于原生种群安全。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '学名里留下的堪察加称呼',
      body: 'Walbaum 在 1792 年发表虹鳟的科学名称。种名 mykiss 来自堪察加半岛当地对这种鱼的称呼 mykizha，16 世纪已有使用记录。它后来还有其他以颜色命名的名称；“虹鳟”和“钢头鳟”则常用于区分俗称或生活类型，都需要结合学名理解。',
    },
  ],
  "keyFacts": [
    "沿着身体找找粉红色带纹。颜色深浅会随个体、环境和生活阶段变化。",
    "它会在水流中调整身体和鳍的位置。清凉、含氧充足的水域适合它生活。",
    "在背鳍与尾鳍之间找找小小的脂鳍，再看看尾部的黑点。",
    "沉木和水流变化形成不同的停留位置，虹鳟可在这样的水域活动。",
    "虹鳟在淡水中繁殖。洄游型也会从海里回到淡水；不能只看一张照片就确定它是否去过海洋。"
  ],
  "threats": [
    "原生水域退化",
    "迁移通道受阻"
  ],
  "conservationActions": [
    "保护冷水栖息地",
    "维护河流连通性",
    "避免向非原生水域随意放流"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "身体侧面的色带"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "清凉河流与湖泊"
    }
  ],
  "media": {
    "image": "./images/species/rainbow-trout/01-cover.webp",
    "alt": "虹鳟的完整身体与水中环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/rainbow-trout/02-observation.webp",
        "title": "身体侧面的色带",
        "alt": "虹鳟：身体侧面的色带",
        "caption": "AI 生成科学情景重建。沿着身体找找粉红色带纹。颜色深浅会随个体、环境和生活阶段变化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rainbow-trout/03-observation.webp",
        "title": "迎着水流停留",
        "alt": "虹鳟：迎着水流停留",
        "caption": "AI 生成科学情景重建。它会在水流中调整身体和鳍的位置。清凉、含氧充足的水域适合它生活。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rainbow-trout/04-observation.webp",
        "title": "尾巴前的小脂鳍",
        "alt": "虹鳟：尾巴前的小脂鳍",
        "caption": "AI 生成科学情景重建。在背鳍与尾鳍之间找找小小的脂鳍，再看看尾部的黑点。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rainbow-trout/05-observation.webp",
        "title": "溪流中的藏身处",
        "alt": "虹鳟：溪流中的藏身处",
        "caption": "AI 生成科学情景重建。沉木和水流变化形成不同的停留位置，虹鳟可在这样的水域活动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/rainbow-trout/06-observation.webp",
        "title": "回到淡水繁殖",
        "alt": "虹鳟：回到淡水繁殖",
        "caption": "AI 生成科学情景重建。虹鳟在淡水中繁殖。洄游型也会从海里回到淡水；不能只看一张照片就确定它是否去过海洋。",
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
      "title": "FWS：虹鳟及其洄游型",
      "url": "https://www.fws.gov/species/rainbow-trout-oncorhynchus-mykiss",
      "kind": "ecology",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "USGS：原生与引入分布",
      "url": "https://nas.er.usgs.gov/Queries/FactSheet.aspx?SpeciesID=910",
      "kind": "distribution",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "Eschmeyer：虹鳟分类与全球等级",
      "url": "https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?genus=Oncorhynchus&species=mykiss&tbl=species",
      "kind": "taxonomy",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "FishBase：全球等级与评估日期",
      "url": "https://www.fishbase.se/summary/239",
      "kind": "conservation",
      "accessedAt": "2026-09-20"
    },
    {
      title: 'ETYFish：鲑科鱼类名称词源',
      url: 'https://etyfish.org/ETYFish_Salmonidae.pdf',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-20",
  "updatedAt": "2026-09-20"
} as const satisfies Species;

export default profile;
