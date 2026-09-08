# Bobbit Worm image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/bobbit-worm/`。

## 提示词与资料

初始生成、封面编辑和最终采用版本见 [prompts.json](./prompts.json)。资料访问日期：2026-09-08。

- [OBIS — 博比特虫分类归属](https://obis.org/taxon/130053)
- [Lachat 与 Haag-Wackernagel 2016 — 鱼类围攻与博比特虫捕食](https://www.nature.com/articles/srep33187)
- [Zanol 等 2021 — 矶沙蚕目系统分类与多样性](https://www.mdpi.com/1424-2818/13/2/74)
- [澳大利亚博物馆 — 多毛类的身体结构](https://australian.museum/learn/animals/worms/polychaetes/)
- [SeaLifeBase — Eunice aphroditois 全球评估状态](https://www.sealifebase.ca/summary/SpeciesSummary.php?id=39505&lang=English)

本页采用 OBIS 分类。2016 年行为论文的鉴定名称保留为 Eunice aphroditois；2021 年分类综述指出，多海区的大型矶沙蚕记录需要复核。因此只列明研究地点，未据历史巨型个体填写体长或完整分布。SeaLifeBase 收录 NE，趋势未知。

## 视觉限制

封面采用全身露在沙面的外形重建，伏击时大部分身体埋在海床的姿态见 03、04。图集头部附肢存在透视重叠和生成偏差，不能用来核对附肢数、颚器或鉴定物种；体节数、刚毛、金属色泽和虫鱼比例经过简化。生境洞口未鉴定到建造者。 全部图片标注 AI 生成科学情景重建，不对应定位野外照片。压缩会损失细纹与暗部渐变。

## 压缩与静态检查

TinyPNG 已压缩全部六张源 PNG，随后通过仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查生成图、压缩后的封面源 PNG 和全部运行 WebP，确认完整轮廓与图集场景；未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.88, "y": 0.35}`。原始分辨率目测的保守全主体边界为 `{"left": 1070, "top": 326, "right": 1267, "bottom": 438}`，包括全部可见外缘附肢与尾端。主体中心位于源宽度的 76.1%，左侧 40% 为安静背景，主体四周保留真实环境。

运行封面 SHA-256：`b437d90d4330ffcd7905c56212a9820c38f318453ef104be71de2a9c1c6d50b7`。

`tests/hero-carousel.test.mjs` 绑定上述哈希和边界。`npm run test:carousel` 验证完整主体与视口边缘、正文和轮播面板保持至少 24 CSS 像素间距，结果如下。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `df73ef621c89fe91916eba313b5841d7226d6416336bcce4bf433d79ac276ebc` | `b437d90d4330ffcd7905c56212a9820c38f318453ef104be71de2a9c1c6d50b7` |
| 02 | `7763dc15efb047fe222ce4ea036db59e17ab325e5b22c2cea8a12f3bdcce5688` | `4a135f8a337d3399cbd0327d81c1c9831134e3ed71ffd6874788e288f29cc065` |
| 03 | `6e99cf05fd5e1eddafbc94644e189e3721bfe639f85ae557ebe16aa15fa0fd00` | `4a63a4ebfbed718a3a36b2c9238c92c5ae4503c74ba1c42da34fafdfd6894342` |
| 04 | `ed8b8ad4dd4a985bb4f25df0c376602e0b47d334f7405a87b7bf8bc69877f495` | `0d80dddba862ceb23d3d9c9173dafec4476d5c1dfb175779011dbfa922896b51` |
| 05 | `e6b22fd869166f4190c5b00ff395662a8ddd058d36e01c52499f6849fadfc033` | `3240788afffd1490333454866a0789a4f15bc2e80c6bd805ec9bcc10a14d7065` |
| 06 | `512e2f101d6075d1cf598e9d8658521ec7241089b635b291364c8b68144040f5` | `a3205023e259c2d09fa8bd81a4a54aeb67cf8bd65cdf0252d1625d682c4d9da9` |

## 验证结果

`npm test` 全部 182 项通过，覆盖分类计数、三个新分类分支、18 张图片及其源文件的尺寸和哈希、封面完整主体与子路径资源。生产构建与 TypeScript 检查通过。构建仍提示现有主代码块超过 500 kB；未启动 GUI 或无头浏览器。
