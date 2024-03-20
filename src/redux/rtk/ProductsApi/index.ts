import { jdmpowerApi as api } from "@redux/api";

import { GetAllProductQueryDto, GetAllProductResponseDto } from "./types";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<GetAllProductResponseDto, GetAllProductQueryDto>({
      query: (queryArg) => ({
        url: "/products",
        params: {
          sort: queryArg.sort,
          searchTerm: queryArg.searchTerm,
          ratings: queryArg.ratings,
          minPrice: queryArg.minPrice,
          maxPrice: queryArg.maxPrice,
          categoryId: queryArg.categoryId,
          manufactureId: queryArg.manufactureId,
          generationId: queryArg.generationId,
          pageNumber: queryArg.pageNumber,
        },
      }),
    }),
  }),
});
export { injectedRtkApi as ProductsApi };

export const { useGetAllProductsQuery, useLazyGetAllProductsQuery } = injectedRtkApi;
