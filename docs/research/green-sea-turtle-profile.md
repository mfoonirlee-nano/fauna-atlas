# 绿海龟（*Chelonia mydas*）完整档案研究

- 检索与核验日期：2026-08-21
- 推荐展示中文名：**绿海龟**
- 推荐展示英文名：**Green Turtle**
- 接受学名：***Chelonia mydas* (Linnaeus, 1758)**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图规定科学边界
- 分类口径：The Reptile Database 当前接受名；不把东太平洋“black turtle”另立为本项目物种或亚种
- 保护口径：IUCN 2025 全球评估与 11 个区域管理单元（RMU）并列；美国 ESA 的 DPS 只作为法律背景
- 时间口径：本文所称“当前”截至 **2026-08-21**；当前全球评估年份是 **2025**，不能因 Red List/API 在 2026 年发布数据库版本而把 `assessedYear` 写成 2026

## 结论摘要

### 名称与分类

The Reptile Database 当前接受 ***Chelonia mydas* (Linnaeus, 1758)**，归入动物界—脊索动物门—爬行纲—龟鳖目—海龟科—绿海龟属；原始组合为 *Testudo mydas*。数据库虽保留 *Chelonia agassizii*、*C. mydas agassizii* 等历史异名，也明确指出近年的作者通常不再承认亚种。因此，东太平洋常称“black turtle”的深色型应在本档案内说明地域变异，不能另建一个未经当前分类口径支持的亚种对象。[The Reptile Database](https://reptile-database.reptarium.cz/Chelonia/mydas)

大陆官方名录与 The Reptile Database 的中文名都是“绿海龟”；“绿蠵龟”和“青海龟”可作为中文检索别名。“Green Turtle”是 NOAA 与 IUCN 当前常用英文名，“Green Sea Turtle”是常见同义英文俗名。名称里的“绿”来自皮下脂肪常呈绿色，而不是背甲必须为绿色；NOAA 还提醒，过去把绿色脂肪完全归因于食草饮食并不稳妥，因为其他海龟也可能有绿色脂肪。[国家重点保护野生动物名录](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/green-turtle)

推荐名称字段：

```ts
names: {
  zh: '绿海龟',
  en: 'Green Turtle',
  aliases: ['绿蠵龟', '青海龟'],
}
```

### IUCN 当前全球字段：LC、increasing、2025、无 criteria code

截至检索日，IUCN-SSC Marine Turtle Specialist Group（MTSG）列出的当前全球状态是 **Least Concern（LC，无危，2025）**。IUCN 2025 年 10 月 10 日发布的全球更新明确将绿海龟从 Endangered 调整为 Least Concern，并报告全球趋势为恢复/上升。LC 没有触发受胁等级阈值的标准代码，因此 `criteria` 应省略，不能写成 `LC`、旧标准 `A2bd` 或空字符串。[IUCN 2025 assessment](https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T4615A285108125.en) [IUCN 2025 update](https://iucn.org/press-release/202510/arctic-seals-threatened-climate-change-birds-decline-globally-iucn-red-list) [IUCN-SSC MTSG statuses](https://www.iucn-mtsg.org/statuses)

对应结构化字段只能写为：

```ts
conservation: conservation('LC', 'increasing', 2025)
```

IUCN 新闻稿把纳入评估的繁殖地长期筑巢数据汇总为自 1970 年代以来约 **+28%**，MTSG 工作组的 2026 年综述则更准确地称为“纳入评估的全部 rookery 的总体 nesting 增加 28%”。这不是同一天对全球所有活体、所有年龄级或所有成熟个体的同步普查，也不意味着已经恢复到殖民与大规模商业捕杀前的历史基线。因此不应把 28% 写成“现存个体数增加 28%”，也不应据此填写 `estimatedMatureIndividuals`。[IUCN 2025 update](https://iucn.org/press-release/202510/arctic-seals-threatened-climate-change-birds-decline-globally-iucn-red-list) [MTSG Green Turtle Red List working group 2026](https://www.seaturtlestatus.org/articles/conservation-status-of-green-turtle-populations-worldwide)

### 2023、2025 与 2026 的时间线不能混写

| 记录 | 真正含义 | 落库处理 |
| --- | --- | --- |
| `IUCN.UK.2023-1...T4615A247654386` | 2023 年发布的是 **2004 年评估的 amended version**；实际评估日期为 2004-04-30，等级 EN、标准 A2bd，并标注 Needs Updating。修订内容主要是范围图与文字校正，不是一轮 2023 年种群重评。 | 只用于解释历史状态，不写入当前对象。 |
| `IUCN.UK.2025-2...T4615A285108125` | Wallace 与 Broderick 的当前全球重评，等级 LC、趋势 increasing、评估年份 2025。 | 写入 `conservation('LC', 'increasing', 2025)`。 |
| Red List/API `2026-1` 或 CMS 2026 年新闻 | 是 2026 年仍在使用/报道 2025 结果的数据库或新闻时间，不是新一轮全球评估。 | `assessedYear` 仍为 2025。 |

旧评估的 `A2bd` 表示过去三代的种群减少，证据使用适用于本类群的丰度指数（b）与实际或潜在利用水平（d），且减少原因未必已经停止、可逆或充分理解；2004 评估以 32 个指数繁殖地的成熟雌龟年度筑巢变化为核心。它是理解历史耗竭的重要背景，但不能覆盖 2025 当前字段。[IUCN 2004 assessment, amended 2023](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T4615A247654386.en) [IUCN categories and criteria](https://www.iucnredlist.org/resources/categories-and-criteria)

截至 2026-08-21，MTSG 的官方汇总仍显示 `Global: Least Concern (2025)`，未发布 2026 全球重评。CMS 在 2026 年 2 月的新闻稿是在报道这次变化；该新闻还把 Central West Pacific 的年份写成 2025，而 MTSG 工作组逐区综述和正式区域记录给出 **2023**，本稿采用后者。新闻发布年、数据库版本年、评估年必须分别保留。[IUCN-SSC MTSG statuses](https://www.iucn-mtsg.org/statuses) [CMS 2026 news](https://www.cms.int/news/green-turtle-recovery-major-conservation-success-advance-cms-cop15) [MTSG working group 2026](https://www.seaturtlestatus.org/articles/conservation-status-of-green-turtle-populations-worldwide)

### 11 个区域管理单元：全球 LC 不能覆盖区域风险

MTSG 的 2025 全球工作把遗传、地理、标记、迁徙、人口学与专家知识结合，在全球层面并列呈现 11 个 RMU。各区域正式记录的评估年份横跨 2019—2025，并非 11 个都在 2025 年首次完成。工作组指出 **4/11 RMU 仍在下降**；全球 LC 是全物种尺度的结论，不代表每个海区均为 LC。[Wallace et al. 2023 RMU framework](https://doi.org/10.3354/esr01243) [MTSG working group 2026](https://www.seaturtlestatus.org/articles/conservation-status-of-green-turtle-populations-worldwide)

| IUCN RMU | 当前等级（评估年） | 证据边界与主要警讯 |
| --- | --- | --- |
| 北大西洋 North Atlantic | **LC（2025）** | 纳入数据的总年度筑巢量 1984—2023 年约 +134%，但最大繁殖地 Tortuguero 近期转弱，需要继续监测。 |
| 南大西洋 South Atlantic | **LC（2019）** | 汇总筑巢量至 2017 年约 +188%；东部仍有兼捕与非法捕杀。 |
| 东太平洋 East Pacific | **VU（2023）** | 两个长期指数点自 1980 年代显著回升，但当前总体筑巢量仍比 1970 年代最早资料低约 45%。 |
| 西南太平洋 Southwest Pacific | **VU（2025）** | 繁殖地小而破碎；Raine Island 已受高温、侵蚀、盐水入侵与幼龟产出下降影响。 |
| 中西太平洋 Central West Pacific | **NT（2023）** | 可用指数点至 2021 年约 +60%，但繁殖沙滩面积小、彼此隔离且保护与监测不均。 |
| 中南太平洋 Central South Pacific | **EN（2023）** | 估计成熟雌龟少于 3,000 只，数量低、分布破碎且隔离；延绳钓兼捕和直接捕杀持续。 |
| 中北太平洋 Central North Pacific（Hawaiian） | **LC（2019）** | 保护后至 2012 年约每年 +5.44%，但高度依赖少数低矮繁殖小岛，近年可能由增长转为下降，需重评。 |
| 北印度洋 North Indian | **VU（2019）** | 阿曼与也门资料指向自 1970 年代约 −38%，且时间序列有限、兼捕、取食与生境丧失持续。 |
| 东印度洋—西太平洋 East Indian–West Pacific | **LC（2025）** | 长期资料至 2022 年总体约 −1%，大种群与广分布抵消局地损失；至少 26 个遗传种群使保护不能只看总量。 |
| 西南印度洋 Southwest Indian | **LC（2023）** | 主要繁殖地约 30 年至 2020 年总体 +59%，但手工渔业兼捕、非法捕杀与岛屿气候风险仍在。 |
| 地中海 Mediterranean | **NT（2024）** | 约 30 年累计筑巢量 +270%，但繁殖海岸不足 300 千米、遗传隔离且沿海开发压力高。 |

上表数值都是各评估所用的时间窗口与筑巢指数，不可直接相加为全球活体数量。区域等级与证据均来自 MTSG Green Turtle Red List working group 的逐区综述；MTSG 官方状态页可交叉核对已发布的正式 IUCN 区域记录。[MTSG working group 2026](https://www.seaturtlestatus.org/articles/conservation-status-of-green-turtle-populations-worldwide) [IUCN-SSC MTSG statuses](https://www.iucn-mtsg.org/statuses)

### RMU 不等于美国 ESA DPS

NOAA 当前把绿海龟划成 11 个美国《濒危物种法》DPS：Central South Pacific、Central West Pacific 与 Mediterranean 三个 DPS 为 endangered，其余八个为 threatened。这是美国法律下的可识别种群单元和法律等级，不是 IUCN Red List 的区域等级；例如 IUCN Central West Pacific 是 NT（2023），美国 ESA 却列为 endangered。产品的 `conservation` 只能保存 IUCN 全球字段，DPS 信息放在正文或法律说明中。[NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle)

## 分布、生活史阶段与生境

### 全球分布

绿海龟广布于大西洋、太平洋、印度洋及地中海的热带、亚热带与部分温带水域。NOAA 汇总其在 80 多个国家筑巢、使用 140 多个国家的沿岸水域；偶见记录可延伸到更高纬度，但不应把迷游边缘等同于稳定繁殖或核心觅食区。[NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle) [The Reptile Database](https://reptile-database.reptarium.cz/Chelonia/mydas)

本项目应设置 `realms: ['marine', 'terrestrial']`：绝大多数生活史在海中，但雌龟必须上岸产卵，卵和刚出巢幼龟经历关键陆地阶段。六大有人居住大洲均有常规海域或繁殖记录，不能用一个 `distribution.center` 表示全球范围。`countries` 只列代表性范围国，并在 `range` 明说不是 140 多国的完整清单。

### 阶段性生境转换

1. **漂流带与开放海洋**：出巢幼龟迅速离岸，早期幼体在大洋表层汇聚带、漂浮马尾藻与漂流物群落生活数年。北大西洋稳定同位素研究显示，其样本在转入近岸前约经历 3—5 年偏肉食的大洋阶段；这是研究种群的估计，不是每个海盆都固定同样年数。[Reich, Bjorndal & Bolten 2007](https://doi.org/10.1098/rsbl.2007.0394)
2. **浅海觅食场**：较大幼龟转入海草床、藻场、潟湖、海湾、珊瑚礁边缘与岩礁，许多个体在这里生长至成熟。成体与大幼体常对觅食地有高忠诚度，但不同地区从以海草为主到以大型藻类或混合食物为主并不相同。[NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle)
3. **迁徙走廊与休息水域**：成熟个体在觅食地与繁殖区之间跨越沿岸水域、公海和多个国家管辖区，途中也在水下休息与换气。[Restrepo et al. 2026](https://doi.org/10.1111/ddi.70196)
4. **沙质繁殖海滩**：雌龟夜间在高潮线以上选择可挖掘、通气且不过度淹水的沙地筑巢；天然海向低矮明亮地平线引导幼龟入海。硬质护岸、车辙、海滩照明与海平面上升都会破坏这个短暂却不可替代的陆地阶段。[NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle)

### 迁徙不是每只龟一条固定的“万里路线”

NOAA 概括成体在觅食场与繁殖海滩间迁徙数百至数千英里。2026 年首个全球物种级迁徙连通性综合纳入 1990—2022 年的 113 项同行评议来源，整理出 474 个地点（其中 124 个繁殖地）以及至少 7,360 只被标记个体；路线从繁殖地附近定居到相距超过 5,000 千米都有，大多数连线跨越国家管辖区，部分还跨 RMU 边界。[NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle) [Restrepo et al. 2026](https://doi.org/10.1111/ddi.70196)

这套全球资料仍有明显抽样偏差：83.6% 是鳍标记录，998 只是卫星遥测；85.5% 的被标记个体为雌性，研究又偏向繁殖海滩。因此，不能把一条产后雌龟卫星轨迹画成全种、雄龟或幼龟唯一行为。合理文案是：**从局地定居到跨洋迁徙均存在，路线取决于种群、阶段、觅食地和繁殖地连接。**[Restrepo et al. 2026](https://doi.org/10.1111/ddi.70196)

## 外形、体尺、寿命与鉴别边界

### 共同形态

- 绿海龟是现生硬壳海龟中体型最大者，头却相对小；背甲平滑、椭圆至心形，盾片不呈玳瑁式明显覆瓦重叠。
- 背甲中线有 **5 枚椎盾**，两侧各 **4 枚肋盾**；颜色通常为褐、灰、橄榄或带放射状斑驳，不是鲜绿色。
- 两眼之间通常只有 **一对、共两枚大型额前鳞**；喙短而圆，切缘细锯齿状，适合剪断海草，没有牙齿，也不是玳瑁强烈下钩的鹰嘴。
- 恰好两只长前鳍肢与两只较短后鳍肢；各鳍肢通常一个爪。腹甲黄白至浅色。雄龟成体尾明显较长，雌龟尾短；产卵图必须是短尾雌龟。
- 刚出巢幼龟背甲深灰至黑，腹甲白，甲缘和鳍肢边缘常有明显白边；不能把它画成缩小但完全同色的成龟。

NOAA 对椎盾、肋盾、额前鳞、锯齿喙、成幼体色彩与相对小头均有当前说明；台湾海洋保育署资料可交叉核对中文形态术语。[NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle) [台湾海洋保育署绿蠵龟资料](https://www.oca.gov.tw/ch/home.jsp?dataserno=202103170001&id=289&mcustomize=ocamaritime_view.jsp&parentpath=0%2C5)

### 与其他海龟的图像边界

- **玳瑁**：有明显钩状尖喙和覆瓦状、琥珀花纹盾片；绿海龟不能出现这两项组合。
- **赤蠵龟/红海龟**：头更巨大、背甲常红褐；绿海龟头相对小。
- **棱皮龟**：没有硬质盾片，背部有纵向棱；绿海龟必须保留硬壳和盾片。
- **陆龟与淡水龟**：有趾状步足；绿海龟必须是鳍肢，不能画蹼足、鱼尾、鳃或喷水孔。

### 体尺字段

NOAA Quick Facts 给出的成体长度为 **3—4 英尺**、质量 **250—400 磅**，折合约 **91—122 厘米、113—181 千克**。同页正文给出较窄的“典型 300—350 磅”，本项目采用 Quick Facts 的较宽成体范围，并在 note 中说明这是 NOAA 展示口径，不把它误称为全球极值或精确直背甲长。[NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle)

| 字段 | 推荐值 | 说明 |
| --- | --- | --- |
| `measurements.length` | 91—122 cm | NOAA 3—4 ft 的四舍五入换算；不要标成最大甲长。 |
| `measurements.weight` | 113—181 kg | NOAA 250—400 lb 的四舍五入换算；不是每只成龟固定 150 kg。 |
| `metrics.adultLengthCm` | `[91, 122]` | 用于粗粒度比较。 |
| `metrics.adultMassKg` | `[113, 181]` | 用于粗粒度比较。 |
| `metrics.lifespanYears` | 不填 | 寿命未知；“70 年或更长”是估计而不是可支持上下限的群体范围。 |
| `metrics.maxDiveDepthM` | 不填 | `>135 m` 来自三只迁徙成龟中的一只雌龟两次记录，不是全种生理上限。 |
| `metrics.estimatedMatureIndividuals` | 不填 | 全球 28% 是筑巢指数变化，不是成熟个体数量估计。 |

### 寿命与成熟年龄

NOAA 将寿命写为“未知，估计 70 年或更长”，并给出雌龟约 25—35 岁成熟；CMS 的跨种群概括更宽，可到约 20—50 岁。年龄成熟速度随海区、食物、温度和生长史变化，不能把 25 岁写成所有雌龟的固定生日，也不能把“70+”变成已知最大寿命。[NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle) [CMS 2026 news](https://www.cms.int/news/green-turtle-recovery-major-conservation-success-advance-cms-cop15)

## 潜水、换气与活动

绿海龟是用肺呼吸的爬行动物，必须到水面换气；图像不能添加鳃、鲸类喷水孔或持续气泡。潜水模式高度依赖地点、阶段、行为、昼夜和水温，不能用一个“最大潜深”概括日常生活。[NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle)

两项原始研究恰好展示了尺度差异：

- 澳大利亚近岸觅食地的 19 只大幼龟与成龟在短期记录中有 **89%—100%** 时间位于 5 米以内，所有个体最大记录为 7.9 米；它们集中使用浅湾边缘，也因此与船只和沿岸人类活动重叠。[Hazel, Lawler & Hamann 2009](https://doi.org/10.1016/j.jembe.2009.01.007)
- 夏威夷往返繁殖迁徙的 3 只成龟白天通常潜 1—4 米、1—18 分钟，夜间平均最大深度 35—55 米、平均持续 35—44 分钟；其中一只雌龟两次超过 135 米，一只雄龟数次超过 100 米。这是极小样本的迁徙记录，不能代表普通觅食潜水或生理极限。[Rice & Balazs 2008](https://doi.org/10.1016/j.jembe.2007.12.010)

因此可在 featured stat 写“记录潜深 >135 米”，但 note 必须同时保留“1 只迁徙雌龟、2 次、不是常态或物种上限”；规范化 `metrics.maxDiveDepthM` 留空。活动标签可用 `['昼夜活动随阶段而变', '远距离洄游', '潜水取食与休息', '单独活动为主', '雌龟夜间上岸筑巢']`。

## 食性与生态作用

### 随发育阶段改变的食性

绿海龟不能简单标成“终生只吃海草”。NOAA 将大幼龟与成龟概括为以海草和藻类为主，也会摄食海绵及其他无脊椎动物，东太平洋一些种群的动物性食物比例更高。北大西洋盾片稳定同位素研究则显示，所研究的早期幼龟约 3—5 年在大洋环境偏肉食，随后迅速转入浅海并转向草食。[NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle) [Reich, Bjorndal & Bolten 2007](https://doi.org/10.1098/rsbl.2007.0394)

结构化类型适合写 `types: ['herbivore', 'omnivore']`，并在 description 解释阶段和地域变化；这样既保留成体作为海洋巨型草食动物的主轴，也不抹去幼体和部分种群的动物性摄食。

### 不是永远“修剪海草就让草床更健康”

IUCN 将绿海龟称为海草床与珊瑚礁系统的重要关键物种。加勒比原始实验表明，反复“栽培式”啃食可改变海草结构并在一定条件下触发补偿性生长；绿海龟因此是能重塑草床的海洋巨型草食动物，而不只是食物网中的被动消费者。[IUCN 2025 update](https://iucn.org/press-release/202510/arctic-seals-threatened-climate-change-birds-decline-globally-iucn-red-list) [Gulick et al. 2021](https://doi.org/10.1111/1365-2745.13718)

但效果取决于密度、草种、空间与恢复速率。2026 年久米岛研究结合海草调查、无人机密度、捕捉重捕、胃内容物与排除笼，发现当地海草面积相较 1990 年代减少 50.6%，幼龟密度最高达 452.6 只/平方千米，342 只被捕个体显示营养状态波动且平均直背甲增长仅 0.31±1.57 厘米/年；排除啃食后笼内海草显著恢复。结论是高密度持续啃食可耗竭孤立草床，并反过来限制龟的营养与生长。这是局地机制研究，不应外推成“保护绿海龟会毁掉所有海草床”，却足以否定“啃食在任何密度下都只会改善草床”的宣传口号。[Okuyama et al. 2026](https://doi.org/10.1038/s41598-026-49615-8)

## 繁殖、孵化与幼龟入海

NOAA 汇总的典型生活史是：成体约每 2—5 年进行一次繁殖迁徙；雌龟回到其出生海滩所在的大致区域，在数月的筑巢季中约每两周产一巢；每巢约 **110 枚卵**，在温暖沙中孵化约两个月。具体窝卵数、间隔、窝数与孵化时长随地区、季节、母体与沙温变化，110 只能作为近似展示值。[NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle)

雌龟通常独自在夜间上岸，用后鳍肢挖出深卵室，产卵后回填、压实并扫沙掩饰，再返回海中。覆盖巢图不应同时露出一批卵或刚出巢幼龟；二者在时间上不是同一瞬间。刚出巢幼龟通常朝远离陆侧黑色轮廓、接近开放海面自然亮地平线的方向爬行，人工白光会误导它们。[NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle)

绿海龟采用温度依赖型性别决定：较高孵化温度通常产生更多雌性，较低温度产生更多雄性，极端高温还会降低胚胎存活；关键温度因种群与巢条件而变，不应给全球对象塞入一个固定“雌雄分界温度”。海滩升温、侵蚀、风暴与淹水会同时改变性别比和孵化成功，Raine Island 的幼龟产出下降已经成为 Southwest Pacific RMU 的现实警讯。[NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle) [MTSG working group 2026](https://www.seaturtlestatus.org/articles/conservation-status-of-green-turtle-populations-worldwide)

## 威胁、法律保护与行动

### 主要威胁与证据边界

全球 LC 表示当前全物种灭绝风险较低，不表示个体、繁殖地或所有 RMU 已安全。IUCN/MTSG 的 2025 全球优先级调查与 NOAA 当前物种页共同支持以下压力：[Wallace et al. 2025](https://doi.org/10.3354/esr01385) [NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle)

1. **渔业兼捕**：拖网、刺网、延绳钓、钩线、笼具会造成溺亡、吞钩和鳍肢缠绕；全球专家评估把兼捕列为最广泛、最紧迫威胁。
2. **直接捕杀与卵采集**：肉、脂肪、卵及龟甲贸易曾造成灾难性耗竭，部分地区仍有合法或非法取用。
3. **繁殖海滩丧失与退化**：滨海开发、硬质护岸、采砂、车辆、踩踏与照明会减少可用干沙、阻止母龟上岸或使幼龟迷向。
4. **觅食地退化**：海草床、藻场、潟湖和珊瑚礁受疏浚、污染、富营养化、锚泊与沿海工程影响。
5. **气候变化**：高沙温改变性别比并可致死，海平面上升、侵蚀、盐水入侵与风暴淹没巢；海温还会改变食物、迁徙范围和繁殖季。
6. **船只撞击**：近岸大型幼龟、成龟和繁殖迁徙个体在港口、航道、入口与水面换气时风险较高。
7. **海洋垃圾与遗失渔具**：误食塑料、气球、焦油，以及被钓线和幽灵渔具缠绕均可致伤致死。
8. **疾病**：纤维乳头瘤病会形成内外肿瘤，妨碍游泳和摄食；在绿海龟中尤常见，但流行程度有强烈地域差异。

### 国际与中国法律状态

- **CITES**：现行 2026 附录将海龟科列入附录 I；野生来源标本的商业性国际贸易受到最严格限制，但不能简化成“任何跨境移动在所有情况下都绝对禁止”。[CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)
- **CMS**：2026-06-27 生效的现行附录把 *Chelonia mydas* 列入附录 I，同时海龟科作为更高阶元列在附录 II，反映对受威胁迁徙种与跨国合作的双重要求。[CMS Appendices, effective 27 June 2026](https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf)
- **中国**：2021 年《国家重点保护野生动物名录》将绿海龟列为国家一级保护野生动物；IUCN 全球 LC 不会自动取消国内法律保护。[国家林业和草原局、农业农村部公告 2021 年第 3 号](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml)
- **美国 ESA**：11 个 DPS 中 3 个 endangered、8 个 threatened；这是美国法律状态，不写进 IUCN 全球字段。[NOAA Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle)

### 推荐保护行动

- 保护筑巢雌龟、卵、天然沙丘和高潮线以上干沙，限制车辆与海滩硬化，使用遮光、定向与低影响照明维持黑暗海滩。
- 与沿海社区共同减少不可持续捕杀和卵采集，执行国内法、CITES 贸易管制与跨境迁徙协作，同时尊重合法社区参与和长期监测。
- 在适用拖网渔业正确安装与维护 TED；在 NOAA 的美国虾拖网测试口径中，现行设计约可排除 97% 海龟，但该数字不能无条件外推到所有网具、国家和合规水平。[NOAA Turtle Excluder Devices](https://www.fisheries.noaa.gov/southeast/bycatch/turtle-excluder-devices)
- 结合大号圆形钩、合适饵型、刺网网目与低轮廓设计、时空关闭、观察员和快速放生流程，按具体渔业减少兼捕。
- 保护与恢复海草床、藻场、礁缘、潟湖、休息水域和迁徙连接，而不是只守一段产卵沙滩。
- 在港口、入口和近岸觅食热点减速、瞭望并避让；清除遗失渔具、钓线与塑料，监测油污和疾病。
- 按 11 个 RMU 分别维护长期一致的筑巢、海上丰度、遗传、标记重捕和遥测数据，补足雄龟、幼龟与非繁殖地的抽样偏差。
- 对恢复后的高密度觅食场同时监测海草承载力、龟体况和生长，采用生态系统尺度的适应性管理，避免把“越多越好”或“龟与草床冲突”任何一端绝对化。

## 常见网络数字审计

| 常见说法 | 证据判断 | 落库建议 |
| --- | --- | --- |
| “2026 年 IUCN 已重新评成 LC” | LC 是 2025 全球评估；2026 是当前数据库版本、CMS 新闻或区域综述年份。 | `assessedYear: 2025`，正文可写截至 2026 仍有效。 |
| “全球数量自 1970 年代增长 28%” | 28% 是纳入评估繁殖地的总体 nesting 指数，不是所有活体或成熟个体同步普查。 | 可写故事和关键事实；不填成熟个体数。 |
| “绿海龟已经完全恢复” | 全球 LC 与上升真实，但仍远低于历史丰度，4/11 RMU 下降，CSP 为 EN。 | 同时展示全球成功与区域不均。 |
| “绿海龟能潜 135 米” | 迁徙研究一只雌龟两次超过 135 米；近岸研究多数时间在 5 米内。 | featured stat 写 `>135` 并保留样本限制；不填 max dive metric。 |
| “寿命 70 年” | NOAA 写寿命未知、估计 70 年或更长。 | 正文写估计；不填 lifespan range。 |
| “每巢正好 110 枚卵” | NOAA 是 about 110，窝卵数因地点与个体变动。 | featured stat 写“约 110”，不写固定值。 |
| “所有成体都迁徙几千公里” | 全球综合从定居到超过 5,000 千米都有，并有性别与繁殖地抽样偏差。 | 写路线多样性，不设单一路线或平均距离。 |
| “它的甲是绿色，所以叫绿海龟” | 名称来自绿色脂肪；甲常为褐、灰或橄榄。 | 外形和图片均禁止荧光绿甲。 |
| “绿海龟啃食一定让海草更健康” | 中等、栽培式啃食可促补偿生长；久米岛高密度持续啃食却耗竭草床并限制龟生长。 | 生态故事必须保留密度与场地依赖。 |

## 六帧原创图像的科学边界

### 所有帧共用的形态与制作约束

- 输出均为 **1536×1024、横向 3:2、8-bit sRGB、无 alpha** 的原创写实自然史图像；不模仿具体艺术家，不使用真实照片信用语。
- 每只绿海龟只有四个鳍肢：两只长前鳍肢、两只较短后鳍肢；不增生鳍、腿、鱼尾、鳃、喷水孔、牙齿或人手。
- 成体背甲为平滑的褐、灰、橄榄或金褐斑驳硬壳，盾片不重叠；中线 5 枚椎盾、两侧各 4 枚肋盾。头相对小，两眼间一对额前鳞，喙短圆、切缘细锯齿状，腹面黄白。
- 不出现玳瑁式钩喙与覆瓦盾片、赤蠵龟式巨大红褐头、棱皮龟式纵棱软甲，也不把整只龟染成鲜绿或荧光绿。
- 水下画面保留自然散射光、悬浮微粒与真实浮力姿态；海滩夜景只用月光、星光或受控红光，不用摄影闪光和舞台灯。
- 除第 06 帧的受训监测员外，不出现人、潜水员、船、网具、标签或研究设备；所有帧都禁止文字、箭头、地图、图标、边框、Logo 和水印。

### 逐帧场景、必需项与禁区

| 帧与运行时文件 | 场景 | 必须保留 | 明确禁止 |
| --- | --- | --- | --- |
| 01 `01-seagrass-meadow-grazing.webp` | 清澈浅海草床中，一只成体低头剪食海草；龟位于画面右侧，左侧是可承载标题的开阔蓝绿水体与低矮草床 | 恰好一只成体、完整四鳍肢、褐橄榄斑驳背甲、头部向草叶；**左侧约 42% 安静负空间**，主体焦点约 `{ x: 0.72, y: 0.58 }` | 左侧第二只龟、珊瑚或鱼群塞满留白、鲜绿龟甲、咬到塑料、气泡从龟体冒出、文字 |
| 02 `02-serrated-beak-grazing.webp` | 一只成体在海草床剪下一小束草叶的近距离三分之二侧面 | 小头与一对额前鳞清晰，短圆喙的细锯齿切缘可辨但无牙；只露出自然数量的鳍肢，主体焦点约 `{ x: 0.60, y: 0.49 }` | 鹰钩喙、张开有牙大嘴、吸管状口器、食肉撕咬、第二只龟、喂食人手、塑料 |
| 03 `03-pelagic-juvenile-sargassum.webp` | 一只小型早期幼龟在开放海洋表层的天然漂浮马尾藻下游动 | 恰好一只幼龟，体型小、甲较深且边缘较浅；马尾藻位于水面汇聚带，主体焦点约 `{ x: 0.57, y: 0.57 }` | 成龟在海底草床、垃圾筏、油污、气球、成群幼龟、捕食大鱼、海岸或水族箱 |
| 04 `04-ocean-migration-surface-breath.webp` | 一只成体在开阔海洋迁徙途中到达空气—海水界面换气，水上与水下同时可见 | 只有鼻孔和头顶部自然越过水面，硬壳与四鳍肢仍在水下；远处低海平线，不画唯一航线，主体焦点约 `{ x: 0.62, y: 0.58 }` | 鲸类喷水、鳃、持续气泡、跃出水面、船只尾流、海岸目的地图标、龟群编队、追踪器 |
| 05 `05-night-nest-covering.webp` | 一只成体雌龟在高潮线以上的黑暗沙滩，用后鳍肢覆盖已经产完卵的巢 | 恰好一只短尾雌龟，后鳍肢扫沙、身体朝海，海面在远处；巢卵已埋藏不可见，主体焦点约 `{ x: 0.62, y: 0.58 }` | 长尾雄龟、可见卵与幼龟同框、白色闪光灯、围观人群、机械铲、车辆、牵引或触摸母龟 |
| 06 `06-dark-beach-hatchling-monitoring.webp` | 黑暗天然海滩上三只刚出巢幼龟朝开放海面自然亮地平线爬行，一名受训监测员在陆侧远处记录 | 恰好三只深色、白边幼龟；一名保持距离的监测员只用遮蔽的暗红低光与记录板，不接触、不阻挡；主体焦点约 `{ x: 0.56, y: 0.61 }` | 手拿幼龟、白光/手机闪光、桶或围栏、游客群、错误朝向陆地灯光、海鸥捕食、死亡或受伤、广告文字 |

### 可直接用于生成的最终英文提示词

下列六段各自完整，可单独交给图像生成器；共用约束已重复嵌入，避免生成时丢失形态边界。

#### 01 `01-seagrass-meadow-grazing-source.png`

```text
Create an original photorealistic natural-history editorial image, 1536x1024 horizontal 3:2, 8-bit sRGB, no alpha. In a clear shallow tropical seagrass meadow, show exactly one adult green turtle (Chelonia mydas) calmly lowering its small head to crop short seagrass. Place the complete turtle in the right 58% of the frame at about x 0.72, y 0.58, leaving the left 42% as quiet uncluttered blue-green water and a low, softly receding seagrass bed for title text. The turtle has a smooth non-overlapping mottled brown-olive hard carapace with five central vertebral scutes and four pairs of lateral costal scutes, a small rounded head with one pair of large prefrontal scales, a short finely serrated beak with no teeth, exactly two long front flippers and two shorter rear flippers, and a pale yellow-white underside. Natural sunlight shafts, realistic underwater particles and color falloff, no dramatic fantasy lighting. No other turtle, no crowded coral or fish school in the negative space, no diver, no boat, no fishing gear, no plastic, no bubbles from the turtle, no bright green shell, no hawksbill hooked beak or overlapping scutes, no loggerhead-sized head, no leatherback ridges, no text, logo, border or watermark.
```

#### 02 `02-serrated-beak-grazing-source.png`

```text
Create an original photorealistic underwater natural-history close portrait, 1536x1024 horizontal 3:2, 8-bit sRGB, no alpha. Show exactly one adult green turtle (Chelonia mydas) in a three-quarter side view while it cleanly crops a small bundle of seagrass. Keep the eye, nostrils and mouth in crisp focus: a proportionally small rounded head, one pair of large prefrontal scales between the eyes, and a short rounded beak with a subtly but scientifically visible finely serrated cutting edge, no teeth and no hooked tip. Include part of the smooth mottled brown and olive non-overlapping hard carapace and only anatomically correct flippers, with the main focus near x 0.60, y 0.49. Calm clear shallow water, sandy seagrass bottom, restrained natural light, realistic texture. No second turtle, no wide toothed mouth, no parrot or hawksbill beak, no carnivorous tearing, no hand feeding, no plastic, no gills, no blowhole, no extra limbs, no text, logo, border or watermark.
```

#### 03 `03-pelagic-juvenile-sargassum-source.png`

```text
Create an original photorealistic natural-history image, 1536x1024 horizontal 3:2, 8-bit sRGB, no alpha. In deep blue open ocean just below the sunlit surface, show exactly one small early juvenile green turtle (Chelonia mydas) swimming beneath a natural floating Sargassum convergence line. The juvenile is clearly smaller and darker than an adult, with pale white margins on the shell and flippers, a smooth hard carapace with non-overlapping scutes, a small rounded head with one pair of prefrontal scales, and exactly four flippers. Place the juvenile around x 0.57, y 0.57 with plenty of open blue water around it. Sargassum is golden-brown and biologically plausible, with only tiny unobtrusive associated invertebrates if visible. This is an oceanic early-life habitat, not an adult grazing scene. No beach, no seafloor seagrass, no adult turtle, no school of hatchlings, no aquarium, no garbage raft, no fishing line, balloon, oil or plastic, no attacking predator, no extra limbs, no text, logo, border or watermark.
```

#### 04 `04-ocean-migration-surface-breath-source.png`

```text
Create an original photorealistic split-level ocean natural-history image, 1536x1024 horizontal 3:2, 8-bit sRGB, no alpha. Show exactly one adult green turtle (Chelonia mydas) during an open-ocean migration as it calmly surfaces to breathe. Its nostrils and the top of its small rounded head are naturally just above the air-water interface while the mottled brown-olive hard carapace and exactly four flippers remain visible underwater. Place the turtle around x 0.62, y 0.58. The above-water portion shows only a low distant horizon and open sea; the underwater portion is deep clear blue with realistic light refraction. Preserve one pair of prefrontal scales, a short serrated beak without teeth, five central and four pairs of lateral carapace scutes where visible, and a pale underside. This is one possible migratory moment, not a mapped universal route. No whale-like spout, no blowhole, no gills, no stream of bubbles, no leaping turtle, no boat, coast, wake, tracking tag, route line, compass, turtle formation, storm injury, extra limbs, text, logo, border or watermark.
```

#### 05 `05-night-nest-covering-source.png`

```text
Create an original photorealistic nocturnal wildlife documentary image, 1536x1024 horizontal 3:2, 8-bit sRGB, no alpha. On an undeveloped dark sandy nesting beach above the high-tide line, show exactly one adult female green turtle (Chelonia mydas) after laying, using her two rear flippers to sweep and press sand over the concealed nest chamber. She has a short female tail, a smooth mottled brown-olive non-overlapping hard carapace, a relatively small rounded head, exactly two long front flippers and two rear flippers. Her body is oriented generally toward the distant sea, with the turtle around x 0.62, y 0.58. Use only soft moonlight and starlight, a natural dark sea horizon and subtle flipper tracks. All eggs are already buried and invisible; this is nest covering, not laying or emergence. No male with a long tail, no hatchlings, no exposed eggs, no human, flash, phone, artificial white light, vehicle, shovel, rope, touching, injury, text, logo, border or watermark.
```

#### 06 `06-dark-beach-hatchling-monitoring-source.png`

```text
Create an original photorealistic low-light conservation documentary image, 1536x1024 horizontal 3:2, 8-bit sRGB, no alpha. On a naturally dark undeveloped beach, show exactly three newly emerged green turtle hatchlings (Chelonia mydas) crawling independently toward the open ocean's naturally brighter low horizon. Each hatchling has a dark gray-to-black smooth hard carapace, a white plastron and distinct pale white margins on the shell and exactly four flippers. Place the hatchlings mainly around x 0.56, y 0.61 with realistic small scale, sand tracks and no distress. Far behind them on the landward side, show exactly one trained monitor maintaining distance, using only a shielded dim red downward-facing light and a clipboard; the monitor does not touch, carry, block or direct any hatchling. Preserve a dark dune silhouette behind and the unobstructed sea ahead. No tourist crowd, no white flashlight or phone flash, no bucket, cage, fence, hand holding a turtle, no vehicle tracks, no hatchling moving toward artificial land light, no bird attack, death or injury, no text, logo, border or watermark.
```

### 最终图片静态验收

- 六张源 PNG 与六张运行时 WebP 均应为 1536×1024、横向 3:2、8-bit sRGB、无 alpha；使用 `cwebp -q 82 -m 6 -mt` 生成运行时图。
- 文件基名必须与 `media` 完全一致；封面只出现在 `media.image`，不得在 gallery 重复。
- 逐图人工静态确认个体数、四鳍肢、头部比例、喙形、盾片是否重叠、成幼体色彩、雌龟短尾、海陆方向和人类行为边界。
- 01 封面左侧约 42% 必须保持可读负空间；`focalPoint` 应按最终落盘图复核，必要时只调整坐标，不改变文件名。
- 统一信用为 `Fauna Atlas · AI 生成原创图像`，不得冒充野外摄影师、科研机构或真实照片。

## 推荐来源数组

下列常量是本物种在 `species.ts` 中的**唯一来源数组声明**；完整对象只通过 `sources: GREEN_SEA_TURTLE_SOURCES` 引用。数组优先保留当前正式评估、专家组区域汇总、政府资料与直接支撑故事数字的原始研究。

```ts
const GREEN_SEA_TURTLE_SOURCE_DATE = '2026-08-21' as const;
const GREEN_SEA_TURTLE_CONTENT_DATE = '2026-08-21' as const;

const GREEN_SEA_TURTLE_SOURCES = [
  {
    title: 'The Reptile Database — Chelonia mydas (Linnaeus, 1758)',
    url: 'https://reptile-database.reptarium.cz/Chelonia/mydas',
    kind: 'taxonomy',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Chelonia mydas global assessment (2025)',
    url: 'https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T4615A285108125.en',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN 2025 Red List update — Green sea turtle rebounds through conservation',
    url: 'https://iucn.org/press-release/202510/arctic-seals-threatened-climate-change-birds-decline-globally-iucn-red-list',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Chelonia mydas, amended version of the 2004 assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T4615A247654386.en',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN-SSC Marine Turtle Specialist Group — Red List assessments',
    url: 'https://www.iucn-mtsg.org/statuses',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'MTSG Green Turtle Red List working group 2026 — Conservation status of 11 RMUs',
    url: 'https://www.seaturtlestatus.org/articles/conservation-status-of-green-turtle-populations-worldwide',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Green Turtle (updated 13 July 2026)',
    url: 'https://www.fisheries.noaa.gov/species/green-turtle',
    kind: 'general',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Wallace et al. 2023 — Updated global Regional Management Unit framework',
    url: 'https://doi.org/10.3354/esr01243',
    kind: 'distribution',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Wallace et al. 2025 — Updated global conservation status and priorities for marine turtles',
    url: 'https://doi.org/10.3354/esr01385',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Restrepo et al. 2026 — Global migratory connectivity of green turtles',
    url: 'https://doi.org/10.1111/ddi.70196',
    kind: 'distribution',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Reich, Bjorndal & Bolten 2007 — The lost years of green turtles',
    url: 'https://doi.org/10.1098/rsbl.2007.0394',
    kind: 'ecology',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Rice & Balazs 2008 — Diving during Hawaiian green turtle migrations',
    url: 'https://doi.org/10.1016/j.jembe.2007.12.010',
    kind: 'ecology',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Hazel, Lawler & Hamann 2009 — Near-shore green turtle diving behaviour',
    url: 'https://doi.org/10.1016/j.jembe.2009.01.007',
    kind: 'ecology',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Gulick et al. 2021 — Compensatory seagrass growth under cultivation grazing',
    url: 'https://doi.org/10.1111/1365-2745.13718',
    kind: 'ecology',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Okuyama et al. 2026 — Intensive grazing, seagrass depletion and constrained turtle growth',
    url: 'https://doi.org/10.1038/s41598-026-49615-8',
    kind: 'ecology',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Turtle Excluder Devices (updated 18 June 2026)',
    url: 'https://www.fisheries.noaa.gov/southeast/bycatch/turtle-excluder-devices',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'CMS — Appendices I and II effective 27 June 2026',
    url: 'https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局、农业农村部 — 国家重点保护野生动物名录（2021年第3号）',
    url: 'https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml',
    kind: 'conservation',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
  {
    title: '台湾海洋保育署 — 绿蠵龟物种资料',
    url: 'https://www.oca.gov.tw/ch/home.jsp?dataserno=202103170001&id=289&mcustomize=ocamaritime_view.jsp&parentpath=0%2C5',
    kind: 'general',
    accessedAt: GREEN_SEA_TURTLE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 可直接用于 `species.ts` 的完整字段建议

以下对象覆盖当前 `Species` 的全部必填字段。六个文件名已与最终源 PNG 和运行时 WebP 对齐；`focalPoint` 按最终画面主体位置给出。

```ts
{
  id: 'species-chelonia-mydas',
  slug: 'green-sea-turtle',
  names: {
    zh: '绿海龟',
    en: 'Green Turtle',
    aliases: ['绿蠵龟', '青海龟'],
  },
  scientificName: 'Chelonia mydas',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Reptilia', '爬行纲'),
    taxon('Testudines', '龟鳖目'),
    taxon('Cheloniidae', '海龟科'),
    taxon('Chelonia', '绿海龟属'),
  ),
  conservation: conservation('LC', 'increasing', 2025),
  distribution: {
    realms: ['marine', 'terrestrial'],
    continents: ['亚洲', '非洲', '欧洲', '北美洲', '南美洲', '大洋洲'],
    regions: [
      '热带与亚热带大西洋及加勒比海',
      '地中海',
      '印度洋与红海',
      '东太平洋、中太平洋与西太平洋',
      '开放海洋表层汇聚带',
      '全球暖水海岸的觅食地与繁殖海滩',
    ],
    countries: [
      '中国',
      '日本',
      '印度',
      '印度尼西亚',
      '马来西亚',
      '阿曼',
      '土耳其',
      '塞浦路斯',
      '希腊',
      '澳大利亚',
      '巴布亚新几内亚',
      '美国',
      '墨西哥',
      '哥斯达黎加',
      '厄瓜多尔',
      '巴西',
      '委内瑞拉',
      '南非',
      '莫桑比克',
      '塞舌尔',
    ],
    range:
      '广布于大西洋、太平洋、印度洋和地中海的热带、亚热带及部分温带水域，在80多个国家筑巢并使用140多个国家的沿岸水域；幼体利用开放海洋表层漂流带，大幼体和成体多在浅海觅食，再沿跨国迁徙通道往返觅食地与繁殖海滩。所列国家仅为代表，不是完整范围或迷游记录清单。',
  },
  habitats: [
    {
      name: '浅海海草床、藻场、潟湖与礁缘',
      realm: 'marine',
      description:
        '大幼龟和成龟的主要觅食、生长与休息环境；食物可由海草、大型藻类和少量动物性食物组成，组成随种群与地点变化。',
      isPrimary: true,
    },
    {
      name: '开放海洋表层汇聚带与漂浮马尾藻群落',
      realm: 'marine',
      description:
        '出巢后的早期幼体在此生活数年，借漂流带获得遮蔽并摄食附生及漂浮生物，随后才转入近岸。',
    },
    {
      name: '跨国迁徙走廊与水下休息水域',
      realm: 'marine',
      description:
        '成熟个体往返觅食场与繁殖区，路线可从局地定居到超过5000千米，并跨越国家管辖区和部分RMU边界。',
    },
    {
      name: '热带与亚热带沙质繁殖海滩',
      realm: 'terrestrial',
      description:
        '雌龟夜间在高潮线以上挖巢，卵在沙中孵化；黑暗、可挖掘且不易淹水的海滩与天然海向地平线对成功繁殖关键。',
    },
  ],
  measurements: {
    length: {
      min: 91,
      max: 122,
      unit: 'cm',
      note: 'NOAA成体3—4英尺展示范围的四舍五入换算，不代表全球最大直背甲长。',
    },
    weight: {
      min: 113,
      max: 181,
      unit: 'kg',
      note: 'NOAA Quick Facts成体250—400磅展示范围的四舍五入换算。',
    },
  },
  diet: {
    types: ['herbivore', 'omnivore'],
    foods: [
      '海草',
      '大型藻类',
      '漂浮马尾藻与附生生物',
      '海绵及其他小型无脊椎动物',
      '部分地区可获得的动物性食物',
    ],
    description:
      '食性随发育阶段与种群改变：早期幼体在开放海洋中偏肉食或杂食，许多大幼龟和成龟转入浅海后以海草和藻类为主；东太平洋等地可保留较多动物性食物。',
  },
  activity: ['昼夜活动随阶段而变', '远距离洄游', '潜水取食与休息', '单独活动为主', '雌龟夜间上岸筑巢'],
  tags: ['海龟', '海洋爬行动物', '巨型草食动物', '跨洋洄游', '海草床', '温度依赖型性别决定', '全球恢复不均'],
  summary: '广布全球暖水海洋、成年后多以海草和藻类为食，并在觅食地与出生海滩区域之间迁徙的最大型硬壳海龟。',
  description:
    '绿海龟的甲通常是褐、灰或橄榄色，名字来自绿色脂肪而非绿色外壳。幼体先在开放海洋漂流带生活，许多个体随后转入浅海草床和藻场，以锯齿状短喙剪食植物；许多成熟个体再沿跨国通道往返繁殖区，雌龟回到出生海滩所在区域产卵。IUCN在2025年把全球状态从濒危更新为无危且趋势上升，纳入评估的筑巢量自1970年代总体约增加28%，但11个区域管理单元中仍有濒危、易危和近危种群，全球恢复不能掩盖局地下降。',
  storySections: [
    {
      key: 'identity',
      label: '辨识',
      title: '绿色的是脂肪，不是必须鲜绿的甲',
      body:
        '成体拥有平滑的褐、灰或橄榄斑驳硬壳，中线五枚椎盾、两侧各四枚肋盾；头相对小，两眼间只有一对大型额前鳞，短圆喙的切缘带细锯齿。名称来自皮下常呈绿色的脂肪，而不是甲色，也不能因此把它画成荧光绿色。',
    },
    {
      key: 'life-stages',
      label: '成长',
      title: '从马尾藻漂流带转入浅海草床',
      body:
        '刚出巢幼龟先游向开放海洋，在表层汇聚带和漂浮马尾藻附近生活数年；北大西洋样本显示早期约三至五年偏肉食。较大幼龟随后转入浅海觅食地，许多个体逐渐以海草和藻类为主，因此“食草”描述的是重要后期主轴，而非每个阶段只吃植物。',
    },
    {
      key: 'grazing',
      label: '生态',
      title: '巨型草食动物会重塑海草床',
      body:
        '反复剪食能形成栽培式草斑，并在一些加勒比草床触发补偿生长；但效果取决于密度和草床恢复力。2026年久米岛研究显示，高密度持续啃食也能耗竭孤立草床并反过来限制龟的体况和生长，保护必须同时观察消费者与生境承载力。',
    },
    {
      key: 'migration-diving',
      label: '迁徙与潜水',
      title: '从浅湾日常到深海迁徙，没有一个固定潜深',
      body:
        '近岸研究中的绿海龟有八成以上时间处在极浅水，另一项只有三只夏威夷成龟的迁徙研究却记录到夜间深潜，其中一只雌龟两次超过135米。全球路线也从定居到超过5000千米都有；它们用肺呼吸，必须浮到水面换气。',
    },
    {
      key: 'nesting',
      label: '繁殖',
      title: '几十年后，雌龟回到出生海滩所在区域',
      body:
        '雌龟约二十五至三十五岁成熟，通常每二至五年进行繁殖迁徙；一个筑巢季可每隔约两周再产一巢，每巢约一百一十枚卵、孵化约两个月。沙温影响幼龟性别与存活，黑暗海滩、可挖干沙和天然海向地平线共同决定下一代能否入海。',
    },
    {
      key: 'uneven-recovery',
      label: '保护',
      title: '全球无危，是长期行动奏效而不是任务结束',
      body:
        '2025年全球评估为LC且上升，但四个RMU仍下降，中南太平洋为EN，东太平洋与北印度洋为VU。保护筑巢雌龟和卵、减少捕杀与贸易、使用合适兼捕缓解装置、维护黑暗海滩及浅海觅食地带来了恢复；这些措施一旦中断，区域成果仍可逆转。',
    },
  ],
  keyFacts: [
    '当前接受名为Chelonia mydas，归入龟鳖目、海龟科、绿海龟属；近年的分类口径通常不承认亚种。',
    '成体背甲通常褐、灰或橄榄斑驳；中线5枚椎盾、两侧各4枚肋盾，头小且两眼间有一对大型额前鳞。',
    'NOAA成体展示范围约长91—122厘米、重113—181千克；这是成体展示范围，不是全球极值。',
    '寿命未知、估计70年或更长；雌龟常约25—35岁成熟，成熟速度随种群与生长条件改变。',
    '早期幼体利用开放海洋漂流带并偏肉食或杂食，许多大幼龟和成龟转入浅海后以海草和藻类为主。',
    '全球迁徙连接从局地定居到超过5000千米都有，大多数已整理路线跨越国家管辖区。',
    '一只迁徙雌龟曾两次潜到超过135米，但近岸样本有89%—100%的时间在5米内，潜水行为不可用单一上限概括。',
    '每巢约110枚卵、孵化约两个月；较高沙温通常产生更多雌性，极端温度和淹水会降低孵化成功。',
    'IUCN当前全球字段为LC、increasing、2025且无criteria code；2023记录只是2004年EN A2bd评估的修订版。',
    '全球纳入评估的筑巢量自1970年代约增加28%，但4/11 RMU仍下降，中南太平洋RMU仍为EN。',
    '在中国，绿海龟是国家一级保护野生动物；全球IUCN无危不会取消国内与国际法律保护。',
  ],
  threats: [
    '拖网、刺网、延绳钓、钩线及笼具造成的兼捕、溺亡、吞钩和缠绕',
    '为肉、脂肪、卵及贸易进行的直接捕杀和不可持续采集',
    '滨海开发、硬质护岸、采砂、车辆和人工照明造成的繁殖海滩丧失与退化',
    '疏浚、污染、富营养化、锚泊和沿海工程造成的海草床、藻场及礁缘退化',
    '海滩升温、海平面上升、侵蚀、盐水入侵和风暴对巢、性别比及幼龟产出的影响',
    '港口、航道、入口和近岸水面换气区的船只撞击',
    '塑料、气球、油污、钓线和遗失渔具的误食或缠绕',
    '纤维乳头瘤病等具有地域差异的疾病压力',
  ],
  conservationActions: [
    '保护筑巢雌龟、卵、天然沙丘和高潮线以上干沙，限制车辆、硬质护岸与不当海滩工程',
    '关闭、遮蔽或定向管理海滩可见光源，维持母龟上岸和幼龟朝海所需的黑暗地平线',
    '与社区合作减少不可持续捕杀和卵采集，执行国内保护、CITES贸易管制与跨境协作',
    '在适用拖网渔业正确安装和维护TED，并结合圆形钩、网具改造、时空关闭与安全放生流程减少兼捕',
    '保护和恢复海草床、藻场、潟湖、礁缘、休息水域及跨国家迁徙连接',
    '在近岸热点实施船只减速、瞭望与避让，清除遗失渔具、钓线、塑料并响应搁浅个体',
    '按11个RMU维持长期一致的筑巢、海上丰度、遗传、标记重捕、遥测和威胁监测',
    '补足雄龟、幼龟和非繁殖地样本，并在恢复后的高密度觅食场同步监测草床承载力与龟体况',
  ],
  metrics: {
    adultLengthCm: [91, 122],
    adultMassKg: [113, 181],
  },
  featuredStats: [
    {
      key: 'adult-length',
      label: '成体长度',
      value: '91—122',
      unit: '厘米',
      note: 'NOAA 3—4英尺展示范围的换算，不是全球最大甲长',
    },
    {
      key: 'adult-mass',
      label: '成体质量',
      value: '113—181',
      unit: '千克',
      note: 'NOAA 250—400磅展示范围的换算',
    },
    {
      key: 'recorded-dive',
      label: '记录潜深',
      value: '>135',
      unit: '米',
      note: '仅一只迁徙雌龟的两次记录，不是日常潜深或物种生理上限',
    },
    {
      key: 'eggs-per-nest',
      label: '每巢卵数',
      value: '约110',
      unit: '枚',
      note: '典型近似值，随地区、季节与个体变化',
    },
  ],
  media: {
    image: './images/species/green-sea-turtle/01-seagrass-meadow-grazing.webp',
    alt: '一只褐橄榄斑驳硬壳的成体绿海龟在清澈浅海草床低头取食，身体位于画面右侧，左侧保留宽阔安静的蓝绿水体与低矮草床',
    focalPoint: { x: 0.72, y: 0.58 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/green-sea-turtle/02-serrated-beak-grazing.webp',
        alt: '一只成体绿海龟在浅海草床剪食一小束海草，近距离侧面清楚显示相对小的头、两眼间一对大型额前鳞和无牙的短圆喙',
        title: '锯齿状短喙剪食海草',
        caption: '短圆喙的细锯齿切缘适合剪断海草；名称里的绿色来自脂肪，而不是这副褐橄榄色硬壳。',
        focalPoint: { x: 0.60, y: 0.49 },
      },
      {
        image: './images/species/green-sea-turtle/03-pelagic-juvenile-sargassum.webp',
        alt: '一只小型幼年绿海龟在开放海洋表层游过天然漂浮马尾藻下方，周围是宽阔深蓝水体且没有海底草床',
        title: '漂浮马尾藻下的早期海洋阶段',
        caption: '幼龟先在开放海洋表层汇聚带生活数年，之后许多个体才转入浅海觅食地并改变食性。',
        focalPoint: { x: 0.57, y: 0.57 },
      },
      {
        image: './images/species/green-sea-turtle/04-ocean-migration-surface-breath.webp',
        alt: '一只成体绿海龟在开阔海洋的空气与海水界面换气，鼻孔和头顶刚越过水面，褐色硬壳与四个鳍肢仍在蓝色水下',
        title: '迁徙途中浮到水面换气',
        caption: '绿海龟用肺呼吸，必须浮出鼻孔换气；路线可以跨越多国海域，但这幅画面不代表唯一迁徙路径。',
        focalPoint: { x: 0.62, y: 0.58 },
      },
      {
        image: './images/species/green-sea-turtle/05-night-nest-covering.webp',
        alt: '星光下的黑暗沙滩上，一只短尾雌性绿海龟用后鳍肢把沙扫回已经产完卵的巢室，卵全部埋藏且海面位于远处',
        title: '雌龟在夜间覆盖巢室',
        caption: '产卵后，雌龟回填并扫沙掩饰巢位；画面没有把覆巢、露出的卵和幼龟出巢错误地拼在同一瞬间。',
        focalPoint: { x: 0.59, y: 0.57 },
      },
      {
        image: './images/species/green-sea-turtle/06-dark-beach-hatchling-monitoring.webp',
        alt: '三只深色白边的绿海龟幼龟在黑暗海滩朝开放海面地平线爬行，远处一名监测员仅用遮蔽暗红光记录且没有触碰幼龟',
        title: '黑暗海滩上的远距监测',
        caption: '天然海向地平线引导幼龟入海；远处监测员只用受控红光记录，不拿起、阻挡或用白光照射幼龟。',
        focalPoint: { x: 0.56, y: 0.61 },
      },
    ],
  },
  sources: GREEN_SEA_TURTLE_SOURCES,
  featured: true,
  publishedAt: GREEN_SEA_TURTLE_CONTENT_DATE,
  updatedAt: GREEN_SEA_TURTLE_CONTENT_DATE,
}
```

## 字段—证据追溯矩阵

| 落库部分 | 主证据 | 审慎处理 |
| --- | --- | --- |
| 接受名与分类 | The Reptile Database；NOAA 科学分类 | 不承认当前数据库未接受的 *agassizii* 亚种，不把地域深色型拆成第二物种。 |
| 全球等级、趋势、年份、criteria | IUCN 2025 当前 DOI；MTSG status；IUCN 2025 新闻 | `LC / increasing / 2025`；LC 不传 criteria；2026 版本不改评估年。 |
| 历史等级 | IUCN 2004 assessment amended 2023 | 只解释 EN A2bd 历史，不把 2023 当新评估。 |
| 区域差异 | 2026 MTSG working group 逐区综述；正式区域记录 | 11 个 RMU 分别保留等级与年份，不用全球 LC 覆盖 EN/VU/NT 区域。 |
| 分布与阶段生境 | NOAA；Wallace et al. 2023；Restrepo et al. 2026 | 国家列表仅作代表；不设全球单点中心；同时记录 marine 与 terrestrial。 |
| 体尺与寿命 | NOAA 2026 当前物种页 | 换算 3—4 ft 与 250—400 lb；“70+”只写未知寿命估计，不造上下限。 |
| 潜水 | Rice & Balazs 2008；Hazel et al. 2009 | 同时给迁徙深潜和近岸浅水；`>135` 保留 n=1/两次边界，不填规范化最大潜深。 |
| 食性 | NOAA；Reich et al. 2007 | 用 herbivore + omnivore 表达阶段/地域差异，不写终生严格食草。 |
| 生态作用 | Gulick et al. 2021；Okuyama et al. 2026 | 同时呈现补偿生长和高密度过度啃食，拒绝单向宣传结论。 |
| 繁殖 | NOAA；MTSG Southwest Pacific 资料 | “约110”“约两个月”“25—35岁”均保留近似与种群差异；不填全球固定性别分界温度。 |
| 威胁与行动 | Wallace et al. 2025；NOAA 物种页与 TED 页 | 把兼捕列为优先威胁；TED 的 97% 只限 NOAA 美国虾拖网设计口径。 |
| 法律 | 2026 CITES/CMS 正式附录；中国 2021 名录；NOAA ESA | 与 IUCN 风险评估分开；不把美国 DPS 等级写入全球 `conservation`。 |

## 最终实施与测试清单

### 数据集成

- 在 `src/data/species.ts` 顶部只新增一次 `GREEN_SEA_TURTLE_SOURCE_DATE`、`GREEN_SEA_TURTLE_CONTENT_DATE` 与 `GREEN_SEA_TURTLE_SOURCES`；不要在对象尾部复制第二份来源数组。
- 采用 `id: 'species-chelonia-mydas'`、`slug: 'green-sea-turtle'` 和 `scientificName: 'Chelonia mydas'`。
- 分类链固定为 `Chordata / Reptilia / Testudines / Cheloniidae / Chelonia`；确认分类树中物种叶与属名一致。
- 保护字段固定为 `conservation('LC', 'increasing', 2025)`，不传第四个 criteria 参数；搜索确认不存在残留的全球 `EN`、`A2bd` 或 `assessedYear: 2026`。
- `distribution.realms` 同时含 marine 与 terrestrial，不设置 `center`；代表性国家列表不能在 UI 中被描述成完整国家清单。
- `metrics` 只放成体体长、质量；寿命、成熟个体数和最大潜深留空。featured stat 的 `>135` 必须继续携带单只迁徙雌龟、两次记录的限制。
- `storySections` 保持**恰好 6 段**；`featuredStats` 前四项按当前 UI 显示顺序保留体长、体重、受限潜深和约每巢卵数。

### 图像与静态资源

- 源文件目录应包含 `01` 至 `06` 的 `*-source.png`，运行时目录包含同基名的六张 `.webp`；六个文件名与上方 `media` 一一匹配。
- 在物种源图目录写 README，保存最终提示词、科学边界、生成日期、运行时映射与 `cwebp -q 82 -m 6 -mt` 转换参数。
- 更新 `src/assets/source/README.md` 的物种源图索引，保持目录排序与现有格式。
- 用静态文件工具逐张确认 PNG 与 WebP 都是 1536×1024、8-bit sRGB、无 alpha；检查 WebP 可解码且不是误命名 PNG。
- 人工静态检查六张最终图：01 左侧负空间；02 无牙短圆喙；03 单只幼龟与马尾藻；04 单只成龟分水面换气；05 单只短尾雌龟覆巢且无可见卵；06 恰好三只幼龟朝海、一名远距红光记录员。
- 封面只放 `media.image`，gallery 只放其余五张；信用统一为 `Fauna Atlas · AI 生成原创图像`。

### 分类测试与计数

- 在 `tests/taxonomy.test.mjs` 的物种注册期望中加入 `Chelonia mydas`，验证其归属 `Chelonia` 属、`Cheloniidae` 科和 `Testudines` 目。
- 若本轮只新增绿海龟且没有其他同步物种变化，更新后的期望计数应为：**23 个物种档案、72 个分类单元、95 个总节点**；若共享工作区已有其他物种改动，应先按实际树重算而不是机械套用。
- 保留所有既有唯一性与必填字段检查：`id`、`slug`、学名、分类叶、source URL、图片路径和发布日期不能重复或缺失。

### 命令验证

- 运行 `npm run typecheck`，确认完整对象、source kind、diet type、realm、图片模板字面量和日期字面量均通过 TypeScript。
- 运行 `npm test`，确认分类树、数据完整性与既有回归测试全部通过。
- 运行 `npm run build`，确认六张 WebP 被 Vite 正常解析并进入构建产物。
- 按仓库约束只使用测试、类型检查、构建与静态资源检查；**不启动 GUI 或无头浏览器**。
- 检查 `git diff --check`，并审阅 `git diff --stat` 与目标文件清单，确保没有把临时文件、下载文献或生成器缓存纳入提交。

### TODO 收尾顺序

- 只有在数据对象、分类测试、六张源图、六张运行时图、源图 README、源图总索引、typecheck、test、build 和静态图像检查全部完成后，才从 `docs/todo.md` 删除 `绿海龟（Chelonia mydas）` 一行。
- 删除后确认 todo 的下一项成为 `网纹蟒（Malayopython reticulatus）`；研究完成但尚未集成或验证时，不提前宣告绿海龟完成。

## 最终实施建议

- 采用 2025 全球 `LC / increasing` 的当前结论，同时把 11 个 RMU 的不均衡恢复放进描述、故事与关键事实。
- 不把旧 EN A2bd 的 2023 修订发布年当成新评估，也不把 2026 数据库/新闻年份写进 `assessedYear`。
- 保留全球约 +28% 的方法边界：它是纳入评估的筑巢量变化，不是成熟个体同步普查。
- 用 `types: ['herbivore', 'omnivore']` 和阶段性说明表达食性，不使用“终生纯食草”。
- 不填寿命、成熟个体数与最大潜深 metrics；把有教育价值但样本受限的数字放在可带 note 的 featured stat。
- 六图与六段故事分别覆盖辨识、发育阶段、生态作用、迁徙换气、繁殖和保护，避免六张图都只是相似的水下游泳姿态。
