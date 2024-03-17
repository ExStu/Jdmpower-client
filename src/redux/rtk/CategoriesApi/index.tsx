import { jdmpowerApi as api } from "@redux/api";

import { CategoryResponseDto } from "./types";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<CategoryResponseDto, void>({
      query: () => ({ url: "/categories" }),
    }),
  }),
});
export { injectedRtkApi as CategoriesApi };

export const { useGetCategoriesQuery, useLazyGetCategoriesQuery } = injectedRtkApi;
