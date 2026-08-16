import { useCallback, useEffect } from 'react';

if (import.meta.env.DEV) void import('./PrototypeSwitcher.css');

/** PROTOTYPE ONLY — remove this switcher after a homepage direction is chosen. */
export interface PrototypeVariant {
  readonly key: string;
  readonly label: string;
}

export interface PrototypeSwitcherProps {
  readonly variants: readonly PrototypeVariant[];
  readonly current: string;
  readonly onChange: (key: string) => void;
}

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  if (target.closest('input, textarea, select')) return true;

  const editable = target.closest('[contenteditable]');
  return editable !== null && editable.getAttribute('contenteditable')?.toLowerCase() !== 'false';
}

export function PrototypeSwitcher({
  variants,
  current,
  onChange,
}: PrototypeSwitcherProps) {
  const currentIndex = variants.findIndex((variant) => variant.key === current);

  const cycle = useCallback((direction: -1 | 1) => {
    if (variants.length < 2) return;

    const origin = currentIndex >= 0 ? currentIndex : direction > 0 ? -1 : 0;
    const nextIndex = (origin + direction + variants.length) % variants.length;
    const nextVariant = variants[nextIndex];

    if (nextVariant) onChange(nextVariant.key);
  }, [currentIndex, onChange, variants]);

  useEffect(() => {
    if (!import.meta.env.DEV || variants.length < 2) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        document.querySelector('[role="dialog"][aria-modal="true"]') ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        isEditableTarget(event.target) ||
        isEditableTarget(document.activeElement)
      ) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        cycle(-1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        cycle(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cycle, variants.length]);

  if (!import.meta.env.DEV || variants.length === 0) return null;

  const activeVariant = variants[currentIndex] ?? variants[0];
  if (!activeVariant) return null;

  const previousIndex = (Math.max(currentIndex, 0) - 1 + variants.length) % variants.length;
  const nextIndex = (Math.max(currentIndex, -1) + 1) % variants.length;
  const previousVariant = variants[previousIndex];
  const nextVariant = variants[nextIndex];
  const canCycle = variants.length > 1;

  return (
    <aside className="prototype-switcher" aria-label="首页原型方案切换器">
      <button
        className="prototype-switcher__button"
        type="button"
        onClick={() => cycle(-1)}
        disabled={!canCycle}
        aria-label={`上一个原型方案${previousVariant ? `：${previousVariant.label}` : ''}`}
        aria-keyshortcuts="ArrowLeft"
      >
        <span aria-hidden="true">←</span>
      </button>

      <div
        className="prototype-switcher__current"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="prototype-switcher__eyebrow" aria-hidden="true">PROTOTYPE</span>
        <span className="prototype-switcher__label">
          <strong>{activeVariant.key}</strong>
          <span aria-hidden="true">—</span>
          <span>{activeVariant.label}</span>
        </span>
      </div>

      <button
        className="prototype-switcher__button"
        type="button"
        onClick={() => cycle(1)}
        disabled={!canCycle}
        aria-label={`下一个原型方案${nextVariant ? `：${nextVariant.label}` : ''}`}
        aria-keyshortcuts="ArrowRight"
      >
        <span aria-hidden="true">→</span>
      </button>
    </aside>
  );
}
