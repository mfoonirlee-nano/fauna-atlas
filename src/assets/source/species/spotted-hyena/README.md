# Spotted Hyena image set

2026-09-15 使用内置 image_gen 制作封面和五张观察图。最终提示见 [prompts.json](./prompts.json)，运行资产位于 `public/images/species/spotted-hyena/`。

图片为 AI 生成科学情景重建，不代表实拍地点、精确测量或连续行为。资料依据见[五物种资料核验](../../../../../docs/research/five-animals-lynx-to-honey-badger-2026-09-15.md)。未单独核实红色名录评估日期，`assessedYear` 留空。

## 图集

- `01-cover.webp`：完整主体与生活环境。
- `02-observation.webp`：倾斜的背部。
- `03-observation.webp`：圆耳朵和宽嘴巴。
- `04-observation.webp`：群体中的同伴。
- `05-observation.webp`：深色的小宝宝。
- `06-observation.webp`：黄昏的草地。

## 封面验收

源 PNG 与运行 WebP 均为 1536x1024。完整主体目测边界为 `{"left": 643, "top": 150, "right": 1455, "bottom": 856}`，大小 812x706 源像素，中心位于源宽 68.3%。边界包含可见耳尖、口鼻与胡须、四肢、爪端和尾部；自然遮挡的部位不补画。左 40% 留出环境，主体与源图边缘之间有背景。

这是首次收录，无旧运行封面可比较。`focalPoint` 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`eef3fc004d0fe8c251e9b4b64dade6d1f12583da0686a6b175c06200ab972306`。轮播加载同一封面，按 `coverSubjects` 中的完整主体边界拟合；在该模式下，原图按比例居中于主体安全区，focalPoint 不代替边界测量。

静态几何检查覆盖六视口的 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。当前主体动画仅改变透明度，六端点几何相同。间距单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 202.42x176.00 | 58.79 | 48.00 | 40.00 | Pass |
| 390x760 | 202.42x176.00 | 93.79 | 48.00 | 40.00 | Pass |
| 1366x768 | 492.26x428.00 | 96.00 | 85.03 | 48.00 | Pass |
| 1920x900 | 644.08x560.00 | 96.00 | 153.16 | 48.00 | Pass |
| 2560x900 | 644.08x560.00 | 96.00 | 319.56 | 48.00 | Pass |
| 3840x900 | 644.08x560.00 | 96.00 | 652.36 | 48.00 | Pass |

完整主体在六视口全部端点保持至少 24 CSS px 间距，并填满安全区域的一维。

## 目视检查与限制

源封面和运行封面按原始分辨率检查；观察图逐张检查源图，并用运行图联系表复核。以运行封面制作六视口的静态安全区叠加图，复核完整主体、文字区与面板的间距，不启动浏览器。独立图片不表示同一个体的连续动作；自然遮挡的爪趾不用于数数。

## 压缩与哈希

使用 `npm run convert:webp` 首次转换，检查解码与尺寸。运行 WebP 不重复压缩；PNG 在完成验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `de76801105922d05644eeb7f524d715fb2976c18490df02de6b4390a54f61583` | `eef3fc004d0fe8c251e9b4b64dade6d1f12583da0686a6b175c06200ab972306` |
| 02 | `437f43a49a8177fdc1333c8e0feedff52bd8b87cecfdebc4aceab03a56dd6ba5` | `66f8ac40c35d3d7212be3e7804f5552f260738979bc9b72d813d9e9384c90dec` |
| 03 | `979ebf47e325d2e69851f9d0106c12f88b6976e3ac67ef86fdddad0d928bb35b` | `a9ae21be7ead600abc95643c9d67032d1a42f3878117600e6d5275e6ab71dae5` |
| 04 | `5e0d465344e21aca4b946e67ab5de0341e7220d64e2778e074af07abed08b018` | `991bdbde2c219ef63e9ce299c89612ddb575c9dc21aa9146c4ba21539c9889ab` |
| 05 | `d2c268be83b4b74e4f887814dfeb68b2c26c4e831bb37b740864dcab955eaec7` | `42fb3de613eb34425f29fbbba35c7a56ff9346b5c303817ad5f4180c4f073485` |
| 06 | `7b44f7d2d0087ee283a161b1dd31f2649abf05c45f56d92916175ecd0b38fb2d` | `dfda4a6e12a87cbb29fbb645dd8424c9fc1f2e7675e04f94e7a44f8a38618d87` |

## 最终验证

2026-09-15：分类与档案测试 187 项、轮播测试 257 项、图片转换测试 1 项、构建与子路径测试 3 项通过。生产构建包含 TypeScript 检查；目录字段还原和完整档案数据无损检查通过。首页脚本为 347.37 kB，低于 350 kB 单文件限制。30 张运行图片的尺寸、独立性和记录哈希均已核对。源封面、运行封面、运行图联系表和六视口静态安全区图已目视检查；临时 PNG 已清理。
