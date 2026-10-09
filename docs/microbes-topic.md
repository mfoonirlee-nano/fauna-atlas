# 微生物专题

2026-10-09

## 入口与范围

动物页主导航的“微生物专题”打开 `#microbes`。专题提供“动物图鉴”返回链接。两个页面按路由分别挂载、懒加载，支持静态站点的子路径部署，支持直接打开与前进后退。

专题包含 todo 的 10 种微生物：酿酒酵母、嗜热链球菌、德氏乳杆菌、双歧双歧杆菌、大肠杆菌、肠道沙门菌、变异链球菌、蓝氏贾第鞭毛虫、大草履虫和眼虫。德氏乳杆菌的发酵介绍明确限定保加利亚亚种；贾第鞭毛虫保留同物异名说明。

每种提供结构示意、介绍、观察问题、生活联系、成人说明与资料来源。支持名称、学名或特点搜索，以及细菌、真菌、单细胞真核生物筛选。筛选不是分类阶元。动物的数据、计数、搜索、收藏、轮播和分类图谱未加入这些选题。

## 插图与来源

专题采用独立的“微生物观察室”视觉：冷蓝色网格背景、圆形观察窗、无衬线标题、等宽学名和观察编号。细菌、真菌、单细胞真核生物分别用蓝、紫、青色辅助区分，同时显示文字类型；颜色不表示危害程度。深浅色变量限定在专题根节点内，窄屏将介绍与观察窗上下排列。

每篇首图为内置 image_gen 单独生成的 AI 科学重建，接受的 10 张 WebP 保存在 `public/images/microbes/`；尺寸均为 1536×1024，总计 713,422 字节。图片不是真实显微照片，配色和纹理属于说明性重建。每种微生物的提示词、生成路径、哈希和检查记录见[图片记录](../src/assets/source/microbes/README.md)。

共读展开区保留仓库内人工绘制的 SVG 结构示意。两类图及页面均说明不按比例，不提供虚构的显微尺度标尺。贾第鞭毛虫展示两个细胞核与四对鞭毛，不把细胞核画成表情。草履虫展示纤毛，眼虫展示鞭毛、叶绿体与眼点。所有图片使用完整画面显示，不进入动物图鉴。

内容来源链接保存在 `src/topics/microbes/content.ts` 并展示在每篇共读说明里。2026-10-09 查阅 CDC 的大肠杆菌、沙门菌、爬行动物与两栖动物、贾第鞭毛虫、DPDx 生活史及洗手资料，NIDCR 的口腔微生物与龋齿资料，以及以下研究与物种资料：

- [SGD：酵母](https://wiki.yeastgenome.org/index.php/What_are_yeast%3F)
- [酸奶菌共同发酵研究](https://pubmed.ncbi.nlm.nih.gov/24936380/)
- [德氏乳杆菌保加利亚亚种研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC3022021/)
- [肠道双歧杆菌研究](https://pubmed.ncbi.nlm.nih.gov/19168652/)
- [USP：双歧双歧杆菌形态](https://doi.usp.org/USPNF/USPNF_M13098_02_01.html)
- [Carolina：大草履虫](https://www.carolina.com/protozoa/paramecium-caudatum-living/131554.pr)
- [Carolina：眼虫](https://www.carolina.com/algae/euglena-gracilis-living/152800.pr)
- [眼虫感光研究](https://pubs.rsc.org/En/content/articlehtml/2012/ib/c1ib00115a)

不安排幼儿培养未知样本，不提供诊断、用药或益生菌购买建议。卫生提示采用生活动作，避免恐吓或责怪孩子。

## 验证

专题测试覆盖 10 个选题与动物目录的隔离、筛选、搜索无结果与恢复、共读展开、直接进入专题及页面切换。生产构建测试检查子路径资源、入口 JavaScript 预算、专题与动物页的独立懒加载。

`npm test` 的 780 项检查通过，包含生产构建、类型检查与子路径资源验证。最后修改后的专题交互测试另行通过。懒加载后的各页面仍遵守单文件 350,000 字节、页面依赖合计 550,000 字节的既有预算。

未启动 GUI 或无头浏览器。DOM 测试和静态代码检查不验证浏览器中的排版与完整页面视觉效果。

视觉调整后再次通过 `npm run test:microbes` 和 `npm run test:dist-subpath`（各 4 项，包含类型检查、生产构建和体积预算）。静态计算的浅色正文与背景对比度为 6.36:1，深色为 9.33:1；三种类型颜色在对应内容底色上的对比度均不低于 5.70:1。此计算不替代浏览器视觉验收。

生成图接入后再次通过 `test:microbes`（新增资产检查后为 5 项）、`test:images`（1 项）及 `test:dist-subpath`（4 项）。每种选题的运行时 WebP 均核对实际尺寸与哈希，原有结构示意移入共读展开区。

## 已完成选题记录

- [x] 酿酒酵母 *Saccharomyces cerevisiae*：真菌；比较单个细胞与面团里的气泡。“小小的酵母怎样让面团鼓起来？”由成人演示食品级酵母，联系做食物前洗手，不尝生面团。
- [x] 嗜热链球菌 *Streptococcus thermophilus*：细菌；看看链状排列的细胞，认识酸奶发酵参与者。联系食品按包装要求冷藏，不把所有细菌说成有害。
- [x] 德氏乳杆菌 *Lactobacillus delbrueckii*：细菌；以保加利亚亚种讲酸奶发酵。“看看一个个细胞像什么形状。”制作时明确亚种，不与上一项合并成同一种菌。
- [x] 双歧双歧杆菌 *Bifidobacterium bifidum*：细菌；认识肠道微生物及分枝形态。提示“身体里也住着微小生命”，不延伸成购买益生菌或治疗效果建议。
- [x] 大肠杆菌 *Escherichia coli*：细菌；用杆状细胞图讲菌株差异。多数无害，部分可致病；联系便后、吃东西前洗手，不凭图片判断菌株是否致病。[资料：CDC](https://www.cdc.gov/ecoli/about/index.html)
- [x] 肠道沙门菌 *Salmonella enterica*：细菌；用“动物生活区域、手、食物”的示意图讲传播机会。联系接触动物及其用品后洗手；本专题面向幼儿，爬宠和两栖动物用图片观察，5 岁以下不直接接触。[资料：CDC](https://www.cdc.gov/healthy-pets/about/reptiles-and-amphibians.html)
- [x] 变异链球菌 *Streptococcus mutans*：细菌；用牙菌斑示意图讲口腔细菌利用糖产酸。联系成人帮助早晚刷牙；说明龋齿涉及多种细菌、饮食和时间，不画成一只虫在啃牙。[资料：NIDCR 口腔微生物](https://www.nidcr.nih.gov/news-events/nidcr-news/2024/exploring-mouths-microbial-wonders)、[CDC 龋齿介绍](https://www.cdc.gov/oral-health/about/cavities-tooth-decay.html)
- [x] 蓝氏贾第鞭毛虫 *Giardia duodenalis*：单细胞真核寄生生物；比较显微照片与结构示意。联系不吞泳池水、不喝未经处理的溪水、便后洗手；制作时注明 *G. lamblia*、*G. intestinalis* 等同物异名。[资料：CDC](https://www.cdc.gov/giardia/prevention/index.html)
- [x] 大草履虫 *Paramecium caudatum*：单细胞真核生物；用显微视频观察纤毛和游动。“找找它怎样转弯。”作为水中生命选题，不把它当作致病菌代表，也不由水里有生物推断水能饮用。
- [x] 眼虫 *Euglena gracilis*：单细胞真核生物；用显微图看看绿色细胞和鞭毛。联系“清澈的水里也可能有肉眼看不见的东西”，饮水安全须看水源与处理方式，不靠肉眼判断。
