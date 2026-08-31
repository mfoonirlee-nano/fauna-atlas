# 澳洲肺鱼（*Neoceratodus forsteri*）完整档案研究

- 检索与核验日期：2026-08-31
- 推荐展示中文名：**澳洲肺鱼**
- 推荐展示英文名：**Australian Lungfish**
- 当前接受名：***Neoceratodus forsteri* (Krefft, 1870)**
- 推荐 slug：`australian-lungfish`
- IUCN：**EN 濒危，B2ab(ii,iii)，2019 年评估，种群趋势 stable**
- 澳大利亚 EPBC Act：**VU 易危**
- 昆士兰 Nature Conservation Act：**VU 易危**；Fisheries Act 下为 **no-take species**
- CITES：**附录 II**
- 最新恢复文件：澳大利亚与昆士兰政府共同制定的首份国家恢复计划，**2026-06-10 生效**
- 使用范围：把 `docs/todo.md` 中“澳洲肺鱼 *Neoceratodus forsteri*”落实为完整 `Species` 记录、六段故事、四项 featured stats、1 张封面与 5 张详情图
- 证据标准：名称和仓库分类链采用 Australian Faunal Directory 与 2026 国家恢复计划；全球等级采用 IUCN 2019 正式评估；分布、生态和生活史数字采用政府恢复计划与原始论文

## 1. 可落库结论

Australian Faunal Directory 接受 ***Neoceratodus forsteri* (Krefft, 1870)**。Krefft 在 1870 年以 *Ceratodus forsteri* 描述本种，因此作者和年份在改属后加括号。AFD 与 2026 国家恢复计划采用 Ceratodontidae；IUCN 2019 和 Eschmeyer 分类体系采用 Neoceratodontidae。仓库应跟随澳大利亚当前国家名录，使用 **Ceratodontidae**，并在维护说明中保留这个科级差异。[Australian Faunal Directory](https://biodiversity.org.au/afd/taxa/Neoceratodus_forsteri) [2026 National Recovery Plan](https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf) [IUCN 2019](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T122899816A123382021.en)

IUCN 于 2019-02-13 评估本种，当前正式值为 **Endangered，B2ab(ii,iii)，trend stable**。评估估算 AOO 为 328 平方千米，认为范围严重破碎，AOO 与生境质量持续下降。`stable` 是 IUCN 的种群趋势字段，不会抵消准则中的生境下降，也不能改成 `decreasing`。2026 恢复计划对补充不足和成鱼老化提出更新的风险判断，但它没有替 IUCN 重做全球评估。[IUCN 2019](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T122899816A123382021.en)

2026 国家恢复计划于 2026-06-10 生效。它仍把联邦 EPBC 和昆士兰州状态列为 VU，并列出 EPBC 准则 `A4c; B2(a)(b)(iii)`、昆士兰准则 `B2(a)(b)(ii-v); D2`。Fisheries Act 禁止捕取，CITES 把本种列入附录 II。四套制度的范围和用途不同，产品不能用 EPBC 的 VU 覆盖 IUCN EN，也不能把恢复计划生效年写进 `assessedYear`。[DCCEEW recovery-plan landing page](https://www.dcceew.gov.au/environment/biodiversity/threatened/publications/national-recovery-plan-australian-lungfish) [2026 National Recovery Plan](https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf)

成鱼主要用四对功能性鳃呼吸。单个背侧肺在低氧、活动增强、繁殖和其他压力条件下补充空气。它不筑泥茧，也不夏眠。Kemp 记录了湿水草包裹并定期洒水的个体经 8 周运输后存活，还提到残留湿叶、水草和泥的干涸池中可坚持数月；这些记录要求皮肤和微环境保持湿润。本种在生态上仍依赖永久淡水，不能承受完整干燥或借海水跨流域。[Grigg 1965](https://doi.org/10.1071/ZO9650413) [Kind et al. 2002](https://doi.org/10.1016/S1569-9048(02)00113-1) [Kemp 1986](https://doi.org/10.1002/jmor.1051900413) [2026 National Recovery Plan](https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf)

2026 计划把野外寿命估为 50 至 80 年。Fallon 等从 500 尾鱼取鳞，以其中 85 份作炸弹放射性碳定年，得到 2.5 至 77 岁的样本年龄。雄鱼估计约 15 岁、767 毫米开始成熟，雌鱼约 20 岁、834 毫米开始成熟，两性到 1,000 毫米视为完全成熟。样本最高 77 岁不是物种绝对寿命上限，水族馆个体也不能定义野外典型寿命。[Fallon et al. 2019](https://doi.org/10.1371/journal.pone.0210168) [2026 National Recovery Plan](https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf)

## 2. 名称、分类与种界

### 2.1 名称字段

| 字段 | 建议值 | 边界 |
| --- | --- | --- |
| 中文主名 | 澳洲肺鱼 | 对齐 TODO，短于“澳大利亚肺鱼” |
| 英文主名 | Australian Lungfish | DCCEEW、Australian Museum、Fishes of Australia 使用 |
| 英文别名 | Queensland Lungfish、Burnett River Salmon、Fresh Water Salmon、Ceratodus | AFD 和 Fishes of Australia 收录；`Ceratodus` 是历史俗称，也是旧属名 |
| 第一民族名称 | `theebine`、`dala` | 2026 计划分别标注 Wakka Wakka/Taribelang 与 Kabi Kabi/Butchulla 语境；页面保留来源，不把两个词泛化为全分布区统一名称 |
| 学名 | *Neoceratodus forsteri* | `scientificName` 不带命名人 |
| 完整接受名 | *Neoceratodus forsteri* (Krefft, 1870) | 原组合为 *Ceratodus forsteri* Krefft, 1870 |
| id | `species-neoceratodus-forsteri` | 依学名生成 |
| slug | `australian-lungfish` | 避免与非洲、南美肺鱼混淆 |

`Barramunda` 在历史资料中出现，也容易与 barramundi 混淆。本轮不把它放入默认别名数组。

### 2.2 推荐六级分类

```text
Animalia > Chordata > Sarcopterygii > Ceratodontiformes > Ceratodontidae > Neoceratodus
动物界 > 脊索动物门 > 肉鳍鱼纲 > 角齿鱼目 > 角齿鱼科 > 澳洲肺鱼属
```

AFD、Australian Museum 与 2026 国家恢复计划支持这条仓库链。IUCN 2019 把科写成 Neoceratodontidae，部分现代鱼类目录也采用该名。两套科名代表分类处理差异，不影响物种接受名。页面不要同时创建两个科节点。[Australian Faunal Directory](https://biodiversity.org.au/afd/taxa/Neoceratodus_forsteri) [Australian Museum](https://australian.museum/learn/animals/fishes/australian-lungfish-neoceratodus-forsteri-krefft-1870/) [2026 National Recovery Plan](https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf)

本种是现生唯一 *Neoceratodus*，也是澳大利亚唯一现生肺鱼。肺鱼是四足动物最近的现生鱼类亲缘支系；本种不是人类、两栖类或四足动物的直接祖先，也不应写成“停止演化的缺失环节”。[Meyer et al. 2021](https://doi.org/10.1038/s41586-021-03198-8)

## 3. 保护状态口径

推荐结构化值：

```ts
conservation: conservation('EN', 'stable', 2019, 'B2ab(ii,iii)'),
```

| 系统 | 当前值 | 日期或准则 | 产品处理 |
| --- | --- | --- | --- |
| IUCN Red List | EN | 2019-02-13；B2ab(ii,iii)；trend stable | 写入 `conservation` |
| EPBC Act | VU | A4c; B2(a)(b)(iii) | 写入 tags、description、keyFacts |
| Queensland Nature Conservation Act | VU | B2(a)(b)(ii-v); D2 | 写入 tags 与保护说明 |
| Queensland Fisheries Act | no-take species | 禁止一般捕取 | 写入 keyFacts 与行动 |
| CITES | Appendix II | 国际贸易受许可控制 | 不写成全面贸易禁令 |
| National Recovery Plan | 2026 年生效 | 首份国家恢复计划 | 写入保护行动与更新时间 |

IUCN 的 328 平方千米 AOO 来自 2019 评估，不是 2026 同步分布普查。2026 恢复计划将 Burnett、Mary、Tinana、Brisbane、North Pine、Coomera 作为六个管理单元，并承认若干单元的原生或移殖贡献仍有争议。产品不应把 328 平方千米换算成河流总长度、实际植被面积或成熟个体数。

## 4. 分布与生境

### 4.1 当前分布边界

2026 恢复计划确认本种现存于昆士兰东南部六套沿海水系：Burral Burral（Burnett River）、Moonaboola（Mary River）、Tinana Creek、Maiwar（Brisbane River）、North Pine River 和 Coomera Creek。Burnett、Mary 与 Tinana 有无争议的原生且可维持种群。Brisbane、North Pine 和 Coomera 在 1890 年代接收过移殖个体。[2026 National Recovery Plan](https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf)

Biello 等以线粒体基因组、11 个 STR 和 5,196 个核 SNP 比较历史模型，支持 Brisbane 与 North Pine 仍保留原生基因组分，同时混有历史移殖来源。该结果不能把每条河内的个体按外形分成“原生”和“移殖”两类，也不证明 Coomera 的种群规模。[Biello et al. 2024](https://doi.org/10.1111/mec.17266)

Albert、Condamine、North Stradbroke Island 的 Blue Lake 与 18-Mile Swamp，以及 Logan、Caboolture 流域的一些水库曾接收移殖。2026 计划认为这些地点没有已知现存亚种群，不应继续列入当前结构化范围。

推荐结构化字段：

```ts
distribution: {
  realms: ['freshwater'],
  continents: ['大洋洲'],
  regions: [
    '昆士兰东南部Burnett、Mary与Tinana水系',
    'Brisbane与North Pine水系',
    'Coomera水系',
  ],
  countries: ['澳大利亚'],
  endemicTo: ['澳大利亚昆士兰州东南部'],
  range:
    '现存管理单元限于昆士兰东南部六套沿海水系：Burnett、Mary、Tinana、Brisbane、North Pine和Coomera。Burnett、Mary与Tinana为确认原生种群；Brisbane和North Pine保留原生与历史移殖的混合遗传信号，Coomera也曾接收移殖个体。',
  center: { lat: -26.5, lng: 152.4 },
},
```

`center` 只打开昆士兰东南部视图，不代表繁殖床、种群中心或公开监测坐标。

### 4.2 生境结构

- **深而阴蔽的永久水潭**：成鱼白天常在超过 1.5 米的深潭休息，利用沉木、巨石、下切河岸、岸边阴影和水草获得遮蔽。
- **浅水急流、缓流段和水草床**：觅食、繁殖与幼鱼庇护常重叠。典型产卵带水深约 20 至 60 厘米，短水草低于 5 厘米，覆盖率约 75% 至 90%。
- **相连的河道、支流与季节性浅滩**：成鱼在未强烈调节的河段常对 1 至 1.5 千米长的家域潭保持忠诚，也会随流量事件跨潭移动。人工障碍切断这种连接。
- **水库与堰池**：成鱼可以生活和觅食，水位波动、深陡岸和稀少水草却让多数水库难以支持卵和幼鱼。占用不等于成功补充。

本种只能完成淡水生活史，不能借咸水在沿海河流间迁移。低流量和短暂无流是自然水文的一部分；永久深潭、地下水补给和河道连接决定旱期能否留下湿润避难所。[Espinoza et al. 2013](https://doi.org/10.1002/rra.2607) [2026 National Recovery Plan](https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf)

## 5. 外形与测量

成鱼身体粗长，背部及体侧为褐色至橄榄色，腹面白色至鲑粉色。大而厚的圆鳞彼此重叠。头部宽而扁，眼小，口裂小且位于前端偏下。口腔上、下颌各有带放射脊的厚重齿板，可压碎螺、双壳类和甲壳类。[Fishes of Australia](https://fishesofaustralia.net.au/home/species/1988) [2026 National Recovery Plan](https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf)

胸鳍和腹鳍粗厚、肉质、呈桨状。背鳍从背部中段开始，与尾鳍和臀鳍连成一条连续的中鳍。它没有四足动物式脚趾，也不靠偶鳍在陆地行走。四对功能性鳃位于肉质鳃盖之下。吻部和头部有成簇感觉孔，外观不能显示其电感受功能。[Australian Museum](https://australian.museum/learn/animals/fishes/australian-lungfish-neoceratodus-forsteri-krefft-1870/) [Watt et al. 1999](https://doi.org/10.1006/anbe.1999.1216)

2026 恢复计划给出约 1,700 毫米、48 千克的上限，并注明这种大个体已少见。旧政府科普常用 1.5 米、40 千克，二者是不同年代的展示上限，不宜拼成普通成体范围。

```ts
measurements: {
  length: {
    max: 170,
    unit: 'cm',
    note: '2026国家恢复计划的约数上限；如此大的个体已少见，不是典型成体长度。',
  },
  weight: {
    max: 48,
    unit: 'kg',
    note: '2026国家恢复计划的约数上限；不是普通成体体重。',
  },
},
metrics: {
  lifespanYears: [50, 80],
},
```

`adultLengthCm` 与 `adultMassKg` 留空。当前权威资料给出极值、地点均值和性成熟长度，没有全物种成体最小至最大包络。

## 6. 单肺、空气呼吸与旱期限制

澳洲肺鱼只有一个背侧肺，肺内分成两个相连的长叶。它仍是单肺，不应画成左右一对。成鱼在含氧良好水中以鳃呼吸为主。Grigg 的野外与实验研究显示，夜间活动增加时浮头次数上升；强迫活动而不能浮头的鱼耗氧量降低，说明肺为高活动提供额外氧。[Grigg 1965](https://doi.org/10.1071/ZO9650413)

Kind、Grigg 与 Booth 在 20 摄氏度下让鱼经历 14 至 22 天的中度或重度低氧。他们在各 72 小时观察窗内记录到正常含氧组 6 次、中度低氧组 27 次、重度低氧组 47 次空气呼吸；鱼还通过增加鳃通气和提高血红蛋白氧亲和力应对低氧。数字只适用于该实验设计，不能转成固定日呼吸次数。[Kind et al. 2002](https://doi.org/10.1016/S1569-9048(02)00113-1)

旱期文案应同时保留四条边界：

1. 本种不夏眠，不筑黏液茧，不把身体埋进硬化干泥。
2. 它属于永久淡水鱼，完整干燥会致死。
3. 湿水草包裹、定期洒水的历史运输持续 8 周；残存湿叶、水草和泥的干涸池记录可达数月。
4. “潮湿微环境中撑过断流”不能写成“离水数月”或“能在陆地生活”。

Australian Museum 的“离水不超过数日”描述适用于普通离水暴露；Kemp 的长时记录依赖持续湿润材料。产品用“不能承受完整干燥”统摄两类情景，不设置离水寿命数值。[Kemp 1986](https://doi.org/10.1002/jmor.1051900413) [Australian Museum](https://australian.museum/learn/animals/fishes/australian-lungfish-neoceratodus-forsteri-krefft-1870/)

## 7. 食性、感官与活动

成鱼以甲壳类、腹足类和双壳类为主要食物，也吃昆虫幼虫、蠕虫、蝌蚪和小鱼。幼体取食小型甲壳类及水生蠕虫。肠道中虽有丝状藻、水草、果实和种荚，Kemp 的消化证据认为这些植物材料没有被消化，因此推荐 `diet.types: ['carnivore']`，不填 `omnivore`。[Tao et al. 2020](https://doi.org/10.1007/s00027-019-0680-x) [2026 National Recovery Plan](https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf)

Watt 等把活螯虾藏在基质下，隔绝化学、机械和视觉线索但允许生物电场通过。肺鱼对未屏蔽活虾作出准确、持续的觅食动作；屏蔽电信号、死虾或空室让动作准确率和频率下降。实验支持用被动电感受寻找隐藏活猎物，不支持发电、电击猎物或可见“电波”。[Watt et al. 1999](https://doi.org/10.1006/anbe.1999.1216)

推荐 `activity`：

```ts
activity: [
  '以夜间活动为主，傍晚离开白天使用的沉木、巨石或水草庇护点觅食',
  '用头部感觉孔接收活猎物的微弱电场，并用厚重齿板压碎带壳猎物',
  '在含氧良好水中主要用鳃呼吸，低氧、活动增强或繁殖时浮到水面吞气',
  '在自然河段对约1至1.5千米长的家域潭保持较强忠诚，也会随流量事件移动',
  '用肉质偶鳍支撑和调整水下姿态，不能靠它们在陆地行走',
],
```

## 8. 繁殖、发育、成熟与寿命

核心产卵期为 8 至 11 月，完整记录窗口可从 7 月延伸到翌年 1 月。水温约 18 至 28 摄氏度、日长连续增加、低流量脉冲和短而密的沉水植物共同提供产卵条件。月份不是固定开关，河流流量和水草状态决定每年的机会。[Espinoza et al. 2013](https://doi.org/10.1002/rra.2607) [2026 National Recovery Plan](https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf)

繁殖多在夜间。成鱼可成对或形成一雌多雄的小群反复绕游。雌鱼每次多产 50 至 100 枚卵，卵直径约 3 毫米，多数单枚黏在水草上，偶有成对，成团少见。雄鱼在卵排出时受精。本种不筑巢，也没有护卵或育幼行为。[Kemp 1984](https://www.museum.qld.gov.au/assets/media/project/qm/qm-website/collections-and-research/memoirs/nature-memoirs/nature-volume-21/mqm-n21-2-7-kemp.pdf) [2026 National Recovery Plan](https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf)

胚胎期约 23 至 30 天。初孵幼体避光并静伏，2 至 3 周后开始摄食，从产卵到自由游动可超过 50 天。幼体在密水草中停留约 8 个月，体长达到至少 100 毫米后才可能转入沉木或下切河岸。2025 种群模型估计，即使条件合适，约每 500 枚卵只有 1 枚对应的后代活过第一年；这是模型化存活率，不是每窝固定结局。[Todd et al. 2025](https://doi.org/10.3390/fishes10010022) [2026 National Recovery Plan](https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf)

雄鱼估计约 15 岁成熟，雌鱼约 20 岁；野外寿命估计 50 至 80 年。Burnett 模型给出约 46.24 年世代长度。不同河流、生长条件和性别会改变体长与年龄关系，不能凭照片估龄或辨别雌雄。[Fallon et al. 2019](https://doi.org/10.1371/journal.pone.0210168) [Todd et al. 2025](https://doi.org/10.3390/fishes10010022)

## 9. 威胁与保护行动

### 9.1 主要威胁

- 水坝、堰和闸坝把流动河段变成深水水库，阻断成鱼移动与基因交流，并减少短水草产卵带。
- 水位骤升、骤降和不合季节的放水会淹没、暴露或冲刷水草、卵和幼体；大坝溢流及浅水消力池还会伤害过坝成鱼。
- 干旱让河道断流并把鱼困在孤立深潭；洪水冲走水草根系、种源和无脊椎猎物，恢复常需数年。卵在超过 30 摄氏度时死亡率上升。
- 清岸、牲畜踩踏、采砂、移除沉木、侵蚀和营养盐输入降低水质，泥沙会覆盖产卵水草和卵。
- 水葫芦、槐叶萍和 Cabomba 等外来水草改变光照、氧气和植被结构；tilapia、gambusia 与放流捕食鱼的影响强度仍需量化。
- 休闲垂钓误捕、非法捕取、船击和水草商业采收增加成鱼死亡或破坏繁殖床。
- 极低遗传多样性、约 46 年世代长度和低幼体存活率让成年种群可在多年补充失败后才显出下降。

### 9.2 2026 恢复计划行动

1. 识别并绘制产卵床、幼体补充区、深潭避难所和原生水草床，保护并恢复退化地点。
2. 用环境流量维持冬春低流脉冲、水草和河道连接，避免在胚胎与幼体期骤升骤降。
3. 移除冗余障碍，改造并维护适合大型成鱼的鱼道，建立溢流、搁浅和救援规程。
4. 控制外来鱼与外来水草，量化它们对卵、幼体、食物和水草床的影响。
5. 通过河岸复植、稳岸、沉木和支流水草床提高抗旱、抗洪和降温能力。
6. 在六个流域建立长期、同方法监测，把 eDNA、年龄结构、丰度、健康、遗传和生境指标组合起来。
7. 保持 no-take 地位，研究垂钓放流与船击死亡，并让第一民族组织、土地所有者和社区参与管理。

一次 eDNA 阳性只能证明水样中检出目标 DNA，不能确定个体数、繁殖、来源或趋势。一次成鱼计数也会被长寿和低补充掩盖，监测需要覆盖幼鱼、年龄结构与水草状态。[2026 National Recovery Plan](https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf)

## 10. 六段故事建议

1. **一个现生种，两套科名**：从 1870 年原组合讲到 AFD 的 Ceratodontidae 与 IUCN 的 Neoceratodontidae，解释分类更新不等于出现两个物种。
2. **单肺是活动与低氧时的备用氧路**：鳃负责常态呼吸，肺在低氧和活动增强时加入；把“肺鱼”与“必须呼吸空气”分开。
3. **湿润避难不等于夏眠**：8 周湿水草运输和湿泥微环境记录显示耐受力，永久淡水、无泥茧和不能完整干燥划出上限。
4. **齿板下面还有电感受**：厚齿板压碎螺贝，头部壶腹器官让鱼在浑水和夜色中定位埋藏活猎物。
5. **三毫米卵需要整条河的配合**：日长、低流脉冲、18 至 28 摄氏度和短密水草共同决定单枚黏性卵能否进入幼体阶段。
6. **长寿成鱼会遮住补充债务**：50 至 80 年寿命让成鱼在水坝改变河流后继续出现；年龄结构、幼鱼和水草床比一时成鱼数量更早显示风险。

## 11. 关键事实候选

- 当前接受名为 *Neoceratodus forsteri* (Krefft, 1870)，原组合是 *Ceratodus forsteri*。
- 仓库分类链采用 AFD 和 2026 国家恢复计划的 Ceratodontidae；IUCN 使用 Neoceratodontidae。
- IUCN 当前为 EN、B2ab(ii,iii)、2019 年评估、趋势 stable。
- EPBC 与昆士兰州都列 VU，昆士兰渔业法规把它列为 no-take species。
- 2026-06-10 生效的文件是本种首份国家恢复计划。
- 现存管理单元覆盖 Burnett、Mary、Tinana、Brisbane、North Pine 和 Coomera 六套水系。
- 最大约 1.7 米和 48 千克；如此大的个体已少见。
- 一个背侧肺辅助四对功能性鳃；本种在含氧良好水中主要用鳃。
- 它不夏眠、不筑泥茧，生态上依赖永久淡水；湿润材料可延长断流存活，完整干燥仍会致死。
- 成鱼主要吃甲壳类、腹足类和双壳类，齿板负责压碎硬壳。
- 实验显示它能借活猎物的微弱电场寻找埋藏螯虾，但它不会放电击晕猎物。
- 雌鱼每次多产 50 至 100 枚、约 3 毫米的黏性卵，多数单枚附在水草上，不筑巢也不护幼。
- 胚胎期约 23 至 30 天；幼体依赖密水草，达到至少 100 毫米后才可能转移庇护物。
- 雄鱼约 15 岁、雌鱼约 20 岁成熟；野外寿命估计 50 至 80 年，定年样本最高 77 岁。
- Burnett 模型世代长度约 46.24 年，不能外推成六流域固定值。
- 长寿成鱼可以掩盖多年补充失败，当前没有可靠的全物种成熟个体总数。

## 12. 四项 featured stats 建议

| `key` | label | value | unit | note |
| --- | --- | --- | --- | --- |
| `maximum-length` | 记录体长上限 | 约 1.7 | 米 | 2026 国家恢复计划约数；如此大的个体已少见，不是普通成体长度 |
| `wild-lifespan` | 估计野外寿命 | 50–80 | 年 | 政府综合口径；放射性碳定年样本为 2.5–77 岁，不是绝对寿命上下限 |
| `sex-specific-maturity` | 估计性成熟 | 雄约 15／雌约 20 | 岁 | 来自成熟体长与生长估算；个体和河流条件会改变年龄关系 |
| `embryonic-period` | 胚胎期 | 23–30 | 天 | 从受精卵到孵化的观察范围，不等于达到自由游动或独立存活的时间 |

`IUCN AOO 328 km²`、`每 500 枚卵约 1 个后代活过第一年` 和 `46.24 年世代长度` 放入正文。前者属于旧评估范围指标，后两者来自模型，均不适合脱离注释成为首页大数字。

## 13. exactly six image specs

最终采用的六张图由 OpenAI 内置 imagegen 在 2026-08-31 按以下六条提示词无参考图生成。最终审阅另做了一次精确编辑和一次全新替代生成，两个输出都因吻端露出范围没有改善而未采用，调用路径与决定记录在图像资产 README。项目保留 1536 × 1024、3:2 横图、opaque sRGB PNG 源文件，并按同名去掉 -source 后缀生成运行时 WebP。六张图不得出现文字、箭头、比例尺、logo、水印、边框或拼贴。

### 1. 01-permanent-river-pool-adult-cover.webp

**Scene**：一尾完整成鱼位于永久河潭中右侧，面向左侧，左侧保留平静水体。沉木、巨石、砂砾和短水草交代昆士兰东南部淡水环境；页面焦点建议 { x: 0.58, y: 0.58 }。

**Prompt**：

~~~text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Australian Lungfish species-profile cover.
Primary request: Create an original species-profile cover at exactly 1536 × 1024, horizontal 3:2, opaque single-frame sRGB. Show exactly one complete adult Australian lungfish (Neoceratodus forsteri) resting just above the bed of a generalized permanent freshwater river pool in south-eastern Queensland. Use a low underwater three-quarter view. Place the fish at centre-right facing left and leave broad open water on the left for interface copy.
Scene/backdrop: Subdued green-brown freshwater with fine suspended particles, a sand-gravel-cobble bed, one submerged weathered log, one boulder and patches of short submerged macrophytes.
Subject: A stout elongated fish with a broad flattened conical head, one small dark eye, a small closed terminal mouth, large thick overlapping scales, olive-brown back and sides with muted darker blotches, pale cream-to-salmon underside, and strong fleshy leaf-shaped paired fins with narrow bases. The low dorsal fin begins near the middle of the back and continues around one long pointed tail into the anal fin as one continuous median fin margin, without a separate forked caudal fin.
Style/medium: Photorealistic museum-quality natural-history editorial photography.
Composition/framing: Keep the whole fish and every visible fin inside frame; centre-right subject; broad calm negative water on the left.
Lighting/mood: Filtered natural daylight, restrained and scientifically grounded.
Constraints: Exact 1536 × 1024; horizontal 3:2; opaque single-frame sRGB; exactly one animal; no text, logo, watermark, border or collage.
Avoid: second fish, eel body, thread-like paired fins, legs, toes, external gills, barbels, exposed gill slits, forked tail, separate dorsal and caudal fins, coelacanth three-part tail, coral, marine shell, aquarium wall, diver, fishing gear, oversaturation, CGI.
~~~

**Caption**：宽扁头、大型重叠鳞、肉质叶形偶鳍和连续中鳍组成成鱼的可见特征；画面不能确定性别、年龄、体长或流域。

**Acceptance**：

- 恰好一尾完整成鱼，吻端、偶鳍和尾端均留在画面内。
- 左侧保留水体负空间，背景仍能辨认永久淡水河潭。
- 鱼体不呈鳗形，尾部不分叉，也不出现外鳃、脚趾、须或腔棘鱼式三叶尾。

### 2. 02-leaf-shaped-fins-diagnostic-profile.webp

**Scene**：一尾完整成鱼在浅色砂砾底上呈左向侧面，近侧胸鳍和腹鳍分开可读，低背鳍绕过尖尾连接臀鳍；页面焦点建议 { x: 0.50, y: 0.54 }。

**Prompt**：

~~~text
Use case: scientific-educational with photorealistic underwater rendering.
Asset type: Fauna Atlas Australian Lungfish diagnostic gallery image.
Primary request: Create an original external-morphology field still at exactly 1536 × 1024, horizontal 3:2, opaque single-frame sRGB. Show exactly one complete adult Australian lungfish (Neoceratodus forsteri) in a clean left-facing lateral profile over a plain pale sand-and-fine-gravel freshwater bottom.
Subject: A heavy elongated trunk, broad flattened conical head, small eye, small closed mouth, one smooth fleshy gill cover, large overlapping scales, olive-brown dorsal coloration and pale cream-to-salmon lower surface. Show one near-side pectoral fin and one near-side pelvic fin as strong fleshy leaf-shaped paddles that taper to narrow attachment points; let far-side partners appear only where perspective permits. Place the pelvic fin well behind the pectoral fin. The low dorsal fin begins around mid-back and remains continuous around the long pointed tail into the anal fin.
Style/medium: Photorealistic museum-quality natural-history photography, scientifically restrained.
Composition/framing: Exact horizontal 3:2; generous margin around snout, fins and tail; full animal in strict lateral profile.
Constraints: Exact 1536 × 1024; opaque single-frame sRGB; exactly one complete animal; no labels, arrows, ruler, text, logo, watermark, border or collage.
Avoid: specimen tray, exposed skeleton, cutaway, open toothed mouth, thread-like fins, fin filaments, limb joints, digits, external gills, shark gill slits, separate dorsal fins, forked tail, round fan tail, coelacanth three-lobed tail, extra fins, duplicated anatomy, aquarium, marine habitat, CGI.
~~~

**Caption**：叶形胸鳍、腹鳍和绕过尖尾的连续中鳍帮助识别本种；透视遮挡不能支持精确鳍数或比例测量。

**Acceptance**：

- 恰好一尾完整成鱼，轮廓和近侧两枚偶鳍清楚。
- 胸鳍与腹鳍具有肉质叶片和较窄附着部，没有丝状鳍条或肢端手指。
- 画面没有标签、剖面、标本盘、比例尺或海洋生境。

### 3. 03-facultative-surface-air-breath.webp

**Scene**：黄昏的永久河潭里，一尾完整成鱼斜向水面，吻端轻微浮出并形成一圈波纹，身体和尾部留在水下；页面焦点建议 { x: 0.55, y: 0.46 }。

**Prompt**：

~~~text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Australian Lungfish respiration gallery image.
Primary request: Create an original respiration-behaviour still at exactly 1536 × 1024, horizontal 3:2, opaque single-frame sRGB. Show exactly one complete Australian lungfish (Neoceratodus forsteri) rising through a permanent freshwater pool at dusk. Use an underwater side three-quarter camera with the calm air-water boundary across the upper fifth of the frame.
Subject/action: Angle the fish upward so its small mouth alone reaches the air-water interface and forms one modest ring of surface ripples. Keep the head, trunk, paired fins and complete pointed tail below water and inside frame. Preserve a stout olive-brown scaled body, pale underside, broad flattened head, small eye, strong leaf-shaped fleshy paired fins, and one low median fin that starts at mid-back and continues around the pointed tail into the anal edge.
Scene/backdrop: Natural permanent freshwater river pool, muted underwater plants and bank shadows, calm surface.
Style/medium: Photorealistic natural-history field photography.
Composition/framing: Full animal visible beneath surface; calm water-air boundary; no dramatic splash or bubble cloud.
Constraints: Exact 1536 × 1024; horizontal 3:2; opaque single-frame sRGB; exactly one animal; no text, logo, watermark, border or collage.
Avoid: fish on land, exposed body on mud, mud chamber, cocoon, drought crack, walking posture, paired human-like lungs, transparent torso, blowhole, nostril jet, gaping jaw, visible gas stream, glowing oxygen, external gills, thread-like fins, forked tail, second animal, aquarium, CGI.
~~~

**Caption**：澳洲肺鱼在含氧良好的水中主要用鳃，低氧或活动增强时增加空气呼吸；这张静帧只记录吻端浮到水面的情景，不能确认嘴部开合、是否完成吞气、呼吸频率或水中氧浓度。

**Acceptance**：

- 吻端短暂浮出水面，其余身体没有离水、搁浅或陷入干泥。
- 水面只出现轻微波纹，不出现喷气孔、水柱、发光氧气或夸张气泡。
- 恰好一尾完整成鱼，尾端和肉质偶鳍留在水下并可见。

### 4. 04-nocturnal-snail-foraging-encounter.webp

**Scene**：夜间河床上，一尾完整成鱼靠近一只停在卵石上的完整淡水螺，闭口与猎物之间保留清楚水隙；页面焦点建议 { x: 0.55, y: 0.58 }。

**Prompt**：

~~~text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Australian Lungfish feeding-ecology gallery image.
Primary request: Create an original feeding-ecology still at exactly 1536 × 1024, horizontal 3:2, opaque single-frame sRGB. Show exactly one complete Australian lungfish (Neoceratodus forsteri) moving close to the bed of a permanent freshwater river pool at night and exactly one small intact freshwater snail on a cobble ahead of it. Keep one visible water gap between the closed mouth and the snail.
Subject: Stout olive-brown scaled body, pale lower surface, broad flattened head, small eye, small closed mouth, strong leaf-shaped fleshy paired fins, and one low continuous median fin around a long pointed tail.
Scene/backdrop: Sparse short macrophytes, gravel, cobble and a submerged branch in dim blue-green freshwater. A restrained field-light effect comes from outside frame.
Style/medium: Photorealistic museum-quality natural-history editorial photography.
Composition/framing: Keep the fish and snail complete; the snail is small but readable; no contact between them.
Constraints: Exact 1536 × 1024; horizontal 3:2; opaque single-frame sRGB; exactly one fish and exactly one freshwater snail; no text, logo, watermark, border or collage.
Avoid: contact, bite, swallowed prey, broken shell, blood, carcass, extra prey, frog, fish school, marine snail, coral, visible electric field, lightning, glow, sensory rays, open toothy jaw, herbivory scene, person, gear, aquarium, CGI.
~~~

**Caption**：成鱼在夜间寻找螺类等底栖猎物，也能感受活猎物的微弱电场；图中距离不能证明发现、捕获或食物比例。

**Acceptance**：

- 画面恰好有一尾肺鱼和一只小型完整淡水螺。
- 鱼闭口，螺壳完整，二者之间留有水隙。
- 不出现电弧、发光感官线、咬合、碎壳、额外猎物或海洋背景。

### 5. 05-single-adhesive-egg-macrophyte.webp

**Scene**：浅水缓流的短水草床中，一枚带透明黏性包膜的琥珀色卵附在一片叶上，背景只有植物；页面焦点建议 { x: 0.50, y: 0.50 }。

**Prompt**：

~~~text
Use case: scientific-educational with photorealistic macro rendering.
Asset type: Fauna Atlas Australian Lungfish early-life-history gallery image.
Primary request: Create an original early-life-history macro still at exactly 1536 × 1024, horizontal 3:2, opaque single-frame sRGB. Show exactly one very small Australian lungfish egg attached by a clear adhesive envelope to one short submerged macrophyte leaf in shallow flowing freshwater.
Subject: One small yolk-rich amber sphere inside a delicate transparent jelly envelope. Keep its attachment point, the leaf surface and nearby fine plant texture in focus. Keep the egg small relative to the plant rather than marble-sized.
Scene/backdrop: A dense bed of short submerged native plants fading into the background under low-turbidity water with a mild current.
Style/medium: Photorealistic scientific macro natural-history reconstruction, restrained and plausible.
Composition/framing: Close macro with the single egg and attachment point sharp; underwater plant habitat remains readable.
Constraints: Exact 1536 × 1024; horizontal 3:2; opaque single-frame sRGB; exactly one egg; zero animals; no text, logo, watermark, border or collage.
Avoid: egg pair, egg mass, frogspawn string, nest, burrow, gravel clutch, parental fish, guarding behaviour, salamander larva, external gills, developed miniature adult, fungus, rot, stagnant algal slime, ruler, label, arrow, giant glass marble, CGI.
~~~

**Caption**：澳洲肺鱼多把约 3 毫米黏性卵单枚附在短密水草上，不筑巢，也不护卵；图像没有比例尺，不能据像素测量卵径或判断胚胎阶段。

**Acceptance**：

- 恰好一枚卵，透明包膜与叶片附着点清楚。
- 画面没有第二枚卵、卵团、成鱼、幼体、巢或守护行为。
- 卵相对水草保持小尺度，不呈蛙卵串或玻璃弹珠。

### 6. 06-river-water-edna-monitoring.webp

**Scene**：一名生态工作者站在昆士兰东南部河岸，用短采样杆上的一只无菌瓶接触水面，水中没有可见动物；页面焦点建议 { x: 0.55, y: 0.56 }。

**Prompt**：

~~~text
Use case: photorealistic conservation fieldwork.
Asset type: Fauna Atlas Australian Lungfish monitoring gallery image.
Primary request: Create an original monitoring still at exactly 1536 × 1024, horizontal 3:2, opaque single-frame sRGB. Show exactly one adult field ecologist on a shaded south-eastern Queensland freshwater riverbank collecting exactly one water sample with a plain sterile bottle mounted on a clean short sampling pole. Keep the worker on the bank and the bottle at the water surface.
Scene/backdrop: A permanent river margin with visible submerged macrophyte beds, one partly submerged log, an undercut vegetated bank and calm green-brown water. Include one closed plain equipment case on dry ground.
Subject/action: One field ecologist in ordinary muted field clothing and nitrile gloves, using unbranded equipment. All labels and screens remain blank.
Style/medium: Photorealistic conservation field photography, natural overcast light.
Composition/framing: Environmental wide-medium view; sampling gesture and river habitat both readable.
Constraints: Exact 1536 × 1024; horizontal 3:2; opaque single-frame sRGB; exactly one person; zero fish and zero other animals; exactly one sample bottle; no text, logo, watermark, border or collage.
Avoid: captured or handled lungfish, fish silhouette, net, electrofishing unit, hook, trap, bait, tag, syringe, blood, boat, dam, laboratory bench, oversized glassware, glowing DNA helix, readable data, institution mark, extra people, CGI.
~~~

**Caption**：恢复监测可把河水 eDNA 与年龄结构、丰度和水草状态结合；一瓶水样不能确定个体数、繁殖、来源或趋势。

**Acceptance**：

- 恰好一名工作人员和一只采样瓶，人物留在岸上。
- 画面有永久河岸、水草、沉木和封闭设备箱，没有鱼或其他动物。
- 不出现网具、电捕设备、钩、标签、船、坝体、实验室或可读机构信息。

六张源 PNG 与六张运行时 WebP 的静态检查结果均为 1536 × 1024、sRGB、opaque、single-frame。全分辨率目视检查确认了每张图的对象数量、完整轮廓和禁区内容；运行时 WebP 保持相同画面和 basename。

## 14. 应删除或避免的说法

- “IUCN 趋势下降”。当前结构化趋势是 stable；下降项是 AOO 与生境质量。
- “2026 年重新评估为 EN”。EN 来自 2019 IUCN，2026 文件是国家恢复计划。
- “国家和昆士兰都列 EN”。两套法定名录当前均为 VU。
- “它必须定时到水面呼吸”。本种以鳃为主，空气呼吸随氧气和活动改变。
- “它能钻进泥里夏眠数月”。本种不夏眠、不筑茧，长时存活依赖湿叶、水草或泥仍保持潮湿。
- “它能离水生活几个月”。Kemp 的记录不是干燥陆地暴露。
- “肺分成两叶，所以有两个肺”。它只有一个肺，内部有相连分隔。
- “澳洲肺鱼是四足动物的直接祖先或缺失环节”。它是现生近亲支系。
- “植物材料证明它是杂食动物”。2026 计划引用的消化研究认为植物材料未被消化。
- “水库为它创造了更多好生境”。成鱼可占用水库，多数水库不支持成功胚胎和幼体补充。
- “雌鱼一次产成团的数千枚卵”。常见是 50 至 100 枚、约 3 毫米、分散单枚黏附。
- “成鱼护巢或口孵”。本种不筑巢，也无亲代照料。
- “1.7 米、48 千克是典型成体”。它们是少见约数上限。
- “看到很多成鱼说明种群安全”。长寿可让补充失败延迟显现。
- “一次 eDNA 阳性证明某处有稳定繁殖种群”。单次检出不提供数量、生命阶段或趋势。

## 15. 完整 source 元数据

以下 URL 均为唯一 HTTPS 地址，覆盖 `taxonomy`、`conservation`、`distribution`、`ecology` 和 `general` 五种 `SourceKind`。

```ts
const AUSTRALIAN_LUNGFISH_SOURCE_DATE = '2026-08-31' as const;

const AUSTRALIAN_LUNGFISH_SOURCES = [
  {
    title: 'Australian Faunal Directory: Neoceratodus forsteri',
    url: 'https://biodiversity.org.au/afd/taxa/Neoceratodus_forsteri',
    kind: 'taxonomy',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List 2019: Neoceratodus forsteri, EN B2ab(ii,iii)',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T122899816A123382021.en',
    kind: 'conservation',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'DCCEEW 2026: National Recovery Plan for the Australian Lungfish',
    url: 'https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf',
    kind: 'conservation',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'DCCEEW: National Recovery Plan landing page and commencement date',
    url: 'https://www.dcceew.gov.au/environment/biodiversity/threatened/publications/national-recovery-plan-australian-lungfish',
    kind: 'conservation',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'DCCEEW: EPBC listing advice for Neoceratodus forsteri',
    url: 'https://www.dcceew.gov.au/environment/biodiversity/threatened/conservation-advices/neoceratodus-forsteri',
    kind: 'conservation',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Biello et al. 2024: Endemic versus translocated Australian lungfish populations',
    url: 'https://doi.org/10.1111/mec.17266',
    kind: 'distribution',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Hughes et al. 2015: Low diversity and distinct population structure',
    url: 'https://doi.org/10.1371/journal.pone.0121858',
    kind: 'distribution',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Grigg 1965: Aerial respiration in relation to habits',
    url: 'https://doi.org/10.1071/ZO9650413',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Kind, Grigg and Booth 2002: Responses to prolonged aquatic hypoxia',
    url: 'https://doi.org/10.1016/S1569-9048(02)00113-1',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Kemp 1986: The biology of the Australian lungfish',
    url: 'https://doi.org/10.1002/jmor.1051900413',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Kemp 1984: Spawning of the Australian lungfish in the Brisbane River',
    url: 'https://www.museum.qld.gov.au/assets/media/project/qm/qm-website/collections-and-research/memoirs/nature-memoirs/nature-volume-21/mqm-n21-2-7-kemp.pdf',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Espinoza, Marshall and McDougall 2013: A pulse for life',
    url: 'https://doi.org/10.1002/rra.2607',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Fallon et al. 2019: Age structure of the Australian lungfish',
    url: 'https://doi.org/10.1371/journal.pone.0210168',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Watt, Evans and Joss 1999: Electroreception during foraging',
    url: 'https://doi.org/10.1006/anbe.1999.1216',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Tao et al. 2020: Food sources, fatty acids and stable isotopes',
    url: 'https://doi.org/10.1007/s00027-019-0680-x',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Todd et al. 2025: Australian lungfish metapopulation model',
    url: 'https://doi.org/10.3390/fishes10010022',
    kind: 'ecology',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Meyer et al. 2021: Giant lungfish genome and tetrapod evolution',
    url: 'https://doi.org/10.1038/s41586-021-03198-8',
    kind: 'taxonomy',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Fishes of Australia: Neoceratodus forsteri',
    url: 'https://fishesofaustralia.net.au/home/species/1988',
    kind: 'general',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
  {
    title: 'Australian Museum: Australian Lungfish',
    url: 'https://australian.museum/learn/animals/fishes/australian-lungfish-neoceratodus-forsteri-krefft-1870/',
    kind: 'general',
    accessedAt: AUSTRALIAN_LUNGFISH_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 16. 实现验收清单

- `conservation` 精确为 `EN / stable / 2019 / B2ab(ii,iii)`。
- EPBC VU、Queensland VU、no-take、CITES II 与 2026 恢复计划只作并列制度说明。
- 分类链使用 Ceratodontidae，并在事实卡保留 IUCN 的 Neoceratodontidae 差异。
- 当前范围只列六个 2026 管理单元；历史移殖失败地点不进入 `countries` 或当前 `regions`。
- `measurements` 只保存约数上限；`metrics` 只填 `[50, 80]` 寿命，不构造成体体长或体重范围。
- `diet.types` 使用 `carnivore`，不因未消化植物材料填 `omnivore`。
- 六段故事、四项 featured stats、六幅图像规格数量固定。
- 六幅图均为淡水场景；不出现夏眠泥茧、陆行、发电、巢、护幼或成团卵。
- 来源 URL 无重复、全为 HTTPS，五种 `SourceKind` 都有覆盖。
- 页面明确说明一次 eDNA、成鱼计数或图像不能确定数量、繁殖与长期趋势。
