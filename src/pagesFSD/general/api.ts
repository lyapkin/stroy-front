import { backFetch } from "@/src/shared/api";
import { PageContent } from "./types";

export const getPolicyApi = async (slug: string): Promise<PageContent> => {
  const response = await backFetch(`policy/${slug}/`);

  return await response.json();
};

export const getGeneralContentApi = async (
  slug: string
): Promise<{ content: string }> => {
  const response = await backFetch(`pages/content/${slug}/`);

  return response.json();
};
