# 2026-10-07 待办第四批五种动物

按活动待办顺序增加大丽花螳螂、长颈卷叶象、金龟甲、大花金龟、澳洲织叶蚁。每种包含物种档案、一张封面与五张观察图，共 30 张内置 image_gen 生成的科学情景重建。当前共 485 份档案；本轮已完成 85 种，活动待办剩余 15 种动物与 10 个微生物专题。

## 资料口径

| 物种 | 分类与观察重点 | 保护等级口径 |
| --- | --- | --- |
| 大丽花螳螂 Pseudocreobotra wahlbergii | 花螳科；前翅螺旋眼斑、捕捉足和较晚若虫。保留待办中文称呼，说明 wahlbergi 拼写变体。 | 未核实全球评估，沿用 NE 占位。 |
| 长颈卷叶象 Trachelophorus giraffa | 卷象科；马达加斯加特有，雄性长颈、雌性卷叶。与新西兰长颈象甲区分。 | NT。GBIF 展示等级与 Englefield 2021 红色名录引文相符；原页/PDF 本次返回访问限制，未把出版年填作评估年，也未推断标准或趋势。 |
| 金龟甲 Charidotella sexpunctata | 叶甲科；透明宽边、5—7 mm 成虫与幼虫的盾状物。UF/IFAS 仍用 bicolor 旧名，其北美生态资料有范围限定。 | 未核实全球评估，沿用 NE 占位。 |
| 大花金龟 Goliathus goliatus | 金龟科；雄虫分叉角、雌虫无同样的角，区分幼虫与成虫食物。 | 2025 年研究建议 NT，不等同于 IUCN 正式评估；保留 NE 占位并解释。 |
| 澳洲织叶蚁 Oecophylla smaragdina | 蚁科；分布也包括亚洲，工蚁拉叶、幼虫供丝，与非洲织叶蚁及切叶蚁区分。 | OZCAM 馆藏记录标 NE；未核实全球评估，不采用地区报告中的 LC 或 DD。 |

主要来源：

- [NCBI 大丽花螳螂分类](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=406587)、[Santi Longo 的形态与生活史说明](https://www.monaconatureencyclopedia.com/pseudocreobotra-wahlbergii/?lang=en)。不采用该文中超出本次观察需要的交配神经机制解释。
- [旧金山动物园无脊椎动物资料](https://www.sfzoo.org/pdf/education/SLP%20docs/SLP%20-%20Invertebrates%20Information%20Sheets.pdf)、[GBIF 长颈卷叶象记录](https://www.gbif.org/taxon/7CLDD)、[IUCN 2021 引文](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T193348632A193724158.en)。动物园 PDF 中“2008 年发现”和未评估的旧说法不采纳；不沿用网络页面中吐丝捆扎叶卷的说法。GBIF 记录的命名作者存在差异，档案不补入作者年份。
- [爱荷华州立大学 BugGuide 金龟甲记录](https://www.bugguide.net/node/view/8826)、[UF/IFAS 生物学资料](https://ask.ifas.ufl.edu/publication/IN140)。图集颜色对照不表示同一个体的实时变色。
- [辛辛那提动物园](https://cincinnatizoo.org/animals-archive/goliath-beetle/)、[Woodland Park Zoo 2025 年观察](https://blog.zoo.org/2025/08/a-first-for-woodland-park-zoo-goliath.html)、[2025 年大花金龟属保护研究](https://onlinelibrary.wiley.com/doi/10.1111/aje.70018)。体长约 4 英寸换算为 10.2 cm；不写“世界最大”或把幼虫重量套给成虫。
- [加拿大自然博物馆的织叶行为说明](https://nature.ca/en/amazing-ants/)、[澳大利亚博物馆蜥蜴岛照片记录](https://lifg.australian.museum/HotShot.html?resourceId=bqVnJMH2)、[马来西亚理科大学食物与觅食研究](https://ejournal.usm.my/tlsr/article/view/tlsr_vol30-no-2-2019_12)。人工诱饵不写成野外食谱。

## 图片与尺度

图片使用内置 image_gen，逐张生成、逐张查看原分辨率源图，转换时保留 1536×1024 尺寸。所有图注标注 AI 重建和放大展示。生成图不能作为物种鉴定、体节计数或实际测量证据。

大花金龟的尺寸共读改用成人以直尺在纸上画 10 cm 线段；屏幕中的树枝与树皮没有已知尺寸，不能伪装成比例尺，也没有据生成图推算体宽。

长颈卷叶象叶卷首版出现绑线，已用 image_gen 去除；织叶蚁供丝图修正为幼虫小头端靠近叶缘。封面调整包含触角或足的整体位置，未用 CSS 缩放掩盖源图构图问题。大丽花螳螂的刺、金龟甲的透明边与反光、蚁巢缝合结构均有艺术简化。大花金龟不同图中的浅色鞘翅边纹不代表所有个体一致。

最终提示词、源图与运行图哈希、完整主体边界及九档几何记录分别保存在：

- [大丽花螳螂图片记录](../../src/assets/source/species/spiny-flower-mantis/README.md)
- [长颈卷叶象图片记录](../../src/assets/source/species/giraffe-weevil/README.md)
- [金龟甲图片记录](../../src/assets/source/species/golden-tortoise-beetle/README.md)
- [大花金龟图片记录](../../src/assets/source/species/goliath-beetle/README.md)
- [澳洲织叶蚁图片记录](../../src/assets/source/species/asian-weaver-ant/README.md)

## 验证

- `npm run typecheck` 通过。
- `npm test` 全部通过：218 项分类/档案测试；493 项轮播几何与资源测试；其余图片、交互、查看器、列表及部署检查通过。
- `test:dist-subpath` 包含生产构建、子路径资源访问、逐档案加载和目录字段无损还原，3 项通过。
- 首屏 JavaScript 实际合计 545,996 字节，低于 550,000 字节；入口脚本 349,206 字节，低于 350,000 字节。未提高预算。
- 原分辨率源图逐张检查完成；五张最终 WebP 封面单独复核，五组运行图联系表与各九档图片栏模拟已查看。完整主体在所有计算视口中至少留出 24 CSS px，初始及前后切换端点只改变透明度。
- `git diff --check` 通过。每种仅保留六张 WebP，合计 30 张；项目内临时 PNG 已删除。

遵守项目约束，未启动 GUI 或无头浏览器。静态几何和图片栏模拟不能验证浏览器字体排版或完整页面。
