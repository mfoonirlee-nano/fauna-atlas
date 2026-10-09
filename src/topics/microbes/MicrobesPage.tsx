import { useEffect, useMemo, useState } from 'react';
import { groupLabels, microbeTopics, type MicrobeGroup } from './content';
import { MicrobeDiagram } from './MicrobeDiagram';
import { AtlasImage } from '../../components/AtlasImage';
import { microbeImages } from './media';
import './MicrobesPage.css';

export default function MicrobesPage() {
  const [group, setGroup] = useState<MicrobeGroup | 'all'>('all');
  const [query, setQuery] = useState('');
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark'
    || window.localStorage.getItem('fauna-theme') === 'dark'
    || (!window.localStorage.getItem('fauna-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches));
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    window.localStorage.setItem('fauna-theme', dark ? 'dark' : 'light');
  }, [dark]);
  const visible = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return microbeTopics.filter((item) => (group === 'all' || item.group === group)
      && `${item.name} ${item.scientificName} ${item.feature} ${item.introduction} ${item.parentNote}`.toLocaleLowerCase().includes(term));
  }, [group, query]);

  return <div className="microbes-page" id="microbes">
    <a className="skip-link" href="#microbes/content">跳到微生物专题内容</a>
    <header className="microbes-header">
      <a className="microbes-brand" href="#top" aria-label="返回 Fauna Atlas 动物首页"><span>FAUNA ATLAS</span><strong>微生物观察室</strong></a>
      <nav aria-label="专题导航">
        <a href="#atlas">动物图鉴</a>
        <a href="#microbes" aria-current="page">微生物专题</a>
      </nav>
      <button type="button" onClick={() => setDark((value) => !value)} aria-label={dark ? '切换为浅色模式' : '切换为深色模式'}>{dark ? '浅色' : '深色'}</button>
    </header>
    <main id="microbes/content">
      <section className="microbes-intro" aria-labelledby="microbes-title">
        <div className="microbes-intro__text">
        <p className="microbes-eyebrow">MICROBIAL WORLD · 独立专题</p>
        <h1 id="microbes-title" tabIndex={-1}>认识肉眼看不到的生命。</h1>
        <p className="microbes-intro__copy">从面包里的气泡，到水中游动的单个细胞。和孩子每次认识一两种，先找一个特点，再联系生活里的一个动作。</p>
        <p className="microbes-intro__scope">这里介绍细菌、真菌和单细胞真核生物。“微生物”是统称，不是分类阶元；动物图鉴与动物分类图谱在另一个页面。</p>
        <div className="microbes-facts">
          {(['bacteria', 'fungus', 'protist'] as const).map((value) => <span key={value}><strong>{String(microbeTopics.filter((item) => item.group === value).length).padStart(2, '0')}</strong> 种{groupLabels[value]}</span>)}
        </div>
        </div>
        <div className="microbes-observation" aria-hidden="true">
          <span className="microbes-observation__label">形状观察 / CELL FORMS</span>
          <svg viewBox="0 0 300 300" focusable="false">
            <circle className="microbes-observation__field" cx="150" cy="150" r="126" />
            <circle className="microbes-observation__ring" cx="150" cy="150" r="110" />
            <g className="microbes-observation__yeast" transform="rotate(-25 120 108)">
              <ellipse cx="115" cy="113" rx="27" ry="36" />
              <ellipse cx="148" cy="76" rx="17" ry="22" />
              <circle cx="115" cy="113" r="8" />
            </g>
            <g className="microbes-observation__rods" transform="rotate(32 195 155)">
              <rect x="180" y="119" width="23" height="70" rx="11" />
              <rect x="217" y="142" width="19" height="52" rx="9" />
            </g>
            <g className="microbes-observation__chain">
              {[0, 1, 2, 3, 4].map((n) => <circle key={n} cx={91 + n * 22} cy={205 + Math.sin(n) * 10} r="10" />)}
            </g>
            <path className="microbes-observation__crosshair" d="M150 12V32 M150 268V288 M12 150H32 M268 150H288" />
          </svg>
          <span className="microbes-observation__caption">出芽 · 杆形 · 链状 / 简化示意，不按比例</span>
        </div>
      </section>

      <section className="microbes-collection" aria-labelledby="microbes-collection-title">
        <div className="microbes-section-heading">
          <div><p className="microbes-eyebrow">LOOK CLOSER · 一起观察</p><h2 id="microbes-collection-title">选一种，看看它的特点</h2></div>
          <label className="microbes-search">搜索微生物<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="名称、学名或特点" /></label>
        </div>
        <div className="microbes-filters" role="group" aria-label="按微生物类型筛选">
          {(['all', 'bacteria', 'fungus', 'protist'] as const).map((value) => <button key={value} type="button" aria-pressed={group === value} onClick={() => setGroup(value)}>{value === 'all' ? '全部' : groupLabels[value]}</button>)}
        </div>
        <p className="microbes-results" role="status">显示 {visible.length} / {microbeTopics.length} 种微生物</p>
        <p className="microbes-art-note">下图为 AI 生成的科学重建，不是真实显微照片。共读说明中另有结构示意；均不按比例，配色与图形大小不能用于判断真实尺寸、物种身份或是否有害。</p>
        <div className="microbes-grid">
          {visible.map((item) => <article className="microbe-topic" key={item.slug} data-topic={item.slug} data-group={item.group} aria-labelledby={`topic-${item.slug}`}>
            <div className="microbe-topic__tab"><span>观察 {String(microbeTopics.indexOf(item) + 1).padStart(2, '0')}</span><span>{groupLabels[item.group]}</span></div>
            <figure className="microbe-image">
              <AtlasImage src={microbeImages[item.slug]!.src} alt={microbeImages[item.slug]!.alt} width={microbeImages[item.slug]!.width} height={microbeImages[item.slug]!.height} loading="lazy" decoding="async" />
              <figcaption>AI 科学重建 · 配色示意 · 不按比例</figcaption>
            </figure>
            <div className="microbe-topic__body">
              <h3 id={`topic-${item.slug}`}>{item.name}</h3>
              <p className="microbe-topic__latin"><i>{item.scientificName}</i></p>
              <p className="microbe-topic__question">{item.question}</p>
              <p>{item.introduction}</p>
              <details>
                <summary>一起观察与共读</summary>
                <div className="microbe-topic__reading">
                  <MicrobeDiagram item={item} />
                  <h4>找一个特点</h4><p>{item.observation}</p>
                  <h4>联系生活</h4><p>{item.connection}</p>
                  <h4>给成人的说明</h4><p>{item.parentNote}</p>
                  <h4>资料来源</h4>
                  <ul>{item.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title}（新窗口）</a></li>)}</ul>
                </div>
              </details>
            </div>
          </article>)}
        </div>
        {visible.length === 0 && <div className="microbes-empty"><p>{microbeTopics.length === 0 ? '专题内容正在整理。' : '没有匹配的微生物，试试其他名称或类型。'}</p>{microbeTopics.length > 0 && <button type="button" onClick={() => { setQuery(''); setGroup('all'); }}>查看全部 {microbeTopics.length} 种</button>}</div>}
      </section>

      <section className="microbes-reading" aria-labelledby="microbes-reading-title">
        <p className="microbes-eyebrow">READ TOGETHER · 共读提示</p>
        <h2 id="microbes-reading-title">把观察接到生活里</h2>
        <div className="microbes-reading__grid">
          <div><h3>从发酵开始</h3><p>先看酵母和酸奶中的两种细菌，再认识水中生命。每次选一两种，给孩子留出找形状、提问的时间。</p></div>
          <div><h3>一起练习洗手</h3><p>吃东西前、上厕所后、接触动物及其用品后，在成人帮助下用肥皂和流动水洗手。搓洗手心、手背、指缝和指甲周围至少 20 秒，再冲净、擦干。</p><a href="https://www.cdc.gov/clean-hands/about/index.html" target="_blank" rel="noreferrer">CDC 洗手说明（新窗口）</a></div>
          <div><h3>通过图像认识</h3><p>选择有物种说明的显微照片或视频。不要培养手印、厕所污物、未知水样或发霉食物。生病时不责怪孩子，也不以“消灭所有微生物”为目标。</p></div>
        </div>
      </section>
    </main>
    <footer className="microbes-footer"><p>微生物专题 · 资料核对日期：2026-10-09</p><a href="#atlas">返回动物图鉴 →</a></footer>
  </div>;
}
