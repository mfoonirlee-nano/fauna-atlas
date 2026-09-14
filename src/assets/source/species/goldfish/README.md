# Goldfish image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/goldfish/`。最终提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [ADW — 金鱼生态与生活史](https://animaldiversity.org/accounts/Carassius_auratus/)
- [FishBase — 金鱼及 IUCN 记录](https://www.fishbase.org/summary/Carassius_auratus.html)
- [Eschmeyer’s Catalog of Fishes — 金鱼](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?genus=Carassius&species=auratus&tbl=species)
- [PLOS ONE — 鲤形目咽齿的演化](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0011293)
- [金鱼消化道 ghrelin 定位研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC4624692/)
- [金鱼无胃消化道的生理研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC6661352/)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。所有橙色个体均表示家养单尾品种。05 最终图为已显橙色的幼鱼，未采用提示词要求的青铜色；图注按成图修订。03 只展示口部外观，不显示内部咽齿或消化道。06 为庭院鱼池情景，不对应特定中国地点。IUCN 状态属于物种，不能作为家养品系的独立评估。

## 压缩与静态检查

六张最终源 PNG 均已通过 TinyPNG 压缩，再用仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查压缩后的封面源 PNG 和全部最终运行 WebP。未使用浏览器。

## 封面验收

源图与运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.95, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1126, "top": 362, "right": 1254, "bottom": 421}`，包括姿态下可见的吻端、冠突、足部、鱼鳍及完整尾尖。主体中心在源宽度的 77.5%，左侧 40% 留作背景，主体四周留有环境。

运行封面 SHA-256：`a5fb00bfdd14c44a00e9f74e5c59e94c158486209eccdf7158d5eba5cb910c64`。

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
| 01 | `989864de7f089594de95de6e7e2962698e1eef3df3c22b6bc7406a3d12bdf986` | `8ee668c9204f29843257b00990e4a92e421e352dc33e14104d7cc1b0aa368bc5` |
| 02 | `4bed132dcbfd657c348c8e1e2edf9c66a204945bb7902d0211e9f25fa341898e` | `fbac2c562f337d1995f1262de1067e549f9883a554a07b1d33f7b88dc813059c` |
| 03 | `9570f2dec7765fe83aa6cd913f57d819e4dd481668abda09b3e832aaff07e179` | `fabb7750ea51f8433849c5a770e363ddd3c6373f11f2bcdc4d715fa36ea75d8a` |
| 04 | `2ca6c8865401b0ce0a29b4b53722a314fc40ad395d8b2bea9d2635e4d35a79bb` | `fcaa4b205337d1e9940ce095b792c4f088eb47f1fa33100e7b25036f84d34d3b` |
| 05 | `349d71675afbe1f55e617e6b6c10a02ffbdc75dc62bcb3444c7bc0489443b0e4` | `77c8d86bac8447b5af01261ba97aef4333d3e71448c4a184ecd066a2b422d00e` |
| 06 | `fa4f9efcdaf87bad38c70f290d3e8d156555799115faef3849c3bc6786a8f0b3` | `3dfb93feb4a3e3e6915f83e3c6907aeba6ecafcf9fe5596206d600bfdfc5bcc8` |

FishBase 明确列出评估日期为 2010-08-04，因此档案填写 `assessedYear: 2010`，不以出版或访问年份代替。

## 验证结果

`npm test` 的 199 项测试全部通过，包含新增物种分类归属、PNG/WebP 尺寸与哈希、封面裁切、交互逻辑及构建后子路径资源检查。TypeScript 检查与生产构建通过。Vite 仍提示主代码块超过 500 kB；本次未调整打包结构，未启动浏览器。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `8ee668c9204f29843257b00990e4a92e421e352dc33e14104d7cc1b0aa368bc5`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.95, "y": 0.4}`. Conservative full-subject boundary: `{"left": 595, "top": 230, "right": 1500, "bottom": 725}`, 905×495 source pixels (previously 128×59). Boundary center is 68.2% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the snout, dorsal fin, paired visible fins, anal fin and both single-tail lobes including translucent edges. Real water remains between these features and source edges. The animal is prominent on the right; the left 40% remains quiet pond habitat. Only the snout tip reaches about 39% source width, leaving the broad left copy field clear. Far-side fins overlap naturally. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 95.0×43.8 → 272.0×148.8 | 24.00 | 61.61 | 53.61 | Pass |
| 390×760 | 95.0×43.8 → 321.8×176.0 | 34.11 | 48.00 | 40.00 | Pass |
| 1366×768 | 113.8×52.5 → 559.7×306.1 | 72.00 | 51.32 | 108.94 | Pass |
| 1920×900 | 160.0×73.8 → 825.6×451.6 | 72.00 | 62.40 | 102.21 | Pass |
| 2560×900 | 213.3×98.3 → 1023.8×560.0 | 96.00 | 129.68 | 48.00 | Pass |
| 3840×900 | 320.0×147.5 → 1023.8×560.0 | 96.00 | 462.48 | 48.00 | Pass |

`npm run test:carousel`: all 52 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
