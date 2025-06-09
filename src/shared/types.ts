export type Metadata = {
  id: number;
  title: string;
  description: string;
  noindex_follow: boolean;
  change_freq: string;
  priority: string;
};

export type Page = {
  id: number;
  slug: string;
  title: string;
  metadata: Metadata | null;
};
