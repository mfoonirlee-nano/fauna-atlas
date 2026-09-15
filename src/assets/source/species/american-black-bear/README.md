# American Black Bear image set

2026-09-15 使用内置 image_gen 制作封面及五张观察图。最终提示见 [prompts.json](./prompts.json)，运行资产位于 `public/images/species/american-black-bear/`。

图片为 AI 生成科学情景重建，不代表实拍地点、精确测量或连续行为。资料依据见[五物种资料核验](../../../../../docs/research/five-animals-black-bear-to-serval-2026-09-15.md)。所列资料支持全球等级，未单独核实评估日期，`assessedYear` 留空。

## 图集

- `01-cover.webp`：完整主体与生活环境。
- `02-observation.webp`：抱着树干的小熊。
- `03-observation.webp`：圆耳朵和棕色嘴鼻。
- `04-observation.webp`：灌木上的浆果。
- `05-observation.webp`：沿溪流行走。
- `06-observation.webp`：跟着妈妈的幼熊。

## 封面验收

源 PNG 与运行 WebP 均为 1536x1024。完整主体目测边界为 `{"left": 660, "top": 108, "right": 1430, "bottom": 924}`，大小 770x816 源像素，中心位于源宽 68.0%。边界包含可见耳尖、口鼻与胡须、四肢、爪端和尾部；自然遮挡不补画。左 40% 保留环境，主体与源图边缘之间有背景。

这是首次制作，无旧封面可比较。提交的 `focalPoint` 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`489f8de175c9d4ed0c1794d564bd61b3a80a690d78c6b705f07195d74787f903`。轮播使用同一 canonical cover，按 `coverSubjects` 中的完整主体边界拟合。

静态几何检查覆盖六视口的 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。当前主体动画只改变透明度，六端点几何相同。检查完整主体与视口、文字区和面板的间距，单位 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 166.08x176.00 | 76.96 | 48.00 | 40.00 | Pass |
| 390x760 | 166.08x176.00 | 111.96 | 48.00 | 40.00 | Pass |
| 1366x768 | 403.87x428.00 | 96.00 | 129.22 | 48.00 | Pass |
| 1920x900 | 528.43x560.00 | 96.00 | 210.98 | 48.00 | Pass |
| 2560x900 | 528.43x560.00 | 96.00 | 377.38 | 48.00 | Pass |
| 3840x900 | 528.43x560.00 | 96.00 | 710.18 | 48.00 | Pass |

完整主体在六视口全部端点保持至少 24 CSS px 间距，并填满安全区域的一维。

## 目视检查与限制

源封面和运行封面按原始分辨率检查；五张观察图用联系表检查。另以运行封面生成静态安全区叠加图，复核六视口，不启动浏览器。图片中自然遮挡的脚趾或远侧身体部分不用于推断数量；独立图片不是同一个体的连续记录。

## 压缩与哈希

使用 `npm run convert:webp` 首次转换，检查尺寸和解码；未重复压缩运行 WebP。PNG 验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `f5525c2c0e341e328324882406037fe5364706bb0ec204c3cc59dc2aa4ab454b` | `489f8de175c9d4ed0c1794d564bd61b3a80a690d78c6b705f07195d74787f903` |
| 02 | `ccc8e4d7ef6833b9a943a250bc17be766f2f4d943e651e9892575b7ac3ae4a7b` | `cc2560309b9f82f54f4c209d9ebe6234c9220805b120bbe01c8364be6ccec870` |
| 03 | `887263d3e926a481702b05dec5d25041df4947042b1fcd78e23e923f0e0e59be` | `16bac2079c4dd7a9b5f84d7be6fbf7ee29ccd0a380a46aeddbd24c9dd78d27b6` |
| 04 | `a50ae42d91ba47c80559c2b17de29011246e3c4f1964abe8c3f789fe626266b9` | `684a7fd375623025d7ae3cb8439fe25189b1fde6da209326a3a72f5936857b4a` |
| 05 | `15e3cd84c9c16e357526253be18872ba6eb9ecd3c5b5e48f3777efeb8563c70d` | `fd49f9b9e31d6a6395d4b4780459f63d1e83190eb25527f90b79477ee3b9ccf0` |
| 06 | `00d47bf5ca92d6334b6a5a44ed22718fcfd7042c017c13b437dd54689d80bc5f` | `7a3af1c1510073a85a156cd69bdfa18a6365c72a9cd2970b1fb5ae4403ebc674` |

## 最终验证

2026-09-15：分类与档案测试 187 项、轮播测试 252 项、图片转换测试 1 项、构建与子路径测试 3 项通过。生产构建包含 TypeScript 检查，目录字段及完整档案的数据无损检查通过。首次构建触及首页脚本体积上限，压缩目录传输字段名后复测通过。源封面、运行封面、源图与运行图联系表及六视口静态叠加图已目视检查；完整主体通过全部动画端点检查。每种保留六张独立 WebP，临时 PNG 已清理。
