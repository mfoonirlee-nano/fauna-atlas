# Frilled Lizard image set

2026-09-14 使用内置 image_gen 生成一张封面与五张观察图。最终提示词和修改记录见 [prompts.json](./prompts.json)。运行资产：`public/images/species/frilled-lizard/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。分类差异与字段依据见 [五物种资料核验](../../../../../docs/research/five-herps-2026-09-14.md)。

## 内容来源

- [The Reptile Database：伞蜥分类与分布](https://reptile-database.reptarium.cz/Chlamydosaurus/kingii)
- [Animal Diversity Web：伞蜥颈褶与生活史](https://animaldiversity.org/accounts/Chlamydosaurus_kingii/)
- [澳大利亚北领地政府：伞蜥观察资料](https://nt.gov.au/__data/assets/pdf_file/0007/200032/frilled-lizard.pdf)
- [Potawatomi Zoo：伞蜥保护等级](https://potawatomizoo.org/animal/frilled-lizard/)

来源支持全球 LC；独立评估日期及全球趋势未核实，未填 assessedYear，trend 使用 unknown。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：展开颈褶。伞蜥张嘴展开颈部皮褶，身体和长尾巴可见。
- `03-observation.webp`：收拢颈褶休息。伞蜥沿树皮休息，颈褶贴在颈侧。
- `04-observation.webp`：抓住树皮向上爬。伞蜥四肢抓住树干，长尾巴向下延伸。
- `05-observation.webp`：抬起前肢奔跑。伞蜥在林地用后腿奔跑，前肢抬起。
- `06-observation.webp`：地面上的昆虫。伞蜥在落叶旁朝向一只蝗虫。

## 封面验收

源图与运行 WebP 为 1536×1024。完整主体边界 `{"left": 902, "top": 80, "right": 1455, "bottom": 939}` 包含头部、可见趾端、尾端或颈褶等外部特征，主体大小 553×859 源像素，中心位于源宽 76.7%。新物种无旧封面。已检查最终源图与运行封面的原始分辨率。

focalPoint：`{"x":0.7,"y":0.5}`。轮播通过现有 hero-subject-frame 适配同一封面，以完整主体边界计算最大显示尺寸。运行封面 SHA-256：`1ee65f22bef845f38ca98989ad30031c607caa04794e2ba4b4b1aa377e5fd4ea`。

以下六视口覆盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。当前 CSS 只改变透明度，六端点几何相同。间距以未取整 CSS 像素计算。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 113.30×176.00 | 103.35 | 48.00 | 40.00 | Pass |
| 390×760 | 113.30×176.00 | 138.35 | 48.00 | 40.00 | Pass |
| 1366×768 | 275.53×428.00 | 96.00 | 193.39 | 48.00 | Pass |
| 1920×900 | 360.51×560.00 | 96.00 | 294.94 | 48.00 | Pass |
| 2560×900 | 360.51×560.00 | 96.00 | 461.34 | 48.00 | Pass |
| 3840×900 | 360.51×560.00 | 96.00 | 794.14 | 48.00 | Pass |

静态几何合成图用于检查完整主体与安全区域，不作为浏览器或字体排版截图。图集检查以外形、动作、场景和裁边为范围；细小鳞片和趾垫内部结构不作为精确解剖图使用。

## 压缩与哈希

使用 npm run convert:webp 转换，并检查解码与尺寸。保留六张 WebP，以下源哈希记录最终临时 PNG。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `397e139b339427b4aadf7f97f797507cea89d0da151cc0a97db2641f75db8c12` | `1ee65f22bef845f38ca98989ad30031c607caa04794e2ba4b4b1aa377e5fd4ea` |
| 02 | `02acc5ee1dc4ef3750ed46a24ab32275aa6ed4e5478b981d964736860804ef6b` | `85bd8fcc74823d77d63b9b5168abb705f76b62a53108f9e53ef0576106370c67` |
| 03 | `5c4fd6c8be6e1a5b26b7ac6d21d6117ca9c00225f87781f7dfa8cfbdf67387ef` | `c7fbdfe9f803db0553ce8b1f957b2d3af2eb902d3c599529047e0371cd862a4f` |
| 04 | `fc6c936a8d62474b453e485d7bab979530c6fa7361f69d7b4356ca2cd51e8a39` | `822a4b5580a8abea61194a900ac3676cd00f03c1d968865a39633ebfcfc047f1` |
| 05 | `bfcaf4ae39f799e5d3ffe7f7a5feb9d94cf43321c22de5f50ceac8ae57bfbbd2` | `ffd759c77b9a7340688833dc4915e3d2817e533d4b6c9d968b8fb2d56098620a` |
| 06 | `79555c1529ad0b0f080c2635de65360763b98e9fec4c38f073221fa08884d7ba` | `dd2af2a85ddbcda044e93017a033331bc73791eae896bb4722c3ce8b9756789f` |

## 目视记录与边界

首张候选封面的长尾伸入左侧，编辑后将完整长尾弯曲在右侧树干区域，并减弱左侧背景细节。展开颈褶、收拢与奔跑图分别生成。

已检查临时源图、原始分辨率运行封面、运行图集联系表及六视口静态几何合成图。封面主体与视口、文字区和面板均保持至少 24 CSS px 间距。已核对最终源图与运行文件哈希，清理仓库内的临时 PNG；保留生成工具目录原件。

## 仓库验证

2026-09-14：npm test 全部 453 项通过，其中分类与档案 183 项、轮播 232 项、生产子路径与数据还原 3 项。类型检查和生产构建通过。30 张 WebP 的解码、1536×1024 尺寸与独立哈希通过检查，每种恰好保留六张图片。未启动 GUI 或无头浏览器。
