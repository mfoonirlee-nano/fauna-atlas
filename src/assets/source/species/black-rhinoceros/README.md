# Black Rhinoceros image set

2026-09-16 使用内置 image_gen 制作。最终提示见 [prompts.json](./prompts.json)，运行图片位于 `public/images/species/black-rhinoceros/`。每种保留一张封面和五张图库图片。

资料与分类口径见[五物种资料核验](../../../../../docs/research/five-animals-black-rhino-to-african-penguin-2026-09-16.md)。独立评估日期未核实，assessedYear 留空。

## 图库

- `02-observation.webp`：用上唇取食。
- `03-observation.webp`：粗壮的腿。
- `04-observation.webp`：在泥水里打滚。
- `05-observation.webp`：竖起耳朵。
- `06-observation.webp`：幼崽跟着走。

## 封面验收

这是首次收录，无旧封面可比较。源 PNG 与运行 WebP 均为 1536×1024；目视检查的完整主体边界为 `{"left": 632, "top": 239, "right": 1487, "bottom": 835}`，大小 855×596 源像素，中心位于源宽 69.0%。边界包含可见的口鼻、角、耳尖或嘴尖、鳍状翅、脚趾和尾端；自然遮挡的部分不补画。左 40% 为环境，主体与源图边缘有背景间隔。

focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`d4a3c3a30820b1dd57ae975f47bf1a7cfd3faa554dbe8760eecdd8169af5c0b1`。首页与档案共用此封面，通过 coverSubjects 的完整主体边界拟合安全区。

源封面与运行 WebP 按原始分辨率目视检查；图库逐张检查源图并复核运行图联系表。用当前 WebP 制作静态安全区检查图，未启动浏览器。几何验证覆盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；当前主体动画仅改变透明度，六端点几何相同。单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 252.48×176.00 | 33.76 | 48.00 | 40.00 | Pass |
| 390x760 | 252.48×176.00 | 68.76 | 48.00 | 40.00 | Pass |
| 1366x768 | 559.68×390.14 | 72.00 | 51.32 | 66.93 | Pass |
| 1920x900 | 803.36×560.00 | 83.12 | 73.52 | 48.00 | Pass |
| 2560x900 | 803.36×560.00 | 96.00 | 239.92 | 48.00 | Pass |
| 3840x900 | 803.36×560.00 | 96.00 | 572.72 | 48.00 | Pass |

## 图像限制与压缩

图片为 AI 生成科学情景重建，不代表实拍、同一个体的连续行为或不同物种间的等比例比较。图库中的近景用于观察指定部位；水、羽毛或植被遮挡处不用于数脚趾。静态安全区图检查完整主体与文字、轮播面板和视口边缘的间距，不代替浏览器截图。

使用 npm run convert:webp 首次转换，并检查解码与尺寸。运行 WebP 不重复压缩；临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `85361d5e5ef7935d76b92a4644859d9eee9e9e1211775d629c8b92760b6d4cb4` | `d4a3c3a30820b1dd57ae975f47bf1a7cfd3faa554dbe8760eecdd8169af5c0b1` |
| 02 | `51c7b6c10388c43c9a20de320a12fc5ce35937122b6f2b552edc6c1e4e71ccdf` | `43f27a630b89561b3022b9ac067c16008229fc798af01a95861898aae7d1cac4` |
| 03 | `7d1d4d10d3e595bcdc6505b1e30cd785faa2c16bdc3127b25b592eea17391456` | `a35b986fa919214958071432a3d3e69bb78f25a23b4976fa4e550c29d37d8ce0` |
| 04 | `9db386c1688c5f35bf709547c135f82b0d225b7ee38b5c282401132efba0cd41` | `0377f35a77644c07c2738f446060ef1fbf0e63e5de59463a76dc0fd64d885c86` |
| 05 | `2c26fa3c520473e0a7dbb6e34c9537bad6a6ed4ce2107aa4296c35e4b9db7890` | `3784a825c4d62f03e90b48862ede19fd4ee1a3a92dd46ea2efca6bad972c8f0e` |
| 06 | `511f856d9c9e8f6e3a270e45d148cf4ee9ffc4402b8e31f78ffe01b3d7b7bea2` | `ea2265a6b87bf955681c231ece1bc88b6edaec954c910ed33ff311bf7d1b58c7` |

## 最终验证

2026-09-16：生成完成、目视检查完成、封面验收通过。分类与档案测试 189 项、轮播测试 267 项、图片转换测试 1 项、生产构建及子路径测试 3 项通过。构建含 TypeScript 检查，首页脚本 346.16 kB，低于 350 kB 限制。六张图片的尺寸、解码、独立哈希和提示词文件名已核对。
