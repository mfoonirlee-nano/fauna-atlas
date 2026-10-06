# 矛尾翻车鲀图片记录

2026-10-07 使用内置 image_gen 逐张生成，保留一张封面及五张观察图。最终生成或编辑提示词与 SHA-256 见 [prompts.json](./prompts.json)，资料见[本批记录](../../../../../docs/research/todo-five-2026-10-07.md)。

## 源图与运行图

逐张按原分辨率查看临时源 PNG；运行封面另按原分辨率检查，六张运行 WebP 用联系表复核。源图与实际解码 WebP 均为 1536×1024。

封面完整主体边界为 `(608, 26, 1432, 950)`，包含吻端、诱饵（如有）、各可见鳍缘与尾端。主体大小为 824×924 px，水平中心为源宽的 66.4%。主体位于右侧，左侧 40% 保留安静环境。focalPoint 为 `(0.7, 0.5)`。首次收录，没有旧运行封面可比较。

运行封面 SHA-256：`33f6c6e8156f850b8e5953b5cea4dc95aa03c3e8edcaefec9a66b639aa0c8ba1`。边界、实际解码尺寸写入 cover-subjects.ts，并与 original-covers.json 的哈希记录一致。

矛尾翻车鲀的舵鳍中央尖突可用于共读观察；鳍条、皮肤纹理及细微鳍缘为重建，不能据此测量或作近似种鉴定。02 观察图初版出现重复波浪状缺刻，已用内置工具编辑为平滑边缘。

## Hero 几何与静态模拟

使用当前 CSS 面板尺寸公式与 fitHeroSubject，桌面在至少 24 CSS px 留白内最大化完整主体，手机使用 24px 内边距 contain 完整原图。文字和控件按当前布局处于独立列或图下。

| 视口 | 图片栏 CSS px | 主体 CSS px | 最小边距 CSS px |
| --- | --- | --- | --- |
| 320×760 | 320.0×260.0 | 145.9×163.6 | 42.4 |
| 390×760 | 390.0×292.5 | 183.5×205.7 | 38.0 |
| 761×760 | 392.5×494.0 | 344.5×386.3 | 24.0 |
| 900×760 | 469.2×494.0 | 397.7×446.0 | 24.0 |
| 1100×768 | 579.6×499.2 | 402.4×451.2 | 24.0 |
| 1366×768 | 726.4×499.2 | 402.4×451.2 | 24.0 |
| 1920×900 | 875.8×585.0 | 478.9×537.0 | 24.0 |
| 2560×900 | 874.0×585.0 | 478.9×537.0 | 24.0 |
| 3840×900 | 874.0×585.0 | 478.9×537.0 | 24.0 |

按最终 WebP 制作并检查以上九档图片栏静态模拟。当前图片动画仅改变透明度，无缩放或位移；静止、初始入场、前进与后退 enter/leave 端点共用上述几何。没有启动 GUI 或无头浏览器；静态几何与模拟不验证浏览器字体排版及完整页面。

## 来源与保护记录

FishBase 转录 IUCN 全球 LC，评估日期为 2011-06-07；全球种群趋势未核实。

- [澳大利亚博物馆：辨识与分布](https://australian.museum/learn/animals/fishes/sharptail-sunfish-masturus-lanceolatus/)
- [Fishes of Australia：舵鳍、食性与知识局限](https://fishesofaustralia.net.au/home/species/783)
- [FishBase：全球 LC 与评估日期](https://www.fishbase.se/summary/Masturus-lanceolatus.html)
- [达尔文基金会：接受学名与 LC](https://datazone.darwinfoundation.org/en/checklist/?species=14090)

## 文件哈希

| 图号 | 源 PNG | 运行 WebP |
| --- | --- | --- |
| 01-cover | `dd79c77700d0ee65227ce0c04e4810037a70496e0793b0471c76aa9f875bf46a` | `33f6c6e8156f850b8e5953b5cea4dc95aa03c3e8edcaefec9a66b639aa0c8ba1` |
| 02-observation | `0e6689ceda33a276d24bae51ad1f2d903e461938e68e9db993eeca73e661de03` | `70c3a0ee6325b2f3114620c7069fc48ec994503a0c58c980a8d8fc405c1b4b51` |
| 03-observation | `3874cb691922caa405b468e535e02dd319ca78c41867baf9422294be12e7fc7d` | `e175b2976fbf2caf6d322145500c04ff18b5d505bd15ff6326bff836069cfe9f` |
| 04-observation | `78fe6f635e737ba1e7b1cd84d9eaae84325b8bf3b3f27eb5b4ce24df67616136` | `21621848c6e2f23fde97074c6279953387e65f9e62c5836dd6511df4f505f5ec` |
| 05-observation | `1363283a2cde6750f339ab751358dd8885bcd95467b97107b0e51e84b86a56be` | `a767ac2a92e7b213c08895a5729b558341c051ce1aa188f7bca62027b2352dd3` |
| 06-observation | `8c9b82533dc32e085e54620255a4117bcb23781e23704a8fe2392ea327ad917f` | `e73d295a4c3e9ace0cabf3514add19858f5e45001c4fc8297e9df597258ca1b0` |

验证结果见本批记录。验收后移除项目内临时源 PNG，保留运行 WebP；工具默认生成目录中的原始输出保留。
