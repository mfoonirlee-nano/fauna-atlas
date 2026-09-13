# Scarlet Macaw image set

2026-09-09 使用内置 image_gen 生成并编辑六张 1536 × 1024 图片。运行资产保存在 `public/images/species/scarlet-macaw/`，完整提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不是实拍地点或野外记录。

## 内容依据

- [Animal Diversity Web — Ara macao 形态与生活](https://animaldiversity.org/accounts/Ara_macao/)
- [Animal Diversity Web — Ara macao 分类归属](https://animaldiversity.org/accounts/Ara_macao/#classification)
- [World Parrot Trust — 绯红金刚鹦鹉保护](https://parrots.org/projects/scarlet-macaw-recovery/)

访问日期：2026-09-09。分类采用 ADW 的鹦形目、鹦鹉科与金刚鹦鹉属。World Parrot Trust 支持全球 LC 与下降趋势；未把页面访问年填作评估年。体长约 89 cm 包含尾羽。未沿用 ADW 中不一致的寿命字段。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1116, "top": 342, "right": 1167, "bottom": 461}`；包含该姿态可见的喙、尾羽、足、螯、鳍或腕。边界中心位于源宽度的 74.3%，左 40% 留作环境背景。focalPoint 为 `{"x": 0.78, "y": 0.35}`。

运行封面 SHA-256：`b70d42768f1d0ea51a3a6705c289f16121130765beeb5e72f45b75c8b5a8d4d7`。

已按原始分辨率静态检查源封面与最终 WebP；主体完整且与画面边缘之间留有背景。封面采用远景，细节辨认使用详情图集。生成图不用于计量、固定数量推断或精细解剖证明。

下表按现有 CSS 的 object-fit、object-position 与动画变换计算，值为视口边缘及文字、控制面板占位矩形的最小间距（CSS 像素）。每项至少 24 像素；对应回归在 `tests/hero-carousel.test.mjs`，绑定运行封面哈希和完整主体边界。不使用浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 47.85 | Pass 49.37 | Pass 48.80 | Pass 48.42 | Pass 48.80 | Pass 48.42 |
| 390x760 | Pass 47.85 | Pass 49.37 | Pass 48.80 | Pass 48.42 | Pass 48.80 | Pass 48.42 |
| 1366x768 | Pass 69.96 | Pass 70.91 | Pass 70.55 | Pass 70.31 | Pass 70.55 | Pass 70.31 |
| 1920x900 | Pass 116.75 | Pass 117.02 | Pass 116.92 | Pass 116.85 | Pass 116.92 | Pass 116.85 |
| 2560x900 | Pass 74.00 | Pass 72.56 | Pass 73.10 | Pass 73.46 | Pass 73.10 | Pass 73.46 |
| 3840x900 | Pass 204.00 | Pass 238.80 | Pass 269.60 | Pass 63.45 | Pass 33.75 | Pass 271.36 |

## 压缩与验收哈希

源输入与运行图逐张静态检查。使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，脚本验证解码及尺寸；未使用 TinyPNG，不重复压缩已接受的 WebP。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `f786d89585d7ed65bddeba28657f211fa84e62fba9c0dd757e186a55005db0f0` | `b70d42768f1d0ea51a3a6705c289f16121130765beeb5e72f45b75c8b5a8d4d7` |
| 02 | `181824be47848a8f750063777ba4f0e5d61ced88c09edc0db2fb31fa45100008` | `bcfd691c67a4156efe81fedc59d24019d83f02ac69a7a0ddeb52b7257e8e0024` |
| 03 | `16845185ca4e112d06cd84d85dbebcb905cafd9ec3c0e8c0384af6c37ee037ee` | `b172bf39d759574f1683154e71c7e93121c58474c5bd8ed4e42d5199fa827012` |
| 04 | `afc518271dbcabec90fb08f1ec943a1336c6e15e516bc456e8c4cbb4d9568970` | `9e3f022830cd89427c917f553ddb7f554401348185e0bacb21ddb1a041123a12` |
| 05 | `60b5afa82545781a5c7f083e55714800e1db52956d2884fd71d9c0c3bc02d339` | `a25113b97940702efe1bd52415db85d648460006c4992d00899a7dff00f9cc9a` |
| 06 | `3f64d311eee9c9ed31630214f6d61cd4a8ee2f9d9c21390e0c16d500b73f9659` | `4de3e81a549d29f53e4245410f64053572d6dab4db6bb5c75b507a04514fd176` |

## 仓库验证

`npm run typecheck`、`npm test`（含生产构建与子路径资源验证）及 `git diff --check` 通过。验收后删除本批临时源 PNG，保留运行 WebP、提示和源文件哈希。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `c6427226cdede9be00efeebf7e3bc24559db389befcad023461b3c34f2b178a8`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.78, "y": 0.35}`. Conservative full-subject boundary: `{"left": 790, "top": 45, "right": 1335, "bottom": 995}`, 545×950 source pixels (previously 51×119). Boundary center is 69.2% of source width.

Inspected the PNG and runtime WebP at original resolution. The visible full silhouette includes bill, claws, wing edges and complete long tail for the macaw; head and all outer fin rays for the fish. Background remains between these features and the source edges. The animal is prominent on the right; the left 40% remains quiet habitat. The conservative measurement may include a few background pixels. The guppy depicts an ornamental male, not wild-type coloration.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 37.9×88.3 → 101.0×176.0 | 109.52 | 48.00 | 40.00 | Pass |
| 390×760 | 37.9×88.3 → 101.0×176.0 | 144.52 | 48.00 | 40.00 | Pass |
| 1366×768 | 45.4×105.8 → 245.5×428.0 | 96.00 | 208.39 | 48.00 | Pass |
| 1920×900 | 63.8×148.8 → 321.3×560.0 | 96.00 | 314.57 | 48.00 | Pass |
| 2560×900 | 85.0×198.3 → 321.3×560.0 | 96.00 | 480.97 | 48.00 | Pass |
| 3840×900 | 127.5×297.5 → 321.3×560.0 | 96.00 | 813.77 | 48.00 | Pass |

`npm run test:carousel`: all 21 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
