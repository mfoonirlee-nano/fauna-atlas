# Largetooth Sawfish image set

2026-09-14 使用内置 image_gen 制作一张封面与五张观察图。最终提示词及编辑原因见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/largetooth-sawfish/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。资料核验及分类、保护状态边界见 [五物种资料核验](../../../../../docs/research/five-animals-2026-09-14.md)。

## 内容来源

- [Florida Museum：锯鲛分类与物种合并](https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/largetooth-sawfish/)
- [Florida Museum：锯鲛自然史](https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/largetooth-sawfish/)
- [Florida Museum：锯鲛全球极危及威胁](https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/largetooth-sawfish/)

机构资料支持全球 CR；未确认独立评估日期和全球趋势。

## 图集

- `01-cover.webp`：完整身体与生活环境。
- `02-observation.webp`：完整的长吻。锯鲛长吻两边各有一列间距较宽的尖齿。
- `03-observation.webp`：红树林旁的幼鱼。幼年锯鲛游过红树林根部附近的浅水。
- `04-observation.webp`：头部的下面。从下方观察锯鲛的嘴巴和鳃裂。
- `05-observation.webp`：游近小鱼群。锯鲛带着长吻靠近一群小鱼。
- `06-observation.webp`：沙底上的全身。从上方观察锯鲛在沙底上方的完整身体。

## 封面验收

源图与运行 WebP 均为 1536x1024。目视测量的完整主体边界 `{'left': 705, 'top': 23, 'right': 1498, 'bottom': 905}`，主体大小 793x882 源像素，中心位于源宽 71.7%。边界包含可见尾端、足端、鳍尖、吻齿或触角。新物种无旧封面。左侧 40% 保留环境，主体中心位于右侧 60% 以外。

focalPoint 为 `{"x":0.7,"y":0.5}`；轮播使用现有 hero-subject-frame 按完整主体边界适配同一封面。运行封面 SHA-256：`470a43dbfb359945f37874c6e2a2007b17de8db96f5e35edf1df338d949dd298`。

六个视口均检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。当前 CSS 只改变透明度，六端点几何相同。下表以未取整 CSS 像素计算。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 158.24x176.00 | 80.88 | 48.00 | 40.00 | Pass |
| 390x760 | 158.24x176.00 | 115.88 | 48.00 | 40.00 | Pass |
| 1366x768 | 384.81x428.00 | 96.00 | 138.75 | 48.00 | Pass |
| 1920x900 | 503.49x560.00 | 96.00 | 223.45 | 48.00 | Pass |
| 2560x900 | 503.49x560.00 | 96.00 | 389.85 | 48.00 | Pass |
| 3840x900 | 503.49x560.00 | 96.00 | 722.65 | 48.00 | Pass |

静态几何合成图按现有主体容器比例拟合 canonical cover，标出完整主体、文字区与面板区；它不是浏览器截图。所有目标视口中，完整主体与视口、文字区和面板保持至少 24 CSS px 间距。

## 目视记录与限制

吻齿、感觉孔和鳃裂的细微形态不作为精确解剖证据；图集强调长吻与腹面口鳃的位置。

已检查最终生成源图和运行封面的原始分辨率，复核运行图集联系表及六视口静态几何合成图。完整主体、关键颜色和观察场景通过目视检查。

## 压缩与哈希

使用 `npm run convert:webp` 进行首次 WebP 转换并检查解码与尺寸，不重复压缩已接受的 WebP。已清理仓库中的临时 PNG；保留六张运行 WebP、提示词和哈希记录。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `55a16a50533746b93cc5390ada21f05c6aa9c69e53d420648a3d6affe4b5175e` | `470a43dbfb359945f37874c6e2a2007b17de8db96f5e35edf1df338d949dd298` |
| 02 | `4c2f2c178641e3131a1a6db12bccea27a8a2d6cf8cf4c99bfc18c79c8ad4433c` | `1a3b3db744173d38b7e9051fcd7eef1f8b4a44a66b36c12a5a516a41048ecf23` |
| 03 | `d3e883515daa3c9f7994aed1b6467fcbe53310fb726fad6c7ba88a169e639c2e` | `7f6c4f1838761d649941308c83d4a550427d4e2b4a589be121a0858a5805d148` |
| 04 | `a63ad2495ace334579d10138353daf627c0a67383b5a6ad95812807dcefa2c5f` | `0339c3ea9f11e4cf12f87d6bab33eaf2936b77c91b15ba4659b9be92e9b7b290` |
| 05 | `7fc4ced7a6a6c4ccf9bc77259fc6f3b74fb47f2ffd0cf3bba0b9a9e33cf21e4e` | `cef027847646f9e9bea28d28f4a97f0cc18e70ab958ca2e9efd9c34fad06d4e7` |
| 06 | `d805fc8e47403550fb093a28a12b4c5a9ea4d147452f51ab6e041e8ddca4d3a7` | `cc0c5586fad2595494276f9b64433d80ffd38756942c969997e17fb228ff3a5e` |

## 最终验证

2026-09-14 完成静态验收。测试共 459 项通过；首次全套运行发现的首屏脚本体积超限已通过目录字段压缩修复，随后 `npm run test:dist-subpath` 三项复测通过，包含 TypeScript 检查、生产构建、子路径资源访问、脚本体积限制与目录数据无损还原。未启动浏览器。
