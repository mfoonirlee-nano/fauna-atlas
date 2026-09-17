# American Alligator image set

2026-09-17 使用内置 image_gen 逐张生成，一张封面和五张图库图。完整提示见 [prompts.json](./prompts.json)。运行文件位于 `public/images/species/american-alligator/`。

资料核验与分类取舍见[本批核验记录](../../../../../docs/research/five-animals-blue-tit-to-alligator-2026-09-17.md)。

## 图库

- `02-observation.webp`：眼睛和鼻孔露出来。
- `03-observation.webp`：到岸边晒太阳。
- `04-observation.webp`：长尾巴划水。
- `05-observation.webp`：背上的鳞甲。
- `06-observation.webp`：幼鳄身上的黄条纹。

## 封面验收

首次收录，无旧运行封面。源 PNG 与运行 WebP 均为 1536×1024，按原始分辨率目视检查。完整主体边界为 `{"left": 639, "top": 152, "right": 1470, "bottom": 795}`，大小 831×643 像素，中心位于源宽 68.7%。边界包含嘴或吻端、头顶、可见脚趾、翅缘和尾端；自然遮挡部分不补画。主体四周留有背景，左 40% 为环境。

focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`f6dffe6523576d3de3e9f98421804f07df7210a759c92a902caf5e826f1051d9`。首页与物种档案共用此封面。

首版生成候选的主体边界约为 x=420–1490、y=240–800（1070×560 像素），伸入左侧文字区，未接入运行资源。重新生成后采用上述边界；最终提示保存在 prompts.json。

按 2026-09-16 全幅铺满规则检查六个视口：settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 均覆盖整个 hero。动画端点分别采用 1、1.04、1.025、1.015、1.025、1.015 倍缩放；动画终点恢复 1 倍或淡出。边缘裁切是现有布局行为，不声称移动端或宽屏中全身可见，不沿用旧版 24 px 全身安全区结论。主体大小为裁切前投影尺寸。

| 视口 | settled 主体大小（CSS px） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 616.76×477.23 | Pass |
| 390×760 | 616.76×477.23 | Pass |
| 1366×768 | 739.03×571.83 | Pass |
| 1920×900 | 1038.75×803.75 | Pass |
| 2560×900 | 1385.00×1071.67 | Pass |
| 3840×900 | 2077.50×1607.50 | Pass |

## 图像记录与限制

原始封面 PNG 与运行 WebP 已按原始分辨率检查；图库以转换前后联系表检查。AI 图片为科学情景重建，不是实拍或同一个体的连续动作记录。不同照片不作等比例比较；局部图片可裁切身体，脚趾自然遮挡不用于计数。提示词描述期望场景，验收以最终画面为准。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `a2c0f7b3bb9e92dfdff919240e73d09d9d8fd16c7975fabf7a958ac51028653a` | `f6dffe6523576d3de3e9f98421804f07df7210a759c92a902caf5e826f1051d9` |
| 02 | `a46e981056dedb1d2c0da3cf15c789bd514174855420e3b8aa9496ae47939d24` | `e05e7c95ad941a1592b92d535e518e5fe91ec4c4462749ed320d88cfef1f52bf` |
| 03 | `45eb1d93b96aa38d6b3b62db9dba27c02674873e767b95998a7b0dc1e6dc6c16` | `ee48422819beb4bc0141cb747024bc4b00ef7b5435fad68a941ec6dcb25ad95e` |
| 04 | `636ae25bbf4f528c8582119a7d74bf8bb052755748a5398962d1ea499564f1d5` | `a8b49e64c650c3e82170974eeccad7f638f2da9841da50f05efd417235fd99a2` |
| 05 | `6ddddf3d1fd72a0e2dfb201d853d6199d56d7c408c88685e0abfced5bc99e50f` | `acbdfe54d036f411879cd3f319660eb7ffd6dabf7936dcf27f67b89eb8874fb4` |
| 06 | `b7bcbfe2b05f83b3fe2c929f1a7e9a42c45cc5b8ffa073c006143340ec0c0341` | `5565d1b9ae9ad6ff286d3552903bd6247acf9f87a7b072e87c66d194f55e1682` |

2026-09-17：生成、目视检查及当前全幅 hero 覆盖验收完成。分类与档案测试 192 项、轮播测试 282 项、图片转换测试 1 项、构建及子路径测试 3 项通过，类型检查通过。未启动浏览器。验收后删除工作区临时 PNG，仅保留六张运行 WebP 和提示词、哈希记录。
