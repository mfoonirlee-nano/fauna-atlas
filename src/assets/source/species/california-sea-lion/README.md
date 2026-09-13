# California Sea Lion image set

2026-09-12 使用内置 image_gen 生成一张封面和五张观察图，均为 1536 × 1024。运行资产保存在 `public/images/species/california-sea-lion/`。完整提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不代表实拍地点或野外观察记录。

## 内容依据

- [ASM Mammal Diversity Database — 加州海狮分类](https://www.mammaldiversity.org/taxon/1005908/)
- [NOAA Fisheries — 加州海狮生活、分布与威胁](https://www.fisheries.noaa.gov/species/california-sea-lion)
- [ASM Mammal Diversity Database — 加州海狮全球 IUCN 等级](https://www.mammaldiversity.org/taxon/1005908/)
- [NOAA Ocean Service — 海狮与海豹的耳廓和运动区别](https://oceanservice.noaa.gov/facts/seal-sealion.html)

访问日期：2026-09-12。ASM MDD 支持 Zalophus californianus 独立物种及全球 LC；NOAA 支持分布、耳廓、前鳍、食性与威胁，Ocean Service 支持后鳍前转的岸上运动。未把美国种群增长趋势当作全球趋势，也未混入加拉帕戈斯海狮或日本海狮。未核实独立评估日期和全球种群趋势，assessedYear 留空，trend 记为 unknown；不以网页更新日期代替评估年份。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：头旁的小耳朵。
- `03-observation.webp`：长长的前鳍。
- `04-observation.webp`：在岸上走一走。
- `05-observation.webp`：在水里划前鳍。
- `06-observation.webp`：回到岩岸休息。

已逐张静态检查生成图中的物种外形、动作与图注。动作前后图为独立生成的姿势示意，不能视为连续实拍；不使用图片证明精确趾数、测量值或捕猎成功。

## 封面验收

按原始分辨率检查临时 PNG 和最终运行 WebP，均为 1536 × 1024。完整可见主体保守目测边界为 `{"left": 1098, "top": 360, "right": 1186, "bottom": 432}`，包括吻端与胡须、耳廓、躯干、可见前后鳍外缘。边界中心位于源宽度的 74.3%，左 40% 保留环境背景，完整主体与源边缘之间有真实背景。focalPoint 为 `{"x": 0.79, "y": 0.36}`。

运行封面 SHA-256：`20a40c2a84e100df0bc8dba38c8d7cb274245e258e74a3e03b662327892d2cd0`。

封面采用远景，身体细节由观察图展示。遮挡的附肢不补计为可见部分。以下按仓库 CSS 的 object-fit、object-position、动画缩放与平移计算完整主体到视口边缘、文字及控制面板的最小间距，单位为 CSS 像素，所有值至少 24。检查不启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 69.38 | Pass 71.75 | Pass 69.75 | Pass 70.27 | Pass 70.86 | Pass 70.27 |
| 390x760 | Pass 69.38 | Pass 71.75 | Pass 70.86 | Pass 70.27 | Pass 70.86 | Pass 70.27 |
| 1366x768 | Pass 97.17 | Pass 99.22 | Pass 98.45 | Pass 94.24 | Pass 83.51 | Pass 97.94 |
| 1920x900 | Pass 156.80 | Pass 158.67 | Pass 157.97 | Pass 157.50 | Pass 157.97 | Pass 157.50 |
| 2560x900 | Pass 130.40 | Pass 131.22 | Pass 130.91 | Pass 130.71 | Pass 130.91 | Pass 130.71 |
| 3840x900 | Pass 159.00 | Pass 192.00 | Pass 298.71 | Pass 77.11 | Pass 76.79 | Pass 300.19 |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本批源图>`，由 cwebp q82、m6 转换并验证解码与尺寸。未使用 TinyPNG，不重复压缩已接受的 WebP。运行图通过静态联系表核对画面与图注，封面另按原始分辨率检查。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `af1248ad7039b62bf6006cadabf23b66f7ab8b36cd51e2076718500bffc07ab2` | `20a40c2a84e100df0bc8dba38c8d7cb274245e258e74a3e03b662327892d2cd0` |
| 02 | `16b2e417ff20b1a6bdaf3e0cf22b0aa553095bdff0290062a2146f8e0a20149f` | `4a4233d75d2dbd8d3367ccd2b6932b6c81e579be21273d6a1d80e33ab81b7b0f` |
| 03 | `80b58a757a9652f2ee99caef06a846a0075ef33eaf06dccfba02422d02d69ae4` | `0cab4c7e630210aafd36d7ece669a65da37eb804d7e0e4f6052daf85ff396e7c` |
| 04 | `4e83e69edd6df188001856a140124233ee45f7a3e79f01feab9fc9134adee2b0` | `61b54c1a1e5bc221b312555205576612990497aa33f20dea303b54e27352d18a` |
| 05 | `9b41a7ee06082abae61473e600d464b365a677e85a0e5fd4e5bee5f6708fa657` | `749c1dde9c5e60eb0a59eae153313369a5faef88f59918095c7309daeeb5a40a` |
| 06 | `3ef52d537e449d7dcb753be504e5d27a02df129188aa911d44c5295f1de555eb` | `396cbadb59f45aebc7651ca89a1d821d2af64b4399f6e74bff9cff72895cee42` |

## 仓库验证

2026-09-12 通过类型检查、生产构建及 222 项测试。`npm test` 中前 220 项通过，最后两项子路径测试因沙箱禁止监听 127.0.0.1 而中断；以 `node --test tests/dist-subpath.test.mjs` 在沙箱外重跑，两项通过。未启动 GUI 或无头浏览器。封面回归绑定运行哈希、完整主体边界及全部视口与动画端点。已将本批临时 PNG 移出仓库，只保留 WebP、提示词与验收记录。

## 2026-09-12 regenerated cover

Retained the regenerated `01-cover.webp` and the five existing gallery images. The image set contains six WebPs. Final prompt and source hash: [cover-regeneration.json](./cover-regeneration.json).

Runtime SHA-256: `2d666a6d90d50cdd6629094f5aa8c296e4f37459320b7d068ae2f3c2cc1c43cf`. Source and runtime dimensions: 1536×1024. Reviewed full-subject bounds (left, top, right, bottom): `[565, 95, 1500, 870]`. Original-resolution source and runtime inspection completed before temporary PNG archival.

The user removed the separate responsive hero images. Their previous six-viewport acceptance is withdrawn. The carousel now uses this same main cover; full-body crop acceptance in the existing carousel remains pending.

## 2026-09-12 single-cover framing verification

This section supersedes earlier carousel failure tables after the subject-frame layout change. Runtime hash: `2d666a6d90d50cdd6629094f5aa8c296e4f37459320b7d068ae2f3c2cc1c43cf`. Source/runtime dimensions: 1536×1024. Current visually reviewed full boundary: `{"left": 565, "top": 95, "right": 1512, "bottom": 870}` (947×775 source pixels). Committed focalPoint: `{"x": 0.79, "y": 0.36}`. Includes the visible muzzle/bill, ears or antlers, feet/flippers/claws and complete tail where present; no head-only proxy.

Re-inspected the runtime WebP at original resolution. Earlier source inspection and generation prompts remain in the regeneration record; no historical PNG was recreated. Quokka whisker and California sea-lion flipper boundaries were expanded during this pass. The source center is 67.6% of the source width. Source composition passes visual inspection: the full subject is prominent on the right with background around its visible extremities and a quiet left copy area.

The carousel loads the same canonical WebP as the species profile. For reviewed covers it fits the complete measured silhouette to a dedicated region, using CSS container units and 24px inner clearance. It centers the reviewed silhouette; the committed focalPoint remains for ordinary cover/profile presentation but does not override full-subject fitting. The frame masks only background at its edges. No extra image variants or duplicate background animal are loaded. The framed layout remains active while either the entering or leaving slide needs it, including transitions to legacy covers.

Static geometry overlays for all six required viewports were visually checked against the current runtime images. These are mathematical image composites with copy/panel rectangles, not browser screenshots or font rasterization. Desktop copy stays within the left half, compact controls occupy y=100..196; mobile controls occupy y=92..188 and copy starts at y=452. The footer is below the frame. The tests bind CSS frame dimensions and opacity-only keyframes, runtime boundaries and image hashes. Settled, initial, forward-enter, forward-leave, backward-enter and backward-leave share the geometry below because animation changes only opacity. Every listed value passes the 24 CSS pixel gate.

| Viewport | Old source subject → current source subject | Old hero subject size → current hero subject size (CSS px) | Viewport minimum | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- | --- |
| 320×760 | 88×72 → 947×775 | 65.3×53.4 → 215.1×176.0 | 52.47 | 48.00 | 40.00 | Pass |
| 390×760 | 88×72 → 947×775 | 65.3×53.4 → 215.1×176.0 | 87.47 | 48.00 | 40.00 | Pass |
| 1366×768 | 88×72 → 947×775 | 78.3×64.0 → 523.0×428.0 | 90.35 | 69.67 | 48.00 | Pass |
| 1920×900 | 88×72 → 947×775 | 110.0×90.0 → 684.3×560.0 | 96.00 | 133.06 | 48.00 | Pass |
| 2560×900 | 88×72 → 947×775 | 146.7×120.0 → 684.3×560.0 | 96.00 | 299.46 | 48.00 | Pass |
| 3840×900 | 88×72 → 947×775 | 220.0×180.0 → 684.3×560.0 | 96.00 | 632.26 | 48.00 | Pass |

Old sizes use historical reviewed bounds and the superseded full-viewport cover fit. New sizes use the current full-subject region. Historical source pixels are evidence, not regenerated input files. `npm run test:carousel` passes all 18 checks; production build/type checking passes. Each species still retains exactly six WebPs.
