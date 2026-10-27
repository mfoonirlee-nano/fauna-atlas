# 新奇动物第五批五种

本批收录 N032 巨型幽灵水母、N033 疙瘩水母、N035 绒球海葵、N036 米尔斯十字水母和 N040 深渊瓜水母。每种有一份档案、一张封面及五张观察图。正式目录由 820 增至 825 份，本轮由 20/100 增至 25/100。

## 分类与资料核查

2026-10-27 重新查询 GBIF 接受名、完整异名结果，保存[本批快照](../../src/assets/source/todo-novel-fifth-five-taxonomy.json)。五种均为精确匹配的接受种，接受名及返回的异名与原目录学名没有直接重叠。此项是名称去重，不替代种界研究。分类以项目 GBIF 基线为准，共用阶元复用已有中文名称；未核实中文规范名的新属、Liponematidae 与 Rhopalonematidae 保留拉丁名称加阶元。

| 编号 | 接受名 | 纲 / 目 / 科 |
| --- | --- | --- |
| N032 | Stygiomedusa gigantea | Scyphozoa / Semaeostomeae / Ulmaridae |
| N033 | Stellamedusa ventana | Scyphozoa / Semaeostomeae / Ulmaridae |
| N035 | Liponema brevicorne | Anthozoa / Actiniaria / Liponematidae |
| N036 | Crossota millsae | Hydrozoa / Trachymedusae / Rhopalonematidae |
| N040 | Beroe abyssicola | Nuda / Beroida / Beroidae |

前四种属于刺胞动物门，深渊瓜水母属于栉水母动物门。五种均未核实可追溯的 IUCN 全球评估，NE 仅表示档案资料缺口，不声称已确认没有评估，也不填写种群趋势。对 IUCN 网站的学名搜索未获得可确认的评估页，搜索无结果不能证明未评估。

原拟选 N034 双列管水母，复核时发现 [2024 年 Nanomia 分类研究](https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2024.1421514/full)指出部分历史上称作 N. bijuga 的研究材料实际涉及 N. septata。本批改选 N040；N034 保持未完成，后续须先厘清严格种义与旧研究材料，不能照搬蒙特雷旧记录。

## 逐种证据边界

- **巨型幽灵水母：** [MBARI](https://www.mbari.org/animal/giant-phantom-jelly/)支持四条宽带状口腕与深海鱼伴游记录；食谱保留“推测”。2004 年关联论文的 DOI 页面未能直接读取，行为依据为 MBARI 的研究介绍，论文链接作为文献入口。命名署名与异名采用 GBIF 当前记录。MBARI 对早期标本与新种认识的叙述和命名年份不宜直接串成单一时间线，档案只写可核实的命名署名，不把 1959 年当作现用名的原始命名年份。
- **疙瘩水母：** [现行简介](https://www.mbari.org/animal/bumpy-jelly/)与 [2004 年发现介绍](https://www.mbari.org/news/new-bumpy-jelly-found-in-deep-sea/)支持表面突起、无长边缘触手及口腕收集食物；[WoRMS](https://www.marinespecies.org/aphia.php?id=291114&p=taxdetails)核对 2004 年原始描述。1990 年首次观察与正式命名分开叙述。
- **绒球海葵：** [MBARI](https://www.mbari.org/animal/pom-pom-anemone/)记录身体变形与随流滚动。“到食物更多处”保留研究者推测。brevicornis 的旧拼法按 [WoRMS](https://www.marinespecies.org/aphia.php?p=taxlist&tName=Liponema+brevicornis)对应到接受名 brevicorne。
- **米尔斯十字水母：** [MBARI](https://www.mbari.org/animal/psychedelic-jelly/)及 [Thuesen 原始描述](https://www.mapress.com/zootaxa/2003f/zt00309.pdf)支持伞下育幼，食谱仍未知。[Mills 本人说明](https://faculty.washington.edu/cemills/jellyfishstamp.html)支持纪念命名及 millsaeare 误拼；该网页文末参考文献年份有误，采用原始论文首页明确标注的 2003 年。内部生殖腺与幼体分开解释。
- **深渊瓜水母：** [MBARI](https://www.mbari.org/animal/abyssal-comb-jelly/)支持吞食其他栉水母及红色消化腔遮光解释；[WoRMS](https://www.marinespecies.org/aphia.php?id=265150&p=taxdetails)支持 Mortensen 1927 年命名和模式产地。梳板反射彩光不等于生物发光；图像不用于判断发光强度或吸光能力。

分布坐标均为浏览用代表点，不表示完整范围或野外观察记录。未核实的体重、寿命和繁殖数量不填入指标。

## 图片与静态验收

使用内置 image_gen，未调用 CLI/API。每种六张 1536×1024 WebP 位于 `public/images/species/<slug>/`，最终提示词、PNG 与 WebP 的尺寸和 SHA-256、构图边界及几何记录位于 `src/assets/source/species/<slug>/`：

- [巨型幽灵水母](../../src/assets/source/species/giant-phantom-jelly/README.md)
- [疙瘩水母](../../src/assets/source/species/bumpy-jelly/README.md)
- [绒球海葵](../../src/assets/source/species/pom-pom-anemone/README.md)
- [米尔斯十字水母](../../src/assets/source/species/psychedelic-jelly/README.md)
- [深渊瓜水母](../../src/assets/source/species/abyssal-comb-jelly/README.md)

逐种检查源图、运行图联系表，并按原分辨率检查封面。育幼图初稿将幼体画在伞外，已重新生成伞内位置示意。图集仅作科学情景重建，不充当鉴定、解剖计数、显微尺度或连续行为证据；各物种记录保留纹理、遮挡和比例局限。

五张封面完整轮廓的水平中心均在源宽 60% 以右，源图四周保留背景。静态几何覆盖九档指定视口及桌面内容增高 160px，共 80 个视口/高度组合；每项覆盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave，主体最小间距不低于 24 CSS px。逐种检查 390、761、1920、3840 宽的图片栏模拟。

静态几何和图片栏模拟不验证浏览器字体、完整页面排版或实际内容高度。按项目要求未启动 GUI 或无头浏览器。

## 验证记录

运行了完整 `npm test`。沙箱内地图测试因 Vite 监听端口返回 EPERM，获准后在沙箱外重跑；档案、文案覆盖、分类、地图、轮播、图片查看器及其他功能子套件通过。首次生产检查发现动物页面 JS 为 550,304 字节，超过 550,000 字节预算。

在 `scripts/species-bundle.ts` 中让高频标签获得更短索引，并让英文词组参与重复文本压缩。未删改展示内容，也未提高预算。修复后重新运行 `npm run test:dist-subpath`，构建与五项生产检查全部通过，动物页面 JS 降至 549,567 字节；全目录逐字段还原、独立档案加载、图片子路径和体积预算均通过。完整 `npm test` 中其他已通过的子套件未因本次打包规则调整而重复运行。

`git diff --check` 通过。另核对本批 30 张运行图的尺寸及源图/运行图 SHA-256，清理了项目内临时 PNG，检查图片数量、文档相对链接及 N001–N100 的完成计数。
