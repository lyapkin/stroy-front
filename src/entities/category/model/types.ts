export type Category = {
  id: number;
  name: string;
  slug: string;
  // image: string;
};

export type CategoryGroup = {
  id: number;
  name: string;
  slug: string;
  image?: string;
  categories: Category[];
};
