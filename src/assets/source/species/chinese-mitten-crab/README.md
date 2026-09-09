# Chinese Mitten Crab image set

2026-09-09 使用内置 image_gen 生成并编辑六张 1536 × 1024 图片。运行资产保存在 `public/images/species/chinese-mitten-crab/`，完整提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不是实拍地点或野外记录。

## 内容依据

- [Animal Diversity Web — Eriocheir sinensis 形态与生活](https://animaldiversity.org/accounts/Eriocheir_sinensis/)
- [Animal Diversity Web — Eriocheir sinensis 分类归属](https://animaldiversity.org/accounts/Eriocheir_sinensis/#classification)
- [Animal Diversity Web — 中华绒螯蟹保护状态字段说明](https://animaldiversity.org/accounts/Eriocheir_sinensis/#conservation_status)

访问日期：2026-09-09。ADW 支持十足目、弓蟹科与绒螯蟹属，生活史在淡水与河口间转换。其保护状态字段为 No special status，不能翻译成 IUCN LC；本次未核实到可用全球评估，沿用仓库暂记 NE 的处理方式并在正文说明，不编造评估年份。原生地与引入地分开。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1183, "top": 398, "right": 1301, "bottom": 473}`；包含该姿态可见的喙、尾羽、足、螯、鳍或腕。边界中心位于源宽度的 80.9%，左 40% 留作环境背景。focalPoint 为 `{"x": 0.88, "y": 0.35}`。

运行封面 SHA-256：`5aa7c49bb807b626cb8f88f4773048f6a70455780aa2fbb1b2c6d2b8a470a66c`。

已按原始分辨率静态检查源封面与最终 WebP；主体完整且与画面边缘之间留有背景。封面采用远景，细节辨认使用详情图集。生成图不用于计量、固定数量推断或精细解剖证明。

下表按现有 CSS 的 object-fit、object-position 与动画变换计算，值为视口边缘及文字、控制面板占位矩形的最小间距（CSS 像素）。每项至少 24 像素；对应回归在 `tests/hero-carousel.test.mjs`，绑定运行封面哈希和完整主体边界。不使用浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 38.95 | Pass 40.10 | Pass 39.67 | Pass 39.38 | Pass 39.67 | Pass 39.38 |
| 390x760 | Pass 38.95 | Pass 40.10 | Pass 39.67 | Pass 39.38 | Pass 39.67 | Pass 39.38 |
| 1366x768 | Pass 59.28 | Pass 59.81 | Pass 59.62 | Pass 59.48 | Pass 59.62 | Pass 59.48 |
| 1920x900 | Pass 101.75 | Pass 101.42 | Pass 101.54 | Pass 101.63 | Pass 101.54 | Pass 101.63 |
| 2560x900 | Pass 54.00 | Pass 53.33 | Pass 170.96 | Pass 53.16 | Pass 52.60 | Pass 138.44 |
| 3840x900 | Pass 298.50 | Pass 292.44 | Pass 294.71 | Pass 233.46 | Pass 205.44 | Pass 296.23 |

## 压缩与验收哈希

源输入与运行图逐张静态检查。使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，脚本验证解码及尺寸；未使用 TinyPNG，不重复压缩已接受的 WebP。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `021baa2fdac68ae24332aabdb7225374e2ad2f991b2a0e55bab42da7287e2fc0` | `5aa7c49bb807b626cb8f88f4773048f6a70455780aa2fbb1b2c6d2b8a470a66c` |
| 02 | `c42324594364aefa3dcde148f7ea04ee816aefa2750b3c169a77960bcb925719` | `48f73fd6d4b865a98273214d937d01630c6cc5cde8c613ad75a79ac98f68d422` |
| 03 | `a289898f0279a0d727b25c749a4c2b3ed87f57705d7a608968e264509734f6a2` | `04f2b81193275ace863945a2f02c293373b857d1603aa07cd4f3b658398b5fd1` |
| 04 | `20ae280c3e4a412f83341447cebcea326d951ee8363509d6dca97027ed2a8ba8` | `61bb2914572a7b6bb870dedf422523cf0b518dedab257c12325ec3574a17daf6` |
| 05 | `d05bc8199473fc4ab493d22728e879a1c7a75dd31990056ae11cbebfa9e138a1` | `8ebb92ec04b846e2cdccea7554f4149609c419d5b5a28f33a1c8ef2574ff5807` |
| 06 | `bafdd02b999363ee5398556533535b4d91373e967650da169824ef2a8c4521e9` | `415a40811f4a26d83db62fadf5bcc33cf607e68f03f4f5817f26ed04328e70b3` |

## 仓库验证

`npm run typecheck`、`npm test`（含生产构建与子路径资源验证）及 `git diff --check` 通过。验收后删除本批临时源 PNG，保留运行 WebP、提示和源文件哈希。
