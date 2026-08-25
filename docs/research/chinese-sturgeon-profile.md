# 中华鲟（*Acipenser sinensis*）完整档案研究

- 检索与核验日期：2026-08-24
- 展示中文名：**中华鲟**；英文主名：**Chinese Sturgeon**；当前仓库推荐学名：***Acipenser sinensis* Gray, 1835**
- 分类备注：Brownstein 与 Near 在 2025 年提出恢复属名 ***Sinosturio***，组合为 ***Sinosturio sinensis* (Gray, 1835)**。截至 2026-08-24，Eschmeyer’s Catalog of Fishes 虽收录这一处理，页面的 `Current status` 仍是 *Acipenser sinensis*；IUCN、CITES、CMS、中国现行名录、NOAA 与本文大部分生态研究也继续使用 *Acipenser sinensis*
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面和 5 张详情图规定可核验的物种、生活史与保护边界
- 证据标准：分类优先采用 Catalog of Fishes 和同行评议分类修订；全球灭绝风险采用 IUCN 当前修订条目；国际公约采用 CITES、CMS 现行附录；中国国内保护与长江治理采用国家林草局、农业农村部公告；自然史、威胁和保护成效采用同行评议原始研究、政府监测公报与 NOAA 状态综述
- 时间口径：本文所称“当前”截至 **2026-08-24**。IUCN 的评估日、发布年、CITES 附录生效日、政府公报统计年度和网页发布日期分别记录
- 数量边界：放流数量、标记个体到达率、葛洲坝下成熟个体估计和自然繁殖监测回答不同问题，不能相互替代，也不能写成全球野生种群总数
- 地图边界：`center` 只用于打开长江中下游至河口的视图，不表示产卵点、成熟鱼聚集点或保护区精确坐标

## 结论摘要

### 主记录继续采用 *Acipenser sinensis*

Catalog of Fishes 在线版更新于 2026 年 7 月 7 日。物种记录给出 Gray 于 1835 年发表的 *Acipenser sinensis*、中国模式来源和现存综合模式标本信息；同页列入 Brownstein 与 Near 2025 年的 *Sinosturio sinensis* 处理，但末尾仍明确标记 `Current status: Valid as Acipenser sinensis Gray 1835`。因此本轮实现应采用：

```ts
id: 'species-acipenser-sinensis'
slug: 'chinese-sturgeon'
scientificName: 'Acipenser sinensis'
genus: taxon('Acipenser', '鲟属')
```

不能把 *Sinosturio* 从来源中删除。Brownstein 与 Near 基于线粒体 DNA、30 个核基因和形态矩阵，认为传统 *Acipenser* 和 *Huso* 并非单系，提出把中华鲟、长江鲟、施氏鲟等太平洋支系放入恢复的 *Sinosturio*。这是有数据支撑的近期修订，适合进入别名、分类说明和后续更新清单；当前主流名录尚未同步，不适合在本轮强制改属。[Catalog of Fishes: *Acipenser sinensis*](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=9762) [Brownstein & Near 2025](https://www.nearlab.org/uploads/1/3/3/7/133700440/190_brownstein_near2025sturgons.pdf)

Catalog 把 1901 年依据日本相模湾标本命名的 ***Acipenser kikuchii* Jordan & Snyder, 1901** 处理为中华鲟同物异名。`Sagami Sturgeon` 可作为有来源的历史英文名，但用户界面主英文名应保持 `Chinese Sturgeon`。*Sinosturio sinensis* 是改属后的新组合，不是另一个物种，也不应与同物异名混写。[Catalog of Fishes: *Acipenser kikuchii*](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=27532) [ITIS: *Acipenser sinensis*](https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=550555)

推荐分类链为动物界、脊索动物门、辐鳍鱼纲、鲟形目、鲟科、鲟属：

```text
Animalia > Chordata > Actinopterygii > Acipenseriformes > Acipenseridae > Acipenser > Acipenser sinensis
```

中华鲟属于辐鳍鱼纲，不属于软骨鱼纲。其骨骼大部分软骨化是解剖特征，不能把它写成鲨、鳐所在的 `Chondrichthyes`。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/chinese-sturgeon) [Brownstein & Near 2025](https://www.nearlab.org/uploads/1/3/3/7/133700440/190_brownstein_near2025sturgons.pdf)

### IUCN 当前值：2019 年评估，2022 年修订发布

IUCN 当前引用为 Qiwei, W. 2022, *Acipenser sinensis*，2022 年评估的修订版，条目号 `e.T236A219152605`。公开数据库所示评估日期为 **2019-09-15**，等级为 **极危 Critically Endangered（CR）**，种群趋势为 **下降 Decreasing**，准则为 **A2bc**。仓库应实现：

```ts
conservation: conservation('CR', 'decreasing', 2019, 'A2bc')
```

2022 是修订条目的发布年份，不能写入 `assessedYear`。`A2` 表示过去三个世代内的种群缩减，且缩减原因可能尚未停止、未被完全理解或不可逆；`b` 和 `c` 分别指丰度指数，以及分布面积或生境范围、质量下降等证据类型。产品只展示正式代码，不自行补造未公开的精确下降百分比。[IUCN Red List current DOI](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T236A219152605.en) [NOAA/USFWS range service: IUCN citation metadata](https://services2.arcgis.com/C8EMgrsFcRFL6LrL/arcgis/rest/services/SturgeonChinese_20250627/FeatureServer) [FishBase: IUCN assessment date and criteria](https://fishbase.se/summary/Sinosturio_sinensis.html)

IUCN 正文在本次检索环境中返回访问限制，无法直接读取完整 PDF。等级、趋势、准则和评估日由 IUCN DOI、美国政府基于该评估建立的范围服务和 FishBase 当前 IUCN 字段交叉核对。实现后仍应在 IUCN 开放下载恢复时复核评估历史页，防止下一版评估替换当前条目。

### 四套保护制度不能合并成一个标签

1. **IUCN：CR**。这是全球灭绝风险评估，不是法律许可制度。
2. **CITES：附录 II**。2026 年 3 月 5 日生效的现行附录把除附录 I 物种外的全部鲟形目列入附录 II；中华鲟不属于附录 I 的短吻鲟和欧洲鲟，故为附录 II。附录 II 管制国际贸易，要求合法来源和非致危判断，不等于全面贸易禁令。[CITES current appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CITES sturgeon programme](https://cites.org/eng/prog/sturgeon/index.shtml)
3. **CMS：附录 II**。CMS 物种页记录中华鲟自 1999 年列入附录 II。该附录针对保护状况不利、需要或可显著受益于国际合作的迁徙物种，不等于 CITES 附录 II 的贸易规则。[CMS species page](https://www.cms.int/species/acipenser-sinensis) [CMS Appendices I and II](https://www.cms.int/species/appendix-i-ii-cms)
4. **中国：国家一级重点保护野生动物**。2021 年《国家重点保护野生动物名录》以“中华鲟 *Acipenser sinensis*”列为一级，没有“仅限野外种群”限定。国内捕捉、繁育、运输、利用和放归受中国法律与主管部门制度约束。[国家林草局、农业农村部 2021 年第 3 号公告](https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html) [名录 PDF](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf)

长江十年禁渔是流域生态和渔业管理措施，不是第五种物种等级。它能减少捕捞和兼捕压力，却不能恢复被大坝截断的历史产卵通道，也不能单独保证中华鲟恢复自然繁殖。[农业农村部关于加强长江水生生物保护的意见](https://cjyzbgs.moa.gov.cn/tzgg/202403/t20240322_6452080.htm)

## 分布、洄游与生活史空间

### 历史分布和当前分布要分层表达

历史资料把中华鲟记录于东亚大陆架和多条入海河流。中国河流包括长江、珠江、西江、闽江、钱塘江和黄河，海域记录延伸到朝鲜半岛、日本九州附近、黄海、东海、台湾海峡和南海北部。并非每条有捕获记录的河流都已证实存在独立繁殖群体。珠江历史种群和其他河流记录长期缺少连续的产卵与招募证据。[Wei 2020](https://jlakes.alljournals.cn/html/2020/5/20200506.html) [NOAA 2021 five-year review](https://repository.library.noaa.gov/view/noaa/30918/noaa_30918_DS1.pdf)

当前可确认的自然生活史核心收缩到葛洲坝以下长江干流、长江口以及黄海和东海近岸海域。CMS 仍列中国、朝鲜、日本和韩国为地理范围记录；CMS 2026 状态综述则把日本和韩国记为已灭绝区域。仓库 `countries` 建议只填 `['中国']`，历史境外海域和范围国记录写入 `range`，避免国家筛选器把历史记录解释为现存繁殖种群。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/chinese-sturgeon) [CMS species page](https://www.cms.int/species/acipenser-sinensis) [CMS COP15 conservation-status review](https://www.cms.int/sites/default/files/document/2026-01/cms_cop15_doc.20.1_rev.1_conservation-status-migratory-species_e.pdf)

推荐结构化范围：

```ts
distribution: {
  realms: ['freshwater', 'marine'],
  continents: ['亚洲'],
  regions: [
    '葛洲坝以下长江干流与长江口',
    '黄海和东海近岸及大陆架海域',
    '历史东亚沿海河流与朝鲜半岛、日本近海记录',
  ],
  countries: ['中国'],
  range:
    '当前自然生活史核心位于葛洲坝以下长江、长江口和黄海至东海近岸；珠江等中国河流以及朝鲜半岛、日本近海属于历史或状态未明记录，不能画成当前稳定繁殖范围。',
  center: { lat: 30.5, lng: 116.5 },
}
```

`center` 是长江中下游宽域视图焦点。它不表示葛洲坝下产卵场、保护区边界、声学接收器或成熟鱼位置。

### 洄游是海、河两段连成的一条生命周期

中华鲟是溯河产卵洄游鱼。幼鱼在淡水出生，沿长江中下游停留、摄食并降河，进入长江口完成盐度适应，再进入近岸海域生长。接近性成熟的成鱼通常在夏季到达长江口并溯江；历史上可进入金沙江上游产卵。亲鱼在河中可停留约 17 至 19 个月，等待性腺成熟和下一年秋季的产卵窗口，产后返海。野生繁殖群体大部分生命时间在海洋度过。[Wei 2020](https://jlakes.alljournals.cn/html/2020/5/20200506.html) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/chinese-sturgeon)

农业农村部 2025 年公报解读概括，葛洲坝截流前中华鲟在长江内的洄游距离超过 3,000 千米，海洋洄游超过 2,000 千米，可到朝鲜东部海域。Huang 与 Wang 的种群模型估计，葛洲坝使可用上溯路线减少约 1,175 千米，并将新的繁殖能力压缩到原有水平的一小部分。前一个数字是历史生活史尺度，后一个数字是模型中的大坝影响量，不能相加。[农业农村部 2024 年长江公报答记者问](https://cjyzbgs.moa.gov.cn/zcjd/202509/t20250918_6477464.htm) [Huang & Wang 2018](https://doi.org/10.1016/j.cub.2018.09.032)

2012 年遥测研究给 27 尾野生成鱼安装标签，完整追踪到的两尾从长江口附近上溯到繁殖区，记录路线约 1,678 河千米，平均上溯速度 1.41 千米每小时。这个小样本证明个体能够完成长距离迁移，却不能代表所有年份、性别或个体的固定速度。[Wang et al. 2012](https://doi.org/10.1111/j.1095-8649.2012.03365.x)

## 生境与行为

### 四个相连生境

1. **长江深水主槽和深潭**：成鱼溯江、越冬、等待性腺成熟和产后降河的淡水通道。
2. **砾石与卵石产卵河床**：成熟鱼在有较强流速、起伏河床和洁净粗底质的河段撒播黏性卵。文献对“剩余产卵场”的空间单位不同，监测到的核心河床约数千米，水动力模型常评估葛洲坝以下约 24 至 30 千米河段，不能把这些数字写成同一个精确边界。[Zhang et al. 2009](https://doi.org/10.1007/s10641-008-9410-2) [二维生境模型](https://www.sciencedirect.com/science/article/pii/S0304380009008023)
3. **长江中下游浅水边滩和河滨带**：仔稚鱼漂流后藏匿、开口摄食和逐步降河的场所。河道硬化、疏浚和水位变化会改变这一阶段可用的浅水生境。[Wei 2020](https://jlakes.alljournals.cn/html/2020/5/20200506.html)
4. **长江口、潮滩和近岸大陆架**：幼鱼完成渗透调节并转向海洋食物，亚成体和成体在黄海、东海等近岸底层海域摄食生长。[Sun et al. 2019](https://doi.org/10.1111/jai.13835) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/chinese-sturgeon)

产卵研究曾在葛洲坝下记录 18 至 20 摄氏度、近底流速约 1.0 至 1.7 米每秒的成功产卵条件；后续模型用 0.6 至 1.5 米每秒作为适宜流速范围。它们是特定地点、年份和方法下的观察或模型输入，不是全物种不可变化的阈值。[Zhuang et al. 2007](https://doi.org/10.1016/S1872-2032(07)60023-7) [2021 spawning-flow study](https://pubmed.ncbi.nlm.nih.gov/34257368/)

### 可写入 `activity` 的行为

- 成鱼在海洋摄食生长，接近繁殖时溯长江，在淡水阶段长期少食或停食，依赖此前储存的能量完成性腺成熟和洄游。
- 成鱼以深水主槽迁移，不应画成鲑鱼跳瀑布或越过高坝；现有长江大坝没有供中华鲟完成历史路线的有效通道。
- 产卵多在秋季夜间出现，常集中为一至两次、每次持续数日的短窗口；年份和坝群运行会改变日期。
- 受精卵沉底并黏附在砾石间，仔鱼孵化后以主动上浮和顺流漂移向下游扩散。
- 幼鱼在长江口随潮汐利用浅滩，体型增大时食谱和活动范围转向鱼类与近岸海域。
- 现有来源不支持把中华鲟写成固定群游、终生配对、亲鱼护卵或以单一机制精准“归巢”。

## 外形、年龄差异与近似种

### 中华鲟的稳定形态组合

- 身体巨大、粗壮而延长，背部灰黑至蓝灰，体侧灰色或红褐，腹面乳白。
- 成鱼吻部宽而扁，幼鱼吻部更尖长；小眼位于头部两侧。
- 吻腹面有四根短而光滑的须，位置更靠近无齿、可伸缩的腹位口，而不是靠近吻尖。
- 身体没有普通鱼类的覆瓦状鳞片，沿背部、两侧和腹侧排列五纵列大型骨板；骨板之间可有细小骨质颗粒。
- 背鳍和臀鳍位于身体后段，尾鳍明显歪尾，上叶长于下叶。
- 幼鱼的骨板和尖吻更醒目；大型成鱼的吻部更宽，骨板轮廓可显得较钝。不能把幼鱼尖吻直接画给 3 米成鱼。

[NOAA Fisheries](https://www.fisheries.noaa.gov/species/chinese-sturgeon) [CITES Sturgeons and Paddlefishes Identification Guide](https://cites.org/sites/default/files/vc-files/files/CAN-CITES_Sturgeons_Guide.pdf) [Artyukhin et al. 2007](https://doi.org/10.1007/s10641-006-9157-6)

### 与长江鲟、俄罗斯鲟的核对

长江鲟又称达氏鲟，当前常用学名为 ***Acipenser dabryanus***。它与中华鲟同处长江系统，四根须也靠近口部，外观重叠最大。Artyukhin 等整理的计数范围显示，中华鲟鳃耙约 14 至 28，长江鲟约 32 至 55；中华鲟侧骨板约 14 至 37，长江鲟约 26 至 54。范围仍有重叠，鳃耙又无法从普通侧面图看见。体型和生活史只能辅助：中华鲟成鱼远大于长江鲟并进入海洋，长江鲟是淡水生活型。不能靠颜色、一个骨板或背景直接定种。[Artyukhin et al. 2007](https://doi.org/10.1007/s10641-006-9157-6) [农业农村部长江鲟资料](https://cjjjd.ndrc.gov.cn/gongzuodongtai/bumendongtai/202506/t20250613_1398416.htm)

俄罗斯鲟 ***Acipenser gueldenstaedtii*** 原生黑海、亚速海和里海流域。CITES 识别指南把其短须描述为更靠近吻尖，吻部较短、较钝圆，背鳍条通常少于中华鲟；中华鲟须靠近口、成鱼吻宽扁，背鳍条通常超过 44。鲟鱼形态计数广泛重叠，水下生成图也无法可靠呈现几十根鳍条。俄罗斯鲟不应出现在长江、东海或中国保护放流背景中。[CITES identification guide](https://cites.org/sites/default/files/vc-files/files/CAN-CITES_Sturgeons_Guide.pdf) [Artyukhin et al. 2007](https://doi.org/10.1007/s10641-006-9157-6)

### 图像生成的物种硬约束

- 提示词同时写 `Chinese sturgeon, Acipenser sinensis`；可在内部备注 `proposed combination Sinosturio sinensis`，不要让文字出现在画面。
- 成鱼画面锁定宽扁吻、四根短须靠近腹位无齿口、五列大骨板、后置背鳍和上叶更长的歪尾。
- 幼鱼画面改为尖长吻、相对锐利骨板和 15 至 30 厘米量级，不把它缩成成鱼比例。
- 不画鲨鱼鳃裂、锯鳐式长锯吻、鲶鱼长须、可见牙齿、脂鳍、对称叉尾、普通大鳞或鲑鱼花纹。
- 不用单一颜色宣称鉴定成功，不凭一张图区分中华鲟与长江鲟。caption 必须说明生成图是科学约束下的编辑示意。
- 不展示精确产卵点、声学接收器坐标、保护区设施名称或可定位路牌。

## 体长、体重、年龄与繁殖节律

1981 至 1996 年长江湖北段 415 尾繁殖群体的实测数据最适合结构化字段。平均全长为 275.9 厘米，范围 189 至 383 厘米；平均体重为 144.0 千克，范围 42.5 至 420 千克。雌鱼平均 312.5 厘米和 217.3 千克，雄鱼平均 244.9 厘米和 86.2 千克。它们是繁殖群体样本，不是新生幼鱼至历史最大个体的完整物种范围。[Wei 2020](https://jlakes.alljournals.cn/html/2020/5/20200506.html)

1998 至 2004 年用于繁殖研究的 36 尾雌鱼和 21 尾雄鱼给出另一组范围：雌鱼 240 至 320 厘米、140 至 432 千克、15 至 30 岁；雄鱼 153 至 284 厘米、70 至 244 千克、12 至 26 岁。样本期、捕获标准和性别组成不同，不能把各文献最小值与最大值拼成一个“精确全球范围”。[Liu et al. 2007](https://pubmed.ncbi.nlm.nih.gov/17763749/)

NOAA 概括极值可达约 4.9 米、449 千克，FishBase 则列 346 厘米、600 千克和最高报告年龄 33 岁。来源口径互不一致，且部分极值追溯到旧资料。产品正文可以写“可靠繁殖样本常见 2 至 3 米级，历史资料有更大个体”，结构化字段使用有样本量的 415 尾繁殖群体范围，不把 4.9 米或 600 千克当典型值。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/chinese-sturgeon) [FishBase](https://fishbase.se/summary/Sinosturio_sinensis.html)

同一批 415 尾样本的年龄为 8 至 34 岁，实际观察最高 34 岁；圈养经验支持约 40 岁的可能寿命，NOAA 写“至少 35 年”。三者分别是野外样本最高年龄、推测寿命和机构概括，不宜填成精确的 `lifespanYears: [34, 40]`。本轮可在关键事实中保留边界，暂不填标准化寿命范围。[Wei 2020](https://jlakes.alljournals.cn/html/2020/5/20200506.html) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/chinese-sturgeon)

野生样本中雄鱼平均初次繁殖年龄为 12.5 岁，雌鱼为 16.8 岁；农业农村部当前科普口径把雌鱼平均性成熟概括为 18 岁。雌鱼通常约 4 年繁殖一次，雄鱼约 3 年一次。个体、性别、营养和养殖条件会改变节律，不能给所有成鱼固定“每四年一次”的统一日历。[Wei 2020](https://jlakes.alljournals.cn/html/2020/5/20200506.html) [农业农村部 2024 年公报答记者问](https://cjyzbgs.moa.gov.cn/zcjd/202509/t20250918_6477464.htm)

## 食性与摄食边界

中华鲟是底栖肉食者。综合记录包括环节动物、端足类、虾蟹、双壳类等软体动物、鱼类和水生昆虫。食谱随发育阶段和水域改变，不能用一张成年鱼捕食图代表全生命周期。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/chinese-sturgeon)

长江口幼鱼研究显示明显的发育转换。较小幼鱼更多摄食端足类、蟹和双壳类；体型增大后，鱼类的重要性上升，同时摄食多毛类和虾。2015 年样本从约 11.65 厘米、10.82 克增长到 27.78 厘米、158 克，描述的是一季幼鱼样本，不是成年体尺。[Sun et al. 2019](https://doi.org/10.1111/jai.13835)

成熟鱼在海洋阶段积累完成长距离洄游和性腺成熟所需的能量。历史观察认为亲鱼进入淡水后长期少食或停食。因此迁徙图和产卵图不应同时表现成鱼积极吞食鱼群；幼鱼河口图可表现近底搜索小蟹、端足类、多毛类或小鱼，但不画血腥捕食。[Wei 2020](https://jlakes.alljournals.cn/html/2020/5/20200506.html) [Huang & Wang 2018](https://doi.org/10.1016/j.cub.2018.09.032)

## 繁殖、产卵和早期生活史

中华鲟多在秋季进入繁殖窗口。1996 至 2004 年底层漂网监测把受精日期集中在 10 月 20 日至 11 月 10 日，年度窗口最长约 23 天，产卵常在夜间发生，一年可有一至两批短时事件。三峡等工程运行后水温变化滞后，部分年份产卵日期向后推移。不要把一个历史日期写成未来每年的固定日历。[Wei et al. 2009](https://doi.org/10.1111/j.1439-0426.2009.01269.x) [Wei 2020](https://jlakes.alljournals.cn/html/2020/5/20200506.html)

成熟雌雄在急流粗底质上体外受精。卵撒播到河床，受精后具黏性并沉积在砾石、卵石间；亲鱼不筑鲑鱼式产卵坑，也不护卵。仔鱼孵化后先出现主动上浮，再借水流向下游扩散，随后藏入底质空隙并逐步开口摄食。[Wei et al. 2009](https://doi.org/10.1111/j.1439-0426.2009.01269.x) [Wei 2020](https://jlakes.alljournals.cn/html/2020/5/20200506.html)

1998 至 2004 年 36 尾野生雌鱼的绝对怀卵量为 20 万至 59 万粒，平均 35.8 万粒；更早的 1970 年代资料给出更高范围。样本显示繁殖力随时期和亲鱼状态变化。产品可写现代样本范围并注明时期，不写“每尾固定产一百万粒”。[Liu et al. 2007](https://pubmed.ncbi.nlm.nih.gov/17763749/) [Wei 2020](https://jlakes.alljournals.cn/html/2020/5/20200506.html)

## 从大坝截流到九年未检出自然繁殖

葛洲坝于 1981 年截断历史洄游路线后，中华鲟在坝下建立替代产卵场，但可用产卵空间、流量、温度、泥沙和河床条件均被改变。三峡、向家坝和溪洛渡等上游梯级工程又改变水温到达时序和水沙过程。Huang 与 Wang 估计，葛洲坝使性腺发育延迟约 37 天，有效繁殖群体降到原有水平的 24.1%，新产卵能力降到 6.5%。这些是模型估计，适合解释机制，不等于每年实测鱼数。[Huang & Wang 2018](https://doi.org/10.1016/j.cub.2018.09.032) [NOAA 2021 five-year review](https://repository.library.noaa.gov/view/noaa/30918/noaa_30918_DS1.pdf)

监测资料显示，2013 年起多次中断自然繁殖，2016 年是最近一次确认。农业农村部的 2024 年公报解读称 2017 至 2024 年连续 8 年未监测到自然繁殖，2024 年到达葛洲坝下的成熟成鱼估计仅 10 尾。2026 年 4 月发布的 2025 年公报仍报告监测到中华鲟，但没有监测到自然繁殖；按年度计算即 2017 至 2025 连续 9 年未检出。[农业农村部 2024 年公报答记者问](https://cjyzbgs.moa.gov.cn/zcjd/202509/t20250918_6477464.htm) [2025 年长江公报发布信息](https://nyncw.cq.gov.cn/zwxx_161/ywxx/202604/t20260408_15596444_wap.html) [2020 年公报的 2016 记录](https://cjyzbgs.moa.gov.cn/ztzl/202212/P020221213590715511269.pdf)

“未监测到”不是“绝对没有发生”。监测方法、采样时段、空间覆盖和极低密度都会影响检出概率。产品必须保留监测措辞，也不能把“2024 年到坝下 10 尾”写成全球只剩 10 尾。

2024 年《Science Advances》模型把种群描述为自 2013 年“功能性灭绝”，并预测 2026 年达到野外灭绝状态。这是模型定义和情景预测；截至 2026 年官方仍监测到中华鲟，IUCN 当前正式等级仍为 CR，而非 EW。该论文适合放入威胁和不确定性，不能覆盖正式等级或写成已经发生的事实。[Huang & Li 2024](https://doi.org/10.1126/sciadv.adi6580)

## 人工繁育、放流与证据边界

人工保种和增殖放流用于延缓个体数下降、补充年龄结构并积累恢复技术。农业农村部称 2024 年放流规模超过 100 万尾，约 11 万尾幼鱼通过长江口进入海洋；2025 年放流约 97 万尾，361 尾超声标记个体中超过 60% 到达长江口。到达河口说明一段降河迁移成功，不证明个体在海洋长期存活、达到性成熟、返河并产生野生后代。[农业农村部 2025 年放流启动](https://cjyzbgs.moa.gov.cn/gzdt/202503/t20250331_6472553.htm) [农业农村部 2024 年公报答记者问](https://cjyzbgs.moa.gov.cn/zcjd/202509/t20250918_6477464.htm)

放流评价应同时记录亲本家系、遗传多样性、疾病筛查、年龄和体型、标记方式、释放地点、短期迁移、海洋存活、返河比例和自然繁殖贡献。单纯把放流尾数做成恢复趋势，会掩盖连续九年未检出自然繁殖的核心问题。

## 主要威胁

1. **大坝阻隔和梯级运行**：葛洲坝切断历史产卵路线，后续水库改变水温、流量、泥沙和河床过程，缩短并延迟可用产卵窗口。[Huang & Wang 2018](https://doi.org/10.1016/j.cub.2018.09.032) [NOAA review](https://repository.library.noaa.gov/view/noaa/30918/noaa_30918_DS1.pdf)
2. **繁殖群体过小且补充中断**：成熟鱼到达数低，雌鱼晚熟且繁殖间隔长，连续多年缺乏确认的自然子代，使随机死亡和性别、年龄结构偏斜的影响放大。[农业农村部 2024 年公报答记者问](https://cjyzbgs.moa.gov.cn/zcjd/202509/t20250918_6477464.htm)
3. **河道整治和关键生境丧失**：航道疏浚、采砂、岸线硬化、防洪与景观工程影响产卵砾石、仔稚鱼浅滩和河口索饵场。[Wei 2020](https://jlakes.alljournals.cn/html/2020/5/20200506.html)
4. **非法捕捞、兼捕和遗留渔具**：全面保护和十年禁渔降低了直接捕捞，但极少个体仍会受到误捕、废弃网具和非法作业威胁。[NOAA review](https://repository.library.noaa.gov/view/noaa/30918/noaa_30918_DS1.pdf)
5. **污染与水质风险**：重金属、内分泌干扰物和其他污染物在河口幼鱼生境中构成压力；现有实验和相关研究不能把单一污染物写成全种群衰退的唯一原因。[NOAA review](https://repository.library.noaa.gov/view/noaa/30918/noaa_30918_DS1.pdf)
6. **外来鲟类逃逸与遗传风险**：养殖的施氏鲟、西伯利亚鲟、俄罗斯鲟及杂交鲟进入长江后，可能竞争食物或繁殖空间，也可能形成遗传风险。证据主要支持潜在或模型风险，不能宣称已普遍发现中华鲟野外杂交后代。[NOAA review](https://repository.library.noaa.gov/view/noaa/30918/noaa_30918_DS1.pdf)
7. **航运、噪声和碰撞**：长江干流和河口高强度航运会扰动迁移通道，并可能造成直接伤害；影响规模仍需统一监测。[中华鲟拯救行动计划](https://cjyzbgs.moa.gov.cn/tzgg/201904/t20190428_6220349.htm)
8. **气候变化与极端水文**：升温、低枯水位、洪水和海洋条件变化会与坝群调度叠加，改变产卵温度窗口、河口食物和沿海分布。地点模型不能直接转换成全范围固定损失百分比。[农业农村部 2024 年公报答记者问](https://cjyzbgs.moa.gov.cn/zcjd/202509/t20250918_6477464.htm)
9. **放流替代自然恢复的管理风险**：大量释放能短期增加可检测个体，却可能因家系偏窄、驯化、健康或追踪不足而无法恢复自我维持种群。[Wei 2020](https://jlakes.alljournals.cn/html/2020/5/20200506.html)

## 推荐保护行动

1. 以恢复自然繁殖为核心，修复葛洲坝下粗底质产卵河床，评估旁通或仿自然产卵场，并按水温、流速、泥沙和成鱼到达时序实施生态调度。[中华鲟拯救行动计划](https://cjyzbgs.moa.gov.cn/tzgg/201904/t20190428_6220349.htm) [农业农村部 2024 年保护意见](https://cjyzbgs.moa.gov.cn/tzgg/202403/t20240322_6452080.htm)
2. 把保护范围覆盖整条“江、海、江”生活史通道，维护长江中下游仔稚鱼浅滩、长江口盐度过渡区、近岸底栖索饵场和成鱼返河入口。
3. 延续长江十年禁渔和专项执法，清理遗留网具，建立误捕快速报告、救护、取样和放归流程；对珍稀个体避免长时间展示或反复搬运。
4. 组合卵和仔鱼底网、声学调查、eDNA、成鱼遥测、幼鱼标记和海洋误捕报告，分别报告野生出生、人工放流和来源不明个体。
5. 为保种与放流群体建立亲本家谱、基因组和组织库、疾病筛查、个体标记及释放后长期追踪；用有效亲本数和遗传贡献评价，不以尾数代替质量。
6. 控制非本地鲟类养殖逃逸，建立洪水和设施故障应急预案，对长江内外来鲟类开展形态与遗传鉴定。
7. 限制关键河段和时段的疏浚、采砂、岸线硬化、强噪声和高速航运，恢复河滨带与河口底栖生境。
8. 监测重金属、持久性污染物、内分泌干扰物和病原，并用野外暴露、个体健康和繁殖指标验证风险，不用单次实验替代种群因果判断。
9. 通过 CMS 协调黄海、东海和朝鲜半岛沿海的误捕、标记回报与海洋分布资料；通过 CITES 核验跨境标本、活体和产品的合法来源。
10. 定期公开成熟成鱼到达、自然繁殖检出、放流家系、河口到达和返河贡献等不同指标，避免只发布累计放流量。

## 推荐的故事章节

1. **一条鱼跨过江海两种世界**：幼鱼从长江降到河口和近海，十多年后成鱼再返江，用完整生活史解释 freshwater 与 marine 双领域。
2. **五列骨板和一张朝下的嘴**：用宽扁吻、四根短须、腹位无齿口、五列骨板和歪尾说明鲟鱼形态，也提醒照片不能可靠排除长江鲟。
3. **大坝留下的短产卵窗口**：葛洲坝截断历史路线，坝下替代产卵场又受梯级工程水温、流量和泥沙影响。
4. **九个秋天，没有检出新的卵和仔鱼**：从 2016 年最后确认繁殖讲到 2017 至 2025 年监测空缺，并解释“未检出”与“绝对没有”的区别。
5. **放流鱼抵达河口以后**：97 万尾、361 枚声学标签和超过 60% 到达率只完成评价链的一段，真正目标是返河并繁殖。
6. **一个属名正在变化**：从 *Acipenser sinensis* 到 2025 年提出的 *Sinosturio sinensis*，说明系统发育修订、数据库当前状态和法律名称更新速度不同。

## 推荐的关键事实

1. Catalog of Fishes 当前状态仍接受 *Acipenser sinensis*；*Sinosturio sinensis* 是 2025 年有系统发育证据支持、尚未获主要保护名录统一采用的新组合。
2. IUCN 当前为 CR、趋势下降、准则 A2bc；评估日期是 2019 年 9 月 15 日，2022 年是修订发布年。
3. 中华鲟列入 CITES 附录 II、CMS 附录 II，并是中国国家一级重点保护野生动物；三者目的和法律效果不同。
4. 它是溯河产卵洄游鱼，当前生活史核心连接葛洲坝以下长江、长江口以及黄海和东海近岸。
5. 415 尾历史繁殖群体样本平均全长 275.9 厘米、平均体重 144 千克，样本范围为 189 至 383 厘米和 42.5 至 420 千克。
6. 成鱼有宽扁吻、四根靠近口部的短须、腹位无齿口、五列大型骨板和上叶更长的歪尾。
7. 幼鱼吻部比成鱼更尖，体型增大后食物从端足类、蟹和双壳类逐步转向更多鱼类。
8. 雌鱼平均初次繁殖约 16.8 至 18 岁，通常约 4 年再繁殖一次；晚熟和长间隔限制恢复速度。
9. 2016 年是最近一次确认的自然繁殖；2017 至 2025 连续 9 年未监测到自然繁殖。
10. 2024 年到达葛洲坝下的成熟成鱼估计 10 尾，这不是全球野生个体总数。
11. 2025 年约 97 万尾放流鱼中，361 尾超声标记个体有超过 60% 到达长江口；到达河口不等于完成海洋存活、返河和繁殖。
12. 普通图像无法可靠区分中华鲟与长江鲟；鳃耙、鳍条、骨板计数、体尺、地点和遗传证据需要组合使用。

## 应删除或避免的说法

- 不写 `Sinosturio sinensis` 已被 Catalog 当前状态接受；Catalog 同页只记录该分类处理，`Current status` 仍为 *Acipenser sinensis*。
- 不写 `assessedYear: 2022`、旧准则 `A2bcd` 或趋势 unknown；当前结构化值是 `2019 / CR / A2bc / decreasing`。
- 不把 IUCN CR、CITES 附录 II、CMS 附录 II、中国国家一级保护和长江十年禁渔合成一个“最高保护等级”。
- 不说 CITES 附录 II 等于任何国际贸易全面禁止。
- 不把 CMS 的历史范围国列表写成各国当前都有繁殖种群。
- 不把 4.9 米、600 千克当作典型成体，不把不同年代和性别样本的极值拼成一个精确物种范围。
- 不把“骨骼大部分软骨化”写成软骨鱼纲，也不叫中华鲟鲨鱼。
- 不把所有中华鲟固定写成 18 岁成熟、每 4 年繁殖或一生正好 5 次；这些是平均值与概括。
- 不写每尾固定产一百万粒卵，不画亲鱼筑巢、守卵、成对育幼或鲑鱼式产卵坑。
- 不把迁徙成鱼画成跳瀑布、穿过坝体或在河中大口捕食。
- 不把“连续 9 年未监测到”改写成“连续 9 年绝对没有”，也不直接宣布已功能性灭绝或野外灭绝。
- 不把 2024 年到坝下 10 尾写成全球仅剩 10 尾。
- 不把 97 万尾放流、超过 60% 到达河口或 11 万尾入海写成野生种群恢复率。
- 不声称长江中已普遍出现中华鲟与外来鲟类杂交；当前应写潜在竞争和遗传风险。
- 不凭颜色、一个骨板或一张水下图排除长江鲟与俄罗斯鲟。
- 不画普通覆瓦状大鳞、对称叉尾、鲶鱼长须、鲨鱼鳃裂、尖牙、脂鳍或锯状吻。
- 不公开精确产卵点、保护站、标记接收器或成熟鱼聚集坐标。

## 1 张封面与 5 张 gallery 的科学图像方案

六张图都是科学约束下的编辑示意，不是野外事件证据、物种鉴定材料或真实点位复刻。所有画面禁止文字、标签、水印、商标、可读路牌和血腥捕食。运行时素材建议统一为 1536×1024 WebP，信用写 `Fauna Atlas · AI 生成原创图像`。

| 帧 | 推荐运行时路径 | 可视事实与证据边界 |
| --- | --- | --- |
| 01 | `./images/species/chinese-sturgeon/01-yangtze-migration-portrait.webp` | 单尾完整成鱼位于深水河道右侧，左侧保留开阔水体；普通图像不能确认性别、年龄、体尺或物种鉴定 |
| 02 | `./images/species/chinese-sturgeon/02-scuted-body-and-barbels.webp` | 单尾完整近景鲟鱼展示四根须、纵向骨板和歪尾；画面不能证明鳃耙或鳍条计数 |
| 03 | `./images/species/chinese-sturgeon/03-deep-river-spawning-habitat.webp` | 一尾小型远景鲟鱼游过砾石和块石深河道；粗底质只表示相关生境，不证明占用或产卵 |
| 04 | `./images/species/chinese-sturgeon/04-estuary-juvenile-foraging.webp` | 单尾幼鱼在河口泥沙底接近微小底栖生物；只表示搜寻姿态，不声称已捕获猎物或量化食谱 |
| 05 | `./images/species/chinese-sturgeon/05-gravel-bed-spawning-run.webp` | 恰好两尾彼此分离的鲟鱼游过粗底质；不显示性别、配对、卵或产卵接触 |
| 06 | `./images/species/chinese-sturgeon/06-edna-water-monitoring.webp` | 恰好两名研究人员在一艘铝船上采集和封存水样，画面无鱼；单次 eDNA 取样不能确定物种存在、丰度或趋势 |

### 六张图的实际提示词边界

**共同正向锚点**：`photorealistic underwater wildlife editorial, Chinese sturgeon, Acipenser sinensis, elongated robust body, broad flattened adult rostrum when adult, tiny lateral eyes, four short smooth barbels on underside closer to the toothless protrusible mouth than the snout tip, five longitudinal rows of large bony scutes, dorsal and anal fins far back, strongly heterocercal tail with longer upper lobe, gray-black back, gray to muted reddish-brown flanks, pale cream belly, anatomically coherent, entire fish visible`。

**共同排除项**：`no Russian sturgeon, no Dabry's sturgeon claim, no shark gill slits, no catfish whiskers, no teeth, no saw-like rostrum, no ordinary overlapping scales, no adipose fin, no symmetrical forked tail, no salmon colors, no aquarium glass, no fantasy glow, no text, no watermark`。

1. **封面**：单尾成鱼放在右侧，左侧保留水体负空间；长江深水河道应有自然悬沙和柔和散射光，不能做成清澈热带珊瑚海或水族馆。
2. **形态**：四根须必须短、彼此分开并位于口前；五列骨板沿背、左右侧和腹侧连续可读。不要生成十根须、双背鳍或一身菱形大鳞。
3. **生境**：以深水主槽和粗底质为主，只保留一尾小型远景鱼。不出现瀑布、鱼梯、坝体通道、鱼卵或产卵接触。
4. **幼鱼**：尖吻和明显骨板与成鱼帧形成发育差异，小蟹和微小底栖动物保持分离；鱼只接近，不捕获猎物。
5. **产卵洄游**：恰好两尾成鱼在粗底质上方同向游动，彼此保持间隔。画面不显示性别、卵、排精、配对或实际产卵。
6. **监测**：恰好两名研究人员在一艘无品牌铝船上完成水样采集和封存，画面无鱼。caption 写清单次 eDNA 水样不能确定个体数量、来源、繁殖状态或长期趋势。

## 研究阶段的来源常量与字段草案

以下代码块保存字段取舍、文案边界和来源映射。它是实现草案，不是已生成素材的验收结果。图像生成后必须按实图重写 `alt`、复核 `focalPoint`，并把最终提示词、源 PNG、转换命令和验收记录写入物种素材目录的 README。

```ts
const CHINESE_STURGEON_SOURCE_DATE = '2026-08-24' as const;
const CHINESE_STURGEON_CONTENT_DATE = '2026-08-24' as const;

const CHINESE_STURGEON_SOURCES = [
  {
    title: 'IUCN Red List: Acipenser sinensis (assessed 2019; amended publication 2022)',
    url: 'https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T236A219152605.en',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Eschmeyer’s Catalog of Fishes: Acipenser sinensis',
    url: 'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=9762',
    kind: 'taxonomy',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Brownstein & Near 2025: Toward a Phylogenetic Taxonomy of Sturgeons',
    url: 'https://www.nearlab.org/uploads/1/3/3/7/133700440/190_brownstein_near2025sturgons.pdf',
    kind: 'taxonomy',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Eschmeyer’s Catalog of Fishes: Acipenser kikuchii synonym record',
    url: 'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=27532',
    kind: 'taxonomy',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'CITES: Appendices I, II and III, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'CMS: Acipenser sinensis, Appendix II since 1999',
    url: 'https://www.cms.int/species/acipenser-sinensis',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: '国家林草局、农业农村部：国家重点保护野生动物名录（2021 年第 3 号）',
    url: 'https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: '农业部：中华鲟拯救行动计划（2015—2030 年）',
    url: 'https://cjyzbgs.moa.gov.cn/tzgg/201904/t20190428_6220349.htm',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: '农业农村部：关于坚定不移推进长江十年禁渔工作的意见（2024）',
    url: 'https://cjyzbgs.moa.gov.cn/tzgg/202403/t20240322_6452080.htm',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: '农业农村部：长江流域水生生物资源及生境状况公报（2024 年）答记者问',
    url: 'https://cjyzbgs.moa.gov.cn/zcjd/202509/t20250918_6477464.htm',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: '农业农村部：长江流域水生生物资源及生境状况公报（2025 年）发布信息',
    url: 'https://nyncw.cq.gov.cn/zwxx_161/ywxx/202604/t20260408_15596444_wap.html',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries: Chinese Sturgeon species profile',
    url: 'https://www.fisheries.noaa.gov/species/chinese-sturgeon',
    kind: 'general',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries 2021: Five-year review of five foreign sturgeon species',
    url: 'https://repository.library.noaa.gov/view/noaa/30918/noaa_30918_DS1.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Wei 2020: Conservation of Chinese sturgeon based on its life history',
    url: 'https://jlakes.alljournals.cn/html/2020/5/20200506.html',
    kind: 'general',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Huang & Wang 2018: Yangtze Dams Increasingly Threaten the Survival of the Chinese Sturgeon',
    url: 'https://doi.org/10.1016/j.cub.2018.09.032',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Wang et al. 2012: Migrations and movements of adult Chinese sturgeon in the Yangtze River',
    url: 'https://doi.org/10.1111/j.1095-8649.2012.03365.x',
    kind: 'distribution',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Sun et al. 2019: Growth and feeding ecology of juvenile Chinese sturgeon in the Yangtze Estuary',
    url: 'https://doi.org/10.1111/jai.13835',
    kind: 'ecology',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Wei et al. 2009: Using drift nets to monitor Chinese sturgeon spawning',
    url: 'https://doi.org/10.1111/j.1439-0426.2009.01269.x',
    kind: 'ecology',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Liu et al. 2007: Reproductive biology and artificial propagation below Gezhouba Dam',
    url: 'https://pubmed.ncbi.nlm.nih.gov/17763749/',
    kind: 'ecology',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2009: A bedform morphology hypothesis for Chinese sturgeon spawning areas',
    url: 'https://doi.org/10.1007/s10641-008-9410-2',
    kind: 'ecology',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Artyukhin et al. 2007: Morphology and ecology of Pacific sturgeons',
    url: 'https://doi.org/10.1007/s10641-006-9157-6',
    kind: 'taxonomy',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'CITES: Sturgeons and Paddlefishes Identification Guide',
    url: 'https://cites.org/sites/default/files/vc-files/files/CAN-CITES_Sturgeons_Guide.pdf',
    kind: 'taxonomy',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
  {
    title: 'Huang & Li 2024: Dams trigger exponential population declines of migratory fish',
    url: 'https://doi.org/10.1126/sciadv.adi6580',
    kind: 'conservation',
    accessedAt: CHINESE_STURGEON_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const chineseSturgeonDraft = {
  id: 'species-acipenser-sinensis',
  slug: 'chinese-sturgeon',
  names: {
    zh: '中华鲟',
    en: 'Chinese Sturgeon',
    aliases: [
      'Sagami Sturgeon（历史英文名）',
      'Acipenser kikuchii（同物异名）',
      'Sinosturio sinensis（2025 年提出的新组合）',
    ],
  },
  scientificName: 'Acipenser sinensis',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Actinopterygii', '辐鳍鱼纲'),
    taxon('Acipenseriformes', '鲟形目'),
    taxon('Acipenseridae', '鲟科'),
    taxon('Acipenser', '鲟属'),
  ),
  conservation: conservation('CR', 'decreasing', 2019, 'A2bc'),
  distribution: {
    realms: ['freshwater', 'marine'],
    continents: ['亚洲'],
    regions: [
      '葛洲坝以下长江干流与长江口',
      '黄海和东海近岸及大陆架海域',
      '历史东亚沿海河流与朝鲜半岛、日本近海记录',
    ],
    countries: ['中国'],
    range:
      '当前自然生活史核心连接葛洲坝以下长江、长江口和黄海至东海近岸。珠江、西江、闽江、钱塘江、黄河及朝鲜半岛、日本近海属于历史或状态未明记录，不能画成当前稳定繁殖范围。',
    center: { lat: 30.5, lng: 116.5 },
  },
  habitats: [
    {
      name: '长江深水主槽与深潭',
      realm: 'freshwater',
      description:
        '成鱼利用葛洲坝以下长江主槽溯游、越冬、等待性腺成熟并在产后降河；水温、流量与连续通道决定可用性。',
      isPrimary: true,
    },
    {
      name: '卵石与砾石产卵河床',
      realm: 'freshwater',
      description:
        '秋季在流速较强、河床起伏且粗底质洁净的河段完成体外受精，黏性卵沉积于石隙；现存条件受坝群调度和泥沙过程控制。',
      isPrimary: true,
    },
    {
      name: '中下游边滩与河滨浅水区',
      realm: 'freshwater',
      description:
        '仔稚鱼顺流扩散后在底质空隙和浅水边滩藏匿、开口摄食并逐步降河，河道整治和水位过程会改变可用面积。',
    },
    {
      name: '长江口与黄海、东海近岸',
      realm: 'marine',
      description:
        '幼鱼在河口完成盐度适应并利用底栖食物，亚成体和成体在近岸大陆架海域生长；海洋阶段的精细路线仍缺长期野生追踪。',
      isPrimary: true,
    },
  ],
  measurements: {
    length: {
      min: 189,
      max: 383,
      unit: 'cm',
      note: '1981—1996 年长江湖北段繁殖群体 n=415 的全长范围；平均 275.9 cm，不是物种极值',
    },
    weight: {
      min: 42.5,
      max: 420,
      unit: 'kg',
      note: '同一繁殖群体 n=415 的体重范围；平均 144.0 kg，不代表所有年龄阶段',
    },
  },
  diet: {
    types: ['carnivore', 'piscivore'],
    foods: [
      '端足类、多毛类与其他底栖无脊椎动物',
      '虾、蟹与双壳类软体动物',
      '底栖及近底小型鱼类',
      '幼鱼阶段的水生昆虫与小型底栖动物',
    ],
    description:
      '底栖肉食者，食谱随体型和水域转换。长江口小型幼鱼更多利用端足类、蟹和双壳类，较大幼鱼增加鱼类；成熟鱼在海洋积累能量，溯江繁殖期长期少食或停食。',
  },
  activity: [
    '在海洋摄食生长，接近性成熟后于夏季进入长江口并溯江',
    '亲鱼可在长江停留约 17 至 19 个月，等待下一年秋季的产卵窗口',
    '沿深水主槽贴近底层长距离迁移，不以跃瀑或穿坝方式上溯',
    '多在秋季夜间于急流粗底质河床撒播黏性沉底卵，不筑巢或护卵',
    '仔鱼主动上浮后随水流向下游扩散，随后利用石隙和浅水边滩',
    '幼鱼经长江口完成盐度适应，转入黄海和东海近岸底层生境',
  ],
  tags: [
    'IUCN 极危',
    '种群趋势下降',
    '中国国家一级保护',
    'CITES 附录 II',
    'CMS 附录 II',
    '鲟形目',
    '大型洄游鱼类',
    '溯河产卵',
    '淡水与海洋',
    '底栖肉食',
    '晚熟',
    '长江旗舰物种',
    '连续九年未检出自然繁殖',
    '人工保种与标记放流',
    '近期属名修订争议',
  ],
  summary:
    '连接长江与东亚近海的极危大型洄游鱼。它晚熟、繁殖间隔长，历史产卵路线被大坝截断，2017 至 2025 年连续九年未监测到自然繁殖。',
  description:
    '中华鲟具有宽扁吻、四根靠近腹位口的短须、五列大型骨板和上叶更长的歪尾。幼鱼在长江出生并降河，经长江口进入黄海和东海近岸生长；成鱼十多年后返江，在秋季急流卵砾石河床产卵。葛洲坝及上游梯级工程截短历史洄游路线，改变水温、流量、泥沙和产卵窗口。IUCN 当前将其列为极危且趋势下降。人工保种和大规模放流能补充可检测个体，但恢复目标仍是让足够多的成鱼完成返河并产生可持续的野生后代。',
  storySections: [
    {
      key: 'river-sea-river',
      label: '洄游',
      title: '一条鱼跨过江海两种世界',
      body:
        '中华鲟在长江淡水中出生，沿中下游和河口逐步降海，在黄海和东海近岸摄食生长。接近性成熟后，成鱼再进入长江，可能停留一年多，等待下一年秋季的繁殖窗口。',
    },
    {
      key: 'armoured-body',
      label: '形态',
      title: '五列骨板和一张朝下的嘴',
      body:
        '宽扁吻下的四根短须把底层信号带向无齿、可伸缩的腹位口。五列大型骨板沿身体排列，歪尾上叶明显更长。幼鱼吻部更尖，普通照片仍无法可靠排除长江鲟。',
    },
    {
      key: 'dammed-spawning-route',
      label: '阻隔',
      title: '大坝留下的短产卵窗口',
      body:
        '葛洲坝截断通往长江上游和金沙江的历史路线，中华鲟只能利用坝下替代产卵场。上游梯级工程又改变水温到达、流量和泥沙过程，使有限的秋季产卵条件更难同时出现。',
    },
    {
      key: 'nine-silent-autumns',
      label: '监测',
      title: '九个秋天，没有检出新的卵和仔鱼',
      body:
        '2016 年是最近一次确认的自然繁殖。2017 至 2025 年连续九年未监测到自然繁殖；这说明危机持续，却不是对每一处河床的绝对零证明，结论必须保留方法和检出概率边界。',
    },
    {
      key: 'after-release',
      label: '放流',
      title: '抵达河口，只完成恢复链的一段',
      body:
        '2025 年 361 尾超声标记放流个体中有超过六成到达长江口。下一步还包括海洋长期存活、达到性成熟、返河、成功产卵和后代招募；累计放流尾数不能替代这些结果。',
    },
    {
      key: 'changing-genus',
      label: '分类',
      title: '一个属名正在变化',
      body:
        '2025 年系统发育研究提出恢复 Sinosturio，把中华鲟写成 Sinosturio sinensis。Catalog 已记录该处理，却仍把 Acipenser sinensis 标为当前有效名；保护公约和法律也继续沿用旧组合。',
    },
  ],
  keyFacts: [
    'Catalog of Fishes 当前状态为 Acipenser sinensis；Sinosturio sinensis 是 2025 年提出、尚未统一采用的新组合。',
    'IUCN 当前等级为 CR，趋势下降，准则 A2bc，评估日期为 2019 年 9 月 15 日。',
    '中华鲟列入 CITES 附录 II、CMS 附录 II，并是中国国家一级重点保护野生动物。',
    '当前自然生活史核心连接葛洲坝以下长江、长江口和黄海至东海近岸。',
    '415 尾繁殖群体样本全长 189 至 383 厘米、体重 42.5 至 420 千克。',
    '成鱼的四根短须靠近无齿腹位口，身体有五列大型骨板和上叶更长的歪尾。',
    '幼鱼吻部更尖，体型增大后食谱从小型底栖无脊椎动物增加到更多鱼类。',
    '雌鱼平均初次繁殖约 16.8 至 18 岁，野生雌鱼通常约 4 年再次繁殖。',
    '2016 年是最近一次确认的自然繁殖；2017 至 2025 年连续 9 年未监测到。',
    '2024 年到达葛洲坝下的成熟成鱼估计为 10 尾，这不是全球个体总数。',
    '2025 年 361 尾超声标记放流个体中超过 60% 到达长江口，不能据此推算返河繁殖率。',
    '普通图像不能可靠区分中华鲟和长江鲟，鉴定需要组合形态、计数、体尺、地点与遗传证据。',
  ],
  threats: [
    '葛洲坝阻断历史洄游路线，上游梯级工程改变产卵场水温、流量、泥沙和河床过程',
    '成熟繁殖群体极小、晚熟且繁殖间隔长，连续多年缺乏确认的自然补充',
    '航道疏浚、采砂、岸线硬化与河道工程损害产卵河床、仔稚鱼浅滩和河口索饵场',
    '非法捕捞、兼捕、遗留网具和不规范救护对极少野外个体造成额外死亡风险',
    '河流和河口污染物可能影响幼鱼生长、健康与繁殖，但单一污染物不能解释全部衰退',
    '非本地养殖鲟类逃逸带来食物与繁殖空间竞争、疾病和潜在遗传风险',
    '高强度航运、噪声和碰撞扰动长江干流与河口迁移通道',
    '气候变暖、低枯水位和极端水文与坝群运行叠加，改变产卵窗口和河口条件',
    '只追求放流尾数而缺少家系、健康、海洋存活、返河和繁殖贡献评价',
  ],
  conservationActions: [
    '以自然繁殖恢复为核心修复葛洲坝下产卵河床，并按成鱼到达、水温、流速与泥沙实施生态调度',
    '保护长江中下游仔稚鱼浅滩、长江口盐度过渡区和黄海、东海近岸索饵场的完整连通',
    '延续十年禁渔和专项执法，清理遗留网具并建立误捕、救护、取样和快速放归流程',
    '组合卵仔鱼底网、声学、eDNA、遥测和标记回报，区分野生出生、人工放流与来源不明个体',
    '建立保种亲本家谱、遗传和组织库、疾病筛查与个体标记，用有效亲本数和遗传贡献评价放流',
    '控制非本地鲟类养殖逃逸，对长江内外来鲟类和疑似杂交个体开展遗传鉴定',
    '限制关键河段和时段的疏浚、采砂、岸线硬化、强噪声和高速航运',
    '持续监测污染物、病原、个体健康和繁殖指标，以野外证据检验因果风险',
    '通过 CMS 协调东亚近海误捕与标记回报，通过 CITES 核验跨境活体、标本和产品来源',
    '分别公开成熟鱼到达、自然繁殖检出、放流家系、河口到达和返河繁殖贡献',
  ],
  metrics: {
    adultLengthCm: [189, 383],
    adultMassKg: [42.5, 420],
  },
  featuredStats: [
    {
      key: 'global-iucn-status',
      label: 'IUCN 全球等级',
      value: 'CR',
      unit: '极危',
      note: '2019 年评估，趋势下降，准则 A2bc；2022 年为修订发布年',
    },
    {
      key: 'spawning-stock-size',
      label: '繁殖群体实测全长',
      value: '189–383',
      unit: '厘米',
      note: '1981—1996 年长江湖北段 n=415，平均 275.9 厘米，不是物种极值',
    },
    {
      key: 'dam-truncated-route',
      label: '大坝截短历史路线',
      value: '约 1,175',
      unit: '千米',
      note: 'Huang 与 Wang 2018 的模型估计，不是现存河段长度',
    },
    {
      key: 'natural-spawning-gap',
      label: '未检出自然繁殖',
      value: '9',
      unit: '年',
      note: '2017—2025 年；2016 年为最近一次确认，未检出不等于绝对未发生',
    },
  ],
  media: {
    image: './images/species/chinese-sturgeon/01-yangtze-migration-portrait.webp',
    alt: '一尾完整的成年中华鲟在浑浊蓝绿色长江深水河道的右侧朝左游动，画面左侧留有开阔水体，长吻、四根短须、多列大型骨板和歪尾可见',
    focalPoint: { x: 0.69, y: 0.57 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/chinese-sturgeon/02-scuted-body-and-barbels.webp',
        alt: '一尾完整的成年中华鲟占据水下近景，长吻下的四根短须、多列大型骨板和上叶较长的歪尾清楚可见',
        title: '五列骨板保护一副洄游身体',
        caption:
          '须的位置、吻部、骨板和歪尾需要组合判断；普通图像看不清鳃耙和鳍条，也不能单独排除长江鲟。',
        focalPoint: { x: 0.5, y: 0.52 },
      },
      {
        image: './images/species/chinese-sturgeon/03-deep-river-spawning-habitat.webp',
        alt: '一尾小型远景鲟鱼在宽深河道右侧贴近由卵石、砾石和大块石组成的粗底质上方游动',
        title: '粗底质深河道提供繁殖条件',
        caption:
          '画面只重建深水与粗底质的组合；一尾远景鱼不能证明物种身份、河段位置、产卵场占用或自然繁殖发生。',
        focalPoint: { x: 0.65, y: 0.53 },
      },
      {
        image: './images/species/chinese-sturgeon/04-estuary-juvenile-foraging.webp',
        alt: '一尾完整的中华鲟幼鱼在浑浊河口的泥沙底层接近一只小蟹和数个微小底栖动物，尚未接触猎物',
        title: '幼鱼沿着河口底层寻找食物',
        caption:
          '接近猎物不等于已经捕获；同框的少数底栖动物也不能代表幼鱼在不同体型和季节的完整食谱。',
        focalPoint: { x: 0.52, y: 0.56 },
      },
      {
        image: './images/species/chinese-sturgeon/05-gravel-bed-spawning-run.webp',
        alt: '恰好两尾彼此分离的成年鲟鱼在清澈河水中沿卵石、砾石和大块石组成的粗底质河床朝左游动',
        title: '两尾成鱼经过粗底质河床',
        caption:
          '同框游动不能确定性别、来源、配对或产卵行为；画面没有卵，也不证明自然繁殖已经发生。',
        focalPoint: { x: 0.51, y: 0.53 },
      },
      {
        image: './images/species/chinese-sturgeon/06-edna-water-monitoring.webp',
        alt: '恰好两名研究人员在浑浊长江水面的铝船上采集水样，一人用长杆取水，另一人处理样品瓶，画面没有鱼',
        title: '一瓶水样寻找留下的环境 DNA',
        caption:
          'eDNA 可补充物种检出，但单次水样不能单独确认现生个体在场，阴性结果也不能排除物种，更不能确定数量、来源、繁殖状态或长期趋势。',
        focalPoint: { x: 0.67, y: 0.58 },
      },
    ],
  },
  sources: CHINESE_STURGEON_SOURCES,
  featured: true,
  publishedAt: CHINESE_STURGEON_CONTENT_DATE,
  updatedAt: CHINESE_STURGEON_CONTENT_DATE,
} as const satisfies Species;
```

`metrics.adultLengthCm` 和 `adultMassKg` 使用 415 尾历史繁殖群体样本，只适合成年繁殖体的目录比较。若产品把 `metrics` 定义为物种绝对上下限，应删除这两个字段，只保留带样本说明的 `measurements`。`featured: true` 是首页编排选择，不属于物种事实。

## 来源覆盖清单

| 主题 | 直接来源 | 本文用途与限制 |
| --- | --- | --- |
| 当前有效名、作者和模式信息 | [Catalog of Fishes: *A. sinensis*](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=9762) | 当前页面明确把 *Acipenser sinensis* 标为 `Current status`；同页也收录 *Sinosturio* 处理，不能只摘其中一行 |
| 近期属级修订 | [Brownstein & Near 2025](https://www.nearlab.org/uploads/1/3/3/7/133700440/190_brownstein_near2025sturgons.pdf) | 线粒体 DNA、30 个核基因和形态矩阵支持恢复 *Sinosturio*；这是原始分类提议，不代表各名录已采用 |
| 同物异名和历史英文名 | [Catalog: *A. kikuchii*](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=27532) [ITIS](https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=550555) | *A. kikuchii* 为同物异名，Sagami Sturgeon 为历史英文名；不进入主展示名 |
| IUCN 全球评估 | [IUCN current DOI](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T236A219152605.en) [NOAA/USFWS metadata](https://services2.arcgis.com/C8EMgrsFcRFL6LrL/arcgis/rest/services/SturgeonChinese_20250627/FeatureServer) [FishBase mirror](https://fishbase.se/summary/Sinosturio_sinensis.html) | CR、decreasing、A2bc、2019-09-15 评估和 2022 修订发布；IUCN 全文受访问限制，FishBase 只承担字段交叉核对 |
| CITES | [2026 current appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [sturgeon programme](https://cites.org/eng/prog/sturgeon/index.shtml) | 鲟形目附录 II 总括列名及两种附录 I 例外、当前生效日和贸易制度；不等于 IUCN 等级 |
| CMS | [species page](https://www.cms.int/species/acipenser-sinensis) [current appendices](https://www.cms.int/species/appendix-i-ii-cms) | 1999 年起附录 II、范围国记录和迁徙合作含义；范围国不等于现存繁殖国 |
| 中国国内保护 | [2021 年第 3 号公告](https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html) [名录 PDF](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf) | 国家一级、现行中文名和法律学名；名录继续采用 *Acipenser* |
| 救护政策和十年禁渔 | [2015 至 2030 年行动计划](https://cjyzbgs.moa.gov.cn/tzgg/201904/t20190428_6220349.htm) [2024 年保护意见](https://cjyzbgs.moa.gov.cn/tzgg/202403/t20240322_6452080.htm) | 保种、放流、产卵场修复、生态调度、全生活史保护和禁捕；计划目标不等于已实现成效 |
| 当前繁殖和成熟鱼状态 | [2024 年公报答记者问](https://cjyzbgs.moa.gov.cn/zcjd/202509/t20250918_6477464.htm) [2025 年公报发布信息](https://nyncw.cq.gov.cn/zwxx_161/ywxx/202604/t20260408_15596444_wap.html) | 2024 年到坝下成鱼 10 尾、2017 至 2024 未检出和 2025 继续未检出；成鱼到达估计不是全球数量 |
| 分布、体型和综合威胁 | [NOAA species profile](https://www.fisheries.noaa.gov/species/chinese-sturgeon) [2021 five-year review](https://repository.library.noaa.gov/view/noaa/30918/noaa_30918_DS1.pdf) | 当前与历史分布、洄游、生境和威胁综合；部分页面丰度数字较旧，以更新政府监测补充 |
| 长江生活史综合 | [Wei 2020](https://jlakes.alljournals.cn/html/2020/5/20200506.html) | 415 尾繁殖群体体尺与年龄、江海时间、幼鱼阶段、繁殖节律和保护反思；综述整合多个年代，逐项保留时期 |
| 大坝量化影响 | [Huang & Wang 2018](https://doi.org/10.1016/j.cub.2018.09.032) | 1,175 千米路线损失、性腺发育延迟和繁殖能力模型；模型值不是年度监测值 |
| 成鱼遥测 | [Wang et al. 2012](https://doi.org/10.1111/j.1095-8649.2012.03365.x) | 27 尾标记、两尾完整路线及速度；小样本不能外推固定迁移速度 |
| 幼鱼食性 | [Sun et al. 2019](https://doi.org/10.1111/jai.13835) | 2015 年长江口幼鱼生长与体型相关食谱转换；不代表成鱼或全年菜单 |
| 自然产卵监测 | [Wei et al. 2009](https://doi.org/10.1111/j.1439-0426.2009.01269.x) | 1996 至 2004 年受精日期、批次、早期生活史和底网方法；历史成功期不能直接代表当前窗口 |
| 亲鱼繁殖生物学 | [Liu et al. 2007](https://pubmed.ncbi.nlm.nih.gov/17763749/) | 57 尾 1998 至 2004 年亲鱼的性别体尺、年龄和 20 万至 59 万粒怀卵量；人工催产结果不等于野外成功率 |
| 产卵河床 | [Zhang et al. 2009](https://doi.org/10.1007/s10641-008-9410-2) [Zhuang et al. 2007](https://doi.org/10.1016/S1872-2032(07)60023-7) | 河床形态、粗底质、水温和流速观察；不同模型与年份的范围不能写成硬阈值 |
| 近似种形态 | [Artyukhin et al. 2007](https://doi.org/10.1007/s10641-006-9157-6) [CITES identification guide](https://cites.org/sites/default/files/vc-files/files/CAN-CITES_Sturgeons_Guide.pdf) | 中华鲟、长江鲟和俄罗斯鲟的骨板、鳍条、鳃耙与须位置；计数重叠使图片鉴定受限 |
| 灭绝情景模型 | [Huang & Li 2024](https://doi.org/10.1126/sciadv.adi6580) | 模型中的“功能性灭绝”和 EW 预测；不能替代 IUCN 正式等级或官方当年监测 |

## 仍然不确定或需后续更新的事项

1. **属名采用仍在变化**：Brownstein 与 Near 的 *Sinosturio* 处理有系统发育依据，Catalog 已收录但未改 `Current status`。每次更新前需同时核对 Catalog 页面、变更日志和其他权威鱼类目录，不能只看搜索结果标题。
2. **IUCN 全文访问受限**：本轮无法直接下载修订评估 PDF。正式值已由 DOI 和两处数据库交叉核对；若 IUCN 发布新评估，应成套更新等级、趋势、准则、评估日、分布和威胁。
3. **当前海洋分布仍粗糙**：误捕、卫星或声学标记和 eDNA 能提供海域线索，许多近年数据来自人工放流个体。它们不能单独证明自然出生个体的稳定海洋种群或季节路线。
4. **没有可靠的当前全球成熟个体总数**：2024 年葛洲坝下 10 尾是到达产卵区的年度估计，不覆盖未到坝下、海洋中、未成熟或漏检个体，也不能填 `estimatedMatureIndividuals`。
5. **自然繁殖非检出存在方法边界**：2017 至 2025 的连续非检出来自现有监测。低密度、时空采样和检测概率使其不能证明所有河床绝对零产卵，但长期一致的非检出仍是严重警报。
6. **体型极值不一致**：415 尾历史繁殖群体提供最可解释的成年范围；NOAA、FishBase和旧文献的最大长度、体重不同。新记录只有在标本、测量方法和来源明确时才进入结构化字段。
7. **寿命尚无统一野外范围**：野外样本最高 34 岁、NOAA 的“至少 35 岁”和圈养推测约 40 岁回答不同问题，当前不填 normalized lifespan。
8. **产卵场尺度和阈值依研究方法改变**：核心检出河床、较宽适生河段、水动力模型范围和管理边界不能互换；水温、流速也不是永恒常数。
9. **野生成鱼在淡水的摄食程度仍需细化**：来源支持长时间少食或停食，但个体差异和偶发摄食不明。图像采用保守的“不表现积极捕食”。
10. **放流对野生繁殖的贡献未闭环**：河口到达率只覆盖早期迁移。需要多年海洋存活、返河、亲子鉴定和自然出生后代招募才能量化种群贡献。
11. **外来鲟类影响多为风险推断**：养殖逃逸已有事件，竞争、疾病和杂交后果仍缺范围级野外量化。文案保持“可能”和“潜在”。
12. **图片不能完成物种鉴定**：中华鲟与长江鲟外形重叠，鳃耙和多数鳍条在宽景不可见。所有生成图必须写成编辑示意，不得冒充标本照片。
13. **图片焦点值已验收**：2026-08-25 按六张最终 WebP 完成静态构图检查，当前 `focalPoint` 与主体位置一致。任何重生成、裁切或缩放都要求重新测量。
14. **当前国家字段是一种产品取舍**：`countries: ['中国']` 表达当前自然生活史核心。若未来 schema 支持 `extirpatedCountries` 或历史范围，朝鲜、韩国和日本应以独立状态字段恢复，不能直接混入现存国家列表。

## 最终实施与测试清单

### 数据集成

- 在 `src/data/species.ts` 顶部新增一次 `CHINESE_STURGEON_SOURCE_DATE`、`CHINESE_STURGEON_CONTENT_DATE` 和 `CHINESE_STURGEON_SOURCES`，对象尾部只引用来源常量。
- 固定 `id: 'species-acipenser-sinensis'`、`slug: 'chinese-sturgeon'`、`scientificName: 'Acipenser sinensis'`。
- 分类路径使用 `Chordata / Actinopterygii / Acipenseriformes / Acipenseridae / Acipenser`。不要在本轮把 genus 改成 `Sinosturio`，也不要把纲写成 `Chondrichthyes`。
- `names.aliases` 分开标记同物异名 *Acipenser kikuchii*、历史英文名 Sagami Sturgeon 和新组合 *Sinosturio sinensis*，不把三者都叫同物异名。
- 保护字段固定为 `conservation('CR', 'decreasing', 2019, 'A2bc')`；搜索确认没有旧年份、旧准则或 `unknown` 趋势。
- `distribution.realms` 同时包含 freshwater 和 marine；`countries` 当前只列中国；`range` 保留历史河流、境外海域和现存核心的差别。
- `measurements` 使用 n=415 繁殖群体范围并保留 note。决定是否保留相同 `metrics` 前，先确认目录比较字段是否允许样本化成年范围。
- 不填 `estimatedMatureIndividuals` 或 `lifespanYears`；10 尾、34 岁、35 岁和约 40 岁都不能直接变成对应全种字段。
- `storySections` 恰好 6 段，`featuredStats` 恰好 4 项，gallery 恰好 5 张；所有时效性数字都保留年份、样本量和解释边界。

### 图像与静态资源

- 源文件目录采用 `src/assets/source/species/chinese-sturgeon/`，运行时目录采用 `public/images/species/chinese-sturgeon/`；文件名与本档案六条路径逐字一致。
- 在物种源图 README 保存共同形态锚点、逐图最终提示词、长江鲟和俄罗斯鲟排除项、生成日期、源图到 WebP 映射、转换参数与静态验收结果。
- 更新 `src/assets/source/README.md` 总索引；本研究任务本身不编辑这些文件。
- 用静态工具确认六张 PNG 与六张 WebP 均为 1536×1024、8-bit sRGB、无 alpha，WebP 能正常解码且不是误命名 PNG。
- 逐图静态检查：01 单尾完整成鱼与左侧负空间；02 四根短须、多列骨板和歪尾可读；03 一尾远景鱼与粗底质深河道；04 一尾幼鱼接近分离的微小底栖生物且无捕获；05 恰好两尾分离成鱼且无卵或产卵接触；06 恰好两名研究人员采集水样且画面无鱼。
- 图片生成后按实图重写 alt 和 focal point；不要把草案 alt 当作已经发生的画面验收。

### 分类测试与计数

- 在 `tests/taxonomy.test.mjs` 增加中华鲟完整档案测试：主名与别名、IUCN 字段、双 realm、测量 note、6 段故事、4 项统计、5 张 gallery、来源数量和六条媒体路径。
- 增加分类路径断言：`Animalia > Chordata > Actinopterygii > Acipenseriformes > Acipenseridae > Acipenser > Acipenser sinensis`。
- 增加命名边界断言：主学名首词与 genus 都是 `Acipenser`；别名中保留 `Sinosturio sinensis`，但分类树不新增 `Sinosturio`。
- 若当前分支基线仍是 35 个物种、108 个分类单元节点，本轮仅新增中华鲟后应为 **36 个物种、112 个分类单元节点、148 个总节点**；`Animalia` 后代物种数为 36，`Chordata` 为 31，新建的 `Actinopterygii`、`Acipenseriformes`、`Acipenseridae` 和 `Acipenser` 各有 1 个物种。并行改动出现时按实际树重算。
- 保留既有唯一性与必填检查：`id`、`slug`、学名、分类叶、source URL、图片路径和日期不能重复或缺失。

### 命令验证

- 运行 `npm run typecheck`，确认 taxon、source kind、diet type、realm、日期和图片模板字面量通过 TypeScript。
- 运行 `npm test`，确认新分类路径、计数、完整档案和既有回归测试全部通过。
- 运行 `npm run build`，确认六张 WebP 被 Vite 解析并进入构建产物。
- 用 `file`、`identify` 或仓库既有静态检查脚本核对六张 PNG 与 WebP，不启动 GUI 或无头浏览器。
- 运行 `git diff --check`，审阅 `git diff --stat` 和目标文件清单，确保文献下载、临时图、生成缓存和无关改动没有进入提交。

### TODO 收尾顺序

- 只有数据对象、分类测试、六张源 PNG、六张运行时 WebP、物种素材 README、源图总索引、typecheck、test、build 和静态图像检查全部完成后，才从 `docs/todo.md` 删除中华鲟条目。
- 仅完成研究文档、部分图片或未验证代码时，不提前删除 TODO。
- 删除前按当前 TODO 原文和空格格式做精确匹配，不顺手改动相邻动物。

## 最终实施建议

- 本轮主名采用 *Acipenser sinensis*。把 *Sinosturio sinensis* 放入别名、分类故事和更新清单，等待 Catalog 的 `Current status` 与保护名录形成更一致的采用结果。
- 固定 IUCN 为 `CR / decreasing / 2019 / A2bc`，把 2022 只写成修订发布年。
- 用 freshwater 与 marine 两个 realm 表达完整江海生活史；当前国家只列中国，历史河流和境外海域写入范围说明。
- 体尺采用 415 尾历史繁殖群体样本，不用互相冲突的最大长度、最大体重拼接物种极值；寿命和成熟个体数量暂不进入 metrics。
- 六图围绕成鱼形态、粗底质深河道、幼鱼河口搜寻、成鱼产卵洄游和 eDNA 水样监测展开。每张图都保留“示意而非鉴定或现场记录”的边界。
- 把自然繁殖恢复置于保护叙事中心。放流尾数和河口到达率作为阶段指标展示，不能替代野生出生、海洋存活、返河和繁殖贡献。
