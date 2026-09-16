# Adélie Penguin image set

2026-09-16 使用内置 image_gen 制作。最终提示见 [prompts.json](./prompts.json)，运行图片位于 `public/images/species/adelie-penguin/`。每种保留一张封面和五张图库图片。

资料与分类口径见[五物种资料核验](../../../../../docs/research/five-animals-black-rhino-to-african-penguin-2026-09-16.md)。独立评估日期未核实，assessedYear 留空。

## 图库

- `02-observation.webp`：眼睛外面一圈白。
- `03-observation.webp`：叼石头筑巢。
- `04-observation.webp`：肚子贴着雪滑行。
- `05-observation.webp`：潜进水里找食物。
- `06-observation.webp`：石子巢里的幼鸟。

## 封面验收

这是首次收录，无旧封面可比较。源 PNG 与运行 WebP 均为 1536×1024；目视检查的完整主体边界为 `{"left": 845, "top": 118, "right": 1355, "bottom": 925}`，大小 510×807 源像素，中心位于源宽 71.6%。边界包含可见的口鼻、角、耳尖或嘴尖、鳍状翅、脚趾和尾端；自然遮挡的部分不补画。左 40% 为环境，主体与源图边缘有背景间隔。

focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`95b7965ff46961f66572e36105fbeb9776069240d71f73a7a71d4f74cb98faf9`。首页与档案共用此封面，通过 coverSubjects 的完整主体边界拟合安全区。

源封面与运行 WebP 按原始分辨率目视检查；图库逐张检查源图并复核运行图联系表。用当前 WebP 制作静态安全区检查图，未启动浏览器。几何验证覆盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；当前主体动画仅改变透明度，六端点几何相同。单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 111.23×176.00 | 104.39 | 48.00 | 40.00 | Pass |
| 390x760 | 111.23×176.00 | 139.39 | 48.00 | 40.00 | Pass |
| 1366x768 | 270.48×428.00 | 96.00 | 195.92 | 48.00 | Pass |
| 1920x900 | 353.90×560.00 | 96.00 | 298.25 | 48.00 | Pass |
| 2560x900 | 353.90×560.00 | 96.00 | 464.65 | 48.00 | Pass |
| 3840x900 | 353.90×560.00 | 96.00 | 797.45 | 48.00 | Pass |

## 图像限制与压缩

图片为 AI 生成科学情景重建，不代表实拍、同一个体的连续行为或不同物种间的等比例比较。图库中的近景用于观察指定部位；水、羽毛或植被遮挡处不用于数脚趾。静态安全区图检查完整主体与文字、轮播面板和视口边缘的间距，不代替浏览器截图。

使用 npm run convert:webp 首次转换，并检查解码与尺寸。运行 WebP 不重复压缩；临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `8f8a08ccf83634880571cb9792575e72ca2ab2c273886b3a3d8a65f84597bf0b` | `95b7965ff46961f66572e36105fbeb9776069240d71f73a7a71d4f74cb98faf9` |
| 02 | `539e9518095d80b726c20f1df6ed4168f98ad43f3dae08c7cb5d1bd8444a915d` | `b7e201176b8961bed0ab5d2af2da2bcbc3439a1e16e6289d295db8b447137c97` |
| 03 | `90e58f9537386d519a9697c5e17f4463f2cf7d95f9d98ffb4e99226adc184a35` | `4fbb7ec8e6cb3b7bc4006d52bb908bafa3afc5e612876539fd02cdbe70c9f6bb` |
| 04 | `6c6133fc1b5c95242a062b341c3950ee6304daadd7aec5adcd6a0b35c9948cdd` | `d424b98fcfdfa4f8c465a2715014b67d3b5409cc62f93a37e4664dc2bcee5d69` |
| 05 | `a855a69d7091de3e5d90488d7d1fa1cea4b2988dc258586649e20b9448e782b5` | `8e01382e3c96b524aa164dd49c31533ed2dc03052a47062f70cba53e26331dc7` |
| 06 | `89a7767b83d1a90a935e700c72b536c17a6ee22a1b319962537a7ac50e0e5554` | `6b81480015b9a22bd97400e107ab595ac74d44035b106e1ff67a354ccd8a8a5b` |

## 最终验证

2026-09-16：生成完成、目视检查完成、封面验收通过。分类与档案测试 189 项、轮播测试 267 项、图片转换测试 1 项、生产构建及子路径测试 3 项通过。构建含 TypeScript 检查，首页脚本 346.16 kB，低于 350 kB 限制。六张图片的尺寸、解码、独立哈希和提示词文件名已核对。
