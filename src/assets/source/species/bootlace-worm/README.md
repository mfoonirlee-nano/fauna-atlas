# Bootlace Worm image set

2026-09-08 使用内置 imagegen 生成并编辑六张 1536 × 1024 图片，无 CLI 回退。源 PNG 保存在本目录，运行资源位于 `public/images/species/bootlace-worm/`。

## 最终提示词

见 [prompts.json](./prompts.json)、[封面编辑](./edits.json)和[体表特写编辑](./gallery-edits.json)。所有图片标注为 AI 生成科学情景重建。

## 内容依据

分类采用OBIS所载WoRMS路径：Nemertea → Pilidiophora → Heteronemertea → Lineidae → Lineus。MarLIN支持常见伸展长度5—15米、岩岸隐蔽处及欧洲分布；不采用未经确认的超长纪录。2018年论文支持表皮黏液活性肽发现，实验结果不等同野外毒性或完整捕猎过程。

- [MarLIN — 外形、长度、栖息地与欧洲分布](https://www.marlin.ac.uk/species/detail/2075)
- [OBIS / WoRMS — 巨纵沟纽虫分类路径](https://obis.org/taxon/122528)
- [Jacobsson等2018 — 表皮黏液中的α-nemertide肽](https://www.nature.com/articles/s41598-018-22305-w)
- [NCBI Taxonomy — Lineus longissimus](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=88925)

资料访问日期：2026-09-08。未核实到本种全球 IUCN 评估，暂记 NE，无评估年份，种群趋势未知。保护行动属于栖息地建议，未量化本种威胁。

## 视觉限制

外形图夸大横向宽度与体表纹理，不作长度测量或物种鉴定。吻图的端部接触形态与猎物经过简化；不表示实测动作或吻刺。石下图只见部分身体。体表特写采用细长身体中段，两端延伸至画面外；湿润光泽不提供化学成分证据。栖息地图没有地理定位。 封面主体较小，以适应首页标题和轮播控件；图集提供近景。

## 压缩

TinyPNG 已压缩全部六张源 PNG，随后使用仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP。图集压缩首次遇到沙箱 DNS 错误，获准联网后完成，无本地调色板回退。

## 封面检查

源 PNG 与运行 WebP 均按原始分辨率查看。源图尺寸 1536 × 1024；focalPoint 为 `{ x: 0.92, y: 0.35 }`。全身可见边界（源图像素）：`{ left: 1225, top: 402, right: 1302, bottom: 456 }`，包含可见末端与附肢。主体中心位于源图宽度 82.3%，左侧40%留有安静背景，边界四周均有真实背景。

运行封面 SHA-256：`a2db469566eab5849f68940a6f44f0749cd88a73728cc4f2c08c436bcce360f4`。

封面回归检查通过，完整主体在下列视口和动画端点与视口边缘、标题及轮播控件保持至少24 CSS像素间距。没有启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `bfca9440984c2ccdfa62e50e7a84f8b729985786d58b05ab5f36a739818264aa` | `a2db469566eab5849f68940a6f44f0749cd88a73728cc4f2c08c436bcce360f4` |
| 02 | `fd35333fcf9bd9a0749502c3c89125fb1cbf9b57b74ebeb568e3f11cc8d42111` | `19a8c773aba3915262755595620ec61768a5bf4409cb04cc36eaffac2366452d` |
| 03 | `2af2c4f0c70469a65c4f190261a47a46696ca16a8e9267568127cd10d5e559ef` | `d3193578c65d8a4388b3523e9d5acb8f04a78a7e4d20eebd880079f6dd2670f8` |
| 04 | `6cea053b1b27e737badc4c29ce4d6d23ce35fd339f43e1d3eed1cc1394a09f76` | `ed77690026b8a24f72ec8deb5123f57b086b1a63e2c079d8208133bac041679b` |
| 05 | `f506535579e7e087d082faaac85206e9c4526340c4775f4364d2091b5b379239` | `d840f1f2d08db4716073d4433e8a268d66b9089c52de3a22bf2117a62ff8cda6` |
| 06 | `57eb526570b2b50e1dfe4fd27587f64c7cf0d9772a0037756b3622d9d4d7a6e1` | `c39e094b954cb1f2901642c250c4834f151b128d64463139003ca7eff7fc2505` |

## 验证

已按原始分辨率检查全部六张运行WebP。174项测试全部通过：完整测试中的173项先通过，静态资源子路径测试因沙箱禁止监听端口失败，获准后单独重跑通过。测试覆盖分类归属、六图尺寸及哈希、封面完整主体与控件间距。TypeScript检查与生产构建通过，构建更新了仓库跟踪的dist资源；Vite仍提示已有的大体积代码块。未启动GUI或无头浏览器。`git diff --check`通过。
