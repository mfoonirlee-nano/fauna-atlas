# Caracal image set

2026-09-14 使用内置 image_gen 制作一张封面与五张观察图。最终提示词见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/caracal/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。资料核验见 [五物种资料核验](../../../../../docs/research/five-animals-lobster-to-leopard-2026-09-14.md)。

## 内容来源

- [IUCN SSC Cat Specialist Group：狞猫](https://www.catsg.org/living-species-caracal)
- [Mammalian Species：Caracal caracal](https://academic.oup.com/mspecies/article/52/993/71/6016926)
- [IUCN SSC Cat Specialist Group：狞猫保护状态](https://www.catsg.org/living-species-caracal)

全球等级为无危，全球趋势尚不清楚；部分亚洲和北非种群稀少。保护有植被的生境、减少捕杀和家畜冲突仍有必要。独立评估日期未单独核实，未填 assessedYear。

## 图集

- `01-cover.webp`：完整身体与生活环境。
- `02-observation.webp`：耳尖的黑色长毛。狞猫头部两只尖耳朵上有黑色长毛。
- `03-observation.webp`：长腿走过干草地。狞猫用长腿走过稀疏的干草地。
- `04-observation.webp`：跃起时的前爪和后腿。狞猫在草地上跃起，前爪伸出、后腿弯曲。
- `05-observation.webp`：岩石阴影里休息。狞猫卧在岩石旁的阴影中。
- `06-observation.webp`：伏低身体前行。狞猫放低身体穿过草丛。

## 封面验收

源图与运行 WebP 均为 1536x1024。目视测量完整主体边界：left=705, top=32, right=1490, bottom=933，主体大小 785x901 源像素，中心位于源宽 71.5%。新物种没有旧封面；左侧 40% 留作环境与文字区域。

focalPoint 为 `{"x":0.7,"y":0.5}`。轮播通过现有 hero-subject-frame 按完整主体边界拟合同一 canonical cover；运行 WebP SHA-256：`54cc04e0229c3a19841b9721c44e2f055e1439649e3ff849fb4ddd6f2487db28`。

六视口检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。现有 CSS 仅改变透明度，六端点几何相同。下表采用未取整 CSS 像素。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 153.34x176.00 | 83.33 | 48.00 | 40.00 | Pass |
| 390x760 | 153.34x176.00 | 118.33 | 48.00 | 40.00 | Pass |
| 1366x768 | 372.90x428.00 | 96.00 | 144.71 | 48.00 | Pass |
| 1920x900 | 487.90x560.00 | 96.00 | 231.25 | 48.00 | Pass |
| 2560x900 | 487.90x560.00 | 96.00 | 397.65 | 48.00 | Pass |
| 3840x900 | 487.90x560.00 | 96.00 | 730.45 | 48.00 | Pass |

静态几何合成图标注完整主体、文字区和面板区；未启动浏览器。完整主体在六个视口的全部端点均保持至少 24 CSS px 安全间距，并在该约束下填满主体容器的一维。

## 目视检查与限制

耳簇近景用于观察耳朵，肩部自然出框。跳跃图是一个重建瞬间，没有猎物，不表示实测跳跃高度。封面耳簇、足端与尾尖完整。

已检查生成源图与运行封面原始分辨率，并检查运行图集联系表和六视口静态几何合成图。主体构图及封面安全间距通过验收。

## 压缩与哈希

使用 npm run convert:webp 做首次 WebP 转换，并检查尺寸和解码。临时 PNG 在验收后清理，保留六张 WebP、最终提示词和哈希。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `7c462737b61662f65ad7a025aba93e41d628a2c71b9707e85cbadf677399764e` | `54cc04e0229c3a19841b9721c44e2f055e1439649e3ff849fb4ddd6f2487db28` |
| 02 | `cfb887aeb03dca90cb36b4c8a0da7ad5ffa19235ebad112a40911ed5c88df59c` | `1567f20fde0c80802b47e80803138cea9a3307683881fe4f641ddefd4c0c73ac` |
| 03 | `d18d7f4c922bbd79625d449777524a5ab317119b094520038d96fd503934fdcd` | `0d1f402ba28b442d3246dabdf58112f1dd4acf697358e8593683d7e64b921777` |
| 04 | `0e0a00de6b32d9fa7f1c2b0b1cda4de94e1bec56706945e6f5b7bd6ec751fec4` | `4468961c41649793688d2add2b9906e31103f2c65238743db120324fac5ca303` |
| 05 | `b6687673e504228255dbf3a5b9a2f6b715fa55669f56837a4e8d040de18dc6a9` | `0429604962245dd0e69c8f392846f00fd547d857a45a41099ab5320bb5698d25` |
| 06 | `39b20423ca6058efb3f5ba1e4fb03465affad91630bf1007b6f4eb30f49cca9c` | `142483427148bea2a243bd51f7712eb7176f99dc826627895124fcd473b431a3` |

## 最终验证

2026-09-14 完成静态验收，测试共 465 项通过。分类与物种资源、轮播完整主体与六视口端点检查通过；生产构建包含 TypeScript 检查。首屏脚本体积检查首次失败后，目录序列化压缩了保护等级、分布与分类字段；随后 test:dist-subpath 三项复测通过，包含全部档案独立加载与目录数据无损还原。首屏入口脚本 344600 bytes，低于 350000 bytes 限额。未启动浏览器。
