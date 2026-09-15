# African Wild Dog image set

2026-09-15 使用内置 image_gen 制作封面和五张观察图。最终提示见 [prompts.json](./prompts.json)，运行资产位于 `public/images/species/african-wild-dog/`。

图片为 AI 生成科学情景重建，不代表实拍地点、精确测量或连续行为。资料依据见[五物种资料核验](../../../../../docs/research/five-animals-lynx-to-honey-badger-2026-09-15.md)。未单独核实红色名录评估日期，`assessedYear` 留空。

## 图集

- `01-cover.webp`：完整主体与生活环境。
- `02-observation.webp`：找找身上的斑块。
- `03-observation.webp`：两只大圆耳朵。
- `04-observation.webp`：一起走过草原。
- `05-observation.webp`：洞口的幼崽。
- `06-observation.webp`：树荫下休息。

## 封面验收

源 PNG 与运行 WebP 均为 1536x1024。完整主体目测边界为 `{"left": 695, "top": 98, "right": 1425, "bottom": 950}`，大小 730x852 源像素，中心位于源宽 69.0%。边界包含可见耳尖、口鼻与胡须、四肢、爪端和尾部；自然遮挡的部位不补画。左 40% 留出环境，主体与源图边缘之间有背景。

这是首次收录，无旧运行封面可比较。`focalPoint` 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`6a068b271e8e9869abfe4147a91b6d1b95d3d9c0aaeb62fe3e327fdf49932295`。轮播加载同一封面，按 `coverSubjects` 中的完整主体边界拟合；在该模式下，原图按比例居中于主体安全区，focalPoint 不代替边界测量。

静态几何检查覆盖六视口的 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。当前主体动画仅改变透明度，六端点几何相同。间距单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 150.80x176.00 | 84.60 | 48.00 | 40.00 | Pass |
| 390x760 | 150.80x176.00 | 119.60 | 48.00 | 40.00 | Pass |
| 1366x768 | 366.71x428.00 | 96.00 | 147.80 | 48.00 | Pass |
| 1920x900 | 479.81x560.00 | 96.00 | 235.29 | 48.00 | Pass |
| 2560x900 | 479.81x560.00 | 96.00 | 401.69 | 48.00 | Pass |
| 3840x900 | 479.81x560.00 | 96.00 | 734.49 | 48.00 | Pass |

完整主体在六视口全部端点保持至少 24 CSS px 间距，并填满安全区域的一维。

## 目视检查与限制

源封面和运行封面按原始分辨率检查；观察图逐张检查源图，并用运行图联系表复核。以运行封面制作六视口的静态安全区叠加图，复核完整主体、文字区与面板的间距，不启动浏览器。独立图片不表示同一个体的连续动作；自然遮挡的爪趾不用于数数。

## 压缩与哈希

使用 `npm run convert:webp` 首次转换，检查解码与尺寸。运行 WebP 不重复压缩；PNG 在完成验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `3d54d77c742a50d909f7a3433d0174948ce08f608cd58c21ecfb98f552028816` | `6a068b271e8e9869abfe4147a91b6d1b95d3d9c0aaeb62fe3e327fdf49932295` |
| 02 | `fcc1f2d6eef7e25663e03a3b2e000f07f99f44fed323eb7ed6df4eb4688d3f2d` | `ba95a7d1f41afff29c040a0208bf09321af92f360f3be086e1d32568a3ab17b5` |
| 03 | `09708a65be9056a71e52f02d76dc2e1a4af15ee1aee329b934e12d8ab0f5635f` | `e08bbf93080240ee6b1a05b5e9255f96e5371ec83411a499a8568b8f55ef5fe1` |
| 04 | `2c0da0005505276eb13b229aa0f94af64900be1a48576aa4585ce0a9fab1584a` | `1d024a814ec5fe3fbbca9b98a03ff04e5d3e79bb0fe2f48195698a47fb4159f1` |
| 05 | `8817f321888cb72633424a4ea287ae6ae22c9b5fccbf5687ea913d1ac4c117ca` | `443cb7d786b86c6d9c2ff6e1a89c31791e9b4d59dbe8be67380a1152963b29f5` |
| 06 | `28c49955eef55b10220fd3b723eeb43cf3366a0db6610eb74dcb1e1611f62689` | `0b194f3a83eb95c210b41a1d49e5172074ebc263f46245df2920d091cefa4559` |

## 最终验证

2026-09-15：分类与档案测试 187 项、轮播测试 257 项、图片转换测试 1 项、构建与子路径测试 3 项通过。生产构建包含 TypeScript 检查；目录字段还原和完整档案数据无损检查通过。首页脚本为 347.37 kB，低于 350 kB 单文件限制。30 张运行图片的尺寸、独立性和记录哈希均已核对。源封面、运行封面、运行图联系表和六视口静态安全区图已目视检查；临时 PNG 已清理。
