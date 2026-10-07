# 2026-10-07 第三批：三刺鱼与四种鳞翅目昆虫

按待办顺序加入三刺鱼、月蛾、大透翅天蛾、大白粉蝶和玫瑰枫蛾。物种档案从 475 增至 480，本轮完成 80 种，剩余 20 种动物与 10 个微生物专题。

## 分类与资料口径

三刺鱼采用 ADW 的刺鱼目、刺鱼科口径；四种昆虫沿用项目鳞翅目口径，月蛾与玫瑰枫蛾归天蚕蛾科，大透翅天蛾归天蛾科，大白粉蝶归粉蝶科。docs/adr/ 当前不存在，本次没有修改分类图谱模型。

中文名沿用待办及项目常用译名，学名定位具体物种，不把英文资料视作中文正式命名证明。月蛾特指北美洲 Actias luna，不混用亚洲尾天蚕蛾。保护记录中三刺鱼采用 FishBase 转录的全球 LC 和 2022-05-30 评估日期；不把发布年份或访问日期当成评估年份。四种昆虫未核实到全球物种级 IUCN 评估，沿用项目 NE 占位，并在界面说明资料范围。NatureServe 等级及欧洲或国家级等级不换算为全球 IUCN 等级。全球趋势均保留 unknown。

## 三刺鱼 · Gasterosteus aculeatus

先找背上分开的硬棘，再看看嘴里衔着的植物。封面展示繁殖期雄鱼，雌鱼和非繁殖期个体的颜色不同。 取食水中的小型动物。

- [Animal Diversity Web：三刺鱼形态、筑巢与分布](https://animaldiversity.org/accounts/Gasterosteus_aculeatus/)
- [FishBase：三刺鱼全球保护评估](https://www.fishbase.se/summary/Gasterosteus_aculeatus.html)

[六图提示词、哈希与封面验收](../../src/assets/source/species/three-spined-stickleback/README.md)

## 月蛾 · Actias luna

顺着绿色翅膀找到两条长尾，再看翅面的小眼斑。本档案记录北美洲的 Actias luna，不与亚洲其他尾天蚕蛾混用。 幼虫吃叶片；成蛾口器退化，不进食，依靠幼虫时期储存的能量。

- [佛罗里达大学 IFAS：月蛾](https://ask.ifas.ufl.edu/publication/IN737)
- [ITIS：Actias luna 分类记录](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=936178)
- [BAMONA：月蛾](https://www.butterfliesandmoths.org/species/Actias-luna)

[六图提示词、哈希与封面验收](../../src/assets/source/species/luna-moth/README.md)

## 大透翅天蛾 · Cephonodes hylas

绿色身体两侧展开透明的翅，深色翅脉和边缘仍可见。中文名沿用待办，物种身份以 Cephonodes hylas 为准。 成蛾在花间吸蜜，幼虫吃栀子等寄主的叶片。

- [The Moths of Borneo：Cephonodes hylas](https://www.mothsofborneo.com/species/cephonodes-hylas)
- [The Moths of Borneo：透翅天蛾属](https://www.mothsofborneo.com/genera/cephonodes)
- [新加坡国立大学自然历史博物馆：栀子上的幼虫记录](https://lkcnhm.nus.edu.sg/wp-content/uploads/sites/10/2023/09/NIS-2023-0088.pdf)

[六图提示词、哈希与封面验收](../../src/assets/source/species/coffee-bee-hawk-moth/README.md)

## 大白粉蝶 · Pieris brassicae

先在叶背找卵，再看幼虫、蛹和成蝶。封面展示雌蝶，前翅有黑色端斑和成对黑点；雄蝶前翅上表面没有这组成对黑点。 幼虫吃甘蓝等寄主植物叶片，成蝶访花吸蜜。

- [Butterfly Conservation：大白粉蝶](https://butterfly-conservation.org/news-and-blog/species-of-the-month-large-white)
- [BAMONA：大白粉蝶的卵、幼虫与蛹](https://www.butterfliesandmoths.org/species/Pieris-brassicae)
- [Butterfly Conservation：雌雄翅纹与寄主](https://butterfly-conservation.org/in-your-area/east-scotland-branch/scottish-butterflies-large-white)

[六图提示词、哈希与封面验收](../../src/assets/source/species/large-white/README.md)

## 玫瑰枫蛾 · Dryocampa rubicunda

找找翅膀中间的浅黄色，再沿边缘看粉色。不同个体的粉色范围不同，有些个体很浅，不能只靠颜色确认物种。 幼虫吃寄主树叶；成蛾不进食。

- [BAMONA：玫瑰枫蛾](https://www.butterfliesandmoths.org/species/Dryocampa-rubicunda)
- [北卡罗来纳州立大学：枫树昆虫与幼虫形态](https://content.ces.ncsu.edu/common-insect-pests-of-maple-in-north-carolina)
- [马萨诸塞大学：玫瑰枫蛾寄主与卵](https://www.umass.edu/agriculture-food-environment/landscape/publications-resources/insect-mite-guide/dryocampa-rubicunda)

[六图提示词、哈希与封面验收](../../src/assets/source/species/rosy-maple-moth/README.md)

## 图像与适配

用内置 image_gen 逐张生成 30 张运行图片，每种一张封面和五张观察图。运行图均为 1536×1024 WebP，已逐张检查临时源 PNG；转换后单独查看五张封面，并查看各组六图联系表。三刺鱼、月蛾、大透翅天蛾和大白粉蝶调整了封面留白；月蛾幼虫初稿出现错误的蓝黄色大突起，舍弃并重做。最终提示词和源图、运行图 SHA-256 保存在逐种 prompts.json。

大透翅天蛾幼虫图、大白粉蝶卵及幼虫图、玫瑰枫蛾幼虫及卵图都包含成虫，图注已标明不同阶段对照，不表达育幼或同一时刻的实拍。微距图注明放大展示、非实测比例；AI 重建不能提供物种鉴定、翅脉计数或幼虫附肢计数证据。

五张封面的实际解码尺寸、完整主体边界与当前哈希写入 cover-subjects.ts 和 original-covers.json。已计算并查看 45 张图片栏静态模拟，覆盖 320、390、761、900、1100、1366、1920、2560、3840 九档视口，完整主体最小边距至少 24 CSS px。动画只改变透明度，静止、初始、前进和后退 enter/leave 端点共用该几何。逐种 README 保存主体源像素大小和九档显示大小。

未启动 GUI 或无头浏览器。静态几何与模拟不能验证浏览器字体排版或完整页面。

## 验证

- `npm run typecheck` 通过。
- `npm test` 全部通过，含分类与档案 217 项、480 个物种的轮播几何与交互检查、图片转换、分类浏览、图片查看器、品牌标记、目录和生产子路径检查。
- 新增集成检查核对五种动物的学名、科级归属、雌雄及阶段限定、六图独立性与已记录哈希。
- `test:dist-subpath` 三项通过；入口 JS 347,553 字节，vendor 196,790 字节，首屏合计 544,343 字节，保持既有预算。
- 五组运行图片哈希与 prompts.json、README 和封面 fixture 相符。已移除项目内临时源 PNG，保留 30 张 WebP；工具默认生成目录保留原始输出。
- `git diff --check` 通过。待办、归档和数量断言已同步。
