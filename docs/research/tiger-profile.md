# 虎（*Panthera tigris*）完整档案研究

- 检索与核验日期：2026-08-25
- 使用范围：为 `src/data/species.ts` 新增虎档案、制作 1 张封面与 5 张 gallery 图、补充分类测试并最终收尾 `docs/todo.md`
- 证据标准：IUCN 正式物种评估、Mammal Diversity Database、CITES、政府名录、政府间保护方案和原始同行评审论文。宣传口径、不同年份国家调查和未经限定的二手数字不进入结构化字段。
- 本文只编辑研究与集成方案，不编辑代码、数据、测试或素材。并行素材任务已于 2026-08-25 生成并静态验收六张源 PNG 与六张运行时 WebP；物种对象、测试、总索引和 TODO 仍待主任务集成。

## 结论摘要

### 主记录采用物种级 *Panthera tigris*

美国哺乳动物学会 Mammal Diversity Database（MDD）接受 **`Panthera tigris (Linnaeus, 1758)`**，并给出 `Carnivora / Felidae / Panthera` 的上级分类。仓库模型不保存命名作者与年份，因此主记录只写 `Panthera tigris`，分类路径固定为动物界、脊索动物门、哺乳纲、食肉目、猫科、豹属。[MDD](https://www.mammaldiversity.org/taxon/1006023/)

中文主名采用中国现行《国家重点保护野生动物名录》中的“**虎**”，英文名为 “Tiger”。“老虎”可作为中文俗名；东北虎、孟加拉虎、华南虎、马来虎和苏门答腊虎等名称指向种下地理单元，不是整个物种的普通别名，不放入 `names.aliases`。[国家林草局、农业农村部公告 2021 年第 3 号](https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html)

### 亚种数量仍有实质争议

2015 年 Wilting 等综合头骨、毛皮、生态和分子数据，支持大陆虎 *P. t. tigris* 与巽他虎 *P. t. sondaica* 两个亚种；2018 年 Liu 等对 32 份有凭证标本开展全基因组分析，支持六个现生谱系。IUCN/SSC 猫科专家组当前页面同时说明两套处理，并明确写明虎的种下分类仍在复核。[Wilting et al. 2015](https://doi.org/10.1126/sciadv.1400175) [Liu et al. 2018](https://doi.org/10.1016/j.cub.2018.09.019) [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-tiger)

因此本档案不在 `taxonomy`、`aliases`、体尺注释或图像 caption 中指定亚种。六张图都应标为物种级编辑示意，不能凭被毛色调、体型或背景声称画面属于某一亚种。

### IUCN 当前结构化值是 2021 年评估

Goodrich 等完成于 2021-12-15、在 2022 年发布的全球评估将虎列为 **濒危 EN、A2abcd、种群趋势下降**。这四项应成套写为 `conservation('EN', 'decreasing', 2021, 'A2abcd')`，不能把发布年 2022 当成评估年。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T15955A214862019.en)

评估汇总的全球数量为 **3,726 至 5,578 只不含幼崽的虎**，最佳估计 4,485 只；按 IUCN 的成熟个体定义换算为 **2,608 至 3,905 只成熟个体**，最佳估计 3,140 只。数据主要来自各地捕获再捕获与占域方法，并非同一天、同一方法完成的全球普查。国家调查年份不同，跨境个体还可能被重复计入。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T15955A214862019.en) [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-tiger)

新估计高于旧评估，部分原因是监测覆盖与估算方法改善，不能单凭两次全球数字断言虎已经增加。南亚与东北亚部分种群恢复，不抵消东南亚持续衰退、局地灭绝和范围级下降；结构化趋势仍用 `decreasing`。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T15955A214862019.en) [Global Tiger Recovery Program 2.0](https://globaltigerforum.org/wp-content/uploads/2023/08/GTRP_2.0_2023-34_Rev.1.pdf)

### 四套状态必须分开

- **IUCN Red List** 回答灭绝风险：EN、A2abcd、下降，评估年 2021。
- **IUCN Green Status** 回答距离充分恢复还有多远：近期补充评估把虎列为 `Critically Depleted`，恢复分数约 14%。这不是第二个红色名录等级，不能覆盖 `conservation`。[IUCN Green Status supplementary information](https://nc.iucnredlist.org/redlist/content/attachment_files/Panthera_tigris_15955_Green_Status_Supplementary_Information.pdf) [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-tiger)
- **CITES** 回答国际贸易管制：*Panthera tigris* 列入附录 I，国际商业贸易受到严格禁止；非商业、科研等有限交易仍受许可制度管理，所以不能写成“一切交易绝对禁止”。[CITES 2026 Appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [Resolution Conf. 12.5 (Rev. CoP19)](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-12-05-R19.pdf)
- **中国国内保护** 回答中国法律等级：现行国家名录把“虎 *Panthera tigris*”列为国家一级重点保护野生动物。这是中国法定身份，不是全球等级。[国家林草局、农业农村部公告 2021 年第 3 号](https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html)

## 分布与生境

### 当前确认繁殖国家是 10 个

最新 IUCN 评估确认现存繁殖或常驻种群分布于 **孟加拉国、不丹、中国、印度、印度尼西亚、马来西亚、缅甸、尼泊尔、俄罗斯和泰国**。柬埔寨、老挝与越南在当前评估和 GTRP 2.0 中属于已失去野生虎的原分布国，不能混入 `distribution.countries` 的现存集合。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T15955A214862019.en) [Global Tiger Recovery Program 2.0](https://globaltigerforum.org/wp-content/uploads/2023/08/GTRP_2.0_2023-34_Rev.1.pdf)

GTRP 2.0 继续列出 13 个虎分布国项目成员，并另列准备重引入的哈萨克斯坦；这是保护计划的参与范围，不等于 14 个国家当前都有野生繁殖种群。MDD 页面中的国家状态也存在滞后或互相矛盾的元数据，因此生产记录的现存国家集合以 IUCN 2021 评估为准，MDD 只承担接受名和上级分类核验。[MDD](https://www.mammaldiversity.org/taxon/1006023/) [Global Tiger Recovery Program 2.0](https://globaltigerforum.org/wp-content/uploads/2023/08/GTRP_2.0_2023-34_Rev.1.pdf)

### 历史范围不能画成当前占域

虎的历史分布曾从土耳其东部、里海以南延伸到俄罗斯鄂霍次克海沿岸，并向南覆盖南亚、东南亚大陆及巽他群岛。当前占用范围不足历史范围的 7%；2001 至 2020 年记录的占用范围又由 1,049,430 平方千米降至 978,293 平方千米。产品地图应将 `regions` 和 `range` 写成文字概览，不能用当前 10 国整块着色来暗示全国连续分布。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-tiger) [Sanderson et al. 2023](https://doi.org/10.3389/fcosc.2023.1191280)

`center: { lat: 25, lng: 90 }` 仅是让亚洲范围在地图中可读的代表焦点，不是几何分布中心、种群重心或密度最高点。

### 虎是生境广谱种，但仍依赖三个条件

虎利用赤道雨林、热带与亚热带常绿或落叶林、草地与林缘镶嵌、红树林、半干旱林地，以及俄罗斯远东和中国东北的温带森林。喜马拉雅山地有约 4,500 米海拔记录。跨生境共同需求是足够的隐蔽植被、可获得的水和稳定的中大型有蹄类猎物；“住在森林里”不足以概括其生态需求。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T15955A214862019.en) [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-tiger)

结构化字段可用四类相互重叠的生境：热带与亚热带森林和草地镶嵌、红树林与湿地林缘、半干旱林地与灌丛、温带针阔混交林。虎仍是陆生动物，能涉水或游泳不构成 `freshwater` realm。

## 外形、体尺与图像边界

### 条纹既是形态特征，也是个体识别标记

虎的稳定形态组合包括红橙至黄赭色底毛、黑色纵向条纹、白色腹面和内侧肢体、宽大的头部与强健前躯。IUCN/SSC 猫科专家组指出，每只虎的条纹排列不同。Karanth 与 Nichols 将自然斑纹识别和相机陷阱捕获再捕获模型结合，在印度四处生境估算虎的数量与密度；Hiby 等进一步用三维表面模型匹配活体和虎皮图像。[Karanth & Nichols 1998](https://doi.org/10.1890/0012-9658(1998)079%5B2852:EOTDII%5D2.0.CO;2) [Hiby et al. 2009](https://doi.org/10.1098/rsbl.2009.0028) [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-tiger)

一张照片最多支持“出现过一只带有某种条纹的虎”。只有在采样设计、重复拍摄、个体匹配、检测概率和统计模型完整时，才能推断丰度、密度或趋势。第 06 帧的 caption 必须保留这条边界。

### 体尺采用同一权威概览的一组宽范围

IUCN/SSC 猫科专家组给出头体长 **150 至 230 厘米**、尾长 **90 至 110 厘米**、体重 **75 至 325 千克**、寿命 **12 至 15 年**。这些是跨性别、跨地理种群的物种级概览，75 千克和 325 千克不能被解释为“典型成年虎”的固定下限与上限，也不能据此给某张图判定亚种。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-tiger)

虎在物种级上通常被称为现存体型最大的猫科动物，但大小随性别和地理种群显著变化，大型狮可超过较小的虎。推荐文案写“现存体型最大的猫科物种”，同时保留体型重叠的限定，不写“每只虎都比任何狮子大”。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-tiger)

白虎是罕见色型，不是独立亚种；本项目需要表现野生物种的常见形态，因此六图统一排除白化、白虎、金虎和伪黑化色型，也不借特殊色型制造“更珍稀”的视觉噱头。

## 行为与交流

### 独居不等于彼此没有联系

成年雌虎通常维护各自领域，雄虎活动范围更大，并可与一至三只雌虎的领域重叠。家域大小随猎物密度、季节和景观而剧烈变化，从南亚高猎物密度地点的较小范围，到俄罗斯远东数百乃至上千平方千米的个案都有记录，所以档案不提供一个貌似全球通用的家域数字。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-tiger)

Smith、McDougal 与 Miquelle 在奇特旺国家公园连续四年记录自由活动虎，观察到喷尿、后足刨抓、粪便、抓痕、面颊擦蹭和压倒植被等标记。喷尿与刨抓最常见，标记集中在领域边界和经常经过的路线。可把“以气味和刨抓间接交流”写入 `activity`，不必把独居动物描述成沉默或完全避开同类。[Smith et al. 1989](https://doi.org/10.1016/0003-3472(89)90001-8)

虎的昼夜活动会随猎物、温度和人类干扰改变。生产文案不写“严格夜行”，只写“活动时段随环境改变”。

## 食性与捕猎

虎是陆生肉食性伏击捕食者，通常借植被和地形隐蔽接近猎物。Hayward 等汇总 3,187 次猎杀或粪便记录、覆盖 32 种猎物，发现猎物体重是解释选择的主要变量，虎显著偏好约 **60 至 250 千克**的猎物，野猪和水鹿在跨研究资料中受到明显偏好。[Hayward et al. 2012](https://doi.org/10.1111/j.1469-7998.2011.00871.x)

主要猎物随地区变化，包括野猪、水鹿、斑鹿、印度野牛、麂、赤鹿和狍。较小猎物、家畜与偶发大型猎物都可能进入食谱，但不能把一个地区的比例写成全球菜单。Karanth 与 Nichols 的四地研究还显示，虎密度总体与主要猎物密度正相关，说明保护虎不能只保护捕食者本身。[Karanth & Nichols 1998](https://doi.org/10.1890/0012-9658(1998)079%5B2852:EOTDII%5D2.0.CO;2)

第 04 帧选择“借高草接近野猪”，因为野猪偏好有跨研究支持。画面只表现接近，不能出现接触、咬杀、血液或尸体，也不能把一次伏击画成已发生的野外记录。

## 繁殖与育幼

IUCN/SSC 猫科专家组概览给出妊娠约 **103 天**、每胎 **1 至 5 只**、幼虎约 **18 至 28 月龄**独立。繁殖时间随地区不同，不能给全物种指定一个固定产仔季。[IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-tiger)

奇特旺 1973 至 1989 年的长期研究追踪 36 只繁殖个体和 144 只幼虎，记录到全年都可能出生，平均窝仔数 2.98；这是一处长期研究地的种群参数，不应替代专家组的物种级 1 至 5 只范围。[Smith & McDougal 1991](https://doi.org/10.1111/j.1523-1739.1991.tb00355.x)

母虎承担育幼。第 05 帧采用一只母虎与恰好两只可活动幼虎，不出现成年雄虎，不画捕杀教学，也不凭画面声称幼虎的精确月龄或亲缘关系。

## 主要威胁

IUCN、CITES 决议、GTRP 2.0 和原始研究支持以下范围级威胁：[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T15955A214862019.en) [CITES Resolution Conf. 12.5](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-12-05-R19.pdf) [Global Tiger Recovery Program 2.0](https://globaltigerforum.org/wp-content/uploads/2023/08/GTRP_2.0_2023-34_Rev.1.pdf)

- 为皮张、骨骼和其他身体部位进行的盗猎与非法贸易；
- 有蹄类遭捕猎、栖息地退化或疾病冲击后造成的猎物衰退；
- 农业、种植园、采伐、聚落和资源开采带来的栖息地丧失与退化；
- 公路等线性基础设施切割活动区、提高人员可达性并增加死亡风险；
- 捕食家畜或伤人事件引发的报复性捕杀；
- 小种群隔离造成的近交风险，以及犬瘟热等疾病和猎物疾病的叠加压力。

Sharma 等用 273 只虎的多位点基因型研究印度中部四个种群，发现森林廊道连接的种群具有最高的当代基因流；Khan 等的 57 只虎全基因组研究则在小型孤立种群中发现更高近交和最高预测近交衰退。廊道不是装饰性绿带，而是维持扩散和基因交流的种群过程。[Sharma et al. 2013](https://doi.org/10.1098/rspb.2013.1506) [Khan et al. 2021](https://doi.org/10.1073/pnas.2023018118)

Carter 等的范围级道路研究指出，亚洲道路发展会持续增加虎保护压力。道路规划中的避让、缓解和连通性评估应进入保护行动，而不是只在保护区内部巡护。[Carter et al. 2020](https://doi.org/10.1126/sciadv.aaz9619)

## 推荐保护行动

GTRP 2.0 将反盗猎、栖息地保护、猎物恢复、冲突治理、智能绿色基础设施、标准化监测、跨境合作和社区参与列为 2023 至 2034 年的行动组合。生产档案可归纳为五组：[Global Tiger Recovery Program 2.0](https://globaltigerforum.org/wp-content/uploads/2023/08/GTRP_2.0_2023-34_Rev.1.pdf)

1. 保护繁殖源种群和关键栖息地，以情报、巡护和司法协作减少盗猎；
2. 控制猎物盗猎并恢复中大型有蹄类及其生境；
3. 在保护地之间保留森林廊道，对道路、采矿和其他工程实施避让与生态缓解；
4. 通过牲畜防护、快速响应、公平补偿和社区共同治理降低报复性捕杀；
5. 用双侧相机、个体条纹识别、空间捕获再捕获和遗传方法开展可比较的长期监测，同时执行 CITES 贸易和圈养设施管控。

泰国低密度虎种群研究显示，即使执法改善，种群恢复仍可能很慢。保护行动文案应写成需要持续投入的过程，不能承诺“加强巡护即可迅速翻倍”。[Duangchantrasiri et al. 2016](https://doi.org/10.1111/cobi.12655)

## 推荐的 6 段故事

1. **条纹档案**：条纹构成物种形态，也让研究者在重复相机记录中识别个体。
2. **跨气候带的伏击者**：从苏门答腊雨林和孙德尔本斯红树林，到印度半干旱林地和东北亚温带森林，决定能否生存的是隐蔽、水与猎物。
3. **独居者的留言系统**：喷尿、刨抓和擦蹭把领域与繁殖信息留在道路和边界上。
4. **猎物塑造虎的密度**：虎偏好中大型有蹄类，健康猎物群是繁殖种群的能量基础。
5. **漫长的母幼期**：母虎独自抚育 1 至 5 只幼虎，幼虎通常到 18 至 28 月龄才独立。
6. **从一张照片到种群恢复**：相机记录必须进入重复采样和统计模型；保护还要连接廊道、控制盗猎并让人虎共存措施可持续。

## 推荐关键事实

- IUCN 当前正式值为 EN、A2abcd、下降，评估年 2021。
- 2021 年评估估计 2,608 至 3,905 只成熟个体，最佳估计 3,140 只；这不是同步全球普查。
- 当前确认繁殖或常驻种群位于 10 个国家，柬埔寨、老挝和越南已在近期失去野生虎。
- 当前占用范围不足历史分布的 7%。
- 每只虎的条纹排列不同，重复相机记录可据此识别个体。
- 跨研究食性分析显示，虎显著偏好约 60 至 250 千克的猎物。
- 喷尿和后足刨抓是自由活动虎常见的领域标记。
- 幼虎通常在 18 至 28 月龄独立，母幼关系持续远长于一次拍摄能观察的时间。

## 应删除或避免的说法

- 不把 2022 写成 IUCN `assessedYear`；2022 是发布年，正式评估年是 2021。
- 不写全球还有“正好 5,574 只”或“不到 5,000 只”而不说明来源、年份、年龄口径和方法。生产结构化数量采用 IUCN 成熟个体范围。
- 不因新估计高于旧估计就写“全球虎数量已增长 40%”；监测覆盖和方法改变影响可比性。
- 不把 3,726 至 5,578 写成成熟个体，也不把 2,608 至 3,905 写成所有年龄总数。
- 不把 GTRP 的 13 个项目分布国或加上哈萨克斯坦后的 14 国写成当前有野生繁殖虎的国家。
- 不把 IUCN Green Status 的 `Critically Depleted` 翻译成红色名录 CR，也不覆盖 EN。
- 不把 CITES 附录 I 写成所有形式、所有目的的贸易均无例外；应写国际商业贸易受严格禁止并由许可制度管控有限例外。
- 不把中国国家一级保护写成全球“最高保护等级”。
- 不在亚种复核完成前断言全世界只有两个或恰好六个有效亚种；生产档案保持物种级。
- 不把东北虎、孟加拉虎、华南虎、马来虎或苏门答腊虎放入整个物种的普通别名。
- 不写“每只虎都比狮子大”“严格夜行”“全球家域固定为某面积”或“每年固定捕食 50 至 60 只猎物”。
- 不把白虎画成独立亚种、野外常态或保护等级更高的虎。
- 不凭一张相机图宣称种群数量、密度、繁殖成功或趋势；必须有重复采样和模型。
- 不画虎群合作捕猎、成年雄虎参与日常育幼、母虎教幼崽咬杀的确定事件，或血腥攻击场景。
- 不公开敏感个体的实时位置、相机编号、经纬度或巡护路线。

## 1 张封面与 5 张 gallery 的科学图像方案

六张图都是基于物种事实的编辑示意，不是现场记录、亚种鉴定或种群证据。并行素材任务已按以下 basename 生成 1536×1024、3:2 横幅 PNG 与 WebP，并完成静态和视觉验收；信用统一为 `Fauna Atlas · AI 生成原创图像`。最终生成提示词、源文件映射、观察记录与验收结果保存在 [`src/assets/source/species/tiger/README.md`](../../src/assets/source/species/tiger/README.md)。

| 帧 | 推荐运行时路径 | 可视事实与证据边界 |
| --- | --- | --- |
| 01 | `./images/species/tiger/01-forest-edge-portrait.webp` | 一只完整成年虎位于季风落叶林和高草林缘右侧，左侧留负空间；不指定性别、亚种、年龄或体重 |
| 02 | `./images/species/tiger/02-stripe-pattern-profile.webp` | 一只完整侧身成年虎展示橙赭底色、黑色纵纹和白色腹面；条纹可见不等于画面对应真实已登记个体 |
| 03 | `./images/species/tiger/03-forest-grassland-water-mosaic.webp` | 一只较小远景虎穿过连续的森林、高草与天然水边镶嵌；不把雨林、雪林和红树林拼成超现实合成景观 |
| 04 | `./images/species/tiger/04-wild-boar-ambush.webp` | 一只虎借高草接近一只保持距离的野猪；只表现伏击姿态，无接触、追逐、咬杀、血液或尸体 |
| 05 | `./images/species/tiger/05-tigress-with-cubs.webp` | 一只母虎与恰好两只可活动幼虎同行；无成年雄虎，不声明精确月龄、亲缘鉴定或捕猎教学 |
| 06 | `./images/species/tiger/06-camera-trap-monitoring.webp` | 一只虎经过林间小径旁的非接触相机；无品牌、可读编号或坐标，单张画面不能证明丰度或趋势 |

### 六张图的研究提示词边界

以下文字是研究阶段交给素材流程的场景约束，不冒充已经执行的最终 prompt。素材流程为处理构图和生成缺陷扩写后的实际提示词见物种素材 README；两处在物种形态、数量、行为和证据边界上保持一致。

**共同正向锚点**：`photorealistic wildlife editorial, wild Panthera tigris at species level, reddish-orange to yellow-ochre coat, clean black vertical stripes, white underside and inner legs, broad head, powerful shoulders, anatomically coherent large felid proportions, natural paws and tail, realistic Asian habitat, documentary natural light, horizontal 3:2 composition, no taxonomic subspecies claim`。

**共同排除项**：`no white tiger, no golden tiger, no pseudomelanistic tiger, no lion mane, no leopard spots, no snow-leopard rosettes, no hybrid anatomy, no captive enclosure, no zoo, no collar, no costume, no fantasy glow, no blood, no wound, no carcass, no text, no watermark, no logo, no readable sign, no map, no collage`。

1. **01 封面**：`one full-bodied adult tiger standing calmly on the right third at the edge of a monsoon deciduous forest and tall grass, head turned slightly toward the open clearing, entire paws and tail visible, broad quiet negative space on the left for interface copy, humid early-morning haze, no other animal, no people`。封面只建立物种和林缘环境，不通过体型或背景指定亚种。
2. **02 条纹形态**：`one full-bodied adult tiger in clean lateral profile walking across a neutral natural forest-floor opening, uninterrupted view of shoulder, flank, belly, legs and tail, individually irregular vertical stripe pattern clearly readable, white underside visible, soft side light, no second tiger, no identification tag`。不强化耳后白斑为唯一鉴别点，也不生成豹纹或雪豹玫瑰斑。
3. **03 生境镶嵌**：`one small but recognizable tiger moving through a single coherent landscape where closed forest transitions into tall grass beside a natural stream or wetland edge, layered vegetation and water in one climate zone, wide environmental composition, sufficient cover, no prey, no infrastructure`。它代表结构要素的连续镶嵌，不是把红树林、积雪针叶林和赤道雨林拼在一起。
4. **04 伏击野猪**：`one adult tiger low in tall grass using cover to approach one alert wild boar several body lengths away, both animals fully separated, side-on environmental view, restrained tension before any chase, no contact, no bared-fang attack, no blood, no injury`。野猪作为有证据支持的偏好猎物出现，但图像不声称伏击成功。
5. **05 母幼**：`exactly one adult tigress walking with exactly two mobile tiger cubs through a sheltered forest clearing, cubs close to their mother but independently walking, calm protective posture, all three bodies readable, no adult male, no hunting, no prey, no den interior`。画面不能证明精确月龄，也不应把幼崽画成新生儿和成年虎的缩小复制品。
6. **06 相机监测**：`one adult tiger walking along a forest trail past one compact unbranded non-contact camera trap mounted on a tree at safe height, camera visible but unobtrusive, evening ambient light without flash burst, no people, no readable device number, no coordinates, no fencing`。caption 写清：重复图像可借独特条纹识别个体，单次记录不能估算数量或趋势。

## 研究阶段的来源常量与字段草案

以下代码块保存字段取舍、文案边界和来源映射。它是实现草案，不是已经通过类型检查、图片验收或回归测试的生产记录。

```ts
const TIGER_SOURCE_DATE = '2026-08-25' as const;
const TIGER_CONTENT_DATE = '2026-08-25' as const;

const TIGER_SOURCES = [
  {
    title: 'IUCN Red List: Panthera tigris (assessed 2021; published 2022)',
    url: 'https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T15955A214862019.en',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Cat Specialist Group: Tiger',
    url: 'https://www.catsg.org/living-species-tiger',
    kind: 'general',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database: Panthera tigris',
    url: 'https://www.mammaldiversity.org/taxon/1006023/',
    kind: 'taxonomy',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'IUCN Green Status of Species: Panthera tigris supplementary information',
    url: 'https://nc.iucnredlist.org/redlist/content/attachment_files/Panthera_tigris_15955_Green_Status_Supplementary_Information.pdf',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'CITES: Appendices I, II and III, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'CITES Resolution Conf. 12.5 (Rev. CoP19): Conservation of and trade in tigers',
    url: 'https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-12-05-R19.pdf',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: '国家林草局、农业农村部：国家重点保护野生动物名录（2021 年第 3 号）',
    url: 'https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Global Tiger Forum 2023: Global Tiger Recovery Program 2.0 (2023–2034)',
    url: 'https://globaltigerforum.org/wp-content/uploads/2023/08/GTRP_2.0_2023-34_Rev.1.pdf',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Wilting et al. 2015: Planning tiger recovery and intraspecific variation',
    url: 'https://doi.org/10.1126/sciadv.1400175',
    kind: 'taxonomy',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Liu et al. 2018: Genome-wide evolutionary analysis of the world’s tigers',
    url: 'https://doi.org/10.1016/j.cub.2018.09.019',
    kind: 'taxonomy',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Karanth & Nichols 1998: Estimation of tiger densities using photographic captures',
    url: 'https://doi.org/10.1890/0012-9658(1998)079%5B2852:EOTDII%5D2.0.CO;2',
    kind: 'ecology',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Hiby et al. 2009: Matching tiger images from stripe patterns',
    url: 'https://doi.org/10.1098/rsbl.2009.0028',
    kind: 'ecology',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Smith et al. 1989: Scent marking in free-ranging tigers',
    url: 'https://doi.org/10.1016/0003-3472(89)90001-8',
    kind: 'ecology',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Hayward et al. 2012: Prey preferences of the tiger',
    url: 'https://doi.org/10.1111/j.1469-7998.2011.00871.x',
    kind: 'ecology',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Smith & McDougal 1991: Lifetime reproduction and effective population size in tigers',
    url: 'https://doi.org/10.1111/j.1523-1739.1991.tb00355.x',
    kind: 'ecology',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Sharma et al. 2013: Forest corridors maintain gene flow in a tiger metapopulation',
    url: 'https://doi.org/10.1098/rspb.2013.1506',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Khan et al. 2021: Genomic evidence for inbreeding depression in Indian tigers',
    url: 'https://doi.org/10.1073/pnas.2023018118',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Carter et al. 2020: Road development in Asia and range-wide risks to tigers',
    url: 'https://doi.org/10.1126/sciadv.aaz9619',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Duangchantrasiri et al. 2016: Tiger dynamics under improved law enforcement',
    url: 'https://doi.org/10.1111/cobi.12655',
    kind: 'conservation',
    accessedAt: TIGER_SOURCE_DATE,
  },
  {
    title: 'Sanderson et al. 2023: Range-wide trends in tiger conservation landscapes, 2001–2020',
    url: 'https://doi.org/10.3389/fcosc.2023.1191280',
    kind: 'distribution',
    accessedAt: TIGER_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const tigerDraft = {
  id: 'species-panthera-tigris',
  slug: 'tiger',
  names: {
    zh: '虎',
    en: 'Tiger',
    aliases: ['老虎'],
  },
  scientificName: 'Panthera tigris',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Carnivora', '食肉目'),
    taxon('Felidae', '猫科'),
    taxon('Panthera', '豹属'),
  ),
  conservation: conservation('EN', 'decreasing', 2021, 'A2abcd'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲'],
    regions: [
      '南亚次大陆与喜马拉雅山麓',
      '东南亚大陆森林',
      '苏门答腊岛',
      '孙德尔本斯红树林',
      '中国东北与俄罗斯远东温带森林',
    ],
    countries: [
      '孟加拉国',
      '不丹',
      '中国',
      '印度',
      '印度尼西亚',
      '马来西亚',
      '缅甸',
      '尼泊尔',
      '俄罗斯',
      '泰国',
    ],
    range:
      '历史分布从西亚和里海地区横跨南亚、东南亚与东北亚，并延伸至巽他群岛；当前确认的繁殖或常驻种群分布于 10 个国家，占用范围不足历史范围的 7%，且在国家内部高度破碎。',
    center: { lat: 25, lng: 90 },
  },
  habitats: [
    {
      name: '热带与亚热带森林和草地镶嵌',
      realm: 'terrestrial',
      description:
        '利用常绿林、落叶林、高草地和林缘形成的连续隐蔽带；猎物密度、淡水和低干扰通道共同决定繁殖种群能否维持。',
      isPrimary: true,
    },
    {
      name: '红树林与湿地林缘',
      realm: 'terrestrial',
      description:
        '在孙德尔本斯等潮汐红树林和湿地边缘活动，水道切割、海岸变化与人虎接触塑造当地空间利用。',
    },
    {
      name: '半干旱林地与灌丛',
      realm: 'terrestrial',
      description:
        '印度西部等地的疏林、灌丛和草地仍可支持虎，前提是保留遮蔽、水源和中大型有蹄类。',
    },
    {
      name: '温带针阔混交林',
      realm: 'terrestrial',
      description:
        '中国东北和俄罗斯远东的寒温带森林猎物分散、季节性强，虎的活动范围通常比高猎物密度地区更大。',
      isPrimary: true,
    },
  ],
  measurements: {
    length: {
      min: 150,
      max: 230,
      unit: 'cm',
      note: '头体长；另有 90–110 厘米尾长，为跨性别和地理种群的物种级概览',
    },
    weight: {
      min: 75,
      max: 325,
      unit: 'kg',
      note: 'IUCN/SSC 猫科专家组物种级宽范围，不代表典型个体或任何单一亚种',
    },
  },
  diet: {
    types: ['carnivore'],
    foods: ['野猪', '水鹿', '斑鹿', '印度野牛', '麂类', '赤鹿与狍'],
    description:
      '以伏击方式捕食中大型有蹄类，跨研究分析显示明显偏好约 60 至 250 千克的猎物；具体食谱随地区、季节和猎物群落改变，也可能利用较小猎物或家畜。',
  },
  activity: [
    '多数时间独居，成年个体维护并以气味标记领域',
    '利用植被和地形隐蔽接近猎物并发动短距离伏击',
    '以喷尿、后足刨抓、擦蹭和抓痕进行间接交流',
    '活动时段随猎物、温度与人类干扰改变',
  ],
  tags: [
    '亚洲森林',
    '顶级捕食者',
    '旗舰物种',
    '国家一级重点保护野生动物',
    'CITES 附录 I',
  ],
  summary: '研究者可凭独特条纹识别个体；虎跨越亚洲多种森林与草地景观，却只保有不足 7% 的历史分布。',
  description:
    '虎并不属于单一气候带：它从苏门答腊雨林、孙德尔本斯红树林延伸到印度半干旱林地和东北亚温带森林。橙赭底色与不重复的黑色条纹帮助它隐入植被，也让研究者能从重复相机记录中识别个体。保护虎需要同时守住繁殖源种群、猎物和跨保护地廊道，并减少非法贸易与人虎冲突。',
  storySections: [
    {
      key: 'stripes',
      label: '外形与识别',
      title: '每一组条纹都是一份个体档案',
      body:
        '红橙至黄赭底毛、黑色纵纹和白色腹面构成虎的醒目标志，条纹排列却因个体而异。研究者在设计严谨的相机阵列中反复拍到左右体侧，再把个体匹配结果放进捕获再捕获模型，才能估算数量和密度。单张照片只证明一次记录。',
    },
    {
      key: 'habitat-breadth',
      label: '生境',
      title: '横跨雨林、红树林与温带森林',
      body:
        '虎能生活在潮湿赤道雨林、季风落叶林、高草林缘、红树林、半干旱林地和东北亚温带森林。跨度很大，共同条件却清楚：接近猎物所需的隐蔽、稳定水源，以及足够的中大型有蹄类。',
    },
    {
      key: 'scent-network',
      label: '行为与交流',
      title: '独居者沿路径留下信息',
      body:
        '成年虎大多单独活动，却在领域边界和通行路线喷尿、后足刨抓、擦蹭并留下抓痕。后来者可从这些气味和可见标记中获得领域与繁殖信息；独居并不意味着彼此没有交流。',
    },
    {
      key: 'prey',
      label: '食性与捕猎',
      title: '猎物群落决定一片森林能养多少虎',
      body:
        '虎借高草和林下遮蔽潜近猎物，再发动短距离伏击。跨地区资料显示，它偏好约 60 至 250 千克的猎物，野猪与水鹿尤其重要。即使森林仍在，若有蹄类被持续捕猎，虎的繁殖与密度也会下降。',
    },
    {
      key: 'maternal-care',
      label: '繁殖与成长',
      title: '幼虎跟随母亲生活一年半以上',
      body:
        '母虎独自承担育幼，妊娠约 103 天，每胎通常落在 1 至 5 只的范围。幼虎需要学习移动、选择猎物和避开风险，通常到 18 至 28 月龄才独立；一张温和的母幼画面不能替代长期观察。',
    },
    {
      key: 'recovery',
      label: '监测与保护',
      title: '把源种群重新连成可恢复的网络',
      body:
        '反盗猎保护核心繁殖地，猎物恢复提供能量，森林廊道让扩散和基因交流继续发生。相机、条纹识别、空间模型和遗传监测负责判断成效；道路避让、社区共治和贸易执法则处理保护区边界之外的风险。',
    },
  ],
  keyFacts: [
    'IUCN 当前正式值为 EN、A2abcd、下降，评估年为 2021。',
    'IUCN 估计成熟个体 2,608 至 3,905 只，最佳估计 3,140 只；这不是同步全球普查。',
    '当前确认繁殖或常驻种群位于亚洲 10 个国家。',
    '当前占用范围不足历史分布的 7%。',
    '每只虎的条纹排列不同，重复相机记录可据此识别个体。',
    '跨研究分析显示，虎显著偏好约 60 至 250 千克的猎物。',
    '自由活动虎常以喷尿和后足刨抓标记领域边界及通行路线。',
    '幼虎通常在 18 至 28 月龄独立。',
  ],
  threats: [
    '针对皮张、骨骼和其他身体部位的盗猎与非法贸易',
    '有蹄类被捕猎、栖息地退化或疾病冲击造成的猎物衰退',
    '农业、种植园、采伐、聚落和资源开采导致栖息地丧失',
    '道路等线性基础设施切割活动区、增加人员可达性和死亡风险',
    '捕食家畜或伤人事件引发的报复性捕杀',
    '小种群隔离带来的近交风险，以及虎和猎物疾病的叠加压力',
  ],
  conservationActions: [
    '以巡护、情报和司法协作保护繁殖源种群并打击盗猎及非法贸易',
    '控制猎物盗猎，恢复中大型有蹄类及其生境',
    '维护保护地之间的森林廊道，并对道路与采矿实施避让和生态缓解',
    '通过牲畜防护、快速响应、公平补偿和社区共同治理减少报复性捕杀',
    '以双侧相机、条纹识别、空间捕获再捕获和遗传方法开展长期监测',
  ],
  metrics: {
    adultLengthCm: [150, 230],
    adultMassKg: [75, 325],
    lifespanYears: [12, 15],
    estimatedMatureIndividuals: [2608, 3905],
  },
  featuredStats: [
    {
      key: 'mature-population',
      label: '成熟个体估计',
      value: '2,608–3,905',
      unit: '只',
      note: '2021 年 IUCN 全球评估；最佳估计 3,140 只，不是同步普查',
    },
    {
      key: 'current-range-countries',
      label: '繁殖或常驻国家',
      value: '10',
      unit: '个',
      note: '不含已在近期失去野生虎的柬埔寨、老挝和越南',
    },
    {
      key: 'historical-range',
      label: '历史范围保有',
      value: '<7',
      unit: '%',
      note: '当前占用范围相对历史分布',
    },
    {
      key: 'cub-independence',
      label: '幼虎独立',
      value: '18–28',
      unit: '月龄',
      note: 'IUCN/SSC 猫科专家组物种概览',
    },
  ],
  media: {
    image: './images/species/tiger/01-forest-edge-portrait.webp',
    alt: '一只橙黑条纹的成年虎站在高草与落叶林交界处',
    focalPoint: { x: 0.65, y: 0.56 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/tiger/02-stripe-pattern-profile.webp',
        alt: '一只成年虎侧身走过高草，黑色纵向条纹和完整尾部清晰可见',
        title: '不重复的条纹',
        caption: '每只虎的条纹排列不同；重复拍摄与个体匹配可用于种群研究。',
        focalPoint: { x: 0.55, y: 0.55 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/tiger/03-forest-grassland-water-mosaic.webp',
        alt: '一只远处的虎穿过森林、高草和天然水边相接的景观',
        title: '隐蔽、水与猎物',
        caption: '虎利用多种气候带的生境，但都需要遮蔽、水源和足够猎物。',
        focalPoint: { x: 0.73, y: 0.68 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/tiger/04-wild-boar-ambush.webp',
        alt: '一只虎伏低在高草中，与前方一只野猪保持距离',
        title: '借掩体接近',
        caption: '虎偏好中大型有蹄类；画面只示意接近姿态，不代表伏击成功。',
        focalPoint: { x: 0.46, y: 0.57 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/tiger/05-tigress-with-cubs.webp',
        alt: '一只母虎带着两只幼虎走过林间空地',
        title: '漫长的母幼期',
        caption: '幼虎通常在 18 至 28 月龄独立，日常育幼主要由母虎承担。',
        focalPoint: { x: 0.59, y: 0.56 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/tiger/06-camera-trap-monitoring.webp',
        alt: '一只虎走过林间小径，树干上固定着一台无品牌相机',
        title: '从条纹到种群估算',
        caption: '重复相机记录可借独特条纹识别个体；单张图不能确定丰度、密度或趋势。',
        focalPoint: { x: 0.55, y: 0.53 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
    ],
  },
  sources: TIGER_SOURCES,
  publishedAt: TIGER_CONTENT_DATE,
  updatedAt: TIGER_CONTENT_DATE,
} satisfies Species;
```

## 来源覆盖清单

| 主题 | 直接来源 | 本文用途与限制 |
| --- | --- | --- |
| 接受名与上级分类 | [MDD: *Panthera tigris*](https://www.mammaldiversity.org/taxon/1006023/) | 主学名、作者、原组合、食肉目、猫科、豹属；页面国家状态元数据不承担当前繁殖国判定 |
| IUCN 全球评估 | [Goodrich et al. 2022](https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T15955A214862019.en) | EN、A2abcd、下降、2021 评估、成熟个体、总数、分布与威胁；数字不是同步普查 |
| 综合物种档案 | [IUCN/SSC Cat Specialist Group](https://www.catsg.org/living-species-tiger) | 体尺、形态、生境、行为、繁殖、猎物、当前 10 国和历史范围；汇总中的局地数字不外推为全球固定值 |
| Green Status | [IUCN supplementary information](https://nc.iucnredlist.org/redlist/content/attachment_files/Panthera_tigris_15955_Green_Status_Supplementary_Information.pdf) | `Critically Depleted` 与恢复分数；不覆盖 Red List EN |
| CITES 当前列名 | [2026 Appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) | 附录 I；不等于国内保护等级，也不表述为所有有限例外都不存在 |
| 非法贸易与圈养管控 | [Resolution Conf. 12.5 (Rev. CoP19)](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-12-05-R19.pdf) | 国际商业贸易、非法贸易、库存和圈养设施控制；不直接提供野外数量 |
| 中国法定身份 | [国家林草局、农业农村部公告](https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html) | 中文法定主名、学名和国家一级重点保护野生动物；仅适用于中国法律语境 |
| 全球行动方案 | [GTRP 2.0](https://globaltigerforum.org/wp-content/uploads/2023/08/GTRP_2.0_2023-34_Rev.1.pdf) | 2023 至 2034 年反盗猎、猎物、廊道、冲突、监测和跨境行动；13 个项目国家不等于当前 13 个繁殖国 |
| 两亚种方案 | [Wilting et al. 2015](https://doi.org/10.1126/sciadv.1400175) | 多性状资料支持两亚种；这是争议中的原始方案，不单独决定生产分类 |
| 六谱系方案 | [Liu et al. 2018](https://doi.org/10.1016/j.cub.2018.09.019) | 32 份有凭证标本的全基因组结果支持六个谱系；华南虎样本限制和后续复核仍需保留 |
| 相机捕获再捕获 | [Karanth & Nichols 1998](https://doi.org/10.1890/0012-9658(1998)079%5B2852:EOTDII%5D2.0.CO;2) | 个体斑纹识别、重复采样和模型估算；四个印度研究地的密度不能写成全球值 |
| 三维条纹匹配 | [Hiby et al. 2009](https://doi.org/10.1098/rsbl.2009.0028) | 不同角度图像和虎皮的个体图案匹配；不代表任意单图都能自动可靠识别 |
| 气味标记 | [Smith et al. 1989](https://doi.org/10.1016/0003-3472(89)90001-8) | 喷尿、刨抓、擦蹭和边界标记；四年奇特旺研究不提供全范围固定频率 |
| 猎物偏好 | [Hayward et al. 2012](https://doi.org/10.1111/j.1469-7998.2011.00871.x) | 3,187 次记录、32 种猎物、60 至 250 千克偏好及野猪和水鹿；不等于每只虎的固定菜单 |
| 长期繁殖 | [Smith & McDougal 1991](https://doi.org/10.1111/j.1523-1739.1991.tb00355.x) | 奇特旺 36 只繁殖个体和 144 只幼虎；局地平均窝仔数不替代物种级范围 |
| 廊道与基因流 | [Sharma et al. 2013](https://doi.org/10.1098/rspb.2013.1506) | 印度中部 273 只虎的基因流和森林廊道；不证明所有拟建廊道都有效 |
| 隔离与近交 | [Khan et al. 2021](https://doi.org/10.1073/pnas.2023018118) | 57 只虎全基因组中的小种群近交与遗传救援讨论；生产文案只保留范围级风险，不给出通用干预处方 |
| 道路风险 | [Carter et al. 2020](https://doi.org/10.1126/sciadv.aaz9619) | 亚洲道路建设对虎范围的风险与规划需求；模型不是每条道路的现场死亡记录 |
| 执法与恢复速度 | [Duangchantrasiri et al. 2016](https://doi.org/10.1111/cobi.12655) | 泰国低密度种群在改善执法背景下的动态；说明恢复缓慢，不外推一个全球增长率 |
| 近年占域范围 | [Sanderson et al. 2023](https://doi.org/10.3389/fcosc.2023.1191280) | 2001 至 2020 年虎保护景观趋势和约百万平方千米现存范围；景观面积不等于每处都同等密度占用 |

## 仍然不确定或需后续更新的事项

1. **IUCN 评估会更新**：生产实现前再次核对物种页 ID `15955/214862019`。若出现新评估，应成套更新等级、趋势、准则、评估年、数量、分布国和引用，不能只替换一个数字。
2. **亚种复核尚未结束**：IUCN/SSC 猫科专家组当前明确保留复核状态。后续若发布正式处理，应先更新研究文档，再决定是否把种下信息加入新的 schema；现有 `Species` 类型没有亚种字段。
3. **国家状态可能因重引入改变**：哈萨克斯坦、柬埔寨等地存在重引入计划。放归个体出现、短期存活、常驻和形成繁殖种群是不同阶段，不能看到新闻就加入 `countries`。
4. **全球数量方法不完全一致**：各国调查年份、相机密度、占域外推和年龄口径不同，跨境个体可能重复。结构化字段只保留 IUCN 成熟个体范围和评估年。
5. **区域增长不代表全球趋势**：印度、尼泊尔、不丹、俄罗斯或泰国的更新调查可以作为地区成效，不能未经方法校准覆盖 IUCN 的范围级 `decreasing`。
6. **体尺是宽物种范围**：75 至 325 千克横跨性别与地理种群。若未来需要“典型成年”比较值，应另找按性别和种群分层的样本，不用当前极宽范围冒充典型值。
7. **寿命口径需要说明**：12 至 15 年来自专家组物种概览，不是已知最大圈养寿命。当前可用于粗粒度比较，详情页不要写成硬性生命上限。
8. **活动时段和家域高度地方化**：不要把奇特旺、孙德尔本斯或俄罗斯远东个案压成全物种固定值。若后续增加地图或数值卡，必须标研究地、性别、季节和方法。
9. **Green Status 与 Red List 是两套问题**：恢复分数和 `Critically Depleted` 只能放在解释性文案或来源中。当前 schema 的 `conservation` 只存 Red List。
10. **图像无法验证亚种**：物种级 AI 图不能证明地理来源、亚种、性别、年龄、体重或真实个体身份。最终 caption 必须继续使用“示意”边界。
11. **相机位置属于敏感信息**：素材不出现经纬度、设备编号、巡护时间表或可定位地标。生产数据也不应加入实时监测点。
12. **地图焦点不是科学中心**：`{ lat: 25, lng: 90 }` 只服务视图。如果地图组件改版，应按完整范围显示效果调整，而不是解释成虎的种群重心。
13. **当前图片已完成验收**：并行素材任务已确认六组 PNG/WebP 均为 1536×1024、sRGB、不透明，且构图符合本文事实边界；已验收焦点依次为 `(0.65, 0.56)`、`(0.55, 0.55)`、`(0.73, 0.68)`、`(0.46, 0.57)`、`(0.59, 0.56)` 和 `(0.55, 0.53)`。任何重生成、裁切或缩放都要重新验收。

## 最终实施与测试清单

### 数据集成

- 在 `src/data/species.ts` 增加一次 `TIGER_SOURCE_DATE`、`TIGER_CONTENT_DATE` 与 `TIGER_SOURCES`，物种对象尾部引用来源常量，不复制第二份来源数组。
- 固定 `id: 'species-panthera-tigris'`、`slug: 'tiger'`、中文主名“虎”、英文名 “Tiger”、唯一别名“老虎”和学名 `Panthera tigris`。
- 分类路径复用现有 `Chordata / Mammalia / Carnivora / Felidae / Panthera`，不要新建 `Tigris` 属或把亚属放进 genus。
- 保护字段固定为 `conservation('EN', 'decreasing', 2021, 'A2abcd')`；搜索确认没有旧的 2015/2016 年评估、2022 评估年或 `increasing` 趋势残留。
- `countries` 恰好保留 IUCN 当前 10 国，原分布国、项目参与国和计划重引入国只写在 `range` 或正文。
- `measurements` 和 `metrics` 使用同一组头体长、体重与寿命概览；成熟个体范围保留 IUCN 口径。不要把总数范围另塞入成熟个体字段。
- `storySections` 恰好 6 段，`featuredStats` 恰好 4 项，gallery 恰好 5 张；所有时效数字附年份或解释边界。
- 实现后按最终 `Species` 对象运行类型检查；研究代码块本身不替代编译验证。

### 图像与静态资源

- [x] 源文件已写入 `src/assets/source/species/tiger/`，运行时文件已写入 `public/images/species/tiger/`；六个 basename 与本文路径一致。
- [x] 物种素材 README 已保存共同形态锚点、逐图最终提示词、排除项、生成日期、源 PNG 到 WebP 映射、转换参数和验收结果。
- [ ] 更新 `src/assets/source/README.md` 总索引；本研究任务不编辑该索引。
- [x] 六张源 PNG 与六张 WebP 均通过 1536×1024、sRGB、不透明、正确解码和格式检查。
- [x] 六图通过内容检查：01 一只完整成年虎在中右侧且左侧较安静；02 一只完整侧身虎且条纹、白腹和尾部连贯；03 一只远景虎和连续的森林、草地、水边；04 恰好一虎一野猪、彼此分离且无血腥；05 恰好一母两幼、无雄虎；06 恰好一虎一台无品牌相机、无敏感信息。
- [x] 当前 alt 与焦点已按验收记录写入字段草案；任何重生成、裁切或缩放都要求重新验收。

### 分类测试与计数

- 在 `tests/taxonomy.test.mjs` 增加虎完整档案断言：名称、别名、IUCN 字段、10 国、测量 note、6 段故事、4 项统计、5 张 gallery、来源数量和六条媒体路径。
- 增加路径断言：`Animalia > Chordata > Mammalia > Carnivora > Felidae > Panthera > Panthera tigris`。
- 增加种下边界断言：主学名和 genus 使用 `Panthera`，别名不含任何亚种名，分类树不新增亚种或 `Tigris` 属节点。
- 2026-08-25 实测基线为 **37 个物种、116 个分类单元节点、153 个总节点**。虎复用所有上级分类，若没有并行目录改动，集成后应为 **38 个物种、116 个分类单元节点、154 个总节点**。
- 同一基线下，`Animalia` 后代物种数应由 37 变 38，`Chordata` 由 32 变 33，`Mammalia` 由 19 变 20，`Carnivora` 由 6 变 7，`Felidae` 由 2 变 3，`Panthera` 由 1 变 2。并行改动进入后按实际树重算，不机械照抄旧断言。
- 保留全目录唯一性检查：`id`、`slug`、学名、分类叶、source URL、媒体路径和日期不能重复或缺失。

### 命令验证

- 运行 `npm run typecheck`，确认 source kind、diet type、realm、日期字面量和媒体路径通过 TypeScript。
- 运行 `npm test`，确认虎档案、分类路径、节点计数与既有回归测试全部通过。
- 运行 `npm run build`，确认六张运行时 WebP 被 Vite 解析并进入构建产物。
- 用 `file`、`identify` 或仓库既有静态检查脚本核对 PNG 和 WebP；按仓库约定不启动 GUI 或无头浏览器。
- 运行 `git diff --check`，再审阅目标文件、`git diff --stat` 和 `git status --short`，确保下载文献、临时图、生成缓存和无关改动没有进入提交。

### TODO 收尾顺序

- 只有物种数据、分类测试、六张源 PNG、六张运行时 WebP、物种素材 README、源图总索引、typecheck、test、build 和静态图片检查全部完成后，才从 `docs/todo.md` 删除“虎 *Panthera tigris*”条目。
- 仅完成研究稿、部分素材或未验证代码时，不提前删除 TODO。
- 删除时精确匹配当前 TODO 行，不顺手修改相邻动物。

## 最终实施建议

- 主记录保持物种级 *Panthera tigris*，不替两亚种或六谱系争议作仓促裁决。
- 固定 IUCN 为 `EN / decreasing / 2021 / A2abcd`，只把 2022 写成发布年。
- 成熟个体用 2,608 至 3,905，最佳估计 3,140；10 个当前繁殖国家、历史范围保有不足 7%分别进入统计卡，并保留方法和年份限制。
- 四套状态各归其位：Red List 存结构化字段，Green Status 放恢复解释，CITES 与中国一级保护放法律标签和正文。
- 六图围绕林缘物种肖像、个体条纹、连续生境镶嵌、野猪伏击、母幼期和相机监测展开。白虎、亚种标签、群体围猎、血腥和敏感监测信息全部排除。
- 分类路径完全复用雪豹已有的豹属分支，因此本轮只新增一个物种叶，不增加分类单元节点。
