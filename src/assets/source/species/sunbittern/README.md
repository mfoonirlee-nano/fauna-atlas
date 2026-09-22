# 日鳽 image set

2026-09-22 使用内置 image_gen 逐张制作一张封面和五张图库图。最终提示词见 [prompts.json](./prompts.json)，物种事实及来源范围见[本批核验记录](../../../../../docs/research/todo-cross-group-ten-2026-09-22.md)。

## 封面检查

首次收录，无旧版线上封面。首轮封面通过源图构图检查。 源 PNG 与运行 WebP 均为 1536×1024。目视完整主体边界为 `(703, 125, 1444, 876)`，主体 741×751 px，水平中心为源宽 69.9%。边界包含姿态中可见的尾、足、鳍、刺或触角；主体外缘留有背景，左侧 40% 供文字使用。

已检查源封面和运行 WebP 的原始分辨率，以及图库联系表。焦点 `{"x":0.7,"y":0.5}`，轮播与档案共用 `01-cover.webp`。封面 SHA-256：`f821ff9aa8843f6ddd166b6a1ae6a86b730636ab1403367ae4a427c505ca068d`。

## 六视口与动画

采用 2026-09-16 全幅 object-fit: cover 布局。检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave，缩放为 1、1.04、1.025、1.015、1.025、1.015。逐状态结果见 [hero-acceptance.json](./hero-acceptance.json)。

| 视口 | 最终主体 CSS px（裁切前） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 549.96×557.38 | Pass |
| 390×760 | 549.96×557.38 | Pass |
| 1366×768 | 658.99×667.88 | Pass |
| 1920×900 | 926.25×938.75 | Pass |
| 2560×900 | 1235.00×1251.67 | Pass |
| 3840×900 | 1852.50×1877.50 | Pass |

当前布局允许边缘裁切，移动端与超宽屏不保证全身可见；不沿用旧版 24 px 全身安全区结论。未启动浏览器。

## 图像范围

图片为 AI 科学情景重建，不是连续实拍，不用于物种鉴定或精确测量。图库中的局部特写不要求全身入画。

| 图 | 源 PNG SHA-256 | 运行 WebP SHA-256 |
| --- | --- | --- |
| 01 | `c542128bf698d43044e591db1a3bd53336f59421bae5986f69cb78949d051b07` | `f821ff9aa8843f6ddd166b6a1ae6a86b730636ab1403367ae4a427c505ca068d` |
| 02 | `e103af65012a37defa3ae13ca2ea2baf22dbe774e3e382cfb35f615f62710a1e` | `103204b3599ff3d6c41448a7b44e76502980f7cce3a795d1c69c03a8e45188ad` |
| 03 | `dc63decde79889cdc67c2ba45ef36e67307518e12e6346fc0c357b3428222670` | `2d8290a7f8fffddaf7df3f06f85dc092c5fb181781f09302a8272bb41b224e5f` |
| 04 | `9888718d5e9a3a0850341d5a5bdcd724b78c122c220640325ccba1241117c348` | `3c6a03c9c34731831158c94ed927abd7e5079d4ba3df3773b924bd15e937d4bc` |
| 05 | `9ebe0357b2746b0a73880ae4aab77548d0bd922fd0248c783904e17bd3c0e929` | `e9f30af59ef6e70ee78e2dc4b67cca60e3695e1c76d2a62530d95e8b0bc271ce` |
| 06 | `edbaff62361b5dba01b05d467d3f6557de0c6b5b2a15e4b28c75b48c8c671136` | `d07fdbe9c9b3cca25ce4bce7150adc2d25de3be2c9906fe26c1a5f536577295b` |

使用项目 cwebp 流程校验转换、解码和尺寸。验收后仅保留六张 WebP 和制作记录。
