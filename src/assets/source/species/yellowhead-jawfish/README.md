# 黄头后颌鰧图片记录

2026-10-07 使用内置 image_gen 逐张生成，保留一张封面及五张观察图。最终生成或编辑提示词与 SHA-256 见 [prompts.json](./prompts.json)，资料见[本批记录](../../../../../docs/research/todo-five-2026-10-07.md)。

## 源图与运行图

逐张按原分辨率查看临时源 PNG；运行封面另按原分辨率检查，六张运行 WebP 用联系表复核。源图与实际解码 WebP 均为 1536×1024。

封面完整主体边界为 `(713, 92, 1446, 838)`，包含吻端、诱饵（如有）、各可见鳍缘与尾端。主体大小为 733×746 px，水平中心为源宽的 70.3%。主体位于右侧，左侧 40% 保留安静环境。focalPoint 为 `(0.7, 0.5)`。首次收录，没有旧运行封面可比较。

运行封面 SHA-256：`6e78c2f0c18f6671a9f43d79e4547a7851c159d9c5d59ea23f6cf412e89b6573`。边界、实际解码尺寸写入 cover-subjects.ts，并与 original-covers.json 的哈希记录一致。

口孵图示意雄鱼嘴内的卵团，不表示摄食，也不能据此测量卵径或数量。搬石块与口孵是不同活动；双鱼图不推断配偶关系。头部颜色按学名对应物种重建。

## Hero 几何与静态模拟

使用当前 CSS 面板尺寸公式与 fitHeroSubject，桌面在至少 24 CSS px 留白内最大化完整主体，手机使用 24px 内边距 contain 完整原图。文字和控件按当前布局处于独立列或图下。

| 视口 | 图片栏 CSS px | 主体 CSS px | 最小边距 CSS px |
| --- | --- | --- | --- |
| 320×760 | 320.0×260.0 | 129.8×132.1 | 39.9 |
| 390×760 | 390.0×292.5 | 163.2×166.1 | 44.0 |
| 761×760 | 392.5×494.0 | 344.5×350.6 | 24.0 |
| 900×760 | 469.2×494.0 | 421.2×428.7 | 24.0 |
| 1100×768 | 579.6×499.2 | 443.3×451.2 | 24.0 |
| 1366×768 | 726.4×499.2 | 443.3×451.2 | 24.0 |
| 1920×900 | 875.8×585.0 | 527.6×537.0 | 24.0 |
| 2560×900 | 874.0×585.0 | 527.6×537.0 | 24.0 |
| 3840×900 | 874.0×585.0 | 527.6×537.0 | 24.0 |

按最终 WebP 制作并检查以上九档图片栏静态模拟。当前图片动画仅改变透明度，无缩放或位移；静止、初始入场、前进与后退 enter/leave 端点共用上述几何。没有启动 GUI 或无头浏览器；静态几何与模拟不验证浏览器字体排版及完整页面。

## 来源与保护记录

FishBase 转录 IUCN 全球 LC，评估日期为 2012-01-23；全球种群趋势未核实。

- [FishBase：辨识、口孵、分布及 LC 评估日期](https://www.fishbase.se/summary/Opistognathus_aurifrons.html)
- [西印度大学：黄头后颌鰧自然史](https://sta.uwi.edu/fst/lifesciences/sites/default/files/lifesciences/documents/ogatt/Opistognathus_aurifrons%20-%20Yellow-headed%20Jawfish.pdf)
- [Smithsonian：物种记录与分类口径](https://www.si.edu/es/object/opistognathus-aurifrons%3Anmnhvz_11878040)
- [行政院公报：学名与黄头后颌鰧中文名对照](https://gazette.nat.gov.tw/EG_FileManager/eguploadpub/eg023201/ch07/type2/gov62/num13/Eg.pdf)

## 文件哈希

| 图号 | 源 PNG | 运行 WebP |
| --- | --- | --- |
| 01-cover | `069e049f044a6ad989b75812fa3816a417687a82bbbd01c13cdcd4fcd89e2837` | `6e78c2f0c18f6671a9f43d79e4547a7851c159d9c5d59ea23f6cf412e89b6573` |
| 02-observation | `79732abd4b67caed81abe901dede2a314a73297cf5d15d46e02c05a2da1f2fd8` | `0ffcc86ed6fc4a3daaa31a7daf7384eb33327490c4aaa021443dac04205dff45` |
| 03-observation | `9dc50eb417e535fd36dc741cc056e8cfce7470965300fbe0d718c635af6834b0` | `5b0b5731633e4f75df8d360d34b2dcedb98bc5d75857d93a9092509c34eac2d9` |
| 04-observation | `96576eff5e6633a41962fa2aa3568942bebcf228b271bf6416b23f531c5ac3b0` | `a7debfe9ca7398e8a9df9579f92a1e6222553ae56b1d88941c6335aa945f34ba` |
| 05-observation | `25e45a7e7236e6b0cd36b238f46b29239a50fedf8666e3a5e2cd2615c8369a8f` | `7ad4f04ffc6b8ec925f9ac28ef7741865b4c154fd5cfd6ec0ed55de885548f05` |
| 06-observation | `364b03209a52cc36b63dcd1c6baeeab8791e619fd758d0b0c52848bc13c7fabc` | `38ade993a959c026da13cf2d58b63ea7f86bd50db21a50b5c4e5e2081f5991f8` |

验证结果见本批记录。验收后移除项目内临时源 PNG，保留运行 WebP；工具默认生成目录中的原始输出保留。
