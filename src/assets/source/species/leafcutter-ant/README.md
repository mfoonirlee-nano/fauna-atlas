# Leafcutter Ant image set

2026-09-09 使用内置 imagegen 生成并调整六张 1536 × 1024 图片。保留运行图 `public/images/species/leafcutter-ant/`，生成及编辑提示词见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应实拍地点或野外记录。

## 内容依据

- [ADW — Atta cephalotes 分类](https://animaldiversity.org/accounts/Atta_cephalotes/classification/)
- [Cincinnati Zoo — 切叶蚁菌圃与分布](https://cincinnatizoo.org/animals-archive/leaf-cutting-ant/)
- [PLOS Genetics — Atta cephalotes 共生生活研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC3037820/)
- [Marwell Zoo — 切叶蚁工蚁分工、路线与未评估状态](https://www.marwell.org.uk/animals/leaf-cutter-ants/)

访问日期：2026-09-09。ADW 支持 Atta cephalotes 分类；Cincinnati Zoo 与 Marwell Zoo 支持搬叶、菌圃、工蚁和路线行为；Marwell 明确列 NE。PLOS Genetics 研究支持共生关系。饮食筛选沿用 herbivore 表示植物资源利用，正文与 foods 明确真菌食物，未将其写成只吃叶片。

本次未核实独立全球趋势字段，trend=unknown；不从单个地区或饲养资料推算全球数量。

## 图片范围与限制

图片用于看搬叶动作、工蚁体型与菌圃，细小棘刺、足部遮挡和触角细节不用于显微鉴种或精确计数。菌圃为 AI 情景重建，不代表完整地下巢穴结构；不同场景不能视为同一群体的连续记录。

## 封面验收

源图和运行 WebP 均为 1536 × 1024。已按原始分辨率查看最终临时输入与运行封面；主体完整，左 40% 以环境背景为主。目测保守完整可见主体边界：`{"left": 1112, "top": 350, "right": 1247, "bottom": 459}`，包括头、触角、可见足、腹部及携带叶片。主体中心位于宽度的 76.8%，不是由 focalPoint 推定。

提交的 focalPoint：`{"x": 0.83, "y": 0.39}`。运行封面 SHA-256：`221091bed60101441ae2835025e9c0e13502f0ae99e97f368811d58d41313357`。

以下按现有 CSS 的 object-fit、object-position、动画变换和正文／轮播面板占位矩形计算完整主体的最小间距（CSS 像素），每项至少 24。覆盖视口边缘与组件安全区域，未使用浏览器。测试把运行封面哈希与完整主体边界绑定。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 49.34 | Pass 50.91 | Pass 50.32 | Pass 49.93 | Pass 50.32 | Pass 49.93 |
| 390x760 | Pass 49.34 | Pass 50.91 | Pass 50.32 | Pass 49.93 | Pass 50.32 | Pass 49.93 |
| 1366x768 | Pass 77.44 | Pass 78.70 | Pass 78.23 | Pass 77.91 | Pass 78.23 | Pass 77.91 |
| 1920x900 | Pass 134.45 | Pass 135.43 | Pass 135.06 | Pass 134.82 | Pass 135.06 | Pass 134.82 |
| 2560x900 | Pass 109.60 | Pass 109.58 | Pass 109.59 | Pass 109.59 | Pass 109.59 | Pass 109.59 |
| 3840x900 | Pass 194.00 | Pass 218.70 | Pass 222.04 | Pass 59.15 | Pass 58.65 | Pass 224.26 |

## 压缩与验收哈希

静态检查五张源观察图与五张运行观察图；封面另以原始分辨率复核。使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，验证解码及尺寸。未使用 TinyPNG，未重复压缩已接受 WebP。验收后删除临时 PNG，仅保留 WebP、提示词和哈希证据。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `7a1909cd35b5b27d38b96db82150e453b85164c2678e3647a8930d4fd3ac76e9` | `679ef5016380f6103bcf7c1ddd2be2d818fd30a7d75eb75ffdb86f208f7ce2a5` |
| 02 | `7b35485176ef6cac9d9fb0058c73054a35711a9f4b7e0a5ccafb1f76859c6fc4` | `5aee5f0f67b954aab1d7c6aa0d363b70f33e7b8a3ba44acc34de98b9eec1c452` |
| 03 | `519258007e776f49ac04975f906daa9aa890920c6fc2e4d1786c55c75cc08b57` | `5525f730da844bbd072cecd0973e68685eaee2160b8810f270a28267cae67605` |
| 04 | `7380018cf5c87740c6ea32eec8bb6418c54d12f834ed00454d46e5872a283c0b` | `7fbf21b7f8d5840b5953194532734eb6fbb4de85cc4e332876fae7300246b602` |
| 05 | `c63ca46182218e911c1b0e17c74d673634022c516ca97fcecb5943b3488fa12d` | `be3b1dc83cbcd65b1384bd826a6249cfd5d51b41c3f96a57cf6eecc6da9ff49a` |
| 06 | `450f07ba37b4bf883d55486f689d76dcc38782feffb864db8bab00194a18cc98` | `5ec4d55fd3e64d7a062534f618a8c0ca31641d01eda237cb6da0c9a7349fb748` |

## 项目验证

`npm run typecheck`、`npm run test:carousel` 与 `npm test` 通过。完整测试含 172 项分类测试及本批六图哈希、尺寸和解码验证，并覆盖首页轮播、目录、图片查看器及构建后的子路径资产访问。生产构建通过，仍提示主 JavaScript chunk 大于 500 kB。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `679ef5016380f6103bcf7c1ddd2be2d818fd30a7d75eb75ffdb86f208f7ce2a5`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.83, "y": 0.39}`. Conservative full-subject boundary: `{"left": 605, "top": 95, "right": 1450, "bottom": 795}`, 845×700 source pixels (previously 135×109). Boundary center is 66.9% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the woodpecker bill, visible claws and tail, ant antennae, leg tips and carried leaf, and guinea pig whiskers, ears, fur and visible toes. Background remains between these features and the source edges. The animal is prominent on the right; the left 40% remains quiet habitat. The conservative measurement may include a few background pixels. Far-side feet overlap naturally in these poses. The ant antenna tip reaches about 40% of source width; the leaf remains fully on the right. The guinea pig first candidate was rejected for leftward whisker intrusion; the accepted edit moves the whole silhouette right. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 100.2×80.9 → 212.5×176.0 | 53.77 | 48.00 | 40.00 | Pass |
| 390×760 | 100.2×80.9 → 212.5×176.0 | 88.77 | 48.00 | 40.00 | Pass |
| 1366×768 | 120.1×96.9 → 516.7×428.0 | 93.51 | 72.83 | 48.00 | Pass |
| 1920×900 | 168.8×136.2 → 676.0×560.0 | 96.00 | 137.20 | 48.00 | Pass |
| 2560×900 | 225.0×181.7 → 676.0×560.0 | 96.00 | 303.60 | 48.00 | Pass |
| 3840×900 | 337.5×272.5 → 676.0×560.0 | 96.00 | 636.40 | 48.00 | Pass |

`npm run test:carousel`: all 33 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
