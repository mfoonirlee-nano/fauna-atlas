# 微生物专题

2026-10-10 更新。

## 入口与共读方式

动物页主导航的“微生物专题”打开 `#microbes`。家长通过专题认识微生物的发现、生活方式、作用和危害，孩子先观察图形、讲自己的猜想，再与家长一起读过程。两个页面按路由分别挂载、懒加载，支持静态站点的子路径部署、直接打开与前进后退。

专题保留 10 种微生物，独立于动物物种档案、搜索、轮播和分类图谱。本期涵盖细菌、真菌与单细胞真核生物，尚未介绍病毒。

页面提供三个发现故事：胡克的《显微图谱》、列文虎克的观察与通信、巴斯德的发酵研究。家长点选时间节点阅读故事和共读问题。各选题的“发现线索”介绍研究者如何获取证据，不声称给出了每种微生物的首次发现日期。

家长可从厨房、身体和水滴三个生活场景选题，也可结合类型筛选或搜索。页面一次展示一个完整共读单元，每种提供“发现线索”“怎样生活”“作用与影响”“危害与防护”四个章节、可直接讲给孩子听的短文、三步过程说明、一道理解题和成人资料来源。切换微生物时重置章节、结构点选、过程步骤和答题状态。搜索无结果时可以恢复全部选题。

## 图像与交互

页面默认展示人工绘制的 SVG 结构示意。孩子点选结构名称后，可以在图上找到对应编号，并读到该结构的说明。酵母展示母细胞与芽；细菌展示球形、链形、杆形或分枝线索；贾第鞭毛虫展示滋养体的双核与四对鞭毛；草履虫展示纤毛、口沟和伸缩泡；眼虫展示鞭毛、叶绿体与眼点。

原有 10 张 AI 科学重建 WebP 保留为“重建插图”辅助视图，不再用十张大图充当页面主体。图片记录见[来源目录](../src/assets/source/microbes/README.md)。结构图与 AI 插图均不按比例，不证明真实尺寸、物种或菌株身份、致病性。

过程区使用代码绘制的图形和图标，帮助家长讲面团膨大、酸奶发酵、肠道营养转化、接触传播、牙菌斑产酸、寄生生活史、草履虫取食与眼虫光合作用。点选三个步骤可逐步阅读说明。过程图为教学示意，不是显微影像或实验结果。

专题使用米白底色、绿色强调和共读工作台布局，支持深浅色与手机端排列。筛选、结构点选、章节和步骤按钮都显示选中状态；状态反馈供辅助技术读取。“一起读”按钮滚动至当前共读单元并聚焦标题，用户要求减少动态效果时取消该按钮的平滑滚动。

## 科学资料与内容边界

2026-10-10 核对了以下内容来源，页面在发现故事和成人备课区提供相应链接：

- [皇家学会：《显微图谱》](https://royalsociety.org/blog/2013/04/restoration-reading/)、[列文虎克](https://royalsociety.org/blog/2023/07/celebrating-leeuwenhoek/)、[1676 年通信记录](https://catalogues.royalsociety.org/CalmView/Record.aspx?id=EL%2FL1%2F19&src=CalmView.Catalog)。
- [巴斯德研究所：发酵研究](https://www.pasteur.fr/en/whats-new/latest-news/features/louis-pasteur-universal-legacy)。
- [SGD：酵母](https://wiki.yeastgenome.org/index.php/What_are_yeast%3F)、[酸奶菌共同发酵研究](https://pubmed.ncbi.nlm.nih.gov/24936380/)、[保加利亚亚种研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC3022021/)。
- [肠道双歧杆菌研究](https://pubmed.ncbi.nlm.nih.gov/19168652/)、[交叉营养研究](https://pubmed.ncbi.nlm.nih.gov/28721502/)。
- [CDC：大肠杆菌](https://www.cdc.gov/ecoli/about/index.html)、[沙门菌](https://www.cdc.gov/salmonella/about/index.html)、[爬行动物与两栖动物](https://www.cdc.gov/healthy-pets/about/reptiles-and-amphibians.html)、[贾第鞭毛虫生活史](https://www.cdc.gov/dpdx/giardiasis/index.html)、[生面团食品安全](https://www.cdc.gov/food-safety/foods/no-raw-dough.html)、[洗手](https://www.cdc.gov/clean-hands/about/index.html)。
- [NIDCR：龋齿](https://www.nidcr.nih.gov/health-info/tooth-decay)。
- [OpenStax：单细胞生物的结构与生活方式](https://openstax.org/books/biology-2e/pages/23-3-groups-of-protists)、[眼虫感光研究](https://pubs.rsc.org/En/content/articlehtml/2012/ib/c1ib00115a)。

德氏乳杆菌的酸奶发酵介绍限定保加利亚亚种。贾第鞭毛虫保留同物异名和滋养体、包囊的区别。大肠杆菌区分无害类型与致病类型；肠道菌研究不延伸成益生菌购买或治疗建议。卫生提示采用生活动作，不安排幼儿培养未知样本，不提供诊断或用药建议，不责怪生病的孩子。

## 本次验证

- `npm run typecheck` 通过。
- `npm run test:microbes`：6 项通过，覆盖十个选题隔离、内容完整性、来源链接格式、场景与类型联合筛选、空结果恢复、结构标记、章节切换、过程点选、答题反馈、状态重置、标题聚焦、图片尺寸与哈希、路由切换。
- `npm run test:dist-subpath`：4 项通过，包含生产构建、子路径资源、独立懒加载和既有 JavaScript 预算。
- `git diff --check` 通过。

按项目约定未启动 GUI 或无头浏览器；DOM 测试、构建与静态检查不能代替浏览器里的视觉验收。

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
