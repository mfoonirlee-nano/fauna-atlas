# 锈斑熊蜂（*Bombus affinis*）完整档案研究

- 检索与核验日期：2026-08-17
- 使用范围：`src/data/species.ts` 的锈斑熊蜂条目、详情页长文、数字卡、六张物种图片及后续事实验收
- 证据标准：优先采用 IUCN 原始评估及 DOI、USFWS 的 ESA 列名规则、恢复计划、五年审查和最终关键栖息地规则、COSEWIC/SARA 正式文件、权威分类数据库，以及直接研究 *Bombus affinis* 的原始同行评审论文。宣传页只用来定位正式文件，不承担精确数字。
- 时间口径：全球 IUCN 评估日期、红色名录卷期、美国 ESA 法律状态、加拿大 COSEWIC/SARA 状态和论文发表年份分别记录，不能互相替代。
- 数值口径：收藏记录、调查观察数、占据网格、县级空间范围、EOO、相对丰度、巢/蜂群数和成熟个体数是不同量；本文不把任何一种换算成未经研究支持的“全球剩余数量”。
- 名称说明：本文沿用项目中文名“锈斑熊蜂”。英文机构存在 `Rusty Patched Bumble Bee`（USFWS）与 `Rusty-patched Bumble Bee`（COSEWIC）两种排法；当前英文名可保留。未找到高可信中文分类来源把“锈补丁熊蜂”列为规范异名，若保留它，只能视为站内搜索用直译别名。

## 结论摘要

### 接受分类、评估年份与法律状态

当前接受名是 ***Bombus affinis* Cresson, 1863**，分类为动物界—节肢动物门—昆虫纲—膜翅目—蜜蜂科—熊蜂属，位于熊蜂亚属 ***Bombus sensu stricto***；没有公认亚种。COSEWIC 2022 复核认为本种自描述以来分类稳定，且加拿大只设一个可指定单元。仓库现有门、纲、目、科、属均可保留。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html) [ITIS TSN 714782](https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=714782)

全球 IUCN 状态是 **极危 Critically Endangered（CR）**、趋势 **下降**，正确标准是 **A2b**，不是当前代码中的 `A2abce`。`b` 表示以适合该类群的丰度指数支持过去种群缩减；A2 还意味着缩减原因可能尚未停止、尚未完全理解或不可逆。正式 assessment date 是 **2014-12-29**；引用属于 **The IUCN Red List of Threatened Species 2015-2**，DOI 记录在 2015 年建立。因此 `assessedYear` 应写 **2014**，来源标题则应保留 2015-2，不能把卷期年份改填成评估年。[IUCN 原始评估 DOI](https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T44937399A46440196.en) [IUCN 评估存档 PDF](https://downloads.regulations.gov/FWS-R3-ES-2015-0112-0018/attachment_6.pdf)

美国在 2017 年依据《濒危物种法》把本种列为 **Endangered**；USFWS 2022 年首次五年审查建议维持原分类。这里的美国 `Endangered` 是国内法律地位，不应覆盖产品的全球 IUCN `CR` 字段。[USFWS 2017 最终列名规则](https://www.govinfo.gov/content/pkg/FR-2017-01-11/pdf/2017-00195.pdf) [USFWS 2022 五年审查](https://ecos.fws.gov/docs/tess/species_nonpublish/3911.pdf)

加拿大在 2012 年把本种列入 SARA 附表 1 的 **Endangered**，COSEWIC 于 **2022 年 12 月**确认 Endangered，标准 **B2ab(iii); C2a(i); D1**。这不是全球等级：加拿大自 2009 年后没有再确认个体，评估推断成熟个体少于 250，但没有把它评为 Extirpated，因为仍可能存在未被发现的极小残存种群。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html) [加拿大 2020 恢复策略](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/recovery-strategies/rusty-patched-bumble-bee-2020.html?wbdisable=true)

### 辨识特征、性别与蜂级差异

成虫覆有浓密、较整齐的毛，颊部（ocular-malar area）短于其宽度；所有蜂级的脸和头部毛以黑色为主。名称所指的锈褐色并不是整个腹部的一圈“红腰带”：**工蜂与雄蜂的第二腹背板 T2 中央通常有锈褐色斑，四周仍由黄色毛包围**。T1 很窄且在照片角度中容易被胸部遮住，因此图像提示词应明确写 T2，而不能只写“腹部第二条”。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html)

未交配新蜂王（gyne）和已创巢蜂王的 **T2 通常整体以黄色毛为主，并无显眼锈斑**。因此“只有工蜂和雄蜂通常显出名称所指锈斑”这一现有 `keyFact` 基本正确，但必须避免由此推断“没有斑就不是本种”。蜂王仅靠颜色图案较难与 *B. vagans*、*B. sandersoni* 等近缘种区分；工蜂和雄蜂也需排除 *B. ternarius*、*B. griseocollis*、*B. rufocinctus* 等相似花纹种，雄蜂还可能与社会寄生种 *B. citrinus* 混淆。详情页应把照片鉴定表述为“工蜂/雄蜂的背侧 T2 斑是强提示，蜂王需结合头颊比例、其余毛色、地点和专家鉴定”，而不是给出单特征自动鉴定承诺。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html)

可靠体长须按蜂级分列：**蜂王 19—23 毫米、工蜂 9—16 毫米、雄蜂 14—17 毫米**。现有 `10—22 mm` 同时漏掉 9 毫米小工蜂和 23 毫米大蜂王，还把三种分布压成一个没有性别/蜂级信息的范围；应改成总范围 9—23 毫米，并在 `note` 中完整列三组数据。数值来自成虫体长，不能拿花朵或透视比例反推图中个体长度。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html)

### 历史分布、当前记录与“范围缩减”口径

历史上，本种广布北美东部温带区：美国从上中西部、五大湖和东北部向南延至佐治亚州北部；加拿大可靠历史范围包括安大略省南部、魁北克省南部和新不伦瑞克省西部。COSEWIC 2022 重新检查后剔除了若干来自安大略北部和魁北克北部的误定/错误坐标记录，因此不可按旧数据库点把范围推向加拿大北方。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html)

COSEWIC 给出的历史全球 EOO **2,621,644 平方千米**是用 1881—2020 年已接受记录做最小凸多边形得到的包络面积，且包括五大湖等大型水体；它不是连续占据生境，更不是当前分布面积。加拿大曾用 2000—2009 年 Pinery 与 St. Williams 两个点得到最多约 203 平方千米的“current EOO”，但截至 2022 评估已连续十余年无确认记录，不能把 203 平方千米继续展示成现存加拿大范围。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html)

加拿大最后一次确认是 **2009 年 Pinery Provincial Park**。2010—2020 年的历史范围调查累积超过 **31,096 条其他熊蜂记录、1,130 个地点**，仍无 *B. affinis*；Pinery 在 2010 年至 2020 年 8 月底之间还有 332 个独立调查日、约 2,014 人时和 3,398 只熊蜂而未检出本种。这支持“可能已经在加拿大局地灭绝、但尚不能确认”，不支持给出一个当前加拿大成熟个体点估计。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html)

美国残存记录高度破碎。USFWS 2022 五年审查汇总到 2021 年时，共有 **454 个 10×10 千米网格**自 2007 年以来至少有一次记录；这只是机构用于追踪的占据代理，不是 454 个已证实健康种群。多数地点只有一两只观察记录，调查投入也在增加。2017—2021 年最晚仍持续有观察的州是 **伊利诺伊、艾奥瓦、明尼苏达、弗吉尼亚、西弗吉尼亚和威斯康星**；当前最明确的残存核心可概括为上中西部和中阿巴拉契亚，而不能继续笼统写“少数东北部地点”。五年审查表中的年度观察总数 450、1,089、588、1,706、1,301 是不同努力下的 observations，不是种群数量或增长趋势。[USFWS 2022 五年审查](https://ecos.fws.gov/docs/tess/species_nonpublish/3911.pdf)

2026 年最终关键栖息地规则也集中在上述六州，选出具有至少 50 个 2007 年以来验证观察、位于相连高潜力区并支持最强已知残存群体的区域。但该法律筛选不等于“完整当前分布”：规则明确承认还有其他适宜或占据区域未达到 ESA 关键栖息地定义。[USFWS 2026 最终关键栖息地规则](https://www.govinfo.gov/content/pkg/FR-2026-06-01/pdf/2026-10846.pdf)

#### 四组常被混写的缩减数字

| 数字 | 原始研究/评估的比较对象 | 正确解读 | 不可写成 |
| --- | --- | --- | --- |
| 约 **87%** | Cameron et al. 2011：1900—1999 年博物馆记录构建的历史分布模型，与 2007—2009 年全美 382 个地点调查比较；本种只在伊利诺伊 3 处、印第安纳 1 处检出 22 只 | 该研究设计下的美国**调查地理范围收缩估计**；同文还报告本种相对丰度下降超过 95%，但因样本少未进入部分统计分析 | 全球土地面积减少 87%；现今只剩历史个体的 13% |
| **少于 30% 持续占据** | Colla et al. 2012：东北北美在 1964—1990 与 1991—2009 两期均取样的 50×50 千米网格 | 在这一美加区域和共同抽样网格中持续出现不足 30%，常被转述为超过 70% 网格占据损失 | 全球 EOO 缩小 70%；与 Cameron 的 87% 是同一统计量 |
| **92.54% 相对丰度下降**；另有 **45.32% 范围损失**、**29.77% persistence** | IUCN 2014 评估把多个数据库统一分析；最终用前十年的相对丰度下降作为 A2b 的主要依据，综合三类指标的平均下降为 69.36% | 92.54% 是 IUCN 所用**相对丰度指数**的历史缩减，不是个体普查；45.32% 和 29.77% 是同一评估内其他方法结果 | 精确全球死亡比例；现存成熟个体只有历史的 7.46% |
| 约 **87% 县级空间范围损失**；约 **88% 记录种群减少** | USFWS 2017：历史 432 个美国县/加拿大县等价区（394+38）对比 2000 年以来 55 个；历史 926 个操作性种群对比 1999 年后 103 个 | USFWS ESA 框架下的**县/县等价区占用**和操作性种群记录比较；“种群”按记录位置操作定义，健康状态未知 | 测量土地面积减少 87%；与 Cameron 2011 的 87% 可不加说明互换 |

来源：[Cameron et al. 2011](https://doi.org/10.1073/pnas.1014743108) [Colla et al. 2012](https://doi.org/10.1007/s10531-012-0383-2) [IUCN 原始评估](https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T44937399A46440196.en) [USFWS 2017 最终列名规则](https://www.govinfo.gov/content/pkg/FR-2017-01-11/pdf/2017-00195.pdf)

因此现有醒目卡“历史分布区缩减约 87%”若保留，标签至少要改为“USFWS 县级空间占用缩减”，并在 note 写明“历史 432 个县/县等价区，对比 2000 年以来 55 个；不是土地面积”。更稳妥的详情正文是把各指标并列表达，而不是选择一个最大百分比代表全部衰退。

### 栖息地不是一块草地，而是一整年相连的资源链

锈斑熊蜂使用林地、丘陵森林、橡树稀树草原、高草草原、开阔草地、湿地、草甸、农地边缘、城市公园和花园。如此宽的景观清单不表示任何一块“绿地”都足够：一个蜂群必须在可达尺度内同时获得 **早春至秋季连续花源、创巢洞穴、晚季交配/补能资源和安全越冬土壤**。加拿大概括飞行期为 4—10 月；实际出蛰、雄蜂/新蜂王出现和蜂群衰亡日期会随纬度、海拔、年份和天气移动。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html) [USFWS 2026 最终关键栖息地规则](https://www.govinfo.gov/content/pkg/FR-2026-06-01/pdf/2026-10846.pdf)

森林尤其不能从档案中删掉。USFWS 汇总的伊利诺伊 1997—2019 数据显示区域总草地减少约 7.5%，森林下层供所有熊蜂使用的植物盖度约降 3.7%，本种偏好植物盖度约降 2.7%，早春林下花源下降尤其明显。与此同时，博物馆标本花粉 DNA 在 1913—2013 年间没有检测到花粉丰富度、组成或本地/引入植物比例的时间变化；这说明“某一种特定花消失”不太可能单独解释全域崩落，却不否定总花量、关键季节资源缺口或生境丧失的作用。[USFWS 2022 五年审查](https://ecos.fws.gov/docs/tess/species_nonpublish/3911.pdf) [Simanonok et al. 2021](https://doi.org/10.1007/s10531-020-02081-8)

中阿巴拉契亚样本还显示另一种当前景观：Hepner et al. 在九年、超过 2,100 次调查中取得 274 条本种观察，记录倾向于高海拔、重森林覆盖、西至西北坡向及较高橡树/松树基面积的地点；84% 记录来自美国林务局土地，而这些地只占调查的 38%。这是一个地理隔离的山地避难区结果，不能把它外推成全物种只需要成熟森林，也不能抹掉上中西部城市—草地—林缘群体。[Hepner et al. 2024](https://doi.org/10.1016/j.foreco.2024.121751)

### 巢址、蜂群结构与越冬地

本种的巢通常在废弃啮齿动物巢、其他哺乳动物洞或有遮蔽的地下空腔，常见深度约 **0.3—1.2 米**；安大略历史研究的已知巢约 95% 在地下，但也有地表或建筑结构中的例外。2020 年三个新研究巢分别位于住宅地基与保温层之间、私人后院的废弃啮齿动物洞，以及退化的半林地河岸公园；最大巢按蛹房估为 1,341 个体/产出单元。2021 年又研究了两个成功定位的巢，均与过去啮齿动物活动相关。少量机会发现不能给出巢址类型比例，却足以支持“保留洞穴、疏松未压实土壤和林缘过渡带”，并提醒城市地点也可能有巢。[Boone et al. 2022](https://doi.org/10.1111/icad.12564) [Smith et al. 2025](https://doi.org/10.1111/icad.12808) [USFWS 2026 最终关键栖息地规则](https://www.govinfo.gov/content/pkg/FR-2026-06-01/pdf/2026-10846.pdf)

巢内不是蜜蜂式平整六角巢脾。画面应呈现洞穴中不规则堆叠的蜡质育房、蛹茧和储蜜/储粉小罐，并以工蜂群和一只产卵蜂王为主体；不能画成悬挂蜂巢、胡蜂纸巢或蜂蜜蜂箱。近期巢估计 251—1,341 个体/育房量级只是少数已发现巢的结果，不可作为“典型蜂群规模”或全球种群数字。[Boone et al. 2022](https://doi.org/10.1111/icad.12564) [Smith et al. 2025](https://doi.org/10.1111/icad.12808)

越冬者是 **单只、已交配的新蜂王**，不是整个蜂群。USFWS 2026 最终规则指出，目前唯一有文件记录的本种越冬蜂王于 2016 年在威斯康星一片铁杉林（更大枫—栎林内、距林缘约 0.5 千米）发现，位置在北向坡底附近平地、落叶层和松土下几厘米。机构据此再结合其他熊蜂研究，把关键特征概括为距非林缘至少约 25 米、有早春花源、落叶/腐殖层、疏松未压实且排水良好的土壤、不过度被入侵灌木占据的连续高地森林。产品必须同时说明：**具体地点是一个直接记录；更广的森林条件是由该记录和其他熊蜂资料推断**，不能说已证明所有本种蜂王都在北坡铁杉林越冬。[USFWS 2026 最终关键栖息地规则](https://www.govinfo.gov/content/pkg/FR-2026-06-01/pdf/2026-10846.pdf)

### 一年一代的蜂群周期

| 时段 | 主要蜂级与事件 | 产品表达边界 |
| --- | --- | --- |
| 冬季 | 上一年的已交配新蜂王单独在土中滞育；旧蜂王、工蜂和雄蜂已死亡 | 不画群体围着蜂王过冬，不写“蜂巢多年沿用” |
| 早春 | 创巢蜂王出蛰，先补充花蜜/花粉，再寻找洞穴、筑巢、产下第一批雌性工蜂 | 林下春花和开花木本很重要；不能把 4 月定成全分布区固定日历日 |
| 晚春至夏季 | 工蜂承担访花、育幼和巢务，蜂王主要留巢产卵；工蜂数量增加 | 一次花上观察不等于一个独立蜂群；多个工蜂可能来自同巢 |
| 晚夏至初秋 | 蜂群转而产生雄蜂和未交配新蜂王；它们离巢、交配，新蜂王积累越冬储备 | Smith et al. 记录的首雄/首新蜂王日期因巢和年份不同，只能作个案，不得写成固定物候 |
| 深秋 | 新蜂王寻找越冬点；工蜂、雄蜂与旧蜂王死亡 | “一年一代”描述的是年度蜂群循环，不是每只成虫都活一年 |

蜂王可跨越约一年的生命周期，工蜂和雄蜂通常只存活数周。现有 `lifespanYears: [0.08, 1]` 把不同蜂级、不同生命史角色压成一个可排序的“物种寿命范围”，会误导成所有成虫寿命都在一月至一年之间，建议删除；在故事正文解释蜂级差异即可。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html) [Smith et al. 2025](https://doi.org/10.1111/icad.12808)

### 食物、花源与授粉：可以写蔓越莓，暂不强化番茄

成虫从花蜜获得碳水化合物，从花粉获得蛋白质、脂肪酸和微量营养物；工蜂把花粉和花蜜带回巢供幼虫与蜂群使用。本种是短舌、广食性访花者，并非只依赖某几种植物。博物馆标本的花粉 DNA 跨七州、1913—2013 年检出近百个花粉类群，且区域间组成有差异；摄影资料研究的 803 张照片中有 772 张在花上，共涉及 87 个植物属，使用集中于少数高产花属，同时仍包含早春林下花和晚季湿草甸花。恢复配置应重视**当地、连续花期、花量与营养多样性**，而不是复制一张全域统一“必种清单”。[Simanonok et al. 2021](https://doi.org/10.1007/s10531-020-02081-8) [Wolf et al. 2022](https://doi.org/10.3375/22-2)

`diet.types: ['nectarivore', 'herbivore']` 是现有 schema 对花蜜和花粉取食的近似映射，可保留；`foods` 应明确写“多种开花植物的花蜜与花粉”，不宜只写“本地野花”，因为原始花粉研究确认它也使用引入植物。保育行动仍应优先选择与本地生态相容、从早春至秋季连续开花的本地植物，因为单纯证明吃过引入植物并不等于后者足以维持蜂群。[Simanonok et al. 2021](https://doi.org/10.1007/s10531-020-02081-8)

MacKenzie 1994 在马萨诸塞商业蔓越莓地直接观察到 *B. affinis* 和 *B. terricola* 探花时振动蔓越莓花，属于本种发出振动采粉/授粉行为的直接证据；但论文的效率比较多把熊蜂合并分析，不能给 *B. affinis* 单独分配果实增产百分比。[MacKenzie 1994](https://doi.org/10.1051/apido:19940404)

现有 key fact“通过高频振动释放花粉的震动授粉，能服务番茄等植物”混合了两层事实：熊蜂类普遍有振动采粉能力，番茄等茄科作物常从熊蜂授粉获益；但本次没有找到直接测试 ***B. affinis* 对番茄授粉效率** 的原始研究。建议改为“野外研究直接观察到它振动蔓越莓花取粉；对番茄的说法目前只是从熊蜂类能力外推”，图片也不要使用番茄温室来暗示已证实的本种服务。

### 威胁：多压力协同，不能把单一原因写成定论

| 威胁 | 当前证据 | 推荐写法与限制 |
| --- | --- | --- |
| 病原体与管理蜂外溢 | 衰退熊蜂与微孢子虫 ***Vairimorpha bombi***（旧称 *Nosema bombi*）高感染率存在时空关联；管理熊蜂和蜜蜂可传播病原。Cameron et al. 2016 没有支持“一个近期从欧洲输入的新株单独触发全域崩落”的简单假说 | 写“病原体及管理蜂传播是主要持续威胁，可能与其他压力协同”；不写“已证明外来微孢子虫造成 1990 年代崩溃” [Cameron et al. 2016](https://doi.org/10.1073/pnas.1525266113) [USFWS 2022 五年审查](https://ecos.fws.gov/docs/tess/species_nonpublish/3911.pdf) |
| 小种群与遗传恶化 | 2024 年全域遗传研究发现东西向结构、距离隔离、高近交系数和约 15% 全域雄性二倍体率；阿巴拉契亚有独特私有等位基因，地点蜂群数低于稳定共存种 | 把近交/二倍体雄蜂列为独立威胁；稳定年度目击不等于健康种群。迁移、增殖和重引入必须保护区域遗传结构 [Mola et al. 2024](https://doi.org/10.1093/jisesa/ieae041) |
| 农药及混合暴露 | USFWS/COSEWIC 把杀虫剂、除草剂、杀菌剂和土壤残留列为持续风险；大部分剂量—效应研究来自替代熊蜂种，少数本种巢残留筛查仍不足以定义安全阈值 | 写“可造成直接或亚致死效应，除草剂还会间接减少花源”；不把蜜蜂 LD50 或其他熊蜂实验阈值当作本种阈值，不宣称某一化合物已被实验证明造成全域衰退 [USFWS 2022 五年审查](https://ecos.fws.gov/docs/tess/species_nonpublish/3911.pdf) [COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html) |
| 生境丧失与季节资源缺口 | 城市硬化、耕作、开发、林下花减少、土壤压实、巢洞丧失和不当季节的割草/火烧会分别切断生命史环节；花粉组成长期未变不代表花量充足 | 写“需要森林—林缘—草甸/湿地/花园的全周期资源链”；避免只写“种花就够了” [Simanonok et al. 2021](https://doi.org/10.1007/s10531-020-02081-8) [USFWS 2026 最终关键栖息地规则](https://www.govinfo.gov/content/pkg/FR-2026-06-01/pdf/2026-10846.pdf) |
| 气候与极端天气 | 官方评估指出热浪、干旱、春霜、洪水和花期错配可影响花源、巢和蜂群成功；气候影响的迫近性可能增加 | 写“持续且可能增强的威胁，机制包括极端热/旱/涝与物候变化”；不量化它对 1990 年代历史崩落的份额 [USFWS 2022 五年审查](https://ecos.fws.gov/docs/tess/species_nonpublish/3911.pdf) [COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html) |
| 管理蜂竞争与土地管理时机 | 高密度管理蜂会竞争花源并增加病原接触；火烧、割草、放牧既可能短期毁巢/清空花源，也可能在分区、轮替和正确季节下维持稀树草原/草甸 | 将“管理蜂健康与布点”“季节性、分区管理”列为行动；不把火烧、割草一概列成保护或一概列成破坏 [COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html) [USFWS 2021 恢复计划](https://www.fws.gov/media/recovery-plan-rusty-patched-bumble-bee) |

### 保护框架与可执行行动

USFWS 2021 恢复计划把历史范围分为五个 conservation units，降级目标要求每个单元达到规定的健康种群数（42、21、52、52、52，共 219 个目标单元），占域趋势稳定或上升至少 5—10 年，并让三个以上相邻健康种群形成跨生境、生态与气候类型的簇。2022 五年审查把五个单元的“已知健康种群”都填为 0，是因为人口统计、遗传与个体健康阈值尚未定义，**不是说野外为零种群**；同一张表同时列出 255、161、7、29、2 个有 2007—2021 记录的 10 千米网格。[USFWS 2021 恢复计划](https://www.fws.gov/media/recovery-plan-rusty-patched-bumble-bee) [USFWS 2022 五年审查](https://ecos.fws.gov/docs/tess/species_nonpublish/3911.pdf)

2026 年 6 月 1 日发布、7 月 1 日生效的最终规则指定 **1,534,951 英亩（621,172 公顷）**已占据关键栖息地，共 **14 个单元、33 个县、六州**。这不是保护区面积，也不是当前总分布；道路、建筑和铺装地等既有人工结构被排除。关键栖息地本身不改变土地所有权或开放公众进入，主要法律效力是当行动有联邦资金、许可或实施关联时，联邦机关须避免破坏或不利改变关键栖息地。[USFWS 2026 最终关键栖息地规则](https://www.govinfo.gov/content/pkg/FR-2026-06-01/pdf/2026-10846.pdf)

USFWS 2022 估计当时只有约 2% 的现存记录地点位于联邦保护地、18% 位于包含州、部落和多辖区土地的更广保护地；这些数值来自机构地理数据库，说明保护不能只依赖现有保护区。2026 关键栖息地随后增加了一种法律工具，但也不能将其与地权保护比例直接相加。[USFWS 2022 五年审查](https://ecos.fws.gov/docs/tess/species_nonpublish/3911.pdf)

推荐行动按优先级写为：

1. 保护和恢复从早春林下花、开花木本到晚秋菊科等连续、丰富、多样的当地花源，同时保留湿草甸、稀树草原、林缘和城市半自然斑块的连通性。
2. 保留废弃小型哺乳动物洞、林缘空腔、落叶/腐殖层和疏松未压实、排水良好的土壤；避免在创巢、繁殖与越冬敏感期整片翻土、割草、火烧或清除落叶。
3. 以综合虫害管理降低杀虫剂、杀菌剂、除草剂和混合暴露；禁止在蜂活动和开花期无差别喷施，并保护巢周和越冬土壤免受漂移与持久残留。
4. 对商业熊蜂和蜜蜂实施病原筛查、清洁繁育、运输与逃逸控制，谨慎安排蜂箱密度和距核心地点的距离，降低病原外溢与花源竞争。
5. 采用可校正检测概率的重复调查，结合非致死遗传、病原体、农药和巢/新蜂王产出监测；不要用年度目击数直接宣告恢复。
6. 在五个恢复单元内分别保留遗传多样性与连通性；任何圈养繁殖、转移或重引入都要先完成疾病、遗传和地点适宜性风险评估，不能由公众自行移动蜂王或巢。
7. 加拿大继续在历史范围进行定向调查并维护潜在恢复生境；在没有 2009 年后确认记录的情况下，不把 Pinery 等旧点宣传为现存种群。

#### 2026-06-30 USFWS voluntary conservation measures 的使用边界

USFWS 于 **2026 年 6 月 30 日**发布了新的 voluntary conservation measures，适用于项目 action area 与锈斑熊蜂 high potential zones（HPZ）中的规划、协商和减缓。它把管理窗口按北纬 42° 南北分开，并细化了地表扰动、花源清除、农药、林业、火烧、割草、放牧、道路维护和管理蜂措施。[USFWS 2026 Voluntary Conservation Measures](https://www.fws.gov/media/voluntary-conservation-measures-rusty-patched-bumble-bee-bombus-affinis) [USFWS 当前物种页与资源入口](https://www.fws.gov/species/rusty-patched-bumble-bee-bombus-affinis)

这份文件应进入 `sources` 的 `conservation` 类，但内容必须标为**机构的自愿减缓/管理建议**，不能改写成物种级实验结论：

- HPZ 内在项目审查中“assumed present”是保护性工作假设，不等于每个 HPZ 都有当年验证个体，更不等于 HPZ 是法定分布边界。
- 文件建议在北纬 42° 以北的 4 月 15 日—10 月 10 日、以南的 4 月 1 日—10 月 10 日避让活动巢、地表扰动和部分花源移除；这些是便于项目规划的保护窗口，不是全物种固定物候。实际花期和蜂活动仍随地点、海拔、年份与天气变化。
- 文件建议保留啮齿动物洞和既有空腔，避免压实巢/越冬土壤；增加气候适应的本地植物、林地春花与连通性；用综合虫害管理、局部施药、漂移缓冲和避免系统性处理降低暴露。这些与恢复计划和最终关键栖息地规则方向一致。
- 对火烧、割草、林业与放牧，文件给出“分块、轮替、保留未处理斑块”的操作阈值，例如一年火烧不超过管理区适宜生境三分之一、尽可能一年割草不超过觅食生境 25%、单年林业作业不影响持有范围内 HPZ 森林的 25%。这些是风险降低基准，不是已测出的生物学崩溃阈值。
- 对管理蜂，文件建议商业熊蜂尽量限于封闭温室、防逃逸且不得野外释放；高质量本种生境附近避免或降低蜜蜂箱密度，并给出距自然地至少约 1 千米、每英亩低于 0.5 箱、单蜂场不超过 20 箱、蜂场间约 4 英里等自愿建议。这些数值是管理审慎线，不应写成“1 千米外绝对无病原/竞争风险”的安全定律。

截至 2026-08-17 的 USFWS 当前物种页仍把 2017 ESA Endangered、2021 恢复计划、2022 五年审查、HPZ/恢复网格、调查协议和上述 2026 指南作为现行资源体系。物种页明确说历史急剧下降的**确切原因未知**，同时把病原体、农药、生境、管理蜂、气候与小种群生物学列为相互作用的现存压力；详情正文应采用这一不确定性强度，而不是从管理指南倒推出单一病因。[USFWS 当前物种页](https://www.fws.gov/species/rusty-patched-bumble-bee-bombus-affinis)

## 六张图片的事实设计与验收标准

当前资产采用 **1 张封面 + 5 张详情图**：工蜂野蜂香草封面、工蜂鉴别、草原—林缘生境、旧兽穴巢口、春季柳花创巢蜂王、晚夏一枝黄花雄蜂。六图共同讲清“工蜂锈斑—蜂级差异—生境镶嵌—巢址—春季蜂王—晚夏雄蜂”，并与已有图像逐张验收。

| 序号 | 场景与构图 | 必须画对 | 应拒绝的错误 |
| --- | --- | --- | --- |
| 01 封面：野蜂香草上的工蜂 | 背侧三分之四视角的工蜂停在野蜂香草/美国薄荷属（*Monarda*）花序，主体清楚、背景为自然草甸—林缘 | T2 中央锈褐斑被黄色包围；脸毛以黑色为主；体型浑圆密毛；雌性后足结构合理 | 整个腹部一圈红带；把工蜂画成 19—23 mm 蜂王；蜜蜂式细腰、规则黄黑条纹或荧光红斑 |
| 02 工蜂鉴别：Culver's root 上的背侧 T2 结构 | 工蜂停在 Culver's root（*Veronicastrum virginicum*）白色穗状花序，以较近背侧或略侧背视图展示毛色分区和短颊外形 | T1 与 T2 位置合理，锈斑只占 T2 中央且四周有黄毛；头脸毛以黑色为主；该植物属也是中西部照片资料中的高频花源；caption 写“强提示而非照片自动确证” | 把胸部中央黑带误称锈斑；整片 T2/整个腹部涂红；宣称任何有红斑熊蜂都是本种；把 Culver's root 说成唯一寄主植物 |
| 03 草原—林缘生境 | 开花高草草原/草甸向灌丛、林缘与林地过渡，画面能看到连续但不整齐的多种花源、未铺装土壤与遮蔽边界 | 表达一个蜂群需利用多类相邻资源；森林不是纯背景，草地也不是单一作物；可让蜂只占很小比例 | 无树的巨大单作花田；修剪草坪加水泥；把 2026 关键栖息地六州误画成全物种唯一天然生境 |
| 04 旧兽穴巢口 | 林缘或半林地地表，一只工蜂进出有草/落叶遮蔽的废弃小型哺乳动物洞口；镜头只展示巢口而非虚构内部 | 洞口尺度克制、土壤疏松未压实，周围有自然遮蔽；caption 写“常利用废弃兽穴，巢多在地下 0.3—1.2 m，也有例外” | 画出活鼠与蜂共享巢；规则六角巢脾伸出洞外；把单一洞口照片说成巢深实测或典型巢规模 |
| 05 春季柳花上的创巢蜂王 | 19—23 mm 的大蜂王在柳属（*Salix*）花序补充早春花蜜/花粉，背景有仍显稀疏的林缘/林下春景 | T2 以黄色毛为主、通常无锈斑；大体型、黑色头脸毛；说明她出蛰后补能并寻找巢址 | 为名称一致强加锈斑；画成已有大量工蜂伴随；把柳属写成唯一必需食物或固定某日出蛰 |
| 06 晚夏一枝黄花上的雄蜂 | 14—17 mm 雄蜂停在一枝黄花属（*Solidago*）花序，晚夏暖色但仍是自然生境；可突出比工蜂更长的触角 | 雄蜂可有 T2 中央锈斑；后足不画成装满花粉的工蜂花粉筐；caption 连接晚夏雄蜂/新蜂王产生与年度蜂群终点 | 把雄蜂叫“雄蜂王”；让它采集巨大花粉团回巢；写成雄蜂越冬或用单一日期代表全分布区 |

六图形态总检：触角一对、翅两对但后翅可被前翅遮住、足三对、身体分头胸腹三部；不要生成八条腿、多对触角、蝴蝶口器或蜜蜂式细长腹部。封面与鉴别图用工蜂最利于辨识，但替代文本必须写“工蜂”；柳花图应明确“蜂王通常无锈斑”，一枝黄花图明确“雄蜂不承担工蜂式采粉回巢”。六图没有越冬剖面，因此越冬事实留在文字章节，不能让巢口图 caption 暗示整群在原巢过冬。

## 对当前 `species.ts` 字段的逐项审计

| 字段 | 当前内容 | 结论 | 建议 |
| --- | --- | --- | --- |
| `id` / `slug` | `species-bombus-affinis` / `rusty-patched-bumble-bee` | 保留 | 稳定且符合项目约定 |
| `names.zh` | 锈斑熊蜂 | 保留 | 简洁准确 |
| `names.en` | Rusty-patched Bumble Bee | 保留 | 与 COSEWIC 拼法一致；USFWS 无连字符版本不构成分类差异 |
| `aliases` | 锈补丁熊蜂 | 谨慎 | 没有一手分类来源支持为规范中文异名；若不是产品搜索需求，建议删除；若保留须视为站内直译别名 |
| `scientificName` | *Bombus affinis* | 保留 | 接受名稳定；正文可补作者 Cresson, 1863 |
| `taxonomy` | Arthropoda / Insecta / Hymenoptera / Apidae / Bombus | 保留 | 正确；schema 不保存亚属，可在故事中提 *Bombus sensu stricto* |
| `conservation` | `CR`, decreasing, 2014, `A2abce` | **修正** | 改为 `conservation('CR', 'decreasing', 2014, 'A2b')`；2014 是评估日年份，2015-2 是卷期 |
| `distribution.regions` | 北美东部温带区、五大湖 | 扩充 | 加入上中西部和中阿巴拉契亚；文字拆开历史范围与当前核心，不再说“少数东北部地点”即当前主分布 |
| `distribution.countries` | 美国、加拿大 | 保留并加限定 | 加拿大是历史/潜在残存范围，自 2009 年无确认；不能由 countries 推断当前两国均有已知种群 |
| `distribution.range` | 曾广布，现上中西部及少数东北 | **重写** | 写美国当前已知核心在上中西部与中阿巴拉契亚；加拿大最后确认 2009；县级/网格指标另释 |
| `center` | 43, -89 | 可保留 | 作为威斯康星附近地图焦点，不是历史范围几何中心或具体观察点；地图覆盖必须另有范围数据 |
| `habitats[0]` | 温带草地与林缘 | 扩充 | 主生境写成森林—林缘—草甸/湿地/稀树草原镶嵌，强调连续花期、巢洞和越冬土壤 |
| `habitats[1]` | 城市花园与农田边缘 | 限定后保留 | 可提供补充资源，也有硬化、耕作、农药和管理蜂风险；“出现过”不等于所有城市/农地适宜 |
| `measurements.length` | 10—22 mm，工蜂到蜂王 | **修正** | 9—23 mm；note 分列蜂王 19—23、工蜂 9—16、雄蜂 14—17 |
| `diet` | 花蜜、花粉；授粉 | 细化 | 保留 `nectarivore` + schema 近似的 `herbivore`，foods 改“多种开花植物的花蜜与花粉”；写广食性与连续花源 |
| `activity` | 日行、社会群居、季节性蜂群 | 保留并细化 | 加“一年一代、只有已交配新蜂王越冬”；社会性描述只适用于活动季蜂群 |
| `summary` | 腹部带锈斑 | **修正** | 改成“工蜂和雄蜂 T2 常见锈斑；蜂王通常没有”，避免把全物种写成同一花纹 |
| `description` | 病原体、农药、花源、气候共同导致 | 降低因果强度 | 写“衰退原因未完全解决，这些压力持续且可能协同”；加入遗传小种群效应和年度周期 |
| `storySections` | 缺失 | 新增 | 建议六节：蜂级辨识、全季生境、巢、年度周期、授粉证据、衰退与恢复 |
| `keyFacts[0]` | 工蜂和雄蜂通常显锈斑 | 保留并加 T2 | 同时说明蜂王 T2 通常黄，不能以缺斑排除 |
| `keyFacts[1]` | 震动授粉服务番茄 | **替换** | 改为“直接观察到振动蔓越莓花”；番茄若提及必须标为熊蜂类外推 |
| `keyFacts[2]` | 历史分布区缩减约 87% | **加方法或替换** | 只能写 USFWS 县/县等价区 432→55 的空间占用口径；不是面积。正文并列其他指标 |
| `threats` | 病原、农药、花源/巢址、气候 | 扩充 | 加小种群近交/二倍体雄蜂、管理蜂竞争与病原外溢、越冬土壤和季节资源缺口 |
| `conservationActions` | 种花、少农药、保护巢/越冬 | 扩充 | 加全年度生境镶嵌、管理蜂生物安全、适时分区管理、监测遗传/疾病/占域、谨慎重引入 |
| `metrics.adultLengthCm` | [1, 2.2] | **修正** | `[0.9, 2.3]`，note 无法进入 metrics，靠 measurements 解释蜂级 |
| `metrics.lifespanYears` | [0.08, 1] | **删除** | 混合工蜂/雄蜂数周与蜂王约一年，不适合作物种统一寿命范围 |
| `featuredStats.range-loss` | 约 87% | **重写** | 改标签与 note 为县级空间占用口径，或移到正文的指标表 |
| `featuredStats.length` | 10—22 mm | **修正** | 9—23 mm，并注明三蜂级分列 |
| `featuredStats.cycle` | 一年一代 | 保留并加限定 | note 写“只有已交配新蜂王越冬；蜂群翌春重建” |
| `media` | 单一 alt，无本地图 | 待实现 | 使用六图方案；每张 alt 指明蜂级与真正可见特征 |
| `sources` | IUCN/GBIF 搜索页 + USFWS 概览页 | **替换** | 使用下文具名直链数组；搜索结果页无法支撑尺寸、指标方法、巢、授粉与最新关键栖息地 |

## 推荐 `SpeciesSource[]`

`sourcesFor('Bombus affinis')` 只给 IUCN/GBIF 搜索结果页，不足以让读者追溯 A2b、蜂级尺寸、范围指标、巢址、花源、遗传和最新管理文件。建议使用具名来源常量；`accessedAt` 是访问日，不是评估或发表年份。

```ts
const RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE = '2026-08-17' as const;

const RUSTY_PATCHED_BUMBLE_BEE_SOURCES = [
  {
    title: 'Hatfield et al. — Bombus affinis, IUCN Red List 2015-2',
    url: 'https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T44937399A46440196.en',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'ITIS — Bombus affinis (TSN 714782)',
    url: 'https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=714782',
    kind: 'taxonomy',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'COSEWIC 2022 — Rusty-patched Bumble Bee assessment and status report',
    url: 'https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Environment and Climate Change Canada 2020 — Recovery Strategy for Bombus affinis',
    url: 'https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/recovery-strategies/rusty-patched-bumble-bee-2020.html?wbdisable=true',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'USFWS — Rusty Patched Bumble Bee current species profile',
    url: 'https://www.fws.gov/species/rusty-patched-bumble-bee-bombus-affinis',
    kind: 'general',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'USFWS 2017 — Endangered Species Status for Rusty Patched Bumble Bee',
    url: 'https://www.govinfo.gov/content/pkg/FR-2017-01-11/pdf/2017-00195.pdf',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'USFWS 2021 — Recovery Plan for the Rusty Patched Bumble Bee',
    url: 'https://www.fws.gov/media/recovery-plan-rusty-patched-bumble-bee',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'USFWS 2022 — Rusty Patched Bumble Bee 5-Year Review',
    url: 'https://ecos.fws.gov/docs/tess/species_nonpublish/3911.pdf',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'USFWS 2026 — Final Critical Habitat Rule for Bombus affinis',
    url: 'https://www.govinfo.gov/content/pkg/FR-2026-06-01/pdf/2026-10846.pdf',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'USFWS 2026 — Voluntary Conservation Measures for Bombus affinis',
    url: 'https://www.fws.gov/media/voluntary-conservation-measures-rusty-patched-bumble-bee-bombus-affinis',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Cameron et al. 2011 — Patterns of widespread decline in North American bumble bees',
    url: 'https://doi.org/10.1073/pnas.1014743108',
    kind: 'distribution',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Colla et al. 2012 — Assessing declines using museum specimens',
    url: 'https://doi.org/10.1007/s10531-012-0383-2',
    kind: 'distribution',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Cameron et al. 2016 — Test of the invasive pathogen hypothesis',
    url: 'https://doi.org/10.1073/pnas.1525266113',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Mola et al. 2024 — Range-wide genetics, population structure and colony abundance',
    url: 'https://doi.org/10.1093/jisesa/ieae041',
    kind: 'conservation',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Boone et al. 2022 — Bombus affinis nest observations',
    url: 'https://doi.org/10.1111/icad.12564',
    kind: 'ecology',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Smith et al. 2025 — Conservation questions from discovered wild Bombus affinis nests',
    url: 'https://doi.org/10.1111/icad.12808',
    kind: 'ecology',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Simanonok et al. 2021 — A century of pollen foraging from museum specimens',
    url: 'https://doi.org/10.1007/s10531-020-02081-8',
    kind: 'ecology',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Wolf et al. 2022 — Floral resources used in the Midwestern United States',
    url: 'https://doi.org/10.3375/22-2',
    kind: 'ecology',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'Hepner et al. 2024 — Central Appalachian forest refuges for Bombus affinis',
    url: 'https://doi.org/10.1016/j.foreco.2024.121751',
    kind: 'distribution',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
  {
    title: 'MacKenzie 1994 — Honey bee and bumble bee foraging on cranberry',
    url: 'https://doi.org/10.1051/apido:19940404',
    kind: 'ecology',
    accessedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

运行时无需把 IUCN 存档附件与 DOI 重复列两次；DOI 是推荐用户可见入口，存档 PDF只用于内部核验完整 assessment。USFWS 当前物种页适合作为资源枢纽，但精确法律面积、恢复标准和五年审查结论仍分别引用正式文件。2026 voluntary measures 是管理建议来源，不能用它证明野外自然史参数。

## 可直接落库的字段建议

以下对象覆盖本次研究后应改的事实字段；`id`、`slug` 和粗粒度地图焦点沿用现值，媒体路径与六张已完成资产一致。焦点坐标和最终构图裁切仍应以静态图验收为准。

```ts
{
  id: 'species-bombus-affinis',
  slug: 'rusty-patched-bumble-bee',
  names: {
    zh: '锈斑熊蜂',
    en: 'Rusty-patched Bumble Bee',
  },
  scientificName: 'Bombus affinis',
  taxonomy: animalTaxonomy(
    taxon('Arthropoda', '节肢动物门'),
    taxon('Insecta', '昆虫纲'),
    taxon('Hymenoptera', '膜翅目'),
    taxon('Apidae', '蜜蜂科'),
    taxon('Bombus', '熊蜂属'),
  ),
  conservation: conservation('CR', 'decreasing', 2014, 'A2b'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['北美洲'],
    regions: ['北美东部温带区', '五大湖—上中西部', '中阿巴拉契亚山地'],
    countries: ['美国', '加拿大'],
    range:
      '历史上广布北美东部温带区；当前已知核心破碎分布于美国上中西部和中阿巴拉契亚。加拿大最后一次确认记录在 2009 年，之后虽经大规模调查仍未检出，可能只剩未发现的极小残存种群或已在当地消失。',
    center: { lat: 43, lng: -89 },
  },
  habitats: [
    {
      name: '森林—林缘—草甸生境镶嵌',
      realm: 'terrestrial',
      description:
        '一个年度蜂群需在可达范围内获得早春林下和木本花源、夏秋草甸与湿地花源、地下巢穴，以及安全的越冬土壤。',
      isPrimary: true,
    },
    {
      name: '地下兽穴与疏松土壤',
      realm: 'terrestrial',
      description:
        '巢多位于废弃啮齿动物洞、其他哺乳动物洞或有遮蔽的空腔，常在地下约 0.3—1.2 米；已交配新蜂王另在阴凉、排水良好的林地落叶层和松土中越冬。',
    },
    {
      name: '城市花园与农业边缘',
      realm: 'terrestrial',
      description:
        '邻近半自然生境、具有连续花源和可渗透土壤的城市公园、花园与农地边缘可作补充生境，但硬化、耕作、农药和管理蜂会降低其质量。',
    },
  ],
  measurements: {
    length: {
      min: 9,
      max: 23,
      unit: 'mm',
      note: '成虫体长；蜂王 19—23 毫米、工蜂 9—16 毫米、雄蜂 14—17 毫米',
    },
  },
  diet: {
    types: ['nectarivore', 'herbivore'],
    foods: ['多种开花植物的花蜜', '多种开花植物的花粉'],
    description:
      '短舌、广食性访花者；成虫以花蜜补充碳水化合物，并采集富含蛋白质和脂类的花粉供蜂群。它需要从早春至秋季连续、丰富且多样的花源。',
  },
  activity: ['日行性', '一年一代的真社会性蜂群', '只有已交配新蜂王越冬', '春季蜂王独自创巢'],
  tags: ['传粉者', '北美东部', '社会性昆虫', 'IUCN 极危', '美国 ESA 濒危', '地下筑巢'],
  summary:
    '工蜂和雄蜂的黄色第二腹背板中央常带锈褐斑；这个曾遍布北美东部的熊蜂如今主要残存在上中西部和中阿巴拉契亚。',
  description:
    '锈斑熊蜂每年重建蜂群：已交配新蜂王单独越冬，春季出蛰、补能并寻找旧兽穴等巢址；工蜂随后承担访花和育幼，晚夏蜂群产生雄蜂与下一代蜂王。它利用森林、林缘、草甸、湿地及部分城市生境组成的全季资源链。历史急剧衰退的确切原因仍未完全解决；病原体、农药、生境退化、管理蜂、气候压力和小种群近交持续且可能协同作用。',
  storySections: [
    {
      key: 'caste-identification',
      label: '外形与蜂级',
      title: '招牌锈斑，并不长在每一只身上',
      body:
        '工蜂与雄蜂的第二腹背板 T2 中央通常是锈褐色，斑块后方和两侧仍有黄色毛；蜂王的 T2 通常整体为黄。蜂王也更大：19—23 毫米，对比工蜂 9—16 毫米和雄蜂 14—17 毫米。工蜂/雄蜂的锈斑是强提示，但可靠鉴定仍需结合头颊、其余毛色、地点和专家复核。',
    },
    {
      key: 'seasonal-habitat',
      label: '生境',
      title: '它需要的不是一片花田，而是一整年的资源链',
      body:
        '早春蜂王常在林地花和开花木本补能，夏秋工蜂、雄蜂与新蜂王又利用草甸、湿地、稀树草原、林缘和部分花园。花源还必须靠近巢洞与越冬土壤；只在盛夏开花的单一花田，无法覆盖完整蜂群周期。',
    },
    {
      key: 'borrowed-burrow',
      label: '巢与越冬',
      title: '借一座旧兽穴筑巢，换一处安静土层过冬',
      body:
        '巢多藏在废弃啮齿动物洞或其他有遮蔽空腔中，常位于地下约 0.3—1.2 米，也有地表和建筑结构中的例外。冬天留存的不是蜂群，而是单只已交配新蜂王；本种唯一有文件记录的越冬蜂王在林内落叶与松土下几厘米发现，更广的偏好仍主要依据同属研究推断。',
    },
    {
      key: 'annual-colony',
      label: '年度蜂群',
      title: '一位蜂王，从春天重新开始',
      body:
        '创巢蜂王独自产下第一批工蜂；工蜂接手访花、育幼与巢务后，蜂群在夏季扩张。晚夏至初秋出现雄蜂和未交配新蜂王，交配后的新蜂王寻找越冬点；雄蜂、工蜂与旧蜂王在冬前死亡。所谓一年一代指蜂群循环，并不表示每只成虫都活一年。',
    },
    {
      key: 'flowers-and-pollination',
      label: '花源与授粉',
      title: '广食不等于不挑季节',
      body:
        '百年博物馆标本花粉显示它使用近百个植物类群，却没有一种全域统一的必需花。直接野外观察还记录到它振动蔓越莓花取粉；目前没有同等直接的本种番茄授粉效率研究。恢复生境的重点应是当地从早春到秋季连续而多样的花量。',
    },
    {
      key: 'decline-and-recovery',
      label: '衰退与恢复',
      title: '更多目击，不一定代表一个健康种群',
      body:
        '调查增加后，已知观察点有所增加，但多数地点仍只有一两只记录。遗传研究发现高近交和约 15% 雄性二倍体率；病原体、农药、生境与气候压力又可能相互放大。恢复必须同时追踪占域、蜂群产出、遗传、疾病与暴露，而不是只累计照片数量。',
    },
  ],
  keyFacts: [
    '工蜂和雄蜂的 T2 中央通常有被黄色毛包围的锈褐斑；蜂王的 T2 通常整体为黄。',
    '蜂王体长 19—23 毫米、工蜂 9—16 毫米、雄蜂 14—17 毫米。',
    '蜂群一年一代，只有已交配的新蜂王单独越冬，翌春重新创巢。',
    '加拿大自 2009 年后没有确认记录；美国当前最明确的核心在上中西部与中阿巴拉契亚。',
    '野外研究直接观察到它振动蔓越莓花取粉；把番茄写成本种已验证服务目前证据不足。',
    'USFWS 的约 87% 指历史 432 个县/县等价区对比 2000 年以来 55 个的空间占用缩减，不是土地面积。',
  ],
  threats: [
    '病原体及来自管理熊蜂和蜜蜂的传播风险',
    '小种群近交、二倍体雄蜂与区域遗传多样性流失',
    '杀虫剂、杀菌剂、除草剂及其混合与土壤残留暴露',
    '森林—林缘—草甸生境丧失、破碎化与季节花源缺口',
    '巢洞丧失、土壤压实、硬化与不当时机的割草、火烧或翻土',
    '极端热、干旱、洪水、春霜和物候改变等气候压力',
    '管理蜂造成的花源竞争与病原外溢',
  ],
  conservationActions: [
    '保护并连接森林、林缘、草甸、湿地和城市半自然斑块，提供早春至秋季连续本地花源',
    '保留废弃兽穴、既有空腔、落叶层和疏松未压实的巢址与越冬土壤',
    '采用综合虫害管理，减少花期施药、系统性农药、混合暴露与漂移径流',
    '加强商业熊蜂防逃逸、管理蜂病原筛查，并谨慎控制核心生境附近蜂箱密度',
    '以分区轮替和适当季节安排割草、火烧、放牧、林业及道路维护',
    '联合监测占域、蜂群产出、遗传、病原体和农药暴露，并在风险评估后才开展增殖或重引入',
  ],
  metrics: {
    adultLengthCm: [0.9, 2.3],
  },
  featuredStats: [
    {
      key: 'caste-length',
      label: '成虫体长',
      value: '9—23',
      unit: '毫米',
      note: '蜂王 19—23、工蜂 9—16、雄蜂 14—17 毫米',
    },
    {
      key: 'county-occupancy-loss',
      label: 'USFWS 县级空间占用缩减',
      value: '约 87',
      unit: '%',
      note: '历史 432 个县/县等价区，对比 2000 年以来 55 个；不是土地面积',
    },
    {
      key: 'colony-cycle',
      label: '蜂群周期',
      value: '一年一代',
      note: '只有已交配新蜂王越冬，翌春重新创巢',
    },
    {
      key: 'critical-habitat',
      label: '美国 2026 关键栖息地',
      value: '621,172',
      unit: '公顷',
      note: '六州 14 单元的 ESA 法律指定范围；不是当前总分布或保护区面积',
    },
  ],
  media: {
    image: './images/species/rusty-patched-bumble-bee/01-wild-bergamot-worker-portrait.webp',
    alt: '一只锈斑熊蜂工蜂停在淡紫色野蜂香草花序上，黄色第二腹背板中央可见局部锈褐斑',
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/rusty-patched-bumble-bee/02-diagnostic-rusty-patch.webp',
        alt: '一只锈斑熊蜂工蜂停在白色 Culver’s root 花穗上，背侧可见黄色 T1 和被黄色包围的 T2 锈褐斑',
        title: '锈斑只在 T2 中央',
        caption: '工蜂和雄蜂的锈褐斑是强辨识提示，但照片鉴定仍需结合头颊、其他毛色、地点和专家复核。',
      },
      {
        image: './images/species/rusty-patched-bumble-bee/03-prairie-woodland-mosaic.webp',
        alt: '开花草原、橡树稀树草原、林缘和湿草甸相连，一只很小的锈斑熊蜂工蜂停在前景花上',
        title: '一整年的生境链',
        caption: '森林早春花、草甸与湿地夏秋花、林缘巢洞和越冬土壤需要在可达景观内彼此连接。',
      },
      {
        image: './images/species/rusty-patched-bumble-bee/04-underground-nest-entrance.webp',
        alt: '一只携带花粉的锈斑熊蜂工蜂停在林缘疏松土壤中的废弃小型哺乳动物洞口外',
        title: '借来的地下入口',
        caption: '本种常利用废弃兽穴和其他空腔筑巢；画面只展示巢口，不虚构地下深度、内部结构或蜂群大小。',
      },
      {
        image: './images/species/rusty-patched-bumble-bee/05-spring-foundress-queen.webp',
        alt: '一只体型较大的锈斑熊蜂创巢蜂王在春季柳花上补能，T1 与 T2 均呈黄色而没有锈斑',
        title: '没有锈斑的创巢蜂王',
        caption: '蜂王出蛰后依靠早春花源恢复能量并寻找巢址；她的 T2 通常整体为黄，不能因缺少锈斑而排除本种。',
      },
      {
        image: './images/species/rusty-patched-bumble-bee/06-late-summer-male.webp',
        alt: '一只触角较长、后足没有花粉筐的锈斑熊蜂雄蜂停在晚夏一枝黄花花序上',
        title: '年度蜂群末期的雄蜂',
        caption: '雄蜂在晚夏至初秋出现并参与交配，不承担工蜂式采粉回巢，也不会与新蜂王一起越冬。',
      },
    ],
  },
  sources: RUSTY_PATCHED_BUMBLE_BEE_SOURCES,
  featured: true,
  publishedAt: CONTENT_DATE,
  updatedAt: RUSTY_PATCHED_BUMBLE_BEE_SOURCE_DATE,
}
```

如果项目仍需把“锈补丁熊蜂”作为搜索词，可在 `aliases` 留下并在编辑注释中标为站内直译；它不应出现在“规范异名”文案。`center: { lat: 43, lng: -89 }` 只是把地图打开在当前上中西部核心附近，不是分布几何中心、关键栖息地坐标或可公开寻找巢的位置。

## 来源清单与用途边界

以下来源均于 **2026-08-17** 访问。表中“边界”用于防止把一个来源的局地或管理口径扩写成全物种事实。

| 主题 | 一手/权威来源 | 支撑内容与边界 |
| --- | --- | --- |
| 全球状态 | [IUCN Red List 2015-2](https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T44937399A46440196.en) | assessment date 2014-12-29、CR、下降、A2b 与 IUCN 自身指标；卷期 2015-2 不等于 assessedYear |
| 分类 | [ITIS TSN 714782](https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=714782)；[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html) | 接受名、作者、上级分类、无亚种、蜂级尺寸和辨识；中文名不是这些英文来源制定的规范名 |
| 美国法律状态 | [USFWS 2017 最终规则](https://www.govinfo.gov/content/pkg/FR-2017-01-11/pdf/2017-00195.pdf) | ESA Endangered、历史/当时分布数据库、县级空间范围和操作性种群指标；不是全球 IUCN 状态 |
| 美国当前总入口 | [USFWS current species profile](https://www.fws.gov/species/rusty-patched-bumble-bee-bombus-affinis) | 截至访问日的官方资源入口、现行压力概述和形态/生命史摘要；精确数字回到正式文件 |
| 美国恢复目标 | [USFWS 2021 Recovery Plan](https://www.fws.gov/media/recovery-plan-rusty-patched-bumble-bee) | 五个恢复单元、健康种群目标、占域趋势和簇要求；目标不是当前数量，2061 等时间估算不是承诺 |
| 美国五年审查 | [USFWS 2022 5-Year Review](https://ecos.fws.gov/docs/tess/species_nonpublish/3911.pdf) | 记录至 2021、454 网格、年度 observations、零“已知健康”口径、威胁与保护地比例；观察数不是丰度估计 |
| 美国关键栖息地 | [USFWS 2026 Final Rule](https://www.govinfo.gov/content/pkg/FR-2026-06-01/pdf/2026-10846.pdf) | 621,172 公顷、14 单元、33 县、六州、巢/越冬/花源要素与法律效力；不是现存总范围或保护区 |
| 美国最新自愿措施 | [USFWS 2026 Voluntary Conservation Measures](https://www.fws.gov/media/voluntary-conservation-measures-rusty-patched-bumble-bee-bombus-affinis) | 2026-06-30 管理窗口、IPM、火烧/割草/林业/管理蜂建议；是自愿风险降低基准，不是生物学安全阈值 |
| 加拿大状态与调查 | [COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/rusty-patched-bumble-bee-2022.html) | Endangered、2009 后无记录、调查努力、历史 EOO、可靠加拿大范围和国家威胁；<250 是推断而非普查 |
| 加拿大恢复 | [ECCC 2020 Recovery Strategy](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/recovery-strategies/rusty-patched-bumble-bee-2020.html?wbdisable=true) | SARA 恢复目标、潜在/部分关键生境与加拿大行动；旧点和策略边界不证明当前占据 |
| 美国历史衰退 | [Cameron et al. 2011](https://doi.org/10.1073/pnas.1014743108) | 2007—2009 调查相对历史收藏的 87% 调查范围收缩和 >95% 相对丰度下降；本种当代样本仅 22 只 |
| 东北北美持续占据 | [Colla et al. 2012](https://doi.org/10.1007/s10531-012-0383-2) | 两期共同取样 50 千米网格的 <30% persistence；不同于 EOO、县级范围或土地面积 |
| 病原体历史假说 | [Cameron et al. 2016](https://doi.org/10.1073/pnas.1525266113) | *V. bombi* 历史与菌株证据，限制简单“新外来株单独致衰”叙事；不否定当代病原外溢风险 |
| 全域遗传 | [Mola et al. 2024](https://doi.org/10.1093/jisesa/ieae041) | 东西结构、距离隔离、高近交、约 15% 雄性二倍体率、阿巴拉契亚独特性与低蜂群数；不提供全球个体总数 |
| 巢址个案 | [Boone et al. 2022](https://doi.org/10.1111/icad.12564) | 2020 年三个巢、城市/兽穴/半林地地点、251—1,341 量级和寄生物；少数机会样本不是类型比例 |
| 巢的年度行为 | [Smith et al. 2025](https://doi.org/10.1111/icad.12808) | 2020—2021 巢、啮齿动物关联、雄蜂/新蜂王出现与巢衰亡；具体日期不可全域固定化 |
| 百年花粉 | [Simanonok et al. 2021](https://doi.org/10.1007/s10531-020-02081-8) | 七州 1913—2013 标本花粉、多样与区域差异、无检测到长期组成变化；不能推出花量或生境不受限 |
| 中西部照片花源 | [Wolf et al. 2022](https://doi.org/10.3375/22-2) | 803 张照片、87 个植物属及季节花源，包括 *Veronicastrum*、*Monarda*、*Solidago*；照片频次不是营养适宜度实验 |
| 中阿巴拉契亚 | [Hepner et al. 2024](https://doi.org/10.1016/j.foreco.2024.121751) | 九年、>2,100 调查、274 记录的山地森林关联；只代表中阿巴拉契亚避难区，不能全域外推 |
| 蔓越莓振动 | [MacKenzie 1994](https://doi.org/10.1051/apido:19940404) | 直接观察 *B. affinis* 振动蔓越莓花；主要效率分析合并熊蜂，不能生成本种专属增产率，也不证明番茄效率 |

## 仍需保留的不确定性与更新触发点

- 没有可靠的全域个体总数或蜂群总数。观察次数、占据网格、县级记录和关键栖息地面积都不能互换为丰度估计。
- 加拿大 2009 年后的密集调查没有确认记录，但现有证据仍无法在全国尺度证明绝灭；档案应保留“极小残存种群或当地消失”的并列表述。
- 病原体、农药、生境退化、管理蜂、气候压力和小种群遗传问题可能共同作用；现有证据不支持把历史衰退归因于单一因素。
- 本种越冬微生境只有一只野外蜂王的直接记录。更广泛的林地、落叶层和松土偏好仍含同属物种外推，不能写成精确深度或唯一生境。
- 野巢样本仍少，地下约 0.3—1.2 米是现有记录的常见范围，不是每个巢的固定深度；地表及建筑空腔也有例外。
- 工蜂和雄蜂的锈斑强度会变化，单张照片也可能受视角、磨损和光线影响；档案应继续把它写成强提示而非单一鉴定规则。
- 后续若出现新的 IUCN 重评、USFWS 五年审查、加拿大确认记录或全域遗传与蜂群调查，应优先更新 `conservation`、分布叙述和四项重点数字，并保留新旧指标的方法差异。
