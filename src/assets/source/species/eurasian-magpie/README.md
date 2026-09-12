# Eurasian Magpie image set

2026-09-10 使用内置 image_gen 生成六张 1536 × 1024 图片。最终运行资产保存在 `public/images/species/eurasian-magpie/`，完整提示见 [prompts.json](./prompts.json)。这些图片是 AI 生成科学情景重建，不代表实拍地点或野外观察记录。

## 内容依据

- [EEA EUNIS — 喜鹊分类与全球 IUCN 等级](https://eunis.eea.europa.eu/species/Pica%20pica)
- [IOC World Bird List — 喜鹊复合群的物种拆分](https://www.worldbirdnames.org/new/updates/species-updates/)
- [RSPB — 喜鹊的羽色与生活](https://www.rspb.org.uk/birds-and-wildlife/magpie)
- [Cornell Lab — 欧亚喜鹊食物、栖地与筑巢](https://www.allaboutbirds.org/guide/Eurasian_Magpie/lifehistory)

访问日期：2026-09-10。采用 Pica pica，EEA EUNIS 支持雀形目、鸦科、鹊属以及 World Least Concern。IOC 物种更新表支持将东方喜鹊 Pica serica 从广义喜鹊复合群拆分；不把东方喜鹊作为别名或并入分布。RSPB 支持黑白羽色和蓝绿色光泽，Cornell 支持杂食、地面觅食及枝条组成的带顶巢。未把英国地区保护标识当成全球 IUCN 等级；未核实评估日期和全球趋势。

## 图集

- `01-cover.webp`：环境封面。
- `02-observation.webp`：长尾巴和白肚皮。
- `03-observation.webp`：羽毛会泛蓝绿色。
- `04-observation.webp`：在草地上找食物。
- `05-observation.webp`：衔着细树枝。
- `06-observation.webp`：展翅时的白羽。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1038, "top": 307, "right": 1211, "bottom": 415}`，包括喙、头、收拢双翅、两足和全部长尾羽。边界中心位于源宽度的 73.2%，左 40% 为环境背景，动物与源图边缘之间保留背景。focalPoint 为 `{"x": 0.77, "y": 0.31}`。

运行封面 SHA-256：`14bca02afa937eea9095e7d583815f16e6874b3cbd7740b3da6268a8ca22039f`。

已按原始分辨率静态检查源封面与最终 WebP。封面采用环境远景，外形细节由详情图集呈现。图中遮挡的附肢不补计为可见部分，也不把生成图用于计量、精确趾数或精细解剖证明。

下表按当前 CSS 的 object-fit、object-position 和动画变换计算完整主体到视口边缘、文字及控制面板占位的最小间距，单位为 CSS 像素。每项至少 24 像素。`tests/hero-carousel.test.mjs` 绑定运行哈希、完整主体边界及全部尺寸和动画端点；检查过程不使用浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 39.85 | Pass 33.77 | Pass 33.93 | Pass 37.57 | Pass 36.05 | Pass 37.57 |
| 390x760 | Pass 39.85 | Pass 33.77 | Pass 36.05 | Pass 37.57 | Pass 36.05 | Pass 37.57 |
| 1366x768 | Pass 91.12 | Pass 100.72 | Pass 106.64 | Pass 40.08 | Pass 28.82 | Pass 106.05 |
| 1920x900 | Pass 159.05 | Pass 161.01 | Pass 160.28 | Pass 98.76 | Pass 82.94 | Pass 159.79 |
| 2560x900 | Pass 118.40 | Pass 118.74 | Pass 118.61 | Pass 118.53 | Pass 118.61 | Pass 118.53 |
| 3840x900 | Pass 37.10 | Pass 36.00 | Pass 217.88 | Pass 36.01 | Pass 35.28 | Pass 172.72 |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本批源图>`，由 cwebp q82、m6 输出 WebP，转换脚本验证解码和尺寸。未使用 TinyPNG，不重复压缩已接受的 WebP。生成源图逐张静态检查；运行图通过静态联系表核对画面、颜色与图注，封面另按原始分辨率检查。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `99ca187e9f1faf1f24610fccb5b806675e512cfea789075474ac706c4fdf2cec` | `14bca02afa937eea9095e7d583815f16e6874b3cbd7740b3da6268a8ca22039f` |
| 02 | `68602d0b7b46efe268e438a56c0e0ed72c68c103015856629841dc668adbc93d` | `3657c133c8aeb07bc24ef49fc07ab52a27bc339d863bdc5b155cf602aacf65ea` |
| 03 | `502227d613eb5815143fef3bb0b73c4df71ad956c7de3988f293b4dac7b6f9e1` | `9627fdf58671df804869d0ba043bb83f0a9e417b4690ee2b9bfe5f1283cd855f` |
| 04 | `6d9911bf9792ca58644ffb6590bdcd178e63167ea0ce06597dd857c8d49a2a2a` | `651a3a04c4a54d670099a7e0edc17e9f243152c6f3a60c21cdedf94b646cb5e5` |
| 05 | `8232a9c8cc918a758671f0d5e2092def0aa4c50c193bf6ab7b7c9e87e67cd67b` | `e3c84ecdb5b55d39e547d9cbb7d18f13edf7b91884fb4d8ea8aad01d411a5c37` |
| 06 | `64f18ce4ac0a43251f1f2d7a26aa371c8440117b0bbb06d0b503b1dc0dfecd6f` | `1d3be5e9009ede3be83da1d62c8e41dfb19618672c4dadc9a156e5ba74dc4d71` |

## 仓库验证

已通过类型检查、`npm test` 全部 221 项测试及其包含的生产构建与子路径资源验证。封面回归覆盖上述全部视口与动画端点，运行图均已静态检查。已移除本批临时 PNG，只保留运行 WebP、提示词和哈希记录。

## 2026-09-12 regenerated cover

Retained the regenerated `01-cover.webp` and the five existing gallery images. The image set contains six WebPs. Final prompt and source hash: [cover-regeneration.json](./cover-regeneration.json).

Runtime SHA-256: `49408adc937603e94cbddf2a37e9e3bbfde5e0f2c83025442fa5e3ebdede3150`. Source and runtime dimensions: 1536×1024. Reviewed full-subject bounds (left, top, right, bottom): `[600, 250, 1455, 765]`. Original-resolution source and runtime inspection completed before temporary PNG archival.

The user removed the separate responsive hero images. Their previous six-viewport acceptance is withdrawn. The carousel now uses this same main cover; full-body crop acceptance in the existing carousel remains pending.
