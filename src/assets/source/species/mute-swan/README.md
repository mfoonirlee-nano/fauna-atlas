# Mute Swan image set

2026-09-14 使用内置 image_gen 制作封面与五张观察图。提示词和修改记录见 [prompts.json](./prompts.json)。运行资产：`public/images/species/mute-swan/`。AI 生成科学情景重建，不代表实拍地点或连续观察记录。

## 内容依据

- [Birds Canada Avibase：疣鼻天鹅分类与范围](https://avibase.bsc-eoc.org/species.jsp?avibaseid=694C127A5D849FFE&lang=EN)
- [RSPB：疣鼻天鹅外形与食物](https://www.rspb.org.uk/birds-and-wildlife/mute-swan/?i=1)
- [BTO BirdFacts：疣鼻天鹅保护等级与繁殖](https://www.bto.org/learn/about-birds/birdfacts/mute-swan)

资料核对日期：2026-09-14。详细事实口径见 [研究记录](../../../../../docs/research/next-five-animals-2026-09-14.md)。未填入未经核实的评估年份。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：弯起来的长颈。白色疣鼻天鹅在水面游动，长颈弯成曲线。
- `03-observation.webp`：橙色喙与黑色额瘤。疣鼻天鹅侧脸近景，橙色喙根部的黑色突起清楚可见。
- `04-observation.webp`：伸颈取食。疣鼻天鹅在浅水中低头寻找水生植物。
- `05-observation.webp`：看看脚上的蹼。疣鼻天鹅站在浅水岸边，黑色脚掌可见。
- `06-observation.webp`：成鸟与灰色幼鸟。白色疣鼻天鹅带着灰色幼鸟在水面游动。

## 封面与图集验收

源 PNG 与运行 WebP 均为 1536×1024。逐张检查源图与运行图；按原始分辨率复核封面。完整可见主体边界为 `{"left": 770, "top": 40, "right": 1500, "bottom": 970}`，大小 730×930 源像素，中心位于源宽度的 73.9%。边界包含可见头部、嘴、冠羽、手足和尾缘，主体与源边缘之间保留真实背景。focalPoint 为 `{"x":0.7,"y":0.5}`。新物种无旧运行封面。

运行封面 SHA-256：`fbcc2cc4605a291175ef1114b6efde2bd4aed4ef4903ad5e390969ab0457976b`。

采用现有 hero-subject-frame 完整主体适配。手机与桌面使用同一封面。按当前 CSS 计算 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；六端点只改变透明度，几何相同。静态合成检查主体与文字、面板、视口边缘的间距，不启动浏览器。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 全部六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 138.15×176.00 | 90.92 | 48.00 | 40.00 | Pass |
| 390×760 | 138.15×176.00 | 125.92 | 48.00 | 40.00 | Pass |
| 1366×768 | 335.96×428.00 | 96.00 | 163.18 | 48.00 | Pass |
| 1920×900 | 439.57×560.00 | 96.00 | 255.42 | 48.00 | Pass |
| 2560×900 | 439.57×560.00 | 96.00 | 421.82 | 48.00 | Pass |
| 3840×900 | 439.57×560.00 | 96.00 | 754.62 | 48.00 | Pass |

## 压缩与哈希

使用 `npm run convert:webp` 转换，检查解码和尺寸；保留六张 WebP。记录哈希后清理仓库中的临时 PNG，生成工具默认目录中的原件保持不变。图像用于外形和行为示意，不用于精确测量或推断亲缘关系。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `7536421fd0567b8b6ed6b98fd078f1459982ef8108a4869ca21abde46c2b1116` | `fbcc2cc4605a291175ef1114b6efde2bd4aed4ef4903ad5e390969ab0457976b` |
| 02 | `c05feaeaeeb74e5baf34693c6339b96606f4034cd313e1c5d44baa38fcc8a051` | `aacd62f6961f315855cff33bcc558cd189971b84634454129db74a0c557bb831` |
| 03 | `9943aa1bca8b7458157de9d63b09d4990494d701a1f7f5b6f01a3936b973b791` | `b37d1e3a7d7af20afacf03cf851e026586688e2f7410b349bcda8a58b330eb6d` |
| 04 | `751dd94625e5fad7a57d7b900be0f2d3af89f9d9f5ea654e059c0181d3da99b6` | `06d7b63a9f0567554995fc7deeacf439c47b361d9347050b3ae9d2d26787556d` |
| 05 | `1229b5474c26d9bf30624e8af545e8494cd6e17e20693ac047d657f888a6b228` | `517bd1d5e32c8ef7f8e9928c4c967892000a8bb9ce0053b564fb96a101fa6b7a` |
| 06 | `d83445d8d0a71910258ecf3f9f95ce28096bcb9922173d3902a538abe26e1bc1` | `c764ac8d2bb4a0377bdb9a498997e4ddffe1b10cb69a64d9d62b642e6e690b5c` |

## 仓库验证

2026-09-14：新增五物种身份、六图数量、解码及哈希检查通过。轮播 222 项通过，包含本批五个完整主体用例，覆盖六视口与六动画端点。已复核运行 WebP 联系表、原始分辨率封面和静态几何合成图。类型检查、生产构建、生产子路径加载、分类浏览、图片查看器、图片转换、物种列表、品牌标记及 Cloudflare 部署脚本测试通过。临时 PNG 已清理。

全量 taxonomy 测试 181 项中 107 通过、74 失败；失败名单与修改前基线完全相同，均为既有图片验收哈希问题。本批没有新增失败，未修改历史哈希记录。未启动 GUI 或无头浏览器。
