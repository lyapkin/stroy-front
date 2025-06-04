export type Paginated<T> = {
  count: number;
  next?: string;
  previous?: string;
  pages: number;
  results: T[];
};
