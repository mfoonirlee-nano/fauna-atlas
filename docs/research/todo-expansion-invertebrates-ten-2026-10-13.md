# 2026 年 10 月 13 日十种无脊椎动物

本批制作湖沼海绵、弗氏食骨虫、绿螠（暂用中文标签）、裸体方格星虫、蛇发篮海星、游泳海参、科瓦列夫斯基柱头虫、头翼箭虫、动吻虫（类群展示标签）和铠甲虫（类群展示标签）。每种包含身体外观、环境与分布、取食、生活史、分类、保护与共读、发现与命名及来源，一张封面与五张观察图。

## 名称与分类口径

GBIF 十种均返回 EXACT、ACCEPTED，原始响应见[名称匹配记录](../../src/assets/source/todo-expansion-invertebrates-ten-taxonomy-match.json)。裸体方格星虫的 GBIF 记录保留旧 Sipuncula 门；WoRMS 采用环节动物门、Sipuncula 目、Sipunculidae 科，没有设置纲，本批采用 WoRMS 归属，学名采用不含亚属括号的双名表示法。WoRMS 亚属名称及完整链见[分类对照](../../src/assets/source/todo-expansion-invertebrates-ten-worms-taxonomy.json)，并有[星虫线粒体研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC2639372/)支持星虫纳入环节动物的讨论。

柱头虫的 GBIF 链没有目；WoRMS 列出的 Enteropneusta incertae sedis 表示位置未定，不当作正常目名。铠甲虫的 GBIF、WoRMS 与[2021 年原始分类研究](https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0250403)从门直接进入目，没有纲。档案分别省略缺失阶元，分类路径从上一存在阶元连接到下一存在阶元，仍执行名称及上级归属冲突检查。共用类型、目录筛选、图谱路径及懒加载目录都支持这种表示，决定见 [ADR 0002](../adr/0002-omit-unassigned-taxonomy-ranks.md)。

少见科属中文名用于项目展示，以科学名称定位分类单元。绿螠尚未核实统一中文通名；动吻虫与铠甲虫是本项目选题标签，不将整个动物门作为一个物种。尚未核实十种适用的 IUCN 全球评估，NE 表示档案资料缺口，不据此判断种群安全或趋势。

## 内容依据与范围

湖沼海绵参考[加拿大东部调查](https://redpath-staff.mcgill.ca/ricciardi/Ricciardi%26Reiswig1993.pdf)、[滤食与共生微生物研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC10100984/)及[芽球发育研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC11162577/)。孔洞、骨针、芽球及幼虫分别说明；芽球是耐受的活细胞包，不是植物种子或海绵幼虫。作者年份采用 GBIF 与 2024 年研究的 1759，保留文献中 1758 写法的差异。

弗氏食骨虫参考 [MBARI 2004 年发现记录](https://www.mbari.org/news/whale-carcass-yields-bone-devouring-worms/)及[后续属内研究](https://www.mbari.org/news/an-inordinate-fondness-for-bone-eating-worms/)。四条羽状呼吸结构、躯干、骨内卵巢与根状组织分开标示；根状组织与共生细菌涉及骨内有机物利用，后续属级证据不直接写成本种全部食谱。雄体单独放大，不能画成雌体幼虫。

绿螠参考[2026 年基因组研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC13299783/)和 [WoRMS](https://www.marinespecies.org/aphia.php?id=110363&p=taxdetails)。雌体长吻末端分为 T 形扁叶，雄体微小且无同样长吻；bonellin 影响幼虫性别发育，不写成无条件决定。冲绳研究样本与其他地域记录分别说明，作者年份采用 1822，留意旧 1821 写法。

裸体方格星虫参考 [Naturalis 形态资料](https://ns-sipuncula.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?id=117097)和 WoRMS 分类链。吻部没有钩，口端是褶皱触手叶，不能画成其他星虫属的长触手冠。体表方格沟与外部分节分别说明，伸出与缩入是同一种动物的姿态，不是不同阶段。

蛇发篮海星参考 [WoRMS](https://www.marinespecies.org/aphia.php?id=124967&p=taxdetails)与[2005 年原位及水槽原始研究](https://doi.org/10.1007/s00227-005-0032-3)，研究书目信息见[赫尔辛基大学](https://researchportal.helsinki.fi/en/publications/biology-of-the-basket-star-gorgonocephalus-caputmedusae-l)。腕的反复分叉、末端管足与钩、磷虾摄食已有观察；本种属于蛇尾纲。挪威 85—120 米观察与其他地区较深记录分别表达，不固定一个最低深度，也不借用其他篮海星的完整生活史。

游泳海参参考 [NOAA 2026 年说明](https://oceanexplorer.noaa.gov/ocean-fact/what-is-a-headless-chicken-monster/)和 [WoRMS 命名记录](https://www.marinespecies.org/aphia.php?id=124759&p=taxdetails)。前部游泳膜、后部小膜与口周取食触手分别表达，运动依据连续自然影像，不从静图推断频率；保留海底取食，不描写为始终悬浮。Théel 的 1882 年描述与挑战者号材料有记录。

柱头虫参考[发育与三部分身体研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC4081662/)、[直接发育研究](https://pubmed.ncbi.nlm.nih.gov/21303849/)与[美国基因组研究采样说明](https://www.genome.gov/Pages/Research/Sequencing/BACLibrary/saccoglossusKowelvskii.pdf)。吻、领、躯干与沉积物环境分别表达，本种直接发育，不套用其他柱头虫长时间自由游泳幼虫的模板。

头翼箭虫参考 [WoRMS](https://www.marinespecies.org/aphia.php?id=105468&p=taxdetails)、[2026 年黏附与受精研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC13330366/)和[肠道及摄食行为原始研究](https://pubmed.ncbi.nlm.nih.gov/29852579/)。头旁短捕捉刺、一对侧鳍、尾鳍、临时附着乳突与内部繁殖结构分别表达。底栖样本和采样海区不代表其他浮游箭虫的生活方式。

动吻虫参考 [WoRMS 重新鉴定与拼写记录](https://www.marinespecies.org/aphia.php?id=101111&p=taxdetails)、[肌肉及外部结构原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC4021568/)及[Smithsonian 重新描述](https://repository.si.edu/items/48a6b193-e5aa-427e-9070-f9ed1d2fb91f)。头、颈、十一节躯干与后端棘分开说明，Dujardin 的早期观察与 Claparède 1863 年命名区分，保留 dujardinii 双 i 拼写。不拼接历史误鉴定地点，也不补造本种完整食谱。

铠甲虫参考[2021 年罗斯科夫原始分类研究](https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0250403)、[Nanaloricidae 生活史研究](https://repository.si.edu/bitstream/handle/10088/3620/sms_kristensen_2007.pdf)及[最初发现的后续研究](https://www.vliz.be/imisdocs/publications/289305.pdf)。Nanaloricus 属的甲板与头棘使用属级结构依据，六片甲板不是六条足。成体与有后端趾的 Higgins 幼体分开，其他科的缺氧适应及复杂生活史不套给本种，食物清单保持未核实。

## 图片与验收

图片使用内置 image_gen 按独立场景生成；每种最终保留一张封面和五张观察图 WebP。提示词、源和运行哈希、尺寸及主体边界见[图片索引](../../src/assets/source/README.md)中的对应图片集。

骨内组织与沙洞使用剖面示意，微小雄体、芽球、骨针、头端棘和黏附结构独立放大，图库图注区分性别与阶段。显微图标明人工着色、AI 重建及非实测比例，不作物种鉴定、计数、测量或运动判断证据。

按项目规定采用静态几何和图片栏模拟，不启动浏览器。这些检查不验证浏览器字体、完整页面排版或实际内容驱动高度。

源封面与运行 WebP 按原分辨率分别检查，源与运行图库按六图联系表分别检查。四张封面修正主腕数量、构图留白、捕捉刺与成体后端；四张观察图修正单轴骨针、吻部缩入、成体后端和头部缩入，最终提示词与哈希已更新。

静态几何覆盖 320×760、390×760、761×760、900×760、1100×768、1366×768、1920×900、2560×900、3840×900，桌面另覆盖内容增高 160px。完整主体在全部帧保留至少 24px 内缩，动画只改变透明度，共用几何。十种图片栏模拟分别检查完整身体、长吻、细棘、分叉腕与所有可见末端。

最终保留 60 张 WebP，目录增至 590 份档案，本轮完成 90 种，活动 todo 剩余 10 项，完成项已移入归档。

## 完成检查

`npm test` 通过，共 886 项测试，包含全目录档案、分类、图片、轮播、图库、列表、微生物专题及部署子路径检查。缺纲、缺目分类路径回归检查通过，已有完整路径保留原阶元顺序与身份。生产构建、初始 JavaScript 与目录体积预算通过，未调高预算；压缩目录逐字段还原检查包含这三份缺失阶元档案。`git diff --check` 通过。

60 张运行 WebP 均解码为 1536×1024，每种恰好六张，源与运行哈希记录一致，封面与主体表、夹具及几何验收绑定。源检查、静态几何和图片栏视觉模拟分别完成；未验证浏览器字体或完整页面。验收后清理工作区临时 PNG、候选图和模拟，保留提示词、哈希、尺寸、边界及资料范围。
