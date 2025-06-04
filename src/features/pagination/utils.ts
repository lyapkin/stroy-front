export const getPaginationPages = (page: number, pageCount?: number) => {
  if (!pageCount) return [];
  if (pageCount <= 7) {
    return [...Array(pageCount)].map((_, i) => i + 1);
  } else if (page === 1 || page === 2 || page === 3) {
    return [1, 2, 3, 4, 5, null, pageCount];
  } else if (
    page === pageCount ||
    page === pageCount - 1 ||
    page === pageCount - 2
  ) {
    return [
      1,
      null,
      pageCount - 4,
      pageCount - 3,
      pageCount - 2,
      pageCount - 1,
      pageCount,
    ];
  } else {
    return [1, null, page - 1, page, page + 1, null, pageCount];
  }
};
