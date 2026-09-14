# Cockatiel image set

2026-09-14 使用内置 image_gen 制作封面与五张观察图。提示词和修改记录见 [prompts.json](./prompts.json)。运行资产：`public/images/species/cockatiel/`。AI 生成科学情景重建，不代表实拍地点或连续观察记录。

## 内容依据

- [BirdLife HANZAB：凤头鹦鹉科分类](https://hanzab.birdlife.org.au/hanzab-taxonomy/hanzab-taxonomy-top/)
- [BirdLife Australia：鸡尾鹦鹉](https://birdlife.org.au/bird-profiles/cockatiel/)
- [World Parrot Trust：鸡尾鹦鹉状态与生物资料](https://parrots.org/encyclopedia/cockatiel/)

资料核对日期：2026-09-14。详细事实口径见 [研究记录](../../../../../docs/research/next-five-animals-2026-09-14.md)。未填入未经核实的评估年份。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：头顶的冠羽。野生型雄性鸡尾鹦鹉竖起细长冠羽，脸侧可见橙色耳斑。
- `03-observation.webp`：低头找草籽。鸡尾鹦鹉在地面低头采食草籽。
- `04-observation.webp`：白翼斑和长尾。鸡尾鹦鹉侧身站在树枝上，白色翼斑与长尾清楚可见。
- `05-observation.webp`：伙伴到水边。一小群野生鸡尾鹦鹉在浅水边饮水。
- `06-observation.webp`：树洞旁的成鸟。两只鸡尾鹦鹉停在桉树树洞附近。

第四张观察图以白色翼斑和长尾为主，冠羽顶端出框；封面完整保留冠羽。第六张已将雌鸟脸颊改为野生型的暗橙色耳斑。

## 封面与图集验收

源 PNG 与运行 WebP 均为 1536×1024。逐张检查源图与运行图；按原始分辨率复核封面。完整可见主体边界为 `{"left": 875, "top": 130, "right": 1420, "bottom": 925}`，大小 545×795 源像素，中心位于源宽度的 74.7%。边界包含可见头部、嘴、冠羽、手足和尾缘，主体与源边缘之间保留真实背景。focalPoint 为 `{"x":0.7,"y":0.5}`。新物种无旧运行封面。

运行封面 SHA-256：`4ac328f11ebf2d23513642c31098f97de68e9ccce8a665155f3a4d21c5327894`。

采用现有 hero-subject-frame 完整主体适配。手机与桌面使用同一封面。按当前 CSS 计算 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；六端点只改变透明度，几何相同。静态合成检查主体与文字、面板、视口边缘的间距，不启动浏览器。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 全部六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 120.65×176.00 | 99.67 | 48.00 | 40.00 | Pass |
| 390×760 | 120.65×176.00 | 134.67 | 48.00 | 40.00 | Pass |
| 1366×768 | 293.41×428.00 | 96.00 | 184.46 | 48.00 | Pass |
| 1920×900 | 383.90×560.00 | 96.00 | 283.25 | 48.00 | Pass |
| 2560×900 | 383.90×560.00 | 96.00 | 449.65 | 48.00 | Pass |
| 3840×900 | 383.90×560.00 | 96.00 | 782.45 | 48.00 | Pass |

## 压缩与哈希

使用 `npm run convert:webp` 转换，检查解码和尺寸；保留六张 WebP。记录哈希后清理仓库中的临时 PNG，生成工具默认目录中的原件保持不变。图像用于外形和行为示意，不用于精确测量或推断亲缘关系。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `1ea0bcdf4bef572c49ea89b6884305817fa800dd9ea23d0bf891a35b7ef306d7` | `4ac328f11ebf2d23513642c31098f97de68e9ccce8a665155f3a4d21c5327894` |
| 02 | `347740f626ccc2b2d1554e56b3715e104fd6d13855a19b008f00f68f8188e1d6` | `63f498ed3d04a4b41c39afdc43f3aae6d1c7d7ea21ba0b2c31e90faa05ad1ad0` |
| 03 | `dcaf0bda7cef45f51bfbb10056b130955da697b81b6546ba1603066697aafe3d` | `2c0a78c6a68de38fd366e541d6623c74932105ffd6c3debaadf19f2815f7b5ce` |
| 04 | `b04b7b264e837e154c283f6f059e09aa8fa355eb91388cf2848dc9e15c68704c` | `83a254f4aa60924a8df28959a725c0faa17f5a3f2e7b53556044976482cfd74a` |
| 05 | `3c140602a817e96f994460cd3b5cfc9c7f1c733eb8ac91adc29a82637df330ba` | `2019fed6d55f374fd6c5f6b5390b2b219789efc04bb7d911c6fe14621c4d99cc` |
| 06 | `5e4ebc03b6cc25fcbb6271f3bc0fb016df34d7e21503b0189f0c88a90ec3151b` | `9c6b7112e7f1f2b66d43ecfa2be223b37ecf73465be6a1de9aa299b71bca70ca` |

## 仓库验证

2026-09-14：新增五物种身份、六图数量、解码及哈希检查通过。轮播 222 项通过，包含本批五个完整主体用例，覆盖六视口与六动画端点。已复核运行 WebP 联系表、原始分辨率封面和静态几何合成图。类型检查、生产构建、生产子路径加载、分类浏览、图片查看器、图片转换、物种列表、品牌标记及 Cloudflare 部署脚本测试通过。临时 PNG 已清理。

全量 taxonomy 测试 181 项中 107 通过、74 失败；失败名单与修改前基线完全相同，均为既有图片验收哈希问题。本批没有新增失败，未修改历史哈希记录。未启动 GUI 或无头浏览器。
