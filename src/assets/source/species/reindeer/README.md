# Reindeer image set

2026-09-12 使用内置 image_gen 生成一张封面和五张观察图，均为 1536 × 1024。运行资产保存在 `public/images/species/reindeer/`。完整提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不代表实拍地点或野外观察记录。

## 内容依据

- [San Diego Zoo — 驯鹿分类、鹿角与食性](https://animals.sandiegozoo.org/animals/reindeer-caribou)
- [San Diego Zoo — 驯鹿蹄部与季节性行为](https://animals.sandiegozoo.org/animals/reindeer-caribou)
- [ASM Mammal Diversity Database — 驯鹿分类口径与全球易危等级](https://www.mammaldiversity.org/taxon/1006306/)
- [Animal Diversity Web — 驯鹿刨雪取食与季节性移动](https://animaldiversity.org/accounts/Rangifer_tarandus/)

访问日期：2026-09-12。ASM MDD 目前将北美和欧亚种群保留在 Rangifer tarandus 下，列全球 VU；其分类说明暂未采用拆分六种的提案。San Diego Zoo 支持鹿角与蹄的特征，ADW 支持刨雪及季节食谱。保护状态采用 MDD 转引的 VU，不采用 San Diego 的 Stable 标记或 ADW 旧 LC。瑞典驯养群体不列入野生国家范围，地图点不表示迁移路线。未把角长当作体长。未核实独立评估日期和全球种群趋势，assessedYear 留空，trend 记为 unknown；不以网页更新日期代替评估年份。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：头上的分叉角。
- `03-observation.webp`：宽宽的蹄子。
- `04-observation.webp`：前蹄刨开雪。
- `05-observation.webp`：低头吃植物。
- `06-observation.webp`：一起走过苔原。

已逐张静态检查生成图中的物种外形、动作与图注。动作前后图为独立生成的姿势示意，不能视为连续实拍；不使用图片证明精确趾数、测量值或捕猎成功。蹄部图采用局部近景，群体图左侧个体靠近画面边缘；全身与鹿角观察使用 02 图，群体图只表示共同移动，不用于身体大小比较。

## 封面验收

按原始分辨率检查临时 PNG 和最终运行 WebP，均为 1536 × 1024。完整可见主体保守目测边界为 `{"left": 1175, "top": 377, "right": 1268, "bottom": 475}`，包括全部可见角尖、耳朵、鼻尖、躯干、四肢蹄部与短尾。边界中心位于源宽度的 79.5%，左 40% 保留环境背景，完整主体与源边缘之间有真实背景。focalPoint 为 `{"x": 0.83, "y": 0.34}`。

运行封面 SHA-256：`bf2188d790fe5a7033d75f294cae7c567f13adf640548ebb004c6317755e79ee`。

封面采用远景，身体细节由观察图展示。遮挡的附肢不补计为可见部分。以下按仓库 CSS 的 object-fit、object-position、动画缩放与平移计算完整主体到视口边缘、文字及控制面板的最小间距，单位为 CSS 像素，所有值至少 24。检查不启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 37.46 | Pass 38.56 | Pass 38.15 | Pass 37.87 | Pass 38.15 | Pass 37.87 |
| 390x760 | Pass 37.46 | Pass 38.56 | Pass 38.15 | Pass 37.87 | Pass 38.15 | Pass 37.87 |
| 1366x768 | Pass 56.08 | Pass 56.48 | Pass 56.33 | Pass 56.23 | Pass 56.33 | Pass 56.23 |
| 1920x900 | Pass 95.45 | Pass 94.87 | Pass 95.09 | Pass 95.23 | Pass 95.09 | Pass 95.23 |
| 2560x900 | Pass 42.60 | Pass 39.90 | Pass 157.29 | Pass 41.59 | Pass 40.92 | Pass 124.91 |
| 3840x900 | Pass 276.90 | Pass 269.98 | Pass 272.57 | Pass 213.16 | Pass 184.94 | Pass 274.30 |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本批源图>`，由 cwebp q82、m6 转换并验证解码与尺寸。未使用 TinyPNG，不重复压缩已接受的 WebP。运行图通过静态联系表核对画面与图注，封面另按原始分辨率检查。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `6df904b086be79a63580830ccd2b6cc18ee723e92595517a097203130b560e84` | `a36c99b08e83ca85092e42caef8a49814e2bba6c0c07991100e016b99232e77c` |
| 02 | `b742a6f32ef5574c31c740cfbcb32c88e492eb6f77ecaebed773205a31fa34ca` | `87dc2d8adb8b0c361c02a19e6e46cb31b5a3806f766bd80880c3acadf85d962e` |
| 03 | `8716d71e52b1ecb6263b7d064ab413d8f2369b5170e9265cd23aceb8f36c0645` | `d0c405170bc031b9e521e799f5f48efdad733e2c639f28201920c458607ee3db` |
| 04 | `975360a0a55bd5d32218f7a85cbf63fdcaf08d35da296f029b3df982ae4fe3ff` | `49bbff3b26f8a65a2bbc98b77642cd9a3de627b0a3305252401079f31860c2d3` |
| 05 | `644f0399a5c308c2488bca9e2230c479b0e35771716097af45c8c9c87b0694d7` | `650fadc1b94c259ce0a1c9efb35283eaaaa085c935aad8627fec3604cf5b8ace` |
| 06 | `1aaa920eed4fc1d209e2b3cb5cd3cccc74e5afe05e703ba7f237f72455fd8b8a` | `fde89c0cc2e1c23378f807330149b4dd5cb813ebb92ffa59df9ef7b4ba38c75f` |

## 仓库验证

2026-09-12 通过类型检查、生产构建及 222 项测试。`npm test` 中前 220 项通过，最后两项子路径测试因沙箱禁止监听 127.0.0.1 而中断；以 `node --test tests/dist-subpath.test.mjs` 在沙箱外重跑，两项通过。未启动 GUI 或无头浏览器。封面回归绑定运行哈希、完整主体边界及全部视口与动画端点。已将本批临时 PNG 移出仓库，只保留 WebP、提示词与验收记录。

## 2026-09-12 regenerated cover

Retained the regenerated `01-cover.webp` and the five existing gallery images. The image set contains six WebPs. Final prompt and source hash: [cover-regeneration.json](./cover-regeneration.json).

Runtime SHA-256: `a36c99b08e83ca85092e42caef8a49814e2bba6c0c07991100e016b99232e77c`. Source and runtime dimensions: 1536×1024. Reviewed full-subject bounds (left, top, right, bottom): `[805, 20, 1450, 905]`. Original-resolution source and runtime inspection completed before temporary PNG archival.

The user removed the separate responsive hero images. Their previous six-viewport acceptance is withdrawn. The carousel now uses this same main cover; full-body crop acceptance in the existing carousel remains pending.

## 2026-09-12 single-cover framing verification

This section supersedes earlier carousel failure tables after the subject-frame layout change. Runtime hash: `a36c99b08e83ca85092e42caef8a49814e2bba6c0c07991100e016b99232e77c`. Source/runtime dimensions: 1536×1024. Current visually reviewed full boundary: `{"left": 805, "top": 20, "right": 1450, "bottom": 905}` (645×885 source pixels). Committed focalPoint: `{"x": 0.83, "y": 0.34}`. Includes the visible muzzle/bill, ears or antlers, feet/flippers/claws and complete tail where present; no head-only proxy.

Re-inspected the runtime WebP at original resolution. Earlier source inspection and generation prompts remain in the regeneration record; no historical PNG was recreated. Quokka whisker and California sea-lion flipper boundaries were expanded during this pass. The source center is 73.4% of the source width. Source composition passes visual inspection: the full subject is prominent on the right with background around its visible extremities and a quiet left copy area.

The carousel loads the same canonical WebP as the species profile. For reviewed covers it fits the complete measured silhouette to a dedicated region, using CSS container units and 24px inner clearance. It centers the reviewed silhouette; the committed focalPoint remains for ordinary cover/profile presentation but does not override full-subject fitting. The frame masks only background at its edges. No extra image variants or duplicate background animal are loaded. The framed layout remains active while either the entering or leaving slide needs it, including transitions to legacy covers.

Static geometry overlays for all six required viewports were visually checked against the current runtime images. These are mathematical image composites with copy/panel rectangles, not browser screenshots or font rasterization. Desktop copy stays within the left half, compact controls occupy y=100..196; mobile controls occupy y=92..188 and copy starts at y=452. The footer is below the frame. The tests bind CSS frame dimensions and opacity-only keyframes, runtime boundaries and image hashes. Settled, initial, forward-enter, forward-leave, backward-enter and backward-leave share the geometry below because animation changes only opacity. Every listed value passes the 24 CSS pixel gate.

| Viewport | Old source subject → current source subject | Old hero subject size → current hero subject size (CSS px) | Viewport minimum | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- | --- |
| 320×760 | 93×98 → 645×885 | 69.0×72.7 → 128.3×176.0 | 95.86 | 48.00 | 40.00 | Pass |
| 390×760 | 93×98 → 645×885 | 69.0×72.7 → 128.3×176.0 | 130.86 | 48.00 | 40.00 | Pass |
| 1366×768 | 93×98 → 645×885 | 82.7×87.2 → 311.9×428.0 | 96.00 | 175.19 | 48.00 | Pass |
| 1920×900 | 93×98 → 645×885 | 116.2×122.5 → 408.1×560.0 | 96.00 | 271.13 | 48.00 | Pass |
| 2560×900 | 93×98 → 645×885 | 155.0×163.3 → 408.1×560.0 | 96.00 | 437.53 | 48.00 | Pass |
| 3840×900 | 93×98 → 645×885 | 232.5×245.0 → 408.1×560.0 | 96.00 | 770.33 | 48.00 | Pass |

Old sizes use historical reviewed bounds and the superseded full-viewport cover fit. New sizes use the current full-subject region. Historical source pixels are evidence, not regenerated input files. `npm run test:carousel` passes all 18 checks; production build/type checking passes. Each species still retains exactly six WebPs.
