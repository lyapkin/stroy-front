import { Page } from "./types";

export const backFetch = async (path: string, revalidate?: number) => {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL);
  const res = await fetch(url, {
    next: {
      revalidate: revalidate || 0,
    },
  });
  return res;
};

export const getPageApi = async (slug: string): Promise<Page> => {
  const response = await backFetch(`pages/static/${slug}/`);

  return await response.json();
};
