# Bald Eagle image set

2026-09-17 使用内置 image_gen 逐张生成，一张封面和五张图库图。完整提示见 [prompts.json](./prompts.json)。运行文件位于 `public/images/species/bald-eagle/`。

资料核验与分类取舍见[本批核验记录](../../../../../docs/research/five-animals-blue-tit-to-alligator-2026-09-17.md)。

## 图库

- `02-observation.webp`：白色羽毛的头。
- `03-observation.webp`：展开宽翅膀。
- `04-observation.webp`：脚下的一条鱼。
- `05-observation.webp`：幼鸟还没有白头。
- `06-observation.webp`：树上的大巢。

## 封面验收

首次收录，无旧运行封面。源 PNG 与运行 WebP 均为 1536×1024，按原始分辨率目视检查。完整主体边界为 `{"left": 904, "top": 61, "right": 1428, "bottom": 829}`，大小 524×768 像素，中心位于源宽 75.9%。边界包含嘴或吻端、头顶、可见脚趾、翅缘和尾端；自然遮挡部分不补画。主体四周留有背景，左 40% 为环境。

focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`85f607b3df1a58f834913d1aba8efe48dd45c8e10f6e1624be0f30196be617ef`。首页与物种档案共用此封面。

按 2026-09-16 全幅铺满规则检查六个视口：settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 均覆盖整个 hero。动画端点分别采用 1、1.04、1.025、1.015、1.025、1.015 倍缩放；动画终点恢复 1 倍或淡出。边缘裁切是现有布局行为，不声称移动端或宽屏中全身可见，不沿用旧版 24 px 全身安全区结论。主体大小为裁切前投影尺寸。

| 视口 | settled 主体大小（CSS px） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 388.91×570.00 | Pass |
| 390×760 | 388.91×570.00 | Pass |
| 1366×768 | 466.01×683.00 | Pass |
| 1920×900 | 655.00×960.00 | Pass |
| 2560×900 | 873.33×1280.00 | Pass |
| 3840×900 | 1310.00×1920.00 | Pass |

## 图像记录与限制

原始封面 PNG 与运行 WebP 已按原始分辨率检查；图库以转换前后联系表检查。AI 图片为科学情景重建，不是实拍或同一个体的连续动作记录。不同照片不作等比例比较；局部图片可裁切身体，脚趾自然遮挡不用于计数。提示词描述期望场景，验收以最终画面为准。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `1c849abfb01ee79b0ff9cdc0708e1ef033f26aa9b72f10b9d7458935355c884b` | `85f607b3df1a58f834913d1aba8efe48dd45c8e10f6e1624be0f30196be617ef` |
| 02 | `1b8afcd629beb13c6e5ed4127764607e699099a59ffaef11764c62c504a79528` | `5f692b87e35dbcdb4b9599e5143ee3d3752ff83d1e8f6dbfda44fb38ac46e509` |
| 03 | `2d4dbe50cd44bb3ffeb80b39790c94367eab2bb8dbd054d1bfc69120093176c9` | `a523d81a342cd616024b20457346a9cf5d60283b5ab426a3fd4f9092b01e3bbf` |
| 04 | `30eeff9c68c17c95ffc9c64f6ca1e0bd87a49c16a252a9f7bd209bce1e14583c` | `6c4a44ecedc2558cbe4cdb5bfb9e12feb274ce6ea8f712694dc029613d0c078a` |
| 05 | `7c244b1c3d7a724c4ffdeb0067ac19f67bb4620571d6f12f9a1c2ce6ac04c130` | `1af0c18ca37a8689d7cd5bb187012d3586d99743cc7bb87612d7d5fac4e68f7e` |
| 06 | `eaaae3e16e6cfe6645c21d5b11c51c2d5569e397a04b66a630a7b6f500694904` | `8041b1b91f73f644846df594c4bdfedbe7386edd6996bd778f69d994bb43f4f1` |

2026-09-17：生成、目视检查及当前全幅 hero 覆盖验收完成。分类与档案测试 192 项、轮播测试 282 项、图片转换测试 1 项、构建及子路径测试 3 项通过，类型检查通过。未启动浏览器。验收后删除工作区临时 PNG，仅保留六张运行 WebP 和提示词、哈希记录。
