# 2026 年 10 月 11 日尾海鞘与昆虫五种

本批计划制作五种动物，当前提交完成巨型尾海鞘、丹麦蜉蝣、加州大石蝇。每种包含物种档案、完整分类链、共读说明、来源、一张封面与五张观察图。当前动物目录为 553 份物种档案，本轮完成 53 种，活动 TODO 剩余 47 种。

## 名称与分类

当前 3 种的 GBIF 名称匹配均为 EXACT、ACCEPTED；原始响应保存在 [分类核验记录](../../src/assets/source/todo-expansion-invertebrate-five-taxonomy-match.json)。GBIF 的 Bathochordaeus mcnutti 响应没有纲字段；依据原始物种描述采用 Appendicularia 尾海鞘纲，目为 Copelata，科为 Oikopleuridae。它是没有脊柱的被囊动物，不归入鱼类。

昆虫采用 Ephemeroptera／Ephemeridae、Plecoptera／Pteronarcyidae、Trichoptera／Limnephilidae、Mecoptera／Panorpidae，分别归入 Ephemera、Pteronarcys、Limnephilus、Panorpa 属。中文名沿用 TODO 选题标签；巨型尾海鞘及少见属级中文名采用项目展示标签，未核实统一的权威中文通名。接受学名承担物种定位。

本次未核实五种可引用的 IUCN 全球评估，暂用 NE 作为资料占位，并在档案中说明这不等于断言“从未接受评估”。不写评估年份；地方常见程度、局部下降与 NatureServe 等级分别理解，不转换为全球 IUCN 等级。

## 资料与图片范围

巨型尾海鞘 Bathochordaeus mcnutti 的 [原始物种描述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5159439/)提供蓝色尾缘、透明躯干、成熟个体和蒙特雷湾资料。[MBARI 年报](https://annualreport.mbari.org/2018)提供身体与黏液房的观察入口，[过滤与碳输送研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC5415331/)讨论滤食房及尾部驱水。图库区分个体、滤食房和旧房子。封面适配边界包含完整房子；档案不把房子计入身体长度。重建图夸大部分透明边缘以便共读，不按实测比例，滤网褶皱和内部结构不能代替解剖依据。

丹麦蜉蝣 Ephemera danica 使用 [NatureSpot 的实地记录与形态说明](https://www.naturespot.org/species/green-drake-mayfly)、[NCBI 分类项目](https://www.ncbi.nlm.nih.gov/bioproject/171755)和[稳定同位素原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC6295106/)。图库分别标注水生若虫、有翅亚成虫和成熟成虫。若虫以有机碎屑为食；有翅阶段利用积累的能量。成虫期短不能写成“一生只有一天”。尾丝、鳃和翅脉为近似重建，不能用生成图鉴定或精确计数。

加州大石蝇 Pteronarcys californica 使用 [2025 年基因组原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC12130441/)、[NatureServe 的分布与生态资料](https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.112052/Pteronarcys_californica)和[羽化蜕壳密度研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC7148124/)。图库区分平放翅膀的成虫、带翅芽的水生若虫和岸边空蜕壳。若虫生活跨越多年且随地点变化；不把单一地点肠内容物比例写成全种固定食谱。

## 图片与验收

18 张图片均使用内置 image_gen 按独立场景生成。封面初稿的长触角、尾丝或黏液房侵入左侧保留区，通过内置图像编辑调整构图后接受；最终提示词、临时源图哈希、运行图哈希、实际尺寸与视觉限制保存在各物种目录的 prompts.json 和 README.md。

保留每种六张 WebP；全部实际解码为 1536×1024。按原分辨率查看源封面及最终 WebP 封面，源图库与运行图库分别检查六图联系表。封面完整边界包含所有可见附肢；尾海鞘另包含滤食房全部外缘。主体中心位于右侧，左侧 40% 保留环境背景。运行元数据与 original-covers.json 的尺寸、边界及哈希一致。

静态几何使用当前 fitHeroSubject 与移动端完整图 contain，覆盖 320×760、390×760、761×760、900×760、1100×768、1366×768、1920×900、2560×900 和 3840×900。桌面另检查内容增高 160px，全部完整主体边距不少于 24 CSS px。动画端点仅改变透明度，初始、前后进入、离开与 settled 使用相同几何。当前 3 种各自的九视口模拟检查图片栏边缘与主体分离。

按项目规则未启动浏览器。源图视觉检查、几何验算和图片栏模拟分别完成；静态模拟不验证浏览器字体、文字及按钮的完整页面排版或实际内容驱动高度。

## 验证

本批五种的最终工作区通过 `npm run typecheck` 和 `npm test`（843 项），包含生产构建与首屏 JS 预算。当前提交的图片、哈希和九视口几何验收见各物种目录。未启动浏览器。
