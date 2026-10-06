# 条纹虾鱼图片记录

2026-10-07 使用内置 image_gen 逐张生成，保留一张封面及五张观察图。最终生成或编辑提示词与 SHA-256 见 [prompts.json](./prompts.json)，资料见[本批记录](../../../../../docs/research/todo-five-2026-10-07.md)。

## 源图与运行图

逐张按原分辨率查看临时源 PNG；运行封面另按原分辨率检查，六张运行 WebP 用联系表复核。源图与实际解码 WebP 均为 1536×1024。

封面完整主体边界为 `(1006, 15, 1128, 916)`，包含吻端、诱饵（如有）、各可见鳍缘与尾端。主体大小为 122×901 px，水平中心为源宽的 69.5%。主体位于右侧，左侧 40% 保留安静环境。focalPoint 为 `(0.7, 0.5)`。首次收录，没有旧运行封面可比较。

运行封面 SHA-256：`0f6d6b773b945e4275a1d9be596de7062053730ecc08a4d15f3bc0ca05ce152d`。边界、实际解码尺寸写入 cover-subjects.ts，并与 original-covers.json 的哈希记录一致。

条纹虾鱼的骨板、细鳍和背鳍棘关节为 AI 重建，比例与细节不能用于近似种鉴定；微距图无实物比例尺。群游图不表示连续动作。

## Hero 几何与静态模拟

使用当前 CSS 面板尺寸公式与 fitHeroSubject，桌面在至少 24 CSS px 留白内最大化完整主体，手机使用 24px 内边距 contain 完整原图。文字和控件按当前布局处于独立列或图下。

| 视口 | 图片栏 CSS px | 主体 CSS px | 最小边距 CSS px |
| --- | --- | --- | --- |
| 320×760 | 320.0×260.0 | 21.6×159.6 | 42.0 |
| 390×760 | 390.0×292.5 | 27.2×200.6 | 35.6 |
| 761×760 | 392.5×494.0 | 60.4×446.0 | 24.0 |
| 900×760 | 469.2×494.0 | 60.4×446.0 | 24.0 |
| 1100×768 | 579.6×499.2 | 61.1×451.2 | 24.0 |
| 1366×768 | 726.4×499.2 | 61.1×451.2 | 24.0 |
| 1920×900 | 875.8×585.0 | 72.7×537.0 | 24.0 |
| 2560×900 | 874.0×585.0 | 72.7×537.0 | 24.0 |
| 3840×900 | 874.0×585.0 | 72.7×537.0 | 24.0 |

按最终 WebP 制作并检查以上九档图片栏静态模拟。当前图片动画仅改变透明度，无缩放或位移；静止、初始入场、前进与后退 enter/leave 端点共用上述几何。没有启动 GUI 或无头浏览器；静态几何与模拟不验证浏览器字体排版及完整页面。

## 来源与保护记录

FishBase 转录 IUCN 全球 DD，评估日期为 2015-11-03；全球种群趋势未核实。

- [澳大利亚博物馆：外形与头朝下游动](https://australian.museum/learn/animals/fishes/razorfish-aeoliscus-strigatus-gunther-1860/)
- [Fishes of Australia：分布、食性与形态](https://fishesofaustralia.net.au/home/species/3163)
- [FishBase：全球 DD 与评估日期](https://www.fishbase.se/summary/Aeoliscus-strigatus.html)
- [台湾鱼类资料库：中文名与属名](https://fishdb.sinica.edu.tw/taxon/381092-fishdb)

## 文件哈希

| 图号 | 源 PNG | 运行 WebP |
| --- | --- | --- |
| 01-cover | `43f627bee4b6b330d2829ceb927262dae7fb2dce67a0e1409d57fe66f4c5cfca` | `0f6d6b773b945e4275a1d9be596de7062053730ecc08a4d15f3bc0ca05ce152d` |
| 02-observation | `7fbacde278711c78848ca7f5eb6c5a8ceb5d2fe4f87113ee8bc33129c047ec6c` | `30da03e0698447c3b8c789e64d95b7f13a6026100227d36959cd1f02b6a266ae` |
| 03-observation | `f58cc588e7ff32e1fd70c3d5ed998792ec6d2e059b4a8e0af4ddc097d8963112` | `4c116a96cf337820d3c246005458203f2cbf42036af7f22b68e34698e4ad955c` |
| 04-observation | `d54e2eff89a0975850028087b282815feb0b67028becede385e9da7ee7541abf` | `0c24d02fbc2c562e25ef3dbd80f93c8babf8788f46d93a605a7a39f3ff137a5b` |
| 05-observation | `14197b8d772cf7e0a25d0aa02071318f515dd55947e18918654d138db1304f13` | `23d09e129321c6fb082335bfca2e603f025593f8deb63dc9b41b5c4321eb56a5` |
| 06-observation | `717febc42909118212909878d7e3c55e8babaaf34390e191ad73e24a0621a030` | `7a5b58e92cbbb6400f4fa95400bcac41b0815a76dea8a7cb42a30468b6532e1a` |

验证结果见本批记录。验收后移除项目内临时源 PNG，保留运行 WebP；工具默认生成目录中的原始输出保留。
