# 波纹唇鱼图片记录

2026-10-07 使用内置 image_gen 逐张生成，保留一张封面及五张观察图。最终生成或编辑提示词与 SHA-256 见 [prompts.json](./prompts.json)，资料见[本批记录](../../../../../docs/research/todo-five-2026-10-07.md)。

## 源图与运行图

逐张按原分辨率查看临时源 PNG；运行封面另按原分辨率检查，六张运行 WebP 用联系表复核。源图与实际解码 WebP 均为 1536×1024。

封面完整主体边界为 `(688, 194, 1502, 658)`，包含吻端、诱饵（如有）、各可见鳍缘与尾端。主体大小为 814×464 px，水平中心为源宽的 71.3%。主体位于右侧，左侧 40% 保留安静环境。focalPoint 为 `(0.7, 0.5)`。首次收录，没有旧运行封面可比较。

运行封面 SHA-256：`fb0d20018dd7c4d9f87cdacbe43c8be172b5ec3dfd65bb4d47e7fb5754932de9`。边界、实际解码尺寸写入 cover-subjects.ts，并与 original-covers.json 的哈希记录一致。

03 观察图是成体与幼体的生活阶段对照，不表示亲子照护、同一个体连续成长或实测体型比例。面部花纹不能用于个体识别。初版封面侵入左侧留白，已重做。

## Hero 几何与静态模拟

使用当前 CSS 面板尺寸公式与 fitHeroSubject，桌面在至少 24 CSS px 留白内最大化完整主体，手机使用 24px 内边距 contain 完整原图。文字和控件按当前布局处于独立列或图下。

| 视口 | 图片栏 CSS px | 主体 CSS px | 最小边距 CSS px |
| --- | --- | --- | --- |
| 320×760 | 320.0×260.0 | 144.1×82.2 | 30.0 |
| 390×760 | 390.0×292.5 | 181.2×103.3 | 31.6 |
| 761×760 | 392.5×494.0 | 344.5×196.4 | 24.0 |
| 900×760 | 469.2×494.0 | 421.2×240.1 | 24.0 |
| 1100×768 | 579.6×499.2 | 531.6×303.0 | 24.0 |
| 1366×768 | 726.4×499.2 | 678.4×386.7 | 24.0 |
| 1920×900 | 875.8×585.0 | 827.8×471.9 | 24.0 |
| 2560×900 | 874.0×585.0 | 826.0×470.8 | 24.0 |
| 3840×900 | 874.0×585.0 | 826.0×470.8 | 24.0 |

按最终 WebP 制作并检查以上九档图片栏静态模拟。当前图片动画仅改变透明度，无缩放或位移；静止、初始入场、前进与后退 enter/leave 端点共用上述几何。没有启动 GUI 或无头浏览器；静态几何与模拟不验证浏览器字体排版及完整页面。

## 来源与保护记录

FishBase 转录 IUCN 全球 EN，评估日期为 2024-07-17；全球种群趋势未核实。

- [Fishes of Australia：分类、分布与生活史](https://fishesofaustralia.net.au/home/species/2962)
- [澳大利亚博物馆：幼体与成体辨识](https://australian.museum/learn/animals/fishes/humphead-maori-wrasse-cheilinus-undulatus/)
- [FishBase：2024 年全球 EN 评估](https://www.fishbase.se/summary/Cheilinus-undulatus.html)

## 文件哈希

| 图号 | 源 PNG | 运行 WebP |
| --- | --- | --- |
| 01-cover | `42b8e1c010c7e0960ec4327fce7a55eecc5b17043820906d53e968e3695592f7` | `fb0d20018dd7c4d9f87cdacbe43c8be172b5ec3dfd65bb4d47e7fb5754932de9` |
| 02-observation | `e2b9bb6698ae6dd9d9adbc2bb0949f4b55610cfa311b7ce2d8437c48748d8989` | `b8738f1bb83d249b779952d4781fc4dcb3dbdf066027124f6865636f97302d14` |
| 03-observation | `aa03a31395f920b2ac8a771c35c66be6b4a7fde1965e3fbd38f7642585b507b6` | `3b8bc87b893fbe8d6d9b06507183a0eeb1f77cadecc38c5937f74e9836bffaba` |
| 04-observation | `8c45bcc4676bfb4a1bc0e4aa8f168fa0f395eb116fe6146e9ae95cab5fcad455` | `eb8cc8d344096d4108c427cfeae6543386fec51c36f82001bc4440e9d0c9de7c` |
| 05-observation | `002a3be9663a1df8df71a9103225b9221d76ae1cd6bdec83f580bb02204de5af` | `bb33df402d388860f51bf23e7235f97a1c569311929c8b3d8e9698edb4febf00` |
| 06-observation | `2a3472b572c0a52ee445d63a0f9bfd9797da82a47303eea1eb3ed623c4785502` | `c2abf1c4f01b212c290d8d1636d36ff6b46ba5d6a73bb77f1ad113ad6b8912dd` |

验证结果见本批记录。验收后移除项目内临时源 PNG，保留运行 WebP；工具默认生成目录中的原始输出保留。
