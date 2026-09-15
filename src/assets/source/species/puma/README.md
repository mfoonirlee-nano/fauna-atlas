# Puma image set

2026-09-15 使用内置 image_gen 制作封面及五张观察图。最终提示见 [prompts.json](./prompts.json)，运行资产位于 `public/images/species/puma/`。

图片为 AI 生成科学情景重建，不代表实拍地点、精确测量或连续行为。资料依据见[五物种资料核验](../../../../../docs/research/five-animals-black-bear-to-serval-2026-09-15.md)。所列资料支持全球等级，未单独核实评估日期，`assessedYear` 留空。

## 图集

- `01-cover.webp`：完整主体与生活环境。
- `02-observation.webp`：身后的长尾巴。
- `03-observation.webp`：后腿蹬上石头。
- `04-observation.webp`：灌木下休息。
- `05-observation.webp`：圆耳朵和浅色下巴。
- `06-observation.webp`：幼崽身上的斑点。

## 封面验收

源 PNG 与运行 WebP 均为 1536x1024。完整主体目测边界为 `{"left": 664, "top": 111, "right": 1480, "bottom": 839}`，大小 816x728 源像素，中心位于源宽 69.8%。边界包含可见耳尖、口鼻与胡须、四肢、爪端和尾部；自然遮挡不补画。左 40% 保留环境，主体与源图边缘之间有背景。

这是首次制作，无旧封面可比较。提交的 `focalPoint` 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`fbc50d48eca54f5b99575d82aaec30379cb9f8bf2f0658adebf2fa011c30a439`。轮播使用同一 canonical cover，按 `coverSubjects` 中的完整主体边界拟合。

静态几何检查覆盖六视口的 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。当前主体动画只改变透明度，六端点几何相同。检查完整主体与视口、文字区和面板的间距，单位 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 197.27x176.00 | 61.36 | 48.00 | 40.00 | Pass |
| 390x760 | 197.27x176.00 | 96.36 | 48.00 | 40.00 | Pass |
| 1366x768 | 479.74x428.00 | 96.00 | 91.29 | 48.00 | Pass |
| 1920x900 | 627.69x560.00 | 96.00 | 161.35 | 48.00 | Pass |
| 2560x900 | 627.69x560.00 | 96.00 | 327.75 | 48.00 | Pass |
| 3840x900 | 627.69x560.00 | 96.00 | 660.55 | 48.00 | Pass |

完整主体在六视口全部端点保持至少 24 CSS px 间距，并填满安全区域的一维。

## 目视检查与限制

源封面和运行封面按原始分辨率检查；五张观察图用联系表检查。另以运行封面生成静态安全区叠加图，复核六视口，不启动浏览器。图片中自然遮挡的脚趾或远侧身体部分不用于推断数量；独立图片不是同一个体的连续记录。

## 压缩与哈希

使用 `npm run convert:webp` 首次转换，检查尺寸和解码；未重复压缩运行 WebP。PNG 验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `dc433249ea8ca46207c38a0b7f1249e17251a0e2678e80c4708b0c8fa35bd935` | `fbc50d48eca54f5b99575d82aaec30379cb9f8bf2f0658adebf2fa011c30a439` |
| 02 | `d66ab8177f76789ce852abda1081645bc3fb82cd26f4946108a273702567645f` | `a83918505c7e34215145d6e9b86d17d8c03e68fc5f18afff4a3f039fc20c3233` |
| 03 | `dbb77f23c220c64497c80ce9f2d371b4cc305df02582c2b159be4cc6aafb0cc9` | `34c2585fca246261bc79aea0debd04cb60ae507ef85a9cd43a1939e5087464a8` |
| 04 | `9feac901109b476a3c35aeb9c5272f6c165fefb01d8b537aa73759221294b6de` | `3e4914d80f9a10568181353328972dfb628692ef9accf5fb07078fdaefbaa265` |
| 05 | `bdd604e9b3df8cdd15bbd3c600c14b1347f52b38d27f2cfacb3fc2eedb151a69` | `e921aa90e3a060cfa4f0e163d67dac5ba927c4fe78f94b9d0d68e36ac38d7ddc` |
| 06 | `962adde46a9ee169730364daa7c22a8ea95320aa0e861a0fd107e92bdebce7df` | `34f48cae33e7eae2f32e431289e254c7f730a2fa00989811a3ce9883521f1f5f` |

## 最终验证

2026-09-15：分类与档案测试 187 项、轮播测试 252 项、图片转换测试 1 项、构建与子路径测试 3 项通过。生产构建包含 TypeScript 检查，目录字段及完整档案的数据无损检查通过。首次构建触及首页脚本体积上限，压缩目录传输字段名后复测通过。源封面、运行封面、源图与运行图联系表及六视口静态叠加图已目视检查；完整主体通过全部动画端点检查。每种保留六张独立 WebP，临时 PNG 已清理。
