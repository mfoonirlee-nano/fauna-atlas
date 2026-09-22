# 叶尾守宫 image set

2026-09-22 使用内置 image_gen 逐张制作一张封面和五张图库图。最终提示词见 [prompts.json](./prompts.json)，事实与保护等级证据范围见[本批核验记录](../../../../../docs/research/todo-cross-group-five-2026-09-22.md)。

## 封面检查

首次收录，没有旧版线上封面。 源 PNG 和运行 WebP 均为 1536×1024。目视完整主体边界为 `(757, 94, 1441, 960)`，主体 684×866 px，水平中心为源宽 71.5%。左侧 40% 为环境背景，完整主体与源图边缘之间保留背景。

已按原始分辨率检查源封面与运行 WebP，并用联系表检查图库。焦点 `{"x":0.7,"y":0.5}`，轮播与物种档案共用 `01-cover.webp`。封面 SHA-256：`336894e22f11d86ea2553ae167558c951cdcaef04f068993960bcbf72d9de910`。

## 六视口与动画

采用 2026-09-16 全幅 object-fit: cover 布局。检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave，缩放为 1、1.04、1.025、1.015、1.025、1.015。逐状态结果见 [hero-acceptance.json](./hero-acceptance.json)。覆盖计算包含焦点与中心缩放，各状态均覆盖画布。

| 视口 | 最终主体 CSS px（裁切前） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 507.66×642.73 | Pass |
| 390×760 | 507.66×642.73 | Pass |
| 1366×768 | 608.30×770.15 | Pass |
| 1920×900 | 855.00×1082.50 | Pass |
| 2560×900 | 1140.00×1443.33 | Pass |
| 3840×900 | 1710.00×2165.00 | Pass |

当前布局允许边缘裁切，移动端和超宽屏不保证全身可见；不沿用旧版 24 px 全身安全区结论。按项目要求未启动浏览器。

## 图像范围

图片为 AI 科学情景重建，不是连续实拍，不用于精确测量或物种鉴定。

| 图 | 源 PNG SHA-256 | 运行 WebP SHA-256 |
| --- | --- | --- |
| 01 | `f295ade6016df997938456621e5a2abc8b7856e7abf506877a5144d188940ea1` | `336894e22f11d86ea2553ae167558c951cdcaef04f068993960bcbf72d9de910` |
| 02 | `c998acc8781b37c70ebe876a575c77a5affbd2babbb3a962046c47afe0b44f53` | `06a0d5e8fa56ed18119461c3735892569e5a37bd7103308897e1db8c0b29e6b4` |
| 03 | `2733a39760cdfbb5502b8a069c4ce3681415536e753c76d05e26ea8ea2432741` | `601cbc9b30ea348e487d9bb0f68c021f392ca5e0bc21f8ae0dbb445f103eb6ce` |
| 04 | `5e6560dc9afa0855efd974ac4e0ad84168dcfdb9f2042e906ab2d46b7cc97e0e` | `8eb373773fbc5e1b6ed2f4bb8a88049b49fe339be7f7904fc5a4df6c4019c22e` |
| 05 | `6a3acf60b4b1df83a90227dc4720d24afe3cd6cd7eb099c0b3cb0ebecd76a2c1` | `bb36c390ebf77a3fb48e0a17478f1b28f49c09ab3bbf66c3b1f76a8560121c30` |
| 06 | `11c250996fc3a8711122cd10e1ad7e680e89b3033bf5e4e566d653d911c37ee4` | `1e78a98a8d46e3ba78418677bd51639953102cbca7872493a801189d9789d694` |

使用项目 cwebp 流程验证转换、解码和尺寸。验收后仅保留六张 WebP 与制作记录。
