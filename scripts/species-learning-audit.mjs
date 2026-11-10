import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
export const topics = {
  body: { label: '身体构造', pattern: /身体|外形|形态|结构|骨骼|羽毛|鳞片|触手|外套膜|喙|牙齿|前掌/ },
  foraging: { label: '觅食过程', pattern: /觅食|捕食|捕猎|取食|滤食|摄食|捕捉|进食|采食/ },
  dailyLife: { label: '活动与交流', pattern: /活动|昼夜|夜行|日行|独居|群居|交流|迁徙|休息|社会|沟通/ },
  growth: { label: '繁殖与成长', pattern: /繁殖|成长|幼体|幼崽|幼鸟|育幼|孵化|变态|卵|产仔|生命周期/ },
  ecology: { label: '生态关系', pattern: /生态作用|生态意义|生态角色|食物网|传粉|传播种子|种子传播|共生|生态关系/ },
};
const present = (v) => typeof v === 'string' && v.trim().length > 0;
const countBy = (rows, key) => rows.reduce((result, row) => {
  const value = key(row);
  result[value] = (result[value] ?? 0) + 1;
  return result;
}, {});

export function auditSpecies(profile, { assetExists = () => true } = {}) {
  // Candidate passages are search results, never scientific or editorial approval.
  const passages = [
    ['description', profile.description],
    ['diet.description', profile.diet?.description],
    ['activity', profile.activity?.join('、')],
    ...(profile.keyFacts ?? []).map((body, i) => [`keyFacts.${i}`, body]),
    ...(profile.storySections ?? []).map((s, i) => [`storySections.${i}`, `${s.label} ${s.title} ${s.body}`]),
  ].filter(([, body]) => present(body));
  const coverage = Object.fromEntries(Object.entries(topics).map(([key, { pattern }]) => {
    const candidatePaths = passages.filter(([, body]) => pattern.test(body)).map(([path]) => path);
    return [key, { status: candidatePaths.length ? 'candidate-found' : 'no-candidate', candidatePaths }];
  }));
  const gaps = [];
  for (const [path, ok] of [
    ['identity', present(profile.names?.zh) && present(profile.scientificName) && present(profile.summary)],
    ['distribution', present(profile.distribution?.range) && profile.habitats?.length > 0],
    ['food', present(profile.diet?.description) && profile.diet?.foods?.length > 0],
    ['sources', profile.sources?.length > 0],
  ]) if (!ok) gaps.push(path);
  const images = [
    ...(profile.media?.image ? [{ path: 'media.image', image: profile.media.image, alt: profile.media.alt }] : []),
    ...(profile.media?.gallery ?? []).map((image, i) => ({ path: `media.gallery.${i}`, ...image })),
  ];
  const missingAssets = images.filter(({ image }) => !assetExists(image)).map(({ image }) => image);
  const missingAlt = images.filter(({ alt }) => !present(alt)).map(({ path }) => path);
  const c = profile.conservation;
  const issues = [];
  if (!c || c.code === 'UNVERIFIED') issues.push('assessment-unverified');
  if (c?.system === 'IUCN Red List' && c.code !== 'NE' && c.assessedYear === undefined) issues.push('assessment-year-missing');
  if (c?.system === 'Historical and fossil evidence' && (c.code !== 'EX' || c.assessedYear !== undefined)) issues.push('historical-evidence-conflict');
  if (c?.code === 'UNVERIFIED' && (c.system !== 'Unverified' || c.assessedYear !== undefined || c.trend !== 'unknown')) issues.push('unverified-evidence-conflict');
  if (c?.code === 'EX' && profile.distribution?.center) issues.push('extinct-current-map-point');
  if (!profile.sources?.some(({ kind }) => kind === 'conservation')) issues.push('conservation-source-kind-missing');
  const workflow = ['pending-editorial-review', 'pending-source-review', 'pending-image-review'];
  if (gaps.length || Object.values(coverage).some(({ status }) => status === 'no-candidate')) workflow.push('pending-research');
  if (profile.pendingMedia || missingAssets.length || !profile.media?.image) workflow.push('pending-media');
  return {
    id: profile.id, slug: profile.slug, name: profile.names.zh, scientificName: profile.scientificName,
    taxonomy: Object.fromEntries(Object.entries(profile.taxonomy).map(([rank, taxon]) => [rank, taxon.scientificName])),
    lifeStatus: c?.code === 'EX' ? 'extinct' : c?.code === 'EW' ? 'extinct-in-wild' : 'not-marked-extinct',
    contentUpdatedAt: profile.updatedAt, gaps, coverage,
    conservation: { ...c, issues, reviewStatus: 'pending', yearReview: 'pending' },
    sources: (profile.sources ?? []).map(({ title, url, kind, accessedAt }) => ({ title, url, kind, accessedAt })),
    media: { publicImageCount: images.length, images, missingAssets, missingAlt,
      pendingReason: profile.pendingMedia?.reason ?? null, biologicalReview: 'pending' },
    workflow, owner: null, reviewedAt: null,
    manualChecks: ['名称与分类', '事实与逐条来源对应', '难词与重复表达', '结构与功能解释', '保护评估时效或灭绝证据', '图片生物学准确性与教学用途'],
  };
}

export function buildAudit(profiles, options) {
  if (new Set(profiles.map(({ id }) => id)).size !== profiles.length || new Set(profiles.map(({ slug }) => slug)).size !== profiles.length) {
    throw new Error('Duplicate species ID or slug');
  }
  const rows = profiles.map((profile) => auditSpecies(profile, options));
  return { schemaVersion: 1, scope: 'animal-species-only',
    method: '字段检查及中文关键词候选检索；不代表科学审核、链接可访问性验证或内容合格。无候选不等于没有相关内容。',
    summary: { total: rows.length, lifeStatus: countBy(rows, (r) => r.lifeStatus),
      conservation: countBy(rows, (r) => r.conservation.code),
      missingCover: rows.filter((r) => !r.media.images.some((i) => i.path === 'media.image')).length,
      pendingMedia: rows.filter((r) => r.media.pendingReason).length,
      missingAssets: rows.reduce((n, r) => n + r.media.missingAssets.length, 0),
      conservationIssues: rows.flatMap((r) => r.conservation.issues).reduce((counts, issue) => {
        counts[issue] = (counts[issue] ?? 0) + 1;
        return counts;
      }, {}),
      topics: Object.fromEntries(Object.keys(topics).map((topic) => [topic, countBy(rows, (r) => r.coverage[topic].status)])),
    }, species: rows };
}

export function renderInventory(report) {
  const cell = (s) => String(s).replaceAll('|', '\\|').replaceAll('\n', ' ');
  return `# 儿童动物百科全量盘点\n\n此文件由 \`npm run audit:learning\` 生成，请勿手改。覆盖 ${report.summary.total} 份动物档案；不包含微生物专题。\n\n${report.method}\n\n全部档案均待人工复核，未授予“可发布”状态。ID、分类路径、候选内容位置、来源和工作状态详见 [JSON 清单](./inventory.json)。\n\n## 内容候选统计\n\n| 主题 | 找到候选 | 未找到候选 |\n| --- | ---: | ---: |\n${Object.entries(topics).map(([key, { label }]) => `| ${label} | ${report.summary.topics[key]['candidate-found'] ?? 0} | ${report.summary.topics[key]['no-candidate'] ?? 0} |`).join('\n')}\n\n## 配图记录\n\n缺公开封面 ${report.summary.missingCover} 份，含待修复素材 ${report.summary.pendingMedia} 份，公开图片缺失引用 ${report.summary.missingAssets} 个。图片存在不代表科学准确，新增或返修需求见 [素材待办](./media-todo.md)。\n\n## 全量档案\n\n“未检出”仅提示优先检查相应内容；每份档案均需核对原文。评估年份为原档案记录，不表示本轮复核。\n\n| 动物 | slug | 保护代码 / 评估年份 | 未检出的内容候选 | 字段缺项 | 公开图片数 | 待修复素材 |\n| --- | --- | --- | --- | --- | ---: | --- |\n${report.species.map((r) => `| ${cell(r.name)} | [${r.slug}](../../src/data/species/${r.slug}.ts) | ${r.conservation.code} / ${r.conservation.assessedYear ?? '未记录或不适用'} | ${Object.keys(topics).filter((k) => r.coverage[k].status === 'no-candidate').map((k) => topics[k].label).join('、') || '均有候选'} | ${r.gaps.join('、') || '无'} | ${r.media.publicImageCount} | ${r.media.pendingReason ? '是' : '否'} |`).join('\n')}\n`;
}

export function renderMediaTodo(report) {
  const urgent = report.species.filter((r) => r.workflow.includes('pending-media'));
  return `# 素材待办：只登记，暂不生成\n\n由 \`npm run audit:learning\` 生成。当前未生成、替换或恢复任何素材。\n\n## 已记录的配图缺口或返修\n\n${urgent.map((r) => `- [ ] **${r.name}（${r.slug}）**：${r.media.pendingReason ?? '缺公开封面或存在图片文件缺失'}。先核对已有素材及历史审核记录，再确定修复或补图方案；不得直接恢复待修复素材。`).join('\n') || '暂无。'}\n\n## 全量教学素材候选\n\n全部 ${report.summary.total} 份档案的候选任务见 [media-todo.json](./media-todo.json)，逐种关联 ID。现有图库尚未完成教学用途人工审核，因此“结构观察图”统一记为候选，不宣称现有档案缺少此类图片，也不直接授权生成。\n\n- [ ] 逐种审核整体外形、身体部位、觅食、栖息地及成长图的可复用情况。\n- [ ] 对确需补充的结构观察图，先确认部位名称、功能、物种差异及可靠参考，再确定图中文字和构图。\n- [ ] 对灭绝动物核对复原依据，区分化石证据与推断；不把复原图当作真实摄影。\n- [ ] 将候选任务确认成具体素材需求后，记录参考、审核人和验收条件；素材制作另行开展。\n\n新增或替换图片继续遵循 [图片规则](../../src/assets/source/README.md#species-image-set-rule)。\n`;
}

async function main() {
  const { species } = await import(new URL('../node_modules/.tmp/taxonomy-test/data/species.js', import.meta.url));
  const report = buildAudit(species, { assetExists: (image) => image.startsWith('./images/') && existsSync(resolve(root, 'public', image)) });
  report.source = { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    catalogue: 'src/data/species.ts', dirty: Boolean(execFileSync('git', ['status', '--porcelain', '--', 'src/data', 'src/types/species.ts'], { cwd: root, encoding: 'utf8' }).trim()) };
  const media = { schemaVersion: 1, policy: '候选待确认；本轮不生成素材', tasks: report.species.map((r) => ({
    speciesId: r.id, slug: r.slug, name: r.name, status: 'candidate-needs-review',
    request: '审核现有图库是否支持身体结构及功能讲解，确认后再决定补图',
    existingImages: r.media.images.map(({ image }) => image), pendingReason: r.media.pendingReason,
    extinct: r.lifeStatus === 'extinct', references: [], owner: null,
    acceptance: ['物种与关键部位准确', '与讲解内容一致', '来源及生成或复原性质明确', '通过项目图片审核'],
  })) };
  const outputs = { 'inventory.json': JSON.stringify(report, null, 2) + '\n', 'inventory.md': renderInventory(report),
    'media-todo.json': JSON.stringify(media, null, 2) + '\n', 'media-todo.md': renderMediaTodo(report) };
  for (const [name, body] of Object.entries(outputs)) {
    const path = resolve(root, 'todo/learning-refactor', name);
    mkdirSync(dirname(path), { recursive: true });
    if (process.argv.includes('--check')) {
      // Commit identity is provenance, not content: subsequent commits must not stale a clean inventory.
      const current = readFileSync(path, 'utf8');
      if (name === 'inventory.json') {
        const a = JSON.parse(current), b = JSON.parse(body);
        delete a.source.commit; delete b.source.commit;
        if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error(`Stale audit: ${name}`);
      } else if (current !== body) throw new Error(`Stale audit: ${name}`);
    } else writeFileSync(path, body);
  }
  console.log(JSON.stringify(report.summary, null, 2));
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await main();
