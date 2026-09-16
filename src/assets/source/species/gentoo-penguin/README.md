# Gentoo Penguin image set

2026-09-16 使用内置 image_gen 制作。最终提示见 [prompts.json](./prompts.json)，运行图片位于 `public/images/species/gentoo-penguin/`。每种保留一张封面和五张图库图片。

资料与分类口径见[五物种资料核验](../../../../../docs/research/five-animals-black-rhino-to-african-penguin-2026-09-16.md)。独立评估日期未核实，assessedYear 留空。

## 图库

- `02-observation.webp`：头顶的白色花纹。
- `03-observation.webp`：橙色的蹼足。
- `04-observation.webp`：在岸上筑巢。
- `05-observation.webp`：鳍状翅划水。
- `06-observation.webp`：亲鸟和幼鸟。

## 封面验收

这是首次收录，无旧封面可比较。源 PNG 与运行 WebP 均为 1536×1024；目视检查的完整主体边界为 `{"left": 823, "top": 94, "right": 1385, "bottom": 910}`，大小 562×816 源像素，中心位于源宽 71.9%。边界包含可见的口鼻、角、耳尖或嘴尖、鳍状翅、脚趾和尾端；自然遮挡的部分不补画。左 40% 为环境，主体与源图边缘有背景间隔。

focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`508f57c7b2c87488d17317c5f0f63988c3f5456673a4b6b95dd2c005d0258d75`。首页与档案共用此封面，通过 coverSubjects 的完整主体边界拟合安全区。

源封面与运行 WebP 按原始分辨率目视检查；图库逐张检查源图并复核运行图联系表。用当前 WebP 制作静态安全区检查图，未启动浏览器。几何验证覆盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；当前主体动画仅改变透明度，六端点几何相同。单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 121.22×176.00 | 99.39 | 48.00 | 40.00 | Pass |
| 390x760 | 121.22×176.00 | 134.39 | 48.00 | 40.00 | Pass |
| 1366x768 | 294.77×428.00 | 96.00 | 183.77 | 48.00 | Pass |
| 1920x900 | 385.69×560.00 | 96.00 | 282.36 | 48.00 | Pass |
| 2560x900 | 385.69×560.00 | 96.00 | 448.76 | 48.00 | Pass |
| 3840x900 | 385.69×560.00 | 96.00 | 781.56 | 48.00 | Pass |

## 图像限制与压缩

图片为 AI 生成科学情景重建，不代表实拍、同一个体的连续行为或不同物种间的等比例比较。图库中的近景用于观察指定部位；水、羽毛或植被遮挡处不用于数脚趾。静态安全区图检查完整主体与文字、轮播面板和视口边缘的间距，不代替浏览器截图。

使用 npm run convert:webp 首次转换，并检查解码与尺寸。运行 WebP 不重复压缩；临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `d012873ebdb3232e0576a2fe07d1955d0dfa0ea9db892531473e9f63dc9139f8` | `508f57c7b2c87488d17317c5f0f63988c3f5456673a4b6b95dd2c005d0258d75` |
| 02 | `8f22704b96a1a79a4b4f735ee8fc6a533fa15fab220f0f0512c712658679aff1` | `4e0a318b2f50c8b0780bebebea1d53b3225bcf6aca1b657e14a1233524d3abfe` |
| 03 | `27c4e325895cac6bd3ca24476d3f05f948be591b19cf9901e940ce2f20bea6fa` | `46257e7b72e4c4cf01c99a384990b9ac465644fc27c249f1a3ff57eaf33f7d9c` |
| 04 | `8f24a988c1b93fcb00326cd8df2f2da0b81ccb430cbdf923f5d8f1ba4b4884f2` | `855fc79c1da8fa5ed916b85ac3ccddf581ff4976a4b97ff565399d856a66bae4` |
| 05 | `c9dce30d64a833efd7dd78a39c830e1e8dff8aa6a91603172dd30a07df1b7614` | `39257a51a7e0933b53a59dfe70c274054d436ab9de537994c260f433a4f7310b` |
| 06 | `a482cd94d1e6d270f92699a14b480aac05072988d7b3c8f7a0de499e09d6be38` | `6a521b4e144e146454e761ed0a8ee28e54f8d4d6922552e162fbb08a87346951` |

## 最终验证

2026-09-16：生成完成、目视检查完成、封面验收通过。分类与档案测试 189 项、轮播测试 267 项、图片转换测试 1 项、生产构建及子路径测试 3 项通过。构建含 TypeScript 检查，首页脚本 346.16 kB，低于 350 kB 限制。六张图片的尺寸、解码、独立哈希和提示词文件名已核对。
