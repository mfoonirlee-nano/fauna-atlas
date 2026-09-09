<div align="center">
  <img src="https://fauna-atlas.mfoonirlee.workers.dev/favicon.svg" width="88" height="88" alt="Fauna Atlas 标志" />
  <h1>Fauna Atlas</h1>
  <p><strong>万物生灵图册</strong></p>
  <p>从一张图片出发，认识一种动物，探索它在自然中的位置。</p>
  <p><a href="https://fauna-atlas.mfoonirlee.workers.dev"><strong>在线浏览图册 ↗</strong></a></p>
</div>

## 关于项目

**Fauna Atlas（万物生灵图册）** 是一个面向自然爱好者的中文动物图册。你可以从首页的动物影像开始浏览，搜索感兴趣的物种，也可以沿着分类图谱逐级探索，了解不同动物的分类归属。

打开一份物种档案，你能看到它的中英文名称与学名、分布与栖息地、行为与食性、体型数据和保护现状。通过图集观察外形与生活环境，再沿着档案中的资料来源继续阅读。

**在线地址：[fauna-atlas.mfoonirlee.workers.dev](https://fauna-atlas.mfoonirlee.workers.dev)**

## 你可以怎样探索

- **搜索与筛选**：按中文名、英文名、学名、别名、分布区域或栖息地搜索，结合门、纲和保护状态缩小范围。按 `⌘ K` / `Ctrl K` 可跳到搜索框。
- **阅读物种档案**：从关键数据到生态习性，了解一种动物如何生活，以及它面临的生存处境；查看资料来源和保护等级评估信息。
- **探索分类图谱**：展开或收起分类单元，沿分类阶元找到物种，理解它们在动物界中的分类归属。
- **观察图像细节**：浏览封面轮播和物种图集，打开大图查看外形、行为与生境。
- **留下感兴趣的物种**：收藏物种并切换明暗主题，浏览器会在本地保存收藏和主题偏好。

## 项目实现

项目采用 React、TypeScript 和 Vite，作为纯静态网站部署在 Cloudflare 上。物种档案按需加载：先浏览首页摘要，打开档案时再下载正文和图集信息。维护者可以通过结构化数据添加物种，并用测试检查分类一致性、资源路径和档案完整性。

## 技术栈

- [React](https://react.dev/)：界面与组件系统
- [TypeScript](https://www.typescriptlang.org/)：数据模型与类型安全
- [Vite](https://vite.dev/)：开发服务器与生产构建

## 本地启动

需要 Node.js `>=22.12.0`，并使用仓库中的 npm 锁文件安装依赖。

```bash
npm install
npm run dev
```

开发服务器启动后，根据终端提示在浏览器中打开本地地址。

常用命令：

```bash
npm run dev      # 启动开发服务器
npm run build    # 类型检查并构建生产版本
npm test         # 运行分类数据、品牌与构建产物检查
npm run typecheck  # 仅执行 TypeScript 静态检查
npm run preview  # 本地预览生产构建
```

## 档案数据加载

维护物种内容时继续编辑 `src/data/species.ts`。Vite 插件 `scripts/species-bundle.ts` 从这份数据生成首页摘要与每个物种的独立档案模块，不需要维护第二份数据或手动生成文件。首页保留名称、分类、生境名称、保护等级、简介和封面，点击动物后再下载完整正文、图集和来源。成功加载的档案会缓存，失败时可重试，取消或切换动物后不会打开旧请求的档案。

构建将 React 等依赖单独打包，方便跨内容更新缓存。`npm run test:dist-subpath` 检查首页 JS 总量小于 550 KB、单文件小于 350 KB，并逐一比对延迟加载档案与原始数据，验证子路径下的模块和图片访问。

## 目录结构

```text
fauna-atlas/
├── public/              # 站点图标与无需构建的静态资源
├── src/
│   ├── assets/source/   # 生成提示词与图片验收记录
│   ├── components/      # 可复用界面组件
│   ├── data/            # 物种条目与数据聚合出口
│   ├── domain/          # 分类树等纯领域逻辑
│   ├── types/           # Species 等共享数据类型
│   ├── App.tsx          # 应用主体
│   ├── styles.css       # 设计系统、布局与响应式样式
│   └── main.tsx         # 应用入口
├── index.html           # HTML 模板
└── package.json         # 项目信息与脚本
```

实际目录会随功能演进扩展；新增模块应保持内容数据、类型定义与展示组件彼此分离。

## 收录新的生物

物种内容采用数据驱动方式维护，无需为每个生物复制页面组件：

1. 查看 `src/types/species.ts` 中的 `Species` 类型，确认必填字段和可选字段。
2. 在 `src/data/species.ts` 中复制一个已有条目，替换本地化名称、分类、分布、栖息地、保护现状、体型、食性、摘要与关键事实等内容；该文件通过 `src/data/index.ts` 统一导出。
3. 如有经过授权的图片，将封面和图集保存为 `public/images/species/<slug>/*.webp`，并以 `./images/species/<slug>/*.webp` 的相对路径引用，确保构建产物可部署在任意子路径。封面通过可选的 `media.image` 引用，其余观察图写入 `media.gallery`；没有封面时界面会自动使用分类标本牌。新增或替换封面前须按[物种首图规则](./src/assets/source/README.md#species-cover-rule)完成构图与顶部轮播验收。每张图片都须补全准确的 `alt`，并可用 `0..1` 归一化坐标记录 `focalPoint`、用 `credit` 记录署名。只保留验收后的压缩 WebP；最终提示词和验收记录保存在 `src/assets/source/species/<slug>/`，PNG 输入验收后删除。图片转换方式见[图片工作流](./src/assets/source/README.md#image-workflow)。`dist/` 为忽略的构建产物，发布时重新生成。
4. 在 `sources` 中记录每条资料的标题、URL、访问日期与来源类型。保护现状还应注明评估年份与评估机构，避免将不同年份的结论混为一谈。
5. 检查列表卡片、筛选结果和详情展示，并在提交前运行 `npm run typecheck` 与 `npm run build`。

建议每个物种使用稳定、唯一且适合 URL 的 `slug`（例如 `red-panda`），并让 `id` 作为不随展示名称变化的内部标识。学名、分类与保护状态等科学信息应优先引用可靠来源，并在信息变化时及时更新。若新增字段，请先更新共享类型，再同步补全已有数据与展示逻辑。

分类图谱会从物种档案的完整分类路径自动归并共享分类单元。同一阶元下使用同一学名的分类单元，必须保持中文名和直接上级一致；冲突会在分类测试中直接报错。

维护资料来源时，优先链接到稳定的物种详情页，并为分布、生态、体型及行为事实补全可追溯资料。新增或修订内容时，检查来源是否仍可访问，以及评估年份是否需要更新。

## 内容原则

- **科学准确**：区分事实、推测与故事性表达，并保留可追溯来源。
- **尊重生命**：不猎奇、不消费濒危处境，避免传播可能伤害野生种群的精确敏感位置。
- **易于理解**：兼顾通俗中文与规范学名，让不同背景的读者都能探索。
- **持续维护**：以结构化数据收录条目，使修订、筛选与未来迁移保持可控。

## Cloudflare 部署

使用 [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/get-started/) 托管静态网站。需要 Node.js `>=22.12.0`。

```bash
npm ci
npm run deploy:cloudflare -- --check  # 构建、资源检查和 Wrangler dry run，无需凭据
npm run deploy:cloudflare            # 检查通过后发布到 Cloudflare
```

发布前，在项目根目录已有的 `.env` 中追加以下配置；也可以通过 shell 或 CI 环境变量提供，环境变量优先：

```dotenv
CLOUDFLARE_API_TOKEN=填入你的API令牌
CLOUDFLARE_ACCOUNT_ID=填入32位账户ID
```

在 [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens) 页面创建令牌，可使用 **Edit Cloudflare Workers** 模板，将账户资源限定为目标账户。账户 ID 可在 Cloudflare 控制台获取，具体步骤见[官方部署凭据说明](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/)。`.env` 已加入 Git 忽略规则；凭据名称不要添加 `VITE_` 前缀，以免进入前端构建。

[部署脚本](./scripts/deploy-cloudflare.js) 会重新构建当前工作区，检查图片路径、首页 JS 体积和延迟加载档案，再执行 Wrangler 配置检查和上传。发布包含尚未提交的内容。`--check` 不验证账户权限或线上可用性。

[wrangler.jsonc](./wrangler.jsonc) 将站点命名为 `fauna-atlas`，只上传 `dist/`。首次发布会创建同名 Worker，之后发布会更新它；如目标账户已有同名项目，请先修改 `name`。Wrangler 发布成功后会输出 `https://fauna-atlas.<账户子域>.workers.dev` 地址。首次使用 Workers 时，先在控制台设置账户的 `workers.dev` 子域。

当前应用通过界面状态打开物种档案，没有路径路由，因此不存在的 URL 返回 404。后续若增加路径路由，需要同时调整 Vite 的资源基础路径与 Cloudflare 的 SPA 回退配置。自定义域名可在部署后通过 Worker 的 **Settings → Domains & Routes** 添加。本项目的 Cloudflare 部署由本地命令触发。

## GitHub Pages 部署

也可以在本地构建，再将静态文件发布到 `gh-pages` 分支，无需 GitHub Actions。先安装依赖，再运行：

```bash
npm ci
npm run deploy:pages -- --check  # 仅构建和检查，不推送
npm run deploy:pages            # 构建、检查并推送到 origin/gh-pages
```

[发布脚本](./scripts/deploy-pages.js) 会重新构建当前工作区，检查子路径资源，将 `dist` 内容放到发布分支根目录。[public/.nojekyll](./public/.nojekyll) 会随构建复制过去，让 Pages 直接发布静态文件。脚本使用临时仓库，保留发布历史，以普通推送更新远端；远端发生并发更新时会停止报错。源代码分支和暂存区不受发布操作影响，但构建会更新本地 `dist`。发布内容包含当前未提交的源代码修改，请先提交准备上线的改动。

首次发布成功后，在仓库 **Settings → Pages → Build and deployment** 中选择 **Deploy from a branch → gh-pages → /(root)** 并保存。之后更新网站时再次运行 `npm run deploy:pages`；只推送 `main` 不会更新网站。

部署完成后访问 [万物生灵图册](https://mfoonirlee-nano.github.io/fauna-atlas/)。检查 Pages 部署状态和线上资源；本地构建或推送成功不代表线上部署完成。如果账号还受到 Pages 服务限制，需要按 GitHub 返回的错误处理。

原有 [Actions 工作流](./.github/workflows/deploy-pages.yml) 仅保留手动触发。将来恢复使用时，先把 Pages Source 切换为 **GitHub Actions**，再手动运行该工作流。

## 项目状态

图册已上线，支持物种检索、分类图谱、档案阅读与图集浏览。后续继续补充物种档案和来源资料，改进移动端浏览与无障碍体验。欢迎通过 [GitHub Issues](https://github.com/mfoonirlee-nano/fauna-atlas/issues) 提交资料纠错、物种收录建议或使用反馈；涉及资料修订时，请附上来源链接。
