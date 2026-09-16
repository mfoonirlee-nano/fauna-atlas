# Sperm Whale image set

2026-09-16 使用内置 image_gen 制作。最终提示见 [prompts.json](./prompts.json)，运行图片位于 `public/images/species/sperm-whale/`。每种保留一张封面和五张图集。

资料与分类口径见[五物种资料核验](../../../../../docs/research/five-animals-wolverine-to-pygmy-hippo-2026-09-16.md)。未核实独立红色名录评估日期，assessedYear 留空。

## 图集

- `02-observation.webp`：大头与窄下颌。
- `03-observation.webp`：回到海面呼吸。
- `04-observation.webp`：向深处潜下去。
- `05-observation.webp`：小胸鳍与褶皱皮肤。
- `06-observation.webp`：幼鲸跟在身边。

## 封面验收

这是首次收录，无旧运行封面可比较。源 PNG 与运行 WebP 均为 1536x1024；完整主体目测边界为 `{'left': 695, 'top': 370, 'right': 1490, 'bottom': 575}`，大小 795x205 源像素，主体中心位于源宽 71.1%。边界包含可见口鼻、耳尖、爪端、尾巴或鳍端；自然遮挡的部分不补画。左 40% 保留环境，完整主体与源图边缘有背景间隔。

focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`9201a095b587accd39db6b6ee0f2e8ce255a77252bbef95f650812d1a92eb0af`。首页轮播与档案共用此封面，以 coverSubjects 的完整主体边界拟合安全区。

静态几何检查覆盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。当前主体动画只改变透明度，六端点几何相同。间距单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 272.00x70.14 | 24.00 | 100.93 | 92.93 | Pass |
| 390x760 | 342.00x88.19 | 24.00 | 91.91 | 83.91 | Pass |
| 1366x768 | 559.68x144.32 | 72.00 | 51.32 | 189.84 | Pass |
| 1920x900 | 825.60x212.89 | 72.00 | 62.40 | 221.55 | Pass |
| 2560x900 | 1132.80x292.11 | 72.00 | 75.20 | 181.95 | Pass |
| 3840x900 | 1747.20x450.54 | 72.00 | 100.80 | 102.73 | Pass |

## 目视检查与限制

源封面与运行 WebP 按原分辨率检查，观察图逐张检查源图并用运行图联系表复核。六视口以当前 WebP 制作静态安全区图检查，未启动浏览器。图片为 AI 生成科学情景重建，不代表实拍或同一个体的连续行为；遮挡的爪趾不用于数数。

## 压缩与哈希

使用 npm run convert:webp 首次转换并验证解码和尺寸，未重复压缩运行 WebP。临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `9a28737548ad0641409ab672e2aa48f7a94460b00a69b46ee3b74790e0706a5d` | `9201a095b587accd39db6b6ee0f2e8ce255a77252bbef95f650812d1a92eb0af` |
| 02 | `f2e228fe35b1fe153c14a3660daa055c7f243abf3ce30be24fa7662cb1f0dda9` | `6e44bda3e44ebbe30f79347c2153fd9c8df488b5b238cf44f4f85e1022318720` |
| 03 | `0dd202b13a9d64137828ea9fb8bfcb64dbc3c63b0d93df8206dc3a281eab1dd5` | `cf3186b613f3a69b01fc65635834ca8b26922f4f7d6d6ca0c115df2df87e88b8` |
| 04 | `3f543fcf5e17892ce63d5606f88d5cdc717b910c373e3f35826548f1d296cf88` | `72ac3e24e923148d2cefa25da5996af46f3cd520bac030c74eeddbc2f6550e9a` |
| 05 | `13079041d97ecdf27167394d8fd690eeb959a63bac17d21768d9e88a3bdc0f8d` | `5090821accfb107e2cb723374de9fe0895943693c836b3509c5451f3fcdf978c` |
| 06 | `82681ce457b9ac11a2af28a996ec2a3ed24499f39fed8e212f1cc1cdf0cdb218` | `f8a068f98093ecd7056902a0318bac9b73f9b5f69090d6ae766ac3ab2fef2792` |

## 候选与修正

首批候选的主体越过左侧 40% 边界；重试候选的尾鳍方向不清楚。最终以水平尾鳍的略俯视角度重建，并调整位置，目视复核头部、胸鳍、尾柄和尾鳍完整边界。此前候选不进入运行图片集。图集 05 为胸鳍与皮肤局部观察，不用于展示完整尾部。

## 最终验证

2026-09-16：分类与档案测试 188 项、轮播测试 262 项、图片转换测试 1 项、构建与子路径测试 3 项通过。生产构建含 TypeScript 检查；压缩目录还原与完整档案数据无损检查通过。首页脚本为 343.09 kB，低于 350 kB 限制。30 张运行图片的尺寸、解码、独立哈希和提示词文件名已核对；本物种六张图片齐全。源图、运行图与六视口静态安全区检查完成。
