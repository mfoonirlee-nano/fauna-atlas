# Indian Peafowl image set

2026-09-14 使用内置 image_gen 制作封面与五张观察图。提示词和修改记录见 [prompts.json](./prompts.json)。运行资产：`public/images/species/indian-peafowl/`。AI 生成科学情景重建，不代表实拍地点或连续观察记录。

## 内容依据

- [Smithsonian National Zoo：蓝孔雀分类与繁殖](https://nationalzoo.si.edu/animals/common-peafowl)
- [San Diego Zoo：孔雀羽屏与生活](https://animals.sandiegozoo.org/animals/peafowl)
- [Smithsonian National Zoo：蓝孔雀保护等级](https://nationalzoo.si.edu/animals/common-peafowl)
- [Roger Williams Park Zoo：蓝孔雀原生分布](https://www.rwpzoo.org/animals/peafowl-common/)

资料核对日期：2026-09-14。详细事实口径见 [研究记录](../../../../../docs/research/next-five-animals-2026-09-14.md)。未填入未经核实的评估年份。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：展开带眼状斑的羽屏。雄性蓝孔雀展开完整的眼状斑羽屏，头与双脚可见。
- `03-observation.webp`：蓝色头颈与小羽冠。雄性蓝孔雀头部近景，蓝色颈羽和小扇形羽冠清晰。
- `04-observation.webp`：雌鸟的朴素羽衣。褐灰色雌性蓝孔雀在地面觅食，颈部带绿色光泽。
- `05-observation.webp`：低头寻找食物。雄性蓝孔雀在草地低头啄食，长饰羽收拢在身后。
- `06-observation.webp`：母鸟与幼鸟。雌性蓝孔雀带着幼鸟走过草地。

开屏图以眼状斑观察为主，部分顶缘羽毛接近画面上缘。母幼图另有雄鸟经过，不能据此推断雄鸟参与育雏；两性对比图与取食图允许长饰羽的局部出框。

## 封面与图集验收

源 PNG 与运行 WebP 均为 1536×1024。逐张检查源图与运行图；按原始分辨率复核封面。完整可见主体边界为 `{"left": 805, "top": 342, "right": 1465, "bottom": 815}`，大小 660×473 源像素，中心位于源宽度的 73.9%。边界包含可见头部、嘴、冠羽、手足和尾缘，主体与源边缘之间保留真实背景。focalPoint 为 `{"x":0.7,"y":0.5}`。新物种无旧运行封面。

运行封面 SHA-256：`6e16552a903b195f3e86f22947a74941cf6bdc4a081711f1bacb1936c7cd91d7`。

采用现有 hero-subject-frame 完整主体适配。手机与桌面使用同一封面。按当前 CSS 计算 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；六端点只改变透明度，几何相同。静态合成检查主体与文字、面板、视口边缘的间距，不启动浏览器。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 全部六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 245.58×176.00 | 37.21 | 48.00 | 40.00 | Pass |
| 390×760 | 245.58×176.00 | 72.21 | 48.00 | 40.00 | Pass |
| 1366×768 | 559.68×401.10 | 72.00 | 51.32 | 61.45 | Pass |
| 1920×900 | 781.40×560.00 | 94.10 | 84.50 | 48.00 | Pass |
| 2560×900 | 781.40×560.00 | 96.00 | 250.90 | 48.00 | Pass |
| 3840×900 | 781.40×560.00 | 96.00 | 583.70 | 48.00 | Pass |

## 压缩与哈希

使用 `npm run convert:webp` 转换，检查解码和尺寸；保留六张 WebP。记录哈希后清理仓库中的临时 PNG，生成工具默认目录中的原件保持不变。图像用于外形和行为示意，不用于精确测量或推断亲缘关系。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `9e6886cca1a7444a3dc9fbf6218e7729d709d3019e6e4770c9a3535bed393d3d` | `6e16552a903b195f3e86f22947a74941cf6bdc4a081711f1bacb1936c7cd91d7` |
| 02 | `15498ee709a58a62c268e152e079b46f5c237e515b07a624bcd2f600855614ab` | `69ed1fc03f85024d5154fb5cca2c06c7014a48a30d05c9c73a7fd5b5b8b79164` |
| 03 | `a20afb606e4b5842dbbfbe2dbcb12cf50253242d09aab287292d9847a1c2fd26` | `9113de1d931d7561f71f8567ab519b87824e510fee41b67d094eaf72b859575d` |
| 04 | `703d3f9ae14652627e9acaa1edc31104967e9e81923afbed69a4281575b03bec` | `6fe3e22dcb4e6a5d965523deb53a16e6fe3e6415e44686d9893a82aebf4265db` |
| 05 | `08a267196fe251ea28141cd5811ea7996670cf949536cec28bfbf1f430179357` | `50323404ef8dd2d64b98df6ddcf55783d1ce2eb51d6445aea0da4952a9fb956b` |
| 06 | `67edf4192700cfea114ed09c91eafadc33482dc7f780303fe48d8656bc47e450` | `aa9834e1856337faa13b72855026191ce66e941b7df6d67b9e1739b8d7dd87d1` |

## 仓库验证

2026-09-14：新增五物种身份、六图数量、解码及哈希检查通过。轮播 222 项通过，包含本批五个完整主体用例，覆盖六视口与六动画端点。已复核运行 WebP 联系表、原始分辨率封面和静态几何合成图。类型检查、生产构建、生产子路径加载、分类浏览、图片查看器、图片转换、物种列表、品牌标记及 Cloudflare 部署脚本测试通过。临时 PNG 已清理。

全量 taxonomy 测试 181 项中 107 通过、74 失败；失败名单与修改前基线完全相同，均为既有图片验收哈希问题。本批没有新增失败，未修改历史哈希记录。未启动 GUI 或无头浏览器。
