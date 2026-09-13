# Long-tailed Chinchilla image set

2026-09-10 使用内置 image_gen 生成六张 1536 × 1024 图片。最终运行资产保存在 `public/images/species/long-tailed-chinchilla/`，完整提示见 [prompts.json](./prompts.json)。这些图片是 AI 生成科学情景重建，不代表实拍地点或野外观察记录。

## 内容依据

- [Smithsonian National Zoo — 长尾毛丝鼠分类、体型与野生生活](https://www.nationalzoo.si.edu/animals/long-tailed-chinchilla)
- [San Diego Zoo — 毛丝鼠尘浴与两种毛丝鼠的区别](https://animals.sandiegozoo.org/animals/chinchilla)
- [Smithsonian National Zoo — 长尾毛丝鼠保护](https://www.nationalzoo.si.edu/animals/long-tailed-chinchilla#conservation)
- [San Diego Zoo — 长尾与短尾毛丝鼠全球等级](https://animals.sandiegozoo.org/animals/chinchilla)

访问日期：2026-09-10。Smithsonian 支持 Chinchilla lanigera 的分类、智利原生范围、身体与尾长分列、夜行及植物食性；San Diego Zoo 支持尘浴行为和全球 EN。身体长度 23–36 厘米明确不含尾，不放入 adultLengthCm 全长比较；不采用两种毛丝鼠混合的海拔范围。尘浴两图是独立姿势重建，并非同一个体的连续实拍。饲养数量不用于推断野生保护状态；未核实评估日期和全球趋势。

## 图集

- `01-cover.webp`：环境封面。
- `02-observation.webp`：大耳朵和毛尾巴。
- `03-observation.webp`：先把身体侧过来。
- `04-observation.webp`：在细尘里滚一滚。
- `05-observation.webp`：前脚抱着草茎。
- `06-observation.webp`：岩缝旁的住处。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1110, "top": 307, "right": 1290, "bottom": 420}`，包括长胡须、双耳、躯干、可见足趾和蓬松尾毛外缘。边界中心位于源宽度的 78.1%，左 40% 为环境背景，动物与源图边缘之间保留背景。focalPoint 为 `{"x": 0.84, "y": 0.34}`。

运行封面 SHA-256：`8fb409e2c7314ba1cfdc084a5a62e496b9b24db0b51158dae53a71c66c0db36a`。

初版胡须边界未通过桌面文字间距检查；使用内置工具把完整动物右移，再重新量取含胡须的边界。编辑提示保存在 prompts.json 的 coverEdits。

已按原始分辨率静态检查源封面与最终 WebP。封面采用环境远景，外形细节由详情图集呈现。图中遮挡的附肢不补计为可见部分，也不把生成图用于计量、精确趾数或精细解剖证明。

下表按当前 CSS 的 object-fit、object-position 和动画变换计算完整主体到视口边缘、文字及控制面板占位的最小间距，单位为 CSS 像素。每项至少 24 像素。`tests/hero-carousel.test.mjs` 绑定运行哈希、完整主体边界及全部尺寸和动画端点；检查过程不使用浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 39.85 | Pass 33.77 | Pass 32.66 | Pass 37.57 | Pass 36.05 | Pass 36.95 |
| 390x760 | Pass 39.85 | Pass 33.77 | Pass 36.05 | Pass 37.57 | Pass 36.05 | Pass 37.57 |
| 1366x768 | Pass 104.99 | Pass 107.35 | Pass 106.47 | Pass 105.07 | Pass 94.45 | Pass 105.88 |
| 1920x900 | Pass 164.20 | Pass 166.37 | Pass 165.56 | Pass 165.01 | Pass 165.56 | Pass 165.01 |
| 2560x900 | Pass 134.27 | Pass 135.24 | Pass 134.87 | Pass 134.63 | Pass 134.87 | Pass 134.63 |
| 3840x900 | Pass 189.00 | Pass 193.22 | Pass 196.93 | Pass 73.87 | Pass 73.51 | Pass 199.40 |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本批源图>`，由 cwebp q82、m6 输出 WebP，转换脚本验证解码和尺寸。未使用 TinyPNG，不重复压缩已接受的 WebP。生成源图逐张静态检查；运行图通过静态联系表核对画面、颜色与图注，封面另按原始分辨率检查。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `038696b940a5b19d8153e7835b80b4ab259b11971c43423e8a48af7651708747` | `8fb409e2c7314ba1cfdc084a5a62e496b9b24db0b51158dae53a71c66c0db36a` |
| 02 | `fb84737cc372b3147c7022875d218cbb68845d4a53a65081bf9ccb1a3bda7aed` | `5b3905285d777fd5c43fbcf25362f109f6d28c913b21db7a08de5b41165d224f` |
| 03 | `b73ea9c1df7a741a2b9bf2af26cbe8ab126b1e34f02164a7b987db89466c06c1` | `5b3d5bebc14ecf0e3b579fdc061ae28f3cef03f8095923a459020c2662df21d4` |
| 04 | `5f2a3f7cbf9762e2a088389a3f0a40e2919cfa7023cb1b57c0eac156580a0694` | `ecdc341bc25407a161f8b99d72f8e7ab59c5d66d38a3407f8a8d0196f72b584a` |
| 05 | `fd531712041abb67a35b3b5c7e52d8c89e9a0829e399e8df3103a9b6f05e6cbf` | `b1c5acc428970e8c82d460380846b6caddb65297b6c36cce8b76ae4bb93bcb4e` |
| 06 | `8421a10d7fc22c185eb7d3ae79cf81cf9834dc067b86a124dc41edffdd7cb60f` | `595a66dc3e199cd9536cff5e63cd4e723aa9dc418d47b93c1923a71275c9eff4` |

## 仓库验证

已通过类型检查、`npm test` 全部 221 项测试及其包含的生产构建与子路径资源验证。封面回归覆盖上述全部视口与动画端点，运行图均已静态检查。已移除本批临时 PNG，只保留运行 WebP、提示词和哈希记录。

## 2026-09-12 regenerated cover

Replaced `01-cover.webp` using built-in image_gen, then converted with `npm run convert:webp -- src/assets/source/species/long-tailed-chinchilla/01-cover-source.png` (cwebp q82/m6). The five gallery images remain unchanged. The first generated candidate had insufficient tail clearance and was rejected; the second includes the entire tail with background to its right. Final generation and edit prompts, source hash and limitations are in [cover-regeneration.json](./cover-regeneration.json).

Inspected the generated PNG and decoded runtime WebP at original resolution, 1536×1024. Conservative full-subject boundary: `[625, 275, 1455, 770]`, including whiskers, ear tips, forepaws, hindfeet and outer tail hairs. Center: 67.7% of source width. Left 40% contains habitat, with the whiskers beginning to its right. Source full-subject size increased from the previously reviewed 180×113px to 830×495px. The old bounds are historical evidence from the superseded test case, not a new original-resolution measurement.

Runtime SHA-256: `84f3010fdd40d6e23038546238670fc1ab73871ac5275b7774b12a982555b4d8`. Committed focalPoint: `{"x": 0.84, "y": 0.34}`. Full-body source composition passes this inspection; hero acceptance **fails**. Existing source-image acceptance above is superseded by this section. Keep the temporary source PNG until hero acceptance finishes.

The following calculations use current object-fit cover, committed focalPoint and CSS animation endpoints. Sizes are projected full-subject sizes before viewport clipping; they are not claims that the whole animal is visible. Clearance is the minimum signed distance to the four viewport edges in CSS pixels. A negative value means clipping. Every endpoint requires at least 24px. Copy and carousel-panel clearance still requires review after fixing the viewport failures. No browser was launched.

| Viewport | Old → new subject size (CSS px, settled) | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 320×760 | 133.6×83.9 → 616.0×367.4 | Fail -224.93 | Fail -240.33 | Fail -218.56 | Fail -243.51 | Fail -250.56 | Fail -217.91 |
| 390×760 | 133.6×83.9 → 616.0×367.4 | Fail -166.13 | Fail -180.58 | Fail -155.66 | Fail -187.15 | Fail -194.66 | Fail -155.95 |
| 1366×768 | 160.1×100.5 → 738.1×440.2 | Pass 72.04 | Pass 47.60 | Fail -11.54 | Pass 117.51 | Pass 125.06 | Fail 8.23 |
| 1920×900 | 225.0×141.2 → 1037.5×618.8 | Pass 66.70 | Pass 51.37 | Fail -16.22 | Pass 60.95 | Pass 57.12 | Fail 11.57 |
| 2560×900 | 300.0×188.3 → 1383.3×825.0 | Fail -109.07 | Fail -131.43 | Fail -123.04 | Fail -117.45 | Fail -123.04 | Fail -117.45 |
| 3840×900 | 450.0×282.5 → 2075.0×1237.5 | Fail -460.60 | Fail -497.02 | Fail -483.36 | Fail -474.26 | Fail -483.36 | Fail -474.26 |

Validation: `npm run typecheck` passed. `npm run test:carousel` reported 7 passing checks and 10 failing full-subject cases (the ten regenerated covers). The canonical-cover/hash/six-image check passed. These failures are outstanding task work, not accepted exceptions.

## 2026-09-12 single-cover framing verification

This section supersedes earlier carousel failure tables after the subject-frame layout change. Runtime hash: `84f3010fdd40d6e23038546238670fc1ab73871ac5275b7774b12a982555b4d8`. Source/runtime dimensions: 1536×1024. Current visually reviewed full boundary: `{"left": 625, "top": 275, "right": 1455, "bottom": 770}` (830×495 source pixels). Committed focalPoint: `{"x": 0.84, "y": 0.34}`. Includes the visible muzzle/bill, ears or antlers, feet/flippers/claws and complete tail where present; no head-only proxy.

Re-inspected the runtime WebP at original resolution. Earlier source inspection and generation prompts remain in the regeneration record; no historical PNG was recreated. Quokka whisker and California sea-lion flipper boundaries were expanded during this pass. The source center is 67.7% of the source width. Source composition passes visual inspection: the full subject is prominent on the right with background around its visible extremities and a quiet left copy area.

The carousel loads the same canonical WebP as the species profile. For reviewed covers it fits the complete measured silhouette to a dedicated region, using CSS container units and 24px inner clearance. It centers the reviewed silhouette; the committed focalPoint remains for ordinary cover/profile presentation but does not override full-subject fitting. The frame masks only background at its edges. No extra image variants or duplicate background animal are loaded. The framed layout remains active while either the entering or leaving slide needs it, including transitions to legacy covers.

Static geometry overlays for all six required viewports were visually checked against the current runtime images. These are mathematical image composites with copy/panel rectangles, not browser screenshots or font rasterization. Desktop copy stays within the left half, compact controls occupy y=100..196; mobile controls occupy y=92..188 and copy starts at y=452. The footer is below the frame. The tests bind CSS frame dimensions and opacity-only keyframes, runtime boundaries and image hashes. Settled, initial, forward-enter, forward-leave, backward-enter and backward-leave share the geometry below because animation changes only opacity. Every listed value passes the 24 CSS pixel gate.

| Viewport | Old source subject → current source subject | Old hero subject size → current hero subject size (CSS px) | Viewport minimum | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- | --- |
| 320×760 | 180×113 → 830×495 | 133.6×83.9 → 272.0×162.2 | 24.00 | 54.89 | 46.89 | Pass |
| 390×760 | 180×113 → 830×495 | 133.6×83.9 → 295.1×176.0 | 47.44 | 48.00 | 40.00 | Pass |
| 1366×768 | 180×113 → 830×495 | 160.1×100.5 → 559.7×333.8 | 72.00 | 51.32 | 95.11 | Pass |
| 1920×900 | 180×113 → 830×495 | 225.0×141.2 → 825.6×492.4 | 72.00 | 62.40 | 81.81 | Pass |
| 2560×900 | 180×113 → 830×495 | 300.0×188.3 → 939.0×560.0 | 96.00 | 172.11 | 48.00 | Pass |
| 3840×900 | 180×113 → 830×495 | 450.0×282.5 → 939.0×560.0 | 96.00 | 504.91 | 48.00 | Pass |

Old sizes use historical reviewed bounds and the superseded full-viewport cover fit. New sizes use the current full-subject region. Historical source pixels are evidence, not regenerated input files. `npm run test:carousel` passes all 18 checks; production build/type checking passes. Each species still retains exactly six WebPs.

After this acceptance, moved the temporary PNG out of the repository to `/private/tmp/long-tailed-chinchilla-accepted-source.png`. Only the canonical WebP and five gallery WebPs remain as retained images.
