# 2026 年 10 月 12 日软体动物五种

本批制作新碟贝、毛皮贝（暂用中文标签）、盘鲍、船蛆和地纹芋螺。每种包含身体外观、栖息与分布、取食、生活史、分类、保护与共读、发现与命名、资料来源，一张封面和五张观察图。

## 名称与分类

五种 GBIF 名称匹配均为 EXACT、ACCEPTED，原始响应见[分类记录](../../src/assets/source/todo-expansion-molluscs-five-taxonomy-match.json)。按同一分类口径建立六级分类链，种作为档案叶节点。

| 学名 | 纲 | 目 | 科 |
| --- | --- | --- | --- |
| Neopilina galatheae | Monoplacophora | Neopilinida | Neopilinidae |
| Chaetoderma nitidulum | Caudofoveata | Chaetodermatida | Chaetodermatidae |
| Haliotis discus | Gastropoda | Lepetellida | Haliotidae |
| Teredo navalis | Bivalvia | Myida | Teredinidae |
| Conus geographus | Gastropoda | Neogastropoda | Conidae |

毛皮贝未核实统一中文通名，项目将其标明为暂用标签；少见科属中文名称用于展示，以科学名称定位分类单元。船蛆属于双壳类，毛皮贝属于尾腔类，均不按蠕虫形外观归入环节动物。

## 内容依据与资料范围

新碟贝使用 [2024 年原位观察研究](https://academic.oup.com/mollus/article/90/2/eyae014/7673177)核对 1952 年 Galathea 采集、1957 年命名、深海分布及腹面结构。本文不把本种的已知采样地点写成完整边界。齿舌取食说明保留证据范围，不补造具体食谱、寿命和速度。腹面图修正初稿四对鳃为五对；内壳肌痕属于结构重建，不能代替解剖测量。

毛皮贝使用 [Naturalis 北海档案](https://ns-mollusca.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?cat=TAB_DESCRIPTION&id=121440)、[2018 年形态与分子原始研究](https://academic.oup.com/mollus/article/84/2/113/4955205)和 [Auburn University 结构研究论文](https://etd.auburn.edu/bitstream/handle/10415/3581/Kocot_dissertation_final.pdf?isAllowed=y&sequence=2)核对体壁骨针、前后端、外套腔、缺少宽足及分类史。较旧 Naturalis 页面将作者年份列为 1845，本档案按 GBIF 和 2018 年研究使用 Lovén, 1844。已查资料不足以确定完整食谱，食性字段不补造食物清单。

盘鲍使用[鲍属全球评估研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC11666003/)、[KIOST 大型海藻选择研究](https://sciwatch.kiost.ac.kr/handle/2020.kiost/30038)和 [JAMSTEC 记录](https://www.godac.jamstec.go.jp/bismal/e/view/9025355)核对耳状单壳、壳孔、宽足、藻食与亚种范围。[IUCN 的 2022 年评估](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T215430084A215430133.en)针对 Haliotis discus discus，等级 EN，A2cd，趋势下降。档案定位到整个 Haliotis discus，没有把指名亚种的评估作为整个种的等级，种级 NE 暂表示该层级资料缺口。

船蛆使用[史密森尼 NEMESIS](https://invasions.si.edu/nemesis/species_summary/81862)、[哈佛自然历史博物馆](https://whatsinaname.hmnh.harvard.edu/shipworm)和 [Woods Hole 原始生活史研究](https://www.journals.uchicago.edu/doi/10.2307/1537080)核对小壳刮木、共生细菌、木材隧道、水管、小板与面盘幼体。原生范围有争议，广泛传播记录不等于原生范围；特定地点的发育时间不当作全球固定时长。

地纹芋螺使用 [2015 年毒液胰岛素研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC4330763/)、[2024 年激素拟态研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC11336141/)核对鱼食、毒液与网捕，使用 [SeaLifeBase](https://www.sealifebase.org/summary/Conus-geographus.html)核对范围和其引用的 IUCN LC 等级、2011 年评估日期。独立评估正文与后续趋势未核实，趋势保持 unknown。齿舌齿和扩散示意不表示真实可见毒液，不描述为已经批准的疗法。

## 图片与验收

内置 image_gen 逐场景生成三十张图，每种保留六张 WebP。源输入、运行图、提示词、哈希、实际解码尺寸和完整主体边界的记录保存于[物种图片索引](../../src/assets/source/README.md)对应目录。图注区分活体、空壳、内部结构、放大视图和生活阶段；全部为 AI 重建，非实测比例，不用于鉴定或精确计数。

封面分别检查原分辨率源图与运行 WebP，图库分别检查源图和运行图联系表。封面边界包含可见的完整壳、软足、触角、身体和水管；船蛆以木材为剖面背景。五种封面均修改构图，保留左侧文案空间与完整主体的真实源图边距。

静态几何覆盖 320×760、390×760、761×760、900×760、1100×768、1366×768、1920×900、2560×900、3840×900，桌面另检查内容增高 160px。移动端显示完整图片，桌面按当前 fitHeroSubject 拟合完整主体并保留 24px 内缩。动画只改变透明度，进入、离开和 settled 共用几何。九视口图片栏模拟逐种视觉检查。

按项目约定不启动浏览器。静态几何与模拟不能验证浏览器字体、完整页面排版或实际内容驱动高度。

## 验证

`npm run typecheck` 通过；`npm test` 全部 870 项通过，包含新增五种的名称、分类、六图数量与哈希、文案证据范围，575 种封面元数据与实际尺寸、完整主体边距、轮播交互、生产构建、子路径资源和首屏 JavaScript 预算。`git diff --check` 通过。

源封面和运行 WebP 按原分辨率检查，源图库与运行图库分别检查联系表；船蛆两个示意图修正前后端并重新检查。五种的九视口图片栏模拟完成视觉检查，几何均保留至少 24px 内缩，动画端点共用几何。按项目规则未启动浏览器，字体、完整页面排版和实际内容驱动高度仍未验证。

每种只保留六张 WebP，三十张临时源 PNG 已移除。提示词、源及运行哈希、尺寸、主体边界和验收记录保存于各物种图片目录。目录增至 575 份物种档案，本轮完成 75 种，活动 TODO 剩余 25 项，完成项已移入归档。
