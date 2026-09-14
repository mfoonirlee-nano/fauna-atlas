# Chimpanzee image set

2026-09-14 使用内置 image_gen 制作封面与五张观察图。提示词和修改记录见 [prompts.json](./prompts.json)。运行资产：`public/images/species/chimpanzee/`。AI 生成科学情景重建，不代表实拍地点或连续观察记录。

## 内容依据

- [ASM Mammal Diversity Database：黑猩猩](https://www.mammaldiversity.org/taxon/1000720/)
- [San Diego Zoo：黑猩猩的外形与生活](https://animals.sandiegozoo.org/animals/chimpanzee)
- [ASM MDD 转引 IUCN：物种级濒危](https://www.mammaldiversity.org/taxon/1000720/)

资料核对日期：2026-09-14。详细事实口径见 [研究记录](../../../../../docs/research/next-five-animals-2026-09-14.md)。未填入未经核实的评估年份。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：手指握住树枝。黑猩猩弯曲手指抓握树枝，拇指位于树枝另一侧。
- `03-observation.webp`：在地面走路。黑猩猩在森林地面移动，长臂伸向地面。
- `04-observation.webp`：拿起一颗果实。黑猩猩用手拿着果实靠近嘴边。
- `05-observation.webp`：同伴互相理毛。两只黑猩猩靠近休息，一只为另一只理毛。
- `06-observation.webp`：贴近母亲。黑猩猩母亲与依附在身前的幼仔。

## 封面与图集验收

源 PNG 与运行 WebP 均为 1536×1024。逐张检查源图与运行图；按原始分辨率复核封面。完整可见主体边界为 `{"left": 765, "top": 100, "right": 1430, "bottom": 925}`，大小 665×825 源像素，中心位于源宽度的 71.5%。边界包含可见头部、嘴、冠羽、手足和尾缘，主体与源边缘之间保留真实背景。focalPoint 为 `{"x":0.7,"y":0.5}`。新物种无旧运行封面。

运行封面 SHA-256：`ddd0981e5820ac8fc0434238213a47506d3750afe014fd85e54440af3caf9fd3`。

采用现有 hero-subject-frame 完整主体适配。手机与桌面使用同一封面。按当前 CSS 计算 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；六端点只改变透明度，几何相同。静态合成检查主体与文字、面板、视口边缘的间距，不启动浏览器。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 全部六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 141.87×176.00 | 89.07 | 48.00 | 40.00 | Pass |
| 390×760 | 141.87×176.00 | 124.07 | 48.00 | 40.00 | Pass |
| 1366×768 | 344.99×428.00 | 96.00 | 158.66 | 48.00 | Pass |
| 1920×900 | 451.39×560.00 | 96.00 | 249.50 | 48.00 | Pass |
| 2560×900 | 451.39×560.00 | 96.00 | 415.90 | 48.00 | Pass |
| 3840×900 | 451.39×560.00 | 96.00 | 748.70 | 48.00 | Pass |

## 压缩与哈希

使用 `npm run convert:webp` 转换，检查解码和尺寸；保留六张 WebP。记录哈希后清理仓库中的临时 PNG，生成工具默认目录中的原件保持不变。图像用于外形和行为示意，不用于精确测量或推断亲缘关系。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `1279c838d14ba300144b1f9e67743ba4b85dba76640aadb0f1932be66dc5a28e` | `ddd0981e5820ac8fc0434238213a47506d3750afe014fd85e54440af3caf9fd3` |
| 02 | `1a55133125cb6a736b2cf9e92edb86befa028a57f98fe6e1dcc74efbcbdf3c03` | `7db3e5df42db53c0659c467755a7330539ff00924a6a56aa6accd5b728d0c012` |
| 03 | `4220eb180ef7fc5201ab68a63717a472acc7d533ed3ec917241e36bf93056a44` | `61283dd4bc12eb431b7545bb2805f47abdd21f48e117e848d566cbf0cde15b8a` |
| 04 | `46590611b5a7f2a827d90ad95e9303984033cc89546715130521cc2693f24d0e` | `79b350ffd64079a8b23b9337737acc940bbde1ba7e1acd3d5984838d6665c360` |
| 05 | `da6029b182d76133c95de9dcf9b12c7b00cd4743ef8895f5501d6b78888d509d` | `f0f70e9b21399673230afe1d30597e0981b54c15bc148e4d5704b74acd01f08c` |
| 06 | `6d8cab93fd39a819bd0c1bec6aba3f00f2ad82a47ff73b7ea8a88ab5484aafea` | `5f610189fbc8c50eb76a35e37a40c2efa0da921d24b6643316cfa776e5b724d7` |

## 仓库验证

2026-09-14：新增五物种身份、六图数量、解码及哈希检查通过。轮播 222 项通过，包含本批五个完整主体用例，覆盖六视口与六动画端点。已复核运行 WebP 联系表、原始分辨率封面和静态几何合成图。类型检查、生产构建、生产子路径加载、分类浏览、图片查看器、图片转换、物种列表、品牌标记及 Cloudflare 部署脚本测试通过。临时 PNG 已清理。

全量 taxonomy 测试 181 项中 107 通过、74 失败；失败名单与修改前基线完全相同，均为既有图片验收哈希问题。本批没有新增失败，未修改历史哈希记录。未启动 GUI 或无头浏览器。
