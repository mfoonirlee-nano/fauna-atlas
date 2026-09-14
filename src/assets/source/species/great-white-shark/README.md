# Great White Shark image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/great-white-shark/`。最终提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [Florida Museum — 大白鲨](https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/white-shark/)
- [NOAA Fisheries — 大白鲨生态与保护](https://www.fisheries.noaa.gov/species/white-shark)
- [University of Florida IFAS — 鲨鱼牙齿更替](https://ask.ifas.ufl.edu/publication/FA179)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。03 表现略张的口和牙齿轮廓，不能用于锯齿计数、估计换牙周期或测量齿长。05 为浅海幼鲨情景，没有比例尺，不能作为年龄或体长测量证据。全球易危状态不等于各区域种群趋势相同。

## 压缩与静态检查

六张最终源 PNG 均已通过 TinyPNG 压缩，再用仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查压缩后的封面源 PNG 和全部最终运行 WebP。未使用浏览器。

## 封面验收

源图与运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.91, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1092, "top": 346, "right": 1305, "bottom": 431}`，包括姿态下可见的吻端、冠突、足部、鱼鳍及完整尾尖。主体中心在源宽度的 78.0%，左侧 40% 留作背景，主体四周留有环境。

运行封面 SHA-256：`bb8b893fc12879b4bbf6c2f836095b2d02d239bd4bbf6f0827b2de4e366fca25`。

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
| 01 | `43f59457e0a159605754a1d0c22baf079f8719b929857c34cb6bb40bb9546831` | `022c73e33ec7595fb9681c0781794e6fa2da92a3a367e749c49b4d6263176480` |
| 02 | `febd94da5f17ea7a776524c9b4b5c5fd0815f793dfc1b402c0c47a877c213418` | `16f6c1beebf07b7148e6419e7117de8f421767818d4bbf2415b55d2138c4f5be` |
| 03 | `184ef7c2e207f913e2a11e8955fcf58f8acb0ff2284037a9c530673385256716` | `c545ac160133624a40cb081362426c09436fed4db83d93e744884d8ccaa39679` |
| 04 | `43ce1469a3909dd6dd8ffddb2c02f73e1b1dd40510a74b1ce918031a29037d54` | `97b397e1e3120ea4b85f75cb94aefb5906a58c12ab4a572adcface21c09dfc31` |
| 05 | `143c94d1a7d7c296a691e337ca59fd9a0f201cafb146e294bb9145eb00a3f35a` | `50027d5997a621317f876cf24baf2426fce44fd3822324b76e2696a90a57c027` |
| 06 | `8f33af758ad5e3ac29b37d2334864aae20b7f95716196bb50982d8aeb8a58779` | `3a01fefe7e72e9521472f4ed8cce70e07225a09418e35ed3d4346eb1cdc9ab06` |

## 评估日期范围

已核对资料中的全球 IUCN 类别，未核实独立评估日期，故 `assessedYear` 留空。高冠变色龙 DOI 中的 2012 年是发布年份，不据此填写评估年份；东方铃蟾与大白鲨采用动物园、博物馆引用的类别。种群趋势未核实，保持 `unknown`。

## 验证结果

`npm test` 的 199 项测试全部通过，包含新增物种分类归属、PNG/WebP 尺寸与哈希、封面裁切、交互逻辑及构建后子路径资源检查。TypeScript 检查与生产构建通过。Vite 仍提示主代码块超过 500 kB；本次未调整打包结构，未启动浏览器。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `022c73e33ec7595fb9681c0781794e6fa2da92a3a367e749c49b4d6263176480`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.91, "y": 0.4}`. Conservative full-subject boundary: `{"left": 690, "top": 285, "right": 1460, "bottom": 685}`, 770×400 source pixels (previously 213×85). Boundary center is 70.0% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the snout, dorsal fin, both pectoral fins, visible smaller rear fins and both tail lobes. Real blue water remains around all extremities. The first candidate intruded into the left copy field; the accepted edit places the complete shark on the right, with quiet water across the left 40%. Far-side fins overlap naturally. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 158.1×63.1 → 272.0×141.3 | 24.00 | 65.35 | 57.35 | Pass |
| 390×760 | 158.1×63.1 → 338.8×176.0 | 25.60 | 48.00 | 40.00 | Pass |
| 1366×768 | 189.4×75.6 → 559.7×290.7 | 72.00 | 51.32 | 116.63 | Pass |
| 1920×900 | 266.2×106.2 → 825.6×428.9 | 72.00 | 62.40 | 113.56 | Pass |
| 2560×900 | 355.0×141.7 → 1078.0×560.0 | 96.00 | 102.60 | 48.00 | Pass |
| 3840×900 | 532.5×212.5 → 1078.0×560.0 | 96.00 | 435.40 | 48.00 | Pass |

`npm run test:carousel`: all 54 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
