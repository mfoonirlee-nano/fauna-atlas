# Long-tailed Chinchilla image set

2026-09-10 使用内置 image_gen 生成六张 1536 × 1024 图片。最终运行资产保存在 `public/images/species/long-tailed-chinchilla/`，完整提示见 [prompts.json](./prompts.json)。这些图片是 AI 生成科学情景重建，不代表实拍地点或野外观察记录。

## 内容依据

- [Smithsonian National Zoo — 长尾毛丝鼠分类、体型与野生生活](https://www.nationalzoo.si.edu/animals/long-tailed-chinchilla)
- [San Diego Zoo — 毛丝鼠尘浴与两种毛丝鼠的区别](https://animals.sandiegozoo.org/animals/chinchilla)
- [Smithsonian National Zoo — 长尾毛丝鼠保护](https://www.nationalzoo.si.edu/animals/long-tailed-chinchilla#conservation)
- [San Diego Zoo — 长尾与短尾毛丝鼠全球等级](https://animals.sandiegozoo.org/animals/chinchilla)

访问日期：2026-09-10。Smithsonian 支持 Chinchilla lanigera 的分类、智利原生范围、身体与尾长分列、夜行及植物食性；San Diego Zoo 支持尘浴行为和全球 EN。身体长度 23–36 厘米明确不含尾，不放入 adultLengthCm 全长比较；不采用两种毛丝鼠混合的海拔范围。尘浴两图是独立姿势重建，并非同一个体的连续实拍。饲养数量不用于推断野生保护状态；未核实评估日期和全球趋势。

## 图集

- `01-cover.webp`：环境封面。
- `02-observation.webp`：大耳朵和毛尾巴。
- `03-observation.webp`：先把身体侧过来。
- `04-observation.webp`：在细尘里滚一滚。
- `05-observation.webp`：前脚抱着草茎。
- `06-observation.webp`：岩缝旁的住处。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1110, "top": 307, "right": 1290, "bottom": 420}`，包括长胡须、双耳、躯干、可见足趾和蓬松尾毛外缘。边界中心位于源宽度的 78.1%，左 40% 为环境背景，动物与源图边缘之间保留背景。focalPoint 为 `{"x": 0.84, "y": 0.34}`。

运行封面 SHA-256：`8fb409e2c7314ba1cfdc084a5a62e496b9b24db0b51158dae53a71c66c0db36a`。

初版胡须边界未通过桌面文字间距检查；使用内置工具把完整动物右移，再重新量取含胡须的边界。编辑提示保存在 prompts.json 的 coverEdits。

已按原始分辨率静态检查源封面与最终 WebP。封面采用环境远景，外形细节由详情图集呈现。图中遮挡的附肢不补计为可见部分，也不把生成图用于计量、精确趾数或精细解剖证明。

下表按当前 CSS 的 object-fit、object-position 和动画变换计算完整主体到视口边缘、文字及控制面板占位的最小间距，单位为 CSS 像素。每项至少 24 像素。`tests/hero-carousel.test.mjs` 绑定运行哈希、完整主体边界及全部尺寸和动画端点；检查过程不使用浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 39.85 | Pass 33.77 | Pass 32.66 | Pass 37.57 | Pass 36.05 | Pass 36.95 |
| 390x760 | Pass 39.85 | Pass 33.77 | Pass 36.05 | Pass 37.57 | Pass 36.05 | Pass 37.57 |
| 1366x768 | Pass 104.99 | Pass 107.35 | Pass 106.47 | Pass 105.07 | Pass 94.45 | Pass 105.88 |
| 1920x900 | Pass 164.20 | Pass 166.37 | Pass 165.56 | Pass 165.01 | Pass 165.56 | Pass 165.01 |
| 2560x900 | Pass 134.27 | Pass 135.24 | Pass 134.87 | Pass 134.63 | Pass 134.87 | Pass 134.63 |
| 3840x900 | Pass 189.00 | Pass 193.22 | Pass 196.93 | Pass 73.87 | Pass 73.51 | Pass 199.40 |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本批源图>`，由 cwebp q82、m6 输出 WebP，转换脚本验证解码和尺寸。未使用 TinyPNG，不重复压缩已接受的 WebP。生成源图逐张静态检查；运行图通过静态联系表核对画面、颜色与图注，封面另按原始分辨率检查。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `038696b940a5b19d8153e7835b80b4ab259b11971c43423e8a48af7651708747` | `8fb409e2c7314ba1cfdc084a5a62e496b9b24db0b51158dae53a71c66c0db36a` |
| 02 | `fb84737cc372b3147c7022875d218cbb68845d4a53a65081bf9ccb1a3bda7aed` | `5b3905285d777fd5c43fbcf25362f109f6d28c913b21db7a08de5b41165d224f` |
| 03 | `b73ea9c1df7a741a2b9bf2af26cbe8ab126b1e34f02164a7b987db89466c06c1` | `5b3d5bebc14ecf0e3b579fdc061ae28f3cef03f8095923a459020c2662df21d4` |
| 04 | `5f2a3f7cbf9762e2a088389a3f0a40e2919cfa7023cb1b57c0eac156580a0694` | `ecdc341bc25407a161f8b99d72f8e7ab59c5d66d38a3407f8a8d0196f72b584a` |
| 05 | `fd531712041abb67a35b3b5c7e52d8c89e9a0829e399e8df3103a9b6f05e6cbf` | `b1c5acc428970e8c82d460380846b6caddb65297b6c36cce8b76ae4bb93bcb4e` |
| 06 | `8421a10d7fc22c185eb7d3ae79cf81cf9834dc067b86a124dc41edffdd7cb60f` | `595a66dc3e199cd9536cff5e63cd4e723aa9dc418d47b93c1923a71275c9eff4` |

## 仓库验证

已通过类型检查、`npm test` 全部 221 项测试及其包含的生产构建与子路径资源验证。封面回归覆盖上述全部视口与动画端点，运行图均已静态检查。已移除本批临时 PNG，只保留运行 WebP、提示词和哈希记录。
