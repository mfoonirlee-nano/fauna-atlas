# Oriental Fire-bellied Newt image set

2026-09-14 使用内置 image_gen 制作一张封面与五张观察图。最终提示词及编辑原因见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/oriental-fire-bellied-newt/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。资料核验及分类、保护状态边界见 [五物种资料核验](../../../../../docs/research/five-animals-2026-09-14.md)。

## 内容来源

- [Amphibian Species of the World：东方蝾螈现行分类](https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Salamandridae/Pleurodelinae/Hypselotriton/Hypselotriton-orientalis)
- [中国科学院昆明动物研究所：中国两栖类东方蝾螈档案](https://www.amphibiachina.org/species/188)
- [中国两栖类：东方蝾螈 IUCN 等级](https://www.amphibiachina.org/species/188)

机构资料支持全球 LC；未确认独立评估日期和全球趋势。

## 图集

- `01-cover.webp`：完整身体与生活环境。
- `02-observation.webp`：橘红色的肚子。东方蝾螈在水中游过，露出带黑斑的橘红色腹部。
- `03-observation.webp`：水草间的黑色背部。深色东方蝾螈停在水草之间。
- `04-observation.webp`：浮到水面。东方蝾螈游向水面，鼻端靠近空气。
- `05-observation.webp`：水草上的卵。水草叶片间黏附一粒东方蝾螈卵。
- `06-observation.webp`：带外鳃的幼体。东方蝾螈幼体头后有羽状外鳃。

## 封面验收

源图与运行 WebP 均为 1536x1024。目视测量的完整主体边界 `{'left': 675, 'top': 365, 'right': 1510, 'bottom': 730}`，主体大小 835x365 源像素，中心位于源宽 71.1%。边界包含可见尾端、足端、鳍尖、吻齿或触角。新物种无旧封面。左侧 40% 保留环境，主体中心位于右侧 60% 以外。

focalPoint 为 `{"x":0.7,"y":0.5}`；轮播使用现有 hero-subject-frame 按完整主体边界适配同一封面。运行封面 SHA-256：`7cb209bbc06922432e5a163f27e3d3896b297d6fbd306f2c866b7bc7663d593f`。

六个视口均检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。当前 CSS 只改变透明度，六端点几何相同。下表以未取整 CSS 像素计算。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 272.00x118.90 | 24.00 | 76.55 | 68.55 | Pass |
| 390x760 | 342.00x149.50 | 24.00 | 61.25 | 53.25 | Pass |
| 1366x768 | 559.68x244.65 | 72.00 | 51.32 | 139.67 | Pass |
| 1920x900 | 825.60x360.89 | 72.00 | 62.40 | 147.55 | Pass |
| 2560x900 | 1132.80x495.18 | 72.00 | 75.20 | 80.41 | Pass |
| 3840x900 | 1281.10x560.00 | 96.00 | 333.85 | 48.00 | Pass |

静态几何合成图按现有主体容器比例拟合 canonical cover，标出完整主体、文字区与面板区；它不是浏览器截图。所有目标视口中，完整主体与视口、文字区和面板保持至少 24 CSS px 间距。

## 目视记录与限制

两张成体观察图初稿体色不符，编辑后重新检查；卵与幼体无比例尺，趾端与外鳃不用于精确计数。

已检查最终生成源图和运行封面的原始分辨率，复核运行图集联系表及六视口静态几何合成图。完整主体、关键颜色和观察场景通过目视检查。

## 压缩与哈希

使用 `npm run convert:webp` 进行首次 WebP 转换并检查解码与尺寸，不重复压缩已接受的 WebP。已清理仓库中的临时 PNG；保留六张运行 WebP、提示词和哈希记录。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `075c717e86700814b5398588e279f8585e591f1f674536fcb20414fa7d52fcdd` | `7cb209bbc06922432e5a163f27e3d3896b297d6fbd306f2c866b7bc7663d593f` |
| 02 | `385c2232ca5b6150e6fe6a29e09feea1d75f2d9e75d5b7c9c86d2a6c03ac1f02` | `a0c4e3c240334851c93901306c9d55681275192a0ea5ac3d292c84eba5282858` |
| 03 | `f134e433624de06cb66e7cb74be288a0ede96acdb8ed1e397eb54410360b8fa9` | `e1553d8bf8e9f8984518661a265a3669928c8623380a03a7e2b953138e68a52a` |
| 04 | `3d656f2027bce9b76bb47f3de4b1b15010603ab1443c304e67657028b28743cd` | `5e147293e250ee95b78bbda4eacef607e2488493755fd878dc123901ea339448` |
| 05 | `fdc95b8192be230f79882136c1309c88e1dc9d1cc19b9956bbde3e6d6ce95a34` | `98fee110abbc04c74722fb33f17d85d97d8bedef68bd2ec98b21ee8846eafa69` |
| 06 | `a1414375e5f69c7a1cecfeb8690aacb185ee9f394c4546b5a83f7344f17bb533` | `3485b68d7e720ffe665368042a2dc5010ae77f2d8cc3f6a2f0de92dec740914d` |

## 最终验证

2026-09-14 完成静态验收。测试共 459 项通过；首次全套运行发现的首屏脚本体积超限已通过目录字段压缩修复，随后 `npm run test:dist-subpath` 三项复测通过，包含 TypeScript 检查、生产构建、子路径资源访问、脚本体积限制与目录数据无损还原。未启动浏览器。
