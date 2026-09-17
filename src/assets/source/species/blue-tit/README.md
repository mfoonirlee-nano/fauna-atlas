# Eurasian Blue Tit image set

2026-09-17 使用内置 image_gen 逐张生成，一张封面和五张图库图。完整提示见 [prompts.json](./prompts.json)。运行文件位于 `public/images/species/blue-tit/`。

资料核验与分类取舍见[本批核验记录](../../../../../docs/research/five-animals-blue-tit-to-alligator-2026-09-17.md)。

## 图库

- `02-observation.webp`：倒挂着找食物。
- `03-observation.webp`：蓝帽子和白脸颊。
- `04-observation.webp`：嘴边的小虫。
- `05-observation.webp`：树洞旁的小鸟。
- `06-observation.webp`：浅水里的小水花。

## 封面验收

首次收录，无旧运行封面。源 PNG 与运行 WebP 均为 1536×1024，按原始分辨率目视检查。完整主体边界为 `{"left": 808, "top": 136, "right": 1378, "bottom": 706}`，大小 570×570 像素，中心位于源宽 71.2%。边界包含嘴或吻端、头顶、可见脚趾、翅缘和尾端；自然遮挡部分不补画。主体四周留有背景，左 40% 为环境。

focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`e933eb7dacb5e2c9ab3cdd0ef76b70e6a2170686ae58d47fe23d320e90ac3557`。首页与物种档案共用此封面。

按 2026-09-16 全幅铺满规则检查六个视口：settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 均覆盖整个 hero。动画端点分别采用 1、1.04、1.025、1.015、1.025、1.015 倍缩放；动画终点恢复 1 倍或淡出。边缘裁切是现有布局行为，不声称移动端或宽屏中全身可见，不沿用旧版 24 px 全身安全区结论。主体大小为裁切前投影尺寸。

| 视口 | settled 主体大小（CSS px） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 423.05×423.05 | Pass |
| 390×760 | 423.05×423.05 | Pass |
| 1366×768 | 506.91×506.91 | Pass |
| 1920×900 | 712.50×712.50 | Pass |
| 2560×900 | 950.00×950.00 | Pass |
| 3840×900 | 1425.00×1425.00 | Pass |

## 图像记录与限制

原始封面 PNG 与运行 WebP 已按原始分辨率检查；图库以转换前后联系表检查。AI 图片为科学情景重建，不是实拍或同一个体的连续动作记录。不同照片不作等比例比较；局部图片可裁切身体，脚趾自然遮挡不用于计数。提示词描述期望场景，验收以最终画面为准。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `4e7c044a73ea8598666e54fddb05091c53f3d56001d74587bcd1d56621787493` | `e933eb7dacb5e2c9ab3cdd0ef76b70e6a2170686ae58d47fe23d320e90ac3557` |
| 02 | `9a74f053af958226390634e7768189c464977d9d3abc31766ad954e197858f4a` | `9f7e6e87dcfdaf92b845fa3d5b6745c508a24792e7c81107d60bd992c04dad03` |
| 03 | `5cd48d105ac2dc6700512663ea89650c46e44982af4ad85b9205b1566b2108c0` | `6f040e3c955ae47d6a0ef42c342ffadabc59a4199f018c1074bd6602975854f6` |
| 04 | `8d16f5bd58c96b6abfdcf7a1208aa4f0b73496a9f2bec216d7c885859dda8dcc` | `4cee8323b79be9a3d7306553286cf1723810caf3d38b4a8fe9b1d8ca8a810615` |
| 05 | `15d38f4de9eccce5ed58f5f22cc260d8e636c2c44fec0637da36c71fd3057f39` | `807c4bb9d403338080a3a27382b451f0c47e70e9693db6d792e0e5533d4f23bb` |
| 06 | `1a65a122aafe0efe18c46b8fc3cd12a2d600bda176f954d375f40896c2b21ade` | `a8acc1c34500b81f475cc7d555a20eff4f6b6146f276b095f3e5fe6323542381` |

2026-09-17：生成、目视检查及当前全幅 hero 覆盖验收完成。分类与档案测试 192 项、轮播测试 282 项、图片转换测试 1 项、构建及子路径测试 3 项通过，类型检查通过。未启动浏览器。验收后删除工作区临时 PNG，仅保留六张运行 WebP 和提示词、哈希记录。
