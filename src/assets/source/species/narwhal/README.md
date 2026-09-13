# Narwhal image set

2026-09-13 使用内置 image_gen 制作封面与五张观察图。提示词见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/narwhal/`。图片为 AI 生成科学情景重建，不代表实拍地点或连续观察记录。

## 内容依据

- [ASM Mammal Diversity Database — 分类与名称](https://www.mammaldiversity.org/taxon/1006445/)
- [NOAA Fisheries — 独角鲸](https://www.fisheries.noaa.gov/species/narwhal)
- [IUCN — 全球保护等级（ASM MDD 转引）](https://www.mammaldiversity.org/taxon/1006445/)

访问日期：2026-09-13。未核实独立评估日期与全球种群趋势；assessedYear 留空，trend 为 unknown，不以网页更新时间代替评估日期。 分类图谱沿用既有鲸目 Cetacea 展示口径，MDD 完整分类中的目为 Artiodactyla；科与属按 MDD。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：螺旋长牙。雄性独角鲸嘴前伸出螺旋长牙。
- `03-observation.webp`：没有外露长牙。左侧无外露长牙的独角鲸与右侧有长牙的个体一起游动。
- `04-observation.webp`：平缓的背部。独角鲸背上没有高大的背鳍。
- `05-observation.webp`：一起游动。两只独角鲸在海冰下游动。
- `06-observation.webp`：水面换气。独角鲸在海冰间的开阔水道露出头背。

## 封面与图集验收

源 PNG 与运行 WebP 为 1536×1024，逐张静态核对外形与图注。封面按原始分辨率检查。完整可见主体目测边界为 `{'left': 518, 'top': 296, 'right': 1506, 'bottom': 576}`，大小 988×280 源像素，包括可见吻端、角或长牙、鳍或蹄、耳与尾缘。主体边界中心位于源宽度的 65.9%。左侧保留环境背景，完整主体突出且与源边缘有背景间隔。focalPoint 为 `{"x": 0.7, "y": 0.5}`。

运行封面 SHA-256：`a0da0d281f41b5667e2bb9f5475150040bd86cde9ae6bfa95968d70aae0edfb9`。这是新物种封面，无旧运行资产可比较。

采用现有 hero-subject-frame 完整主体适配，手机与桌面加载同一封面。依据当前 CSS 计算 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六个端点；动画只改变透明度，六端点几何相同。静态几何合成图标出主体、文字与控制面板矩形；不启动浏览器。每项间距至少 24 CSS 像素。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 全部六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 272.00×77.09 | 24.00 | 97.46 | 89.46 | Pass |
| 390×760 | 342.00×96.92 | 24.00 | 87.54 | 79.54 | Pass |
| 1366×768 | 559.68×158.61 | 72.00 | 51.32 | 182.69 | Pass |
| 1920×900 | 825.60×233.98 | 72.00 | 62.40 | 211.01 | Pass |
| 2560×900 | 1132.80×321.04 | 72.00 | 75.20 | 167.48 | Pass |
| 3840×900 | 1747.20×495.16 | 72.00 | 100.80 | 80.42 | Pass |

## 压缩与哈希

使用 `npm run convert:webp -- <本批源图>`，cwebp q82/m6 转换并检查解码及尺寸。未使用 TinyPNG。只保留一张封面与五张观察图，不重复压缩已接受的 WebP。生成图用于外形和行为示意，不用于精确测量、性别鉴定或连续行为推断。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `fb3c72a7582c402f7a90ae52a3818c86424711cc8a88791abd32c4073b929569` | `a0da0d281f41b5667e2bb9f5475150040bd86cde9ae6bfa95968d70aae0edfb9` |
| 02 | `f0a7e2b307497c8a42ea4ae965c1d03803eec4dee41673c59aae7532f62f40e6` | `23625d76c19eddf737c0c945a018ed05305d8e1b6687687140cf2cc6a6b908e7` |
| 03 | `80faa9bf5ff0a057f12abc574cd259aaa1986927cac984124039cb0bdd523931` | `cf8a8f4efa2da7fa8510adc8c9fa6d7aad5eee1d02181d685ea47be9181cf493` |
| 04 | `8b6bd0e043d71e0b7bc2e7ea906123f22b11d515d6cce26178b1d19dd86fc89c` | `36c5af085190ac169f8007531cb346b80a28f96cf6e3683f69e9ce2309dc239b` |
| 05 | `b7f0458be4782e1c1e85de90fb9436eedb0df592076c164505335f57782f9cc4` | `4ff1088437c518fa89198e14f64f332ddf3183290d4bc0ee476369caf5fda8cf` |
| 06 | `06d4e1a0cf7c90f1176542a08cc2d0bc64648d8374076939df8a72c4ffa1e5c4` | `994e5774fd343e3e4e1d110c4282bcec80768d886947dd6010c9f3972ba37c31` |

## 仓库验证

2026-09-13：类型检查、生产构建、本批五物种身份与六图哈希测试通过。`npm run test:carousel` 的 216 项检查通过，其中本批新增 5 个完整主体回归，覆盖六视口和六动画端点。图集 WebP 联系表与封面静态几何合成图均已目视复核。临时 PNG 已移出仓库。

全量 taxonomy 测试 180 项中 106 通过、74 失败，失败均为既有物种 README 的旧图片哈希与运行图不一致；已逐一确认相关 README 与六张运行图和 HEAD 相同，与本批新增内容无关。未修改这些历史验收记录。分类图谱数量测试已更新至 210 个物种。分类浏览、图片查看器、物种列表、品牌标记测试通过；生产子路径测试因沙箱禁止监听本地端口，移至沙箱外重跑后两项通过。未启动 GUI 或无头浏览器。
