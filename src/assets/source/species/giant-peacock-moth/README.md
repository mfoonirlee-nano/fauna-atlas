# Giant Peacock Moth image set

2026-09-14 使用内置 image_gen 制作一张封面与五张观察图。最终提示词见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/giant-peacock-moth/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。资料核验见 [五物种资料核验](../../../../../docs/research/five-animals-lobster-to-leopard-2026-09-14.md)。

## 内容来源

- [European Environment Agency EUNIS：Saturnia pyri](https://eunis.eea.europa.eu/species/306787)
- [Associazione Lepidotterologica Italiana：Saturnia pyri 生命周期](https://www.lepidoptera.life/2025/08/01/rubrica-metamorfosi-62-saturnia-pyri/)
- [Naturschutzbund Steiermark：地方保护与威胁](https://www.naturschutzbundsteiermark.at/wiener-nachtpfauenauge-saturnia-pyri/articles/wiener-nachtpfauenauge-saturnia-pyri.html)

EUNIS 记录尚未接受 IUCN 评估，本档案记为未评估。欧洲部分地区已有下降与地方保护记录；保留寄主树、减少农药和夜间灯光干扰有助于保护它。独立评估日期未单独核实，未填 assessedYear。

## 图集

- `01-cover.webp`：完整身体与生活环境。
- `02-observation.webp`：四枚眼状斑。大孔雀蛾展开四片带眼状斑的翅膀。
- `03-observation.webp`：吃梨树叶的幼虫。绿色大孔雀蛾幼虫在树枝上吃叶子，体表有蓝色突起。
- `04-observation.webp`：树枝旁的褐色茧。大孔雀蛾褐色丝茧附着在树枝与树皮附近。
- `05-observation.webp`：雄蛾的羽毛状触角。雄性大孔雀蛾头部一对羽毛状触角。
- `06-observation.webp`：夜里的大孔雀蛾。夜间的大孔雀蛾停在树干上。

## 封面验收

源图与运行 WebP 均为 1536x1024。目视测量完整主体边界：left=665, top=169, right=1522, bottom=692，主体大小 857x523 源像素，中心位于源宽 71.2%。新物种没有旧封面；左侧 40% 留作环境与文字区域。

focalPoint 为 `{"x":0.7,"y":0.5}`。轮播通过现有 hero-subject-frame 按完整主体边界拟合同一 canonical cover；运行 WebP SHA-256：`52077da3b7d127bf01a55b97ebcbd02139307e6c49f3c3170331d5abc017ab52`。

六视口检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。现有 CSS 仅改变透明度，六端点几何相同。下表采用未取整 CSS 像素。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 272.00x165.99 | 24.00 | 53.00 | 45.00 | Pass |
| 390x760 | 288.40x176.00 | 50.80 | 48.00 | 40.00 | Pass |
| 1366x768 | 559.68x341.56 | 72.00 | 51.32 | 91.22 | Pass |
| 1920x900 | 825.60x503.84 | 72.00 | 62.40 | 76.08 | Pass |
| 2560x900 | 917.63x560.00 | 96.00 | 182.79 | 48.00 | Pass |
| 3840x900 | 917.63x560.00 | 96.00 | 515.59 | 48.00 | Pass |

静态几何合成图标注完整主体、文字区和面板区；未启动浏览器。完整主体在六个视口的全部端点均保持至少 24 CSS px 安全间距，并在该约束下填满主体容器的一维。

## 目视检查与限制

幼虫图用于观察绿色身体、蓝色突起与取食；不作为足数解剖示意。茧图没有比例尺。前两次封面构图侵入左侧文字区，重新生成后采用当前封面。四枚眼状斑及触角完整。

已检查生成源图与运行封面原始分辨率，并检查运行图集联系表和六视口静态几何合成图。主体构图及封面安全间距通过验收。

## 压缩与哈希

使用 npm run convert:webp 做首次 WebP 转换，并检查尺寸和解码。临时 PNG 在验收后清理，保留六张 WebP、最终提示词和哈希。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `2be30824aa71450a73768c5e3a764da4562d55543780c5363f347086f4617adf` | `52077da3b7d127bf01a55b97ebcbd02139307e6c49f3c3170331d5abc017ab52` |
| 02 | `5fe39532e64775e379fb943c998c454799093111551fd45983aa4a5e092dd723` | `0b0a47b4f2d4a2267e68278c6cb1a446fdd02d14addaac4f3095b0f38a714fa0` |
| 03 | `8837204da1061bf33b7c830a879887f67f5453b2e8d47ef4494ed58c285753bb` | `ba253e425b961e6316130412f52680c836c0374a1ffbe23c112288781de059d0` |
| 04 | `6fa2c76b142ed357f3861e7f0087cf99a8ce555a75d51c96e26664207a32db79` | `b379b0fa533e3a72195bb6e7491431b4db53cd1b13a4f503a25127cb4ddea4d9` |
| 05 | `bac2bf73894cc08e8cb47c39a64745f91079f1153a4e544bc1f8153e79402bb4` | `ef0e84087921c664de9e1beee2ee90b225809afeb13ac940e77733d35f3bc4d3` |
| 06 | `c296475e29396619d6ce855b4757788add09ec4f7de06a2b8c06384261528675` | `c5c19a9bed93cc1c7dfeac10b87aac261aa442bf43e368b4ae19dc3016cf570b` |

## 最终验证

2026-09-14 完成静态验收，测试共 465 项通过。分类与物种资源、轮播完整主体与六视口端点检查通过；生产构建包含 TypeScript 检查。首屏脚本体积检查首次失败后，目录序列化压缩了保护等级、分布与分类字段；随后 test:dist-subpath 三项复测通过，包含全部档案独立加载与目录数据无损还原。首屏入口脚本 344600 bytes，低于 350000 bytes 限额。未启动浏览器。
