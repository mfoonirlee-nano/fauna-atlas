# European Badger image set

2026-09-16 使用内置 image_gen 制作。最终提示见 [prompts.json](./prompts.json)，运行图片位于 `public/images/species/european-badger/`。每种保留一张封面和五张图集。

资料与分类口径见[五物种资料核验](../../../../../docs/research/five-animals-wolverine-to-pygmy-hippo-2026-09-16.md)。未核实独立红色名录评估日期，assessedYear 留空。

## 图集

- `02-observation.webp`：脸上的黑白条纹。
- `03-observation.webp`：前爪掘土。
- `04-observation.webp`：落叶下面找食物。
- `05-observation.webp`：洞口在哪里。
- `06-observation.webp`：短腿和短尾巴。

## 封面验收

这是首次收录，无旧运行封面可比较。源 PNG 与运行 WebP 均为 1536x1024；完整主体目测边界为 `{'left': 655, 'top': 245, 'right': 1430, 'bottom': 785}`，大小 775x540 源像素，主体中心位于源宽 67.9%。边界包含可见口鼻、耳尖、爪端、尾巴或鳍端；自然遮挡的部分不补画。左 40% 保留环境，完整主体与源图边缘有背景间隔。

focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`8f684a5b0112a7c24a6ce07596c4919bdaa43c82fbab05067590c93ad57ea44c`。首页轮播与档案共用此封面，以 coverSubjects 的完整主体边界拟合安全区。

静态几何检查覆盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。当前主体动画只改变透明度，六端点几何相同。间距单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 252.59x176.00 | 33.70 | 48.00 | 40.00 | Pass |
| 390x760 | 252.59x176.00 | 68.70 | 48.00 | 40.00 | Pass |
| 1366x768 | 559.68x389.97 | 72.00 | 51.32 | 67.01 | Pass |
| 1920x900 | 803.70x560.00 | 82.95 | 73.35 | 48.00 | Pass |
| 2560x900 | 803.70x560.00 | 96.00 | 239.75 | 48.00 | Pass |
| 3840x900 | 803.70x560.00 | 96.00 | 572.55 | 48.00 | Pass |

## 目视检查与限制

源封面与运行 WebP 按原分辨率检查，观察图逐张检查源图并用运行图联系表复核。六视口以当前 WebP 制作静态安全区图检查，未启动浏览器。图片为 AI 生成科学情景重建，不代表实拍或同一个体的连续行为；遮挡的爪趾不用于数数。

## 压缩与哈希

使用 npm run convert:webp 首次转换并验证解码和尺寸，未重复压缩运行 WebP。临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `18cc8ff48dd0beceafa0fac432aaed68efd05594e637093700fdfd73375ccb3f` | `8f684a5b0112a7c24a6ce07596c4919bdaa43c82fbab05067590c93ad57ea44c` |
| 02 | `c67080d14bc5141df5ed3147f5b56e6dbd77fdf37619d5ac42344d266e3671ac` | `94f0f6262543935d00892b401d8d965731b14ae1f7d7ed3638531ab79e6b6be0` |
| 03 | `0ac4b4423f163ac568b559f4bd8d9ce87f50d58745cd52108acc8a7861e0e2d5` | `81acc8b1db5f41398b7009e9c6cfdb670953714e26e8578a5ca18922dee0a37f` |
| 04 | `5a74eab0e1e8738fe0fc86b27a8ab43789f9a1ce5f7f11b4ac2daef440953b24` | `ecf94a3b86dd36a4e84d15c62b7a3c2935ad99a1371d495d3ef7fc835a0a6e6b` |
| 05 | `9ca386dc282a249e90786eef8dbd2768acf4efc1ba2c6497dd25e9cd4f0d57fc` | `cf8f364562dd3836e669cda8c528043db28a519e9aae3b36ac72734cb49d5763` |
| 06 | `4e2c10bf31470aebf939257ce19f7ddf42a11038b4af838a591b459643df46dd` | `fe5bb982e2bc07dbe844e21a0b42ecf14a7870e7652b7019275e02c83e90fb75` |

## 最终验证

2026-09-16：分类与档案测试 188 项、轮播测试 262 项、图片转换测试 1 项、构建与子路径测试 3 项通过。生产构建含 TypeScript 检查；压缩目录还原与完整档案数据无损检查通过。首页脚本为 343.09 kB，低于 350 kB 限制。30 张运行图片的尺寸、解码、独立哈希和提示词文件名已核对；本物种六张图片齐全。源图、运行图与六视口静态安全区检查完成。
