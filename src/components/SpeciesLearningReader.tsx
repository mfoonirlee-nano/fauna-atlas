import { AtlasImage } from './AtlasImage';
import type { Species } from '../types/species';
import type { SpeciesImageFrame } from '../domain/image-viewer';
import './SpeciesLearningReader.css';

interface Props {
  readonly item: Species;
  readonly frames: readonly SpeciesImageFrame[];
  readonly onOpenImage: (index: number, trigger: HTMLButtonElement) => void;
}

function LearningImages({ images, frames, onOpenImage }: Pick<Props, 'frames' | 'onOpenImage'> & { readonly images: readonly string[] }) {
  return <div className="learning-reader__images">
    {images.map((image) => {
      const frameIndex = frames.findIndex((frame) => frame.image === image);
      const frame = frames[frameIndex];
      if (!frame) return null;
      return <figure key={image}>
        <button type="button" className="learning-reader__image" data-frame-kind={frame.kind}
          onClick={(event) => onOpenImage(frameIndex, event.currentTarget)}
          aria-label={`${frame.kind === 'learning' ? '放大解说图' : '放大观察'}：${frame.title}`}>
          <AtlasImage src={frame.image} alt={frame.alt} loading="lazy" decoding="async" />
          <span>放大观察</span>
        </button>
        <figcaption>
          <strong>{frame.title}</strong>
          {frame.kind === 'learning' && <p>{frame.caption}</p>}
          {frame.credit && <small>{frame.credit}</small>}
        </figcaption>
      </figure>;
    })}
  </div>;
}

export default function SpeciesLearningReader({ item, frames, onOpenImage }: Props) {
  const learning = item.learning;
  if (!learning) return null;
  const headingId = (key: string) => `learning-${item.slug}-${key}`;
  const sources = new Map(item.sources.map((source) => [source.url, source]));
  const jumpTo = (key: string) => {
    const heading = document.getElementById(headingId(key));
    heading?.scrollIntoView({ block: 'start', behavior: 'instant' });
    heading?.focus({ preventScroll: true });
  };

  return (
    <div className="learning-reader">
      <nav className="learning-reader__toc" aria-label={`${item.names.zh}阅读目录`}>
        {learning.sections.map((section, index) => (
          <button key={section.key} type="button" onClick={() => jumpTo(section.key)}>
            <span aria-hidden="true">{index + 1}</span>{section.title}
          </button>
        ))}
        <button type="button" onClick={() => jumpTo('observation')}>
          <span aria-hidden="true">9</span>再观察一下
        </button>
      </nav>

      {learning.sections.map((section, index) => (
        <section key={section.key} className="learning-reader__chapter" aria-labelledby={headingId(section.key)}>
          <p className="learning-reader__number">{String(index + 1).padStart(2, '0')}</p>
          <h3 id={headingId(section.key)} tabIndex={-1}>{section.title}</h3>
          {section.lead && <p>{section.lead}</p>}
          {section.images && <LearningImages images={section.images} frames={frames} onOpenImage={onOpenImage} />}
          {section.bodyParts && (
            <dl className="learning-reader__parts">
              {section.bodyParts.map((part) => (
                <div key={part.name}><dt>{part.name}</dt><dd>{part.explanation}</dd></div>
              ))}
            </dl>
          )}
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.curiosity && (
            <details className="learning-reader__curiosity">
              <summary>再想一想</summary><p>{section.curiosity}</p>
            </details>
          )}
          <details className="learning-reader__sources">
            <summary>这一节的资料</summary>
            <ul>
              {section.sources.map((url) => {
                const source = sources.get(url);
                return source ? <li key={url}><a href={url} target="_blank" rel="noreferrer">{source.title}</a></li> : null;
              })}
            </ul>
          </details>
        </section>
      ))}

      <section className="learning-reader__chapter" aria-labelledby={headingId('observation')}>
        <p className="learning-reader__number">09</p>
        <h3 id={headingId('observation')} tabIndex={-1}>再观察一下</h3>
        <p>{learning.observation.prompt}</p>
        <div className="learning-reader__observation-images">
          <LearningImages images={learning.observation.images} frames={frames} onOpenImage={onOpenImage} />
        </div>
        <p className="learning-reader__image-note">{learning.observation.note}</p>
        <h4>想一想，再展开问题看看参考回答</h4>
        {learning.observation.questions.map((question) => (
          <details className="learning-reader__question" key={question.question}>
            <summary>{question.question}</summary><p>{question.answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
}
