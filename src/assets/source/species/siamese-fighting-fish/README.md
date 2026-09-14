# Siamese Fighting Fish image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/siamese-fighting-fish/`。最终提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [ADW — 暹罗斗鱼行为与繁殖](https://animaldiversity.org/accounts/Betta_splendens/)
- [FishBase — IUCN 全球评估记录](https://fishbase.se/country/CountrySpeciesSummary.php?c_code=418&genusname=Betta&speciesname=splendens)
- [ETYFish — 攀鲈目分类](https://etyfish.org/anabantiformes/)
- [University of Florida IFAS — 迷鳃器与泡巢](https://ask.ifas.ufl.edu/publication/FA212)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。采用野生型短鳍外形，不能根据生成图鉴定近缘斗鱼或排除杂交。05 成图包含左侧雌鱼与右侧雄鱼，图注按成图修订，不表示长期配对。03 仅展示水面吞气，未绘制内部迷鳃器；04 的泡巢不证明已有受精卵。分类采用攀鲈目口径，不沿用 ADW 的旧鲈形目位置。

## 压缩与静态检查

六张最终源 PNG 均已通过 TinyPNG 压缩，再用仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查压缩后的封面源 PNG 和全部最终运行 WebP。未使用浏览器。

## 封面验收

源图与运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.9, "y": 0.42}`。原始分辨率目测的保守全主体边界为 `{"left": 1075, "top": 347, "right": 1268, "bottom": 482}`，包括姿态下可见的吻端、冠突、足部、鱼鳍及完整尾尖。主体中心在源宽度的 76.3%，左侧 40% 留作背景，主体四周留有环境。

运行封面 SHA-256：`40132e9164cef77ccb35e30ef08905240c8bbc01a80d1f84e9e3b3c0701c52ce`。

`tests/hero-carousel.test.mjs` 绑定上述哈希与完整主体边界。`npm run test:carousel` 已通过，检查主体与视口边缘、正文及轮播面板至少 24 CSS 像素的间距。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `af6aac1bb5f99d22435cca61b5b97730437c49b75d3c3bbf91acddd3edf62992` | `c6382e8c5a79d02d51fabbc9af9731f96178121c77e67f7049497fbb04cb8e1f` |
| 02 | `331ca42e11c3b4b19bc470b302d4896fafc5e8e450fcf310bfd3aad5ac7ad2a1` | `4c2fc478e15519471f2aa717fd1e72c686cfc1cbf93455d14c152e6d68e2c2e1` |
| 03 | `b231af8d245006376dd3fb70ad069c414e462aa0aebde842f05e0e04369498b0` | `94387ab64f94f87ea0d1dcde37666ae96c8c75a4d2e7582ca1e93e92dd560b98` |
| 04 | `88b47424bd7acf0ead2524eaf715a6209818c23397fb668b61ad7cd5e488b8d3` | `a97cbe1a9c940ed241c02294779a6cb76843e4de3713ca157972362e17e80546` |
| 05 | `a2eda7f48c22794e700f774daada47ae9e6857bce28b27d20ca7b5b423157be0` | `13e427413f3497656340fade27a0012b58746d8830e1f8f20b7a6c1e59c7e876` |
| 06 | `81cebb014bcd133e8297b632d0f1b9ac2ffb356bea6eb2ff42344a6dcd359704` | `387362d4ae49c2a0a1fd168b893665b8c5eedbb10708bee5675ef9618ed9805b` |

## 验证结果

`npm test` 的 199 项测试全部通过，包含新增物种分类归属、PNG/WebP 尺寸与哈希、封面裁切、交互逻辑及构建后子路径资源检查。TypeScript 检查与生产构建通过。Vite 仍提示主代码块超过 500 kB；本次未调整打包结构，未启动浏览器。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `c6382e8c5a79d02d51fabbc9af9731f96178121c77e67f7049497fbb04cb8e1f`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.9, "y": 0.42}`. Conservative full-subject boundary: `{"left": 595, "top": 170, "right": 1475, "bottom": 755}`, 880×585 source pixels (previously 193×135). Boundary center is 67.4% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the snout, dorsal and anal fins, rounded tail, visible pectoral fin and both slender pelvic-fin tips. Real water remains between these features and source edges. The animal is prominent on the right; the left 40% remains quiet marsh water. Only the snout tip reaches about 39% source width, leaving the broad left copy field clear. Far-side fins overlap naturally. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 143.2×100.2 → 264.8×176.0 | 27.62 | 48.00 | 40.00 | Pass |
| 390×760 | 143.2×100.2 → 264.8×176.0 | 62.62 | 48.00 | 40.00 | Pass |
| 1366×768 | 171.6×120.1 → 559.7×372.1 | 72.00 | 51.32 | 75.97 | Pass |
| 1920×900 | 241.2×168.8 → 825.6×548.8 | 72.00 | 62.40 | 53.58 | Pass |
| 2560×900 | 321.7×225.0 → 842.4×560.0 | 96.00 | 220.40 | 48.00 | Pass |
| 3840×900 | 482.5×337.5 → 842.4×560.0 | 96.00 | 553.20 | 48.00 | Pass |

`npm run test:carousel`: all 53 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
