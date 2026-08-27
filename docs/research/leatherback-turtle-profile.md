# 棱皮龟（*Dermochelys coriacea*）完整档案研究

- 检索与核验日期：2026-08-27
- 推荐展示中文名：**棱皮龟**
- 推荐展示英文名：**Leatherback Turtle**
- 接受学名：***Dermochelys coriacea* (Vandelli, 1761)**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图规定科学边界
- 分类口径：The Reptile Database 当前接受名；不采用历史亚种 *D. c. schlegelii*
- 保护口径：IUCN 2013 全球评估与七个亚种群当前等级并列；2025 年 MTSG 保护优先级研究作为补充，不能替代 Red List 字段
- 时间口径：本文所称“当前”截至 **2026-08-27**；数据库仍采用 2013 全球评估，不能把网页更新、法规生效或检索年份写成 `assessedYear`

## 结论摘要

### 名称与分类

The Reptile Database 当前接受 ***Dermochelys coriacea* (Vandelli, 1761)**，原始组合为 *Testudo coriacea*，归入动物界、脊索动物门、爬行纲、龟鳖目、棱皮龟科、棱皮龟属。数据库列出 *Dermochelys coriacea schlegelii* 等历史组合，但当前记录不承认有效亚种，项目不应把大西洋与太平洋个体拆成两个分类对象。[The Reptile Database](https://reptile-database.reptarium.cz/Dermochelys/coriacea)

中国 2021 年《国家重点保护野生动物名录》采用“棱皮龟”；“革龟”可作为检索别名。NOAA 采用 “Leatherback Turtle”，其他权威资料也常用 “Leatherback Sea Turtle”。展示字段建议如下。[国家重点保护野生动物名录](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle)

```ts
names: {
  zh: '棱皮龟',
  en: 'Leatherback Turtle',
  aliases: ['革龟'],
}
```

### IUCN 当前全球字段：VU、decreasing、2013、A2bd

截至检索日，IUCN-SSC Marine Turtle Specialist Group 的当前汇总仍把全种列为 **Vulnerable（VU，易危）**。正式全球评估发布于 2013 年，种群趋势为 decreasing，标准为 **A2bd**。结构化字段应写为：[IUCN global assessment](https://doi.org/10.2305/IUCN.UK.2013-2.RLTS.T6494A43526147.en) [IUCN-SSC MTSG statuses](https://www.iucn-mtsg.org/statuses)

```ts
conservation: conservation('VU', 'decreasing', 2013, 'A2bd')
```

`A2` 指过去三代已经发生的减少，且减少原因可能尚未停止、未被充分理解或不可逆；`b` 表示适用于该类群的丰度指数，`d` 表示实际或潜在利用水平。全球评估估计三代内下降约 40%，依据主要是筑巢雌龟及相关丰度资料的模型汇总，不是对全球所有年龄级活体的同步普查，也不能换算成 `estimatedMatureIndividuals`。[IUCN categories and criteria](https://www.iucnredlist.org/resources/categories-and-criteria) [IUCN global assessment](https://doi.org/10.2305/IUCN.UK.2013-2.RLTS.T6494A43526147.en) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle)

2013 年份偏旧，需要在正文和来源标题里明示；但在 IUCN 发布新的全球重评前，它仍是本项目的当前全球结构化记录。2020 年 NOAA ESA 状态审查、2025 年 MTSG 保护优先级论文和 2026 年法规附录都没有把 IUCN 全球评估年改成各自的发布年。[NOAA 2020 status review](https://repository.library.noaa.gov/view/noaa/25629) [Wallace et al. 2025](https://doi.org/10.3354/esr01385)

### 七个亚种群：全球 VU 掩盖不了区域崩退

2013 年全球工作同时发布七个亚种群评估。西北大西洋后来于 2019 年从 LC 重评为 EN，并以勘误版 DOI 保留当前记录；其他六个区域仍使用 2013 年记录。MTSG 当前状态页给出的组合如下。[MTSG 2013 assessments update](https://www.iucn-mtsg.org/updates/2013-leatherback-red-list-assessments) [MTSG 2019 update](https://www.iucn-mtsg.org/updates/2019-red-list-updates) [IUCN-SSC MTSG statuses](https://www.iucn-mtsg.org/statuses)

| IUCN 亚种群 | 当前等级（评估年） | 证据边界 |
| --- | --- | --- |
| 东太平洋 East Pacific Ocean | **CR（2013）** | NOAA 汇总其过去三代筑巢下降超过 90%；这是区域趋势，不能写成全球 CR。 |
| 东北印度洋 Northeast Indian Ocean | **DD（2013）** | 资料不足不等于低风险；不能用邻区趋势替它补一个等级。 |
| 西北大西洋 Northwest Atlantic Ocean | **EN（2019）** | 正式重评基于截至 2017 年资料，估计巢数从约 58,000 巢/年降至约 23,000 巢/年，约下降 60%。 |
| 东南大西洋 Southeast Atlantic Ocean | **DD（2013）** | 加蓬等地有大型繁殖群，但长期趋势资料仍不足以给出受胁等级。 |
| 西南大西洋 Southwest Atlantic Ocean | **CR（2013）** | 极小繁殖群触发高危等级；不能与西北大西洋合并。 |
| 西南印度洋 Southwest Indian Ocean | **CR（2013）** | 区域规模、下降与持续威胁共同形成高风险。 |
| 西太平洋 West Pacific Ocean | **CR（2013）** | NOAA 汇总主要繁殖地下降超过 80%，且剩余筑巢高度集中于印度尼西亚、巴布亚新几内亚和所罗门群岛。 |

西北大西洋正式评估使用 `EN A2b`。它把长期巢数下降作为丰度指数，仍不等于逐只成熟个体普查。公开 PDF 中的原 DOI 后续已有勘误，来源数组应采用当前勘误版 DOI。[IUCN Northwest Atlantic assessment](https://doi.org/10.2305/IUCN.UK.2019-2.RLTS.T46967827A184748440.en) [Northwest Atlantic assessment PDF](https://www.widecast.org/Resources/Docs/Conservation/NWA/NWA%20Leatherback%20Working%20Group%20%282019%29%20IUCN%20Red%20List%20Assessment.pdf)

### 2025 年保护优先级不是新一轮 Red List

Wallace 等人的 2025 年研究由 50 个国家的 145 名专家更新 MTSG Conservation Priorities Portfolio。该框架按区域管理单元（RMU）评估风险和威胁；九个棱皮龟 RMU 中有四个被评为“高风险、高威胁”，兼捕仍是跨物种、跨区域得分最高的威胁。九个 RMU 与 2013 年七个 IUCN 亚种群的空间拆分也不同。项目可以用这项研究排序保护行动，不能据此把全球字段改成 CR、把评估年改成 2025，或把专家优先级分数展示成 IUCN 等级。[Wallace et al. 2025](https://doi.org/10.3354/esr01385) [NOAA repository record](https://repository.library.noaa.gov/view/noaa/70163)

## 分布、生活史阶段与生境

### 全球分布

棱皮龟分布于大西洋、太平洋、印度洋和地中海，拥有现生爬行动物中最广的全球海洋分布之一。筑巢集中在热带和亚热带沙滩；大幼体与成体可进入温带乃至近寒带的高生产力水域觅食。偶见高纬记录不能被写成北极或南极稳定繁殖区。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle) [The Reptile Database](https://reptile-database.reptarium.cz/Dermochelys/coriacea)

本项目应设置 `realms: ['marine', 'terrestrial']`。绝大多数生活史发生在海中，但雌龟必须上岸产卵，卵与刚出巢幼龟经历关键陆地阶段。分布跨六个有人居住大洲，不能设置一个会被误解为全球中心的 `distribution.center`。`countries` 只列代表性范围国，不宣称是完整国家清单。

### 阶段性生境

1. **大洋锋面、汇聚带和上升流区**：成体沿胶质浮游动物聚集的动态水团觅食，也是跨洋迁徙的主要海域。锋面位置随季节和海况改变，不能画成固定“水母草原”。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle) [Benson et al. 2011](https://doi.org/10.1890/ES11-00053.1)
2. **温带与近寒带陆架觅食区**：北大西洋个体可在加拿大近海取食，西太平洋个体可到北美加利福尼亚洋流区。体型、脂肪层、循环调节和行为共同帮助成体在远低于体温的海水中活动。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle) [Casey et al. 2014](https://doi.org/10.1242/jeb.100347)
3. **跨洋通道与垂直水柱**：迁徙会跨越公海和多国管辖区。潜水多发生在上层 300 米内，少数极深潜水进入中深层；深度纪录不应被当作日常栖息层。[Houghton et al. 2008](https://doi.org/10.1242/jeb.020065)
4. **热带与亚热带动态沙滩**：短尾雌龟夜间选择可挖掘、能形成深卵室的沙地。深水接近岸、海滩宽度、坡度、潮汐、侵蚀、淹水、灯光与硬质护岸都会影响上岸和巢存活。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle)

早期幼体离岸后的分布和死亡过程仍有明显知识空白。档案可写“大洋幼体阶段研究不足”，不要编造固定漂流年数、固定海盆路线或所有幼体共享的表层生境。[NOAA 2020 status review](https://repository.library.noaa.gov/view/noaa/25629)

## 外形、体尺与鉴别边界

### 成体共同形态

- 背部黑至深蓝黑，布有细小、不规则的白色或淡色斑点；腹面偏粉白。许多成体头顶有醒目的粉红色斑块。
- 外表覆盖连续、坚韧而有弹性的皮肤，皮下甲由许多互锁的小型真皮骨构成；它有背甲结构，但没有其他海龟那种外露硬质盾片。
- 背部必须是 **恰好七条** 从前向后延伸的纵棱，汇向钝尖后缘。躯干宽厚、略呈纺锤形。
- 恰好两只很长、前缘收尖的前鳍肢与两只较短的桨状后鳍肢；成体鳍肢无爪。
- 上颌有两个平滑尖突和中央深缺口，下颌前端钩起。口腔与咽部有向后的角质乳突，用于留住柔软猎物；这些结构都不是独立牙齿。

上述形态可由 NOAA 与美国鱼类及野生动物管理局交叉核对。英文资料常说“lacks a hard shell”，准确的中文图像边界应写“没有外露硬质盾片与典型硬壳”，不能误成“没有甲结构”。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle) [U.S. Fish & Wildlife Service](https://www.fws.gov/species/leatherback-sea-turtle-dermochelys-coriacea)

### 幼龟与性别边界

刚出巢幼龟整体深黑，七条背棱及鳍肢边缘有明显淡白条纹，前鳍肢相对身体已很长。它们不能被画成没有浅色棱线的微缩成体。筑巢者必须是尾短、体幅宽大的雌龟；海中成年雄龟尾部通常更长，图像不应把长尾雄龟放在沙滩产卵。[U.S. National Park Service, Padre Island](https://www.nps.gov/pais/learn/nature/leatherback.htm) [U.S. National Park Service, Cape Hatteras](https://www.nps.gov/caha/learn/nature/leatherbackseaturtle.htm)

### 与其他海龟及海洋动物的图像边界

- 不能出现绿海龟、赤蠵龟或玳瑁式硬质盾片、覆瓦花纹或褐绿硬壳。
- 不能出现玳瑁式细长鹰钩喙、赤蠵龟式巨大硬头或陆龟趾状步足。
- 不能把七条纵棱画成六条、八条、鳄类骨板、鲸类皱褶或机械装甲。
- 不能添加鱼尾、背鳍、鳃、鲸类喷水孔、持续气泡、额外鳍肢或鳍肢爪。
- 口腔乳突不能画成哺乳动物牙列；上下颌也不能出现一排排独立尖牙。

### 体尺字段

NOAA Quick Facts 给出成体长度 **5 至 6 英尺**、质量 **750 至 1,000 磅**，四舍五入换算为 **152 至 183 厘米、340 至 454 千克**。这是政府物种页的典型展示范围，不是全球极值，也没有明确限定为直线背甲长。FWS 页面给出更宽的 4 至 8 英尺和 500 至 2,000 磅，适合在正文说明巨大个体，不适合作为标准成年个体的规范化范围。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle) [U.S. Fish & Wildlife Service](https://www.fws.gov/species/leatherback-sea-turtle-dermochelys-coriacea)

| 字段 | 推荐值 | 证据边界 |
| --- | --- | --- |
| `measurements.length` | 152 至 183 cm | NOAA 5 至 6 ft 的四舍五入换算；写“成体展示长度”，不写“最大甲长”。 |
| `measurements.weight` | 340 至 454 kg | NOAA 750 至 1,000 lb 的四舍五入换算；不是全种极值。 |
| `metrics.adultLengthCm` | `[152, 183]` | 只用于粗粒度比较。 |
| `metrics.adultMassKg` | `[340, 454]` | 只用于粗粒度比较。 |
| `metrics.lifespanYears` | 不填 | 寿命未知；45 至 50 年或 50 年以上均为估计。 |
| `metrics.maxDiveDepthM` | 不填 | 1,250 米来自研究样本中的纪录潜水，不是物种生理上限或日常深度。 |
| `metrics.estimatedMatureIndividuals` | 不填 | 全球约 40% 是多代趋势估计，不是成熟个体数。 |

NOAA 给出的性成熟年龄估计范围是 9 至 20 岁，寿命估计为 45 至 50 年或更长。两者都存在较大不确定性，不应写成所有个体固定在 9 岁成熟、50 岁死亡，也不应制造寿命上下限字段。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle)

## 体温、潜水与远距离迁徙

### 在冷水中维持高于环境的体温

棱皮龟仍是外温爬行动物，但大型身体的低表面积体积比、脂肪与结缔组织隔热、血流调节、游泳和消化产热、晒暖式表层停留共同形成区域性内温和巨温效应。不能把它简化成“像鲸一样恒温”。[Casey et al. 2014](https://doi.org/10.1242/jeb.100347)

Casey 等人对五只高纬觅食成体的自由游泳记录显示，核心体温为 **25.4 至 27.3°C**，周围海水为 **13.6 至 15.9°C**，体内外温差为 **10.7 至 12.1°C**。这是五只约 467±76 千克个体的研究范围，适合讲解机制，不是全球恒定体温设定。[Casey et al. 2014](https://doi.org/10.1242/jeb.100347)

### 1,250 米是罕见纪录，不是日常潜深

Houghton 等人分析 13 只成年棱皮龟、累计 9.6 年遥测中的 26,146 次潜水，研究样本最深纪录为 **1,250 米**。其中 **99.6%** 的潜水浅于 300 米，只有 0.4% 超过 300 米；极深潜水多发生于迁移阶段，作者讨论了探索胶质猎物等可能功能，未把它认定为常规觅食深度。[Houghton et al. 2008](https://doi.org/10.1242/jeb.020065)

NOAA 面向公众把最深纪录概括为“接近 4,000 英尺”，并给出最长约 85 分钟的潜水。featured stat 可采用原始研究的 1,250 米，同时保留样本和 0.4% 边界；规范化 `metrics.maxDiveDepthM` 留空。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle) [Houghton et al. 2008](https://doi.org/10.1242/jeb.020065)

### 跨洋路线随繁殖群和季节改变

Benson 等人在 2000 至 2007 年间部署 126 个卫星标签，发现西太平洋不同季节繁殖群使用不同迁徙通道。部分从巴布亚或印度尼西亚繁殖地前往东北太平洋加利福尼亚洋流区的路线超过 **10,000 千米**，耗时约 10 至 12 个月。这个数适合展示棱皮龟的跨洋能力，不能写成每只棱皮龟每年都走同一路线。[Benson et al. 2011](https://doi.org/10.1890/ES11-00053.1)

NOAA 另概括部分个体一年游过 10,000 英里，繁殖地与觅食地之间的路线平均可达单程 3,700 英里。由于研究海区、时间窗口和统计口径不同，项目不要把“10,000 千米路线”和“10,000 英里/年”合并成一个精确全球平均值。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle)

## 食性与生态作用

棱皮龟是高度专化的肉食性海龟，主要摄食水母、樽海鞘及其他胶质浮游动物。平滑的双尖突上颌、锐利颌缘和向后角质乳突有助于抓住湿滑猎物；它缺少适合压碎硬壳猎物的强硬喙。结构化类型建议只写 `types: ['carnivore']`，不要混入海草、藻类、硬壳蟹类或鱼类作为典型食物。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle)

Heaslip 等人在加拿大新斯科舍外海给 19 只棱皮龟安装动物视频记录器，平均每只获得约 1 小时 53 分钟影像，记录 601 次捕食。该地点狮鬃水母占观测食物的 83% 至 100%，模型估计平均每天摄入约 330 千克湿重水母，最高约 840 千克，约为体重的 73%，提供估算日代谢需求的 3 至 7 倍能量。[Heaslip et al. 2012](https://doi.org/10.1371/journal.pone.0033259)

330 千克是一个高纬季节性觅食地、19 只个体、短时视频与能量模型的结果。它可以解释低能量胶质猎物为何要求高吞吐量，不能写成全球每只棱皮龟每天固定吃 330 千克，也不应成为规范化 metric。现有证据支持它把胶质浮游动物能量转入大型脊椎动物食物网，但不足以保证“保护棱皮龟就能控制全球水母暴发”。

## 繁殖、孵化与幼龟入海

雌龟在热带和亚热带海滩夜间上岸，先挖大体坑，再用后鳍肢形成较深卵室。雌龟通常每 2 至 4 年返回繁殖，一个繁殖季多次筑巢，间隔约 8 至 12 天，每巢约 100 枚卵；孵化约需两个月。以上均为 NOAA 跨种群概括，实际巢数、卵数和时间会随地点与个体改变。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle)

棱皮龟一巢常同时包含正常有卵黄的大卵和若干较小的无卵黄卵。功能尚未完全解决，图文不应把所有约 100 枚都称为可发育胚胎，也不要为“无卵黄卵保护巢室”给出没有直接证据的确定解释。[U.S. Fish & Wildlife Service](https://www.fws.gov/species/leatherback-sea-turtle-dermochelys-coriacea)

和其他海龟一样，沙温影响幼龟性别，偏暖条件通常产生更多雌性；过高温度会直接降低胚胎与幼龟存活。海平面上升、侵蚀、风暴和淹水也会冲刷或淹没巢。不同海滩热环境不同，档案不填写一个全球固定的“性别分界温度”。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle)

## 威胁、法律保护与行动

### 主要威胁与证据边界

1. **渔业兼捕**：刺网、延绳钓、拖网、笼具和垂直浮标绳会造成溺亡、吞钩、鳍肢缠绕或延迟死亡。NOAA 把兼捕列为首要威胁，2025 年 MTSG 全球优先级研究也把它评为跨区域最高威胁。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle) [Wallace et al. 2025](https://doi.org/10.3354/esr01385)
2. **直接捕杀与采卵**：多国法律已经禁止或限制捕杀，但部分地点仍为食用和销售猎杀成龟、采集卵。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle)
3. **繁殖海滩退化**：滨海开发、人工照明、硬质护岸、采砂和车辆会阻止母龟上岸、压实或侵占巢区并误导幼龟。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle)
4. **气候变化**：升温改变孵化成功和性别比，海平面上升、风暴与侵蚀减少可用沙滩；海洋变暖还会改变猎物和觅食区分布。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle)
5. **海洋废弃物与污染**：塑料袋、气球、钓线、塑料碎片、油和漂浮焦油可被误食，遗失渔具还会缠绕。可确认误食风险，不必断言它只靠外形把每件塑料都识别成水母。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle)
6. **船只撞击**：近岸繁殖迁徙、港口与航道附近的水面换气增加碰撞风险，筑巢雌龟在近岸季节尤其暴露。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle)

### 国际、中国与美国法律状态

- CITES 2026 年 3 月 5 日生效附录将 *Dermochelys coriacea* 列入附录 I。它严格管制以商业为主的国际贸易，但特定非商业或科研移动仍受许可证和公约条款约束，不能简化成“任何跨境移动绝对非法”。[CITES 2026 appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)
- CMS 2026 年 6 月 27 日生效附录继续把 *Dermochelys coriacea* 列入附录 I，并在附录 II 以棱皮龟科层级覆盖相关迁徙保护合作。CMS 等级是迁徙物种公约状态，不是 IUCN 等级。[CMS 2026 appendices](https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf)
- 中国 2021 年名录将棱皮龟列为国家一级保护野生动物。全球 IUCN VU 不会降低国内法律保护级别。[国家重点保护野生动物名录](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml)
- 美国 ESA 将全范围棱皮龟列为 endangered。这是美国法律状态，也不能覆盖产品里的 IUCN `VU` 字段。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle)

### 推荐保护行动

- 按渔具与海区验证圆形钩、饵料调整、网具改造、弱链、时空或动态关闭、拖网 TED、船上安全解脱与放生流程；不要把单一装置宣称为所有兼捕渔业的通用解法。
- 在繁殖海滩保护短尾雌龟、卵室、天然沙丘和足够宽的干沙；限制车辆、采砂、白光、硬质护岸与无评估工程。
- 只有在淹水、施工、偷猎等具体现场风险高于搬迁风险时才移动巢，并由受训团队保留深度、朝向、时间和温度记录；不把全部巢常规迁入孵化场。
- 与沿海社区合作降低成龟捕杀和采卵，执行国内法、CITES 贸易管制与 CMS 跨国协作。
- 清除遗失渔具、钓线、气球和塑料，追踪污染来源；在近岸热点实施船只减速、瞭望和避让。
- 按遗传种群和 RMU 保持可比的长期巢数、海上丰度、兼捕、遥测和气候监测，补足雄龟、幼龟和非繁殖区资料。
- 以自然动态海滩和多处备用繁殖地分散升温、海平面与风暴风险，同时监测沙温、淹水和幼龟产出。

这些行动对应 NOAA 当前管理建议、2020 ESA 状态审查与 2025 MTSG 区域优先级框架。具体渔具和巢管理必须依据当地试验与风险评估实施。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/leatherback-turtle) [NOAA 2020 status review](https://repository.library.noaa.gov/view/noaa/25629) [Wallace et al. 2025](https://doi.org/10.3354/esr01385)

## 常见网络数字审计

| 常见说法 | 结论 | 本项目处理 |
| --- | --- | --- |
| “棱皮龟全球已是 CR” | 错 | 当前全球为 VU；东太平洋、西南大西洋、西南印度洋和西太平洋亚种群为 CR。 |
| “2013 太旧，所以可以改用 2025” | 错 | 2013 记录虽需更新提示，但仍是当前 IUCN 全球评估；2025 CPP 不是 Red List 重评。 |
| “全球只剩某个精确数量” | 不支持 | 全球约 40% 是三代趋势估计，不填成熟个体总数。 |
| “成体都重 2,000 磅” | 错 | 2,000 磅属政府页宽极值；规范化采用 NOAA 典型 750 至 1,000 磅。 |
| “平时都潜 1,250 米” | 错 | 13 只成体研究中只有 0.4% 潜水超过 300 米；1,250 米是样本纪录。 |
| “每只每天固定吃 330 千克水母” | 错 | 数字来自加拿大一处、19 只个体的短时视频与能量模型。 |
| “它完全没有壳” | 易误导 | 它有皮下真皮骨构成的背甲，但没有其他海龟的外露硬质盾片。 |
| “嘴里长满牙齿” | 错 | 颌尖突和咽部乳突是角质结构，不是独立牙列。 |
| “它和哺乳动物一样恒温” | 错 | 体型、隔热、代谢、循环和行为使成体可保持高于环境的体温，不能等同哺乳动物恒温机制。 |
| “吃塑料只因塑料看起来像水母” | 证据过度 | 可确认塑料误食及死亡风险；视觉、气味和运动等机制不宜归结为唯一原因。 |
| “保护棱皮龟可控制全球水母暴发” | 不支持 | 它是胶质浮游动物捕食者，但没有证据保证全球尺度的单向控制。 |
| “每巢约 100 枚都能发育” | 错 | 卵数与孵化率变化很大，且棱皮龟巢常含无卵黄小卵。 |

## 六帧原创图像的科学边界

### 所有帧共用约束

- 画幅固定 3:2 横图，源图与运行时图目标尺寸 1536×1024；自然历史纪录片式写实光线，不加文字、数字、图例、标志、水印或拼贴边框。
- 每只成体都应是深黑至蓝黑、细小淡斑、连续皮肤覆盖的柔韧背甲，背部 **恰好七条纵棱**，没有外露硬质盾片。
- 每只龟恰好两只长前鳍肢和两只短后鳍肢，成年鳍肢无爪；没有鱼尾、背鳍、鳃、喷水孔或额外肢体。
- 头部可见时保留两枚平滑上颌尖突与中央缺口，不画独立牙齿。粉红头斑可见但不应夸张成发光标记。
- 不把水母、塑料、渔具、卵、幼龟、成体和人类救援混成一个“信息全景”。每帧只讲一个可核验瞬间。

### 逐帧场景、必需项与禁区

| 帧 | 文件名 | 画面任务 | 必需项 | 禁区 | 焦点 |
| --- | --- | --- | --- | --- | --- |
| 01 | `01-open-ocean-ridged-swim.webp` | 封面身份照 | 单只完整成体在开放蓝水游向左前方；主体置右，左侧保留约 42% 安静负空间；七棱、长前鳍、淡斑清楚 | 硬壳盾片、成群海龟、潜水员、船、文字 | `{ x: 0.72, y: 0.56 }` |
| 02 | `02-seven-ridges-clawless-flippers.webp` | 形态鉴别 | 单只成体三分之四俯视；恰好七棱、粉红头斑、两长前鳍和两短后鳍完整可数，无爪 | 盾片、额外鳍肢、截断身体、夸张装甲 | `{ x: 0.60, y: 0.50 }` |
| 03 | `03-jellyfish-foraging.webp` | 专食胶质猎物 | 单只成体接近并咬住恰好一只狮鬃水母；平滑双尖突颌缘可见，触手自然 | 塑料袋、牙列、血腥触手、鱼群、第二只龟 | `{ x: 0.62, y: 0.52 }` |
| 04 | `04-deep-transit-dive.webp` | 迁徙期深潜 | 单只成体朝深蓝水柱斜向下潜，明亮海面位于高处；无海底，表现尺度与孤独感 | 深度数字、仪表、潜艇、鲸、海底、持续气泡 | `{ x: 0.61, y: 0.61 }` |
| 05 | `05-night-nest-digging.webp` | 夜间筑巢 | 恰好一只短尾雌龟在暗色热带沙滩挖深卵室或覆巢，宽大体坑和鳍痕真实 | 可见卵、幼龟、白色闪光、人手接触、长尾雄龟 | `{ x: 0.63, y: 0.58 }` |
| 06 | `06-striped-hatchlings-dark-beach.webp` | 幼龟入海 | 恰好三只深黑幼龟朝天然低海平线爬行；七条淡棱线、淡色鳍缘和长前鳍清楚 | 成龟、蛋壳堆、人群、白灯、城市灯带、错误硬壳 | `{ x: 0.55, y: 0.62 }` |

### 可直接用于生成的最终英文提示词

#### 01 封面：开放海洋中的七棱成体

```text
Create a photorealistic natural-history documentary image in a 3:2 horizontal frame, 1536x1024. Show exactly one complete adult leatherback turtle, Dermochelys coriacea, swimming through clear open-ocean blue water toward the left foreground. Place the turtle on the right side around x 0.72, y 0.56 and preserve roughly 42 percent calm, uncluttered blue negative space on the left for interface copy. The animal has continuous dark blue-black leathery skin with fine irregular pale speckles, exactly seven longitudinal dorsal ridges converging toward a blunt rear point, a subtle pink patch on the crown, exactly two extremely long tapered front flippers and two shorter paddle-shaped rear flippers, all clawless. Soft sun shafts from the surface, realistic suspended particles, restrained color, full body inside frame. No hard shell scutes, no green or brown plated shell, no teeth, no extra limbs, no fish tail, no dorsal fin, no gills, no blowhole, no divers, no boats, no text, no logo, no watermark.
```

#### 02 形态：七棱与无爪长鳍

```text
Create a photorealistic 3:2 horizontal wildlife image, 1536x1024, of exactly one adult leatherback turtle seen from a slightly elevated three-quarter angle in clean ocean water. Center the anatomical study near x 0.60, y 0.50 with the entire animal visible. Make exactly seven raised longitudinal ridges clearly countable beneath continuous dark leathery skin; add fine pale spotting and a small natural pink crown patch. Show exactly two very long tapered front flippers and two shorter rear paddles, with no claws. The carapace ends in a blunt tapered point and has no external hard scutes. Natural underwater daylight, accurate proportions, quiet background. No plated turtle shell, no overlapping scales, no armor, no cropped flippers, no extra limbs, no teeth, no labels, no text, no watermark.
```

#### 03 食性：捕食一只水母

```text
Create a photorealistic marine natural-history image in a 3:2 horizontal frame, 1536x1024. Show exactly one adult leatherback turtle approaching and beginning to grasp exactly one lion's mane jellyfish in open blue water. Place the interaction near x 0.62, y 0.52. Preserve the turtle's dark flexible skin, fine pale speckles, exactly seven dorsal ridges, subtle pink crown patch, two long clawless front flippers and two short rear flippers. From a natural side three-quarter view, show the smooth upper jaw with two pointed cusps and a central notch, but no individual teeth; any backward throat papillae must remain subtle and anatomically plausible. The jellyfish and tentacles are intact, translucent and naturally drifting. No plastic bags, no balloons, no blood, no torn tentacles, no fish school, no second turtle, no hard shell scutes, no text, no watermark.
```

#### 04 潜水：深蓝水柱中的迁徙深潜

```text
Create a photorealistic 3:2 horizontal ocean documentary image, 1536x1024. Show exactly one complete adult leatherback turtle descending diagonally into a vast darkening blue water column during an uncommon deep transit dive. Put the turtle around x 0.61, y 0.61; the distant sunlit surface remains high above, with no seafloor visible. Maintain exactly seven dorsal ridges, dark speckled leathery skin, a subtle pink crown patch, two long clawless front flippers and two shorter rear paddles. Use a realistic depth gradient and sparse particles to convey scale, not fantasy darkness. No depth gauge, numbers, infographic, submarine, whale, scuba diver, seafloor, continuous bubble trail, hard shell scutes, text, logo or watermark.
```

#### 05 繁殖：夜间挖巢

```text
Create a photorealistic night wildlife image in a 3:2 horizontal frame, 1536x1024. Show exactly one large short-tailed female leatherback turtle on a dark tropical sandy beach, using her rear flippers to dig a deep egg chamber or cover a completed nest. Place her around x 0.63, y 0.58. Show a broad body pit, realistic sweeping flipper tracks, dark leathery skin with fine pale speckles, exactly seven dorsal ridges, a small pink crown patch, two very long clawless front flippers and two shorter rear paddles. Use dim moonlight and natural horizon glow with no flash. No visible eggs, no hatchlings, no people, no white artificial light, no long male tail, no hard shell scutes, no staged rescue, no text, no watermark.
```

#### 06 幼龟：带淡色棱线的入海阶段

```text
Create a photorealistic low-angle night natural-history image in a 3:2 horizontal frame, 1536x1024. Show exactly three leatherback hatchlings crawling across dark damp sand toward a low natural ocean horizon. Group them around x 0.55, y 0.62 while keeping their bodies individually readable. Each hatchling is deep black with exactly seven pale longitudinal ridge stripes, pale margins on the flippers, and very long front flippers relative to its small body. Moon and sky glow reflect faintly on the water; the route to the sea remains dark and unobstructed. No adult turtle, no visible eggs, no shell pile, no people, no handling, no flashlight, no city light band, no plated hard shells, no extra limbs, no text, no logo, no watermark.
```

### 最终图片静态验收

- 六张图均为 1536×1024、3:2、8-bit sRGB、可解码的 WebP；源 PNG 与运行时 WebP 基名一致。
- 01 主体在右，左侧负空间未被水母、鱼群、光柱或海底占满。
- 02 能明确数出七条背棱和四个鳍肢；四肢无爪，背部无盾片。
- 03 只有一只龟和一只水母，颌缘无独立牙列，也没有把塑料当作食物道具。
- 04 没有海底、深度数字或设备；题注必须说极深潜水罕见，不能把画面当作日常深度。
- 05 只有一只短尾雌龟与一个筑巢阶段，画面不同时出现外露卵和幼龟。
- 06 恰好三只幼龟，七条淡棱线和淡色鳍缘清楚，天然海向地平线没有白光干扰。
- 六帧均无多余鳍肢、鱼尾、背鳍、鳃、喷水孔、硬壳盾片、文字、标志或水印。

## 字段与证据追溯矩阵

| 落库部分 | 主证据 | 审慎处理 |
| --- | --- | --- |
| 接受名与分类 | The Reptile Database；NOAA 科学分类 | 采用单型种对象，不承认历史 `schlegelii` 亚种。 |
| 全球等级、趋势、年份、criteria | IUCN 2013 DOI；MTSG status | 固定 `VU / decreasing / 2013 / A2bd`；明示需更新，但不擅改年份。 |
| 区域风险 | MTSG 2013、2019 更新；NW Atlantic 正式评估 | 七个 IUCN 亚种群分别保留 CR、EN、DD；不把区域 CR 写成全球 CR。 |
| 当前保护优先级 | Wallace et al. 2025 | 九个 RMU 的 CPP 风险威胁评分只用于行动背景，不冒充 Red List。 |
| 分布与生境 | NOAA；Reptile Database；Benson et al. 2011 | 代表国家不等于完整范围；不设置全球单点中心。 |
| 体尺与寿命 | NOAA；FWS | 采用 NOAA 典型成体展示范围；寿命与成熟年龄只写估计，不进 metrics。 |
| 体温 | Casey et al. 2014 | 保留五只成体、海温和体温范围；不写成哺乳动物式恒温。 |
| 潜水 | Houghton et al. 2008；NOAA | 1,250 米保留 13 只样本和 0.4% 边界，不填 `maxDiveDepthM`。 |
| 迁徙 | Benson et al. 2011；NOAA | `>10,000 km` 是特定西太平洋路线，不写全种平均。 |
| 食性与摄入量 | NOAA；Heaslip et al. 2012 | 肉食、胶质猎物；330 千克/日保留地点、样本与模型边界，不进 metrics。 |
| 繁殖 | NOAA；FWS | 2 至 4 年、8 至 12 天、约 100 枚、约两个月均保留近似和种群差异。 |
| 威胁与行动 | NOAA；2020 status review；Wallace et al. 2025 | 兼捕优先；渔具与移巢方案需当地验证。 |
| 法律 | CITES 2026；CMS 2026；中国 2021 名录；NOAA ESA | 与 IUCN 风险评估分开；不把法律等级写入 `conservation`。 |

## 实施与测试清单

### 数据集成

- 在 `src/data/species.ts` 只声明一次 `LEATHERBACK_TURTLE_SOURCE_DATE`、`LEATHERBACK_TURTLE_CONTENT_DATE` 与 `LEATHERBACK_TURTLE_SOURCES`。
- 使用 `id: 'species-dermochelys-coriacea'`、`slug: 'leatherback-turtle'`、`scientificName: 'Dermochelys coriacea'`。
- 分类链固定为 `Chordata / Reptilia / Testudines / Dermochelyidae / Dermochelys`。
- 保护字段固定为 `conservation('VU', 'decreasing', 2013, 'A2bd')`；搜索确认未残留全种 `CR`、`EN` 或 `assessedYear: 2025/2026`。
- `distribution.realms` 同时包含 marine 与 terrestrial，不设置 `center`；国家列表在文案中明确为代表性范围。
- `metrics` 只放成年体长和质量；寿命、成熟个体数及最大潜深留空。featured stat 的 1,250 米和 >10,000 千米必须保留各自研究边界。
- `storySections` 恰好 6 段；`featuredStats` 恰好保留体长、体重、纪录潜深和受限路线四项。

### 图像与静态资源

- 源图目录包含 01 至 06 的 `*-source.png`，运行时目录包含同基名 `.webp`；六个文件名与下方 `media` 一一对应。
- 物种源图 README 保存最终提示词、科学边界、日期、映射和实际转换参数；同步更新总源图索引。
- 用静态文件工具检查六组 PNG/WebP 的格式、1536×1024 尺寸、8-bit sRGB、解码和无意外 alpha；不使用 GUI 或无头浏览器。
- 封面只放 `media.image`，gallery 只放其余五张；信用统一为 `Fauna Atlas · AI 生成原创图像`。

### 分类测试、计数与命令

- 在分类测试注册 `Dermochelys coriacea`，核验属 `Dermochelys`、科 `Dermochelyidae`、目 `Testudines`。
- 共享工作区可能同时新增另一物种，测试计数应从实际分类树重算，不能复制研究时的旧总数。
- 运行 `npm run typecheck`、`npm test`、`npm run build` 与 `git diff --check`；按仓库约束只做测试、构建和静态资源检查。
- 数据对象、六张源图、六张运行时图、README、索引和全部验证完成后，才从 `docs/todo.md` 删除本物种条目。

## 可直接落库字段建议

以下来源常量和对象覆盖当前 `Species` 必填字段。完整对象只通过 `sources: LEATHERBACK_TURTLE_SOURCES` 引用，不复制第二份数组。图片目录统一使用 `leatherback-turtle`。

### `SpeciesSource[]`

```ts
const LEATHERBACK_TURTLE_SOURCE_DATE = '2026-08-27' as const;
const LEATHERBACK_TURTLE_CONTENT_DATE = '2026-08-27' as const;

const LEATHERBACK_TURTLE_SOURCES = [
  {
    title: 'The Reptile Database — Dermochelys coriacea (Vandelli, 1761)',
    url: 'https://reptile-database.reptarium.cz/Dermochelys/coriacea',
    kind: 'taxonomy',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Dermochelys coriacea global assessment (2013)',
    url: 'https://doi.org/10.2305/IUCN.UK.2013-2.RLTS.T6494A43526147.en',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN-SSC Marine Turtle Specialist Group — Red List assessments',
    url: 'https://www.iucn-mtsg.org/statuses',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN-SSC MTSG — 2013 leatherback Red List assessments',
    url: 'https://www.iucn-mtsg.org/updates/2013-leatherback-red-list-assessments',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN-SSC MTSG — 2019 Northwest Atlantic leatherback update',
    url: 'https://www.iucn-mtsg.org/updates/2019-red-list-updates',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Northwest Atlantic Dermochelys coriacea assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-2.RLTS.T46967827A184748440.en',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Leatherback Turtle (updated 3 August 2026)',
    url: 'https://www.fisheries.noaa.gov/species/leatherback-turtle',
    kind: 'general',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'NOAA and U.S. Fish & Wildlife Service — 2020 status review of the leatherback sea turtle',
    url: 'https://repository.library.noaa.gov/view/noaa/25629',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'U.S. Fish & Wildlife Service — Leatherback Sea Turtle',
    url: 'https://www.fws.gov/species/leatherback-sea-turtle-dermochelys-coriacea',
    kind: 'general',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Wallace et al. 2025 — Updated global conservation status and priorities for marine turtles',
    url: 'https://doi.org/10.3354/esr01385',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Benson et al. 2011 — Large-scale movements and high-use areas of western Pacific leatherbacks',
    url: 'https://doi.org/10.1890/ES11-00053.1',
    kind: 'distribution',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Houghton et al. 2008 — Deep diving by leatherback turtles',
    url: 'https://doi.org/10.1242/jeb.020065',
    kind: 'ecology',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Heaslip et al. 2012 — Jellyfish consumption by leatherback turtles',
    url: 'https://doi.org/10.1371/journal.pone.0033259',
    kind: 'ecology',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'Casey et al. 2014 — Thermal biology of free-swimming adult leatherbacks',
    url: 'https://doi.org/10.1242/jeb.100347',
    kind: 'ecology',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: 'CMS — Appendices I and II effective 27 June 2026',
    url: 'https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局、农业农村部 — 国家重点保护野生动物名录（2021年第3号）',
    url: 'https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml',
    kind: 'conservation',
    accessedAt: LEATHERBACK_TURTLE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

### 完整 `Species` 对象

```ts
{
  id: 'species-dermochelys-coriacea',
  slug: 'leatherback-turtle',
  names: {
    zh: '棱皮龟',
    en: 'Leatherback Turtle',
    aliases: ['革龟'],
  },
  scientificName: 'Dermochelys coriacea',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Reptilia', '爬行纲'),
    taxon('Testudines', '龟鳖目'),
    taxon('Dermochelyidae', '棱皮龟科'),
    taxon('Dermochelys', '棱皮龟属'),
  ),
  conservation: conservation('VU', 'decreasing', 2013, 'A2bd'),
  distribution: {
    realms: ['marine', 'terrestrial'],
    continents: ['亚洲', '非洲', '欧洲', '北美洲', '南美洲', '大洋洲'],
    regions: [
      '北大西洋、加勒比海与地中海',
      '南大西洋与西非沿岸',
      '印度洋',
      '东太平洋与西太平洋',
      '温带与近寒带高生产力觅食水域',
      '热带与亚热带繁殖海滩',
    ],
    countries: [
      '中国',
      '印度',
      '斯里兰卡',
      '印度尼西亚',
      '巴布亚新几内亚',
      '所罗门群岛',
      '澳大利亚',
      '美国',
      '加拿大',
      '墨西哥',
      '哥斯达黎加',
      '巴拿马',
      '特立尼达和多巴哥',
      '圭亚那',
      '苏里南',
      '巴西',
      '加蓬',
      '加纳',
      '南非',
      '莫桑比克',
    ],
    range:
      '广布于大西洋、太平洋、印度洋和地中海；筑巢主要发生在热带与亚热带沙滩，大幼体和成体可迁往温带及近寒带的陆架、大洋锋面和上升流区觅食。所列国家仅为代表性范围国，不是完整分布或偶见记录清单。',
  },
  habitats: [
    {
      name: '大洋锋面、汇聚带与上升流区',
      realm: 'marine',
      description:
        '胶质浮游动物随动态水团聚集，是成体跨洋迁徙和觅食的重要环境；位置随季节、洋流与海况改变。',
      isPrimary: true,
    },
    {
      name: '温带与近寒带陆架觅食水域',
      realm: 'marine',
      description:
        '大幼体和成体可利用加拿大外海、加利福尼亚洋流等高生产力海区，凭体型、隔热、循环和行为维持高于环境的体温。',
    },
    {
      name: '跨洋迁徙通道与深水水柱',
      realm: 'marine',
      description:
        '连接繁殖地与季节性觅食区，跨越公海和多国水域；绝大多数记录潜水浅于300米，极深潜水罕见。',
    },
    {
      name: '热带与亚热带沙质繁殖海滩',
      realm: 'terrestrial',
      description:
        '雌龟夜间挖体坑和深卵室；足够宽的干沙、天然暗夜、适宜温度及不过度淹水共同影响繁殖成功。',
    },
  ],
  measurements: {
    length: {
      min: 152,
      max: 183,
      unit: 'cm',
      note: 'NOAA成体5至6英尺展示范围的四舍五入换算，不代表全球最大背甲长。',
    },
    weight: {
      min: 340,
      max: 454,
      unit: 'kg',
      note: 'NOAA成体750至1,000磅展示范围的四舍五入换算，不代表全球极值。',
    },
  },
  diet: {
    types: ['carnivore'],
    foods: ['水母', '狮鬃水母', '海月水母', '樽海鞘', '其他胶质浮游动物'],
    description:
      '高度专食柔软胶质猎物的肉食性海龟；双尖突颌缘和向后角质乳突帮助留住水母与樽海鞘，但这些结构不是牙齿，也不适合压碎硬壳猎物。',
  },
  activity: ['昼夜活动随觅食条件而变', '跨洋洄游', '深潜与表层觅食', '单独活动为主', '雌龟夜间上岸筑巢'],
  tags: ['海龟', '海洋爬行动物', '胶质浮游动物捕食者', '跨洋洄游', '深潜', '七条背棱', '温度依赖型性别决定'],
  summary: '拥有七条纵棱和柔韧皮质背甲、以水母等胶质猎物为主食，并跨越热带繁殖海滩与高纬觅食区的最大型海龟。',
  description:
    '棱皮龟没有其他海龟那样外露的硬质盾片，深色皮肤下的真皮骨构成柔韧背甲，七条纵棱与极长无爪前鳍肢适合远洋游动。成体能在冷水觅食，部分西太平洋路线超过一万千米，少数潜水达到1,250米；日常潜水远浅于这项纪录。它以水母和樽海鞘等胶质动物为主食，雌龟每隔数年返回热带或亚热带海滩夜间产卵。IUCN当前全球记录为2013年易危且下降，七个亚种群中有四个极危、一个濒危和两个数据缺乏，渔业兼捕仍是首要保护压力。',
  storySections: [
    {
      key: 'identity',
      label: '辨识',
      title: '柔韧背甲上，恰好七条纵棱',
      body:
        '深黑皮肤下的小型真皮骨拼成背甲，外表没有硬质盾片；七条纵棱汇向钝尖后缘。两只极长前鳍肢和两只短后鳍肢都无爪，头顶常有粉红斑。图像一旦加上褐绿硬壳或把棱数画错，就失去本种最可靠的身份线索。',
    },
    {
      key: 'gelatinous-diet',
      label: '食性',
      title: '低能量猎物，需要高吞吐量',
      body:
        '棱皮龟以水母、樽海鞘等胶质动物为主。加拿大一处研究用19只龟的短时视频和能量模型估计，日均摄入约330千克湿重水母；这个局地结果解释了它为何持续追随高密度猎物，却不是全球个体每天固定配额。',
    },
    {
      key: 'thermal-biology',
      label: '体温',
      title: '在冷海水中保留身体热量',
      body:
        '五只高纬觅食成体在13.6至15.9°C海水中保持25.4至27.3°C核心体温。巨型身体、脂肪和结缔组织隔热、血流调节、游泳与消化产热、表层晒暖共同维持10.7至12.1°C温差；这属于区域性内温与巨温效应，不等同哺乳动物恒温。',
    },
    {
      key: 'migration-diving',
      label: '迁徙与潜水',
      title: '跨洋万里，极深潜水仍是少数',
      body:
        '部分西太平洋个体从巴布亚或印度尼西亚前往东北太平洋，路线超过10,000千米。13只成体的26,146次潜水中，最深纪录达1,250米，但99.6%浅于300米；迁徙路线和潜水策略随繁殖群、季节与猎物改变。',
    },
    {
      key: 'nesting',
      label: '繁殖',
      title: '夜间在动态沙滩挖出深卵室',
      body:
        '雌龟通常每二至四年回到繁殖区，一个季节每隔八至十二天再筑一巢，每巢约一百枚卵，孵化约两个月。沙温影响性别与存活，照明、硬质护岸、侵蚀、风暴和淹水会同时改变母龟上岸与下一代出巢。',
    },
    {
      key: 'regional-risk',
      label: '保护',
      title: '全球易危之下，四个区域已经极危',
      body:
        '当前全球记录仍是2013年VU且下降；东太平洋、西南大西洋、西南印度洋和西太平洋亚种群为CR，西北大西洋为EN，另有两个DD。2025年优先级研究再次把兼捕列为最高威胁，保护必须按种群和渔业现场实施。',
    },
  ],
  keyFacts: [
    '当前接受名为Dermochelys coriacea，归入龟鳖目、棱皮龟科、棱皮龟属；当前分类记录不承认有效亚种。',
    '背部没有外露硬质盾片，连续深色皮肤下由小型真皮骨构成柔韧背甲，并有恰好7条纵棱。',
    '成体前鳍肢比例极长，四个鳍肢均无爪；上颌双尖突和咽部乳突不是牙齿。',
    'NOAA成体展示范围约长152至183厘米、重340至454千克；这是典型范围，不是全球极值。',
    '主要摄食水母、樽海鞘和其他胶质浮游动物，结构化食性为carnivore。',
    '五只高纬成体在13.6至15.9°C海水中维持25.4至27.3°C核心体温，但不能称为哺乳动物式恒温。',
    '研究样本最深潜水为1,250米；13只成体的26,146次潜水中有99.6%浅于300米。',
    '部分西太平洋迁徙路线超过10,000千米，路线随繁殖群与季节变化。',
    '雌龟通常每2至4年繁殖，一个季节多次筑巢，间隔8至12天，每巢约100枚卵并孵化约两个月。',
    'IUCN当前全球字段为VU、decreasing、2013、A2bd；四个亚种群为CR，西北大西洋为EN。',
    'CITES附录I、CMS附录I和中国国家一级保护均是法律状态，不能替代IUCN全球风险字段。',
  ],
  threats: [
    '刺网、延绳钓、拖网、笼具和垂直浮标绳造成的兼捕、溺亡、吞钩与缠绕',
    '为肉、卵及销售进行的直接捕杀与采集',
    '人工照明、滨海开发、硬质护岸、采砂和车辆造成的繁殖海滩丧失与退化',
    '海滩升温、海平面上升、侵蚀、风暴和淹水对巢、性别比与幼龟产出的影响',
    '海洋变暖导致猎物、觅食区和迁徙时序改变',
    '塑料、气球、钓线、油污和遗失渔具造成的误食或缠绕',
    '港口、航道和近岸繁殖迁徙热点的船只撞击',
  ],
  conservationActions: [
    '按渔具和海区验证圆形钩、饵料调整、网具改造、弱链、时空关闭、TED与安全放生流程',
    '保护筑巢雌龟、卵室、天然沙丘和足够宽的干沙，限制车辆、采砂、白光与硬质护岸',
    '只在具体现场风险高于搬迁风险时由受训团队移巢，并完整记录深度、朝向、时间和温度',
    '与社区合作减少捕杀和采卵，执行国内保护、CITES贸易管制与CMS跨国协作',
    '清除遗失渔具、钓线、气球和塑料，在近岸热点实施船只减速、瞭望与避让',
    '按遗传种群和RMU维持可比的巢数、海上丰度、兼捕、遥测与气候监测',
    '补足雄龟、幼龟和非繁殖区资料，以多处动态繁殖海滩分散气候风险',
  ],
  metrics: {
    adultLengthCm: [152, 183],
    adultMassKg: [340, 454],
  },
  featuredStats: [
    {
      key: 'adult-length',
      label: '成体长度',
      value: '152—183',
      unit: '厘米',
      note: 'NOAA 5至6英尺展示范围的换算，不是全球最大甲长',
    },
    {
      key: 'adult-mass',
      label: '成体质量',
      value: '340—454',
      unit: '千克',
      note: 'NOAA 750至1,000磅展示范围的换算，不是全球极值',
    },
    {
      key: 'recorded-dive',
      label: '研究纪录潜深',
      value: '1,250',
      unit: '米',
      note: '13只成体研究中的最深纪录；99.6%的潜水浅于300米，不是日常深度或物种上限',
    },
    {
      key: 'transoceanic-route',
      label: '跨洋迁徙路线',
      value: '>10,000',
      unit: '千米',
      note: '西太平洋部分个体从巴布亚或印度尼西亚前往东北太平洋的路线，不是全种平均值',
    },
  ],
  media: {
    image: './images/species/leatherback-turtle/01-open-ocean-ridged-swim.webp',
    alt: '一只七条纵棱清楚、深色淡斑且无硬质盾片的成年棱皮龟在开放蓝水中游动，主体位于画面右侧，左侧保留宽阔安静水体',
    focalPoint: { x: 0.72, y: 0.56 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/leatherback-turtle/02-seven-ridges-clawless-flippers.webp',
        alt: '从略高的三分之四视角观察一只成年棱皮龟，恰好七条背棱、粉红头斑、两只长前鳍和两只短后鳍完整可见且均无爪',
        title: '七条纵棱与无爪长鳍',
        caption: '连续皮肤覆盖柔韧背甲，七条纵棱和极长前鳍是区别于其他海龟的核心特征。',
        focalPoint: { x: 0.60, y: 0.50 },
      },
      {
        image: './images/species/leatherback-turtle/03-jellyfish-foraging.webp',
        alt: '一只成年棱皮龟在开放海水中接近一只狮鬃水母，平滑双尖突上颌和中央缺口可见，口中没有独立牙齿',
        title: '追随胶质浮游动物',
        caption: '水母与樽海鞘是主要猎物；加拿大局地的高摄入量模型不能外推为每只龟的固定日粮。',
        focalPoint: { x: 0.62, y: 0.52 },
      },
      {
        image: './images/species/leatherback-turtle/04-deep-transit-dive.webp',
        alt: '一只成年棱皮龟从高处明亮海面斜向下潜入无海底可见的深蓝水柱，完整四鳍肢与七条纵棱保持清楚',
        title: '迁徙阶段的罕见深潜',
        caption: '研究最深纪录为1,250米，但26,146次潜水中99.6%浅于300米，极深潜水并非常态。',
        focalPoint: { x: 0.61, y: 0.61 },
      },
      {
        image: './images/species/leatherback-turtle/05-night-nest-digging.webp',
        alt: '月光下的暗色热带沙滩上，一只短尾成年雌性棱皮龟用后鳍挖深卵室，周围只有体坑与自然鳍痕且没有外露卵',
        title: '短尾雌龟夜间挖巢',
        caption: '雌龟先挖体坑和深卵室；画面保留单一筑巢瞬间，不把产卵、覆巢和幼龟出巢拼在一起。',
        focalPoint: { x: 0.63, y: 0.58 },
      },
      {
        image: './images/species/leatherback-turtle/06-striped-hatchlings-dark-beach.webp',
        alt: '恰好三只深黑棱皮龟幼龟在无人工白光的暗色沙滩朝低海平线爬行，每只都有七条淡色背棱线和淡色鳍缘',
        title: '带淡色棱线的幼龟入海',
        caption: '幼龟不是微缩成体：七条淡色棱线、淡色鳍缘和相对很长的前鳍在暗夜中清楚可辨。',
        focalPoint: { x: 0.55, y: 0.62 },
      },
    ],
  },
  sources: LEATHERBACK_TURTLE_SOURCES,
  featured: true,
  publishedAt: LEATHERBACK_TURTLE_CONTENT_DATE,
  updatedAt: LEATHERBACK_TURTLE_CONTENT_DATE,
}
```

### 最终字段速查

| 分组 | 可直接采用的值 |
| --- | --- |
| IUCN | `conservation('VU', 'decreasing', 2013, 'A2bd')` |
| 分布 | `realms: ['marine', 'terrestrial']`；六个有人居住大洲；不设 `center`；国家仅作代表 |
| measurements | 长 152 至 183 cm、重 340 至 454 kg，均为 NOAA 成体展示范围换算 |
| metrics | `adultLengthCm: [152, 183]`、`adultMassKg: [340, 454]`；其余数值字段不填 |
| featuredStats | `152—183 cm`、`340—454 kg`、纪录潜深 `1,250 m`、受限路线 `>10,000 km` |
| 六帧 | `01-open-ocean-ridged-swim.webp`、`02-seven-ridges-clawless-flippers.webp`、`03-jellyfish-foraging.webp`、`04-deep-transit-dive.webp`、`05-night-nest-digging.webp`、`06-striped-hatchlings-dark-beach.webp` |
| 本地目录 | `./images/species/leatherback-turtle/` |
| sources | 采用上方 17 条 `LEATHERBACK_TURTLE_SOURCES`，每条均已给出 `title`、`url`、`kind` 和检索日期 |
