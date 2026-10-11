# 2026 年 10 月 11 日接续昆虫五种

本批制作蛇蛉、捻翅虫、欧洲蝼蛄、喷炮步甲和豌豆蚜。每种包含物种档案、六级分类链、共读说明、来源、一张封面与五张观察图。完成后目录为 560 份物种档案，本轮完成 60 种，活动 TODO 剩余 40 种。

## 名称与分类

五种的 GBIF 名称匹配均为 EXACT、ACCEPTED；原始响应保存于[分类核验记录](../../src/assets/source/todo-expansion-insects-five-taxonomy-match.json)。统一采用节肢动物门、昆虫纲；目与科分别为 Raphidioptera／Raphidiidae、Strepsiptera／Mengenillidae、Orthoptera／Gryllotalpidae、Coleoptera／Carabidae、Hemiptera／Aphididae，属分别为 Raphidia、Mengenilla、Gryllotalpa、Brachinus、Acyrthosiphon。

中文名沿用 TODO 选题标签，少见科属中文名为项目展示标签，未宣称统一权威通名。用接受学名定位物种。欧洲蝼蛄已有欧洲区域评估，档案不把区域等级填作全球等级；本批未核实可引用的全球 IUCN 评估，NE 暂作资料占位，不断言物种从未接受评估，也不补造评估年份。

## 资料与场景范围

蛇蛉 Raphidia ophiopsis 使用 [Neuropterida 物种目录](https://lacewing.tamu.edu/edoc/17504)核对名称与旧北界分布。[Watson 与 Dallwitz 的蛇蛉目描述](https://www.delta-intkey.com/britin/ord/www/raphidio.htm)支持细长前胸、屋顶状收拢的翅膀、雌虫产卵器与类群生活史；这些是目级资料，不补造本种独有的行为。[USDA 保存的研究资料](https://www.ars.usda.gov/ARSUserFiles/80620520/Batko74.pdf)有本种幼虫树皮缝隙捕食记录。历史英国文献中的同名记录存在混用，本批不据此扩展本种分布或生成未核清的幼虫形态。图库展示成虫外观和雌虫产卵器。

捻翅虫 Mengenilla chobauti 使用 [Mengenilla 属原始物种研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC3368257/)核对地中海分布、衣鱼类宿主 Ctenolepisma ciliata，以及六节雄性触角、第 3–5 节分枝。[自由生活雌虫形态研究](https://onlinelibrary.wiley.com/doi/full/10.1002/jmor.21576)区分 Mengenillidae 与多数雌虫终生内寄生的捻翅虫，其直接形态研究对象为近缘种，不能当作本种显微解剖结果。[本种一龄幼虫研究](https://doi.org/10.1016/j.asd.2009.10.005)提供生活阶段依据。图库单独标注有翅雄虫与保留足的无翅雌虫，未重建宿主感染过程。初稿把雄性触角画成过多的羽毛状分枝，通过内置图像编辑修正；生成图不用于分节计数、复眼小面计数或物种鉴定。

欧洲蝼蛄 Gryllotalpa gryllotalpa 使用[英国直翅类记录方案](https://orthoptera.org.uk/species/gryllotalpa-gryllotalpa)核对棕色绒毛、挖掘型前足、湿土环境及杂食；[栖息地适宜性原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC10147984/)提供欧洲背景。[IUCN 欧洲直翅类名录](https://portals.iucn.org/library/sites/library/files/documents/RL-4-021.pdf)属于区域评估。图库区分有翅成虫、无完整翅的若虫和土壤洞穴剖面示意；不把洞穴图当作现场挖开记录，也不把静图当作挖掘或鸣声证据。

喷炮步甲 Brachinus crepitans 使用[本种防御反应原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC12092131/)核对成对防御腺、储存室与反应室；该研究的实验饲料不等于固定野外食谱。[NatureSpot 实地记录](https://www.naturespot.org/species/Brachinus-crepitans)提供橙红头胸、深色鞘翅与英国石灰质环境观察。[功能解剖研究](https://www.sciencedirect.com/science/article/pii/S1467803915000766)提供比较依据。图库用非实测比例剖面示意解释分泌物排出；不画喷火、不刺激动物喷射，不推定未核实的幼虫宿主。

豌豆蚜 Acyrthosiphon pisum 使用 [INRAE 蚜虫百科](https://eng-encyclopedie-pucerons.hub.inrae.fr/species/aphids/acyrthosiphon/a.-pisum)核对寄主与形态，[原始基因组研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC2826372/)支持植物汁液取食、Buchnera 共生及营养关系，[种群生活史研究](https://pubmed.ncbi.nlm.nih.gov/28313668/)提醒有性、无性种群的差异。图库区分无翅成虫、有翅成虫、若虫及粉红色形态，体色不表示性别。腹管不是取食口器；共生细菌不进入动物分类图谱。

## 图片与验收

使用内置 image_gen 按 30 个独立场景生成，编辑构图或解剖外观后接受。每种保留六张 WebP；提示词、源图与运行图哈希、实际尺寸保存在 [species 图片记录](../../src/assets/source/README.md)所列目录。封面元数据与 original-covers.json 使用相同实际尺寸、完整附肢边界及运行图哈希。

源封面和最终 WebP 按原分辨率检查；源图库与运行图库分别检查六图联系表。静态几何覆盖 320×760、390×760、761×760、900×760、1100×768、1366×768、1920×900、2560×900、3840×900，桌面另检查内容增高 160px。九视口图片栏模拟检查完整主体与边缘分离；动画端点仅改变透明度，采用相同几何。

按项目规则未启动浏览器。源图检查、几何验算与模拟视觉检查分别记录；静态模拟不验证浏览器字体、完整页面文字和按钮排版或实际内容驱动高度。生成的足、翅脉和微小结构为近似外观，不能替代标本或显微鉴定。临时 PNG 在验收后移除。

## 验证

`npm run typecheck` 通过。`npm test` 的 849 项测试全部通过，包含档案与分类、30 张新增图片的哈希、560 种封面完整主体几何与实际尺寸、轮播交互、微生物隔离、生产构建、子路径资源和首屏 JS 预算。新增回归检查覆盖自由生活雌虫、衣鱼宿主、若虫与成虫、区域评估说明、防御腺示意，以及豌豆蚜有翅、无翅、若虫和体色区分。更新目录与相关分类单元的数量断言及活动 TODO 计数。

`git diff --check` 通过。未启动浏览器；浏览器字体和完整页面排版未验证。
