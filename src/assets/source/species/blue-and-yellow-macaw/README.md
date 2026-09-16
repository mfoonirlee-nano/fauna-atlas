# Blue-and-yellow Macaw image set

2026-09-16 使用内置 image_gen 制作，一张封面和五张图库图片。最终提示见 [prompts.json](./prompts.json)，运行素材位于 `public/images/species/blue-and-yellow-macaw/`。

资料与分类取舍见[五鸟资料核验](../../../../../docs/research/five-birds-emu-to-lovebird-2026-09-16.md)。全球等级有来源支持，独立评估日期未核实，assessedYear 留空。

## 图库

- `02-observation.webp`：蓝背和黄肚子。
- `03-observation.webp`：脸上的细纹。
- `04-observation.webp`：飞过树林。
- `05-observation.webp`：抓住食物。
- `06-observation.webp`：树洞里的巢。

## 封面验收

首次收录，无旧封面对照。源 PNG 与运行 WebP 均为 1536×1024；按原始分辨率目视检查两者。完整主体边界为 `{'left': 810, 'top': 48, 'right': 1306, 'bottom': 1010}`，大小 496×962 源像素，中心位于源宽 68.9%。边界包含头顶、嘴尖、可见脚趾、翅缘及尾羽；草和树枝自然遮挡的部分不补画。左 40% 为环境，动物四周有背景余量。

focalPoint：`{"x":0.7,"y":0.5}`。运行封面 SHA-256：`336c276a9b24d99a644fd02c8267b41f009b898146ac3b4c04d5262c24b3b200`。首页与物种档案使用同一封面，通过 coverSubjects 的完整主体边界拟合安全区。

已逐张查看生成图，复核运行 WebP 联系表及静态安全区检查图，未启动浏览器。几何验证涵盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；主体动画只改变透明度，六端点几何相同。单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 90.74×176.00 | 114.63 | 48.00 | 40.00 | Pass |
| 390x760 | 90.74×176.00 | 149.63 | 48.00 | 40.00 | Pass |
| 1366x768 | 220.67×428.00 | 96.00 | 220.82 | 48.00 | Pass |
| 1920x900 | 288.73×560.00 | 96.00 | 330.83 | 48.00 | Pass |
| 2560x900 | 288.73×560.00 | 96.00 | 497.23 | 48.00 | Pass |
| 3840x900 | 288.73×560.00 | 96.00 | 830.03 | 48.00 | Pass |

## 限制与压缩

图片为 AI 生成科学情景重建，不代表实拍、同一个体的连续行为或物种间等比例比较。近景与取食场景可裁去无关部位；脚趾可能受草或枝条遮挡，不用遮挡图逐一数趾。静态安全区图用于检查身体边界与页面区域的间距，不代替浏览器截图。图库实际景别可能比提示更宽，以最终图及配文为准。

使用 npm run convert:webp 首次转换，检查解码、尺寸和哈希。不重复压缩运行 WebP；验收后清理临时 PNG。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `de54dbfe38504a4e6158a55d4fb7da3edd1ed5313ac988472b0b6f966ef248dd` | `336c276a9b24d99a644fd02c8267b41f009b898146ac3b4c04d5262c24b3b200` |
| 02 | `e11304c7accce11ae46f9d5178b447cdb1d12b38d00a225e6d6a774fd63c727e` | `802f8dd98b3ce6c76451d678e4b2b6eaba0ec838e87b1aff59c46021adb24bef` |
| 03 | `b97b03196523002ed783f8c6d0dd8d432140d20652351158fe122f72496c553d` | `ea0192ad64f884ca08b561a3decdb83e1d0ece26e5d3689cfd61aeee406133b7` |
| 04 | `908f55b6acc4fa3602f830805bb5dc5635fb49cb0909675ab855a26d25b70d45` | `02d11aaac197dbe09c6e2bf317cd7c6062da1736369de6a07e387d24700a1d24` |
| 05 | `402fd63413bbf0ea11851d3e6b1c39c91632f5385e64fc6bc8fd3a4cbd9b39f7` | `5248e050dd19c6fe2dda2995057eb913aed9e91024410978e32d618cd6d883da` |
| 06 | `0fc4f018dc48c67f7e17f82a733bd54d28ce6b9608a1a0b2dec241a3445c2cdb` | `cb7283e6bbc2168308cf4fa4b77b2d99740660d8bcde9fc06b1e8c306711a37f` |

## 最终验证

2026-09-16：生成完成、目视检查完成、封面验收通过。分类与档案测试 190 项、轮播测试 272 项、图片转换测试 1 项、生产构建与子路径测试 3 项通过。构建包含 TypeScript 检查；每种六张 WebP 的尺寸、解码、独立哈希与提示词文件名已核对。
