# 墨西哥钝口螈（*Ambystoma mexicanum*）完整档案研究

- 检索与核验日期：2026-08-17
- 使用范围：`src/data/species.ts` 的墨西哥钝口螈条目、详情页长文、数字卡与六张图片验收
- 证据标准：分类采用 AMNH *Amphibian Species of the World*；全球状态采用 IUCN SSC Amphibian Specialist Group；墨西哥国家状态采用 NOM-059；生态、行为、繁殖与再生只采用同行评审原始研究或能追溯到原始研究的 UNAM / 墨西哥政府资料。宠物护理页、商业繁殖页、媒体二次改写和无样本方法的百科数字不进入推荐字段。
- 年份口径：IUCN 页面显示本次评估日期为 **2019-10-23**，正式引文发表于 *The IUCN Red List of Threatened Species 2020-3*。仓库 `assessedYear` 应填评估年份 **2019**，而不是发布日期 2020。
- 敏感信息处理：本种野外数量极低。产品只使用霍奇米尔科湖残存运河—湿地系统这一粗粒度范围和地图视口，不复制论文中的潜在适生点、调查沟渠、近期 eDNA 检出点、实验释放地或 chinampa-refugia 的位置。

## 结论摘要

### 当前分类、接受名与中文名

当前接受名是 ***Ambystoma mexicanum* (Shaw and Nodder, 1798)**，分类为动物界—脊索动物门—两栖纲—有尾目—钝口螈科—钝口螈属；原始组合是 *Gyrinus mexicanus*。英文接受俗名为 **Axolotl**。仓库中文主名“墨西哥钝口螈”和别名“美西螈”可保留；“六角恐龙”是中文宠物市场俗称，不是分类学名称，若保留必须只放 `aliases`，不能进入正式名称或形态描述。[AMNH Amphibian Species of the World](https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Ambystomatidae/Ambystoma/Ambystoma-mexicanum)

“axolotl / ajolote”在大众语境中有时泛指墨西哥多种钝口螈，但本条目只对应 *A. mexicanum*。不能用其他墨西哥湖泊或山地的“ajolote”照片、分布点和保护状态补齐本种资料；图片也不能仅凭三对外鳃就认定物种。[AMNH Amphibian Species of the World](https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Ambystomatidae/Ambystoma/Ambystoma-mexicanum)

### IUCN 全球状态、标准、年份与墨西哥国家状态

截至本次核验，最新全球评估为 **极危 Critically Endangered（CR）**、种群趋势 **下降**，标准是 **A2abce**。IUCN 的理由是过去三个世代（评估采用 16.5 年）观察和推断的种群下降超过 80%，证据涉及直接观察、适当丰度指数、生境范围或质量下降，以及污染和引入种的影响。`A2` 还表示造成下降的原因可能尚未停止、未被完全理解或不可逆；不能把标准改写成仓库现有的 `A2ace; B2ab(iii,v)`，也不能把旧评估中的 B2 子标准混进最新评估。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T1095A53947343.en)

年份必须拆开：评估日期是 **2019-10-23**，正式引文为 IUCN SSC Amphibian Specialist Group（2020）、Red List 2020-3。因此建议写 `conservation('CR', 'decreasing', 2019, 'A2abce')`。不能把 2020 当 `assessedYear`，也不能继续沿用早期评估标准。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T1095A53947343.en)

IUCN 评估给出的成熟个体数量是 **50—1,000** 的宽区间，并列出三个“locations”和 467 平方千米 EOO。这些都是评估尺度的范围或几何量，不是一次普查得出的精确总数：50 不是“世界只剩 50 只”，1,000 不是已确认下限或上限，EOO 也不是连续占据面积。产品不建议把这组三个不易解释的数字做醒目卡。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T1095A53947343.en)

墨西哥 NOM-059-SEMARNAT-2010 把 *A. mexicanum* 列为墨西哥特有、类别 **P（En peligro de extinción，濒临灭绝）**。这是国家法律名录，与 IUCN 全球 CR 的尺度和用途不同；不能翻译成 `Pr`“特别保护”或 `A`“受威胁”，也不能用国家类别覆盖仓库的 IUCN 字段。[NOM-059-SEMARNAT-2010 official PDF](https://transparencia.profepa.gob.mx/Transparencia/TransparenciaJuridico/LEYES/2025/NOM-059-SEMARNAT-2010.pdf)

### 历史分布、当前范围与地图敏感边界

本种为**墨西哥特有种**。AMNH 将历史范围概括为墨西哥谷地的霍奇米尔科湖与查尔科湖，并推测曾通过湖系与特斯科科、松潘戈相连；其当前分类数据库只确认霍奇米尔科湖南部残存水域。产品最稳妥的天然分布表述是：“历史分布于墨西哥谷地湖群，现存原生保护核心为墨西哥城南部霍奇米尔科残存运河与湿地系统。”[AMNH Amphibian Species of the World](https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Ambystomatidae/Ambystoma/Ambystoma-mexicanum)

IUCN 2019 评估的范围处理还纳入查尔科和查普尔特佩克湖；其中查普尔特佩克是人工、硬质岸线水体，记录涉及人为释放个体。它与 AMNH “当前只确认霍奇米尔科南部残存水域”的说法并非简单互相推翻，而是对“原生范围、评估记录和人为释放地点”采用不同边界。产品不能把人为释放地包装成新的天然种群，也不应据此把 `endemicTo` 扩写成整个墨西哥城。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T1095A53947343.en) [AMNH Amphibian Species of the World](https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Ambystomatidae/Ambystoma/Ambystoma-mexicanum)

2009 年生态位模型在霍奇米尔科研究区预测出 11 个潜在适生点、归入 6 个缩小且彼此隔离的区域，实地调查却只捕获 1 只。模型点是**潜在栖息地**，不是 11 个已占据种群，也不是可公开的观赏路线。`center: { lat: 19.27, lng: -99.1 }` 只能作为霍奇米尔科区域地图视口，不是个体、繁殖点、庇护水道或保护设施坐标。[Contreras et al. 2009](https://doi.org/10.1016/j.biocon.2009.07.008)

### 生境、水温、水质与“适宜阈值”的边界

IUCN 将其生境描述为较深的湖泊及天然或人工运河，水中有丰富水生植物；这些植物既提供结构，也用于附卵。本种终生水栖且对水质变化敏感。霍奇米尔科不是一只清澈、封闭的高山湖，而是由运河、小湖、季节性湿地、chinampa 农业边缘和城市来水共同组成的高度异质、受人管理的浅水系统。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T1095A53947343.en) [Zambrano et al. 2009](https://doi.org/10.1007/s00267-008-9216-1)

覆盖四个区域、干湿季与两年的水质调查得到系统平均水深 1.1 米、温度 17°C、溶解氧 5.0 mg/L、浊度 45.7 NTU，并显示硝酸盐、铵盐和磷酸盐浓度高且同一运河内也显著异质。这里描述的是一个**已经严重退化的生态系统**，均值不是 *A. mexicanum* 的生理最适值，更不是可复制的饲养配方。[Zambrano et al. 2009](https://doi.org/10.1007/s00267-008-9216-1)

Shaffer 的原生地记录给出约 **16—20°C、pH 7.4—8.2**；2023 年系统综述指出，其他常见水质参数大多来自人类照护经验，缺少野外物种级量化证据。因此这两组只能写成历史野外观察范围，不能写成“安全边界”“致死阈值”或“理想饲养范围”。[Shaffer 1989](https://ambystoma.uky.edu/genetic-stock-center/newsletters/Older_archive/Issues-13-23/archive/issue18/05-11shaffer.pdf) [García-Dávila & Aguilar-Sánchez 2023](https://herpetologia.fciencias.unam.mx/index.php/revista/article/download/755/510/10547)

2025 年遥测研究中的 18 只均为圈养繁殖后实验释放个体，在霍奇米尔科修复沟渠和另一处人工湿地各追踪约 40 天；两地运动活动分别在约 16—17°C 与 15.5—16.5°C 较高。它支持短期移动与温度的关联，不支持把窄区间称为全物种热偏好、繁殖最适或生存阈值。[Ramos et al. 2025](https://doi.org/10.1371/journal.pone.0314257)

产品不应填野外氨、亚硝酸盐、硝酸盐或溶氧“耐受上限”。也不能把宠物水族护理参数写进野外生态；反过来，不能拿受污染运河的均值建议水族饲养。

### 野生型外观、粉白圈养型与影像识别

野外型通常是深绿褐、深褐至近黑的斑驳底色，可带较浅或金色细斑；头宽而扁，眼小且无活动眼睑，头后有三对分枝、羽毛状外鳃，身体侧扁的尾部带连续鳍褶，四肢相对短。墨西哥政府和 UNAM 的当前资料都强调野生型是深绿褐或棕色，而不是大众最熟悉的桃粉色。[SEMARNAT 2018](https://www.gob.mx/semarnat/articulos/ajolote-mexicano-criatura-super-dotada) [CONANP 2025](https://www.gob.mx/conanp/articulos/axolote-o-el-oscuro-dios-del-cieno) [UNAM 2026](https://www.dgcs.unam.mx/boletin/bdboletin/2026_387.html)

实验室常见的粉白型是 **white / leucistic（白色或白化样突变型，通常黑眼）**：2017 年遗传研究把 `d/d` 白色表型关联到色素细胞形态发生与分化缺陷。它确实可追溯到 1863 年从霍奇米尔科带往巴黎的创始群体后代，因此不能绝对写“自然界从未出现过”；但它在圈养中被长期选择和扩增，不能作为野外典型形象。[Woodcock et al. 2017](https://doi.org/10.1038/s41598-017-00059-1)

白色/leucistic 与 albino 不是同义词：albino 缺少黑色素，实验室 axolotl 的经典 albino 等位基因还涉及虎纹钝口螈 DNA 渗入；粉白、黑眼的 white 型不应画成红眼 albino。圈养种群常含研究品系、色型突变与历史基因渗入，外观不能证明它适合保育放归，也不能仅凭深色就认定是纯野生谱系。[Woodcock et al. 2017](https://doi.org/10.1038/s41598-017-00059-1)

### 幼态延续、性成熟与多通道呼吸

本种是典型**幼态延续（paedomorphic）**钝口螈：它能达到性成熟，同时保留外鳃、尾鳍等水生幼体特征，通常不完成自然变态并终生水栖。“性成熟的成体仍保留幼体形态”是正确说法；“永远长不大”“一直是宝宝”“没有成年期”都错误。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T1095A53947343.en)

实验中可用甲状腺激素，或甲状腺激素与皮质激素联用，诱发解剖和生理变态。这证明发育通路可被实验启动，不代表野外个体通常会变成陆栖蝾螈，更不能把人工诱导变态写成宠物建议或保护手段。[Galton 1992](https://doi.org/10.1016/0016-6480(92)90172-G) [Kühn et al. 2004](https://doi.org/10.1016/j.ygcen.2004.03.005)

三对外鳃是最醒目的呼吸结构，却不是唯一通道。低氧实验显示它会同时增加鳃通气与肺通气；解剖和生理研究还支持肺、皮肤与口咽表面的气体交换。因此可以写“以外鳃为显著结构，同时能用肺、皮肤和口咽表面辅助交换气体”，不能写“只靠鳃呼吸”，也不能因为它有肺就把它画成常在陆地生活。[McKenzie & Taylor 1996](https://doi.org/10.1016/S0034-5687(96)00080-1) [Jensen et al. 2021](https://doi.org/10.1002/dvdy.315)

### 野外食性、吸入式捕食与样本限制

霍奇米尔科食物网研究对 2002—2003 年捕获的少量野生个体进行胃含物分析；正文方法与表格对样本数分别出现 11 和 12 的内部不一致。检出的类别包括摇蚊等水生昆虫、其他无脊椎动物、小型甲壳类、浮游动物和鱼。植物、藻类或颗粒有机物也可能随吸入或来自猎物消化道，不能据此把本种改写成稳定杂食者。产品只列大类，不复制百分比，也不宣称菜单已经穷尽。[Zambrano et al. 2010](https://doi.org/10.1007/s10530-010-9697-8)

捕食机制可确定为**水下吸入式摄食**：快速张口并压低舌骨扩大口腔，水流把猎物带入口内，再从后方鳃裂排出。2025 年运动学研究确认幼体、亚成体和成体都使用这一机制。画面可表现猎物被短距离水流吸入口中，不能画成用外鳃卷食、用舌头远距离弹射，或像鳄鱼一样撕咬。[Shaffer & Lauder 1985](https://doi.org/10.1002/jmor.1051830304) [Toussaint-Lardé et al. 2025](https://doi.org/10.1242/bio.061860)

现有选用的一手资料不足以支持“严格夜行”“固定伏击点”或“总是在水底一动不动”。短期微生境实验支持它会选择有植被的环境，但样本仅 16 只、观察 72 小时，不能扩大成全天活动规律。[Ayala et al. 2019](https://doi.org/10.1007/s10750-018-3792-8)

### 交配、受精与附着在水草上的卵

高可信、可复现的繁殖细节主要来自圈养实验协议，而非大样本野外观察。雄体把胶质精包（spermatophore）放在水底，雌体用泄殖腔拾取，属于**体内受精**；随后雌体把胶质卵逐枚或分散地附着到水生植物、叶片和其他水下结构。IUCN 也明确指出水生植物对附卵重要。[Khattak et al. 2014](https://doi.org/10.1038/nprot.2014.040) [IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T1095A53947343.en)

影像不能画蛙类泡沫巢、岸上卵、紧密的一大团蛙卵或亲体守卵。常见“一次 100—1,000 枚”等数字主要来自圈养或机构科普，不能当野外典型窝卵数做数字卡；若正文必须提及，应明确为“圈养记录可达数百枚，野外典型值未知”。IUCN 给出的约 1.5 年性成熟和约 10 年寿命也以圈养信息为主，不宜直接填成野外生命史范围。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T1095A53947343.en)

### 再生能力：能写到哪里，必须停在哪里

墨西哥钝口螈能在实验条件下再生完整四肢及尾部相关组织，这是可靠核心事实；但“无限、每次完美、所有器官都能完全再生、绝不留疤”均超出证据。连续在同一平面重复截肢时，再生成功率逐次下降：第五次挑战后只有约 25% 的实验肢体长到有指阶段，失败处可见大量胶原沉积。这一研究使用幼年、leucistic 实验个体，不能转成野外伤后成功率。[Bryant et al. 2017](https://doi.org/10.1038/s41536-017-0034-z)

对 55 只幼体的组织学比较发现，再生前肢可出现多种骨骼与指异常，自然同类咬伤后的异常比标准实验截肢更频繁、更严重。这直接反驳“再生肢总是原样复制”的大众叙事。[Bothe et al. 2021](https://doi.org/10.1002/jez.b.22950)

心脏证据应写成“**部分心室损伤**可发生结构和功能恢复”：实验切除约一小部分心室后，90 天时收缩指标接近对照，并观察到心肌细胞增殖。它不支持“整颗心被取走也能长回”。[Cano-Martínez et al. 2010](https://www.scielo.org.mx/scielo.php?pid=S1405-99402010000200004&script=sci_abstract&tlng=en)

脑的证据也必须限定：成人端脑 pallium 局部损伤后可产生多类神经元并恢复部分局部功能，但再生组织的架构改变，远距离轴突束和完整回路生理未恢复。应写“部分端脑组织在实验损伤后显示再生”，不能写“整颗大脑、记忆和所有神经连接都能完美长回”。[Amamoto et al. 2016](https://doi.org/10.7554/eLife.13998)

### 种群监测数字：密度、成熟个体、eDNA 与“灭绝”边界

最适合做趋势叙事的是同一区域不同年份的**密度估计**，而不是所谓“剩余只数”。1998 年估计约 **6,000 只/平方千米**；对 2013/2014 年最近一轮公开结果，UNAM 不同页面写 34 或 36，同行评述写低于 35，故产品应统一成 **约 35 只/平方千米**，并在来源说明原始公开口径差异。早期资料还报告 2002—2003 年超过 1,800 次抄网、覆盖 39,173 平方米捕获 42 只，对应约 1,000 只/平方千米。不同年份、团队和调查方法并非完全同质，所以数字必须连同单位和年份展示，不能写成“2014 年全世界只剩约 35 只”。[CITES Animals Committee document](https://cites.org/sites/default/files/eng/com/ac/21/E21-11-2.pdf) [UNAM 2024](https://www.dgcs.unam.mx/boletin/bdboletin/2024_847.html) [UNAM 2026](https://www.dgcs.unam.mx/boletin/bdboletin/2026_387.html) [Voss et al. 2015](https://doi.org/10.1093/biosci/biv153)

2024—2026 年的新一轮 UNAM 普查尚未公布最终丰度：团队已航行 65 条以上、总长超过 19 千米的运河，并报告检测到 axolotl DNA 的痕迹；截至 2026-06-28，结果仍在处理。eDNA 阳性证明水样里有目标遗传物质，不等于个体数、成熟个体数、繁殖成功或健康种群；也不应公开具体阳性沟渠。[UNAM 2025](https://www.dgcs.unam.mx/boletin/bdboletin/2025_865.html) [UNAM 2026](https://www.dgcs.unam.mx/boletin/bdboletin/2026_387.html)

另一项 2020—2021 年 eDNA metabarcoding 研究在 43 个普通水体采样点未检出 *Ambystoma*，只在两个 on-site refuge 中的一个检出；通用标记无法可靠区分近期分化的 *Ambystoma* 物种。阴性不能单独证明野外灭绝，单一 refuge 阳性也不能证明总体恢复。[Maeda-Obregon et al. 2025](https://doi.org/10.1002/edn3.70147)

因此产品不得写“已野外灭绝”“2025 年必然灭绝”“精确剩余 N 只”。数学模型中的灭绝年份是条件预测，不是截止日期；截至当前，最准确表述仍是“极危、持续下降，最新完整密度结果尚待公布”。也绝不能把约 35 只/平方千米乘以运河总面积或 IUCN EOO 来制造总数。

### 威胁、chinampa-refugia 与保护成效边界

主要威胁的证据链稳定：墨西哥城扩张和旅游活动改变水系、缩减并分割生境；生活、工业和农业废水及固体废物降低水质；水量和水文过程改变；引入的罗非鱼和鲤鱼与本种争食并捕食卵或幼体。野生胃含物和稳定同位素研究支持食物网重叠，并在鲤鱼胃中检出 axolotl 卵；它不支持“罗非鱼普遍捕食成年 axolotl”这种更强说法。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T1095A53947343.en) [Zambrano et al. 2010](https://doi.org/10.1007/s10530-010-9697-8)

农药实验可以支持“农业化学物是潜在风险”，但实验浓度和早期胚胎/幼体反应不能直接量化其对霍奇米尔科野外下降的贡献。气候变暖可能加重水温与水文压力，却不是 IUCN 当前评估中被单独量化的主因。IUCN 记录过 Bd 阳性，同时认为本种并不表现为高度易感；不能把壶菌病列成已经证实的主要下降驱动。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T1095A53947343.en)

chinampa-refuge 不是普通水族箱，也不是与湿地完全隔绝的水泥池。其核心是与传统 chinampa 相连的沟渠段或小型水体，通过火山石、植物生物过滤和物理屏障维持水交换，同时阻挡鲤鱼、罗非鱼并改善局地水质；保护还把传统无农药农业、chinampero 生计与原生食物网恢复放在同一系统内。[Valiente et al. 2010](https://doi.org/10.3368/er.28.3.257) [Zambrano et al. 2020](https://doi.org/10.3368/er.38.2.114) [UNAM 2026](https://www.dgcs.unam.mx/boletin/bdboletin/2026_387.html)

首个小型实验 refuge 的四个月评估报告水质改善，12 只标记实验个体仅约 30% 被重捕，重捕者平均增重；样本和时间都很小，只能说明方案可行性，不能宣称“已经恢复野生种群”。2025 年遥测的 18 只圈养繁殖释放个体在约 40 天内表现出存活、觅食和移动，也不能证明繁殖、长期定居或建立自维持种群。[Valiente et al. 2010](https://doi.org/10.3368/er.28.3.257) [Ramos et al. 2025](https://doi.org/10.1371/journal.pone.0314257)

IUCN 明确要求先恢复适宜生境，再讨论再引入，并注意圈养谱系遗传和疾病风险。大量宠物和实验室个体不降低野外 CR 状态；未经遗传、健康和来源评估的放生可能造成新风险。行动顺序应是水质、水文、外来鱼控制和 chinampero 共管在前，经过审慎评估的保育繁殖和再引入作为补充。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T1095A53947343.en)

## 推荐的关键事实

1. 当前接受名是 *Ambystoma mexicanum* (Shaw and Nodder, 1798)，属于有尾目钝口螈科，是墨西哥特有种。
2. 最新 IUCN 评估为 CR、下降趋势，2019 年评估，标准 `A2abce`；正式引文发布于 2020-3。
3. 历史分布于墨西哥谷地湖群；当前天然分布叙事应聚焦霍奇米尔科南部残存运河—湿地系统，不公开具体沟渠或 refuge 点位。
4. 野生型通常深绿褐、深褐至近黑并带斑驳；大众熟悉的粉白、粉鳃、黑眼个体主要是圈养 white/leucistic 型，不代表野外典型体色。
5. 它达到性成熟时仍保留三对羽毛状外鳃和尾鳍等幼体特征；“幼态延续”不等于没有成体。
6. 呼吸不只靠外鳃，也使用肺、皮肤和口咽表面；有肺不等于通常陆栖。
7. 水下捕食以吸入式摄食完成；野外小样本支持水生昆虫、其他无脊椎动物、小型甲壳类、浮游动物和鱼等食物大类。
8. 雄体放置精包，雌体拾取后体内受精，再把胶质卵分散附着在水草或水下结构上；不是蛙类卵团或泡沫巢。
9. 四肢、部分心室和部分端脑等在控制实验中显示再生，但重复损伤、自然咬伤和复杂神经回路都暴露出明显限制。
10. 1998 年约 6,000 只/平方千米与 2013/2014 年约 35 只/平方千米是调查密度，不是全球剩余总数；UNAM 公开稿对后者写 34 或 36，2024—2026 新普查结果仍在处理。
11. 主要威胁是城市化和水系改变、污染、栖息地破碎化以及鲤鱼/罗非鱼等外来鱼的竞争和捕食。
12. chinampa-refugia 用过滤屏障、原生植被和传统农业共管改善局地水体并隔离外来鱼；它是全湿地恢复网络的一部分，不是已经成功的替代野生种群。

## 必须删除或避免的说法

- **不能写**最新 IUCN 标准为 `A2ace; B2ab(iii,v)`；应改为 `A2abce`。
- **不能写**IUCN 在 2020 年完成评估；2020 是发布卷期，评估日期是 2019-10-23。
- **不能写**“野外只剩 35（或 34、36）只”；这些数字的单位是只/平方千米，且来自 2013/2014 调查估计。
- **不能写**“现在精确剩余 50 / 100 / 1,000 只”；IUCN 的 50—1,000 是宽评估区间，不是当前完整普查。
- **不能写**“2025 年已经野外灭绝”；模型年份不是事实，截至 2026 年新普查仍在处理。
- **不能写**eDNA 痕迹等于一只活体、一个繁殖对或健康种群，也不能用阴性样本单独证明灭绝。
- **不能写**或展示 11 个模型适生点、43 个采样点、阳性沟渠、release/refuge 的精细位置。
- **不能写**查普尔特佩克人为释放记录是新的天然分布或自维持原生种群。
- **不能写**粉白色、桃色和鲜红外鳃是野生典型外观；野生主视觉必须用深色斑驳型。
- **不能写**white/leucistic 就是 albino；黑眼粉白型与缺黑色素、常见浅/红眼的 albino 需区分。
- **不能写**只要是深色圈养个体就等同纯野生谱系或适合放归。
- **不能写**“永远是幼崽”“不会成年”；它会达到性成熟，只是不通常完成变态。
- **不能写**野外个体常规上岸变态，或鼓励人为用激素诱导变态。
- **不能写**只靠外鳃呼吸；也不能把浮到水面换气直接诊断成疾病。
- **不能写**16—20°C、pH 7.4—8.2 是物种安全阈值、致死边界或完整饲养指南；它们只是野外记录范围。
- **不能写**受污染霍奇米尔科的平均氮、磷、浊度和溶氧是“理想水质”。
- **不能写**严格夜行、固定伏击或终日静止；当前选用的一手证据不足。
- **不能写**野生食谱的精确百分比；原研究样本很小且样本数记载有内部差异。
- **不能写**只吃蠕虫或只吃鱼，也不能把随吸入出现的植物材料直接解释为稳定植食。
- **不能写**用舌头弹射、外鳃捕捉或像大型掠食者一样撕扯猎物；捕获主机制是吸入。
- **不能写**外部受精、泡沫巢、岸上卵或紧密蛙卵团；实验协议支持精包拾取、体内受精和分散附卵。
- **不能写**100—1,000 枚是野外典型窝卵数；这类数字主要来自圈养资料。
- **不能写**“可无限完美再生”“所有器官”“整颗心”“整颗大脑和记忆”或“每次完全无疤”。
- **不能把**实验室的标准切除结果直接转换为野外咬伤后的成活和再生概率。
- **不能写**罗非鱼普遍捕食成体；证据支持外来鱼竞争，以及鲤鱼对卵的摄食。
- **不能写**壶菌病或气候变化已经被量化为当前主要下降驱动；可列为需监测背景，不能取代已证实威胁。
- **不能写**实验室和宠物数量很多，所以野外不再极危。
- **不能写**chinampa-refuge 是封闭水族箱、普通水泥池或全湿地修复的替代品。
- **不能写**短期存活、增重或一次 eDNA 阳性证明 refuge 已恢复自维持野生种群。
- **不能建议**未经遗传、病原和来源评估的个人放生。
- **不建议保留**现有 60—200 克、10—15 年为野外范围；缺少同等可靠的野外物种级证据。

## 现有 `species.ts` 字段核查

| 字段 | 现有值 | 结论与建议 |
| --- | --- | --- |
| `scientificName` / taxonomy | *A. mexicanum*；Caudata / Ambystomatidae / *Ambystoma* | 正确；可由 AMNH 支撑 |
| `aliases` | 美西螈、六角恐龙 | “美西螈”可保留；“六角恐龙”只作为宠物市场俗称 |
| `conservation` | CR / decreasing / 2019 / `A2ace; B2ab(iii,v)` | 状态、趋势、年份正确；标准必须改为 `A2abce` |
| `distribution.range` | 仅霍奇米尔科 | 主线可保留，但建议加入历史湖群和“当前原生保护核心”措辞，避免与 IUCN 评估记录冲突 |
| `center` | 19.27, -99.10 | 可保留为粗粒度地图视口；明确不是热点或采样点 |
| `habitats` | 凉、水草、水质良好的缓流水体 | 方向正确但过于“理想化”；改成浅湖、天然/人工运河、植被丰富的高度异质湿地，并说明水质敏感 |
| `measurements.length` | 15—30 cm | 墨西哥政府资料可支持概括体长；注明是一般全长范围，不包装成严格野生成体分布 |
| `measurements.weight` | 60—200 g | 删除；未找到同等可靠的野外区间 |
| `diet.foods` | 昆虫幼虫、蠕虫、甲壳类、小鱼 | 大体方向正确；建议按野外小样本改成水生昆虫、其他水生无脊椎、小型甲壳类/浮游动物、鱼，并加样本限制 |
| `diet.description` | 伏在水底、负压吸食 | 保留吸入式摄食，删除无充分证据的固定“伏击” |
| `activity` | 夜行性、终生水栖、伏击捕食 | 只保留终生水栖与吸入式摄食；删除夜行性和伏击标签 |
| `keyFacts` 再生 | 四肢、尾、部分心脏和神经组织，通常不留明显瘢痕 | 加“控制实验、特定损伤”边界；删去泛化的“通常不留疤” |
| `keyFacts` 呼吸 | 外鳃、肺、皮肤 | 基本正确；可补口咽表面，避免主次绝对化 |
| `keyFacts` 体色 | 粉白不代表野外、野生深褐 | 正确，应扩展 white/leucistic 与 albino 区别 |
| `threats` | 污染、城市化、栖息地萎缩、外来鱼、隔离 | 正确；补水文改变、固体废物和竞争/捕卵的证据边界 |
| `conservationActions` | 湿地与浮田修复、外来鱼隔离庇护水道、监测和繁殖 | 方向正确；“浮田”建议改为 chinampa 传统农业，突出水交换、生物过滤和 chinampero 共管 |
| `metrics.adultMassKg` | 0.06—0.2 | 删除 |
| `metrics.lifespanYears` | 10—15 | 删除；IUCN 只支持“圈养约 10 年”，不是野外 10—15 年 |
| `featuredStats` | 天然分布、体长、寿命 | 保留体长时注明口径；寿命卡改为调查密度趋势或三对外鳃；分布卡不写精细点位 |

## 六帧图片选择与验收线索

六帧应保持同一物种解剖：宽扁头、小眼、头后 **三对**分枝外鳃、细长躯干、短肢、侧扁尾与背侧连续鳍褶。最终图集全部采用深色斑驳野生型，避免让脱离文字说明的单张图片把圈养 white/leucistic 型误传为野外典型；两类色型的差别改由正文明确解释。再生能力同样保留在有证据边界的文字叙事中，不用创伤时间线或伤口奇观化画面表达。

| 帧 | 主题与构图 | 必须出现 | 必须拒绝 |
| --- | --- | --- | --- |
| 01 | 野外主视觉：霍奇米尔科水下宽景，个体位于泥底、水草与 chinampa 边缘水道中 | 深绿褐/深褐至近黑斑驳体色；三对外鳃；浅缓水、浑浊感、沉水/挺水植物；动物在画面中不过度巨大 | 粉白主角、热带珊瑚礁、清澈山溪、陆地行走、精确地名牌或坐标 |
| 02 | 野生型识别侧写 | 一只完整深色成体的水下侧面；三对外鳃、短肢、背鳍与完整尾鳍均可辨认，主体位于响应式裁切安全区 | 粉白圈养型、裁断尾部、鱼鳞、无鳍的陆栖蝾螈外形 |
| 03 | chinampa—运河生境尺度 | 水面上下同时展示固定抬高的 chinampa、柳树岸缘、狭窄相连水道、水草与一只尺度克制的深色个体 | 把 chinampa 画成漂浮木筏、热带珊瑚水景、精确地名牌或庇护点坐标 |
| 04 | 吸入式捕食近景 | 张口、口腔/舌骨区域扩张，水中一只小型水生昆虫幼体正被短距离水流带入口中；猎物尺寸可吞咽 | 舌头弹射、外鳃抓食、撕咬大鱼、露出夸张牙齿、血腥猎杀 |
| 05 | 附着卵的水草微距 | 多枚透明胶质卵彼此分散，分别附着在沉水叶片或细茎；成体只在背景经过且不呈守卵姿态 | 蛙类泡沫巢、岸上产卵、紧密巨型卵团、鱼卵串、亲体抱卵或守巢 |
| 06 | chinampa-refuge 庇护水道 | 与外部运河保持水交换的沟渠段；入口有低调的透水滤障、岸上固定 chinampa 作物和本土植被；一只小型深色个体停在庇护侧 | 封闭水族箱、水泥泳池、放生盛典、宣称已恢复种群、可识别的精确入口/标志牌或可复制工程图 |

通用拒收项：外鳃少于或多于三对、鱼鳞、蛙蹼、蜥蜴爪、角、巨齿、鳃位于身体两侧而非头后、尾鳍缺失；拟人化“永久微笑”和玩具质感也会削弱科学识别。外鳃可随个体、血流和环境呈深褐、锈红或粉红，但野生深色型不应统一画成霓虹红羽毛。

## 建议新增的 `AXOLOTL_SOURCES`

以下常量可直接粘贴到 `src/data/species.ts`；`AXOLOTL_SOURCE_DATE` 已建议设为 `2026-08-17`。来源数量刻意覆盖分类、状态、野外生态、形态、生命史、再生和保护，不把 Crossref JSON、宠物护理页或新闻媒体放进用户可见来源。

```ts
const AXOLOTL_SOURCES = [
  {
    title: 'IUCN Red List — Ambystoma mexicanum',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T1095A53947343.en',
    kind: 'conservation',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'AMNH Amphibian Species of the World — Ambystoma mexicanum',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Ambystomatidae/Ambystoma/Ambystoma-mexicanum',
    kind: 'taxonomy',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Mexico NOM-059-SEMARNAT-2010 — protected native species list',
    url: 'https://transparencia.profepa.gob.mx/Transparencia/TransparenciaJuridico/LEYES/2025/NOM-059-SEMARNAT-2010.pdf',
    kind: 'conservation',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Contreras et al. 2009 — Recent decline and potential distribution in Xochimilco',
    url: 'https://doi.org/10.1016/j.biocon.2009.07.008',
    kind: 'distribution',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Zambrano et al. 2009 — Spatial heterogeneity of Xochimilco water quality',
    url: 'https://doi.org/10.1007/s00267-008-9216-1',
    kind: 'ecology',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Zambrano et al. 2010 — Axolotl and introduced-fish food-web overlap',
    url: 'https://doi.org/10.1007/s10530-010-9697-8',
    kind: 'ecology',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Woodcock et al. 2017 — Pigment mutants and introgressed DNA in laboratory axolotls',
    url: 'https://doi.org/10.1038/s41598-017-00059-1',
    kind: 'general',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'SEMARNAT 2018 — Mexican axolotl morphology and natural-history overview',
    url: 'https://www.gob.mx/semarnat/articulos/ajolote-mexicano-criatura-super-dotada',
    kind: 'general',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'McKenzie & Taylor 1996 — Gill and lung ventilation responses',
    url: 'https://doi.org/10.1016/S0034-5687(96)00080-1',
    kind: 'ecology',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Toussaint-Lardé et al. 2025 — Axolotl suction-feeding kinematics',
    url: 'https://doi.org/10.1242/bio.061860',
    kind: 'ecology',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Khattak et al. 2014 — Axolotl breeding and metamorphosis protocol',
    url: 'https://doi.org/10.1038/nprot.2014.040',
    kind: 'ecology',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Bryant et al. 2017 — Regenerative limits after repeated limb amputation',
    url: 'https://doi.org/10.1038/s41536-017-0034-z',
    kind: 'general',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Bothe et al. 2021 — Normal and pathological axolotl limb regeneration',
    url: 'https://doi.org/10.1002/jez.b.22950',
    kind: 'general',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Cano-Martínez et al. 2010 — Functional and structural regeneration after partial ventricular amputation',
    url: 'https://www.scielo.org.mx/pdf/acm/v80n2/v80n2a4.pdf',
    kind: 'general',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Amamoto et al. 2016 — Adult axolotl pallium regeneration',
    url: 'https://doi.org/10.7554/eLife.13998',
    kind: 'general',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Valiente et al. 2010 — Creating refuges for the axolotl',
    url: 'https://doi.org/10.3368/er.28.3.257',
    kind: 'conservation',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Ramos et al. 2025 — Movements of captive-bred axolotls in restored wetlands',
    url: 'https://doi.org/10.1371/journal.pone.0314257',
    kind: 'conservation',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Maeda-Obregon et al. 2025 — Xochimilco fish and amphibian eDNA',
    url: 'https://doi.org/10.1002/edn3.70147',
    kind: 'conservation',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'UNAM 2026 — Etiqueta Chinampera and latest census status',
    url: 'https://www.dgcs.unam.mx/boletin/bdboletin/2026_387.html',
    kind: 'conservation',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

若希望缩短前端来源列表，优先保留 IUCN、AMNH、Contreras 2009、Zambrano 2009/2010、Woodcock 2017、Toussaint-Lardé 2025、Bryant 2017、Valiente 2010、Ramos 2025、Maeda-Obregon 2025 与 UNAM 2026。NOM-059 用于详情页补充墨西哥国家状态，不替代 IUCN。

## 可直接用于 `species.ts` 的字段建议

下列对象刻意删除不可靠的体重和寿命范围，并把再生、分布和监测数字的边界写进正文。图片路径需以最终资产命名为准。

```ts
{
  id: 'species-ambystoma-mexicanum',
  slug: 'axolotl',
  names: {
    zh: '墨西哥钝口螈',
    en: 'Axolotl',
    aliases: ['美西螈', '六角恐龙'],
  },
  scientificName: 'Ambystoma mexicanum',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Amphibia', '两栖纲'),
    taxon('Caudata', '有尾目'),
    taxon('Ambystomatidae', '钝口螈科'),
    taxon('Ambystoma', '钝口螈属'),
  ),
  conservation: conservation('CR', 'decreasing', 2019, 'A2abce'),
  distribution: {
    realms: ['freshwater'],
    continents: ['北美洲'],
    regions: ['墨西哥谷地', '霍奇米尔科残存运河—湿地系统'],
    countries: ['墨西哥'],
    endemicTo: ['墨西哥谷地湖系；当前原生保护核心为霍奇米尔科南部残存水域'],
    range:
      '历史分布于墨西哥谷地的霍奇米尔科、查尔科及相连湖系；当前天然分布叙事聚焦墨西哥城南部霍奇米尔科残存运河与湿地。地图不公开调查、eDNA、繁殖或 refuge 点位。',
    center: { lat: 19.27, lng: -99.1 },
  },
  habitats: [
    {
      name: '霍奇米尔科湖残存运河与湿地',
      realm: 'freshwater',
      description:
        '终生生活在高原浅湖、天然和人工运河构成的异质淡水系统，利用泥底、水生植物和 chinampa 边缘结构；水生植物也为卵提供附着面。',
      isPrimary: true,
    },
    {
      name: 'chinampa-refuge 修复水道',
      realm: 'freshwater',
      description:
        '与传统 chinampa 相连、保持水交换的局地庇护水道，通过物理与植物过滤屏障阻挡外来鱼并改善水质，是恢复网络而非封闭替代栖息地。',
    },
  ],
  measurements: {
    length: {
      min: 15,
      max: 30,
      unit: 'cm',
      note: '墨西哥政府资料采用的一般全长范围；不是严格的野生成体统计分布',
    },
  },
  diet: {
    types: ['carnivore'],
    foods: ['水生昆虫及幼虫', '其他水生无脊椎动物', '小型甲壳类与浮游动物', '鱼'],
    description:
      '快速张口并压低舌骨，以进入口腔的水流吸入猎物。野外胃含物研究样本很小，食物大类不应转成固定比例或穷尽菜单。',
  },
  activity: ['终生水栖', '吸入式摄食', '利用水生植物与水底结构'],
  tags: ['墨西哥特有种', 'IUCN 极危', '幼态延续', '野生深色型', '再生研究模式动物', 'chinampa-refuge'],
  summary: '性成熟后仍保留三对外鳃、现存原生保护核心局限于霍奇米尔科残存湿地的极危水栖钝口螈。',
  description:
    '野生墨西哥钝口螈通常是深绿褐至近黑的斑驳色，而非圈养中常见的粉白型。它终生水栖，性成熟时仍保留三对外鳃和尾鳍，并以快速扩张口腔产生的水流吸入小型猎物。实验显示它能再生四肢以及特定损伤后的部分心脏和端脑组织，但重复或自然创伤会暴露明显限制。城市化、水污染、外来鱼与湿地破碎化使霍奇米尔科野外种群持续下降；保护重点是恢复水质、水文、传统 chinampa 农业与外来鱼隔离的 refuge 网络。',
  storySections: [
    {
      key: 'wild-color',
      label: '野生型与圈养型',
      title: '野外的它，不是最常见的粉白形象',
      body:
        '野生型多为深绿褐、深褐至近黑的斑驳色。粉白皮肤、粉红外鳃和黑眼通常属于圈养 white/leucistic 型；它与 albino 不同，也不能凭颜色判断一个个体是否具有野生保育谱系。',
    },
    {
      key: 'paedomorphosis',
      label: '发育与呼吸',
      title: '已经成年，却保留水生幼体的结构',
      body:
        '幼态延续让它达到性成熟后仍保留三对羽毛状外鳃和尾鳍。外鳃并非唯一呼吸通道：肺、皮肤和口咽表面也参与气体交换；有肺并不改变它通常终生水栖的事实。',
    },
    {
      key: 'suction-feeding',
      label: '捕食机制',
      title: '张口的一瞬间，水流把猎物带进来',
      body:
        '它快速张口、压低舌骨并扩大口腔，水流连同水生昆虫、小型甲壳类或鱼一起进入口内，再从鳃裂排出。野外食谱来自很小的胃含物样本，无法支持精确比例。',
    },
    {
      key: 'eggs',
      label: '繁殖',
      title: '精包留在水底，卵分散附在水草上',
      body:
        '雄体放置胶质精包，雌体用泄殖腔拾取并完成体内受精，随后把胶质卵逐枚或分散地附着在水生植物和水下结构上。常见窝卵数字主要来自圈养，野外典型值仍未知。',
    },
    {
      key: 'regeneration-limits',
      label: '再生能力',
      title: '强大的再生，也有实验能测出的边界',
      body:
        '标准实验中的四肢可以完整再生，部分心室与端脑损伤也显示恢复；但同一平面的反复截肢会逐渐失败，自然咬伤后的再生肢也常有骨骼异常。再生不是无限、瞬时或每次完美。',
    },
    {
      key: 'xochimilco-refuges',
      label: '种群与保护',
      title: '保护一只螈，要修复一整张水路与生计网络',
      body:
        '历史调查密度从 1998 年约每平方千米 6,000 只降至 2013/2014 年约 35 只；UNAM 公开稿对后者写 34 或 36，这些都不是当前总数，新普查仍在处理。chinampa-refugia 以过滤屏障排除外来鱼、改善水质，并把传统农业和当地生产者纳入湿地恢复。',
    },
  ],
  keyFacts: [
    '最新 IUCN 评估为极危、下降趋势，2019 年评估标准是 A2abce。',
    '野生型通常深绿褐至近黑并带斑驳；粉白黑眼型主要是圈养中常见的 white/leucistic 表型。',
    '性成熟后仍保留三对外鳃和尾鳍；也可通过肺、皮肤和口咽表面交换气体。',
    '以吸入式摄食捕获小型水生猎物，水流从口进入并经鳃裂排出。',
    '雄体放置精包、雌体拾取后体内受精，卵分散附着在水生植物或水下结构上。',
    '四肢及某些器官的特定实验损伤可再生，但重复损伤、自然咬伤和复杂神经连接显示明确限制。',
  ],
  threats: [
    '城市扩张、旅游活动和水文改造造成湿地丧失与破碎化',
    '生活、工业和农业废水及固体废物造成水质下降',
    '鲤鱼和罗非鱼等外来鱼竞争食物并捕食卵或幼体',
    '极小、隔离的野外种群增加随机事件和遗传风险',
    '未经评估的圈养个体放生带来遗传和疾病风险',
  ],
  conservationActions: [
    '恢复霍奇米尔科水质、水文连通和水生植被',
    '扩展带外来鱼过滤屏障的 chinampa-refuge 网络',
    '支持无农药传统 chinampa 农业与 chinampero 社区共管',
    '开展不公开敏感点位的抄网、eDNA、水质和种群趋势监测',
    '仅在栖息地适宜后开展经遗传、病原和来源评估的保育再引入',
  ],
  metrics: {
    adultLengthCm: [15, 30],
  },
  featuredStats: [
    {
      key: 'survey-density',
      label: '调查密度变化',
      value: '6,000 → 约 35',
      unit: '只/平方千米',
      note: '1998 与 2013/2014 的区域调查估计；不是当前总数',
    },
    {
      key: 'external-gills',
      label: '外鳃',
      value: '3',
      unit: '对',
      note: '性成熟后仍保留，同时也能用肺、皮肤和口咽表面交换气体',
    },
    {
      key: 'adult-length',
      label: '一般全长',
      value: '15—30',
      unit: '厘米',
      note: '墨西哥政府概括范围；不是严格野生成体统计分布',
    },
  ],
  media: {
    image: './images/species/axolotl/01-wild-xochimilco.webp',
    alt: '霍奇米尔科水草与泥底之间，一只深绿褐斑驳的野生型墨西哥钝口螈',
    focalPoint: { x: 0.56, y: 0.53 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/axolotl/02-wild-and-leucistic.webp',
        alt: '野生深色型与圈养粉白黑眼型墨西哥钝口螈的并列对比',
        title: '野生型与圈养白色型',
        caption: '粉白、黑眼的 white/leucistic 型在圈养中常见，不代表霍奇米尔科野外的典型体色，也不同于 albino。',
        focalPoint: { x: 0.5, y: 0.5 },
      },
      {
        image: './images/species/axolotl/03-suction-feeding.webp',
        alt: '墨西哥钝口螈张口产生水流，吸入一只小型水生昆虫幼体',
        title: '水流中的一口',
        caption: '快速张口与舌骨下压扩大口腔，水流把小型猎物带入口内，再从鳃裂排出。',
        focalPoint: { x: 0.55, y: 0.5 },
      },
      {
        image: './images/species/axolotl/04-eggs-on-plants.webp',
        alt: '多枚墨西哥钝口螈透明胶质卵分别附着在沉水植物叶片和细茎上',
        title: '水草上的分散卵',
        caption: '雌体在体内受精后，把卵逐枚或分散附到水生植物和其他水下结构；不是蛙类泡沫巢或紧密卵团。',
        focalPoint: { x: 0.48, y: 0.5 },
      },
      {
        image: './images/species/axolotl/05-limb-regeneration.webp',
        alt: '受控实验示意中，墨西哥钝口螈的前肢从创面封闭和芽基阶段逐步再生',
        title: '再生并非瞬间魔法',
        caption: '标准损伤可启动完整肢体再生，但反复损伤与自然咬伤会降低成功率并增加异常。',
        focalPoint: { x: 0.52, y: 0.5 },
      },
      {
        image: './images/species/axolotl/06-chinampa-refuge.webp',
        alt: '霍奇米尔科传统 chinampa 边缘，一段以火山石和水生植物过滤屏障连接外部运河的 refuge 水道',
        title: '与 chinampa 相连的 refuge',
        caption: '过滤屏障保持水交换、阻挡外来鱼并改善局地水质；社区农业、生物过滤和湿地恢复缺一不可。',
        focalPoint: { x: 0.56, y: 0.54 },
      },
    ],
  },
  sources: AXOLOTL_SOURCES,
  featured: true,
  publishedAt: CONTENT_DATE,
  updatedAt: AXOLOTL_CONTENT_DATE,
}
```

## 来源清单

以下来源均于 **2026-08-17** 访问。稳定 DOI 优先；UNAM 页面用于说明仍在进行的普查和保护项目当前状态，不取代论文对历史调查方法的描述。

| 主题 | 来源与稳定 URL | 用途与边界 |
| --- | --- | --- |
| 当前接受分类 | [AMNH Amphibian Species of the World](https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Ambystomatidae/Ambystoma/Ambystoma-mexicanum) | 接受名、作者、原始组合、上级分类、历史湖群和当前霍奇米尔科范围 |
| 全球红色名录 | [IUCN SSC Amphibian Specialist Group](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T1095A53947343.en) | CR、下降、2019-10-23、A2abce、成熟个体宽区间、世代长度、生境、威胁和再引入边界 |
| 墨西哥国家状态 | [NOM-059-SEMARNAT-2010](https://transparencia.profepa.gob.mx/Transparencia/TransparenciaJuridico/LEYES/2025/NOM-059-SEMARNAT-2010.pdf) | 墨西哥特有与国家类别 P；不替代 IUCN |
| 近期下降与潜在分布 | [Contreras et al. 2009](https://doi.org/10.1016/j.biocon.2009.07.008) | 生态位模型、隔离适生区、调查极低捕获；不公开模型点位 |
| 历史监测方法 | [CITES Animals Committee AC21 Doc. 11.2](https://cites.org/sites/default/files/eng/com/ac/21/E21-11-2.pdf) | 1998 与 2002—2003 抄网面积、捕获数和密度；不是全球总数 |
| 当前普查状态 | [UNAM 2024](https://www.dgcs.unam.mx/boletin/bdboletin/2024_847.html) [UNAM 2025](https://www.dgcs.unam.mx/boletin/bdboletin/2025_865.html) [UNAM 2026](https://www.dgcs.unam.mx/boletin/bdboletin/2026_387.html) [Voss et al. 2015](https://doi.org/10.1093/biosci/biv153) | 6,000→约 35 的机构/同行评述口径、65+ 运河/19+ 千米、eDNA 痕迹、结果尚在处理、chinampa 共管与野生体色 |
| 系统水质 | [Zambrano et al. 2009](https://doi.org/10.1007/s00267-008-9216-1) | 水深、温度、溶氧、浊度和营养盐的两年系统均值及空间异质性；不是物种耐受阈值 |
| 原生地温度与 pH | [Shaffer 1989](https://ambystoma.uky.edu/genetic-stock-center/newsletters/Older_archive/Issues-13-23/archive/issue18/05-11shaffer.pdf) [2023 systematic review](https://herpetologia.fciencias.unam.mx/index.php/revista/article/download/755/510/10547) | 16—20°C、pH 7.4—8.2 的野外观察，以及其他参数缺少量化证据的边界 |
| 形态与野生体色 | [SEMARNAT 2018](https://www.gob.mx/semarnat/articulos/ajolote-mexicano-criatura-super-dotada) [CONANP 2025](https://www.gob.mx/conanp/articulos/axolote-o-el-oscuro-dios-del-cieno) | 15—30 厘米的一般全长、宽头、外鳃、尾鳍和深绿/棕野生外观；两页的泛化再生说法不用于器官边界 |
| 圈养色型遗传 | [Woodcock et al. 2017](https://doi.org/10.1038/s41598-017-00059-1) | white 与 albino 基因机制、white 创始历史、虎纹钝口螈 DNA 渗入；不推断单只个体来源 |
| 幼态延续与诱导变态 | [Galton 1992](https://doi.org/10.1016/0016-6480(92)90172-G) [Kühn et al. 2004](https://doi.org/10.1016/j.ygcen.2004.03.005) | 甲状腺激素相关机制与实验诱导；不表示野外常规变态或护理建议 |
| 呼吸 | [McKenzie & Taylor 1996](https://doi.org/10.1016/S0034-5687(96)00080-1) [Jensen et al. 2021](https://doi.org/10.1002/dvdy.315) | 低氧下鳃/肺通气和多通道呼吸；不诊断宠物健康 |
| 野外食性与外来鱼 | [Zambrano et al. 2010](https://doi.org/10.1007/s10530-010-9697-8) | 小样本胃含物、营养级、食物网重叠和鲤鱼胃内 axolotl 卵；不做精确菜单比例 |
| 吸入式摄食 | [Shaffer & Lauder 1985](https://doi.org/10.1002/jmor.1051830304) [Toussaint-Lardé et al. 2025](https://doi.org/10.1242/bio.061860) | 捕食肌肉活动和不同发育阶段运动学；实验个体不等于野外猎物选择 |
| 微生境选择 | [Ayala et al. 2019](https://doi.org/10.1007/s10750-018-3792-8) | 16 只、72 小时实验中的植被选择；不推出严格昼夜节律 |
| 圈养繁殖协议 | [Khattak et al. 2014](https://doi.org/10.1038/nprot.2014.040) | 精包、拾取、体内受精、人工叶片上的分散附卵；不当作野外窝卵量调查 |
| 重复损伤的再生限制 | [Bryant et al. 2017](https://doi.org/10.1038/s41536-017-0034-z) | 同平面重复截肢、第五次成功比例、胶原沉积；幼年 leucistic 实验个体 |
| 自然与实验损伤 | [Bothe et al. 2021](https://doi.org/10.1002/jez.b.22950) | 55 只幼体、再生骨骼异常、自然咬伤更严重；不等于野外发生率 |
| 部分心室再生 | [Cano-Martínez et al. 2010](https://www.scielo.org.mx/scielo.php?pid=S1405-99402010000200004&script=sci_abstract&tlng=en) | 部分心室切除后的 90 天结构与功能恢复；不是整心再生 |
| 部分端脑再生 | [Amamoto et al. 2016](https://doi.org/10.7554/eLife.13998) | pallium 局部损伤、新生神经元、远距离连接未恢复；不是整脑/记忆再生 |
| 首批 chinampa refuges | [Valiente et al. 2010](https://doi.org/10.3368/er.28.3.257) | 过滤屏障、短期水质、重捕和增重；小样本，不证明种群恢复 |
| chinampa-refuge 模型 | [Zambrano et al. 2020](https://doi.org/10.3368/er.38.2.114) | 传统农业、农户激励、生境和原生生物的一体化恢复 |
| 修复地短期移动 | [Ramos et al. 2025](https://doi.org/10.1371/journal.pone.0314257) | 18 只圈养繁殖实验释放个体、约 40 天运动与温度关联；不证明繁殖和自维持 |
| eDNA 生态评估 | [Maeda-Obregon et al. 2025](https://doi.org/10.1002/edn3.70147) | 43 个普通点、两个 refuge、单一 refuge 检出及属级分辨率限制；不证明灭绝或总量 |

## 仍然不确定或需后续更新的事项

- **新一轮野外密度**：截至 2026-06-28，UNAM 仍在处理 2024—2026 普查结果。发布同行评审报告或正式技术报告后，应整体更新调查设计、密度、置信区间和趋势，而不是只替换一个宣传数字。
- **2013 / 2014 年标签与数值**：UNAM 页面在“2013 年记录”和“2014 年最近一次普查”之间存在年份差异，对密度又分别写 34 或 36；同行评述写低于 35。产品统一写“2013/2014 年约 35 只/平方千米”，不要制造虚假的个位数或单日精度。
- **分布范围口径**：AMNH 聚焦当前霍奇米尔科南部残存原生范围，IUCN 2019 评估还纳入查尔科和含释放背景的查普尔特佩克记录。未来应随新评估核实哪些地点仍为原生、持续繁殖的野外种群。
- **IUCN 更新**：当前稳定 DOI 是 e.T1095A53947343；若 IUCN 发布替代评估，状态、标准、趋势、成熟个体范围、EOO、地点数和威胁必须整组更新。
- **水质阈值**：缺少足以定义野外温度、pH、溶氧、氨、亚硝酸盐和硝酸盐生理安全边界的研究。当前只能呈现现场观测和系统异质性。
- **野外活动节律**：植被选择和短期移动已有数据，但不足以稳定定义夜行/昼行、季节活动范围和固定伏击策略。
- **野外食谱**：胃含物样本极小且论文内部样本数不一致；食物大类可写，比例、季节变化和年龄差异仍待更大样本。
- **野外繁殖参数**：精包和附卵机制可靠，但窝卵数、产卵季、孵化成功、幼体招募和性成熟年龄的野外量化仍不足。
- **体重与寿命**：政府、实验室和宠物来源可提供圈养数字，却没有同等可靠的野外分布；本轮正确做法是删去 `adultMassKg` 与 `lifespanYears`。
- **再生的生态意义**：大多数证据来自受控实验室品系和标准伤型，无法直接回答野外个体遭捕食、感染、污染或营养压力后的恢复概率。
- **refuge 长期成效**：短期存活、增重、移动和 eDNA 阳性都不等于繁殖与自维持。需要多年、标记重捕、遗传、病原和幼体招募的联合证据。
- **圈养谱系与放归**：white、albino 和虎纹钝口螈 DNA 渗入说明实验室谱系复杂；任何再引入都要以来源、遗传适配、疾病筛查和恢复后的生境为前提。
- **敏感点位**：即使未来研究公开更精细坐标，面向大众的物种页仍只应展示区域尺度，不复制最近检出、卵点、庇护设施入口或放归路线。
