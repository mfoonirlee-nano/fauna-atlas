# Striped Skunk image set

2026-09-14 使用内置 image_gen 制作一张封面与五张观察图。最终提示词见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/striped-skunk/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。资料核验见 [五物种资料核验](../../../../../docs/research/five-animals-lobster-to-leopard-2026-09-14.md)。

## 内容来源

- [Animal Diversity Web：Mephitis mephitis 分类、生态与保护记录](https://animaldiversity.org/accounts/Mephitis_mephitis/)
- [NCBI Taxonomy：Mephitis mephitis](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=30548)
- [Animal Diversity Web：臭鼬保护状态](https://animaldiversity.org/accounts/Mephitis_mephitis/)

资料记录全球等级为无危。本档案未确认全球趋势；道路车辆和栖息地变化仍会影响当地个体。保留藏身处并减少道路伤害，有助于它们生活。独立评估日期未单独核实，未填 assessedYear。

## 图集

- `01-cover.webp`：完整身体与生活环境。
- `02-observation.webp`：背上的两条白纹。臭鼬背部的白纹分成两条向后延伸。
- `03-observation.webp`：用前爪挖土。臭鼬低头用前爪扒开土壤。
- `04-observation.webp`：抬尾警告。臭鼬抬起蓬松尾巴并抬起一只前脚。
- `05-observation.webp`：洞口休息。臭鼬在隐蔽洞口休息。
- `06-observation.webp`：黄昏沿林缘觅食。臭鼬黄昏时在林缘低头寻找食物。

## 封面验收

源图与运行 WebP 均为 1536x1024。目视测量完整主体边界：left=715, top=32, right=1500, bottom=905，主体大小 785x873 源像素，中心位于源宽 72.1%。新物种没有旧封面；左侧 40% 留作环境与文字区域。

focalPoint 为 `{"x":0.7,"y":0.5}`。轮播通过现有 hero-subject-frame 按完整主体边界拟合同一 canonical cover；运行 WebP SHA-256：`e3fa58ca92e598a09b0587c794f2bac1d1c58f68ff8e35a7e05d7b94eb815fe0`。

六视口检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。现有 CSS 仅改变透明度，六端点几何相同。下表采用未取整 CSS 像素。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 158.26x176.00 | 80.87 | 48.00 | 40.00 | Pass |
| 390x760 | 158.26x176.00 | 115.87 | 48.00 | 40.00 | Pass |
| 1366x768 | 384.86x428.00 | 96.00 | 138.73 | 48.00 | Pass |
| 1920x900 | 503.55x560.00 | 96.00 | 223.42 | 48.00 | Pass |
| 2560x900 | 503.55x560.00 | 96.00 | 389.82 | 48.00 | Pass |
| 3840x900 | 503.55x560.00 | 96.00 | 722.62 | 48.00 | Pass |

静态几何合成图标注完整主体、文字区和面板区；未启动浏览器。完整主体在六个视口的全部端点均保持至少 24 CSS px 安全间距，并在该约束下填满主体容器的一维。

## 目视检查与限制

白纹宽窄因个体而异。警告图只表现抬尾、抬前脚，不显示喷雾；不把静止图解释成连续动作。封面包含蓬松尾毛和可见足端。

已检查生成源图与运行封面原始分辨率，并检查运行图集联系表和六视口静态几何合成图。主体构图及封面安全间距通过验收。

## 压缩与哈希

使用 npm run convert:webp 做首次 WebP 转换，并检查尺寸和解码。临时 PNG 在验收后清理，保留六张 WebP、最终提示词和哈希。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `85df23005813e228070dfc9049e8d6d9612273a1b7146895516c2a87b92c3170` | `e3fa58ca92e598a09b0587c794f2bac1d1c58f68ff8e35a7e05d7b94eb815fe0` |
| 02 | `3dfc15441e36dce38ddf9c5a110899cbc0bc8da768c034bf08ce89c0c973f2c2` | `f09766a3cee6ccc048f453bfaeb6238bc2b96d441ce5e44420c463ceb1013a47` |
| 03 | `c9ce60035f4834bcc687e5b95999799cdf7b0b9724e4030b95a7c290c110bd33` | `712f19150d787724455e7fb8e2d9c6867db8c14eaadbb3f8c1a9c13b1c15884f` |
| 04 | `62c4a0edb579bfbcaa0ee740c91b2c8401c530e670e7ca79599950f6f3f12003` | `6de33ad24f6aa174388d911c1a8ab599fdae46089a2eca5f5abff8005ff256c6` |
| 05 | `dac80af65832b2f2539dafdb0d34712d6631eece06bc24a7ea74edb5903781b2` | `63551873aeddfa2883a26c33bd3ad0f5d16f02132b4aa3681add2a1e99a66d06` |
| 06 | `9e934693ab5e8a9014dcccecc1b2ce110681dc24a4bf475b26173574baf0c798` | `fd3727c39e41062c4081ffe5cfeeb814ee98c0211ebe6e0f38f8140c5d0b334d` |

## 最终验证

2026-09-14 完成静态验收，测试共 465 项通过。分类与物种资源、轮播完整主体与六视口端点检查通过；生产构建包含 TypeScript 检查。首屏脚本体积检查首次失败后，目录序列化压缩了保护等级、分布与分类字段；随后 test:dist-subpath 三项复测通过，包含全部档案独立加载与目录数据无损还原。首屏入口脚本 344600 bytes，低于 350000 bytes 限额。未启动浏览器。
