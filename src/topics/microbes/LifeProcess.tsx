import { useState } from 'react';
import { ArrowRight, Milk, Wheat, CircleDot, Hand, GlassWater, Sun, Waves, Smile, Turtle, Droplets, type LucideIcon } from 'lucide-react';
import type { MicrobeTopic } from './content';
import type { LearningStory } from './learning';

function SceneDrawing({ item, step }: { item: MicrobeTopic; step: number }) {
  const slug = item.slug;
  const food = slug === 'saccharomyces-cerevisiae';
  const milk = slug === 'streptococcus-thermophilus' || slug === 'lactobacillus-delbrueckii';
  const tooth = slug === 'streptococcus-mutans';
  const light = slug === 'euglena-gracilis';
  const icons: readonly LucideIcon[] = food ? [Wheat, CircleDot, Wheat] : milk ? [Milk, CircleDot, Milk]
    : tooth ? [Smile, CircleDot, Smile] : light ? [Sun, CircleDot, Waves]
    : slug === 'salmonella-enterica' ? [Turtle, Hand, Droplets]
    : slug === 'giardia-duodenalis' ? [CircleDot, GlassWater, CircleDot]
    : slug === 'paramecium-caudatum' ? [Waves, CircleDot, CircleDot]
    : slug === 'bifidobacterium-bifidum' ? [CircleDot, CircleDot, CircleDot] : [CircleDot, Hand, Hand];
  const Icon = icons[step]!;
  return <div className="life-process__drawing" aria-hidden="true">
    <Icon size={66} strokeWidth={1.3} />
    <svg viewBox="0 0 220 100" focusable="false">
      {food ? <><path d={step === 0 ? 'M35 85Q35 50 110 50Q185 50 185 85Z' : 'M25 85Q25 12 110 12Q195 12 195 85Z'} className="process-outline" />{Array.from({ length: step === 0 ? 3 : 9 }, (_, n) => <circle key={n} cx={65 + (n % 3) * 43} cy={step === 0 ? 68 : 32 + Math.floor(n / 3) * 18} r={step === 0 ? 3 : 6} />)}</>
        : milk ? <><path d="M65 10H155L145 90H75Z" className="process-outline" /><path d="M70 40H150" className="process-outline" />{[0, 1, 2, 3, 4].map(n => <g key={n} transform={`translate(${86 + n % 3 * 22} ${53 + Math.floor(n / 3) * 22})`}>{slug === 'lactobacillus-delbrueckii' ? <rect width="6" height="13" rx="3" /> : <><circle r="3" /><circle cy="7" r="3" /></>}</g>)}</>
        : light ? <><path d="M35 77Q75 5 160 30Q140 90 35 77Z" className="process-outline" />{[0, 1, 2].map(n => <ellipse key={n} cx={75 + n * 26} cy={56 - n * 3} rx="8" ry="15" />)}<path d="M160 30Q200 0 198 52" className="process-outline" /></>
        : tooth ? <><path d="M70 15Q45 10 55 47L69 87Q80 97 89 60Q110 42 131 60Q140 97 151 87L165 47Q175 10 150 15Q110 30 70 15Z" className="process-outline" />{[0, 1, 2, 3].map(n => <circle key={n} cx={85 + n * 16} cy="31" r="4" />)}{step === 2 && <path d="M91 39L102 50L116 39" className="process-outline" />}</>
        : slug === 'giardia-duodenalis' ? <>{step === 2
          ? <><path d="M110 12C53 12 65 63 110 89C155 63 167 12 110 12Z" className="process-outline" /><ellipse cx="98" cy="38" rx="5" ry="7" /><ellipse cx="122" cy="38" rx="5" ry="7" />{[0, 1, 2, 3].flatMap(n => [-1, 1].map(side => <path key={`${n}-${side}`} d={`M${110 + side * (25 - n * 5)} ${38 + n * 10}Q${110 + side * 70} ${60 + n * 8} ${110 + side * (90 - n * 18)} ${65 + n * 9}`} className="process-outline" />))}</>
          : <><ellipse cx="110" cy="50" rx="37" ry="43" className="process-outline" />{[0, 1, 2, 3].map(n => <circle key={n} cx={98 + n % 2 * 24} cy={35 + Math.floor(n / 2) * 27} r="6" />)}</>}</>
        : slug === 'paramecium-caudatum' ? <><ellipse cx="110" cy="50" rx="64" ry="32" className="process-outline" />{Array.from({ length: 24 }, (_, n) => { const angle = n / 24 * Math.PI * 2; return <path key={n} d={`M${110 + 64 * Math.cos(angle)} ${50 + 32 * Math.sin(angle)}l${8 * Math.cos(angle)} ${8 * Math.sin(angle)}`} className="process-outline" />; })}<path d="M150 33Q124 50 150 68" className="process-outline" />{[0, 1, 2].map(n => <circle key={n} cx={step === 0 ? 187 + n * 7 : step === 1 ? 145 + n * 7 : 81 + n * 18} cy={40 + n * 7} r={step === 2 ? 7 : 3} className={step === 2 ? 'process-outline' : undefined} />)}</>
        : slug === 'bifidobacterium-bifidum' ? <><path d="M80 83V52L60 26M80 52L103 24M139 84V56L120 34M139 56L158 30" className="process-outline" />{[0, 1, 2, 3, 4, 5].map(n => <circle key={n} cx={30 + n * 32} cy={step === 0 ? 16 : 16 + n % 2 * 70} r={step === 0 ? 6 : 3} />)}</>
        : <><path d="M20 75Q60 45 110 75T200 75" className="process-outline" />{[0, 1, 2, 3, 4].map(n => <rect key={n} x={40 + n * 32} y={25 + n % 2 * 15} width="8" height="18" rx="4" transform={`rotate(${n * 15} ${44 + n * 32} 40)`} />)}</>}
    </svg>
  </div>;
}

export function LifeProcess({ item, story }: { item: MicrobeTopic; story: LearningStory }) {
  const [step, setStep] = useState(0);
  return <section className="life-process" aria-label={`${item.name}的生活过程`}>
    <p className="microbes-eyebrow">点选步骤，看变化怎样发生</p>
    <div className="life-process__steps" role="group" aria-label="过程步骤">{story.process.map((label, index) => <button key={label} type="button" aria-pressed={index === step} onClick={() => setStep(index)}><span>{index + 1}</span>{label}{index < 2 && <ArrowRight size={16} aria-hidden="true" />}</button>)}</div>
    <div className="life-process__stage"><SceneDrawing item={item} step={step} /><div aria-live="polite"><h4>{story.process[step]}</h4><p>{story.processNotes[step]}</p></div></div>
    <p className="diagram-note">过程与图标为教学示意，不是显微影像，不按比例。</p>
  </section>;
}
