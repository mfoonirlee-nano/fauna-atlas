# 非洲巨蛙（*Conraua goliath*）完整档案研究

- 检索与核验日期：2026-08-27
- 使用范围：为 `src/data/species.ts` 新增完整 `Species` 记录，并约束 1 张封面、5 张图库图、六段故事和四项展示数字
- 分类口径：Amphibian Species of the World 当前接受名与 Blackburn et al. 2020 的属级系统发育；不沿用旧文献的 Ranidae、Petropedetidae 或 *Rana goliath* 组合
- 保护口径：结构化字段只记录 IUCN 于 2018-11-26 完成、2019-1 版发布的全种全球评估
- 证据标准：分类、保护状态、分布和法律状态优先采用 AMNH、IUCN、CITES、喀麦隆法规与 USFWS；体尺、生态、筑巢和猎捕采用同行评议原始研究
- 数字原则：历史标本极值、吉尼斯圈养后称重纪录、猎人估重、单河段观察数和全球种群减少推断不能互换。产品展示任何一个数字时都必须保留样本、地点、时间或推断边界。

## 结论摘要

1. 当前接受名为 ***Conraua goliath* (Boulenger, 1906)**，分类链为动物界—脊索动物门—两栖纲—无尾目—巨谐蛙科—巨谐蛙属。原始组合是 *Rana goliath*；AMNH 当前把它放在单属科 Conrauidae 中。[Amphibian Species of the World](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Conrauidae/Conraua/Conraua-goliath) [Blackburn et al. 2020](https://doi.org/10.1111/zsc.12447)
2. 全种 IUCN 字段固定为 **`EN / decreasing / 2018 / A2d`**。评估日在 2018-11-26，2019 是发布年；不能把 `assessedYear` 填成 2019，也不能沿用 2004 年旧评估的 `A2d+3d`。[IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) [IUCN DOI](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T5263A96062132.en)
3. IUCN 判断过去三代、即约 15 年内成熟个体因过度捕捉减少超过 **70%**；这是一项基于利用压力的种群减少判断，不是同步普查。全球成熟个体数量仍未知，`estimatedMatureIndividuals` 应留空。[IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf)
4. 已确认自然分布只包括喀麦隆西南部和赤道几内亚大陆部，约从 Nkongsamba 向南延伸到 Monte Alén，海拔低于 1,000 米。加蓬只有“可能存在”的争议记录，不能加入 `countries` 或确定分布正文。[Amphibian Species of the World](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Conrauidae/Conraua/Conraua-goliath) [IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf)
5. 物种依赖低地雨林中清洁、富氧、常年流动的岩石河流、急流、瀑布和相连缓流池。成蛙也进入河岸林地，幼体、亚成体与大成体使用不同流速和岩石微生境，因此 `realms` 应同时包含 `freshwater` 与 `terrestrial`。[Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf) [IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf)
6. 可核验的科学记录分属不同样本：2021—2022 年喀麦隆三地 139 只样本中，最大吻肛长为 **33.5 厘米**，该只重 2.529 千克；2003 年另有一只交配雄蛙为 33 厘米、3.22 千克；1960 年 Nkombia 个体捕获时为 32 厘米、**3.3 千克**。前两项说明最长记录，后一项仍是排除商业纪录后的较高科学体重记录；都只是样本极值，不是普通范围或生理绝对上限。吉尼斯的 36.83 厘米、3.66 千克不是原始科学论文记录，网页日期也自相矛盾，只能单列为商业纪录声明。[Monthe et al. 2023](https://doi.org/10.14302/issn.2691-6622.ijar-23-4578) [Herrmann 2008 — SSAR issue PDF](https://www.dropbox.com/s/mq8xooehydzzabg/HR%20v39%20n1%20Mar08%20ebook.pdf?dl=1) [Sabater-Pi 1972 field account](https://bcnroc.ajuntament.barcelona.cat/jspui/bitstream/11703/93720/1/19776.pdf) [Guinness World Records](https://www.guinnessworldrecords.com/world-records/71035-largest-frog)
7. 成蛙是肉食者，已记录陆生节肢动物、淡水甲壳类、蜗牛和其他蛙类。旧说“蝌蚪只吃 *Dicraea warmingii*”证据不足：该植物名的现代分类和地理分布都与产地冲突，只能写成蝌蚪刮食急流岩面附着水生植物，可能属于河川草科 Podostemaceae，确切种未定。[Sabater-Pi 1985](https://doi.org/10.1163/156853885X00047) [AmphibiaWeb](https://amphibiaweb.org/species/4691)
8. 2019 年 Mpoula 河研究沿 400 米河段登记 **22 个筑巢地点，其中 19 个为完整、可用的巢池**，归纳出利用天然岩池、改造岸边浅池和在砂砾中围石成池三型。研究者没有直接看到蛙搬石或挖池；“移动最重约 2 千克石块”来自翻动痕迹和访谈推断。[Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528) [开放全文](https://media.rufford.org/media/project_reports/Journal%20of%20natural%20History%202019%2C%20Vol.%2053%2C%20No.%2021-22%2C%201263-1276.pdf)
9. 同一研究的红外相机只记录到一只**性别未知**的成蛙整夜停留在巢边或三米内；当地访谈提供了雄蛙建巢、雌蛙守巢的说法，但论文明确表示建巢和守巢者的性别未定。图文不得写成已证实的雌雄分工，也不能画“雄蛙用手举石”。[Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528)
10. 主要威胁是为家庭食用和野味市场猎捕，活体贸易与河流、河岸森林退化叠加。2023 年研究访谈 223 人并跟随 7 名猎人，两个猎季中检查到 192 只猎获物；这证明局地猎捕压力，不是全分布区年捕获量。喀麦隆自 2020 年把本种列为 A 类全面保护动物；截至 2026-08-27，它仍**不在 CITES 附录**，但列入欧盟野生动物贸易条例附件 B，美国 ESA 状态为 Threatened。[Taboue et al. 2023](https://doi.org/10.1017/S0030605323000224) [喀麦隆 2020 法规](https://leap.unep.org/en/countries/cm/national-legislation/arrete-ndeg0053minfof-du-1er-avril-2020-fixant-les-modalites-de) [CITES nomenclature note](https://cites.org/sites/default/files/eng/cop/17/WorkingDocs/E-CoP17-81-01-A5.pdf) [USFWS](https://www.fws.gov/species/goliath-frog-conraua-goliath)

## 名称与分类

### 接受名和分类链

Amphibian Species of the World 当前记录：

- 接受名：*Conraua goliath* (Boulenger, 1906)
- 原始组合：*Rana goliath* Boulenger, 1906
- 正模：BMNH 1906.5.28.86，后重新登记为 1947.2.1.84
- 模式产地：喀麦隆南部 Efulen
- 科：Conrauidae
- 属：*Conraua*

仓库分类链建议为 `Animalia / Chordata / Amphibia / Anura / Conrauidae / Conraua`。中文主名沿用 TODO 的“非洲巨蛙”；“巨谐蛙”可作别名。不要使用容易与 *Pyxicephalus adspersus* 混淆的“非洲牛蛙”。[Amphibian Species of the World](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Conrauidae/Conraua/Conraua-goliath)

### 旧组合和系统发育边界

旧资料会把本种写作 *Gigantorana goliath*、*Paleorana goliath* 或 *Rana (Conraua) goliath*，并曾置于 Ranidae 或 Petropedetidae。Blackburn et al. 的多基因系统发育支持 *Conraua* 的独立演化支系，并把 *C. goliath* 与 *C. robusta* 恢复为近缘种关系。档案只保留当前接受名，旧组合进入来源说明，不进别名搜索字段。[Blackburn et al. 2020](https://doi.org/10.1111/zsc.12447)

ASW 截至核验日承认 Conrauidae 内一个属、8 个种。这个数字适合分类背景，不作为非洲巨蛙自身的 featured stat；未来属内拆分或新种发表时也不应自动改动本种的 IUCN 字段。[Conrauidae — Amphibian Species of the World](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Conrauidae)

## IUCN、种群与法律状态

### 正式 IUCN 字段

截至 IUCN Red List 2026-1，本种当前全球条目仍是 assessment id 96062132、taxon id 5263 的 2019 发布记录；没有更晚的全球重评覆盖它。[IUCN DOI](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T5263A96062132.en) [IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf)

| 字段 | 落库值 | 边界 |
| --- | --- | --- |
| code | `EN` | 全球全种 |
| trend | `decreasing` | IUCN 当前趋势字段 |
| assessedYear | `2018` | 评估日 2018-11-26；2019 是发布年 |
| criteria | `A2d` | 过去三代的减少，主要依据实际或潜在利用水平 |

IUCN 采用每代 5 年、三代 15 年的时间窗，推断成熟个体已减少超过 70%，主要驱动是过度捕捉。`A2d` 不等于“全球逐只数过并精确下降 70%”，更不应改写成当前每年下降率。2004 年旧条目为 `A2d+3d`，不能把旧的未来减少准则拼回现行代码。[IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf)

### 数量、遇见率与外推边界

IUCN 没有给出全球成熟个体区间。2022 年研究在 2014—2019 年间调查 13 条河流、累计 26.7 千米和 100 人时，记录 490 次遇见，其中 243 次被研究者划为成体、170 次亚成体、77 次幼体。这是跨地点、跨年份的**遇见记录**，不是 490 只全球总数，也不能证明每次观察都是不同个体。[Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf)

该研究的操作性年龄级以吻肛长划分：成体至少 19 厘米、亚成体 10—18 厘米、幼体不超过 9 厘米。它适合解释调查方法，不是全种性成熟阈值的实验验证，也不应填入 `measurements` 的“成年最小值”。靠近居民点的河段大个体更少，离居民点较远的地点遇见率和个体尺寸增加；这与猎捕压力一致，但研究也提醒局地生境质量、流速和岩石结构共同影响可见度与占据。[Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf)

### 法律与贸易状态

喀麦隆 2020 年第 0053/MINFOF 号命令把野生动物分为保护等级。Taboue et al. 明确记录非洲巨蛙属于 A 类，原则上禁止猎捕、捕获、持有和交易，除非依法获得特定豁免。法律保护存在并不代表猎捕已经停止；同一研究在受访社区仍记录家庭食用、转售和多种捕猎工具。[喀麦隆法规索引](https://leap.unep.org/en/countries/cm/national-legislation/arrete-ndeg0053minfof-du-1er-avril-2020-fixant-les-modalites-de) [官方 PDF](http://faolex.fao.org/docs/pdf/cmr240488.pdf) [Taboue et al. 2023](https://doi.org/10.1017/S0030605323000224)

截至 2026-08-27，本种不在 CITES 附录；核验采用 2026-03-05 生效的现行附录。1992 年 CoP8 曾有附录 II 提案，后来撤回；不能把历史提案写成现行列入。CITES 的官方命名资料注明本种仅受欧盟 Regulation 338/97 管制而非 CITES，同行评议贸易综述也将其列为欧盟附件 B。CITES Trade Database 中出现记录并不证明该物种是 CITES 附录物种。[CITES 2026 Appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CITES CoP8 Proposal 56](https://cites.org/sites/default/files/eng/cop/08/prop/E08-Prop-56_Conraua.PDF) [CITES nomenclature note](https://cites.org/sites/default/files/eng/cop/17/WorkingDocs/E-CoP17-81-01-A5.pdf) [Auliya et al. trade review](https://cites.org/sites/default/files/common/docs/meeting_info/amphibians/2023_Auliya%20etal_uncertainties-in-frogs-legs-trade_NatCons.pdf)

美国鱼类及野生动物管理局于 1994 年把本种列为 Threatened wherever found；这是美国 ESA 法律状态，不等于 IUCN 的全球 EN，也不改变喀麦隆或赤道几内亚国内法。[USFWS species page](https://www.fws.gov/species/goliath-frog-conraua-goliath) [1994 final rule](https://archives.federalregister.gov/issue_slice/1994/12/8/63258-63264.pdf)

## 分布与生境

### 已确认范围

已确认范围位于下几内亚森林带：从喀麦隆西南部 Nkongsamba 一带向南，延至赤道几内亚大陆部 Monte Alén；IUCN 估计出现范围 EOO 为 **79,838.91 平方千米**，并把上限海拔列为 1,000 米。2022 年实地样点位于海拔 39—677 米，但这个样点范围不能替代 IUCN 的全种上限。[IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) [Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf)

ASW 把喀麦隆与赤道几内亚列为原生常驻国，把加蓬列作 likely/controversially present；IUCN 也只写“可能进入加蓬”。结构化 `countries` 只填前两国，`range` 末尾可注明加蓬尚未确认。[Amphibian Species of the World](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Conrauidae/Conraua/Conraua-goliath)

### 三类相连生境

1. **岩石急流、瀑布和瀑布下深潭**：大型成蛙常停在急流边岩石或瀑布附近，水体需要常年流动、较清洁、富氧；这是核心淡水生境。
2. **岸边缓流池、岩池和砂砾浅池**：卵、蝌蚪、变态幼体和较小个体利用与主河道相连但流速较低的水域；部分池也会被成蛙清理或改造为产卵地。
3. **潮湿河岸雨林**：成蛙夜间沿河岸和林地活动。物种可以出现在次生林或农林复合景观，但前提是相连的岩石河段仍在；严重退化的“农灌丛”不是等价替代生境。

IUCN 把生境系统同时列为陆地与淡水，2022 年调查也在夜间记录到距离河道超过 10 米的成蛙或亚成体。图像不能把它画成长期离水的林地牛蛙，也不能把它画成永不出水的完全水栖蛙。[IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) [Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf)

## 外形、体尺与图像鉴别

### 必须保留的外部特征

- 头部低平而宽，宽大于长；吻端短、钝尖，不是尖长树蛙吻或蟾蜍式圆头。
- 眼后鼓膜相对头部很小，位于一条从眼后延伸的显著皮褶下方；不能画成牛蛙那样巨大的圆鼓膜。
- 躯体厚重，背面及四肢外侧呈细颗粒或短脊状质感；没有蟾蜍的成对腮腺、角突或疣粒毒腺。
- 前肢较短而粗壮，前足四指，不应画成完全蹼足；后肢长而肌肉发达，后足五趾，厚实趾间蹼一直延伸到趾端的小圆盘。
- 背面常为深绿、橄榄绿至绿褐或带橙绿，伴较暗斑点和四肢横纹；腹部与肢体内侧偏黄色或黄橙色。不能使用鲜艳毒蛙配色。
- 成蛙无尾、无爪、无树蛙式吸盘、无角、无外露声囊。蝌蚪则有强壮尾部，二者不能混合成“有尾成年蛙”。[Sabater-Pi 1985](https://doi.org/10.1163/156853885X00047) [AmphibiaWeb](https://amphibiaweb.org/species/4691)

### 体尺的两级证据

Sabater-Pi 的 1985 年表 1 只有 15 只。表内最大吻肛长 32 厘米出现于两只不同个体：一只雌蛙重 3.250 千克，一只雄蛙重 2.760 千克。该文还把 1960 年 8 月 23 日在 Nkombia 捕获、当时重 3.300 千克的一只个体排除在表外，只重述体重并称其为当时假定的已知最大值。更早的原始现场记述补足了同一个体的尺寸：吻肛长 32 厘米、后腿 44 厘米、伸展总长 76 厘米。因此 **32 厘米与 3.3 千克可以配对到这只 1960 年个体**，但不能把它与 1985 年表内的 32 厘米、3.250 千克雌蛙混成同一数据行。[Sabater-Pi 1972 field account](https://bcnroc.ajuntament.barcelona.cat/jspui/bitstream/11703/93720/1/19776.pdf) [Sabater-Pi 1985](https://doi.org/10.1163/156853885X00047)

Herrmann 后来记录 2003 年 2 月 23 日凌晨发现的一对交配个体，其中雄蛙吻肛长 330 毫米、重 3,220 克。这把当时可追溯的已发表野外最长记录推进到至少 **33 厘米**；其 3.22 千克体重仍低于 1960 年那只独立标本的 3.3 千克。档案应分别展示“最长已发表野外记录”和“最重历史报告”，不宣称两项由同一个体同时保持。[Herrmann 2008 — SSAR issue PDF](https://www.dropbox.com/s/mq8xooehydzzabg/HR%20v39%20n1%20Mar08%20ebook.pdf?dl=1) [SSAR archive index](https://ssarherps.org/herpetological-review-pdfs/)

Monthe et al. 又在 2021 年 10 月至 2022 年 11 月间测量喀麦隆 Loum、Penja 和 Nlonako 的 139 只野外来源个体。吻肛长范围为 5.3—33.5 厘米，其中最大个体重 **2.529 千克**。这是目前检得原始论文样本中的更长实测值，仍只代表三地、限定采样期的最大样本，不是全种绝对上限，也不能把研究的 5.3—33.5 厘米直接标成“成年范围”。[Monthe et al. 2023](https://doi.org/10.14302/issn.2691-6622.ijar-23-4578)

吉尼斯记录的是另一只 1989 年 4 月在喀麦隆 Sanaga 河捕获的个体：吻肛长 36.83 厘米、伸腿总长 87.63 厘米，1989 年 10 月 30 日重 3.66 千克。页面摘要写 1989，元数据却写 1889，且重量在捕获约半年后才测得。可以在正文的“纪录边界”中介绍，不宜放入 `measurements`、`metrics` 或无注释的大标题。[Guinness World Records](https://www.guinnessworldrecords.com/world-records/71035-largest-frog)

推荐结构化处理：

- `measurements.length.max: 33.5 cm`，注明“2021—2022 年三地 139 只样本中的最大实测吻肛长；同只重 2.529 千克，不是普通成体范围或绝对上限”；
- `measurements.weight.max: 3.3 kg`，注明“1960 年一只 32 厘米个体捕获时体重；是历史记录，不是普通成体范围或绝对上限”；
- `metrics.adultLengthCm` 与 `metrics.adultMassKg` 留空，避免把小样本极值变成可排序的成年区间；
- `metrics.elevationM: [0, 1000]` 可保留为接近海平面至 IUCN 上限的概括，正文同时注明 2022 调查实测 39—677 米；
- 不采用猎人口述的“约 5 千克”旧日大蛙，因其不是可核验称重记录。[Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf)

## 食性与生活史阶段

### 成蛙：肉食，但不是“什么都吞”

Sabater-Pi 的历史胃肠内容研究由后续综述概括为约 60% 节肢动物、20% 甲壳类、10% 两栖动物、10% 无法确定的材料；石块、木片和叶片出现在无法确定组，不足以证明成蛙主动食草。较稳妥的野外食物包括昆虫、蚂蚁、蜻蜓与石蛾类、马陆、蜘蛛和蝎类、淡水虾、淡水蜗牛，以及较小的蛙或蝌蚪。圈养投喂小鼠不能写成自然野外主食。[Sabater-Pi 1985](https://doi.org/10.1163/156853885X00047) [AmphibiaWeb](https://amphibiaweb.org/species/4691)

结构化 `diet.types` 建议只用 `['carnivore']`。食物数组采用较高层级的“陆生节肢动物、淡水甲壳类、淡水蜗牛、其他蛙类”，不要加入未经同等证据支持的鱼、鸟、蛇或小型哺乳动物。

### 蝌蚪：植物食物已知到科级附近，种未定

1985 年论文把蝌蚪食物记为急流植物“*Dicraea warmingii*”，后来的网页不断把它压缩成“只吃一种植物”。AmphibiaWeb 核对指出两个问题：*Dicraea* 现被视为 *Podostemum* 的异名，而 *Podostemum* 不见于非洲；可能对应的 *Inversodicraea warmingiana* 又是安哥拉高海拔特有植物，与非洲巨蛙低地范围不符。因此现阶段最多能说：蝌蚪以角质颌鞘和多排唇齿刮食急流岩面附着的水生植物，可能属于河川草科 Podostemaceae，确切种类和是否专食仍未确定。[AmphibiaWeb](https://amphibiaweb.org/species/4691) [Sabater-Pi 1985](https://doi.org/10.1163/156853885X00047)

产品应在 `diet.description` 明写生活史转换：成蛙肉食，蝌蚪至少有植物性取食证据。不要为了覆盖幼体而把整个物种的 `types` 改为 `omnivore` 或 `herbivore`，也不要把 *Dicraea warmingii* 放入结构化 `foods`。

## 活动、发声与微生境分工

成蛙主要在夜间沿河岸和邻近林地活动，白天常伏在急流或瀑布附近的岩石上；2022 年研究记录超过 20 只个体白昼晒背，一只连续三天回到同一块岩石。受到惊扰时会跃入水中，有野外记录显示个体可在水面连续短跳。它也会暂时埋入砂砾、沉积物或落叶中。不要把“白天晒背”改写成昼行性，也不要把“主要夜行”写成白天绝不活动。[Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf) [AmphibiaWeb](https://amphibiaweb.org/species/4691)

年龄级表现出可重复的微生境分工：大成蛙多在瀑布、急流边的大岩石上，亚成体常占据河心露石，变态幼蛙和幼体更多停在河缘缓流池、石缝和浅水。画面若把一群不同年龄的大蛙平均铺满同一瀑布，会掩盖这一结构。[Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf)

早期资料曾把本种说成“不会叫”。AmphibiaWeb 汇总的野外和圈养记录包括哨音、短促啁啾和低沉声，广告叫声可持续较长时间并含约 4.1 kHz 高频成分。本种缺少典型外露声囊不等于沉默；产品可写“有发声记录，叫声功能与性别仍需更多野外验证”，不要写固定音量、固定时长或整个种的唯一叫声。[AmphibiaWeb](https://amphibiaweb.org/species/4691)

IUCN 将其列为非迁徙物种。河段之间的局地移动和上岸觅食不构成季节性长距离迁徙，`activity` 不应加入“迁徙”。[IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf)

## 繁殖与筑巢

### 2019 年研究实际看到了什么

Schäfer et al. 在喀麦隆 Penja 附近 Mpoula 河研究一段 400 米河道，2018 年 2—5 月完成 12 个调查日并进行了 4 个夜间调查。表格连续记录 22 个筑巢地点：19 个是圆形或椭圆形的完整、可用水池，3 个直径不足 60 厘米且未完成或未被使用。摘要使用“19 nests”，正文表格则把 22 个地点全部编号；档案应保留两层口径，不能写成互相矛盾的两个总数。[Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528)

19 个完整巢池平均最大直径 **102.8 ± 14.5 厘米**、最大观察直径 140 厘米，平均最大水深 **9.1 ± 2.1 厘米**。这些数据只来自一条河、一个繁殖季，适合说明巢池大致是“约一米宽、很浅的水池”，不能定义全种的固定巢尺寸。[Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528)

### 三类巢池

| 类型 | 研究计数 | 研究者的判断 | 图像边界 |
| --- | ---: | --- | --- |
| 1：清理天然岩池 | 2 | 利用既有岩石凹池，移除落叶和碎屑 | 不是新挖巨坑 |
| 2：扩大岸边浅池 | 14 | 利用天然冲刷或岸边浅洼，清理并扩大 | 应与主河道相邻 |
| 3：砂砾中围石成池 | 6 | 在砂、砾石底形成凹池，石块集中在边缘 | 不是高墙水坝或石屋 |

三类计数合计 22，包含未完成地点。所有类型的共同特征是底部缺少周边水池常见的落叶和碎屑，说明曾被清理。部分石块的翻面和位置显示近期移动，研究者推断最重约 2 千克；他们没有拍到实际搬运过程。[Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528)

### 卵、损失与守巢证据

卵在水下附着于清理后的岩石、卵石、枝叶等基质，可散布或成簇。研究记录 14 个活跃巢池和 27 次卵团事件，常见估数为 150—350 枚；两处估到 2,700—2,800 枚，但论文无法逐枚计数，巢池又会重复利用且最多可同时有三个蝌蚪龄组。不能把“2,800 枚”写成一只雌蛙的典型或确认单窝产卵量。[Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528)

27 次卵团中有 9 次在一两天内消失：3 次随涨水溢出、1 次巢池干涸、3 次被淡水虾捕食、2 次腐败。巢池可能降低主河道急流和部分捕食压力，却同时承受干涸与洪水；“建巢保证幼体安全”超出证据。[Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528)

夜间共在巢边记录 16 次成蛙出现。一台红外相机在一个巢边拍到一只性别未知的大成蛙从日落后不久至清晨活动，绝大多数时间位于巢内、边缘或三米范围；另一只更大的成蛙短暂靠近。直接证据支持“至少有成蛙夜间守在巢附近”，不支持“雌性固定守巢”或“雄性固定建巢”。访谈中的性别分工说法应明确标为当地知识线索。[Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528)

研究标题提出筑巢可能解释巨型化，讨论也认为移动大石可能让大体型具有优势。这是有趣的演化假说，不是因果实验结论。故事可用“巨型身体也许帮助它改造巢池”，不能写“科学家已经证明它为了搬石才进化成世界最大蛙”。[Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528)

## 威胁与保护

### 已有证据支持的威胁

1. **猎捕供家庭食用和野味交易**：IUCN 把过度捕捉视为过去 15 年减少超过 70% 的主要驱动；猎人主动选择最大个体，会优先移除繁殖成体。[IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) [Taboue et al. 2023](https://doi.org/10.1017/S0030605323000224)
2. **活体贸易**：本种因体型受到宠物和展示贸易关注。2023 年研究从 CITES 数据库汇总到至少 220 只从喀麦隆出口、另有 5 只错误标作加蓬来源；这些历史记录不等于当前合法 CITES 贸易，也不能证明加蓬有野生种群。[Taboue et al. 2023](https://doi.org/10.1017/S0030605323000224)
3. **森林转化、伐木、道路和居民点扩张**：可可、香蕉、油棕等农业和道路会破坏河岸林，并让猎人更容易进入偏远河段。2022 年研究显示，只要岩石急流仍在，本种可容忍一定次生林或农林环境；这不等于森林清除无害。[IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) [Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf)
4. **泥沙、化学品和农药进入水体**：上游侵蚀、农业投入和废物会改变水质、岩面附着植物、卵与蝌蚪生境。个别受影响河段仍见到蛙，不足以证明农药或污染无效应。[IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) [Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf)
5. **河流工程与流量改变**：筑坝、取水或河道改变可能淹没、干涸或切断急流—缓池组合。IUCN 要求研究水量与排放变化；产品宜写“潜在并需监测的生境威胁”，不要虚构已经量化的全种坝害死亡率。[IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf)

壶菌 *Batrachochytrium dendrobatidis* 的易感性仍需研究，不能把 Bd 写成已确认造成当前下降的因素。气候变化可能通过水温、极端流量和干季改变繁殖池，但现行 IUCN 评估没有把它量化为主要下降驱动；可进入研究行动，不宜与猎捕并列为已证实首要威胁。

### 可执行的保护行动

- 执行喀麦隆 A 类保护规定，针对收购、餐饮、道路运输和活体贸易建立可追溯执法；与社区共同设计替代收入和减少需求措施，而不是只处罚末端猎人。
- 保护相连的急流、瀑布、岩池、砂砾缓池和河岸林，控制伐木道路、泥沙、农药、废物排放、取水与拦河工程。
- 在低水位繁殖季保护已知巢区；公开产品不披露精确坐标，不以搬石、翻池或触摸卵团进行展示。
- 采用标准化夜间定时—定距搜索，至少连续五年记录地点、年龄级、体尺、巢池、猎捕与水质；把近居民点河段与偏远或保护地河段设为可比基线。[Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf)
- 优先研究蝌蚪食物的植物鉴定、幼体存活、成熟年龄、寿命、巢池建造者与守巢者性别、流量阈值、农药和 Bd 易感性。
- 任何圈养保育或人工繁殖都应作为野外保护的补充，保留来源、遗传分区、病原筛查和放归风险记录；不能用未验证的“大规模养殖”替代河流保护。

IUCN 确认本种出现在赤道几内亚 Monte Alén 国家公园，并推定喀麦隆若干保护地包含种群。2026 年 Amphibian Conservation Needs Assessment 为喀麦隆种群建议原地保护、原地研究、保护教育和审慎发展的圈养繁育。该工作坊结果是行动优先级，不是新 IUCN 重评，也不改变 2018 年结构化状态。[IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) [2026 Conservation Needs Assessment](https://www.conservationneeds.org/Assessment/AssessmentResults?AspxAutoDetectCookieSupport=1&assessmentId=6969&countryId=22&speciesId=5041)

## 六段故事建议

### 1. 世界最大，不等于每一只都像纪录保持者

非洲巨蛙是现生体型最大的蛙类。2023 年论文的 139 只样本中，最长一只为 33.5 厘米、2.529 千克；1960 年另一只个体为 32 厘米、3.3 千克。前者承担科学样本最长值，后者承担较高历史体重记录。更大的吉尼斯个体属于另一套商业纪录声明，来源和日期都有额外边界。故事从“最大”开场，但不把不同个体的极值拼成一只，也不把每只蛙都画成纪录体型。[Monthe et al. 2023](https://doi.org/10.14302/issn.2691-6622.ijar-23-4578) [Sabater-Pi 1972 field account](https://bcnroc.ajuntament.barcelona.cat/jspui/bitstream/11703/93720/1/19776.pdf) [Guinness World Records](https://www.guinnessworldrecords.com/world-records/71035-largest-frog)

### 2. 一副为急流长成的身体

低平宽头、颗粒状绿褐背部、强壮后肢和延伸到趾端的厚蹼，把它固定在下几内亚森林带的急流环境。大成蛙多伏在瀑布与急流边岩石上，幼体则躲进河缘缓池和石缝；同一条河并不是一块均匀的栖息地。[Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf)

### 3. 白天晒背，夜里沿河觅食

夜幕落下后，成蛙离开停栖岩石，沿潮湿河岸与邻近林地寻找节肢动物、淡水甲壳类、蜗牛和其他蛙。白天它仍会在岩石上晒背，受惊便跃入水中；“主要夜行”并不等于白天完全静止。[Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf) [AmphibiaWeb](https://amphibiaweb.org/species/4691)

### 4. 幼体吃的植物，名字仍是一道未解题

成蛙明确是肉食者，蝌蚪却会用角质口器刮食急流岩面的水生植物。流传最广的 *Dicraea warmingii* 名称与现代植物分类、地理分布冲突；最可靠的写法停在“疑似河川草科、确切种未定”。故事的重点不是一个听起来精确的拉丁名，而是科学如何识别旧记录的边界。[AmphibiaWeb](https://amphibiaweb.org/species/4691)

### 5. 一米宽的浅池，谁造的仍待目击

Mpoula 河的完整巢池平均约一米宽、九厘米深。研究记录到清理过的天然岩池、扩大的岸边浅洼，以及砂砾中的围石池；翻动痕迹暗示石块最重约两千克。一只性别未知的成蛙曾整夜守在巢边，但研究者没有直接拍到搬石，也没有确定建巢和守巢的雌雄分工。[Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528)

### 6. 最大的蛙，先被带走的也是最大个体

猎人偏好最大的成蛙，靠近居民点的河段也更少见大个体。法律已经保护它，猎捕和交易却没有随条文消失；河岸林、急流、缓池与水质又必须一起保住。长期夜间重复调查、社区参与、贸易追踪和繁殖河段保护，才能把“下降超过 70%”之后的变化重新量出来。[IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) [Taboue et al. 2023](https://doi.org/10.1017/S0030605323000224) [Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf)

## 四项 featured stats 建议

| key | label | value | unit | 必须保留的 note |
| --- | --- | ---: | --- | --- |
| `published-sample-max-svl` | 论文样本最长吻肛长 | `33.5` | 厘米 | 2021—2022 年喀麦隆三地 139 只样本中的最大值；同只重 2.529 千克，不是绝对上限 |
| `historical-max-mass` | 历史较高体重记录 | `3.3` | 千克 | 1960 年 Nkombia 一只 32 厘米个体；不是平均、常见上限或绝对上限 |
| `iucn-three-generation-decline` | IUCN 三代减少判断 | `>70` | `%` | 三代约 15 年、截至 2018 评估的推断，不是同步普查或当前年下降率 |
| `nest-construction-types` | 巢池改造方式 | `3` | 类 | 2018 年 Mpoula 河 400 米研究河段归纳；不是全分布区固定比例 |

不建议把吉尼斯 36.83 厘米或 3.66 千克放进 featured stats。用户一眼看到的数字应当可在同行评议自然史或 IUCN 正式评估中直接落脚，纪录值留在体尺故事中讨论即可。

## 六帧原创图像与科学边界

### 共通规格

- 源图：`src/assets/source/species/goliath-frog/*.png`
- 运行时图：`public/images/species/goliath-frog/*.webp`
- 固定尺寸：1536×1024，3:2 横构图；封面同时照顾居中 16:9 裁切
- 风格：自然史纪录摄影，潮湿热带光线；不加标题、刻度、箭头、徽标、坐标或可读文字
- 每帧只保留一个明确叙事焦点；生成图是科学约束下的视觉重建，不是物种出现记录、行为实证或调查照片
- 不使用人手托蛙、儿童抱蛙、料理、血腥猎捕、玻璃缸、动物园布景或夸张尺度对比

### 全组解剖验收

1. 成蛙无尾，头低平而宽、吻短钝；眼后鼓膜小，不能超过眼径或画成牛蛙式巨鼓膜。
2. 每只成蛙只有四肢：前足各四指，不能生成完全蹼化的“手掌”；后足各五趾，厚蹼延伸到趾端，趾端只有小圆盘，不是树蛙大吸盘。
3. 后肢长而肌肉发达，躯体厚重但仍具自然蛙类比例；不生成蟾蜍腮腺、背部角刺、爪、牙齿外露、鱼鳍或怪兽皮甲。
4. 背面为湿润的深绿、橄榄绿至绿褐，可有较暗斑点与细颗粒；腹面和内肢偏黄或黄橙。禁用霓虹蓝、鲜红毒蛙纹或非洲牛蛙的黄喉造型。
5. 比例通过周围石块、落叶和水纹自然传达，不放人手、尺子、硬币、兔子或婴儿；任何一帧都不能暗示所有成蛙达到 33.5 厘米或 3.3 千克。
6. 每帧只出现一只完整主蛙，除非最终资产已经明确需要极小背景个体；优先保持一蛙，避免多余、重叠或肢体融合。

### 分帧规划

| 帧与文件名 | 场景和构图 | 必须出现 | 禁止出现 |
| --- | --- | --- | --- |
| 01 `01-rapid-river-adult-cover` | 白昼低角度看一只成蛙伏在湿花岗岩或深色岩石上，旁侧是清洁、富氧的森林急流；主蛙偏右，左侧保留标题负空间 | 完整宽头、颗粒状绿褐背部、强壮长后肢和一只可辨全蹼后足；水花尺度自然 | 人、手、网、文字、巨型鼓膜、伸腿总长冒充吻肛长、瀑布前怪兽式占满画面 |
| 02 `02-adult-field-marks` | 三分之二侧背视角的单只成蛙，岩面背景简洁，景深让头、眼后皮褶、背部和后足同时清楚 | 小鼓膜、显著眼后褶、四指前足、五趾全蹼后足、黄橙内肢只作克制点色 | 解剖标线、文字标签、透明骨骼、两栖类混合特征、前足全蹼、树蛙吸盘 |
| 03 `03-rainforest-rapids-habitat` | 低地雨林中的连续急流—瀑布—缓池系统，单只成蛙自然伏在急流边岩石上，环境至少占画面 80% | 清洁流动水、岩石、潮湿河岸林、与主河相连的缓流微生境 | 红树林、稀树草原、大河泥滩、静止沼泽、农场池塘、远离水体的蛙 |
| 04 `04-nocturnal-forest-foraging` | 夜间河岸林地，一只成蛙在距离可见河流不远的湿落叶层缓慢移动；柔和野外照明，不模拟捕猎闪光 | 完整蛙、潮湿叶层、邻近流水线索；不展示猎物或捕食结果 | 吞鼠、捕鸟、吃蛇、血腥猎食、夸张弹舌、任何可辨猎物、把植物画成成蛙食物 |
| 05 `05-cleared-gravel-nest-pool` | 夜间一只性别未知成蛙停在约一米宽、约十厘米深的清理砂砾浅池边；巢池与主河道相邻 | 低矮石缘、清理过的砂砾底；蛙在池边而不是实施搬石，不展示卵或蝌蚪 | “雄蛙/雌蛙”标签、蛙举石或用手砌墙、高水坝、石屋、卵团、蝌蚪、多人围观 |
| 06 `06-distance-night-river-survey` | 一名研究者在夜间从河岸安全距离用头灯目视搜索，远处一只完整成蛙仍在岩石上；环境与人物关系清楚 | 一人一蛙、无接触、稳定落脚、光束不刺眼、记录板无可读数据 | 抓捕、手持蛙、绑发射器、翻巢、踩入卵池、猎枪、网、多个调查员、具体地名或坐标 |

### 05 巢池专项验收

- 巢池是浅、低、与河相连的清理水洼，不是海狸坝、石墙水库、鸟巢或露出水面的卵盘。
- 只表现“已清理或改造后的结果”，不重建研究没有直接目击的搬石、推石、挖池动作。
- 成蛙性别不可由画面或文案确认；不显示婚垫、外露声囊或其他未经可靠描述的性别标志。
- 成片卵团和蝌蚪都不入画；这样不会把单窝数量、重复产卵或多个龄组误编码进一张重建图。
- 图注可说明论文记录过水下附着卵，但不能让没有卵的画面冒充卵团或孵化结果记录。

### 静态验收

1. 用 `file`、`identify` 或同类静态工具确认六张 PNG 与六张 WebP 都是 1536×1024、3:2、可解码，没有意外 alpha 或嵌入文本。
2. 逐张放大检查眼、鼓膜、前后足趾数、趾蹼、肢体连接和无尾成蛙轮廓；任何多趾、融合肢、双头或残尾都应返工。
3. 检查 01 封面的左侧负空间和居中 16:9 安全区；02 的小鼓膜与后足全蹼必须能辨认；03 的蛙不能大到盖过生境。
4. 检查 04 只表现潜在野外食物，05 不把推断行为或性别画成事实，06 只有远距观察、没有捕捉和处理。
5. 01 用作封面，图库依次使用 02—06；按最终构图设置 `focalPoint`，在测试中固定六条媒体路径和图库顺序。

## 推荐来源数组

```ts
const GOLIATH_FROG_SOURCE_DATE = '2026-08-27' as const;
const GOLIATH_FROG_CONTENT_DATE = '2026-08-27' as const;

const GOLIATH_FROG_SOURCES = [
  {
    title: 'IUCN Red List — Conraua goliath (assessed 2018, published 2019)',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T5263A96062132.en',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Amphibian Species of the World — Conraua goliath',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Conrauidae/Conraua/Conraua-goliath',
    kind: 'taxonomy',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Amphibian Species of the World — Conrauidae',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Conrauidae',
    kind: 'taxonomy',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Boulenger 1906 — Original description of Rana goliath',
    url: 'https://doi.org/10.1080/00222930608562529',
    kind: 'taxonomy',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Blackburn et al. 2020 — Evolution of African slippery frogs Conraua',
    url: 'https://doi.org/10.1111/zsc.12447',
    kind: 'taxonomy',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Sabater-Pi 1972 — Original field account for the 1960 Nkombia specimen',
    url: 'https://bcnroc.ajuntament.barcelona.cat/jspui/bitstream/11703/93720/1/19776.pdf',
    kind: 'ecology',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Sabater-Pi 1985 — Contribution to the biology of the Giant Frog',
    url: 'https://doi.org/10.1163/156853885X00047',
    kind: 'ecology',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Herrmann 2008 — Zoo-based In-situ Herpetology: Setting Baselines in Western Cameroon',
    url: 'https://www.dropbox.com/s/mq8xooehydzzabg/HR%20v39%20n1%20Mar08%20ebook.pdf?dl=1',
    kind: 'ecology',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'AmphibiaWeb — Conraua goliath species account',
    url: 'https://amphibiaweb.org/species/4691',
    kind: 'general',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Schäfer et al. 2019 — Goliath frogs build nests for spawning',
    url: 'https://doi.org/10.1080/00222933.2019.1642528',
    kind: 'ecology',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Gonwouo et al. 2022 — Status and ecological preferences of Goliath Frogs in Cameroon',
    url: 'https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf',
    kind: 'ecology',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Monthe et al. 2023 — Size structure and weight-length relationship in three Cameroon sites',
    url: 'https://doi.org/10.14302/issn.2691-6622.ijar-23-4578',
    kind: 'ecology',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Taboue et al. 2023 — Local perceptions, hunting and export in Cameroon',
    url: 'https://doi.org/10.1017/S0030605323000224',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Cameroon MINFOF 2020 — Order No. 0053 classifying protected wildlife',
    url: 'http://faolex.fao.org/docs/pdf/cmr240488.pdf',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'CITES CoP8 Proposal 56 — Historical Conraua goliath proposal',
    url: 'https://cites.org/sites/default/files/eng/cop/08/prop/E08-Prop-56_Conraua.PDF',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'CITES CoP17 nomenclature annex — Conraua goliath regulatory note',
    url: 'https://cites.org/sites/default/files/eng/cop/17/WorkingDocs/E-CoP17-81-01-A5.pdf',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'U.S. Fish and Wildlife Service — Goliath Frog ESA profile',
    url: 'https://www.fws.gov/species/goliath-frog-conraua-goliath',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
  {
    title: 'Amphibian Conservation Needs Assessment — Conraua goliath, Cameroon 2026',
    url: 'https://www.conservationneeds.org/Assessment/AssessmentResults?AspxAutoDetectCookieSupport=1&assessmentId=6969&countryId=22&speciesId=5041',
    kind: 'conservation',
    accessedAt: GOLIATH_FROG_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

不建议把 Guinness 加进 `SpeciesSource[]`：它只用于解释纪录边界，不承担结构化体尺。若产品希望专门展示“纪录史”，可再加入该链接，但测试必须同时固定“网页元数据日期冲突、体重非捕获当日值”的说明，不能只保留裸数字。

## 可直接用于 `species.ts` 的完整字段建议

```ts
{
  id: 'species-conraua-goliath',
  slug: 'goliath-frog',
  names: {
    zh: '非洲巨蛙',
    en: 'Goliath Frog',
    aliases: ['巨谐蛙', '歌利亚蛙', '巨型滑蛙', 'Giant Slippery Frog'],
  },
  scientificName: 'Conraua goliath',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Amphibia', '两栖纲'),
    taxon('Anura', '无尾目'),
    taxon('Conrauidae', '巨谐蛙科'),
    taxon('Conraua', '巨谐蛙属'),
  ),
  conservation: conservation('EN', 'decreasing', 2018, 'A2d'),
  distribution: {
    realms: ['freshwater', 'terrestrial'],
    continents: ['非洲'],
    regions: ['下几内亚森林带', '喀麦隆西南部', '赤道几内亚大陆部'],
    countries: ['喀麦隆', '赤道几内亚'],
    range:
      '已确认分布从喀麦隆西南部 Nkongsamba 一带向南延伸到赤道几内亚大陆部 Monte Alén，主要位于海拔 1,000 米以下、具有清洁岩石急流与相连河岸林的河段；加蓬记录仍未确认，不列作确定范围国。',
    center: { lat: 3.2, lng: 10.15 },
  },
  habitats: [
    {
      name: '雨林岩石急流、瀑布与深潭',
      realm: 'freshwater',
      description:
        '大型成蛙常停栖在清洁、富氧、常年流动的急流和瀑布边岩石；水温、流量、岩石结构和水质共同决定适生性。',
      isPrimary: true,
    },
    {
      name: '岸边缓流池、岩池与砂砾浅池',
      realm: 'freshwater',
      description:
        '与主河道相连的低流速浅池供卵、蝌蚪和幼体使用，部分天然水洼留下被清理或改造成产卵池的痕迹。',
    },
    {
      name: '潮湿低地河岸雨林',
      realm: 'terrestrial',
      description:
        '成蛙夜间沿河岸和邻近林地觅食；次生林或农林景观只有在岩石河道及河岸连续性仍在时才可能维持种群。',
    },
  ],
  measurements: {
    length: {
      max: 33.5,
      unit: 'cm',
      note: '2021—2022 年喀麦隆三地 139 只样本中的最大实测吻肛长；同只重 2.529 千克，不是普通成体范围或绝对上限',
    },
    weight: {
      max: 3.3,
      unit: 'kg',
      note: '1960 年 Nkombia 一只 32 厘米个体捕获时体重；是历史记录，不是普通成体范围或绝对上限',
    },
  },
  diet: {
    types: ['carnivore'],
    foods: ['陆生节肢动物', '淡水虾等甲壳类', '淡水蜗牛', '其他蛙类及蝌蚪'],
    description:
      '成蛙为肉食者，已记录昆虫、马陆、蛛形类、淡水甲壳类、蜗牛和其他蛙类。蝌蚪会刮食急流岩面水生植物，可能涉及河川草科，但确切种类和是否专食未定；旧名 Dicraea warmingii 不作为已确认食物。',
  },
  activity: ['主要夜行', '白天岩石晒背', '河岸林地觅食', '跃水逃逸', '成蛙巢边停留', '非迁徙'],
  tags: ['现生最大蛙类', 'IUCN 濒危', '急流专栖', '雨林河流', '筑巢池', '喀麦隆 A 类保护动物'],
  summary: '生活在喀麦隆与赤道几内亚雨林急流中的现生最大蛙类，会留下清理或改造过的浅水巢池，却正因猎捕与河流退化持续下降。',
  description:
    '非洲巨蛙只在下几内亚森林带一条狭长的跨境河流范围内得到确认。低平宽头、颗粒状绿褐背部、强壮后肢和延伸到趾端的厚蹼适应了岩石急流；大成蛙多守在瀑布与急流边，幼体则利用缓池和石缝。成蛙主要夜行并捕食节肢动物、淡水甲壳类、蜗牛和其他蛙，蝌蚪的植物食物仍只可靠到疑似河川草科。2019 年研究记录了被利用、清理或改造的三类浅水巢池，但搬石动作和雌雄分工尚未直接观察。IUCN 在 2018 年评为濒危 A2d、趋势下降，推断过去三代约 15 年成熟个体因过度捕捉减少超过 70%。',
  storySections: [
    {
      key: 'record-with-boundaries',
      label: '体尺与纪录',
      title: '世界最大，不等于每一只都是纪录个体',
      body:
        '2023 年论文的 139 只样本中，最长一只吻肛长 33.5 厘米、重 2.529 千克；1960 年另一只个体为 32 厘米、3.3 千克。吉尼斯另有更大声明，但来源与日期需要额外说明；不同个体的极值不能拼成一个“成年范围”。',
    },
    {
      key: 'torrent-built-body',
      label: '形态与生境',
      title: '一副为急流长成的身体',
      body:
        '低平宽头贴近湿岩，长而有力的后肢随时把身体送回水中，后足厚蹼一直延伸到趾端。大成蛙常停在瀑布和急流边，幼体却更多躲在河缘缓池与石缝；同一条河里，不同年龄各有位置。',
    },
    {
      key: 'night-riverbank',
      label: '活动与食性',
      title: '白天晒背，夜里沿河觅食',
      body:
        '夜幕落下，成蛙会走进潮湿河岸林地寻找节肢动物、淡水虾、蜗牛和其他蛙。白天它仍可能回到急流岩石上晒背，受惊时连续短跳入水；主要夜行不等于白天从不活动。',
    },
    {
      key: 'tadpole-food-question',
      label: '幼体食物',
      title: '一个植物名，留下了一道未解题',
      body:
        '蝌蚪用角质口器刮食急流岩面的水生植物。流传已久的 Dicraea warmingii 与现代植物分类和地理分布冲突；可靠结论只能停在“疑似河川草科、确切种未定”，更不能据此宣称蝌蚪只吃一个物种。',
    },
    {
      key: 'shallow-nest-pools',
      label: '繁殖与筑巢',
      title: '一米宽的浅池，谁造的仍待目击',
      body:
        'Mpoula 河研究归纳出三类巢池：清理过的天然岩池、扩大的岸边浅洼，以及砂砾中的围石浅池。石块翻动痕迹暗示最大约两千克，一只性别未知的成蛙也曾整夜停在巢边；研究者却没有直接拍到搬石，也没有确定雌雄分工。',
    },
    {
      key: 'largest-taken-first',
      label: '威胁与保护',
      title: '最大的蛙，先被带走的也是最大个体',
      body:
        '猎人主动寻找最大的成蛙，靠近居民点的河段也更少见大个体。喀麦隆已把本种列为 A 类全面保护动物，执法仍要与社区替代收入、贸易追踪、河流水质保护和连续多年的夜间调查一起推进。',
    },
  ],
  keyFacts: [
    '论文样本最长记录为一只 33.5 厘米、2.529 千克个体；较高历史体重记录是另一只 32 厘米、3.3 千克个体。',
    '大成蛙、亚成体和幼体分别偏好急流大岩、河心露石和河缘缓池等不同微生境。',
    '成蛙肉食，蝌蚪刮食水生植物；旧称 Dicraea warmingii 的确切植物身份仍未解决。',
    '2019 年研究登记 22 个筑巢地点，其中 19 个完整可用，并归纳出三类巢池改造方式。',
    '筑巢者和守巢者性别仍未确定，研究者也没有直接目击蛙移动最重约两千克的石块。',
    'IUCN 推断截至 2018 年的过去三代约 15 年内，成熟个体因过度捕捉减少超过 70%。',
  ],
  threats: [
    '为家庭食用和野味市场猎捕，且猎人偏好最大的繁殖成体',
    '面向宠物、展示和区域市场的非法活体捕捉与交易',
    '可可、香蕉、油棕等农业扩张造成的河岸林转化',
    '伐木、道路和居民点扩张破坏生境并增加猎人进入机会',
    '侵蚀泥沙、农药、化学品和废物进入繁殖河流',
    '筑坝、取水和河道改造引起的流量与急流—缓池结构变化',
    '狭窄分布、全球数量未知及长期标准化监测不足',
  ],
  conservationActions: [
    '执行喀麦隆 A 类保护规定，追查收购、餐饮、道路运输和活体贸易链',
    '与河流社区共建替代收入、减少需求和长期保护协议',
    '保护急流、瀑布、岩池、砂砾缓池与河岸林的连续组合',
    '控制伐木道路、泥沙、农药、废物排放、取水与拦河工程',
    '繁殖季保护巢区并避免公开精确坐标、翻动巢池或触摸卵团',
    '连续至少五年开展标准化夜间河段调查，记录年龄级、体尺、巢池、猎捕与水质',
    '研究蝌蚪食物、成长与成熟、守巢性别、流量阈值、农药和 Bd 易感性',
    '仅在遗传来源、病原筛查和放归风险可管理时把圈养繁育作为野外保护补充',
  ],
  metrics: {
    elevationM: [0, 1000],
  },
  featuredStats: [
    {
      key: 'published-sample-max-svl',
      label: '论文样本最长吻肛长',
      value: '33.5',
      unit: '厘米',
      note: '2021—2022 年喀麦隆三地 139 只样本中的最大值；同只重 2.529 千克，不是绝对上限',
    },
    {
      key: 'historical-max-mass',
      label: '标本捕获时体重',
      value: '3.3',
      unit: '千克',
      note: '1960 年 Nkombia 一只 32 厘米个体；不是平均、常见上限或绝对上限',
    },
    {
      key: 'iucn-three-generation-decline',
      label: 'IUCN 三代减少判断',
      value: '>70',
      unit: '%',
      note: '三代约 15 年、截至 2018 评估的推断；不是同步普查或当前年下降率',
    },
    {
      key: 'nest-construction-types',
      label: '巢池改造方式',
      value: '3',
      unit: '类',
      note: '2018 年 Mpoula 河 400 米研究河段归纳；不是全分布区固定比例',
    },
  ],
  media: {
    image: './images/species/goliath-frog/01-rapid-river-adult-cover.webp',
    alt: '一只非洲巨蛙伏在低地雨林清洁急流旁的湿岩石上',
    focalPoint: { x: 0.67, y: 0.56 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/goliath-frog/02-adult-field-marks.webp',
        alt: '溪流边一只非洲巨蛙的侧面全身，宽头、颗粒状背部和长后肢清楚可见',
        title: '急流蛙的外形',
        caption: '低平宽头、眼后皮褶、颗粒状绿褐背面、长后肢和全蹼后足共同适应岩石急流；画面不代表测量过的纪录个体。',
        focalPoint: { x: 0.54, y: 0.56 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/goliath-frog/03-rainforest-rapids-habitat.webp',
        alt: '低地雨林中相连的急流、短瀑和河缘缓水，一只非洲巨蛙伏在岩石上',
        title: '一条河里的多种微生境',
        caption: '急流大岩、瀑布、缓流边池和河岸林相互连接；这是概括性生境重建，不是已确认地点。',
        focalPoint: { x: 0.63, y: 0.62 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/goliath-frog/04-nocturnal-forest-foraging.webp',
        alt: '夜间一只非洲巨蛙走过邻近河流的潮湿雨林落叶层',
        title: '夜里的河岸林',
        caption: '成蛙主要夜间沿河岸和邻近林地活动；画面没有展示猎物、移动距离或一次真实觅食结果。',
        focalPoint: { x: 0.63, y: 0.61 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/goliath-frog/05-cleared-gravel-nest-pool.webp',
        alt: '夜间一只性别未知的非洲巨蛙停在与主河相邻的清理砂砾浅池边',
        title: '清理后的浅水巢池',
        caption: '画面只重建一处已完成的砂砾浅池；不证明这只蛙移动过石块、建造巢池、守护特定卵团或具有已知性别。',
        focalPoint: { x: 0.58, y: 0.59 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/goliath-frog/06-distance-night-river-survey.webp',
        alt: '夜间一名研究者隔着河流远距离观察岩石上的一只非洲巨蛙',
        title: '不接触的夜间河段调查',
        caption: '标准化重复调查可比较地点与年份；这张重建图不代表真实人员、地点、规程或数量结果。',
        focalPoint: { x: 0.72, y: 0.63 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
    ],
  },
  sources: GOLIATH_FROG_SOURCES,
  featured: true,
  publishedAt: GOLIATH_FROG_CONTENT_DATE,
  updatedAt: GOLIATH_FROG_CONTENT_DATE,
}
```

`center` 只是地图代表焦点，不是物种点位、巢址或分布中心计算结果。实现时不要把它显示成“非洲巨蛙观测坐标”。

## 字段—证据矩阵

| 字段或叙事 | 建议值 | 主要证据 | 不得越界 |
| --- | --- | --- | --- |
| 接受名 | *Conraua goliath* (Boulenger, 1906) | [ASW species account](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Conrauidae/Conraua/Conraua-goliath) | 不用 *Rana goliath* 作当前学名 |
| 分类链 | Animalia / Chordata / Amphibia / Anura / Conrauidae / Conraua | [ASW](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Conrauidae/Conraua/Conraua-goliath) [Blackburn et al. 2020](https://doi.org/10.1111/zsc.12447) | 不落旧 Ranidae 或 Petropedetidae |
| IUCN | `EN / decreasing / 2018 / A2d` | [IUCN PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) | 2019 是发布年；不复用 2004 的 `A2d+3d` |
| 三代减少 | `>70% / 15 年` | [IUCN PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) | 推断，不是同步普查或当前年下降率 |
| 全球数量 | 留空 | [IUCN PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) | 490 次遇见不是全球 490 只 |
| 分布国 | 喀麦隆、赤道几内亚 | [ASW](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Conrauidae/Conraua/Conraua-goliath) [IUCN PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) | 加蓬未确认，不进 `countries` |
| EOO | 79,838.91 km² | [IUCN PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) | 只进正文，不误当实际占据面积或保护地面积 |
| 海拔 | 接近海平面至 1,000 m | [IUCN PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) [Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf) | 39—677 m 是一项调查样点范围，不是全种范围 |
| 生境 | 岩石急流、瀑布、相连缓池、河岸雨林 | [IUCN PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) [Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf) | 次生林容忍不等于严重退化农地适生 |
| realms | `freshwater`, `terrestrial` | [IUCN PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) | 不填 marine |
| 吻肛长 | 2021—2022 年论文样本最长值 33.5 cm | [Monthe et al. 2023](https://doi.org/10.14302/issn.2691-6622.ijar-23-4578) | 三地 139 只样本中的最大值；不作为普通成体范围或绝对上限 |
| 体重 | 1960 年一只 32 cm 个体 3.3 kg | [Sabater-Pi 1972 field account](https://bcnroc.ajuntament.barcelona.cat/jspui/bitstream/11703/93720/1/19776.pdf) [Sabater-Pi 1985](https://doi.org/10.1163/156853885X00047) | 单只捕获时记录；1985 年称其为当时假定的已知最大值，不是绝对上限 |
| 吉尼斯纪录 | 36.83 cm SVL；3.66 kg | [Guinness](https://www.guinnessworldrecords.com/world-records/71035-largest-frog) | 页面日期冲突、体重后测；不进结构化体尺 |
| 外形 | 宽扁头、小鼓膜、颗粒背面、长后肢、后足全蹼 | [Sabater-Pi 1985](https://doi.org/10.1163/156853885X00047) [AmphibiaWeb](https://amphibiaweb.org/species/4691) | 不画牛蛙巨鼓膜、蟾蜍腮腺或树蛙吸盘 |
| 成蛙食性 | 肉食；节肢动物、甲壳类、蜗牛、其他蛙 | [Sabater-Pi 1985](https://doi.org/10.1163/156853885X00047) [AmphibiaWeb](https://amphibiaweb.org/species/4691) | 圈养小鼠不是野外常规食物 |
| 蝌蚪食物 | 急流附着水生植物，疑似 Podostemaceae，种未定 | [AmphibiaWeb](https://amphibiaweb.org/species/4691) | 不写“只吃 *Dicraea warmingii*” |
| 活动 | 主要夜行；白天可晒背；夜间进入河岸林 | [Gonwouo et al. 2022](https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_16_no_2/ARC_16_2_%5BGeneral_Section%5D_104-119_e319.pdf) | 夜行不等于白天绝不动 |
| 迁徙 | 非迁徙 | [IUCN PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) | 局地离水活动不是迁徙 |
| 筑巢地点 | 22 个地点，19 个完整可用 | [Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528) | 摘要 19 与表格 22 是不同层级，不择一抹去 |
| 巢型 | 3 类 | [Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528) | 一条河、一个繁殖季的归纳 |
| 巢尺寸 | 完整巢平均直径 102.8 ± 14.5 cm、深 9.1 ± 2.1 cm | [Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528) | 不是全种固定尺寸 |
| 移石 | 痕迹推断最重约 2 kg | [Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528) | 没有直接目击；不画举石动作 |
| 守巢 | 一只性别未知成蛙整夜在巢边或 3 m 内 | [Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528) | 不确认雄、雌或固定亲代分工 |
| 卵数 | 常见估数 150—350；两处达 2,700—2,800 | [Schäfer et al. 2019](https://doi.org/10.1080/00222933.2019.1642528) | 无法确认单窝，同池可复用；不进 featured stat |
| 猎捕研究 | 223 人访谈、7 名猎人、192 只猎获物 | [Taboue et al. 2023](https://doi.org/10.1017/S0030605323000224) | 局地两猎季资料，不是全种年捕获量 |
| 喀麦隆法律 | A 类全面保护动物 | [MINFOF 2020 PDF](http://faolex.fao.org/docs/pdf/cmr240488.pdf) [Taboue et al. 2023](https://doi.org/10.1017/S0030605323000224) | 法律状态不证明执行充分 |
| CITES | 截至核验日未列入附录；欧盟附件 B | [CITES 2026 Appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CITES note](https://cites.org/sites/default/files/eng/cop/17/WorkingDocs/E-CoP17-81-01-A5.pdf) [Auliya et al.](https://cites.org/sites/default/files/common/docs/meeting_info/amphibians/2023_Auliya%20etal_uncertainties-in-frogs-legs-trade_NatCons.pdf) | 旧提案和数据库记录不等于现行列入 |
| 美国法律 | ESA Threatened, wherever found | [USFWS](https://www.fws.gov/species/goliath-frog-conraua-goliath) | 不等于 IUCN Threatened 分类用语 |
| 保护行动 | 执法、社区共管、河流连续性、水质与长期监测 | [IUCN PDF](https://www.iucnredlist.org/species/pdf/96062132.pdf) [2026 CNA](https://www.conservationneeds.org/Assessment/AssessmentResults?AspxAutoDetectCookieSupport=1&assessmentId=6969&countryId=22&speciesId=5041) | CNA 行动优先级不是新红色名录评估 |

## 实施、测试与 TODO

### 数据与素材落库

1. 在 `src/data/species.ts` 增加日期常量、`GOLIATH_FROG_SOURCES` 和完整对象；保持所有 source URL 唯一，访问日期统一为 2026-08-27。
2. 源 PNG 使用：
   - `src/assets/source/species/goliath-frog/01-rapid-river-adult-cover-source.png`
   - `src/assets/source/species/goliath-frog/02-adult-field-marks-source.png`
   - `src/assets/source/species/goliath-frog/03-rainforest-rapids-habitat-source.png`
   - `src/assets/source/species/goliath-frog/04-nocturnal-forest-foraging-source.png`
   - `src/assets/source/species/goliath-frog/05-cleared-gravel-nest-pool-source.png`
   - `src/assets/source/species/goliath-frog/06-distance-night-river-survey-source.png`
3. 对应运行时 WebP 放入 `public/images/species/goliath-frog/`，同名去掉 `-source`；01 是封面，02—06 是图库，不重复封面。
4. 在 `src/assets/source/species/goliath-frog/README.md` 记录生成日期、提示词、科学边界、压缩方法、静态尺寸和验收结果；在物种源图总索引补充本组条目。
5. 不把下载的 PDF、文本提取文件、搜索缓存、草稿图或弃用生成结果提交到仓库。

### 分类测试与证据边界测试

- 新增 `goliath-frog` 完整档案测试，固定 id、slug、学名、分类叶、`EN/decreasing/2018/A2d`、双 realm、两个带注释极值、成蛙肉食、六段故事、四项数字、五张图库与 **19 个**唯一来源。
- 固定六条媒体路径、顺序、alt、credit 和最终 `focalPoint`；验证封面不在 gallery 重复。
- 用正文断言保护五个关键边界：2019 不是评估年；33.5 厘米论文样本最长值与另一只 32 厘米、3.3 千克历史个体不是同一只或普通成体范围；490 次遇见不是全球数量；22 个地点含 19 个完整巢；2 千克移石与亲代性别尚未直接确认。
- 增加断言，确保产品没有把 `Dicraea warmingii` 写成已确认唯一蝌蚪食物，也没有把加蓬放进确定分布国或把本种标成 CITES 附录物种。
- 若本轮只新增非洲巨蛙且没有同步物种变更，物种总数由 **56 增至 57**，两栖纲由 **3 增至 4**，无尾目由 **1 增至 2**；新增 Conrauidae 与 *Conraua* 叶节点各为 1。共享工作区若已有别的物种改动，应按实际数据重算，不能机械覆盖。

### 命令与静态验证

- 运行 `file` 和 `identify` 检查 6 张源 PNG 与 6 张运行时 WebP 的格式、1536×1024 尺寸、sRGB、无 alpha 和可解码性。
- 运行 `npm run typecheck`。
- 运行 `npm test`。
- 运行 `npm run build`，确认六张 WebP 进入构建产物，跟踪的 `dist/` 与当前源码一致。
- 运行 `git diff --check`，再审阅 `git diff --stat` 与目标文件清单，确认没有覆盖共享工作区的无关变更。

### TODO 收尾顺序

只有同时满足以下条件，才能从 `docs/todo.md` 删除“非洲巨蛙（*Conraua goliath*）”：

1. 完整 `Species` 对象和来源数组已落库，IUCN 年份、极值、CITES 与喀麦隆法律口径通过人工复核；
2. 六张源 PNG、六张运行时 WebP、物种 README 和源图总索引齐全；
3. 六帧完成静态形态与内容验收，05 未虚构搬石或亲代性别，06 没有接触动物；
4. 分类测试更新，物种、两栖纲、无尾目、Conrauidae 和 *Conraua* 计数按实际树通过；
5. typecheck、完整测试、生产构建和 `git diff --check` 全部通过；
6. `docs/todo.md` 的剩余数量由 22 改为 21、物种档案由 56 改为 57、两栖纲由 3 改为 4，并确认下一项未被误删。

研究文件完成但数据、图像或验证还有任何一项缺失时，不提前勾掉 TODO。

## 暂不落库与未来复核

1. 不填 `metrics.adultLengthCm` 或 `metrics.adultMassKg`。33.5 厘米是三地 139 只样本中的最大值，3.3 千克是另一只历史个体的记录；两者都不是稳健成年范围或绝对上限。
2. 不用吉尼斯 36.83 厘米、3.66 千克覆盖科学体尺。页面存在 1889/1989 日期矛盾，体重也在捕获数月后测得。
3. 不采用猎人口述“过去约 5 千克”的最大蛙估重；它没有标本称重或可复核测量。
4. 不填全球成熟个体区间。490 次遇见、243 次成体记录和 192 只猎获物都来自限定研究，不能外推全球数量。
5. 不把 39—677 米写成全种海拔范围。它只是 2014—2019 调查点；全种结构化上限仍按 IUCN 的 1,000 米。
6. 不把加蓬放入确定 `countries`。ASW 明列 likely/controversially present，IUCN 也只写可能存在。
7. 不把 *Dicraea warmingii* 或现代可能对应名写入食物数组；蝌蚪植物身份和专食程度都未解决。
8. 不填典型窝卵数。150—350 与 2,700—2,800 都是巢池估数，同池可重复使用，无法稳定对应单只雌蛙的一窝。
9. 不确认雄蛙建巢、雌蛙守巢，也不把移动 2 千克石块画成直接观察。现有证据是痕迹、相机守巢记录和访谈线索。
10. 不把筑巢写成巨型化的已证实原因。它是 2019 论文提出的演化假说。
11. 不填寿命、跳跃极限、游速、叫声音量或固定繁殖月份。现有资料局地、样本小或缺少全种可比测量。
12. 不把 Bd 或气候变化写成已量化的当前主要下降驱动；保留为必须研究和监测的风险。
13. 不把历史 CoP8 提案、欧盟附件 B 或 CITES 数据库记录误写成 CITES 附录状态。每次更新档案时复核现行附录。
14. IUCN 正式字段仍是 2018/EN/decreasing/A2d。新全球评估发布后，应同时复核评估日、发布年、趋势、准则、三代时间窗和减少论证，而不是只改状态代码。
