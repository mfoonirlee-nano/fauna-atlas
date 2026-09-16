# King Penguin image set

2026-09-16 使用内置 image_gen 制作。最终提示见 [prompts.json](./prompts.json)，运行图片位于 `public/images/species/king-penguin/`。每种保留一张封面和五张图库图片。

资料与分类口径见[五物种资料核验](../../../../../docs/research/five-animals-black-rhino-to-african-penguin-2026-09-16.md)。独立评估日期未核实，assessedYear 留空。

## 图库

- `02-observation.webp`：颈侧的橙黄色。
- `03-observation.webp`：把蛋放在脚上。
- `04-observation.webp`：棕色的绒毛幼鸟。
- `05-observation.webp`：用鳍状翅游泳。
- `06-observation.webp`：从海里回到岸上。

## 封面验收

这是首次收录，无旧封面可比较。源 PNG 与运行 WebP 均为 1536×1024；目视检查的完整主体边界为 `{"left": 854, "top": 98, "right": 1318, "bottom": 960}`，大小 464×862 源像素，中心位于源宽 70.7%。边界包含可见的口鼻、角、耳尖或嘴尖、鳍状翅、脚趾和尾端；自然遮挡的部分不补画。左 40% 为环境，主体与源图边缘有背景间隔。

focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`b519f4772f76533a7e9477ea5c6838cf4fcd7db26c9d4ae1567664bebf8afce3`。首页与档案共用此封面，通过 coverSubjects 的完整主体边界拟合安全区。

源封面与运行 WebP 按原始分辨率目视检查；图库逐张检查源图并复核运行图联系表。用当前 WebP 制作静态安全区检查图，未启动浏览器。几何验证覆盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；当前主体动画仅改变透明度，六端点几何相同。单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 94.74×176.00 | 112.63 | 48.00 | 40.00 | Pass |
| 390x760 | 94.74×176.00 | 147.63 | 48.00 | 40.00 | Pass |
| 1366x768 | 230.39×428.00 | 96.00 | 215.97 | 48.00 | Pass |
| 1920x900 | 301.44×560.00 | 96.00 | 324.48 | 48.00 | Pass |
| 2560x900 | 301.44×560.00 | 96.00 | 490.88 | 48.00 | Pass |
| 3840x900 | 301.44×560.00 | 96.00 | 823.68 | 48.00 | Pass |

## 图像限制与压缩

图片为 AI 生成科学情景重建，不代表实拍、同一个体的连续行为或不同物种间的等比例比较。图库中的近景用于观察指定部位；水、羽毛或植被遮挡处不用于数脚趾。静态安全区图检查完整主体与文字、轮播面板和视口边缘的间距，不代替浏览器截图。

使用 npm run convert:webp 首次转换，并检查解码与尺寸。运行 WebP 不重复压缩；临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `3ca14bc503223513335f72b834ab3eb83a599fe4e739704567090bc3741c7d0e` | `b519f4772f76533a7e9477ea5c6838cf4fcd7db26c9d4ae1567664bebf8afce3` |
| 02 | `158c3fbb352d24d4f1dce032af58c88aaa42a234b7a265830eba18f43c74b175` | `083c783dc24246636a1441253ead14f809d8a83b7bcd5557bad157820b2a2453` |
| 03 | `ae18b00107aef2b6113e892c7643480e0bd445fdffc3dba6fa75fbf9c81e860f` | `e617e929edd7836b6e10007526ae1ea11420bd292cb825930b59974699b6ee48` |
| 04 | `f3b67339579088a41409524824b4ec4d6fc52ae4e082fd40ade98e114357a3be` | `2e0022606d7b6f9a552dcc6d565aea3f27d73d8dae8e21bc63c6b2ce48fa3c0d` |
| 05 | `03d020877efaa974528ba914566abe758a07c4a2baee383388cc0594d9328143` | `4346c64ee54d01dd6a508f12eb429d661c7215620d4dbeb9ea2ee07d96eef986` |
| 06 | `e24c0027356f454d7653faa9befd09c81e9eda4ea75d9ef8a3eee9e00e8fd4d7` | `22a5f181876c94f68ded4af277c77dfb5f7909fe16d5261b1d2969c9655e7e2c` |

## 最终验证

2026-09-16：生成完成、目视检查完成、封面验收通过。分类与档案测试 189 项、轮播测试 267 项、图片转换测试 1 项、生产构建及子路径测试 3 项通过。构建含 TypeScript 检查，首页脚本 346.16 kB，低于 350 kB 限制。六张图片的尺寸、解码、独立哈希和提示词文件名已核对。
