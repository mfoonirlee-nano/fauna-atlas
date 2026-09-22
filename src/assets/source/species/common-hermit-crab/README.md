# 普通寄居蟹 image set

2026-09-22 使用内置 image_gen 逐张制作一张封面和五张图库图。最终提示词见 [prompts.json](./prompts.json)，物种事实及来源范围见[本批核验记录](../../../../../docs/research/todo-cross-group-ten-2026-09-22.md)。

## 封面检查

首次收录，无旧版线上封面。首轮左右螯画反，已弃用；修正为正面视图画面左侧的大右螯，并调整触角留白。 源 PNG 与运行 WebP 均为 1536×1024。目视完整主体边界为 `(698, 165, 1448, 845)`，主体 750×680 px，水平中心为源宽 69.9%。边界包含姿态中可见的尾、足、鳍、刺或触角；主体外缘留有背景，左侧 40% 供文字使用。

已检查源封面和运行 WebP 的原始分辨率，以及图库联系表。焦点 `{"x":0.7,"y":0.5}`，轮播与档案共用 `01-cover.webp`。封面 SHA-256：`644a4be9b8c2b7ee48f767187c5b663dea7a56c4e6722a002ebe9d1434c4b0f3`。

## 六视口与动画

采用 2026-09-16 全幅 object-fit: cover 布局。检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave，缩放为 1、1.04、1.025、1.015、1.025、1.015。逐状态结果见 [hero-acceptance.json](./hero-acceptance.json)。

| 视口 | 最终主体 CSS px（裁切前） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 556.64×504.69 | Pass |
| 390×760 | 556.64×504.69 | Pass |
| 1366×768 | 666.99×604.74 | Pass |
| 1920×900 | 937.50×850.00 | Pass |
| 2560×900 | 1250.00×1133.33 | Pass |
| 3840×900 | 1875.00×1700.00 | Pass |

当前布局允许边缘裁切，移动端与超宽屏不保证全身可见；不沿用旧版 24 px 全身安全区结论。未启动浏览器。

## 图像范围

图片为 AI 科学情景重建，不是连续实拍，不用于物种鉴定或精确测量。图库中的局部特写不要求全身入画。

| 图 | 源 PNG SHA-256 | 运行 WebP SHA-256 |
| --- | --- | --- |
| 01 | `91904789651fa67a3fe5dceb7ed0d043a5b7e731143fc481c70c031898ce8be8` | `644a4be9b8c2b7ee48f767187c5b663dea7a56c4e6722a002ebe9d1434c4b0f3` |
| 02 | `46d7e88b0c41266c6cfc70ae693a80fe6a9572e8be89d98ed578a19fdc490f34` | `a27308f185deeefbdcd8afd4a224b9309a8ffe0be591ac2fccded01f0cf38bda` |
| 03 | `82d088c632339158bd0ae6e875ef178ccfb493c185b6c16b67b042f9cc67a791` | `43d42442ec23249fdd56bcefef97d5d4f81f20f326fe32769ca4e22020b4f5b4` |
| 04 | `eef21324ffe490b30ca865c812b17efca18bafcd33aae34e944b537da1fcb012` | `36b5a9b8350431e51f609f41b1a0575a226bd7ee4eb4e98f3a6f1fcaac00f5aa` |
| 05 | `84cfd2db4d08bfac7051c7a20032bdec795854334c9aba2fb207f7596c3ad4dc` | `d571ca3468dbe93d2e06ec0ae8c0402cc75e25eeff9ceab8a90596c8d581b028` |
| 06 | `20bc3f33da92d0ce7f7d1ba64449b30c3b50d89e27e6c0ebe89a2e31918fa2bd` | `4e63ba9e9afd7bf3094ea5082627709828b61b09007f7d71fab9778b38ed87f1` |

使用项目 cwebp 流程校验转换、解码和尺寸。验收后仅保留六张 WebP 和制作记录。
