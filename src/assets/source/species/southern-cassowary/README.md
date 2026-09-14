# Southern Cassowary image set

2026-09-14 使用内置 image_gen 制作封面与五张观察图。提示词及修改记录见 [prompts.json](./prompts.json)。

运行资产：`public/images/species/southern-cassowary/`。AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。

## 内容依据

- [BirdLife Australia：双垂鹤鸵生态与分布](https://birdlife.org.au/bird-profiles/southern-cassowary/)
- [BirdLife Australia：全球保护等级](https://birdlife.org.au/bird-profiles/southern-cassowary/)
- [Australian Museum：角盔、脚趾与繁殖](https://australian.museum/learn/animals/birds/southern-cassowary/)
- [NCBI：鹤鸵属所属鹤鸵目](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?name=Casuarius)
- [Queensland Government：雨林、道路与犬只威胁](https://www.qld.gov.au/environment/plants-animals/conservation/threatened-species/featured-projects/southern-cassowary)

分类口径、来源差异和字段限制见 [五鸟资料核验](../../../../../docs/research/five-birds-2026-09-14.md)。来源可确认全球 LC；独立评估日期及全球趋势未核实，未填入 assessedYear，trend 使用 unknown。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：角盔和两条肉垂。双垂鹤鸵头颈近景，角盔与两条红色肉垂完整可见。
- `03-observation.webp`：寻找地上的果实。双垂鹤鸵低头拾取雨林落果。
- `04-observation.webp`：走过雨林的双腿。双垂鹤鸵从蕨类植物旁走过，粗壮双腿清楚可见。
- `05-observation.webp`：爸爸带着条纹幼鸟。雄性双垂鹤鸵带着两只纵纹雏鸟在林地行走。
- `06-observation.webp`：地面巢里的爸爸。雄性双垂鹤鸵伏在树根旁的地面巢中孵卵。

第六图原始候选的卵色偏浅，已用内置 image_gen 改为绿色。孵卵与带雏场景均按雄鸟行为设计；性别依据场景设计，不凭外形独立判断。

## 封面验收

源图与运行 WebP 为 1536×1024，已检查完整源图与原始分辨率运行封面。完整主体边界 `{"left": 755, "top": 18, "right": 1414, "bottom": 980}` 包含可见的冠羽或角盔、嘴、身体、脚趾与尾端。主体大小为 659×962 源像素，中心位于源宽的 70.6%。左侧 40% 留给页面文字。新物种无旧封面。

focalPoint：`{"x":0.7,"y":0.5}`。轮播使用现有 hero-subject-frame，以完整主体边界适配同一封面；不增加设备专用图片。

运行封面 SHA-256：`daf1f569c1b850bfb93cb1643be8c2d29af4aaa8365715a01e0ca0d8c7092563`。

按当前 CSS 的六个端点检查：settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。动画只改变透明度，几何相同。下表采用未取整的 CSS 像素计算，主体与视口、文字和面板至少相距 24 px。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 120.57×176.00 | 99.72 | 48.00 | 40.00 | Pass |
| 390×760 | 120.57×176.00 | 134.72 | 48.00 | 40.00 | Pass |
| 1366×768 | 293.19×428.00 | 96.00 | 184.56 | 48.00 | Pass |
| 1920×900 | 383.62×560.00 | 96.00 | 283.39 | 48.00 | Pass |
| 2560×900 | 383.62×560.00 | 96.00 | 449.79 | 48.00 | Pass |
| 3840×900 | 383.62×560.00 | 96.00 | 782.59 | 48.00 | Pass |

已用静态几何合成图复核完整主体与文字、面板的区域关系；合成图用于检查布局边界，不作为浏览器截图或字体排版验收。原始分辨率封面与图集联系表用于检查外形、颜色、动作和裁边。

## 压缩与哈希

使用 `npm run convert:webp` 转换并验证解码、尺寸；保留六张 WebP。下表的源哈希记录本次最终 PNG 输入，临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `0dc011a503ddb7133dd34719c77b77883654f15830f1ffbaeaf5e207454ea573` | `daf1f569c1b850bfb93cb1643be8c2d29af4aaa8365715a01e0ca0d8c7092563` |
| 02 | `8dbcfbae3f2b07f466237dc956e3134a7bad3f74db2f01b44b18947b7b5c8e29` | `70a6b0475d9034baff4297ba9ff9e78bbc657c20fa0f7acb32bd3789badedb70` |
| 03 | `d15bd9b33e677bb23574815a3b075b11833330c2c6abbbdc00ff65ebe85c21ae` | `64aa19fe1689a69b7c756277a679b720a5c092cf66549b64054ff29c26be7590` |
| 04 | `7c1db0a5c31c6e79200514da4d68d86d7d6fe4292cfcff860e95a2abe6471f7e` | `42e8b421c5f012ef16b23dba2259604ae06364ee3748f506baea670bede314a6` |
| 05 | `653a730fbc5b8663ded3fa83f990291f69cc6fc124f201f8a0d09ee7ced834fc` | `650b76c7fd05b1790f7b2a70d17b5a72b3ef51e26b334f14b086552b062dd082` |
| 06 | `1a5dfa20ca61ff7b9551b9ceb77f00f5fa6566dbfac977c41ded0c9a2fe72891` | `250f19dc9ddbde56b816eb8a3b2c113e520f0f120446dea1c1d548f8566e75e6` |

## 仓库验证

2026-09-14：30 张 WebP 的数量、1536×1024 尺寸、解码和独立哈希通过检查，本批五物种身份与内容测试通过。轮播 227 项通过，包含本批五个完整主体案例，覆盖六视口与六动画端点。已检查源图、原始分辨率运行封面、运行图集联系表与静态几何合成图。类型检查、生产构建及三项生产子路径/数据还原测试通过；分类浏览、物种列表、图片转换共 25 项通过。

全量分类测试 182 项中 108 通过、74 失败；失败名单与修改前基线相同，均为既有图片验收哈希问题，本批未新增失败。临时 PNG 已清理，生成工具目录原件保留。未启动 GUI 或无头浏览器。
