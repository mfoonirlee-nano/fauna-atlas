# American Bison image set

2026-09-13 使用内置 image_gen 制作封面与五张观察图。提示词见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/american-bison/`。图片为 AI 生成科学情景重建，不代表实拍地点或连续观察记录。

## 内容依据

- [ASM Mammal Diversity Database — 分类与名称](https://www.mammaldiversity.org/taxon/1006256/)
- [NPS — 美洲野牛基本资料](https://www.nps.gov/subjects/bison/bison-facts.htm)
- [NPS — 黄石野牛生态](https://www.nps.gov/yell/learn/nature/bison.htm)
- [IUCN — 全球保护等级：60 年保护回顾](https://nc.iucnredlist.org/redlist/content/attachment_files/Red_List_60_years_of_success_report_03Oct2025.pdf)
- [NPS — Bison bison 名称与分类](https://www.nps.gov/subjects/bison/bison-facts.htm)

访问日期：2026-09-13。未核实独立评估日期与全球种群趋势；assessedYear 留空，trend 为 unknown，不以网页更新时间代替评估日期。 NPS 与 IUCN 使用 Bison bison，本档案沿用这一名称。MDD 使用 Bos bison（Bison 亚属），其页面显示 NE，不能覆盖 IUCN 以 Bison bison 发表的 NT 评估；2025 年 IUCN 回顾报告确认美洲野牛 NT。图集以平原野牛为主，不用牧场数量表达野生恢复。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：高高的肩背。美洲野牛侧身站立，肩背明显隆起。
- `03-observation.webp`：下巴的长毛。美洲野牛头部可见短角和下巴长毛。
- `04-observation.webp`：低头吃草。美洲野牛低下头在草原取食。
- `05-observation.webp`：冬天找草。美洲野牛低头拨开积雪。
- `06-observation.webp`：红褐色幼仔。成年野牛与红褐色幼仔站在草地上。

## 封面与图集验收

源 PNG 与运行 WebP 为 1536×1024，逐张静态核对外形与图注。封面按原始分辨率检查。完整可见主体目测边界为 `{'left': 610, 'top': 110, 'right': 1472, 'bottom': 835}`，大小 862×725 源像素，包括可见吻端、角或长牙、鳍或蹄、耳与尾缘。主体边界中心位于源宽度的 67.8%。左侧保留环境背景，完整主体突出且与源边缘有背景间隔。focalPoint 为 `{"x": 0.7, "y": 0.5}`。

运行封面 SHA-256：`83bb3a36eba6040031a1f9b21fa3d692e7dca9c04fdc837711ebd7ff99a1b123`。这是新物种封面，无旧运行资产可比较。

采用现有 hero-subject-frame 完整主体适配，手机与桌面加载同一封面。依据当前 CSS 计算 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六个端点；动画只改变透明度，六端点几何相同。静态几何合成图标出主体、文字与控制面板矩形；不启动浏览器。每项间距至少 24 CSS 像素。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 全部六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 209.26×176.00 | 55.37 | 48.00 | 40.00 | Pass |
| 390×760 | 209.26×176.00 | 90.37 | 48.00 | 40.00 | Pass |
| 1366×768 | 508.88×428.00 | 96.00 | 76.72 | 48.00 | Pass |
| 1920×900 | 665.82×560.00 | 96.00 | 142.29 | 48.00 | Pass |
| 2560×900 | 665.82×560.00 | 96.00 | 308.69 | 48.00 | Pass |
| 3840×900 | 665.82×560.00 | 96.00 | 641.49 | 48.00 | Pass |

## 压缩与哈希

使用 `npm run convert:webp -- <本批源图>`，cwebp q82/m6 转换并检查解码及尺寸。未使用 TinyPNG。只保留一张封面与五张观察图，不重复压缩已接受的 WebP。生成图用于外形和行为示意，不用于精确测量、性别鉴定或连续行为推断。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `6d4c5b9cb05b80885f6be2a4e8c650fe98e02f809966e18c91d4b3604b389387` | `83bb3a36eba6040031a1f9b21fa3d692e7dca9c04fdc837711ebd7ff99a1b123` |
| 02 | `d1bc6250952f3f0e0a5b7bd7db50521b00ef871aac02ecc93873ae0babc60891` | `2cf08af194a6fb6e6c8de99309ca764d2833f6adf43b0b1ecd4927298ce24804` |
| 03 | `a691b26819f85913e777bdada53a359693f02ba3045daa93db513ea6f7d72032` | `c90afcfe378427ee2c6aff57108bc7ab3701fc906a2f6682d3823ec52ff630b5` |
| 04 | `3b1bd5c05c228c2336dca73462c5475948ddc969a7596c1b6b4f9b0681dcaf53` | `0d85c3f8b2145fcf82a0d7982d7ad2b79a0644fb795bfb272d1d4d5a4d324748` |
| 05 | `0d2685cfa2b8a65461cfba52b1c0541b1b34d6438d9b35d527a6c9a48313c69e` | `94148928a479ec22df7ff1bd811b87289087f5251f3de319a0dcc401370dc537` |
| 06 | `af2c05606b535873bd713af0c8fd86e39f9fe6311bb02e9241095b6f940fbf02` | `e4be8295aec7dd7dee81de8859ed05f678bf857b3f554a5415a413acc1e9950e` |

## 仓库验证

2026-09-13：类型检查、生产构建、本批五物种身份与六图哈希测试通过。`npm run test:carousel` 的 216 项检查通过，其中本批新增 5 个完整主体回归，覆盖六视口和六动画端点。图集 WebP 联系表与封面静态几何合成图均已目视复核。临时 PNG 已移出仓库。

全量 taxonomy 测试 180 项中 106 通过、74 失败，失败均为既有物种 README 的旧图片哈希与运行图不一致；已逐一确认相关 README 与六张运行图和 HEAD 相同，与本批新增内容无关。未修改这些历史验收记录。分类图谱数量测试已更新至 210 个物种。分类浏览、图片查看器、物种列表、品牌标记测试通过；生产子路径测试因沙箱禁止监听本地端口，移至沙箱外重跑后两项通过。未启动 GUI 或无头浏览器。

IUCN 2025 回顾报告已下载并静态检查 PDF 第 7 页（印刷页 12–13 跨页），美洲野牛旁的 Red List 标记为 NT；旁边 Green Status 的 Critically Depleted 属于另一套恢复指标，不写入 IUCN Red List 等级。
