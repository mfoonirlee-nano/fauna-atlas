# Bornean Orangutan image set

2026-09-14 使用内置 image_gen 制作封面与五张观察图。提示词和修改记录见 [prompts.json](./prompts.json)。运行资产：`public/images/species/bornean-orangutan/`。AI 生成科学情景重建，不代表实拍地点或连续观察记录。

## 内容依据

- [ASM Mammal Diversity Database：婆罗洲猩猩](https://www.mammaldiversity.org/taxon/1000722/)
- [Smithsonian National Zoo：猩猩的外形与生活](https://nationalzoo.si.edu/animals/orangutan)
- [San Diego Zoo：猩猩的树巢与学习](https://zoonooz.sandiegozoo.org/zoonooz/great-apes-of-asia/)
- [ASM MDD 转引 IUCN：极危等级](https://www.mammaldiversity.org/taxon/1000722/)

资料核对日期：2026-09-14。详细事实口径见 [研究记录](../../../../../docs/research/next-five-animals-2026-09-14.md)。未填入未经核实的评估年份。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：长臂伸向树枝。雌性婆罗洲猩猩用长臂抓住上方树枝。
- `03-observation.webp`：雄性的宽脸颊。成年雄性婆罗洲猩猩脸颊两侧有宽大颊垫。
- `04-observation.webp`：树上的果实。雌性婆罗洲猩猩坐在树枝上取食果实。
- `05-observation.webp`：搭建枝叶巢。婆罗洲猩猩在树上整理枝条和叶子。
- `06-observation.webp`：母亲身边的幼仔。婆罗洲猩猩母亲坐在树枝上，幼仔依附在身边。

第二张长臂观察图中雌性身前有幼仔。

## 封面与图集验收

源 PNG 与运行 WebP 均为 1536×1024。逐张检查源图与运行图；按原始分辨率复核封面。完整可见主体边界为 `{"left": 680, "top": 90, "right": 1415, "bottom": 880}`，大小 735×790 源像素，中心位于源宽度的 68.2%。边界包含可见头部、嘴、冠羽、手足和尾缘，主体与源边缘之间保留真实背景。focalPoint 为 `{"x":0.7,"y":0.5}`。新物种无旧运行封面。

运行封面 SHA-256：`298838d561fee812039d02f772b27912b09d0142ecb9dde676ad3dfaa8f3c15c`。

采用现有 hero-subject-frame 完整主体适配。手机与桌面使用同一封面。按当前 CSS 计算 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；六端点只改变透明度，几何相同。静态合成检查主体与文字、面板、视口边缘的间距，不启动浏览器。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 全部六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 163.75×176.00 | 78.13 | 48.00 | 40.00 | Pass |
| 390×760 | 163.75×176.00 | 113.13 | 48.00 | 40.00 | Pass |
| 1366×768 | 398.20×428.00 | 96.00 | 132.06 | 48.00 | Pass |
| 1920×900 | 521.01×560.00 | 96.00 | 214.69 | 48.00 | Pass |
| 2560×900 | 521.01×560.00 | 96.00 | 381.09 | 48.00 | Pass |
| 3840×900 | 521.01×560.00 | 96.00 | 713.89 | 48.00 | Pass |

## 压缩与哈希

使用 `npm run convert:webp` 转换，检查解码和尺寸；保留六张 WebP。记录哈希后清理仓库中的临时 PNG，生成工具默认目录中的原件保持不变。图像用于外形和行为示意，不用于精确测量或推断亲缘关系。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `4065f49a0d23b27243832e458f7a8bef7ff994cf3de00e9326b149470e3379ae` | `298838d561fee812039d02f772b27912b09d0142ecb9dde676ad3dfaa8f3c15c` |
| 02 | `0d7631a61501fb07f5675efaff66dea20b8df3b490e8d83947e622e35b17bf85` | `c896ca74a2b386761295272e54668e7af4a33cb6247563a585113adf075d9274` |
| 03 | `f7bff6ba12128a492592c738b3f1122677a5d021b16f1aedfaa0fe6195cc8bc3` | `62941ead19c0a56c7548727cbf6dc69139a0dd128a7cb3548604261da2b65b22` |
| 04 | `d718cbb940af17c737efb17bec5cab2a4157b7c62655df7f244163bb0fc2bd74` | `b923207102b8ad3912b5ae842b0ff0ece0e298cdf7f0813cfa1c8b271b389933` |
| 05 | `57f96c9e80ecc1dfa96821560fc0b22f1f5caac6daa2fdcb73d1f1de060b70fd` | `2d961f64c4b18cb0fd2878169021ca077e954edf912136030a58a9788938b631` |
| 06 | `5ac47857e4dc15e1e1d31cbb5b3bc63878e06f474f40f088a76f2dd077d06c6f` | `23465a2538aea5dcad7125acfb74d1c7b38b550c1669a2a64509454baf9effdb` |

## 仓库验证

2026-09-14：新增五物种身份、六图数量、解码及哈希检查通过。轮播 222 项通过，包含本批五个完整主体用例，覆盖六视口与六动画端点。已复核运行 WebP 联系表、原始分辨率封面和静态几何合成图。类型检查、生产构建、生产子路径加载、分类浏览、图片查看器、图片转换、物种列表、品牌标记及 Cloudflare 部署脚本测试通过。临时 PNG 已清理。

全量 taxonomy 测试 181 项中 107 通过、74 失败；失败名单与修改前基线完全相同，均为既有图片验收哈希问题。本批没有新增失败，未修改历史哈希记录。未启动 GUI 或无头浏览器。
