import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, BookOpen, FlaskConical, Microscope, Search, Sparkles } from 'lucide-react';
import { groupLabels, microbeTopics, type MicrobeGroup, type MicrobeTopic } from './content';
import { AtlasImage } from '../../components/AtlasImage';
import { microbeImages, microbeStoryImages } from './media';
import { discoveryTrail, learningStories, sceneLabels, type LifeScene } from './learning';
import { LifeProcess } from './LifeProcess';
import './MicrobesPage.css';

const chapters = ['我们怎么认识它', '它的日子怎么过', '它会带来什么', '生活里要注意什么'] as const;

function TopicReader({ item, onNext, canNext }: { item: MicrobeTopic; onNext: () => void; canNext: boolean }) {
  const story = learningStories[item.slug]!;
  const [chapter, setChapter] = useState(0);
  const [feature, setFeature] = useState(0);
  const [view, setView] = useState<'story' | 'micro'>('story');
  const [answer, setAnswer] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const image = (view === 'story' ? microbeStoryImages : microbeImages)[item.slug]!;
  const paragraphs = [story.discovery, story.habits, story.role, story.care];
  const points = story.pictureNotes;
  return <article className={`microbe-reader${expanded ? ' microbe-reader--expanded' : ''}`} aria-labelledby="microbe-reader-title">
    <div className="microbe-reader__heading"><div><p className="microbes-eyebrow">{groupLabels[item.group]} / {sceneLabels[story.scene]}</p><h3 id="microbe-reader-title" tabIndex={-1}>{item.name}</h3><p className="microbe-topic__latin"><i>{item.scientificName}</i></p></div><span className="reader-question">{item.question}</span></div>
    <div className="microbe-reader__layout">
      <div className="observation-desk">
        <div className="observation-switch" role="group" aria-label="观察图类型">
          <button type="button" aria-pressed={view === 'story'} onClick={() => setView('story')}>看生活插画</button>
          <button type="button" aria-pressed={view === 'micro'} onClick={() => setView('micro')}>看细胞插画</button>
        </div>
        <figure className="microbe-image"><AtlasImage src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" /><figcaption>{view === 'story' ? 'AI 科普插画 · 场景与放大窗口为教学组合' : 'AI 细胞重建 · 配色示意'} · 非显微照片 · 不按比例</figcaption></figure>
        <button className="picture-zoom" type="button" aria-expanded={expanded} onClick={() => setExpanded(value => !value)}>{expanded ? '收起大图' : '放大看插画'}</button>
        {view === 'story' && <>
          <h4 className="picture-prompt">和孩子一起找一找</h4>
          <div className="feature-buttons" role="group" aria-label="选择看图话题">{points.map((point, index) => <button key={point.label} type="button" aria-pressed={feature === index} onClick={() => setFeature(index)}>{point.label}</button>)}</div>
          <p className="feature-explanation" aria-live="polite">{points[feature]!.text}</p>
        </>}
        <div className="child-script"><BookOpen size={20} aria-hidden="true" /><div><h4>家长可以这样讲</h4><p>{story.tellChild}</p></div></div>
      </div>
      <div className="reader-content">
        <div className="reader-chapters" role="group" aria-label="共读章节">{chapters.map((label, index) => <button key={label} type="button" aria-pressed={chapter === index} aria-controls="reader-chapter" onClick={() => setChapter(index)}><span>0{index + 1}</span>{label}</button>)}</div>
        <section id="reader-chapter" aria-labelledby="reader-chapter-title"><p className="microbes-eyebrow">共读 {chapter + 1} / 4</p><h4 id="reader-chapter-title">{chapters[chapter]}</h4>{paragraphs[chapter]!.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}</section>
        <div className="reader-pagination"><button type="button" onClick={() => setChapter((chapter + 1) % 4)}>{chapter === 3 ? '再读它的发现故事' : `接着读：${chapters[chapter + 1]}`}<ArrowRight size={16} aria-hidden="true" /></button><span>读到这里，可以听听孩子的想法。</span></div>
      </div>
    </div>
    <LifeProcess item={item} story={story} />
    <div className="reader-bottom"><section className="microbe-quiz" aria-labelledby="microbe-quiz-title"><p className="microbes-eyebrow">一起想一想</p><h4 id="microbe-quiz-title">{story.quiz.question}</h4><div role="group" aria-label="选择你的想法">{story.quiz.answers.map((text, index) => <button key={text} type="button" aria-pressed={answer === index} onClick={() => setAnswer(index)}>{text}</button>)}</div>{answer !== null && <p className="quiz-feedback" role="status"><strong>{answer === story.quiz.correct ? '对，是这样。' : '我们再想一想。'}</strong> {story.quiz.explanation}</p>}</section>
      <details className="reader-sources"><summary>给家长的补充与资料</summary><p>{item.parentNote}</p><ul>{[...item.sources, ...(story.sources ?? [])].map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title}（新窗口）</a></li>)}</ul><p>资料核对：2026-10-10。发现故事讲的是人们怎样认识微生物，并未列出每种生物的首次发现日期。</p></details></div>
    <button className="next-organism" type="button" disabled={!canNext} onClick={onNext}>{canNext ? '认识下一种' : '当前筛选只有这一种'} <ArrowRight size={18} aria-hidden="true" /></button>
  </article>;
}

export default function MicrobesPage() {
  const [group, setGroup] = useState<MicrobeGroup | 'all'>('all');
  const [scene, setScene] = useState<LifeScene | 'all'>('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(microbeTopics[0]!.slug);
  const [history, setHistory] = useState(0);
  const readerRef = useRef<HTMLDivElement>(null);
  const focusNext = useRef(false);
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark'
    || window.localStorage.getItem('fauna-theme') === 'dark'
    || (!window.localStorage.getItem('fauna-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches));
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    window.localStorage.setItem('fauna-theme', dark ? 'dark' : 'light');
  }, [dark]);
  const visible = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return microbeTopics.filter(item => (group === 'all' || item.group === group)
      && (scene === 'all' || learningStories[item.slug]!.scene === scene)
      && `${item.name} ${item.scientificName} ${item.feature} ${item.introduction} ${item.parentNote} ${Object.values(learningStories[item.slug]!).filter(value => typeof value === 'string').join(' ')}`.toLocaleLowerCase().includes(term));
  }, [group, scene, query]);
  const current = visible.find(item => item.slug === selected) ?? visible[0];
  useEffect(() => {
    if (focusNext.current) {
      focusNext.current = false;
      openReader();
    }
  }, [current?.slug]);
  const event = discoveryTrail[history]!;
  const reset = () => { setQuery(''); setGroup('all'); setScene('all'); };
  function openReader() {
    readerRef.current?.scrollIntoView?.({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    readerRef.current?.querySelector<HTMLElement>('h3')?.focus({ preventScroll: true });
  }
  return <div className="microbes-page" id="microbes">
    <a className="skip-link" href="#microbes/content">跳到微生物专题内容</a>
    <header className="microbes-header"><a className="microbes-brand" href="#top" aria-label="返回 Fauna Atlas 动物首页"><span>FAUNA ATLAS</span><strong>微生物观察室</strong></a><nav aria-label="专题导航"><a href="#atlas">动物图鉴</a><a href="#microbes" aria-current="page">微生物专题</a></nav><button type="button" onClick={() => setDark(value => !value)} aria-label={dark ? '切换为浅色模式' : '切换为深色模式'}>{dark ? '浅色' : '深色'}</button></header>
    <main id="microbes/content">
      <section className="microbes-intro" aria-labelledby="microbes-title"><div><p className="microbes-eyebrow"><Microscope size={16} aria-hidden="true" /> 和孩子一起，走进微小世界</p><h1 id="microbes-title" tabIndex={-1}>一滴水里，<br />藏着怎样的生活？</h1><p className="microbes-intro__copy">面包为什么会鼓起来？酸奶为什么变稠？没有脚的细胞怎样游泳？和孩子一起看图，聊聊这些变化背后的微小生命。</p><a className="microbes-start" href="#microbes/explore">选一个生活问题 <ArrowDown size={17} aria-hidden="true" /></a><p className="microbes-intro__scope">家长陪读 · 每次认识一两种 · 小朋友先看图，家长再讲过程</p></div>
      <div className="hero-window"><div className="hero-window__top"><span>今日观察</span><span>01 / 10</span></div><AtlasImage src={microbeStoryImages[microbeTopics[0]!.slug]!.src} alt={microbeStoryImages[microbeTopics[0]!.slug]!.alt} width={1536} height={1024} decoding="async" fetchPriority="high" /><h2>从面包里的气泡开始</h2><p>掰开面包，里面的小孔从哪儿来？从这幅图开始，一起认识酵母。</p><a href="#microbes/explore">去认识酵母 <ArrowRight size={16} aria-hidden="true" /></a></div></section>
      <section className="discovery-trail" aria-labelledby="discovery-title"><div className="microbes-section-heading"><div><p className="microbes-eyebrow">第一站 / 人类怎样发现它们</p><h2 id="discovery-title">我们是怎么发现微生物的？</h2></div><p>从显微镜下的观察，读到食物为什么会变化。</p></div><div className="discovery-layout"><div className="discovery-dates" role="group" aria-label="选择发现故事">{discoveryTrail.map((entry, index) => <button key={entry.date} type="button" aria-pressed={history === index} onClick={() => setHistory(index)}><span>{entry.date}</span><strong>{entry.title}</strong></button>)}</div><div className="discovery-story" aria-live="polite"><FlaskConical size={32} aria-hidden="true" /><p className="microbes-eyebrow">{event.name}</p><h3>{event.title}</h3><p>{event.text}</p><p className="discovery-prompt">{event.prompt}</p><a href={event.url} target="_blank" rel="noreferrer">{event.source}（新窗口）</a></div></div></section>
      <section className="microbes-collection" id="microbes/explore" aria-labelledby="microbes-collection-title"><div className="microbes-section-heading"><div><p className="microbes-eyebrow">第二站 / 从生活出发</p><h2 id="microbes-collection-title">今天想探索哪里？</h2></div><label className="microbes-search"><span><Search size={14} aria-hidden="true" />搜索微生物</span><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="名称、学名或生活问题" /></label></div>
        <div className="scene-picker" role="group" aria-label="按生活场景筛选">{(['all', 'kitchen', 'body', 'water'] as const).map(value => <button key={value} type="button" aria-pressed={scene === value} onClick={() => setScene(value)}>{value === 'all' ? '全部探索' : sceneLabels[value]}<ArrowRight size={17} aria-hidden="true" /></button>)}</div>
        <div className="microbes-filters" role="group" aria-label="按微生物类型筛选">{(['all', 'bacteria', 'fungus', 'protist'] as const).map(value => <button key={value} type="button" aria-pressed={group === value} onClick={() => setGroup(value)}>{value === 'all' ? '全部类型' : groupLabels[value]}</button>)}</div><p className="microbes-results" role="status">显示 {visible.length} / {microbeTopics.length} 种微生物</p>
        <div className="organism-picker" role="group" aria-label="选择共读微生物">{visible.map(item => <button key={item.slug} type="button" data-topic={item.slug} data-group={item.group} aria-pressed={current?.slug === item.slug} onClick={() => setSelected(item.slug)}><span className="organism-picker__number">{String(microbeTopics.indexOf(item) + 1).padStart(2, '0')}</span><span><strong>{item.name}</strong><small>{item.question}</small></span></button>)}</div>
        {current ? <><button type="button" className="open-reader" onClick={openReader}>一起读：{current.name}<ArrowDown size={16} aria-hidden="true" /></button><div ref={readerRef} className="reader-anchor"><TopicReader key={current.slug} item={current} canNext={visible.length > 1} onNext={() => { focusNext.current = true; const next = visible[(visible.indexOf(current) + 1) % visible.length]!; setSelected(next.slug); }} /></div></> : <div className="microbes-empty"><p>没有匹配的微生物，试试其他名称、场景或类型。</p><button type="button" onClick={reset}>查看全部 {microbeTopics.length} 种</button></div>}
      </section>
      <section className="microbes-reading" aria-labelledby="microbes-reading-title"><p className="microbes-eyebrow"><Sparkles size={16} aria-hidden="true" /> 把观察接到生活里</p><h2 id="microbes-reading-title">家长陪读的小建议</h2><div className="microbes-reading__grid"><div><h3>先听孩子怎么想</h3><p>先问一个生活问题，让孩子猜一猜。先看生活插画，再聊里面发生了什么。孩子愿意追问时，可以继续读发现故事和生活习性；读完也可以请他用自己的话讲一遍。</p></div><div><h3>练习一个卫生动作</h3><p>吃东西前、上厕所后、接触动物及用品后，用肥皂和流动水洗手。家长帮孩子搓洗手心、手背、指缝和指甲周围至少 20 秒，再冲净、擦干。</p><a href="https://www.cdc.gov/clean-hands/about/index.html" target="_blank" rel="noreferrer">CDC 洗手说明（新窗口）</a></div><div><h3>用影像继续观察</h3><p>选择注明物种的显微照片或视频。不培养手印、厕所污物、未知水样或发霉食物。孩子生病时不责怪孩子，也不把认识微生物讲成“消灭所有微生物”。</p></div></div></section>
      <p className="microbes-scope">本专题介绍细菌、真菌和单细胞真核生物。“微生物”是统称，不是分类阶元；这些选题独立于动物图鉴和动物分类图谱。本期尚未介绍病毒。</p>
    </main><footer className="microbes-footer"><p>微生物专题 · 资料核对日期：2026-10-10</p><a href="#atlas">返回动物图鉴 →</a></footer>
  </div>;
}
