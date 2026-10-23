# 新奇动物第二批五种

日期：2026-10-23。完成 N079 水蜘蛛、N076 达氏柄眼蝇、N009 狮鬃海蛞蝓、N062 海绵背蟹、N097 龟蛙。每种增加一份物种档案、一张封面和五张观察图，目录从 805 种增至 810 种。

## 资料与分类

逐项行为、形态、分布、发现与命名依据见[水蜘蛛、柄眼蝇与龟蛙研究](todo-novel-second-five-terrestrial-2026-10-23.md)和[海蛞蝓与海绵背蟹研究](todo-novel-second-five-marine-2026-10-23.md)。采用路径及初筛查询对照见[分类记录](../../src/assets/source/todo-novel-second-five-taxonomy.json)。

| 编号 | 物种档案 | 学名 | 采用的科 | 主要核对事项 |
| --- | --- | --- | --- | --- |
| N079 | 水蜘蛛 | *Argyroneta aquatica* | Argyronetidae，水蛛科 | 采用 WSC 修订归属，保留 GBIF 和旧论文科名的差异；不同时建立三个科。 |
| N076 | 达氏柄眼蝇 | *Teleopsis dalmanni* | Diopsidae，突眼蝇科 | 按种级修订核对三条暗翅带、细毛和前股节；眼与触角位于眼柄末端。 |
| N009 | 狮鬃海蛞蝓 | *Melibe leonina* | Tethydidae，大嘴海牛科 | 大口兜、嗅角与背突分开解释；开合、游泳和卵带有机构观察依据。 |
| N062 | 海绵背蟹 | *Dromia personata* | Dromiidae，绵蟹科 | 五对胸足包括一对螯、两对步行足、两对后部抓握足；海绵是携带物。 |
| N097 | 龟蛙 | *Myobatrachus gouldii* | Myobatrachidae，龟蟾科 | 前肢向前挖掘、卵内直接发育；白蚁只是食物之一，不采用早期专食推断。 |

龟蛙采用已核实的全球 IUCN LC、2021 年评估和 stable 趋势。其余四种未核实全球评估，NE 为项目资料占位，未填写评估日期，不作为安全或无风险结论。

## 图片与提示词

本批使用内置 image_gen，未使用 CLI/API。每种最终六张 WebP 保存在 `public/images/species/<slug>/`。提示词、被拒收封面尝试、最终采用版本及一次卵图编辑记录保存在各图片集的 `prompts.json`；临时源 PNG 验收后移出项目，仅保留哈希和尺寸记录。

| 档案 | 配图、提示词与验收证据 |
| --- | --- |
| 水蜘蛛 | [diving-bell-spider](../../src/assets/source/species/diving-bell-spider/README.md) |
| 达氏柄眼蝇 | [dalman-stalk-eyed-fly](../../src/assets/source/species/dalman-stalk-eyed-fly/README.md) |
| 狮鬃海蛞蝓 | [lion-mane-nudibranch](../../src/assets/source/species/lion-mane-nudibranch/README.md) |
| 海绵背蟹 | [sponge-crab](../../src/assets/source/species/sponge-crab/README.md) |
| 龟蛙 | [turtle-frog](../../src/assets/source/species/turtle-frog/README.md) |

初稿有眼柄或口兜侵入左侧留白、足部贴近边缘等问题。四种封面先尝试编辑，仍不满足构图后重新生成；水蜘蛛采用初版。最终图均检查完整轮廓及可见附肢，海绵背蟹连同海绵、水蜘蛛连同主要气室纳入边界。龟蛙卵图多生成一只成体，已用内置编辑移除，避免暗示未核实的守卵行为。

生成图用于说明外形和行为，不作为鉴定、逐足计数或尺度测量的证据。自然遮挡、透明组织和种内变化分别在图片集注明；卵发育图、地下洞室及行为画面标为科学情景示意。

## 图像与适配检查

分别检查六张源图和六张运行 WebP 联系表，五张源封面与五张运行封面另按原分辨率检查。运行 WebP 使用 ImageMagick 独立解码尺寸并记录 SHA-256；主体表和对应原始封面 fixture 与该哈希绑定。

九档视口覆盖 320、390、761、900、1100、1366、1920、2560、3840 像素宽，以及桌面内容增高 160px 的场景，共 80 个视口与内容高度组合。所有记录的完整主体间距不低于 24 CSS px。动画仅改变透明度，静止及进出端点使用同一几何。逐种查看 390、761、1920、3840 宽的图片栏模拟。

静态几何与图片栏模拟不验证浏览器字体、完整页面排版或实际内容高度。本次按项目要求没有启动 GUI 或无头浏览器。

## 完成验证与清单同步

`npm run typecheck` 与 `npm test` 全部通过。完整测试包含分类、档案加载、五项文案来源、分类图谱、地图、810 种封面轮播、图片查看器、目录、微生物隔离及部署子路径构建与 JavaScript 预算检查。`git diff --check` 通过。

todo 已补记上次提交的五种，累计完成 10 种、待制作 90 种。前次 100 种候选研究保留选题时的 800 种基线，不改写为当前目录统计。
