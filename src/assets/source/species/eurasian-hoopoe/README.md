# Eurasian Hoopoe image set

2026-09-14 使用内置 image_gen 制作封面与五张观察图。提示词及修改记录见 [prompts.json](./prompts.json)。

运行资产：`public/images/species/eurasian-hoopoe/`。AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。

## 内容依据

- [RSPB：戴胜外形与迁徙](https://www.rspb.org.uk/birds-and-wildlife/hoopoe)
- [BTO：戴胜全球保护等级](https://www.bto.org/learn/about-birds/birdfacts/hoopoe)
- [NCBI：戴胜所属犀鸟目](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=57439)
- [Oiseaux.net：戴胜生活史](https://www.oiseaux.net/en/oiseaux/eurasian.hoopoe.html)

分类口径、来源差异和字段限制见 [五鸟资料核验](../../../../../docs/research/five-birds-2026-09-14.md)。来源可确认全球 LC；独立评估日期及全球趋势未核实，未填入 assessedYear，trend 使用 unknown。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：黑色羽尖的小扇子。戴胜展开冠羽，细长弯嘴与黑色羽尖清楚可见。
- `03-observation.webp`：用长嘴探土。戴胜收拢冠羽，把长嘴探向果园地面。
- `04-observation.webp`：黑白条纹的翅膀。戴胜展开黑白相间的翅膀飞过草地。
- `05-observation.webp`：把食物带到洞口。戴胜衔着昆虫幼虫停在树洞旁。
- `06-observation.webp`：草地上的两种冠羽姿态。两只戴胜走在果园草地，一只竖起冠羽，另一只收拢冠羽。

## 封面验收

源图与运行 WebP 为 1536×1024，已检查完整源图与原始分辨率运行封面。完整主体边界 `{"left": 653, "top": 55, "right": 1444, "bottom": 936}` 包含可见的冠羽或角盔、嘴、身体、脚趾与尾端。主体大小为 791×881 源像素，中心位于源宽的 68.3%。左侧 40% 留给页面文字。新物种无旧封面。

focalPoint：`{"x":0.7,"y":0.5}`。轮播使用现有 hero-subject-frame，以完整主体边界适配同一封面；不增加设备专用图片。

运行封面 SHA-256：`4e3fab6a8c30c78e35d9097fe7adb91f21716d6237afbe1ebeadbd72b9138fb4`。

按当前 CSS 的六个端点检查：settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。动画只改变透明度，几何相同。下表采用未取整的 CSS 像素计算，主体与视口、文字和面板至少相距 24 px。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 158.02×176.00 | 80.99 | 48.00 | 40.00 | Pass |
| 390×760 | 158.02×176.00 | 115.99 | 48.00 | 40.00 | Pass |
| 1366×768 | 384.28×428.00 | 96.00 | 139.02 | 48.00 | Pass |
| 1920×900 | 502.79×560.00 | 96.00 | 223.80 | 48.00 | Pass |
| 2560×900 | 502.79×560.00 | 96.00 | 390.20 | 48.00 | Pass |
| 3840×900 | 502.79×560.00 | 96.00 | 723.00 | 48.00 | Pass |

已用静态几何合成图复核完整主体与文字、面板的区域关系；合成图用于检查布局边界，不作为浏览器截图或字体排版验收。原始分辨率封面与图集联系表用于检查外形、颜色、动作和裁边。

## 压缩与哈希

使用 `npm run convert:webp` 转换并验证解码、尺寸；保留六张 WebP。下表的源哈希记录本次最终 PNG 输入，临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `9dfe6b9e203ac9706af8fa9ea402b613603600e337224cedd9553d216c64f597` | `4e3fab6a8c30c78e35d9097fe7adb91f21716d6237afbe1ebeadbd72b9138fb4` |
| 02 | `c40883dd0ab30428512e9cb5c619e105127fe90377101f5220d7f73958701cda` | `e427b23718ed9111c31e288b44805a1356bcb36a15108e33b6ed73a961e1d4de` |
| 03 | `c0ceebbca1b1d67d008a1f4808c70b9eaeeb538322b0e3fafd5f350c72302788` | `1049327c628bb4b7f77c3e0040bd060a6442fce6e12c197c333ebf5479b9162d` |
| 04 | `da017d682a9a71ca0727b3156b0eca212faeffa3e2f3528ba5e20533eca9a404` | `fb464f8b5f6ccf4b05edd09ac743a2a87ce1ee20de4f73b73c1e70386a58d65c` |
| 05 | `6119c43cbf90393f5010839f9e473b9af0ec1d026d39ab67b18851e7e4b6e155` | `d5ec2027f8ea952852956fb5d19bd2720c5f37c7c3afd0d95085c9f43355727a` |
| 06 | `a2ec6d197d3e22b82711002c1090082111151c5184471fb019316ee8a4c92c7b` | `74847f56d62bea83362417da3d3838e03053386ab18306d126cda4e9a8dba51b` |

## 仓库验证

2026-09-14：30 张 WebP 的数量、1536×1024 尺寸、解码和独立哈希通过检查，本批五物种身份与内容测试通过。轮播 227 项通过，包含本批五个完整主体案例，覆盖六视口与六动画端点。已检查源图、原始分辨率运行封面、运行图集联系表与静态几何合成图。类型检查、生产构建及三项生产子路径/数据还原测试通过；分类浏览、物种列表、图片转换共 25 项通过。

全量分类测试 182 项中 108 通过、74 失败；失败名单与修改前基线相同，均为既有图片验收哈希问题，本批未新增失败。临时 PNG 已清理，生成工具目录原件保留。未启动 GUI 或无头浏览器。
