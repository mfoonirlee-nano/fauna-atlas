# Eurasian Lynx image set

2026-09-15 使用内置 image_gen 制作封面和五张观察图。最终提示见 [prompts.json](./prompts.json)，运行资产位于 `public/images/species/eurasian-lynx/`。

图片为 AI 生成科学情景重建，不代表实拍地点、精确测量或连续行为。资料依据见[五物种资料核验](../../../../../docs/research/five-animals-lynx-to-honey-badger-2026-09-15.md)。未单独核实红色名录评估日期，`assessedYear` 留空。

## 图集

- `01-cover.webp`：完整主体与生活环境。
- `02-observation.webp`：短尾巴在哪里。
- `03-observation.webp`：耳尖的黑色长毛。
- `04-observation.webp`：宽脚掌走过雪地。
- `05-observation.webp`：藏在林地里。
- `06-observation.webp`：林间的小猞猁。

## 封面验收

源 PNG 与运行 WebP 均为 1536x1024。完整主体目测边界为 `{"left": 705, "top": 70, "right": 1455, "bottom": 818}`，大小 750x748 源像素，中心位于源宽 70.3%。边界包含可见耳尖、口鼻与胡须、四肢、爪端和尾部；自然遮挡的部位不补画。左 40% 留出环境，主体与源图边缘之间有背景。

这是首次收录，无旧运行封面可比较。`focalPoint` 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`5c88f54a042b06810ad72c06fb70f30827bd48bde539eeefe67930b7b4c8e763`。轮播加载同一封面，按 `coverSubjects` 中的完整主体边界拟合；在该模式下，原图按比例居中于主体安全区，focalPoint 不代替边界测量。

静态几何检查覆盖六视口的 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。当前主体动画仅改变透明度，六端点几何相同。间距单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 176.47x176.00 | 71.76 | 48.00 | 40.00 | Pass |
| 390x760 | 176.47x176.00 | 106.76 | 48.00 | 40.00 | Pass |
| 1366x768 | 429.14x428.00 | 96.00 | 116.59 | 48.00 | Pass |
| 1920x900 | 561.50x560.00 | 96.00 | 194.45 | 48.00 | Pass |
| 2560x900 | 561.50x560.00 | 96.00 | 360.85 | 48.00 | Pass |
| 3840x900 | 561.50x560.00 | 96.00 | 693.65 | 48.00 | Pass |

完整主体在六视口全部端点保持至少 24 CSS px 间距，并填满安全区域的一维。

## 目视检查与限制

源封面和运行封面按原始分辨率检查；观察图逐张检查源图，并用运行图联系表复核。以运行封面制作六视口的静态安全区叠加图，复核完整主体、文字区与面板的间距，不启动浏览器。独立图片不表示同一个体的连续动作；自然遮挡的爪趾不用于数数。

## 压缩与哈希

使用 `npm run convert:webp` 首次转换，检查解码与尺寸。运行 WebP 不重复压缩；PNG 在完成验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `ffa5861f5c74825f2ef270487a6b21895603c406fd7bd2c2fb65f9cd5805a415` | `5c88f54a042b06810ad72c06fb70f30827bd48bde539eeefe67930b7b4c8e763` |
| 02 | `6976ab128ab496bd93cfb23c3d379677ee0faf6f2cde49d9ab3c643bd4bb7e8c` | `334e466c9a9f21ea41fce0156547ecd4feddca418aa06321a2182987f2ccee06` |
| 03 | `3cbf3394575c93cdf0b2e1359c9105c98c8787e8739bedd9dc6cc28d5e83bf2b` | `997a2dc67730072989d18a37140a70ba3ba0d18427325c66fb68497fed303d73` |
| 04 | `830e83cb20bb314f66b8a97f12185b1a17f731437d5cddbb4cf23ae111a44205` | `f73a2350d18729732ec0d3464451fc73b853de67cc6506227320f6d769f3c264` |
| 05 | `bf64dc3839cb0a4c1b5236d59b943c64adb82dcc0fae33645836739626362125` | `31801e14d6a53678c44fc244e3ead0b4f3457d5689d37ae1b41afd8a176f450d` |
| 06 | `88cdbbdb516fd2b9a5cd5bc14aa8bd00003d35374ff1eb5b1fc949ac5b35bdcf` | `04ce90569940e59af6c0bdae3f9ebbcf4850fc26ad2992ea4aea671eac212b0c` |

## 最终验证

2026-09-15：分类与档案测试 187 项、轮播测试 257 项、图片转换测试 1 项、构建与子路径测试 3 项通过。生产构建包含 TypeScript 检查；目录字段还原和完整档案数据无损检查通过。首页脚本为 347.37 kB，低于 350 kB 单文件限制。30 张运行图片的尺寸、独立性和记录哈希均已核对。源封面、运行封面、运行图联系表和六视口静态安全区图已目视检查；临时 PNG 已清理。
