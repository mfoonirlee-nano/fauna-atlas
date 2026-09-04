# 油鸱（Oilbird）物种档案研究与实现简报

- 研究对象：`Steatornis caripensis`
- 建议 `slug`：`oilbird`
- 资料访问日：`2026-09-03`
- 用途：完成 `src/data/species.ts` 中油鸱条目，并为 1 张封面和 5 张详情图划定科学边界
- 证据原则：现行分类、保护状态、分布和生境采用官方名录或数据库；感官、运动、食性、繁殖与种子传播采用同行评审原始研究；局地样本、模型结果和物种级事实分开写。

本文以 `[S01]` 至 `[S20]` 标记来源。完整书目、URL、类型和统一访问日见“来源登记”。

## 核心编辑结论

1. 接受学名为 _Steatornis caripensis_ von Humboldt, 1817。AviList v2025b、ITIS 与 GBIF 均把它置于油鸱目 `Steatornithiformes`、油鸱科 `Steatornithidae`、油鸱属 `Steatornis`；六阶分类为 Animalia、Chordata、Aves、Steatornithiformes、Steatornithidae、Steatornis。[S01][S02][S03]
2. AviList v2025b 记录油鸱目仅 1 科、1 属、1 种，因此油鸱是该目、科、属唯一现生物种。这个说法不涉及已灭绝类群，也不应改写成“活化石”。[S01]
3. 英文标准名为 `Oilbird`；西班牙语常用名包括 `Guácharo` 和 `Pájaro aceite`。中文主名“油鸱”沿用本项目 TODO，未在本轮检索中找到可确认为国家级中文标准名录的来源，不能把它标成官方中文标准名。[S01][S02][S03]
4. BirdLife 当前公开的最近一轮 IUCN 评估为 2021 年 `LC`，趋势 `Stable`，`criteria` 为空，评估者为 Clark, J.。实现时应使用 `conservation('LC', 'stable', 2021)`，不补造判据。[S04][S05]
5. 2021 年评估把全球成熟个体放在 20,000–49,999 区间，但数据质量为 `poor`、推导方式为 `suspected`，基础估计年份为 2019。这不是全球同步普查；若写入 `metrics.estimatedMatureIndividuals`，页面必须保留该限定。[S05]
6. 2021 年评估依据 1970–2017 年资料把总体趋势暂列稳定。2016 年评估曾列下降，并预测三代内适生生境损失 15.7%–16.6%；后者只能作为历史评估背景，不能覆盖现行 `stable`。[S05]
7. 截至访问日，BirdLife 物种页明确提示正在重新评估该物种。2021 年仍是最后一条已发布评估，但实现前若页面已更新，必须重新核对状态、年份、趋势、成熟个体数和生境表。[S04][S05]
8. BirdLife 当前原生、留居记录涵盖玻利维亚、巴西、哥伦比亚、哥斯达黎加、厄瓜多尔、圭亚那、巴拿马、秘鲁、特立尼达和多巴哥、委内瑞拉。阿鲁巴以及博奈尔、圣尤斯特歇斯和萨巴只列为迷鸟，不应混入结构化原生国家列表。[S06]
9. 当前生境表把热带或亚热带湿润低地森林列为主要留居生境，把湿润山地森林列为适生留居生境，把非水生洞穴列为主要繁殖生境；评估使用的海拔范围为 0–3,400 米。[S05][S07]
10. 一项特立尼达野外研究把成体全长概括为约 18 英寸、翼展 3–3.5 英尺，换算约 45.7 厘米和 91.4–106.7 厘米。原文是近似描述，不是全分布区抽样得到的闭合范围。[S14]
11. 2007 年委内瑞拉洞穴研究捕获的 12 只成鸟平均体重为 419.7 ± 4.2 克；论文规定汇报均值 ± 标准误。这个时间点和地点的样本均值可作为 `typical`，不宜伪装成物种最小值与最大值。[S09]
12. 典型外形包括浓褐至红褐色体羽、翼覆羽与外侧次级飞羽上的醒目白斑、强而钩曲且具缺刻的上喙、极宽口裂、向前超过喙尖的长口须、很短的裸腿，以及长、宽、明显呈阶梯状的尾。[S14]
13. 油鸱夜间取食森林果实，不像夜鹰那样在空中追捕昆虫。委内瑞拉 Caripe 的 1985–1988 年研究记录 32 种食物植物，其中 19 种月桂科、9 种棕榈科、3 种橄榄科、1 种五加科；这是单一地区食谱，不能当作全球封闭清单。[S15]
14. 同一研究中，月桂科果肉干物质平均含脂 49.6%，能量 31.8 kJ/g；非繁殖季食物更多依赖棕榈。数字描述该地点被取食果实的样本，不表示每枚果实或每个种群都有相同比例。[S15]
15. 油鸱能整果吞食，消化果肉后吐出完整种子。哥伦比亚洞穴 2012–2019 年的种子收集得到 22,208 粒、至少 52 种或形态种；最大种子为 54 × 29 毫米，支持它吞下相对体型很大的种子。[S14][S16]
16. 哥伦比亚研究用 3 只 GPS 个体、食物保留时间和植被样地构建传播核：总核均值 10.1 千米，范围 0–47.6 千米，`n=654`。这是模型估计，不是逐粒种子回收轨迹，也不能外推成每个种群的固定传播距离。[S16]
17. 委内瑞拉 2007 年研究部署 12 台记录器，成功下载 8 台，其中 1 只没有洞外 GPS 点，因此空间结果实际来自 7 只有效个体。最远觅食点平均离洞 44.4 ± 10.7 千米，单次最大值 73.5 千米；日栖树平均离洞 32.0 ± 5.4 千米。[S09]
18. 在该短期研究窗口内，个体有 66 ± 8% 的日栖时间在洞外森林；约 40% 的取食点和森林日栖点位于 El Guácharo 国家公园边界外。它证明洞外树栖和跨边界活动存在，不证明全年、全种群都遵循同一比例。[S09]
19. 1953 年实验证明油鸱可凭自身点击声的回声在全黑环境定向；1979 年神经生理与行为研究记录 1–15 kHz 的声能、主能量 1.5–2.5 kHz，并显示可避开最小约 20 厘米直径的圆盘。这部分信号在人耳可听范围内。[S10][S11]
20. 2017 年对特立尼达野生油鸱的阵列录音得到不同频谱：点击脉冲串短于 10 毫秒，通常含 2–5 个点击、范围 1–8 个，约每秒 5 串；峰值以下 6 dB 带宽为 7–23 kHz，能量平台集中在 10–20 kHz。准确写法是“点击声含人耳可听成分，同时大量能量延伸到高频甚至超声范围”，不能说全部声能都可听。[S12]
21. 同一研究显示，亮月光下的点击串比黑暗中更短、点击更少、能量更低；在自然背景噪声假设下，洞壁探测距离模型值从黑暗中的 26 米降至月光下的 19 米。它支持视觉与回声定位协同，但水果探测只做过声学模型，尚未观察到野外油鸱用声呐寻找果实。[S12]
22. 眼组织研究测得约 100 万根杆状感光细胞/mm²、眼球 f 值约 1.07，并指出这种高灵敏度伴随较低空间分辨率。应写成“该研究当时记录的最高值”，不把跨物种比较永久绝对化。[S13]
23. 特立尼达长期野外研究记录正常窝卵数 2–4 枚、孵化期 32–35 天、雏鸟通常 95–120 天离巢。约 70 日龄的成功离巢雏鸟样本重 560–650 克，明显超过论文给出的 415 克成鸟平均值，之后随羽毛发育减重；这些数字均有地点和年代边界。[S14]
24. “Oilbird”源于雏鸟在离巢前积累大量脂肪，历史上曾被取走熬油。当前哥伦比亚管理计划仍把零星捕猎列为地点级轻度风险；叙事应讲清历史与当前地点证据，避免暗示所有分布国仍存在同等捕猎强度。[S14][S17]
25. BirdLife 当前结构化威胁接口返回空数组。Species 中列出的威胁与行动应明确标成原始研究及地点管理计划支持的项目级建议，不能冒充现行 IUCN 全球威胁编码或全球行动处方。[S08][S09][S17]

## 名称与六阶分类

推荐字段：

```ts
id: 'species-steatornis-caripensis',
slug: 'oilbird',
names: {
  zh: '油鸱',
  en: 'Oilbird',
  aliases: [
    'Steatornis caripensis',
    'Guácharo',
    'Pájaro aceite',
  ],
},
scientificName: 'Steatornis caripensis',
taxonomy: {
  kingdom: { scientificName: 'Animalia', zhName: '动物界' },
  phylum: { scientificName: 'Chordata', zhName: '脊索动物门' },
  class: { scientificName: 'Aves', zhName: '鸟纲' },
  order: { scientificName: 'Steatornithiformes', zhName: '油鸱目' },
  family: { scientificName: 'Steatornithidae', zhName: '油鸱科' },
  genus: { scientificName: 'Steatornis', zhName: '油鸱属' },
},
```

AviList v2025b 是本档案的现行鸟类分类基准。[S01] ITIS 与 GBIF 补足六阶路径、命名人和英语俗名。[S02][S03] NCBI 等仍可能把油鸱置于广义夜鹰目 `Caprimulgiformes`；那是分类框架差异，不应混拼到本条的 AviList 路径中。

## IUCN 状态、种群与重评提示

推荐实现：

```ts
conservation: conservation('LC', 'stable', 2021),
metrics: {
  wingspanCm: [91, 107],
  elevationM: [0, 3400],
  estimatedMatureIndividuals: [20000, 49999],
},
```

不要传入 `criteria`。BirdLife 的 2021 记录中该字段为空；LC 理由是分布范围大、推测种群没有逼近受威胁等级的数量阈值、趋势暂定稳定。[S05]

`estimatedMatureIndividuals` 必须在正文或相邻说明中写明“2019 年来源、2021 年评估采用、suspected、poor-quality、不是同步普查”。如果页面布局无法保留这个限定，宁可暂时不填数量字段。BirdLife 页面在访问日显示重评提示；发布代码前需要再次读取物种页和评估历史终点。[S04][S05]

## 分布、生境与地图

推荐字段：

```ts
distribution: {
  realms: ['terrestrial'],
  continents: ['北美洲', '南美洲'],
  regions: [
    '中美洲南部',
    '安第斯山地与山麓',
    '委内瑞拉沿海山地',
    '圭亚那地盾',
    '特立尼达岛',
    '南美洲北部与中部湿润森林',
  ],
  countries: [
    '玻利维亚',
    '巴西',
    '哥伦比亚',
    '哥斯达黎加',
    '厄瓜多尔',
    '圭亚那',
    '巴拿马',
    '秘鲁',
    '特立尼达和多巴哥',
    '委内瑞拉',
  ],
  range:
    '原生留居范围从哥斯达黎加和巴拿马延伸至南美洲北部、中部及特立尼达，依赖热带或亚热带湿润低地与山地森林，并在非水生洞穴繁殖。',
  center: { lat: 3, lng: -72 },
},
habitats: [
  {
    name: '热带与亚热带湿润低地森林',
    realm: 'terrestrial',
    description:
      '主要留居和取食生境，提供富脂果实、夜间觅食树与部分洞外日栖树。',
    isPrimary: true,
  },
  {
    name: '热带与亚热带湿润山地森林',
    realm: 'terrestrial',
    description:
      '山地和山麓适生森林；当前评估记录一直延伸到约 3,400 米。',
  },
  {
    name: '非水生洞穴与岩洞',
    realm: 'terrestrial',
    description:
      '主要繁殖生境，也是群体日栖、求偶、孵卵和育雏地点；洞穴外的连续森林同样属于完整生活网络。',
    isPrimary: true,
  },
],
```

国家清单只收 BirdLife 的 `native + resident` 条目。[S06] 阿鲁巴与荷属加勒比三个岛屿的迷鸟记录可放在长文注释，不能据此扩大稳定分布。`center` 只用于地图初始视口，不是地理中心、种群中心或观测点。海拔 0–3,400 米是评估使用范围，不是生理耐受极限。[S05][S07]

## 体尺、外形、食性与活动

推荐体尺：

```ts
measurements: {
  length: {
    typical: 46,
    unit: 'cm',
    note: 'Snow 1961 对成鸟全长约 18 英寸的换算代表值，不是物种级范围',
  },
  weight: {
    typical: 0.42,
    unit: 'kg',
    note: '2007 年委内瑞拉 12 只成鸟平均 419.7 ± 4.2 克，误差为标准误',
  },
  wingspan: {
    min: 91,
    max: 107,
    unit: 'cm',
    note: 'Snow 1961 对 3–3.5 英尺近似描述的厘米换算，不是系统种群抽样范围',
  },
},
```

`adultLengthCm` 与 `adultMassKg` 不建议用 `[46, 46]` 和 `[0.42, 0.42]` 填充，因为它们是代表值或局地均值。翼展原文给出近似区间，可写入 `metrics.wingspanCm: [91, 107]`，并在说明中保留近似性质。[S09][S14]

推荐食性、活动与标签：

```ts
diet: {
  types: ['herbivore'],
  foods: [
    '富脂月桂科果实',
    '棕榈果',
    '橄榄科果实',
    '其他森林树木果实',
  ],
  description:
    '专门在夜间取食森林果实，常整果吞下并在消化果肉后吐出完整种子；食物植物随地点和季节改变，委内瑞拉与哥伦比亚研究均显示月桂科和棕榈科的重要性。',
},
activity: [
  '夜行性取食',
  '洞穴日栖',
  '树冠日栖',
  '群居繁殖',
  '远距离觅食',
  '整果吞食',
  '吐籽传播',
],
tags: [
  '中美洲',
  '南美洲',
  '洞穴',
  '湿润森林',
  '回声定位',
  '食果鸟',
  '种子传播',
],
```

`herbivore` 是现有类型中最接近专性食果的选项，正文必须用“食果”校准。不要添加昆虫、小型脊椎动物或洞穴无脊椎动物作为常规食物。本轮采用的原始食谱研究只支持果实，地点间植物清单并不相同。[S15][S16]

## 感官与行为的证据边界

### 点击回声定位

可写：油鸱在全黑洞穴中用自身发出的点击声获取近距离空间信息；点击声有人耳可听成分，现代野外录音也记录到大量高频和超声能量。[S10][S11][S12]

不可写：

- “像多数蝙蝠一样用超声捕虫”：油鸱食果，声信号和听觉范围也不同。
- “用声呐锁定果实”：2017 年论文只模拟了 2–3 厘米果实的潜在探测距离，未观察到野外声呐取果。[S12]
- “视觉在洞里完全不用”：月光条件改变点击能量，作者提出视觉与回声定位协同；回声定位补充视觉，不等于替代所有视觉。[S12]
- “全部点击都在人耳可听范围”：不同年代、野外与圈养记录的频谱不同；2017 年野外信号主能量平台为 10–20 kHz。[S11][S12]

### 低光视觉

油鸱视网膜由极高密度的小杆状感光细胞主导，并具有层叠结构；研究同时指出，这种感光灵敏度以较低分辨率为代价。[S13] 图片可以画大眼和低光环境，不能画夜视仪式绿色视野、红外光束或超过研究证据的“看清全黑洞穴”。

### 洞外树栖

2007 年追踪修正了“每天清晨都回洞”的旧印象：有效空间记录的 7 只成鸟在研究期间多次停留洞外并在森林树上安静日栖。[S09] 66 ± 8% 只属于该地点、季节和短期记录，不应写成物种全年时间预算。

## 果实、种子与森林连通性

委内瑞拉食谱研究说明油鸱为什么能负担长距离飞行：被选择的月桂科果肉在样本中脂肪和能量含量很高，棕榈在非繁殖季补足季节缺口。[S15] 哥伦比亚研究进一步说明它携带的不是少量小浆果种子，而是至少 52 种植物、宽达 29 毫米的种子。[S16]

传播距离需要明确区分三类数字：

1. 委内瑞拉 GPS 直接记录的是鸟的位置与移动，单个最远觅食点离洞 73.5 千米，最后取食树到森林日栖树平均 10.0 ± 4.6 千米。[S09]
2. 哥伦比亚的 10.1 千米均值与 47.6 千米上限来自 3 只鸟的 GPS 轨迹、种子保留时间和潜在亲本树共同构建的传播核，不是种子逐粒实测路径。[S16]
3. 研究在洞内种子陷阱收集到 22,208 粒种子，证明食物多样性与大量种子输入，但洞内萌发并不等于成功建成幼树。[S16]

页面可称油鸱为“异常重要的长距离种子传播者”，并紧邻写出研究地点与模型性质。不要使用“每粒种子都传播几十公里”“比所有现生动物都远”或“保证森林恢复”等绝对句。

## 繁殖、雏鸟与名称故事

特立尼达研究记录巢建在洞穴窄台上，正常窝卵数 2–4 枚；卵初产时白色，随后被巢材染成褐色。雌雄都孵卵，孵化期 32–35 天。[S14] 巢体主要由反刍出的植物物质和种子累积而成，不能把它画成由大量鸟粪堆成的巢。

雏鸟发育极慢，通常 95–120 天离巢。成功离巢个体在约 70 日龄重 560–650 克，随后 30–50 天随翼尾羽生长而减重，直到体重和翼长接近成鸟水平。[S14] 可以讲“雏鸟曾因脂肪被熬油而得名”，但不要重建猎杀画面作为猎奇视觉，也不要把历史利用写成每个国家当前持续的同等强度威胁。

## 页面摘要与描述建议

```ts
summary:
  '油鸱是热带美洲唯一现存的油鸱目鸟类：白天栖于洞穴或森林树冠，夜里寻找富脂果实，并用含可听成分的点击声在黑暗中回声定位。',
description:
  '油鸱有浓褐色羽毛、白色斑点、宽口裂、向前伸出的口须和长而宽的尾。它在热带或亚热带湿润森林间远距离飞行，整果吞下月桂科、棕榈科等植物的果实；消化果肉后吐出的完整种子，可被带到离取食树很远的森林。\n\n洞穴是群体繁殖与日栖核心，却不是生活范围的全部。GPS 研究记录到个体在洞外树冠日栖，许多取食点也越过保护地边界。保护油鸱需要同时减少繁殖洞穴干扰、维护周边果源林与生态廊道，并用长期监测补足全球种群估计。',
```

摘要中的“可听成分”刻意保留 1953、1979 和 2017 年频谱证据的差异。[S10][S11][S12] “唯一现存”只指 AviList 当前的目级分类。[S01]

## 六段故事

以下文字可直接改写为 `storySections`。每段先给读者一个场景，再交代数字属于哪项研究。

```ts
storySections: [
  {
    key: 'cave-clicks',
    label: '洞穴声场',
    title: '灯光消失后，点击声接管近处',
    body:
      '油鸱能在全黑洞穴中靠点击声的回声绕开障碍。早期实验记录到人耳可听的声能；现代野外阵列又发现，每串通常含 2 至 5 个点击、短于 10 毫秒，许多能量延伸到高频和超声范围。月光变亮时，它们减少点击数与声能，显示视觉和回声定位会共同塑造飞行。',
    // [S10][S11][S12]
  },
  {
    key: 'fruit-flight',
    label: '夜间取食',
    title: '它不追飞蛾，而是整口吞下果实',
    body:
      '夜幕下，油鸱飞入湿润森林，在果树前短暂悬停或掠过，把整枚果实吞入口中。委内瑞拉研究记录的食物以月桂科和棕榈科为主，其中月桂科果肉样本含脂很高。植物清单会随地点与季节改变，但这只鸟始终把森林果实而不是昆虫放在食谱中心。',
    // [S09][S15][S16]
  },
  {
    key: 'forest-roosts',
    label: '洞外一天',
    title: '有些清晨，它们并不返回洞穴',
    body:
      'GPS 记录推翻了“每夜出洞、每天回洞”的整齐日程。2007 年委内瑞拉研究的 7 只有效空间记录个体，曾连续在外活动并在森林树上安静度过白天；研究期内洞外日栖时间占 66 ± 8%。这是短期局地结果，却足以证明树冠也是生活史的一部分。',
    // [S09]
  },
  {
    key: 'seed-distance',
    label: '森林运输者',
    title: '一枚大种子，可以越过数十公里',
    body:
      '油鸱消化果肉，再吐出完整种子。哥伦比亚研究收集到至少 52 种植物的种子，并用 3 只鸟的 GPS 轨迹与保留时间估算出 10.1 千米的平均传播距离，模型范围达到 47.6 千米。这个结果描述传播潜力，不代表每一粒种子都走完同样路线。',
    // [S16]
  },
  {
    key: 'fat-nestlings',
    label: '漫长育雏',
    title: '“油”来自缓慢长大的雏鸟',
    body:
      '洞穴台地上的雏鸟通常要 95 至 120 天才离巢。特立尼达样本在约 70 日龄可重 560 至 650 克，超过论文记录的成鸟平均体重，之后再随着飞羽生长减重。历史上人们曾取雏鸟熬油，英文名由此留下；今天这段历史更应提醒人们保护繁殖洞穴。',
    // [S14][S17]
  },
  {
    key: 'cave-and-corridor',
    label: '保护网络',
    title: '守住洞穴，也要守住远方的果树',
    body:
      '2021 年全球评估仍把油鸱列为无危、趋势稳定，但哥伦比亚管理计划记录了巢期灯光干扰、零星捕猎与周边森林破碎化。委内瑞拉追踪点中约四成取食和森林日栖位置在国家公园外。洞穴管理、果源林保护、生态廊道和长期计数必须放在同一张地图上。',
    // [S05][S09][S17]
  },
],
```

## `keyFacts` 候选

下列 18 项均可直接进入数组；括号中的限定应保留在字符串内，避免卡片脱离上下文后误读。

```ts
keyFacts: [
  'AviList v2025b 将油鸱列为油鸱目、油鸱科和油鸱属唯一现存物种。', // [S01]
  '它在热带或亚热带湿润森林留居，并以非水生洞穴作为主要繁殖生境。', // [S07]
  '当前 BirdLife 原生留居清单覆盖中美洲和南美洲共 10 个国家。', // [S06]
  '成鸟全长常概括为约 46 厘米，翼展约 91 至 107 厘米，均为早期近似描述。', // [S14]
  '2007 年委内瑞拉 12 只成鸟平均体重为 419.7 ± 4.2 克。', // [S09]
  '宽口裂、钩曲具缺刻的喙、长口须和阶梯状长尾是重要外形线索。', // [S14]
  '油鸱夜间取食果实，不像夜鹰那样在空中追捕昆虫。', // [S09][S15]
  '委内瑞拉一处种群记录 32 种食物植物，以月桂科和棕榈科最丰富。', // [S15]
  '该研究的月桂科果肉干物质平均含脂 49.6%，属于地点级食物样本。', // [S15]
  '哥伦比亚洞穴种子收集得到至少 52 种植物，最大种子宽 29 毫米。', // [S16]
  '哥伦比亚 3 只 GPS 个体支持的传播核均值为 10.1 千米，属于模型估计。', // [S16]
  '委内瑞拉有效空间记录的 7 只个体中，单个最远觅食点离洞 73.5 千米。', // [S09]
  '同一短期研究中，洞外森林日栖时间占 66 ± 8%。', // [S09]
  '油鸱在全黑环境使用点击回声定位，声信号含人耳可听成分。', // [S10][S11]
  '2017 年野外点击串通常含 2 至 5 个点击，整串短于 10 毫秒。', // [S12]
  '视网膜研究测得约 100 万根杆状感光细胞每平方毫米，但高灵敏度伴随较低分辨率。', // [S13]
  '特立尼达研究记录正常窝卵数 2 至 4 枚、孵化期 32 至 35 天。', // [S14]
  '雏鸟通常 95 至 120 天离巢，并在羽毛长成前积累大量脂肪。', // [S14]
],
```

## 威胁与保护行动

BirdLife 的当前结构化威胁接口为 `[]`。[S08] 以下内容来自同行评审追踪研究和哥伦比亚国家公园管理计划，必须在页面语气中保留“地点级”“保护缺口”或“管理建议”等标识。

推荐 `threats`：

```ts
threats: [
  '地点级：繁殖期访客用白光或黄光直射洞穴巢位，可使成鸟仓促离巢，并造成卵或雏鸟坠落。', // [S17]
  '地点级：哥伦比亚保护地周边仍记录零星捕猎，现行管理计划将其评为轻度风险并要求维持预防和执法。', // [S17]
  '地点级：保护地周边农业扩张、单一种植、砍伐与焚烧会切断亚山地森林连通性，并影响远离繁殖洞穴的果源林。', // [S17]
  '保护缺口：委内瑞拉追踪研究约四成取食点和森林日栖点位于国家公园外，单独保护洞口无法覆盖完整活动网络。', // [S09]
],
```

推荐 `conservationActions`：

```ts
conservationActions: [
  '在繁殖洞穴维持巡护和禁猎，并按巢期监测动态限制人员靠近巢台。', // [S17][S18]
  '规范洞穴游览，禁止用白光或黄光直射巢鸟；哥伦比亚管理计划建议由向导使用红外观察设备。', // [S17]
  '保护并恢复洞穴之外的湿润低地、山地森林和关键果源树群，优先连接日栖树、取食地与繁殖洞穴。', // [S09][S17]
  '让相邻国家公园、区域保护地、市镇和私人保护区共同实施生态廊道与缓冲区管理。', // [S17][S18][S19]
  '持续进行标准化洞穴计数、繁殖成功率、洞外移动和食物植物物候监测，避免把季节变化误判为长期趋势。', // [S17][S20]
],
```

特立尼达 2016–2019 年已知栖息洞调查估计 3,320 只，高于 1950 年代末至 1960 年代初的 1,460 只估计，并提出捕猎在那里可能已不再是过去那样的主要威胁。[S20] 两次调查方法、洞穴可达性与时间跨度不同，这个结果只能说明特立尼达已知栖息地的地点趋势，不能抵消其他地区的风险或替代全球监测。

## 四项 `featuredStats`

```ts
featuredStats: [
  {
    key: 'adult-wingspan',
    label: '成鸟翼展',
    value: '约91–107',
    unit: '厘米',
    note: 'Snow 1961 对 3–3.5 英尺的换算近似值，不是全范围抽样上下限',
  }, // [S14]
  {
    key: 'click-burst-duration',
    label: '点击脉冲串',
    value: '<10',
    unit: '毫秒',
    note: '特立尼达野外阵列录音；通常每串 2–5 个点击，57 段飞行序列、285 个脉冲串',
  }, // [S12]
  {
    key: 'tracked-foraging-maximum',
    label: '最远觅食点',
    value: '73.5',
    unit: '千米',
    note: '2007 年委内瑞拉研究中 1 只有效 GPS 个体的单次最大值，不是物种能力上限',
  }, // [S09]
  {
    key: 'modelled-seed-dispersal-mean',
    label: '种子传播均值',
    value: '10.1',
    unit: '千米',
    note: '哥伦比亚 3 只 GPS 个体与种子保留时间构建的总传播核，n=654，不是逐粒回收距离',
  }, // [S16]
],
```

四张卡分别覆盖形态、感官、移动和生态功能。不要把 20,000–49,999 做成无说明的大字卡，因为其证据质量为 `poor`、推导方式为 `suspected`。[S05]

## 六张图片：统一规范

全部图像采用 3:2 横图、1536 × 1024、sRGB、不透明背景。视觉风格统一为写实自然史摄影式科学情景重建；不出现文字、数字、标尺、箭头、声波环、地图线、商标、签名或水印。统一 credit 建议：`Fauna Atlas · AI 生成科学情景重建`。

通用形态约束来自 Snow 的实地描述与眼组织研究：[S13][S14]

- 浓褐至红褐色体羽，翼覆羽和外侧次级飞羽有清晰白斑；不是猫头鹰式面盘，也不是灰色夜鹰的保护色横纹。
- 头大，适应低光的眼醒目；喙强而钩曲、口裂很宽，喙周围有向前伸出的长口须。
- 翼宽，翼尖可见分离的初级飞羽；尾长、宽、呈阶梯状；腿很短但正常有力。
- 不画蝙蝠膜翼、猛禽粗大爪、鹦鹉喙、猫头鹰面盘、昆虫猎物、可视化“声呐波”或发光眼。

### 01 封面：洞口完整成鸟

- 源文件：`src/assets/source/species/oilbird/01-cave-entrance-perch-cover-source.png`
- 运行时文件：`public/images/species/oilbird/01-cave-entrance-perch-cover.webp`
- `media.image`：`./images/species/oilbird/01-cave-entrance-perch-cover.webp`
- 建议 `focalPoint`：`{ x: 0.61, y: 0.48 }`
- title：`暮色洞口的油鸱`
- alt：`暮色中的湿润森林洞口，一只完整的褐色白斑油鸱位于画面右侧岩台，钩喙、短腿、折叠双翼和长尾均在画内，左侧保留大面积暗色岩壁`
- caption：`油鸱以洞穴作为繁殖与群栖核心；画面重建通用湿润森林洞口，不代表具体国家、洞穴、个体或繁殖状态。`
- 科学边界：可表现洞口与森林相连，不把成鸟指定为雌雄，不声称它只在洞内日栖；脚可被岩台自然接触遮挡一小部分，但两脚、喙尖、头顶、折叠翼尖和尾尖的真实轮廓必须可核验。[S07][S09][S14]

精确提示词：

> Ultra-realistic natural-history photograph, 3:2 landscape, 1536x1024, dusk at the mouth of a humid Neotropical limestone cave. Exactly one complete adult Oilbird, Steatornis caripensis, perches naturally on a small rough rock ledge in the right-middle of the frame, visual body center at 61 percent image width and 48 percent image height. The bird is modest in frame, fully visible from bill tip and crown through both folded wing tips, both short legs and feet, broad graduated tail tip, with real cave and forest background around every body boundary. Rich rufous-brown plumage, distinct small white spots on wing coverts and outer secondaries, large dark eye with a small natural catchlight, strongly hooked notched bill, very wide gape line, long forward-pointing rictal bristles, short bare legs, long broad tail. The left 45 percent is quiet dark textured cave wall with low contrast and no bright highlights; distant blue-hour rainforest is softly out of focus at far right. Natural dim light, realistic feather microtexture, subdued cinematic exposure. No owl facial disc, no ear tufts, no raptor talons, no bat wings, no insects, no extra birds, no eggs, no nest, no visible sound waves, no text, no logo, no watermark, no cropped anatomy.

### 02 详情：侧面形态

- 源文件：`src/assets/source/species/oilbird/02-adult-lateral-morphology-source.png`
- 运行时文件：`public/images/species/oilbird/02-adult-lateral-morphology.webp`
- `focalPoint`：`{ x: 0.55, y: 0.52 }`
- title：`钩喙、口须与阶梯状长尾`
- alt：`一只完整油鸱侧身蹲栖在洞内横向岩台，褐色白斑羽衣、宽口裂、前伸口须、短腿、折叠双翼和阶梯状长尾清楚可见`
- caption：`油鸱的宽口裂、长口须、短腿和长尾适合做物种识别；画面不据羽色判定性别。`
- 科学边界：单只完整成鸟、严格侧面或三分之二侧面；不放标尺，不把 46 厘米或 91–107 厘米视觉化成未经校准的比例。[S14]

精确提示词：

> Scientific natural-history portrait rendered as a realistic photograph, 3:2 landscape, 1536x1024. Exactly one complete adult Oilbird crouches horizontally on a broad dry limestone ledge inside a dim cave, three-quarter lateral view. Keep the entire bill, head, both folded wings, both short legs and feet, and full graduated tail inside frame with generous background clearance. Show rich brown to rufous plumage, crisp small white spots concentrated on wing coverts and outer secondaries, a large dark eye with a small natural catchlight, a strongly hooked upper bill with a subtle notch, an exceptionally wide gape line, short tongue not visible, long forward rictal bristles projecting beyond the bill, short bare legs, long broad graduated tail. Soft side light from a distant cave entrance reveals diagnostic texture without making the cave bright. No owl facial disc, no ear tufts, no giant raptor feet, no branch perch, no extra animals, no labels, no measurement marks, no text, no watermark, no cropped tail or feet.

### 03 详情：全黑洞穴飞行

- 源文件：`src/assets/source/species/oilbird/03-dark-cave-flight-source.png`
- 运行时文件：`public/images/species/oilbird/03-dark-cave-flight.webp`
- `focalPoint`：`{ x: 0.57, y: 0.47 }`
- title：`点击声中的洞穴航线`
- alt：`三只褐色白斑油鸱在昏暗宽阔洞道中飞行，最近一只双翼和长尾完整，湿润岩壁与远处微弱洞口光可见`
- caption：`油鸱在黑暗洞穴中使用点击回声定位；静态画面不能显示声波频率、点击数量或是否正在发声。`
- 科学边界：最多 3 只，最近个体必须完整；画面只表现飞行环境，不画声波环、雷达网格或发光路径，也不暗示点击用于捕食或寻找果实。[S10][S11][S12]

精确提示词：

> Ultra-realistic low-light wildlife photograph, 3:2 landscape, 1536x1024, inside a broad humid Neotropical limestone cave passage. Three Oilbirds fly through the dark space; the nearest bird at right-center is fully visible with complete bill, both wide feathered wings, separated primary tips, short feet tucked naturally, and full broad graduated tail, while two smaller birds remain clearly identifiable farther back. Brown-rufous plumage with white wing spots, wide gape line and long rictal bristles, anatomically normal bird wings. A faint cool glow from a distant cave mouth and subtle reflected moisture reveal the rock walls; realistic motion without blur hiding anatomy. No graphic sonar rings, no glowing sound waves, no bats, no insects, no prey capture, no owl faces, no artificial lamps, no text, no watermark, no clipped wings or tail.

### 04 详情：夜间取果

- 源文件：`src/assets/source/species/oilbird/04-lipid-fruit-hover-source.png`
- 运行时文件：`public/images/species/oilbird/04-lipid-fruit-hover.webp`
- `focalPoint`：`{ x: 0.58, y: 0.49 }`
- title：`森林树冠前的一口整果`
- alt：`夜间湿润森林树冠中，一只完整油鸱在深紫色卵形果实枝旁短暂悬停，喙正接触一枚完整果实，双翼、短足和长尾均可见`
- caption：`油鸱会短暂悬停或掠过果枝并整果吞食；果枝只代表常见富脂森林果实，不作植物种鉴定。`
- 科学边界：果实外形可参考月桂科暗色单籽核果，但不把生成植物命名到种；不画昆虫、不画咬碎种子、不画蜂鸟式持续定点悬停。[S09][S15]

精确提示词：

> Ultra-realistic nocturnal rainforest wildlife photograph, 3:2 landscape, 1536x1024. Exactly one complete adult Oilbird briefly hovers beside a fruiting canopy branch in a humid Neotropical forest, bill touching one intact dark purple-brown ovoid single-seeded fruit as it plucks the fruit whole. The full bird remains inside frame: hooked bill and forward rictal bristles, large dark eye, both broad feathered wings in a slow maneuvering beat, short feet, and complete long graduated tail. Rich rufous-brown plumage with distinct white wing spots. The branch carries a small cluster of generic laurel-like oily fruits and glossy leaves, botanically plausible but not labeled to species. Soft moonlight and natural low-light color, no flash. No insects, no torn fruit pulp, no cracked seed, no hummingbird proportions, no bats, no sonar graphics, no extra birds, no text, no watermark, no cropped anatomy.

### 05 详情：森林日栖与吐籽

- 源文件：`src/assets/source/species/oilbird/05-forest-day-roost-seed-source.png`
- 运行时文件：`public/images/species/oilbird/05-forest-day-roost-seed.webp`
- `focalPoint`：`{ x: 0.59, y: 0.53 }`
- title：`洞外树冠的一天`
- alt：`阴天湿润森林树冠内，一只完整油鸱安静蹲栖在粗枝上，一枚完整椭圆种子刚从张开的喙前落下，周围没有洞穴`
- caption：`追踪研究记录油鸱在洞外树上日栖并吐出完整种子；画面不能给这枚种子指定飞行距离或亲本树。`
- 科学边界：静止树栖姿态可见；只画 1 枚完整种子，不画成排种子、粪便喷射或萌芽时间线。这个场景结合了同一研究记录的树栖与吐籽行为，不能当作某次个体事件照片。[S09][S14][S16]

精确提示词：

> Realistic scientific wildlife reconstruction as a natural photograph, 3:2 landscape, 1536x1024, overcast daytime beneath the closed canopy of a humid Neotropical forest. Exactly one complete adult Oilbird rests quietly in its characteristic low horizontal crouch on a broad branch, away from any cave. The bird is fully visible with hooked bill, wide gape, long forward rictal bristles, brown-rufous white-spotted plumage, both folded wings, both short feet gripping the branch, and complete graduated tail. One intact clean oval seed has just left the open bill and is falling a few centimeters below it, clearly regurgitated rather than broken or embedded in feces. Dappled low light, deep green foliage, natural depth of field. No nest, no chicks, no droppings, no seed trail, no map, no distance markers, no extra animals, no text, no watermark, no cropped anatomy.

### 06 详情：洞穴台地育雏

- 源文件：`src/assets/source/species/oilbird/06-cave-ledge-nestling-source.png`
- 运行时文件：`public/images/species/oilbird/06-cave-ledge-nestling.webp`
- `focalPoint`：`{ x: 0.56, y: 0.57 }`
- title：`长达数月的洞穴育雏`
- alt：`昏暗洞穴宽岩台上，一只完整成鸟守在一只体型饱满、仍带灰色绒羽的大油鸱雏鸟旁，巢台边缘和散落完整种子清楚可见`
- caption：`油鸱雏鸟通常 95–120 天离巢，发育中期可比成鸟更重；画面不以外观判定精确日龄或体重。`
- 科学边界：只表现一个发育阶段，不同时画卵和大雏鸟；巢台以吐出的植物物质和种子为主，不画成鸟粪堆；不出现采油、捕猎、游客或直射白光。[S14]

精确提示词：

> Ultra-realistic natural-history photograph, 3:2 landscape, 1536x1024, on a broad protected ledge inside a dim humid limestone cave. Exactly one complete adult Oilbird stands beside one large well-fed nestling. The adult shows brown-rufous plumage with white wing spots, hooked bill, long rictal bristles, short legs and a full graduated tail. The nestling is plump and age-appropriate, partly covered in long grey down with developing brown wing and tail feathers, not a newly hatched chick and not fully adult-plumaged. The shallow nest platform is made of dark regurgitated plant material with a few intact seeds around it; the ledge edge is clearly visible and safe. Gentle indirect cave-mouth light, no direct flashlight. No eggs, no extra chicks, no guano mound, no oil extraction, no hunters, no visitors, no labels, no text, no watermark, no cropped birds.

## 封面完整主体边界验收计划

封面必须按 `src/assets/source/README.md` 的 species cover rule 验收。提示词只是构图目标，不能代替对最终像素的核验。

### 1. 源图基线

1. 源图固定为 1536 × 1024、3:2、sRGB、不透明 PNG；运行时 WebP 与该源图同构图。
2. 用图像查看工具放大到 100% 和 200%，人工描出最小完整主体矩形。当前构图目标为 `x=850–1020, y=360–610`；最终以实际像素重新记录，不抄目标值。
3. 主体矩形必须包含喙尖、头顶、两侧折叠翼边、可辨认的两腿与足、尾尖。岩台可以自然遮挡脚底接触面，不能用岩石掩盖缺失、融合或畸形的腿足。
4. 实际主体中心 `((x1+x2)/2)/1536` 必须 `>=0.60`；目标中心约 0.61。左侧 40%，即 `x=0–614`，应保持低对比、无第二动物、无亮洞口、无抢眼枝叶。
5. 主体矩形四边外都要看到真实背景。任何一处碰源图边界、羽毛被截断或尾尖依靠模糊“补齐”，均判失败并重新生成。

### 2. 规定视口与静态状态

分别检查 `320×760`、`390×760`、`1366×768`、`1920×900`、`2560×900`、`3840×900`。使用实际首页 CSS：`object-fit: cover`、`object-position: 61% 48%`，不得用手工截图裁切代替。

每个视口记录：

- 主体像素边界与视口四边的最小距离；喙、头、两翼、两足、尾每一项都必须至少留 24 CSS px。
- 主体矩形不得与左侧标题、副标题、按钮的可见字形边界相交，也不得与右侧 `.hero-carousel__panel` 相交。
- 左侧文案后方保持足够暗且纹理稳定；不能让白斑、眼睛高光或洞口天空穿过主要文字。
- 右侧面板、页边和主体之间均留可见呼吸空间。若一张 3:2 图无法同时通过窄屏与 3840×900，必须增加断点 art direction 和相应回归样例，不能接受截肢。

### 3. 动画端点

逐一截取并核验以下端点，而非只看动画结束帧：

| 状态 | `src/styles.css` 端点 | 必查风险 |
| --- | --- | --- |
| 初始进入起点 | `scale(1.04)` | 放大后脚、尾或喙是否跌破 24 px 边距 |
| 初始进入终点 | `scale(1)` | 稳态主体、文字和面板关系 |
| 向前进入起点 | `translate3d(5%,0,0) scale(1.025)` | 右移是否挤压尾部或右侧面板 |
| 向前离开终点 | `translate3d(-4%,0,0) scale(1.015)` | 左移是否压到标题区 |
| 向后进入起点 | `translate3d(-5%,0,0) scale(1.025)` | 左移是否压到标题区 |
| 向后离开终点 | `translate3d(4%,0,0) scale(1.015)` | 右移是否挤压主体或面板 |

六种视口乘以上述 6 个关键端点，共 36 个组合。每个组合都要核对完整主体与 24 px 净空；半透明端点仍按可见像素验收。

### 4. 结果登记

生成、压缩和接入后，在物种源图 README 登记：源文件 SHA-256、源图尺寸与色彩空间、实际主体边界、实际主体中心比例、最终 `focalPoint`、六个视口与六类端点的结果、生成提示词、已知局限。向 `tests/hero-carousel.test.mjs` 加入油鸱样例，并运行 `npm run test:carousel`；再运行项目要求的类型检查、构建和静态资产检查。仓库规则禁止为验证打开 GUI 或无头浏览器，应使用现有测试与静态计算工具。

## `media` 字段建议

```ts
media: {
  image: './images/species/oilbird/01-cave-entrance-perch-cover.webp',
  alt: '暮色中的湿润森林洞口，一只完整的褐色白斑油鸱位于画面右侧岩台，钩喙、短腿、折叠双翼和长尾均在画内，左侧保留大面积暗色岩壁',
  focalPoint: { x: 0.61, y: 0.48 },
  credit: 'Fauna Atlas · AI 生成科学情景重建',
  gallery: [
    {
      image: './images/species/oilbird/02-adult-lateral-morphology.webp',
      alt: '一只完整油鸱侧身蹲栖在洞内横向岩台，褐色白斑羽衣、宽口裂、前伸口须、短腿、折叠双翼和阶梯状长尾清楚可见',
      title: '钩喙、口须与阶梯状长尾',
      caption: '油鸱的宽口裂、长口须、短腿和长尾适合做物种识别；画面不据羽色判定性别。',
      focalPoint: { x: 0.55, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/oilbird/03-dark-cave-flight.webp',
      alt: '三只褐色白斑油鸱在昏暗宽阔洞道中飞行，最近一只双翼和长尾完整，湿润岩壁与远处微弱洞口光可见',
      title: '点击声中的洞穴航线',
      caption: '油鸱在黑暗洞穴中使用点击回声定位；静态画面不能显示声波频率、点击数量或是否正在发声。',
      focalPoint: { x: 0.57, y: 0.47 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/oilbird/04-lipid-fruit-hover.webp',
      alt: '夜间湿润森林树冠中，一只完整油鸱在深紫色卵形果实枝旁短暂悬停，喙正接触一枚完整果实，双翼、短足和长尾均可见',
      title: '森林树冠前的一口整果',
      caption: '油鸱会短暂悬停或掠过果枝并整果吞食；果枝只代表常见富脂森林果实，不作植物种鉴定。',
      focalPoint: { x: 0.58, y: 0.49 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/oilbird/05-forest-day-roost-seed.webp',
      alt: '阴天湿润森林树冠内，一只完整油鸱安静蹲栖在粗枝上，一枚完整椭圆种子刚从张开的喙前落下，周围没有洞穴',
      title: '洞外树冠的一天',
      caption: '追踪研究记录油鸱在洞外树上日栖并吐出完整种子；画面不能给这枚种子指定飞行距离或亲本树。',
      focalPoint: { x: 0.59, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/oilbird/06-cave-ledge-nestling.webp',
      alt: '昏暗洞穴宽岩台上，一只完整成鸟守在一只体型饱满、仍带灰色绒羽的大油鸱雏鸟旁，巢台边缘和散落完整种子清楚可见',
      title: '长达数月的洞穴育雏',
      caption: '油鸱雏鸟通常 95–120 天离巢，发育中期可比成鸟更重；画面不以外观判定精确日龄或体重。',
      focalPoint: { x: 0.56, y: 0.57 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
  ],
},
```

封面 schema 没有 `title` 与 `caption` 字段；上文给出的封面 title/caption 应登记在源图 README 或相关资产记录中，`media` 只写 schema 支持的 `image`、`alt`、`focalPoint` 与 `credit`。

## 来源登记

所有来源统一 `accessedAt: '2026-09-03'`。BirdLife 的 JSON endpoint 用于逐字段复核；正式页面仍保留为用户可读入口。

| ID | 来源 | 用途 |
| --- | --- | --- |
| S01 | [AviList Core Team 2026, AviList v2025b](https://www.avilist.org/checklist/v2025b/) | 现行鸟类分类、英文名、目科种数 |
| S02 | [ITIS TSN 555524: Steatornis caripensis](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=555524) | 接受名、命名人、六阶分类、英文名 |
| S03 | [GBIF Backbone: Steatornis caripensis, key 2497150](https://www.gbif.org/species/2497150) | 接受名、六阶分类、多语俗名 |
| S04 | [BirdLife DataZone: Oilbird species factsheet](https://datazone.birdlife.org/species/factsheet/oilbird-steatornis-caripensis) | 当前评估入口、重评提示、保护与生态总览 |
| S05 | [BirdLife assessment history JSON, species 2347](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/2347/history) | 2021 LC、stable、criteria 空值、数量质量、海拔、历史评估 |
| S06 | [BirdLife countries JSON, species 2347](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/2347/countries) | 原生留居 10 国与迷鸟地区区分 |
| S07 | [BirdLife habitats JSON, species 2347](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/2347/habitats) | 低地湿润林、山地湿润林、洞穴的重要性和季节 |
| S08 | [BirdLife threats JSON, species 2347](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/2347/threats) | 当前结构化威胁表为空 |
| S09 | [Holland et al. 2009, The Secret Life of Oilbirds](https://doi.org/10.1371/journal.pone.0008264) | 成人体重、GPS 活动、洞外日栖、保护地边界、取食活动 |
| S10 | [Griffin 1953, Acoustic Orientation in the Oil Bird](https://doi.org/10.1073/pnas.39.8.884) | 全黑环境回声定位和早期野外点击记录 |
| S11 | [Konishi & Knudsen 1979, The oilbird: hearing and echolocation](https://doi.org/10.1126/science.441731) | 可听频段、听觉敏感区、全黑避障圆盘实验 |
| S12 | [Brinkløv et al. 2017, Oilbirds produce echolocation signals beyond their best hearing range](https://doi.org/10.1098/rsos.170255) | 野外点击串、频谱、月光响应、探测距离模型 |
| S13 | [Martin et al. 2004, The eyes of oilbirds](https://doi.org/10.1007/s00114-003-0495-3) | 杆状感光细胞密度、眼球 f 值、灵敏度与分辨率权衡 |
| S14 | [Snow 1961, The natural history of the oilbird, Part 1](https://doi.org/10.5962/p.203335) | 体长、翼展、形态、整果与吐籽、窝卵、孵化、雏鸟发育、历史利用 |
| S15 | [Bosque, Ramírez & Rodríguez 1995, The Diet of the Oilbird in Venezuela](https://digitalcommons.usf.edu/ornitologia_neotropical/vol6/iss2/3/) | 32 种食物植物、科比例、季节食谱、果肉营养 |
| S16 | [Stevenson et al. 2021, Oilbirds disperse large seeds at longer distance than extinct megafauna](https://doi.org/10.1038/s41598-020-79280-4) | 52 种植物、种子尺寸、传播核、方法与样本边界 |
| S17 | [Parques Nacionales Naturales de Colombia, Plan de Manejo PNN Cueva de los Guácharos](https://www.parquesnacionales.gov.co/wp-content/uploads/2022/09/plan-de-manejo-pnn-cueva-de-los-guacharos_adop-res-142_2022.pdf) | 洞穴灯光干扰、零星捕猎、周边破碎化、监测和廊道行动 |
| S18 | [Parques Nacionales Naturales de Colombia, PNN Cueva de los Guácharos](https://www.parquesnacionales.gov.co/nuestros-parques/pnn-cueva-de-los-guacharos/) | 保护地现况、洞穴与森林保护、访客规范 |
| S19 | [INPARQUES Venezuela, Cueva del Guácharo](https://www.inparques.gob.ve/Monumentos%20Nacionales/cueva-guacharo.html) | 委内瑞拉洞穴与周围森林的保护地背景 |
| S20 | [Rutherford 2019, An Update on the Population of the Oilbird in Trinidad](https://ttfnc.org/livingworld/index.php/lwj/article/view/a2) | 2016–2019 年已知栖息洞计数与特立尼达地点趋势 |

建议 `SpeciesSource` 数组：

```ts
const OILBIRD_SOURCES = [
  {
    title: 'AviList v2025b: Global avian checklist',
    url: 'https://www.avilist.org/checklist/v2025b/',
    kind: 'taxonomy',
    accessedAt: '2026-09-03',
  },
  {
    title: 'ITIS: Steatornis caripensis (TSN 555524)',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=555524',
    kind: 'taxonomy',
    accessedAt: '2026-09-03',
  },
  {
    title: 'GBIF Backbone Taxonomy: Steatornis caripensis',
    url: 'https://www.gbif.org/species/2497150',
    kind: 'taxonomy',
    accessedAt: '2026-09-03',
  },
  {
    title: 'BirdLife DataZone: Oilbird species factsheet',
    url: 'https://datazone.birdlife.org/species/factsheet/oilbird-steatornis-caripensis',
    kind: 'conservation',
    accessedAt: '2026-09-03',
  },
  {
    title: 'BirdLife DataZone: Oilbird assessment history',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/2347/history',
    kind: 'conservation',
    accessedAt: '2026-09-03',
  },
  {
    title: 'BirdLife DataZone: Oilbird country distribution',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/2347/countries',
    kind: 'distribution',
    accessedAt: '2026-09-03',
  },
  {
    title: 'BirdLife DataZone: Oilbird habitat classification',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/2347/habitats',
    kind: 'ecology',
    accessedAt: '2026-09-03',
  },
  {
    title: 'BirdLife DataZone: Oilbird threat classification',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/2347/threats',
    kind: 'conservation',
    accessedAt: '2026-09-03',
  },
  {
    title: 'Holland et al. 2009: The Secret Life of Oilbirds',
    url: 'https://doi.org/10.1371/journal.pone.0008264',
    kind: 'ecology',
    accessedAt: '2026-09-03',
  },
  {
    title: 'Griffin 1953: Acoustic Orientation in the Oil Bird',
    url: 'https://doi.org/10.1073/pnas.39.8.884',
    kind: 'ecology',
    accessedAt: '2026-09-03',
  },
  {
    title: 'Konishi and Knudsen 1979: The oilbird, hearing and echolocation',
    url: 'https://doi.org/10.1126/science.441731',
    kind: 'ecology',
    accessedAt: '2026-09-03',
  },
  {
    title: 'Brinkløv et al. 2017: Oilbird echolocation under natural light conditions',
    url: 'https://doi.org/10.1098/rsos.170255',
    kind: 'ecology',
    accessedAt: '2026-09-03',
  },
  {
    title: 'Martin et al. 2004: The eyes of oilbirds',
    url: 'https://doi.org/10.1007/s00114-003-0495-3',
    kind: 'ecology',
    accessedAt: '2026-09-03',
  },
  {
    title: 'Snow 1961: The natural history of the oilbird, Part 1',
    url: 'https://doi.org/10.5962/p.203335',
    kind: 'ecology',
    accessedAt: '2026-09-03',
  },
  {
    title: 'Bosque et al. 1995: The Diet of the Oilbird in Venezuela',
    url: 'https://digitalcommons.usf.edu/ornitologia_neotropical/vol6/iss2/3/',
    kind: 'ecology',
    accessedAt: '2026-09-03',
  },
  {
    title: 'Stevenson et al. 2021: Oilbirds disperse large seeds at longer distance than extinct megafauna',
    url: 'https://doi.org/10.1038/s41598-020-79280-4',
    kind: 'ecology',
    accessedAt: '2026-09-03',
  },
  {
    title: 'Parques Nacionales de Colombia: PNN Cueva de los Guácharos management plan',
    url: 'https://www.parquesnacionales.gov.co/wp-content/uploads/2022/09/plan-de-manejo-pnn-cueva-de-los-guacharos_adop-res-142_2022.pdf',
    kind: 'conservation',
    accessedAt: '2026-09-03',
  },
  {
    title: 'Parques Nacionales de Colombia: PNN Cueva de los Guácharos',
    url: 'https://www.parquesnacionales.gov.co/nuestros-parques/pnn-cueva-de-los-guacharos/',
    kind: 'conservation',
    accessedAt: '2026-09-03',
  },
  {
    title: 'INPARQUES Venezuela: Cueva del Guácharo',
    url: 'https://www.inparques.gob.ve/Monumentos%20Nacionales/cueva-guacharo.html',
    kind: 'conservation',
    accessedAt: '2026-09-03',
  },
  {
    title: 'Rutherford 2019: An Update on the Population of the Oilbird in Trinidad',
    url: 'https://ttfnc.org/livingworld/index.php/lwj/article/view/a2',
    kind: 'conservation',
    accessedAt: '2026-09-03',
  },
] satisfies readonly SpeciesSource[];
```

BirdLife 的 history、countries、habitats 和 threats endpoint 已按对应 `kind` 放进 `SpeciesSource`，便于逐字段审计。四个 URL 均为官方 DataZone 前端使用的数据接口，不与用户可读 factsheet 重复。

## 主要不确定性与禁用表述

1. **IUCN 正在重评**：2021 是访问日最后已发布评估，不保证代码合并时仍是最新值。
2. **LC 没有判据字符串**：`criteria` 为空，应省略，不能从理由文本倒推 A、B、C 或 D 判据。
3. **成熟个体数质量低**：20,000–49,999 是 `suspected` 且 `poor-quality` 的 2019 估计带，不是普查结果。
4. **现行趋势是 stable**：2016 年 `decreasing` 只能作为历史记录，不能替换 2021 字段。
5. **迷鸟不等于原生留居**：阿鲁巴和荷属加勒比地点不进入结构化国家数组。
6. **体长和翼展为近似值**：约 46 厘米和 91–107 厘米来自 1961 年文字概括，不是现代全范围抽样。
7. **体重是局地均值**：419.7 ± 4.2 克来自委内瑞拉 12 只成鸟，不能写成物种范围。
8. **人耳可听不是全频可听**：油鸱点击含可听成分，2017 年野外信号的大量能量位于 10–20 kHz。
9. **回声定位不等于声呐找果**：野外取果时如何使用声学信息尚未直接观察。
10. **GPS 样本很小**：委内瑞拉空间结果有效 `n=7`，哥伦比亚传播核来自 3 只鸟。
11. **传播距离含模型推断**：10.1 千米和 47.6 千米不是逐粒种子回收值。
12. **食谱清单是地点级**：委内瑞拉 32 种与哥伦比亚至少 52 种不矛盾，也不构成全球完整清单。
13. **洞穴不是全部生境**：繁殖依赖洞穴，部分个体可在森林树上日栖；两种事实需要同时出现。
14. **当前全球威胁表为空**：地点管理计划记录的灯光、捕猎和破碎化风险不能标成 BirdLife 全球威胁编码。
15. **雏鸟超重不是成人体型**：560–650 克是约 70 日龄成功离巢雏鸟的地点样本，不是成鸟体重范围。
16. **“唯一”必须限定现存分类**：可以写唯一现存油鸱目物种，不能写唯一会飞的夜行食果动物或活化石。

## 实现验收建议

```js
assert.equal(profile.id, 'species-steatornis-caripensis');
assert.equal(profile.slug, 'oilbird');
assert.equal(profile.names.zh, '油鸱');
assert.equal(profile.names.en, 'Oilbird');
assert.equal(profile.scientificName, 'Steatornis caripensis');
assert.deepEqual(
  getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
    rank,
    taxon.scientificName,
  ]),
  [
    ['kingdom', 'Animalia'],
    ['phylum', 'Chordata'],
    ['class', 'Aves'],
    ['order', 'Steatornithiformes'],
    ['family', 'Steatornithidae'],
    ['genus', 'Steatornis'],
  ],
);
assert.deepEqual(
  {
    code: profile.conservation.code,
    trend: profile.conservation.trend,
    assessedYear: profile.conservation.assessedYear,
    criteria: profile.conservation.criteria,
  },
  {
    code: 'LC',
    trend: 'stable',
    assessedYear: 2021,
    criteria: undefined,
  },
);
assert.deepEqual(profile.distribution.realms, ['terrestrial']);
assert.equal(profile.distribution.countries.length, 10);
assert.deepEqual(profile.metrics.elevationM, [0, 3400]);
assert.deepEqual(profile.metrics.estimatedMatureIndividuals, [20000, 49999]);
assert.equal(profile.storySections.length, 6);
assert.ok(profile.keyFacts.length >= 18);
assert.equal(profile.featuredStats.length, 4);
assert.equal(profile.media.gallery.length, 5);
assert.ok(profile.media.focalPoint.x >= 0.6);
assert.ok(profile.sources.length >= 16);
assert.equal(
  new Set(profile.sources.map(({ url }) => url)).size,
  profile.sources.length,
);
assert.ok(
  profile.sources.every(({ accessedAt }) => accessedAt === '2026-09-03'),
);
```

静态资产另做文件存在性、1536 × 1024 源图尺寸、运行时 WebP、sRGB、非透明和 SHA-256 检查。封面必须按上文 36 个视口/动画端点组合验证完整主体；详情图则逐张人工核对物种形态、动物数量、完整边界和禁用元素。
