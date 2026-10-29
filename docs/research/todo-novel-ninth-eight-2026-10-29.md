# 新奇动物第九批八种

2026-10-29 本批新增八份动物档案，每种一张封面与五张观察图，目录由 840 增至 848。TODO 是否完成以文末最终验收为准。

## 名称与统一分类

| 编号 | 中文选题名 | 接受学名 | 纲 / 目 / 科 |
| --- | --- | --- | --- |
| N043 | 脆壳粉红海胆 | Strongylocentrotus fragilis | Echinoidea / Camarodonta / Strongylocentrotidae |
| N045 | 赭色海星 | Pisaster ochraceus | Asteroidea / Forcipulatida / Asteriidae |
| N046 | 偏心沙钱 | Dendraster excentricus | Echinoidea / Echinolampadacea / Dendrasteridae |
| N047 | 橙色瓜参 | Cucumaria miniata | Holothuroidea / Dendrochirotida / Cucumariidae |
| N048 | 蝙蝠海星 | Patiria miniata | Asteroidea / Valvatida / Asterinidae |
| N054 | 海鼠 | Aphrodita aculeata | Polychaeta / Phyllodocida / Aphroditidae |
| N055 | 胡须火焰虫 | Hermodice carunculata | Polychaeta / Amphinomida / Amphinomidae |
| N056 | 地中海扇虫 | Sabella spallanzanii | Polychaeta / Sabellida / Sabellidae |

逐种实际读取 GBIF 接受名、完整异名分页和 WoRMS 接受种记录。八种在所用阶元上的路径一致，接受名和异名均未与 840 份基线档案重叠。Walla Walla 的沙钱页面仍列旧目 Clypeasteroida，本图册采用本次 GBIF 与 WoRMS 一致的 Echinolampadacea，不照搬旧网页路径。同名分类单元复用目录已有中文名；未核实的少见中文阶元名使用拉丁名加阶元。

相对 840 份基线，新增 2 个目、6 个科、7 个属；未新增门、纲。原始名称及异名响应见[分类快照](../../src/assets/source/todo-novel-ninth-eight-taxonomy.json)。此检查排除直接重名及已列异名重叠，不代替种界研究。

## 资料与文案限制

生活资料分别来自 MBARI、Walla Walla University、蒙特雷湾水族馆、MarLIN、Naturalis 与澳大利亚 NIMPIS，逐种链接存于档案。参考页面、图片 URL 与哈希见[参考清单](../../src/assets/source/todo-novel-ninth-eight-references.json)。参考图片不在公开素材目录重新发布。另读取 NIMPIS 的 XLSX 完整导出并解析单元格，确认扇虫的悬浮摄食记录；下载 URL 与哈希记入参考清单。

- 活沙钱使用深色短棘绒面，浅色空壳另行说明。斜立、平躺与花瓣纹的位置均有资料支持，不把空壳画成白色活体。
- 赭色海星的粗腕和背部网纹与蝙蝠海星的短三角腕、宽蹼分开。五腕为常见个体形态，不声称所有个体腕数固定。
- 橙色瓜参以柔软身体、管足与十根主口触手定位，不沿用鳞甲海参的背甲，也不把口触手当作多个珊瑚虫。分枝数量和姿态不作显微测量或连续动作记录。
- 海鼠的虹彩来自刚毛反光，不是发光；毛毡遮住的背鳞不凭想象画成外露鳞甲。前端不添加鼠类五官。
- 胡须火焰虫使用 Naturalis 的形态文字和历史结构插图，区分白色刚毛簇与红色分枝鳃。Commons 的自然照片下载返回 403，额外下载授权取消，未下载或使用这些照片；也未把历史插图称为自然摄影。当前来源没有核实具体食谱，食物与食性数组留空，界面显示“尚未核实”。
- 地中海扇虫区分两侧叶鳃冠：一侧明显螺旋，另一侧较小。原生范围与澳大利亚、新西兰引入记录分开，不把移植扩散写成保护行动。
- 八种全球保护评估均使用独立 UNVERIFIED 编辑状态，没有填入 IUCN NE、评估年份、标准或猜测趋势。未填猜测的寿命、体重、种群数量和代表坐标。

## 图片审核与封面适配

保留 48 张独立 WebP，逐张实际解码为 1536×1024。生成提示词、参考图哈希、源图及运行图尺寸与哈希、逐种可见形态核对、完整主体边界和静态适配记录位于 `src/assets/source/species/<slug>/`。

已分别查看八套源图和运行 WebP，八张封面检查原始分辨率的源 PNG 与运行 WebP。首版胡须火焰虫封面主体偏左，橙色瓜参触手过近边缘，均通过 image_gen 重画后重新转换、检查和绑定哈希；失败候选不计入保留六图。扇虫第四张实际呈现展开鳃冠，图注改为“斜看鳃冠与长管”，不虚称收回动作。

封面边界包括全部可见棘、腕端、口触手分枝、刚毛、鳃冠及管基。源图水平主体中心均至少 60%，仍有部分细末端进入左侧，左侧以环境为主；新封面的提示词位置不作为实际像素位置证据。运行尺寸、完整轮廓和 SHA-256 已同步到 cover-subjects.ts 与唯一封面 fixture。

九档规定视口及桌面内容增加 160px，共每种 16 组、八种 128 组；六种透明度端点共 768 次静态几何检查，最小间距在浮点容差内均不低于 24 CSS px。逐种查看 390、761、1920、3840 宽度的图片栏静态模拟，主体未与图片栏边缘相交。按仓库规定没有启动浏览器，静态模拟不验证浏览器字体、实际文字高度或完整页面。可见形态核对属于编辑性参考对照，不构成标本鉴定或专家审签。

## 最终验收

首轮 npm test 因 PATH 缺少已安装的 cwebp 中止；补上工具路径后重新运行整条命令，最终退出码 0：1185 项通过，0 失败、0 跳过、0 取消。包括类型编译、图片转换、分类与文案、地图交互、轮播几何与界面、图片查看器、品牌、物种列表、微生物专题、生产构建与子路径检查。不将首轮失败运行记作成功。

最终动物页与静态依赖 JavaScript 为 544,136 字节，低于原 550,000 字节预算，各分块预算保持不变。48 张运行图的实际解码、尺寸、唯一性与 SHA-256 核对通过；8 个封面与 fixture 绑定、文档链接及 git diff --check 通过。

八项已勾选，TODO 完成 46/100、待制作或返修 54；棘皮动物组完成 8/8，环节、海绵及其他动物组完成 3/16。此前紫毯章鱼、龙骨新月贝和双列管水母仍保留待返修或待制作状态。
