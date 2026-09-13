# Green Iguana image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/green-iguana/`。提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [Animal Diversity Web — 绿鬣蜥](https://animaldiversity.org/accounts/Iguana_iguana/)
- [The Reptile Database — 绿鬣蜥分类](https://reptile-database.reptarium.cz/Iguana/iguana)
- [IUCN SSC Iguana Specialist Group — 2018 年评估记录](https://www.iucn-isg.org/publications/recent-red-list-assessments/)
- [IUCN SSC Iguana Specialist Group — 原生种群与引入影响](https://www.iucn-isg.org/wp-content/uploads/2020/01/ISG_Newsletter_18.pdf)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。封面包含吻端、爪足、背棘与完整尾尖。02、03 的局部取景不展示完整尾巴；顶眼位置未作图示。保护资料采用已核实的 2018 年历史评估。

## 压缩与静态检查

TinyPNG 已压缩六张源 PNG，随后通过仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查压缩后的封面源 PNG 和全部运行 WebP。未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.95, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1130, "top": 372, "right": 1320, "bottom": 424}`。主体中心位于源宽度的 79.8%，左侧 40% 为安静背景，主体四周保留环境。

运行封面 SHA-256：`4ee8a4faa247ac685578ea00cae4dde5423543d49b8f48a717a5e0cead374de8`。

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
| 01 | `bdefcc35feed520a9ca4801aec452d5328c24ff5ea847090134d01b2e9865f72` | `4ee8a4faa247ac685578ea00cae4dde5423543d49b8f48a717a5e0cead374de8` |
| 02 | `5cf262f82cfb8c5a85c6037948728667401ea91994d358d616ee407a910f3789` | `f46a6d2aa96a3dddee722bb7fcd4b724ea8f4328cb2fd1fd1473bb17c15be403` |
| 03 | `8487b632bb18a98d40951f3174f7e5bd0867cc12a49acd46adca551470df4f85` | `19c3b8e6eacf957433487dbca31f7392047961651ea8c322200f5c9cc31a5d8a` |
| 04 | `4196049d20bc542edaf88ec3faf511f2698e0ae18888b48066d5934ef78db846` | `89d3cc6e5ccc870ba97eeebf2b398ef5b6e8844f9add307f95742f13f381498e` |
| 05 | `97684109d51dab76e9d9f9ece9bb4135c0f33dfbef2fea2ad508052a6ff0e770` | `3e4622f5331a8ad72c0c8af5eaad6ceac440c14e582b25a28d8ba59dcec22c30` |
| 06 | `c1cd377630c2819c6966d15688959c72a6325dcabefdae035dff28bb68ed4143` | `2a7c76518d6fafdfd31b6e0a9ee7451e4fb4723bb41d8041e94ef2d41c187523` |

## 验证结果

`npm test` 的 193 项测试全部通过，覆盖分类、图片尺寸与哈希、封面完整主体及子路径资源。生产构建与 TypeScript 检查通过。构建提示主代码块超过 500 kB；未启动 GUI 或无头浏览器。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `5e2f9454fedb8affac4c3fa48ddcfaed18346f53bae7def915da1e7f91777f0f`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.95, "y": 0.4}`. Conservative full-subject boundary: `{"left": 638, "top": 134, "right": 1505, "bottom": 855}`, 867×721 source pixels (previously 190×52). Boundary center is 69.8% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the snout, dorsal spines, dewlap, visible claw tips and the entire curved tapering tail. The far-side hind limb is naturally occluded by the body; front feet partially overlap. Real background remains around the tail curve, tip and all other visible extremities. The enlarged animal occupies the right side while the left 40% remains quiet river habitat. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 141.0×38.6 → 211.6×176.0 | 54.18 | 48.00 | 40.00 | Pass |
| 390×760 | 141.0×38.6 → 211.6×176.0 | 89.18 | 48.00 | 40.00 | Pass |
| 1366×768 | 169.0×46.2 → 514.7×428.0 | 94.51 | 73.83 | 48.00 | Pass |
| 1920×900 | 237.5×65.0 → 673.4×560.0 | 96.00 | 138.50 | 48.00 | Pass |
| 2560×900 | 316.7×86.7 → 673.4×560.0 | 96.00 | 304.90 | 48.00 | Pass |
| 3840×900 | 475.0×130.0 → 673.4×560.0 | 96.00 | 637.70 | 48.00 | Pass |

`npm run test:carousel`: all 58 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
