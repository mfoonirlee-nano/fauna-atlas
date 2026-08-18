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
