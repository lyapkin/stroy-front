export const generateQueryKey = (searchParams: URLSearchParams) => {
  return Object.fromEntries(searchParams.entries());
};
