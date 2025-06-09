import { getSitemapApi } from "@/src/app/api";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapData = await getSitemapApi();
  const result: MetadataRoute.Sitemap = [];

  sitemapData["static"].forEach((item) => {
    result.push({
      url: new URL(
        item.slug === "home" ? "" : `${item.slug}/`,
        process.env.NEXT_PUBLIC_SITE_URL
      ).toString(),
      changeFrequency: item.change_freq,
      priority: Number(item.priority),
    });
  });

  sitemapData["groups"].map((item) => {
    result.push({
      url: new URL(
        `${SITEMAP_MAPPING["groups"]}${item.slug}/`,
        process.env.NEXT_PUBLIC_SITE_URL
      ).toString(),
      changeFrequency: item.change_freq,
      priority: Number(item.priority),
    });
  });

  sitemapData["categories"].map((item) => {
    result.push({
      url: new URL(
        `${SITEMAP_MAPPING["categories"]}${item.slug}/`,
        process.env.NEXT_PUBLIC_SITE_URL
      ).toString(),
      changeFrequency: item.change_freq,
      priority: Number(item.priority),
    });
  });

  sitemapData["products"].map((item) => {
    result.push({
      url: new URL(
        `${SITEMAP_MAPPING["products"]}${item.slug}/`,
        process.env.NEXT_PUBLIC_SITE_URL
      ).toString(),
      changeFrequency: item.change_freq,
      priority: Number(item.priority),
    });
  });

  sitemapData["posts"].map((item) => {
    result.push({
      url: new URL(
        `${SITEMAP_MAPPING["posts"]}${item.slug}/`,
        process.env.NEXT_PUBLIC_SITE_URL
      ).toString(),
      changeFrequency: item.change_freq,
      priority: Number(item.priority),
    });
  });

  return result;
}

const SITEMAP_MAPPING = {
  static: "/",
  products: "product/",
  groups: "catalog/",
  categories: "catalog/",
  posts: "blog/",
};
