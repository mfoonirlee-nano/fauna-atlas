# Menelaus Blue Morpho image set

2026-09-14 使用内置 image_gen 制作一张封面与五张观察图。最终提示词及编辑原因见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/menelaus-blue-morpho/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。资料核验及分类、保护状态边界见 [五物种资料核验](../../../../../docs/research/five-animals-2026-09-14.md)。

## 内容来源

- [Harvard MCZ：Morpho menelaus 分类](https://mczbase.mcz.harvard.edu/name/Morpho%20menelaus)
- [Smithsonian National Museum of Natural History：大蓝闪蝶的结构色](https://www.smithsonianmag.com/blogs/national-museum-of-natural-history/2023/12/12/celebrate-the-holiday-season-with-the-museums-stunning-collection-of-blue-specimens/)
- [Amazonian Butterflies：大蓝闪蝶野外食物与生境](https://www.amazonian-butterflies.net/families/?tx_psbfieldguide_fg%5Baction%5D=show&tx_psbfieldguide_fg%5Bcontroller%5D=Species&tx_psbfieldguide_fg%5Bspecies%5D=130)
- [Butterflies and Moths of North America：亚种及分布范围](https://www.butterfliesandmoths.org/species/morpho-menelaus-amathonte)

未确认全球评估记录，本档案暂记 NE；未确认独立评估日期和全球趋势。

## 图集

- `01-cover.webp`：完整身体与生活环境。
- `02-observation.webp`：展开的蓝色翅膀。雄性大蓝闪蝶展开蓝色翅面，边缘呈深色。
- `03-observation.webp`：合翅后的褐色眼斑。大蓝闪蝶合拢翅膀，褐色下表面有环形眼斑。
- `04-observation.webp`：吸食果汁。合翅的大蓝闪蝶在落果上伸出细喙。
- `05-observation.webp`：翅面的蓝色光泽。近看大蓝闪蝶翅面的蓝色反光和深色边缘。
- `06-observation.webp`：林间飞行。雄性大蓝闪蝶在热带林间展开蓝色翅膀。

## 封面验收

源图与运行 WebP 均为 1536x1024。目视测量的完整主体边界 `{'left': 616, 'top': 170, 'right': 1508, 'bottom': 842}`，主体大小 892x672 源像素，中心位于源宽 69.1%。边界包含可见尾端、足端、鳍尖、吻齿或触角。新物种无旧封面。左侧 40% 保留环境，主体中心位于右侧 60% 以外。

focalPoint 为 `{"x":0.7,"y":0.5}`；轮播使用现有 hero-subject-frame 按完整主体边界适配同一封面。运行封面 SHA-256：`4bc5f1f8ee81ff615c96e08474aaec975a1c290b5aacc8c7b7f9ab4d14d7d656`。

六个视口均检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。当前 CSS 只改变透明度，六端点几何相同。下表以未取整 CSS 像素计算。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 233.62x176.00 | 43.19 | 48.00 | 40.00 | Pass |
| 390x760 | 233.62x176.00 | 78.19 | 48.00 | 40.00 | Pass |
| 1366x768 | 559.68x421.64 | 72.00 | 51.32 | 51.18 | Pass |
| 1920x900 | 743.33x560.00 | 96.00 | 103.53 | 48.00 | Pass |
| 2560x900 | 743.33x560.00 | 96.00 | 269.93 | 48.00 | Pass |
| 3840x900 | 743.33x560.00 | 96.00 | 602.73 | 48.00 | Pass |

静态几何合成图按现有主体容器比例拟合 canonical cover，标出完整主体、文字区与面板区；它不是浏览器截图。所有目标视口中，完整主体与视口、文字区和面板保持至少 24 CSS px 间距。

## 目视记录与限制

开翅与合翅场景分别生成，翅面花纹有亚种与性别差异，不用于亚种鉴定或微观鳞片研究。

已检查最终生成源图和运行封面的原始分辨率，复核运行图集联系表及六视口静态几何合成图。完整主体、关键颜色和观察场景通过目视检查。

## 压缩与哈希

使用 `npm run convert:webp` 进行首次 WebP 转换并检查解码与尺寸，不重复压缩已接受的 WebP。已清理仓库中的临时 PNG；保留六张运行 WebP、提示词和哈希记录。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `c1b911f177fce691b7dff9ed48a51e9625b3e7942d39cf9fca44162da6fbc49c` | `4bc5f1f8ee81ff615c96e08474aaec975a1c290b5aacc8c7b7f9ab4d14d7d656` |
| 02 | `8e90dabd4d59aed2d22fb16613ca75730f005fb91e03957a2b980b7ea520e981` | `cce91d4296ee382eacd5458eebd076db8c1fe4c0ac890b3c96d00c5fcbfde761` |
| 03 | `76bbac31f651ed3c04363cad725d7b6cca26b73c9facbd9f893b31828dcdf528` | `dd72ef144b219e6911b772a252fd8d8b40af67a8a8eac7bebe1387d383fb9cce` |
| 04 | `5e00df0d2fbb3b4f6e55055ddc7410aec7f7516ee214554125ac9b84985a8036` | `0c7cfcec6fde2cb1bf4debeeae620888b3932d5fbac8bf0b012384811eee3712` |
| 05 | `0054ded3db59cb38b67ed2d02ecbc046576979be5dd18823ead6b2ca09564053` | `84e30bdbc0b19ee76ff04962c45c68896d967060bc58016f7a9d759e6f3990a5` |
| 06 | `7aea75efe47d94faa4052b6f8ce62646573d7e19359871fdba1a5c92b90eca9f` | `c017ceb4a1e675b2637b753badcee2796f74ac29dbd23a0f55e1666e1defb502` |

## 最终验证

2026-09-14 完成静态验收。测试共 459 项通过；首次全套运行发现的首屏脚本体积超限已通过目录字段压缩修复，随后 `npm run test:dist-subpath` 三项复测通过，包含 TypeScript 检查、生产构建、子路径资源访问、脚本体积限制与目录数据无损还原。未启动浏览器。
