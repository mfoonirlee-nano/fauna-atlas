# African Penguin image set

2026-09-16 使用内置 image_gen 制作。最终提示见 [prompts.json](./prompts.json)，运行图片位于 `public/images/species/african-penguin/`。每种保留一张封面和五张图库图片。

资料与分类口径见[五物种资料核验](../../../../../docs/research/five-animals-black-rhino-to-african-penguin-2026-09-16.md)。独立评估日期未核实，assessedYear 留空。

## 图库

- `02-observation.webp`：胸前一条黑带。
- `03-observation.webp`：到海里捕鱼。
- `04-observation.webp`：有遮蔽的巢。
- `05-observation.webp`：眼睛上方的粉红色。
- `06-observation.webp`：走上海滩。

## 封面验收

这是首次收录，无旧封面可比较。源 PNG 与运行 WebP 均为 1536×1024；目视检查的完整主体边界为 `{"left": 854, "top": 74, "right": 1365, "bottom": 925}`，大小 511×851 源像素，中心位于源宽 72.2%。边界包含可见的口鼻、角、耳尖或嘴尖、鳍状翅、脚趾和尾端；自然遮挡的部分不补画。左 40% 为环境，主体与源图边缘有背景间隔。

focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`6b50bf47d3fc26b1eed2de50c0976282fbc05e2d5692b4771e1bb8577e604511`。首页与档案共用此封面，通过 coverSubjects 的完整主体边界拟合安全区。

源封面与运行 WebP 按原始分辨率目视检查；图库逐张检查源图并复核运行图联系表。用当前 WebP 制作静态安全区检查图，未启动浏览器。几何验证覆盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；当前主体动画仅改变透明度，六端点几何相同。单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 105.68×176.00 | 107.16 | 48.00 | 40.00 | Pass |
| 390x760 | 105.68×176.00 | 142.16 | 48.00 | 40.00 | Pass |
| 1366x768 | 257.00×428.00 | 96.00 | 202.66 | 48.00 | Pass |
| 1920x900 | 336.26×560.00 | 96.00 | 307.07 | 48.00 | Pass |
| 2560x900 | 336.26×560.00 | 96.00 | 473.47 | 48.00 | Pass |
| 3840x900 | 336.26×560.00 | 96.00 | 806.27 | 48.00 | Pass |

## 图像限制与压缩

图片为 AI 生成科学情景重建，不代表实拍、同一个体的连续行为或不同物种间的等比例比较。图库中的近景用于观察指定部位；水、羽毛或植被遮挡处不用于数脚趾。静态安全区图检查完整主体与文字、轮播面板和视口边缘的间距，不代替浏览器截图。

使用 npm run convert:webp 首次转换，并检查解码与尺寸。运行 WebP 不重复压缩；临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `fd5eb51083268b7d6c050681fb2b92840a58ccde1035e4aef07d5edf6c72f133` | `6b50bf47d3fc26b1eed2de50c0976282fbc05e2d5692b4771e1bb8577e604511` |
| 02 | `49b9796e23244c08fbc1cf0813e17f45253d32d85c49a1a0ec8e2e535088451a` | `43eb1a5f9514d7453204822ef007f3b9cfd3de28641870fdec82295e5f549124` |
| 03 | `6958fb6ad4e5030034002eff0e4439d376056fc1cdb300b5787f13c90abeadd7` | `f7c07ac4ed50a05d4a3422bd116078b593ca6b0cb0be5e7396a9c6ae1871fd19` |
| 04 | `cd787fd0db6cb01a337d3f85efd9ecf958c9097c2d9d0465caa9205f74b78142` | `7d52ba6a6304605f95afae95b18c6c41d9c45fc7e930e08f89ea888652ffb1d2` |
| 05 | `9cb7f95510b29413708876da85d07fe891a68d11924ff47235d400102f03f338` | `0ea5dd2cbf58065b1161be695ff2e471eb1ea3aa2f9ba3808d79e1a4c08845b7` |
| 06 | `8dfd583e2b8af82478c0fdfa9ff717118c4e54cbbdd15568315aec482b5fb845` | `4bd6a94a068071cdcdef4661cd5651406625561ca2796d43fcbd881319fd3b4a` |

## 最终验证

2026-09-16：生成完成、目视检查完成、封面验收通过。分类与档案测试 189 项、轮播测试 267 项、图片转换测试 1 项、生产构建及子路径测试 3 项通过。构建含 TypeScript 检查，首页脚本 346.16 kB，低于 350 kB 限制。六张图片的尺寸、解码、独立哈希和提示词文件名已核对。
