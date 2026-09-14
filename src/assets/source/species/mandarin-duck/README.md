# Mandarin Duck image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/mandarin-duck/`。提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [Animal Diversity Web — 鸳鸯](https://animaldiversity.org/accounts/Aix_galericulata/)
- [BirdLife DataZone — 全球评估档案](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/418)
- [BirdLife DataZone — 评估历史](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/418/history)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。封面包含喙、蹼足与尾端。03 对照雌雄；04、05 中的雄鸟仅是场景元素，不能据此推断雄鸟承担孵卵。

## 压缩与静态检查

TinyPNG 已压缩六张源 PNG，随后通过仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查压缩后的封面源 PNG 和全部运行 WebP。未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.95, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1172, "top": 394, "right": 1266, "bottom": 473}`。主体中心位于源宽度的 79.4%，左侧 40% 为安静背景，主体四周保留环境。

运行封面 SHA-256：`a02217a6ba74ac5de2bd0a072ed28263ec8ea80294d6781d3ee148d4002af8f7`。

`tests/hero-carousel.test.mjs` 绑定上述哈希和边界。`npm run test:carousel` 已验证完整主体与视口边缘、正文和轮播面板保持至少 24 CSS 像素间距。

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
| 01 | `d24c23e184b064efd97f4ccfce38b04b1e767cc863d390b33de8042d2ad53870` | `8a41ccf0765cedb1266b64439ccde3f7238e70d21a6b5cb5735e41d7e67f16e8` |
| 02 | `f625faf76879ccc7899f6f42b1ef6841df0db1984b8b1a59b348ef9619aae830` | `cd6b82fd4dfa63f53e2257dad796fc7b98b860f40616e371800a76a0dc2d9c07` |
| 03 | `d9b004ef38fa9e018103ddef2bc8b017c4b96a58f5d3a542ffeb2a9e719d95ce` | `197b7669e398adfbef27de5139db03ee70ce437682d54562d6ac4363dc0ee41a` |
| 04 | `5b24d7b928ab07c1d8ede4f0415d97cd2369726a0f641c1ff77f3d6a77f5cae5` | `2871d39168b982e76870b34f0e1355975ca972a3cbff223d60a5e4f621044929` |
| 05 | `58ce7160c9db93159c22145cddcc558bd691698784ce2d56c08cc2a6b62871e9` | `aded8f4d51a199d4e2db39cb5995ee2aa5bad5adf69eea84d2a7e1f82e1cfdbc` |
| 06 | `5cae031729bec68c17f91439ad4b6546dcc2a1472331bd0ad0458815a1f085f5` | `0de0497705fb3d3875071a5fdfb8d2a9d5c42ec6a65aba4db42244a4b57345ee` |

## 验证结果

`npm test` 的 193 项测试全部通过，覆盖分类、图片尺寸与哈希、封面完整主体及子路径资源。生产构建与 TypeScript 检查通过。构建提示主代码块超过 500 kB；未启动 GUI 或无头浏览器。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `8a41ccf0765cedb1266b64439ccde3f7238e70d21a6b5cb5735e41d7e67f16e8`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.95, "y": 0.4}`. Conservative full-subject boundary: `{"left": 700, "top": 120, "right": 1507, "bottom": 868}`, 807×748 source pixels (previously 94×79). Boundary center is 71.8% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the red bill, swept crown and cheek feathers, orange upright sail feathers, folded wings, tail tips and both webbed feet. Far-side feathers overlap naturally. Real background remains around all extremities, including the rightmost tail tip. The enlarged duck occupies the right side while the left 40% remains quiet pond habitat. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 69.8×58.6 → 189.9×176.0 | 65.06 | 48.00 | 40.00 | Pass |
| 390×760 | 69.8×58.6 → 189.9×176.0 | 100.06 | 48.00 | 40.00 | Pass |
| 1366×768 | 83.6×70.3 → 461.8×428.0 | 96.00 | 100.28 | 48.00 | Pass |
| 1920×900 | 117.5×98.8 → 604.2×560.0 | 96.00 | 173.11 | 48.00 | Pass |
| 2560×900 | 156.7×131.7 → 604.2×560.0 | 96.00 | 339.51 | 48.00 | Pass |
| 3840×900 | 235.0×197.5 → 604.2×560.0 | 96.00 | 672.31 | 48.00 | Pass |

`npm run test:carousel`: all 56 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
