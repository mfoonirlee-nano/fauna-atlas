# South American Coati image set

2026-09-16 使用内置 image_gen 制作。最终提示见 [prompts.json](./prompts.json)，运行图片位于 `public/images/species/south-american-coati/`。每种保留一张封面和五张图集。

资料与分类口径见[五物种资料核验](../../../../../docs/research/five-animals-wolverine-to-pygmy-hippo-2026-09-16.md)。未核实独立红色名录评估日期，assessedYear 留空。

## 图集

- `02-observation.webp`：长鼻子贴近落叶。
- `03-observation.webp`：走路时竖起尾巴。
- `04-observation.webp`：爪子抓住树干。
- `05-observation.webp`：吃一口果实。
- `06-observation.webp`：同伴一起找食物。

## 封面验收

这是首次收录，无旧运行封面可比较。源 PNG 与运行 WebP 均为 1536x1024；完整主体目测边界为 `{'left': 765, 'top': 42, 'right': 1450, 'bottom': 885}`，大小 685x843 源像素，主体中心位于源宽 72.1%。边界包含可见口鼻、耳尖、爪端、尾巴或鳍端；自然遮挡的部分不补画。左 40% 保留环境，完整主体与源图边缘有背景间隔。

focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`a9d47ac55175a795a8880dc9c84758beede7f05abd3eb69ea217451d0763c9c3`。首页轮播与档案共用此封面，以 coverSubjects 的完整主体边界拟合安全区。

静态几何检查覆盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。当前主体动画只改变透明度，六端点几何相同。间距单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 143.01x176.00 | 88.49 | 48.00 | 40.00 | Pass |
| 390x760 | 143.01x176.00 | 123.49 | 48.00 | 40.00 | Pass |
| 1366x768 | 347.78x428.00 | 96.00 | 157.27 | 48.00 | Pass |
| 1920x900 | 455.04x560.00 | 96.00 | 247.68 | 48.00 | Pass |
| 2560x900 | 455.04x560.00 | 96.00 | 414.08 | 48.00 | Pass |
| 3840x900 | 455.04x560.00 | 96.00 | 746.88 | 48.00 | Pass |

## 目视检查与限制

源封面与运行 WebP 按原分辨率检查，观察图逐张检查源图并用运行图联系表复核。六视口以当前 WebP 制作静态安全区图检查，未启动浏览器。图片为 AI 生成科学情景重建，不代表实拍或同一个体的连续行为；遮挡的爪趾不用于数数。

## 压缩与哈希

使用 npm run convert:webp 首次转换并验证解码和尺寸，未重复压缩运行 WebP。临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `368ae158f1bb314c96cc026fafb5b52db7ac75a55e0d2208667d41defe347e52` | `a9d47ac55175a795a8880dc9c84758beede7f05abd3eb69ea217451d0763c9c3` |
| 02 | `1cb12cc08ef5464495e6c4b185d0b6cbf798a3664afd948d2dcb2537ac286890` | `d11121965310b54008198ecfb9e0999a2b361b55202709201081b3e82e7379c7` |
| 03 | `cc8014fb5f4cc4f6ef6c2c064a3227cc1cdf3b59dcb57839b6e3d64da732d72f` | `c5521deed6cebb2f55afb9a39d654a3a1a493078feb1bf0f843134a2023bc9c0` |
| 04 | `eae6927e2118c692c9cff95e71d7abbb87184b49b99cd1b07ee2b3f8b997aa7a` | `a66235337b413989f74251405fbb0b362ae05ed220a9d8d6500c51da3733dcc3` |
| 05 | `d16ac1b29b954790870477c042e7eb053ca6e0179839ee2a489c57022109d89f` | `dd183ae20ee732f942eaec2d422aeca2c5d7a66017eecbce2ceadf8418e3a140` |
| 06 | `db70ee572ce890929f9b9e712c55bb59335cc4940939f83b899a4f4a5d2bb534` | `a8e68ef8caa2fee441c0d544961375bc3fa44261ecb4da3515f814c6194a396f` |

## 最终验证

2026-09-16：分类与档案测试 188 项、轮播测试 262 项、图片转换测试 1 项、构建与子路径测试 3 项通过。生产构建含 TypeScript 检查；压缩目录还原与完整档案数据无损检查通过。首页脚本为 343.09 kB，低于 350 kB 限制。30 张运行图片的尺寸、解码、独立哈希和提示词文件名已核对；本物种六张图片齐全。源图、运行图与六视口静态安全区检查完成。
