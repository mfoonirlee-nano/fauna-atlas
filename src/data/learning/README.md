# 儿童讲解数据

当前接入大熊猫、帝企鹅、帝王蝶、普通章鱼与真猛犸象。每种动物的完整物种档案通过可选的 `learning` 字段引用对应模块；没有该字段的动物继续使用原有详情页。

正式展示文案以这些 TypeScript 模块为准。[最初的五种编辑稿](../../../todo/learning-refactor/samples/README.md)作为内容研究记录保留，不在运行时解析，不作为第二份需要同步构建的内容源。

## 内容结构

`SpeciesLearningProfile` 定义在 `src/types/species.ts`。`sections` 按下列顺序记录，测试检查顺序与完整性：

1. identity：认识动物。
2. body：身体结构和功能，可用 `bodyParts` 表达；`lead` 放在结构说明之前。
3. habitat：栖息地和分布。
4. foraging：食物与取得食物的方式。
5. dailyLife：活动和交流。
6. growth：繁殖与成长。
7. ecology：生态关系及资料限制。
8. survival：保护或灭绝，保留评估范围与年份。

`curiosity` 是可展开的深入解释。`sources` 记录本节引用的 URL，必须能在该物种的 `sources` 中找到。新增来源只补入缺少的记录，不替换旧的分类、命名或评估证据。

`observation` 包含提示、现有图片路径、图片性质说明及理解题的参考回答。路径必须来自公开 `media.image` 或 `media.gallery`，不能使用 `pendingMedia`；不得为了接入讲解自动生成素材。图像放大复用现有查看器。

## 加载与兼容

每个物种仅导入自己的学习模块。构建继续把完整档案按需加载，浏览摘要不携带 `learning`。讲解组件也单独延迟加载，避免增加首页脚本预算。

原有 `description`、`storySections`、数据和来源保留为延伸阅读，不以这次接入替换独立专业复核或亲子试读。新增配图候选继续记录在[素材待办](../../../todo/learning-refactor/samples/media-todo.md)。

## 验证

- `npm run test:species-learning`：检查五种数据、证据范围、图片引用、目录焦点、问题展开、放大与返回，以及旧档案展示。
- `npm run test:dist-subpath`：检查构建、资源、按需加载的完整数据与首页预算。
- `npm run audit:learning`：内容变化后刷新全量盘点；结构化讲解只增加内容候选，不自动授予审核通过状态。
