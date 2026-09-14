# European Stag Beetle image set

2026-09-14 使用内置 image_gen 制作一张封面与五张观察图。最终提示词及编辑原因见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/european-stag-beetle/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。资料核验及分类、保护状态边界见 [五物种资料核验](../../../../../docs/research/five-animals-2026-09-14.md)。

## 内容来源

- [Natural History Museum：欧洲锹甲自然史](https://www.nhm.ac.uk/discover/stag-beetles.html)
- [Natural History Museum UK Species Inventory：Lucanus cervus](https://uksi-sandbox.nhm.ac.uk/taxon.php?linkKey=NBNSYS0000011448)
- [Natural History Museum：欧洲区域近危评估及栖息地威胁](https://www.nhm.ac.uk/discover/stag-beetles.html)

欧洲区域评估为 NT；未确认全球评估记录，本档案暂记 NE。区域等级不作为全球等级。

## 图集

- `01-cover.webp`：完整身体与生活环境。
- `02-observation.webp`：雄虫的分枝大颚。雄性欧洲锹甲头前有一对鹿角状大颚。
- `03-observation.webp`：雌虫的短颚。雌性欧洲锹甲停在腐木上，大颚较短。
- `04-observation.webp`：腐木中的幼虫。乳白色欧洲锹甲幼虫弯成 C 形藏在腐木中。
- `05-observation.webp`：雄虫大颚相接。两只雄性欧洲锹甲在树皮上用大颚接触。
- `06-observation.webp`：傍晚走过林地。雄性欧洲锹甲在傍晚的橡树林地面行走。

## 封面验收

源图与运行 WebP 均为 1536x1024。目视测量的完整主体边界 `{'left': 659, 'top': 68, 'right': 1484, 'bottom': 954}`，主体大小 825x886 源像素，中心位于源宽 69.8%。边界包含可见尾端、足端、鳍尖、吻齿或触角。新物种无旧封面。左侧 40% 保留环境，主体中心位于右侧 60% 以外。

focalPoint 为 `{"x":0.7,"y":0.5}`；轮播使用现有 hero-subject-frame 按完整主体边界适配同一封面。运行封面 SHA-256：`0c6364e279f0ad6d0cf34f3c15599cc122088e838c971b50547007605bf75450`。

六个视口均检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。当前 CSS 只改变透明度，六端点几何相同。下表以未取整 CSS 像素计算。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 163.88x176.00 | 78.06 | 48.00 | 40.00 | Pass |
| 390x760 | 163.88x176.00 | 113.06 | 48.00 | 40.00 | Pass |
| 1366x768 | 398.53x428.00 | 96.00 | 131.89 | 48.00 | Pass |
| 1920x900 | 521.44x560.00 | 96.00 | 214.48 | 48.00 | Pass |
| 2560x900 | 521.44x560.00 | 96.00 | 380.88 | 48.00 | Pass |
| 3840x900 | 521.44x560.00 | 96.00 | 713.68 | 48.00 | Pass |

静态几何合成图按现有主体容器比例拟合 canonical cover，标出完整主体、文字区与面板区；它不是浏览器截图。所有目标视口中，完整主体与视口、文字区和面板保持至少 24 CSS px 间距。

## 目视记录与限制

雌雄图片没有统一比例尺，不做体长比较；争斗图中部分腿自然遮挡，不用于数足练习。

已检查最终生成源图和运行封面的原始分辨率，复核运行图集联系表及六视口静态几何合成图。完整主体、关键颜色和观察场景通过目视检查。

## 压缩与哈希

使用 `npm run convert:webp` 进行首次 WebP 转换并检查解码与尺寸，不重复压缩已接受的 WebP。已清理仓库中的临时 PNG；保留六张运行 WebP、提示词和哈希记录。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `682c8c41e73d8afbb055f734f9e69be8e5e5d2456ec5672842fb94813d682c35` | `0c6364e279f0ad6d0cf34f3c15599cc122088e838c971b50547007605bf75450` |
| 02 | `c252afa4b65ee59a9208c9f4ec9382386647b423f718cfca90900439f3f3182a` | `4d809febe92fe934ddb0d67ba1bbd614686360e50bf1286f455674a672b21ef9` |
| 03 | `3a2920daf1256ba652dcca08d5495e3a10d5408530d9ff8704f49a50ccf39906` | `bfb7dc8517560f57edb57b0c64df21d3ba8b84416ae712c1f71de5f3781110ef` |
| 04 | `a725edfed59227e384ee91096e2d1036dea426ec723973792addd934fcfba16c` | `bf14cadcf8d4672e3884ed0252809af44b03a673a867c3bb9f92945bfa17e547` |
| 05 | `fa987cd02d3643158ac97c024365fc3aeefeba2810d279fbc95829aa2c1eee25` | `0fcac8b5d125c7a824c1c20a680db6df54039b4e7673b810335ad95fffc33be1` |
| 06 | `966e3df6494adf499549d0af38aaaeffa2cf1f1ff064ec7afb382086d2596a0f` | `d1e0c0921ded1d3aae6047d5d31156c56196aa5632d1d34c7d56801b092bf6df` |

## 最终验证

2026-09-14 完成静态验收。测试共 459 项通过；首次全套运行发现的首屏脚本体积超限已通过目录字段压缩修复，随后 `npm run test:dist-subpath` 三项复测通过，包含 TypeScript 检查、生产构建、子路径资源访问、脚本体积限制与目录数据无损还原。未启动浏览器。
