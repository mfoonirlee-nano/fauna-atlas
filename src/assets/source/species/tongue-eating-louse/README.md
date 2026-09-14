# Tongue-eating Louse image set

2026-09-08 使用内置 imagegen 生成并编辑六张 1536 × 1024 图片，无 CLI 回退。源 PNG 保存在本目录，运行资源位于 `public/images/species/tongue-eating-louse/`。

## 最终提示词

见 [prompts.json](./prompts.json)和[剖面编辑](./edits.json)。所有图片标注为 AI 生成科学情景重建。

## 内容依据

1981年Brusca专著支持东太平洋范围及雌雄样本长度，8—29毫米仅指该专著雌体样本，不设绝对上限。1983年论文记录两条笛鲷的舌大部缺失与持续进食，并提出机械替代假说，没有通过对照实验验证效率。吸血导致舌部退化的组织学解释涉及其他鱼虱宿主组合，不写成本种已完成的实验结论。

- [Brusca 1981 — 东太平洋鱼虱科专著，样本尺寸与分布](https://research.nhm.org/pdfs/2794/2794.pdf)
- [Brusca与Gilligan 1983 — 鱼舌替代观察及假说](https://www.rickbrusca.com/http___www.rickbrusca.com_index.html/Papers_files/Brusca%20%26%20Gilligan%201983%20Tongue%20Replacement.pdf)
- [WoRMS — 缩头水虱属接受名](https://www.marinespecies.org/aphia.php?p=taxlist&tName=Cymothoa)
- [得克萨斯大学生物多样性中心 — 鱼虱寄生生活](https://biodiversity.utexas.edu/news/features/all-things-creepy-parasitism-pt-3-tongue-biters)

资料访问日期：2026-09-08。未核实到本种全球 IUCN 评估，暂记 NE，无评估年份，种群趋势未知。保护行动属于栖息地建议，未量化本种威胁。

## 视觉限制

封面与外形图采用离体展示，灰色底面不表示成年雌体在自然环境中自由生活。图中体节、步足数及钩的排列经过简化，不能作为计数或物种鉴定图。剖面图只表达口底、舌部残基与寄生虫的位置，不能反映真实组织比例；图中可见附肢数量不作为七对步足的证据。鱼嘴图和雌雄对比图不表示论文标本或实测比例。 封面主体较小，以适应首页标题和轮播控件；图集提供近景。

## 压缩

TinyPNG 已压缩全部六张源 PNG，随后使用仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP。图集压缩首次遇到沙箱 DNS 错误，获准联网后完成，无本地调色板回退。

## 封面检查

源 PNG 与运行 WebP 均按原始分辨率查看。源图尺寸 1536 × 1024；focalPoint 为 `{ x: 0.92, y: 0.35 }`。全身可见边界（源图像素）：`{ left: 1108, top: 325, right: 1295, bottom: 410 }`，包含可见末端与附肢。主体中心位于源图宽度 78.2%，左侧40%留有安静背景，边界四周均有真实背景。

运行封面 SHA-256：`a0b4ecb0e3cf356dfa0d8fb2d9ae25617a1f828c3458108346321e0c0253fb83`。

封面回归检查通过，完整主体在下列视口和动画端点与视口边缘、标题及轮播控件保持至少24 CSS像素间距。没有启动浏览器。

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
| 01 | `02da18bef9552215644fe430d968619f3271cbe5b95cbab14f161f92bdc505fe` | `25225ef6c6a12f87a83a41024a93f69978fbb90f3c5582eb14da15ed2838c568` |
| 02 | `929c8e1087b93df2ab690c4f3bf62f4ecd18496658ad2dabd38af2048e3ba167` | `536960ac7aea52deb7fbe54cd9d5a24a301b3ab2cab2ae2b2c6b5d9c4b93e4bd` |
| 03 | `1855348415e9348a2a2cbd4b0f79313e2046923e7680714329be5ea17c6590a0` | `6abbf4b24e2db915d422bb36516c78eef0771c990364f559f424e48b26bfef35` |
| 04 | `e94ffebe5a353bde598e9abb92b5176b26a61200fd510f20c45c0a66081f1566` | `dc8c8c1b2498dd2c30cc41f3948eeb33587ab8f317658a2432ea684816818c84` |
| 05 | `e7324be6987c37ad330554a19b125d3249d0d0a92e689175906bf39b53b12d3c` | `55cb55ff235aca9ccfe8e3bbb5dc0cc1bcf86f7a29a0701963ff9048f2916023` |
| 06 | `a75bbcaedf0bfab71230a29e99807cd580242c00a5e12c919f8bf24c0fb20071` | `8a6a6fa683e6191c2ecdffc45be1087e5348ac643a1793e71468dc1bab3ae29a` |

## 验证

已按原始分辨率检查全部六张运行WebP。174项测试全部通过：完整测试中的173项先通过，静态资源子路径测试因沙箱禁止监听端口失败，获准后单独重跑通过。测试覆盖分类归属、六图尺寸及哈希、封面完整主体与控件间距。TypeScript检查与生产构建通过，构建更新了仓库跟踪的dist资源；Vite仍提示已有的大体积代码块。未启动GUI或无头浏览器。`git diff --check`通过。

## 2026-09-13 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `25225ef6c6a12f87a83a41024a93f69978fbb90f3c5582eb14da15ed2838c568`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.92, "y": 0.35}`. Conservative full-subject boundary: `{"left": 644, "top": 256, "right": 1500, "bottom": 684}`, 856×428 source pixels (previously 187×85). Boundary center is 69.8% of source width.

Inspected the PNG and runtime WebP at original resolution. Full antennae, visible foot hooks, body edge and posterior uropods remain within real background margins. Far-side limbs overlap naturally. This isolated specimen display does not depict a free-living adult. Fine segment proportions and hook geometry remain illustrative, not diagnostic measurements. The accepted edit corrects antenna intrusion into the left field. Left 40% contains defocused neutral gray surface. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 138.8×63.1 → 272.0×136.0 | 24.00 | 68.00 | 60.00 | Pass |
| 390×760 | 138.8×63.1 → 342.0×171.0 | 24.00 | 50.50 | 42.50 | Pass |
| 1366×768 | 166.3×75.6 → 559.7×279.8 | 72.00 | 51.32 | 122.08 | Pass |
| 1920×900 | 233.8×106.2 → 825.6×412.8 | 72.00 | 62.40 | 121.60 | Pass |
| 2560×900 | 311.7×141.7 → 1120.0×560.0 | 78.40 | 81.60 | 48.00 | Pass |
| 3840×900 | 467.5×212.5 → 1120.0×560.0 | 96.00 | 414.40 | 48.00 | Pass |

`npm run test:carousel`: all 91 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
