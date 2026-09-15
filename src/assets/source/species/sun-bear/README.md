# Sun Bear image set

2026-09-15 使用内置 image_gen 制作封面及五张观察图。最终提示见 [prompts.json](./prompts.json)，运行资产位于 `public/images/species/sun-bear/`。

图片为 AI 生成科学情景重建，不代表实拍地点、精确测量或连续行为。资料依据见[五物种资料核验](../../../../../docs/research/five-animals-black-bear-to-serval-2026-09-15.md)。所列资料支持全球等级，未单独核实评估日期，`assessedYear` 留空。

## 图集

- `01-cover.webp`：完整主体与生活环境。
- `02-observation.webp`：胸前的浅色弯纹。
- `03-observation.webp`：爪子抓住树干。
- `04-observation.webp`：伸出长舌头。
- `05-observation.webp`：地上的果实。
- `06-observation.webp`：树枝上休息。

## 封面验收

源 PNG 与运行 WebP 均为 1536x1024。完整主体目测边界为 `{"left": 690, "top": 48, "right": 1295, "bottom": 979}`，大小 605x931 源像素，中心位于源宽 64.6%。边界包含可见耳尖、口鼻与胡须、四肢、爪端和尾部；自然遮挡不补画。左 40% 保留环境，主体与源图边缘之间有背景。

这是首次制作，无旧封面可比较。提交的 `focalPoint` 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`8f1a492f1269b09ab837a9f394c378a2728d1fbc02a69ec4a2d3b126fc74b068`。轮播使用同一 canonical cover，按 `coverSubjects` 中的完整主体边界拟合。

静态几何检查覆盖六视口的 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。当前主体动画只改变透明度，六端点几何相同。检查完整主体与视口、文字区和面板的间距，单位 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 114.37x176.00 | 102.81 | 48.00 | 40.00 | Pass |
| 390x760 | 114.37x176.00 | 137.81 | 48.00 | 40.00 | Pass |
| 1366x768 | 278.13x428.00 | 96.00 | 192.09 | 48.00 | Pass |
| 1920x900 | 363.91x560.00 | 96.00 | 293.25 | 48.00 | Pass |
| 2560x900 | 363.91x560.00 | 96.00 | 459.65 | 48.00 | Pass |
| 3840x900 | 363.91x560.00 | 96.00 | 792.45 | 48.00 | Pass |

完整主体在六视口全部端点保持至少 24 CSS px 间距，并填满安全区域的一维。

## 目视检查与限制

源封面和运行封面按原始分辨率检查；五张观察图用联系表检查。另以运行封面生成静态安全区叠加图，复核六视口，不启动浏览器。图片中自然遮挡的脚趾或远侧身体部分不用于推断数量；独立图片不是同一个体的连续记录。

## 压缩与哈希

使用 `npm run convert:webp` 首次转换，检查尺寸和解码；未重复压缩运行 WebP。PNG 验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `2950b2c0a5b9d44e8c40175d96dc8d1b69bdd110210c98b107a8bad18e60c19c` | `8f1a492f1269b09ab837a9f394c378a2728d1fbc02a69ec4a2d3b126fc74b068` |
| 02 | `beb66d7fa812dddf940cf77ced3b91181728fd1133afe1b139797cd4210cd25d` | `bd5fc6d62914088b0022e811af3d4c2c8a1fd586a3d1a9f9a2d5d03b85c93e54` |
| 03 | `588df7ed29f5bcd333c0e5868d1687a69565a0bd5a8e6b2acf5218706b838162` | `66d1c3ef7e60a10e282c638cfadf79cc34f49acc482bfab4bf30cd631804c66b` |
| 04 | `611f878d0518287d46720740faec8c5654def4afc45bccbe242b69e87174f6ec` | `c2869ba7f5b439df079366d3ea0a441643d02afb74a158934f82ac4f644bab39` |
| 05 | `e35372a6bb31dab6e71c622a526b3a23ceb1e75c4b57d58f0cafbb21ad727214` | `b8420f5961efcaf8530becb3eb836ad87969eeb63f92a9de22dc1dcf9b99cbfd` |
| 06 | `697e60b80a4106e9b3bf240d0d9ac7c78bd3933ab28e6b00f821da5a026b96b3` | `a81a9bb599f738425e5f0079211f3113e8ce581234b11bfd4c208f76e282987f` |

## 最终验证

2026-09-15：分类与档案测试 187 项、轮播测试 252 项、图片转换测试 1 项、构建与子路径测试 3 项通过。生产构建包含 TypeScript 检查，目录字段及完整档案的数据无损检查通过。首次构建触及首页脚本体积上限，压缩目录传输字段名后复测通过。源封面、运行封面、源图与运行图联系表及六视口静态叠加图已目视检查；完整主体通过全部动画端点检查。每种保留六张独立 WebP，临时 PNG 已清理。
