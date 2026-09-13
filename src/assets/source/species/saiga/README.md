# Saiga image set

2026-09-13 使用内置 image_gen 制作封面与五张观察图。提示词见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/saiga/`。图片为 AI 生成科学情景重建，不代表实拍地点或连续观察记录。

## 内容依据

- [ASM Mammal Diversity Database — 分类与名称](https://www.mammaldiversity.org/taxon/1006176/)
- [Saiga Conservation Alliance — 外形与生活](https://saiga-conservation.org/saigas/)
- [IUCN — 全球保护等级（ASM MDD 转引）](https://www.mammaldiversity.org/taxon/1006176/)

访问日期：2026-09-13。未核实独立评估日期与全球种群趋势；assessedYear 留空，trend 为 unknown，不以网页更新时间代替评估日期。 SCA 的旧保护等级段落仍写 CR，只采用其外形、食性与迁移描述；当前 NT 取自 MDD 转引 IUCN。采用包含蒙古种群的广义 Saiga tatarica。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：看看大鼻子。雄性高鼻羚羊的鼻部膨大下垂。
- `03-observation.webp`：雌性没有角。右侧无角的雌性高鼻羚羊与左侧有角的雄性站在草原。
- `04-observation.webp`：低头吃植物。雄性高鼻羚羊低头取食。
- `05-observation.webp`：沿草原移动。一小群高鼻羚羊穿过开阔草原。
- `06-observation.webp`：母亲和幼仔。高鼻羚羊幼仔站在无角雌性前方，旁边有一只有角雄性。

## 封面与图集验收

源 PNG 与运行 WebP 为 1536×1024，逐张静态核对外形与图注。封面按原始分辨率检查。完整可见主体目测边界为 `{'left': 662, 'top': 40, 'right': 1492, 'bottom': 934}`，大小 830×894 源像素，包括可见吻端、角或长牙、鳍或蹄、耳与尾缘。主体边界中心位于源宽度的 70.1%。左侧保留环境背景，完整主体突出且与源边缘有背景间隔。focalPoint 为 `{"x": 0.7, "y": 0.5}`。

运行封面 SHA-256：`87be55c5fa5027f3d8d590375aef4d2d75272ff1e8f4a401e019a80d5acf8fd4`。这是新物种封面，无旧运行资产可比较。

采用现有 hero-subject-frame 完整主体适配，手机与桌面加载同一封面。依据当前 CSS 计算 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六个端点；动画只改变透明度，六端点几何相同。静态几何合成图标出主体、文字与控制面板矩形；不启动浏览器。每项间距至少 24 CSS 像素。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 全部六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 163.40×176.00 | 78.30 | 48.00 | 40.00 | Pass |
| 390×760 | 163.40×176.00 | 113.30 | 48.00 | 40.00 | Pass |
| 1366×768 | 397.36×428.00 | 96.00 | 132.48 | 48.00 | Pass |
| 1920×900 | 519.91×560.00 | 96.00 | 215.24 | 48.00 | Pass |
| 2560×900 | 519.91×560.00 | 96.00 | 381.64 | 48.00 | Pass |
| 3840×900 | 519.91×560.00 | 96.00 | 714.44 | 48.00 | Pass |

## 压缩与哈希

使用 `npm run convert:webp -- <本批源图>`，cwebp q82/m6 转换并检查解码及尺寸。未使用 TinyPNG。只保留一张封面与五张观察图，不重复压缩已接受的 WebP。生成图用于外形和行为示意，不用于精确测量、性别鉴定或连续行为推断。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `1d37b25dbf826d26811115fff21864fe6c8fbac783ca6d0cdd95525cb8f77310` | `87be55c5fa5027f3d8d590375aef4d2d75272ff1e8f4a401e019a80d5acf8fd4` |
| 02 | `a401f8f06facde8e7032323e54fdf55df73a294c081cc74e2c90c326332fe38d` | `a9f646b890ccb6380bce59d2978537ab9ec1f2bac4227a214047275ae29779df` |
| 03 | `692ca64e09fc5d84885593274432bdba2575b336ab32de5d2241f31d692c7cf0` | `3dbd5c99f24974ec981009e573f8895f075a8270112aa397041331c3aed8b8ce` |
| 04 | `0ff6f6ce81ff06d63ffa3e8013da7211752ed82a1ea159095de925c8f5fbc1ef` | `2e8e124c6fb21638e470a8a839287e0ba888c852602a51f722155f093971cffe` |
| 05 | `ba92b2b4587cdbe160bd76fe60c390963e215122b0582786f3107fe6ccad4c85` | `2f07bb93164682e859558b4acefc2407586fdee85e8ca24d7d317026620f1ffd` |
| 06 | `0a3b6a872b7b3356d4f2e50c9002972eecba6665dc9e21b14bca05eef3010f0d` | `74e6a8429a2986379d5ff5b9b94655425276dcc651c199db3fe5fea75e647555` |

## 仓库验证

2026-09-13：类型检查、生产构建、本批五物种身份与六图哈希测试通过。`npm run test:carousel` 的 216 项检查通过，其中本批新增 5 个完整主体回归，覆盖六视口和六动画端点。图集 WebP 联系表与封面静态几何合成图均已目视复核。临时 PNG 已移出仓库。

全量 taxonomy 测试 180 项中 106 通过、74 失败，失败均为既有物种 README 的旧图片哈希与运行图不一致；已逐一确认相关 README 与六张运行图和 HEAD 相同，与本批新增内容无关。未修改这些历史验收记录。分类图谱数量测试已更新至 210 个物种。分类浏览、图片查看器、物种列表、品牌标记测试通过；生产子路径测试因沙箱禁止监听本地端口，移至沙箱外重跑后两项通过。未启动 GUI 或无头浏览器。
