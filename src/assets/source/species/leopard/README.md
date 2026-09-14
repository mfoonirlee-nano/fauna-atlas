# Leopard image set

2026-09-14 使用内置 image_gen 制作一张封面与五张观察图。最终提示词见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/leopard/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。资料核验见 [五物种资料核验](../../../../../docs/research/five-animals-lobster-to-leopard-2026-09-14.md)。

## 内容来源

- [IUCN SSC Cat Specialist Group：豹自然史与分类](https://www.catsg.org/living-species-leopard)
- [IUCN SSC Cat Specialist Group：豹生态](https://www.catsg.org/living-species-leopard)
- [IUCN SSC Cat Specialist Group：豹全球保护状态](https://www.catsg.org/living-species-leopard)

全球等级为易危，种群总体减少。栖息地破碎化、猎物减少与捕杀是主要威胁；保护生境通道和猎物、降低家畜冲突有助于豹生存。独立评估日期未单独核实，未填 assessedYear。

## 图集

- `01-cover.webp`：完整身体与生活环境。
- `02-observation.webp`：身侧的玫瑰状斑纹。豹头部和侧身的深色斑点与玫瑰状斑纹。
- `03-observation.webp`：沿树干向上爬。豹用四肢抓住倾斜树干向上攀爬。
- `04-observation.webp`：树枝上垂下的长尾巴。豹卧在粗树枝上，长尾巴垂在枝外。
- `05-observation.webp`：伏低身体穿过草丛。豹放低身体穿过草丛。
- `06-observation.webp`：水边低头饮水。豹在水边低头喝水。

## 封面验收

源图与运行 WebP 均为 1536x1024。目视测量完整主体边界：left=716, top=60, right=1480, bottom=965，主体大小 764x905 源像素，中心位于源宽 71.5%。新物种没有旧封面；左侧 40% 留作环境与文字区域。

focalPoint 为 `{"x":0.7,"y":0.5}`。轮播通过现有 hero-subject-frame 按完整主体边界拟合同一 canonical cover；运行 WebP SHA-256：`a3dba820a6d424e6b3d43c92ad477db025514cd40afab1945dd5215293370bff`。

六视口检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。现有 CSS 仅改变透明度，六端点几何相同。下表采用未取整 CSS 像素。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 148.58x176.00 | 85.71 | 48.00 | 40.00 | Pass |
| 390x760 | 148.58x176.00 | 120.71 | 48.00 | 40.00 | Pass |
| 1366x768 | 361.32x428.00 | 96.00 | 150.50 | 48.00 | Pass |
| 1920x900 | 472.75x560.00 | 96.00 | 238.82 | 48.00 | Pass |
| 2560x900 | 472.75x560.00 | 96.00 | 405.22 | 48.00 | Pass |
| 3840x900 | 472.75x560.00 | 96.00 | 738.02 | 48.00 | Pass |

静态几何合成图标注完整主体、文字区和面板区；未启动浏览器。完整主体在六个视口的全部端点均保持至少 24 CSS px 安全间距，并在该约束下填满主体容器的一维。

## 目视检查与限制

图集以典型斑纹个体和疏林环境表达，不代表全部亚种、毛色和生境。树上休息时部分肢体自然遮挡；封面完整边界包括可见爪、耳、头与下垂尾尖。

已检查生成源图与运行封面原始分辨率，并检查运行图集联系表和六视口静态几何合成图。主体构图及封面安全间距通过验收。

## 压缩与哈希

使用 npm run convert:webp 做首次 WebP 转换，并检查尺寸和解码。临时 PNG 在验收后清理，保留六张 WebP、最终提示词和哈希。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `3d5ab9a17ad1ca671846aac8aa70d1790cbfa5dbdd3addd318367399fad74971` | `a3dba820a6d424e6b3d43c92ad477db025514cd40afab1945dd5215293370bff` |
| 02 | `092d2ce4496c8f1bd2c940001808563a817ec7c48cf9af3c00306cc01484f10d` | `c9e2b57367317d42e041014eac8fd824e3da4dba7b9a3f8cf92bc2f26cd9918f` |
| 03 | `1e17eff7235f53806117ee9e824846ff07c07b00366e31b0752d4e97c5b6da7b` | `8100b7322e84adf5673b2132fcac76589f5b6b1f750daabd1ae4a0293caadc66` |
| 04 | `e19918dc49769e7ed644a24832c4e7f4e1afd019739d6b3dc5f4cce4d26a51a1` | `c1ad2c9a760546ca07b3811c54594588ea11df278625a32f7f9e2abf6a5523a8` |
| 05 | `c65f2b6be2f98637f14334db62d73442b24ed877e50b51505a16124c3c31a0c9` | `9edc29b92ace09f7c8c830d59a7975274950758dca487aefb6ae2763b9877e34` |
| 06 | `d16abb6ddd2160944e92f47d389dfa65281fb54f0871eeaeb12a68b9255c16ca` | `77177dd822b9a6e139921c9b7bd1e97d4ea7ccb89e5643bc28e52cc78ae0ca85` |

## 最终验证

2026-09-14 完成静态验收，测试共 465 项通过。分类与物种资源、轮播完整主体与六视口端点检查通过；生产构建包含 TypeScript 检查。首屏脚本体积检查首次失败后，目录序列化压缩了保护等级、分布与分类字段；随后 test:dist-subpath 三项复测通过，包含全部档案独立加载与目录数据无损还原。首屏入口脚本 344600 bytes，低于 350000 bytes 限额。未启动浏览器。
