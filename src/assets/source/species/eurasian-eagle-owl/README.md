# Eurasian Eagle-Owl image set

2026-09-14 使用内置 image_gen 制作封面与五张观察图。提示词及修改记录见 [prompts.json](./prompts.json)。

运行资产：`public/images/species/eurasian-eagle-owl/`。AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。

## 内容依据

- [Los Angeles Zoo：雕鸮耳羽与感官](https://lazoo.org/explore-your-zoo/our-animals/birds/eurasian-eagle-owl/)
- [Animal Diversity Web：雕鸮分类与分布](https://animaldiversity.org/accounts/Bubo_bubo/)
- [BTO：雕鸮全球保护等级](https://www.bto.org/learn/about-birds/birdfacts/eurasian-eagle-owl)

分类口径、来源差异和字段限制见 [五鸟资料核验](../../../../../docs/research/five-birds-2026-09-14.md)。来源可确认全球 LC；独立评估日期及全球趋势未核实，未填入 assessedYear，trend 使用 unknown。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：橙色眼睛上方的耳羽。雕鸮正面站立，两束耳羽和橙色眼睛清楚可见。
- `03-observation.webp`：岩缝中的白天休息。雕鸮在有遮蔽的岩壁凹处休息。
- `04-observation.webp`：展开宽大的翅膀。雕鸮在暮色中展开双翼飞过草地。
- `05-observation.webp`：从岩石上观察地面。雕鸮站在岩石上看向草丛，羽足和脚爪可见。
- `06-observation.webp`：岩台上的幼鸟。成年雕鸮与两只绒羽幼鸟停留在宽阔岩台。

## 封面验收

源图与运行 WebP 为 1536×1024，已检查完整源图与原始分辨率运行封面。完整主体边界 `{"left": 850, "top": 60, "right": 1400, "bottom": 885}` 包含可见的冠羽或角盔、嘴、身体、脚趾与尾端。主体大小为 550×825 源像素，中心位于源宽的 73.2%。左侧 40% 留给页面文字。新物种无旧封面。

focalPoint：`{"x":0.7,"y":0.5}`。轮播使用现有 hero-subject-frame，以完整主体边界适配同一封面；不增加设备专用图片。

运行封面 SHA-256：`ebb530521ed6c6d8dd24e16a2fae6a1b311101ea3ddad1489a40ec6302ea9fe3`。

按当前 CSS 的六个端点检查：settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。动画只改变透明度，几何相同。下表采用未取整的 CSS 像素计算，主体与视口、文字和面板至少相距 24 px。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 117.33×176.00 | 101.33 | 48.00 | 40.00 | Pass |
| 390×760 | 117.33×176.00 | 136.33 | 48.00 | 40.00 | Pass |
| 1366×768 | 285.33×428.00 | 96.00 | 188.49 | 48.00 | Pass |
| 1920×900 | 373.33×560.00 | 96.00 | 288.53 | 48.00 | Pass |
| 2560×900 | 373.33×560.00 | 96.00 | 454.93 | 48.00 | Pass |
| 3840×900 | 373.33×560.00 | 96.00 | 787.73 | 48.00 | Pass |

已用静态几何合成图复核完整主体与文字、面板的区域关系；合成图用于检查布局边界，不作为浏览器截图或字体排版验收。原始分辨率封面与图集联系表用于检查外形、颜色、动作和裁边。

## 压缩与哈希

使用 `npm run convert:webp` 转换并验证解码、尺寸；保留六张 WebP。下表的源哈希记录本次最终 PNG 输入，临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `f734976c2fd228e55ae95978b39170228caea29e0228c9778b273721cf6d83a8` | `ebb530521ed6c6d8dd24e16a2fae6a1b311101ea3ddad1489a40ec6302ea9fe3` |
| 02 | `2c244181de5d3fe55a83ab101b1338ef0ca01f19f2ce5e46594e2161e6ddf1e9` | `c98b25b66bc113cd0c61864356d3b46f1aae023824aa9e43f7d4e43d221f2182` |
| 03 | `03157e2aa3a2d71214ce1a3ee8d86db9a671d4d6c7da6f8a65ba56957c83ab71` | `c6c2414d7386f70a495c6b5236cfc245e357c1aa1133bf35aba124c2e4440184` |
| 04 | `57298814364dffe068cf06475657f4c78bb5f0fe31bac8468777c4f45f7dd532` | `dab1ff6a901bb602654991c39a142a72d80b3a98b79752ebfa61835d7d32ecae` |
| 05 | `367532aaf11519d228879ee89ffafcb771049f7bce1634bc2dd00056a5d09e38` | `c5a1f4c2cc4815c7437755d7510834c166f61f0b1f525f823437d1ff07910560` |
| 06 | `e23883bf8cbc1eed87585157138b5a398128cf9f1ee7822699b17ba1b4843a91` | `b329cfd91bb37617b45250299bfc0a4494c100ad8f08dc5b96751bb5223ec221` |

## 仓库验证

2026-09-14：30 张 WebP 的数量、1536×1024 尺寸、解码和独立哈希通过检查，本批五物种身份与内容测试通过。轮播 227 项通过，包含本批五个完整主体案例，覆盖六视口与六动画端点。已检查源图、原始分辨率运行封面、运行图集联系表与静态几何合成图。类型检查、生产构建及三项生产子路径/数据还原测试通过；分类浏览、物种列表、图片转换共 25 项通过。

全量分类测试 182 项中 108 通过、74 失败；失败名单与修改前基线相同，均为既有图片验收哈希问题，本批未新增失败。临时 PNG 已清理，生成工具目录原件保留。未启动 GUI 或无头浏览器。
