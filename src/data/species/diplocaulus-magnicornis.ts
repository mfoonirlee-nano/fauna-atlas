import type { Species } from '../../types/species.ts';

const profile = {
  "id": "diplocaulus-magnicornis",
  "slug": "diplocaulus-magnicornis",
  "names": {
    "zh": "大角双螈",
    "en": "Diplocaulus"
  },
  "scientificName": "Diplocaulus magnicornis",
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
      "scientificName": "Amphibia",
      "zhName": "两栖纲"
    },
    "family": {
      "scientificName": "Keraterpetontidae",
      "zhName": "角螈科"
    },
    "genus": {
      "scientificName": "Diplocaulus",
      "zhName": "双螈属"
    }
  },
  "conservation": {
    "system": "Historical and fossil evidence",
    "code": "EX",
    "label": {
      "zh": "已灭绝",
      "en": "Extinct"
    },
    "trend": "unknown",
    "assessor": "依据所引博物馆资料与化石研究；未采用独立 IUCN 评估。"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "美国得克萨斯州（代表化石产区）"
    ],
    "countries": [],
    "range": "大角双螈的代表性遗存范围为美国得克萨斯州（代表化石产区）。现代地名用于定位遗存，不表示完整古地理范围；现无活体分布，不提供当前代表坐标。"
  },
  "habitats": [
    {
      "name": "浅水河道与池塘",
      "realm": "freshwater",
      "description": "史密森学会的一件头骨记录来自得克萨斯州早二叠世地层。骨骼与沉积材料支持它在浅水环境活动的解释。头骨形状可能影响水中运动，但具体功能尚不能仅由轮廓确定，图中不把头部画成实际飞行的机翼。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小型水生动物"
    ],
    "description": "口部和水生身体形态支持取食小型水生动物的解释。鱼类幼体或无脊椎动物可作讨论方向，缺少直接胃内容物时不列为确认菜单；宽头骨的用途也不能只用一种取食故事解释。"
  },
  "tags": [
    "大角双螈",
    "已灭绝",
    "古两栖类"
  ],
  "summary": "大角双螈的头骨向后侧伸出，成年个体的头部呈回旋镖形。",
  "description": "大角双螈的头骨向后侧伸出，成年个体的头部呈回旋镖形。从上方看，头骨两侧的后伸骨突构成宽阔轮廓，眼位于头顶附近，身体后接长尾。骨突属于头骨，不是独立角鞘。图中的皮肤颜色、尾部软组织及四肢姿态是复原选择，不添加蝾螈式外鳃。馆藏头骨与数字模型允许研究者比较骨突、眼区及头骨表面。生长序列显示头部轮廓随年龄变化，复原应区分幼体和成体。皮肤是否在骨突与身体之间形成大片膜没有足够依据，本批不采用这种画法。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体特征开始看",
      "body": "从上方看，头骨两侧的后伸骨突构成宽阔轮廓，眼位于头顶附近，身体后接长尾。骨突属于头骨，不是独立角鞘。图中的皮肤颜色、尾部软组织及四肢姿态是复原选择，不添加蝾螈式外鳃。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "化石产地与古环境",
      "body": "史密森学会的一件头骨记录来自得克萨斯州早二叠世地层。骨骼与沉积材料支持它在浅水环境活动的解释。头骨形状可能影响水中运动，但具体功能尚不能仅由轮廓确定，图中不把头部画成实际飞行的机翼。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "牙齿与食物线索",
      "body": "口部和水生身体形态支持取食小型水生动物的解释。鱼类幼体或无脊椎动物可作讨论方向，缺少直接胃内容物时不列为确认菜单；宽头骨的用途也不能只用一种取食故事解释。"
    },
    {
      "key": "evidence",
      "label": "遗存与复原",
      "title": "用遗存检查复原",
      "body": "馆藏头骨与数字模型允许研究者比较骨突、眼区及头骨表面。生长序列显示头部轮廓随年龄变化，复原应区分幼体和成体。皮肤是否在骨突与身体之间形成大片膜没有足够依据，本批不采用这种画法。"
    },
    {
      "key": "conservation",
      "label": "灭绝记录",
      "title": "时期与末次记录的区别",
      "body": "大角双螈有早二叠世代表记录，今天已无活体。属内其他物种的年代和地区不直接扩展到本种，尤其不把北非其他双螈记录并入本档案范围。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "大角双螈的发现与名称",
      "body": "Cope 于 1882 年描述 Diplocaulus magnicornis，早于此时他已经建立双螈属。后来的研究不断比较同属种与生长变化。magnicornis 与大角状结构有关，中文“大角”指头骨后侧的伸展，不表示它长有牛羊那样的角鞘。"
    }
  ],
  "keyFacts": [
    "从上方看，头骨两侧的后伸骨突构成宽阔轮廓，眼位于头顶附近，身体后接长尾。骨突属于头骨，不是独立角鞘。图中的皮肤颜色、尾部软组织及四肢姿态是复原选择，不添加蝾螈式外鳃。",
    "馆藏头骨与数字模型允许研究者比较骨突、眼区及头骨表面。生长序列显示头部轮廓随年龄变化，复原应区分幼体和成体。皮肤是否在骨突与身体之间形成大片膜没有足够依据，本批不采用这种画法。",
    "大角双螈有早二叠世代表记录，今天已无活体。属内其他物种的年代和地区不直接扩展到本种，尤其不把北非其他双螈记录并入本档案范围。"
  ],
  "threats": [],
  "conservationActions": [
    "保存化石及其地层、产地和测年资料。",
    "区分原始化石、复制件与科学复原示意。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "period",
      "label": "代表时期",
      "value": "早二叠世"
    },
    {
      "key": "status",
      "label": "记录状态",
      "value": "已灭绝"
    }
  ],
  "media": {
    "image": "./images/species/diplocaulus-magnicornis/01-cover.webp",
    "alt": "大角双螈科学复原示意，AI 生成",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学复原示意",
    "gallery": [
      {
        "image": "./images/species/diplocaulus-magnicornis/02-observation.webp",
        "title": "全身侧面",
        "alt": "大角双螈：全身侧面，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。从上方看，头骨两侧的后伸骨突构成宽阔轮廓，眼位于头顶附近，身体后接长尾。骨突属于头骨，不是独立角鞘。图中的皮肤颜色、尾部软组织及四肢姿态是复原选择，不添加蝾螈式外鳃。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/diplocaulus-magnicornis/03-observation.webp",
        "title": "头部外形",
        "alt": "大角双螈：头部外形，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。观察鼻吻、头部及外部附属结构；图中不展示精确内部牙齿或骨骼。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/diplocaulus-magnicornis/04-observation.webp",
        "title": "前侧全身",
        "alt": "大角双螈：前侧全身，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。馆藏头骨与数字模型允许研究者比较骨突、眼区及头骨表面。生长序列显示头部轮廓随年龄变化，复原应区分幼体和成体。皮肤是否在骨突与身体之间形成大片膜没有足够依据，本批不采用这种画法。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/diplocaulus-magnicornis/05-observation.webp",
        "title": "古环境示意",
        "alt": "大角双螈：古环境示意，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。史密森学会的一件头骨记录来自得克萨斯州早二叠世地层。骨骼与沉积材料支持它在浅水环境活动的解释。头骨形状可能影响水中运动，但具体功能尚不能仅由轮廓确定，图中不把头部画成实际飞行的机翼。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      },
      {
        "image": "./images/species/diplocaulus-magnicornis/06-observation.webp",
        "title": "后侧与尾部",
        "alt": "大角双螈：后侧与尾部，AI 生成科学复原示意",
        "caption": "科学复原示意，AI 生成。观察后肢、尾部与背线，姿态不表示已确认的固定行为。毛皮颜色、软组织、姿态与布景含推测，不从生成图测量标本。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学复原示意"
      }
    ]
  },
  "sources": [
    {
      "title": "史密森学会 · PAL617002 大角双螈头骨与三维模型",
      "url": "https://3d.si.edu/object/3d/diplocaulus-magnicornis-skull%3A23a3cd17-8526-4b30-80e7-fdae0ecdd36a",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "芝加哥大学馆藏文献 · 双螈结构、物种与环境",
      "url": "https://storage.lib.uchicago.edu/pres/2006/pres2006-1042.pdf",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "法国国家自然历史博物馆 · 双螈头部生长差异",
      "url": "https://www.mnhn.fr/fr/10-especes-disparues-qui-vont-vous-surprendre",
      "kind": "general",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "PBDB · 化石分类记录",
      "url": "https://paleobiodb.org/classic/checkTaxonInfo?taxon_no=81712",
      "kind": "conservation",
      "accessedAt": "2026-10-22"
    },
    {
      "title": "GBIF · 原始匹配，采用差异见研究记录",
      "url": "https://api.gbif.org/v1/species/match?name=Diplocaulus%20magnicornis",
      "kind": "taxonomy",
      "accessedAt": "2026-10-22"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-22",
  "updatedAt": "2026-10-22"
} as const satisfies Species;

export default profile;
