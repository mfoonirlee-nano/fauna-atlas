# American Bullfrog image set

2026-09-14 使用内置 image_gen 制作一张封面和五张观察图。最终提示见 [prompts.json](./prompts.json)，运行资产位于 `public/images/species/american-bullfrog/`。

图片为 AI 生成科学情景重建，不代表实拍地点、精确测量或连续行为。内容依据见[五物种资料核验](../../../../../docs/research/five-animals-tree-frog-to-arctic-fox-2026-09-14.md)。

所列资料支持档案中的全球等级，但未单独核实评估日期，assessedYear 留空；不以网页访问日或等级调整公告年份代替评估年份。

## 图集

- `01-cover.webp`：完整主体与生活环境。
- `02-observation.webp`：眼后的圆形鼓膜。
- `03-observation.webp`：折起的大后腿。
- `04-observation.webp`：水下伸展的后脚。
- `05-observation.webp`：有长尾巴的蝌蚪。
- `06-observation.webp`：水面上的眼睛。

## 封面验收

源 PNG 与运行 WebP 均为 1536x1024。按原始分辨率检查两者后，目测完整主体边界为 `{"left": 638, "top": 158, "right": 1428, "bottom": 846}`，大小 790x688 源像素，中心位于源宽 67.3%。边界包含可见四肢、趾端或鳍尖、耳尖及尾部等外缘，自然遮挡的部分不虚构轮廓。左 40% 保留环境，主体与源图边缘之间有背景。

这是新增物种，没有旧封面；封面将主体放大至右侧可用区域，未以远景小主体绕过裁切检查。

提交的 focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`0f7beef03bf468ee5f46fe399213438466c21ed167e3609fc926678aa20c9989`。轮播沿用 hero-subject-frame，以完整主体边界拟合同一 canonical cover。

静态几何检查覆盖六视口的 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。当前 CSS 仅改变透明度，六端点几何相同。检查完整主体与视口、左侧文字区和轮播面板的间距，同时生成静态区域叠加图供目视复核；未启动浏览器。单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 202.09x176.00 | 58.95 | 48.00 | 40.00 | Pass |
| 390x760 | 202.09x176.00 | 93.95 | 48.00 | 40.00 | Pass |
| 1366x768 | 491.45x428.00 | 96.00 | 85.43 | 48.00 | Pass |
| 1920x900 | 643.02x560.00 | 96.00 | 153.69 | 48.00 | Pass |
| 2560x900 | 643.02x560.00 | 96.00 | 320.09 | 48.00 | Pass |
| 3840x900 | 643.02x560.00 | 96.00 | 652.89 | 48.00 | Pass |

完整主体在六视口的全部端点保持至少 24 CSS px 间距，并在安全区内填满主体容器的一维。

## 目视检查与限制

鼓膜、蹲伏、游泳、蝌蚪与水面姿势分别展示，蝌蚪图不表示真实比例或与成蛙的连续拍摄。

已检查源图和运行封面的原始分辨率、图集联系表及六视口静态区域叠加图。

## 压缩与哈希

使用 `npm run convert:webp` 首次转换并验证尺寸与解码，不重复压缩运行 WebP。临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `f7dde3a1af5a559227ea96de6101afa71ebda3d20ec85a04f8a061bff0fcec03` | `0f7beef03bf468ee5f46fe399213438466c21ed167e3609fc926678aa20c9989` |
| 02 | `fa1b80edeb46885240066d1f7f85af2cb2cca89ec6a5e893d10e5193bd22f304` | `66b36c9d435836f3e0180bcd9c7d4590651eaeb091040119ab71a233b5e1aa89` |
| 03 | `b7d8e04eb05a46cd12a6c99080137c19b2d475d06b20846f1dc56afb5e7c96f1` | `a3505351247cc698ef823ec3487f363fa6e8879e9a668b846d69ba1abf96e4a0` |
| 04 | `e816176b8ab6db29b48c823de2391fa86f27ea21a56ff6ebf3534814cdbd0c64` | `455833312b8b1e37b3912c02bead933195595aee8edd71c31ed0a74dd10e3446` |
| 05 | `6bd19ce32ff6ca90756dad66a35b7b78895ad440b5c5b5c5ebf08be8ee6127b2` | `9e3b7114c309a451d08bb7f6a9b5330226913b3f6cdff931f3b8c96526f21de8` |
| 06 | `8dea29bf92bce504db3956013f1fb7d2da7e7931c697108cb624eb0f8df32804` | `02d289d44bf0ec5a9bfbfc606fb5b2f9b1abb2174a3b121a4a0d24439faac0fa` |

## 最终验证

2026-09-14：分类与档案测试 186 项、轮播测试 247 项、图片转换测试 1 项、构建与子路径测试 3 项通过。分类测试首次发现评估年份缺失说明未登记，补齐名单后该项复测通过。生产构建含 TypeScript 检查；六视口及全部动画端点的完整主体检查通过，未启动浏览器。每种保留六张独立 WebP，临时 PNG 已清理。
