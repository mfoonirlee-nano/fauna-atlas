# Capybara image set

2026-09-09 使用内置 imagegen 制作六张 1536 × 1024 图片。运行图保存在 `public/images/species/capybara/`；完整提示词及封面编辑步骤见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应定位野外照片。

## 内容依据

- [GBIF — 水豚分类](https://www.gbif.org/species/5786666)
- [Animal Diversity Web — 水豚](https://animaldiversity.org/accounts/Hydrochoerus_hydrochaeris/)
- [San Diego Zoo — 水豚](https://zoo.sandiegozoo.org/animals/capybara)

访问日期：2026-09-09。ADW 确认物种、南美洲范围、形态、食草与群居习性，并引用 IUCN 无危等级。San Diego Zoo 页面同时介绍广义水豚的中美洲分布，本档案不据此扩展 H. hydrochaeris 的原生范围。体重 35–66 kg 可用于成体质量比较；长度 106–134 cm 的测量端点未明确，不填 adultLengthCm。

本次未核实独立全球评估日期和全球趋势；assessedYear 留空，trend=unknown。来源中的网页更新日期和名录版本年份不作为评估日期。

## 图片范围与限制

封面部分足尖受短草遮挡，边界仍包含可见足部。05 水下身体不可见；06 成年与幼年不构成等比例测量，不能据此判断亲缘或性别。

## 封面验收

源图和运行 WebP 均为 1536 × 1024。focalPoint：`{"x": 0.75, "y": 0.39}`。目测保守完整可见主体边界：`{"left": 1040, "top": 350, "right": 1192, "bottom": 458}`，包括当前姿态可见的头、嘴鼻或喙、耳或刺尖、翅鳍、足部、尾部及外缘。中心位于宽度的 72.7%，左 40% 留作环境背景，完整主体四周有真实背景。

运行封面 SHA-256：`0e0b56c6fbe9d1d1cc9e5764b2ecbea19714f03bca88186107152067fed8a2ec`。

已按原始分辨率查看临时输入和运行封面。测试把此哈希与完整可见边界绑定；下表按现有 CSS 几何计算与视口、正文和轮播面板的最小间距，单位为 CSS 像素，要求至少 24。未启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 50.08 | Pass 45.93 | Pass 31.57 | Pass 50.68 | Pass 51.08 | Pass 35.87 |
| 390x760 | Pass 50.08 | Pass 51.68 | Pass 45.13 | Pass 50.68 | Pass 51.08 | Pass 50.30 |
| 1366x768 | Pass 78.33 | Pass 79.62 | Pass 79.14 | Pass 41.88 | Pass 30.64 | Pass 78.82 |
| 1920x900 | Pass 135.70 | Pass 136.73 | Pass 136.34 | Pass 101.30 | Pass 85.50 | Pass 136.09 |
| 2560x900 | Pass 111.27 | Pass 111.32 | Pass 111.30 | Pass 111.29 | Pass 111.30 | Pass 111.29 |
| 3840x900 | Pass 62.40 | Pass 60.50 | Pass 222.04 | Pass 61.69 | Pass 61.21 | Pass 177.80 |

## 压缩与验收哈希

逐张检查源图，使用 `npm run convert:webp -- <本批源图>` 转换，cwebp q82、m6，验证解码及尺寸。检查运行图静态拼图；封面另以原始分辨率复核。未使用 TinyPNG，未重复压缩已接受的 WebP。验收后删除本批临时 PNG，仅保留 WebP、提示词及哈希记录。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `680bb7b16088d76bba31fc18514b1c0482a7b24359229d2fc075d5e30656e6b3` | `c1b3384f64a916870f4625e97ebb2edc66e11ced7c0ebbea8f3235aacfbe077c` |
| 02 | `cdb1aa256782ec56193fccfb1c4f114998bdcead3fcc6474fe58067797fd62e7` | `e83ea5f557aa375e7e7dba906f58983518a4d291bda77c22a5ee9f3a4019f798` |
| 03 | `82b51f36a536e95563496e9d0c69b6598ba554267031887dc71a49f0ce9fbd15` | `d9a3fd7f49f9c916f4620d33afd9e320376b396f5b61caee8bdea5a634fe4b46` |
| 04 | `4675964c5ddd31bb8a7826279650fb6aca8db596c189d96556660c19da36a5dd` | `0b00bdf900ae7dbe2c4478ea49877d9fa056cb9f6487d8a9009d9a56192d8b46` |
| 05 | `880f1dd08a706f836e1e37594d99bf8a3d7a8fd5f135aaa737270cf1822c7108` | `513d285f3a822ae35992fd9ce622a14e7da040e70194fcd348c757dbde0a0f45` |
| 06 | `27ac277bcbe00158c0f630d0926cdfa09fe4e78ce4e1a837838298dc97a4102a` | `40479898cdb164a2eb61aa2ec7b98cb58e54404a8c03696a720dc23c82360224` |

## 项目验证

`npm run typecheck` 与 `npm test` 通过。完整测试覆盖分类图谱、目录数量、六图哈希与格式、首页封面安全区域、图片查看器、物种列表，以及生产构建后的子路径图片访问。生产构建通过；仍有 JavaScript chunk 超过 500 kB 的提示。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `c1b3384f64a916870f4625e97ebb2edc66e11ced7c0ebbea8f3235aacfbe077c`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.75, "y": 0.39}`. Conservative full-subject boundary: `{"left": 725, "top": 265, "right": 1445, "bottom": 795}`, 720×530 source pixels (previously 152×108). Boundary center is 70.6% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes capybara whiskers, ears and all four feet, hedgehog whiskers, outer spine tips and visible toes, and penguin bill, both flippers, tail and webbed feet. Background remains between these features and the source edges. The animal is prominent on the right; the left 40% remains quiet habitat. The conservative measurement may include a few background pixels. Foot placement and far-side overlap follow the pictured poses. The first capybara and hedgehog candidates were rejected for leftward muzzle or whisker intrusion; accepted edits move the complete silhouettes right. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 112.8×80.2 → 239.1×176.0 | 40.45 | 48.00 | 40.00 | Pass |
| 390×760 | 112.8×80.2 → 239.1×176.0 | 75.45 | 48.00 | 40.00 | Pass |
| 1366×768 | 135.2×96.0 → 559.7×412.0 | 72.00 | 51.32 | 56.01 | Pass |
| 1920×900 | 190.0×135.0 → 760.8×560.0 | 96.00 | 94.82 | 48.00 | Pass |
| 2560×900 | 253.3×180.0 → 760.8×560.0 | 96.00 | 261.22 | 48.00 | Pass |
| 3840×900 | 380.0×270.0 → 760.8×560.0 | 96.00 | 594.02 | 48.00 | Pass |

`npm run test:carousel`: all 36 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
