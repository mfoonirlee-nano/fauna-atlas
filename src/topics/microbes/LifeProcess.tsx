import { useState } from 'react';
import type { MicrobeTopic } from './content';
import type { LearningStory } from './learning';

export function LifeProcess({ item, story }: { item: MicrobeTopic; story: LearningStory }) {
  const [step, setStep] = useState(0);
  return <section className="life-process" aria-label={`${item.name}的生活过程`}>
    <h4>这件事是怎样发生的？</h4>
    <div className="life-process__steps" role="group" aria-label="过程步骤">
      {story.process.map((label, index) => <button key={label} type="button" aria-pressed={index === step} onClick={() => setStep(index)}><span>{index + 1}</span>{label}</button>)}
    </div>
    <p className="life-process__explanation" aria-live="polite">{story.processNotes[step]}</p>
  </section>;
}
