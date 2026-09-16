const PAGE_SIZE = 12;

/** Paginate the filtered catalogue, keeping at most five page buttons visible. */
export function paginateSpecies<T>(items: readonly T[], requestedPage: number) {
  const totalPages = Math.ceil(items.length / PAGE_SIZE);
  const page = Math.max(1, Math.min(Math.trunc(requestedPage) || 1, totalPages));
  const start = (page - 1) * PAGE_SIZE;
  const end = Math.min(start + PAGE_SIZE, items.length);
  const firstPage = Math.max(1, Math.min(page - 2, totalPages - 4));

  return {
    page,
    totalPages,
    start,
    end,
    items: items.slice(start, end),
    pages: Array.from({ length: Math.min(5, totalPages) }, (_, index) => firstPage + index),
  };
}
