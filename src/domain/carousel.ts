export interface CarouselAutoplayState {
  readonly slideCount: number;
  readonly paused: boolean;
  readonly reducedMotion: boolean;
  readonly interacting: boolean;
  readonly pageVisible: boolean;
  readonly inViewport: boolean;
  readonly obscured: boolean;
}

export function wrapCarouselIndex(index: number, slideCount: number): number {
  if (slideCount <= 0) return 0;
  return ((index % slideCount) + slideCount) % slideCount;
}

export function stepCarouselIndex(currentIndex: number, step: number, slideCount: number): number {
  return wrapCarouselIndex(currentIndex + step, slideCount);
}

export function shouldAutoplayCarousel({
  slideCount,
  paused,
  reducedMotion,
  interacting,
  pageVisible,
  inViewport,
  obscured,
}: CarouselAutoplayState): boolean {
  return slideCount > 1 && !paused && !reducedMotion && !interacting && pageVisible && inViewport && !obscured;
}

export interface CoverSubject {
  readonly width: number;
  readonly height: number;
  readonly bounds: { readonly left: number; readonly top: number; readonly right: number; readonly bottom: number };
}

/** Fit the reviewed silhouette into its own panel, keeping a real 24px margin. */
export function fitHeroSubject(subject: CoverSubject, width: number, height: number) {
  const { bounds } = subject;
  const scale = Math.min(
    Math.max(0, width - 48) / (bounds.right - bounds.left),
    Math.max(0, height - 48) / (bounds.bottom - bounds.top),
  );
  return {
    width: subject.width * scale,
    height: subject.height * scale,
    left: (width - (bounds.left + bounds.right) * scale) / 2,
    top: (height - (bounds.top + bounds.bottom) * scale) / 2,
  };
}
