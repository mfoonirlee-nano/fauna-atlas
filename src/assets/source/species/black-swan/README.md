# Black Swan image set

2026-09-17 使用内置 image_gen 逐张生成，一张封面和五张图库图。完整提示见 [prompts.json](./prompts.json)。运行文件位于 `public/images/species/black-swan/`。

资料核验与分类取舍见[本批核验记录](../../../../../docs/research/five-animals-blue-tit-to-alligator-2026-09-17.md)。

## 图库

- `02-observation.webp`：红嘴和长脖子。
- `03-observation.webp`：黑翅膀里的白羽毛。
- `04-observation.webp`：伸长脖子吃水草。
- `05-observation.webp`：灰色的小天鹅。
- `06-observation.webp`：整理羽毛。

## 封面验收

首次收录，无旧运行封面。源 PNG 与运行 WebP 均为 1536×1024，按原始分辨率目视检查。完整主体边界为 `{"left": 816, "top": 57, "right": 1475, "bottom": 964}`，大小 659×907 像素，中心位于源宽 74.6%。边界包含嘴或吻端、头顶、可见脚趾、翅缘和尾端；自然遮挡部分不补画。主体四周留有背景，左 40% 为环境。

focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`00e777b0b558ae10fc848a04e77c19850678bb06d04791a4db00b392e3d3c5fd`。首页与物种档案共用此封面。

按 2026-09-16 全幅铺满规则检查六个视口：settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 均覆盖整个 hero。动画端点分别采用 1、1.04、1.025、1.015、1.025、1.015 倍缩放；动画终点恢复 1 倍或淡出。边缘裁切是现有布局行为，不声称移动端或宽屏中全身可见，不沿用旧版 24 px 全身安全区结论。主体大小为裁切前投影尺寸。

| 视口 | settled 主体大小（CSS px） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 489.10×673.16 | Pass |
| 390×760 | 489.10×673.16 | Pass |
| 1366×768 | 586.06×806.62 | Pass |
| 1920×900 | 823.75×1133.75 | Pass |
| 2560×900 | 1098.33×1511.67 | Pass |
| 3840×900 | 1647.50×2267.50 | Pass |

## 图像记录与限制

原始封面 PNG 与运行 WebP 已按原始分辨率检查；图库以转换前后联系表检查。AI 图片为科学情景重建，不是实拍或同一个体的连续动作记录。不同照片不作等比例比较；局部图片可裁切身体，脚趾自然遮挡不用于计数。提示词描述期望场景，验收以最终画面为准。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `4f6eea79bb3e3c8e40a5ebe8048d80e079efc8438cc7ec5cd6aaa9b26f6253d4` | `00e777b0b558ae10fc848a04e77c19850678bb06d04791a4db00b392e3d3c5fd` |
| 02 | `c5d1d86ad32e9e8202e4fea00d4aeb19c8215eedd095a2252b67fa5d2a3ad6ef` | `4df52b6118c63e592f90e6be1664f23c90ddb2b849bc73811cd6f80fa37aba4f` |
| 03 | `d58376c560319477a0598f6712bf0716a172f6e17e587b3220e89b9779a5f890` | `0bc28c0df1850deeed5572978470d811abd6022c837d9f82b300e89b1d182dae` |
| 04 | `0f6690eb2e471b0bbe955c6db2cfacf7042cee369dfc1b35d9d0b9cfd1d14f4e` | `d4d78a80cd48277db8711cc4b25e0a17552e042d0e8eaff92781f558607e683d` |
| 05 | `ccd0f56cf441e2b2a23067357f5f3cb99ef8633a1d669cf06a522c0a6c7b3a8b` | `c81d33c28780c81e39fe49fa16846dc38b8a93828fc3dc574421d2ad0b075edc` |
| 06 | `ccd03a80ee1397d9ed86dc16dbaa7968acdc6cac737fce6f455e689feb3b4a5e` | `16f3b461a59b3a6a13ae73a0eba5f9b18e3ff0cc538d341fb72ca14adebf44d1` |

2026-09-17：生成、目视检查及当前全幅 hero 覆盖验收完成。分类与档案测试 192 项、轮播测试 282 项、图片转换测试 1 项、构建及子路径测试 3 项通过，类型检查通过。未启动浏览器。验收后删除工作区临时 PNG，仅保留六张运行 WebP 和提示词、哈希记录。
