# Atlantic Salmon image set

2026-09-14 使用内置 image_gen 制作一张封面和五张观察图。最终提示见 [prompts.json](./prompts.json)，运行资产位于 `public/images/species/atlantic-salmon/`。

图片为 AI 生成科学情景重建，不代表实拍地点、精确测量或连续行为。内容依据见[五物种资料核验](../../../../../docs/research/five-animals-tree-frog-to-arctic-fox-2026-09-14.md)。

所列资料支持档案中的全球等级，但未单独核实评估日期，assessedYear 留空；不以网页访问日或等级调整公告年份代替评估年份。

## 图集

- `01-cover.webp`：完整主体与生活环境。
- `02-observation.webp`：银色鳞片与深色斑点。
- `03-observation.webp`：河流中的上溯成鱼。
- `04-observation.webp`：带竖纹的幼鱼。
- `05-observation.webp`：海里的银色成鱼。
- `06-observation.webp`：砾石河床上的成鱼。

## 封面验收

源 PNG 与运行 WebP 均为 1536x1024。按原始分辨率检查两者后，目测完整主体边界为 `{"left": 625, "top": 294, "right": 1502, "bottom": 585}`，大小 877x291 源像素，中心位于源宽 69.2%。边界包含可见四肢、趾端或鳍尖、耳尖及尾部等外缘，自然遮挡的部分不虚构轮廓。左 40% 保留环境，主体与源图边缘之间有背景。

初版封面的鱼吻略进入左 40% 留白，尾鳍斑点偏密，已用内置工具编辑后重新检查。最终边界以编辑结果为准。

提交的 focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`bbd43b1e507eb706d93d29a2f4378497015eb339fcb55a990942d2e60ef38370`。轮播沿用 hero-subject-frame，以完整主体边界拟合同一 canonical cover。

静态几何检查覆盖六视口的 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。当前 CSS 仅改变透明度，六端点几何相同。检查完整主体与视口、左侧文字区和轮播面板的间距，同时生成静态区域叠加图供目视复核；未启动浏览器。单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 272.00x90.25 | 24.00 | 90.87 | 82.87 | Pass |
| 390x760 | 342.00x113.48 | 24.00 | 79.26 | 71.26 | Pass |
| 1366x768 | 559.68x185.71 | 72.00 | 51.32 | 169.15 | Pass |
| 1920x900 | 825.60x273.94 | 72.00 | 62.40 | 191.03 | Pass |
| 2560x900 | 1132.80x375.88 | 72.00 | 75.20 | 140.06 | Pass |
| 3840x900 | 1687.70x560.00 | 96.00 | 130.55 | 48.00 | Pass |

完整主体在六视口的全部端点保持至少 24 CSS px 间距，并在安全区内填满主体容器的一维。

## 目视检查与限制

成鱼、幼鱼和产卵场景分别生成。单张水下图不能独立证明水流方向，图注依据自然史解释上溯场景。

已检查源图和运行封面的原始分辨率、图集联系表及六视口静态区域叠加图。

## 压缩与哈希

使用 `npm run convert:webp` 首次转换并验证尺寸与解码，不重复压缩运行 WebP。临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `767ed041a1c36293999f858a131f824c84c94176f7fc4450ccc8fdfffd4e20b4` | `bbd43b1e507eb706d93d29a2f4378497015eb339fcb55a990942d2e60ef38370` |
| 02 | `d9ceaca79d9aa962f5a1f2a9e9ce87efb720714fdc6982c7b7aa7848515aba86` | `ae177abc2deaebb9afab3ea823348012b4817fc406a049fbcd9d73b81c8884e1` |
| 03 | `e48c3f68c290f259f7faa4dd3a5c581028a4717436c0819b9633e88711834243` | `1c03dd3e1982acb16b6b95022a67e5ed1fd2edaac42a5df2b1ce2d0e9ced3b53` |
| 04 | `119fd2534313091e38632b95913a5c928cb73c66b092f673f77a9104362402ca` | `324983dfab2415bd948b098da0958cb69f3b104916416409dc33afeaf2bab595` |
| 05 | `e3cbeaef4666b5f11b1f7631a7fb9fcac031f968780685a8a4a795dd4cbb66fc` | `b1620a87a9a60116aa2a442c129b47c8fff37d094c9b4df8ea73f24adda61479` |
| 06 | `832e94e6f901c7d7b670f4292aa0d3d84ee74cf84f3107e212d6aa2384e1cafa` | `025210a379a36003e508ad8edaec8cc96e15ee8393c1ac1e4f468ab90ba46f9a` |

## 最终验证

2026-09-14：分类与档案测试 186 项、轮播测试 247 项、图片转换测试 1 项、构建与子路径测试 3 项通过。分类测试首次发现评估年份缺失说明未登记，补齐名单后该项复测通过。生产构建含 TypeScript 检查；六视口及全部动画端点的完整主体检查通过，未启动浏览器。每种保留六张独立 WebP，临时 PNG 已清理。
