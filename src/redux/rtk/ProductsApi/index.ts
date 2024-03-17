import { jdmpowerApi as api } from "@redux/api";

import { GetAllProductResponseDto } from "./types";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<GetAllProductResponseDto, void>({
      query: () => ({ url: "/products" }),
    }),
  }),
});
export { injectedRtkApi as ProductsApi };

export const { useGetAllProductsQuery, useLazyGetAllProductsQuery } = injectedRtkApi;
