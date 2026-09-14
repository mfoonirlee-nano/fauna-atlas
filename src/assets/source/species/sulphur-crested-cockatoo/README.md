# Sulphur-crested Cockatoo image set

2026-09-14 使用内置 image_gen 制作封面与五张观察图。提示词及修改记录见 [prompts.json](./prompts.json)。

运行资产：`public/images/species/sulphur-crested-cockatoo/`。AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。

## 内容依据

- [BirdLife Australia：葵花凤头鹦鹉](https://birdlife.org.au/bird-profiles/sulphur-crested-cockatoo/)
- [World Parrot Trust：葵花凤头鹦鹉](https://parrots.org/encyclopedia/sulphur-crested-cockatoo/)
- [BirdLife Australia：全球保护等级](https://birdlife.org.au/bird-profiles/sulphur-crested-cockatoo/)
- [BirdLife HANZAB：凤头鹦鹉科分类](https://hanzab.birdlife.org.au/hanzab-taxonomy/hanzab-taxonomy-top/)

分类口径、来源差异和字段限制见 [五鸟资料核验](../../../../../docs/research/five-birds-2026-09-14.md)。来源可确认全球 LC；独立评估日期及全球趋势未核实，未填入 assessedYear，trend 使用 unknown。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：展开的黄色冠羽。葵花凤头鹦鹉头部近景，黄色冠羽展开，深色弯嘴清楚可见。
- `03-observation.webp`：收起冠羽抓住树枝。葵花凤头鹦鹉收拢冠羽，脚趾抓住桉树枝。
- `04-observation.webp`：伙伴一起找种子。三只葵花凤头鹦鹉在草地低头寻找种子。
- `05-observation.webp`：飞行时的浅黄翼下。葵花凤头鹦鹉展开双翼飞行，翼下带浅黄色。
- `06-observation.webp`：树洞旁的双亲。两只葵花凤头鹦鹉停在桉树洞口附近。

## 封面验收

源图与运行 WebP 为 1536×1024，已检查完整源图与原始分辨率运行封面。完整主体边界 `{"left": 793, "top": 20, "right": 1318, "bottom": 952}` 包含可见的冠羽或角盔、嘴、身体、脚趾与尾端。主体大小为 525×932 源像素，中心位于源宽的 68.7%。左侧 40% 留给页面文字。新物种无旧封面。

focalPoint：`{"x":0.7,"y":0.5}`。轮播使用现有 hero-subject-frame，以完整主体边界适配同一封面；不增加设备专用图片。

运行封面 SHA-256：`360a7c9b9c48a81e465203cdad5d75fdb9cc41817bd513e2b484328dc3846109`。

按当前 CSS 的六个端点检查：settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。动画只改变透明度，几何相同。下表采用未取整的 CSS 像素计算，主体与视口、文字和面板至少相距 24 px。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 99.14×176.00 | 110.43 | 48.00 | 40.00 | Pass |
| 390×760 | 99.14×176.00 | 145.43 | 48.00 | 40.00 | Pass |
| 1366×768 | 241.09×428.00 | 96.00 | 210.61 | 48.00 | Pass |
| 1920×900 | 315.45×560.00 | 96.00 | 317.47 | 48.00 | Pass |
| 2560×900 | 315.45×560.00 | 96.00 | 483.87 | 48.00 | Pass |
| 3840×900 | 315.45×560.00 | 96.00 | 816.67 | 48.00 | Pass |

已用静态几何合成图复核完整主体与文字、面板的区域关系；合成图用于检查布局边界，不作为浏览器截图或字体排版验收。原始分辨率封面与图集联系表用于检查外形、颜色、动作和裁边。

## 压缩与哈希

使用 `npm run convert:webp` 转换并验证解码、尺寸；保留六张 WebP。下表的源哈希记录本次最终 PNG 输入，临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `2bccbb62ee36bac430b29846677e309989c0d6b9541e8d9c35d03b8a459ac0d1` | `360a7c9b9c48a81e465203cdad5d75fdb9cc41817bd513e2b484328dc3846109` |
| 02 | `5c11d5513da7ab0bf7761a75e6403cca222019e3160ea583fc08ec0a48650d06` | `ba1ebe26fff9e18224f73c39a8cd07a8b7410ae2884fbc6a4ce59d5330041ced` |
| 03 | `62cb51d8defd0ee88928eb8c92739adaa4c3399c66745db7c1841fa72fac3f27` | `a9e181f9fe5311a0dd2b5335e1d7c9e45a69ab03aab175f6defd14c460dd69e7` |
| 04 | `ef239109be7014b3d2627dc52bca6b34d2b33ee9d35bca5c02b47473fe51f734` | `2f614753b6828683dcd8809bc0365768cedf04f9a80aa5ffa810e3a628db2c27` |
| 05 | `0b3ebd5b9aeef9fb2b1c1517e84678e3e92c5a95bea44db8d1a34aea99e16c99` | `e173a14a9f951d60cb73e7f63efa6fcf2bf3f990cae6a4b944eb98d9c418039c` |
| 06 | `de5c2c57620affa8660554b19156378b0838a806b9b52c078258dabeecab6da6` | `d072ccba75c24dec78b05c9e08d3e88b50751564e2b927665051ac1b481e9d6d` |

## 仓库验证

2026-09-14：30 张 WebP 的数量、1536×1024 尺寸、解码和独立哈希通过检查，本批五物种身份与内容测试通过。轮播 227 项通过，包含本批五个完整主体案例，覆盖六视口与六动画端点。已检查源图、原始分辨率运行封面、运行图集联系表与静态几何合成图。类型检查、生产构建及三项生产子路径/数据还原测试通过；分类浏览、物种列表、图片转换共 25 项通过。

全量分类测试 182 项中 108 通过、74 失败；失败名单与修改前基线相同，均为既有图片验收哈希问题，本批未新增失败。临时 PNG 已清理，生成工具目录原件保留。未启动 GUI 或无头浏览器。
