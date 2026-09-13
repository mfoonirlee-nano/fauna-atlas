# Eurasian Red Squirrel image set

2026-09-09 使用内置 imagegen 制作六张 1536 × 1024 图片。运行图保存在 `public/images/species/eurasian-red-squirrel/`，提示词和封面编辑步骤见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应定位野外照片。

## 内容依据

- [GBIF — 名称与分类归属](https://www.gbif.org/species/8211070)
- [Animal Diversity Web — 外形与生活](https://animaldiversity.org/accounts/Sciurus_vulgaris/)
- [Woodland Trust — 红松鼠](https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/animals/mammals/red-squirrel/)
- [Mammal Diversity Database — 全球等级](https://www.mammaldiversity.org/taxon/1001701/)

访问日期：2026-09-09。GBIF 确认 Sciurus vulgaris 及啮齿目、松鼠科、松鼠属归属。MDD 引用全球 LC；英国局部下降、灰松鼠竞争和松鼠痘依据 Woodland Trust，不能当作全球趋势。300 g 是 Woodland Trust 的约重参照，不扩写为成年体重范围；metrics 不填伪造的上下限。

来源支持所列全球保护等级，但本次未取得独立评估日期和全球趋势证据。assessedYear 留空，trend 保留 unknown，不把网页更新时间或名录发布版本当作评估日期。

## 图片范围与限制

封面使用小主体环境构图，为首页文字及轮播控件留出空间；02 起的观察图展示更大的动物。02–06 展示红棕色个体，不代表所有季节与地区毛色。05 是单个攀爬姿态，远侧后脚可能被身体遮住；06 不展示巢。不能用生成图鉴定亚种。

## 封面验收

源图和运行 WebP 都为 1536 × 1024。focalPoint：`{"x": 0.87, "y": 0.31}`。目测保守完整主体边界：`{"left": 1138, "top": 304, "right": 1320, "bottom": 463}`，包含姿态下可见的头、耳尖、鼻端或嘴、足部、尾巴及外缘毛发；远侧受身体遮挡的结构不另行虚构。主体中心位于宽度的 80.0%，左 40% 为环境背景，完整主体边界四周保留真实背景。

运行封面 SHA-256：`c4e9c01c4ee01220bf1d85a155863b695067397e1c64815b266bb91a3887fd38`。

已按原始分辨率查看源图及运行封面，核对形态和上述边界。`tests/hero-carousel.test.mjs` 将完整主体边界与此哈希绑定。检查视口边缘、左侧正文和右侧轮播面板，6 个视口与 6 个动画端点均通过，最小安全余量 31.45 CSS 像素（要求至少 24）。依据现有 CSS 几何进行静态检查，未启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本物种临时源图>`，cwebp q82、m6 转换，并检查解码和尺寸。未使用 TinyPNG；未重复压缩接受的 WebP。逐张检查源图，转换后检查运行图的静态拼图，封面另以原始分辨率复核。完成验收后删除仓库中的本批临时源 PNG，只保留 WebP、提示词与哈希记录。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `3527940bf48b84792dd8abc0ed77c85c82640a3e25b177d45c2f40cfe2f75821` | `c4e9c01c4ee01220bf1d85a155863b695067397e1c64815b266bb91a3887fd38` |
| 02 | `201c18199463129bb5f90b85829ca98a2250bc0ef3daa223dcea00f3adc0f740` | `0baa146f09a476e420086d444a81de6c45261fcabf4ab1e6accbc7c735491ef5` |
| 03 | `5eb9f6eeffd92232d2e52decc26a66e72013de63aabfbc07f7793eb84479b4c2` | `33ce030543f2b041b99d6d7dbbc2f4b3853ca47d3c36b2b8ad8e9c9ca0c0ab74` |
| 04 | `1a6145d626d06d78750fb7db01abe317b1a139f685abaccd6ed54f02d17406b7` | `04c967b474758cf622417030e358aefaabebf9797b20c059021f2494882e5721` |
| 05 | `2f0fd0cd64c147bbd19241d9f9db6e6a04e55ed3657715e105649d36f97ba9fc` | `eb7e5c1e3ada9a63a2908e308d39ab3ef9ce54222f552e9144f6c8d61f647079` |
| 06 | `421373a0dca7b8952484f9b0744b08957a57f505311362d0e2070100aa62b0b8` | `419b0bfad0e81d9bd866ad7f833e9c677fcfd5cf0173d6479c6a5c6a90de8f3c` |

## 项目验证

`npm run typecheck` 与 `npm test` 通过；完整测试包含分类图谱、图片哈希和格式、首页封面安全区域、图片查看器、列表及生产构建后的子路径图片访问检查。构建仍提示 JavaScript chunk 超过 500 kB，未阻断构建。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `f467c86795ea85e5a626b55f23715b48442e6a114ca175448813d234a73e23db`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.87, "y": 0.31}`. Conservative full-subject boundary: `{"left": 630, "top": 45, "right": 1505, "bottom": 865}`, 875×820 source pixels (previously 182×159). Boundary center is 69.5% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes tortoise head, shell, neck, four visible feet and tail, seahorse snout, crown, translucent fins and complete curled tail, and squirrel whiskers, ear tufts, toes and tail hairs. Background remains between these features and the source edges. The animal is prominent on the right; the left 40% remains quiet habitat. Conservative measurements include a few background pixels around fine hairs and translucent fin edges. The seahorse naturally grips a seagrass blade, which overlaps part of its tail without hiding the outer curl. The first tortoise candidate was rejected for leftward head intrusion; the accepted edit moves the complete silhouette right. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 135.1×118.0 → 187.8×176.0 | 66.10 | 48.00 | 40.00 | Pass |
| 390×760 | 135.1×118.0 → 187.8×176.0 | 101.10 | 48.00 | 40.00 | Pass |
| 1366×768 | 161.9×141.4 → 456.7×428.0 | 96.00 | 102.81 | 48.00 | Pass |
| 1920×900 | 227.5×198.8 → 597.6×560.0 | 96.00 | 176.42 | 48.00 | Pass |
| 2560×900 | 303.3×265.0 → 597.6×560.0 | 96.00 | 342.82 | 48.00 | Pass |
| 3840×900 | 455.0×397.5 → 597.6×560.0 | 96.00 | 675.62 | 48.00 | Pass |

`npm run test:carousel`: all 39 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
