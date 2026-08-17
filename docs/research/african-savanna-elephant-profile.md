# 非洲草原象（*Loxodonta africana*）完整物种档案研究

- 检索与核验日期：2026-08-17
- 使用范围：`src/data/species.ts` 的非洲草原象条目、详情页长文、数字卡与现有 6 张图像的内容验收
- 证据标准：分类与名称优先用 Mammal Diversity Database（MDD）、ITIS、IUCN/SSC；保护状态与法律地位用 IUCN Red List、IUCN SSC、CITES、CMS 及官方行动计划；生态与行为只补充同行评审原始论文和长期野外研究资料。百科、旅游页、动物园短文、媒体数字及没有样本口径的“常识值”不进入推荐字段。
- 物种边界：全文的“非洲草原象”仅指 ***Loxodonta africana***，不把非洲森林象 ***L. cyclotis*** 的体型、食性、森林生态作用、数量或保护等级并入。2025 年遗传研究在 2,445 份已知产地样本中检出 6.6% 杂交个体，且主要集中在森林—草原过渡带；照片不能仅凭背景植被给过渡区个体定种。[Kuhner et al. 2025](https://doi.org/10.1016/j.gecco.2025.e03530)
- 当前性说明：IUCN 的非洲草原象状态报告原定 2026 年另卷出版，截至本次检索尚未在 IUCN Library 或 AfESG 资源页找到已发布版本；国家清单因此采用 CITES SC78 转述的 AfESG 2024 工作口径，并在下文保留版本差异，不能伪装成永不变化的清单。[IUCN 2025 forest-elephant status report record](https://portals.iucn.org/library/node/52640) [CITES SC78 Doc. 65.1](https://cites.org/sites/default/files/documents/E-SC78-65-01_0.pdf)

## 结论摘要

### 分类、中文名与两个非洲象种的边界

当前接受名为 ***Loxodonta africana* (Blumenbach, 1797)**，分类为动物界—脊索动物门—哺乳纲—长鼻目—象科—非洲象属。MDD ID 为 **1000522**，标准英文名是 **African Savanna Elephant**，并收录 **African Bush Elephant**；ITIS TSN 为 **584939**。仓库的学名、科属和英文主名正确。[MDD taxon 1000522](https://www.mammaldiversity.org/taxon/1000522/) [ITIS TSN 584939](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=584939)

中国 2026 年 3 月 5 日生效的 CITES 附录中文版使用“**非洲草原象 *Loxodonta africana***”，可作为中文主名的官方依据。“非洲稀树草原象”未在所核官方中文名录中出现，语感也不稳定，建议从 `aliases` 删除；“非洲象”会同时指整个 *Loxodonta* 属或旧时合并物种，不能作为无歧义别名。[国家林业和草原局—CITES 附录中文版](https://www.forestry.gov.cn/u/cms/www/202603/07094239sawe.pdf)

AfESG 自 2021 年起把非洲象作为两种处理：草原象 *L. africana* 与森林象 *L. cyclotis*。核基因组研究支持两条深分化谱系；后续大样本研究同时证明过渡带确有少量、并非遍布大陆的杂交。产品必须保留两个物种各自的学名、IUCN 状态和生态叙事，不得退回“森林象是草原象亚种”的旧口径。[Hart et al. 2021](https://doi.org/10.1017/S0030605320001386) [Rohland et al. 2010](https://doi.org/10.1371/journal.pbio.1000564) [Kuhner et al. 2025](https://doi.org/10.1016/j.gecco.2025.e03530)

活体外形可作**组合式**验收：2023 年研究用耳下叶相对下颌线、象牙与鼻之间隙、象牙侧面与正面朝向、颞窝和背线六项联合判别。典型草原象耳下叶低于下颌线、象牙向前且从正面看向外、背线较凹；森林象更常见耳下叶不低于下颌线、象牙向下且平行或内收、背线较直。六项完整时参考照片分类准确率很高，但年龄、性别、地区差异、缺失特征和杂交都会降低把握，不能把“耳朵像非洲地图”或单一象牙角度当作鉴定钥匙。[Bonnald et al. 2023](https://doi.org/10.1017/S0030605321001605)

### IUCN 评估：2020 是评估年，2022 是修订版出版年

当前可追溯记录为 **濒危 Endangered（EN）**、趋势 **下降**、标准 **A2abd**。IUCN SSC 标准与申诉委员会明确写明：该物种于 **2020-11-13** 评为 `EN A2abd`，2021 年发布；现行稳定引文是 2022 年的“2021 评估修订版”。因此仓库的 `conservation('EN', 'decreasing', 2020, 'A2abd')` 正确，不能因 DOI 标题含 2022 而把 `assessedYear` 改成 2022。[IUCN Red List 2022 amended assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T181008073A223031019.en) [IUCN SSC ruling, 13 Oct 2022](https://nc.iucnredlist.org/redlist/content/attachment_files/SPC_African_Savanna_Elephant_Ruling_13Oct2022.pdf)

评估模型汇总 334 个地点，推断过去三个世代（75 年；代长采用约 25 年）大陆种群减少超过 50%，且各亚种群趋势高度不均；IUCN 新闻稿另以不同时间窗概括为过去约 50 年至少下降 60%。这两个数字不是同一统计窗，不能拼成“75 年下降 60%”。2016 年约 415,000 只是当时**森林象与草原象合计**的大陆估计，不能当作草原象现存总数或成熟个体数写入 `metrics`。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T181008073A223031019.en) [IUCN 2021 announcement](https://iucn.org/news/species/202103/african-elephant-species-now-endangered-and-critically-endangered-iucn-red-list)

### CITES 与 CMS：都是法律工具，不是 IUCN 等级的同义词

自 2026-03-05 起，CITES 仍为分列：博茨瓦纳、纳米比亚、南非和津巴布韦的草原象种群列附录 II、受注释 **A11** 限定；其他标本按附录 I 管制。A11 允许的只是列明的非商业狩猎纪念物、合适目的地活体、皮张、毛发、皮革制品以及少量特定非商业象牙制品等类别；CoP20 已删除旧注释中的原象牙库存贸易条款。不能把整个物种写成“附录 II”，也不能把分列状态简化成“全球象牙贸易全面合法/全面由这一条款禁止”。[国家濒科委—CITES CoP20 新版附录说明](https://www.cites.org.cn/sylb/202604/t20260401_828777.html) [国家林业和草原局—2026 CITES 附录](https://www.forestry.gov.cn/u/cms/www/202603/07094239sawe.pdf)

CMS 在 2026-06-27 生效的最新附录中仍把 *L. africana* 列入**附录 II**；这表示其迁移种群会显著受益于国际合作，不等同 IUCN EN 或 CITES 附录 II。西非象 MOU 自 2005 年生效，是区域合作工具；它历史上沿用 *L. africana* 广义名称，不能据 MOU 的 13 个签署国反推当前草原象的 13 个范围国。[CMS species page](https://www.cms.int/species/loxodonta-africana) [CMS appendices effective 27 June 2026](https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf) [CMS West African Elephant MOU](https://www.cms.int/west-african-elephants/)

### 分布、范围国、生境与移动

“东非和南部非洲”过窄。CITES SC78 引述 AfESG 2024 工作稿，承认 **22 个**草原象范围国：

- 东非：厄立特里亚、埃塞俄比亚、肯尼亚、卢旺达、索马里、南苏丹、坦桑尼亚、乌干达；
- 中非：喀麦隆、乍得、刚果民主共和国；
- 南部非洲：安哥拉、博茨瓦纳、斯威士兰、马拉维、莫桑比克、纳米比亚、南非、赞比亚、津巴布韦；
- 西非：布基纳法索、马里。

这份 22 国清单属于尚在编写的草原象状态报告工作口径。较早的 2022 Red List 记录则列 22 个原生现存居民国，另把布基纳法索列“过境”、斯威士兰列“再引入居民”，并把中非共和国和尼日利亚列在草原象侧；2025 年遗传研究又显示过渡带与杂交区需要持续校正。因此产品可以采用上面的最新 22 国显示清单，但 `range` 必须注明“AfESG 2024 工作口径；待正式状态报告更新”，不要用国家数做永久事实卡。[CITES SC78 Doc. 65.1, paras 65–67](https://cites.org/sites/default/files/documents/E-SC78-65-01_0.pdf) [CITES SC77 Doc. 74, Red List occurrence categories](https://cites.org/sites/default/files/documents/E-SC77-74.pdf) [Kuhner et al. 2025](https://doi.org/10.1016/j.gecco.2025.e03530)

“草原象”不是只住开阔草原。IUCN 记录其从约北纬 16° 的马里到南纬 34° 的南非，利用草地、灌丛、稀树草原、米翁波与莫帕尼林地、山地林、半荒漠/荒漠边缘、泛洪平原和湿地镶嵌；当前分布已收缩、破碎，只占前农业时代历史范围的一小部分。仓库应补上西非、中非、林地与干旱景观。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T181008073A223031019.en)

它是陆生哺乳动物，饮水、涉水和利用泛洪平原不构成一个 freshwater 生命史阶段；`distribution.realms` 应由 `['terrestrial', 'freshwater']` 改成 `['terrestrial']`，湿地仍可作为陆生取食与移动景观描述。地图中心 `{-15, 25}` 只作界面焦点可保留，不能被解释为范围中心或 KAZA 单一分布点。

移动策略也不是全物种“季节迁徙”。南部非洲 139 只 GPS 个体中只有 25 只表现迁徙，且同一个体并非每年都迁；Hwange 研究同样发现只有部分个体迁徙，时间与降雨、绿度和水源管理有关。推荐写“高移动性；不同种群和个体可定居、半迁移或机会性季节迁移”，并把跨境连通性与围栏/道路/水点管理写进保护行动。[Purdon et al. 2018](https://doi.org/10.1111/oik.02996) [Tshipa et al. 2017](https://doi.org/10.1016/j.biocon.2017.09.003)

### 体型与形态：分开性别、常见值和极端值

非洲草原象是现生体型最大的陆地动物，但仓库现有“肩高 2.5—4 米、成年雄性常见 4—7.5 吨”把雌雄、常见范围和罕见极端混为一谈。基于现生象标本与体积模型，良好生长条件下完全长成个体的平均值约为雌性 **2.6 米、3 吨**，雄性 **3.2 米、6 吨**；约 90% 的完全长成雌性在肩高 2.47—2.75 米、体重 2.6—3.5 吨，雄性在 3.04—3.36 米、5.2—6.9 吨。接近 4 米属于历史极端估计，不是“常见最大肩高”。[Larramendi 2016](https://doi.org/10.4202/app.00136.2014)

Amboseli 对 224 只已知年龄雌性和 170 只雄性的实测还显示，雄性从出生后生长更快、持续更久，约 10 岁后性二型明显，65 岁时雄性平均比雌性高 60—70 厘米。产品数值卡应优先展示“完全长成雌/雄平均值”，不要让单一宽区间看似适用于任意成体。[Lee & Moss 1995](https://doi.org/10.1111/j.1469-7998.1995.tb01782.x)

`metrics.adultMassKg` 的单区间无法保留两性分组和“90% 完全长成”的口径，建议暂不填；`measurements.height/weight` 可用 2.47—3.36 米与 2.6—6.9 吨，但 note 必须写出雌雄子区间。`featuredStats` 用平均雌/雄值比“最大 4 米”更诚实。

### 食性与采食

草原象是混合型植食者，会取食草本、叶、嫩枝、树皮和果实；草/浏览比例随降雨、地点、家庭、个体、性别与繁殖状态变化。肯尼亚两个家族的 68 份粪便 DNA 样本检测到至少 **367 个植物序列分类单元**，雨后草类比例倾向上升、干季更多非草本；这是展示食谱广度和个体差异的局地研究，不是“每只象固定吃 367 种”。[Gill et al. 2023](https://doi.org/10.1098/rsos.230337)

现有“每天 100—150 千克”缺少统一的野外鲜重、干重、年龄、性别和季节口径，本次也未找到足以支撑全物种固定区间的原始研究；应从 `keyFacts` 与 `featuredStats` 删除。可以保留食物类别和季节切换，但不要把长鼻的触觉交流写进 `diet.description`，交流应移到行为章节。

### 活动、交流与社会结构

昼夜都可能活动，活动时段会受热环境、资源和人类风险改变。Ruaha–Rungwa 的 1,625 次独立相机记录显示，高人类风险地点的雌雄都更偏夜间活动，母幼群变化尤其明显。因此 `activity` 不能把“昼夜活动”理解为固定均匀节律，可写“全天可活动；高温与人类风险可使活动偏夜间”。[Smit et al. 2023](https://doi.org/10.1111/aje.13083)

雌性亲族构成多层次、裂合式社会，而不是一支永远不分开的“母系象群”。遗传亲缘显著预测核心群的分裂与重聚；年长雌性首领在社会辨认和威胁判断中具有重要知识。成年雄性会离开出生群，既可独行，也可组成灵活雄性群；年长雄性还可能带领全雄移动群，所以不能画成年雄象长期统领母幼群，也不能写“雄象一律独居”。[Archie et al. 2006](https://doi.org/10.1098/rspb.2005.3361) [McComb et al. 2001](https://doi.org/10.1126/science.1057895) [Allen et al. 2020](https://doi.org/10.1038/s41598-020-70682-y)

草原象以声学、视觉、化学、触觉和地震振动多模态交流。58 次野外回放实验支持它们对数千米尺度的低频叫声作出反应；地面传导回放实验表明家族群能区分熟悉与陌生的地震警报成分，但这不等于所有交流都靠“地震波”或可无限远传播。2024 年野外机器学习加回放研究进一步发现接收者特异的“类名字叫声”；应使用“name-like / 类名字”，不要写成人类语言式姓名已被逐字解码。[Langbauer et al. 1991](https://doi.org/10.1242/jeb.157.1.35) [O’Connell-Rodwell et al. 2007](https://doi.org/10.1121/1.2747161) [Pardo et al. 2024](https://doi.org/10.1038/s41559-024-02420-w)

ElephantVoices 的草原象行为谱记录 322 种行为、103 个行为组合和 23 个情境，明确包括安抚性鼻触、异母照料、泥浴与扬尘等。它适合作为 6 张行为图的验收字典，但数据库中的单段影像是行为范例，不能转换成发生率。[Elephant Ethogram introduction](https://www.elephantvoices.org/elephant-ethogram/introduction.html) [Elephant Ethogram science](https://www.elephantvoices.org/elephant-ethogram/the-science.html)

### 繁殖、成长与寿命

象类妊娠平均约 **640 天，约 22 个月**；这项生理研究包含非洲象与亚洲象，足以支持近似月份，但不应伪装成每胎恰好 22.0 个月。[Lueders et al. 2012](https://doi.org/10.1098/rspb.2012.1038)

Amboseli 1,778 只已知个体的长期资料中，雌性平均初产年龄 **14.1 岁**，255 只雌性的 732 个产仔间隔平均 **4.5 年**；出生全年发生但当地有季节集中。另一恢复中、低密度种群可出现更早初产和更短间隔，因此这些是 Amboseli 的种群参数，不是硬编码的全球常数。[Moss 2001](https://doi.org/10.1017/S0952836901001212) [Foley & Faust 2010](https://doi.org/10.1017/S0030605309990706)

Amboseli 40 年生命史研究把物种最大寿命概括为 **70 年以上**；834 只长期监测雌性中，繁殖并非在 65 岁前完全停止。`lifespanYears: [60, 70]` 容易被界面解释成期望寿命范围，也排除了“70+”，建议删除，改用带限定的展示文案“野外记录可超过 70 年”。[Lee et al. 2013](https://doi.org/10.1098/rsbl.2013.0011) [Lee et al. 2016](https://doi.org/10.1007/s00265-015-2051-5)

### 生态系统工程作用：真实，但不是单向“造福”

草原象以折枝、剥皮、推倒木本植物、踩踏和选择性取食改变树草比例、燃烧条件和物种组成；这些作用与象密度、降雨、土壤、火和水点管理相互作用。Kruger 的 56 年火烧实验及象数量变化显示，象与火对木本生物量和碳交换的影响随生产力梯度而变。推荐保留“生态系统工程师”，但把“推倒树木、开空地，为许多物种改善环境”改成中性、情境化的“重塑植被结构，对不同物种和地点可有不同后果”。[Pellegrini et al. 2017](https://doi.org/10.1111/1365-2745.12668) [IUCN assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T181008073A223031019.en)

果实取食又使它成为长距离种子传播者。一项结合 4 只象的喂食试验与 38 只项圈个体 8 年移动资料的机制模型预测，约一半种子可被带过 2.5 千米，最大肠道通过时间下理论距离可达 65 千米。这是模型分布的尾端潜力，不是每粒种子的实际运输距离。[Bunney et al. 2017](https://doi.org/10.1111/btp.12423)

现有“挖掘水源，为许多物种供水”没有在本次找到同等强度、可外推到全范围的原始证据，建议从主描述删除；可以展示在沙地取水或涉水的真实行为，但不把单次行为升格为普遍生态服务。

### 威胁与保护行动

全球评估支持的核心威胁是象牙偷猎、农业及其他土地用途转换造成的栖息地丧失与破碎、道路/围栏等对连通性的切割，以及随之增加的人象冲突和报复性杀死。大陆趋势并不均一：一些亚种群稳定或增长，尤其 KAZA 强区，不能由局地增长反推全球无危，也不能用全球 EN 否认局地管理压力。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T181008073A223031019.en) [IUCN 2021 announcement](https://iucn.org/news/species/202103/african-elephant-species-now-endangered-and-critically-endangered-iucn-red-list)

干旱应保留但需改写。CITES MIKE 截至 2024 年的 28,450 具象尸记录显示，东非近年自然死亡受干旱影响，南部非洲自然死亡自 2022 年上升并于 2024 年达峰；这支持“气候变化与干旱加重水食压力并放大冲突”，不支持把干旱写成已经量化的唯一大陆下降主因。[CITES CoP20 Doc. 76.4](https://cites.org/sites/default/files/documents/E-CoP20-076-04.pdf)

推荐行动按 2023 修订的 African Elephant Action Plan 组织：降低非法杀死和非法产品贸易；保护大尺度栖息地、恢复连通和跨境合作；以参与式、可调整、针对当地成因的组合措施降低人象冲突；长期监测数量、死亡、移动和物种/杂交身份。不存在一项对所有地方永久有效的冲突缓解工具，不能把蜂箱围栏、辣椒或迁地转移写成全球万能方案。[African Elephant Fund—Action Plan objectives](https://africanelephantfund.org/en/home-1) [AEAP objective 1 and 2 implementation guidance](https://www.africanelephantfund.org/aeapobj1) [CITES MIKE](https://cites.org/eng/prog/mike/intro/1_executive.shtml)

## 推荐关键事实

1. 非洲现有两个公认物种：濒危的非洲草原象 *L. africana* 与极危的非洲森林象 *L. cyclotis*；二者可杂交，但已知杂交主要集中在森林—草原过渡带。[Hart et al. 2021](https://doi.org/10.1017/S0030605320001386) [Kuhner et al. 2025](https://doi.org/10.1016/j.gecco.2025.e03530)
2. 现行 IUCN 结论是 `EN / decreasing / A2abd`，正式评估日期为 2020-11-13；2022 只是现行修订版的卷期年。[IUCN SSC ruling](https://nc.iucnredlist.org/redlist/content/attachment_files/SPC_African_Savanna_Elephant_Ruling_13Oct2022.pdf)
3. 名称虽然含“草原”，它也利用林地、灌丛、山地林、荒漠边缘、泛洪平原和湿地镶嵌。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T181008073A223031019.en)
4. 完全长成平均体型约为雌性肩高 2.6 米、3 吨，雄性 3.2 米、6 吨；接近 4 米是罕见极端而非普通成体。[Larramendi 2016](https://doi.org/10.4202/app.00136.2014)
5. 两个肯尼亚家族的粪便 DNA 检出至少 367 个植物分类单元，显示其混合采食与明显的季节、家庭和个体差异。[Gill et al. 2023](https://doi.org/10.1098/rsos.230337)
6. 雌性亲族形成多层次裂合社会；成年雄性离开出生群后可独行或结成灵活雄群，年长雄性也能带领全雄移动群。[Archie et al. 2006](https://doi.org/10.1098/rspb.2005.3361) [Allen et al. 2020](https://doi.org/10.1038/s41598-020-70682-y)
7. 它们用低频声、触觉、气味、姿态和地面振动交流；野外研究还支持接收者特异的“类名字”叫声，而不是已解码的人类式姓名。[Pardo et al. 2024](https://doi.org/10.1038/s41559-024-02420-w)
8. 妊娠约 640 天/22 个月；Amboseli 雌性平均约 14.1 岁初产、平均产仔间隔 4.5 年，但后两项会随种群条件改变。[Lueders et al. 2012](https://doi.org/10.1098/rspb.2012.1038) [Moss 2001](https://doi.org/10.1017/S0952836901001212)
9. 部分个体会机会性季节迁移，许多个体不迁或并非每年迁；“所有象群沿固定路线大迁徙”错误。[Purdon et al. 2018](https://doi.org/10.1111/oik.02996)
10. 草原象既改变植被与火的相互作用，也传播种子；这些工程效应随环境与密度而变，并非对所有物种永远有利。[Pellegrini et al. 2017](https://doi.org/10.1111/1365-2745.12668) [Bunney et al. 2017](https://doi.org/10.1111/btp.12423)

## 应删除或避免的说法

- 删除中文别名“非洲稀树草原象”；保留主名“非洲草原象”，英文备选名只在说明中写 African Bush Elephant。
- 删除 `distribution.realms` 中的 `freshwater`；涉水、饮水与湿地利用不等于淡水生命史领域。
- 删除“只分布东非、南部非洲”和只列 6 国的做法；改为带来源年份的 22 国工作清单。
- 删除“所有象群季节迁徙”；改为高移动性与部分/机会性迁移。
- 删除“成年雄性常见 4—7.5 吨”和不加限定的“最大肩高约 4 米”；改用雌雄分列的完全长成常见值。
- 删除固定“每日取食 100—150 千克”；鲜重/干重、季节、年龄和体型口径不清。
- 删除 `metrics.topSpeedKph: 40`。本次找到的经典 25 km/h 实验对象是亚洲象而非本种，未找到可支撑野生草原象统一 40 km/h 的原始测量。[Hutchinson et al. 2003](https://doi.org/10.1038/422493a)
- 删除 `metrics.lifespanYears: [60, 70]`；改为“野外最大寿命可超过 70 年”，不要把潜在最大寿命写成期望寿命区间。
- 删除/中性化“推倒树、挖水都是为许多物种造福”；生态工程效应依赖密度、雨量、火和管理。
- 不写“象群由母象首领永久带队”或“成年雄象均独居”；应写多层次裂合社会与雄性阶段性社群。
- 不写“用地震波在任意远距离说话”或“每只象都有已解码姓名”；分别改成实验支持识别地面振动信号、存在接收者特异的类名字叫声。
- 不把 415,000 写成草原象数量；它是 2016 年两个非洲象种合计估计。
- 不把 IUCN EN、CITES 附录 I/II 分列和 CMS 附录 II 混成一套“濒危等级”。
- 不把“没有象牙”当作错误素材：偷猎选择可快速提高雌性无牙频率，天然个体差异也存在。[Campbell-Staton et al. 2021](https://doi.org/10.1126/science.abe7389)

## 现有 `src/data/species.ts` 字段逐项审计

| 现有字段 | 结论 | 推荐修改 |
| --- | --- | --- |
| `scientificName` / taxonomy | 正确 | 保留 *L. africana*、Elephantidae、*Loxodonta*；来源换 MDD/ITIS，不并入 *L. cyclotis* |
| `names.zh/en` | 主名正确 | 保留“非洲草原象 / African Savanna Elephant”；`aliases` 改空数组 |
| `conservation` | 完全正确 | 保留 `EN / decreasing / 2020 / A2abd`；来源换现行 DOI 与 2022 ruling |
| `distribution.realms` | 错把湿地利用当淡水领域 | 只保留 `terrestrial` |
| `distribution.regions` | 过窄 | 补西非、中非，并写东非、南部非洲；不要暗示连续分布 |
| `distribution.countries` | 6 国不是完整清单且未标“代表” | 换 22 国 AfESG 2024 工作清单并在 `range` 标明版本 |
| `distribution.range` | 大方向正确但生境太少 | 写草地、灌丛、林地、山地林、荒漠边缘、泛洪平原/湿地镶嵌及严重破碎 |
| `habitats` | 只有草原与淡水湿地，过窄 | 全部设 terrestrial；至少拆“草原—灌丛”“林地—山地林”“干旱区—泛洪平原” |
| `measurements.height` | 混合典型值和极端 | 改 2.47—3.36 m，并在 note 分列雌 2.47—2.75、雄 3.04—3.36；4 m 只可在正文称罕见极端 |
| `measurements.weight` | “成年雄性常见 4—7.5 t”错误 | 改 2.6—6.9 t，并在 note 分列雌 2.6—3.5、雄 5.2—6.9；不称连续通用范围 |
| `diet` | 食物项基本正确 | description 改混合采食、季节/个体差异；移除触觉交流 |
| `activity` | “母系群居/季节迁移”过度简化 | 写全天可活动且时段可变、多层次裂合母系社会、成年雄性离群后亦可结群、部分个体迁移 |
| `summary` | “最大陆生动物”正确 | 保留，生态工程加“情境依赖” |
| `description` | 树木与水源效益单向化 | 改成植被—火—种子传播的情境效应；社会与交流用更精确表述 |
| `keyFacts` | 1 项无可靠口径，2 项可用，1 项过于一般 | 删除每日食量；保留约 22 月妊娠；用两物种边界、类名字叫声或部分迁移替换耳散热 |
| `threats` | 基础方向正确 | 加非法杀死/报复性杀死、道路围栏和土地转换；把干旱改成水食压力与冲突放大因素 |
| `conservationActions` | 正确但太口号化 | 对齐 AEAP：执法与 MIKE、连通和跨境、参与式共存、长期监测、物种/杂交身份核验 |
| `metrics.adultMassKg` | 不能表达雌雄双峰与完全长成口径 | 建议删除，不为排序牺牲语义 |
| `metrics.lifespanYears` | 把最大潜力写成区间 | 删除 |
| `metrics.topSpeedKph` | 缺本种原始依据 | 删除 |
| `featuredStats` | 身高与食量需换 | 用雌雄平均体型、22 月妊娠、IUCN 三世代降幅；每项注明口径 |
| `sources` | 泛 IUCN/GBIF 搜索不可审计 | 换成文末专用直链 `SpeciesSource[]` |
| `media.alt` | “稀树草原”可描述场景但不是名称 | 改为具体个体数、年龄/性别与动作；不要只写“象群” |
| `storySections` | 缺失 | 增加分类边界、栖息地移动、混合采食、社会育幼、多模态交流、生态与保护六章 |

## 可直接落地的推荐字段

以下片段按现有 schema 编写；`countries` 采用 AfESG 2024 工作清单，正式 2026 草原象状态报告发布后应复核。

```ts
names: { zh: '非洲草原象', en: 'African Savanna Elephant', aliases: [] },
scientificName: 'Loxodonta africana',
conservation: conservation('EN', 'decreasing', 2020, 'A2abd'),
distribution: {
  realms: ['terrestrial'],
  continents: ['非洲'],
  regions: ['撒哈拉以南非洲', '东非', '中非', '南部非洲', '西非'],
  countries: [
    '厄立特里亚', '埃塞俄比亚', '肯尼亚', '卢旺达', '索马里', '南苏丹', '坦桑尼亚', '乌干达',
    '喀麦隆', '乍得', '刚果民主共和国',
    '安哥拉', '博茨瓦纳', '斯威士兰', '马拉维', '莫桑比克', '纳米比亚', '南非', '赞比亚', '津巴布韦',
    '布基纳法索', '马里',
  ],
  range: 'AfESG 2024 工作口径承认 22 个范围国；现存分布高度破碎，跨越草地、灌丛、林地、山地林、荒漠边缘及泛洪平原。待正式草原象状态报告发布后复核。',
  center: { lat: -15, lng: 25 },
},
habitats: [
  {
    name: '草原、灌丛与稀树草原镶嵌',
    realm: 'terrestrial',
    description: '在草本、灌木和疏林之间混合采食，利用水源和季节性绿度变化。',
    isPrimary: true,
  },
  {
    name: '米翁波、莫帕尼与山地林地',
    realm: 'terrestrial',
    description: '名称中的“草原”不排除林地或部分山地森林利用。',
  },
  {
    name: '半荒漠、荒漠边缘与季节性泛洪平原',
    realm: 'terrestrial',
    description: '不同种群随水、食物、人类活动和通道连通性调整移动。',
  },
],
measurements: {
  height: {
    min: 2.47,
    max: 3.36,
    unit: 'm',
    note: '完全长成个体约 90% 范围；雌性 2.47—2.75 m，雄性 3.04—3.36 m',
  },
  weight: {
    min: 2.6,
    max: 6.9,
    unit: 't',
    note: '完全长成个体约 90% 范围；雌性 2.6—3.5 t，雄性 5.2—6.9 t',
  },
},
diet: {
  types: ['herbivore'],
  foods: ['草本植物', '树叶', '嫩枝', '树皮', '果实'],
  description: '混合型植食者；草食与浏览比例随降雨、地点、家庭和个体而变，不能用单一日食量代表全物种。',
},
activity: [
  '全天可活动；高温与人类风险可使活动偏夜间',
  '雌性亲族构成多层次裂合社会',
  '成年雄性离开出生群后可独行或组成灵活雄群',
  '部分个体机会性季节迁移，另一些定居或并非每年迁移',
],
tags: ['非洲', '生态系统工程师', '巨型植食动物', '裂合社会', '跨境移动'],
summary: '现生体型最大的陆地动物；它跨越草原、林地、荒漠边缘和泛洪平原，以混合采食、长距离移动与种子传播重塑景观。',
description: '非洲草原象不是非洲森林象，也不只生活在开阔草原。雌性亲族组成会分裂、重聚的多层社会，成年雄性离群后仍可形成社群；它们以低频声、触碰、气味、姿态和地面振动交换信息。折枝、剥皮、踩踏与种子传播会改变植被和火的相互作用，其后果取决于象密度、雨量、土壤和管理。',
keyFacts: [
  'IUCN 于 2020 年将非洲草原象评为濒危 A2abd；2022 是现行修订版出版年，不是新评估年。',
  '完全长成平均体型约为雌性肩高 2.6 米、3 吨，雄性 3.2 米、6 吨；接近 4 米属于罕见极端。',
  '野外研究支持接收者特异的“类名字”叫声，但尚未把它们解码成人类式姓名。',
  '妊娠平均约 640 天，即约 22 个月；繁殖速度还受母象年龄、营养和种群条件影响。',
  '只有部分个体会机会性季节迁移，并非每个象群每年沿同一路线迁徙。',
  '种子传播模型预测约一半种子可被带过 2.5 千米；65 千米是最大通过时间下的模型尾端潜力。',
],
threats: [
  '象牙偷猎与非法杀死',
  '农业、采掘、聚落和基础设施导致的栖息地转换与破碎',
  '道路、围栏和不当水点管理切断移动与跨境连通',
  '作物、饮水与人身安全冲突引发的报复性杀死',
  '气候变化和严重干旱加重水食压力并放大人象冲突',
],
conservationActions: [
  '强化现场保护、司法执法、CITES 象牙贸易管制与 MIKE 死亡监测',
  '以土地利用规划保护大尺度栖息地、跨境景观和真实移动通道',
  '由当地社区参与诊断冲突成因，组合并持续评估适地缓解措施',
  '长期开展标准化数量、尸体、移动、年龄性别结构和遗传监测',
  '在森林—草原过渡区核验草原象、森林象与杂交个体，避免错误管理',
],
metrics: {},
featuredStats: [
  {
    key: 'fully-grown-size',
    label: '完全长成平均体型',
    value: '雌 2.6 m / 3 t；雄 3.2 m / 6 t',
    note: '平均值，不是所有成体范围或历史极端',
  },
  {
    key: 'gestation',
    label: '平均妊娠期',
    value: '约 22',
    unit: '个月',
    note: '约 640 天，并非每胎恰好相同',
  },
  {
    key: 'red-list-decline',
    label: 'IUCN 三世代下降',
    value: '>50',
    unit: '%',
    note: '三个世代约 75 年的大陆模型；地区趋势不均',
  },
],
```

推荐六章 `storySections` 的主题顺序：

1. `two-species`：两个非洲象种与形态组合鉴别；
2. `habitat-and-movement`：不只草原、部分迁移；
3. `mixed-feeding`：季节与个体化食谱；
4. `social-network`：裂合母系网络、雄性社会与育幼；
5. `multimodal-communication`：低频声、触觉、地面振动与类名字叫声；
6. `engineering-and-conservation`：情境化生态工程、偷猎、连通与共存。

## 6 张现有图像的形态与行为验收线索

以下对应 `src/assets/source/species/african-savanna-elephant/README.md` 的六个场景。共同底线：可见个体应有一条连贯长鼻、两只耳、四条承重腿和一条尾；避免亚洲象的小耳/双隆额型。草原象与森林象必须看**组合**：尽量同时看到耳下叶低于下颌、象牙向前外弯和凹背，不能以单一“耳形”或开放背景定种；过渡区或特征不全的图片须靠可信地点/物种元数据补证。[Bonnald et al. 2023](https://doi.org/10.1017/S0030605321001605)

1. **`01-savanna-family-portrait`，母系家庭主视觉**
   - 三只应明确为成年雌性、另一成年雌性和幼象，而不是大雄象永久领队；幼象处在成年雌性保护范围内，身体不能缩成玩具比例。
   - 成年雌象可有中等象牙、短象牙、单牙或无牙；不要因为无牙就判错，也不要给每只雌象复制完全相同的巨牙。[Campbell-Staton et al. 2021](https://doi.org/10.1126/science.abe7389)
   - 画面可体现朝向一致和保护队形，但不要暗示家庭单位永不分裂。[Archie et al. 2006](https://doi.org/10.1098/rspb.2005.3361)

2. **`02-seasonal-browsing`，采食**
   - 长鼻应真实卷住仍连接树体的细枝并送向口部，不应像人手持餐具；树叶、嫩枝属于可靠食物，整株连根拔起不是浏览的必要表现。
   - 标题/说明应写“混合采食与季节变化”，不要写它只吃草、只吃金合欢或每天固定 100—150 千克。[Gill et al. 2023](https://doi.org/10.1098/rsos.230337)

3. **`03-floodplain-habitat`，季节性泛洪平原**
   - 浅水涉行、饮水和取食合理；水深宜让腿部受力关系可读，不要画成海洋式长距离游泳或把它标成 freshwater 物种。
   - 开阔水道、芦苇/草地与远处林地应构成同一镶嵌景观，说明文字突出“草原象不只在草原”，而不是称湿地为唯一核心栖息地。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T181008073A223031019.en)

4. **`04-dust-bathing`，扬尘与泥浴后的维护行为**
   - 单只象应以长鼻把局部、细薄的尘土抛到肩背；泥痕可保留。不要做成沙尘暴、火灾逃生或攻击姿态。
   - Elephant Ethogram 把 Dusting 定义为脚松土、鼻卷土并抛撒到身体；可说皮肤维护/舒适行为，不必把每次扬尘都断言为精确体温调节。[Elephant Ethogram—Dusting](https://elephantvoices.org/elephant-ethogram/ethogram-table/behavior?id=70) [Mud-Splashing](https://www.elephantvoices.org/elephant-ethogram/search-portal/behavior?id=157)

5. **`05-matrilineal-calf-care`，幼象照料与鼻触**
   - 幼象与母亲或异母照料者的鼻—口、鼻—体轻触有行为依据；成年雌性可围护，但不要做成人类式拥抱、微笑或整齐合影。
   - 图注可以写“母系亲族中的安抚与异母照料”，不要把另一成年雌象强行标成亲生母亲。[Elephant Ethogram—Allomothering](https://elephantvoices.org/elephant-ethogram/ethogram-table/behaviorconstellation?cvid=&id=90) [Trunk-to-Mouth](https://www.elephantvoices.org/elephant-ethogram/ethogram-table/behavior/285.html)

6. **`06-dry-season-corridor`，干季移动与连通**
   - 可表现家庭沿天然干河床定向移动，但图像本身不能证明这是已测绘的“迁徙廊道”；没有项圈、路线或连续追踪时，图注宜写“移动通道/干季行进”。
   - 不要称每年固定大迁徙；原始追踪显示部分迁移、个体差异和年度可变性。[Purdon et al. 2018](https://doi.org/10.1111/oik.02996) [Tshipa et al. 2017](https://doi.org/10.1016/j.biocon.2017.09.003)

## 推荐的物种专用 `SpeciesSource[]`

以下常量可直接放入 `species.ts` 的专用来源区；均为物种页、官方文档、论文 DOI 或长期行为数据库，不使用搜索结果页。

```ts
const AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE = '2026-08-17' as const;
const AFRICAN_SAVANNA_ELEPHANT_CONTENT_DATE = '2026-08-17' as const;

const AFRICAN_SAVANNA_ELEPHANT_SOURCES = [
  {
    title: 'IUCN Red List 2022 — Loxodonta africana (amended 2021 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T181008073A223031019.en',
    kind: 'conservation',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC Standards and Petitions Committee — African Savanna Elephant ruling (2022)',
    url: 'https://nc.iucnredlist.org/redlist/content/attachment_files/SPC_African_Savanna_Elephant_Ruling_13Oct2022.pdf',
    kind: 'conservation',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Mammal Diversity Database — Loxodonta africana, MDD 1000522',
    url: 'https://www.mammaldiversity.org/taxon/1000522/',
    kind: 'taxonomy',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'ITIS — Loxodonta africana, TSN 584939',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=584939',
    kind: 'taxonomy',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Hart et al. 2021 — African forest and savannah elephants treated as separate species',
    url: 'https://doi.org/10.1017/S0030605320001386',
    kind: 'taxonomy',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Kuhner et al. 2025 — Genetic distribution of savanna, forest and hybrid elephants',
    url: 'https://doi.org/10.1016/j.gecco.2025.e03530',
    kind: 'distribution',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'CITES SC78 Doc. 65.1 — African elephant status and 2024 savanna range-State update',
    url: 'https://cites.org/sites/default/files/documents/E-SC78-65-01_0.pdf',
    kind: 'distribution',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'China National Forestry and Grassland Administration — CITES Appendices effective 5 March 2026',
    url: 'https://www.forestry.gov.cn/u/cms/www/202603/07094239sawe.pdf',
    kind: 'conservation',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'CMS — Loxodonta africana, Appendix II',
    url: 'https://www.cms.int/species/loxodonta-africana',
    kind: 'conservation',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Bonnald et al. 2023 — Morphological distinction of savanna, forest and intermediate elephants',
    url: 'https://doi.org/10.1017/S0030605321001605',
    kind: 'taxonomy',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Larramendi 2016 — Shoulder height, body mass and shape of proboscideans',
    url: 'https://doi.org/10.4202/app.00136.2014',
    kind: 'general',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Gill et al. 2023 — Individual elephant diets using DNA metabarcoding',
    url: 'https://doi.org/10.1098/rsos.230337',
    kind: 'ecology',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Smit et al. 2023 — Human disturbance shifts elephant activity toward nighttime',
    url: 'https://doi.org/10.1111/aje.13083',
    kind: 'ecology',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Archie et al. 2006 — Relatedness and fission–fusion social groups',
    url: 'https://doi.org/10.1098/rspb.2005.3361',
    kind: 'ecology',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Pardo et al. 2024 — Individually specific name-like calls',
    url: 'https://doi.org/10.1038/s41559-024-02420-w',
    kind: 'ecology',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Moss 2001 — Demography of the Amboseli elephant population',
    url: 'https://doi.org/10.1017/S0952836901001212',
    kind: 'ecology',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Purdon et al. 2018 — Partial migration across southern African populations',
    url: 'https://doi.org/10.1111/oik.02996',
    kind: 'ecology',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Bunney et al. 2017 — Savanna-elephant seed-dispersal kernel',
    url: 'https://doi.org/10.1111/btp.12423',
    kind: 'ecology',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'Pellegrini et al. 2017 — Elephant–fire effects on woody biomass and carbon',
    url: 'https://doi.org/10.1111/1365-2745.12668',
    kind: 'ecology',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'ElephantVoices — African Savanna Elephant Ethogram',
    url: 'https://www.elephantvoices.org/elephant-ethogram/introduction.html',
    kind: 'ecology',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'CITES CoP20 Doc. 76.4 — Monitoring the Illegal Killing of Elephants',
    url: 'https://cites.org/sites/default/files/documents/E-CoP20-076-04.pdf',
    kind: 'conservation',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
  {
    title: 'African Elephant Fund — African Elephant Action Plan objectives',
    url: 'https://africanelephantfund.org/en/home-1',
    kind: 'conservation',
    accessedAt: AFRICAN_SAVANNA_ELEPHANT_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 仍应保留的不确定性

- 22 国是 AfESG 2024 工作口径；正式 African Savanna Elephant Status Report 发布后，应优先更新国家清单、范围叙述与数量，不应继续沿用本稿中的工作版本。
- 全球 IUCN 评估与当前状态报告不是同一产品：前者回答灭绝风险，后者整理调查数量与分布。局地增长、KAZA 最新估计或单国普查不能自行覆盖全球 EN。
- 体型值依赖性别、年龄、营养与估算方法；推荐数字刻意选择“完全长成平均/90% 范围”，没有把历史最大个体当普通上限。
- 367 个植物分类单元、14.1 岁初产、4.5 年产仔间隔、2.5/65 千米种子传播都来自明确地点或模型；页面可用于解释机制，但必须保留样本和口径限定。
- 在森林—草原交错带，可靠物种鉴定应优先用来源元数据与遗传信息；六项外形只适合高质量、特征可见的参考照片，不是所有单图的绝对钥匙。
