import { backFetch } from "@/src/shared/api";
import { CategoryGroup } from "./model/types";

export const getCategoryGroupsApi = async (): Promise<CategoryGroup[]> => {
  const res = await backFetch("catalog/groups/");
  return res.json();
};

// export const getCategoriesApi = async (): Promise<Category[]> => {
//   return [
//     {
//       id: 1,
//       name: "Щит угловой распалубочный 1,5 м",
//       slug: "slug1",
//     },
//     {
//       id: 2,
//       name: "Щит угловой распалубочный 3,0 м",
//       slug: "slug2",
//     },
//     {
//       id: 3,
//       name: "Щит угловой распалубочный 3,3 м",
//       slug: "slug",
//     },
//     {
//       id: 4,
//       name: "Винтовая пара",
//       slug: "slug",
//     },
//     {
//       id: 5,
//       name: "Винтовая пара",
//       slug: "slug",
//     },
//   ];
// };
