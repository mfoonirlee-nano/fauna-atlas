# 新奇动物第三批五种

日期：2026-10-23。完成 N010 海兔兔、N016 深海兜帽海蛞蝓、N002 金带栉水母、N044 向日葵海星、N063 雪人蟹。每种增加一份物种档案、一张封面和五张观察图，目录从 810 种增至 815 种。

## 资料与分类

逐项来源和证据边界见[海兔兔、深海海蛞蝓与栉水母研究](todo-novel-third-five-molluscs-comb-2026-10-23.md)、[海星与雪人蟹研究](todo-novel-third-five-star-crab-2026-10-23.md)。采用路径与初筛查询对照见[分类记录](../../src/assets/source/todo-novel-third-five-taxonomy.json)。初筛 GBIF 数据保留 2026-10-22 日期，采用路径以本次核实的专业来源为准。

| 编号 | 物种档案 | 学名 | 科级归属 | 内容重点 |
| --- | --- | --- | --- | --- |
| N010 | 海兔兔 | *Jorunna parva* | Discodorididae | 两根嗅角、后背鳃簇与短乳突；区分近似种，具体食谱待核实。 |
| N016 | 深海兜帽海蛞蝓 | *Bathydevius caudactylus* | Bathydeviidae | 透明兜帽、扁尾指突、深海水层生活；首次观察和正式命名分年记录。 |
| N002 | 金带栉水母 | *Cestum veneris* | Cestidae | 新增带栉目；中央口、反口侧梳板和扁平带体，区分照明反光与生物光。 |
| N044 | 向日葵海星 | *Pycnopodia helianthoides* | Asteriidae | 少腕幼体与多腕成体、管足、疾病与全球保护评估。 |
| N063 | 雪人蟹 | *Kiwa hirsuta* | Kiwaidae | 细长螯臂、羽状刚毛和退化眼部；不移植其他雪人蟹的培菌行为。 |

向日葵海星采用全球 IUCN CR、2020 年评估和 decreasing 趋势。评估材料在 2021 年发表，发表年不写成评估年。其余四种未核实可追溯的全球评估，NE 为资料占位，不填年份，也不推断无风险。海兔兔食物保留空值，说明本轮未找到可靠的本种摄食记录。

## 图片与提示词

使用内置 image_gen 逐图生成，未使用 CLI/API。最终每种六张 WebP 位于 `public/images/species/<slug>/`；提示词、封面尝试及采用版本记录在以下图片集的 `prompts.json`。

| 档案 | 图片集与验收证据 |
| --- | --- |
| 海兔兔 | [sea-bunny](../../src/assets/source/species/sea-bunny/README.md) |
| 深海兜帽海蛞蝓 | [mystery-nudibranch](../../src/assets/source/species/mystery-nudibranch/README.md) |
| 金带栉水母 | [venus-girdle](../../src/assets/source/species/venus-girdle/README.md) |
| 向日葵海星 | [sunflower-sea-star](../../src/assets/source/species/sunflower-sea-star/README.md) |
| 雪人蟹 | [yeti-crab](../../src/assets/source/species/yeti-crab/README.md) |

初稿中深海兜帽海蛞蝓、金带栉水母和向日葵海星侵入左侧留白，重新生成后检查完整轮廓。图像用于科普观察，明确标注 AI 科学情景重建；局部结构、微生物放大、发光和幼成体比较不作为实测数据。不同成体腕数、部分足的自然遮挡和透明组织可见程度分别记录在图片集中。

## 图像与适配检查

已分别查看三十张源图与三十张运行图联系表；五张源封面及对应运行 WebP 另按原分辨率检查。金带栉水母观察图 02、04、05、06 初稿有横向重复条纹，重做为反口侧纵向梳板和较清透的带体后重新检查；完整生成历史保留在 prompts.json。使用 ImageMagick 独立解码运行尺寸并计算 SHA-256，主体表与原始封面 fixture 绑定当前封面哈希。验收后移除项目内三十张临时 PNG，生成工具保存的外部原图未改动。

五种各验证九档视口，宽度为 320、390、761、900、1100、1366、1920、2560、3840；加上桌面内容增加 160px，共八十个视口与内容高度组合。所有完整边界与图片栏至少相隔 24 CSS px。静止、初始、前后进入与离开端点采用相同拟合几何，仅改变透明度。逐种查看 390、761、1920、3840 宽的静态图片栏模拟，确认腕端、尾指、带体两端、嗅角、螯足与触角均在图片栏内。

静态几何和模拟不验证浏览器字体、完整页面排版或实际内容高度。本次遵守项目约定，没有启动 GUI 或无头浏览器。

## 验证与预算修复

运行 `npm test`：分类、档案、来源覆盖、分类图谱、地图、轮播、图片查看器、目录与微生物隔离检查通过。首次构建子路径检查指出动物页加载 551,140 字节，超过 550,000 字节上限。

`scripts/species-bundle.ts` 将重复的坐标对象键改为位置数组传输，客户端还原为原有 lat/lng 对象；全量目录字段还原检查逐份核对坐标及其他字段。修复后加载量为 548,099 字节，未修改预算。修复后 `npm run test:dist-subpath` 的五项检查通过，最后配图转换后另复测 `npm run test:carousel`。`npm run typecheck` 与 `git diff --check` 通过。完整测试已逐项完成，首次失败项的修复与复测单独记录，未将首次命令退出状态写成成功。

清单累计完成 15 种、待制作 85 种，正式目录 815 份档案。本批来源、提示词、图像哈希和适配记录均已入库；2026-10-22 的候选快照保留历史 800 种基线。
