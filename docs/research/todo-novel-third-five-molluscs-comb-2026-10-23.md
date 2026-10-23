# 第三批五种：海兔兔、深海兜帽海蛞蝓与金带栉水母

日期：2026-10-23。本文支撑三份新增文字档案：

- `src/data/species/sea-bunny.ts`：N010，*Jorunna parva*。
- `src/data/species/mystery-nudibranch.ts`：N016，*Bathydevius caudactylus*。
- `src/data/species/venus-girdle.ts`：N002，*Cestum veneris*。

每份包含五节生活认识、一节发现命名、五张图库与一张封面引用。图片及封面验收由主任务完成，本文不把画面设计当作图像准确性已获确认。

## 海兔兔：Jorunna parva

### 身份与命名

[WoRMS 接受种记录 AphiaID 534396](https://www.marinespecies.org/aphia.php?id=534396&p=taxdetails)给出接受学名 *Jorunna parva* (Baba, 1938)，原组合为 *Thordisa parva* Baba, 1938。马场菊太郎在《Opisthobranchia of Kii, Middle Japan》1938 年论文第 15–16 页描述本种。WoRMS 以[Camacho-García 与 Gosliner 的 2008 年属级系统修订](https://doi.org/10.1093/mollus/eyn002)作为再描述来源；本轮通过 WoRMS 核实文献关系，未取得该修订全文，不假装逐页完成了解剖比较。

[JAMSTEC BISMaL](https://www.godac.jamstec.go.jp/bismal/e/view/9024943)使用 Mollusca / Gastropoda / Nudibranchia / Discodorididae / Jorunna。科中文“盘海牛科”有[中央研究院贝类资料库](https://shell.sinica.edu.tw/english/shellfamily.php?ORDER=family&PAGE=1&pageNum_Recordset1=18&totalRows_Recordset1=293)支持；属译名用“团鳃海牛属”。不要把旧网页的 Dorididae 直接当作本档案当前科名。

### 可画特征与容易混淆的种

[澳大利亚博物馆 Sea Slug Forum 的日本原始照片与专家讨论](https://www.seaslugforum.net/showall/joruparv)记录短小乳突 caryophyllidia 覆盖外套膜，部分乳突深色；头端有两根层片嗅角，后背有独立鳃簇。表面不是哺乳动物毛发，嗅角不是耳朵，鳃簇不是兔尾。档案仅重建一种浅色带黑点的外观，不以白、黄等颜色拆分物种，也不列缺乏一致口径的最大体长。

同一页面标题含问号，并保留了早年对日本色型与未定名 *Jorunna* sp. 2 的讨论。[Jorunna pardus 专页](https://seaslugforum.net/find/jorupard.htm)展示加利福尼亚与下加利福尼亚的相似物种。两者目前仍分开记录；照片颜色相似不足以合并身份。绘图不能把 *J. pardus* 的加州原图当作本种已鉴定标本。使用日本、香港等有具体记录的参考，并保留 AI 重建标识。

[横须贺市自然人文博物馆调查](https://www.museum.yokosuka.kanagawa.jp/wp/wp-content/uploads/2020/07/S53-3_Hagiwara_2006.pdf)列出本种标本 YCM-H8887，记录在 2003 年春季、约 4–6 m 岩面观察到多个个体。[香港 2022 年原始调查](https://pmc.ncbi.nlm.nih.gov/articles/PMC9810844/)包含本种照片 Fig. 5P 及印度洋与西太平洋分布说明；[莫桑比克 2017 年标本调查](https://www.vliz.be/imisdocs/publications/309489.pdf)列有三份具体标本及岩礁环境。这些记录支持档案的近岸岩礁背景，代表点采用纪伊半岛附近。

### 食性证据边界

本轮核查没有找到足以明确本种食物的一手摄食记录。网上关于“有毒 Chalinidae 海绵”“吃海草和其他海蛞蝓”“偷毒素”等叙述混杂，不能直接移入档案。[SeaLifeBase 本种生态表](https://sealifebase.org/Ecology/SpeciesEcologySummary.php?GenusName=Jorunna&SpeciesName=parva&StockCode=111630)的 feeding 相关字段也为空，不能据它确认食性。[澳洲生态清单](https://www.vliz.be/imisdocs/publications/346822.pdf)在 *J. funebris* 下列出海绵摄食记录，在 *J. parva* 下只给出岩礁环境，不能跨物种套用。

因此 `diet.types`、`diet.foods` 保留空数组，description 解释尚未核实；featuredStats 第三项改为体表乳突。所有图库均选形态与移动场景，不制作“啃食特定海绵”画面。

| 文件 | 场景与验收重点 |
| --- | --- |
| 01-cover | 右侧完整小海蛞蝓，岩礁背景，左侧留安静空间；嗅角及鳃簇留出边缘 |
| 02-observation | 完整侧背面，前二嗅角与后鳃簇分开，不加兔子五官或四足 |
| 03-observation | 头端两根嗅角的层片近景 |
| 04-observation | 后背鳃簇近景，鳃簇与腹足后端不是一个毛球 |
| 05-observation | 低角度腹足贴岩面移动，周边附着生物不标为食物 |
| 06-observation | 短密乳突与黑点近景；不是显微实测，不画长毛 |

## 深海兜帽海蛞蝓：Bathydevius caudactylus

### 分类与命名

[2024 年原始描述](https://doi.org/10.1016/j.dsr.2024.104414)作者 Bruce H. Robison 和 Steven H. D. Haddock 建立新属新种；[WoRMS 接受记录 AphiaID 1779673](https://www.marinespecies.org/aphia.php?id=1779673&p=taxdetails)确认 Mollusca / Gastropoda / Nudibranchia / Bathydeviidae / Bathydevius。该新科在本批属于已核实的阶元，不以 GBIF 搜索未命中为由改入 Melibe 所在科。中文科属名“深海兜帽海蛞蝓科 / 属”为本档案编辑译名，未声称是规范中文名；已有的软体动物门、腹足纲和裸鳃目沿用项目名称。

[研究团队的 2024 年发现说明](https://www.mbari.org/news/mbari-researchers-discover-remarkable-new-swimming-sea-slug-in-the-deep-sea/)记录 2000 年首次观察，累计一百五十多次目击后才正式描述。本档案不把首次观察年份和命名发表年份混成同一年。

### 行为与绘图结构

[MBARI 本种页](https://www.mbari.org/animal/mystery-mollusc/)及上述团队说明具有原始影像和结构标注：透明胶质兜帽在一端，中央可见有色内脏，另一端是带长短不一指状突起的扁尾。它在深海水层漂游，能上下起伏游泳，也可收缩口兜向后移动。已确认食物为糠虾等甲壳动物，摄食效率与精确拦截过程仍有未知，画面不编排高速追猎。

已确认地理范围为东北太平洋俄勒冈至南加利福尼亚外海。马里亚纳海沟出现过相似外观动物，但研究团队仍用 suggest 描述更广分布，本档案不直接将其计入确认范围。

研究者拍到过发光及脱落发光尾突的情景，也观察到附着泥底产卵的姿态。发光图只重建一种有观察依据的特定状态；产卵图以肌肉足固定，口兜和尾部向水中伸出。卵带若出现在画面中，仅作繁殖关系示意，不标实际卵径与卵数。

| 文件 | 场景与验收重点 |
| --- | --- |
| 01-cover | 完整体放右侧深色水层；透明兜帽与尾指边界清晰，左侧安静 |
| 02-observation | 完整侧视，兜帽、中央躯干、扁尾相互连接 |
| 03-observation | 张开口兜与小糠虾的位置示意；不能变成成排刺细胞触手 |
| 04-observation | 尾缘指突局部，保留扁尾基部，避免画成独立章鱼腕 |
| 05-observation | 单一尾突局部淡色生物光，亮度、色调不作定量 |
| 06-observation | 肌肉足附泥底，口兜与尾部向上伸展；可带细卵带示意 |

## 金带栉水母：Cestum veneris

### 身份与阶元

[WoRMS 接受种 AphiaID 106363](https://www.marinespecies.org/aphia.php?id=106363&p=taxdetails)记录 *Cestum veneris* Lesueur, 1813；原始描述来自地中海尼斯附近采集材料，位于论文第 282–283 页、图版 5 图 1。*Cestus veneris* 是不正当改写，*Cestum amphitrites* 等是并入本种的旧名，不额外计数。

[OBIS 路径](https://obis.org/taxon/106363)和[ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=53938)一致列出 Animalia / Ctenophora / Tentaculata / Cestida / Cestidae / Cestum。本档案复用项目“栉水母动物门”“触手纲”，新增“带栉目”“带栉水母科”“带栉水母属”。中文物种名沿用候选清单“金带栉水母”，不据名称把身体画成金属金色。

### 结构、食物与光学

[Scripps 海洋研究所浮游动物图册](https://sio-legacy.ucsd.edu/zooplanktonguide/species/cestum-veneris)描述宽扁透明丝带、口与梳板分处相对侧、桡足类等食物，以及纤毛和身体起伏两种运动。[Rogelja 等 2022 年原始观察](https://zdjp.si/wp-content/uploads/2022/07/ASHN_32-2022-1_ROGELJA-et-al..pdf)Fig. 2 给出中央口、感受器及梳板位置：四条梳板延长，另外四条退化而集中在反口侧感受器附近。捕食细分支沿口缘展开，口处在长边中段。不能在一端加鱼嘴、双眼、蛇头，也不能把八条梳板全画成平行长灯条。

[Child 等 2025 年自然环境摄食研究](https://docs.rwu.edu/fcas_fp/1164/)用潜水摄影记录本种与猎物相遇和留存，支持其浮游动物捕食者身份。本文不把论文中几个物种的平均摄食率外推为本种固定“每分钟吃几只”。[黎巴嫩直接记录](https://blackmeditjournal.org/wp-content/uploads/6-2022-1_111-116.pdf)与亚得里亚海记录支撑地中海场景。国家字段只列来源可追溯的部分地区，代表点为尼斯附近，不代表全球分布边界。

[Smithsonian 栉水母说明](https://ocean.si.edu/ocean-life/invertebrates/jellyfish-and-comb-jellies)解释照明下梳板的彩色反光。本种也有生物发光记录，但本次图库不以持续彩虹灯带表现；梳板近景只画局部照明反光，caption 区分反光和生物光。

| 文件 | 场景与验收重点 |
| --- | --- |
| 01-cover | 右侧完整带体柔和弯曲，长边连续，两端完整，左侧安静蓝水 |
| 02-observation | 展开完整宽面，展示透明丝带轮廓 |
| 03-observation | 单条连续 S 弯，不能出现两条带体拼接或多余头部 |
| 04-observation | 反口侧梳板局部近景，细密短反光，非LED灯带 |
| 05-observation | 带体长边中央口部与小桡足位置示意，捕食结构与猎物允许局部放大 |
| 06-observation | 近薄边侧视，表现扁平带体，保留透明组织连续性 |

## 共同限制与检查

三种均未取得可追溯的全球 IUCN 评估，本轮按任务约定使用 NE 暂记，在 assessor 写明核实限制，不填评估日期和种群趋势结论。NE 不等于确认没有风险或确认不存在评估。

所有图片引用固定为一张 `01-cover.webp` 和五张 `02-observation.webp` 至 `06-observation.webp`，caption 保留 AI 重建与放大、发光条件等限制。文字档案经过结构检查，六节正文均不少于 40 个字符。整体注册、封面实测、WebP 验收与全套测试仍由主任务完成。
