# Chinese Tree Frog image set

2026-09-14 使用内置 image_gen 制作一张封面和五张观察图。最终提示见 [prompts.json](./prompts.json)，运行资产位于 `public/images/species/chinese-tree-frog/`。

图片为 AI 生成科学情景重建，不代表实拍地点、精确测量或连续行为。内容依据见[五物种资料核验](../../../../../docs/research/five-animals-tree-frog-to-arctic-fox-2026-09-14.md)。

所列资料支持档案中的全球等级，但未单独核实评估日期，assessedYear 留空；不以网页访问日或等级调整公告年份代替评估年份。

## 图集

- `01-cover.webp`：完整主体与生活环境。
- `02-observation.webp`：叶面上的圆趾端。
- `03-observation.webp`：身旁折起的后腿。
- `04-observation.webp`：沿细茎攀爬。
- `05-observation.webp`：暮色里的绿叶。
- `06-observation.webp`：池塘边的小雨蛙。

## 封面验收

源 PNG 与运行 WebP 均为 1536x1024。按原始分辨率检查两者后，目测完整主体边界为 `{"left": 682, "top": 207, "right": 1445, "bottom": 822}`，大小 763x615 源像素，中心位于源宽 69.2%。边界包含可见四肢、趾端或鳍尖、耳尖及尾部等外缘，自然遮挡的部分不虚构轮廓。左 40% 保留环境，主体与源图边缘之间有背景。

这是新增物种，没有旧封面；封面将主体放大至右侧可用区域，未以远景小主体绕过裁切检查。

提交的 focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`4761ac19ae787f747b7e93e31eae59f5d322d7ebf90287f40884e2fa616c5bde`。轮播沿用 hero-subject-frame，以完整主体边界拟合同一 canonical cover。

静态几何检查覆盖六视口的 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。当前 CSS 仅改变透明度，六端点几何相同。检查完整主体与视口、左侧文字区和轮播面板的间距，同时生成静态区域叠加图供目视复核；未启动浏览器。单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 218.35x176.00 | 50.82 | 48.00 | 40.00 | Pass |
| 390x760 | 218.35x176.00 | 85.82 | 48.00 | 40.00 | Pass |
| 1366x768 | 531.00x428.00 | 86.34 | 65.66 | 48.00 | Pass |
| 1920x900 | 694.76x560.00 | 96.00 | 127.82 | 48.00 | Pass |
| 2560x900 | 694.76x560.00 | 96.00 | 294.22 | 48.00 | Pass |
| 3840x900 | 694.76x560.00 | 96.00 | 627.02 | 48.00 | Pass |

完整主体在六视口的全部端点保持至少 24 CSS px 间距，并在安全区内填满主体容器的一维。

## 目视检查与限制

图集展示绿色个体、趾端与植物上的姿势；细纹和趾部不能作为野外鉴定证据。

已检查源图和运行封面的原始分辨率、图集联系表及六视口静态区域叠加图。

## 压缩与哈希

使用 `npm run convert:webp` 首次转换并验证尺寸与解码，不重复压缩运行 WebP。临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `550c5b8f38b7d6b28967a52c1510fc3fe3288459c4c8d3ee9721321164c6578d` | `4761ac19ae787f747b7e93e31eae59f5d322d7ebf90287f40884e2fa616c5bde` |
| 02 | `0b29dadd8375c93853b6a19950d42daf148c7d92b84754d784fcae995e93dde7` | `ec0ab448a88a4b21a11da85630cead71f53edb549a4d1d672d15c2995fe32875` |
| 03 | `a9a59d3f57544b19451fa1062275e602302227675763d9f58a2fecdc2e688aa1` | `7aef56d2495834fa7c88a918b5c20cfaab1df3103e6ec1fcd05c02052b15fa5a` |
| 04 | `a3e08fb17e456b9219ae25a7893ac7c13afcf950f99ddee7d196e8e18fe14178` | `11abceca0b4ebdc819933cf57b9f3abad47de933898fdd9155704ee88a5e669d` |
| 05 | `cea4067468d102b73990117c5f354c5caa0be26102d6079096cbf3162d5e56b8` | `dd2ba2ca42b6e4c7e1618a33ed59e4e7542c786d10731bc9afcdbf1e49ea7a3f` |
| 06 | `536e5bf62401fd3af5f0b617bdf37981fcd0860c6076cf688759572eedda3cfc` | `3757a16d04bdfa94f75e1db959e7934d51a7bf69beb7ea3f21ce30826bdfc06f` |

## 最终验证

2026-09-14：分类与档案测试 186 项、轮播测试 247 项、图片转换测试 1 项、构建与子路径测试 3 项通过。分类测试首次发现评估年份缺失说明未登记，补齐名单后该项复测通过。生产构建含 TypeScript 检查；六视口及全部动画端点的完整主体检查通过，未启动浏览器。每种保留六张独立 WebP，临时 PNG 已清理。
