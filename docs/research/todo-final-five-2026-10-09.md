# 2026-10-09：完成 TODO 最后五种动物

新增心形鸟蛤、紫螺、仙后水母、血腹栉水母和萼花臂尾轮虫，目录从 495 种增至 500 种。本轮 100 种动物全部完成，活动待办只保留 10 个微生物专题；非动物专题尚未接入动物分类图谱。

## 资料范围

| 物种 | 核验与限定 |
|---|---|
| 心形鸟蛤 *Corculum cardissa* | [西澳博物馆](https://museum.wa.gov.au/online-collections/names/corculum-cardissa)支持壳体形态、透光区域和光合共生；[原始光学研究](https://doi.org/10.1038/s41467-024-53110-x)研究壳体传光机制。心形来自立体双壳结构，观察角度会改变轮廓。[法国自然历史博物馆的东帝汶标本](https://science.mnhn.fr/institution/mnhn/collection/im/item/2024-14208)提供具体地点，不当作完整分布边界。 |
| 紫螺 *Janthina janthina* | [澳大利亚博物馆](https://australian.museum/learn/animals/molluscs/violet-snail/)支持泡沫筏、紫色壳、海面漂浮、三大洋热带亚热带范围和漂浮刺胞动物食物。大小约 3 厘米采用该馆记录，不作为所有成体的固定长度。没有采用该页对释放幼体阶段的简化叙述。 |
| 仙后水母 *Cassiopea xamachana* | [系统综述](https://www.frontiersin.org/journals/ecology-and-evolution/articles/10.3389/fevo.2018.00035/full)支持倒置生活和藻类共生；[Smithsonian 研究通报](https://www.si.edu/newsdesk/releases/stinging-water-mystery-solved-jellyfish-can-sting-swimmers-prey-mucus-grenades)支持黏液中刺细胞结构与捕食。[加勒比海名录研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC12869186/)提示属内近似种存在外观重叠，因此不凭生成图辨种，也不合并所有仙后水母属分布。 |
| 血腹栉水母 *Lampocteis cruentiventer* | [MBARI](https://www.mbari.org/animal/bloody-belly-comb-jelly/)支持最大体长 16 厘米、250—1500 米记录深度、北太平洋范围、红色消化区域与纤毛游泳；[蒙特雷湾水族馆](https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/bloodybelly-comb-jelly)支持梳板衍射。两方具体食谱均列为未知，档案保留空食物列表及说明。观察灯下的红色和彩色光带不代表深海自然照明。 |
| 萼花臂尾轮虫 *Brachionus calyciflorus* | [2018 年复合种修订](https://pmc.ncbi.nlm.nih.gov/articles/PMC6147415/)重新描述四种，支持狭义物种被甲、前背缘四棘和分布限定。[FAO 淡水轮虫资料](https://www.fao.org/4/w3732e/w3732e0h.htm)支持藻类食物记录；该资料早于修订，按广义历史培养记录使用，不引入其中寿命、繁殖率或培养条件作为狭义物种的固定参数。轮虫是多细胞动物，全套图片注明显微放大与非实测比例。 |

五种接受学名与六级分类链通过 WoRMS REST 实读核对：

- [心形鸟蛤分类链](https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/216387)：Mollusca / Bivalvia / Cardiida / Cardiidae / Corculum。
- [紫螺分类链](https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/140155)：Mollusca / Gastropoda / **Caenogastropoda incertae sedis** / Epitoniidae / Janthina。保留数据库目级未定状态，没有改填 Littorinimorpha 或将超科 Epitonioidea 写成目。
- [仙后水母分类链](https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/287172)：Cnidaria / Scyphozoa / Rhizostomeae / Cassiopeidae / Cassiopea。
- [血腹栉水母接受记录](https://www.marinespecies.org/rest/AphiaRecordsByName/Lampocteis%20cruentiventer?like=false&marine_only=false)：Ctenophora / Tentaculata / Lobata / Lampoctenidae / Lampocteis。
- [萼花臂尾轮虫分类链](https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/134980)：Rotifera / **Eurotatoria** / Ploima / Brachionidae / Brachionus；Monogononta 在该口径中为亚纲。

WoRMS 部分网页与 DOI 跳转未能直接读取，分类采用 REST 返回记录；论文正文通过可读的出版页、PMC 或搜索索引核验。五种均沿用项目 NE 占位规则，说明本次未核实全球物种级 IUCN 评估；未填评估年份，也未推断全球种群趋势。

## 图片和封面验收

使用内置 image_gen 为五种动物各生成六个独立场景。仙后水母封面追加一次构图编辑；轮虫观察图 02、04、05 初稿有多余侧棘，使用已检查封面作形态参考重新生成。每种保留一张封面及五张观察图，共 30 张 1536×1024 WebP，路径为 `public/images/species/<slug>/`。

最终提示词、生成输入与运行时哈希、完整主体边界和九档视口数据分别记录于：

- [心形鸟蛤图片集](../../src/assets/source/species/heart-cockle/README.md)
- [紫螺图片集](../../src/assets/source/species/violet-snail/README.md)
- [仙后水母图片集](../../src/assets/source/species/upside-down-jellyfish/README.md)
- [血腹栉水母图片集](../../src/assets/source/species/bloody-belly-comb-jelly/README.md)
- [萼花臂尾轮虫图片集](../../src/assets/source/species/brachionus-calyciflorus/README.md)

源图检查：联系表覆盖全部最终场景，五张封面按原始分辨率检查，轮虫重生图另作全尺寸复核。

最终 WebP 检查：读取实际解码尺寸与 SHA-256，五张封面按原始分辨率复核，五组运行时联系表检查每个场景。生成图用于观察外形，不用于精确计数微小结构或鉴定近似种。

几何检查：五张封面的完整主体边界同步写入主体表及唯一封面 fixture，绑定当前图像哈希。320×760、390×760、761×760、900×760、1100×768、1366×768、1920×900、2560×900、3840×900 共 45 组检查均达到 24 CSS px 最小边距。当前动画只改变透明度，settled、initial 及前后 enter/leave 端点沿用相同几何边界。

视觉模拟：使用保留 WebP 与当前 `fitHeroSubject`、移动端 contain 规则查看全部 45 个图片栏模拟。文案和控制按钮使用现有独立布局区域。没有启动浏览器；静态模拟不能验证浏览器字体、内容驱动的实际高度或完整页面排版。

## 首屏构建预算

新增数据后，沿用长档案文件名的入口脚本为 352,044 字节，超出 350,000 字节预算。`vite.config.ts` 对虚拟档案模块采用 `p-[hash].js` 短文件名，减少延迟加载地址中重复出现的 slug；虚拟模块 ID、目录内容和按物种独立加载方式保持原有行为。

调整后入口脚本为 345,020 字节，初始 JavaScript 合计为 541,810 字节，分别低于 350,000 与 550,000 字节预算。生产测试逐项比对目录字段与完整档案，并验证子路径资源可达性。

## 验证结果

- `npm run typecheck` 通过。
- `npm test` 全部 775 项通过，包含分类与资料限定、图片哈希、508 项封面几何测试、生产构建和子路径资源测试。沙箱内首次运行因端口监听被禁止而失败，获准在沙箱外重跑后通过。
- 30 张最终 WebP 的实际尺寸、唯一哈希及提示词记录核对通过；五组来源目录仅保留 README、提示词和验收记录，临时 PNG 已清理。
- 完成归档为 100 个唯一物种，活动 TODO 为 10 个微生物专题。
- `git diff --check` 通过。未进行浏览器排版验证。
