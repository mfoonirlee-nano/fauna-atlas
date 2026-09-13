# Humpback Whale image set

2026-09-13 使用内置 image_gen 制作封面与五张观察图。提示词见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/humpback-whale/`。图片为 AI 生成科学情景重建，不代表实拍地点或连续观察记录。

## 内容依据

- [ASM Mammal Diversity Database — 分类与名称](https://www.mammaldiversity.org/taxon/1006405/)
- [NOAA Fisheries — 座头鲸](https://www.fisheries.noaa.gov/species/humpback-whale)
- [IUCN — 全球保护等级（ASM MDD 转引）](https://www.mammaldiversity.org/taxon/1006405/)

访问日期：2026-09-13。未核实独立评估日期与全球种群趋势；assessedYear 留空，trend 为 unknown，不以网页更新时间代替评估日期。 分类图谱沿用既有鲸目 Cetacea 展示口径，MDD 完整分类中的目为 Artiodactyla；科与属按 MDD。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：跃出水面。座头鲸跃出海面，展开长胸鳍。
- `03-observation.webp`：找到胸鳍。水下的座头鲸伸出长胸鳍。
- `04-observation.webp`：抬起尾巴。座头鲸的尾叶露出水面。
- `05-observation.webp`：看看喉部褶沟。座头鲸闭口游动，腹侧可见纵向褶沟。
- `06-observation.webp`：跟着妈妈游。母鲸和幼鲸在水下游动。

## 封面与图集验收

源 PNG 与运行 WebP 为 1536×1024，逐张静态核对外形与图注。封面按原始分辨率检查。完整可见主体目测边界为 `{'left': 474, 'top': 176, 'right': 1512, 'bottom': 898}`，大小 1038×722 源像素，包括可见吻端、角或长牙、鳍或蹄、耳与尾缘。主体边界中心位于源宽度的 64.6%。左侧保留环境背景，完整主体突出且与源边缘有背景间隔。focalPoint 为 `{"x": 0.7, "y": 0.5}`。

运行封面 SHA-256：`6950f2799de66218f6a24ab57edaa3786a6156fc3ce48dad98f0e25cc6e4c5d7`。这是新物种封面，无旧运行资产可比较。

采用现有 hero-subject-frame 完整主体适配，手机与桌面加载同一封面。依据当前 CSS 计算 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六个端点；动画只改变透明度，六端点几何相同。静态几何合成图标出主体、文字与控制面板矩形；不启动浏览器。每项间距至少 24 CSS 像素。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 全部六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 253.03×176.00 | 33.48 | 48.00 | 40.00 | Pass |
| 390×760 | 253.03×176.00 | 68.48 | 48.00 | 40.00 | Pass |
| 1366×768 | 559.68×389.30 | 72.00 | 51.32 | 67.35 | Pass |
| 1920×900 | 805.10×560.00 | 82.25 | 72.65 | 48.00 | Pass |
| 2560×900 | 805.10×560.00 | 96.00 | 239.05 | 48.00 | Pass |
| 3840×900 | 805.10×560.00 | 96.00 | 571.85 | 48.00 | Pass |

## 压缩与哈希

使用 `npm run convert:webp -- <本批源图>`，cwebp q82/m6 转换并检查解码及尺寸。未使用 TinyPNG。只保留一张封面与五张观察图，不重复压缩已接受的 WebP。生成图用于外形和行为示意，不用于精确测量、性别鉴定或连续行为推断。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `cc07886ba417bde268f751feb879c145f6210617ea3d938fae283a49bca75847` | `6950f2799de66218f6a24ab57edaa3786a6156fc3ce48dad98f0e25cc6e4c5d7` |
| 02 | `ba37334764cca31ce4df2bd17a38b04532006c7563286d145fa9a1838564efa3` | `9b816662e242bcb1ddc93e907df47ce9612f7bcad744457b7ff5f51925f53e8e` |
| 03 | `d25358c55ffa4d302dea6f05f643f736fb01602b63ed2debca08b3a9f8bdc211` | `978e5c413b70fad6b019b51daa9fe1f242c6a5aed5f60e1b59ed2cb331685d43` |
| 04 | `22c56689c3b5d5709d332306212e1a387067f10ce12a8ed7dc6a520fd4c19cca` | `483ba6707636093e9ccb1e6a537cfb4f711a27baac2565c784db586e5b6d87f2` |
| 05 | `e5683c81303ad2d8191ac8c07e5727528a094c86909d7c327c9563960a35997e` | `3aa939e9f754257ebeb3e945cffd8a674a9f9fee9e3b7f7f78c1424b0968aa25` |
| 06 | `070dcfee81e3cdf7ce8eac7b73cb4523f9ed10482052b6cff0cfe730bf79dfc5` | `a182284c6b6f7621c26d8a5fb2ef6e30c3f470270b9f5171f9a8d9a0007bc74e` |

## 仓库验证

2026-09-13：类型检查、生产构建、本批五物种身份与六图哈希测试通过。`npm run test:carousel` 的 216 项检查通过，其中本批新增 5 个完整主体回归，覆盖六视口和六动画端点。图集 WebP 联系表与封面静态几何合成图均已目视复核。临时 PNG 已移出仓库。

全量 taxonomy 测试 180 项中 106 通过、74 失败，失败均为既有物种 README 的旧图片哈希与运行图不一致；已逐一确认相关 README 与六张运行图和 HEAD 相同，与本批新增内容无关。未修改这些历史验收记录。分类图谱数量测试已更新至 210 个物种。分类浏览、图片查看器、物种列表、品牌标记测试通过；生产子路径测试因沙箱禁止监听本地端口，移至沙箱外重跑后两项通过。未启动 GUI 或无头浏览器。
