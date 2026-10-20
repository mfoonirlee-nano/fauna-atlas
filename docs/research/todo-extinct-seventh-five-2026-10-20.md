# 第七批灭绝动物：E031–E035

2026-10-20 核验。五种均为已灭绝非鸟恐龙，沿用 `Historical and fossil evidence` 与 EX，不填写 IUCN 评估年份，不添加当前活体坐标。代表时期、化石产区和精确灭绝日期分开表达，不从 PBDB 的聚合地层边界推算末次个体。

| 编号 | 物种与来源 | 内容限定 |
| --- | --- | --- |
| E031 | [霸王龙 Tyrannosaurus rex](https://www.nhm.ac.uk/discover/dino-directory/tyrannosaurus.html) | 晚白垩世北美；比较大头、短前肢、两指和后腿。局部鳞片印痕不能确定完整体表，前肢功能与群体行为保留未知，不采用影视咆哮或围猎作事实。 |
| E032 | [三角龙 Triceratops horridus](https://www.nhm.ac.uk/discover/dino-directory/triceratops.html) | 晚白垩世北美；两根长眉角、一根较短鼻角和颈盾。本档案采用具体种 horridus；不用 prorsus 的种名或把个体头骨差异直接当作不同种。 |
| E033 | [装甲剑龙 Stegosaurus stenops](https://www.nhm.ac.uk/discover/dino-directory/stegosaurus.html) | 晚侏罗世；Sophie 标本属本种。背板交错排列，尾端两对刺；背板功能保留假说，不讲“两颗脑”。Marsh 1887 是种名年份，1877 是更早的属名命名。 |
| E034 | [巨型腕龙 Brachiosaurus altithorax](https://www.nhm.ac.uk/discover/dino-directory/brachiosaurus.html) | 晚侏罗世北美；前肢长于后肢。化石不完整，全身复原常借用近缘 Giraffatitan；不声称有本种完整骨架或确定头部、软组织。 |
| E035 | [卡内基梁龙 Diplodocus carnegii](https://carnegiemnh.org/house-dippy-built/) | 晚侏罗世莫里森组；细长颈和鞭状尾。Dippy 骨架及复制件不等于一具原封完整个体，2025 年研究详述组合与补配历史。不把鞭尾爆响当作确认行为。 |

补充采用 [NHM 对剑龙的扫描与活动研究](https://www.nhm.ac.uk/discover/stegosaurus-brought-to-life.html)、[剑龙头骨取食研究说明](https://www.nhm.ac.uk/discover/news/2016/may/dinosaur-eating-habit-insights-stegosaurus-stenops.html)、[霸王龙前肢功能讨论](https://www.nhm.ac.uk/discover/how-did-tyrannosaurus-use-its-arms.html)、[Field Museum 腕龙复制骨架说明](https://www.fieldmuseum.org/blog/why-we-dont-dress-sue-or-any-other-real-skeletons)和 [Taylor 等 2025 年 Dippy 骨架研究原文](https://www.miketaylor.org.uk/dino/pubs/taylor-et-al-2025/TaylorEtAl2025--history-and-composition-of-the-Carnegie-Diplodocus.pdf)。原文说明组合标本和前足补配的修订；图集中的外观模型不仿造化石或实物馆藏。

## 分类采用与差异

[GBIF 查询原始记录](../../src/assets/source/todo-extinct-seventh-five-taxonomy-match.json)、[PBDB 原始记录](../../src/assets/source/todo-extinct-seventh-five-pbdb.json)与[逐种采用表](../../src/assets/source/todo-extinct-seventh-five-adopted-taxonomy.json)分别保留查询和决定。图谱继续以 GBIF 的有阶元路径为基线，五种使用界、门、科、属、种；本次 GBIF 链没有纲与目，按 ADR 0002 省略，不把未定阶元的 Dinosauria、Saurischia 或 Ornithischia 填为占位纲或目。PBDB 返回的 class 在 Reptilia、Ornithischia、Saurischia 间不一致，没有将这些原始列标签混入本图谱。

GBIF 将 Triceratops horridus 返回为 SYNONYM，并列 genus=Ceratops。采用 PBDB 的 accepted_name=Triceratops horridus、genus=Triceratops，以及 NHM 与 Smithsonian 当前馆藏使用的名称，记录这项偏离。[Smithsonian 馆藏名称](https://www.si.edu/object/nmnhpaleobiology_3572783)供交叉核对。三角龙仍归角龙科，不把旧名命中当作新增物种。

霸王龙归暴龙科，剑龙归剑龙科，腕龙归腕龙科，梁龙归梁龙科。中文选题名沿用 todo，以具体学名约束物种。分类图谱只表达归属，不表达亲缘远近或生存时间。

## 图片与验证

图片使用内置 image_gen，一张封面及五张观察图分别保存在 `public/images/species/<slug>/`；提示词、修订及验收保存在 `src/assets/source/species/<slug>/`。六图分别观察全身比例、头与颌部、涂装外观模型、古环境和两个观察方向。均标注 AI 生成科学复原示意，色彩、软组织、植物、光照与姿态含推测。晚侏罗世动物不与晚白垩世动物同场，双视角不表达雌雄配对或真实相遇。

封面初稿的头、角或颈部伸入左侧文案区，已用生成工具调整主体位置和大小，保留完整长尾、角尖和板刺。五张头部观察图初稿混入其他物种，已重做为对应物种的特写。腕龙、梁龙的封面与全身观察图进一步修正前足，去除前缘多枚趾甲，采用柱状前足及内侧拇指爪。逐次提示词与最终采用键均保留，弃稿不进入运行图集。

封面源 PNG 与运行 WebP 分别按原分辨率目视检查，源图和运行图六张联系表分别检查。各封面实际解码尺寸均为 1536×1024；测量完整主体边界并绑定当前 SHA-256，同步至 cover-subjects.ts、original-covers.json、物种 README 及 hero-acceptance.json。

逐种检查九档视口以及桌面内容高度 +160px，共 80 组几何；六种动画端点只改变透明度，共用位置与尺寸，完整主体间距均至少 24 CSS px。以保留 WebP 检查 390、761、1920、3840 宽图片栏模拟，覆盖长颈、长尾及角刺。没有打开 GUI 或无头浏览器；静态几何与模拟不验证浏览器字体、完整页面排版或实际内容驱动高度。

最终验证：

- `npm run typecheck` 通过。
- `npm test` 全部 1061 项通过，包括分类与内容、按需档案加载、图片、轮播、查看器、图谱、列表、微生物与生产资源检查。
- `npm run test:carousel` 专项通过，主测试 743 项、交互 8 项；全量测试再次通过。
- `test:dist-subpath` 包含生产构建，5 项通过。动物页面脚本共 548,572 字节，低于 550,000 字节预算；没有修改打包实现或预算。
- `git diff --check` 通过。验收后清理临时 PNG、PDF、联系表、模拟与脚本，只保留 30 张 WebP，共 9,063,792 字节，以及提示词和验收证据。

E031–E035 已在 todo 勾选并移入完成归档。本轮完成 35，待制作 65；动物目录共 735 份档案。
