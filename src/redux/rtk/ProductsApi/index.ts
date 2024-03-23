import { jdmpowerApi as api } from "@redux/api";

import {
  GetAllProductQueryDto,
  GetAllProductResponseDto,
  ProductResponseDto,
  ProductSearchQueryArgDto,
} from "./types";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<GetAllProductResponseDto, GetAllProductQueryDto>({
      query: (queryArg) => ({
        url: "/products",
        params: {
          sortBy: queryArg.sortBy,
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
    getProductsBySearch: build.query<ProductResponseDto[], ProductSearchQueryArgDto>(
      {
        query: (queryArg) => ({
          url: "/products/search",
          params: {
            searchTerm: queryArg.searchTerm,
          },
        }),
      },
    ),
  }),
});
export { injectedRtkApi as ProductsApi };

export const {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetProductsBySearchQuery,
  useLazyGetProductsBySearchQuery,
} = injectedRtkApi;
