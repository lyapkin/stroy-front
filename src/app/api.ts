import { backFetch } from "../shared/api";
import { Sitemap } from "./types";

export const getSitemapApi = async (): Promise<Sitemap> => {
  const response = await backFetch("metadata/sitemap/_/");

  return response.json();
};
