# 金色箭毒蛙（*Phyllobates terribilis*）完整档案研究

- 检索与核验日期：2026-08-16
- 使用范围：`src/data/species.ts` 的金色箭毒蛙条目、详情页长文、数字卡与后续图片验收
- 证据标准：优先采用 IUCN、CITES、哥伦比亚政府、美国自然历史博物馆（AMNH）等官方资料，以及原始物种描述和同行评审论文。商业饲养页、动物园短文、新闻媒体和未给出原始样本的百科数字不进入推荐数值字段。
- 访问限制：IUCN 物种页在本次检索中返回 403；状态、标准和趋势使用稳定 DOI 记录及机构复述交叉核验，评估日期另用 DOI 注册元数据核对。后续若取得 IUCN 下载版，应再次核验 `assessedYear`，但不应把红色名录卷期年份直接当作评估日期。
- 敏感信息处理：2012 年分布扩展论文因盗采风险主动省略更精细坐标。产品仅保留省级、流域级范围与粗粒度地图焦点，不复制采集点、繁殖点或近期个体坐标。

## 结论摘要

### 当前分类、名称与近缘种边界

当前接受名是 ***Phyllobates terribilis* Myers, Daly, and Malkin, 1978**，分类为动物界—脊索动物门—两栖纲—无尾目—箭毒蛙科—叶毒蛙属；AMNH 的 *Amphibian Species of the World* 还列出其位于 Dendrobatinae 亚科，但仓库现有 schema 不保存亚科。英文接受俗名为 **Golden Poison Frog**，仓库中文主名“金色箭毒蛙”和别名“黄金箭毒蛙”可保留。[AMNH Amphibian Species of the World](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Dendrobatoidea/Dendrobatidae/Dendrobatinae/Phyllobates/Phyllobates-terribilis)

2024 年整合分子、形态、鸣声和分布的修订在叶毒蛙属中描述了两个新种 *P. samperi* 与 *P. bezosi*；*P. terribilis* 仍是有效种，且与新描述类群形成近缘支系。其产品分类字段无需改名，但“通体黄色”不再足以单独鉴定照片或野外记录，素材仍需结合体型、四肢与腹面颜色、地点和来源确认。[Amézquita et al. 2024](https://doi.org/10.3897/zookeys.1212.126733) [AMNH 2024 taxonomy log](https://amphibiansoftheworld.amnh.org/Previous-running-logs-2014-2025/Running-log-of-additions-and-changes-2024)

### 全球 IUCN、哥伦比亚国家名录与 CITES

截至本次核验，最新可识别的全球 IUCN 评估仍是 **濒危 Endangered（EN）**、种群趋势 **下降**，标准为 **B1ab(iii)**。B1 指向受限的分布范围（EOO），`a` 表示严重破碎化或地点数受限，`b(iii)` 表示生境面积、范围或质量持续下降；不能擅自补写基于占有面积（AOO）的 B2。WCS 对该评估的当前复述给出 EOO 约 **1,473 平方千米**。EOO 是包络已知、推断或预计分布的评估几何量，不是实际连续占据的森林面积，也不是“领地面积”。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2017-3.RLTS.T55264A85887889.en) [WCS Colombia](https://colombia.wcs.org/en-us/WCS-VISUAL/Photo-Gallery/Poison-Dart-Frogs-of-Colombia.aspx)

年份必须拆开处理：稳定引用属于 *The IUCN Red List of Threatened Species 2017-3*，但 DOI 注册记录的 `issued/published` 日期是 **2016-08-04**，记录建立于 2017-12-12。仓库 `ConservationStatus.assessedYear` 明确要求“评估年份而非导入/发布年份”，因此建议写 `conservation('EN', 'decreasing', 2016, 'B1ab(iii)')`，来源标题仍保留“Red List 2017-3”。也就是说，`assessedYear: 2016` 与引用卷期 `2017-3` 并不矛盾；不得继续使用现有的 2018。若未来 IUCN 下载文件显示不同的正式 assessment date，应以下载文件为准并在研究稿中更新口径。[IUCN DOI](https://doi.org/10.2305/IUCN.UK.2017-3.RLTS.T55264A85887889.en) [Crossref DOI metadata](https://api.crossref.org/works/10.2305%2FIUCN.UK.2017-3.RLTS.T55264A85887889.en)

哥伦比亚 2024 年第 0126 号决议把 *P. terribilis*（Rana dorada venenosa）列为国家尺度 **EN**。旧论文常写哥伦比亚国家 **CR**，那是 2010/2014 等旧名录结论，已被现行官方清单更新；即使当前国家与全球都写 EN，两者仍是不同尺度、不同法律用途的判断，不能用国家名录覆盖产品的 IUCN 字段。[哥伦比亚环境与可持续发展部—Resolución 0126 de 2024](https://www.minambiente.gov.co/documento-normativa/resolucion-0126-de-2024/) [官方决议 PDF](https://www.minambiente.gov.co/wp-content/uploads/2024/02/Resolucion-0126-de-2024.pdf)

整个 ***Phyllobates*** 属列入 **CITES 附录 II**。附录 II 意味着国际贸易须受许可和可持续性监管，并不等于全面禁止交易，也不证明市场上的每一条圈养谱系都有可追溯的合法创始来源。[CITES taxon record](https://cites.org/eng/taxonomy/term/4836) [CITES Appendix-II definition](https://cites.org/eng/node/12644)

### 分布、海拔、生境与地图边界

金色箭毒蛙是**哥伦比亚特有种**。模式产地位于考卡省萨伊哈河上游流域的低地雨林；2012 年 DNA 条形码与系统树确认纳亚河和尤鲁曼吉河流域的个体也属于本种，把已知范围向北扩展约 60 千米至考卡山谷省。因此产品必须同时写 **考卡省和考卡山谷省**，不能继续用“考卡省与相邻太平洋低地”模糊掉第二个省，也不能扩张到乔科省、纳里尼奥省或整个哥伦比亚西岸。[AMNH Amphibian Species of the World](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Dendrobatoidea/Dendrobatidae/Dendrobatinae/Phyllobates/Phyllobates-terribilis) [Márquez et al. 2012](https://doi.org/10.13128/Acta_Herpetol-11387)

AMNH 当前物种页把模式区和已知北扩范围概括为 **100—200 米**，2024 年论文的物种摘要写 **50—200 米**；但一项纳亚河下游的原始种群研究明确记录研究地海拔 **低于 25 米**，同一篇 2024 年论文的雄蛙背负蝌蚪观察点又给出 **55 米**。这说明“只在 50/100—200 米”已经过窄：一手地点记录应优先于较窄的摘要范围。醒目文案可写“可靠研究地点从低于 25 米至 200 米”，但仓库的数值区间无法表达不等式，因此暂不填 `metrics.elevationM`；尤其不能用 0 代替“低于 25 米”，因为文献并未报告海平面实测点。不建议采用饲养指南中缺少一手分布依据的 400 米上限。[Alzate-Lozano et al. 2018](https://doi.org/10.21068/c2018.v19n01a09) [Duarte-Marín et al. 2024](https://www.biotaxa.org/hn/article/download/85203/81250) [AMNH Amphibian Species of the World](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Dendrobatoidea/Dendrobatidae/Dendrobatinae/Phyllobates/Phyllobates-terribilis)

成蛙主要在极湿低地雨林的地表落叶层、树根和离地很低的位置活动，并非树冠蛙。纳亚河研究在原生干扰林和次生林样地都找到个体：一个样地靠近道路和社区菜园、林冠较开，另两个样地林冠较闭、落叶层约 15 厘米，三处仍保有水源与躲避处。它支持“部分种群可容忍一定程度的森林改造”，但样本只来自一个地点、一个月，不能据此写成适应农田、城镇或无林环境。[AMNH discovery account](https://www.amnh.org/explore/news-blogs/golden-poison-frog-discovery) [Alzate-Lozano et al. 2018](https://doi.org/10.21068/c2018.v19n01a09)

`distribution.realms` 保留 `['terrestrial', 'freshwater']` 是合理的生命史表达：成蛙与陆地产卵阶段属 terrestrial，蝌蚪被雄蛙送入水体后完成发育，故 freshwater 只代表幼体阶段。生境字段应拆开说明，避免把成蛙写成常驻溪流，也避免照搬常见误说，把它画成在树冠凤梨科植物水杯中育幼。[Duarte-Marín et al. 2024](https://www.biotaxa.org/hn/article/download/85203/81250)

### 成体尺寸、体重、寿命与颜色

可靠的体型口径是**吻肛长（SVL/LRC）**而非“全长”。1978 年原始描述给出最大约 47 毫米；2018 年论文汇总雄性约 37—45 毫米、雌性约 40—47 毫米，并在当地实际捕获的 36 只中测得 29.8—45.8 毫米，其中研究按不小于 37.0 毫米划作成体。产品可统一用成体 **37—47 毫米**，并注明雌性通常稍大。现有 45—55 毫米会高估上限，应改。[Myers, Daly & Malkin 1978](https://hdl.handle.net/2246/1286) [Alzate-Lozano et al. 2018](https://doi.org/10.21068/c2018.v19n01a09)

未找到与该成体范围同等可靠、可追溯的野外体重区间；网络流传的 20—30 克或“约 30 克”多在二手动物页循环引用。因此 `measurements.weight` 和 `metrics.adultMassKg` 应删除，而不是把一个可疑数字包装成精确范围。类似地，没有可支持“野外寿命 5—10 年”的物种级追踪研究；原始描述至多从年龄结构推测个体可能相对长寿，不能转换为寿命区间，`lifespanYears` 应暂空。[Myers, Daly & Malkin 1978](https://hdl.handle.net/2246/1286)

成体背面、腹面和四肢总体呈均一的亮黄色、橙/金色或淡金属绿至绿乳白色，眼和趾端可较暗；不同地点还可见腹面末端的深色差异。小型幼体则是黑色底上带金色背外侧纵纹，成长时逐步转为较均一的警戒色。推荐详情页把“幼体换装”作为一个章节，不能把黑金条纹幼体误标成另一物种。[Myers, Daly & Malkin 1978](https://hdl.handle.net/2246/1286) [Márquez et al. 2012](https://doi.org/10.13128/Acta_Herpetol-11387) [Alzate-Lozano et al. 2018](https://doi.org/10.21068/c2018.v19n01a09)

黄色、橙色、绿乳白色是有野外文献的色彩变化，但“mint”“orange blackfoot”等宠物贸易标签不等于被正式命名的亚种或野外种群。没有可追溯产地时，产品不得把商业品系名写成自然分类单元；2024 年相邻新种的描述也进一步提高了仅凭颜色误认的风险。[Márquez et al. 2012](https://doi.org/10.13128/Acta_Herpetol-11387) [Amézquita et al. 2024](https://doi.org/10.3897/zookeys.1212.126733)

### 日间活动、鸣叫与领域互动

本种主要**日行、地栖**，在落叶层与低矮树根附近移动。1978 年原始描述记录雄性以长颤音吸引雌性并参与领域互动，也记录同性追逐、扭抱等攻击行为；2018 年短期种群研究把领域习性与地点忠诚列为较高检测概率的可能解释，而不是测出了固定领域面积。产品可以写“雄性会鸣叫并发生领域互动”，不能写每只蛙都独居、领域有固定大小，或把圈养群体行为直接外推到野外。[Myers, Daly & Malkin 1978](https://hdl.handle.net/2246/1286) [Alzate-Lozano et al. 2018](https://doi.org/10.21068/c2018.v19n01a09)

历史声学描述是在约 27°C 条件下记录的均匀颤音：约每秒 13 个音符、一次约 6 秒、主频约 1.8 kHz。它适合帮助解释“为什么声学监测可行”，但温度、个体和录音条件都会影响参数，不应做成全物种恒定数字卡。2024 年启动的参与式被动声学项目也说明雄性叫声可用于估计分布、占域与季节活动，但项目目标不是已经完成的种群趋势结论。[Myers, Daly & Malkin 1978](https://hdl.handle.net/2246/1286) [ACH species account](https://www.acherpetologia.org/publicaciones/) [Faunatech 2024 grant description](https://www.faunatech.com.au/grant-program/past-recipients/2024-recipients-2)

2024 年野外观察在 08:00—12:00 搜索期间，于 09:00—10:50 看到三只雄蛙在林间小径移动。这只支持该地点的一次晨间活动记录，不能据此把全物种活动高峰锁定为上午。[Duarte-Marín et al. 2024](https://www.biotaxa.org/hn/article/download/85203/81250)

### 食性、毒素来源、作用与自体耐受

金色箭毒蛙是小型节肢动物食者。毒蛙类群资料常讨论蚂蚁、螨、甲虫和白蚁，但本次未找到公开、同行评审且样本充分的本种野外胃含物定量研究；因此不能把这些类群作为本种已确认食物清单，也不应给食物比例。稳妥字段只写“在林地表面捕食小型陆生节肢动物，物种级定量食谱仍缺资料”。[Santos, Coloma & Cannatella 2003](https://doi.org/10.1073/pnas.2133521100) [Alzate-Lozano et al. 2018](https://doi.org/10.21068/c2018.v19n01a09)

膳食来源的证据很强：圈养繁殖的箭毒蛙没有可检测的皮肤生物碱，把特定生物碱喂给 *Dendrobates*、*Phyllobates* 和 *Epipedobates* 后，它们会选择性地把这些分子累积到皮肤并保持数月。这支持“蛙从食物中摄取、运输并储存在皮肤腺体”，不支持“蛙自己从头合成毒素”。[Daly et al. 1994](https://doi.org/10.1016/0041-0101(94)90335-2)

对本种还需区分**圈养繁殖个体**和**野外捕获后转入圈养的个体**。1980 年研究未在圈养长成的 F1 后代检出 batrachotoxin（BTX），但野外捕获个体的 BTX 下降很慢，圈养长达六年后仍可能保留显著毒性。因此产品可写“在不含相关生物碱的圈养食谱下繁殖长大的个体通常无可检测 BTX”，不能绝对写“只要圈养一段时间毒性就消失”，更不能据此建议触摸任何来源不明的个体。[Daly et al. 1980](https://doi.org/10.1126/science.6246586) [Daly et al. 1994](https://doi.org/10.1016/0041-0101(94)90335-2)

BTX 与电压门控钠通道高亲和结合，促进通道开放并阻止正常失活，使神经和肌肉膜的电信号调节失常。1978 年单只新鲜野外个体曾测得最高约 1,900 微克相关毒素，这是特定样本的高值，不是平均值；“一只可杀死十个人”等换算依赖间接的人体致死剂量假设和暴露路径，误导性很高，完全不建议进入产品文案或数字卡。[Myers, Daly & Malkin 1978](https://hdl.handle.net/2246/1286) [Dumbacher et al. 2004](https://doi.org/10.1073/pnas.0407197101)

2004 年研究在新几内亚 *Choresine* 甲虫中检出 BTX，并提出哥伦比亚雨林中的近缘花萤科甲虫**可能**是 *Phyllobates* 的来源；论文同时明确，当时受田野条件限制，并未在哥伦比亚验证这种食物链。可写“具体的 BTX 来源猎物仍未确定”，不可写“金色箭毒蛙靠吃 *Choresine* 甲虫获得毒素”或把新几内亚甲虫直接放入本种食物列表。[Dumbacher et al. 2004](https://doi.org/10.1073/pnas.0407197101)

自体耐毒机制也仍未定论。较早研究把耐受归于钠通道氨基酸替换；2021 年直接测试却发现该候选 N→T 变异在所检毒蛙通道中缺失、代价高，且不能使本种通道产生预期 BTX 耐受。活体蛙能耐受毒素而分离通道仍敏感，提示隔离、运输或“毒素海绵”蛋白可能参与保护；研究只证明 saxiphilin 可结合并缓冲另一种毒素 STX，尚未发现 BTX 结合蛋白。因此产品最多写“如何避免自体中毒仍在研究，可能依赖毒素隔离”，不能把单一突变或某个已知蛋白写成已证实答案。[Abderemane-Ali et al. 2021](https://doi.org/10.1085/jgp.202112872)

### 繁殖、陆地产卵与雄蛙背负蝌蚪

现有资料描述雌蛙把约 8—17 枚卵产在潮湿落叶间，雄蛙通过泄殖腔贴近完成体外受精；这些产卵与窝卵数细节主要来自早期圈养观察，野外巢的直接资料仍少，应保留“约、通常”等限定。孵化后由雄蛙把蝌蚪背到林下水体，蝌蚪离背后在水中继续发育至变态；不能写“亲蛙把卵背去水里孵化”，也不能写雄蛙一直背到幼蛙完成变态。[Duarte-Marín et al. 2024](https://www.biotaxa.org/hn/article/download/85203/81250) [Myers, Daly & Malkin 1978](https://hdl.handle.net/2246/1286)

1985 年的半自然观察把这种亲代照料限定得更精确：照料只由雄蛙承担，但雄蛙并不持续守巢。它在产卵后短暂返回一次，以膀胱水润湿卵簇并可能同时完成受精，之后不定期润湿、不防卫卵簇；约两周后临近孵化时再返回，让蝌蚪爬上背部后送往水体。因此产品可写“短暂返回润湿”，不能写成长期伏巢守护。[Zimmermann & Zimmermann 1985](https://salamandra-journal.com/index.php/contents/1985-vol-21/1115-zimmermann-h-e-zimmermann-1/file)

2023 年 5 月的一次野外观察记录一只雄蛙同时背负 **16 只蝌蚪**，是已发表的最高数；原始描述见过两只各背 9 只，当地研究者近 16 年非系统观察多见 2—9 只。16 只必须标为异常高背负载荷，而不是常见背负数；论文无法判断这些幼体来自一窝还是多窝，只把多窝、一次性运输或行为离群等列为可能解释。[Duarte-Marín et al. 2024](https://www.biotaxa.org/hn/article/download/85203/81250)

推荐产品只写“雄蛙背负蝌蚪到水体”这一有直接野外证据的性别分工。不要用模糊的“亲蛙”掩盖已知雄性运输，也不要套用其他箭毒蛙的雌性营养卵投喂、单只蝌蚪放入凤梨水杯或双亲长期照料等行为。[Duarte-Marín et al. 2024](https://www.biotaxa.org/hn/article/download/85203/81250)

### 威胁、保护地、社区共管与贸易可追溯性

全球评估和哥伦比亚保护机构稳定支持的主要威胁是：农业与非法作物扩张导致的砍伐和破碎化、采伐与聚落扩张、金矿开采及其水土污染，以及非法作物喷洒带来的污染。极窄的分布不是直接胁迫源，却会放大单一流域森林损失或污染事件的种群后果。气候变化和壶菌病对两栖动物普遍重要，但本次未找到足够的本种种群级证据，不建议与已确认威胁并列为“主要下降原因”。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2017-3.RLTS.T55264A85887889.en) [WCS Colombia](https://colombia.wcs.org/en-us/WCS-VISUAL/Photo-Gallery/Poison-Dart-Frogs-of-Colombia.aspx)

保护地信息已经更新，不能继续沿用旧 IUCN 文案中的“未受保护”。Ranita Terribilis 私人保护区于 2012 年建立，面积 66.4 公顷；2020 年 Eperãra Siaapidaarã 人民推动 K´õk´õi Eujã—金色箭毒蛙领地以区域防护林保护区形式纳入哥伦比亚国家保护地系统，面积 11,641 公顷。它表明原住民治理与正式保护地是现行保护核心，而不是背景装饰。[IUCN SSC Amphibian Conservation Action Plan 2024](https://portals.iucn.org/library/sites/library/files/documents/SSC-OP-057-En.pdf) [哥伦比亚 RUNAP/CRC 保护区协议](https://runapadmin.parquesnacionales.gov.co/default/general/descargardocumento?did=2081)

国际贸易需要更细致的边界。2024/2025 年基于 CITES 1987—2022 申报数据的研究发现，哥伦比亚首次合法出口前，*P. terribilis* 已在非分布国之间大量交易；合法出口开始后，非分布国申报的圈养来源仍占相当比例，创始个体来源无法从数据中追溯。它支持加强许可、谱系和交易可追溯性，不证明当下每个圈养个体都是非法，也不证明宠物贸易是当前比栖息地丧失更大的全球下降驱动。[Forero-Medina et al.](https://doi.org/10.1111/csp2.13283) [CITES taxon record](https://cites.org/eng/taxonomy/term/4836)

行动字段应优先写：保护和连接萨伊哈—纳亚等流域的极湿低地林；支持 Eperãra Siaapidaarã 等当地社区对 K´õk´õi Eujã 的治理；控制采金、砍伐、农业和喷洒污染；用不公开敏感点位的视觉、声学和占域方法长期监测；对国际贸易执行 CITES 许可与可追溯性。合法保育繁殖可作为减少野外采集和建立保障种群的补充，但不能代替原地森林保护，也不能自动洗白来源不明的创始谱系。[IUCN SSC Amphibian Conservation Action Plan 2024](https://portals.iucn.org/library/sites/library/files/documents/SSC-OP-057-En.pdf) [Forero-Medina et al.](https://doi.org/10.1111/csp2.13283)

## 推荐的关键事实

1. 金色箭毒蛙只自然分布在哥伦比亚考卡省和考卡山谷省的太平洋极湿低地林，已知范围向北延伸约 60 千米。[AMNH Amphibian Species of the World](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Dendrobatoidea/Dendrobatidae/Dendrobatinae/Phyllobates/Phyllobates-terribilis) [Márquez et al. 2012](https://doi.org/10.13128/Acta_Herpetol-11387)
2. 成体可靠吻肛长约 37—47 毫米；它在箭毒蛙中较大，但没有可靠野外体重区间可写。[Myers, Daly & Malkin 1978](https://hdl.handle.net/2246/1286) [Alzate-Lozano et al. 2018](https://doi.org/10.21068/c2018.v19n01a09)
3. 成体可呈均一亮黄、橙金或绿乳白色，小幼体却是黑底配金色背外侧纵纹，成长过程中会明显换装。[Myers, Daly & Malkin 1978](https://hdl.handle.net/2246/1286)
4. 皮肤 BTX 等生物碱来自食物摄取与储存；哥伦比亚野外究竟是哪种猎物提供 BTX，至今没有被直接验证。[Daly et al. 1994](https://doi.org/10.1016/0041-0101(94)90335-2) [Dumbacher et al. 2004](https://doi.org/10.1073/pnas.0407197101)
5. 圈养繁殖、吃不到相关生物碱的个体通常没有可检测 BTX；野外捕获的蛙却可能在圈养多年后仍保留毒性。[Daly et al. 1980](https://doi.org/10.1126/science.6246586)
6. 雄蛙会把孵化后的蝌蚪背到水体。当地约 16 年非系统观察多见 2—9 只；2023 年一只雄蛙背 16 只是异常高背负纪录，不能据此推断窝数。[Duarte-Marín et al. 2024](https://www.biotaxa.org/hn/article/download/85203/81250)
7. 候选钠通道突变不能完整解释自体耐毒；毒素隔离或结合蛋白是研究方向，但 BTX 的保护蛋白尚未被找到。[Abderemane-Ali et al. 2021](https://doi.org/10.1085/jgp.202112872)
8. 2020 年纳入哥伦比亚保护地系统的 K´õk´õi Eujã 保护区由 Eperãra Siaapidaarã 人民推动，保护 11,641 公顷低地湿林与文化领地。[哥伦比亚 RUNAP/CRC 协议](https://runapadmin.parquesnacionales.gov.co/default/general/descargardocumento?did=2081)

## 应删除或避免的说法

- 删除 `measurements.weight: 20—30 g` 和 `metrics.adultMassKg: [0.02, 0.03]`；本次没有找到可靠的本种野外称量依据。
- 删除 `metrics.lifespanYears: [5, 10]`；原始描述中的“可能相对长寿”不是可转换的寿命区间。
- 把成体体长从 45—55 毫米改为吻肛长 37—47 毫米；55 毫米上限缺少高质量支持。
- 不写“一只可以杀死十个人”“世界最毒动物”或任何人体致死换算；它们把单个高值、间接剂量估计与假设暴露路径混成确定事实。
- 不写“金色箭毒蛙制造/分泌自己合成的 BTX”；应写从食物中摄取并储存在皮肤腺体。
- 不写“毒素确定来自 *Choresine* 甲虫”或把该属放入食物字段；被检出 BTX 的甲虫来自新几内亚，哥伦比亚近缘甲虫只是待验证假说。
- 不写“圈养后就无毒”或“人工饲养个体可安全触摸”；圈养繁殖无相关膳食生物碱与野外捕获后转圈养是两个不同情境。
- 不写“单一钠通道突变让它免疫 BTX”；2021 年功能试验已推翻这一简单解释。
- 不写“亲蛙把卵背到凤梨水杯”或“雌蛙以营养卵持续喂养蝌蚪”；那是把其他箭毒蛙的行为套到本种。
- 不把 16 只蝌蚪当作正常背负数；它是一次异常最高纪录。
- 不把 2018 年一个地点、一个月的 32.5 ± 4.3 只估计写成全球、全物种或全流域种群数量。
- 不把局地改造林中的存在写成“适应农田和城市”；研究地仍保留森林结构、湿润微气候、水源和躲避处。
- 不把 EOO 1,473 平方千米写成实际栖息地面积、领地面积或保护区面积。
- 不继续写哥伦比亚国家 CR；2024 年现行国家清单为 EN。全球 IUCN EN、国家 EN 与 CITES 附录 II 仍是三个不同体系。
- 不把 CITES 附录 II 写成“禁止国际贸易”；它要求受管制、合法且不危害野外存续。
- 不把“mint”“orange blackfoot”等宠物贸易名当成正式野外亚种或稳定地理种群。

## 现有字段逐项审计

| 现有字段 | 结论 | 推荐修改 |
| --- | --- | --- |
| `scientificName` 与分类树 | 正确 | 保留 *Phyllobates terribilis*、Dendrobatidae、*Phyllobates*；不需为 2024 新近缘种改名 |
| `names` | 可用 | 保留“金色箭毒蛙 / Golden Poison Frog / 黄金箭毒蛙” |
| `conservation` | 状态、趋势可用，年份和标准需修正 | 改为 `EN / decreasing / 2016 / B1ab(iii)`；来源标题注明 Red List 2017-3，不能补写 B2 |
| `distribution.regions/endemicTo` | 方向正确但过于含混 | 明写考卡省、考卡山谷省与萨伊哈—纳亚—尤鲁曼吉流域；不放精确点位 |
| `distribution.realms` | 可保留 | terrestrial 对应成蛙和陆地产卵；freshwater 对应蝌蚪 |
| `habitats` | 只有一项，生命阶段不够清楚 | 拆为极湿低地林落叶层与林下幼体水体；注明成蛙不常驻水中 |
| `measurements.length` | 上限偏高 | 改为成体吻肛长 37—47 mm |
| `measurements.weight` | 无可靠依据 | 删除 |
| `diet` | 食物类别可保守保留，毒源说法需收紧 | 明说定量食谱不足、具体 BTX 猎物未知 |
| `activity` | 基本方向正确 | 展开为日行、地表落叶层、雄性颤音与领域互动、雄性背负蝌蚪 |
| `summary/description` | 可深化 | 从“最毒”叙事转向警戒色、膳食储毒、地栖生命史与窄域保护 |
| `keyFacts` | “人工饲养后消失”过度概括 | 区分圈养繁殖与野外捕获个体，加入幼体换色和雄性运输 |
| `threats` | 基本正确 | 加入采伐/聚落/非法作物喷洒；把狭窄范围写成风险放大因素 |
| `conservationActions` | 过度依赖保育繁殖 | 先写森林连通、原住民共管、污染控制、长期监测与 CITES 可追溯性 |
| `metrics` | 体重、寿命错误；海拔下限不能无损转成数值 | 仅保留 `adultLengthCm: [3.7, 4.7]`；海拔用 `<25—200 米` 展示文案，不填 `elevationM` |
| `featuredStats` | 体长需改，信息量不足 | 用吻肛长、EOO、可靠海拔和雄蛙运输观察；每项加限制说明 |
| `sources` | 泛搜索链接不可审计 | 换为下列物种专用直链 `SpeciesSource[]` |
| `storySections` | 缺失 | 增加六章：换色、林地活动、膳食储毒、雄性运输、窄域、保护治理 |
| `media` | 无本地素材 | 本研究只给内容验收规则；图片路径、焦点和 credit 由素材任务决定 |

## 图片与插画验收线索

这些不是图片生成指令，而是后续素材的物种与叙事验收标准：

- 成年主视觉应是落叶层或低矮树根附近的通体亮黄个体；可接受橙金或绿乳白色，但不能默认把商业品系标签写进标题。成蛙应在地面，不在树冠凤梨水杯中。[AMNH discovery account](https://www.amnh.org/explore/news-blogs/golden-poison-frog-discovery)
- 成人体背、四肢和大部分腹面应总体均一，眼和趾端可暗；若出现宽黑背外侧条纹，应明确为幼体阶段，而不是成年黄色型。[Myers, Daly & Malkin 1978](https://hdl.handle.net/2246/1286)
- 幼体换色图可画黑色底、两条金色背外侧纵纹；不要画成成年蛙同样的纯黄缩小版。
- 繁殖图应画**雄蛙**背负已经孵化的蝌蚪前往地表水体。若表现当地约 16 年非系统观察中多见的载荷，可画 2—9 只；若画 16 只，标题必须明确“2023 年异常最高纪录”，且不能把载荷当作窝数。[Duarte-Marín et al. 2024](https://www.biotaxa.org/hn/article/download/85203/81250)
- 栖息地图要有极湿低地雨林、深落叶层、树根、闭合或半闭合林冠和林下小水体；不要画成云雾山地、开阔农田、沼泽主水面或高空树栖场景。
- 毒性图应表现皮肤防御性分泌物/化学储存，不要画毒牙、针刺、主动喷毒或咬伤。箭毒蛙是 poisonous，不是靠专门器官注入 venom。
- 不安排裸手触摸野外蛙的画面，也不通过“人工饲养”外观暗示安全；来源和食谱不可从外观判断。
- 地图只画考卡省—考卡山谷省太平洋低地的大范围，不标出采集坐标、繁殖点或保护区内个体位置。

## 推荐的物种专用 `SpeciesSource[]`

以下常量可直接放在 `species.ts` 顶部的专用来源区；全部是物种页、正式文档、论文 DOI 或论文直链，不使用搜索结果页。

```ts
const GOLDEN_POISON_FROG_SOURCE_DATE = '2026-08-16' as const;
const GOLDEN_POISON_FROG_CONTENT_DATE = '2026-08-16' as const;

const GOLDEN_POISON_FROG_SOURCES = [
  {
    title: 'IUCN SSC Amphibian Specialist Group — Phyllobates terribilis, Red List 2017-3',
    url: 'https://doi.org/10.2305/IUCN.UK.2017-3.RLTS.T55264A85887889.en',
    kind: 'conservation',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'AMNH Amphibian Species of the World 6.2 — Phyllobates terribilis',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Dendrobatoidea/Dendrobatidae/Dendrobatinae/Phyllobates/Phyllobates-terribilis',
    kind: 'taxonomy',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Myers, Daly & Malkin 1978 — Original description and natural history',
    url: 'https://hdl.handle.net/2246/1286',
    kind: 'general',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Amézquita et al. 2024 — Molecular phylogenetics of Phyllobates',
    url: 'https://doi.org/10.3897/zookeys.1212.126733',
    kind: 'taxonomy',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Márquez et al. 2012 — Range extension into Valle del Cauca',
    url: 'https://doi.org/10.13128/Acta_Herpetol-11387',
    kind: 'distribution',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Alzate-Lozano et al. 2018 — Population parameters and habitat',
    url: 'https://doi.org/10.21068/c2018.v19n01a09',
    kind: 'ecology',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Zimmermann & Zimmermann 1985 — Reproductive strategy and paternal care',
    url: 'https://salamandra-journal.com/index.php/contents/1985-vol-21/1115-zimmermann-h-e-zimmermann-1/file',
    kind: 'ecology',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Duarte-Marín et al. 2024 — Male carrying an unusually high tadpole load',
    url: 'https://www.biotaxa.org/hn/article/download/85203/81250',
    kind: 'ecology',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Daly et al. 1980 — Batrachotoxin levels and physiological resistance',
    url: 'https://doi.org/10.1126/science.6246586',
    kind: 'ecology',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Daly et al. 1994 — Dietary alkaloid uptake in poison frogs',
    url: 'https://doi.org/10.1016/0041-0101(94)90335-2',
    kind: 'ecology',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Dumbacher et al. 2004 — Melyrid beetles as a putative BTX source',
    url: 'https://doi.org/10.1073/pnas.0407197101',
    kind: 'ecology',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Abderemane-Ali et al. 2021 — Evidence against a simple sodium-channel resistance mechanism',
    url: 'https://doi.org/10.1085/jgp.202112872',
    kind: 'ecology',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'WCS Colombia — Poison Dart Frogs of Colombia',
    url: 'https://colombia.wcs.org/en-us/WCS-VISUAL/Photo-Gallery/Poison-Dart-Frogs-of-Colombia.aspx',
    kind: 'conservation',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Colombia MinAmbiente — Resolución 0126 de 2024',
    url: 'https://www.minambiente.gov.co/wp-content/uploads/2024/02/Resolucion-0126-de-2024.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'CITES — Phyllobates listing',
    url: 'https://cites.org/eng/taxonomy/term/4836',
    kind: 'conservation',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC 2024 — Amphibian Conservation Action Plan',
    url: 'https://portals.iucn.org/library/sites/library/files/documents/SSC-OP-057-En.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Colombia RUNAP/CRC — K´õk´õi Eujã protected-area agreement',
    url: 'https://runapadmin.parquesnacionales.gov.co/default/general/descargardocumento?did=2081',
    kind: 'conservation',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
  {
    title: 'Forero-Medina et al. — International trade of Colombian endemic poison frogs',
    url: 'https://doi.org/10.1111/csp2.13283',
    kind: 'conservation',
    accessedAt: GOLDEN_POISON_FROG_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

不建议把 Crossref 注册 JSON 放入用户可见的 `sources`；它只用于内部解释为什么 `assessedYear` 是 2016，而来源本体仍是 IUCN DOI。RUNAP/CRC 正式协议只支撑保护区与社区治理行动，不作为分类或全球状态来源。

## 可直接用于 `species.ts` 的字段建议

下列对象记录本次研究后实际落地的物种字段；六张图片的生成提示、可编辑源图与静态验收见 `src/assets/source/species/golden-poison-frog/README.md`。

```ts
{
  id: 'species-phyllobates-terribilis',
  slug: 'golden-poison-frog',
  names: {
    zh: '金色箭毒蛙',
    en: 'Golden Poison Frog',
    aliases: ['黄金箭毒蛙'],
  },
  scientificName: 'Phyllobates terribilis',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Amphibia', '两栖纲'),
    taxon('Anura', '无尾目'),
    taxon('Dendrobatidae', '箭毒蛙科'),
    taxon('Phyllobates', '叶毒蛙属'),
  ),
  conservation: conservation('EN', 'decreasing', 2016, 'B1ab(iii)'),
  distribution: {
    realms: ['terrestrial', 'freshwater'],
    continents: ['南美洲'],
    regions: ['哥伦比亚太平洋低地', '萨伊哈—纳亚—尤鲁曼吉河流域'],
    countries: ['哥伦比亚'],
    endemicTo: ['哥伦比亚考卡省和考卡山谷省的太平洋低地'],
    range:
      '仅自然分布于哥伦比亚西部考卡省和考卡山谷省的极湿低地雨林；已确认范围从萨伊哈河流域向北延至纳亚和尤鲁曼吉河流域。地图只显示粗粒度范围，不公开敏感采集点。',
    center: { lat: 3.1, lng: -77.3 },
  },
  habitats: [
    {
      name: '太平洋极湿低地雨林落叶层',
      realm: 'terrestrial',
      description:
        '成蛙主要在原生、轻度干扰及部分仍保有湿润微气候的次生林地表活动，利用落叶层、树根和低矮遮蔽物。',
      isPrimary: true,
    },
    {
      name: '林下幼体水体',
      realm: 'freshwater',
      description:
        '卵产在潮湿陆地微生境；孵化后由雄蛙把蝌蚪背到林下水体，幼体在水中继续发育。成蛙并非长期水栖。',
    },
  ],
  measurements: {
    length: {
      min: 37,
      max: 47,
      unit: 'mm',
      note: '成体吻肛长；雌性通常稍大，不是包括后肢的全长',
    },
  },
  diet: {
    types: ['insectivore'],
    foods: ['小型陆生节肢动物'],
    description:
      '在林地表面捕食小型节肢动物；物种级定量食谱仍不足。皮肤生物碱从食物中摄取和储存，但哥伦比亚野外提供蛙毒素的具体猎物尚未确定。',
  },
  activity: ['日行性', '地表落叶层活动', '雄性颤音鸣叫与领域互动', '雄性背负蝌蚪'],
  tags: ['哥伦比亚特有种', 'IUCN 濒危', '警戒色', '膳食来源皮肤生物碱', '雄性育幼运输', 'CITES 附录 II'],
  summary: '以明亮警戒色、膳食来源的皮肤生物碱和雄性背负蝌蚪闻名的哥伦比亚窄域雨林蛙。',
  description:
    '成年金色箭毒蛙可呈均一的亮黄、橙金或绿乳白色，黑底金纹的幼体则会随成长换装。它白天在极湿雨林地表觅食，从小型节肢动物中摄取并储存防御性生物碱；具体提供蛙毒素的哥伦比亚猎物和它避免自体中毒的完整机制仍未知。雄蛙以颤音参与求偶和领域互动，并把孵化的蝌蚪背到水体。这个物种只分布在考卡省和考卡山谷省的一小片太平洋低地林，森林损失、采矿与污染会被狭窄范围进一步放大。',
  storySections: [
    {
      key: 'color-change',
      label: '外形与成长',
      title: '从黑底金纹，换成一身警戒色',
      body:
        '小幼蛙并不是成年蛙的纯黄色缩小版：它们以黑色为底，背外侧带金色纵纹，成长后逐渐变成较均一的亮黄、橙金或绿乳白色。醒目的成体色是警戒信号，却不能单凭颜色区分所有近缘叶毒蛙。',
    },
    {
      key: 'forest-floor',
      label: '活动与鸣叫',
      title: '它的舞台在落叶层，不在树冠',
      body:
        '金色箭毒蛙白天在极湿低地林的落叶、树根和低矮遮蔽物间活动。雄蛙会发出延续数秒的颤音吸引雌性，也会追逐、扭抱同类；这些行为说明它有领域互动，但我们仍不知道一个领域究竟有多大。',
    },
    {
      key: 'dietary-toxin',
      label: '食物与化学防御',
      title: '毒素不是凭空制造，而是从食物链中收集',
      body:
        '它捕食小型陆生节肢动物，再把膳食中的生物碱运输并储存在皮肤腺体。圈养繁殖、缺少相关生物碱食物的个体通常没有可检测蛙毒素；野外捕获个体却可能保留多年。究竟哪种哥伦比亚猎物提供蛙毒素，以及蛙如何避免自体中毒，都还没有最终答案。',
    },
    {
      key: 'tadpole-transport',
      label: '繁殖与育幼',
      title: '雄蛙把下一代背到水边',
      body:
        '雌蛙把一簇卵留在潮湿落叶间；半自然观察中，雄蛙在产卵后短暂返回润湿卵簇，之后并不持续守巢。临近孵化时，它再次回来，让幼体爬上背部并运到林下水体。当地约 16 年非系统观察多见一次背 2—9 只；2023 年记录的 16 只是异常高背负载荷，不能据此推断窝数。',
    },
    {
      key: 'narrow-range',
      label: '分布与生境',
      title: '世界地图上，只占哥伦比亚西岸的一小角',
      body:
        '它只见于考卡省和考卡山谷省太平洋侧的极湿低地林。已知研究地点低至海拔 25 米以下，北界由 DNA 证据向纳亚和尤鲁曼吉流域扩展；范围扩展并没有改变它仍是窄域特有种的事实。',
    },
    {
      key: 'conservation',
      label: '保护与治理',
      title: '保护落叶层，也保护管理森林的人',
      body:
        '砍伐、农业和非法作物扩张、采金及污染同时挤压有限生境。Eperãra Siaapidaarã 人民推动的 K´õk´õi Eujã 保护区把大片文化领地纳入国家保护地系统。未来还需要连通森林、控制污染、长期声学与种群监测，并让国际贸易的许可和创始谱系真正可追溯。',
    },
  ],
  keyFacts: [
    '只自然分布于哥伦比亚考卡省和考卡山谷省的太平洋低地雨林。',
    '成体吻肛长约 37—47 毫米；小幼体黑底带金色纵纹，长大后才转成较均一的警戒色。',
    '皮肤生物碱来自食物摄取与储存，但提供蛙毒素的哥伦比亚野外猎物仍未确定。',
    '圈养繁殖且缺少相关膳食生物碱的个体通常没有可检测蛙毒素；野外捕获个体可能在圈养多年后仍保留毒性。',
    '蛙毒素会使电压门控钠通道持续开放，但这只蛙避免自体中毒的完整机制仍未解决。',
    '雄蛙会把孵化后的蝌蚪背到林下水体；16 只是一次异常高背负纪录，不能据此推断窝数。',
  ],
  threats: [
    '农业、非法作物、采伐与聚落扩张造成低地雨林丧失和破碎化',
    '金矿开采及相关水土污染',
    '非法作物喷洒与其他农业污染',
    '极窄分布范围放大局地森林损失和污染事件的影响',
    '来源不明的创始谱系与非法采集造成贸易可追溯性风险',
  ],
  conservationActions: [
    '保护、恢复并连接萨伊哈—纳亚等流域的极湿低地森林',
    '支持 Eperãra Siaapidaarã 等当地社区和原住民治理保护地',
    '控制采金、砍伐、农业扩张与喷洒造成的水土污染',
    '开展不公开敏感点位的长期视觉、声学、占域与种群趋势监测',
    '执行 CITES 许可和创始谱系可追溯性，使保育繁殖补充而非替代原地保护',
  ],
  metrics: {
    adultLengthCm: [3.7, 4.7],
  },
  featuredStats: [
    {
      key: 'adult-svl',
      label: '成体吻肛长',
      value: '3.7—4.7',
      unit: '厘米',
      note: '可靠成体范围；不是包括后肢的全长',
    },
    {
      key: 'extent-of-occurrence',
      label: 'IUCN 分布范围',
      value: '约 1,473',
      unit: '平方千米',
      note: 'EOO 评估几何量，不是连续栖息地或保护区面积',
    },
    {
      key: 'documented-elevation',
      label: '可靠研究地点海拔',
      value: '<25—200',
      unit: '米',
      note: '下限是“低于 25 米”，不等于 0 米实测',
    },
    {
      key: 'tadpole-load',
      label: '非系统观察多见',
      value: '2—9',
      unit: '只蝌蚪',
      note: '来自当地约 16 年观察；2023 年 16 只为异常最高纪录',
    },
  ],
  media: {
    image: './images/species/golden-poison-frog/01-leaf-litter-portrait.webp',
    alt: '潮湿低地雨林的落叶层上，一只通体金黄色的金色箭毒蛙位于画面右侧',
    focalPoint: { x: 0.69, y: 0.57 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/golden-poison-frog/02-leaf-litter-foraging.webp',
        alt: '一只金黄色箭毒蛙伏低身体，在湿润落叶层中搜索微小节肢动物',
        title: '落叶层里的觅食',
        caption: '它捕食小型陆生节肢动物；画面中的蚁形猎物只是场景示意，并非本种野外食谱或蛙毒素来源的确认。',
        focalPoint: { x: 0.63, y: 0.5 },
      },
      {
        image: './images/species/golden-poison-frog/03-lowland-rainforest-habitat.webp',
        alt: '极湿低地雨林的板根与浅水渗流旁，一只金黄色箭毒蛙在落叶层中显得很小',
        title: '一小片极湿低地林',
        caption: '成蛙在陆地落叶层活动，雄蛙再把孵化的蝌蚪送往林下水体；两个生态域在同一段生命史中相连。',
        focalPoint: { x: 0.62, y: 0.62 },
      },
      {
        image: './images/species/golden-poison-frog/04-subtle-calling.webp',
        alt: '一只雄性金色箭毒蛙在湿润树根旁抬起前身，闭口鸣叫时喉部轻微扩张',
        title: '落叶间的颤音',
        caption: '雄蛙以延续数秒的颤音参与求偶和领域互动；叫声会随温度、地点和个体而变化。',
        focalPoint: { x: 0.4, y: 0.55 },
      },
      {
        image: './images/species/golden-poison-frog/05-terrestrial-egg-clutch.webp',
        alt: '卷曲落叶下，一只雄性金色箭毒蛙停在一簇含深色胚胎的透明胶质卵旁',
        title: '卵留在潮湿陆地',
        caption: '半自然观察显示雄蛙会短暂返回润湿卵簇，但不会持续守巢；临近孵化时，它再次回来让幼体上背并承担运输。',
        focalPoint: { x: 0.5, y: 0.5 },
      },
      {
        image: './images/species/golden-poison-frog/06-male-tadpole-transport.webp',
        alt: '一只雄性金色箭毒蛙背负六只深色蝌蚪，朝林下浅水体移动',
        title: '雄蛙背上的旅程',
        caption: '当地约 16 年非系统观察多见雄蛙一次背 2—9 只蝌蚪；画面中的六只处于这一观察区间。',
        focalPoint: { x: 0.46, y: 0.5 },
      },
    ],
  },
  sources: GOLDEN_POISON_FROG_SOURCES,
  featured: true,
  publishedAt: CONTENT_DATE,
  updatedAt: GOLDEN_POISON_FROG_CONTENT_DATE,
}
```

`center: { lat: 3.1, lng: -77.3 }` 只是让地图打开哥伦比亚太平洋低地的粗粒度焦点，不是分布几何中心、热点、保护区入口或可前往寻找个体的位置。最终素材采用金黄色成体，`media.alt` 与实际可见颜色一致；若未来更换为橙金或绿乳白成体，替代文本也必须同步更新。

## 来源清单

以下来源均于 **2026-08-16** 访问；优先列稳定 DOI、机构物种页和正式文档。

| 主题 | 来源与稳定 URL | 用途与边界 |
| --- | --- | --- |
| 当前接受分类 | [AMNH Amphibian Species of the World — *Phyllobates terribilis*](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Dendrobatoidea/Dendrobatidae/Dendrobatinae/Phyllobates/Phyllobates-terribilis) | 接受名、作者、上级分类、模式产地、哥伦比亚特有性与概括分布 |
| 最新属级修订 | [Amézquita et al. 2024](https://doi.org/10.3897/zookeys.1212.126733) | 新近缘种、系统关系、颜色鉴定边界；不改变本种接受名 |
| 全球红色名录 | [IUCN SSC Amphibian Specialist Group](https://doi.org/10.2305/IUCN.UK.2017-3.RLTS.T55264A85887889.en) | 全球 EN、下降趋势、B1ab(iii)；卷期为 2017-3，不含 B2 |
| IUCN 年份元数据 | [Crossref DOI record](https://api.crossref.org/works/10.2305%2FIUCN.UK.2017-3.RLTS.T55264A85887889.en) | `issued` 2016-08-04 与 2017 引用年份的区分；只供内部字段口径 |
| IUCN 范围复核 | [WCS Colombia](https://colombia.wcs.org/en-us/WCS-VISUAL/Photo-Gallery/Poison-Dart-Frogs-of-Colombia.aspx) | EOO 1,473 平方千米、考卡/考卡山谷与当前威胁复述 |
| 哥伦比亚国家状态 | [Resolución 0126 de 2024](https://www.minambiente.gov.co/wp-content/uploads/2024/02/Resolucion-0126-de-2024.pdf) | 现行国家 EN 与西班牙语官方俗名；更新旧国家 CR |
| 国际贸易地位 | [CITES — *Phyllobates*](https://cites.org/eng/taxonomy/term/4836) | 属级附录 II；不是禁贸 |
| 原始描述 | [Myers, Daly & Malkin 1978](https://hdl.handle.net/2246/1286) | 最大 SVL、成幼颜色、鸣叫、行为、蝌蚪运输、传统利用与单个毒素高值 |
| 分布北扩 | [Márquez et al. 2012](https://doi.org/10.13128/Acta_Herpetol-11387) | DNA 确认纳亚/尤鲁曼吉个体、北扩约 60 千米、两省分布与敏感坐标处理 |
| 种群与生境 | [Alzate-Lozano et al. 2018](https://doi.org/10.21068/c2018.v19n01a09) | 成体尺寸、低于 25 米地点、落叶层、改造林容忍边界及局地短期种群估计 |
| 雄性卵期照料 | [Zimmermann & Zimmermann 1985](https://salamandra-journal.com/index.php/contents/1985-vol-21/1115-zimmermann-h-e-zimmermann-1/file) | 半自然观察中的一次性润湿、无持续守巢与雄性专属运输；不外推为野外窝卵参数 |
| 雄性蝌蚪运输 | [Duarte-Marín et al. 2024](https://www.biotaxa.org/hn/article/download/85203/81250) | 55 米地点、晨间观察、雄性运输、当地约 16 年非系统观察多见 2—9 只及异常 16 只 |
| 野外与圈养毒性 | [Daly et al. 1980](https://doi.org/10.1126/science.6246586) | 圈养 F1 无可检测 BTX、野捕个体可多年保留及早期生理实验 |
| 膳食摄取 | [Daly et al. 1994](https://doi.org/10.1016/0041-0101(94)90335-2) | 生物碱摄取、选择性转运与皮肤储存 |
| BTX 猎物假说 | [Dumbacher et al. 2004](https://doi.org/10.1073/pnas.0407197101) | 新几内亚甲虫实证、哥伦比亚近缘甲虫仅为待检验假说、钠通道作用 |
| 自体耐受机制 | [Abderemane-Ali et al. 2021](https://doi.org/10.1085/jgp.202112872) | 反驳单一 N→T 通道突变解释，提出隔离/毒素结合方向；尚无 BTX 结合蛋白 |
| 保护地与行动框架 | [IUCN SSC Amphibian Conservation Action Plan 2024](https://portals.iucn.org/library/sites/library/files/documents/SSC-OP-057-En.pdf) | Ranita Terribilis 与 K´õk´õi Eujã 的面积、年份和保护类型 |
| K´õk´õi Eujã 法定文件 | [哥伦比亚 RUNAP/CRC 协议](https://runapadmin.parquesnacionales.gov.co/default/general/descargardocumento?did=2081) | 11,641 公顷、纳入国家保护地系统、原住民领地与管理要求 |
| 国际贸易网络 | [Forero-Medina et al.](https://doi.org/10.1111/csp2.13283) | CITES 1987—2022 数据、合法出口前交易、非分布国创始来源与可追溯性 |

## 仍然不确定或需后续更新的事项

- **IUCN assessment date**：DOI 注册元数据支持 2016-08-04，正式引用为 2017-3；因本次无法直接下载 IUCN 页面，取得评估 PDF/导出后应优先核对其 `year_assessed` 或 assessment date，而不是机械沿用引用年。
- **IUCN 是否已经进入再评估流程**：截至 2026-08-16 未发现取代 e.T55264A85887889 的公开新评估。IUCN 一旦发布新记录，状态、标准、EOO、趋势和威胁须整组更新。
- **全球种群量**：没有可靠全范围成熟个体数字。2018 年的 32.5 ± 4.3 只是一个月、三个各 1,000 平方米样地的局地模型估计。
- **分布与海拔边界**：已知研究地点从低于 25 米到 200 米，但北、南边界和真实占域仍不完整；“低于 25 米”没有给出精确最小值，更不是 0 米实测，因此当前 schema 下应留空 `elevationM`，只在文案中保留证据边界。
- **颜色与地点关系**：亮黄、橙金和绿乳白均有野外资料，但商业品系命名、混养和新近缘种让“颜色等于产地”的推断不可靠。
- **野外定量食谱**：当前只稳妥支持“小型陆生节肢动物”；蚂蚁、螨、甲虫和白蚁来自毒蛙类群资料，不能在缺少本种野外胃含物证据时当作已确认食物清单。
- **BTX 的直接食物来源**：膳食摄取已证实，哥伦比亚野外提供 BTX 的具体猎物没有被鉴定；新几内亚 *Choresine* 不能直接代入。
- **自体耐毒**：单一钠通道突变解释不成立，隔离和“毒素海绵”仍是机制假说；尚无已验证的 BTX 结合蛋白。
- **繁殖参数**：窝卵数、孵化时间和卵期照料细节主要来自早期圈养或半自然观察；雄性野外运输有直接证据，但运输距离、选水规则和变态成功率未知。
- **鸣叫参数**：约 13 音符/秒、6 秒、1.8 kHz 是历史条件下的描述，缺少跨地点、温度和个体的大样本，不宜做固定比较指标。
- **体重与寿命**：本次没有找到足够可靠的物种级野外范围，正确处理是留空，而不是从宠物护理或动物园页补数。
- **改造林容忍度**：单一地点研究显示部分容忍，不代表严重碎片化、农田或污染环境仍可维持种群；需要跨年、跨地点验证。
- **威胁相对强度**：森林丧失、采矿与污染已被稳定列出，但每项造成的死亡率或繁殖损失未量化；贸易数据能揭示来源问题，不能直接估算野外采集造成的当前下降比例。
- **保护成效**：建立保护区不等于种群已经恢复。K´õk´õi Eujã 内外仍需长期占域、声学、人口统计和水质监测，且结果不应公开敏感点位。
