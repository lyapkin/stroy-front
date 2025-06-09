export type SitemapItem = {
  slug: string;
  change_freq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: string;
};

export type SitemapKey =
  | "static"
  | "products"
  | "groups"
  | "categories"
  | "posts";

export type Sitemap = Record<SitemapKey, SitemapItem[]>;
