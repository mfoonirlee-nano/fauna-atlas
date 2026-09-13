# Okapi image set

2026-09-13 使用内置 image_gen 制作封面与五张观察图。提示词见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/okapi/`。图片为 AI 生成科学情景重建，不代表实拍地点或连续观察记录。

## 内容依据

- [ASM Mammal Diversity Database — 分类与名称](https://www.mammaldiversity.org/taxon/1006343/)
- [San Diego Zoo — 霍加狓](https://animals.sandiegozoo.org/animals/okapi)
- [IUCN — 全球保护等级（ASM MDD 转引）](https://www.mammaldiversity.org/taxon/1006343/)

访问日期：2026-09-13。未核实独立评估日期与全球种群趋势；assessedYear 留空，trend 为 unknown，不以网页更新时间代替评估日期。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：腿部条纹。霍加狓臀部和腿上可见白色条纹。
- `03-observation.webp`：竖起大耳朵。霍加狓头侧有两只大耳朵。
- `04-observation.webp`：卷住叶子。霍加狓伸出深色舌头取食叶片。
- `05-observation.webp`：林间走动。霍加狓沿雨林地面行走。
- `06-observation.webp`：母亲与幼仔。霍加狓母亲和有条纹的幼仔站在林间。

## 封面与图集验收

源 PNG 与运行 WebP 为 1536×1024，逐张静态核对外形与图注。封面按原始分辨率检查。完整可见主体目测边界为 `{'left': 740, 'top': 66, 'right': 1444, 'bottom': 954}`，大小 704×888 源像素，包括可见吻端、角或长牙、鳍或蹄、耳与尾缘。主体边界中心位于源宽度的 71.1%。左侧保留环境背景，完整主体突出且与源边缘有背景间隔。focalPoint 为 `{"x": 0.7, "y": 0.5}`。

运行封面 SHA-256：`92f297a505f0e1c756964e552b052981bf995e4b43d5da6f4f76a32cbd9ab81e`。这是新物种封面，无旧运行资产可比较。

采用现有 hero-subject-frame 完整主体适配，手机与桌面加载同一封面。依据当前 CSS 计算 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六个端点；动画只改变透明度，六端点几何相同。静态几何合成图标出主体、文字与控制面板矩形；不启动浏览器。每项间距至少 24 CSS 像素。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 全部六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 139.53×176.00 | 90.23 | 48.00 | 40.00 | Pass |
| 390×760 | 139.53×176.00 | 125.23 | 48.00 | 40.00 | Pass |
| 1366×768 | 339.32×428.00 | 96.00 | 161.50 | 48.00 | Pass |
| 1920×900 | 443.96×560.00 | 96.00 | 253.22 | 48.00 | Pass |
| 2560×900 | 443.96×560.00 | 96.00 | 419.62 | 48.00 | Pass |
| 3840×900 | 443.96×560.00 | 96.00 | 752.42 | 48.00 | Pass |

## 压缩与哈希

使用 `npm run convert:webp -- <本批源图>`，cwebp q82/m6 转换并检查解码及尺寸。未使用 TinyPNG。只保留一张封面与五张观察图，不重复压缩已接受的 WebP。生成图用于外形和行为示意，不用于精确测量、性别鉴定或连续行为推断。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `be1f0d5c0b95a67ae91492bdc371056dfbfb2a16a6d4408fb30daf7c8726ca1c` | `92f297a505f0e1c756964e552b052981bf995e4b43d5da6f4f76a32cbd9ab81e` |
| 02 | `5c48cb4e3adb17569f97e4ff4df7632fd6ed9475f1ddd91018b941d5306fa2b3` | `4d34a71c976faf92d7333fdf9bdb302d537fd0168bb02453c367aa31ead98598` |
| 03 | `77823e2b9c54c64d21950d2aa760b4a57c1ee3b109a691c5b6695ca729d038e2` | `36175b1e809a081c3d28db23f7025c32d98615de6e94848dc99c740b0e885d0f` |
| 04 | `97ffd4f8921c9843a57ea33a79e62d719c0610510f16f7e6194f83bc87ae8788` | `8f7ad3abe5d34807884511352b1c13cd2d15338e08af15a2ac7903d6acda0d2a` |
| 05 | `38fbda00b0e74badbe5a1b4a432325ff68b9ab3799761430be972de8be472a51` | `a692192139915f86d3cba4ec2f44020ef3dc66ad6c38b20dba6d099e3880573d` |
| 06 | `17d3afc36d57460aefe8c15b1f41c4510ffd57dbfc0ed3ffc424791e6c76f77a` | `c4d9ac1e0c19e7dbb2bdcac6991670b7ac6f4e634a366c31a93b93cc0af60ac8` |

## 仓库验证

2026-09-13：类型检查、生产构建、本批五物种身份与六图哈希测试通过。`npm run test:carousel` 的 216 项检查通过，其中本批新增 5 个完整主体回归，覆盖六视口和六动画端点。图集 WebP 联系表与封面静态几何合成图均已目视复核。临时 PNG 已移出仓库。

全量 taxonomy 测试 180 项中 106 通过、74 失败，失败均为既有物种 README 的旧图片哈希与运行图不一致；已逐一确认相关 README 与六张运行图和 HEAD 相同，与本批新增内容无关。未修改这些历史验收记录。分类图谱数量测试已更新至 210 个物种。分类浏览、图片查看器、物种列表、品牌标记测试通过；生产子路径测试因沙箱禁止监听本地端口，移至沙箱外重跑后两项通过。未启动 GUI 或无头浏览器。
