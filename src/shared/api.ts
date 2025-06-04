export const backFetch = async (path: string, revalidate?: number) => {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL);
  const res = await fetch(url, {
    next: {
      revalidate: revalidate || 0,
    },
  });
  return res;
};
