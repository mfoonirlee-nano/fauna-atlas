# 飞角鱼 image set

2026-09-22 使用内置 image_gen 逐张制作一张封面和五张图库图。最终提示词见 [prompts.json](./prompts.json)，物种事实及来源范围见[本批核验记录](../../../../../docs/research/todo-cross-group-ten-2026-09-22.md)。

## 封面检查

首次收录，无旧版线上封面。首轮画出多余的游离鳍条，已弃用；修正后调整右侧构图。图库同样修正相关鳍条。 源 PNG 与运行 WebP 均为 1536×1024。目视完整主体边界为 `(741, 210, 1482, 801)`，主体 741×591 px，水平中心为源宽 72.4%。边界包含姿态中可见的尾、足、鳍、刺或触角；主体外缘留有背景，左侧 40% 供文字使用。

已检查源封面和运行 WebP 的原始分辨率，以及图库联系表。焦点 `{"x":0.7,"y":0.5}`，轮播与档案共用 `01-cover.webp`。封面 SHA-256：`7818ae5a19a068298a2c6b64e75e6361d200b34bf1566025707c31dc1407d2a6`。

## 六视口与动画

采用 2026-09-16 全幅 object-fit: cover 布局。检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave，缩放为 1、1.04、1.025、1.015、1.025、1.015。逐状态结果见 [hero-acceptance.json](./hero-acceptance.json)。

| 视口 | 最终主体 CSS px（裁切前） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 549.96×438.63 | Pass |
| 390×760 | 549.96×438.63 | Pass |
| 1366×768 | 658.99×525.59 | Pass |
| 1920×900 | 926.25×738.75 | Pass |
| 2560×900 | 1235.00×985.00 | Pass |
| 3840×900 | 1852.50×1477.50 | Pass |

当前布局允许边缘裁切，移动端与超宽屏不保证全身可见；不沿用旧版 24 px 全身安全区结论。未启动浏览器。

## 图像范围

图片为 AI 科学情景重建，不是连续实拍，不用于物种鉴定或精确测量。图库中的局部特写不要求全身入画。

| 图 | 源 PNG SHA-256 | 运行 WebP SHA-256 |
| --- | --- | --- |
| 01 | `27e2012724fae35538781bbcd03e0b06e8bdbeb89269c52edbee6b862fb4387e` | `7818ae5a19a068298a2c6b64e75e6361d200b34bf1566025707c31dc1407d2a6` |
| 02 | `6ef42fafe6d3194989c1f9eead54f383d36747ad90de0235adeff6cefea91703` | `9e6b7a3ef95fd34d530e827be5cadff3cfc42a9773e4d150030dc6f1f1acf0a9` |
| 03 | `1917886ca8e4018ded2f68d3476e3b9fc77e3d17dabee4bad99f5c0003a3a40e` | `63901b7478b576e8d300abfc9d6addf5084da12a60d2ec868f0cbbfa5a3265c3` |
| 04 | `7de6514a9e3d67a0325605bc86600de3bf9cd4b5ea3a0ece5dd1466928f57f67` | `7b061aca13bbe442e250568e090c4607466364f4515b892fe40f6a832bba5747` |
| 05 | `8ba81da72e1a8f01460dfbf88a3b0eeb60264f365f634e7af79b1b7f79939fa8` | `b53c2a47b5a3f2127d1f0078a7ded74cd51794b12d2902c7bd5441ff5222c6a4` |
| 06 | `09c33ca44c923015075b022a0bbceaa8cb3177662066677ce205da45e921397f` | `b88cb04447022e3b09be539849f5b67c2aba50b7c88af4d58bda1babbe573f9d` |

使用项目 cwebp 流程校验转换、解码和尺寸。验收后仅保留六张 WebP 和制作记录。
