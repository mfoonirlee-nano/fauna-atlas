# Gray Wolf image set

2026-09-15 使用内置 image_gen 制作封面和五张观察图。最终提示见 [prompts.json](./prompts.json)，运行资产位于 `public/images/species/gray-wolf/`。

图片为 AI 生成科学情景重建，不代表实拍地点、精确测量或连续行为。资料依据见[五物种资料核验](../../../../../docs/research/five-animals-lynx-to-honey-badger-2026-09-15.md)。未单独核实红色名录评估日期，`assessedYear` 留空。

## 图集

- `01-cover.webp`：完整主体与生活环境。
- `02-observation.webp`：抬头嚎叫。
- `03-observation.webp`：洞口的一家。
- `04-observation.webp`：走过林间小路。
- `05-observation.webp`：耳朵和长嘴巴。
- `06-observation.webp`：低头闻一闻。

## 封面验收

源 PNG 与运行 WebP 均为 1536x1024。完整主体目测边界为 `{"left": 738, "top": 130, "right": 1470, "bottom": 870}`，大小 732x740 源像素，中心位于源宽 71.9%。边界包含可见耳尖、口鼻与胡须、四肢、爪端和尾部；自然遮挡的部位不补画。左 40% 留出环境，主体与源图边缘之间有背景。

这是首次收录，无旧运行封面可比较。`focalPoint` 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`8c3c1216f1183a7f534e246ccac28da3e3ed19febf057adfa1260a66d6bbc9ec`。轮播加载同一封面，按 `coverSubjects` 中的完整主体边界拟合；在该模式下，原图按比例居中于主体安全区，focalPoint 不代替边界测量。

静态几何检查覆盖六视口的 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。当前主体动画仅改变透明度，六端点几何相同。间距单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 174.10x176.00 | 72.95 | 48.00 | 40.00 | Pass |
| 390x760 | 174.10x176.00 | 107.95 | 48.00 | 40.00 | Pass |
| 1366x768 | 423.37x428.00 | 96.00 | 119.47 | 48.00 | Pass |
| 1920x900 | 553.95x560.00 | 96.00 | 198.23 | 48.00 | Pass |
| 2560x900 | 553.95x560.00 | 96.00 | 364.63 | 48.00 | Pass |
| 3840x900 | 553.95x560.00 | 96.00 | 697.43 | 48.00 | Pass |

完整主体在六视口全部端点保持至少 24 CSS px 间距，并填满安全区域的一维。

## 目视检查与限制

源封面和运行封面按原始分辨率检查；观察图逐张检查源图，并用运行图联系表复核。以运行封面制作六视口的静态安全区叠加图，复核完整主体、文字区与面板的间距，不启动浏览器。独立图片不表示同一个体的连续动作；自然遮挡的爪趾不用于数数。

## 压缩与哈希

使用 `npm run convert:webp` 首次转换，检查解码与尺寸。运行 WebP 不重复压缩；PNG 在完成验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `79ec909a2f414bae64e4b8fbae651639639d7b964e16545f4231cccae470d210` | `8c3c1216f1183a7f534e246ccac28da3e3ed19febf057adfa1260a66d6bbc9ec` |
| 02 | `af5d50968a827b0d2e89b681251e24c2bb742d89cb0445f9b0c0ab3d03c8074c` | `d2023be8f047fac56fb04cbff1d762f18022f10fb61e7119f956b0f6e309a3ff` |
| 03 | `3218dee6d5c7f1d3955a96487a9ec2792f4a5c9198ee7f5ae8d98348e6f07f05` | `25d4f39034608161dd67fb5acb9d240046415825b296b2b1b0d6e9c1e787a3d1` |
| 04 | `aaf0daf55c4de46d7cfca04dd03e5458dc27dcc71d41bda39df6dafdd89eeecd` | `d2b194df601f8e8c8710738d97ee7b5172d17cdd19e63c9017c5bcffce512fa5` |
| 05 | `3b89a34f2401a34c0469f044dd45bffe94efe5be124a08458880e5fb0e0d134f` | `cc48a4c190ad69e1df7195a23960d00557f6156cf7f72a64a9d579c4d120fbba` |
| 06 | `150ae55f466ecb2ced555f32e5038e0d84072de8f32ca3dd48f104af53455c3f` | `f5c619431ed14a9c90b194c9910f1df5d395a8f6cedda27a353fad722a159b7a` |

## 最终验证

2026-09-15：分类与档案测试 187 项、轮播测试 257 项、图片转换测试 1 项、构建与子路径测试 3 项通过。生产构建包含 TypeScript 检查；目录字段还原和完整档案数据无损检查通过。首页脚本为 347.37 kB，低于 350 kB 单文件限制。30 张运行图片的尺寸、独立性和记录哈希均已核对。源封面、运行封面、运行图联系表和六视口静态安全区图已目视检查；临时 PNG 已清理。
