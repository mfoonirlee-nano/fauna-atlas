# Australian Zebra Finch image set

2026-09-17 使用内置 image_gen 逐张生成，一张封面和五张图库图。完整提示见 [prompts.json](./prompts.json)。运行文件位于 `public/images/species/zebra-finch/`。

资料核验与分类取舍见[本批核验记录](../../../../../docs/research/five-animals-blue-tit-to-alligator-2026-09-17.md)。

## 图库

- `02-observation.webp`：小脚抓细枝。
- `03-observation.webp`：地上的草籽。
- `04-observation.webp`：两只鸟的脸不同。
- `05-observation.webp`：一起到水边。
- `06-observation.webp`：衔着干草。

## 封面验收

首次收录，无旧运行封面。源 PNG 与运行 WebP 均为 1536×1024，按原始分辨率目视检查。完整主体边界为 `{"left": 824, "top": 80, "right": 1438, "bottom": 834}`，大小 614×754 像素，中心位于源宽 73.6%。边界包含嘴或吻端、头顶、可见脚趾、翅缘和尾端；自然遮挡部分不补画。主体四周留有背景，左 40% 为环境。

focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`48e62b1c1c4553fc157e6782feee14c02d3bc99db0673927c420d6b896406709`。首页与物种档案共用此封面。

按 2026-09-16 全幅铺满规则检查六个视口：settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 均覆盖整个 hero。动画端点分别采用 1、1.04、1.025、1.015、1.025、1.015 倍缩放；动画终点恢复 1 倍或淡出。边缘裁切是现有布局行为，不声称移动端或宽屏中全身可见，不沿用旧版 24 px 全身安全区结论。主体大小为裁切前投影尺寸。

| 视口 | settled 主体大小（CSS px） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 455.70×559.61 | Pass |
| 390×760 | 455.70×559.61 | Pass |
| 1366×768 | 546.04×670.55 | Pass |
| 1920×900 | 767.50×942.50 | Pass |
| 2560×900 | 1023.33×1256.67 | Pass |
| 3840×900 | 1535.00×1885.00 | Pass |

## 图像记录与限制

原始封面 PNG 与运行 WebP 已按原始分辨率检查；图库以转换前后联系表检查。AI 图片为科学情景重建，不是实拍或同一个体的连续动作记录。不同照片不作等比例比较；局部图片可裁切身体，脚趾自然遮挡不用于计数。提示词描述期望场景，验收以最终画面为准。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `49daed1c8d89d258e00a7f44e5f82f1503099ce893077dfbede7592994cfc77c` | `48e62b1c1c4553fc157e6782feee14c02d3bc99db0673927c420d6b896406709` |
| 02 | `e3cc61f8be03ea34b24ffc7facaceed2e40220b38c3de8abed8cd535520b355e` | `e718f809f23b9d608df825e683d44c2e2763d542fe9dba7ecbac013256ad1fed` |
| 03 | `3b33bffe055239e0cf063b40786953810de1ed34718baed5cc11d50b26a2a0d6` | `ec28892c5c5729b36610d20c2c18dc4ea5512f5ade8f386e86f6b14a99cccc1a` |
| 04 | `25afbb682f7c2ebc9dce92935b3a53a974c81596144948e95e172d7ac54e823d` | `7860ed259606a83e29a2ecca5691837fbb892285cf365b6317088bd421432512` |
| 05 | `501e0e09e1c2a381aac1c44262e4e397a5d04d40abee500febc78bfc2387a241` | `27a7bac82632fed6e86793af2e8e5020b7936d746942c85d185e9b966231e1ed` |
| 06 | `fd150956003cf8eaccfa543fe5070bd118185e6131a1c4c94caefaebce72d434` | `68a6769489a039c8c96c393b31fb779613cc31b7e5eba6f852f294c3ba978a77` |

2026-09-17：生成、目视检查及当前全幅 hero 覆盖验收完成。分类与档案测试 192 项、轮播测试 282 项、图片转换测试 1 项、构建及子路径测试 3 项通过，类型检查通过。未启动浏览器。验收后删除工作区临时 PNG，仅保留六张运行 WebP 和提示词、哈希记录。
