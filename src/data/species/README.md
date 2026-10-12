# 物种档案文件

每份动物物种档案保存在 `<slug>.ts`，默认导出符合 `Species` 类型的完整档案。该物种的来源、内容日期和专用常量放在同一文件中；通用分类与保护状态辅助函数放在 `shared.ts`。

`../species.ts` 按目录顺序导入档案，提供 `species`、`speciesBySlug`、`featuredSpecies` 和查询函数。添加物种时在这里登记，保持已有物种的相对顺序。

模块路径使用 `.js` 扩展名，TypeScript 从对应 `.ts` 文件解析源码，编译后的 Node 测试可以沿相同路径加载模块。

`scripts/species-bundle.ts` 从统一入口生成浏览目录和独立档案模块，运行时仍按需加载完整档案。封面主体表继续保存在 `src/data/cover-subjects.ts`，图片与验收记录遵循 `src/assets/source/README.md`。

拆分时逐份保留原始内容表达式，并对比拆分前后完整目录的序列化快照。后续修改按项目约定运行类型检查及相关测试；添加物种时运行 `npm test`，其中包含轮播与生产资源预算检查。
